# OpenClaw 生态日报 2026-06-15

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-15 04:43 UTC

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

# OpenClaw 项目动态日报 (2026-06-15)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，过去 24 小时内有近 **1000 条** Issues 和 PRs 更新，显示出社区与开发团队紧密的互动。项目发布了 **v2026.6.8-beta.1** 版本，重点优化了 Telegram 和 WhatsApp 的消息投递能力。然而，社区讨论焦点集中在 **会话状态管理**、**认证提供者** 以及 **嵌入式 Agent 运行稳定性** 等核心问题上，大量 P1 级别的回归 Bug 被报告，尤其是消息丢失和服务静默失败的情况需引起维护者高度警惕。

## 2. 版本发布
**新版本：v2026.6.8-beta.1**

- **核心更新**：
    - **Telegram 渠道增强**：支持富文本消息投递，包括表格、列表、可展开引用块；改进了 CLI 后端投递的稳定性；移除了原生草稿迁移逻辑；增强了富媒体边界安全性。
    - **WhatsApp 渠道优化**：提升了消息投递的丰富度和鲁棒性，减少了连接的不稳定性。
- **影响评估**：此次更新主要针对消息通道，建议正在使用 Telegram 作为主要交互界面的用户升级，以获得更好的排版展示效果。

## 3. 项目进展
今日共有 **70 个 PR 被合并/关闭**，**430 个 PR 处于待合并状态**，主要进展集中在稳定性修复和性能优化：

