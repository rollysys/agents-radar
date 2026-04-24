# OpenClaw 生态日报 2026-04-24

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-24 02:53 UTC

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

# OpenClaw 项目动态日报 (2026-04-24)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，过去 24 小时内 Issues 与 PRs 更新量均达到 500 条，社区交互频繁。项目发布了 **v2026.4.22** 版本，重点集成了 xAI 的多模态能力（图像生成、TTS、STT），进一步扩展了模型提供商生态。然而，新版本引发的依赖打包问题导致全球范围内的新装用户遭遇“模块缺失”阻断性 Bug，社区与维护者已在短时间内响应并合入了修复 PR。总体而言，项目在快速迭代新功能的同时，正经历打包分发层面的稳定性考验。

## 2. 版本发布
- **v2026.4.22**
  - **主要更新**：新增 **Providers/xAI** 支持，实现了图像生成（`grok-imagine-image` 等）、文本转语音（支持 MP3/WAV 等格式）及语音转文本功能。
  - **破坏性变更/风险**：此次发布伴随严重的打包回归问题，导致全局安装时缺少关键依赖（如 `@larksuiteoapi/node-sdk`），影响了新用户的首次部署体验。建议用户关注后续补丁版本或参考 Issue 中的临时解决方案。

## 3. 项目进展
今日共有 208 个 PR 被合并或关闭，重点推进了以下工作：
- **关键修复**：PR #70852 修复了 Docker 镜像和 npm 全局安装中插件运行时依赖缺失的问题（`workspace:*` 协议处理不当），解决了 v2026.4.22 导致的大面积启动失败。
- **功能增强**：PR #70792 为 QA Lab 添加了 Discord 实时 QA 通道；PR #66471 增强了回复解析能力，支持将 Markdown 图片语法自动转换为媒体发送。
- **稳定性提升**：PR #70848 修复了 Webchat 无法正确渲染 Provider 错误的问题；PR #70883 优化了模型列表查询性能，避免了全量注册表枚举。

