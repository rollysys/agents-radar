# OpenClaw 生态日报 2026-05-31

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-31 04:06 UTC

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

# OpenClaw 项目动态日报 (2026-05-31)

## 1. 今日速览
OpenClaw 项目在过去 24 小时内保持了极高的活跃度，Issues 与 PR 更新量均达到 500 条，显示出社区与开发团队的高频互动。项目今日发布了 `v2026.5.30-beta.1`，核心修复集中在 Agent 运行时恢复机制与多渠道消息投递的稳定性上。社区讨论热点主要围绕近期版本升级带来的渠道兼容性问题（特别是 Feishu 和 Telegram）以及特定模型提供商（Gemini, Anthropic）的集成 Bug。总体来看，项目正处于快速迭代修复期，重点解决 v2026.5.x 系列引入的回归问题。

## 2. 版本发布
今日发布 2 个新版本：

- **v2026.5.30-beta.1**
  - **Highlights**:
    - **运行时恢复增强**：Agents 和 CLI 支持的运行时现在能更干净地从工具调用中断、过期会话绑定、压缩切换和媒体投递重试中恢复。
    - **渠道稳定性**：提升了 Telegram, WhatsApp, iMessage, Slack 等渠道的移动端投递稳定性。
  - **相关 PRs**: #88129, #88136, #88141, #88162, #88182

- **v2026.5.28**
  - **Highlights**:
    - **稳定性修复**：Agent 和 Codex 运行时恢复更加稳健，修复了子代理工作空间隔离、Hook 上下文保持、会话锁释放等问题，避免了 Codex app-server/helper 故障导致的崩溃。

## 3. 项目进展
今日有多个关键修复 PR 正在推进或已合并，显著提升了系统的健壮性：

