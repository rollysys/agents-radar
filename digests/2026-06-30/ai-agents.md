# OpenClaw 生态日报 2026-06-30

> Issues: 389 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-30 03:54 UTC

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

# OpenClaw 项目动态日报 (2026-06-30)

## 1. 今日速览
OpenClaw 项目今日呈现**高活跃度与高通量特征**，但也暴露出明显的**积压风险**。过去24小时内，社区产生了高达 389 条 Issues 更新（新增/活跃 330 条，关闭 59 条）和 500 条 PR 更新。然而，PR 的合并速度显著滞后于提交速度，**待合并 PR 高达 450 条**，而合并/关闭仅 50 条，显示出项目正处于功能密集开发期或维护审核瓶颈期。今日无新版本发布，但社区焦点集中在核心 Session 机制、消息投递稳定性及新模型适配问题上。

## 2. 版本发布
**无新版本发布**。
项目当前处于密集的问题修复与功能迭代阶段，尚未发布新的稳定版或测试版。

## 3. 项目进展
尽管合并数量较少，但今日活跃的 PR 提案显示了项目在扩展性和稳定性方面的积极进展：

*   **插件生态扩展**：PR #98005 提议增加 JSON-RPC 插件绑定，旨在支持 Rust、Python、Go 等非 TypeScript 语言的插件开发，这将显著降低多语言插件的接入门槛。
*   **Codex 集成增强**：PR #94172 致力于向 Codex 暴露 `ls/find/grep` 等 FS 发现工具，增强代码生成与文件系统交互的能力。
*   **消息队列持久化**：PR #82572 提议在 Gateway 重启期间持久化 followup 队列，解决因进程重启导致的消息丢失问题，提升系统鲁棒性。
*   **安全性修复**：PR #97713 修复了代理环境下 NO_PROXY 匹配逻辑，PR #82950 增加了对 exec 审批参数正则匹配的 ReDoS 防护。

## 4. 社区热点
今日讨论最热烈的问题集中在架构限制与核心功能稳定性上：

