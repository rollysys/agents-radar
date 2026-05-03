# OpenClaw 生态日报 2026-05-03

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-03 03:32 UTC

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

# OpenClaw 项目动态日报 (2026-05-03)

## 1. 今日速览

OpenClaw 项目今日活跃度极高，呈现出“高频发布与高强度反馈并存”的态势。过去24小时内，项目发布了 **v2026.5.2** 正式版及两个 Beta 版本，核心聚焦于外部插件架构的重构与性能优化。社区互动火爆，Issues 更新量达 500 条，PR 更新量同样达到 500 条，其中 63 个 PR 已合并，显示核心团队正在全速推进功能迭代。然而，新版本的发布也引发了显著的回归问题，尤其是 Windows 环境下的网络性能降级与部分插件的兼容性故障，导致 Bug 报告激增。社区对新插件系统的潜力表示期待，但对稳定性表达了强烈担忧。

## 2. 版本发布

今日连发三个版本，核心变更集中在插件生态与网关性能：

- **v2026.5.2 (Stable)**
  - **核心变更**：重构外部插件安装流程，全面转向 npm-first 策略，新增诊断修复、依赖上报及 artifact 元数据支持。Gateway 与 Agent 热路径（hot paths）进行了瘦身优化。
  - **贡献者**：@vincentkoc
  - **迁移注意**：插件安装逻辑有较大变动，特别是针对 `stale configured installs` 和 `beta-channel fallback` 的处理，用户升级后需检查插件兼容性。

- **v2026.5.2-beta.3 & beta.2**
  - **核心变更**：作为正式版的预演，主要验证了外部插件的诊断与 Onboarding 流程。
  - **风险提示**：Beta 版本暴露了部分插件（如 Brave）的安装配置缺失问题，已在正式版中部分修复，但仍有遗留问题（见 Bug 章节）。

## 3. 项目进展

尽管日报数据中展示的“热门 PR”多为 Open 状态，但结合 63 个已合并 PR 与 Release Notes，今日项目在以下领域取得实质性进展：

- **插件架构现代化**：核心团队正在合并关于插件 SDK 的重大更新，如 PR #75609 引入了 `sessionEntrySlot` 机制，允许插件安全地扩展会话状态，解决了长期存在的隔离性问题。
- **多渠道通信稳定性**：
  - **Slack**：PR #72896 增强了 Slack 消息投递的重试机制，防止因瞬时报错导致的消息丢失。
  - **Feishu**：PR #71396 修复了自动 mention 级联问题，PR #74808 增加了流式搜索降级功能。
  - **Telegram**：PR #76272 优化了 message-tool-only 模式下的回退逻辑。
- **性能优化**：PR #76402 为 `sessions.list` 引入了轻量级行路径，大幅降低批量操作时的计算开销；PR #76203 针对启动前媒体探测耗时过长的问题进行了修复。

## 4. 社区热点

今日社区讨论焦点集中在稳定性与用户体验的冲突上：

