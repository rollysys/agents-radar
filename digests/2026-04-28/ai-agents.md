# OpenClaw 生态日报 2026-04-28

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-28 03:30 UTC

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

# OpenClaw 项目动态日报 (2026-04-28)

## 1. 今日速览
OpenClaw 项目今日保持极高活跃度，Issue 与 PR 更新量均达 500 条，显示社区互动频繁且开发节奏紧凑。项目连续发布了 `v2026.4.25` 和 `v2026.4.26` 两个版本，重点推进了实时语音通话架构与 TTS（语音合成）生态的集成。然而，近期版本（尤其是 v2026.4.24/25）引入了明显的回归问题，导致部分用户遭遇服务崩溃或启动阻塞，社区反馈集中在更新后的稳定性上。总体而言，项目正处于功能快速迭代期，但需警惕“快速发布”带来的质量波动。

## 2. 版本发布

### v2026.4.26
**核心更新：实时语音通信架构重构**
- **Control UI/Talk**: 引入了通用的浏览器实时传输契约，支持 Google Live Browser Talk 会话，并使用受限的临时令牌增强了安全性。同时新增 Gateway 中继功能，支持纯后端实时语音插件。
- **CLI/models**: 优化了模型列表的路由逻辑，支持按 Provider 进行过滤。
- **注意**: 此次更新涉及底层通信架构，升级后若配置不当可能导致语音服务不可用，建议关注 Gateway 配置项 `gateway.controlUi.allowedOrigins`。

### v2026.4.25
**核心更新：TTS 能力全面升级**
- **语音回复增强**: 支持 `/tts latest` 命令，新增聊天级的自动 TTS 控制、角色设定及 Agent/账户级覆盖配置。
- **新 Provider 支持**: 大幅扩展语音生态，新增 Azure Speech、Xiaomi、Local CLI、Inworld、Volcengine 及 ElevenLabs v3 支持。
- **特别感谢**: 贡献者 @leonchui, @zoujiejun, @solar2ain 等。

## 3. 项目进展
今日共有 **147** 个 PR 被合并或关闭，**353** 个 PR 处于待合并状态，主要进展如下：

