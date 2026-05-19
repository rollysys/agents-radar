# OpenClaw 生态日报 2026-05-19

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-19 03:51 UTC

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

# OpenClaw 项目动态日报 (2026-05-19)

## 1. 今日速览
OpenClaw 项目今日保持极高活跃度，单日 Issue 与 PR 更新均达到 500 条，显示社区交互极其频繁。项目在 24 小时内连续发布了 4 个版本（含 Beta），重点推进了依赖更新与架构重构，明确要求修复需遵循 "清洁边界重构" 原则，并正式将最低支持 Node.js 版本提升至 22.19。尽管发布节奏紧凑，但大量新增 Issue（433 条）与待合并 PR（423 条）表明项目正处于功能快速迭代与稳定性攻坚的并行期，核心痛点集中在会话状态管理、跨平台兼容性及消息投递可靠性上。

## 2. 版本发布
今日发布 4 个版本，核心变更如下：

*   **v2026.5.19-beta.1** & **v2026.5.18** & **v2026.5.18-beta.1**：
    *   **架构规范**：明确 Agent 修复默认策略为 "清洁边界重构"（clean bounded refactors），并要求显式声明插件 SDK/API 的废弃路径，显示出项目正在加强代码治理。
    *   **依赖升级**：`@openclaw/proxyline` 升级至 0.3.3；Pi 包升级至 0.75.1。
    *   **环境要求**：最低支持的 Node.js 版本提升至 22 line（v2026.5.16-beta.7 明确为 22.19），开发者需注意环境兼容性。
*   **v2026.5.16-beta.7**：
    *   **Docker/Podman**：新增 `OPENCLAW_IMAGE_APT_PACKAGES` 构建参数，支持运行时注入额外 apt 包，提升了容器化部署的灵活性。

## 3. 项目进展
今日合并/关闭了 77 个 PR，以下是最具代表性的进展：

*   **[Merged] PR #83814**: 修复 Codex 扩展在 Telegram 直聊中可见回复逻辑错误，将默认源切换为 `automatic`，解决了消息未能正常展示的问题。
*   **[Closed] PR #55210**: 修复 `/v1/chat/completions` 端点的 SSE 流式响应规范问题，纠正了 `finish_reason` 的位置与发送频率，增强了 API 兼容性。
*   **[Open] PR #55542**: 提议将 `sharp` 替换为 `@napi-rs/image`，旨在简化依赖树，减少构建复杂度，目前待验证兼容性。
*   **[Open] PR #83700**: 修复子智能体（subagent）完成后状态陈旧导致通知丢失的问题，提升了多智能体协作的可靠性。
*   **[Open] PR #55519**: 修复飞书群组会话编排回退逻辑，增强了跨智能体路由的鲁棒性。

## 4. 社区热点
今日社区讨论焦点集中在生态扩展与架构治理：

