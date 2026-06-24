# OpenClaw 生态日报 2026-06-24

> Issues: 193 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-24 03:50 UTC

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

# OpenClaw 项目动态日报 (2026-06-24)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，共发布了 **v2026.6.10** 新版本，涉及对话模式优化与模型路由改进。社区互动频繁，过去 24 小时内 Issues 更新高达 193 条（其中 141 条为活跃/新开），Pull Requests 更新达 500 条。值得注意的是，待合并 PR 数量高达 451 条，显示出社区贡献热情高涨，但也给代码审查带来了巨大积压压力。整体来看，项目正处于快速迭代期，重点攻克会话状态管理与多模型兼容性难题。

## 2. 版本发布
项目今日发布了 **v2026.6.10** 版本。
*   **更新亮点**：
    *   **Automatic fast mode for talks**: 实现了对话轮次的自动快速模式。对于简短的对话交互，系统可自动启用快速模式，并在需要长时间运行时回退到正常模式，优化了响应延迟。感谢贡献者 @alexph-dev 和 @vincentkoc。
    *   **More reliable model routing**: 改进了模型路由机制（尤其是 Zai 模型合成相关），提升了稳定性。
*   **破坏性变更/迁移注意**：发布说明未明确提及破坏性变更，但鉴于近期 Issue 反馈，建议升级前检查 SQLite 存储路径及相关配置。

## 3. 项目进展
今日共有 **49 个 PR** 被合并或关闭，部分重要进展如下：

