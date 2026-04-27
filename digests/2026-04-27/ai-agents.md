# OpenClaw 生态日报 2026-04-27

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-27 03:24 UTC

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

# OpenClaw 项目动态日报 (2026-04-27)

## 1. 今日速览

OpenClaw 项目今日呈现**极高活跃度**，但面临严峻的 Issue 积压挑战。过去 24 小时内，Issues 更新量高达 500 条，其中新开/活跃 Issue 达 473 条，仅关闭 27 条，新增与关闭比例严重失衡，显示社区反馈涌入速度远超维护者处理能力。项目连续发布了 4 个 Beta 版本（v2026.4.25 系列），核心聚焦于**语音交互体验的重构**，引入了多提供商 TTS 支持与精细化控制。PR 端亦有 500 条更新，但待合并 PR 数量高达 446 条，合并 54 条，表明代码贡献活跃但审查压力巨大。整体来看，项目正处于功能快速迭代期，但需警惕质量回退与社区维护响应滞后风险。

## 2. 版本发布

今日连续发布 **v2026.4.25-beta.1 至 beta.4** 四个版本，显示出开发团队在语音功能上的快速迭代与修补。

### 核心更新亮点：全链路 TTS 升级
此次版本迭代的核心在于“Voice replies get a full TTS upgrade”，具体包括：
*   **新增控制指令**：引入 `/tts latest` 指令，支持聊天级别的自动 TTS 控制。
*   **精细化配置**：支持 Personas（人设）、Per-Agent（单智能体）及 Per-Account（单账户）级别的语音配置覆盖，解决了多语言场景下的痛点。
*   **生态扩展**：新增对 **Azure Speech, Xiaomi, Local CLI, Inworld, Volcengine (火山引擎), ElevenLabs v3** 等主流及新兴语音提供商的支持。
*   **致谢**：特别感谢 @leonchui, @zoujiejun, @solar2ain 等贡献者的工作。

### 迁移注意
目前处于 Beta 阶段，语音相关配置结构可能仍在调整，建议生产环境用户暂缓更新，测试环境用户需关注配置文件的兼容性提示。

## 3. 项目进展

今日合并/关闭的 PR 主要集中在稳定性修复与企业级功能增强，有效推进了项目质量。

