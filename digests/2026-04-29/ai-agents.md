# OpenClaw 生态日报 2026-04-29

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-29 03:28 UTC

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

# OpenClaw 项目动态日报 (2026-04-29)

## 1. 今日速览
OpenClaw 项目今日保持极高的社区活跃度，过去 24 小时内共有 500 条 Issue 更新与 500 条 PR 更新，显示出项目正处于快速迭代期。虽然今日无新版本发布，但开发重心明显向稳定性修复与性能优化倾斜，尤其是针对近期版本（v4.26）引入的性能回归问题。PR 合并数量（129 条）较为可观，主要集中在 Gateway 启动优化、Session 记忆压缩修复以及多渠道（Discord, Feishu, WhatsApp）的细节修复。整体来看，项目正在消化大量社区反馈并积极修补关键 Bug，健康度良好但需关注近期回归问题的处理速度。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 129 个 PR 被合并或关闭，重点推进了以下领域：

*   **核心稳定性与性能优化**：
    *   PR #69270 [OPEN] 旨在解决 Session 压缩与重置时的状态不变量问题，修复了多个相关联的上下文丢失 Bug，这对长期记忆功能至关重要。
    *   PR #73964 [OPEN] 修复了 Gateway 在 rebuild 过程中生命周期加载器的稳定性问题，防止运行时模块丢失。
    *   PR #74033 [OPEN] 修复了启动慢的问题，优化了未配置外部 CLI 时的凭证读取逻辑。
*   **平台与渠道修复**：
    *   PR #73945 [OPEN] 修复了 Feishu WebSocket 重连机制，解决了连接断开后的孤立进程问题。
    *   PR #73453 [OPEN] 修复了 WhatsApp Web 在群组中被 @ 时的提及检测逻辑。
    *   PR #73768 [OPEN] 修复了 Session 记忆持久化时未清理 Chat 模板 Token 的问题，防止上下文污染。
*   **功能增强与配置灵活性**：
    *   PR #74035 [OPEN] 引入了 `persist` 标志和 `trustedSources` 配置，为 Skills 的商业化部署提供更强的控制力。
    *   PR #73216 [OPEN] 为 Copilot 扩展引入了动态模型目录支持，解决了静态模型表滞后的问题。
*   **已合并/关闭的关键修复**：
    *   PR #38650 [CLOSED] 允许 Workspace 文件使用符号链接，增强了配置共享能力。
    *   PR #38781 [CLOSED] 修复了 macOS Node 远程模式下 `system.run` 命令不可用的问题。

## 4. 社区热点
今日讨论最活跃的 Issues 集中在性能回归、关键 Bug 修复及核心功能请求上：

1.  **[BLOCKER] 性能严重回归**：Issue #73501
    *   **摘要**：用户报告升级至 4.26 版本后，Bot 响应速度显著变慢，影响交互体验。
    *   **诉求**：尽快定位性能瓶颈并发布修复补丁，目前已被标记为 Blocker。
2.  **Gemini 模型输出异常**：Issue #65867
    *   **摘要**：Gemini 模型返回的 `<final>` 标签泄露到最终交付的消息中，影响用户体验。
    *   **诉求**：需修复模型输出解析逻辑，确保标签被正确剥离。
3.  **Exec 工具环境变量丢失**：Issue #31583
    *   **摘要**：`exec` 工具无法继承 `skills.entries` 中配置的环境变量，导致无法注入密钥等关键信息。
    *   **诉求**：修复环境变量继承机制，保障 Skill 脚本的正常运行。
4.  **Control UI 强制依赖 HTTPS**：Issue #32473
    *   **摘要**：近期更新导致 Control UI 在非 HTTPS/Localhost 环境下报错 "requires device identity"。
    *   **诉求**：需调整安全上下文判定逻辑，兼容更多部署环境（如 VPS + Docker）。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，以下是按严重程度排序的关键问题：

*   **P0 - 阻塞级**：
    *   Issue #73501 [OPEN]: 4.22 至 4.26 版本出现严重性能退化，Bot 反应迟钝。
    *   Issue #73581 [OPEN]: Agent 处理进程可能在无超时恢复的情况下停滞数分钟，且 Gateway 重启时存在 Cron 竞态条件。
*   **P1 - 严重功能缺陷**：
    *   Issue #31583 [OPEN]: `exec` 工具不继承环境变量（回归问题）。
    *   Issue #39038 [OPEN]: Windows 11 24H2 上节点程序启动卡死。
    *   Issue #59330 [OPEN]: Control UI 强制禁用 Raw 模式，导致配置无法编辑。
    *   Issue #65867 [OPEN]: Gemini 模型 `<final>` 标签泄露。
*   **P2 - 一般性 Bug**：
    *   Issue #31331 [OPEN]: Docker Sandbox 环境下工作区访问权限异常。
    *   Issue #73366 [CLOSED]: Ollama thinking 参数被强制设为 false（该 Issue 已关闭，可能有修复）。
    *   Issue #38597 [OPEN]: Discord 频道 CJK 文本在 2000 字符处截断导致乱码。

## 6. 功能请求与路线图信号
*   **商业化与企业级支持**：PR #74035 的开启表明项目正在加强对商业部署场景的支持，允许配置信任源和持久化 Skill，这可能是下一版本的重点。
*   **Slack 集成增强**：Issue #12602 请求支持 Slack Block Kit，以支持更丰富的富文本交互，社区讨论热烈，有望纳入规划。
*   **Telegram Business 支持**：Issue #20786 提出支持 Telegram Business API，扩展应用场景。
*   **上下文管理优化**：Issue #22438 提出的分层 Bootstrap 文件加载机制，旨在解决大工作区 Token 消耗过快的问题，这对于 AI Agent 的长期运行成本控制至关重要。

## 7. 用户反馈摘要
*   **痛点：性能与稳定性**：大量用户反馈近期版本（特别是 4.26）存在性能下降、UI 配置复杂化及环境变量丢失问题，升级需谨慎。
*   **场景：多平台集成**：用户在 Discord、WhatsApp、Feishu 等多渠道部署时遇到细节问题（如 Discord 截断、WhatsApp 提及检测），表明多渠道适配仍是维护难点。
*   **满意度**：社区对 Bug 的响应速度较快（如 Ollama 参数问题已关闭），且对 PR 的审核活跃，用户对项目活跃度持正面态度。

## 8. 待处理积压
*   **长期未解决的痛点**：
    *   Issue #22438 (分层加载)：自 2 月提出，尚未有明确 PR 关闭，涉及核心 Token 消耗逻辑，建议关注。
    *   Issue #32473 (UI HTTPS 要求)：影响 Docker 部署灵活性，目前仅通过评论互动，尚无明确修复方案合并。
*   **维护者提醒**：建议优先处理 P0 级性能回归 Issue #73501，目前该 Issue 仅有评论尚无关联修复 PR，可能会阻碍用户升级。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向分析日报 (2026-04-29)

## 1. 生态全景
当前开源 AI 智能体生态正处于**"架构重构与多模态渠道爆发"**并行的关键时期。一方面，以 OpenClaw、IronClaw 为首的成熟项目正在通过底层重构（如微内核、Reborn 架构）解决性能与扩展性瓶颈；另一方面，NanoBot、PicoClaw 等项目正快速补齐 QQ、IoT、本地推理等场景拼图，竞争激烈。社区对**稳定性**的诉求显著上升，性能回归和配置丢失成为阻碍用户升级的主要痛点，同时对新模型（DeepSeek V4）的适配速度成为衡量项目活跃度的重要指标。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PRs 活跃度 | 版本发布 | 健康度评估 | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 极高 (500+) | 极高 (500+) | 无 | ⭐⭐⭐⭐ | 核心迭代，专注修复 v4.26 性能回归 |
| **NanoBot** | 高 (18) | 高 (37) | 无 | ⭐⭐⭐⭐⭐ | 高效维护，Issue 闭环率极高 |
| **Zeroclaw** | 高 (26) | 高 (45) | 无 | ⭐⭐⭐ | 架构转型期，Web 端体验待优化 |
| **Hermes Agent** | 高 (50) | 高 (50) | 无 | ⭐⭐⭐ | 快速修复，模型适配层压力大 |
| **PicoClaw** | 中 (12) | 中 (15) | Nightly | ⭐⭐⭐ | 功能扩展，IoT 与安全补丁并重 |
| **NanoClaw** | 低 (4) | 高 (23) | 无 | ⭐⭐⭐⭐ | 内部迭代快，安全与多通道并行 |
| **NullClaw** | 低 | 低 | 无 | ⭐⭐⭐ | 修复关键 Zig 迁移回归问题 |
| **IronClaw** | 高 (31) | 高 (46) | 无 | ⭐⭐⭐ | 重构攻坚，CI 不稳定需关注 |
| **LobsterAI** | 中 | 高 (20 merged) | 无 | ⭐⭐⭐⭐⭐ | 质量优先，迅速修复关键 Bug |
| **Moltis** | 中 (6) | 高 (18) | v20260428.03 | ⭐⭐⭐⭐ | 功能爆发，稳定性需观察 |
| **CoPaw** | 高 (43) | 高 (32) | v1.1.5-beta.1 | ⭐⭐⭐ | 快速修复，核心稳定性波动 |
| **ZeptoClaw** | 无 | 15 (Bot) | 无 | ⭐⭐ | 依赖更新，无人工维护迹象 |
| **TinyClaw** | 无 | 无 | 无 | ⭐ | 静默 |
| **EasyClaw** | 无 | 无 | 无 | ⭐ | 静默 |

> *注：健康度评估综合考量 Issue/PR 处理速度、版本稳定性及社区反馈质量。*

## 3. OpenClaw 在生态中的定位

