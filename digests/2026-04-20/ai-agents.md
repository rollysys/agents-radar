# OpenClaw 生态日报 2026-04-20

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-20 02:57 UTC

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

# OpenClaw 项目动态日报 (2026-04-20)

## 1. 今日速览
OpenClaw 项目今日保持极高活跃度，过去 24 小时内 Issues 与 PR 更新数均达到 500 条，显示出社区强烈的迭代意愿。项目发布了 **v2026.4.19-beta.2** 版本，重点修复了 OpenAI 兼容后端的上下文统计问题及嵌套 Agent 作用域隔离。社区讨论热点集中在底层架构革新（如 Agent 身份认证 RFC）与跨平台客户端支持。尽管功能迭代迅速，但也暴露了部分回归问题（如 CLI 挂起、特定渠道崩溃），维护团队正通过高频 PR 合并积极应对稳定性挑战。

## 2. 版本发布
- **v2026.4.19-beta.2**
  - **Fixes**:
    - **Agents/openai-completions**: 修复流式请求上下文统计显示为 0% 的问题。现强制发送 `stream_options.include_usage`，确保本地及自定义 OpenAI 兼容后端能正确报告真实的上下文使用情况。(#68746 感谢 @kagura-agent)
    - **Agents/nested lanes**: 优化嵌套 Agent 的工作区作用域隔离，防止上下文污染。
  - **迁移注意**: 对于使用自定义 OpenAI 兼容后端的用户，升级后将能更准确地监控 Token 消耗。

## 3. 项目进展
今日共有 **186 个 PR 被合并/关闭**，重点推进了稳定性修复与生态集成：

- **稳定性与核心修复**:
  - [PR #69125](https://github.com/openclaw/openclaw/pull/69125): 修复 TUI 流式监控状态异常，解决了长工具调用时误报空闲的问题。
  - [PR #68986](https://github.com/openclaw/openclaw/pull/68986): 修复助手输出在发送前的规范化处理，解决内容泄露到错误频道的问题。
  - [PR #69144](https://github.com/openclaw/openclaw/pull/69144): 修复更新流程中的文件锁冲突，防止网关崩溃及配置覆盖。
  - [PR #43961](https://github.com/openclaw/openclaw/pull/43961): 优化网关重启逻辑，确保旧进程在超时后被 SIGKILL 强制终止，避免端口占用。

- **功能增强**:
  - [PR #69116](https://github.com/openclaw/openclaw/pull/69116): 新增 **GitHub Copilot SDK** 提供商插件，允许用户直接通过 GitHub Copilot CLI 订阅使用模型，无需额外 API Key。
  - [PR #68967](https://github.com/openclaw/openclaw/pull/68967): 为 Google Chat 增加 `sessionThread` 选项，实现会话与消息线程的绑定，提升多话题处理能力。
  - [PR #10356](https://github.com/openclaw/openclaw/pull/10356): TTS 模组新增 **Typecast** 提供商，支持情感预设与亚洲语言语音调优。

## 4. 社区热点
今日讨论最活跃的议题集中在架构设计与平台支持：

- **[Issue #49971](https://github.com/openclaw/openclaw/issues/49971) [OPEN] RFC: Native Agent Identity & Trust Verification**
  - **热度**: 99 评论
  - **摘要**: 社区正在深入讨论引入原生 Agent 身份认证与信任验证机制。提案涉及 ERC-8004 与 W3C DID 标准，旨在为 Agent 提供加密身份验证，解决当前 Agent 间交互缺乏信任锚点的问题。这标志着 OpenClaw 可能向去中心化身份验证迈出重要一步。

- **[Issue #75](https://github.com/openclaw/openclaw/issues/75) [OPEN] Linux/Windows Clawdbot Apps**
  - **热度**: 86 评论 | 👍: 68
  - **摘要**: 用户强烈呼吁提供 Linux 和 Windows 原生客户端。目前仅有 macOS, iOS 和 Android 客户端。大量用户表示这是阻碍其在桌面环境大规模部署的关键因素。

- **[Issue #65824](https://github.com/openclaw/openclaw/issues/65824) [OPEN] Feature request bundle: 11 platform gaps**
  - **热度**: 6 评论
  - **摘要**: 重度用户总结了 11 项平台功能缺失，涉及 exec 回调、会话管理及 UI 交互等方面，为项目路线图提供了高价值参考。

## 5. Bug 与稳定性
今日报告了多起影响用户体验的回归问题，部分已有修复方案：

- **[P0] CLI 命令无限挂起 (Regression)**
  - [Issue #62335](https://github.com/openclaw/openclaw/issues/62335): 升级至 2026.4.5 后，`openclaw devices list` 等命令无限挂起且无法通过 Ctrl+C 中断。
  - **状态**: Open，暂无合并修复。

- **[P1] 内容泄露到消息频道**
  - [Issue #25592](https://github.com/openclaw/openclaw/issues/25592): Agent 在工具调用间的内部思考文本（如错误处理、中间步骤）错误地发送到了 Slack/iMessage 等渠道。
  - **修复进展**: [PR #68986](https://github.com/openclaw/openclaw/pull/68986) 已提交修复，正待合并。

- **[P1] Telegram 文件传输死锁**
  - [Issue #27984](https://github.com/openclaw/openclaw/issues/27984): 发送 5-20MB 文件导致网关永久死锁，阻塞整个会话。

- **[P2] pnpm install SSH 密钥验证失败 (Regression)**
  - [Issue #50294](https://github.com/openclaw/openclaw/issues/50294): 部署最新源码时，克隆私有依赖失败。

- **[P2] Google Chat 渠道损坏 (Regression)**
  - [Issue #33256](https://github.com/openclaw/openclaw/issues/33256): 升级后 Webhook 返回 401。

## 6. 功能请求与路线图信号
- **身份认证体系**: Issue #49971 的讨论表明社区希望引入去中心化身份（DID）以增强 Agent 间的可信交互，这可能成为下一个大版本的核心特性。
- **免费模型接入**: PR #69116 提议集成 GitHub Copilot SDK，若合并将大幅降低用户试用门槛，无需自备 API Key。
- **执行器安全增强**: [PR #63680](https://github.com/openclaw/openclaw/pull/63680) 提议禁止 Exec 审批的自我批准，安全性进一步加强。

## 7. 用户反馈摘要
- **痛点**:
  - **更新稳定性**: 多个 Issue (#62335, #33256, #20568) 反映升级后出现功能回退，用户对频繁的 Regression 表示担忧。
  - **平台覆盖**: Windows/Linux 客户端的缺失是桌面端用户最大的痛点 (#75)。
  - **输出干扰**: 内部思考泄露到用户界面严重影响终端用户体验 (#25592, #26466)。
- **满意点**:
  - 社区对新增 Typecast TTS 和 Copilot SDK 支持反响热烈。
  - 快速的 PR 响应（如几小时内修复 TUI 问题）获得好评。

## 8. 待处理积压
- **[Issue #75](https://github.com/openclaw/openclaw/issues/75)**: Linux/Windows 客户端需求长期悬而未决（创建于 2026-01-01），建议维护者评估跨平台桌面方案的优先级。
- **[Issue #33086](https://github.com/openclaw/openclaw/issues/33086)**: SSRF 防护导致特定网络环境（Clash Verge TUN 模式）下无法加载 Discord 资源，长期未解决，影响代理用户。
- **[Issue #21097](https://github.com/openclaw/openclaw/issues/21097)**: 单 Agent 配置不支持 `thinkingDefault`，限制了多模型混用场景的灵活性。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-04-20)

## 1. 生态全景
当前开源 AI 智能体生态正处于**功能快速迭代与架构深度重构并存**的关键时期。头部项目（如 OpenClaw, NanoBot）正从单一的对话模型向具备复杂工具调用能力、多模型容错及去中心化身份认证的自主智能体演进，安全性（SSRF/沙箱）与多平台适配成为竞争焦点。同时，"多模型支持"已从加分项变为必选项，各项目都在积极解除对单一模型（如 Claude/OpenAI）的依赖，转向模型无关架构。社区对生产级稳定性的诉求日益强烈，回归问题频发与配置体验割裂成为当前生态的主要痛点。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新/合并 | Release 情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500+ | 500+ (186 merged) | v2026.4.19-beta.2 | 🟢 **极高活跃**：迭代极快，社区响应迅速，但回归问题需关注。 |
| **NanoBot** | - | 161 (27 merged) | 无 | 🟡 **高活跃/积压**：核心开发活跃，但 134 个 PR 待合并，审查需提速。 |
| **Zeroclaw** | 48 | 46 (15 merged) | v0.7.3 (重大重构) | 🟢 **健康**：架构重构完成，正修复回归问题，迈向模块化。 |
| **IronClaw** | - | 50 (多个重建) | 无 | 🟢 **高活跃**：架构重构期，Engine v2 推进顺利，自主能力增强。 |
| **LobsterAI** | - | 42 (32 merged) | 无 (Release 分支待发) | 🟢 **健康**：发布前夕的稳定性攻坚阶段，修复集中。 |
| **CoPaw** | 21 | 17 open | 无 | 🟡 **中高/重构**：核心功能重构中，Bug 修复及时，本地化体验待提升。 |
| **Hermes Agent**| 50 | 50 (19 merged) | 无 | 🟢 **健康**：多模型适配积极，性能优化成效显著。 |
| **PicoClaw** | 12 | 11 | nightly v0.2.6 | 🟠 **风险**：新版本引入严重 API Key 丢失 Bug，稳定性堪忧。 |
| **NanoClaw** | - | 15 (4 merged) | 无 | 🟡 **中等**：多模型扩展中，核心功能（如 Web 端）尚在补齐。 |
| **NullClaw** | - | 10 open (0 merged) | 无 | 🟡 **中等/开发中**：架构调整期，PR 积压，边缘计算特色鲜明。 |
| **Moltis** | 2 | 4 merged | 无 | 🟡 **中等**：前端重构重大，但模型适配问题暴露兼容性短板。 |
| **TinyClaw** | 2 | 0 | 无 | 🔴 **停滞/预警**：核心功能损坏且无修复响应，维护力度极低。 |

## 3. OpenClaw 在生态中的定位

**生态领头羊与特性风向标**：
- **优势**：OpenClaw 拥有压倒性的社区活跃度（日更 500+），是生态中迭代速度最快、功能覆盖最广的项目。其率先提出的 **Agent 身份认证 (DID/ERC-8004)** RFC (#49971) 和嵌套 Agent 作用域隔离，定义了智能体信任与协作架构的高级形态。
- **技术路线**：走"大而全"路线，集成 GitHub Copilot SDK、Typecast TTS 等多样化插件，试图构建全栈生态。相比之下，NanoBot 更侧重安全加固，Zeroclaw 侧重微内核架构。
- **劣势与挑战**：快速迭代导致回归问题频发（如 CLI 挂起、特定渠道崩溃），稳定性落后于 LobsterAI 等企业级项目。Windows/Linux 客户端的长期缺位 (#75) 是其相对于跨平台项目（如 NullClaw 支持边缘设备）的显著短板。

## 4. 共同关注的技术方向

1.  **多模型容错与路由**：
    -   **涉及项目**：OpenClaw, NanoBot, NanoClaw, PicoClaw。
    -   **诉求**：社区强烈要求摆脱单一 API 依赖。NanoBot PR #3083 推进 `fallback_models`，PicoClaw PR #2591 引入 FreeRide 故障转移，NanoClaw 提交 OpenAI/Codex 支持。模型后端的热插拔与自动切换已成为标配需求。

2.  **安全沙箱与执行隔离**：
    -   **涉及项目**：NanoBot, Zeroclaw, IronClaw。
    -   **诉求**：随着 Agent 具备代码执行能力，沙箱逃逸风险凸显。NanoBot 修复了 Shell 命令绕过 (#3240)，Zeroclaw 推进 WASM 插件 SSRF 防护 (#5919)，IronClaw 发现并修复 WASM URL 泄露扫描缺陷 (#2676)。

3.  **本地化部署与边缘计算**：
    -   **涉及项目**：NullClaw, Zeroclaw, CoPaw。
    -   **诉求**：用户希望在低配或离线环境运行。NullClaw 优化了树莓派与 PogoPlug 支持，Zeroclaw 支持 Musl/Alpine，CoPaw 用户呼吁解决 Google Fonts 国内访问问题 (#3576)。

## 5. 差异化定位分析

-   **企业级协作 vs 个人极客**：
    -   **LobsterAI** 深耕国内企业 IM 生态（钉钉、飞书、企微、POPO），提供扫码登录与企业级部署，定位为企业内部助手。
    -   **OpenClaw / CoPaw** 则更倾向于通用型个人助手，注重多渠道接入与插件生态。

-   **架构演进路线**：
    -   **Zeroclaw** 选择了激进的 **微内核架构** (v0.7.3)，将功能拆分为独立 Crates，追求极致的模块化与稳定性。
    -   **IronClaw** 专注于 **Engine v2** 与内置浏览器工具，试图打造具备网页交互能力的自主智能体。
    -   **NullClaw** 定位轻量级，专注于 **边缘设备**（无 RTC 硬件支持）与 VPN 组网，适合物联网场景。

-   **技术栈偏好**：
    -   **Moltis** 押注 **TypeScript + Rust** 前后端分离架构，前端重写为 TS/JSX，强调类型安全。
    -   **NanoBot** 深度绑定 Python 生态，强调数据科学背景（HKUDS 背景）。

## 6. 社区热度与成熟度

-   **快速迭代期**：
    -   OpenClaw, NanoBot, IronClaw。特征：PR/Issue 数量巨大，功能日新月异，但 Bug 率较高，适合尝鲜与技术贡献者。

-   **质量巩固期**：
    -   LobsterAI, Hermes Agent, Zeroclaw。特征：近期 PR 多集中于 Bug 修复、性能优化与架构重构，版本发布谨慎，适合生产环境部署。

-   **探索/起步期**：
    -   NanoClaw, PicoClaw, Moltis。特征：核心功能尚在补齐（如 Web UI、多模型支持），架构调整频繁，存在阻塞性 Bug。

-   **维护停滞预警**：
    -   TinyClaw。特征：核心功能损坏无响应，社区活跃度极低，建议开发者谨慎采用。

## 7. 值得关注的趋势信号

1.  **Agent 身份验证成为新高地**：
    OpenClaw 的 DID 身份认证 RFC (#49971) 预示着智能体将从"匿名工具"转向"实名实体"。这将为跨 Agent 协作、可信支付与权限管理奠定基础，开发者应关注 W3C DID 标准在智能体中的应用。

2.  **浏览器工具化**：
    IronClaw 提出的内置浏览器工具提案 (#2360) 标志着智能体正在突破 API 限制，直接通过 CDP 协议操作网页。这意味着未来的 AI 助手将具备更强的"行动力"，能够处理动态网页交互，而不仅仅是调用 API。

3.  **回归问题引发信任危机**：
    多个项目（OpenClaw, PicoClaw, CoPaw）均出现严重回归 Bug（CLI 挂起、API Key 丢失、认证失效）。这反映出当前生态普遍缺乏完善的 E2E 自动化测试。对于开发者而言，**引入自动化回归测试框架**已刻不容缓；对于用户而言，版本升级需极度谨慎。

4.  **对国内用户环境的适应性**：
    CoPaw (#3576)、NanoBot (DeepSeek 适配)、LobsterAI (POPO/钉钉) 的动态显示出国内开源生态的特殊需求：**本地模型适配（DeepSeek/Qwen）、国内网络环境优化、企业级 IM 集成**。项目若想在国内普及，这三点是必修课。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-20)

## 1. 今日速览
NanoBot 项目今日处于极高活跃度状态，过去24小时内 PR 更新量高达 161 条，显示出社区开发迭代节奏极快。项目当前重心集中在 **系统安全加固**（特别是 Shell 执行与 SSRF 防护）、**Telegram 通道优化** 以及 **Agent 核心循环的健壮性** 上。虽然今日无正式版本发布，但大量修复 PR 已提交待合并，尤其是针对 API 故障转移和会话持久化的改进，表明项目正在为下一个稳定版本做大量铺垫。社区反馈积极响应了用户关于“状态黑盒”和“模型兼容性”的痛点。

## 2. 版本发布
*   **无新版本发布**。当前主要代码变动集中在主分支的 PR 审核与合并中，预计大量积累的修复将包含在未来的下一次版本更新中。

## 3. 项目进展
今日共有 27 个 PR 被合并或关闭，主要进展如下：

*   **基础设施与监控**：PR #2625 [CLOSED] 合并了 HTTP 健康检查端点功能，使得 NanoBot 实例更易于被容器编排系统监控。
*   **交互体验增强**：PR #1273 [CLOSED] 完成了 Telegram 内联键盘功能，解决了多选题交互的 UI 痛点。
*   **安全防护升级**：贡献者 `@mohamed-elkholy95` 提交了系列安全修复 PR（#3235, #3240, #3252），修复了 DNS 解析失败时的 Fail-Open 问题、Shell 命令绕过漏洞及非 HTTP 协议的 SSRF 扫描盲点，显著提升了执行环境安全性。
*   **核心稳定性修复**：PR #3321 提出修复子代理结果会话键不匹配问题，PR #3320 修复了 Cron 任务泄露中间过程输出的 Bug，提升了生产环境下的可靠性。
*   **模型容错能力**：PR #3083 正在推进 `fallback_models` 功能，旨在解决单一模型 API 故障导致的服务不可用问题，支持跨 Provider 切换。

## 4. 社区热点
*   **Issue #3107 (Open)**: 用户 `@aiguozhi123456` 提出的综合性建议帖引发共鸣，涵盖状态显示、Session History 提示、Retry 终止提示等。维护者已勾选完成了部分功能，显示项目组对用户“黑盒体验”反馈的高度重视。
    *   链接: [HKUDS/nanobot Issue #3107](https://github.com/HKUDS/nanobot/issues/3107)
*   **PR #3083 (Open)**: 关于自动模型故障转移的讨论。这是目前生产环境最迫切需求的功能之一，有望解决 LLM API 不稳定的核心痛点。
    *   链接: [HKUDS/nanobot PR #3083](https://github.com/HKUDS/nanobot/pull/3083)
*   **Issue #3073 (Open)**: Agent 在读取 `history.jsonl` 时陷入无限循环的 Bug 报告。该问题涉及 Agent 核心逻辑的终止条件，引发了关于 Agent 稳定性的深入讨论。
    *   链接: [HKUDS/nanobot Issue #3073](https://github.com/HKUDS/nanobot/issues/3073)

## 5. Bug 与稳定性
今日报告了多个影响使用体验的关键 Bug，部分已有对应修复方案：

*   **[严重] Agent 无限循环 (Issue #3073)**: Agent 在处理特定查询时陷入 `read_file` 死循环，无法产出结果。目前 Issue 仍处于 Open 状态，需关注其对系统资源消耗的影响。
    *   链接: [HKUDS/nanobot Issue #3073](https://github.com/HKUDS/nanobot/issues/3073)
*   **[中等] Cron 任务信息泄露 (Issue #3319)**: Cron 任务在评估器决策前会将中间工具提示发送至用户通道。已有修复 PR #3320 提交。
    *   Issue: [HKUDS/nanobot Issue #3319](https://github.com/HKUDS/nanobot/issues/3319)
    *   Fix PR: [HKUDS/nanobot PR #3320](https://github.com/HKUDS/nanobot/pull/3320)
*   **[中等] Telegram 消息溢出 (Issue #3315)**: 模型回复流式传输过长内容时，Telegram Bot 报错。已有修复 PR #3316 提交，通过转换 Markdown 为 HTML 并动态分割解决。
    *   Issue: [HKUDS/nanobot Issue #3315](https://github.com/HKUDS/nanobot/issues/3315)
    *   Fix PR: [HKUDS/nanobot PR #3316](https://github.com/HKUDS/nanobot/pull/3316)
*   **[已修复] DeepSeek API 不兼容 (Issue #3300)**: 用户反馈 Deepseek v3.2 配置问题。该 Issue 已关闭，推测已通过配置指引或代码调整解决。
    *   链接: [HKUDS/nanobot Issue #3300](https://github.com/HKUDS/nanobot/issues/3300)

## 6. 功能请求与路线图信号
*   **语音交互延迟监控 (Issue #3257)**: 用户请求增加 STT → LLM → TTS 全链路延迟指标，以便排查语音交互慢的瓶颈。这标志着 NanoBot 正在向更复杂的交互场景扩展。
*   **模型自动故障转移 (PR #3083)**: 用户强烈希望能配置备用模型。此 PR 若合并，将极大提升服务可用性，建议纳入下一版本核心 Roadmap。
*   **插件系统 (Issue #2231)**: 延续已久的插件化诉求，希望支持类似 Copilot CLI 的扩展机制。虽然目前讨论较少，但这是扩展生态的关键。

## 7. 用户反馈摘要
*   **痛点：状态可见性差**：多位用户在 Issue #3107 中反馈 Agent 运行状态像个“黑盒”，无法感知任务进度或重试状态。
*   **痛点：API 兼容性与稳定性**：用户在使用 DeepSeek、Gemini 等第三方模型时遇到配置错误或认证冲突（#3206, #3300），显示出对非 OpenAI 模型的适配仍需完善。
*   **场景：语音交互**：有用户已在本地部署 STT/TTS 方案，但遭遇高达 35-60s 的延迟，急需性能分析工具支持。
*   **满意度**：用户对 Telegram 集成关注度极高，相关 Issue 和 PR 数量较多，显示这是目前最活跃的使用渠道。

## 8. 待处理积压
*   **PR 积压严重**：目前有 **134 个待合并 PR**，其中包含大量安全修复和功能增强。建议维护者尽快安排 Review，尤其是安全相关的 PR (#3255, #3240)，以免长期积累导致冲突。
*   **长期未决 Issue**：Issue #2220 关于使用 `ContextVar` 优化工具路由上下文的提案自 3 月提出至今，虽有活跃更新但尚未关闭，需确认是否会被合并。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 (2026-04-20)

## 1. 今日速览
Zeroclaw 项目今日处于高活跃状态，过去24小时内 Issues 更新达 48 条，PR 更新达 46 条。项目刚刚发布了 **v0.7.3** 正式版，被称为"历史上最大的结构性变革"，完成了 Cargo workspace 的拆分与新配置 schema 的迁移。社区方面，关于微内核架构转型的 RFC 讨论热烈，同时 v0.7.4 的里程碑规划已启动。整体来看，项目正处于架构重构后的稳定期，核心团队正集中精力修复重构带来的 CI 问题与回归 Bug。

## 2. 版本发布
### **v0.7.3 (Stable)**
本次更新是 Zeroclaw 历史上最大的结构性重构版本，主要内容如下：
- **架构重构**：代码库已完全拆分为专注于单一功能的 Cargo workspace crates，提升了模块化程度。
- **配置变更**：引入了新的配置 schema，支持实时迁移。
- **影响范围**：由于涉及结构性大改，可能存在潜在的回归问题，建议升级前备份配置文件。

此外，还发布了 **v0.7.3-beta.1051** 测试版本。

## 3. 项目进展
今日共有 15 个 PR 被合并或关闭，项目在基础设施与多平台支持上取得显著进展：
- **多平台支持**：PR #5739 合并了 Musl/Alpine Linux 构建支持，这对轻量级容器化部署至关重要；PR #5931 新增了树莓派交叉编译链接配置。
- **Bug 修复**：Issue #4866 中提到的 Web Dashboard 不可用问题已在近期提交中修复并关闭。
- **功能增强**：PR #5712 为不支持 IDLE 的邮件服务器添加了 IMAP 轮询回退机制。
- **CI/CD 优化**：PR #5922 与 #5925 正在清理危险或冗余的工作流，并强制执行 Action 版本固定策略，提升了供应链安全性。

## 4. 社区热点
今日讨论最活跃的 Issue 集中在架构设计与运行时安全领域：
- **[#5574 [CLOSED]](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) RFC: ZeroClaw 微内核转型**：评论数 9。该 RFC 已被接受，标志着项目将向更模块化、更稳定的微内核架构演进，社区对这一长远规划反应积极。
- **[#5719 [OPEN]](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) Runtime 安全性与 Shell 执行问题**：评论数 10。用户 @perlowja 报告在 `native` 模式下仍被 Docker 沙箱限制，引发了对生产环境 Skill 执行策略的深入讨论。
- **[#5877 [OPEN]](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) v0.7.4 里程碑追踪**：评论数 5。维护者正在规划下一版本的功能，包括 Changelog 生成 Skill 和 WASM 执行桥接。

## 5. Bug 与稳定性
今日报告了多个影响工作流的关键 Bug，尤其是配置与容器化场景：
- **[S1 - 阻塞] [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) Provider 忽略 llamacpp 配置**：用户反馈配置文件中的 `llamacpp` 对象被忽略，导致模型加载异常，目前暂无修复 PR。
- **[S1 - 阻塞] [#5811](https://github.com/zeroclaw-labs/zeroclaw/issues/5811) CI 发布失败**：由于微内核拆分，根 crate 无法发布到 crates.io，阻塞了自动化发布流程。
- **[S2 - 降级] [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) MCP 孤儿进程累积**：开启心跳检测会导致 MCP stdio 子进程泄漏，每个 tick 产生一个孤儿进程。
- **[S2 - 降级] [#5897](https://github.com/zeroclaw-labs/zeroclaw/issues/5897) Telegram 图片流处理错误**：非视觉模型接收图片时报错，未能提前进行能力守卫。

## 6. 功能请求与路线图信号
结合 Issue 与 PR 动态，以下功能信号强烈：
- **全双工语音交互**：Issue [#5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896) 提出支持打断式语音对话，社区对此需求较高。
- **多智能体路由**：Issue [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) 持续活跃，配合已接受的微内核 RFC，多智能体架构有望在 v0.7.x 后期落地。
- **安全沙箱增强**：Issue [#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919) 和 [#5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5918) 提出了针对 WASM 插件的 SSRF 防护和环境变量读取白名单，显示项目正在加固插件系统的安全性。

## 7. 用户反馈摘要
- **配置迁移痛点**：v0.7.3 的大规模重构导致部分用户配置失效（如 #5815 llamacpp 问题），用户呼吁更好的向后兼容性或迁移文档。
- **容器化体验不佳**：Docker 用户反馈 Web Dashboard 构建提示 (#4866) 和本地服务连接问题 (#5552 PR 中提到的 localhost 问题）影响了开箱即用体验。
- **Memory 权重问题**：Issue #5844 指出 Memory 在上下文检索中权重过高，导致 Agent 在执行定时任务时被历史记忆干扰，忽视当前指令。

## 8. 待处理积压
- **[#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) 多智能体路由**：作为高需求功能，长期未彻底解决，随着架构重构完成，建议优先排期。
- **[#4352](https://github.com/zeroclaw-labs/zeroclaw/issues/4352) GitHub 集成工具**：社区贡献者提交的功能请求，目前标记为 `help wanted`，需核心团队关注。
- **[#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704) 树莓派部署指南**：硬件资源受限场景下的部署文档需求，配合今日的交叉编译 PR (#5931)，是完善边缘计算支持的好机会。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-04-20)

## 1. 今日速览
Hermes Agent 项目今日保持高活跃度，共处理了 50 个 Issue 更新和 50 个 PR 更新。尽管未发布新版本，但社区贡献集中在多平台适配与核心性能优化上。维护者关闭了多个与 Provider 认证及集成相关的高优先级 Issue，显示出对稳定性的持续投入。今日共有 19 个 PR 被合并或关闭，重点修复了 DingTalk 适配器、CI 流水线阻塞及 Gemini 模型支持等问题。整体来看，项目处于积极迭代阶段，正在解决多模型兼容性和运行时性能瓶颈。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并/关闭的 PR 显著提升了项目的稳定性与兼容性：

*   **性能优化突破**：PR #12765 修复了 CI 阻塞问题，并发现并移除了 Agent 初始化时向 Z.AI 端点发送的无效探测请求，为每个 Agent 实例节省了约 2 秒的启动延迟。
*   **通信平台适配修复**：PR #8954 和 #8957 彻底重构了 DingTalk 适配器，修复了异步调用兼容性及 Webhook 校验问题，恢复了钉钉集成功能的可用性。
*   **模型支持扩展**：PR #12776 修复了 Gemini 3 Preview 模型的选择器支持，解决了用户无法使用最新 Gemini 模型的困扰。

今日进展表明项目正在积极偿还技术债务，尤其是针对多云服务商（AWS Bedrock, Google Gemini）和通信网关的兼容性修复。

## 4. 社区热点
今日社区讨论焦点集中在模型提供商集成与认证问题上：

*   **Issue #6475 [CLOSED]**: Anthropic Claude 订阅认证失效问题获得 14 个点赞和 12 条评论。该问题导致用户即便有订阅额度也无法使用，反映出社区对官方 API 认证机制稳定性的高度关注。
*   **Issue #4983 [CLOSED]**: 原生 Google GenAI Provider 支持引发 12 条讨论。用户希望通过原生支持绕过 OpenAI 兼容层的不稳定性，这表明多模型无缝切换仍是核心需求。
*   **Issue #1501 [OPEN]**: 关于增加 Langfuse 追踪功能的请求引起关注。随着 Hermes 在生产环境中的应用增加，用户对 Agent 执行链的可观测性需求日益迫切。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的关键 Bug，部分已有修复方案：

*   **严重**:
    *   **Session 数据损坏**: Issue #12731 指出会话压缩功能会截断 `tool_call` 的 JSON 参数，导致后续请求失败。目前已有 PR #12783 提交修复，正在审查中。
    *   **TUI 内存溢出**: Issue #12682 报告 TUI 模式在长时间运行后会因 Node.js 堆内存耗尽而崩溃，目前暂无修复 PR。
*   **中等**:
    *   **Discord 线程回复失效**: Issue #12750 报告 Discord Bot 不再创建线程回复，导致频道信息混乱。PR #12780 已提交修复。
    *   **Bedrock 模型 ID 解析错误**: Issue #12727 反映 `normalize_model_name()` 函数错误地将 Bedrock ID 中的点替换为连字符。PR #12778 已针对此问题提交修复。
*   **已修复**:
    *   Issue #6475 (Claude 订阅认证) 已关闭。
    *   Issue #9125 (Kimi 模型辅助调用温度参数错误) 已关闭。

## 6. 功能请求与路线图信号
*   **多 Agent 架构演进**: Issue #9514 提议 "单守护进程多 Agent" 模式，旨在解决当前每个 Agent 需独立进程导致的资源消耗问题。这可能是未来架构升级的重要方向。
*   **Windows 原生支持**: PR #12789 提交了对 Windows 原生环境的广泛支持修复，预示着项目正努力摆脱对 WSL 的强依赖，扩大用户群体。
*   **Webhook 增强**: Issue #12788 请求为 Webhook 路由增加独立的模型/提供商覆盖配置，这表明 Hermes 正被更广泛地用于多租户或多场景自动化集成。

## 7. 用户反馈摘要
*   **Docker 权限困扰**: Issue #1947 显示用户在 Docker 环境下因权限问题无法使用 `apt`，文档指引缺失导致用户体验受阻。
*   **Provider 配置复杂性**: 多个 Issue (#12639, #12638) 反映在配置自定义 Provider 或特定模型（如 Gemini, Vision）时，路由逻辑经常出现误判或配置不生效的情况，用户期望更直观的配置体验。
*   **资源占用敏感**: Issue #6839 指出全量 Tool Schema 注入导致 Token 消耗巨大，用户呼吁按需加载机制，反映在成本控制上的强烈诉求。

## 8. 待处理积压
*   **Issue #1501**: 生产级可观测性支持，目前仅 4 条评论，但对企业级用户至关重要，建议维护者评估优先级。
*   **Issue #2761**: `hermes tools disable memory` 命令无效问题长期未解决，影响用户对工具链管理的信心。
*   **PR #12789**: Windows 原生支持修复已提交，建议尽快合并以扩大社区受众。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-20)

## 1. 今日速览
PicoClaw 项目今日保持高度活跃，** nightly 构建版本已更新至 v0.2.6**。社区互动频繁，过去 24 小时内有 12 条 Issue 更新和 11 条 PR 更新，显示项目正处于快速迭代期。开发重心集中在**架构重构**（引入 FreeRide 故障转移、Provider 层重构）和**安全性加固**（WebSocket 鉴权）。虽然修复了部分 Ollama 兼容性问题，但 v0.2.6 版本引入了严重的 API Key 丢失回归问题，需引起开发者注意。

## 2. 版本发布
- **[nightly] Nightly Build (v0.2.6-nightly.20260420.6126ede9)**
  - **更新说明**：自动化构建版本，包含最新的代码提交。
  - **变更范围**：对比 v0.2.6 版本，涵盖了近期所有的重构与修复。
  - **注意**：此为不稳定版本，仅供测试使用。
  - **链接**：[Release Note](https://github.com/sipeed/picoclaw/releases)

## 3. 项目进展
今日项目在功能增强与架构优化方面有显著推进，主要体现在以下方面：
- **架构升级与故障转移**：PR #2591 提交了 **FreeRide 智能模型故障转移系统**，旨在主模型不可用时动态切换至免费 LLM 提供商，这将显著提升服务的可用性。
- **安全性加固**：PR #2545 正在重构 WebSocket 鉴权机制，旨在通过 Launcher 代理和同源检查来保护 Pico WebSocket 接入，防止潜在的 CSRF/CSWSH 攻击。
- **代码质量与依赖更新**：PR #2592 更新了前端路由和 Lint 工具链；PR #2586 对 Provider 包进行了函数去重优化，提升了代码可维护性。
- **问题修复**：Issue #2583（Ollama 兼容性问题）已关闭，表明针对特定模型的适配问题已得到解决。

## 4. 社区热点
今日社区讨论最活跃的议题主要集中在架构重构与现有缺陷排查：
- **[Issue #2171]**：关于迁移 OpenAI 端点至 Responses API 的重构讨论，获得 7 条评论。这表明项目正在紧跟上游 API 的最佳实践，未来可能对 OpenAI 系模型的调用方式产生深远影响。
  - 链接：[sipeed/picoclaw Issue #2171](https://github.com/sipeed/picoclaw/issues/2171)
- **[Issue #2583]**：Ollama 模型（qwen3.5/gemma4）无法工作的问题引发关注，已确认并由维护者关闭，反映出社区对本地模型支持的依赖。
  - 链接：[sipeed/picoclaw Issue #2583](https://github.com/sipeed/picoclaw/issues/2583)

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，按严重程度排序如下：
- **🔴 严重**：
  - **[Issue #2578] API Key 静默丢失**：v0.2.6 版本中 `openai_compat` provider 无法发送 Authorization header，导致所有基于 HTTP 的模型凭证失效。目前尚无修复 PR 合并，建议受影响用户暂时回退版本。
    - 链接：[sipeed/picoclaw Issue #2578](https://github.com/sipeed/picoclaw/issues/2578)
- **🟠 中等**：
  - **[Issue #2584] DeepSeek Provider 401 错误**：即使 API Key 有效，依然返回 "Authentication Fails (governor)"，影响特定 Provider 的正常使用。
    - 链接：[sipeed/picoclaw Issue #2584](https://github.com/sipeed/picoclaw/issues/2584)
  - **[Issue #2590] Android 端服务无法启动**：二进制文件无法在 Android 环境执行，阻断了移动端用户的使用。
    - 链接：[sipeed/picoclaw Issue #2590](https://github.com/sipeed/picoclaw/issues/2590)
  - **[Issue #2310] WebUI 历史记录丢失**：会话记录仅保存最后一两条，严重影响用户体验和可追溯性。
    - 链接：[sipeed/picoclaw Issue #2310](https://github.com/sipeed/picoclaw/issues/2310)

## 6. 功能请求与路线图信号
- **智能故障转移**：PR #2591 显示项目正在集成 FreeRide 系统，这可能成为下一版本的核心特性，用于解决单一 Provider 不稳定的问题。
- **WebUI 增强**：用户强烈请求**Token 消耗统计看板** (Issue #2217) 和**模型思维链 内容展示** (Issue #2216)，这些是提升 AI 助手可观测性的关键功能，有望在 WebUI 重构中纳入。
- **多渠道支持**：Issue #2261 提出了集成 Zalo Chat 的需求，显示项目有向更多即时通讯平台扩展的趋势。
- **模型配置重构**：Issue #2321 提议引入 Provider 级别的配置管理，解决重复配置痛点，这是提升配置体验的重要信号。

## 7. 用户反馈摘要
- **痛点**：v0.2.6 版本的稳定性受到质疑，特别是 API Key 丢失和认证失败问题让部分用户无法正常使用。
- **场景**：用户广泛使用 PicoClaw 接入 Ollama、DeepSeek 和 OpenAI 兼容 API，对多模型切换的稳定性有极高要求。
- **体验**：WebUI 的会话持久化体验不佳，历史记录不完整是目前最大的槽点。此外，Android 端用户遇到了启动障碍。

## 8. 待处理积压
- **[PR #2313] 多用户支持与安全加固**：该 PR 涉及重大架构变更，已提交半月有余但仍未合并，可能存在复杂的审查或测试需求，建议维护者尽快推进或更新状态。
  - 链接：[sipeed/picoclaw PR #2313](https://github.com/sipeed/picoclaw/pull/2313)
- **[Issue #2237] 飞书接入问题**：该 Bug 报告已存在近 20 天，尚未有明确解决方案，影响国内用户飞书集成体验。
  - 链接：[sipeed/picoclaw Issue #2237](https://github.com/sipeed/picoclaw/issues/2237)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-20)

## 1. 今日速览
NanoClaw 项目今日保持高活跃度开发状态，社区贡献集中于**多模型支持**与**基础设施增强**。虽然过去24小时无新版本发布，但共有 15 个 PR 更新，其中待合并 PR 高达 11 个，显示出功能迭代正在密集收敛中。项目在集成 OpenAI、Codex 及 Ollama 等异构模型方面取得显著进展，同时 Web 端交互与安全性控制也在同步完善。整体来看，项目正处于从单一 Claude 依赖向多模型 AI 智能体平台演进的关键阶段。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日共有 4 个 PR 被合并或关闭，主要集中在用户体验修复与业务逻辑优化：

*   **Telegram 交互体验优化**：PR [#1861](https://github.com/qwibitai/nanoclaw/pull/1861) 与 [#1860](https://github.com/qwibitai/nanoclaw/pull/1860) 均针对 Telegram 频道长任务处理时的“输入指示器超时”问题，引入了 4 秒心跳机制，解决了用户在代理思考过程中无法区分“卡死”与“运行中”的痛点。
*   **业务流程修复**：PR [#1871](https://github.com/qwibitai/nanoclaw/pull/1871) 修复了预订系统中所有者邮件通知退信问题，并增加了防垃圾机器人校验，提升了生产环境下的可用性。
*   **Web 频道迭代**：PR [#1862](https://github.com/qwibitai/nanoclaw/pull/1862) 被关闭，随即开启了功能更完善的 [#1863](https://github.com/qwibitai/nanoclaw/pull/1863)，显示了开发者在 Web 端接入方案上的快速迭代。

## 4. 社区热点
今日讨论焦点集中在**模型提供商的扩展**与**环境配置的灵活性**：

*   **多模型支持竞争激烈**：
    *   PR [#1774](https://github.com/qwibitai/nanoclaw/pull/1774) (OpenAI 支持) 与 PR [#1843](https://github.com/qwibitai/nanoclaw/pull/1843) (Codex 支持) 备受关注。社区正试图打破 NanoClaw 仅依赖 Claude SDK 的局面，引入 GPT-5.4 nano/mini 及 OpenAI Codex 作为替代运行时，这显示了项目向"模型无关"架构转型的强烈诉求。
    *   PR [#1859](https://github.com/qwibitai/nanoclaw/pull/1859) 提出了本地 Ollama 集成方案，进一步降低了本地部署成本。
*   **环境变量注入需求**：
    *   Issue [#1867](https://github.com/qwibitai/nanoclaw/issues/1867) 提出了容器化环境下传递自定义环境变量的需求，反映了用户在集成第三方自托管后端时的配置痛点。

## 5. Bug 与稳定性
本日报告并处理了若干影响用户体验的 Bug，暂无严重崩溃报告：

*   **中等 - 助手身份识别错误**：
    *   Issue [#1870](https://github.com/qwibitai/nanoclaw/issues/1870) 指出 `ASSISTANT_NAME` 配置未在频道技能组注册时生效，导致机器人仍自称 "Andy"。该问题影响了多租户或定制化部署的品牌一致性。目前暂无关联 Fix PR。
*   **低 - 数据库时间戳格式**：
    *   PR [#1845](https://github.com/qwibitai/nanoclaw/pull/1845) 正在修复自动生成时间戳未标准化为 ISO 8601 的问题，这是 v2 版本迁移中的数据一致性维护。
*   **低 - Fork 同步滞后**：
    *   Issue [#1865](https://github.com/qwibitai/nanoclaw/issues/1865) 显示部分 Fork 分支严重落后于上游，可能导致部署时的兼容性问题。

## 6. 功能请求与路线图信号
通过分析活跃 PR 与 Issues，下一版本路线图显现出清晰的特征：

*   **多模型架构**：随着 OpenAI ([#1774](https://github.com/qwibitai/nanoclaw/pull/1774))、Codex ([#1843](https://github.com/qwibitai/nanoclaw/pull/1843)) 和 Ollama ([#1859](https://github.com/qwibitai/nanoclaw/pull/1859)) 的 PR 提交，项目极可能在下个版本正式支持"模型后端热插拔"。
*   **安全性与控制权**：PR [#1605](https://github.com/qwibitai/nanoclaw/pull/1605) 引入的安全策略引擎与 PR [#1858](https://github.com/qwibitai/nanoclaw/pull/1858) 提出的用户中止流程，标志着项目正在补齐企业级安全控制拼图，满足生产环境对权限控制和任务管理的严格要求。
*   **Web 端接入**：PR [#1863](https://github.com/qwibitai/nanoclaw/pull/1863) 预示着 NanoClaw 将摆脱对即时通讯软件的单一依赖，拥有独立的 Web UI 交互能力。

## 7. 用户反馈摘要
从 Issue 详情中提炼出的用户画像如下：

*   **部署者痛点**：用户 `@dimatosj` 在 [#1867](https://github.com/qwibitai/nanoclaw/issues/1867) 中反映了在容器化环境中注入 API Key 等敏感信息的困难，表明现有配置系统对复杂部署环境（如 Kubernetes）的支持尚显僵化。
*   **定制化需求**：Issue [#1870](https://github.com/qwibitai/nanoclaw/issues/1870) 显示用户对 Agent 的"人格/名称"有强烈的定制需求，目前硬编码或传递链路断裂是主要阻碍。
*   **运维需求**：Issue [#1866](https://github.com/qwibitai/nanoclaw/issues/1866) 提到的 "Headless mode" 部署，表明部分用户希望 NanoClaw 能作为后台服务无界面运行，配合其他系统协同工作。

## 8. 待处理积压
以下重要议题长期未决或处于关键审核期，建议维护者优先关注：

*   **[重要] 安全策略引擎 (PR [#1605](https://github.com/qwibitai/nanoclaw/pull/1605))**：该 PR 创建于 4 月 2 日，涉及敏感的安全策略与权限控制，代码量大且逻辑复杂，急需核心团队进行最终 Review 以合并主分支。
*   **[重要] OpenAI 支持 (PR [#1774](https://github.com/qwibitai/nanoclaw/pull/1774))**：自 4 月 14 日开启，涉及模型切换的核心逻辑，可能需要与后续的 Codex PR 进行架构协调，避免代码冲突。
*   **[待确认] ASSISTANT_NAME Bug (Issue [#1870](https://github.com/qwibitai/nanoclaw/issues/1870))**：今日新开，涉及用户品牌定制体验，目前尚无官方回复或关联 PR，建议尽快排期修复。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-20)

## 1. 今日速览
NullClaw 项目今日处于高强度的开发迭代期，虽然过去 24 小时内无新版本发布且无 PR 合并，但社区贡献活跃度极高，新增了 10 个待合并的 PR，显示出维护者正在进行大规模的架构重构与功能完善。核心关注点集中在 **消息路由架构重构**、**边缘设备稳定性修复** 以及 **Tailscale 集成**。整体来看，项目正从单一功能开发转向系统性的架构优化，尤其在并发处理和硬件兼容性上投入了大量精力。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无合并的 PR，但维护者 @manelsen 提交了一系列关键的架构改进与修复 PR，预示着下一次版本更新将包含重大改进：

*   **架构重构 - 消息路由统一**：维护者提交了 #848 (daemon)、#847 (gateway)、#846 (channel_loop) 三个 PR，旨在统一入站消息的路由逻辑。这将解耦消息处理流程，为后续的并发控制与消息拦截打下基础。
*   **性能与稳定性修复**：针对 Issue #851 报告的 CPU 空转问题，PR #853 引入了 accept 循环退避机制；PR #855 则修复了入站并发与轮次抢占问题，显著提升了会话处理的响应速度与稳定性。
*   **Subagent 修复**：PR #854 修复了 Subagent 无法回传结果的严重 Bug，确保了多智能体协作的可靠性。
*   **嵌入式设备支持**：贡献者 @mark-os 提交了 PR #856，增强了 SysVinit 脚本在无 RTC 硬件（如 PogoPlug）上的可靠性，拓宽了 NullClaw 在物联网/边缘计算场景的应用范围。

## 4. 社区热点
今日讨论最热烈的是 Issue #826 **"How to use nullclaw gateway with Tailscale?"**（评论数 9）。
*   **链接**：[nullclaw/nullclaw Issue #826](https://github.com/nullclaw/nullclaw/issues/826)
*   **分析**：用户在结合 Tailscale 使用 NullClaw Gateway 时遇到隧道启动失败问题。该 Issue 反映出用户对 NullClaw 在复杂网络环境（尤其是 VPN 组网）下的部署有强烈需求。维护者迅速响应，并提交了 PR #850 以支持加密的 Tailscale auth_key，直接回应了社区痛点。

## 5. Bug 与稳定性
今日报告并处理了两个严重的功能性 Bug，均已提交修复 PR：

1.  **[严重] CPU 100% 占用 (Busy-loop)**
    *   **Issue**：[nullclaw/nullclaw Issue #851](https://github.com/nullclaw/nullclaw/issues/851)
    *   **描述**：在树莓派 5 (Debian aarch64) 上，Gateway 进程在空闲状态下因 `accept4()` 返回 `EAGAIN` 导致 CPU 满载。
    *   **修复**：[nullclaw/nullclaw PR #853](https://github.com/nullclaw/nullclaw/pull/853) - 引入了退避机制防止死循环。

2.  **[严重] Subagent 结果丢失**
    *   **Issue**：[nullclaw/nullclaw Issue #849](https://github.com/nullclaw/nullclaw/issues/849)
    *   **描述**：Subagent 执行任务成功但无法将结果回传给主智能体。
    *   **修复**：[nullclaw/nullclaw PR #854](https://github.com/nullclaw/nullclaw/pull/854) - 修正了路由元数据的持久化逻辑。

3.  **[一般] 版本号显示异常**
    *   **Issue**：[nullclaw/nullclaw Issue #821](https://github.com/nullclaw/nullclaw/issues/821) - 从源码编译显示版本为 "dev"。
    *   **状态**：已关闭。

## 6. 功能请求与路线图信号
*   **Tailscale 深度集成**：从 Issue #826 和 PR #850 可以看出，项目计划将 Tailscale 作为 Gateway 的一等公民支持，简化用户在异构网络下的部署。
*   **REST Admin API**：PR #770 提出引入 REST Admin API，支持运行时状态查看、配置读取和定时任务管理。这表明 NullClaw 正在增强可观测性与外部控制能力，未来可能支持更丰富的 GUI 客户端或移动端管理工具。
*   **内存与召回优化**：PR #852 对归档来源和召回质量进行了改进，显示项目在 AI 记忆管理方面持续演进。

## 7. 用户反馈摘要
*   **部署场景多样化**：用户尝试在 Debian VPS、树莓派 5 甚至老旧的 PogoPlug 设备上运行，表明用户群体对轻量级、跨平台的个人 AI 助手有强需求。
*   **网络穿透需求**：用户普遍面临公网访问难题，Tailscale 等 VPN 方案是刚需，社区对这方面的文档引导和自动化配置有较高期待。
*   **版本管理困惑**：Issue #821 反映了源码编译用户对版本标识的困惑，提示项目构建流程可能需要优化版本注入机制。

## 8. 待处理积压
*   **PR 积压严重**：目前有 **10 个待合并的 PR**，涵盖了从底层架构重构到具体 Bug 修复的各个方面。虽然活跃度很高，但缺乏合并动作可能导致代码冲突风险增加（尤其是 #846, #847, #848 这种关联性架构 PR）。建议维护者尽快进行代码审查与合并，或者开启 Draft PR 标识以明确进度。
*   **长期 Issue**：Issue #826 虽然有了解决方案（PR #850），但尚未合并关闭，需持续跟踪。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-20)

## 1. 今日速览
IronClaw 项目今日保持极高的开发活跃度，PR 更新量达 50 条，显示出项目正处于密集迭代期。核心团队正致力于解决 Web Gateway 重构后的合并冲突，多个关键功能 PR 被重建以适配新架构，同时大幅推进了 Engine v2 的后续优化与安全加固。社区方面，关于内置浏览器工具和架构边界治理的讨论引发关注，表明项目正在向更强大的自主代理能力和更健壮的工程化方向发展。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目进展显著，主要集中在架构重构后的功能迁移与稳定性修复：

*   **架构重构与 PR 重建**：随着 Gateway 和 Web Handler 的重构，多个核心 PR 因合并冲突被关闭并重建。包括：
    *   **Web 端聊天标题显示优化**：重建 PR [#2700](https://github.com/nearai/ironclaw/pull/2700)，解决了新对话在侧边栏显示截断哈希 ID 的问题，改为基于对话内容生成描述性标题。
    *   **MCP 服务规范化与修复**：重建 PR [#2699](https://github.com/nearai/ironclaw/pull/2699)，整合了服务名称规范化、UTF-8 截断修复及鉴权逻辑优化。
    *   **安全性增强**：重建 PR [#2698](https://github.com/nearai/ironclaw/pull/2698)，移除了跨租户凭证回退机制，防止潜在的权限越界风险。
*   **Engine v2 持续完善**：
    *   合并了 PR [#2549](https://github.com/nearai/ironclaw/pull/2549)，新增 `mission_get` 动作，允许 LLM 检索任务结果与历史，增强了代理的自主规划能力。
    *   合并了 PR [#2694](https://github.com/nearai/ironclaw/pull/2694)，明确了 Engine v2 的 `ENGINE_V2=true` 启用方式，优化了文档指引。
*   **Bug 修复**：关闭了 Issue [#1947](https://github.com/nearai/ironclaw/issues/1947)，修复了 CLI 中 MCP 工具描述包含多字节 UTF-8 字符时的崩溃问题；关闭了 Issue [#1840](https://github.com/nearai/ironclaw/issues/1840)，修复了 `--cli-only` 模式下意外启动 Webhook 服务器的安全隐患。

## 4. 社区热点
今日讨论最活跃的议题集中在功能扩展与架构治理：

*   **内置浏览器工具提案 ([Issue #2360](https://github.com/nearai/ironclaw/issues/2360))**：
    作者 @ilblackdragon 提议引入基于 `chromiumoxide` CDP 的内置浏览器工具。该功能旨在突破现有 `http` 工具无法处理 JS 渲染页面的限制，使 Agent 能够像真实用户一样交互（填表、点击、读取动态内容）。这标志着 IronClaw 向“全栈自主代理”迈出的关键一步。
*   **架构边界治理 Epic ([Issue #2599](https://github.com/nearai/ironclaw/issues/2599))**：
    @henrypark133 发起了关于强制 Gateway 功能边界、Crate 护栏及独立 E2E 测试的重构计划。意在将单体 Web/Gateway 拆分为有明确依赖限制的功能切片，以提升系统的可维护性与测试覆盖率。这反映了项目在快速迭代后开始偿还技术债务。

## 5. Bug 与稳定性
今日报告了几个关键的高风险问题，需引起注意：

*   **[高风险] WASM URL 泄露扫描逻辑缺陷 ([Issue #2676](https://github.com/nearai/ironclaw/issues/2676))**：
    问题指出 WASM 的 URL 泄露扫描运行在注入后的 URL 上，导致无法检测原始泄露，影响了 Channel 和 Tool 两条路径的安全性。目前尚无关联 Fix PR。
*   **[中风险] Agent 时间报告错误 ([Issue #2697](https://github.com/nearai/ironclaw/issues/2697))**：
    Agent 报告的当前时间比实际慢约 11 分钟，导致基于 `delay_minutes` 的例行程序（如提醒/闹钟）在错误时间触发。这对定时任务类场景影响较大。
*   **[已修复] LLM max_tokens 溢出处理 ([PR #2668](https://github.com/nearai/ironclaw/pull/2668))**：
    针对负数 `max_tokens` 导致的 400 错误进行了修复，将其正确归类为上下文长度错误，触发了自动压缩/重试机制。

## 6. 功能请求与路线图信号
*   **密钥管理 CLI 工具 ([Issue #2600](https://github.com/nearai/ironclaw/issues/2600))**：
    用户 @ek775 反映在配置各类服务鉴权时遇到困难，建议提供 CLI/TUI 工具来管理 Secrets。该 Issue 随后被关闭，可能是因为已有替代方案或被纳入其他重构计划中。
*   **文档上传支持 ([PR #2332](https://github.com/nearai/ironclaw/pull/2332))**：
    正在进行中的 PR，旨在将 Web 端上传功能从仅支持图片扩展为支持 PDF/文档等通用文件，并集成文档提取流程。该功能一旦合并，将极大提升 Agent 处理非结构化数据的能力。
*   **Slack Socket Mode ([PR #1549](https://github.com/nearai/ironclaw/pull/1549))**：
    仍在处理中，旨在支持 Slack 的 Socket Mode 以避免对公网 URL 的依赖，降低部署门槛。

## 7. 用户反馈摘要
*   **UX 痛点**：用户对 Web UI 中新对话显示“十六进制哈希 ID”而非标题感到困惑（已在 PR #2700 修复）；部分用户在配置 Secrets 时感到文档缺失或操作繁琐（Issue #2600）。
*   **稳定性担忧**：E2E 测试中 Telegram 激活流程持续失败（Issue #2624 已关闭，推测已修复或搁置）；时间同步问题影响了例行程序的可靠性（Issue #2697）。
*   **功能期望**：社区对能够操作浏览器的 Agent 功能表现出强烈期待（Issue #2360 的点赞与关注）。

## 8. 待处理积压
以下长期未合并的大型 PR 可能需要更多关注或已处于阻塞状态：

*   **[PR #1378] 按频道路由 MCP 和内置工具过滤**：自 3 月 18 日开启，旨在实现多渠道部署时的工具隔离（如限制 Slack 频道仅访问特定工具）。这是一个大型 PR，对多租户场景至关重要。
*   **[PR #1446] 添加阿里云编码计划支持**：新增 AliyunProvider 支持，目前仍处于 Open 状态，可能需要更多兼容性测试。
*   **[PR #1470] 规范化通知摘要**：涉及大量通知文本和元数据的调整，自 3 月 20 日开启，仍在推进中。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-20)

## 1. 今日速览
LobsterAI 项目今日呈现出极高的开发活跃度，PR 更新量达到 **42 条**，其中 **32 条已合并/关闭**，显示出团队正在密集进行代码整合与功能迭代。虽然没有发布新的版本 Tag，但大量针对 `Release/2026.04.13` 分支的修复与优化已合并，预示着新版本发布在即。社区方面，Issue 互动平稳，主要围绕特定环境下的登录兼容性与 IM 平台适配问题展开。整体来看，项目正处于新版本发布前的稳定性加固阶段，重点攻克了 Windows 构建问题与多平台 IM 适配难题。

## 2. 版本发布
**今日无新版本发布。**
*注：虽无新 Tag 发布，但 PR #1659 (Release/2026.04.13) 的合并表明项目正处于版本发布周期的收尾阶段。*

## 3. 项目进展
今日项目进展迅速，主要集中在 **IM 平台生态扩展**、**启动性能优化** 和 **构建系统修复** 三个方向：

*   **多平台 IM 适配全面推进**：
    *   PR [#1591](https://github.com/netease-youdao/LobsterAI/pull/1591) 合并，实现了钉钉、飞书、QQ、企微、Telegram 和 Discord 的全面适配，显著扩展了项目作为 AI 助手的应用场景。
    *   PR [#1612](https://github.com/netease-youdao/LobsterAI/pull/1612) 新增了 POPO 扫码登录支持，优化了企业内部集成体验。
    *   PR [#1592](https://github.com/netease-youdao/LobsterAI/pull/1592) 修复了微信通道配置问题，稳定了主流 IM 渠道。

*   **启动性能与用户体验优化**：
    *   PR [#1747](https://github.com/netease-youdao/LobsterAI/pull/1747) 引入了启动性能分析器并实施了冷启动优化，旨在降低用户等待时间。
    *   PR [#1748](https://github.com/netease-youdao/LobsterAI/pull/1748) 重构了首次启动流程，新增全屏欢迎引导页，改善了新用户的 Onboarding 体验。

*   **关键缺陷修复与稳定性提升**：
    *   PR [#1650](https://github.com/netease-youdao/LobsterAI/pull/1650) 修复了 OpenClaw 网关在配置热加载时的意外重启问题。
    *   PR [#1647](https://github.com/netease-youdao/LobsterAI/pull/1647) 解决了 MCP Bridge 启动时的 401 认证不匹配问题，提升了连接稳定性。
    *   PR [#1654](https://github.com/netease-youdao/LobsterAI/pull/1654) 修复了模型不可达时会话卡死的严重问题。

*   **构建系统攻坚**：
    *   PR [#1623](https://github.com/netease-youdao/LobsterAI/pull/1623) 和 [#1624](https://github.com/netease-youdao/LobsterAI/pull/1624) 集中修复了 Windows 平台的打包失败问题，并优化了安装包体积（减少约 226MB 冗余 SDK）。

## 4. 社区热点
今日社区讨论主要集中在以下痛点：

*   **OAuth 登录兼容性**：Issue [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) 中，用户请求改进邮箱连接方式，指出目前不支持微软 Outlook 的 OAuth2/新式验证，导致无法连接邮箱。这反映了企业级用户对复杂认证环境的强需求。
*   **特定环境登录失败**：Issue [#1687](https://github.com/netease-youdao/LobsterAI/issues/1687) 反馈在 Deepin V25 系统下浏览器验证码登录失败的问题，目前已被关闭，可能已在近期版本中修复或确认非共性问题。
*   **Telegram 升级兼容**：Issue [#1743](https://github.com/netease-youdao/LobsterAI/issues/1743) 报告了升级后 Telegram 会话命令执行冲突的问题，用户定位精准，该 Issue 已关闭，表明可能已通过 PR 修复。

## 5. Bug 与稳定性
今日修复了多个影响用户体验的 Bug，未发现未解决的高危漏洞：

1.  **[已修复] Windows 构建失败** (严重)：PR [#1623](https://github.com/netease-youdao/LobsterAI/pull/1623) 和 [#1624](https://github.com/netease-youdao/LobsterAI/pull/1624) 解决了 npm v11 兼容性及 Node 24 在 Windows 下的 `spawnSync` 错误，这是阻断版本发布的关键问题。
2.  **[已修复] 会话卡死与生命周期错误** (高)：PR [#1654](https://github.com/netease-youdao/LobsterAI/pull/1654) 修复了模型不可达时会话卡在“执行中”的问题。
3.  **[已修复] 自定义 Agent 人设丢失** (中)：PR [#1651](https://github.com/netease-youdao/LobsterAI/pull/1651) 修复了非主 Agent 因路径不匹配导致无法加载人设文件的问题。
4.  **[待确认] Deepin 系统登录失败** (中)：Issue [#1687](https://github.com/netease-youdao/LobsterAI/issues/1687) 已关闭，需关注后续版本是否复现。

## 6. 功能请求与路线图信号
*   **企业级认证增强**：用户对 Outlook OAuth2 的需求 ([#1745](https://github.com/netease-youdao/LobsterAI/issues/1745)) 表明项目在邮箱连接模块需要跟进现代认证标准。
*   **新手引导重构**：PR [#1748](https://github.com/netease-youdao/LobsterAI/pull/1748) 的合并表明项目正致力于降低新用户上手门槛，这是近期产品侧的重点路线。
*   **性能监控常态化**：PR [#1747](https://github.com/netease-youdao/LobsterAI/pull/1747) 引入的性能分析器，意味着团队开始关注客户端的性能量化监控，这可能是未来版本优化体验的基础设施。

## 7. 用户反馈摘要
*   **痛点**：
    *   部分用户在使用非主流 Linux 发行版（如 Deepin）时遭遇登录网络错误，兼容性有待提升。
    *   邮箱客户端对现代安全认证（OAuth2）支持不足，导致无法连接 Outlook 等服务。
    *   版本升级偶发配置兼容性问题（如 Telegram 路由冲突），升级体验需平滑化。
*   **积极反馈**：
    *   用户对问题的定位非常精准（如 Issue #1743 指出 exec 路由冲突），显示出用户群体具备较高的技术素养，利于项目质量共建。

## 8. 待处理积压
*   **Issue [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) (Outlook OAuth2 支持)**：目前处于 Open 状态，且评论已有 1 条。鉴于 Outlook 用户基数较大，建议维护者优先评估实现难度或提供临时 Workaround。
*   **Issue [#1744](https://github.com/netease-youdao/LobsterAI/issues/1744) (Bug report 文件上传失败)**：疑似为无效 Issue（上传失败），建议维护者及时清理或引导用户重新提交完整信息。
*   **PR [#1747](https://github.com/netease-youdao/LobsterAI/pull/1747) (启动优化)**：目前处于 Open 状态，涉及核心性能指标，建议尽快 Code Review 并合入主分支。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-04-20)

## 1. 今日速览
今日 TinyClaw 项目代码提交与合并活动处于静默状态，无 PR 更新与版本发布。社区交互方面，出现了 2 条新增 Issue，均由用户 @debamitro 提交，集中在安装依赖与核心功能可用性上。虽然开发端无显性进展，但用户反馈指向了较为严重的功能阻断问题，提示项目在“开箱即用”体验上存在稳定性挑战，建议维护团队优先关注高严重级别的 Bug 报告。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
过去 24 小时内无合并或关闭的 PR，项目代码库无实质性向前推进。

## 4. 社区热点
今日无高讨论量的话题，但新增的两条 Issue 反映了用户在部署和初始化阶段的具体痛点：

*   **[Issue #279](https://github.com/TinyAGI/tinyagi/issues/279)**: 报告 Telegram 频道设置功能失效，直接影响相关核心功能的可用性。
*   **[Issue #278](https://github.com/TinyAGI/tinyagi/issues/278)**: 报告安装过程中原生依赖构建问题，影响初次使用体验。

## 5. Bug 与稳定性
今日共报告 2 个 Bug，按严重程度排序如下：

*   **🔴 高危**:
    *   **[Issue #279](https://github.com/TinyAGI/tinyagi/issues/279)**: `[Bug]: channel setup not working`
        *   **组件**: Telegram channel
        *   **详情**: 执行 `telegram channel setup` 指令时返回 "Unknown messaging command: setup" 错误。
        *   **影响**: 核心功能损坏，无临时解决方案，严重阻碍用户使用 Telegram 渠道功能。
        *   **状态**: 待处理 (Open)。

*   **🟡 中危**:
    *   **[Issue #278](https://github.com/TinyAGI/tinyagi/issues/278)**: `[Bug]: better-sqlite3 still needs to be rebuilt`
        *   **组件**: Other (Installation/Dependencies)
        *   **详情**: 即使是全新安装，仍需手动执行 `npm rebuild better-sqlite3` 才能运行。
        *   **影响**: 功能受损但存在变通方案，增加了用户的部署门槛。
        *   **状态**: 待处理 (Open)。

## 6. 功能请求与路线图信号
本日无新功能请求。新增 Issue 均为稳定性修复类，信号表明项目当前的优先级应放在安装流程优化与指令解析逻辑的回归测试上。

## 7. 用户反馈摘要
用户 @debamitro 的反馈揭示了当前版本在**易用性**与**健壮性**方面的不足：
1.  **部署体验欠佳**：用户期望“开箱即用”，但 `better-sqlite3` 的原生模块重建需求表明项目可能存在依赖预编译包缺失或 `package.json` 配置问题。
2.  **核心指令识别异常**：Telegram 频道设置指令失效，可能源于近期代码重构导致的指令注册逻辑缺失或文档滞后。

## 8. 待处理积压
鉴于今日报告了高危且无变通方案的 Bug，建议维护者重点关注以下积压项：

*   **[Issue #279](https://github.com/TinyAGI/tinyagi/issues/279)**: 影响核心功能，需立即确认是否为指令别名变更或解析器逻辑错误。
*   **[Issue #278](https://github.com/TinyAGI/tinyagi/issues/278)**: 需优化安装脚本或提供更清晰的依赖构建文档，降低上手门槛。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-20)

## 1. 今日速览
Moltis 项目今日呈现出“高强度重构、社区反馈集中”的态势。核心开发团队并未发布新版本，而是专注于底层架构的现代化升级，成功合并了 Web UI 向 TypeScript 迁移的重大更新，显著提升了代码的可维护性。与此同时，社区端报告了 2 个与 Google 模型集成相关的 Bug，显示出在多模型适配方面存在稳定性挑战。整体来看，项目正处于“修内功”阶段，技术债务清理进展顺利，但需警惕第三方模型接口变动带来的回归问题。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 4 个 PR 被合并或关闭，项目在代码质量与功能拓展上迈出了坚实的一步：

*   **Web UI 架构重大升级**：PR #775 [CLOSED] 完成了 Web UI 从 JavaScript + HTM 到 TypeScript + JSX (Preact) 的迁移，涉及 142 个文件与约 4.9 万行代码变更。此举将大幅提升前端代码的类型安全性与开发效率，是项目前端架构的重要里程碑。
    *   链接: [moltis-org/moltis PR #775](https://github.com/moltis-org/moltis/pull/775)
*   **搜索能力拓展**：PR #513 [CLOSED] 成功集成了 Jina.ai 作为新的 Web 搜索提供商，丰富了用户的搜索源选择，增强了对不同地区和语言搜索的支持。
    *   链接: [moltis-org/moltis PR #513](https://github.com/moltis-org/moltis/pull/513)
*   **代码健壮性提升**：PR #792 [CLOSED] 为 8 个核心库 Crate 引入了 `thiserror` 错误类型，替代了原本泛用的 `anyhow`，使错误处理更加规范和类型化，有助于提升系统稳定性。
    *   链接: [moltis-org/moltis PR #792](https://github.com/moltis-org/moltis/pull/792)
*   **文档同步更新**：PR #787 [CLOSED] 自动化审计并修复了 4 份过时的文档，确保文档与代码实现的一致性。
    *   链接: [moltis-org/moltis PR #787](https://github.com/moltis-org/moltis/pull/787)

## 4. 社区热点
今日社区关注点主要集中在 Google 模型适配问题上：

*   **Issue #375 [OPEN]**：这是今日互动量最高的 Issue（👍 3，评论 1）。该问题涉及 Google 模型在 Function Call 中缺失 `thought_signature`，引发了用户的讨论。这表明 Moltis 用户群中，使用 Google 后端进行复杂 Agent 任务的比例较高，对模型响应格式的完整性要求严格。
    *   链接: [moltis-org/moltis Issue #375](https://github.com/moltis-org/moltis/issues/375)

## 5. Bug 与稳定性
今日新增/活跃的 Bug 报告主要集中在第三方模型兼容性方面，目前均未有修复 PR 合并：

*   **[高] Issue #793 [OPEN]**：用户报告使用 Openrouter 接入 Google AI Studio 时出现 HTTP 400 错误。这是一个阻断性问题，影响特定渠道用户的正常使用，需排查 API 参数兼容性。
    *   链接: [moltis-org/moltis Issue #793](https://github.com/moltis-org/moltis/issues/793)
*   **[中] Issue #375 [OPEN]**：Google 模型 Function Call 缺失关键字段。虽然热度较高，但属于特定场景下的功能性缺失，影响依赖该字段进行逻辑判断的 Agent 流程。
    *   链接: [moltis-org/moltis Issue #375](https://github.com/moltis-org/moltis/issues/375)

## 6. 功能请求与路线图信号
*   **多模型适配仍是重点**：从今日关闭的 PR #513（Jina.ai 搜索）和开放的 Bug Issues 可以看出，项目路线图正致力于将 Moltis 打造成一个多模型、多数据源的通用 AI 智能体平台。
*   **开发者体验优化**：TypeScript 迁移（PR #775）和错误类型重构（PR #792）显示出维护者正在为项目的长远发展夯实基础，预计下一阶段将会有更多面向开发者的 API 或插件化功能推出。

## 7. 用户反馈摘要
*   **痛点**：用户在使用非 OpenAI 系模型（如 Google 系列）时遇到了兼容性问题，特别是在 Function Calling 和特定 Provider (Openrouter) 的组合使用上，体验尚不完美。
*   **场景**：用户倾向于通过 Openrouter 等聚合平台灵活切换模型，并在 Agent 流程中依赖详细的模型返回字段（如 thought_signature）进行调试或逻辑控制。
*   **期望**：社区期望项目能提供更稳定的跨模型适配能力。

## 8. 待处理积压
*   **Issue #375**：该 Bug 自 3 月 9 日创建至今未关闭，近期虽有活跃但尚未解决。鉴于其已获得 3 个点赞且影响了 Google 模型的核心功能（Function Call），建议维护者优先排期修复。
    *   链接: [moltis-org/moltis Issue #375](https://github.com/moltis-org/moltis/issues/375)
*   **PR #783 [OPEN]**：文档修复 PR 目前处于待合并状态，建议跟进 Review 进度以保持文档的时效性。
    *   链接: [moltis-org/moltis PR #783](https://github.com/moltis-org/moltis/pull/783)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-04-20)

## 1. 今日速览
过去 24 小时，CoPaw (QwenPaw) 项目保持了极高的开发与社区活跃度。虽然未发布新版本，但 **17 个待合并 PR** 显示项目正处于功能迭代与重构的关键阶段，重点覆盖了**长期记忆重构**、**LLM 路由优化**及**前端工程化迁移**。社区反馈方面，共有 **21 条 Issue 更新**，用户对**本地部署体验**（认证绕过、国内资源访问）和**自动化任务流程**（定时任务审批机制）表达了强烈诉求。整体来看，项目核心功能正在向更稳定、更灵活的方向演进，但需关注短期内 Bug 积压对用户体验的影响。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日项目主要在稳定性修复与核心架构升级两方面推进，共有 1 个 PR 关闭/合并（注：数据概览统计），大量核心功能 PR 处于活跃评审中。

*   **🔧 关键修复推进**
    *   **[PR #3553](https://github.com/agentscope-ai/QwenPaw/pull/3553)**: 修复了 Console 频道在处理畸形 Unicode 代理字符时的 SSE 崩溃问题，提升了前端流式传输的鲁棒性。
    *   **[PR #3583](https://github.com/agentscope-ai/QwenPaw/pull/3583)**: 针对 [Issue #3568](https://github.com/agentscope-ai/QwenPaw/issues/3568) 提出的 Skill YAML 格式错误导致系统完全崩溃的问题，增加了错误处理机制，防止异常扩散。

*   **🚀 核心功能重构与新增**
    *   **[PR #3548](https://github.com/agentscope-ai/QwenPaw/pull/3548)**: **重大重构**。重写了长期记忆模块，对齐 As2.0 接口，支持后端无缝切换并兼容旧版接口，这将显著增强 Agent 的上下文感知能力。
    *   **[PR #3365](https://github.com/agentscope-ai/QwenPaw/pull/3365)**: 新增 Agent 统计页面，提供会话、消息、Token 消耗等可视化图表，增强运营监控能力。
    *   **[PR #3579](https://github.com/agentscope-ai/QwenPaw/pull/3579)**: 实现了单 Agent 级别的 LLM 模型指派功能，解决了此前只能全局配置模型的痛点。
    *   **[PR #3467](https://github.com/agentscope-ai/QwenPaw/pull/3467)**: 前端构建工具从 npm 迁移至 pnpm，与官网保持一致，提升构建效率。

## 4. 社区热点
今日讨论热度最高的问题集中在**本地化部署体验**与**自动化流程**上：

*   **[Issue #3582](https://github.com/agentscope-ai/QwenPaw/issues/3582)**: **[Bug] Localhost auth bypass 失效**
    *   **热度**: 👍 0 | 💬 3
    *   **分析**: 用户反馈文档中承诺的 `127.0.0.1` 自动跳过认证功能失效，导致本地调试受阻。这反映了文档与实现的不一致，影响了开发者体验，需尽快修复以降低本地开发门槛。
*   **[Issue #3586](https://github.com/agentscope-ai/QwenPaw/issues/3586)**: **[Feature] 定时任务可否不用 /approve**
    *   **热度**: 👍 0 | 💬 2
    *   **分析**: 用户质疑定时任务仍需人工确认的合理性（如半夜自动更新场景）。这表明当前的“半自动”设计已无法满足“全托管”场景的需求，社区呼吁引入真正的无人值守模式。
*   **[Issue #3576](https://github.com/agentscope-ai/QwenPaw/issues/3576)**: **[Bug] WebUI 引用 Google Fonts 导致国内访问困难**
    *   **热度**: 👍 0 | 💬 1
    *   **分析**: 国内用户访问 WebUI 时因加载 Google Fonts 资源变慢。这是典型的本地化部署痛点，建议替换为本地字体或国内 CDN。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及系统崩溃、认证机制及编码处理，按严重程度排序如下：

1.  **严重 - 系统崩溃**
    *   **[Issue #3568](https://github.com/agentscope-ai/QwenPaw/issues/3568)**: 加载无效 YAML 格式的 Skill 导致 QwenPaw 完全无响应。**(已有修复 PR #3583)**
    *   **[Issue #3552](https://github.com/agentscope-ai/QwenPaw/issues/3552)**: Console 频道在 SSE 序列化畸形 Unicode 时崩溃。**(已有修复 PR #3553)**

2.  **高危 - 功能失效**
    *   **[Issue #3582](https://github.com/agentscope-ai/QwenPaw/issues/3582)**: 本地认证绕过机制失效，返回 401 错误。

3.  **中危 - 兼容性与编码**
    *   **[Issue #3580](https://github.com/agentscope-ai/QwenPaw/issues/3580)**: Windows 下文件名包含全角标点符号（如 `：`）时 `send_file_to_user` 失败。
    *   **[Issue #3573](https://github.com/agentscope-ai/QwenPaw/issues/3573)**: Cron 任务指定 `channel=weixin` 时报 `KeyError`。

## 6. 功能请求与路线图信号
根据 Issue 与 PR 动态，未来版本可能会重点关注以下方向：

*   **定时任务增强**: 社区对 [Issue #3586](https://github.com/agentscope-ai/QwenPaw/issues/3586)（取消审批）和 [Issue #3569](https://github.com/agentscope-ai/QwenPaw/issues/3569)（执行记录/参数编辑）的呼声较高，预示定时任务模块将向更完善的自动化工作流演进。
*   **多模态与语音**: [PR #3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) 引入了 Whisper 语音转录替代 Web Speech API，表明项目正在增强多模态输入能力及浏览器兼容性。
*   **前端体验优化**: 深色模式完善 ([Issue #3587](https://github.com/agentscope-ai/QwenPaw/issues/3587))、代码块折叠 ([Issue #3572](https://github.com/agentscope-ai/QwenPaw/issues/3572)) 及界面清爽化 ([Issue #3571](https://github.com/agentscope-ai/QwenPaw/issues/3571)) 是用户关注的焦点，预计下一版本 UI 将有显著打磨。

## 7. 用户反馈摘要
*   **痛点**:
    *   **本地化困境**: 国内用户深受 Google Fonts 加载慢 ([#3576](https://github.com/agentscope-ai/QwenPaw/issues/3576)) 和本地模型调优困难 ([#3562](https://github.com/agentscope-ai/QwenPaw/issues/3562)) 的困扰。
    *   **交互设计**: 侧边栏文字重叠 ([#3546](https://github.com/agentscope-ai/QwenPaw/issues/3546))、定时任务需人工干预 ([#3586](https://github.com/agentscope-ai/QwenPaw/issues/3586)) 等问题影响使用体验。
*   **满意点**:
    *   社区对 Skill 扩展能力表示关注 ([#3577](https://github.com/agentscope-ai/QwenPaw/issues/3577))，显示用户正在深入尝试高级功能。
    *   针对 Telegram 机器人的“正在输入”状态优化 ([#1874](https://github.com/agentscope-ai/QwenPaw/issues/1874)) 已有 PR 跟进，用户反馈积极。

## 8. 待处理积压
*   **长期未合并的大型重构 PR**: [PR #3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) (Memory 重构) 和 [PR #3365](https://github.com/agentscope-ai/QwenPaw/pull/3365) (统计页面) 涉及核心逻辑变更，已开放数日，建议维护者优先评审以避免分支冲突。
*   **本地认证问题**: [Issue #3582](https://github.com/agentscope-ai/QwenPaw/issues/3582) 涉及安全策略与文档不符，建议尽快确认是文档过时还是功能回退。

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