# OpenClaw 生态日报 2026-05-01

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-01 03:39 UTC

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

# OpenClaw 项目动态日报 (2026-05-01)

## 1. 今日速览
OpenClaw 项目今日表现出极高的活跃度，Issue 与 PR 更新量均达 500 条，显示出社区与开发团队的高速运转。项目刚刚发布了 **v2026.4.29** 正式版，引入了消息自动化与子智能体路由的重大功能更新。然而，社区反馈目前集中在性能回归与稳定性问题上，多个高优先级 Bug 报告指出新版本存在 Gateway 运行时降级及插件加载死循环。尽管有 38 个 PR 被合并，但待合并 PR 数量高达 462 个，且活跃 Issues 中 Bug 占比显著，项目处于功能快速迭代与稳定性阵痛并存的阶段。

## 2. 版本发布
### v2026.4.29 (Latest Release)
- **更新亮点**：
  - **消息与自动化增强**：默认启用主动运行引导、强制可见回复、生成的子智能体路由元数据，以及可选的心跳提醒跟进承诺。
  - **内存优化**：内存模块得到扩展（Release Note 截断，具体细节待补充）。
- **特别说明**：该版本包含多个 Beta 预览版，正式版已发布，但社区反馈显示存在性能问题，建议生产环境用户关注后续补丁。

## 3. 项目进展
今日合并/关闭了 38 个 PR，大量关键修复 PR 正在审查中，主要进展如下：
- **核心稳定性修复**：
  - **PR #75183**: 重构捆绑运行时依赖修复逻辑，旨在解决插件启动时因依赖镜像导致的 CPU 100% 死循环问题（关联 Issue #73532）。
  - **PR #73161**: 修复 Discord 长连接保活问题及过时任务取消逻辑，解决僵尸任务残留问题。
  - **PR #75392**: 修复配置解析中 `visibleReplies` 布尔值导致的全频道失效问题。
- **功能增强**：
  - **PR #73822**: 支持在频道配置中使用 SecretRef 引用电话号码，增强隐私保护。
  - **PR #74905**: 修复代理直连 APNs HTTP/2 会话问题，提升 iOS 推送稳定性。

