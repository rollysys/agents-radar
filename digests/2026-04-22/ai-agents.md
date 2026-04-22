# OpenClaw 生态日报 2026-04-22

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-22 02:49 UTC

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

# OpenClaw 项目动态日报 (2026-04-22)

## 1. 今日速览
OpenClaw 项目今日呈现出极高的开发与社区活跃度，Issues 与 PRs 更新量均达到 500 条，显示项目正处于快速迭代的高峰期。项目刚刚发布了 **v2026.4.20** 正式版及 Beta 版，重点优化了新手向导（Onboarding Wizard）的安全提示样式与加载体验。然而，高强度的迭代伴随着显著的稳定性挑战，**大量用户反馈在更新后遭遇依赖缺失（如 `grammy`, `@buape/carbon`）导致启动失败**，这已成为今日社区反馈的最强音。目前待合并 PR 积压已达 303 个，项目维护者在推进功能开发的同时，亟需解决安装包完整性与依赖管理的燃眉之急。

## 2. 版本发布
今日发布了 **v2026.4.20** 及其 Beta 版本，主要变更集中在用户体验优化：
*   **Onboarding/Wizard 重设计**：重构了安全免责声明的样式，采用了黄色警告横幅、分段标题和项目符号列表，提升了关键指引的可读性。
*   **加载体验优化**：在初始模型目录加载期间增加了 loading spinner，解决了向导界面在加载过程中空白的问题。