*   **[安全] GCP Secret Manager 集成** ([PR #16663](https://github.com/openclaw/openclaw/pull/16663))：
    *   **进展**：已合并。引入了对 Google Cloud Secret Manager 的原生集成，支持通过引用语法（如 `${gcp:secret-name}`）在配置中引用云端密钥，显著提升了企业级部署的凭证安全管理能力。
*   **[体验] 飞书群聊名称优化** ([PR #51032](https://github.com/openclaw/openclaw/pull/51032))：
    *   **进展**：已合并。解决了 Issue #35675，使得会话列表能够显示飞书群组的可读名称，而非原始的 `chat_id`，极大改善了多群组管理的用户体验。
*   **[修复] 模型降级逻辑缺陷** ([PR #47994](https://github.com/openclaw/openclaw/pull/47994))：
    *   **进展**：已合并。修复了当主模型故障降级到备用模型时，Session 配置被永久覆盖的问题，确保下次启动仍能重试主模型。
*   **[功能] 非交互式 GitHub Copilot 认证** ([PR #50003](https://github.com/openclaw/openclaw/pull/50003))：
    *   **进展**：已合并。支持通过 `--github-copilot-token` 标志进行非交互式认证，便利了自动化部署流程。

## 4. 社区热点

今日社区讨论呈现出对**功能深度**与**稳定性**的双重焦虑，以下为热议焦点：

1.  **[质疑] 产品自毁模式讨论** ([Issue #65302](https://github.com/openclaw/openclaw/issues/65302))
    *   **热度**：评论 8 条，👍 5 个。
    *   **分析**：用户 @1168784 以“现象级项目的自毁模式”为题，直言不讳地批评近期更新导致产品体验下降。该 Issue 获得较高共鸣，反映出核心用户对近期版本质量波动（如配置兼容性破坏）的不满，维护者需重点关注用户信任危机。
2.  **[功能] 多语言 TTS 精细化配置需求** ([Issue #66252](https://github.com/openclaw/openclaw/issues/66252))
    *   **热度**：评论 7 条，👍 1 个。
    *   **分析**：用户请求支持单智能体/账户级别的 TTS/STT 覆盖配置。这一需求与今日发布的 v2026.4.25 Beta 版本特性高度重合，表明新版本发布前的功能规划已吸纳社区声音，属于良性互动。
3.  **[整合] 重度用户功能请求汇总** ([Issue #65824](https://github.com/openclaw/openclaw/issues/65824))
    *   **热度**：评论 10 条，👍 1 个。
    *   **分析**：资深用户 @smonett 提交了包含 11 项平台差距的功能请求清单。此类高质量、经过审计的反馈帖对项目路线图规划极具参考价值。

## 5. Bug 与稳定性

今日 Bug 报告集中在**配置兼容性**、**特定平台运行异常**及**核心逻辑回归**，部分严重问题已有修复进展。

*   **[严重] macOS 无限自复制导致系统崩溃** ([Issue #64745](https://github.com/openclaw/openclaw/issues/64745))
    *   **状态**：已关闭。
    *   **描述**：用户报告 macOS App 版本 2026.4.8 会触发无限进程复制，导致系统卡死和数据丢失。
    *   **分析**：此类严重 Bug 通常需要紧急热修复，已关闭状态表明可能已在后续版本中解决。
*   **[严重] Gateway 请求全面失败 (回归)** ([Issue #72434](https://github.com/openclaw/openclaw/issues/72434))
    *   **状态**：已关闭。
    *   **描述**：从 2026.4.23 升级后，所有 Gateway 请求因 `claude-cli` 未注册而失败。
    *   **分析**：回归问题频发，提示自动化测试覆盖率可能不足以拦截破坏性变更。
*   **[中等] RISC-V64 架构适配失败** ([Issue #54253](https://github.com/openclaw/openclaw/issues/54253))
    *   **状态**：开放。
    *   **描述**：在 RISC-V64 系统上运行时报 LLM 请求失败。随着开源硬件兴起，跨架构支持重要性日益凸显。
*   **[中等] Windows 平台启动延迟与锁死** ([Issue #70857](https://github.com/openclaw/openclaw/issues/70857))
    *   **状态**：开放。
    *   **描述**：Windows 下 Gateway 启动时 `sessions.json.lock` 锁定长达 191 秒，严重影响用户体验。

## 6. 功能请求与路线图信号

结合 Issue 与 PR 活动，可窥见 OpenClaw 的下一步发展方向：

*   **语音交互深化**：TTS 功能的大规模更新已落地，未来将进一步细化 ([Issue #66252](https://github.com/openclaw/openclaw/issues/66252))。
*   **企业级安全与部署**：
    *   密钥管理：GCP Secret Manager 支持已合并 ([PR #16663](https://github.com/openclaw/openclaw/pull/16663))。
    *   敏感数据脱敏：用户强烈呼吁日志与配置文件脱敏 ([Issue #64046](https://github.com/openclaw/openclaw/issues/64046))，虽然已有相关讨论，但尚未看到明确的实现 PR。
*   **多渠道适配**：QQBot 群聊支持正在 PR 阶段 ([PR #70624](https://github.com/openclaw/openclaw/pull/70624))，显示项目在多平台接入上的持续投入。
*   **网络代理支持**：正在考虑支持运营商管理的网络代理路由 ([PR #70044](https://github.com/openclaw/openclaw/pull/70044))，以满足企业内网环境需求。

## 7. 用户反馈摘要

*   **痛点**：配置字段变更导致的向后兼容性问题频发（如飞书渠道字段变更 [Issue #53556](https://github.com/openclaw/openclaw/issues/53556)），用户苦于每次升级后的配置调整。
*   **痛点**：Windows 平台体验不佳，存在 Shell 弹窗干扰 ([Issue #72315](https://github.com/openclaw/openclaw/issues/72315))、启动慢等问题。
*   **场景**：用户尝试在非传统架构（RISC-V）上部署 OpenClaw，显示出项目在边缘计算领域的潜力。
*   **满意度**：尽管存在稳定性吐槽，但重度用户愿意撰写长篇审计报告 ([Issue #65824](https://github.com/openclaw/openclaw/issues/65824))，表明核心用户群体对项目寄予厚望且参与度极高。

## 8. 待处理积压

*   **Issue 积压告急**：今日仅关闭 27 条 Issue，但新增/活跃量高达 473 条。大量功能性讨论和 Bug 报告处于排队状态，建议项目方引入更多社区协作者或分优先级处理。
*   **PR 审查瓶颈**：待合并 PR 达 446 条，其中包括重要的 QQBot 群聊支持 ([PR #70624](https://github.com/openclaw/openclaw/pull/70624)) 和网络代理功能 ([PR #70044](https://github.com/openclaw/openclaw/pull/70044))。审查速度已明显滞后于开发速度，可能阻碍新特性的及时发布。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向分析日报 (2026-04-27)

## 1. 生态全景
个人 AI 助手与智能体开源生态今日呈现**“两极加速，隐患浮现”**的态势。头部项目（OpenClaw、NanoBot、Zeroclaw）正处于功能密集迭代期，争先适配 DeepSeek-V4 等新模型并重构底层架构，但 OpenClaw 的严重 Issue 积压暴露了社区维护能力与用户增长的不匹配。中间梯队（Hermes、PicoClaw、CoPaw）聚焦于特定场景（如企业级集成、边缘计算、WebUI 增强），但普遍面临代码审查瓶颈与稳定性考验。整体生态对**多模态（语音/TTS）**与**国产大模型适配**的需求呈现爆发式增长，已成为项目竞争力的核心指标。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PR 活跃度 | 版本发布 | 健康度评估 | 核心动向 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 🔥 极高 (500+/27 关闭) | 🔥 极高 (446 待合并) | v2026.4.25-beta.1~4 | ⚠️ **风险预警** | TTS 全链路升级，维护响应严重滞后 |
| **NanoBot** | 🟢 正常 (11) | 🔥 高 (22 合并) | 无 | 🟢 **健康** | 运行时模型切换，DeepSeek 适配修复 |
| **Zeroclaw** | 🟢 正常 (50) | 🟢 良好 (20 合并) | 无 | 🟢 **健康** | Matrix 频道重构，架构解耦 |
| **Hermes Agent** | 🟢 良好 (关闭>新增) | 🟡 中等 (44 待合并) | 无 | 🟡 **关注** | 企业平台集成，面临抄袭争议 |
| **PicoClaw** | 🟡 中等 (18) | 🟡 中等 (2 合并) | Nightly | 🟡 **迭代中** | 架构重构，硬件/模型兼容性修复 |
| **NanoClaw** | 🟢 正常 | 🟢 高 (16 合并) | 无 (更名 Argus) | 🟢 **健康** | v2 架构迁移，品牌重塑 |
| **CoPaw** | 🔥 高 (18 新增) | 🔴 低 (0 合并) | 无 | ⚠️ **阻塞** | 模型管理优化，PR 审查停滞 |
| **Moltis** | 🟢 正常 | 🟢 高 (10 合并) | v20260426.05 | 🟢 **健康** | 安全性加固，本地 LLM 按需加载 |
| **IronClaw** | 🟡 低 | 🟡 中等 (8 更新) | 无 | 🟡 **维护** | 运行时安全架构，企业微信集成 |
| **LobsterAI** | 🔴 低 (历史激活) | 🔴 低 | 无 | 🔴 **停滞** | 模型配置维护，积压严重 |
| **NullClaw** | 🔴 低 | 🔴 无 | 无 | 🔴 **停滞** | WSL2 严重性能 Bug 待解 |
| **TinyClaw** | - | - | - | - | 无活动 |
| **ZeptoClaw** | - | - | - | - | 无活动 |
| **EasyClaw** | - | - | - | - | 无活动 |

## 3. OpenClaw 在生态中的定位

*   **生态位**：**全能型应用层领跑者**。OpenClaw 凭借极高的功能迭代速度（单日 4 个 Beta 版）和广泛的 TTS 生态集成（支持 Azure/Xiaomi/Volcengine 等），在“多模态交互”体验上领先竞品。
*   **优势**：语音交互功能覆盖面极广，社区关注度最高（Issue 数量级远超其他），用户基数庞大。
*   **劣势**：**质量管控危机**。今日新增 Issue 与关闭 Issue 比例接近 17:1，积压极严重；用户直指“自毁模式”，反映出版本质量回退与配置兼容性破坏已引发核心用户不满。
*   **对比差异**：相比 NanoBot 和 Zeroclaw 对底层架构的“精耕细作”（如运行时控制、频道重写），OpenClaw 更像“大动脉搭桥”，追求功能广度但在精细化治理上存在短板。

## 4. 共同关注的技术方向

1.  **DeepSeek-V4 模型适配**：
    *   涉及项目：**NanoBot, Zeroclaw, CoPaw**。
    *   具体诉求：DeepSeek-V4 引入的 `reasoning_content` 字段与特殊思考模式导致主流框架 API 兼容性崩塌。社区急需解决流式响应解析与 Token 预算控制问题，这是当前最紧迫的技术共识。

2.  **Agent 运行时控制与可观测性**：
    *   涉及项目：**NanoBot, Moltis, IronClaw**。
    *   具体诉求：用户不再满足于“一次性提交”，而是要求 Agent 支持运行时模型切换、会话上下文压缩、内存按需加载以及任务中断。这标志着 Agent 正从“脚本执行”向“受控服务”演进。

3.  **企业级多渠道集成**：
    *   涉及项目：**OpenClaw, Hermes Agent, IronClaw, NanoBot**。
    *   具体诉求：对飞书、企业微信、Slack、Discord 的集成需求强烈，且关注点深入到“群聊名称显示”、“按钮响应”、“URL 预览抑制”等细节，显示出 B 端场景落地正在深入。

## 5. 差异化定位分析

*   **功能侧重**：
    *   **OpenClaw**：侧重**多模态接入**，今日动态显示其在 TTS 语音生态建设上不遗余力。
    *   **NanoBot & Zeroclaw**：侧重**架构治理**，关注多智能体编排和底层解耦（如 Matrix 重写），技术负债处理更积极。
    *   **PicoClaw & NanoClaw**：侧重**轻量化与边缘计算**，关注树莓派适配、硬件集成及安装包体积。
    *   **Moltis & IronClaw**：侧重**安全与企业级**，关注 Key 存储加密、权限边界和沙箱机制。

*   **技术架构**：
    *   **OpenClaw/Hermes**：快速迭代型，功能模块化堆叠明显。
    *   **Zeroclaw/Moltis**：架构重构型，倾向于 Clean-room 重写和底层解耦，追求代码质量。

## 6. 社区热度与成熟度

*   **爆发/过热期**：
    *   **OpenClaw**：热度极高但处于失控边缘，需警惕“公地悲剧”。
    *   **CoPaw**：社区反馈活跃但开发响应滞后，处于功能与质量的博弈期。

*   **快速成长期**：
    *   **NanoBot, Zeroclaw, Moltis**：活跃度与维护质量较为平衡，PR 合并快，修复及时，社区处于良性轨道。

*   **调整/维护期**：
    *   **Hermes, PicoClaw, IronClaw**：解决特定痛点或重构中。
    *   **LobsterAI, NullClaw**：活跃度低，社区声音微弱，可能面临维护断层风险。

## 7. 值得关注的趋势信号

1.  **DeepSeek-V4 引发兼容性海啸**：几乎所有头部项目今日均在处理 DeepSeek 新版 API 的适配问题。对于开发者而言，**构建灵活的 Provider 抽象层以应对模型 API 变动**已成为架构设计的核心考量。
2.  **“静默” Bug 正在吞噬用户体验**：多个项目反馈了“后台空转”、“暂停无效”、“跨会话串扰”等问题。这预示着 Agent 需要建立更完善的**生命周期管理机制**，而非仅关注单次任务执行。
3.  **安全与隐私从“可选项”变“必选项”**：Moltis 修复明文 Key 存储，IronClaw 重构权限边界，用户对本地部署 Agent 的安全敏感度显著提升。**本地加密存储与沙箱隔离**将成为后续版本的标配功能。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-27)

## 1. 今日速览
NanoBot 项目今日保持极高的开发活跃度，尽管无新版本发布，但代码仓库经历了剧烈变动。过去24小时内 PR 更新量高达 129 条，其中 22 条顺利合并，显示出团队正在为下一个大版本进行密集的功能迭代与缺陷修复。Issues 方面，共有 11 条更新，其中 6 条已关闭，社区响应速度较快。今日的工作重心主要集中在 **DeepSeek 模型兼容性修复**、**运行时控制能力增强**（如模型切换、会话管理命令）以及 **多智能体架构的早期探索**。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 22 个 PR 被合并，显著提升了项目的易用性与稳定性，主要进展如下：

*   **运行时控制能力增强**：合并了 PR #3135 `feat: runtime model switching via /model and /compact commands`，用户现在可以在运行时动态切换 LLM 模型，无需重启网关。同时，PR #3132 引入了 `/clear`, `/skills`, `/mcp` 等实用命令，优化了交互体验。
*   **多智能体编排雏形**：PR #3457 合并了 `create-instance` 内置技能，允许 Agent 通过对话创建新的 Bot 实例，为多智能体协作奠定了基础。
*   **模型兼容性修复**：PR #3427 修复了 DeepSeek 模型请求中的非字符串内容负载问题，并优化了会话回放的 Token 预算，防止上下文溢出。
*   **渠道与界面优化**：PR #3462 修复了 Slack 渠道中子智能体回复丢失线程上下文的问题；PR #3430 为 WebUI 增加了视频媒体附件的渲染支持。

## 4. 社区热点
今日社区讨论最热烈的话题围绕 **Agent 的自主性与控制权** 展开：

*   **Issue #2133 [CLOSED]**：关于“任务执行期间用户消息入列”的讨论引发了 19 条评论。用户指出当前 Agent 在执行长任务时无法实时响应用户中断，必须依赖 `/stop` 命令，体验不够优雅。该 Issue 深入探讨了 Agent Loop 与用户交互的平衡，反映了用户对 **可中断、可交互式 Agent** 的强烈需求。
    *   链接: [HKUDS/nanobot Issue #2133](https://github.com/HKUDS/nanobot/issues/2133)
*   **Issue #1181 [CLOSED]**：提出了引入“双层架构（Steering Loop + AgentMessage）”的建议，获得 9 个点赞。该 Issue 直指当前单层 ReAct 循环在动态任务管理上的瓶颈，建议增加“ Steering Loop”以提升 Agent 的自主规划能力。虽然该 Issue 已关闭，但反映出社区对 Agent 智能化层级提升的期待。
    *   链接: [HKUDS/nanobot Issue #1181](https://github.com/HKUDS/nanobot/issues/1181)

## 5. Bug 与稳定性
今日报告了多个影响特定场景的 Bug，主要集中在第三方模型 API 兼容性和渠道媒体处理上：

*   **【严重】DeepSeek-v4 API 兼容性问题**：Issue #3469 报告 DeepSeek-v4 在多轮思考模式下报错 `reasoning_content must be passed back`。该问题可能与 Issue #3443 提到的 `reasoning` 字段泄露有关。目前已有 PR #3458 和 #3427 正在尝试修复此类负载规范化问题。
    *   链接: [HKUDS/nanobot Issue #3469](https://github.com/HKUDS/nanobot/issues/3469)
*   **【中等】MCP 工具名称不兼容**：Issue #3468 指出 NanoBot 直接转发 MCP 能力名称给模型 API，导致包含空格或特殊字符的名称被 Anthropic/OpenAI 拒绝。PR #3470 和 #3472 已提交修复代码，待合并。
    *   链接: [HKUDS/nanobot Issue #3468](https://github.com/HKUDS/nanobot/issues/3468)
*   **【中等】企业微信媒体文件上传失败**：Issue #3435 反映 WeCom 渠道发送媒体文件失败。PR #3471 已定位原因为相对路径解析错误，待合并。
    *   链接: [HKUDS/nanobot Issue #3435](https://github.com/HKUDS/nanobot/issues/3435)
*   **【一般】AsyncOpenAI 超时配置缺失**：Issue #3455 指出默认客户端未设置超时，可能导致 Agent 长达 10 分钟的阻塞。目前暂无修复 PR。
    *   链接: [HKUDS/nanobot Issue #3455](https://github.com/HKUDS/nanobot/issues/3455)

## 6. 功能请求与路线图信号
根据待合并的 PR 和开放 Issue，项目正在向以下方向演进：

*   **长期任务执行能力**：PR #3460 提出了 `LongTaskTool`，旨在通过元 ReAct 循环将长任务分解为顺序执行的子步骤，解决长任务上下文丢失和超时问题。
*   **多智能体通信**：PR #3461 正在开发基于文件系统的邮箱通道插件，用于智能体间的原子化通信，预示着多智能体协作功能的即将到来。
*   **渠道精细化配置**：Issue #3452 请求对 `sendProgress` 等参数进行渠道级别的差异化配置，而非全局配置，以满足不同平台（如 Telegram vs 微信）的交互习惯差异。

## 7. 用户反馈摘要
*   **交互控制权痛点**：用户希望 Agent 在执行长任务时能更“听话”，能够暂停并听取用户的中间指示，而不是“自顾自”地跑完循环（来源：#2133, #2915）。
*   **DeepSeek 模型适配需求高**：随着 DeepSeek-v4 的流行，其特殊的 `reasoning_content` 字段处理成为用户迁移的主要阻碍，社区急需官方层面的完美适配。
*   **多模态支持完善**：用户对 WeCom 等渠道的媒体文件支持关注度较高，希望 Agent 能无障碍处理图片、视频等非文本信息。

## 8. 待处理积压
*   **PR #3253 (Whisper 转录重试)**：针对语音识别网络波动问题的修复 PR，已提交数日，尚未合并，建议维护者关注以提升语音交互稳定性。
    *   链接: [HKUDS/nanobot PR #3253](https://github.com/HKUDS/nanobot/pull/3253)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-27)

## 1. 今日速览
Zeroclaw 项目今日维持高热度活跃状态，Issue 与 PR 更新量均达 50 条，显示出社区与开发团队紧密互动。尽管无新版本发布，开发重心明显向底层架构重构与多模型提供商兼容性倾斜。今日最受关注的是 **Matrix 频道组件的彻底重写**（PR #6112）以及对 **DeepSeek-V4** 新版 API 的适配讨论。整体来看，项目正处于架构优化与新模型适配的并行迭代期，但也暴露出新版配置文档滞后、部分核心功能（如 Ollama 工具调用）长期受损的问题。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日共有 20 个 PR 被合并或关闭，显著推进了以下工作：

*   **架构重构与解耦**：
    *   [PR #6112](https://github.com/zeroclaw-labs/zeroclaw/pull/6112) **(已合并)**：对 Matrix 频道组件进行了 clean-room 重写，升级至 matrix-rust-sdk 0.16。此举解决了长期存在的连接稳定性问题，移除了手写的 HTTP 实现与死代码，是一次高风险、高收益的核心架构升级。
    *   [PR #5735](https://github.com/zeroclaw-labs/zeroclaw/pull/5735) **(已合并)**：将 `gateway` 和 `tui-onboarding` 从 `agent-runtime` 中解耦，减少了编译依赖，优化了构建效率。

*   **关键 Bug 修复**：
    *   [PR #6093](https://github.com/zeroclaw-labs/zeroclaw/pull/6093) **(已合并)**：修复了当模型返回工具调用时，重复推送旁白文本导致历史记录损坏的问题，直接解决了 Issue #5584。
    *   [PR #6144](https://github.com/zeroclaw-labs/zeroclaw/pull/6144) **(已合并)**：修复了 Bedrock 提供商在 Opus 4.7 模型上的温度参数兼容性问题。
    *   [PR #6013](https://github.com/zeroclaw-labs/zeroclaw/pull/6013) **(已合并)**：修复了 ACP 协议中 `defaultModel` 解析为空的问题。

*   **代码质量与测试**：
    *   [PR #6108](https://github.com/zeroclaw-labs/zeroclaw/pull/6108) **(已合并)**：修复了主分支长期存在的 5 个测试失败，恢复了 CI 的健康度。

## 4. 社区热点
*   **[Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)**：**DeepSeek-V4 API 兼容性问题**。
    *   **热度**：评论 7 条。
    *   **分析**：DeepSeek-V4 推出后，其 "thinking mode" 的 API 格式与现有 Zeroclaw 处理逻辑冲突。用户反馈在 Pro 和 Flash 版本均遭遇错误。这是目前社区最关注的新增兼容性阻碍。
*   **[Issue #5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947)**：**Schema v3 批量迁移计划**。
    *   **热度**：评论 6 条。
    *   **分析**：核心开发者 @singlerider 提出的破坏性配置迁移方案，旨在统一处理配置字段的变更。讨论集中在如何最小化对现有用户的干扰，显示出项目正在为下一个大版本做准备。
*   **[Issue #5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459)**：**Ollama Provider 工具调用失效**。
    *   **热度**：评论 4 条，点赞 4 个。
    *   **分析**：长期存在的问题，Ollama 提供商硬编码 `tool_count=0`，导致原生工具调用完全不可用。用户对此痛点反应强烈，期待官方修复。

## 5. Bug 与稳定性
今日报告的 Bug 集中在 Provider 兼容性和安装部署环节，部分已有修复方案：

*   **S1 - 工作流阻塞**：
    *   [Issue #5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459)：Ollama 提供商工具调用失效。**状态**：Open，长期未修复，影响本地模型用户。
    *   [Issue #4878](https://github.com/zeroclaw-labs/zeroclaw/issues/4878)：E2EE 加密房间在重置后无法从备份恢复密钥。**状态**：Open，严重影响加密私信功能。
    *   [Issue #6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149)：config.toml 文档示例与实际二进制不匹配，导致本地测试配置失败。**状态**：Open。
    *   [Issue #5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803)：Fallback 提供商链忽略配置文件，仅读取环境变量。**状态**：Open，已有修复 PR #6092。

*   **S2 - 体验降级**：
    *   [Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)：DeepSeek-V4 思考模式不兼容。**状态**：Open，已有相关修复 PR #6107 正在处理流式响应中的 `reasoning_content`。
    *   [Issue #4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842)：树莓派 (aarch64) 更新命令下载错误架构二进制。**状态**：Open，长期积压。

## 6. 功能请求与路线图信号
*   **Webhook 触发 Agent 模式** ([Issue #3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542))：用户希望 Webhook 不仅能对话，还能触发完整的 Agent 工作流。这反映了将 Zeroclaw 作为后端自动化引擎的强烈需求。
*   **频道回复意图预检优化** ([Issue #6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067))：建议在频道模式下的“意图预检”步骤使用更轻量的模型并设置超时，以避免主模型阻塞，提升响应速度。
*   **工具执行取消支持** ([Issue #5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836))：提议将 `CancellationToken` 传递给工具执行层，允许中断长时间运行的 Shell 命令或 HTTP 请求。这是提升 Agent 控制力的关键特性。

## 7. 用户反馈摘要
*   **配置门槛高，文档滞后**：多位用户反馈 `config.toml` 示例代码失效 ([Issue #6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149))，且 Windows 安装脚本存在严重 Bug ([Issue #6118](https://github.com/zeroclaw-labs/zeroclaw/issues/6118))。新用户的“冷启动”体验存在痛点。
*   **本地模型体验受损**：Ollama 用户对原生工具调用失效表示不满 ([Issue #5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459))，认为这限制了本地部署的能力。
*   **对新模型响应迅速**：DeepSeek-V4 发布后，社区迅速反馈了兼容性问题，显示用户群体紧跟前沿模型技术，对 Provider 层的适配速度要求极高。

## 8. 待处理积压
*   **[Issue #4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842)**：**树莓派架构更新错误**。该 Issue 自 3 月底开启，至今未修复，影响了边缘计算/IoT 场景用户的升级体验。
*   **[Issue #4880](https://github.com/zeroclaw-labs/zeroclaw/issues/4880)**：**Daemon 模式下历史压缩未触发**。长期存在的逻辑缺陷，可能导致长时间运行的会话内存溢出或上下文管理失效。
*   **[PR #5713](https://github.com/zeroclaw-labs/zeroclaw/pull/5713)**：Dependabot 提出的 `rand` 依赖升级（0.10.0 -> 0.10.1）自 4 月 14 日开启，至今未合并，可能存在潜在的安全或兼容性考量。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-04-27)

## 1. 今日速览
Hermes Agent 今日保持了极高的社区活跃度，Issue 关闭数（30 条）显著高于新开数（20 条），表明项目维护者正在积极清理积压问题。PR 端呈现“高产出、高积压”态势，待合并 PR 达 44 条，涵盖安全修复、新平台适配（Teams、元宝）及核心性能优化，显示出项目正处于功能快速迭代期。社区对项目的代码原创性发起了激烈讨论，同时对新平台（如腾讯元宝）的集成需求高涨。整体来看，项目健康度良好，但需关注 PR 审查通过率与社区舆论引导。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 6 个 PR 合并/关闭，主要集中在关键 Bug 修复与用户体验优化：
*   **Slack OAuth 流程优化**：关闭了 PR #16331 并开启了新的 PR #16334，致力于优化 Slack 通过 Claude Code CLI 的 OAuth 路由，以提高订阅使用的稳定性。
*   **CLI 体验改善**：针对用户抱怨较多的浅色终端不可读问题（Issue #4807），PR #16330 提交了自动明暗模式检测功能，有望解决长期存在的 UI 痛点。
*   **沙箱兼容性修复**：针对 Linux VPS 环境下的浏览器自动化问题（Issue #15765），PR #15771 提出了注入 `--no-sandbox` 参数的修复方案，提升了在服务器环境下的易用性。

## 4. 社区热点
今日社区讨论呈现“功能期待”与“信任危机”并存的特点：
*   **国产平台集成需求强烈**：Issue #12240 ([链接](https://github.com/NousResearch/hermes-agent/issues/12240)) 关于增加“腾讯元宝”作为新网关平台的提议引发了 12 条评论的热烈讨论。这显示了 Hermes 在中文社区的影响力扩大，用户迫切希望接入本土主流 AI 社交平台。
*   **代码原创性争议**：Issue #10232 ([链接](https://github.com/NousResearch/hermes-agent/issues/10232)) 和 Issue #10625 ([链接](https://github.com/NousResearch/hermes-agent/issues/10625)) 引发了关于项目是否“抄袭” EvoMap 的激烈争论，分别获得 12 和 10 个点赞。这反映了部分用户对项目架构来源的质疑，维护者需重视透明度沟通以维护社区信任。
*   **UI 痛点受关注**：Issue #4807 ([链接](https://github.com/NousResearch/hermes-agent/issues/4807)) 关于 CLI 不支持浅色背景的问题获得 9 个点赞，表明开发者工具的 UI 细节对用户体验影响巨大。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，安全性问题尤为突出：
*   **【P0/高危】安全漏洞**：PR #9560 ([链接](https://github.com/NousResearch/hermes-agent/pull/9560)) 揭示了 `gateway/session.py` 中存在路径遍历漏洞 (CWE-22)，目前已有修复 PR 待合并，建议维护者优先处理。
*   **【P1】浏览器工具失效**：Issue #10229 ([链接](https://github.com/NousResearch/hermes-agent/issues/10229)) 反馈浏览器工具名称重复拼接导致调用失败，严重影响 Agent 执行能力。
*   **【P2】平台集成故障**：
    *   Issue #9585 ([链接](https://github.com/NousResearch/hermes-agent/issues/9585))：飞书消息按钮点击无响应。
    *   Issue #15765 ([链接](https://github.com/NousResearch/hermes-agent/issues/15765))：Linux Root 环境下浏览器自动化超时（已有修复 PR #15771）。
*   **【P2】凭证解析错误**：Issue #10223 ([链接](https://github.com/NousResearch/hermes-agent/issues/10223)) GitHub Copilot provider 在凭证池解析时返回空 URL，导致启动失败。

## 6. 功能请求与路线图信号
用户对多平台适配和自动化流程提出了明确需求，部分已有 PR 跟进：
*   **企业办公平台扩展**：PR #13767 ([链接](https://github.com/NousResearch/hermes-agent/pull/13767)) 正在增加 Microsoft Teams 适配器 V2，这标志着 Hermes 正从社交通讯工具向企业协作领域深化。
*   **任务委派精细化控制**：Issue #9556 ([链接](https://github.com/NousResearch/hermes-agent/issues/9556)) 提议增加 `delegate_task_stream` 以支持任务执行中的中断，以及 Issue #9557 ([链接](https://github.com/NousResearch/hermes-agent/issues/9557)) 提出自适应委派策略。这表明用户对 Agent 自主性的控制粒度要求越来越高，有望成为下一阶段的开发重点。
*   **UI 自适应**：PR #16330 ([链接](https://github.com/NousResearch/hermes-agent/pull/16330)) 提出的明暗模式自动检测，是对 Issue #4807 的直接响应，预计很快合入。

## 7. 用户反馈摘要
*   **痛点**：CLI 在浅色背景下不可读严重影响使用；VPS 环境下部署困难（沙箱问题）；飞书/Slack 等网关平台的消息交互存在稳定性问题。
*   **场景**：用户正在尝试将 Hermes 部署在 Hetzner 等无头服务器上运行浏览器自动化任务；同时，通过飞书和 WeChat 进行企业级群聊机器人的需求明显。
*   **情绪**：对项目快速集成新平台（如元宝）表示期待；对代码是否存在“拿来主义”表示担忧，社区存在信任裂痕需通过代码透明度修复。

## 8. 待处理积压
*   **关键安全 PR 待合并**：PR #9560 修复的高危漏洞 (CWE-22) 仍处于 Open 状态，建议立即 Review 并 Merge。
*   **PR 审查阻塞**：目前有 44 个 PR 处于待合并状态，积压严重。特别是 PR #13767 (Microsoft Teams 支持) 和 PR #15926 (TUI 性能优化) 等大型功能 PR 长期未决，可能影响开发者贡献积极性。
*   **长期 Issue**：Issue #4807 (浅色模式支持) 沉寂一段时间后今日重新活跃并伴随 PR #16330，需推动合并以关闭此长期痛点。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-27)

## 1. 今日速览
PicoClaw 项目今日保持高活跃度开发状态，核心聚焦于**架构重构**与**多模型兼容性修复**。过去24小时内共有 18 项 Issue/PR 更新，并发布了最新的 Nightly 构建版本。重点动向包括：核心消息处理逻辑的重构（`tool_calls` 与 `thought` 统一）、针对 ChatGPT OAuth 和 Gemini 模型的关键修复，以及串口通信等硬件支持的扩展。整体来看，项目正处于为下一版本累积功能的密集迭代期，PR 合并速度稳定，社区对硬件适配与模型路由优化的关注度显著提升。

## 2. 版本发布
- **nightly: v0.2.7-nightly.20260427.39dec354**
  - **类型**: 自动化构建版本
  - **说明**: 包含了截止今日 Main 分支的最新代码提交。鉴于项目正在进行消息处理逻辑的重构（见 PR #2680），该版本可能存在不稳定性，建议测试者关注前端兼容性。
  - **变更范围**: 相比 v0.2.7 正式版，包含了大量社区贡献的 PR。

## 3. 项目进展
今日共有 2 个 PR 合并/关闭，标志着部分功能修复已正式落地：

*   **[MERGED] PR #2415: 优化配置文件错误诊断**
    *   **进展**: 增强了 `config.json` 的解析错误提示，现在能精确定位语法错误的行号和列号。
    *   **价值**: 显著降低了用户配置时的调试门槛，解决了“配置写错难排查”的痛点。
    *   **链接**: [sipeed/picoclaw PR #2415](https://github.com/sipeed/picoclaw/pull/2415)

*   **[MERGED] PR #2672: Web Chat 支持结构化 Tool Calls**
    *   **进展**: 重构了 Web 端聊天对工具调用的展示方式，保留了折叠块而非扁平化显示，提升了对话上下文的可读性。
    *   **价值**: 优化了 Web UI 的交互体验，使 Agent 的思考与执行过程更加透明。
    *   **链接**: [sipeed/picoclaw PR #2672](https://github.com/sipeed/picoclaw/pull/2672)

*   **[CLOSED] Issue #2628: v0.2.7 "Thinking" 显示问题**
    *   **进展**: 关于如何关闭 "Think" 和 "Tools" 消息显示的 Bug 报告已关闭，推测已在最新版或通过配置指导解决。
    *   **链接**: [sipeed/picoclaw Issue #2628](https://github.com/sipeed/picoclaw/issues/2628)

## 4. 社区热点
今日讨论热度最高的问题集中在**功能性阻碍**与**硬件扩展**：

1.  **智能模型路由需求 (#295)**
    *   **动态**: 该 Issue 创建于 2 月，今日再次活跃。社区强烈呼吁实现基于成本和性能的智能模型路由系统，避免简单任务调用昂贵模型（如 GPT-4o），以优化运营成本。
    *   **链接**: [sipeed/picoclaw Issue #295](https://github.com/sipeed/picoclaw/issues/295)

2.  **Exa 搜索提供商接入争议 (#2676)**
    *   **动态**: 用户提出接入 Exa 搜索提供商，并提及曾有关联 PR #997 被关闭，询问原因。这反映出社区对多样化 Search Provider 的需求，以及对之前 PR 关闭原因的困惑。
    *   **链接**: [sipeed/picoclaw Issue #2676](https://github.com/sipeed/picoclaw/issues/2676)

3.  **树莓派兼容性请求 (#2675)**
    *   **动态**: 用户希望获得 Raspberry Pi Zero 2W 的官方支持与构建指南，表明 PicoClaw 在边缘计算/嵌入式场景的用户群体正在增长。
    *   **链接**: [sipeed/picoclaw Issue #2675](https://github.com/sipeed/picoclaw/issues/2675)

## 5. Bug 与稳定性
今日报告的关键 Bug 主要涉及特定模型 Provider 的兼容性问题：

*   **[High] Codex OAuth 空响应问题 (#2674)**
    *   **现象**: 使用 ChatGPT 后端的 Codex OAuth 时，助手返回空响应，导致功能不可用。
    *   **状态**: **已有修复 PR**。PR #2679 已提交，专门处理 `response.output_text.delta` 流式响应，有望解决此问题。
    *   **链接**: [Issue #2674](https://github.com/sipeed/picoclaw/issues/2674) | [PR #2679](https://github.com/sipeed/picoclaw/pull/2679)

*   **[Medium] Gemini 调用 MCP 工具崩溃 (#2668 -> PR #2681)**
    *   **现象**: 使用 Gemini 模型配合复杂的 MCP 工具时，因 Schema 不兼容导致 HTTP 400 崩溃。
    *   **状态**: **已有修复 PR**。PR #2681 引入了 Schema 清理器，专门适配 Gemini 的参数规范。
    *   **链接**: [PR #2681](https://github.com/sipeed/picoclaw/pull/2681)

*   **[Medium] Exec 工具路径误判 (#1042)**
    *   **现象**: `restrict_to_workspace` 开启时，部分不含路径操作的命令（如 `curl wttr.in`）被错误识别为路径越界而拦截。
    *   **状态**: 待修复。
    *   **链接**: [sipeed/picoclaw Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)

## 6. 功能请求与路线图信号
根据今日 Issues 与 Open PRs，项目功能边界正在向外扩展：

*   **硬件生态集成**: Issue #2675 (树莓派支持) 与 PR #2673 (跨平台串口工具) 显示项目正积极向 **AIoT/硬件控制** 方向延伸。
*   **模型兼容性**: PR #2681 (Gemini) 和 PR #2679 (ChatGPT OAuth) 表明项目正致力于打通主流模型的非标准接入方式。
*   **架构演进**: PR #2680 (统一消息类型) 和 PR #2677 (运行时事件基础设施) 是重要的底层重构，预示着后续版本将支持更复杂的 Agent 编排与监控能力。

**纳入预测**: PR #2681 (Gemini Fix) 和 PR #2679 (ChatGPT OAuth) 均为关键兼容性修复，预计将优先合并进入下一版本。

## 7. 用户反馈摘要
*   **痛点**:
    *   **安全性误杀**: 用户在使用 `exec` 工具执行网络请求等非文件操作时，被安全守卫机制误判拦截（#1042），期望更智能的命令审查机制。
    *   **UI 冗余**: 部分用户希望关闭 v0.2.7 版本中强制显示的 "Thinking" 过程（#2628），倾向于更简洁的对话界面。
*   **场景**: 用户尝试在树莓派 Zero 2W 等低功耗设备上部署，表明 PicoClaw 在本地轻量化运行方面有明确需求。
*   **反馈**: 社区对 PR #997 (Exa Search) 的关闭表示困惑，暗示项目维护者需加强与贡献者关于 PR 关闭原因的沟通，避免挫伤贡献积极性。

## 8. 待处理积压
*   **Issue #295 (智能模型路由)**: 该需求自 2 月提出至今，评论已达 10 条，属于高价值功能。目前尚未见明确 Assigned 或相关 PR，建议维护者将其提上 Roadmap 或引导社区贡献。
*   **PR #2239 (Docker Privileged Mode)**: 自 4 月 1 日开启至今未合并，涉及 Docker 权限配置，可能存在安全隐患讨论，需维护者定夺。
*   **PR #2653 (MQTT Channel)**: 提交于 4 月 24 日，新增了重要通信渠道支持，建议尽快 Review 以丰富 PicoClaw 的接入方式。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-27)

## 1. 今日速览
NanoClaw 项目今日保持**高活跃度**，开发重心明显向 **v2 架构迁移后的稳定性修复**倾斜。过去 24 小时内共有 16 个 PR 被合并或关闭，显示维护团队正在积极清理技术债务并整合社区贡献。项目出现重大品牌变更信号，核心 PR 显示项目正从 "NanoClaw" 重命名为 "Argus"。与此同时，新版本安装脚本的兼容性问题（如 OneCLI 路径、依赖下载）成为用户反馈的痛点，Issues 中出现了多个阻碍新用户入门的 Bug 报告。

## 2. 版本发布
*   **无新版本发布**。
*   **注意**：虽未发布正式版本，但 PR #1738 显示项目正在进行大规模重命名工作，预计下一版本将品牌升级为 **Argus**。

## 3. 项目进展
今日合并/关闭的关键 PR 极大地推动了 v2 架构的成熟度，主要集中在基础设施与配置灵活性上：

*   **品牌重塑**：PR [#1738](https://github.com/qwibitai/nanoclaw/pull/1738) 已合并，将项目名称从 NanoClaw 全面更改为 **Argus**，涉及 942 处替换，标志着项目定位的重大调整。
*   **v2 稳定性修复**：PR [#2031](https://github.com/qwibitai/nanoclaw/pull/2031) 修复了容器在 MCP 调用期间因心跳超时被强制终止的问题，显著提升了 Agent 运行时的稳定性。
*   **配置灵活性增强**：
    *   PR [#2023](https://github.com/qwibitai/nanoclaw/pull/2023) 支持传入自定义 `ANTHROPIC_BASE_URL`，解决了自定义端点被覆盖的问题。
    *   PR [#2030](https://github.com/qwibitai/nanoclaw/pull/2030) 与 [#2035](https://github.com/qwibitai/nanoclaw/pull/2035) 引入了远程 OneCLI 网关支持，降低了对本地依赖的要求。
*   **MCP 工具链修复**：PR [#2028](https://github.com/qwibitai/nanoclaw/pull/2028) 修复了 Claude Code 新版本对 `allowedTools` 的白名单限制，确保所有配置的 MCP 服务器能正常启动。

## 4. 社区热点
今日社区关注点集中在**部署灵活性**与**即时通讯渠道的细节体验**：

*   **开放性需求**：Issue [#1930](https://github.com/qwibitai/nanoclaw/issues/1930) 讨论热烈，用户强烈建议支持其他模型及第三方 API 通道，反映出项目用户群体对摆脱单一模型依赖的迫切需求。
*   **渠道体验优化**：
    *   Issue [#2041](https://github.com/qwibitai/nanoclaw/issues/2041) 和 [#2042](https://github.com/qwibitai/nanoclaw/issues/2042) 聚焦于 Telegram 端的 Emoji 反应功能，指出了当前版本在跨平台符号映射上的缺陷。
    *   Issue [#2044](https://github.com/qwibitai/nanoclaw/issues/2044) 指出 Discord 适配器破坏了原有的 URL 预览抑制机制，影响了高级用户的消息展示体验。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在**初次安装体验**与**多渠道适配**，部分已有修复方案：

*   **严重**：
    *   Issue [#2026](https://github.com/qwibitai/nanoclaw/issues/2026)：依赖服务 `onecli.dev` 返回 521 错误，导致安装脚本直接失败，阻碍新用户部署。
    *   Issue [#1973](https://github.com/qwibitai/nanoclaw/issues/1973)：v2 版本在 Linux 上因 PATH 环境变量未传递导致 `onecli not found`，影响无 root 权限或非标准 Shell 用户。
*   **中等**：
    *   Issue [#2025](https://github.com/qwibitai/nanoclaw/issues/2025)：安装脚本在需要 sudo 密码时假死，用户体验极差。
    *   Issue [#2032](https://github.com/qwibitai/nanoclaw/issues/2032)：计划任务的预检脚本在特定并发场景下失效。
        *   *修复状态*：已有修复 PR [#2033](https://github.com/qwibitai/nanoclaw/pull/2033) 待合并。
    *   Issue [#2043](https://github.com/qwibitai/nanoclaw/issues/2043)：Telegram 消息过度转义，导致显示 `&apos;` 而非撇号。

## 6. 功能请求与路线图信号
*   **模型支持扩展**：Issue [#1930](https://github.com/qwibitai/nanoclaw/issues/1930) 提出的第三方 API 支持，与已合并的 PR [#2023](https://github.com/qwibitai/nanoclaw/pull/2023)（自定义 Base URL）方向一致，预示项目正逐步走向多模型兼容。
*   **资源管控**：Issue [#2029](https://github.com/qwibitai/nanoclaw/issues/2029) 建议增加 Docker 容器的内存与 CPU 限制，这对于在资源受限环境（如 NAS 或小型 VPS）中运行 Agent 至关重要，建议纳入近期路线图。
*   **Signal 支持**：PR [#2040](https://github.com/qwibitai/nanoclaw/pull/2040) 正在推进 Signal 协议的出站附件支持，将完善隐私通讯渠道的功能闭环。

## 7. 用户反馈摘要
用户反馈主要集中在 v2 版本升级后的**部署门槛**与**渠道适配细节**：
*   **痛点**：v2 架构引入的 `onecli` 依赖在安装环节故障率高（网络问题、路径问题），导致部分用户无法完成初始化。
*   **场景**：大量用户尝试将 Agent 接入 Telegram 和 Discord，对消息格式（URL 预览、Emoji 反应）的敏感度极高。
*   **满意度**：社区对项目更名 Argus 及 v2 架构重构总体持观望态度，但对远程 OneCLI 支持（PR #2030）表示欢迎，认为降低了本地环境配置难度。

## 8. 待处理积压
以下重要 Issue 长期未得到有效解决或处于未响应状态，建议维护者关注：

*   **安装阻断问题**：Issue [#2026](https://github.com/qwibitai/nanoclaw/issues/2026)（onecli.dev 521 错误）已存在一天，若无临时镜像方案，将持续流失新用户。
*   **架构级 Bug**：Issue [#2002](https://github.com/qwibitai/nanoclaw/pull/2002)（Agent 间回复路由错乱）目前为开放 PR，涉及多会话并发的核心逻辑，需优先 Review。
*   **功能请求**：Issue [#1930](https://github.com/qwibitai/nanoclaw/issues/1930) 关于第三方模型支持的讨论，建议官方给出明确的 Roadmap 反馈。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-04-27)

## 1. 今日速览
NullClaw 项目今日整体活跃度较低，代码库无提交合并或版本发布动态。社区层面，焦点主要集中在 WSL2 环境下的性能问题上，出现了一个关于网关进程 CPU 占用异常的高优先级 Bug 报告。尽管过去 24 小时内仅有一例 Issue 更新，但该问题涉及核心网关组件的稳定性，值得开发团队重点关注。目前项目处于平稳维护期，暂无新功能迭代迹象。

## 2. 版本发布
无

## 3. 项目进展
今日无合并或关闭的 Pull Request，项目代码库无向前推进的实质性变更。

## 4. 社区热点
今日社区讨论最为活跃（也是唯一）的议题是关于 WSL2 环境下的性能问题：
*   **Issue #870 [OPEN] Gateway accept4 busy loop (100% CPU) on WSL2** [链接](nullclaw/nullclaw Issue #870)
    *   **分析**：该 Issue 报告了在 WSL2 环境下运行网关时出现的 CPU 空转 100% 现象。尽管这仅是今日的单条更新，但其涉及的“busy loop”问题直接指向了底层系统调用的兼容性，可能导致开发者在 Windows 生态下的使用体验严重受损。目前已有 1 条评论，表明社区成员已开始介入或关注此问题。

## 5. Bug 与稳定性
今日报告了 1 例严重影响系统资源的 Bug，暂无修复 PR：
*   **[严重] WSL2 环境下网关 CPU 满载**
    *   **Issue**: #870 [Gateway accept4 busy loop (100% CPU) on WSL2](nullclaw/nullclaw Issue #870)
    *   **详情**: 用户 @weissfl 报告在 WSL2 (Windows 11) 环境中运行 `nullclaw gateway` 时，某一线程持续占用 100% CPU，呈现 busy loop 状态。初步推测可能与 `accept4` 系统调用在 WSL2 上的行为有关。
    *   **影响**: 虽然网关功能（如 Telegram 机器人）仍可响应，但持续的 CPU 满载会导致设备发热、耗电增加，严重影响生产环境部署。
    *   **状态**: 待修复。

## 6. 功能请求与路线图信号
今日无新增功能请求。从现有 Bug 报告来看，下一阶段若进行版本迭代，**跨平台兼容性优化**（特别是针对 WSL2 这类非原生 Linux 环境）可能需要纳入考量。

## 7. 用户反馈摘要
*   **痛点**：WSL2 用户在进行本地开发测试时遭遇严重的性能瓶颈。用户反馈虽然功能未受损，但资源占用极其不合理。
*   **场景**：开发者在 Windows 11 上通过 WSL2 运行 NullClaw 网关，期望能像在原生 Linux 上一样平稳运行，但实际遭遇了 CPU 资源耗尽的问题。
*   **满意度**：功能性上用户确认“机器人能响应”，说明核心逻辑健壮；但在特定环境的资源管理上存在明显短板。

## 8. 待处理积压
*   **[需关注] Issue #870**: 该 Bug 直接影响 WSL2 用户的开发体验，且涉及 100% CPU 占用，属于高优先级问题。建议维护者尽快确认是否为 WSL2 内核与项目 I/O 多路复用机制的已知冲突，并给出临时规避方案或修复计划。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 (2026-04-27)

## 1. 今日速览
IronClaw 项目今日整体呈现“基础设施维护为主、严重 Bug 预警为辅”的态势。项目活跃度中等，共有 8 个 PR 更新，主要集中在依赖升级和新贡献者的功能优化。值得注意的是，自动化 Canary 测试在 OAuth 和主流 Provider（OpenAI、Anthropic）环节连续失败，显示出潜在的不稳定性。此外，用户报告了一个严重影响多会话体验的“跨会话响应污染”Bug，目前尚未有修复 PR 关联，建议维护者优先排查。

## 2. 版本发布
无

## 3. 项目进展
今日项目在安全性架构和基础设施构建方面有明显推进：
*   **运行时安全架构清理**：核心贡献者提交的 PR [#2969](https://github.com/nearai/ironclaw/pull/2969) 已关闭。该变更重构了运行时权限边界，密封了进程资源预留，防止调用方绕过资源限制。这标志着项目在多租户/沙箱安全性上迈出了关键一步。
*   **新贡献者功能优化**：PR [#2974](https://github.com/nearai/ironclaw/pull/2974) 由新贡献者提交，旨在改进 TUI（终端用户界面）的对比度并修复进程残留问题（解决终端挂断后孤儿进程存活的隐患），提升了本地开发体验。
*   **部署方式改进**：PR [#2970](https://github.com/nearai/ironclaw/pull/2970) 切换至直接从源码构建 Railway，移除了对 GHCR 镜像可见性的依赖，简化了部署流程。

## 4. 社区热点
*   **跨会话 Bug 讨论** ([#2833](https://github.com/nearai/ironclaw/issues/2833))：今日最活跃的用户反馈。用户报告在 AI 进行推理任务时切换会话，会导致前一会话的响应流错误显示在当前会话中。这直接暴露了前端状态管理在异步流处理上的缺陷，影响了作为个人助手的可用性。
*   **企业微信渠道集成** ([#2394](https://github.com/nearai/ironclaw/pull/2394))：该大型 PR 仍在活跃更新，旨在通过 WASM 引入独立的 WeCom（企业微信）渠道。这反映了社区对将 IronClaw 接入更多企业级通讯平台的强烈需求。

## 5. Bug 与稳定性
今日报告了多个稳定性问题，按严重程度排列如下：

*   **[严重] 功能逻辑缺陷 - 跨会话数据污染**
    *   Issue: [#2833](https://github.com/nearai/ironclaw/issues/2833)
    *   描述：多任务并发场景下，会话 A 的推理内容会串入会话 B 的界面。
    *   状态：**Open**，暂无 Fix PR。

*   **[中等] CI/CD 流水线失败**
    *   Issue: [#2975](https://github.com/nearai/ironclaw/issues/2975) - `private-oauth` lane 失败。
    *   Issue: [#2968](https://github.com/nearai/ironclaw/issues/2968) - `openai-compatible` provider lane 失败。
    *   Issue: [#2967](https://github.com/nearai/ironclaw/issues/2967) - `anthropic` provider lane 失败。
    *   分析：多个核心 Provider 测试失败可能由上游 API 变动或内部适配层变更引起，需警惕版本兼容性问题。

## 6. 功能请求与路线图信号
*   **企业级通讯渠道拓展**：PR [#2394](https://github.com/nearai/ironclaw/pull/2394) 虽然尚未合并，但持续的更新表明项目正在积极构建 `wecom` (企业微信) 渠道。这暗示项目路线图正从单一的个人助手向“集成多种 IM 平台的统一 AI 中台”演进。
*   **依赖现代化**：Dependabot 提交了大量依赖升级 PR（如 [#2972](https://github.com/nearai/ironclaw/pull/2972) 升级 Wasmtime 至 44.0.0），表明项目正在跟进最新的 Rust 生态和异步运行时特性。

## 7. 用户反馈摘要
今日的用户反馈集中在**高频交互场景下的状态隔离**问题上：
*   用户 @sunglow66ing 指出，当 AI 执行长耗时推理（如多步计划）时，用户切换到其他会话查看或操作，会导致界面数据混乱。
*   这反映了真实用户在使用个人 AI 助手时，存在“多线程并行操作”的习惯，而非等待单一任务结束。项目的前端状态管理（Store 或 Stream 处理）需要更强的会话隔离机制。

## 8. 待处理积压
*   **长期未合并的大型 PR**：PR [#2394](https://github.com/nearai/ironclaw/pull/2394) (WeCom Channel) 已创建两周，标签为 `size: XL` 和 `risk: high`，涉及大量底层重构。建议维护者增加 Review 资源，防止功能积压。
*   **严重 Bug 未响应**：Issue [#2833](https://github.com/nearai/ironclaw/issues/2833) 涉及核心交互逻辑错误，且已存在数日，今日虽更新但仍有 0 评论。建议项目组尽快确认修复计划。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-27)

## 1. 今日速览
LobsterAI 项目今日整体活跃度较低，主要表现为社区旧有问题（Stale Issues）的自动激活与一个配置更新类 PR 的关闭。过去 24 小时内无新版本发布，且无新增的开源 Issue 或 Bug 报告，现有的活跃记录均来自 2 月份的历史遗留问题被用户评论重新唤醒。项目核心开发重心似乎集中在模型配置的维护上，今日关闭的 PR 涉及火山引擎与通义千问模型的默认配置更新。整体来看，项目处于维护模式，社区反馈的响应速度较慢，存在明显的积压现象。

## 2. 版本发布
无。

## 3. 项目进展
今日项目进展主要集中在模型适配层的维护：
*   **模型配置更新 (已关闭):** PR [#1828](https://github.com/netease-youdao/LobsterAI/pull/1828) 于今日关闭。该 PR 旨在更新火山引擎和通义千问的默认模型配置。具体包括：火山引擎模型默认开启图像支持并调整了推荐顺序；通义千问新增了 `qwen3.6-plus` 作为首选默认模型。虽然该 PR 已关闭（未显示合并），但表明项目正在跟进主流大模型服务的更新迭代，确保智能体对多模态和新版模型的支持能力。

## 4. 社区热点
今日社区活跃主要集中在历史功能请求与使用障碍的讨论上，反应最多的 Issue 是关于 Token 统计与日志功能：
*   **功能请求热榜:** Issue [#88](https://github.com/netease-youdao/LobsterAI/issues/88) 获得了 3 个点赞。用户强烈建议加入 Token 使用统计仪表盘和日志输出功能。这反映了用户在使用自定义 API 或进行复杂调试时，缺乏可观测性工具是当前的一大痛点。
*   **高频讨论:** Issue [#60](https://github.com/netease-youdao/LobsterAI/issues/60) 有 3 条评论，讨论了 DeepSeek 模型超出上下文长度的问题。这表明在处理长文本对话时，LobsterAI 的上下文管理策略（如截断、摘要机制）可能存在优化空间。

## 5. Bug 与稳定性
今日无新增 Bug 报告，但历史遗留的稳定性问题依然存在：
1.  **严重 - 上下文溢出:** Issue [#60](https://github.com/netease-youdao/LobsterAI/issues/60) 报告在使用 DeepSeek 模型时触发 `400 Bad Request`，原因是 Token 数超出模型限制（131072 tokens）。目前尚无修复 PR，属于影响正常使用的功能性缺陷。
2.  **中等 - 路径配置错误:** Issue [#40](https://github.com/netease-youdao/LobsterAI/issues/40) 指出 Windows 版本在自定义安装路径后，Agent 仍在 C 盘创建文件并查找 SKILLs，导致运行报错。这影响了 Windows 用户的自定义部署体验。
3.  **低 - 网络访问受限:** Issue [#52](https://github.com/netease-youdao/LobsterAI/issues/52) 反映无法访问微信公众号文章，可能与网络代理或爬虫策略有关。

## 6. 功能请求与路线图信号
*   **可观测性增强:** 用户对日志输出 ([#88](https://github.com/netease-youdao/LobsterAI/issues/88)) 的需求强烈。结合今日关闭的 PR #1828 涉及多模型适配来看，未来版本若能增强 Token 监控和 Debug 日志，将极大提升开发者体验。
*   **上下文管理优化:** 针对 Issue [#60](https://github.com/netease-youdao/LobsterAI/issues/60) 的上下文溢出问题，项目可能需要引入自动压缩历史对话或分段处理的机制，以支持超长上下文模型。

## 7. 用户反馈摘要
*   **调试困难:** 用户反馈在对接自定义 API 时报错晦涩，缺乏日志支持，难以定位问题。
*   **资源管理痛点:** 用户对 Token 消耗缺乏感知，希望有可视化的统计面板。
*   **平台兼容性:** Windows 用户在非默认路径安装时遇到文件读写冲突，影响了部署的灵活性。
*   **模型支持:** 社区关注 DeepSeek 等主流模型的长上下文处理能力。

## 8. 待处理积压
以下重要 Issue 已被标记为 `[stale]` 且长期未获官方实质性解决，建议维护者关注：
*   Issue [#60](https://github.com/netease-youdao/LobsterAI/issues/60): DeepSeek 模型上下文长度溢出问题，直接影响核心对话功能。
*   Issue [#40](https://github.com/netease-youdao/LobsterAI/issues/40): Windows 环境下安装路径与工作目录不一致问题。
*   Issue [#88](https://github.com/netease-youdua/LobsterAI/issues/88): 日志与 Token 统计功能请求，属于提升用户体验的关键点。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-27)

## 1. 今日速览
Moltis 项目今日呈现高活跃度开发状态，共处理 **13 个 PR**（其中 10 个已合并/关闭）和 **6 个 Issue**（4 个已修复）。项目重心明显向**安全性增强**与**资源优化**倾斜，修复了 API Key 明文存储和 Skill 导入安全校验缺失等关键漏洞，并引入了本地 LLM 按需加载机制。尽管核心功能推进迅速，但 UI 层出现了一次回归问题，导致 Session 编辑功能受损。整体来看，项目处于快速迭代修复期，安全性得到了显著加固。

## 2. 版本发布
- **版本号**: `20260426.05`
- **更新解读**: 此版本主要整合了昨日的一系列关键修复。重点包括修复 Web UI 代码块深色模式下的白屏闪烁问题，以及解决 Bundled Skill 无法禁用的配置逻辑错误。建议用户尽快升级以获得更稳定的 UI 体验。

## 3. 项目进展
今日合并的关键 PR 极大地提升了项目的安全性与资源管理能力：

- **安全性加固**:
    - [PR #885](https://github.com/moltis-org/moltis/pull/885): 修复了 Voice API Keys 明文存储在 `moltis.toml` 中的安全隐患，现改为存储在加密的 KeyStore 中。
    - [PR #882](https://github.com/moltis-org/moltis/pull/882): 修复了从代码库导入 Skill 时自动信任/启用所有 Skill 的安全漏洞，防止恶意 Skill 未经审查进入系统。
- **资源优化**:
    - [PR #884](https://github.com/moltis-org/moltis/pull/884): 引入本地 LLM 模型的按需加载与闲置卸载机制，支持手动/自动 RPC 控制，有效降低空闲时的内存占用。
- **功能完善与修复**:
    - [PR #883](https://github.com/moltis-org/moltis/pull/883): 修复了非标准格式 Skill 仓库导入时的路径解析错误。
    - [PR #886](https://github.com/moltis-org/moltis/pull/886): 调整 Web UI 布局，将状态徽章移至工具栏可见行（但也引发了新的 UI 回归问题）。
    - [PR #877](https://github.com/moltis-org/moltis/pull/877) & [PR #878](https://github.com/moltis-org/moltis/pull/878): 修复了 Bundled Skill 无法通过 Web UI 禁用的问题。

## 4. 社区热点
- **[PR #339 feat(i18n): add zh-TW Traditional Chinese locale support](https://github.com/moltis-org/moltis/pull/339)**:
    该 PR 自 3 月初开启，今日再次活跃。社区对繁体中文支持的需求持续存在，目前仍在待合并状态，是国际化进展中的重要一环。
- **[Issue #881 Security: Skill import enables all skills unchecked](https://github.com/moltis-org/moltis/issues/881)**:
    用户 @bsarkisov 报告了严重的安全隐患，指出 Skill 导入流程存在绕过安全审查的风险。维护者响应迅速，当日即通过 PR #882 修复并关闭该 Issue，体现了项目对安全问题的零容忍态度。

## 5. Bug 与稳定性
今日修复了多个功能性 Bug，但同时也引入了一个新的 UI 回归：

- **严重 - 已修复**:
    - **[Issue #867] Voice API Keys 明文存储**: 安全风险已通过 PR #885 修复，密钥现已加密存储。
- **功能故障 - 已修复**:
    - **[Issue #880] Skill 导入路径错误**: 导致无法读取 Skill 文件，已通过 PR #883 修复。
    - **[Issue #875] Bundled Skill 无法禁用**: 配置逻辑冲突，已通过 PR #877/#878 修复。
- **回归问题 - 待处理**:
    - **[Issue #888] Session 名称与重命名按钮消失**: **严重程度高**。由今日合并的 PR #886 引入，导致用户无法在 Web UI 编辑 Session 名称。目前 Issue 处于 Open 状态，需维护者紧急关注。

## 6. 功能请求与路线图信号
- **模块化架构推进**: [PR #891](https://github.com/moltis-org/moltis/pull/891) 提议将 Telegram 频道设为可选编译项，旨在减少二进制体积和构建时间。这符合 Moltis 向轻量化、模块化演进的趋势，目前该 PR 处于 Open 状态，是继之前其他 Channel 模块化后的延续。
- **Prompt 工程增强**: [Issue #887](https://github.com/moltis-org/moltis/issues/887) 建议支持 `PREAMBLE.md` 作为 Prompt Profile 的模板变量。这反映了高级用户对 Agent 人设与上下文注入精细度控制的诉求，可能与正在开发的 Prompt Profile 系统（#466）结合。

## 7. 用户反馈摘要
- **安全意识提升**: 用户对敏感信息（如 API Key）的存储方式表现出高度敏感，明文存储方案被明确指出是不可接受的，项目组的快速修复获得了隐性认可。
- **UI 交互细节敏感**: 用户对 UI 布局调整非常敏感，PR #886 试图优化状态显示，但移除了常用的 "More" 模态框导致功能丢失（Issue #888），说明用户对 UI 变更的容忍度较低，需更谨慎的兼容性处理。

## 8. 待处理积压
- **[Issue #888] UI 回归问题**: Session 名称不可见/不可编辑，严重影响 Web 端基础使用体验，建议优先修复。
- **[PR #876] Web 端文件上传功能**: 该 PR 已开启数日，为 Web 端添加文件上传按钮，功能符合主流 LLM 交互习惯，建议维护者尽快 Review 以提升 Web 端体验。
- **[PR #891] Telegram 模块可选化**: 代码准备度较高，等待合并以优化构建产物。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-04-27)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持高活跃度，社区反馈热烈，过去 24 小时内新增/活跃 Issue 达 18 条，显示出用户对项目的关注度持续上升。然而，项目今日无新版本发布，且 **7 个待合并 PR 中无一合并**，导致部分严重的稳定性问题（如 Docker 配置丢失、DeepSeek 模型兼容性）仍未得到官方修复发布。社区贡献主要集中在模型管理优化和渠道修复上，但合入进度的滞后可能会影响用户对新功能的体验。整体来看，项目处于快速迭代与问题暴露并存的阶段，急需加速 PR 审核与发布流程。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日虽无 PR 合并，但有 7 个重要的 PR 正在审查中，这些进展反映了社区正在解决的关键方向：
- **前端交互修复 ([PR #3857](https://github.com/agentscope-ai/QwenPaw/pull/3857))**：针对多标签页切换导致对话上下文串扰的问题，提出了混合存储策略，有望显著改善多任务并行的用户体验。
- **模型管理增强 ([PR #3819](https://github.com/agentscope-ai/QwenPaw/pull/3819))**：重构了模型管理模块，支持远程模型列表浏览与批量添加，旨在替代原本繁琐的手动注册流程，回应了用户对模型接入便捷性的强需求。
- **生态扩展 ([PR #3846](https://github.com/agentscope-ai/QwenPaw/pull/3846))**：新增了对 GitHub Copilot 模型提供商的支持，进一步丰富了可选模型生态。
- **渠道修复 ([PR #3839](https://github.com/agentscope-ai/QwenPaw/pull/3839), [PR #3845](https://github.com/agentscope-ai/QwenPaw/pull/3845))**：针对 XiaoYi 渠道协议和 QQ 语音消息进行了修复与增强，提升了多端集成的稳定性。

## 4. 社区热点
今日讨论最活跃的话题集中在性能与配置稳定性上：
- **接口响应延迟问题 ([Issue #3499](https://github.com/agentscope-ai/QwenPaw/issues/3499))**：多位用户反馈页面访问及 API 调用时快时慢，严重影响使用体验。该问题自 4 月中旬持续至今，亟待官方排查根因。
- **Docker 配置持久化失效 ([Issue #3817](https://github.com/agentscope-ai/QwenPaw/issues/3817))**：Docker 用户报告容器重启后向量模型配置被重置。由于 QwenPaw 主打 Docker 部署，此问题引发了较多共鸣，评论数达 4 条。
- **多标签页对话串扰 ([Issue #3852](https://github.com/agentscope-ai/QwenPaw/issues/3852))**：用户在使用多标签页时遇到对话上下文混乱，准确切中了 Web 端并发管理的痛点。

## 5. Bug 与稳定性
今日报告了多个严重程度较高的 Bug，且目前多处于 Open 状态，未见官方修复 PR 合入：

### 🔴 严重
- **Chromadb 崩溃导致进程终止 ([Issue #3854](https://github.com/agentscope-ai/QwenPaw/issues/3854))**：Linux 环境下 `chromadb` Rust 绑定引发段错误 (SIGSEGV)，直接导致整个 Agent 进程崩溃，缺乏容错机制。
- **DeepSeek Thinking 模式执行失败 ([Issue #3851](https://github.com/agentscope-ai/QwenPaw/issues/3851))**：调用 DeepSeek V4 等模型时，因未正确处理 `reasoning_content` 字段导致 `MODEL_EXECUTION_FAILED`，属于核心推理逻辑缺陷。

### 🟠 中等
- **Web UI 暂停功能形同虚设 ([Issue #3850](https://github.com/agentscope-ai/QwenPaw/issues/3850))**：点击暂停仅停止前端渲染，后端 Agent 仍继续执行工具调用，造成资源浪费且无法恢复。
- **Debian 页面冻结 ([Issue #3853](https://github.com/agentscope-ai/QwenPaw/issues/3853))**：非 root 用户下保存设置会导致页面卡死，需重启服务。该 Issue 今日已关闭，可能已定位原因。
- **定时任务渠道错误 ([Issue #3783](https://github.com/agentscope-ai/QwenPaw/issues/3783))**：配置为微信渠道的定时任务被错误分发至 Console。

## 6. 功能请求与路线图信号
- **模型自动发现与批量导入**：[Issue #3844](https://github.com/agentscope-ai/QwenPaw/issues/3844) 呼吁简化新模型注册流程。结合 [PR #3819](https://github.com/agentscope-ai/QwenPaw/pull/3819) 的进展，该功能极大概率在下个版本中落地，这将显著改善多模型管理体验。
- **源码包集成前端构建物**：[Issue #3856](https://github.com/agentscope-ai/QwenPaw/issues/3856) 建议发布源码包时包含编译后的前端代码，旨在降低非 Docker 用户的部署门槛。
- **记忆优化重试机制**：[Issue #3820](https://github.com/agentscope-ai/QwenPaw/issues/3820) 提出为记忆优化（dream_callback）增加重试机制，以应对 LLM API 抖动，显示出用户对长期记忆稳定性的关注。

## 7. 用户反馈摘要
用户反馈主要揭示了以下痛点：
1.  **Docker 部署体验不完善**：除了配置丢失问题外，还有用户反馈无法从备份恢复 secrets ([Issue #3827](https://github.com/agentscope-ai/QwenPaw/issues/3827))，表明 Docker 化的数据管理逻辑仍需打磨。
2.  **Web 端控制力薄弱**：用户期望 Web UI 能更完整地控制 Agent 行为（如暂停功能），并解决状态同步问题（如 Session 历史消失 [Issue #3843](https://github.com/agentscope-ai/QwenPaw/issues/3843)）。
3.  **特定模型适配不足**：DeepSeek 等具有特殊推理字段的模型兼容性不佳，导致多轮对话失败。

## 8. 待处理积压
- **性能瓶颈 ([Issue #3499](https://github.com/agentscope-ai/QwenPaw/issues/3499))**：页面访问慢的问题已持续多日，评论数较多但未见实质性修复进展，建议优先排查。
- **Matrix 渠道失效 ([Issue #1426](https://github.com/agentscope-ai/QwenPaw/issues/1426))**：该问题于 3 月提出，今日虽已关闭，但需确认是否已彻底修复或仅是状态更新。
- **Cron 任务 KeyError ([Issue #3573](https://github.com/agentscope-ai/QwenPaw/issues/3573))**：涉及微信渠道的定时任务执行失败，已持续一周，影响自动化场景使用。

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