## 4. 社区热点
今日讨论最热烈的问题集中在性能与部署便捷性上：
- **[#9443 Android 预编译 APK 请求](https://github.com/openclaw/openclaw/issues/9443)** (评论 23 条)
  - **诉求**：用户强烈希望能直接下载 Android APK，而非自行编译源码，降低移动端使用门槛。
  - **现状**：仓库包含 Android 源码但无预编译包，该 Issue 自 2 月开放至今，热度不减。
- **[#73323 Gateway 运行时全面降级](https://github.com/openclaw/openclaw/issues/73323)** (评论 13 条)
  - **现象**：Windows 11 + Node 24 环境下，Gateway 出现多子系统网络/计时器降级，包括价格获取超时、Telegram 轮询停滞等。
- **[#73501 性能严重倒退](https://github.com/openclaw/openclaw/issues/73501)** (评论 12 条)
  - **现象**：从 4.22 升级到 4.26 后，Bot 响应显著变慢，被标记为 Blocker 级回归。

## 5. Bug 与稳定性
今日报告的严重 Bug 主要涉及性能与资源死锁，部分已有对应修复 PR：
- **[Blocker] 性能回归 (Issue #73501)**
  - 症状：升级后 Bot 响应延迟严重。
  - 状态：待确认。
- **[Critical] 插件加载器热循环 (Issue #73532)**
  - 症状：启动后 CPU 单核 100%，Node 事件循环饥饿。
  - 修复：**PR #75183** 正在处理此类依赖修复。
- **[Critical] Gateway 启动挂起 (Issue #73303)**
  - 症状：macOS 上重启 Gateway 需耗时 3-4 分钟。
- **[High] 事件循环阻塞 (Issue #75330)**
  - 症状：Agent 准备阶段阻塞请求，最大延迟达 32 秒。
- **[Low] 硬编码路径 Bug (Issue #51429)**
  - 症状：代码中硬编码了 `/Users/wangtao` 路径，导致非该用户系统下创建异常目录。

## 6. 功能请求与路线图信号
- **移动端支持**：Issue #9443 显示出用户对移动端的强烈需求，鉴于已有 Android 源码，发布预编译 APK 可能是近期路线图的重点。
- **语音交互体验**：Issue #71195 提议在 macOS Talk Mode 中支持 OpenAI Realtime API，实现端到端语音交互，显示出社区对低延迟交互的期待。
- **多机器人支持**：Issue #71058 请求单一 Gateway 支持多个 Teams/Azure 机器人，反映出企业级多租户场景的需求。

## 7. 用户反馈摘要
- **痛点**：
  - **性能焦虑**：多位用户反馈新版本（4.24-4.26）“显著变慢”，甚至“卡死”，严重影响体验。
  - **安装障碍**：安装脚本在某些环境下挂起，加上硬编码路径 Bug，导致部署困难。
  - **连接稳定性**：Slack 和 Telegram 连接存在静默丢失或长时间轮询超时问题。
- **满意点**：用户对子智能体路由等新功能表示期待，但普遍呼吁优先解决稳定性问题。

## 8. 待处理积压
- **Issue #9443 (Android APK)**：自 2 月创建以来一直是热门需求，建议官方优先评估并纳入发布流程。
- **Issue #51429 (硬编码路径)**：低级代码质量问题，影响新用户初次体验，需尽快修复。
- **Issue #64187 (Windows 内存搜索)**：Windows 上的内存锁定问题长期存在，影响特定平台用户。

---
*分析师注：OpenClaw 目前正处于功能爆发期，但引入的新问题（特别是性能回归）正在消耗社区耐心。建议维护者优先处理 #73501 和 #73532 等阻断性问题，并尽快落实移动端 APK 的发布以降低用户部署门槛。*

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告 (2026-05-01)

## 1. 生态全景
当前 AI 智能体开源生态正处于**功能爆发与架构重塑并存的关键阶段**。以 OpenClaw、Hermes Agent 为代表的核心项目正通过引入子智能体路由、自我维护等高级特性突破能力边界，但随之而来的性能回归与稳定性阵痛成为普遍挑战。同时，DeepSeek-V4 等推理模型的普及引发了新一轮的适配热潮，各项目纷纷调整流式传输与上下文管理机制。此外，安全性与企业级特性（如多租户、权限控制）正从边缘需求转变为核心关注点，标志着生态正从“能跑起来”向“安全可控地落地”演进。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PR 活跃度 (合并/更新) | 最新版本 | 健康度评估 | 核心动态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 极高 (500+) | 极高 (38 合并/462 待定) | v2026.4.29 | ⚠️ 高风险 | 性能回归、移动端诉求、积压严重 |
| **Hermes Agent** | 极高 (50+) | 极高 (36 合并) | v0.12.0 | ✅ 活跃 | 自我维护、安全漏洞修复、架构重塑 |
| **NanoClaw** | 中等 | 极高 (37 合并) | - | ✅ 活跃 | 安全加固、安装体验、OpenCode 适配 |
| **IronClaw** | 高 (26) | 高 (20 合并) | - | 🔄 重构中 | Reborn 架构、WASM 运行时、CI 迁移 |
| **NanoBot** | 中等 (13) | 中等 (16 待定) | - | ✅ 健康 | 架构重构、轻量化争议、插件化 |
| **Zeroclaw** | 高 (50) | 中等 (13 合并) | v0.7.4 | ⚠️ 震荡 | Matrix 重写、国际化、Onboarding 故障 |
| **CoPaw** | 高 (29) | 中等 (12 合并) | v1.1.5.post1 | ✅ 健康 | 安全修复、IM 渠道增强、DeepSeek 适配 |
| **PicoClaw** | 高 (36) | 中等 (开发中) | v0.2.8 | 📈 上升 | MCP 增强、多模态、多租户 |
| **Moltis** | 中等 (6) | 高 (18 合并) | 20260430.01 | ✅ 健康 | Gemini 支持、SDK 建设、UI 回归 |
| **NullClaw** | 低 | 中等 (10 合并) | - | 🛠️ 维护期 | Zig 迁移修复、E2EE、技能系统 |
| **LobsterAI** | 低 | 低 (9 合并) | - | 🛠️ 维护期 | IM 稳定性、Windows 兼容 |
| **EasyClaw** | 无 | 无 | v1.8.10 | ⏸️ 静默 | macOS 兼容 |
| **TinyClaw** | 无 | 无 | - | ⏸️ 停滞 | - |
| **ZeptoClaw** | 无 | 无 | - | ⏸️ 停滞 | - |

## 3. OpenClaw 在生态中的定位

作为核心参照项目，OpenClaw 展现出**“高流量、高负载、高风险”**的头部特征：
*   **优势与规模**：拥有生态中最高的社区活跃度（Issue/PR 更新量级远超其他），功能迭代速度极快（子智能体路由、消息自动化），是功能特性的风向标。
*   **技术路线差异**：相比 Hermes Agent 的“自我维护”哲学或 IronClaw 的“WASM 安全沙箱”架构，OpenClaw 更倾向于快速集成与功能堆叠，但在代码质量控制与回归测试上显现出滞后（462 个待合并 PR，严重性能回归）。
*   **现状对比**：OpenClaw 目前正处于“失血”状态，社区反馈集中在性能倒退与安装门槛上；相比之下，NanoBot 和 CoPaw 虽规模较小，但在特定领域（如架构解耦、企业 IM 集成）表现出更高的稳定性与响应速度。

## 4. 共同关注的技术方向

*   **推理模型适配危机 (OpenClaw, NanoBot, CoPaw)**
    *   DeepSeek-V4 等带推理链模型的普及导致流式传输处理异常（`reasoning_content` 丢失或错误），成为各项目共同面临的技术债，急需统一的消息处理标准。
*   **企业级安全与隔离**
    *   容器逃逸与隔离成为焦点；OpenClaw 的硬编码路径问题亦反映出对多租户环境隔离的忽视。
*   **IM 渠道深度集成**
    *   飞书与企微的集成已从“消息收发”升级为“交互体验优化”，如 CoPaw 的卡片按钮与 NanoBot 的回复模式讨论，显示 B 端场景对交互细节的苛刻要求。
*   **本地模型与轻量化**
    *   对 OpenCode、Ollama 的支持热度不减，NanoBot 的“伪轻量级”争议与 OpenClaw 的移动端 APK 诉求，反映了用户对本地化部署与低门槛接入的强烈渴望。

## 5. 差异化定位分析

*   **架构哲学**：
    *   **重型/平台化**：OpenClaw, IronClaw。追求全功能覆盖与架构重塑（Reborn），适合大规模集成但维护成本高。
    *   **轻量/模块化**：NanoBot, NullClaw。侧重核心性能与插件化，NanoBot 强调轻量，NullClaw 基于 Zig 追求极致性能与安全。
    *   **垂直场景化**：CoPaw (企业 IM), PicoClaw (MCP 协议与多模态)。
*   **目标用户**：
    *   OpenClaw、Hermes Agent：面向极客与高级开发者，提供高度可定制性但配置复杂。
    *   CoPaw、EasyClaw：面向企业用户与非技术用户，强调开箱即用与 IM 集成。
*   **技术栈**：
    *   主流 (Python/TS): OpenClaw, NanoBot, CoPaw。
    *   特殊 (Zig/Rust/Go): NullClaw (Zig), Moltis (多语言 SDK), IronClaw (WASM)。

## 6. 社区热度与成熟度

*   **快速迭代/震荡期**：**OpenClaw, Zeroclaw, IronClaw**。特征是版本发布快、Issue 爆炸、积压严重，引入新功能的同时伴随阻塞性 Bug，适合敢于尝鲜的用户。
*   **质量巩固/成长期**：**Hermes Agent, NanoBot, PicoClaw, NanoClaw**。特征是架构重构与安全性修复并行，社区响应迅速，Roadmap 清晰，适合寻求平衡的早期采用者。
*   **稳定维护期**：**CoPaw, Moltis, NullClaw, LobsterAI**。特征是修复特定 Bug，优化体验，无明显架构变动，适合生产环境部署。
*   **停滞/静默期**：**TinyClaw, ZeptoClaw, EasyClaw**。社区互动几乎为零，版本更新缓慢或仅做基础维护。

## 7. 值得关注的趋势信号

1.  **“推理模型适配”成为新显性技术债**：随着 DeepSeek 等模型的普及，`reasoning_content` 的处理不当已成为导致 Agent 上下文丢失或崩溃的共性问题，开发者需优先重构流式数据处理层。
2.  **安全漏洞从“隐忧”变为“实雷”**：NanoClaw 的容器逃逸与 CoPaw 的路径遍历漏洞表明，随着 Agent 权限扩大（文件读写、Shell 执行），沙箱隔离与权限校验已成为不可妥协的基础设施。
3.  **移动端与 Web 端体验短板凸显**：OpenClaw 的 APK 需求高热与多个项目的 Web UI 投诉，揭示了当前 AI Agent 在“端侧落地”上的普遍短板，未来竞争可能从模型能力转向端侧交互体验。
4.  **配置即代码 与插件化**：IronClaw 与 NanoBot 的动向表明，复杂的 Agent 配置正向代码化管理演进，以解决当前配置分散、难以审计的问题，这是迈向企业级交付的关键一步。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-01)

## 1. 今日速览
NanoBot 项目今日保持高度活跃，社区贡献者提交了**25 个 PR**（其中 16 个待合并），显示出项目正处于功能快速迭代与架构优化阶段。尽管今日无新版本发布，但围绕 **Hook 系统重构**、**LLM 路由扩展** 以及 **多平台 Channel 修复** 的开发工作占据了主导地位。Issue 板块共有 **13 条更新**，社区对项目“轻量化”定义的讨论热度不减，同时针对 DeepSeek-V4 等新模型的适配 Bug 修复响应迅速，整体项目健康度良好，正向更健壮的插件化架构演进。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 9 个 PR 被合并或关闭，主要集中在提升跨平台兼容性与修复流式传输 Bug：

*   **Matrix 频道稳定性修复**：PR #3562 与 #3565 解决了 Matrix 频道在处理 DeepSeek 等模型返回的空 `reasoning_content` 时发送空消息的问题。通过在处理前跳过空流增量，减少了垃圾信息的干扰。
    *   链接: [PR #3562](https://github.com/HKUDS/nanobot/pull/3562) | [PR #3565](https://github.com/HKUDS/nanobot/pull/3565)
*   **跨平台文档与规范优化**：PR #3550 修正了文档中仅适用于 POSIX 系统的临时路径示例，提升了 Windows/macOS 用户的上手体验；PR #3556 引入了 `.gitattributes` 以统一仓库换行符，减少了跨平台协作的噪音。
    *   链接: [PR #3550](https://github.com/HKUDS/nanobot/pull/3550) | [PR #3556](https://github.com/HKUDS/nanobot/pull/3556)

**正在进行的重要工作（待合并 PR）：**
*   **架构重构**：PR #3564 提出了基于类型化事件的 HookCenter 系统，旨在替换现有的方法重写模式，支持外部开发者通过 `entry_points` 分发插件。这是向插件化架构迈出的重要一步。
    *   链接: [PR #3564](https://github.com/HKUDS/nanobot/pull/3564)
*   **生态集成**：PR #3568 新增了 Manifest LLM 路由支持，PR #3173 正在推进 OpenTelemetry 可观测性集成，这将极大增强企业级部署的监控能力。
    *   链接: [PR #3568](https://github.com/HKUDS/nanobot/pull/3568) | [PR #3173](https://github.com/HKUDS/nanobot/pull/3173)

## 4. 社区热点
今日社区讨论焦点集中在项目定位与特定场景下的交互体验：

*   **“伪轻量级”争议**：Issue #660 引发了关于项目依赖的激烈讨论（11 条评论）。用户指出项目声称“超轻量”却同时依赖 Python 和 Node.js，导致 Docker 镜像体积过大。这反映了社区对 AI 助手部署成本和架构简洁性的高度敏感。
    *   链接: [Issue #660](https://github.com/HKUDS/nanobot/issues/660)
*   **飞书群聊交互痛点**：Issue #3546 反馈了飞书群聊中强制使用 Thread 回复导致的上下文“失忆”问题。用户希望在群聊场景下有更灵活的回复配置，而非当前的强制 Thread 模式。
    *   链接: [Issue #3546](https://github.com/HKUDS/nanobot/issues/3546)
*   **架构设计探讨**：Issue #3559 深入讨论了 WebSocket 在多租户环境下无法替代 Webhook 进行主动消息推送的问题，涉及核心通信架构的设计权衡。
    *   链接: [Issue #3559](https://github.com/HKUDS/nanobot/issues/3559)

## 5. Bug 与稳定性
今日报告了多个影响使用体验的 Bug，主要集中在流式传输和新模型适配，社区修复响应积极：

*   **[高] DeepSeek-V4 推理内容错误**：Issue #3554 报告在 Windows 环境下使用 WebUI 和 exec 工具时触发 `reasoning_content must be passed back` 错误。
    *   状态：**已有修复 PR #3560**。
    *   链接: [Issue #3554](https://github.com/HKUDS/nanobot/issues/3554) | [PR #3560](https://github.com/HKUDS/nanobot/pull/3560)
*   **[高] OpenAI 兼容流式传输中断**：Issue #3551 指出在使用 `/v1/chat/completions` 接口且涉及工具调用时，SSE 流会过早终止。
    *   状态：**已有修复 PR #3555**，修复了流生命周期管理逻辑。
    *   链接: [Issue #3551](https://github.com/HKUDS/nanobot/issues/3551) | [PR #3555](https://github.com/HKUDS/nanobot/pull/3555)
*   **[中] Matrix 频道历史消息重放**：Issue #3553 报告重启或使用 `/restart` 时，Matrix 频道会重复读取最后一条消息。
    *   状态：**已通过 PR #3562/#3565 修复**。
    *   链接: [Issue #3553](https://github.com/HKUDS/nanobot/issues/3553)
*   **[中] 飞书群聊强制 Thread 回复**：Issue #3533 与 #3546 均指出飞书渠道强制开启 `reply_in_thread` 导致的逻辑问题，相关 Issue #3533 已关闭，但 #3546 反馈问题仍存在。
    *   链接: [Issue #3533](https://github.com/HKUDS/nanobot/issues/3533)

## 6. 功能请求与路线图信号
结合 Issues 与 PRs，项目下一阶段的功能演进呈现出以下趋势：

*   **插件化与可扩展性**：PR #3564 的 Hook 系统重构和 PR #3461 的多智能体邮箱通道插件，强烈暗示项目正致力于解耦核心逻辑，构建类似 OpenAI 插件生态的扩展能力。
*   **企业级特性增强**：PR #3373 计划添加 Gateway 生命周期通知钩子，PR #3568 增加 Manifest 路由，结合社区对多租户主动推送的讨论，显示项目正在向生产级部署需求靠拢。
*   **模型配置优化**：PR #3358 提出的“模型预设”功能，旨在解决快速切换模型配置的痛点，有望在下个版本纳入，提升多模型切换的便捷性。
    *   相关链接: [PR #3358](https://github.com/HKUDS/nanobot/pull/3358)

## 7. 用户反馈摘要
从评论中提炼的用户声音显示：

*   **部署痛点**：用户对镜像体积和依赖复杂度有抱怨（Node.js + Python），渴望真正的“轻量级”体验。
*   **使用痛点**：群聊场景（特别是飞书）的交互逻辑较为混乱，Thread 回复机制与上下文记忆存在冲突，用户亟需更细粒度的配置选项。
*   **本地模型支持**：Ollama 本地配置仍有用户遇到卡顿问题，文档或默认配置容错率需提升。
*   **正面反馈**：社区对 Bug 的响应速度较快（如 DeepSeek 流式错误当日即有 PR），开发者对功能请求的跟进积极（如添加 Manifest 支持）。

## 8. 待处理积压
以下重要 Issue 挂起时间较长或影响范围广，建议维护者优先关注：

*   **Issue #660** (开放中)：项目依赖臃肿问题，涉及核心架构调整，需明确路线图回应社区关切。
    *   链接: [Issue #660](https://github.com/HKUDS/nanobot/issues/660)
*   **Issue #2298** (开放中)：小型/本地模型陷入无限工具调用循环的问题。这是 Agent 自主性的核心挑战，目前尚未看到根本性解决方案合并。
    *   链接: [Issue #2298](https://github.com/HKUDS/nanobot/issues/2298)
*   **PR #1385** (开放中)：关于 OpenRouter 多轮工具调用保留 `reasoning_details` 的修复，自 3 月初挂起至今，可能影响复杂推理链的稳定性。
    *   链接: [PR #1385](https://github.com/HKUDS/nanobot/pull/1385)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-01)

## 1. 今日速览
Zeroclaw 项目今日保持**高活跃度**，随着 **v0.7.4** 版本的正式发布，项目在多渠道适配和国际化方面迈出了重要一步。社区互动频繁，过去24小时内 Issues 与 PRs 更新量均达到 50 条，显示出开发迭代的高速度。不过，新版本引入的变更也带来了一些安装与配置层面的 P1 级 Bug，需要维护者重点关注。整体来看，项目正处于功能快速扩张期，Web 端体验与底层架构重构同步推进。

## 2. 版本发布
**v0.7.4 (Patch Release)**
- **更新亮点**：
  - **Matrix 协议重写**：进行了净室重写，旨在提升连接稳定性与性能。
  - **国际化支持**：引入 Mozilla Fluent i18n 管道，支持多语言文档，新增 `zh-CN` 支持 (PR #6242, #6170)。
  - **CLI/TUI 引导重构**：改善了命令行交互体验。
  - **微信渠道恢复**：重新启用了 WeChat iLink Bot 通道。
- **破坏性变更/迁移注意**：
  - 此版本为 v0.7.x 基础上的首个补丁版本，涉及底层 Matrix 重写，建议正在使用 Matrix 渠道的用户关注语音转录等功能的兼容性问题。
- **详情链接**：[v0.7.4 Release](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.4)

## 3. 项目进展
今日共有 **13 个 PR 合并/关闭**，主要围绕发布准备、Web 端体验优化及架构修复：
- **发布准备**：PR #6248 合并了 v0.7.4 的 CHANGELOG 并发布了新版本，标志着当前迭代周期的完成。
- **Web 端增强**：
  - PR #6220 为 Web 聊天界面增加了输入锁、停止按钮和运行状态指示器，显著提升了交互友好度。
  - PR #6217 支持从内存记录直接跳转到对应的聊天会话，增强了上下文追溯能力。
  - PR #6218 在模型选择下拉框中标记了 OpenRouter 的免费模型，降低了用户试用门槛。
- **架构修复**：
  - PR #6221 修复了 Canvas Store 在守护进程子系统间未共享的问题，解决了非 Web 端工具调用失败的关键 Bug。
  - PR #6216 修复了会话删除时取消令牌未清除的内存泄漏隐患。
- **安全性**：PR #6214 激活了 HMAC 工具回执校验机制，增强了工具执行的安全审计能力。

## 4. 社区热点
- **Issue #6123 [Bug]: default_model issue on fresh install** (评论: 15)
  - **链接**：[#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)
  - **分析**：这是目前讨论最热烈的问题。用户在新安装环境下配置 Onboarding 时遇到 `default_model` 错误，导致工作流阻塞（S1 级）。这表明 v0.7.x 的引导流程在某些边缘环境下仍存在兼容性问题。
- **Issue #848 [Bug]: Can't get web search tool working** (评论: 8, 已关闭)
  - **链接**：[#848](https://github.com/zeroclaw-labs/zeroclaw/issues/848)
  - **分析**：这是一个长期存在的工具调用超时问题，今日最终关闭。社区对网络搜索工具的稳定性期待较高。
- **Issue #5890 RFC: Multi-agent UX flow** (评论: 7)
  - **链接**：[#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)
  - **分析**：多智能体 UX 流程设计 RFC 已结束 7 天讨论期，等待核心团队投票。这标志着 Zeroclaw 向多智能体协作架构演进的关键一步。

## 5. Bug 与稳定性
今日报告了多个影响核心流程的 Bug，其中部分为 S1 级（阻塞工作流）：
- **P1 紧急问题**：
  - **#6207 [Bug]**：Web Dashboard 绕过了 ApprovalManager，导致受监管的工具审批请求无法在 UI 显示，存在安全与合规风险。
  - **#6224 / #6223 [Bug]**：WhatsApp Web 渠道存在 Cron 任务调度失败及 `web_fetch` 工具不可用的问题，影响消息推送自动化。
  - **#6206 [Bug]**：自定义 OpenAI 兼容提供商在 Onboarding 时提示 "Unknown property" 并失败。
- **P2 中等问题**：
  - **#6153 [Bug]**：Matrix 渠道语音转录失败，提示不支持音频格式，疑似与新版 Matrix 重写相关。
  - **#6237 [Bug]**：Slack bot_token 必须写入配置文件，无法从环境变量读取，不符合 12-Factor App 最佳实践。
  - **#6210 [Bug]**：SkillForge 自动集成器生成的 TOML 文件包含非 Schema 字段。

## 6. 功能请求与路线图信号
- **Multi-agent UX (RFC #5890)**：即将进入投票阶段，预计将是下一阶段的开发重心。
- **Schema v3 (#5947)**：计划进行批量破坏性字段迁移，这将是一次较大的配置层重构，需关注迁移指南。
- **Web Onboarding Parity (PR #6179)**：正在推进 Web 端与 CLI 端配置体验的对齐，通过 CRUD API 统一管理，这将解决当前 Web 端配置能力弱的痛点。
- **Browser Headless Mode (#6241)**：用户请求为 `agent_browser` 后端增加无头/有头模式配置，目前该功能缺失。

## 7. 用户反馈摘要
- **安装体验**：多位用户反馈 LXC 容器等环境下的新安装存在问题（#6123），认为 Onboarding 流程对网络或环境依赖处理不够健壮。
- **Web UI**：用户对 Web 端的改进（停止按钮、模型切换）表示欢迎，但同时也指出了审批流程与 Dashboard 断联的严重体验割裂（#6207）。
- **渠道适配**：WhatsApp Web 用户反馈 Bot 功能缺失严重（工具调用、Cron），Telegram 用户则希望改进长消息的截断逻辑以保护 Markdown 结构（#6225）。
- **文档需求**：用户强烈希望能有更集中的官网文档和 RSS 订阅支持（#6208, #5994），以便追踪项目更新。

## 8. 待处理积压
- **Issue #6036 (Android/Termux)**：Agent 在 Termux 环境下进入无限工具调用循环，状态为 `needs-author-action`，等待更多复现信息，已积压多日。
- **Issue #6210 (SkillForge)**：目前状态为 `status:blocked`，依赖于其他 PR 的 Schema 校验逻辑更新，需关注解耦进度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 (2026-05-01)

## 1. 今日速览
Hermes Agent 今日迎来了里程碑式的重大更新 **v0.12.0 "The Curator"**，该项目展示出了极高的开发活跃度与社区参与度。过去24小时内，项目处理了 50 条 Issue 更新与 50 条 PR 更新，其中合并/关闭的 PR 数量达到 36 条，显示出维护团队在版本发布后迅速清理积压工作的效率。本次更新引入了"Agent 自我维护"的核心特性，伴随 217,776 行代码新增与 213 位贡献者的参与，项目正处于快速迭代与架构重塑的关键时期。社区当前关注的焦点集中在多平台适配器的稳定性（如 Matrix、Feishu）以及 CLI/TUI 的交互体验优化上。

## 2. 版本发布
**[v2026.4.30: Hermes Agent v0.12.0 (The Curator)](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.30)**
- **发布日期：** 2026-04-30
- **更新规模：** 自 v0.11.0 以来，包含 1,096 次提交，550 个合并 PR，文件变更 1,270 个，新增代码行数超 21 万行，共有 213 位社区贡献者参与。
- **核心特性：** "The Curator" —— **Hermes Agent 现已具备自我维护能力**。版本引入了自主后台进程，能够自动管理自身状态与迭代，标志着 Agent 从被动工具向主动维护实体的进化。
- **注意事项：** 鉴于庞大的代码变更量（217k+ insertions），建议用户在升级前仔细检查 `config.yaml` 配置文件的兼容性，特别是涉及 Gateway 和 Provider 的配置项。

## 3. 项目进展
今日合并的 PR 主要集中在修复 v0.12.0 大版本发布后的回归问题及提升系统稳定性，特别是安全性与跨平台适配：

- **[Security] 修复 YOLO 模式环境变量解析漏洞 ([PR #18214](https://github.com/NousResearch/hermes-agent/pull/18214))**
  修复了 `HERMES_YOLO_MODE="false"` 被错误识别为 `true` 的严重逻辑漏洞。此前任何非空字符串都会启用 YOLO 模式，可能导致危险命令绕过审批直接执行。该 PR 已合并，建议所有依赖环境变量控制权限的用户立即更新。

- **[CLI/Tool] 优化 Sudo 密码提示逻辑 ([PR #18216](https://github.com/NousResearch/hermes-agent/pull/18216))**
  合并了终端工具的改进，现在系统会先检测 `sudo -n` 是否可用，仅在必要时提示输入密码。解决了在已配置 NOPASSWD 的主机上仍频繁打断用户交互的问题。

- **[Gateway] 飞书适配器增加 `REQUIRE_MENTION` 控制 ([PR #10275](https://github.com/NousResearch/hermes-agent/pull/10275))**
  增加了环境变量支持，允许关闭飞书群聊中的强制 @提及 限制，提升了在单一机器人群组中的自动化体验。

- **[Discord] 修复工具能力缓存导致的 Token 混淆 ([PR #18211](https://github.com/NousResearch/hermes-agent/pull/18211))**
  修复了 Discord 工具能力检测缓存未按 Token 隔离的问题，防止了多 Token 场景下返回错误的 Schema。

- **[Config] 原子化配置写入 ([PR #18217](https://github.com/NousResearch/hermes-agent/pull/18217))**
  提出了一个修复方案（目前处于 Open 状态，修复逻辑清晰），旨在防止 Provider 切换或注销时因写入中断导致 `config.yaml` 损坏。

## 4. 社区热点
今日社区讨论最为热烈的问题集中在平台兼容性与底层架构限制：

1.  **[P1] Matrix 平台消息返回 ImportError ([Issue #17648](https://github.com/NousResearch/hermes-agent/issues/17648))**
    用户在使用当前版本时遇到 `cannot import name 'cfg_get'` 错误，导致 Matrix 网关完全不可用。该问题引发 6 条评论讨论，是目前阻塞性最高的 Bug 之一，尚未有官方修复 PR 合并。

2.  **[P2] Discord `send_message` 无法定位当前会话频道 ([Issue #5472](https://github.com/NousResearch/hermes-agent/issues/5472))**
    Agent 调用 `send_message` 时总是发送到 `config.yaml` 配置的主频道，而非当前对话所在的线程或频道，导致多消息批量投递功能在多频道场景下失效。该问题已活跃数周，今日再次引发讨论。

3.  **[P1] Nix CI 构建持续失败 ([Issue #15272](https://github.com/NousResearch/hermes-agent/issues/15272))**
    由于 `npmDepsHash` 过期，导致 Nix 工作流在所有 PR 上失败，严重影响了 Nix 用户的贡献与部署体验。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及网关平台和配置解析，按严重程度排序如下：

- **🔴 严重 (P1):**
    - **[Matrix] ImportError 导致网关瘫痪 ([Issue #17648](https://github.com/NousResearch/hermes-agent/issues/17648))**：涉及核心配置模块导入失败，需立即修复。
    - **[Nix] CI 基础设施故障 ([Issue #15272](https://github.com/NousResearch/hermes-agent/issues/15272))**：阻塞所有依赖 Nix 构建的 PR 合并。
    - **[Security] YOLO 模式逻辑反转 ([PR #18214](https://github.com/NousResearch/hermes-agent/pull/18214))**：**已修复**。但属于高危逻辑漏洞，旧版本用户需警惕。

- **🟠 中等 (P2):**
    - **[Telegram] Topic 技能重注入失败 ([Issue #6508](https://github.com/NousResearch/hermes-agent/issues/6508))**：`/new` 重置会话后，Topic 绑定的技能未能重新加载。**已关闭**，推测已在 v0.12.0 中修复。
    - **[Feishu] 图片发送不支持 ([Issue #18161](https://github.com/NousResearch/hermes-agent/issues/18161))**：`send_message` 工具尚未适配飞书的媒体文件发送接口。
    - **[Config] Fallback Provider 路由错误 ([Issue #15743](https://github.com/NousResearch/hermes-agent/issues/15743))**：自定义备用 Provider 错误地使用了主 Provider 的 `base_url`。**已关闭**。

- **🟢 轻微 (P3):**
    - **[TUI] 主题切换导致布局抖动 ([Issue #17229](https://github.com/NousResearch/hermes-agent/issues/17229))**：Dashboard 主题切换时字体和布局不稳定。

## 6. 功能请求与路线图信号
结合 Issues 与 PRs，以下功能请求显示出强烈的社区需求与实施迹象：

- **代理 支持 ([Issue #5454](https://github.com/NousResearch/hermes-agent/issues/5454))**
  用户请求 LLM API 调用支持 HTTP_PROXY，目前仅 Telegram 适配器支持。鉴于企业用户内网部署需求强烈，预计将很快纳入路线图。

- **TUI 交互体验增强**
  社区对 CLI/TUI 的体验优化呼声较高，包括：
  - **双队列消息输入**：Alt+Enter 发送后续指令，Enter 进入队列模式 ([Issue #5504](https://github.com/NousResearch/hermes-agent/issues/5504))。
  - **外部编辑器支持**：Ctrl+G 调用编辑器编写 Prompt ([Issue #5511](https://github.com/NousResearch/hermes-agent/issues/5511))。

- **更多平台适配**
  - **LINE Messenger**：请求支持 LINE 平台，覆盖日泰台市场 ([Issue #6081](https://github.com/NousResearch/hermes-agent/issues/6081))。
  - **MongoDB 记忆存储**：请求官方支持 MongoDB 作为长期记忆后端 ([Issue #5495](https://github.com/NousResearch/hermes-agent/issues/5495))。

## 7. 用户反馈摘要
从今日的 Issues 互动中提炼出以下用户痛点：

- **企业/内网用户痛点：** 代理支持不足导致在内网环境下无法连接 OpenAI 等外部 API，严重影响企业落地 ([Issue #5454](https://github.com/NousResearch/hermes-agent/issues/5454))。
- **多平台适配痛点：** 飞书 用户对群聊 @提及 的限制感到困扰，认为在仅有单一机器人的群组中强制 @ 是多余的交互负担 ([Issue #5465](https://github.com/NousResearch/hermes-agent/issues/5465))。
- **稳定性担忧：** 用户报告 Agent 的 `/status` 命令 Token 统计偶尔归零，怀疑状态存储与数据库不同步 ([Issue #5960](https://github.com/NousResearch/hermes-agent/issues/5960))。

## 8. 待处理积压
以下重要 Issue 长期未得到有效解决或响应，建议维护者优先关注：

- **[Nix] CI 构建阻塞问题 ([Issue #15272](https://github.com/NousResearch/hermes-agent/issues/15272))**
  该问题导致所有 PR 的 CI 检查失败，影响社区贡献者的提交信心与代码合并效率。

- **[Discord] 多消息投递目标错误 ([Issue #5472](https://github.com/NousResearch/hermes-agent/issues/5472))**
  自 4 月 6 日创建以来，该问题一直悬而未决，严重影响 Discord 机器人多频道自动化的实用性。

- **[MCP] stdio 配置 workdir 被忽略 ([Issue #5467](https://github.com/NousResearch/hermes-agent/issues/5467))**
  导致依赖工作目录的 MCP Server 启动失败，属于工具链层面的底层缺陷。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-01)

## 1. 今日速览
PicoClaw 项目今日正式发布了 **v0.2.8** 版本，重点增强了 MCP (Model Context Protocol) 的命令行交互体验，并修复了若干构建与接口问题。社区活跃度保持在高位，过去 24 小时内新增/活跃 Issue 达 36 条，显示出用户对项目功能的积极探索与反馈。目前代码库中有 32 个待合并 PR，涵盖多用户支持、原生音频输入、Web 端流式输出等重要特性，预示着下一版本将带来显著的架构升级与体验优化。

## 2. 版本发布
### v0.2.8 正式版
**更新重点**：
- **MCP CLI 增强**：新增 `show`, `add`, `list`, `remove`, `test`, `edit` 等全套命令行工具，极大提升了本地调试与配置效率。
- **接口修复**：修复了 MCP 工具调用时发送 `null` 参数导致部分服务端报错的问题（现改为发送空对象 `{}`），提高了兼容性。
- **构建修复**：解决了先前的构建失败问题。

**Nightly Build**：
- 同步发布 `v0.2.8-nightly.20260501`，包含最新主分支代码，适合尝鲜用户。

🔗 [查看 v0.2.8 Release 详情](https://github.com/sipeed/picoclaw/releases/tag/v0.2.8)

## 3. 项目进展
尽管今日合并的 PR 数量较少（仅 3 条），但多个关键特性的开发正在紧锣密鼓地进行中，项目正处于功能迭代的高峰期：

- **多模态能力拓展**：PR #2626 正在为多模态 LLM（如 Gemini 1.5）引入原生音频输入支持，这将显著扩展 PicoClaw 在语音交互场景的应用潜力。🔗 [PR #2626](https://github.com/sipeed/picoclaw/pull/2626)
- **前端交互重构**：PR #2587 正在为 Pico Web Chat 引入端到端流式传输支持，并重构滚动逻辑，旨在解决非流式输出的延迟与用户体验问题。🔗 [PR #2587](https://github.com/sipeed/picoclaw/pull/2587)
- **多租户与安全加固**：PR #2313 提出了大规模的重构方案，集成 "Agent Shield" 安全套件并引入多用户支持与 Skills 白名单机制，这是迈向企业级部署的关键一步。🔗 [PR #2313](https://github.com/sipeed/picoclaw/pull/2313)
- **渠道适配**：PR #2719 新增了 `slack_webhook` 输出渠道，完善了消息推送生态。🔗 [PR #2719](https://github.com/sipeed/picoclaw/pull/2719)

## 4. 社区热点
今日社区讨论集中在**高可用性架构**与**接口兼容性**两个方向：

1.  **API 高可用与负载均衡**：Issue #2408（评论 10 条）提议引入 "LLM 账户叠加（弹夹模式）"，支持在触及限额时自动轮换 API Key。这反映了重度用户对服务稳定性和并发能力的强烈诉求。🔗 [Issue #2408](https://github.com/sipeed/picoclaw/issues/2408)
2.  **Provider 适配优化**：Issue #2171（评论 9 条）建议将基于 OpenAI 的端点迁移至 OpenAI Responses API，旨在提升接口响应效率与标准化程度。🔗 [Issue #2171](https://github.com/sipeed/picoclaw/issues/2171)
3.  **云端 Ollama 支持**：Issue #2225（评论 9 条）请求支持 Ollama Cloud 的凭证配置，显示出用户对混合云/本地部署灵活性的关注。🔗 [Issue #2225](https://github.com/sipeed/picoclaw/issues/2225)

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及安装部署、调度任务及平台兼容性，部分已有修复方案：

- **[严重] aarch64 安装失败**：Issue #1763 报告 .deb 包在 aarch64 架构上无法安装，存在依赖问题，影响 ARM 用户的部署。🔗 [Issue #1763](https://github.com/sipeed/picoclaw/issues/1763)
- **[中等] 定时任务执行受限**：Issue #2468 指出计划任务因权限限制无法执行，报错 "restricted to internal channels"，属于功能性阻断。🔗 [Issue #2468](https://github.com/sipeed/picoclaw/issues/2468)
- **[中等] Windows 路径兼容性**：Issue #2472 报告 `list_dir` 在 Windows 上因路径分隔符不一致导致 "invalid argument" 错误，影响跨平台体验。🔗 [Issue #2472](https://github.com/sipeed/picoclaw/issues/2472)
- **[修复中] MCP 参数解析**：PR #2460 已提交修复，解决了 MCP 调用无参数工具时发送 `null` 导致 Zod 校验失败的问题，建议尽快合入。🔗 [PR #2460](https://github.com/sipeed/picoclaw/pull/2460)

## 6. 功能请求与路线图信号
根据 Issue 动态，以下功能需求具有较高的用户价值和社区共鸣：

- **邮件通知渠道**：Issue #2465 建议增加 SMTP 频道，支持将定时任务结果（如周报、监控）发送至邮箱，是典型的自动化场景需求。🔗 [Issue #2465](https://github.com/sipeed/picoclaw/issues/2465)
- **外部记忆系统集成**：Issue #2515 提议对接 mem0、Supermemory 等外部记忆服务，增强 Agent 的长期记忆能力，符合当前 AI Agent 演进趋势。🔗 [Issue #2515](https://github.com/sipeed/picoclaw/issues/2515)
- **飞书应用优化**：Issue #2580 针对中国用户提出了飞书插件的深度优化需求，包括流式输出和状态显示，反映了本土化办公场景的强需求。🔗 [Issue #2580](https://github.com/sipeed/picoclaw/issues/2580)

## 7. 用户反馈摘要
- **部署痛点**：ARM 架构用户深受安装包依赖问题困扰，期待官方提供更完善的构建支持。
- **使用体验**：多渠道用户反馈在多任务并发时会出现消息处理丢失或回显错误（Issue #2446, #2447），稳定性仍需打磨。
- **安全与隔离**：高级用户对 "Workspace" 目录隔离的安全性表示担忧（Issue #2377, #2519），希望防止 Agent 访问敏感系统路径。
- **配置复杂度**：用户希望简化 OAuth 流程（Issue #2546），降低非技术用户接入 MCP 服务器的门槛。

## 8. 待处理积压
以下重要 Issue 长期未获关闭，建议维护者优先关注：

- **Issue #1763**：aarch64 安装包问题长期存在，严重影响 ARM 生态用户的上手体验。
- **Issue #2408**：API Key 轮换功能讨论热度高，但尚未有明确开发排期，建议纳入 Roadmap。
- **Issue #2302**：Web UI 频繁要求重新认证的问题影响使用流畅度，亟待排查。
- **PR #2313**：多用户与安全加固的大型重构 PR 滞留较久，需评估合并风险与进度，以免阻碍后续功能开发。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-01)

## 1. 今日速览
NanoClaw 今日呈现极高的开发活跃度，单日 PR 合并/关闭量高达 37 条，显示出项目正处于密集迭代与功能整合阶段。安全性方面，项目成功修复了两个潜在的高危漏洞（容器逃逸与命令注入），显著提升了系统健壮性。同时，安装部署体验得到了大幅优化，解决了 PATH 环境变量、Root 用户安装检测等痛点。然而，社区测试反馈指出新引入的 OpenCode provider 存在严重的进程泄漏和上下文丢失问题，需引起核心开发者的重视。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 37 个 PR 被合并或关闭，项目在安全性、稳定性和用户体验方面均有显著推进：

*   **安全性加固**：合并了关键安全修复 [PR #2001](https://github.com/qwibitai/nanoclaw/pull/2001)，防止容器通过路径遍历读取或删除主机文件，直接响应了 [Issue #457](https://github.com/qwibitai/nanoclaw/issues/457) 和 [Issue #458](https://github.com/qwibitai/nanoclaw/issues/458) 中提到的容器逃逸风险。
*   **安装与部署体验优化**：修复了 Linux 环境下 `onecli` 命令找不到的问题 ([PR #2055](https://github.com/qwibitai/nanoclaw/pull/2055)，关联 [Issue #1973](https://github.com/qwibitai/nanoclaw/issues/1973))；增加了 Root 用户安装拦截引导 ([PR #2155](https://github.com/qwibitai/nanoclaw/pull/2155))；重构了环境变量读取逻辑，支持按步骤复用 ([PR #2157](https://github.com/qwibitai/nanoclaw/pull/2157))；并增加了启动欢迎界面 ([PR #2158](https://github.com/qwibitai/nanoclaw/pull/2158))。
*   **功能增强**：Signal 适配器现已支持发送文件附件 ([PR #2040](https://github.com/qwibitai/nanoclaw/pull/2040))；实现了 Dota-Feishu 决策桥接功能 ([PR #2141](https://github.com/qwibitai/nanoclaw/pull/2141))；优化了频道审批流程，支持智能体选择和自定义命名 ([PR #2105](https://github.com/qwibitai/nanoclaw/pull/2105))。
*   **架构与逻辑修复**：修复了调度任务在轮询中被错误处理的问题 ([PR #2033](https://github.com/qwibitai/nanoclaw/pull/2033))，并新增了 `host-actions` 容器技能以增强宿主机交互能力 ([PR #2027](https://github.com/qwibitai/nanoclaw/pull/2027))。

## 4. 社区热点
今日社区关注点主要集中在安全性与新 Provider 的稳定性上：

*   **安全漏洞修复 ([Issue #458](https://github.com/qwibitai/nanoclaw/issues/458) & [Issue #457](https://github.com/qwibitai/nanoclaw/issues/457))**：这两个由 @johnwaldo 提交的高危安全问题已得到解决。讨论焦点集中在容器网络限制和 `stopContainer` 函数的命令注入风险。社区对项目快速响应并合并 [PR #2001](https://github.com/qwibitai/nanoclaw/pull/2001) 表示认可。
*   **OpenCode Provider 稳定性问题**：用户 @glifocat 连续提交了多个关于 OpenCode provider 的 Bug 报告（如 [Issue #2148](https://github.com/qwibitai/nanoclaw/issues/2148) 进程泄漏），指出在本地模型场景下存在严重隐患，引发了关于硬编码超时和进程管理机制的讨论。

## 5. Bug 与稳定性
今日报告了多个影响使用的 Bug，按严重程度排列如下：

*   **Critical (已修复)**：
    *   [Issue #457](https://github.com/qwibitai/nanoclaw/issues/457)：容器命令注入漏洞（已通过 PR #2001 修复）。
    *   [Issue #1973](https://github.com/qwibitai/nanoclaw/issues/1973)：新安装环境下 PATH 未正确注入导致初始化失败（已通过 PR #2055 修复）。

*   **High (待处理)**：
    *   [Issue #2148](https://github.com/qwibitai/nanoclaw/issues/2148)：OpenCode provider 在 `SIGKILL` 后泄漏底层二进制进程，导致端口 4096 被持续占用，最终致使容器不可用。
    *   [Issue #2150](https://github.com/qwibitai/nanoclaw/issues/2150)：OpenCode provider 上下文丢失，发送了字面量 `@./...md` 而非文件内容，导致 Agent 无指令可依。
    *   [Issue #2147](https://github.com/qwibitai/nanoclaw/issues/2147)：主机清理逻辑残留 `processing_ack` 行，导致会话重启后立即被杀死，形成死循环。

*   **Medium (待处理)**：
    *   [Issue #2149](https://github.com/qwibitai/nanoclaw/issues/2149)：OpenCode provider 硬编码 90 秒超时，不适应本地模型较慢的推理速度。
    *   [Issue #2159](https://github.com/qwibitai/nanoclaw/issues/2159)：OneCLI 标识符验证不支持下划线，与生成的 agent group ID 冲突。

## 6. 功能请求与路线图信号
*   **本地模型支持优化**：结合 [Issue #2148](https://github.com/qwibitai/nanoclaw/issues/2148) 和 [Issue #2149](https://github.com/qwibitai/nanoclaw/issues/2149) 的密集反馈，社区对 OpenCode provider（本地大模型运行时）的稳定性需求极高。未来版本需重点解决进程生命周期管理和配置项可配置化（如超时时间）。
*   **安装体验向导化**：[PR #2158](https://github.com/qwibitai/nanoclaw/pull/2158)（启动动画）和 [PR #2155](https://github.com/qwibitai/nanoclaw/pull/2155)（Root 用户引导）表明项目正在向“开箱即用”的友好体验演进，降低新手用户的部署门槛。

## 7. 用户反馈摘要
*   **安全审计积极**：用户 @johnwaldo 对代码进行了深入审计并指出了高危漏洞，显示出社区对 NanoClaw 安全性的关注，且对修复响应速度表示默许（Issue 关闭）。
*   **本地模型用户受挫**：用户 @glifocat 的反馈揭示，在 `providers` 分支下使用 OpenCode 运行本地模型时存在严重稳定性问题（端口泄漏、上下文丢失），这部分用户目前可能处于无法正常使用的状态。
*   **部署流程更顺畅**：[Issue #1973](https://github.com/qwibitai/nanoclaw/issues/1973) 的关闭和相关 PR 的合并解决了“找不到命令”的安装拦路虎，预计将显著改善新用户的初次体验。

## 8. 待处理积压
*   **OpenCode Provider 稳定性危机**：[Issue #2148](https://github.com/qwibitai/nanoclaw/issues/2148)（端口泄漏）与 [Issue #2150](https://github.com/qwibitai/nanoclaw/issues/2150)（上下文丢失）均处于 Open 状态且严重性为 High。鉴于这会直接导致容器瘫痪，建议维护者优先排查 `container/agent-runner/src/providers/opencode.ts` 文件。
*   **ID 校验冲突**：[Issue #2159](https://github.com/qwibitai/nanoclaw/issues/2159) 指出 OneCLI 的 ID 校验规则与 NanoClaw 生成的 ID 格式不兼容，这是一个阻断性 Bug，需尽快调整 ID 生成逻辑或修改校验正则。
*   **挂起的 PR**：[PR #2052](https://github.com/qwibitai/nanoclaw/pull/2052) 旨在解决本地 OneCLI 管理员引导问题，目前仍为 Open 状态，建议合并以完善 v2 安装流程。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 - 2026-05-01

## 1. 今日速览
NullClaw 项目今日呈现出极高的开发活跃度与维护效率。过去 24 小时内，项目成功合并或关闭了 **10 个 Pull Requests**，并解决了 **3 个长期悬而未决的 Issues**。此次更新主要围绕 **Zig 0.16 迁移后的关键稳定性修复** 与 **Agent 技能系统的深度增强** 两大核心展开。尽管没有发布新版本，但代码库的变更规模相当于一个重要的功能里程碑，显著提升了系统的安全性与可配置性。整体来看，项目健康度良好，核心贡献者对社区反馈的响应速度极快。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 10 个 PR 被合并或关闭，显著推进了项目的功能边界与稳定性，主要集中在以下三个方向：

*   **Agent 技能与工具链增强 (核心功能)**
    *   **嵌套技能支持**: 合并了 PR [#840](https://github.com/nullclaw/nullclaw/pull/840)，现在支持在 `skills/` 目录下按分类创建子目录，解决了之前仅支持扁平化目录结构的限制，提升了代码组织性。
    *   **技能启动参数**: 合并了 PR [#841](https://github.com/nullclaw/nullclaw/pull/841)，引入了 `--skill <name>` 命令行参数，允许 Agent 启动时直接激活指定技能，解决了硬编码路由的痛点。
    *   **RFC 0.2.0 支持**: 合并了 PR [#831](https://github.com/nullclaw/nullclaw/pull/831)，更新了 Web Skill 发现机制以符合 Agent Skills RFC 0.2.0 标准，增强了安全性（sha256 校验）。

*   **工具定制化与优先级 (易用性)**
    *   **精细化配置**: 合并了 PR [#834](https://github.com/nullclaw/nullclaw/pull/834)、[#835](https://github.com/nullclaw/nullclaw/pull/835) 和 [#837](https://github.com/nullclaw/nullclaw/pull/837)，引入了全新的工具定制化配置模式，支持外部配置文件加载、动态 `system_prompt` 覆盖以及基于触发词的工具优先级排序（[#836](https://github.com/nullclaw/nullclaw/pull/836)），极大提升了 Agent 行为的可控性。

*   **连接性与协议支持**
    *   **Matrix E2EE**: 合并了 PR [#838](https://github.com/nullclaw/nullclaw/pull/838)，添加了对 Pantalaimon 代理的支持，实现了 Matrix 频道的端到端加密，填补了隐私通信的空白。
    *   **HTTP/1.1 修复**: 合并了 PR [#876](https://github.com/nullclaw/nullclaw/pull/876)，修复了 HTTP keep-alive 客户端的阻塞问题。

## 4. 社区热点
今日社区互动主要体现在功能请求的实现与反馈上，虽然新增评论数较少，但 Issue 关闭率极高，显示了维护者的高效执行力。

*   **Matrix 隐私通信需求**: Issue [#209](https://github.com/nullclaw/nullclaw/issues/209) 是一个创建于 3 月初的老问题，用户强烈希望通过 Matrix 实现无需手机号的隐私通信。今日该 Issue 随 PR #838 的合并而正式关闭，标志着社区对隐私保护的重视得到了落实。
*   **技能组织结构优化**: Issue [#825](https://github.com/nullclaw/nullclaw/issues/825) 反映了用户对复杂技能进行分类管理的需求。维护者迅速响应并合并了 PR #840，允许嵌套目录，体现了项目架构正随着用户使用场景的复杂化而演进。

## 5. Bug 与稳定性
今日修复了数个 Zig 0.16 迁移后遗留的严重问题，确保了生产环境的稳定性。

*   **严重 - 生产环境 CPU 100% 与通信静默**:
    *   PR [#873](https://github.com/nullclaw/nullclaw/pull/873) 修复了 Zig 0.16 迁移引入的严重回归问题。包括 Gateway 线程在 `EAGAIN` 错误时的死循环（导致 100% CPU 占用）以及 Mattermost 通道的静默消息发送失败。**此修复对生产环境至关重要。**
*   **待合并 - Mattermost 空消息体**:
    *   PR [#877](https://github.com/nullclaw/nullclaw/pull/877) 提出修复 Mattermost POST 请求体为空的问题。这是由于 Zig 0.16 标准库 `Allocating` 写入机制变更导致的 Bug，目前尚未合并，建议维护者优先处理。
*   **待合并 - 线程休眠精度**:
    *   PR [#878](https://github.com/nullclaw/nullclaw/pull/878) 提出修复 POSIX 平台下 `thread.sleep` 无法真正挂起 OS 线程的问题，这可能导致 CPU 资源浪费。

## 6. 功能请求与路线图信号
今日关闭的 Issues 揭示了项目下一阶段的演进方向：

*   **安全执行环境**: PR [#875](https://github.com/nullclaw/nullclaw/pull/875)（待合并）提议引入 3 级风险分类系统，区分“中风险”网络命令与“高风险”破坏性命令。这表明项目正致力于构建更细粒度的沙箱机制，允许在受控模式下使用 `curl` 等工具。
*   **高度可定制的 Agent 行为**: 通过今日合并的一系列工具定制化 PR（#834, #835, #36），项目正从“通用型 Agent”向“可编程工作流 Agent”转型，允许用户通过配置文件精细控制 LLM 的上下文与工具调用策略。

## 7. 用户反馈摘要
*   **痛点 - 配置灵活性**: 用户反馈在特定场景下，仅依赖 Token 相似度来路由技能不够精准，希望支持硬编码或特定激活方式（Issue #580）。现已通过 `--skill` 参数解决。
*   **痛点 - 隐私与合规**: 用户指出运行 Agent 常受限于通道需要手机号或缺乏加密的问题（Issue #209）。Matrix E2EE 的支持解决了这一核心隐私顾虑。
*   **痛点 - 技能管理混乱**: 随着技能数量增加，扁平化目录难以管理（Issue #825）。嵌套目录的支持反映了项目正从实验性工具向规模化应用转型。

## 8. 待处理积压
目前有 3 个重要的 PR 处于 Open 状态，涉及关键 Bug 修复与安全特性，建议维护者尽快 Review：

1.  **[Bug Fix]** [PR #877](https://github.com/nullclaw/nullclaw/pull/877): 修复 Mattermost 空 Body 问题，直接影响通信功能。
2.  **[Bug Fix]** [PR #878](https://github.com/nullclaw/nullclaw/pull/878): 修复 POSIX 线程休眠问题，影响资源利用率。
3.  **[Security]** [PR #875](https://github.com/nullclaw/nullclaw/pull/875): 引入风险分类机制，解决 Issue #167，将提升 Agent 执行命令的安全性。

---
*分析师注：NullClaw 今日并未发布版本号更新，但代码库发生重大变动。建议生产环境用户密切关注即将发布的 Patch 版本，以修复 Zig 0.16 带来的 CPU 占用与通信隐患。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-01)

## 1. 今日速览
IronClaw 项目今日处于极高的活跃状态，过去 24 小时内 Issues 活跃度达 26 条，PR 更新高达 38 条。项目核心正全力推进代号为 **"Reborn"** 的重大架构重构，多个核心子系统的设计与实现正在进行密集的代码落地与集成测试。与此同时，CI/CD 流程正在向 `main` 分支的合并队列模式迁移，显示了项目在架构升级的同时也在强化工程化交付能力。今日虽无新版本发布，但大量基础设施 PR 的合并标志着 "Reborn" 架构已进入实质性的组装阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **20 个 PR 合并/关闭**，主要集中在 "Reborn" 架构的基础设施建设、安全性增强及 CI 流程优化上，项目整体向前迈出了坚实的一步。

*   **Reborn 核心基础设施落地**：
    *   合并了 [PR #3095](https://github.com/nearai/ironclaw/pull/3095)，引入了 `ironclaw_host_runtime` 契约门面，为上层架构提供了稳定的 API 依赖，解耦了实现细节。
    *   合并了 [PR #3098](https://github.com/nearai/ironclaw/pull/3098)，实现了共享运行时 HTTP 出口，将 DNS/SSRF 检查、资源核算等安全机制从 WASM 层剥离至宿主层，显著提升了安全性。
    *   合并了 [PR #3120](https://github.com/nearai/ironclaw/pull/3120)，修复了运行时的取消逻辑与健康检查，使其具备了真实的生产处理能力，不再是存根代码。

*   **工程化与质量保障**：
    *   合并了 [PR #3117](https://github.com/nearai/ironclaw/pull/3117)，补充了 WASM 运行时失败边缘情况的测试覆盖。
    *   关闭了 [PR #3119](https://github.com/nearai/ironclaw/pull/3119)，禁用了 Canary 失败时的自动 Issue 创建，减少噪音。
    *   正在推进 [PR #3104](https://github.com/nearai/ironclaw/pull/3104)，计划将工作流切换为基于 `main` 分支的合并队列，这将改变现有的代码提交与合并节奏。

## 4. 社区热点
今日讨论最活跃、关注度最高的话题集中在架构重构的细节与用户体验问题上：

*   **[Issue #2987] [EPIC] Track Reborn architecture landing strategy** (评论: 43)
    *   **链接**: [nearai/ironclaw Issue #2987](https://github.com/nearai/ironclaw/issues/2987)
    *   **分析**: 这是目前项目的核心指挥塔，讨论如何将庞大的 Reborn 架构拆分为可审查的 PR 组进行落地。高评论量反映了架构落地的复杂性，团队正努力在避免巨型 PR 和保持架构完整性之间寻找平衡。
*   **[Issue #3067] [TEST] Reborn: Add vertical-slice integration test suite** (评论: 10)
    *   **链接**: [nearai/ironclaw Issue #3067](https://github.com/nearai/ironclaw/issues/3067)
    *   **分析**: 社区与团队高度关注 Reborn 架构的测试策略，特别是针对公共入口点的垂直切分集成测试，这被视为保障重构质量的关键。
*   **[Issue #3103] High ASCII TUI in new ironclaw does not display correctly** (评论: 7)
    *   **链接**: [nearai/ironclaw Issue #3103](https://github.com/nearai/ironclaw/issues/3103)
    *   **分析**: 用户报告 TUI 在部分终端下显示异常，这是一个直接影响开发者体验的回归问题，引起了较多讨论。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，部分已确认影响生产环境：

*   **严重 (High)**:
    *   **Gmail 集成故障**: 用户报告连接 Gmail 时出现 **502 错误** ([Issue #3128](https://github.com/nearai/ironclaw/issues/3128)) 以及定时发送邮件任务失败 ([Issue #3133](https://github.com/nearai/ironclaw/issues/3133))。这影响了用户通过助手管理邮件的能力。
    *   **认证失败**: Web IDE 生成的 NEAR AI API 密钥在调用网关时返回 **401 "Session not found"**，而实例密钥正常 ([Issue #3108](https://github.com/nearai/ironclaw/issues/3108))。
    *   **参数校验错误**: Mission 创建失败，提示 `cooldown_secs` 必须为整数 ([Issue #3132](https://github.com/nearai/ironclaw/issues/3132))。

*   **中等**:
    *   **TUI 显示异常**: 新版 IronClaw 在特定 TTY 环境下滚动显示乱码，请求提供回退参数 ([Issue #3103](https://github.com/nearai/ironclaw/issues/3103))。
    *   **Canary 测试失败**: 多个 Canary 测试套件（public-smoke, persona-rotating, provider-matrix）失败 ([Issue #3116](https://github.com/nearai/ironclaw/issues/3116) 等)，表明当前构建可能存在不稳定性。

## 6. 功能请求与路线图信号
"Reborn" 架构引发了大量功能细化与架构演进的需求，显示出项目正向更模块化、更安全的方向演进：

*   **架构演进**:
    *   **独立二进制分发**: 建议将 Reborn 作为独立的 `ironclaw-reborn` 二进制文件发布 ([Issue #3069](https://github.com/nearai/ironclaw/issues/3069))。
    *   **内存存储重构**: 放弃适配旧版 Workspace DB，构建 Reborn 原生的内存存储服务 ([Issue #3118](https://github.com/nearai/ironclaw/issues/3118))，已关闭旧的适配方案 ([Issue #3112](https://github.com/nearai/ironclaw/issues/3112))。
    *   **配置即代码**: 提出 Configuration-as-Code 方案，支持租户蓝图与用例 Harness，解决当前配置分散、无审计的问题 ([Issue #3036](https://github.com/nearai/ironclaw/issues/3036))。

*   **生态集成**:
    *   **Aliyun 支持**: PR [feat: add Aliyun Coding Plan support](https://github.com/nearai/ironclaw/pull/1446) 正在推进，增加了对阿里云百炼代码计划的支持。
    *   **Trace Commons**: 正在集成 Trace Commons 客户端以支持追踪与审计 ([PR #3131](https://github.com/nearai/ironclaw/pull/3131))。

## 7. 用户反馈摘要
从今日的 Issue 反馈来看，用户痛点主要集中在**集成稳定性**与**环境兼容性**上：

*   **集成体验**: 用户在配置第三方服务（如 Gmail）时遇到阻碍，认证流程错误 (502) 和参数类型校验问题频发，这表明目前的扩展或连接器可能存在兼容性或错误处理不足的问题。
*   **工具可用性**: 开发者在使用 TUI 界面时遇到显示兼容性问题，影响了在服务器端无头环境下的使用体验。
*   **配置复杂性**: 用户对分散的配置方式（.env, JSON, flags）感到困惑，强烈呼吁统一的 "Configuration-as-Code" 方案。

## 8. 待处理积压
以下重要 Issue/PR 长期未得到最终处理，建议维护者关注：

*   **[PR #1764] feat: Abound demo**: 该大型功能 PR 自 3 月 30 日创建至今仍在更新但未合并，涉及 Responses API 与凭证注入，积压时间较长。
*   **[PR #1446] feat: add Aliyun Coding Plan support**: 外部贡献者提交的阿里云支持，自 3 月 20 日开启，目前处于 Open 状态，需团队评审推进。
*   **[PR #1479] feat: add tool for near-intents**: NEAR Intents 工具支持，同样自 3 月开启，等待合并。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-01)

## 1. 今日速览
LobsterAI 项目今日保持较高的维护活跃度，核心开发者 @liuzhq1986 集中合并了 9 个 Pull Requests，主要针对 IM 机器人、UI 渲染及 Windows 平台兼容性进行了重要修复。虽然无新版本发布，但代码库的合并活动表明项目正在为下一次更新积累稳定性改进。社区方面，新增一个关于微信接口配置的阻塞性问题反馈，且有 12 个功能性 PR 处于待合并状态，显示出项目在功能扩展与稳定性维护并重的阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 9 个 PR 被合并，项目整体稳定性显著提升，特别是在 IM 渠道和系统底层逻辑方面：

*   **IM 机器人体验优化**：合并了 [PR #1868](https://github.com/netease-youdao/LobsterAI/pull/1868)，修复了微信渠道发送图片展示过大且无法预览的问题，提升了 IM 场景下的交互体验。
*   **关键稳定性修复**：[PR #1869](https://github.com/netease-youdao/LobsterAI/pull/1869) 解决了网关重试失败导致的会话死锁问题，防止后续消息被错误拒绝，这是保障服务稳定性的关键修复。
*   **配置与 UI 细节**：[PR #1840](https://github.com/netease-youdao/LobsterAI/pull/1840) 修复了配置更新覆盖默认值的 Bug，[PR #1855](https://github.com/netease-youdao/LobsterAI/pull/1855) 修复了长模型名称导致的 UI 溢出问题。
*   **Windows 平台支持**：[PR #1851](https://github.com/netease-youdao/LobsterAI/pull/1851) 和 [PR #1841](https://github.com/netease-youdao/LobsterAI/pull/1841) 分别解决了 Windows 下文件监视器释放和安装程序退出码检测的问题。

## 4. 社区热点
今日社区活跃度主要体现在新增的用户问题及一批长期待处理的功能 PR 上：

*   **最新用户痛点**：[Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878) 报告了微信接口扫码后无法输入验证码的问题。这是一个阻塞性配置问题，用户在最新版微信端扫码后被要求输入验证码，但客户端未提供输入界面，导致无法完成接入。
*   **长期关注功能**：有大量提交于 3 月份的功能增强型 PR 在今日有更新动态（主要可能是 Stale bot 触发），显示社区对以下功能有强烈需求，但尚未合并：
    *   [PR #838](https://github.com/netease-youdao/LobsterAI/pull/838)：IM 渠道独立模型配置功能，允许不同群组使用不同模型。
    *   [PR #842](https://github.com/netease-youdao/LobsterAI/pull/842)：安全环境扫描功能，提供可视化的权限管理界面。

## 5. Bug 与稳定性
今日报告的关键 Bug 主要集中在 IM 接入流程：

*   **严重**：
    *   [Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878) **微信接口配置失败**：扫码后缺少验证码输入界面，导致 IM 机器人无法配置。目前状态为 OPEN，暂无修复 PR。
*   **已修复**：
    *   **会话死锁**：[PR #1869](https://github.com/netease-youdao/LobsterAI/pull/1869) 修复了 Gateway 错误处理不当导致的会话永久锁死问题。
    *   **配置丢失风险**：[PR #1840](https://github.com/netease-youdao/LobsterAI/pull/1840) 修复了部分配置更新可能覆盖存储配置的问题。

## 6. 功能请求与路线图信号
结合今日更新的待合并 PR，以下功能有望在后续版本纳入：

*   **MCP 服务器批量创建**：[PR #835](https://github.com/netease-youdao/LobsterAI/pull/835) 提议支持 JSON 粘贴模式，简化 MCP 服务器配置流程，符合当前简化用户配置的趋势。
*   **安全性增强**：[PR #842](https://github.com/netease-youdao/LobsterAI/pull/842) 提出的安全扫描与权限管理，响应了桌面端 AI 助手对本地安全的敏感需求。
*   **数据库性能优化**：[PR #830](https://github.com/netease-youdao/LobsterAI/pull/830) 针对 SQLite 进行了深度性能调优，若合并将显著提升应用响应速度。

## 7. 用户反馈摘要
*   **IM 集成痛点**：从 Issue #1878 可以看出，用户在使用 IM（微信）接口时，对客户端与移动端微信的交互流程敏感。客户端 UI 未跟进微信端的验证流程变化，直接导致了用户无法使用该功能。
*   **期望更灵活的模型配置**：社区长期存在的 PR #838 表明，用户希望在不同 IM 渠道使用不同的大模型，这反映了用户对成本控制和场景化模型选择的精细化管理需求。

## 8. 待处理积压
项目目前有 12 个待合并 PR，其中多个已标记为 `[stale]`，建议维护者关注以下积压项：

*   [PR #826](https://github.com/netease-youdao/LobsterAI/pull/826)：Shell 外部链接协议验证修复（安全问题）。
*   [PR #827](https://github.com/netease-youdao/LobsterAI/pull/827)：防止重复安装 Skill 的检测逻辑。
*   [PR #828](https://github.com/netease-youdao/LobsterAI/pull/828)：本地文件协议路径穿越漏洞修复。
*   **新 Issue**：[Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878) 需尽快处理，以免影响微信渠道用户的正常接入。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-01)

## 1. 今日速览
Moltis 项目今日呈现出极高的开发活跃度与迭代速度，过去 24 小时内共有 **18 个 PR 被合并或关闭**，同时处理了 **6 个 Issue**。项目在核心架构与生态扩展方面取得了重大进展，正式合并了 Google Gemini 原生支持与多语言 SDK 基础设施。尽管发布了新版本 `20260430.01` 修复了多项关键 Bug，但社区反馈显示 Web UI 层仍存在布局与滚动逻辑的回归问题，需要后续关注。整体而言，项目正处于功能快速扩展与稳定性打磨并行的健康阶段。

## 2. 版本发布
**新版本：`20260430.01`**
本次更新包含了大量修复与功能增强，主要集中在提升 Docker 环境下的稳定性与用户体验：
- **核心修复**：修复了 Docker 环境下 SIGTERM 信号未处理导致的强制关闭问题，现在支持优雅关闭 ([PR #940](https://github.com/moltis-org/moltis/pull/940))。
- **模型发现**：优化了本地大模型（如 llama.cpp）的探测机制，解决了大模型加载超时导致发现失败的问题 ([PR #931](https://github.com/moltis-org/moltis/pull/931))。
- **UI 细节**：修复了系统通知文本溢出容器的问题，并修复了非 HTTPS 环境下剪贴板复制按钮失效的 Bug ([PR #941](https://github.com/moltis-org/moltis/pull/941), [PR #936](https://github.com/moltis-org/moltis/pull/936))。

## 3. 项目进展
今日共有 18 个 PR 合并，标志着项目在生态建设上迈出了一大步：
- **生态拓展**：正式合并了 Google Gemini Provider 的支持，包含 API Key 与 OAuth 双重认证模式 ([PR #33](https://github.com/moltis-org/moltis/pull/33))。
- **SDK 基础设施**：建立了 `sdks/` 工作区，初步完成了 TypeScript、Python、Go 和 libmoltis 的 SDK 骨架，为开发者集成铺平道路 ([PR #288](https://github.com/moltis-org/moltis/pull/288))。
- **交互体验**：引入了全新的终端（TUI）新手引导流程，显著改善了首次使用体验 ([PR #201](https://github.com/moltis-org/moltis/pull/201))。
- **功能增强**：新增了 `/btw`, `/fast`, `/insights` 等多条斜杠命令，丰富了交互维度 ([PR #926](https://github.com/moltis-org/moltis/pull/926))。
- **自动化**：实现了代码索引的自动触发机制，提升了代码理解的时效性 ([PR #921](https://github.com/moltis-org/moltis/pull/921))。

## 4. 社区热点
今日社区关注点集中在 Web UI 的交互细节与新 Provider 的支持上：
- **Web UI 滚动问题 ([Issue #922](https://github.com/moltis-org/moltis/issues/922))**：该 Issue 虽已关闭，但评论区反映出用户对聊天窗口滚动逻辑的高度敏感。修复尝试 ([PR #925](https://github.com/moltis-org/moltis/pull/925)) 移除了原有的 `ResizeObserver`，但随即引发了新的自动滚动失效反馈。
- **第三方 Router 支持 ([Issue #266](https://github.com/moltis-org/moltis/issues/266))**：关于原生支持 9router 的功能请求已于今日关闭，这可能意味着现有架构已通过其他方式兼容，或该需求已通过其他 Provider 解决方案覆盖。

## 5. Bug 与稳定性
今日报告了多个与 UI 相关的 Bug，部分已有修复方案：
- **严重**：
    - [Issue #939](https://github.com/moltis-org/moltis/issues/939) [CLOSED]: SIGTERM 信号未被捕获，影响容器化部署。**已修复** ([PR #940](https://github.com/moltis-org/moltis/pull/940))。
- **中等**：
    - [Issue #946](https://github.com/moltis-org/moltis/issues/946) [OPEN]: 聊天窗口在底部时无法自动滚动。**待修复**（可能是 PR #925 的回归）。
    - [Issue #945](https://github.com/moltis-org/moltis/issues/945) [OPEN]: 聊天布局过宽，显示异常。
    - [Issue #937](https://github.com/moltis-org/moltis/issues/937) [OPEN]: Settings 终端中出现 tmux 错误。
- **轻微**：
    - [Issue #938](https://github.com/moltis-org/moltis/issues/938) [CLOSED]: 系统通知样式溢出。**已修复** ([PR #941](https://github.com/moltis-org/moltis/pull/941))。

## 6. 功能请求与路线图信号
- **远程沙箱支持**：[PR #942](https://github.com/moltis-org/moltis/pull/942) 正在请求合并，旨在支持 Vercel、Daytona 等远程沙箱环境。这标志着 Moltis 正试图摆脱本地 Docker 的依赖，向云端部署场景迁移，是极具战略意义的更新。
- **新 Provider 集成**：[PR #944](https://github.com/moltis-org/moltis/pull/944) 提出集成 OpenCode Zen，进一步扩充模型来源；配合已合并的 DeepInfra ([PR #934](https://github.com/moltis-org/moltis/pull/934)) 和 Gemini 支持，项目正致力于构建“多模型网关”的能力。

## 7. 用户反馈摘要
- **自托管场景痛点**：用户报告在非 HTTPS 环境（如局域网自托管）下剪贴板复制按钮失效 ([Issue #936](https://github.com/moltis-org/moltis/pull/936))，表明有相当一部分用户在私有网络中使用该产品。
- **本地模型性能关注**：Issue #919 提到模型发现超时问题，反映出用户常在本地部署大参数量模型（100B+），对启动等待时间敏感。
- **UI 细节敏感度高**：今日关于滚动、布局宽度的反馈较多，说明用户对 Chat 界面的流畅度和美观度要求较高，任何细微的布局变动都容易引起注意。

## 8. 待处理积压
- **Web UI 回归问题**：今日关闭 Issue #922 后，随即出现 Issue #946 (自动滚动) 和 #945 (布局过宽)。建议开发团队重新审查 [PR #925](https://github.com/moltis-org/moltis/pull/925) 的改动，可能需要引入更健壮的滚动检测逻辑。
- **关键 Feature PR 待合并**：[PR #942](https://github.com/moltis-org/moltis/pull/942) (远程沙箱) 和 [PR #944](https://github.com/moltis-org/moltis/pull/944) (Zen Provider) 目前处于 Open 状态，这两个功能对项目未来支持云端部署和多模型切换至关重要，建议优先评审。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-05-01)

## 1. 今日速览
CoPaw 项目今日保持了极高的活跃度与维护响应速度，过去 24 小时内共有 29 条 Issue 更新和 13 条 PR 更新。项目发布了 **v1.1.5.post1** 版本，重点修复了**Windows 平台路径遍历漏洞**这一高危安全问题，并显著增强了飞书与企微渠道的稳定性与交互体验。维护团队高效关闭了大量积压 Bug，特别是针对企微通道的异步错误和飞书的交互卡片功能进行了集中修复与升级。整体来看，项目核心稳定性进一步提升，IM 渠道集成更加健壮。

## 2. 版本发布
### v1.1.5.post1
- **发布时间**: 2026-04-30
- **更新重点**:
  - **安全性修复**: 修复了 Windows 服务器上的任意文件遍历漏洞 ([PR #3973](https://github.com/agentscope-ai/QwenPaw/pull/3973))。
  - **飞书功能增强**: 引入 `FeishuCardHandler`，将工具调用审批升级为交互式按钮，替代了之前的文本命令流 ([PR #3941](https://github.com/agentscope-ai/QwenPaw/pull/3941))。
- **迁移注意**: 飞书渠道的用户需留意应用配置，确保订阅了 `card.action.trigger` 事件以正常使用新的交互审批功能。

## 3. 项目进展
今日共合并/关闭了 12 个 PR，主要集中在安全修复、渠道稳定性优化及前端体验改进：

- **安全性修复**: 合并 [PR #3973](https://github.com/agentscope-ai/QwenPaw/pull/3973)，通过拒绝绝对静态文件路径修复了路径遍历漏洞，直接解决了 [Issue #3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) 中的安全隐患。
- **企微通道稳定性**: 合并了多个关键 PR 修复企微通道长期存在的连接与异步问题，包括修复 `send_file_to_user` 的 RuntimeError ([PR #3300](https://github.com/agentscope-ai/QwenPaw/pull/3300))、解决复杂请求下 "Thinking..." 卡死问题 ([PR #3950](https://github.com/agentscope-ai/QwenPaw/pull/3950)) 以及重连机制优化 ([PR #3963](https://github.com/agentscope-ai/QwenPaw/pull/3963))。
- **飞书体验升级**: 合并 [PR #3941](https://github.com/agentscope-ai/QwenPaw/pull/3941)，实现了飞书审批卡片的交互式按钮；同时合并 [PR #3982](https://github.com/agentscope-ai/QwenPaw/pull/3982)，在审批失败时增加文档链接引导。
- **前端优化**: 合并 [PR #3960](https://github.com/agentscope-ai/QwenPaw/pull/3960) 修复代码块长文本换行问题，[PR #3981](https://github.com/agentscope-ai/QwenPaw/pull/3981) 迁移了过时的 Antd v5 API 以消除控制台警告。

## 4. 社区热点
今日讨论最活跃的议题集中在安全漏洞与模型兼容性问题上：

1.  **Windows 任意文件遍历漏洞 ([Issue #3955](https://github.com/agentscope-ai/QwenPaw/issues/3955))**
    - **热度**: 12 条评论
    - **分析**: 用户报告了 Windows 版本存在路径遍历漏洞，可导致敏感文件泄露。维护者反应迅速，在短时间内修复并发布了 v1.1.5.post1。这反映了社区对安全性的高度敏感，也展示了项目组的应急响应能力。
2.  **DeepSeek 推理模型兼容性问题 ([Issue #3985](https://github.com/agentscope-ai/QwenPaw/issues/3985))**
    - **热度**: 新增 Issue
    - **分析**: 用户在使用 DeepSeek 模型进行多轮工具调用时遇到 HTTP 500 错误，指出 `reasoning_content` 未正确回传。这反映了社区对前沿模型（如 DeepSeek-V4）推理模式的集成需求，目前该问题尚未修复，需关注。
3.  **长对话性能瓶颈 ([Issue #3350](https://github.com/agentscope-ai/QwenPaw/issues/3350))**
    - **热度**: 长期活跃，今日又有新回复
    - **分析**: 用户反馈超 200 轮对话后页面滚动严重卡顿。这是典型的前端渲染性能问题，涉及复杂的长列表虚拟化或上下文管理策略，目前仍处于 Open 状态，建议优先级处理以提升重度用户体验。

## 5. Bug 与稳定性
今日报告及处理的 Bug 按严重程度排序如下：

### 严重
- **[已修复] Windows 路径遍历漏洞** ([Issue #3955](https://github.com/agentscope-ai/QwenPaw/issues/3955)): 允许攻击者访问系统任意文件。**修复 PR**: [#3973](https://github.com/agentscope-ai/QwenPaw/pull/3973)。

### 高
- **[未修复] DeepSeek 推理模型多轮调用崩溃** ([Issue #3985](https://github.com/agentscope-ai/QwenPaw/issues/3985)): 多轮对话后因 `reasoning_content` 缺失导致 HTTP 500。暂无修复 PR。
- **[已修复] 企微通道发送文件 RuntimeError** ([Issue #3296](https://github.com/agentscope-ai/QwenPaw/issues/3296)): 异步事件循环冲突。**修复 PR**: [#3300](https://github.com/agentscope-ai/QwenPaw/pull/3300)。
- **[已修复] 企微通道复杂请求卡死在 "Thinking..."** ([Issue #3947](https://github.com/agentscope-ai/QwenPaw/issues/3947)): 用户仅看到 "Thinking..." 而收不到最终回复。**修复 PR**: [#3950](https://github.com/agentscope-ai/QwenPaw/pull/3950)。

### 中
- **[未修复] 会话空闲清理机制误杀运行任务** ([Issue #3976](https://github.com/agentscope-ai/QwenPaw/issues/3976)): 长时间任务被误判为空闲而强制取消。
- **[未修复] Running Config 设置页 404** ([Issue #3980](https://github.com/agentscope-ai/QwenPaw/issues/3980)): Web Console UI 点击 Running Config 报错 Not Found。

## 6. 功能请求与路线图信号
- **多智能体团队协作** ([Issue #3987](https://github.com/agentscope-ai/QwenPaw/issues/3987)): 用户希望支持类似 Accio work 的团队功能，实现多智能体调度。这与 CoPaw 作为 AI Agent 框架的定位高度契合，建议纳入后续版本规划。
- **前端 Artifact 视图** ([Issue #3983](https://github.com/agentscope-ai/QwenPaw/issues/3983)): 请求支持类似 Claude 的代码/预览双视图，提升代码生成类任务的交互体验。
- **自循环任务执行** ([Issue #3972](https://github.com/agentscope-ai/QwenPaw/issues/3972)): 请求增加 `/ralph-loop` 魔法命令以实现任务自循环执行。该 Issue 已被关闭，可能因方案调整或暂不纳入计划。

## 7. 用户反馈摘要
- **桌面端体验痛点**: Windows 用户强烈希望客户端关闭后能最小化到托盘继续运行，而非彻底停止服务 ([Issue #3979](https://github.com/agentscope-ai/QwenPaw/issues/3979))。此外，Windows exe 首次运行白屏问题 ([Issue #3971](https://github.com/agentscope-ai/QwenPaw/issues/3971)) 影响了新手引导体验。
- **工作区管理困惑**: 用户反映当前 Agent 工作区混杂了核心配置与用户文档，容易导致误删核心文件，呼吁分离核心配置区与用户工作区 ([Issue #3967](https://github.com/agentscope-ai/QwenPaw/issues/3967))。
- **渠道稳定性改进**: 企微和飞书的连接稳定性近期得到了显著改善（通过多个合并的 PR 体现），但仍有用户反馈配置复杂或连接断开问题 ([Issue #3937](https://github.com/agentscope-ai/QwenPaw/issues/3937))。

## 8. 待处理积压
以下重要问题目前处于 Open 状态且尚未有明确的 Fix PR，建议维护者优先关注：

1.  **[性能] 超多轮对话页面卡顿** ([Issue #3350](https://github.com/agentscope-ai/QwenPaw/issues/3350)): 涉及前端架构优化，影响深度用户。
2.  **[兼容性] DeepSeek V4 推理模型集成错误** ([Issue #3985](https://github.com/agentscope-ai/QwenPaw/issues/3985)): 随着推理模型流行，此类兼容性问题急需解决。
3.  **[逻辑] Cron 定时任务不触发** ([Issue #3986](https://github.com/agentscope-ai/QwenPaw/issues/3986)): 核心功能缺失，导致自动化场景不可用。
4.  **[逻辑] Agent 身份混淆** ([Issue #3957](https://github.com/agentscope-ai/QwenPaw/issues/3957)): 多 Agent 场景下工作区切换错误，属于严重逻辑 Bug。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-05-01)

**数据来源周期**：过去 24 小时
**项目地址**：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. 今日速览
EasyClaw 今日发布了 **v1.8.10** 新版本，显示出项目仍在持续进行功能迭代与维护。然而，过去 24 小时内项目社区的互动活跃度处于静默状态，未产生新的 Issue 或 Pull Request。整体来看，项目当前处于“发布交付期”，开发端有实质性产出，但用户端的反馈与协作暂未形成规模。项目健康度目前稳定，但需关注社区活跃度的后续表现。

### 2. 版本发布
**新版本**：[v1.8.10: RivonClaw v1.8.10](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.10)

*   **更新重点**：本次更新重点解决了 **macOS 平台的安装兼容性问题**。针对 macOS Gatekeeper 安全机制拦截未签名应用的情况，发布说明提供了详细的解决方案，指引用户如何绕过“应用已损坏”的错误提示。
*   **破坏性变更**：根据发布说明，未涉及代码层面的破坏性 API 变更，主要侧重于安装体验的优化。
*   **迁移注意事项**：macOS 用户在更新或首次安装时，若遇到“RivonClaw is damaged”提示，需通过终端执行命令移除隔离属性（具体命令通常为 `xattr -cr ...`，发布页有截断提示），并非文件本身损坏。

### 3. 项目进展
过去 24 小时内，项目未合并或关闭任何 Pull Request。项目进度的推进主要体现在 v1.8.10 版本的上线，这意味着后台可能有未在当日 PR 列表中显示的代码提交已完成整合，主要解决了 macOS 端的发布与分发问题。

### 4. 社区热点
过去 24 小时内无活跃的 Issues 或 Pull Requests，暂无社区讨论热点。这表明用户群体可能正处于新版本的消化期，或者项目目前主要依赖核心开发者的单向输出。

### 5. Bug 与稳定性
今日未收到用户提交的新 Bug 报告。
**侧面观察**：虽然无官方 Issue 提交，但 v1.8.10 的 Release Notes 透露了 **macOS 平台存在的稳定性/可用性阻碍**——即应用签名缺失导致的无法启动问题。这是一个影响 macOS 用户体验的关键问题，已在发布文档中提供了临时修复方案，建议后续版本考虑引入正规签名机制以彻底解决。

### 6. 功能请求与路线图信号
今日无新增功能请求（Issues）或相关 PR，暂无法从社区动态中捕捉下一版本的功能演进信号。当前的路线图重点似乎仍聚焦于现有版本的跨平台兼容性优化。

### 7. 用户反馈摘要
由于今日无 Issue 评论数据，无法提炼直接的用户交互反馈。但从 Release Notes 针对 macOS 错误的详细解释可以推断：
*   **痛点**：macOS 用户在安装时面临较高的门槛（安全拦截），这是非签名应用的常见痛点。
*   **应对**：项目方已预判该问题并提供了文档支持，体现了维护者对用户体验细节的关注。

### 8. 待处理积压
由于数据概览显示过去 24 小时 Issues 更新为 0，暂无具体的长尾未响应 Issue 列表。建议维护者在发布新版本后，主动检查是否存在历史遗留的 macOS 相关 Issue，并在相关讨论区同步 v1.8.10 的修复信息，以激活社区互动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*