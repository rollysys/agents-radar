# OpenClaw 生态日报 2026-05-18

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-18 03:56 UTC

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

**OpenClaw 项目动态日报 (2026-05-18)**

### 1. 今日速览
OpenClaw 项目今日保持极高的迭代速度，单日发布 3 个 Beta 版本（v2026.5.16-beta.4 至 beta.6），重点优化了 Mac 客户端的设置界面并引入了安全审计抑制机制。社区活跃度异常火爆，Issues 与 PR 更新量均达 500 条，其中新开/活跃 Issue 占比 93%，显示项目正处于功能快速扩张与激烈讨论期。今日合并/关闭 PR 65 个，但仍有大量 PR（435 条）处于待合并状态，显示出审核积压或大规模开发并行。社区高度关注跨平台支持（Linux/Windows）与安全性问题，整体健康度活跃但需关注 Bug 修复进度。

### 2. 版本发布
今日连续发布了 **v2026.5.16-beta.4、beta.5、beta.6** 三个版本，主要更新内容如下：

*   **Mac 客户端重构**：重新设计了 Settings 页面，采用了统一的卡片布局，优化了导航缓存，改进了权限、语音、Skills、Cron、Exec 和调试面板的布局与间距，提升了原生侧边栏的视觉稳定性。
*   **Skills 重命名**：将 repo-local Codex 收尾审查技能及辅助工具重命名为 `autoreview`。
*   **安全审计增强**：新增 `security.audit.suppressions` 配置项，允许用户主动抑制特定的审计发现。被抑制的条目将不会出现在活跃摘要中，但仍保留在 JSON 输出中并标记为“已抑制”，方便合规检查。感谢 @100menotu001 的贡献。

### 3. 项目进展
今日共有 **65 个 PR 被合并或关闭**，重点项目推进如下：