- **[Issue #65302](https://github.com/openclaw/openclaw/issues/65302)**：用户 @1168784 发表长文《你的更新正在扼杀你的产品》，批评频繁的更新引入了大量回归问题，导致项目处于“自我毁灭模式”。该 Issue 获得了 9 条评论和 6 个点赞，反映出部分用户对稳定性的强烈诉求。
- **[Issue #48183](https://github.com/openclaw/openclaw/issues/48183)**：Feishu 监控状态清理不彻底导致 `httpServers Map` 潜在内存泄漏，评论数达 16 条。开发者社区正在积极探讨最佳修复方案。
- **[Issue #73323](https://github.com/openclaw/openclaw/issues/73323)**：Windows 11 + Node 24 环境下出现严重的网关运行时降级（定价获取超时、Telegram 轮询停滞），评论数 15 条。该问题影响面广，且涉及跨版本回归，引发高度关注。
- **[Issue #72808](https://github.com/openclaw/openclaw/issues/72808)**：Slack 连接静默丢失问题，评论数 11 条，涉及连接保活机制的可靠性讨论。

## 5. Bug 与稳定性

今日报告了多个严重回归问题，部分已确认有修复方案：

- **严重**:
  1.  **[Issue #76371](https://github.com/openclaw/openclaw/issues/76371)**: v2026.5.2 Discord 插件启动崩溃。当 Token 配置为 SecretRef 时解析失败。**状态**：已确认回归，PR #76410/#76411 已提交修复。
  2.  **[Issue #73323](https://github.com/openclaw/openclaw/issues/73323)**: Windows 环境下网关严重性能降级。**状态**：Open，疑似 Node 24 兼容性问题。
  3.  **[Issue #76295](https://github.com/openclaw/openclaw/issues/76295)**: `core-plugin-tools` 启动阶段延迟从 1.5s 激增至 8.3s。**状态**：Open。

- **中等**:
  1.  **[Issue #76373](https://github.com/openclaw/openclaw/issues/76373)**: v5.2 Brave 插件安装失败，缺少 `openclaw.extensions` 字段。**状态**：Open。
  2.  **[Issue #76174](https://github.com/openclaw/openclaw/issues/76174)**: OpenAI 模型嵌入运行挂起直到超时。**状态**：Closed（可能已在 Beta 中修复）。
  3.  **[Issue #71992](https://github.com/openclaw/openclaw/issues/71992)**: Control UI Webchat 助手回复重复显示。

## 6. 功能请求与路线图信号

用户需求主要集中在多智能体协作与 UI 增强：

- **多智能体协作**：[Issue #72629](https://github.com/openclaw/openclaw/issues/72629) 指出会话式多智能体协调存在令牌成本二次方增长问题，呼吁优化协调机制。相关 PR #75225 正在尝试为动态 Agent 发现添加 `description` 字段，以提升子 Agent 智能调度能力。
- **UI 增强**：[Issue #42840](https://github.com/openclaw/openclaw/issues/42840) 请求在 Control UI 中支持 MathJax/LaTeX 渲染，方便展示数学公式。该需求呼声较高（4 个点赞），但目前尚无对应的 PR 进展。
- **健壮性设计**：[Issue #63990](https://github.com/openclaw/openclaw/issues/63990) 提出 Memory 组件需支持多索引嵌入与模型感知故障转移，以避免单一向量空间损坏导致系统不可用。这是向生产级可靠性迈进的重要信号。

## 7. 用户反馈摘要

- **痛点**：
  - **更新焦虑**：用户对“昨天好好的，今天坏了”的现象感到疲惫，呼吁减缓发布节奏或加强自动化测试覆盖率。
  - **平台差异**：Windows 用户反馈其在 Node.js 新版本下的体验远差于 Linux/Mac，特别是网络 IO 相关模块。
  - **插件管理**：新版插件系统虽好，但配置错误提示晦涩，导致排查困难。

- **满意点**：
  - **功能深度**：用户对 OpenClaw 在集成 Telegram、Slack 等多渠道能力表示认可，尤其是在 Hook 机制上的灵活性。
  - **响应速度**：针对今日出现的严重回归（如 Discord 崩溃），社区 PR 修复响应极快（当天提交 PR #76410）。

## 8. 待处理积压

以下重要 Issue 长期未得到根本解决，需维护者关注：

1.  **[Issue #14785](https://github.com/openclaw/openclaw/issues/14785)**: 工具 Schema 令牌开销过大（~3,500 tokens/session）。随着模型上下文成本增加，此优化对成本敏感型用户至关重要。
2.  **[Issue #13751](https://github.com/openclaw/openclaw/issues/13751)**: Feishu 插件权限申请过于宽泛（申请了整个通讯录只读权限），引发企业安全合规担忧。
3.  **[Issue #40786](https://github.com/openclaw/openclaw/issues/40786)**: 备份 CLI 缺少 `.gitignore` 式的排除模式，导致备份文件过大或包含敏感数据。

---
*分析师结语*：OpenClaw 正处于架构升级的阵痛期（插件系统重构），今日的爆发式更新既是技术迭代的体现，也是积累问题的释放。短期内团队需优先解决 Windows 平台与新版插件系统的稳定性回归，以平息社区对“自我毁灭式更新”的质疑。长远看，多智能体成本优化与 UI 交互体验将是决定其能否成为顶级 AI Agent 框架的关键。

---

## 横向生态对比

# 2026-05-03 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于**架构重构与模型适配的阵痛期**。头部项目普遍致力于打破单一模型依赖，全面适配 DeepSeek 等推理模型，并加速向多模态、多渠道（WhatsApp/Feishu/Slack）扩展。然而，**"功能激进与稳定性失衡"**成为今日最显著的矛盾，高频发布引发的回归问题激增，用户对"更新焦虑"的反馈强烈。同时，**多智能体协作**与**行动能力**正在取代单纯的对话能力，成为技术演进的新焦点。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃量 | PRs 活跃量 | Release 情况 | 健康度评估 | 关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500+ (极高) | 500+ (63 merged) | v2026.5.2 | ⚠️ 风险 | 插件重构、回归频发、社区火爆 |
| **Hermes Agent** | 44 | 48 (2 merged) | 无 | ⚠️ 积压 | PR 积压严重、A2A 协议、多智能体 |
| **Zeroclaw** | 50 | 34 (6 merged) | 无 | 🟡 活跃 | V3 架构迁移、Skill 系统、配置复杂 |
| **NullClaw** | 1 | 16 (15 merged) | 无 | 🟢 极佳 | 高效合并、REST API、Zig 修复 |
| **NanoClaw** | 13 | 18 (7 merged) | 无 | 🟢 健康 | V2 迁移、稳定性修复、OpenRC 兼容 |
| **CoPaw** | 13 | 11 (1 merged) | 无 | 🟡 正常 | 模型容灾、企业级需求、记忆管理 |
| **NanoBot** | 3 | 19 (8 merged) | 无 | 🟢 健康 | WhatsApp 支持、安全增强、迭代快 |
| **IronClaw** | 20 | 44 (38 open) | 无 | 🟡 研发中 | NEAR 集成、架构重构、交易 Agent |
| **PicoClaw** | 7 | 8 (2 merged) | Nightly | 🟢 稳健 | 边缘设备、DeepSeek 修复、OAuth |
| **Moltis** | 4 | 1 | 无 | 🔵 平稳 | 国际化、云部署、DeepSeek Bug |
| **LobsterAI** | 0 | 4 | 无 | 🔵 低活跃 | 维护模式、OpenClaw 集成 |
| **TinyClaw/ZeptoClaw/EasyClaw** | 0 | 0 | 无 | ⚪ 沉寂 | 无活动 |

> **注**：健康度评估综合考量了 Issue/PR 处理比率、版本稳定性反馈及社区互动质量。

## 3. OpenClaw 在生态中的定位

*   **核心参照与流量中心**：OpenClaw 的活跃度（500+ Issues/PRs）远超其他项目总和，是生态中绝对的流量中心。其插件生态最丰富，被 LobsterAI 等项目作为底层依赖。
*   **技术路线**：采取 **"npm-first" 插件化策略**，侧重于通过 Gateway 减负和热路径优化。相比之下，NullClaw 采用 Zig 追求极致性能，IronClaw 侧重链上交易，Zeroclaw 侧重配置化的 Skill 系统。
*   **优势与隐忧**：优势在于社区规模大、集成渠道最全（Slack/Feishu/Telegram）；隐忧在于**发布节奏失控**，今日因回归问题引发的负面反馈（"自我毁灭模式"）在生态内极为突出，稳定性已成为最大短板。

## 4. 共同关注的技术方向

1.  **DeepSeek 推理模型适配**
    *   **涉及项目**：OpenClaw, NanoBot, Zeroclaw, IronClaw, PicoClaw, Moltis。
    *   **共性诉求**：普遍存在 `reasoning_content` 处理缺失、Token 截断或流式解析错误。生态已全面转向支持"思考模型"，但适配质量参差不齐，是当前最普遍的技术债。

2.  **沙箱安全与执行权限**
    *   **涉及项目**：NanoBot, Zeroclaw, NullClaw。
    *   **共性诉求**：随着 Agent 自主能力增强，沙箱逃逸、命令拦截过严、文件路径混淆问题频发。各项目均在寻求"安全"与"自主"的平衡点。

3.  **多渠道通信稳定性**
    *   **涉及项目**：OpenClaw, NanoBot, Zeroclaw, CoPaw。
    *   **共性诉求**：Slack/Feishu/WhatsApp 的连接保活、重试机制及线程隔离是开发重点。企业级用户对 IM 渠道的稳定性要求极高。

## 5. 差异化定位分析

| 维度 | OpenClaw | NullClaw | IronClaw | Zeroclaw | CoPaw (QwenPaw) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **核心定位** | 通用型 AI Agent 框架 | 高性能/轻量级 Agent | 区块链交易 Agent | 配置驱动的 Skill 平台 | 企业级智能体平台 |
| **目标用户** | 广大开发者与极客 | 边缘设备/低资源场景 | Web3 开发者/交易员 | 高级玩家/定制化需求 | 企业用户/办公场景 |
| **架构特色** | 插件生态丰富，Gateway 架构 | Zig 语言，REST API，低资源占用 | NEAR Intents，Turns 架构重构 | V3 Schema，多实例，Skill Registry | 多端同步，模型 Fallback |
| **痛点** | 稳定性回归严重 | 文档缺失，Zig 门槛高 | 非 OpenAI 模型适配难 | 配置复杂度过高 | 本地模型适配困难 |

## 6. 社区热度与成熟度

*   **快速迭代但动荡期**：**OpenClaw** 处于典型的"高速迭代-高故障"周期，社区虽大但负面情绪积累；**Zeroclaw** 正经历架构重构阵痛，Issue 积压较多。
*   **质量巩固期**：**NullClaw** 展现了极高的维护效率（PR 合并率极高），代码质量与架构清晰度较高；**NanoBot** 处于稳步功能扩展期，健康度良好。
*   **研发探索期**：**Hermes Agent** 与 **IronClaw** 积压了大量架构级 PR（如 A2A 协议、NEAR 集成），正处于关键技术突破的前夜，但交付节奏受阻。
*   **沉寂/维护期**：**LobsterAI**、**Moltis** 活跃度低，主要进行适配性修复，缺乏重大功能更新。

## 7. 值得关注的趋势信号

1.  **从模型适配到模型容灾**：
    CoPaw 与 Zeroclaw 社区强烈呼吁 **"模型 Fallback 机制"**。随着单一模型（如 OpenAI）服务波动及推理模型（DeepSeek）的流行，构建多模型冗余链路将成为企业级 Agent 的标配。

2.  **Agent 的自我进化与记忆**：
    Zeroclaw 的"梦境模式"（空闲时反思）与 CoPaw 的长期记忆索引修复，暗示生态正从 **"即时对话"向"长期自主智能体"演进**，记忆存储与压缩技术将成为下一阶段的核心竞争力。

3.  **轻量化与边缘部署需求觉醒**：
    PicoClaw 在 Android TV Box 上的尝试、NullClaw 对 Landlock 的采用、NanoClaw 对 OpenRC 的兼容，均指向 **"去 Docker 化"和"低资源运行"** 趋势。Agent 正试图从云端服务器走向边缘设备和嵌入式场景。

4.  **协议互操作性提上日程**：
    Hermes Agent 社区对 **A2A (Agent-to-Agent)** 协议的讨论，标志着 Agent 不再满足于孤岛运行，跨 Agent 协作的标准协议将成为打破生态壁垒的关键。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-03)

## 1. 今日速览
NanoBot 项目今日呈现出极高的开发活跃度，虽然无新版本 Release 发布，但代码仓库经历了大规模的功能合并与重构。过去 24 小时内 PR 更新量高达 19 条，其中 8 条重要 PR 已成功合并，涵盖了多渠道接入、安全性增强及核心性能优化。相比之下，社区反馈侧较为平静，仅新增 3 条 Issue，且集中在最新版本的兼容性与配置限制上。整体来看，项目正处于功能快速迭代后的稳定整合期，建议关注近期版本发布前的回归测试。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 8 个 PR 被合并，显著推进了项目在多平台支持、安全性与系统稳定性方面的进展：

*   **多渠道通信能力增强**：
    *   PR #2010 合并，正式支持 WhatsApp 的媒体收发（图片、音频、视频、文档），补齐了多媒体交互短板。
    *   PR #3176 合并，为飞书实现了线程级会话隔离与非阻塞响应，优化了企业级场景下的体验。
*   **安全与配置优化**：
    *   PR #2218 合并，引入 `{env:VAR}` 语法引用环境变量，解决了 API Key 等敏感信息明文存储在配置文件中的安全隐患。
    *   PR #3594 合并，修复了 `ExecTool` 中 `allow_patterns` 无法覆盖 `deny_patterns` 的逻辑缺陷，提升了沙箱逃逸防护的灵活性。
*   **稳定性与性能修复**：
    *   PR #3419 修复了 DeepSeek 推理模式下连续消息合并导致 `reasoning_content` 丢失的问题，保障了思维链完整性。
    *   PR #3414 对系统提示词中的历史记录长度增加了 32K 字符上限，防止上下文溢出。
    *   PR #3247 修复了 LLM 错误响应导致归档失败的问题，增强了记忆系统的鲁棒性。

此外，PR #3456 的合并引入了 `create-instance` 内置技能，标志着 NanoBot 向“自我复制”和多实例管理迈出了重要一步。

## 4. 社区热点
今日社区讨论主要集中在功能扩展与性能优化方向：

*   **性能优化提案**：PR #3598 [perf(context): cache system prompt...] 提出基于 mtime 的系统提示词缓存机制，旨在减少冗余计算，目前处于 Open 状态，有望显著提升网关响应速度。
*   **交互体验增强**：PR #3589 提议在 Discord 频道支持按钮、选择菜单等交互组件，引发了关于跨平台 UI 一致性的讨论。
*   **超时控制痛点**：Issue #3595 反映了用户对 `exec` 工具 600 秒硬编码上限的不满，尤其是在下载长耗时任务中。该 Issue 已迅速得到响应，关联的 PR #3596 已提交，拟引入“活动感知超时”机制。

## 5. Bug 与稳定性
今日报告的 Bug 主要与最近的更新相关：

*   **[严重] 安全策略误拦截 (Issue #3599)**：
    *   **描述**：用户升级至 v0.1.5.post3 后，系统频繁误报 "Command blocked by safety guard (path outside working dir)"，即使操作在工作目录内也被拦截。
    *   **状态**：Open，暂无修复 PR。
    *   **分析**：可能与近期对 `ExecTool` 的安全策略调整有关，导致路径判断逻辑出现回归错误。
*   **[中等] 工作空间路径混淆 (Issue #3597)**：
    *   **描述**：Agent 误判工作空间根目录，导致文件保存路径错误。
    *   **状态**：Open，暂无修复 PR。
*   **[已修复] Allow/Deny 逻辑冲突 (PR #3594)**：
    *   今日已合并修复，解决了白名单优先级低于黑名单导致命令被错误拦截的历史问题。

## 6. 功能请求与路线图信号
*   **长时间任务支持**：Issue #3595 提出的移除 600s 超时限制请求，已由 PR #3596 接手。该方案计划引入“硬超时”与“活动超时”双层机制，预计将被纳入下个版本，显著改善长任务运行体验。
*   **本地化与隐私计算**：PR #3513 正在推进本地 Whisper 模型的支持，结合今日合并的环境变量安全特性，显示出项目对“本地部署”和“隐私优先”场景的侧重。
*   **高级 CLI 控制**：PR #3591 (Dream 范围控制) 和 PR #3590 (手动心跳触发) 表明开发者正在赋予用户更细粒度的 Agent 行为控制权，适合高级玩家定制化工作流。

## 7. 用户反馈摘要
*   **痛点**：升级后的安全拦截机制过于敏感，导致正常操作受阻 (#3599)，这直接影响了对 Agent 自动化的信任度。
*   **场景**：用户正在尝试将 NanoBot 用于自动化内容创作（如每日 X 文章草稿）和长耗时下载任务，但遭遇了文件路径混淆和超时限制的阻碍 (#3597, #3595)。
*   **满意度**：用户对环境变量支持 (#2218) 和 WhatsApp 媒体功能 (#2010) 的合并表示期待，认为这些是生产环境部署的刚需功能。

## 8. 待处理积压
目前有 11 个 PR 处于待合并状态，积压量中等，建议维护者优先关注以下两项：

*   **PR #3587**：修复 `reasoningEffort: null` 的处理逻辑，防止模型行为异常，属于关键性修复。
*   **PR #3588**：音频转录前的格式转换修复，对于非 WAV 格式的语音输入场景至关重要。

---
*分析师注：今日项目核心变动较大，尤其是 ExecTool 相关的安全与超时逻辑调整，建议在下一个 Release 前进行充分的回归测试，重点关注路径验证逻辑。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-03)

## 1. 今日速览
Zeroclaw 项目今日保持极高的活跃度，过去24小时内 Issues 活跃量高达 50 条，PR 更新 34 条，显示出社区与开发团队正在密集推进功能迭代与问题修复。项目目前正处于架构重构的关键期，核心开发者正致力于 **配置系统 V3 迁移** 与 **Skill 生态系统整合**，同时针对 DeepSeek、Bedrock 等主流推理模型的兼容性问题进行了紧急修复。整体来看，项目正从单一应用向支持多实例、强扩展性的智能体平台演进，但随之而来的配置复杂性与沙箱权限问题也成为用户反馈的焦点。

## 2. 版本发布
**无新版本发布。**
但需注意，项目正在通过 `integration/v0.8.0` 分支积极推进 **Schema V3** 的重大架构更新（见 PR #6266），预计下一个版本将包含破坏性配置变更，建议用户关注迁移指南。

## 3. 项目进展
今日共有 6 个 PR 合并/关闭，28 个待合并，关键进展如下：

*   **[Core] 配置架构重构 (V3):** PR #6266 开启了针对 `integration/v0.8.0` 的重构，引入了 Channel 别名、Model-Provider 别名以及 Profile 提升。配合一系列 V3 相关的 Issue（#6270, #6271, #6272, #6273），项目正着力解决当前配置系统的复杂性问题。
*   **[Skills] 架构统一与内置化:** PR #6274 将第一方 Skills 迁移至仓库内的 `skills/` 目录，废弃了独立仓库模式；PR #6143 提出了通用 Skill Registry 支持，旨在通过统一接口加载 Skills。这表明 Zeroclaw 正在强化其插件化能力。
*   **[Provider] 推理模型兼容性修复:** 针对 DeepSeek 等 "Thinking" 模型在多轮对话中丢失 `reasoning_content` 导致崩溃的严重问题（Issue #6233, #6269），开发者提交了两个关键修复 PR #6284 和 #6285，确保了上下文压缩与消息转换过程中推理内容的完整性。
*   **[Channels] 多渠道功能增强:** PR #6200 修复了 Matrix 渠道的附件上传问题；PR #6286 修复了 Telegram 群组中 `mention_only` 对媒体消息无效的 Bug；PR #6261 为 Cron 任务增加了 WhatsApp 投递支持。

## 4. 社区热点
今日讨论热度最高的 Issue 集中在**自主性与记忆机制**以及**运行环境限制**两方面：

1.  **[Feature] 梦境模式** [Issue #5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)
    *   **热度:** 👍 0 | 评论: 9
    *   **分析:** 社区对 AI 在空闲时段进行“记忆整合”与“反思学习”的需求强烈。这反映了用户不满足于 LLM 仅作为被动的问答工具，而是希望其具备长期记忆演化能力。
2.  **[Bug] Agent 不知道可以使用 Cron** [Issue #5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)
    *   **热度:** 👍 0 | 评论: 9
    *   **分析:** 这是一个典型的“工具认知缺失”问题。用户期望 Agent 知道自身具备定时任务能力，这触及了 Agent System Prompt 与工具注册逻辑的核心设计。
3.  **[Bug] Shell 沙箱配置过于严格** [Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)
    *   **热度:** 👍 0 | 评论: 6
    *   **分析:** 高级用户尝试在 Zeroclaw 上开发复杂的金融分析 Skill，但默认沙箱配置阻止了常规 Python 操作。这揭示了“开箱即用”与“安全隔离”之间的矛盾，目前状态为 `in-progress`，表明开发团队已将其列为优先事项。

## 5. Bug 与稳定性
今日报告了多个严重程度较高的 Bug，主要集中在模型接口适配与运行环境：

*   **🔴 S1 - 工作流阻塞:**
    *   **DeepSeek V4 多轮对话崩溃** [Issue #6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233): API 在第二轮对话返回 400 错误。
        *   *状态:* **已有修复 PR** #6284, #6285。
    *   **Bedrock Claude Opus 4-7 温度参数报错** [Issue #6095](https://github.com/zeroclaw-labs/zeroclaw/issues/6095): 新版模型废弃了 temperature 字段导致请求失败。
        *   *状态:* Open，等待适配。
    *   **Slack Bot Token 无法从环境变量读取** [Issue #6237](https://github.com/zeroclaw-labs/zeroclaw/issues/6237): 导致 Slack Channel 无法启动。
        *   *状态:* **已有修复 PR** #6287。

*   **🟠 S2 - 功能降级:**
    *   **WASM 插件路径分歧** [Issue #6254](https://github.com/zeroclaw-labs/zeroclaw/issues/6254): 安装路径与运行扫描路径不一致，导致插件不可见。
    *   **Tavily 搜索未实现** [Issue #6245](https://github.com/zeroclaw-labs/zeroclaw/issues/6245): 代码中仅为 TODO 占位符。

## 6. 功能请求与路线图信号
*   **Air-gapped 执行模式** [Issue #6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293): 提出了“离线 Agent + 在线守护进程”的架构设想，旨在满足高安全场景下的隔离运行需求。这是一个非常前沿的架构提案，极有可能被纳入后续版本规划。
*   **Skills 支持与 UX 提升** [Issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253): 官方发布了 v0.7.6 版本的追踪计划，明确将改善 Skill 的 CLI、加载器及沙箱体验，结合今日 PR #6274 的动作，Skill 系统将是下阶段核心。

## 7. 用户反馈摘要
*   **痛点：配置复杂度过高。** 多个 Issue (#6260, #6227, #5628) 反映了用户在多实例部署、LM Studio 配置、服务自启动冲突中遇到困难。用户希望能通过环境变量简单覆盖配置，或避免复杂的配置文件嵌套。
*   **痛点：Agent 工具认知断层。** 用户反馈 Agent 无法意识到自己拥有 `cron` 等能力，导致任务执行失败，这提示 Prompt 工程或工具注册机制需要优化。
*   **场景：复杂 Skill 开发受阻。** 开发者尝试在 Zeroclaw 上构建复杂的金融分析工具，但受限于沙箱权限，呼吁更灵活的权限配置方案。

## 8. 待处理积压
*   **[P1] Shell 沙箱限制问题** [Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722): 自 4月14日创建以来，虽标记为 `in-progress`，但至今未彻底解决，严重影响了高级用户的 Skill 开发体验，建议尽快合并相关修复或提供临时白名单配置。
*   **[P2] 私聊回复逻辑缺陷** [Issue #5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674): 在 1对1 私聊中，Agent 仍执行“是否回复”的判断逻辑，导致有时忽略用户消息。此问题已持续数周，影响基础交互体验。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-03)

## 1. 今日速览
Hermes Agent 今日整体呈现**高活跃度但开发吞吐受阻**的状态。社区反馈极其热烈，过去 24 小时内新增/活跃 Issue 高达 44 条，反映出用户对项目的关注度和使用深度均在增加。然而，项目合并进度显著滞后，共有 48 个 PR 处于待合并状态，仅合并/关闭 2 个，导致 PR 积压严重。今日无新版本发布，项目重心目前偏向于问题排查与架构优化，特别是针对 DeepSeek 提供者、Gateway 性能及多智能体协作稳定性的修复。

## 2. 版本发布
**无新版本发布。** 考虑到当前存在大量待合并的修复性 PR 及未解决的 Bug，建议关注下一版本的稳定性修复进展。

## 3. 项目进展
尽管合并数量较少，但今日关闭的 Issues 显示项目在以下关键领域取得了进展：
*   **性能优化**：解决了 Gateway 在非流式模式下增加约 5s 固定延迟的问题 ([Issue #19045](https://github.com/NousResearch/hermes-agent/issues/19045))，显著提升了 Telegram 等平台的响应速度。
*   **模型兼容性**：修复了 DeepSeek V4 Pro 导致 Gateway 崩溃循环的问题 ([Issue #16677](https://github.com/NousResearch/hermes-agent/issues/16677))，恢复了关键模型的支持。
*   **功能落地**：Curator（后台技能维护）功能的 RFC 审核结束并关闭 Issue ([Issue #16077](https://github.com/NousResearch/hermes-agent/issues/16077))，标志着该辅助功能即将正式集成。
*   **搜索体验**：修复了 FTS5 分词器遗漏 CJK 字符的问题 ([Issue #14829](https://github.com/NousResearch/hermes-agent/issues/14829))，提升了中文等语言的搜索准确性。

## 4. 社区热点
今日讨论热度最高的议题集中在**协议互操作性**与**用户隐私/合规性**：
*   **[A2A 协议支持]** ([Issue #514](https://github.com/NousResearch/hermes-agent/issues/514))：评论数达 11 条。社区强烈呼吁支持 Google 的 A2A (Agent-to-Agent) 协议，以解决“谁可以帮助我？”的跨智能体发现与通信问题，这与现有的 MCP 协议形成互补。该功能可能是实现多智能体生态互联的关键一步。
*   **[Anthropic 品牌检测争议]** ([Issue #19046](https://github.com/NousResearch/hermes-agent/issues/19046))：用户指出 Hermes Agent 在请求 Anthropic API 时携带了过多的第三方标识信息，引发关于隐私和 API 合规性的讨论。
*   **[DeepSeek 提供者配置问题]** ([Issue #17199](https://github.com/NousResearch/hermes-agent/issues/17199))：用户反馈在使用火山引擎 ARK 等自定义端点时遭遇模型名称归一化和 URL 覆盖的 Bug，影响了开源模型生态的兼容性。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，部分已有修复 PR 待合并：

**🔴 严重/阻塞 (P2/P1)**
*   **依赖解析失败** ([Issue #19043](https://github.com/NousResearch/hermes-agent/issues/19043))：`pyproject.toml` 中的 `exclude-newer = "7 days"` 导致超过 7 天未更新的稳定包无法安装，构建系统受阻。
*   **多智能体协作中断** ([Issue #19036](https://github.com/NousResearch/hermes-agent/issues/19036))：Kanban 数据库按 Profile 隔离，导致 Orchestrator 无法查看 Worker 的任务状态，破坏了多智能体工作流。
*   **DeepSeek 兼容性** ([Issue #17199](https://github.com/NousResearch/hermes-agent/issues/17199))：自定义端点配置失效。*(有修复 PR [#18218](https://github.com/NousResearch/hermes-agent/pull/18218) 待合并)*。
*   **命令注入风险** ([Issue #2743](https://github.com/NousResearch/hermes-agent/issues/2743))：TTS 工具中存在 `shell=True` 导致的潜在安全漏洞。

**🟠 一般/体验影响 (P3)**
*   **CLI 显示问题** ([Issue #19039](https://github.com/NousResearch/hermes-agent/issues/19039))：浅色背景下终端字体难以辨认。
*   **上下文丢失** ([Issue #19003](https://github.com/NousResearch/hermes-agent/issues/19003))：上下文压缩器忽略了 Reasoning 字段，导致思考模型（如 DeepSeek-R1）生成空摘要。

## 6. 功能请求与路线图信号
*   **A2A 协议集成** ([Issue #514](https://github.com/NousResearch/hermes-agent/issues/514))：如前所述，这是目前最关注的功能，预计将成为下一阶段路线图的重点。
*   **原生支付执行** ([Issue #2919](https://github.com/NousResearch/hermes-agent/issues/2919))：提议集成 x402 协议，使 Agent 能够自主执行支付，填补“智能体成长闭环”中的经济能力缺口。
*   **MoA (Mixture of Agents) 路由配置** ([PR #19060](https://github.com/NousResearch/hermes-agent/pull/19060))：正在开发的 PR 允许配置 MoA 的提供者路由，不再局限于 OpenRouter，这将极大提升架构灵活性。

## 7. 用户反馈摘要
*   **痛点：** 用户对 **DeepSeek** 模型集成的稳定性抱怨较多（崩溃、配置失效）；**浅色模式**用户抱怨 UI 不可用；多智能体场景下的**状态隔离**问题影响了实际生产力。
*   **场景：** 越来越多的用户尝试将 Hermes 用于复杂的多智能体协作（Orchestrator-Worker 模式）和自定义私有模型部署（如火山引擎 ARK），现有架构在这些边缘场景下暴露了兼容性不足的问题。
*   **满意点：** 社区对 Curator 功能的落地表示期待，认为这解决了技能维护的痛点；对 A2A 协议的支持讨论显示了社区对项目成为“智能体中心”的愿景。

## 8. 待处理积压
目前项目存在严重的 **PR 积压**，需维护者重点关注：
*   **PR 积压预警**：共有 **48 个 PR** 处于 Open 状态，今日仅处理了 2 个。其中包括多个关键的 Bug 修复（如 [PR #16701](https://github.com/NousResearch/hermes-agent/pull/16701) 修复 Gateway 凭证池传递、[PR #8168](https://github.com/NousResearch/hermes-agent/pull/8168) 修复图像分析超时）。大量修复积压可能导致新版本发布延迟，建议社区加速 Review 进程。
*   **长期 Issue**：Issue #2704 (Cron 任务结果写入记忆) 和 #2835 (Context 文件组合逻辑) 等功能请求自 3 月开启至今未解决，建议纳入里程碑管理。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-03)

## 1. 今日速览
PicoClaw 项目今日保持高活跃度开发状态，**发布了一个新的 Nightly 构建版本**，重点聚焦于多模型提供商的兼容性修复。过去24小时内，社区反馈热烈，共产生 **7 条 Issue 更新** 与 **8 条 PR 更新**，其中 DeepSeek 推理模式兼容性与 MCP 服务器 OAuth 支持成为讨论焦点。项目整体健康度良好，开发者对 Bug 的响应速度极快，部分今日新提的 Bug 已有对应的修复 PR 提交。

## 2. 版本发布
- **[nightly] Nightly Build (v0.2.8-nightly.20260503.a94ba821)**
  - **类型**: 自动化构建版本
  - **更新说明**: 这是一个 nightly 自动构建版本，可能存在不稳定性，建议谨慎用于生产环境。该版本包含了截至 `main` 分支 `a94ba821` 提交的最新代码，涵盖了今日合并的文档更新与后续待合并的功能修复。
  - **变更日志**: [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## 3. 项目进展
今日共有 **2 个 PR 合并/关闭**，主要涉及文档与社区维护更新：
- **[PR #2747](https://github.com/sipeed/picoclaw/pull/2747) [CLOSED]**: 更新了微信交流群二维码图片，维持社区渠道畅通。
- **[PR #2746](https://github.com/sipeed/picoclaw/pull/2746) [CLOSED]**: 增加了 OpenRouter 推理模型的配置预设文档，帮助用户解决推理内容泄露问题。

**待合并的关键修复**:
- **[PR #2750](https://github.com/sipeed/picoclaw/pull/2750)**: 修复了 Bash 工具将相对路径误判为绝对路径的严重安全/逻辑漏洞，目前处于待合并状态。

## 4. 社区热点
今日讨论最活跃的议题集中在 **通道扩展** 与 **MCP 服务器易用性** 上：
1.  **[Issue #2421](https://github.com/sipeed/picoclaw/issues/2421) [Feature]: Add email as native channel**
    - **热度**: 👍 0 | 评论: 4
    - **分析**: 社区强烈建议增加 Email 作为原生通道，以满足企业、科研等保守环境下的通信需求。讨论中涉及了 IMAP/SMTP 集成的复杂性，这是项目拓展应用场景的重要信号。
2.  **[Issue #2546](https://github.com/sipeed/picoclaw/issues/2546) [Feature] Support OAuth 2.1 + PKCE for MCP servers**
    - **热度**: 👍 0 | 评论: 3
    - **分析**: 开发者提议在 Dashboard 层面支持 MCP 服务器的 OAuth 2.1 + PKCE 认证，旨在降低非技术用户在云端环境连接受保护资源的门槛，反映出用户对 "No-Code" 集成体验的高期待。

## 5. Bug 与稳定性
今日报告了多个影响使用体验的 Bug，主要集中在 **提供商接口适配** 和 **路径解析** 方面：

- **🔴 严重**
    - **[Issue #2720](https://github.com/sipeed/picoclaw/issues/2720) [BUG] Singleton PID check crash loop**: Gateway 因 PID 文件校验逻辑缺陷陷入崩溃循环，影响服务稳定性。目前暂无对应修复 PR。
- **🟠 中等**
    - **[Issue #2749](https://github.com/sipeed/picoclaw/issues/2749) [BUG] Bash evaluates relative path as absolute path**: 工具执行路径解析错误，可能导致文件操作越界。**已有 Fix PR**: [#2750](https://github.com/sipeed/picoclaw/pull/2750)。
    - **[Issue #2745](https://github.com/sipeed/picoclaw/issues/2745) [BUG] OpenRouter reasoning model leaks thinking**: 推理模型将思考过程泄露在最终回复中，影响用户体验。
    - **[Issue #2668](https://github.com/sipeed/picoclaw/issues/2668) [BUG] Gemini API HTTP 400**: Gemini 模型对复杂的 MCP 工具 JSON Schema 不兼容，导致请求失败。
- **🔵 轻微**
    - **[Issue #2665](https://github.com/sipeed/picoclaw/issues/2665) [BUG] Wrong model IDs in Anthropic dropdown**: 下拉菜单中 Anthropic 模型 ID 格式错误（使用了点号而非破折号），导致 API 调用失败。

## 6. 功能请求与路线图信号
结合 Issue 与 PR 趋势，可以看出 PicoClaw 正在向以下方向演进：
1.  **AI 模型深度适配**: [PR #2740](https://github.com/sipeed/picoclaw/pull/2740) 针对 DeepSeek 的推理模式进行了流式解析修复，[PR #2260](https://github.com/sipeed/picoclaw/pull/2260) 增加了 xAI 兼容支持。这表明项目正致力于全面兼容主流 LLM 提供商的最新特性（如 Reasoning Tokens）。
2.  **企业级场景支持**: Email 通道与 OAuth 2.1 的 Feature Request 显示，用户群体正从极客玩家向需要合规、安全集成的企业用户扩展。

## 7. 用户反馈摘要
- **痛点**: 用户在使用不同模型提供商（如 Gemini, Anthropic, DeepSeek）时，经常遇到接口格式不兼容的问题（如 Schema 校验失败、Model ID 错误），需要频繁查阅文档或等待修复。
- **场景**: 用户在 Android TV Box (Termux) 等边缘设备上部署 PicoClaw 节点（参考 [PR #2462](https://github.com/sipeed/picoclaw/pull/2462) 背景），说明项目在轻量级硬件上的表现受到关注。
- **反馈**: 部分用户对 OpenRouter 推理模型的输出表示困惑，认为“思考过程”泄露破坏了对话体验，急需配置项进行过滤。

## 8. 待处理积压
以下重要 Issue 处于停滞或响应缓慢状态，建议维护者关注：
- **[Issue #2668](https://github.com/sipeed/picoclaw/issues/2668) Gemini API HTTP 400**: 该问题自 4 月 25 日报告以来，虽有确认但尚未有明确修复进度，影响了 Gemini 模型配合 MCP 工具的使用。
- **[Issue #2665](https://github.com/sipeed/picoclaw/issues/2665) Anthropic Model ID Error**: 这是一个阻塞性的配置错误，虽已报告一周，但修复进度滞后。
- **[PR #2163](https://github.com/sipeed/picoclaw/pull/2163) Google Antigravity OAuth fix**: 该 PR 自 3 月底提交以来一直处于待合并状态，可能影响特定 Google 服务的连接稳定性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-03)

## 1. 今日速览
NanoClaw 今日保持了极高的开发活跃度，过去 24 小时内共有 18 条 PR 更新与 13 条 Issue 动态。项目重心明显向**稳定性修复**与**V2 迁移完善**倾斜，合并了包括关键的数据库只读崩溃修复、CLI 路由修复以及 V1->V2 迁移脚本等重要更新。社区方面，围绕非 systemd 环境（OpenRC）的兼容性问题引发了新的讨论，同时多位贡献者提交了针对 Signal 支持、OpenCode 模型集成等功能的 PR。整体来看，项目正处于快速迭代修补期，对 V2 版本的早期采用者支持力度较大。

## 2. 版本发布
过去 24 小时内无新版本发布。考虑到合并了 V1->V2 迁移功能 (#1931) 及多项核心修复，预计近期可能会有新的 patch 版本或 release candidate 推出。

## 3. 项目进展
今日共有 7 个 PR 被合并或关闭，显著提升了系统的稳定性与迁移体验：

*   **重要里程碑 - V2 迁移支持**：PR #1931 已合并，引入了实验性的 V1 到 V2 自动迁移流程。这降低了早期采用者的升级门槛，解决了手动迁移配置复杂的痛点。
*   **关键稳定性修复**：PR #2183 修复了 `host-sweep` 进程因尝试写入只读数据库而崩溃的严重 Bug（关联 Issue #2188, #2196），解决了可能导致消息传递停滞的问题。
*   **CLI 与标识符修复**：PR #2179 修复了 OneCLI 不接受下划线标识符导致容器无法登录的问题；PR #2181 修复了热容器上斜杠命令静默失败的缺陷。
*   **数据解析优化**：PR #2190 修复了 Atom Feed 解析 TypeError，增强了 YouTube 等源的数据抓取健壮性。

## 4. 社区热点
今日讨论与关注度最高的议题集中在以下几个方向：

*   **Token 效率与成本优化**：Issue #2189 引发了关于 AI Agent Token 消耗过大的讨论。用户指出当前实现存在显著的 Token 浪费，不仅增加了成本，还影响了非编码 Agent 的性能。作者表示乐意提交 PR，反映了高级用户对底层架构优化的强烈诉求。
*   **OpenRC 兼容性痛点**：Issue #2199 和 #2200 均由用户 @markhawrylak 提出，反映了安装脚本与 Telegram 初始化在非 systemd（OpenRC）环境下的兼容性缺失。这表明项目目前的“开箱即用”体验主要针对主流 Linux 发行版优化，边缘环境支持尚待完善。
*   **Badge 功能微调**：Issue #1017 请求在 repo-tokens 徽章中增加百分比显示，目前已有关联 PR (#2198) 待合并，显示社区对 UI/UX 细节的关注。

## 5. Bug 与稳定性
今日报告了多个影响使用体验的 Bug，部分已有修复方案：

*   **严重**：
    *   **SQLite 只读数据库崩溃**：Issue #2188 和 #2196 报告了 `host-sweep` 在清理孤儿进程时因写入只读 DB 而崩溃。**状态：已修复 (PR #2183)**。
*   **中等**：
    *   **CLI 路由失败**：Issue #2186 指出 CLI channel 的 `namespacedPlatformId` 生成错误导致消息超时。**状态：已修复 (PR #2187)**。
    *   **V2 迁移脚本误导性报错**：Issue #2191 指出若未安装 `sqlite3` CLI，迁移脚本会错误报告 "missing registered_groups"，提示信息不清晰。
    *   **WhatsApp LID 映射丢失**：Issue #2194 报告重启后 WhatsApp 路由映射丢失，导致基于 LID 的消息发送失败。
*   **低**：
    *   **OpenRC 环境初始化失败**：Issue #2199 和 #2200 影响特定 Linux 发行版用户，导致 Docker 启动或 Telegram 配对失败。

## 6. 功能请求与路线图信号
*   **多模型支持**：PR #2201 提出增加 OpenCode 提供商及自定义模型支持，反映了用户希望摆脱单一模型依赖、灵活切换底层 LLM 的需求。
*   **Signal 频道增强**：PR #2203 和 #2202 正在完善 Signal 的消息反应和语音转录支持。结合正在进行的 WhatsApp 修复，显示出项目在即时通讯渠道的多平台发力。
*   **Gmail 多账户支持**：Issue #2195 指出当前 `add-gmail-tool` 无法处理多账户场景，这是目前架构的一个已知限制，用户期待后续改进。

## 7. 用户反馈摘要
*   **迁移体验**：用户正在积极尝试 V2 迁移，但遇到了依赖检查缺失（如 sqlite3 CLI）的问题，建议加强脚本的健壮性和错误提示。
*   **性能隐忧**：重度用户反馈 Token 消耗过高（Issue #2189），这直接影响生产环境的成本效益，是项目下一步优化的重点方向。
*   **环境多样性**：OpenRC 用户的反馈表明，目前的自动化脚本假设环境过于理想化（依赖 systemd），需考虑更通用的 Linux 服务管理兼容。

## 8. 待处理积压
*   **大型功能 PR 待审核**：PR #1624（Matrix E2EE 支持）自 4 月初开启至今仍未合并，仍有待处理的评论，可能需要更多兼容性测试。PR #1327（Home Assistant 集成）也长期处于开启状态。
*   **未响应的新问题**：Issue #2191（迁移脚本报错）、#2195（Gmail 多账户）等昨日新开 Issue 尚未收到维护者回复，需关注其优先级判定。
*   **待合并 PR**：PR #2198（徽章百分比显示）已准备就绪，关联 Issue 标签为 `good first issue`，适合新贡献者参与，建议尽快合并。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-03)

## 1. 今日速览
NullClaw 项目今日呈现出极高的代码合入活跃度，共有 **15 个 PR 被合并或关闭**，仅有 1 个 PR 处于待合并状态，显示出维护者对代码库进行了大规模的清理与功能迭代。虽然过去 24 小时内无新版本发布，但合并的内容包含关键的架构升级（如 REST Admin API、A2A 多模态支持）和严重的回归修复。Issues 板块新增了 1 条关于沙箱机制的技术提案，社区讨论集中在低资源设备适配与底层依赖优化上。整体来看，项目处于快速演进期，稳定性和企业级管理能力显著增强。

## 2. 版本发布
无新版本发布。考虑到今日有大量重要 PR 合并入主分支（如 REST Admin API 系列和严重的 CPU 空转修复），预计近期将有一次包含重大功能更新的版本发布。

## 3. 项目进展
今日项目进展显著，主要集中在管理接口、稳定性修复和安全增强三个维度，整体向前迈出了一大步。

*   **管理架构升级：REST Admin API 落地**
    合并了 PR [#770](https://github.com/nullclaw/nullclaw/pull/770)、[#771](https://github.com/nullclaw/nullclaw/pull/771)、[#780](https://github.com/nullclaw/nullclaw/pull/780)，完整实现了 REST Admin API 接口。新增了配置变更、MCP 服务管理、Agent 会话管理、内存 CRUD 及历史记录查询等核心功能，为零依赖的轻量级客户端（如菜单栏应用、移动端）提供了标准化接口。

*   **关键稳定性修复：Zig 0.16 迁移遗留问题**
    合并了 PR [#872](https://github.com/nullclaw/nullclaw/pull/872) 与 [#873](https://github.com/nullclaw/nullclaw/pull/873)，修复了 Zig 0.16 迁移引入的严重回归问题。主要解决了 Gateway 线程 100% CPU 占用（EAGAIN 忙循环）以及 Mattermost 频道静默发送失败（空 body POST）的问题，这对生产环境影响巨大。
    此外，PR [#876](https://github.com/nullclaw/nullclaw/pull/876) 修复了 HTTP/1.1 keep-alive 客户端阻塞问题，PR [#877](https://github.com/nullclaw/nullclaw/pull/877) 修复了 Zig 0.16 下 Writer buffer 刷新时序导致的 POST 失败。

*   **安全与合规：风险分级与防欺骗**
    PR [#875](https://github.com/nullclaw/nullclaw/pull/875) 引入了三级风险分类（高/中/低），将 `curl`、`wget` 等网络工具从“高风险”降级为“中风险”，解决了此前 `curl` 即使在白名单也无法使用的困境（关联 Issue #866）。
    PR [#880](https://github.com/nullclaw/nullclaw/pull/880) 增加了外部内容的防欺骗边界包装，防止 Web 搜索结果中的伪造标记注入。

*   **多模态与互操作性**
    PR [#686](https://github.com/nullclaw/nullclaw/pull/686) 实现了 A2A 协议的多模态支持，允许 Agent 接收和处理图像数据。

## 4. 社区热点
今日讨论最活跃的议题聚焦于底层架构与资源占用优化。

*   **Issue [#882](https://github.com/nullclaw/nullclaw/issues/882): 沙箱后端默认行为重构**
    维护者 @mark-os 提议将 Linux 下的沙箱默认后端改为 Landlock，停止启动时探测外部工具（如 Docker、Firejail）。该提议旨在解决启动时因探测子进程带来的性能损耗和潜在的挂起问题，反映了项目向“轻量化、原生集成”方向的演进思路。

*   **Issue [#871](https://github.com/nullclaw/nullclaw/issues/871): 低资源配置下的 Web Search 实用性**
    用户 @uMendex 指出当前的 `web_search` 在低资源设备上缺乏实用性，呼吁原生支持 DuckDuckGo 而非依赖外部 API 密钥。这反映了 NullClaw 作为轻量级 Agent 框架，用户对其“低依赖、离线/隐私优先”特性的强烈诉求。

## 5. Bug 与稳定性
今日报告并处理的 Bug 主要涉及迁移后的兼容性和资源调度，部分已有修复方案。

*   **[Critical] Gateway CPU 空转与 Mattermost 通讯中断**
    Issue #872/#873 相关修复已合并。由于 Zig 0.16 的 IO 调度机制变化，导致 Gateway 线程忙循环占用 100% CPU，且 Mattermost 消息发送静默失败。
    *状态：已修复 (PR #872, #873, #877)*

*   **[High] HTTP/1.1 Keep-Alive 阻塞**
    Issue #876 指出 `Stream.read()` 的实现导致 Keep-Alive 客户端在第二次请求时阻塞。
    *状态：已修复 (PR #876)*

*   **[Medium] curl 命令执行受限**
    Issue [#866](https://github.com/nullclaw/nullclaw/issues/866) 报告即便 `curl` 在白名单中仍执行失败。这实际上是安全策略过于严格导致。
    *状态：已修复 (PR #875 引入中级风险分类)*

*   **[Medium] CLI 控制字符乱码**
    Issue [#865](https://github.com/nullclaw/nullclaw/issues/865) 报告 CLI 中上下左右键显示为控制字符垃圾，影响操作体验。
    *状态：Open，待修复*

## 6. 功能请求与路线图信号
*   **Web Search 降级支持 (Issue #871):** 用户希望减少对外部 API 的依赖，适配低资源环境。这可能推动项目集成更轻量的搜索后端或 HTML 解析器。
*   **沙箱原生集成 (Issue #882):** 提案移除启动时的外部工具探测，转向 Landlock，意味着项目将进一步降低对外部二进制文件的依赖，提升启动速度和单文件部署的一致性。

## 7. 用户反馈摘要
*   **部署难点：** Issue [#820](https://github.com/nullclaw/nullclaw/issues/820) 显示用户在 Debian 上安装 Zig 仍存在困惑，询问是否必须依赖 Docker，表明文档或安装脚本对非 Rust/Zig 开发者不够友好。
*   **配置困扰：** Issue #865 和 #866 反映了用户对 CLI 交互体验和沙箱安全配置逻辑的困惑，特别是当安全策略阻止了预期的操作时，报错信息或行为不够直观。
*   **轻量化诉求：** 多个 Issue（#871, #882）均指向用户希望在廉价、低功耗设备（如树莓派或旧硬件）上运行项目，对内存占用和 CPU 开销非常敏感。

## 8. 待处理积压
*   **Issue [#820](https://github.com/nullclaw/nullclaw/issues/820) [documentation]:** 持续 19 天未解决。用户对 Zig 环境搭建存在门槛，建议维护者补充 Debian 环境的原生安装指南，减少对 Docker 的依赖提示。
*   **Issue [#871](https://github.com/nullclaw/nullclaw/issues/871) [bug]:** 关于低资源配置下的搜索功能不可用问题，目前仅讨论 2 条，需引起重视。若项目定位包含“边缘设备 Agent”，则此问题是核心阻碍。
*   **PR [#878](https://github.com/nullclaw/nullclaw/pull/878) [open]:** 唯一的待合并 PR，修复 POSIX 线程睡眠问题。虽非严重 Bug，但涉及 OS 层线程调度正确性，建议尽快 Review 合并。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-03)

## 1. 今日速览
IronClaw 项目今日呈现出**高活跃度、架构重构与功能拓展并进**的态势。过去 24 小时内，项目迎来了 44 个 PR 更新（其中 38 个待合并）和 20 个 Issue 更新，显示开发节奏极快。核心开发团队正全力推进代号为 **"Reborn"** 的底层架构大修，密集定义了 Turns、Memory 及 Runtime 的核心接口与边界。与此同时，功能侧重点明显向 **NEAR Intents 交易能力** 倾斜，多个 XL 级 PR 正在构建交易 Agent 的基础设施。稳定性方面，针对 Gemini 模型的兼容性修复和 Docker ARM64 支持成为今日焦点。

## 2. 版本发布
**无新版本发布**。尽管有大量 PR 活动，但截至 2026-05-03 尚未发布新的 Release 版本。当前开发似乎正积攒大量变更，预计将在 "Reborn" 架构核心合并后进行版本迭代。

## 3. 项目进展
今日项目在架构治理和功能增强两方面均有显著突破：

*   **"Reborn" 架构落地取得阶段性成果**：多个关于核心架构定义的 Issue（如 #3144, #3147, #3145）已关闭，表明底层资源限制和审计管道的基础已铺设完毕。随之而来的是更细粒度的架构定义 Issue（#3193 - #3199）被提出，明确了 `TurnCoordinator`、`TurnRunner` 和会话绑定的 API 形状，标志着项目正在从底层重构向业务逻辑迁移。
*   **NEAR Intents 交易生态构建**：社区贡献者提交了系列 PR，旨在构建完整的交易 Agent 闭环。其中 [#3218](nearai/ironclaw/pull/3218) 引入了试用模式，[#3207](nearai/ironclaw/pull/3207) 奠定了交易 Agent 基础，[#3211](nearai/ironclaw/pull/3211) 则规划了付费研究层。这显示出项目正试图将 AI Agent 能力直接转化为链上交易行动。
*   **运维与数据能力增强**：PR [#3177](nearai/ironclaw/pull/3177) 新增了 `ironclaw insights` 命令用于本地分析使用数据，PR [#3178](nearai/ironclaw/pull/3178) 与 [#3186](nearai/ironclaw/pull/3186) 完善了备份与恢复机制，显著提升了单机部署的运维友好度。

## 4. 社区热点
今日讨论重心主要集中在架构设计与关键 Bug 修复上：

*   **架构设计讨论**：Issue [#3016](nearai/ironclaw/issues/3016) 与 [#3013](nearai/ironclaw/issues/3013) 围绕 "Reborn" 架构的核心组件 `AgentLoopHost` 和 `TurnCoordinator` 展开了深入讨论。这反映了核心团队正致力于解决多轮对话中的状态管理与并发控制难题，旨在消除系统切流的阻碍。
*   **关键修复与改进**：PR [#2700](nearai/ironclaw/pull/2700)（修复 Web UI 显示 Hex ID 问题）获得了较多关注。虽然该 PR 处于 Open 状态，但其旨在提升用户体验（将 Hash ID 转化为可读标题），是目前 Web 端最被期待的功能改进之一。
*   **平台支持扩展**：Issue [#3168](nearai/ironclaw/issues/3168) 提出的 ARM64 支持需求引发了积极响应，PR [#3208](nearai/ironclaw/pull/3208) 迅速跟进修复了 Docker 构建矩阵，解决了 Apple Silicon 和树莓派等 ARM 设备的原生运行痛点。

## 5. Bug 与稳定性
今日报告并处理了数个影响使用体验的关键 Bug：

*   **[P1] Gemini 模型兼容性崩溃 (已修复)**：Issue [#3214](nearai/ironclaw/issues/3214) 报告了使用 Gemini 3.x 模型时因 `thoughtSignature` 丢失导致的 HTTP 400 错误。该问题已通过 PR [#3215](nearai/ironclaw/pull/3215) 修复，修复方案在 SSE 处理层进行了针对性补偿。
*   **[P1] DeepSeek 工具调用失效 (待处理)**：Issue [#3201](nearai/ironclaw/issues/3201) 报告配置 DeepSeek 模型时工具调用无法工作。该问题目前处于 Open 状态，建议开发者优先排查 LLM Provider 的适配层。
*   **[P2] 安装程序在 Linux x86_64 失败 (已关闭)**：Issue [#2818](nearai/ironclaw/issues/2818) 指出 v0.26.0 安装脚本在标准 Linux 环境下失败，目前该 Issue 已关闭，推测已在主分支修复。
*   **[P2] Web UI 控制台错误 (持续中)**：Issue [#2344](nearai/ironclaw/issues/2344) 持续追踪 Staging 环境 Web UI 的 CSP 违规与 JS 错误，该问题尚未彻底解决，可能影响前端稳定性。

## 6. 功能请求与路线图信号
从近期活跃的 PR 与 Issue 中可以窥见项目下一阶段的路线图：

*   **NEAR Intents 深度集成**：即将到来的版本极大概率将包含 NEAR Intents 交易功能，包括试玩模式、回测框架及付费研究层，这将成为 IronClaw 区别于普通 AI 助手的关键特性。
*   **Magic Link 邀请入驻**：PR [#3187](nearai/ironclaw/pull/3187) 正在实现基于 Magic Link 的用户入驻流程，暗示项目即将从内部/技术用户测试转向更广泛的 Beta 测试阶段。
*   **跨平台与多模态支持**：Issue [#90](nearai/ironclaw/issues/90) 的活跃表明 Audio Pipeline (STT/TTS) 仍是路线图上的重要一环，是后续实现 WhatsApp 等语音渠道接入的前提。

## 7. 用户反馈摘要
从近期 Issue 评论区提炼出的用户痛点如下：

*   **部署与安装痛点**：用户在 Linux 环境下遭遇安装脚本失败（#2818），且对 Docker 镜像名称的不一致表示困惑（#3217），反映出文档同步与安装体验仍有优化空间。
*   **模型适配焦虑**：用户对非 OpenAI 模型（如 DeepSeek, Gemini）的兼容性非常敏感。Gemini 的 SSE 解析问题（#3214）和 DeepSeek 的工具调用失败（#3201）表明，用户期望项目能提供“开箱即用”的多模型支持，而非仅适配 OpenAI。
*   **身份与个性化**：Issue #3035（PR #3213）反映出用户对 Agent 身份定义有强需求，不希望 AI 忽略用户在设置中定义的名字，显示出用户对 Agent 个性化设定的重视。

## 8. 待处理积压
以下重要 Issue/PR 长期未得到合并或实质性进展，建议维护者关注：

*   **[PR] #2700 Web UI 标题显示优化**：已停留较长时间，涉及数据库与前端联调，对用户体验提升显著，建议优先 Review。
*   **[Issue] #2344 Staging Web UI 控制台报错**：该 Bug Bash 发现的问题自 4 月中旬至今未彻底解决，可能影响前端质量基线。
*   **[Issue] #90 Audio Pipeline**：作为 P1 级功能，自 2 月创建以来进展缓慢，是阻碍语音通道接入的关键卡点。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-03)

## 1. 今日速览
过去24小时内，LobsterAI 项目整体活跃度表现平稳，未产生新的 Issues 或版本发布。项目重点集中在代码维护与功能优化上，共有 4 个 Pull Requests 更新，全部处于待合并状态。其中包含 1 个新提交的 Bug 修复 PR 以及 3 个旧 PR 的重新激活。总体来看，项目目前处于功能迭代与细节打磨阶段，社区互动频率较低，无新增用户反馈。

## 2. 版本发布
无。

## 3. 项目进展
今日虽无 PR 合并入主分支，但有多个重要的功能性修复和更新提交，主要集中在 OpenClaw 集成与模型配置优化：

*   **插件配置保留修复 ([PR #1879](netease-youdao/LobsterAI PR #1879))**：针对 OpenClaw 配置同步逻辑提交了新修复。解决了用户手动安装的社区插件路径（如 `memory-lancedb-pro`）在配置同步时被覆盖丢失的问题，显著提升了插件管理的健壮性。
*   **UI/UX 体验优化 ([PR #1181](netease-youdao/LobsterAI PR #1181))**：修复了 OpenClaw 主代理会话错误显示在用户会话列表中的问题，通过增加隐藏字段清理了 UI 干扰。
*   **模型生态扩展 ([PR #813](netease-youdao/LobsterAI PR #813))**：重新激活了关于小米渠道模型的支持 PR，新增 MiMo V2 Pro 和 Omni 两个视觉模型，扩展了多模态能力。

## 4. 社区热点
由于过去24小时无新开 Issue 且现有 PR 评论数为 0 或 undefined，社区讨论热度较低。主要的关注点集中在代码贡献层面：

*   **配置管理稳定性**：[PR #1879](netease-youdao/LobsterAI PR #1879) 作为一个刚提交的修复，直击用户自定义配置易丢失的痛点，虽然目前尚未有评论，但其修复方向对进阶用户至关重要。
*   **通知系统完善**：[PR #1191](netease-youdao/LobsterAI PR #1191) 针对定时任务通知渠道的选择器体验进行了大修，解决了部分主流 IM 渠道不显示的问题，反映了开发者对自动化任务场景的重视。

## 5. Bug 与稳定性
今日报告/修复的关键 Bug 如下：

*   **[中等] 插件加载路径丢失** ([PR #1879](netease-youdao/LobsterAI PR #1879))
    *   **现象**：`OpenClawConfigSync.sync()` 执行时会覆写 `plugins.load.paths`，导致手动安装的插件失效。
    *   **状态**：已有修复 PR 提交，待审核。
*   **[轻微] 内部会话泄露** ([PR #1181](netease-youdao/LobsterAI PR #1181))
    *   **现象**：OpenClaw 心跳任务产生的内部会话显示在用户列表中，造成困扰。
    *   **状态**：已有修复 PR，通过数据库增加 `hidden` 列解决。
*   **[中等] 定时任务通知渠道选择缺陷** ([PR #1191](netease-youdao/LobsterAI PR #1191))
    *   **现象**：POPO/企业微信渠道不可选，微信误标记为不支持，且显示原始编码。
    *   **状态**：已有修复 PR，重构了过滤逻辑。

## 6. 功能请求与路线图信号
*   **多模态能力增强**：[PR #813](netease-youdao/LobsterAI PR #813) 表明项目正在整合小米 MiMo V2 Pro/Omni 模型。由于这两款模型支持图像输入，这标志着 LobsterAI 正在拓宽其多模态应用场景，可能成为下一版本的重点特性。
*   **自动化任务体验升级**：结合 [PR #1191](netease-youdao/LobsterAI PR #1191) 的改动，项目正在加强对定时任务和 IM 推送的支持，暗示“自动化工作流”是未来路线图的重要方向。

## 7. 用户反馈摘要
过去24小时内无新增 Issue 和评论，无法提取直接的用户反馈。但从 PR 提交信息推断：
*   部分高级用户在使用社区插件时遇到了配置丢失问题。
*   定时任务功能的用户曾反馈过渠道选择困难和技术编码暴露的困扰。

## 8. 待处理积压
以下重要 PR 处于 Open 状态且涉及核心功能，建议维护者优先评审：

*   **[Stale] [PR #813](netease-youdao/LobsterAI PR #813)**：小米渠道模型新增。该 PR 创建于 3 月，昨日重新更新，涉及模型服务商扩展，建议尽快合并以丰富模型库。
*   **[Stale] [PR #1191](netease-youdao/LobsterAI PR #1191)**：定时任务通知修复。涉及多个硬编码逻辑的移除，对用户体验提升明显，建议尽快推进合并。
*   **[New] [PR #1879](netease-youdao/LobsterAI PR #1879)**：插件路径修复。直接影响插件生态的稳定性，建议优先验证合并。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-03)

## 1. 今日速览
Moltis 项目今日保持活跃态势，社区互动频繁但缺乏核心维护者的即时响应。过去 24 小时内新增 4 条 Issue 且无 1 条关闭，显示出 Bug 积压与功能需求增长快于解决速度。代码贡献方面，虽然仅有 1 个 PR 合并/关闭，但关键的基础设施 PR (#942) 持续更新，表明项目正在深化云端部署能力。整体来看，项目正处于功能扩展期，但对新兴模型（如 DeepSeek）的兼容性维护面临挑战。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目在国际化与基础设施支持方面取得了具体进展：
*   **国际化支持落地**：PR #339 [feat(i18n): add zh-TW Traditional Chinese locale support](https://github.com/moltis-org/moltis/pull/339) 已关闭。该 PR 为项目引入了繁体中文（台湾）的完整支持，涵盖 UI 字符串与语言检测逻辑，提升了项目在华语地区的可用性。
*   **云部署架构优化**：PR #942 [feat(sandbox): remote & multi-backend sandbox support](https://github.com/moltis-org/moltis/pull/942) 于今日再次更新。该 PR 旨在解决 Docker-in-Docker 在云平台受限的问题，引入了对 Vercel、Daytona 等后端的支持。这是一项关键的架构改进，将大幅降低用户在云环境下的部署门槛。

## 4. 社区热点
今日社区关注度最高的 Issue 为：
*   **#959 [Bug]: DeepSeek - Error: The reasoning_content in the thinking mode...** (链接: [moltis-org/moltis Issue #959](https://github.com/moltis-org/moltis/issues/959))
    *   **热度信号**：唯一有评论互动（1条）的 Issue。
    *   **诉求分析**：用户在使用 DeepSeek 模型的“思考模式”时遇到 API 报错。这反映了用户对集成最新推理模型的强烈需求，以及项目在处理特定模型流式响应逻辑上的兼容性缺口。

## 5. Bug 与稳定性
今日新增 1 个确认的功能性 Bug，暂无修复 PR 提交：
*   **🟠 中等严重度**：[#959 [bug] DeepSeek reasoning_content 传递错误](https://github.com/moltis-org/moltis/issues/959)
    *   **详情**：在调用 DeepSeek 思考模式时，未正确回传 `reasoning_content` 导致 API 报错。
    *   **影响**：直接阻断用户使用 DeepSeek 模型的核心推理功能，影响体验。
    *   **状态**：OPEN，暂无 Fix PR。
*   **🟢 低严重度**：[#958 [documentation] Local TTS Provider 文档链接失效](https://github.com/moltis-org/moltis/issues/958)
    *   **详情**：文档指向了已归档或不再维护的 TTS 仓库。
    *   **影响**：用户搭建本地语音服务时可能迷失方向。

## 6. 功能请求与路线图信号
用户对新模态集成和 Agent 信任机制表现出浓厚兴趣：
*   **图像生成能力扩展**：Issue #956 [Feature]: Add image generation support (gpt-image-2) via OpenAI Codex OAuth](https://github.com/moltis-org/moltis/issues/956)。用户希望通过现有的 OAuth 机制快速接入图像生成功能，表明用户期待 Moltis 成为多模态的一站式工作台。
*   **Agent 信任体系构建**：Issue #960 [Add SwarmScore — Portable Trust Rating for AI Agents](https://github.com/moltis-org/moltis/issues/960)。这是一个来自外部的合作提议/Feature Request，建议集成可移植的 Agent 信誉评分系统。这暗示了项目未来可能在 Agent 互操作性或安全评估方向上扩展。
*   **潜在路线图关联**：正在进行的 PR #942 (Remote Sandbox) 若合并，将为上述功能在云端运行提供更稳定的沙箱环境，二者存在底层依赖关系。

## 7. 用户反馈摘要
从今日 Issues 中提炼出的用户痛点如下：
*   **模型兼容性痛点**：用户不仅满足于 GPT 系列，急切希望使用 DeepSeek 等开源/推理增强模型，但目前的适配不够完善（如 #959）。
*   **部署与配置困难**：文档中引用的第三方工具（如 Local TTS）维护状态滞后，导致用户在自行配置复杂本地环境时容易踩坑（如 #958）。
*   **功能集成期待**：用户倾向于项目集成更多“开箱即用”的高级功能（如 OAuth 授权下的图像生成），而非简单的 API 转发。

## 8. 待处理积压
*   **PR #942 (Remote Sandbox)**：该 PR 创建于 4 月 30 日，今日虽更新但尚未合并。鉴于其对云部署架构的重大影响，建议维护者尽快进行最终审查或提供合并时间表，以免阻碍后续云相关功能的开发。
*   **DeepSeek 兼容性问题 (#959)**：作为高优先级的运行时错误，建议维护者尽快确认修复方案或提供临时 workaround，以免影响相关用户群体的使用。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-05-03)

## 1. 今日速览
CoPaw (数据源项目名: QwenPaw) 今日保持高活跃度，社区互动频繁。过去24小时内，Issues 更新达 13 条，其中绝大多数为新增或活跃讨论，PR 更新 11 条，显示项目正处于功能快速迭代与生态扩充期。社区对**模型稳定性（Fallback机制）**和**多端体验一致性**的关注度显著提升，多位新贡献者提交了涉及国际化、底层修复和新模型支持的 PR。目前待合并 PR 积压较多（10个），项目维护节奏紧凑。

## 2. 版本发布
- **无新版本发布**。
- **注意**：存在一个关于版本号更新的 PR (#4012) 已关闭，建议关注后续是否有正式 Release 动态。

## 3. 项目进展
今日仅有 1 个 PR 关闭/合并，但待处理队列中包含多个高质量贡献，预示下一版本将有重要更新：

- **版本准备**：PR [#4012](https://github.com/agentscope-ai/QwenPaw/pull/4012) (chore: bumping version to 1.1.6b1) 已关闭。虽然当前 Release 列表为空，但这通常意味着 v1.1.6 测试版或正式版即将发布。
- **稳定性增强**：PR [#4007](https://github.com/agentscope-ai/QwenPaw/pull/4007) 修复了长期记忆索引失效 (#3182) 和配置同步 (#3828) 两个关键 Bug，并引入了 `MemoryHook` 增强记忆管理，预计将显著提升 Agent 的上下文记忆能力。
- **生态扩展**：PR [#3994](https://github.com/agentscope-ai/QwenPaw/pull/3994) 新增火山引擎及其 Coding Plan Provider 支持，拓展了国内模型生态。
- **国际化**：PR [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) 新增巴西葡萄牙语 支持。
- **工具增强**：PR [#3911](https://github.com/agentscope-ai/QwenPaw/pull/3911) 添加 GPT image 2 工具插件；PR [#3999](https://github.com/agentscope-ai/QwenPaw/pull/3999) 增加了 CLI skill 测试命令，提升了开发者调试体验。

## 4. 社区热点
今日讨论最热烈的话题集中在**服务稳定性**与**交互体验**：

- **[Bug] Agent 假死问题**：Issue [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) 引起了最多关注（6条评论）。用户反馈 MCP client 内部 TaskGroup 异常导致 Agent 无响应但不报错，这直接影响了生产环境的可用性，目前官方正在排查中。
- **[Feature] 模型 Fallback 机制**：Issue [#1327](https://github.com/agentscope-ai/QwenPaw/issues/1327) 和 Issue [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011) 均呼吁增加“模型降级/回退链”功能。社区普遍希望在主模型触发限流或宕机时，能自动切换到备用模型，这是当前高频请求的功能缺口。
- **[Feature] 多端控制优化**：Issue [#4010](https://github.com/agentscope-ai/QwenPaw/issues/4010) 关于“飞书、微信端支持打断/终止功能”的请求已关闭（可能已纳入计划或通过其他方式解决），反映了用户对即时通讯渠道控制权的迫切需求。

## 5. Bug 与稳定性
按严重程度排序，今日报告的关键问题如下：

- **严重**:
    - **Agent 假死**：Issue [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) 报告程序在执行任务后进入“假死”状态，控制台正常但无响应，严重影响用户体验。
    - **Ollama 架构兼容异常**：Issue [#4003](https://github.com/agentscope-ai/QwenPaw/issues/4003) 指出在 Apple M5 Pro 上，子进程错误地以 i386 架构运行，导致原生 ARM 工具（如 Ollama）无法调用。
- **中等**:
    - **Ollama 记忆丢失**：Issue [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) 指出 Ollama 频道无法携带对话历史，每轮对话被视作新请求。*(注：PR #4007 的 MemoryHook 修复可能与此相关)*
    - **MiniMax 兼容性**：Issue [#4006](https://github.com/agentscope-ai/QwenPaw/issues/4006) 报告 OpenAI-Compatible Provider 未正确过滤 MiniMax 模型的推理内容。

## 6. 功能请求与路线图信号
根据 Issues 和活跃 PRs 分析，项目未来版本可能侧重以下方向：

1.  **高优先级：模型容灾机制**。多个 Issue (如 [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011), [#3789](https://github.com/agentscope-ai/QwenPaw/issues/3789)) 均提出备用模型切换需求，社区对服务连续性的呼声很高。
2.  **用户体验优化**：Issue [#4002](https://github.com/agentscope-ai/QwenPaw/issues/4002) 提出极具创新性的“可视化共享区域”，支持用户与 AI 进行图形化（框选、标注）交互；Issue [#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001) 请求支持删除单条消息以管理上下文。
3.  **测评与观测**：Issue [#4008](https://github.com/agentscope-ai/QwenPaw/issues/4008) 提出企业级需求，希望支持 Agent 测评功能及完整聊天记录导出，以便于向管理层汇报和效果对比。
4.  **配置智能化**：Issue [#4004](https://github.com/agentscope-ai/QwenPaw/issues/4004) 建议根据模型上下文窗口自动推断 `max_input_length`，解决手动配置不当导致的截断或过早压缩问题。

## 7. 用户反馈摘要
- **痛点**：本地模型（Ollama）的适配问题是重灾区，涉及架构兼容性、记忆上下文丢失等，表明本地部署场景仍需打磨。
- **场景**：用户正尝试将 QwenPaw 接入企业生产环境（如钉钉、微信、飞书），对稳定性、日志审计和测评功能有明确需求。
- **满意度**：用户对 Console 的基础对话功能表示认可，但对多端（微信与浏览器）状态不同步（Issue [#4000](https://github.com/agentscope-ai/QwenPaw/issues/4000)）表示困惑，期望跨端体验更一致。

## 8. 待处理积压
- **长期未解决的 Feature Request**：Issue [#1327](https://github.com/agentscope-ai/QwenPaw/issues/1327)（模型 Fallback 链）自 3 月创建以来持续活跃，建议维护者优先评估。
- **待审核 PRs**：目前有 10 个待合并 PR，其中 PR [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525)（Discord 线程支持）和 PR [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831)（向量模型连接测试）已停留较长时间（创建于 4 月中下旬），建议维护者尽快 Review 以避免贡献者流失。

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