*   **核心稳定性修复**：
    *   PR [openclaw/openclaw PR #69495](https://github.com/openclaw/openclaw/pull/69495): 支持心跳模型回退机制，修复了主要模型宕机时心跳无法切换的问题。
    *   PR [openclaw/openclaw PR #94359](https://github.com/openclaw/openclaw/pull/94359): 修复了会话显示名称问题，优先使用配置的账户名称作为直连会话的显示名，改善了 UI 识别度。
    *   PR [openclaw/openclaw PR #96260](https://github.com/openclaw/openclaw/pull/96260): 尝试修复嵌入式上游错误回退逻辑（注：该 PR 已关闭，后续修复可能在 [openclaw/openclaw PR #95542](https://github.com/openclaw/openclaw/pull/95542) 继续推进）。
*   **基础设施维护**：
    *   PR [openclaw/openclaw PR #96258](https://github.com/openclaw/openclaw/pull/96258): 将 CodeQL 质量扫描迁移至托管运行器，缓解了自托管运行器的注册限制问题。
    *   多个 PR（如 [openclaw/openclaw PR #96277](https://github.com/openclaw/openclaw/pull/96277)）描述为 "Restored replacement after the fork/head repository was recreated"，表明项目近期进行了仓库重建或分支历史整理，基础设施正在恢复中。

## 4. 社区热点
今日讨论最活跃的议题集中在核心架构与特定渠道集成上：

*   **核心架构迁移追踪** ([openclaw/openclaw Issue #88838](https://github.com/openclaw/openclaw/issues/88838)): 该 Issue 获得了 **35 条评论**，是今日热度最高的议题。维护者与社区正在追踪核心会话/转录 SQLite 迁移的进度，讨论了通过访问器接缝进行文件支持的采用的细节。这显示了项目正在对底层存储架构进行深度重构。
*   **iMessage 源回复延迟** ([openclaw/openclaw Issue #96148](https://github.com/openclaw/openclaw/issues/96148)): **17 条评论**。用户反馈 iMessage 源回复存在延迟，并讨论了针对 message-tool-only 轮次的性能调查补丁。
*   **Anthropic 思考块签名错误** ([openclaw/openclaw Issue #92201](https://github.com/openclaw/openclaw/issues/92201)): **14 条评论**。嵌入式运行器在重播 Anthropic 的 `thinking` 块时出现签名无效错误，导致恢复包装器无法触发。这是影响生产环境的关键 Bug 之一。

## 5. Bug 与稳定性
今日报告了大量 Bug，主要集中在会话状态与多模型兼容性上：

### 严重
*   **会话死锁与消息丢失** ([openclaw/openclaw Issue #92076](https://github.com/openclaw/openclaw/issues/92076)): 子代理完成交付在请求者会话处于非活跃状态时失败，导致消息丢失。
*   **压缩超时导致崩溃循环** ([openclaw/openclaw Issue #92043](https://github.com/openclaw/openclaw/issues/92043)): 180秒的压缩超时设置过短，导致合法的长时压缩失败并引发会话崩溃。
*   **数据库锁定永久损坏会话** ([openclaw/openclaw Issue #95833](https://github.com/openclaw/openclaw/issues/95833)): 子代理中止处理未能释放 `.jsonl.lock` 文件，导致会话永久阻塞。目前尚无关联的 Fix PR。

### 中等
*   **Telegram 富文本渲染回归** ([openclaw/openclaw Issue #95554](https://github.com/openclaw/openclaw/issues/95554)): 启用 `richMessages` 后，段落换行失效，内容挤在一行。
*   **模型兼容性问题**:
    *   [openclaw/openclaw Issue #88657](https://github.com/openclaw/openclaw/issues/88657): DeepSeek V4 Flash 通过 OpenRouter 调用时出现不完整轮次。
    *   [openclaw/openclaw Issue #94251](https://github.com/openclaw/openclaw/issues/94251): Ollama 远程提供商流未被消费，导致会话卡死。
    *   [openclaw/openclaw Issue #95760](https://github.com/openclaw/openclaw/issues/95760): NVIDIA Build 提供商在工具调用中途截断流。

### 修复中
*   PR [openclaw/openclaw PR #95631](https://github.com/openclaw/openclaw/pull/95631) 正在修复 **v2026.6.9 静默重定位内存存储且无迁移** 的问题，这是一个重要的修复，目前状态为 `ready for maintainer look`。

## 6. 功能请求与路线图信号
*   **MathJax/LaTeX 支持** ([openclaw/openclaw Issue #42840](https://github.com/openclaw/openclaw/issues/42840)): 用户强烈希望在控制 UI 中支持数学公式渲染，获得 **7 个👍**。这是一个高价值的用户体验改进。
*   **MCP 服务器作为压缩提供者** ([openclaw/openclaw Issue #96156](https://github.com/openclaw/openclaw/issues/96156)): 提议允许 `compaction.provider` 接受 MCP 服务器引用，使任何 MCP 工具都能作为摘要引擎。这是一个架构扩展性建议，可能在未来版本中实现。
*   **全局 SSRF 策略配置** ([openclaw/openclaw Issue #93068](https://github.com/openclaw/openclaw/issues/93068)): 建议统一各子系统的 SSRF 防护策略配置，简化安全管理。

## 7. 用户反馈摘要
*   **痛点**：用户对 **会话状态丢失** 和 **锁文件残留** 感到非常沮丧，尤其是当这些 Bug 导致长时间运行的代理任务中断且无法恢复时 ([Issue #92043](https://github.com/openclaw/openclaw/issues/92043), [Issue #95833](https://github.com/openclaw/openclaw/issues/95833))。
*   **特定渠道体验**：Telegram 用户反馈富文本消息在新版本中出现格式问题 ([Issue #95554](https://github.com/openclaw/openclaw/issues/95554))；iMessage 用户关注延迟问题 ([Issue #96148](https://github.com/openclaw/openclaw/issues/96148))。
*   **配置困惑**：有用户反馈升级后内存存储路径悄然改变，导致必须重新进行全量嵌入，缺乏迁移警告 ([Issue #95495](https://github.com/openclaw/openclaw/issues/95495))。

## 8. 待处理积压
*   **高优先级未响应 Issue**:
    *   [openclaw/openclaw Issue #42840](https://github.com/openclaw/openclaw/issues/42840) (MathJax 支持): 长期未分配维护者，用户需求明显。
    *   [openclaw/openclaw Issue #71712](https://github.com/openclaw/openclaw/issues/71712) (Agent 面向调度 API): 涉及安全性和不可伪造来源，需要产品决策。
*   **PR 审查瓶颈**: 目前有 **451 个待合并 PR**，尽管今日有大量 PR 活动，但积压严重。例如：
    *   [openclaw/openclaw PR #55018](https://github.com/openclaw/openclaw/pull/55018) (优化 O(N²) 复制): 自 3 月开启至今仍在等待审查。
    *   [openclaw/openclaw PR #89041](https://github.com/openclaw/openclaw/pull/89041) (Discord WS 修复): 标记为 P1 且有足够证明，等待合并。

---

## 横向生态对比

# 2026-06-24 AI 智能体与个人助手开源生态横向对比分析报告

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正经历从"对话工具"向"多模态任务执行平台"的关键跃迁。整体呈现出**功能架构重构期**的特征：一方面，OpenClaw、Hermes Agent 等头部项目正集中攻克会话状态管理与多模型路由难题，以应对日益增长的自动化需求；另一方面，安全性（SSRF、凭证泄露）与多端适配（移动端 PWA、嵌入式设备）成为社区关注的新焦点。头部项目普遍面临 PR 积压与代码审查瓶颈，显示生态正处于快速迭代与质量治理的博弈期。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新/活跃 | PRs 更新/合并 | 版本发布 | 健康度评估 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 193 / 141 | 500 / 49 | v2026.6.10 | 🟡 高负载预警 | 架构迁移、PR积压(451)、会话死锁 |
| **CoPaw** | 35 / - | 50 / 23 | v1.1.12.post2 | 🟢 活跃稳健 | 内存重构、移动端适配、UI优化 |
| **Hermes Agent**| 50 / - | 50 / 2 | 无 | 🟡 积压严重 | Token优化、PR积压(48)、网关重构 |
| **Zeroclaw** | 50 / - | 50 / - | 无 | 🟡 积压严重 | 安全增强、供应链签名、架构解耦 |
| **NanoBot** | 14 / - | 40 / 15 | 无 | 🟢 响应迅速 | Provider扩展、PWA、MCP安全 |
| **IronClaw** | 23 / - | 41 / 20 | 无 | 🟢 迭代有序 | 自动化调度、Google集成、Reborn重构 |
| **LobsterAI** | - / - | 5 / 5 | 无 | 🟠 存在风险 | 网关崩溃(严重)、Cron修复 |
| **PicoClaw** | - / - | 15 / 5 | 无 | 🟢 稳步推进 | Doubao兼容、Termux适配、安全修复 |
| **NanoClaw** | - / - | 12 / 8 | 无 | 🟢 精细治理 | SDK升级、Slack Socket、安全配置 |
| **EasyClaw** | 0 / 0 | 0 / 0 | v1.8.43 | 🟢 闭环开发 | 客服系统、营销自动化 |
| **NullClaw** | 1 / 0 | 1 / 0 | 无 | 🟢 维护为主 | Cron子智能体、自动化 |
| **Moltis** | 0 / 0 | 1 / 1 | 无 | 🔵 低频活跃 | 多模态交互 |
| **TinyClaw** | 0 / 0 | 0 / 0 | 无 | ⚪ 无活动 | - |
| **ZeptoClaw** | 0 / 0 | 0 / 0 | 无 | ⚪ 无活动 | - |

> 注：健康度评估基于 PR 积压情况、严重 Bug 状态及社区响应速度。

## 3. OpenClaw 在生态中的定位

*   **核心参照与流量中心**：OpenClaw 拥有生态中最高的社区活跃度（Issue 193条，PR 500条），是事实上的核心参照项目。其动态往往代表了生态最前沿的技术攻关方向。
*   **优势与挑战并存**：优势在于极高的社区贡献热情和快速的功能迭代（如今日发布的对话自动快速模式）。然而，其技术负债沉重，面临严重的稳定性挑战（会话死锁、消息丢失）和管理瓶颈（451 个待合并 PR），处于"高负载运行"状态。
*   **技术路线差异**：相比 NanoBot 专注于轻量化接入和 Provider 扩展，或 Zeroclaw 专注于安全性与供应链可信，OpenClaw 试图构建一个全能型的智能体核心，但在会话持久化和多模型兼容性上遭遇了架构瓶颈。

## 4. 共同关注的技术方向

1.  **会话稳定性与持久化**
    *   **涉及项目**：OpenClaw, CoPaw, Hermes Agent, LobsterAI。
    *   **具体诉求**：会话丢失、死锁、重启后上下文无法恢复是今日最高频的 Bug 类型。OpenClaw 正在重构 SQLite 存储，CoPaw 重构了内存生命周期，Hermes Agent 修复了 Gateway 状态持久化缺陷。这表明"长时记忆与稳定会话"是当前智能体落地最大的痛点。

2.  **安全边界的精细化治理**
    *   **涉及项目**：Zeroclaw, NanoBot, PicoClaw, NanoClaw。
    *   **具体诉求**：从粗放式部署转向安全最小化原则。NanoBot 曝光了 MCP 策略绕过漏洞，Zeroclaw 引入了供应链签名，PicoClaw 修复了策略绕过风险，NanoClaw 曝光了端口绑定隐患。社区正从"功能优先"转向"安全合规优先"。

3.  **多模型路由与 Token 成本优化**
    *   **涉及项目**：OpenClaw, Hermes Agent, NanoBot, LobsterAI。
    *   **具体诉求**：Hermes Agent 社区强烈呼吁优化 Token 开销，OpenClaw 改进了模型路由稳定性，LobsterAI 集成了 LiteLLM。企业级用户对 Token 成本和非 OpenAI 模型（如 DeepSeek, Doubao）的支持需求激增。

## 5. 差异化定位分析

*   **通用型架构 vs 专精型工具**：
    *   **OpenClaw, Zeroclaw** 致力于构建通用的智能体操作系统，强调扩展性和架构解耦。
    *   **EasyClaw, Moltis** 则深耕垂直场景，EasyClaw 专注于电商客服与营销，Moltis 专注于工具链集成，两者商业化路径更为清晰。
*   **交互体验侧重**：
    *   **CoPaw (QwenPaw)** 和 **NanoBot** 高度重视前端体验，今日均有大量移动端适配和 UI 优化更新，面向 C 端用户属性强。
    *   **Hermes Agent, IronClaw** 侧重后端调度与企业集成（如 Google Suite, Slack），更偏向 B 端生产力工具。
*   **部署形态**：
    *   **PicoClaw** 探索嵌入式与移动端部署，与其他主攻服务器/桌面端的项目形成互补。

## 6. 社区热度与成熟度

*   **快速迭代期（活跃度高，变动大）**：**OpenClaw, CoPaw, Hermes Agent**。此阶段项目功能爆发但 Bug 频出，适合极客与早期尝鲜者，生产环境需谨慎评估。
*   **质量巩固期（聚焦修复，稳步推进）**：**NanoBot, IronClaw, PicoClaw**。项目已有核心功能，目前重点在于修复 Bug 和提升兼容性，稳定性较好，适合作为开发基座。
*   **孵化/静默期**：**TinyClaw, ZeptoClaw, Moltis**。社区互动较少，处于功能完善或停摆边缘，建议观察后再投入资源。

## 7. 值得关注的趋势信号

1.  **自动化与任务调度成为标配**：NullClaw 的 Cron 引擎、IronClaw 的自动化生命周期管理、LobsterAI 的 Cron 修复均显示，AI 智能体正在从"即时响应"向"自主规划与执行"演进。
2.  **模型兼容性焦虑加剧**：社区反馈中涉及 DeepSeek, Doubao, StepFun 等非标准模型的适配问题显著增多。未来的 AI 助手必须具备强大的模型路由层和兼容性补丁机制，以应对"百模大战"的碎片化 API 标准。
3.  **PR 积压警示**：OpenClaw (451 PR) 和 Hermes Agent (48 PR) 的积压现象敲响警钟。开源项目在爆发期后若不能有效提升审查效率，将严重挫伤贡献者积极性并引入代码隐患。建议关注引入自动化审查工具或分治模块仓库。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-24)

## 1. 今日速览
NanoBot 项目今日保持高度活跃，社区贡献与维护者合并节奏显著加快。过去 24 小时内共有 **40 条 PR 更新**（其中 15 条已合并/关闭）和 **14 条 Issue 更新**（8 条已关闭），显示出项目在快速迭代修复 Bug 的同时积极引入新功能。今日重点聚焦于 **Provider 生态扩展**（新增 Kimi Coding、OpenCode 系列）、**前端体验优化**（修复 iOS Safari 兼容性、推进 PWA 支持）以及 **安全性修复**（MCP 策略绕过漏洞披露）。整体项目健康度良好，缺陷响应迅速，社区对新 Provider 的接入热情较高。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 15 个 PR 被合并或关闭，显著提升了项目的稳定性与功能广度：

*   **Provider 生态扩展**：
    *   合并 [PR #4464](https://github.com/HKUDS/nanobot/pull/4464)：新增 `kimi_coding` Provider，支持 Kimi Coding Plan 订阅用户的专用接口，解决了 Issue [#4463](https://github.com/HKUDS/nanobot/issues/4463)。
    *   合并 [PR #4476](https://github.com/HKUDS/nanobot/pull/4476)：新增 OpenCode Zen 与 OpenCode Go 两个 Provider，分别针对可靠编码代理与低成本场景，关闭 Issue [#4475](https://github.com/HKUDS/nanobot/issues/4475)。
*   **关键 Bug 修复**：
    *   合并 [PR #4444](https://github.com/HKUDS/nanobot/pull/4444)：修复了流式响应中 `tool_use` ID 重复导致会话失效（400 错误）的严重问题，关闭 Issue [#4442](https://github.com/HKUDS/nanobot/issues/4442)。
    *   合并 [PR #4471](https://github.com/HKUDS/nanobot/pull/4471)：修复 WebUI 在 iOS Safari 上点击输入框自动放大的兼容性问题，提升了移动端用户体验，关闭 Issue [#4388](https://github.com/HKUDS/nanobot/issues/4388)。
    *   合并 [PR #4472](https://github.com/HKUDS/nanobot/pull/4472)：修复 Telegram 渠道消息换行失效及流式输出闪烁的问题，关闭 Issue [#4470](https://github.com/HKUDS/nanobot/issues/4470)。
*   **基础设施与文档**：
    *   合并 [PR #4460](https://github.com/HKUDS/nanobot/pull/4460)：将项目 Node.js 版本升级至 24，保持依赖现代化。
    *   合并 [PR #4462](https://github.com/HKUDS/nanobot/pull/4462)：补充了运行时环境变量文档，方便开发者运维配置。

## 4. 社区热点
*   **安全漏洞披露**：Issue [#4434](https://github.com/HKUDS/nanobot/issues/4434) 与 [#4435](https://github.com/HKUDS/nanobot/issues/4435) 报告了 MCP `enabledTools` 配置存在绕过风险，攻击者可能绕过拒绝策略访问资源或提示词。这是今日最受关注的安全类讨论，目前维护者尚未合并修复 PR，建议关注后续动态。
*   **功能增强讨论**：
    *   Issue [#2298](https://github.com/HKUDS/nanobot/issues/2298) 再次活跃，讨论了小型模型容易陷入无限工具调用循环的问题，用户呼吁增加重试逻辑或检测机制。
    *   PR #4459 提议增加 Mattermost 渠道支持，目前处于 Open 状态，社区正审查其 WebSocket 与 REST API 实现细节。
*   **移动端体验**：关于 PWA 支持的 Issue [#4479](https://github.com/HKUDS/nanobot/issues/4479) 与 PR #4480 引起了移动端用户的关注，期待通过 PWA 实现类原生应用体验。

## 5. Bug 与稳定性
*   **严重**：
    *   [Issue #4434](https://github.com/HKUDS/nanobot/issues/4434) / [Issue #4435](https://github.com/HKUDS/nanobot/issues/4435)：MCP 安全策略绕过漏洞。**状态**：Open，暂无修复 PR 合并。
    *   [Issue #4442](https://github.com/HKUDS/nanobot/issues/4442)：重复 `tool_use` ID 导致会话彻底崩溃。**状态**：已通过 [PR #4444](https://github.com/HKUDS/nanobot/pull/4444) 修复并合并。
*   **中等**：
    *   [Issue #4470](https://github.com/HKUDS/nanobot/issues/4470)：Telegram 消息流式输出异常。**状态**：已通过 [PR #4472](https://github.com/HKUDS/nanobot/pull/4472) 修复并合并。
    *   [Issue #4388](https://github.com/HKUDS/nanobot/issues/4388)：iOS Safari 页面异常放大。**状态**：已通过 [PR #4471](https://github.com/HKUDS/nanobot/pull/4471) 修复并合并。
*   **轻微**：
    *   [Issue #4465](https://github.com/HKUDS/nanobot/issues/4465)：WebUI 未正确解析 `<thinking>` 标签，导致内部文本外泄。**状态**：已有修复 PR [PR #4466](https://github.com/HKUDS/nanobot/pull/4466) 待合并。

## 6. 功能请求与路线图信号
*   **PWA 支持**：PR #4480 正在实现 PWA 及侧边栏滑动手势（关联 Issue [#4479](https://github.com/HKUDS/nanobot/issues/4479)）。鉴于移动端体验修复已先行合并，该功能极有可能在近期纳入版本。
*   **Mattermost 集成**：PR #4459 正在进行中，若合并将显著增强团队协作场景的支持能力。
*   **只读会话模式**：PR #4271 提议为 pinned 会话增加只读模式以节省 Token，适合作为静态知识库场景，目前处于 Open 状态。
*   **工具调用容错**：PR #4485 提议使子代理在工具错误时可配置失败策略而非直接报错，提升自动化流程鲁棒性。

## 7. 用户反馈摘要
*   **模型稳定性痛点**：用户反馈在使用本地小模型时，Agent 易陷入工具调用死循环（[Issue #2298](https://github.com/HKUDS/nanobot/issues/2298)），急需增加保护逻辑。
*   **移动端体验改善**：iOS 用户对输入框放大导致的 UI 变形问题反馈强烈，今日修复后体验应有所提升；同时对 PWA 支持有明确需求。
*   **配置灵活性**：用户希望 Dream 功能在运行时能更新已有技能而非创建重复文件（[Issue #4467](https://github.com/HKUDS/nanobot/issues/4467)），反映了对个性化配置持续优化的需求。
*   **提供商多样性**：社区对新增 OpenCode 和 Kimi Coding Provider 反应积极，表明用户对高性价比和多模型选择有较高需求。

## 8. 待处理积压
*   [Issue #4434](https://github.com/HKUDS/nanobot/issues/4434) & [Issue #4435](https://github.com/HKUDS/nanobot/issues/4435)：**安全问题需优先响应**，目前仅讨论未修复。
*   [PR #4271](https://github.com/HKUDS/nanobot/pull/4271)：只读会话特性，已开启两周，需维护者审查进度。
*   [PR #3732](https://github.com/HKUDS/nanobot/pull/3732)：关于 Provider 匹配逻辑的修复，涉及底层逻辑变更，需关注是否有破坏性影响。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 (2026-06-24)

## 1. 今日速览
ZeroClaw 项目今日维持高活跃度，Issues 与 PR 更新量均达 50 条，显示社区开发热情高涨。重点聚焦于**安全性增强**（供应链签名、插件权限隔离）与**架构重构**（内存管理策略、Web Dashboard 热升级）。值得关注的是，PR 积压现象明显（48 个待合并），包含多个大型功能 PR，提示需加强代码审查吞吐量。整体项目正在向 v0.8.3 和 v0.9.0 里程碑稳步推进，质量建设（测试覆盖率）与用户体验（Onboarding、流式输出）并重。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日项目在架构解耦、安全修复和测试覆盖方面取得实质性进展。

*   **架构重构与核心功能**
    *   **内存管理解耦**：PR #6907 已关闭（可能已合并），引入了 `MemoryStrategy` trait，将高层内存生命周期策略与底层存储实现分离，为后续更复杂的记忆管理机制打下基础。
    *   **Onboarding 体验重塑**：PR #8033 (XL) 正在推进中，计划将 `zeroclaw onboard` 重塑为对话式引导流程，旨在降低新用户上手门槛。
    *   **Web Dashboard 热升级**：PR #8173 (L) 正在实现 RFC #8170，支持从 Web 端检测、查看日志并重启升级，将极大简化运维流程。

*   **安全修复与增强**
    *   **插件权限隔离**：Issue #5919 已关闭，针对 `zc_env_read` 添加了白名单机制，修复了任意环境变量读取的风险。
    *   **SSRF 防护**：Issue #5918 已关闭，为 `zc_http_request` 主机函数增加了 SSRF 防护。
    *   **供应链安全**：Issue #8058 正在推进 Release 产物的 cosign 签名与 SLSA 来源证明，提升软件供应链安全等级。

*   **测试质量建设**
    *   今日有大量 PR 集中于单元测试补充，覆盖了 API 认证、Gateway 限流、Tools 模板渲染、Memory 去重等核心模块（见 PR #8272, #8271, #8270, #8266），表明项目正处于"偿债"与稳固期。

## 4. 社区热点
*   **RFC: 供应链签名 (#8177)**
    *   **评论数: 4**
    *   **分析**：社区对引入硬件 PGP 密钥、SLSA 来源证明等高级安全措施讨论热烈。这反映了用户对 AI Agent 本地运行环境安全性的高度敏感，希望确保运行代码的可信度。
*   **[Wontfix] 允许不安全 HTTPS 请求至 OpenAI 兼容端点 (#551)**
    *   **评论数: 5**
    *   **分析**：用户希望支持自签名证书以便对接内网/自建 LLM 服务，但项目方基于安全考量标记为 `wontfix`。该决策引发了一定争议，反映了"安全性"与"易用性/灵活性"之间的权衡。
*   **Quickstart 默认风险配置自动设为 YOLO (#8125)**
    *   **评论数: 3**
    *   **分析**：针对新用户被默认严格策略"劝退"的问题，社区讨论了自动放宽限制的方案。这体现了项目正在努力平衡"默认安全"与"开箱即用"的体验。

## 5. Bug 与稳定性
*   **P1 级严重问题**
    *   **System Prompt 工具可用性不匹配 (#8054)**：系统提示词告知推理模型"无工具可用"，但实际请求中包含工具。该 Bug 影响所有入口，目前状态为 `Accepted`，等待修复。
    *   **Matrix 频道图片引用丢失 (#8151)**：延迟加载的图片附件在历史记录中丢失引用，导致 Bot 无法识别，阻塞了多模态工作流。
    *   **MCP Tools 在 TUI 中不可见 (#8193)**：Gateway 已发现工具，但 TUI 会话未同步。Issue 已关闭，推测已修复。

*   **P2 级功能性问题**
    *   **Telegram Token 泄露风险 (#2091)**：日志中可能包含 Bot API Token，已修复关闭。
    *   **OpenRouter Fallback 支持 (#8138)**：虽然标记为 Feature，但涉及服务稳定性。已有 PR #8141 和 #8207 正在解决此问题。

## 6. 功能请求与路线图信号
*   **OpenRouter 自动故障转移**：Issue #8138 提出对 OpenRouter `models` 数组的支持。目前已有 PR #8141 和 #8207 实现该功能，**极大概率纳入下个版本**。
*   **钉钉流式消息支持 (#8228)**：针对钉钉频道的流式输出需求，已接受 (`Accepted`)，提升用户在 IM 中的交互体验。
*   **Per-Agent 环境变量注入 (#8226)**：请求支持为每个 Agent 单独配置环境变量，增强多租户与隔离能力，目前状态为 `needs-author-action`。
*   **插件硬件访问能力 (#8187)**：RFC 提出通过 WASI 为插件提供硬件访问能力，这是一个长期的架构演进信号。

## 7. 用户反馈摘要
*   **内网/自建服务对接困难**：用户反馈自签名证书被拒 (#551)，表明部分用户在私有化部署场景下遇到阻碍。
*   **新手体验有待优化**：Quickstart 流程中过于严格的默认策略导致用户体验受挫 (#8125)，项目方正着手调整。
*   **运维便捷性需求强烈**：Web Dashboard 升级功能的开发 (#8170) 显示出用户希望减少手动运维成本，实现更便捷的版本管理。
*   **对安全性的认可**：社区对 SSRF 修复、插件权限隔离等安全更新反响积极，认可项目在安全性上的严谨态度。

## 8. 待处理积压
*   **PR 审查瓶颈**：目前有 **48 个 PR 处于 Open 状态**，其中包括多个 XL/L 级别的大型重构（如 #8033, #8173）。建议维护者优先处理积压的大型 PR，以免阻塞后续功能开发。
*   **长期追踪 Issue**：
    *   **v0.8.3 & v0.9.0 里程碑**：Issue #8071 和 #7432 分别追踪两个版本的路线图，包含大量待办事项，需持续关注进度。
    *   **代码审计遗留**：Issue #6074 追踪恢复此前被批量回滚的 153 个 commits，目前状态为 `in-progress`，需防止代码丢失。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-24)

## 1. 今日速览
过去 24 小时，Hermes Agent 社区活跃度维持高位，Issue 更新达 50 条，但关闭率较低（仅 16%）；PR 更新同样达到 50 条，却有 48 条处于待合并状态，**PR 积压现象严重**，需警惕社区贡献者的等待成本。讨论焦点高度集中于 **Token 消耗优化** 与 **跨平台稳定性**。整体来看，项目正处于功能快速迭代期，但维护节奏稍显滞后，亟需加快代码审查速度以疏通贡献流。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
尽管合并数量较少（仅 2 条），但核心修复与功能 PR 活跃，重点解决了若干关键稳定性问题：

*   **核心修复推进：**
    *   PR [#51651](https://github.com/NousResearch/hermes-agent/pull/51651) 修复了 Gateway 状态持久化中 `active` 字段缺失的问题，解决了重启后上下文丢失的严重 Bug。
    *   PR [#51655](https://github.com/NousResearch/hermes-agent/pull/51651) 快速响应了 Issue #51652，阻止了 Copilot 凭证的自动静默注入，增强了多 Provider 环境下的路由安全性。
    *   PR [#51305](https://github.com/NousResearch/hermes-agent/pull/51305) 进行了依赖项安全升级，修复了多个高危 CVE。

*   **功能拓展：**
    *   PR [#44356](https://github.com/NousResearch/hermes-agent/pull/44356) 正在推进 Excel Sidecar 功能，旨在打通 Excel 与 Agent 的交互。
    *   PR [#8427](https://github.com/NousResearch/hermes-agent/pull/8427) 持续集成 Vertex AI 支持，扩展了企业级模型接入能力。

## 4. 社区热点
今日社区讨论最热烈的话题集中在性能优化与多智能体架构：

*   **Token 开销优化呼声高涨**：Issue [#6839](https://github.com/NousResearch/hermes-agent/issues/6839)（👍 14，评论 26）提出“懒加载 Tool Schema”方案，指出当前全量注入工具导致每次调用浪费 3.5k-5k tokens。Issue [#4379](https://github.com/NousResearch/hermes-agent/issues/4379)（评论 15）通过数据监控指出 73% 的 Token 为固定开销。用户对运行成本极其敏感，强烈建议优化工具注入策略。
*   **多智能体编排需求**：Issue [#5257](https://github.com/NousResearch/hermes-agent/issues/5257)（👍 16，评论 11）提出了通用 ACP 客户端构想，旨在让 Hermes 能够编排 Claude Code、Cursor 等外部 Agent，反映了用户将 Hermes 作为中控节点的强烈诉求。

## 5. Bug 与稳定性
今日报告的 Bug 涉及凭证管理、网关通信及桌面端体验，部分已有修复方案：

*   **[P1] 凭证池丢失与安全边界**：
    *   Issue [#19566](https://github.com/NousResearch/hermes-agent/issues/19566)：OpenAI-Codex 凭证池在轮转时会意外丢失新凭证。
    *   Issue [#43083](https://github.com/NousResearch/hermes-agent/issues/43083)：密码掩码 `***` 被写入历史记录，导致模型后续 Tool Call 失败。
*   **[P1] 网关与消息死循环**：
    *   Issue [#48648](https://github.com/NousResearch/hermes-agent/issues/48648)：Telegram 网关在流式消息超过 4096 字符时触发无限重发循环。
    *   Issue [#51646](https://github.com/NousResearch/hermes-agent/issues/51646)：Gateway 数据库 INSERT 遗漏 `active` 字段，导致重启后记忆全无（已有修复 PR [#51651](https://github.com/NousResearch/hermes-agent/pull/51651)）。
*   **[P1] Docker 环境变量被清空**：
    *   Issue [#51579](https://github.com/NousResearch/hermes-agent/issues/51579)：Docker 启动时的自动迁移会覆写 `.env` 文件，导致 Telegram 配置丢失，这是一个严重的回归问题。
*   **[P2] 桌面端体验问题**：
    *   Issue [#49787](https://github.com/NousResearch/hermes-agent/issues/49787)：桌面端每次启动都提示重装。
    *   Issue [#51575](https://github.com/NousResearch/hermes-agent/issues/51575)：停止按钮提示不存在的 `/interrupt` 命令。

## 6. 功能请求与路线图信号
结合 Issue 与活跃 PR，以下功能有望纳入近期版本：

*   **性能优化（高优先级）**：针对 #6839 的 Lazy Tool Schema Loading 讨论热烈，鉴于 PR 积压严重，社区可能会优先考虑此类不需要大规模重构的性能优化。
*   **工具与平台扩展**：PR [#22648](https://github.com/NousResearch/hermes-agent/pull/22648) (Ollama Cloud) 和 PR [#3335](https://github.com/NousResearch/hermes-agent/pull/3335) (Zulip 集成) 均处于 Open 状态且更新活跃，显示了项目向更广泛的工具链和通讯平台扩展的趋势。
*   **安全与权限控制**：Issue [#35357](https://github.com/NousResearch/hermes-agent/issues/35357) 指出 Tirith 审批门禁未覆盖非 Shell 工具（如 `write_file`），这是一个安全盲区，预计将在下一版本中得到修补。

## 7. 用户反馈摘要
*   **痛点：Token 成本焦虑**：多个 Issue 反映 Token 消耗过大，尤其是工具描述和固定开销占比过高，对本地模型和成本敏感用户极不友好。
*   **痛点：桌面端不成熟**：macOS/Windows 桌面客户端被频繁提及存在配置丢失、更新失败、连接断开无降级等问题，被视为“实验性功能”，尚不适合生产依赖。
*   **场景：多 Provider 路由混乱**：Issue #51652 反映了用户混用 OpenAI/Copilot/Anthropic 时的凭证污染问题，表明在多模型切换场景下，凭证隔离机制仍需加强。

## 8. 待处理积压
*   **PR 审查瓶颈**：当前有 **48 个 PR** 处于 Open 状态，其中包括 Vertex AI 支持、Excel 集成等大型功能。建议维护者优先关注 PR [#51305](https://github.com/NousResearch/hermes-agent/pull/51305)（安全更新）和 PR [#51651](https://github.com/NousResearch/hermes-agent/pull/51651)（状态丢失修复）的合并，以解决紧迫的生产问题。
*   **长期未决 Issue**：Issue [#4379](https://github.com/NousResearch/hermes-agent/issues/4379)（Token 分析）自 4 月创建至今仍在讨论，急需官方给出明确的优化路线图。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-24)

## 1. 今日速览
PicoClaw 项目今日整体活跃度中等偏高，核心开发重心明显向**安全性增强**与**跨平台兼容性**倾斜。过去 24 小时内共有 15 个 PR 更新，其中 5 个已合并/关闭，主要修复了 Doubao 模型兼容性、Web 端会话历史记录及 Line 通道稳定性问题。虽然今日无新版本发布，但待合并队列中已累积多项重要更新，包括 AWS Bedrock 提示词缓存优化及执行安全策略修复，显示出项目正在为下一次版本更新积蓄力量。社区方面出现了一个关于 Android/Termux 环境下 Gateway 崩溃的新 Bug 报告，值得开发者关注。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 **5 个 PR 被合并或关闭**，项目在模型兼容性和系统健壮性上取得了实质性进展：

*   **模型兼容性修复**：PR #3154 已合并，修复了火山引擎 Doubao Seed 模型在长对话或工具密集场景下将工具调用错误输出为 `<seed:tool_call>` XML 标签的问题，显著提升了对该模型的兼容性。
    *   链接: [sipeed/picoclaw PR #3154](https://github.com/sipeed/picoclaw/pull/3154)
*   **Web 端体验优化**：PR #3047 已合并，恢复了 Web 端会话详情的完整 JSONL 历史记录读取功能，解决了归档消息无法在详情页显示的问题，同时优化了列表分页性能。
    *   链接: [sipeed/picoclaw PR #3047](https://github.com/sipeed/picoclaw/pull/3047)
*   **代码质量与稳定性**：PR #3059 和 #3054 已合并，分别修复了资源关闭错误处理缺失和 Line 通道中类型断言可能引发的 Panic 问题，增强了系统的鲁棒性。
    *   链接: [sipeed/picoclaw PR #3059](https://github.com/sipeed/picoclaw/pull/3059)
    *   链接: [sipeed/picoclaw PR #3054](https://github.com/sipeed/picoclaw/pull/3054)

此外，PR #2888（工具配置加载修复）被关闭，可能因长期未更新或方案被否决。

## 4. 社区热点
今日社区活跃度主要集中在问题追踪与新功能提交，讨论最集中的 Issue 为：

*   **Android/Termux 环境崩溃问题**：Issue #3164 报告了在 Android/Termux 环境下，JSON-RPC 进程钩子会导致 Gateway 在启动后 2 秒内崩溃。这反映了部分用户将 PicoClaw 部署在移动端作为轻量级 AI Agent 的强烈需求。
    *   链接: [sipeed/picoclaw Issue #3164](https://github.com/sipeed/picoclaw/issues/3164)
*   **陈旧 Issue 清理**：Issue #3015（Windows QQ 通道连接失败）因长期未响应被自动关闭。这提示维护者可能缺乏对 Windows 端特定协议适配的维护资源，或该问题难以复现。

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排序如下：

1.  **[严重] Android/Termux Gateway 崩溃 (NEW)**
    *   **描述**: 在 Android/Termux (v0.2.9) 上，任何 Process Hook 配置均会导致 Gateway 启动后立即退出。
    *   **状态**: Open，暂无修复 PR。
    *   **链接**: [sipeed/picoclaw Issue #3164](https://github.com/sipeed/picoclaw/issues/3164)
2.  **[中等] 安全策略绕过风险**
    *   **描述**: PR #3161 指出，当命令匹配自定义允许规则时，会跳过拒绝模式的强制执行，可能导致 `jq` 等工具读取环境变量等敏感操作。
    *   **状态**: PR 已提交 (#3161)，等待合并。
    *   **链接**: [sipeed/picoclaw PR #3161](https://github.com/sipeed/picoclaw/pull/3161)
3.  **[中等] 跨站启动器请求漏洞**
    *   **描述**: PR #3160 修复了首次运行向导中的密码设置接口未校验来源的问题，存在跨站请求风险。
    *   **状态**: PR 已提交 (#3160)，等待合并。
    *   **链接**: [sipeed/picoclaw PR #3160](https://github.com/sipeed/picoclaw/pull/3160)

## 6. 功能请求与路线图信号
从待合并的 PR 中可以窥见项目下一阶段的发展方向：

*   **云边协同架构**：PR #3118 提议增加远程 Pico WebSocket 模式，允许 Agent 通过 WebSocket 远程连接，这标志着 PicoClaw 正在强化其作为分布式 AI Agent 中枢的能力。
    *   链接: [sipeed/picoclaw PR #3118](https://github.com/sipeed/picoclaw/pull/3118)
*   **成本优化**：PR #3163 计划支持 AWS Bedrock 的 Prompt Caching 功能，通过缓存前缀降低推理成本，这对生产环境用户极具吸引力。
    *   链接: [sipeed/picoclaw PR #3163](https://github.com/sipeed/picoclaw/pull/3163)
*   **IM 平台体验增强**：PR #2975 提议在 Telegram 群组中，将回复机器人的消息视为 @提及，降低了用户触发 AI 交互的门槛。
    *   链接: [sipeed/picoclaw PR #2975](https://github.com/sipeed/picoclaw/pull/2975)

## 7. 用户反馈摘要
*   **痛点 - 移动端部署难**：Issue #3164 揭示了用户在移动设备 上运行 PicoClaw 的尝试，目前的崩溃问题说明项目对非标准 Linux 环境的支持尚不完善。
*   **痛点 - 历史数据丢失**：PR #3047 的合并解决了 Web 端无法查看归档消息的问题，侧面反映用户对会话持久化和回溯功能有强依赖。
*   **场景 - 多模型切换**：PR #3154 针对 Doubao 模型的修复表明，用户群体中存在使用非 OpenAI 主流模型（如国内大模型）的需求，且对非标准输出格式的容忍度较低。

## 8. 待处理积压
*   **安全更新待合并**：PR #3160 (Auth 安全) 和 #3161 (Exec 安全) 均为安全相关修复，建议维护者优先 Review 并合并，以防生产环境风险。
*   **依赖更新堆积**：Dependabot 提交的依赖更新 PR (#3104, #3103, #3100) 仍处于 Open 状态，虽不紧急但建议定期批量处理以避免技术债务累积。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-24)

## 1. 今日速览
NanoClaw 项目今日保持**高强度的开发迭代节奏**，核心重心集中在基础设施升级与通道稳定性增强。过去24小时内共有 12 条 PR 更新，其中 8 条已合并/关闭，显示出维护者对代码库的高效治理。主要的工程推进围绕 **Chat SDK 4.29.0 大版本升级**以及 **Slack Socket Mode** 的全面落地展开，显著提升了本地开发与私有化部署的便捷性。此外，社区反馈了一个关于 Slack 端口绑定的安全隐患问题，值得开发者关注。

## 2. 版本发布
无。

## 3. 项目进展
今日项目主要完成了底层依赖的跨版本升级与关键通道功能的补全，具体进展如下：

*   **Chat SDK 大规模升级至 4.29.0**：
    维护者 @gabi-simons 连续合并了 #2834, #2835, #2836 三个 PR，将核心 `chat` SDK 及相关的 `channels` 和 `providers` 适配器全部升级至 4.29.0 版本。此次升级解决了 `ChatInstance` 与 bridge 类型检查的版本锁定问题，确保了 API 接口的一致性，为后续功能开发奠定了基础。
    *  链接: [#2834](https://github.com/nanocoai/nanoclaw/pull/2834), [#2835](https://github.com/nanocoai/nanoclaw/pull/2835), [#2836](https://github.com/nanocoai/nanoclaw/pull/2836)*

*   **Slack Socket Mode 正式落地**：
    通过 PR #2837 和 #2839 的合并，NanoClaw 现已原生支持 Slack Socket Mode。用户可通过设置 `SLACK_APP_TOKEN` 使用 WebSocket 出站连接，无需配置公网 HTTPS Webhook 或开放端口。这极大降低了本地开发环境或 NAT 后方主机的接入门槛，同时也提升了安全性。
    *  链接: [#2837](https://github.com/nanocoai/nanoclaw/pull/2837)*

*   **技能更新机制修复**：
    PR #2826 修复了 `/update-nanoclaw` 流程中的逻辑缺陷。此前用户可能会跳过技能的更新步骤，导致上游的重要修复未能生效。现在的机制会强制引导用户进行技能更新并在重新应用时重建容器，确保运行环境的一致性。
    *  链接: [#2826](https://github.com/nanocoai/nanoclaw/pull/2826)*

## 4. 社区热点
今日讨论焦点集中在以下两个功能性 PR 和一个安全相关的 Issue 上：

*   **Issue #2840 Slack 端口绑定安全隐患**：
    用户 @sirpy 报告了一个关键问题：尽管文档建议通过隧道连接端口 3000，但系统默认仍将 3000 端口绑定在外部 IP 上，导致隧道的安全意图失效。这反映出用户对安全部署配置的强烈关注。
    *  链接: [Issue #2840](https://github.com/nanocoai/nanoclaw/issues/2840)*
*   **PR #2832 审批流程增强**：
    该 PR 提议在模块审批卡片中增加“拒绝并说明理由”的选项，改变了过去仅反馈“已拒绝”的模糊体验。这表明项目正在致力于优化 AI 智能体与人类交互的反馈闭环，提升协作效率。
    *  链接: [PR #2832](https://github.com/nanocoai/nanoclaw/pull/2832)*

## 5. Bug 与稳定性
*   **中等 - 端口绑定与安全策略冲突** (Issue #2840)：
    问题描述：Slack 集成时，端口 3000 默认绑定外部 IP，使得原本用于安全的隧道方案形同虚设。
    状态：[OPEN]，暂无修复 PR，需关注维护者确认是否为设计缺陷或文档配置错误。
*   **已修复 - 技能更新静默失败** (PR #2826)：
    问题：用户在更新主机时可能无意中跳过了关键技能更新。
    状态：[CLOSED/Merged]，已通过更改更新流程逻辑修复。

## 6. 功能请求与路线图信号
*   **交互体验优化**：PR #2832 提出的“拒绝理由”机制，暗示项目正在细化 Human-in-the-loop（人机回环）的交互颗粒度，未来版本可能会进一步增强 AI 对拒绝理由的理解与自适应调整能力。
*   **架构扩展性**：PR #2842 提出了“通用惰性扩展点”，旨在不改变现有行为的前提下，为下游分支提供注册钩子的能力。这可能预示着 NanoClaw 正在为未来的插件化架构或更灵活的定制化部署做准备。
*   **容器稳定性**：PR #2771 针对 Agent 容器提出了增加 `--shm-size=1g` 和 `--init` 的改进，专门针对 Chromium 浏览器渲染崩溃和僵尸进程问题。这表明项目正在积极解决 AI 智能体在容器化环境下的实际运行痛点，预计将在下个版本合并。

## 7. 用户反馈摘要
根据 Issue #2840 的反馈，用户在实际生产部署中对**安全最小化原则**非常敏感。用户期望软件的默认行为应与安全文档保持一致（即默认不暴露端口），而不是依赖用户手动配置防火墙或隧道来规避风险。这提示项目在默认配置的安全性上仍有优化空间。

## 8. 待处理积压
*   **PR #2771 - 容器运行参数优化**：
    该 PR 已挂起约 9 天（创建于 06-15），今日虽有更新但尚未合并。鉴于其解决了 Headless Chromium 的内存崩溃问题，对 AI 智能体稳定性至关重要，建议维护者优先 Review。
    *  链接: [PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771)*
*   **PR #2842 - 扩展点架构重构**：
    涉及核心运行时的架构改动，目前处于 Open 状态，需要核心维护者进行深入评估其对未来维护成本的影响。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-06-24)

## 1. 今日速览
过去 24 小时，NullClaw 项目整体处于“稳步维护与功能迭代”阶段，社区活跃度平稳。项目成功关闭了 1 个关于响应内容的 Bug，显示出维护者对稳定性的持续关注。虽然无新版本发布，但核心功能 PR #783（Cron 子智能体）再次活跃，预示着项目正在向“任务自动化与安全加固”方向演进。整体来看，项目健康度良好，正积攒力量进行功能拓展。

## 2. 版本发布
无。

## 3. 项目进展
今日项目的实质性进展体现在问题修复与核心功能开发的持续推进：

*   **稳定性修复落地**：成功关闭了 Issue #967，解决了 Windows 环境下特定模型的高频无响应问题，提升了客户端在 Win11 平台的兼容性与稳定性。
*   **自动化核心功能推进**：PR #783 于昨日（23日）有更新，目前处于待合并状态。该 PR 引入了 Cron 子智能体引擎、运行历史记录及安全加固功能。虽然尚未合并，但持续的更新表明开发者正在积极完善该重磅功能，项目正从单一对话工具向自动化任务调度平台转型。

## 4. 社区热点
今日社区的关注点主要集中在自动化能力的构建与稳定性问题的解决上：

*   **[PR #783 feat(cron)](https://github.com/nullclaw/nullclaw/pull/783)**：这是目前最受关注的功能更新，涵盖了数据库支持的调度器、JSON CLI 输出及安全加固。该 PR 的活跃表明社区对 NullClaw 具备“定时任务”和“自动化工作流”能力的强烈需求。
*   **[Issue #967 [bug]](https://github.com/nullclaw/nullclaw/issues/967)**：该 Issue 虽已关闭，但因其高达 50% 的复现率引发了讨论。用户对特定模型在客户端上的响应稳定性表现出较高的敏感度，关闭该问题有效安抚了用户情绪。

## 5. Bug 与稳定性
今日无新报告的 Bug，主要处理了已存在的稳定性问题：

*   **[已解决] NoResponseContent 错误**
    *   **链接**：[Issue #967](https://github.com/nullclaw/nullclaw/issues/967)
    *   **严重程度**：中高（影响 >50% 的对话流程）。
    *   **详情**：用户在 Win11 环境下使用特定模型时频繁遇到 `NoResponseContent` 错误。
    *   **状态**：目前已关闭，推测已通过配置修复或排查解决了兼容性问题。

## 6. 功能请求与路线图信号
结合 PR 活动分析，项目下一阶段的路线图重点明确：

*   **自动化与调度**：PR #783 透露出项目正致力于构建 **Cron Subagent Engine**。这表明 NullClaw 正试图突破“即时对话”的限制，通过引入定时任务、历史记录表和任务队列，向“自主智能体”方向迈进。
*   **安全性与可观测性**：同在 PR #783 中，安全加固和 JSON CLI 输出也是重点。这意味着项目正在为集成到更大的自动化工作流中做准备，同时提升了对安全边界的重视。
*   **预测**：下一版本极有可能包含 Cron 任务调度功能和增强的 JSON 输出支持，以满足脚本化和自动化场景的需求。

## 7. 用户反馈摘要
从今日关闭的 Issue 中提炼出以下用户痛点：

*   **响应稳定性痛点**：用户对模型的响应成功率极其敏感。Issue #967 显示，当错误频率超过 50% 时，严重影响使用体验。用户期望 AI 助手能提供 100% 的稳定响应，或者在报错时提供更详细的日志以供排查。
*   **多平台对比需求**：反馈中用户提到了 `picocla...`（推测为类似工具 PicoCLI 或其他客户端），表明用户倾向于横向对比不同 AI 客户端的兼容性。这提示开发者需关注同类竞品的 API 处理方式，确保 NullClaw 在模型兼容性上不落下风。

## 8. 待处理积压
*   **长期运行的重磅功能 PR 需关注**：
    *   **[PR #783](https://github.com/nullclaw/nullclaw/pull/783)**：该 PR 创建于 2026-04-07，距今已逾 2 个月，至今尚未合并。虽然近期有活跃更新，但作为引入核心调度机制的重大变更，其漫长的审核周期可能阻塞了其他依赖该功能的开发。建议维护者尽快推进 Code Review 或拆分该 PR 以降低合并难度。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-24)

## 1. 今日速览
IronClaw 项目今日保持**高度活跃**，核心开发重心集中在 **IronClaw Reborn** 版本的稳定性修复与架构重构上。过去24小时内，项目处理了 41 条 PR 更新（其中 20 条已合并/关闭）和 23 条 Issue 更新，显示出维护者对社区反馈的快速响应能力。虽然无新版本发布，但多个关键 PR 的合并显著提升了自动化管理、Google 服务集成及 Slack 交付能力的质量。目前项目正处于解决技术债务（如移除 `dist` 追踪）和优化核心调度逻辑的阶段，整体健康度良好，但需关注调度器死锁等潜在风险。

## 2. 项目进展
今日合并与关闭的 PR 推动了项目在自动化控制、集成能力和系统稳定性方面的重要进展：

*   **自动化管理增强**：PR [#5133](https://github.com/nearai/ironclaw/pull/5133) 合并，正式为 Reborn 添加了自动化删除支持，完善了自动化的生命周期管理；相关的 Issue [#5122](https://github.com/nearai/ironclaw/issues/5122) 已关闭。
*   **Slack 集成优化**：PR [#5152](https://github.com/nearai/ironclaw/pull/5152) 成功将 Slack 设置迁移至 WebUI，提升了配置体验；PR [#5166](https://github.com/nearai/ironclaw/pull/5166) 和 [#5164](https://github.com/nearai/ironclaw/pull/5164) 修复了动态 Slack routine 交付逻辑，解决了 Slack 集成的遗留问题。
*   **Google 认证修复**：PR [#4969](https://github.com/nearai/ironclaw/pull/4969) 合并，修复了 Google WASM 工具的 `auth_required` 错误处理，解决了 Issue [#4991](https://github.com/nearai/ironclaw/issues/4991) 中提到的认证失败无重试问题。
*   **首次运行体验改进**：PR [#4592](https://github.com/nearai/ironclaw/pull/4592) 相关工作已完成，添加了首次运行设置的 API，改善了新用户的初始化流程。

## 3. 社区热点
今日社区讨论聚焦于自动化流程阻塞与安全策略误判问题：

*   **自动化流程阻塞 ([#4986](https://github.com/nearai/ironclaw/issues/4986))**：用户报告 `builtin.http` 等工具在自动化循环中可能永久阻塞等待审批。该问题在今日再次活跃，反映了用户对无人值守自动化可靠性的强烈需求。
*   **安全策略误判 ([#5169](https://github.com/nearai/ironclaw/issues/5169))**：新报告的问题引起了关注。内置技能指令中包含的 "Authorization" 等常见 API 词汇触发了模型的安全拒绝列表，导致任务失败。这暴露了安全过滤机制与功能性指令之间的冲突，是一个影响可用性的关键问题。

## 4. Bug 与稳定性
今日报告的 Bug 按严重程度排列如下：

*   **严重 - 调度器死锁 ([#5148](https://github.com/nearai/ironclaw/issues/5148))**：
    *   **问题**：Turn scheduler 心跳在持有异步存储锁时可能与状态更新发生自死锁，导致运行中的 Turn 永久卡死。
    *   **状态**：新开 Issue，暂无修复 PR，需核心维护者关注。
*   **重要 - 安全词库误杀 ([#5169](https://github.com/nearai/ironclaw/issues/5169))**：
    *   **问题**：绑定技能因包含 "Bearer" 等词汇被误判为不安全，导致请求失败且提示语模糊。
    *   **状态**：新开 Issue。
*   **重要 - 自动化 "Always approve" 失效 ([#5129](https://github.com/nearai/ironclaw/issues/5129))**：
    *   **问题**：`outbound_delivery_target_set` 的自动审批设置未生效。
    *   **状态**：正在调查中。
*   **中等 - 测试不稳定性 ([#5147](https://github.com/nearai/ironclaw/issues/5147))**：
    *   **问题**：测试 `trigger_poller_does_not_submit_turn_for_unpaired_actor` 出现间歇性失败，阻塞了合并队列。
    *   **状态**：已识别，待修复。

## 5. 功能请求与路线图信号
从最新的 PR 和 Issue 动态中，可以窥见项目下一阶段的发展方向：

*   **架构重构 - 记忆层解耦**：PR [#5163](https://github.com/nearai/ironclaw/pull/5163) 提出将模型记忆层从内核移至用户态扩展。这预示着 IronClaw 将提供更灵活、可插拔的记忆存储方案，支持文件系统等多种后端。
*   **上下文管理优化**：PR [#5149](https://github.com/nearai/ironclaw/pull/5149) 正在开发“渐进式工具披露”功能。旨在解决因全量工具 Schema 发送导致的 Token 消耗过大和超时问题，这将显著提升 NEAR AI 模型的响应速度和稳定性。
*   **开发者体验改进**：Issue [#5167](https://github.com/nearai/ironclaw/issues/5167) 提议停止追踪 `dist` 目录，以减少 PR 中的无关变更，表明团队正在优化开发工作流。

## 6. 用户反馈摘要
根据 Issue 详情，今日用户反馈主要集中在以下痛点：

*   **UI 交互一致性缺失**：用户反馈在 Gmail 认证过程中，不同会话展示的 UI 不一致（有时显示 OAuth 链接，有时显示手动令牌输入），导致操作困惑 ([#3732](https://github.com/nearai/ironclaw/issues/3732))。
*   **错误提示不明确**：当 Google Drive 认证失败或技能被安全策略拦截时，系统仅返回通用的“操作失败”或“临时系统问题”，掩盖了真实的认证过期或安全拦截原因，增加了排查难度 ([#4991](https://github.com/nearai/ironclaw/issues/4991), [#5169](https://github.com/nearai/ironclaw/issues/5169))。
*   **功能可见性问题**：用户指出扩展管理页面缺少“停用”按钮，导致无法便捷地关闭已安装的扩展 ([#5146](https://github.com/nearai/ironclaw/issues/5146))。

## 7. 待处理积压
以下长期 Issue 需引起注意：

*   **E2E 测试长期失败 ([#4108](https://github.com/nearai/ironclaw/issues/4108))**：Nightly E2E 测试已持续失败多日（最近更新于 6-23），虽然部分 PR 已尝试修复，但该问题依然存在，可能影响版本发布的稳定性。
*   **Google Calendar 事件排序问题 ([#4640](https://github.com/nearai/ironclaw/issues/4640))**：自 6 月 9 日开启以来，`list_events` 返回旧事件且无默认排序的问题仍未解决，影响了日程管理类自动化的体验。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-24)

## 1. 今日速览
LobsterAI 今日整体活跃度较高，核心开发重心集中在底层网关与任务调度模块的稳定性重构。过去 24 小时内，项目成功合入 5 个关键 PR，主要修复了 OpenClaw 网关的 Cron 同步与迁移逻辑，并优化了协作模式的交互体验。社区贡献方面，新增了 LiteLLM 作为 AI 网关提供商的重要功能 PR，显示出项目正在积极拓展多模型支持能力。然而，项目稳定性面临挑战，存在一个关于 4.1 版本升级后网关无限重启的严重 Issue 仍悬而未决，需维护团队优先响应。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 5 个 PR 被合并或关闭，显著提升了系统的健壮性与用户体验：

*   **协作模式优化**：PR [#2192](https://github.com/netease-youdao/LobsterAI/pull/2192) 合并，引入了持久化计划确认流程，增强了 Agent 执行任务前的交互确认机制，提升了复杂任务的可控性。
*   **任务调度修复**：PR [#2190](https://github.com/netease-youdao/LobsterAI/pull/2190) 修复了 OpenClaw Cron 会话同步问题，标准化了运行范围的缓存键，解决了定时任务重复运行时的会话复用问题。
*   **启动状态明确化**：PR [#2191](https://github.com/netease-youdao/LobsterAI/pull/2191) 优化了定时任务的启动状态展示，区分了加载、就绪与错误状态，并在握手后立即刷新数据，减少了轮询延迟。
*   **历史数据迁移**：PR [#2189](https://github.com/netease-youdao/LobsterAI/pull/2189) 增加了旧版 Cron 存储的自动迁移逻辑，确保升级过程的平滑过渡。
*   **日志重构**：PR [#2188](https://github.com/netease-youdao/LobsterAI/pull/2188) 关闭，涉及日志相关的底层调整。

## 4. 社区热点
今日讨论最活跃的议题是 Issue [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400)。

*   **议题分析**：该 Issue 反映了从 3.30 升级至 4.1 版本后出现严重兼容性问题，导致网关反复重启。用户反馈自定义 LLM 配置（qwen3.5-plus）与系统默认配置存在冲突。该问题导致用户环境“彻底瘫痪”，且截至目前仍为 OPEN 状态，评论数已达 6 条，显示社区对此类阻断性 Bug 的关注度极高。

## 5. Bug 与稳定性
*   **[严重] 网关启动失败循环** ([#1400](https://github.com/netease-youdao/LobsterAI/issues/1400))
    *   **现象**：4.1 版本升级后网关反复重启，无限循环。
    *   **影响**：系统不可用。
    *   **状态**：**未解决**，暂无关联 Fix PR。
*   **[中等] SSE 流安全性漏洞** ([#1401](https://github.com/netease-youdao/LobsterAI/pull/1401))
    *   **现象**：使用 `Math.random()` 生成请求 ID 存在被预测风险，可能导致流数据被窃听。
    *   **状态**：已有修复 PR 提交，建议使用 `crypto.randomUUID()` 替代，等待合并。
*   **[低] 多选附件丢失** ([#1402](https://github.com/netease-youdao/LobsterAI/pull/1402))
    *   **现象**：多选文件时仅保留最后一个文件。
    *   **状态**：已有修复 PR，等待合并。

## 6. 功能请求与路线图信号
*   **LiteLLM 集成** ([#2193](https://github.com/netease-youdao/LobsterAI/pull/2193))：社区贡献者提交了集成 LiteLLM 的 PR，旨在通过一个兼容 OpenAI 的端点接入 100+ LLM 提供商。这表明项目正在向更通用的 AI 网关客户端演进，有望在下一版本大幅扩展模型支持范围。
*   **定时任务 UI 优化** ([#1404](https://github.com/netease-youdao/LobsterAI/pull/1404))：针对 Electron 环境下原生时间选择器体验不佳的问题提出了优化方案，建议纳入下一版本迭代以提升用户体验。

## 7. 用户反馈摘要
*   **升级体验差**：用户报告 4.1 版本存在严重升级阻断问题，旧版配置未能平滑兼容，且报错信息提示不足。
*   **配置冲突**：自定义 LLM 配置与登录后的默认配置存在逻辑冲突，导致模型无法调用。
*   **渴望稳定性**：用户对系统瘫痪表示焦虑，并在 Issue 中留下了联系方式，迫切希望官方介入解决。

## 8. 待处理积压
以下 Issue/PR 创建时间较久但近期有活跃迹象，需维护团队重点关注：

1.  **Issue #1400**：严重阻断性 Bug，已存在近 3 个月，近期评论增加，需立即排期修复。
2.  **PR #1401, #1402, #1403, #1406**：这批 PR 均创建于 4 月初，近期被标记为 `[stale]` 但有更新。它们涵盖了安全性修复、UI 修复和国际化补全。建议维护者进行最终 Code Review 并尽快合并，以清理积压代码。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-24)

## 1. 今日速览
Moltis 项目今日整体活跃度处于**低水位**，社区侧无新增 Issues 或版本发布。核心动态集中于代码库的维护与功能迭代，仅有一项关键 PR 更新。值得注意的是，项目今日关闭了一个关于多模态交互（图片发送）的功能 PR，表明项目正在逐步完善 AI 智能体的渠道交付能力。整体来看，项目处于稳步但缓慢的推进状态，缺乏社区新增讨论，需关注开发节奏与社区响应速度。

## 2. 版本发布
无。

## 3. 项目进展
今日唯一的代码更新是 PR #215 的关闭。

*   **PR #215 [CLOSED] feat(tools): add send_image tool for channel image delivery**
    *   **链接**: [moltis-org/moltis PR #215](https://github.com/moltis-org/moltis/pull/215)
    *   **进展分析**: 该 PR 实现了 `send_image` 工具，允许 Skills 将本地图片文件（PNG, JPEG, GIF, WebP）发送至 Telegram 等渠道。技术实现上复用了现有的截图流水线（screenshot pipeline），通过返回 `data:` URI 由 chat runner 处理，方案较为优雅且具扩展性。
    *   **意义**: 此功能的落地标志着 Moltis 在**多模态交互能力**上迈出了重要一步，使其从纯文本/命令交互向富媒体交互扩展，提升了作为个人 AI 助手的实用价值。

## 4. 社区热点
过去 24 小时内无活跃讨论，无新增 Issues 或 PR 评论。社区氛围较为沉寂，缺乏新话题引导。

## 5. Bug 与稳定性
过去 24 小时内未收到新的 Bug 报告或崩溃反馈，项目稳定性未出现波动。

## 6. 功能请求与路线图信号
虽然无显式的用户功能请求，但从 PR #215 的关闭可以推断出项目的隐性路线图信号：
*   **多模态能力增强**: 项目正致力于打通 AI 智能体与外部通讯渠道（如 Telegram）的富媒体传输链路。
*   **工具链复用**: 开发团队倾向于复用现有架构（如 screenshot pipeline）而非引入重型新依赖，显示出对代码质量和技术债的控制意识。

## 7. 用户反馈摘要
由于缺乏新增 Issues 和评论数据，今日暂无用户反馈摘要。

## 8. 待处理积压
根据现有数据，发现存在**处理周期过长**的风险信号，建议维护者关注：
*   **PR 审查周期过长**: PR #215 创建于 2026-02-23，直至 2026-06-23 才关闭（跨度达 4 个月）。虽然功能最终落地，但漫长的审查周期可能会挫伤贡献者的积极性，导致社区活跃度下降。建议优化 PR 审查流程或增加活跃 Reviewer 数量。

---
*分析师注：项目当前技术迭代尚可，但社区运营与响应机制存在优化空间。建议维护者通过发布 Dev Log 或清理积压 Issue 来激活社区活力。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-06-24)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持**高活跃度**，社区交互频繁。过去 24 小时内共有 35 条 Issue 更新与 50 条 PR 更新，显示出项目迭代速度正在加快。项目发布了 **v1.1.12.post2** 版本，主要聚焦于 UI 修复与文件预览增强。后端核心进行了重大重构，特别是内存管理机制的重构（PR #5450）与关闭流程的性能优化。前端移动端适配工作正在密集推进，多笔相关 PR 已提交或合并。整体来看，项目正处于功能完善与性能优化的并行阶段，但部分遗留 Bug（如升级后配置重置）仍是用户痛点。

## 2. 版本发布
### v1.1.12.post2
- **更新内容**：
  - **修复**：解决了删除当前会话后无法正确导航至新会话的问题 ([PR #5376](https://github.com/agentscope-ai/QwenPaw/pull/5376))。
  - **功能增强**：文件预览功能现已支持相对路径 ([PR #5377](https://github.com/agentscope-ai/QwenPaw/pull/5377))。
  - **修复**：针对部分场景下的截断问题进行了修正。
- **影响评估**：属于修补版本，建议用户尽快升级以获得更流畅的会话管理体验。

## 3. 项目进展
今日共有 **23 笔 PR 合并/关闭**，核心进展如下：

- **核心重构与性能优化**：
  - **内存管理重构**：[PR #5450](https://github.com/agentscope-ai/QwenPaw/pull/5450) 已合并，重构了自动内存生命周期，增强了 `/compact` 命令并新增 `/system_prompt` 命令。这是今日代码变动量最大的 PR (+702/-602)，显著提升了记忆系统的健壮性。
  - **关闭流程并行化**：[PR #5469](https://github.com/agentscope-ai/QwenPaw/pull/5469) 通过并行化关闭流程，减少了应用退出的等待时间。

- **前端与 UI 改进**：
  - **移动端适配**：多笔移动端适配 PR 提交并推进，包括侧边栏、页头 ([PR #5444](https://github.com/agentscope-ai/QwenPaw/pull/5444))、语音转写设置页 ([PR #5470](https://github.com/agentscope-ai/QwenPaw/pull/5470)) 及技能池页面 ([PR #5464](https://github.com/agentscope-ai/QwenPaw/pull/5464))。
  - **代码清理**：[PR #5440](https://github.com/agentscope-ai/QwenPaw/pull/5440) 清理了 Agentscope 2.0 合并后的冗余代码（-1493 行），修正了 `CancelledError` 处理等问题。

- **功能增强**：
  - **浏览器工具隔离**：[PR #5413](https://github.com/agentscope-ai/QwenPaw/pull/5413) 为浏览器工具增加了会话级页面隔离，防止多会话共享实例时的冲突。
  - **文件上传体验**：[PR #5436](https://github.com/agentscope-ai/QwenPaw/pull/5436) 支持拖拽文件至聊天发送区上传。

## 4. 社区热点
今日讨论最热烈的 Issue 集中在配置持久化与模型兼容性：

1.  **[Issue #5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) - 升级后内置技能被重置**
    - **热度**：12 条评论。
    - **诉求**：用户反馈从 v1.1.9 升级到后续版本时，手动禁用的内置技能（docx, xlsx 等）会被强制重新启用，影响了自动化部署的稳定性。用户强烈希望配置能跨版本保留。

2.  **[Issue #5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) - Agent 创建的定时任务无法触发**
    - **热度**：12 条评论（已关闭）。
    - **诉求**：用户报告通过 Agent 创建的 Cron 任务状态正常但无法触发执行。经排查后被标记为 invalid 或已解决，反映了社区对自动化任务功能的高关注度。

3.  **[Issue #5441](https://github.com/agentscope-ai/QwenPaw/issues/5441) - 内存占用过高**
    - **热度**：3 条评论。
    - **诉求**：用户指出应用启动后空闲内存占用已达 1.4GB，质疑资源消耗过高。这是对轻量化部署的典型诉求。

## 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，按严重程度排列：

- **🔴 严重**：
  - **前端白屏/崩溃**：[Issue #5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) 报告在打开包含大量工具调用历史的会话时前端崩溃。
  - **Agent 身份错误**：[Issue #5456](https://github.com/agentscope-ai/QwenPaw/issues/5456) 指出非默认 Agent 在构建请求时可能错误使用 `default` 身份，导致权限或上下文混乱。

- **🟠 中等**：
  - **配置重置**：如前所述，升级导致技能配置丢失 ([Issue #5262](https://github.com/agentscope-ai/QwenPaw/issues/5262))。
  - **模型兼容性**：
    - DeepSeek 模型在 Thinking 过程中卡死 ([Issue #5328](https://github.com/agentscope-ai/QwenPaw/issues/5328))。
    - StepFun 模型思考内容未正确展示 ([Issue #5416](https://github.com/agentscope-ai/QwenPaw/issues/5416))。
    - 自定义 OpenAI 兼容提供商不支持 Function Calling ([Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345))。

- **🟢 已修复/待验证**：
  - Python 3.13 环境插件安装失败 ([Issue #5166](https://github.com/agentscope-ai/QwenPaw/issues/5166))。
  - Cron 调度器停止工作 ([Issue #5398](https://github.com/agentscope-ai/QwenPaw/issues/5398))。

## 6. 功能请求与路线图信号
- **移动端体验优化**：结合 [Issue #4635](https://github.com/agentscope-ai/QwenPaw/issues/4635)（已关闭/活跃）与今日密集提交的移动端适配 PR，**移动端 WebUI 的全面支持**已成为下一版本的明确路线图。
- **内存优化**：[Issue #5441](https://github.com/agentscope-ai/QwenPaw/issues/5441) 对内存占用的质疑，配合今日合并的内存管理重构 PR #5450，预示着项目将重点关注**性能优化与资源占用**。
- **LaTeX 支持**：[Issue #5453](https://github.com/agentscope-ai/QwenPaw/issues/5453) 请求支持 KaTeX 渲染，反映了科研/技术用户群体对富文本展示的需求。

## 7. 用户反馈摘要
- **痛点**：
  - **升级体验差**：多次提及升级导致配置丢失或重置，破坏了用户信任。
  - **资源消耗**：启动内存占用 1.4GB 对个人开发者或小服务器用户不够友好。
  - **模型适配**：对非标准 OpenAI 接口模型的适配仍存在较多边界情况（如 GLM, StepFun, 自定义提供商）。

- **正面反馈**：
  - 对内存管理重构和 `/compact` 命令的增强表示期待，认为这能解决长期运行后的上下文臃肿问题。
  - 对前端移动端适配响应速度表示满意。

## 8. 待处理积压
以下重要 Issue 长期未得到有效解决或响应，建议维护者关注：

- **[Issue #5262](https://github.com/agentscope-ai/QwenPaw/issues/5262)**：升级导致技能配置重置的问题持续存在，影响生产环境稳定性。
- **[Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345)**：自定义 OpenAI 兼容提供商不支持 Function Calling，限制了模型生态的扩展。
- **[Issue #5401](https://github.com/agentscope-ai/QwenPaw/issues/5401)**：大量工具调用历史导致前端崩溃，属于典型的长对话场景下的严重 Bug。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-06-24)

**数据来源周期**：过去 24 小时
**项目地址**：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. 今日速览
EasyClaw 项目今日整体呈现“静默开发、高频发布”的态势。在过去 24 小时内，社区互动端（Issues/PRs）无新增流量，但核心团队保持着极高的开发产出效率，连续发布了 v1.8.42 和 v1.8.43 两个版本。这表明项目当前处于功能快速迭代与精细化打磨阶段，重心明显向客服系统优化与营销达人业务流倾斜。整体项目健康度良好，开发活跃度高，暂无明显阻塞或社区压力。

### 2. 版本发布
今日项目连续推送了两个新版本，重点聚焦于客服渠道体验优化与合规性调整。

**[v1.8.43: RivonClaw v1.8.43](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.43)**
*   **更新亮点**：
    *   **可视化增强**：在客服渠道视图中优化了微信激活和运行状态的展示，提升了状态透明度。
    *   **业务流扩展**：新增支持达人工作项，并统一了达人 UI 与店铺 Creator Threads 的风格。
    *   **容错机制**：在达人提案中增加了创作者身份回退展示，增强了异常场景下的用户体验。
*   **影响评估**：属于功能增强型更新，建议关注达人模块 UI 变更带来的交互体验变化。

**[v1.8.42: RivonClaw v1.8.42](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.42)**
*   **更新亮点**：
    *   **逻辑优化**：优化了客服实时升级处理逻辑及价值图表的文案表述。
    *   **合规修正**：展示了微信渠道健康状态，并明确**移除了未授权的 vendor patch**。此操作可能涉及合规性审查或依赖库调整。
    *   **性能提升**：在调度过程中引入了客服会话模型的懒加载机制，有望降低系统资源开销。
*   **迁移注意**：由于移除了未授权的 vendor patch，升级前请务必确认该改动是否影响本地现有插件的兼容性。

### 3. 项目进展
今日无公开合并或关闭的 Pull Requests。项目的主要进展集中体现在上述两个版本的代码提交与发布上。从版本日志推断，项目在“客服实时性”和“微信渠道合规性”方面取得了实质性突破，整体代码库向前迈进了一小步，主要解决了依赖合规问题并拓展了营销侧的功能边界。

### 4. 社区热点
今日无活跃的 Issues 或 Pull Requests 讨论记录。社区端今日处于静默期，暂无明显热点话题。

### 5. Bug 与稳定性
过去 24 小时内未收到用户报告的新 Bug 或崩溃反馈。
*   **潜在风险提示**：v1.8.42 版本中提到的“移除未授权 vendor patch”虽未引发公开 Issue，但属于破坏性变更的一种，建议维护者密切关注后续版本的兼容性反馈。

### 6. 功能请求与路线图信号
今日无新增功能请求（Feature Requests）。
*   **路线图推断**：结合 v1.8.43 的更新内容，项目明显正在加强 **"Affiliate（达人/联盟营销）"** 模块的建设。支持 creator thread work items 和 UI 统一化，预示着 EasyClaw 正致力于打造一个统一的创作者与客服协同工作台，这极可能是下一阶段的核心发展方向。

### 7. 用户反馈摘要
今日暂无公开的用户反馈记录。

### 8. 待处理积压
今日无长期未响应的 Issue 或 PR 更新。鉴于今日无新增积压，建议维护者利用此窗口期继续推进达人模块的后续开发，并关注 v1.8.42 合规性更新后的实际运行情况。

---

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*