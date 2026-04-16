# OpenClaw 生态日报 2026-04-16

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-16 02:54 UTC

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

# OpenClaw 项目动态日报 (2026-04-16)

## 1. 今日速览

OpenClaw 项目今日保持极高的活跃度，过去24小时内共有 500 条 Issue 更新与 500 条 PR 更新。项目发布了 **v2026.4.15-beta.1** 版本，重点增强了控制面板的模型认证状态监控能力。然而，社区面临严峻挑战，**Onboarding/Configure 流程出现大规模崩溃**（`TypeError: Cannot read properties of undefined (reading 'trim')`），导致大量新用户无法完成初始化配置，该问题成为今日关注焦点。此外，关于 Agent 身份验证与信任机制的 RFC 讨论热度不减，显示出社区对 AI Agent 安全架构的深度探索。

## 2. 版本发布

**v2026.4.15-beta.1** 已发布。
- **更新亮点**：Control UI 新增 **Model Auth status card**，支持一键查看 OAuth Token 健康状态及 Provider 速率限制压力，并在 Token 即将过期或已过期时发出提醒。后端新增 `models.authStatus` 网关方法（剥离敏感信息并缓存 60s）。
- **影响**：提升了多模型环境下的运维可观测性，减少了因 Token 过期或限流导致的静默失败。

## 3. 项目进展

今日共有 149 个 PR 合并/关闭，项目在稳定性修复与生态集成方面取得明显进展：

- **[CLOSED] #43961 fix(gateway): SIGKILL stale process**  
  修复了 Gateway 重启/停止时，若优雅关闭超时可能导致的僵尸进程问题，确保新进程启动前旧进程彻底清理。
- **[OPEN] #65554 feat: WebChat Media Support v2**  
  为 WebChat 补全了图片、音频等多媒体支持，显著提升了 Web 端交互体验。
- **[OPEN] #35071 feat: Add Eval Framework for skill-creator**  
  推进 Skill 评估框架的开发，将支持技能测试、基准测试与触发分析，为 Skill 市场质量保驾护航。
- **[OPEN] #67475 fix(memory-lancedb): reject inbound envelope metadata**  
  修复了记忆模块将传输元数据误存为长期记忆的 Bug，防止 Prompt 污染。
- **[OPEN] #67484 fix(ollama): strip ollama/ prefix**  
  修复了 Ollama Provider 因模型 ID 前缀问题导致 404 错误的细节 Bug。

## 4. 社区热点

今日讨论最活跃的话题集中在以下两个领域：

