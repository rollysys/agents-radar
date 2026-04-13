# OpenClaw 生态日报 2026-04-13

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-13 02:56 UTC

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

# OpenClaw 项目动态日报 (2026-04-13)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，过去24小时内 Issues 与 PR 更新数均达到 500 条，显示出社区与开发团队紧密的互动节奏。项目发布了 **v2026.4.12-beta.1** 版本，重点重构了插件加载机制，旨在提升启动性能与安全性，但也可能引入破坏性变更。社区焦点集中在 **GPT-5.4 智能体对齐**、**跨平台客户端支持**以及**实时语音交互**等核心功能的讨论与实现上。整体来看，项目正处于功能快速迭代与稳定性优化的并行期，但也暴露出部分版本升级带来的回归问题。

## 2. 版本发布
### v2026.4.12-beta.1
本次更新涉及核心架构调整，建议开发者重点关注。

*   **主要变更**：重构插件加载逻辑 (`Plugins/loading`)。现在 CLI、Provider 和 Channel 的激活被严格限制在 manifest 声明的范围内，同时保留了显式的作用域和信任边界。
*   **影响分析**：
    *   **安全性提升**：集中化的 manifest-owner 策略避免了加载不相关的运行时，减少了潜在的攻击面。
    *   **启动优化**：命令发现和启动激活流程更加精简，预计将缩短启动时间。
    *   **破坏性变更**：未在 manifest 中正确声明依赖的第三方插件可能失效，建议插件开发者立即检查并更新插件的 `manifest.json` 文件。
