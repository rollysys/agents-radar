# OpenClaw 生态日报 2026-04-18

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-18 02:40 UTC

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

# OpenClaw 项目动态日报 (2026-04-18)

## 1. 今日速览
OpenClaw 项目在过去 24 小时内保持了极高的活跃度，Issues 和 PR 更新量均达到 500 条，显示出社区对项目的强烈关注。虽然没有发布新版本，但核心开发团队正集中精力修复近期版本引入的回归问题，特别是 Web UI 交互、OAuth 认证流程以及模型提供商兼容性方面。讨论热度最高的是关于 Agent 身份信任验证的 RFC 提案，这预示着项目正在构建更深层的安全基础设施。整体来看，项目正处于“修复与稳固”阶段，大量 Bug 修复 PR 已提交待合并。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **122** 个 PR 被合并或关闭，主要集中在提升系统稳定性、修复回归错误和增强多渠道支持：

*   **Web UI 体验优化**：PR [#68370](https://github.com/openclaw/openclaw/pull/68370) 修复了聊天界面拉伸过宽的问题，将最大宽度限制在 920px，提升了阅读体验。
*   **关键模型提供商修复**：PR [#68351](https://github.com/openclaw/openclaw/pull/68351) 修复了 OpenRouter 模型返回空响应的问题，解决了部分模型无法使用的阻塞；PR [#67765](https://github.com/openclaw/openclaw/pull/67765) 修复了 Cron 任务中模型静默回退到错误提供商的问题。
*   **进程管理增强**：PR [#43961](https://github.com/openclaw/openclaw/pull/43961) 引入了强制 SIGKILL 机制，解决了进程在优雅关闭超时后仍僵死导致重启失败的问题。
*   **渠道功能完善**：PR [#65270](https://github.com/openclaw/openclaw/pull/65270) 为 LINE 渠道增加了贴纸收发支持，完善了多模态交互能力。

## 4. 社区热点
今日社区讨论焦点集中在架构设计与严重的功能回归上：

*   **[RFC] Native Agent Identity & Trust Verification** ([#49971](https://github.com/openclaw/openclaw/issues/49971))：评论数高达 **93** 条。该提案建议引入原生 Agent 身份与信任验证机制，结合 W3C DID 标准，讨论了如何防止恶意 Agent 冒充，是项目迈向可信 AI 生态的关键一步。
*   **Windows Chat UI 严重回归** ([#67035](https://github.com/openclaw/openclaw/issues/67035))：用户反馈升级 2026.4.14 后，Web UI 出现输入框吞字、流式回复不可见等严重体验问题，引发大量关注（评论 12 条）。
*   **Coding Agent "罢工"问题** ([#62505](https://github.com/openclaw/openclaw/issues/62505))：多位用户报告 Coding Agent 在新版中无法完成任务，仅输出模糊状态，严重影响了核心生产力场景（评论 11 条）。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，且多为影响使用的回归问题：

*   **严重 - 配置写入错误**：Issue [#67295](https://github.com/openclaw/openclaw/issues/67295) 指出 `openclaw agents add` 命令会写入错误的 `baseUrl`，导致 OpenRouter、OpenAI-Codex 等主流提供商同时失效。
*   **严重 - OAuth 认证阻塞**：Issue [#36399](https://github.com/openclaw/openclaw/issues/36399) 显示使用 OAuth (google-gemini-cli) 进行多步工具调用时会出现 60 秒卡顿，严重影响交互流畅度。
*   **中等 - 权限策略阻断**：Issue [#51085](https://github.com/openclaw/openclaw/issues/51085) 报告浏览器麦克风权限被默认安全头阻断，导致语音输入失效。**已有修复 PR** [#68368](https://github.com/openclaw/openclaw/pull/68368)。
*   **中等 - Vertex AI 认证失败**：Issue [#64852](https://github.com/openclaw/openclaw/issues/64852) 指出升级后 Google Vertex AI OAuth 认证失效，回退到旧版本可恢复。
*   **已修复 - TTS 无限循环**：Issue [#67744](https://github.com/openclaw/openclaw/issues/67744) 报告未配置 TTS 时 Agent 陷入死循环，该 Issue 已关闭。

## 6. 功能请求与路线图信号
*   **行为信誉系统**：Issue [#55342](https://github.com/openclaw/openclaw/issues/55342) 提出在身份验证之上建立 Skills（技能）的行为信誉层，以解决恶意 Skill 注入和信任累积问题，这可能是安全路线图的下一阶段重点。
*   **多用户权限管理**：Issue [#8081](https://github.com/openclaw/openclaw/issues/8081) 请求增加基于角色的访问控制 (RBAC)，当前所有用户均可查看敏感配置，这限制了 OpenClaw 在多用户家庭或团队场景下的部署。
*   **LINE 贴纸支持**：PR [#65270](https://github.com/openclaw/openclaw/pull/65270) 正在审查中，有望在下个版本支持 LINE 的贴纸交互。

## 7. 用户反馈摘要
用户普遍对近期版本的稳定性表示担忧，尤其是 **Windows 平台** 和 **新版本升级** 带来的回归问题。

*   **痛点**：升级后的“配置破坏”和“工具调用卡顿”是当前最大的槽点。例如用户在 [#67035](https://github.com/openclaw/openclaw/issues/67035) 中抱怨“输入内容凭空消失”，以及 [#67295](https://github.com/openclaw/openclaw/issues/67295) 中配置错误导致连接失败。
*   **认可点**：社区对 RFC 提案的响应非常积极，显示出高级用户对 OpenClaw 向企业级安全标准靠拢的期待。
*   **使用场景**：Coding Agent 是核心高频场景，其失效（[#62505](https://github.com/openclaw/openclaw/issues/62505)）直接影响了开发者的日常工作流。

## 8. 待处理积压
以下重要 Issue 长期未得到有效解决或处于 Stale 状态，建议维护者优先关注：

*   **Docker 环境兼容性**：Issue [#14593](https://github.com/openclaw/openclaw/issues/14593) 报告 Linux 容器下缺少 `brew` 导致技能安装失败，已存在数月，影响了容器化部署体验。
*   **长期存在的卡顿问题**：Issue [#36399](https://github.com/openclaw/openclaw/issues/36399) 涉及 OAuth 工具调用的严重卡顿，虽然已被识别但尚未有彻底的修复方案合并。
*   **Context 压缩导致崩溃**：Issue [#36229](https://github.com/openclaw/openclaw/issues/36229) 指出长对话自动压缩时会破坏思考块签名，导致会话彻底失败，这是长期稳定性的一大隐患。

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告 (2026-04-18)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从"功能爆发"向"质量加固"与"自主化"转型的关键期**。头部项目普遍面临架构重构与稳定性回归的双重挑战，社区对**长期记忆**、**身份安全**及**多渠道融合**的需求空前高涨。同时，Agent 正从单一对话工具向具备任务闭环能力的 "Worker" 演进（如 CoPaw 的 Mission Mode），表明生态正在跨越单纯的功能堆砌，进入深度场景落地的竞争阶段。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 (合并) | Release 情况 | 健康度/阶段评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500+ (极高) | 500+ (122 merged) | 无 | **成熟稳固**：处于修复与稳固阶段，社区关注度最高。 |
| **CoPaw (QwenPaw)** | 50+ | 44+ (23 merged) | **v1.1.2** | **快速迭代**：发布 Mission Mode 核心功能，品牌迁移带来阵痛。 |
| **PicoClaw** | 103 (极高) | 123 (极高) | Nightly | **高速开发**：功能迭代极快，Issue 积压较多，需关注支持压力。 |
| **Zeroclaw** | 32 | 50 (18 merged) | **v0.7.0-beta.x3** | **架构重构**：破坏性变更频繁，处于 Beta 测试阵痛期。 |
| **IronClaw** | 28 | 50 (48 merged) | 待发布 (v0.25.0) | **发布冲刺**：QA 修复密集，处于版本发布前的质量攻坚阶段。 |
| **Hermes Agent** | 50+ | 50+ (27 merged) | 无 | **功能扩展**：多平台集成活跃，安全性修复力度大。 |
| **NanoClaw** | 10 | 22 (13 merged) | 无 | **基建重构**：向 Bun/pnpm 迁移，工程化水平提升中。 |
| **NanoBot** | 16 | 52 (24 merged) | 无 | **质量加固**：专注死循环与内存修复，稳定性显著提升。 |
| **Moltis** | 14 | 17 (11 merged) | **20260417.x2** | **稳步迭代**：Web UI 迁移与连接器增强并进。 |
| **NullClaw** | 3 | 15 (10 merged) | **v2026.4.17** | **技术演进**：Zig 0.16 迁移完成，工具定制化体系构建中。 |
| **LobsterAI** | 7 | 27 (20 merged) | **2026.4.17** | **稳定维护**：依赖升级与多渠道支持优化。 |
| **TinyClaw** | 0 | 1 (Closed) | 无 | **静默/维护**：活跃度低。 |
| **ZeptoClaw/EasyClaw**| 0 | 0 | 无 | **静默**：无动态。 |

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照系**，OpenClaw 展现出了与其他项目显著的差异化定位：

*   **社区规模与成熟度标杆**：OpenClaw 的 Issues/PRs 更新量级（500+）远超同类项目，且讨论焦点已深入至 "Agent Identity & Trust Verification" (W3C DID 标准) 等深层安全架构。相比之下，PicoClaw 和 CoPaw 虽活跃，但主要集中在功能请求和基础 Bug 修复，OpenClaw 显然处于更成熟的生态位。
*   **稳定性 vs. 激进功能**：当 Zeroclaw 和 NanoClaw 在进行破坏性的架构重构时，OpenClaw 正处于"修复与稳固"阶段，集中精力解决 OAuth、UI 回归等核心体验问题。这表明 OpenClaw 更注重企业级稳定性与向后兼容，而非激进的技术实验。
*   **技术路线差异**：
    *   **vs. NullClaw/Zeroclaw**：NullClaw 和 Zeroclaw 正激进地迁移底层语言和架构，追求高性能；OpenClaw 则在现有架构上完善安全与信任体系。
    *   **vs. CoPaw**：CoPaw 正大力推广自主任务执行，而 OpenClaw 仍聚焦于修复 Web UI 交互和配置错误，显示出 OpenClaw 对现有功能可用性的严谨态度。

## 4. 共同关注的技术方向

综合各项目动态，以下技术趋势在生态中呈现明显的共性需求：

1.  **长期记忆与上下文管理**
    *   **涉及项目**：NanoBot (#3227), Hermes (#6323), PicoClaw (Seahorse), NullClaw (Graph PR), CoPaw (Memory Refactor)。
    *   **核心诉求**：简单的 `history.jsonl` 已无法满足长周期任务。社区正积极探索 RAG、知识图谱、摘要压缩等方案，以突破 LLM 上下文窗口限制，实现 Agent 的"经验积累"。

2.  **沙箱安全与身份验证**
    *   **涉及项目**：OpenClaw (RFC 49971), Hermes (Key Leakage), Zeroclaw (Landlock/TOTP), Moltis (Nostr Security)。
    *   **核心诉求**：随着 Agent 权限扩大（如 Shell 执行、文件操作），防止恶意冒充、密钥泄露和沙箱逃逸成为共识。OpenClaw 提出的身份信任验证是这一趋势的顶峰。

3.  **多渠道与统一网关**
    *   **涉及项目**：Hermes (DingTalk/WhatsApp), LobsterAI (NIM/Email), NullClaw (WeChat), Moltis (Matrix/Nostr)。
    *   **核心诉求**：用户希望 Agent 能无缝接入微信、钉钉、Telegram、Matrix 等多平台。Web UI 仅是入口之一，"无处不在"的接入能力是竞争关键。

4.  **本地模型与异构算力支持**
    *   **涉及项目**：PicoClaw (LM Studio), Zeroclaw (Groq), IronClaw (Aliyun), CoPaw (ACP)。
    *   **核心诉求**：降低对单一云厂商的依赖，支持 OpenAI-Compatible 接口（如 LM Studio, OpenRouter）及国产模型（Kimi, DeepSeek, Qwen）的接入，实现模型层的解耦。

## 5. 差异化定位分析

| 维度 | **OpenClaw** | **PicoClaw / CoPaw** | **Zeroclaw / NullClaw** | **NanoBot / Moltis** |
| :--- | :--- | :--- | :--- | :--- |
| **核心侧重** | **企业级安全与稳定** | **自主任务与功能广度** | **架构创新与高性能** | **垂直领域与特定协议** |
| **目标用户** | 企业开发者、高级用户 | 个人用户、极客开发者 | 系统架构师、技术极客 | 特定场景用户（如隐私通讯） |
| **技术架构** | 成熟稳定，侧重信任体系 | 快速迭代，侧重 Task 执行 | 底层重构 | 模块化，轻量级 |
| **典型特征** | 社区最活跃，RFC 深度讨论 | Mission Mode，品牌迁移 | Zig/Rust 重写，沙箱机制 | 代码整洁，协议支持丰富 |
| **主要痛点** | 升级回归、配置破坏 | 品牌迁移混淆、内存占用 | 编译门槛高、沙箱策略严 | 安装体验、文档缺失 |

## 6. 社区热度与成熟度

*   **第一梯队（成熟期/守成期）**：**OpenClaw**。虽然处于修复阶段，但其社区规模和讨论深度（如 DID 身份验证）遥遥领先，属于生态中的"基础设施"级项目。
*   **第二梯队（爆发期/阵痛期）**：**CoPaw, PicoClaw, IronClaw**。功能迭代极快，用户增长迅速，但深受 Bug 积压、品牌迁移和内存问题的困扰。CoPaw 的 Mission Mode 发布引发了大量关注，正处于关键的功能验证期。
*   **第三梯队（重构期/探索期）**：**Zeroclaw, NanoClaw, NullClaw**。这些项目正在进行底层的架构重构（如迁移 Bun、Zig 或 Cargo Workspace），试图通过技术栈革新解决性能瓶颈，但也因此引入了不稳定性。
*   **第四梯队（维护期/垂直期）**：**NanoBot, TinyClaw, LobsterAI**。专注于特定领域的质量加固或依赖维护，活跃度中等偏稳。

## 7. 值得关注的趋势信号

1.  **Agent "Mission Mode" 的兴起**：
    *   CoPaw 发布的 Mission Mode 标志着 Agent 正从 "Chatbot" 向 "Worker" 质变。用户不再满足于单轮问答，而是期待 Agent 能自主规划、执行并纠错长链路任务。这对记忆系统（#3227）和工具可靠性提出了极高要求。

2.  **安全边界的前置化**：
    *   OpenClaw 的身份 RFC 和 Zeroclaw 的 TOTP 门禁表明，社区已意识到 "Agent 权限过大" 的风险。未来的 Agent 开发将默认包含沙箱隔离和敏感操作二次确认，"安全"将从可选项变为必选项。

3.  **本地化与私有化部署的矛盾**：
    *   用户强烈呼吁支持 LM Studio、Podman 和本地模型，但同时遭遇了 Landlock 沙箱拦截、ARM 架构编译失败等问题。这揭示了一个核心矛盾：**用户想要易用的本地智能体，但当前的容器化和隔离技术在易用性与安全性之间难以兼顾**。

4.  **架构重构潮**：
    *   多个项目（Zeroclaw, NanoClaw, Moltis）几乎在同一时间进行大规模架构调整。这暗示着早期的 MVP 架构已无法支撑当前多模态、多渠道、高并发的 Agent 需求，2026 年将是 AI Agent 基础设施重构的关键之年。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-18)

## 1. 今日速览
NanoBot 项目今日保持极高的开发活跃度，共处理了 **52 个 Pull Requests**（其中 24 个已合并）和 **16 个 Issues**。项目重心明显转向**系统稳定性与鲁棒性**，重点修复了多处导致死循环、内存丢失和 API 兼容性的关键 Bug。社区方面，开发者对“记忆系统在长周期项目中的局限性”展开了深度讨论，显示出用户正将 NanoBot 应用于更复杂的实际生产场景。整体来看，项目正在经历一次密集的“质量加固”周期，为新功能的引入打下了坚实基础。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 24 个 PR 被合并，显著提升了系统的稳定性与兼容性，主要进展如下：

*   **核心稳定性修复**：
    *   合并 [PR #3249](https://github.com/HKUDS/nanobot/pull/3249)：增加了 `finish_reason` 检查，防止 API 网关注入错误导致的工具执行死循环。
    *   合并 [PR #3163](https://github.com/HKUDS/nanobot/pull/3163)：修复了 Cron 工具因 Schema 定义与运行时不一致导致的 LLM 死循环问题 ([Issue #3113](https://github.com/HKUDS/nanobot/issues/3113))。
    *   合并 [PR #3266](https://github.com/HKUDS/nanobot/pull/3266)：修复了流式响应中途出错导致程序异常退出的问题。
*   **数据安全与内存管理**：
    *   合并 [PR #3248](https://github.com/HKUDS/nanobot/pull/3248)：修复了 LLM 调用失败（如 529 错误）导致 `history.jsonl` 被错误清空的数据丢失问题，增加了回退机制 ([Issue #3244](https://github.com/HKUDS/nanobot/issues/3244))。
*   **API 兼容性**：
    *   合并 [PR #3233](https://github.com/HKUDS/nanobot/pull/3233)：解决了 GLM/智谱 API 报错 `1214` 的问题，优化了历史记录截断逻辑以符合 API 规范 ([Issue #3143](https://github.com/HKUDS/nanobot/issues/3143))。
    *   合并 [PR #3238](https://github.com/HKUDS/nanobot/pull/3238)：修复了子智能体无法继承环境变量的问题。

## 4. 社区热点
今日社区讨论最热烈的 Issue 聚焦于架构层面的改进：

*   **[Issue #3227](https://github.com/HKUDS/nanobot/issues/3227) 记忆系统局限性讨论**（👍 4, 评论 9）
    *   **核心诉求**：用户 @kxsk-git 指出，当前的内存管理（`history.jsonl` -> `MEMORY.md`）在长周期、大型项目中难以保留细节，上下文注入方式较为生硬。
    *   **分析**：这是一个高质量的架构级反馈。用户对代码整洁度给予了高度评价，但认为记忆提炼机制需要优化。这表明 NanoBot 正吸引深度用户，现有的“摘要+原文”记忆模式可能无法满足复杂 Agent 任务的需求。
*   **[Issue #3107](https://github.com/HKUDS/nanobot/issues/3107) 功能建议汇总**（评论 6）
    *   **核心诉求**：用户 @aiguozhi123456 提出了多项改进建议，包括状态显示优化、LLM 请求 Timeout 配置、Provider Fallback 机制等。
    *   **分析**：这反映了用户对系统可观测性和容错能力的强烈需求。其中“状态黑盒”问题尤为突出。

## 5. Bug 与稳定性
今日报告了多个影响使用体验的 Bug，部分已有修复方案：

*   **P0 - 配置解析失败** ([Issue #3251](https://github.com/HKUDS/nanobot/issues/3251))：
    *   `config.json` 支持 `${VAR}` 语法但未实际解析，导致鉴权静默失败，影响 Windows 用户。暂无修复 PR。
*   **P1 - LLM 截断未重试** ([Issue #3256](https://github.com/HKUDS/nanobot/issues/3256))：
    *   流式响应中断时，系统将部分结果视为成功，未进行重试。已提交 [PR #3254](https://github.com/HKUDS/nanobot/pull/3254) 尝试修复相关问题。
*   **P2 - Gemini 认证冲突** ([Issue #3206](https://github.com/HKUDS/nanobot/issues/3206))：
    *   Gemini Provider 报错 `Multiple authentication credentials received`，配置存在冲突。
*   **P2 - 文档内容提取缺失** ([Issue #3250](https://github.com/HKUDS/nanobot/issues/3250))：
    *   解析 PPTX 文件时，表格和组合形状中的文本丢失。

## 6. 功能请求与路线图信号
*   **多模态与语音交互优化**：
    *   [Issue #3257](https://github.com/HKUDS/nanobot/issues/3257) 请求增加 STT/LLM/TTS 各阶段延迟监控，针对语音交互场景（延迟 35-60s）。
    *   [PR #2529](https://github.com/HKUDS/nanobot/pull/2529)（Open）正在尝试修复 WhatsApp 语音消息下载转录问题。
*   **自定义模型提供商**：
    *   [PR #3264](https://github.com/HKUDS/nanobot/pull/3264)（Open）提议支持自定义 OpenAI 兼容提供商，响应了社区对多样化模型接入的需求。
*   **安全增强**：
    *   [PR #3255](https://github.com/HKUDS/nanobot/pull/3255) 和 [PR #3268](https://github.com/HKUDS/nanobot/pull/3268) 分别提出了文件系统层面的保护和基于正则的配置黑名单，预示着项目正在加强 Agent 的安全沙箱能力。

## 7. 用户反馈摘要
*   **正面反馈**：用户称赞代码“整洁、轻巧、容易上手，探索起来是一种享受” ([Issue #3227](https://github.com/HKUDS/nanobot/issues/3227))。
*   **痛点反馈**：
    *   **安装与卸载**：新用户抱怨无法卸载或彻底停止进程 ([Issue #3267](https://github.com/HKUDS/nanobot/issues/3267))，文档缺失导致入门体验受损。
    *   **UI 输出噪音**：在终端运行时，状态动画输出产生大量“垃圾”字符，影响阅读 ([Issue #3265](https://github.com/HKUDS/nanobot/issues/3265))。
    *   **错误重试干扰**：重试机制会向用户发送多条报错信息，体验嘈杂 ([Issue #3246](https://github.com/HKUDS/nanobot/issues/3246))。

## 8. 待处理积压
*   **长期未响应**：
    *   [Issue #1672](https://github.com/HKUDS/nanobot/issues/1672)（WhatsApp 自发自收）：已活跃一个月，尚无有效解决方案，影响个人助手场景的使用。
*   **重要未处理**：
    *   [Issue #3227](https://github.com/HKUDS/nanobot/issues/3227)（记忆系统局限）：作为高热度 Issue，建议维护者尽早介入讨论，规划改进路线。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-18)

## 1. 今日速览
Zeroclaw 今日处于**高活跃度开发状态**，随着 v0.7.0-beta 系列版本的密集发布，项目迎来了历史上最大的架构重构。过去 24 小时内共有 **50 个 PR 更新**（其中 18 个已合并/关闭）和 **32 个 Issue 更新**，显示出社区与核心团队在重构后的反馈循环非常紧密。核心重点在于代码库的 Cargo workspace 化拆分与新配置 Schema 的迁移，同时也暴露了部分工具调用和沙箱环境下的兼容性问题。

## 2. 版本发布
今日连续发布了 **3 个新版本**，均基于 `v0.6.9` 之后的 `next` 分支：
- **[v0.7.0-beta.1041](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.0-beta.1041)**
- **[v0.7.0-beta.1040](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.0-beta.1040)**
- **[v0.7.0-beta.1030](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.0-beta.1030)**

**核心变更：**
1.  **架构重构**：进行了 Zeroclaw 历史上最大的结构性调整，将单体代码库拆分为专注的 Cargo workspace crates，旨在提高模块化程度和编译效率。
2.  **配置迁移**：引入了新的配置 Schema，并支持在线实时迁移。
**注意**：此为 Beta 版本，涉及破坏性变更，建议用户在升级前备份配置，并关注配置文件迁移逻辑。

## 3. 项目进展
今日共有 **18 个 PR 合并或关闭**，显著推进了功能迭代与问题修复：
- **架构与配置修复**：PR [#5848](https://github.com/zeroclaw-labs/zeroclaw/pull/5848) 修复了 Feishu 频道配置忽略 `mention_only` 字段及 Groq 供应商工具调用失败的问题，完善了多渠道适配。
- **关键 Bug 修复（待合并）**：PR [#5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774) 正在解决 Gateway 路径下技能定义工具无法识别的严重问题（关联 Issue #5850），这对 Web UI 用户至关重要。
- **安全性增强**：PR [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) 提出了针对 Shell 工具高危命令的 TOTP 门禁机制，目前处于高风险审核阶段。
- **可观测性提升**：PR [#5785](https://github.com/zeroclaw-labs/zeroclaw/pull/5785) 致力于在 Agent Turn 生命周期中注入观察者事件，增强运行时追踪能力。

## 4. 社区热点
今日讨论最热烈的议题集中在**国际化架构**与**沙箱安全机制**：
- **[Issue #5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787)**: 提议用 Mozilla Fluent 替换现有的 TOML i18n 系统。该 RFC 引发了关于文档维护成本与翻译系统灵活性的深入讨论，社区倾向于采用更标准的 Fluent 方案。
- **[Issue #5153](https://github.com/zeroclaw-labs/zeroclaw/issues/5153)**: Landlock 沙箱机制导致进程状态“中毒”，进而阻断后续工作区访问。该 S1 级 Bug 已持续数日，今日再次活跃，用户对 Linux 环境下的安全策略稳定性表示担忧。
- **[Issue #5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719)**: 用户 @perlowja 报告在配置 `runtime.kind = "native"` 时，Shell 工具仍强制调用 Docker，影响了复杂技能（如 InvestorClaw）的本地开发体验。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，部分已有修复方案：
- **S1 - 工作流阻断**：
    - **[Issue #5850](https://github.com/zeroclaw-labs/zeroclaw/issues/5850)**: Web UI (Gateway) 路径下，技能定义的工具返回 "Unknown tool"。**修复 PR [#5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774) 已提交。**
    - **[Issue #5356](https://github.com/zeroclaw-labs/zeroclaw/issues/5356)**: Telegram/Discord 等频道 Agent 的 Canvas 工具无法将帧推送到 WebSocket 客户端，导致绘图功能静默失败。
    - **[Issue #5591](https://github.com/zeroclaw-labs/zeroclaw/issues/5591)**: 通过频道使用监督模式时，操作被错误拒绝。
- **S0 - 严重/安全风险**：
    - **[Issue #5756](https://github.com/zeroclaw-labs/zeroclaw/issues/5756)**: 自行编译的 ARM64 版本在特定开发板上无法运行，提示 `Not valid`，怀疑涉及架构指令集兼容性。**已关闭，可能确认非代码问题。**
- **S2 - 功能降级**：
    - **[Issue #5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809)**: Shell 安全策略误拦截 `git -C` 命令（因参数小写化导致与 `-c` 混淆）。

## 6. 功能请求与路线图信号
- **记忆与自主学习**：[Issue #5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) 提出 "Dream Mode"，建议 Agent 在空闲时整理记忆与反思。这与 [Issue #5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)（抱怨当前过度依赖记忆干扰即时 Prompt）形成呼应，预示着记忆管理机制将成为下阶段重点。
- **模型精细控制**：[Issue #5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843) 建议将推理配置下放到具体的模型/供应商维度，而非全局设置。
- **连接稳定性**：[Issue #5761](https://github.com/zeroclaw-labs/zeroclaw/issues/5761) 请求为 Webhook Channel 增加指数退避重试机制，提高消息投递的鲁棒性。

## 7. 用户反馈摘要
- **配置复杂度上升**：用户在配置 Web Dashboard 时遇到困难（[Issue #5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847)），对 `gateway.web_dist_dir` 环境变量的设置感到困惑，且构建提示不够清晰。
- **默认沙箱策略过严**：多位开发者反馈默认的 Landlock 或 Shell 策略严重阻碍了正常的开发工作流（如 Python 技能运行、Git 操作），认为默认配置应更宽容或提供更便捷的调试模式（[Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722), #5719）。
- **渠道体验差异**：Web UI 与 Telegram/Discord 等渠道的功能一致性存在问题（如 Canvas 工具、Supervised 模式），用户期望各渠道行为对齐。

## 8. 待处理积压
- **[Issue #5153](https://github.com/zeroclaw-labs/zeroclaw/issues/5153)** (S1): Landlock 沙箱导致进程 Poison 的问题仍未解决，严重影响 Linux 用户的稳定性，建议维护者优先排期。
- **[Issue #5229](https://github.com/zeroclaw-labs/zeroclaw/issues/5229)** (关联 PR #5363): Gateway 模型切换不生效的问题已存在一段时间，PR 尚在审核中，需尽快合并以恢复热更新配置能力。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-04-18)

## 1. 今日速览
Hermes Agent 今日保持了极高的社区活跃度，共处理了 **50 条 Issues 更新** 和 **50 条 PR 更新**。项目重心集中在提升多平台网关的稳定性与修复 Provider 兼容性问题。今日最为关键的是修复了配置文件写入导致密钥明文泄露的严重安全隐患，以及解决了 Kimi Provider 因温度参数设置引发的 400 错误。同时，社区对“外部记忆支持”和“自进化能力”的讨论热度较高，显示出用户对 Agent 长期记忆与自主能力的强烈需求。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日共有 **27 个 PR 被合并或关闭**，主要推进了以下方面的进展：

*   **平台集成增强**：
    *   PR #11910 完成了对钉钉（DingTalk）平台的深度优化，引入了 AI Cards 流式传输、表情反应及媒体处理功能，使其功能对齐 Telegram/Slack 等主流平台。
    *   PR #11920 提交了对 Discord 论坛频道（Forum Channels）的支持，修复了此前无法发送消息的问题。
*   **运行稳定性修复**：
    *   PR #11909 和 #11918 解决了旧版 `hermes.service` 与新版服务冲突导致的 Gateway 网关崩溃循环问题，提升了升级平滑度。
    *   PR #11912 修复了文件操作工具使用陈旧工作目录（CWD）的问题，确保 Agent 在终端切换目录后文件操作路径依然正确。
*   **环境兼容性**：
    *   PR #11908 修复了在 Distrobox 等容器化环境中 Systemd 服务路径检测错误的问题。

## 4. 社区热点
*   **Issue #11765 [CLOSED]**: **Kimi Provider 温度参数错误**。该问题引发了 18 条评论，是今日讨论最多的话题。用户在使用 `kimi-for-coding` 模型时遇到 HTTP 400 错误，原因是 API 强制要求 `temperature=0.6`，而 Agent 传递了其他值。这反映了用户对国产模型接入的高度关注，以及对模型超参数微调灵活性的需求。
    *   链接: [NousResearch/hermes-agent Issue #11765](https://github.com/NousResearch/hermes-agent/issues/11765)
*   **Issue #6323 [OPEN]**: **外部记忆模块 支持**。该功能请求获得了 21 个赞和 8 条评论。用户提议集成 `mempalace` 以突破上下文窗口限制，实现长期记忆。这是目前得票最高的 Feature Request，表明“持久化记忆”是社区最期待的功能之一。
    *   链接: [NousResearch/hermes-agent Issue #6323](https://github.com/NousResearch/hermes-agent/issues/6323)
*   **PR #11877 [OPEN]**: **自我纠错分析器**。该 PR 提出了一种通过分析历史会话错误模式自动生成预防规则的机制，体现了 Hermes 作为“自进化 Agent”的核心愿景。
    *   链接: [NousResearch/hermes-agent PR #11877](https://github.com/NousResearch/hermes-agent/pull/11877)

## 5. Bug 与稳定性
今日报告的 Bug 集中在配置安全、Provider 兼容性和上下文处理方面：

*   **严重**:
    *   **Issue #11551 [CLOSED]** & **Issue #11864 [OPEN]**: **配置文件密钥泄露**。`save_config` 函数会将环境变量引用（如 `${API_KEY}`）解析并回写为明文密钥，造成严重安全风险。#11551 已关闭，但 #11864 指出在配置迁移/更新场景下该问题仍存在。
        *   链接: [Issue #11551](https://github.com/NousResearch/hermes-agent/issues/11551), [Issue #11864](https://github.com/NousResearch/hermes-agent/issues/11864)
*   **高优先级**:
    *   **Issue #11914 [OPEN]**: **上下文压缩导致任务丢失**。在使用 MiniMax 进行上下文压缩时，Agent 会“遗忘”当前正在进行的任务，导致工作流中断。
        *   链接: [NousResearch/hermes-agent Issue #11914](https://github.com/NousResearch/hermes-agent/issues/11914)
    *   **Issue #7893 [OPEN]**: **Gemini 双重认证错误**。使用原生 Gemini provider 时，Agent 发送了重复的认证凭据，导致 HTTP 400 错误。
        *   链接: [NousResearch/hermes-agent Issue #7893](https://github.com/NousResearch/hermes-agent/issues/7893)
*   **中优先级**:
    *   **Issue #11610 [OPEN]**: **Cron 任务环境不一致**。Cron 任务偶发 `ModuleNotFoundError`，原因是 Python 解释器路径解析不一致。
        *   链接: [NousResearch/hermes-agent Issue #11610](https://github.com/NousResearch/hermes-agent/issues/11610)
    *   **Issue #11840 [OPEN]**: **macOS SSH Socket 路径溢出**。在 IPv6 环境下，SSH ControlMaster socket 路径超过 macOS 104 字符限制。
        *   链接: [NousResearch/hermes-agent Issue #11840](https://github.com/NousResearch/hermes-agent/issues/11840)

## 6. 功能请求与路线图信号
*   **记忆与进化**：除了热门的 `mempalace` 记忆支持 (#6323) 外，Issue #11919 提议 `SOUL.md`（人设文件）应随使用自动演化，而非静态初始化。这表明用户希望 Agent 具备更强的“个性化成长”属性。
*   **平台扩展**：PR #11873 提交了基于 Meta Cloud Business API 的 WhatsApp 支持，PR #11465 请求支持飞书文档评论回复。这显示 Hermes 正在从单纯的 IM 消息机器人向全平台协作助手演进。
*   **模型支持**：Issue #6595 已关闭，此前 Telegram `/model` 选择器中缺失 `gpt-5.4` 模型，表明项目正在跟进最新模型发布。

## 7. 用户反馈摘要
*   **安全顾虑**：用户对配置文件处理环境变量的方式感到担忧，明确不希望密钥以明文形式存储在磁盘上。
*   **长文本痛点**：频繁出现的“Response truncated”（响应截断）(#7237) 和上下文压缩遗忘 (#11914) 问题，暴露了用户在处理长任务场景下的不稳定性，这是目前影响用户体验的核心痛点。
*   **国产模型兼容性**：社区对 Kimi、DeepSeek 等国产大模型的接入需求强烈，但对 API 参数差异（如 Temperature 限制）导致的中断感到困惑，建议加强 Provider 层的参数校验或自动适配。

## 8. 待处理积压
*   **Issue #5554**: **ARM64 架构支持**。用户在 Raspberry Pi 上测试的需求，已提出数日，目前尚未有官方明确响应。
    *   链接: [NousResearch/hermes-agent Issue #5554](https://github.com/NousResearch/hermes-agent/issues/5554)
*   **Issue #10877 & #10879**: **Memory Tool 稳健性**。外部写入的 Memory 文件导致字符限制失效或非 UTF-8 编码导致崩溃，属于边缘但影响稳定性的问题，建议维护者关注。
    *   链接: [Issue #10877](https://github.com/NousResearch/hermes-agent/issues/10877), [Issue #10879](https://github.com/NousResearch/hermes-agent/issues/10879)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-18)

## 1. 今日速览
PicoClaw 项目今日呈现极高的开发活跃度与社区互动热度，过去 24 小时内 PR 更新量高达 123 条，Issue 活跃度达到 103 条。项目刚刚发布了 `v0.2.6-nightly.20260418` 版本，显示出主分支正频繁集成新功能。社区焦点集中在 **Provider 兼容性增强**（如 LM Studio、OpenRouter）、**Agent 记忆系统** 的架构设计以及 **多渠道部署的稳定性**（Docker、飞书、QQ）。虽然代码提交频繁，但 Issue 关闭率较低（仅 3 条），表明项目正处于功能快速迭代期，维护者可能面临较大的支持压力，重点倾向于功能合并而非 Issue 清理。

## 2. 版本发布
- **nightly: Nightly Build (v0.2.6-nightly.20260418.6126ede9)**
  - **更新内容**：这是一个自动化构建版本，通常包含最新的代码提交。
  - **变更范围**：根据 Changelog 链接，此版本包含自 `v0.2.6` 标签以来至 `main` 分支的所有变更。结合今日 PR 动态，可能包含 MCP 工具调用修复、Provider 包重构以及 Agent 记忆系统的配置化更新。
  - **注意事项**：官方提示 "Use with caution"，建议测试者使用，生产环境请等待 Stable 版本。

## 3. 项目进展
今日共有 16 个 PR 被合并或关闭，主要集中在**底层架构重构**与**关键 Bug 修复**：

- **核心修复**：
  - PR [#2579](https://github.com/sipeed/picoclaw/pull/2579) 修复了 MCP (Model Context Protocol) 工具调用时的参数空值处理问题，解决了与 Zod-based TypeScript 服务器的兼容性崩溃。
  - PR [#2437](https://github.com/sipeed/picoclaw/pull/2437) 修复了 Codex/OpenAI 流式输出为空的严重问题，确保了 LLM 响应内容的正确累积。
- **架构重构**：
  - PR [#2566](https://github.com/sipeed/picoclaw/pull/2566) 对 `pkg/providers` 和 `pkg/tools` 目录进行了重组，优化了包结构，减少了根目录文件冗余，这将显著提升后续维护效率。
- **功能增强**：
  - PR [#2570](https://github.com/sipeed/picoclaw/pull/2570) 使 Seahorse 记忆系统的 "fresh tail size" 变为可配置项，增强了 Agent 记忆管理的灵活性。

## 4. 社区热点
今日讨论最活跃的 Issues 显示出用户对 **本地模型支持** 和 **自动化运维** 的强烈需求：

- **[Issue #28](https://github.com/sipeed/picoclaw/Issue/28) [Feat Request: LM Studio Easy Connect]** (评论: 15)
  - **诉求分析**：用户希望更便捷地接入 LM Studio 本地模型。这反映了 PicoClaw 用户群体中有大量希望在本地或私有环境部署 AI Agent 的需求，目前的连接配置门槛仍然较高。
- **[Issue #618](https://github.com/sipeed/picoclaw/Issue/618) [Task] self-upgrade support]** (评论: 9)
  - **诉求分析**：自升级功能请求热度高。用户希望 Agent 能够自我更新，这对于长期运行的独立 Agent（如在嵌入式设备或后台服务中）至关重要。
- **[Issue #1919](https://github.com/sipeed/picoclaw/Issue/1919) [Feature] Seahorse Memory System** (评论: 9)
  - **技术洞察**：社区正在深入探讨 "海马体" 记忆系统架构。这表明项目正在从单纯的 "对话工具" 向具备 "长期记忆与上下文压缩能力" 的自主 Agent 进化。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在 **网络容错** 和 **部署环境配置**：

1.  **严重 Bug**：
    - [Issue #629](https://github.com/sipeed/picoclaw/Issue/629): LLM 调用失败（如 HTTP 500）时未进行重试，导致任务挂起。这是核心 Agent Loop 的健壮性问题，严重影响长任务执行。
    - [Issue #2371](https://github.com/sipeed/picoclaw/Issue/2371): Agent 运行时 Panic (`loop.go:2171`)，涉及 Qwen 模型与 OpenRouter 的组合，导致程序崩溃。
2.  **环境配置 Bug**：
    - [Issue #2236](https://github.com/sipeed/picoclaw/Issue/2236): Docker 部署修改 Web 端口后，前端输入框禁用无法发送消息。这是典型的环境变量与前端服务状态同步问题，影响自定义部署。
    - [Issue #2548](https://github.com/sipeed/picoclaw/Issue/2548): 配置文件中存在多重认证凭据导致报错。
3.  **已修复**：
    - PR #2579 已修复 MCP 工具调用参数解析错误。
    - PR #2437 已修复 OpenAI Responses API 流式输出为空的问题。

## 6. 功能请求与路线图信号
结合 Issue 讨论与 PR 动态，以下功能极有可能被纳入近期路线图：

- **Mattermost 渠道支持**：[Issue #1587](https://github.com/sipeed/picoclaw/Issue/1587) 提出支持 Mattermost，且已有对应的 [PR #1586](https://github.com/sipeed/picoclaw/pull/1586) 处于 Open 状态，合并概率高，将扩展企业级通讯渠道。
- **任务中断控制**：[Issue #2009](https://github.com/sipeed/picoclaw/Issue/2009) 提出的 `/stop` 命令需求，结合 [PR #2537](https://github.com/sipeed/picoclaw/pull/2537) 添加的 Context 统计功能，显示出项目正在完善 Agent 的运行时控制能力。
- **工具执行反馈**：[Issue #571](https://github.com/sipeed/picoclaw/Issue/571) 请求在工具执行期间提供进度反馈，[PR #2569](https://github.com/sipeed/picoclaw/pull/2569) 已经实现了跨平台的工具反馈动画优化，用户体验将得到提升。

## 7. 用户反馈摘要
从 Issue 评论中提炼出的用户真实声音：

- **痛点**：
  - "我在 Android Termux 上尝试运行，遇到了 Telegram 和配置方面的双重困难。" (Issue #1936, #2052) —— 移动端/轻量级环境支持仍需优化。
  - "执行工具时没有任何反馈，屏幕一片空白。" (Issue #571) —— 用户对 Agent "黑盒" 执行过程的焦虑感较强。
  - "配置 OpenRouter 或本地模型时经常遇到 ID 解析错误。" (Issue #1790, #1883) —— Provider 的隐式解析逻辑让新手困惑。

- **满意点**：
  - 开发者对 "Seahorse" 记忆系统的架构设计表现出浓厚兴趣，认为其 "类海马体" 的设计非常符合 AGI 的发展方向。
  - 对项目快速修复 MCP 兼容性问题（PR #2579）表示认可。

## 8. 待处理积压
以下重要 Issue 长期未获解决或长期处于 Open 状态，建议维护者优先关注：

- **[Issue #28](https://github.com/sipeed/picoclaw/Issue/28)**: LM Studio Easy Connect 请求自 2 月提出，评论数高但至今未 Assign，阻断了部分本地模型用户。
- **[Issue #1708](https://github.com/sipeed/picoclaw/Issue/1708)**: Docker Gateway REST API 不可用，自 3 月中旬报告至今未解决，影响网关模式的核心功能。
- **[PR #2313](https://github.com/sipeed/picoclaw/pull/2313)**: 多用户支持与安全加固的大型 PR，自 4 月初开启至今未合并，可能存在架构冲突或审核瓶颈，建议关注其对系统安全性的影响。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 (2026-04-18)

## 1. 今日速览
NanoClaw 今日呈现出极高的开发活跃度与社区参与度，呈现出“基建重构与功能扩展并进”的态势。过去 24 小时内共有 22 条 PR 更新，其中 13 条已合并，显示团队正在高速整合 v2 架构的重构代码（如 Bun 运行时迁移、Provider 系统解耦）。社区侧反馈热烈，新增 10 条高质量 Issue，涵盖对大文件下载、容器凭证隔离及隐私合规的深度讨论。项目正处于从单体架构向多 Provider、多运行时架构演进的关键节点。

## 2. 版本发布
过去 24 小时内无新版本发布。尽管合并了大量重构代码，但尚未打 Tag 发布正式版。

## 3. 项目进展
今日共有 13 个 PR 合并，主要集中在 v2 架构升级与稳定性增强，显著提升了项目的工程化水准：
*   **架构重构与运行时迁移**：PR #1813 将容器 agent-runner 运行时从 Node 迁移至 **Bun**，大幅优化了构建效率与启动性能；PR #1771 完成了从 npm 到 **pnpm** 的包管理器迁移。
*   **测试与质量保障**：PR #1816 实施了大规模代码拆分，并强制实施了 ≥90% 的测试覆盖率门禁，显著提升了代码健壮性。
*   **新 Provider 支持**：PR #1776 合并了 **OpenCode** 作为一等公民 Agent Provider，扩展了模型选择范围；PR #1814 重构了 Provider 注册机制，实现了更好的模块化解耦。
*   **功能增强**：PR #1811 引入了 **LLM 邮件分流流水线**；PR #1821 优化了 Agent 并行处理能力，减少任务排队阻塞；PR #1632 加入了陈旧会话产物的自动清理机制。
*   **文档维护**：PR #1696 刷新了 README 以匹配当前仓库状态。

## 4. 社区热点
今日社区讨论焦点主要集中在部署灵活性与隐私合规两方面：
*   **[Issue #957]** 支持 Podman 替代 Docker：该 Issue 自 3 月提出至今持续活跃，今日又有新互动。用户强烈建议在文档中明确支持 Podman，讨论了 Docker Desktop 许可证成本及 rootless 容器安全性问题，反映了企业级用户对轻量化、合规部署方案的迫切需求。
*   **[Issue #1819]** 安装脚本隐私问题：用户 @nhod 指出 `setup.sh` 在未经用户明确同意的情况下向 PostHog 发送遥测数据，且缺乏 `curl` 容错处理。这引发了关于开源项目数据收集合规性的讨论，要求增加 opt-in 机制。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，部分已有修复方案：
*   **[严重] Agent Teams 交互阻塞 [Issue #1812]**：当 Team lead 创建子 Agent 时，会强制进入非交互模式，导致用户无法与 Team lead 通信，直到团队关闭。严重影响多 Agent 协作体验，暂无修复 PR。
*   **[中等] 崩溃导致 SIGTERM [Issue #1824] [CLOSED]**：OpenClaw 组件的崩溃循环曾导致 NanoClaw 主进程接收 SIGTERM 并停止。该 Issue 已关闭，推测已在今日的重构中解决。
*   **[中等] OneCLI API Key 未传递 [Issue #1818] [OPEN]**：Host 端 OneCLI 客户端未能获取 API Key，导致鉴权失败。**修复方案已在 PR #1823 提交**。
*   **[低] 清理脚本路径硬编码 [Issue #1825]**：`scripts/cleanup-sessions.sh` 忽略环境变量导致路径错误，影响分支同步体验。

## 6. 功能请求与路线图信号
*   **多媒体能力增强**：[Issue #1831] 请求支持 MTProto 以突破 Telegram Bot API 的 20MB 文件限制，解决大文件下载静默失败问题。鉴于 [PR #1774] 正在引入 OpenAI 模型支持，多媒体处理能力的完善将是下一步重点。
*   **安全与多租户**：[Issue #1830] 提出公共线索自动注册与凭证隔离，表明用户开始将 NanoClaw 用于多租户/公开服务场景，对安全隔离提出更高要求。
*   **生态整合**：[Issue #1827] 建议与 SkillClaw 项目整合，补充长期技能生命周期管理能力。这与 [PR #1624] (Matrix E2EE channel) 一起，暗示项目正向更广泛的生态兼容性发展。

## 7. 用户反馈摘要
*   **痛点**：
    *   **配置覆盖**：用户 @nhod 反映容器无条件覆盖 `CLAUDE_CODE_AUTO_COMPACT_WINDOW` 环境变量，导致无法进行紧急调优 ([Issue #1820])。
    *   **浏览器会话丢失**：`agent-browser` 的 Profile 指令在容器重启后失效，导致会话状态无法持久化 ([Issue #1829])。
*   **满意度**：
    *   用户对项目设计给予正面评价，如 Issue #957 评论称 "useful and well designed"。
    *   对 v2 架构迁移到 Bun 和引入 pnpm 表示欢迎，认为解决了依赖编译痛点。

## 8. 待处理积压
*   **[PR #1774] OpenAI 模型支持**：该 PR 已开启 4 天，更新活跃。引入了对 GPT-5.4 等模型的支持及 Token 统计 API，是社区高度期待的功能，建议维护者优先 Review。
*   **[PR #1624] Matrix E2EE 频道**：开启 14 天，涉及复杂的加密通信支持，目前仍在更新中。
*   **[Issue #957] Podman 支持**：作为长期悬而未决的需求，随着 v2 架构对容器的解耦，现在是重新审视该需求的时机。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-18)

## 1. 今日速览
NullClaw 今日活跃度极高，呈现出“版本发布与新特性爆发”并存的状态。项目刚刚发布了 **v2026.4.17** 正式版，完成了向 **Zig 0.16** 的重大迁移，并修复了关键的安全性问题。社区层面，单日合并了 10 个 PR，涵盖了微信/Telegram 渠道集成、代理支持及核心功能增强，开发节奏紧凑。与此同时，核心贡献者 @manelsen 发起了 5 个关于“工具定制化”体系的 PR，显示出项目正在向更细粒度的 Agent 控制能力演进。

## 2. 版本发布
**Release: v2026.4.17** ([Link](https://github.com/nullclaw/nullclaw/releases/tag/v2026.4.17))
本次更新属于重要里程碑版本，主要变更如下：
- **核心迁移**: 项目已迁移至 **Zig 0.16**。这是一项重大底层升级，意味着开发者需要更新编译工具链，可能会影响自定义构建的用户。
- **安全性修复**: 修复了 Docker 沙箱挂载参数初始化的安全隐患，建议所有使用 Docker 隔离运行的用户立即升级。
- **集成更新**: 包含了 Web Skill 安装支持等前期合并的功能。

## 3. 项目进展
今日共有 10 个 PR 合并/关闭，显著提升了项目的功能广度与稳定性：
- **渠道接入完善**: 
  - **微信支持** ([#818](https://github.com/nullclaw/nullclaw/pull/818)): 新增 `weixin` 渠道，支持二维码扫码登录，补齐了国内主流 IM 平台的缺憾。
  - **Telegram 增强** ([#782](https://github.com/nullclaw/nullclaw/pull/782)): 增加了交互式技能菜单，优化了 Codex 处理逻辑。
- **网络与代理**: 
  - **HTTP 代理支持** ([#755](https://github.com/nullclaw/nullclaw/pull/755)): 支持 `http_proxy/https_proxy` 环境变量，解决了部分企业内网或需代理访问 LLM API 的痛点。
- **运维与工具**:
  - **CLI 增强** ([#829](https://github.com/nullclaw/nullclaw/pull/829)): 新增 `config show --json` 和 `models summary --json`，方便管理脚本和 NullHub 集成。
  - **CI 安全** ([#798](https://github.com/nullclaw/nullclaw/pull/798)): 锁定了 GitHub Actions 版本并显式声明权限，加固了供应链安全。

## 4. 社区热点
今日新增的 3 个 Issue 反映了用户对架构深度的关注：
- **[enhancement] 并发/非阻塞交互** ([#832](https://github.com/nullclaw/nullclaw/issues/832)): 作者 @superhero75 指出当前单线程循环（处理对话、工具、记忆）在长时任务下的阻塞问题。这是 Agent 架构设计的经典难题，社区期待异步或并发处理方案。
- **Add NullClaw logo to Official Agent Skills client list** ([#764](https://github.com/nullclaw/nullclaw/issues/764)): 用户希望 NullClaw 被纳入 Agent Skills 官方客户端列表，显示项目生态影响力正在扩大，且符合标准互操作性。
- **How to support multi-workspace?** ([#833](https://github.com/nullclaw/nullclaw/issues/833)): 用户请求 Gateway 支持多工作区，反映了多租户或隔离环境下的部署需求。

## 5. Bug 与稳定性
今日无新增严重 Bug 报告，主要集中在修复与加固：
- **已修复**: Docker 沙箱挂载参数初始化问题 ([v2026.4.17](https://github.com/nullclaw/nullclaw/releases/tag/v2026.4.17))，涉及安全隐患，属于关键修复。
- **待合并修复**: PR [#789](https://github.com/nullclaw/nullclaw/pull/789) 提出加强 Gateway 的绑定安全性和基于客户端标识的限流保护，防止单一发送者阻塞路由，建议优先 Review。

## 6. 功能请求与路线图信号
- **工具定制化体系**: 核心开发者 @manelsen 今日密集提交了 PR #834, #835, #836, #837。这一系列 PR 构建了完整的“工具定制化”能力，包括外部配置文件加载、触发器优先级排序、参数预配置等。这表明下个版本的核心重心将是**精细化的工具调度与控制**。
- **知识图谱记忆**: PR [#712](https://github.com/nullclaw/nullclaw/pull/712)（知识图谱后端）仍在 Open 状态，这是迈向长期记忆的重要一步，预计将在近期被纳入主分支。
- **Agent Skills 标准**: PR [#831](https://github.com/nullclaw/nullclaw/pull/831) 支持 RFC 0.2.0，表明项目正紧跟 Agent 互操作性标准的演进。

## 7. 用户反馈摘要
- **痛点**: 用户在 Issue #832 中明确表达了对“长时间运行任务阻塞交互”的不满，现有架构下用户需等待 Agent 完成工具调用才能进行下一步，体验割裂。
- **场景**: 微信扫码登录 (#818) 和多工作区支持 (#833) 的请求，说明 NullClaw 正在被尝试用于更复杂的生产环境（如多租户 SaaS 或企业内部服务）。
- **满意度**: 项目对 Zig 0.16 的快速跟进和对 Agent Skills 标准的支持，显示出用户对项目技术栈先进性和生态开放性的认可。

## 8. 待处理积压
- **PR #712 (Knowledge Graph Memory)**: 自 3 月 24 日开启，是一个大型功能 PR。鉴于记忆系统对 Agent 的重要性，建议维护者尽快安排 Review 或标记里程碑。
- **PR #411 (Tool Customization System)**: 早期的工具定制化尝试，与今日新提交的 #834 等系列功能重叠，建议维护者评估是否关闭 #411 以聚焦于新的实现方案。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-18)

## 1. 今日速览
IronClaw 项目今日呈现出高强度的开发与测试活跃度，PR 更新达 50 条，Issues 更新 28 条。项目正处于 v0.25.0 版本发布前的最后冲刺与质量加固阶段，主要精力集中在修复 Staging 环境的大规模 QA Bug Bash 问题。安全性方面，修复了 Engine V2 绕过密钥扫描的关键漏洞。虽然官方 Releases 尚未发布，但 `chore: release` PR 已就绪，预示着包含破坏性变更的新版本即将上线。整体来看，项目在快速迭代新功能（如钉钉集成优化、Aliyun 支持）的同时，正全力解决稳定性与用户体验问题。

## 2. 版本发布
今日无正式版本发布，但有重要发布前兆：
*   **准备就绪**: PR #2606 正在处理 `ironclaw` v0.24.0 -> v0.25.0 以及 `ironclaw_common` v0.2.0 -> v0.3.0 的发布工作。
*   **破坏性变更**: `ironclaw_common` 包含 API 破坏性更改，涉及枚举变体判别式变更。建议下游开发者在更新时注意检查 `ironclaw_common` 的兼容性。

## 3. 项目进展
今日共有 48 个 PR 合并/关闭，进展显著：
*   **安全修复**: 修复了 Engine V2 在 `ENGINE_V2=true` 时绕过入站密钥扫描的严重安全漏洞 (Issue #2491 已关闭)，防止敏感信息泄露。
*   **功能增强**:
    *   钉钉集成迎来重大 UX 改进，合并了“防沉默 UX”功能，优化了 AI 卡片在长时间处理时的用户反馈 (PR #2589)。
    *   CLI/TUI 支持多行输入功能已合并 (Issue #2448)。
*   **架构重构**: 开启了 Epic #2599，旨在强制执行网关功能边界与 Crate 护栏，提升代码结构与模块化。
*   **CI/CD 优化**: 大量 Staging Promotion PR (如 #2333, #2324 等) 被合并，表明自动化发布流水线运转顺畅，代码正持续从 Staging 推向生产分支。

## 4. 社区热点
*   **[Issue #2522] 配置错误导致 API Key 保存失败**: 该问题引发了最多讨论（3 条评论，2 个点赞）。用户在进行本地数据库 `onboard` 时遇到数据库错误，阻碍了初次配置。这反映了本地部署体验仍有待打磨。
    *   链接: [nearai/ironclaw Issue #2522](https://github.com/nearai/ironclaw/issues/2522)
*   **[PR #2589] 钉钉防沉默 UX**: 这是一个大型功能性 PR，引入了针对钉钉渠道的特殊交互优化，显示了项目对企业级 IM 集成的重视。
    *   链接: [nearai/ironclaw PR #2589](https://github.com/nearai/ironclaw/pull/2589)
*   **[Issue #2601] CLI 密钥管理功能提案**: 用户提出增加 CLI/TUI 工具以管理 Secrets 的需求，反映了当前认证配置文档缺失或操作不便的痛点。
    *   链接: [nearai/ironclaw Issue #2601](https://github.com/nearai/ironclaw/issues/2601)

## 5. Bug 与稳定性
今日报告了大量 Bug，主要源于 QA 团队的 Bug Bash 活动，按严重程度排序如下：

*   **严重**:
    *   [P1] **Agent 泄露内部推理过程** (Issue #2581): Agent 在 Web UI 中直接展示了 Chain-of-Thought 内部推理，而非最终响应，影响用户体验与安全性。
    *   [P1] **安全漏洞修复确认** (Issue #2491): Engine V2 曾绕过密钥扫描，已修复。
*   **高危**:
    *   [P1] **Routine 创建失败** (Issue #2583): 连续代码错误导致 Routine 创建流程中断。
    *   [P1] **Web UI 显示系统内部文件** (Issue #2584): 应用界面错误显示了系统级文件和目录，存在信息泄露风险。
    *   [P2] **Telegram Bot Token 保存无效** (Issue #2411): Staging 环境下保存 Token 无响应。
*   **中危**:
    *   [P1] **Telegram 消息发送假阳性** (Issue #2580): Agent 声称已发送消息但实际未送达。
    *   [P2] **上下文长度溢出** (Issue #2408): 输入超出模型 200K Token 限制未处理。
    *   [P2] **Linear MCP 授权无效** (Issue #2543): OAuth 设置完成后仍提示未授权。

## 6. 功能请求与路线图信号
*   **Secrets 管理增强**: Issue #2601 明确提出需要 CLI 工具来管理服务认证，鉴于已有相关 Issue (#2600) 关闭，可能已有内部计划或正在寻找具体实现方案。
*   **Web 内容获取工具**: Issue #2569 提议增加 `web_fetch` 工具，配合二级模型进行网页内容摘要，旨在提升 Agent 处理网页信息的能力。
*   **构建灵活性**: Issue #2591 建议 `SKILLS_BUNDLED_ENABLED` 标志，允许在编译时排除捆绑技能，利于定制化构建与减小二进制体积。
*   **外部生态集成**: PR #1446 持续推进阿里云 BaiLian Coding Plan 支持，拓展了国内云厂商的 LLM 接入能力。

## 7. 用户反馈摘要
*   **部署门槛**: 新用户在使用本地 DB 模式进行 `ironclaw onboard` 时遇到阻碍，表明本地开发的初始化流程容错率较低。
*   **认证困惑**: 多位用户表示在配置服务认证时遇到困难，现有文档对 Secrets 的管理机制说明不足，急需 CLI 辅助工具。
*   **Web 端体验**: 用户反馈 Web UI 在长时间任务处理中缺乏反馈，或出现消息消失、显示原始 JSON/内部文件等问题，UI 稳定性亟待提升。
*   **架构支持**: 有用户尝试在树莓派 上编译，提示对 ARM v7 架构的支持尚不完善或需交叉编译指导。

## 8. 待处理积压
*   **Aliyun 支持 PR**: PR #1446 已开启近一个月，作为 XL 级变更，需关注其代码审查进度，避免合并冲突积压。
*   **长期未响应问题**: Issue #2284 (Agent 实例闲置 1 小时后消亡) 和 Issue #2285 (刷新页面消息消失) 属于基础架构问题，但可能涉及底层状态管理，修复难度较大，需持续跟进。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-18)

## 1. 今日速览
LobsterAI 项目今日保持了极高的开发活跃度，单日 PR 更新量达 27 条，其中 20 条已合并/关闭，显示维护团队正在高效推进版本迭代。项目发布了 **2026.4.17** 新版本，重点修复了 MCP (Model Context Protocol) 桥接配置的热加载问题，并引入了 NIM 多机器人分发功能。社区方面，虽然收到关于新增 AI 引擎的建议，但同时也遭遇了垃圾信息的侵扰，需维护者关注仓库治理。

## 2. 版本发布
**新版本：LobsterAI 2026.4.17**
- **更新要点**：
  - **依赖升级**：OpenClaw 版本升级至 2024.4.8 ([PR #1709](https://github.com/netease-youdao/LobsterAI/pull/1709))。
  - **关键修复**：修复微信网关方法补丁及通道配置问题 ([PR #1592](https://github.com/netease-youdao/LobsterAI/pull/1592))。
  - **其他**：修复 OpenClaw 相关遗留问题。
- **升级建议**：鉴于新版本包含 OpenClaw 核心依赖升级和微信通道修复，建议相关用户尽快升级。

## 3. 项目进展
今日共有 20 个 PR 合并入主分支，项目在功能扩展与系统稳定性方面取得显著进展：

- **功能增强**：
  - **NIM 多机器人支持**：新增 NIM (网易云信) 多实例机器人投递与定时任务支持，优化了 GitHub 插件安装流程 ([PR #1711](https://github.com/netease-youdao/LobsterAI/pull/1711))。
  - **邮箱通道集成**：待合并的 PR 提议将 Lobster Email 作为新的 IM 网关通道，支持基于邮件的 AI 代理通信 ([PR #1719](https://github.com/netease-youdao/LobsterAI/pull/1719))。
  - **Popo 插件升级**：升级了网易 Popo IM 插件 ([PR #1712](https://github.com/netease-youdao/LobsterAI/pull/1712))。

- **稳定性修复**：
  - **MCP 桥接修复**：解决了 MCP bridge 配置变更时网关未重启导致的功能失效问题，通过强制重启机制保障连接稳定性 ([PR #1708](https://github.com/netease-youdao/LobsterAI/pull/1708))。
  - **设置导入崩溃**：修复了导入配置文件中包含本地不存在的 provider 时导致的程序崩溃 ([PR #1699](https://github.com/netease-youdao/LobsterAI/pull/1699))。
  - **Cowork 会话修复**：修复了 OpenClaw 服务端代理请求缺失 `session_id` 的问题 ([PR #1715](https://github.com/netease-youdao/LobsterAI/pull/1715))，并解决了心跳历史记录泄露到 UI 的问题 ([PR #1710](https://github.com/netease-youdao/LobsterAI/pull/1710))。

- **工程优化**：
  - 清理了 `yd_cowork` 相关遗留代码 ([PR #1689](https://github.com/netease-youdao/LobsterAI/pull/1689))。
  - 修剪了孤立的 `@tloncorp/tlon-skill` 原生二进制文件，显著减小了安装包体积（约 65MB）([PR #1684](https://github.com/netease-youdao/LobsterAI/pull/1684))。

## 4. 社区热点
- **功能建议**：用户 [@shanxinstart-lab](https://github.com/shanxinstart-lab) 提议增加 `hermes-agent` 作为可选的 AI 引擎，该议题引发了关于项目架构扩展性的讨论 ([Issue #1614](https://github.com/netease-youdao/LobsterAI/issues/1614))。
- **仓库治理**：今日新增多个包含博彩推广信息的垃圾 Issue（如 [#1716](https://github.com/netease-youdao/LobsterAI/issues/1716), [#1718](https://github.com/netease-youdao/LobsterAI/issues/1718)），占据了今日新开 Issue 的半数，建议项目维护者加强 Issue 模板验证或启用 Spam 过滤机制。

## 5. Bug 与稳定性
今日报告了若干影响用户体验的关键 Bug，部分已在最新版本中修复：

1.  **[已修复] MCP 功能不可用**：配置变更后网关未能正确重启，导致部分用户 MCP 功能失效。已在 [PR #1708](https://github.com/netease-youdao/LobsterAI/pull/1708) 中通过强制重启逻辑解决。
2.  **[已修复] 设置导入崩溃**：导入非法配置导致应用崩溃。已通过安全访问逻辑修复 ([PR #1699](https://github.com/netease-youdao/LobsterAI/pull/1699))。
3.  **[新发] Win11 安装图标异常**：用户反馈在 Windows 11 下大概率出现安装后图标显示为白色且无效的情况，尚未有修复 PR ([Issue #1714](https://github.com/netease-youdao/LobsterAI/issues/1714))。
4.  **[未解决] 提问无响应**：Issue #1569 反馈提问后既不运行也不报错，目前仍处于 Open 状态，需进一步排查底层 Agent 执行日志 ([Issue #1569](https://github.com/netease-youdao/LobsterAI/issues/1569))。

## 6. 功能请求与路线图信号
- **新通道支持**：[PR #1719](https://github.com/netease-youdao/LobsterAI/pull/1719) 正在推进邮箱作为 IM 通道的功能，这表明项目正致力于多模态通信能力的扩展。
- **引擎扩展**：[Issue #1614](https://github.com/netease-youdao/LobsterAI/issues/1614) 提出的 `hermes-agent` 集成请求，反映了社区希望 LobsterAI 具备更强的 AI 引擎兼容性，可能与后续的 OpenClaw 架构演进有关。
- **依赖更新**：Dependabot 提出的 React 19 升级 ([PR #1283](https://github.com/netease-youdao/LobsterAI/pull/1283)) 和 Vite 升级 ([PR #1281](https://github.com/netease-youdao/LobsterAI/pull/1281)) 目前处于 Open 状态，暗示项目可能正在进行大规模的前端底层依赖重构。

## 7. 用户反馈摘要
- **痛点**：部分用户在 Deepin V25 等 Linux 发行版上遇到登录网络错误，虽有用户反馈升级后解决，但仍有环境差异导致的问题 ([Issue #1687](https://github.com/netease-youdao/LobsterAI/issues/1687))。
- **困惑**：对于“提问无反应”的问题，用户缺乏有效的错误反馈机制，难以自行排查。
- **体验**：Win11 下的安装体验受损，图标异常问题影响了首用体验。

## 8. 待处理积压
- **依赖升级积压**：Dependabot 提出的 Electron ([PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277))、React ([PR #1283](https://github.com/netease-youdao/LobsterAI/pull/1283)) 和 Vite ([PR #1281](https://github.com/netease-youdao/LobsterAI/pull/1281)) 升级 PR 均未合并，存在较大版本跨度，需评估兼容性风险并尽快跟进。
- **长期未决 Issue**：[Issue #1569](https://github.com/netease-youdao/LobsterAI/issues/1569) 涉及核心运行逻辑的静默失败，已存在 10 天，建议优先关注。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-04-18)

## 1. 今日速览
TinyClaw 项目今日整体活跃度处于低位，社区互动趋于平静。过去 24 小时内，项目未收到新的 Issue 反馈，也无新版本发布。代码仓库唯一的动态是关闭了一个关于集成 Novita AI 的功能请求 PR。整体来看，项目目前处于稳定维护期或迭代间隙，暂无明显的激进开发迹象。

## 2. 版本发布
无。

## 3. 项目进展
今日项目进展主要集中在代码库的清理与功能评估上，具体如下：

*   **PR #243 [CLOSED] feat: add Novita AI as a built-in LLM provider**
    *   **链接**: [TinyAGI/tinyagi #243](https://github.com/TinyAGI/tinyagi/pull/243)
    *   **详情**: 该 PR 试图将 Novita AI 集成为内置的 LLM 提供商。作者建议利用 Novita 暴露的 OpenAI 兼容 API，复用现有的 `codex harness` 并配置自定义 `OPENAI_BASE_URL`，以此实现低成本集成且无需引入新的 CLI 依赖。
    *   **进展分析**: 该 PR 最终以关闭状态结束，意味着该功能实现方案未被合并至主分支。这可能是由于维护者评估后认为该方案不符合项目架构，或者存在其他更优的集成路径。此操作暂时终止了对 Novita AI 的官方原生支持尝试，项目在模型提供商扩展方面保持现状。

## 4. 社区热点
今日无活跃的 Issues 或 PR 讨论。唯一的 PR 动态 (#243) 最终被关闭，且未伴随显著的评论互动，暂未形成社区热议焦点。

## 5. Bug 与稳定性
过去 24 小时内未收到新的 Bug 报告或崩溃反馈，项目稳定性未见异常。

## 6. 功能请求与路线图信号
*   **信号捕捉**: 尽管今日无新开 Issue，但 PR #243 的提交内容反映了社区对于**扩展 LLM 提供商**的强烈需求，特别是针对 Novita AI 这类兼容 OpenAI 接口的低成本或差异化服务商。
*   **路线图判断**: PR 的关闭并不意味着需求消失。未来项目可能会考虑通过更通用的配置方式（如环境变量配置通用 OpenAI 兼容端点）来满足此类需求，而非为每个兼容服务商单独开设 PR。

## 7. 用户反馈摘要
由于今日缺乏有效的 Issue 评论和新增反馈，暂无法提炼用户痛点或满意度信息。

## 8. 待处理积压
根据现有数据，过去 24 小时无长期未响应的 Issue 或 PR 产生新动态。建议维护者定期清理积压队列，以保持项目健康度。

---

**分析总结**: 今日 TinyClaw 项目无明显向前推进，处于"静默维护"状态。维护者对代码准入有一定把关，拒绝了特定的第三方提供商硬编码集成，暗示项目可能倾向于更通用的架构设计。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-18)

## 1. 今日速览
Moltis 项目今日保持**高活跃度**，共处理了 14 条 Issues 和 17 条 PRs，其中 11 条 PR 已成功合并，解决了包括 Matrix OIDC 认证、Nostr 安全私信在内的多项关键功能，并修复了 Podman 兼容性与 Slack 指令 404 等严重影响用户体验的 Bug。项目正处于功能快速迭代与架构重构并行的阶段，特别是 Web UI 向 TypeScript 的迁移（PR #775）和代码索引功能的引入（PR #753-756），显示出项目正在为下一阶段的性能与可维护性打下基础。社区方面，关于错误重试机制的讨论（Issue #748）引发了较高关注，反映出用户对交互容错性的强烈需求。

## 2. 版本发布
今日发布了两个新版本：
*   **20260417.02**
*   **20260417.01**

> **分析师注**：虽然 Release Note 未附带详细日志，但结合 PR 记录，这两个版本主要集成了今日合并的稳定性修复（Matrix 连接重试、Schema 日志清理、Podman 沙箱修复）以及 Nostr/Matrix 的新特性支持。建议用户升级以修复 Slack 斜杠命令 404 及日志刷屏问题。

## 3. 项目进展
今日共有 **11 条 PR 合并**，项目整体在稳定性、连接器生态和开发者体验上取得显著突破：

*   **核心架构与工具链**：
    *   [PR #775](https://github.com/moltis-org/moltis/pull/775) **开启 Web UI 迁移**：启动了将 Web UI 迁移至 Vite + Preact (TypeScript) 的工作，这将显著提升前端代码的可维护性和类型安全。
    *   [PR #753-#756](https://github.com/moltis-org/moltis/pull/756) **代码索引功能栈**：合并了一系列 PR，引入了基于 SQLite+FTS5 的内置代码索引后端，支持增量同步和文件监控，为 Agent 提供了本地代码检索能力。

*   **连接器与认证**：
    *   [PR #730](https://github.com/moltis-org/moltis/pull/730) **Matrix OIDC 支持**：实现了对 Matrix Authentication Service (MSC3861) 的 OIDC 支持，解决了现代 homeservers 废除密码认证后的兼容性问题。
    *   [PR #763](https://github.com/moltis-org/moltis/pull/763) **Nostr 安全私信**：实现了 NIP-59 Gift Wraps，替代旧的 NIP-04，增强了私信的元数据隐私保护。

*   **关键修复**：
    *   [PR #767](https://github.com/moltis-org/moltis/pull/767) 修复了 Slack 斜杠命令在 webhook 模式下的 404 错误。
    *   [PR #765](https://github.com/moltis-org/moltis/pull/765) 修复了在 Podman 环境下沙箱启动失败的问题（关闭 Issue #757）。
    *   [PR #761](https://github.com/moltis-org/moltis/pull/761) 增强了 Matrix 同步循环的重试机制，避免网络瞬断导致连接永久失效。

## 4. 社区热点
今日社区讨论主要集中在交互体验优化与文档完善：

*   **Issue #748 [Feature]: easy way to "retry" a prompt on error**
    *   **链接**: [moltis-org/moltis Issue #748](https://github.com/moltis-org/moltis/issues/748)
    *   **热度**: 👍 1, 评论 7 条
    *   **分析**: 该 Issue 提出在提示词执行出错时提供“重试”按钮的需求。这是目前评论最多的 Issue，反映出用户在实际使用中经常遇到 LLM 响应中断或格式错误的情况，急需一种低成本的恢复机制，而不是重新开始会话。这表明 Agent 的稳定性仍是用户核心痛点。

*   **Issue #769 [Docs]: Clarify heartbeat/cron behavior with multi-agent workspaces**
    *   **链接**: [moltis-org/moltis Issue #769](https://github.com/moltis-org/moltis/issues/769)
    *   **热度**: 评论 3 条
    *   **分析**: 用户对多智能体工作区中的心跳机制与会话历史访问范围存在困惑。随着 Moltis 多 Agent 架构的深入，文档滞后于功能实现的问题开始显现。

## 5. Bug 与稳定性
今日修复了多个高优先级 Bug，同时也报告了少量新问题。

**已修复:**
*   🔴 **P1 - Slack 指令失效**: [PR #767](https://github.com/moltis-org/moltis/pull/767) 修复了 HTTP gateway 中缺失的 `/commands` 端点。
*   🔴 **P1 - Podman 兼容性**: [PR #765](https://github.com/moltis-org/moltis/pull/765) 解决了 Ubuntu 24.04/26.04 上 Podman 沙箱启动失败的问题。
*   🟠 **P2 - 日志刷屏**: [PR #762](https://github.com/moltis-org/moltis/pull/762) 修复了 `schema_normalization` 警告日志单次会话打印 1000+ 次的问题。
*   🟠 **P2 - Matrix 连接断裂**: [PR #761](https://github.com/moltis-org/moltis/pull/761) 增加了指数退避重试，防止瞬断导致连接永久中断。

**新报告:**
*   🟡 **P3 - PWA 推送 404**: [Issue #773](https://github.com/moltis-org/moltis/issues/773) 报告 PWA 推送消息点击后落地页 404。
*   🟡 **P3 - 环境变量解析失败**: [Issue #770](https://github.com/moltis-org/moltis/issues/770) 报告部分 Env Variables 无法解析。
*   🟡 **P3 - Task List 缺陷**: [Issue #776](https://github.com/moltis-org/moltis/issues/776) 报告 `task_list.list` 默认行为导致无法查看所有列表。**目前已提交修复 PR**: [PR #779](https://github.com/moltis-org/moltis/pull/779)。

## 6. 功能请求与路线图信号
*   **Issue #774**: 简化 Primary Agent 与 Agents 的配置交互。这表明当前的多 Agent 配置对新手用户仍有门槛，预计后续版本会优化配置 UX。
*   **Issue #764**: 请求 Netbird 支持。显示出用户对自托管网络方案集成的强烈兴趣，属于基础设施工具链扩展。
*   **PR #745 (Open)**: Nix Flake 支持。虽然尚未合并，但表明社区对提升开发环境标准化和部署便捷性的贡献正在增加。

## 7. 用户反馈摘要
*   **痛点**: 用户对 Agent 执行过程中的错误恢复能力感到不满（#748），缺乏简单的重试机制导致重复劳动。
*   **配置体验**: 多 Agent 环境下的配置被描述为 "clunky"（笨重/繁琐）（#774），环境变量解析问题（#770）增加了调试难度。
*   **正面反馈**: 社区对快速修复 Slack 和 Podman 问题的响应速度表示认可（Issue 关闭速度极快），对 Nostr 和 Matrix 的新安全特性持积极态度。

## 8. 待处理积压
*   **长期未响应/需关注**:
    *   [Issue #748](https://github.com/moltis-org/moltis/issues/748): 请求已久的“重试”功能，讨论热烈但尚未有对应的 PR 开启。建议维护者将其纳入近期规划，以提升核心交互体验。
    *   [PR #745](https://github.com/moltis-org/moltis/pull/745): Nix Flake 支持已提交 2 天，尚未合并，需确认是否存在测试或兼容性问题。
    *   [PR #775](https://github.com/moltis-org/moltis/pull/775): TypeScript UI 迁移的大型 PR，目前处于开启状态，建议社区重点关注其合并进度以避免冲突。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 (2026-04-18)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持了极高的活跃度，过去 24 小时内 Issues 更新达 50 条，PR 更新达 44 条，并发布了重要的 **v1.1.2** 新版本。项目核心进展集中在 **Mission Mode（任务模式）** 的发布以及底层架构的深度重构（内存管理与模型路由）。社区方面，关于品牌升级（CoPaw -> QwenPaw）带来的路径迁移问题引发了大量讨论，显示出用户对新版本的迁移体验存在一定痛点。整体而言，项目正处于功能快速迭代与架构优化的关键阶段。

## 2. 版本发布
### **v1.1.2**
本次更新带来了重要的 Agent 系统增强：
- **Agent System (核心功能)**：新增 **Mission Mode**，支持通过 `/mission` 命令实现自主、多阶段的任务执行。Agent 现在可以自主规划、执行并进行迭代式自我纠错。同时支持 `/mission status` 和 `/mission list` 命令以监控运行中的任务。
- **影响评估**：此功能标志着 Agent 从单轮对话工具向自主任务执行者的转变，建议用户关注官方文档以了解 Mission Mode 的边界和权限控制。

🔗 [Release v1.1.2](https://github.com/agentscope-ai/QwenPaw)

## 3. 项目进展
今日共有 23 个 PR 被合并或关闭，项目在底层架构、扩展性和稳定性上均有显著推进：

- **ACP 协议支持 (已合并)**：PR #3487 新增了 ACP (Agent Client Protocol) 服务器支持，允许 Zed、OpenCode 等编辑器通过 stdio JSON-RPC 直接连接 QwenPaw，拓展了 IDE 集成场景。
- **时间感知增强 (已合并)**：PR #3268 实现了用户提示词中自动注入当前时间戳，提升了 Agent 的时间感知能力，无需额外工具调用。
- **稳定性修复 (已合并)**：PR #3515 增强了工具护栏的风险提示信息，PR #3536 允许 CLI 更新 Provider 的 Base URL，解决了自定义 API 端点的配置难题。
- **核心重构进行中**：
    - PR #3548 正在重构内存与上下文管理，引入后台摘要任务与剪枝逻辑。
    - PR #3550 优化了模型路由策略，实现了 Scope-first 的模型选择机制。

## 4. 社区热点
今日社区讨论主要集中在品牌迁移后的兼容性与配置问题：

1.  **路径迁移与品牌混淆 ([#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356))**
    - **热度**：18 条评论
    - **焦点**：用户反馈升级后 `WORKING_DIR` 仍指向旧目录 `.copaw`，而数据实际写入 `.qwenpaw`，导致数据分散。这反映了用户对从 CoPaw 迁移到 QwenPaw 过程中的自动化脚本处理逻辑存在疑惑。
2.  **品牌升级后的遗留问题 ([#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309))**
    - **热度**：11 条评论
    - **焦点**：用户报告升级后出现两个 App 共存、环境变量丢失等问题。社区正在讨论如何平滑处理品牌切换带来的文件路径和命令行变更。
3.  **MCP 配置架构缺陷 ([#3445](https://github.com/agentscope-ai/QwenPaw/issues/3445))**
    - **热度**：6 条评论
    - **焦点**：用户指出 GUI 配置的 MCP 服务器无法连接，分析了系统内部存在的两套 MCP 系统不兼容问题，属于深度的架构层面反馈。

## 5. Bug 与稳定性
今日报告了若干影响使用的关键 Bug，部分已有修复方案：

- **P0 - SSE 序列化崩溃 ([#3552](https://github.com/agentscope-ai/QwenPaw/issues/3552))**
    - **现象**：Console Channel 在处理畸形 Unicode 代理字符时导致流式传输崩溃。
    - **状态**：🟢 **已有修复 PR** [#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553)（由社区贡献者提交），增加了安全的序列化处理。
- **P1 - 初始化配置缺失 ([#3532](https://github.com/agentscope-ai/QwenPaw/issues/3532))**
    - **现象**：初始化 LM Studio 远程服务时缺少配置 API 链接地址的步骤。
    - **状态**：🔴 Issue 已关闭，需确认是否已完全解决。
- **P1 - 验证错误 ([#3549](https://github.com/agentscope-ai/QwenPaw/issues/3549))**
    - **现象**：Armbian 系统下频繁报错 `ValidationError`，提示 `FunctionCallOutput` 验证失败。
    - **状态**：🔴 暂无修复 PR，需进一步排查 Pydantic 模型兼容性。
- **P2 - 前端 UI 问题 ([#3541](https://github.com/agentscope-ai/QwenPaw/issues/3541))**
    - **现象**：技能搜索框无法输入，暗黑模式下添加 MCP 客户端窗口文字不可见。

## 6. 功能请求与路线图信号
- **多 Agent 编排网关 ([#508](https://github.com/agentscope-ai/QwenPaw/issues/508))**：已关闭，暗示相关功能可能已在规划或内部实现中，用户对多 Agent 协作架构呼声较高。
- **自我进化能力 ([#3470](https://github.com/agentscope-ai/QwenPaw/issues/3470))**：用户询问是否有类似 Hermes Agent 的自我进化研发计划，反映了社区对 Agent 智能化上限的期待。
- **Signal Channel 支持 ([PR #3508](https://github.com/agentscope-ai/QwenPaw/pull/3508))**：正在审核中，将极大地丰富隐私通讯渠道的支持。
- **备份与恢复系统 ([PR #3534](https://github.com/agentscope-ai/QwenPaw/pull/3534))**：正在审核中，将提供完整的快照备份与恢复功能，解决用户数据安全痛点。

## 7. 用户反馈摘要
- **迁移痛点**：多位用户反映从 CoPaw 到 QwenPaw 的升级体验不够顺滑，特别是文件目录未完全迁移、环境变量需手动配置等问题，建议后续版本优化安装脚本的平滑升级能力。
- **安全性诉求**：用户希望 Agent 申请操作时的提示更加醒目（如 Issue #3349），特别是涉及敏感文件访问时，建议使用红色警告并详细列出风险等级。
- **易用性反馈**：对于 LM Studio 等第三方模型服务的接入，用户希望引导流程更加完善（如 Issue #3532 提到的 Base URL 配置）。

## 8. 待处理积压
- **内存占用过高 ([#3170](https://github.com/agentscope-ai/QwenPaw/issues/3170))**：用户反馈新版本内存占用很大，该问题长期未解决，可能与内存管理重构 (PR #3548) 相关，建议重点关注。
- **初始化卡死 ([#2943](https://github.com/agentscope-ai/QwenPaw/issues/2943))**：Windows 环境下 `copaw init` 卡在安全警告提示，影响 Python 3.13 用户的新手体验。
- **任务死循环 ([#3026](https://github.com/agentscope-ai/QwenPaw/issues/3026))**：Agent 执行任务时陷入死循环无法手动中断，属于严重的可用性问题。

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