- **会话与状态修复**：PR [#89045](https://github.com/openclaw/openclaw/pull/89045) 修复了群聊会话在失败状态下静默丢弃后续消息的严重问题，提升了系统的容错性。
- **认证与安全**：PR [#93076](https://github.com/openclaw/openclaw/pull/93076) 修复了 WhatsApp Web 在终端断开连接时的认证丢失问题，避免了频繁扫码重登。
- **性能优化**：PR [#93161](https://github.com/openclaw/openclaw/pull/93161) 对任务状态协调进行了性能优化，减少了重复计算；PR [#90741](https://github.com/openclaw/openclaw/pull/90741) 正在重构模型配置指纹缓存，旨在降低高负载下的延迟。
- **功能演进**：PR [#85651](https://github.com/openclaw/openclaw/pull/85651) 正在推进 "Agent Self-Elected Turn Continuation" 功能，这将赋予 Agent 根据上下文压力自主决定是否继续工作的能力，是一个重要的架构演进。

## 4. 社区热点
今日社区讨论最热烈的问题集中在**消息重复**和**服务中断**：

1.  **[#87307 Matrix 线程回复回归](https://github.com/openclaw/openclaw/issues/87307)**
    *   **热度**：14 条评论
    *   **诉求**：用户反馈升级到 2026.5.22 后，Matrix 中的线程回复被当作普通回复发送，破坏了对话的上下文结构。
2.  **[#85888 MiniMax Cron 任务过载失败](https://github.com/openclaw/openclaw/issues/85888)**
    *   **热度**：12 条评论
    *   **诉求**：使用 MiniMax 的用户报告凌晨定时任务频繁 503 错误，手动触发却成功，质疑 OpenClaw 的调度并发策略有问题。
3.  **[#84516 Codex 长回复被静默截断](https://github.com/openclaw/openclaw/issues/84516)**
    *   **热度**：11 条评论
    *   **诉求**：Agent 的长文本回复在 1000 字符左右被无声截断，未触发错误提示，导致关键信息丢失，严重影响生产环境使用。

## 5. Bug 与稳定性
今日报告了大量高严重级别的 Bug，系统稳定性面临挑战：

- **[P0] 严重数据丢失**：
    - **[#84882 Memory-core 梦幻功能误删文件](https://github.com/openclaw/openclaw/issues/84882)**：`memory-core` 的 Dreaming 功能在标准化召回工件时，静默删除了用户的每日记忆文件。**目前尚无 Fix PR**，建议立即关闭相关功能。

- **[P1] 核心功能回归与中断**：
    - **[#86519 Telegram 消息重复](https://github.com/openclaw/openclaw/issues/86519)**：Agent 在 Telegram 上重复发送 2-10 次相同消息，严重影响用户体验。
    - **[#84903 Gateway 事件循环阻塞](https://github.com/openclaw/openclaw/issues/84903)**：单个 Agent 会话的阻塞会导致整个 Gateway 停止响应，隔离性失效。
    - **[#86508 Discord 嵌入式会话接管错误](https://github.com/openclaw/openclaw/issues/86508)**：Discord 运行时报错 `EmbeddedAttemptSessionTakeoverError`，导致任务中断。

- **[P1] 认证与模型调用**：
    - **[#86215 Codex OAuth 刷新失败](https://github.com/openclaw/openclaw/issues/86215)**：OAuth Token 刷新超时或失效导致 Agent 卡死数小时。
    - **[#91016 DeepSeek Prompt Cache 失效](https://github.com/openclaw/openclaw/issues/91016)**：升级后缓存失效导致成本激增（该 Issue 已关闭，可能在 beta 中修复）。

## 6. 功能请求与路线图信号
- **Gateway-Lite 模式 ([#86881](https://github.com/openclaw/openclaw/issues/86881))**：用户请求提供一种轻量级部署模式，仅用于网关转发、Webhook 和 Cron 任务，而不加载 AI 模型，以满足纯自动化场景需求。这表明 OpenClaw 正在被更多集成场景使用，不仅仅是作为 AI 助手。
- **流式传输控制命令 ([#74077](https://github.com/openclaw/openclaw/issues/74077))**：用户希望增加 `/stream` 命令以便在当前会话中动态调整流式传输模式，提升交互体验。

## 7. 用户反馈摘要
- **痛点**：用户对**静默失败**表现出极大的挫败感，特别是长文本截断 (#84516) 和会话静默丢失 (#86827)。此外，**认证配置**（如 OAuth、MiniMax）的复杂性导致了许多排错困难，用户希望有更健壮的自动重试或错误提示机制。
- **场景**：Cron 定时任务的高并发调度 (#85888) 显示出 OpenClaw 在自动化运维场景下的重要性。
- **满意度**：尽管存在 Bug，但社区对 PR 的响应速度较快（如 WhatsApp 认证修复），显示出维护团队对核心问题的重视。

## 8. 待处理积压
以下高优先级问题长期未解决或未合并修复，需维护者优先关注：

- **[#77467 MiniMax OAuth 无法自动刷新](https://github.com/openclaw/openclaw/issues/77467)**：长期存在的问题，导致用户每 2 小时需手动重登，严重影响 MiniMax 用户的使用体验。
- **[#85030 MCP 工具注入失败](https://github.com/openclaw/openclaw/issues/85030)**：子代理无法获取 MCP 工具链，限制了 Agent 的自动化能力，目前已有相关 PR 但尚未合并。
- **[#84792 内存预刷新机制](https://github.com/openclaw/openclaw/pull/84792)**：旨在修复预压缩时的内存丢失问题，虽标记为 P1 且 Ready for Review，但尚未合并。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-06-15)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态呈现“两极分化、安全承压”的态势。以 OpenClaw、CoPaw 为代表的应用层项目处于功能快速堆叠与回归修复并存的“青春期”，迭代极快但稳定性挑战严峻；而 NanoBot、Zeroclaw 等架构层项目正经历深度重构，致力于解决模块化与扩展性问题。值得注意的是，随着 Agent 自主权限的扩大，**安全隔离（凭证管理、权限边界）**已成为今日全生态最突出的共性问题，多个头部项目同时爆发了高危安全漏洞。

## 2. 各项目活跃度对比

| 项目名称 | Issues 动态 | PRs 动态 | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 近 1000 条更新 (极高频) | 70 合并 / 430 待合并 | v2026.6.8-beta.1 | ⚠️ **风险预警**：P0/P1 级 Bug 频发，存在严重数据丢失与静默失败。 |
| **NanoBot** | 新增 2 / 关闭 3 | 27 合并 (消化力强) | 无 | 🟢 **健康**：架构重构顺利，代码流转效率高，问题消化快。 |
| **Zeroclaw** | 关闭 28 (清理积压) | 待合并 42 (积压严重) | 无 | 🟡 **稳健**：清理旧账中，代码审查流速需提升，架构稳步演进。 |
| **Hermes Agent** | 更新 50+ (高互动) | 更新 50+ (高互动) | 无 | 🟡 **承压**：社区活跃，但安全漏洞集中爆发，待合并 PR 积压较多。 |
| **IronClaw** | 活跃 36 / 更新 43 | 更新 48 | 无 | 🟡 **攻坚**：Reborn 架构处于关键修复期，高危漏洞已暴露并正在处理。 |
| **CoPaw** | 更新 42 | 合并 6 | 无 (围绕 v1.1.11.post2) | 🟡 **波动**：引入 GUI 自动化等重磅功能，但伴随严重回归问题。 |
| **NanoClaw** | 新增 3 安全漏洞 | 合并 5 (核心架构) | 无 | 🔴 **高危**：架构升级成功，但安全边界形同虚设，需紧急加固。 |
| **PicoClaw** | 更新 14 | 合并 5 | Nightly Build | 🟢 **稳定**：专注于错误处理与资源清理，处于质量巩固期。 |
| **LobsterAI** | 低活跃 | 合并 2 | 无 | 🟢 **平稳**：功能迭代平缓，积压清理中，无明显风险。 |
| **NullClaw** | 新增 1 | 无 | 无 | ⚪ **沉寂**：仅企业级功能需求，代码库无变更。 |
| **其他** | 无活动 | 无活动 | 无 | ⚪ **停滞** |

## 3. OpenClaw 在生态中的定位

作为生态的核心参照项目，OpenClaw 展现出了典型的“高流量、高负载”特征，其定位如下：

*   **优势：通讯枢纽与协议适配**。OpenClaw 在 Telegram、WhatsApp、Matrix 等多渠道消息投递上的投入远超同类，是当前生态中连接用户最紧密的“通讯层 Agent”，其富媒体消息处理能力具有显著优势。
*   **劣势：稳定性与技术债务**。与 NanoBot 的稳健重构或 CoPaw 的桌面端探索相比，OpenClaw 陷入了“发布-回归-修复”的循环。今日爆发的 P0 数据丢失和大量 P1 静默失败问题，反映出其在快速迭代中牺牲了部分质量管控，底层架构（会话状态、认证）的不稳定性成为掣肘。
*   **规模对比**：其 Issue/PR 更新量级（近千条）远超其他项目，说明拥有庞大的用户基数和核心贡献者团队，但也承受着最大的维护压力。

## 4. 共同关注的技术方向

通过对多项目动态的交叉分析，以下技术方向已成为行业共识：

*   **安全边界与凭证隔离**
    *   **涉及项目**：Hermes Agent, NanoClaw, IronClaw, Zeroclaw。
    *   **具体诉求**：Agent 的自主文件读写权限引发恐慌。Hermes 和 NanoClaw 今日均爆发了跨 Profile 凭证泄露或任意文件读取漏洞；Zeroclaw 提出了物理隔离执行模式 RFC。**“最小权限原则”与沙箱隔离**已取代功能开发成为最紧迫的技术挑战。
*   **降本增效与订阅复用**
    *   **涉及项目**：Hermes Agent, NanoClaw, CoPaw。
    *   **具体诉求**：用户强烈要求支持 OAuth 登录复用现有 Claude/DeepSeek 订阅，而非强制使用昂贵的 API Key；同时 NanoClaw 社区呼吁默认开启 Prompt Caching。这表明 **Token 经济学**已成为用户部署 Agent 的核心考量。
*   **架构解耦与模块化**
    *   **涉及项目**：NanoBot, Zeroclaw, PicoClaw。
    *   **具体诉求**：NanoBot 分离 Config 与 Agent Loop，Zeroclaw 重构配置系统，PicoClaw 推进插件化。项目正纷纷摆脱“单体应用”架构，向支持热插拔、Out-of-tree 扩展的平台化架构演进。

## 5. 差异化定位分析

| 维度 | OpenClaw (通讯枢纽型) | NanoBot / Zeroclaw (架构演进型) | CoPaw (端侧重型) | Hermes / IronClaw (平台/插件型) |
| :--- | :--- | :--- | :--- | :--- |
| **核心阵地** | 即时通讯渠道 | 后端架构与模型兼容 | 桌面端 GUI 与自动化 | 插件生态与模型微调 |
| **目标用户** | 运维开发者、社群运营者 | 企业级开发者、架构师 | 个人极客、桌面用户 | 高阶玩家、模型开发者 |
| **技术重心** | 消息可靠性、多端同步 | 模块解耦、Provider 抽象 | 系统集成、GUI 控制 | 工具链安全、本地推理 |
| **当前痛点** | 消息丢失、状态管理混乱 | 配置迁移成本、API 规范 | 启动性能、兼容性 | 凭证泄露、权限绕过 |

## 6. 社区热度与成熟度

*   **快速迭代期**：**OpenClaw**、**IronClaw**。社区噪音大，反馈极其活跃，但问题频发，处于“痛并快乐着”的野蛮生长阶段。OpenClaw 的数据吞吐量标志其处于生态核心位置。
*   **质量巩固期**：**NanoBot**、**PicoClaw**。PR 合并质量高，社区互动理性，专注于修整地基，展现出较高的项目成熟度。
*   **功能攻坚期**：**CoPaw**、**NanoClaw**。正在攻克 GUI 自动化或多 Provider 架构等硬骨头，虽有波折（如回归 Bug、安全漏洞），但技术突破意图明显。
*   **稳定维护期**：**NullClaw**、**LobsterAI**、**Moltis**。更新平缓，主要响应特定长尾需求，架构相对稳定，适合作为下游依赖或特定场景使用。

## 7. 值得关注的趋势信号

1.  **Computer Use 成为新战场**：CoPaw 引入 UIA+Tauri 进行 GUI 控制，标志着 Agent 正从“对话交互”向“操作系统级操作”演进，未来的 Agent 将能直接操控桌面软件，这将极大拓展应用边界。
2.  **静默失败零容忍**：OpenClaw 和 NanoClaw 的用户反馈均指出，Agent 在遇到错误（截断、预算耗尽）时静默丢弃是最糟糕的体验。**可观测性**与**明确的错误反馈机制**将是下一阶段的基建重点。
3.  **“白嫖”经济驱动技术路线**：Hermes 和 CoPaw 的用户都在想方设法绕过 API 计费。开源项目若想获得广泛采用，必须考虑兼容个人订阅账号或提供极具性价比的本地模型方案。
4.  **安全审计迫在眉睫**：今日多起高危漏洞均源于 Agent 权限过大。建议开发者在下一版本迭代中，优先引入类似 IronClaw 提出的“显式审批边界”或 Zeroclaw 的“物理隔离模式”，否则企业级用户将难以放心部署。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-15)

## 1. 今日速览
NanoBot 项目今日保持**极高的开发活跃度**，呈现出“高强度重构与功能迭代并行”的态势。过去 24 小时内共有 **27 个 PR 被合并或关闭**，仅新增 2 个 Issue 且关闭了 3 个，显示出维护团队强大的问题消化能力和健康的代码流转效率。今日重点聚焦于**架构解耦**（Config 与 Agent Loop 分离）、**WebUI 功能对齐**（设置同步）以及**多渠道适配优化**（Telegram、Feishu、Anthropic）。整体项目正处于从功能堆叠向模块化、稳定性深化的转型期，代码质量管控明显加强。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日合并/关闭了多个关键 PR，显著提升了项目的稳定性与可维护性：

*   **架构重构与稳定性**：
    *   PR #4344 重构了 Config 与 Agent Loop 的边界，移除了运行时对具体工具实现的依赖，降低了模块耦合度。
    *   PR #4314 打破了工具配置模式的导入循环，进一步稳固了底层架构。
    *   PR #4210 修复了 Desktop 端重启后的 Token 和回放间隙问题，提升了桌面端的用户体验一致性。
    *   PR #4275 实现了对无效配置文件的“快速失败”机制，增强了系统的健壮性。

*   **WebUI 与前端体验**：
    *   PR #4339 显著改善了移动端的响应式布局，解决了侧边栏和设置项溢出问题。
    *   PR #4248 修复了 Token 使用热力图的时区渲染问题。
    *   PR #4177 优化了新手引导文档，降低了入门门槛。

*   **渠道与 Provider 适配**：
    *   PR #4277 修复了飞书 SDK 的延迟加载问题，解决了 WebSocket 事件循环冲突。
    *   PR #4269 优化了 Agent 达到最大迭代次数时的终止逻辑，确保用户能收到最终状态摘要。
    *   PR #4138 新增了 `tools.file.enable` 开关，允许完全禁用内置文件系统工具，满足高安全性沙箱部署需求。

## 4. 社区热点
尽管今日 Issues 评论数较少，但 PR 提交活跃，反映出开发者在具体实现层面的深度互动：

*   **[PR #4313] Feat(webui): config.json/webui parity**：该 PR 旨在消除 WebUI 设置面板与 `config.json` 之间的差异，支持 Temperature、Tool limits 等字段的读写同步。这反映了用户对**可视化配置管理**的强烈需求，是提升易用性的关键一环。
*   **[PR #4346 & Issue #4345] Image-strip fallback 修复**：开发者 @BearMett 在报告图片路径泄露问题的同日即提交了修复 PR，展现了社区对**隐私与安全**问题的极高敏感度和快速响应能力。

## 5. Bug 与稳定性
今日新增两个值得关注的 Bug 报告，均已识别或有修复意向：

1.  **[严重] API 兼容性缺陷**：
    *   **Issue #4309**：`nanobot serve` 的 `/v1/chat/completions` 端点始终返回 token 用量为 0。此问题严重影响基于 OpenAI 兼容接口的计费和监控系统集成。
    *   *状态*：Open，等待修复。

2.  **[中等] 安全/隐私隐患**：
    *   **Issue #4345**：图片剥离回退逻辑会将本地文件路径泄露给模型，且可能导致模型产生“看见图片”的幻觉。
    *   *状态*：已有修复 PR #4346 提交，将路径替换为 `[unviewable]` 标记。

3.  **[已修复] 关键兼容性问题**：
    *   **Issue #4333**：Anthropic Provider 对新版 `opus-4-8` 模型发送了已废弃的 `temperature` 参数导致 400 错误。该 Issue 已随相关 PR 修复关闭，确保了对最新模型的支持。

## 6. 功能请求与路线图信号
*   **自动化管理 GUI 化**：PR #4330 正在为 WebUI 添加自动化任务管理视图，表明项目正致力于将 Agent 的后台调度能力**前端可视化**，这是迈向成熟 Agent 平台的重要信号。
*   **精细化会话控制**：PR #4274 提出了按 Session 隔离 Prompt 历史记录的功能，反映出用户对**多会话并行处理**及**上下文隔离**的深层需求。
*   **环境变量配置增强**：PR #4273 增加了 `pathPrepend` 配置，显示出项目在工具执行环境配置上追求更细粒度的控制权。

## 7. 用户反馈摘要
*   **痛点：Token 统计缺失**：用户在使用 API 模式时发现无法获取 Token 消耗数据，这直接影响了成本控制和性能分析，是企业级用户的核心痛点。
*   **痛点：模型幻觉与隐私**：用户敏锐地发现了图片处理回退逻辑的副作用（路径泄露、幻觉），表明部分高阶用户正在深度使用多模态功能并关注安全边界。
*   **满意度**：从大量快速关闭的优化类 Issue（如 Telegram 分割代码块、Desktop 重启问题）来看，用户对项目快速修复小瑕疵的能力持积极态度。

## 8. 待处理积压
*   **关键 PR 待审查**：PR #4313 (WebUI配置同步) 和 PR #4344 (架构重构) 涉及核心逻辑，目前处于 Open 状态，建议维护者优先 Review 以避免阻塞后续功能开发。
*   **长期 Issue**：Issue #4309 (Token 统计归零) 涉及 API 核心接口规范，建议尽快排期修复，以免影响下游集成。

---
*分析师注：今日数据表明 NanoBot 正处于功能完善与架构健壮化的关键时期，社区对 Bug 响应极快，建议关注 WebUI 大重构带来的回归测试风险。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-15)

## 1. 今日速览
Zeroclaw 项目今日保持高活跃度开发状态，Issue 处理效率显著，共关闭 28 条 Issue，远超新开数量，表明团队正集中精力清理积压问题。虽然今日无新版本发布，但项目在底层架构与生态集成上取得重要进展，合并了包括**配置系统重构**和**技能管理改进**在内的多个关键 PR。值得注意的是，待合并 PR 数量达到 42 条，需关注代码审查与合并流速。整体来看，项目正处于功能迭代与稳定性优化的快车道。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日项目核心架构与生态集成均有实质性突破，主要体现在以下几个方面：

*   **架构重构与核心功能**：合并了重大 PR [#7594](https://github.com/zeroclaw-labs/zeroclaw/pull/7594)，实现了配置系统的类型驱动重构，消除了硬编码特例，提升了配置的可维护性。同时，技能系统迎来重要更新，PR [#6667](https://github.com/zeroclaw-labs/zeroclaw/pull/6667) 合并，引入了后台审查分支与技能管理工具，增强了 Agent 的自我进化能力。
*   **Bug 修复与体验优化**：修复了 Quickstart 在非 TTY 环境下的死循环问题 ([#7513](https://github.com/zeroclaw-labs/zeroclaw/pull/7513))，防止了无限输出导致的资源耗尽；修复了网关中 `ask_user` 工具因通道关闭导致的即时失败问题 ([#7664](https://github.com/zeroclaw-labs/zeroclaw/pull/7664))。
*   **生态集成**：随着多个集成相关 Issue 的关闭（如 SMS 渠道、智能家居工具等），结合之前的功能开发，项目正迅速扩展其对第三方服务（如 Twilio 兄弟渠道、Spotify、Sonos 等）的支持范围。

## 4. 社区热点
今日社区讨论焦点集中在易用性与安全性架构上：

*   **[Issue #3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) [CLOSED]**：用户强烈呼吁提供全功能的 Docker 镜像。目前为节省内存默认关闭部分功能（如 WhatsApp），但这增加了非技术用户的门槛。该 Issue 评论数达 13 条，反映了用户对“开箱即用”的迫切需求。
*   **[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) [OPEN]**：关于工作流车道、看板自动化和标签清理的 RFC 提案正在讨论中（11 条评论）。这标志着项目正在优化社区治理流程，以应对日益增长的贡献者规模。
*   **[Issue #6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) [OPEN]**：提出了“Air-gapped execution mode”（物理隔离执行模式）的 RFC，旨在通过 Unix Socket 实现离线 Agent 与在线守护进程的隔离，满足高安全场景需求。此提案引发了关于架构安全的深入探讨。

## 5. Bug 与稳定性
今日修复了多个中高风险 Bug，但仍存在关键未解决问题：

*   **已修复 (High Risk)**：
    *   **[Issue #5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528)**：修复了 Email 渠道配置逻辑错误，该问题被标记为 S0 级别（数据丢失/安全风险）。
    *   **[Issue #6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474)**：修复了 Slack 渠道中处理用户请求时重复调用 LLM 的问题。
    *   **[PR #7660](https://github.com/zeroclaw-labs/zeroclaw/pull/7660)**：正在处理 Base64 凭证未引用时的脱敏逻辑漏洞，防止敏感信息泄露。

*   **待解决 (Critical)**：
    *   **[Issue #7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470) [OPEN]**：Delegate Agent 模式在处理空 `risk_profile.allowed_tools` 时存在逻辑缺陷，导致多智能体协作受阻。该问题被标记为 S1（workflow blocked），目前状态为 `in-progress`，需高度关注。

## 6. 功能请求与路线图信号
*   **安全隔离架构**：[Issue #6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) 提出的物理隔离模式 RFC，若被采纳，将成为 Zeroclaw 进入高合规性企业市场的关键里程碑。
*   **本地 CA 证书支持**：[Issue #1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458) 的关闭表明项目已支持自定义 CA，解决了企业内网部署的痛点。
*   **多模态与渠道扩展**：社区持续推动对新模型提供商（如 Inception Labs Mercury, Lambda AI）和通信渠道（Vonage, Sinch 等）的支持，显示出项目定位正从单一 Agent 框架向通用 AI 接入平台演进。

## 7. 用户反馈摘要
*   **部署痛点**：用户反馈默认 Docker 镜像功能裁剪过多，导致需手动配置或编译，期望官方提供“All-in-One”镜像 ([#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642))。
*   **配置复杂度**：配置文件嵌套过深容易导致字段被静默忽略，用户期望有更明确的校验警告 ([PR #7617](https://github.com/zeroclaw-labs/zeroclaw/pull/7617))。
*   **平台兼容性**：Windows 平台的编译问题 ([#7452](https://github.com/zeroclaw-labs/zeroclaw/issues/7452)) 已解决，用户对跨平台支持的敏感度较高。

## 8. 待处理积压
*   **[PR #5892](https://github.com/zeroclaw-labs/zeroclaw/pull/5892)**：关于 Provider 运行时 (`tool_choice` 为空及孤儿 tool_use) 的修复 PR 仍处于 Open 状态，且标记为 `stale-candidate`。这是一个高风险的生产环境阻碍问题，建议维护者优先合并或跟进。
*   **[Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)**：关于恢复 153 个被回滚提交的审计任务仍在进行中，涉及大量历史代码的找回，需持续投入资源。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-15)

## 1. 今日速览
Hermes Agent 项目今日维持高活跃度，Issue 与 PR 更新量均达到 50 条，显示出社区与开发团队紧密的互动。今日焦点集中在**安全性漏洞披露**（凭证文件隔离失效）与**核心功能修复**（Matrix 消息风暴、CLI 输出截断）。虽然今日无新版本发布，但积压的 43 个待合并 PR 暗示下一次版本更新将包含大量功能增强（如 Unsloth Studio 支持、宠物系统等）。值得注意的是，长期困扰用户的“输出截断”问题终于有了定论，相关 Issue 已关闭。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 **2 个 PR 合并/关闭**，**7 个 Issue 关闭**。整体进展主要体现在稳定性修复与代码质量提升：

*   **Docker 部署稳定性修复**：PR #46289 修复了 S6 overlay 容器因陈旧日志锁文件导致启动循环卡死的问题，显著提升了 Docker 环境下的鲁棒性。
*   **工具权限控制修复**：PR #46348 修正了 `disabled_toolsets` 配置失效的问题，确保当用户显式禁用 memory 工具集时，相关依赖工具不会被错误注入。
*   **关键 Issue 解决**：备受关注的长文本输出截断问题（Issue #7237）已关闭，意味着用户在进行长对话或代码生成时将不再频繁遇到中断。

## 4. 社区热点
今日社区讨论热度最高的话题集中在**降本增效**与**远程访问**：

*   **[Feature]: Claude Agent SDK model provider with subscription OAuth** (Issue #25267)
    *   **热度**：👍 21 | 评论 7
    *   **分析**：这是目前点赞数最高的需求。用户强烈希望能直接利用现有的 Claude 个人订阅额度运行 Hermes，而非通过 API 付费，以避免“双重付费”。这反映出个人用户对 Agent 运行成本的敏感度极高。
*   **[CLOSED] [Bug]: Error: Response truncated due to output length limit** (Issue #7237)
    *   **热度**：评论 46
    *   **分析**：作为今日评论最多的 Issue，该问题的解决标志着系统在处理长文本流式输出时的稳定性得到了社区验证，大幅改善了 CLI 和 Gateway 的用户体验。
*   **Add --host and CORS config for hermes dashboard** (Issue #10567)
    *   **热度**：👍 12 | 评论 10
    *   **分析**：目前 Dashboard 强制绑定 localhost，限制了用户通过 Tailscale 等 VPN 进行远程管理的灵活性，社区对网络配置解耦的呼声很高。

## 5. Bug 与稳定性
今日报告了多个严重级别的 Bug，尤其是涉及安全的隔离问题：

*   **P1 [Security]: 跨 Profile 凭证泄露风险** (Issue #46411, #46413)
    *   **详情**：Agent 的文件读取工具和 Desktop 文件预览功能未能有效隔离不同 Profile 下的敏感文件（如 `auth.json`），导致潜在的安全风险。
    *   **状态**：**暂无修复 PR**，建议立即关注。
*   **P1 [Bug]: Matrix 协议消息风暴与密钥耗尽** (Issue #46310)
    *   **详情**：发送媒体消息时，每条消息都重新初始化 E2EE 连接，导致接收方一次性密钥耗尽并丢包。
    *   **状态**：**已有修复 PR #46407**，通过复用单一 Adapter 解决连接风暴。
*   **P2 [Bug]: WebSocket 超时阻塞** (Issue #44560)
    *   **详情**：`model.options` 处理器进行同步 HTTP 调用，阻塞了主线程，导致 WebSocket 连接超时断开。

## 6. 功能请求与路线图信号
结合今日活跃的 PR 与 Issue，项目演进方向清晰指向**插件化**与**多模态体验**：

*   **本地微调工作流**：PR #46451 新增 Unsloth Studio 插件，结合 PR #46457 的 Plugin Doctor（插件体检工具），表明项目正在构建完整的“本地模型微调-部署-诊断”闭环。
*   **趣味化与 UI 增强**：PR #46464 提出在 CLI/TUI/Desktop 全端引入 Petdex 动画宠物系统，PR #43971 引入云端频道控制，显示项目在提升交互趣味性和云端协同方面持续投入。
*   **模型生态扩展**：PR #5521 正在推进 DeepInfra 作为新的 LLM provider，支持 100+ 开源模型，这可能是回应社区对 Claude 订阅支持的一种替代方案。

## 7. 用户反馈摘要
*   **真实痛点**：
    *   **截断问题**：用户反馈在 CLI 和 Telegram/Discord 网关使用中，长回复经常中断，体验破碎。
    *   **双重付费**：很多用户希望 Hermes 能像 Codex 一样直接使用现有的 LLM 订阅账户，而不是必须使用昂贵的 API Key。
    *   **Desktop 兼容性**：Intel Mac 用户（Issue #42199）对缺乏 x86_64 支持表示失望，目前无法运行 Desktop 版本。
*   **满意点**：用户对 Docker 镜像的快速修复表示认可，对 Matrix 等 Gateway 协议的深度支持持积极态度。

## 8. 待处理积压
*   **安全漏洞响应**：Issue #46411 与 #46413 揭示的凭证读取漏洞目前仅有 Issue 记录，未见官方修复进展，建议维护者优先排查。
*   **高价值 PR 搁置**：PR #5521 (DeepInfra 支持) 已开启两个月，PR #46407 (Matrix 修复) 已提交，建议优先合并以解决关键功能缺失。
*   **长期未决需求**：Issue #42199 (Intel Mac 支持) 依然开放，影响了部分存量硬件用户的使用。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-15)

## 1. 今日速览
PicoClaw 项目今日保持较高的开发活跃度，共处理 **14 项** Issue/PR 更新。项目重心显著偏向**系统稳定性与代码健壮性**，合并了 5 个 PR，其中 4 个专注于错误处理和资源清理逻辑的修复。发布了最新的 **Nightly Build (v0.2.9-nightly)**，包含最新的架构优化。社区方面，新报告了关于安全配置迁移后的工具失效问题，显示出用户正积极跟进最新版本架构变更。整体来看，项目正处于“修复与重构”阶段，为下一阶段的稳定版发布做准备。

## 2. 版本发布
- **[nightly: Nightly Build v0.2.9-nightly.20260615.13a38bd1](https://github.com/sipeed/picoclaw/releases/tag/nightly)**
  - **类型**: 自动化构建版本
  - **说明**: 此版本为 `v0.2.9` 分支的最新 nightly 构建，涵盖了截至今日的最新代码提交。
  - **注意**: 官方提示可能不稳定，建议测试环境使用。本次构建包含了针对 Agent 循环重载、TTS 错误处理及文件系统资源管理的修复。

## 3. 项目进展
今日共有 **5 个 PR 被合并**，显著提升了后端稳定性与代码质量：

- **核心架构修复**：[PR #2904](https://github.com/sipeed/picoclaw/pull/2904) (Closed) 修复了 Agent 循环重载时的 panic 清理问题，移除了可能阻塞的分离协程，增强了核心 Agent 进程的稳定性。
- **错误处理增强**：今日合并了多个针对错误忽略问题的修复，体现了团队对细节的打磨：
  - [PR #3124](https://github.com/sipeed/picoclaw/pull/3124)：修复 TTS API 非 200 响应时的错误处理，防止网络截断导致的信息丢失。
  - [PR #3122](https://github.com/sipeed/picoclaw/pull/3122)：修复 Evolution 模块写入文件时 `Close()` 错误被静默忽略的问题，防止磁盘满或 NFS 错误被掩盖。
  - [PR #3121](https://github.com/sipeed/picoclaw/pull/3121)：重构 OpenAI 兼容层日志，移除 `log.Printf`，统一使用结构化日志。

## 4. 社区热点
今日社区关注度较高的问题主要集中在**配置解析**与**兼容性**方面：

- **[Issue #2978](https://github.com/sipeed/picoclaw/issues/2978) (CLOSED)**：关于添加 `omniroute` 作为 Provider 的请求。该 Issue 虽已关闭，但引发了关于如何自定义配置 Combo 的讨论，反映了用户对扩展路由功能的强需求。
- **[Issue #3041](https://github.com/sipeed/picoclaw/issues/3041)**：关于 `mcp add` 命令解析全局标志错误的 Bug。该问题导致 HTTP/SSE 添加失败，影响用户对 MCP 服务器的配置体验，目前仍处于 Open 状态，需维护者关注。

## 5. Bug 与稳定性
今日新增/活跃的 Bug 报告显示了近期架构调整带来的潜在影响：

1.  **[严重] API 密钥迁移导致工具失效** ([Issue #3125](https://github.com/sipeed/picoclaw/issues/3125))
    - **现象**：架构更新迁移 API 密钥至 `.security.yml` 后，`web_search` 工具在使用 Brave API 时静默失败，返回无结果。
    - **状态**：新开 Issue，暂无修复 PR，需优先排查。
2.  **[中等] iOS Safari 兼容性** ([Issue #3090](https://github.com/sipeed/picoclaw/issues/3090))
    - **现象**：iOS 16.4 以下版本的 Safari 无法正常使用 Panel。
    - **环境**：用户在 Raspberry Pi OS 部署环境下遇到。
3.  **[中等] Matrix 用户 ID 解析错误** ([Issue #3044](https://github.com/sipeed/picoclaw/issues/3044))
    - **现象**：`allow_from` 配置无法正确识别包含冒号的标准 Matrix ID (`@localpart:domain`)，导致消息被拒绝。

## 6. 功能请求与路线图信号
- **扩展性增强**：[PR #3120](https://github.com/sipeed/picoclaw/pull/3120) 提议添加 `RegisterChannelSettings` hook，允许第三方模块注册 Channel。这表明项目正在向更模块化、支持“Out-of-tree”（非主干集成）插件的方向演进，降低用户 Fork 修改源码的需求。
- **远程代理模式**：[PR #3118](https://github.com/sipeed/picoclaw/pull/3118) 为 `picoclaw agent` 添加了远程 WebSocket 模式。这可能是为了支持分布式部署或远程调试场景，预示着 PicoClaw 正从单机工具向可组网的智能体框架演进。

## 7. 用户反馈摘要
- **配置迁移痛点**：有用户反馈最近的架构更新破坏了现有的 API Key 配置生效方式（Issue #3125），说明版本升级指南或迁移脚本可能存在缺失，建议维护者补充迁移文档。
- **命令行体验**：用户在使用 CLI 添加 MCP 服务时遇到参数解析问题（Issue #3041），认为命令行参数解析逻辑不够直观，容易混淆全局标志与位置参数。
- **多平台兼容**：部分用户在较旧的移动端系统（iOS < 16.4）遇到 Web Panel 不可用问题，建议关注前端 Polyfill 或降级提示。

## 8. 待处理积压
以下重要 Issue/PR 状态为 Stale 或长期未决，建议维护者尽快处理：

- **[PR #2975](https://github.com/sipeed/picoclaw/pull/2975)**：关于 Telegram 群组中将回复视为 Mention 的功能增强。该 PR 已开启数周，功能逻辑明确，建议尽快合并以提升即时通讯场景体验。
- **[Issue #3044](https://github.com/sipeed/picoclaw/issues/3044)**：Matrix ID 解析问题导致消息被静默拒绝，影响特定协议用户的正常使用，属于功能性阻断 Bug。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-15)

## 1. 今日速览
NanoClaw 项目今日呈现出“核心功能大步迈进，安全隐患集中暴露”的态势。开发团队合并了 5 个关键 PR，成功落地了多 Provider 架构重构与 Codex v2 支持，标志着项目在模型兼容性上取得重大突破。然而，社区安全研究员今日提交了 3 个严重安全漏洞，涉及权限绕过与文件泄露，给项目安全性敲响警钟。整体活跃度高，Issues 与 PR 互动频繁，项目正处于架构升级与安全加固的博弈期。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 5 个 PR 合并入主分支，显著提升了系统的扩展性与稳定性：

*   **架构重构：Provider 选择与迁移机制落地** ([PR #2756](https://github.com/nanocoai/nanoclaw/pull/2756))
    合并了 `feat(providers): operator-driven provider selection`，引入了显式的 Provider 选择机制、注册表及内存迁移功能。这意味着用户可以在不同模型后端（如 Codex）之间无缝切换，为多模型支持打下基础。
*   **新功能：Codex Agent Provider v2 集成** ([PR #2757](https://github.com/nanocoai/nanoclaw/pull/2757))
    合并了全新的 Codex payload v2，支持仅通过 Vault 认证，并将 Codex 正式纳入 Agent Provider 体系，丰富了 Agent 的能力边界。
*   **工程化：CLI 工具管理优化** ([PR #2758](https://github.com/nanocoai/nanoclaw/pull/2758))
    将全局 Node CLI 安装改为由 `cli-tools.json` 数据驱动，简化了后续工具集成的流程。
*   **文档修复** ([PR #2764](https://github.com/nanocoai/nanoclaw/pull/2764), [PR #2769](https://github.com/nanocoai/nanoclaw/pull/2769))
    修复了 `CLAUDE.md` 中的文件路径错误，并完善了 Codex 认证步骤的文档说明。

## 4. 社区热点
今日社区关注焦点集中在**安全性**与**性能优化**：

*   **安全审计风暴**：用户 @YLChen-007 在今日连续提交了 3 个安全相关 Issue ([#2762](https://github.com/nanocoai/nanoclaw/issues/2762), [#2761](https://github.com/nanocoai/nanoclaw/issues/2761), [#2760](https://github.com/nanocoai/nanoclaw/issues/2760))，揭露了从隐藏参数注入到本地文件泄露等一系列高危风险，引发了社区对 Agent 自修改权限控制的高度关注。
*   **性能优化提议**：Issue [#2768](https://github.com/nanocoai/nanoclaw/issues/2768) 指出 Claude Provider 默认未开启 Prompt Caching，导致长上下文场景下成本与延迟双增，引起了开发者的热烈讨论，这是企业级用户的核心痛点。

## 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，按严重程度排序如下：

### 🔴 严重
1.  **本地网关认证绕过** ([Issue #2761](https://github.com/nanocoai/nanoclaw/issues/2761))
    本地 Webhook 缺乏认证，攻击者可利用此漏洞绕过审批流程。目前暂无官方修复 PR，建议优先处理。
2.  **任意本地文件窃取** ([Issue #2760](https://github.com/nanocoai/nanoclaw/issues/2760))
    `send_file` 工具未限制绝对路径读取，可能导致敏感文件外泄。
3.  **MCP Server 隐藏参数注入** ([Issue #2762](https://github.com/nanocoai/nanoclaw/issues/2762))
    审批流未展示完整的 `args` 和 `env`，可能导致恶意配置被持久化。

### 🟠 中等
1.  **预算耗尽时静默丢弃回话** ([Issue #2751](https://github.com/nanocoai/nanoclaw/issues/2751))
    LLM 预算耗尽时报错未被正确传递，导致用户无响应。**已提交修复 PR** ([PR #2759](https://github.com/nanocoai/nanoclaw/pull/2759))，待合并。
2.  **Codex 图片生成丢失** ([PR #2770](https://github.com/nanocoai/nanoclaw/pull/2770))
    Codex 生成的图片事件未被正确处理和投递，导致用户收不到图片。

## 6. 功能请求与路线图信号
*   **Prompt Caching 默认开启** ([Issue #2768](https://github.com/nanocoai/nanoclaw/issues/2768))
    用户呼吁在 Claude Provider 中默认启用 Prompt Caching 以降低成本。鉴于 Claude 模型的普及度，此改动极有可能被纳入下一版本优化计划。
*   **Telegram MarkdownV2 原生支持** ([Issue #2767](https://github.com/nanocoai/nanoclaw/issues/2767))
    适配器已更新，建议移除旧的 Markdown 清洗代码。这是一个清晰的技术债务清理信号，预计很快会有相关 PR 提交。

## 7. 用户反馈摘要
*   **痛点：安全边界模糊**。多位用户反馈 Agent 的自修改权限过大，且审批界面信息不全，导致用户不敢轻易授权新增 MCP Server。
*   **痛点：错误提示缺失**。当由于预算或限流导致 Agent 停止工作时，用户只看到无响应，而没有明确的错误提示，这降低了调试效率。
*   **期待：多模型无缝切换**。从 PR #2756 的讨论可以看出，社区对“带着记忆切换模型”的功能期待已久，今日的合并标志着该需求已得到响应。

## 8. 待处理积压
*   **高危安全 Issue 待修复**：今日爆出的 3 个安全漏洞尚未有明确修复进度，建议维护者 @qwibitai 及其他核心成员尽快介入或关联至现有的 [PR #2732](https://github.com/nanocoai/nanoclaw/pull/2732)（安全加固相关）。
*   **Codex 图片投递修复**：[PR #2770](https://github.com/nanocoai/nanoclaw/pull/2770) 解决了新 Provider 的功能缺失，建议尽快 Review 合并，避免 v2 功能受损。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-06-15)

## 1. 今日速览
NullClaw 项目今日整体活跃度较为平缓，暂无代码合并或版本发布，主要动态集中在社区功能建议上。新增一条针对 Azure OpenAI LLM Provider 的高质量功能请求，聚焦于企业级身份认证支持。这表明项目正吸引更多企业级用户关注，对安全合规性的需求日益凸显。目前项目代码库稳定，无新增 Bug 报告。

## 2. 版本发布
无。

## 3. 项目进展
今日无合并或关闭的 Pull Request。代码库核心逻辑未发生变更，项目处于稳定维护状态。

## 4. 社区热点
今日唯一的活跃议题是 **Issue #955**。
*   **链接**: [nullclaw/nullclaw Issue #955](https://github.com/nullclaw/nullclaw/issues/955)
*   **分析**: 该 Issue 由 @kunalk16 提出，请求为 Azure OpenAI LLM Provider 添加基于身份的认证支持。
*   **核心诉求**: 用户希望在调用 Azure OpenAI 时，能够利用本地开发环境中的 `az CLI` 登录凭证（通过 `DefaultTokenCredential`），而非传统的 API Key。
*   **背景**: 这一需求源于企业安全策略的限制。在某些 Azure 订阅中，安全策略禁止用户直接使用 API Key，强制要求通过 Azure Active Directory (AAD) 进行身份认证。该议题反映了 NullClaw 在企业级生产环境部署中遇到的合规性挑战，社区正在寻求更安全、无缝的认证方案。

## 5. Bug 与稳定性
今日无新增 Bug 报告、崩溃或回归问题。项目稳定性保持良好。

## 6. 功能请求与路线图信号
*   **新功能请求**: **Azure OpenAI 身份认证增强** ([Issue #955](https://github.com/nullclaw/nullclaw/issues/955))
    *   **详情**: 支持集成 `DefaultTokenCredential`，允许通过 Azure CLI 凭证自动认证。
    *   **路线图信号**: 这是一个强烈的企业级功能信号。随着 AI 智能体在企业内部的部署增加，绕过硬编码 API Key、使用托管身份或开发者凭证是标准的安全实践。若该功能被纳入，将显著提升 NullClaw 在 Azure 生态中的安全性和易用性，极有可能成为下一版本的重点更新方向。

## 7. 用户反馈摘要
根据今日 Issue #955 的反馈，用户痛点主要集中在**企业安全合规与便利性的冲突**上：
*   **痛点**: 现有的 API Key 认证方式无法满足部分企业严格的安全策略（禁止 API Key），导致用户无法在特定订阅下正常使用 NullClaw。
*   **期望**: 用户希望通过复用本地的 `az login` 环境，实现无感知的开发体验，避免在代码或配置中暴露敏感密钥。

## 8. 待处理积压
今日新增待处理 Issue #955，目前尚无维护者回复。鉴于该需求涉及核心 LLM Provider 的认证逻辑重构且符合行业安全标准，建议维护团队尽早评估并反馈，以免阻塞企业用户的接入流程。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 (2026-06-15)

## 1. 今日速览
IronClaw 项目今日保持**高度活跃**状态，核心开发重心集中在 "Reborn" 架构的稳定性修复与功能完善上。过去24小时内，Issues 活跃度达到 43 条（其中新增/活跃 36 条），PR 更新达 48 条，显示出团队正在密集处理反馈与迭代。今日亮点包括修复了 Shell 工具的两个**高危安全漏洞**、显著改进了 GitHub 扩展的集成体验，以及提出了“AI 原生工程团队”的效能提升路线图。整体来看，项目正处于功能修补与安全加固并行的关键阶段。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 **14 个 PR 合并/关闭**，主要推进了以下关键领域：

*   **Reborn 核心功能完善**：PR #4738 (Closed) 完成了 WebChat v2 SPA 的附件上传 UX 支持，解决了 Reborn 架构中附件处理的关键缺口。PR #4836 (Closed) 实现了运行时上下文特性，向模型暴露连接的通道和交付状态，增强了 Agent 的环境感知能力。
*   **GitHub 扩展体验优化**：今日有一系列针对性修复 PR (如 #4894, #4893, #4888, #4891)，统一优化了 GitHub 仓库数据的获取逻辑，修复了 Issue 列表过滤问题，并将只读 API 权限默认设为 "allow"，大幅减少了冗余的审批弹窗。
*   **架构重构**：Issue #4851 和 #4848 已关闭，标志着 Trusted-trigger origin 认证流程和 auth-resume 匹配逻辑的重构工作取得了阶段性成果。

## 4. 社区热点
今日讨论最活跃的内容集中在 UI 交互与底层安全机制：

*   **[Issue #4857]** [OPEN] **Reborn 设置状态误导**：在未配置 LLM 提供者时，设置页面错误地将 NEAR AI 标记为 ACTIVE，引发了对新用户引导体验的讨论。
    *   链接: [nearai/ironclaw Issue #4857](https://github.com/nearai/ironclaw/issues/4857)
*   **[Issue #4887]** [OPEN] **MCP 工具调用恢复失败**：Provider-backed MCP 工具在批准后恢复调用时可能因 `input_ref` 过期而失败，涉及核心调用链路的状态管理问题。
    *   链接: [nearai/ironclaw Issue #4887](https://github.com/nearai/ironclaw/issues/4887)
*   **[Issue #4878]** [OPEN] **工程效能提升计划**：项目核心贡献者提出了以 IronClaw 辅助 IronClaw 开发的宏大计划，旨在建立 AI 原生工作流（包括 PR 预览、自动 Code Review 等）。
    *   链接: [nearai/ironclaw Issue #4878](https://github.com/nearai/ironclaw/issues/4878)

## 5. Bug 与稳定性
今日报告了多个关键 Bug，其中包含两个严重安全漏洞：

*   **🔴 严重**:
    *   **[Issue #4865] & [Issue #4864] Shell 审批边界绕过**：发现内置 Shell 工具存在安全降级漏洞，恶意命令可通过 `env /bin/sh -c` 包装或继承之前的自动审批来绕过显式审批机制。
        *   链接: [nearai/ironclaw Issue #4865](https://github.com/nearai/ironclaw/issues/4865)
*   **🟠 中等**:
    *   **[Issue #4874] WebChat v2 非安全上下文错误**：在非 localhost 环境通过 HTTP 访问时，发送消息抛出 `Illegal invocation` 错误。
        *   链接: [nearai/ironclaw Issue #4874](https://github.com/nearai/ironclaw/issues/4874)
    *   **[Issue #4892] 日志接口权限泄露**：非操作员用户可以看到 Logs 入口，且 403 错误被前端吞没显示为空白流。
        *   链接: [nearai/ironclaw Issue #4892](https://github.com/nearai/ironclaw/issues/4892)
    *   **[Issue #4884] Google Calendar 扩展引导缺陷**：认证提示错误地索要 Access Token 而非引导 OAuth 流程。
        *   链接: [nearai/ironclaw Issue #4884](https://github.com/nearai/ironclaw/issues/4884)

## 6. 功能请求与路线图信号
*   **AI 原生工程工作流**：Issue #4878 及其子任务 (#4880, #4881, #4882, #4883) 提出了明确的路线图信号，计划引入 Coding Agent Cloud Workflow、PR 自动预览部署和测试覆盖率自动追踪。这表明项目正在从单纯的 Agent 框架向“自举”的开发工具链演进。
    *   链接: [nearai/ironclaw Issue #4878](https://github.com/nearai/ironclaw/issues/4878)
*   **多模态支持增强**：PR #4871 正在推进视觉模型的图片附件支持，响应了 Issue #4644 的需求，预计在下一阶段合并。
    *   链接: [nearai/ironclaw PR #4871](https://github.com/nearai/ironclaw/pull/4871)

## 7. 用户反馈摘要
根据 Issue 评论分析，用户及测试人员的主要痛点如下：
*   **安装引导割裂**：Issue #4890 和 #4886 反映扩展安装流程在 Registry、Installed 和 Configure 之间跳转，缺乏连贯性，用户不知道下一步该做什么。
*   **权限与状态感知混乱**：用户在未配置 Provider 时看到错误的 "Active" 状态 (#4857)，或在使用 GitHub/Google 扩展时遭遇权限困扰 (#4884)，说明 "Reborn" 版本的 UX 引导仍需打磨。
*   **安全性担忧**：开发者对 Shell 工具的审批机制绕过表示了严重关切，强调需要更严格的边界控制。

## 8. 待处理积压
*   **高危安全漏洞待修复**：Issue #4865 与 #4864 涉及 Shell 命令执行的安全性，目前处于 Open 状态，建议维护者优先处理并发布补丁。
*   **大型 PR 待 Review**：PR #4838 (线程门控反馈) 和 PR #4871 (图片附件支持) 均为 XL 规模，处于 Open 状态，涉及核心逻辑变更，需投入较大 Review 精力。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-15)

## 1. 今日速览
过去24小时内，LobsterAI 项目活跃度适中，主要集中在代码合并与积压任务清理上。虽然未发布新版本，但项目合并了重要的文档分享功能增强，并修复了定时任务的顽固 Bug。值得注意的是，今日有多个长期未处理的 Issue 和 PR 被标记为 `[stale]`，显示出维护团队正在进行积压工作清理。整体来看，项目正在稳步推进 Artifact 生态功能的完善，但社区反馈的响应速度有待提升。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 2 个 PR 关闭/合并，显著提升了文档处理能力和系统稳定性：

*   **文档 Artifact 分享与预览优化** ([#2159](https://github.com/netease-youdao/LobsterAI/pull/2159)) [CLOSED]
    *   **内容**：该 PR 大幅增强了 Artifact 功能，新增了对 DOCX、PPTX、XLSX、PDF 等多种文档格式的分享与预览支持。技术层面引入了文档打包、类型校验、大小限制，并优化了 DOCX 分页、PDF 原生预览兜底及表格渲染逻辑。
    *   **意义**：填补了文档类数据在 AI 会话中流转与展示的空白，极大提升了用户在处理复杂文档时的交互体验。

*   **修复定时任务“幽灵会话”问题** ([#1465](https://github.com/netease-youdao/LobsterAI/pull/1465)) [CLOSED]
    *   **内容**：解决了用户删除定时任务后，重启应用仍会出现空内容“幽灵会话”的数据残留问题。
    *   **意义**：修复了影响用户体验的数据一致性问题，消除了定时任务模块的稳定性隐患。

## 4. 社区热点
今日讨论与活跃度主要集中在长期未处理的 PR 和 Issue 上，维护者通过标记 `[stale]` 对积压内容进行了批量更新：

*   **会话内搜索功能增强** ([#1429](https://github.com/netease-youdao/LobsterAI/pull/1429)) [OPEN]
    *   **热点分析**：该 PR 引入了基于 `mark.js` 的会话内搜索高亮功能，支持快捷键 (`Cmd/Ctrl+F`) 和实时计数。这是一个高价值的功能改进，解决了用户在长上下文中查找信息的痛点，建议优先合并。
*   **UI 展示问题反馈** ([#1434](https://github.com/netease-youdao/LobsterAI/issues/1434), [#1435](https://github.com/netease-youdao/LobsterAI/issues/1435))
    *   **热点分析**：用户反馈了中文环境下搜索为空时的英文提示问题以及长名称导致的 UI 溢出问题。这些细节问题直接影响了产品的国际化体验和 UI 健壮性。

## 5. Bug 与稳定性
今日暴露的 Bug 主要集中在 UI 交互与国际化适配上，均为非严重功能性故障：

*   **[低] 国际化文案缺失** ([#1434](https://github.com/netease-youdao/LobsterAI/issues/1434))
    *   **现象**：在中文语言环境下，Agent 技能 Tab 页搜索无数据时，提示语及按钮仍显示为英文。
    *   **状态**：Open，待修复。
*   **[低] UI 布局溢出** ([#1435](https://github.com/netease-youdao/LobsterAI/issues/1435))
    *   **现象**：新建自定义 Agent 时，若名称过长，文本会直接超出弹框边界，未做截断或换行处理。
    *   **状态**：Open，待修复。

## 6. 功能请求与路线图信号
从现有的活跃 PR 中可以窥见项目后续的演进方向：

*   **会话可靠性增强**：PR [#1430](https://github.com/netease-youdao/LobsterAI/pull/1430) 提出在会话运行期间阻止系统休眠，解决长时间任务中断问题。这表明项目正致力于提升 AI Agent 执行重任务的稳定性。
*   **运行状态可视化**：PR [#1431](https://github.com/netease-youdao/LobsterAI/pull/1431) 增加了会话运行计时器。这与阻止休眠功能相辅相成，强化了用户对 AI 执行过程的心理预期和掌控感。
*   **文档处理深度集成**：基于今日关闭的 PR #2159，未来版本将更侧重于多模态内容（Office 文档）在 AI 工作流中的直接预览与交互。

## 7. 用户反馈摘要
*   **痛点**：用户对细节体验敏感，特别是国际化（i18n）的完整性。Issue #1434 指出在中文环境下仍出现英文提示，影响了沉浸感。
*   **场景**：Agent 的自定义配置场景（Issue #1435）暴露了边界情况处理的不足，用户在配置复杂名称时遇到了 UI 适配问题。
*   **满意度**：社区对功能深度的需求较高，如 PR #1429 提出的会话内搜索功能，反映了用户处理长上下文对话的强烈需求。

## 8. 待处理积压
以下关键 PR 和 Issue 长期未合并或关闭，提示项目可能存在审核资源不足或功能排期冲突：

*   **PR #1429 (会话内搜索)**：创建于 4 月初，提供了完善的搜索高亮方案，至今未合并。建议维护者重点关注，该功能对提升易用性价值较大。
*   **PR #1430 (阻止系统休眠)** & **PR #1431 (运行计时器)**：均为提升 Agent 运行体验的重要补丁，积压超过两个月。
*   **Issue #1434 & #1435**：作为 4 月份提出的 UI/国际化问题，至今未修复可能影响新用户的初次使用体验。

---
*分析师建议：项目当前核心功能推进扎实，但需注意“僵尸” Issue 和 PR 的清理与跟进，尤其是涉及基础体验的 UI 和国际化问题，建议纳入近期的小版本迭代中快速解决。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-15)

## 1. 今日速览
过去 24 小时内，Moltis 项目整体活跃度处于低位，代码库无变更，未发布新版本。社区方面仅产生一条新的功能请求，聚焦于底层架构的性能优化。项目当前处于平稳维护状态，无紧急 Bug 干扰，但需关注社区对高性能 Rust 后端的潜在需求。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
本日无合并或关闭的 Pull Request，项目代码库未见实质性推进。核心开发活动暂歇，无新增功能落地或缺陷修复。

## 4. 社区热点
今日唯一的社区动态来自于新开 Issue，尽管暂无评论互动，但其技术方向值得关注：

*   **Issue #1123 [Feature]: Add pure-Rust turbovec as an alternative memory backend**
    *   **链接**: [moltis-org/moltis Issue #1123](https://github.com/moltis-org/moltis/issues/1123)
    *   **分析**: 该请求由用户 @joeblew999 提出，建议引入纯 Rust 编写的 `turbovec` 作为可选内存后端。这一提议直指“极致边缘压缩”，反映出部分开发者对 Moltis 在资源受限环境（如边缘计算、嵌入式设备）下运行的性能有极高要求。这表明社区对项目的技术期待正从功能完整性向高性能与轻量化延伸。

## 5. Bug 与稳定性
*   过去 24 小时内未收到新的 Bug 报告、崩溃反馈或安全性问题。
*   项目当前稳定性良好，未发现阻碍使用的严重缺陷。

## 6. 功能请求与路线图信号
*   **新增需求**: Issue #1123 提出了 **Rust 内存后端** 的需求。
    *   **路线图信号**: 虽然目前尚无相关 PR，但该需求若被采纳，意味着项目可能在未来向 **Polyglot（多语言架构）** 或 **Rust 重写核心组件** 的方向发展。这将显著提升 Moltis 作为个人 AI 助手在本地部署时的内存效率与响应速度，特别是针对低配硬件用户。
    *   **落地预测**: 考虑到集成 Rust 组件涉及构建系统的调整，该功能短期内进入开发状态的可能性较低，需等待维护者进行技术可行性评估。

## 7. 用户反馈摘要
从今日唯一的功能请求中可以提炼出以下用户画像与痛点：
*   **痛点**: 现有的内存后端在极端资源受限场景下可能存在占用过高的问题。
*   **场景**: 用户正在尝试将 Moltis 部署在对内存极其敏感的环境中，追求极致的“边缘压缩”能力。
*   **反馈倾向**: 用户具备底层技术视野，倾向于使用 Rust 等现代高性能语言优化现有 AI 智能体基础设施。

## 8. 待处理积压
*   基于所提供的过去 24 小时数据，未检测到长期未响应的“僵尸” Issue 或 PR。
*   **建议**: 维护者可及时对今日新开的 Issue #1123 进行标签分类与初步回复，以引导后续的技术讨论。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-06-15)

## 1. 今日速览
项目今日保持高活跃度，Issues 与 PR 更新总数达 42 条，显示社区互动频繁。主要精力集中在 v1.1.11.post2 版本的稳定性修复与功能增强，特别是针对 Windows 桌面端的启动性能与进程管理问题进行了重点攻关。值得关注的是，v1.1.11.post2 版本引入了若干回归问题（如本地模型提供商不显示、Python 3.13 兼容性），社区反馈迅速。功能层面，GUI 自动化（Computer Use）与多语言支持（越南语）成为新亮点，数据分析插件亦在持续迭代中。

## 2. 版本发布
无新版本发布。当前社区主要围绕 v1.1.11.post2 版本进行反馈与修复。

## 3. 项目进展
今日共有 6 个 PR 被合并或关闭，显著提升了系统稳定性与用户体验：
- **桌面端体验优化**：PR #5051 修复了 Windows 客户端重启后无法保留上次智能体与会话的问题，通过持久化后端端口解决 localStorage 隔离导致的重置 bug。
- **底层稳定性修复**：PR #5038 修复了 `LightContextManager` 在处理空消息列表时的 IndexError 崩溃问题；PR #5037 修复了 Linux 浏览器检测中的边界情况；PR #5035 增强了对 llama.cpp 大版本号的解析兼容性。
- **功能回滚**：PR #5092 回滚了之前的 Discord 打包修复补丁，显示维护者在打包流程上正在进行谨慎的调整。

此外，多个重点 PR 正在审查中，预示下一版本将有重要功能更新：
- **GUI 自动化**：PR #5187 提交了基于 UIA + Tauri 的 Windows 桌面 GUI 自动化控制功能，将大幅拓展 Agent 的操作能力。
- **插件生态**：PR #4622（DataPaw 数据分析插件）与 PR #5189（插件命令自动补全）正在推进，增强了平台的数据处理与交互能力。

## 4. 社区热点
- **[Issue #5047] Tauri 桌面端启动慢**：该 Issue 引发广泛共鸣，用户反馈从 Python 打包切换到 Tauri 后启动时间严重延长（甚至达十几分钟）。该问题已被关闭，结合 PR #5051 的合并，推测已得到缓解或解决。
- **[Issue #5156] 支持 Kimi-for-coding**：用户希望引入第三方 Kimi 适配工具以利用现有订阅，反映出用户对多模型接入成本敏感，以及对官方 API 成本结构的关注。
- **[PR #5187] Computer Use 功能**：引入 GUI 自动化控制是技术社区的兴奋点，标志着 QwenPaw 向系统级 Agent 迈进重要一步。

## 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，部分涉及 v1.1.11.post2 的回归问题：
- **严重**：
    - **[Issue #5138] 进程泄漏**：Windows 客户端进程持续增加导致内存占用 90% 以上。目前 Issue 已关闭，预计已在近期提交中修复。
    - **[Issue #5184] 本地模型丢失**：v1.1.11.post2 中本地创建的 Model Provider 无法显示（回归问题）。尚无对应修复 PR，需官方关注。
- **中等**：
    - **[Issue #5181] CMD 窗口持续弹窗**：插件依赖安装失败时在网络不稳定环境下进入死循环并疯狂弹窗。
    - **[Issue #5166] Python 3.13 兼容性**：TeamChat 插件安装失败，原因是 Python 3.13 移除了 `imghdr` 模块。
    - **[Issue #5190] 企业微信审批界面不可见**：权限控制开启后，审批流程在 UI 上缺失。

## 6. 功能请求与路线图信号
- **GUI 自动化**：PR #5187 表明项目正在积极落地 "Computer Use" 能力，允许 Agent 直接操控 Windows 桌面。
- **代码高亮与补全**：Issue #5191 强烈请求代码高亮与自动补全功能，结合已关闭的 Issue #5131，代码编辑体验将是后续优化的重点方向。
- **多语言支持**：PR #5186 与 #5175 相继提交了完整的越南语支持，国际化步伐加快。
- **上下文管理优化**：Issue #5171 指出长上下文压缩可能导致人设文件丢失，提示需要更智能的上下文保留策略；PR #5180 试图通过增加心跳超时和自主上下文提示来缓解定时任务的稳定性问题。

## 7. 用户反馈摘要
- **痛点**：Windows 桌面端从 Python 迁移至 Tauri 后的性能倒退（启动慢、无响应）是用户最大的抱怨。
- **插件网络依赖**：国内用户反映 PyPI 连接不稳定导致插件安装失败并触发弹窗风暴（Issue #5181），建议增加镜像源支持或更静默的失败处理。
- **订阅成本**：用户希望支持更多第三方 API 转接（如 Kimi-for-coding），以降低使用成本或复用现有订阅。
- **长对话能力**：长对话后的无响应（Issue #5161）表明前端的内存或渲染优化仍需加强。

## 8. 待处理积压
- **[Issue #5184]** v1.1.11.post2 本地模型 Provider 不显示的回归问题目前尚未有明确修复 PR 分配，建议优先处理，因这直接阻碍了本地模型用户的使用。
- **[PR #4622]** DataPaw 数据分析插件已提交多日，建议维护者加快 Review 进度以丰富插件生态。
- **[PR #4902]** PRD 管理工具 PR 挂起较久，该功能对 Agent 研发流程有较大帮助，建议纳入近期迭代计划。

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