# OpenClaw 生态日报 2026-05-20

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-20 03:51 UTC

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

# OpenClaw 项目动态日报 (2026-05-20)

## 1. 今日速览
OpenClaw 项目今日保持极高的社区活跃度，过去 24 小时内 Issues 与 PRs 更新量均达到 500 条，显示出项目正处于快速迭代期。然而，Issues 关闭率（62/438 ≈ 14%）与 PR 合并率（63/437 ≈ 14%）相对较低，表明社区反馈涌入速度超过了维护者的处理能力，存在一定的积压风险。今日发布了 `v2026.5.19-beta.2` 和 `alpha.1` 两个版本，重点进行了依赖升级与架构澄清。社区讨论焦点集中在跨平台客户端支持（Linux/Windows）、API 密钥安全性以及会话状态管理的稳定性上。

## 2. 版本发布
今日发布两个新版本，内容高度同步：

*   **v2026.5.19-beta.2**
*   **v2026.5.19-alpha.1**

**主要更新内容：**
*   **架构优化:** 明确了 Agent 修复策略，应默认采用清晰的边界重构、精简内部逻辑，并明确插件 SDK/API 的弃用路径。
*   **依赖升级:** 
    *   `@openclaw/proxyline` 升级至 0.3.3。
    *   Pi 包升级至 0.75.1。
*   **破坏性变更:** 提升了最低支持的 Node.js 版本要求（文本提示涉及 Node.js 22 line），建议运维人员升级部署环境。

## 3. 项目进展
今日共有 63 个 PR 被合并或关闭，主要进展如下：