*   **[Issue #50090] Community Skill Development & ClawHub (评论 14)**
    *   **诉求**：社区热切期盼 ClawHub 成为 Agent 能力的分发中心，希望实现 "编写 SKILL.md 即可发布" 的愿景。目前 "Driftnet" 尚未完全兑现承诺，用户渴望一个活跃的技能生态。
*   **[Issue #48788] Centralized filename encoding utility (评论 17)**
    *   **诉求**：针对飞书等渠道中文文件名乱码问题的长期讨论，社区呼吁建立统一的文件名编码工具，以彻底解决多编码（Shift-JIS, GB18030 等）兼容问题，而非修补单个适配器。
*   **[Issue #51429] Hardcoded working path (评论 11)**
    *   **事件**：有开发者将个人工作路径硬编码进代码并被合并发布，引发社区对代码审查流程的讨论。该事件暴露了 CI/CD 与 Review 流程中的疏漏。

## 5. Bug 与稳定性
今日报告多起影响核心功能的 Bug，建议优先关注：

*   **[P0 Critical] Issue #50630 - Tailscale 认证绕过风险**
    *   **详情**：当使用 Tailscale serve 且 `auth.mode=none` 时，Gateway 会暴露给整个 Tailnet 而无需认证，CVSS 评分 9.3。属于安全配置严重漏洞。
*   **[P1 High] Issue #55334 - sessions.json 无限增长导致 OOM**
    *   **详情**：`skillsSnapshot` 在会话中重复存储且缺乏清理机制，导致 Gateway 内存以 50-100MB/min 速度增长直至崩溃。
*   **[P1 High] Issue #83018 - Docker 沙箱嵌套冲突**
    *   **详情**：在 OpenClaw Docker 沙箱内运行 Codex 时，沙箱嵌套导致冲突，需提供禁用内部沙箱的选项。
*   **[P2 Regression] Issue #52875 - Session_send 找不到会话**
    *   **详情**：升级后主 Agent 无法联系子 Agent，`session_list` 显示大量 Cron 会话但目标会话丢失，严重影响多 Agent 交互。
*   **[P1 High] Issue #83615 - 升级导致回复截断**
    *   **详情**：升级到 `2026.5.16-beta.7` 后，kimi-k2.6 模型出现 Schema 不兼容，导致回复在句子中间被截断。

## 6. 功能请求与路线图信号
*   **Skill 生态完善 ([Issue #50090])**：用户强烈要求建立健壮的 Skill 分发机制，这与项目近期加强 Plugin SDK/API 废弃路径治理的动向一致，预示着 OpenClaw 正在为下一阶段的生态爆发做准备。
*   **WebSocket 客户端 SDK ([Issue #49178])**：提议提取通用的 WebSocket 客户端 SDK，解决 CLI 与 UI 代码重复问题，有望提升客户端一致性与开发效率。
*   **写入工具追加模式 ([Issue #40001])**：长期请求为 `write` 工具增加 `append` 模式，以支持多会话并发写入同一文件（如日志、记忆），目前会覆盖导致数据丢失。

## 7. 用户反馈摘要
*   **痛点**：
    *   **消息丢失与投递**：多渠道（Discord, Telegram, WhatsApp）均报告消息发送失败或丢失，特别是长回复分块发送时的静默丢弃（[Issue #82858]）。
    *   **升级兼容性**：用户普遍反映升级后出现各种 Regression（回退问题），如 UI 空白、路径硬编码、模型不兼容，对版本稳定性感到担忧。
    *   **文档与实现不同步**：部分功能（如 IsolatedSessions）文档已更新但未发布，导致用户困惑。
*   **好评**：
    *   用户对 RISC-V 等非主流架构的支持表示期待，尽管目前存在兼容性问题（[Issue #54253]）。
    *   对 "清洁边界重构" 的架构指导思想表示认可，认为有助于长期维护。

## 8. 待处理积压
*   **[Issue #51429] 硬编码路径问题**：已被合并发布，急需修复 PR 以消除影响，目前状态仍为 Open，需立即关注。
*   **[Issue #40001] Write Tool 缺少追加模式**：长期未解决的数据丢失风险点，影响 Cron 任务与多会话协作。
*   **[Issue #50093] WhatsApp 断线重连消息丢失**：影响用户体验的关键问题，长期未得到解决。

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告 (2026-05-19)

## 1. 生态全景
2026 年 5 月的 AI 智能体开源生态正处于"架构重构期"与"稳定性大考期"并行的关键阶段。头部项目（如 OpenClaw、IronClaw）正通过大规模重构（"Reborn"、"清洁边界"）来应对复杂度上升，试图建立更健壮的治理与安全模型；而快速跟进的项目（如 Hermes、PicoClaw）则暴露了在急速迭代中因架构债务引发的稳定性危机（OOM、核心逻辑缺失）。多智能体协作、精细化记忆管理以及企业级安全合规已成为全行业共同的技术攻坚方向。

## 2. 各项目活跃度对比

| 项目名称 | Issues 数 (新增/更新) | PRs 数 (更新/合并) | Release 情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 (极高) | ~500 (极高) | 4 个版本 (含 Beta) | 🟡 **警示**：活跃度极高，但出现 P0 级安全漏洞 (Tailscale) 及 OOM 风险，积压严重。 |
| **LobsterAI** | 0 (无新增) | 46 (高) | v2026.5.18 | 🟢 **健康**：高效收敛，专注 UI/UX 打磨与多端修复，无新增 Bug，处于稳定发布期。 |
| **CoPaw** | 31 (高) | 28 (高) | v1.1.8-beta.1 | 🟠 **中等**：快速迭代解决阻塞问题，但存在未修复的 RCE 安全漏洞，需紧急关注。 |
| **Hermes Agent** | 未详述 (多) | 40 (合并) | 无 | 🔴 **高危**：合并量虽大，但出现 P1 级代码缺失导致的崩溃，稳定性严重下滑。 |
| **NanoBot** | 未详述 | 23 (活跃) | 无 | 🟠 **中等**：核心功能进展顺利，但微信渠道登录失败阻塞了国内用户，急需修复。 |
| **IronClaw** | 30 (活跃) | 49 (极高) | 无 (准备中) | 🟡 **重构期**：Reborn 架构迁移投入巨大，但版本发布滞后，下游用户存在安全焦虑。 |
| **NanoClaw** | 未详述 | 35 (高) | v2.0.64 | 🟡 **运维风险**：功能迭代快，但官网 SSL 失效等基础设施问题严重影响信任度。 |
| **Moltis** | 1 新增 / 7 关闭 | 6 (高效) | 20260518.01 | 🟢 **优秀**：维护效率极高，Issue 清零，修复响应迅速，处于高质量维护状态。 |
| **PicoClaw** | 未详述 | 18 (积压) | Nightly | 🟠 **积压**：核心架构重构中，关键 PR 审查缓慢，存在严重的上下文溢出 Bug。 |
| **NullClaw** | 低 | 4 (合并) | 无 | 🟢 **稳定**：专注跨平台兼容性与连接稳定性，稳步推进企业级安全特性。 |
| **Zeroclaw** | - | - | - | ⚪ 数据缺失 |

## 3. OpenClaw 在生态中的定位

作为生态的核心参照系，**OpenClaw** 展现出了"平台化治理"的领先姿态，但也面临巨大的工程复杂度挑战。

*   **优势与定位**：
    *   **生态枢纽**：明确推进 "ClawHub" 技能分发中心，试图定义 Skill 标准，这是其区别于单一功能 Agent 的核心护城河。
    *   **架构前瞻**：率先提出 "清洁边界重构" 与 Node.js 22 强制升级，显示出对长期维护性的重视，比 Hermes 等项目更早进入代码治理深水区。
*   **对比差异**：
    *   **对比 Hermes**：OpenClaw 更侧重架构规范，而 Hermes 目前深陷稳定性泥潭（如核心代码缺失），OpenClaw 虽有 OOM 问题，但治理结构更清晰。
    *   **对比 IronClaw**：IronClaw 正在进行底层的 Rust 重构以追求极致性能与安全，OpenClaw 则依托 Node.js 生态拥有更广泛的开 发者基础，但在高并发稳定性上不如 Rust 架构稳健。
    *   **对比 LobsterAI**：OpenClaw 重后端编排与协议，LobsterAI 重前端体验，两者互补。

## 4. 共同关注的技术方向

全生态在今日呈现出三个高度一致的技术诉求：

1.  **上下文与记忆管理的精细化**
    *   **涉及项目**：OpenClaw, PicoClaw, NullClaw, NanoBot, CoPaw。
    *   **具体诉求**：从简单的"保留历史"转向"精细控制"。PicoClaw 遭遇预算溢出导致崩溃；OpenClaw 遭遇 `sessions.json` 无限增长 OOM；NullClaw 和 Moltis 用户呼吁按需禁用 RAG 或控制工具选择。这表明全行业正在为 Agent "减肥"，从暴力上下文转向成本与性能的平衡。

2.  **多智能体协作架构**
    *   **涉及项目**：OpenClaw, PicoClaw, LobsterAI, NanoClaw。
    *   **具体诉求**：OpenClaw 修复子智能体通知丢失；PicoClaw 将多智能体协作作为 Phase 2 目标；LobsterAI 修复 Agent 切换失效。单一 Agent 已无法满足复杂任务，稳定的多 Agent 编排是下一阶段竞争焦点。

3.  **安全与权限治理**
    *   **涉及项目**：OpenClaw, CoPaw, NanoClaw, IronClaw。
    *   **具体诉求**：OpenClaw 爆出 Tailscale 认证绕过（CVSS 9.3）；CoPaw 存在插件 RCE 漏洞；NanoClaw 修复 Webhook 绑定风险。随着 Agent 权限扩大，沙箱逃逸、认证失效与数据泄露风险成为企业级部署的最大阻碍。

## 5. 差异化定位分析

| 维度 | 平台型 | 垂直/应用型 | 架构创新型 |
| :--- | :--- | :--- | :--- |
| **代表项目** | **OpenClaw, NanoClaw** | **LobsterAI, Hermes, CoPaw** | **IronClaw, PicoClaw** |
| **功能侧重** | 协议适配、Skill 分发、多渠道网关 | 用户体验、特定场景（如 Artifacts、IM）、任务执行 | 底层语言重构、边缘计算支持、安全模型 |
| **目标用户** | 企业开发者、集成商 | 终端用户、特定行业用户 | 高阶开发者、安全敏感型用户 |
| **技术特征** | Node.js/Python 为主，生态丰富，重 Connector | 重 UI/UX，迭代快，注重多模态交互 | Rust/Go，重性能、安全隔离与资源控制 |
| **痛点** | 系统复杂度高，稳定性治理难 | 扩展性受限，底层能力依赖上游 | 生态建设慢，开发者门槛高 |

## 6. 社区热度与成熟度

*   **第一梯队（生态核心/高活跃）**：**OpenClaw**。虽然面临严峻 Bug，但其 Issue 与 PR 量级远超其他项目，是生态交互的绝对中心，处于"快速发展与痛苦重构并存"的青春期。
*   **第二梯队（高质量维护/稳定期）**：**LobsterAI, Moltis**。这两个项目展现出极高的维护效率，Bug 修复快，新功能实用，社区反馈正向，适合生产环境落地。
*   **第三梯队（攻坚期/风险期）**：**Hermes Agent, PicoClaw**。Hermes 因关键代码缺失导致严重危机，信任度下降；PicoClaw 架构重构积压严重，处于破茧前的阵痛期。
*   **第四梯队（潜力/细分）**：**NullClaw, NanoBot**。在特定领域（如安全模型、多模态）稳步推进，虽热度不及头部，但拥趸忠诚度高。

## 7. 值得关注的趋势信号

1.  **"安全"正在取代"功能"成为首要议题**：今日 OpenClaw (CVSS 9.3)、CoPaw (RCE)、NanoClaw (Webhook 暴露) 的安全警报表明，Agent 已从"玩具"进入"生产力工具"阶段，企业级安全合规将成为 2026 下半年的核心筛选标准。
2.  **上下文工程成为核心壁垒**：多个项目同时爆出内存泄漏或上下文管理问题，说明"无限上下文"模型并不经济。未来的 Agent 差异化将在于谁能更聪明地压缩、遗忘和检索记忆。
3.  **WebSocket 长连接稳定性普遍堪忧**：Hermes 的 DB 连接泄漏、OpenClaw 的消息丢失、NullClaw 的 Discord 重连修复，揭示了长连接场景下的维护难题。建议开发者在选型时优先考察项目的连接重试与心跳保活机制。
4.  **多渠道适配成本高昂**：微信、飞书、Telegram 等渠道的登录、编码、协议变更（如 NanoBot 微信登录失败）持续消耗开发资源。这预示着未来可能出现专门负责"最后一公里"连接的中间件服务商，让 Agent 开发者从繁琐的协议适配中解脱出来。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-19)

## 1. 今日速览
NanoBot 项目今日保持高度活跃的开发节奏，过去24小时内 PR 更新量达 23 条，其中 11 条已合并，显示出维护者对社区贡献的高效处理能力。今日重点集中在**多模态能力扩展**与**架构重构**，成功合并了 Gemini 和 MiniMax 的图像生成支持，并优化了 WebUI 的远程部署体验。虽然无新版本发布，但多个核心功能的 PR 已就绪，项目正稳步向更强的 Agent 自主性与易用性迈进。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 11 个 PR 合并至主分支，主要推进了以下功能模块：

*   **多模态生态扩展**：
    *   [PR #3886](https://github.com/HKUDS/nanobot/pull/3886) 新增 Gemini 图像生成支持，覆盖 Imagen 4 和 Gemini Flash 模型。
    *   [PR #3879](https://github.com/HKUDS/nanobot/pull/3879) 集成 MiniMax 图像生成 Provider，支持参考图生成。
    *   [PR #3900](https://github.com/HKUDS/nanobot/pull/3900) 添加 Ant Ling 作为 OpenAI 兼容的 LLM Provider。
*   **Agent 核心架构优化**：
    *   [PR #3892](https://github.com/HKUDS/nanobot/pull/3892) 对核心 `AgentRunner.run()` 方法进行了重构，拆分为 9 个专注方法，引入 `RunContext` 数据类，显著提升了代码可读性与维护性。
    *   [PR #3898](https://github.com/HKUDS/nanobot/pull/3898) 引入受限模式工具隔离机制，增强了非特权请求下的安全性。
*   **WebUI 与部署体验**：
    *   [PR #3899](https://github.com/HKUDS/nanobot/pull/3899) 实现了文件编辑活动的实时可视化。
    *   [PR #3889](https://github.com/HKUDS/nanobot/pull/3889) 修复了 Markdown 渲染中单换行符被忽略的问题。
    *   [PR #3875](https://github.com/HKUDS/nanobot/pull/3875) 修正了 Docker 部署文档与 v0.2.0 版本配置的不一致，解决了 WebUI 访问 403 及沙箱执行问题。

## 4. 社区热点
*   **[Issue #3863](https://github.com/HKUDS/nanobot/issues/3863) [bug] 微信不能Login**
    *   **热度**：5 条评论。
    *   **分析**：用户反馈即使微信已更新至最新版本，扫码后仍提示“版本过低”无法登录。这反映出 NanoBot 在微信渠道的登录协议可能滞后于微信官方的更新，或存在兼容性回归，是当前用户反馈最集中的阻塞性问题。
*   **[Issue #3846](https://github.com/HKUDS/nanobot/issues/3846) [enhancement] keep skill content in multi-turn conversations**
    *   **热度**：1 👍，3 条评论。
    *   **分析**：用户指出在多轮对话中，`read_file` 加载的 skill 内容容易被覆盖或丢失，提议引入 `skill_load` 工具。该 Issue 引发了关于上下文管理策略的讨论，对应的 [PR #3847](https://github.com/HKUDS/nanobot/pull/3847) 已提交，显示出社区对 Agent 长期记忆能力的强烈需求。

## 5. Bug 与稳定性
*   **严重**：
    *   [Issue #3863](https://github.com/HKUDS/nanobot/issues/3863)：微信渠道登录失败，影响国内核心用户群体，目前暂无 Fix PR。
    *   [Issue #3901](https://github.com/HKUDS/nanobot/issues/3901)：Agent 陷入死循环导致无法完成简单的 X 平台定时任务，触及最大工具调用迭代限制。
*   **一般**：
    *   [Issue #3903](https://github.com/HKUDS/nanobot/issues/3903)：MiniMax/AIHubMix 图像生成硬编码 PNG 导致格式兼容性问题，且绕过了基类 HTTP 方法，已提交 Issue 待修复。
    *   [Issue #3873](https://github.com/HKUDS/nanobot/issues/3873) [CLOSED]：Docker 部署文档存在多处配置错误，已通过 [PR #3875](https://github.com/HKUDS/nanobot/pull/3875) 修复。

## 6. 功能请求与路线图信号
*   **持久化记忆集成**：[Issue #3888](https://github.com/HKUDS/nanobot/issues/3888) 提议集成 Mnemon 工具以实现 Agent 会话间的持久化记忆，弥补了 NanoBot 当前在跨会话上下文保持上的短板。
*   **安全性增强**：[Issue #3887](https://github.com/HKUDS/nanobot/issues/3887) 建议为危险命令检测增加用户授权机制，而非简单的拦截。这与今日合并的受限模式工具隔离 ([PR #3898](https://github.com/HKUDS/nanobot/pull/3898)) 相呼应，预示着项目正在构建更精细的权限控制系统。
*   **WebUI 远程访问优化**：针对 Docker/远程部署的 WebUI 访问限制，社区提交了多个 PR ([PR #3891](https://github.com/HKUDS/nanobot/pull/3891), [PR #3904](https://github.com/HKUDS/nanobot/pull/3904))，表明远程部署的易用性是下一阶段优化的重点。

## 7. 用户反馈摘要
*   **部署痛点**：Docker 用户在配置 WebUI 和 bwrap 沙箱时遇到较多阻碍（如 403 错误），感谢 [PR #3875](https://github.com/HKUDS/nanobot/pull/3875) 的文档修正，降低了部署门槛。
*   **功能期望**：用户希望 Agent 在多轮对话中更“聪明”，不要遗忘之前的技能设定（Issue #3846），且在执行自动化任务（如 X 平台监控）时不要陷入死循环（Issue #3901）。
*   **渠道反馈**：微信渠道的登录稳定性仍是用户核心关切，希望维护者能尽快跟进微信端的接口变化。

## 8. 待处理积压
*   **重要功能 PR 待合并**：
    *   [PR #3791](https://github.com/HKUDS/nanobot/pull/3791)：任务规划工具，将显著提升 Agent 处理复杂任务的能力。
    *   [PR #3847](https://github.com/HKUDS/nanobot/pull/3847)：技能加载工具，解决多轮对话内容丢失问题。
*   **长期未响应 Issue**：
    *   [Issue #3863](https://github.com/HKSDS/nanobot/issues/3863)：微信登录失败问题急需官方介入确认是否为协议变更。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-19)

## 1. 今日速览
Hermes Agent 今日呈现**高维护活跃度**与**关键 Bug 涌现**并存的态势。过去 24 小时内，项目合并了惊人的 **40 个 Pull Requests**，主要集中在修复 Kanban 系统的稳定性问题与完善 CLI 工具链，显示出维护团队正在大力清理积压贡献。然而，社区反馈也暴露了**两个 P1 级严重回归问题**（Rate Limit 处理逻辑缺失和数据库连接泄漏），影响了 v0.14.0 版本的核心可用性。整体而言，项目正在快速迭代修复，但新版本稳定性仍需关注。

## 2. 版本发布
*   **无新版本发布**。目前最新版本仍为 v0.14.0 (2026-05-16)。

## 3. 项目进展
今日共有 40 个 PR 被合并，项目在以下方面取得显著进展：

*   **Kanban 系统稳定性大幅增强**：合并了多个关键修复，包括 [PR #28404](https://github.com/NousResearch/hermes-agent/pull/28404) (修复 SQLite 连接泄漏)、[PR #28405](https://github.com/NousResearch/hermes-agent/pull/28405) (防止缺少 skill 时 Worker 崩溃)、[PR #28420](https://github.com/NousResearch/hermes-agent/pull/28420) (新增并发任务数上限控制) 以及 [PR #28415](https://github.com/NousResearch/hermes-agent/pull/28415) (任务完成后自动清理 tmux 会话)。这一系列修复解决了近期用户反馈强烈的资源泄漏和僵尸进程问题。
*   **Agent 核心逻辑修复**：[PR #28409](https://github.com/NousResearch/hermes-agent/pull/28409) 修复了 Oneshot 模式下 fallback providers 不生效的问题；[PR #28401](https://github.com/NousResearch/hermes-agent/pull/28401) 修正了单任务分解时指派对象缺失的逻辑。
*   **打包与分发**：[PR #28406](https://github.com/NousResearch/hermes-agent/pull/28406) 修复了 Wheel 包中缺失 Dashboard 插件资源的问题，这对于通过 pip 安装的用户至关重要。

## 4. 社区热点
*   **[P1] 核心逻辑缺失引发崩溃**：Issue [#27370](https://github.com/NousResearch/hermes-agent/issues/27370) 与 [#28389](https://github.com/NousResearch/hermes-agent/issues/28389) 报告了相同的严重 Bug：在 v0.14.0 重构后，`conversation_loop.py` 中调用了未导入的函数 `_pool_may_recover_from_rate_limit`，导致触发限流时代码直接抛出 `NameError` 崩溃。这是目前社区关注度最高的问题。
*   **[P1] Gateway 调度器瘫痪**：Issue [#28285](https://github.com/NousResearch/hermes-agent/issues/28285) 报告 Kanban dispatcher 因数据库连接耗尽（`Too many open files`）而停止工作，导致所有定时任务失效，严重影响生产环境稳定性。
*   **功能请求：系统诊断工具**：Issue [#28223](https://github.com/NousResearch/hermes-agent/issues/28223) 提议增加 `hermes doctor` 指令，用于一键检测静默失败、配置错误等隐形问题，获得较多共鸣，反映了用户对调试难点的痛点。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，部分严重等级较高：

*   **P1 - 崩溃/阻断性**：
    *   **NameError 回归**：限流恢复逻辑缺失，导致 Agent 在遇到 429 错误时崩溃。([Issue #27370](https://github.com/NousResearch/hermes-agent/issues/27370))
    *   **Gateway 系统崩溃**：Kanban 数据库连接泄漏导致文件描述符耗尽，Gateway 停止调度。([Issue #28285](https://github.com/NousResearch/hermes-agent/issues/28285))
*   **P2 - 功能缺陷**：
    *   **Oneshot 模式消息丢失**：模型输出正文伴随工具调用后，正文内容被后续简短回复覆盖。([Issue #28326](https://github.com/NousResearch/hermes-agent/issues/28326)) —— **已有 Fix PR** [PR #28408](https://github.com/NousResearch/hermes-agent/pull/28408) (Open)。
    *   **Telegram 视觉功能失效**：回复带图消息时，图片未被转发给 Agent。([Issue #22250](https://github.com/NousResearch/hermes-agent/issues/22250))
    *   **OAuth 认证过期**：xAI Grok OAuth Token 24小时内失效，导致后台任务失败。([Issue #28250](https://github.com/NousResearch/hermes-agent/issues/28250)) —— **已有 Fix PR** [PR #28375](https://github.com/NousResearch/hermes-agent/pull/28375) (Open)。
    *   **自签名 HTTPS 错误**：自定义 Providers 使用自签名证书时无法连接。([Issue #28260](https://github.com/NousResearch/hermes-agent/issues/28260))
*   **P3 - 体验问题**：
    *   CLI 工具进度显示异常、TUI 渲染层级错误等视觉 Bug。([Issue #7723](https://github.com/NousResearch/hermes-agent/issues/7723), [Issue #28103](https://github.com/NousResearch/hermes-agent/issues/28103))

## 6. 功能请求与路线图信号
*   **技能包管理**：[PR #28373](https://github.com/NousResearch/hermes-agent/pull/28373) (Open) 提议支持通过单一命令加载多个 Skill（技能包），这将极大简化复杂任务的配置流程，有望近期合并。
*   **上下文长度精细化配置**：Issue [#28309](https://github.com/NousResearch/hermes-agent/issues/28309) 请求支持为自定义 Provider 下的不同模型单独配置 `context_length`。已有对应修复 PR [PR #28413](https://github.com/NousResearch/hermes-agent/pull/28413) 提交，预计很快解决。
*   **内存隔离**：Issue [#28279](https://github.com/NousResearch/hermes-agent/issues/28279) 提出了 Per-Chat 内存隔离的需求，这对于多用户或多场景下的隐私保护至关重要，是一个高价值的功能演进方向。

## 7. 用户反馈摘要
*   **稳定性焦虑**：用户 @fwends 在 Issue [#26340](https://github.com/NousResearch/hermes-agent/issues/26340) 中表达了对 Kanban 任务分发不稳定的强烈不满，称其 "比 openclaw 还不可靠"，反映出高频用户对系统健壮性的迫切需求。
*   **静默失败难以排查**：多位开发者反馈插件加载失败或认证错误仅在 DEBUG 级别日志显示，导致排查困难（见 [Issue #28137](https://github.com/NousResearch/hermes-agent/issues/28137)），呼吁增强错误日志的可见性。
*   **版本升级体验**：用户报告升级 v0.14.0 后出现了明显的回归问题（如 NameError），表明最近的重构可能缺乏足够的集成测试覆盖。

## 8. 待处理积压
*   **OAuth 认证顽疾**：Issue [#7746](https://github.com/NousResearch/hermes-agent/issues/7746) 已存在一月有余，涉及 Qwen OAuth 刷新失败问题，至今未彻底解决，影响了特定提供商的接入体验。
*   **关键 PR 待合并**：
    *   [PR #28408](https://github.com/NousResearch/hermes-agent/pull/28408) (修复 Oneshot 内容丢失) 和 [PR #28413](https://github.com/NousResearch/hermes-agent/pull/28413) (修复模型上下文配置) 虽已提交，但需尽快 Review 合并以平息社区抱怨。
    *   针对今日爆出的 P1 NameError 问题，目前尚未见官方提交修复 PR，建议维护者优先处理。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-19)

## 1. 今日速览
PicoClaw 项目今日保持高活跃度，核心开发重心明显向底层架构重构与多渠道适配倾斜。虽然仅关闭/合并了 1 个 PR，但新增了 18 个待合并 PR，显示出社区贡献热情高涨，同时也带来了较大的代码审查积压压力。项目发布了最新的 Nightly 版本，标志着 `v0.2.8` 开发分支持续迭代。Issues 方面，核心架构讨论与关键稳定性问题并存，尤其是上下文预算管理引发的崩溃问题值得高度关注。

## 2. 版本发布
- **nightly: Nightly Build (v0.2.8-nightly.20260519.941bac23)**
  - **类型**: 自动化构建版本
  - **说明**: 此版本包含了截至目前的最新代码提交，主要涵盖了架构重构与 Bug 修复内容。
  - **注意**: 官方提示该版本可能不稳定，建议测试环境使用。
  - **变更日志**: [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## 3. 项目进展
今日项目推进主要集中在代码库的维护与架构优化，虽然合并量少，但提交质量较高：
- **前端交互优化**: PR #2886 已关闭，引入了聊天详情可见性选择器，增强了用户对推理过程和工具调用的控制粒度。
- **关键架构重构**: 
    - PR #2896 提出统一 Provider 元数据管理，旨在降低长期维护成本。
    - PR #2551 继续推进 Channel 标识标准化，解耦名称与 Provider 类型，为多实例支持铺路。
- **核心修复提交**: PR #2895 针对今日爆出的严重 Bug (#2894) 提交了修复方案，强制在 "FreshTail" 阶段执行预算限制，防止上下文溢出。
- **新渠道支持**: PR #2893 新增了 Server酱³ Bot 支持，扩展了国内消息推送场景。

## 4. 社区热点
今日讨论最活跃的话题集中在架构演进与特定后端的兼容性问题上：
- **[#1934 Meta: Agent Refactor Phase 2](https://github.com/sipeed/picoclaw/issues/1934)**: 
  该 Issue 是项目的核心路线图，讨论了“单 Pico 内多智能体协作”的架构设计。今日更新表明项目正在从单一 Agent 执行向复杂的协作编排过渡，引发了社区对实现细节的深入探讨。
- **[#2674 Codex OAuth: empty assistant response](https://github.com/sipeed/picoclaw/issues/2674)**: 
  该问题在今日再次活跃，用户反馈使用 ChatGPT 后端时响应为空。这反映了社区对于 PicoClaw 作为中间层对接主流商业模型（如 ChatGPT）的高需求与当前兼容性痛点。

## 5. Bug 与稳定性
今日报告了若干关键 Bug，其中上下文管理问题尤为严重：
1.  **[Critical] Seahorse Assembler 绕过预算限制 (#2894)**: 
    - **问题**: `FreshTailCount=32` 机制导致最后 32 条消息不受上下文预算限制，直接导致请求超过模型上下文窗口报错 `400 BadRequestError`。
    - **状态**: **已有修复 PR #2895**，正等待合并。
    - **链接**: [Issue #2894](https://github.com/sipeed/picoclaw/issues/2894)
2.  **[High] RISC-V 版本功能缺失 (#2887)**: 
    - **问题**: RISC-V 架构的 .deb 包在使用 OpenAI 模型时无法正常工作，影响特定硬件用户群体。
    - **状态**: 待处理。
    - **链接**: [Issue #2887](https://github.com/sipeed/picoclaw/issues/2887)
3.  **[Medium] 历史记录显示不全 (#2796)**: 
    - **问题**: 包含多次用户消息的对话，在历史记录中仅显示最后一条。
    - **状态**: 待处理。
    - **链接**: [Issue #2796](https://github.com/sipeed/picoclaw/issues/2796)
4.  **[Medium] macOS 路径验证失败 (#2890)**: 
    - **问题**: macOS 上 `/var` 符号链接导致路径验证失败。
    - **状态**: **已有修复 PR #2890**。
    - **链接**: [PR #2890](https://github.com/sipeed/picoclaw/pull/2890)

## 6. 功能请求与路线图信号
通过分析 Issues 与 PRs，下一版本可能重点强化以下方向：
- **多智能体协作**: 基于 #1934 的讨论，多智能体编排框架已在规划中。
- **流式传输支持**: PR #2892 提出支持配置驱动的 Provider 流式传输，这将显著改善用户体验。
- **渠道多实例与多样化**: 
    - Telegram 渠道增强：新增“访客模式”(#2849) 和“商业模式”(#2845)。
    - 飞书渠道修复：支持动态名称以支持多实例 (#2846)。
- **容错机制**: PR #2891 提出增加“恢复出厂设置”功能，这对处理版本升级导致的配置不兼容问题至关重要。

## 7. 用户反馈摘要
- **兼容性痛点**: 用户在使用非标准后端（如 ChatGPT Backend API）或非主流架构（RISC-V）时遇到阻塞问题，希望官方加强兼容性测试。
- **历史记录逻辑**: 用户对历史记录的“压缩”逻辑感到困惑，认为展示层应保留完整上下文而非仅保留最后一条，这涉及产品交互逻辑的调整。
- **配置管理**: 存在配置文件版本迁移困难的声音，相关 PR (#2891) 已提交，反映了用户对“一键重置”功能的迫切需求。

## 8. 待处理积压
当前项目存在明显的代码审查积压，建议维护者优先关注以下长期未决的 PRs：
- **[PR #2551 Channel 重构](https://github.com/sipeed/picoclaw/pull/2551)**: 涉及核心 Channel 逻辑的重构，自 4 月中旬开启至今未合并，是其他多实例功能的基础。
- **[PR #2844 Steering 重渲染](https://github.com/sipeed/picoclaw/pull/2844)**: 旨在解决复杂对话轮次中的渲染问题，关联 Issue #2843，对 Agent 输出质量有直接影响。
- **[Issue #2674 Codex OAuth Bug](https://github.com/sipeed/picoclaw/issues/2674)**: 该 Bug 标记为 `stale` 但仍有用户反馈，影响面较广，建议重新激活处理。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-19)

## 1. 今日速览
NanoClaw 项目今日保持**极高活跃度**，开发迭代速度显著加快。过去 24 小时内项目发布了 **v2.0.64** 版本，重点修复了审批流中的目标寻址问题。社区贡献踊跃，共有 35 条 PR 更新（其中 27 条待合并），显示社区正积极填补功能空白与修复安全隐患。Issues 板块新增了关于 WhatsApp 集成的严重 Bug 报告，同时基础设施工问题（SSL 证书）引发了较多讨论。整体来看，项目正处于功能扩展与安全性加固并行的关键阶段。

## 2. 版本发布
**Release: v2.0.64**
- **核心更新**：修复了通过审批流（`ncl destinations add/remove`）添加的目标无法立即在接收代理的本地会话中生效的问题。
- **影响**：此前，新添加的目标因未被投射到本地状态，会导致 `send_message` 操作静默失败并报错 "unknown destination"。
- **建议**：所有使用了 NanoClaw 审批流进行动态目标管理的用户建议立即升级，以解决消息路由静默失败的问题。

## 3. 项目进展
今日共有 **8 条 PR 合并/关闭**，主要集中在安全性修复与稳定性提升：

- **安全加固**：PR #2547（已关闭）与 PR #2546（待合并）推动了 Webhook 服务器的安全绑定默认值从 `0.0.0.0` 修改为 `127.0.0.1`，防止意外暴露到局域网；PR #2538 提交了对 Dockerfile 插值中包名的验证，以防止 OS 命令注入（CWE-78）。
- **稳定性修复**：PR #2539 和 #2540 解决了 `ncl groups` 命令在创建和删除时的级联错误与数据库约束问题，提升了 CLI 工具的健壮性。
- **长期贡献合并**：PR #61（创建于 2 月）终于关闭，合并了 WhatsApp 认证重试逻辑及 Anthropic 环境变量支持，增强了渠道连接的韧性。

## 4. 社区热点
今日讨论最活跃的话题集中在基础设施与扩展性需求：

- **[Issue #1503](https://github.com/nanocoai/nanoclaw/issues/1503)**: nanoclaw.dev SSL 证书失效问题。
    - **现状**：评论数达 19 条。
    - **分析**：作为项目的官方门户，SSL 证书失效严重影响用户信任与初次访问体验，社区对此表示担忧，亟待维护者修复基础设施。
- **[Issue #1984](https://github.com/nanocoai/nanoclaw/issues/1984)**: 自定义 OpenAI 兼容端点支持。
    - **现状**：评论数 6 条。
    - **诉求**：用户希望更灵活地接入 Codex 或本地模型，反映出用户对去中心化模型接入的强烈需求。

## 5. Bug 与稳定性
今日报告的关键 Bug 按严重程度排列如下：

- **严重**:
    - **[Issue #2535](https://github.com/nanocoai/nanoclaw/issues/2535)**: WhatsApp LID 加密不同步。
        - **现象**：机器人加入群组后，成员消息显示为“Waiting for this message”，导致无法处理群消息。
        - **状态**：[OPEN]，暂无修复 PR，严重影响 WhatsApp 渠道的可用性。

- **高**:
    - **[Issue #1503](https://github.com/nanocoai/nanoclaw/issues/1503)**: 官网 SSL 证书失效。
        - **状态**：[OPEN]，基础设施问题。

- **已修复**:
    - **[Issue #2533](https://github.com/nanocoai/nanoclaw/issues/2533)**: 服务重启后 Docker 容器状态未同步。
        - **状态**：[CLOSED]，已确认问题并在当日解决。
    - **[PR #2541](https://github.com/nanocoai/nanoclaw/pull/2541)**: 修复解析器将正文中的 `</message>` 误判为消息结束标签的问题（待合并）。

## 6. 功能请求与路线图信号
结合今日 Issues 与 PRs，项目路线图呈现以下趋势：

- **协议扩展**：
    - [PR #2542](https://github.com/nanocoai/nanoclaw/pull/2542) 提议增加 **ACP Client Protocol** provider，支持 NanoClaw 作为客户端驱动外部 AI Agent。这标志着项目正致力于成为更通用的 Agent 协议枢纽。
- **推理能力优化**：
    - [PR #2406](https://github.com/nanocoai/nanoclaw/pull/2406) 提出了“按消息推理力度路由”的功能，允许为重负载命令分配更多计算资源，响应了用户对复杂任务处理能力的期待。
- **多渠道支持**：
    - [PR #2544](https://github.com/nanocoai/nanoclaw/pull/2544) 增强了 Telegram 的 `message_reaction` 和 `callback_query` 支持，扩展了交互维度。

## 7. 用户反馈摘要
从 Issues 和 PR 描述中提炼出的用户痛点：

- **运维痛点**：用户在生产环境部署或重启服务后，经常遇到状态不一致的问题（如 Issue #2533），需要更完善的状态恢复机制。
- **集成痛点**：尝试接入非官方支持模型（如本地 Ollama 或 Codex）时遇到阻碍（Issue #1984），文档指引与实际代码逻辑存在脱节。
- **使用体验**：CLI 工具在处理资源 ID 时存在不符合规范的生成方式（PR #2543），导致外部工具调用失败，用户对 ID 格式的规范性有更高要求。

## 8. 待处理积压
以下重要 Issue/PR 长期未得到有效解决或合并，建议维护者优先关注：

- **[Issue #1503](https://github.com/nanocoai/nanoclaw/issues/1503)** (创建于 2026-03-28)：SSL 证书问题已持续近两个月，严重影响项目形象，需立即处理。
- **[PR #1845](https://github.com/nanocoai/nanoclaw/pull/1845)** (创建于 2026-04-18)：关于数据库时间戳标准化的修复 PR 已停滞一个月，涉及数据一致性，建议尽快合并或反馈。
- **[PR #2497](https://github.com/nanocoai/nanoclaw/pull/2497)** (创建于 2026-05-15)：大型功能 PR "Agent Network" 目前处于 Open 状态，需社区投入精力进行 Review 以推动架构演进。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-19)

## 1. 今日速览
NullClaw 项目今日整体活跃度较高，主要集中在代码合并与稳定性修复上。过去24小时内共有 4 个 PR 成功合并，解决了 Windows DNS 解析、Discord 网关稳定性等关键问题，显著提升了跨平台兼容性与运行可靠性。社区方面，新增 1 条关于内存检索机制的功能请求，指出当前自动召回策略缺乏灵活性。目前仍有 3 个功能增强型 PR 处于待合并状态，涉及审计安全与数据治理等核心领域，显示出项目正向企业级安全标准迈进。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 4 个 PR 合并/关闭，项目在平台兼容性和连接稳定性方面取得了实质性进展：

*   **关键修复：Windows 平台 DNS 解析** - PR [#920](https://github.com/nullclaw/nullclaw/pull/920) 修复了 Windows 上非 localhost 主机名解析失败导致无法连接远程 Provider 的严重问题，确保了 Windows 平台的基本可用性。
*   **稳定性增强：Discord 网关重构** - PR [#910](https://github.com/nullclaw/nullclaw/pull/910) 合并了 5 项稳定性修复，包括看门狗、退避策略及 TLS 泄漏修复，并在多架构下通过了 12 小时高压测试，大幅提升了长连接场景的健壮性。
*   **功能完善：Worker 同步 Webhook** - PR [#912](https://github.com/nullclaw/nullclaw/pull/912) 实现了针对 paired-token workers 的同步 webhook 端点，填补了集成分析中的高优先级缺口。
*   **安全性修补：Probe 子进程处理** - PR [#883](https://github.com/nullclaw/nullclaw/pull/883) 增加了可执行文件预检机制，修复了 Zig stdlib 可能导致子进程异常的问题。

## 4. 社区热点
今日最受关注的动态为新增的功能请求 Issue [#919](https://github.com/nullclaw/nullclaw/issues/919)。

*   **议题：允许按消息禁用自动内存召回**
    *   **链接：** [Issue #919](https://github.com/nullclaw/nullclaw/issues/919)
    *   **分析：** 作者 @weissfl 指出当前 `enrichMessageWithRuntime()` 强制对每条传入消息执行 FTS5 + BM25 召回，且参数硬编码，无法禁用。这反映了高级用户对 Agent 记忆管理控制权的诉求，希望在特定场景下（如简单指令、隐私敏感场景）跳过繁重的检索增强生成（RAG）流程，以优化性能和响应速度。

## 5. Bug 与稳定性
今日报告并修复了两个影响较大的稳定性问题：

*   **[严重] Windows 平台网络连接瘫痪** - Issue 表现为 Windows 下无法解析非本地主机名。已通过 PR [#920](https://github.com/nullclaw/nullclaw/pull/920) 修复，现已合并。
*   **[中等] Discord/Websocket 连接不稳定** - 涉及网关掉线与 TLS 泄漏。已通过 PR [#910](https://github.com/nullclaw/nullclaw/pull/910) 修复，经过长时间冒烟测试验证。

## 6. 功能请求与路线图信号
*   **细粒度记忆控制 (Issue #919)：** 用户希望控制 RAG 行为。考虑到项目正在积极更新，预计未来版本可能会引入 `disable_recall` 标志或配置项。
*   **企业级安全审计 (PR #911)：** 正在进行的 PR 提出使用 LLM 进行隐私保护审计，结合 #885 的数据治理层，显示出项目正在构建符合企业合规要求的安全护城河，这可能成为下一版本的重点。

## 7. 用户反馈摘要
从 Issue #919 的反馈来看，用户对 NullClaw 的记忆机制有一定深度使用体验。痛点在于**缺乏对底层行为的配置灵活性**。默认的“全量召回”策略虽然保证了上下文连续性，但在处理简单任务时可能引入不必要的计算开销和潜在干扰。用户期待更精细的 Agent 运行时参数调整能力。

## 8. 待处理积压
以下重要 PR 仍处于 Open 状态，建议维护者重点关注：

*   **PR [#911](https://github.com/nullclaw/nullclaw/pull/911) (隐私审计)：** 涉及工作区安全扫描的核心功能，目前待合并，需关注测试覆盖率与合并进度。
*   **PR [#885](https://github.com/nullclaw/nullclaw/pull/885) (数据治理层)：** 作为黑客松项目，功能庞大，需持续跟进代码审查以确保架构兼容性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 (2026-05-19)

## 1. 今日速览
IronClaw 项目今日处于**高强度的架构重构与功能迭代期**，社区与核心开发团队互动极为活跃。过去24小时内共有 30 条 Issue 更新与 49 条 PR 更新，显示出 "Reborn" 架构迁移正在全面铺开。核心焦点集中在身份认证上下文、事件流管理以及 WebUI v2 的底层适配。尽管暂无正式版本发布，但版本发布准备 PR (#3708) 已提上日程，意在解决 crates.io 发布滞后问题。此外，Embeddings 模块的重构引发了一系列历史遗留 Bug 的修复讨论。

## 2. 版本发布
今日无新版本 Release。但需关注 **PR #3708 [chore: release]**，该 PR 计划将 `ironclaw` 版本从 `0.24.0` 提升至 `0.28.2`，并将 `ironclaw_common` 从 `0.4.2` 升级至 `0.5.0`。值得注意的是，`ironclaw_common` 包含 API 破坏性变更（enum variant discriminant 变更），下游用户需提前评估兼容性。

## 3. 项目进展
今日项目整体向前迈进了重要一步，主要集中在 **Reborn 架构的落地** 与 **工程质量提升**：
*   **CI/测试修复**：**PR #3682** 已关闭/合并，修复了 Canary 测试计数不准确及 chat-install 探针问题，提升了 CI 的可靠性。
*   **Embeddings 模块重构**：**PR #3739** 将 Embeddings 提供者（OpenAI, Bedrock 等）重构为独立的 `ironclaw_embeddings` crate，为后续多 provider 支持奠定基础。
*   **Reborn 架构组件**：
    *   **PR #3721** 实现了基于运行配置文件的个人上下文策略控制，增强了安全性与隔离性。
    *   **PR #3747** 新增了 `ironclaw_webui_v2` 路由，为 WebChat v2 提供了底层 HTTP 接口支持。
    *   **PR #3761** 引入了 EventStreamManager 切片，优化了产品侧的流式传输管理。
    *   **PR #3766** 增强了调度权限的安全性，引入了 `AuthorizedDispatchRequest` 以封堵潜在的安全漏洞。

## 4. 社区热点
今日讨论最活跃的内容集中在架构设计与稳定性修复：
*   **Issue #3692 [Reborn: add policy-gated personal identity]**：(评论: 6) 核心开发者 @henrypark133 与团队深入讨论了如何通过策略门控个人身份与心跳上下文，这是 Reborn 架构中安全模型的关键一环。
*   **Issue #3259 [Publish 0.25.0–0.27.0 to crates.io]**：(评论: 5) 社区关注 crates.io 发布滞后问题。由于 wasmtime 依赖的 CVE 漏洞，下游被迫锁定旧版本，用户强烈呼吁尽快发布新版本以解决安全隐患。
*   **Issue #3702 [Reborn: revise and implement binary-E2E test framework]**：(评论: 2) 提出了大规模的端到端测试重构计划，旨在覆盖 Rust 集成测试的空白，保障 Reborn 迁移的质量。

## 5. Bug 与稳定性
今日报告了多个功能性 Bug，主要集中在 Embeddings 与 UI 交互模块，暂未发现严重的数据丢失级故障：
*   **Embeddings 模块缺陷簇 (P1)**：
    *   **Issue #3754**：OpenAI embeddings URL 拼接错误，当 base_url 以 `/v1` 结尾时会导致 `/v1/v1/embeddings` 重复。
    *   **Issue #3750**：Bedrock embeddings 忽略 DB/TOML 中的模型设置，强制使用默认值。
    *   **Issue #3751**：未知的 provider 名称会静默回退到 OpenAI，缺乏报错提示。
    *   **Issue #3755**：认证失败提示信息不仅针对 OpenAI，误导使用 NEAR AI/Bedrock 的用户。
*   **UI/体验问题**：
    *   **Issue #3756**：ANSI 彩色日志导致日志字符串在部分查看器中断裂。
    *   **Issue #3762**：在 Web UI 编辑 `AGENTS.md` 后，系统提示未更新，需要重启或刷新才能生效。
*   **CI 稳定性**：
    *   **Issue #3447**：Nightly E2E 测试持续失败，目前仍在排查中。

## 6. 功能请求与路线图信号
随着 Reborn 架构的推进，用户对产品化的细节需求开始涌现：
*   **UI 配置增强**：**Issue #3771** 请求改进非 API-Key 类提供商（如 Gemini CLI、AWS Bedrock）的配置 UI 引导，目前 UI 缺乏明确的认证设置入口。
*   **细粒度工具控制**：**Issue #3763** 建议在 Web UI 中支持按用户/租户启用或禁用特定工具，目前工具集全局配置缺乏灵活性。
*   **Reborn 迁移**：多个 Issue (#3698, #3699, #3700) 详细规划了将 Web、CLI、Telegram 等渠道迁移至 Reborn 工作流的路线图，预计将在未来几周内逐步落地。

## 7. 用户反馈摘要
*   **配置体验痛点**：用户反馈在配置 Bedrock 等非标准提供商时感到困惑，UI 缺乏必要的引导步骤，且错误提示（如认证失败）不够精准。
*   **发布节奏焦虑**：下游开发者对 crates.io 版本更新滞后表示担忧，特别是涉及到安全漏洞（CVE）修复时，无法及时获取新版本带来了维护压力。
*   **对 Reborn 的期待**：从 Issue 讨论中可以看出，社区对 Reborn 架构带来的 WebUI v2、更安全的工作流以及更灵活的身份认证充满期待，但也伴随着对迁移期间兼容性和测试覆盖率的担忧。

## 8. 待处理积压
*   **Issue #3068 [Reborn Cutover Blocker]**：这是一个高风险的 P0 级问题，涉及迁移过程中 HTTP 凭证注入机制的保留。若不解决，将阻碍 Reborn 的全面上线，需立即关注。
*   **PR #3456 [Dependabot bump actions]**：该依赖更新 PR 涉及 15 个包的升级，虽已提交多日但仍处于 Open 状态，建议尽快合并以消除 CI/CD 环节的潜在安全隐患。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-19)

## 1. 今日速览
LobsterAI 项目今日迎来重要版本更新 **v2026.5.18**，项目活跃度极高。过去 24 小时内，项目处理了 **46 个 PR 更新**，其中 **40 个已合并/关闭**，显示出开发团队正在进行大规模的代码提交与功能收敛。虽然无新增 Issue，但通过 PR 记录可见，开发重心集中在 **Artifacts（ artifacts 模块）预览体验优化**、**UI 细节打磨**以及**多端兼容性修复**。整体而言，项目处于快速迭代后的稳定发布期，代码合并效率高，功能迭代方向明确。

## 2. 版本发布
**新版本：LobsterAI 2026.5.18**
- **发布时间**：2026-05-18
- **更新亮点**：
  - **渠道归因功能**：新增 `keyfrom` 渠道归因打包与请求上下文支持，有助于追踪用户来源与行为分析 ([PR #1991](https://github.com/netease-youdao/LobsterAI/pull/1991))。
  - **模型配置增强**：在模型设置中新增“上下文窗口滑块”，允许用户针对不同模型精细调整上下文长度，提升长文本处理的灵活性 ([PR #2](https://github.com/netease-youdao/LobsterAI/pull/2))。

## 3. 项目进展
今日合并/关闭的 PR 主要推进了以下关键能力的升级，显著提升了产品的稳定性和交互体验：

- **Artifacts 与文件预览能力大幅增强**：
  - 修复了 Mermaid/PPTX 等多种格式的预览 Bug，新增 Mermaid 缩放控制与图片复制功能，解决了预览文件重复及有效性验证问题 ([PR #1945](https://github.com/netease-youdao/LobsterAI/pull/1945), [PR #1958](https://github.com/netease-youdao/LobsterAI/pull/1958), [PR #1933](https://github.com/netease-youdao/LobsterAI/pull/1933))。
  - 优化了文件列表 UI，支持搜索、排序及深色模式适配。

- **交互体验与 UI 精细化**：
  - 修复了聊天滚动条抖动问题，提升了对话流畅度 ([PR #1949](https://github.com/netease-youdao/LobsterAI/pull/1949))。
  - 优化了代码块工具栏、按钮悬停效果及低 DPI 屏幕下的图标清晰度，视觉体验更佳 ([PR #1951](https://github.com/netease-youdao/LobsterAI/pull/1951), [PR #1942](https://github.com/netease-youdao/LobsterAI/pull/1942))。

- **系统级集成与多端修复**：
  - **macOS**：新增通过系统菜单触发听写功能，优化了权限处理 ([PR #1956](https://github.com/netease-youdao/LobsterAI/pull/1956))。
  - **多智能体协同**：修复了切换 Agent 时 IM（即时通讯）失效的关键问题 ([PR #1960](https://github.com/netease-youdao/LobsterAI/pull/1960))。
  - **IM 集成**：修复了飞书接收文件时的中文乱码问题及 Gateway 重启日志缺失问题 ([PR #1866](https://github.com/netease-youdao/LobsterAI/pull/1866), [PR #1837](https://github.com/netease-youdao/LobsterAI/pull/1837))。

## 4. 社区热点
由于过去 24 小时无新增 Issue 且 PR 评论数据未显示（或为 0），今日社区讨论热度主要集中在代码提交层面，暂无公开的激烈讨论话题。但从合并记录看，**多智能体切换时的 IM 稳定性** ([PR #1960](https://github.com/netease-youdao/LobsterAI/pull/1960)) 和 **Artifacts 预览的文件处理** ([PR #1945](https://github.com/netease-youdao/LobsterAI/pull/1945)) 是开发者重点关注的领域。

## 5. Bug 与稳定性
今日无新报告的 Bug，但有大量已修复的历史遗留问题，按严重程度排序如下：

- **严重**：
  - **IM 功能失效**：修复了在多个 Agent 间切换时 IM 功能停止工作的问题，确保核心通信链路畅通 ([PR #1960](https://github.com/netease-youdao/LobsterAI/pull/1960))。
  - **消息同步异常**：修复了消息尾部 `NO_REPLY` 同步问题，保障对话逻辑完整性 ([PR #1940](https://github.com/netease-youdao/LobsterAI/pull/1940))。

- **中等**：
  - **预览功能异常**：解决了 Mermaid 缩放失效、PPTX 预览脚本被阻止、文件列表去重与有效性校验等问题 ([PR #1958](https://github.com/netease-youdao/LobsterAI/pull/1958), [PR #1925](https://github.com/netease-youdao/LobsterAI/pull/1925))。
  - **文件编码问题**：修复了飞书平台接收文件时的中文名乱码 Bug ([PR #1866](https://github.com/netease-youdao/LobsterAI/pull/1866))。

- **轻微**：
  - UI 细节优化，如滚动条稳定性、图标模糊、按钮悬停样式统一等 ([PR #1949](https://github.com/netease-youdao/LobsterAI/pull/1949), [PR #1942](https://github.com/netease-youdao/LobsterAI/pull/1942))。

## 6. 功能请求与路线图信号
从近期合并的 PR 分析，项目路线图呈现出以下趋势：
- **深度集成系统能力**：新增 macOS 听写支持与图片原生复制功能，暗示项目正致力于打通操作系统层面的能力，不仅仅是作为一个聊天客户端，而是作为一个系统级的 AI 助手。
- **Artifacts 模块成熟化**：大量 PR 投入在 Mermaid、PPTX、图片等文件的预览与交互上，预示着“Artifacts”（内容/文件产物处理）将成为 LobsterAI 区别于普通 Chatbot 的核心差异化功能。
- **企业级特性**：渠道归因打包 的引入，表明项目正在为商业化或企业级部署做准备。

## 7. 用户反馈摘要
过去 24 小时无新增 Issue，暂无可提取的用户公开反馈。但从开发者提交的修复来看，**多智能体场景下的状态保持**以及**文件预览的细节体验**（如缩放、深色模式、复制）是影响用户满意度的关键点，目前已被开发团队逐一解决。

## 8. 待处理积压
目前仍有 **6 个待合并 PR**。鉴于今日已处理 40 个 PR，积压数量处于健康范围。建议关注剩余待合并 PR 的评审进度，以保持版本迭代的流畅性。今日无长期未响应的重要 Issue 提示。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-19)

## 1. 今日速览
Moltis 项目今日展现出极高的维护效率与健康的迭代节奏。过去 24 小时内，项目成功发布新版本 `20260518.01`，并实现了惊人的 Issue "清零" 式进展——新开 1 条 Issue，关闭 7 条，合并 6 条 PR。维护者 @penso 对社区反馈响应迅速，几乎所有今日报告的 Bug 均在同日得到修复并合并，修复范围覆盖核心 Agent 生命周期钩子、配置持久化及模型兼容性等关键领域。整体来看，项目处于高度活跃状态，稳定性显著增强。

## 2. 版本发布
- **[Release 20260518.01](https://github.com/moltis-org/moltis/releases/tag/20260518.01)**
    - **更新性质**：重要修复版。
    - **主要内容**：集中修复了 Agent 运行时的多个逻辑缺陷，包括重新调度丢失的 Hook 事件、修复配置自动压缩导致的参数丢失问题，以及对 Gemma 模型推理标签的解析支持。
    - **破坏性变更/迁移注意**：无明显破坏性变更。建议用户尽快升级，特别是依赖 `BeforeAgentStart` 或 `BeforeLLMCall` 钩子的用户，以修复潜在的逻辑失效问题。

## 3. 项目进展
今日项目进展迅速，核心聚焦于**稳定性修复与合规性增强**，共合并 6 个 PR：

- **核心逻辑修复**：合并了 [PR #1017](https://github.com/moltis-org/moltis/pull/1017) 与 [PR #1018](https://github.com/moltis-org/moltis/pull/1018)，修复了 Agent 启动前和 LLM 调用前的 Hook 钩子失效问题，恢复了文档中承诺的事件调度能力，对监控和插件系统至关重要。
- **配置持久化**：合并 [PR #1015](https://github.com/moltis-org/moltis/pull/1015)，解决了配置在启动时被意外剥离默认值的问题，保障了如 Coqui TTS 等配置的稳定性。
- **模型兼容性**：合并 [PR #1016](https://github.com/moltis-org/moltis/pull/1016)，新增了对 Gemma 模型 `<thought>` 推理标签的解析支持，防止其污染用户可见文本或 TTS 输出。
- **安全与沙箱**：合并 [PR #1019](https://github.com/moltis-org/moltis/pull/1019) 优化了危险命令检测，避免了对 Heredoc 正文内容的误报；合并 [PR #1021](https://github.com/moltis-org/moltis/pull/1021) 修复了沙箱环境下的模块路径问题。

## 4. 社区热点
今日社区反馈主要集中在功能请求与对现有 Bug 的快速反馈：

- **功能请求 [#1011](https://github.com/moltis-org/moltis/issues/1011) [OPEN]**：用户 @dmitriikeler 提出为 Agent 增加 `tool_choice` 和 `active_tools` 过滤功能，旨在防止小型/廉价 LLM 在执行任务时发生“漂移”。这是一个高质量的功能请求，直接指向了降低成本和提高 Agent 控制精度的痛点。
- **活跃讨论**：虽然今日大部分 Issue 评论数为 0，但 [Issue #858](https://github.com/moltis-org/moltis/issues/858) 作为历史遗留的 Bug（心跳循环问题）在今日被关闭，显示了维护团队对积压问题的清理决心。

## 5. Bug 与稳定性
今日报告并修复了多个中等至严重程度的 Bug，稳定性显著提升：

1.  **[严重] Hook 机制失效**
    - **Issue**: [#1012](https://github.com/moltis-org/moltis/issues/1012) (BeforeAgentStart 钩子丢失), [#1013](https://github.com/moltis-org/moltis/issues/1013) (BeforeLLMCall 修改载荷被丢弃)。
    - **状态**: 均已通过 PR #1017 和 #1018 修复并关闭。这是核心运行时逻辑错误，影响插件和中间件，建议所有用户升级。

2.  **[中等] 配置丢失**
    - **Issue**: [#1006](https://github.com/moltis-org/moltis/issues/1006) (VoiceCoquiTtsConfig 默认值在自动压缩时消失)。
    - **状态**: 已通过 [PR #1015](https://github.com/moltis-org/moltis/pull/1015) 修复。

3.  **[中等] 安全扫描误报**
    - **Issue**: [#1014](https://github.com/moltis-org/moltis/issues/1014) (Heredoc 内容被误判为危险命令)。
    - **状态**: 已通过 [PR #1019](https://github.com/moltis-org/moltis/pull/1019) 修复。

4.  **[轻微] 新模型兼容性**
    - **Issue**: [#1007](https://github.com/moltis-org/moltis/issues/1007) (Gemma 推理标签未正确解析)。
    - **状态**: 已通过 [PR #1016](https://github.com/moltis-org/moltis/pull/1016) 修复。

## 6. 功能请求与路线图信号
- **精细化 Agent 控制**: [Issue #1011](https://github.com/moltis-org/moltis/issues/1011) 提出的 Per-turn `tool_choice` 功能反映了用户对 Agent 行为控制粒度的更高要求。结合今日大量 Hook 修复的背景，这暗示 Moltis 正在从一个“能跑”的 Agent 框架向“可控、可调试”的专业级框架演进。该功能极有可能被纳入下一阶段的路线图。

## 7. 用户反馈摘要
- **文档与实现一致性**：用户 @dmitriikeler 反馈文档中声称 Hook 可以修改 Payload，但实际代码中修改被丢弃（Issue #1013）。这表明高级用户正在深度依赖 Hook 机制进行二次开发，对文档与代码的一致性要求极高。
- **小模型落地痛点**：Issue #1011 揭示了用户尝试在资源受限环境（使用 Haiku 等小模型）部署 Agent 时遇到的控制难题，社区对降低 LLM 幻觉和任务漂移的方案有强烈需求。
- **配置体验**：Issue #1006 反映了用户对“魔法行为”（配置自动压缩）的困惑，修复后预期将改善用户体验。

## 8. 待处理积压
- **新功能待响应**：[Issue #1011](https://github.com/moltis-org/moltis/issues/1011) (Per-turn tool_choice) 目前处于 Open 状态，等待维护团队评估与排期。鉴于提出者 @dmitriikeler 也是今日多个重要 Bug 的发现者，该建议权重较高，建议优先关注。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-05-19)

## 1. 今日速览
CoPaw 项目今日保持了极高的活跃度，共处理了 **31 条 Issue** 和 **28 条 PR**，并发布了新版本 **v1.1.8-beta.1**。项目重点聚焦于系统稳定性修复与渠道功能增强，特别是解决了导致聊天无响应的全局速率限制问题，并合并了微信/飞书等渠道的关键修复。社区方面，用户对插件系统及多模态模型（如 ChatGPT-5.5、DeepSeek v4）的支持表现出强烈关注。整体来看，项目正处于快速迭代期，稳定性显著提升，但遗留的安全漏洞与配置迁移问题仍需关注。

## 2. 版本发布
**新版本：v1.1.8-beta.1**
- **主要更新：**
  - **Plan Mode 增强**：强化了从用户消息中确认计划的能力 ([PR #4198](https://github.com/agentscope-ai/QwenPaw/pull/4198))。
  - **工具修复**：修复了 Browser 工具的实现问题。
  - **版本号升级**：同步更新至 1.1.8-beta.1。
- **迁移注意**：此版本为 Beta 测试版，主要面向尝鲜用户，部分新特性（如 Plan Mode 强化）可能与旧版行为有差异，建议在测试环境验证。

## 3. 项目进展
今日共有 **18 个 PR 被合并或关闭**，项目在稳定性、渠道集成和功能扩展方面取得了实质性进展：

- **关键稳定性修复**：
  - **[Merged] PR #4487**: 修复了全局 LLM 速率限制器导致的“三个点跳动/聊天无响应”问题 ([Issue #4469](https://github.com/agentscope-ai/QwenPaw/issues/4469))，将单例限制器改为按模型实例化，彻底解决了多模型并发下的阻塞问题。
  - **[Merged] PR #4493**: 优化了 Inbox 追踪持久化性能，改为批量写入，显著减少文件 I/O 操作。
  - **[Merged] PR #4502**: 优化前端 Console 性能，解决了冗余 Modal 组件挂载导致的内存开销和渲染延迟。

- **渠道与功能增强**：
  - **[Merged] PR #4282**: 新增 `/make-skill` 命令，支持基于历史对话生成技能。
  - **[Merged] PR #4490**: 修复微信渠道轮询线程崩溃问题，增加了优雅的关闭机制和指数退避重试。
  - **[Merged] PR #4503**: 修复 QQ 频道因 IP 白名单拒绝导致的高频重连问题。
  - **[Merged] PR #4417**: 支持在模型配置中设置 `max_tokens` 和 `max_input_length`，并自动迁移旧配置。
  - **[Merged] PR #4418**: 新增 QwenPaw 宠物插件，响应了社区对于趣味性功能的期待。

- **待处理 PR**：
  - **[Open] PR #4508**: 版本号正准备升级至 v1.1.8b2，预示着下一个 Beta 版本即将到来。
  - **[Open] PR #4480**: 飞书渠道正在开发 CardKit 流式卡片输出功能，值得期待。

## 4. 社区热点
今日社区讨论最热烈的问题集中在系统稳定性和新模型支持上：

1.  **[Issue #2291] 🐾 Help Wanted: Open Tasks** (评论: 62)
    - **链接**: [agentscope-ai/QwenPaw Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)
    - **分析**: 长期置顶的贡献者任务清单，社区参与度极高，表明项目拥有良好的开源协作氛围。

2.  **[Issue #4469] [Bug]: 聊天窗口聊天无回应** (评论: 17, 已关闭)
    - **链接**: [agentscope-ai/QwenPaw Issue #4469](https://github.com/agentscope-ai/QwenPaw/issues/4469)
    - **分析**: 用户报告发送消息后一直显示“三个点跳动”且无响应。该问题由全局速率限制器设计缺陷引起，严重影响体验。随着 PR #4487 的合并，该问题已得到解决。

3.  **[Issue #4477] [Bug]: WeChat iLink 微信定时任务推送失败** (评论: 11)
    - **链接**: [agentscope-ai/QwenPaw Issue #4477](https://github.com/agentscope-ai/QwenPaw/issues/4477)
    - **分析**: 微信 iLink 渠道在 `context_token` 过期时缺乏重试逻辑，导致定时任务隔夜失效。用户对微信渠道的稳定性要求较高，期待尽快修复。

4.  **[Issue #4474] [Question]: 现在支持chatgpt-5.5吗？** (评论: 6)
    - **链接**: [agentscope-ai/QwenPaw Issue #4474](https://github.com/agentscope-ai/QwenPaw/issues/4474)
    - **分析**: 用户尝试配置最新模型 ChatGPT-5.5 失败，反映出社区对前沿大模型的强烈跟进需求，需文档或代码层面予以适配确认。

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排序如下：

- **🔴 严重**:
  - **[Issue #4470] 插件接口 RCE 漏洞**: 存在未经授权的远程代码执行风险。目前处于 Open 状态，建议维护者立即介入评估与修复。
    - 链接: [agentscope-ai/QwenPaw Issue #4470](https://github.com/agentscope-ai/QwenPaw/issues/4470)
  - **[Issue #4469] 聊天无响应**: 全局速率限制导致服务假死。**已修复** ([PR #4487](https://github.com/agentscope-ai/QwenPaw/pull/4487))。

- **🟠 中等**:
  - **[Issue #4477] 微信 iLink 推送失败**: Token 过期无重试，导致定时任务不可用。
  - **[Issue #4496] AGENTS.md 加载错误**: 升级 1.1.7 后，系统提示词加载的是默认模板而非用户工作区文件，影响 Agent 人设设定。
  - **[Issue #4485] 插件工具注入失败**: 工具写入 `agent.json` 但未注入到 Toolkit，导致 LLM 无法调用插件函数。

- **🟡 轻微**:
  - **[Issue #4494] Console 流中断**: 上下文过长时流式输出偶发中断，并伴有误导性提示。
  - **[Issue #4497] Markdown 表格换行**: `<br>` 标签在表格中不生效。

## 6. 功能请求与路线图信号
用户需求集中在上下文管理和生态扩展：

- **上下文管理精细化** ([Issue #4435](https://github.com/agentscope-ai/QwenPaw/issues/4435), [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436), [#4437](https://github.com/agentscope-ai/QwenPaw/issues/4437)): 用户希望能显示对话轮数、删除单条对话或拆分会话，以应对长上下文带来的 Token 成本问题。这反映了用户对成本控制的精细化需求。
- **插件生态与趣味性** ([Issue #4499](https://github.com/agentscope-ai/QwenPaw/issues/4499)): 用户询问插件市场发布时间及类似 Codex 的宠物系统。值得注意的是，**PR #4418 (Pet Plugin) 已合并**，宠物功能已上线。
- **Beta 渠道更新** ([Issue #4500](https://github.com/agentscope-ai/QwenPaw/issues/4500)): 建议在命令行 `qwenpaw update` 中增加 `--channel beta` 选项，方便开发者跟进最新特性。

## 7. 用户反馈摘要
- **痛点反馈**:
  - **升级恐惧**: 多名用户担心 Desktop 版本卸载重装会丢失配置和数据 ([Issue #4430](https://github.com/agentscope-ai/QwenPaw/issues/4430))，希望优化迁移体验。
  - **频率限制误杀**: 报错 "Operation LLM execution is too frequent" 频繁出现 ([Issue #4468](https://github.com/agentscope-ai/QwenPaw/issues/4468))，表明现有的频率控制策略对部分高频使用场景不够友好。
  - **模型适配**: Deepseek v4 Flash 的 think 标签解析存在问题 ([Issue #4051](https://github.com/agentscope-ai/QwenPaw/issues/4051))。

- **满意点**:
  - 社区对新增 `make-skill` 和宠物插件反应积极，认为这些功能降低了定制化门槛并增加了趣味性。

## 8. 待处理积压
以下重要 Issue 长期未获解决或需紧急关注：

- **🚨 安全漏洞**: [Issue #4470](https://github.com/agentscope-ai/QwenPaw/issues/4470) 提出的插件 RCE 风险，目前尚无官方回应，需立即排查。
- **🔧 核心功能异常**: [Issue #4485](https://github.com/agentscope-ai/QwenPaw/issues/4485) 插件工具注入机制失效，阻碍了插件系统的正常使用。
- **📢 功能阻塞**: [Issue #4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) 微信 iLink 的定时任务问题影响企业级用户使用，建议优先修复。

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