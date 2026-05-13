# OpenClaw 生态日报 2026-05-13

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-13 03:40 UTC

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

# OpenClaw 项目动态日报 (2026-05-13)

## 1. 今日速览
OpenClaw 项目今日保持极高的社区活跃度，过去24小时内 Issues 与 PR 更新量均达到 500 条，显示出项目正处于快速迭代期。项目组在今日连续发布了 `v2026.5.12-beta.1/2/3` 三个版本，重点修复了 Codex 运行时的鉴权配置与 WhatsApp 依赖兼容性问题。然而，Issue 关闭率（14.4%）与 PR 合并率（7.4%）相对较低，表明社区反馈涌入速度略快于维护者的处理速度，存在一定的积压风险。稳定性方面，Windows 平台与多智能体协作仍是 Bug 报告的高发区。

## 2. 版本发布
今日发布了 **v2026.5.12-beta.3**（含 beta.1, beta.2），主要内容如下：

*   **核心修复**：
    *   **Codex Harness 鉴权优化**：修复了当 OpenAI 认证信息存储在 agent 的 `auth-profile` 而非环境变量时，`image_generate` 等媒体工具不可用的问题。这标志着 OpenClaw 正在强化其多运行时架构的鉴权体系。
    *   **WhatsApp 安装兼容性**：解决了 pnpm 11 环境下 Baileys 的 libsignal git 子依赖问题，确保源码安装顺利。
    *   **memory-wiki 权限收紧**：修复了 `ingest` 接口需要 admin 权限，以及 Obsidian 搜索需要 write 权限的问题 (Thanks @pgondhi987)。
*   **构建改进**：跳过被排除在构建条目之外的捆绑插件的元数据复制，防止更新/状态错误。

🔗 [Releases v2026.5.12-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.3)

## 3. 项目进展
今日共有 37 个 PR 被合并/关闭，以下是最关键的合并进展：