*   **移动端体验重构 (PR #84414):** 正在推进 Android 客户端的全面重写，采用全新的黑白 UI 风格，优化了应用外壳、聊天及语音界面。这是今日规模最大的功能性 PR (Size: XL)。
*   **安全性与修复:**
    *   **会话恢复安全 (PR #82906):** 修复了 Codex CLI 会话恢复未经过高影响操作审批门控的问题，增强了本地会话的安全性。
    *   **系统稳定性 (PR #84151):** 修复了 Systemd 环境下更新移交助手进程被误杀的问题，提升了服务管理的可靠性。
*   **文档与规范:** 
    *   合并了关于 iMessage `cliPath` 包装器必须流式传输 JSON-RPC stdio 的警告文档 (PR #84347/#84420)，防止用户配置错误导致的连接中断。

## 4. 社区热点
今日讨论最活跃的 Issues 反映了用户对跨平台支持、安全性和成本控制的迫切需求：

*   **跨平台支持呼声 (#75):** 获得最高关注度（105 评论，75 👍）。用户强烈请求推出 Linux 和 Windows 原生客户端，目前仅有 macOS/Android/iOS 支持。
*   **安全扫描钩子 (#18677):** 建议增加 `skill:before_install` 钩子以便在安装技能前进行病毒扫描，反映了对第三方插件生态安全性的担忧。
*   **API 密钥保护 (#11829):** 讨论 API 密钥泄露给 LLM 或日志的风险，建议实施分层保护机制。
*   **成本控制 (#42475):** 企业用户希望在网关层面强制执行单 Agent 预算限制，防止费用失控。

## 5. Bug 与稳定性
今日报告了多个严重影响用户体验的 Bug，部分已有修复 PR 在跟进：

*   **严重:**
    *   **内存溢出导致崩溃 (#55334):** `sessions.json` 无限增长导致网关 OOM，目前无修复 PR，积压中。
    *   **Windows UI 回归 (#67035):** 升级后聊天界面输入文本被吞没，流式回复不可见。标签显示 `needs-live-repro`，等待复现。
*   **高优先级:**
    *   **配置迁移风险 (#84038):** `doctor --fix` 命令错误迁移 OpenAI Codex 配置，导致运行时错误和 Token 翻倍。
    *   **Telegram 消息丢失 (#80520):** 网关收到消息但未调用发送 API，导致消息静默丢失。
    *   **嵌入式会话接管错误 (#83615):** 升级后嵌入式 Agent 频繁报错 `EmbeddedAttemptSessionTakeoverError`，导致回复截断。

## 6. 功能请求与路线图信号
*   **私有网络访问控制 (#39604):** 请求为 `web_fetch` 工具增加访问私有网络地址（如 localhost）的配置开关。虽标记为安全风险，但在内网部署场景下需求强烈。
*   **流式超时配置 (#68596):** 针对长思考模型（如 DeepSeek-R1）提出可配置的流式看门狗超时阈值，避免误判超时。
*   **敏感数据脱敏 (#64046):** 请求对日志和 UI 中的敏感信息（API Key/Token）进行原生脱敏支持。

## 7. 用户反馈摘要
*   **痛点：** 
    *   **升级稳定性：** 多个 Issue 提到从旧版本升级到 2026.5.x 版本后出现严重问题（消息丢失、嵌入式 Agent 崩溃），用户对升级持谨慎态度。
    *   **资源消耗：** 长期运行后内存占用过高是普遍反馈，与会话状态管理机制有关。
    *   **Token 消耗：** 部分用户反馈 Token 消耗异常增加，可能与上下文注入策略或配置迁移 Bug 有关。
*   **场景：** 用户大量使用 OpenClaw 进行自动化工作流、多渠道消息聚合以及长对话任务，对上下文管理和消息投递的可靠性要求极高。

## 8. 待处理积压
以下重要 Issue 长期未获解决或处于等待状态，建议维护者优先关注：

*   **Linux/Windows 客户端 (#75):** 尽管热度最高，但标签包含 `clawsweeper:needs-maintainer-review` 和 `needs-product-decision`，尚未有明确的路线图响应。
*   **OOM 崩溃 (#55334):** 严重影响生产环境稳定性，标记为 P1 但尚无修复 PR。
*   **Mattermost 命令失效 (#68113):** 回归问题导致所有斜杠命令返回 503，影响特定渠道用户。

---

## 横向生态对比

# 开源 AI 智能体生态横向对比分析报告 (2026-05-20)

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于从“单一对话工具”向“多智能体协作系统”演进的关键期。头部项目（OpenClaw, Zeroclaw, IronClaw）正密集重构底层架构以支持复杂的子智能体调度与长期记忆，而轻量级项目则在边缘计算与本地推理寻求突破。生态整体呈现出“功能爆发与稳定性失衡”的特征，Windows 平台兼容性、上下文内存管理（OOM）及配置迁移体验成为普遍痛点。插件化与技能市场正成为新的标配，标志着生态正从核心功能竞争转向扩展性与开发者生态的竞争。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | Release 情况 | 健康度评估 | 核心特征 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 | ~500 | v2026.5.19-beta/alpha | ⚠️ 积压严重 | 社区热度极高，但维护承压，跨平台需求强烈。 |
| **IronClaw** | High | ~50 | 无 (滞后) | 🚀 重构期 | "Reborn"架构密集开发，子智能体与扩展系统领先。 |
| **CoPaw** | ~43 | ~37 | **v1.1.8** | ✅ 发布期 | 插件生态与趣味性功能上线，但新版本伴随崩溃Bug。 |
| **Zeroclaw** | High | ~45 | 无 (待发) | 🏗️ 冲刺期 | v0.8.0 前夕，大规模重构，Multi-Agent核心即将落地。 |
| **NanoBot** | ~51 | ~24 | 无 | 🟢 优秀 | 学术背景强，迭代高效，多模态与性能优化进展快。 |
| **LobsterAI** | Medium | ~31 | 无 | ⚠️ 竞争冲突 | 多Agent架构落地快，但存在严重的端口冲突问题。 |
| **Hermes Agent**| ~50 | Medium | 无 | 🔴 危机 | Windows 平台全面崩溃，Issue 积压严重，用户体验受损。 |
| **PicoClaw** | Medium | ~10 | Nightly | 🟢 良好 | 边缘计算与本地推理进展顺利，修复响应快。 |
| **NanoClaw** | Medium | ~23 | 无 | 🟡 积压 | WhatsApp 集成修复迅速，但 PR 审查积压较多。 |
| **NullClaw** | Low | ~10 | 无 | 🟢 稳健 | Zig 原生栈重构，底层架构优化，移动端构建受阻。 |
| **Moltis** | Low | Low | 无 | 🟢 稳定 | Docker 稳定性修复，迭代稳健。 |
| **ZeptoClaw** | None | 2 | 无 | ⚪ 维护 | 仅依赖更新，低活跃度。 |
| **TinyClaw** | None | 0 | 无 | ⚪ 静默 | 无活动。 |
| **EasyClaw** | None | 0 | 无 | ⚪ 静默 | 无活动。 |

## 3. OpenClaw 在生态中的定位
**定位：生态流量的“压舱石”与需求集散地。**

*   **规模对比**：OpenClaw 的 Issues/PRs 更新量（~500条）远超其他项目一个数量级，是社区关注度最高的核心参照项目。
*   **技术路线差异**：不同于 IronClaw 的强类型/沙箱路线或 NanoBot 的快速实验性路线，OpenClaw 更侧重于**全平台客户端覆盖**（Linux/Windows 原生客户端需求极高）与**网关层面的稳定性**。其架构正试图解决大规模用户并发下的会话状态管理问题，而竞品多关注单点功能的实现。
*   **优势与挑战**：优势在于庞大的用户反馈数据和多渠道适配经验；挑战在于维护效率严重不足（14%解决率），版本迭代质量波动（Windows UI 回归、OOM），面临着“大而不强”的风险，亟需解决积压问题以稳固核心地位。

## 4. 共同关注的技术方向

1.  **多智能体编排与通信**
    *   **涉及项目**：Zeroclaw (Multi-Agent Runtime), LobsterAI (Agent Router/Worker), IronClaw (Subagent Design), OpenClaw (Embedded Session), Hermes Agent (Delegate Task).
    *   **具体诉求**：生态共识正在从“单一Agent工具调用”转向“主-子Agent协作”。核心诉求包括子任务状态的实时回传（Hermes）、子代理的可视化监控以及复杂的会话接管与恢复机制。

2.  **本地化与边缘推理**
    *   **涉及项目**：PicoClaw (Intel OpenVINO), NullClaw (Zig 原生/移动端), NanoBot (Ollama/vLLM 支持).
    *   **具体诉求**：降低对云端 API 的依赖，支持消费级硬件（NPU/GPU）运行，以及解决本地模型上下文压缩和流式超时问题。

3.  **上下文与记忆管理**
    *   **涉及项目**：OpenClaw (OOM 崩溃), Zeroclaw (Dream Mode 记忆整合), NanoBot (Mnemon 持久化), NanoClaw (上下文压缩死循环).
    *   **具体诉求**：随着对话变长，`sessions.json` 无限增长导致的内存溢出（OOM）成为普遍顽疾。社区迫切寻求跨会话记忆、后台压缩及分层存储方案。

## 5. 差异化定位分析

*   **OpenClaw & Hermes Agent**：**全渠道接入层**。侧重 IM 集成（Telegram, WhatsApp, iMessage），解决多端消息聚合与网关稳定性。OpenClaw 架构更重，Hermes 更轻量但近期稳定性差。
*   **Zeroclaw & IronClaw**：**企业级/安全优先架构**。强调沙箱隔离、权限控制与严格的生命周期管理。适合作为企业级 Agent 底座，开发门槛较高但健壮性强。
*   **NanoBot & PicoClaw**：**极客/开发者友好型**。快速跟进前沿模型（DeepSeek, StepFun, OpenVINO），注重 WebUI 体验与冷启动性能，适合个人开发者定制与实验。
*   **CoPaw**：**消费级/C端产品化**。率先引入桌面宠物、插件市场等 C 端特性，注重 UI 交互与趣味性，但在底层稳定性上需补课。

## 6. 社区热度与成熟度

*   **快速迭代期**：
    *   **IronClaw**：日均 50 PR 更新，正处于 "Reborn" 架构落地的冲刺阶段，代码变动剧烈，适合贡献核心代码的开发者。
    *   **Zeroclaw**：v0.8.0 发布前夕，核心 Multi-Agent 架构待合并，社区讨论聚焦于新特性定义。
    *   **CoPaw**：刚发布 v1.1.8，引入插件机制，用户反馈活跃，处于功能验证期。

*   **质量巩固期**：
    *   **NanoBot**：合并率高，多模态与性能优化并行，社区健康度极佳。
    *   **PicoClaw**：解决特定 Bug 效率高，专注于本地化场景的完善。
    *   **Moltis**：聚焦底层容器与连接稳定性，迭代稳健但声量较小。

*   **维护风险期**：
    *   **Hermes Agent**：Windows 致命 Bug 未修复，Issue 积压严重，需警惕使用风险。
    *   **OpenClaw**：虽热度最高，但低解决率提示维护资源告急，需社区协助分流。

## 7. 值得关注的趋势信号

1.  **Windows 平台成为“重灾区”**：
    *   从 Hermes Agent 的全面崩溃、OpenClaw 的 UI 回归到 NullClaw 的路径解析错误，显示多数开源项目在 Windows 端的测试覆盖率显著低于 macOS/Linux。**建议开发者在选型时优先考察项目的 Windows 兼容性测试报告。**

2.  **“上下文危机”逼近**：
    *   随着 Agent 记忆长度增加，OOM 问题已从边缘问题变为核心阻断问题。**简单的 JSON 存储已无法满足需求，基于向量数据库或分层压缩的记忆架构（如 Zeroclaw 的 Dream Mode）将成为下一阶段的技术壁垒。**

3.  **安全边界重新定义**：
    *   OpenClaw 的 API Key 泄露风险、Zeroclaw 的脚本拦截误杀、CoPaw 的插件 RCE 风险表明，**Agent 的权限隔离与沙箱机制正成为核心议题**。企业级用户需关注 NullClaw 与 Zeroclaw 的隔离方案，而非简单的工具调用封装。

4.  **插件化成为标配**：
    *   CoPaw 的宠物插件、OpenClaw 的 Skills 讨论、IronClaw 的 Extension v2，标志着 **Agent 正从“全能单体”向“内核+插件”的操作系统模式演进**。未来竞争焦点将是插件标准的统一与分发市场的安全性。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-20)

## 1. 今日速览
NanoBot 项目今日保持极高的维护活跃度，社区互动频繁。过去 24 小时内，项目成功关闭了 27 个 Issue 并合并了 24 个 PR，显示出维护团队强大的问题处理能力和高效的迭代节奏。重点进展集中在**多模态能力扩展**（音频/视频支持）、**性能优化**（冷启动时间大幅缩短）以及**WebUI 体验重构**。此外，社区对 Ollama 本地模型支持和 WebUI 稳定性表现出强烈关注，整体项目健康度优秀，正处于功能快速丰富与架构优化的关键阶段。

## 2. 版本发布
无新版本发布。尽管 Issue #3907 提及用户已在使用 `0.2.0` 版本，但官方 Releases 栏目暂未更新，推测当前主要变更仍处于主分支集成与测试阶段。

## 3. 项目进展
今日共有 24 个 PR 被合并，显著推进了以下领域的发展：

*   **多模态与生成能力增强**：
    *   PR #2908 合并，成功将多模态支持从单一图像扩展至音视频统一处理，补齐了 Agent 感知能力的关键拼图。
    *   PR #3910 与 #3914 合并，重构了图像生成模块并新增 StepFun (阶跃星辰) Provider，提升了模型生成的扩展性。
*   **架构与性能优化**：
    *   PR #3918 提出并将网关冷启动时间从 ~4.6s 优化至 ~480ms（优化幅度达 90%），极大改善了开发与部署体验。
    *   PR #3854 合并，引入 Peer 发现机制，为多实例协同（如 HF Spaces 部署）奠定了基础。
*   **WebUI 重构**：
    *   PR #3906 合并，将设置页面升级为应用级控制中心，优化了侧边栏与搜索体验。
*   **生态集成**：
    *   PR #3916 合并，新增 Skywork 作为一级 Provider 支持。

## 4. 社区热点
今日讨论最热烈的议题集中在模型兼容性与界面稳定性：

*   **[Issue #193](https://github.com/HKUDS/nanobot/issues/193) [CLOSED] Ollama api support?**
    *   **热度**：14 条评论。
    *   **分析**：社区对本地部署模型的需求极高。虽然该 Issue 已关闭，但结合今日合并的 PR #3912（文档更新：Local provider setup）来看，项目方正通过完善文档引导用户使用 Ollama/vLLM，响应了社区的核心诉求。
*   **[Issue #3790](https://github.com/HKUDS/nanobot/issues/3790) [OPEN] WebUI会话-打印内容显示错乱**
    *   **热度**：14 条评论。
    *   **分析**：用户反馈 5.13 源码版本存在 WebUI 渲染回归问题，需刷新页面恢复。这反映出高频的前端变更带来的稳定性风险，需引起开发侧重视。
*   **[Issue #2463](https://github.com/HKUDS/nanobot/issues/2463) [CLOSED] Architectural issue: nanobot does not preserve the exact prompt prefix**
    *   **热度**：11 条评论。
    *   **分析**：关于历史记录持久化与 Prompt 前缀一致性的深度技术讨论，反映了高级用户对 Agent 记忆管理机制精确度的严苛要求。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在 WebUI 渲染与特定模型兼容性：

*   **高危 (Functional)**：
    *   **[Issue #3884](https://github.com/HKUDS/nanobot/issues/3884)**：WebUI 会话在首次响应后立即关闭，严重影响 Web 端可用性。目前处于 Open 状态，尚未有明确修复 PR 关联。
*   **中危 ( Rendering/Logic )**：
    *   **[Issue #3790](https://github.com/HKUDS/nanobot/issues/3790)**：WebUI 打印内容显示错乱。
    *   **[Issue #3907](https://github.com/HKUDS/nanobot/issues/3907) [CLOSED]**：DeepSeek-v4-pro 推理模式下页面逐词换行渲染问题。该 Issue 已关闭，可能已通过相关渲染逻辑修复。
*   **修复进展**：
    *   **[PR #3919](https://github.com/HKUDS/nanobot/pull/3919) [CLOSED]**：修复了 Shell 工具中 `restrictToWorkspace` 配置失效导致的目录限制绕过问题，已合并。

## 6. 功能请求与路线图信号
*   **持久化记忆**：[Issue #3888](https://github.com/HKUDS/nanobot/issues/3888) 提出了集成 Mnemon 实现跨会话持久化记忆的方案。鉴于今日合并的 PR #3854（Peer roster）和多智能体 PR #3913，项目正向“长期记忆”和“多智能体协作”方向演进，此类功能极可能被纳入主路线图。
*   **用量监控**：[PR #3921](https://github.com/HKUDS/nanobot/pull/3921) 提议新增 JSONL 日志记录与 `/insights` 命令用于 Token 成本追踪，响应了社区对成本控制的需求，目前处于 Open 状态，预计将很快合并。

## 7. 用户反馈摘要
*   **痛点**：WebUI 的稳定性是目前最大的痛点（刷新崩溃、会话断开）；此外，Docker 构建慢、SSH 连接冲突等部署层问题也偶有反馈 ([Issue #87](https://github.com/HKUDS/nanobot/issues/87), [Issue #1826](https://github.com/HKUDS/nanobot/issues/1826))。
*   **场景**：用户正尝试将 NanoBot 用于复杂的自动化场景，如 Cron 任务执行 ([Issue #2905](https://github.com/HKUDS/nanobot/issues/2905)) 和 X 平台监控 ([Issue #3901](https://github.com/HKUDS/nanobot/issues/3901))，但在长时运行和循环调用中遇到瓶颈。
*   **满意度**：用户对项目潜力评价很高 ("incredible after some maturation")，但对当前版本的“过度提问”和“静默失败”等 Agent 行为逻辑表示不满。

## 8. 待处理积压
*   **关键 Bug 待修**：[Issue #3884](https://github.com/HKUDS/nanobot/issues/3884)（WebUI 会话断开）目前仅有 2 条评论且未关闭，影响核心交互体验，建议维护者优先排查。
*   **重要 PR 待审**：
    *   [PR #3918](https://github.com/HKUDS/nanobot/pull/3918)（冷启动优化）：对用户体验提升巨大，建议优先 Review。
    *   [PR #3684](https://github.com/HKUDS/nanobot/pull/3684)（微信消息丢失修复）：解决了静默丢消息的严重问题，急需合并。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-20)

## 1. 今日速览
Zeroclaw 项目今日呈现高度活跃状态，核心开发重心明显向 **v0.8.0 大版本迭代** 倾斜。过去 24 小时内 PR 更新量达 45 条，其中绝大多数（40 条）处于待合并状态，显示出社区正在进行大规模的代码重构与功能集成。核心 PR #6398（Multi-Agent Runtime）已寻求最终批准，预示着 v0.8.0 Beta 版本即将发布。尽管没有新版本发布，但 Issues 中出现的严重数据删除 Bug（#6801）迅速得到了社区响应，体现了项目较快的反馈周期。

## 2. 版本发布
**无新版本发布。**
但需重点关注 **PR #6398**，该 PR 标记为 `v0.8.0: Multi-Agent Runtime and Schema V3`，目前正处于 "SEEKING APPROVAL" 阶段，即将作为 Beta 版本的基础。这表明项目正处于重大版本发布的最后冲刺阶段。

## 3. 项目进展
今日共有 5 个 PR 被合并或关闭，主要集中在稳定性修复与 v0.8.0 前置准备：
*   **v0.8.0 架构落地逼近**：核心架构 PR [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) 持续更新，引入多智能体运行时和 Schema V3，这是项目迈向 v0.8.0 的里程碑式进展。
*   **大规模代码重构**：贡献者 @yijunyu 发起了近 10 个 PR（如 [#6791](https://github.com/zeroclaw-labs/zeroclaw/pull/6791), [#6800](https://github.com/zeroclaw-labs/zeroclaw/pull/6800)），将 Slack、WhatsApp、Discord 等 16 个渠道的手写白名单逻辑统一迁移至 `AllowlistAspect`。此举旨在消除技术债务，属于 ICSE 2027 M1 评估的一部分，显著提升了代码标准化程度。
*   **关键修复合并**：
    *   部署脚本修复 PR [#6803](https://github.com/zeroclaw-labs/zeroclaw/pull/6803) 已关闭，修正了 v0.8.0 的服务模板。
    *   Web 端类型定义修复 PR [#6802](https://github.com/zeroclaw-labs/zeroclaw/pull/6802) 已关闭，解决了 `CronSchedule` 缺失导致的编译阻断问题。

## 4. 社区热点
*   **[Feature]: Dream Mode ([#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849))**
    *   **热度**：评论数 10 条，标签为 `risk: high` 与 `priority:p1`。
    *   **分析**：该 Issue 提议在空闲时引入“梦境模式”进行记忆整合与反思学习，标志着项目正在探索 Agent 的自我进化能力。作为 P1 级别的高风险特性，社区正积极讨论其实现路径与风险，反映了用户对 AI 长期记忆与自主性的强烈需求。

## 5. Bug 与稳定性
今日报告了两个较为严重的基础功能 Bug，需重点关注：
*   **[S2] 数据误删风险 ([#6801](https://github.com/zeroclaw-labs/zeroclaw/issues/6801))**
    *   **问题**：在 `integration/v0.8.0` 分支中，`SqliteMemory::purge_namespace` 方法错误地按 `category` 列删除数据，而非按 `namespace` 删除，可能导致严重的记忆数据误删。
    *   **状态**：**已有修复 PR [#6777](https://github.com/zeroclaw-labs/zeroclaw/pull/6777)**，响应速度极快，建议优先 Review 并合并。
*   **[S1] 工作流阻断 ([#6771](https://github.com/zeroclaw-labs/zeroclaw/issues/6771))**
    *   **问题**：安全策略错误拦截了多行 Heredocs，导致 ZeroClaw 无法使用自身的 Skill 提交 PR，属于“自食其果”式的策略过严问题。
    *   **状态**：目前尚无对应的修复 PR，需维护者介入调整安全沙箱策略。
*   **[Build] 编译阻断**：Web 端缺少 `CronSchedule` 类型定义导致构建失败，已通过 PR [#6802](https://github.com/zeroclaw-labs/zeroclaw/pull/6802) 修复。

## 6. 功能请求与路线图信号
*   **隔离执行模式 ([#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293))**：提出通过 Unix Socket 伴生守护进程实现“物理隔离”执行模式。该 RFC 目前处于 `status:blocked` 状态，对于高安全场景（如金融、企业内网）意义重大，需等待后续解禁。
*   **Skills 体验优化 ([#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253))**：作为 v0.7.6 的主题，社区正在征集关于 `zeroclaw skills` 的 UX 改进意见，预示着近期版本将重点打磨插件/技能系统的易用性。

## 7. 用户反馈摘要
*   **Memory 模块受关注**：从 #6801 的快速发现与修复可以看出，Memory 模块作为核心组件，用户对其数据一致性的敏感度极高。
*   **安全策略与易用性冲突**：#6771 揭示了安全策略过于严格导致正常开发工作流（提 PR）受阻的问题，用户希望安全沙箱能更智能地识别脚本生成内容。
*   **企业级需求明显**：#1458（自定义 CA 证书）和 #6293（隔离执行）均体现了用户在私有化部署、企业级安全场景下的强需求。

## 8. 待处理积压
*   **集成阻塞风险**：PR [#6639](https://github.com/zeroclaw-labs/zeroclaw/pull/6639) 修复了 Homebrew 安装路径解析错误，该 Bug 影响安装体验，建议尽快合并。
*   **WeChat 渠道问题**：PR [#6238](https://github.com/zeroclaw-labs/zeroclaw/pull/6238) 修复了微信渠道重启需重复扫码的问题，对国内用户体验至关重要，需关注其合并进度。
*   **高优先级 RFC 受阻**：Issue [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) 仍处于 `blocked` 状态，建议维护者更新阻塞原因或排期。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-20)

## 1. 今日速览
过去 24 小时，Hermes Agent 项目呈现**高活跃度但积压压力增大**的态势。社区反馈极其踊跃，新增活跃 Issue 42 个，仅有 8 个 Issue 被关闭，修复速度暂时跟不上报错速度。最严峻的问题是 **Windows 平台 v0.14.0 版本全面崩溃**（#28920），导致所有子进程工具无法使用，但目前社区已提交修复 PR (#29059)。此外，关于安装包体积臃肿和子智能体通信机制的讨论热度较高，显示用户对轻量化与多智能体协作能力的强烈需求。

## 2. 版本发布
- **无新版本发布**。
- 注：当前最新版本仍为 v0.14.0 (2026-05-16)，该版本引入了 Windows 平台的严重回归问题，建议 Windows 用户关注 PR #29059 的合并情况。

## 3. 项目进展
尽管 Release 暂缺，今日仍有多个关键修复与功能推进：

- **[Bug Fix] Windows 平台崩溃修复 (PR #29059)**
  - 针对 Issue #28920 提出修复方案。解决了 v0.14.0 引入的 `creationflags` 参数重复传递问题，该问题导致 Windows 端所有涉及子进程的工具（terminal, file 等）彻底瘫痪。这是目前优先级最高的修复补丁。
  - 链接: [NousResearch/hermes-agent PR #29059](https://github.com/NousResearch/hermes-agent/pull/29059)

- **[Bug Fix] NameError 修复 (Issue #27370 CLOSED)**
  - 修复了 `conversation_loop.py` 中速率限制回退路径的 `NameError`，该错误导致 agent 在触发 fallback 时崩溃。
  - 链接: [NousResearch/hermes-agent Issue #27370](https://github.com/NousResearch/hermes-agent/issues/27370)

- **[Improvement] Gemini 429 错误处理增强 (PR #29071)**
  - 优化了对 Google Gemini 模型 HTTP 429 错误的处理，增加了从响应体解析 `retry_after` 的逻辑，提升了高并发下的稳定性。
  - 链接: [NousResearch/hermes-agent PR #29071](https://github.com/NousResearch/hermes-agent/pull/29071)

- **[Feature] 飞书 SDK 迁移 (PR #25705)**
  - 正在进行将飞书网关适配器从自研管道迁移至官方 `lark_oapi.channel.FeishuChannel` SDK 的工作，旨在提升连接稳定性。
  - 链接: [NousResearch/hermes-agent PR #25705](https://github.com/NousResearch/hermes-agent/pull/25705)

## 4. 社区热点
今日讨论最热烈的议题集中在用户体验与平台兼容性上：

- **[Issue #19986] 精简默认安装包** 👍: 3 | 评论: 6
  - 用户指出 Hermes 当前打包了大量非核心 Skills，导致安装体积过大且更新缓慢。建议将非核心 Skills 设为可选依赖。
  - 链接: [NousResearch/hermes-agent Issue #19986](https://github.com/NousResearch/hermes-agent/issues/19986)

- **[Issue #27370] Rate-limit 崩溃** (已关闭) 评论: 7
  - 引发了大量关于错误处理机制和代码质量的热议，用户报告在 v0.14.0 版本中频繁遇到此 NameError。
  - 链接: [NousResearch/hermes-agent Issue #27370](https://github.com/NousResearch/hermes-agent/issues/27370)

- **[Issue #29063] 子智能体实时通信需求** 评论: 1
  - 开发者提出当前 `delegate_task` 机制造成主智能体 "黑盒" 等待，缺乏对子智能体执行状态的实时监控和干预能力。
  - 链接: [NousResearch/hermes-agent Issue #29063](https://github.com/NousResearch/hermes-agent/issues/29063)

## 5. Bug 与稳定性
今日报告了多个高优先级 Bug，Windows 平台受损最严重：

- **[P1] Windows 平台全面瘫痪 (Issue #28920)**
  - 严重程度：致命。所有调用子进程的工具均报错 `multiple values for keyword argument 'creationflags'`。
  - 状态：**已有修复 PR #29059**，等待合并。
  - 链接: [NousResearch/hermes-agent Issue #28920](https://github.com/NousResearch/hermes-agent/issues/28920)

- **[P1] Telegram 推理泄露 (Issue #7233)**
  - 严重程度：高。更新或会话恢复后，Agent 内部的 `Reasoning` 思维链（CoT）直接泄露到用户聊天界面。
  - 状态：待修复。
  - 链接: [NousResearch/hermes-agent Issue #7233](https://github.com/NousResearch/hermes-agent/issues/7233)

- **[P1] Ollama 工具调用失效 (Issue #8965)**
  - 使用 Ollama 云模型时，Hermes 将函数调用输出为原始 XML 文本而非执行工具。
  - 链接: [NousResearch/hermes-agent Issue #8965](https://github.com/NousResearch/hermes-agent/issues/8965)

- **[P2] Windows 路径解析错误 (Issue #28989)**
  - `extract_media()` 正则表达式不支持 Windows 盘符路径（如 `C:\`），导致图片发送失败。
  - 链接: [NousResearch/hermes-agent Issue #28989](https://github.com/NousResearch/hermes-agent/issues/28989)

## 6. 功能请求与路线图信号
社区正推动项目向更健壮的多智能体系统和更优的用户体验发展：

- **主/子智能体双向通信 (Issue #29060, #29063)**
  - 多个 Issue 提出类似的诉求：打破 `delegate_task` 的同步阻塞，支持流式状态回传。这可能是下一阶段 Agent 架构演进的重点。
  - 链接: [NousResearch/hermes-agent Issue #29060](https://github.com/NousResearch/hermes-agent/issues/29060)

- **反幻觉机制 (PR #29058)**
  - 提交了 "Belief Pipeline" PR，旨在引入一套反幻觉机制。虽然为实验性功能，但显示社区对 Agent 可靠性提升的关注。
  - 链接: [NousResearch/hermes-agent PR #29058](https://github.com/NousResearch/hermes-agent/pull/29058)

- **MemOS 插件支持 (Issue #29061)**
  - 用户呼吁官方支持 MemOS 记忆插件，目前手动安装易导致系统更新冲突。
  - 链接: [NousResearch/hermes-agent Issue #29061](https://github.com/NousResearch/hermes-agent/issues/29061)

## 7. 用户反馈摘要
- **安装体验差**：用户普遍抱怨默认安装包含过多 "开箱即用" 但实际不用的 Skills，导致项目臃肿，希望回归模块化安装（#19986）。
- **远程部署困难**：OAuth 流程（如 Gemini CLI）硬编码 `127.0.0.1`，导致在远程服务器上无法完成认证（#28971）。
- **平台差异大**：Windows 用户近期体验严重下滑，除了上述崩溃问题，还有路径解析、Docker 权限等多种兼容性问题。

## 8. 待处理积压
- **Issue #7233 (Telegram CoT 泄露)**：自 4 月 10 日创建以来，此隐私安全问题一直未得到有效解决，今日再次活跃，建议维护者优先处理。
- **Issue #19986 (安装包精简)**：作为高赞 (+3) 且活跃的 Feature Request，尚未有官方 Maintainer 给出明确排期或回应。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-20)

## 1. 今日速览
PicoClaw 项目今日保持了极高的开发活跃度，Issues 关闭率高达 62.5%，PR 合并与关闭数量达到 10 个，显示出维护团队强劲的迭代动力。项目迎来了重要的功能里程碑：流式响应支持和 Intel OpenVINO 本地推理集成已确认合入，极大提升了实时交互体验和本地部署能力。与此同时，社区对 ChatGPT 后端集成的稳定性（Codex OAuth）表现出较高关注度，且仍有关于进程启动稳定性的高优 Bug 待最终解决。整体而言，项目正处于功能扩展与架构重构并行的快速上升期。

## 2. 版本发布
- **Nightly Build: v0.2.8-nightly.20260520.639b3270**
  - **类型**: 自动化构建版本
  - **说明**: 此版本包含最新的代码变更，可能存在不稳定性，建议测试环境使用。
  - **变更范围**: 涵盖了从 v0.2.8 到 main 分支的所有更新，包含了今日合并的流式传输和架构重构代码。
  - **注意**: 鉴于包含了大规模重构（PR #2896），生产环境升级需谨慎。

## 3. 项目进展
今日共有 **10 个 PR 被合并或关闭**，显著推进了以下核心功能：

- **核心功能：流式响应支持** (PR [#2892](https://github.com/sipeed/picoclaw/pull/2892))
  - 实现了配置驱动的流式传输功能，需模型条目和通道双重显式开启，完善了 Agent 的实时交互体验。
- **生态扩展：Intel OpenVINO 支持** (PR [#2703](https://github.com/sipeed/picoclaw/pull/2703))
  - 新增 Intel OpenVINO Model Server 支持，允许用户在 Intel CPU/GPU/NPU 上进行本地 LLM 推理，降低了对云端 API 的依赖。
- **用户体验：会话管理增强** (PR [#2491](https://github.com/sipeed/picoclaw/pull/2491))
  - 新增 `/status`, `/compact`, `/new` 命令，赋予用户手动管理上下文和会话生命周期的能力。
- **架构重构：Provider 元数据统一** (PR [#2896](https://github.com/sipeed/picoclaw/pull/2896))
  - 将 Provider 元数据统一归集到后端目录中，旨在降低前端的维护成本，优化了模型 UI 的消费逻辑。
- **多模态与推理模型优化** (PR [#2755](https://github.com/sipeed/picoclaw/pull/2755), [#2740](https://github.com/sipeed/picoclaw/pull/2740))
  - 支持 streaming `reasoning_content` 和视频媒体（针对 Xiaomi Mimo 等），并修复了 DeepSeek 思考模式下流式数据丢包的问题。

## 4. 社区热点
今日社区讨论焦点集中在 **第三方后端兼容性** 与 **历史遗留问题**：

- **Issue [#2674](https://github.com/sipeed/picoclaw/issues/2674): Codex OAuth 空响应问题** (评论: 5, 👍: 4)
  - **焦点**: 用户在使用 OpenAI Codex OAuth 对接 ChatGPT 后端时遇到空响应，影响了自定义后端的可用性。这是一个高关注度且尚未解决的痛点。
- **Issue [#1757](https://github.com/sipeed/picoclaw/issues/1757): 定时任务 Channel 错误** (评论: 9)
  - **焦点**: 长期存在的定时任务（Cron）触发 Channel 错误的问题今日终于被关闭。这标志着 Agent 自动化调度能力的稳定性得到了修复，解决了用户的长期困扰。

## 5. Bug 与稳定性
今日报告及处理的 Bug 主要涉及启动流程与安全沙箱：

- **[High] 启动崩溃循环** (Issue [#2720](https://github.com/sipeed/picoclaw/issues/2720))
  - **问题**: PID 文件检查机制仅验证 PID 是否存在，未验证进程身份。若系统复用该 PID（如 systemd-resolved），会导致 Gateway 启动失败。
  - **状态**: Open。已有修复 PR [#2813](https://github.com/sipeed/picoclaw/pull/2813) 待合并，建议维护者优先关注。
- **[High] 安全沙箱逃逸** (Issue [#2688](https://github.com/sipeed/picoclaw/issues/2688))
  - **问题**: `find /` 命令可枚举工作空间外的路径，绕过安全限制。
  - **状态**: Closed。推测已在近期提交中修复。
- **[Medium] 配置迁移体验问题** (Issue [#2771](https://github.com/sipeed/picoclaw/issues/2771))
  - **问题**: 示例配置过时，文档缺失导致迁移困难。已关闭，可能已更新文档或配置逻辑。

## 6. 功能请求与路线图信号
社区正在推动 Agent 向更复杂的编排和记忆管理方向发展：

- **异步结果投递策略** (Issue [#2829](https://github.com/sipeed/picoclaw/issues/2829))
  - 提案建议引入显式的异步结果投递策略，防止子代理结果在父代理中被重复处理。已有相关 PR [#2830](https://github.com/sipeed/picoclaw/pull/2830) 提议增加可配置的路由模式，这表明项目正在向更成熟的 Multi-Agent 编排架构演进。
- **无限上下文与记忆管理** (Issue [#2774](https://github.com/sipeed/picoclaw/issues/2774))
  - 建议引入缓存感知、跨会话记忆和后台历史压缩功能。虽然已关闭，但这与 SeaHorse 模块的改进方向（PR [#2895] 上下文预算管理）高度契合，暗示未来版本可能会加强长时记忆支持。

## 7. 用户反馈摘要
从 Issues 评论中提炼出以下真实痛点：

1.  **OAuth 集成脆弱**: 用户在使用自定义 OAuth 提供商对接官方 ChatGPT 后端时，经常遇到空响应或兼容性问题 ([#2674](https://github.com/sipeed/picoclaw/issues/2674))。
2.  **配置文档滞后**: 随着版本快速迭代，配置文件格式（如 V2 到 V3 的迁移）和示例文档未能及时同步，导致用户部署时产生困惑 ([#2771](https://github.com/sipeed/picoclaw/issues/2771))。
3.  **源码构建障碍**: 用户反馈直接从源码构建时 `launcher` 缺失，说明构建文档或脚本可能存在盲区 ([#2753](https://github.com/sipeed/picoclaw/issues/2753))。

## 8. 待处理积压
以下重要 Issue 和 PR 长期未得到最终处理，建议维护者关注：

- **Issue [#2674](https://github.com/sipeed/picoclaw/issues/2674)**: Codex OAuth 导致空响应，影响部分高级用户的自定义后端使用，且已获得较多点赞，需尽快定位。
- **PR [#2813](https://github.com/sipeed/picoclaw/pull/2813)**: 修复 PID 进程身份校验问题。该 PR 已开启多日，鉴于其会导致服务无法启动的严重后果，建议加速 Review 流程。
- **PR [#2647](https://github.com/sipeed/picoclaw/pull/2647)**: Web_search 工具的 YAML 配置支持。这是一个增强配置灵活性的改进，处于 Open 状态已久，建议确认是否纳入下一版本规划。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 (2026-05-20)

## 1. 今日速览
NanoClaw 项目今日活跃度显著提升，PR 更新量达到 23 条，Issues 闭环迅速。核心进展集中在修复关键性的 WhatsApp 频道集成问题与 Agent 运行时稳定性，其中高优先级的 WhatsApp @提及识别问题在一天内完成了从 Issue 提报到 PR 合并的全流程。目前项目处于快速迭代修复期，安全性与多租户隔离能力得到加强，但 18 个待合并 PR 显示出较高的代码审查积压，建议关注合并节奏。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 5 个 PR 完成合并/关闭，主要推进了以下修复与功能：
*   **WhatsApp 频道修复**：PR #2565 已合并，修复了群组中 `isMention` 硬编码为 `undefined` 的问题，恢复了正常的频道审批流程，解决了 Issue #2560。
*   **运行控制增强**：PR #2143 已关闭，引入了管理员取消活跃 Agent 运行的命令，提升了运维掌控力。
*   **流式响应优化**：PR #815 已关闭，针对支持消息编辑的频道（如 Telegram）增加了渐进式消息流传输功能，优化了用户体验。
*   **上下文压缩修复**：PR #2559 已合并，修复了上下文压缩边界时的进度事件问题。

## 4. 社区热点
*   **Issue #2560 [CLOSED]**: WhatsApp 群组 @提及识别失效问题引起高度关注。该问题直接阻塞了文档中承诺的新用户引导流程，属于 Priority: High 级别。得益于社区快速响应，该问题已在 PR #2565 中修复。
*   **Issue #2555 [OPEN]**: 关于 `agent-runner` 批量消息封装导致 SDK 返回合成响应而非调用 API 的问题。这反映了在处理多消息并发时，底层 SDK 兼容性存在逻辑盲区。
*   **PR #2497**: Agent Network 功能持续更新，这是目前较大的功能型 PR，标志着项目正向多智能体协作架构演进。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在通道集成与核心运行时，严重程度较高：
*   **严重**:
    *   **Issue #2560 (已修复)**: WhatsApp 群组消息无法触发 `isMention`，导致 Bot 对未知聊天静默丢弃。
    *   **Issue #2561 (已关闭)**: Agent 上下文压缩后进入无限重试循环，导致无输出且无熔断机制。
*   **中等**:
    *   **Issue #2555 (待修复)**: Agent-runner 在打包多条消息时触发 SDK 伪响应。当前已有 PR #2556 提出修复方案。
    *   **PR #2567**: 修复 `CLAUDE.local.md` 未被导入导致 Agent 无法感知组内记忆的 Bug。
*   **安全**:
    *   **PR #2566**: 修复了权限作用域问题，防止 Scoped Admin 将未授权的频道连接到其权限范围之外的代理组。

## 6. 功能请求与路线图信号
*   **多项目上下文管理 (Issue #2550)**: 用户提出“轻量级索引 + 按需加载 STATUS 文件”的两层架构。这反映了多项目并发场景下，现有 `CLAUDE.local.md` 加载机制的局限性。考虑到已有 PR #1723 (SQLite 适配层) 在进行重构，该功能有望在数据库层重构后落地。
*   **LiteLLM 支持 (PR #2490)**: 社区正在推进 LiteLLM provider 的集成，这将解除对单一模型服务商的依赖，是下个版本值得期待的特性。

## 7. 用户反馈摘要
*   **痛点**：WhatsApp 集成稳定性差，@提及识别失败、出站消息 @ 渲染错误（PR #2552）、格式化问题（PR #2553）频发。
*   **痛点**：上下文压缩机制不可靠，导致 Agent 卡死（Issue #2561），影响了长时间任务的用户体验。
*   **场景**：用户倾向于在 WhatsApp 群组中使用 Bot 进行协作，但目前的“未知聊天丢弃”逻辑过于严格，导致配置错误时无反馈。

## 8. 待处理积压
目前有 **18 个 PR 待合并**，建议维护者重点关注：
*   **PR #1723**: 数据库适配层重构，属于底层架构变更，积压时间较长，需评估合并风险。
*   **PR #2490**: LiteLLM Provider 支持，社区关注度较高。
*   **PR #2497**: Agent Network 特性，影响范围较大，需细致审查。
*   **PR #2562**: 审批流程投递修复，涉及权限逻辑，需确保安全性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-20)

## 1. 今日速览
NullClaw 项目今日整体活跃度较高，核心开发重心向底层架构重构与跨平台兼容性倾斜。过去24小时内共有 10 个 PR 更新，其中 4 个重要 PR 成功关闭/合并，显著推进了数据治理与网关稳定性功能。项目目前正积极通过移除运行时 Curl 依赖（#881）和修复底层睡眠/网络调用（#878, #892）来提升原生性能与稳定性。虽然无新版本发布，但代码库处于高频迭代阶段，健康度良好。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日共有 4 个 PR 关闭/合并，标志着项目在企业级功能与基础设施稳定性方面取得了实质性突破：

*   **安全审计增强**：[PR #911](https://github.com/nullclaw/nullclaw/pull/911) 已合并，引入了隐私保护秘密分类功能。该功能允许在工作区审计中使用 LLM 进行判断，但通过“信封”机制隐藏原始秘密值，仅分析其形状与熵，极大提升了安全合规性。
*   **数据治理落地**：[PR #885](https://github.com/nullclaw/nullclaw/pull/885) 已关闭，新增 NullClaw 数据治理层。这是 Hackathon 的成果，为项目引入了数据生命周期管理的基础设施。
*   **基础设施稳定性**：[PR #910](https://github.com/nullclaw/nullclaw/pull/910) 已合并，针对 Discord 和 Websocket 网关进行了五项稳定性修复，包括看门狗机制、退避策略和 TLS 泄漏修复，并在多架构环境下通过了 12 小时压力测试。
*   **推理与成本优化**：[PR #908](https://github.com/nullclaw/nullclaw/pull/908) 已关闭，优化了网络/DNS 处理、推理流和成本跟踪，修正了初始化归零的 Bug。

## 4. 社区热点
今日社区关注点集中在底层兼容性与构建问题上：

*   **Android 构建受阻**：[Issue #868](https://github.com/nullclaw/nullclaw/issues/868) 是目前唯一活跃的 Issue。用户报告在 Android/Termux (aarch64) 环境下使用 Zig 0.16 构建时遇到 `AccessDenied` 错误。该问题自 4 月底持续至今，涉及到特定移动端环境的文件系统权限或构建链路，尚未有明确修复方案，是移动端用户的痛点。
*   **大型功能 PR 持续推进**：[PR #783](https://github.com/nullclaw/nullclaw/pull/783)（Cron 子智能体）虽未合并，但今日有更新。这是目前待合并的最大功能项，涉及数据库支持的调度器与 JSON 输出，社区对其带来的自动化能力寄予厚望。

## 5. Bug 与稳定性
今日显性的 Bug 报告较少，主要集中在平台兼容性上，但修复类 PR 活跃：

*   **Android 构建失败 (高优先级)**：
    *   问题：[Issue #868](https://github.com/nullclaw/nullclaw/issues/868) 中，用户在 Termux 环境下构建失败，提示链接临时文件权限被拒。
    *   状态：尚未修复。
*   **Windows DNS 解析修复 (待合并)**：
    *   [PR #892](https://github.com/nullclaw/nullclaw/pull/892) 修复了 Windows 平台上 `HostResolutionFailed` 的问题，将 DNS 预解析从有缺陷的 Shim 移至标准流程，正在等待合并。
*   **线程睡眠逻辑修正 (待合并)**：
    *   [PR #878](https://github.com/nullclaw/nullclaw/pull/878) 修复了 POSIX 系统上的线程睡眠问题，将协作式让步改为真实的 `nanosleep`，这对 NullClaw 的托管运行时稳定性至关重要。

## 6. 功能请求与路线图信号
从当前的 PR 活动可以看出项目明确的演进方向：

*   **自动化调度**：[PR #783](https://github.com/nullclaw/nullclaw/pull/783) 暗示项目正在构建原生的 Cron 调度能力，未来用户可期待定时任务、运行历史记录查询等 Agent 自动化功能。
*   **去 Curl 化的原生 HTTP 栈**：[PR #881](https://github.com/nullclaw/nullclaw/pull/881) 正在重构 HTTP 层，移除对 Curl 子进程的依赖，转而使用 Zig 原生 `std.http`。这将显著减少外部依赖，提高二进制文件的移植性和启动速度。
*   **Zig 0.16 适配**：[PR #887](https://github.com/nullclaw/nullclaw/pull/887) 正在解决 Zig 新版本的构建兼容问题，这是保持项目工具链现代化的关键信号。

## 7. 用户反馈摘要
*   **移动端边缘计算需求**：从 Issue #868 可以看出，部分高级用户尝试在 Android 手机（如 Redmi Note 9）上通过 Termux 运行 NullClaw。这表明用户群体对轻量化、移动端边缘 AI 智能体有强烈需求，但也暴露了目前构建系统对非标准 Linux 环境的支持尚不完善。
*   **对隐私安全的重视**：用户和开发者对审计功能中的隐私处理（如 PR #911）表现出浓厚兴趣，表明项目受众对“云+端”模式下的数据安全高度敏感。

## 8. 待处理积压
*   **Android 构建问题悬而未决**：[Issue #868](https://github.com/nullclaw/nullclaw/issues/868) 已存在近一个月，虽然评论数不多，但阻碍了移动端极客群体的采用。建议维护者优先确认是否为 Zig 上游问题或构建脚本权限问题。
*   **大量功能性 PR 待合并**：目前有 6 个 PR 处于 Open 状态，其中包括核心重构 PR #881 和大型功能 PR #783。随着 #887 (Zig 0.16 适配) 的推进，建议维护者优先处理底层构建与网络重构 PR，以免后续合并冲突加剧。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报 (2026-05-20)**

### 1. 今日速览
IronClaw 项目今日保持极高的开发活跃度，核心架构重构 "Reborn" 进入密集交付期。过去 24 小时内，PR 更新量高达 50 条，其中半数已合并或关闭，显示出维护者高效的代码审查与合并节奏。核心聚焦点在于 **Extension v2 生命周期**、**WebUI v2 路由构建** 以及 **REPL 与 Reborn 架构的融合**。尽管代码层面进展迅速，但 Crates.io 发布滞后问题（Issue #3259）仍悬而未决，对下游用户造成了一定影响。

### 2. 版本发布
**无新版本发布。**
需特别关注：Issue #3259 指出 GitHub 已发布至 `v0.27.0`，但 Crates.io 仍停留在 `v0.24.0`。由于依赖 Wasmtime 28.x 的 CVE 漏洞，下游使用者被迫锁定旧版本，亟待维护者发布新版本以解决供应链安全隐患。

### 3. 项目进展
今日共有 25 个 PR 被合并，主要围绕 **Reborn 架构的落地与测试覆盖率提升**：

*   **Reborn 架构与 REPL 集成**：合并了 [PR #3797](https://github.com/nearai/ironclaw/pull/3797) (Wire REPL tools through live adapters) 和 [PR #3792](https://github.com/nearai/ironclaw/pull/3792) (Route REPL LLM auth through composition)，标志着 REPL 模式已成功迁移至 Reborn 架构，实现了工具调用与 LLM 认证的解耦。
*   **Extension v2 生态完善**：[PR #3790](https://github.com/nearai/ironclaw/pull/3790) 实现了 Hot Capability Catalog 发布功能，[PR #3794](https://github.com/nearai/ironclaw/pull/3794) 增加了 E2E 测试覆盖，确保了扩展系统的动态加载能力。
*   **安全与稳定性**：[PR #3788](https://github.com/nearai/ironclaw/pull/3788) 将默认 HostPortCatalog 接入扩展发现机制，[PR #3795](https://github.com/nearai/ironclaw/pull/3795) 收紧了旧版扩展的 Manifest 限制，强化了安全性。

### 4. 社区热点
*   **供应链发布阻塞**：[Issue #3259](https://github.com/nearai/ironclaw/issues/3259) 讨论最为热烈（6 条评论）。用户指出 Crates.io 版本滞后导致无法规避依赖项 CVE，迫切请求发布 `0.25.0` 及以上版本。
*   **Reborn 测试框架规划**：[Issue #3702](https://github.com/nearai/ironclaw/issues/3702) 提出了详尽的 E2E 测试框架重构计划，旨在对齐 88 个测试文件的 Rust 集成测试标准，引发了关于测试架构的深入讨论。
*   **大型功能 PR 审查中**：[PR #3747](https://github.com/nearai/ironclaw/pull/3747) (WebUI v2 routes) 和 [PR #3761](https://github.com/nearai/ironclaw/pull/3761) (Event Stream Manager) 均为 XL 级变更，正在等待最终合并，将是 WebUI Beta 的关键组成部分。

### 5. Bug 与稳定性
*   **严重 (P0)**：[Issue #3447](https://github.com/nearai/ironclaw/issues/3447) Nightly E2E 测试失败，虽然目前未见修复 PR，但结合今日合并的大量测试 PR（如 #3793, #3799），项目方正通过增加测试覆盖来排查稳定性问题。
*   **中等**：[Issue #3610](https://github.com/nearai/ironclaw/issues/3610) 指出 `ProcessError::Filesystem` 丢失了类型细节，导致下游不得不进行脆弱的字符串匹配，建议保留结构化错误信息，已标记为 P0。
*   **供应链风险**：[Issue #3259](https://github.com/nearai/ironclaw/issues/3259) 涉及 Wasmtime CVE，影响下游依赖安全。

### 6. 功能请求与路线图信号
今日 Issues 揭示了清晰的 "Reborn" 路线图，提出了多个 Lane（通道）任务，暗示下一版本将重点突破：

*   **子代理 设计**：[Issue #3798](https://github.com/nearai/ironclaw/issues/3798) 提出了详细的设计文档，计划分三阶段实现 Reborn 代理循环中的子代理生成机制。
*   **多渠道能力扩展**：
    *   [Issue #3805](https://github.com/nearai/ironclaw/issues/3805) Lane 5: 实现 Notion MCP 能力路径。
    *   [Issue #3806](https://github.com/nearai/ironclaw/issues/3806) Lane 6: 实现 GitHub WASM 读写能力路径。
    *   [Issue #3804](https://github.com/nearai/ironclaw/issues/3804) Lane 4: 实现 Native Memory 作为能力提供者。
*   **权限控制**：[Issue #3796](https://github.com/nearai/ironclaw/issues/3796) 提议增加租户作用域组和项目 ACL，支持跨用户共享项目。

### 7. 用户反馈摘要
*   **发布流程痛点**：用户强烈反馈发布节奏滞后于开发进度。Crates.io 版本缺失迫使下游用户不得不直接依赖 Git 源码或面临安全风险（#3259）。
*   **架构透明度期待**：在 Issue #3773 中，社区发起了 "Crate 边界与所有权模糊性审计"，反映出随着项目规模扩大，开发者对模块边界清晰化的需求日益增强。

### 8. 待处理积压
*   **发布阻塞**：[Issue #3259](https://github.com/nearai/ironclaw/issues/3259) 持续时间较长，建议维护者优先处理 Crates.io 发布以解决下游安全依赖问题。
*   **依赖更新**：[PR #3764](https://github.com/nearai/ironclaw/pull/3764) (Dependabot) 涉及 44 个依赖项更新，[PR #3360](https://github.com/nearai/ironclaw/pull/3360) 涉及 Tokio 生态更新，均处于 Open 状态，等待 CI 验证与合并。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-20)

## 1. 今日速览
今日 LobsterAI 项目呈现出“开发侧高频提交，社区侧痛点暴露”的态势。项目代码库活跃度极高，单日 PR 更新达 31 条，核心开发团队集中合并了多 Agent 编排、Artifacts 支持、UI 交互优化等关键功能，标志着项目在复杂任务处理能力和用户体验上迈出了重要一步。然而，社区侧反馈的严重兼容性问题（与内部其他产品端口冲突）尚未得到解决，且存在大量陈旧但功能重要的 PR 处于待合并状态，项目维护者需在功能迭代与代码审查积压之间寻求平衡。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 5 个 PR 被合并或关闭，主要集中在多 Agent 架构深化与交互体验优化，显著增强了产品的核心竞争力：

*   **多 Agent 编排从“黑箱”转向透明化**：核心 PR [#680](https://github.com/netease-youdao/LobsterAI/pull/680) 已关闭，引入了 Agent Router 与 Worker 模式，实现了子任务的实时可观测与历史回溯，解决了用户无法监控复杂任务流程的痛点。
*   **Subagent 可视化落地**：配合架构调整，PR [#2011](https://github.com/netease-youdao/LobsterAI/pull/2011) 在侧边栏增加了子代理会话的树形展示与详情页，使多 Agent 交互过程清晰可见。
*   **Artifacts 功能集成**：PR [#2012](https://github.com/netease-youdao/LobsterAI/pull/2012) 合并，增加了 Artifacts 相关支持，预示着 LobsterAI 将具备更强大的内容生成与预览能力。
*   **交互细节打磨**：PR [#2013](https://github.com/netease-youdao/LobsterAI/pull/2013) 优化了上下文窗口滑块的交互，支持吸附预设点与 K/M 简写输入，提升了高级用户的配置效率；PR [#2014](https://github.com/netease-youdao/LobsterAI/pull/2014) 修复了微信扫码登录相关的 Gateway 重启问题，提升了连接稳定性。

## 4. 社区热点
今日社区关注点集中在产品兼容性与引擎扩展能力上：

*   **[Issue #1698](https://github.com/netease-youdao/LobsterAI/issues/1698) - 端口冲突导致竞品/协同软件无法运行**
    该 Issue 反映了严重的软件冲突问题。用户反馈在运行“有道龙虾”时安装“智企帝王蟹”会导致 Gateway 端口冲突和进程竞争，致使后者鉴权失败且无响应。作为网易内部生态产品，此类冲突会严重降低用户满意度，且属于必现的阻断性 Bug，目前尚未有修复 PR 合并，需紧急关注。
*   **[Issue #2016](https://github.com/netease-youdao/LobsterAI/issues/2016) - 新引擎支持请求**
    用户建议增加 `openhuman` 引擎功能，显示出社区对多样化模型后端集成的强烈需求，这与项目近期强化多 Agent 能力的方向相符。

## 5. Bug 与稳定性
*   **[严重] 软件冲突与进程竞争**：[Issue #1698](https://github.com/netease-youdao/LobsterAI/issues/1698) 报告了 Gateway 端口冲突问题。在 macOS Tahoe 环境下，LobsterAI 占用资源导致“智企帝王蟹”无法正常启动和鉴权。**状态：Open，暂无关联 Fix PR。**
*   **[中等] 微信登录服务重启**：[PR #2014](https://github.com/netease-youdao/LobsterAI/pull/2014) 修复了微信二维码 Gateway 重启的问题，该问题可能影响移动端与桌面端的联动体验。**状态：已合并。**

## 6. 功能请求与路线图信号
*   **多 Agent 编排引擎上线**：随着 [#680](https://github.com/netease-youdao/LobsterAI/pull/680) 的合并，LobsterAI 正式进入多 Agent 协作时代，后续版本重点预计将转向子 Agent 的调试与性能优化。
*   **UI 细节完善**：大量处于 Open 状态的 PR（如 [#1636](https://github.com/netease-youdao/LobsterAI/pull/1636) 滚动按钮、[#1637](https://github.com/netease-youdao/LobsterAI/pull/1637) 重新生成按钮）表明，项目正在向对标主流 Chat 应用（如 ChatGPT、Claude）的交互体验看齐。
*   **引擎扩展性**：用户提出的 [Issue #2016](https://github.com/netease-youdao/LobsterAI/issues/2016) 建议增加 openhuman 引擎，若被采纳，将进一步增强项目作为 AI 智能体底座的灵活性。

## 7. 用户反馈摘要
*   **生态共存诉求强烈**：从 Issue #1698 可见，目标用户群往往同时使用多款网易系工具，对软件间的资源抢占和端口冲突容忍度极低，期望“开箱即用”且互不干扰。
*   **操作便捷性需求**：UI 交互类 PR（如滑块吸附、一键复制、Esc 关闭弹窗）数量众多，反映出用户对桌面端软件“精致度”和“快捷操作”的高要求，现有的基础交互已无法满足重度用户需求。

## 8. 待处理积压
项目存在一定数量的“僵尸”或长期未合并 PR，积压风险较高：

*   **UI 优化类积压**：包括模型选择器重构 [PR #1628](https://github.com/netease-youdao/LobsterAI/pull/1628)、用户头像设置 [PR #1629](https://github.com/netease-youdao/LobsterAI/pull/1629) 等，均已停滞超过一个月，标记为 `stale`。这些功能对提升第一印象至关重要，建议维护者进行 Rebase 或推进合并。
*   **日志安全类积压**：[PR #1661](https://github.com/netease-youdao/LobsterAI/pull/1661) 涉及日志脱敏，属于安全性改进，长期未合并可能带来合规风险。
*   **关键依赖更新**：[PR #1663](https://github.com/netease-youdao/LobsterAI/pull/1663) 提议升级 OpenClaw 运行时，涉及核心引擎版本迭代，需尽快评估合并以避免技术债务累积。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-20)

## 1. 今日速览
Moltis 项目今日整体活跃度适中，核心开发重心集中在系统稳定性与容器化部署的优化上。过去24小时内，项目成功关闭了 2 个历史遗留问题，并合并/关闭了 2 个修复类 PR，有效提升了 WebSocket 连接稳定性和 Docker 沙箱的资源管理能力。与此同时，社区反馈了 2 个新 Bug，分别涉及 WebSocket 断连和 Hooks 配置失效，显示出用户对实时交互与扩展机制的深度使用。整体来看，项目处于稳健迭代阶段，无重大破坏性变更，但需关注新上报的配置解析问题。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 2 个 PR 被合并或关闭，主要围绕基础设施修复，显著提升了系统的健壮性：

*   **[CLOSED] fix(sandbox): reap docker sandbox zombies** ([PR #1025](https://github.com/moltis-org/moltis/pull/1025))
    *   **内容**：修复了 Docker 沙箱环境中僵尸进程累积的问题。
    *   **进展**：通过在 Docker 容器运行时引入 `--init` 进程，确保孤儿进程能被正确回收。此举解决了长期运行场景下的资源泄漏隐患，对提升服务端稳定性意义重大。

*   **[CLOSED] fix(web): avoid false websocket disconnect timeouts** ([PR #1023](https://github.com/moltis-org/moltis/pull/1023))
    *   **内容**：优化了 WebSocket 超时错误的提示逻辑。
    *   **进展**：修复了将 RPC 超时错误误报为“WebSocket disconnected”的问题，并在超时消息中包含了具体的 RPC 方法名。这极大改善了前端调试体验，减少了用户对网络连接质量的误判。

*   **[OPEN] feat(openai-codex): add reasoning effort support** ([PR #1005](https://github.com/moltis-org/moltis/pull/1005))
    *   **状态**：该功能 PR 仍在待合并状态，持续跟进 OpenAI Codex 及 GPT-5 相关的推理能力支持，是下一阶段的重要功能更新。

## 4. 社区热点
今日社区关注度最高的问题主要集中在部署配置与历史遗留 Bug 的解决：

*   **[CLOSED] [bug]: docker moltis + docker sandbox issues** ([Issue #423](https://github.com/moltis-org/moltis/issues/423))
    *   **热度**：👍 5
    *   **分析**：该 Issue 自 3 月提交以来终于关闭，反映了社区对 Docker 双层部署架构的关注。随着 PR #1025 的合并，此类沙箱资源管理问题有望得到根治。用户对 Docker 环境下的稳定性诉求强烈。

*   **[CLOSED] [Feature]: Support client_secret in MCP server OAuth override config** ([Issue #850](https://github.com/moltis-org/moltis/issues/850))
    *   **分析**：该功能请求的关闭表明项目已完善对 MCP 服务器 OAuth 配置的支持，满足了用户在自定义认证流程中的安全配置需求。

## 5. Bug 与稳定性
今日新增 2 个 Bug 报告，且有一个历史 Bug 关闭，整体稳定性风险可控：

*   **[P1-中等] [Bug]: Getting "WebSocket disconnected" during LLM modes update** ([Issue #1022](https://github.com/moltis-org/moltis/issues/1022))
    *   **描述**：用户在 LLM 模式更新过程中遇到 WebSocket 断开连接。
    *   **关联**：PR #1023 刚修复了错误的 WebSocket 超时提示，此 Bug 可能是特定场景下的复现或边缘案例，需确认是否已被 PR #1023 覆盖。

*   **[P2-一般] [Bug]: [hooks] config section parsed + validated but never registered at runtime** ([Issue #1024](https://github.com/moltis-org/moltis/issues/1024))
    *   **描述**：配置文件中的 `[hooks]` 部分虽然通过了解析和验证，但未在运行时注册生效。
    *   **状态**：尚未有修复 PR。这是一个典型的配置加载逻辑漏洞，可能导致用户自定义钩子功能失效，需尽快修复。

*   **[已修复] Docker Sandbox 僵尸进程**：随着 Issue #423 和 PR #1025 的解决，Docker 环境下的进程资源管理问题得到修复。

## 6. 功能请求与路线图信号
*   **OpenAI 推理能力增强**：从 [PR #1005](https://github.com/moltis-org/moltis/pull/1005) 的推进可以看出，Moltis 正积极适配 OpenAI 最新的推理模型特性，特别是针对 GPT-5 Codex 的 `reasoning_effort` 参数支持。这预示着项目将在复杂逻辑推理任务上有显著提升。
*   **安全性与配置灵活性**：Issue #850 的关闭标志着 OAuth 配置灵活性的提升，结合正在进行的 Vault 密码同步工作 ([PR #1026](https://github.com/moltis-org/moltis/pull/1026))，项目正在强化企业级安全特性。

## 7. 用户反馈摘要
*   **痛点**：用户对错误的日志提示非常敏感。Issue #1022 和 PR #1023 的对应关系表明，用户在面对 "WebSocket disconnected" 时会感到困惑，需要精准的错误定位而非笼统的断连提示。
*   **场景**：重度用户正在尝试利用 Hooks 机制进行扩展开发，但遇到了运行时未生效的问题。这说明虽然架构支持扩展，但配置加载链路的健壮性测试仍需加强。
*   **满意度**：Docker 相关历史 Bug 的关闭获得了 5 个点赞，表明社区对维护者解决长期遗留问题表示感谢和认可。

## 8. 待处理积压
*   **[需关注] Vault 密码同步机制**：[PR #1026](https://github.com/moltis-org/moltis/pull/1026) 目前处于开启状态，涉及敏感的认证逻辑变更，建议维护者尽快 Review 以确保密码轮换逻辑的安全性。
*   **[新积压] Hooks 运行时注册问题**：[Issue #1024](https://github.com/moltis-org/moltis/issues/1024) 报告了配置未生效的问题，这是一个功能阻断性 Bug，建议纳入优先修复队列。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-05-20)

## 1. 今日速览
CoPaw 项目今日正式发布 **v1.1.8** 正式版，标志着项目正式进入插件生态化阶段。本次更新引入了官方插件分发机制和备受期待的 "QwenPaw Pet" 桌面宠物功能，极大地丰富了产品的可玩性和扩展性。过去 24 小时内，社区活跃度显著提升，Issues 更新达 43 条，PR 更新 37 条，主要围绕新版本的插件兼容性、模型支持扩展（如 OpenCode Go）以及历史遗留的稳定性问题展开讨论。整体来看，项目在功能迭代上步伐稳健，但新功能的引入也带来了若干新的兼容性挑战。

## 2. 版本发布

### v1.1.8 (Latest Release)
本次更新主要聚焦于**插件生态建设**与**性能优化**，无破坏性变更，建议用户尽快升级以体验新功能。

**✨ 新增功能**：
*   **官方插件分发**：支持在控制台插件管理器中一键安装官方插件，或通过网站浏览下载 ([PR #4482](https://github.com/agentscope-ai/QwenPaw/pull/4482))。
*   **QwenPaw Pet**：新增桌面宠物伴侣插件，增强交互趣味性。

**🚀 性能优化**：
*   **控制台性能重构**：优化前端模型加载与渲染性能 ([PR #4502](https://github.com/agentscope-ai/QwenPaw/pull/4502))。
*   **Trace I/O 优化**：批量追加 inbox trace events 以减少文件 I/O 开销 ([PR #4493](https://github.com/agentscope-ai/QwenPaw/pull/4493))。

## 3. 项目进展
今日项目共处理并关闭了多项关键 PR，主要集中在模型支持扩展与核心功能修复：

*   **模型支持扩展**：合并了 [PR #4536](https://github.com/agentscope-ai/QwenPaw/pull/4536)，新增 **OpenCode Go** 模型支持，通过 `meta.base_url_options` 实现与 OpenCode (Zen) 的共存切换。此外，[PR #4526](https://github.com/agentscope-ai/QwenPaw/pull/4526) 添加了新的免费模型列表。
*   **核心修复**：[PR #4523](https://github.com/agentscope-ai/QwenPaw/pull/4523) 修复了 `/mission` 指令和技能信息响应在会话重载后消失的 Bug，提升了会话持久化体验。
*   **部署优化**：[PR #4527](https://github.com/agentscope-ai/QwenPaw/pull/4527) 引入了 `QWENPAW_AUTO_INITIALIZATION` 环境变量，允许在 Docker 镜像预热时禁用自动初始化，优化了部署流程。
*   **文档与配置**：[PR #4549](https://github.com/agentscope-ai/QwenPaw/pull/4549) 修复了 OpenCode Provider 配置中的 URL 问题，[PR #4531](https://github.com/agentscope-ai/QwenPaw/pull/4531) 更新了发布说明。

## 4. 社区热点
今日社区讨论主要集中在版本升级后的配置加载问题及新模型支持方面：

1.  **配置加载严重回归**：[Issue #4496](https://github.com/agentscope-ai/QwenPaw/issues/4496) 报告升级到 1.1.7 后，系统提示词加载了内置默认模板而非工作区实际文件，引发广泛讨论（11 条评论），严重影响多 Agent 场景使用。
2.  **新模型支持咨询**：[Issue #4474](https://github.com/agentscope-ai/QwenPaw/issues/4474) 用户询问是否支持 ChatGPT-5.5，反映出社区对前沿模型快速跟进的强烈需求。
3.  **备份访问权限问题**：[Issue #4535](https://github.com/agentscope-ai/QwenPaw/issues/4535) 指出在 WebUI 中访问 `/backups` 接口返回 HTTP 403，影响了数据备份功能的可用性。
4.  **插件与宠物系统期待**：[Issue #4499](https://github.com/agentscope-ai/QwenPaw/issues/4499) 用户询问插件市场发布时间及宠物系统计划，显示新功能（v1.1.8 已发布）备受关注。

## 5. Bug 与稳定性
今日报告了若干影响体验的 Bug，部分涉及新版本功能，需重点关注：

*   **[Critical] 插件引发崩溃**：[Issue #4541](https://github.com/agentscope-ai/QwenPaw/issues/4541) 报告启用 QwenPaw Pet 插件后，发送第一条消息会导致主程序闪退。
*   **[Critical] 配置文件加载错误**：[Issue #4496](https://github.com/agentscope-ai/QwenPaw/issues/4496) AGENTS.md 加载逻辑错误，导致 Agent 行为异常。
*   **[High] 429 限流死锁**：[Issue #4515](https://github.com/agentscope-ai/QwenPaw/issues/4515) 遇到 429 错误后系统卡死，无法切换模型或恢复，需重启服务。
*   **[High] 流式输出中断**：[Issue #4543](https://github.com/agentscope-ai/QwenPaw/issues/4543) API 调用首次流式返回数据不全；[Issue #4494](https://github.com/agentscope-ai/QwenPaw/issues/4494) 控制台流式生成偶发中断。
*   **[Medium] 模型连接测试失败**：[Issue #4542](https://github.com/agentscope-ai/QwenPaw/issues/4542) 部分兼容 API（如 B.AI）因 `max_tokens=1` 的硬编码导致连接测试失败。

## 6. 功能请求与路线图信号
社区与开发者正在推动多项重要功能，部分已进入 PR 阶段：

*   **技能市场重构**：[PR #4518](https://github.com/agentscope-ai/QwenPaw/pull/4518) 正在重构 Skill Hub，引入异步搜索与统一市场，有望解决技能管理体验割裂的问题。
*   **多模态自动路由**：[Issue #4539](https://github.com/agentscope-ai/QwenPaw/issues/4539) 用户希望能根据输入类型（图片/语音/视频）自动切换对应的免费模型，实现无感多模态体验。
*   **OAuth 2.1 认证**：[PR #4532](https://github.com/agentscope-ai/QwenPaw/pull/4532) 为远程 MCP Server 添加 OAuth 2.1 支持，增强企业级安全性。
*   **Subagent Fork 机制**：[PR #4530](https://github.com/agentscope-ai/QwenPaw/pull/4530) 提出 `spawn_subagent` 工具，允许在工作区内派生子任务，完善 Agent 协作能力。
*   **Tauri 桌面端支持**：[PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) 仍在推进中，旨在提供更轻量的桌面应用体验。

## 7. 用户反馈摘要
*   **痛点**：
    *   **升级稳定性**：用户反馈从旧版本升级后容易出现配置丢失或加载错误（AGENTS.md 问题），担心卸载重装导致数据丢失（[Issue #4430](https://github.com/agentscope-ai/QwenPaw/issues/4430)）。
    *   **编码顽疾**：Windows 环境下 GBK 编码问题依然困扰用户，需系统性解决（[Issue #4481](https://github.com/agentscope-ai/QwenPaw/issues/4481)）。
    *   **Markdown 渲染**：Markdown 表格换行问题反复被提及（[Issue #4497](https://github.com/agentscope-ai/QwenPaw/issues/4497)），影响文档类 Agent 输出体验。
*   **满意点**：
    *   新发布的桌面宠物插件受到好评，增加了趣味性。
    *   快速跟进 OpenCode Go 等新模型，满足了用户对免费/高性能模型的需求。

## 8. 待处理积压
*   **性能瓶颈**：[Issue #3570](https://github.com/agentscope-ai/QwenPaw/issues/3570) 关于聊天列表分页功能的请求长期未解决，随着会话量增加，加载缓慢问题日益凸显。
*   **安全漏洞修复**：[Issue #4470](https://github.com/agentscope-ai/QwenPaw/issues/4470) 提到的插件接口 RCE 漏洞风险，需尽快确认修复状态或发布安全通告。
*   **MacOS 沙箱安全**：[PR #4267](https://github.com/agentscope-ai/QwenPaw/pull/4267) 关于 MacOS 文件路径白名单的审查进度需加快，以完善平台安全性。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-05-20)

## 1. 今日速览
ZeptoClaw 项目今日整体活跃度处于**低维护状态**，未检测到用户侧的 Issue 反馈或新功能开发动态。过去 24 小时内，项目仅产生 2 条由自动化工具触发的 Pull Request 更新，无人工提交记录。这表明项目当前处于功能稳定期，维护重心主要集中在持续集成（CI）流程的工具链维护上。虽然缺乏功能迭代，但依赖项的及时更新反映了项目基础建设的健康运作。整体来看，项目今日无重大风险或突破性进展。

## 2. 版本发布
无。

## 3. 项目进展
今日项目的进展主要集中在**持续集成（CI）环境的依赖维护**，旨在提升构建流程的稳定性与安全性。

*   **已关闭 PR [#586](https://github.com/qhkm/zeptoclaw/pull/586)**：
    该 PR 由 Dependabot 提交，旨在将 GitHub Action `taiki-e/install-action` 从 v2.75.17 升级至 v2.75.29。该 PR 已于今日关闭，推测可能是因为后续提交了跨度更大的版本更新（见 PR #591）而被取代，或是完成了中间版本的合并迭代。此举表明维护者正在积极跟进 CI 工具链的补丁更新。

*   **待合并 PR [#591](https://github.com/qhkm/zeptoclaw/pull/591)**：
    该 PR 同样由 Dependabot 提交，提议将 `taiki-e/install-action` 直接从 v2.75.17 跨越式升级至 v2.77.3。该更新目前处于 Open 状态，包含了更多上游的修复与改进。此 PR 的推进将确保项目构建环境处于最新状态，规避潜在的工具链漏洞或兼容性问题。

**小结**：今日项目并未向核心代码库推送功能性代码，但通过清理和更新 CI 依赖，保障了项目基础设施的现代化，为后续可能的开发工作铺平了道路。

## 4. 社区热点
今日社区无活跃讨论。Issues 列表无新增或更新，PR 评论区也无用户留言。唯一的动态来源为自动化机器人 Dependabot。这反映出项目在用户讨论层面处于静默期，暂无引发社区关注的痛点或兴奋点。

## 5. Bug 与稳定性
过去 24 小时内，未收到新的 Bug 报告、崩溃反馈或回归问题。项目当前版本运行表现稳定。

## 6. 功能请求与路线图信号
今日无新增功能请求。由于缺乏用户提出的 Issue 或讨论，暂时无法从社区信号中推断下一版本的具体路线图。

## 7. 用户反馈摘要
暂无用户反馈。Issues 与 PR 区域均无评论记录，无法提取用户痛点或使用场景信息。

## 8. 待处理积压
目前仅有一个待处理的自动化任务，建议维护者尽快处理以保持项目健康度：

*   **待合并 PR [#591](https://github.com/qhkm/zeptoclaw/pull/591)**：`[dependencies, github_actions] chore(deps): bump taiki-e/install-action from 2.75.17 to 2.77.3`。
    *   **状态**：Open
    *   **建议**：该 PR 为纯依赖升级，风险较低且能提升 CI 稳定性，建议维护者审查后尽快合并，以清理待办队列。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*