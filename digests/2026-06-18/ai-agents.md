# OpenClaw 生态日报 2026-06-18

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-18 04:14 UTC

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

**OpenClaw 项目动态日报 (2026-06-18)**

### 1. 今日速览
OpenClaw 项目今日活跃度极高，过去 24 小时内 Issues 与 PR 更新量均达到 500 条，其中 PR 待合并数量高达 410 条，显示出社区贡献热情高涨但审核压力巨大。虽然今日无新版本发布，但核心团队与社区正集中精力解决回归问题，特别是涉及消息路由与工具调用的严重 Bug。讨论热点主要集中在安全性与架构重构上，如 SQLite 迁移方案及“中间文本泄露”问题。整体而言，项目处于高强度迭代期，稳定性修复是当前重心。

### 2. 版本发布
**无新版本发布**。

### 3. 项目进展
尽管今日无新版本发布，但项目在底层稳定性与缺陷修复方面有显著推进：
*   **回归修复**：针对近期引入的回归问题，社区提交了多个针对性修复。例如 Issue #93895 描述的 Cron 任务在热重载时丢失的问题已关闭，相关修复 PR #93580 正在处理中，旨在解决 Cron 交付感知问题。
*   **平台兼容性增强**：PR #93701 优化了 Windows 平台下的 Gateway 重启逻辑，修复了计划任务调用失败的问题；PR #94415 修复了端口检测在双栈主机上的误判问题。
*   **功能完善**：PR #94392 修复了配置获取工具返回负载过大导致中间件报错的问题；PR #94423 为 Agent CLI 增加了标准输入和文件输入支持。

