# OpenClaw 生态日报 2026-07-04

> Issues: 360 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-07-04 03:23 UTC

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

# OpenClaw 项目动态日报 (2026-07-04)

## 1. 今日速览
OpenClaw 项目今日维持高热度活跃状态，过去 24 小时内 Issues 更新量达 360 条，PR 更新量高达 500 条，社区参与度极高。然而，PR 积压现象显著，目前有 **425 条 PR 处于待合并状态**，仅合并/关闭了 75 条，显示出代码审查压力较大。今日无新版本发布，社区焦点集中在 **安全性修复**（如文本泄露、Secrets 管理）和 **系统稳定性夯实**（Codex worker 异常处理）上。整体来看，项目正处于功能迭代与质量治理并行的关键阶段，但需警惕 PR 审查积压带来的合并延迟风险。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目主要推进了安全性增强、UI 优化及基础设施重构，具体进展如下：

*   **安全性增强**：
    *   PR [#99530](https://github.com/openclaw/openclaw/pull/99530) 修复了通过 exec 工具执行 OpenClaw 生命周期命令的漏洞，强制要求显式审批，防止权限滥用。
    *   PR [#81185](https://github.com/openclaw/openclaw/pull/81185) 实现了对 exec 工具结果载荷的脱敏处理，防止敏感信息泄露。
*   **基础设施与稳定性**：
    *   PR [#99691](https://github.com/openclaw/openclaw/pull/99691) 重构了异步队列机制，统一了并发控制逻辑，有助于解决高并发下的会话状态问题。
    *   PR [#99748](https://github.com/openclaw/openclaw/pull/99748) 修复了嵌入式 Agent 重试时因过期思考签名导致的 `replay_invalid` 错误，提升了容错性。
    *   PR [#91828](https://github.com/openclaw/openclaw/pull/91828) 修复了 memory-wiki 插件在并发同步时的竞态条件。
*   **UI/UX 改进**：
    *   PR [#98868](https://github.com/openclaw/openclaw/pull/98868) 刷新了 iOS 端的新手引导流程，提升了首次使用体验。
    *   PR [#99783](https://github.com/openclaw/openclaw/pull/99783) 恢复了 Telegram 频道的工具进度回调功能。

## 4. 社区热点
今日讨论最热烈的议题集中在 **上下文管理** 与 **安全隐私** 方面，反映了用户对生产环境可靠性的高度关注：

*   **[P1] 文本泄露风险**：Issue [#25592](https://github.com/openclaw/openclaw/issues/25592)（评论 33 条）引发了激烈讨论。当 Agent 在工具调用间隙产生内部处理文本（如错误处理、自言自语）时，这些内容会被错误路由到 Slack/iMessage 等外部频道。这是一个严重的安全与 UX 问题，急需解决方案。
*   **上下文优化需求**：Issue [#22438](https://github.com/openclaw/openclaw/issues/22438)（评论 17 条）提议引入分层 Bootstrap 文件加载机制。用户普遍反映大型工作区每次会话加载所有文件严重浪费 Context Window，亟需按需加载或分层控制。
*   **Agent 配置失效**：Issue [#29387](https://github.com/openclaw/openclaw/issues/29387)（评论 14 条）指出 `agentDir` 中的 Bootstrap 文件被静默忽略，导致用户配置不生效，这是一个影响核心功能的回归 Bug。
*   **Codex Worker 稳定性追踪**：Issue [#99551](https://github.com/openclaw/openclaw/issues/99551)（评论 14 条）是一个 Tracker Issue，旨在巩固 Codex worker 的故障模式，处理近期的事故暴露出的隐患。

## 5. Bug 与稳定性
今日报告了多个严重 Bug，部分已有修复 PR，部分仍在定位中：

*   **严重 (P1)**：
    *   **文本泄露**：[#25592](https://github.com/openclaw/openclaw/issues/25592) - Agent 内部文本泄露至消息频道。**状态**：讨论中。
    *   **配置失效**：[#29387](https://github.com/openclaw/openclaw/issues/29387) - `agentDir` 配置文件不生效。**状态**：已复现，等待修复。
    *   **压缩超时**：[#92043](https://github.com/openclaw/openclaw/issues/92043) - 180s 的压缩超时导致长时间合法压缩失败，且无断点续传机制。**状态**：讨论中。
    *   **重入保护缺失**：[#98416](https://github.com/openclaw/openclaw/issues/98416) - v2026.6.11 版本在分布式环境下缺少重入保护，导致会话初始化冲突。
*   **回归问题**：
    *   [#38327](https://github.com/openclaw/openclaw/issues/38327) - 2026.3.2 版本在 Google Vertex Gemini 模型下崩溃。
    *   [#98528](https://github.com/openclaw/openclaw/issues/98528)（已关闭）- 工具输出在首次调用后变为空，疑似已修复或无法复现。
*   **已有 Fix PR**：
    *   Issue [#99551](https://github.com/openclaw/openclaw/issues/99551) 相关的 Worker 稳定性问题正在通过 PR [#99748](https://github.com/openclaw/openclaw/pull/99748) 进行部分修复。

## 6. 功能请求与路线图信号
社区提出了多项具有前瞻性的功能需求，反映了 Agent 工程化的趋势：

*   **上下文精细化控制**：[#22438](https://github.com/openclaw/openclaw/issues/22438) 的分层加载提案备受期待，这可能成为优化 Token 消耗的关键特性。
*   **安全密钥管理**：[#10659](https://github.com/openclaw/openclaw/issues/10659) 提议“掩码 Secrets”，允许 Agent 使用密钥但不可见明文，防止 Prompt 注入窃取密钥。这是企业级部署的核心诉求。
*   **UI 交互升级**：[#12602](https://github.com/openclaw/openclaw/issues/12602) 请求支持 Slack Block Kit，表明用户不再满足于纯文本回复，期望更丰富的交互界面。
*   **Telegram Business 支持**：[#20786](https://github.com/openclaw/openclaw/issues/20786) 呼吁支持 Telegram Business API，扩展商业应用场景。

## 7. 用户反馈摘要
从 Issue 评论中提炼出以下核心痛点：

*   **Token 消耗焦虑**：用户对 Context Window 的浪费非常敏感，尤其是 Bootstrap 文件和 Tool Schema 占用大量 Token 的问题（[#14785](https://github.com/openclaw/openclaw/issues/14785) 也提及 Schema 开销）。
*   **隐私与安全担忧**：文本泄露（#25592）和密钥可见性（#10659）是用户高度关注的红线问题，直接关系到生产环境部署的安全性。
*   **多模型适配痛点**：Gemini 等非 OpenAI 模型的回归问题（#38327）显示出项目在多模型兼容性测试上仍需加强。
*   **部署与配置困惑**：Docker 环境下的权限问题（#31331）和配置文件不生效（#29387）让部分用户感到挫败，文档或错误提示需改进。

## 8. 待处理积压
*   **PR 积压严重**：目前有 **425 条 PR 待处理**，其中包含多个 P1 级别的修复（如 PR [#99530](https://github.com/openclaw/openclaw/pull/99530) 安全修复）。建议维护者优先关注标记为 `merge-risk: 🚨 security-boundary` 或 `merge-risk: 🚨 session-state` 的 PR，尽快合并以修复已知严重 Bug。
*   **长期未决 Issue**：
    *   Issue [#10659](https://github.com/openclaw/openclaw/issues/10659)（掩码 Secrets）作为 P1 级安全特性，尚未有明确实施 PR，建议纳入近期路线图。
    *   Issue [#92043](https://github.com/openclaw/openclaw/issues/92043)（压缩超时机制）影响长会话稳定性，亟待官方回应。

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告 (2026-07-04)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于从"单一对话工具"向"多模态自主代理"转型的深水区。**OpenClaw**、**Zeroclaw** 等头部项目正通过引入 Goal Mode（目标模式）和 SOP（标准作业流程）重构架构，以解决长周期任务执行的稳定性问题。**安全性**（Secrets 管理、权限隔离）与**成本控制**（Context Window 优化、本地模型适配）成为生产环境部署的核心关切。同时，生态内部分化明显：一端是以 **IronClaw** 和 **Zeroclaw** 为代表的"架构重构派"，正经历代码重构的阵痛期；另一端是以 **LobsterAI** 和 **QwenPaw** 为代表的"应用落地派"，正通过高频迭代打磨用户体验与跨平台兼容性。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | Release | 健康度/阶段评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 360 | 500 | 无 | 🔥 **极高活跃** (PR 积压严重，需关注审查瓶颈) |
| **Zeroclaw** | 37 | 50 | 无 | 🚀 **快速迭代** (聚焦架构重构与新特性开发) |
| **IronClaw** | 50 | 50 | 无 | 🛠️ **重构阵痛** (CI 红灯，核心架构 Reborn 迁移中) |
| **Hermes Agent** | 50 | 50 | 无 | 🛡️ **安全加固** (集中修复 Gateway 与权限漏洞) |
| **QwenPaw (CoPaw)** | 39 (关闭 25) | 15 | 无 | 📈 **高质量维护** (高 Issue 关闭率，v2.0 Beta 修复期) |
| **NanoBot** | 7 | 20 | 无 | 🏃 **敏捷跟进** (快速适配新模型，修复 MCP 稳定性) |
| **LobsterAI** | - | 16 | **v2026.7.3** | ✅ **成熟发布** (版本稳定，体验优化) |
| **PicoClaw** | 2 (新增) | 18 | **v0.3.1** | 📱 **多端拓展** (发布新版本，侧重移动端与通讯渠道) |
| **NanoClaw** | 2 | 17 | 无 | ⚠️ **积压风险** (PR 合并停滞，需关注维护响应) |
| **NullClaw** | 1 | 0 | 无 | 📉 **低活跃/维护期** (核心通道稳定性待解) |

---

## 3. OpenClaw 在生态中的定位

作为生态的核心参照项目，**OpenClaw** 展现出了"大规模平台"的典型特征与挑战：

*   **核心优势与社区规模**：OpenClaw 拥有压倒性的社区参与量（Issues/PRs 数量是其他项目的 10 倍量级），这使其成为事实上的行业标准制定者。其核心优势在于**企业级安全性**（如 exec 工具脱敏、Secrets 管理）和**高并发稳定性**（异步队列重构）。
*   **技术路线差异**：相比于 **Zeroclaw** 激进的"Goal Mode + SOP 可视化"自主架构，OpenClaw 目前更侧重于**基础设施的夯实**（如 Codex Worker 容错、Context 分层加载）。相比于 **NanoBot** 对新模型（Claude Sonnet 5）的快速跟进，OpenClaw 的迭代更稳健但也更滞后。
*   **潜在风险**：**425 条 PR 积压**是其最大隐患。相比 **QwenPaw** 的高效清理（单日关闭 25 个 Issues），OpenClaw 面临严峻的代码审查瓶颈，可能导致关键安全修复（如文本泄露 PR #99530）延迟合入，进而影响社区信心。

---

## 4. 共同关注的技术方向

多个项目在同一天内暴露出相似的技术痛点，表明这些领域是当前 AI Agent 工程化的共性挑战：

1.  **上下文窗口与成本优化**
    *   **诉求**：随着模型上下文窗口扩大，如何智能管理上下文成为痛点。
    *   **涉及项目**：**OpenClaw** 用户呼吁 Bootstrap 文件分层加载以节省 Token；**NanoClaw** 用户反馈本地模型（如 Gemma）被迫加载 27k tokens 的 MCP Schema 导致成本过高。这表明"上下文精细化管理"将成为下一阶段标配功能。

2.  **MCP 协议与工具调用的稳定性**
    *   **诉求**：模型上下文协议（MCP）在实际落地中存在大量兼容性与稳定性问题。
    *   **涉及项目**：**NanoBot** 报告 MCP 调用异常导致进程崩溃；**Zeroclaw** 定位 MCP/Tool-schema 克隆导致内存泄漏（OOM）；**OpenClaw** 也在处理工具调用间隙的文本泄露问题。

3.  **多渠道网关的连接健壮性**
    *   **诉求**：IM 渠道的长连接保活与重连机制普遍薄弱。
    *   **涉及项目**：**NullClaw** 的 Telegram 闲置断连，**PicoClaw** 的 WhatsApp/Websocket 超时，**Hermes Agent** 的 Gateway 凭证失效。这反映出当前 Agent 接入层普遍缺乏成熟的生产级连接池管理。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Zeroclaw / IronClaw | NanoBot / NanoClaw | LobsterAI / QwenPaw |
| :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | **安全与治理**<br>侧重企业级权限、审计、配置管理。 | **自主性与编排**<br>侧重 Goal Mode、SOP 可视化、架构重构。 | **模型生态与轻量级**<br>快速适配新模型（Claude/Gemma），注重多渠道接入。 | **用户体验与桌面端**<br>注重 UI 性能、跨平台桌面客户端、本地化体验。 |
| **目标用户** | 企业开发者、大型工作区管理员。 | 极客开发者、复杂工作流自动化需求者。 | 个人开发者、轻量级场景用户、特定模型用户。 | 终端用户、非技术人员、C 端场景。 |
| **技术架构** | 高并发 Worker + 异步队列，微服务化趋势。 | 插件化 + WASM 沙箱，声明式架构。 | 单体/轻量网关，注重 Provider 适配层。 | 桌面端，集成记忆系统与诊断工具。 |

---

## 6. 社区热度与成熟度

*   **快速迭代期**：**Zeroclaw** 和 **IronClaw** 正处于架构大改期，Issue 讨论热烈且涉及核心 RFC，虽然 CI 不稳定、Bug 较多（如内存泄漏、认证漏洞），但创新密度高。
*   **质量巩固期**：**OpenClaw** 和 **QwenPaw** 正在集中精力处理积压与技术债。OpenClaw 需解决审查瓶颈，QwenPaw 正在修复 v2.0 Beta 的严重 Bug（如上下文丢失），两者都在为大规模生产部署做稳定性冲刺。
*   **产品成熟期**：**LobsterAI** 发布了 v2026.7.3，重点解决全屏黑屏等体验问题，显示其已进入细节打磨阶段，适合直接商用。

---

## 7. 值得关注的趋势信号

1.  **本地模型落地的"Token 陷阱"**：
    **NanoClaw** 暴露了一个关键问题：在"本地模型 + 云端工具"的混合架构中，MCP 工具描述本身占据了大量 Token（27k），抵消了本地模型的成本优势。开发者需警惕 Tool Schema 的膨胀，未来的优化方向是**动态/按需注入 Tool Definition**。

2.  **"Goal Mode" 成为自主智能体标配**：
    **Zeroclaw** 和 **LobsterAI** 均在推进目标模式，允许用户设定目标后由 Agent 自主规划执行。这标志着 Agent 正从"单轮对话工具"向"任务执行器"演进，但也引入了**持久化存储**（Zeroclaw Usage Ledger）和**状态机管理**的新复杂性。

3.  **安全边界从"防攻击"转向"防泄露"**：
    多个项目（OpenClaw, Hermes Agent, QwenPaw）今日都出现了关于数据泄露的修复或讨论。重点不再是传统的 SQL 注入，而是**Agent 内部思考链泄露**（OpenClaw #25592）和**密钥明文存储**（QwenPaw #5705）。这要求开发者构建更细粒度的"思考过程"过滤器。

4.  **Windows 平台支持仍是短板**：
    **Zeroclaw** 和 **QwenPaw** 都报告了 Windows 环境下的特定问题（编码、沙箱、OOM）。这表明主流 AI Agent 开源项目仍以 Linux/Mac 优先，Windows 的生产级支持仍有较大差距。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 (2026-07-04)

## 1. 今日速览
NanoBot 项目今日保持了较高的开发活跃度，过去24小时内共处理了 20 个 Pull Requests（其中 6 个已合并）和 7 个 Issues。项目重点聚焦于 Anthropic 新模型（Claude Sonnet 5/4-6）的适配与 MCP（Model Context Protocol）稳定性修复。虽然今日无新版本发布，但多项关键修复和新功能（如 Anthropic OAuth、WebUI 安全启动）已合并入主分支，显示出项目正在为下一次版本迭代积累重要更新。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 6 个 PR 合并/关闭，显著提升了系统的兼容性与易用性：
- **Anthropic 生态支持增强**：合并了 [PR #4632](HKUDS/nanobot PR #4632) 新增 Anthropic OAuth 提供商，允许 Claude 订阅用户无需 API Key 即可使用；合并 [PR #4687](HKUDS/nanobot PR #4687) 将默认模型更新至 `claude-sonnet-4-6`；合并 [PR #4685](HKUDS/nanobot PR #4685) 修复了 Sonnet 5 因 `temperature` 参数导致的请求错误。
- **WebUI 与插件系统优化**：[PR #4688](HKUDS/nanobot PR #4688) 引入了更安全的 WebUI 首次运行启动器；[PR #4396](HKUDS/nanobot PR #4396) 与 [PR #4691](HKUDS/nanobot PR #4691) 完善了可选插件控制流，使功能启用更加轻量且易于恢复。

## 4. 社区热点
- **OpenAI 兼容性工具调用解析问题**：[Issue #4061](HKUDS/nanobot Issue #4061) 再次活跃（评论 6 条），部分兼容 OpenAI 的 Provider 将工具调用作为纯文本输出而非结构化数据，导致 Nanobot 无法解析执行。这是目前讨论度最高的问题，直接影响了部分用户的迁移体验。
- **MCP 稳定性痛点**：[Issue #4652](HKUDS/nanobot Issue #4652) 与 [Issue #4302](HKUDS/nanobot Issue #4302) 均涉及 MCP 调用异常或重连导致的进程崩溃，显示社区对 MCP 容错机制的强烈需求。

## 5. Bug 与稳定性
- **P1 严重级别**：
    - **MCP 调用异常导致崩溃**：[Issue #4652](HKUDS/nanobot Issue #4652) 报告当 MCP 工具返回错误或空数据时，进程直接崩溃。目前已有修复提案 [PR #4666](HKUDS/nanobot PR #4666) 等待合并，该 PR 将异常结构化处理。
    - **流式响应丢失**：[PR #4654](HKUDS/nanobot PR #4654) 修复了交互模式下流式传输失败时响应文本丢失的 P1 Bug。
- **P2 级别**：
    - **Sonnet 5 参数兼容**：[Issue #4683](HKUDS/nanobot Issue #4683) 指出 `temperature` 参数未在 Sonnet 5 中移除导致 400 错误，已由 [PR #4685](HKUDS/nanobot PR #4685) 修复。
    - **Windows Gateway 停止崩溃**：[PR #4690](HKUDS/nanobot PR #4690) 修复了 Windows 下执行 `nanobot gateway stop` 时的 `OSError` 崩溃问题。

## 6. 功能请求与路线图信号
- **新渠道与提供商**：[PR #4459](HKUDS/nanobot PR #4459) 提议增加 Mattermost 渠道支持；[PR #4686](HKUDS/nanobot PR #4686) 提议增加 OpenCode Zen Provider 支持，显示项目正积极拓展生态边界。
- **记忆与自主学习**：[Issue #4467](HKUDS/nanobot Issue #4467) 提出 Dream 功能重复创建技能的问题，对应 [PR #4554](HKUDS/nanobot PR #4554) 已提交写入守卫方案，预计将在下个版本解决重复生成问题。
- **移动端体验**：[Issue #4693](HKUDS/nanobot Issue #4693) 反馈 WebUI 移动端布局视口溢出问题，急需响应式布局优化。

## 7. 用户反馈摘要
- **模型参数适配滞后**：用户对最新模型（如 Sonnet 5）的支持非常敏感，迅速反馈了参数弃用导致的错误 ([Issue #4683](HKUDS/nanobot Issue #4683))，建议项目建立更快的模型参数映射更新机制。
- **MCP 健壮性不足**：多位用户反馈 MCP 相关操作（重连、异常返回）易导致主进程崩溃，表明目前的错误隔离机制尚不完善，社区期待更健壮的异常处理流程。
- **个性化技能管理困扰**：用户希望 Dream 功能能“增量更新”而非“重复创建”技能文件 ([Issue #4467](HKUDS/nanobot Issue #4467))，反映出用户对长期记忆积累和文件整洁度的实际需求。

## 8. 待处理积压
- **[Issue #4061](HKUDS/nanobot Issue #4061)**：OpenAI-compatible 文本格式工具调用解析问题，已持续近一个月，严重影响部分兼容提供商的使用体验，建议优先排期修复。
- **[PR #4459](HKUDS/nanobot PR #4459)**：Mattermost 渠道支持已开启近两周，处于 Open 状态，建议维护者进行 Review 以避免长期积压。
- **[Issue #4302](HKUDS/nanobot Issue #4302)**：MCP 重连导致 Gateway 崩溃问题虽有讨论但尚未彻底解决，需持续关注其关联 PR 进展。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-07-04)

## 1. 今日速览
Zeroclaw 项目今日保持极高的开发活跃度，Issue 更新达 37 条，PR 更新达 50 条，显示出社区与核心团队正在紧密推进下一阶段的功能迭代。核心焦点集中在 **v0.8.3 插件系统**、**SOP（标准作业流程）可视化编排** 以及 **Goal Mode（目标模式）** 的架构落地。尽管没有发布新版本，但大量高风险、高优先级的 RFC 和架构文档已进入实施阶段，表明项目正处于架构重构与功能增强的关键窗口期。今日还修复了多个严重的稳定性问题（如 OOM 和 Crash），并进一步加固了安全性。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 4 个 PR 合并/关闭，主要集中在依赖修复与 Provider 兼容性上；同时有大量高价值的 PR 处于待合并状态，正在推进核心架构升级。

*   **[MERGED] Provider 兼容性修复**: PR [#8524](https://github.com/zeroclaw-labs/zeroclaw/pull/8524) 修复了 OpenAI 兼容请求中空的 assistant tool-call content 问题，解决了部分 Provider 拒绝请求的兼容性故障。
*   **[PROGRESS] Goal Mode 基础设施**: PR [#8686](https://github.com/zeroclaw-labs/zeroclaw/pull/8686) (Usage Ledger) 和 [#8685](https://github.com/zeroclaw-labs/zeroclaw/pull/8685) (Task Storage) 正在为目标模式构建底层存储与计费基础，这是实现持久自主会话的关键一步。
*   **[PROGRESS] 安全与多租户**: PR [#8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672) 引入了多用户认证提供商和权限隔离，标志着 OIDC 支持 (RFC #7141) 进入实施阶段。
*   **[PROGRESS] SOP 可视化**: PR [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) 提交了可视化 SOP 编排表面，正在招募 Beta 测试人员，这将大幅降低用户编写自动化流程的门槛。

## 4. 社区热点
今日讨论最活跃的 Issue 集中在架构治理、跨平台支持与核心功能定义上。

*   **[#6808 RFC: Work Lanes & Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** (13 评论)
    *   **热度原因**: 这是一个关于项目治理的 RFC，旨在优化 Issue 路由和自动化看板，减少维护者的手动管理工作。讨论集中在对 RFC 的修订（Rev. 9）和具体的落地流程上，反映出社区对提高开发效率的迫切需求。
*   **[#7462 Windows 测试失败](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)** (8 评论)
    *   **热度原因**: Windows 平台出现 74 个测试失败，涉及路径语义和控制台编码问题。由于 CI 目前仅运行 Linux，这是一个严重的跨平台质量盲区，引发了开发者对 Windows 支持稳定性的担忧。
*   **[#7141 RFC: OIDC 认证支持](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** (7 评论)
    *   **热度原因**: 作为 v0.9.0 的目标功能，OIDC 的引入将大幅提升企业级部署的安全性。讨论集中在具体的 Provider 实现细节和认证流程上。
*   **[#8303 RFC: Goal Mode](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** (4 评论)
    *   **热度原因**: 提出了“目标模式”概念，允许 Agent 持续追求一个目标直到完成。这是 Agent 自主性的重大飞跃，引发了关于预算控制、状态持久化等技术细节的讨论。

## 5. Bug 与稳定性
今日报告了多个高风险 Bug，主要集中在运行时崩溃、内存泄漏和 SOP 引擎逻辑上，部分已有修复 PR。

*   **[P1 Critical] Skill Review Fork 导致 Daemon 崩溃**
    *   Issue: [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654)
    *   现象: 后台 skill-review fork 发生越界切片，导致 Daemon 以 SIGSEGV (139) 退出。
    *   状态: **已有修复 PR** [#8680](https://github.com/zeroclaw-labs/zeroclaw/pull/8680)，通过绑定历史记录切片边界解决。
*   **[P1 Critical] WSL2 连续 OOM (Out of Memory)**
    *   Issue: [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) (已关闭，拆分追踪)
    *   现象: WSL2 环境下发生严重的内存泄漏导致进程被 Kill。
    *   进展: 根本原因被拆分至 [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)，定位为 MCP/tool-schema 克隆导致的 RSS 无限增长。
*   **[P1 High] Windows 平台大面积测试失败**
    *   Issue: [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)
    *   现象: Windows 11 (中文环境) 下 74 个测试失败，涉及 Unix-only 命令和编码问题。
    *   状态: 接受处理，CI 目前未覆盖 Windows。
*   **[P1 High] Web Dashboard 无法加载 SOP**
    *   Issue: [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)
    *   现象: Agent 无法通过 Web Dashboard 会话检测到配置的 SOP 文件，导致工作流阻塞。
*   **[P1 High] SOP 审批门禁逻辑缺陷**
    *   Issue: [#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678)
    *   现象: `advance_step` 缺少运行状态守卫，驱动程序可能绕过审批门槛。

## 6. 功能请求与路线图信号
从 Issues 和 PRs 的动向看，下一版本将重点发力“自主性”与“企业级特性”。

*   **Goal Mode (目标模式)**: Issue [#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) 正在拆分实施，将实现有界的自主会话工作，这是通往 AGI 类助手的关键特性。
*   **Plugin System WASM**: Issue [#8636](https://github.com/zeroclaw-labs/zeroclaw/issues/8636) 和 PR [#8661](https://github.com/zeroclaw-labs/zeroclaw/pull/8661) 表明项目正在探索通过 Sidecar 进程执行 WASM 插件，以提供更强的隔离性。
*   **Per-Cron Memory 控制**: Issue [#8397](https://github.com/zeroclaw-labs/zeroclaw/issues/8397) 请求在 CLI 和 Web UI 中暴露 `uses_memory` 标志，允许精细化控制 Cron 任务的内存上下文，相关实现已在 PR [#8676](https://github.com/zeroclaw-labs/zeroclaw/pull/8676) 中提交。

## 7. 用户反馈摘要
*   **Windows 用户痛点**: Issue [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) 反映了 Windows 用户在非英文环境下的构建与测试体验极差，目前 CI 缺乏对 Windows 的支持，导致问题回归。
*   **SOP 易用性问题**: Issue [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) 显示用户在配置 SOP 后无法在 Dashboard 中生效，反映出文档与实际运行时加载逻辑存在脱节，用户期待更直观的反馈机制。
*   **安全性与合规需求**: Issue [#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) 提出了对 `/model --agent` 命令的细粒度授权需求，表明企业用户对多租户环境下的安全控制有强烈需求。

## 8. 待处理积压
*   **[Blocked] WhatsApp Web 链接失效**: Issue [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) 指出 WhatsApp 新的 Passkey 机制导致设备链接功能失效，目前处于 `status:blocked`，需要等待上游或协议层面的解决方案，可能影响相关渠道用户。
*   **[Security] Cargo Audit 忽略项积压**: Issue [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) 显示 CI 中存在 22 个 RustSec 严重警告未被妥善处理，存在依赖安全风险，需尽快对齐 `audit.toml` 与 `deny.toml`。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-07-04)

## 1. 今日速览
Hermes Agent 项目今日保持高度活跃，共处理 50 个 Issue 更新和 50 个 PR 更新。虽然无新版本发布，但社区提交了大量高质量的问题反馈与修复代码。今日焦点集中在**安全性修复**与**Gateway 网关的稳定性**上，尤其是多配置复用模式下的凭证隔离问题引发了多个关键修复 PR。整体来看，项目处于紧锣密鼓的漏洞修补与功能迭代阶段，安全性边界和跨平台兼容性是当前开发核心。

## 2. 版本发布
**无新版本发布**。

## 3. 项目进展
尽管今日仅合并/关闭了 4 个 PR，但有多个关键修复 PR 已提交并进入审核阶段，主要集中在安全性与核心架构修复：

*   **安全性加固 (Dashboard)**：提交了 PR [#58034](https://github.com/NousResearch/hermes-agent/pull/58034) 和 [#58036](https://github.com/NousResearch/hermes-agent/pull/58036)，修复了 Dashboard 文件管理 API 和 Git Review 接口中潜在的敏感文件读写漏洞，防止通过 API 绕过权限修改受保护文件。
*   **核心架构修复**：PR [#57563](https://github.com/NousResearch/hermes-agent/pull/57563) 是一个综合性修复，解决了 `multiplex_profiles` 模式下的凭证隔离失效、OAuth 路径劫持以及 Cron 调度器的线程安全问题。
*   **Issue 闭环**：安全漏洞 Issue [#48441](https://github.com/NousResearch/hermes-agent/issues/48441)（终端快照泄露 .env 机密）已被关闭，表明此前提交的修复已生效，提升了本地运行的安全性。

## 4. 社区热点
今日讨论最活跃的问题集中在**权限控制**与**跨平台认证**：

*   **[Issue #7269](https://github.com/NousResearch/hermes-agent/issues/7269)**：WhatsApp 群组机器人在 `require_mention` 模式下，仅响应白名单用户，忽略了群组普通成员的提及。用户希望实现“白名单管理，但普通成员可触发对话”的灵活权限模型。
*   **[Issue #12058](https://github.com/NousResearch/hermes-agent/issues/12058)**：OpenAI Codex OAuth 在 CLI 中认证成功，但在 Telegram Gateway 中报错 "No Codex credentials stored"。这是一个典型的多端凭证同步问题，阻碍了 Docker 部署用户的使用。
*   **[Issue #12188](https://github.com/NousResearch/hermes-agent/issues/12188)**：Docker 环境下配置模型参数（如 `hermes model`）缺乏清晰的文档或环境变量支持，用户被迫进入容器内部操作，体验不佳。

## 5. Bug 与稳定性
今日报告了多个严重程度较高的 Bug，涉及会话恢复与凭证安全：

*   **[P1] 会话恢复崩溃**：[Issue #58010](https://github.com/NousResearch/hermes-agent/issues/58010) 指出 `AsyncSessionDB` 缺少 `await` 导致 `/resume` 指令直接抛出 TypeError，阻塞了会话恢复功能。
*   **[P1] OAuth 认证失效**：[Issue #6347](https://github.com/NousResearch/hermes-agent/issues/6347) 报告 Anthropic OAuth 刷新路径遭遇 Cloudflare 403 拦截，导致 PKCE 凭证无法刷新。
*   **[P2] 多配置凭证串用**：[Issue #54675](https://github.com/NousResearch/hermes-agent/issues/54675) 揭示了开启 `gateway.multiplex_profiles` 后，所有二级配置文件错误地使用了默认配置的 Bot Token，导致严重的凭证隔离失效。目前已有修复 PR [#57563] 待合并。
*   **[P2] 工具输出截断**：[Issue #58009](https://github.com/NousResearch/hermes-agent/issues/58009) 报告工具输出超过 1KB 时被静默替换为 `<<ccr:...>>` 标签，导致 Agent 无法读取完整结果。

## 6. 功能请求与路线图信号
*   **自动会话标题**：[Issue #624](https://github.com/NousResearch/hermes-agent/issues/624) 建议参考 DeerFlow 实现 LLM 自动生成会话标题，这符合提升用户体验的趋势，社区讨论积极。
*   **Telegram 频道路由**：[Issue #40173](https://github.com/NousResearch/hermes-agent/issues/40173) 提出 `channel_profiles` 概念，允许单 Gateway 根据来源路由到不同 Agent Profile。这与目前修复的多配置复用 Bug 遥相呼应，预示着 Gateway 将支持更复杂的单实例多角色场景。
*   **本地 STT/TTS UI 支持**：[Issue #46337](https://github.com/NousResearch/hermes-agent/issues/46337) 呼吁 Hermes Desktop 增加对自定义本地语音模型的配置界面，反映出用户对隐私和本地化部署的强需求。

## 7. 用户反馈摘要
*   **Docker 部署痛点**：用户反馈在 Docker Compose 环境中配置模型提供商极其繁琐，缺乏对应的环境变量映射。
*   **Windows 桌面端体验**：[Issue #56747](https://github.com/NousResearch/hermes-agent/issues/56747) 指出 Windows 桌面版在执行 Shell 命令时会闪烁黑框，影响了软件的专业感。
*   **Gateway 稳定性担忧**：多位用户反馈在开启多配置或特定平台网关时遇到消息丢失、凭证失效或路由错误，表明 Gateway 模块目前是稳定性的薄弱环节。

## 8. 待处理积压
*   **PR #33930** 和 **PR #37100** 分别涉及工具错误分类修复和 MCP 工具名称匹配，已开启较长时间（5-6月），建议维护者优先 Review 以提升 Agent 工具链的健壮性。
*   **Issue #7269** (WhatsApp 权限控制) 自 4 月开启至今仍是 Open 状态，作为高互动量 Issue，建议纳入后续路线图进行功能迭代。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-07-04)

## 1. 今日速览
PicoClaw 项目今日活跃度显著提升，发布了 **v0.3.1** 新版本，标志着项目进入了新的迭代阶段。过去24小时内共有 18 个 PR 更新，显示出社区在功能扩展和系统稳定性方面的双重发力。虽然新增了 2 个活跃 Issue 且尚未关闭，但开发者社区快速响应了连接稳定性问题，提交了多项针对性修复。整体来看，项目正处于功能完善与架构优化的关键时期，多智能体协作与通信渠道稳定性是当前的核心焦点。

## 2. 版本发布
**[v0.3.1](https://github.com/sipeed/picoclaw/releases/tag/v0.3.1)**
本次更新主要合并了多个关键功能与修复：
*   **新特性**：集成了 NearAI Provider ([#2917](https://github.com/sipeed/picoclaw/pull/2917))，扩展了 AI 提供商生态。
*   **架构优化**：改进了存储锁的类型断言逻辑 ([#3053](https://github.com/sipeed/picoclaw/pull/3053))，提升了底层存储模块的健壮性。
*   **注意**：虽然 Release Note 截断，但结合今日 PR 动态，建议用户关注配置迁移相关的潜在变更。

## 3. 项目进展
今日共有 5 个 PR 被合并或关闭，13 个 PR 处于待合并状态，进展主要集中在以下领域：
*   **稳定性修复**：关闭了修复 Spawn 子代理消息重复问题的 PR [#3142](https://github.com/sipeed/picoclaw/pull/3142)，这将显著改善异步子代理完成时的消息推送体验。
*   **代码重构**：DeltaChat 网关的实现得到了大幅清理 ([#3222](https://github.com/sipeed/picoclaw/pull/3222))，移除了遗留代码并优化了文档，虽然原始 PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) 已关闭，但功能已通过重构版跟进。
*   **功能迭代**：新增了 Simplex 通道类型 ([#3193](https://github.com/sipeed/picoclaw/pull/3193))，进一步丰富了去中心化通信支持。

## 4. 社区热点
今日社区关注点集中在连接稳定性与移动端适配问题上：
*   **Issue [#3182](https://github.com/sipeed/picoclaw/issues/3182)**：Android 版本服务无法启动的问题引发了讨论。用户反馈即便拥有完整权限，仍无法通过设置更改路径，这暴露了 Android 端存储路径管理的痛点。
*   **Issue [#3178](https://github.com/sipeed/picoclaw/issues/3178)**：WhatsApp Websocket 超时问题。该问题直接催生了今日多个关于 WebSocket 重连机制的 PR，显示了用户对即时通讯通道高可用的迫切需求。

## 5. Bug 与稳定性
今日报告的 Bug 主要影响服务的可用性，部分已有修复方案：
*   **[严重] Android 服务启动失败** ([#3182](https://github.com/sipeed/picoclaw/issues/3182))：涉及服务无法拉起及路径配置失效。目前尚无直接修复 PR，需引起重视。
*   **[高] WhatsApp 连接中断** ([#3178](https://github.com/sipeed/picoclaw/issues/3178))：WebSocket 静默断开且无法恢复。
    *   *修复状态*：已提交修复 PR [#3179](https://github.com/sipeed/picoclaw/pull/3179) 和 [#3220](https://github.com/sipeed/picoclaw/pull/3220)，通过引入指数退避重连机制解决此问题。
*   **[中] Matrix 同步循环中断**：PR [#3219](https://github.com/sipeed/picoclaw/pull/3219) 已提出修复方案，增加了重试逻辑以应对网络中断。
*   **[中] Agent 会话清除错误**：PR [#3224](https://github.com/sipeed/picoclaw/pull/3224) 修复了非默认代理路由下 `/clear` 指令错误清除默认会话的问题。

## 6. 功能请求与路线图信号
从今日活跃的 PR 流向，可以窥见项目未来的发展路线：
*   **多智能体协作架构**：PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) 提议引入一等公民级别的“智能体协作总线”，包含邮箱、权限控制等功能，预示着 PicoClaw 正从单一助手向多智能体协同平台演进。
*   **细粒度运行时控制**：PR [#3225](https://github.com/sipeed/picoclaw/pull/3225) 允许为每个 Agent 单独定义 `max_tokens` 和总结阈值，响应了用户对 Agent 行为更精细控制的需求。
*   **模型容灾机制**：PR [#3200](https://github.com/sipeed/picoclaw/pull/3200) 增加了可配置的模型回退链，这将极大提升服务的稳定性，避免单点模型故障导致服务不可用。

## 7. 用户反馈摘要
*   **Android 端体验**：用户反馈路径配置过于僵化，无法自定义存储位置，导致服务启动受阻。这反映了移动端适配仍需打磨。
*   **生产环境稳定性**：多位用户在 Docker 环境下反馈长连接容易断开，对自动重连机制呼声极高。
*   **开源贡献质量**：社区开发者对代码细节关注度高，如 PR [#3218](https://github.com/sipeed/picoclaw/pull/3218) 专门修复了配置迁移中 BuildInfo 字段的缺失，体现了对平滑升级的重视。

## 8. 待处理积压
*   **长期未合并的功能 PR**：[Fea/agent collaboration #2937](https://github.com/sipeed/picoclaw/pull/2937) 自 5 月开启至今，今日有更新但尚未合并。这是一个大型架构变更，建议维护者尽快推进 Review，以免阻塞后续功能开发。
*   **OpenAI 兼容性修复**：PR [#3165](https://github.com/sipeed/picoclaw/pull/3165) 旨在修复特定模型（如 Volcengine Doubao Seed）的工具调用 XML 解析问题，对于兼容性至关重要，建议优先合并。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-07-04)

## 1. 今日速览
NanoClaw 项目今日整体呈现“高提交、低合并”的维护状态，共有 17 个 PR 发生更新，但仅关闭了 2 个 PR，无新增合并，导致待合并积压达到 15 个。社区关注焦点转向了本地模型集成的成本优化，出现了一个关于 MCP 工具模式导致 Token 开销过大的高价值 Issue。功能拓展方面，开发者提交了 LINE 官方账号通道支持，显示出项目正在积极拓展多平台消息接入能力。整体来看，项目活跃度尚可，但核心代码合入进度稍显滞后。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 2 个 PR 被关闭，均为未合并状态，属于清理无效或被取代的提交：
- **[CLOSED] PR #2765**: `feat(providers): add .format-lint-off`。该功能请求已被关闭，可能已被其他方式替代或不符合当前代码规范。
- **[CLOSED] PR #2330**: `fix(container): make axios MCP servers work through OneCLI's proxy`。该修复 PR 被关闭，未合入主分支，可能存在解决方案冲突或实现路径调整。

**关键进展提示**：虽然无合并记录，但新提交的修复 PR #2920（修复数据库连接泄漏）和功能 PR #2918（LINE 通道支持）已进入审核队列，预计将成为下一阶段的主要更新内容。

## 4. 社区热点
今日最活跃的讨论主要集中在本地模型集成的性能痛点上：
- **[Issue #2917](https://github.com/nanocoai/nanoclaw/issues/2917)**：**本地模型作为主 Agent 时面临高额 Token 成本**。用户 @cappuccinowholemilk-stack 指出，当使用 Gemma4:31B 等本地模型替代 Claude 作为编排模型时，系统仍会在每次请求中发送完整的 MCP 工具模式（约 27k tokens），导致上下文窗口严重浪费。这反映了混合架构（云端工具+本地大脑）中的实际落地难题，亟待架构层面的优化。

- **[PR #2918](https://github.com/nanocoai/nanoclaw/pull/2918)**：**新增 LINE Official Account 通道**。开发者 @joshm1230212 提交了完整的 LINE 官方账号适配器及 Skill，这是今日最具分量的功能更新，有望显著扩展 NanoClaw 在亚洲市场的应用场景。

## 5. Bug 与稳定性
今日报告了若干影响系统稳定性的关键问题，部分已有修复方案待合并：

- **🔴 严重：数据库连接泄漏**
  - **问题**：在容器重启逻辑中，`openInboundDb()` 未正确关闭，导致每次检查挂起消息时泄漏文件描述符。
  - **状态**：已有修复 PR [ #2920](https://github.com/nanocoai/nanoclaw/pull/2920)，待合并。

- **🟠 中等：本地模型 Token 开销过大**
  - **问题**：Issue #2917 指出 MCP Schema 注入逻辑缺乏针对本地模型的优化，造成约 27k tokens 的无效开销。
  - **状态**：Open，暂无关联 Fix PR。

- **🟡 一般：Skill 片段加载逻辑错误**
  - **问题**：`composeGroupClaudeMd` 函数错误地将所有 skill 的指令注入到每个 group 的 `CLAUDE.md` 中，忽略了配置的技能选择。
  - **状态**：已有修复 PR [ #2921](https://github.com/nanocoai/nanoclaw/pull/2921)，待合并。

- **🟡 一般：Signal 通道消息丢失**
  - **问题**：Signal 适配器未正确处理入站 DM 的 `isMention/isGroup` 标记，导致路由层丢弃消息；同时图片附件因路径映射问题无法被容器读取。
  - **状态**：已有修复 PR [ #2694](https://github.com/nanocoai/nanoclaw/pull/2694) 和 [ #2695](https://github.com/nanocoai/nanoclaw/pull/2695)，待合并。

## 6. 功能请求与路线图信号
- **多渠道通讯扩展**：[PR #2918](https://github.com/nanocoai/nanoclaw/pull/2918) 提交了 LINE 官方账号支持，配合正在处理的 Signal 修复，预示项目正致力于打造全平台消息聚合中心。
- **工具生态增强**：
  - [PR #2693](https://github.com/nanocoai/nanoclaw/pull/2693)：新增 Google Contacts 工具，完善 Google 生态集成。
  - [PR #2530](https://github.com/nanocoai/nanoclaw/pull/2530)：新增 CalDAV 工具，增强日程管理能力。
  - [PR #2863](https://github.com/nanocoai/nanoclaw/pull/2863)：新增系统摘要技能，提升自我监控能力。
- **MCP 协议支持深化**：[PR #2208](https://github.com/nanocoai/nanoclaw/pull/2208) 提议支持 HTTP 和 SSE MCP Server 传输协议，若合入将大幅提升 MCP 兼容性。

## 7. 用户反馈摘要
根据 Issue #2917 的反馈，核心用户痛点在于**混合模型架构下的性能损耗**。用户希望在使用本地模型（如 Gemma, Llama）作为主 Agent 以节省成本或保护隐私时，系统应具备“精简上下文”的能力，而非简单复用云端模型的完整 Schema。这表明用户对 NanoClaw 的期望已从简单的“多模型接入”升级为“针对模型特性的架构优化”。

## 8. 待处理积压
当前积压的 15 个 PR 中，有部分长期未合并的重要更新需维护者关注：
- **[PR #2184](https://github.com/nanocoai/nanoclaw/pull/2184)** (创建于 5 月)：修复会话失效后的错误提示问题，涉及核心轮询逻辑，建议优先评审。
- **[PR #2208](https://github.com/nanocoai/nanoclaw/pull/2208)** (创建于 5 月)：MCP 传输协议扩展，影响底层架构兼容性。
- **[PR #2348](https://github.com/nanocoai/nanoclaw/pull/2348)** (创建于 5 月)：WhatsApp 通道重连机制优化。

---
*分析师注：项目当前处于功能快速迭代期，但代码合入存在拥堵现象。建议维护者优先处理 #2920（连接泄漏）和 #2921（逻辑错误）等稳定性修复，并尽快响应本地模型 Token 开销问题，这对提升开源社区的采用率至关重要。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-07-04)

## 1. 今日速览
NullClaw 项目今日整体活跃度处于低位，过去 24 小时内无代码合并、Pull Request 提交或版本发布。社区焦点高度集中在一个新报告的稳定性问题上，涉及 Telegram 渠道的长连接维护。虽然后端服务显示正常运行，但前端通道的响应中断暴露了潜在的外部集成稳定性风险。整体来看，项目正处于代码静默期，主要精力集中在问题排查与社区维护。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无合并或关闭的 Pull Request，项目代码库在功能开发和修复层面未有实质性推进，处于维护观察状态。

## 4. 社区热点
今日社区关注度最高的问题为 **Issue #972**。
*   **链接**: [nullclaw/nullclaw Issue #972](https://github.com/nullclaw/nullclaw/issues/972)
*   **分析**: 该 Issue 自 6 月 30 日创建以来持续活跃，今日有新的评论互动。用户报告 Telegram 渠道在闲置一晚后失去响应，尽管后端日志显示 Agent 仍在工作且内存规划正常。这反映出用户对 NullClaw 在作为即时通讯工具（IM）接入时的**连接保活机制**存在较强诉求，目前该问题尚未得到官方确认或解决。

## 5. Bug 与稳定性
今日报告/活跃的 Bug 问题如下，按潜在影响程度排序：

*   **[中等] Telegram 渠道闲置后无响应**
    *   **Issue**: [#972 [bug] telegram channel stop respond after some idle time](https://github.com/nullclaw/nullclaw/issues/972)
    *   **详情**: 用户在使用 EC2 实例部署时，Telegram 渠道经过一夜闲置后在次日早晨停止响应。后端日志显示 `nullclaw agent` 进程存活，内存规划已解析，但消息未能触达。
    *   **状态**: **OPEN**，暂无关联 Fix PR。
    *   **推测原因**: 可能涉及 Telegram API 的长连接超时、WebSocket 断连未自动重连，或 EC2 实例的网络休眠策略导致。

## 6. 功能请求与路线图信号
今日无新增功能请求。从现有 Bug 反馈推断，提升 **IM 连接层的健壮性与断线重连机制** 可能是下一阶段优化的潜在方向。

## 7. 用户反馈摘要
根据 Issue #972 的交互提炼：
*   **痛点**: 用户在将 NullClaw 接入 Telegram 时，对**服务的持久性**感到困扰。后端进程看似健康（"work well at backend"），但实际通道已断开，这种状态不一致增加了排查难度。
*   **场景**: 长期运行的云端部署场景（如 AWS EC2），期望 Agent 能作为常驻后台服务稳定运行。

## 8. 待处理积压
*   **Issue #972**: 该 Bug 已持续数日（创建于 6 月 30 日），今日有更新但仍未解决。鉴于其影响了核心通信渠道的可用性，建议维护者优先排查 Telegram Adapter 的连接心跳机制。
    *   **链接**: [nullclaw/nullclaw Issue #972](https://github.com/nullclaw/nullclaw/issues/972)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-07-04)

## 1. 今日速览
IronClaw 项目今日保持**极高的活跃度**，核心聚焦于 **"Reborn" 架构的深度重构与稳定性修复**。过去24小时内共有 50 个 PR 更新（其中 27 个已合并/关闭），显示团队正在密集交付代码。然而，项目正处于架构迁移的阵痛期，**CI 流水线处于红色状态**，且新架构下的 **身份认证模块 被曝出多个严重逻辑漏洞**。目前维护者正致力于修复主干分支稳定性，并推进 v1/engine-v2 到 Reborn 的迁移工具开发，预示着一个大版本发布正在酝酿中。

## 2. 版本发布
**无新版本发布**。
但值得注意的是，PR #5598 已提交发布准备，计划将 `ironclaw` 从 `0.24.0` 升级至 `0.29.1`，同时包含多个核心库的 API 变更（如 `ironclaw_common` 0.4.2 -> 0.5.0）。这表明项目正处于重大版本发布的窗口期。

## 3. 项目进展
今日项目进展显著，主要体现在架构重构落地与关键功能补全：

*   **架构重构与清理**：
    *   **PR #5625** 和 **PR #5107** 已合并，实现了 **Manifest 驱动的 Host-Ingress 路由与凭证一致性**，移除了硬编码的 Rust 策略，提升了系统的声明式配置能力。
    *   **PR #5585** 合并，重构了 Reborn 组合内部结构，提升了代码模块化边界。
    *   **PR #5567** 合并，执行了类型/特征清理计划，移除了 6 个冗余 Traits，净减少 176 行代码，降低了系统复杂度。
*   **迁移工具推进**：
    *   **PR #5627** 开启，引入了 `v1/engine-v2` 到 Reborn 的状态迁移工具，这是旧用户升级到新架构的关键基础设施。
*   **测试与覆盖率**：
    *   **PR #5610** 开启，增加了第四波集成测试覆盖，重点针对认证门控与附件处理。
    *   **Issue #3067** 依然活跃，讨论 Reborn 垂直切面集成测试套件的落地。

## 4. 社区热点
今日讨论最活跃的话题集中在架构设计与质量保障：

*   **[Issue #3067](https://github.com/nearai/ironclaw/issues/3067) [OPEN]**: **Reborn 集成测试策略**（评论 33 条）。
    *   **分析**：核心贡献者 @serrrfirat 正推动建立跨 crate 的集成测试，以确保 Reborn 底层通过公共入口点正常工作。这反映了社区对重构期间代码质量的高度焦虑与责任感。
*   **身份认证模块审计系列 Issues**:
    *   **[Issue #5614](https://github.com/nearai/ironclaw/issues/5614) [OPEN]**: 跨进程不同邮箱登录可能导致主体分裂。
    *   **[Issue #5615](https://github.com/nearai/ironclaw/issues/5615) [OPEN]**: `bind()` 方法缺乏 OAuth 表面防护。
    *   **分析**：贡献者 @ilblackdragon 提交了深度代码审计结果，指出现有的 `FilesystemRebornIdentityStore` 实现在并发和边界条件下存在严重安全隐患，引发了社区对认证模块健壮性的关注。

## 5. Bug 与稳定性
今日报告了较多严重级别的 Bug，主要集中在身份认证与 Slack 集成，且 CI 环境不稳定。

*   **Critical (严重)**:
    *   **[Issue #5614](https://github.com/nearai/ironclaw/issues/5614)**: **身份分裂漏洞**。跨进程登录可能导致同一用户生成多个身份记录，破坏用户数据一致性。暂无 Fix PR。
    *   **[Issue #5615](https://github.com/nearai/ironclaw/issues/5615)**: **权限绕过风险**。`bind()` 接口未检查 `SurfaceKind`，可能导致权限提升。暂无 Fix PR。
    *   **[Issue #5590](https://github.com/nearai/ironclaw/issues/5590) / [Issue #5603](https://github.com/nearai/ironclaw/issues/5603)**: **CI 主分支红灯**。Docker 构建失败与 Clippy 检查未通过。**修复进展**：[PR #5591](https://github.com/nearai/ironclaw/pull/5591) 已提交修复。
*   **High (高)**:
    *   **[Issue #5522](https://github.com/nearai/ironclaw/issues/5522)**: Reborn 例程在读取 Slack DMs 时因缺乏权限陷入重试循环并最终失败。
    *   **[Issue #5583](https://github.com/nearai/ironclaw/issues/5583)**: 模型调用被禁用的工具时，系统错误地判定为 `model_error` 而非拒绝访问。
*   **Medium (中)**:
    *   **[Issue #5602](https://github.com/nearai/ironclaw/issues/5602)**: Slack 连接功能异常，聊天中无法正常完成连接。
    *   **[Issue #5608](https://github.com/nearai/ironclaw/issues/5608)**: 本地开发环境下的合成能力重试路径不可达。

## 6. 功能请求与路线图信号
*   **Slack 集成现代化**：
    *   **[PR #5604](https://github.com/nearai/ironclaw/pull/5604)** 提议移除旧的 Slack Pairing Code 流程，全面转向 OAuth 模式。这标志着项目正在清理历史包袱，向企业级安全标准靠拢。
*   **UI/UX 改进**：
    *   **[PR #5084](https://github.com/nearai/ironclaw/pull/5084)** 正在重新设计 Automations 页面，提升布局密度与可扫描性。目前仍在等待合并，显示项目前端交互正在持续优化。
*   **迁移路径明确化**：
    *   随着迁移工具 [PR #5627](https://github.com/nearai/ironclaw/pull/5627) 的提出，项目明确传递了 "Reborn 架构将作为未来主要支撑" 的信号，旧版 v1/engine-v2 将逐步退出历史舞台。

## 7. 用户反馈摘要
*   **Slack 集成痛点集中**：多位用户反馈 Slack 连接流程存在问题（无法删除旧例程、连接中断、DM 读取失败），显示 Slack 依然是当前用户最核心的使用场景，也是故障高发区。
*   **自动化管理困难**：用户报告无法删除旧的 Routines ([Issue #5510](https://github.com/nearai/ironclaw/issues/5510))，导致配置混乱，反映了产品层面管理工具的缺失。
*   **开发体验受损**：本地开发环境的重试机制失效 ([Issue #5608](https://github.com/nearai/ironclaw/issues/5608))，对开发者调试造成困扰。

## 8. 待处理积压
*   **[Issue #3067](https://github.com/nearai/ironclaw/issues/3067)**: **Reborn 集成测试**。作为高风险 P0 级别任务，已活跃 2 个月，评论数极高，建议优先推进，以确保重构期间的核心功能不退化。
*   **[PR #5084](https://github.com/nearai/ironclaw/pull/5084)**: **Automations 页面重设计**。自 6 月 18 日开启至今未合并，可能存在设计分歧或合并冲突，建议维护者 Review 状态。
*   **[PR #5049](https://github.com/nearai/ironclaw/pull/5049)**: **生产环境身份与配置上下文连线**。自 6 月 17 日开启，此 PR 修复了生产环境配置上下文缺失的问题，对生产用户至关重要，建议加速合并。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-07-04)

## 1. 今日速览
LobsterAI 项目今日呈现出极高的开发活跃度，主要集中在 **v2026.7.3 版本发布**后的收尾与合并工作。过去24小时内共有 16 个 PR 发生更新，其中 14 个已合并/关闭，显示出维护者高效清理积压代码并推进发版的能力。项目重点修复了 macOS 全屏黑屏、大 Session 渲染性能及 UI 布局等关键体验问题，并成功将 `release/2026.7.1` 分支合并回主干，标志着新功能周期的阶段性完成。

## 2. 版本发布
**Release: LobsterAI 2026.7.3** ([Link](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.3))
本次更新带来了重要的新功能与架构改进：
*   **新功能**：
    *   **服务部署**：增强了服务部署能力。
    *   **Goal Mode (目标模式)**：在 Cowork 模块中引入了目标模式，支持 OpenClaw RPC 集成及命令显示优化。
    *   **子智能体产物面板**：增加了子智能体 Artifact 面板支持。
*   **迁移注意**：无明显的破坏性变更，但建议关注 Goal Mode 的配置变更。

## 3. 项目进展
今日合并了多个关键 PR，显著提升了应用的稳定性与用户体验，项目整体向更成熟的阶段迈进：
*   **性能优化与诊断**：PR [#2264](https://github.com/netease-youdao/LobsterAI/pull/2264) 针对大型会话进行了渲染优化（减少渲染工作量），并新增了“诊断包导出”功能，极大方便了问题排查。
*   **架构与状态管理**：PR [#2267](https://github.com/netease-youdao/LobsterAI/pull/2267) 修复了模型覆盖状态的同步问题，确保 IM/Channel 会话与 OpenClaw 网关状态一致；PR [#2266](https://github.com/netease-youdao/LobsterAI/pull/2266) 修复了 Chat 错误导致的上下文维护 UI 卡死问题。
*   **发版整合**：PR [#2270](https://github.com/netease-youdao/LobsterAI/pull/2270) 完成了 `release/2026.7.1` 向 `main` 分支的合并，包含了 Goal Mode 支持及多项文档与修复更新。
*   **跨平台体验**：PR [#2246](https://github.com/netease-youdao/LobsterAI/pull/2246) 修复了 macOS 全屏关闭时的黑屏问题，优化了关闭窗口的生命周期处理。

## 4. 社区热点
目前社区活跃度主要集中在功能增强的 PR 上，Issue 活动较少。
*   **PR #1353 [OPEN]**: **Agent 技能选择器新增全选和清除功能** ([Link](https://github.com/netease-youdao/LobsterAI/pull/1353))
    *   **分析**：该 PR 旨在解决用户在配置 Agent 时批量选择技能的痛点。虽然目前状态为 `stale`，但这是一个典型的 UX 改进需求，反映了用户在复杂配置场景下对效率工具的迫切需求。
*   **PR #1464 [OPEN]**: **IM 实例名称重复校验** ([Link](https://github.com/netease-youdao/LobsterAI/pull/1464))
    *   **分析**：针对钉钉、飞书等多实例 IM 配置的健壮性改进，防止同名实例导致的消息冲突，体现了企业级应用对配置严谨性的要求。

## 5. Bug 与稳定性
今日修复了多个影响体验的 Bug，未报告新的严重崩溃问题：
*   **[已修复] macOS 全屏黑屏**：PR [#2246](https://github.com/netease-youdao/LobsterAI/pull/2246) 解决了在 macOS 原生全屏模式下关闭窗口可能出现的黑屏问题。
*   **[已修复] 会话状态不同步**：PR [#2267](https://github.com/netease-youdao/LobsterAI/pull/2267) 修复了应用内模型切换与 OpenClaw 网关状态不一致的问题。
*   **[已修复] UI 布局压缩**：PR [#2265](https://github.com/netease-youdao/LobsterAI/pull/2265) 修复了部署分享弹窗在内容滚动时头部和底部布局被压缩的问题。
*   **[已忽略] MCP 页面展示问题**：Issue [#1422](https://github.com/netease-youdao/LobsterAI/issues/1422) 关于长服务名称在删除弹框展示不友好的问题被标记为 `[stale]` 并关闭，建议社区关注是否需要重新开启或提供 PR 修复。

## 6. 功能请求与路线图信号
根据 PR 动态分析，项目正致力于深化 **Cowork (协同)** 与 **OpenClaw** 架构的融合：
*   **Goal Mode 深化**：多个 PR (如 #2241, #2262) 显示项目正在打磨 Cowork 的目标模式，使其更符合智能体工作流的设定。
*   **诊断工具增强**：新增的 Diagnostics package 导出功能 (#2264) 暗示项目正在为未来的大规模部署和企业级支持做准备，方便用户反馈复杂环境下的日志。
*   **配置体验优化**：社区 PR #1353 和 #1464 均指向“配置管理”环节，表明随着功能增加，配置界面的易用性和严谨性是用户下一步关注的重点。

## 7. 用户反馈摘要
*   **痛点：配置效率低**：用户反馈在 Agent 技能选择时缺乏批量操作（全选/清除），需要逐个手动点击，体验繁琐 (PR #1353)。
*   **痛点：实例管理混乱**：用户在使用多 IM 实例时遇到重名导致难以区分，以及重复添加机器人导致消息处理异常的情况 (PR #1464)。
*   **痛点：UI 细节瑕疵**：有用户指出 MCP 自定义页面中，服务名称过长时删除弹框展示效果不佳 (Issue #1422)，但该问题目前因长期未活跃而被关闭。

## 8. 待处理积压
*   **PR #1353 (Agent 技能全选)** 和 **PR #1464 (IM 实例校验)**：这两个功能增强型 PR 长期处于 Open/Stale 状态，虽然功能实用但未合并。建议维护者评估是否纳入官方版本，或给予贡献者反馈。
*   **Issue #1422 (MCP 长文本 UI)**：虽然已关闭，但若 UI 确实存在展示问题，建议后续版本中予以修复。

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

# CoPaw (QwenPaw) 项目动态日报 (2026-07-04)

> **分析师注**：尽管日报请求中提及项目名为 CoPaw，但提供的 GitHub 数据链接及内容均指向 `agentscope-ai/QwenPaw` 仓库。以下分析基于实际提供的 QwenPaw 数据进行。

## 1. 今日速览

今日 QwenPaw 项目保持了极高的活跃度，**Issue 关闭率高达 64% (25/39)**，显示出维护团队强大的问题处理能力与清理积压的决心。核心进展集中在 **v2.0 Beta 版本的稳定性修复** 与 **平台兼容性增强**，特别是 Windows 原生沙箱的实现与内存检索重排序功能的引入。PR 合并活跃，多项关键修复已就绪，项目正处于从功能迭代向稳定性打磨的关键过渡期。

## 2. 版本发布

- **无新版本发布**。
- 虽无正式 Release，但从 PR 动态看，团队正密集合并针对 v2.0 Beta 和现有版本的修复代码，预计近期将有新的 Beta 版本或补丁发布。

## 3. 项目进展

今日共有 **15 个 PR 被合并或关闭**，重点推进了以下领域：

- **平台兼容性突破**：PR [#5525](https://github.com/agentscope-ai/QwenPaw/pull/5525) 成功实现了 Windows 原生沙箱支持，解决了长期困扰 Windows 用户的 GBK 编码与进程隔离痛点。
- **记忆系统增强**：PR [#5648](https://github.com/agentscope-ai/QwenPaw/pull/5648) 与 [#5647](https://github.com/agentscope-ai/QwenPaw/pull/5647) 合并，为记忆搜索引入了可配置的 Reranker（重排序器），显著提升了混合检索的准确性。
- **模型支持更新**：PR [#5735](https://github.com/agentscope-ai/QwenPaw/pull/5735) 更新了 GitHub Models 端点并支持细粒度 PAT，PR [#1780](https://github.com/agentscope-ai/QwenPaw/pull/1780) 修复了对 BGE-M3 嵌入模型的支持。
- **架构演进**：PR [#5734](https://github.com/agentscope-ai/QwenPaw/pull/5734) 正在推进桌面端发布流程向 Tauri 切换，预示着更轻量、原生的桌面体验。

## 4. 社区热点

社区讨论主要集中在 **安全性** 与 **v2.0 架构变更** 上：

- **安全性与配置管理**：Issue [#5705](https://github.com/agentscope-ai/QwenPaw/issues/5705) 引发了关于密钥脱敏存储的深入讨论。用户指出当前版本存在环境变量回退覆盖不全、日志中可能泄露敏感信息的问题，建议增强 `agent.json` 的安全机制。
- **v2.0 Beta 上下文“失忆”问题**：Issue [#5746](https://github.com/agentscope-ai/QwenPaw/issues/5746) 报告了 v2.0 中 `scroll` 上下文压缩策略存在严重缺陷，可能导致正在执行的任务被错误折叠，模型“忘记”当前指令而回复旧消息。该问题已提交修复 PR [#5765](https://github.com/agentscope-ai/QwenPaw/pull/5765)。
- **架构瓶颈探讨**：Issue [#5767](https://github.com/agentscope-ai/QwenPaw/issues/5767) 分析了 Console 层受限于 SDK 的“单会话 pull”模型，认为这阻碍了多 Agent 并行演进，属于深层次架构优化议题。

## 5. Bug 与稳定性

今日报告的 Bug 集中在 v2.0 Beta 版本及特定模型兼容性上：

| 严重程度 | 描述 | 状态 | 链接 |
| :--- | :--- | :--- | :--- |
| **严重** | **v2.0 Scroll 策略导致上下文丢失**：执行长任务时模型忘记当前指令，恢复旧话题。 | Open (Fix PR #5765 已提交) | [Issue #5746](https://github.com/agentscope-ai/QwenPaw/issues/5746) |
| **严重** | **工具调用死循环**：Runtime 2.0 中畸形 tool-call 历史导致无限重复执行。 | Open (Fix PR #5761 已提交) | [Issue #5717](https://github.com/agentscope-ai/QwenPaw/issues/5717) |
| **中等** | **重型任务无故中断**：执行复杂任务时卡死或异常终止。 | Open | [Issue #5763](https://github.com/agentscope-ai/QwenPaw/issues/5763) |
| **中等** | **API 路径双前缀 404**：v2.0.0b2 中出现 `/api/api/...` 错误请求。 | Open | [Issue #5769](https://github.com/agentscope-ai/QwenPaw/issues/5769) |
| **低** | **计划模式重复读文件**：Plan mode 下同一文件被无意义读取多次。 | Open | [Issue #5759](https://github.com/agentscope-ai/QwenPaw/issues/5759) |

## 6. 功能请求与路线图信号

- **模型高可用性**：PR [#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) 正在开发 **LLM Model Fallback** 功能，允许在主模型重试失败后自动切换到备用模型。这将极大提升生产环境的稳定性，预计很快合入。
- **企业级集成扩展**：PR [#5762](https://github.com/agentscope-ai/QwenPaw/pull/5762) 提议增加 `azure_bot` 频道，支持 Teams、Slack 等多平台统一接入，显示项目正积极拓展企业级通讯场景。
- **安全增强**：Issue [#5705](https://github.com/agentscope-ai/QwenPaw/issues/5705) 提出的密钥脱敏需求与当前 PR 中的安全改进方向一致，预计后续版本将重点加强此领域。

## 7. 用户反馈摘要

- **痛点：多 Agent 性能**：用户反馈超过 40 个 Agent 后页面明显卡顿（[Issue #4559](https://github.com/agentscope-ai/QwenPaw/issues/4559)），表明前端在管理大量 Agent 实例时存在渲染或状态管理瓶颈。
- **痛点：插件残留**：用户在删除 Remote SSH 插件后遇到模块未清理的错误（[Issue #5689](https://github.com/agentscope-ai/QwenPaw/issues/5689)），反映出插件生命周期管理机制尚需完善。
- **期待**：社区对 v2.0 正式版抱有极高期待（[Issue #5770](https://github.com/agentscope-ai/QwenPaw/issues/5770)），同时也希望增加对话删除、自定义模型协议等基础功能。

## 8. 待处理积压

- **高优先级**：Issue [#5705](https://github.com/agentscope-ai/QwenPaw/issues/5705) 关于密钥安全的改进建议虽已被标记，但仍需具体的实施计划，涉及核心安全机制，建议团队尽快排期。
- **架构优化**：Issue [#5767](https://github.com/agentscope-ai/QwenPaw/issues/5767) 提出的 SDK 限制问题涉及底层重构，建议维护者评估是否纳入 v2.1 或 v3.0 路线图。
- **Pending PR**：PR [#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) (Fallback 机制) 和 [#5734](https://github.com/agentscope-ai/QwenPaw/pull/5734) (Tauri 桌面端) 处于 Open 状态多日，属于高价值功能，建议优先 Review 并推进合并。

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