## 3. 项目进展
今日共有 **197 个 PR 被合并或关闭**，主要推进了以下领域：
*   **模型生态扩充**：合并了对 **MiniMax M2.7** 和 **GLM 5.1** 模型的目录支持，进一步丰富了 OpenCode Go 的模型选择 ([PR #66715](https://github.com/openclaw/openclaw/pull/66715), [PR #66709](https://github.com/openclaw/openclaw/pull/66709))。
*   **Docker 构建修复**：修复了 Dockerfile 中未安装扩展依赖的问题，解决了飞书等插件在 Docker 环境下无法加载的顽疾 ([PR #37602](https://github.com/openclaw/openclaw/pull/37602))。
*   **平台兼容性增强**：针对 Windows 平台修复了网关重启时的误判逻辑 ([PR #66627](https://github.com/openclaw/openclaw/pull/66627)) 和 CLI WebSocket 握手超时问题 ([PR #66297](https://github.com/openclaw/openclaw/pull/66297))。
*   **工具链建设**：引入了 PR Review 自动修复流水线 ([PR #68936](https://github.com/openclaw/openclaw/pull/68936))，标志着项目自动化维护能力的提升。

## 4. 社区热点
*   **跨平台客户端需求持续高涨**：Issue [#75](https://github.com/openclaw/openclaw/issues/75) (Linux/Windows Clawdbot Apps) 再次活跃，累积评论数达 89 条。社区对 Linux 和 Windows 原生客户端的呼声极高，希望能达到与 macOS 客户端相似的功能水平。
*   **Skill 安全机制深度探讨**：Issue [#55342](https://github.com/openclaw/openclaw/issues/55342) 提出了 "Behavioral reputation for OpenClaw skills" 的 RFC，旨在通过行为信誉系统防御恶意 Skill。该议题触及了当前 AI Agent 生态安全的核心痛点，引发了关于身份验证之外更深层次安全防护的讨论。

## 5. Bug 与稳定性
今日报告的 Bug 集中在**依赖管理与模型调用**层面，部分问题严重阻碍用户使用：
*   **[P0] 严重依赖缺失 (Regression)**：
    *   多名用户报告 v2026.4.8 及 v2026.4.20 更新后无法启动，提示 `Cannot find module '@buape/carbon'` ([Issue #62994](https://github.com/openclaw/openclaw/issues/62994)) 或 `grammy` ([Issue #69831](https://github.com/openclaw/openclaw/issues/69831))。
    *   WhatsApp 运行时缺失 `@whiskeysockets/baileys` ([Issue #69842](https://github.com/openclaw/openclaw/issues/69842))。
    *   **状态**：部分 Issue 已关闭，修复可能已包含在近期 PR 中，但用户反馈显示安装包或更新流程仍存在碎片化问题。
*   **[P1] 模型调用失败**：
    *   Azure AI Foundry 与 GitHub Copilot 模型出现 schema 拒绝错误 ([Issue #65603](https://github.com/openclaw/openclaw/issues/65603), [Issue #68735](https://github.com/openclaw/openclaw/issues/68735))。
    *   OpenAI Codex 接口遭遇 Cloudflare 403 拦截 ([Issue #66633](https://github.com/openclaw/openclaw/issues/66633))。
*   **[P2] 功能性缺陷**：
    *   macOS App 无法识别 Homebrew 安装的二进制文件 ([Issue #17890](https://github.com/openclaw/openclaw/issues/17890))。
    *   Context usage 状态栏始终显示 0% ([Issue #44184](https://github.com/openclaw/openclaw/issues/44184))，该问题长期未解。

## 6. 功能请求与路线图信号
*   **Notion 深度集成**：PR [#69604](https://github.com/openclaw/openclaw/pull/69604) 提议大幅扩展 Notion 插件 API 覆盖范围（20+ 工具），显示项目正强化生产力工具链。
*   **TTS 语音合成扩展**：PR [#10356](https://github.com/openclaw/openclaw/pull/10356) 计划引入 Typecast 提供商，支持情感预设与亚洲语言，响应了语音交互场景的需求。
*   **Windows 平台支持增强**：多个针对 Windows 的修复 PR（如任务解析、Loopback 握手）表明项目正在补齐 Windows 平台的短板，呼应了 Issue #75 的需求。

## 7. 用户反馈摘要
*   **安装/更新体验受损**：用户普遍对频繁的依赖缺失感到沮丧，甚至有用户在 Issue 中出现情绪化言论（如 #63129），认为"国内开发者代码质量污染项目"，这反映出部分用户对项目打包发布流程的不满。
*   **配置迁移痛点**：用户反馈从旧版升级至新版（如 2026.3.28 -> 2026.4.5）时经常遇到配置不兼容或模块缺失，导致"升级即崩溃"。
*   **功能不完整**：Memory Search 在中国大陆地区的代理配置问题长期未解，影响了部分用户的核心使用体验。

## 8. 待处理积压
以下高关注度 Issue 长期未得到有效解决，建议维护者优先关注：
*   **[长期未解] Linux/Windows 客户端缺失** ([Issue #75](https://github.com/openclaw/openclaw/issues/75))：评论数最高，严重限制了用户群体的扩展。
*   **[长期未解] Context Usage 显示异常** ([Issue #44184](https://github.com/openclaw/openclaw/issues/44184))：影响用户对 Agent 状态的监控。
*   **[长期未解] OAuth Token 不持久化** ([Issue #52037](https://github.com/openclaw/openclaw/issues/52037))：导致用户频繁重新授权，影响 OpenAI Codex 等服务的使用体验。

---

## 横向生态对比

# AI 智能体开源生态日报横向分析 (2026-04-22)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**功能爆发后的架构重构与稳定性巩固期**。头部项目（OpenClaw, IronClaw）正在经历大规模的底层架构演进（如 Engine v2、Pipeline 重构），以解决单体内核的扩展瓶颈；腰部项目则聚焦于**多模态、多渠道集成**（Email、Web3、企业通讯）及**国内大模型适配**（MiniMax, GLM, DeepSeek）。整体生态呈现出“高迭代伴随高风险”的特征，依赖管理缺失、配置迁移困难和跨平台兼容性成为阻碍用户升级的三大痛点，安全漏洞（如沙箱逃逸）的频发也标志着项目正从“玩具级”向“生产级”过渡。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PRs 活跃度 | Release 情况 | 健康度评估 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 极高 (500+) | 极高 (303 积压) | v2026.4.20 (正式/Beta) | ⚠️ 风险预警 | 依赖缺失、跨平台、模型生态 |
| **IronClaw** | 高 (28 updates) | 高 (50 updates) | v0.26.0 | ⚠️ 风险预警 | Engine v2、沙箱生命周期、Linux故障 |
| **NanoBot** | 高 (关闭60) | 高 (合并67) | v0.1.5.post2 | ✅ 健康 | 安全修复、Windows支持、文档解析 |
| **CoPaw** | 高 (关闭30) | 高 (合并17) | v1.1.3-beta.2 | ✅ 健康 | 品牌重塑、记忆重构、API增强 |
| **Hermes Agent** | 高 (42 新增) | 高 (41 积压) | 无 | 🔄 快速迭代 | Provider适配、沙箱安全、代理阻塞 |
| **PicoClaw** | 中 | 高 (合并12) | v0.2.6-nightly | 🔄 快速迭代 | 架构重构、认证安全、飞书增强 |
| **NanoClaw** | 中 | 中 (合并13) | 无 | 🔄 快速迭代 | Web3集成、路由串线、安装脚本 |
| **Zeroclaw** | 净负增长 | 中 (合并18) | 无 (筹备v0.7.4) | ✅ 稳健 | 架构统一、Docker修复、RBAC提案 |
| **LobsterAI** | 低 | 高 (合并17) | v2026.4.21 | ✅ 稳健 | Email通道、钉钉修复、Diff异常 |
| **Moltis** | 中 | 低 | v20260421.05 | ✅ 稳健 | 权限绕过修复、Telegram集成 |
| **EasyClaw** | 无公开交互 | 无 | v1.8.3 (连发3版) | ⚠️ 单向维护 | macOS签名、安装障碍 |
| **ZeptoClaw** | 低 | 低 | 无 | ✅ 维护模式 | 配置兼容性 |
| **NullClaw** | 低 | 无 | 无 | 🔵 静默 | Tailscale兼容、网络隧道 |
| **TinyClaw** | 无 | 无 | 无 | 🔵 静默 | - |

## 3. OpenClaw 在生态中的定位

OpenClaw 作为生态的核心参照项目，具有以下鲜明特征：

*   **生态规模领先，但稳定性承压**：作为唯一拥有 500+ 日更新量的项目，OpenClaw 的模型生态支持（MiniMax, GLM）和插件广度处于绝对领先地位。然而，这种快速扩张导致了严重的“依赖地狱”问题（`grammy`, `@buape/carbon` 缺失），反映出其在打包发布流程上存在短板，与 NanoBot 等稳健迭代项目形成对比。
*   **技术路线：大而全的集成平台**：不同于 IronClaw 专注底层引擎重构或 NanoClaw 专注 Web3 场景，OpenClaw 走的是“全栈集成”路线。它既是功能的集散地（Notion, WhatsApp, TTS），也是 Bug 的高发区。其社区反馈的多样性（从 Linux 客户端需求到 OAuth 持久化）印证了其作为“通用底座”的定位。
*   **社区成熟度：用户基数大，反馈两极**：社区对 OpenClaw 的依赖极深，导致对稳定性问题（如启动失败）的容忍度低，甚至出现情绪化反馈。相比之下，NanoBot 和 Zeroclaw 的社区更偏向技术探讨（如架构 RFC），氛围更为理性。

## 4. 共同关注的技术方向

各项目在今日的动态中呈现出高度一致的技术诉求：

1.  **模型兼容性与本地化适配**
    *   **涉及项目**：OpenClaw, NanoBot, Hermes Agent, CoPaw。
    *   **具体诉求**：社区不再满足于支持 OpenAI，对国内模型及开源模型的适配需求激增。OpenClaw 集成了 MiniMax 和 GLM；Hermes Agent 修复了 Kimi 原生支持和 DeepSeek Reasoner 格式；CoPaw 在处理 Anthropic API 兼容性。这反映出“去单一化”已成为生态共识。

2.  **多渠道与通讯集成**
    *   **涉及项目**：LobsterAI, Hermes Agent, PicoClaw, NanoClaw。
    *   **具体诉求**：AI Agent 正在从 Web 端向通讯工具渗透。LobsterAI 新增 Email 通道；Hermes Agent 和 PicoClaw 均在优化飞书/企业微信集成；NanoClaw 正在解决微信与 Telegram 的路由串线问题。企业级通讯集成是当前热点。

3.  **架构重构与安全性加固**
    *   **涉及项目**：IronClaw, Zeroclaw, NanoBot, Moltis。
    *   **具体诉求**：为应对日益复杂的功能，架构拆分势在必行。IronClaw 推进 Engine v2；Zeroclaw 重构 Providers 架构；PicoClaw 拆分 Agent Looper。同时，安全成为焦点，Moltis 和 NanoBot 均修复了严重的命令注入/权限绕过漏洞。

4.  **记忆与上下文管理**
    *   **涉及项目**：CoPaw, Hermes Agent, Zeroclaw。
    *   **具体诉求**：长对话带来的上下文爆炸是通用痛点。CoPaw 重构记忆模块，Hermes Agent 遭遇上下文压缩破坏 JSON 的问题，Zeroclaw 修复了 SQLite FTS 索引。如何高效存储和检索记忆是迈向生产级的关键。

## 5. 差异化定位分析

| 维度 | OpenClaw (核心参照) | IronClaw (架构先锋) | NanoBot/CoPaw (稳健派) | NanoClaw (场景特化) |
| :--- | :--- | :--- | :--- | :--- |
| **核心目标** | 通用 AI 助手标准底座 | 高性能沙箱与引擎架构 | 稳定性优先的功能迭代 | Web3 与边缘场景专用 |
| **技术架构** | 单体应用 + 插件生态 | 模块化 Engine v2 | 微内核 + Hook 机制 | 多通道路由 + 网关模式 |
| **目标用户** | 大众开发者、AI 爱好者 | 专业开发者、企业部署 | 需要稳定生产环境的用户 | Web3 用户、极客 |
| **主要痛点** | 依赖管理、升级体验 | 迁移兼容性、安装故障 | 记忆性能、API兼容性 | 跨通道路由、隐私隔离 |
| **典型特征** | 功能最全，更新最快，Bug 最多 | 架构最前沿，重构最激进 | 社区活跃，修复及时 | 集成闪电网络、Nostr |

## 6. 社区热度与成熟度

*   **第一梯队（快速迭代期）**：**OpenClaw, Hermes Agent, PicoClaw**。此阶段项目功能迭代极快，Issue 积压严重，社区声量大但抱怨较多，处于“狂野生长”向“稳定维护”的阵痛转型期。
*   **第二梯队（质量巩固期）**：**NanoBot, CoPaw, Zeroclaw, LobsterAI**。这些项目 PR 合并效率高，Bug 响应快（如 ZeptoClaw 迅速修复配置问题），社区讨论质量较高（如 Zeroclaw 的架构讨论），项目健康度良好。
*   **第三梯队（维护/特定场景期）**：**Moltis, EasyClaw, NullClaw**。项目活跃度较低，主要进行维护性修复或针对特定场景（如 EasyClaw 修复 macOS 签名），社区互动较少。

## 7. 值得关注的趋势信号

1.  **“依赖地狱”警示**：OpenClaw 频繁的启动失败为生态敲响警钟。随着 AI Agent 项目依赖链日益复杂，**打包发布流程的自动化与完整性检测**将成为项目维护的关键竞争点。
2.  **多模型适配的碎片化挑战**：虽然各项目都在支持多模型，但 schema 拒绝、字段缺失等兼容性问题层出不穷。未来可能出现**统一适配层**的标准化需求，或由上游 SDK（如 LiteLLM）主导解决。
3.  **Agent 安全边界的强化**：Moltis 和 NanoBot 相继修复的高危漏洞表明，Agent 具备代码执行能力后，**沙箱逃逸与权限控制**不再是可选项，而是必选项。IronClaw 的项目级沙箱生命周期管理代表了这一方向的高级形态。
4.  **记忆机制的重构潮**：从 CoPaw 的“梦境日志”到 Hermes Agent 的上下文压缩，传统的文件式记忆已无法满足长程任务需求。**向量化检索与结构化记忆存储**将在下一阶段成为标配。
5.  **Web3 与 AI 的融合初现**：NanoClaw 集成闪电网络与 Nostr 协议，预示着 **AI Agent 在去中心化身份（DID）与加密支付**领域的应用探索正在兴起，可能开辟出新的垂直赛道。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-22)

## 1. 今日速览
NanoBot 项目今日保持极高的活跃度，Issue 处理效率显著，共关闭 60 个 Issue，新开/活跃 8 个。项目发布了重要更新版本 `v0.1.5.post2`，合并了 67 个 PR，引入了 12 位新贡献者，标志着项目在扩展性和稳定性上迈出了重要一步。社区关注点集中在架构层面的 Prompt 保留机制、多模型兼容性修复以及安全性增强。整体来看，项目处于快速迭代后的稳定优化期，对新功能（如文档解析、多模态支持）的探索与对底层架构（如安全漏洞修复、Session 管理）的加固同步进行。

## 2. 版本发布
**v0.1.5.post2**  
[Release Link](https://github.com/HKUDS/nanobot/releases/tag/v0.1.5.post2)
- **更新亮点**：
  - **生态扩展**：新增对 Windows 平台和 Python 3.14 的支持，拓宽了使用场景。
  - **功能增强**：`read_file` 工具得到了重点更新（结合 PR #3336，推测增加了 Office 文档支持）。
  - **稳定性提升**：相比上一版本，重点在于扩大支持范围和打磨细节。
- **迁移注意**：官方描述为“reach and polish”，建议 Windows 用户和 Python 3.14 早期采用者尽快升级体验。

## 3. 项目进展
今日共更新 38 条 PR，其中 19 条已合并/关闭，显示出较高的代码合入效率。
- **文档与多模态支持**：PR #3336 的合并扩展了 `read_file` 工具对 Office 文档（DOCX, XLSX, PPTX）的支持，显著增强了 Agent 处理非结构化数据的能力。
- **模型兼容性修复**：PR #3363 修复了 MiniMax 模型的推理分离问题，解决了特定模型的调用兼容性。
- **安全性加固**：PR #3372 修复了严重的 Shell 命令注入漏洞（MIT-164），防止通过 `sh -c` 包装绕过黑名单检测；PR #3366 修复了非 Windows 平台下的路径注入漏洞。
- **数据持久化**：PR #3353 修复了 XLSX 文件读取时的资源释放问题，PR #3369 引入了优雅关闭时的 `fsync` 机制，防止缓存文件系统上的数据丢失。
- **数据统计**：PR #3365 引入了 PostHog 分析钩子，为后续用户行为分析打下基础。

## 4. 社区热点
- **架构争议：Prompt 完整性**：Issue #2463 讨论了 NanoBot 在持久化对话历史时未保留发送给模型的精确 Prompt Prefix，导致与 OpenAI API 行为冲突。该问题引发了对上下文缓存和架构设计的深层讨论，目前处于 Open 状态，需重点关注。
- **依赖安全焦虑**：Issue #2443 提及 LiteLLM 依赖被隔离的事件，引发了对供应链安全的担忧。Issue #161 提出的“用原生 SDK 替代 LiteLLM”提案虽然已关闭，但获得了 8 个点赞，显示出社区对底层依赖简化的强烈诉求。
- **Session 管理痛点**：Issue #2062 反映了在飞书等渠道中 Session 文件过大导致上下文爆炸的问题，用户目前需手动清理，社区急需更自动化的 Session 清理或重启机制。

## 5. Bug 与稳定性
- **高危安全漏洞 (已修复)**：
  - Shell 注入绕过 (Issue #3372)：攻击者可通过 `sh -c` 包装绕过命令审核。PR #3372 已合并修复。
  - 路径注入漏洞 (Issue #3366)：`path_append` 参数拼接导致的注入风险。PR #3366 已提交修复。
- **模型调用错误**：
  - Anthropic Provider 异常 (Issue #2200)：近期突然出现 BadRequest 错误，可能与上游 API 变更有关，目前无明确修复方案。
  - DeepSeek Reasoner 格式错误 (Issue #1225, #244)：缺少 `reasoning_content` 字段，影响推理链模型的调用，社区已有相关讨论但尚未彻底解决。
- **程序崩溃**：
  - SIGTERM 退出 (Issue #1833)：程序无原因退出，稳定性存疑，需进一步排查日志。

## 6. 功能请求与路线图信号
- **可观测性增强**：Issue #2189 呼吁集成 Langfuse 进行链路追踪，PR #3365 已引入 PostHog 钩子，显示团队正在构建可观测性体系。
- **成本控制**：PR #3368 提议为心跳任务单独配置模型（使用更便宜的模型），响应了社区对运行成本的敏感度。
- **渠道功能补全**：Issue #3344 提出钉钉群文件上传不支持的问题，PR #3361 提议在 WebUI 增加文件附件支持，显示出多模态交互能力的扩展趋势。
- **运维友好性**：PR #3373 增加了网关生命周期通知，方便监控服务启停状态。

## 7. 用户反馈摘要
- **痛点**：
  - **黑盒状态**：Issue #3107 指出当前 Agent 状态不透明，建议增加 Task 数目显示和超时可配置功能。
  - **上下文管理**：Session 文件无限增长撑爆上下文是高频痛点（Issue #2062），缺乏有效的自动清理或轮转机制。
  - **兼容性碎片化**：不同模型（DeepSeek, Anthropic, StepFun, MiniMax）接入时常遇到特定参数缺失或格式错误，体验割裂。
- **满意度**：社区对新版本增加 Windows 支持和文档解析能力表示欢迎，Issue 处理速度较快（如 Session 问题当日即有关闭记录），维护团队响应积极。

## 8. 待处理积压
- **Issue #2463 (Prompt Prefix 架构问题)**：目前仍为 Open 状态，涉及核心 Prompt 构建逻辑，可能影响上下文缓存效率和 API 兼容性，建议维护者尽快给出架构评估。
- **Issue #1157 (StepFun 模型 400 错误)**：自 2 月提出至今仍未完全解决，影响特定用户群的使用。
- **PR #3232 (Refactor task done-callback)**：重构了回调逻辑，目前处于 Open 状态，建议尽快 Review 合并以简化代码逻辑。
- **PR #3374 (DashScope reasoning_effort)**：修复 DashScope 参数兼容性，建议尽快合并以修复阿里云模型调用问题。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-22)

## 1. 今日速览
Zeroclaw 项目今日维持高活跃度，PR 更新量达 50 条，其中合并/关闭 18 条，显示出开发迭代节奏紧凑。Issues 处理呈现净负增长（关闭 14 条 vs 新开 13 条），表明维护团队正积极清理积压问题，项目健康度稳中有升。核心工作集中在 **v0.7.4 版本筹备**、**Onboard 向导架构重构**以及 **Docker/Web 端严重可用性问题修复**。整体来看，项目正处于架构优化期，致力于解决历史技术债务并提升多渠道部署的稳定性。

## 2. 版本发布
无新版本发布。根据 Issue #5877 的里程碑追踪，项目正致力于 v0.7.4 的开发与错误修复，预计将在解决当前的 Schema 迁移和 Docker 构建问题后发布。

## 3. 项目进展
今日共有 **18 条 PR 合并或关闭**，重点关注架构重构与关键 Bug 修复：

*   **架构重构与体验优化**：
    *   PR #5960 持续推进 **Onboard 向导的重写**，旨在用 Schema 驱动的轻量化架构替代原有的 8000+ 行单体代码，显著降低维护成本。
    *   PR #5937 发起了 **Providers 架构统一** 的重构提案，计划解决 `reqwest` 客户端管理混乱和代码重复问题，提升多模型支持的稳定性。
*   **关键修复与安全更新**：
    *   PR #5983 修复了 Docker 镜像中缺失 Web Dashboard 构建产物的问题，直接解决了用户反馈的 S1 级可用性问题。
    *   PR #5971 更新了 `rand` 等核心依赖补丁，修复了潜在的 ReDoS 漏洞和内存安全问题。
    *   PR #5985 修复了 SQLite FTS 索引在 Session 更新时的同步触发器缺失，保证了会话搜索功能的准确性。
*   **生态扩展**：
    *   PR #5921 新增了 **WASM 插件支持**（以 fal.ai Flux 为参考实现），展示了项目在 AI 生成能力插件化方面的扩展潜力。

## 4. 社区热点
今日社区讨论聚焦于 **部署可用性** 与 **架构演进**，以下条目互动最为频繁：

*   **[Issue #4866] [Bug]: Web dashboard is still not available** (17 评论)
    *   **链接**：zeroclaw-labs/zeroclaw Issue #4866
    *   **分析**：该问题长期困扰用户，涉及 Tauri 桌面端与 Docker 端的 Web UI 加载失败。今日该 Issue 被关闭，结合 PR #5983 的提交，显示核心团队已定位并修复了构建流程中的资源缺失问题。
*   **[Issue #5937] [Feature]: refactor: Unify providers architecture** (6 评论)
    *   **链接**：zeroclaw-labs/zeroclaw Issue #5937
    *   **分析**：社区开发者 @NiuBlibing 提出的深度重构建议引发了架构层面的讨论。当前 Provider 模块存在客户端实例管理不一致的问题，该提案有望成为后续版本提升 LLM 接入稳定性的关键。
*   **[Issue #5877] [ci] release: v0.7.4 milestone tracking** (5 评论)
    *   **链接**：zeroclaw-labs/zeroclaw Issue #5877
    *   **分析**：作为版本发布的集结号，该 Issue 追踪了包括 Skills、Schema 迁移在内的多项核心任务，是判断项目下一阶段发布节奏的风向标。

## 5. Bug 与稳定性
今日报告了多个影响工作流的严重 Bug，部分已有修复方案：

*   **S1 - Workflow Blocked (严重阻塞)**：
    *   **Docker Dashboard 不可用** (Issue #5959, #4866)：Docker 镜像未包含 Web 构建产物。
        *   *状态*：**已修复**，见 PR #5983。
    *   **Desktop 端崩溃** (Issue #5984)：Tauri 桌面应用启动时报错 "No provider set"。
        *   *状态*：**待修复**，目前无对应 PR。
    *   **Ollama Provider 调用失败** (Issue #5962)：涉及 Tools 调用时抛出异常，阻塞会话。
        *   *状态*：**待修复**。
*   **S0 - Security Risk (安全风险)**：
    *   **Feishu 频道配置失效** (Issue #5672)：开启了 `mention_only` 后机器人仍响应非提及消息。
        *   *状态*：**已关闭**，推测已在主分支修复。
*   **功能回归与逻辑缺陷**：
    *   Issue #2324 指出非 CLI 渠道（如 Telegram）下的 `always_ask` 工具调用被静默拒绝，而非发起确认流程。
        *   *状态*：**已关闭**，PR #5979 似乎包含了对意图分类逻辑的修正。

## 6. 功能请求与路线图信号
社区与开发团队今日提出了多项面向未来的功能增强：

*   **多租户支持** (Issue #5982)：提出为每个 Sender 增加 RBAC（基于角色的访问控制），支持单一实例服务不同用户群体。这是项目向企业级平台演进的重要信号。
*   **Schema v3 迁移** (Issue #5947)：计划进行批量破坏性配置字段迁移，预示着 v0.7.4 或下个版本可能存在配置不兼容升级。
*   **Otel 可观测性增强** (Issue #5980)：用户希望追踪工具调用失败的详细原因，反映出在生产环境中对 Agent 行为监控的需求增加。

## 7. 用户反馈摘要
从今日 Issues 的评论与描述中提炼出以下痛点：

*   **部署门槛高**：用户抱怨 Linux 预编译安装器实际上仍尝试从源码编译（Issue #5967），对低配置机器极不友好，体验甚至不如直接 Docker 化。
*   **配置复杂度高**：用户在配置 OpenAI 兼容的自定义 Provider 时，对 `stream=true` 的强制要求感到困惑（Issue #4646），文档指引不足。
*   **多渠道交互体验不一致**：用户指出在 Telegram 等渠道下，Agent 的交互逻辑（如审批确认）与 CLI 模式存在差异，导致预期外的 "Denied" 行为（Issue #5591, #2324）。

## 8. 待处理积压
*   **Issue #5982 (Per-sender RBAC)**：作为新提出的高价值功能，尚无维护者认领或关联 PR，建议关注其对现有架构的影响。
*   **Issue #5959 (Web Dashboard in Docker)**：虽然已有修复 PR，但需等待合并与镜像重新构建发布，在此之前 Docker 用户需手动构建前端或使用临时方案。
*   **Issue #5877 (v0.7.4 Tracking)**：仍有部分 Skills 与文档任务处于 Open 状态，建议维护者优先完成其中的 `review-session skill` 以加速版本发布。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-04-22)

## 1. 今日速览
今日 Hermes Agent 项目保持高活跃度，社区反馈强烈。过去24小时内 Issues 更新达 50 条，其中新开/活跃 42 条，显示出用户在使用深度和广度上的拓展；PR 更新同样达到 50 条，但待合并数量高达 41 条，合并比相对较低，暗示代码审查积压或正在进行大规模重构。项目今日无新版本发布，但核心贡献者集中修复了若干关键的 Provider 兼容性（Kimi, MiniMax, Gemini）及安全性问题。整体来看，项目正处于快速迭代期，多方接入适配（尤其是国内模型与平台）是当前主要工作重心。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
尽管没有版本发布，今日合并的 PR 对系统稳定性和架构优化有显著推进：

*   **架构重构与传输层优化**：PR [#13430](https://github.com/NousResearch/hermes-agent/pull/13430) 合并，引入 `ResponsesApiTransport` 并重构了 Provider Transport 层。这是大型重构的第 4 部分，移除了旧版适配器，为支持更多模型 API 标准奠定了基础。
*   **Provider 适配修复**：
    *   **Kimi 原生支持**：PR [#13782](https://github.com/NousResearch/hermes-agent/pull/13782) 合并，使得 `sk-kimi-` 开头的密钥无需经过 OpenRouter 即可原生使用，修复了 User-Agent 和端点路由问题。
    *   **Gemini 多模态修复**：PR [#13787](https://github.com/NousResearch/hermes-agent/pull/13787) 修复了 Gemini 适配器无法处理字符串格式 `image_url` 的问题。
*   **安全性修复**：Issue [#7071](https://github.com/NousResearch/hermes-agent/issues/7071) 和 [#7072](https://github.com/NousResearch/hermes-agent/issues/7072) 均已关闭。这两大 P0 级沙箱逃逸和 Skills Guard 绕过漏洞已得到确认修复，显著提升了代码执行环境的安全性。
*   **工具与技能修正**：PR [#13775](https://github.com/NousResearch/hermes-agent/pull/13775) 修复了 `baoyu-comic` 技能中 curl 下载路径错误的问题，增强了文件操作的稳健性。

## 4. 社区热点
今日讨论最热烈的问题集中在**第三方平台集成**与**模型服务商兼容性**：

*   **Anthropic 代理路径混淆问题** ([#10575](https://github.com/NousResearch/hermes-agent/issues/10575))：评论数最高（6条）。用户在使用 Claude Max 代理路径时，系统误判 "extra usage exhausted"。这反映了高级用户通过 OAuth/代理接入 Claude 的复杂性，目前尚无完美解决方案。
*   **飞书 集成错误** ([#8246](https://github.com/NousResearch/hermes-agent/issues/8246))：国内用户在使用飞书审核流时遇到 200340 错误，而 Telegram 正常。这突显了多平台网关在国内企业软件环境下的适配难点。
*   **Skill 命名空间混淆** ([#10713](https://github.com/NousResearch/hermes-agent/issues/10713))：`skills_list` 的分类字段与插件命名空间冲突，导致调用逻辑混乱，引发了关于 API 设计一致性的讨论。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，部分已有修复方案：

*   **[P1] 子代理 无超时阻塞** ([#13768](https://github.com/NousResearch/hermes-agent/issues/13768))：子代理在调用慢速 API 时可能导致整个 Delegation 无限阻塞，缺乏心跳或超时机制。**尚无修复 PR**。
*   **[P1] 上下文压缩破坏 JSON 结构** ([#13574](https://github.com/NousResearch/hermes-agent/issues/13574))：`context_compressor` 截断 tool_call 参数时直接切片，导致 MiniMax 等严格校验 JSON 的 Provider 返回 400 错误。**尚无修复 PR**。
*   **[P2] 企业微信图片发送失败** ([#13769](https://github.com/NousResearch/hermes-agent/issues/13769))：参数名不匹配导致网关静默失败。
*   **[P2] MiniMax 健康检查 404** ([#13757](https://github.com/NousResearch/hermes-agent/issues/13757))：`hermes doctor` 使用了不存在的 `/models` 端点。**已有修复 PR** [#13780](https://github.com/NousResearch/hermes-agent/pull/13780)。
*   **[P2] Custom Provider 辅助任务失效** ([#13762](https://github.com/NousResearch/hermes-agent/issues/13762))：配置中的 `custom:` 前缀被错误剥离。**已有修复 PR** [#13781](https://github.com/NousResearch/hermes-agent/pull/13781)。

## 6. 功能请求与路线图信号
用户对增强 CLI 体验和多平台支持提出了明确需求：

*   **后台运行支持** ([#11347](https://github.com/NousResearch/hermes-agent/issues/11347))：请求在 CLI 模式下支持 `/detach` 功能，允许 Agent 在后台持续运行任务。这对应了 PR [#11355](https://github.com/NousResearch/hermes-agent/pull/11355)（Ctrl+C 优先级配置），可能被纳入下一阶段开发。
*   **Google Vertex AI 原生支持** ([#13484](https://github.com/NousResearch/hermes-agent/issues/13484))：用户希望直接通过 Service Account 接入 Vertex AI，而非依赖第三方代理。
*   **Cron 任务增强**：用户请求支持多目标投递 ([#13469](https://github.com/NousResearch/hermes-agent/issues/13469)) 和自定义头部/尾部模板 ([#13771](https://github.com/NousResearch/hermes-agent/issues/13771))。PR [#13779](https://github.com/NousResearch/hermes-agent/pull/13779) 已实现模板自定义功能，合并概率高。

## 7. 用户反馈摘要
*   **痛点**：国内大模型（MiniMax, Kimi）及办公平台（飞书、企业微信）的接入仍存在大量兼容性细节问题，用户需要频繁手动排查配置。
*   **场景**：重度用户正在利用 Hermes Agent 进行复杂的自动化任务（如 Cron 任务、Subagent Delegation），对超时控制、上下文管理提出了更高要求。
*   **满意度**：虽然 Bug 较多，但社区对 Bug 报告的响应较快（如 Kimi 相关问题迅速得到修复），显示出维护团队积极的态度。

## 8. 待处理积压
*   **PR 积压严重**：目前有 **41 个待合并 PR**。其中包括高优先级的修复，如 Agent 中断时清理未应答 Tool Calls 的 PR [#11354](https://github.com/NousResearch/hermes-agent/pull/11354) 和处理多模态中断的 PR [#12751](https://github.com/NousResearch/hermes-agent/pull/12751)。建议维护者优先审查 P1/P2 级别的 PR。
*   **长期未解 Issue**：Issue #10575 (Anthropic Proxy 错误分类) 自 04-16 开启至今仍未解决，影响了付费用户通过代理使用 Claude Max 的体验。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-22)

## 1. 今日速览
PicoClaw 项目今日保持**极高的开发活跃度**，共有 19 个 PR 发生变动，其中 12 个已顺利合并，显示出团队迭代速度极快。项目发布了最新的 **v0.2.6-nightly** 自动构建版本，标志着新功能正在快速集成中。今日重点集中在**架构重构**（Agent Pipeline 重构）、**安全性增强**（Dashboard 密码认证替代 Token）以及**多渠道适配**（微信、飞书功能增强）。虽然新增了 3 个 Bug Issue，但同时也关闭了 2 个，社区反馈与修复形成良性闭环。

## 2. 版本发布
- **nightly: Nightly Build (v0.2.6-nightly.20260422.279c496b)**
  - **更新说明**：这是一个自动化构建版本，包含了截至今日的所有最新代码变更。鉴于今日有大量架构重构和安全更新，建议测试人员关注稳定性。
  - **变更范围**：涵盖了从 v0.2.6 到 main 分支的所有提交，主要包括 Agent 核心逻辑重构和 WebUI 认证机制的变更。
  - **注意事项**：官方提示该版本可能不稳定，生产环境部署需谨慎。

## 3. 项目进展
今日合并了多项关键改进，显著提升了项目的架构质量与安全性：

- **架构重构 (核心进展)**：PR [#2585](https://github.com/sipeed/picoclaw/pull/2585) 完成了 Agent Looper 的第二阶段重构，将原本 1500 行的单体 `loop.go` 拆分为清晰的 Pipeline 架构（SetupTurn, CallLLM 等），极大提升了代码的可维护性。
- **安全性增强**：PR [#2608](https://github.com/sipeed/picoclaw/pull/2608) 将 Launcher Dashboard 的认证方式从 Token 改为了更安全的 bcrypt 密码哈希存储，修复了潜在的安全隐患。
- **认证修复**：PR [#2599](https://github.com/sipeed/picoclaw/pull/2599) 修复了 Google Antigravity 提供商的凭据过期不一致问题，解决了历史遗留的认证存储混乱。
- **功能增强**：
    - PR [#2607](https://github.com/sipeed/picoclaw/pull/2607) 增强了飞书渠道，支持群聊触发和表情回复配置。
    - PR [#2595](https://github.com/sipeed/picoclaw/pull/2595) 优化了 Web 端频道配置的列表编辑体验。
    - PR [#2537](https://github.com/sipeed/picoclaw/pull/2537) 新增了 `/context` 命令，用户可查看 Token 消耗情况。

## 4. 社区热点
今日社区关注点主要集中在配置复杂性和多语言支持上：

- **配置认证问题 ([#2548](https://github.com/sipeed/picoclaw/issues/2548))**：用户报告在配置 Gemini 自定义模型时遇到 "Multiple authentication credentials received" 错误。这反映出用户对多模型、多提供商的配置逻辑存在困惑，目前该 Issue 仍处于 Open 状态，需关注是否与今日合并的配置重构 PR 有关。
- **国际化遗漏 ([#2367](https://github.com/sipeed/picoclaw/issues/2367))**：用户指出应用最后一屏的标题在切换英语后仍显示中文。这是一个典型的 UI 国际化 Bug，影响了非中文用户体验。
- **WebUI 升级故障 ([#2598](https://github.com/sipeed/picoclaw/issues/2598))**：用户反馈从 0.2.4 升级到 0.2.6 后 WebUI 无法启动，该 Issue 已被关闭，推测已在最新的构建中得到修复或提供了有效的解决方案。

## 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，整体稳定性正在通过重构得到加固：

- **[已修复] Google Antigravity 认证失效**：Issue [#2550](https://github.com/sipeed/picoclaw/issues/2550) 指出 CLI 登录无法刷新 Token。**修复 PR**：[#2599](https://github.com/sipeed/picoclaw/pull/2599)（已合并）。
- **[已修复] 升级后 WebUI 崩溃**：Issue [#2598](https://github.com/sipeed/picoclaw/issues/2598) 报告升级导致 WebUI 无法连接。该 Issue 已关闭，推测已修复。
- **[待处理] 配置冲突**：Issue [#2548](https://github.com/sipeed/picoclaw/issues/2548) 提及的认证凭据冲突问题，目前尚无对应修复 PR 合并，建议关注 PR [#2609](https://github.com/sipeed/picoclaw/pull/2609)（重构 Provider 字段支持）是否能缓解此问题。
- **[待处理] SSE 流解析**：PR [#2411](https://github.com/sipeed/picoclaw/pull/2411) 正在修复 SSE 流分块解析问题，这对于流式对话的稳定性至关重要，目前仍在 Open 状态。

## 6. 功能请求与路线图信号
用户需求正推动项目向更完善的监控和协议支持方向发展：

- **Token 消耗监控 ([#2217](https://github.com/sipeed/picoclaw/issues/2217))**：用户请求在 WebUI 增加 Token 消耗统计仪表板。这与今日合并的 [#2537](https://github.com/sipeed/picoclaw/pull/2537)（增加 `/context` 命令查看上下文统计）方向一致，预计下个版本可能会进一步完善可视化统计功能。
- **MCP 协议支持**：PR [#2535](https://github.com/sipeed/picoclaw/pull/2535) 正在增加 MCP slash 命令支持，表明项目正在积极集成 Model Context Protocol，这是 AI Agent 互操作性的重要趋势。
- **微信渠道增强**：PR [#2606](https://github.com/sipeed/picoclaw/pull/2606) 提出的微信多实例支持，显示项目在 C 端用户接入场景上的投入。

## 7. 用户反馈摘要
- **痛点**：配置文件 (`config.json`) 的编写依然困扰用户，特别是涉及多 API Key 和 Provider 定义时容易产生冲突（如 #2548）。
- **场景**：用户广泛使用 PicoClaw 作为网关接入不同的大模型（如 Gemini, Google Antigravity），对客户端（Web/Launcher）的稳定性要求较高。
- **期望**：用户迫切希望看到可视化的 Token 消耗数据，以便控制成本（#2217）。

## 8. 待处理积压
以下重要 Issue 和 PR 处于长期未合并或需关注状态，建议维护者优先处理：

- **PR [#2411](https://github.com/sipeed/picoclaw/pull/2411)** (Open)：修复 SSE 流分块解析问题。该 PR 创建于 4 月 7 日，对于解决流式输出丢包至关重要，建议尽快 Review 合并。
- **Issue [#2217](https://github.com/sipeed/picoclaw/issues/2217)** (Open)：Token 消耗仪表板需求。自 3 月 31 日开启，作为高频需求，建议纳入近期路线图。
- **PR [#2163](https://github.com/sipeed/picoclaw/pull/2163)** (Open)：修复 Google Antigravity OAuth Scope 问题。此 PR 已开启近一个月，涉及特定提供商的登录稳定性，建议与近期的认证重构（#2599）协调处理。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-22)

## 1. 今日速览
NanoClaw 项目今日保持**高活跃度**，开发节奏紧凑。过去24小时内共有 **26 个 PR 更新**，其中 13 个已成功合并，显示核心团队正在全力推进 v2 版本的功能完善与错误修复。虽然无新版本 Release 发布，但合并的代码涵盖了从安装脚本重构、关键会话 Bug 修复到 Nostr/闪电网络集成等前沿功能。然而，**多通道路由问题**浮出水面，尤其是微信与 Telegram 间的交互成为用户反馈焦点。整体来看，项目在扩展生态的同时，正努力解决多渠道并行的复杂性问题。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 13 个 PR 合并/关闭，显著推动了 v2 版本的稳定性与易用性：

*   **安装体验重构**：PR [#1908](https://github.com/qwibitai/nanoclaw/pull/1908) 合并，引入了端到端的脚本化安装流程 (`nanoclaw.sh`)，集成了品牌化 UI，旨在降低新用户的上手门槛。
*   **关键稳定性修复**：PR [#1900](https://github.com/qwibitai/nanoclaw/pull/1900) 修复了 Discord 长消息场景下 SDK session_id 丢失导致容器退出的严重 Bug，这对生产环境的会话持久化至关重要。
*   **依赖与基础设施升级**：PR [#1883](https://github.com/qwibitai/nanoclaw/pull/1883) 将 Claude Code 升级至 2.1.116，同步了 Agent SDK 版本；PR [#1897](https://github.com/qwibitai/nanoclaw/pull/1897) 引入了 `/build-it` 流水线所需的基础设施代码，包括健康检查 Socket 和部署脚本。
*   **代码重构清理**：PR [#1851](https://github.com/qwibitai/nanoclaw/pull/1851) 完成了 Outbox I/O 逻辑的移位与死代码清扫，优化了代码架构。
*   **渠道能力扩展**：PR [#1905](https://github.com/qwibitai/nanoclaw/pull/1905) 新增了 Telegram 附件下载功能；PR [#1899](https://github.com/qwibitai/nanoclaw/pull/1899) 加固了 Gmail 草稿箱黑名单机制，防止了无限循环生成草稿的故障。

## 4. 社区热点
今日社区关注点集中在多通道协同与特定环境配置问题：

*   **跨通道消息泄露**：Issue [#1902](https://github.com/qwibitai/nanoclaw/issues/1902) 报告了当微信与 Telegram 共享同一 Agent Group 时，回复会发生串线泄露。该问题触及 v2 多渠道架构的核心逻辑，需高度关注。
*   **微信 v2 入驻流程缺陷**：Issue [#1901](https://github.com/qwibitai/nanoclaw/issues/1901) 指出 v2 版本微信登录成功后，仍需手动配置 Agent Group 和策略才能响应，用户体验存在断层。
*   **WSL 环境支持**：PR [#1903](https://github.com/qwibitai/nanoclaw/pull/1903) 与 PR [#1904](https://github.com/qwibitai/nanoclaw/pull/1904) 针对 WSL 环境下 systemd 支持缺失导致的 Docker 安装失败问题提出了修复方案，引发了开发者的讨论。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在消息路由与代理配置，部分已有修复方案：

*   **[严重] 跨通道回复泄露**：Issue [#1902](https://github.com/qwibitai/nanoclaw/issues/1902)，微信回复被错误路由至 Telegram，影响隐私与可用性。*（待修复）*
*   **[严重] Ollama MCP 工具失效**：Issue [#1906](https://github.com/qwibitai/nanoclaw/issues/1906)，在 OneCLI 网关后端使用非 Ollama 模型时，Ollama MCP 工具请求被拒绝。*（待修复）*
*   **[中等] Telegram 消息编辑被吞**：Issue [#1896](https://github.com/qwibitai/nanoclaw/issues/1896)，用户编辑消息后 Agent 无法感知。*（待修复）*
*   **[已修复] Discord 会话中断**：PR [#1900](https://github.com/qwibitai/nanoclaw/pull/1900) 已修复长消息导致 session_id 丢失的问题。
*   **[已修复] Gmail OOO 死循环**：PR [#1899](https://github.com/qwibitai/nanoclaw/pull/1899) 已修复因额度耗尽导致的自动草稿生成死循环。

## 6. 功能请求与路线图信号
通过待合并的 PR 可以看出项目正在向 **去中心化社交与支付** 以及 **多媒体生成** 方向大力扩展：

*   **Web3 生态集成**：PR [#1892](https://github.com/qwibitai/nanoclaw/pull/1892) 提出了 Nostr 签名守护进程，将私钥隔离在内核 Keyring；PR [#1891](https://github.com/qwibitai/nanoclaw/pull/1891) 集成了闪电网络钱包；PR [#1882](https://github.com/qwibitai/nanoclaw/pull/1882) 支持 Nostr DM。这表明 NanoClaw 正试图成为 Web3 领域的首选 AI Agent 载体。
*   **视频生成能力**：PR [#1893](https://github.com/qwibitai/nanoclaw/pull/1893) 集成了 Remotion，允许通过 AWS Lambda 生成视频，标志着 Agent 能力从文本/图片向视频迈进。
*   **上下文管理智能化**：PR [#1890](https://github.com/qwibitai/nanoclaw/pull/1890) 引入了上下文压缩预警系统，试图解决长对话中的 Token 限制痛点。

## 7. 用户反馈摘要
用户反馈揭示了 v2 版本在**边缘场景与混合部署**下的痛点：
*   **路由混乱**：用户在混合使用微信和 Telegram 时，遭遇了消息串线，表明多通道优先级路由逻辑仍需打磨。
*   **配置体验断层**：微信登录虽然成功，但后续自动化配置未跟进，导致用户以为故障，反映出“开箱即用”程度仍有提升空间。
*   **WSL 兼容性**：开发者尝试在 WSL 环境部署，但遭遇 Docker 和 systemd 的兼容性壁垒，社区已提交针对性修复。

## 8. 待处理积压
以下重要 Issue 和 PR 需维护者重点关注：

*   **路由核心 Bug**：Issue [#1902](https://github.com/qwibitai/nanoclaw/issues/1902) 涉及跨平台消息泄露，建议优先处理。
*   **环境兼容性修复**：PR [#1903](https://github.com/qwibitai/nanoclaw/pull/1903) (systemd linger) 与 PR [#1904](https://github.com/qwibitai/nanoclaw/pull/1904) (WSL 检测) 亟待合并，以改善 Windows 用户的开发体验。
*   **Pending Features**：共有 6 个功能型 PR 处于 Open 状态，包括重要的 Nostr 签名与视频生成功能，需进行代码审查以合入主干。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-22)

## 1. 今日速览
NullClaw 项目今日整体处于**低代码活跃、高社区讨论**状态。过去 24 小时内，项目未进行代码合并或新版本发布，开发侧更新静默。然而，社区互动热度显著，集中围绕 Issue #826 展开了深入讨论，该 Issue 虽标注为文档类，但揭示了在特定网络环境（Tailscale）下的兼容性问题。总体而言，项目稳定性未见波动，但用户在复杂网络场景下的配置痛点逐渐显现，亟需文档优化或功能适配。

## 2. 版本发布
无。

## 3. 项目进展
本日无合并或关闭的 Pull Request。代码库无变更记录，项目开发节奏较为平缓，暂无新功能上线或 Bug 修复入库。

## 4. 社区热点
今日社区讨论焦点集中于 **Issue #826**，该 Issue 在过去一天内更新活跃，累计评论已达 12 条。

*   **Issue #826: [documentation] How to use nullclaw gateway with Tailscale?**
    *   **链接**: [https://github.com/nullclaw/nullclaw/issues/826](https://github.com/nullclaw/nullclaw/issues/826)
    *   **现状**: 虽然标签为 `documentation`，但讨论内容涉及底层网络隧道构建失败的实质性问题。
    *   **核心诉求**: 用户希望在 Tailscale 覆盖的 Debian VPS 上运行 NullClaw Gateway，但遭遇 `Failed to start tunnel: NotImplemented` 错误。这反映了用户对 NullClaw 在混合云、VPN 及私有网络环境下部署的强烈需求。
    *   **讨论趋势**: 评论区互动频繁（12 条评论），表明该问题具有一定普遍性或技术挑战性，用户正在尝试互助排查，但尚未形成官方认可的解决方案。

## 5. Bug 与稳定性
今日无新增标准 Bug 报告，但 Issue #826 暴露了潜在的**兼容性问题**，建议关注：

*   **问题**: NullClaw Gateway 在 Tailscale 网络接口下启动失败。
*   **错误信息**: `warning(daemon): Failed to start tunnel: NotImplemented`
*   **严重程度**: **中等**。该问题阻断了特定场景下的核心功能（Gateway 模式），但未导致系统崩溃或数据丢失。
*   **修复状态**: 尚无 Fix PR 提交，且 Issue 仍未关闭。

## 6. 功能请求与路线图信号
虽然无明确的功能请求 Issue，但从 Issue #826 的讨论中可以提取以下路线图信号：

*   **网络层适配需求**: 用户可能需要 NullClaw 增强对非标准网络接口（如 Tailscale, WireGuard 等虚拟网卡）的识别与绑定能力。
*   **错误提示优化**: 当前报错 `NotImplemented` 过于晦涩，用户难以判断是权限问题、依赖缺失还是环境不兼容。
*   **预测**: 若社区反馈持续增加，下一版本可能会考虑优化网络探测逻辑或丰富部署文档中的网络环境配置章节。

## 7. 用户反馈摘要
从 Issue #826 的互动中提炼出以下用户痛点：

*   **部署门槛高**: 用户在尝试将 NullClaw 与主流异地组网工具（Tailscale）结合时受阻，缺乏针对性指南。
*   **报错信息可读性差**: 用户遇到 `NotImplemented` 错误时感到困惑，无法确定是系统调用缺失还是配置错误。
*   **真实场景**: 用户倾向于在 VPS 上通过 Tailscale 管理网络出口，这代表了 AI 智能体在隐私保护与远程访问场景下的典型部署需求。

## 8. 待处理积压
目前积压量较小，但以下 Issue 需维护者尽快关注以保持社区健康度：

*   **Issue #826**: 虽创建于 4 月 15 日，但近期讨论热度回升，且涉及核心功能可用性。建议维护者介入确认是文档缺失还是代码层面的兼容性问题，避免用户流失。
    *   **链接**: [https://github.com/nullclaw/nullclaw/issues/826](https://github.com/nullclaw/nullclaw/issues/826)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-22)

## 1. 今日速览
IronClaw 项目于昨日发布了重要的 **v0.26.0 版本**，核心聚焦于 Engine v2 的架构演进，引入了项目级沙箱生命周期与成本追踪功能。过去24小时内项目活跃度极高，共有 **50 条 PR 更新**（含 11 条合并/关闭）和 **28 条 Issue 更新**。当前开发重心明显向 **Engine v2 的默认切换** 倾斜，大量架构重构 PR（如状态收敛、工具注册表分离）正在密集推进，同时也暴露出新版本发布初期的不稳定因素，如 Linux 安装包故障及多处 QA 回归问题。

## 2. 版本发布
### `ironclaw-v0.26.0` (2026-04-21)
本次更新主要强化了 Engine v2 的基础设施，具体变更如下：
- **新增功能**：
  - **项目级沙箱**：Engine v2 现支持带任务生命周期管理和成本追踪的独立沙箱环境 ([#2211], [#2660])。
  - **LLM 热重载**：支持从配置文件热重载 Provider Chain，无需重启服务 ([#2673])。
- **注意事项**：
  - 新版本发布的安装程序在 `x86_64-unknown-linux-gnu` 平台上存在故障 ([Issue #2818](https://github.com/nearai/ironclaw/issues/2818))，Linux 用户建议暂时暂缓升级或等待补丁。

## 3. 项目进展
今日共有 **11 个 PR 被合并或关闭**，主要集中在功能修复与架构优化：
- **认证与安全修复**：修复了 Google OAuth 流程中 `access_type` 参数拼写错误 ([#2391](https://github.com/nearai/ironclaw/issues/2391))，并解决了 WASM 凭证注入失败的问题 ([#1537](https://github.com/nearai/ironclaw/issues/1537))。
- **Engine v2 架构推进**：多个核心 PR 正在审核中，如 `feat(engine): add typed assistant content model` ([#2815](https://github.com/nearai/ironclaw/pull/2815)) 和 `fix(tools): show v2 capabilities in tool registry` ([#2794](https://github.com/nearai/ironclaw/pull/2794))，旨在为 Engine v2 默认切换扫清障碍。
- **实验性重构**：发起了 "Python only engine" 的 Draft PR ([#2819](https://github.com/nearai/ironclaw/pull/2819))，意图移除现有引擎中的 "heuristics hacks"，这是一个具有前瞻性的重大重构信号。

## 4. 社区热点
今日讨论最密集的议题集中在系统架构稳定性与引擎迁移上：
- **[Epic] Engine v2 架构拆分与能力分离** ([Issue #2767](https://github.com/nearai/ironclaw/issues/2767))：由核心贡献者发起，旨在将 Engine v2 的能力背景与可调用工具模式解耦。这反映了项目正在为 Engine v2 成为默认引擎做最后的架构清理。
- **Gateway 状态收敛** ([Issue #2792](https://github.com/nearai/ironclaw/issues/2792))：针对 UI 与后端状态不一致的问题提出了 "状态收敛" 方案，试图终结目前 UI 依赖 Delta 流导致的状态漂移痛点。
- **Linux 安装程序故障** ([Issue #2818](https://github.com/nearai/ironclaw/issues/2818))：新版本发布后立即有用户报告 Linux x86_64 安装失败，这是目前急需修复的阻塞性问题。

## 5. Bug 与稳定性
按严重程度排序，今日报告的关键问题如下：
1.  **P0/阻塞性 (新)**：**v0.26.0 安装程序在 Linux x86_64 平台失败** ([Issue #2818](https://github.com/nearai/ironclaw/issues/2818))。目前尚无修复 PR，建议 Linux 用户暂缓更新。
2.  **P1/QA 回归**：**任务创建逻辑错误** ([Issue #2809](https://github.com/nearai/ironclaw/issues/2809))。用户请求创建 Project 时，系统错误地创建了 Mission。
3.  **P1/QA 回归**：**停止指令失效** ([Issue #2808](https://github.com/nearai/ironclaw/issues/2808))。通过聊天发送 "Stop" 命令无法停止正在运行的任务。
4.  **P2/Web UI**：**刷新后线程恢复错误** ([Issue #2285](https://github.com/nearai/ironclaw/issues/2285))。无 hash 刷新页面会恢复为 Assistant 线程而非当前活动线程。
5.  **已修复**：Brave Search API 间歇性 422 错误 ([Issue #2780](https://github.com/nearai/ironclaw/issues/2780)) 和 Slack 配对死锁问题 ([Issue #1839](https://github.com/nearai/ironclaw/issues/1839)) 已关闭。

## 6. 功能请求与路线图信号
- **Engine v2 默认化进入倒计时**：Issue [#2800](https://github.com/nearai/ironclaw/issues/2800) 追踪了 Engine v2 默认切换的所有剩余工作，表明下个版本可能迎来重大切换。
- **飞书 长连接支持**：Issue [#2781](https://github.com/nearai/ironclaw/issues/2781) 提议支持飞书长连接模式以优化事件接收，符合拓展企业级通讯渠道的趋势。
- **用户反馈驱动的功能增强**：Issue [#2791](https://github.com/nearai/ironclaw/issues/2791) 提议增加 "Report Issue" UI，允许用户直接从界面抓取脱敏日志提交 GitHub Issue，这将显著降低用户报障门槛。

## 7. 用户反馈摘要
- **部署体验**：用户反馈 Railway 一键部署模板中环境变量不生效，导致模型卡在默认配置 ([Issue #1680](https://github.com/nearai/ironclaw/issues/1680))。
- **OAuth 认证**：Google OAuth 未验证应用的状态导致非 `@near.ai` 用户看到警告或被拦截，影响了 G Suite 集成的推广 ([Issue #773](https://github.com/nearai/ironclaw/issues/773))。
- **工具集成**：有用户报告在尝试设置 Notion 集成后，Agent 停止响应，显示出多步骤集成的稳定性仍有待提高 ([Issue #2087](https://github.com/nearai/ironclaw/issues/2087))。

## 8. 待处理积压
- **[Enhancement] Docker 镜像发布** ([Issue #748](https://github.com/nearai/ironclaw/issues/748))：`ironclaw-worker` 镜像尚未发布到公共仓库，导致 Docker 沙箱功能对大多数用户不可用，这是一个长期痛点，已获 5 个 👍 但仍处于 Open 状态。
- **[Bug] Railway 模板配置问题** ([Issue #1680](https://github.com/nearai/ironclaw/issues/1680))：自 3 月底报告以来，环境变量注入问题仍未彻底解决，影响了通过 Railway 部署的用户体验。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-22)

## 1. 今日速览
LobsterAI 项目今日保持**高度活跃**状态，随着 `2026.4.21` 版本的正式发布，项目团队合并了高达 17 个 PR，显示出强劲的迭代速度。本次更新重点围绕**稳定性修复与新通信渠道集成**，特别是针对 macOS 图片处理和 Windows 安装升级流程的关键修复。社区方面，有用户深入分析了前端 Diff 显示的逻辑问题，反馈质量较高，但整体 Issue 互动量较低。

## 2. 版本发布
**新版本：2026.4.21**
本次更新主要聚焦于底层框架优化与细节修复，无显著破坏性变更，建议用户尽快升级以获得更好的启动性能。

- **核心更新**：
    - **OpenClaw 升级**：升级至 `v2026.4.14`，带来了启动性能优化 ([PR #1750](https://github.com/netease-youdao/LobsterAI/pull/1750))。
    - **隐私与安全**：修复了 Cowork 心跳提示历史记录泄露的问题 ([PR #1710](https://github.com/netease-youdao/LobsterAI/pull/1710))。
- **链接**：[Release 2026.4.21](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.21)

## 3. 项目进展
今日共有 17 个 PR 被合并，主要通过合并 `release/2026.04.18` 分支 ([PR #1782](https://github.com/netease-youdao/LobsterAI/pull/1782))，实现了以下重要进展：

- **新功能集成**：
    - **邮箱通道落地**：成功集成 Lobster Email (龙虾邮箱) 作为新的 IM 网关通道，支持 AI 代理基于邮件通信，并完成了配置 UI 与连接验证 ([PR #1719](https://github.com/netease-youdao/LobsterAI/pull/1719), [PR #1753](https://github.com/netease-youdao/LobsterAI/pull/1753))。
    - **新手引导重构**：新增全屏欢迎引导弹窗，优化了首次启动流程（隐私协议 → 欢迎页 → 应用），提升了新用户体验 ([PR #1748](https://github.com/netease-youdao/LobsterAI/pull/1748))。
- **关键稳定性修复**：
    - **macOS 图片兼容性**：修复了 macOS 下粘贴图片不可见的问题，通过排除 prompt 中的路径干扰解决了 Base64 图片被误删的 Bug ([PR #1780](https://github.com/netease-youdao/LobsterAI/pull/1780))。
    - **钉钉启动崩溃**：回退 `dingtalk-connector` 版本至 0.8.16，解决了因预编译导致的模块加载失败引发的启动崩溃 ([PR #1781](https://github.com/netease-youdao/LobsterAI/pull/1781))。
    - **Windows 升级体验**：修复了 Windows 升级时用户自定义 Skill 被删除的问题，改用 AppData 备份方案 ([PR #1774](https://github.com/netease-youdao/LobsterAI/pull/1774))。
- **可观测性增强**：日志导出功能现包含 OpenClaw 的网关日志与每日滚动日志，便于排查问题 ([PR #1775](https://github.com/netease-youdao/LobsterAI/pull/1775))。

## 4. 社区热点
今日社区讨论主要集中在以下高技术含量的 Issue：

- **[#1783 [OPEN] 更新过后diff异常失灵问题](https://github.com/netease-youdao/LobsterAI/issues/1783)**
    - **热度分析**：用户不仅报告了 Bug，还深入分析了 `app.asar` 中的前端代码逻辑，指出 `extractDiffFromToolInput` 函数在处理 `edit` 操作时存在层级查找错误。
    - **诉求**：用户希望修复前端 Diff 显示逻辑，确保 Edit 工具的 oldText/newText 能被正确解析。目前该 Issue 尚未有关联的 Fix PR，需核心开发者关注。

- **[#9 [OPEN] [stale] bug report](https://github.com/netease-youdao/LobsterAI/issues/9)**
    - **动态**：这是一个 2 月份的老 Issue，今日有活跃更新。涉及 Windows 下 Git Bash 路径解析问题。此类 "Stale" Issue 的重新活跃可能意味着特定环境下的兼容性问题尚未完全解决。

## 5. Bug 与稳定性
今日修复了多个严重影响使用的 Bug，同时也收到了新的 Bug 报告：

- **严重**:
    - **钉钉插件启动崩溃**：已通过 [PR #1781](https://github.com/netease-youdao/LobsterAI/pull/1781) 修复，原因系第三方依赖版本兼容性问题。
- **中等**:
    - **macOS 图片粘贴失效**：已通过 [PR #1780](https://github.com/netease-youdao/LobsterAI/pull/1780) 修复。
    - **Windows 升级后 Skill 丢失**：已通过 [PR #1774](https://github.com/netease-youdao/LobsterAI/pull/1774) 修复。
- **待修复**:
    - **Diff 功能失效**：[Issue #1783](https://github.com/netease-youdao/LobsterAI/issues/1783) 报告前端无法显示代码差异，严重影响代码编辑类 Agent 的使用体验，目前尚未有修复 PR。

## 6. 功能请求与路线图信号
- **国际化完善**：[PR #1773](https://github.com/netease-youdao/LobsterAI/pull/1773) 提出了对 "edit" 按钮翻译缺失的修复。虽然只是微小的 i18n 修复，但表明项目正在打磨细节，提升多语言支持的完整度。
- **定时任务体验优化**：[PR #605](https://github.com/netease-youdao/LobsterAI/pull/605) (Stale 状态) 提议增加 Cron 表达式的执行时间预览。鉴于定时任务是 Agent 自动化的核心，该功能对用户配置友好性极大，建议团队重新评估并将其纳入后续版本。

## 7. 用户反馈摘要
- **深度用户涌现**：从 [Issue #1783](https://github.com/netease-youdao/LobsterAI/issues/1783) 可以看出，LobsterAI 的用户群体中包含具备前端代码审计能力的开发者，他们能定位到 `app.asar` 内部的函数逻辑，这为项目的高质量反馈提供了基础。
- **环境兼容性痛点**：Windows 环境下的升级保留数据 ([PR #1774](https://github.com/netease-youdao/LobsterAI/pull/1774)) 以及 Git Bash 的路径问题 ([Issue #9](https://github.com/netease-youdao/LobsterAI/issues/9)) 一直是用户反馈的高频区，显示客户端在跨平台文件系统处理上仍需持续打磨。

## 8. 待处理积压
以下项目长期未获处理或处于阻塞状态，建议维护者关注：

- **依赖更新积压**：Dependabot 提交的依赖更新 PR ([#1277](https://github.com/netease-youdao/LobsterAI/pull/1277), [#1766](https://github.com/netease-youdao/LobsterAI/pull/1766)) 处于 Open 状态，涉及 Electron 和 Vite 的大版本升级，可能带来兼容性风险，建议尽快排期测试。
- **功能 PR 冻结**：[PR #605](https://github.com/netease-youdao/LobsterAI/pull/605) (Cron 预览) 已被标记为 Stale，建议确认是否已被放弃或需要重新激活。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-22)

## 1. 今日速览
Moltis 项目今日保持高活跃度，开发重心明显向**安全性与稳定性**倾斜。过去 24 小时内共处理了 **13 条 Issue** 和 **4 条 PR**，并发布了新版本 `20260421.05`。社区贡献者集中修复了一个严重的命令执行权限绕过漏洞，并优化了 Telegram 集成与浏览器容器的诊断机制。同时，关于无容器环境下的沙箱隔离增强提案引发了较多关注，显示出项目在轻量化部署方向上的探索。

## 2. 版本发布
- **版本号**: `20260421.05`
- **发布时间**: 2026-04-21
- **更新重点**: 
  本次更新主要聚焦于安全性修复与集成诊断。修复了通过环境变量前缀注入绕过执行审批的严重漏洞，解决了 Telegram 发送特定文件类型丢失的问题，并为浏览器容器启动失败增加了详细的诊断日志。建议所有使用 `exec` 工具或 Telegram 集成的用户尽快升级。

## 3. 项目进展
今日共有 3 个 PR 合并/关闭，显著提升了项目的安全水位和可维护性：

- **安全修复**: PR #822 修复了 Issue #814，阻止了通过 `LD_PRELOAD` 等环境变量绕过执行审批机制的攻击路径。该修复引入了双重防御层，强化了沙箱安全性。
- **集成修复**: PR #819 解决了 Telegram 传输 `.md`、`.toml` 等文件时因 MIME 类型识别错误导致文件静默丢弃的问题。
- **诊断增强**: PR #820 针对浏览器容器启动超时问题增加了详细日志，包含容器状态、Chrome 内部日志及运行命令，便于排查环境配置问题。

## 4. 社区热点
今日讨论最为活跃的话题集中在**安全部署与交互体验**：

- **[Feature] Skill 调用优化** ([Issue #821](https://github.com/moltis-org/moltis/issues/821)): 社区成员 @xzavrel 提出，目前所有启用的 Skill 都会在每轮对话中注入系统提示，导致上下文膨胀。建议增加 `disable-model-invocation` 标志。这反映了用户对 Token 消耗和响应延迟的敏感度，该议题获得了较高的关注度。
- **[Bug] 日志风暴问题** ([Issue #823](https://github.com/moltis-org/moltis/issues/823)): 用户报告在 Debug 模式下，`broadcasting event` 日志会迅速填满磁盘，严重影响生产环境调试，亟待官方回应。

## 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，安全漏洞已修复：

1.  **[严重] 命令执行权限绕过** ([Issue #814](https://github.com/moltis-org/moltis/issues/814)) [已修复]
    - **描述**: 攻击者可通过 `LD_PRELOAD=/evil.so cat /file` 等方式绕过 Exec 审批白名单。
    - **状态**: 已通过 PR #822 修复。
2.  **[严重] 日志刷屏导致磁盘占满** ([Issue #823](https://github.com/moltis-org/moltis/issues/823)) [待处理]
    - **描述**: `RUST_LOG=debug` 模式下，网关广播日志量过大。
    - **状态**: 尚未分配，需维护者关注。
3.  **[中等] Google 模型 Function Call 缺陷** ([Issue #375](https://github.com/moltis-org/moltis/issues/375)) [已关闭]
    - **描述**: 使用 Google 模型时 Function Call 缺少 `thought_signature`。
    - **状态**: 经过一个月的追踪，该问题已在今日关闭，推测已随新版本修复。
4.  **[轻微] 聊天窗口自动滚动干扰** ([Issue #824](https://github.com/moltis-org/moltis/issues/824)) [待处理]
    - **描述**: 用户向上翻阅历史记录时，新消息会强制跳转到底部。

## 6. 功能请求与路线图信号
社区正在积极推动**轻量化安全部署**方案，这可能是下一阶段的重要路线图：

- **沙箱隔离增强**: Issue #818 提议为受限主机后端增加可选的 Landlock 文件系统隔离，专门针对无 Docker 环境的部署。
- **执行控制细化**: Issue #816 建议增加基于参数的路径拒绝功能，Issue #815 提议引入严格的白名单模式。
- **PDF 支持落地**: Issue #563 关于 PDF 处理的功能请求已关闭，结合 PR #819 对文件类型的修复，推测 PDF 处理能力已得到整合或优化。

## 7. 用户反馈摘要
- **安全意识提升**: 用户 @dmitriikeler 连续提交多个安全增强 Issue（#814, #815, #816, #818），显示出对 Moltis 在生产环境中安全边界的深切关注，特别是针对非容器化场景。
- **文件集成痛点**: Telegram 文件丢失问题长期困扰部分用户，今日的修复受到了积极反馈。
- **性能焦虑**: Issue #821 指出默认加载 101 个 Skills 导致 Prompt 过长，反映了高级用户对推理成本和性能平衡的担忧。

## 8. 待处理积压
- **PR #783 文档更新**: 包含 44 个文档的审计与修复，已提交 3 天，目前处于 Open 状态，建议维护者尽快 Review 以合并文档改进。
- **Issue #823 磁盘空间风险**: Debug 模式下的日志问题可能导致服务器故障，建议优先确认并排期修复。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-04-22)

## 1. 今日速览
CoPaw 项目今日保持了极高的开发迭代速度与社区活跃度，呈现出“高产出、高吞吐”的健康状态。过去 24 小时内，项目成功发布了 **v1.1.3-beta.2** 版本，主要修复了 MacOS 桌面端构建问题并升级了核心依赖。项目维护者高效关闭了 **30 个 Issue** 并合并了 **17 个 PR**，合并数量创近期新高，显著增强了通道健壮性与插件系统的灵活性。社区方面，关于 **品牌重塑（CoPaw -> QwenPaw）带来的迁移困惑** 成为讨论焦点，用户对记忆机制优化和模型兼容性的关注度持续上升。

## 2. 版本发布
- **v1.1.3-beta.2** (发布于 2026-04-22)
  - **更新内容**：
    - 版本号升级至 `1.1.3b2`。
    - **修复**：解决了 MacOS 桌面端构建失败的问题 ([PR #3622](https://github.com/agentscope-ai/QwenPaw/pull/3622))。
    - **依赖升级**：核心依赖 AgentScope 版本升级至 `1.0.19`。
  - **破坏性变更/迁移注意**：暂无明确的破坏性变更，但结合社区反馈，建议用户关注从旧版 CoPaw 升级时的目录结构变化（见社区热点）。

## 3. 项目进展
今日共有 17 个 PR 被合并，项目整体在**系统稳定性、UI 体验和开发者文档**方面取得了实质性进展：

- **系统健壮性与 API**：
  - [PR #3649](https://github.com/agentscope-ai/QwenPaw/pull/3649) 新增了针对每个 Agent 通道的健康检查与热重启 API，大幅提升了运维期间的故障恢复能力。
  - [PR #3631](https://github.com/agentscope-ai/QwenPaw/pull/3631) 增强了控制台插件系统的自动模块注册功能，简化了插件开发流程。
- **前端与 UI 修复**：
  - [PR #3654](https://github.com/agentscope-ai/QwenPaw/pull/3654) 修复了 Ant Design v5 下的表格分页器显示问题。
- **文档建设**：
  - [PR #3655](https://github.com/agentscope-ai/QwenPaw/pull/3655) 补充了“备份与恢复”功能的中英文文档，完善了用户指引。

待合并的重要 PR 中，[PR #3630](https://github.com/agentscope-ai/QwenPaw/pull/3630)（钩子/记忆模块单元测试）和 [PR #3548](https://github.com/agentscope-ai/QwenPaw/pull/3548)（长期记忆重构）正处于 Review 阶段，预示着核心架构的下一轮重大升级即将到来。

## 4. 社区热点
今日讨论最激烈的问题集中在**项目更名后的迁移体验**与**长期维护机制**：

- **品牌重塑与迁移困惑**：[Issue #3637](https://github.com/agentscope-ai/QwenPaw/issues/3637) 与 [Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) 引发热议。用户对 CoPaw 更名为 QwenPaw 后的安装路径（`.copaw` vs `.qwenpaw`）、环境变量指向及数据迁移表示困惑。这反映出用户对项目身份变更的敏感度，以及自动化迁移工具的迫切需求。
- **社区贡献指南**：[Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) 持续活跃，维护者详细列出了 P0-P2 优先级的待办任务，吸引了大量开发者认领任务，显示了良好的开源协作氛围。
- **记忆机制瓶颈**：[Issue #2289](https://github.com/agentscope-ai/QwenPaw/issues/2289) 反映了高频使用下 `MEMORY.md` 文件过大导致检索效率下降的问题，引发了关于记忆压缩策略的深入讨论。

## 5. Bug 与稳定性
今日报告了若干影响用户体验的 Bug，部分已有修复方案或 PR：

- **[High] 升级路径 Bug**：[Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) 指出升级后工作目录仍指向旧路径，导致数据写入混乱。目前已有相关讨论，需关注后续修复。
- **[Medium] API 兼容性错误**：[Issue #3489](https://github.com/agentscope-ai/QwenPaw/issues/3489) 报告使用 Anthropic 兼容 API（如 Kimi）时频繁出现 400 错误，原因为消息格式中包含 `None` 值。
- **[Medium] 前端 UI 故障**：
  - [Issue #3541](https://github.com/agentscope-ai/QwenPaw/issues/3541) 报告技能搜索框无法输入及暗黑模式下文字不可见。
  - [Issue #3651](https://github.com/agentscope-ai/QwenPaw/issues/3651) 报告分页选择器失效。
- **[Low] 多模态支持缺失**：[Issue #3624](https://github.com/agentscope-ai/QwenPaw/issues/3624) 指出 MiniMax 模型配置下不支持视觉功能，属于 Provider 适配层面的 Feature Gap。
- **已修复/有进展**：Windows 下文件路径非 ASCII 字符导致的 `ValueError` 已在 [PR #3625](https://github.com/agentscope-ai/QwenPaw/pull/3625) 中提交修复方案。

## 6. 功能请求与路线图信号
结合 Issue 与 PR，以下功能方向具有较高优先级：

- **记忆系统重构**：针对 [Issue #2289](https://github.com/agentscope-ai/QwenPaw/issues/2289) 的痛点，[PR #3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) 正在重构长期记忆模块，预计将显著提升检索效率。
- **语音交互增强**：[PR #3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) 提议用 Whisper 替换 Web Speech API，解决浏览器兼容性问题，符合 AI 助手多模态交互趋势。
- **梦境日志**：[Issue #3663](https://github.com/agentscope-ai/QwenPaw/issues/3663) 提出在记忆优化过程中输出“梦境日志”，增强 AI 决策过程的可解释性，是一个富有创意的 Feature Request。
- **自我反思与进化**：[Issue #2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) 用户建议增加自我反思和经验总结机制，这可能是后续 Agent 智能化升级的重要方向。

## 7. 用户反馈摘要
- **痛点**：
  - **迁移成本**：用户普遍反映从 CoPaw 迁移到 QwenPaw 时，环境变量、旧数据文件夹的处理不够智能，担心数据丢失。
  - **记忆检索**：重度用户反馈随着对话积累，基于文本文件的记忆机制导致响应变慢，期待向量数据库或更高级的记忆管理。
  - **稳定性**：部分用户反馈在长任务或频繁工具调用时会出现中断或上下文压缩失败。
- **满意点**：
  - 开发者对项目架构（如 Hook 机制）表示认可，积极参与单元测试贡献。
  - 对新增的健康检查 API 和热重启功能表示欢迎，认为这解决了实际运维痛点。

## 8. 待处理积压
- **关键 Issue**：[Issue #3489](https://github.com/agentscope-ai/QwenPaw/issues/3489) (Anthropic API 兼容性) 状态仍为 Open，影响部分第三方模型用户的正常使用，建议优先排查。
- **架构升级 PR**：[PR #3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) (Memory 重构) 体量大、影响面广，已 Review 一段时间，建议加快合并或分阶段发布，以解决日益增长的记忆性能问题。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-04-22)

## 1. 今日速览
ZeptoClaw 项目今日整体呈现**维护活跃、响应迅速**的健康状态。虽然未发布新版本，但社区互动质量较高，维护者 @manelsen 对昨日报告的关键配置 Bug (#522) 迅速做出了响应，并在今日提交了修复 PR (#523)。项目依赖更新活跃，共有 3 个待合并的依赖升级 PR，显示出良好的工程化维护水准。整体来看，项目正处于快速修复与持续集成的迭代周期中。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日项目进展主要集中在**Bug 修复推进**与**依赖维护**两个方面：

*   **关键修复推进**：针对 Telegram 网关模式配置失效的问题，PR #523 已提交。该修复旨在恢复旧版配置兼容性，并优化了默认启用逻辑，有望在合并后显著提升用户体验。
*   **依赖管理清理**：PR #507（依赖升级）已于今日关闭。鉴于 PR #520 提交了更新版本的同一依赖升级，此举属于清理过时的依赖更新请求，避免了重复工作。
*   **CI/CD 维护**：Dependabot 提交了多项更新，涉及 Docker 构建动作和 Rust 工具链安装动作的升级，保障了构建流程的安全性与时效性。

## 4. 社区热点
今日讨论与关注焦点集中在以下议题：

*   **[Issue #522](https://github.com/qhkm/zeptoclaw/issues/522) [bug] Zeptoclaw Telegram Channel Configuration Bug**
    *   **热度背景**：这是今日唯一的新增 Issue，直击核心功能——Telegram 网关的配置加载问题。
    *   **用户诉求**：用户 @Gantzfried 反馈在配置文件格式正确的情况下，网关无法识别 Telegram 频道配置。这暴露了项目在配置解析的向后兼容性或文档示例与代码实现之间存在偏差，急需修复以恢复用户基本使用能力。

## 5. Bug 与稳定性
今日报告 1 个功能缺陷，严重程度中等（影响特定模式用户）：

*   **🔴 [Issue #522] Telegram Channel Configuration Bug**
    *   **现象**：Gateway mode 启动时无法加载 `config.json` 中的 Telegram 频道配置。
    *   **影响**：导致依赖 Telegram 频道的用户无法正常使用网关功能。
    *   **状态**：**已有修复 PR**。
    *   **关联 PR**：[PR #523](https://github.com/qhkm/zeptoclaw/pull/523) 由维护者 @manelsen 提交。修复方案包括：恢复旧版 Key 的兼容性、增加隐式启用逻辑（存在 Token 即视为启用），修复力度彻底，目前处于 Open 状态等待合并。

## 6. 功能请求与路线图信号
*   **配置体验优化**：PR #523 中提出的 "infer `channels.telegram.enabled = true`"（推断启用状态）逻辑，是对当前显式配置要求的改进。这表明项目正试图降低配置门槛，向“约定优于配置”的方向微调，这一改进极有可能在下一版本中落地。

## 7. 用户反馈摘要
从 Issue #522 的反馈中提炼出以下痛点：

*   **配置兼容性困惑**：用户按照文档或既往示例配置 `channels.telegram` 字段时遭遇失败，反映出代码对配置格式的校验可能过于严格，或者文档与代码实现存在脱节。
*   **隐形门槛**：用户需要花费额外时间排查明明“格式正确”却不生效的配置，这对新手用户不够友好。PR #523 的修复逻辑（自动推断 enabled）将有效缓解此类挫败感。

## 8. 待处理积压
目前暂无明显长期积压问题。今日的新 Issue 已得到即时响应。建议维护者尽快合并以下 PR 以修复阻断性问题：
*   **[PR #523](https://github.com/qhkm/zeptoclaw/pull/523)**：修复 Telegram 配置兼容性，优先级高。
*   **[PR #521](https://github.com/qhkm/zeptoclaw/pull/521)**、**[PR #520](https://github.com/qhkm/zeptoclaw/pull/520)**、**[PR #519](https://github.com/qhkm/zeptoclaw/pull/519)**：Dependabot 依赖更新，建议在 CI 测试通过后合并，以保持依赖库的最新状态。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-04-22)

**项目仓库**: [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

## 1. 今日速览
EasyClaw 项目今日呈现出“高频发布、社区静默”的显著特征。在过去的 24 小时内，项目连续发布了 **v1.8.1、v1.8.2、v1.8.3** 三个版本，显示出维护者在功能迭代或问题修复上的紧迫性与高产出。然而，社区交互端表现沉寂，Issues 与 Pull Requests 均无更新记录，项目当前处于单向输出为主的维护状态。整体来看，项目核心开发活跃度高，但缺乏社区反馈共振，建议关注版本频繁迭代背后的稳定性验证。

## 2. 版本发布
今日项目连续发布了 3 个新版本，更新节奏极快，建议用户直接升级至最新版。

*   **[v1.8.3: RivonClaw v1.8.3](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.3)**
*   **[v1.8.2: RivonClaw v1.8.2](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.2)**
*   **[v1.8.1: RivonClaw v1.8.1](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.1)**

**更新分析与注意事项：**
1.  **核心变更聚焦 macOS 兼容性**：三个版本的 Release Notes 均着重强调了 macOS 下的安装问题解决方案。这暗示 v1.8.x 系列可能引入了未签名或签名配置变更，导致 macOS Gatekeeper 强拦截。
2.  **破坏性变更提示**：用户升级后极大概率会遇到 **"'RivonClaw' is damaged and can't be opened"** 错误提示。这并非文件损坏，而是安全策略拦截。
3.  **迁移操作建议**：受影响的 macOS 用户需通过终端执行命令移除隔离属性（Release Notes 中提及 `Open Terminal`，通常对应 `xattr -cr` 命令）。
4.  **迭代推测**：单日发布三个版本通常意味着 v1.8.1 可能存在打包缺陷，v1.8.2 和 v1.8.3 是对此的快速修复。建议所有用户直接升级至 **v1.8.3**，跳过中间版本。

## 3. 项目进展
*   **合并/关闭情况**：过去 24 小时内无公开的 PR 合并或 Issue 关闭记录。
*   **进展评估**：尽管无公开的 PR 活动数据，但从连续的版本发布可以推断，维护者在本地或私有分支完成了大量代码提交。项目正在快速解决 macOS 平台的适配与打包问题，稳定性修复是目前的主要推进方向。

## 4. 社区热点
*   **活跃度分析**：今日无活跃的 Issues 或 Pull Requests。
*   **潜在关注点**：社区讨论暂处于停滞状态。考虑到近期版本主要解决 macOS 安装障碍，预计接下来的 Issue 反馈将集中在 v1.8.3 发布后的实际体验反馈及后续兼容性问题上。

## 5. Bug 与稳定性
今日无新增公开 Bug 报告，但版本发布说明揭示了当前版本存在的已知问题：

*   **[已知问题] macOS 应用损坏提示**
    *   **严重程度**：高（阻断性，直接导致应用无法启动）
    *   **影响范围**：macOS 用户
    *   **状态**：Release Notes 已提供解决方案（需手动执行终端命令），暂无代码层面的自动修复说明。
    *   **分析**：该问题在多个版本中连续存在，表明项目目前缺乏有效的苹果开发者签名证书，或打包流程存在配置漂移，需用户具备一定的命令行操作能力。

## 6. 功能请求与路线图信号
*   **信号捕捉**：无。
*   **判断**：由于缺乏 Issue 讨论，暂时无法从社区端捕捉新功能路线图信号。当前开发重心显然在于平台兼容性修复而非新功能拓展。

## 7. 用户反馈摘要
*   **反馈概况**：今日无新增 Issues 评论。
*   **痛点推断**：基于 Release Notes 推断，macOS 用户在安装升级过程中普遍遭遇“应用已损坏”的系统拦截，这是目前最大的用户痛点。维护者已意识到该问题并在发布说明中前置了解决方案，这是一种积极的运维响应。

## 8. 待处理积压
*   **积压状态**：无数据支持。
*   **建议**：鉴于今日连续发布了三个修复版本，建议维护者在后续版本中彻底解决 macOS 签名问题，以减少用户的手动干预成本，提升项目易用性。

---
**分析师总结**：EasyClaw 今日处于“修复模式”，连续三次发版表明项目正在经历 macOS 平台的适配阵痛期。建议用户在升级前仔细阅读 Release Notes 中的终端命令说明，维护者需关注频繁发版背后的打包流程稳定性。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*