- **[PR #88511]**(https://github.com/openclaw/openclaw/pull/88511): 修复 `auth.cooldowns` 配置变更导致网关全量重启的问题，改为无操作重载，防止丢消息。
- **[PR #88512]**(https://github.com/openclaw/openclaw/pull/88512): 修复 Google Gemini 模型错误路由到 OpenAI transport 导致 401 错误的问题。
- **[PR #88485]**(https://github.com/openclaw/openclaw/pull/88485): 增加了对消失工作空间的保护，防止静默重新初始化。
- **[PR #83933]**(https://github.com/openclaw/openclaw/pull/83933): 修复了 cron 任务手动运行被误删除及计数器被污染的问题。
- **[PR #75128]**(https://github.com/openclaw/openclaw/pull/75128): 修复了启动指令 `BOOT.md` 可能泄露给用户的安全问题（Wrap BOOT.md in internal-runtime-context）。

## 4. 社区热点
今日讨论最热烈的 Issues 集中在集成与升级故障：

- **[Issue #87646](https://github.com/openclaw/openclaw/issues/87646) [CLOSED]**: **Feishu 渠道升级后无法发送消息**。用户升级至 v2026.5.27 后出现 `TypeError: Cannot read properties of undefined`，导致飞书 Bot 无法工作。该 Issue 评论数达 12 条，属于 P1 级故障，现已关闭。
- **[Issue #86820](https://github.com/openclaw/openclaw/issues/86820) [CLOSED]**: **Codex OAuth 压缩回退失败**。在使用 GPT-5.5 时，OAuth 配置在压缩过程中错误回退到直连 OpenAI API，导致无 Key 报错。
- **[Issue #87307](https://github.com/openclaw/openclaw/issues/87307) [OPEN]**: **Matrix 线程回复行为回退**。升级后 Matrix 回复不再作为线程回复发送，且状态命令静默。
- **[Issue #86169](https://github.com/openclaw/openclaw/issues/86169) [CLOSED]**: **请求支持 Xiaomi MiMo Token Plan**。用户希望增加对小米 MoE 模型的 Token Plan 支持。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的严重 Bug：

- **P1 - 运行时与状态管理**:
  - **[Issue #88443](https://github.com/openclaw/openclaw/issues/88443)**: `auth.cooldowns` 变更强制触发全量网关重启，导致进行中的 CLI 运行丢失。已有 Fix PR [#88511](https://github.com/openclaw/openclaw/pull/88511)。
  - **[Issue #87744](https://github.com/openclaw/openclaw/issues/87744)**: Codex 支持的 Telegram 会话反复超时，无法到达完成状态。
  - **[Issue #88020](https://github.com/openclaw/openclaw/issues/88020)**: Anthropic "thinking block" 签名过期导致会话硬性失败，未能自动重试恢复。

- **P1 - 模型提供商**:
  - **[Issue #88480](https://github.com/openclaw/openclaw/issues/88480)**: Google Gemini 聊天模型被错误路由到 OpenAI transport，导致 401 错误。已有 Fix PR [#88512](https://github.com/openclaw/openclaw/pull/88512)。
  - **[Issue #87641](https://github.com/openclaw/openclaw/issues/87641)**: `opencode-go/kimi-k2.6` 多轮任务出现 400 错误并回退。

- **P2 - 渠道问题**:
  - **[Issue #73424](https://github.com/openclaw/openclaw/issues/73424)**: 图像工具预处理管道频繁报错 "Failed to optimize image"。
  - **[Issue #77116](https://github.com/openclaw/openclaw/issues/77116)**: 飞书渠道在 v2026.5.2 后因字段不兼容导致网关崩溃循环。

## 6. 功能请求与路线图信号
- **架构重构**: [PR #81402](https://github.com/openclaw/openclaw/pull/81402) 正在推进将运行时状态迁移至 SQLite，这将解决目前 JSON/JSONL 文件分散存储带来的状态一致性问题，是重大的底层重构。
- **增强支持**: [Issue #86169](https://github.com/openclaw/openclaw/issues/86169) 显示用户对国产模型（Xiaomi MiMo）的支持需求增加，项目生态正在扩展更多非标准 API 提供商。
- **体验优化**: [PR #87072](https://github.com/openclaw/openclaw/pull/87072) 计划为 Telegram 引入交错的进度显示通道，提升 Bot 在移动端的交互体验。

## 7. 用户反馈摘要
- **升级痛点**: 多数负面反馈集中在 v2026.5.x 系列升级后的破坏性变更，如飞书渠道彻底不可用（#87646）、配置迁移导致网关启动失败等。用户建议增强 `openclaw doctor` 的自动修复能力。
- **长会话稳定性**: 使用 Codex 后端的长时任务在 Anthropic 签名过期或上下文压缩时容易中断，用户期望更鲁棒的自动恢复机制（#88020, #87744）。
- **模型路由混乱**: 部分用户反映配置 Google 等提供商时，系统仍错误地调用 OpenAI 接口，导致难以排查的认证错误（#88480）。

## 8. 待处理积压
- **[Issue #73424](https://github.com/openclaw/openclaw/issues/73424)**: 图像优化工具报错问题长期未解决，影响多模态体验。
- **[Issue #65156](https://github.com/openclaw/openclaw/issues/65156)**: 内存向量搜索因 SQLite ABI 不匹配完全失效，需关注修复进度。
- **[PR #81402](https://github.com/openclaw/openclaw/pull/81402)**: SQLite 状态迁移重构 PR 体积巨大，涉及多处核心逻辑，需社区重点 Review 以确保兼容性。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-05-31)

## 1. 生态全景
当前 AI 智能体开源生态正处于**从单一对话向多模态、多智能体编排演进**的关键转折期。头部项目（如 OpenClaw, Zeroclaw）正极力突破**Computer-Use（屏幕交互）**与**全双工语音**等技术瓶颈，同时**安全性（MCP 工具管控、沙箱隔离）**与**长程记忆稳定性**成为社区关注的焦点。底层架构上，项目普遍开始告别简单的文件存储，向 **SQLite/分布式状态管理** 迁移，以解决智能体在复杂任务中的状态一致性问题。整体生态呈现出"功能快速迭代与稳定性回归并存"的特征，Windows 平台兼容性与跨渠道会话连续性仍是普遍痛点。

## 2. 各项目活跃度对比

| 项目名称 | Issues 动向 | PRs 动向 | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500+ 更新，修复为主 | 500+ 更新，高频合并 | **v2026.5.30-beta.1** | 🟢 **极高** (核心修复期，社区响应极快) |
| **Zeroclaw** | 22 Open, 28 Closed | 29 Merged | 无 | 🟢 **极高** (功能迭代与安全加固并重) |
| **Hermes Agent** | ~50 更新 | ~50 更新, 11 Merged | 无 | 🟢 **高** (跨平台与多智能体编排进展显著) |
| **IronClaw** | 低活跃 | 18 更新, 11 Merged | 无 (发布滞后⚠️) | 🟡 **中高** (核心开发活跃，但发布流程阻塞) |
| **NanoBot** | 6 更新 (4 Closed) | 18 更新, 6 Merged | 无 | 🟢 **高** (高质量维护，安全修复及时) |
| **NanoClaw** | 3 更新 | 16 更新, 4 Closed | 无 | 🟡 **中** (多用户支持开发中，供应链风险受关注) |
| **CoPaw** | 9 更新 (8 Open) | 1 Open | 无 | 🟡 **中** (Windows 平台问题积压明显) |
| **PicoClaw** | 7 更新 | 12 更新 (0 Merged) | Nightly Build | 🟠 **低** (v0.2.9 存在严重回归，PR 停滞) |
| **EasyClaw** | 无活动 | 无公开活动 | **3 Releases** | 🟡 **中** (闭门开发模式，迭代快但社区沉寂) |
| **Moltis** | 无活动 | 1 Open | 无 | ⚪ **低** (仅核心修复，社区静默) |
| **LobsterAI** | 无活动 | 2 Stale PRs | 无 | 🔴 **停滞** (仅有陈旧 PR 更新，无实质进展) |
| **TinyClaw / ZeptoClaw / NullClaw** | 无活动 | 无活动 | 无 | ⚪ **静默** |

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照项目**，OpenClaw 展现出了"操作系统"级别的复杂度与枢纽地位。

*   **优势对比**：相比 Zeroclaw 侧重前沿交互（语音/Computer-Use）和 Hermes Agent 侧重编排层，OpenClaw 的核心优势在于其**运行时的健壮性**（Runtime Recovery）和对**长尾渠道**（Feishu, iMessage, Matrix）的广泛兼容。其 v2026.5.30-beta.1 版本对"中断恢复"、"会话锁"的修复，确立了其作为稳定基座的位置。
*   **技术路线差异**：OpenClaw 正在经历艰难的**状态管理重构**（PR #81402 迁移至 SQLite），旨在解决 JSON 文件存储带来的状态一致性问题，这比 NanoBot 的轻量级 RAG 记忆更为底层和激进。
*   **社区规模**：单日 500+ 的 Issue/PR 更新量远超其他项目总和，显示出其拥有最庞大的用户基数和贡献者梯队，但也承受着最大的版本回归压力。

## 4. 共同关注的技术方向

多项目社区动态揭示了行业共同的技术痛点与演进方向：

1.  **MCP 工具安全性与沙箱隔离** (Hermes, Zeroclaw, NanoClaw)
    *   **诉求**：社区强烈要求解决 AI Agent 自由调用工具带来的风险。
    *   **体现**：Hermes (#16462) 讨论 MCP 工具"零审批"风险；Zeroclaw (#6914) 推进沙箱执行模型；NanoClaw (#2641) 曝光供应链攻击风险。安全性已超越功能实现成为首要考量。

2.  **上下文与记忆管理架构升级** (OpenClaw, NanoBot, IronClaw)
    *   **诉求**：长期记忆不再满足于简单的向量检索，转向结构化存储与精准剪枝。
    *   **体现**：OpenClaw 推进 SQLite 状态迁移；NanoBot 引入轻量级 RAG 与手动记忆模式；IronClaw 实现结构化上下文压缩。大家都在试图解决"长对话后失忆"的问题。

3.  **Computer-Use 与多模态交互** (Zeroclaw, Hermes, CoPaw)
    *   **诉求**：Agent 从"对话"走向"操作"。
    *   **体现**：Zeroclaw 落地全双工语音与屏幕控制；Hermes 整合 WhatsApp 桥接；CoPaw 探索新消息处理策略。Agent 正在具备听、看、操作电脑的能力。

4.  **Windows 平台兼容性** (Hermes, CoPaw, PicoClaw)
    *   **诉求**：解决在 Windows 环境下的 Shell 执行、路径处理等顽疾。
    *   **体现**：Hermes 修复 Browser Tool 在 Windows 的截断问题；CoPaw 的控制台窗口闪烁问题被高频反馈。Windows 端体验仍是开源项目的短板。

## 5. 差异化定位分析

| 维度 | **第一梯队 (OpenClaw, Zeroclaw)** | **第二梯队 (Hermes, NanoBot, IronClaw)** | **第三梯队 (PicoClaw, CoPaw, NanoClaw)** |
| :--- | :--- | :--- | :--- |
| **核心定位** | **全能型基座** / **企业级应用** | **编排专家** / **安全卫士** / **架构重构者** | **特定平台** / **垂直场景** |
| **功能侧重** | 极致的渠道兼容性、运行时恢复 | 多智能体协作、MCP 安全、架构解耦 | 桌面端体验、轻量化部署、多用户支持 |
| **目标用户** | 生产环境运维、企业集成开发者 | AI 应用架构师、复杂任务开发者 | 个人极客、家庭实验室用户、初级开发者 |
| **技术架构** | 复杂微服务化，SQL化状态管理 | 插件化 Runtime，沙箱隔离 | 依赖现有生态，轻量适配 |
| **典型特征** | 修复速度快，回归风险高 | 架构调整大，底层创新多 | 稳定性问题多，响应速度不一 |

## 6. 社区热度与成熟度

*   **快速迭代期**：**OpenClaw, Zeroclaw, Hermes Agent**。
    这些项目处于功能爆发期，Issues 和 PRs 活跃度极高。OpenClaw 正在疯狂修补 v2026.5.x 的稳定性漏洞；Zeroclaw 则在攻克语音和屏幕交互难题；Hermes Agent 快速扩展 WhatsApp 等新渠道。社区反馈极其热烈，但也伴随着较高的版本不稳定风险。

*   **质量巩固期**：**NanoBot, IronClaw**。
    这两个项目正在经历深度的底层重构。NanoBot 专注于并发安全与 SSRF 防护；IronClaw 重构 WebUI 认证与 Reborn 架构。虽然 Issue 数量不如第一梯队，但提交的代码质量高，关注系统健壮性，适合追求稳定的开发者跟进。

*   **停滞/调整期**：**PicoClaw, LobsterAI, EasyClaw**。
    PicoClaw 和 LobsterAI 遭遇了严重的社区响应滞后问题，PR 合并率为零，存在严重的版本回归未被修复。EasyClaw 呈现"闭源开发"特征，虽然发布频繁，但社区互动为零，属于典型的商业化导向或单人维护模式。

## 7. 值得关注的趋势信号

1.  **"状态管理"正在成为新的护城河**
    从 OpenClaw 的 SQLite 迁移到 IronClaw 的中断控制，社区正意识到简单的 KV 存储已无法支撑 Agent 复杂的任务流。**结构化的状态持久化与恢复机制**将是下一阶段 Agent 框架的核心竞争力。

2.  **MCP (Model Context Protocol) 安全红线确立**
    随着工具调用能力的增强，Agent 的破坏力也随之增加。Zeroclaw 和 Hermes 的社区讨论显示，**默认拒绝、细粒度审批、沙箱执行** 正在成为 Agent 调用系统工具的标准安全范式，而非早期的"宽松体验优先"。

3.  **用户对"升级恐惧"的加剧**
    OpenClaw (#87646) 和 PicoClaw (#2972) 的用户反馈表明，用户对升级持谨慎态度。破坏性变更（如配置不兼容、渠道失效）直接打击了用户信心。未来的趋势将是**无痛升级**与**配置迁移工具**（如 `doctor` 命令增强）将成为刚需。

4.  **Computer-Use 从实验走向实用**
    Zeroclaw 的桌面端权限检测与 Hermes 的 Browser Tool 修复表明，屏幕操控能力正从 Demo 阶段转向解决实际工程问题（权限、Shell 兼容性）。预计未来一个月内，会有更多项目跟进桌面端自动化能力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-31)

## 1. 今日速览
NanoBot 项目今日保持**高活跃度**与**高质量的维护节奏**。过去24小时内，项目共处理了 6 条 Issues（关闭 4 条）和 18 条 Pull Requests（合并 6 条），显示出维护团队对社区反馈的快速响应能力。核心进展集中在**安全性加固**（WebSocket 认证、SSRF 防护）、**并发稳定性修复**以及**生态兼容性提升**（Matrix SAS 验证、Anthropic API 兼容）。虽然无新版本发布，但主分支已积累大量重要修复，预计将在近期发布更新。

## 2. 版本发布
*   **无新版本发布**。虽然今日无正式 Release，但多项关键修复（如并发锁、API兼容性）已合并至主分支，建议关注后续 Tag 更新。

## 3. 项目进展
今日共有 6 个 PR 成功合并，显著提升了系统的安全性与稳定性：

*   **安全性加固**：
    *   PR #4086 修复了 SSRF 检查中 IPv6 映射 IPv4 地址的绕过风险，提升了网络安全防护能力。
    *   PR #4106 加强了 Matrix 频道的入站媒体下载限制，防止无限制的媒体文件物质化，修复了潜在的资源耗尽风险。
*   **核心稳定性修复**：
    *   PR #4104 修复了 `process_direct` 绕过会话锁的严重 Bug，避免了并发处理导致的历史记录损坏问题。
    *   PR #4054 解决了 Anthropic 提供商因 content block 缺少 type 字段而报错的问题，并增加了 Dream 系统作业的全局开关，提升了 API 兼容性与配置灵活性。
*   **生态兼容性**：
    *   PR #4110 新增了 Matrix SAS 设备验证支持，解决了 Element X 等客户端因“未验证设备”警告导致的 E2EE 消息信任问题。
*   **前端体验优化**：
    *   PR #4108 重构了 WebUI 的输出时间线，优化了模型控制流，提升了交互体验。

## 4. 社区热点
今日讨论最活跃的功能增强主要集中在系统可配置性与易用性方面：

*   **Issue #3885 [CLOSED]**: 用户请求为 Dream 系统作业添加全局开关。该 Issue 获得了较多关注，反映了用户对后台任务资源占用的关切。维护者迅速响应并通过 PR #4054 合并了相关代码，体现了对用户诉求的高效落地。
    *   链接: [HKUDS/nanobot Issue #3885](https://github.com/HKUDS/nanobot/issues/3885)
*   **Issue #4042 [CLOSED]**: 针对 Element X 客户端 E2EE 加密警告的问题，引发了关于 Matrix 协议兼容性的讨论。PR #4110 的合并标志着对主流 Matrix 客户端支持的重大进展。
    *   链接: [HKUDS/nanobot Issue #4042](https://github.com/HKUDS/nanobot/issues/4042)

## 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，主要集中在并发逻辑和通知逻辑上：

*   **[已修复] 并发竞态条件 (High)**:
    *   **Issue #4080**: `process_direct` 绕过会话锁导致并发冲突，可能损坏历史记录。
    *   **状态**: 已由 PR #4104 修复并合并。
    *   链接: [HKUDS/nanobot Issue #4080](https://github.com/HKUDS/nanobot/issues/4080)
*   **[待合并] Heartbeat 误报**:
    *   **Issue #4111**: Heartbeat 定时任务在无任务时错误发送 "All clear." 到飞书，造成用户困扰。
    *   **状态**: 已有修复 PR #4114 和优化 PR #4112，待合并。
    *   链接: [HKUDS/nanobot Issue #4111](https://github.com/HKUDS/nanobot/issues/4111)
*   **[已修复] API 兼容性错误**:
    *   **Issue #3993**: Anthropic API 强制要求 content block 声明 type，导致部分工具返回报错。
    *   **状态**: 已由 PR #4054 修复并合并。
    *   链接: [HKUDS/nanobot Issue #3993](https://github.com/HKUDS/nanobot/issues/3993)

## 6. 功能请求与路线图信号
今日涌现出多个高质量的功能 PR，预示着项目下一阶段的发展方向：

*   **记忆系统重构**: PR #4050 (手动记忆模式) 和 PR #4109 (轻量级 RAG 记忆检索) 正在推进。这表明 NanoBot 正致力于从单一的自动记忆向可配置、检索增强的记忆架构演进，以满足复杂场景下的上下文管理需求。
    *   链接: [HKUDS/nanobot PR #4050](https://github.com/HKUDS/nanobot/pull/4050)
    *   链接: [HKUDS/nanobot PR #4109](https://github.com/HKUDS/nanobot/pull/4109)
*   **多模态与模型支持**: PR #4113 提议增加 OpenRouter 语音转文字支持，PR #3994 引入了注册表驱动的 Provider 配置字段。这显示了项目正积极扩展多模态能力，并优化多模型接入的配置体验。
    *   链接: [HKUDS/nanobot PR #4113](https://github.com/HKUDS/nanobot/pull/4113)
*   **沙箱安全性**: Issue #4107 请求支持 bwrap 沙箱的自定义绑定挂载，PR #4099 已提交文件系统额外根目录的只读限制。项目在沙箱隔离的细粒度控制上正在持续投入。
    *   链接: [HKUDS/nanobot Issue #4107](https://github.com/HKUDS/nanobot/issues/4107)

## 7. 用户反馈摘要
*   **资源控制需求**: 用户希望对后台任务（如 Dream 作业）有更精细的控制权，不希望默认启动的 Cron 任务占用资源（Issue #3885）。
*   **客户端兼容痛点**: Matrix 用户在使用 Element X 时遭遇设备验证阻碍，表明在去中心化协议的客户端适配方面仍有提升空间（Issue #4042）。
*   **沙箱灵活性**: 高级用户在使用 bwrap 沙箱时遇到硬编码路径限制，希望开放更多自定义挂载点，以适应复杂的开发环境（Issue #4107）。

## 8. 待处理积压
*   **Issue #4111 (Heartbeat Bug)**: 虽已有 PR #4114 提出修复方案，但尚未合并。该问题会导致飞书用户收到无效通知，建议维护者优先 Review 并合并相关 PR。
    *   链接: [HKUDS/nanobot Issue #4111](https://github.com/HKUDS/nanobot/issues/4111)
*   **PR #3992 (跨实例消息总线)**: 该 PR 提议实现多智能体协作的消息总线，是一项较大的架构变更。目前处于开启状态，建议社区关注其对系统架构的长期影响。
    *   链接: [HKUDS/nanobot PR #3992](https://github.com/HKUDS/nanobot/pull/3992)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-31)

## 1. 今日速览
Zeroclaw 项目今日保持极高的开发活跃度，Issues 关闭数（28条）超过新开数（22条），显示出维护团队强大的需求消化能力。核心进展集中在**全双工语音交互**与**桌面端 Computer-Use 能力**两大战略方向，相关 PR 已大规模合并。安全与多租户隔离机制成为社区讨论焦点，针对 MCP 工具管控和权限校验的高优 Issue 表明项目正向企业级安全标准迈进。整体来看，项目正处于功能迭代与安全性加固并重的关键阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 29 个 PR 被合并或关闭，主要推进了以下关键模块：

*   **语音交互全双工支持落地**：合并了 PR #5974、#5976、#5978，成功实现了 WebSocket 二进制音频帧处理、能量检测 VAD（语音活动检测）及语音捕获缓冲。这标志着 Issue #5896 提出的“类电话通话体验”正式进入可用阶段，解决了长期以来的半双工交互瓶颈。
*   **桌面端 Computer-Use 与权限体系完善**：PR #6761 系列合并，引入了 macOS 下的 Accessibility、屏幕录制、麦克风及输入监控权限的自动化检测与恢复流，并增加了点击、键盘输入等 UI 控制能力。这为 Issue #6909 提出的屏幕交互功能奠定了坚实基础。
*   **API 规范化与消息构造重构**：PR #6951 合并，引入了 `ChannelMessage::new` 和 `SendMessage::reply_to` 构造器，统一了多渠道（Email、WeCom 等）的消息回复构建逻辑，显著降低了代码维护成本。
*   **桌面端菜单栏功能对齐**：集中关闭了 #6321 至 #6329 等一系列桌面端 Feature Request，涵盖了工具审批、会话历史、全局快捷键等功能，桌面客户端体验已与 Web 端趋于一致。

## 4. 社区热点
今日讨论最热烈的话题集中在多租户安全与桌面交互能力：

*   **多租户隔离与安全模型**：Issue #5982（评论 8 条）引发高度关注，建议引入 Per-sender RBAC 以支持不同用户角色的独立工作空间与工具集。这反映了企业用户将 Zeroclaw 用于生产环境时的强烈隔离需求。
*   **Computer-Use（屏幕交互）**：Issue #6909（评论 4 条）提议对标 OpenAI Codex/Peekaboo 的屏幕控制能力。鉴于今日相关桌面端 PR 的合并，该功能已具备初步雏形，社区期待值极高。
*   **调度器架构缺陷**：Issue #6954（评论 3 条）指出当前 Cron 调度器绕过了 Orchestrator 管道，导致上下文丢失和一系列 Bug。RFC 提出将调度任务纳入主消息流，属于底层架构的重大修正。

## 5. Bug 与稳定性
今日报告了多个影响生产环境稳定性的关键 Bug，需引起注意：

*   **P1 级严重 Bug**：
    *   **模型兼容性崩溃**：Issue #7022 指出 Kimi 模型因硬编码 `temperature: 0.7` 导致 400 错误，阻碍了工作流运行。目前已有 Issue 提出但尚未见修复 PR。
    *   **工具权限校验失效**：Issue #6876 揭示 `risk_profile.allowed_tools` 仅限制内置工具，对 MCP 工具无效，存在严重安全隐患。Issue #6914 进一步指出主循环未强制执行工具白名单。
    *   **子进程 OOM 风险**：Issue #6916 指出 Shell 执行缺乏内存限制，可能导致宿主机 OOM。
*   **修复中的进展**：
    *   Webhook 重试逻辑已提交修复 PR #7027，解决了 `Retry-After` 日期解析问题。
    *   Runtime 流式错误回退机制已在 PR #6983 中提交修复，防止流式传输错误直接暴露给用户。

## 6. 功能请求与路线图信号
*   **安全与工具执行分离**：Issue #6915 提出的 "Skill-scoped tool activation" 允许技能执行期间临时提升权限，结合 #6916 的资源限制，显示出 Zeroclaw 正在构建类似浏览器的“沙箱执行”模型，这将是 Agent 安全线的重要补充。
*   **文档解析能力扩展**：Issue #7024 建议增加 DOCX/XLSX 等 Office 文档的 WASM 解析插件，填补了当前文件处理能力的空白，已有用户表示愿意贡献代码。
*   **调度系统重构**：Issue #6954 的 RFC 若被采纳，将彻底解决计划任务与即时消息处理逻辑不一致的问题，是提升系统稳定性的关键信号。

## 7. 用户反馈摘要
*   **迁移痛点**：Issue #6969 中，从 Letta 迁移的用户指出 Zeroclaw 缺乏细粒度的输出路由控制（如“通过邮件发送报告”），导致多模态交互体验下降，强烈建议增加 `send_via` 工具或偏好设置。
*   **配置困惑**：Issue #6876 反映用户在配置 `allowed_tools` 时误以为已限制 MCP 工具，实则在运行时被绕过，导致“配置了但没生效”的心理落差，文档或代码逻辑急需修正。
*   **开发体验**：Issue #6883 的讨论反映出开发者对重复的消息构造样板代码感到厌烦，合并的 PR #6951 很好地响应了这一痛点。

## 8. 待处理积压
*   **代码审计阻塞**：Issue #6074 追踪的“153 个提交在大规模回滚中丢失”问题仍未解决，目前处于 "In Progress" 状态。这涉及潜在的代码丢失风险，建议维护者优先确认恢复进度。
*   **安全 RFC 待审**：多个涉及安全架构的 RFC（如 #6850 内存策略解耦、#6914 工具权限强制）目前处于 `Blocked/Needs-maintainer-review` 状态，鉴于其 P1/P2 的高优先级，建议尽快排期评审。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-31)

## 1. 今日速览
Hermes Agent 项目今日保持**极高活跃度**，Issue 与 PR 更新量均达到 50 条，显示出社区与开发团队的高频互动。尽管今日无新版本发布，但合并了包括 WhatsApp 桥接、DeepSeek-V4 模型支持及多项关键安全修复，标志着项目在跨平台集成与安全性上迈出重要一步。当前开发重心集中在 **多智能体编排**、**MCP 工具安全性** 以及 **Windows 平台兼容性** 优化。整体项目健康度良好，社区对安全性问题的响应速度极快。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **11 个 PR 被合并/关闭**，主要推进了以下关键更新：

- **跨平台扩展**：PR [#36](https://github.com/NousResearch/hermes-agent/pull/36) 正式合并，引入了基于 Baileys 的 WhatsApp Web 桥接，无需浏览器环境即可接入 WhatsApp，大幅扩展了 Gateway 的生态版图。
- **模型生态更新**：PR [#35659](https://github.com/NousResearch/hermes-agent/pull/35659) 合并，新增了对 `deepseek-v4-flash` 的支持，并优化了模型选择器的分组逻辑。
- **安全性加固**：PR [#35634](https://github.com/NousResearch/hermes-agent/pull/35634) 合并，修补了 Gateway 媒体传输中的路径安全漏洞，阻断了对共享根配置文件的越权访问。
- **CLI 体验优化**：PR [#33313](https://github.com/NousResearch/hermes-agent/pull/33313) 修复了 `-tui` 参数解析错误，避免了因参数误解析导致的工具加载失败。

## 4. 社区热点
今日社区讨论焦点集中在**跨平台会话连续性**与**工具权限管控**：

- **Issue #8366 (评论 5)**: 用户强烈呼吁实现 CLI、Telegram、iMessage 之间的会话无缝切换。这反映了用户将 Hermes 作为“全时段个人助理”的核心诉求，目前各平台会话隔离严重影响了体验连贯性。
  - 链接: [NousResearch/hermes-agent Issue #8366](https://github.com/NousResearch/hermes-agent/issues/8366)
- **Issue #16462 (评论 4)**: 针对 MCP Server 工具“零审批直接调用”的安全风险引发热议。用户建议在工具发现与首次调用间增加“人工确认”环节，显示出企业级用户对自动化操作的安全焦虑。
  - 链接: [NousResearch/hermes-agent Issue #16462](https://github.com/NousResearch/hermes-agent/issues/16462)
- **Issue #17861 (评论 4)**: Anthropic 模型的 Thinking Blocks 在多轮对话历史中丢失的问题持续受到关注，影响了深度推理任务的连贯性。
  - 链接: [NousResearch/hermes-agent Issue #17861](https://github.com/NousResearch/hermes-agent/issues/17861)

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，部分已提交修复 PR：

- **[P0] 安全漏洞**:
  - **Issue #35584**: Gateway 在写入保护机制生效时，仍可能通过 `extract_local_files` 附加敏感配置文件内容。**暂无 Fix PR**，需紧急关注。
    - 链接: [NousResearch/hermes-agent Issue #35584](https://github.com/NousResearch/hermes-agent/issues/35584)
- **[P1] 功能故障**:
  - **Issue #35543**: 切换 Provider（如至 Cerebras）时，因历史记录中包含旧 Provider 的 `reasoning_content` 导致 HTTP 400 错误。
    - 链接: [NousResearch/hermes-agent Issue #35543](https://github.com/NousResearch/hermes-agent/issues/35543)
  - **Issue #35595**: `/model` 命令返回原始结构化字段而非人类可读信息。
    - 链接: [NousResearch/hermes-agent Issue #35595](https://github.com/NousResearch/hermes-agent/issues/35595)
- **[P2] 平台兼容性**:
  - **Issue #35654**: Windows 环境下 Browser Tool 处理含 Shell 字符（`&`, `|`）的 URL 时命令截断。
    - 链接: [NousResearch/hermes-agent Issue #35654](https://github.com/NousResearch/hermes-agent/issues/35654)
  - **Issue #35611**: Discord 机器人提及被错误掩码，导致多 Bot 协作失效。已有 PR [#35611](https://github.com/NousResearch/hermes-agent/pull/35611) (注：Issue 链接为 Issue 编号，PR 为推测或同名修复，此处保留原链接)。
    - 链接: [NousResearch/hermes-agent Issue #35611](https://github.com/NousResearch/hermes-agent/issues/35611)

## 6. 功能请求与路线图信号
根据 Issue 与 PR 动向，下一阶段路线图将重点强化**安全审批**与**编排能力**：

- **精细化权限控制**: Issue [#21849](https://github.com/NousResearch/hermes-agent/issues/21849) 提出的“工具门控系统”与 PR [#35669](https://github.com/NousResearch/hermes-agent/pull/35669) 提交的“审批委托机制”遥相呼应。预计项目将引入类似 Mobile App 权限管理的细粒度工具审批流，支持管理员代审批。
- **内置多智能体编排**: Issue [#35600](https://github.com/NousResearch/hermes-agent/issues/35600) 提出的 `/swarm` 命令请求与 PR [#35471](https://github.com/NousResearch/hermes-agent/pull/35471) 实现的“Hermes 编排模式运行时”高度契合。未来版本将原生支持在会话内通过自然语言驱动的多 Agent 协作。
- **上下文管理优化**: Issue [#20717](https://github.com/NousResearch/hermes-agent/issues/20717) 提出的动态上下文剪枝建议，旨在解决当前被动压缩策略导致的上下文“失忆”问题。

## 7. 用户反馈摘要
- **痛点：跨平台体验割裂**: 用户反馈在不同设备（桌面 CLI vs 移动端 Telegram）切换时，往往需要重新开始会话，缺乏上下文同步能力。
- **痛点：Windows 支持薄弱**: 多条 Issue (#35654, #35546) 反映 Windows 环境下路径处理、Shell 命令执行存在诸多坑点，体验不如 Linux/macOS 顺畅。
- **满意点：响应迅速**: 安全相关 Issue（如 #9179）从提出到关闭处理非常迅速，用户对维护团队的安全响应表示认可。
- **场景：知识库集成**: Issue #27657 显示高级用户希望将 Hermes 与本地“第二大脑”深度集成，作为长期记忆源，而非仅依赖内置 Memory。

## 8. 待处理积压
- **Issue #20717 (动态上下文剪枝)**: 虽有讨论但尚未有明确 PR 解决方案，随着模型上下文窗口竞争加剧，此功能对长程对话至关重要。
  - 链接: [NousResearch/hermes-agent Issue #20717](https://github.com/NousResearch/hermes-agent/issues/20717)
- **Issue #17861 (Thinking Blocks 丢失)**: 涉及核心推理链的完整性，目前在 Anthropic Provider 上影响较大，需架构层面的修复。
  - 链接: [NousResearch/hermes-agent Issue #17861](https://github.com/NousResearch/hermes-agent/issues/17861)
- **PR #35471 (编排模式运行时)**: 这是一个大型功能 PR，目前处于 Open 状态，建议维护者优先 Review 以推进多智能体特性的落地。
  - 链接: [NousResearch/hermes-agent PR #35471](https://github.com/NousResearch/hermes-agent/pull/35471)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-31)

## 1. 今日速览
PicoClaw 项目今日保持较高的开发活跃度，共处理了 7 条 Issue 和 12 条 PR。虽然发布了最新的 nightly 构建版，但社区反馈显示最新的 v0.2.9 版本存在较为严重的 Web UI 会话历史混乱问题，对用户体验造成直接影响。Issue 处理效率较高，关闭数多于新开数，体现了维护者对旧问题的清理力度。然而，PR 合并率为 0%（今日关闭的 3 条 PR 均为未合并状态），需关注代码审核与社区贡献的对接情况。

## 2. 版本发布
- **nightly: Nightly Build (v0.2.9-nightly.20260531.1ce353ba)**
  - **更新内容**：自动化构建版本，包含最新代码提交。
  - **注意事项**：官方提示此为自动构建版本，可能存在不稳定性，建议测试环境使用。
  - **变更日志**：[查看详细变更](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. 项目进展
今日项目主要以修复遗留问题和功能增强提案为主，但代码合并进度略显停滞。

- **[已关闭]** PR #2971 feat(provider): Add optional Azure Identity support for Azure OpenAI provider
  - **进展**：增加了 Azure OpenAI 提供商的可选 Azure Identity 认证支持。
  - **状态**：PR 已关闭（未合并），可能是功能实现方式不符合上游要求或功能重叠。
  - **链接**：[sipeed/picoclaw PR #2971](https://github.com/sipeed/picoclaw/pull/2971)

- **[已关闭]** PR #2974 feat(i18n): Add Bangla support bn-in
  - **进展**：增加了孟加拉语国际化支持。
  - **状态**：PR 已关闭（未合并）。
  - **链接**：[sipeed/picoclaw PR #2974](https://github.com/sipeed/picoclaw/pull/2974)

- **[已关闭]** PR #2969 feat(web): add chat image paste and drag-and-drop upload
  - **进展**：Web 端增加图片粘贴和拖拽上传功能。
  - **状态**：PR 已关闭（未合并），可能需重新调整实现逻辑。
  - **链接**：[sipeed/picoclaw PR #2969](https://github.com/sipeed/picoclaw/pull/2969)

- **[待合并]** PR #2977 feat(cron): add get and update actions to cron tool
  - **进展**：增强了 Agent 的定时任务工具能力，允许获取和部分更新任务，避免重复创建。
  - **意义**：显著提升 Agent 在处理复杂定时任务时的稳定性与灵活性。
  - **链接**：[sipeed/picoclaw PR #2977](https://github.com/sipeed/picoclaw/pull/2977)

## 4. 社区热点
今日社区讨论主要集中在功能请求与版本发布节奏上。

- **Issue #2952 [Feature] 好久没发新版本了**
  - **热度**：评论数 3 条。
  - **诉求**：用户强烈呼吁发布稳定版，并反馈了 exec 命令运行错误、QQ 渠道重启循环以及 UI 交互体验（Key 管理）等痛点。
  - **链接**：[sipeed/picoclaw Issue #2952](https://github.com/sipeed/picoclaw/issue/2952)

- **Issue #2742 [BUG] gateway starts with no channels in v0.2.8**
  - **热度**：评论数 6 条。
  - **状态**：已关闭。该问题经过长期讨论后在今日得到解决或确认无效。
  - **链接**：[sipeed/picoclaw Issue #2742](https://github.com/sipeed/picoclaw/issue/2742)

## 5. Bug 与稳定性
今日报告了数个影响使用体验的关键 Bug，尤其是 v0.2.9 版本的回归问题需重点关注。

- **[严重]** Issue #2972: Web UI message chaos (v0.2.9)
  - **描述**：升级到 v0.2.9 后，Web UI 新会话总是附带旧的历史消息，导致会话上下文混乱。
  - **状态**：Open，暂无关联 Fix PR。
  - **链接**：[sipeed/picoclaw Issue #2972](https://github.com/sipeed/picoclaw/issue/2972)

- **[一般]** Issue #2968: /context always show Compress at: 76800 tokens
  - **描述**：Token 压缩显示数值似乎存在异常，显示固定值 76800。
  - **状态**：Open，需排查是否为显示 Bug 或逻辑错误。
  - **链接**：[sipeed/picoclaw Issue #2968](https://github.com/sipeed/picoclaw/issue/2968)

- **[修复中]** PR #2967: fix(codex): preserve streamed output text deltas
  - **描述**：修复 OpenAI/Codex OAuth 场景下流式响应内容丢失的问题。
  - **链接**：[sipeed/picoclaw PR #2967](https://github.com/sipeed/picoclaw/pull/2967)

## 6. 功能请求与路线图信号
用户对 AI 智能体的易用性和集成能力提出了更高要求。

- **Azure Identity 支持 (Issue #2970)**：用户请求支持 Azure Identity 认证机制，以符合企业级安全策略。相关 PR (#2971) 虽已关闭，但需求明确，预计后续会有官方支持或重新提交。
- **UI/UX 改进 (Issue #2952)**：用户希望模型提供商界面能默认显示已保存 Key 的选项，并支持 API 测试连接及模型列表一键添加，这反映了个人助手场景下配置繁琐的痛点。
- **Telegram 交互增强 (PR #2975)**：提议在群聊中将回复 Bot 消息视为 @提及，符合自然对话习惯，预计将被采纳。

## 7. 用户反馈摘要
- **稳定性担忧**：用户在 Issue #2952 中指出“exec 命令导致模型额外运行”及“QQ 渠道重启循环”问题，反映出 Agent 工具调用逻辑在特定渠道仍不稳定。
- **版本焦虑**：社区对“好久没发新版本”表示关注，期待官方解决累积的 Bug 并发布稳定版。
- **上下文隔离失效**：Issue #2972 反映的 Web UI 历史消息泄露问题，直接影响多会话场景下的可用性，是用户升级新版后的主要阻碍。

## 8. 待处理积压
- **[长期未响应]** PR #2856 feat(message): support media attachments...
  - **说明**：增强消息媒体附件支持，已停滞多日，需维护者 Review。
  - **链接**：[sipeed/picoclaw PR #2856](https://github.com/sipeed/picoclaw/pull/2856)

- **[长期未响应]** PR #2838 feat(agent): support frontmatter tool policy filters
  - **说明**：Agent 工具策略过滤器功能，对安全性有重要意义，建议尽快推进。
  - **链接**：[sipeed/picoclaw PR #2838](https://github.com/sipeed/picoclaw/pull/2838)

- **[紧急]** Issue #2972 Web UI 历史消息混乱问题亟待解决，否则 v0.2.9 版本不可用于生产环境。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-31)

## 1. 今日速览
NanoClaw 项目今日保持高活跃度，过去 24 小时内共有 16 个 PR 更新和 3 个 Issue 更新。社区关注点集中在**供应链安全**与**多实例/多用户支持**上，开发者积极修复 Apple Container 平台的兼容性问题，并提交了大量增强功能的 PR。虽然今日无新版本发布，但代码库变更频繁，显示出项目正处于快速迭代与功能完善阶段。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 4 个 PR 结案（已关闭），涵盖功能增强与底层优化：

*   **平台兼容性修复**：PR [#2652](https://github.com/nanocoai/nanoclaw/pull/2652) 关闭，修复了多实例安装场景下 OneCLI 代理端口配置错误的问题，提升了多实例部署的稳定性。
*   **功能迭代与清理**：PR [#2645](https://github.com/nanocoai/nanoclaw/pull/2645) 关闭，该 PR 曾提议为群聊增加按 Agent 组配置的上下文窗口，相关功能或已整合或暂缓。PR [#2521](https://github.com/nanocoai/nanoclaw/pull/2521) 关闭，涉及消息格式化属性的优化。
*   **底层重构**：PR [#6](https://github.com/nanocoai/nanoclaw/pull/6) 关闭，旨在用异步 `fs.watch` 替换 IPC 轮询，表明项目正尝试优化底层通信效率，但该方案目前可能已被放弃或替换。

> **整体进度评估**：项目正致力于提升多平台兼容性和架构健壮性，大量 Open PR（如 WebUI、备份功能）正在等待审核合并。

## 4. 社区热点
今日最活跃的讨论集中在安全性与用户体验领域：

*   **供应链安全风险** ([Issue #2641](https://github.com/nanocoai/nanoclaw/issues/2641))：
    用户报告了涉及 `@gwibitai/server-gmail-autoauth-mcp` 的供应链风险，指出 AI 可能会安装存在安全隐患的第三方代码并索取敏感权限。该 Issue 引发了对 AI Agent 执行环境安全边界的深层讨论。
*   **Discord 适配体验倒退** ([Issue #2044](https://github.com/nanocoai/nanoclaw/issues/2044))：
    用户反馈 v2 版本中 Discord `<URL>` 处理逻辑变化导致链接预览无法被抑制，反而产生了负面效果，影响了消息的美观与隐私控制。

## 5. Bug 与稳定性
今日报告及修复的重点问题主要集中在特定平台适配与安全加固：

*   **[高] 供应链安全隐患**：Issue [#2641](https://github.com/nanocoai/nanoclaw/issues/2641) 指出 Gmail MCP 集成存在潜在恶意代码注入风险。
    *   *状态*：Open，暂无修复 PR。
*   **[中] Apple Container 兼容性**：PR [#2649](https://github.com/nanocoai/nanoclaw/pull/2649) 与 [#2650](https://github.com/nanocoai/nanoclaw/pull/2650) 暴露了 Apple Container 环境下文件挂载失效及读取竞态条件问题，导致 MCP 服务器配置失败。
    *   *状态*：已有 Fix PR 提交，等待合并。
*   **[中] 多实例代理配置错误**：PR [#2652](https://github.com/nanocoai/nanoclaw/pull/2652) 修复了多实例安装时 HTTPS_PROXY 硬编码导致的连接问题。
    *   *状态*：已关闭。
*   **[中] 交互安全问题**：PR [#2651](https://github.com/nanocoai/nanoclaw/pull/2651) 提交了针对 `ask_user_question` 的源验证修复，防止跨频道回答待处理问题。
    *   *状态*：Open。

## 6. 功能请求与路线图信号
从今日的 Issues 和 PRs 中可以观察到明显的路线图信号：

*   **多用户/多实例支持**：Issue [#2653](https://github.com/nanocoai/nanoclaw/issues/2653) 提出在单一主机（如家庭 Mac）上支持多用户独立运行 Agent 的需求。PR [#2654](https://github.com/nanocoai/nanoclaw/pull/2654) 和 [#2652](https://github.com/nanocoai/nanoclaw/pull/2652) 均与此架构优化相关，显示项目正在底层重构以支持更复杂的多租户场景。
*   **企业级运维能力**：
    *   **备份与恢复**：PR [#2084](https://github.com/nanocoai/nanoclaw/pull/2084) 引入了每日快照和 S3 备份支持，填补了灾难恢复能力的空白。
    *   **WebUI 控制面板**：PR [#212](https://github.com/nanocoai/nanoclaw/pull/212) 持续更新，预示项目将拥有更完善的图形化管理界面。
    *   **监控与调试**：PR [#2648](https://github.com/nanocoai/nanoclaw/pull/2648) 提议上传 Trace 到 HuggingFace，便于调试与数据共享。

## 7. 用户反馈摘要
*   **痛点**：用户对 AI Agent 自动安装未经审查的代码包表示担忧（[#2641](https://github.com/nanocoai/nanoclaw/issues/2641)），这反映了 Agent 生态中“信任链”的缺失。此外，Discord 频道用户对 URL 预览的处理细节非常敏感（[#2044](https://github.com/nanocoai/nanoclaw/issues/2044)），说明对消息格式的精细控制是高优先级需求。
*   **场景**：有用户尝试在家庭共享设备（Mac Mini）上为不同家庭成员部署独立的 AI 服务（[#2653](https://github.com/nanocoai/nanoclaw/issues/2653)），表明 NanoClaw 正从极客玩具向家庭/团队生产力工具转型。

## 8. 待处理积压
以下长期未合并的 PR 值得维护者关注，可能处于阻塞状态：

*   **[Feature] WebUI 控制面板** ([PR #212](https://github.com/nanocoai/nanoclaw/pull/212))：自 2 月开启，标记为 Blocked，今日有更新。这是一个大型功能，对用户体验提升显著，建议优先排查阻塞点。
*   **[Feature] GitHub 集成增强** ([PR #2301](https://github.com/nanocoai/nanoclaw/pull/2301))：添加了轮询模式以适应 NAT/防火墙环境，这对服务器部署环境非常关键。
*   **[CI] Pre-commit Hooks** ([PR #2537](https://github.com/nanocoai/nanoclaw/pull/2537))：引入代码规范检查，对长期维护至关重要。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-31)

## 1. 今日速览
IronClaw 项目今日保持**高活跃度**，核心开发与社区贡献并驾齐驱。过去 24 小时内共有 18 个 PR 更新，其中 11 个已合并，主要集中在对 **Agent 运行时稳定性**、**Reborn 架构**及 **WebUI 认证体系**的重构与增强。值得一提的是，新贡献者提交的关于 Agent 内存管理与中断控制的多个补丁被迅速合并，显示出项目维护者对社区反馈的高效响应。然而， crates.io 发布滞后问题（Issue #3259）依然悬而未决，对下游依赖造成了明显阻塞，是当前最大的痛点。

## 2. 版本发布
- **无新版本发布**。
- ⚠️ **注意**：尽管 GitHub 已有 `v0.27.0` 标签，但 crates.io 最新版本仍停留在 `v0.24.0`，下游用户需关注 Issue #3259 的进展。

## 3. 项目进展
今日合并的 PR 显著提升了系统的健壮性与安全性，主要集中在以下三个方向：

- **Agent 运行时与核心修复**
  - **[MERGED] PR #4258**: 修复了路由调度失败导致 Agent 运行意外终止的问题，现在能正确将工具错误反馈给模型而非直接崩溃。
  - **[MERGED] PR #4259**: 修复了 `capability_info` 无法自省合成能力的问题，解决了模型并行调用工具时的报错。
  - **[MERGED] PR #4250**: 实现了 LLM 流式调用过程中的即时中断功能，改善了用户发送 `/interrupt` 指令的响应速度。
  - **[MERGED] PR #4251 & #4252**: 引入了结构化的上下文压缩摘要模板，并在 Agent 长时间未写入记忆时增加行为引导，优化了长程记忆机制。

- **安全与身份认证**
  - **[MERGED] PR #4253**: 新增身份文件（如 `AGENTS.md`）读取时的注入扫描功能，防范恶意 Prompt 注入。
  - **[MERGED] PR #4245 & #4246**: 完成了产品级认证 HTTP 接口（手动令牌、恢复、刷新）及 NEAR AI MCP 凭证的迁移，为 WebUI/CLI 认证打下基础。

- **Reborn 架构与触发器系统**
  - **[MERGED] PR #4254 & #4255**: 引入了可信入站门面和出站投递解析域类型，正在构建更复杂的触发器与任务调度基础设施。

## 4. 社区热点
- **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259)**: **(👍 0, 💬 12)**
  这是今日讨论最激烈的 Issue。作者 @dacoldest 指出 crates.io 版本严重滞后于 GitHub Release，导致下游项目因 Wasmtime CVE 漏洞被迫停留在旧版本，无法获取安全更新。这反映了社区对发布流程自动化的迫切需求。

- **[Issue #228](https://github.com/nearai/ironclaw/issues/228)**: **(👍 0, 💬 1)**
  关于 Agent 子任务创建策略的增强请求。讨论焦点在于如何防止 LLM 产生幻觉或被 Prompt 注入后无限制地创建子任务，建议引入“默认拒绝”策略以增强安全性。

## 5. Bug 与稳定性
- **[Critical] [Issue #3259](https://github.com/nearai/ironclaw/issues/3259)**: crates.io 发布缺失，影响下游安全更新，目前**暂无 Fix PR**，需维护者手动干预或修复 CI 发布流水线。
- **[High] [Issue #4108](https://github.com/nearai/ironclaw/issues/4108)**: Nightly E2E 测试失败，暂无详细修复进展。
- **[Fixed] [PR #4258](https://github.com/nearai/ironclaw/pull/4258)**: 修复了 `builtin.http` 头部参数处理导致的工具调用失败问题。
- **[Fixed] [PR #4259](https://github.com/nearai/ironclaw/pull/4259)**: 修复了工具自检时的 `InvalidInvocation` 错误。

## 6. 功能请求与路线图信号
- **触发器系统**：今日 Open 的 [PR #4261](https://github.com/nearai/ironclaw/pull/4261) 和 [PR #4260](https://github.com/nearai/ironclaw/pull/4260) 表明项目正在构建基于 Cron 和事件驱动的 Triggers 机制，这将是下一阶段的重要功能。
- **WebUI v2 认证**：[PR #4257](https://github.com/nearai/ironclaw/pull/4257) 和 [PR #4229](https://github.com/nearai/ironclaw/pull/4229) 正在完善 GSuite OAuth、Notion MCP 及 GitHub SSO 支持，预计近期将全面开放 WebUI v2 的生产级认证。
- **Slack 集成**：[PR #4035](https://github.com/nearai/ironclaw/pull/4035) 仍在待合并状态，预示着 Reborn 架构即将正式支持 Slack 适配器。

## 7. 用户反馈摘要
- **发布阻塞痛点**：用户 @dacoldest 在 #3259 中明确表示，因版本发布滞后，无法通过 `cargo update` 修复依赖漏洞，这直接影响了 IronClaw 作为库的可信度。
- **安全控制需求**：Issue #228 反映了用户在生产环境中部署 Agent 时，对资源消耗（无限创建 Job）存在顾虑，急需细粒度的权限控制层。

## 8. 待处理积压
- **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259)**: **发布流水线阻塞**。这是目前最高优先级的非代码问题，建议维护者立即检查 CI 发布脚本或手动补发版本。
- **[PR #4035](https://github.com/nearai/ironclaw/pull/4035)**: Slack Reborn 适配器已挂起 5 天，属于 XL 级大型重构，建议核心团队尽快安排 Review 以避免分支冲突。
- **[Issue #228](https://github.com/nearai/ironclaw/issues/228)**: 关于子任务创建策略的讨论已重启，建议结合即将合并的 Trigger 系统统一规划安全策略。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-31)

## 1. 今日速览
LobsterAI 项目今日整体活跃度处于**低位**。过去 24 小时内无新开 Issue、无合并 PR，也未发布新版本。项目仓库目前有 2 个处于 Open 状态的 PR 发生了更新，但均标记为 `[stale]`，显示出社区或维护者对这些提交的响应存在滞后。整体来看，项目处于平稳但缺乏新进度的维护状态，建议关注存量代码的合并进度。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日无合并或关闭的 PR，项目代码库未发生变更。目前有 2 个待合并的 PR 处于活跃状态，主要涉及 UI 交互修复：

*   **[待合并] MCP Server 表单滚动优化**：PR #1466 试图修复表单内容过长导致底部按钮不可见的问题，目前状态为 Open。
*   **[待合并] macOS 快捷键显示适配**：PR #1467 旨在修正 macOS 系统下快捷键显示符号错误的问题（显示 Ctrl 而非 Cmd）。

## 4. 社区热点
由于今日无新增 Issue 且无评论互动，社区讨论热度较低。唯一的动态集中在两个陈旧 PR 的更新上：

*   **[PR #1466](netease-youdao/LobsterAI PR #1466)**: 修复 MCP Server 表单模态框在高内容量下的滚动问题。该问题影响用户在配置复杂环境变量时的操作体验，属于关键的交互痛点，但目前尚未合并。
*   **[PR #1467](netease-youdao/LobsterAI PR #1467)**: 修复 macOS 快捷键显示不符合平台习惯的问题。这反映了用户对跨平台体验一致性的诉求。

## 5. Bug 与稳定性
今日无新增 Bug 报告，但存量 PR 揭示了以下待解决的技术债：

*   **中等 - UI 交互受阻**：MCP Server 配置表单在内容增长时，底部操作按钮（如 Cancel）会随滚动移出视野（[PR #1466](netease-youdao/LobsterAI PR #1466)）。目前已有 Fix PR，但处于 Stale 状态，未合并。
*   **轻微 - 平台适配瑕疵**：macOS 端快捷键显示逻辑硬编码为 Ctrl，未适配 Cmd (⌘)，影响原生体验（[PR #1467](netease-youdao/LobsterAI PR #1467)）。已有 Fix PR，待合并。

## 6. 功能请求与路线图信号
今日无新增功能请求。从现有 PR 分析，项目目前的改进方向集中在**细节体验打磨**与**跨平台兼容性**。若上述两个 Stale PR 能顺利合并，预计下一版本将显著改善表单配置体验和 Mac 用户的使用手感。

## 7. 用户反馈摘要
今日无新增 Issue 评论。根据现有 PR 描述推断：
*   **痛点**：用户在添加 MCP Server 时，若配置项较多（如多个 Headers 或环境变量），操作按钮被遮挡，导致无法便捷取消或确认，降低了配置效率。
*   **期望**：Mac 用户期望看到符合系统规范的 UI 文本（如 ⌘ 符号），而非跨平台移植的 Ctrl 符号。

## 8. 待处理积压
维护者需重点关注以下长期未处理的 PR，避免有效贡献流失：

*   **[Stale] PR #1466**: 修复 MCP 模态框滚动问题（创建于 2026-04-04，更新于 2026-05-30）。[链接](netease-youdao/LobsterAI PR #1466)
*   **[Stale] PR #1467**: 修复 macOS 快捷键显示问题（创建于 2026-04-04，更新于 2026-05-30）。[链接](netease-youdao/LobsterAI PR #1467)

**分析师建议**：上述两个 PR 均由 @linlihua 提交且已停滞近两个月，建议维护团队尽快进行 Code Review 并合并，或反馈修改意见，以保持社区贡献的活跃度。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-31)

## 1. 今日速览
Moltis 项目今日整体处于**稳步迭代**状态，无新版本发布，社区互动较为平静。过去 24 小时内无 Issues 动态，核心进展集中在代码层面的底层优化。项目新增 1 个待合并 PR，重点针对 OpenAI Codex 提供商的工具调用参数处理逻辑进行了深度修复。整体来看，项目今日无紧急故障或重大功能性更新，开发重心在于提升 AI 模型集成的鲁棒性。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日项目推进主要集中在 AI 模型提供商的兼容性优化上，虽然暂无 PR 合并，但新增的 PR 显示了开发团队对细节问题的关注：

*   **OpenAI Codex 流式参数处理优化**：
    提交了 PR [#1088 [OPEN] [codex] Handle OpenAI Codex final tool-call arguments](https://github.com/moltis-org/moltis/pull/1088)。
    *   **主要内容**：该 PR 旨在解决 OpenAI Codex 提供商在处理工具调用时的边缘情况。具体包括记录 `response.function_call_arguments.done` 负载，以及在未发出参数增量时从最终参数合成流式参数增量。
    *   **意义**：此举将有效修复因缺失参数增量导致的解码错误，确保空参数字符串能正确流经诊断逻辑，显著提升了智能体在使用 Codex 模型进行工具调用时的稳定性与准确性。

## 4. 社区热点
*过去 24 小时内无新开 Issues 或活跃讨论。*

社区今日处于静默期，暂无高热度话题。PR #1088 的提交是今日唯一的活跃信号，表明当前工作重心在内核逻辑的修补而非新功能的社区宣发。

## 5. Bug 与稳定性
今日无用户报告的新 Bug。但从提交的 PR 可推断出已识别并修复了一个潜在的技术债：

*   **已识别并修复的底层问题**：
    *   **问题**：OpenAI Codex 在特定情况下未发出参数增量，可能导致工具调用解析失败或丢失参数。
    *   **状态**：Fix PR [#1088](https://github.com/moltis-org/moltis/pull/1088) 已提交，目前状态为 **Open**，等待 Review 合并。
    *   **严重程度**：中等。该问题会影响依赖 Codex 模型的智能体工具调用成功率，属于稳定性修复。

## 6. 功能请求与路线图信号
*过去 24 小时内无新的功能请求。*

根据 PR #1088 判断，项目短期路线图信号指向：
*   **深化模型兼容性**：项目正在持续打磨对主流大模型（如 OpenAI 系列）的底层适配，特别是针对流式响应和工具调用等高级功能，这符合 AI 智能体框架追求高稳定性的发展方向。

## 7. 用户反馈摘要
*今日无 Issue 评论或用户反馈数据，暂无法提炼用户痛点。*

## 8. 待处理积压
基于现有数据，今日无长期未响应的“僵尸” Issue 需特别提醒。但建议维护者关注以下待办项：

*   **PR Review 积压风险**：目前仅有 1 个 PR [#1088](https://github.com/moltis-org/moltis/pull/1088) 处于 Open 状态，建议及时进行 Code Review 并合并，以避免影响后续开发进度。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**日期：** 2026-05-31  
**项目：** [CoPaw](github.com/agentscope-ai/CoPaw)  
**数据源：** GitHub Issues & Pull Requests

---

## 1. 今日速览

CoPaw 项目今日活跃度中等偏上，共有 9 条 Issue 更新（8 条新开/活跃，1 条已关闭）和 1 条待合并 PR。用户反馈高度集中在 **Windows 平台体验问题**，尤其是 shell 命令执行时控制台窗口闪烁的问题被多次报告（#4123、#4829、#4832、#4828）。无新版本发布，项目整体处于问题收集与修复准备阶段。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日无合并的 PR，整体进展放缓。

| PR | 状态 | 内容概述 |
|---|---|---|
| [#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689) | 待合并 | 解决非标准 provider 参数（如 DashScope 的 `enable_search`）被 OpenAI SDK 拒绝的问题，通过将参数路由到 `extra_body` 实现兼容。 |

---

## 4. 社区热点

| Issue | 互动量 | 核心诉求 |
|---|---|---|
| [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) | 💬 8 评论 | **Windows 执行 shell 命令时控制台窗口闪烁**，影响使用体验，用户期望后台静默执行 |
| [#4454](https://github.com/agentscope-ai/QwenPaw/issues/4454) | 💬 4 评论 | **`/mission` 指令导致 QwenPaw Console 完全卡死**，进程运行但界面无响应，清空目录和重置 session 无法解决 |
| [#4826](https://github.com/agentscope-ai/QwenPaw/issues/4826) | 💬 2 评论 | **功能请求：提供三种新消息处理策略**（打断当前任务/等待完成/工具调用后插入），同时希望 Desktop 端本地路径可点击打开目录 |

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 状态 | 问题描述 | 已有 Fix PR |
|---|---|---|---|---|
| 🔴 高 | [#4454](https://github.com/agentscope-ai/QwenPaw/issues/4454) | OPEN | `/mission` 指令导致 Console 界面完全卡死，无法对话或发送消息 | ❌ 无 |
| 🟠 中 | [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) | OPEN | Windows 执行 `execute_shell_command` 时 cmd 窗口闪烁（重复报告：#4829、#4832） | ❌ 无 |
| 🟠 中 | [#4824](https://github.com/agentscope-ai/QwenPaw/issues/4824) | OPEN | ACP 协议版本号格式不匹配（`protocolVersion` expected number, received string），`delegate_external_agent` 报 Internal error | ❌ 无 |
| 🟢 低 | [#4828](https://github.com/agentscope-ai/QwenPaw/issues/4828) | ✅ CLOSED | 同 #4123，Windows cmd 窗口闪烁问题（已关闭，疑似重复） | - |

---

## 6. 功能请求与路线图信号

| Issue | 需求描述 | 优先级判断 |
|---|---|---|
| [#4826](https://github.com/agentscope-ai/QwenPaw/issues/4826) | **新消息处理策略**：打断当前任务 / 等待完成 / 工具调用后插入，三种模式供用户选择 | 高，提升交互灵活性 |
| [#4830](https://github.com/agentscope-ai/QwenPaw/issues/4830) | **Desktop 端路径可点击**：自动识别本地文件/目录路径，点击直接打开文件管理器定位 | 中，提升桌面端体验 |
| [#4831](https://github.com/agentscope-ai/QwenPaw/issues/4831) | **Docker 镜像预置依赖**：预装 `psycopg2-binary`、`pytz`、`mootdx`，避免容器重建后 Agent 脚本功能失效 | 中，解决容器化场景痛点 |

---

## 7. 用户反馈摘要

**痛点：**
1. **Windows 体验问题突出**：多条 Issue 反映 `execute_shell_command` 执行时 cmd 窗口闪烁，严重影响连续操作体验，根本原因是 subprocess 创建时缺少 `CREATE_NO_WINDOW` flag（#4832 明确指出）
2. **界面卡死问题**：`/mission` 指令触发 Console 完全无响应，用户尝试清空目录和重置 session 无效（#4454）
3. **协议兼容性**：ACP 协议实现与 Claude Agent 存在差异，导致版本号校验失败和外部代理调用失败（#4824）

**满意点：**
- 用户对功能设计有明确期待，如新消息处理策略、路径可点击等，表明对项目方向认可

**使用场景：**
- Docker 容器化部署用户需要预置数据库连接包（#4831）
- 桌面端用户期望更便捷的文件交互体验（#4830）

---

## 8. 待处理积压

| Issue | 积压时长 | 呼吁内容 |
|---|---|---|
| [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) | **23 天**（创建于 2026-05-08） | Windows cmd 窗口闪烁问题，评论 8 条，多次被重复报告，**建议优先处理** |
| [#4454](https://github.com/agentscope-ai/QwenPaw/issues/4454) | **14 天**（创建于 2026-05-17） | Console 卡死问题，影响核心功能可用性 |

---

**健康度评估：** 项目社区活跃度良好，但 Windows 平台体验问题已形成明显痛点，建议在下个版本优先修复 `execute_shell_command` 的窗口闪烁问题（技术方案已在 #4832 中明确），以提升跨平台一致性体验。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-05-31)

**项目仓库**: [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

## 1. 今日速览
EasyClaw 今日处于**高频发布、低社区互动**的状态。项目在 24 小时内连续推出了 3 个版本（v1.8.19 至 v1.8.21），显示出维护者在基础架构与网络稳定性方面的高强度迭代。然而，Issue 与 PR 板块均无新增或更新，社区活跃度降至冰点。整体来看，项目核心正在经历深度的内部优化，重点聚焦于 macOS 更新机制与网络路由策略，但外部贡献者参与度亟待提升。

## 2. 版本发布
今日项目连续发布了 3 个新版本，主要针对桌面端更新机制与网络代理健壮性进行加固，建议用户尽快升级以获得更稳定的体验。

- **[v1.8.21: RivonClaw v1.8.21](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.21)**
  - **更新亮点**：优化 macOS 更新器效率，将 OpenClaw 运行时打包为 blockmap 友好的 tar 归档文件，显著减少增量更新的下载体积。
  - **稳定性**：加固了 Agent 工具启动逻辑，确保云工具和客服桥接服务在网关目录就绪后才启动，避免了竞态条件导致的启动失败。
  - **CI/CD**：保持 CI 检查与新的 macOS 运行时归档约束一致。

- **[v1.8.20: RivonClaw v1.8.20](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.20)**
  - **网络优化**：改进了一方域名路由逻辑，桌面客户端在切换至中国中继节点前会优先测试真实 RivonClaw API 路径，提升连接成功率。
  - **代理加固**：增强了代理感知的网络处理能力，覆盖了重定向、回环地址及一方域名场景，确保发布与更新流量均走在正确的全球或区域链路上。

- **[v1.8.19: RivonClaw v1.8.19](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.19)**
  - **安全验证**：刷新了已签名的桌面发布元数据，确保 macOS 和 Windows 平台上的 electron-updater 端到端验证通过。
  - **契约检查**：在 CI 中保留打包的 OpenClaw 运行时契约检查，确保更新构件包含必要的工作空间模板。

## 3. 项目进展
今日无公开的 PR 合并或关闭记录。根据版本发布频率推测，项目正在通过内部分支或直接推送的方式进行快速迭代。尽管公开 PR 列表静止，但从 Release Notes 可知，项目在**网络层路由策略**与**桌面端自动化更新流水线**上取得了实质性进展，解决了特定区域（如中国区中继）的连接稳定性问题。

## 4. 社区热点
今日无活跃的 Issues 或 Pull Requests。讨论区沉寂，缺乏用户反馈或技术讨论，建议维护者关注社区激活。

## 5. Bug 与稳定性
今日无新增 Bug 报告或崩溃反馈。虽然无外部 Issue，但 v1.8.20 和 v1.8.21 的更新日志暗示了此前版本可能存在以下潜在问题（现已修复）：
- **中等严重度**：macOS 平台更新效率低，下载体积过大（已通过 blockmap 优化解决）。
- **中等严重度**：Agent 工具启动时序错误可能导致部分云工具桥接服务不可用（已通过启动等待逻辑解决）。
- **低严重度**：特定网络环境下（代理/重定向）路由策略不精准，可能导致更新流量走向错误（已修复）。

## 6. 功能请求与路线图信号
今日无新增功能请求。从连续的版本迭代方向分析，项目目前的开发路线图侧重于：
1.  **跨国/跨区域网络加速**：针对中国中继节点的路由优化是重点。
2.  **客户端静默更新体验**：致力于让更新过程更透明、体积更小、验证更严格。

## 7. 用户反馈摘要
由于今日无 Issue 更新与评论，暂无法提炼用户痛点或满意度评价。

## 8. 待处理积压
由于今日无新增或变更的 Issue/PR，暂无特别需要提醒的积压事项。建议维护者利用当前代码稳定期，整理过往遗留的 "Good First Issue" 或文档缺失部分，以吸引社区贡献。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*