*   **[Issue #86538] Session 写锁超时阻塞子智能体投递通道** (评论: 18)
    用户报告 Session JSONL 写锁超时会阻塞主通道、Cron 嵌套及子智能体通道，导致投递与生命周期失败，且缺乏诊断信息。这是目前关注度最高的 P1 级 Bug。
    链接: [openclaw/openclaw Issue #86538](https://github.com/openclaw/openclaw/issues/86538)

*   **[Issue #80319] QA 工具默认套件混淆问题** (评论: 17)
    讨论了 QA 测试套件中 Codex 原生工具与 OpenClaw 动态工具对等性测试的混淆问题，确认这是 Mock Provider 层面的问题而非核心运行时 Bug。
    链接: [openclaw/openclaw Issue #80319](https://github.com/openclaw/openclaw/issues/80319)

*   **[Issue #79077] 支持 Telegram Bot-to-Bot 与 Guest-Bot 模式** (评论: 8, 👍: 8)
    用户请求支持 Telegram 2026年5月发布的新 Bot 平台特性，包括机器人间通信和访客机器人模式，这是目前点赞数最高的功能请求。
    链接: [openclaw/openclaw Issue #79077](https://github.com/openclaw/openclaw/issues/79077)

## 5. Bug 与稳定性
今日报告了大量影响用户体验的关键 Bug，尤其是升级后的回归问题：

*   **[P1 - 严重] 更新后启动失败 (今日新发)**
    Issue #97970: `openclaw update` 补全 `gateway.bind` 为 `lan` 时与 `auth.mode: none` 冲突，导致 Gateway 以 Exit 78 退出，造成 systemd 死循环重启。
    链接: [openclaw/openclaw Issue #97970](https://github.com/openclaw/openclaw/issues/97970)

*   **[P1 - 回归] CLI 冷启动性能退化**
    Issue #82070: 更新至 2026.5.12 后，所有 CLI 命令出现约 14 秒的冷启动延迟，严重影响交互体验。
    链接: [openclaw/openclaw Issue #82070](https://github.com/openclaw/openclaw/issues/82070)

*   **[P1 - 稳定性] GPT-4o 工具循环中断**
    Issue #81567: 配置 `openai/gpt-4o` 的 Agent 在单次文本响应后退出，未能继续迭代工具调用完成任务。
    链接: [openclaw/openclaw Issue #81567](https://github.com/openclaw/openclaw/issues/81567)

*   **[P2 - 回归] DeepSeek 缓存命中率骤降**
    Issue #94518: 升级至 6.x 版本后，DeepSeek 提示词缓存命中率从高位跌至 10% 以下，归因于缓存边界感知逻辑破坏了前缀匹配。
    链接: [openclaw/openclaw Issue #94518](https://github.com/openclaw/openclaw/issues/94518)

## 6. 功能请求与路线图信号
*   **SDK 稳定性接口 (Issue #81913)**：请求暴露稳定的 `openclaw/plugin-sdk/*` 接口，以便第三方插件操作已安装的 Skill，避免依赖核心内部结构。
*   **路由前拦截钩子 (Issue #81061)**：请求增加 `before_route_inbound_message` 钩子，用于实现跨通道桥接、代理和多租户路由逻辑。
*   **技能安装钩子 (Issue #80213)**：建议在 `SKILL.md` 中增加 `setup.script`，允许 Skill 安装/更新后自动执行配置脚本，完善 Skill 的生命周期管理。

## 7. 用户反馈摘要
*   **消息丢失痛点**：多个 Issue（如 #80520, #97877）反映消息在特定条件下（如 5xx 错误重试、Telegram 网关）被静默丢弃，缺乏用户可见的错误提示。
*   **配置兼容性问题**：用户反馈升级后配置迁移脚本存在逻辑缺陷（如 #97970 的 bind 配置冲突），导致服务不可用。
*   **无障碍体验好评**：Issue #82450 中一位视障用户高度评价 OpenClaw 的无障碍支持，称其为他使用过的最强大的 AI 工作界面之一，并请求增加“线性持久工作区模式”。

## 8. 待处理积压
*   **PR 审核拥堵**：当前有 **450 个待合并 PR**，其中不乏 #83081（通道配置保护）、#82572（队列持久化）等重要的功能修复与增强。大量 PR 处于等待审核或等待提供证明的状态，建议项目组增加维护者投入或进行分批处理。
*   **长期未决 Issue**：Issue #74586（嵌入式运行中止 memory_search）已活跃数周，仍未有明确的修复 PR，影响 `active-memory` 插件的稳定性。

---

## 横向生态对比

# 2026-06-30 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于**从功能爆发向生产级稳定性收敛**的关键转型期。头部项目（OpenClaw, CoPaw）呈现出极高的社区活跃度，但也普遍面临 PR 审核积压与升级回归 bug 增多的“成长的烦恼”。生态关注点已超越单纯的对话能力，全面转向**多模态文件处理、长期记忆持久化、企业级安全沙箱及多渠道集成**。同时，随着 DeepSeek 等高性价比模型的普及，**推理成本控制（缓存策略）**与**端侧/桌面端常驻体验**成为新的竞争高地。

## 2. 各项目活跃度对比

| 项目名称 | Issues (更新/关闭) | PRs (更新/合并) | 版本状态 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 389 / 59 | 500 / 50 | 无发布 | ⚠️ **积压高危**：高通量开发，但合并严重滞后（450 PR待定），回归 Bug 频发。 |
| **CoPaw** | 26 / 11 | 50 / 32 | v2.0.0-beta.1 | 🟢 **极速迭代**：架构升级顺畅，社区响应快，正积极解决性能与成本痛点。 |
| **LobsterAI** | 高活跃 / 多数 | 39 / 39 | **v2026.6.29** | 🟢 **发布稳定**：今日发布新版，集中修复记忆与权限问题，商业化成熟度高。 |
| **IronClaw** | 15 / ? | 50 / 21 | v0.29.1 准备中 | 🟡 **质量收敛**：聚焦测试覆盖与 Reborn 架构，自动化功能仍有 P1 级 Bug。 |
| **Hermes Agent**| 50 / 3 | 50 / 6 | 无发布 | ⚠️ **处理瓶颈**：社区热度高但 Issue 关闭率极低，PR 积压严重，响应待提升。 |
| **Zeroclaw** | 50 / ? | 50 / ? | 无发布 | 🟢 **稳步推进**：渠道扩展与安全基建并重，社区治理规范化进展顺利。 |
| **NanoBot** | ~14 / 3 | 32 / 8 | 无发布 | 🟢 **敏捷响应**：轻量级定位，Bug 修复迅速，架构争议较小。 |
| **NanoClaw** | 1 / 0 | 7 / 2 | 无发布 | 🟡 **功能修补**：聚焦多渠道适配与安全漏洞修复，处于功能补齐阶段。 |
| **PicoClaw** | 低 / 1 | 低 / 0 | 无发布 | 🟡 **稳步维护**：企业级特性增加中，跨平台体验有所改善。 |
| **NullClaw** | 1 / 0 | 4 / 1 | 无发布 | 🟢 **早期开发**：聚焦核心交互与流式能力，社区规模尚小。 |
| **TinyClaw** | 0 | 0 | 无 | 🔴 **静默** |
| **Moltis** | 0 | 0 | 无 | 🔴 **静默** |

## 3. OpenClaw 在生态中的定位

*   **核心参照地位**：作为生态中流量最大的项目，OpenClaw 定义了 AI 智能体的核心运行时标准（Session 机制、Gateway 模式）。其核心关注点（Session 锁、消息投递）是所有同类项目必须面对的基础架构问题。
*   **技术路线差异**：
    *   相比 **NanoBot** 的“极致轻量”和 **Hermes Agent** 的“桌面/终端优先”，OpenClaw 更偏向**服务器端网关架构**，强调高并发与插件化扩展。
    *   相比 **LobsterAI** 的“开箱即用商业化”，OpenClaw 的配置复杂性较高，但在底层调度灵活性上更具优势。
*   **社区规模对比**：OpenClaw 的 Issues/PRs 总量远超其他项目（单日 500+ PRs），但也面临着严重的**维护通胀**问题。相比之下，**CoPaw** 和 **NanoBot** 展现了更高的代码流转效率。

## 4. 共同关注的技术方向

*   **稳定性与持久化**：
    *   **涉及项目**：OpenClaw, Hermes Agent, LobsterAI, CoPaw。
    *   **诉求**：Agent 的“失忆”问题（Session/Workspace 隔离）、长时运行下的连接保活、进程重启后的队列持久化是当前各项目共同的痛点。用户不再满足于一次性对话，而是需要 7x24 小时稳定运行的自主智能体。
*   **成本控制与缓存优化**：
    *   **涉及项目**：OpenClaw, CoPaw, PicoClaw。
    *   **诉求**：针对 DeepSeek 等模型的前缀缓存优化成为刚需。用户对 Token 消耗极其敏感，缓存命中率直接决定了开源方案对比闭源方案的经济可行性。
*   **多渠道与多模态集成**：
    *   **涉及项目**：Zeroclaw, NanoClaw, OpenClaw, PicoClaw。
    *   **诉求**：Discord、Telegram、Slack 等平台的原生集成不仅是消息收发，更涉及图片/文件等模态内容的解析。各项目正在竞相完善各渠道的 Adapter 能力。
*   **安全边界加固**：
    *   **涉及项目**：NanoBot, OpenClaw, NanoClaw。
    *   **诉求**：Shell 命令执行沙箱、符号链接逃逸防护、敏感文件审批逻辑是近期修复的高频区。

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot / NullClaw | Hermes Agent | LobsterAI / CoPaw |
| :--- | :--- | :--- | :--- | :--- |
| **核心侧重** | **网关与运行时**：强调核心调度、插件生态与高吞吐。 | **轻量与内核**：强调最小化依赖、CLI 体验与快速启动。 | **桌面与自主化**：强调 TUI/桌面端常驻、自动化任务。 | **框架集成与应用层**：强调 UI 体验、商业化部署与框架绑定。 |
| **目标用户** | 平台开发者、企业运维。 | 开发者、极客、嵌入式场景。 | 个人用户、自动化脚本爱好者。 | 终端用户、企业办公场景。 |
| **技术架构** | Gateway + Session 核心架构，重量级。 | 单体/微内核架构，依赖少。 | 终端交互 + 后台服务，本地优先。 | 客户端/服务端分离，Web/Desktop 混合。 |
| **当前痛点** | 维护瓶颈、配置兼容性回归。 | 功能丰富度与轻量化的平衡。 | 连接稳定性、跨平台接力。 | 订阅机制争议、UI 细节打磨。 |

## 6. 社区热度与成熟度

*   **快速迭代层**：**CoPaw**、**NanoBot**、**Zeroclaw**。这些项目社区响应迅速，PR 合并效率高，功能更新频繁，处于攻城略地阶段。
*   **维护瓶颈层**：**OpenClaw**、**Hermes Agent**。作为头部项目，它们吸引了大量贡献与反馈，但核心维护团队面临吞吐量挑战，导致积压严重，需警惕社区热情消退。
*   **质量收敛层**：**IronClaw**、**LobsterAI**。项目重心转向测试覆盖、架构重构与商业化发布，标志着其正在进入成熟期，追求稳定性胜过功能数量。
*   **早期孵化层**：**NullClaw**、**NanoClaw**、**PicoClaw**。主要解决基础 Bug 和渠道适配，社区规模较小，尚未形成规模效应。

## 7. 值得关注的趋势信号

1.  **“缓存命中率”成为新指标**：随着 DeepSeek 等模型的普及，开源项目纷纷在 Prompt 缓存上下功夫（如 PicoClaw, CoPaw）。这标志着 AI 应用开发已进入精细化成本运营阶段。
2.  **桌面端/端侧常驻化**：Hermes Agent 和 CoPaw 都在重点投入系统托盘、后台驻留和 TUI 体验。AI Agent 正在从“随用随走”的工具转变为操作系统级的常驻服务。
3.  **自动化治理提上日程**：OpenClaw 和 Zeroclaw 都在讨论或实施自动化治理（RFC、Label 清理）。这不仅是项目管理需求，更是为了应对 AI Agent 可能产生的自动化泛滥风险（如“Loop Contract”）。
4.  **安全沙箱回归**：多个项目今日均修复了与 Shell 执行、路径遍历相关的安全漏洞。随着 Agent 自主能力的增强，其操作系统的权限控制成为必选项，而非可选项。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-30)

## 1. 今日速览
NanoBot 项目今日保持高活跃度，社区贡献热情高涨。过去24小时内共有 **32 条 PR 更新**（其中 24 条待合并），显示开发迭代速度极快。虽然今日无新版本发布，但社区在安全性修复、Provider 兼容性（特别是 OAuth 和 Proxy 支持）以及上下文优化方面取得了显著进展。项目今日解决了 3 个 Issues，但同时也暴露了安装脚本崩溃和工具调用 ID 污染等关键 Bug，维护者响应迅速，相关修复 PR 已提交。

## 2. 版本发布
**无新版本发布**。目前项目正处于密集的功能开发与 Bug 修复阶段，预计将在解决当前积压的 PR 后发布新版本。

## 3. 项目进展
今日项目进展主要集中在稳定性修复、功能增强与开发者体验优化三个方向：

*   **安全性修复**：针对 Shell 命令执行的安全漏洞，PR [#4594](https://github.com/HKUDS/nanobot/pull/4594) 修复了路径提取逻辑，防止通过等号语法绕过工作区限制。
*   **关键 Bug 修复**：
    *   针对安装脚本在非交互式终端下的崩溃问题，PR [#4602](https://github.com/HKUDS/nanobot/pull/4602) 提供了修复，优化了安装体验。
    *   针对 Streaming 模式下 Tool Call ID 被覆盖导致会话污染的严重 Bug，PR [#4596](https://github.com/HKUDS/nanobot/pull/4596) 提出了修复方案。
*   **生态与集成**：
    *   PR [#4598](https://github.com/HKUDS/nanobot/pull/4598) 新增了对 GitHub Enterprise (GHE) 端点的覆盖支持，扩展了企业级应用场景。
    *   PR [#4601](https://github.com/HKUDS/nanobot/pull/4601) 为 WhatsApp 频道增加了已读回执功能，提升了即时通讯体验。
*   **WebUI 改进**：PR [#4600](https://github.com/HKUDS/nanobot/pull/4600)（已关闭/合并）重构了 Prompt Minimap，优化了界面展示。

## 4. 社区热点
今日社区讨论焦点集中在项目定位与技术细节优化上：

*   **[Issue #660](https://github.com/HKUDS/nanobot/issues/660) - 关于“轻量级”定义的争论**
    该 Issue 虽已关闭，但引发了 15 条评论和 5 个点赞。用户 @besoeasy 指出项目自称“超轻量级”但 Dockerfile 包含 Python 和 Node.js 依赖显得臃肿。这反映了核心用户群对 NanoBot 保持极简架构的强烈期待，维护者需在未来开发中权衡功能丰富度与镜像体积。
*   **[Issue #4419](https://github.com/HKUDS/nanobot/issues/4419) - 推理深度自动调节**
    用户建议根据任务复杂度自动调整 `reasoningEffort` 参数，显示出用户对 Agent 智能化与成本控制平衡的高级需求。
*   **[PR #4578](https://github.com/HKUDS/nanobot/pull/4578) - Provider 级代理配置**
    该 PR 旨在支持 Provider 维度的代理配置，解决了复杂网络环境下多 Provider 切换的痛点，是社区亟需的功能增强。

## 5. Bug 与稳定性
今日报告了若干影响使用体验的 Bug，社区响应迅速：

*   **严重**:
    *   **安装脚本崩溃** ([Issue #4599](https://github.com/HKUDS/nanobot/issues/4599)): 用户在使用默认 Linux 安装脚本时 TUI 界面闪退。**状态**: 已有修复 PR [#4602](https://github.com/HKUDS/nanobot/pull/4602)。
    *   **会话 ID 污染** ([Issue #4595](https://github.com/HKUDS/nanobot/issues/4595)): Streaming 模式下非文件编辑工具的 ID 被错误覆盖，导致后续会话永久失效。**状态**: 已有修复 PR [#4596](https://github.com/HKUDS/nanobot/pull/4596)。
*   **中等**:
    *   **Shell 路径提取遗漏** ([Issue #4592](https://github.com/HKUDS/nanobot/issues/4592)): 安全守卫未能正确解析等号后的绝对路径，存在绕过沙箱风险。**状态**: 已有修复 PR [#4594](https://github.com/HKUDS/nanobot/pull/4594)。
*   **低危/已知问题**:
    *   Prompt 缓存失效 ([Issue #4222](https://github.com/HKUDS/nanobot/issues/4222)): 已关闭，涉及上下文治理机制。

## 6. 功能请求与路线图信号
通过分析 Issue 与 PR，以下功能方向可能纳入下一阶段路线图：

*   **外部触发机制** ([Issue #4605](https://github.com/HKUDS/nanobot/issues/4605) & [PR #4591](https://github.com/HKUDS/nanobot/pull/4591)): 用户强烈希望能够通过外部脚本触发 Agent 动作。PR #4591 已实现会话级本地触发器，这将极大增强 NanoBot 的自动化集成能力。
*   **上下文成本优化** ([PR #4581](https://github.com/HKUDS/nanobot/pull/4581), [PR #4588](https://github.com/HKUDS/nanobot/pull/4588)): 社区正致力于减少输入 Token 消耗，包括压缩子代理输出和修剪工具结果。这是提升长对话模型可用性的关键。
*   **Anthropic OAuth 支持** ([Issue #4604](https://github.com/HKUDS/nanobot/issues/4604)): 针对 Anthropic 提供商的 OAuth 认证需求已提上日程。

## 7. 用户反馈摘要
*   **架构关注**: 用户对“轻量级”定义敏感，不希望引入过重的依赖（如 Node.js）。
*   **使用场景**: 用户正在尝试将 NanoBot 集成到邮件分类、外部自动化脚本等实际工作流中，这要求项目提供更好的 API 或触发器支持。
*   **环境兼容**: 用户 @HaoyangSunMartin 在 [Issue #4580](https://github.com/HKUDS/nanobot/issues/4580) 中反馈在子进程执行时对虚拟环境的支持不足，表明项目在复杂开发环境下的适配性仍有提升空间。

## 8. 待处理积压
目前项目响应速度较快，无明显长期积压问题。但以下 Issue 值得关注：

*   **[Issue #4580](https://github.com/HKUDS/nanobot/issues/4580) [enhancement]**: 请求支持子进程使用 Conda 环境。该需求在实际部署场景中非常普遍，目前暂无对应 PR，建议维护者评估优先级。
*   **[Issue #4418](https://github.com/HKUDS/nanobot/issues/4418) [Feature]**: 心跳任务结果投递通道问题。该功能请求涉及多任务调度逻辑，目前仅 3 条评论，可能需要更多讨论以确定技术方案。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-30)

## 1. 今日速览
Zeroclaw 项目今日保持极高的开发活跃度，过去 24 小时内有 50 条 Issue 更新和 50 条 PR 更新，显示出社区与核心团队紧密协作。目前共有 40 个待合并 PR，重点集中在扩展渠道支持（如 Inkbox、Matrix）、增强 Gateway 兼容性（OpenAI Chat Completions 端点）以及提升 CI/CD 安全性（SLSA 认证）。项目正处于功能迭代与稳定性修复并行阶段，多个高优先级的运行时和 Provider 错误正在被积极处理，同时关于工作流治理的 RFC 讨论热烈，预示着项目治理结构正在规范化。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
尽管没有新版本发布，项目在功能扩展和缺陷修复方面取得了实质性进展：

*   **渠道与集成扩展**：PR #8384 正在添加原生 Inkbox 渠道支持，涵盖 Email、SMS、Voice 和 iMessage；PR #8443 为 Matrix 增加了单消息流式草稿功能；PR #8486 试图在 Gateway 中增加 OpenAI Chat Completions 端点，这将极大提升与现有 LLM 生态工具的兼容性。
*   **安全与基础设施**：PR #8277 引入了 SLSA Build L3 来源认证以增强发布管道的安全性；PR #8516 增加了对仓库子模块的完整性检查。
*   **缺陷修复**：Issue #2128（Cron/Heartbeat 发送 NO_REPLY 文本问题）和 Issue #8327（工具调用图片标记格式问题）已关闭，提升了运行时稳定性。PR #8476 修复了 vLLM 环境下工具调用判断逻辑的兼容性问题。

## 4. 社区热点
今日社区讨论焦点集中在治理规范与 Provider 兼容性上：

*   **[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** (评论 12 条)：关于 "Work Lanes, Board Automation, and Label Cleanup" 的 RFC 提案最受关注。社区正致力于优化项目看板自动化和标签管理，以减轻维护者负担，目前状态为 "Accepted / rollout in progress"。
*   **[Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)** (评论 11 条)：Kimi-code provider 在流式调用工具时触发 API 错误的问题持续引发讨论。这是一个 P1 级别的阻塞问题，涉及 `reasoning_content` 缺失，影响了特定 Provider 的核心对话功能。
*   **[Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)** (评论 9 条)：关于系统提示词中工具可用性状态与实际请求不匹配的问题。该 Bug 影响所有入口点，正在修复中，涉及 Agent 推理逻辑的核心修正。

## 5. Bug 与稳定性
今日报告的关键 Bug 主要集中在 Provider 兼容性和运行时行为：

*   **P1 - 阻塞工作流**：
    *   [Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)：Kimi provider 流式工具调用报错 (Provider: compatible/kimi)。
    *   [Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)：系统提示词工具可用性不匹配，影响推理模型。
    *   [Issue #7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756)：OpenAI/Anthropic reasoning 模式下原生/MCP 工具不可用。
*   **P2 - 行为降级**：
    *   [Issue #8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)：Channel 任务在无回复意图时仍发送可见响应，需定义一级 "no-reply" 结果。
    *   [Issue #7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800)：ZeroCode TUI 的快捷键提示误导用户，特别是在 macOS 上。
*   **修复中**：
    *   [PR #8476](https://github.com/zeroclaw-labs/zeroclaw/pull/8476)：修复 vLLM 0.19+ 版本因空工具列表导致 HTTP 400 的问题。

## 6. 功能请求与路线图信号
社区提出了多项关键功能需求，部分已有对应 PR 实现或处于 RFC 阶段：

*   **桌面端控制 (RFC)**：[Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) 提议增加 Computer-use 能力，允许 Agent 截屏并控制本地鼠标/键盘，这是迈向系统级 Agent 的关键一步。
*   **Webhook 增强**：[Issue #2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) 请求支持自定义 Webhook 路径和转换，以便处理任意 Payload，提升通用集成能力。
*   **Dashboard 升级**：[Issue #6365](https://github.com/zeroclaw-labs/zeroclaw/issues/6365) 和 [Issue #8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) 均指向在 Web Dashboard 中增加 "Update ZeroClaw" 按钮，允许用户通过 UI 进行版本升级，提升运维便利性。
*   **OCI 插件存储**：[Issue #7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) 提议使用 OCI 容器注册表作为 WASM 插件的存储与分发机制，替代 JSON index，这将极大改善插件的发现与分发体验。

## 7. 用户反馈摘要
*   **痛点**：用户在使用非 OpenAI 标准的兼容 Provider（如 Kimi、vLLM）时，频繁遇到工具调用和流式响应解析错误，表明生态兼容性测试仍需加强。此外，ZeroCode 的快捷键设计让部分 macOS 用户感到困惑。
*   **场景需求**：有用户强烈希望能通过 Telegram Webhook 替代现有的长轮询模式，以适应不同的网络环境。同时，对 WhatsApp 群聊的被动上下文吸收需求也在增加。
*   **积极信号**：社区对 RFC 的讨论参与度较高，特别是关于工作流自动化和 OTel 可观测性增强的提案，显示出用户对项目长期健康发展的关注。

## 8. 待处理积压
*   **[Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)**：Kimi Provider 错误已持续近 3 个月（创建于 4 月），虽被接受但仍有待彻底解决，建议维护者优先跟进。
*   **[Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)**：关于恢复批量回滚中丢失的 153 个提交的审计任务，状态为 "In Progress"，需持续追踪以防代码遗失。
*   **[Issue #2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467)**：Webhook transforms 功能请求自 3 月提出至今仍为 Open，虽被接受但未见具体实现 PR，是高价值积压项。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-30)

## 1. 今日速览
Hermes Agent 今日维持高活跃度，社区反馈与贡献量均处于高位。过去24小时内共有 50 条 Issue 更新（新增/活跃 47 条）和 50 条 PR 更新，显示出社区对项目的高度关注。然而，项目目前的**处理吞吐量存在明显瓶颈**，Issues 关闭率极低（仅 3 条关闭），PR 合并积压严重（待合并 44 条 vs 已处理 6 条）。核心讨论集中在 TUI 稳定性、多平台适配（Telegram/Email/Desktop）以及安全边界的加固上。整体项目健康度：**活跃度高，但需关注维护响应速度**。

## 2. 版本发布
无。

## 3. 项目进展
尽管待合并 PR 积压较多，今日仍有 6 个 PR 被处理（合并/关闭），主要集中在用户体验优化和认证增强：
- **Windows 网关体验优化**：PR [#49615](https://github.com/NousResearch/hermes-agent/pull/49615) 修复了 Windows 下网关启动时的控制台窗口弹出问题，提升了后台运行的纯净度。
- **资源监控增强**：PR [#55204](https://github.com/NousResearch/hermes-agent/pull/55204) 已合并，为 `/usage` 命令增加了按类别（System prompt, Skills, Memory 等）的上下文细分统计，帮助用户精细化调试 Token 消耗。
- **企业级认证支持**：PR [#55344](https://github.com/NousResearch/hermes-agent/pull/55344) 为 Dashboard 引入了对 OIDC 机密客户端（Confidential Clients）的支持，完善了自托管场景下的安全认证体系。

## 4. 社区热点
今日讨论最热烈的 Issue 聚焦于**长时间运行会话的稳定性**与**核心功能的一致性**：
- **TUI 网关崩溃问题** ([#27282](https://github.com/NousResearch/hermes-agent/issues/27282))：该 Issue 引发了 10 条评论，用户报告在 macOS 上 TUI 模式下网关经常因 `stdin EOF` 意外退出，中断任务。这反映了社区对 CLI/TUI 模式作为主力工具的稳定性焦虑。
- **持久化 Agent 循环契约** ([#21172](https://github.com/NousResearch/hermes-agent/issues/21172))：评论数达 6 条，讨论了“一等公民 Loop Contract”的需求，即如何在 Cron 任务中声明式地控制预算、停止和刷新。这表明用户正尝试将 Hermes Agent 用于长期自主运行的场景。
- **桌面端交互细节** ([#37527](https://github.com/NousResearch/hermes-agent/issues/37527))：用户对桌面端长对话滚动“回弹” Bug 反响强烈，影响查阅历史记录的体验。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，部分已有修复 PR：
- **[P1] 安全边界与凭据管理**：
    - Issue [#20591](https://github.com/NousResearch/hermes-agent/issues/20591)：凭据池错误读取系统环境变量而非用户配置的 `.env`，存在安全隐患。
    - Issue [#55367](https://github.com/NousResearch/hermes-agent/issues/55367)：ACP 自动批准逻辑未处理符号链接，可能导致敏感文件被绕过审查修改。
- **[P2] 平台兼容性与解析错误**：
    - Issue [#54891](https://github.com/NousResearch/hermes-agent/issues/55367)：Google Gemini CLI OAuth 失效，目前无替代方案，影响 Gemini 用户接入。
    - Issue [#55383](https://github.com/NousResearch/hermes-agent/issues/55383) & [#55381](https://github.com/NousResearch/hermes-agent/issues/55381)：邮件平台处理异常字符集或畸形头部时崩溃。
    - **已修复**：PR [#55384](https://github.com/NousResearch/hermes-agent/pull/55384) 和 [#55382](https://github.com/NousResearch/hermes-agent/pull/55382) 分别针对上述邮件解析问题提出了修复。
- **[P2] 会话状态持久化**：
    - Issue [#55088](https://github.com/NousResearch/hermes-agent/issues/55088)：HTTP 会话删除后磁盘文件残留，可能导致隐私泄露或存储浪费。

## 6. 功能请求与路线图信号
社区提出了多项旨在增强自主性与跨平台能力的 Feature Request：
- **受保护的 Skills** ([#25083](https://github.com/NousResearch/hermes-agent/issues/25083))：建议引入不可变 Skills，防止 Agent 修改关键提示词或安全规则。
- **跨平台会话接力** ([#54981](https://github.com/NousResearch/hermes-agent/issues/54981))：用户强烈希望能从 Telegram 继续未完成的 Desktop 会话，打破平台隔离。
- **模型路由策略** ([#55039](https://github.com/NousResearch/hermes-agent/issues/55039))：建议为子 Agent 委派设置深度模型路由（顶层用强模型，底层用廉价模型），以优化成本。
- **判断**：上述需求均有较高的业务价值，特别是“受保护 Skills”与现有的安全加固趋势相符，极有可能在下一阶段纳入规划。

## 7. 用户反馈摘要
- **桌面端体验**：用户对宠物动画的过度随机移动表示干扰（PR [#55400](https://github.com/NousResearch/hermes-agent/pull/55400) 已尝试修复），同时对鼠标滚轮在长对话中的表现不满。
- **稳定性痛点**：Cron 任务、SSH 连接持久化、以及 TUI 模式下的中断是主要痛点。用户反馈“Agent 总是在长时间运行后断连”。
- **配置与调试**：用户希望有更细粒度的 Token 用量查看（PR #55204 已响应此需求），并希望更新命令支持指定 Tag 版本而非仅 Main 分支 ([#52814](https://github.com/NousResearch/hermes-agent/issues/52814))。

## 8. 待处理积压
- **PR 积压严重**：目前有 **44 个 PR 处于待合并状态**，包括重要的安全修复（如邮件解析 #55384）和功能增强（如 DeepSeek V4 模型规范化 #55388）。建议维护团队优先处理涉及安全和 P2 级别的 Bugfix PR。
- **长期 Issue 关注**：Issue [#32626](https://github.com/NousResearch/hermes-agent/issues/32626)（桌面端 SSH 隧道配置重启后丢失）已存在一段时间，影响了远程运维场景的用户体验，建议提上修复日程。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 (2026-06-30)

## 1. 今日速览
PicoClaw 项目今日整体保持稳步推进态势，虽然未发布新版本，但社区活跃度较高。过去24小时内，项目成功关闭了一个关于 iOS 兼容性的 Bug，显示出维护者对跨平台体验的重视。目前有 3 个功能性 PR 处于待合并状态，涵盖了通信网关扩展、AWS Bedrock 性能优化及 Token 用量监控，预示着下一次版本更新将带来显著的功能增强。社区对隐私通信网关（如 SimpleX/Tox）的需求呼声较高，值得维护者关注。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无已合并的 PR，但有 3 个重要的功能性 PR 处于活跃待合并状态，项目正向着更广泛的生态集成与更精细的监控能力迈进：

- **通信生态扩展**：PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) 提议增加 Delta Chat 网关，目前仍在审核中，这将显著扩展 PicoClaw 作为 AI 助手的消息触达能力。
- **性能与成本优化**：PR [#3163](https://github.com/sipeed/picoclaw/pull/3163) 针对 AWS Bedrock 引入了 Prompt Caching（提示词缓存）支持，利用 `cache points` 降低延迟与调用成本，这对企业级用户是重大利好。
- **可观测性增强**：PR [#3156](https://github.com/sipeed/picoclaw/pull/3156) 旨在通过 Pico 通道输出每轮对话的详细 Token 用量（输入/输出分离），填补了精细化资源监控的空白。

此外，Issue [#3090](https://github.com/sipeed/picoclaw/issues/3090) 的关闭标志着 iOS 16.4 以下版本的 Safari 兼容性问题已得到解决或处理，提升了 Web Panel 的设备覆盖率。

## 4. 社区热点
今日讨论热度最高的议题集中在**隐私通信集成**与**特定模型适配**：

- **隐私通信需求强烈**：Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093) 获得了 1 个点赞和 4 条评论。用户 @Damian-o2 强烈请求集成 SimpleX、Wire 或 Tox 网关。这反映出 PicoClaw 的部分用户群体对去中心化、高隐私性的通信渠道有明确诉求，希望 AI 助手能在此类协议上运行。
- **特定模型兼容性问题**：Issue [#3153](https://github.com/sipeed/picoclaw/issues/3153) 反映了 Volcengine (字节跳动) Doubao Seed 模型在 Tool Calls 时的异常行为，引发了关于特定模型适配稳定性的讨论。

## 5. Bug 与稳定性
今日新增/活跃 Bug 报告 2 条，其中 1 条已关闭：

- **[HIGH] 特定模型工具调用失效**：Issue [#3153](https://github.com/sipeed/picoclaw/issues/3153) 报告在使用火山引擎 Doubao Seed 2.0 Pro 模型时，Tool Calls 偶发以纯文本 `<seed:tool_call>` 形式泄露给用户，而非被系统拦截执行。这影响了特定模型下的 Agent 自动化流程，目前尚无修复 PR。
- **[RESOLVED] iOS 低版本兼容性**：Issue [#3090](https://github.com/sipeed/picoclaw/issues/3090) 报告在 iOS 16.4 以下版本的 Safari 浏览器中 Panel 无法工作。该 Issue 已于今日关闭，表明此类兼容性问题已得到确认或修复。

## 6. 功能请求与路线图信号
结合 Issues 与 PRs 分析，项目路线图呈现出明显的**多渠道适配**与**企业级特性**趋势：

- **通信网关扩充**：用户在 Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093) 请求 SimpleX/Tox 支持，而 PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) 正在推进 Delta Chat。这表明项目正演变为多协议统一的 AI Agent 接入层。维护者可考虑整合这些需求，制定明确的 IM/Gateway 支持列表。
- **企业级监控与优化**：PR [#3163](https://github.com/sipeed/picoclaw/pull/3163) 的缓存优化与 PR [#3156](https://github.com/sipeed/picoclaw/pull/3156) 的 Token 监控，均指向降低生产环境成本和提高可控性，这是项目走向成熟商用的信号。

## 7. 用户反馈摘要
从 Issue 评论中提炼出的关键反馈如下：
- **痛点**：特定大模型（如 Volcengine Doubao）的适配仍存在边缘情况，特别是工具调用解析层面，用户期望开箱即用的稳定性。
- **场景**：部分技术型用户将 PicoClaw 部署于树莓派等 ARM 架构设备上，并对旧版系统/浏览器存在兼容需求。
- **满意点**：用户对 AWS Bedrock 等云服务的集成跟进速度表示认可（通过 PR 活跃度侧面反映），期待通过缓存机制降低成本。

## 8. 待处理积压
- **长期未合并 PR**：PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) (Delta Chat Gateway) 自 6 月 8 日开启至今已超过 3 周，建议维护者 @trufae 或团队尽快进行最终 Review 或反馈受阻原因，避免贡献者热情流失。
- **功能请求悬而未决**：Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093) 关于 SimpleX/Tox 的请求已开启近 20 天，且有用户互动，建议维护者给出是否纳入路线图的明确回复。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-30)

## 1. 今日速览
NanoClaw 项目今日保持较高的开发活跃度，主要集中在多通道适配器的完善与系统安全性加固。过去24小时内共有 7 条 PR 更新和 1 条新 Issue 产生，虽然无新版本发布，但代码库变动频繁。核心贡献者聚焦于 Discord 适配器的集成、Slack Socket Mode 的设置流程优化以及关键的符号链接安全漏洞修复。整体来看，项目正处于功能快速迭代与稳定性修补并行的阶段，社区对多平台支持的反馈积极。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 2 条 PR 被关闭（可能包含合并或拒绝），具体进展如下：

- **PR #2883 [CLOSED] feat: voice-notify v3 意图分流 + kill-switch**
  - **链接**: [nanocoai/nanoclaw PR #2883](https://github.com/nanocoai/nanoclaw/pull/2883)
  - **进展**: 该 PR 对语音播报功能进行了重大重构，将原本“一刀切”的播报改为 5 类意图分流（action/silent/navigate/tech_status/notify），并增加了运行时 kill-switch。测试覆盖率达到 38/38，已通过编译与审查。该功能的引入显著提升了 Agent 语音交互的智能化水平。
  
- **PR #2882 [CLOSED] fix(ncl): default messaging-groups create instance to channel_type**
  - **链接**: [nanocoai/nanoclaw PR #2882](https://github.com/nanocoai/nanoclaw/pull/2882)
  - **进展**: 修复了 CLI 工具 `ncl messaging-groups create` 中的数据库 `NOT NULL` 约束违规错误。通过补充缺失的 `instance` 字段声明，修复了 CRUD 插入逻辑，确保了命令行工具的基础稳定性。

> **分析**: 虽然状态显示为 CLOSED，但根据提交信息（"C1 review GO"），#2883 极有可能是合并后关闭，标志着语音交互模块的一次重要升级；#2882 则修复了底层 CLI 的阻塞性 Bug。

## 4. 社区热点
今日社区关注焦点集中在 Discord 集成的兼容性问题上：

- **Issue #2888 [OPEN] Discord 适配器丢失图片/文件附件内容**
  - **链接**: [nanocoai/nanoclaw Issue #2888](https://github.com/nanocoai/nanoclaw/issues/2888)
  - **分析**: 用户 @eagansilverpathmarketing 反馈在 Discord 中发送图片时，Agent 仅能接收到文件元数据（文件名、类型、大小），而无法读取实际内容。相比之下 Telegram 适配器工作正常。这暴露了 `chat-sdk-bridge.ts` 在处理 Discord 附件流时的逻辑缺陷。由于 Discord 是当前开发热点（见 PR #2884），该问题的解决将直接影响多模态能力的落地。

## 5. Bug 与稳定性
今日报告的关键 Bug 和修复尝试如下，按严重程度排序：

1.  **[高危-安全] PR #2880: 修复符号链接逃逸漏洞**
    - **链接**: [nanocoai/nanoclaw PR #2880](https://github.com/nanocoai/nanoclaw/pull/2880)
    - **详情**: 修复了 CWE-59 安全漏洞。Agent 容器可写目录中的符号链接可能被利用写入宿主机任意文件。该 PR 在文件写入逻辑中增加了严格的校验，防止逃逸攻击，属于关键安全补丁。

2.  **[中等-功能] Issue #2888: Discord 附件内容丢失**
    - **详情**: 如上所述，导致多模态功能在 Discord 渠道失效。目前暂无关联 Fix PR，需关注是否与 #2884 的重构有关。

3.  **[中等-鉴权] PR #2886: 修复单提供商安装时的 401 错误**
    - **链接**: [nanocoai/nanoclaw PR #2886](https://github.com/nanocoai/nanoclaw/pull/2886)
    - **详情**: 修复了在连接新聊天频道并创建新 Agent 时，因强制继承内置默认 Provider 而非安装时配置的 Provider 导致的 401 未授权错误。

## 6. 功能请求与路线图信号
从今日的 Open PRs 中可以看到明确的功能扩展信号：

- **多平台适配器扩展**:
  - **PR #2884** 正式添加 Discord 通道适配器，并修复了 Gateway 模式下的路由问题，显示项目正积极补齐主流 IM 平台支持。
  - **PR #2885** 补齐了 Slack Socket Mode 的引导设置流程，解决了此前 Webhook-only 的限制，降低了 Slack 集成的部署门槛。

- **可观测性增强**:
  - **PR #2871** 提出了 Dashboard Pusher 功能，支持将状态快照推送到外部 Dashboard，表明项目正在向企业级可观测性与监控集成方向演进。

## 7. 用户反馈摘要
从 Issue #2888 的反馈中可以提炼出以下痛点：

- **跨平台体验一致性差**: 用户期望在 Discord 上获得与 Telegram 一致的体验，特别是在处理文件和图片这类多模态内容时。当前实现中，开发者可能低估了不同平台 SDK 在附件获取上的差异，导致 Discord 用户遇到“盲人摸象”的情况（Agent 知道有文件但看不见内容）。

## 8. 待处理积压
以下重要 PR 处于 Open 状态，等待合并或进一步审查，建议维护者优先关注：

1.  **PR #2880 (安全修复)**: 涉及宿主机安全，建议尽快合并。
2.  **PR #2886 (Bug Fix)**: 影响新用户接入流程，修复成本低，建议优先处理。
3.  **PR #2884 (Feature)**: Discord 适配器核心功能，但也可能与 Issue #2888 存在关联，建议联合审查。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-06-30)

## 1. 今日速览
NullClaw 项目今日整体呈现“开发活跃、社区反馈初现”的状态。核心开发者在过去24小时内密集更新了4个 PR，重点聚焦于 CLI 交互体验优化与流式传输能力的重构，显示出项目正处于功能完善与细节打磨阶段。社区方面，新增一条来自生产环境的 Bug 反馈，涉及 Telegram 通道的连接稳定性问题，值得维护者关注。目前暂无新版本发布，代码库处于持续集成与迭代中。

## 2. 版本发布
**无**

## 3. 项目进展
今日项目在核心功能与用户体验层面均有实质性推进，主要体现在以下合并与代码变更：

*   **CLI 交互体验重构迭代**：此前提交的 [PR #960](https://github.com/nullclaw/nullclaw/pull/960)（修复 REPL 箭头键处理）已于今日关闭。开发者并未放弃该功能，而是几乎同步提交了功能相同但实现更优的 [PR #970](https://github.com/nullclaw/nullclaw/pull/970)。这一“关一开”的动作表明项目对代码质量有较高要求，新 PR 引入了无分配的行编辑器并支持 POSIX 原始模式，将显著提升 `nullclaw agent` 在终端中的交互流畅度（如历史导航、光标移动）。
*   **流式工具调用能力增强**：[PR #971](https://github.com/nullclaw/nullclaw/pull/971) 处于 Open 状态，旨在解耦流式传输路径下的原生工具调用支持。该变更是架构层面的优化，解决了此前流式传输中强制禁用原生工具的问题，有望显著提升 AI 智能体在复杂任务流中的响应效率与功能完整性。

## 4. 社区热点
今日社区活跃度较低，但出现了一个高质量的生产环境反馈：

*   **[Issue #972](https://github.com/nullclaw/nullclaw/issues/972) Telegram 通道闲置后无响应**
    *   **热度**：新开 Issue，目前尚无评论。
    *   **分析**：用户在生产环境（AWS EC2 实例）中部署 NullClaw 后，发现 Telegram 通道在隔夜闲置后“假死”，虽然后端进程响应正常（`ping` 指令有响应），但前端通道中断。这反映了用户将 NullClaw 作为长期服务运行的痛点，涉及连接保活或会话管理机制，是目前社区唯一的焦点问题。

## 5. Bug 与稳定性
今日报告 1 个 Bug，按严重程度分析如下：

*   **[中等] [Issue #972](https://github.com/nullclaw/nullclaw/issues/972) Telegram 通道连接中断**
    *   **现象**：Telegram 通道在长时间 Idle 后停止响应，重启前无法恢复。
    *   **影响**：影响长期运行的生产环境稳定性，导致通知或交互失效。
    *   **状态**：OPEN，暂无修复 PR。用户已提供后端日志表明核心进程存活，定位线索较为清晰。

## 6. 功能请求与路线图信号
通过今日的 PR 活动，可以捕捉到明确的路线图信号：

*   **交互体验 (UX) 升级**：[PR #970](https://github.com/nullclaw/nullclaw/pull/970) 表明项目方正在致力于将 `nullclaw agent` 打造成一个具备完整终端交互能力（历史记录、行编辑）的成熟 CLI 工具，而非简单的命令行程序。
*   **架构解耦**：[PR #971](https://github.com/nullclaw/nullclaw/pull/971) 暗示项目正在向更高级的 AI 智能体架构演进，支持流式场景下的原生工具调用是提升 Agent 智能度和响应速度的关键特性。

## 7. 用户反馈摘要
从 [Issue #972](https://github.com/nullclaw/nullclaw/issues/972) 的描述中，我们可以提炼出以下用户画像与痛点：

*   **部署场景**：用户倾向于在云服务器（如 AWS EC2）上以守护进程或长期运行的模式部署 NullClaw。
*   **痛点**：连接稳定性是目前的主要障碍。用户反馈后端逻辑正常但通道中断，说明问题可能出在 I/O 层或第三方 API 连接池管理上，而非核心推理逻辑。
*   **满意度**：用户能够深入排查并提供后端日志，说明其对项目底层架构有一定了解，属于高阶用户，对系统的健壮性有较高期待。

## 8. 待处理积压
*   **[PR #956](https://github.com/nullclaw/nullclaw/pull/956)**：Dependabot 提出的 Docker 镜像依赖更新（Alpine 3.23 -> 3.24），已挂起约半个月，建议维护者尽快合并以消除潜在的安全或兼容性隐患。
*   **[Issue #972](https://github.com/nullclaw/nullclaw/issues/972)**：新报 Bug，需维护者确认是否为普遍问题，建议优先复现。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-30)

## 1. 今日速览
IronClaw 项目今日保持高频开发态势，过去 24 小时内 PR 更新量达 50 条，Issue 更新 15 条，显示项目正处于功能密集迭代与质量收敛阶段。团队重点推进了 "Reborn" 架构的测试覆盖率提升与 WebUI v2 的细节打磨，合并了多项关键的 E2E 测试与本地化修复。虽然今日无新版本 Release 发布，但发布准备 PR (#5311) 正在推进中，预示着包含 API 变更的 v0.29.1 版本即将到来。QA 团队反馈积极，但发现了多项 P1/P2 级别的功能阻断性问题，主要集中在 Google 集成与 Routine（自动化）模块。

## 2. 版本发布
*今日无新版本发布。*

> **注：** 虽然无正式发布，但 PR #5311 正在准备 `v0.29.1` 版本，涉及 `ironclaw_common` 和 `ironclaw_skills` 的 API 破坏性更新，开发者需提前关注。

## 3. 项目进展
今日共有 21 个 PR 被合并或关闭，主要进展集中在测试基础设施建设、UI 优化和架构重构：

*   **测试覆盖与基建 (核心进展)**：
    *   PR #5402 合并，为 Reborn 增加了共享持久化“组”测试，覆盖了审批、认证失败、内存、密钥等核心场景，显著提升了后端稳定性。
    *   PR #5371 与 #5372 合并，将遗留的浏览器测试覆盖迁移至 Reborn WebUI，确保了聊天历史、认证 UX 等核心功能的稳定性。
    *   PR #5427 合并，重构了 mock-MCP 测试脚手架，提升了代码可维护性。

*   **WebUI v2 优化**：
    *   PR #5401 合并，实现了工具和扩展文案的本地化，解决了硬编码英文问题，提升国际化体验。
    *   PR #5423 优化了 QA 流程，允许 Routine 相关测试接受更多样化的措辞。

*   **架构设计**：
    *   PR #5425 关闭，确立了多用户 RBAC 收敛设计方案，为后续权限管理奠定了基础。

## 4. 社区热点
今日讨论与关注焦点主要围绕授权流程与自动化功能展开：

*   **[Issue #5413](https://github.com/nearai/ironclaw/issues/5413) [CLOSED]**：关于 OAuth 刷新静默失败的问题。作者指出 "Reborn" 模式下的 OAuth 刷新机制在没有应用刷新时静默通过，导致问题难以排查。该 Issue 已关闭，表明核心团队已定位并着手修复相关逻辑。
*   **[Issue #5196](https://github.com/nearai/ironclaw/issues/5196) [CLOSED]**：工具权限 "Ask each time" 导致授权错误并触发重复审批流程。此问题严重影响了用户交互体验，目前已关闭，推测已修复。
*   **[PR #5149](https://github.com/nearai/ironclaw/pull/5149) [OPEN]**：关于“上下文管理——渐进式工具披露”的大型 PR。旨在解决因提示词过长导致的 NEAR AI 超时问题，是一个备受期待的性能优化功能，目前仍在进行中。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，按严重程度排序如下：

*   **P1 (严重阻断)**：
    *   **[Issue #5415](https://github.com/nearai/ironclaw/issues/5415)**：多工具 Google Sheets 工作流因“协议违规”错误失败。涉及 18-25 次工具调用的复杂任务稳定性堪忧。
    *   **[Issue #5426](https://github.com/nearai/ironclaw/issues/5426)**：无法创建 Routine，系统提示“系统驱动器不可用”，直接阻断了自动化功能的创建。

*   **P2 (功能异常)**：
    *   **[Issue #5420](https://github.com/nearai/ironclaw/issues/5420)**：Routine 投递目标作用域错误。设置一个 Routine 为 Slack 投递会导致该账户下所有 Routine 都转向 Slack，严重影响多场景自动化使用。
    *   **[Issue #5421](https://github.com/nearai/ironclaw/issues/5421)**：Web 搜索功能在 Chat 可用的情况下仍重复提示 NEAR AI API Key 认证，且默认未激活零配置能力。
    *   **[Issue #5416](https://github.com/nearai/ironclaw/issues/5416)**：Google 连接状态显示矛盾，未认证即显示已连接，随后又提示安装未激活，导致用户困惑。
    *   **[Issue #5417](https://github.com/nearai/ironclaw/issues/5417)**：Hacker News 搜索激活了错误的技能。

*   **P3 (体验优化)**：
    *   **[Issue #5419](https://github.com/nearai/ironclaw/issues/5419)**：缺乏重命名 Automation 的功能，导致长名称难以管理。
    *   **[Issue #5418](https://github.com/nearai/ironclaw/issues/5418)**：工具活动后，对话消息排序错乱，Agent 回复出现在工具活动块上方而非底部。

## 6. 功能请求与路线图信号
*   **上下文长度优化**：PR #5149 显示团队正在通过“渐进式工具披露”来大幅削减 Prompt Token 消耗（目标从 25.8k 降至更低），以解决超时问题，这是迈向生产环境可用性的关键一步。
*   **自动化体验完善**：Issue #5419 提出的重命名需求及 Issue #5420 提出的投递目标作用域隔离，指出了当前 Routine 功能在生产环境中的具体痛点，预计将成为下一阶段的重点优化方向。
*   **权限系统重构**：Issue #4776 (Closed) 和 PR #5425 (Closed) 暗示了“全局始终允许”设置和多用户 RBAC 权限设计正在落地中，这将极大提升工具授权的灵活性。

## 7. 用户反馈摘要
*   **痛点：授权流程繁琐与状态混乱**。用户反馈在连接 Gmail、Slack 等工具时，经常遇到“已连接”但实际未授权的矛盾提示（#5416），或者在 Web 搜索时被不必要地要求输入 API Key（#5421）。
*   **痛点：Routine 功能不成熟**。作为核心卖点之一，Routine 目前存在致命的作用域污染问题（#5420），即修改一个配置会影响全局，导致用户不敢轻易使用自动化功能。
*   **满意度：响应速度**。团队对 OAuth 静默失败（#5413）和权限审批循环（#5196）的修复响应迅速，相关 Issue 已关闭，体现了对核心流程问题的重视。

## 8. 待处理积压
*   **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108) [OPEN]**：Nightly E2E 测试持续失败，已持续一个月（创建于 5 月 27 日）。这表明 CI/CD 流水线中存在不稳定的测试用例或环境问题，需要维护者关注。
*   **大型 PR 待合并**：PR #5149 (上下文优化) 和 PR #5311 (Release 准备) 尚未合并，这两者对项目下一阶段的性能与版本迭代至关重要。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-30)

## 1. 今日速览
LobsterAI 项目今日处于**高活跃度发布状态**，正式推出了 **v2026.6.29** 版本。过去24小时内项目合并/关闭了高达 39 个 PR，显示出团队在集中修复 OpenClaw 运行时稳定性与 Cowork 界面交互问题。社区方面，Issues 互动主要集中在 UI 细节优化建议与功能支持请求上，同时存在关于积分订阅机制的争议反馈。整体来看，项目正致力于提升 AI Agent 的长时记忆稳定性和前端交互体验。

## 2. 版本发布
**版本号**: LobsterAI 2026.6.29
**发布日期**: 2026-06-29
**更新重点**:
- **权限与安全**: 修复了 OpenClaw 插件审批路由，现通过权限系统进行校验 ([PR #2217](https://github.com/netease-youdao/LobsterAI/pull/2217))。
- **UI 修复**: 清理了导航栏的预览界面，优化视觉体验 ([PR #2218](https://github.com/netease-youdao/LobsterAI/pull/2218))。
- **稳定性增强 (基于相关 PR 推断)**: 包含对 Agent 工作空间目录隔离的修复，防止身份/记忆文件被用户项目目录覆盖 ([PR #2227](https://github.com/netease-youdao/LobsterAI/pull/2227))。

## 3. 项目进展
今日共有 **39 个 PR 更新**（主要为合并/关闭），项目整体向稳定版迈出重要一步：
- **OpenClaw 核心修复**:
    - **关键修复**: [PR #2227](https://github.com/netease-youdao/LobsterAI/pull/2227) 修复了 Agent 启动工作空间与任务运行目录混淆的问题，确保 Agent 的身份和长期记忆文件 (`SOUL.md`, `MEMORY.md` 等) 不受用户项目文件干扰，解决了潜在的 Agent “失忆”问题。
    - **历史同步**: [PR #2220](https://github.com/netease-youdao/LobsterAI/pull/2220) 修复了定时任务的历史记录保留问题。
    - **缓存稳定**: [PR #2219](https://github.com/netease-youdao/LobsterAI/pull/2219) 引入了用户轮次序列化缓存稳定性补丁。
- **前端交互优化**:
    - **导航重构**: [PR #2226](https://github.com/netease-youdao/LobsterAI/pull/2226) 重新应用了会话轨道修复，解决了导航栏悬停样式和延迟加载问题。此前团队经历了一次误合并与回滚 ([PR #2225](https://github.com/netease-youdao/LobsterAI/pull/2225)), 现已修正。
    - **诊断日志**: [PR #2229](https://github.com/netease-youdao/LobsterAI/pull/2229) 添加了 Cowork 和 OpenClaw 流程的诊断日志，便于生产环境排查问题。
- **发布流程**: [PR #2228](https://github.com/netease-youdao/LobsterAI/pull/2228) 将 `release/2026.6.29` 分支合并至 `main`，标志版本正式上线。

## 4. 社区热点
今日讨论较多或关注度较高的问题：
- **[Issue #2081 订阅积分清零争议](https://github.com/netease-youdao/LobsterAI/issues/2081)**: 用户反映未使用的 5500 积分在月底被清零，质疑订阅机制的合理性。该 Issue 已被关闭，建议官方补充更明确的订阅过期政策说明。
- **[Issue #2131 Hermes Agent 支持](https://github.com/netease-youdao/LobsterAI/issues/2131)**: 用户询问是否计划支持 Hermes agent，体现了社区对扩展 Agent 框架兼容性的期待。
- **[Issue #2120 功能体验建议](https://github.com/netease-youdao/LobsterAI/issues/2120)**: 用户提出了三项具体改进：任务预输入队列、延长单次任务运行时长限制、调整高分辨率下的 UI 布局。这些反馈直接指向了当前产品在连续工作流和界面适配上的短板。

## 5. Bug 与稳定性
今日报告的新增及活跃 Bug 如下，按严重程度排序：
- **严重/核心功能受阻**:
    - **[Issue #2079 执行结果窗口假死](https://github.com/netease-youdao/LobsterAI/issues/2079)**: 2026.5.27 版本中，执行结果窗口滚动到顶端会导致应用假死，现象可复现，目前尚无修复 PR。
    - **[Issue #1388 邮箱配置连通性无响应](https://github.com/netease-youdao/LobsterAI/issues/1388)**: 点击测试邮箱连通性后系统卡死，长期未解决。
- **一般/体验问题**:
    - **[Issue #2121 Token 重复消耗疑虑](https://github.com/netease-youdao/LobsterAI/issues/2121)**: 用户怀疑 Claw 组件存在重复输出导致 Token 浪费，需排查是否为流式输出渲染或逻辑问题。
    - **[Issue #1386 分享截图不全](https://github.com/netease-youdao/LobsterAI/issues/1386)**: 长会话分享生成长图时内容截断。
- **已修复**:
    - **Agent 身份丢失/记忆错乱**: 今日发布的版本通过 [PR #2227](https://github.com/netease-youdao/LobsterAI/pull/2227) 修复了工作空间目录错误导致的此类问题。

## 6. 功能请求与路线图信号
- **任务连续性增强**: 用户请求支持“任务预输入”（[Issue #2120](https://github.com/netease-youdao/LobsterAI/issues/2120)），结合近期 PR 对 Cron 定时任务和会话历史的修复 ([PR #2190](https://github.com/netease-youdao/LobsterAI/pull/2190), [PR #2191](https://github.com/netease-youdao/LobsterAI/pull/2191))，项目正在加强任务调度的健壮性，任务队列管理可能纳入后续规划。
- **监控与日志**: [PR #2229](https://github.com/netease-youdao/LobsterAI/pull/2229) 增强的诊断日志功能，响应了用户对任务中断（[Issue #2120](https://github.com/netease-youdao/LobsterAI/issues/2120) 提及的 `terminated` 问题）排查难点的诉求。

## 7. 用户反馈摘要
- **痛点**:
    - **Token 消耗**: 用户对 Token 消耗非常敏感，重复输出会导致不信任感 ([Issue #2121](https://github.com/netease-youdao/LobsterAI/issues/2121))。
    - **运行时长限制**: 在数据获取等长耗时脚本场景下，现有监控时长限制过短，影响开发效率 ([Issue #2120](https://github.com/netease-youdao/LobsterAI/issues/2120))。
    - **订阅政策**: 积分清零机制引发用户不满，建议优化过期提醒或政策 ([Issue #2081](https://github.com/netease-youdao/LobsterAI/issues/2081))。
- **场景**: 用户正尝试将 LobsterAI 用于高分辨率屏幕 (2560*1600) 的办公环境，并利用其进行长脚本数据监控，说明产品已深入实际生产场景。

## 8. 待处理积压
以下 Issue 长期处于 Open/Stale 状态，建议维护者优先关注：
- **[Issue #1389 语言切换显示错误](https://github.com/netease-youdao/LobsterAI/issues/1389)**: 英文模式下部分选项仍显示中文，影响国际化体验。
- **[Issue #1390 定时任务更新无响应](https://github.com/netease-youdao/LobsterAI/issues/1390)**: 偶现的严重功能性 Bug，阻碍自动化配置。
- **[PR #1277 依赖更新](https://github.com/netease-youdao/LobsterAI/pull/1277)**: Electron 相关依赖更新 PR 已挂起近 3 个月，需评估安全风险及合并计划。

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

# CoPaw (QwenPaw) 项目动态日报 (2026-06-30)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持**高活跃度**开发状态，共处理 **50 条 PR 更新**（其中 32 条已合并/关闭），显示团队正在密集迭代。Issues 方面共更新 **26 条**，关闭 11 条，新增 15 条，社区互动活跃。项目正处于 **v2.0.0-beta.1** 验证阶段，核心精力集中在 AgentScope 2.0 适配、Windows 桌面端体验优化（托盘、路径处理）以及子智能体生命周期的重构上。整体来看，项目正加速向 2.0 正式版迈进，但性能优化（卡顿、缓存命中率）和部分连接性 Bug 仍是当前用户反馈的重点。

## 2. 版本发布
*   **无正式版本发布**。
*   **注意**：根据 Issue #5571，项目正在进行 **v2.0.0-beta.1** 的安装验证流程。PR #5576 已将 AgentScope 依赖升级至 2.0.3，预示着下一版本将带来底层架构的重大更新。

## 3. 项目进展
今日共有 **32 个 PR 被合并或关闭**，主要集中在稳定性修复与架构升级：

*   **架构升级与重构**：
    *   [PR #5576](https://github.com/agentscope-ai/QwenPaw/pull/5576)：将依赖 `agentscope` 版本升级至 2.0.3，为 v2.0 正式版做准备。
    *   [PR #5634](https://github.com/agentscope-ai/QwenPaw/pull/5634)：移除了旧版 `/plan` 命令相关的 E2E 测试代码，彻底清理遗留架构。

*   **关键 Bug 修复**：
    *   [PR #5557](https://github.com/agentscope-ai/QwenPaw/pull/5557)：修复心跳任务 120 秒硬编码超时问题，改为可配置，解决了复杂任务被误中断的问题（关联 Issue #5539）。
    *   [PR #5635](https://github.com/agentscope-ai/QwenPaw/pull/5635)：修复 Windows 平台路径解析错误，确保本地文件上传功能在 Windows 环境下的兼容性。
    *   [PR #5629](https://github.com/agentscope-ai/QwenPaw/pull/5629)：优化记忆系统提示词，防止 Agent 过度激进地写入记忆，改善上下文管理。

*   **功能增强**：
    *   [PR #5643](https://github.com/agentscope-ai/QwenPaw/pull/5643)：对侧边栏会话列表进行虚拟化渲染和去重优化，有望解决大量会话导致的 UI 卡顿问题。
    *   [PR #4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) (Open)：基于 Tauri 实现系统托盘功能，支持后台运行，正在持续迭代中。

## 4. 社区热点
今日社区讨论集中在**成本控制**与**使用体验**上：

*   **[Issue #3891](https://github.com/agentscope-ai/QwenPaw/issues/3891)**：DeepSeek 模型前缀缓存命中率仅 95% 引发关注。用户指出 5% 的未命中率导致成本翻倍（从 ¥0.5/M tokens 跳跃至 ¥2/M tokens）。这是一个长期存在的优化点，用户强烈希望能进一步提升缓存策略以降低使用成本。
*   **[Issue #5555](https://github.com/agentscope-ai/QwenPaw/issues/5555)**：用户反馈最新版本存在明显卡顿，性能问题已成为阻碍升级的主要因素。
*   **[Issue #5622](https://github.com/agentscope-ai/QwenPaw/issues/5622)**：Windows 桌面端用户强烈请求增加“系统托盘”功能，希望在关闭窗口后能保持后台运行，这是桌面应用的高频刚需。

## 5. Bug 与稳定性
今日报告并处理了多处严重程度较高的 Bug：

*   **🔴 严重**：
    *   **Remote SSH 插件死循环** ([Issue #5550](https://github.com/agentscope-ai/QwenPaw/issues/5550))：依赖安装循环且旧进程残留，严重影响远程开发体验。状态：已关闭（已修复）。
    *   **自动化任务异常终止** ([Issue #5616](https://github.com/agentscope-ai/QwenPaw/issues/5616))：自动化任务非手动干预下莫名停止，稳定性存疑。状态：Open。

*   **🟡 中等**：
    *   **工具执行安全逻辑失效** ([PR #5623](https://github.com/agentscope-ai/QwenPaw/pull/5623))：将工具安全设置为“OFF”后仍触发审批流程，修复 PR 已提交。
    *   **自定义模型连接失败** ([Issue #5584](https://github.com/agentscope-ai/QwenPaw/issues/5584))：v1.1.7 后版本无法连接 ascend-vllm 自定义模型，影响私有化部署。状态：Open。
    *   **图片安全审核误判** ([Issue #5505](https://github.com/agentscope-ai/QwenPaw/issues/5505))：MiniMax 模型审核错误被错误缓存，导致后续视觉能力失效。状态：Closed。

## 6. 功能请求与路线图信号
*   **多模态增强**：[Issue #5615](https://github.com/agentscope-ai/QwenPaw/issues/5615) 请求纯文本模型支持图片自动转文字描述，表明用户对混合模态处理有强烈需求。
*   **企业级集成**：
    *   [Issue #5593](https://github.com/agentscope-ai/QwenPaw/issues/5593) 请求钉钉通道支持图片预览而非文件发送。
    *   [Issue #5630](https://github.com/agentscope-ai/QwenPaw/issues/5630) 请求 Telegram 通道支持自定义 BaseURL（应对网络代理需求）。
*   **架构演进信号**：[PR #5637](https://github.com/agentscope-ai/QwenPaw/pull/5637) 正在重构子智能体为事件驱动生命周期，这将是 AgentScope 2.0 架构下的重要能力扩展。

## 7. 用户反馈摘要
*   **痛点**：DeepSeek 用户对 API 成本敏感，缓存策略直接关系到真金白银的开销；Windows 用户对桌面端的后台驻留能力期待已久；部分用户反映新版本存在性能退化（卡顿）。
*   **场景**：企业用户在使用飞书、钉钉、企业微信等 Channel 时，对文件、图片的处理细节要求较高（如长消息截断、图片预览）。
*   **满意度**：尽管存在 Bug，但团队修复响应速度极快（如心跳超时、Windows 路径问题），且积极接纳 Tauri 等新技术方案，社区对项目发展方向持乐观态度。

## 8. 待处理积压
*   **[Issue #3891](https://github.com/agentscope-ai/QwenPaw/issues/3891)**：DeepSeek 缓存命中率优化（长期未解决，涉及核心成本）。
*   **[Issue #5555](https://github.com/agentscope-ai/QwenPaw/issues/5555)**：性能卡顿问题（影响升级体验）。
*   **[PR #4041](https://github.com/agentscope-ai/QwenPaw/pull/4041)**：Windows 托盘功能（开发周期较长，需持续跟进）。
*   **[PR #5187](https://github.com/agentscope-ai/QwenPaw/pull/5187)**：Windows GUI 自动化功能（Computer Use），作为高风险高收益功能，仍在审核中。

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