### 4. 社区热点
今日讨论最活跃的议题集中在安全性与架构演进：
*   **[#25592](https://github.com/openclaw/openclaw/issues/25592) [P1] 工具调用间的文本泄露到消息通道**：评论数 32 条。
    *   **诉求**：用户强烈反馈 Agent 在工具调用间隙产生的内部思考/错误处理文本会意外发送到 Slack/iMessage 等外部通道，存在严重的安全与 UX 隐患。
*   **[#88838](https://github.com/openclaw/openclaw/issues/88838) [P0] SQLite 迁移策略讨论**：评论数 30 条。
    *   **诉求**：维护者 @jalehman 提议通过抽象层 分步迁移核心会话/转录存储至 SQLite，以避免大规模重写带来的风险，社区正对此进行激烈的技术评审。
*   **[#9443](https://github.com/openclaw/openclaw/issues/9443) [Enhancement] 预构建 Android APK**：评论数 25 条。
    *   **诉求**：用户呼吁官方提供编译好的 Android 客户端下载，降低移动端部署门槛。

### 5. Bug 与稳定性
今日报告了多个影响核心功能的严重 Bug，尤其是回归问题：

*   **严重 (P1/P0)**:
    *   **[#25592](https://github.com/openclaw/openclaw/issues/25592)**：工具调用间的文本泄露至消息通道（安全/UX 严重问题）。暂无 Fix PR。
    *   **[#22676](https://github.com/openclaw/openclaw/issues/22676)**：Signal 守护进程在 SIGUSR1 重启时存在竞态条件，导致进程孤立和发送失败。暂无 Fix PR。
    *   **[#31583](https://github.com/openclaw/openclaw/issues/31583)**：`exec` 工具不再继承 `skills.entries` 配置的环境变量，导致无法注入 Secrets。
    *   **[#45224](https://github.com/openclaw/openclaw/issues/45224)**：Playwright 断言错误导致 Gateway 进程崩溃。
*   **回归问题**:
    *   **[#32473](https://github.com/openclaw/openclaw/issues/32473)**：控制 UI 要求设备身份验证。
    *   **[#38327](https://github.com/openclaw/openclaw/issues/38327)**：使用 Google Vertex 模型时报错 "Cannot convert undefined or null to object"。
*   **已修复/已关闭**:
    *   **[#93895](https://github.com/openclaw/openclaw/issues/93895)**：Cron 任务在热重载期间丢失（已关闭，相关修复 PR #93580 正在推进）。

### 6. 功能请求与路线图信号
*   **推理模型支持**：Issue [#68596](https://github.com/openclaw/openclaw/issues/68596) 请求支持配置流式看门狗超时阈值，以适配 DeepSeek-R1、Kimi 等长推理模型，获得 8 个点赞，显示对新一代模型支持的迫切需求。
*   **安全增强**：Issue [#10659](https://github.com/openclaw/openclaw/issues/10659) 提出“掩码密钥”功能，允许 Agent 使用但不查看 API Key，防止提示词注入攻击泄露凭证。此类安全功能极有可能被纳入近期路线图。
*   **上下文优化**：Issue [#22438](https://github.com/openclaw/openclaw/issues/22438) 提议分层加载 Bootstrap 文件以节省 Token 消耗，这对企业级大规模部署至关重要。

### 7. 用户反馈摘要
*   **痛点：部署与配置复杂性**：多个用户反馈 Android 端需自行编译极为不便（#9443）；Docker 环境下 Sandbox 无法正确挂载工作区（#31331）；初始化向导缺少 Memory/Embedding 配置步骤导致功能不可用（#16670）。
*   **痛点：安全与稳定性**：用户对“文本泄露”问题（#25592）表示极度担忧，认为这破坏了系统的专业性与安全性；此外，内存管理混乱（#43747）和 OAuth 刷新失败导致 Agent 卡死（#86215）也是核心槽点。
*   **满意点**：社区对 SQLite 迁移（#88838）的分步提案表示支持，认为这体现了维护者对架构演进的审慎态度。

### 8. 待处理积压
以下重要 Issue 长期未获解决或处于“需产品决策/需维护者评审”状态，建议关注：
*   **[#25592](https://github.com/openclaw/openclaw/issues/25592) [P1]**：工具调用文本泄露问题，虽活跃但尚无 Fix PR，需尽快处理。
*   **[#10687](https://github.com/openclaw/openclaw/issues/10687) [Enhancement]**：动态模型发现功能，以支持 OpenRouter 等快速变化的模型目录。
*   **PR [#28081](https://github.com/openclaw/openclaw/pull/28081)**：Google antigravity-auth 配置自动清理功能，状态为 `waiting on author`，需作者跟进。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-06-18)

## 1. 生态全景
2026年6月的个人 AI 助手/自主智能体生态正经历从**对话式助手向操作系统级智能体**跨越的关键期。头部项目（如 Zeroclaw, LobsterAI）纷纷通过 "Computer Use" 功能突破文本交互边界，尝试接管操作系统界面；同时，**安全性**成为今日生态的集体阵痛，多项目（TinyClaw, LobsterAI, NanoClaw）集中爆发文件读取、权限绕过等严重漏洞，揭示了 Agent 在获得文件系统与代码执行权限后的安全债务。在用户体验层面，各项目正从极客工具向大众产品转型，CoPaw 的前端重构与 Hermes 的瘦客户端需求标志着"易用性"已成为继"功能性"之后的第二增长曲线。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PR 活跃度 | 版本发布 | 健康度评估 | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 极高 (500+ updates) | 高 (410 open, 积压严重) | 无 | ⚠️ 中 | 核心架构迁移，回归问题多，审核压力大 |
| **CoPaw** | 高 (38 closed) | 极高 (32 merged) | v1.1.12 正式版 / v2.0.0a1 | ✅ 高 | 快速迭代，前端重构，启动 v2 预研 |
| **NanoClaw** | 中 | 高 (20 updates, 2 releases) | v2.1.0 / v2.1.17 | ⚠️ 中 | 快速发版，修复严重安全漏洞与架构变更 |
| **Hermes Agent**| 极高 (47 active) | 低 (49 open, 仅1 merged) | 无 | 🔴 低 | 严重 Bug (数据丢失)，PR 积压严重 |
| **IronClaw** | 高 (50 updates) | 高 (多栈合并) | 无 | ✅ 高 | "Reborn" 架构成熟，Projects 功能落地 |
| **Zeroclaw** | 高 (50 updates) | 中 (11 merged) | 无 | ⚠️ 中 | RFC 讨论热烈，Windows 兼容性攻坚 |
| **LobsterAI** | 中 | 高 (10 merged) | v2026.6.15 | 🔴 低 | 重大功能发布，但伴随严重安全漏洞 |
| **NanoBot** | 中 (7 new) | 中 (17 merged) | 无 | ✅ 高 | 稳健迭代，生态集成与稳定性修复 |
| **PicoClaw** | 低 | 中 (6 merged) | 无 | ✅ 高 | 安全修复，前沿模型适配迅速 |
| **TinyClaw** | 低 (3 new critical) | 无 | 无 | 🛑 极低 | 陷入严重安全危机，代码停滞 |
| **NullClaw** | 低 | 低 (2 new) | 无 | 🟡 中 | 功能优化，部署与交互体验完善 |
| **Moltis** | 低 | 低 (1 open) | 无 | 🟢 稳 | 细节打磨，功能请求驱动 |

> **注**：健康度评估综合考量了 Bug 严重程度、PR 流速、社区响应速度及安全风险。

## 3. OpenClaw 在生态中的定位

作为生态的核心参照项目，OpenClaw 展现出**"重架构、大社区、高负担"**的特征：
*   **优势与壁垒**：OpenClaw 拥有最庞大的社区贡献量（日更新 500+），在底层存储架构（SQLite 迁移 RFC）和模型兼容性（长推理模型支持）上具有深厚积累。相比竞品，它更侧重于底层能力的广度与深度。
*   **技术路线差异**：
    *   相比 **CoPaw** 的"产品化优先"（前端重构、竞品迁移工具），OpenClaw 更偏向"工程师友好"，但这导致了配置复杂度高（如 Android 需自行编译），在易用性上处于劣势。
    *   相比 **Zeroclaw** 的"OS 级交互"激进路线，OpenClaw 当前重心仍在消息路由与工具调用的稳定性修复上（回归问题频发），显得更为保守和稳健。
*   **社区规模对比**：OpenClaw 的活跃度远超 IronClaw、NanoBot 等项目，但这也导致了严重的审核瓶颈（410 PR 待合并），决策效率低于小而美的 NanoBot 或 CoPaw。

## 4. 共同关注的技术方向

今日多项目集中涌现出以下共性需求，揭示了行业痛点：
*   **安全性与权限边界（痛点级）**：
    *   **涉及项目**：TinyClaw (任意文件读取), LobsterAI (文件读取漏洞), NanoClaw (路径遍历), OpenClaw (文本泄露), PicoClaw (SSRF)。
    *   **分析**：随着 Agent 获得文件系统访问权，路径遍历、权限隔离和提示词注入导致的数据泄露成为全行业亟待解决的"安全债务"。
*   **多模态与 OS 级交互（趋势级）**：
    *   **涉及项目**：Zeroclaw (Computer-use RFC), LobsterAI (Computer Use 发布), IronClaw (Self-evolution)。
    *   **分析**：Agent 正从"对话框"走向"桌面"，操作 GUI、语音交互（ASR）成为头部项目竞相角逐的下一高地。
*   **上下文与记忆管理（性能级）**：
    *   **涉及项目**：OpenClaw (SQLite 迁移), Zeroclaw (上下文压缩 RFC), NullClaw (内存精细配置), Moltis (TTS/RPC配置)。
    *   **分析**：长对话导致的成本与性能瓶颈促使项目寻求更高效的存储（SQLite）和压缩机制。
*   **用户体验与部署便捷性（增长级）**：
    *   **涉及项目**：Hermes (瘦客户端请求), CoPaw (Simple Mode, 迁移工具), NanoBot (用户向导), PicoClaw (Android APK)。
    *   **分析**：降低部署门槛、提供开箱即用的移动端/桌面端体验已成为争夺非技术用户的共识。

## 5. 差异化定位分析

*   **架构演进方向**：
    *   **OpenClaw & Zeroclaw**：致力于重构底层架构（SQLite 存储、Scheduler 重构），追求企业级稳定性与扩展性。
    *   **CoPaw & Hermes**：侧重客户端体验，CoPaw 专注 WebUI 美化与简易模式，Hermes 探索桌面端解耦，争夺终端用户入口。
*   **目标用户分层**：
    *   **开发者/企业**：OpenClaw（高度可配置）、NanoClaw（托管集群支持）、IronClaw（Projects 权限管理）。
    *   **个人/极客用户**：LobsterAI（多模态尝鲜）、PicoClaw（隐私通信）、NullClaw（轻量化）。
*   **安全策略差异**：
    *   **NanoClaw & PicoClaw**：主动修补 CVE、SSRF，强化沙箱，走安全优先路线。
    *   **TinyClaw & LobsterAI**：在功能快速迭代中暴露安全短板，属于激进型。

## 6. 社区热度与成熟度

*   **快速迭代/激进扩张期**：
    *   **CoPaw**：发布 v1.1.12 并启动 v2.0，Issue 闭环率高，社区活力最强，处于功能爆发阶段。
    *   **NanoClaw**：日更两版，快速响应安全漏洞，开发节奏极快但存在破坏性变更风险。
*   **质量巩固/攻坚期**：
    *   **OpenClaw**：深陷回归 Bug 与 PR 积压泥潭，社区热度虽高但熵增明显，急需稳定版本。
    *   **Hermes**：P0 级 Bug 频发且修复缓慢，处于成长阵痛期，架构调整需求迫切。
    *   **Zeroclaw**：RFC 讨论深入，Windows 兼容性攻坚，为下一大版本蓄力。
*   **稳健运营期**：
    *   **NanoBot & IronClaw**：Issue 处理有序，功能按部就班推进，架构成熟度较高。

## 7. 值得关注的趋势信号

1.  **安全合规将成为 Agent 落地的"生死线"**：TinyClaw 的连续高危漏洞和 LobsterAI 的文件读取风险向开发者发出警示：在赋予 Agent 文件操作能力时，**默认拒绝、白名单校验、沙箱隔离**必须作为第一性原则，而非事后补救。
2.  **"Computer Use" 开启 Agent 2.0 时代**：Zeroclaw 和 LobsterAI 在 GUI 控制方向的探索表明，Agent 竞争已从"谁更会聊天"转向"谁更能干活"。具备操作系统控制能力的 Agent 将在自动化流程中占据核心生态位。
3.  **用户争夺战：迁移工具的出现**：CoPaw 推出 OpenClaw 迁移工具，预示开源 AI 助手市场正从蓝海转入存量竞争阶段。降低迁移成本、优化非技术用户体验将成为获取用户增长的关键策略。
4.  **长推理模型的适配刚需**：OpenClaw 对 DeepSeek-R1、Kimi 等长推理模型超时的讨论表明，新一代推理模型对网关超时、流式处理机制提出了新挑战，基础设施层需针对"慢思考"模式进行专项优化。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-18)

## 1. 今日速览
NanoBot 项目今日保持高活跃度，开发重心集中在**稳定性修复**与**生态集成**。过去24小时内共有 **17 个 PR 成功合并**，显著提升了系统在文件系统安全策略、多渠道适配及大模型兼容性方面的表现。Issues 板块新增 7 条讨论，主要集中在用户体验优化和多实例管理需求上。整体来看，项目处于快速迭代期，社区反馈响应迅速，关键 Bug 修复周期短，健康度良好。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 17 个 PR 合并入库，显著修复了多个关键 Bug 并增强了功能：

*   **安全与文件系统**：修复了工作区安全策略在子目录执行 Git 命令时的拦截问题 ([PR #4380](https://github.com/HKUDS/nanobot/pull/4380))，明确了文件系统的写入权限策略 ([PR #4202](https://github.com/HKUDS/nanobot/pull/4202))。
*   **模型提供商支持**：增强了对 Mistral 模型的支持 ([PR #4351](https://github.com/HKUDS/nanobot/pull/4351))，修复了 Anthropic API 工具调用的 ID 格式校验问题 ([PR #4356](https://github.com/HKUDS/nanobot/pull/4356))，并修复了本地模型端点受全局代理影响的问题 ([PR #4367](https://github.com/HKUDS/nanobot/pull/4367))。
*   **渠道集成**：修复了飞书流式消息卡片的渲染与重试机制 ([PR #4381](https://github.com/HKUDS/nanobot/pull/4381))，新增了 WhatsApp 消息已读回执功能 ([PR #4354](https://github.com/HKUDS/nanobot/pull/4354))。
*   **搜索能力**：新增 Keenable 搜索提供者 ([PR #4350](https://github.com/HKUDS/nanobot/pull/4350))。

项目整体稳定性向前迈进了一大步，特别是在文件操作权限和第三方 API 兼容性方面。

## 4. 社区热点
*   **[Issue #4376]** [enhancement] **user friendly wizard**：用户提出当前 `onboard --wizard` 命令对非技术用户不够友好，建议优化引导流程。该 Issue 获得了 1 个点赞，反映了社区降低使用门槛的强烈诉求。
*   **[Issue #4374]** [feature request] **Project workspaces 读写不对称**：用户指出 WebUI 项目工作区在读取 `SOUL.md` 等引导文件时存在路径不对称问题，可能影响多项目场景下的上下文管理，引发了关于架构设计的讨论。

## 5. Bug 与稳定性
今日修复了多个影响核心流程的 Bug，同时报告了新的移动端问题：

*   **已修复**：
    *   **[Critical]** Git 命令在工作区子目录中被错误拦截 ([Issue #4375](https://github.com/HKUDS/nanobot/issues/4375))，修复于 [PR #4380](https://github.com/HKUDS/nanobot/pull/4380)。
    *   **[High]** 代理设置导致本地模型（Ollama等）无法连接 ([PR #4367](https://github.com/HKUDS/nanobot/pull/4367))。
    *   **[Medium]** Session replay 窗口历史记录丢失用户轮次 ([PR #4349](https://github.com/HKUDS/nanobot/pull/4349))。
*   **新报告**：
    *   **[Medium]** [Issue #4388](https://github.com/HKUDS/nanobot/issues/4388) iOS Safari 浏览器点击输入框触发页面放大导致 UI 变形，影响移动端体验，目前尚无修复 PR。
    *   **[Low]** [Issue #4389](https://github.com/HKUDS/nanobot/issues/4389) Fallback 模型上下文窗口配置无法独立设置，可能导致上下文溢出。

## 6. 功能请求与路线图信号
*   **多实例管理优化**：[Issue #4390](https://github.com/HKUDS/nanobot/issues/4390) 提出针对普通用户的多实例管理需求，希望简化多配置文件的切换与隔离。这与早期的 [Issue #936](https://github.com/HKUDS/nanobot/issues/936)（多租户网关）遥相呼应，表明“多实例/多租户”是下一阶段的重要路线图方向。
*   **上下文精细化控制**：[Issue #4389](https://github.com/HKUDS/nanobot/issues/4389) 请求针对 Fallback 模型单独设置 `contextWindowTokens`，显示用户对复杂模型切换场景下的成本与性能控制有更高要求。
*   **潜在合并项**：[PR #4391](https://github.com/HKUDS/nanobot/pull/4391)（飞书扫码登录）和 [PR #4392](https://github.com/HKUDS/nanobot/pull/4392)（工具微压缩配置）目前处于 Open 状态，功能完善且测试覆盖良好，极可能在近期合并。

## 7. 用户反馈摘要
*   **痛点**：非技术用户在初始化配置（Wizard）时感到困难 ([Issue #4376](https://github.com/HKUDS/nanobot/issues/4376))；移动端 WebUI 体验仍需打磨 ([Issue #4388](https://github.com/HKUDS/nanobot/issues/4388))。
*   **场景**：用户倾向于在单机上通过文件夹管理多个独立的项目实例 ([Issue #4390](https://github.com/HKUDS/nanobot/issues/4390))。
*   **满意点**：社区对 Bug 修复响应速度表示认可，特别是 Git 权限和代理问题的快速解决。

## 8. 待处理积压
*   **[Issue #936]** [feature request] **Multi-Tenant Gateway**：该请求自 2026-02 创建至今未关闭，随着近期多实例需求的增加 ([Issue #4390](https://github.com/HKUDS/nanobot/issues/4390))，建议维护者重新评估该需求的优先级。
*   **[Issue #3437]** [enhancement] **On-demand heartbeat trigger**：关于调试模式下的心跳触发 RFC 自 4 月开启，仍处于 Open 状态，建议维护者确认是否纳入开发计划。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是 Zeroclaw 项目 2026-06-18 的动态日报：

### 📊 1. 今日速览
今日 Zeroclaw 项目保持极高的开发活跃度，单日 Issues 与 PR 更新均达 50 条，显示出社区活跃度与核心团队推进速度均处于高位。核心工作集中在 **v0.8.1 版本收尾的稳定性修复** 以及 **v0.8.2/0.9.0 的架构重构 RFC**。社区对 "Computer-use"（桌面控制）和 "Context Compression"（上下文压缩）两项高风险 RFC 讨论热烈，显示出项目正从单纯的对话式 Agent 向更深层次的系统级交互和成本控制演进。同时，Windows 平台的兼容性与更新机制修复成为今日的重点攻坚方向。

### 🚀 2. 版本发布
今日无新版本发布。

### 🛠️ 3. 项目进展
今日共有 11 个 PR 合并/关闭，主要集中在配置管理重构和运行时稳定性修复，项目整体向 v0.8.1 正式版迈进了重要一步。

*   **配置管理重构 (已合并):** PR #7842、#7841 和 #7840 组成的 "Typed delete-with-cascade" 系列已合并。这引入了对 providers、agents、channels 的别名重命名级联删除功能，解决了长期以来的配置引用一致性问题，是 v0.8.x 架构的重要完善。
*   **ACP 协议优化 (已合并):** PR #7684 修复了 ACP 会话历史修剪器的可见性问题，将修剪事件作为系统事件展示，提升了调试体验。
*   **关键修复待合并:**
    *   PR #7853: 修复了 Windows 平台自更新失败的关键 Bug（因进程锁定导致二进制文件无法替换）。
    *   PR #7893: 修复了手动 Cron 触发结果未持久化的问题，确保任务记录不丢失。
    *   PR #7912: 修复了 WhatsApp 集成中因 MAC 地址存储格式错误导致的配对失败问题。

### 🔥 4. 社区热点
今日讨论最活跃的议题集中在架构演进与跨平台支持：

*   **[RFC] 桌面交互支持 (Issue #6909):** 评论数最高 (6条)。社区正在讨论如何让 Agent 具备截屏和键鼠控制能力，这标志着 ZeroClaw 正试图突破纯文本/代码交互的边界，向 OS 级 Agent 演进。
*   **[RFC] 原生上下文压缩 (Issue #7673):** 评论数 (3条)。针对 LLM 上下文长度限制，提议在 Provider 层引入 `CompressionDecorator` 自动压缩 `ChatRequest`。这反映了用户对长对话成本和 Token 限制的强烈痛点。
*   **[RFC] Cron 架构重构 (Issue #6954):** 提议将计划任务通过 Orchestrator 消息管道路由，以解决当前 Scheduler 绕过安全上下文导致的系列 Bug。

### 🐛 5. Bug 与稳定性
今日报告了多个严重级别 Bug，主要集中在状态管理和平台兼容性：

*   **P1 - Agent 重命名状态损坏 (Issue #7907):** **今日新报**。在重命名 Agent 时，外部状态（如记忆、历史）在配置持久化前被移动，可能导致数据不一致。目前暂无修复 PR，需立即关注。
*   **P1 - Windows 测试大面积失败 (Issue #7462):** 报告显示 Windows 平台有 74 个测试失败，涉及路径语义和控制台编码问题。由于 CI 仅运行 Linux，此问题长期被忽视，急需解决以保证跨平台支持。
*   **P1 - Windows 自更新失败 (PR #7853):** 修复已提交，等待合并。
*   **S2 - WhatsApp 配对失败 (PR #7912):** 新报 Bug，存储 MAC 时 JSON 包装错误导致关键 App-State 验证失败。PR 已提交。
*   **S2 - Cron 上下文丢失 (Issue #6105):** 长期遗留问题，Agent 在 Cron 任务执行时无法获取先前消息的上下文，目前状态为 Blocked。

### 🗺️ 6. 功能请求与路线图信号
*   **v0.8.1 收尾:** Tracker Issue #6970 显示 v0.8.1 正在最后攻坚，重点解决 channel/provider 队列和历史记录问题。
*   **安全增强:** RFC Issue #7675 提出建立加固的 CI 流水线，包括 SBOM 生成和供应链扫描，预示项目正在为生产级部署做准备。
*   **WASM 插件生态:** RFC Issue #7822 建议增加 `PluginCapability::Hook`，允许 WASM 插件订阅 Agent 生命周期事件（如 turn complete）。结合 v0.8.2 的 WASM 插件计划 (Issue #7314)，项目正在构建强大的插件系统。
*   **成本控制:** PR #7492 提议支持 OpenAI 兼容接口的缓存 Token 定价，表明项目正在精细化成本管理。

### 💬 7. 用户反馈摘要
*   **移动端需求:** Issue #7911 中有用户尝试在 Android Termux 环境下安装 ZeroClaw，但遭遇架构识别错误（安装了 linux-aarch64 而非正确版本），显示出用户对边缘设备部署的渴求。
*   **成本敏感:** 多个 Issue 和 PR (如 #7673, #7492) 涉及 Token 缓存计费和上下文压缩，表明专业用户对运行成本非常敏感。
*   **Windows 体验:** 用户反馈 Windows 端 Shell 工具兼容性（PowerShell vs CMD）和自更新问题，Windows 端体验仍需打磨。

### ⚠️ 8. 待处理积压
*   **Issue #6105:** Cron Job 上下文缺失问题长期未解决，状态为 Blocked，建议核心贡献者重新评估优先级，因为这直接影响自动化任务的可用性。
*   **Issue #7462:** Windows 测试覆盖率不足导致大量回归，建议尽快将 Windows 纳入 CI 流程。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-18)

## 1. 今日速览
Hermes Agent 今日社区活跃度极高，但项目维护面临较大压力。过去 24 小时内新增/活跃 Issue 高达 47 条，仅关闭 3 条，显示出问题积压的趋势。Pull Request 方面，共有 49 个待合并 PR，仅 1 个合并/关闭，代码合并流速明显滞后于贡献速度。今日最严重的事件是用户报告 `hermes update --yes` 命令可能导致配置目录被清空的 P0 级 Bug，需引起开发者紧急关注。此外，社区对桌面端“瘦客户端”模式的需求呼声渐高，多账号支持等 Feature Request 讨论热烈。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
尽管待合并 PR 积压严重（49个），今日社区提交的修复补丁针对性强，主要集中在**多平台兼容性**与**认证修复**上：

*   **Anthropic OAuth 修复 (PR #48202)**: 针对 Issue #48176，添加了 `x-anthropic-billing-header` 以解决 OAuth 用户请求被拒绝的问题，修复了 Pro/Max/Team 用户的认证阻塞。
*   **Markdown 渲染修复 (PR #48205)**: 修复了 Gateway 纯文本适配器错误吞掉 Markdown 列表和星号的问题，改善了短信、飞书等平台的输出体验。
*   **模型切换状态清理 (PR #48197, #48196)**: 两个 PR 均致力于解决会话中切换模型时 System Prompt 缓存未清除的问题，确保上下文一致性。
*   **本地模型连接性改善 (PR #48193)**: 优化了桌面端连接 Ollama 等本地端点的逻辑，增加了 `/v1` 探测回退机制。
*   **可观测性扩展 (PR #48184)**: 新增 OTLP (OpenTelemetry) 插件，丰富了 Hermes 的链路追踪能力。

## 4. 社区热点
今日讨论最活跃的议题集中在**桌面端构建**与**多账号/多平台支持**：

*   **[Issue #47917] Desktop build fails after update** (评论: 8): 桌面端在拉取最新代码后构建失败，Electron 缓存被意外删除。这是继 #47266 之后的回归问题，严重影响了开发者的桌面端调试体验。
*   **[Issue #38602] Desktop Client-Only Installation** (👍: 18 | 评论: 6): 社区强烈希望能将 Hermes Desktop 作为纯客户端连接远程服务，而非每次启动都必须引导本地 Runtime。这反映了用户对轻量化部署的迫切需求。
*   **[Issue #27555] Vision fallback_chain silently broken** (评论: 7): 视觉模型回退链路因参数不匹配静默失败，这是一个长期存在的 P1 级 Bug，影响多模态功能的稳定性。
*   **[Issue #9756] WeChat Multi-Account Support** (评论: 5): 用户希望能支持微信多账号绑定，目前 Gateway 仅支持单账号，限制了家庭/团队共享场景。

## 5. Bug 与稳定性
今日报告了多个高风险 Bug，按严重程度排序如下：

*   **P0 - 数据丢失风险**:
    *   **[Issue #48200] `hermes update --yes` wiped entire ~/.hermes/**: 极其严重，用户在执行更新命令后丢失了所有配置、记忆和脚本。目前尚无修复 PR，建议用户谨慎执行更新操作。
*   **P1 - 功能阻断**:
    *   **[Issue #48176] Anthropic OAuth requests rejected**: 已有修复 PR #48202。
    *   **[Issue #27555] Vision fallback_chain silently broken**: 长期未修复的视觉模型回退链路故障。
*   **P2 - 平台兼容性问题**:
    *   **[Issue #48161] Chinese IME input not displayed**: Windows 下中文输入法确认后字符不立即显示，影响 CLI 交互体验。
    *   **[Issue #48198] Docker image permission issue**: Docker 镜像以 root 权限运行且缺少 LICENSE 文件，导致多容器部署受阻。
    *   **[Issue #48133] Gateway timestamp strip fails on Windows**: Windows 多词时区名称导致时间戳解析失败。
    *   **[Issue #48150] Markdown bullets swallowed**: Gateway 错误移除 Markdown 列表格式，已有 PR #48205 修复。

## 6. 功能请求与路线图信号
*   **桌面端架构重构**: Issue #38602 的高票数表明，将桌面端解耦为“瘦客户端”是下一阶段用户最期待的功能。
*   **多账号支持**: Issue #9756 提出的微信多账号需求，结合 Issue #47863 提出的跨平台审批委派，暗示 Hermes 正向多用户/多实例协作方向发展。
*   **CLI 增强**: Issue #13072 提出的 CLI 自动队列与中断恢复机制，反映出用户希望 CLI 具备更强的任务管理能力。

## 7. 用户反馈摘要
*   **痛点**: Windows 平台体验仍有较多瑕疵（中文输入法、时区解析、CMD 弹窗）；桌面端构建的不稳定性让开发者感到沮丧；`hermes update` 导致的数据丢失引发了严重的信任危机。
*   **场景**: 用户尝试将 Hermes 作为家庭微信机器人网关；利用 Docker 进行 WebUI 部署；通过 CLI 进行自动化任务处理。
*   **满意点**: 社区对新功能的响应较快（如 OTLP 插件、iMessage 原生投票），修复 PR 提交及时，但对 Core Team 的 Review 速度表示担忧。

## 8. 待处理积压
*   **关键 Bug**: Issue #27555 (Vision fallback) 自 5 月 17 日创建至今未修复，严重影响多模态体验。
*   **大型 Feature PR**: PR #8427 (Vertex AI 支持) 自 4 月开启至今未合并，阻碍了企业级 Gemini 模型的接入。
*   **安全风险**: Issue #48181 指出 `memory` 工具集可被绕过，涉及工具注入安全漏洞，需要维护者尽快确认并处理。

---
**分析师建议**: 当前项目 Core Team 需优先处理 P0 级数据丢失问题，并加快 PR Review 速度以缓解积压；同时建议尽快纳入瘦客户端架构设计，以满足日益增长的远程部署需求。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-18)

## 1. 今日速览
PicoClaw 项目今日保持了较高的维护活跃度，虽然无新版本发布，但代码库合并了 6 个 PR，显示出团队正在积极修复关键 Bug 并扩展生态兼容性。今日重点集中在**安全性加固**与**模型兼容性修复**，特别是修复了 OneBot 渠道的 SSRF 安全漏洞以及 Gemini 3.5 Flash 模型的工具调用失败问题。同时，社区对底层加密库的替换（libolm -> vodozemac）表现出较高关注度，提出了高优先级的功能请求。整体来看，项目处于稳健迭代阶段，对前沿模型（如 Gemini 3.5）的响应速度很快。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 6 个 PR 被合并或关闭，显著提升了项目的安全性与稳定性：

*   **安全修复**: PR #3140 修复了 OneBot 入站媒体 URL 处理的 SSRF 漏洞，阻止了攻击者利用 PicoClaw 主机获取本地或私有网络资源的风险，该修复对应了 Issue #3070。
    *   链接: [sipeed/picoclaw PR #3140](https://github.com/sipeed/picoclaw/pull/3140)
*   **模型兼容性**: PR #3136 修复了 Gemini 3.5 Flash 在工具调用时的 `thought_signature` 字段兼容问题，同时支持 camelCase 和 snake_case，解决了 Issue #3111 中报告的 400 错误。
    *   链接: [sipeed/picoclaw PR #3136](https://github.com/sipeed/picoclaw/pull/3136)
*   **生态扩展**: PR #2917 合并，新增了对 **NEAR AI Cloud** 提供商的支持，丰富了用户可选的 LLM 推理后端。
    *   链接: [sipeed/picoclaw PR #2917](https://github.com/sipeed/picoclaw/pull/2917)
*   **工具修复**: PR #3139 修复了搜狗搜索（Sogou）结果解析失败的问题，适配了新的 HTML 结构。
    *   链接: [sipeed/picoclaw PR #3139](https://github.com/sipeed/picoclaw/pull/3139)
*   **UI 优化**: PR #2990 修复了 Web UI 会话历史仅显示最后一条消息的问题，提升了多轮对话的用户体验。
    *   链接: [sipeed/picoclaw PR #2990](https://github.com/sipeed/picoclaw/pull/2990)

## 4. 社区热点
今日社区关注点集中在安全与隐私通信功能上：

*   **[高优先级] 弃用 libolm 的提案** (Issue #3088): 该 Issue 获得了 2 个点赞，作者建议使用官方维护的 vodozemac 替换已不再维护且存在安全隐患的 libolm。这反映了核心用户对项目底层安全架构的高度关注。
    *   链接: [sipeed/picoclaw Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)
*   **新增 Delta Chat 网关** (PR #3063): 这是一个待合并的新功能 PR，旨在增加 Delta Chat 网关支持，显示出社区对去中心化/隐私通信协议集成的强烈需求。
    *   链接: [sipeed/picoclaw PR #3063](https://github.com/sipeed/picoclaw/pull/3063)

## 5. Bug 与稳定性
今日修复了两个严重程度较高的 Bug，暂无新报告的严重崩溃问题：

*   **[已修复] OneBot SSRF 安全漏洞**: Issue #3070 指出 OneBot 渠道未对媒体 URL 进行校验，导致主机端任意文件获取。目前已在 PR #3140 中修复。
    *   严重程度：高（安全漏洞）
    *   链接: [sipeed/picoclaw Issue #3070](https://github.com/sipeed/picoclaw/issues/3070)
*   **[已修复] Gemini 3.5 Flash 工具调用失败**: Issue #3111 报告使用 Gemini 3.5 Flash 执行 Tool 时报错 400。根因是 schema 字段格式不匹配。已在 PR #3136 中修复。
    *   严重程度：中（核心功能受损）
    *   链接: [sipeed/picoclaw Issue #3111](https://github.com/sipeed/picoclaw/issues/3111)
*   **[待处理] 异步子代理消息重复**: PR #3142 指出在 spawn 子回合完成时，`ToolResult` 导致消息重复推送。目前已提交修复代码，等待合并。
    *   链接: [sipeed/picoclaw PR #3142](https://github.com/sipeed/picoclaw/pull/3142)

## 6. 功能请求与路线图信号
*   **加密库现代化**: Issue #3088 提议引入 vodozemac，鉴于 libolm 已停止维护，这极有可能在下一阶段被纳入核心路线图，建议维护者优先评估迁移成本。
*   **隐私通信网关**: Issue #3093 请求 SimpleX 或 Tox 支持，结合 PR #3063 (Delta Chat)，表明 PicoClaw 正逐渐成为隐私导向的 AI 网关解决方案。维护者可考虑统一规划 "Privacy Gateway" 模块。
*   **搜索诊断增强**: PR #3141 提议为 Brave Search 空结果添加日志，反映出在 Web 搜索工具的稳定性上仍有优化空间。

## 7. 用户反馈摘要
*   **前沿模型适配痛点**: 用户 @Giordano10 反馈在使用 Gemini 3.5 Flash 时遇到协议层面的兼容问题（thought_signature），表明用户群体紧跟 LLM 最新动态，对 AI Provider 的适配速度要求极高。
*   **安全审计需求**: 用户 @pbsds 主动提出替换不再维护的依赖库，显示出用户群具备较高的技术素养，且对项目的长期安全性负责。
*   **网关多样性需求**: 用户 @Damian-o2 强烈需求 SimpleX/Tox 等隐私协议网关，验证了 PicoClaw 在“个人隐私助理”这一细分市场的定位准确性。

## 8. 待处理积压
*   **Issue #3093 [Stale]**: 用户请求 SimpleX/Tox 网关支持，目前状态为 Stale。鉴于隐私功能需求上升，建议重新激活讨论。
    *   链接: [sipeed/picoclaw Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)
*   **PR #3092 [Stale]**: 修复 skills_install 中版本检查的代码已提交，但长期未合并。建议维护者审查是否存在设计冲突。
    *   链接: [sipeed/picoclaw PR #3092](https://github.com/sipeed/picoclaw/pull/3092)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-18)

## 1. 今日速览
NanoClaw 项目今日呈现高度活跃状态，核心团队与社区贡献者共提交了 20 个 PR 更新，并发布了 2 个包含破坏性变更的新版本（v2.1.0 与 v2.1.17）。项目重心目前明显向安全性增强与架构稳定性倾斜，今日待合并的 PR 中包含了针对 CVE 漏洞的修复与关键的路径遍历防护。虽然版本迭代带来了 SDK 与启动逻辑的重大变更，但社区迅速跟进了大量文档优化与功能性修复，整体健康度良好，但也面临较大的 Code Review 积压。

## 2. 版本发布
今日发布了 **v2.1.0** 与 **v2.1.17** 两个版本，均包含重要的破坏性变更，升级时需特别注意：

*   **v2.1.17** [链接](nanocoai/nanoclaw Release v2.1.17)
    *   **破坏性变更**: `@onecli-sh/sdk` 从 0.5.0 升级至 2.2.1，强制要求 OneCLI 服务端支持 `/v1` API。旧版服务端将导致所有 SDK 调用返回 404。网关与 CLI 版本现已强制锁定。
*   **v2.1.0** [链接](nanocoai/nanoclaw Release v2.1.0)
    *   **破坏性变更**: 启动流程增加升级标记强制校验。主机在启动时会检查 `data/upgrade-state.json`，若未通过正常升级流程达到当前版本，将拒绝引导，旨在防止状态不一致。

## 3. 项目进展
今日共有 3 个关键 PR 关闭/合并，显著提升了系统的稳定性与兼容性：

*   **消息投递稳定性修复** [PR #2797](nanocoai/nanoclaw PR #2797) (已关闭): 修复了一个严重缺陷，该缺陷导致单一会话的 `outbound.db` 读取异常会阻断**所有**智能体的消息投递。现引入隔离机制，确保单点故障不会扩散。
*   **托管集群认证修复** [PR #2794](nanocoai/nanoclaw PR #2794) (已关闭): 解决了 v2.1.17 主分支中托管集群智能体无法通过环境变量进行 LLM 认证的问题（报错 401），恢复了环境变量网关认证功能。
*   **启动检查绕过机制** [PR #2780](nanocoai/nanoclaw PR #2780) (已关闭): 针对不可变镜像部署场景，增加了环境变量 `NANOCLAW_DISABLE_UPGRADE_TRIPWIRE=1`，允许绕过启动时的升级状态强制检查，解决了镜像部署无法写入标记文件的问题。

## 4. 社区热点
今日社区关注点集中在安全漏洞修复与文档完善上：

*   **安全性问题引发关注**: PR [#2799](nanocoai/nanoclaw PR #2799) 修复了 CVE-2026-29611 漏洞，限制 `send_file` 仅能读取 `/workspace` 目录，防止提示词注入或恶意智能体读取宿主机敏感凭证。此 PR 尚未合并，建议社区优先 Review。
*   **智能体间审批流功能**: PR [#2793](nanocoai/nanoclaw PR #2793) 提出了“智能体间消息审批”机制，允许为智能体连接设置审批策略，这将极大增强多智能体系统的可控性，是目前待合并的高价值功能。
*   **文档与本地化贡献**: 用户 @specterslient95-lgtm 提交了一系列高质量 PR 修复文档缺陷（如 [#2790](nanocoai/nanoclaw PR #2790), [#2788](nanocoai/nanoclaw PR #2788)），并新增了韩语 README [PR #2806](nanocoai/nanoclaw PR #2806)，显示社区国际化参与度提升。

## 5. Bug 与稳定性
今日报告并处理了多个严重程度的 Bug，主要集中在消息处理与 CLI 工具链：

*   **[严重] 安全漏洞 (CVE-2026-29611)**: 旧版 `send_file` 存在任意文件读取风险。已有修复 PR [#2799](nanocoai/nanoclaw PR #2799) 待合并。
*   **[严重] 路径遍历漏洞 (CWE-22)**: `ncl groups create` 命令未校验文件夹路径，可导致目录穿越。修复见 PR [#2800](nanocoai/nanoclaw PR #2800)。
*   **[高危] CLI 创建组必现崩溃**: `ncl messaging-groups create` 因缺少实例字段导致 SQL 约束失败。修复见 PR [#2804](nanocoai/nanoclaw PR #2804)。
*   **[中危] Socket 客户端无响应挂起**: CLI Socket 传输层缺少超时与缓冲区限制，可能导致无限等待或内存溢出。修复见 PR [#2802](nanocoai/nanoclaw PR #2802)。
*   **[已修复] 全局消息投递阻塞**: Issue [#2796](nanocoai/nanoclaw Issue #2796) 已通过 PR #2797 解决。

## 6. 功能请求与路线图信号
*   **细粒度权限控制**: PR [#2793](nanocoai/nanoclaw PR #2793) 引入的消息审批策略，预示项目正向企业级安全管控方向演进，满足对 AI 智能体行为审计的需求。
*   **Dashboard 可视化**: PR [#2795](nanocoai/nanoclaw PR #2795) 添加了 `/add-clidash` 技能，提供只读的 CLI 派生仪表盘，显示用户对状态监控 UI 的强烈需求。
*   **LLM 后端扩展**: PR [#2717](nanocoai/nanoclaw PR #2717) 添加了对 Atlas Cloud 的支持，表明项目正在积极兼容更多 OpenAI 兼容的后端服务。

## 7. 用户反馈摘要
*   **文档体验痛点**: Issues [#2787](nanocoai/nanoclaw Issue #2787) 和 [#2789](nanocoai/nanoclaw Issue #2789) 反映用户在初始化 OneCLI 和 Setup 阶段因文档缺失关键信息（如端口号、具体步骤）而受阻，表明尽管有自动化脚本，文档透明度仍需提高。
*   **iMessage 集成障碍**: Issue [#2791](nanocoai/nanoclaw Issue #2791) 指出在全新环境中添加 iMessage 渠道时因目录不存在而失败，这影响了新用户的“开箱即用”体验。
*   **托管部署兼容性**: Issue #2796 相关的讨论揭示了托管集群（Managed Fleet）环境下的认证与升级检查机制较为僵化，需要项目方提供更灵活的环境变量配置方案。

## 8. 待处理积压
目前有 **17 个 PR 处于 Open 状态**，建议维护者优先处理以下涉及安全与核心功能的 PR：

1.  **[PR #2799](nanocoai/nanoclaw PR #2799)**: 安全修复，限制文件读取范围。
2.  **[PR #2800](nanocoai/nanoclaw PR #2800)**: 安全修复，防止路径遍历攻击。
3.  **[PR #2804](nanocoai/nanoclaw PR #2804)**: 修复 CLI 创建组功能的致命错误。
4.  **[PR #2750](nanocoai/nanoclaw PR #2750)**: 修复容器被 Kill 后日志文件的恢复机制，涉及两个长期存在的 Issue (#2516, #2640)。

此外，Issue [#2796](nanocoai/nanoclaw Issue #2796) 虽已关闭，但其触发的修复 PR #2797 需确认已合并至最新发布的版本中。长期未合并的文档 PR [#2717](nanocoai/nanoclaw PR #2717) (Atlas Cloud 支持) 也建议尽快合入以丰富生态支持。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-06-18)

## 1. 今日速览
NullClaw 项目今日整体活跃度适中，核心进展集中在代码贡献层面。过去 24 小时内虽无新版本发布或 Issue/PR 的关闭合并，但社区提交了 2 个高质量的新 PR，分别针对 CLI 交互体验和内存管理机制进行了重要优化。Issue 讨论区主要围绕调度器授权故障和 Web UI 部署配置展开，显示用户在本地化部署和外部工具集成方面仍有痛点。总体而言，项目正处于功能迭代与问题修复的并行阶段，待合并的 PR 有望显著提升用户体验。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
尽管今日无 PR 被合并，但新增的 2 个待合并 PR 展示了项目在易用性与可配置性方面的重要进展：

*   **CLI 交互修复 ([PR #960](https://github.com/nullclaw/nullclaw/pull/960))**
    作者 @vernonstinebaker 提交了一个针对 CLI REPL 的修复。该 PR 引入了无分配行编辑器并启用了 POSIX 原始模式输入，解决了方向键、历史导航和光标移动显示为控制字符的问题。这直接修复了 [Issue #865](https://github.com/nullclaw/nullclaw/issues/865) 中报告的痛点，一旦合并，将显著提升本地调试和交互的流畅度。

*   **内存管理增强 ([PR #961](https://github.com/nullclaw/nullclaw/pull/961))**
    作者 @valonmulolli 提交了关于内存召回行为的可配置性更新。新增了 `auto_recall`、`recall_limit` 和 `max_context_bytes` 三个配置项，允许用户精细控制上下文注入行为。这标志着项目向更灵活的资源管理迈进了重要一步，有助于优化长对话场景下的 Token 消耗和响应速度。

## 4. 社区热点
今日讨论最活跃的议题集中在部署与配置环节，反映了用户对“开箱即用”的强烈需求：

*   **调度器授权问题 ([Issue #915](https://github.com/nullclaw/nullclaw/issues/915))**
    该 Issue 在过去一天内保持活跃。用户 @scabros 报告在使用 Ollama 外部主机时，调度器功能无法正常工作，涉及 Telegram 和控制台多端。这反映了在与本地 LLM 集成时，权限验证或网络配置可能存在边缘情况未被覆盖。

*   **Web UI 部署门槛高 ([Issue #861](https://github.com/nullclaw/nullclaw/issues/861))**
    用户 @eabase 再次发声，指出当前文档中关于 Web UI 设置的说明过于晦涩（"don't understand 70%"），请求提供非技术术语的教程。这表明项目在无头服务器（Headless VPS）场景下的部署体验仍有优化空间，文档的可读性是阻碍新用户上手的关键因素。

## 5. Bug 与稳定性
今日关注的主要 Bug 集中在用户交互与权限验证模块：

*   **[高] CLI 输入异常 ([Issue #865](https://github.com/nullclaw/nullclaw/issues/865))**
    *   **现象**：CLI 模式下方向键、Home/End 键显示乱码控制字符，无法正常编辑命令。
    *   **状态**：已有对应修复 PR ([PR #960](https://github.com/nullclaw/nullclaw/pull/960))，等待合并。此问题严重影响 CLI 用户的操作体验，建议优先处理。

*   **[中] 调度器未授权错误 ([Issue #915](https://github.com/nullclaw/nullclaw/issues/915))**
    *   **现象**：外部 Ollama 连接正常，但调度器模块报错 Unauthorized，导致定时任务失效。
    *   **状态**：Open，暂无关联 PR。此问题可能与外部认证集成有关，需进一步排查配置逻辑。

## 6. 功能请求与路线图信号
*   **精细化内存控制 ([PR #961](https://github.com/nullclaw/nullclaw/pull/961))**
    新增的内存配置选项表明项目正在向“可配置的高性能智能体”方向发展。用户可能在实际使用中遇到了上下文过长或无关记忆干扰的问题，该 PR 提供了解决方案。预计这将是下一版本更新的核心功能点之一。

## 7. 用户反馈摘要
从 Issues 评论中可以提炼出以下核心反馈：
*   **部署友好度不足**：用户对 Web UI 隧道连接等进阶配置感到困惑，希望提供更直观的“傻瓜式”指南 ([Issue #861](https://github.com/nullclaw/nullclaw/issues/861))。
*   **本地集成存在断层**：虽然 LLM 连接正常，但 NullClaw 的某些内部模块（如 Scheduler）似乎有独立的认证逻辑，导致用户配置一套凭证却无法打通全链路 ([Issue #915](https://github.com/nullclaw/nullclaw/issues/915))。
*   **CLI 体验待打磨**：交互式命令行的 Bug 让用户不得不忍受低效的操作，修复需求迫切 ([Issue #865](https://github.com/nullclaw/nullclaw/issues/865))。

## 8. 待处理积压
*   **PR 合并队列**：目前有 2 个待合并的 PR ([#960](https://github.com/nullclaw/nullclaw/pull/960), [#961](https://github.com/nullclaw/nullclaw/pull/961))，建议维护者尽快进行 Code Review 并合并，以解决 CLI 交互痛点并引入内存增强功能。
*   **长期未解决问题**：[Issue #865](https://github.com/nullclaw/nullclaw/issues/865) 和 [Issue #861](https://github.com/nullclaw/nullclaw/issues/861) 自 4 月下旬开启至今未彻底解决，今日虽有进展（PR 提交或讨论更新），仍需持续跟进直至关闭。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-18)

## 1. 今日速览
IronClaw 项目今日保持高度活跃，Issues 与 PR 更新量均接近 50 条，显示出开发节奏紧凑。核心进展集中在 **Reborn 架构的重大功能迭代**，包括 "Projects" 管理功能的完整栈实现（5个 PRs）以及 "Self-evolution"（自我进化）技能提取机制的提案。稳定性方面，修复了 AWS Bedrock 连接与 Slack OAuth 安全隐患，但仍有工具调用死循环和 CI 依赖阻断等问题待解。整体来看，项目正处于功能完善与稳定性攻坚并行的阶段，"Reborn" 架构日渐成熟。

## 2. 版本发布
无新版本发布。
*(注：PR #3708 为发布相关 PR，目前状态为 Closed，但概览数据显示今日无新 Release 发布，可能涉及发布流程调整或回滚。)*

## 3. 项目进展
今日合并/关闭了多个关键 PR，显著推进了 Reborn 架构的成熟度：
*   **Reborn "Projects" 功能落地（核心进展）：** 开发团队提交了一整套 5 个 PRs（#5015, #5016, #5017, #5018, #5019），实现了 "Projects" 实体、成员权限管理（Owner/Editor/Viewer）以及 WebChat v2 的完整前端交互。这标志着 IronClaw 从单一会话向多项目协作管理迈出了关键一步。
    *   链接：[PR #5015](https://nearai/ironclaw/pull/5015) | [PR #5019](https://nearai/ironclaw/pull/5019)
*   **安全与稳定性修复：**
    *   **Slack OAuth 安全加固：** PR #5052 合并，修复了非触发式 Slack OAuth 路径的结构性安全对等问题，确保了私有消息（DM）的安全验证。
    *   **Agent 执行逻辑优化：** PR #5022 与 #5000 合并，引入了 "Output-aware no-progress detection"（输出感知的无进展检测），解决了 Agent 在无效循环中空转的问题。
    *   **AWS Bedrock 支持：** PR #5059 修复了独立二进制文件无法使用 Bedrock 特性的问题，已合并。

## 4. 社区热点
今日社区关注点集中在 Agent 执行稳定性与部署配置上：
*   **Issue #4761 [OPEN] - Agent 工具故障恢复失效：** 报告了 Agent 在反复遭遇工具调用失败后停止运行，未能执行恢复逻辑，引发了关于 Agent 容错机制的讨论。
    *   链接：[Issue #4761](https://nearai/ironclaw/issue/4761)
*   **Issue #4879 [OPEN] - 内部 Dogfooding 问题追踪：** 这是一个团队内部的质量追踪 Issue，记录了 Reborn WebUI 在实际使用中的发现，表明团队正在高强度自测。
    *   链接：[Issue #4879](https://nearai/ironclaw/issue/4879)
*   **PR #5061 [OPEN] - 技能自我进化提案：** 这是一个 XL 级别的功能 PR，提议在 Reborn 中引入 Hermes 风格的技能提取机制，使 Agent 能够从成功对话中提炼技能并持久化，引发了关于 Agent 自主学习能力的关注。
    *   链接：[PR #5061](https://nearai/ironclaw/pull/5061)

## 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，部分已有修复方案：

*   **P0 - CI/构建阻断：**
    *   **Issue #4824：** `cargo-deny` 因 Postgres 相关的新 RUSTSC 安全公告导致 CI 全线失败，影响所有 PR 的合并。
    *   状态：Open | 链接：[Issue #4824](https://nearai/ironclaw/issue/4824)
*   **P1 - Agent 逻辑死循环：**
    *   **Issue #5060：** GitHub 分析工作流可能进入反复审批循环，无法产出结果。
    *   状态：Open | 链接：[Issue #5060](https://nearai/ironclaw/issue/5060)
    *   **Issue #5058：** AWS Bedrock 用户无法连接且工具调用模式不兼容（已有修复 PR #5059 合并）。
    *   状态：Closed | 链接：[Issue #5058](https://nearai/ironclaw/issue/5058)
*   **P2 - 用户体验问题：**
    *   **Issue #4918：** 自动化运行日志在页面上不显示。
    *   **Issue #5007：** 技能验证错误在字段填写后不自动清除。

## 6. 功能请求与路线图信号
*   **Projects 管理体系确立：** 随着今日 Projects 系列栈的提交，IronClaw 正式确立了多项目管理的路线图，预计将在下个版本中作为核心卖点推出。
*   **Agent 自主进化能力：** PR #5061 提出的 "Self-evolution" 意味着 IronClaw 正探索 Agent 动态获取技能的能力，这可能改变当前依赖预置 Prompt 的模式。
*   **模型兼容性优化：** Issue #5044 和 PR #5045 针对 `NEARAI_MODEL=auto` 的处理进行了优化，表明项目正在加强对不同云环境和本地环境的模型自动适配能力。

## 7. 用户反馈摘要
*   **工具调用反馈缺失：** 用户反馈在拒绝 Shell 权限或工具执行失败时，UI 缺乏明确的反馈，导致用户不知所措（Issue #4764）。
*   **自动化功能可用性低：** 多个 Issues 提到自动化列表、日志展示空空如也，或者可视化难以理解，用户难以排查自动化任务为何失败。
*   **本地部署配置困惑：** 用户在尝试配置 Bedrock 或本地模型别名 `auto` 时遇到 HTTP 400 错误，说明文档或默认配置对新手仍有门槛（Issue #5044）。

## 8. 待处理积压
*   **Issue #3582 [OPEN]：** WeChat 频道移植至 Reborn 架构的计划，自 5 月提出至今尚未有实质性 PR 进展，对于中国区用户是关键需求。
    *   链接：[Issue #3582](https://nearai/ironclaw/issue/3582)
*   **Issue #3729 [OPEN]：** 工具安装失败后刷新页面显示成功的显示 Bug，自 5 月中旬遗留至今，影响用户对工具调用状态的信任度。
    *   链接：[Issue #3729](https://nearai/ironclaw/issue/3729)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-18)

## 1. 今日速览
LobsterAI 项目今日呈现出极高的开发活跃度，过去 24 小时内共有 10 个 PR 完成合并或关闭，这主要是为了配合 **v2026.6.15** 新版本的发布。此次更新重磅推出了 "Computer Use" 功能与实时 ASR 语音输入，标志着该项目从单一的对话助手向具备操作系统交互能力的智能体平台演进。然而，伴随着新功能的发布，社区今日报告了一个严重的安全漏洞，涉及任意本地文件读取，项目安全性面临新的考验。整体来看，项目迭代节奏紧凑，但在安全性审核方面需投入更多精力。

## 2. 版本发布
**版本号**: `2026.6.15`
**发布日期**: 2026-06-15 (今日数据窗口内显现)
**更新亮点**:
- **Computer Use (计算机操作能力)**: 通过 [PR #2143](https://github.com/netease-youdao/LobsterAI/pull/2143) 引入，允许 AI 智能体直接操作计算机界面，是本项目迈向 Agent 自动化的关键一步。
- **实时 ASR 语音输入**: 通过 [PR #2148](https://github.com/netease-youdao/LobsterAI/pull/2148) 实现，大幅提升了 Cowork 模块的多模态交互体验。
- **上下文连续性增强**: 优化了 OpenClaw 压缩聊天记录后的上下文质量，确保智能体在长对话中能更可靠地延续任务。
**迁移提示**: 本次更新涉及核心网关和渲染进程的重构，且包含了 Portal URL 的更新，建议开发者关注认证模块的兼容性测试。

## 3. 项目进展
今日共有 **10 个 PR** 更新（均已关闭/合并），主要集中在稳定性修复与新功能配套完善：

- **核心功能完善**:
    - [PR #2145](https://github.com/netease-youdao/LobsterAI/pull/2145): 改进了上下文压缩后的连续性，解决了长任务中智能体“失忆”的问题，为新版本功能提供底层支撑。
    - [PR #2144](https://github.com/netease-youdao/LobsterAI/pull/2144): 更新了 Portal 回退 URL，确保新域名下的认证流程通畅。

- **稳定性与性能修复**:
    - [PR #2149](https://github.com/netease-youdao/LobsterAI/pull/2149): 解决了 OpenClaw 网关进程在长时间运行下的 OOM（内存溢出）崩溃问题，提升了服务端的稳定性。
    - [PR #2147](https://github.com/netease-youdao/LobsterAI/pull/2147): 修复了用户快速停止流式输出时可能导致错误发送消息的竞态条件。

- **用户体验优化**:
    - [PR #2174](https://github.com/netease-youdao/LobsterAI/pull/2174): 修正了滚动到底部的位置计算，确保对话流体验更顺滑。
    - [PR #2153](https://github.com/netease-youdao/LobsterAI/pull/2153): 修复了同名包模型选择混乱的问题，保障了模型切换的准确性。

项目整体质量在新版本发布后得到了显著的补强，尤其是在内存管理和并发控制方面迈出了一大步。

## 4. 社区热点
今日社区关注度最高的议题是安全漏洞报告：
- **Issue #2176 [Security] LobsterAI automatic artifact loading allows message-derived arbitrary local file reads**
  - **链接**: [netease-youdao/LobsterAI Issue #2176](https://github.com/netease-youdao/LobsterAI/issues/2176)
  - **分析**: 该 Issue 指出 LobsterAI 在自动解析 `MEDIA:` 文件引用时未进行充分校验，导致攻击者可通过构造消息读取本地任意文件。这是一个典型的路径遍历漏洞，对于 Electron 架构的应用影响较大。虽然目前评论数尚少，但其潜在风险等级极高，建议开发者立即关注此议题的后续修复进展。

## 5. Bug 与稳定性
根据今日数据，Bug 报告与修复情况如下：

- **严重 - 本地文件读取漏洞**:
    - **Issue**: [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176)
    - **状态**: Open (暂无 Fix PR)
    - **详情**: 自动 Artifact 加载机制存在路径校验缺陷，需紧急修复。

- **已修复 - 内存溢出 (OOM)**:
    - **PR**: [#2149](https://github.com/netease-youdao/LobsterAI/pull/2149)
    - **详情**: 为 OpenClaw 网关设置了显式的 V8 老生代内存限制，解决了多通道长时运行下的崩溃问题。

- **已修复 - 流式交互中断异常**:
    - **PR**: [#2147](https://github.com/netease-youdao/LobsterAI/pull/2147)
    - **详情**: 修复了在网关运行前用户点击停止可能导致的消息误发或状态错误。

## 6. 功能请求与路线图信号
从近期合并的 PR 来看，项目路线图呈现以下趋势：
1.  **Agent 自动化**: "Computer Use" 功能的加入意味着项目将重点转向 AI 智能体对操作系统的自主控制，未来可能会加强对 UI 自动化的容错与监控。
2.  **多模态交互**: 实时 ASR 输入的加入表明语音交互将成为核心场景，预计后续版本将优化语音识别的准确率及降噪处理。
3.  **长程记忆**: 针对 Context Compaction 的连续性改进（PR #2145）暗示项目正在攻克 Agent 在长任务执行中的记忆难题，未来可能会有更高效的上下文检索机制。

## 7. 用户反馈摘要
- **安全性关注**: 安全研究员指出的文件读取漏洞表明，随着功能扩展（特别是涉及本地文件引用的 `MEDIA:` 协议），用户对本地隐私数据的保护机制愈发敏感。
- **交互细节**: PR #2174 针对“滚动到底部”位置的微调，反映出用户在快速对话中对 UI 细节的高要求，特别是长对话流的视觉稳定性。
- **模型管理**: 同名包模型选择问题的修复（PR #2153）侧面反馈了高级用户在多模型切换场景下的痛点，希望能更精准地控制使用的模型版本。

## 8. 待处理积压
- **高危安全漏洞**: **Issue #2176** 为今日新开且处于 Open 状态，鉴于其涉及本地文件安全，属于最高优先级的待处理事项，需维护者尽快确认并提供修复方案。
- **历史遗留 PR**: 今日关闭了一个标记为 `[stale]` 的 PR [#1463](https://github.com/netease-youdao/LobsterAI/pull/1463)（修复长模态标题问题），显示出项目组正在清理积压代码，保持仓库整洁。目前暂无其他长期未响应的关键功能性 Issue，项目健康度良好。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目日报 (2026-06-18)

## 1. 今日速览
今日 TinyClaw 项目面临严峻的安全挑战，项目活跃度主要集中在安全漏洞披露上。过去 24 小时内，没有任何代码合并或版本发布，但连续涌现 3 条高危安全 Issue。这些 Issue 均由用户 @YLChen-007 提交，直指 TinyAGI 核心功能的鉴权缺失与文件操作漏洞。项目当前健康度亮起红灯，急需维护团队介入修复以防止潜在的安全风险。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
过去 24 小时内无 PR 更新、合并或关闭记录。项目代码库今日处于停滞状态，未推进任何功能性更新或常规 Bug 修复。

## 4. 社区热点
今日社区关注点完全集中在安全漏洞披露上，讨论最活跃的内容为以下三个未解决的安全 Issue：

*   **[#284 未认证 API 调用 Claude 风险](https://github.com/TinyAGI/tinyagi/issues/284)**
    *   **诉求分析**：披露者指出 TinyAGI 存在未认证的 `POST /api/message` 接口，且默认禁用了提供商权限检查。这意味着攻击者可绕过认证直接调用 Claude 等模型，不仅消耗受害者额度，还可能导致恶意操作。
*   **[#283 本地文件任意读取风险](https://github.com/TinyAGI/tinyagi/issues/283)**
    *   **诉求分析**：该 Issue 揭露了 Agent 配置 API 中的 `prompt_file` 参数未经验证，允许攻击者读取服务器本地任意文件并发送给模型提供商，导致敏感信息泄露。
*   **[#282 任意主机文件投递风险](https://github.com/TinyAGI/tinyagi/issues/282)**
    *   **诉求分析**：针对响应处理机制，披露者发现 `[send_file: ...]` 标签处理不当，允许远程未认证用户触发服务器文件的附件发送，可能导致数据外泄。

## 5. Bug 与稳定性
今日报告的问题均为**严重安全漏洞**，按严重程度排列如下：

1.  **[Critical] 未授权 API 调用与权限绕过 (#284)**
    *   **问题**：API 缺乏认证且默认关闭权限检查。
    *   **影响**：资源滥用、未授权操作。
    *   **状态**：Open，暂无 Fix PR。
2.  **[Critical] 任意文件读取漏洞 (#283)**
    *   **问题**：`prompt_file` 参数路径遍历/未校验。
    *   **影响**：敏感配置/数据泄露至第三方模型提供商。
    *   **状态**：Open，暂无 Fix PR。
3.  **[High] 任意文件附件发送漏洞 (#282)**
    *   **问题**：响应标签处理逻辑缺陷。
    *   **影响**：服务器文件被窃取/传输。
    *   **状态**：Open，暂无 Fix PR。

**稳定性总结**：当前项目在默认配置下存在极高安全风险，不建议在未修复前暴露于公网环境。

## 6. 功能请求与路线图信号
无新功能请求。今日信号强烈指向**安全性加固**需求。建议维护者将以下事项纳入最高优先级路线图：
*   实施严格的 API 认证机制。
*   增加 `prompt_file` 路径校验与沙箱限制。
*   禁用或严格限制响应标签中的文件操作功能。

## 7. 用户反馈摘要
今日反馈主要来自安全审计视角，反映了以下痛点：
*   **默认配置不安全**：用户发现项目默认配置倾向于“可用性”而牺牲了“安全性”（如默认禁用权限检查），这对于生产环境是致命缺陷。
*   **输入验证缺失**：对文件路径、API 参数缺乏严格的白名单校验，导致注入类漏洞。
*   **信任危机**：连续 3 个安全 Issue 的提交，表明项目当前版本可能不适合公开部署，用户对项目的安全感下降。

## 8. 待处理积压
今日新增 3 条**紧急积压**，需立即响应：

*   **[URGENT] Issue #284**: 安全漏洞，涉及未认证调用与权限绕过。
    *   链接: [TinyAGI/tinyagi Issue #284](https://github.com/TinyAGI/tinyagi/issues/284)
*   **[URGENT] Issue #283**: 安全漏洞，涉及任意文件读取。
    *   链接: [TinyAGI/tinyagi Issue #283](https://github.com/TinyAGI/tinyagi/issues/283)
*   **[URGENT] Issue #282**: 安全漏洞，涉及任意文件发送。
    *   链接: [TinyAGI/tinyagi Issue #282](https://github.com/TinyAGI/tinyagi/issues/282)

**建议**：维护团队应立即确认漏洞细节，并发布安全补丁或临时缓解措施（如关闭相关 API 端口、增加中间件鉴权）。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-18)

## 1. 今日速览
Moltis 项目在过去 24 小时内整体处于**功能增强与细节优化阶段**，社区活跃度平稳。今日未发布新版本，核心开发重心集中在提升系统可配置性与用户体验上。Issue 版块主要围绕 TTS（文本转语音）输出格式与聊天记录导出功能展开讨论，显示出用户对数据交互格式的精细化需求。目前暂无严重的 Bug 报告，项目健康度良好。

## 2. 版本发布
无。

## 3. 项目进展
今日无已合并的 Pull Requests。

当前有 1 个待合并的 PR 正在推进中：
- **[PR #1130](https://github.com/moltis-org/moltis/pull/1130) feat: make webui rpc timeout configurable**
  - **进展**：由核心贡献者 @khimaros 提交，旨在解决 WebUI RPC 超时配置的问题。
  - **关联**：该 PR 关联修复了 Issue #1127（虽然该 Issue 未出现在今日列表中，但根据 PR 描述推断其修复了相关通信超时痛点）。
  - **分析**：此改动将提升前端与后端通信的灵活性，特别是在网络环境不稳定或处理长耗时任务时，允许用户自定义超时时间将显著改善使用体验。

## 4. 社区热点
今日社区讨论最活跃的议题是关于 TTS 输出的配置：
- **[Issue #1126](https://github.com/moltis-org/moltis/issues/1126) [Feature]: allow to configure the format of tts output**
  - **热度数据**：评论数 3 条，为今日最高。
  - **核心诉求**：作者 @khimaros 提出希望能自定义 TTS 的输出格式。目前的讨论表明用户不仅满足于“能听”，更开始追求“听得方便、格式通用”，这可能涉及音频编码格式（如 MP3, WAV, Ogg）的选择，反映了 Moltis 在多媒体输出侧的深化需求。

## 5. Bug 与稳定性
今日未报告新的 Bug、崩溃或回归问题。项目稳定性维持良好。

## 6. 功能请求与路线图信号
今日新增 2 条功能增强请求，均聚焦于**用户体验（UX）与数据可移植性**：

1.  **TTS 输出格式配置** ([Issue #1126](https://github.com/moltis-org/moltis/issues/1126))
    - **诉求**：允许配置 TTS 输出格式。
    - **信号**：结合 PR #1130（RPC 配置）来看，项目正在增强底层通信与多媒体 I/O 的可定制性，预示着 Moltis 正向更专业的工具链方向演进。

2.  **Markdown 导出功能** ([Issue #1131](https://github.com/moltis-org/moltis/issues/1131))
    - **诉求**：增加“复制”及“导出为 Markdown”功能。
    - **信号**：这是 AI 对话工具的刚需功能，表明用户有强烈的保存会话、归档知识库的需求。此功能实现成本低但价值高，极有可能被纳入下一阶段的开发计划。

## 7. 用户反馈摘要
从今日的 Issues 中可以提炼出以下用户痛点：
- **数据导出需求迫切**：用户 @vvuk 提出的 Markdown 导出需求直击痛点，当前版本可能缺乏便捷的对话导出机制，导致用户难以将 AI 生成的内容迁移或存档。
- **精细化的控制欲**：从 Issue #1126 可见，用户不再满足于默认设置，希望对 AI 的输出（如音频格式）有更细粒度的控制权，这通常出现在进阶用户或集成场景中。

## 8. 待处理积压
当前暂无长期未响应的重要 Issue 或 PR。今日新增的 Issue #1126 已有 3 条评论互动，说明维护者响应及时。唯一在排的 PR #1130 仍处于待合并状态，建议维护者尽快 Review 以优化 WebUI 的通信体验。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-06-18)

## 1. 今日速览
CoPaw 项目今日活跃度极高，呈现出显著的版本迭代与问题修复趋势。项目正式发布了 **v1.1.12** 正式版，重点对 Console 前端进行了大刀阔斧的重构，引入了 Simple Mode 和全新的模型页面 UI。与此同时，开发分支已紧锣密鼓地推进至 **v2.0.0a1**，预示着下一个大版本的早期预研已启动。过去 24 小时内，Issue 闭环率极高（关闭 38 条），PR 合并活跃（关闭/合并 32 条），显示维护团队正在高效清理存量问题并为新版本铺路。

## 2. 版本发布
### v1.1.12 (Latest Release)
**更新亮点：**
- **Console 体验重构**：
  - **模型页面改版**：实现了 Provider 聚合展示与统一卡片 UI，重新设计了布局 ([#5203](https://github.com/agentscope-ai/QwenPaw/pull/5203))。
  - **Simple Mode**：新增简易模式，支持扁平化导航及按更新时间排序的会话列表 ([#5222](https://github.com/agentscope-ai/QwenPaw/pull/5222))。
  - **会话过滤**：新增按标题过滤会话的功能 ([#5178](https://github.com/agentscope-ai/QwenPaw/pull/5178))。
- **性能优化**：移除了 Agent 配置中不必要的深拷贝操作，显著降低内存与 CPU 开销 ([#5240](https://github.com/agentscope-ai/QwenPaw/pull/5240))。

### v2.0.0a1 (Alpha Milestone)
- 开发分支已启动 v2.0.0a1 版本迭代 ([#5281](https://github.com/agentscope-ai/QwenPaw/pull/5281))，虽然具体变更细节尚在合并中，但这标志着项目正式进入 2.0 时代的研发周期。

## 3. 项目进展
今日共有 **32 个 PR** 更新（含合并/关闭），项目整体向前迈出了坚实的一步：
- **稳定性修复**：修复了 ChromaDB 运行时探针因集合命名不规范导致的启动失败问题 ([#5289](https://github.com/agentscope-ai/QwenPaw/pull/5289))，修复了主动响应模块可能导致的配置缓存污染问题 ([#5275](https://github.com/agentscope-ai/QwenPaw/pull/5275))。
- **架构改进**：XiaoYi 频道重构为双 WebSocket 连接架构，提升了连接稳定性 ([#5274](https://github.com/agentscope-ai/QwenPaw/pull/5274))。
- **待合并新特性**：
  - **历史记录侧边栏**：PR [#5293](https://github.com/agentscope-ai/QwenPaw/pull/5293) 提议将历史记录从弹窗改为右侧嵌入式面板，目前处于 Open 状态。
  - **迁移工具**：PR [#5276](https://github.com/agentscope-ai/QwenPaw/pull/5276) 正在增加从 OpenClaw 配置迁移的 CLI 工具，方便竞品用户迁移。

## 4. 社区热点
今日社区讨论焦点集中在功能扩展与交互体验优化：
1.  **内置技能生态探讨** ([#280](https://github.com/agentscope-ai/QwenPaw/issues/280))：该 Issue 虽已关闭但引发了大量讨论（27 条评论）。社区强烈建议预装常用 MCPs 和 Skills（如文档处理、网络搜索），以提升开箱即用体验。
2.  **WebUI 性能焦虑** ([#4108](https://github.com/agentscope-ai/QwenPaw/issues/4108))：多位用户反馈新版 WebUI 在生成回复时会导致浏览器甚至系统卡顿（掉帧），严重影响了多任务处理体验。官方已在 v1.1.12 中优化配置深拷贝逻辑，但用户仍需验证实际效果。
3.  **配置持久化问题** ([#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262))：用户抱怨升级版本后，之前禁用的内置 Skill 会被强制重置为启用，影响了个性化配置的保留。

## 5. Bug 与稳定性
今日修复了多个影响体验的关键 Bug，同时也暴露了部分待解决问题：
- **🔴 严重 (已修复)**：
  - **ChromaDB 启动失败**：探针集合名 `_probe` 违反命名规范，导致依赖向量数据库的功能降级。Fix PR: [#5289](https://github.com/agentscope-ai/QwenPaw/pull/5289)。
  - **飞书文件上传死循环**：大文件上传失败后触发无限发送日志切片的 Bug。Issue: [#472](https://github.com/agentscope-ai/QwenPaw/issues/472)。
- **🟡 中等 (待处理)**：
  - **Matrix 互聊死循环**：两个 Agent 通过 Matrix 互通时会陷入无限唤醒循环 ([#5204](https://github.com/agentscope-ai/QwenPaw/issues/5204))，目前尚未有 Fix PR 合并。
  - **升级重置配置**：升级版本导致禁用的内置技能被重新启用 ([#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262))，目前处于 Open 状态。

## 6. 功能请求与路线图信号
从 Issues 和 PRs 活动来看，以下方向可能成为下一阶段重点：
- **易用性增强**：用户强烈请求 **Slack 频道支持** ([#5152](https://github.com/agentscope-ai/QwenPaw/issues/5152)) 和 **Web 控制台远程升级** 功能 ([#2235](https://github.com/agentscope-ai/QwenPaw/issues/2235))。
- **迁移便利性**：PR [#5276](https://github.com/agentscope-ai/QwenPaw/pull/5276) 显示团队正在考虑从 OpenClaw 的迁移方案，可能意在吸引竞品用户。
- **UI 交互优化**：针对 WebUI 卡顿和布局问题，PR [#5293](https://github.com/agentscope-ai/QwenPaw/pull/5293) 提出的嵌入式历史面板和已合并的 Simple Mode 都是对此的回应。

## 7. 用户反馈摘要
- **痛点**：WebUI 性能是最大槽点，用户反馈生成时会导致电脑卡顿、鼠标掉帧；Docker 升级后的兼容性（如端口变更、启动失败）也是高频问题。
- **满意点**：模型 Provider 聚合展示和 Simple Mode 受到期待，用户对多渠道接入（如飞书、钉钉、Discord）表现出浓厚兴趣。
- **场景**：用户多将 CoPaw 用于个人助理、知识库检索（ChromaDB）及多平台消息转发，对文件处理（Docx/Xlsx）和大文件上传稳定性有较高要求。

## 8. 待处理积压
- **[Bug] 配置重置问题** ([#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262))：严重影响升级体验，需尽快修复。
- **[Bug] Matrix Agent 互聊死循环** ([#5204](https://github.com/agentscope-ai/QwenPaw/issues/5204))：涉及多智能体协作的稳定性，目前尚在 Open 状态。
- **[Feature] Slack 支持** ([#5152](https://github.com/agentscope-ai/QwenPaw/issues/5152))：社区呼声高，建议维护者评估优先级。

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