*   **相关 PR**: [#65120](https://github.com/openclaw/openclaw/pull/65120), [#65259](https://github.com/openclaw/openclaw/pull/65259)

## 3. 项目进展
今日共有 203 个 PR 被合并或关闭，多项关键功能与修复落地：

*   **稳定性增强**：合并了 [PR #43961](https://github.com/openclaw/openclaw/pull/43961)，修复了 Gateway 在优雅关闭超时后可能残留进程的问题，现在会强制发送 SIGKILL，解决了重启/停止时的端口占用隐患。
*   **Bug 修复**：
    *   修复了 Cron 任务在调用 OpenAI `gpt-5-nano` 时发送错误 `thinking` 参数导致失败的问题 ([Issue #63918](https://github.com/openclaw/openclaw/issues/63918))。
    *   修复了 `memory-core` dreaming 提升逻辑中因 `recallCount` 无法累积导致候选数为 0 的问题 ([Issue #64068](https://github.com/openclaw/openclaw/issues/64068))。
*   **功能迭代**：
    *   Google Chat 频道适配器修复了启动崩溃和文本丢失问题 ([PR #65570](https://github.com/openclaw/openclaw/pull/65570))。
    *   WebUI 媒体支持得到大幅增强，现已支持多种图片、音频和视频格式的流式传输 ([PR #65554](https://github.com/openclaw/openclaw/pull/65554))。

## 4. 社区热点
今日讨论最热烈的议题反映了用户对平台能力边界的迫切期待：

1.  **跨平台客户端支持** ([Issue #75](https://github.com/openclaw/openclaw/issues/75))
    *   **热度**：评论 81 条，👍 68
    *   **诉求**：用户强烈呼吁提供 Linux 和 Windows 原生客户端，以补齐目前仅支持 macOS、iOS 和 Android 的短板。这是长期存在的痛点，涉及桌面端覆盖。
2.  **GPT-5.4 / Codex 智能体对齐** ([Issue #64227](https://github.com/openclaw/openclaw/issues/64227))
    *   **热度**：评论 26 条
    *   **诉求**：核心议题在于让 GPT-5.4 在 OpenClaw 中的表现达到 Claude 级别的智能体水平，包括主动工具使用、多步任务执行能力等。配套的 PR ([PR #65634](https://github.com/openclaw/openclaw/pull/65634), [PR #65591](https://github.com/openclaw/openclaw/pull/65591)) 正在推进混合人格模式和减少不必要的确认暂停。
3.  **实时语音对话支持** ([Issue #7200](https://github.com/openclaw/openclaw/issues/7200))
    *   **热度**：评论 19 条，👍 19
    *   **诉求**：用户希望不仅限于语音消息，而是实现类似电话的双向流式实时语音通话（通过 Twilio/WebRTC）。这是向全双工交互迈进的关键需求。

## 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，部分已定位并有修复方案：

*   **🔴 严重回归 | 智能体通信中断** ([Issue #52875](https://github.com/openclaw/openclaw/issues/52875))
    *   现象：升级后主智能体无法联系其他智能体，提示 "session not found"。
    *   状态：Open，暂无修复 PR，建议用户暂缓升级或关注后续补丁。
*   **🟡 运维受阻 | Logs 命令失效** ([Issue #44714](https://github.com/openclaw/openclaw/issues/44714))
    *   现象：升级后 `openclaw logs --follow` 握手超时，Gateway 本身健康。
    *   状态：Open，影响调试效率。
*   **🟡 功能缺陷 | Slack Socket Mode 消息丢失** ([Issue #28037](https://github.com/openclaw/openclaw/issues/28037))
    *   现象：连接成功但消息未路由至智能体。
    *   状态：Open，影响 Slack 集成可用性。
*   **🟢 已修复 | Context 消耗过快** ([Issue #1594](https://github.com/openclaw/openclaw/issues/1594))
    *   现象：长对话导致 Context 迅速耗尽。
    *   状态：Closed，已通过优化上下文管理解决。

## 6. 功能请求与路线图信号
从 Issue 和 PR 动向可以看出项目未来的演进方向：

*   **企业级集成 (中国市场)**：[PR #62489](https://github.com/openclaw/openclaw/pull/62489) 正在添加企业微信 频道支持，这对于 OpenClaw 在中国企业的落地至关重要。
*   **MCP 协议原生支持**：[Issue #29053](https://github.com/openclaw/openclaw/issues/29053) (👍 19) 呼吁原生支持 MCP Client。这表明用户希望 OpenClaw 能打破壁垒，连接更广泛的工具生态。
*   **多智能体协作**：[Issue #10010](https://github.com/openclaw/openclaw/issues/10010) 提出的 Agent Teams 并行协调需求，以及正在进行的 GPT-5.4 对齐工作，预示着项目正在从单一智能体向多智能体系统演进。
*   **混合模型架构**：[PR #65591](https://github.com/openclaw/openclaw/pull/65591) 提出的 "Hybrid personality mode"（GPT-5.4 执行 + GPT-5.2 人格）展示了一种通过共享 KV Cache 降低成本并优化体验的创新思路。

## 7. 用户反馈摘要
*   **上下文管理痛点**：用户反馈在长对话中 Context 极易耗尽 ([Issue #64250](https://github.com/openclaw/openclaw/issues/64250))，甚至出现重置后仍无法恢复的情况，对记忆机制的鲁棒性提出更高要求。
*   **权限审批繁琐**：[Issue #59510](https://github.com/openclaw/openclaw/issues/59510) 指出当前的 exec 命令审批流程过于繁琐，希望增加类似白名单的批量授权机制，以提升自动化工作流的流畅度。
*   **插件兼容性困扰**：部分用户反馈自定义 Provider 配置在 image tool 中无效 ([Issue #31486](https://github.com/openclaw/openclaw/issues/31486))，这可能与新版本的插件加载策略调整有关，用户需检查配置格式。

## 8. 待处理积压
*   **Linux/Windows 客户端需求** ([Issue #75](https://github.com/openclaw/openclaw/issues/75))：评论数极高，长期未解决，严重影响非 macOS 用户的体验，建议维护者将其纳入长期路线图。
*   **MCP Client 原生支持** ([Issue #29053](https://github.com/openclaw/openclaw/issues/29053))：高优先级的生态兼容需求，目前标记为 Stale，建议团队重新评估其优先级。
*   **Context 窗口溢出处理** ([Issue #50065](https://github.com/openclaw/openclaw/issues/50065))：直接会话在超出上下文窗口时未能及时压缩，导致行为异常，这是核心稳定性问题，需尽快处理。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-04-13)

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于从"对话工具"向"自主智能体平台"演进的关键转型期。**OpenClaw** 凭借极高的迭代速度和 GPT-5.4 等前沿模型的集成占据领跑地位，引领多模态与多智能体协作方向；**Zeroclaw** 和 **IronClaw** 则分别从微内核架构和浏览器自动化方向深耕底层能力；**CoPaw (QwenPaw)** 通过品牌重塑加速生态绑定。整体来看，行业焦点已从单一模型调用转向**长期记忆管理、多模型路由、跨平台集成及自动化执行**等纵深能力的构建。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 (更新/新增/关闭) | PRs 活跃度 (更新/合并) | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **极高** (>500 更新) | **极高** (>500 更新, 203 合并) | v2026.4.12-beta.1 | ⚠️ 活跃但存在严重回归 Bug |
| **IronClaw** | 高 (16 更新) | 高 (50 更新, 2 合并) | 无 | 🟡 PR 积压严重 (40 open)，架构重构期 |
| **Hermes Agent** | 高 (50 更新) | 中 (50 更新, 10 合并) | 无 | 🔴 Issue 积压超 1000，维护压力大 |
| **CoPaw (QwenPaw)** | 高 (18 互动) | 高 (28 更新, 10 合并) | **v1.1.0** | 🟢 品牌升级成功，迁移期有阵痛 |
| **Moltis** | 中 (9 关闭) | 高 (16 合并) | **20260413.01** | 🟢 架构解耦顺利，质量与速度并重 |
| **Zeroclaw** | 高 (42 关闭) | 中 (19 合并) | 无 | 🟢 高效治理，聚焦架构 RFC |
| **NanoBot** | 中 (22 更新) | 中 (118 更新, 19 合并) | 无 | 🟡 PR 积压 (99 open)，稳定性优先 |
| **PicoClaw** | 中 (11 新增) | 中 (7 合并) | v0.2.6-nightly | 🟢 快速迭代，扩展边缘计算场景 |
| **LobsterAI** | 低 (3 更新) | 中 (8 更新, 2 合并) | 待发布 | 🟢 侧重 UI/UX 打磨 |
| **NanoClaw** | 低 | 低 (9 更新, 6 合并) | 无 | 🟢 架构优化，降本增效 |
| **NullClaw** | 低 | 无合并 | 无 | 🟡 稳中有进，聚焦自动化 |
| **TinyClaw** | 极低 (1 新增) | 无 | 无 | 🔵 维护期，功能冻结 |
| ZeptoClaw / EasyClaw | 无活动 | 无活动 | 无 | ⚪ 暂无动态 |

## 3. OpenClaw 在生态中的定位

*   **核心参照地位**：OpenClaw 在活跃度、社区规模和功能广度上均处于绝对领先地位，是生态内的"风向标"。其率先适配 GPT-5.4 和探索 GPT-5.4/Codex 混合架构，确立了技术前沿的形象。
*   **优势**：生态集成最广（企业微信、Slack、实时语音），插件化架构成熟，具备强大的多智能体协作潜力。
*   **技术路线差异**：相比 **Zeroclaw** 的微内核治理路线和 **IronClaw** 的重型浏览器自动化，OpenClaw 更侧重于**模型能力的快速对齐与全渠道覆盖**。相比 **Hermes** 专注 IM 适配，OpenClaw 追求全平台原生客户端。
*   **风险**：高速迭代带来了严重的稳定性隐患（如智能体通信中断、日志失效），其"快速试错"模式与 **Zeroclaw** 的"架构优先"模式形成鲜明对比。

## 4. 共同关注的技术方向

1.  **长期记忆与上下文工程**：
    *   **项目**：OpenClaw, PicoClaw, NanoClaw, IronClaw.
    *   **趋势**：单纯依赖模型上下文窗口已无法满足需求。**PicoClaw** 引入 SQLite Seahorse 引擎，**NanoClaw** 移除 LLM 依赖改用 SQLite 摘要，**IronClaw** 推进可配置记忆洞察。行业共识是建立**持久化、可检索的分层记忆系统**。
2.  **多模型路由与成本优化**：
    *   **项目**：NanoBot, NanoClaw, OpenClaw, CoPaw.
    *   **趋势**：用户不再满足于单一模型。**NanoBot** 提出模型路由需求，**OpenClaw** 实践混合人格模式（GPT-5.4 + GPT-5.2），旨在通过任务分级降低 Token 成本并提升响应速度。
3.  **自动化与后台调度**：
    *   **项目**：OpenClaw, NullClaw, Moltis.
    *   **趋势**：智能体正从被动响应转向主动执行。**NullClaw** 构建 Cron 引擎，**Moltis** 修复持久化问题，**OpenClaw** 修复 Cron 任务 Bug，均指向"Agent as a Service"的后台化运行能力。
4.  **跨平台/跨端集成**：
    *   **项目**：OpenClaw, Hermes, PicoClaw, Moltis.
    *   **趋势**：即时通讯平台仍是核心入口。**OpenClaw** 补齐 Linux/Windows 客户端，**Hermes** 修微信适配，**PicoClaw** 支持 Signal，**Moltis** 集成 Nostr，显示去中心化协议和主流 IM 并行发展。

## 5. 差异化定位分析

*   **全能型生态**：追求全功能覆盖，强调渠道与模型支持广度，适合作为通用底座，但需警惕稳定性风险。
*   **垂直场景型**：
    *   **Hermes Agent**：深耕微信/飞书等国内 IM 生态，解决本土化痛点。
    *   **IronClaw**：聚焦 Web 自动化（浏览器、CDP），主打复杂任务执行。
    *   **PicoClaw**：瞄准边缘计算（Android, OpenWrt），轻量化部署优势明显。
*   **架构驱动型**：
    *   **Zeroclaw**：发起微内核 RFC，追求代码治理与长期可维护性，适合追求稳定架构的开发者。
    *   **NanoClaw**：致力于架构解耦与成本控制，强调轻量级运行。
*   **大模型绑定型**：
    *   **CoPaw (QwenPaw)**：深度融合 Qwen 生态，享受模型能力溢出的红利。

## 6. 社区热度与成熟度

*   **快速迭代期 (活跃/激进)**：
    *   **OpenClaw, CoPaw, PicoClaw**：社区反馈热烈，版本更新频繁，新功能上线快，但伴随较多 Bug 和回归问题，适合尝鲜用户和早期采用者。
    *   **Moltis**：功能交付节奏稳健，兼顾新特性与修复，处于良性上升期。
*   **架构重构期 (稳健/调整)**：
    *   **Zeroclaw, IronClaw, NanoClaw**：核心精力在底层重构（微内核、Engine v2、双层架构），Issue/PR 积压较多但质量要求高，适合核心开发者参与共建。
*   **维护/瓶颈期**：
    *   **Hermes Agent**：面临严重的 Issue 积压（>1000），维护压力巨大，急需社区分流或官方治理介入。
    *   **TinyClaw, NullClaw, LobsterAI**：活跃度较低，处于功能完善或小步快跑阶段。

## 7. 值得关注的趋势信号

1.  **过程透明度成为刚需**：
    *   信号：**TinyClaw** 要求展示工具详情，**NullClaw** 请求进度流，**IronClaw** 用户希望查看思考链。
    *   **洞察**：用户对 Agent "黑盒"操作的容忍度在降低。未来的 Agent 产品需在设计上主动暴露思维链、工具调用参数及执行进度，以建立用户信任。
2.  **企业级适配与私有化部署痛点凸显**：
    *   信号：**OpenClaw** 用户呼吁 Linux/Windows 客户端，**PicoClaw** 用户在 OpenWrt 上挣扎，**NanoBot** 用户请求模型路由以降本。
    *   **洞察**：开源 Agent 正大规模进入企业生产环境，对**跨平台兼容性、成本控制（路由）、私有化部署** 的需求正在超越对单纯模型智商的追求。
3.  **记忆系统的"去模型化"**：
    *   信号：**NanoClaw** 用 SQLite 替代 LLM 做上下文摘要，**PicoClaw** 引入 Seahorse 引擎。
    *   **洞察**：为了降低延迟和成本，记忆管理（检索、压缩、存储）正从依赖 LLM 转向依赖传统数据库和确定性算法，这是架构成熟化的标志。
4.  **安全边界的动态博弈**：
    *   信号：**OpenClaw** 收紧插件权限，**Moltis** 加固 SSRF 防御，**NanoClaw** 探索突破容器隔离。
    *   **洞察**：Agent 的能力越强（如浏览器、Shell），安全限制与功能释放之间的冲突就越激烈。如何在"安全沙箱"与"直达主机"之间找到平衡，将是未来通用 Agent 的核心设计难题。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-13)

## 1. 今日速览
NanoBot 项目今日保持高度活跃，共处理 **22 条 Issues** 和 **118 条 PRs** 更新，其中 **19 条 PRs** 成功合并。项目完成了 Nightly 分支的例行刷新与同步（#3071），并在架构健壮性与生态兼容性上取得重要进展。社区方面，用户对**模型路由（成本优化）**与**上下文管理**的关注度显著提升，同时核心开发者正致力于修复影响用户体验的“无限循环”与“数据持久化”问题。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 19 个 PR 合并，主要集中在**稳定性修复**与**Provider 生态扩展**，项目整体质量稳步提升。

*   **架构与数据安全**：合并了关键 PR #3076，修复了 Agent 在运行 Turn Loop 前未持久化用户消息的问题，防止崩溃导致上下文丢失；合并 PR #3053，修复了多渠道异常处理导致的重试放大和消息丢失问题。
*   **生态兼容性**：合并 PR #3043，支持自定义 Provider 名称及工作区命令加载，极大增强了多 API 接入的灵活性；合并 PR #3079 和 #3075，分别优化了 MCP 协议污染提示和本地模型（如 Ollama）的 502 错误恢复指引。
*   **Bug 修复**：合并 PR #2877 修复 Matrix 频道配置映射错误；合并 PR #2860 解决了版本号不同步问题；合并 PR #2859 增强了工具调用参数校验。

## 4. 社区热点
*   **[Feature] 模型路由功能请求** (Issue #3070)
    用户提议引入类似 OpenRouter 的模型路由机制，根据任务复杂度自动选择高性价比模型以节省 Token 成本。这反映了用户将 NanoBot 从“玩票”转向“生产环境”的成本控制需求。
*   **[Architecture] 双层架构重构** (PR #1224)
    该长期 PR 仍在活跃更新，旨在引入 Steering Loop 实现动态任务中断与接管。这是社区高度关注的架构级改进，预计将显著提升 Agent 的交互可控性。
*   **[Bug] Agent 陷入无限读取循环** (Issue #3073)
    用户报告 Agent 在查询历史记录时陷入死循环，引发了对 Agent 自我纠错能力的讨论。维护者已提交 PR #3077 尝试修复。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及**逻辑死循环**与**数据持久化**，部分已有修复方案：

*   **严重** - **Agent 无限循环** (Issue #3073)：Agent 在读取 `history.jsonl` 时重复调用相同参数导致卡死。
    *   *状态*：已提交修复 PR #3077（检测并强制跳出机制）。
*   **严重** - **心跳机制重复创建任务** (Issue #3028)：系统心跳触发时重复创建定时任务，导致消息重复发送，影响正常使用。
    *   *状态*：Open，待确认修复。
*   **高危** - **Memory 被清空** (Issue #2957)：用户报告 `MEMORY.md` 被意外覆写为空白。
    *   *状态*：Closed（建议通过 PR #3076 等持久化改进预防）。
*   **中等** - **Ollama 连接 502** (Issue #3069)：本地模型连接失败且提示不清晰。
    *   *状态*：已通过 PR #3075 改善错误提示。

## 6. 功能请求与路线图信号
*   **智能路由与成本控制** (Issue #3070)：用户希望内置模型路由功能。目前 PR #2996 正在推进 Fallback 模型支持，虽侧重容灾，但架构上为路由功能奠定了基础。
*   **自动上下文压缩** (Issue #2984)：针对 128k Token 耗尽的问题，用户请求自动压缩机制。PR #3052 正在推进 LLM-Wiki 归档功能，可视为上下文管理的某种延伸解决方案。
*   **MiniMax 推理模型支持** (Issue #3068)：请求支持 MiniMax 的 Anthropic 兼容端点。PR #3078 已提交代码支持，预计很快合并。

## 7. 用户反馈摘要
*   **痛点：数据丢失焦虑**：多位用户反馈在任务中断或 `/stop` 后丢失上下文（#3028, #2957），对 Session 持久化的稳定性要求极高。
*   **痛点：定时任务噪音**：用户希望定时任务能静默执行，不汇报中间思考过程或成功提示（#3066, #3064），这反映了将 Agent 用于后台自动化服务的需求。
*   **好评：代码可读性**：Issue #2989 中用户称赞 NanoBot 的 Python 代码库比竞品更整洁易懂，降低了二次开发门槛。

## 8. 待处理积压
当前待合并 PR 数量高达 **99 条**，建议维护者关注以下积压项目：
*   **PR #2996** (Fallback Models)：核心功能，影响生产环境高可用性。
*   **PR #3001** (Session 级内存隔离)：解决多渠道串话问题，对多租户场景至关重要。
*   **Issue #2757** (OpenAI max_tokens)：自 04-02 开启至今未解决，影响部分模型调用兼容性。

---
*以上数据由 AI 分析师生成，基于 GitHub 项目公开数据。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-13)

## 1. 今日速览
Zeroclaw 项目今日呈现出极高的维护活跃度与战略转型迹象。过去 24 小时内，项目关闭了 **42 个 Issue**，解决了大量积压的 Bug 与功能请求，同时有 **19 个 PR** 被合并，显示出核心团队高效的代码审查与合并节奏。当前仍有 **31 个 PR** 处于待合并状态，表明开发管线充盈。最引人注目的是社区核心成员发起了一系列关于 v1.0.0 的架构治理 RFC（征求意见稿），预示着项目正从单纯的功能堆叠转向系统性的微内核架构重构与治理规范化。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 19 个 PR 被合并，重点推进了稳定性修复与架构重构的前置工作：

*   **关键修复合并**：
    *   **防止 Cron 作业内存膨胀**：PR #5664 已合并，修复了 Cron 任务因继承全局 `auto_save` 配置导致递归记忆膨胀的问题，显著提升了长期运行稳定性。
    *   **频道配置完善**：PR #5659 已合并，为 Email 和 VoiceCall 频道添加了 `enabled` 字段支持，完善了频道编排逻辑。
*   **架构重构推进**：
    *   **硬件向导重构**：PR #5656 已合并，将硬件向导 UI 逻辑从 `main.rs` 迁移至独立模块，提升了代码模块化程度，符合微内核解耦方向。
*   **待合并的重要 PR (Open)**：
    *   **Mattermost 通讯升级**：PR #5602 正在将 Mattermost 频道从 REST 轮询迁移至 WebSocket，这将显著降低延迟并支持私信功能。
    *   **安装脚本重写**：PR #5666 提议重写 `install.sh` 以适配新的工作空间拆分，是架构调整的重要基础设施更新。
    *   **内存上下文优化**：PR #5632 和 #5631 旨在优化用户消息自动保存机制，解决上下文重复注入导致的指数级膨胀问题。

## 4. 社区热点
今日讨论最活跃的议题集中在项目未来的架构治理与 v1.0.0 路线图：

*   **[RFC] 微内核过渡 (v0.7.0 → v1.0.0)** ([#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574))
    *   **热度**：评论 5 条
    *   **分析**：由 @WareWolf-MoonWall 发起，提议将代码库从"响应式增长"转向"有意架构"，实施微内核化。这是今日最具战略意义的讨论，标志着项目将进行深层次的重构，旨在提升系统的模块化与可维护性。
*   **[RFC] 项目治理与团队协调** ([#5577](https://github.com/zeroclaw-labs/zeroclaw/issues/5577))
    *   **热度**：评论 3 条
    *   **分析**：伴随架构调整，社区开始讨论"软件项目失败往往归因于人而非代码"，提议建立明确的贡献流程与治理结构，显示出项目正逐步走向成熟。
*   **[RFC] 文档标准与知识架构** ([#5576](https://github.com/zeroclaw-labs/zeroclaw/issues/5576))
    *   **热度**：评论 3 条
    *   **分析**：强调文档是产品本身的一部分，而非代码的附庸。提议建立标准化的文档结构与国际化 (i18n) 策略。

## 5. Bug 与稳定性
今日修复了大量影响用户体验的 Bug，整体稳定性大幅提升：

*   **S0 - 已修复**：
    *   **CPU 飙升问题** ([#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125))：修复了 Firefox 浏览器下在 Agent 聊天窗口输入导致多核 CPU 飙升的严重性能问题。
    *   **多实例配置冲突** ([#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605))：修复了多实例部署时因硬编码路径导致的安全风险与配置覆盖问题。
*   **S1 - 已修复**：
    *   **本地 LLM 连接超时** ([#5578](https://github.com/zeroclaw-labs/zeroclaw/issues/5578))：修复了无法连接本地 llama.cpp 服务器的问题，改善了本地模型使用体验。
    *   **Shell 工具 JSON 解析错误** ([#5553](https://github.com/zeroclaw-labs/zeroclaw/issues/5553))：修复了 Telegram 频道返回原始 JSON 而非解析结果的阻塞性问题。
*   **S2 - 已修复**：
    *   **Groq Provider 400 错误** ([#5670](https://github.com/zeroclaw-labs/zeroclaw/issues/5670))：解决了 Groq 提供商的兼容性问题。
    *   **DeepSeek 工具调用失败** ([#5268](https://github.com/zeroclaw-labs/zeroclaw/issues/5268))：修复了上下文压缩导致 `tool_call_id` 丢失，进而引发 DeepSeek API 报错的问题。
    *   **端口冲突** ([#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628))：修复了 Daemon 服务开机自启导致手动运行时端口被占用的问题。

## 6. 功能请求与路线图信号
结合 Issue 与 PR 动态，以下功能点极有可能被纳入下个版本：

*   **Telegram 语音转录**：Issue #5509 虽已关闭，但结合社区对 Telegram 功能补全的讨论，相关功能可能已通过其他方式实现或正在集成中。
*   **Web Chat 图片支持**：Issue #5649 提出的剪贴板粘贴与拖拽图片功能请求，契合 Web UI 改进方向，目前有对应的待合并 PR 解决相关问题。
*   **Mattermost 私信支持**：PR #5602 的 WebSocket 重构将引入对私信和全频道监听的支持，这是用户强烈需求的功能。
*   **SQLite 向量搜索加速**：Issue #5570 提出使用 ANN 索引替代暴力扫描，这是性能优化的关键方向，预计将进入 v0.7.0 的优化清单。

## 7. 用户反馈摘要
*   **性能痛点**：用户反馈项目编译速度极慢，修改一行代码需要全量编译 ([#5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575))，影响了二次开发的积极性。
*   **模型兼容性**：Ollama 用户遇到模型支持硬编码问题 ([#5500](https://github.com/zeroclaw-labs/zeroclaw/issues/5500))，指出 Ollama 提供商强制关闭了原生工具调用支持，限制了模型能力。
*   **部署体验**：用户在使用 Docker/Systemd 部署时遇到端口冲突和配置路径问题 ([#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628))，显示出在运维友好度上仍有提升空间。
*   **积极信号**：用户积极参与 RFC 讨论，对项目架构转型表示支持，表明核心用户群对项目质量有较高期待。

## 8. 待处理积压
*   **关键待合并 PR**：PR #5517（配置模式版本控制 V1→V2 迁移）和 PR #5166（Matrix 频道大修）已开放数日，涉及核心逻辑变更，需维护者尽快审查合并，避免功能分支滞后。
*   **长期未解 Issue**：Issue #5575（编译效率低下）虽已关闭，但其描述的 Rust 编译时间问题是否得到实质性解决仍需观察，建议持续关注开发体验优化。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-04-13)

## 1. 今日速览
Hermes Agent 项目今日维持高热度活跃状态，过去24小时内共有 50 条 Issue 更新和 50 条 PR 更新，但新开 Issue 数量（32）显著多于已关闭数量（18），导致 Issue 积压量突破 1000 大关，社区对项目维护压力表示担忧。尽管没有新版本发布，社区贡献依然强劲，共有 10 个 PR 被合并或关闭，主要集中在微信/飞书等平台适配器的修复与 Web UI 功能的探索。整体来看，项目处于快速迭代期，但认证稳定性（Claude 订阅）和跨平台 UI 体验是目前用户反馈最集中的痛点。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日共有 10 个 PR 被合并或关闭，显著推进了多平台兼容性与系统稳定性：

*   **微信适配器重大修复**：PR [#8665](https://github.com/NousResearch/hermes-agent/pull/8665) 合并，修复了流式输出时光标卡死、媒体文件上传 404、Markdown 链接渲染及空白消息等四大核心问题，显著提升了微信生态下的使用体验。
*   **依赖安全与构建修复**：PR [#8745](https://github.com/NousResearch/hermes-agent/pull/8745) 修复了 npm 审计漏洞；PR [#8602](https://github.com/NousResearch/hermes-agent/pull/8602) 修复了 Docker 构建和锁文件的不可复现问题，保障了部署的稳定性。
*   **配置验证增强**：PR [#8747](https://github.com/NousResearch/hermes-agent/pull/8747) 增加了对本地媒体路径的验证，防止路径遍历攻击，提升了系统安全性。

## 4. 社区热点
今日讨论最活跃的议题集中在功能缺口与认证故障：

*   **[Feature] Web UI Gateway (Issue [#501](https://github.com/NousResearch/hermes-agent/issues/501))**：评论数达 10 条。用户强烈呼吁引入本地 Web UI 界面，认为这是与 Claude 等竞品对齐的关键缺失功能，目前 CLI 门槛较高。
*   **Claude 订阅认证故障 (Issue [#6475](https://github.com/NousResearch/hermes-agent/issues/6475))**：评论 8 条，获 9 个赞。用户反馈即使重启或重新登录，仍持续报错 `HTTP 400: You're out of extra usage`，严重阻碍了付费用户的使用。
*   **Issue 积压超 1000 (Issue [#7335](https://github.com/NousResearch/hermes-agent/issues/7335))**：社区成员警示开放 Issue 数量已突破 1000，呼吁维护者采取措施控制增长，反映了项目规模扩大后的维护压力。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及认证、内存检索及平台适配，部分已有修复方案：

1.  **[严重] Claude 订阅认证失效** (Issue [#6475](https://github.com/NousResearch/hermes-agent/issues/6475))：Anthropic 订阅用户无法正常调用 API，暂无修复 PR。
2.  **[严重] OpenViking 内存检索归零** (Issue [#8742](https://github.com/NousResearch/hermes-agent/issues/8742), [#8739](https://github.com/NousResearch/hermes-agent/issues/8739))：`_tenant_filter` 中 `account_id` 硬编码不匹配导致无法读取记忆，严重影响 Agent 上下文连贯性。
3.  **[中等] 微信平台适配问题**：
    *   Issue [#7468](https://github.com/NousResearch/hermes-agent/issues/7468)：消息格式从结构化表格退化为碎片气泡，相关修复已在 PR [#8665](https://github.com/NousResearch/hermes-agent/pull/8665) 中提交。
    *   Issue [#7569](https://github.com/NousResearch/hermes-agent/issues/7569)：微信群消息监听失效。
4.  **[中等] 上下文长度配置被忽略** (Issue [#8430](https://github.com/NousResearch/hermes-agent/issues/8430))：自定义模型设置 `context_length` 无效，导致长上下文模型报错。
5.  **[安全] macOS 敏感文件写入绕过** (Issue [#8746](https://github.com/NousResearch/hermes-agent/pull/8746))：通过符号链接绕过 `/etc` 写入限制，已有 PR 等待合并。

## 6. 功能请求与路线图信号
用户对易用性和平台扩展提出了明确需求：

*   **Web UI 控制台**：Issue [#501](https://github.com/NousResearch/hermes-agent/issues/501) 和 [#8118](https://github.com/NousResearch/hermes-agent/issues/8118) 均提出需要 Web Dashboard。PR [#5163](https://github.com/NousResearch/hermes-agent/pull/5163) 正尝试实现 "Skills Hub" 现代化 GUI，这极有可能是下一阶段的重点功能。
*   **Windows 原生支持**：Issue [#8720](https://github.com/NousResearch/hermes-agent/issues/8720) 指出目前仅支持 WSL 导致文件操作割裂，呼吁原生 Windows 支持。
*   **迁移工具**：PR [#8732](https://github.com/NousResearch/hermes-agent/pull/8732) 正在引入模块化迁移命令 `hermes migrate`，旨在解决跨机器/跨平台迁移痛点。

## 7. 用户反馈摘要
*   **痛点**：
    *   **认证困扰**：Claude 订阅用户在使用 Hermes 时频繁遇到额度误判，体验受挫。
    *   **本地化体验差**：中国用户反馈微信、飞书适配存在诸多细节 Bug（如图片灰显、格式混乱、群聊监听失效），且缺乏飞书云文档创建能力 (Issue [#7642](https://github.com/NousResearch/hermes-agent/issues/7642))。
    *   **配置复杂**：用户反馈 `uv run` 每次启动都检查依赖且强制联网 (Issue [#8744](https://github.com/NousResearch/hermes-agent/issues/8744))，以及 systemd 服务安装路径错误 (Issue [#7976](https://github.com/NousResearch/hermes-agent/issues/7976))，增加了部署难度。
*   **满意点**：用户对 Hermes 的核心 Agent 能力表示认可，将其视为强大的自动化工具，但在 GUI 和特定平台适配上仍有很大提升空间。

## 8. 待处理积压
*   **Issue 积压预警**：开放 Issue 数量突破 1000 (Issue [#7335](https://github.com/NousResearch/hermes-agent/issues/7335))，建议维护团队关注 Issue 分类与响应机制，避免社区活跃度下降。
*   **长期功能缺口**：Web UI 功能 (Issue [#501](https://github.com/NousResearch/hermes-agent/issues/501)) 自 3 月创建至今未关闭，社区关注度极高，需尽快给出明确路线图。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-13)

## 1. 今日速览
PicoClaw 项目今日保持高活跃度，开发迭代速度显著加快。过去 24 小时内，项目合并了 7 个 PR，其中包括备受期待的 **Seahorse 短期记忆引擎** 和 **Signal 消息通道支持**，标志着项目在 Agent 记忆管理和通讯生态上迈出关键一步。与此同时，社区反馈热烈，新开 11 个 Issue，主要集中在 Android/OpenWrt 等特定平台的兼容性以及本地模型工具调用的稳定性上。 nightly 版本 `v0.2.6-nightly.20260413` 已发布，集成了最新特性。

## 2. 版本发布
- **[nightly: Nightly Build](https://github.com/sipeed/picoclaw/releases/tag/nightly)**
  - **版本号**: `v0.2.6-nightly.20260413.6d037919`
  - **更新说明**: 自动化构建版本，包含最新的代码提交。
  - **注意事项**: 可能存在不稳定性，建议测试环境使用。此次构建包含 Seahorse 记忆引擎等核心改动，建议关注后续稳定版发布。

## 3. 项目进展
今日共有 7 个 PR 合并，主要聚焦于核心架构增强与生态扩展：

1.  **Agent 记忆系统重构**: PR [#2285](https://github.com/sipeed/picoclaw/pull/2285) 成功合并，引入了基于 SQLite 的 Seahorse 短期记忆引擎 (LCM)，实现了上下文压缩与全文搜索，大幅提升了 Agent 的长对话处理能力。
2.  **新增 Signal 通道**: PR [#630](https://github.com/sipeed/picoclaw/pull/630) 合并，正式支持 Signal 消息渠道，扩展了 PicoClaw 作为个人助理的触达场景。
3.  **Gemini 模型适配优化**: PR [#2475](https://github.com/sipeed/picoclaw/pull/2475) 修复了 Gemini provider 的兼容性问题，分离了思考链 与普通回复，解决了 Issue [#2448](https://github.com/sipeed/picoclaw/issues/2448) 中的 UI 显示混乱问题。
4.  **Android 平台支持**: PR [#1960](https://github.com/sipeed/picoclaw/pull/1960) 和 [#2486](https://github.com/sipeed/picoclaw/pull/2486) 完善了 Android ARM64 的构建目标与交叉编译支持，为移动端部署打下基础。
5.  **CLI 体验优化**: PR [#2229](https://github.com/sipeed/picoclaw/pull/2229) 合并，引入结构化终端 UI，解决了 Issue [#2202](https://github.com/sipeed/picoclaw/issues/2202) 提出的可读性需求。
6.  **文档修正**: PR [#2494](https://github.com/sipeed/picoclaw/pull/2494) 修复了贡献指南中的链接错误。

## 4. 社区热点
今日讨论最活跃的话题集中在模型兼容性与特定平台部署：

1.  **LM Studio 连接需求**: Issue [#28](https://github.com/sipeed/picoclaw/issues/28) 自 2 月提出以来持续收到反馈（11 条评论），用户普遍希望简化本地模型对接流程。这反映了 PicoClow 用户群对隐私和本地部署的强烈需求。
2.  **本地模型工具调用故障**: Issue [#2482](https://github.com/sipeed/picoclaw/issues/2482) 报告了基于 OpenAI 后端的本地权重模型（如 mlx-lm）无法正常进行 Tool Calls，显示出开源模型生态兼容性仍是技术难点。
3.  **多飞书应用支持**: Issue [#2493](https://github.com/sipeed/picoclaw/issues/2493) 提出了多飞书实例的管理需求，反映了企业级或多账户场景的使用诉求。

## 5. Bug 与稳定性
今日报告的 Bug 涵盖了安装、运行时逻辑及特定平台兼容性，部分已有关联修复 PR：

- **[高] OpenWrt ARM64 网络故障**: Issue [#2488](https://github.com/sipeed/picoclaw/issues/2488) 报告在 OpenWrt 23.05 上启动后无法接受 TCP 连接，导致服务不可用。
- **[高] Skill 装备逻辑覆盖**: Issue [#2478](https://github.com/sipeed/picoclaw/issues/2478) 指出多次执行 `/use <skill>` 会覆盖之前的配置，影响 Agent 工具链组合使用。
- **[中] WebUI 输入框禁用**: Issue [#2354](https://github.com/sipeed/picoclaw/issues/2354) 反馈 WebUI 无法输入，疑似前端状态异常。
- **[中] Nvidia API 调用失败**: Issue [#2479](https://github.com/sipeed/picoclaw/issues/2479) 报告 Nvidia API 返回 404 错误，可能涉及端点适配问题。
- **[修复中] MCP 工具重载丢失**: Issue [#2489](https://github.com/sipeed/picoclaw/pull/2489) 已提交修复，解决了 `/reload` 后 MCP 工具消失的回归问题。
- **[修复中] Windows 构建失败**: PR [#2487](https://github.com/sipeed/picoclaw/pull/2487) 正在修复 Windows 平台的构建流程问题。

## 6. 功能请求与路线图信号
结合 Issues 与活跃 PR，发现以下路线图信号：

1.  **记忆管理增强**: PR [#2491](https://github.com/sipeed/picoclaw/pull/2491) 提出新增 `/status`、`/compact`、`/new` 会话管理命令，配合已合并的 Seahorse 引擎，预示着下个版本将重点优化长对话体验。
2.  **Skill 生态扩展**: PR [#2442](https://github.com/sipeed/picoclaw/pull/2442) 正在重构 Skill 注册中心并引入 GitHub-backed 发现机制，未来用户可能像安装插件一样直接从 GitHub 安装 Skill。
3.  **多实例与多认证**: Issue [#2493](https://github.com/sipeed/picoclaw/issues/2493) (多飞书支持) 和 Issue [#2169](https://github.com/sipeed/picoclaw/issues/2169) (双重 HEAD 认证) 均指向配置系统需要支持更复杂的多实例与多鉴权场景，PR [#2481](https://github.com/sipeed/picoclaw/pull/2481) 已开始着手重构 Channel 配置以支持多实例。

## 7. 用户反馈摘要
- **痛点**: 
  - **安装门槛**: 多个 Issue (#1763, #2488) 显示在非 x86 架构（如 aarch64, OpenWrt）上存在依赖缺失或网络库兼容问题。
  - **本地模型对接**: 用户尝试对接 LM Studio (#28) 和自建模型 (#2169, #2482) 时遇到配置或协议兼容障碍。
- **满意点**: 
  - 社区对新功能响应积极，如 CLI 美化 (#2202) 和 Signal 支持 (#630) 迅速合并，用户对开发速度表示认可。
  - Seahorse 记忆引擎的合并标志着项目从单纯的聊天机器人向具备长期记忆的智能体转型，受到核心关注者期待。

## 8. 待处理积压
- **长期未决 Issue**: 
  - [#1763](https://github.com/sipeed/picoclaw/issues/1763): aarch64 .deb 包安装依赖问题已存在近一个月，影响 ARM 设备用户部署。
  - [#28](https://github.com/sipeed/picoclaw/issues/28): LM Studio 易连接功能请求活跃度高但长期未立项，建议官方关注本地模型市场的这一核心需求。
- **重要 PR 待合并**: 
  - [#2487](https://github.com/sipeed/picoclaw/pull/2487) (Windows 构建修复): 阻塞了 Windows 用户的开发体验，建议优先 Review。
  - [#2442](https://github.com/sipeed/picoclaw/pull/2442) (Skill 发现机制): 重大架构更新，涉及模块重构，需社区进行充分测试。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-13)

## 1. 今日速览
NanoClaw 项目今日呈现高度活跃状态，核心开发重心明显向**架构优化与运行时扩展**倾斜。过去 24 小时内共有 9 个 PR 更新，其中 6 个已合并/关闭，显示出维护者对代码库的高效治理能力，尤其是在清理技术债务和引入轻量级架构方面进展显著。社区讨论热点集中在**多模型支持**与**容器隔离边界突破**两个方向，反映出用户对灵活部署环境和企业级适配的强烈需求。整体来看，项目正处于功能迭代与架构重构并行的关键阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 6 个 PR 被合并或关闭，主要推进了以下方面：

*   **架构重构与响应优化**：PR [#1748](https://github.com/qwibitai/nanoclaw/pull/1748) 成功引入了 `Coordinator + Workspace` 系统。该更新允许系统在不启动容器的情况下通过 `@anthropic-ai/sdk` 处理简单对话，实现了非阻塞响应，显著提升了交互响应速度和资源利用率。
*   **性能与成本优化**：PR [#1752](https://github.com/qwibitai/nanoclaw/pull/1752) 移除了跨渠道上下文摘要中的 LLM 依赖，改为直接查询 SQLite。此举将相关功能的运行成本降至零，同时提高了上下文注入的速度。
*   **功能扩展与维护**：
    *   PR [#1754](https://github.com/qwibitai/nanoclaw/pull/1754) 合并，增加了 `youtube-transcript-api` 支持，使 Agent 具备了无 API Key 提取 YouTube 字幕的能力。
    *   PR [#1753](https://github.com/qwibitai/nanoclaw/pull/1753) 合并，改进了对模糊后续跟进请求的分类逻辑。
    *   PR [#1750](https://github.com/qwibitai/nanoclaw/pull/1750) 关闭，移除了冗余测试，保持了测试套件的精简。

## 4. 社区热点
今日讨论最活跃的议题集中在底层架构限制与生态兼容性上：

*   **Issue [#1163](https://github.com/qwibitai/nanoclaw/issues/1163) - 支持 OpenCode/多模型提供商**：该议题获得了 3 个点赞和 5 条评论。用户指出，虽然 Claude Code 表现优异，但企业环境常因合规或采购原因需使用其他 AI 提供商。用户希望能像他们自行实现的原型那样，支持 OpenCode 并行运行或作为替代后端。
    *   *分析师点评*：这反映了企业级用户对**供应商锁定** 的担忧，多模型支持将是项目拓展企业市场的重要路线图信号。
*   **Issue [#1732](https://github.com/qwibitai/nanoclaw/issues/1732) - 原生运行模式**：由 @stevengonsalvez 发起，讨论了当前 Docker 隔离机制对 `tmux`、 headed browsers（有头浏览器）等需直接访问主机工具场景的限制。
    *   *分析师点评*：随着 Agent 应用场景的复杂化，单纯的容器隔离已成为部分高级用例的阻碍，社区正在寻求安全性与功能性之间的新平衡点。

## 5. Bug 与稳定性
今日无严重崩溃报告，但发现一个影响开发体验的缓存问题：

*   **[Medium] 源码缓存失效机制不完善**：Issue/PR 数据显示，Agent-runner 之前仅检查 `index.ts` 的修改时间来决定是否刷新缓存，导致修改其他 `.ts` 文件后容器仍运行旧代码。
    *   *修复状态*：PR [#1749](https://github.com/qwibitai/nanoclaw/pull/1749) 已提交修复，现会检查所有 `.ts` 文件的时间戳，目前正在等待合并。
*   **[Low] 类型安全风险**：Issue [#1751](https://github.com/qwibitai/nanoclaw/issues/1751) 指出 `processQueryIpc` 函数存在类型定义过于宽泛的问题，可能导致运行时错误，目前尚无修复 PR。

## 6. 功能请求与路线图信号
结合 Issue 与 PR 活动，识别出以下关键信号：

*   **记忆系统增强（已提上日程）**：PR [#1743](https://github.com/qwibitai/nanoclaw/pull/1743) 正在实现 "SQLite-first self-improving memory agent"，包含记忆检索、置信度反馈和周期性维护功能。这是目前最重要的功能性 PR，标志着项目正从单纯的工具调用型 Agent 向具备长期记忆的智能体演进。
*   **突破容器隔离（高需求）**：Issue [#1732](https://github.com/qwibitai/nanoclaw/issues/1732) 提出的 Native Runner Mode 可能会成为下一个版本的重点。这需要解决安全性与主机访问的冲突，预计将引入新的权限控制模型。
*   **通信渠道扩展**：PR [#836](https://github.com/qwibitai/nanoclaw/pull/836) 为项目增加了 QQ 频道支持，填补了国内即时通讯平台集成的空白，目前处于待审查状态。

## 7. 用户反馈摘要
*   **痛点：容器隔离的副作用**。高级用户（如 @stevengonsalvez）反馈 Docker 隔离虽然安全，但在使用 `tmux` 进行终端复用或运行需要 GUI 的浏览器自动化任务时遇到了硬性阻碍，期望能有“直通主机”的选项。
*   **痛点：多模型灵活性不足**。开发者反馈目前的架构对 Claude Code 过于绑定，难以适配企业内部已有的其他模型服务，希望解耦 SDK 依赖。
*   **积极反馈**：社区对移除不必要的 LLM 调用（如 PR #1752）表示欢迎，认为这降低了使用成本并提高了速度。

## 8. 待处理积压
*   **长期悬而未决的 PR**：PR [#836](https://github.com/qwibitai/nanoclaw/pull/836)（QQ 频道支持）自 3 月 8 日创建至今已逾月，尽管功能完善（支持私聊、群聊、媒体消息等），但仍处于 Open 状态。建议维护者优先审查或反馈遗留问题，避免贡献者热情流失。
*   **重要架构议题**：Issue [#1163](https://github.com/qwibitai/nanoclaw/issues/1163) 关于多模型支持的讨论已持续近一个月，获得较高关注，建议官方尽早表态是否纳入 Roadmap。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-13)

## 1. 今日速览
NullClaw 项目今日整体呈现**稳中有进**的态势，重点聚焦于系统安全性与自动化能力的构建。过去 24 小时内，项目成功修复了一例阻碍 Skill 运行的工具调用 Bug，同时社区发起了关于进度反馈机制的深度探讨。值得注意的是，两个重要的待合并 PR 分别针对 Cron 自动化引擎和 Web 安全加固提出了实质性方案，显示出项目正从单一智能体向更健壮、可自动化的基础设施演进。虽然无新版本发布，但代码库活跃度保持健康。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目虽然没有合并新的 PR，但在问题修复和功能开发分支上取得了明显进展：

*   **问题修复落地**：Issue [#413](https://github.com/nullclaw/nullclaw/issues/413)（file_read tool_call 停止响应）已于今日关闭。该问题曾导致 Weather Skill 示例无法正常运行，修复后提升了 Skill 场景下的工具调用稳定性，降低了用户上手门槛。
*   **自动化引擎开发**：PR [#783](https://github.com/nullclaw/nullclaw/pull/783) 更新活跃，引入了基于数据库的 Cron 子智能体引擎。该 PR 包含任务历史记录、JSON 输出及安全加固功能，一旦合并，将显著增强 NullClaw 作为后台服务的自治能力。
*   **安全性加固推进**：PR [#807](https://github.com/nullclaw/nullclaw/pull/807) 提出了针对 Web 模块的安全加固方案，重点解决了 SSRF 风险和 WebSocket 连接鉴权问题，为未来多用户或公网部署提供了必要的安全边界。

## 4. 社区热点
今日社区关注度最高的讨论主要集中在 Skill 的交互体验上：

*   **Issue [#808](https://github.com/nullclaw/nullclaw/issues/808) - 进度流暴露请求**：由用户 @jacktang 发起，询问能否将 Skill 执行过程中的进度信息暴露给 A2A (Agent-to-Agent) 流，以便在 UI 层展示。
    *   **诉求分析**：这反映了用户对 AI 智能体**交互透明度**的强烈需求。目前的 Skill 执行多为“黑盒”，用户迫切希望在 UI 中看到实时反馈（如“正在查询...”、“处理中...”），以提升用户体验信任度。
*   **Issue [#413](https://github.com/nullclaw/nullclaw/issues/413) - Skill 运行故障**：尽管已关闭，但该 Issue 聚集了关于 Weather Skill 示例的讨论，表明官方示例的可用性直接影响新用户的留存。

## 5. Bug 与稳定性
今日记录显示稳定性问题主要集中在工具调用与环境配置层面：

*   **已修复 (High)**：[Issue #413](https://github.com/nullclaw/nullclaw/issues/413) `[CLOSED]`
    *   **问题**：`file_read` 工具调用意外停止，导致 Weather Skill 无法正常工作。
    *   **状态**：已修复并关闭，确认基础工具链恢复正常。
*   **待处理 (Medium)**：[Issue #599](https://github.com/nullclaw/nullclaw/issues/599) `[OPEN]`
    *   **问题**：测试套件 `downloadToFile` 在特定 curl 配置（受限 `--proto`）下失败，并伴随 `logged-errors` 错误。
    *   **状态**：尚未合并修复 PR，可能影响特定安全加固环境下的开发者构建体验。

## 6. 功能请求与路线图信号
结合 Issue 和活跃 PR，项目路线图呈现出明确信号：

*   **自动化与调度**：用户 @yanggf8 提交的 [PR #783](https://github.com/nullclaw/nullclaw/pull/783) 显示项目正在补齐“定时任务/后台运行”这一关键拼图，标志着 NullClaw 正从“对话式助手”向“后台自动化 Worker”转型。
*   **可观测性**：[Issue #808](https://github.com/nullclaw/nullclaw/issues/808) 的请求暗示下一阶段优化的重点可能在于**流式输出与 UI 集成**。若能将 Skill 内部状态通过 A2A 协议流出，将极大增强前端的可定制性。
*   **安全合规**：[PR #807](https://github.com/nullclaw/nullclaw/pull/807) 表明项目正在收紧 Web 端的安全边界，预防 SSRF 和 DNS 重绑定攻击，这是项目走向生产环境部署的必经之路。

## 7. 用户反馈摘要
*   **痛点**：官方 Skill 示例（如 Weather）若无法运行会严重挫伤新用户积极性（来源 [#413](https://github.com/nullclaw/nullclaw/issues/413)）。
*   **场景需求**：用户不仅是被动接收结果，更希望实时掌控 Skill 执行的“进度条”或状态提示，特别是在集成到第三方 UI 时（来源 [#808](https://github.com/nullclaw/nullclaw/issues/808)）。
*   **环境兼容性**：高级用户在定制化或受限的安全环境中运行测试时遇到阻碍（来源 [#599](https://github.com/nullclaw/nullclaw/issues/599)）。

## 8. 待处理积压
*   **PR Review 积压**：
    *   [PR #783](https://github.com/nullclaw/nullclaw/pull/783)（Cron Engine）已开启约一周，包含大量核心逻辑变更，建议维护者优先 Review 以避免分支冲突。
    *   [PR #807](https://github.com/nullclaw/nullclaw/pull/807)（Security Hardening）涉及关键安全逻辑，需尽快安排代码审查以确保主分支安全性。
*   **测试稳定性**：[Issue #599](https://github.com/nullclaw/nullclaw/issues/599) 提出的构建测试失败问题尚未解决，可能影响 CI/CD 的可靠性判断。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-13)

## 1. 今日速览
IronClaw 项目今日保持**极高活跃度**，核心开发重心明显向 **Engine v2 架构升级**与**浏览器自动化能力**倾斜。过去 24 小时内共有 50 个 PR 更新与 16 个 Issue 更新，尽管无新版本发布，但代码库变动剧烈。主要维护者 @ilblackdragon 与 @serrrfirat 推动了多项关键架构改进，包括浏览器自动化史诗级任务与编排器错误处理优化。项目目前处于功能快速迭代与稳定性修复并行的阶段，积压的 PR 数量（40个待合并）显示审核压力较大。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 **2 个 Issue 关闭** 和 **关键 PR 合并/推进**，主要集中在稳定性修复与底层架构增强：

*   **编排器稳定性修复 ([PR #2340](https://github.com/nearai/ironclaw/pull/2340))**：已合并。针对 Issue #2325，在 Python 编排器中增加了 `consecutive_action_errors` 计数器。这解决了工具调用失败时系统无限循环的问题，显著提升了 Agent 在异常情况下的鲁棒性。
*   **Python 解释器性能提升 ([PR #2364](https://github.com/nearai/ironclaw/pull/2364))**：已合并。将嵌入式 Python 解释器 升级至 v0.0.11，带来了约 2 倍的 JSON 解析性能提升，直接优化了 Agent 的思维响应速度。
*   **内存与推理能力增强 ([PR #2336](https://github.com/nearai/ironclaw/pull/2336))**：正在审核中。引入了可配置的对话洞察间隔、会话总结钩子和推理增强回忆功能，旨在让 Agent 拥有更连贯的长期记忆。
*   **Engine v2 沙箱实现 ([PR #2211](https://github.com/nearai/ironclaw/pull/2211))**：持续推进中。实现了完整的每项目沙箱隔离机制（Phases 1–7），这是 Engine v2 支持多租户安全运行的关键基础设施。

## 4. 社区热点
今日讨论最活跃的议题主要集中在架构设计与用户体验痛点：

*   **浏览器自动化史诗级任务 ([Issue #2355](https://github.com/nearai/ironclaw/issues/2355))**：
    维护者 @ilblackdragon 发起了大规模的功能规划，旨在集成持久化、多身份的浏览器自动化能力（基于 Chrome CDP）。该 Issue 衍生出 #2357, #2358, #2359, #2360, #2361 五个子任务，覆盖从沙箱服务到 UI 实时流媒体的全栈开发。这标志着 IronClaw 正式向复杂的 Web 交互场景进军。
*   **Engine v2 决策机制重构 ([Issue #2350](https://github.com/nearai/ironclaw/issues/2350))**：
    讨论了当前 Engine v2 缺乏显式选择器的问题。社区/开发者建议在“直接回答文本”、“结构化操作”和“完整代码执行”之间引入明确的路由层，以避免算力浪费和逻辑混淆。
*   **UX 重设计：项目即生活空间 ([Issue #2369](https://github.com/nearai/ironclaw/issues/2369))**：
    直指当前 UI 像开发者监控面板而非产品，提出向 Apple 质感看齐的重设计方案，重点是抛弃“聊天创建项目”的繁琐模式，转向可视化结构化输入。

## 5. Bug 与稳定性
今日报告了若干影响用户体验的关键 Bug，部分已有修复方案：

*   **[P1] 多模态视觉接口兼容性故障 ([Issue #2378](https://github.com/nearai/ironclaw/issues/2378))**：
    在使用 OpenAI 兼容提供商（如 MiniMax）时，图像请求因缺少 `detail` 字段而失败。这是一个典型的兼容性回归问题，目前尚未有修复 PR 链接。
*   **[P2] Twitter/X 频道连接不可用 ([Issue #2230](https://github.com/nearai/ironclaw/issues/2230))**：
    MCP 连接 Twitter 需要手动提取浏览器 Cookie，导致自动化流程中断，严重影响社交媒体监控类 Agent 的部署体验。
*   **[P2] 实例升级失败 ([Issue #2346](https://github.com/nearai/ironclaw/issues/2346))**：
    从 v0.24.0 升级至 v0.25.0 时失败且无报错详情，属于运维层面的严重阻碍。
*   **[已修复] 工具调用死循环**：通过 PR #2340 解决，引入了连续错误计数以打破循环。

## 6. 功能请求与路线图信号
结合 Issues 与 PRs，未来的版本路线图呈现清晰的技术路径：

*   **浏览器 Agent (高优先级)**：Issue #2355 系列表明项目正在补齐 Agent 操作浏览器的最后一块拼图，支持用户身份持久化和实时画面回传。
*   **本地大模型智能路由 ([Issue #2373](https://github.com/nearai/ironclaw/issues/2373))**：请求支持在本地快速模型与长上下文模型之间动态路由，适配 MacBook 等本地部署场景，这符合边缘计算与 AI 结合的趋势。
*   **扩展思考内容可视化 ([Issue #2352](https://github.com/nearai/ironclaw/issues/2352))**：请求在所有网关中展示 Claude 等模型的 `Reasoning` 内容块，而非直接丢弃。这表明用户对 Agent “思维过程”的透明度有强烈需求。

## 7. 用户反馈摘要
*   **痛点：配置复杂性与容错性**：用户报告在进行 Twitter 连接和版本升级时遇到阻碍，显示出项目在“开箱即用”和“平滑升级”方面仍有提升空间。
*   **痛点：UI 交互摩擦**：Issue #2369 指出创建项目的过程过于依赖对话轮次，缺乏直观的表单或引导，让非技术用户感到困惑。
*   **诉求：强大的本地支持**：Issue #2373 反映了核心用户群希望利用本地硬件运行复杂模型，并期望软件能自动处理长短上下文的切换。

## 8. 待处理积压
*   **音频流水线长期未决 ([Issue #90](https://github.com/nearai/ironclaw/issues/90))**：
    这是一个标记为 P1-P2 的高优先级 Issue（创建于 2026-02-14），涉及语音转文字和文字转语音功能，是 WhatsApp 语音消息处理的前置条件。虽然今日有更新，但核心实现仍未见合入，建议优先关注。
*   **大规模 PR 积压**：目前仍有 **40 个 PR 处于待合并状态**，其中包括 #1819 (图像生成修复) 和 #1446 (阿里云支持) 等大型 PR。积压可能导致功能上线延迟及后续合并冲突风险增加。

---
*分析师注：IronClaw 正处于架构重构的关键期，Engine v2 和浏览器自动化功能的引入将大幅扩展 Agent 的能力边界，但也带来了短期的不稳定性。建议关注 Issue #2378 的修复进度，以免影响多模态用户的正常使用。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-13)

## 1. 今日速览
LobsterAI 项目今日整体活跃度较高，开发重心明显向用户体验优化和系统稳定性倾斜。过去 24 小时内共有 8 个 PR 更新，其中包含 2 个已合并/关闭的 PR，主要集中在 UI 交互优化和底层架构重构；社区端有 3 个 Issue 更新，均为新建或活跃状态，未关闭问题。值得关注的是，针对 `release/2026.04.13` 分支的 PR 已提交，暗示新版本发布在即。

## 2. 版本发布
*今日无正式版本发布。*
但根据 PR #1638 的动向，开发团队正在向 `release/2026.04.13` 分支合并代码，预计近期将发布包含 OpenClaw 会话保持策略修复的新版本。

## 3. 项目进展
今日共有 2 个 PR 被合并或关闭，项目在代码重构和 Bug 修复方面取得实质性进展：

*   **修复定时任务保存状态异常**：PR [#1645](https://github.com/netease-youdao/LobsterAI/pull/1645) 已关闭。该修复解决了手动创建定时任务保存后 UI 仍提示“未保存”的问题，直接响应了 Issue #1643 的反馈，提升了表单交互的可靠性。
*   **底层架构重构与配置清理**：PR [#1549](https://github.com/netease-youdao/LobsterAI/pull/1549) 已关闭。这是一个大型重构，合并了 Provider 注册逻辑，并修复了当用户移除所有模型配置后导致 Gateway 不断重启的严重问题，显著增强了系统的健壮性。

此外，还有 6 个功能性 PR 正处于待合并状态，主要集中在提升交互体验（如支持 ESC 关闭弹窗、工具结果复制、右键菜单等）。

## 4. 社区热点
今日社区讨论主要集中在功能扩展和故障排查上：

*   **多 Agent 协作愿景**：Issue [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) 提出了一个重要的功能愿景——基于 Markdown 工作流实现多 Agent 编排。用户希望 Main Agent 能感知并调度其他独立 Agent 完成复杂任务，这反映了用户对 LobsterAI 从“单体工具”向“多智能体协作平台”演进的强烈需求。
*   **运行时静默故障**：Issue [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) 再次活跃。用户反馈提问后无响应且无报错信息，该问题已持续数日，目前尚未有明确的解决方案，需引起开发团队重视。

## 5. Bug 与稳定性
今日报告的关键 Bug 及修复状态如下：

*   **[已修复] 定时任务保存状态误判**：Issue [#1643](https://github.com/netease-youdao/LobsterAI/issues/1643) 报告 Win11 下定时任务保存成功但提示“未保存”。该问题已通过 PR [#1645](https://github.com/netease-youdao/LobsterAI/pull/1645) 修复，通过重置表单 dirty state 解决。
*   **[待处理] 运行时无响应**：Issue [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) 报告客户端提问后静默，无任何反馈。目前该问题处于 OPEN 状态，由于缺乏错误日志，排查难度较大。
*   **[已修复] Gateway 崩溃循环**：PR [#1549](https://github.com/netease-youdao/LobsterAI/pull/1549) 修复了移除模型配置后 Gateway 因缺失环境变量而不断重启的问题，属于重要的稳定性修复。

## 6. 功能请求与路线图信号
根据最新的 Issue 和 PR 活动，项目路线图呈现出以下信号：

*   **交互体验精细化**：待合并的 PR [#1637](https://github.com/netease-youdao/LobsterAI/pull/1637)（重新生成）、[#1640](https://github.com/netease-youdao/LobsterAI/pull/1640)（结果复制）、[#1641](https://github.com/netease-youdao/LobsterAI/pull/1641)（ESC 关闭弹窗）显示团队正在集中打磨客户端的交互细节，对齐主流桌面应用的 UX 标准。
*   **Agent 编排能力**：Issue [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) 提出的 Agent 编排需求，指出了当前“各 Agent 互不感知”的局限性。这可能成为项目下一阶段的核心竞争力方向。

## 7. 用户反馈摘要
*   **痛点**：用户对“静默失败”（无报错、无反应）感到困惑（Issue #1569），这比崩溃更影响信心；定时任务的 UI 状态误报也造成了困扰（Issue #1643）。
*   **场景**：高级用户开始尝试将 LobsterAI 用于复杂工作流（如 Issue #1644 提到的文章分析任务链），希望不同 Agent 之间能协同工作，而非割裂的单体。
*   **满意度**：用户对细粒度的 UX 改进（如复制按钮、快捷键支持）持有正向期待，相关 PR 活跃度较高。

## 8. 待处理积压
*   **Issue #1569 (运行静默失败)**：自 4 月 8 日创建以来尚未解决，今日再次活跃。建议开发者关注此类“无反馈”问题，可能涉及异常捕获或网络超时处理的优化。
*   **PR 积压**：目前有 6 个功能性 PR 处于 Open 状态（如右键菜单 #1642、重新生成按钮 #1637 等），建议在即将发布的新版本中优先合并这些高频使用的交互优化代码。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目日报 (2026-04-13)

## 1. 今日速览
过去 24 小时，TinyClaw 项目整体活跃度处于**低位运行**状态，无代码合并或版本发布。社区方面仅有 1 条新开 Issue，主要聚焦于用户体验优化。当前项目处于平稳维护期，暂无紧急 Bug 或破坏性变更，开发节奏较为平缓。

## 2. 版本发布
无。

## 3. 项目进展
过去 24 小时内无 PR 更新、合并或关闭记录。项目代码库今日无实质性推进，暂无功能迭代或修复上线。

## 4. 社区热点
今日唯一的社区动态来自新功能提案：
*   **Issue #277 [Feature: Show full tool details in streaming output, not just tool names](https://github.com/TinyAGI/tinyagi/issues/277)**
    *   **分析**：该 Issue 由用户 @SMouuu 提出，直击当前 Agent 执行过程中的“黑盒”痛点。用户反馈在 Telegram/TinyOffice 等客户端的流式输出中，仅显示 `[tool: Bash]` 等工具名称缺乏信息量，无法让用户感知 Agent 正在执行的具体操作。这反映了用户对于 Agent 执行过程透明度和可观测性的强烈需求，期待在流式交互中看到更丰富的上下文信息。

## 5. Bug 与稳定性
过去 24 小时内无崩溃、严重 Bug 或回归问题报告。

## 6. 功能请求与路线图信号
*   **增强流式输出可观测性**：Issue #277 提出了明确的功能改进方向，建议在流式输出中展示完整的工具调用详情（如参数、预期动作等），而非仅展示工具名。这属于 UI/UX 层面的优化，旨在提升用户对 Agent 行为的掌控感。鉴于目前尚无相关 PR，建议维护者将其纳入下一阶段的用户体验优化路线图。

## 7. 用户反馈摘要
根据 Issue #277 的反馈，用户在使用 TinyClaw 接入即时通讯软件（如 Telegram）或办公套件时，普遍感到**交互反馈不足**。用户不仅仅是想看到“调用了什么工具”，更希望了解“工具正在做什么”。这种信息不对称会导致用户在长任务执行过程中产生焦虑或困惑，提示项目需要在前端展示层与后端执行层之间建立更深度的信息透传机制。

## 8. 待处理积压
*   **Issue #277**：作为今日新开的 Feature Request，目前尚未有维护者回复或标签分类，建议关注后续处理进度。
    *   链接：[TinyAGI/tinyagi #277](https://github.com/TinyAGI/tinyagi/issues/277)

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报 (2026-04-13)**

### 1. 今日速览
Moltis 项目今日呈现极高的开发活跃度，共发布了 1 个新版本 `20260413.01`，合并了 16 个 PR，同时关闭了 9 个 Issue，展现出维护者高效的代码审查与迭代速度。本次更新重点引入了原生文件系统工具集和 Nostr 协议支持，标志着项目从单纯的聊天机器人向具备更强本地操作能力和去中心化通信能力的智能体平台演进。此外，架构重构工作正在密集进行中，旨在解耦核心网关模块，提升系统的可维护性。整体项目健康度优秀，功能交付与缺陷修复并进。

### 2. 版本发布
- **[Release 20260413.01](https://github.com/moltis-org/moltis/releases/tag/20260413.01)**
  本次版本更新包含多项重要功能与修复：
  - **新功能**：新增原生文件系统工具，支持 Read/Write/Edit/Glob/Grep 操作；集成 Nostr DM 频道支持；增加禁用 Web UI 终端的选项。
  - **修复**：修复了 Web UI 编辑设置后 TOML 配置文件乱序的问题；解决了 Discord Bot 在重启后的持久化问题。
  - **优化**：移除了 Provider 验证时的自动模型探测，改为手动测试，优化了启动速度与资源占用。

### 3. 项目进展
今日共有 16 个 PR 合并，功能与架构双管齐下：

- **原生工具与智能体能力增强**：
  - [PR #666](https://github.com/moltis-org/moltis/pull/666) **已合并**：引入原生文件系统工具，替代原本基于 shell 的操作，提升了 Agent 操作文件的可靠性与安全性。
  - [PR #677](https://github.com/moltis-org/moltis/pull/677) **已合并**：实现了 6 层工具策略解析，细化了权限控制粒度。

- **多渠道支持扩展**：
  - [PR #674](https://github.com/moltis-org/moltis/pull/674) **已合并**：新增 Nostr 私信频道支持，完善了去中心化通信生态。
  - [PR #675](https://github.com/moltis-org/moltis/pull/675) **已合并**：修复了 Vault 解封时 Channel 启动失败的问题，确保 Discord 等频道的稳定性。

- **安全性与配置体验**：
  - [PR #682](https://github.com/moltis-org/moltis/pull/682) **已合并**：增加禁用终端选项并进行安全加固，响应了用户对生产环境安全的关切。
  - [PR #686](https://github.com/moltis-org/moltis/pull/686) **已合并**：修复了配置文件保存时字段乱序的问题，提升了用户体验。

- **架构重构（进行中）**：
  - 虽然 [PR #690](https://github.com/moltis-org/moltis/pull/690) 和 [PR #691](https://github.com/moltis-org/moltis/pull/691) 仍处于 Open 状态，但开发者 `Cstewart-HC` 正大力推进 Gateway 模块的解耦工作，提取 MCP 服务逻辑与广播状态，预示着下一阶段架构将更加模块化。

### 4. 社区热点
今日社区关注度较高的议题集中在**新渠道支持**与**底层工具能力**：
- **[Issue #233](https://github.com/moltis-org/moltis/issues/233)** (👍 5): Matrix 协议支持请求，随着 Nostr 的合并，社区对去中心化/隐私通信协议的需求持续高涨。
- **[Issue #657](https://github.com/moltis-org/moltis/issues/657)** (👍 2): 原生文件系统工具请求，该 Issue 已通过 PR #666 解决，用户对摆脱 Shell 依赖、直接操作文件系统有强烈需求。
- **[Issue #261](https://github.com/moltis-org/moltis/issues/261)** (👍 2): GitHub Copilot 提供商报错问题，今日已修复关闭，反映了用户对主流 LLM 提供商兼容性的重视。

### 5. Bug 与稳定性
今日修复了多个影响用户体验的关键 Bug，未报告新增严重崩溃问题：
- **配置文件损坏风险 (已修复)**：[Issue #684](https://github.com/moltis-org/moltis/issues/684) 指出 Web UI 编辑会导致 TOML 配置乱序，已由 [PR #686](https://github.com/moltis-org/moltis/pull/686) 修复。
- **工具调用死循环 (已修复)**：[Issue #658](https://github.com/moltis-org/moltis/issues/658) 报告 Agent 在参数错误时会陷入 25 次空参调用死循环，严重消耗 Token。目前已在相关工具与运行时逻辑中得到处理。
- **远程部署登录失败 (已修复)**：[Issue #646](https://github.com/moltis-org/moltis/issues/646) 影响了远程部署用户，已关闭。
- **待处理 UI 问题**：[Issue #671](https://github.com/moltis-org/moltis/issues/671) 报告主会话中 "Clear" 按钮被隐藏，目前尚未有合并的 PR，建议关注。

### 6. 功能请求与路线图信号
- **性能可视化**：[Issue #692](https://github.com/moltis-org/moltis/issues/692) 新提出希望在聊天界面显示缓存的输入 Token 数量，表明用户对上下文管理成本的关注度提升。
- **隐私与网络配置**：[Issue #548](https://github.com/moltis-org/moltis/issues/548) 提出的应用级/通道级代理支持已关闭，结合今日的安全加固 PR，显示出项目正加强网络层面的灵活性与隐私保护能力。
- **搜索能力**：[Issue #345](https://github.com/moltis-org/moltis/issues/345) 关于集成 SearXNG 进行网络搜索的请求仍在 Open 状态，这是目前积压时间较长的热门需求之一。

### 7. 用户反馈摘要
- **痛点解决**：用户 `dmitriikeler` 提出的 Shell 操作局限性（Issue #657）得到了完美解决，用户对引入原生文件操作工具表示欢迎，这解决了之前 `exec` 工具在处理复杂文件操作时的不可靠问题。
- **体验优化**：关于配置文件保存后格式混乱的反馈（Issue #684）已解决，避免了版本控制冲突，用户对 Web UI 管理配置的信心将增强。
- **安全诉求**：用户 `asakura42` 提出的禁用终端需求（Issue #681）迅速得到响应，反映了社区对生产环境暴露终端接口的安全担忧。

### 8. 待处理积压
- **UI 交互缺陷**：[Issue #671](https://github.com/moltis-org/moltis/issues/671)（Clear 按钮隐藏）影响基础操作，建议尽快排期修复。
- **搜索功能缺失**：[Issue #345](https://github.com/moltis-org/moltis/issues/345)（SearXNG 集成）自 3 月提出至今未解决，作为高频需求，建议纳入后续版本规划。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-13)

## 1. 今日速览
今日 CoPaw 项目迎来重大里程碑，正式发布 **v1.1.0** 版本，宣布品牌重塑为 **QwenPaw**，标志着项目正式融入通义千问开源生态。社区活跃度显著提升，过去24小时内 Issue 互动量达 18 条，PR 更新高达 28 条，显示出社区对新版本的强烈关注。开发重心集中在修复 Branding 带来的环境变量迁移问题及提升系统稳定性，同时针对 Windows 客户端和多 Agent 协作功能的开发也在积极推进中。

## 2. 版本发布
今日连发两个版本，完成品牌升级与修复迭代：

- **[v1.1.0](https://github.com/agentscope-ai/CoPaw/releases/tag/v1.1.0)**
    - **核心变更**：项目正式更名为 **QwenPaw**。此次重塑不仅是名称变更，更代表了项目将深度集成 Qwen 生态，构建更开放的开源智能体框架。
    - **注意**：旧版环境变量 `COPAW_` 需迁移至 `QWENPAW_`。

- **[v1.1.0-beta.1](https://github.com/agentscope-ai/CoPaw/releases/tag/v1.1.0-beta.1)**
    - **重构**：完成从 `COPAW` 到 `QWENPAW` 环境变量的转换 ([PR #3171](https://github.com/agentscope-ai/CoPaw/pull/3171))。
    - **工程**：更新脚本与 CI 模块，增加手动触发 PyPI 发布流程。

## 3. 项目进展
今日共有 **10 个 PR 合并/关闭**，主要推进了以下工作：

- **核心功能增强**：合并了配置追踪支持 ([PR #1781](https://github.com/agentscope-ai/CoPaw/pull/1781))，允许用户通过配置文件启用 AgentScope 追踪功能，提升了可观测性。
- **前端与调试体验**：合并了前端调试面板功能 ([PR #3068](https://github.com/agentscope-ai/CoPaw/pull/3068))，支持多级日志展示与跨标签页同步，大幅优化开发者的调试体验。
- **安全性加固**：合并了 Shell 命令安全检测规则 ([PR #3227](https://github.com/agentscope-ai/CoPaw/pull/3227))，新增了 IFS 注入等逃逸检测，降低了命令执行风险。
- **版本迭代**：版本号已 bump 至 1.1.1b1 ([PR #3304](https://github.com/agentscope-ai/CoPaw/pull/3304))，预示着下一轮修复补丁即将到来。

## 4. 社区热点
今日讨论最热烈的议题集中在品牌升级后的迁移问题：

- **[Issue #3288 [CLOSED]](https://github.com/agentscope-ai/CoPaw/issues/3288)**：**CoPaw 怎么平滑升级到 QwenPaw**（23条评论）。
    - **诉求分析**：用户极度关注 Agent 配置、记忆数据的保留问题。此 Issue 反映了用户对生产环境迁移的担忧，建议项目方尽快补充详细的迁移文档或提供一键迁移脚本。
- **[Issue #2301 [OPEN]](https://github.com/agentscope-ai/CoPaw/issues/2301)**：**功能建议合集**（8条评论）。
    - **诉求分析**：用户提出了一键更新、模型自动切换/排行榜、自我进化机制等高阶需求，反映了用户希望 CoPaw 能从“工具”向“智能伙伴”演进的强烈愿望。

## 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，部分已有修复方案：

**严重**：
- **[Issue #3277](https://github.com/agentscope-ai/CoPaw/issues/3277)**：Session State JSON 损坏导致 422 错误。
    - 状态：已有修复 PR [#3278](https://github.com/agentscope-ai/CoPaw/pull/3278) 提交，修复了并发写入导致的竞态条件。
- **[Issue #3281](https://github.com/agentscope-ai/CoPaw/issues/3281)**：Windows Desktop UI Agent 回复消失。
    - 状态：Open，影响 Windows 端核心交互体验。

**高优先级**：
- **[Issue #3296](https://github.com/agentscope-ai/CoPaw/issues/3296)**：企业微信通道文件发送失败。
    - 状态：已有修复 PR [#3300](https://github.com/agentscope-ai/CoPaw/pull/3300) 解决了 asyncio 事件循环冲突问题。
- **[Issue #3279](https://github.com/agentscope-ai/CoPaw/issues/3279)**：Pipeline 重复执行及 Tool ID 无限增长。
- **[Issue #3272](https://github.com/agentscope-ai/CoPaw/issues/3272)**：Gemini API 连接成功但对话报错。

**中等**：
- **[Issue #3297](https://github.com/agentscope-ai/CoPaw/issues/3297)**：`/clear` 命令未同步清空前端历史。
- **[Issue #3291](https://github.com/agentscope-ai/CoPaw/issues/3291)**：自动获取模型按钮被默认禁用，影响三方 API 体验。

## 6. 功能请求与路线图信号
社区与开发者正在推动以下新功能，有望纳入下个版本：

- **多 Agent 协作**：[PR #3292](https://github.com/agentscope-ai/CoPaw/pull/3292) 正在实现本地与远程 Agent 协作机制，新增 `list_agents` 和 `chat_with_agent` 工具，呼应了用户对多智能体互动的需求。
- **前端交互优化**：[PR #3009](https://github.com/agentscope-ai/CoPaw/pull/3009) 提议在聊天输入框增加 `@` 提及按钮，优化多 Agent 协作的用户体验。
- **任务体验增强**：[Issue #3302](https://github.com/agentscope-ai/CoPaw/issues/3302) 请求增加任务完成后的系统级弹窗通知及指令排队功能，这是提升 Desktop 端易用性的关键信号。

## 7. 用户反馈摘要
- **迁移焦虑**：用户普遍担心更名后的配置丢失问题（#3288），希望保留原有的 Agent 和记忆数据。
- **Windows 端体验亟待提升**：多位用户反馈 Windows 客户端存在 UI 卡死、响应消失（#3281, #3269）以及 Local 模式未调用 GPU 的问题。
- **易用性建议**：用户反馈第三方 API 模型配置繁琐，希望能解除“自动获取模型”的默认禁用限制（#3291），并优化工具护栏提示信息的显示长度（#3298）。

## 8. 待处理积压
- **[PR #2506](https://github.com/agentscope-ai/CoPaw/pull/2506)**：建立 Channel 模块测试基础设施的 PR 已持续活跃数日，对项目长期质量至关重要，建议优先 Review 合并。
- **[Issue #2301](https://github.com/agentscope-ai/CoPaw/issues/2301)**：包含大量高质量的功能建议（如自动更新、模型切换），长期未完全解决，建议纳入 Roadmap 逐步排期。

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