- **跨会话通信能力**: PR [#69948](https://github.com/openclaw/openclaw/pull/69948) 合并，新增 `api.runtime.interSession.send` 接口，为插件提供了跨会话消息发送的标准化门面，为多 Agent 协作打下基础。
- **模型生态兼容性**: PR [#73216](https://github.com/openclaw/openclaw/pull/73216) 正在推进 Copilot 模型目录的动态获取，旨在解决硬编码模型列表滞后的问题，提升 GitHub Copilot 集成体验。
- **可观测性增强**: PR [#72645](https://github.com/openclaw/openclaw/pull/72645) 提交了全链路 OTel 追踪功能，实现了从 Run -> Skill -> Tool -> Model 的端到端监控，有助于排查复杂场景下的延迟问题。
- **诊断工具优化**: PR [#72936](https://github.com/openclaw/openclaw/pull/72936) 增加了从 Chat 发送 Codex 诊断信息的功能，方便用户快速上报问题。

## 4. 社区热点
今日讨论最热烈的问题集中在**更新后的稳定性**与**底层架构变更**：

1.  **[回归] v2026.4.24/25 版本导致服务不可用**  
    Issue [#71986](https://github.com/openclaw/openclaw/issues/71986) 与 [#72848](https://github.com/openclaw/openclaw/issues/72848) 引发大量共鸣。用户反馈 v2026.4.24 是“灾难性更新”，在 VPS 和 Mac (Intel) 环境下均出现 WhatsApp/Telegram 频道丢失、Gateway 崩溃、更新循环失败等问题。目前 Issue 已关闭，推测 v2026.4.26 旨在修复此类问题。
2.  **[回归] Channel Sidecar 启动阻塞**  
    Issue [#72846](https://github.com/openclaw/openclaw/issues/72846) 报告了旧 Bug 回归，Gateway 启动后 Sidecar 阻塞约 3 分钟，严重影响服务就绪速度。
3.  **A2A 协议支持呼声高**  
    Issue [#6842](https://github.com/openclaw/openclaw/issues/6842) 获得了 9 个点赞，请求支持 A2A (Agent-to-Agent) 协议，以便实现不同 OpenClaw 实例间的去中心化任务委托与协作。该 Issue 已关闭，可能与近期的会话通信架构重构有关。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，且严重程度较高，多涉及近期版本引入的回归问题：

- **严重**:
    - **[#71986](https://github.com/openclaw/openclaw/issues/71986)**: v2026.4.24 导致 Gateway 崩溃、插件循环安装，需回滚解决。
    - **[#72846](https://github.com/openclaw/openclaw/issues/72846)**: Sidecar 启动阻塞，导致服务不可用（回归 Bug）。
- **中等**:
    - **[#68735](https://github.com/openclaw/openclaw/issues/68735)**: 升级后 LLM 请求 Schema 被拒绝，影响特定模型调用。
    - **[#54253](https://github.com/openclaw/openclaw/issues/54253)**: RISC-V64 架构下运行报错，目前尚未解决，影响了边缘计算场景用户。
    - **[#65309](https://github.com/openclaw/openclaw/issues/65309)**: Active Memory 功能导致直连聊天阻塞 30 秒并超时。
- **已修复/待验证**:
    - 多数严重的回归 Issue 已被 Close，建议受影响用户尽快升级至 v2026.4.26 进行验证。

## 6. 功能请求与路线图信号
结合 Issue 与 PR 动态，以下功能需求明显且具备实现基础：

1.  **多租户支持**: Issue [#60127](https://github.com/openclaw/openclaw/issues/60127) 请求在单实例中支持多租户隔离，而非运行多个实例。鉴于 PR #69948 已增加跨会话通信能力，多租户隔离架构可能成为下阶段重点。
2.  **A2A 协议**: Issue [#6842](https://github.com/openclaw/openclaw/issues/6842) 的关闭与 PR #39102（Per-agent A2A 白名单）的开发相呼应，预示着 Agent 间协作能力即将落地。
3.  **技能级模型路由**: Issue [#43260](https://github.com/openclaw/openclaw/issues/43260) 请求在 Skill 层面指定模型，这符合精细化调度的趋势，值得保持关注。

## 7. 用户反馈摘要
从评论中提取的真实声音显示，用户对项目的功能丰富度表示认可，但对近期更新质量感到焦虑：

- **痛点**:
    - **更新恐惧症**: 用户反映“不敢轻易更新”，因为新版本经常破坏现有功能（如 v2026.4.24）。
    - **配置层级混乱**: Issue [#29387](https://github.com/openclaw/openclaw/issues/29387) 指出 `agentDir` 中的文件被忽略，导致个性化配置失效，用户对配置文件的优先级和加载逻辑感到困惑。
    - **资源占用**: Issue [#61701](https://github.com/openclaw/openclaw/issues/61701) 反馈 Gateway 进程 CPU 占用 100%，影响宿主机其他服务。

- **满意点**:
    - **TTS 支持扩展**: v2026.4.25 新增的 TTS provider 覆盖了大量用户需求，尤其是 Azure 和本地 CLI 支持。
    - **响应速度**: 尽管存在回归，但社区对 Bug 报告的响应速度较快，关键 Issue 通常在 24 小时内有状态更新。

## 8. 待处理积压
以下重要 Issue 长期未获有效解决或处于 Stale 状态，建议维护者关注：

- **[#43747](https://github.com/openclaw/openclaw/issues/43747) [Bug]: Memory management is in chaos**: 内存管理行为不一致（SQLite vs Chroma vs 无存储），严重影响多用户环境下的记忆可靠性。
- **[#29387](https://github.com/openclaw/openclaw/issues/29387) [Bug]: Bootstrap files in agentDir are silently ignored**: 这是一个影响用户体验的关键 Bug，导致 Agent 个性化配置失效。
- **[#42840](https://github.com/openclaw/openclaw/issues/42840) [Feature]: Add MathJax/LaTeX Support to Control UI**: 长期请求，对于科研/教育场景用户是刚需。

---

## 横向生态对比

# AI 智能体与个人助手开源生态日报 (2026-04-28) - 横向对比分析

## 1. 生态全景
当前开源 AI 智能体生态正处于**功能爆发与架构重构并存**的关键阶段。项目普遍从单一的聊天机器人向多模态（语音/视频）、多渠道（IM 集成）及多智能体协作架构演进。实时语音通信、长期记忆管理、企业级权限控制成为技术高地，但频繁的底层重构也带来了显著的稳定性挑战，用户对"更新恐惧症"和配置复杂度的反馈日益增多，生态正经历从"能用"到"好用"的阵痛期。

## 2. 各项目活跃度对比

| 项目名称 | Issue 更新量 | PR 更新量 | 版本发布 | 健康度评估 | 核心动态摘要 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500+ | ~500+ | v2026.4.25/26 | ⚠️ 高频/波动 | 发布语音架构重构版本，但出现严重回归 Bug，社区热度极高。 |
| **PicoClaw** | 108 | 119 | 无 | 🟢 极高 | Issue 关闭数远超新增，架构重构与 TTS 需求强烈，处于快速修正期。 |
| **CoPaw** | ~50+ | ~50+ | 无 | 🟡 中/高 | 企业级渠道适配活跃，上下文丢失问题突出，修复 PR 数量多。 |
| **Hermes Agent**| ~50 | ~50 | 无 | 🟡 中/重构 | 核心转向多智能体协作，架构变动大，Windows 支持存在争议。 |
| **IronClaw** | ~10 | 34 | 无 | 🟡 重构期 | "Reborn"架构迁移中，CI 测试不稳定，升级数据兼容性问题多。 |
| **Zeroclaw** | 43 | 45 | 无 | 🟡 中/摩擦 | 微信渠道与 ACP 协议推进中，新用户配置体验较差，S1 级 Bug 待解。 |
| **LobsterAI** | ~15 | 31 | v2026.4.25 | 🟢 健康 | 聚焦模型兼容性与 Windows 稳定性，修复响应迅速，稳健迭代。 |
| **NanoClaw** | 12 | 22 | 无 | 🟡 中 | 容器安全与资源限制成焦点，存在路由死循环等严重 Bug。 |
| **NanoBot** | 12 | 33 | 无 | 🟢 健康 | 吞吐能力强，生态扩展迅速，重点关注容灾与模型切换。 |
| **Moltis** | 5 | 17 | 无 | 🟢 健康 | 架构简化与 UI 优化为主，Docker 部署存在障碍，合并效率高。 |
| **NullClaw** | 0 | 0 | 无 | ⚪ 静止 | 无活动。 |
| **TinyClaw** | 0 | 0 | 无 | ⚪ 静止 | 无活动。 |

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照项目**，OpenClaw 展现出鲜明的"旗舰"特征：
*   **优势**：功能覆盖最广，率先落地实时语音通信架构和 TTS 生态集成，社区活跃度断层领先，是多模态交互的技术风向标。
*   **技术路线差异**：相比 NanoBot/Moltis 的稳健迭代，OpenClaw 选择了激进的快速发布策略，导致近期版本出现"灾难性"回归。其引入的 Gateway 中继和 Sidecar 架构比 CoPaw/Zeroclaw 更重，适合对实时性要求极高的复杂场景。
*   **社区规模对比**：Issue/PR 量级是其他项目的 5-10 倍，但也积累了最多的技术债务和用户抱怨，处于"大而不倒"但需急刹车稳质量的阶段。

## 4. 共同关注的技术方向

*   **实时语音交互能力**
    *   **涉及项目**：OpenClaw, PicoClaw, NanoClaw。
    *   **诉求**：OpenClaw 已发布实时语音架构；PicoClaw 社区强烈请求 TTS/ASR 支持；NanoClaw 合并了语音转录技能。语音正在成为 AI 助手的标配交互模式。

*   **企业级/多渠道集成**
    *   **涉及项目**：CoPaw, Zeroclaw, NanoBot。
    *   **诉求**：CoPaw 完善企微/飞书适配；Zeroclaw 突破微信个人号接入；NanoBot 扩展 SimpleX/Mattermost。智能体正加速融入现有工作流，而非仅作为独立 Web UI 存在。

*   **本地化与私有模型兼容**
    *   **涉及项目**：LobsterAI, PicoClaw, Zeroclaw, NanoBot。
    *   **诉求**：LobsterAI 修复 DeepSeek V4 支持；PicoClaw 简化 LM Studio 连接；Zeroclaw 用户受阻于 Ollama 配置。用户对数据隐私和降低 API 成本的需求推动了对本地模型集成的持续优化。

*   **长上下文与记忆管理**
    *   **涉及项目**：Hermes Agent, CoPaw, OpenClaw。
    *   **诉求**：Hermes 讨论外部记忆集成；CoPaw 修复上下文丢失；OpenClaw 遭遇 Active Memory 阻塞。随着任务复杂度提升，突破上下文窗口限制成为核心痛点。

## 5. 差异化定位分析

| 维度 | **激进先锋** (OpenClaw, Zeroclaw) | **稳健中坚** (LobsterAI, NanoBot, Moltis) | **垂直场景** (CoPaw, Hermes Agent, PicoClaw) |
| :--- | :--- | :--- | :--- |
| **功能侧重** | 追求最新特性（实时语音、微信生态）、架构宏大。 | 追求稳定性、模型兼容性、架构简化。 | 企业办公集成、多智能体协作、端侧/轻量级部署。 |
| **目标用户** | 极客、技术尝鲜者、语音交互需求者。 | 企业开发者、私有化部署用户、稳定性优先用户。 | 企业办公人群、开发者工具链、资源受限环境用户。 |
| **主要痛点** | 稳定性回归、配置复杂度高、升级阻塞。 | 功能迭代相对慢、UI 体验待提升。 | 渠道适配细节多、特定平台 Bug 修复周期长。 |

## 6. 社区热度与成熟度

*   **快速迭代/高活跃层**：**OpenClaw** 虽然质量波动，但热度最高；**PicoClaw** 处于功能爆发期，社区吞吐量巨大。
*   **稳健成长/质量巩固层**：**NanoBot** 和 **LobsterAI** 表现出极高的健康度，Bug 修复快，架构变动相对克制，适合生产环境尝试。
*   **架构重构/震荡期**：**IronClaw** 和 **Hermes Agent** 正处于底层架构大改阶段，CI 不稳定或核心机制调整导致社区出现短期不适。
*   **生态拓展期**：**CoPaw** 和 **Zeroclaw** 正努力突破渠道集成的边界，面临较多兼容性挑战。

## 7. 值得关注的趋势信号

1.  **"更新恐惧症"蔓延**：OpenClaw 用户反馈"不敢轻易更新"，Zeroclaw 新安装配置困难。这警示开发者：**快速迭代的同时必须加强回归测试和迁移脚本的支持**，否则用户信任度将严重受损。
2.  **模型适配成为隐形杀手**：DeepSeek V4、Kimi、Groq 等新模型的 API 变动频繁（如 Schema 拒绝、流式解析错误），导致多个项目（LobsterAI, PicoClaw, Zeroclaw）出现兼容性故障。**"模型无关层"的鲁棒性设计**将成为开源项目的核心竞争力。
3.  **Channel 端的"端到端"控制需求**：CoPaw 用户希望在企微/飞书内直接审批高危命令，Zeroclaw 用户渴望在 Telegram 管理记忆。用户不再满足于"Web 端管理，Channel 端使用"，**全渠道的交互一致性**是下一阶段的体验高地。
4.  **容器化部署的资源焦虑**：NanoClaw 和 OpenClaw 均提及 CPU/内存占用过高或无限循环导致宿主机崩溃。随着 Agent 任务复杂化，**资源隔离与限制（如 Memory/CPU Limits）** 将成为默认的安全标配。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-28)

## 1. 今日速览
NanoBot 项目今日保持高频迭代状态，整体健康度优秀。Issue 处理效率极高，关闭数量（8）两倍于新增数量（4），显示出维护团队对社区反馈的快速响应能力。代码提交活跃，PR 合并率达到 48%（16/33），重点围绕**多渠道适配**（Telegram, SimpleX, Mattermost）与**模型提供商兼容性**（Hugging Face, OpenAI兼容接口）进行生态扩展。此外，安全性修复与配置灵活性增强也是今日的核心亮点。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日共有 16 个 PR 成功合并，显著提升了系统的稳定性、安全性和功能丰富度：

*   **稳定性修复**：
    *   [PR #3478](HKUDS/nanobot PR #3478)：修复了 OpenAI 兼容客户端缺少请求超时设置的问题，防止 Agent 在处理大上下文请求时阻塞长达 10 分钟。
    *   [PR #3480](HKUDS/nanobot PR #3480)：修复了 OpenAI Codex Provider 在近期版本中停止流式传输进度更新的回归问题。
    *   [PR #3389](HKUDS/nanobot PR #3389)：修复了 Heartbeat 机制中的内部推理泄露及投递失败回退问题。
*   **功能增强**：
    *   [PR #3466](HKUDS/nanobot PR #3466)：新增 `/history` 斜杠命令，允许用户快速查看当前会话的最近消息记录。
    *   [PR #3483](HKUDS/nanobot PR #3483)：文档更新，增加了 OpenCode Go Provider 的配置说明。

## 4. 社区热点
今日最受关注的讨论集中在**系统容灾与高可用性**方面：

*   **[Issue #3376](HKUDS/nanobot Issue #3376) [enhancement] 支持模型异常自动切换**：该 Issue 获得了 11 条评论和 1 个点赞。用户指出当前系统在单一 Provider 故障时缺乏自动切换到备用 Provider 的能力，导致任务中断。这反映了用户将 NanoBot 用于生产环境时对**连续性**和**容错性**的强烈诉求。目前该功能尚未有合并的 PR，处于待规划状态。

## 5. Bug 与稳定性
今日修复了多个关键 Bug，同时也有新的问题浮出水面：

*   **已修复**：
    *   **网络超时阻塞**：[Issue #3455](HKUDS/nanobot Issue #3455) 报告的 AsyncOpenAI 客户端默认超时导致 Agent 循环卡死问题已通过 [PR #3478](HKUDS/nanobot PR #3478) 解决。
    *   **DeepSeek 新模型兼容**：[Issue #3474](HKUDS/nanobot Issue #3474) 反映 DeepSeek v4 模型返回空白回复，该 Issue 已关闭。
    *   **WebSocket 远程访问**：[Issue #3473](HKUDS/nanobot Issue #3473) 关于 WebUI 绑定 0.0.0.0 后 WebSocket 连接失败的问题已解决。
*   **待解决**：
    *   **Telegram 附件格式**：[Issue #3488](HKUDS/nanobot Issue #3488) 指出 Telegram 发送文档时 MIME 类型错误，目前已有对应的 [PR #3489](HKUDS/nanobot PR #3489) 提交修复，等待合并。
    *   **MCP 兼容性**：[Issue #3468](HKUDS/nanobot Issue #3468) 发现 NanoBot 未清洗 MCP 能力名称即转发给模型 API，导致工具调用失败，需关注后续修复。

## 6. 功能请求与路线图信号
从开放的 PR 和 Issue 中可以看出项目下一阶段的演进方向：

*   **多渠道支持爆发**：社区正在积极扩展通讯渠道，[PR #2592](HKUDS/nanobot PR #2592) (Mattermost) 和 [PR #3486](HKUDS/nanobot PR #3486) (SimpleX) 均处于待合并状态，预示 NanoBot 将支持更多企业级和隐私优先的聊天平台。
*   **本地与私有化模型支持**：[PR #3490](HKUDS/nanobot PR #3490) 增加了 Hugging Face Inference Provider，[PR #3491](HKUDS/nanobot PR #3491) 增加了 `extra_body` 配置支持，这极大地便利了 vLLM、Ollama 等本地推理服务器的接入。
*   **长任务与上下文管理**：[Issue #3292](HKUDS/nanobot Issue #3292) 提出的 Session-Level Focus Tool 和 [PR #3460](HKUDS/nanobot PR #3460) 提出的 LongTaskTool 表明，项目正在尝试解决 Agent 在长周期任务中的注意力涣散和历史记录管理难题。

## 7. 用户反馈摘要
*   **痛点**：用户对 Agent 的**记忆能力**表示担忧，[Issue #3484](HKUDS/nanobot Issue #3484) 指出当前的自动化任务无法保持会话历史上下文，限制了复杂自动化的实现。
*   **配置体验**：部分用户在配置远程访问（WebUI）和新型号（DeepSeek v4）时遇到阻碍，但随着 Bug 的修复，文档和错误提示有望进一步优化。
*   **积极评价**：用户对项目整体评价较高，称其为 "amazing project"（[Issue #3473](HKUDS/nanobot Issue #3473)），对新增的 `/history` 命令等用户体验改进表示欢迎。

## 8. 待处理积压
*   **重要功能请求**：[Issue #3376](HKUDS/nanobot Issue #3376)（Provider Failover）作为高关注度 Issue，目前尚未有实质性代码进展，建议维护者将其纳入近期优先级考虑。
*   **长期 PR**：[PR #2592](HKUDS/nanobot PR #2592)（Mattermost 支持）自 3 月底提交以来持续活跃，虽未合并但一直在更新，建议关注其合并进度。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-28)

## 1. 今日速览
Zeroclaw 项目今日保持极高的开发与社区活跃度，过去 24 小时内共有 43 条 Issue 更新与 45 条 PR 更新。尽管无新版本发布，但项目正处于功能密集集成与缺陷修复阶段，大量 PR（如微信渠道支持、ACP 协议升级）正处于待合并状态，预示着下一个版本将包含重大更新。社区当前关注焦点集中在**配置体验的易用性**（如新安装报错、配置文档滞后）以及**模型提供商的兼容性稳定性**上。整体来看，项目迭代速度快，但用户侧的“开箱即用”体验存在一定摩擦。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
尽管今日无合并记录显示，但已有 4 个 Issue 被关闭，且大量高优先级 PR 正在推进，显示出项目正在为下一次版本发布积蓄力量：

*   **渠道集成突破**：
    *   PR #6166 正在添加**微信个人号渠道支持**（基于 iLink Bot API），这将极大拓展 Zeroclaw 在国内即时通讯场景的应用边界。
    *   PR #6130 正在恢复曾被回滚的微信渠道代码，结合上述新 PR，显示出项目对微信生态集成的决心。
*   **核心协议与架构修复**：
    *   PR #6167 提交了 **ACP 协议 v1 版本实现**，修复了工具调用权限和回信道问题，这是 AI 智能体通信基础设施的重要更新。
    *   PR #6159 修复了 Gateway 模式下 Token 用量和成本统计归零的严重问题，提升了生产环境的可观测性。
*   **体验优化与修复**：
    *   Issue #4878 (E2EE 恢复导致加密房间失效) 和 #6077 (WebUI 清除聊天窗口功能) 已关闭，表明关键的安全功能与交互体验得到改善。
    *   PR #6164 添加了从 WebUI 手动触发 Cron 任务的功能，增强了运维便利性。

## 4. 社区热点
今日社区讨论最热烈的问题集中在阻碍用户正常使用的配置与模型接入环节：

*   **[Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) [Bug]: default_model issue on fresh install**
    *   **热度**：14 条评论
    *   **诉求**：新用户在 LXC 容器中全新安装后，配置向导无法正确识别 Ollama 模型，导致工作流直接被阻断（S1 级）。这反映出项目的初始化引导流程对本地/局域网模型探测的鲁棒性不足，影响了新用户的首次体验。
*   **[Issue #5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) release: v0.7.4 milestone tracking**
    *   **热度**：6 条评论
    *   **诉求**：社区密切关注 v0.7.4 版本的里程碑进度，特别是关于技能系统和错误的紧急修复。
*   **[Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) [Bug]: Use kimi-code provider in streaming chat call tools**
    *   **热度**：6 条评论
    *   **诉求**：在流式调用工具时，Kimi-code 提供商 API 报错，涉及 `reasoning_content` 缺失问题。用户希望官方能更好地适配不同模型提供商的特殊 API 要求。

## 5. Bug 与稳定性
今日报告了多个严重级别的 Bug，主要集中在安装、配置和 API 交互环节：

*   **严重 (S1 - 工作流阻断)**：
    *   [Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)：全新安装时默认模型配置失败，已有用户复现，**暂无 Fix PR**。
    *   [Issue #6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149)：文档中的 `config.toml` 示例与当前二进制文件不匹配，导致本地测试配置失效。
    *   [Issue #6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051)：`zeroclaw self-test` 忽略配置文件中的 IP 设置，强制使用 localhost，导致测试失败。
*   **安全/性能 (S0/S1)**：
    *   [Issue #5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125)：在 Firefox 浏览器中输入时会导致多核 CPU 飙升，存在潜在的 DoS 风险。
    *   [Issue #6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001)：Gateway 对话成功但 `/api/cost` 始终为零，且无运行日志生成。**PR #6159 已提交修复**。
*   **安装/部署问题**：
    *   [Issue #6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096)：安装脚本未解压 Web Dashboard 资源。**PR #6154 已提交修复**。

## 6. 功能请求与路线图信号
从 Issues 和 PRs 中可以窥见项目未来的发展方向：

*   **架构轻量化**：[Issue #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) 提议移除代码库中内置的工具集成，转而使用 Skills 系统，旨在打造更轻量、模块化的核心。
*   **协议支持**：PR #6167 (ACP v1) 和 PR #6140 (WASM 混合技能插件) 表明项目正在构建更标准化的智能体通信与扩展机制。
*   **内存与上下文管理**：[Issue #6150](https://github.com/zeroclaw-labs/zeroclaw/issues/6150) 请求为 Telegram/Discord 添加原生的内存清除命令；[Issue #6145](https://github.com/zeroclaw-labs/zeroclaw/issues/6145) 希望能从 WebUI 的记忆表中恢复旧对话。
*   **多语言支持**：PR #6170 正在添加简体中文 文档支持，表明项目正在重视中文社区。

## 7. 用户反馈摘要
从 Issues 评论中提炼出以下关键反馈：

*   **痛点：配置门槛高**：多位用户反馈配置文档与实际代码脱节（#6149, #6073），且 WebUI 配置编辑器存在光标错位 Bug，导致配置修改困难。
*   **痛点：模型适配困难**：用户在使用非标准 OpenAI 接口（如 Ollama, Kimi, DeepSeek）时频繁遇到流式响应解析错误（#5600, #6107），希望能增强对不同 API 规范的容错性。
*   **场景：即时通讯集成**：用户高度关注 Telegram、Discord 及 Nextcloud Talk 等渠道的稳定性（#5886, #6157），并希望在这些平台上拥有更便捷的上下文管理能力（如 /clear 命令）。

## 8. 待处理积压
以下重要 Issue 长期未得到有效解决或处于 Block 状态，需维护者关注：

*   [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)：**审计追踪**。此前因批量回滚丢失了 153 个提交，当前正在尝试恢复，该任务处于进行中但极其关键。
*   [Issue #5356](https://github.com/zeroclaw-labs/zeroclaw/issues/5356)：**Canvas 工具隔离问题**。从渠道服务器调用的 Canvas 工具与 WebSocket 客户端状态不同步，导致 Telegram/Discord 等渠道无法使用画布功能。
*   [Issue #5266](https://github.com/zeroclaw-labs/zeroclaw/issues/5266)：**Gateway 配对码缺失**。在非默认端口启动时无法显示配对码，影响多实例部署场景。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-04-28)

## 1. 今日速览
Hermes Agent 今日呈现高活跃度开发状态，Issues 与 PR 更新量均达到 50 条，显示出社区与核心团队正在紧密推进下一阶段的架构演进。核心重点在于**多智能体协作架构的落地**，以 `Kanban` 看板系统为核心的 RFC 与 PR 正在紧锣密鼓地审查中，预示着项目正从单一智能体向多配置文件协同工作流转型。同时，今日合并了关键的状态管理重构 PR，修复了长期困扰用户的数据库迁移问题，显著提升了稳定性。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 13 个 PR 被合并或关闭，主要推进了以下关键进展：

*   **核心架构修复**：PR [#16792](https://github.com/NousResearch/hermes-agent/pull/16792) 被合并，引入了声明式列协调机制，彻底解决了数据库在特定版本迁移时卡死的问题，提升了系统健壮性。
*   **Agent 健壮性提升**：PR [#11354](https://github.com/NousResearch/hermes-agent/pull/11354) 修复了用户中断 Agent 时导致对话转录损坏的严重 Bug；PR [#12751](https://github.com/NousResearch/hermes-agent/pull/12751) 修复了多模态输入中断时的崩溃问题。
*   **功能增强**：PR [#16787](https://github.com/NousResearch/hermes-agent/pull/16787) 新增了 `humanizer` 技能，用于剥离 AI 生成文本的典型特征；PR [#10834](https://github.com/NousResearch/hermes-agent/pull/10834) 改进了 TUI 界面，增加了滚动条和可配置的输入高度。
*   **Provider 支持**：PR [#10751](https://github.com/NousResearch/hermes-agent/pull/10751) 合并，增加了对 Moonshot Kimi k2.6-code-preview 模型的支持。

## 4. 社区热点
今日讨论最活跃的议题集中在**长期记忆支持**与**多智能体协作**：

*   **长期记忆支持呼声高涨**：Issue [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) (👍 24) 讨论热烈，提议集成 `mempalace` 模块以支持结构化外部记忆。这反映了用户对突破上下文窗口限制、实现跨会话连续性的迫切需求。
*   **Kanban 协作看板架构审查**：Issue [#16102](https://github.com/NousResearch/hermes-agent/issues/16102) 关联 PR [#16100](https://github.com/NousResearch/hermes-agent/pull/16100)，由核心作者 @teknium1 发起。该方案旨在引入基于 SQLite 的持久化多配置文件协作看板，是项目向 "多智能体 OS" 演进的关键一步。
*   **Windows 原生支持争议**：Issue [#8806](https://github.com/NousResearch/hermes-agent/issues/8803) (👍 5) 指出项目文档声称不支持 Windows，但实际上存在可用的 PowerShell 安装脚本，引发了对文档更新和平台支持策略的讨论。

## 5. Bug 与稳定性
今日报告了多个 P1/P2 级别的 Bug，涉及网关、配置和 Provider 兼容性：

*   **[P1] MCP 网关死锁**：Issue [#16788](https://github.com/NousResearch/hermes-agent/issues/16788) 报告当 stdio 子进程死亡时，MCP 熔断器可能导致网关永久卡死，目前暂无修复 PR。
*   **[P1] Dashboard 鉴权失败**：Issue [#16726](https://github.com/NousResearch/hermes-agent/issues/16726) 指出 v0.11+ 版本中 `/api/skills` 因 Header 大小写敏感问题返回 401。
*   **[P1] 自定义 Provider API Key 丢失**：Issue [#14065](https://github.com/NousResearch/hermes-agent/issues/14065) 报告运行时解析导致 `providers` 字典中的内联 `api_key` 丢失，影响用户自定义模型接入。
*   **[P2] 配置文件符号链接被覆盖**：Issue [#16743](https://github.com/NousResearch/hermes-agent/issues/16743) 指出原子写入机制破坏了 `config.yaml` 的符号链接，影响版本化管理配置的用户。
*   **[Security] Webhook 安全隐患**：Issue [#8820](https://github.com/NousResearch/hermes-agent/issues/8820) 指出通用 Webhook 适配器可能将攻击者控制的字段直接注入 Agent 提示词。

## 6. 功能请求与路线图信号
*   **多智能体协作**：基于 PR [#16100](https://github.com/NousResearch/hermes-agent/pull/16100)，下个版本极大概率将引入内置的任务调度看板，支持多 Agent 并行处理。
*   **上下文引擎插件化**：Issue [#5701](https://github.com/NousResearch/hermes-agent/issues/5701) 提出的“可插拔上下文引擎”与 Issue [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) 的外部记忆需求结合，显示出项目正试图解耦记忆层，以支持更复杂的 RAG 或长时记忆方案。
*   **提供商模块化重构**：PR [#14424](https://github.com/NousResearch/hermes-agent/pull/14424) 正在重构 Provider 架构，旨在将所有提供商配置模块化，这将显著降低新增模型的维护成本。

## 7. 用户反馈摘要
*   **痛点：上下文与记忆**：多位用户反馈默认的 `memory_char_limit` 设置过小（Issue [#5320](https://github.com/NousResearch/hermes-agent/issues/5320)），长对话中极易触顶，导致关键信息丢失。
*   **痛点：平台适配**：飞书 用户反馈 Markdown 表格无法渲染（Issue [#9549](https://github.com/NousResearch/hermes-agent/issues/9549)）、审批卡片更新失败（Issue [#9533](https://github.com/NousResearch/hermes-agent/issues/9533)），表明国内办公软件集成仍需打磨。
*   **混淆点**：部分用户对项目定位感到困惑，不确定其是否具备“学习能力”（Issue [#8831](https://github.com/NousResearch/hermes-agent/issues/8831)），提示文档需明确 Agent 与传统机器学习框架的区别。

## 8. 待处理积压
*   **高优先级配置丢失 Bug**：Issue [#14065](https://github.com/NousResearch/hermes-agent/issues/14065) 涉及核心配置解析，虽已提出数日，但今日仍有活跃讨论，建议优先处理。
*   **TUI 启动失败**：Issue [#15989](https://github.com/NousResearch/hermes-agent/issues/15989) 报告当工作目录包含名为 `utils/` 的 Python 包时 TUI 崩溃，属于路径解析冲突，需尽快修复。
*   **Gemini 429 错误**：Issue [#15895](https://github.com/NousResearch/hermes-agent/issues/15895) 反映 Gemini CLI OAuth 模式下频繁触发 429，影响 Google 生态用户的正常使用。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-28)

## 1. 今日速览
PicoClaw 项目今日保持了极高的活跃度与健康的迭代节奏。过去 24 小时内，项目共处理了 **108 条 Issues**（关闭 75 条，新增/活跃 33 条）和 **119 条 PRs**，Issue 关闭数远超新增数，显示出维护团队强大的吞吐能力和对技术债务的积极清理。尽管今日无新版本发布，但核心重构工作（如消息类型处理统一）已完成，社区对 TTS/ASR 支持及本地模型集成的讨论热度持续高涨。整体来看，项目正处于功能完善与稳定性修复并行的高速发展期。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日项目进展显著，主要集中在架构重构、渠道兼容性修复及用户体验优化：

*   **架构重构与优化**：PR #2680 已合并/关闭，完成了对 `tool_calls` 和 `thought` 消息类型处理的统一重构，为前端交互的标准化铺平了道路。
*   **提供商兼容性修复**：Issue #748（Groq API 工具调用格式错误）已关闭，解决了 Groq 模型无法调用工具的阻塞问题；Issue #2236（Docker 部署端口映射导致 Web 失效）也已解决，降低了 Docker 用户的部署门槛。
*   **功能迭代**：Issue #297（Logo 设计）已关闭，标志着项目视觉识别系统的确立。此外，Issue #1058（Cron 任务静默丢弃响应）已关闭，修复了定时任务在特定配置下的静默失败问题。
*   **生态拓展**：PR #2587（Web Chat 流式输出）与 PR #2603（FreeRide 自动模型切换工具）正处于活跃开发/审核阶段，有望大幅提升交互体验与模型调度鲁棒性。

## 4. 社区热点
今日社区讨论焦点集中在功能扩展与关键 Bug 修复上：

*   **[Feature] Adding TTS and ASR Support to PicoClaw** ([Issue #1648](https://github.com/sipeed/picoclaw/issues/1648))
    *   **热度**：23 评论
    *   **分析**：这是目前评论数最多的 Issue。社区强烈希望引入语音交互能力（TTS/ASR），已有相关 PR 提交但尚未合入网关。这反映了用户希望将 PicoClaw 从纯文本助手转向多模态语音助手的迫切需求。
*   **Feat Request: LM Studio Easy Connect** ([Issue #28](https://github.com/sipeed/picoclaw/issues/28))
    *   **热度**：16 评论
    *   **分析**：用户对于本地模型（如 LM Studio）的“一键连接”需求强烈。目前配置对于非技术用户仍有门槛，简化本地模型接入流程是扩大用户基群的关键。
*   **openai_compat provider never sends Authorization header** ([Issue #2578](https://github.com/sipeed/picoclaw/issues/2578))
    *   **热度**：12 评论
    *   **分析**：这是一个严重的回归问题，导致 v0.2.6 版本中所有依赖 OpenAI 兼容接口的模型认证失效。用户对此高度关注，急需官方修复确认。

## 5. Bug 与稳定性
今日报告了数个影响严重的关键 Bug，需引起注意：

*   **严重 - API Key 静默丢失** ([Issue #2578](https://github.com/sipeed/picoclaw/issues/2578))
    *   **描述**：v0.2.6 版本中，`openai_compat` 提供商在发送请求时丢弃了 `Authorization` 头，导致所有第三方 API 调用失败。
    *   **状态**：OPEN，尚未有关联 Fix PR 合并。建议回退版本或等待补丁。
*   **修复 - Gemini MCP 工具调用崩溃** ([PR #2681](https://github.com/sipeed/picoclaw/pull/2681))
    *   **描述**：使用 Gemini 模型调用复杂的 MCP 工具时会导致 HTTP 400 崩溃。
    *   **状态**：已有 Fix PR，正在审核中，引入了 Schema 清洗机制。
*   **修复 - Agent 运行时错误** ([Issue #2371](https://github.com/sipeed/picoclaw/issues/2371))
    *   **描述**：特定配置下 Agent 会触发 loop.go 中的 Panic。
    *   **状态**：CLOSED（已修复或确认为配置问题）。

## 6. 功能请求与路线图信号
根据 Issue 与 PR 动态，以下功能极有可能在近期纳入版本规划：

*   **流式输出**：PR #2587 正在为 Pico Web Chat 引入流式响应支持，这解决了用户反馈中“等待时间长”的核心痛点，预计很快合入主分支。
*   **高可用模型切换**：PR #2603 提出的 FreeRide 工具旨在实现 OpenRouter 免费模型的自动轮换与故障转移，这将显著提升免费用户的使用体验。
*   **Seahorse 记忆系统**：Issue #1919 已关闭，虽然状态显示关闭，但结合“生物启发式记忆系统”的提案，该方向（上下文压缩与长期记忆）极有可能是后续 Agent 智能化演进的核心路线。

## 7. 用户反馈摘要
*   **痛点：缺乏过程反馈**：多位用户在 Issue #571 中反馈，Agent 在执行长时间工具调用时界面静止无响应，导致用户不知道是卡死还是运行中，体验极差。
*   **痛点：配置复杂**：Issue #28 和 #2368 反映了配置流程对小白用户不够友好，特别是在 Android 客户端和本地模型接入方面，存在“配置了却提示未配置”的困惑。
*   **满意度**：用户对 PicoClaw 的多渠道支持表示认可，同时对即将到来的流式输出（#2587）和语音支持（#1648）充满期待。

## 8. 待处理积压
以下重要 Issue 长期未得到彻底解决或合并，建议维护团队关注：

*   **[Task] self-upgrade support** ([Issue #618](https://github.com/sipeed/picoclaw/issues/618))：自升级功能对于持续交付至关重要，目前仍处于待办状态。
*   **[Feature] Integrate Authula into PicoClaw** ([Issue #1067](https://github.com/sipeed/picoclaw/issues/1067))：目前的 CLI 缺乏鉴权机制，存在安全隐患，随着项目受众扩大，安全性加固迫在眉睫。
*   **[Feature] Add progress feedback during tool execution** ([Issue #571](https://github.com/sipeed/picoclaw/issues/571))：这是一个高影响度的 UX 问题，目前处于 Stale 状态，建议重新激活并评估解决方案。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是 NanoClaw 项目 2026-04-28 的动态日报：

---

# NanoClaw 项目日报 (2026-04-28)

## 1. 今日速览
NanoClaw 项目今日保持高活跃度，社区贡献主要集中在**功能增强**与**安装部署体验优化**。过去 24 小时内共有 22 个 PR 更新与 12 个 Issue 更新，显示出项目正处于快速迭代期。关键进展包括 Telegram 适配器的正式合并、容器资源限制功能的引入以及 LXC 环境下的部署修复。虽然未发布新版本，但多项关键修复已合并，显著提升了系统稳定性与安全性。

## 2. 版本发布
**无新版本发布**。尽管有大量代码合并，官方尚未打 tag 发布新版本，预计将在当前积压的依赖 PR 合并后进行发布。

## 3. 项目进展
今日共有 **6 个 PR 合并/关闭**，显著推进了多渠道支持与底层稳定性：

*   **渠道支持扩充**：PR [#2049](https://github.com/qwibitai/nanoclaw/pull/2049) 正式合并了 Telegram 频道适配器，包含配对流程与 Markdown 净化功能，标志着项目对主流即时通讯平台的支持更加完善。
*   **长期稳定性修复**：PR [#987](https://github.com/qwibitai/nanoclaw/pull/987) 合并，解决了长运行实例会话日志过大导致上下文丢失的问题，引入了会话大小轮转机制，这对生产环境至关重要。
*   **语音能力集成**：PR [#1326](https://github.com/qwibitai/nanoclaw/pull/1326) 合并了通用的语音转录技能，支持本地 Whisper.cpp 和 OpenAI API 后端。
*   **时区与同步修复**：PR [#1997](https://github.com/qwibitai/nanoclaw/pull/1997) 修复了非 UTC 主机上的 SQLite 时间解析问题；PR [#2050](https://github.com/qwibitai/nanoclaw/pull/2050) 修复了 RooSync 中 @mention 唤醒失败的问题。

## 4. 社区热点
今日讨论主要集中在安全性与架构设计上：

*   **容器安全隔离**：Issue [#2029](https://github.com/qwibitai/nanoclaw/issues/2029) 引发了关于 Agent 容器资源限制的热议。由于当前容器无资源上限，存在宿主机 OOM 或 Fork Bomb 风险。PR [#2068](https://github.com/qwibitai/nanoclaw/pull/2068) 随即提出了解决方案，增加了 `--memory`, `--cpus`, `--pids-limit` 配置，受到社区高度关注。
*   **自修改机制缺陷**：Issue [#2051](https://github.com/qwibitai/nanoclaw/issues/2051) 报告了 `add_mcp_server` 工具将参数数组错误序列化为字符串的问题，导致容器启动失败。这触及了 Agent 自我修改能力的可靠性痛点，目前尚无修复 PR。

## 5. Bug 与稳定性
今日报告了多个影响使用的 Bug，按严重程度排列如下：

*   **🔴 严重 - 路由死循环**：Issue [#2048](https://github.com/qwibitai/nanoclaw/issues/2048) 报告 `install_packages` 审批流程会触发 Agent 间无限自路由循环，导致 Telegram 消息投递完全阻塞。
    *   *状态*：Open，暂无修复 PR。
*   **🔴 严重 - 启动失败**：Issue [#2051](https://github.com/qwibitai/nanoclaw/issues/2051) 指出 `add_mcp_server` 会破坏 `container.json` 配置文件，导致后续所有 Agent 启动失败。
    *   *状态*：Open，暂无修复 PR。
*   **🟡 中等 - 调度任务可见性**：Issue [#2067](https://github.com/qwibitai/nanoclaw/issues/2067) 揭示了 v2 架构中调度任务绑定至 Session 导致跨线程不可见的问题，影响多线程协作场景。
    *   *状态*：Open。
*   **🟡 中等 - 附件迁移丢失**：Issue [#2047](https://github.com/qwibitai/nanoclaw/issues/2047) 指出迁移后 WhatsApp 附件路径未挂载。
    *   *状态*：Open，已有相关修复 PR [#2070](https://github.com/qwibitai/nanoclaw/pull/2070) 提交，待合并。

## 6. 功能请求与路线图信号
*   **资源管控**：Issue [#2029](https://github.com/qwibitai/nanoclaw/issues/2029) 提出的资源限制需求已有对应实现 PR [#2068](https://github.com/qwibitai/nanoclaw/pull/2068)，预计近期合并，这将是生产环境部署的重要里程碑。
*   **Web Chat 客户端**：PR [#2069](https://github.com/qwibitai/nanoclaw/pull/2069) 提交了 WebChat 技能，表明社区正在扩展除 IM 之外的交互界面。
*   **Google Chat 支持**：Issue [#2058](https://github.com/qwibitai/nanoclaw/issues/2058) 请求在自动安装脚本中增加 Google Chat 选项，反映了用户对企业级通讯工具的集成需求。

## 7. 用户反馈摘要
*   **部署体验**：用户在 LXC 容器中部署遇到困难（Systemd 挂起、Polkit 噪音），反馈在 Issue [#2057](https://github.com/qwibitai/nanoclaw/issues/2057) 等一系列 Issue 中，社区成员 `@dooha333` 已提交系列修复 PR，显示项目正在补齐非 Docker 环境的支持短板。
*   **迁移痛点**：Issue [#2047](https://github.com/qwibitai/nanoclaw/issues/2047) 反映了用户在版本迁移过程中遇到的路径挂载遗漏问题，说明迁移脚本的健壮性有待加强。
*   **配置易用性**：Issue [#2046](https://github.com/qwibitai/nanoclaw/issues/2046) 指出 OneCLI 标识符格式（下划线 vs 连字符）不统一导致认证失败，表明不同组件间的接口规范仍需对齐。

## 8. 待处理积压
*   **PR 队列拥堵**：目前有 **16 个待合并 PR**，其中包括关键的资源限制修复 [#2068](https://github.com/qwibitai/nanoclaw/pull/2068) 和安装流程修复组（#2052-#2057）。建议维护者优先 Review 这些阻塞发布的 PR。
*   **长期未决**：Issue [#2067](https://github.com/qwibitai/nanoclaw/issues/2067) 提出的 v2 调度任务架构问题涉及数据存储模型重构，需要维护者确认解决方案方向。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-28)

## 1. 今日速览
IronClaw 项目今日保持**高活跃度**，核心开发重心明显向代号为 **"Reborn"** 的新架构迁移倾斜。过去24小时内 PR 更新量高达 34 条，显示出团队正在密集提交基础架构代码。关键进展包括 "Reborn" 基础 Crates 的合并以及任务调度模块的时区修复。与此同时，CI/CD 流水线的 Canary 测试频频报错，OAuth 认证与 Provider 兼容性稳定性面临挑战，需引起维护者重视。

## 2. 版本发布
过去24小时内无新版本发布。

## 3. 项目进展
今日共有 7 个 PR 被合并或关闭，主要推进了架构重构与核心 Bug 修复：

*   **架构重构**: 核心 PR [#2988](https://github.com/nearai/ironclaw/pull/2988) 已合并，引入了 `ironclaw_host_api`、`ironclaw_resources` 等基础 Crates，标志着 "Reborn" 架构正式落地基础层。相关文档 PR [#2983](https://github.com/nearai/ironclaw/pull/2983) 也已关闭，为合约冻结提供了审查包。
*   **关键修复**: PR [#2989](https://github.com/nearai/ironclaw/pull/2989) 修复了引擎 V2 中任务每日预算计数器无法重置的严重 Bug，解决了任务被永久阻塞的问题。
*   **工具与权限**: PR [#2994](https://github.com/nearai/ironclaw/pull/2994) 修正了 V2 引擎中 `tool_info` 的查找逻辑；PR [#2978](https://github.com/nearai/ironclaw/pull/2978) 修复了 Bridge 重启时的审批逻辑漏洞。

## 4. 社区热点
今日讨论热度最高的是关于 **"Reborn" 架构落地策略** 的规划：

*   **[Issue #2987](https://github.com/nearai/ironclaw/issues/2987) [OPEN]**: 该 Issue 详细规划了如何将庞大的 "Reborn" 架构堆栈拆分为可审查的集成计划，避免审查人员面对巨大的单一 PR。这反映了项目正在进行大规模的工程化管理重构，评论数达 7 条，是目前讨论最活跃的议题。
*   **模型配置困惑**: **[Issue #1697](https://github.com/nearai/ironclaw/issues/1697) [OPEN]** 仍有用户反馈在使用 Codex 或 GPT-5.4 mini 作为基座模型时遇到配置困难，CLI 显示异常，表明文档或配置向导的易用性有待提升。

## 5. Bug 与稳定性
今日报告了多个影响系统稳定性的 Bug，尤其是升级迁移和 CI 环境方面：

*   **[严重] 升级迁移数据错乱**: **[Issue #2982](https://github.com/nearai/ironclaw/issues/2982)** 报告从 0.24.0 升级至 0.26.0 后，现有的 Routine 被错误分类为 Mission，导致聊天功能异常。这是一个破坏性的升级回归问题。
*   **[中等] V2 审批流故障**: **[Issue #2991](https://github.com/nearai/ironclaw/issues/2991)** 指出 V2 引擎的审批流程存在提示不清晰、路由错误及强制串行执行的问题，严重影响用户体验。
*   **[CI/基础设施] Canary 频繁失败**:
    *   **[Issue #3005](https://github.com/nearai/ironclaw/issues/3005)**: `private-oauth` 流水线失败。
    *   **[Issue #2977](https://github.com/nearai/ironclaw/issues/2977)**: `openai-compatible` provider 测试失败。
    *   **[Issue #2887](https://github.com/nearai/ironclaw/issues/2887)**: Google OAuth 在 CI Runner 上遭遇机器人检测拦截，导致自动化测试无法通过。
*   **[已修复] 每日预算耗尽**: **[Issue #1945](https://github.com/nearai/ironclaw/issues/1945)** 报告的 V2 引擎每日任务计数器不重置问题，已通过 PR #2989 修复。

## 6. 功能请求与路线图信号
*   **Reborn 架构拆分**: 基于 Issue #2987 的规划，未来版本将重点关注模块化架构的逐步落地。目前待合并的 PR 包括 **[#2993](https://github.com/nearai/ironclaw/pull/2993)** (事件/审计层) 和 **[#2996](https://github.com/nearai/ironclaw/pull/2996)** (文件系统层)，这表明项目正致力于提升系统的可扩展性与稳定性。
*   **图像工具独立配置**: **[PR #3004](https://github.com/nearai/ironclaw/pull/3004)** 提议将图像工具配置从聊天 LLM 路由中剥离，支持 OpenAI 兼容端点。这信号着项目将支持更灵活的多模态模型配置，有望在下一版本中纳入。

## 7. 用户反馈摘要
*   **升级痛点**: 用户在升级到最新版本（0.26.0）时遇到了严重的兼容性问题（Routine 变 Mission），反映出版本迁移脚本的缺失或缺陷。
*   **配置门槛**: 部分高级用户尝试接入非默认模型（如 Codex, GPT-5.4 mini）时感到困惑，目前的 CLI 配置流程未能很好地引导用户识别正确的模型名称格式。
*   **V2 引擎体验**: 测试人员反馈 V2 引擎的审批流交互设计存在逻辑缺陷，导致操作流程卡顿，亟待 UX 优化。

## 8. 待处理积压
*   **CI 自动化受阻**: Issue **[#2887](https://github.com/nearai/ironclaw/issues/2887)** 涉及 Google OAuth 在 CI 环境下的机器人检测问题，已持续数日，需尽快寻找绕过方案或 Mock 策略以恢复 CI 稳定性。
*   **模型支持文档**: Issue **[#1697](https://github.com/nearai/ironclaw/issues/1697)** 自 3 月底开启至今，关于自定义模型的接入文档仍不完善，建议维护者补充相关指南。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-28)

## 1. 今日速览
LobsterAI 今日保持了极高的开发活跃度，共处理了 31 个 PR（其中 17 个已合并），主要聚焦于 **模型兼容性修复**、**Windows 平台稳定性** 以及 **系统安全性增强**。项目成功修复了社区关注的 DeepSeek V4 模型调用失败问题，并针对 Windows 环境下的启动超时和文件系统锁死问题进行了深度优化。尽管社区对新功能需求（如 UI 美化）有所增加，但核心团队当前的重心明显在于夯实基础架构与修复回归 Bug，整体处于“稳健迭代与质量收敛”阶段。

## 2. 版本发布
- **版本号**: `2026.4.25`
- **发布时间**: 2026-04-25 (为最近发布的正式版本)
- **更新重点**:
  - **功能增强**: 增加了 Memory Search 的 Embedding 配置支持，提升了记忆检索能力。
  - **Bug 修复**: 修复了 Cowork 模式下 Edit Tool 的 `edits-array` 输入格式问题，恢复了 DiffView 功能。
- **注意**: 该版本主要为功能完善，未见破坏性变更，建议用户尽快升级以获得更好的记忆检索体验。

## 3. 项目进展
今日共有 **17 个 PR 成功合并**，项目在多平台兼容性与模型调度逻辑上取得显著进展：
- **模型兼容性突破**: PR [#1847](https://github.com/netease-youdao/LobsterAI/pull/1847) 修复了自定义模型供应商使用 DeepSeek V4 时的 Schema 报错问题，直接回应了 Issue [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813)。
- **会话模型管理重构**: 合并了 PR [#1850](https://github.com/netease-youdao/LobsterAI/pull/1850) 和 [#1843](https://github.com/netease-youdao/LobsterAI/pull/1843)，解耦了首页模型选择与会话配置，修复了并行会话模型互相干扰的问题，确保会话模型选择的持久化。
- **Windows 平台体验优化**: 
  - PR [#1846](https://github.com/netease-youdao/LobsterAI/pull/1846) 延长了 Windows 启动超时时间并增加了诊断日志，缓解了冷启动失败问题。
  - PR [#1851](https://github.com/netease-youdao/LobsterAI/pull/1851) 修复了 Windows 上 Skill 目录删除时的文件锁死问题。
- **安全性增强**: PR [#1844](https://github.com/netease-youdao/LobsterAI/pull/1844) 增强了日志脱敏机制，防止 API Key 等敏感信息泄露。

## 4. 社区热点
- **[Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813)**: **DeepSeek V4 调用失败**。这是今日热度最高的问题，用户反馈使用 DeepSeek V4 时出现 provider rejected schema 错误。该问题已在今日通过 PR #1847 修复，体现了团队对社区反馈的快速响应能力。
- **[Issue #1849](https://github.com/netease-youdao/LobsterAI/issues/1849)**: **追问时无限 NO_REPLY**。今日新开 Issue，用户报告在连续对话中出现模型“静默”或输出截断，严重影响使用体验，目前尚无官方回复，需重点关注。
- **[Issue #1836](https://github.com/netease-youdao/LobsterAI/issues/1836)**: **UI 美化建议**。用户直言当前 UI 相比竞品“过于丑”，虽然主观，但反映了用户对视觉体验的高期待，目前已有 1 条评论讨论。

## 5. Bug 与稳定性
今日报告的新 Bug 及修复情况如下：

- **🔴 严重**:
  - [Issue #1849](https://github.com/netease-youdao/LobsterAI/issues/1849): **追问时无限 NO_REPLY 或输出中断**。
    - 状态: Open
    - 详情: 任务被提前 complete 导致页面无响应。
    - 修复: 尚无。
  
- **🟠 中等**:
  - [Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813): **DeepSeek V4 无法使用**。
    - 状态: Open (已修复)
    - 修复: 已通过 [PR #1847](https://github.com/netease-youdao/LobsterAI/pull/1847) 合并修复，等待发版。
  - [Issue #955](https://github.com/netease-youdao/LobsterAI/issues/955): **私有部署模型无法调用 Skill**。
    - 状态: Closed
    - 详情: 私有部署 Qwen 模型调用工具失败。

- **🟢 已修复**:
  - Windows 启动超时/失败 ([PR #1846](https://github.com/netease-youdao/LobsterAI/pull/1846))。
  - 并行会话模型选择串台问题 ([PR #1845](https://github.com/netease-youdao/LobsterAI/pull/1845))。

## 6. 功能请求与路线图信号
- **UI/UX 改进**: Issue #1836 提出了对界面设计的重构需求。虽然目前团队重心在功能修复，但随着功能成熟，UI 优化可能会被提上日程。
- **定时任务增强**: [PR #1519](https://github.com/netease-youdao/LobsterAI/pull/1519) 提出了自定义 Cron 调度功能，目前处于 Open 状态，显示项目正在增强自动化任务能力。
- **安全加固**: [PR #1833](https://github.com/netease-youdao/LobsterAI/pull/1833) 提议为 `shell.openExternal` 增加 scheme 白名单，防止恶意链接调用本地文件或协议，建议尽快合并以提升安全性。

## 7. 用户反馈摘要
- **痛点**:
  - **模型连接稳定性**: 用户在使用最新模型（如 DeepSeek V4）或私有部署模型时，频繁遇到 Schema 不匹配或工具调用失败，表明项目在模型适配层的鲁棒性仍需加强。
  - **响应中断**: Issue #1849 反映的“输出截断/无响应”问题打击了用户对对话连续性的信任。
  - **部署门槛**: Issue #100 和 #17 显示部分用户在本地打包（DMG）或启动时遇到阻塞，主要涉及依赖环境或 Electron 打包配置。
- **满意点**:
  - 项目更新频率高，Bug 修复响应快（如 DeepSeek V4 问题在 2 天内修复）。
  - 支持 Qwen 等私有部署模型受到关注，说明开源/私有化场景是核心用户群体。

## 8. 待处理积压
- **Stale Issues**: 
  - [Issue #73](https://github.com/netease-youdao/LobsterAI/issues/73) 和 [Issue #17](https://github.com/netease-youdao/LobsterAI/issues/17) 长期未解决（标记为 stale），涉及启动死循环和核心不可用问题，建议维护者进行清理或确认是否已在新版本修复。
  - [Issue #100](https://github.com/netease-youdao/LobsterAI/issues/100) 关于 macOS DMG 打包报错，建议补充文档指引。
- **Pending PRs**:
  - [PR #1833](https://github.com/netease-youdao/LobsterAI/pull/1833) (安全性修复) 和 [PR #1519](https://github.com/netease-youdao/LobsterAI/pull/1519) (Cron 功能) 已有一段时间未更新，建议进行 Code Review 推进合并。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-28)

## 1. 今日速览
Moltis 项目今日保持**高活跃度**，开发迭代速度显著加快。过去 24 小时内，项目处理了 17 个 PR（其中 12 个已合并/关闭），并关闭了 4 个 Issue，展现出维护者高效的代码审查与合并能力。核心进展集中在**架构简化**（移除 "primary identity" 概念）、**UI/UX 修复**（恢复会话重命名功能）以及**构建优化**（模块可选化、清理生成文件）。虽然出现了两个新的部署相关 Bug，但整体项目健康度良好，功能迭代与缺陷修复同步推进。

## 2. 版本发布
**无新版本发布**。尽管合并了大量代码，官方尚未发布新的 Release 版本。

## 3. 项目进展
今日共有 **12 个 PR 被合并或关闭**，主要推进了以下关键领域：

*   **核心架构重构**：PR [#898](https://github.com/moltis-org/moltis/pull/898) 合并，实现了 Issue #774 提出的架构简化。移除了 "primary identity" 概念，将 "main" agent 转变为标准的数据库记录，统一了代理路由逻辑。这是降低系统复杂度的关键一步。
*   **UI 功能修复与增强**：
    *   PR [#892](https://github.com/moltis-org/moltis/pull/892) 修复了 PR #886 引入的回归问题，恢复了聊天工具栏中的会话名称显示与重命名功能。
    *   PR [#897](https://github.com/moltis-org/moltis/pull/897) 优化了 Skills UI，修复了错误显示为 `[object Object]` 的问题，并增加了安装时的自动信任机制。
*   **构建与部署优化**：
    *   PR [#891](https://github.com/moltis-org/moltis/pull/891) 和 [#899](https://github.com/moltis-org/moltis/pull/899)（Open）致力于将通讯渠道设为编译期可选，以减少二进制文件体积。
    *   PR [#895](https://github.com/moltis-org/moltis/pull/895) 清理了约 92k 行生成的 JS/CSS 代码，优化了 Git 仓库体积。
*   **安全性与稳定性**：PR [#894](https://github.com/moltis-org/moltis/pull/894) 添加了回归测试，确保安全 Hook 的 Block 操作不会触发断路器，修复了 Issue #547 潜在的安全风险。

## 4. 社区热点
*   **架构简化讨论** ([#774](https://github.com/moltis-org/moltis/issues/774))：该 Issue 于今日关闭，对应 PR #898 的合并。社区/维护者对于移除冗余的 "primary agent" 概念达成共识，认为这能显著减少系统的笨重感。
*   **会话名称丢失问题** ([#888](https://github.com/moltis-org/moltis/issues/888))：用户 @Cstewart-HC 报告了 UI 回归问题，指出 PR #886 导致会话无法编辑。维护者 @penso 迅速响应并在 PR #892 中修复，体现了对用户体验的重视。
*   **命令面板功能** ([PR #904](https://github.com/moltis-org/moltis/pull/904))：新增 `Cmd+K` 命令面板功能，这是一个现代化的 UI 改进，旨在提升高级用户的操作效率。

## 5. Bug 与稳定性
今日报告的新 Bug 主要集中在部署与集成环境，已有部分得到快速修复：

*   **严重 - Docker 构建失败** ([#896](https://github.com/moltis-org/moltis/issues/896)) [OPEN]：
    *   **现象**：Docker 构建过程中 `apt-get update` 失败，报错 "Temporary failure resolving 'ports.ubuntu.com'"。
    *   **状态**：待处理。这可能是网络配置或 Dockerfile 构建环境的问题，影响用户部署。
*   **中等 - Telegram 集成问题** ([#905](https://github.com/moltis-org/moltis/issues/905)) [OPEN]：
    *   **现象**：用户报告 Telegram 存在问题（详情见 Issue 描述）。
    *   **状态**：待处理。恰逢今日有将 Telegram 设为可选模块的 PR 合并，需排查是否有关联。
*   **已修复 - UI 会话重命名失效** ([#888](https://github.com/moltis-org/moltis/issues/888)) [CLOSED]：
    *   由 PR #892 修复，确认为 UI 层面的回归。
*   **已修复 - Matrix OIDC 登录失败** ([PR #893](https://github.com/moltis-org/moltis/pull/893)) [CLOSED]：
    *   修复了反向代理场景下的 `invalid_redirect_uri` 错误。

## 6. 功能请求与路线图信号
*   **代码索引自动化** ([PR #903](https://github.com/moltis-org/moltis/pull/903))：
    *   **信号**：开发者正致力于消除手动索引操作。PR #903（目前 Open）提议增加启动、创建及定时的自动索引触发机制，并包含文件监听器。
    *   **判断**：此前有 #900, #901, #902 三个 PR 被关闭，说明该功能正在积极迭代修正，极有可能在近期合并。
*   **Web 端文件上传** ([PR #876](https://github.com/moltis-org/moltis/pull/876))：
    *   **信号**：用户对 Web UI 的交互体验有更高要求，希望像主流 LLM 一样直接上传文件。该 PR 目前 Open，正在推进中。
*   **命令面板** ([PR #904](https://github.com/moltis-org/moltis/pull/904))：
    *   **信号**：项目 UI 正向着桌面级应用体验演进，提升操作便捷性。

## 7. 用户反馈摘要
*   **部署痛点**：用户 @orangesoncom 反馈 Docker 构建时的网络解析问题，表明在容器化部署的默认配置或网络环境适配方面仍存在障碍。
*   **UI 敏感度**：用户对 UI 的变化非常敏感（如 Issue #888 立即指出了会话名消失的问题），说明 Session 管理是核心交互流程中的高频功能。
*   **期待简化**：Issue #774 的关闭反映了用户（包括开发者）希望底层架构更轻量、逻辑更直观的诉求。

## 8. 待处理积压
*   **部署阻塞问题**：Issue [#896](https://github.com/moltis-org/moltis/issues/896) (Docker Build Fail) 需要尽快处理，这直接阻碍了新用户的上手体验。
*   **功能 PR 审查**：
    *   PR [#903](https://github.com/moltis-org/moltis/pull/903) (Auto-indexing) 和 PR [#904](https://github.com/moltis-org/moltis/pull/904) (Command Palette) 均为重要功能更新，目前处于 Open 状态，等待最终审查合并。
    *   PR [#876](https://github.com/moltis-org/moltis/pull/876) (File Upload) 已挂起数日，建议维护者关注进度。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-28)

## 1. 今日速览
CoPaw 项目今日保持高活跃度开发状态，Issues 与 PR 更新量均达到 50 条，呈现出“高频交互、快速迭代”的特征。过去 24 小时内，项目成功关闭了 25 个 Issues 并合并/关闭了 29 个 PRs，显示出维护团队在处理社区反馈方面的高效响应能力。尽管无新版本发布，但从 PR 动向来看，开发重心集中在修复关键性上下文丢失 Bug、优化 Web UI 性能以及完善多渠道（企微、QQ、飞书）适配。整体项目健康度良好，正处于为新版本积累功能的阶段。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 项目进展
今日共有 29 个 PR 被合并或关闭，另有 21 个新 PR 处于待合并状态，项目在以下几个关键领域取得了实质性进展：

*   **核心稳定性修复**：针对用户反馈严重的“上下文丢失导致无限循环”问题，社区贡献者提交了 PR [#3895](https://github.com/agentscope-ai/QwenPaw/pull/3895)，通过引入保留限制机制防止工具结果过长导致的上下文截断，大幅提升了 Agent 执行长链路任务的稳定性。
*   **渠道适配优化**：PR [#3903](https://github.com/agentscope-ai/QwenPaw/pull/3903) 修复了企微群聊中 `@提及` 前缀导致命令无法识别的问题；PR [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) 修复了 QQ 频道语音消息映射错误并增加了 SILK 格式支持；PR [#3890](https://github.com/agentscope-ai/QwenPaw/pull/3890) 解决了飞书频道表情回应事件的日志噪音问题。
*   **前端体验重构**：PR [#3897](https://github.com/agentscope-ai/QwenPaw/pull/3897) 解决了打开聊天页面时重复请求模型列表导致的性能浪费；PR [#3876](https://github.com/agentscope-ai/QwenPaw/pull/3876) 将模型选择器重构为可搜索的平面列表，提升了用户交互体验。
*   **底层架构改进**：PR [#3882](https://github.com/agentscope-ai/QwenPaw/pull/3882) 重构了上下文管理器，增加了压缩回退机制，增强了系统在极端情况下的容错能力。

## 4. 社区热点
今日社区讨论主要集中在功能边界与多渠道使用体验上：

*   **高危命令审批机制争议**：Issue [#3869](https://github.com/agentscope-ai/QwenPaw/issues/3869) 引发了关于“Channel 侧高危命令批准能力”的热议。用户指出当前只能在 Web 控制台批准高危操作严重限制了 Channel（如飞书、钉钉）的可用性，尤其是在移动端或外部网络环境下。这反映了用户对移动端“端到端”控制能力的强烈诉求。
*   **品牌命名困惑**：Issue [#3430](https://github.com/agentscope-ai/QwenPaw/issues/3430) 再次被激活，用户对 CoPaw 与 QwenPaw 的关系及维护策略表示困惑。考虑到 Issues 链接中普遍出现 `QwenPaw` 字样，项目方需明确品牌定位以消除用户疑虑。
*   **安全规则误杀**：Issue [#3709](https://github.com/agentscope-ai/QwenPaw/issues/3709) 报告了禁用安全规则后仍被拦截的问题，涉及 Git 自动化脚本执行场景，引发了关于安全守卫灵活性的讨论。

## 5. Bug 与稳定性
今日报告了多个影响体验的关键 Bug，部分已有修复方案：

*   **[严重] 会话历史消失**：Issue [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) 报告在对话过程中历史记录突然消失，严重破坏用户使用连贯性。目前尚无修复 PR，需优先关注。
*   **[严重] Web UI 暂停功能失效**：Issue [#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) 指出点击暂停仅停止前端渲染，后端 Agent 仍在执行并消耗资源，导致暂停按钮形同虚设。
*   **[严重] Chromadb 进程崩溃**：Issue [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) 报告在 Linux 环境下 Chromadb Rust 绑定导致 SIGSEGV 崩溃，直接终结进程，影响长期记忆功能。
*   **[中等] 企微审批命令失效**：Issue [#3901](https://github.com/agentscope-ai/QwenPaw/issues/3901) 反映企微群聊中 `/approval approve` 命令无法识别。**已有修复 PR [#3903](https://github.com/agentscope-ai/QwenPaw/pull/3903)**。
*   **[中等] 配置丢失**：Issue [#3824](https://github.com/agentscope-ai/QwenPaw/issues/3824) 报告切换页面或重启服务后，Agent 的语言、计划模式等配置丢失。
*   **[已修复] 上下文丢失循环**：针对 Issue 中反馈的上下文问题，PR [#3895](https://github.com/agentscope-ai/QwenPaw/pull/3895) 已提交修复方案。

## 6. 功能请求与路线图信号
结合 Issue 与 PR，以下功能方向清晰可见：

*   **移动端/Channel 侧审批能力**：用户强烈希望在飞书、钉钉等 Channel 端直接进行高危命令审批，而非跳转 Web Console。这是提升易用性的关键一步。
*   **更广泛的模型/API 支持**：Issue [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) 请求支持 Kimi Code API，Issue [#3753](https://github.com/agentscope-ai/QwenPaw/issues/3753) 询问火山 Coding Plan 支持，显示用户对模型后端多样性的需求持续增长。
*   **实时 Token 消耗监控**：Issue [#3366](https://github.com/agentscope-ai/QwenPaw/issues/3366) 建议在 UI 中增加 Token 实时消耗显示，这与 PR [#3889](https://github.com/agentscope-ai/QwenPaw/pull/3889) 提出的“进度观察钩子”在体验优化方向上不谋而合，有望在下个版本中看到相关进展。
*   **Proactive 消息多渠道支持**：Issue [#3804](https://github.com/agentscope-ai/QwenPaw/issues/3804) 请求 Proactive 主动消息支持自定义发送频道，显示用户对主动触发场景的扩展需求。

## 7. 用户反馈摘要
从今日的 Issues 评论中可以提炼出以下核心痛点：

*   **“假暂停”带来的资源焦虑**：用户对暂停功能仅作用于前端感到担忧，特别是在执行耗时任务（如代码执行、文件搜索）时，无法及时止损浪费了计算资源。
*   **配置持久化信任危机**：多位用户反馈（如 #3824, #3817）配置丢失问题，尤其是向量模型和 Agent 设置，导致每次重启都需要重新配置，严重打击用户留存信心。
*   **MCP 连接稳定性**：Issue [#3822](https://github.com/agentscope-ai/QwenPaw/issues/3822) 反映 MCP 部署后偶发无限卡死，导致聊天不可用，表明在复杂外部工具集成场景下稳定性仍有待提高。
*   **UI 性能瓶颈**：Issue [#3830](https://github.com/agentscope-ai/QwenPaw/issues/3830) 提到长会话切换时 GUI 卡顿严重，PR [#3897](https://github.com/agentscope-ai/QwenPaw/pull/3897) 的优化尝试正是对此的回应。

## 8. 待处理积压
*   **Issue [#3430](https://github.com/agentscope-ai/QwenPaw/issues/3430) [OPEN]**：关于 CoPaw 与 QwenPaw 关系的疑问已存在两周，虽评论活跃但未见官方明确文档说明，建议维护者尽快补充 ReadMe 或文档澄清，以消除社区困惑。
*   **Issue [#3822](https://github.com/agentscope-ai/QwenPaw/issues/3822) [OPEN]**：MCP 导致聊天卡死问题提供了详细的错误日志，涉及 `stateful_client.py`，严重影响特定插件用户，需尽快介入排查。
*   **Issue [#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) [OPEN]**：暂停功能失效属于严重的 UX 回归，目前仅前端修复建议，后端执行流的中断机制亟待实现。

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