## 4. 社区热点
今日讨论最热烈的话题集中在平台扩展性与安全性架构上：
- **[#49971 [OPEN] RFC: Native Agent Identity & Trust Verification](https://github.com/openclaw/openclaw/issues/49971)**：评论数达 125 条。社区正在深入探讨为 OpenClaw 引入原生智能体身份与信任验证机制，结合 ERC-8004 与 W3C DID 标准。这标志着项目正从单纯的工具调用向去中心化信任网络演进。
- **[#75 [OPEN] Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/49971)**：评论数 93 条，点赞 71。用户对 Linux 和 Windows 原生客户端的呼声极高，目前项目仅支持 macOS/iOS/Android，跨平台客户端缺失成为阻碍桌面端普及的主要瓶颈。
- **[#55342 [OPEN] RFC: Behavioral reputation for OpenClaw skills](https://github.com/openclaw/openclaw/issues/55342)**：评论数 18 条。继身份验证后，社区开始讨论技能市场的行为信誉系统，旨在解决恶意技能检测难题。

## 5. Bug 与稳定性
今日报告了多个严重的安装与运行时回归问题：
- **P0 阻断性 Bug**：**[#70457](https://github.com/openclaw/openclaw/issues/70457)** / **[#70292](https://github.com/openclaw/openclaw/issues/70292)** 全新安装失败。用户在 macOS/Ubuntu/Windows 全平台执行 `npm install -g openclaw@latest` 时报错 `Cannot find module '@larksuiteoapi/node-sdk'`。
  - *状态*：已修复，相关 PR #70852 已合并。
- **P1 功能失效**：**[#70701](https://github.com/openclaw/openclaw/issues/70701)** v2026.4.22 导致 Telegram 频道启动崩溃（循环重启）。
  - *状态*：已修复（同上，依赖缺失导致）。
- **P1 认知/上下文问题**：**[#60213](https://github.com/openclaw/openclaw/issues/60213)** 上下文超限触发压缩后，Session 被静默丢弃，导致对话记忆全失。
- **P2 模型兼容性**：**[#65603](https://github.com/openclaw/openclaw/issues/65603)** Azure AI Foundry 模型请求 Schema 校验失败；**[#51056](https://github.com/openclaw/openclaw/issues/51056)** OpenRouter 认证头缺失导致 401。

## 6. 功能请求与路线图信号
- **实时语音交互**：**[#7200](https://github.com/openclaw/openclaw/issues/7200)** 用户强烈需求通过 Twilio/WebRTC 实现双向流式通话，配合今日发布的 xAI TTS/STT 功能，语音能力正成为下一阶段重点。
- **基础设施支持**：**[#50898](https://github.com/openclaw/openclaw/issues/50898)** 呼吁原生支持 NVIDIA NIM 提供商，减少对中间商的依赖。
- **UI 扩展**：**[#66944](https://github.com/openclaw/openclaw/issues/66944)** 提出插件 UI 扩展系统，允许插件向 Control UI 贡献原生标签页，预示控制台将变得更加开放和模块化。

## 7. 用户反馈摘要
- **安装门槛**：大量用户反馈在尝试新版本时遭遇依赖缺失，尤其是在 Windows 和 Linux 环境，表达了对打包发布流程质量的担忧。
- **稳定性焦虑**：长对话场景下的“记忆丢失”（Compaction 失败）和模型切换静默失败严重影响了高级用户的使用信心。
- **多模态期待**：对 xAI 新增功能的落地表示欢迎，但也指出了目前语音功能仅限于文件处理，急需实时流式交互能力的补全。

## 8. 待处理积压
- **[#75 Linux/Windows 客户端](https://github.com/openclaw/openclaw/issues/75)**：自 2026-01-01 创建至今，虽保持活跃但缺乏官方实质性进展，建议维护者评估跨平台客户端的优先级。
- **[#7200 实时语音支持](https://github.com/openclaw/openclaw/issues/7200)**：自 2026-02-02 提出以来热度不减，当前 xAI 的集成已奠定基础，值得在路线图中给予回应。

---

## 横向生态对比

# AI 智能体与个人助手开源生态日报横向对比分析 (2026-04-24)

## 1. 生态全景
当前开源 AI 智能体生态正处于**功能爆发与架构重塑并存**的关键时期。一方面，多模态能力（xAI 集成）、多渠道接入（Signal/Discord/钉钉）和身份认证标准（DID）成为头部项目竞相追逐的焦点；另一方面，随着应用深入，**安全性（沙箱逃逸）、稳定性（内存/上下文管理）和工程化质量（打包/CI）**成为制约项目发展的核心瓶颈，社区对"能用"到"好用"的跨越提出了严苛要求。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PR 合并/更新数 | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 极高 (500+ 更新) | 208 合并 | **v2026.4.22** | ⭐⭐⭐⭐<br>功能迭代快，但打包质量波动，社区讨论深入。 |
| **NanoBot** | 中高 (内存/配置问题) | 8 合并 | 无 | ⭐⭐⭐⭐<br>维护者响应迅速，核心修复质量高，处于质量巩固期。 |
| **Zeroclaw** | 高 (安全/架构讨论) | 5 合并 / 45 待合并 | 无 | ⭐⭐<br>PR 积压严重，安全与架构议题消耗大量精力。 |
| **Hermes Agent** | 极高 (46 新开) | 0 合并 / 50 待合并 | **v0.11.0** | ⭐⭐⭐<br>重大版本发布引发大量反馈，审查阻塞风险高。 |
| **PicoClaw** | 高 (36 讨论) | 6 合并 / 39 待合并 | nightly | ⭐⭐⭐<br>功能扩张快，但 Issue 处理滞后，存在积压风险。 |
| **NanoClaw** | 中高 (安全审计) | 20 合并 | 无 | ⭐⭐⭐⭐⭐<br>极高开发效能，安全响应迅速，质量与速度兼顾。 |
| **NullClaw** | 低 (配置/构建痛点) | 0 合并 | 无 | ⭐<br>代码停滞，构建与配置问题严重，生态活跃度低。 |
| **IronClaw** | 高 (QA 测试反馈) | 多个修复合并 | 无 | ⭐⭐⭐<br>架构重构期，集成测试暴露大量 Bug，正积极修复。 |
| **LobsterAI** | 低 (历史遗留) | 36 合并 | 无 | ⭐⭐⭐⭐<br>开发活跃度高，清理积压代码，但忽视用户 Issue 反馈。 |
| **Moltis** | 中 (功能请求) | 7 合并 | 无 | ⭐⭐⭐⭐⭐<br>迭代健康，修复与功能推进并重，响应及时。 |
| **CoPaw** | 高 (UI/渠道反馈) | 36 合并 | **v1.1.3/.4** | ⭐⭐⭐⭐⭐<br>发布频率高，修复针对性强，社区反馈闭环流畅。 |
| **ZeptoClaw** | 极低 | 0 合并 | 无 | ⭐⭐⭐<br>处于静默维护期，专注于 CI 内功修炼。 |
| **EasyClaw** | 低 (运维问题) | 0 合并 | **v1.8.7-9** | ⭐⭐⭐<br>密集发布修复运维问题，无代码层贡献，单点维护特征明显。 |

## 3. OpenClaw 在生态中的定位

*   **优势**：OpenClaw 在**生态扩展速度**和**前瞻性标准制定**上领先同类。单日 208 个 PR 合并与 xAI 多模态集成展示了其强大的社区动员能力。RFC 中关于 Native Agent Identity (ERC-8004/DID) 的讨论，使其从单纯的工具框架向"去中心化信任网络"演进，这是 NanoBot、PicoClaw 等侧重功能性修复的项目所不具备的战略高度。
*   **技术路线差异**：相比 Hermes Agent 的 CLI 交互重构或 Zeroclaw 的沙箱安全深耕，OpenClaw 更侧重于**Provider 生态与模型能力集成**。但其打包分发的稳定性（新装用户阻断 Bug）显示了工程化细节上的短板，相比之下，CoPaw 和 Moltis 在版本发布质量把控上更为稳健。
*   **社区规模对比**：OpenClaw 的单日 Issue 更新量（500+）远超 NanoBot、Zeroclaw 等项目，显示出绝对的规模优势，但讨论深度主要集中在功能性配置，而 NanoBot 在架构层面的讨论（如 TOML vs JSON）更为聚焦。

## 4. 共同关注的技术方向

1.  **新模型/私有模型的兼容性适配**
    *   **涉及项目**：NanoBot, Zeroclaw, PicoClaw, Moltis, OpenClaw。
    *   **具体诉求**：Anthropic Claude 4.7 废弃 `temperature` 参数导致 NanoBot (#3417) 和 Zeroclaw (#6007) 纷纷报错；PicoClaw 和 OpenClaw 均在适配 xAI/Bedrock 等多模态提供商。生态面临严重的**模型 API 变动滞后性风险**，各项目急需建立动态的参数校验机制。

2.  **安全沙箱与权限隔离**
    *   **涉及项目**：NanoClaw, Zeroclaw, CoPaw。
    *   **具体诉求**：NanoClaw 修复了容器逃逸漏洞 (#1946)，Zeroclaw 正在重构 Native 运行时安全策略 (#5719)，CoPaw 遭遇安全软件误报。随着 Agent 执行系统命令的能力增强，**如何平衡"能力开放"与"系统安全"**成为共性难题。

3.  **记忆系统与上下文管理**
    *   **涉及项目**：NanoBot, Zeroclaw, PicoClaw, Moltis。
    *   **具体诉求**：NanoBot 修复历史记录膨胀 (#3412)，Zeroclaw 用户反馈 Memory 权重过高导致"固执己见" (#5844)，PicoClaw 呼吁引入 Robust Memory (#2515)，Moltis 优化了 Datetime 注入避免 KV 缓存失效。**长上下文下的记忆压缩与检索准确性**是当前 Agent 智能化的核心瓶颈。

## 5. 差异化定位分析

| 维度 | 功能侧重 | 目标用户 | 技术架构关键点 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 平台化、多模态集成、身份认证 | 企业开发者、生态贡献者 | 插件化架构，重 Provider 扩展 |
| **NanoBot** | 稳定性、配置灵活、渠道适配 | 进阶开发者、私有部署用户 | 模块化修复，重历史与内存管理 |
| **Zeroclaw** | 安全沙箱、配置迁移 | 安全敏感型场景 | Schema v3 重构，Docker 隔离 |
| **Hermes Agent** | 终端交互体验 (CLI) | 个人开发者、极客 | React/Ink 重写，重 UI/UX |
| **LobsterAI** | 多端协同、群控机器人 | 运营人员、社群管理者 | IM 渠道集成，冷启动优化 |
| **CoPaw** | 企业级渠道落地、开箱即用 | 企业用户、非技术运营 | 钉钉/微信集成，安全合规 |

## 6. 社区热度与成熟度

*   **成熟稳定期**：**CoPaw、Moltis**。这两个项目展现出极高的"发布-修复"效率，Bug 修复针对性强，版本迭代健康，社区反馈闭环流畅，适合生产环境部署。
*   **快速迭代/重构期**：**OpenClaw、Hermes Agent、IronClaw**。OpenClaw 处于功能快速扩张期，虽有波折但势头强劲；Hermes Agent 刚完成 CLI 架构重写，处于动荡磨合期；IronClaw 正经历 Engine v2 架构迁移，QA 测试暴露了大量集成问题。
*   **维护/修复期**：**NanoBot、NanoClaw、Zeroclaw**。这些项目近期重心在于修补高危漏洞（安全、内存、兼容性），代码合并多针对修复，新功能开发节奏放缓，显示出对现有代码质量的保守态度。
*   **停滞/起步期**：**NullClaw、EasyClaw、ZeptoClaw**。NullClaw 面临严重的构建与配置障碍，社区活跃度低；EasyClaw 仅依靠密集发布修复运维问题，缺乏代码贡献生态。

## 7. 值得关注的趋势信号

1.  **Agent Identity (身份认证) 将成为标配**：OpenClaw 引入 DID 标准讨论，预示着 Agent 正在从"脚本工具"向"网络实体"演进。未来 Agent 间的交互将依赖于可验证的身份体系，这对于构建多智能体协作网络至关重要。
2.  **BYOM (Bring Your Own Model) 引发兼容性阵痛**：多个项目因模型参数变动（如 Claude 4.7 temperature）出现服务中断。开发者需警惕：**不应硬编码模型参数**，需建立动态探测或适配层，以应对上游模型 API 的快速迭代。
3.  **渠道泛化推动多模态落地**：Signal (NanoClaw/Moltis)、Discord (Hermes/LobsterAI)、Telegram、钉钉的广泛集成表明，AI Agent 正走出 Web/APP，深度嵌入即时通讯软件。**"IM Native"** 可能成为个人 AI 助手的主要交互形态。
4.  **配置复杂度成为阻碍**：从 NanoBot 的 TOML 之争到 NullClaw 的配置地狱，复杂的配置已成为用户最大的痛点。下一阶段的竞争将围绕**"零配置" (Zero-config) 或 Schema 驱动的自动化配置**展开，如 IronClaw 正在进行的 Onboard 重写。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-24)

## 1. 今日速览
过去 24 小时内，NanoBot 项目展现出**极高的维护活跃度与社区互动性**。虽然无新版本发布，但维护者集中合并了大量修复性 PR，主要针对 Agent 历史记录膨胀和内存污染问题，显著提升了系统稳定性。社区方面，关于配置文件格式（TOML vs JSON）的讨论引发了较多关注，同时多位用户反馈了升级后的兼容性问题。整体而言，项目处于**快速迭代修复期**，重点在于解决用户升级痛点与优化底层架构。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **8 个 PR 被合并或关闭**，重点在于修复关键性 Bug 与优化系统稳定性：

- **核心修复 - 历史记录与内存管理**：
  - **PR #3412** 与 **PR #3415**：修复了 `history.jsonl` 文件膨胀及内存污染问题。解决了当 LLM 出现异常行为时，可能导致系统提示词被污染的严重隐患，并优化了长工具链场景下的会话合并逻辑。
  - **PR #3414**：限制系统提示词中“Recent History”部分的长度上限为 32K 字符，防止历史记录过载导致上下文溢出。

- **功能增强与修复**：
  - **PR #3234**：修复了邮件频道的死循环问题。当 Bot 收到自己发送的邮件时，不再触发自动回复，解决了 Issue #3215 中报告的“数千封邮件刷屏”事故。
  - **PR #3399**：重构了 `on_progress` 回调，现在支持发送结构化的工具事件载荷，为 WebUI 等前端提供了更丰富的渲染数据。
  - **PR #3398**：为 Telegram 频道增加了 Inline Keyboard 按钮支持，增强了交互体验。

## 4. 社区热点
今日讨论最活跃的议题集中在用户配置体验与升级后的功能缺失：

- **Issue #2049 [CLOSED]**：**[question] Missing ability to create skills**
  - **热度**：13 条评论。
  - **分析**：用户报告升级后 "skill-creator" 工具丢失。这反映了新版本可能对工具集进行了筛选或默认配置发生了变化，导致用户核心工作流中断。
  - 链接：[HKUDS/nanobot Issue #2049](https://github.com/HKUDS/nanobot/issues/2049)

- **Issue #3402 [CLOSED]**：**[enhancement] Replace JSON with TOML for configuration files**
  - **热度**：7 条评论。
  - **分析**：用户提议将配置文件从 JSON 迁移至 TOML 以提高人工编辑的可读性。虽然 Issue 已关闭，但这反映了进阶用户对 NanoBot 当前配置管理复杂性的不满。
  - 链接：[HKUDS/nanobot Issue #3402](https://github.com/HKUDS/nanobot/issues/3402)

- **Issue #1932 [OPEN]**：**技能不支持禁用，只能删除**
  - **热度**：7 条评论。
  - **分析**：用户希望对技能有更细粒度的控制（开启/禁用），而非仅有“删除”选项。这是灵活性配置的高优需求。
  - 链接：[HKUDS/nanobot Issue #1932](https://github.com/HKUDS/nanobot/issues/1932)

## 5. Bug 与稳定性
今日报告了多个影响使用的严重 Bug，部分已有修复方案：

- **高危 - 内存泄漏**：
  - **Issue #3410**：用户报告升级至 `v0.1.5.post2` 后，内存占用从 ~200MB 飙升至 ~600MB，怀疑与新功能 "dream" 有关。
  - 链接：[HKUDS/nanobot Issue #3410](https://github.com/HKUDS/nanobot/issues/3410)

- **高危 - 模型兼容性崩溃**：
  - **Issue #3417**：Anthropic 新模型 `claude-opus-4-7` 废弃了 `temperature` 参数，导致 NanoBot 调用 API 时直接报 400 错误。
  - **状态**：**已有修复 PR #3418**，已在代码中针对该模型移除 temperature 参数。
  - 链接：[HKUDS/nanobot Issue #3417](https://github.com/HKUDS/nanobot/issues/3417)

- **中危 - 工具调用错误**：
  - **Issue #3390**：在 Telegram 频道调用清理工作区工具时，后台执行成功但前端报错 "Sorry, I encountered an error"，导致后续消息无法触达 LLM。
  - 链接：[HKUDS/nanobot Issue #3390](https://github.com/HKUDS/nanobot/issues/3390)

- **中危 - WhatsApp 登录失败**：
  - **Issue #3406**：升级后 WhatsApp Token 失效，导致无法登录。
  - 链接：[HKUDS/nanobot Issue #3406](https://github.com/HKUDS/nanobot/issues/3406)

## 6. 功能请求与路线图信号
社区与贡献者提交了多个高质量功能 PR，预示了下一阶段的演进方向：

- **可观测性增强**：
  - **PR #3173**：引入 OpenTelemetry 追踪，支持 Langfuse/LangSmith 后端。这将极大提升生产环境下的调试能力。
  - 链接：[HKUDS/nanobot PR #3173](https://github.com/HKUDS/nanobot/pull/3173)

- **多模态与交互**：
  - **PR #3411**：为飞书频道增加 LaTeX 公式渲染支持。
  - **PR #3401**：为 OpenAI 兼容接口增加 Embeddings 支持，补齐了向量检索能力的短板。

- **模型生态**：
  - **PR #3416**：为 OpenRouter 增加 `prefer_free` 选项，自动优先选择免费模型，降低了开发测试成本。

## 7. 用户反馈摘要
- **升级体验割裂**：多位用户反馈升级后出现工具丢失 (#2049) 或配置失效的问题，表明版本迁移文档或向后兼容性有待加强。
- **资源占用敏感**：用户对 v0.1.5.post2 的内存增长非常敏感，期待官方对 "dream" 功能的资源消耗进行优化。
- **配置灵活性需求**：用户对 JSON 配置的繁琐表示不满，并希望技能管理（禁用/启用）更加灵活，说明 NanoBot 正从“开发者工具”向“用户级产品”过渡，UX 需求日益增强。

## 8. 待处理积压
- **Issue #1932**：关于“技能禁用”的请求已开放一个多月，目前仍无官方回应，建议维护者关注以提升配置体验。
  - 链接：[HKUDS/nanobot Issue #1932](https://github.com/HKUDS/nanobot/issues/1932)
- **Issue #2152**：WhatsApp 语音消息支持（STT+TTS）需求，目前仅通过非官方补丁实现，等待官方集成方案。
  - 链接：[HKUDS/nanobot Issue #2152](https://github.com/HKUDS/nanobot/issues/2152)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-24)

## 1. 今日速览
Zeroclaw 项目今日保持**高度活跃**状态，社区互动频繁，共产生 37 条新开/活跃 Issue 和 45 条待合并 PR，显示项目正处于功能迭代与架构优化的关键时期。然而，**PR 合并吞吐量较低**（仅 5 条合并/关闭），且无新版本发布，表明大量代码变更积压在审核阶段，v0.7.4 里程碑仍在推进中。今日焦点集中在**运行时安全沙箱机制**、**多模型 Provider 兼容性**（如 Claude 4.7 与 Ollama）以及**配置系统的重构**（Schema v3）。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
尽管今日无新版本发布，但多个核心模块取得了实质性进展：

*   **运行时与沙箱安全**: 针对高风险 Issue #5719（Native 运行时绕过 Docker 执行 Shell 工具），PR #5905 提交了修复方案，为 DockerSandbox 添加了 workspace bind-mount 支持，修复了容器内路径不可达的问题，提升了沙箱隔离的可靠性。
*   **架构重构与性能优化**: 
    *   PR #5900 引入了 `clear_messages` 到 SessionBackend trait，将 Session 重置操作从 O(n²) 优化为 O(1)，显著提升了会话管理性能。
    *   PR #5788 提出了 RFC，计划用 Mozilla Fluent 替换现有的 TOML i18n 方案，目前正在进行文档和架构决策（ADR）的审查。
*   **桌面端拓展**: PR #5265 持续推进 Tauri 桌面应用的开发，集成了 macOS 自动化权限管理与本地节点持久化，预示着 Zeroclaw 将从纯 CLI/Server 向桌面客户端延伸。
*   **Bug 修复**: PR #6050 修复了 Windows 平台上的测试失败问题，并改进了自更新功能的目标三元组检测，提升了跨平台兼容性。

## 4. 社区热点
今日讨论最热烈的议题反映了用户对**安全性**与**集成能力**的关注：

*   **[#5719 runtime.kind = "native" does not bypass Docker for shell tool execution](https://github.com/zeroclaw-labs/zeroclaw/issues/5719)**
    *   **热度**: 12 条评论
    *   **分析**: 该 Issue 涉及高风险安全问题（标签含 `security`, `risk: high`）。开发者 @perlowja 发现即使配置为 Native 运行时，Shell 工具仍可能受 Docker 沙箱策略影响或存在路径挂载问题。这引发了关于默认安全策略与灵活性平衡的深入讨论。
*   **[#2503 [Feature]: where is napcat channel](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)**
    *   **热度**: 8 条评论
    *   **分析**: 用户强烈请求集成 Napcat/OneBot 协议通道。这表明 Zeroclaw 在作为 IM 机器人应用时，社区对支持国内主流协议（如 QQ 协议）有明确需求。
*   **[#5877 release: v0.7.4 milestone tracking](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)**
    *   **热度**: 6 条评论
    *   **分析**: v0.7.4 版本的追踪贴，维护者正在梳理 Skills 系统和破坏性配置迁移的任务清单，是下阶段发布的路线图核心。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，主要集中在模型兼容性和数据持久化：

*   **S0/S1 级别 (高危/阻塞)**:
    *   **[#6007 Anthropic provider always sends `temperature`, breaking Claude 4.7 requests](https://github.com/zeroclaw-labs/zeroclaw/issues/6007)**: 
        *   **严重性**: S1 (Workflow blocked)。Claude 4.7 API 拒绝 `temperature` 参数，但 Zeroclaw 的 Anthropic Provider 强制发送，导致请求失败。需立即修复 Provider 参数序列化逻辑。
        *   **状态**: Open，暂无关联 Fix PR。
    *   **[#5991 failed cron job](https://github.com/zeroclaw-labs/zeroclaw/issues/5991)**: 
        *   **严重性**: S0 (Data loss/risk)。Cron 任务执行失败，影响自动化流程的可靠性。
    *   **[#6051 zeroclaw self-test reports using 127.0.0.1 contrary to config](https://github.com/zeroclaw-labs/zeroclaw/issues/6051)**: 
        *   **严重性**: S1。自检工具忽略用户配置的 `0.0.0.0`，强制绑定 `127.0.0.1`，导致在服务器环境下调试困难。

*   **S2 级别 (降级)**:
    *   **[#6047 Dashboard model change reverts to default on reload](https://github.com/zeroclaw-labs/zeroclaw/issues/6047)**: Dashboard UI 修改模型配置后无法持久化，属于前端状态管理问题。
    *   **[#5844 Too much emphasis on memory](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)**: 系统提示词过分依赖 Memory 历史，导致对新 Prompt 的响应偏离，需调整 System Prompt 权重。

## 6. 功能请求与路线图信号
结合 Issues 与活跃 PR，以下功能极可能纳入近几个版本：

*   **Schema v3 迁移 ([#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947))**: 正在批量处理破坏性配置字段迁移，这是 v0.7.4 发布的前置阻塞项。
*   **Onboard 重写 ([#5951](https://github.com/zeroclaw-labs/zeroclaw/issues/5951))**: 计划重构超过 1.2 万行的向导代码，转向 Schema 驱动的 IDMP 模式，旨在解决配置复杂度高的问题。
*   **Slack 线程上下文优化 ([#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055))**: 建议在 Slack 中首次提及 Bot 时回填线程历史，以增强多轮对话理解，相关 PR #5992 已在开发中。
*   **Session 身份工具 ([PR #6033](https://github.com/zeroclaw-labs/zeroclaw/pull/6033))**: 新增 `SessionsCurrentTool`，允许 Agent 获取当前 Session ID，对于实现“重置当前会话”等自管理指令至关重要。

## 7. 用户反馈摘要
*   **模型配置痛点**: 用户在使用多模型切换时遇到配置兼容问题，特别是新模型（Claude 4.7）发布后，旧的参数校验逻辑未及时更新，导致服务不可用 (#6007)。
*   **Memory 机制争议**: 部分用户认为当前的 Memory 权重过高，导致 Agent “固执己见”，忽略了即时指令 (#5844)，希望能有更细粒度的记忆控制。
*   **配置文档缺失**: 关于 `gateway.web_dist_dir` 的配置说明不足，导致用户无法正确加载 Web Dashboard (#5847)。
*   **渠道需求缺口**: 社区对 Napcat (QQ) 等非标协议的支持呼声较高 (#2503)，目前官方渠道列表尚未满足国内特定生态需求。

## 8. 待处理积压
*   **高 PR 积压风险**: 当前有 **45 个 PR 处于待合并状态**，且过去 24 小时仅处理了 5 个。大量功能代码（如 i18n 重构、Tauri 桌面端）堆积，建议项目组增加 Review 人力或拆分大 PR 以加快合并速度。
*   **长期未决 Issue**: 
    *   [#2503 Napcat channel](https://github.com/zeroclaw-labs/zeroclaw/issues/2503): 自 3 月提出至今，需求明确但无人认领开发。
    *   [#2998 Add Multiple Model Providers](https://github.com/zeroclaw-labs/zeroclaw/issues/2998): 多模型提供商配置需求，自 3 月开启，需明确是否纳入 Schema v3 重构计划中。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-04-24)

## 1. 今日速览
Hermes Agent 今日发布了具有里程碑意义的 **v0.11.0 "The Interface" 版本**，该版本对交互式 CLI 进行了完整的 React/Ink 重写，涵盖了自 v0.9.0 以来 1,500+ 次提交的累积更新，显示出项目在用户体验层面的重大革新。项目活跃度极高，过去 24 小时内 Issues 活跃量达 50 条（其中 46 条为新开/活跃），显示出社区对新版本的关注与反馈热潮。然而，**PR 合并出现阻塞**，待合并 PR 达 50 条而合并数为 0，维护者需警惕代码审查积压风险。总体而言，项目正处于版本发布后的高频反馈期，稳定性与兼容性问题是当前社区讨论的核心。

## 2. 版本发布
### v2026.4.23: Hermes Agent v0.11.0 (The Interface Release)
- **发布日期**: 2026-04-23
- **核心更新**: 这是一个重大版本更新，核心亮点是 **交互式 CLI 的完全重写**（采用 React/Ink 框架），旨在提供更现代化的终端交互体验。
- **代码变更规模**: 自 v0.9.0 以来，共有 **1,556 commits**，**761 个 merged PRs**，修改了 **1,314 个文件**，新增代码行数超过 22 万行。
- **社区贡献**: 涉及 29 位直接贡献者和 290 位联合作者，显示出强大的社区驱动力。
- **潜在影响**: CLI 架构的彻底重构可能引入新的 Bug 或兼容性问题，今日大量的 Issue 反馈（特别是 CLI 相关）印证了这一点，建议用户升级时关注配置迁移。

## 3. 项目进展
今日暂无 PR 合并记录，项目进度主要体现在新版本的发布与待处理 PR 的积累上。目前有 **50 个待合并 PR** 正在等待审查，其中包含多项重要功能与修复：
- **平台扩展**: PR #14869 将支持 **Rocket.Chat** 平台适配器，补齐了自托管聊天平台的支持拼图。
- **Bug 修复**: PR #14870 修复了 MCP schema 中 `additionalProperties` 格式错误导致的兼容性问题；PR #14868 修复了自定义 Provider 缺少 `/models` 端点时的验证失败问题。
- **架构重构**: PR #14606 正在将 `acp_adapter` 迁移至 `hermes_agent/acp/`，规范了顶层包结构。

## 4. 社区热点
今日社区讨论最热烈的问题主要集中在认证与模型兼容性上：
- **[#6475 Anthropic Claude 订阅认证问题](https://github.com/NousResearch/hermes-agent/issues/6475)**
  - **热度**: 👍 15 | 💬 22 | 状态: CLOSED
  - **分析**: 该 Issue 反映了用户在使用 Claude 订阅认证时频繁遇到 "You're out of extra usage" 错误。虽然已关闭，但高达 22 条的评论显示这是用户痛点，可能与 Token 计算或认证状态同步机制有关。
- **[#12068 Llama.cpp Memory Tool JSON 解析失败](https://github.com/NousResearch/hermes-agent/issues/12068)**
  - **热度**: 👍 3 | 💬 4
  - **分析**: 在对接本地模型（llama.cpp）时，Memory Save 工具因未转义单引号导致 JSON 解析错误。这反映了本地模型在遵循工具调用规范方面不如云端大模型稳健，Agent 需增强容错机制。
- **[#14853 Discord 多 Agent 协作功能请求](https://github.com/NousResearch/hermes-agent/issues/14853)**
  - **热度**: 💬 2
  - **分析**: 用户提出在 Discord 频道中实现多 Agent 协作的诉求，通过历史消息注入避免 Agent 之间“互盲”。这是 Agent 编排场景化的典型需求。

## 5. Bug 与稳定性
今日报告的 Bug 多与 v0.11.0 的重构及多平台适配有关，按严重程度排序如下：

### 严重 (P1)
- **[#12153 自定义 Provider 模型验证失败](https://github.com/NousResearch/hermes-agent/issues/12153)**: 当 `/v1/models` 端点不可用时，配置的自定义模型无法通过验证。目前已有 PR #14868 尝试修复此问题。
- **[#12066 Copilot Claude 模型调用失败](https://github.com/NousResearch/hermes-agent/issues/12066)**: 尽管请求参数正确，Hermes 内部路由丢弃了特定 Header 导致 `model_not_supported` 错误。
- **[#14782 JSONDecodeError 绕过重试逻辑](https://github.com/NousResearch/hermes-agent/issues/14782)**: 错误继承关系导致本应重试的 Provider 返回错误被误判为本地验证错误，直接失败。

### 中等 (P2)
- **[#13829 消息去重器 TTL 失效](https://github.com/NousResearch/hermes-agent/issues/13829)**: 缓存溢出前旧条目不会过期，可能导致消息去重逻辑失效。
- **[#12146 配置回退异常](https://github.com/NousResearch/hermes-agent/issues/12146)**: 配置文件指定 `model.provider=custom` 时，运行仍回退至 OpenRouter。

## 6. 功能请求与路线图信号
- **多 Agent 协作**: Issue #14853 提出的 Discord 多 Agent 历史注入与级联防护机制，显示出用户对多 Agent 交互的强烈需求，可能成为后续版本的重点。
- **静态网页托管技能**: Issue #378 提议集成 `here.now` 服务，允许 Agent 即时发布静态网页，这将极大扩展 Agent 的内容输出能力。
- **CLI 状态栏增强**: Issue #14859 建议在状态栏显示当前会话标题，符合 v0.11.0 重写 CLI 后的体验优化方向。

## 7. 用户反馈摘要
- **认证体验痛点**: 多个 Issues (#6475, #12066) 指出 Anthropic 和 Copilot 的认证与 Header 处理不够健壮，影响了商业用户的直接使用。
- **本地模型兼容性**: 用户在使用 Ollama/Llama.cpp 等本地模型时，频繁遭遇 JSON 解析与参数校验问题 (#12068)，提示项目在 "Bring Your Own Model" 场景下需加强鲁棒性。
- **配置复杂性**: 自定义 Provider 的配置与验证逻辑 (#12153, #14849) 仍是用户困惑的高发区，文档或错误提示需进一步优化。

## 8. 待处理积压
- **PR 审查积压**: 当前有 **50 个 PR 处于 Open 状态**，且过去 24 小时无合并记录。其中包括重要的平台适配（Rocket.Chat #14869）和关键修复（MCP schema #14870, Custom Provider #14868）。建议维护团队优先处理此类阻塞上线的 PR。
- **长期未解决 Issue**: Issue #7142 (Cronjob TypeError) 虽有讨论但尚未关闭，影响了定时任务功能的可用性，需关注。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-24)

## 1. 今日速览
PicoClaw 项目今日保持高度活跃，开发者社区贡献热情高涨，共产生 **45 条 PR 更新** 与 **36 条 Issue 讨论**。项目发布了 **v0.2.7-nightly** 版本，持续迭代主干功能。虽然 Issues 活跃度较高，但过去 24 小时内 **已关闭 Issue 数为 0**，显示社区反馈积累速度快于维护处理速度，需关注积压风险。PR 合并方面，有 6 个 PR 被合并或关闭，但仍有 39 个 PR 处于待合并状态，表明代码审查队列较长，项目正面临一定的维护吞吐压力。

## 2. 版本发布
- **Version:** `nightly` (v0.2.7-nightly.20260424.f4400472)
- **Type:** Automated Nightly Build
- **Notice:** 此版本为自动构建，可能存在不稳定性，仅供测试使用。
- **Changelog:** 对比 v0.2.7...main。该版本包含了截至今日的最新代码提交，主要涵盖了 Bedrock 流式传输支持、Web 搜索配置优化及多项依赖更新。

## 3. 项目进展
今日共有 6 个 PR 完成合并或关闭，主要集中在构建优化与 Webhook 端点支持；同时有大量功能性 PR 处于待合并状态，展示了项目在多模态与 MCP（Model Context Protocol）生态上的拓展决心。

- **[CLOSED] PR #2643**: 优化 CI 流程，实现了 macOS CGO launcher 的并行构建，并修复了 Docker 镜像标签大小写问题，显著提升了构建效率。
  - 链接: [sipeed/picoclaw PR #2643](https://github.com/sipeed/picoclaw/pull/2643)
- **[OPEN] PR #2645**: 实现 Bedrock Provider 的 `StreamingProvider` 接口，支持实时 Token 流式传输，增强了 AWS Bedrock 模型的使用体验。
  - 链接: [sipeed/picoclaw PR #2645](https://github.com/sipeed/picoclaw/pull/2645)
- **[OPEN] PR #2626**: 新增多模态 LLM 的原生音频输入支持，允许 Agent 处理音频数据，扩展了交互模态。
  - 链接: [sipeed/picoclaw PR #2626](https://github.com/sipeed/picoclaw/pull/2626)
- **[OPEN] PR #2641**: 引入完整的 MCP CLI 管理套件，用户可通过命令行直接管理 MCP Server 配置，降低配置门槛。
  - 链接: [sipeed/picoclaw PR #2641](https://github.com/sipeed/picoclaw/pull/2641)
- **[OPEN] PR #2647**: 修复 Web_search 工具的 YAML 配置支持并默认启用 DuckDuckGo。
  - 链接: [sipeed/picoclaw PR #2647](https://github.com/sipeed/picoclaw/pull/2647)

## 4. 社区热点
今日社区讨论焦点集中在 **API Key 管理**、**渠道兼容性** 及 **调度任务** 方面。

- **[Issue #2408] LLM Account Stacking (弹夹模式)**: 评论数达 9 条。用户强烈建议实现 API Key 轮换机制（类似弹夹换弹），以应对单一账号的速率限制和配额问题。这反映了生产环境中用户对高可用性和成本优化的迫切需求。
  - 链接: [sipeed/picoclaw Issue #2408](https://github.com/sipeed/picoclaw/issues/2408)
- **[Issue #2225] Ollama cloud credentials**: 评论数 8 条。用户在使用 Ollama 云端服务时遇到凭据配置缺失问题，表明现有 Provider 配置对新兴云服务商的支持尚不完善。
  - 链接: [sipeed/picoclaw Issue #2225](https://github.com/sipeed/picoclaw/issues/2225)
- **[Issue #2468] Scheduled Task Fails to Execute**: 评论数 6 条。Cron 工具执行失败，报错显示调度命令被限制在内部通道，影响了自动化任务的可靠性。
  - 链接: [sipeed/picoclaw Issue #2468](https://github.com/sipeed/picoclaw/issues/2468)

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，尤其是调度和安全性方面。

- **[严重] [Issue #2468] Scheduled Task Fails**: 定时任务执行受限，报错 "scheduling command execution is restricted to internal channels"。目前无修复 PR，严重影响无人值守场景。
  - 链接: [sipeed/picoclaw Issue #2468](https://github.com/sipeed/picoclaw/issues/2468)
- **[安全] [Issue #2377] Unsafe terminal control characters**: Exec 工具和日志输出可能包含未转义的 ANSI 控制字符，存在终端渲染欺骗风险。
  - 链接: [sipeed/picoclaw Issue #2377](https://github.com/sipeed/picoclaw/issues/2377)
- **[Bug] [Issue #2478] Skill Overwrite**: 多次使用 `/use <skill>` 指令时，前序 Skill 会被覆盖，疑似 Agent 循环逻辑中的状态管理问题。
  - 链接: [sipeed/picoclaw Issue #2478](https://github.com/sipeed/picoclaw/issues/2478)
- **[Bug] [Issue #2472] Windows Path Separator**: `list_dir` 在 Windows 上因路径分隔符不匹配报错，影响跨平台体验。
  - 链接: [sipeed/picoclaw Issue #2472](https://github.com/sipeed/picoclaw/issues/2472)

## 6. 功能请求与路线图信号
用户对“增强型记忆”和“标准化连接器”表现出浓厚兴趣，这与当前 AI Agent 向长期记忆和工具生态发展的趋势一致。

- **[Feature] [Issue #2515] Robust Memory System**: 建议集成 mem0、Supermemory 等记忆提供商，构建持久化记忆层。这是目前 Agent 领域的热门方向，值得纳入路线图。
  - 链接: [sipeed/picoclaw Issue #2515](https://github.com/sipeed/picoclaw/issues/2515)
- **[Feature] [Issue #2546] MCP Server OAuth 2.1 + PKCE**: 建议支持从仪表盘添加 OAuth 保护的 MCP Server，降低非技术用户的使用门槛。
  - 链接: [sipeed/picoclaw Issue #2546](https://github.com/sipeed/picoclaw/issues/2546)
- **[Feature] [Issue #2465] SMTP Channel**: 请求增加邮件发送渠道，用于定时任务汇报。功能边界清晰，易于实现。
  - 链接: [sipeed/picoclaw Issue #2465](https://github.com/sipeed/picoclaw/issues/2465)

## 7. 用户反馈摘要
- **痛点**: 多个用户反馈在飞书、WhatsApp Native 等渠道上存在消息丢失或格式兼容问题（如 Issue #2280, #2464），且 OAuth 认证频繁过期（Issue #2302）。Web UI 的交互细节（如回车键发送问题 #2376）也影响了移动端体验。
- **场景**: 用户倾向于使用 PicoClaw 进行周期性监控和汇报（SMTP 需求、Cron 调度），以及对接本地或私有模型（Ollama Cloud、SiliconFlow）。
- **满意度**: 开发者对项目架构表示认可，但对文档和配置错误提示的清晰度提出更高要求（如 Issue #2429 中用户因控制台输入双字符感到困惑）。

## 8. 待处理积压
- **Issue 积压风险**: 今日 0 个 Issue 被关闭，且多日活跃的 Issue（如 #1757, #2225）仍未有明确解决方案。建议项目组优先处理 **PicoClaw Gateway Token 权限混淆**（Issue #2438）及 **定时任务失效**（Issue #2468）等阻塞性问题。
- **PR 合并压力**: 39 个待合并 PR 中包含多个重要的功能增强和 Bug 修复（如 #2647 Web Search Fix），建议加快 Review 节奏或引入更多 Reviewer 以防止分支过时。

---
*分析师注：项目正处于功能快速扩张期，但需警惕“Issue 零关闭”带来的社区信任损耗。建议下个版本优先解决渠道稳定性和凭据管理问题。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-24)

## 1. 今日速览
NanoClaw 今日呈现出极高的开发活跃度与社区关注度，过去24小时内共有 20 个 PR 被合并或关闭，同时发起了 15 个新 Issue。项目重心显著向**安全性加固**与**通信渠道扩展**倾斜：安全审计导致了多个关键漏洞的发现与即时修复（PR #1945），彻底封堵了 Agent 容器逃逸至宿主机的风险；另一方面，Signal 通道的原生适配器已合并并进入自动安装流程。虽然无新版本发布，但大量核心修复的合并预示着 v2.x 版本的稳定性将大幅提升。总体而言，项目健康度良好，对安全漏洞响应迅速，但 Apple Container 平台的兼容性问题仍是痛点。

## 2. 版本发布
*   **无新版本发布**。尽管无 Tag 发布，但 PR 合并量巨大（20个），建议关注近期可能发布的补丁版本，特别是包含安全修复的版本。

## 3. 项目进展
今日共有 **20 个 PR 被合并或关闭**，项目在安全性与多渠道集成方面取得重大突破：

*   **安全性加固 (关键进展):** PR #1945 已合并，针对 CSO 审计发现的 Agent-to-host 权限提升漏洞进行了全面修复。该 PR 实现了 `agent-runner` 源码只读挂载、SSHD 防护脚本以及敏感文件忽略，直接解决了 Issue #1950、#1951 和 #1952 中的安全隐患。
*   **Signal 通道落地:** 继 PR #1953 (原生 Signal 适配器) 合并后，PR #1954 进一步将 Signal 集成到了自动安装流程中，用户现在可以通过 `bash nanoclaw.sh` 快速配置 Signal 机器人。
*   **核心稳定性修复:**
    *   PR #1941 修复了容器重启后的心跳丢失与孤儿容器循环问题，解决了消息"黑洞"故障。
    *   PR #1942 解决了 Telegram 回调数据 64 字节限制导致的交互按钮失效问题。
    *   PR #1958 修复了数据库 Provider 配置未被正确读取的问题，增强了 Codex/OpenCode 模型的兼容性。
    *   PR #1932 修复了 Discord DM 交互中审批按钮无响应的 Bug。

## 4. 社区热点
社区讨论焦点集中在**安全审计结果**与**Apple 生态兼容性**：

*   **[Issue #1946] security: drop --add-host=host.docker.internal:host-gateway** (链接: [qwibitai/nanoclaw Issue #1946](https://github.com/qwibitai/nanoclaw/issues/1946))
    *   **热度:** Critical 级别，已被生产事故验证。
    *   **分析:** 社区成员 @alecburrett 发起的 CSO 审计指出，默认的 host-gateway 配置结合 `bypassPermissions` 模式，允许 Agent 通过 SSH 回连宿主机并控制 Docker 守护进程。这是今日最受关注的安全议题，直接推动了 PR #1945 的合并。
*   **[Issue #1103] Apple Container: fix networking** (链接: [qwibitai/nanoclaw Issue #1103](https://github.com/qwibitai/nanoclaw/issues/1103))
    *   **热度:** 长期未解决 (创建于 3月15日)，今日再次活跃。
    *   **分析:** 随着苹果 "Apple Container" 技术的普及，macOS 用户在非 Docker Desktop 环境（如 Linux VM bridge 模式）下无法连接凭证代理的问题日益突出，用户强烈呼吁官方支持。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，且严重程度高，主要集中在安全与网络层面：

*   **[Critical] 容器逃逸风险 (Issue #1947, #1946):** Agent 容器默认配置允许其访问宿主机网络并执行 Bash 命令，存在极高权限提升风险。
    *   *状态:* 已有修复 PR #1945 (Merged)。
*   **[High] Apple Container 网络不通 (Issue #1934, #1103):** `startCredentialProxy` 函数未被调用，导致 Apple Container 环境下代理失效，且 `.env` 文件中 `CREDENTIAL_PROXY_HOST` 未生效。
    *   *状态:* Open，待修复。
*   **[High] Claude Max 订阅无法推理 (Issue #1944):** 使用 Claude Max 订阅生成的 OAuth Token 无法用于 Sonnet 模型推理。
    *   *状态:* Open，影响订阅用户。
*   **[Medium] Discord 消息路由错乱 (Issue #1959):** Agent 回复未根据消息源发送，而是固定发送到容器启动时的线程。
    *   *状态:* Open。
*   **[Low] Apple Silicon Homebrew 路径缺失 (Issue #1935):** launchd plist 中 PATH 环境变量缺少 `/opt/homebrew/bin`。
    *   *状态:* 已有修复 PR #1938 (Open)。

## 6. 功能请求与路线图信号
用户对**原生工具集成**和**多模型支持**的呼声强烈：

*   **原生文件操作 MCP (Issue #1956):** 用户提议开发原生 `Read/Write/Edit` MCP 工具，以替代低效的 Bash 调用，旨在使 Codex 和 OpenCode 拥有与 Claude 相同的文件处理能力。
*   **第三方 API 通道支持 (Issue #1930):** 用户希望支持更多第三方 API 通道，增强项目的开放性和实用性。
*   **MCP 工具扩展 (PR #1961, #1964):** 社区正在积极贡献 Gmail 和 Google Calendar 的 MCP 工具，显示出项目正向"个人助理"定位深化。

## 7. 用户反馈摘要
*   **痛点:**
    *   **安全隐患:** 用户对容器能够反向控制宿主机感到震惊（"Agent docker stop了他的兄弟容器"），对默认开启 `bypassPermissions` 表示担忧。
    *   **Apple 用户体验:** 使用 Apple Silicon 或 Apple Container 技术的用户在安装和网络配置上频繁受阻，路径配置滞后于系统更新。
    *   **认证困惑:** 拥有 Claude Max 订阅的用户试图替代 API Key 使用时遇到阻碍，表明订阅与 API 服务的界限仍需厘清。
*   **满意点:**
    *   对 Signal 通道的快速合并表示认可，认为这填补了通讯渠道的重要拼图。
    *   硬件兼容性报告 (Issue #1957) 显示 PicoClaw 在 NXP i.MX93 (ARM64) 上运行良好，社区对边缘设备支持表示乐观。

## 8. 待处理积压
*   **[长期 Issue] #1103 Apple Container 网络支持:** 该问题自 3 月中旬悬而未决，随着 Apple Silicon 设备普及，建议维护者优先处理 `bridge100` 接口下的网络路由逻辑。
*   **[安全 Issue] #1947 bypassPermissions 策略重构:** 虽然部分风险已通过 PR #1945 缓解，但 Issue 提出的"针对不可信入站通道禁用 Bash/跳过权限"策略仍需讨论，当前默认配置对生产环境仍具风险。
*   **[PR 审查] #1931 v1->v2 迁移工具:** 该 PR 提供了自动化迁移脚本，对于老用户升级至关重要，目前处于 Open 状态，建议尽快审查合并以降低升级门槛。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-24)

## 1. 今日速览
NullClaw 项目今日呈现出**“高互动、零代码合并”**的态势。过去 24 小时内，社区活跃度显著提升，共产生 11 条 Issue 更新（8 新开/活跃，3 关闭），但 PR 生态静默，无任何合并或新提交。尽管维护者处理了部分积压问题，但新涌现的配置与兼容性问题（尤其是 Matrix 集成与 Android 端构建）占据了主导，显示出项目在多平台适配与文档完善方面正面临挑战。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日无合并的 PR，项目代码库处于停滞状态。维护者主要精力集中在 Issue 的分流与关闭上：
*   **关闭了 3 个 Issue**：包括 Shell 命令使用疑问 (#167)、Matrix 配置识别问题 (#39) 以及自定义 OpenAI 兼容提供商连接失败的问题 (#811)。这表明部分历史遗留问题得到了答复或解决，但缺乏代码层面的修复提交，部分关闭可能仅为讨论终结或配置指导。

## 4. 社区热点
今日讨论最集中的问题是 **#167 [CLOSED] why cannot use the shell command "curl and wget"**（评论 8 条，点赞 1 个）。该话题引发了用户对工具调用安全边界和硬编码逻辑的讨论，反映出用户在使用 Agent 执行系统命令时对权限控制机制的理解存在偏差。
其次是 **#864 [OPEN] Matrix channel configuration fail to work**，用户 @eabase 指出在配置 Matrix 频道时系统却返回 Telegram 相关响应，暴露了多通道配置逻辑中可能存在的混淆或代码复用导致的 Bug。

## 5. Bug 与稳定性
今日 Bug 报告密集，主要集中在**移动端构建**与**配置解析**两大领域，按严重程度排序如下：

*   **【严重】Android/Termux 构建失败**：
    *   [#868](https://github.com/nullclaw/nullclaw/issues/868)：在 Android (aarch64) 环境下构建时出现 `AccessDenied` 错误，涉及 `linkat` 系统调用，阻碍了移动端用户的部署。
    *   [#339](https://github.com/nullclaw/nullclaw/issues/339)：Android 安装过程中的 `build.zig.zon` 错误持续未解。
*   **【高危】通道配置逻辑冲突**：
    *   [#864](https://github.com/nullclaw/nullclaw/issues/864)：配置 Matrix 时收到 Telegram 响应，暗示底层路由或配置加载逻辑可能存在严重串扰。
    *   [#869](https://github.com/nullclaw/nullclaw/issues/869)：Telegram 配置在 `config.json` 正确写入的情况下，CLI 显示“未配置”，导致功能不可用。
*   **【中等】功能性与交互体验**：
    *   [#865](https://github.com/nullclaw/nullclaw/issues/865)：CLI 界面原生快捷键（上下左右）失效，输出控制字符垃圾，严重影响交互体验。
    *   [#866](https://github.com/nullclaw/nullclaw/issues/866)：`curl` 命令即使加入白名单仍执行失败，疑似沙箱或权限模块存在回归问题。
    *   [#427](https://github.com/nullclaw/nullclaw/issues/427)：自定义 Skill 无法被 Agent 识别为 Tool，功能扩展性受阻。

## 6. 功能请求与路线图信号
*   **完善文档与示例配置**：Issue [#867](https://github.com/nullclaw/nullclaw/issues/867) 强烈请求提供一个完整、可工作的 `config.json` 示例。用户指出当前默认配置文件“残缺不全”，导致新用户入门门槛极高。这极有可能成为下一阶段维护者优先处理的事项。
*   **自定义 Skill 支持**：结合 #427 的反馈，用户对自定义 Skill 的需求强烈，目前的实现存在工具链断裂问题，预计后续版本将重点修复 Skill 加载机制。

## 7. 用户反馈摘要
*   **痛点：配置复杂度过高**：多位用户反馈现有文档和配置示例难以理解，尤其是 Matrix、Telegram 等多通道配置缺乏清晰指引 (#864, #867)。
*   **痛点：移动端支持薄弱**：Termux/Android 用户在 Zig 构建阶段频繁碰壁，反映出项目对非标准 x86 环境的适配尚不成熟。
*   **诉求：更透明的权限管理**：关于 `curl` 和 `wget` 的讨论 (#167, #866) 显示用户希望更明确地了解 Agent 执行 Shell 命令的权限边界和白名单机制。

## 8. 待处理积压
以下关键问题长期未得到有效解决，建议维护者重点关注：
*   **[#339 Android install issues](https://github.com/nullclaw/nullclaw/issues/339)**：自 3 月初开启至今，Android 端构建问题持续困扰社区，且今日新增同类 Bug #868，需尽快适配 Zig 构建脚本。
*   **[#427 Cannot use a custom skill](https://github.com/nullclaw/nullclaw/issues/427)**：自定义 Skill 功能长期不可用，直接影响项目的可扩展性生态构建。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-24)

## 1. 今日速览
IronClaw 今日保持高活跃度，虽然未发布新版本，但开发重心明显向 **Engine v2 架构迁移** 和 **集成稳定性测试** 倾斜。过去24小时内，项目处理了 35 条 Issue 更新和 50 条 PR 更新，其中新开/活跃 Issue 数量（28条）显著高于关闭数量（7条），主要源于一场大规模的 QA 测试活动，暴露了 Telegram、Google Sheets 等多个集成模块的潜在问题。PR 端则有大量关于 Engine v2 重构、Webhook 机制及工具链优化的提交待合并，显示出项目正处于架构升级的关键窗口期。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
尽管无正式版本发布，但代码库发生了显著变化，主要集中在修复近期回归问题及推进 v2 架构：

*   **关键修复与回归解决**：
    *   修复了 WASM 工具调度因权限策略中心化导致的失效问题 ([PR #2883](nearai/ironclaw Issue #2883), 已关闭)。
    *   修复了侧边栏重构后新用户无法获取可写线程的问题 ([Issue #2884](nearai/ironclaw Issue #2884), 已关闭)。
    *   解决了 stdio MCP 服务器错误触发 OAuth 流程的问题 ([Issue #2474](nearai/ironclaw Issue #2474), 已关闭)，尽管有用户反馈该问题可能未完全解决 (参见 Issue #2923)。
    *   引入了重试逻辑以增强工具参数验证的健壮性 ([PR #2922](nearai/ironclaw PR #2922), 已关闭)。

*   **架构与功能推进 (Engine v2)**：
    *   **Engine v2 核心重构**：多个大型 PR 正在推进中，旨在让 `available_actions` 支持受阻提供者的调用，并优化动作与能力表面的策略 ([PR #2868](nearai/ironclaw PR #2868))。
    *   **工具链增强**：正在为核心内置工具添加精心策划的发现摘要 ([PR #2866](nearai/ironclaw PR #2866))，并引入 `ExternalToolRegistrar` 插件接口以支持下游分支扩展 ([PR #2871](nearai/ironclaw PR #2871))。
    *   **Webhook 与集成**：新增通用的 Webhook 入口支持 ([PR #2921](nearai/ironclaw PR #2921))，并修复了 Linear 集成的凭证注入问题 ([PR #2901](nearai/ironclaw PR #2901))。

*   **部署与配置**：
    *   修复了首次运行时 WASM 通道未能正确激活的问题 ([PR #2927](nearai/ironclaw PR #2927))。
    *   修正了 Rust 编译最低版本要求的文档错误 ([Issue #2898](nearai/ironclaw Issue #2898))。

## 4. 社区热点
今日讨论热度最高的问题集中在系统架构一致性和并发处理能力上：

*   **[#2231 多聊天并发阻塞](nearai/ironclaw Issue #2231)**：用户反馈开启多个聊天窗口时响应被阻塞。这反映出用户对 IronClaw 作为个人助理的高并发交互期待，目前的消息队列机制可能成为瓶颈。
*   **[#2792 前后端状态漂移 Epic](nearai/ironclaw Issue #2792)**：由核心贡献者发起，旨在从架构上彻底消除 UI 与后端状态不一致的问题。该讨论揭示了当前 Web 端体验不流畅的根源，预计将成为下一阶段开发重点。
*   **[#2923 stdio MCP 激活失败争议](nearai/ironclaw Issue #2923)**：关于 stdio 是否受支持的争议（Issue #2474 被认为错误关闭），反映出社区对 MCP (Model Context Protocol) 传输层实现的关注，以及对文档和错误提示准确性的高要求。

## 5. Bug 与稳定性
今日进行了大规模 QA 测试，报告了大量功能性 Bug，按严重程度分类如下：

*   **P1 - 严重功能阻断**：
    *   **[Hosted] 文件系统路径错误**：Agent 尝试将文件保存至不可访问的 `/home/agent`，导致文件操作失败 ([Issue #2905](nearai/ironclaw Issue #2905))。
    *   **[Telegram] 长消息静默失败**：回复过长时无报错也无通知，严重影响用户体验 ([Issue #2903](nearai/ironclaw Issue #2903))。
    *   **[CI] Google OAuth 检测失败**：CI 运行器上的自动化测试被 Google 机器人检测拦截 ([Issue #2887](nearai/ironclaw Issue #2887))。

*   **P2 - 集成与交互问题**：
    *   **[Missions]**：任务状态显示“已耗尽”导致无法手动触发 ([Issue #2915](nearai/ironclaw Issue #2915))；重复创建任务 ([Issue #2907](nearai/ironclaw Issue #2907))。
    *   **[Integrations]**：Google Sheets 重复创建 ([Issue #2913](nearai/ironclaw Issue #2913))；Asana 与 Linear 集成状态显示混乱 ([Issue #2911](nearai/ironclaw Issue #2911), [Issue #2910](nearai/ironclaw Issue #2910))。
    *   **[Setup]**：环境变量 `DATABASE_URL` 错误覆盖显式的 `DATABASE_BACKEND` 选择 ([PR #2926](nearai/ironclaw PR #2926))。

*   **已修复问题**：
    *   WASM 工具调度失效 ([Issue #2883](nearai/ironclaw Issue #2883))。
    *   新用户侧边栏初始化失败 ([Issue #2884](nearai/ironclaw Issue #2884))。

## 6. 功能请求与路线图信号
*   **数据持久化安全性**：用户请求改进 Hosted 平台的数据持久化和升级安全机制，指出目前 Docker 内 SQLite 的备份方式对非技术用户不友好 ([Issue #2920](nearai/ironclaw Issue #2920))。这可能推动项目引入更易用的数据卷管理或备份向导。
*   **Webhook 解耦**：开发者请求解耦 Webhook 监听地址与 HTTP 通道配置 ([Issue #2900](nearai/ironclaw Issue #2900))，结合正在进行的 [PR #2921](nearai/ironclaw PR #2921)，显示出 Webhook 架构正在快速迭代。
*   **Nostr 协议支持**：[PR #2865](nearai/ironclaw PR #2865) 提出添加 Nostr 工具及 WebSocket 支持，暗示项目正在拓展去中心化社交网络的能力边界。

## 7. 用户反馈摘要
*   **痛点：集成稳定性**：QA 测试集中暴露了 Telegram、Google Sheets、Linear 等外部集成的脆弱性，特别是状态同步（重复创建、状态显示错误）和长内容处理能力。
*   **痛点：错误提示晦涩**：多处反馈（如 stdio MCP 激活、Telegram 长消息）显示系统倾向于静默失败或报出误导性错误，导致用户排查困难。
*   **关注点：部署体验**：新用户关注 Rust 版本兼容性 ([Issue #2898](nearai/ironclaw Issue #2898)) 和数据库配置优先级 ([PR #2926](nearai/ironclaw PR #2926))，说明项目的“开箱即用”程度仍有优化空间。

## 8. 待处理积压
*   **大型 PR 待合并**：[PR #1446](nearai/ironclaw PR #1446) (阿里云支持) 和 [PR #1764](nearai/ironclaw PR #1764) (Abound Demo) 涉及大量代码变更，已开放数周，建议维护者尽快 Review 或反馈状态，避免功能分支滞后过久。
*   **并发性能问题**：[Issue #2231](nearai/ironclaw Issue #2231) 自 4 月 10 日开启至今未 Close，作为影响多任务处理体验的核心问题，建议提升优先级。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-24)

## 1. 今日速览
今日 LobsterAI 项目展现出极高的开发活跃度，代码合并与迭代速度显著加快。过去 24 小时内共有 **36 个 PR 被合并或关闭**，仅剩 1 个 PR 待处理，显示团队正在集中精力清理积压代码并推进新功能落地。开发重心明显向 **多平台 IM 机器人集成**（Telegram、Discord、钉钉）与 **客户端性能优化**（冷启动、内存搜索）倾斜。相比之下，Issue 反馈端呈现“零关闭”状态，今日活跃的 5 个 Issue 均为历史遗留问题被自动标记为 `[stale]`，表明社区反馈的处理速度略有滞后于代码开发进度，存在一定的用户痛点积压。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 36 个 PR 完成合并或关闭，项目在集成广度与核心性能上均有显著突破：

*   **IM 生态全面扩展**：
    *   **多机器人支持**：合并了 Telegram (#1792) 和 Discord (#1794) 的多机器人支持功能，大幅提升了多账号管理能力。
    *   **平台修复与升级**：修复了钉钉 `_agentBinding` 配置问题 (#1757) 及 IM 同步算法 (#1778)；升级了企业微信插件至 2026.4.22 版本 (#1790)。
    *   **模型支持**：新增了对本地推理工具 LM Studio 的配置支持 (#1787)。

*   **性能优化与架构调整**：
    *   **启动加速**：引入了启动性能分析器 (#1747)，并优化了主进程启动逻辑，延迟加载技能服务以改善冷启动速度；同步升级了 OpenClaw 运行时 (#1750)。
    *   **稳定性修复**：修复了 Windows 平台下 Defender 误报问题，精确化了排除目录 (#1786)；优化了 Gateway 重启逻辑，避免焦点切换时的不必要重启 (#1798)。
    *   **功能增强**：新增 Memory Search 的 Embedding 配置支持（PR #1810，目前待合并），支持远程 Embedding 提供商。

## 4. 社区热点
今日讨论最活跃的议题集中在长期未解决的平台兼容性与功能请求上：

*   **[Issue #15] Electron 40 启动失败**：用户报告在 macOS 和 Windows 上均遇到 `TypeError: Cannot set properties of undefined`，涉及 Node.js v24 兼容性问题。该 Issue 虽被标记为 Stale，但评论数较高，显示用户对新版 Electron 适配需求迫切。
    *   链接: [netease-youdao/LobsterAI Issue #15](https://github.com/netease-youdao/LobsterAI/issues/15)
*   **[Issue #26] Linux 编译版本滞后**：用户反馈自行编译的版本停留在旧版，质疑版本更新机制与发布说明的透明度。
    *   链接: [netease-youdao/LobsterAI Issue #26](https://github.com/netease-youdao/LobsterAI/issues/26)
*   **[Issue #14] 飞书通道功能缺陷**：涉及 `renderMode` 配置无效及 `thinking` 标签未过滤的问题，直接影响飞书用户的消息渲染体验。
    *   链接: [netease-youdao/LobsterAI Issue #14](https://github.com/netease-youdao/LobsterAI/issues/14)

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在客户端兼容性与特定渠道的渲染问题：

*   **严重**:
    *   [Issue #15] Electron 40 启动崩溃：导致应用无法启动，目前尚无对应的 Fix PR 关联。
*   **中等**:
    *   [Issue #14] 飞书消息渲染异常：Markdown 无法正确渲染，思维链标签泄露。目前已有针对 IM 同步算法的修复 (#1778)，但不确定是否完全覆盖此渲染问题。
*   **已修复**:
    *   [PR #1803] 修复 RPC 超时问题：将 `chat.send` 超时从 30s 延长至 90s，解决了网关初始化期间的响应丢失问题。
    *   [PR #1786] 修复 Windows 安全软件误报：解决了腾讯电脑管家误报 "Silver Fox" 的问题。

## 6. 功能请求与路线图信号
*   **Memory Search 增强**：[PR #1810] 正在引入 Embedding 配置，支持 OpenAI/Gemini 等远程提供商，预示项目将在 RAG（检索增强生成）能力上进一步强化，预计下个版本将合并此功能。
*   **多平台多机器人架构**：Telegram 和 Discord 多机器人的合并，标志着项目正从“单点 AI 助手”向“多端协同/群控机器人”架构演进。
*   **用户需求**：[Issue #29] 用户请求增加 Codex 登录支持，目前尚未有相关 PR 动静，可能作为后续路线图的候选功能。

## 7. 用户反馈摘要
*   **版本同步痛点**：Linux 用户对编译版本与官方发布版本的时间差感到困惑，希望有更清晰的版本说明。
*   **兼容性焦虑**：Electron 40 的升级导致部分用户无法启动应用，这是目前最大的阻碍性问题。
*   **渠道体验细节**：飞书用户对消息格式的细节（Markdown 渲染、思维链隐藏）关注度较高，期望获得更原生的体验。

## 8. 待处理积压
以下重要 Issue 长期未获解决且今日被标记为 Stale，建议维护者重点关注：

1.  **[Issue #15] Electron 40 启动失败**：涉及核心运行环境兼容性，严重影响新用户上手。
    *   链接: [netease-youdao/LobsterAI Issue #15](https://github.com/netease-youdao/LobsterAI/issues/15)
2.  **[Issue #14] 飞书通道渲染问题**：影响生产环境消息展示，属于功能性回归。
    *   链接: [netease-youdao/LobsterAI Issue #14](https://github.com/netease-youdao/LobsterAI/issues/14)
3.  **[Issue #26] Linux 版本更新滞后**：涉及开源构建流程与发布透明度。
    *   链接: [netease-youdao/LobsterAI Issue #26](https://github.com/netease-youdao/LobsterAI/issues/26)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-24)

## 1. 今日速览
Moltis 项目今日维持高活跃度，核心开发者在修复关键 Bug 的同时推进了大量功能增强。过去 24 小时内共有 13 个 PR 更新（其中 7 个已合并）和 9 个 Issue 更新（其中 5 个已关闭），显示出项目维护者响应迅速，社区反馈闭环高效。今日重点解决了本地 LLM 的 KV 缓存失效、Docker 沙箱在 WSL2/ARM 架构下的兼容性问题，并成功合并了 Signal 频道支持和默认技能包等大型功能。整体来看，项目处于快速迭代上升期，稳定性与易用性均有显著提升。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日共有 **7 个 PR 被合并**，显著推进了项目在多平台兼容性、本地模型支持及功能丰富度上的进展：

*   **本地 LLM 稳定性突破**：PR [#855](https://github.com/moltis-org/moltis/pull/855) 将 datetime 注入从系统消息移至用户内容，修复了本地 LLM（llama.cpp, Ollama 等）KV 缓存前缀失效的问题，显著提升本地模型运行效率。
*   **多平台兼容性修复**：PR [#853](https://github.com/moltis-org/moltis/pull/853) 解决了 Docker 沙箱在 WSL2 和 Raspberry Pi (ARM) 上因缺失特定路径导致的启动失败问题，扩展了硬件支持范围。
*   **功能生态丰富**：
    *   PR [#841](https://github.com/moltis-org/moltis/pull/841) 新增 Signal 频道支持，扩展了 Agent 的通信渠道。
    *   PR [#797](https://github.com/moltis-org/moltis/pull/797) 合并了 101 个预置默认技能，内置了分类 UI 和格式回退机制，极大降低了新用户上手门槛。
    *   PR [#856](https://github.com/moltis-org/moltis/pull/856) 修复了 Gemini 和 Fireworks AI 的 Schema 转换错误，增强了对第三方模型提供商的支持。

## 4. 社区热点
今日社区讨论最活跃的议题是 **Issue #176 [[Feature]: Add datetime to system prompt context](https://github.com/moltis-org/moltis/issues/176)**。

*   **动态**：该 Issue 创建于 2 月，历时 2 个月于今日关闭，累计获得 16 条评论。
*   **分析**：用户对 Agent 拥有时间感知能力有强烈需求。讨论主要集中在如何在不破坏上下文连贯性的前提下注入时间信息。最终通过 PR #855 以“移至用户内容”的方式解决，既满足了功能需求，又解决了 KV 缓存不稳定的技术痛点，是社区与开发者协作解决复杂架构问题的典型案例。

## 5. Bug 与稳定性
今日报告了若干关键 Bug，部分已由社区迅速提交修复：

*   **[High] 心跳循环死锁 (新)**：Issue [#858](https://github.com/moltis-org/moltis/issues/858) 报告 Agent 在 exec 执行期间触发心跳重检导致死循环。目前尚未有修复 PR，需关注其对 Agent 长期运行稳定性的影响。
*   **[Medium] 记忆文件日期错误 (已修)**：Issue [#857](https://github.com/moltis-org/moltis/issues/857) 指出 Silent memory turn 保存文件时日期出现幻觉。PR [#859](https://github.com/moltis-org/moltis/pull/859) 已提交修复，正在等待合并。
*   **[Medium] Fireworks/Gemini Schema 错误 (已修)**：Issue [#848](https://github.com/moltis-org/moltis/issues/848) 和 [#849](https://github.com/moltis-org/moltis/issues/849) 报告了特定模型下的 JSON Schema 解析失败。已通过 PR #856 修复并合并。

## 6. 功能请求与路线图信号
*   **OAuth 增强**：Issue [#850](https://github.com/moltis-org/moltis/issues/850) 请求支持在 MCP server 配置中注入 `client_secret`。鉴于今日已合并修复 OAuth UI 的 PR #852，OAuth 相关功能是当前迭代热点，该功能极有可能被纳入下一版本。
*   **子智能体预设**：PR [#844](https://github.com/moltis-org/moltis/pull/844) 提出了默认子智能体预设（researcher, coder 等），结合已合并的 PR #797（默认技能），显示出项目正致力于构建“开箱即用”的 Multi-Agent 工作流体验。

## 7. 用户反馈摘要
从今日的 Issue 与 PR 评论中提炼出以下用户痛点：
*   **WSL2 环境痛点**：Issue #828 显示 WSL2 用户在进行 Docker 沙箱隔离时遇到系统性障碍，今日的修复受到了相关用户群体的欢迎。
*   **本地模型体验**：Issue #176 的讨论反映出用户在使用本地模型时对上下文窗口利用率非常敏感。修复方案不仅解决了时间感知问题，还优化了 Token 消耗，用户反馈积极。
*   **平台差异**：Issue #848 显示部分用户正在尝试使用 Fireworks AI 等新兴推理后端，对 JSON Schema 的标准合规性要求较高。

## 8. 待处理积压
*   **PR Review 积压**：目前有 6 个待合并的 PR，其中涉及 UI 功能（PR #846 智能滚动）、项目配置（PR #837 代码索引开关）等重要功能。建议维护者优先 Review PR #859，以尽快解决 #857 中记忆文件日期错误的问题。
*   **新 Issue 关注**：Issue #858 描述的心跳死循环问题可能影响 Agent 稳定性，建议标记为高优先级进行排查。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-24)

## 1. 今日速览
CoPaw 项目今日保持高活跃度，呈现出**高产出、高反馈**的健康态势。过去 24 小时内，项目成功发布了 `v1.1.3.post1` 补丁版与 `v1.1.4-beta.1` 测试版，重点解决了安全软件误报及桌面端交互问题。社区互动热烈，共有 50 条 Issues 更新（关闭数略多于新开数）和 50 条 PR 更新，其中 36 条 PR 已合并。主要精力集中在修复前端 UI 细节（特别是暗黑模式与 Markdown 渲染）、优化渠道（钉钉/微信）稳定性以及完善安全审计功能。

## 2. 版本发布
今日发布两个版本，建议用户根据情况升级：

- **v1.1.3.post1** [Release Note](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.3.post1)
  - **关键修复**：回退了部分代码以避免 Windows Defender 等安全软件的误报，解决用户部署时被拦截的问题 ([PR #3717](https://github.com/agentscope-ai/QwenPaw/pull/3717))。
  - **桌面端优化**：修复了 pywebview 中文件下载使用原生保存对话框的问题 ([PR #3719](https://github.com/agentscope-ai/QwenPaw/pull/3719))。
  
- **v1.1.4-beta.1** [Release Note](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.4-beta.1)
  - **版本预备**：主要为下一个迭代版本的 Beta 预览，包含文档更新和代码格式化配置优化。

## 3. 项目进展
今日共合并/关闭 36 个 PR，项目整体质量与用户体验有显著提升：

- **前端体验优化**：合并了大量 UI 修复 PR（主要贡献者 @zhaozhuang521），修复了暗黑模式下的文字重叠 ([PR #3761](https://github.com/agentscope-ai/QwenPaw/pull/3761))、Markdown 表格显示异常 ([PR #3639](https://github.com/agentscope-ai/QwenPaw/pull/3639))、前端图片 404 ([PR #3612](https://github.com/agentscope-ai/QwenPaw/pull/3612)) 等问题。
- **渠道与稳定性**：修复了钉钉渠道潜在的 session_id 冲突问题，防止用户串话 ([PR #3744](https://github.com/agentscope-ai/QwenPaw/pull/3744))；优化了 Docker 镜像构建速度，引入 `uv` 加速 pip 安装 ([PR #3698](https://github.com/agentscope-ai/QwenPaw/pull/3698))。
- **新功能推进**：新增了内置的 Agent 审计工作流 skill，增强了自我进化能力 ([PR #3740](https://github.com/agentscope-ai/QwenPaw/pull/3740))。

## 4. 社区热点
今日社区关注点集中在安全配置与多模态能力上：

- **[Issue #3709](https://github.com/agentscope-ai/QwenPaw/issues/3709)**: 用户反馈禁用了安全规则 `TOOL_CMD_IFS_INJECTION` 后，Cron 任务中的 Git 命令仍被拦截。评论数达 9 条，反映出用户对安全规则灵活性的迫切需求。
- **[Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)**: 长期任务认领帖，持续吸引贡献者关注。
- **[Issue #3716](https://github.com/agentscope-ai/QwenPaw/issues/3716)**: 用户咨询 Opencode 在 ACP 中的集成问题，显示社区对 Agent 间协作能力的关注。

## 5. Bug 与稳定性
今日报告了若干影响使用体验的关键 Bug，部分已有修复进展：

1.  **[高] 进程管理冲突** ([Issue #3748](https://github.com/agentscope-ai/QwenPaw/issues/3748)): 用户在使用 `qwenpaw update` 升级时，检测到进程存在但无法通过 shutdown 命令关闭，导致升级阻塞。目前暂无修复 PR。
2.  **[高] 会话状态死锁** ([Issue #3750](https://github.com/agentscope-ai/QwenPaw/issues/3750)): Windows 桌面端点击停止按钮后，会话状态未重置，导致后续消息无响应。目前暂无修复 PR。
3.  **[中] MCP Client 假死** ([Issue #3640](https://github.com/agentscope-ai/QwenPaw/issues/3640)): TaskGroup 异常导致 Agent 无响应但不报错。
4.  **[已修复] 前端显示问题**: 暗黑模式文字重叠 ([Issue #3546](https://github.com/agentscope-ai/QwenPaw/issues/3546)) 已通过 [PR #3761](https://github.com/agentscope-ai/QwenPaw/pull/3761) 解决。

## 6. 功能请求与路线图信号
- **UI 交互增强**：用户请求在桌面端和 Web 端增加右键上下文菜单，以提升操作效率 ([Issue #3752](https://github.com/agentscope-ai/QwenPaw/issues/3752))。
- **命令行更新**：用户建议增加 `qwenpaw update` 命令简化升级流程 ([Issue #3763](https://github.com/agentscope-ai/QwenPaw/issues/3763))，该建议已获开发组关注并关闭（可能已纳入开发计划）。
- **平台支持**：macOS ARM 架构对 `browser_use` 工具的默认支持请求 ([Issue #2655](https://github.com/agentscope-ai/QwenPaw/issues/2655)) 仍在讨论中。

## 7. 用户反馈摘要
- **部署痛点**：部分用户在 Docker 构建时遇到 `git not found` 错误 ([Issue #3695](https://github.com/agentscope-ai/QwenPaw/issues/3695))，需手动修改 Dockerfile，说明官方构建脚本在特定环境下存在依赖缺失。
- **多模态困惑**：有用户反映在 ARM 架构设备上使用多模态模型（如 mimo-v2.5）时无法调用能力 ([Issue #3756](https://github.com/agentscope-ai/QwenPaw/issues/3756))，提示文档需加强模型兼容性说明。
- **安全性反馈**：v1.1.3.post1 针对 Defender 误报的修复解决了部分用户的部署焦虑，是极具价值的补丁。

## 8. 待处理积压
以下重要 Issue 长期未获有效解决或响应，建议维护者关注：

- **[Issue #2655](https://github.com/agentscope-ai/QwenPaw/issues/2655)**: macOS Apple Silicon 对 `browser_use` 的原生支持请求，自 3 月底至今仍有用户评论反馈。
- **[Issue #3047](https://github.com/agentscope-ai/QwenPaw/issues/3047)**: `memory_search` 数据库错误导致无法打开数据库文件的问题，影响记忆功能的持久化。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 (2026-04-24)

## 1. 今日速览
ZeptoClaw 项目今日整体活跃度处于低位，无新版本发布，主要动态集中在 CI/CD 流程的维护与优化上。贡献者 @manelsen 发现了现有 PR 检查机制的盲区（即未编译可选集成功能），并提交了相应的 Issue 和 PR 进行修复。这表明项目正处于“内功修炼”阶段，重点在于提升代码合并前的质量保障能力，防止潜在的非核心功能回归。整体来看，项目开发活动稳定，侧重于工程化建设而非新功能堆叠。

## 2. 版本发布
*无*

## 3. 项目进展
过去 24 小时内无已合并或关闭的 PR，项目在合并代码层面保持静止。

**正在进行的工作：**
*   **CI 覆盖率提升**：PR [#544](https://github.com/qhkm/zeptoclaw/pull/544) 正在处理中，旨在扩展 CI 的构建矩阵。该 PR 针对性地解决了 Issue [#545](https://github.com/qhkm/zeptoclaw/issues/545) 中提出的问题，将 `channel-email`、`google`、`provider-vertex` 和 `whatsapp-web` 等可选集成路径纳入常规 PR 检查。这将显著提升项目在多场景下的构建稳定性，预计合并后将有效阻断“构建通过但功能损坏”的代码入库。

## 4. 社区热点
今日社区活跃度极低，无大规模讨论。唯一的活跃点来自项目内部的工程化改进：

*   **Issue [#545](https://github.com/qhkm/zeptoclaw/issues/545) [OPEN]**: 作者 @manelsen 指出当前的 PR CI 仅覆盖默认构建，导致可选集成路径（optional integration paths）存在“静默漂移”风险。这反映了维护者对项目可维护性和模块化稳定性的高度重视，旨在杜绝“CI 绿灯但特定功能损坏”的现象。

## 5. Bug 与稳定性
今日无用户报告的新 Bug 或崩溃问题，但在 CI 改进过程中暴露了潜在的稳定性隐患：

*   **潜在风险（已发现）**：Issue [#545](https://github.com/qhkm/zeptoclaw/issues/545) 指出，部分可选集成功能在常规 PR 验证中未被编译检查。
*   **伴随修复**：PR [#544](https://github.com/qhkm/zeptoclaw/pull/544) 在扩展 CI 矩阵时，顺带修复了两个兼容性问题（compatibility fixes），说明之前的代码库中确实存在未被常规 CI 捕获的小型缺陷。
    *   **严重程度**：低（目前尚未导致显性故障，属于潜在风险）。
    *   **状态**：已有修复方案，等待合并。

## 6. 功能请求与路线图信号
今日无新增用户功能请求。通过分析 CI 改进相关的 PR，可以解读出以下路线图信号：

*   **集成能力确认**：PR [#544](https://github.com/qhkm/zeptoclaw/pull/544) 明确列出了需要重点关注的可选集成功能：`channel-email`（邮件通道）、`google`（Google 服务集成）、`provider-vertex`（Vertex AI 提供者）以及 `whatsapp-web`（WhatsApp Web 集成）。
*   **信号解读**：这表明上述四个模块是 ZeptoClaw 生态中的关键集成点，未来的版本迭代将继续维护并保障这些渠道的兼容性，项目定位依然侧重于多渠道 AI 智能体的落地应用。

## 7. 用户反馈摘要
*   过去 24 小时内 Issues 和 PRs 均无用户评论（Issue 评论数为 0，PR 评论数为 undefined/无）。
*   缺乏用户反馈数据，推测目前处于功能稳定期或开发者文档完善期，现有用户暂无强烈痛点或新需求表达。

## 8. 待处理积压
*   **PR [#544](https://github.com/qhkm/zeptoclaw/pull/544)**：状态为 OPEN，已关联 Issue #545。建议维护者优先 Review 并合并此 PR，以尽快填补 CI 检查的真空地带，防止后续提交破坏可选功能的构建。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-04-24)

## 1. 今日速览
EasyClaw 项目今日处于**高频率发布与维护状态**，单日连续推出了 v1.8.7、v1.8.8 和 v1.8.9 三个版本，显示出开发团队正在密集修复构建或配置问题。社区方面，针对官网下载链接失效的反馈得到了迅速处理，Issue #34 已被关闭，表明维护者对阻断性问题的响应速度较快。整体来看，项目虽然无代码贡献者提交 PR，但维护者的后台迭代活跃度极高，项目健康度维持在较好水平。

## 2. 版本发布
今日连续发布三个版本，重点解决了安装体验问题，建议用户立即升级至最新版：

- **[v1.8.9: RivonClaw v1.8.9](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.9)**
- **[v1.8.8: RivonClaw v1.8.8](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.8)**
- **[v1.8.7: RivonClaw v1.8.7](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.7)**

**更新重点：**
本次系列更新主要针对 **macOS 平台的兼容性说明与配置优化**。由于应用未进行签名公证，macOS Gatekeeper 会拦截并提示“已损坏”。Release Notes 中详细提供了终端修复命令，解决了非签名应用在 macOS 上的启动障碍。虽然未列出具体功能变更，但连续三个小版本的快速迭代暗示可能涉及构建脚本的微调或依赖库的紧急修复。

## 3. 项目进展
今日无合并的 Pull Request，项目代码仓库层面的可见进展较少。然而，维护者关闭了 1 个关键 Issue，推进了项目基础设施的稳定性：

- **修复官网分发故障**：通过关闭 Issue #34，维护者确认并修复了官网 Windows 版本的下载链接 404 问题，确保了新用户的获取渠道畅通。

总体而言，项目今日侧重于**运维层面的修复与发布流水线调整**，而非功能性代码的开发。

## 4. 社区热点
今日唯一的社区互动集中在官网可用性问题上：

- **[Issue #34: 官网下载链接失效](https://github.com/gaoyangz77/rivonclaw/issues/34)**
  - **状态**：已关闭
  - **分析**：用户报告官网 `easy-claw.com` 的 Windows 版本下载链接失效。这是一个阻断性的用户体验问题。该 Issue 在创建当日即被关闭，反映出维护者对严重影响用户获取软件的问题具有高度的敏感性，且修复效率极高。这表明项目处于活跃维护中，且维护者有意识地监控分发渠道。

## 5. Bug 与稳定性
今日报告并处理的 Bug 级别较低，但影响面较广：

1.  **[已解决] 官网分发链接失效 (P1)**
    - **描述**：Windows 版本下载链接返回 404。
    - **状态**：Issue #34 已关闭，推测服务端已修正。
2.  **[长期存在] macOS 应用“已损坏”提示 (P2)**
    - **描述**：因缺乏签名，macOS 用户常遇到应用无法打开的问题。
    - **现状**：无代码级修复，但 v1.8.7-9 的 Release Notes 均提供了详细的终端解限方案，属于文档层面的缓解措施。

## 6. 功能请求与路线图信号
今日无新增功能请求。从连续三个版本的发布日志来看，目前项目的短期路线图重点在于：
- 解决 macOS 安全机制的适配问题（文档指引）。
- 可能存在的构建配置微调（导致版本号快速跳变）。
预计下一阶段维护者将致力于稳定发布流程，随后可能回归功能性更新。

## 7. 用户反馈摘要
从 Issue #34 及 Release Notes 的互动中提炼出以下用户痛点：
- **获取渠道敏感度高**：用户高度依赖官网进行下载，一旦链接失效会立即产生负面反馈，说明 SEO 或品牌宣传主要导向官网，而非 GitHub Releases。
- **macOS 上手门槛**：频繁强调的“文件已损坏”提示说明 macOS 用户群体占比较大，且对未签名应用缺乏处理经验，这是用户流失的一个潜在风险点。

## 8. 待处理积压
当前数据显示项目中无明显积压的 Issue 或 PR。唯一需要关注的是：
- **macOS 签名问题**：虽然通过文档解决了燃眉之急，但长期来看，缺乏开发者签名会持续增加 macOS 用户的信任成本和操作难度。建议维护者未来考虑接入公证流程或购买证书，以彻底解决此痛点。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*