*   **自托管提供商发现逻辑修复** ([PR #81224](https://github.com/openclaw/openclaw/pull/81224))：修复了显式配置时自托管 wildcard 发现逻辑，确保 `/models` 端点能正确传递配置的 baseUrl。
*   **ACP 僵尸会话清理** ([PR #60720](https://github.com/openclaw/openclaw/pull/60720))：解决了当运行时工作目录（cwd）丢失时，绑定会话仍卡在失效 ACP 会话导致重复初始化失败的问题，显著提升了多智能体协作的鲁棒性。
*   **WhatsApp 消息格式保留** ([PR #42667](https://github.com/openclaw/openclaw/pull/42667))：修复了 WhatsApp 消息在流式传输中丢失段落/换行边界的问题，提升了端侧阅读体验。
*   **发布分支健康检查** ([PR #81268](https://github.com/openclaw/openclaw/pull/81268))：维护者合并了对 2026.5.12 发布分支的无操作验证 PR，确保 CI 流水线在发布前的基线健康度。

## 4. 社区热点
今日讨论最热烈的议题集中在连接稳定性与运行时架构迁移：

*   **[Issue #72808](https://github.com/openclaw/openclaw/issues/72808) - Slack 连接静默丢失** (👍 2, 评论 16)
    *   **诉求**：用户报告 Slack 连接在运行数天后静默断开，且无明确错误日志。这反映了生产环境下长连接通道监控的痛点。
*   **[Issue #80319](https://github.com/openclaw/openclaw/issues/80319) - QA 套件混淆 Codex 原生工具** (👍 1, 评论 14)
    *   **诉求**：深入探讨了 OpenClaw 动态工具与 Codex 原生工具的对等性问题，表明社区对底层运行时架构的关注度极高。
*   **[Issue #79902](https://github.com/openclaw/openclaw/issues/79902) - 数据库优先运行时的 SQLite 接口** (👍 2, 评论 12)
    *   **诉求**：高级用户希望在新的数据库优先运行时之上增加 SQLite 接口，以便于构建自定义监控或分析工具，无需解析内部二进制数据。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的关键 Bug，部分已有修复 PR：

### 🔴 严重/阻塞级
*   **[Issue #81214](https://github.com/openclaw/openclaw/issues/81214) - OpenClaw 2026.5.7 子智能体回归**
    *   新版本导致使用 Ollama 运行时的本地子智能体执行失败，属于严重回归，影响多智能体工作流。
*   **[Issue #73182](https://github.com/openclaw/openclaw/issues/73182) - Claude 模型 Reasoning 默认开启导致费用翻倍**
    *   4 月更新静默更改了 Claude 模型默认配置，开启 Extended Thinking，导致用户 Token 消耗和费用意外翻倍，且思考过程泄露到聊天界面。
*   **[Issue #71127](https://github.com/openclaw/openclaw/issues/71127) - 会话卡死且无法自动恢复**
    *   系统能检测到卡死的处理会话，但无法中止，导致网关需手动重启。

### 🟠 平台特定/功能异常
*   **[Issue #73874](https://github.com/openclaw/openclaw/issues/73874) - Windows Docker 网关死锁**
    *   在 Windows + Docker Desktop bind-mount 环境下，HTTP/WS 调度死锁，网关日志显示 ready 但无法处理请求。
*   **[Issue #78435](https://github.com/openclaw/openclaw/issues/78435) - Slack 启动阻塞事件循环**
    *   Windows 平台下，Slack 启动阶段若遇模型调用，可能阻塞网关事件循环长达 5 分钟以上。
*   **[Issue #80777](https://github.com/openclaw/openclaw/issues/80777) - 旧版明文 Token 未清理 [CLOSED]**
    *   升级后，历史日志中的明文 Token 未被清洗，存在安全隐患。该 Issue 已关闭，但提醒用户需关注历史日志。

## 6. 功能请求与路线图信号
*   **沙箱隔离与代理支持** ([Issue #37487](https://github.com/openclaw/openclaw/issues/37487))：用户请求支持多智能体并发执行时的独立浏览器实例与代理配置，结合近期 PR #64281 (sessions_delegate)，预示多智能体并发架构将是下一阶段重点。
*   **Skill 安装钩子** ([Issue #80213](https://github.com/openclaw/openclaw/issues/80213))：提议在 Skill 安装后执行脚本，填补了当前 `brew/node` 等安装方式无法覆盖的复杂初始化场景空白。
*   **SQLite Transcript Seams** ([Issue #79902](https://github.com/openclaw/openclaw/issues/79902))：配合正在进行的数据库优先运行时重构，可能很快被纳入开发计划。

## 7. 用户反馈摘要
*   **连接稳定性痛点**：Slack 与 Telegram 连接的静默断开、重连失败是用户反馈最集中的痛点，特别是演示场景下的突发失效严重打击信心。
*   **成本控制焦虑**：默认开启 Reasoning 导致的账单激增引发用户强烈不满，建议默认配置应更加“省钱”或显式提示。
*   **Windows 支持薄弱**：多个 Issue (#73874, #72922, #78435) 指出 Windows 原生与 Docker 环境下的性能与死锁问题，Windows 平台支持质量有待提升。

## 8. 待处理积压
当前 **463 个待合并 PR** 和 **428 个活跃 Issue** 提示项目存在显著的审核与响应压力：

*   **长期未决的连接问题**：Issue #72808 (Slack 断连) 持续活跃但未解决，需维护者介入。
*   **安全相关 PR 待审**：PR #69567 (CI 中屏蔽 base64 auth header) 仍处于 Open 状态，涉及安全合规，建议优先合并。
*   **僵尸进程处理**：Issue #71412 (stopChannel 超时导致僵尸任务) 描述了一种难以恢复的内部状态错误，目前尚无明确修复方案。

---
*分析师总结*：OpenClaw 正处于向 Codex 运行时迁移的关键阵痛期，频繁的 Beta 版本发布体现了团队解决兼容性问题的决心。然而，底层架构的变动引发了诸如子智能体回归、工具对等性混淆等新问题。建议维护者优先处理影响成本和核心流程的回归 Bug，并关注 Windows 平台的稳定性积压。

---

## 横向生态对比

# AI 智能体开源生态横向对比分析日报 (2026-05-13)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**架构重塑与能力深水区**。头部项目（OpenClaw, IronClaw）正经历向新运行时或架构的重构，伴随而来的是稳定性阵痛与回归 Bug 的激增；中型项目则聚焦于**多模态、多渠道集成**及**企业级安全加固**。整体趋势显示，单纯的对话能力已不再是竞争壁垒，**长期记忆、沙箱安全、多智能体协作**以及**国产/开源模型适配**成为各项目竞相突围的关键赛道。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新/新开 | PRs 更新/合并 | Release 情况 | 健康度评估 | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (高涌) | 500 / 37 | v2026.5.12-beta.3 | ⚠️ 中 (积压严重) | 架构迁移期，Bug 积压，迭代极快 |
| **IronClaw** | 29 / 13 | 50 / 27 | 无 | 🟢 高 | 架构重构攻坚期，QA 压力大 |
| **CoPaw** | 31 (闭环45%) | 42 (闭环66%) | v1.1.7-beta.1 | 🟢 高 | 功能扩展期，多端适配，响应迅速 |
| **LobsterAI** | 1 | 25 / 24 | v2026.5.11 (预) | 🟢 高 | 功能收敛，发布前夕，开发高效 |
| **Zeroclaw** | 10 | 49 / 17 | 无 | 🟢 良好 | v0.8.0 集成阶段，多智能体探索 |
| **Hermes Agent** | 45 / 5 | 高 / 22 | 无 | 🟡 中高 | 安全加固期，部署与兼容性问题频发 |
| **NanoBot** | 7 | 19 / 7 | 无 | 🟢 良好 | 架构优化，模型兼容性迭代 |
| **PicoClaw** | 17 | 15 / 3 | v0.2.8-nightly | 🟡 中 | 硬件适配与安全修复并行 |
| **NanoClaw** | - | 19 / 5 | 无 | 🟡 中 | 安全争议，依赖架构调整 |
| **NullClaw** | 1 | 2 / 0 | 无 | 🟢 良好 | 稳步迭代，高质量 PR 待合并 |
| **ZeptoClaw** | 1 | - | 无 | 🟢 良好 | 维护模式，安全审计 |
| **TinyClaw / EasyClaw** | - | - | 无 | 🔴 低 | 无明显活动 |

> *注：健康度评估基于 Issue 处理效率、PR 合并速度及核心 Bug 影响程度。*

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照项目**，OpenClaw 展现出明显的规模效应与技术引领特征，但也面临"大而不当"的挑战：

*   **优势**：社区活跃度极高，率先推进 Codex 运行时架构迁移，试图解决鉴权与多运行时兼容性痛点；在 WhatsApp/Slack 等主流渠道集成上处于领先地位。
*   **技术路线差异**：相比 IronClaw 彻底重构的激进路线，OpenClaw 采取渐进式迁移，导致新旧架构并存期间回归 Bug 频发（如子智能体失效）；相比 NanoBot/NanoClaw 的轻量化，OpenClaw 显得厚重，积压问题远超同类。
*   **社区规模对比**：Issues/PRs 更新量级是第二名项目的 10 倍以上，积压风险（463 PR / 428 Issue）显著高于 IronClaw 或 CoPaw，提示其维护带宽已接近极限。

## 4. 共同关注的技术方向

多个项目在同一时间窗口内涌现出相似的技术需求与痛点，揭示了行业共性趋势：

1.  **模型生态适配（国产/开源模型）**：
    *   **涉及项目**：NanoBot (DeepSeek V4), Hermes Agent (Kimi/MiMo), PicoClaw (小米 MIMO/OpenVINO)。
    *   **具体诉求**：社区不再满足于仅支持 OpenAI，对 DeepSeek、小米等国产模型及本地推理的支持需求激增，且普遍面临新模型 API 参数（如 `reasoning_content`）适配滞后导致的崩溃问题。

2.  **沙箱安全与鉴权加固**：
    *   **涉及项目**：OpenClaw (Auth-profile), Hermes Agent (SSRF/TOCTOU), PicoClaw (沙箱逃逸), NanoClaw (端口暴露)。
    *   **具体诉求**：随着 Agent 工具调用能力的增强，沙箱隔离失效、默认端口暴露、敏感信息泄露等安全问题集中爆发，各项目均在加强防御边界。

3.  **多渠道消息稳定性**：
    *   **涉及项目**：OpenClaw (Slack/WhatsApp), CoPaw (微信/钉钉), Hermes Agent (Telegram), Zeroclaw (Discord/企微)。
    *   **具体诉求**：长连接静默断开、消息格式丢失、OAuth 认证失败是高频 Bug 来源。用户对“高可用”的连接体验需求超越了单纯的 AI 能力。

## 5. 差异化定位分析

*   **功能侧重**：
    *   **OpenClaw & Zeroclaw**：侧重**多智能体协作与运行时架构**，致力于解决复杂任务编排。
    *   **LobsterAI & PicoClaw**：侧重**本地化与硬件适配**，如 LobsterAI 的梦境记忆、PicoClaw 的 ARM64/边缘计算支持，适合极客与私有化部署场景。
    *   **CoPaw**：侧重**易用性与本土化生态**，内置微信/钉钉支持，发力预制模板，更偏向产品化落地。
    *   **Hermes Agent**：侧重**模型兼容性与安全**，成为多模型接入的“试验田”。

*   **目标用户**：
    *   **OpenClaw/IronClaw**：面向有一定技术实力的开发者和企业，提供底层框架。
    *   **CoPaw**：面向希望快速落地的终端用户和非技术人员。
    *   **NullClaw/ZeptoClaw**：面向特定技术栈或对稳定性有极高要求的场景。

## 6. 社区热度与成熟度

*   **第一梯队（快速迭代/扩张期）**：**OpenClaw, IronClaw, CoPaw**。特征：更新量大，版本发布频繁，但也伴随着大量的用户反馈和 Bug 积压，处于功能与稳定性的博弈期。
*   **第二梯队（稳健成长期）**：**NanoBot, Zeroclaw, LobsterAI**。特征：有明确的技术路线图（如 Zeroclaw 的 v0.8.0），PR 合并有序，社区反馈能较快转化为代码。
*   **第三梯队（深耕/维护期）**：**NullClaw, Hermes Agent, PicoClaw**。特征：侧重于特定领域的深入优化（如安全、硬件适配），活跃度中等但质量较高。
*   **低活跃/停滞期**：TinyClaw, EasyClaw, Moltis。

## 7. 值得关注的趋势信号

1.  **"上下文工程"成为新焦点**：
    *   NanoBot 的会话中断保留、LobsterAI 的“梦境记忆整合”、OpenClaw 的 SQLite 接口需求，均表明**单纯的向量检索已无法满足需求**，结构化的长期记忆管理和上下文压缩技术正在成为 Agent 的核心竞争力。

2.  **成本控制与模型降级刚需化**：
    *   NanoBot 明确推进 `fallback_models` 机制，OpenClaw 用户抱怨 Reasoning 默认开启导致费用翻倍。这预示着**高性价比模型路由策略**（如 DeepSeek + GPT 混合）将成为开源项目的标配功能。

3.  **Web UI 体验成为瓶颈**：
    *   IronClaw 和 CoPaw 均收到大量关于 Web UI 卡顿、时间戳错误、移动端适配的反馈。随着 Agent 能力增强，**前端交互的复杂度（如流式输出、文件预览、会话管理）已逐渐成为短板**，亟需架构级优化。

4.  **安全合规压力上升**：
    *   多个项目出现沙箱逃逸、端口暴露、Token 泄露等安全事故。这提醒开发者：**在追求 Agent 自主性的同时，安全边界的建设必须同步甚至超前**，否则将面临严重的信任危机。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-13)

## 1. 今日速览
NanoBot 项目今日保持高度活跃，社区贡献与核心开发并行推进。过去 24 小时内共有 19 个 PR 更新与 7 个 Issue 更新，其中 7 个 PR 成功合并，主要集中于架构重构与多渠道适配优化。项目在模型兼容性（DeepSeek V4、Bedrock）与稳定性（SSRF 防护、上下文保留）方面取得了实质性进展，同时社区对多模型切换与长任务处理的呼声日益高涨。

## 2. 项目进展
今日共有 7 个 PR 合并/关闭，显著提升了项目的健壮性与灵活性：

*   **核心架构重构**：PR [#3757](https://github.com/HKUDS/nanobot/pull/3757) 移除了 `ask_user` 工具，改为基于自然对话流的交互，简化了控制逻辑；PR [#3714](https://github.com/HKUDS/nanobot/pull/3714) 引入了 `ModelPresetConfig`，支持运行时模型预设切换，为动态模型降级奠定了基础。
*   **渠道与适配**：PR [#3747](https://github.com/HKUDS/nanobot/pull/3747) 为飞书增加了 `topic_isolation` 开关，解决了群聊多文件隔离问题；PR [#3758](https://github.com/HKUDS/nanobot/pull/3758) 修复了 AWS Bedrock 历史工具调用缺失导致的报错。
*   **安全与清理**：PR [#3635](https://github.com/HKUDS/nanobot/pull/3635) 优化了 SSRF 防护策略，使其对 Agent 运行时的干扰更小；PR [#3755](https://github.com/HKUDS/nanobot/pull/3755) 清理了约 103 行死代码，提升了代码库健康度。

## 3. 社区热点
今日讨论最热烈的问题集中在模型兼容性与上下文管理：

*   **Issue [#235](https://github.com/HKUDS/nanobot/issues/235) [CLOSED]**：长期存在的 "no response to give" 问题今日关闭。该问题涉及 Telegram 与 DeepSeek 的交互，获得了 9 个赞和 15 条评论，反映出用户对多渠道稳定性的高度关注。
*   **Issue [#3689](https://github.com/HKUDS/nanobot/issues/3689) [OPEN]**：用户反馈中断任务后上下文丢失的问题。这引发了关于 Agent 记忆机制的讨论，用户期望中断时能保留进度而非重置。目前已有 PR [#3765](https://github.com/HKUDS/nanobot/pull/3765) 尝试修复此问题。
*   **Issue [#3760](https://github.com/HKUDS/nanobot/issues/3760) [OPEN]**：关于 DeepSeek-V4-Flash 模型的 API 兼容性问题，用户在使用最新模型时遇到 `reasoning_content` 参数报错，显示出项目对前沿模型 API 变更的快速跟进需求。

## 4. Bug 与稳定性
今日报告的新 Bug 主要围绕新模型适配与会话管理，部分已有修复方案：

*   **严重 - DeepSeek V4 API 兼容性**：Issue [#3760](https://github.com/HKUDS/nanobot/issues/3760) 指出 `deepseek-v4-flash` 模型因 `reasoning_content` 字段导致 400 错误，目前尚在诊断中。Issue [#3753](https://github.com/HKUDS/nanobot/issues/3753) 为相似问题已关闭，建议临时切换模型。
*   **中等 - 会话中断上下文丢失**：Issue [#3689](https://github.com/HKUDS/nanobot/issues/3689) 描述了中断循环任务后 Agent "失忆" 现象。**已有修复 PR** [#3765](https://github.com/HKUDS/nanobot/pull/3765)，通过保留 session messages 解决该问题。
*   **中等 - 模型幻觉/忽略文件**：Issue [#3754](https://github.com/HKUDS/nanobot/issues/3754) 反映 DeepSeek V4 Flash 在处理小文件时倾向于使用内部知识而非工具读取。
*   **已修复 - 飞书群聊隔离**：Issue [#3692](https://github.com/HKUDS/nanobot/issues/3692) 提出的群聊 Topic 强隔离问题，已通过 PR [#3747](https://github.com/HKUDS/nanobot/pull/3747) 增加配置开关解决。

## 5. 功能请求与路线图信号
根据 Issue 与 PR 动态，以下功能可能在近期纳入版本规划：

*   **模型热切换与降级**：Issue [#3742](https://github.com/HKUDS/nanobot/issues/3742) 请求 `/model` 命令支持。虽然 Issue 已关闭，但合并的 PR [#3714](https://github.com/HKUDS/nanobot/pull/3714) 已实现预设切换，且 PR [#3756](https://github.com/HKUDS/nanobot/pull/3756) 正在推进 `fallback_models` 机制，预示着项目将支持更灵活的模型故障转移策略。
*   **长任务支持**：PR [#3460](https://github.com/HKUDS/nanobot/pull/3460) 提出的 `LongTaskTool` 已更新，旨在将长任务拆解为多步子代理执行，这是向高阶智能体演进的重要信号。
*   **用户体验增强**：PR [#3761](https://github.com/HKUDS/nanobot/pull/3761) 为 WhatsApp 增加了 "正在输入" 和表情反馈，PR [#3655](https://github.com/HKUDS/nanobot/pull/3655) 增加了推理过程展示，表明项目正致力于提升交互的透明度与流畅度。

## 6. 用户反馈摘要
*   **痛点**：DeepSeek V4 系列模型适配不完善，API 参数变更导致频繁报错；用户对 Agent 上下文记忆的预期高于当前实现，特别是任务被打断后的恢复能力。
*   **场景**：用户常在群聊环境（飞书/Telegram）中处理文件和长任务，对上下文隔离与保留有精细化需求；网络不稳定地区（如中国大陆访问 GPT-5.5）急需模型降级方案。
*   **满意度**：对飞书 Topic 隔离功能的快速响应（Issue 提出 2 天内即有 PR 合并）表示认可，但对模型更新带来的兼容性问题感到困扰。

## 7. 待处理积压
*   **PR [#3460](https://github.com/HKUDS/nanobot/pull/3460) (LongTaskTool)**：已开启 17 天，涉及复杂的多步任务重构，建议维护者优先 Review 以推进 Agent 长时程能力。
*   **PR [#3693](https://github.com/HKUDS/nanobot/pull/3693) (并发控制)**：旨在解决本地 LLM 并发请求导致的超时问题，对稳定性至关重要，目前状态为 Open，建议尽快推进合并。
*   **Issue [#3754](https://github.com/HKUDS/nanobot/issues/3754)**：模型忽略文件读取工具的问题，可能需要对 Tool Use 的 Prompt 进行针对性优化，暂无修复 PR。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-13)

## 1. 今日速览
Zeroclaw 项目今日保持高度活跃的开发状态，过去 24 小时内共有 49 条 PR 更新与 10 条 Issue 更新。项目处于 v0.8.0 版本发布前的密集集成阶段，PR 更新量显著且包含大型重构。社区方面，Issue 的新开与关闭数量持平（5:5），显示维护者对反馈的响应速度较快。今日重点关注多智能体架构提议与 v0.8.0 集成分支的进展，同时也修复了多个影响核心功能的 Bug（如 Discord 频道媒体处理）。整体来看，项目正积极推进架构升级与生态兼容性建设。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 17 条 PR 合并或关闭，项目在核心架构、可观测性及多平台兼容性上取得显著进展：

*   **架构重构与迁移准备**：巨型 PR [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) (Integration/v0.8.0) 持续更新，包含 Schema v3 迁移和模块标准化，标志着 v0.8.0 版本即将进入收尾阶段。
*   **核心稳定性修复**：
    *   关闭了关键的 Discord 频道媒体处理故障 ([#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556))，修复了入站图片无法处理及出站标记泄露的问题，恢复了频道的正常媒体交互能力。
    *   修复了 WebSocket `/ws/chat` 端点无法处理 `[IMAGE:]` 多模态标记的问题 ([#5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453))，提升了实时通信的稳定性。
    *   解决了 Telegram 频道在 `stream_mode = "partial"` 下 TTS 语音回复被静默禁用的 Bug ([#6415](https://github.com/zeroclaw-labs/zeroclaw/issues/6415))。
*   **功能迭代**：
    *   关闭了文件轮转与清理模块的 PR ([#5938](https://github.com/zeroclaw-labs/zeroclaw/pull/5938), [#5963](https://github.com/zeroclaw-labs/zeroclaw/pull/5963))，解决了日志文件无限增长的隐患。
    *   修复了 Runtime 中本地图片读取失败的问题 ([#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097))，保障了 Skill 插件的图片生成功能。

## 4. 社区热点
今日社区讨论聚焦于架构扩展与企业级应用场景：

*   **多智能体协作架构提议**：新开 Issue [#6604](https://github.com/zeroclaw-labs/zeroclaw/issues/6604) 引发关注，用户请求对标 OpenClaw 实现基于角色的多智能体协作，支持独立的工具链与记忆隔离。这反映出用户对 Zeroclaw 从“个人助手”向“团队协作智能体”演进的强烈需求。
*   **企业微信 支持进展**：Issue [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) 持续活跃，该功能请求已获得 `status:accepted` 标签，表明官方已确认将支持企业微信的 WebSocket 与 Webhook 模式，这是打通国内企业办公场景的关键一步。
*   **SearXNG 隐私搜索支持**：Issue [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) 提议增加 SearXNG 作为隐私优先的搜索提供商，并改进 DuckDuckGo 的验证码检测机制，反映了高级用户对自主代理隐私性与搜索健壮性的关注。

## 5. Bug 与稳定性
今日修复了多个高优先级 Bug，但也暴露了部分新问题：

*   **P1 - 工作流受阻 (已确认)**：
    *   Issue [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)：Onboarding 流程存在逻辑错误，选择 OpenAI Codex 时错误提示输入 OpenAI API Key，影响新用户配置。状态已接受，等待修复。
*   **P2 - 严重功能降级 (已修复)**：
    *   Issue [#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556)：Discord 频道媒体收发完全失效，已修复。
    *   Issue [#5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453)：WebSocket 端点多模态处理失效，已修复。
*   **运行时与工具问题**：
    *   Issue [#6422](https://github.com/zeroclaw-labs/zeroclaw/issues/6422)：Cron 工具对 LLM 传入的非 JSON 格式参数报错信息不友好，已修复，提升了 Agent 自我纠错能力。

## 6. 功能请求与路线图信号
结合今日活跃的 Issues 与 PRs，以下功能信号明显：

*   **媒体生成能力增强**：PR [#6555](https://github.com/zeroclaw-labs/zeroclaw/pull/6555) 正在集成 RunPod ComfyUI 作为备选图片生成 Provider；Issue [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) 提议将 Comfy Cloud/ComfyUI 作为通用媒体后端，为未来的 `gen_video` 工具铺路。这显示项目正强化 AI 生成内容的能力。
*   **智能体监督与交互**：PR [#6603](https://github.com/zeroclaw-labs/zeroclaw/pull/6603) 新增了 Web 端工具审批 UI，允许用户在监督模式下手动批准工具执行，显著增强了 Agent 执行敏感操作的安全性与可控性。
*   **搜索生态扩展**：SearXNG 的支持请求 ([#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316)) 符合当前去中心化与隐私保护趋势，有望纳入后续版本。

## 7. 用户反馈摘要
*   **配置体验痛点**：用户反馈 Onboarding 流程中对不同 API Key 的区分度不足，导致配置混淆 ([#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120))。
*   **跨平台一致性**：用户指出 Discord 与 Telegram 等非核心频道的媒体处理存在明显 Bug，影响了多模态 Agent 在这些平台的可用性 ([#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556), [#6415](https://github.com/zeroclaw-labs/zeroclaw/issues/6415))。
*   **高级工具需求**：技术型用户强烈希望能接入更多自定义工具链，如 Home Assistant REST API ([#6464](https://github.com/zeroclaw-labs/zeroclaw/pull/6464)) 和 ComfyUI 工作流，表明 Zeroclaw 正在被用于构建复杂的自动化系统。

## 8. 待处理积压
*   **长期未决的高优先级请求**：Issue [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) (企业微信支持) 自 3 月开启至今，虽已接受但仍处于 `help wanted` 状态，建议社区关注或贡献代码以加速落地。
*   **待审查的大型 PR**：PR [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) 作为 v0.8.0 的集成分支，涉及大规模重构，目前仍处于 Draft 状态，需维护者重点审查以规避合并风险。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-13)

## 1. 今日速览
Hermes Agent 项目今日保持**高度活跃**状态，社区反馈热烈。过去 24 小时内共有 45 条新开或活跃的 Issue，显示用户群体正在快速扩张并积极测试新功能。虽然 Issues 的关闭速度（5 条）明显滞后于新增速度，但代码提交侧表现强劲，共有 22 个 PR 被合并，显示核心团队正在加速迭代。值得注意的是，项目当前处于**安全加固期**，大量 PR 集中在 SSRF 防护、权限校验和边界控制，同时也暴露了 Docker 镜像打包和 Python 3.12 兼容性等关键稳定性问题。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
尽管无新版本发布，但今日代码库迎来了显著的质量提升和安全加固，共有 **22 个 PR 被合并**。主要进展集中在以下几个方面：

*   **安全边界加固**：由贡献者 `@Hinotoi-agent` 提交的系列安全修复 PR 正在持续推进并合并（如 SSRF 防护、API Server Host 头校验等），显著增强了项目对恶意输入和内网渗透的防御能力。
*   **关键修复合并**：
    *   修复了 Windows 平台原生网关检测问题 ([PR #24783](https://github.com/NousResearch/hermes-agent/pull/24783))，提升了跨平台兼容性。
    *   关闭了 Webhook 兼容性 PR ([PR #24777](https://github.com/NousResearch/hermes-agent/pull/24783))，优化了第三方集成体验。
    *   解决了 Line Adapter 崩溃问题 ([Issue #23728](https://github.com/NousResearch/hermes-agent/issues/23728))，恢复了消息平台的稳定性。
*   **性能优化**：针对 Prompt Caching 的优化 PR ([PR #24778](https://github.com/NousResearch/hermes-agent/pull/24778)) 已提交，旨在解决系统提示词缓存失效导致的性能损耗。

## 4. 社区热点
今日社区讨论焦点集中在**平台集成能力**与**模型兼容性**上：

1.  **Telegram 交互能力增强** ([Issue #15311](https://github.com/NousResearch/hermes-agent/issues/15311))：该 Issue 评论数达 10 条。用户强烈希望 Hermes 能够原生支持 Telegram 的 Inline Keyboards（交互按钮），以实现更友好的命令交互，而不仅仅是文本流。这反映了用户将 Hermes 作为“产品级”机器人使用的强烈需求。
2.  **Searxng 搜索引擎支持** ([Issue #5941](https://github.com/NousResearch/hermes-agent/issues/5941))：该请求获得了 28 个赞，是今日热度最高的功能请求。社区对隐私友好型搜索引擎 Searxng 的集成呼声极高，希望作为 Tavily 等商业服务的替代方案。
3.  **Matrix 网关架构缺陷** ([Issue #22714](https://github.com/NousResearch/hermes-agent/issues/22714))：针对 Matrix 长连接场景下的消息调度问题引发了 7 条深入讨论，涉及核心架构设计，是高级用户关注的痛点。

## 5. Bug 与稳定性
今日报告了数个影响部署和运行的关键 Bug，按严重程度排序如下：

*   **P1 - 致命/阻断性问题**：
    *   **Docker 镜像缺失依赖** ([Issue #24698](https://github.com/NousResearch/hermes-agent/issues/24698))：最新版 Docker 镜像缺少 `python-telegram-bot` 包，导致 Telegram Gateway 启动失败。这是阻碍用户快速部署的严重回归问题。
    *   **Python 3.12 兼容性崩溃** ([Issue #24689](https://github.com/NousResearch/hermes-agent/issues/24689))：CLI 模块仍在使用已在 Python 3.12 中移除的 `imp` 和 `commands` 模块，导致新环境直接报错。
    *   **Kimi 模型上下文长度误判** ([Issue #24268](https://github.com/NousResearch/hermes-agent/issues/24268))：OpenRouter 返回错误的上下文长度（32K vs 实际 256K），导致 Agent 初始化失败。
*   **P2 - 数据安全与功能异常**：
    *   **文件内容污染** ([Issue #19798](https://github.com/NousResearch/hermes-agent/issues/19798))：`read_file` 返回带行号的内容，若 Agent 直接 `write_file` 回写，会导致配置文件和源码被行号“污染”损坏。
    *   **上下文检测不准** ([Issue #24640](https://github.com/NousResearch/hermes-agent/issues/24640))：针对 MiniMax 模型的上下文窗口自动检测存在偏差。
*   **并发竞争风险**：多位开发者提交了关于 TOCTOU (Time-of-check to time-of-use) 竞态条件的 Bug 报告，涉及单例初始化、数据库连接和模型下载等模块 ([Issue #24767](https://github.com/NousResearch/hermes-agent/issues/24767), [Issue #24754](https://github.com/NousResearch/hermes-agent/issues/24754))，表明项目在多线程环境下的稳定性仍需打磨。

## 6. 功能请求与路线图信号
*   **模块化/专业化架构演进**：Issue #21303 提出了“持久化专用子智能体”架构设想，旨在解决主 Agent 经验漂移和任务泛化困难的问题。这与当前 Agent 自主改进的趋势高度契合，可能成为未来架构优化的重点。
*   **Prompt Caching 扩展**：Issue #24617 建议将 DeepSeek 模型加入 Prompt Caching 白名单。考虑到 DeepSeek 在成本上的优势，此类优化请求符合降低 Agent 运行成本的大趋势。
*   **隐私搜索集成**：鉴于 Searxng 的高赞数，项目可能会在未来版本中优先考虑去中心化或隐私优先的工具集成。

## 7. 用户反馈摘要
*   **部署体验受损**：用户对 Docker 镜像缺失依赖表示不满，认为这破坏了“开箱即用”的体验。
*   **工具可靠性担忧**：文件读写污染问题引起了用户对 Agent “自主操作”安全性的担忧，用户反馈“这会悄悄破坏我的 .env 文件”。
*   **对国产模型支持需求增加**：多个 Issue 涉及 Kimi、DeepSeek、Xiaomi MiMo 等模型，显示 Hermes 在非英语/国产模型社区的采用率正在上升，同时也暴露了针对这些模型的兼容性测试不足。

## 8. 待处理积压
*   **高优先级回归问题**：[Issue #24698](https://github.com/NousResearch/hermes-agent/issues/24698) (Docker 镜像损坏) 和 [Issue #24689](https://github.com/NousResearch/hermes-agent/issues/24689) (Python 3.12 不兼容) 需要维护者立即响应，建议在下一个 Patch 版本中优先修复。
*   **长期功能请求**：[Issue #15311](https://github.com/NousResearch/hermes-agent/issues/15311) (Telegram 交互按钮) 自 4 月底创建以来讨论不断，但尚未有官方 PR 跟进，建议团队评估纳入路线图以满足交互式应用场景的需求。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-13)

## 1. 今日速览
PicoClaw 项目今日保持高度活跃，社区互动频繁，共产生 17 条 Issue 更新与 15 条 PR 更新。项目刚刚发布了 `v0.2.8-nightly.20260513` 版本，持续迭代中。今日焦点集中在**稳定性修复**与**生态扩展**：一方面，社区针对沙箱逃逸漏洞和进程管理崩溃问题提交了关键修复 PR；另一方面，新增了 Gemini 搜索、Intel OpenVINO 本地推理及小米 MIMO 模型支持等功能提案。整体来看，项目正处于修补旧版本 Bug 与引入新 Provider 能力的并行推进阶段，但也暴露出配置迁移与构建流程中的部分用户体验痛点。

## 2. 版本发布
- **nightly: Nightly Build (v0.2.8-nightly.20260513.223ebdf0)**
  - **类型**: 自动化构建版本
  - **更新说明**: 基于 main 分支的最新提交自动生成，包含 `v0.2.8` 之后的最新代码。
  - **注意事项**: 官方提示此版本可能不稳定，建议仅在测试环境使用。
  - **变更范围**: 包含了近期合并的文档更新及 workspace 嵌入流程修复。
  - **链接**: [Release Page](https://github.com/sipeed/picoclaw/releases/tag/nightly)

## 3. 项目进展
今日共有 **3 个 PR 被合并/关闭**，主要涉及文档与构建体验优化；**12 个 PR 处于待合并状态**，包含重要的安全修复与新功能。

- **[MERGED] PR #2505: 改进 Workspace 文件嵌入流程**
  - 修复了构建过程中可能残留旧文件的问题，确保二进制文件仅包含最新的工作区内容，提升了构建的可靠性。
- **[MERGED] PR #2490: 修复 Onboard 配置建议文案**
  - 修正了 v0.2.5 以来配置文件说明过时的问题，改善了新用户的上手体验。
- **[OPEN] PR #2693: 修复安全沙箱绕过漏洞**
  - 针对严重的 `find /` 命令枚举路径漏洞提交了修复，目前待合并，建议维护者优先 Review。
- **[OPEN] PR #2813: 修复 PID 进程校验导致的崩溃循环**
  - 解决了 Stale PID 导致网关无法启动的问题，提升了服务稳定性。
- **[OPEN] PR #2703: 新增 Intel OpenVINO 本地推理支持**
  - 扩展了本地 LLM 推理后端选项，增强了对 Intel 硬件生态的支持。

## 4. 社区热点
- **[Issue #2513] Gateway 启动异常** 👁️ **9 评论**
  - 该问题引发了较多讨论，涉及网关启动失败的处理逻辑，目前 Issue 已关闭，表明核心问题可能已在近期版本解决。
  - 链接: [sipeed/picoclaw Issue #2513](https://github.com/sipeed/picoclaw/issues/2513)
- **[Issue #1950] Web Chat 流式输出功能请求** 👁️ **8 评论**
  - 用户对 Web 端流式输出的需求强烈，该 Issue 标记为 `Nice-to-Have`，目前仍处于 Open 状态，期待社区贡献。
  - 链接: [sipeed/picoclaw Issue #1950](https://github.com/sipeed/picoclaw/issues/1950)
- **[Issue #2859] 小米 MIMO 模型多轮对话 Bug** 👍 **1 点赞**
  - 新 Issue 报告了接入小米 mimo-2.5 模型时出现的参数错误，引起了部分用户关注，可能与即将合并的 PR #2755 相关。
  - 链接: [sipeed/picoclaw Issue #2859](https://github.com/sipeed/picoclaw/issues/2859)

## 5. Bug 与稳定性
今日报告的 Bug 集中在安全隔离、进程管理及模型兼容性方面，部分已有修复方案。

- **[严重] 沙箱安全漏洞** - Issue #2688
  - **现象**: Agent 可通过 `find /` 命令枚举工作区外的系统路径，导致安全隔离失效。
  - **状态**: 已有修复 PR #2693 待合并。
  - 链接: [sipeed/picoclaw Issue #2688](https://github.com/sipeed/picoclaw/issues/2688)
- **[严重] PID 校验导致 Crash Loop** - Issue #2720
  - **现象**: 系统重启后 PID 复用导致 Gateway 无法启动，判定为已有实例运行。
  - **状态**: 已有修复 PR #2813 待合并。
  - 链接: [sipeed/picoclaw Issue #2720](https://github.com/sipeed/picoclaw/issues/2720)
- **[中等] 小米 MIMO 模型兼容性** - Issue #2859
  - **现象**: 多轮对话时报 "Param Incorrect" 错误。
  - **状态**: 待确认，可能与 PR #2755 的流式推理支持有关。
  - 链接: [sipeed/picoclaw Issue #2859](https://github.com/sipeed/picoclaw/issues/2859)
- **[中等] v0.2.8 Channel 加载失败** - Issue #2742
  - **现象**: 升级后 Telegram 等通道未加载。
  - 链接: [sipeed/picoclaw Issue #2742](https://github.com/sipeed/picoclaw/issues/2742)

## 6. 功能请求与路线图信号
- **本地推理与硬件加速**:
  - **PR #2703**: 支持 Intel OpenVINO，拓展了本地 LLM 在 Intel CPU/GPU/NPU 上的运行能力。
  - **Issue #2625**: 请求提供包含 WhatsApp 支持的 ARM64 编译版本，显示项目在嵌入式/边缘设备上的应用潜力。
- **多模态与模型生态**:
  - **PR #2755**: 小米 MIMO 模型的流式推理与视频媒体支持，正在积极推动中。
  - **PR #2763**: 新增 Gemini Web Search Provider，增强工具链的搜索能力。
- **Agent 能力增强**:
  - **Issue #2774**: 建议引入无限上下文与后台历史压缩功能，对标 `magic-context` 插件。
  - **PR #2491**: 提议会话管理命令 (`/status`, `/compact`)，提升交互体验。

## 7. 用户反馈摘要
- **配置与构建痛点**:
  - 多位用户反馈配置迁移过程复杂，示例配置 (`config.example.json`) 未及时更新 (Issue #2771)。
  - 源码构建时存在 `picoclaw-launcher` 缺失的问题 (Issue #2753)，影响了开发者体验。
- **硬件适配**:
  - 有用户成功在 NXP i.MX93 EVK 上运行 PicoClaw (Issue #2646)，验证了 ARM64 架构的兼容性。
- **功能诉求**:
  - 用户强烈希望 Web Chat 支持流式输出 (Issue #1950)，目前的非流式体验影响交互感。
  - 对 WhatsApp 通道在 ARM 设备上的支持需求明确 (Issue #2625)。

## 8. 待处理积压
以下重要 Issue/PR 长期未获最终处理，建议维护者关注：
- **Issue #1757**: 定时任务执行报错问题，自 3 月开启，标记为 `stale`，尚未彻底解决。
  - 链接: [sipeed/picoclaw Issue #1757](https://github.com/sipeed/picoclaw/issues/1757)
- **PR #2491**: 会话管理命令 PR 自 4 月开启，未获合并或进一步反馈。
  - 链接: [sipeed/picoclaw PR #2491](https://github.com/sipeed/picoclaw/pull/2491)
- **PR #2703 & #2755**: OpenVINO 和 MIMO 模型支持的重要功能 PR 等待 Review，可能受限于 CI 测试或代码规范检查。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-13)

## 1. 今日速览
NanoClaw 项目今日保持**高活跃度**，社区贡献集中在安全性修复与多渠道集成优化。过去 24 小时内共有 **19 个 PR 更新**（其中 14 个待合并），显示出强劲的开发势头，但同时也带来了一定的代码审查积压压力。核心关注点在于 **OneCLI 依赖引发的安全隐患与架构讨论**，以及针对 Discord、WhatsApp 等渠道的附件处理修复。项目整体健康度良好，正在快速迭代以解决部署安全性和多模态交互的痛点。

## 2. 版本发布
**无新版本发布**。虽然无正式 Release，但已有多个关键修复 PR 进入合并队列，预计下一个版本将重点解决安装安全与媒体附件处理问题。

## 3. 项目进展
今日共有 **5 个 PR 被合并或关闭**，主要推进了以下方面：

*   **集成能力增强**：PR [#2439](https://github.com/nanocoai/nanoclaw/pull/2439) (Webhook channel) 和 PR [#2422](https://github.com/nanocoai/nanoclaw/pull/2422) (Google Auth skill) 已关闭，标志着项目在入站消息通道和身份验证生态上的进一步完善。
*   **依赖维护**：PR [#2425](https://github.com/nanocoai/nanoclaw/pull/2425) 完成了容器 CLI 版本的刷新，保持了依赖的时效性。
*   **健壮性提升**：PR [#1912](https://github.com/nanocoai/nanoclaw/pull/1912) 修复了容器输出为空时的解析错误，改善了异常情况下的用户体验。

目前仍有 14 个 PR 待合并，其中包含多项重要的功能更新与修复，等待维护者 Review。

## 4. 社区热点
今日社区讨论聚焦于项目的架构依赖与安全性：

*   **架构争议**：Issue [#2437](https://github.com/nanocoai/nanoclaw/issues/2437) 提出了关于移除或改进 OneCLI 依赖的建议。作者指出 NanoClaw 定位轻量级，但 OneCLI 的引入增加了复杂性，这与项目初衷有所背离。此议题触及项目核心架构，值得深入关注。
*   **安全问题**：Issue [#2433](https://github.com/nanocoai/nanoclaw/issues/2433) 报告了 OneCLI 安装时默认绑定所有端口至 `docker0` IP 的高危安全隐患，已由作者提交修复 PR [#2434](https://github.com/nanocoai/nanoclaw/pull/2434)。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，部分已有修复方案：

*   **[High] 安全配置不当**：Issue [#2433](https://github.com/nanocoai/nanoclaw/issues/2433) 指出 OneCLI 安装后 Admin API 和 Postgres 端口暴露问题。
    *   *状态*：已有修复 PR [#2434](https://github.com/nanocoai/nanoclaw/pull/2434)，限制端口仅监听本地回环地址。
*   **[Medium] 会话路由异常**：PR [#2440](https://github.com/nanocoai/nanoclaw/pull/2440) 修复了容器重启时可能导致的首条消息处理错误，确保会话路由权威性。
*   **[Medium] Discord 图片识别失败**：Issue [#2426](https://github.com/nanocoai/nanoclaw/issues/2426) 反馈 LLM 无法识别 Discord 发送的图片，仅显示占位符。
    *   *状态*：已有修复 PR [#2427](https://github.com/nanocoai/nanoclaw/pull/2427)。
*   **[Medium] Webhook 端口冲突**：PR [#2435](https://github.com/nanocoai/nanoclaw/pull/2435) 修复了 Webhook 服务硬编码 3000 端口导致的启动崩溃问题。
*   **[Medium] WhatsApp 媒体路由**：PR [#2429](https://github.com/nanocoai/nanoclaw/pull/2429) 修复了入站媒体文件路径挂载错误导致容器无法访问的问题。

## 6. 功能请求与路线图信号
*   **Google Drive 集成**：PR [#2430](https://github.com/nanocoai/nanoclaw/pull/2430) 提交了 Google Drive MCP 技能，通过 OneCLI 凭证模式集成，延续 Gmail/Calendar 的集成路线。
*   **Slack 线程优化**：PR [#2431](https://github.com/nanocoai/nanoclaw/pull/2431) 建议为 Slack 适配器增加条件线程策略，区分 DM 和频道消息的处理方式，提升多场景下的交互体验。
*   **挂载管理 CLI**：PR [#2432](https://github.com/nanocoai/nanoclaw/pull/2432) 增加了管理挂载点的 CLI 命令，旨在简化配置流程。

## 7. 用户反馈摘要
*   **部署痛点**：用户 @carderne 在 [#2437](https://github.com/nanocoai/nanoclaw/issues/2437) 中直言 OneCLI 依赖增加了部署摩擦，这与 NanoClaw "开箱即用" 的宣传存在落差，建议回归更轻量的部署方式。
*   **多模态需求**：Discord 用户遇到图片无法解析的问题 ([#2426](https://github.com/nanocoai/nanoclaw/issues/2426))，反映出社区对跨平台多模态交互的高期待。

## 8. 待处理积压
当前有 **14 个 PR 处于 Open 状态**，建议维护者优先处理以下积压：
1.  **安全修复**：PR [#2434](https://github.com/nanocoai/nanoclaw/pull/2434) 涉及高风险端口暴露问题，建议尽快合并。
2.  **关键修复**：PR [#2440](https://github.com/nanocoai/nanoclaw/pull/2440) (会话路由) 和 PR [#2427](https://github.com/nanocoai/nanoclaw/pull/2427) (Discord 图片) 影响核心功能体验。
3.  **陈旧 PR**：PR [#1845](https://github.com/nanocoai/nanoclaw/pull/1845) (时间戳标准化) 和 PR [#1545](https://github.com/nanocoai/nanoclaw/pull/1545) (模型配置技能) 更新时间较早，需确认是否需要进一步调整或合并。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-13)

## 1. 今日速览
NullClaw 项目今日保持活跃的开发态势，重点聚焦于底层架构的稳定性增强与网关功能的扩展。过去 24 小时内，项目收到了 2 个高质量的功能与修复 PR，虽然暂无新版本发布或代码合并，但提交内容显示开发者在多架构兼容性与 Worker 通信机制上投入了大量精力。社区方面出现了一例关于 A2A 协议性能的疑问，暗示用户开始深入关注协议层的执行效率。整体来看，项目处于稳步迭代阶段，代码质量把控严格。

## 2. 版本发布
无。

## 3. 项目进展
今日无已合并的 PR 或已关闭的 Issue，但有 2 个重要的待合并 PR 提交，预示着项目功能的显著推进：

*   **网关稳定性大幅增强**：PR [#910](https://github.com/nullclaw/nullclaw/pull/910) 针对 Discord/Websocket 模块提交了综合性修复。该 PR 引入了看门狗机制、退避策略、中断安全的停止逻辑以及 TLS 泄露修复，并已在 macOS arm64、Linux aarch64/riscv64 及 Android aarch64 四种架构上通过了 12 小时的压力测试。这将显著提升 NullClaw 作为长期运行服务的鲁棒性。
*   **Worker 通信机制优化**：PR [#912](https://github.com/nullclaw/nullclaw/pull/912) 实现了针对 paired-token workers 的同步 `/webhook` 功能。该更新填补了文档中标记为 "HIGH PRIORITY" 的 Gap 3，完善了 Worker 端点的调度能力，有望解决异步处理中的时序一致性问题。

## 4. 社区热点
今日社区讨论焦点主要集中在性能验证上：

*   **Issue [#913](https://github.com/nullclaw/nullclaw/issues/913) - A2A 协议性能探讨**：用户 @jacktang 发起讨论，询问 NullClaw 中 A2A (Agent-to-Agent) 协议实现的基准测试数据，并指出原生 NullClaw 消息响应似乎比 A2A 协议实现更快。这一反馈表明用户正在将 NullClaw 用于多智能体协作场景，并对协议封装带来的性能损耗表示关注。

## 5. Bug 与稳定性
今日无新提交的严重崩溃报告，但发现潜在性能瓶颈与已有修复方案：

*   **[中等] A2A 协议性能损耗**：Issue [#913](https://github.com/nullclaw/nullclaw/issues/913) 中用户反馈 A2A 实现速度慢于原生消息。目前尚无官方回复，需等待维护者进行性能分析。
*   **[已修复] Discord Gateway 稳定性问题**：针对网关连接不稳定、TLS 泄露等问题，PR [#910](https://github.com/nullclaw/nullclaw/pull/910) 已提供修复方案，目前等待合并。

## 6. 功能请求与路线图信号
*   **性能基准测试需求**：源自 Issue [#913](https://github.com/nullclaw/nullclaw/issues/913)，用户希望项目提供官方的基准测试数据。这可能促使项目在未来版本中引入性能测试套件或优化 A2A 协议栈。
*   **同步 Webhook 支持**：PR [#912](https://github.com/nullclaw/nullclaw/pull/912) 表明项目正在强化 Worker 模式的控制力，这符合项目路线图中关于“集成分析”的高优先级目标，预计将在下个版本中提供更可靠的 Worker 交互接口。

## 7. 用户反馈摘要
*   **痛点**：A2A 协议的封装层可能引入了额外的延迟，用户对多智能体协作场景下的响应速度有更高要求。
*   **场景**：用户正在跨平台环境（包括 Android 及非 x86 架构）部署 NullClaw，这对项目的跨平台稳定性提出了挑战，而 PR #910 的测试报告正好回应了这一需求。

## 8. 待处理积压
*   **PR [#910](https://github.com/nullclaw/nullclaw/pull/910)**：该修复 PR 已经过详尽的压力测试，建议维护者优先进行 Code Review 并合并，以尽快解决潜在的网关稳定性问题。
*   **PR [#912](https://github.com/nullclaw/nullclaw/pull/912)**：作为高优先级功能的实现，建议尽快确认是否符合合并标准。
*   **Issue [#913](https://github.com/nullclaw/nullclaw/issues/913)**：首个关于 A2A 性能的咨询，建议维护者关注并提供基准数据或解释，以引导用户正确使用。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-13)

## 1. 今日速览
IronClaw 项目今日保持极高的开发活跃度，共更新 29 个 Issues 和 50 个 PRs。项目核心重心明显向 **"Reborn" 架构重构** 倾斜，大量底层基础设施（如 `TurnRunner`, `SkillContext`, `Memory` 适配器）已合并代码，架构演进迅速。与此同时，**稳定性问题突显**，Telegram 与 Gmail 集成相关的 P1 级 Bug 集中爆发，QA 团队报告了多个阻塞用户流程的关键问题。社区对新版 Web UI 的可发现性及 OAuth 流程修复表现出较高关注。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目在 **架构重构** 与 **集成修复** 方面取得重大进展，共有 27 个 PR 合并/关闭，13 个 Issue 修复。

- **Reborn 架构核心落地**：
    - 合并 [#3476](https://github.com/nearai/ironclaw/pull/3476) 与 [#3493](https://github.com/nearai/ironclaw/pull/3493)，完成了 `SkillContextService` 的集成及内存错误修正，标志着 Reborn 在上下文处理与内存管理上的核心框架已搭建完毕。
    - 关闭 Issue [#3404](https://github.com/nearai/ironclaw/issues/3404)、[#3431](https://github.com/nearai/ironclaw/issues/3431) 等多个 Reborn 子任务，`TurnRunner`、`MemoryPromptContextService` 等关键组件已实现。
- **Telegram v2 支持**：
    - 合并 [#3355](https://github.com/nearai/ironclaw/pull/3355) 和 [#3356](https://github.com/nearai/ironclaw/pull/3356)，引入 Telegram v2 Product Adapter 及配置守卫，为 Telegram 频道的升级奠定基础。
- **关键 Bug 修复**：
    - 关闭 Issue [#2229](https://github.com/nearai/ironclaw/issues/2229)，修复了 Google Sheets OAuth 在特定环境下的 400 错误。
    - 关闭 Issue [#3128](https://github.com/nearai/ironclaw/issues/3128)，解决了 Gmail 认证流程中的 502 错误。
- **安全与沙箱增强**：
    - 合并 [#3546](https://github.com/nearai/ironclaw/pull/3546)，引入了 Payroll v2 sidecar，增强了凭证注入与 SSE 连接的健壮性。

## 4. 社区热点
今日社区讨论主要集中在复杂集成故障与架构设计上。

- **Issue #2229 [CLOSED]**: **[QA] Google Sheets OAuth blocked** (11 条评论)
    - **链接**: [nearai/ironclaw Issue #2229](https://github.com/nearai/ironclaw/issues/2229)
    - **分析**: 该 Issue 反映了 Telegram Bot 触发 Google Sheets 授权时的 `400 invalid_request` 错误。经过详细排查已关闭，表明核心 OAuth 流程得到了修复，解决了用户在 Telegram 中使用 Google 扩展的阻塞问题。
- **Issue #3069 [CLOSED]**: **Ship Reborn as a separate ironclaw-reborn binary** (4 条评论)
    - **链接**: [nearai/ironclaw Issue #3069](https://github.com/nearai/ironclaw/issues/3069)
    - **分析**: 关于 Reborn 版本发布策略的讨论。最终决定发布独立的 `ironclaw-reborn` 二进制文件，明确了新旧架构并行的产品边界，这对用户迁移和测试至关重要。

## 5. Bug 与稳定性
今日 QA 测试与用户反馈暴露了多个高优先级 (P1) 问题，主要集中在 **Telegram 频道** 与 **认证流程**。

- **🔴 P1 级严重问题**:
    - **Issue #3533 [OPEN]**: Telegram v0.28.1 无法通过 UI 自动设置，向导流程已过时。
        - 链接: [nearai/ironclaw Issue #3533](https://github.com/nearai/ironclaw/issues/3533)
        - 状态: 暂无关联修复 PR，影响新用户上手。
    - **Issue #3320 [OPEN]**: Gmail 认证失败后，Telegram 对话陷入死锁，无法继续。
        - 链接: [nearai/ironclaw Issue #3320](https://github.com/nearai/ironclaw/issues/3320)
        - 状态: 暂无关联修复 PR，影响容错性。
    - **Issue #3535 [OPEN]**: UI 会话时间戳显示错误。
        - 链接: [nearai/ironclaw Issue #3535](https://github.com/nearai/ironclaw/issues/3535)
        - 状态: 基础 UI 体验问题。

- **🟠 P2 级中等问题**:
    - **Issue #2991 [OPEN]**: V2 审批流程提示不清且强制串行执行。
        - 链接: [nearai/ironclaw Issue #2991](https://github.com/nearai/ironclaw/issues/2991)

## 6. 功能请求与路线图信号
- **Memory 架构演进**: Issue [#3537](https://github.com/nearai/ironclaw/issues/3537) 提出将 Memory 建模为“用户态能力包”，以支持 Honcho、mem0 等插件化扩展。结合今日合并的 Reborn 内存服务，这将是下一阶段的重点。
- **Web UI 本地化体验**: Issue [#3500](https://github.com/nearai/ironclaw/issues/3500) 指出本地 Web UI 在引导流程中难以被发现，PR [#3510](https://github.com/nearai/ironclaw/pull/3510) 已提交修复，旨在改善本地部署的首秀体验。
- **WeChat 频道文档**: Issue [#3515](https://github.com/nearai/ironclaw/issues/3515) 提醒 WeChat 频道已可用，急需补充文档。

## 7. 用户反馈摘要
- **痛点**:
    - **OAuth 脆弱性**: 用户在 Telegram 中集成 Gmail 和 Google Sheets 时频繁遇到 400/502 错误，且一旦失败容易导致对话卡死 (#3320, #2229)。
    - **引导脱节**: 更新后的 UI/Onboarding 流程与文档或实际行为不符，导致 Telegram 设置受阻 (#3533)。
    - **本地体验割裂**: 本地部署后用户不知道如何访问 Web UI，感觉“缺失了一块” (#3500)。

- **正面反馈**:
    - 对 Reborn 架构的推进速度表示认可，Issue #3069 的关闭展示了清晰的路线图执行力。

## 8. 待处理积压
- **自动化测试阻塞**: Issue [#3447](https://github.com/nearai/ironclaw/issues/3447) 显示 Nightly E2E 测试失败，需立即排查以避免 CI/CD 盲区。
- **长期挂起问题**: Issue [#2902](https://github.com/nearai/ironclaw/issues/2902) (Telegram 在 NEAR Foundation 实例中不工作) 已开启两周，建议优先处理以恢复特定环境的服务。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-13)

## 1. 今日速览
LobsterAI 项目今日呈现出极高的开发活跃度，核心开发团队进行了大规模的功能迭代与缺陷修复。过去 24 小时内共有 **25 个 PR 被合并或关闭**，仅 1 个 PR 处于待合并状态，显示出团队正在紧密筹备新版本的发布（尽管尚未打 Tag）。虽然 Issues 板块仅有 1 条活跃更新，但代码库的变更涉及核心功能“梦境记忆整合”、跨平台兼容性修复（macOS 语音、Windows 路径）以及大量 UI 优化，项目整体处于功能收敛与稳定性提升阶段。

## 2. 版本发布
*   **无新版本发布**：截至今日数据抓取时间，GitHub Releases 页面暂无新版本标签。
*   **注意**：PR #1961 (`Release/2026.5.11`) 已关闭，这通常意味着代码已合入主分支，预计正式版 v2026.5.11 即将发布。

## 3. 项目进展
今日项目主要在**记忆增强、跨平台体验优化、UI/UX 重构**三个方向取得了显著进展：

*   **核心功能增强**：
    *   **记忆整合**：合入了 `Release/2026.5.11` 分支 ([#1961](https://github.com/netease-youdao/LobsterAI/pull/1961))，引入了 **Dreaming memory consolidation（梦境记忆整合）** 功能，支持后台记忆整合、定时任务及模型覆盖，重构了记忆设置 UI，标志着 Agent 长期记忆能力迈出关键一步。
    *   **独立工作目录**：合入 PR [#1904](https://github.com/netease-youdao/LobsterAI/pull/1904)，支持每个 Agent 拥有独立的工作目录，解决了多 Agent 环境隔离问题。
    *   **有道笔记技能**：升级至 v1.0.9。

*   **平台兼容性修复**：
    *   **macOS 语音输入**：修复了权限拒绝后无反馈的问题 ([#1952](https://github.com/netease-youdao/LobsterAI/pull/1952))，并优化了听写触发逻辑，增加了系统菜单回退机制 ([#1956](https://github.com/netease-youdao/LobsterAI/pull/1956))。
    *   **Windows 中文路径兼容**：修复了包含中文路径的项目在 Artifacts 预览页无法在浏览器打开的问题 ([#1955](https://github.com/netease-youdao/LobsterAI/pull/1955))。

*   **UI/UX 优化**：
    *   大量 PR 集中优化了主界面、模型选择器、输入框及技能选择 UI ([#1954](https://github.com/netease-youdao/LobsterAI/pull/1954), [#1937](https://github.com/netease-youdao/LobsterAI/pull/1937))，提升了视觉一致性。
    *   修复了重启后默认模型选择未保留的问题 ([#1905](https://github.com/netease-youdao/LobsterAI/pull/1905))。
    *   修复了 Artifacts 中 Mermaid 图表缩放滚动及图片复制功能 ([#1958](https://github.com/netease-youdao/LobsterAI/pull/1958))。

## 4. 社区热点
由于今日 Issues 更新较少，社区焦点主要集中在代码合入情况：

*   **Issue #1849: 追问时无限 NO_REPLY 或输出中断**
    *   **链接**: [netease-youdao/LobsterAI Issue #1849](https://github.com/netease-youdao/LobsterAI/issues/1849)
    *   **分析**: 这是今日唯一活跃的 Issue，且状态仍为 Open。用户反馈在连续对话（追问）场景下，任务状态与模型输出不同步，导致页面假死或无响应。该问题涉及底层任务调度逻辑，评论区已有 2 条互动但尚未解决，值得开发者重点关注。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在交互逻辑与平台特性上，大部分已有修复 PR 并合入：

*   **[High] Agent 交互中断 (未修复)**
    *   **描述**: Issue #1849 指出追问时出现 `NO_REPLY` 死循环或输出截断。
    *   **状态**: 仍在排查中，日志显示任务提前触发 `complete` 回调。

*   **[Medium] IM 多 Agent 切换失效 (已修复)**
    *   **描述**: 切换 Agent 时 IM 功能失效。
    *   **修复**: PR [#1960](https://github.com/netease-youdao/LobsterAI/pull/1960) 已合入。

*   **[Medium] macOS 辅助功能权限处理 (已修复)**
    *   **描述**: 拒绝权限后点击语音按钮无反应。
    *   **修复**: PR [#1952](https://github.com/netease-youdao/LobsterAI/pull/1952) 增加了 Toast 提示引导用户去系统设置开启权限。

*   **[Low] Artifacts 图片复制与路径问题 (已修复)**
    *   **描述**: 部分 GIF/WebP 无法隐藏复制按钮，Windows 中文路径文件无法打开。
    *   **修复**: PR [#1958](https://github.com/netease-youdao/LobsterAI/pull/1958) 与 [#1955](https://github.com/netease-youdao/LobsterAI/pull/1955) 分别修复了此类体验问题。

## 6. 功能请求与路线图信号
*   **记忆系统增强**: 从 PR #1961 可以看出，项目正在向更拟人化、更智能的记忆管理方向发展，“梦境记忆整合”暗示了类似人类睡眠整理记忆的机制，这可能是下一阶段的核心卖点。
*   **多模态与交互体验**: 语音输入的一系列修复（#1952, #1956, #1957）表明团队正在打磨多模态交互体验，特别是 macOS 端的适配投入较大，预示语音交互将成为重要入口。

## 7. 用户反馈摘要
*   **痛点**: Issue #1849 反映了用户在使用 Agent 进行连续对话（多轮 Task）时遇到的稳定性问题。日志显示 "task complete" 信号与实际模型输出流不同步，导致前端收不到数据。这提示后端的任务生命周期管理在特定并发或流式输出场景下可能存在竞争条件。
*   **场景**: 用户在“追问”场景下尤为明显，说明问题可能出在上下文连续处理或任务重置的逻辑中。

## 8. 待处理积压
*   **Issue #1849 (核心体验问题)**: 涉及模型输出中断和任务状态异常，直接阻碍用户正常使用，目前尚未有对应 PR 修复，建议维护者优先排查日志中的 `task complete` 时序逻辑。
*   **PR #1277 (依赖更新)**: Dependabot 提出的 Electron 大版本升级（v40 -> v42）自 4 月开启至今未合入。考虑到主分支刚刚合入大量 UI 和底层逻辑更新，建议在发布正式版后评估此依赖升级带来的破坏性变更风险。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-13)

## 1. 今日速览
Moltis 项目今日整体活跃度处于低位，未观测到代码合并或版本发布活动。社区方面仅新增 1 个 Issue，无新增 Pull Request。新增 Issue 聚焦于 UI 交互层面的回归问题，表明用户正在对前端细节进行细致测试。整体而言，项目今日处于平稳维护状态，建议维护者关注新报告的稳定性问题。

## 2. 版本发布
无。

## 3. 项目进展
今日无合并或关闭的 Pull Request，项目代码库无实质性变更。开发端相对静默，可能处于功能开发间隙或代码审查停滞期。

## 4. 社区热点
今日社区活跃度极低，仅有一个新增 Issue 引起注意：
*   **Issue #994 [Bug]: chat has horizontal scrolling again** ([链接](https://github.com/moltis-org/moltis/issues/994))
    *   **分析**：该 Issue 由用户 @vvuk 提交，指出了聊天界面出现了横向滚动条的回归问题。标题中的 "again" 暗示该问题曾经被修复过，但在最新的版本中复现。尽管目前评论数为 0，但该问题直接影响用户聊天体验，是今日唯一的社区关注点。

## 5. Bug 与稳定性
今日新增 1 个 Bug 报告，涉及前端 UI 显示异常：
*   **🔴 [中等] chat has horizontal scrolling again** ([Issue #994](https://github.com/moltis-org/moltis/issues/994))
    *   **问题描述**：聊天窗口出现不必要的横向滚动，通常由 CSS 布局溢出引起，影响阅读体验。
    *   **性质**：回归 Bug，表明近期的某次提交可能破坏了原有的布局约束。
    *   **状态**：Open，尚无关联的 Fix PR，等待维护者确认与修复。

## 6. 功能请求与路线图信号
今日无新增功能请求或路线图相关的讨论。

## 7. 用户反馈摘要
从今日唯一的 Issue #994 中可提炼出以下反馈：
*   **痛点**：UI 细节的回归问题（横向滚动）降低了聊天界面的易用性。
*   **态度**：报告者 @vvuk 表现出对项目细节的关注，且按照规范提交了 Pre-flight Checklist，属于高质量贡献者。
*   **场景**：该问题发生在核心的聊天会话场景中，属于高频使用路径，建议优先处理。

## 8. 待处理积压
鉴于今日无 PR 合并且有新 Bug 产生，建议维护者优先关注以下事项：
*   **Issue #994**：作为今日唯一的新增问题，且涉及 UI 回归，建议尽快确认是否存在更广泛的布局问题。长期来看，若此类 UI 回归频繁发生，建议引入视觉回归测试以保障前端稳定性。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-05-13)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持**高活跃度**，社区互动频繁，共处理 31 条 Issues 和 42 条 PRs，其中 Issue 闭环率约为 45%，PR 合并/关闭率高达 66%。项目发布了 **v1.1.7-beta.1** 版本，主要修复了模型提供商兼容性与前端显示问题。功能开发方面，**内置微信频道支持**和**Tauri 桌面端重构**取得重大进展，显示出项目正从核心功能构建向多端适配与生态拓展阶段过渡。整体来看，项目健康度良好，针对用户反馈的高频痛点（如文件传输、内存索引）响应迅速。

## 2. 版本发布
**Release: v1.1.7-beta.1**
此次更新为 Beta 版本，主要包含以下关键修复：
*   **Provider 修复**：修复了 VOLCENGINE (火山引擎) Provider 中模型配置的问题 ([PR #4169](https://github.com/agentscope-ai/QwenPaw/pull/4169))。
*   **UI 优化**：改善了 Plan Pa 界面的文本对比度，提升可读性。
*   **版本升级**：版本号升级至 1.1.7b1。

## 3. 项目进展
今日共有 28 个 PR 被合并或关闭，重点推进了多渠道接入与工具链稳定性：

*   **[Feature] 内置微信频道支持**：PR [#2123](https://github.com/agentscope-ai/QwenPaw/pull/2123) 已合并。该 PR 引入了基于扫码登录的微信频道实现，并优化了消息投递的稳定性。这是社区期待已久的功能，显著增强了 AI 助手的触达能力。
*   **[Feature] 新增多模态工具插件**：PR [#4248](https://github.com/agentscope-ai/QwenPaw/pull/4248) 已合并。新增了 Qwen-Image 和 Wan 2.7 插件，扩展了 Agent 在图像生成与编辑方面的能力。
*   **[Fix] 浏览器工具稳定性重构**：PR [#4254](https://github.com/agentscope-ai/QwenPaw/pull/4254) 提交了针对浏览器工具的重大修复，引入了活动追踪、崩溃监控和生命周期管理，旨在解决僵尸进程和意外超时问题。
*   **[Fix] 内存索引同步修复**：PR [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224) 正在审核中，针对 Issue #4220 提出的自动记忆索引不同步问题提供了修复方案，确保新会话能检索到最新的记忆内容。

## 4. 社区热点
今日社区讨论集中在**第三方平台接入的稳定性**与**UI/交互体验**上：

*   **[Issue #2642](https://github.com/agentscope-ai/QwenPaw/Issue/2642) [CLOSED]**：**接入钉钉/QQ/微信后机器人报错**。
    *   **热度**：评论 15 条。
    *   **分析**：用户反馈在第三方渠道（如钉钉）生成文件后触发 `BadRequestError`，导致机器人不可用。该问题引发了大量关于多模态消息格式兼容性的讨论，反映出用户对跨平台稳定性的强烈需求。
*   **[Issue #4159](https://github.com/agentscope-ai/QwenPaw/Issue/4159) [CLOSED]**：**DashScope Provider 配置失效**。
    *   **热度**：评论 6 条。
    *   **分析**：配置正确但运行时 API Key 为空。此类问题直接影响用户“开箱即用”的体验，属于关键配置阻断类 Bug。
*   **[Issue #4259](https://github.com/agentscope-ai/QwenPaw/Issue/4259) [OPEN]**：**请求增加预制 Agent 模板**。
    *   **热度**：评论 2 条。
    *   **分析**：用户希望能提供“开箱即用”的场景化 Agent 模板（如角色扮演、特定工作流），而非从零配置。这表明 CoPaw 正吸引越来越多非技术背景的用户，易用性将成为下一阶段重点。

## 5. Bug 与稳定性
今日报告的关键 Bug 主要涉及核心功能阻断和 UI 显示异常：

*   **[严重] MCP 调用阻塞**：[Issue #4227](https://github.com/agentscope-ai/QwenPaw/Issue/4227) 指出在 `stream_http` 模式下，MCP Server 返回 401 会导致调用无限阻塞直到超时。这是严重影响工具调用稳定性的问题，目前已有 PR [#4256](https://github.com/agentscope-ai/QwenPaw/pull/4256) 尝试通过增加 OAuth 2.1 支持来优化鉴权流程，可能与此相关。
*   **[中等] 文件消息显示异常**：[Issue #4260](https://github.com/agentscope-ai/QwenPaw/Issue/4260) 报告 Console 中 AI 发送的文件标题为空且图片过小。目前已有修复 PR [#4262](https://github.com/agentscope-ai/QwenPaw/pull/4262) 提交，正在处理中。
*   **[中等] 自动记忆索引失效**：[Issue #4220](https://github.com/agentscope-ai/QwenPaw/Issue/4220) 报告 `auto_memory_interval` 写入文件后不同步更新向量索引，导致新会话无法搜索历史。修复 PR [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224) 正在审核。
*   **[中等] 矩阵房间死循环**：[Issue #4251](https://github.com/agentscope-ai/QwenPaw/Issue/4251) 报告多智能体协作模式下出现 ACK 镜像循环。该问题已被识别为生命周期管理缺失，Issue 已关闭（可能已定位或复制定向）。

## 6. 功能请求与路线图信号
*   **易用性提升**：用户强烈建议增加**预制 Agent 模板** ([#4259](https://github.com/agentscope-ai/QwenPaw/Issue/4259))，结合 PR [#4211](https://github.com/agentscope-ai/QwenPaw/pull/4211) 提出的“对齐多智能体协作技能”，预示项目可能在下个版本重点优化新手引导和预设工作流。
*   **多端支持**：PR [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) (Tauri 2.x 桌面端) 持续更新，表明官方正在积极重构桌面端架构，以解决现有的 Webview 性能与兼容性问题（如 Issue #3816 提到的本地文件链接无法打开）。
*   **可观测性**：[Issue #4237](https://github.com/agentscope-ai/QwenPaw/Issue/4237) 建议在聊天界面中增加 Shell 命令运行的实时观测面板，这符合 Agent 从“能用”到“好用”的演进趋势。

## 7. 用户反馈摘要
*   **集成痛点**：用户在使用第三方渠道（微信、钉钉）时，对**消息格式兼容性**和**稳定性**体验较差，容易因消息格式错误导致整个会话崩溃（#2642）。
*   **文档与配置**：配置复杂度仍是门槛，部分用户在配置 DashScope 或 Volcengine 时遇到困难，提示文档引导或默认配置检测机制有待加强。
*   **性能担忧**：针对 WebUI，用户反馈在长对话历史下（几百万 Token）加载卡顿（#4213），急需分片传输或懒加载优化。
*   **积极信号**：社区对内置微信频道（#2123）的反应热烈，认为这是“刚需”功能。

## 8. 待处理积压
*   **PR #3813 (Tauri 2.x)**：作为重构桌面端的关键 PR，已挂起多日，建议维护者尽快进行 Final Review 并合并，以解决大量桌面端特有的 Bug。
*   **Issue #4213 (WebUI 性能)**：长对话导致网页卡顿的问题尚未有实质性进展，这是影响用户留存的关键体验问题，需优先处理。
*   **Issue #4244 (Shell 命令阻断)**：默认安全配置静默阻止了多行 Shell 命令，导致 Agent 逻辑混乱，建议调整默认策略或增加显式报错。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-05-13)

## 1. 今日速览
ZeptoClaw 项目今日整体处于**安全加固与依赖维护**阶段，无新功能版本发布。项目活跃度主要体现在维护层面，成功关闭了 1 项关键的安全审计任务，同时 Dependabot 提交了 2 个待处理的依赖更新 PR。整体来看，项目正在强化 Web/控制面的安全性，并保持基础设施依赖的现代化，健康度良好。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日项目进展主要集中在安全合规与依赖管理清理上：
*   **安全审计完成**：Issue [#587](https://github.com/qhkm/zeptoclaw/issues/587) 于今日关闭。该 Issue 追踪了对 Web/控制面进行深度 AI 漏洞审计的任务，涵盖了 Docker/运行时验证及最终打包流程。该任务的关闭标志着项目在安全性方面通过了重要检查点，为后续发布提供了安全保障。
*   **依赖更新清理**：PR [#574](https://github.com/qhkm/zeptoclaw/pull/574) 已关闭。这是一个关于 `taiki-e/install-action` 的依赖更新，虽然该 PR 被关闭，但随后出现了版本跨度更大的新 PR，表明项目正在持续跟进依赖版本。

## 4. 社区热点
今日社区互动较少，焦点主要集中在内部维护任务上：
*   **[#587 [CLOSED] chore(security): deep ai-vulns audit of web/control-plane surfaces](https://github.com/qhkm/zeptoclaw/issues/587)**
    *   **分析**：虽然评论数仅为 1，但作为今日唯一活跃的 Issue，其关闭代表了维护者对项目安全性的承诺。该任务涉及“AI 漏洞审计”，反映了项目对当前 AI 智能体安全风险的重视，属于项目质量建设的核心动作。

## 5. Bug 与稳定性
本日无新增 Bug 报告、崩溃或回归问题。

## 6. 功能请求与路线图信号
本日无新增功能请求。从已关闭的 Issue #587 可以看出，项目当前的路线图重心在于**提升安全基线**，特别是在 AI 智能体与 Web 控制面交互的安全性验证上。这暗示下一阶段可能会有针对安全加固的专项版本发布。

## 7. 用户反馈摘要
由于本日无新开 Issue 且活跃 Issue 主要为维护性质，暂无明显的用户痛点或功能反馈可供提炼。

## 8. 待处理积压
当前有 2 个待合并的依赖更新 PR，建议维护者及时审核以保持依赖新鲜度：
*   **[#586 [OPEN] chore(deps): bump taiki-e/install-action from 2.75.17 to 2.75.29](https://github.com/qhkm/zeptoclaw/pull/586)**
    *   **详情**：Github Actions 依赖升级，版本跨度较大，建议优先审核合并以获取上游修复。
*   **[#585 [OPEN] chore(deps): bump debian from cedb1ef to 109e2c6](https://github.com/qhkm/zeptoclaw/pull/585)**
    *   **详情**：Docker 基础镜像更新，涉及系统底层库，建议进行基础构建测试后合并。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*