*   **[CLOSED] Fix: Preserve Feishu topic affinity across subagent orchestration (#50943)**
    *   修复了飞书（Feishu）渠道中，子代理编排过程中主题亲和性丢失的问题。确保了带有 `:sender:` 后缀的会话能够正确解析 `:topic:` ID，并将主题/线程关联性传递给子代理，解决了回复串混乱的 Bug。
*   **[OPEN] feat: Add workspace checkpoints (#83415)**
    *   提出重大功能更新，计划引入基于 Git 的 Workspace 检查点机制。在执行 `write`、`edit`、`apply_patch` 和 `exec` 工具前自动创建隐藏检查点，并支持手动检查、回滚操作。这将极大提升 Agent 操作的可逆性和安全性。
*   **[OPEN] fix: Support m2a audio attachments (#83414)**
    *   新增对 `.m2a` 音频格式的支持，完善了多模态处理能力。
*   **[OPEN] fix: Reject envelope metadata sludge from auto-capture and recall (#73787)**
    *   修复了 Memory 模块在自动捕获和召回时混入“信封元数据”噪声的问题，提升了 RAG 检索的准确性。

### 4. 社区热点
今日讨论最激烈的问题集中在**平台支持缺失**与**安全/隐私风险**：

*   **[Issue #75] Linux/Windows Clawdbot Apps** (评论: 104 | 👍: 75)
    *   **诉求**：用户强烈呼吁官方提供 Linux 和 Windows 的原生客户端。目前仅有 macOS、iOS 和 Android 支持，导致桌面端用户体验缺失。这是该项目目前点赞数最高、讨论最热的 Issue。
*   **[Issue #25592] Text between tool calls leaks to messaging channels** (评论: 26)
    *   **痛点**：严重的安全/UX 问题。Agent 在工具调用之间产生的内部处理文本（如错误处理、内心独白）意外泄露到了 Slack/iMessage 等用户可见渠道。用户认为这破坏了体验的“魔法感”，也可能暴露系统内部逻辑。
*   **[Issue #6731] Feature: Safe/Unsafe ClawdBot (Rust Rewrite)** (评论: 12)
    *   **讨论**：社区热议是否应使用 Rust 重写项目，引入沙箱机制以防止内存泄漏、未定义行为及 Root 权限滥用，提升本地运行的安全性。
*   **[Issue #45740] gh-issues skill: untrusted issue body injected** (评论: 12)
    *   **安全隐患**：用户指出 `gh-issues` 技能将未经清洗的 GitHub Issue 内容直接注入子代理提示词，可能导致提示词注入攻击。

### 5. Bug 与稳定性
今日报告了多处影响核心功能的 Bug，部分已有修复 PR 在跟进：

*   **严重**：
    *   **[Issue #22676] Signal daemon race condition**：SIGUSR1 重启信号导致进程竞争，产生孤儿进程和发送失败，影响消息网关稳定性。
    *   **[Issue #38327] Gemini model crash**：使用 `google-vertex/gemini-3.1-pro-preview` 时崩溃，报错 "Cannot convert undefined or null to object"，属回归问题。
    *   **[Issue #31583] Exec env vars regression**：`skills.entries.*.env` 配置的环境变量未能正确传递给 `exec` 工具，导致依赖密钥的脚本执行失败。
*   **中等**：
    *   **[Issue #32473] Control UI requires HTTPS**：在 VPS+Docker 环境下，控制台 UI 强制要求 Device Identity/HTTPS，导致无法正常访问。
    *   **[Issue #45765] OPENCLAW_HOME Nesting Bug**：设置 `OPENCLAW_HOME=~/.openclaw` 会导致生成嵌套目录 `~/.openclaw/.openclaw`，配置文件错位。

### 6. 功能请求与路线图信号
结合 Issues 与活跃 PR，以下功能可能被纳入近期路线图：

*   **安全与审计**：`security.audit.suppressions` 已在今日发布。社区对 **Masked Secrets（掩码密钥）** (#10659) 和 **Filesystem Sandboxing（文件系统沙箱）** (#7722) 的需求极高，预计将是下一阶段安全加固的重点。
*   **多模态与体验**：PR #83414 (m2a audio) 正在推进。Issue #12602 (Slack Block Kit) 和 #28300 (Theme Customization) 显示出用户对富媒体交互和 UI 定制的强烈需求。
*   **企业级特性**：Issue #13610 (Native Secrets Management) 和 #39604 (Private Network Access) 表明 OpenClaw 正向更严谨的企业级部署场景演进。

### 7. 用户反馈摘要
*   **痛点**：配置复杂度高，尤其是 Docker 部署下的权限、网络配置 (#32473) 和 Memory/Embedding 的初始化 (#16670)。
*   **满意度**：对 Mac 端的更新表示欢迎，但对 Linux/Windows 支持的缺失感到沮丧 (#75)。
*   **安全隐患**：用户对 Agent 可能泄露内部思考过程或 API Key 表示担忧 (#25592, #10659)，希望有更严格的权限控制和隔离机制。

### 8. 待处理积压
以下高优先级 Issue 长期未得到根本解决，需维护者关注：

*   **[Issue #75] Linux/Windows Apps**：作为热度最高的 Issue，官方尚未明确发布时间表。
*   **[Issue #31331] Docker Install + Sandbox issue**：涉及 Docker 环境下 Workspace 挂载权限问题，影响 Sandbox 功能在容器化部署中的可用性。
*   **[Issue #22438] Tiered bootstrap file loading**：建议优化大工作区下的 Context 加载策略，减少 Token 浪费，目前仍处于讨论阶段。

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告 (2026-05-18)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于从“功能快速扩张”向“生产可用性攻坚”转型的关键期。头部项目（如 OpenClaw, Zeroclaw）正密集解决多模态兼容、长期记忆与企业级安全审计等深层技术难题，而新兴项目则在特定领域（如视频生成、本地模型适配）寻求差异化突破。社区反馈显示，**模型推理链路的稳定性**（如 DeepSeek-V4 兼容性）和**部署体验的顺畅度**（如 Docker 配置、跨平台客户端）已成为决定项目生死的关键变量。生态整体呈现“架构重构与 Bug 修复并行”的态势，安全漏洞（RCE、密钥泄露）的频发警示行业需将安全性前置。

## 2. 各项目活跃度对比

| 项目名称 | Issues (新/活) | PRs (更新) | Release 情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500+ | 500+ | **3 个 Beta 版** (v2026.5.16-beta.4-6) | 🔥 极高活跃，迭代迅速，但 Issue 积压严重 |
| **Zeroclaw** | 21 | 50 | 无 (v0.8.0 开发中) | ⚠️ 高活跃，核心架构升级期，高危 Bug 较多 |
| **IronClaw** | 13 | 48 | 无 | 🛠️ 重构活跃，架构调整大，UI/工具流 Bug 显现 |
| **CoPaw** | 25 | 17 | 无 | 🚨 高活跃，存在严重功能性阻断与安全漏洞 |
| **Hermes Agent**| 42 | 50 | 无 (v0.13.0 修复期) | ⚠️ 发布后震荡期，安装与运行时崩溃问题频发 |
| **NanoBot** | 未详述 | 8 (合并) | 无 | 📉 中等活跃，WebUI 与部署问题突出 |
| **PicoClaw** | 未详述 | 8 (合并) | **v0.2.8-nightly** | ✅ 稳健迭代，响应社区需求迅速 |
| **NanoClaw** | 10 | 10 (合并) | 无 | 🔥 高开发强度，存在严重安全隐患 (密钥泄露) |
| **Moltis** | 2 | 3 (合并) | **20260517.03** | ✅ 健康迭代，功能增强稳健 |
| **NullClaw** | 3 | 0 | 无 | 💤 静默期，反馈质量高但无维护响应 |
| **LobsterAI** | 0 | 9 (Stale) | 无 | 💤 低活跃，维护滞后，PR 积压严重 |
| **TinyClaw** | 0 | 0 | 无 | 💤 无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | 💤 无活动 |
| **EasyClaw** | 0 | 0 | 无 | 💤 无活动 |

## 3. OpenClaw 在生态中的定位

*   **核心参照与流量中心**：OpenClaw 在社区互动量级上遥遥领先（单日 500+ Issues/PRs），远超其他同类项目，确立了其作为**生态核心参照系**的地位。
*   **企业级与多平台先行者**：相比 NanoBot/PicoClaw 侧重 WebUI 和本地化，OpenClaw 率先发力**企业级合规**（如 `security.audit.suppressions`）与**全平台覆盖**。其面临的“Linux/Windows 客户端缺失”痛点反证了用户对其跨平台能力的极高期待。
*   **技术路线差异**：
    *   vs **Zeroclaw**：OpenClaw 更侧重应用层功能迭代（UI 重构、渠道适配），而 Zeroclaw 正在下潜到底层 Runtime (Schema V3, Multi-Agent) 进行架构重构。
    *   vs **Hermes/IronClaw**：OpenClaw 展现出更强的发布节奏控制力（单日 3 版本），而 Hermes 和 IronClaw 目前正受困于版本回归和架构迁移带来的稳定性问题。

## 4. 共同关注的技术方向

1.  **推理模型兼容性**
    *   **涉及项目**：Zeroclaw, Moltis, NanoBot。
    *   **诉求**：随着 DeepSeek-V4、Gemma-4 等具备“思维链”特性的模型发布，多项目遭遇解析难题。Zeroclaw (#6672) 和 Moltis (#1007) 均报告了 `reasoning_content` 或 `<thought>` 标签处理不当导致上下文丢失或渲染错误。**行业亟需统一的推理内容解析标准。**

2.  **安全沙箱与权限控制**
    *   **涉及项目**：OpenClaw, CoPaw, PicoClaw, NanoClaw。
    *   **诉求**：安全成为红线。OpenClaw 讨论引入 Rust 重写以增强安全；CoPaw 曝光插件 RCE 漏洞；NanoClaw 出现 Signal 密钥泄露；PicoClaw 讨论 Exec 工具的过严拦截。**“安全与灵活性的平衡”是核心议题。**

3.  **长期记忆与上下文管理**
    *   **涉及项目**：Zeroclaw, NullClaw, OpenClaw, Moltis。
    *   **诉求**：Zeroclaw 提出 "Dream Mode" 整理记忆，NullClaw 请求跨 Session 全局记忆，OpenClaw 优化 Memory 噪声过滤。Agent 正从“无状态工具”向“有记忆个体”演进。

4.  **部署简化与本地化**
    *   **涉及项目**：OpenClaw, PicoClaw, Hermes, NanoBot。
    *   **诉求**：OpenClaw 用户呼吁 Linux/Windows 客户端；PicoClaw 用户请求 LM Studio 原生支持；Hermes 用户抱怨 Docker 镜像过大。用户极度渴望“开箱即用”的本地部署体验。

## 5. 差异化定位分析

| 维度 | OpenClaw | Zeroclaw | PicoClaw / NanoBot | IronClaw / NullClaw |
| :--- | :--- | :--- | :--- | :--- |
| **核心侧重** | **全渠道接入与合规** | **多智能体运行时** | **轻量化与多模态** | **架构创新与底层重构** |
| **目标用户** | 企业用户、重度多平台用户 | 开发者、Agent 编排研究者 | 个人开发者、硬件受限用户 | 极客、高阶技术用户 |
| **技术架构** | 应用层快速迭代，注重 UI/UX | 深度重构 Runtime (Schema V3) | 侧重 WebUI 与本地模型适配 | 引入 Zig/WASM，组合根重构 |
| **关键痛点** | 平台支持不均，配置复杂 | 新模型适配滞后，配置失效 | WebUI 稳定性，RISC-V 兼容 | 安装流程断裂，文档滞后 |

## 6. 社区热度与成熟度

*   **快速扩张期**：
    *   **OpenClaw**：Issue 爆炸式增长，功能迭代极快，但积压严重，需警惕“技术债务”。
    *   **Zeroclaw**：正处于 v0.8.0 大版本前夜，核心架构变动引发社区高度关注，稳定性风险处于高位。
    *   **CoPaw / NanoClaw**：开发活跃，但 Bug 频发且出现严重安全漏洞，处于“野蛮生长”阶段。

*   **质量巩固期**：
    *   **Hermes Agent**：发布后遭遇大量回归问题，社区重心转向修 Bug，处于“填坑”阶段。
    *   **NanoBot**：WebUI 和部署问题成为主要瓶颈，正通过 PR 修补稳定性。
    *   **PicoClaw / Moltis**：节奏稳健，版本发布有序，社区反馈响应及时，健康度较高。

*   **维护/停滞期**：
    *   **LobsterAI**：PR 长期积压，核心功能开发停滞，处于维护模式。
    *   **NullClaw**：代码提交停滞，但社区提交了高质量的 Bug 报告，处于“高价值反馈积累”但缺乏响应的状态。

## 7. 值得关注的趋势信号

1.  **“配置地狱”引发的反噬**：
    多个项目（Zeroclaw, Hermes, NanoBot）的用户反馈均指向配置复杂、文档与实际不符、Docker 部署困难。**行业趋势正从“功能堆砌”转向“开发者体验（DX）优化”**。谁能率先实现“零配置”或“智能配置”（如 PicoClaw 讨论的 API 自动检测），谁将获得下一阶段的优势。

2.  **多模态交互的深化与细化**：
    简单的图片识别已不能满足需求。视频生成、语音交互、长文本 TTS 摘要（Hermes Agent）以及高保真音频支持（.m2a）成为新热点。Agent 正在进化为全双工的多模态实体。

3.  **安全成为默认属性**：
    过去安全往往是被忽视的角落，但今日 OpenClaw 的审计抑制、NanoClaw 的密钥泄露、CoPaw 的 RCE 漏洞表明，**安全漏洞正在成为阻断项目采用的一票否决项**。未来的 Agent 框架必须内置沙箱、审计和密钥管理方案。

4.  **“静默失败”是用户最大痛点**：
    多个 Issue（NullClaw #918, CoPaw #4469, OpenClaw #25592）指出 Agent 在工具调用失败或内部错误时静默挂起或信息丢失。**可观测性与明确的错误反馈机制**将是 Agent 走向生产环境的核心竞争力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-18)

## 1. 今日速览
NanoBot 项目今日保持高度活跃，社区贡献集中于 **WebUI 稳定性优化**、**多模态能力扩展**及**部署体验修复**。项目核心功能迎来重大进展，长期运行的会话管理机制得到增强。然而，WebUI 界面交互与 Docker 部署兼容性仍是当前用户反馈的高频痛点，新增的 Bug 报告多集中于此。整体来看，项目正处于快速迭代期，功能边界不断拓宽，但稳定性与文档滞后问题亟待解决。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **8 个 PR 被合并**，显著提升了系统的健壮性与功能深度：

*   **核心功能增强**：PR [#3788](https://github.com/HKUDS/nanobot/pull/3788) 成功合并，引入了 `/goal` 命令与 `long_task` 机制，实现了聊天作用域内的持久化目标状态，大幅提升了 Agent 处理长期复杂任务的能力。
*   **稳定性修复**：PR [#3881](https://github.com/HKUDS/nanobot/pull/3881) 修复了 AutoCompact 与 Consolidator 之间的并发竞态条件，解决了潜在的会话数据损坏风险；PR [#3864](https://github.com/HKUDS/nanobot/pull/3864) 增加了对中文限流错误标识“访问量过大”的识别，提升了国内模型调用的鲁棒性。
*   **前端与交互优化**：PR [#3877](https://github.com/HKUDS/nanobot/pull/3877) 优化了 WebUI 流式传输与活动渲染性能；PR [#3878](https://github.com/HKUDS/nanobot/pull/3878) 修复了 CLI 模式下推理 Token 逐行显示的问题，改善了终端体验。
*   **部署修复**：PR [#3870](https://github.com/HKUDS/nanobot/pull/3870) 与 [#3872](https://github.com/HKUDS/nanobot/pull/3872) 修复了 Docker 构建失败及前端端口配置问题，恢复了容器化部署流程。

## 4. 社区热点
今日讨论最活跃的议题主要集中在 WebUI 交互体验与部署配置：

*   **[Issue #3790](https://github.com/HKUDS/nanobot/pull/3790)**：WebUI 会话打印内容显示错乱问题引发热议（14 条评论），用户反馈升级至最新源码后需频繁刷新页面，严重影响使用体验。
*   **[Issue #3873](https://github.com/HKUDS/nanobot/pull/3873)**：Docker 部署文档与实际配置存在多处不一致（如 WebUI 端口、bwrap 沙箱配置），阻碍了新用户的快速上手。
*   **[Issue #3885](https://github.com/HKUDS/nanobot/pull/3885)**：用户建议为 Dream 系统作业添加全局开关，以减少不必要的资源占用，反映了高级用户对后台任务精细化管理诉求。

## 5. Bug 与稳定性
今日报告的 Bug 主要影响用户界面与接入层，部分已有修复方案：

*   **严重 (Critical)**：
    *   [Issue #3857](https://github.com/HKUDS/nanobot/pull/3857)：Gateway 启动时报 HTTP 500 错误，导致服务不可用。
    *   [Issue #3884](https://github.com/HKUDS/nanobot/pull/3884)：WebUI 在首次响应后自动关闭会话，阻断正常对话流程。
*   **中等**：
    *   [Issue #3790](https://github.com/HKUDS/nanobot/pull/3790)：WebUI 打印显示错乱，需刷新恢复。
    *   [Issue #3863](https://github.com/HKUDS/nanobot/pull/3863)：微信渠道登录失败，提示版本过低，涉及底层协议兼容性。
*   **修复进度**：针对 Docker 构建问题的修复已合并 ([PR #3870](https://github.com/HKUDS/nanobot/pull/3870))；WebUI 渲染优化已合并 ([PR #3877](https://github.com/HKUDS/nanobot/pull/3877))，有望缓解显示问题。

## 6. 功能请求与路线图信号
社区正在积极拓展 NanoBot 的多平台与多模态能力：

*   **多模态生成**：PR [#3886](https://github.com/HKUDS/nanobot/pull/3886) 提交了 Gemini 图像生成支持，PR [#3879](https://github.com/HKUDS/nanobot/pull/3879) 增加了 MiniMax 图像生成提供商，预示着项目将强化图像生成能力。
*   **平台接入**：PR [#3852](https://github.com/HKUDS/nanobot/pull/3852) 正在集成 Signal 渠道支持，满足隐私通讯场景需求。
*   **安全与控制**：Issue [#3887](https://github.com/HKUDS/nanobot/pull/3887) 提出为危险命令检测增加用户授权机制，表明企业级用户对安全管控的需求上升。
*   **性能优化**：PR [#3865](https://github.com/HKUDS/nanobot/pull/3865) 提出了基于 BM25 的轻量级技能路由器，旨在减少 System Prompt 消耗，降低推理成本。

## 7. 用户反馈摘要
*   **部署体验**：Docker 用户面临较多阻碍，包括构建失败、WebUI 无法从容器外访问（Issue #3876）及文档滞后，反映出项目在容器化适配方面测试不足。
*   **使用痛点**：WebUI 稳定性是目前最大的槽点，包括显示乱码、会话意外断开及流式响应渲染问题。
*   **积极信号**：用户对 CLI 命令管理模型配置（PR #3883）和长时间任务目标管理功能表示期待，认为这将显著提升 Agent 的自主性与易用性。

## 8. 待处理积压
以下长期未解决的 Issue/PR 需维护者重点关注：

*   **[PR #2060](https://github.com/HKUDS/nanobot/pull/2060)**：关于 Shell 工具在受限模式下支持特定路径的改进，已开启超过两个月，涉及沙箱安全策略，建议尽快评估合并。
*   **[PR #3368](https://github.com/HKUDS/nanobot/pull/3368)**：为心跳检测添加模型覆盖配置，有助于降低运营成本，等待最终审核。
*   **[Issue #3876](https://github.com/HKUDS/nanobot/pull/3876)**：WebUI 默认绑定 localhost 导致 Docker 部署无法访问，虽已有相关 PR (#3872) 尝试修复，但该 Issue 反映的架构设计问题仍需明确解决方案。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-18)

## 1. 今日速览
Zeroclaw 项目今日保持高活跃度，共有 21 条 Issue 更新和 50 条 PR 更新，显示出社区与开发团队紧密的协作节奏。项目当前重心明显向 **v0.8.0 大版本更新（Multi-Agent Runtime & Schema V3）** 倾斜，核心开发精力集中在修复高风险 Bug 和完善多智能体架构。虽然今日无新版本 Release 发布，但 v0.8.0 的核心 PR (#6398) 正在密集迭代中。同时，**DeepSeek-V4 等推理模型的兼容性** 成为社区关注焦点，多个高危 Bug 报告指向了 `reasoning_content` 的处理逻辑，需引起高度重视。

## 2. 版本发布
*   **无新版本发布**。
    *   **注意**：项目正处于 v0.8.0 的关键开发阶段，核心 PR #6398 正在寻求批准以合并代码，预计将带来多智能体运行时和 Schema V3 的重大更新。

## 3. 项目进展
今日项目在稳定性修复和平台支持上取得实质性进展，共合并/关闭 7 个 PR，处理了 5 个 Issue：
*   **平台支持拓展**：Issue #1924 已关闭，项目正式支持 FreeBSD 平台，解决了服务器和 NAS 用户需手动编译源码的痛点。
*   **关键 Bug 修复**：
    *   修复了 Windows 平台上 Cron Job 因硬编码 `sh` 导致执行失败的问题 (#6705 Closed)，提升了跨平台兼容性。
    *   修复了 Router 模式下 Vision 功能检测逻辑，使其正确反映默认 Provider 的能力 (#6592 Closed)。
    *   修复了 SQLite 内存模块在并发启动时 Schema 初始化失败的问题 (#6431 Closed)。
*   **配置与文档完善**：
    *   Issue #5994 关闭，官方文档网站与端到端文档已提上日程/完成，将作为新用户的主要入口。
    *   修复了 Email 频道的默认主题和 Markdown 渲染问题 (#6512 Merged)。
*   **架构重构**：PR #6725 合并，修复了 Skill 管理工具中冷却时间的强制执行逻辑，为后台 Skill 自动优化打下基础。

## 4. 社区热点
今日讨论热度最高的问题集中在 **模型兼容性** 和 **CI/CD 稳定性**：
*   **[Issue #6059] DeepSeek-V4 API 兼容性问题**：作为今日热度最高的 Issue（👍 4, 评论 9），用户报告在使用 DeepSeek-V4-Pro/Flash 时遇到 API 格式错误，特别是与 thinking mode 相关的 `reasoning_content` 处理。这反映出用户对 Zeroclaw 快速适配最新主流推理模型的强烈需求。
    *   链接: [zeroclaw-labs/zeroclaw Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)
*   **[Issue #5600] Kimi-Code Provider 流式调用工具报错**：该问题已导致工作流阻塞（S1 级别），且有 9 条评论讨论，表明特定 Provider 的适配仍是社区痛点。
    *   链接: [zeroclaw-labs/zeroclaw Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)
*   **[Issue #6751 & #6747] CI 工作流全面失效**：社区发现新增的 PR 标题校验工作流自合并以来从未成功运行，处于静默失败状态。这是一个流程管理的“盲点”，影响了代码库的规范性检查。
    *   链接: [zeroclaw-labs/zeroclaw Issue #6751](https://github.com/zeroclaw-labs/zeroclaw/issues/6751)

## 5. Bug 与稳定性
今日报告了多个高风险 Bug，主要集中在 **推理链路** 和 **配置失效**：

### 🔴 高危 (S0-S1 / P1)
*   **[Issue #6672] 小米/DeepSeek 推理模型内容丢失**：在使用 Xiaomi Mimo-v2.5 和 DeepSeek-V4 等支持思维链的模型时，Agent 在多轮 Tool Call 中未能回传 `reasoning_content`，导致上下文丢失或逻辑中断。
    *   状态: Open | 链接: [zeroclaw-labs/zeroclaw Issue #6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672)
*   **[Issue #6721] MCP 工具加载导致 Webhook 静默挂起**：在 deferred_loading 模式下，`tool_search` 未在默认自动批准列表中，导致非交互模式下 Agent 静默挂起 120 秒后自动拒绝，严重影响自动化流程。
    *   状态: Open | 链接: [zeroclaw-labs/zeroclaw Issue #6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721)

### 🟠 中危 (S2 / P2)
*   **[Issue #6723] OpenAI Provider 超时配置失效**：配置文件中的 `timeout_secs` 被原生 OpenAI Provider 忽略，导致长时间任务意外超时。
    *   状态: Open | 链接: [zeroclaw-labs/zeroclaw Issue #6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723)
*   **[Issue #6734] Qwen 3.6 工具调用信封泄露**：在 Matrix 频道中，Qwen 3.6 的内部工具调用协议 Payload 被当作文本直接发送给用户，暴露了系统内部逻辑。
    *   状态: Open | 链接: [zeroclaw-labs/zeroclaw Issue #6734](https://github.com/zeroclaw-labs/zeroclaw/issues/6734)
*   **[Issue #6722 & #6720] "僵尸"配置项**：`rerank_enabled` 和 `context_aware_tools` 等配置字段虽在 Schema 中定义，但代码中从未读取，造成用户误解。
    *   状态: Open

### 🛠️ 已有修复 PR
*   **[PR #6753]**: 修复 DeepSeek Provider 忽略 `base_url` 覆盖配置的问题，可能有助于解决部分连接问题。
    *   链接: [zeroclaw-labs/zeroclaw PR #6753](https://github.com/zeroclaw-labs/zeroclaw/pull/6753)

## 6. 功能请求与路线图信号
*   **v0.8.0 路线图明确**：PR #6398 提出的 "Multi-Agent Runtime and Schema V3" 正在寻求合并批准。这是项目下一阶段的核心架构，将彻底改变 Agent 的运行模式，支持更复杂的多智能体协作。
    *   链接: [zeroclaw-labs/zeroclaw PR #6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398)
*   **记忆系统增强**：PR #6693 提出引入 "Dream Mode（梦境模式）"，允许 Agent 在空闲时通过本地或 LLM 辅助进行记忆整合、修剪和归纳。这代表了 AI Agent 向“拟人化”和长期记忆进化的重要一步。
    *   链接: [zeroclaw-labs/zeroclaw PR #6693](https://github.com/zeroclaw-labs/zeroclaw/pull/6693)
*   **Strict Tool Parsing**：PR #6675 正在引入严格工具解析模式，允许用户禁用宽松的文本回退解析，强制要求 Provider 返回原生的 Tool Call，这对于提升生产环境稳定性至关重要。

## 7. 用户反馈摘要
通过对 Issue 评论和描述的分析，提炼出以下用户痛点：
*   **"配置了但不生效"的挫败感**：多位用户反馈（#6720, #6722, #6723）在配置文件中设置了参数（如超时时间、重排序、上下文感知工具），但系统完全忽略。这降低了用户对配置系统的信任度。
*   **推理模型适配滞后**：随着 DeepSeek-V4 和小米 Mimo 等推理模型的发布，用户希望 Zeroclaw 能第一时间支持 `reasoning_content` 的传递，目前的报错和丢失严重影响了这些 SOTA 模型的使用体验。
*   **CI 反馈缺失**：贡献者发现 PR 检查实际上并没有运行，这种“假通过”让社区贡献者感到困惑，担心代码质量把控。

## 8. 待处理积压
以下重要 Issue 长期活跃但尚未解决，建议维护者优先关注：
*   **[Issue #6059] DeepSeek-V4 不兼容**：作为 P1 级别问题，已活跃近一个月，仍未有官方修复版本发布，建议加速 PR #6753 的审查流程。
    *   链接: [zeroclaw-labs/zeroclaw Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)
*   **[Issue #6074] 批量回滚导致代码丢失**：153 个已合并的提交被批量回滚，且尚未恢复。这是一个潜在的技术债务黑洞，可能导致功能缺失和 Bug 死灰复燃。
    *   链接: [zeroclaw-labs/zeroclaw Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)
*   **[Issue #6253] Skills 支持与 UX 改进**：作为 v0.7.6 的遗留目标，该 Tracker 仍处于 Open 状态，需确认是否已完全并入 v0.8.0 里程碑。
    *   链接: [zeroclaw-labs/zeroclaw Issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-18)

## 1. 今日速览
Hermes Agent 项目今日维持高热度活跃状态，过去24小时内新增/活跃 Issue 达 42 条，PR 更新 50 条，社区反馈频繁。然而，项目当前正处于 **v0.13.0 版本发布后的稳定性震荡期**，多个关于安装、打包缺失、核心功能崩溃（Fallback、Gateway）的严重 Bug 集中爆发。虽然贡献者响应迅速，已提交针对 P0 级崩溃的修复 PR，但 Docker 镜像与 Windows 安装等基础体验问题仍亟待解决。整体来看，项目功能迭代迅速，但质量保证（QA）与发布流程的完整性面临挑战。

## 2. 版本发布
**无新版本发布**。
当前项目处于 v0.13.0 发布后的维护阶段，主要精力集中在修复该版本引入的回归问题（如 i18n 缺失、打包文件遗漏）。

## 3. 项目进展
今日共有 8 个 PR 更新状态（含合并/关闭），主要进展集中在修复严重的运行时错误与打包缺陷：

*   **🚨 核心崩溃修复 (P0):** 针对主 Provider 配额耗尽时 Fallback 机制触发 `NameError` 导致 Agent 崩溃的问题（Issue #27719），社区已迅速提交 PR #27732，通过在 `conversation_loop` 中正确导入 `_pool_may_recover_from_rate_limit` 解决了该问题。
*   **📦 打包与安装修复:** 针对近期频发的安装问题，PR #27728 提交了重要修复，补充了缺失的 package wildcards 和 manifest grafts，解决了 Homebrew 安装后 CLI 子命令无法使用的问题（Issue #27664），并修复了 pip 包中 locales 目录缺失导致 i18n 键显示为原始 Key 的问题（Issue #27632）。
*   **🛡️ 安全性增强:** PR #27457 加强了快照恢复路径的校验，防止通过 `snapshot_id` 解析导致文件写入任意路径的安全风险。
*   **🤖 功能增强:** PR #27731 优化了钉钉集成，利用 DWS 实现原生 Markdown 渲染；PR #27737 新增了 TinyFish 后端搜索提供者；PR #27736 增加了对长 TTS 语音回复的自动摘要功能，优化语音交互体验。

## 4. 社区热点
今日社区讨论焦点集中在使用体验的阻塞问题上：

*   **[Issue #15895](https://github.com/NousResearch/hermes-agent/issues/15895)**: **Gemini CLI 配额检测失效引发 429 错误**。尽管用户拥有充足配额，CLI 模式仍报错，引发了关于 OAuth 认证与配额检测逻辑的深入讨论（评论数 12）。
*   **[Issue #25495](https://github.com/NousResearch/hermes-agent/issues/25495)**: **官方 Docker 镜像中 Matrix/Synapse 网关损坏**。这是一个 P1 级别的严重 Bug，导致用户在 Docker 环境下部署 Matrix 网关时卡在启动阶段，严重影响部署体验（评论数 8）。
*   **[Issue #12572](https://github.com/NousResearch/hermes-agent/issues/12572)**: **提供轻量级 Docker 镜像**。用户强烈建议移除不必要的 Playwright/Chromium 依赖以减小镜像体积（点赞数 9），反映了用户对资源效率的关切。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，且严重级别较高，主要涉及安装、运行时崩溃与工具链：

| 严重度 | Issue/PR | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **P0** | [Issue #27719](https://github.com/NousResearch/hermes-agent/issues/27719) | **Fallback 机制崩溃**：主 Provider (DeepSeek) 配额耗尽时，切换备用 Provider 失败并抛出 `NameError`，导致 Agent 完全停止工作。 | **已有修复 PR #27732** |
| **P1** | [Issue #25495](https://github.com/NousResearch/hermes-agent/issues/25495) | **Docker Matrix 网关损坏**：官方镜像启动后卡在 "fixing ownership"，无法正常对外服务。 | Open |
| **P1** | [Issue #27632](https://github.com/NousResearch/hermes-agent/issues/27632) | **v0.13.0 i18n 缺失**：pip 包中未包含 `locales/` 目录，导致所有网关斜杠命令显示原始 Key 而非翻译文本。 | **已有修复 PR #27728** |
| **P1** | [Issue #22385](https://github.com/NousResearch/hermes-agent/issues/22385) | **Telegram 图片处理死锁**：Agent 无法读取用户发送的图片，并会卡死长达 30 分钟才超时失败。 | Open |
| **P2** | [Issue #27622](https://github.com/NousResearch/hermes-agent/issues/27622) | **Windows 安装脚本失效**：PowerShell 环境下安装脚本报错 "assignment expression is not valid"。 | Closed (疑似通过打包修复解决) |

## 6. 功能请求与路线图信号
*   **轻量化部署 ([Issue #12572](https://github.com/NousResearch/hermes-agent/issues/12572))**: 用户强烈建议移除 Docker 镜像中的 Chromium 等重依赖，表明 Hermes 在资源受限环境（如边缘设备、小型 VPS）的部署需求日益增长。
*   **企业级监控与审计 ([Issue #26696](https://github.com/NousResearch/hermes-agent/issues/26696), [Issue #5041](https://github.com/NousResearch/hermes-agent/issues/5041))**: 分别提出了 Token 遥测仪表盘与工具调用的加密审计日志功能，显示 Hermes 正逐渐被用于生产环境与企业场景，对可观测性要求提高。
*   **Web 搜索多样化 ([Issue #27723](https://github.com/NousResearch/hermes-agent/issues/27723))**: 请求支持 SerpApi 作为新的搜索后端，与已有的 TinyFish (PR #27737) 提案共同指向了对高质量 Web 信息获取能力的持续优化。

## 7. 用户反馈摘要
*   **安装门槛高：** 多个 Issue (#27622, #27397, #27664) 反映 Windows 和 Homebrew 的安装流程存在阻塞问题，"开箱即用"体验受损，用户需手动排查配置或脚本错误。
*   **Docker 体验痛点：** 官方镜像过大（~2.4 GB）且包含不需要的依赖，加之 Matrix 网关损坏，导致容器化用户体验不佳。
*   **稳定性信心：** 尽管 v0.13.0 出现了如 i18n 缺失和 Fallback 崩溃等低级错误，但社区对核心架构（如 Tool 调用、MCP 集成）的评价依然积极，主要不满集中在发布前的测试覆盖度。

## 8. 待处理积压
*   **[Issue #15895](https://github.com/NousResearch/hermes-agent/issues/15895)** (创建于 04-26): Gemini CLI 的 429 错误问题长期未决，影响了使用 Google AI 后端的核心用户体验，建议优先排查 OAuth 流程。
*   **[Issue #4876](https://github.com/NousResearch/hermes-agent/issues/4876)** (创建于 04-03): Docker 镜像中 Node.js 版本即将过期（v20 LTS 将于 2026 年 4 月结束支持），需升级至 v22 以规避安全风险。
*   **[Issue #22385](https://github.com/NousResearch/hermes-agent/issues/22385)** (创建于 05-09): Telegram 图片读取 P1 级 Bug 尚未修复，严重影响 Telegram 机器人的多模态交互能力。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-18)

## 1. 今日速览
PicoClaw 项目今日保持**高度活跃**状态，开发节奏紧凑。过去 24 小时内共有 27 次更新，其中合并/关闭的 Issue 与 PR 数量达到 16 个，显示出维护团队正在积极清理积压并推进新功能。项目成功发布了 `v0.2.8-nightly` 版本，合并了包括 SiliconFlow Provider 支持、Windows 安全增强、UI 交互优化在内的多个关键 PR。社区方面，用户对本地模型连接便利性（如 LM Studio）及工具安全策略的讨论热度较高，同时也报告了 RISC-V 架构下的兼容性问题。

## 2. 版本发布
- **版本号**: `nightly: Nightly Build`
- **标签**: `v0.2.8-nightly.20260518.0df050ff`
- **说明**: 这是一个自动化构建的 Nightly 版本，包含了截至目前的最新代码提交。
- **注意事项**: 官方提示该版本可能不稳定，建议测试环境使用。
- **变更日志**: [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## 3. 项目进展
今日共有 **8 个 PR 被合并**，显著增强了系统的功能性与稳定性：

1.  **新增 SiliconFlow 原生支持** ([PR #2885](https://github.com/sipeed/picoclaw/pull/2885)):
    合并了社区期待已久的 SiliconFlow Provider 支持，用户现在可以直接在配置中选择该 Provider，无需再手动适配 OpenAI 兼容模式，降低了配置门槛。关联 Issue [#2884](https://github.com/sipeed/picoclaw/issue/2884)。

2.  **模型配置工作流优化** ([PR #2752](https://github.com/sipeed/picoclaw/pull/2752), [PR #2833](https://github.com/sipeed/picoclaw/pull/2833)):
    大幅改进了 Web UI 的模型配置体验，新增了 Provider 感知的验证、模型连通性测试功能，解决了用户配置模型时的痛点。

3.  **Windows 安全增强** ([PR #2836](https://github.com/sipeed/picoclaw/pull/2836)):
    修复了 PowerShell 编码绕过导致的安全漏洞，通过拒绝特定的注入方式提升了 Windows 平台的安全性。

4.  **UI 交互体验提升** ([PR #2882](https://github.com/sipeed/picoclaw/pull/2882)):
    Web 端聊天界面的代码块新增了独立的复制与折叠控制，优化了长代码展示体验。

5.  **工具配置修复** ([PR #2879](https://github.com/sipeed/picoclaw/pull/2879)):
    修复了 `load_image` 工具无法在 `config.json` 中正确配置的问题，完善了工具开关逻辑。关联 Issue [#2878](https://github.com/sipeed/picoclaw/issue/2878)。

## 4. 社区热点
今日讨论最热烈的议题集中在连接便利性与核心功能设计上：

- **LM Studio 连接需求** ([Issue #28](https://github.com/sipeed/picoclaw/issue/28)):
  该 Issue 评论数已达 19 条。用户强烈希望能简化 LM Studio 的连接流程。尽管项目已支持 OpenAI 兼容模式，但用户（尤其是 Android Termux 用户）仍觉得配置有难度，呼吁更原生的集成方案。

- **Exec 工具安全策略争议** ([Issue #1042](https://github.com/sipeed/picoclaw/issue/1042)):
  评论数 12 条。用户反馈 `exec` 工具的 `guardCommand` 方法过于严格，误杀了类似 `curl` 这种不涉及工作路径的合法命令（正则误判导致 `path outside working dir`）。这反映了用户对沙箱安全性与工具灵活性之间平衡的关注。

- **Seahorse 记忆系统** ([Issue #1919](https://github.com/sipeed/picoclaw/issue/1919)):
  虽已关闭，但引发了 11 条深入讨论。该提案旨在为 AI 引入类海马体的记忆系统（短期/长期记忆），显示社区对 Agent 长期记忆能力的高度重视。

## 5. Bug 与稳定性
今日报告了若干关键 Bug，部分已得到修复：

- **[严重] RISC-V 架构兼容性问题** ([Issue #2887](https://github.com/sipeed/picoclaw/issue/2887)):
  用户报告在 RISC-V 架构的 Debian 上，`.deb` 版本无法正常使用 OpenAI 模型。目前处于 Open 状态，亟待排查。

- **[中等] macOS 路径验证失败** ([PR #2890](https://github.com/sipeed/picoclaw/pull/2890)):
  macOS 下 `/var` 是指向 `/private/var` 的符号链接，导致路径验证失败。目前已有 PR 待合并。

- **[已修复] load_image 配置失效** ([Issue #2878](https://github.com/sipeed/picoclaw/issue/2878)):
  配置文件中无法禁用 `load_image` 工具。已在 PR #2879 中修复。

- **[已修复] Bash 路径解析错误** ([Issue #2749](https://github.com/sipeed/picoclaw/issue/2749)):
  Bash 工具将相对路径误判为绝对路径。目前已关闭。

## 6. 功能请求与路线图信号
- **SiliconFlow 原生支持** ([Issue #2884](https://github.com/sipeed/picoclaw/issue/2884)): 用户提出需求后，PR #2885 迅速跟进并合并，显示出项目对国产模型生态的积极响应。
- **Agent 工具策略过滤** ([Issue #2837](https://github.com/sipeed/picoclaw/issue/2837), [PR #2838](https://github.com/sipeed/picoclaw/pull/2838)):
  用户希望在 `AGENT.md` 前言中支持 `allow/deny` 策略，以便更精细地控制多 Agent 场景下的工具权限。PR 目前处于 Open 状态，若合并将大幅增强 Agent 的自定义能力。
- **LM Studio 集成** ([Issue #28](https://github.com/sipeed/picoclaw/issue/28)):
  持续的热度可能推动维护者在未来版本中考虑将其作为一级 Provider 支持。

## 7. 用户反馈摘要
- **配置痛点**: 用户普遍反映手动配置 OpenAI 兼容端点（如 SiliconFlow、LM Studio）较为繁琐，倾向于“开箱即用”的原生支持。
- **安全机制**: `exec` 工具的路径检查逻辑引发了用户吐槽，认为过于“粗暴”的拦截影响了正常功能（如天气查询），建议优化正则逻辑或提供白名单。
- **平台兼容**: RISC-V 用户遇到了阻碍，提示项目在非 x86/ARM 架构上的测试覆盖仍有盲区。

## 8. 待处理积压
- **Issue #28 (LM Studio 支持)**: 自 2 月创建以来持续活跃，建议维护者关注是否纳入近期 Roadmap。
- **Issue #1042 (Exec 路径误判)**: 影响核心工具可用性，Bug 报告已有一段时间，建议优先处理。
- **PR #2838 (Agent 工具策略)**: 功能增强型 PR，已开启数日，建议评审合并以丰富 Agent 编排能力。
- **PR #2890 (macOS 符号链接修复)**: 待合并，影响 macOS 用户测试体验。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-18)

## 1. 今日速览
NanoClaw 项目今日保持高活跃度开发态势，社区提交了 23 个 PR 更新与 10 个 Issue 讨论，显示出项目正处于快速迭代与功能扩展期。今日重点聚焦于 CLI 工具链的健壮性修复与多模态能力的拓展，共有 10 个 PR 成功合入主分支，解决了包括 Cron 任务静默、数据库迁移等关键问题。然而，Signal 通道的安全漏洞（密钥日志泄漏）与 CLI 群组管理的数据库约束问题引发了社区高度关注，急需维护者介入处理。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 10 个 PR 合并/关闭，显著提升了系统的稳定性与架构清晰度：

*   **核心调度修复**：PR [#2481](https://github.com/nanocoai/nanoclaw/pull/2481) 修复了 Cron 任务输出被自我抑制的严重 Bug，恢复了计划任务的正常响应，这对依赖定时任务的自动化场景至关重要。
*   **CLI 数据一致性**：PR [#2510](https://github.com/nanocoai/nanoclaw/pull/2510) 修复了 `destinations add` 命令在审批流中无法正确写入接收方本地数据库的问题，确保了多节点路由配置的即时生效。
*   **架构重构**：PR [#2486](https://github.com/nanocoai/nanoclaw/pull/2486) 与 [#2487](https://github.com/nanocoai/nanoclaw/pull/2487) 推进了 "Finance Plan 3" 的落地，完成了 Schema 重构与行为模板化，为后续高级金融功能奠定了基础。
*   **用户体验优化**：PR [#2469](https://github.com/nanocoai/nanoclaw/pull/2469) 改进了 WhatsApp 解密失败时的错误提示，引导用户正确处理 Session 损坏问题。

## 4. 社区热点
今日讨论最活跃的问题集中在系统稳定性与合规性：

*   **[Bug] CLI 群组删除失败**：Issue [#2525](https://github.com/nanocoai/nanoclaw/issues/2525) 指出 `ncl groups delete` 因外键约束导致崩溃。由于涉及基础 CRUD 操作，该问题引发了关于数据库事务处理和级联删除策略的讨论。
*   **[Feature] Edna 视频生成**：PR [#2532](https://github.com/nanocoai/nanoclaw/pull/2532) 提议集成 Google Veo 3.1 实现视频生成与剪辑。作为多模态能力的重要扩展，该 PR 吸引了开发者的广泛兴趣，标志着 NanoClaw 正从纯文本/代码 Agent 向多媒体内容创作 Agent 演进。
*   **[Security] Signal 密钥泄漏**：Issue [#2520](https://github.com/nanocoai/nanoclaw/issues/2520) 报告了日志文件中意外打印 Signal 协议私钥材料，涉及严重安全隐患，引发了对依赖库日志过滤机制的审视。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，部分已有修复方案：

*   **P0 - 严重安全漏洞**：Issue [#2520](https://github.com/nanocoai/nanoclaw/issues/2520) 显示 `logs/nanoclaw.log` 会记录 Signal Protocol 的 `privKey`/`rootKey` 等敏感缓冲区。
    *   *状态*：OPEN，尚无修复 PR。
*   **P1 - 功能阻断**：Issue [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) Signal 通道的图片与 PDF 附件无法在容器内访问。
    *   *修复*：PR [#2529](https://github.com/nanocoai/nanoclaw/pull/2529) 已提交，通过内联 Base64 解决路径访问问题。
*   **P1 - CLI 崩溃**：Issue [#2525](https://github.com/nanocoai/nanoclaw/issues/2525) `ncl groups delete` 触发外键约束错误。
    *   *修复*：PR [#2526](https://github.com/nanocoai/nanoclaw/pull/2526) 已提交，增加了级联删除逻辑。
*   **P2 - 消息重复**：Issue [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) MCP 工具与 XML 标签同时触发导致消息重复投递。
    *   *修复*：PR [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) 已提交，旨在抑制轮询循环中的重复输出。

## 6. 功能请求与路线图信号
从 PR 动态来看，项目正在向更丰富的工具集成方向发展：

*   **多模态生成**：PR [#2532](https://github.com/nanocoai/nanoclaw/pull/2532) (Veo 3.1 集成) 表明项目即将支持视频生成能力。
*   **协议支持扩展**：PR [#2208](https://github.com/nanocoai/nanoclaw/pull/2208) 正在推进对 HTTP 和 SSE 传输协议的 MCP Server 支持，这将显著扩大 NanoClaw 可连接的工具生态范围。
*   **工具集成**：PR [#2530](https://github.com/nanocoai/nanoclaw/pull/2530) 提交了 CalDAV 工具，增强了 Agent 对日历事件的管理能力。

## 7. 用户反馈摘要
通过 Issue 评论分析，用户反馈主要集中在以下痛点：

*   **容器化部署复杂度**：Issue [#2512](https://github.com/nanocoai/nanoclaw/issues/2512) 和 #2528 反映出用户在 Docker 网络配置、权限映射及文件挂载方面遇到困难，特别是 OneCLI 与 Postgres 的互联问题，提示安装文档或默认配置需优化。
*   **CLI 命令健壮性**：用户对 CLI 工具的预期与现实差距较大，如 UUID 格式不合规 (#2386) 和删除操作无事务回滚 (#2525)，反映出 CLI 层缺乏充分的集成测试覆盖。
*   **多渠道一致性**：用户在 Telegram、Signal、WhatsApp 等不同渠道间切换时，遇到 Markdown 解析 (#2522) 和附件处理 (#2528) 的差异，希望系统能提供更统一的跨渠道消息处理体验。

## 8. 待处理积压
以下长期未解决的 Issue/PR 需维护者关注：

*   **PR #2184 (Poll Loop 重试机制)**：已打开 16 天，旨在解决 Session 失效时的错误提示问题，该修复对用户体验至关重要，建议尽快 Review 合并。
*   **Issue #2404 (消息重复投递)**：已活跃 8 天，涉及 MCP 核心交互逻辑，虽然有修复 PR #2531 提交，但需尽快验证合并以平息用户抱怨。
*   **PR #2208 (MCP HTTP/SSE 支持)**：已打开 15 天，作为架构级改进，建议纳入近期 Roadmap 重点推进。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目日报 (2026-05-18)**

### 1. 今日速览
NullClaw 项目在过去 24 小时内代码提交层面处于静默状态，无 PR 合并或版本发布，但在社区互动层面表现活跃，新增 3 条高质量 Issue 讨论。用户反馈集中在多智能体协同 (`spawn`)、外部调度器认证及记忆管理 (`memory_list`) 等核心功能模块，显示出项目正被深入应用于复杂的生产环境。尽管无代码变更，社区提交的 Bug 报告包含了详细的复现步骤与根因分析，为后续迭代提供了明确方向，整体项目健康度处于“高价值反馈积累期”。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
*   **无 PR 进展**：今日无待合并或已合并的 Pull Request，项目代码库未见实质性变更。建议维护者关注社区提交的 Bug 报告，尽快启动修复流程以解除用户阻塞。

### 4. 社区热点
今日讨论最活跃的问题集中在工具调用与权限配置的稳定性上：

*   **[Issue #915](https://github.com/nullclaw/nullclaw/issues/915) `[bug] Problem with scheduler unauthorized`**
    *   **热度**：评论数 1 条。
    *   **分析**：用户在使用 Ubuntu + Ollama (RTX 3090) 的本地高性能环境时，遭遇调度器认证失败问题。这表明 NullClaw 在与外部大模型服务集成时，权限验证逻辑可能存在边缘 case 或配置文档不够清晰，影响了自动化任务的执行。

### 5. Bug 与稳定性
今日报告了 3 个明确的 Bug，且暂无修复 PR，需引起重视：

*   **[严重] [Issue #918](https://github.com/nullclaw/nullclaw/issues/918) `spawn tool results never delivered to Telegram`**
    *   **状态**：OPEN | **修复进度**：无
    *   **详情**：用户指出 `spawn` 工具生成的子智能体执行成功，但结果未回传至 Telegram，导致任务“静默丢失”。用户已定位疑似根因在 `channel_loop.zig` 的 `SubagentManager` 初始化逻辑。这是一个影响数据完整性的严重问题。
*   **[中等] [Issue #917](https://github.com/nullclaw/nullclaw/issues/917) `memory_list tool always passes session_id`**
    *   **状态**：OPEN | **修复进度**：无
    *   **详情**：`memory_list` 工具强制传递当前会话 ID，导致全局记忆（session_id=NULL）无法被检索。这限制了 AI 在跨会话上下文记忆能力的发挥。
*   **[中等] [Issue #915](https://github.com/nullclaw/nullclaw/issues/915) `[bug] Problem with scheduler unauthorized`**
    *   **状态**：OPEN | **修复进度**：无
    *   **详情**：外部 Ollama 连接正常，但调度器报错 unauthorized，阻塞了定时任务或自动化流程。

### 6. 功能请求与路线图信号
*   **跨会话记忆能力需求**：Issue #917 暴露了用户对“全局知识库”的强需求。当前按会话隔离的记忆机制可能不足以支撑长期运行的 Personal AI 助手场景，修复此 Bug 将变相增强产品的长期记忆能力。
*   **多智能体可靠性**：Issue #918 表明用户正在尝试使用 NullClaw 的高级多智能体功能 (`spawn`)。确保子智能体结果的可靠回传是该项目迈向复杂 Agentic Workflow 的关键一步。

### 7. 用户反馈摘要
*   **技术栈实况**：用户群体倾向于私有化部署，环境多为 Ubuntu + Ollama + 高端显卡（如 RTX 3090），模型涉及 Qwen 系列，显示出用户对数据隐私和推理成本的控制有较高要求。
*   **痛点**：
    *   **静默失败**：用户最担心的是工具调用“静默失败”（如 Issue #918），这极大地降低了 AI 助手的可信度。
    *   **调试难度**：多位用户在 Issue 中尝试自行阅读源码（如 `.zig` 文件）定位问题，反映出目前版本的错误日志或报错提示可能不够直观，迫使开发者需要深入源码才能理解故障原因。

### 8. 待处理积压
*   **新发 Issue 均待响应**：今日新增的 3 个 Issue (#915, #917, #918) 虽然内容详实，但目前均无官方维护者回复。鉴于 #918 涉及数据丢失且用户已提供根因推测，建议维护者优先处理。
*   **长期稳定性**：目前无 PR 活动，积压的 Bug 修复需求可能需要在下一个开发周期集中爆发，建议维护者发布一则简短的状态更新以安抚社区。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报 (2026-05-18)**

### 1. 今日速览
IronClaw 项目今日保持极高的开发活跃度，过去 24 小时内 PR 更新高达 48 条，Issue 更新 13 条。核心架构重构工作取得重大进展，随着核心架构 PR #3695 的关闭，"Reborn" 架构的组合根已成功整合并产出独立二进制文件。与此同时，社区测试反馈积极，但也暴露了 v0.28.2 版本在 WebUI 和工具安装流程中存在多处 UI 状态同步与回归 Bug，尤其是 Gmail 工具的认证体验亟待优化。项目正处于架构升级与功能完善的并行期，稳定性是当前关注的焦点。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
今日共有 14 个 PR 被合并或关闭，显著推进了架构重构与功能迭代：

*   **架构重组里程碑**：核心 PR **#3695** [CLOSED] 已合并。该 PR 将 `ironclaw_reborn_composition` 提升为 Reborn 的组合根，交付了可引导真实 Agent 的 `ironclaw-reborn` 二进制文件，并收窄了公共 API 边界，为后续的配置即代码（Epic #3036）奠定了坚实基础。
*   **WebUI 稳定性修复**：PR **#3512** 修复了聊天历史中失败工具调用状态翻转的渲染 Bug，PR **#3694** 增加了消息发送的幂等性重放保护，显著提升了前端交互的鲁棒性。
*   **功能增强**：PR **#3738** 为 Pilot 邀请码流程增加了 Trace 支持；PR **#3721** 引入了基于运行配置文件的 Personal Context 门控策略。
*   **依赖更新**：多个 Dependabot 发起的依赖更新 PR（如 #3361, #3360, #3247）正在处理中，涉及 Tokio、Wasmtime 等核心库的大版本升级，显示项目正在进行大规模的底层依赖维护。

### 4. 社区热点
今日社区活跃点主要集中在 v0.28.2 版本的回归问题反馈和架构设计的讨论上：

*   **Issues #3729 & #3734**：用户 @sunglow666 报告了 WebUI 状态显示的严重不一致问题。失败的 `tool_install` 调用在刷新后显示为成功，以及 Inference 提供商配置界面丢失 API Key 控件，引发了关于前端状态持久化与版本回归的讨论。
    *   链接: [nearai/ironclaw Issue #3729](https://github.com/nearai/ironclaw/issues/3729)
    *   链接: [nearai/ironclaw Issue #3734](https://github.com/nearai/ironclaw/issues/3734)
*   **Issues #3630 & #3629**：核心贡献者 @serrrfirat 发起了关于 Reborn WebUI Beta 的 M2 模块定义讨论，涉及门控、取消、恢复等 DTO 生命周期及外观契约测试，显示出团队正在严格定义下一代 WebUI 的交互边界。
    *   链接: [nearai/ironclaw Issue #3630](https://github.com/nearai/ironclaw/issues/3630)

### 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，且部分涉及最新版本的回归：

*   **[P0/回归] Provider 配置界面异常**：Issue **#3734** 报告在 Non-TEE v0.28.2 版本中，Settings → Inference 界面丢失了 "API Key" 和 "Fetch available models" 控件，严重阻碍用户配置模型。
    *   链接: [nearai/ironclaw Issue #3734](https://github.com/nearai/ironclaw/issues/3734)
*   **[P1/UI状态] 工具安装状态翻转**：Issue **#3729** 指出被拒绝的工具调用在页面刷新后被错误标记为成功。此问题已有对应修复 PR **#3512** 待合并。
    *   链接: [nearai/ironclaw Issue #3729](https://github.com/nearai/ironclaw/issues/3729)
*   **[P1/功能流] Gmail 认证与安装流程混乱**：Issues **#3731**, **#3732**, **#3728** 集中反映了 Gmail 工具的问题。包括：已安装仍重复提示、认证界面在不同线程间显示不一致、拒绝安装后仍诱导用户批准等。这表明工具的生命周期管理存在逻辑漏洞。
    *   链接: [nearai/ironclaw Issue #3731](https://github.com/nearai/ironclaw/issues/3731)
*   **[P2/测试] Nightly E2E 失败**：Issue **#3447** 显示 Nightly E2E 构建失败，需关注 CI/CD 健康度。
    *   链接: [nearai/ironclaw Issue #3447](https://github.com/nearai/ironclaw/issues/3447)

### 6. 功能请求与路线图信号
根据 Issues 和 PRs 动向，项目路线图呈现以下趋势：

*   **IronHub 集成**：PR **#3737** 正在开发从 IronHub 安装工具和技能的功能，支持 CLI 和运行时动态安装。这预示着 IronClaw 将拥有更强大的插件生态能力。
    *   链接: [nearai/ironclaw PR #3737](https://github.com/nearai/ironclaw/pull/3737)
*   **WASM 凭证签名**：PR **#3256** 引入了 HMAC、EIP-712、NEP-413 等多种凭证签名能力，暗示项目正在加强对多链、多协议安全交互的支持。
    *   链接: [nearai/ironclaw PR #3256](https://github.com/nearai/ironclaw/pull/3256)
*   **Reborn 架构演进**：Issues **#3628** 和 **#3629** 表明团队正在构建 WebUI 的错误分类体系和外观契约测试，目标是实现 M2 模块（Inbound Workflow）的独立开发与高可测试性。

### 7. 用户反馈摘要
*   **痛点**：用户对工具安装后的状态一致性感到困惑，特别是"拒绝后变成功"或"已安装仍重复提示"的问题，严重影响了代理工具的可信度。
*   **配置障碍**：v0.28.2 版本的 Inference 配置界面缺失关键控件，导致非 TEE 用户无法配置模型，这是一个阻断性体验问题。
*   **认证体验**：Gmail 工具的认证流程在不同对话线程中表现不一，且对无效 Token 给出了错误的成功提示，用户期待更直观、一致的 OAuth 引导。

### 8. 待处理积压
*   **CI/CD 健康度**：Issue **#3447** (Nightly E2E 失败) 自 5 月 10 日创建以来仍未解决，已持续数天，可能影响代码提交质量把控。
    *   链接: [nearai/ironclaw Issue #3447](https://github.com/nearai/ironclaw/issues/3447)
*   **大型重构 PR 审查**：PR **#3256** (WASM 凭证签名) 和 **#3737** (IronHub 集成) 均为高风险、大规模的功能性 PR，目前仍处于 Open 状态，建议维护者优先排期审查，避免积压过久导致合并冲突。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-18)

## 1. 今日速览
LobsterAI 项目今日处于低活跃度维护状态，未发布新版本且无新增 Issues。过去 24 小时的动态主要集中在 Pull Requests 的状态更新，共有 9 个 PR 发生变动，其中 2 个 PR 已关闭，7 个处于待合并状态。值得注意的是，所有活跃的 PR 均带有 `[stale]` 标签，显示出项目正在经历代码仓库的自动化清理周期或维护者审核滞后。整体来看，项目核心功能开发趋于平稳，当前重点在于解决存量代码贡献和进行局部的性能与体验优化。

## 2. 版本发布
无。

## 3. 项目进展
今日无代码合并记录。项目推进主要体现在对存量 PR 的清理和对潜在功能的持续跟进：

*   **PR 清理**：今日关闭了 2 个 PR。其中 **PR #812** (SQLite 性能优化) 和 **PR #871** (Skill 统计展示) 均被关闭，这可能意味着相关优化方案被放弃、功能需求变更或通过其他方式解决。
*   **功能迭代准备**：仍有 7 个 PR 处于 Open 状态等待审查，涵盖 API 自动检测、可观测性集成、UI 细节修复及内存泄漏修复等关键改进，这些贡献正在等待维护者的最终合并。

## 4. 社区热点
由于今日无新增 Issues 且 PR 评论数为 0，社区活跃度较低。热点主要集中在功能增强型的 Pull Requests 上，反映了贡献者对易用性和可观测性的关注：

*   **[PR #762](netease-youdao/LobsterAI PR #762) [feat(settings): 自定义模型 API 格式新增"自动检测"选项]**：旨在降低用户配置门槛，解决用户在 "Anthropic 兼容" 与 "OpenAI 兼容" 协议间手动选择的困惑。该功能若合并，将显著提升自定义模型接入的体验。
*   **[PR #768](netease-youdao/LobsterAI PR #768) [feat(observability): add Opik observability integration]**：引入 Opik 可观测性插件，为应用增加了链路追踪和调试能力，适合进阶用户和开发者监控 AI 行为。

## 5. Bug 与稳定性
今日虽无新增 Bug 报告，但在待合并的 PR 中包含多项重要的稳定性修复，建议维护者优先关注：

*   **[潜在严重] 内存泄漏修复**：[PR #787](netease-youdao/LobsterAI PR #787) 为主题服务添加了 `destroy` 方法，用于清理媒体查询监听器，防止应用长时间运行导致的内存泄漏。
*   **[中等] 任务调度重复**：[PR #788](netease-youdao/LobsterAI PR #788) 修复了计划任务在迁移过程中因网关错误导致的重复创建问题，确保应用重启后任务调度的幂等性。
*   **[轻微] UI 显示异常**：[PR #783](netease-youdao/LobsterAI PR #783) 修复了底部输入框截断问题，优化了输入体验。
*   **[性能] 渲染优化**：[PR #770](netease-youdao/LobsterAI PR #770) 通过 `React.memo` 优化了 Markdown 内容渲染，解决了流式传输 Token 时引发的父组件状态更新导致的不必要重渲染问题。

## 6. 功能请求与路线图信号
结合现有活跃 PR 分析，下一阶段版本可能包含以下功能增强：

*   **易用性提升**：API 格式"自动检测"功能 ([PR #762](netease-youdao/LobsterAI PR #762)) 极有可能被纳入，以解决用户配置痛点。
*   **多模态交互**：[PR #771](netease-youdao/LobsterAI PR #771) 提出的图片附件缩略图预览功能，预示着项目正在加强多模态对话的 UI 支持。
*   **开发者工具**：[PR #768](netease-youdao/LobsterAI PR #768) 表明项目正在构建可扩展的可观测性体系，未来可能支持 LangFuse/LangSmith 等更多平台。

## 7. 用户反馈摘要
由于今日无活跃 Issue 讨论，用户反馈主要隐性存在于 PR 描述的背景中：

*   **配置门槛高**：反馈指出在配置 DeepSeek、智谱等自定义模型时，普通用户难以区分 API 格式（Anthropic/OpenAI 兼容），导致配置出错，呼唤更智能的自动化检测。
*   **视觉体验细节**：用户对输入框布局和附件展示有更精细化的需求，希望摆脱纯文本的展示方式，转向卡片式、带预览的交互设计。

## 8. 待处理积压
项目当前存在明显的 PR 审核积压情况，提醒维护者关注：

*   **Stale PRs 积压**：所有今日活跃的 PR（#762, #768, #770, #771, #783, #787, #788）均于 3 月下旬创建，至今已近 2 个月，且均被标记为 `[stale]`。这些 PR 涵盖了核心功能增强和关键 Bug 修复，长期未合并可能影响贡献者积极性及项目健康度。
*   **重要修复待合并**：特别是涉及内存泄漏修复的 **PR #787** 和任务调度修复的 **PR #788**，建议尽快 Review 并合并，以保证软件稳定性。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-18)

## 1. 今日速览
Moltis 项目今日保持稳健的开发迭代节奏，发布了版本 `20260517.03`，并合并了 3 个关键 PR，显著增强了远程访问能力和外部智能体会话的持久性。社区方面，新增 2 个 Bug 报告，分别涉及前沿模型推理标签解析和语音配置丢失问题，目前暂未得到官方回应。此外，核心贡献者提交了 2 个待合并 PR，重点优化了内存存储机制和进程超时处理的健壮性。整体来看，项目正处于功能扩展与稳定性修补并行的活跃期。

## 2. 版本发布
- **版本号**: [20260517.03](https://github.com/moltis-org/moltis/releases/tag/20260517.03)
- **更新推断**: 根据今日合并的 PR 内容，此版本主要包含了 NetBird 与 Cloudflare Tunnel 的远程访问支持，以及外部智能体会话持久化功能。建议用户更新以获得更丰富的网络连接选项和更稳定的智能体交互体验。

## 3. 项目进展
今日共有 3 个 PR 成功合并，重点推进了网络连接与智能体会话管理功能：
- **[PR #1002](https://github.com/moltis-org/moltis/pull/1002) [MERGED] feat(remote-access): add NetBird and Cloudflare Tunnel support**
  - **内容**: 新增 NetBird 私有网格支持和 Cloudflare Tunnel 支持，完善了 REST 路由、CLI 命令及运行时控制器。
  - **意义**: 极大地扩展了用户部署 Moltis 的网络灵活性，不再局限于 Tailscale 和 ngrok。
- **[PR #566](https://github.com/moltis-org/moltis/pull/566) [MERGED] feat(external-agents): add persistent agent sessions**
  - **内容**: 为 ACP 和 Codex CLI 添加了持久化会话支持，并集成了 Claude Code 恢复功能。
  - **意义**: 解决了跨轮次对话中断的问题，显著提升了外部智能体的交互稳定性。
- **[PR #1008](https://github.com/moltis-org/moltis/pull/1008) [MERGED] Add NetBird and Cloudflare Tunnel to onboarding**
  - **内容**: 在新用户引导流程中增加了 NetBird 和 Cloudflare Tunnel 的配置选项卡。
  - **意义**: 降低了新用户配置远程访问的门槛，优化了首次使用体验。

## 4. 社区热点
今日社区活跃度主要体现在新功能的提交与 Bug 的发现，暂无高讨论量的 Issue。
- **[PR #1010](https://github.com/moltis-org/moltis/pull/1010) [OPEN]**: 提议允许内存存储支持嵌套子文件夹，反映了高级用户对知识库结构化管理的需求。
- **[Issue #1007](https://github.com/moltis-org/moltis/issues/1007) [OPEN]**: 关于 Gemma-4 模型推理标签解析的 Bug 报告，表明用户正在积极尝试集成最新的开源模型。

## 5. Bug 与稳定性
今日报告了 2 个功能性 Bug，均涉及核心功能的解析与配置，需关注后续修复进度。
- **[高] 配置丢失风险**: [Issue #1006](https://github.com/moltis-org/moltis/issues/1006) 报告 `VoiceCoquiTtsConfig` 在自动压缩流程中默认值被剥离，导致语音配置"消失"。该问题可能直接影响语音功能的可用性。
- **[中] 模型解析错误**: [Issue #1007](https://github.com/moltis-org/moltis/issues/1007) 指出 `gemma-4-31b-it` 模型的推理标签 `<thought>` 被当作纯文本处理，而非推理块，影响思维链功能的展示。
- **[已修复] 进程泄漏隐患**: [PR #1009](https://github.com/moltis-org/moltis/pull/1009) 修复了 `run_with_timeout` 超时后子进程未被杀死的问题，提升了系统稳定性。

## 6. 功能请求与路线图信号
- **内存管理增强**: [PR #1010](https://github.com/moltis-org/moltis/pull/1010) 提出的 `memory_save` / `memory_delete` 支持嵌套目录结构，预示着 Moltis 将支持更复杂的知识库组织形式，可能成为下个版本的重点。
- **进程管理健壮性**: [PR #1009](https://github.com/moltis-org/moltis/pull/1009) 针对 QMD 后端进程管理的精细化控制，表明项目正在加强对底层资源调度的稳定性建设。

## 7. 用户反馈摘要
- **模型兼容性痛点**: 用户 @maop 反馈在使用最新 Gemma-4 模型时遇到解析问题，显示出社区对 Moltis 快速适配前沿模型能力的期待。
- **自动化运维问题**: Issue #1006 揭示了自动压缩功能与特定配置对象的冲突，反映出部分用户正在使用 Moltis 进行长时间、高负载的会话，并依赖自动压缩来管理上下文。

## 8. 待处理积压
当前无长期未响应的陈旧 Issue，但今日新增的两个 Bug 报告尚未有维护者回复：
- [Issue #1006](https://github.com/moltis-org/moltis/issues/1006): 涉及配置数据丢失，建议优先排查。
- [Issue #1007](https://github.com/moltis-org/moltis/issues/1007): 涉及模型推理能力，建议确认解析逻辑的兼容性范围。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-05-18)

## 1. 今日速览
CoPaw 项目今日保持高度活跃，社区互动频繁，过去24小时内 Issues 活跃度高达 25 条，PR 更新 17 条。尽管开发端在 E2E 测试架构与桌面端支持上进展显著，但用户侧出现了集中的功能性阻断反馈。特别是聊天核心功能的无响应问题引发了大量讨论，暴露了近期版本在稳定性上的隐患。今日无新版本发布，累积的待合并 PR 数量（16个）显示出项目正处于功能迭代与代码审查的高压期，亟需通过发布修复版本来缓解用户痛点。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日仅有 1 个 PR 关闭，重点推进了测试覆盖与基础设施优化：
*   **测试体系重构**：PR [#4466](https://github.com/agentscope-ai/QwenPaw/pull/4466) 虽已关闭，但其关于安全模块 Phase 0-1 单元测试的工作已延伸至更全面的 PR [#4467](https://github.com/agentscope-ai/QwenPaw/pull/4467)，后者新增了 967 个测试用例，旨在提升核心模块的稳定性。
*   **E2E 测试架构迁移**：PR [#4464](https://github.com/agentscope-ai/QwenPaw/pull/4464) 提议将 `python_e2e` 迁移至仓库主目录，并构建 Mock API 基础设施，这将显著提升前端 UI 的自动化测试能力。
*   **桌面端独立进程支持**：PR [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) 持续推进 Tauri 2.x 桌面应用支持，旨在提供脱离浏览器的独立桌面体验。
*   **核心功能优化**：PR [#4465](https://github.com/agentscope-ai/QwenPaw/pull/4465) 优化了上下文 Token 的估算逻辑，尝试解决 Token 计数不准确的问题。

## 4. 社区热点
今日社区讨论最热烈的话题集中在核心功能的不可用上：
*   **聊天功能无响应问题**：Issue [#4469](https://github.com/agentscope-ai/QwenPaw/issues/4469) 和 [#4453](https://github.com/agentscope-ai/QwenPaw/issues/4453) 成为今日焦点，多位用户反馈发送消息后界面一直处于“三个点跳动”状态，后端报错 `RuntimeError: Event loop stopped`。评论数分别达到 11 条和 8 条，表明该问题具有普遍性。
*   **开源贡献招募**：置顶 Issue [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) 继续号召开发者认领任务，评论数已积累至 61 条，显示了社区对项目发展的持续关注。
*   **频率限制困扰**：Issue [#4468](https://github.com/agentscope-ai/QwenPaw/issues/4468) 反映在使用过程中频繁遇到 LLM 执行限制（300秒），影响了体验。

## 5. Bug 与稳定性
今日报告了多个严重程度较高的 Bug，需优先处理：
*   **[Critical] 插件远程代码执行漏洞**：Issue [#4470](https://github.com/agentscope-ai/QwenPaw/issues/4470) 报告插件界面存在未授权 RCE 漏洞，严重威胁用户安全，需立即修复。
*   **[High] 聊天核心功能瘫痪**：如前所述，Issue [#4469](https://github.com/agentscope-ai/QwenPaw/issues/4469) 描述的聊天无响应且无法恢复的问题，严重影响项目可用性。目前尚无对应 Fix PR。
*   **[High] MCP Client 假死**：Issue [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) 指出 MCP client 内部 TaskGroup 异常会导致 Agent 假死，且不报错，排查难度大。
*   **[Medium] Chromadb 崩溃**：Issue [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) 指出 Chromadb 的 Rust 绑定会导致段错误（SIGSEGV）并杀死进程，建议增加异常捕获。
*   **[Medium] 上下文压缩失败**：Issue [#4448](https://github.com/agentscope-ai/QwenPaw/issues/4448) 报告长对话中频繁出现上下文压缩格式错误。

## 6. 功能请求与路线图信号
*   **多路径 Skills 支持**：Issue [#4455](https://github.com/agentscope-ai/QwenPaw/issues/4455) 请求支持通过配置文件加载外部 Skills，已有相关功能开发迹象，值得在下一版本关注。
*   **CLI 现代化**：Issue [#4472](https://github.com/agentscope-ai/QwenPaw/issues/4472) 建议使用 `typer` 替代 `click` 以支持彩色输出和类型提示，符合 Python 社区趋势。
*   **定时任务增强**：PR [#4434](https://github.com/agentscope-ai/QwenPaw/pull/4434) 正在审查中，拟增加定时任务执行前自动清除上下文的选项，满足自动化场景需求。
*   **ChatGPT-5.5 支持**：Issue [#4474](https://github.com/agentscope-ai/QwenPaw/issues/4474) 询问对最新模型的支持，反映了用户对前沿模型快速适配的期待。

## 7. 用户反馈摘要
从评论中提炼的真实反馈显示：
*   **核心体验受挫**：多位用户表示在 Docker 环境下重启、重装均无法解决聊天卡死问题，情绪较为焦躁（如 Issue #4475 已被标记为 invalid 但反映了用户情绪）。
*   **部署障碍**：Ubuntu 脚本安装报错（Issue [#2684](https://github.com/agentscope-ai/QwenPaw/issues/2684)）长期未解，劝退了部分新用户。
*   **功能期待**：用户对桌面端独立应用（PR #3813）和更友好的 CLI 体验表现出浓厚兴趣。

## 8. 待处理积压
*   **长期未解决的安装问题**：Issue [#2684](https://github.com/agentscope-ai/QwenPaw/issues/2684)（Ubuntu 安装错误）自 3 月底至今未解决，影响了 Linux 用户的部署体验。
*   **安全漏洞修复滞后**：今日披露的 RCE 漏洞（Issue #4470）尚未见到官方确认修复进度的 PR，建议维护者优先响应。
*   **PR 审查积压**：共有 16 个 PR 处于 Open 状态，其中包括 Tauri 桌面端支持（PR #3813）和 E2E 测试重构（PR #4464）等关键功能，建议团队加快审查合并速度以通过新版本验证功能。

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