1.  **RFC: Native Agent Identity & Trust Verification (#49971)**  
    该 Issue 已积累 90 条评论，讨论如何基于 ERC-8004、W3C DID/VC 标准为 OpenClaw 建立原生代理身份与信任验证机制。这反映了社区对 AI Agent 间安全交互与可信身份体系的迫切需求。
2.  **Onboarding "trim" TypeError 崩溃潮**  
    大量用户报告在 `openclaw configure` 或 `openclaw onboard` 阶段遇到 `Cannot read properties of undefined (reading 'trim')` 错误，相关 Issue 包括 **#67353, #67291, #67347, #67074** 等。这表明 v2026.4.14/4.15 版本引入了严重的回归问题，阻碍了用户配置流程。

## 5. Bug 与稳定性

今日报告的 Bug 数量较多，部分影响范围广泛：

**严重 - 阻塞性问题**
- **#66718 / #67353 / #67291 / #67347 [Bug]: Onboarding/Configure crashes with TypeError (reading 'trim')**  
  **描述**：在配置向导中选择 Channel 或 Skip 时触发 `TypeError`，导致 CLI 不可用。  
  **状态**：部分 Issue (如 #67353, #67130) 已关闭，可能已定位根因或发布修复补丁，但仍有新报告，需关注后续修复 PR 合并情况。
- **#66633 [Bug]: openai-codex provider fails with Cloudflare 403**  
  **描述**：升级至 4.14 后，OpenAI Codex 接口遭遇 Cloudflare 拦截 (403)。  
  **状态**：OPEN，暂无修复 PR。

**中等 - 功能回归**
- **#67035 [Bug]: Windows chat UI regression**  
  **描述**：输入文本被吞、流式回复不可见。
- **#66601 [Bug]: Context engine errors in v2026.4.14**  
  **描述**：升级后 Context Engine 初始化失败，系统不可用。
- **#67425 [Bug]: OpenRouter turns abandoned with payloads=0**  
  **描述**：本地嵌入式运行器丢弃 OpenRouter 请求，无模型输出。

**轻微 - 体验问题**
- **#66207 [Bug]: Control UI chat flickers**  
  描述：发送消息后短暂消失再重现。

## 6. 功能请求与路线图信号

- **#55342 [RFC] Behavioral reputation for skills**  
  提出在身份验证之上构建 Skill 行为信誉系统，以识别恶意技能。结合 #49971 的讨论，预计未来版本将强化 Agent 安全与信任体系。
- **#20562 [Feature]: Add Serper.dev as web_search provider**  
  鉴于 Brave Search 取消免费层，用户呼吁集成 Serper.dev。该 Issue 已关闭，可能已被社区 PR 纳入或计划中。
- **#28106 [RFC]: Agent-to-Agent Task Delegation Protocol**  
  推动建立跨实例的 Agent 任务委托协议，构建去中心化 Agent 经济。

## 7. 用户反馈摘要

- **安装/配置受阻**：大量用户反馈无法完成初始化配置，"尝试配置 Telegram/Slack 频道时直接崩溃"，对新版本体验造成严重打击。
- **模型稳定性担忧**：升级后 "OpenAI Codex 403"、"OpenRouter 无响应" 等问题频发，用户对 v2026.4.14/4.15 的稳定性表示不满。
- **UI/UX 体验**：Web UI 的消息闪烁、输入丢失问题（#67035, #66207）降低了交互可靠性。
- **正向反馈**：v2026.4.15-beta.1 中增加的 Auth Status Card 受到运维用户关注，认为有助于排查 Token 问题。

## 8. 待处理积压

以下长期未决问题需维护者关注，避免影响用户信心：

- **#52221 [Bug]: Context monitor shows 0% forever**  
  Context Token 使用量统计长期硬编码为 0，无法动态更新，影响上下文管理体验。
- **#25592 [Bug]: Text between tool calls leaks to messaging channels**  
  Agent 内部处理文本意外泄露到用户消息通道，影响专业性，且已存在较久。
- **#35078 [Bug]: Plugin native bindings fail under Jiti loader**  
  mem0 OSS 模式因原生模块加载问题完全失效，影响记忆功能用户。

---
**分析师总结**：OpenClaw 项目正处于快速迭代期，功能扩展迅速，但 v2026.4.14/4.15 引入的 Onboarding 回归问题严重影响了用户第一印象。建议团队优先修复 `trim` TypeError 及 Provider 连接问题，并在后续版本加强回归测试，尤其是配置向导流程与主流模型 Provider 的兼容性验证。

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告 (2026-04-16)

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于**功能爆发与架构重构并存的关键期**。各项目在多模态交互、多模型适配及记忆管理上的投入显著增加，显示出从单一对话工具向复杂任务执行平台演进的明确趋势。然而，**稳定性与配置体验仍是最大短板**，多个核心项目出现阻断性 Bug（如 OpenClaw 的 Onboarding 崩溃、CoPaw 的页面卡顿），表明生态在快速迭代中尚未完全解决工程化落地的质量问题。此外，**本地模型支持与安全架构**（身份认证、沙箱隔离）已成为区分项目成熟度的重要分水岭。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PRs 活跃度 | 版本发布 | 健康度评估 | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 极高 (~500) | 极高 (~500) | v2026.4.15-beta.1 | ⚠️ 风险 | 发布频繁，但出现严重回归 Bug，社区讨论热度最高。 |
| **CoPaw** | 高 (50) | 高 (50) | v1.1.2-beta.1 | 🟡 中等 | 发布双版本，长对话性能瓶颈待解，社区活跃度高。 |
| **Zeroclaw** | 高 (40) | 高 (50) | 无 | ⚠️ 风险 | PR 积压严重，严重 Bug 持续发酵，处于架构重构期。 |
| **Hermes Agent** | 高 (38) | 高 (50) | 无 | 🟢 良好 | 插件系统完善中，社区对多平台支持呼声强烈。 |
| **IronClaw** | 中 (18) | 高 (50) | 无 | ⚠️ 风险 | 曝出 P0 级安全漏洞，核心功能合并积极。 |
| **NanoClaw** | 低 (5) | 高 (18) | 无 | 🟢 良好 | 开发强度大，专注于基础设施与多模型支持。 |
| **NanoBot** | 低 (7) | 高 (51) | 无 | 🟢 良好 | 快速响应修复崩溃问题，稳定性较好。 |
| **PicoClaw** | 低 (7) | 中 (15) | v0.2.6-nightly | 🟢 优秀 | 合并效率极高，迭代迅速，功能增强明显。 |
| **Moltis** | 低 (3) | 高 (15) | 无 | 🟢 优秀 | 代码重构与协议升级并进，质量显著提升。 |
| **LobsterAI** | 低 (3) | 中 (16) | 无 | 🟡 中等 | 迁移清理工作为主，存在严重的端口冲突 Bug。 |
| **NullClaw** | 低 (6) | 低 (8) | 无 | 🟢 良好 | 专注于底层安全与 Zig 迁移，社区平稳。 |
| **EasyClaw** | 低 (1) | 低 (1) | v1.7.11 | 🔴 低 | 发布即出现更新失败，维护响应待提升。 |
| **TinyClaw / ZeptoClaw** | 无 | 无 | 无 | - | 无活动。 |

## 3. OpenClaw 在生态中的定位
OpenClaw 是当前生态中**规模最大、讨论热度最高、功能探索最激进的核心参照项目**。
*   **社区规模**：其 Issue/PR 活动量是其他项目的 10 倍以上，不仅是功能的集大成者，也是问题的“暴风眼”。
*   **技术路线**：相比其他项目专注于单一垂直领域（如 LobsterAI 的企业集成、Moltis 的通讯协议），OpenClaw 正在构建最复杂的上层建筑，如基于 W3C 标准的 Agent 身份验证（RFC #49971）和 Skill 评估框架，试图定义行业标准。
*   **对比劣势**：其复杂的架构导致了最严重的稳定性问题，相比 PicoClaw 或 NanoBot 的高效修复，OpenClaw 在版本质量把控上显得力不从心，Onboarding 流程的崩溃对新手极其不友好。

## 4. 共同关注的技术方向

*   **本地模型与多模型支持**：
    *   **诉求**：摆脱对单一云端模型的依赖，降低成本，支持本地推理。
    *   **涉及项目**：NanoBot (支持 LM Studio)、NanoClaw (集成 OpenAI/Ollama)、PicoClaw (修复 LongCat/搜狗搜索)、CoPaw (本地路由配置)。

*   **记忆与上下文管理优化**：
    *   **诉求**：解决长对话下的 Token 超限、记忆丢失及性能卡顿问题。
    *   **涉及项目**：OpenClaw (修复 Memory 元数据污染)、Moltis (引入 Oldest-first compaction 策略)、CoPaw (前端长对话卡顿)、Hermes Agent (压缩 Memory.md 降低成本)。

*   **安全与权限控制**：
    *   **诉求**：防止 Prompt 注入、敏感信息泄露及细粒度的操作审计。
    *   **涉及项目**：OpenClaw (Agent Identity RFC)、IronClaw (Secrets 扫描绕过漏洞)、NullClaw (Shell 沙箱环境变量)、Zeroclaw (高风险命令 TOTP 验证)。

*   **通讯渠道集成**：
    *   **诉求**：全平台覆盖，接入主流即时通讯软件。
    *   **涉及项目**：Hermes Agent (微信多账号)、Moltis (WhatsApp/Matrix OIDC)、LobsterAI (钉钉迁移)、NanoBot (Teams/飞书)。

## 5. 差异化定位分析

*   **功能侧重**：
    *   **OpenClaw / Zeroclaw**：致力于打造**全能型 Agent 操作系统**，涵盖身份、技能市场、微内核架构，追求极高的扩展性。
    *   **Hermes Agent / PicoClaw / CoPaw**：侧重**个人助理体验与易用性**，强调 Web UI 交互、多模态支持和部署便捷性。
    *   **NullClaw / IronClaw**：侧重**底层基础设施与安全**，关注 Zig/Rust 语言优势、TEE 环境和细粒度权限控制。
    *   **LobsterAI**：侧重**企业级集成**，深耕特定平台（钉钉、企业微信）的适配与迁移。

*   **架构选择**：
    *   **微内核/插件化**：OpenClaw, Hermes Agent, Zeroclaw (RFC 阶段)。
    *   **单体/模块化**：PicoClaw, NanoBot, Moltis (重写中)。

## 6. 社区热度与成熟度

*   **第一梯队：快速迭代期**
    *   **PicoClaw, Moltis**：PR 合并效率极高，Bug 响应快，社区健康度最好。
    *   **NanoBot, NanoClaw**：专注于核心功能补全与稳定性修复，处于良性上升通道。

*   **第二梯队：质量攻坚期**
    *   **OpenClaw, CoPaw**：热度极高但深受质量问题的困扰（Onboarding 崩溃、性能卡顿），需平衡迭代速度与测试覆盖率。
    *   **IronClaw, Zeroclaw**：面临架构升级带来的安全漏洞与重构阵痛，积压的 PR 与 Bug 需尽快消化。

*   **第三梯队：维护/停滞期**
    *   **EasyClaw**：活跃度低，版本发布受阻。
    *   **TinyClaw, ZeptoClaw**：无活动，可能处于维护停滞状态。

## 7. 值得关注的趋势信号

1.  **配置体验成为“隐形杀手”**：
    OpenClaw 的 Onboarding 崩溃、NanoClaw 的 Setup 冲突、EasyClaw 的更新失败表明，**“最后一公里”的安装配置已成为用户流失的主要原因**。对于开发者而言，优化 CLI 交互与自动化安装脚本的优先级应提升至与核心功能同等高度。

2.  **本地推理模型适配加速**：
    短期内多个项目同时发力支持 LM Studio 和 Ollama，反映了**数据隐私与成本控制**正在成为用户选择开源 Agent 的核心驱动力。

3.  **从“连接”到“治理”**：
    社区讨论重心正从单纯的“连接 IM 平台”转向**身份治理与安全合规**。ERC-8004/W3C DID 标准的引入讨论和细粒度权限控制的需求，预示着开源 Agent 正在为进入企业级生产环境做准备。

4.  **长上下文性能瓶颈显现**：
    CoPaw 的前端卡顿与 Hermes 的 Memory 压缩需求揭示了一个行业痛点：**随着对话增长，简单的上下文追加已不可持续**。未来竞争的焦点将在于谁拥有更高效的记忆压缩算法和上下文窗口管理策略。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-16)

## 1. 今日速览
NanoBot 项目今日维持高活跃度，社区与开发侧互动频繁。过去24小时内共有 65 次提交记录（Issues + PRs），其中 Issue 关闭数与新开数持平（7:7），显示出维护者处理反馈的高效节奏。PR 端表现尤为抢眼，更新量达 51 条，虽然待合并积压较多（33条），但已合并/关闭 18 条，重点解决了版本升级引发的兼容性崩溃问题，并成功合入了对 LM Studio 的原生支持。整体来看，项目正处于快速迭代期，核心稳定性修复与生态渠道拓展并行推进。

## 2. 版本发布
无新版本发布。尽管无新 Tag 发布，但根据 PR 活动推断，官方正密集修复 `v0.1.5.post1` 引入的回归问题，并为下一个版本积蓄功能。

## 3. 项目进展
今日共有 18 条 PR 被合并或关闭，重点推进了以下领域：

*   **核心兼容性与稳定性修复**：针对 Issue #3190 反馈的版本升级崩溃问题，PR #3195 提交了针对内存历史记录缺失 `cursor` 键的修复，解决了 `KeyError` 导致的启动失败问题。
*   **本地模型支持增强**：PR #3186 已关闭（推测已合并），正式引入了对 LM Studio 的原生支持，并允许 API Key 为空，显著降低了本地 LLM 用户的接入门槛。
*   **渠道生态完善**：
    *   **飞书**：PR #3169 正在处理飞书通道的进度通知缺失问题，完善了用户体验。
    *   **Microsoft Teams**：PR #2600 已关闭，但 PR #3191 重新发起了将 Teams 通道整合至 nightly 分支的请求，包含完整的重连逻辑与修复。
    *   **Discord**：PR #3178 修复了消息处理中的冗余代码。
*   **性能优化**：PR #3182 提出了引导文件与工具模式的缓存优化方案，旨在减少磁盘 I/O，提升 Agent 循环的响应速度。

## 4. 社区热点
今日社区讨论焦点集中在稳定性与易用性：

*   **[Issue #3190](HKUDS/nanobot Issue #3190)**：**最热议题**。关于 `v0.1.5` 升级到 `v0.1.5.post1` 后导致服务不可用的重大 Bug。用户报告显示这可能与 Memory 机制变更有关，引发了大量关注（7条评论），反映出用户对版本升级平滑度的极高敏感度。
*   **[Issue #3107](HKUDS/nanobot Issue #3107)**：**功能建议集散地**。用户 `aiguozhi123456` 提出的系统性改进建议（如状态显示、LLM 重试机制、Provider Fallback 等）获得了开发者的积极响应，部分建议已标记处理。
*   **[PR #3030](HKUDS/nanobot PR #3030)**：**Web 生态拓展**。关于 Web App 和 Mobile APIs 的巨大 PR（涉及近 600 行新代码），虽然尚未合并，但引发了关于项目架构扩展性的深层讨论。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，且严重程度较高，主要集中在内存管理与通道功能：

*   **[严重] [Issue #3190](HKUDS/nanobot Issue #3190)**：升级后服务崩溃，Memory 历史记录处理异常。
    *   *状态*：已有关联修复 PR [#3195](HKUDS/nanobot PR #3195) 提交，待审核合并。
*   **[严重] [Issue #2957](HKUDS/nanobot Issue #2957)**：Dream 技能意外清空 `MEMORY.md`，导致长期记忆丢失。
    *   *状态*：已关闭，推测已在 nightly 分支修复。
*   **[中等] [Issue #3166](HKUDS/nanobot Issue #3166)**：飞书通道不显示进度通知。
    *   *状态*：已有修复 PR [#3169](HKUDS/nanobot PR #3169)。
*   **[中等] [Issue #3143](HKUDS/nanobot Issue #3143)**：LLM 返回 "messages parameter is illegal" 错误，涉及 Token 整合逻辑。
    *   *状态*：已关闭，可能涉及提供商兼容性处理。
*   **[低] [Issue #3102](HKUDS/nanobot Issue #3102)**：AgentLoop 初始化参数类型错误 (`NoneType` vs `int`)。
    *   *状态*：已关闭。

## 6. 功能请求与路线图信号
*   **本地模型集成**：随着 [Issue #3185](HKUDS/nanobot Issue #3185) 的提出和 [PR #3186](HKUDS/nanobot PR #3186) 的快速跟进，NanoBot 明确加强了对本地推理模型（如 LM Studio）的支持，未来版本将进一步优化非 OpenAI 兼容接口的体验。
*   **任务调度增强**：[Issue #3123](HKUDS/nanobot Issue #3123) 指出 Cron 任务的消息上下文缺失问题，开发者正考虑重构 Cron 任务的 Session 隔离机制，以便 Agent 能回溯定时任务内容。
*   **可观测性提升**：[Issue #3107](HKUDS/nanobot Issue #3107) 中关于 "Status功能键" 和 "黑盒状态透明化" 的需求强烈，预计下一版本将重点优化用户对 Agent 内部状态的感知能力。

## 7. 用户反馈摘要
*   **痛点**：用户 `bigsinger` 在 Issues 中多次反馈错误日志，指出当前版本在 LLM 请求异常处理（如 Token 超限、参数非法）方面的提示不够友好，且错误频率较高。此外，`MEMORY.md` 文件的安全性（如被意外覆写）是用户普遍担忧的问题。
*   **满意点**：用户 `wyliletv` 在 Issue #623 中表达了对项目的喜爱，称其为 "first personal ai"，并肯定了项目的潜力，尽管遇到了自定义技能的配置困难。
*   **场景**：用户 `geekjam` 提到的 Cron 任务场景表明，NanoBot 正在被用于复杂的自动化工作流中，用户期望 Agent 能具备“跨会话记忆”的能力。

## 8. 待处理积压
*   **[PR #3030](HKUDS/nanobot PR #3030) - Web App and Mobile APIs**：该 PR 规模庞大，自 4 月 11 日开启至今仍在审核中。鉴于其对架构的重大影响，建议维护者尽快组织 Code Review 或拆分合并，避免功能分支滞后过久。
*   **[Issue #2220](HKUDS/nanobot Issue #2220) - 异步安全优化**：关于使用 `ContextVar` 优化工具路由上下文的提案已开启一月有余，尚未有实质性进展。该提案涉及底层架构安全性，建议维护者尽快排期评估。
*   **[PR #3196](HKUDS/nanobot PR #3196) - Browser Tools**：尝试引入浏览器工具的 PR 已被标记为 invalid 并关闭，可能缺乏详细的设计文档或与现有路线图冲突，建议贡献者重新梳理需求。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-16)

## 1. 今日速览
Zeroclaw 项目今日呈现**高活跃度、高堆积**的特征。社区互动极其热烈，过去24小时内新增/活跃 Issue 达 40 条，PR 更新达 50 条，但 PR 合并率极低（仅 1 条合并/关闭），显示项目正处于**功能密集开发与审查瓶颈期**。核心讨论围绕 v0.7.0 到 v1.0.0 的微内核架构重构 RFC 展开，同时 Web Dashboard 不可用的严重 Bug 持续发酵，成为社区痛点焦点。稳定性方面，内存溢出（OOM）与路径权限逻辑等 S0 级安全问题频现，亟待官方响应。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
尽管 PR 合并数量极少，但提交的 PR 内容显示出项目正在向**可观测性、安全性与架构解耦**方向深度演进：

*   **可观测性增强**：PR #5785 与 #5783 旨在构建完整的 OTEL 追踪管道，覆盖 Agent 生命周期与 LLM 请求/响应，这将极大提升生产环境下的调试能力。
*   **安全与权限细化**：PR #5779 提出为高风险 Shell 命令引入 TOTP 二次验证机制，试图在易用性与安全性之间寻找平衡；PR #5772 重构了文件搜索工具的速率限制逻辑。
*   **多渠道支持优化**：PR #5727 修复了 Matrix 加密媒体下载的回归问题，PR #5162 正在推进 Mattermost 的 WebSocket 实时监听支持，旨在降低轮询延迟。
*   **Bug 修复推进**：PR #5563 解决了 Windows 下 Shell 执行弹窗闪烁的问题，PR #5777 修复了流式传输中推理内容丢失导致的 Kimi/GLM 模型调用失败。

## 4. 社区热点
今日社区关注点集中在**架构未来**与**阻塞性缺陷**两方面：

*   **[Issue #5574] RFC: 微内核架构过渡**：社区核心贡献者 @WareWolf-MoonWall 发起了从单体向微内核架构转型的提案。该 Issue 获得 7 条深入讨论，标志着项目正酝酿重大底层重构，旨在解决代码膨胀与耦合问题。
    *   链接: [zeroclaw-labs/zeroclaw Issue #5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574)
*   **[Issue #4866] Web Dashboard 持续不可用**：这是目前评论数最高（12条）的 Open Issue。用户反馈构建后仍提示 Dashboard 不可用，且问题跨越多个版本持续存在，严重影响用户体验，属于高频投诉点。
    *   链接: [zeroclaw-labs/zeroclaw Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)
*   **[Issue #2691] 代码质量与社区协作争议**：该 Issue 获得了 9 个 👍，反映出部分社区成员对项目代码质量及维护态度的强烈不满。尽管已关闭，但其折射出的社区信任危机值得维护者警惕。
    *   链接: [zeroclaw-labs/zeroclaw Issue #2691](https://github.com/zeroclaw-labs/zeroclaw/issues/2691)

## 5. Bug 与稳定性
今日报告了多个严重影响使用的 Bug，其中 S0 级（数据丢失/安全风险）问题需优先处理：

*   **S0 - 严重安全/稳定性问题**：
    *   **WSL2 OOM 崩溃** (#5542)：用户在 WSL2 环境下频繁遭遇内存溢出导致进程被杀，影响长时间运行稳定性。
        *   链接: [zeroclaw-labs/zeroclaw Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)
    *   **路径权限逻辑缺陷** (#5533)：配置 `allowed_path` 后，子目录访问被拒绝，存在逻辑反转或匹配失效的安全隐患。
        *   链接: [zeroclaw-labs/zeroclaw Issue #5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533)
    *   **飞书机器人权限过滤失效** (#5672)：开启 `mention_only` 后，机器人仍响应非提及消息，可能导致信息泄露或干扰。
        *   链接: [zeroclaw-labs/zeroclaw Issue #5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672)

*   **S1 - 工作流阻塞**：
    *   **Web Dashboard 不可用** (#4866)：见社区热点，长期未解决。
    *   **Provider 兼容性**：Kimi-code (#5600) 与 Groq (#5670) 提供者均报错 400，影响特定模型调用。其中 Kimi 的问题已有 PR #5777 尝试修复。
    *   **Gemini OAuth 失效** (#4879, #5527)：CLI 认证无法正常工作。

*   **已有修复 PR**：
    *   Windows Shell 弹窗 (#5562) -> PR #5563 (Open)
    *   Kimi 推理内容丢失 (#5600 相关) -> PR #5777 (Open)

## 6. 功能请求与路线图信号
*   **架构治理 RFCs**：除微内核 RFC (#5574) 外，还有关于项目治理 (#5577)、文档标准 (#5576) 和 CI/CD 基础设施 (#5579) 的 RFC 提案。这表明项目正在**系统性地补齐工程化短板**，为 v1.0.0 做准备。
    *   链接: [zeroclaw-labs/zeroclaw Issue #5577](https://github.com/zeroclaw-labs/zeroclaw/issues/5577)
*   **编译速度优化**：Issue #5447 与 #5575 均指出 Rust 项目编译过慢严重影响开发效率，社区呼吁进行 Crate 拆分。这极有可能成为下一阶段重构的重点。
    *   链接: [zeroclaw-labs/zeroclaw Issue #5447](https://github.com/zeroclaw-labs/zeroclaw/issues/5447)
*   **原生 OpenRouter 支持** (#5619)：请求增加原生 Provider 字段支持，以利用 OpenRouter 的高级路由特性。
    *   链接: [zeroclaw-labs/zeroclaw Issue #5619](https://github.com/zeroclaw-labs/zeroclaw/issues/5619)

## 7. 用户反馈摘要
*   **部署体验差**：多个 Issue 反馈安装文档缺失或构建失败（#4866, #5269），用户难以通过标准流程跑通 Web 端，挫败感强。
*   **配置复杂且易错**：用户在配置 Telegram 加密 Token (#5654)、邮件通道 (#5528) 及路径权限时频繁受阻，反映出配置校验逻辑不足或文档引导缺失。
*   **性能焦虑**：编译慢、运行时 OOM、循环错误占用资源 (#5537) 等问题频发，用户对资源消耗表现出明显担忧。
*   **积极信号**：尽管存在批评，RFC 相关 Issue 的活跃讨论显示出核心社区对项目长期发展的深切关注和建设性意见。

## 8. 待处理积压
*   **高优先级未响应**：Issue #4866 (Web Dashboard 不可用) 已持续近 20 天，且为 S1 级别阻塞性问题，急需官方给出明确修复时间表或 Workaround。
    *   链接: [zeroclaw-labs/zeroclaw Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)
*   **RFC 决策滞压**：多个关键 RFC (#5574, #5577, #5579) 处于 Draft 阶段，亟待维护者评审与合并，以确定后续开发路线。
*   **PR 审查瓶颈**：49 个待合并 PR 中包含大量关键修复（如 Windows 体验修复 #5563、安全 TOTP #5779），建议项目方增加 Reviewer 人手或自动化测试覆盖率，以加速合并流程。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目动态日报 (2026-04-16)**

### 1. 今日速览
Hermes Agent 项目今日保持高活跃度，共处理了 50 条 Issue 更新（新开/活跃 38 条，关闭 12 条）和 50 条 PR 更新。项目无新版本发布，但核心开发重点集中在提升插件系统能力与修复网关稳定性问题上。今日最重要进展是合并了插件上下文命令注册功能的 PR，标志着插件生态扩展性迈出关键一步。同时，社区对微信多账号支持与 API 成本优化的呼声较高，显示出项目在多平台适配与生产环境降本增效方面的迫切需求。

### 2. 版本发布
无新版本发布。

### 3. 项目进展
今日共有 8 个 PR 被合并或关闭，项目在插件系统、权限管理和多平台适配上取得实质性突破：
*   **[MERGED] 插件命令系统完善**：PR #10626 实现了 `register_command()` 插件上下文方法，补全了插件系统的关键拼图，允许开发者注册自定义斜杠命令，大幅提升了扩展性。
    *   链接: [NousResearch/hermes-agent PR #10626](https://github.com/NousResearch/hermes-agent/pull/10626)
*   **[MERGED] Docker/NAS 权限修复**：PR #10618 修复了原子写入操作导致文件权限被覆盖的问题，解决了 Docker 和 NAS 环境下常见的 "Permission denied" 错误。
    *   链接: [NousResearch/hermes-agent PR #10618](https://github.com/NousResearch/hermes-agent/pull/10618)
*   **[CLOSED] 修复 Slack 事件路由**：Issue #10583 与 #10579 相关修复已处理，解决了 Slack 提及前缀破坏命令检测以及缺乏 Reaction 事件路由的问题，改善了 Slack 集成体验。

### 4. 社区热点
今日社区讨论最激烈的话题集中在安全配置与多平台支持上：
*   **安全披露机制讨论 (Issue #9179)**：评论数高达 24 条。社区呼吁项目启用 GitHub Private Vulnerability Reporting 功能，目前仓库安全页尚未配置该流程。这反映了用户对项目安全合规性的高度关注。
    *   链接: [NousResearch/hermes-agent Issue #9179](https://github.com/NousResearch/hermes-agent/issues/9179)
*   **微信多账号支持诉求 (Issue #9756)**：用户反馈当前 Gateway 设置仅支持单微信号绑定，无法满足家庭或团队共享场景，希望增加多账号功能。这是目前用户痛点最明显的功能缺口之一。
    *   链接: [NousResearch/hermes-agent Issue #9756](https://github.com/NousResearch/hermes-agent/issues/9756)
*   **项目原创性争议 (Issue #10625)**：有用户指责项目存在抄袭嫌疑，引发少量讨论（+3 👍）。虽然技术含量不高，但反映了部分社区成员对代码来源和原创性的敏感度。

### 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，部分已有对应修复方案：
*   **[严重] Agent 执行停滞 (Issue #10364)**：Agent 在调用工具时卡在 "preparing <tool>..." 状态且无法恢复，严重影响用户体验。目前尚无修复 PR。
    *   链接: [NousResearch/hermes-agent Issue #10364](https://github.com/NousResearch/hermes-agent/issues/10364)
*   **[严重] Anthropic OAuth 静默失败 (Issue #10575)**：使用 Claude Max 代理路径时，系统错误地将有效的系统提示归类为 "extra usage exhausted"，导致请求失败。PR #10664 已提出修复方案。
    *   链接: [NousResearch/hermes-agent Issue #10575](https://github.com/NousResearch/hermes-agent/issues/10575)
*   **[中等] CLI 自动补全异常 (Issue #9531)**：在 CLI 中使用 `@` 触发文件补全时抛出 `NameError: name 'self' is not defined` 异常。
    *   链接: [NousResearch/hermes-agent Issue #9531](https://github.com/NousResearch/hermes-agent/issues/9531)
*   **[已修复] 文件权限丢失**：针对 Docker 环境的权限问题已通过 PR #10618 修复。

### 6. 功能请求与路线图信号
用户提出了多项具有建设性的功能请求，部分已进入 PR 阶段：
*   **API 成本优化 (Issue #10585)**：建议引入多分辨率上下文压缩机制，通过压缩 `MEMORY.md` 等文件内容来降低 LLM 调用成本。这是应对 Agent 记忆膨胀的关键需求。
    *   链接: [NousResearch/hermes-agent Issue #10585](https://github.com/NousResearch/hermes-agent/issues/10585)
*   **Cron 任务优化 (Issue #10656 / PR #10659)**：建议为 Cron 任务增加 `script_skip_if_empty` 选项，当脚本无输出时跳过 LLM 调用。PR #10659 已提交实现，大概率会被纳入下个版本。
*   **TUI 实时状态指示器 (Issue #10658)**：SSH 远程使用场景下缺乏直观的活动指示器，用户无法判断 Agent 是否在工作。这反映了 CLI/TUI 体验优化的需求。
    *   链接: [NousResearch/hermes-agent Issue #10658](https://github.com/NousResearch/hermes-agent/issues/10658)

### 7. 用户反馈摘要
*   **多平台体验痛点**：除了微信多账号需求，Discord 和 Slack 的集成也存在细微问题（如 Issue #10411 的线程通知错乱），显示 Gateway 在多平台适配上的复杂度增加。
*   **安装与升级障碍**：Issue #10651 指出 `hermes upgrade` 在网络不佳时会静默失败，导致网关重启崩溃；Issue #7066 反映安装脚本被阻断。这表明安装部署流程的健壮性有待提升。
*   **正向反馈**：尽管有争议，用户 Issue #10585 中评价 "Hermes is incredible"，显示核心功能仍具有高粘性。

### 8. 待处理积压
*   **CLI 性能问题 (Issue #9740)**：在大项目中使用 `@` 补全时存在约 1 秒的卡顿，该问题尚未解决，影响 CLI 交互流畅度。
    *   链接: [NousResearch/hermes-agent Issue #9740](https://github.com/NousResearch/hermes-agent/issues/9740)
*   **模型选择器显示异常 (Issue #9545)**：`/model` 命令重复显示同一 Provider 三次，影响配置体验，尚无修复 PR。
    *   链接: [NousResearch/hermes-agent Issue #9545](https://github.com/NousResearch/hermes-agent/issues/9545)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-16)

## 1. 今日速览
PicoClaw 项目今日保持**高强度的开发迭代**，共处理了 15 个 Pull Requests，其中 11 个已成功合并，显示出团队在合并代码和推进功能方面的极高效率。项目发布了最新的 **v0.2.6-nightly** 自动构建版本，标志着新功能正在快速集成中。Issue 活跃度较高（7 条更新），主要集中在 Provider 兼容性和 Web UI 交互体验上。总体来看，项目正处于功能增强与 Bug 修复并行的高速发展期，健康度良好。

## 2. 版本发布
- **版本号**: `nightly: Nightly Build`
- **Tag**: `v0.2.6-nightly.20260416.f32b303d`
- **说明**: 这是一个自动化的每日构建版本，包含了截至目前的最新代码变更。
- **注意**: 官方提示该版本可能不稳定，建议谨慎用于生产环境。
- **变更日志**: [v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

## 3. 项目进展
今日共有 **11 个 PR 被合并**，显著提升了项目的功能完整性与稳定性：

- **交互体验增强**：
    - [PR #2502](https://github.com/sipeed/picoclaw/pull/2502) 与 [PR #2532](https://github.com/sipeed/picoclaw/pull/2532)：成功合并了 `/btw` 命令功能，允许用户在不污染主会话历史的情况下提出临时性问题，优化了对话流程。
    - [PR #2529](https://github.com/sipeed/picoclaw/pull/2529)：Web 端聊天界面增加了 Markdown 语法高亮支持，提升了代码阅读体验。

- **稳定性修复**：
    - [PR #2525](https://github.com/sipeed/picoclaw/pull/2525)：修复了向不支持视觉的模型发送图片导致会话卡死的严重问题，增强了错误恢复能力。
    - [PR #2528](https://github.com/sipeed/picoclaw/pull/2528)：修复了部分 Provider 复用 Tool Call ID 导致的历史记录清理错误，提高了工具调用的兼容性。
    - [PR #2530](https://github.com/sipeed/picoclaw/pull/2530)：修复了 Web 端保存频道配置时的数据结构问题。

- **功能扩展**：
    - [PR #2524](https://github.com/sipeed/picoclaw/pull/2524)：集成了搜狗搜索作为 Web 搜索的后端选项，优化了中国大陆用户的搜索体验。
    - [PR #2484](https://github.com/sipeed/picoclaw/pull/2484)：为内存基准测试添加了 LLM-as-Judge 评估模式，增强了评估能力。

## 4. 社区热点
今日社区讨论最热烈的 Issue 是 **#28**，虽然创建于早期，但在过去 24 小时内引发了大量互动：
- **[Issue #28](https://github.com/sipeed/picoclaw/issue/28)**: **Feat Request: LM Studio Easy Connect**
    - **热度**: 👍 1, 评论 13 条（今日活跃）。
    - **诉求**: 用户强烈希望在 Android 客户端上能够更便捷地连接本地 LLM 服务（如 LM Studio）。这反映出移动端连接本地/私有模型的需求痛点，用户期望更低门槛的配置流程。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，部分已有修复方案：

- **严重/高优先级**：
    - **[Issue #2468](https://github.com/sipeed/picoclaw/issue/2468)**: 定时任务执行失败，提示权限受限。涉及核心功能，目前尚未有修复 PR。
    - **[Issue #2046](https://github.com/sipeed/picoclaw/issue/2046)**: 使用 LongCat API 时工具调用失效。Provider 兼容性问题。

- **中等优先级**：
    - **[Issue #2446](https://github.com/sipeed/picoclaw/issue/2446)**: 多频道环境下，若某频道任务未完成，其他频道会回显用户消息而非处理。这属于并发处理逻辑问题。
    - **[Issue #2302](https://github.com/sipeed/picoclaw/issue/2302)**: Web UI 频繁要求重新认证，会话持久化存在问题。

- **已修复**：
    - 向非视觉模型发送图片导致会话卡死的问题已通过 [PR #2525](https://github.com/sipeed/picoclaw/pull/2525) 解决。

## 6. 功能请求与路线图信号
社区提出了针对配置灵活性的新需求，体现了高级用户对细节的控制欲：
- **[Issue #2533](https://github.com/sipeed/picoclaw/issue/2533)**: 请求 `auth login` 命令增加 `--no-browser` 参数。
    - **分析**: 针对无头服务器或远程环境（如 Webtop）的使用场景，目前自动弹出浏览器不仅无用且会阻断流程。这是一个高价值的用户体验改进，预计很快会被纳入开发计划。
- **[Issue #2527](https://github.com/sipeed/picoclaw/issue/2527)**: 请求将 `fresh_tail_size`（上下文窗口大小）从硬编码改为可配置。
    - **分析**: 随着模型上下文窗口的增大，用户希望根据预算和需求自定义记忆保留策略。

- **待合并功能 PR**：
    - **[PR #2531](https://github.com/sipeed/picoclaw/pull/2531)**: 实现 `delegate` 工具，支持跨 Agent 任务移交。这是迈向多智能体协作的关键一步。
    - **[PR #2535](https://github.com/sipeed/picoclaw/pull/2535)**: 增加了对 MCP 服务器的斜杠命令支持。

## 7. 用户反馈摘要
- **痛点**：移动端用户在连接本地推理后端时面临配置困难；多频道并发时的消息串扰/回显问题影响使用信心；Web UI 的登录态维持不稳定。
- **满意点**：开发团队对 Web UI 的细节优化（如 Markdown 高亮、配置保存修复）响应迅速，提升了前端体验。
- **场景**：用户开始在复杂的分布式环境中部署 PicoClaw（如 Webtop、无浏览器环境），这要求 CLI 工具具备更高的灵活性。

## 8. 待处理积压
- **[Issue #28](https://github.com/sipeed/picoclaw/issue/28)**: LM Studio 连接优化。该 Issue 存在时间较长且近期讨论热烈，建议维护者关注并给出明确的路线图或临时解决方案，以回应社区期待。
- **[PR #2503](https://github.com/sipeed/picoclaw/pull/2503)**: Agent Loop 并行处理重构。该 PR 自 4 月 13 日开启，涉及核心架构调整，目前仍处于 Open 状态，需要重点 Review 以确保合并后的稳定性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目日报 (2026-04-16)**

### 1. 今日速览
NanoClaw 今日保持了极高的开发活跃度，社区贡献显著增加。过去 24 小时内共有 18 条 PR 更新（其中 7 条已合并/关闭）和 5 条新开 Issue，显示出项目正处于快速迭代与功能扩展期。核心进展集中在**多模型提供商支持**（OpenAI/Ollama 集成）与**基础设施稳定性增强**（防 DoS 攻击、调度器热循环修复）。与此同时，用户对 `/setup` 流程的易用性和文档细节提出了密集反馈，表明项目正经历从早期采用者向更广泛用户群过渡的阵痛期，文档与错误提示亟待完善。

### 2. 版本发布
*   **无新版本发布**。尽管有多个重要的功能性 PR 已关闭，今日未监测到正式的 Release 版本发布，预计相关更新将在近期聚合后发布。

### 3. 项目进展
今日共有 7 条 PR 合并/关闭，显著提升了系统的健壮性与功能广度：

*   **架构与功能扩展**：
    *   [CLOSED] **feat: complete 7-layer scope expansion roadmap** (#1794, #1786): 完成了 7 层范围扩展路线图，涵盖 Webhook 事件源、行动前 LLM 验证等 14 项功能，显著增强了 Agent 的感知与行动能力。
    *   [CLOSED] **feat: add Twilio fallback call** (#1760): 增强了语音提醒功能的可用性，支持主号码未接听时的自动回退拨号。
*   **稳定性与修复**：
    *   [CLOSED] **fix(trust-gateway): add 1MB body Size limit** (#1793): 修复了 Trust Gateway HTTP 服务器的潜在 DoS 漏洞，限制了请求体大小。
    *   [CLOSED] **fix: headless Linux browser fallback** (#1281): 修复了无头 Linux 服务器环境下浏览器启动失败的问题，改善了 VPS 部署体验。
    *   [CLOSED] **fix: credential proxy ETIMEDOUT** (#1782): 优化了长连接流式传输的超时处理，防止因连接断开导致的服务崩溃。
    *   [CLOSED] **fix: forward ONECLI_API_KEY** (#1777): 修复了云环境下的 API Key 认证传递问题。

### 4. 社区热点
今日社区活跃度较高，讨论主要集中在功能扩展与基础设施升级：

*   **[OPEN] feat: OpenAI model support + token tracking** (#1774): 作者 @markstrefford 提出支持 OpenAI 兼容 API 及本地 Ollama 模型，旨在打破单一模型依赖，降低运行成本，引发了关于模型抽象层的关注。
*   **[OPEN] feat: add multi-provider LLM layer via Vercel AI SDK** (#1784): 作者 @topcoder1 提出通过 Vercel AI SDK 实现 Agent 容器的多提供商运行。这与 #1774 形成呼应，表明社区强烈期望实现模型层面的解耦。
*   **[OPEN] chore: migrate v2 from npm to pnpm** (#1771): 作者 @meeech 提议将包管理器从 npm 迁移至 pnpm，涉及 CI/CD 和 Dockerfile 的大范围重构，显示了社区对构建性能优化的诉求。

### 5. Bug 与稳定性
今日报告的 Bug 主要集中在安装配置流程与边缘用例处理：

*   **中等 - 设置流程冲突**：#1787 报告在 macOS 上进行 `/setup` 时，`skill/apple-container` 分支合并产生 6 个冲突，阻碍了新用户的首次配置。
*   **中等 - 静默失败**：#1789 指出非 ASCII 字符的 Display Name 会被静默重置为 `dm-with-unnamed`，缺乏错误提示，影响非英语用户体验。
*   **中等 - 潜在死循环**：#1788 (PR) 修复了调度器中因脚本类型错误导致的静默热循环问题，已提交 Fix PR 待合并。
*   **低 - 文档与行为不一致**：#1792 和 #1790 均指出挂载路径配置的文档缺失或行为晦涩，导致用户需通过“试错”来配置，虽不影响核心运行，但严重损害用户体验。

### 6. 功能请求与路线图信号
根据 Issues 和 PRs 分析，项目路线图呈现出明显的“多模型”与“集成增强”趋势：

*   **模型中立化**：#1774 和 #1784 强烈信号表明社区正在推动 NanoClaw 脱离单一的 Claude 依赖，向支持 GPT、Ollama 等多模型架构演进。
*   **生态集成**：#1781 提出集成 Composio MCP 以托管 OAuth，简化 Gmail/Calendar 的连接配置；#1780 增加了 5 个营销相关的 Container Skills，显示出项目在特定垂直领域（如营销自动化）的应用拓展。
*   **基础设施现代化**：#1771 (pnpm 迁移) 和 #1778 (Node 24 升级) 表明项目正在积极跟进现代技术栈，以解决 GLIBC 兼容性等问题。

### 7. 用户反馈摘要
用户 @ythx-101 提交了多条高质量 Issue，集中反映了**配置体验的痛点**：
*   **“默认即陷阱”**：用户指出 `containerPath` 必须为相对路径的限制未被文档化，且绝对路径被拒绝时缺乏清晰的错误指引。
*   **安全隔离需求**：用户尝试在同一目录下对不同 Agent 隔离文件，但发现挂载白名单仅支持目录粒度，无法实现文件级隔离（#1791）。
*   **UI 交互困惑**：在 `/setup` 阶段，用户对“路径”输入框是接受文件还是目录感到困惑，导致反复试错。

**总结**：核心功能受认可，但“最后一公里”的配置体验和错误提示是目前用户流失的主要风险点。

### 8. 待处理积压
*   **[OPEN] Feature create new session** (#1311): 该 PR 自 3 月 21 日创建至今未合并，今日有更新活动。涉及 Session 管理核心逻辑，建议维护者尽快 Review 或说明推迟原因。
*   **[OPEN] Block catbox/litterbox URLs** (#1783): 针对 Agent 输出违规 URL 的修复 PR，涉及安全与内容策略，需尽快处理以防数据泄露风险。
*   **Setup 流程 Issues**: @ythx-101 提交的一系列关于 Setup 的 Issue (#1787, #1789, #1790, #1791, #1792) 均处于 Open 状态，建议优先处理 #1787 的合并冲突，以疏通新用户入坑路径。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-16)

## 1. 今日速览
NullClaw 项目今日保持高活跃度，社区互动频繁。过去 24 小时内共有 6 条 Issue 更新与 8 条 PR 更新，虽无新版本发布，但代码库发生了显著变化。核心焦点集中在基础设施升级与安全加固，尤其是 **Zig 0.16 迁移** 与 **多项安全修复 PR 的落地**。同时，用户对安装文档的完善及微信登录等新功能提出了明确需求，显示项目正处于功能扩展与底层重构并行的关键阶段。

## 2. 版本发布
本期无新版本发布。

## 3. 项目进展
今日有 3 个关键 PR 被关闭（已合并或终止），主要集中在安全增强与功能补全，项目稳定性显著提升：

*   **安全与沙箱增强**：PR #378 与 #377 已关闭。合并了针对 `git -C` 的安全作用域处理，防止参数混淆攻击，并引入了 `tools.path_env_vars` 配置项，实现了对 Shell 子进程环境变量的沙箱验证，有效提升了系统边界安全性。
    *   链接：[nullclaw/nullclaw PR #378](https://github.com/nullclaw/nullclaw/pull/378)
    *   链接：[nullclaw/nullclaw PR #377](https://github.com/nullclaw/nullclaw/pull/377)
*   **通讯功能完善**：PR #369 已关闭。修复了 Signal "Note to Self" 消息的处理逻辑，解决了同步信封被错误丢弃的问题，完善了多端同步体验。
    *   链接：[nullclaw/nullclaw PR #369](https://github.com/nullclaw/nullclaw/pull/369)

此外，还有 5 个重要 PR 处于待合并状态，其中包括重大的 Zig 0.16 迁移和 Cron 任务引擎功能，预示着下个版本将包含重大架构更新。

## 4. 社区热点
今日讨论最热烈的问题集中在环境搭建与版本信息识别：

*   **Issue #821**：用户报告 `nullclaw version` 仅显示无意义的 "dev" 字符串，引发了对版本管理流程的讨论（3 条评论）。这反映了源码构建用户对发布版本号可见性的强烈需求。
    *   链接：[nullclaw/nullclaw Issue #821](https://github.com/nullclaw/nullclaw/issues/821)
*   **Issue #820**：用户询问 Debian 下 Zig 的安装方法，并对是否必须依赖 Docker 提出疑问（3 条评论）。暴露了当前文档对非 Docker 环境的支持不足，增加了新用户的上手门槛。
    *   链接：[nullclaw/nullclaw Issue #820](https://github.com/nullclaw/nullclaw/issues/820)

## 5. Bug 与稳定性
今日报告了数个影响使用体验的 Bug，部分已有修复方案：

*   **[高优先级] 状态检测不一致**：Issue #827 报告 `nullclaw channel status` 显示正常，而 `nullclaw doctor` 报错的矛盾现象。此类 CLI 工具可信度问题需优先修复。
    *   链接：[nullclaw/nullclaw Issue #827](https://github.com/nullclaw/nullclaw/issues/827)
*   **[中优先级] 数据截断风险**：Issue #825 提及 Agent Skills 不支持嵌套目录。同时，PR #824 修复了历史压缩过程中的 UTF-8 截断 Bug，该修复防止了非英文字符的数据损坏，建议尽快合并。
    *   链接：[nullclaw/nullclaw Issue #825](https://github.com/nullclaw/nullclaw/issues/825)
    *   链接：[nullclaw/nullclaw PR #824](https://github.com/nullclaw/nullclaw/pull/824)
*   **[低优先级] 网关启动失败**：Issue #826 报告在 Tailscale 环境下启动 Gateway 时报 `NotImplemented` 错误，可能涉及特定网络栈的兼容性。
    *   链接：[nullclaw/nullclaw Issue #826](https://github.com/nullclaw/nullclaw/issues/826)

## 6. 功能请求与路线图信号
用户与开发者的需求指向了更广泛的平台支持与架构优化：

*   **平台扩展**：Issue #817 请求支持微信二维码登录。若社区响应积极，可能成为 NullClaw 打开亚洲市场的关键功能。
    *   链接：[nullclaw/nullclaw Issue #817](https://github.com/nullclaw/nullclaw/issues/817)
*   **架构演进**：PR #823 正在进行 Zig 0.16 迁移，重构了 WebSocket 和兼容层。这表明项目正积极跟进上游语言特性，长期来看将提升性能与二进制体积。
    *   链接：[nullclaw/nullclaw PR #823](https://github.com/nullclaw/nullclaw/pull/823)
*   **自动化能力**：PR #783 提议引入 Cron 子代理引擎。这将赋予 NullClaw 定时任务与自动化能力，是其向“全能助理”演进的重要信号。
    *   链接：[nullclaw/nullclaw PR #783](https://github.com/nullclaw/nullclaw/pull/783)

## 7. 用户反馈摘要
从 Issue 详情中提炼出以下关键反馈：
*   **安装痛点**：Debian 用户缺乏清晰的 Zig 安装指引，现有文档对 Docker 的依赖暗示让部分高级用户感到困惑。
*   **版本可见性**：源码编译用户希望能看到明确的版本号或 Commit Hash，而非模糊的 "dev"，以便于问题排查。
*   **网络环境**：用户尝试在 Tailscale 等复杂网络环境下使用 Gateway 功能，遇到了实现层面的阻碍，期待更完善的支持。

## 8. 待处理积压
以下重要 PR 长期未合并，建议维护者重点关注：

*   **PR #783 (Cron Subagent)**：自 4 月 7 日开启，涉及大规模功能增加（JSON 输出、调度器），需要尽快完成 Code Review 以推进自动化功能的落地。
    *   链接：[nullclaw/nullclaw PR #783](https://github.com/nullclaw/nullclaw/pull/783)
*   **PR #774 (Docs Update)**：文档更新 PR 积压可能导致新用户（如 Issue #820 的提问者）获取过时信息，建议加速合并。
    *   链接：[nullclaw/nullclaw PR #774](https://github.com/nullclaw/nullclaw/pull/774)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-16)

## 1. 今日速览
IronClaw 项目今日保持高活跃度，共有 50 条 PR 更新和 18 条 Issue 动态，显示出项目正处于密集开发与质量攻坚阶段。核心关注点集中在 **Engine V2 的稳定性修复与安全漏洞**，以及多通道部署能力（Telegram/Slack）的完善。今日不仅关闭了多个阻碍功能的 Bug，还合并了关键的跨用户授权功能，但同时也暴露了 V2 引擎存在 Secrets 扫描绕过的严重安全隐患，需引起社区高度关注。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日项目整体向前迈进了重要一步，主要体现在 **多租户授权能力落地** 与 **V2 引擎缺陷修复**。

- **核心功能突破**：PR #2421 ([feat: scope grants for cross-user read/write access](https://github.com/nearai/ironclaw/pull/2421)) 已合并。该 PR 解决了长期以来缺乏数据库层面跨用户工作区访问授权机制的问题，为多用户共享数据（如“家庭”用户场景）铺平了道路。
- **基础设施优化**：PR #2507 ([ci: add historical release image rebuild workflow](https://github.com/nearai/ironclaw/pull/2507)) 和 PR #2509 ([ci: support historical Dockerfile targets](https://github.com/nearai/ironclaw/pull/2509)) 已合并，显著提升了 CI/CD 对历史版本的可维护性和 Docker 构建的灵活性。
- **V2 引擎修复**：PR #2458 ([fix: restore issue-2402 v2 gate resume...](https://github.com/nearai/ironclaw/pull/2458)) 和 PR #2503 ([fix(e2e): resolve 12 E2E test failures...](https://github.com/nearai/ironclaw/pull/2503)) 正致力于解决 V2 架构下的会话恢复与 E2E 测试失败问题，确保新架构的可用性。
- **Bug 修复**：Issue #2474 (MCP OAuth 错误) 和 #2276 (HTTP 413 Payload 过大崩溃) 已关闭，相关修复已生效。

## 4. 社区热点
今日讨论最活跃且影响深远的议题围绕 **安全** 与 **配置体验** 展开。

- **[安全警报] Engine V2 绕过 Secrets 扫描**：Issue #2491 ([Engine V2 bypasses inbound secret scanning](https://github.com/nearai/ironclaw/issues/2491)) 报告了严重安全问题。当开启 `ENGINE_V2=true` 时，用户输入的 Secrets（如 API Keys）会绕过安全检测直接发送给 LLM。该问题引发了关于 V2 架构安全性的深度审视。
- **[用户体验] 权限管理的精细化需求**：Issue #2484 ([feat(permissions): param-aware always-allow grants](https://github.com/nearai/ironclaw/issues/2484)) 指出当前“总是允许”功能存在安全隐患——批准 `shell ls /tmp` 会连带允许 `shell rm -rf /`。社区呼吁实现基于参数的细粒度权限控制。
- **[部署困扰] 配置不完整导致实例启动失败**：Issue #2514 ([Incomplete Provider Configuration Causes Instance Startup Failure](https://github.com/nearai/ironclaw/issues/2514)) 反映了非 TEE 环境下配置 LLM Provider 不完整会导致实例无法启动且难以恢复，直指配置校验逻辑的缺失。

## 5. Bug 与稳定性
今日报告了多个 P0 级别的质量问题，主要集中在 Web UI 和 V2 引擎。

- **严重 (P0)**:
    - **Secrets 泄露风险**：Issue #2491 ([Link](https://github.com/nearai/ironclaw/issues/2491)) - V2 引擎未扫描敏感信息。*(尚无 Fix PR)*
    - **Web UI 不可用**：Issue #2410 ([Dashboard keeps refreshing](https://github.com/nearai/ironclaw/issues/2410)) - 仪表盘陷入刷新循环；Issue #2409 ([User messages disappear](https://github.com/nearai/ironclaw/issues/2409)) - 用户输入消息消失。*(尚无 Fix PR)*

- **一般 (P1/P2)**:
    - **Telegram 群组支持缺陷**：Issue #2482 ([Telegram group messages omit chat_type metadata](https://github.com/nearai/ironclaw/issues/2482))。已有修复 PR #2513 ([Link](https://github.com/nearai/ironclaw/pull/2513)) 待合并。
    - **实例生命周期**：Issue #2284 ([Instance dies after 1 hour](https://github.com/nearai/ironclaw/issues/2284)) - 长时间不活动后实例死亡。
    - **LLM Provider 兼容性**：Issue #2489 ([HTTP 413 detection](https://github.com/nearai/ironclaw/issues/2489)) - 多个直连 HTTP Provider 未正确处理上下文长度超限错误。

## 6. 功能请求与路线图信号
- **细粒度权限控制**：基于 Issue #2484 的讨论，项目急需引入参数感知的权限授予机制，这可能成为下一阶段 Agent 安全模块的重点。
- **Web Search 集成**：Issue #548 (Add Search to Chat API) 已关闭，预示着项目可能已经或即将内置 Web Search 能力。
- **轻量化部署**：PR #2418 ([feat: slim mode runtime](https://github.com/nearai/ironclaw/pull/2418)) 提出了瘦身模式运行时与 Dockerfile，响应了多租户高密度部署场景下的资源优化需求。

## 7. 用户反馈摘要
- **痛点**：用户在使用 Web UI 时遭遇严重的显示与刷新问题，直接影响可用性。
- **配置门槛**：用户反馈配置 LLM Provider 时缺乏引导，遗漏字段会导致系统崩溃，希望增加更友好的校验提示。
- **安全焦虑**：V2 引擎的安全漏洞让用户对在生产环境启用新架构表示担忧，急需官方确认修复时间表。

## 8. 待处理积压
- **PR #1446 ([Aliyun Coding Plan support](https://github.com/nearai/ironclaw/pull/1446))**：自 3 月 20 日开启至今未合并，属于 XL 尺寸的大型功能添加，可能需要更多测试资源或架构评审。
- **PR #1378 ([Per-channel MCP routing](https://github.com/nearai/ironclaw/pull/1378))**：自 3 月 18 日开启，涉及复杂的通道工具过滤逻辑，建议维护者关注合并进度。
- **Issue #2087 ([Notion setup breaks agent](https://github.com/nearai/ironclaw/issues/2087))**：已活跃 10 天，涉及 Notion 集成导致 Agent 无响应，尚无明确修复方案。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-16)

## 1. 今日速览
LobsterAI 项目今日保持**高活跃度**，开发迭代节奏紧凑。过去 24 小时内共有 **16 个 PR 成功合并/关闭**，主要集中在 Copilot 迁移、系统稳定性修复及遗留代码清理上，显示项目正处于代码质量优化与架构整合阶段。虽然无新版本 Release 发布，但通过 PR #1702 合并了 `release/2026.04.14` 分支，暗示新版本发布可能已在筹备或最终测试中。社区反馈方面出现了 3 个新 Issue，其中包含 1 个关于与其他软件冲突的严重 Bug，值得维护者关注。

## 2. 版本发布
**无新版本发布**。
*注：PR #1702 已合并 `release/2026.04.14` 分支代码，预计近期将迎来正式版本更新。*

## 3. 项目进展
今日合并的 PR 主要围绕**遗留问题修复、架构迁移与用户体验优化**展开，项目整体稳定性得到显著提升：

*   **架构与迁移**：
    *   [PR #1702](https://github.com/netease-youdao/LobsterAI/pull/1702)：合并 `release/2026.04.14` 分支，整合了近期所有功能与修复。
    *   [PR #1694](https://github.com/netease-youdao/LobsterAI/pull/1694) & [PR #1695](https://github.com/netease-youdao/LobsterAI/pull/1695)：彻底修复了 Copilot 提供者 ID 从 `github-copilot` 迁移至 `lobsterai-copilot` 后的历史数据兼容问题，确保存量 Agent 配置不失效。
    *   [PR #1697](https://github.com/netease-youdao/LobsterAI/pull/1697)：完成了钉钉平台向官方 `dingtalk-connector` 的迁移，并优化了插件载荷去重，解决了 Mac 端打包受阻的问题。

*   **稳定性修复**：
    *   [PR #1699](https://github.com/netease-youdao/LobsterAI/pull/1699)：修复了导入配置文件时，因本地缺失 Provider 而导致应用崩溃的严重问题（使用了可选链进行安全访问）。
    *   [PR #1696](https://github.com/netease-youdao/LobsterAI/pull/1696)：修复了微信登录状态判断逻辑，移除了不必要的 `accountId` 依赖，解决了状态不同步问题。

*   **用户体验优化**：
    *   [PR #1686](https://github.com/netease-youdao/LobsterAI/pull/1686)：优化了 POPO 消息展示，剥离了冗余的系统头部信息，提升了聊天记录的可读性。

## 4. 社区热点
今日社区讨论与反馈集中在以下几个 Issues：

*   **[Issue #1698](https://github.com/netease-youdao/LobsterAI/issues/1698)：与智企帝王蟹软件冲突**
    *   **热度**：新开 Issue，评论数 1。
    *   **分析**：用户反馈在有道龙虾运行时安装“智企帝王蟹”必现 Gateway 端口冲突，导致后者无响应。这反映了用户在多 AI 助手/协同软件并存场景下的兼容性诉求，属于环境层面的资源竞争问题，影响较为严重。
*   **[Issue #1687](https://github.com/netease-youdao/LobsterAI/issues/1687)：Linux 端登录失败**
    *   **热度**：新开 Issue。
    *   **分析**：Deepin V25 环境下浏览器验证码验证后提示网络错误，无法完成登录。涉及特定操作系统环境下的网络/WebView 交互问题，需针对性排查。

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排序如下：

1.  **[P0/严重] Gateway 端口冲突与进程竞争**
    *   **Issue**: [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698)
    *   **描述**: 有道龙虾启动状态下，安装智企帝王蟹必现冲突，导致 Gateway 鉴权失败。
    *   **状态**: Open，暂无 Fix PR。

2.  **[P1/较高] Linux (Deepin) 登录网络错误**
    *   **Issue**: [#1687](https://github.com/netease-youdao/LobsterAI/issues/1687)
    *   **描述**: 客户端无法完成 OAuth 登录流程，提示网络错误。
    *   **状态**: Open，暂无 Fix PR。

3.  **[P2/已修复] 导入配置导致崩溃**
    *   **Issue**: (隐含在 PR 描述中)
    *   **修复 PR**: [PR #1699](https://github.com/netease-youdao/LobsterAI/pull/1699)
    *   **说明**: 已合并修复，防止因本地缺失 Provider 定义引发的崩溃。

## 6. 功能请求与路线图信号
*   **[Feature] 动态调整 Temperature 参数**
    *   **Issue**: [#1688](https://github.com/netease-youdao/LobsterAI/issues/1688)
    *   **详情**: 用户希望在对话过程中通过关键字动态调整大模型的温度参数。这反映了进阶用户对模型输出可控性的更高要求。
*   **[Feature] Agent 模板导入导出**
    *   **PR**: [PR #1691](https://github.com/netease-youdao/LobsterAI/pull/1691) (Open)
    *   **详情**: 社区贡献者提交了 Agent 配置的序列化/反序列化功能，支持 JSON 模板导入导出。此举极大便利了自定义 Agent 的分享与迁移，是一个高价值功能，建议优先 Review 合并。
*   **[Feature] IM 删除二次确认**
    *   **PR**: [PR #1690](https://github.com/netease-youdao/LobsterAI/pull/1690) (Open)
    *   **详情**: 防止误删 IM 实例配置，增强操作安全性。

## 7. 用户反馈摘要
*   **多软件共存痛点**：用户在工作环境中常需同时运行多个协同/AI 工具（如龙虾与帝王蟹），资源（端口/进程）互斥是目前较大的痛点，期望能实现“共存运行”。
*   **Linux 平台支持**：Deepin 用户遇到了登录障碍，表明项目在国产 Linux 发行版上的兼容性测试仍有提升空间。
*   **模型控制需求**：用户不再满足于默认参数，提出了更细粒度的模型参数（Temperature）动态控制需求，倾向于“对话内即时调整”而非仅靠全局设置。

## 8. 待处理积压
*   **[Issue #1698](https://github.com/netease-youdao/LobsterAI/issues/1698)**：端口冲突问题为必现 Bug，严重影响特定用户群的部署环境，建议优先排查是否可动态分配端口或提供端口配置选项。
*   **[PR #429](https://github.com/netease-youdao/LobsterAI/pull/429)**：关于 Windows 下中文路径编码问题的修复 PR 已被标记为 Stale（过期），自 3 月 15 日至今未合并。该问题涉及中文用户核心体验，建议维护者确认是否仍需此修复或已通过其他方式解决。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-16)

## 1. 今日速览
Moltis 项目今日保持**极高的开发活跃度**，呈现出"重构建、强修复、拓功能"的态势。过去 24 小时内共有 **15 个 PR 成功合并**，显著提升了系统的稳定性与代码可维护性，同时解决了多个困扰社区的重要 Bug。核心开发重点集中在**配置系统重构**（支持上下文窗口自定义）与**通信协议兼容性增强**（Matrix OIDC、WhatsApp 协议升级）。此外，今日新增 3 条活跃 Issue，其中包含一个严重级别的 Nostr 频道创建崩溃问题，需维护者重点关注。

## 2. 项目进展
今日合并的 PR 数量较多，主要围绕稳定性修复、架构重构与功能增强三大方向，项目整体质量有明显跃升：

*   **架构重构与代码治理**：
    *   PR [#731](https://github.com/moltis-org/moltis/pull/731) 完成了大规模代码重构，将实现逻辑从 `mod.rs`/`lib.rs` 移出，涉及 15 个 crates，显著改善了代码组织结构。
    *   PR [#718](https://github.com/moltis-org/moltis/pull/718) 新增了详尽的配置参考文档（1078 行），极大降低了用户上手门槛。

*   **核心功能与协议支持**：
    *   PR [#709](https://github.com/moltis-org/moltis/pull/709) 将 `whatsapp-rust` 生态从 0.2 升级至 0.5，修复了因 Protobuf 模式更新导致的入站消息解析失败问题，解决了长期痛点。
    *   PR [#730](https://github.com/moltis-org/moltis/pull/730) 引入了 Matrix OIDC 认证支持，适配了现代 Matrix 服务器的认证标准。

*   **AI 模型与工具链修复**：
    *   PR [#717](https://github.com/moltis-org/moltis/pull/717) 与 [#719](https://github.com/moltis-org/moltis/pull/719) 修复了 Google Gemini 经由 OpenRouter 调用时的工具模式兼容性问题，确保了多模型切换的稳定性。
    *   PR [#667](https://github.com/moltis-org/moltis/pull/667) 引入了原生文件系统工具，替代 MCP 文件服务器，增强了安全性与审批机制。

## 3. 社区热点
今日社区关注点集中在**配置灵活性**与**外部服务集成**的讨论上：

*   **[PR #737](https://github.com/moltis-org/moltis/pull/737) [Open]**: 这是一个综合性 PR，整合了上下文窗口覆盖配置与工具结果压缩策略。由于涉及 Agent 长对话记忆管理的核心逻辑，吸引了较多关注，被认为是解决长上下文模型管理难题的关键一步。
*   **[Issue #533](https://github.com/moltis-org/moltis/issues/533) [Open]**: 关于消息附件添加按钮的功能请求自 3 月底提出后今日再次活跃，反映出用户对 Web UI 交互便利性的强烈需求。
*   **[PR #730](https://github.com/moltis-org/moltis/pull/730) [Open]**: Matrix OIDC 支持解决了 matrix.org 等主流服务器放弃密码认证后的登录阻塞问题，对社区用户连接现代 Matrix 网络至关重要。

## 4. Bug 与稳定性
今日修复了多个高频使用的集成 Bug，但也报告了一个新的严重崩溃问题：

*   🔴 **严重 - 新报告**：
    *   **[Issue #736](https://github.com/moltis-org/moltis/issues/736)**: Moltis 在尝试创建 Nostr 频道时发生 Panic 崩溃。这是今日报告的最严重问题，目前尚无修复 PR，需紧急处理。

*   🟡 **一般 - 已修复**：
    *   **[Issue #534](https://github.com/moltis-org/moltis/issues/534)** (已关闭): WhatsApp 入站消息解析为空的问题。经由 [PR #709](https://github.com/moltis-org/moltis/pull/709) 通过升级底层库解决。
    *   **[Issue #716](https://github.com/moltis-org/moltis/issues/716)** (已关闭): Gemini 经 OpenRouter 调用失败问题。经由 [PR #717](https://github.com/moltis-org/moltis/pull/717) 修复。
    *   **[Issue #732](https://github.com/moltis-org/moltis/issues/732)** (已关闭): MCP 状态在 UI 中误报为 "dead"。经由 [PR #733](https://github.com/moltis-org/moltis/pull/733) 放宽健康检查逻辑修复。

*   🟡 **一般 - 待处理**：
    *   **[Issue #735](https://github.com/moltis-org/moltis/issues/735)**: 自定义 ElevenLabs 语音无法工作，影响语音合成功能体验。

## 5. 功能请求与路线图信号
*   **上下文管理优化**: [PR #737](https://github.com/moltis-org/moltis/pull/737) 提出的 "Oldest-first compaction" 策略，表明项目正在积极优化长对话场景下的 Token 消耗与记忆保留机制，这可能成为下一版本的核心特性。
*   **外部 Agent 桥接**: 长期开放的 [PR #566](https://github.com/moltis-org/moltis/pull/566) 搭建了连接外部 CLI Agent 的基础设施，预示着 Moltis 将转型为一个更开放的 Agent 编排平台。
*   **记忆管理**: 已合并的 [PR #728](https://github.com/moltis-org/moltis/pull/728) 引入了 LLM 引导的记忆遗忘流程，完善了记忆管理的能力闭环。

## 6. 用户反馈摘要
*   **API 与 UI 同步问题**: Issue #729 反映通过 GraphQL API 发送的消息未实时显示在 Web UI，导致用户困惑。这表明部分用户正在将 Moltis 作为后端服务集成，而非仅使用官方 UI，需求更可靠的实时事件广播机制。
*   **多模型兼容性痛点**: Issue #716 和 #735 显示，用户在使用非 OpenAI 模型（如 Gemini、ElevenLabs）时遇到参数 Schema 不兼容的问题，反映出社区对多模态、多模型无缝切换的强烈期待。
*   **配置深度**: PR #718 的合并响应了用户对高级配置项（如模型覆盖、上下文窗口）文档化的需求，说明用户群体中高级开发者比例较高。

## 7. 待处理积压
*   **功能请求**: [Issue #533](https://github.com/moltis-org/moltis/issues/533) (消息附件按钮) 虽有活跃评论但尚无明确排期，建议维护者评估实现难度并给予用户反馈。
*   **严重 Bug**: [Issue #736](https://github.com/moltis-org/moltis/issues/736) (Nostr 频道创建崩溃) 目前处于无人认领状态，建议立即进行根因分析。
*   **长期 PR**: [PR #566](https://github.com/moltis-org/moltis/pull/566) (External Agents Bridge) 已开启数日，核心功能已实现，建议加速 Review 流程以推进合并。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-16)

## 1. 今日速览
CoPaw (数据源显示仓库别名为 QwenPaw) 项目今日保持高活跃度，过去24小时内共有 50 条 Issue 更新和 50 条 PR 更新，社区互动频繁。项目发布了 **v1.1.2-beta.1** 和 **v1.1.1.post1** 两个版本，主要涉及内存管理优化与 Provider 连接修复。社区焦点集中在长对话场景下的前端性能瓶颈、多智能体协作稳定性以及上下文监控功能的缺失上。整体来看，项目迭代速度较快，但对复杂场景（如超长对话、多工具调用）的稳定性支撑仍有提升空间。

## 2. 版本发布
今日发布 2 个新版本，建议用户按需升级：

- **v1.1.2-beta.1**
  - **更新内容**：
    - `feat(memory)`: 添加了默认内存摘要功能，有助于优化上下文管理。
    - `fix(memory)`: 文件监视器 现支持递归配置，修复了文件监控的灵活性。
  - **注意**：这是一个 Beta 版本，供测试新内存管理特性。
  - **链接**: [v1.1.2-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.2-beta.1)

- **v1.1.1.post1**
  - **更新内容**：
    - `fix(Provider)`: 修复了 Ollama Provider 的连接问题。
    - `fix`: 更新了 Cron Job ID 的提示信息文本。
  - **链接**: [v1.1.1.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.1.post1)

## 3. 项目进展
今日共有 27 个 PR 被合并或关闭，项目在多模态处理和路由功能上取得重要进展：

- **多模态与工具调用修复**：PR [#3299](https://github.com/agentscope-ai/QwenPaw/pull/3299) 已合并，修复了当单条消息包含多个并行工具调用且返回多模态内容时导致的 400 错误，显著提升了多工具调用场景的稳定性。
- **模型路由功能增强**：PR [#3443](https://github.com/agentscope-ai/QwenPaw/pull/3443) 已合并，引入了本地模型路由配置，为混合部署（本地+云端）场景打下基础。
- **前端体验优化**：PR [#3444](https://github.com/agentscope-ai/QwenPaw/pull/3444) 修复了建议弹窗打开时按上键会错误导航历史消息的问题；PR [#3446](https://github.com/agentscope-ai/QwenPaw/pull/3446) 优化了 Prettier 格式化性能。

## 4. 社区热点
今日讨论最热烈的问题反映了用户对性能和项目定位的关注：

- **[#3350 [OPEN] 页面进行超多轮对话后页面滚动变得特别卡](https://github.com/agentscope-ai/QwenPaw/issues/3350)**
  - **评论数**: 5
  - **诉求分析**: 用户在进行超过 200 轮的工程级代码迭代时，前端滚动严重卡顿。这反映了 CoPaw 在处理超长上下文 Session 时前端 DOM 渲染的性能瓶颈，用户急需“冻结”或“压缩”历史消息的 UI 优化方案。
  
- **[#3430 [OPEN] QwenPaw和CoPaw关系是啥？以后是一起维护吗？](https://github.com/agentscope-ai/QwenPaw/issues/3430)**
  - **评论数**: 5
  - **诉求分析**: 用户对项目命名感到困惑。数据源链接指向 QwenPaw，而日报需求为 CoPaw，官方需明确两者关系以消除社区疑虑。

- **[#3426 [OPEN] 什么时候能加上一个当前对话的上下文的使用情况呢？](https://github.com/agentscope-ai/QwenPaw/issues/3426)**
  - **评论数**: 5
  - **诉求分析**: 用户强烈希望实时显示 Token 消耗和上下文填充度，以便判断何时需要清理或总结历史记录，这是目前控制台缺失的关键功能。

## 5. Bug 与稳定性
今日报告了多个影响使用体验的 Bug，部分问题较为严重：

- **严重 [会话冻结]**: [#3397](https://github.com/agentscope-ai/QwenPaw/issues/3397) 报告在执行多步 CLI 任务时，若 `max_input_length` 设置过大，会话会永久冻结，重启服务也无法恢复。
- **严重 [Pipeline 逻辑]**: [#3279](https://github.com/agentscope-ai/QwenPaw/issues/3279) 指出 `ToolResultCompactor` 在每条消息中似乎执行了两次，且 Tool ID 列表无限增长，可能导致上下文污染。
- **中等 [MCP 连接]**: [#3407](https://github.com/agentscope-ai/QwenPaw/issues/3407) 报告新版本 minimax MCP 工具启动失败，但在旧版本正常。
- **中等 [文件下载]**: [#3435](https://github.com/agentscope-ai/QwenPaw/issues/3435) 指出下载文件时 URL 路径重复 (`/api/files/preview/api/files/preview/...`)，导致下载失败。

## 6. 功能请求与路线图信号
结合用户需求与活跃 PR，以下功能可能近期纳入版本：

- **SIP 语音通话支持**: PR [#3449](https://github.com/agentscope-ai/QwenPaw/pull/3449) 正在审查中，拟引入基于 pyVoIP/LiveKit 的 SIP 语音通道，支持流式 STT/TTS，这将极大扩展 CoPaw 的交互场景。
- **Plan Mode**: Issue [#2441](https://github.com/agentscope-ai/QwenPaw/issues/2441) 持续有用户请求增加“规划模式”，以便更好地控制 Agent 行为，这是工作流自动化的核心需求。
- **Skill 分类管理**: Issue [#2961](https://github.com/agentscope-ai/QwenPaw/issues/2961) 建议对技能池进行分类（文件夹形式），便于智能体按需加载技能，提升管理效率。
- **本地模型路由策略**: PR [#3451](https://github.com/agentscope-ai/QwenPaw/pull/3451) 正在推进更完善的本地/云端路由策略，响应了用户对混合部署的诉求。

## 7. 用户反馈摘要
从今日 Issues 评论中提炼出的关键用户反馈：

- **痛点**:
  - **长对话性能**: 超多轮对话后 UI 响应极慢，甚至无法滚动。
  - **记忆机制**: MCP 服务和记忆功能在新对话中经常“失忆”，未能有效复用历史经验（#3453）。
  - **权限交互**: 工具调用的审批提示信息过于冗长，且缺乏直观的风险提示（#3298, #3349）。
- **满意点**:
  - 用户对项目快速修复 Ollama 连接问题和多模态工具调用报错（PR #3299）表示认可。
  - 社区贡献者活跃，针对 SIP 通道和 Langfuse 追踪等高级功能已有 PR 提交。

## 8. 待处理积压
- **长期任务征集**: Issue [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) 仍在收集贡献者认领任务，包括多个 P0/P1 优先级的开发项，需要社区持续关注。
- **vLLM 兼容性**: PR [#3438](https://github.com/agentscope-ai/QwenPaw/pull/3438) 提出了 vLLM `tool_choice="auto"` 的兼容性修复，目前处于 Open 状态，等待合并以解决特定模型调用报错问题。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-04-16)

**分析师点评**：EasyClaw 今日动态显示出项目正处于“发布-反馈”的快速迭代周期中。v1.7.11 版本的发布随即引发了更新相关的 Bug 报告，且社区贡献者提交了积分系统相关的 Feature PR，预示着项目商业化或激励机制的功能拓展。总体而言，项目活跃度适中，但需警惕新版本的更新稳定性问题。

---

### 1. 今日速览
今日 EasyClaw 项目保持了轻量级的活跃态势，共产生 **1 个新版本发布** (v1.7.11)、**1 个新开 Issue** 和 **1 个活跃 PR**。项目刚刚发布了 RivonClaw v1.7.11，主要涉及安装说明的更新（特别是针对 macOS 的签名问题），但随即有用户反馈更新失败，暴露出新版本分发流程可能存在隐患。同时，社区贡献者提交的“积分系统” PR 处于待合并状态，表明项目正在积极拓展核心功能。

### 2. 版本发布
**[v1.7.11] RivonClaw v1.7.11**
- **发布时间**: 2026-04-16
- **更新重点**: 本次更新主要集中在安装体验的优化，特别是针对 macOS 用户的兼容性说明。
- **破坏性变更/注意事项**:
  - **macOS Gatekeeper 拦截**: 由于应用未签名，macOS 用户可能会遇到“'RivonClaw' is damaged and can't be opened”的错误提示。
  - **解决方案**: 开发者已在 Release Notes 中给出明确指引，用户需通过终端执行命令移除隔离属性（通常为 `xattr -cr` 命令，文档截断推测）。
- **迁移建议**: macOS 用户在安装新版本前需预备好通过终端命令绕过签名检查，这属于非技术性的操作门槛。

### 3. 项目进展
今日无已合并的 PR，但有 1 个功能型 PR 正在活跃推进中：
- **PR #32 Feature/credits system** ([链接](https://github.com/gaoyangz77/rivonclaw/pull/32))
  - **状态**: OPEN (待合并)
  - **分析**: 由贡献者 @dlxai 提交。该 PR 涉及“积分系统”的引入，这可能意味着 EasyClaw 正在构建资源配额、会员体系或 API 调用计费功能。这是项目从工具型向平台型或商业化转型的关键信号，目前该 PR 尚未合并，预计将在下一版本中亮相。

### 4. 社区热点
今日讨论焦点集中在最新发布的版本问题上：
- **Issue #33 [OPEN] 1.7.11更新失败** ([链接](https://github.com/gaoyangz77/rivonclaw/issues/33))
  - **热度**: 今日新开，目前尚无评论。
  - **分析**: 用户 @slowayear 反馈在更新至 v1.7.11 时遇到失败问题，并附上了截图证据。作为新版本发布后的首个反馈，该问题直接关联到用户能否顺利获取最新功能，是今日维护者需优先响应的事项。

### 5. Bug 与稳定性
今日报告了 1 个阻碍性 Bug，严重影响用户体验：
- **🔴 严重: v1.7.11 更新机制失效**
  - **Issue**: [#33 1.7.11更新失败](https://github.com/gaoyangz77/rivonclaw/issues/33)
  - **详情**: 用户尝试从旧版本升级至今日发布的 v1.7.11 时失败。
  - **状态**: 待确认。目前尚无修复 PR 提交，维护者需确认是下载链接失效、校验错误还是客户端更新逻辑问题。

### 6. 功能请求与路线图信号
- **积分/信用系统**: 基于 PR #32 判断，项目路线图正迈向**资源计量或激励体系**。这通常预示着后续版本将引入用户账户体系或 API 额度管理，是项目功能深化的标志。

### 7. 用户反馈摘要
- **痛点**: 更新流程不稳定是当前最大痛点。用户在第一时间尝试更新却遭遇失败，且 Issue 中未得到即时响应，可能导致用户滞留在旧版本。
- **场景**: 用户主要关注如何平滑升级以获取最新特性，macOS 用户额外面临未签名应用的安全拦截困扰。

### 8. 待处理积压
- **PR #32 (Feature/credits system)**: 该 PR 活跃度较高但尚未合并，建议维护者尽快 Review，避免功能分支滞后过久。
- **Issue #33 (更新失败)**: 作为阻断性 Bug，需立即响应。若为普遍性问题，可能需要撤回 v1.7.11 Release 或发布 v1.7.12 补丁。

---
*数据来源: EasyClaw GitHub Repository (2026-04-16 截止)*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*