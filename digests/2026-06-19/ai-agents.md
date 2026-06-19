# OpenClaw 生态日报 2026-06-19

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-19 04:42 UTC

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

# OpenClaw 项目动态日报 (2026-06-19)

## 1. 今日速览

OpenClaw 项目今日呈现**极高的社区活跃度**，过去 24 小时内 Issue 更新量达到 500 条（其中新开/活跃 459 条），PR 更新量同样达到 500 条。然而，这种活跃度主要表现为**问题积压的迹象**——仅有 41 条 Issue 被关闭，却有 459 条新 Issue 涌入；PR 方面待合并数量高达 455 条，而合并/关闭仅 45 条。这表明项目正处于功能迭代的高峰期或维护压力期，大量新问题（特别是关于稳定性、会话状态管理和多渠道集成）涌现，维护者可能面临较大的响应压力。今日无新版本发布，主要进展集中在自动化修复机器人的运作和部分核心 Bug 的修复 PR 提交上。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

尽管合并数量有限，但今日有几个关键修复和功能 PR 值得关注，特别是自动化修复机器人 `clawsweeper[bot]` 的介入加速了小型修复的合并：

- **[FIX] 群聊会话死锁修复**: PR [#89045](https://github.com/openclaw/openclaw/pull/89045) 针对 Issue #86827 提供了修复方案，解决了群聊会话在失败状态下静默丢弃所有后续消息的严重问题。该 PR 已处于 `ready for maintainer look` 状态，是今日最关键的修复进展。
- **[FIX] Trello Skill 自动化修复**: 机器人 `clawsweeper[bot]` 提交并合并了 PR [#94794](https://github.com/openclaw/openclaw/pull/94794)，修复了 `skills/trello` 缺少 `curl` 依赖的问题。
- **[PERF] Agent 启动性能优化**: PR [#94779](https://github.com/openclaw/openclaw/pull/94779) 提议并行化 MCP 和 LSP 初始化，旨在将 Agent 冷启动延迟从 6-7 秒显著降低。
- **[FEAT] 多槽位记忆架构**: PR [#88504](https://github.com/openclaw/openclaw/pull/88504) 正在重构记忆系统，引入多角色插槽以支持更复杂的记忆组合。
- **[FIX] Telegram outbound 保留字处理**: PR [#94107](https://github.com/openclaw/openclaw/pull/94107) 修复了 Telegram 发送目标解析错误的问题。

## 4. 社区热点

今日讨论最活跃的 Issues 集中在**会话状态管理、第三方模型集成稳定性**以及**静默失败**问题上：

- **[#85888](https://github.com/openclaw/openclaw/issues/85888) [CLOSED]**: Cron 任务在早高峰期间调用 MiniMax API 频繁返回 503 错误，而手动触发正常。讨论热度最高（12 条评论），揭示了 OpenClaw 在高并发或特定时段调度方面的潜在瓶颈。
- **[#86538](https://github.com/openclaw/openclaw/issues/86538) [OPEN]**: Session JSONL 写锁超时阻塞了主线程、Cron 和子智能体通道，导致投递/生命周期失败。这是一个严重的架构问题，正在寻求维护者决策。
- **[#84516](https://github.com/openclaw/openclaw/issues/84516) [OPEN]**: Codex app-server 在无头模式下静默截断长回复（~1000字符），且无报错。用户对此感到困惑，难以排查。
- **[#54531](https://github.com/openclaw/openclaw/issues/54531) [OPEN]**: 跨平台回复失败的老问题。用户在 Telegram/Discord/WhatsApp 发起对话，智能体回复却未发回原频道。该 Issue 自 3 月开启，至今仍是痛点。

## 5. Bug 与稳定性

今日报告了多个严重的 Bug，部分涉及数据丢失和系统核心功能瘫痪：

- **[P0 数据丢失] [#84882](https://github.com/openclaw/openclaw/issues/84882)**: `memory-core` 的 Dreaming 流程静默删除每日记忆文件 (`memory/YYYY-MM-DD.md`)。这是极严重的数据完整性问题。
- **[P1 架构缺陷] [#84903](https://github.com/openclaw/openclaw/issues/84903)**: 单个 Agent 会话卡死（例如模型调用挂起）会导致整个 Gateway 事件循环阻塞，引发全局服务不可用。这是严重的隔离性失效。
- **[P1 回归] [#86519](https://github.com/openclaw/openclaw/issues/86519)**: 5.20 更新后，Telegram 频道出现重复回复（2-10次），升级到 5.22 后有所缓解但未根除。
- **[P1 静默失败] [#86827](https://github.com/openclaw/openclaw/issues/86827)**: 群聊会话一旦进入 `failed` 状态，后续所有消息均被静默丢弃。已有修复 PR [#89045](https://github.com/openclaw/openclaw/pull/89045)。
- **[P1 模型回退失效] [#85103](https://github.com/openclaw/openclaw/issues/85103)**: OpenAI Codex 配额耗尽时，配置的模型回退链未触发，直接报错。
- **[P1 内存泄漏] [#87109](https://github.com/openclaw/openclaw/issues/87109)**: Gateway 在空闲状态下堆内存增长至 1GB+，导致 Cron 任务因内存压力静默失败。

## 6. 功能请求与路线图信号

- **[#44111](https://github.com/openclaw/openclaw/pull/44111) [XL PR]**: 提议增加加密快照备份流程，弥补本地备份的不足。该 PR 规模巨大，正在审查中。
- **[#86881](https://github.com/openclaw/openclaw/issues/86881)**: 请求 "Gateway-lite" 模式，在无需 AI 模型的情况下运行纯通道网关、Webhook 和确定性插件，降低部署依赖。
- **[#87714](https://github.com/openclaw/openclaw/issues/87714)**: 提出 "源感知指令跟踪" 架构，以防御间接提示词注入攻击，增强安全性。
- **[#88504](https://github.com/openclaw/openclaw/pull/88504) [XL PR]**: 重构记忆系统为多槽位角色架构，这将改变插件组合记忆的方式，是一个重大的架构变更信号。

## 7. 用户反馈摘要

- **静默失败是最大痛点**: 多个高优 Issue (#84516, #86827, #84882, #87109) 均提及 "Silent"（静默）截断、删除或失败。用户强烈希望系统能在出错时提供明确的错误反馈，而不是悄无声息地丢失数据或消息。
- **跨平台通道稳定性差**: Telegram, Discord, WhatsApp 通道存在各种回归问题（重复消息、回复错位、上下文丢失）。
- **第三方模型集成挑战**: MiniMax, Bedrock, DeepSeek 等非官方 OpenAI 模型的集成存在兼容性（如 Embedding 维度、Inference Profile ARN）和错误处理（503 过载、Quota 耗尽回退）问题。
- **升级体验不顺畅**: 多个用户反馈升级后出现 Gateway 无法启动 (#85027)、循环重启 (#84610) 或 UI 模式被锁死 (#59330)。

## 8. 待处理积压

- **老旧高危 Issue**: **[#54531](https://github.com/openclaw/openclaw/issues/54531)** (回复未发回原频道) 和 **[#11665](https://github.com/openclaw/openclaw/issues/11665)** (Webhook 多轮会话支持) 均为 2-3 月开启的高优问题，至今未关闭，影响核心用户体验。
- **大型 PR 审查**: **PR [#44111](https://github.com/openclaw/openclaw/pull/44111)** (备份功能) 和 **PR [#88504](https://github.com/openclaw/openclaw/pull/88504)** (记忆架构) 体积庞大且重要性高，需维护者尽快推进审查。
- **内存泄漏与隔离性**: **[#84903](https://github.com/openclaw/openclaw/issues/84903)** (会话隔离失效) 和 **[#87109](https://github.com/openclaw/openclaw/issues/87109)** (内存泄漏) 涉及系统底层稳定性，虽已标记 `needs-maintainer-review`，但积压可能导致生产环境风险。

---

## 横向生态对比

# AI 智能体与个人助手开源生态日报 (2026-06-19) - 横向对比分析

## 1. 生态全景
当前开源 AI 智能体生态正处于**从功能爆发向稳定性补强转型的阵痛期**。各项目在积极拓展多模态、桌面端控制和商业化能力的同时，普遍面临**上下文管理（压缩与丢失）**、**并发稳定性**以及**静默失败**等架构级挑战。项目分化明显：一类以 OpenClaw、ZeroClaw 为代表，承载海量用户需求但积压严重；另一类以 Hermes、LobsterAI 为代表，向深度集成开发环境（IDE）和操作系统级 Agent 演进；还有如 NullClaw 探索嵌入式轻量化路径。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 (新开/活跃) | PRs 更新 (合并/活跃) | 版本发布 | 健康度评估 | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (459 new) | 500 (45 merged) | 无 | ⚠️ **高压** | 严重积压，维护压力大，社区热度最高 |
| **NanoBot** | - | 24 (5 merged) | 无 | 🟢 健康 | 功能迭代稳健，内存管理讨论活跃 |
| **ZeroClaw** | 48 | 50 (1 merged) | **v0.8.1** | 🟡 瓶颈 | 修复紧急回归，PR 积压严重 |
| **Hermes Agent**| 50 | 50 (3 merged) | 无 | 🟢 活跃 | 桌面端功能增强，Windows 兼容性修复 |
| **PicoClaw** | - | 14 (7 merged) | Nightly | 🟢 稳定 | 依赖升级，安全修复 |
| **NanoClaw** | 5 | 21 (6 merged) | 无 | 🟢 活跃 | 安全性加固，运行时扩展 |
| **NullClaw** | - | 4 (0 merged) | 无 | 🟡 平稳 | 协议兼容性修复，嵌入式探索 |
| **IronClaw** | 24 | 42 (17 merged) | 无 | 🟢 高效 | Reborn 架构重构，OAuth 修复 |
| **LobsterAI** | - | 14 merged | **v2026.6.18** | 🟢 交付强 | 语音交互重构，Computer Use 落地 |
| **Moltis** | 1 | 0 | 无 | 🔴 低活跃 | 维护停滞，功能缺陷无人响应 |
| **CoPaw** | 14 (29 closed) | 13 (13 merged) | **v1.1.12.post1** | 🟢 响应快 | Issue 清理快，压缩逻辑存疑 |
| **EasyClaw** | 0 | 0 | **v1.8.36/37/38**| 🟢 商业化 | 闭源式开发，功能迭代快 |

## 3. OpenClaw 在生态中的定位

*   **定位**：**生态流量的“压力测试场”与通用型机器人框架标杆**。OpenClaw 拥有生态中最高的社区活跃度（500+ Issue/PR 更新），这既是优势也是负担。
*   **优势**：**多渠道集成能力**（Telegram/Discord/WhatsApp 覆盖广），**插件生态丰富**（Skill 系统）。相比 IronClaw 专注自动化编排、LobsterAI 专注多模态交互，OpenClaw 是最典型的“全能型”选手。
*   **技术路线差异**：相比 Hermes 和 LobsterAI 正在推进的“Desktop/OS-level Agent”（本地 GUI 控制、Git 集成），OpenClaw 仍以**Server-side Gateway** 架构为主，更偏向即时通讯机器人和自动化任务执行。
*   **社区规模对比**：社区规模最大，但维护效率堪忧（今日仅 41 Issue 关闭 vs 459 新开），出现了“人多力量大但噪音也大”的局面，与 NanoBot、IronClaw 这种维护节奏有序的项目形成鲜明对比。

## 4. 共同关注的技术方向

1.  **上下文与记忆管理的困境**
    *   **涉及项目**：OpenClaw, NanoBot, ZeroClaw, CoPaw。
    *   **具体诉求**：上下文压缩导致的关键信息丢失是普遍痛点。用户强烈请求**细粒度的保留策略**（如按条数保留、权重调整），而非简单的 Token 截断。
    *   **数据支撑**：CoPaw 的进程冻结问题 (#5218)、OpenClaw 的数据丢失 (#84882) 均与此相关。

2.  **静默失败与可观测性**
    *   **涉及项目**：OpenClaw, PicoClaw, ZeroClaw。
    *   **具体诉求**：智能体在执行失败、截断消息或丢失数据时往往“静默”，缺乏明确的错误反馈。开发者迫切需要**Debug 日志增强**和**状态反馈机制**。

3.  **多模态与实时交互**
    *   **涉及项目**：LobsterAI, ZeroClaw, PicoClaw。
    *   **具体诉求**：LobsterAI 全面转向实时 ASR，ZeroClaw 修复视觉路由，显示生态正从纯文本向**语音/视觉实时流**迁移。

4.  **本地化与轻量化部署**
    *   **涉及项目**：NanoClaw, NullClaw, Hermes。
    *   **具体诉求**：摆脱 Docker Desktop 依赖、支持 Apple Container 或直接运行在 ESP32 等边缘设备，反映了用户对**数据隐私**和**低成本运行**的强烈需求。

## 5. 差异化定位分析

*   **架构形态**：
    *   **OpenClaw / ZeroClaw**：重服务端网关，强依赖 Channel Adapter，适合托管服务。
    *   **Hermes Agent / LobsterAI**：重客户端，深入 OS 系统权限，适合个人开发者工具。
    *   **NullClaw**：基于 Zig 的高性能/嵌入式路线，瞄准 IoT 场景。

*   **目标用户**：
    *   **EasyClaw**：明确的商业化电商场景，面向运营人员。
    *   **IronClaw**：企业级自动化编排，面向工程团队。
    *   **NanoBot / CoPaw**：开发者框架，面向构建 Agent 应用的程序员。

*   **技术栈选择**：
    *   **OpenClaw** 采用通用网关模式；**LobsterAI** 深度集成 Electron；**NullClaw** 选择 Zig 追求极致性能。这导致了它们在解决相同问题（如权限、沙箱）时采取了完全不同的路径（如 NanoClaw 引入 Bubblewrap vs NullClaw 的 Zig 沙箱）。

## 6. 社区热度与成熟度

*   **高压扩张期**：**OpenClaw**。社区热度极高但维护严重滞后，Issue 积压导致用户满意度下降，处于“维护危机”边缘。
*   **快速迭代期**：**IronClaw, LobsterAI, ZeroClaw**。频繁的功能提交与版本发布，架构调整大，社区反馈积极响应，属于“生力军”。
*   **稳健维护期**：**NanoBot, PicoClaw, CoPaw**。Issue 闭合率高，PR 处理有序，依赖管理良好，属于“成熟稳健”型。
*   **垂类探索期**：**NullClaw (嵌入式), EasyClaw (电商商业化)**。社区虽小但方向明确，功能迭代受特定场景驱动明显。
*   **停滞期**：**Moltis, TinyClaw, ZeptoClaw**。几乎无有效活动或长期无响应。

## 7. 值得关注的趋势信号

1.  **“IDE 化”趋势明显**：Hermes Agent 引入 Git/Plan Mode，LobsterAI 推出 Computer Use MVP。这表明 AI 助手正在从“对话机器人”进化为**开发协作工具**，甚至直接接管操作系统操作。
2.  **上下文管理成为核心竞争力**：简单的窗口滑动已被淘汰，**可逆压缩**、**多槽位记忆** 和 **急切整合** 等高级策略正在成为区分项目技术实力的关键分水岭。
3.  **安全与隔离架构升级**：NanoClaw 的权限治理、PicoClaw 的 SSRF 防护、CoPaw 的沙箱隔离表明，随着 Agent 能力增强（如执行 Shell 命令），**安全边界**已成为不可忽视的架构重点。
4.  **对“静默”零容忍**：社区反馈中，用户对“无报错但无结果”的容忍度极低。未来的项目必须具备**完善的状态透传机制**（如 ZeroClaw 的 Token 进度条），否则将严重影响用户体验。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-19)

## 1. 今日速览
NanoBot 项目今日保持**高活跃度**开发状态，共有 24 个 PR 发生更新，其中 19 个处于待合并状态，显示出社区贡献的强劲势头。过去 24 小时内未发布新版本，项目重心集中在核心功能增强与稳定性修复上。核心讨论围绕**内存管理的上下文整合策略**及**并发安全性**展开。整体来看，项目正处于功能迭代密集期，特别是在多渠道接入和沙箱执行环境方面有显著进展。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 5 个 PR 合并/关闭，涉及内存优化、CI 流程改进及渠道集成：

*   **[MERGED] feat: add consolidation_model for cheaper memory consolidation** ([PR #1391](HKUDS/nanobot PR #1391))
    *   **进展**：引入 `consolidation_model` 字段，允许使用更便宜的模型进行记忆整合，降低了在运行昂贵主模型（如 Opus）时的成本。
*   **[MERGED] feat(webui): make Firecrawl a keyless Web Data app** ([PR #4403](HKUDS/nanobot PR #4403))
    *   **进展**：将 Firecrawl 集成转为无密钥托管模式，简化了 WebUI 的配置流程，提升了用户体验。
*   **[MERGED] feat(feishu): add QR scan-to-create bot CLI login feishu command** ([PR #4391](HKUDS/nanobot PR #4391))
    *   **进展**：实现了飞书渠道的二维码扫码登录创建机器人功能，极大降低了飞书机器人的接入门槛。
*   **[MERGED] ci: skip docs-only changes** ([PR #4400](HKUDS/nanobot PR #4400))
    *   **进展**：优化 CI 流程，仅变更文档时跳过构建检查，节省了计算资源。

## 4. 社区热点
今日讨论最活跃的 Issue 聚焦于长上下文处理的痛点：

*   **[Issue #4307] Bug: Post-turn consolidation wipes the agent's own delivery message** ([链接](HKUDS/nanobot Issue #4307))
    *   **热度**：评论数 3 条。
    *   **分析**：用户反馈在长对话迭代中，上下文整合逻辑滞后导致丢失了 Agent 自身的关键输出信息。这反映了当前“回合后整合”策略在处理超长上下文时的局限性，社区正在探讨如何优化整合的触发时机。

## 5. Bug 与稳定性
今日报告的关键 Bug 涉及并发安全与上下文管理，部分已有修复方案：

*   **[严重] 并发安全隐患：`Nanobot.run()` hooks 被覆盖** ([Issue #4408](HKUDS/nanobot Issue #4408))
    *   **描述**：共享状态 `self._loop._extra_hooks` 在并发运行时存在竞态条件，可能导致 Hook 丢失或错乱。
    *   **状态**：已有修复 PR [#4409](HKUDS/nanobot PR #4409) 提交，修改了传递 hooks 的方式。
*   **[中等] 飞书卡片渲染失败** ([PR #4342](HKUDS/nanobot PR #4342))
    *   **描述**：WebSocket 推送的飞书卡片结构与代码预期不符，导致显示占位符。
    *   **状态**：PR 已提交修复代码，待合并。
*   **[中等] 记忆整合导致消息丢失** ([Issue #4307](HKUDS/nanobot Issue #4307))
    *   **描述**：回合结束时的整合机制会归档 Agent 的输出，导致后续无法引用。
    *   **状态**：讨论中，PR [#4402](HKUDS/nanobot PR #4402) 提出的“急切整合”特性可能与此相关。

## 6. 功能请求与路线图信号
结合 Issue 与 PR 动向，项目路线图呈现出以下重点：

*   **内存管理精细化**：
    *   [PR #4402](HKUDS/nanobot PR #4402) 提出“急切整合”，试图解决 Issue #4307 反映的上下文积压问题。
    *   [PR #4392](HKUDS/nanobot PR #4392) 增加了对 Tool Results 微压缩的可配置性，提供更灵活的上下文控制。
*   **Web 搜索能力扩展**：
    *   [PR #4406](HKUDS/nanobot PR #4406) 新增 Serper.dev 搜索引擎支持。
    *   [PR #4405](HKUDS/nanobot PR #4405) 允许 Keenable 无 API Key 运行。
*   **UI 定制化**：
    *   [PR #4399](HKUDS/nanobot PR #4399) 允许管理员隐藏特定设置项，为非技术用户提供简洁界面。

## 7. 用户反馈摘要
从 Issue 评论中提炼出以下核心反馈：

*   **上下文丢失焦虑**：用户对长对话中的记忆整合机制表示担忧，特别是当 `context_window_tokens` 设置较小时，Agent 的关键输出可能在整合过程中“消失”，严重影响多步任务的连续性。
*   **工作区配置困惑**：用户在使用 Project Workspaces 时，发现 `SOUL.md` 的读写路径不一致（读项目目录，写默认工作区），导致个性化配置未能按预期保存，这表明多工作区隔离逻辑仍有优化空间。

## 8. 待处理积压
*   **[长期 Issue] 上下文整合策略优化**：Issue #4307 暴露的问题涉及核心架构，目前虽在讨论中，但需要核心维护者确认最终解决方案（如采纳 PR #4402 的方案），建议持续关注。
*   **[PR 积压] 19 个待合并 PR**：目前有大量功能增强 PR（如 WhatsApp LID 映射、Web 搜索提供商等）处于 Open 状态，建议维护者加快 Review 节奏或合并冻结，以推进下个版本发布。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-06-19)

## 1. 今日速览
ZeroClaw 项目今日活跃度极高，正式发布了 **v0.8.1** 版本，这是一个包含 207 次提交的重要补丁版本，重点修复了 v0.8.0 引入的多智能体运行时及 Channel 相关问题。尽管版本已发布，社区反馈依然热烈，过去 24 小时内新增/活跃 Issues 达 48 条，显示出用户对新版本的快速验证与反馈。与此同时，PR 积压现象明显，共有 49 个 PR 处于待合并状态（仅 1 个合并/关闭），表明项目正处于功能密集开发与审核瓶颈并存的阶段。今日热点集中在预构建二进制文件的严重回归问题以及多模态、工具调用等核心功能的稳定性上。

## 2. 版本发布
**[v0.8.1](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.1)**
*   **更新概览**：作为 v0.8.x 系列的首个补丁版本，包含 207 次提交，来自 45 位贡献者。
*   **重点修复**：修复了 123 个 Bug，主要集中在稳定多智能体运行时、Channel（Slack/Discord 等）以及 Provider 栈。
*   **新功能**：新增 46 项功能特性。
*   **建议**：鉴于今日 Issue #7787 反馈 v0.8.0 预构建二进制文件存在严重功能缺失，建议所有从 v0.7.x 升级的用户立即升级至 v0.8.1，并注意检查 Slack/Discord 等集成通道是否正常工作。

## 3. 项目进展
今日仅有 1 个 PR 被合并，但有大量关键修复 PR 被提交并进入待审核队列，主要集中在修复昨日版本发布后暴露的回归问题及长期遗留的稳定性问题。

*   **核心修复 PRs**：
    *   [PR #7973](https://github.com/zeroclaw-labs/zeroclaw/pull/7973)：修复了 `context_compression` 在共享运行时配置下的 Provider 混淆问题，解决了跨 Provider 调用时可能发生的静默失败。
    *   [PR #7961](https://github.com/zeroclaw-labs/zeroclaw/pull/7961)：修复了 Anthropic 工具调用中的 Schema 清洗问题，解决了因包含 `$ref` 导致的 API 报错。
    *   [PR #7972](https://github.com/zeroclaw-labs/zeroclaw/pull/7972)：修复了 Telegram Channel 中 `vision_provider` 配置被忽略的 Bug，恢复了多模态视觉功能的正常路由。

*   **功能增强 PRs**：
    *   [PR #7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946)：在 TUI、Gateway Chat 和 CLI 中引入了模型上下文窗口使用率进度条，显著提升了用户对 Token 消耗的感知。
    *   [PR #7965](https://github.com/zeroclaw-labs/zeroclaw/pull/7965)：完善了 Discord 交互组件支持，新增按钮、选择菜单和模态框功能。

## 4. 社区热点
今日讨论最活跃的 Issue 反映了用户对新版本稳定性的担忧及核心功能需求：

1.  **[Issue #7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) - 预构建二进制文件缺失 Slack/Discord 功能 (🔥高危)**
    *   **热度**：评论数 6，标记为 P1 优先级。
    *   **分析**：用户反馈 v0.8.0 官方预构建二进制文件在配置正确的情况下无法使用 Slack/Discord，这是一个严重的回归问题（v0.7.5 正常）。这直接影响了用户的升级体验，需紧急确认 v0.8.1 是否已彻底修复。

2.  **[Issue #5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) - 记忆权重过高问题**
    *   **热度**：评论数 6。
    *   **分析**：长期讨论的痛点，系统 Prompt 过度依赖记忆库，导致在 Cron Jobs 等场景下忽视当前指令。社区呼吁重新平衡 Prompt 权重。

3.  **[Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) - OIDC 认证支持**
    *   **热度**：评论数 5，标记为 RFC & v0.9.0 目标。
    *   **分析**：企业级部署的关键需求，计划引入可插拔的认证 Provider，这是项目向生产级安全架构演进的重要信号。

## 5. Bug 与稳定性
今日报告了多个高危 (risk: high) 和阻塞工作流 (S1/S2) 的 Bug，部分已有对应 PR 修复：

| 严重等级 | Issue | 描述 | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| **S1 (阻塞)** | [#6432](https://github.com/zeroclaw-labs/zeroclaw/issues/6432) | Gemini 调用报 400 错误，历史记录序列化违规（Assistant turn 置于 User turn 之前）。 | Open / 讨论中 |
| **S1 (阻塞)** | [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | Shell 工具在 `autonomy = "full"` 模式下被拒绝调用。 | Open / [PR #7959](https://github.com/zeroclaw-labs/zeroclaw/pull/7959) (Fix) |
| **S1 (阻塞)** | [#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841) | 多模态视觉 Provider 被静默忽略，图片路由至 Fallback Provider。 | Open / [PR #7972](https://github.com/zeroclaw-labs/zeroclaw/pull/7972) (Fix) |
| **S2 (降级)** | [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | 默认 32k 上下文预算被 System Prompt + Tool 定义瞬间撑爆，导致立即触发裁剪。 | Open |
| **S2 (降级)** | [#7964](https://github.com/zeroclaw-labs/zeroclaw/issues/7964) | Context Compression 的 Summary Model 配置在共享 Runtime Profile 下会导致跨 Provider 失败。 | Open / [PR #7973](https://github.com/zeroclaw-labs/zeroclaw/pull/7973) (Fix) |

## 6. 功能请求与路线图信号
*   **认证与安全**：OIDC 支持已明确列入 v0.9.0 路线图 ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141))，这将极大增强 ZeroClaw 在企业环境中的适用性。
*   **多模态与交互**：Signal Channel 正在完善媒体附件支持 ([#7891](https://github.com/zeroclaw-labs/zeroclaw/issues/7891))，Discord 交互组件 ([PR #7965](https://github.com/zeroclaw-labs/zeroclaw/pull/7965)) 即将合并，显示出项目正在向更丰富的富媒体交互方向发展。
*   **可观测性**：上下文窗口可视化 ([PR #7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946)) 的加入响应了用户对 Token 消耗监控的强烈需求。

## 7. 用户反馈摘要
*   **升级痛点**：用户对 v0.8.0 -> v0.8.1 的升级路径感到困惑，特别是遇到预构建包缺失功能的情况 ([#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787))，建议官方加强 Release Note 中的 Binary 差异说明。
*   **配置复杂度**：多模态配置 (`vision_provider`) 和上下文压缩 (`context_compression`) 的配置逻辑被吐槽容易踩坑，用户期望配置项之间有更强的联动校验或更清晰的文档。
*   **行为一致性**：用户指出 Telegram 发送多张图片时，Agent 会多次响应而非一次性处理 ([#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514))，这反映出 Channel 层消息聚合逻辑与用户直觉的偏差。

## 8. 待处理积压
*   **PR 积压严重**：当前有 **49 个 PR 处于待合并状态**，仅 1 个 PR 被处理。大量修复代码（如 Telegram、Anthropic、Tools 相关修复）处于排队状态，建议维护者优先处理 P1 级别的 Bug Fix PR（如 #7972, #7961, #7973），以尽快发布 v0.8.2 修复版本。
*   **长期 Issue**：安全依赖漏洞 ([#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869)) 因 `rumqttc` 依赖锁定仍处于 Blocked 状态，建议关注相关依赖库的更新进度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-19)

## 1. 今日速览
Hermes Agent 今日保持高活跃度，共处理 50 个 Issue 更新和 50 个 PR 更新，社区互动频繁。虽然无新版本发布，但核心开发重心明显向 **Desktop 桌面端体验增强** 倾斜，出现了如原生 Git 集成、Plan Mode、Diff Review 等重量级功能 PR。稳定性方面，修复了 SQLite 兼容性崩溃和 Provider 错误解析等关键问题，但也暴露了 Windows 平台安装与 Gateway 运行的多个严重 Bug。总体来看，项目正处于功能快速迭代与跨平台兼容性补强并行的阶段。

## 2. 版本发布
无新版本发布。目前项目仍处于近期 v0.16.0 之后的迭代周期，主要修复工作集中在 main 分支，等待下一次版本打包。

## 3. 项目进展
今日共有 3 个关键 PR 被合并/关闭，另有多个高价值功能 PR 待处理，显著推进了桌面端的能力边界：

*   **[MERGED] 模型缓存刷新机制**：PR #48691 为桌面端增加了 "Refresh Models" 控制，解决了临时模型（如免费层）在缓存过期后消失的问题，提升了模型选择的实时性。
*   **[MERGED] Provider 错误信息容错**：PR #48697 与 PR #48783 修复了当 Provider 返回结构化错误对象时的解析崩溃问题，增强了对接 HuggingFace 等异构后端的鲁棒性。
*   **[OPEN] 桌面端 IDE 化演进**：PR #48781 提交了完整的 Git 支持（分支、Diff、Stash），PR #48821 引入了类 Cursor 的 "Plan Mode"，PR #48813 实现了 Agent 编辑文件的 Diff Review 功能。这表明 Hermes 正从单纯的 CLI 助手向集成开发环境转型。
*   **[OPEN] 跨平台修复**：PR #48830 和 PR #48827 分别针对 Windows 平台的 Gateway 重启逻辑和守护进程进行了修复，试图解决 Windows 环境下的服务稳定性痛点。

## 4. 社区热点
今日社区讨论焦点集中在用户体验改进与复杂架构实践：

*   **[Issue #40166]** **桌面端字体/缩放控制缺失**：作为今日评论数最高的 Issue，用户强烈呼吁在 macOS 桌面端支持字体缩放。这反映了目前 UI 层对基础无障碍功能支持的不足。
*   **[Issue #34592]** **双角色编排实践分享**：用户分享了基于 Hermes 搭建 Doer/Reviewer 架构的经验，并提出了对 Hindsight 共享记忆机制的改进建议。这显示了高级用户正在将 Hermes 用于复杂的工程化流水线，对框架的扩展性要求较高。
*   **[Issue #41625]** **TUI 模式 MCP 工具丢失**：多个用户反馈 MCP 工具在 TUI 会话中无法调用的问题，引发了关于工具注册生命周期的讨论。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，部分已有修复方案：

*   **[P1] SQLite 兼容性崩溃 (已修复)**：Issue #47002 报告 v0.16.0 在缺少 trigram tokenizer 的 SQLite 构建上崩溃，目前已关闭，推测已在 main 分支修复。
*   **[P1] macOS 安装脚本 PEP 668 错误**：Issue #48721 指出 `hermes update` 在 macOS Homebrew Python 环境下因 PEP 668 限制而失败，这是阻碍新用户安装的严重问题，目前尚未有修复 PR 合并。
*   **[P2] MCP 工具在 TUI 模式下不可用**：Issue #41625 指出工具虽被发现但未注册给 Agent，导致 TUI 用户无法使用外部工具，影响核心功能。
*   **[P2] Context Compression 导致 Goal 丢失**：Issue #33618 揭示了长期记忆机制的 Bug，压缩上下文后 Session ID 轮换导致 `/goal` 状态丢失，影响长期任务的连续性。
*   **[P2] Windows Gateway 脆弱性**：Issue #48820 详细列举了 Windows 消息网关的三个缺陷（无看门狗、环境变量覆盖失效、代理配置错误），PR #48827 已提出修复方案。

## 6. 功能请求与路线图信号
*   **Windows 原生支持**：Issue #48716 提出无需 Docker/WSL2 的原生 Windows 运行方案，结合今日多个 Windows 相关修复 PR，**强化 Windows 平台支持**显然已提上日程。
*   **多 Agent 编排原语**：Issue #48011 提议引入 "Mission/Project" 原语作为跨会话的事实来源，Issue #18420 则呼吁多 Agent 编排管道。结合社区热议的双角色实践，**多 Agent 协作与持久化项目管理**将是下一阶段的重要特性。
*   **Web 工具增强**：Issue #31621 请求为 Gemini 增加 Google Grounding 支持，反映了用户对高质量搜索工具集成的需求。

## 7. 用户反馈摘要
*   **安装门槛高**：Windows 和 macOS 用户均反馈遇到环境依赖问题（PEP 668、缺少 trigram），表明 `hermes update` 和安装脚本对系统环境的适配仍需打磨。
*   **UI 细节缺失**：桌面端缺乏基础的字体缩放控制（#40166），通知点击无法跳转到正确会话（#48808），影响了日常使用的流畅度。
*   **本地模型集成痛点**：Ollama 用户反馈 Web 工具集需手动指定才加载（#48083），Gemma 模型出现非标准错误导致崩溃，说明对本地/开源模型的后端适配仍需优化。

## 8. 待处理积压
*   **[Issue #33618] Goal 状态持久化失效**：该 P2 级 Bug 已存在一段时间，涉及核心记忆机制，需尽快修复。
*   **[Issue #41625] TUI MCP 工具注册失效**：作为核心功能，TUI 模式下工具不可用的问题需要优先响应。
*   **[PR #48830] Windows Gateway 重启修复**：该 PR 解决了关键的 Windows 服务稳定性问题，建议尽快 Review 合并。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-19)

## 1. 今日速览
PicoClaw 项目今日保持高度活跃，开发重心主要集中在**依赖库更新**与**关键 Bug 修复**。过去 24 小时内共有 14 条 PR 更新，其中 7 条已顺利合并，显示出维护者对项目健康度的高效维护。发布了最新的 `v0.3.0-nightly` 自动构建版本，为下一阶段正式版迭代做准备。社区方面，用户反馈了关于异步子代理消息重复的严重体验问题，且有一个关于 Web 搜索工具配置的关键 Bug 已得到修复并关闭。整体来看，项目处于稳步迭代中，基础设施与安全性同步加强。

## 2. 版本发布
- **版本号**: `nightly: Nightly Build`
- **Tag**: `v0.3.0-nightly.20260619.287853ab`
- **说明**: 这是一个自动化构建版本，可能存在不稳定性。
- **变更范围**: 对比 `v0.3.0` 与 `main` 分支的 [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)，包含了今日合并的依赖升级与 Bug 修复代码。
- **注意事项**: 该版本主要用于测试目的，生产环境部署需谨慎评估稳定性。

## 3. 项目进展
今日共有 **7 个 PR 成功合并/关闭**，显著提升了项目的依赖版本与稳定性：

1.  **核心修复**:
    *   **PR #3141** [已合并]: 修复了 `web_search` 工具在使用 Brave API 时静默失败的问题。增加了诊断日志，解决了后端返回空结果时的“静默”现象，提升了调试友好度。
    *   **PR #3143** [待合并]: 修复了 `web_fetch` 中的 SSRF 防护绕过漏洞。针对 ISATAP IPv6 字面量中嵌入私有 IPv4 地址的问题进行了阻断，增强了系统安全性。
    *   **PR #3107** [已关闭]: 合并了 GitHub Copilot SDK 的升级（v0.2.0 -> v1.0.1），这是 AI 代理核心能力的重大版本跨越。

2.  **依赖维护**:
    *   大批量合并了 Dependabot 提交的依赖升级，包括：
        *   `actions/checkout` v6 -> v7 (CI/CD 基础设施)
        *   `golang.org/x/term`, `golang.org/x/sys` (Go 运行时环境)
        *   `Azure SDK` 与 `Anthropic SDK` 的版本更新，确保了 AI 模型调用接口的兼容性。

## 4. 社区热点
今日社区讨论焦点集中在异步代理行为与工具调用的稳定性上：

-   **Issue #3094** [[链接](https://github.com/sipeed/picoclaw/issues/3094)]
    *   **主题**: `[Bug] 异步子代理任务完成时导致重复消息`
    *   **热度**: 👍 0, 评论 2 条，标签 `[stale]`
    *   **分析**: 用户在使用 `spawn` 工具时，遭遇消息轰炸（原始结果 + 汇总结果）。这反映了用户对**异步任务结果呈现**有较高的格式化要求，不希望看到冗余的中间过程。该问题目前处于 Open 状态，需开发者关注。

-   **Issue #3125** [[链接](https://github.com/sipeed/picoclaw/issues/3125)]
    *   **主题**: `[BUG] web_search tool fails silently`
    *   **状态**: 已关闭
    *   **分析**: 用户反馈架构更新后 API Key 迁移导致工具失效。该问题的迅速关闭表明维护团队对配置变更引起的问题响应非常及时（关联 PR #3141）。

## 5. Bug 与稳定性
今日报告的 Bug 及修复情况如下，按严重程度排序：

1.  **[高危] SSRF 防护绕过风险**
    *   **状态**: 待合并 (PR #3143)
    *   **详情**: 修复了 `web_fetch` 中 ISATAP IPv6 字面量解析可能导致的 SSRF 防护绕过。
    *   **影响**: 可能允许攻击者通过特殊构造的 IPv6 地址访问内部服务。

2.  **[中等] 异步子代理消息重复**
    *   **状态**: Open (Issue #3094)
    *   **详情**: `ForUser` 字段被双重使用，导致飞书/Telegram 推送重复消息。
    *   **影响**: 严重干扰用户阅读体验，造成信息冗余。暂无关联修复 PR。

3.  **[已修复] Web 搜索工具静默失败**
    *   **状态**: Closed (Issue #3125, PR #3141)
    *   **详情**: `.security.yml` 迁移导致 Brave API 调用返回空结果且无报错。
    *   **修复方案**: 增加诊断日志，已合并。

## 6. 功能请求与路线图信号
-   **多模态/模型支持扩展**: PR #3149 (Anthropic SDK) 和 PR #3145/3107 (GitHub Copilot SDK) 的大版本更新暗示项目正在积极适配最新的 AI 模型能力，特别是 Copilot SDK 从 v0.2 跃升至 v1.0，预示着**集成 GitHub Copilot** 将成为下一版本的核心功能卖点。
-   **前端现代化**: 虽然今日未合并，但堆积的 PR (Vite 8.x, Shadcn 4.11, Typescript-eslint 更新) 显示 Web 前端正在进行大规模重构，预示未来 UI 体验将有显著提升。

## 7. 用户反馈摘要
-   **痛点**: 异步任务的输出管理。用户明确表示不希望看到“粗糙、无排版”的原始推送，更倾向于经过主代理整理后的结果。这提示开发者需要优化消息推送逻辑，区分“调试日志”与“用户可见消息”。
-   **痛点**: 配置迁移兼容性。架构更新导致 `.security.yml` 中的 API Key 未被正确读取，引发了静默故障。建议增加启动时的配置校验或错误提示，而非仅在运行时返回空结果。

## 8. 待处理积压
-   **Issue #3094**: 标记为 `[stale]`，涉及核心功能 `spawn` 的消息逻辑，影响用户体验，建议优先排期修复。
-   **前端依赖升级积压**: 存在 5 个关于前端依赖的 PR 处于 Open 状态且标记为 `[stale]`，涉及 Vite、ESLint 和 Shadcn。建议维护者评估并尽快合并以消除技术债务。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-19)

## 1. 今日速览
NanoClaw 项目今日保持高度活跃，核心开发重心明显向**安全性增强**与**基础设施扩展**倾斜。过去 24 小时内，项目处理了 5 条 Issue 和 21 条 PR，虽然未发布新版本，但代码库合并了包括智能体权限治理、运行时环境支持在内的关键更新。社区对容器化替代方案的诉求强烈，同时项目方针对近期暴露的权限提升漏洞迅速响应，相关修复 PR 已提交待合并。整体来看，项目正处于功能迭代与安全性加固的关键阶段。

## 2. 版本发布
*   **无新版本发布**。上一个版本应为 v2.1.18（依据 PR #2808 描述推断），目前主分支仍在积累下一个版本的更新内容。

## 3. 项目进展
今日共有 6 个 PR 合并/关闭，主要推进了以下方面：
*   **智能体治理与权限控制**：PR #2793 已关闭（推测已合并），引入了智能体间通信的可选审批机制，允许为特定连接设置消息关卡，增强了多智能体系统的安全性。
*   **运行时环境扩展**：PR #2809（待合并）提出了对 Apple Container 运行时的支持，并引入远程 OneCLI 网关，预示着项目即将摆脱单一 Docker 依赖，这对 macOS 用户是重大利好。
*   **安全修复**：PR #2818 和 #2814 针对文件读取权限和群组创建校验进行了严格限制，修复了潜在的路径遍历和权限逃逸风险。
*   **用户体验优化**：PR #2806 增加了韩语 README，PR #2811 修复了环境变量选择 Provider 的问题，PR #2816 解决了 Discord 长消息截断问题。

## 4. 社区热点
今日讨论热度最高的 Issue 集中在容器化部署与跨平台支持：
*   **[Issue #957] 支持 Podman 替代 Docker**（评论 10 条 | 👍 7）：该 Issue 于今日关闭。用户呼吁在文档中明确支持 Podman，理由包括 Docker Desktop 的收费问题及 macOS/Linux 上的权限模型差异。这反映了用户对轻量级、无根容器方案的强烈需求。
    *   链接: [nanocoai/nanoclaw Issue #957](https://github.com/nanocoai/nanoclaw/issues/957)
*   **[Issue #29] 新增 Signal 消息渠道**（评论 7 条 | 👍 4）：该功能请求于今日关闭，用户希望像 Telegram/Discord 一样集成 Signal，关注点在于隐私保护。
    *   链接: [nanocoai/nanoclaw Issue #29](https://github.com/nanocoai/nanoclaw/issues/29)

## 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，安全漏洞尤其值得关注：
*   **[严重] 权限提升漏洞 (CWE-269)**：Issue #2807 披露非所有者成员可在 Owner 初始化的群组中创建持久化子智能体，可能导致资源滥用或未授权操作。
    *   状态：**待修复**。相关修复 PR #2818（限制文件读取范围）和 #2814（校验群组文件夹）已提交，需尽快合并。
    *   链接: [nanocoai/nanoclaw Issue #2807](https://github.com/nanocoai/nanoclaw/issues/2807)
*   **[中等] Container Runner 热更新失效**：Issue #2784 指出 `container-runner` 的过期检查仅监控 `index.ts`，导致 `ipc-mcp-stdio.ts` 的修改无法触发会话源同步。
    *   状态：**Open**。
    *   链接: [nanocoai/nanoclaw Issue #2784](https://github.com/nanocoai/nanoclaw/issues/2784)
*   **[低] iMessage 初始化失败**：PR #2792 修复了全新安装时因缺少 `src/channels` 目录导致的写入失败问题。

## 6. 功能请求与路线图信号
*   **容器运行时多元化**：Issue #957 (Podman) 的讨论与 PR #2809 (Apple Container) 的提交，清晰指向项目正在构建多运行时兼容层，预计未来将支持 Docker、Podman 及 Apple Container 的无缝切换。
*   **CLI 仪表盘**：PR #2795 提议添加 `/add-clidash` 技能，提供只读的 CLI 派生仪表盘，表明项目正致力于提升本地监控与运维体验。
*   **迁移与兼容性**：Issue #2632 仍在讨论 v1 到 v2 的 Telegram swarm 迁移路径，提示 v2 架构变更较大，文档迁移指南可能滞后。

## 7. 用户反馈摘要
*   **部署痛点**：用户在 macOS/Linux 环境下对 Docker 的依赖感到困扰（收费、权限问题），倾向于 Podman 等替代方案。
*   **架构困惑**：v1 到 v2 的迁移存在断层，特别是针对 Telegram Swarm 这类高级功能，用户难以确定当前的兼容性状态（Issue #2632）。
*   **安全敏感**：社区对权限边界的界定非常敏感，Issue #2807 的提出显示用户正在深度测试多租户场景下的隔离能力。

## 8. 待处理积压
*   **关键安全 PR 需关注**：PR #2818 (`fix(security)`) 和 #2814 (`fix(security)`) 处于 Open 状态，建议维护者优先 Review 并合并，以修补权限校验漏洞。
    *   链接: [PR #2818](https://github.com/nanocoai/nanoclaw/pull/2818) | [PR #2814](https://github.com/nanocoai/nanoclaw/pull/2814)
*   **长期未决的迁移咨询**：Issue #2632（Telegram agent-swarm 迁移）自 5 月提出至今未彻底解决，建议在文档中补充 v2 架构的迁移说明。
    *   链接: [nanocoai/nanoclaw Issue #2632](https://github.com/nanocoai/nanoclaw/issues/2632)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-06-19)

## 1. 今日速览
NullClaw 项目今日保持较高的社区活跃度，虽然无新版本发布，但代码贡献与 Issues 讨论均呈现明显增长态势。过去 24 小时内新增 4 个高质量的 Pull Request，主要聚焦于流式工具调用修复及文档补充，显示项目正在向更完善的协议兼容性迈进。Issues 板块讨论热烈，涵盖了从嵌入式硬件适配到多智能体架构等多元话题。整体来看，项目处于功能迭代与生态完善的活跃开发期。

## 2. 版本发布
无。

## 3. 项目进展
今日无合并或关闭的 PR。但新增的 4 个待合并 PR 显示了重要的开发动向：

*   **流式调用能力修复**：PR [#964](https://github.com/nullclaw/nullclaw/pull/964) 与 [#965](https://github.com/nullclaw/nullclaw/pull/965) 旨在解决流式模式下的原生工具调用问题。作者指出当前代码在流式传输时错误地禁用了原生工具，这阻碍了复杂 Agent 的执行。这两个 PR 若合并，将显著提升 NullClaw 在流式场景下的功能完整性与稳定性。
*   **文档与生态完善**：PR [#963](https://github.com/nullclaw/nullclaw/pull/963) 新增了个人微信二维码登录的文档，PR [#962](https://github.com/nullclaw/nullclaw/pull/962) 补充了原生 Anthropic 提供商的配置说明。这表明项目正在积极响应用户对多样化登录方式和模型提供商的配置需求。

## 4. 社区热点
今日讨论最活跃的话题集中在跨平台支持与多智能体架构：

*   **嵌入式硬件支持**：Issue [#50](https://github.com/nullclaw/nullclaw/pull/50) 讨论了在 ESP32 上运行 NullClaw 的可能性。该贴拥有 4 条评论，显示了边缘计算社区对轻量级 AI Agent 框架的强烈兴趣。
*   **多智能体架构**：Issue [#190](https://github.com/nullclaw/nullclaw/pull/190) 探讨了子智能体的生成与跨 Provider 通信能力，反映了高级用户构建复杂分布式 AI 系统的诉求。
*   **集成需求**：Issue [#817](https://github.com/nullclaw/nullclaw/pull/817) 关于微信二维码登录的咨询已得到回应，并催生了 PR #963 的文档更新，体现了社区驱动的功能补全闭环。

## 5. Bug 与稳定性
今日未收到新的崩溃报告，但发现了影响功能完整性的逻辑缺陷：

*   **流式工具调用失效 (严重)**：PR [#964](https://github.com/nullclaw/nullclaw/pull/964) 揭露了核心模块 `agent/root.zig` 中存在 Bug——当启用流式传输时，原生工具调用被意外禁用。这会导致依赖流式工具的 Agent 无法正常工作。
    *   *修复状态*：已有 PR #964 和 #965 提交修复代码，等待合并。
*   **A2A 协议性能瓶颈**：Issue [#913](https://github.com/nullclaw/nullclaw/pull/913) 报告了 `a2a` 协议实现比原生消息响应慢的问题，需关注后续是否有优化方案。

## 6. 功能请求与路线图信号
根据 Issues 与 PRs 的交叉分析，以下功能极有可能在近期纳入主线：

*   **Anthropic 原生支持**：PR [#962](https://github.com/nullclaw/nullclaw/pull/962) 涉及原生 Anthropic 支持，配合 OAuth 自动检测，表明项目正试图减少对中间代理的依赖，直接集成头部模型服务商。
*   **微信生态集成**：Issue #817 的提出与 PR #963 的提交，标志着项目正在打通微信个人号登录渠道，这将极大拓展 NullClaw 在即时通讯场景下的应用潜力。
*   **流式工具调用标准化**：PR #965 提出了对 SSE 解析器的结构化流式工具调用支持，这暗示项目未来将更严格地遵循 OpenAI 兼容协议的高级特性。

## 7. 用户反馈摘要
*   **痛点**：用户在使用流式响应时可能遭遇工具调用失败（#964 提及的 Bug）；A2A 协议存在性能损耗（#913）。
*   **场景需求**：用户希望 NullClaw 能跑在低功耗设备如 ESP32 上（#50），用于 IoT 场景；同时对将 AI Agent 接入个人微信有明确需求（#817）。
*   **正面反馈**：社区贡献者提交的 PR 质量较高，且能及时响应 Issues 中提出的问题，文档更新迅速。

## 8. 待处理积压
*   **Issue [#50](https://github.com/nullclaw/nullclaw/pull/50) (Esp32 支持)**：该 Issue 创建于 2026-02-21，至今未有关闭迹象。考虑到嵌入式移植的技术难度，建议维护者明确表态是否支持或在 Roadmap 中标记为 "Help Wanted"。
*   **Issue [#190](https://github.com/nullclaw/nullclaw/pull/190) (Subagent spawn)**：创建于 3 月初，目前仅少量评论。作为架构级功能请求，需要维护者给予方向性指引，以免社区产生功能预期偏差。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-19)

## 1. 今日速览
IronClaw 项目今日保持极高的开发活跃度，共处理了 **24 条 Issues** 和 **42 条 PRs**，其中 PR 合并/关闭数达到 17 条，显示出团队正在高速推进功能迭代与缺陷修复。核心重点集中在 **Reborn 架构的完善**（包括 Projects 功能、Automations UX 重构及并发执行能力）与 **OAuth/认证流程的稳定性修复**。虽然无新版本发布，但多个关键 Feature PR（如 Projects 页面、Fire-once triggers）已合并，标志着项目在产品化进程中迈出了坚实一步。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 17 个 PR 被合并或关闭，重点推进了以下领域：

*   **Reborn 核心功能构建**：
    *   **Projects 功能落地**：合并了 PR #5018 (WebChat v2 endpoints) 和 PR #5019 (前端页面实现)，标志着 Projects 管理功能已初步集成，支持 CRUD 及成员管理，完善了多租户场景下的项目隔离。
    *   **Automations 增强**：合并了 PR #5065，引入了 **Fire-once (单次触发)** 调度策略，完善了触发器模型。同时 PR #5084 正在重新设计 Automations 页面 UI，旨在提升定时任务的可读性。
    *   **并发性能提升**：PR #5085 提出了基于 TurnRunScheduler 的并发 Turn 执行方案，突破了之前串行执行的瓶颈，为高并发场景打下基础。

*   **稳定性与体验修复**：
    *   **OAuth 体验优化**：合并了 PR #5067，修复了当授权 URL 不可用时 OAuth 认证卡片错误隐藏的问题，确保认证流程的可视化引导不再中断。
    *   **WebUI 细节打磨**：合并了 PR #5055，优化了自动化运行错误的展示形式（由红色错误改为黄色“需关注”），降低了用户的焦虑感；PR #5082 修复了审批模态框中长命令难以查看的问题。

*   **基础设施与架构**：
    *   PR #5072 推进了 Slack 作为通用 ingress 的集成工作，旨在统一消息入口架构。
    *   PR #4989 合并，实现了 Engine V2 LLM 使用量的持久化记录，完善了成本归因与监控能力。

## 4. 社区热点
今日社区讨论最活跃的 Issue 是 **#4761 [bug] [Reborn] Agent stops after repeated tool failures instead of recovering**。
*   **链接**: [nearai/ironclaw Issue #4761](https://github.com/nearai/ironclaw/issues/4761)
*   **分析**: 该问题引发了 5 条评论讨论。用户反馈在多次工具调用失败后，Agent 直接停止运行而不是尝试恢复，这影响了复杂任务的自动化执行稳定性。随着该 Issue 被关闭，社区期待看到更健壮的错误恢复机制。

此外，**#4879 IronClaw Reborn Local Dogfooding Findings** 也是讨论焦点，项目成员正在通过实际使用收集本地启动、配置和首次运行的问题，显示出团队对 Onboarding 体验的重视。

## 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，部分已修复：

*   **高危 (High Risk)**:
    *   **#5071 [OPEN] [Reborn] Proactively refresh Google OAuth tokens before expiry**：当前 Google OAuth Token 有效期短（约1小时），用户需频繁重新认证。该问题严重影响 GSuite 扩展的体验，目前尚无 Fix PR，需重点关注。
    *   **#4992 [OPEN] [Reborn] Local-dev SSO access mismatch can make Railway automations fail**：SSO 访问不匹配导致自动化任务在创建 Run/Thread 前失败，影响 Railway 部署实例的稳定性。

*   **中危 (Medium Risk)**:
    *   **#5078 [OPEN] Approval modal becomes difficult to review when displaying large tool commands**：审批弹窗被超长的 Shell 命令撑满，导致审核困难。已有 PR #5082 正在处理。
    *   **#5083 [OPEN] Triggers: active automations list scans unbounded completed-row prefix**：触发器列表查询性能问题，可能导致大量数据扫描。

*   **已修复**:
    *   **#5060 [CLOSED] GitHub analysis workflows may enter repeated approval loops**：修复了 GitHub 分析工作流陷入死循环的问题。
    *   **#4907 [CLOSED] Run may fail after successful Google OAuth**：解决了 OAuth 成功后 Run 未恢复执行的阻断性 Bug。

## 6. 功能请求与路线图信号
*   **Automations UX 重构**: Issue #5069 提出了 Automations 页面的 UX 重新设计需求，PR #5084 已响应此需求，预计近期合并，将带来更紧凑、易扫读的自动化管理界面。
*   **LLM Provider 兼容性**: Issue #1012 和 #1520 反映了阿里云 Qwen/Coding Plan 在 OpenAI 兼容模式下的报错问题（405 Method Not Allowed）。这表明用户对非 OpenAI 模型（特别是国产模型）的接入需求强烈，PR #5045 和 #5043 正尝试优化模型选择逻辑和错误反馈，有望在下一版本改善此体验。

## 7. 用户反馈摘要
*   **痛点：OAuth 流程繁琐**：用户 @sunglow666 和 @serrrfirat 在多个 Issue 中提到 Google OAuth Token 过期快、需重复认证的问题，严重影响了 Google Calendar 等扩展的连续使用体验。
*   **痛点：错误反馈不够友好**：Issue #4704 反映工具失败仅提示 "invalid_input" 而无具体错误详情，导致用户难以排查。Issue #5078 则反映了 UI 层面信息过载的问题。
*   **场景：本地开发与部署差异**：Issue #4992 暴露了本地开发环境与 Railway 云环境的 SSO 配置差异，导致云上自动化失效，提醒团队需注意环境一致性。

## 8. 待处理积压
*   **#1520 [OPEN] [scope: llm] qwen error** 和 **#1012 [OPEN] Alibaba Coding Plan error**：这两个 Issue 创建于 3 月，近期虽有活跃但尚未彻底解决，建议维护者优先跟进非标准 OpenAI Provider 的适配问题。
*   **#4108 [OPEN] Nightly E2E failed**：E2E 测试持续失败，虽然属于自动化任务，但可能掩盖了潜在的回归风险，建议排查。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-19)

## 1. 今日速览
LobsterAI 今日活跃度极高，正式发布了 **v2026.6.18** 版本，标志着项目在多模态交互和文档处理能力上迈出了重要一步。项目单日合并/关闭了 **14 个 PRs**，显示出研发团队高效的迭代节奏和强有力的代码审查机制。重点聚焦于 **实时语音交互的重构与优化** 以及 **Artifacts 文档分享能力的扩展**。虽然社区 Issue 互动量较少，但新提出的“AI Collaborator”构想极具前瞻性，暗示了项目向 Agent 平台化演进的潜在路线。

## 2. 版本发布
**Release: LobsterAI 2026.6.18**
- **更新亮点**：
    - **Artifacts 分享能力升级**：大幅扩展了文件分享支持类型，现已覆盖 Word, PPT, Excel, PDF, Markdown 和 Mermaid 格式，提升了办公场景下的文档流转效率。
    - **语音输入架构调整**：移除了旧有的“一次性上传”语音识别流程，全面转向 **实时 ASR (Automatic Speech Recognition)** 模式，旨在提供更流畅的流式对话体验。
- **破坏性变更 & 迁移注意**：
    - 根据 [PR #2160](https://github.com/netease-youdao/LobsterAI/pull/2160)，设置中的“语音输入模式”切换选项已被移除，系统默认且仅保留实时 ASR 模式。开发者需注意配置兼容性，移除对旧版 `voiceInput.recognitionMode` 的依赖。

## 3. 项目进展
今日共有 14 个 PR 合并入主分支，主要集中在功能增强与架构清理：
- **语音交互深度优化**：
    - 合并了 [PR #2148](https://github.com/netease-youdao/LobsterAI/pull/2148) 与 [PR #2163](https://github.com/netease-youdao/LobsterAI/pull/2163)，完成了实时 ASR 的功能实现与 UI 精细化调整（包括录音UI优化与配额处理）。
    - [PR #2160](https://github.com/netease-youdao/LobsterAI/pull/2160) 进行了大幅减法操作，删除了非实时的 ASR 逻辑，简化了代码链路。
    - [PR #2113](https://github.com/netease-youdao/LobsterAI/pull/2113) 修复了 macOS 下的麦克风权限申请问题，保障了语音功能的可用性。
- **Agent 能力建设**：
    - [PR #2143](https://github.com/netease-youdao/LobsterAI/pull/2143) 新增了 **Computer Use MVP** 功能，支持 Windows x64 平台的应用列表、启动及屏幕捕获等底层操作，为 AI 控制电脑打下基础。
- **Artifacts 功能扩展**：
    - [PR #2178](https://github.com/netease-youdao/LobsterAI/pull/2178) 实现了 Markdown 与 Mermaid 文件的独立分享与打包逻辑，补齐了技术文档分享的短板。

## 4. 社区热点
今日社区活跃度主要体现在新功能提案上：
- **[Issue #2180](https://github.com/netease-youdao/LobsterAI/issues/2180) [OPEN]**：用户 @woxinsj 提出了构建 "AI Collaborator" 表单的宏大构想，建议引入自然语言命令栏和任务调度控制台，以实现跨模型编排和项目级记忆。该提案与近期合并的 "Computer Use" 功能不谋而合，反映了用户希望从单一助手向多智能体协作平台跨越的强烈诉求。
- **[Issue #1422](https://github.com/netease-youdao/LobsterAI/issues/1422) [OPEN]**：关于 MCP 自定义页面长服务名显示异常的 UI 问题再次被标记活跃，虽未解决，但表明该体验问题仍存在于待办队列中。

## 5. Bug 与稳定性
今日修复了多个关键稳定性问题，未报告新的严重崩溃：
- **中等级别**：
    - **macOS 麦克风权限**：[PR #2113](https://github.com/netease-youdao/LobsterAI/pull/2113) 修复了 macOS 上麦克风权限元数据缺失导致的语音输入失败问题。
    - **竞态条件**：[PR #2155](https://github.com/netease-youdao/LobsterAI/pull/2155) 修复了实时 ASR 可能被重复启动的竞态逻辑，避免了潜在的内存泄漏或录音异常。
- **UI/UX 问题**：
    - [Issue #1422](https://github.com/netease-youdao/LobsterAI/issues/1422) 报告了删除弹框对长文本的适配问题，目前尚无修复 PR。

## 6. 功能请求与路线图信号
- **信号：向 Agent 平台演进**：
    - 今日合并的 [PR #2143](https://github.com/netease-youdao/LobsterAI/pull/2143) (Computer Use) 与 [Issue #2180](https://github.com/netease-youdao/LobsterAI/issues/2180) 提出的 "AI Collaborator" 形成呼应。虽然 Issue 刚刚提出，但结合代码库中已经出现的 `openclaw` 模块标签，可以判断项目正在稳步推进从 Chatbot 到 Agent 的底层能力建设。
- **信号：语音交互实时化**：
    - 彻底移除上传式 ASR 并转向实时流式识别，表明项目将更加注重对话的低延迟体验，这通常是对标高性能语音助手的重要步骤。

## 7. 用户反馈摘要
- **痛点**：在 MCP 配置场景下，服务名称过长导致 UI 显示截断，影响配置管理体验（来源：[Issue #1422](https://github.com/netease-youdao/LobsterAI/issues/1422)）。
- **期待**：用户 @woxinsj 详细描述了对“非精英程序员”友好的 AI 协作平台需求，希望实现跨模型任务分发，这代表了核心开发者群体对工具链升级的期待（来源：[Issue #2180](https://github.com/netease-youdao/LobsterAI/issues/2180)）。

## 8. 待处理积压
- **依赖更新积压**：[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 是一个由 Dependabot 发起的 Electron 依赖升级 PR（从 40.2.1 升至 42.4.0），已开启近 3 个月仍未合并。考虑到 Electron 大版本跨度较大，建议维护者尽快评估兼容性风险并推进合并，以避免技术债累积。
- **UI 细节问题**：[Issue #1422](https://github.com/netease-youdao/LobsterAI/issues/1422) 提出的 UI 显示问题已存在两个月，建议纳入近期版本迭代计划。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 (2026-06-19)

## 1. 今日速览
Moltis 项目今日整体活跃度处于**低水平**，过去 24 小时内无代码合并、无新版本发布，仅有一起新增 Bug 反馈。项目当前处于平稳维护期，开发节奏较为平缓。社区互动略显沉寂，无新增 PR 或 Issue 评论互动。今日唯一的动态集中在一个关于会话管理的功能性缺陷报告上，建议维护团队关注此问题的复现与修复。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
过去 24 小时内，项目未产生任何 Pull Request 更新（待合并、已合并或已关闭均为 0）。代码库今日无变更记录，功能迭代与修复工作暂无明显推进。

## 4. 社区热点
今日社区唯一动态为新增的 Bug 报告，暂无其他讨论热烈或反应强烈的议题。

- **Issue #1132 [Bug]: "main" session can't be deleted/archived**
  - **链接**: [moltis-org/moltis Issue #1132](https://github.com/moltis-org/moltis/issues/1132)
  - **分析**: 该 Issue 由用户 @vvuk 提交，指出系统默认的 "main" 会话无法被删除或归档。虽然目前评论数为 0，但该问题触及了用户数据管理的核心痛点——即用户对自身会话数据的全生命周期控制权。如果无法删除或归档主会话，可能导致数据冗余或隐私顾虑，值得开发团队关注。

## 5. Bug 与稳定性
今日报告 Bug 共 1 例，目前尚未有修复 PR 提交。

- **严重程度：中等**
  - **问题描述**: 系统 "main" 会话无法删除或归档。
  - **详情链接**: [Issue #1132](https://github.com/moltis-org/moltis/issues/1132)
  - **影响范围**: 影响用户对会话历史的管理能力，属于功能逻辑层面的缺陷，虽未造成系统崩溃，但阻碍了正常的数据清理流程。
  - **修复状态**: 待确认，暂无关联 Fix PR。

## 6. 功能请求与路线图信号
今日无明确的新功能请求（Feature Request）。但从 Issue #1132 的反馈来看，**会话管理的灵活性**是用户关注的重点。用户期望对所有会话（包括默认/主会话）拥有同等的操作权限（删除/归档）。这暗示了未来版本中，项目可能需要增强会话管理的健壮性，解除对特定默认会话的硬编码限制。

## 7. 用户反馈摘要
根据今日唯一的 Issue 反馈，用户痛点如下：
- **数据控制受限**: 用户 @vvuk 反馈无法对 "main" 会话执行删除或归档操作。这反映出用户在使用过程中，对于系统默认生成的会话有清理需求，但被系统逻辑阻断。
- **体验期望**: 用户期望能够像管理其他普通会话一样管理主会话，保持操作逻辑的一致性。

## 8. 待处理积压
- **新增待处理**: Issue #1132 目前处于 [OPEN] 状态且无任何评论响应。作为一个刚提交的 Bug 报告，它目前处于积压队列的顶端，急需维护者进行确认和反馈。建议维护者关注该问题是否涉及数据库外键约束或前端逻辑限制。

---
*数据来源: GitHub @ moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-06-19)

## 1. 今日速览
CoPaw (仓库: QwenPaw) 今日维护活跃度较高，项目处于快速迭代修复期。过去24小时内，Issues 闭合率表现强劲（关闭 29 条 vs 新增/活跃 14 条），表明团队在积极处理反馈积压。发布了修正版 `v1.1.12.post1`，主要针对脚本参数和内存数据库探测进行了修复。社区关注点高度集中在**上下文压缩** 导致的进程冻结及数据丢失问题上，同时针对 Linux 沙箱隔离、上下文管理策略等核心架构的 PR 提交活跃，显示出项目正在增强底层稳定性与扩展性。

## 2. 版本发布
- **版本号**: `v1.1.12.post1`
- **更新内容**:
  - **脚本修复**: 修正了 prerelease 参数的扩展问题 (`fix(scripts)`).
  - **内存修复**: 将 ChromaDB 的探测集合重命名为 `'probe-test'`，以避免与现有数据冲突 (`fix(memory)`).
- **影响评估**: 属于修补版本，无破坏性变更，建议所有 v1.1.12 用户升级。

## 3. 项目进展
今日共有 13 个 PR 合并/关闭，显著推进了系统稳定性与功能完善：
- **Windows 环境兼容性增强**: 合并 PR #5291 和 #5298，显式配置了 SSL 证书并修复了 Windows 构建验证中的 SSL 错误，解决了 `uv` 安装方式及打包环境下的网络请求失败问题。
- **上下文显示修复**: 合并 PR #5303，修复了 Web 端对话窗口上下文占用显示未使用当前模型 `max_input_length` 的问题，提升了监控数据的准确性。
- **MCP 资源优化**: 合并 PR #4849，引入 `SharedMCPPool`，实现了跨 Agent 复用 MCP Server 进程，显著降低了多 Agent 场景下的资源消耗。
- **插件系统完善**: 合并 PR #5008 和 #4794，增加了卸载钩子 和 Skill Provider API，修复了验证器导入问题，提升了插件生态的健壮性。

## 4. 社区热点
今日讨论最活跃的议题集中在核心功能的稳定性上：
- **[#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) [Bug] 子Agent触发上下文压缩时QwenPaw进程冻结无响应**: 
  - **热度**: 16 评论。
  - **分析**: 这是目前社区反馈最强烈的问题。当子 Agent 触发上下文压缩时，主进程直接冻结，需重启恢复。这反映了在多 Agent 协作场景下，内存管理机制存在严重的并发或死锁隐患。
- **[#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) [Bug]: 上下文压缩保留缺少按条数保留**: 
  - **热度**: 8 评论。
  - **分析**: 用户抱怨压缩逻辑过于粗暴，导致关键人设信息丢失，任务中断。诉求是增加更细粒度的保留策略（如按条数保留），而非单纯的 Token 阈值。
- **[#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) [Feature]: Integrate Headroom**: 
  - **热度**: 7 评论。
  - **分析**: 社区对引入可逆压缩层以降低 Token 消耗表现出浓厚兴趣，已有对应的实现 PR (#5244) 提交，互动频繁。

## 5. Bug 与稳定性
按严重程度排列今日报告的 Bug：
1.  **[严重] 进程冻结**: [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) - 子 Agent 上下文压缩导致进程无响应。
    *   *状态*: Open，暂无关联 Fix PR 合并，但 PR #5287 正在尝试修复 summary 超长导致的崩溃，可能相关。
2.  **[严重] 数据丢失**: [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) - 上下文压缩导致关键信息被清空。
3.  **[中等] 配置持久化**: [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) - 每次升级后，被禁用的内置技能重置为启用。
4.  **[中等] 渠道路由错误**: [#5264](https://github.com/agentscope-ai/QwenPaw/issues/5264) - 飞书群聊消息被错误路由到私聊窗口。
5.  **[已修复] 附件下载**: [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) - docx/pdf 下载报 404 错误（已在近期版本修复）。

## 6. 功能请求与路线图信号
- **Headroom 压缩集成**: Issue [#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) 提出集成 Headroom SDK 以减少 60-95% Token 消耗。当前已有 PR [#5244](https://github.com/agentscope-ai/QwenPaw/pull/5244) 实现了 `HeadroomContextManager`，预计很快合并。
- **沙箱隔离**: PR [#5310](https://github.com/agentscope-ai/QwenPaw/pull/5310) 提议在 Linux 下引入 Bubblewrap 沙箱，利用 mount namespace 进行隔离，表明项目正致力于提升本地代码执行的安全性。
- **上下文策略扩展**: PR [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) 提出了 `scroll` 上下文管理策略，引入基于检索的历史记录管理，作为原生压缩的替代方案。

## 7. 用户反馈摘要
- **上下文管理痛点**: 多数用户反馈当前的上下文压缩机制不稳定，容易出现“越压缩越丢信息”甚至“进程卡死”的情况，严重影响复杂任务的连续性。
- **升级体验**: 用户对配置（如禁用技能）在升级后无法保留表示不满，希望改进迁移脚本或持久化机制。
- **Windows 稳定性**: 近期关于 Windows 下 SSL 证书错误、文件路径处理的反馈较多，随着今日相关 PR 的合并，Windows 端的稳定性有望提升。

## 8. 待处理积压
- **Issue #5218 (进程冻结)**: 目前处于 Open 状态，涉及核心稳定性，建议维护者优先排查。
- **Issue #5171 (压缩逻辑)**: 涉及 Agent 记忆机制的核心逻辑，目前尚未有官方回复明确解决方案。
- **Issue #3940 (视觉模型路由)**: 请求支持为图片输入单独路由视觉模型，此 Issue 存续时间较长（创建于 2026-04-29），建议纳入后续规划。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-06-19)

**项目地址**：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. 今日速览
EasyClaw 项目今日呈现出“高强度开发、低社区噪音”的典型特征。过去 24 小时内，虽然 Issues 与 PRs 的公开互动数据挂零，但项目连续发布了 v1.8.36、v1.8.37、v1.8.38 三个版本，显示出维护者正在进行高频迭代与功能交付。更新重心主要集中在商业化变现（联盟客管理）与客服系统健壮性上，项目处于快速功能完善期，健康度活跃。

### 2. 版本发布
今日项目连续发布 3 个版本，更新密度极高，建议用户尽快升级以获取稳定性修复。

- **[v1.8.38: RivonClaw v1.8.38](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.38)**
    - **主要更新**：
        - **商业化功能**：新增联盟客管理及审批策略管理 UI，完善商业化变现工具链。
        - **订单提醒**：引入确定性的未付款订单提醒设置，支持模板占位符与本地化占位符芯片，提升了营销触达的精准度。
        - **体验优化**：细化了联盟预测判断标签，优化了未付款触达设置 UI 及店铺工作区模态框尺寸。

- **[v1.8.37: RivonClaw v1.8.37](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.37)**
    - **主要更新**：
        - **架构调整**：客服结案指令改为后端控制，结案分发路由通过结束会话工具进行，提升了系统安全性。
        - **工作流优化**：改进了联盟客产品适配工作流及样本/产品上下文解析能力。
        - **国际化**：新增 BI 工具国际化标签，优化桌面端工具展示。

- **[v1.8.36: RivonClaw v1.8.36](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.36)**
    - **稳定性修复（重要）**：
        - 加固了客服会话刷新机制、延迟结案分发及重复快照中断逻辑。
        - 优化了错误处理流程，减少了客服调度令牌的变动频率。
    - **建议**：涉及客服模块的核心稳定性修复，建议所有旧版本用户立即升级。

### 3. 项目进展
尽管今日无公开的 PR 合并记录，但从版本发布日志可以推断，项目在以下领域取得了实质性突破：
- **商业化闭环**：通过连续三个版本的迭代，初步完成了联盟客（Affiliate）从产品适配、预测判断到审批管理的全流程 UI 建设。
- **客服系统重构**：针对客服会话的“结案-分发-快照”链路进行了深度加固，解决了令牌变动和错误处理等潜在痛点，系统鲁棒性显著提升。
- 项目整体正从基础功能建设向精细化运营工具（如 BI 国际化、订单提醒模板）方向演进。

### 4. 社区热点
- 今日无活跃的 Issues 或 Pull Requests 讨论，社区互动暂时处于静默状态。

### 5. Bug 与稳定性
- **今日新报错**：无用户提交的新 Bug 报告。
- **已修复/优化问题**：
    - **客服会话稳定性**（v1.8.36）：修复了会话刷新、快照重复及分发令牌抖动等问题，属于**High**级别的稳定性修复。
    - 目前暂无待处理的 Fix PR，建议关注升级后客服模块的实际运行表现。

### 6. 功能请求与路线图信号
- 今日无新增功能请求。
- **路线图信号**：从 v1.8.38 的更新内容来看，项目方正大力布局 **Creator Economy（创作者经济）** 相关功能。联盟客管理 UI 与审批策略的上线，预示着平台级的多方分润与推广体系将成为下一阶段的核心卖点。

### 7. 用户反馈摘要
- 由于今日无 Issue 评论，暂无具体的用户反馈可供提取。但从近期密集的“未付款订单提醒”功能更新来看，运营侧用户对于营销自动化工具的需求得到了积极响应。

### 8. 待处理积压
- 当前公开的 Issue 与 PR 积压量为 0。
- **分析师建议**：鉴于今日发布了包含重要稳定性修复的 v1.8.36 版本，建议维护者在 Release Notes 或 Readme 中醒目标注升级指引，以防旧版本用户遭遇已知的客服调度问题。

---
*数据来源：GitHub EasyClaw Repository Data (2026-06-19)*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*