*   **核心参照物**：OpenClaw 以单日 500+ Issue 和 500+ PR 的吞吐量稳居生态"量级之首"，其动向往往定义了社区关注的标准问题（如性能回归、Session 记忆）。
*   **技术路线差异**：相比 IronClaw 激进的 "Reborn" 重构和 Zeroclaw 的微内核探索，OpenClaw 当前更侧重于**工程化落地与稳定性打磨**。其重点在于解决 v4.26 引入的性能瓶颈和多渠道细节修复，显示出"商业化部署前夜"的特征。
*   **社区规模对比**：社区活跃度远超其他项目（对比 NanoBot 的 37 PRs），但也面临更严峻的噪声治理挑战。其核心问题集中在高性能场景下的回归缺陷，而其他项目更多关注功能覆盖。

## 4. 共同关注的技术方向

1.  **DeepSeek V4 与新模型适配**
    *   **涉及项目**：LobsterAI, Hermes Agent, OpenClaw。
    *   **具体诉求**：LobsterAI (#1813) 与 Hermes (#17212) 均报告了 DeepSeek V4 或最新推理模型的 Schema 兼容性、工具调用及思考链解析问题。这表明生态对 SOTA 模型的跟进已进入"天级"竞争，API 变动对工具链冲击显著。

2.  **多渠道接入与标准化**
    *   **涉及项目**：NanoBot, NanoClaw, PicoClaw, OpenClaw。
    *   **具体诉求**：NanoBot 接入 Napcat(QQ)，NanoClaw 合并 Discord/Telegram 适配器，OpenClaw 修复 WhatsApp/Feishu 细节。**"全平台覆盖"**已成为标配能力，但各平台连接稳定性（如 Websocket 重连、Docker 环境兼容）仍是共性难点。

3.  **Session 记忆与上下文管理**
    *   **涉及项目**：OpenClaw, Zeroclaw, CoPaw。
    *   **具体诉求**：OpenClaw (#69270) 专注 Session 压缩修复，Zeroclaw (#5849) 提出 Dream Mode 记忆整合，CoPaw (#3895) 修复上下文丢失导致的死循环。长时记忆的压缩、检索与隔离是智能体"长脑子"的核心技术瓶颈。

4.  **Web Dashboard 与易用性**
    *   **涉及项目**：Zeroclaw, Moltis, CoPaw。
    *   **具体诉求**：Zeroclaw (#4866) 和 Moltis (#876) 均在强化 Web 端配置与文件上传体验。项目正从 CLI 向 Web 控制台转移，试图降低部署门槛，吸引非开发者用户。

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot / Moltis | IronClaw / Zeroclaw | PicoClaw |
| :--- | :--- | :--- | :--- | :--- |
| **核心定位** | 通用型智能体平台，追求大而全 | 轻量级、多渠道连接、易用性优先 | 架构前沿探索，微内核/插件化/安全 | 垂直领域，IoT 与硬件结合 |
| **技术侧重** | 性能优化、Gateway 稳定性 | 快速响应、渠道适配、本地模型 | 底层重构、安全策略、扩展机制 | MQTT协议、OpenVINO、边缘计算 |
| **目标用户** | 企业级部署、开发者 | 个人开发者、极客 | 架构师、高阶开发者 | 硬件开发者、IoT 场景 |
| **痛点特征** | 性能回归、大流量稳定性 | 配置复杂度、环境兼容性 | 架构变更导致的可用性断层 | 硬件兼容、边缘端性能 |

## 6. 社区热度与成熟度

*   **快速迭代与功能爆发期**：**NanoBot, Moltis, NanoClaw**。这些项目 Issue 闭环快，PR 合并频率高，正处于抢占市场份额的阶段，功能新增多于修复，但对新用户存在一定的不稳定性风险。
*   **质量巩固与修复期**：**OpenClaw, LobsterAI, Hermes Agent**。这些项目处于版本发布后的维护阶段，重心在于修复回归 Bug 和适配新模型。特别是 LobsterAI 展现出极高的修复效率（Session 死锁等问题迅速解决）。
*   **架构转型期**：**IronClaw, Zeroclaw**。处于 "破后而立" 的阵痛期，社区讨论集中在 RFC 和重构计划上，CI/CD 不稳定，旧 Bug 可能被搁置以等待新架构落地。
*   **低活跃/维护期**：**ZeptoClaw, NullClaw, TinyClaw**。主要由机器人驱动更新或仅进行关键修复，缺乏新功能讨论，社区热度较低。

## 7. 值得关注的趋势信号

1.  **"本地化"与"隐私优先"回归**：PicoClaw 支持 OpenVINO，NanoBot 支持本地 Whisper，Moltis 引入 Landlock FS 隔离。这表明在云端 API 成本上升和隐私顾虑背景下，**端侧推理与安全沙箱**正成为开源项目的核心竞争力。
2.  **Web UI 正在取代 CLI**：Zeroclaw 的 Web Onboarding、Moltis 的命令面板、CoPaw 的存储优化。项目正努力摆脱"黑框命令行"印象，向桌面应用体验靠拢，以触达更广泛的长尾用户。
3.  **容器化部署的细节博弈**：多个项目（Zeroclaw, NanoClaw, Moltis）均报告了 Docker 环境下的权限、网络或文件系统问题。这暗示着用户部署习惯已全面转向容器化，但项目对容器内行为的控制粒度（如 Outbox 权限、Nginx 配置）仍有待打磨。
4.  **安全漏洞的隐性风险**：PicoClaw 的沙箱逃逸漏洞、NanoClaw 的容器文件操作漏洞、IronClaw 的 SSRF 漏洞修复。随着智能体权限扩大（如执行命令、访问文件），**Agent 安全性**正成为继功能性之后的下一个必答题。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-29)

## 1. 今日速览
NanoBot 项目今日维持极高的活跃度，社区贡献与维护响应速度显著。过去24小时内，项目共处理了 **18 条 Issue**，其中关闭了 **13 条**，新增/活跃仅 **5 条**，Issue 闭环率极高，显示出维护团队强有力的问题消化能力。PR 方面共有 **37 条更新**，其中 **16 条已合并或关闭**，不仅修复了多个关键 Bug（如 Windows 平台兼容性、内存泄漏等），还引入了 Napcat (QQ) 频道、本地 Whisper 支持等重要功能。整体来看，项目处于快速迭代期，稳定性逐步提升，生态扩展势头强劲。

## 2. 版本发布
**无新版本发布。** 尽管无正式 Release，但主干分支合并了大量修复与功能更新，预计近期将迎来新的版本迭代。

## 3. 项目进展
今日共有 16 个 PR 被合并或关闭，项目在多渠道接入、稳定性和配置灵活性上取得实质性进展：

*   **功能增强与渠道扩展**：
    *   **[Merged] PR #3505 & #3405**: 新增 **Olostep** 网络搜索提供商，丰富了搜索工具链。
    *   **[Merged] PR #2740**: CLI 工具增强，支持在 `channels login` 和 `status` 命令中指定配置文件路径，提升了多实例管理体验。
    *   **[Merged] PR #3502**: 修复了飞书 频道中表情符号反应的时序问题，确保任务完成标记更准确。
*   **关键修复**：
    *   **[Open/Valid] PR #3510**: 针对 Windows 平台上 Matrix 频道因文件路径包含冒号导致的崩溃 (`WinError 123`) 提供了修复方案，解决了跨平台兼容性痛点。
    *   **[Open/Valid] PR #3517**: 修复了微信频道定时任务因 `context_token` 缺失导致消息发送失败的问题。
*   **架构优化**：
    *   **[Open] PR #3481**: 提出会话级历史记录隔离功能，旨在解决不同会话历史混淆的问题，这将显著改善多用户/多会话场景下的上下文管理。

## 4. 社区热点
今日社区关注点集中在 **渠道接入** 和 **模型提供商支持** 上：

*   **[PR #3509] Add Napcat (QQ) channel**: 该 PR 旨在通过 Napcat 接入 QQ 频道，支持图片收发、群欢迎消息等功能。QQ 作为国内核心社交平台，其接入一直备受关注，此功能若合并将极大拓展 NanoBot 在中文社区的应用场景。
*   **[Issue #2590] Minimax Provider 失效**: 该 Issue 反映升级后内置 Minimax 提供商无法工作，评论数达 5 条。这表明用户对国产大模型的支持非常依赖，急需修复或配置文档更新。
*   **[PR #3513] 本地 Whisper 支持**: 提出统一语音转录提供商并支持本地 Whisper，反映了社区对隐私保护和本地化部署的强烈需求。

## 5. Bug 与稳定性
今日报告了若干稳定性问题，部分已有修复方案：

1.  **[High] Windows 平台 Matrix 渠道崩溃**
    *   **Issue**: [#3506](HKUDS/nanobot Issue #3506) - Windows 上 Matrix 渠道发送消息失败 (`OSError [WinError 123]`)。
    *   **状态**: **已有修复 PR** [#3510](HKUDS/nanobot PR #3510)，通过清洗文件名中的冒号解决。

2.  **[High] 内存占用异常**
    *   **Issue**: [#3410](HKUDS/nanobot Issue #3410) - 升级至 v0.1.5.post2 后内存占用从 200MB 激增至 600MB。
    *   **状态**: Issue 已关闭，表明问题可能已被定位或解决（需关注后续 Commit）。

3.  **[Medium] Minimax 提供商失效**
    *   **Issue**: [#2590](HKUDS/nanobot Issue #2590) - 升级后 Minimax 配置失效。
    *   **状态**: **待修复**，目前处于 Open 状态，需社区或维护者关注。

4.  **[Medium] Gemini 模型 API 错误**
    *   **Issue**: 涉及 `reasoning_effort="none"` 导致 Gemini/gemma 模型报错 400。
    *   **状态**: **已有修复 PR** [#3515](HKUDS/nanobot PR #3515)，修正了参数传递逻辑。

## 6. 功能请求与路线图信号
结合 Issues 和 PRs，可以看出以下路线图信号：

*   **本地化与隐私**: PR #3513 (本地 Whisper) 和 PR #3519 (本地 Python 项目分析工具) 显示项目正在增强本地执行能力，减少对外部 API 的依赖。
*   **国产模型与渠道适配**:
    *   Issue #3518 请求支持小米模型（已关闭，可能暂不支持或为重复请求）。
    *   Issue #217 询问 Kimi 支持（已关闭）。
    *   PR #3509 (QQ 频道) 极大概率被纳入下一版本，填补即时通讯版图。
*   **历史记录与上下文管理**: Issue #3494 (历史文件加载问题) 和 PR #3481 (会话隔离) 表明社区正在推动更健壮的记忆管理系统。

## 7. 用户反馈摘要
*   **痛点**:
    *   **版本升级导致的回归**: 多个 Issue (#2590, #3410, #3328) 反映升级后出现配置失效、内存泄漏等问题，提示新版发布需加强回归测试。
    *   **群组识别能力**: Issue #3511 指出在群聊中无法识别发送者身份 (`sender_id`)，限制了多用户场景下的个性化服务。
    *   **本地模型幻觉**: Issue #1068 反映本地模型容易陷入工具调用死循环，提示本地模型的小参数量与复杂 Agent 逻辑之间存在适配难度。
*   **满意点**:
    *   用户 @kkayachr (Issue #877) 虽然提出了批评，但也表示项目“有很多乐趣”，并对未来成熟度抱有期待。
    *   对飞书、Telegram 等渠道的支持收到持续的优化反馈。

## 8. 待处理积压
以下重要议题尚未得到解决或积极响应，建议维护者优先关注：

1.  **[Issue #2590] Minimax Provider 失效**: 这是一个功能性阻断 Bug，影响特定用户群，目前尚未有 PR 关联。
2.  **[Issue #1068] 本地模型幻觉问题**: 属于长期未解决的 Stale Issue，涉及核心 Agent 逻辑与弱模型的适配，需要从提示词或工具调用逻辑层面进行优化。
3.  **[Issue #3511] 群组用户识别缺失**: 这是一个合理的增强请求，对于 NanoBot 从“个人助手”走向“群组助手”至关重要。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-29)

## 1. 今日速览
Zeroclaw 项目今日保持高活跃度开发状态，社区互动频繁。过去 24 小时内新增/活跃 Issue 26 条，PR 提交量显著（45 条待合并），显示开发团队正在积极推进功能迭代。重点集中在 **Web Dashboard 功能完善**（Web Onboarding、配置 CRUD）与 **底层架构重构**（微内核 RFC、Schema v3 迁移）。虽然无新版本发布，但多个核心 PR（如 Web Onboarding、ACP 协议更新）已进入 Review 阶段，预示着 v0.7.0 后的下一版本将包含重大架构调整。值得关注的是，Web Dashboard 的可用性问题（#4866）虽已关闭，但社区反馈强烈，表明用户对开箱即用体验的迫切需求。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 2 条 PR 更新为已合并/关闭状态，但大量核心功能 PR 处于活跃待合并状态，显示出项目正处于功能密集开发期。

*   **Web 端引导与配置重构 (重大进展)**：
    *   PR [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) 提交了通过 Gateway CRUD 端点实现 Web 端引导配置的功能，旨在让用户完全通过浏览器完成 Provider 认证、模型选择等初始化，摆脱对 CLI 的依赖。这是提升 Web 端用户体验的关键一步。
    *   对应 Issue [#6175](https://github.com/zeroclaw-labs/zeroclaw/issues/6175) 提出了该功能的跟踪需求。

*   **协议与架构更新**：
    *   PR [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) 正在实施 ACP (Agent Communication Protocol) v1 协议，涉及工具调用权限和反向通道支持，这是修复外部 ACP 客户端连接的关键。
    *   PR [#6197](https://github.com/zeroclaw-labs/zeroclaw/pull/6197) 修复了 CI 测试覆盖范围，确保 Workspace 内所有 crate 均被测试，提升了代码健康度。

*   **已关闭/拒绝**：
    *   PR [#3305](https://github.com/zeroclaw-labs/zeroclaw/pull/3305) (Wecom_ws AI bot channel) 已关闭，随即发起新的 Issue [#6201](https://github.com/zeroclaw-labs/zeroclaw/issues/6201) 计划恢复该功能，表明渠道支持的重构仍在调整中。

## 4. 社区热点
今日讨论热度最高的问题集中在用户体验与架构设计上：

*   **[S1] Web Dashboard 不可用问题**：Issue [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) 虽已关闭，但拥有 27 条评论。用户反馈 Web UI 和桌面端均提示需手动构建，这对非开发者用户造成阻碍。这反映出社区强烈希望项目提供预构建的前端资源。
*   **微内核架构 RFC**：Issue [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) 引发了 10 条深入讨论，该 RFC 提议将架构从 v0.7.0 向 v1.0.0 的微内核方向演进，已处于 Accepted 状态，标志着项目核心重构即将开始。
*   **多智能体路由需求**：Issue [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) 获得 8 个点赞，用户希望实现类似 OpenClaw 的多 Agent 路由隔离能力，是目前最受关注的功能请求之一。

## 5. Bug 与稳定性
今日报告了多个影响工作流的关键 Bug，需重点关注：

*   **S1 - 工作流阻塞**：
    *   Issue [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180)：配置 llama-cpp 后 Agent 功能报错 "All providers/models failed"，严重影响本地模型用户。
    *   Issue [#6187](https://github.com/zeroclaw-labs/zeroclaw/issues/6187)：配置参考文档链接失效（已关闭，可能已修复）。
*   **S2 - 功能降级**：
    *   Issue [#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097)：Skill 生成的图片使用本地路径，导致 API 模型无法读取。
    *   Issue [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153)：Matrix 渠道语音转写失败。
*   **安全与配置**：
    *   Issue [#6188](https://github.com/zeroclaw-labs/zeroclaw/issues/6188)：机器身份轮换后，持久化的加密配置（enc2:）无法解密，存在数据丢失风险。

## 6. 功能请求与路线图信号
结合 Issue 与 PR，项目下一阶段的路线图信号清晰：

*   **Schema v3 迁移**：Issue [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) 正在推进批量破坏性字段迁移，这是架构升级的前置条件。
*   **渠道扩展**：
    *   **企业微信**：虽然旧 PR 关闭，但新 Issue [#6201](https://github.com/zeroclaw-labs/zeroclaw/issues/6201) 明确提出恢复 `wecom_ws` 支持。
    *   **Napcat/QQ**：Issue [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) 持续寻求 Napcat/Onebot 协议支持。
*   **记忆增强**：Issue [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) 提出 "Dream Mode"（梦境模式），建议在空闲时进行记忆整合与反思学习，具备较高创新性。

## 7. 用户反馈摘要
*   **痛点：部署门槛高**：多位用户在 #4866 反馈前端构建问题，表明 Release 包中缺乏预构建 Web 资产是阻碍用户快速上手的主要因素。
*   **痛点：模型接入困难**：#6180 显示用户在接入本地 Llama 服务时遇到配置或兼容性问题，错误提示 "All providers failed" 缺乏排错指引。
*   **场景：企业级应用**：对 Wecom、钉钉等企业通讯工具的渠道支持呼声较高，显示出项目在 B 端场景的应用潜力。

## 8. 待处理积压
*   **多 Agent 路由 (Issue #2767)**：创建于 3 月初，点赞数高，建议官方将其纳入正式路线图。
*   **Webhook 功能增强 (Issue #2467)**：状态标记为 `blocked`，目前无法处理通用 Payload，限制了 Webhook 集成的通用性。
*   **配置加密密钥轮换 (Issue #6188)**：这是一个严重的安全隐患（S1 级影响），可能导致用户重置系统后配置丢失，建议优先修复。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-04-29)

## 1. 今日速览
过去 24 小时，Hermes Agent 项目保持高度活跃，共处理 Issues 与 PR 更新各 50 条。社区反馈集中在多模型支持（DeepSeek、Kimi）与多平台网关（钉钉、企业微信、Telegram）的兼容性问题。核心开发者合并了 9 个 PR，重点优化了 TUI 交互体验、修复了内存溢出风险及部分平台推送失败的问题。虽然无新版本发布，但针对近期引入的配置清洗 Bug 和路由逻辑缺陷，社区已迅速提交修复 PR，显示项目维护响应速度较快。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 9 个 PR 被合并或关闭，显著提升了系统的稳定性与用户体验：

- **性能优化**：PR #17089 修复了审查分支重建系统提示词导致前缀缓存失效的问题，实测可节省约 26% 的完整周期成本，显著降低了记忆功能的 Token 消耗。
- **多平台修复**：PR #11522 修复了 Telegram 消息分片在 UTF-16 编码下的边界崩溃问题；PR #17240 优化了 QQBot 网关重连机制，增加了缓存回退逻辑。
- **CLI/TUI 改进**：PR #17237 修复了终端粘贴模式下输入卡死的问题；PR #11536 新增了亮色终端主题的自动适配功能。
- **企业级支持**：PR #11527 增加了对 GitHub Enterprise Server 的认证支持，完善了 Copilot 提供商在企业环境的可用性。
- **Bug 修复**：PR #17239 修复了 CLI 模型别名解析错误，PR #17237 解决了 TUI "Thinking" 状态的渲染残留问题。

## 4. 社区热点
今日讨论最热烈的问题反映了用户对**模型兼容性**与**平台接入**的强烈需求：

- **Issue #16803** (👍 1, 💬 3): **[Bug] CLI 进入假死状态**。用户报告 CLI 在特定环境下忽略输入且无法通过 Ctrl-C 退出，只能强制 Kill。该问题已关闭，推测已在近期提交中修复。
  - 链接: [NousResearch/hermes-agent Issue #16803](https://github.com/NousResearch/hermes-agent/issues/16803)
- **Issue #8950** (👍 1, 💬 3): **[Feature] 扩展消息渠道支持**。用户对比竞品 OpenClaw，呼吁 Hermes 支持 IRC、Google Chat、Nostr 等更多消息平台，反映了项目作为多模态网关的扩展潜力。
  - 链接: [NousResearch/hermes-agent Issue #8950](https://github.com/NousResearch/hermes-agent/issues/8950)
- **Issue #7798** (👍 1, 💬 3): **[Bug] 智能路由导致上下文压缩逻辑错误**。当路由切换至低成本模型时，系统错误地使用廉价模型的上下文窗口阈值进行预检压缩，导致昂贵的上下文被错误裁剪。
  - 链接: [NousResearch/hermes-agent Issue #7798](https://github.com/NousResearch/hermes-agent/issues/7798)
- **Issue #17138** (👍 2, 💬 1): **[Bug] 环境变量配置被错误清洗**。系统在启动时将 `GLM_API_KEY` 错误地清洗为 `G\nLM_API_KEY`，导致配置失效，影响了 GLM 模型的正常使用。
  - 链接: [NousResearch/hermes-agent Issue #17138](https://github.com/NousResearch/hermes-agent/issues/17138)

## 5. Bug 与稳定性
今日报告的高优先级 Bug 集中在**模型适配层**与**网关连接稳定性**：

### P1 紧急 (影响核心功能)
- **DeepSeek 适配故障 (Issue #17212, #17199)**:
  - 多个 Issue 报告 DeepSeek 模型在多轮工具调用后报错 "reasoning_content must be passed back" (Issue #17212)。
  - 自定义 Endpoint（如火山引擎 ARK）因模型名称强制规范化而无法使用 (Issue #17199)。
  - 状态：待修复。
- **配置清洗误杀 (Issue #17138)**:
  - 环境变量清洗逻辑存在子字符串匹配 Bug，导致 GLM 相关配置失效。
  - 状态：**已有修复 PR #17241**，待合并。
- **网关重连机制失效 (Issue #17063)**:
  - Gateway 在重试 20 次后永久停止重连，导致 Telegram 等长连接平台在网络波动后无法自动恢复。
  - 状态：待修复。

### P2 严重 (影响特定场景)
- **钉钉文件接收失败 (Issue #16964)**: 通过 Stream Callback 接收的 PDF/DOCX 文件无法进入调度器，被静默丢弃。
- **Kimi 模型显示异常 (Issue #17201)**: v0.11.0 升级后，CLI 不再显示 Kimi 模型的推理框。已有修复 PR #17210 提交。
- **SSRF 安全漏洞 (PR #7699)**: 用户自定义 Provider URL 存在服务端请求伪造风险，目前已有安全修复 PR 待合并。

## 6. 功能请求与路线图信号
- **跨会话管理 (Issue #17193)**: 用户呼吁在 Telegram、Web UI 等不同网关间实现统一的会话管理和切换能力，反映了对"全平台漫游"功能的迫切需求。
- **记忆系统增强 (Issue #7896)**: 提议引入类似大脑联想网络的记忆提供者，支持记忆衰减和巩固，显示社区对长时记忆机制的探索已超越简单的 RAG 方案。
- **底层控制能力 (Issue #17215)**: 用户请求开放 Agent 执行 shutdown/reboot 命令的权限，目前该功能在黑名单中被禁止，社区倾向于提供可配置的开关。

## 7. 用户反馈摘要
- **模型切换痛点**: 频繁反馈在切换模型（尤其是 DeepSeek 和 Kimi）时遇到兼容性问题，如思考链不显示、API 报错等，说明 v0.11.0 版本的模型适配层变更引入了回归问题。
- **配置体验**: 用户对 `.env` 文件的自动清洗逻辑持负面态度（Issue #17138），认为过于激进的清洗破坏了现有配置，建议改进匹配逻辑。
- **平台集成**: 钉钉和企业微信用户反馈文件接收和推送稳定性仍有欠缺，特别是在 Cron 定时任务场景下，Token 过期处理不够健壮。

## 8. 待处理积压
以下重要 Issue 虽有讨论但尚未彻底解决，建议维护者优先关注：

- **Issue #7798 (P1)**: 智能路由与上下文压缩的冲突问题，直接影响成本控制和模型切换体验，目前尚未指派修复 PR。
- **Issue #7726 (P2)**: 依赖安全审计发现 `basic-ftp` 等组件存在高危漏洞，建议尽快跟进升级。
- **Issue #7863 (P2)**: `auth.json` 中的 `suppressed_sources` 配置项长期无效，影响凭证管理的灵活性。
- **Issue #7896 (P3)**: 高级记忆系统提案，已有多人关注，可作为中长期路线图的参考。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-29)

## 1. 今日速览
PicoClaw 项目今日保持高活跃度，发布了最新的 `v0.2.7-nightly` 自动构建版本。社区互动频繁，过去24小时内新增及活跃 Issue 达 12 条，PR 更新 15 条。项目在功能拓展与稳定性修复上双管齐下，重点推进了物联网接入能力与本地推理支持，合并了 MQTT 通道和串口工具支持，并修复了计划任务重复推送的关键 Bug。同时，社区对于安全沙箱逃逸和 LLM 调用重试机制的讨论热度较高，显示出用户对企业级稳定性的关注。

## 2. 版本发布
- **版本号**: `nightly: Nightly Build`
- **Tag**: `v0.2.7-nightly.20260429.db1bc6a1`
- **说明**: 这是一个自动化的每夜构建版本，可能存在不稳定性，仅供测试尝鲜。
- **变更日志**: [查看 v0.2.7...main 对比](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)

## 3. 项目进展
今日共有 5 个 PR 被合并或关闭，项目在多通道支持和底层工具集成上取得实质性进展：

- **新增 MQTT 通道支持** ([PR #2653](https://github.com/sipeed/picoclaw/pull/2653)): 成功合并了 MQTT 协议通道，显著增强了 PicoClaw 在 IoT 场景下的连接能力。
- **跨平台串口工具支持** ([PR #2673](https://github.com/sipeed/picoclaw/pull/2673)): 新增内置 `serial` 硬件工具，实现了 Linux、macOS 和 Windows 的跨平台支持，填补了硬件交互能力的空白。
- **修复 Cron 任务重复消息 Bug** ([PR #2689](https://github.com/sipeed/picoclaw/pull/2689)): 解决了升级至 0.2.7 后定时任务（Cron）重复发送报告的问题，提升了任务调度的可靠性。
- **Intel OpenVINO 本地推理支持** ([PR #2496](https://github.com/sipeed/picoclaw/pull/2496)): 关闭了相关 PR，项目现已支持通过 OpenVINO Model Server 在 Intel CPU/GPU/NPU 上运行本地 LLM。

## 4. 社区热点
今日讨论最活跃的 Issue 集中在服务稳定性与多用户场景：

- **LLM 调用失败无重试机制** ([Issue #629](https://github.com/sipeed/picoclaw/issues/629)): 该 Issue 创建于 2 月，今日再次活跃（评论数 11）。用户反馈长时间任务中遇到 HTTP 500 错误导致任务挂起，缺乏自动重试机制严重影响了生产环境的稳定性。
- **Gateway 启动异常** ([Issue #2513](https://github.com/sipeed/picoclaw/issues/2513)): 用户报告 v0.2.6 二进制版本在 Debian 上启动网关时出现异常，讨论集中在环境配置与错误日志分析。

## 5. Bug 与稳定性
今日报告了若干关键 Bug，其中包含严重的安全漏洞修复：

- **[严重] 沙箱逃逸漏洞** ([PR #2693](https://github.com/sipeed/picoclaw/pull/2693)): 修复了通过 `find /` 或 `ls /` 绕过工作区沙箱限制的漏洞。目前修复 PR 已提交，等待合并。
- **[严重] Slack 频道推理泄露** ([Issue #2699](https://github.com/sipeed/picoclaw/issues/2699)): 用户报告在多 Slack 频道场景下，思考过程会被发送到错误的频道。该 Issue 已被关闭，推测已在最新版修复。
- **[中等] 多人群组消息归属缺失** ([Issue #2702](https://github.com/sipeed/picoclaw/issues/2702)): 新增 Bug，在 Discord 等群组中，历史记录无法显示消息发送者，导致多用户对话上下文混乱。
- **[已修复] Docker 构建失败** ([PR #2700](https://github.com/sipeed/picoclaw/pull/2700)): 修复了 `docker compose build` 无构建目标及 Go 版本引用错误的问题，恢复容器化部署能力。

## 6. 功能请求与路线图信号
社区提出了多项功能性需求，反映出 PicoClaw 正向更广泛的平台和更精细的控制发展：

- **Mission Control 集成** ([Issue #2698](https://github.com/sipeed/picoclaw/issues/2698)): 用户请求支持 Mission Control 控制台集成，以便更好地管理和监控 Agent 状态。
- **Web Chat 流式输出** ([Issue #1950](https://github.com/sipeed/picoclaw/issues/1950)): 请求为 Web Chat 增加流式输出支持，提升交互体验，该需求已列入 Roadmap。
- **原生 Email 通道** ([Issue #2421](https://github.com/sipeed/picoclaw/issues/2421)): 提议增加 Email 作为原生通道，以满足特定办公场景需求。
- **WebUI Token 消耗统计** ([Issue #2217](https://github.com/sipeed/picoclaw/issues/2217)): 请求增加仪表盘以显示 Token 消耗统计，便于成本控制。

## 7. 用户反馈摘要
从 Issue 评论中提炼出以下用户痛点：

- **生产环境容错性不足**: 用户强烈希望增加 LLM 调用的自动重试逻辑，目前服务端偶发的 500 错误会导致整个任务流中断。
- **多语言适配不彻底**: Android 客户端在切换英文后，部分界面仍显示中文，影响国际化用户体验 ([Issue #2367](https://github.com/sipeed/picoclaw/issues/2367))。
- **Android 本地模型配置困惑**: 用户在 Web 端配置模型后，Android 客户端仍提示“未配置”，配置同步逻辑存在断点 ([Issue #2368](https://github.com/sipeed/picoclaw/issues/2368))。
- **Android 库文档缺失**: 开发者请求提供 `libpicolaw.so` 的文档，以便进行二次开发 ([Issue #2695](https://github.com/sipeed/picoclaw/issues/2695))。

## 8. 待处理积压
以下重要 Issue 长期未获解决或响应，建议维护者关注：

- **[Bug] 历史会话记录不全** ([Issue #2310](https://github.com/sipeed/picoclaw/issues/2310)): WebUI 关闭后重开仅显示最近一两条记录，严重影响用户回顾和演示，该问题已存在近一个月，标记为 `stale`。
- **[Bug] LLM 调用失败无重试** ([Issue #629](https://github.com/sipeed/picoclaw/issues/629)): 自 2 月份提出至今未彻底解决，已成为影响稳定性的核心痛点。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-29)

## 1. 今日速览
NanoClaw 项目今日呈现高强度的开发迭代状态，社区活跃度显著提升。过去24小时内共有 **23 条 PR 更新**，其中 12 条已关闭/合并，显示核心团队正在快速整合大量新功能与修复。Issues 板块新增 4 条反馈，主要集中在多平台适配（Discord/iMessage）的运行时问题和部署权限配置上。值得关注的是，项目正在积极吸纳第三方贡献，新增了对 OpenCode SDK 和多通道的支持，同时也暴露了快速迭代中存在的上下文路由和权限管理隐患。

## 2. 版本发布
无新版本发布。鉴于大量功能性 PR 已合并（如 OpenCode 支持、多通道适配器），预计项目正在为下一个主要版本更新做准备。

## 3. 项目进展
今日共有 12 条 PR 被合并或关闭，项目功能边界大幅扩展，主要集中在以下方面：

*   **多后端与多通道支持突破**：
    *   PR #1628 与 #1776 已关闭/合并，正式引入 **OpenCode SDK** 作为替代 Anthropic/Claude Code 的 Agent 后端，增强了模型选择的灵活性。
    *   PR #2083 合并，一次性添加了 **Discord, Telegram, WhatsApp** 通道适配器及 OpenAI Codex 提供者，极大拓宽了应用场景。
    *   PR #2008 优化了 Telegram 通道的媒体文件处理，使其支持图片/视频的内联预览而非仅作为文件附件下载。

*   **稳定性与容错增强**：
    *   PR #2080 引入了**启动熔断器**，防止因频繁崩溃导致 Discord Gateway 限流及 Cloudflare IP 封禁，提升了服务在高负载或异常情况下的生存能力。
    *   PR #2007 修复了 Reaction 功能中的 ID 查找问题，PR #2077 解决了重复消息导致的数据库插入错误。

*   **开发者体验优化**：
    *   PR #2075 修复了 Slack 设置流程，现在能够像 Discord/Telegram 一样端到端自动完成配置并发送欢迎 DM。

## 4. 社区热点
今日社区关注点集中在跨平台兼容性与安全性问题上：

*   **Issue #1959 [Discord 回复错位]**：该问题引发了较多讨论（1 评论, 1 点赞）。用户反馈 Agent 的回复并不跟随消息源，而是固定在容器初始化时的线程中。这暴露了多轮对话上下文管理的核心逻辑在 Discord 适配器中可能存在缺陷。
    *   链接: [qwibitai/nanoclaw Issue #1959](https://github.com/qwibitai/nanoclaw/issues/1959)
*   **PR #2001 [安全性修复]**：该 PR 修复了一个潜在的容器逃逸风险，防止容器通过操控 Outbox 路径读取或删除宿主机文件。作为安全相关的重要更新，建议社区重点关注其合并进度。
    *   链接: [qwibitai/nanoclaw PR #2001](https://github.com/qwibitai/nanoclaw/pull/2001)

## 5. Bug 与稳定性
今日报告了数个影响特定平台使用的 Bug，按严重程度排序如下：

*   **🔴 严重 - 安全隐患**：
    *   **PR #2001 [待合并]**：发现容器可通过 Outbox 路径操控宿主机文件。目前已有修复 PR 待合并，需密切关注。
*   **🟠 中等 - 功能失效**：
    *   **Issue #1959 [OPEN]**：Discord 回复错位，严重影响 Discord 频道用户体验，导致对话逻辑混乱。
    *   **Issue #2088 [OPEN]**：iMessage 本地模式下，出站消息静默发送失败，系 `launchd` 管理的进程无法获取 Automation 权限所致。无报错日志增加了排查难度。
*   **🟡 一般 - 部署配置**：
    *   **Issue #2073 [OPEN]**：以 Root 用户运行 Host 时，容器因数据库只读而崩溃。这是部署配置权限不当的典型问题，需文档或代码层面的兼容性修复。

## 6. 功能请求与路线图信号
从 Issues 和 PRs 中捕捉到以下产品演进信号：

*   **Agent 生命周期管理优化**：Issue #2085 请求 `/create-agent` 技能，希望实现“先创建后连接”的 Agent 预配置模式。这反映了用户对大规模、自动化部署多租户 Agent 的需求。结合已合并的 OpenCode 后端支持，NanoClaw 正向“多租户/多模型托管平台”方向演进。
*   **灾难恢复能力**：PR #2084（待合并）提出了完整的备份与恢复方案，支持每日快照和 S3 后端。这表明项目正从实验性工具向生产级应用转型，数据持久性成为核心指标。
*   **全平台覆盖**：随着 Matrix E2EE (PR #1624 待合并) 和 WhatsApp (PR #2083 已合并) 的推进，项目致力于打造全渠道统一的消息入口。

## 7. 用户反馈摘要
从 Issues 分析中提炼出以下用户痛点：

*   **平台差异带来的黑盒问题**：iMessage 用户反馈“静默失败”表明，在 macOS 特定权限模型下，缺乏有效的错误反馈机制让用户感到无助。
*   **容器状态管理的困惑**：Discord 用户遇到的回复错位问题，揭示了用户对“容器生命周期”与“会话生命周期”绑定的困惑。用户期望会话独立，而当前实现似乎将容器状态与特定线程强绑定。

## 8. 待处理积压
*   **PR #1624 [OPEN]**：Matrix E2EE 通道支持。该 PR 自 4 月 4 日开启至今未合并，涉及复杂的 E2EE 实现，建议维护者评估其合并优先级或阻塞原因。
*   **PR #2001 [OPEN]**：关键安全修复 PR。鉴于其涉及宿主机文件安全，建议优先审查并合并，避免在广泛部署中产生安全风险。
*   **Issue #1959**：Discord 回复路由问题。作为活跃度较高的 Issue，目前尚未有官方确认的修复 PR（尽管 PR #2078 可能相关），建议开发团队尽快确认修复计划。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-29)

## 1. 今日速览
NullClaw 项目今日整体活跃度适中，核心关注点在于**生产环境的稳定性修复**与**核心功能的持续迭代**。开发者针对 Zig 0.16 迁移引发的 Mattermost 网关高严重性回归问题进行了快速迭代修复（PR #872 关闭后立即由 #873 接替）。功能层面，Cron 子智能体引擎（PR #783）持续更新，显示出项目正积极向自动化调度能力拓展。虽然无新版本发布，但文档层面的缺失（Issue #874）提示了项目在易用性建设上仍有补足空间。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日项目主要通过 Pull Requests 的迭代维护了代码质量与功能演进：

*   **关键修复迭代**：针对 Zig 0.16 迁移带来的严重问题，PR #872 已关闭，随即开启了 PR #873。这表明维护者正在积极调试 Mattermost 网关的 CPU 空转和消息发送失败问题，修复方案正在快速校准中。
*   **功能增强推进**：PR #783（Cron 子智能体引擎）继续保持活跃状态。该 PR 涉及 DB-backed 调度器、运行历史记录及安全加固等复杂逻辑，其持续更新标志着项目在**自动化任务调度**这一核心能力上正在稳步推进，预计将显著增强 NullClaw 的无人值守运行能力。

## 4. 社区热点
今日社区最关注的议题围绕**安全策略的文档缺失**展开：

*   **Issue #874 [OPEN]**: [Docs: missing documentation for security policy "default_allowed_commands"](https://github.com/nullclaw/nullclaw/issues/874)
    *   **分析**：用户 @Mental-Vortex 指出安全策略配置项 `default_allowed_commands` 缺乏文档说明，并直接引用了源码链接。这反映出用户在配置安全策略时遇到阻碍，不得不通过阅读源码来理解功能，侧面说明项目文档更新速度稍滞后于代码实现。

## 5. Bug 与稳定性
今日暴露了一个影响生产环境的**高严重性回归问题**，目前已有修复 PR 待合并：

*   **[P0] Zig 0.16 Mattermost 网关回归** (关联 PR: [#873](https://github.com/nullclaw/nullclaw/pull/873))
    *   **问题描述**：自 Zig 0.16 迁移后，所有连接 Mattermost 的生产环境智能体受到影响。
        1.  **CPU 空转**：网关线程在 daemon 模式下出现 100% CPU 占用（busy-spin on EAGAIN）。
        2.  **消息静默失败**：Mattermost 消息发送失败（empty-body POST），导致通信中断。
    *   **状态**：已有修复 PR #873 提交，待审核合并。

## 6. 功能请求与路线图信号
*   **自动化调度能力**：PR #783 的持续活跃释放了明确的路线图信号。NullClaw 正致力于构建**Cron 子智能体引擎**，包含任务队列、历史记录表及 JSON 输出支持。结合安全加固措施，预示该项目正从单纯的交互式助手向**支持定时任务与自动化运维的平台级工具**演进。

## 7. 用户反馈摘要
*   **痛点**：文档同步滞后。用户在尝试配置 `default_allowed_commands` 这一安全相关功能时发现文档缺失，不得不直接查阅 Zig 源码（Issue #874）。这表明在安全配置等关键环节，用户对官方指引的依赖度较高，需加强 Doc-as-Code 的实践。

## 8. 待处理积压
*   **PR #783 [OPEN]**: [feat(cron): cron subagent...](https://github.com/nullclaw/nullclaw/pull/783)
    *   该 PR 自 2026-04-07 开启至今已超过三周，虽然保持活跃更新，但体量较大（涉及调度引擎、DB Schema、安全机制）。建议维护者关注其合并进度，避免长期大分支未合入带来的维护成本。

---
*数据来源：GitHub NullClaw Repository | 分析时间：2026-04-29*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-29)

## 1. 今日速览
IronClaw 项目今日处于极高活跃度状态，核心团队正全力推进代号为 **"Reborn"** 的重大架构重构。过去24小时内共有 31 条 Issue 更新与 46 条 PR 更新，显示出项目正处于架构转型的关键攻坚期。重点动向包括大规模落地 Reborn 架构的基础设施代码（策略引擎、进程生命周期、扩展注册表），同时 V2 引擎的 Bug 修复与功能打磨也在同步进行。虽然无新版本发布，但多个核心 PR 的合并标志着底层架构已开始向新模型迁移。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 16 个 PR 被合并或关闭，主要集中在架构重构与功能增强：

*   **架构重构**:
    *   **PR #3041 (已合并)**: 重构了工具权限默认值的处理逻辑，移除了独立的 `TOOL_RISK_DEFAULTS` 映射，统一了权限策略路径，为 Reborn 架构的安全性打下基础。
    *   **PR #3042 (已合并)**: 引入了策略引擎的核心实现，这是 Reborn 架构中控制信任类的关键组件。
    *   **PR #3015 (已合并)**: 增加了扩展清单注册表，这是重构扩展管理机制的基础设施。
*   **功能迭代**:
    *   **PR #3007, #3050 (已合并)**: 针对 Abound demo 分支进行了调整，禁用了 v2 CodeAct 以进行测试，并优化了系统提示词。
*   **基础设施**:
    *   **PR #3049 (已合并)**: 修复了工具执行断言与 temperature 处理逻辑。

总体而言，项目正在快速搭建 "Reborn" 架构的底层基座，今日合并的 PR 多为后续大型功能铺路的底层变更。

## 4. 社区热点
今日社区讨论焦点高度集中在 **Reborn 架构的落地计划** 上：

*   **Issue #2987 [23条评论]**: 这是今日最活跃的议题。维护者 @serrrfirat 发起的 Epic，旨在规划如何将庞大的 Reborn 架构分批次、可审查地合并入主分支，避免巨型 PR 导致审查困难。讨论涉及了详细的分组 PR 计划与集成策略，反映出团队对代码质量与审查效率的重视。
    *   链接: [nearai/ironclaw Issue #2987](https://github.com/nearai/ironclaw/issues/2987)
*   **Issue #233 [2条评论]**: 关于 W3C 分布式追踪的长期需求。作者建议在 Web Gateway、Agent Loop 和 Worker 之间传播 `traceparent` headers 以解决调试困难。该议题虽老但近期再次活跃，显示社区对可观测性（Observability）的强烈需求。
    *   链接: [nearai/ironclaw Issue #233](https://github.com/nearai/ironclaw/issues/233)

## 5. Bug 与稳定性
今日报告了多个与 V2 引擎及部署相关的稳定性问题，且 CI/CD 流水线出现多次告警：

*   **V2 引擎功能缺陷**:
    *   **Issue #3035**: Agent 忽略配置的显示名称，始终以 "IronClaw" 身份响应。
    *   **Issue #3034**: V2 引擎默认禁用 HTTP 工具且无引导开启流程，影响用户体验。
*   **部署与兼容性**:
    *   **Issue #2949**: 安装脚本在 `x86_64-unknown-linux-gnu` 平台上报错，无法找到对应下载包，影响特定平台的用户安装。
    *   **Issue #2982 (已关闭)**: 升级到 0.26.0 后，现有的 Routine 被错误分类为 Mission，属于数据迁移问题。
*   **CI/CD 稳定性告警**:
    *   **Issue #3052, #3037, #3030, #3038**: 多个 Canary 测试（private-oauth, public-smoke）失败。虽然可能是测试环境波动，但高频次的失败需关注是否涉及近期提交的回归问题。

## 6. 功能请求与路线图信号
除了核心架构演进外，社区提出了若干具体的功能需求：

*   **钱包集成支持 (Issue #3025)**: 用户请求支持 Trezor 或 Metamask 钱包，指出当前热钱包连接器选项有限且多为闭源。
*   **Telegram 机器人增强 (PR #3048, #3047)**: 社区开发者贡献了 Telegram 机器人的新功能，包括“观察模式”（在群组中静默记录上下文）和“群组白名单控制”。这些 PR 目前处于 Open 状态，功能完善且针对性强，预计大概率被纳入。
*   **阿里云支持 (PR #1446)**: 持续更新中的 PR，旨在增加对阿里云 BaiLian Coding Plan 的支持，扩展了 LLM 提供商生态。

## 7. 用户反馈摘要
*   **V2 引擎体验割裂**: 部分用户反馈 V2 引擎在设置迁移和默认行为上存在困惑（如 HTTP 工具默认禁用），建议加强迁移引导或默认配置优化。
*   **安装门槛**: Linux 特定架构的安装脚本报错阻碍了部分开发者的试用，急需修复以降低入门门槛。
*   **去中心化需求**: 用户对集成开源/去中心化钱包（Trezor/Metamask）有明确诉求，反映出项目用户群体对资产自托管和安全性的关注。

## 8. 待处理积压
以下重要 Issue 或 PR 长期未得到最终解决，建议维护者关注：

*   **安全漏洞修复 (PR #2092, #2094)**:
    *   PR #2092 修复了通过内存投毒进行的间接提示注入漏洞。
    *   PR #2094 修复了扩展下载和 MCP 传输中的 SSRF 漏洞。
    *   这两个 PR 均由核心贡献者提交，标记为 Medium 风险，但已创建近一个月仍未合并。考虑到其安全性质，建议优先审查合并。
    *   链接: [nearai/ironclaw PR #2092](https://github.com/nearai/ironclaw/pull/2092)
*   **分布式追踪需求 (Issue #233)**: 该需求创建于 2 月，对于生产环境调试至关重要，随着架构复杂度增加（Reborn），此功能的优先级应相应提升。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-29)

## 1. 今日速览
LobsterAI 项目今日呈现出**高强度的迭代维护与功能扩张**态势。过去 24 小时内，项目合并/关闭了高达 20 个 Pull Requests，主要集中在修复 Gateway 稳定性、IM 渠道兼容性以及前端交互逻辑优化，显示出团队正在为新版本发布进行密集的代码整合与错误修正。虽然今日无新版本 Release，但大量功能性修复的合入表明项目正在快速逼近下一个里程碑。社区方面，用户对新模型（如 DeepSeek V4）的支持需求较为迫切，同时也有开发者提交了关键的架构优化代码（如 Per-Agent 模型选择），整体活跃度与健康度极高。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 20 个 PR 被合并或关闭，项目整体稳定性显著提升，模型生态支持进一步扩大。

*   **架构与交互优化**：
    *   PR [#1865](https://github.com/netease-youdao/LobsterAI/pull/1865) 实现了 Header ModelSelector 的 Per-Agent 模型选择逻辑拆分，解决了非主 Agent 模型状态不同步的问题，提升了多 Agent 场景下的用户体验。
    *   PR [#1860](https://github.com/netease-youdao/LobsterAI/pull/1860) 修复了首页图片输入组件未正确读取头部选定模型属性的 Bug，确保了多模态能力的正确触发。

*   **稳定性修复**：
    *   PR [#1869](https://github.com/netease-youdao/LobsterAI/pull/1869) 修复了 Gateway 无限重试导致的 Session 死锁问题，显著增强了运行时的鲁棒性。
    *   PR [#1872](https://github.com/netease-youdao/LobsterAI/pull/1872) 与 [#1857](https://github.com/netease-youdao/LobsterAI/pull/1857) 分别解决了 Gateway 因套餐列表更新或模型切换引发的强制重启问题，降低了服务中断频率。

*   **模型与功能扩展**：
    *   PR [#1862](https://github.com/netease-youdao/LobsterAI/pull/1862) 与 [#1859](https://github.com/netease-youdao/LobsterAI/pull/1859) 分别新增了对小米 Mimo 模型和百度千帆模型的 Coding Plan 支持，持续扩展智能体编程能力。
    *   PR [#1864](https://github.com/netease-youdao/LobsterAI/pull/1864) 升级了有道云笔记技能。

*   **IM 渠道修复**：
    *   PR [#1868](https://github.com/netease-youdao/LobsterAI/pull/1868) 修复了微信渠道图片过大且无法预览的问题；PR [#1866](https://github.com/netease-youdao/LobsterAI/pull/1866) 修复了飞书接收文件时的中文乱码问题。

## 4. 社区热点
今日讨论最活跃的问题集中在**最新 SOTA 模型的适配**与**前端状态同步**上。

*   **[Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813) DeepSeek V4 无法使用**：该 Issue 引发了 6 条评论讨论。用户反馈在使用最新模型 DeepSeek V4 时出现 `provider rejected the request schema` 错误。这反映出用户对前沿模型的跟进速度有极高期待，项目可能需要针对新模型 API 格式进行快速适配。
*   **[Issue #1861](https://github.com/netease-youdao/LobsterAI/issues/1861) 图片附件状态不同步**：用户详细描述了在视觉/非视觉模型切换时，图片附件处理逻辑（base64 vs filepath）未更新的问题。该问题已通过 PR #1860 得到修复，体现了社区反馈对功能完善的直接推动作用。

## 5. Bug 与稳定性
今日报告的关键 Bug 主要涉及模型兼容性与前端状态管理，部分已迅速修复。

*   **P0 - 严重**：
    *   **DeepSeek V4 兼容性失效** ([Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813))：调用失败，提示 Provider 拒绝请求 Schema。目前尚无对应修复 PR 合并，需持续关注。
*   **P1 - 重要 (已修复)**：
    *   **Session 死锁** ([PR #1869](https://github.com/netease-youdao/LobsterAI/pull/1869))：Gateway 重试机制导致会话卡死。
    *   **Gateway 频繁重启** ([PR #1872](https://github.com/netease-youdao/LobsterAI/pull/1872), [PR #1857](https://github.com/netease-youdao/LobsterAI/pull/1857))：模型切换或列表更新引发的服务中断。
*   **P2 - 一般**：
    *   **图片状态不同步** ([Issue #1861](https://github.com/netease-youdao/LobsterAI/issues/1861))：模型切换后图片处理逻辑未刷新，已由 [PR #1860](https://github.com/netease-youdao/LobsterAI/pull/1860) 修复。
    *   **IM 图片展示与乱码** ([PR #1868](https://github.com/netease-youdao/LobsterAI/pull/1868), [PR #1866](https://github.com/netease-youdao/LobsterAI/pull/1866))：影响微信与飞书渠道的用户体验，已修复。

## 6. 功能请求与路线图信号
*   **多模型 Coding Plan 生态**：近期连续合并了对百度千帆和小米 Mimo 模型的 Coding Plan 支持 ([PR #1859](https://github.com/netease-youdao/LobsterAI/pull/1859), [PR #1862](https://github.com/netease-youdao/LobsterAI/pull/1862))，信号表明项目正致力于打造通用的多模型编程辅助底座，未来预计将支持更多主流推理模型。
*   **模型切换体验优化**：针对模型切换带来的状态问题，团队正在重构 `selectedModel` 逻辑 ([PR #1865](https://github.com/netease-youdao/LobsterAI/pull/1865))，暗示下一版本将重点优化多模型共存场景下的交互流畅度。

## 7. 用户反馈摘要
用户在使用过程中对**多模态交互的细节**十分敏感。Issue #1861 中，用户精准地指出了“非视觉模型转视觉模型”时文件路径未转为 base64 的问题，说明 LobsterAI 的核心用户群体具有较高的技术素养，且深度使用多模型切换功能。此外，DeepSeek V4 的报错反馈显示，用户倾向于第一时间在 LobsterAI 中尝试最新发布的模型，这对项目的模型适配响应速度提出了更高要求。

## 8. 待处理积压
*   **安全问题待审**：[PR #908](https://github.com/netease-youdao/LobsterAI/pull/908) (MCP 命令注入漏洞) 和 [PR #909](https://github.com/netease-youdao/LobsterAI/pull/909) (Skill 安全校验绕过) 仍处于 Open/Stale 状态，涉及底层安全架构，建议维护者尽快评审合并。
*   **高优 Issue 搁置**：[Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813) 关于 DeepSeek V4 的问题目前尚未有官方修复 PR 动态，建议优先排查 Schema 兼容性。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-29)

## 1. 今日速览
Moltis 项目今日保持**极高活跃度**，呈现出"功能大爆发"与"快速迭代修复"并行的态势。过去24小时内共有 **18 个 PR 更新**，其中 15 个已合并/关闭，伴随着新版本 `20260428.03` 的发布，显示维护者对代码合并持积极且高效的态度。新增的 **6 条 Issue** 中包含 2 个已修复的 Bug 和 4 个活跃请求，主要集中在 Telegram 集成问题和 WebUI 功能增强上。整体来看，项目正在迅速补齐多源导入、语音交互和系统更新等核心功能拼图，但近期版本在 Telegram 通道和 Docker 环境下的稳定性仍需观察。

## 2. 版本发布
- **版本号**: `20260428.03`
- **更新范围**: 此版本是一个功能密集型更新，整合了今日合并的多个重要 PR。
- **关键变更**:
    - **功能新增**:
        - 新增 **命令面板**，支持 `Cmd+K` / `Ctrl+K` 快捷键快速导航与操作 ([PR #904](https://github.com/moltis-org/moltis/pull/904))。
        - WebUI 聊天输入框新增 **"+" 按钮文件上传** 功能，优化多模态交互体验 ([PR #876](https://github.com/moltis-org/moltis/pull/876))。
        - 引入 **Landlock FS 隔离**，增强 Linux 环境下的沙箱安全性 ([PR #866](https://github.com/moltis-org/moltis/pull/866))。
        - 新增 **自更新功能**，支持通过命令行或 WebUI 一键升级 ([PR #911](https://github.com/moltis-org/moltis/pull/911))。
    - **修复与优化**:
        - 修复了 Telegram 消息因 `name` 字段未清洗导致的 HTTP 422 错误 ([PR #915](https://github.com/moltis-org/moltis/pull/915))。
        - 修复了 Nginx 反向代理下的 WebSocket 跨域错误 ([PR #907](https://github.com/moltis-org/moltis/pull/907))。
        - 统一了 Provider 名称验证逻辑，修复了部分 Provider 误报未知的问题 ([PR #912](https://github.com/moltis-org/moltis/pull/912))。

## 3. 项目进展
今日项目进展显著，主要集中在**互操作性增强**、**用户体验优化**和**架构健壮性**三个方面：
- **数据迁移与互操作**: 合并了 [PR #914](https://github.com/moltis-org/moltis/pull/914)，支持从 Claude Code、Claude Desktop 和 Hermes 导入数据，降低用户迁移门槛；同时 [PR #913](https://github.com/moltis-org/moltis/pull/913) 增加了多平台爬虫工具（WhatsApp, Discord, Slack等）作为捆绑技能，扩展了 Agent 的数据获取能力。
- **WebUI 交互升级**: 随着 [PR #876](https://github.com/moltis-org/moltis/pull/876)（文件上传）和 [PR #904](https://github.com/moltis-org/moltis/pull/904)（命令面板）的合并，WebUI 的易用性已接近主流商业产品水平。
- **架构重构**: [PR #912](https://github.com/moltis-org/moltis/pull/912) 重构了 Provider 验证逻辑，消除了硬编码的混乱，为后续支持更多模型提供商打下基础。

## 4. 社区热点
今日讨论焦点主要集中在**Telegram 集成**与**新功能扩展**：
- **Issue #905 [CLOSED]**: 作者 @RokkuCode 报告的 Telegram Bug 引发了 3 条评论讨论，最终由 [PR #915](https://github.com/moltis-org/moltis/pull/915) 修复。该问题涉及 Mistral 和 OpenAI 的字段兼容性，反映出社区对第三方模型接入 Telegram 通道的强需求。
- **Issue #918 [OPEN]**: 用户 @faevourite 报告最新版 `v20260428.03` 中 Telegram 在 Docker 环境下再次失效。这表明修复可能不完整或引入了回归，是目前急需关注的稳定性问题。
- **Issue #533 [OPEN]**: 关于消息附件添加按钮的请求。随着 [PR #876](https://github.com/moltis-org/moltis/pull/876) 的合并，该需求已得到响应，预计将在后续版本中彻底解决。

## 5. Bug 与稳定性
今日报告并处理的 Bug 情况如下，按严重程度排序：
1.  **[Critical] Telegram 在 Docker 中不可用** ([Issue #918](https://github.com/moltis-org/moltis/issues/918))
    - **现象**: 最新版本 `v20260428.03` 在 Docker 环境下 Telegram 功能失效。
    - **状态**: **待确认**。可能是 [PR #915](https://github.com/moltis-org/moltis/pull/915) 修复引入的回归或特定环境问题。
2.  **[High] Docker 构建失败** ([Issue #896](https://github.com/moltis-org/moltis/issues/896) [CLOSED])
    - **现象**: `apt-get update` 阶段 DNS 解析失败。
    - **状态**: **已关闭**，推测已通过构建流程修复。
3.  **[Medium] Provider 名称验证误报** ([PR #912](https://github.com/moltis-org/moltis/pull/912) [CLOSED])
    - **现象**: 7 个合法 Provider 被错误标记为未知。
    - **状态**: **已修复**。
4.  **[Low] Nginx 反向代理 WebSocket 拒绝** ([PR #907](https://github.com/moltis-org/moltis/pull/907) [CLOSED])
    - **现象**: 非标准端口下 WebSocket 升级失败。
    - **状态**: **已修复**，文档已更新。

## 6. 功能请求与路线图信号
- **语音角色系统**: [PR #916](https://github.com/moltis-org/moltis/pull/916) 提出为 TTS 添加"语音角色"，使 Agent 拥有稳定的说话风格。这标志着 Moltis 正向更具个性化的 AI 伴侣方向发展。
- **WebUI 子 Agent 配置**: [Issue #906](https://github.com/moltis-org/moltis/issues/906) 请求在 WebUI 中配置子 Agent。这符合项目"多 Agent 协作"的技术路线，有望被纳入近期规划。
- **第三方路由支持**: [Issue #266](https://github.com/moltis-org/moltis/issues/266) 提出支持 `9router`。鉴于项目刚重构了 Provider 逻辑 ([PR #912](https://github.com/moltis-org/moltis/pull/912))，此类通用路由适配器的集成难度降低，值得关注。

## 7. 用户反馈摘要
- **痛点 - Telegram 稳定性**: 用户对 Telegram 通道的稳定性极其敏感。在 24 小时内，旧 Bug ([#905](https://github.com/moltis-org/moltis/issues/905)) 刚修复，新版本立即出现新问题 ([#918](https://github.com/moltis-org/moltis/issues/918))，显示出该模块在不同环境下的兼容性测试仍需加强。
- **满意度 - 导入功能**: 社区对 [PR #914](https://github.com/moltis-org/moltis/pull/914) 表现出积极预期，从 Claude Desktop 等竞品迁移数据的能力是用户"入坑"的关键动力。
- **场景 - 自动化运维**: 新增的 `/update` 命令 ([PR #911](https://github.com/moltis-org/moltis/pull/911)) 和自动索引 ([PR #903](https://github.com/moltis-org/moltis/pull/903)) 显示用户倾向于将 Moltis 作为长期运行的自动化服务使用。

## 8. 待处理积压
- **PR #339 (zh-TW 本地化)**: 该 PR 自 3 月 5 日创建至今未合并，虽然今日有更新，但长时间挂起可能影响贡献者积极性。建议维护者尽快 Review。
- **Issue #266 (9router 支持)**: 该请求已开放近两个月，近期虽有 Provider 重构利好，但仍需官方表态是否支持第三方通用路由。
- **Issue #918 (Telegram Docker Bug)**: **最紧急积压**。作为今日新增且影响核心功能的 Issue，建议优先排查是否为回归 Bug。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# 2026-04-29 CoPaw 项目动态日报

## 1. 今日速览
CoPaw 项目（数据源主要关联 QwenPaw 仓库）今日保持了极高的活跃度，过去 24 小时内共有 43 条 Issue 更新和 32 条 PR 更新。项目发布了 **v1.1.5-beta.1** 版本，重点修复了控制台存储、时区处理及上下文同步等核心稳定性问题。社区讨论热烈，聚焦于 Web UI 暂停功能的实效性、智能体工作空间隔离以及 Debian 系统下的页面冻结问题。整体来看，项目正处于快速迭代修复阶段，对社区反馈的响应速度较快。

## 2. 版本发布
### v1.1.5-beta.1
- **更新亮点**：
    - **控制台存储优化**：修复了控制台中每个标签页 Agent 选择状态互相干扰的问题，采用了混合存储方案。
    - **时区处理修复**：修复了非标准时区名称导致的异常，提升了系统兼容性。
    - **ACP 功能集成**：新增 ACP 相关功能，为后续多智能体协作铺路。
- **迁移注意**：从旧版本升级的用户需注意控制台前端的 Agent 选择逻辑已变更，多标签页场景下的体验将更加独立。

## 3. 项目进展
今日共有 **21 个 PR 被合并或关闭**，项目整体在稳定性和用户体验修复上迈进了一大步：
- **核心修复**：合并了 [PR #3895](https://github.com/agentscope-ai/QwenPaw/pull/3895)，解决了工具结果超过保留限制时的上下文丢失问题，修复了由此引发的无限循环 Bug。
- **UI/UX 优化**：合并了 [PR #3934](https://github.com/agentscope-ai/QwenPaw/pull/3934)，修复了会话重命名时无法输入中文的问题以及会话列表持久化 Bug。同时，[PR #3912](https://github.com/agentscope-ai/QwenPaw/pull/3912) 引入了 `react-window` 优化会话列表性能。
- **渠道适配**：[PR #3887](https://github.com/agentscope-ai/QwenPaw/pull/3887) 修复了 QQ 频道语音消息类型的映射错误。

## 4. 社区热点
今日社区讨论最活跃的话题集中在功能定义与严重 Bug 的界定上：
1.  **项目命名与关系澄清 ([Issue #3430](https://github.com/agentscope-ai/QwenPaw/issues/3430))**：用户对 CoPaw 与 QwenPaw 的关系表示困惑，讨论了后续维护策略，该 Issue 已关闭。
2.  **Debian 系统页面冻结 ([Issue #3853](https://github.com/agentscope-ai/QwenPaw/issues/3853))**：用户报告在 Debian GNU/Linux 12 下保存模型设置后页面冻结，且非 root 用户运行时异常，引发了 9 条评论讨论，目前尚未有明确的修复 PR 合并。
3.  **Web UI 暂停功能失效 ([Issue #3850](https://github.com/agentscope-ai/QwenPaw/issues/3850))**：用户指出暂停按钮仅前端渲染停止，后端 Agent 仍继续执行，引发了关于“暂停”语义的讨论。

## 5. Bug 与稳定性
今日报告的 Bug 主要影响系统的可用性与稳定性，按严重程度排序如下：
- **[严重] Debian 环境页面冻结 ([Issue #3853](https://github.com/agentscope-ai/QwenPaw/issues/3853))**：特定系统环境下服务不可用，涉及权限问题，尚无修复 PR。
- **[严重] 上下文同步竞态条件 ([Issue #3893](https://github.com/agentscope-ai/QwenPaw/issues/3893))**：工具结果丢失导致无限循环。**状态：已通过 [PR #3895](https://github.com/agentscope-ai/QwenPaw/pull/3895) 修复。**
- **[中等] 企业微信通道失效 ([Issue #3937](https://github.com/agentscope-ai/QwenPaw/issues/3937))**：发送消息无响应，需重启服务恢复。
- **[中等] 控制台会话中断 ([Issue #3861](https://github.com/agentscope-ai/QwenPaw/issues/3861))**：控制台对话多次中断，影响用户体验。

## 6. 功能请求与路线图信号
用户提出了多项旨在提升易用性和安全性的功能请求：
- **智能体隔离机制 ([Issue #3936](https://github.com/agentscope-ai/QwenPaw/issues/3936))**：用户强烈希望能限制智能体仅访问特定工作空间，实现白名单机制，而非当前的全局配置。这反映了多租户环境下的安全需求。
- **自定义模型参数配置 ([Issue #3929](https://github.com/agentscope-ai/QwenPaw/issues/3929))**：请求支持为自定义模型单独配置 `timeout` 和 `context_window_size`，以适应不同模型的特性。
- **llama.cpp 供应商支持 ([Issue #3920](https://github.com/agentscope-ai/QwenPaw/issues/3920))**：用户建议官方直接支持 llama.cpp 作为供应商。该 Issue 已关闭，可能已被纳入计划或有替代方案。

## 7. 用户反馈摘要
- **痛点**：用户对 MCP 连接的稳定性反馈较多，容易出现无限卡死 ([Issue #3822](https://github.com/agentscope-ai/QwenPaw/issues/3822))；文件上传大小限制（10MB）在实际使用中显得捉襟见肘 ([Issue #3884](https://github.com/agentscope-ai/QwenPaw/issues/3884))。
- **场景**：企业用户在使用企业微信通道时遇到稳定性问题；个人开发者在本地部署时遇到环境兼容性（Debian）和存储隔离问题。
- **肯定**：社区贡献者活跃，多个 PR 来自 first-time-contributor，显示项目社区参与度健康。

## 8. 待处理积压
以下重要 Issue 长期未得到有效解决或响应：
- **[未解决] 定时任务执行异常 ([Issue #2429](https://github.com/agentscope-ai/QwenPaw/issues/2429))**：用户测试定时任务时遇到中断提示，自 3 月 27 日创建以来已近一个月，仍未有明确解决方案。
- **[未解决] MCP 工具可见性 ([Issue #2495](https://github.com/agentscope-ai/QwenPaw/issues/2495))**：配置 MCP 后无法直观查看包含的工具列表，影响调试体验。
- **[未解决] 技能池报错 ([Issue #3702](https://github.com/agentscope-ai/QwenPaw/issues/3702))**：技能池持续报错问题已持续一周，需维护者关注。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-04-29)

## 1. 今日速览
过去24小时内，ZeptoClaw 项目呈现出**“高自动化、低交互”**的维护状态。项目未见人工提交的代码合并或 Issues 反馈，活跃度完全由自动化依赖管理工具驱动。Dependabot 在一天内发起了 **15 个** 依赖更新 PR，覆盖了 Rust 核心、前端构建工具及 CI/CD 流程，显示出项目对生态依赖的及时跟进，但缺乏人工 Review 导致合并进度停滞。整体而言，项目处于技术债务清理与依赖维护期，核心功能开发暂无明显推进。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日无任何 PR 被合并或关闭，项目主干代码未发生变化。所有的进展均停留在“提案”阶段，主要体现为依赖库的版本升级，维护者需尽快介入审查以推进合并。主要更新提案包括：

- **Rust 核心依赖更新**：
  - [PR #550](https://github.com/qhkm/zeptoclaw/pull/550): `tokio` 从 v1.50.0 升级至 v1.51.1（包含重要修复）。
  - [PR #563](https://github.com/qhkm/zeptoclaw/pull/563): `lettre` 升级至 v0.11.21。
  - [PR #560](https://github.com/qhkm/zeptoclaw/pull/560): `libc` 升级至 v0.2.185。

- **前端与文档工具链更新**：
  - [PR #561](https://github.com/qhkm/zeptoclaw/pull/561): `vite` 升级至 v8.0.8 (panel 目录)。
  - [PR #557](https://github.com/qhkm/zeptoclaw/pull/557): `astro` 升级至 v6.1.6 (docs 目录)。

- **CI/CD 与基础设施**：
  - [PR #553](https://github.com/qhkm/zeptoclaw/pull/553): `softprops/action-gh-release` 大版本升级至 v3.0.0。

## 4. 社区热点
- **无活跃讨论**。过去24小时内，所有 Issues 和 PRs 均由 `@dependabot[bot]` 发起，无用户评论或社区讨论。这表明项目当前处于“静默维护”状态，缺乏社区成员的功能建议或 Bug 反馈。

## 5. Bug 与稳定性
- **无新报告 Bug**。过去24小时内未收到用户提交的崩溃报告或回归问题。
- **潜在风险提示**：[PR #550](https://github.com/qhkm/zeptoclaw/pull/550) 中 `tokio` 更新至 v1.51.1，根据 Release Notes 提示包含修复内容，建议维护者关注其变更是否影响现有异步运行时行为。

## 6. 功能请求与路线图信号
- **无功能请求**。今日无用户发起的新功能需求或路线图讨论。依赖更新日志中提及的 `lettre` 新增 `rustls-no-p...` 特性（[PR #563](https://github.com/qhkm/zeptoclaw/pull/563)）可能暗示未来对 TLS 配置有更灵活的支持，属于被动路线图信号。

## 7. 用户反馈摘要
- **无反馈数据**。由于 Issues 列表为空且 PR 无评论，今日无法提取用户痛点或使用场景反馈。

## 8. 待处理积压
虽然数据未提供历史遗留详情，但今日产生的 **15 个待合并 PR** 已形成新的积压。建议维护者优先处理以下可能影响构建或安全性的 PR：

- **[PR #553](https://github.com/qhkm/zeptoclaw/pull/553)**: `action-gh-release` 升级至 v3.0.0，属于大版本更新，可能包含破坏性变更，需尽快验证 CI 流程兼容性。
- **[PR #550](https://github.com/qhkm/zeptoclaw/pull/550)**: `tokio` 核心库更新，建议优先 Review 以确保运行时稳定性。
- **[PR #561](https://github.com/qhkm/zeptoclaw/pull/561)**: `vite` 版本跨度较大，需关注前端构建是否受影响。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*