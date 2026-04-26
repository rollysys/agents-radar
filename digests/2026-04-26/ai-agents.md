# OpenClaw 生态日报 2026-04-26

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-26 03:19 UTC

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

**OpenClaw 项目动态日报 (2026-04-26)**

### 1. 今日速览
OpenClaw 项目今日呈现极高的活跃度与迭代速度，单日 Issues 更新达 500 条（关闭率 55%），PR 更新 500 条，并发布了 6 个新版本。核心进展集中在 **v2026.4.24 正式版** 的发布，引入了 Google Meet 插件集成与 DeepSeek V4 模型支持，标志着项目在实时通讯集成与模型生态扩展上迈出重要一步。社区方面，用户对近期版本的稳定性（尤其是 Docker 环境与边缘设备）反馈强烈，iOS 客户端也在进行大规模 UI 现代化改造。

### 2. 版本发布
今日发布了 **v2026.4.24** 正式版及其 Beta 测试链，重点更新如下：
*   **Google Meet 集成**：作为捆绑插件加入，支持个人 Google 认证、Chrome/Twilio 实时会话、双节点 Chrome 支持、 artifacts/考勤导出以及已打开标签页的恢复工具。这大大增强了 AI 智能体在会议场景的实用性。
*   **模型支持**：集成了 DeepSeek V4 Flash 和 V4 Pro 模型。
*   **修复 (Beta.2)**：修复了 Windows 平台捆绑插件运行时镜像的依赖解析问题，确保 npm 更新期间的稳定性。

### 3. 项目进展
今日共有 200 个 PR 合并/关闭，主要推进了以下关键功能与修复：
*   **Codex Computer Use 集成** ([PR #71842](https://github.com/openclaw/openclaw/pull/71842))：新增 Codex Computer Use 设置路径，允许 OpenClaw 请求 Codex app-server 启用插件支持并自动配置，扩展了智能体的电脑操控能力。
*   **iOS 现代化 UI** ([PR #40874](https://github.com/openclaw/openclaw/pull/40874))：为 iOS 引入 Liquid Glass UI、Action Button 支持及灵动岛实时状态显示，显著提升了移动端用户体验。
*   **消息可靠性修复** ([PR #46303](https://github.com/openclaw/openclaw/pull/46303))：修复了 SIGUSR1 重载导致入站去抖动缓冲区和后续队列被清空的严重 Bug，防止消息丢失。
*   **语音交互增强**：合并了 Amazon Polly TTS 提供商 ([PR #62259](https://github.com/openclaw/openclaw/pull/62259)) 及语音唤醒词路由功能 ([PR #41603](https://github.com/openclaw/openclaw/pull/41603))，支持不同唤醒词触发不同智能体。
*   **CLI 日志与更新修复**：修复了日志大小限制被忽略的问题 ([PR #71917](https://github.com/openclaw/openclaw/pull/71917)) 及 Windows 更新重启助手的问题 ([PR #71909](https://github.com/openclaw/openclaw/pull/71909))。

### 4. 社区热点
今日讨论最热烈的问题反映了用户对新版本兼容性与特定场景需求的关注：
*   **UI 聊天无法打开 (回归 Bug)** ([Issue #45471](https://github.com/openclaw/openclaw/issues/45471))：该问题引发了 78 条评论，用户报告更新后聊天功能失效。该 Issue 已关闭，推测已在今日发布的 v2026.4.24 中修复。
*   **Docker 环境下的技能安装失败** ([Issue #14593](https://github.com/openclaw/openclaw/issues/14593))：长期存在的问题（26 条评论），用户在 Docker 容器中因缺少 `brew` 依赖导致技能安装失败，反映了容器化部署的痛点。
*   **Android 客户端需求** ([Issue #9443](https://github.com/openclaw/openclaw/issues/9443))：用户强烈希望提供预编译的 Android APK，以补全移动端生态版图。
*   **控制 UI 配对超时** ([Issue #45753](https://github.com/openclaw/openclaw/issues/45753))：反向代理环境下网关超时问题引发热议，涉及网络配置复杂性与认证流程。

### 5. Bug 与稳定性
今日报告并处理了多个影响稳定性的回归问题，主要集中在资源占用与环境兼容性：
*   **严重 (已修复)**：
    *   **Raspberry Pi 4 内存溢出** ([Issue #45440](https://github.com/openclaw/openclaw/issues/45440))：升级后导致内存快速增长并 OOM，已在近期版本修复。
    *   **Sandbox 写入失败** ([Issue #45108](https://github.com/openclaw/openclaw/issues/45108))：沙箱环境缺少 Python3 导致编辑失败，已关闭。
*   **待解决**：
    *   **Plugin 运行时依赖安装循环** ([Issue #71818](https://github.com/openclaw/openclaw/issues/71818))：v2026.4.24 中网关陷入无限 `npm install` 循环，导致事件循环阻塞，需重点关注。
    *   **MemoryFlush 机制不可靠** ([Issue #12590](https://github.com/openclaw/openclaw/issues/12590))：核心内存管理逻辑存在偶发性失效，影响长期运行稳定性。
    *   **WebSocket 握手失败** ([Issue #45222](https://github.com/openclaw/openclaw/issues/45222))：本地环回地址间歇性握手失败，影响 CLI 调度。

### 6. 功能请求与路线图信号
*   **安全与权限**：用户强烈请求“掩码密钥”功能 ([Issue #10659](https://github.com/openclaw/openclaw/issues/10659))，防止 Agent 读取原始 API Key，这对企业级安全至关重要。
*   **多模态交互**：Slack Block Kit 支持 ([Issue #12602](https://github.com/openclaw/openclaw/issues/12602)) 与 Discord 反应自动回复 ([Issue #11747](https://github.com/openclaw/openclaw/issues/11747)) 的需求表明用户希望 Agent 在通讯平台上有更丰富的交互形式。
*   **Cron 任务增强**：请求直接执行模式 ([Issue #18160](https://github.com/openclaw/openclaw/issues/18160))，以减少定时任务对 LLM 的依赖并降低延迟。

### 7. 用户反馈摘要
*   **痛点**：用户普遍反映 **版本升级带来的回归问题较多**（如 UI 崩溃、内存泄漏），导致维护成本上升。Docker 和 Raspberry Pi 等非标准环境的支持仍存在较多瑕疵。
*   **满意点**：对 **Google Meet 插件** 的集成表示欢迎，认为这极大地拓宽了会议自动化场景。DeepSeek V4 模型的快速跟进也获得了开发者好评。
*   **场景**：用户正尝试将 OpenClaw 部署在边缘设备（Pi 4）作为家庭中枢，或通过 SSH 远程调用，但目前稳定性和文件系统隔离仍需优化。

### 8. 待处理积压
*   **Docker 技能安装问题** ([Issue #14593](https://github.com/openclaw/openclaw/issues/14593))：自 2 月提出至今未解决，严重阻碍了容器化用户的技能扩展。
*   **Android APK 发布** ([Issue #9443](https://github.com/openclaw/openclaw/issues/9443))：移动端覆盖的最后一块拼图，社区关注度持续走高。
*   **多 Agent 工作区共享** ([Issue #40245](https://github.com/openclaw/openclaw/issues/40245))：多智能体协作场景下的文件共享与隔离问题，需架构层面的解决方案。

---
*数据来源：OpenClaw GitHub Repository Statistics (2026-04-26)*

---

## 横向生态对比

# 2026-04-26 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
今日开源 AI 智能体生态呈现出**"模型快速适配与架构深度重构并存"**的态势。随着 DeepSeek V4 模型的发布，各大主流项目（OpenClaw, PicoClaw, Zeroclaw 等）均在 24 小时内完成了从 API 兼容到工具调用的全链路适配，显示出开源社区对前沿模型的极强响应能力。与此同时，MCP（Model Context Protocol）协议正成为连接 Agent 与外部工具的事实标准，多项目围绕其合规性与稳定性进行了密集修复。然而，**Docker 部署复杂性与配置持久化问题**仍是阻碍用户从"试用"转向"生产"的最大绊脚石，几乎所有活跃项目都收到了相关反馈。

## 2. 各项目活跃度对比

| 项目名称 | Issue 更新 | PR 更新 | Release | 健康度评估 | 核心动向 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | v2026.4.24 | ⭐⭐⭐⭐⭐ 极高 | 发布重磅更新，集成 Google Meet 与 DeepSeek V4，修复大量回归 Bug。 |
| **NanoBot** | - | 29 | - | ⭐⭐⭐⭐ 高 | 聚焦安全性与企业级特性，修复 Shell 注入，推进 Failover 机制。 |
| **Zeroclaw** | 43 | 38 | - | ⭐⭐⭐⭐ 高 | 修复 Web Dashboard 核心阻塞，推进 Multi-agent 架构重构。 |
| **Hermes Agent** | 50 | 50 | - | ⭐⭐⭐ 中高 | 社区活跃但 PR 积压严重（48个待合并），Docker 部署问题突出。 |
| **PicoClaw** | - | 25 (12 merged) | Nightly | ⭐⭐⭐⭐ 高 | 高效修复 DeepSeek V4 兼容性与 MCP 协议问题，迭代节奏健康。 |
| **LobsterAI** | 4 | 9 (merged) | - | ⭐⭐⭐ 中 | 代码侧活跃但社区响应滞后，Issues 遭遇"僵尸"状态。 |
| **Moltis** | 2 | 7 | - | ⭐⭐⭐⭐ 高 | 快速响应 UI 问题，推进文件上传与原生 MCP 支持。 |
| **CoPaw** | - | - | v1.1.4.post2 | ⭐⭐⭐ 中 | 发布补丁修复审批流，但配置丢失与 Windows 渲染问题严重。 |
| **IronClaw** | - | 18 | - | ⭐⭐⭐ 中高 | 聚焦 MCP 传输层修复与安全审计，存在配置覆盖 Bug。 |
| **NanoClaw** | - | 25 | - | ⭐⭐⭐ 中高 | 修复安装脚本阻塞，增强 Web UI 集成。 |
| **ZeptoClaw** | - | 4 | - | ⭐⭐⭐ 中 | 处于依赖维护期，CI 扩展暗示将支持更多通信渠道。 |
| **NullClaw** | 2 | 0 | - | ⭐⭐ 低 | 遭遇 WSL2 性能瓶颈与低资源适配难题，无代码更新。 |
| **TinyClaw** | 0 | 0 | - | ⭐ 极低 | 无活动。 |
| **EasyClaw** | 0 | 0 | - | ⭐ 极低 | 无活动。 |

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照系与风向标**，OpenClaw 展现出了明显的领跑优势：
*   **技术路线差异**：不同于 NanoBot 的安全企业级路线或 PicoClaw 的轻量跨端路线，OpenClaw 走的是**"全栈能力 + 原生应用集成"**路线。今日引入的 Google Meet 插件标志着其正在突破单纯的 Chat Bot 范畴，向实时会议、自动化办公场景纵深发展。
*   **生态规模对比**：其单日 500 条的 Issue/PR 处理量级是第二名项目的 10 倍以上，社区对 DeepSeek V4 和 Docker 环境问题的讨论热度远超其他项目，形成了极强的网络效应。
*   **优势与挑战**：优势在于功能覆盖极广（从移动端 UI 到边缘设备支持）；挑战在于快速迭代带来的回归 Bug（如 UI 崩溃、消息丢失）和 Docker 环境下的技能安装摩擦，这在 NanoClaw（安装脚本优化）和 Hermes（MemPalace 记忆扩展）等后起之秀面前暴露了维护成本的短板。

## 4. 共同关注的技术方向

*   **DeepSeek V4 推理模型适配**
    *   **涉及项目**：OpenClaw, PicoClaw, Zeroclaw, Hermes Agent, LobsterAI。
    *   **核心诉求**：各项目均在解决 DeepSeek V4 引入 `reasoning_content` 后导致的工具调用失败、历史上下文错乱及 API 格式兼容问题。这表明推理模型的"思考过程"标准化处理已成为开源 Agent 的必备能力。

*   **MCP 协议的深度集成与合规**
    *   **涉及项目**：PicoClaw, Moltis, IronClaw, Zeroclaw。
    *   **核心诉求**：从简单的工具调用转向对 MCP (Model Context Protocol) 协议细节的修正。PicoClaw 修复了参数 `null` 值问题，Moltis 移除了中间层转而使用原生 MCP。这标志着 MCP 正迅速成为 Agent 工具链的通用接口标准。

*   **配置持久化与部署体验**
    *   **涉及项目**：CoPaw, IronClaw, NanoClaw, OpenClaw, Hermes Agent。
    *   **核心诉求**：Docker 权限错误、配置重启丢失、安装脚本挂起等问题普遍存在。用户强烈要求"配置即代码"的稳定性，而非每次重启或升级后配置被重置。

## 5. 差异化定位分析

*   **功能侧重**：
    *   **OpenClaw**：全场景覆盖，特别是会议自动化。
    *   **NanoBot**：侧重安全性与企业级高可用。
    *   **Hermes Agent**：探索长程记忆与外部记忆扩展。
    *   **NullClaw**：定位低端硬件，但在核心能力（Web Search）上受限于资源。

*   **目标用户**：
    *   **OpenClaw & CoPaw**：面向广泛的个人开发者与极客用户。
    *   **LobsterAI & IronClaw**：更偏向企业级部署，关注配置管理与多渠道接入。
    *   **NanoBot & ZeptoClaw**：吸引对架构安全性和代码质量有高要求的开发者。

*   **技术架构**：
    *   **PicoClaw & Moltis**：架构轻量，响应迅速，注重 UI/UX 的现代化（如 Liquid Glass UI）。
    *   **Hermes Agent**：虽有创新功能（MemPalace），但架构目前面临 PR 积压和合并吞吐瓶颈。

## 6. 社区热度与成熟度

*   **第一梯队（成熟期）**：**OpenClaw**。虽然 Bug 率较高，但凭借庞大的社区体量和极快的迭代速度，能迅速"填坑"，生态位稳固。
*   **第二梯队（快速迭代期）**：**NanoBot, PicoClaw, Zeroclaw, Moltis**。这些项目处于功能爆发期，社区响应积极，Bug 修复效率高，架构调整频繁且方向明确，是目前的"成长股"。
*   **第三梯队（瓶颈期/维护期）**：**Hermes Agent, CoPaw, LobsterAI**。
    *   Hermes Agent 遭遇严重的 PR 积压（48个），核心维护力量可能不足。
    *   CoPaw 遭遇严重的稳定性危机（配置丢失、渲染失败），导致用户信任度下降。
    *   LobsterAI 社区互动陷入停滞，Issues 无人问津，仅靠核心开发者推动代码。
*   **第四梯队（停滞/低活跃）**：**NullClaw, TinyClaw, EasyClaw**。面临核心技术瓶颈或缺乏维护，存在被边缘化风险。

## 7. 值得关注的趋势信号

1.  **DeepSeek V4 重塑开源 Agent 交互逻辑**：开源项目不再仅仅将模型视为文本生成器，而是开始针对推理模型的思维链进行专门的 UI 展示（PicoClaw 的思考气泡开关）和上下文管理。**建议开发者**：尽快适配 `reasoning_content` 的处理逻辑，否则将面临严重的兼容性问题。
2.  **从"能跑"到"高可用"的跨越**：今日 NanoBot 对 Failover 的讨论、IronClaw 对配置优先级的修复、以及 Hermes 对长程记忆的探索，都标志着开源 Agent 正从 Demo 阶段迈向生产级高可用阶段。**建议开发者**：重点关注多 Provider 容灾、配置持久化及沙箱安全隔离。
3.  **MCP 协议成为工具调用的"兵家必争之地"**：MCP 正迅速取代私有的 Function Calling 封装，成为连接外部工具的主流协议。各项目纷纷清理非标准实现，转向原生支持。**建议开发者**：在架构设计时应优先考虑 MCP 兼容性，避免陷入私有协议的维护泥潭。
4.  **安装体验仍是最大的流失点**：NanoClaw 的安装脚本挂起、OpenClaw 的 Docker 技能安装失败、Hermes 的权限错误，这些问题直接阻断了新用户的第一次启动。**建议项目方**：建立自动化的安装流程测试，覆盖 Ubuntu/Docker/LXC 等主流环境，"第一个 Hello World"的体验至关重要。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-26)

## 1. 今日速览
NanoBot 项目今日保持**高活跃度**开发状态，过去 24 小时内 PR 更新量达 29 条，其中 12 条已完成合并或关闭，Issue 互动频繁。项目重心目前明显向**安全性增强**与**生产环境稳定性**倾斜，涉及 Shell 注入修复、SSRF 防护及 Model Failover 机制的讨论。此外，社区对多渠道适配（飞书、MSTeams）及本地模型兼容性的贡献持续增加，显示出项目正向更成熟、更安全的企业级应用阶段演进。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 12 个 PR 被合并或关闭，显著推进了项目的安全性与功能完备性：

*   **安全机制落地**：PR #1722 已关闭，成功引入了 Shell 命令执行的“人机交互审批”机制，防止 Agent 执行高危操作，大幅提升了运行安全性。
*   **文档与本地化**：PR #2345 已合并，正式增加了中文 README 文档，降低了中文开发者的上手门槛，反映项目对中国社区的重视。
*   **文件解析能力扩展**：PR #3336 已合并，`read_file` 工具现已支持 DOCX、XLSX、PPTX 等 Office 文档格式，增强了 Agent 处理办公自动化任务的能力。
*   **渠道适配优化**：PR #3447 修复了 MSTeams 渠道的线程回复问题；PR #3176 关闭了旧版飞书适配，新版 PR #3449 正在推进更完善的飞书线程级会话隔离功能。

## 4. 社区热点
今日社区关注度集中在**高可用性架构**与**外部集成**能力上：

*   **[Issue #3376] 模型异常自动切换**：该 Issue 评论数达 8 条，成为今日讨论焦点。用户强烈呼吁支持 Provider/Model 级别的 Failover 能力。当前 NanoBot 在单一 Provider 故障时会中断任务，用户希望实现跨 Provider 的容灾切换。这反映了用户将 NanoBot 用于生产环境时的核心痛点。
    *   链接：[HKUDS/nanobot Issue #3376](https://github.com/HKUDS/nanobot/issues/3376)
*   **[Issue #3436] 调用外部 Agent**：社区正在讨论将 NanoBot 作为编排器调用其他 Agent 框架（如 OpenCode/Codex）的可行性，显示出用户对“Agent 互操作”架构的兴趣。
    *   链接：[HKUDS/nanobot Issue #3436](https://github.com/HKUDS/nanobot/issues/3436)

## 5. Bug 与稳定性
今日报告了若干关键 Bug，部分已有修复 PR，但安全漏洞修复仍需关注：

*   **[严重] 安全漏洞**：
    *   **Shell 注入风险**：PR #3366 指出非 Windows 平台下存在 Shell 注入漏洞，目前修复 PR 待合并。
    *   **SSRF 绕过**：PR #3252 指出当前 SSRF 过滤正则可被 `file://` 或 `gopher://` 绕过，修复 PR 待合并。
*   **[已修复] 推理内容泄露**：Issue #3443 报告非流式输出下模型思维链泄露给用户。PR #3445 和 #3446 已提出修复方案，通过增加 Spec 标志位控制 fallback 逻辑。
*   **[待修复] 本地模型连接中断**：Issue #3444 报告针对本地模型（Ollama/vLLM），HTTP Keepalive 机制导致连接复用失败。PR #3444 已提交修复方案，禁用本地端点的 Keepalive。
*   **[Bug] 企业微信媒体文件上传失败**：Issue #3435 报告 Wecom 渠道发送带附件消息时报错，暂无修复 PR。

## 6. 功能请求与路线图信号
*   **Failover 容灾机制**：结合 Issue #3376 的热度，建议将“模型异常自动切换”纳入近期版本规划。
*   **跨会话记忆治理**：PR #3408 提出了集成 MGP (Memory Governance Protocol) 的方案，目前为可选集成，若合并将显著提升 Agent 的长程记忆能力。
*   **健康检查指令**：PR #3451 提议增加 `/ping` 指令用于存活检查，属于易用性优化，有望合入。
*   **免费模型偏好**：PR #3416 提议为 OpenRouter 增加 `prefer_free` 选项，反映社区对降低使用成本的诉求。

## 7. 用户反馈摘要
*   **痛点：单点故障**：多位用户在 Issue #3376 反馈，已配置多 Provider 但仍因单一节点故障导致任务中断，目前的重试机制不足以应对生产环境的高可用需求。
*   **场景：办公自动化**：从 PR #3336 的合并可以看出，用户有强烈需求利用 NanoBot 处理 Office 文档，实际应用场景正从代码辅助扩展到日常办公流。
*   **体验：本地模型兼容性**：Issue #3444 表明部分用户正通过 Ollama/vLLM 接入本地大模型，但对 HTTP 连接池的管理细节存在兼容性问题。

## 8. 待处理积压
建议维护者优先关注以下积压或高优先级事项：

1.  **安全漏洞修复合并**：PR #3366 (Shell 注入) 与 PR #3252 (SSRF 绕过) 涉及核心安全问题，建议尽快 Code Review 并合并。
2.  **Failover 功能规划**：Issue #3376 讨论热度高且影响核心可用性，建议官方给出路线图或确认 PR 提交意向。
3.  **Provider 解析逻辑修复**：PR #3446 针对 StepFun 等模型推理字段泄露的修复，需尽快合入以避免对用户体验造成负面影响。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-26)

## 1. 今日速览
Zeroclaw 项目今日维持高活跃度，共处理 **43 条 Issue 更新** 和 **38 条 PR 更新**。虽然无新版本发布，但社区焦点高度集中在 **Web Dashboard 部署问题** 与 **最新模型兼容性** 上。备受关注的 Web Dashboard 不可用问题（#4866）已关闭，官方正通过 PR 积极修复 DeepSeek-V4 兼容性及安装脚本缺陷。项目目前处于 v0.7.4 里程碑的冲刺阶段，核心开发正致力于 Multi-agent 架构重构与 Onboarding 流程重写。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 10 个 PR 合并/关闭，主要进展如下：
*   **Web Dashboard 核心问题解决**：长期阻塞用户的 [Bug #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)（Web Dashboard 不可用）已正式关闭，相关文档问题 [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) 亦已解决，显著降低了新用户的入门门槛。
*   **模型兼容性修复进行中**：针对 DeepSeek-V4 API 格式变更导致的工具调用失败，开发者提交了 [PR #6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107)，修复了流式响应中 `reasoning_content` 的捕获问题，确保 thinking 模式下的工具调用稳定性。
*   **代码质量优化**：[PR #6098](https://github.com/zeroclaw-labs/zeroclaw/pull/6098) 清理了 `zeroclaw-runtime` 中 566 行未编译的死代码，提升了代码库整洁度。
*   **文档与安装修复**：[PR #6109](https://github.com/zeroclaw-labs/zeroclaw/pull/6109) 更新了二进制大小基准测试数据，[Issue #6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) 指出的安装脚本问题已提上日程。

## 4. 社区热点
*   **[Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) [CLOSED]**: **Web dashboard is still not available**
    *   **热度**：25 条评论。
    *   **分析**：这是今日最受关注的问题。大量用户反馈在构建或安装时遇到 Web UI 无法加载的问题。该 Issue 的关闭标志着困扰社区多时的部署阻塞问题得到缓解，相关配置文档也已同步更新。
*   **[Issue #5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) [OPEN]**: **Per-sender RBAC for multi-tenant agent deployments**
    *   **热度**：7 条评论。
    *   **分析**：用户提出多租户场景下的细粒度权限控制需求（RBAC），反映出 Zeroclaw 正从个人工具向企业级/多用户服务平台转型，社区对安全隔离和多工作空间的支持呼声渐高。
*   **[Issue #5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) [OPEN]**: **release: v0.7.4 milestone tracking**
    *   **热度**：6 条评论。
    *   **分析**：v0.7.4 版本的跟踪贴，开发者正在紧急修复 v0.7.3 紧急发布后的遗留问题，并整合新的技能和配置迁移逻辑。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，主要集中在 Provider 兼容性和安装流程：

*   **S1 - Workflow Blocked**:
    *   [Issue #6095](https://github.com/zeroclaw-labs/zeroclaw/issues/6095): Bedrock `claude-opus-4-7` 模型报错 "temperature is deprecated"，导致工作流阻断。**待修复**。
    *   [Issue #6100](https://github.com/zeroclaw-labs/zeroclaw/issues/6100): ACP Server 未提供 v1 schema，导致客户端无法连接。状态 `status:blocked`。
    *   [Issue #5941](https://github.com/zeroclaw-labs/zeroclaw/issues/5941): 自定义 Provider 调用时出现 "No tool call found" 错误。
*   **S2 - Degraded Behavior**:
    *   [Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059): DeepSeek-V4 API 格式不兼容。**已有修复 PR #6107**。
    *   [Issue #6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096): `install.sh` 脚本未正确提取 Web Dashboard 资源。
    *   [Issue #6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097): "skill" 生成的本地图片路径导致 API 模型无法读取。
*   **S0 - Data Loss / Security Risk**:
    *   [Issue #6090](https://github.com/zeroclaw-labs/zeroclaw/issues/6090): Telegram 频道配置错误导致 Anthropic 调用失败，被标记为高风险。

## 6. 功能请求与路线图信号
*   **Multi-agent 架构落地**：[RFC #5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) 与 [Tracker #5891](https://github.com/zeroclaw-labs/zeroclaw/issues/5891) 正在推进 Multi-agent UX 流程设计，这是下阶段的核心特性。
*   **Schema v3 迁移**：[Issue #5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) 提议批量进行破坏性字段迁移，作为合并阻塞项，预示着 v0.8+ 版本可能有配置不兼容更新。
*   **Onboarding 重写**：[PR #5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960) 提议将原有的巨型向导重构为 Schema 驱动的编排器，旨在提升新用户的配置体验（DRY原则）。虽为 OPEN 状态，但这是提升易用性的关键一步。

## 7. 用户反馈摘要
*   **部署体验痛点**：用户普遍反映 Web Dashboard 的构建与配置（`web_dist_dir` 设置）是最大的“拦路虎”，尤其是在 Tauri 桌面端和预编译二进制场景下。用户期望“开箱即用”而非手动构建前端资源。
*   **模型支持时效性**：用户对最新模型（如 DeepSeek-V4, Claude Opus 4.7）的支持非常敏感，一旦 API 格式微调导致工具调用失败，会迅速在社区引发反馈。
*   **UI/UX 细节**：用户希望 Web UI 能支持 Model 热切换且不丢失上下文（见 [PR #6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101)），并增加清除聊天窗口的功能（见 [Issue #6077](https://github.com/zeroclaw-labs/zeroclaw/issues/6077)）。

## 8. 待处理积压
*   **高危阻塞**：[Issue #6100](https://github.com/zeroclaw-labs/zeroclaw/issues/6100) (ACP Server schema 问题) 目前状态为 `status:blocked`，急需维护者关注以恢复协议客户端连接。
*   **长期 RFC**：[Issue #5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) (Multi-agent UX) 正在征求社区意见，距离 7 天讨论期结束还有一段时间，建议核心开发者持续跟进。
*   **代码清理**：[Issue #6094](https://github.com/zeroclaw-labs/zeroclaw/issues/6094) 指出存在大量未编译的孤儿代码，建议尽快合入 [PR #6098](https://github.com/zeroclaw-labs/zeroclaw/pull/6098) 以保持代码库健康。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-04-26)

## 1. 今日速览
Hermes Agent 项目今日保持着极高的社区活跃度，过去 24 小时内 Issues 活跃量达到 50 条（净增 +42），PR 更新量也达到 50 条。然而，项目目前的合并吞吐量明显低于社区贡献速度，仅有 2 个 PR 被合并/关闭，导致**48 个 PR 处于待合并状态**，积压风险显著上升。社区关注点集中在 **外部记忆扩展** 和 **Docker 部署稳定性** 上。今日无新版本发布，但针对 DeepSeek V4 推理内容一致性的关键修复已合并。

## 2. 版本发布
- **无新版本发布**。
- 注意：近期发布的 Docker 镜像 `v2026.4.23` 存在严重的权限配置问题（详见 Bug 章节），建议生产环境暂缓更新或等待补丁。

## 3. 项目进展
今日共有 2 个 PR 完成合并/关闭，主要修复了关键的功能回归问题：
- **[MERGED] PR #15476**: 修复 DeepSeek V4 模型的 `reasoning_content` 一致性问题。该修复解决了在历史消息混合有无推理内容时导致 API 400 错误的回归 Bug，对使用 DeepSeek/Kimi 推理模型的用户至关重要。
- **[CLOSED] PR #15870**: 恢复 TUI 环境下 `/skills search` 的 RPC 功能，修复了技能搜索失效的问题。

> **分析师注**：尽管有大量高质量 PR 提交（如 MemPalace 记忆支持 #5671），但积压的 48 个 Open PR 显示维护者审核压力巨大，项目可能正处于功能迭代与稳定性维护的瓶颈期。

## 4. 社区热点
今日讨论最热烈的话题围绕**记忆能力扩展**与**部署体验**展开：
- **[Issue #6323] add mempalace for external memory support**: 以 15 条评论和 21 个点赞成为今日焦点。社区强烈呼吁引入 **MemPalace** 模块以突破上下文窗口限制，实现长期记忆和跨会话连续性。配套 PR #5671 已提交但尚待合并。
- **[Issue #10625] 抄袭都抄不明白**: 该 Issue 获得了 10 个点赞，反映出部分用户对项目代码质量或原创性存在负面情绪，需注意社区舆论引导。
- **[Issue #10644] Add Brave Search as a native web search backend**: 用户呼吁集成 Brave Search API，认为其性价比高且免费额度友好，获 10 个点赞支持。

## 5. Bug 与稳定性
今日报告了多个影响生产环境的严重 Bug (P1)，主要集中在 Docker 部署和特定模型适配：

| 严重程度 | Issue | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **P1 (Blocker)** | [#15865](https://github.com/NousResearch/hermes-agent/issues/15865) | **Docker 镜像 v2026.4.23 权限错误**：启动时报 `chown: Operation not permitted`，导致容器无法写入配置文件。 | Open |
| **P1 (Blocker)** | [#15832](https://github.com/NousResearch/hermes-agent/issues/15832) | **Dockerfile 架构缺陷**：`USER hermes` 指令导致 entrypoint 的 UID 重映射失效，与文档描述不符。 | Open |
| **P1 (Regression)** | [#15812](https://github.com/NousResearch/hermes-agent/issues/15812) | **DeepSeek/Kimi 推理字段覆盖**：PR #15749 引入回归，导致 Assistant 消息中的 `reasoning_content` 被错误清空。 | Open (修复 PR #15476 已合并) |
| **P2** | [#13944](https://github.com/NousResearch/hermes-agent/issues/13944) | **技能路由失效**：System Prompt 中的技能索引将描述强制截断为 60 字符，导致模型无法正确识别和调用技能。 | Open |
| **P2** | [#15866](https://github.com/NousResearch/hermes-agent/issues/15866) | **Prompt Caching 失效**：`_build_system_prompt` 中的分钟级时间戳导致上游推理服务器（如 Ollama/Llama）的缓存频繁失效，严重影响性能。 | Open |

## 6. 功能请求与路线图信号
- **记忆系统升级**: Issue #6323 和 PR #5671 表明项目正尝试集成 MemPalace 作为核心记忆后端，这可能是下一个版本的重点功能。
- **MCP 标准化**: Issue #10422 提议将 jMRI 作为 MCP 服务器的标准检索接口，旨在解决不同 MCP 服务器工具名不统一、难以通用化的问题。
- **Web 搜索多样化**: Issue #10644 呼吁增加 Brave Search 支持，显示用户对降低搜索成本（替代 Firecrawl/Tavily）的需求强烈。
- **运维友好性**: Issue #10567 请求支持 Tailscale/VPN 远程访问 Dashboard，显示 Hermes 正在被更多应用于远程服务器场景。

## 7. 用户反馈摘要
- **Docker 部署体验恶化**: 多位用户反馈最新 Docker 镜像存在严重的权限和用户管理问题，导致无法正常启动或数据无法持久化。
- **模型适配问题**: 使用 DeepSeek 和 Kimi 推理模型的用户受到严重回归 Bug 影响，体验不佳；本地部署用户反馈 Prompt Caching 机制失效，增加了推理延迟和成本。
- **TUI 易用性**: 用户反馈 TUI 输入框高度限制过死，影响长 Prompt 编写体验。
- **功能期待**: 对“长期记忆”功能的渴望非常强烈，希望智能体能记住跨会话的信息。

## 8. 待处理积压
- **PR 积压严重**: 目前有 **48 个 PR** 处于待合并状态，其中包括重要的功能扩展（如 MemPalace 集成 #5671 和 Brave Search 集成 #10402）。建议维护者尽快梳理并推进审核，以免打击贡献者积极性。
- **关键 Bug 待修复**: Docker 权限问题 (#15865, #15832) 虽已报告但尚无对应 Fix PR 出现在今日活跃列表中，建议优先处理以恢复标准部署流程。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-26)

## 1. 今日速览
PicoClaw 项目今日呈现极高的维护活跃度与健康的迭代节奏。过去 24 小时内，团队合并了 12 个 PR，关闭了 5 个 Issue，显示出强大的问题解决能力与高效的项目治理。重点修复了 DeepSeek 模型推理模式下的历史记录错乱、MCP 协议参数处理规范以及 Windows 端控制台闪烁等体验问题。同时，社区对 OpenCode 提供商支持的呼声初现，而 xAI 兼容性、跨智能体任务委托等重大特性已在 PR 阶段待合并，项目正稳步迈向更稳定、功能更丰富的版本。

## 2. 版本发布
- **nightly: Nightly Build (v0.2.7-nightly.20260426.77be169d)**
  - **更新说明**: 自动化构建版本，包含了今日合并的 DeepSeek 推理历史修复、MCP 参数处理优化及多项 UI 改进。
  - **注意事项**: 这是一个自动构建版本，可能存在不稳定性，建议测试者关注 Web Chat 刷新逻辑及工具调用的稳定性。
  - **变更日志**: [查看详情](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)

## 3. 项目进展
今日共有 **12 个 PR 被合并**，显著提升了项目的稳定性与用户体验：
- **DeepSeek 与历史记录修复** ([PR #2657](https://github.com/sipeed/picoclaw/pull/2657)): 修复了 DeepSeek 模型在开启推理模式后，因历史记录中推理内容位置错误导致的后续对话失败问题，同时解决了 Web Chat 刷新后消息不一致的回归问题。
- **MCP 协议合规性** ([PR #2666](https://github.com/sipeed/picoclaw/pull/2666)): 修正了 MCP 工具调用在无参数时发送 `null` 而非空对象 `{}` 的问题，符合 MCP 规范，修复了相关调用错误。
- **Web UI/UX 优化**:
    - [PR #2660](https://github.com/sipeed/picoclaw/pull/2660): 优化工具反馈显示，将参数 JSON 格式化展示，提升可读性。
    - [PR #2661](https://github.com/sipeed/picoclaw/pull/2661): 新增“思考内容”可见性切换开关，用户可自主选择是否显示模型推理过程。
    - [PR #2659](https://github.com/sipeed/picoclaw/pull/2659): 修复了思考气泡折叠状态全局共享的问题，实现独立状态管理。
    - [PR #2654](https://github.com/sipeed/picoclaw/pull/2654): 修复 Windows 启动器黑框闪烁问题，提升桌面端体验。
- **功能增强**:
    - [PR #2570](https://github.com/sipeed/picoclaw/pull/2570): 使 Seahorse 上下文的 `fresh_tail_size` 可配置，增加了运行时的灵活性。
    - [PR #2498](https://github.com/sipeed/picoclaw/pull/2498): 修复了 `/use` 指令被覆盖的问题，支持多技能同时挂载。

## 4. 社区热点
- **新功能需求: 支持 OpenCode 提供商** ([Issue #2671](https://github.com/sipeed/picoclaw/issues/2671))
  - **诉求分析**: 用户 @zcj1122-rgb 提议增加对 OpenCode 提供商及其 zen/go 订阅的支持。这反映出随着模型生态的快速扩张，用户希望 PicoClaw 能兼容更多新兴或特定的模型服务平台，以降低切换成本。
- **Gemini API 兼容性挑战** ([Issue #2668](https://github.com/sipeed/picoclaw/issues/2668))
  - **诉求分析**: 用户报告 Gemini 模型对 MCP 工具中的复杂 JSON Schema（如 `$ref`）校验极为严格，导致 HTTP 400 错误。这揭示了在追求“通用工具调用”时，不同模型提供商对 Schema 定义的细微差异可能成为阻塞点，社区期待更健壮的 Schema 适配层。

## 5. Bug 与稳定性
今日修复了多个关键 Bug，同时也发现了新的兼容性问题：
- **[已修复] DeepSeek-V4-Flash 推理模式工具调用崩溃** ([Issue #2650](https://github.com/sipeed/picoclaw/issues/2650), [Issue #2648](https://github.com/sipeed/picoclaw/issues/2648)): **严重**。此前在调用工具后会触发错误导致会话中断，现已通过 [PR #2657](https://github.com/sipeed/picoclaw/pull/2657) 解决。
- **[已修复] Web Chat 刷新显示不一致** ([Issue #2615](https://github.com/sipeed/picoclaw/issues/2615)): **中等**。刷新页面后工具调用摘要消失，影响上下文理解，现已修复。
- **[已修复] MCP 参数 null 值错误** ([Issue #2600](https://github.com/sipeed/picoclaw/issues/2600)): **中等**。部分 MCP 服务器拒绝 `arguments: null`，现已修正为发送空对象。
- **[待处理] Gemini 复杂 Schema 拒绝** ([Issue #2668](https://github.com/sipeed/picoclaw/issues/2668)): **中等**。Gemini 无法处理 MCP 中的复杂 Schema，目前尚无修复 PR，建议关注。

## 6. 功能请求与路线图信号
- **跨智能体协作**: [PR #2531](https://github.com/sipeed/picoclaw/pull/2531) 提出的 `delegate` 工具（用于 Agent 间任务交接）已待合并，标志着项目正向多智能体协作架构迈进，建议优先 Review。
- **鲁棒性增强**: [PR #2669](https://github.com/sipeed/picoclaw/pull/2669) 提出针对 LLM API 调用的网络错误重试机制（支持指数退避），这将显著提升 Agent 在弱网环境下的稳定性，预计很快合并。
- **新模型提供商**: 
    - [PR #2260](https://github.com/sipeed/picoclaw/pull/2260) (xAI 支持) 已待合并较久。
    - [Issue #2671](https://github.com/sipeed/picoclaw/issues/2671) (OpenCode) 为新需求。

## 7. 用户反馈摘要
- **DeepSeek 体验显著改善**: 多位用户反馈 DeepSeek 推理模式与工具调用存在冲突，今日的修复直接回应了这一痛点，用户满意度预计将回升。
- **UI 细节关注度提升**: 用户对 Web Chat 的刷新一致性、思考内容的折叠/展示、以及工具参数的展示格式（[PR #2670](https://github.com/sipeed/picoclaw/pull/2670) 提及的 `&&` 转义问题）非常敏感，表明 PicoClaw 作为助手工具，其前端交互体验与后端逻辑同等重要。
- **MCP 生态痛点**: 用户在集成 MCP 工具时，对协议实现的规范性（如空参数处理）和跨模型兼容性有较高要求。

## 8. 待处理积压
- **[PR #2531](https://github.com/sipeed/picoclaw/pull/2531) - Delegate Tool**: 创建于 4 月 15 日，这是实现多智能体协作的关键功能，建议维护者尽快推进 Review 或合并。
- **[PR #2260](https://github.com/sipeed/picoclaw/pull/2260) - xAI Support**: 增加了对 Grok 系列模型的支持，社区关注度较高，需确认测试覆盖情况。
- **[PR #1780](https://github.com/sipeed/picoclaw/pull/1780) - QQ Channel Stability**: 针对 QQ 频道的连接稳定性优化，长期未合并，建议评估向后兼容性后尽快合并。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-26)

## 1. 今日速览
NanoClaw 项目今日保持高度活跃，过去 24 小时内共有 25 条 PR 更新，开发节奏紧凑。项目重点聚焦于提升安装体验的健壮性与系统安全性，针对 Linux 环境下的安装阻塞问题迅速响应。社区贡献方面，新增了 YNAB 理财工具集成、本地语音转录等实用技能，展现了良好的生态扩展性。此外，多个核心功能的优化 PR 正在等待审查，项目整体处于快速迭代与功能完善阶段。

## 2. 版本发布
*   **新版本发布**：过去 24 小时内无新版本发布。

## 3. 项目进展
今日项目共有 5 条 PR 关闭（推测已合并），并有大量新 PR 提交，显著提升了系统的稳定性与安全性：

*   **Web 界面集成**：PR #1863 已关闭，该功能为 NanoClaw 添加了基于浏览器的聊天 UI 门户，去除了 Redis 等外部依赖，降低了部署门槛。
    *   链接: [qwibitai/nanoclaw PR #1863](https://github.com/qwibitai/nanoclaw/pull/1863)
*   **CI 流程优化**：PR #2015 已关闭，引入了 `jbaruch/coding-policy` 工作流，实现了自动化 PR 审查，有助于维护代码质量标准。
    *   链接: [qwibitai/nanoclaw PR #2015](https://github.com/qwibitai/nanoclaw/pull/2015)
*   **安全性加固**：PR #2022 提交了针对 Channel Installer 的远程信任边界加固修复，防止在安装适配器代码时引入安全风险。
    *   链接: [qwibitai/nanoclaw PR #2022](https://github.com/qwibitai/nanoclaw/pull/2022)
*   **安装体验修复**：针对 Issue #2014 提出的 Ubuntu 安装挂起问题，PR #2021 迅速提交了修复方案，防止 `apt-get` 在交互式提示下卡死。
    *   链接: [qwibitai/nanoclaw PR #2021](https://github.com/qwibitai/nanoclaw/pull/2021)

## 4. 社区热点
今日社区关注度主要集中在安装兼容性与新功能扩展上：

*   **安装阻塞问题 (Issue #2014)**：用户报告在 Ubuntu 上运行安装脚本时，因 `needrestart` 提示内核升级而导致进程挂起。该问题引发了关于 Linux 发行版安装脚本健壮性的讨论。
    *   链接: [qwibitai/nanoclaw Issue #2014](https://github.com/qwibitai/nanoclaw/issues/2014)
*   **Docker Socket 权限问题 (Issue #2006)**：用户在 Debian 12 LXC 容器中部署时遇到 Docker 权限错误，即便脚本已添加用户组，后续步骤仍因权限未生效而失败，揭示了特定虚拟化环境下的权限处理痛点。
    *   链接: [qwibitai/nanoclaw Issue #2006](https://github.com/qwibitai/nanoclaw/issues/2006)

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在部署与配置阶段，部分已有对应修复方案：

*   **高优先级 - 安装挂起**：
    *   **问题**：`setup/install-node.sh` 在 Ubuntu 上因系统交互提示而无限挂起 (Issue #2014)。
    *   **状态**：**已有修复 PR** (#2021)，通过调整 `apt-get` 参数防止交互式阻塞。
*   **中等优先级 - 权限错误**：
    *   **问题**：Debian 12 LXC 容器中新安装 Docker 后用户组权限未即时生效，导致后续步骤失败 (Issue #2006)。
    *   **状态**：暂无直接修复 PR，可能需要调整脚本逻辑以提示用户重连或重启会话。
*   **安全性修复**：
    *   PR #2011 修复了无效 `engage_pattern` 正则表达式导致系统“fail open”（错误地放行所有请求）的严重隐患，确保配置错误时系统处于安全状态。
    *   链接: [qwibitai/nanoclaw PR #2011](https://github.com/qwibitai/nanoclaw/pull/2011)

## 6. 功能请求与路线图信号
社区成员积极贡献新功能，推动了项目向更多场景延伸：

*   **金融场景集成**：PR #2016 提议添加 `/add-ynab-tool` 技能，允许 Agent 通过 curl 访问 YNAB API 进行预算管理，无需依赖 MCP 服务器，体现了“轻量化集成”的趋势。
    *   链接: [qwibitai/nanoclaw PR #2016](https://github.com/qwibitai/nanoclaw/pull/2016)
*   **本地语音支持**：PR #2009 提交了本地 Whisper 语音转录技能，支持 Python 和 C++ 后端，满足用户对隐私保护和高性价比语音处理的需求。
    *   链接: [qwibitai/nanoclaw PR #2009](https://github.com/qwibitai/nanoclaw/pull/2009)
*   **模型配置细化**：PR #1968 提交了端到端的单代理模型配置功能，允许为不同代理独立选择模型提供商和模型，这是一个高价值的架构改进，目前仍在待合并状态。
    *   链接: [qwibitai/nanoclaw PR #1968](https://github.com/qwibitai/nanoclaw/pull/1968)

## 7. 用户反馈摘要
*   **正面反馈**：Issue #2017 虽已关闭，但用户留下了 "keep it going sir this is awesome!" 的评价，显示核心用户群对项目持高度认可态度。
    *   链接: [qwibitai/nanoclaw Issue #2017](https://github.com/qwibitai/nanoclaw/issues/2017)
*   **痛点反馈**：用户在 LXC/Proxmox 等虚拟化环境下的部署体验仍有待优化 (Issue #2006)，特别是涉及权限管理和系统服务重启的环节，现有脚本在这些特定场景下的容错性不足。

## 8. 待处理积压
以下重要 PR 长期处于 Open 状态，建议维护者优先 Review：

*   **PR #967** ([Link](https://github.com/qwibitai/nanoclaw/pull/967))：修复会话卡死和 Runner 轮询可靠性问题，创建于 3 月中旬，涉及核心稳定性。
*   **PR #956** ([Link](https://github.com/qwibitai/nanoclaw/pull/956))：添加 LLM 凭证快速健全性检查，可提前发现配置错误，提升用户体验。
*   **PR #954** ([Link](https://github.com/qwibitai/nanoclaw/pull/954))：修复 OpenRouter 非 Anthropic 模型的路由兼容性问题，影响部分用户的模型选择。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-26)

## 1. 今日速览
NullClaw 项目今日整体处于维护观察期，无新版本发布，代码库更新频率较低。社区活跃度主要集中在问题报告，新增 2 条高质量的 Bug 反馈，分别指向低资源配置下的核心功能缺失及特定环境下的性能瓶颈。一个关于 Web 搜索配置指引的 PR 已关闭，虽无新代码合并，但项目对配置错误的反馈机制有所讨论。整体来看，项目在低资源设备适配性和特定环境稳定性方面面临挑战，需维护者重点关注。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无合并代码，项目核心功能代码库保持静止。
*   **PR #815 [CLOSED] fix(web_search): add setup guidance for missing providers**：该 PR 旨在改善 `web_search` 功能在缺少搜索提供方时的错误提示，并补充了 SearXNG 和托管服务的配置指引。尽管该 PR 已关闭，但其讨论内容反映了社区对降低 Web 搜索配置门槛的诉求。
    *   链接：[nullclaw/nullclaw PR #815](https://github.com/nullclaw/nullclaw/pull/815)

## 4. 社区热点
今日讨论最活跃的话题集中在 **Web 搜索功能的可用性**与**底层网关性能**两方面，均通过新建 Issue 发起：
*   **Issue #871 [OPEN] [bug] Critical: web_search is impractical on low-resource devices**：该 Issue 直击 NullClaw 的核心定位痛点。作者指出，NullClaw 主打在低算力、廉价设备上运行，但目前的 `web_search` 依赖 Brave Search API（需 Key）或受限的方案，导致核心功能与硬件定位错位，社区急需对 DuckDuckGo 等无需 API Key 的搜索引擎的原生支持。
    *   链接：[nullclaw/nullclaw Issue #871](https://github.com/nullclaw/nullclaw/issues/871)
*   **Issue #870 [OPEN] Gateway accept4 busy loop (100% CPU) on WSL2**：开发者报告了在 WSL2 环境下的严重性能问题，网关线程陷入死循环导致 CPU 满载。该问题直接影响了项目在开发环境中的可用性。
    *   链接：[nullclaw/nullclaw Issue #870](https://github.com/nullclaw/nullclaw/issues/870)

## 5. Bug 与稳定性
今日报告的 Bug 均较为严重，目前尚无对应的 Fix PR：
1.  **[Critical] Issue #870**：WSL2 环境下网关线程 100% CPU 占用（Busy Loop）。
    *   **现象**：`nullclaw gateway` 启动后，即使空闲状态也有一个线程持续满载 CPU。
    *   **影响**：严重影响 WSL2 用户体验，可能导致设备发热或卡顿。
    *   **状态**：Open，暂无修复方案。
2.  **[Major] Issue #871**：低资源设备上 `web_search` 功能不可用。
    *   **现象**：缺少轻量级的搜索引擎支持（如 DuckDuckGo），现有方案需 API Key 或资源消耗过大。
    *   **影响**：违背项目“弱设备运行”的初衷，核心 Agent 能力受限。
    *   **状态**：Open，暂无修复方案。

## 6. 功能请求与路线图信号
结合 Issue #871 的反馈，**原生 DuckDuckGo 支持**或**零配置 Web 搜索方案**极有可能被纳入下一阶段的路线图。
*   用户明确表达了在不增加外部 API 成本和计算资源的前提下使用 Web 搜索的强烈需求。
*   这表明 NullClaw 需要在“易用性”与“零配置”之间寻找平衡，可能需要引入基于爬虫的轻量级搜索适配器。

## 7. 用户反馈摘要
*   **真实痛点**：用户 @uMendex 指出 NullClaw 的目标用户群体（低资源设备持有者）往往不愿意或无法承担第三方 API Key 的成本，目前的 Web 搜索实现过于“重”。
*   **环境兼容性**：用户 @weissfl 验证了 Telegram Bot 功能正常，但暴露了 WSL2 这一特定虚拟化环境下的底层网络/IO 模型兼容性问题（accept4 系统调用处理）。
*   **满意度**：用户对项目整体架构感兴趣，但对细节功能的“开箱即用”程度和资源消耗敏感。

## 8. 待处理积压
目前今日新开的两个 Issue (#870, #871) 均处于未响应状态，建议维护者优先关注：
*   **Issue #870 (CPU 100%)**：涉及底层运行稳定性，属于阻塞型问题，建议优先排查 `accept4` 调用在 WSL2 下的行为。
*   **Issue #871 (Web Search)**：涉及产品核心价值定位，建议评估引入 DuckDuckGo 或其他免费搜索源的可行性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-26)

## 1. 今日速览
IronClaw 项目今日保持高活跃度，核心开发重心集中在功能增强与关键 Bug 修复上。过去 24 小时内共有 18 个 PR 更新（大部分为待合并的大型功能 PR），显示出项目正处于新版本发布前的密集开发与代码审查阶段。社区方面，Issue 讨论热度回升，特别是关于 MCP (Model Context Protocol) 传输层与配置持久化的问题引发了较多关注。虽然今日无新版本发布，但多个 XL 级功能 PR 的推进标志着项目架构正在向更安全、更完善的方向演进。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目虽无合并记录，但有多项关键修复与大型功能提交更新，处于待合并状态：

*   **关键修复提交**：
    *   针对配置覆盖问题的 [PR #2961](https://github.com/nearai/ironclaw/pull/2961) 提交了修复，解决了自托管用户重启服务后 LLM Backend 强制重置为 NearAI 的问题，修复了配置优先级逻辑。
    *   针对 stdio 传输层认证失败的 [PR #2960](https://github.com/nearai/ironclaw/pull/2960) 和 [PR #2957](https://github.com/nearai/ironclaw/pull/2957) 分别提交了修复方案，旨在解决 MCP 激活时的 OAuth 预检错误。
*   **大型功能推进**：
    *   [PR #2684](https://github.com/nearai/ironclaw/pull/2684) 持续更新，计划集成 `signet-core` 以实现工具调用的加密审计日志，这将是安全合规的重要一步。
    *   [PR #2958](https://github.com/nearai/ironclaw/pull/2958) 提出了对 MCP Prompts 的完整支持，增强了 Agent 与 MCP 服务器的交互能力。
    *   [PR #2754](https://github.com/nearai/ironclaw/pull/2754) 推进了 Web 端用户自助 Secret 管理功能，将进一步降低运维门槛。
*   **代码同步**：
    *   [PR #2964](https://github.com/nearai/ironclaw/pull/2964) 尝试合并上游 0.26.0 版本代码，目前已关闭，可能涉及合并策略调整或冲突处理。

## 4. 社区热点
今日社区讨论主要围绕以下议题展开：

*   **[Issue #2923](https://github.com/nearai/ironclaw/issues/2923)** - **MCP stdio 激活失败**：该 Issue 引起了最多关注（👍 1, 评论 2）。用户指出之前的 Issue #2474 被维护者错误关闭（误判为不支持 stdio），实际上代码已支持但存在 Bug。这反映了用户对 MCP 本地化部署的高需求以及对维护者响应质量的监督。
*   **[Issue #2946](https://github.com/nearai/ironclaw/issues/2946)** - **配置持久化失效**：用户反馈升级到 0.25.0 后，数据库配置在每次启动时被重置，严重影响了自托管环境的使用体验。
*   **[Issue #78](https://github.com/nearai/ironclaw/issues/78)** - **消息渠道扩展**：作为一个长期追踪的 Feature Request，仍在持续更新中，表明社区对集成 iMessage、Matrix、飞书等第三方消息渠道有持续需求。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及配置、网络与部署环节：

*   **P0 - 严重功能回归**：
    *   [Issue #2946](https://github.com/nearai/ironclaw/issues/2946)：`llm_backend` 启动时被强制覆盖。影响：导致用户无法持久化自定义 LLM 配置。
    *   [Issue #2923](https://github.com/nearai/ironclaw/issues/2923)：stdio MCP 激活认证失败。影响：阻断本地 MCP 服务器连接。**状态**：已有 Fix PR ([#2960](https://github.com/nearai/ironclaw/pull/2960), [#2957](https://github.com/nearai/ironclaw/pull/2957))。
*   **P1 - 部署受阻**：
    *   [Issue #2963](https://github.com/nearai/ironclaw/issues/2963)：Docker Hub 镜像 `nearai/ironclaw:latest` 缺失。影响：无法按照文档进行 Docker 部署。
*   **P2 - 系统测试**：
    *   [Issue #2956](https://github.com/nearai/ironclaw/issues/2956)：CI/CD 中的 Canary 测试失败（provider-matrix openai-compatible），可能暗示 API 兼容性或环境问题。

## 6. 功能请求与路线图信号
*   **云原生与降本**：[Issue #2965](https://github.com/nearai/ironclaw/issues/2965) 提出支持 Aurora DSQL。用户希望解耦核心数据库与向量扩展，以便在无向量需求场景下使用 Serverless PG 降低成本。这提示项目可能需要考虑模块化数据库支持。
*   **安全与交互**：[Issue #2962](https://github.com/nearai/ironclaw/issues/2962) 提议将沙箱内 Agent 的 `request_permission` 调用透传至 Web UI。这符合 AI Agent 安全落地的趋势，增加用户对沙箱行为的控制权，预计会被高优先级采纳。
*   **渠道生态**：[Issue #78](https://github.com/nearai/ironclaw/issues/78) 持续追踪 IM 渠道集成，与当前待合并的 [PR #2019](https://github.com/nearai/ironclaw/pull/2019) (Native Matrix) 和 [PR #1120](https://github.com/nearai/ironclaw/pull/1120) (Prismer Cloud) 形成呼应，多渠道接入已成为明确路线图。

## 7. 用户反馈摘要
*   **配置体验痛点**：用户对 `config.toml`、环境变量与数据库配置的优先级存在困惑，特别是当数据库配置被意外重置时感到挫败。用户期望“Database > Env > File”的优先级逻辑能被严格执行。
*   **部署文档滞后**：文档指引用 Docker 拉取镜像，但镜像不存在，这给新用户造成了入门障碍。
*   **MCP 标准支持**：用户高度关注 MCP 协议的完整性实现（如 stdio 传输、Prompts 接口），显示出 IronClaw 正被用于严肃的 Agent 工具链集成场景。

## 8. 待处理积压
*   **架构重构 PR**：[PR #2964](https://github.com/nearai/ironclaw/pull/2964)（合并上游 0.26.0）已被关闭，鉴于这是一个涉及数据库迁移的大型变更，建议维护者关注合并策略，避免主分支落后过多。
*   **长期 Issue**：[Issue #78](https://github.com/nearai/ironclaw/issues/78) 仍处于 Open 状态，建议维护者对 P3 优先级的渠道集成给出更明确的时间表或 Roadmap 标识。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-26)

## 1. 今日速览
LobsterAI 今日在代码层面呈现高度活跃状态，核心开发团队集中进行了大量的代码合并与修复工作，共有 9 个 PR 被合并或关闭，显示出项目正在为新的版本发布进行紧密的迭代与稳定性维护。相比之下，社区 Issues 端显得较为冷清，活跃的 4 条 Issue 均为历史遗留问题被标记为 `[stale]`（过期），过去 24 小时内无新增有效互动，表明社区维护重心目前严重向代码侧倾斜，用户反馈响应存在滞后。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日项目进展主要集中在**功能完善**与**稳定性修复**，特别是针对 `cowork` 模块和模型兼容性的深度优化。核心开发者 @liuzhq1986 与 @fisherdaddy 推动了以下关键更新：

*   **核心功能迭代**：PR [#1826](https://github.com/netease-youdao/LobsterAI/pull/1826) 成功合并，引入了远程嵌入提供商配置，并修复了 Windows 下 CJK 语言的记忆搜索问题，显著提升了跨平台兼容性与记忆模块的灵活性。
*   **Cowork 生命周期修复**：通过一系列 Revert 与 Re-apply 操作（如 [#1825](https://github.com/netease-youdao/LobsterAI/pull/1825), [#1824](https://github.com/netease-youdao/LobsterAI/pull/1824)），最终修复了会话生命周期中的竞态条件问题，防止回退计时器错误完成新运行的任务，大幅提升了多轮对话的稳定性。
*   **模型兼容性增强**：PR [#1819](https://github.com/netease-youdao/LobsterAI/pull/1819) 修复了 DeepSeek v4 模型在工具调用时的强制推理内容传递问题；PR [#1818](https://github.com/netease-youdao/LobsterAI/pull/1818) 修复了开启代理后 OpenAI 原厂模型无法访问的网络问题，扩大了模型源支持范围。

## 4. 社区热点
今日社区讨论热度较低，活跃 Issue 均为自动机器人触发的过期标记，缺乏实质性的人工回复。这反映出项目目前处于功能快速迭代期，对社区问题的响应速度有所下降。

*   **连接性问题受关注但未解**：Issue [#39](https://github.com/netease-youdao/LobsterAI/issues/39)（飞书连通无响应）与 Issue [#44](https://github.com/netease-youdao/LobsterAI/issues/44)（Telegram 无法连接）是用户反馈最多的痛点，但至今未获得官方有效回复，仅被系统标记为过期。
*   **易用性诉求**：Issue [#72](https://github.com/netease-youdao/LobsterAI/issues/72) 提出的“自动获取模型列表”需求获得了唯一的 👍 点赞，反映了用户对降低配置门槛的强烈需求。

## 5. Bug 与稳定性
今日报告的问题主要集中于连接与配置，严重程度较高，但目前均无修复 PR 对应：

*   **[严重] 第三方平台连接失败**：Telegram 连接失败（[#44](https://github.com/netease-youdao/LobsterAI/issues/44)）和飞书连接后无响应（[#39](https://github.com/netease-youdao/LobsterAI/issues/39)）。此类问题属于阻塞型 Bug，严重影响用户接入，目前处于 Open 状态。
*   **[中等] 沙箱环境配置限制**：Issue [#54](https://github.com/netease-youdao/LobsterAI/issues/54) 指出沙箱内无法自定义环境变量文件，存在密钥明文传输的安全隐患。
*   **[已修复] DeepSeek V4 兼容性**：今日合并的 PR [#1819](https://github.com/netease-youdao/LobsterAI/pull/1819) 已修复 DeepSeek V4 在工具调用时的逻辑冲突，提升了模型稳定性。

## 6. 功能请求与路线图信号
根据用户反馈与代码动向，释放出以下路线图信号：

*   **模型配置自动化**：用户呼吁在填入 API Key 后自动获取模型列表（Issue [#72](https://github.com/netease-youdao/LobsterAI/issues/72)）。目前代码中尚未体现此功能，预计后续版本可能会优化设置向导体验。
*   **安全与沙箱隔离**：Issue [#54](https://github.com/netease-youdao/LobsterAI/issues/54) 提出的沙箱环境变量需求，结合今日 PR [#1826](https://github.com/netease-youdao/LobsterAI/pull/1826) 中对远程 Embedding 的支持，预示项目正在加强外部服务集成的安全性配置，未来可能会增强沙箱与宿主机的安全交互接口。

## 7. 用户反馈摘要
从 Issues 历史记录中提炼出以下用户真实声音：

*   **痛点**：配置流程繁琐，特别是模型名称需手动输入；第三方平台（飞书、Telegram）接入门槛高，常遇到网络或配置报错且无明确报错指引。
*   **场景**：用户倾向于将 LobsterAI 作为统一入口对接多种 IM 平台，并希望本地部署模型能具备联网能力。
*   **情绪**：由于 Issues 长期未得到回复（均被标记 Stale），部分用户可能感到被忽视，建议项目组引入更多社区运营力量进行答疑。

## 8. 待处理积压
以下重要 Issue 长期未获处理，建议维护者优先关注：

1.  **[连接性] [Issue #44](https://github.com/netease-youdao/LobsterAI/issues/44)**：Telegram 无法连接问题。由于涉及网络环境与代理配置，需要官方提供更详细的故障排查文档或配置指引。
2.  **[功能性] [Issue #39](https://github.com/netease-youdao/LobsterAI/issues/39)**：飞书通道连接成功但无响应。此问题直接影响国内企业级用户的使用体验，建议优先排查消息回调逻辑。
3.  **[安全性] [Issue #54](https://github.com/netease-youdao/LobsterAI/issues/54)**：沙箱环境变量注入需求。涉及敏感信息保护，属于企业级部署的刚需功能。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-26)

## 1. 今日速览
Moltis 项目今日保持高度活跃的开发状态，共有 7 个 PR 更新与 2 个 Issue 更新。项目重点集中在 Web UI 交互优化与底层架构修复上，维护者对社区反馈的响应速度极快，针对今日新报告的 Bug 立即提出了修复方案。整体来看，项目正处于功能迭代与稳定性提升并行的健康阶段，无新版本发布，但代码库变动较为频繁。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 2 个 Pull Requests 顺利合并/关闭，显著提升了系统的稳定性与 MCP 兼容性：
- **MCP 调用逻辑优化**：PR [#874](https://github.com/moltis-org/moltis/pull/874) 已合并，移除了捆绑的 `mcporter` skill，优先使用原生 MCP 工具。此举修正了 Prompt 路由逻辑，避免了不必要的兼容层开销，明确了 Skills 与 Tools 的边界。
- **定时任务稳定性修复**：PR [#871](https://github.com/moltis-org/moltis/pull/871) 已合并，引入了心跳唤醒冷却机制，成功解决了 `exec` 回调导致的心跳循环重触发问题，增强了 Cron 服务的鲁棒性。

## 4. 社区热点
今日关注点主要集中在功能增强与架构扩展：
- **Web UI 文件上传功能 ([#876](https://github.com/moltis-org/moltis/pull/876))**：开发者 @Cstewart-HC 提交了为 Web 聊天界面增加文件上传按钮的 PR，旨在对标主流 LLM 提供商的交互体验，该功能备受期待。
- **轻量级浏览器后端 Obscura ([#869](https://github.com/moltis-org/moltis/pull/869))**：开发者 @penso 提议引入 Obscura 作为可选的 Sidecar 浏览器后端，该方案零新增 Rust 依赖，通过子进程模式运行，引发了关于架构解耦与性能的讨论。

## 5. Bug 与稳定性
今日修复与报告的 Bug 主要涉及配置管理与模型兼容性：
- **[高优] Web 端无法禁用捆绑 Skill ([#875](https://github.com/moltis-org/moltis/issues/875))**：
    - **问题描述**：用户报告在 Web UI 中无法禁用捆绑的 Skills。
    - **修复进展**：维护者 @Cstewart-HC 迅速响应，提交了 PR [#877](https://github.com/moltis-org/moltis/pull/877) 和 PR [#878](https://github.com/moltis-org/moltis/pull/878)。前者修复了配置层的逻辑判断，后者修正了 UI 状态显示，目前修复 PR 均处于待合并状态。
- **[已解决] Qwen3.6-35B-A3B 使用 MCP 服务异常 ([#873](https://github.com/moltis-org/moltis/issues/873))**：
    - **状态**：该 Issue 已关闭。结合 PR #874 的合并来看，通过移除 `mcporter` 中间层并优化原生 MCP 调用路径，此问题已得到解决。

## 6. 功能请求与路线图信号
- **交互体验对齐主流**：PR [#876](https://github.com/moltis-org/moltis/pull/876) 显示项目正致力于补齐 Web 端的基础交互能力（文件上传），使 Moltis 的使用体验更接近 ChatGPT 等成熟产品。
- **架构灵活性扩展**：PR [#869](https://github.com/moltis-org/moltis/pull/869) 和 PR [#826](https://github.com/moltis-org/moltis/pull/826)（摘要模型配置）表明项目正在增强后端的可插拔能力，允许用户接入更多样的浏览器后端和模型提供商，这可能是下一阶段的发展重点。

## 7. 用户反馈摘要
- **配置控制权需求**：Issue #875 的出现表明用户希望对预置的 Bundled Skills 拥有完全的控制权（启用/禁用），而非被动接受默认开启状态。
- **原生工具调用偏好**：Issue #873 的反馈揭示了用户在使用特定模型（如 Qwen）对接 MCP 时，期望系统直接调用工具而非经过复杂的兼容层，这推动了对原生 MCP 支持的优化。

## 8. 待处理积压
- **PR [#826](https://github.com/moltis-org/moltis/pull/826)**：该 PR 涉及 Compaction 功能的模型配置映射，已提交数日但仍有更新，属于功能性增强，建议维护者尽快Review 以合并此重要能力。
- **PR [#877](https://github.com/moltis-org/moltis/pull/877) & [#878](https://github.com/moltis-org/moltis/pull/878)**：针对今日 Bug 的修复 PR，建议优先合并以解决用户痛点。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-04-26)

## 1. 今日速览
CoPaw (仓库: agentscope-ai/QwenPaw) 今日保持了较高的开发活跃度，发布了修复版本 **v1.1.4.post2**，主要解决了渠道审批功能的阻塞问题。社区反馈方面，配置持久化问题成为焦点，多名用户报告重启或刷新后配置丢失，涉及 Agent 语言、计划模式及长期记忆等核心设置，严重影响体验。功能迭代上，社区正积极推动 Tauri 桌面端重构、语义化技能路由及新协议支持，显示出项目正从单一 Web 应用向多端、多协议架构演进。整体来看，项目处于快速迭代修复期，稳定性需引起重视。

## 2. 版本发布
- **[v1.1.4.post2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.4.post2)**
  - **更新内容**：
    1. **fix**: 修复了渠道中审批功能失效的问题 (PR [#3832](https://github.com/agentscope-ai/QwenPaw/pull/3832))。
    2. **chore**: 版本号更新至 1.1.4.post2 (PR [#3833](https://github.com/agentscope-ai/QwenPaw/pull/3833))。
  - **影响评估**：此次更新为补丁版本，建议开启了审批流程的用户尽快升级，以免流程中断。

## 3. 项目进展
今日共有 3 个 PR 完成合并/关闭，主要集中在版本发布与缺陷修复。
- **[PR #3832](https://github.com/agentscope-ai/QwenPaw/pull/3832) [MERGED]**: 修复渠道审批功能失效问题，保障了工作流关键节点的可用性。
- **[PR #3833](https://github.com/agentscope-ai/QwenPaw/pull/3833) [MERGED]**: 版本号常规升级。
- **[PR #2338](https://github.com/agentscope-ai/QwenPaw/pull/2338) [CLOSED]**: 关于 UI 语言设置持久化到服务端的 PR 已关闭。该功能原计划解决跨浏览器/设备语言设置不同步问题，关闭可能意味着方案调整或搁置。

## 4. 社区热点
今日讨论最热烈的问题集中在配置持久化与用户体验上。
- **[Issue #3824](https://github.com/agentscope-ai/QwenPaw/issues/3824)**: **配置信息丢失问题**。用户反馈刷新页面或切换按钮后，Agent 的语言、计划模式及 LLM 配置全部丢失。此问题引发了 4 条评论，是今日最受关注的高优先级 Bug。
- **[Issue #3817](https://github.com/agentscope-ai/QwenPaw/issues/3817)**: **长期记忆向量模型配置失效**。用户详细分析了 Docker 容器重启后配置被初始化逻辑覆盖的根因，展现了高质量的技术反馈。
- **[Issue #3826](https://github.com/agentscope-ai/QwenPaw/issues/3826)**: **Windows 平台兼容性**。用户报告 v1.1.4 版本在 Win10/Win2012 上仅显示外框，无法渲染内容，回退至 v1.1.2 后正常，讨论了特定版本的兼容性回归。

## 5. Bug 与稳定性
今日报告了多个影响使用的 Bug，按严重程度排序如下：

**严重:**
1.  **[Issue #3824](https://github.com/agentscope-ai/QwenPaw/issues/3824)**: 配置丢失。用户操作无法保存，严重影响 Agent 的构建与使用。目前暂无关联 Fix PR。

**高危:**
1.  **[Issue #3817](https://github.com/agentscope-ai/QwenPaw/issues/3817)**: Docker 环境下向量模型配置无法持久化，导致长期记忆功能不可用。
2.  **[Issue #3826](https://github.com/agentscope-ai/QwenPaw/issues/3826)** [CLOSED]: Windows 平台 v1.1.4 版本 UI 渲染失败，导致用户被迫降级。

**中等:**
1.  **[Issue #3821](https://github.com/agentscope-ai/QwenPaw/issues/3821)**: 备份功能从未成功过，功能疑似不可用。
2.  **[Issue #3836](https://github.com/agentscope-ai/QwenPaw/issues/3836)**: `browser_use` 工具报错 `net::ERR_INTERNET_DISCONNECTED`，可能涉及环境配置或工具本身的网络请求处理。
3.  **[Issue #3795](https://github.com/agentscope-ai/QwenPaw/issues/3795)**: 复杂动作后频繁出现 `422 MODEL_EXECUTION_FAILED` 错误。

**低危/体验问题:**
1.  **[Issue #3835](https://github.com/agentscope-ai/QwenPaw/issues/3835)**: WebUI 中无法重命名或删除自定义 ACP agents。
2.  **[Issue #3830](https://github.com/agentscope-ai/QwenPaw/issues/3830)**: Console GUI 在长对话切换时性能下降明显。

## 6. 功能请求与路线图信号
用户与开发者提出了多项有价值的 Feature Request，部分已有 PR 支持：
- **桌面端重构**: **[PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)** 提议引入 Tauri 2.x 替代原有架构，可能带来更轻量、高性能的桌面端体验。
- **协议扩展**: **[PR #3839](https://github.com/agentscope-ai/QwenPaw/pull/3839)** 实现了 XiaoYi A2A 协议，支持双 WebSocket 连接，增强了 Agent 间的通信能力。
- **模型管理优化**: **[PR #3819](https://github.com/agentscope-ai/QwenPaw/pull/3819)** 重构了模型管理模态框，用可浏览的远程模型列表替代自动发现，提升易用性。
- **自动备份**: **[Issue #3823](https://github.com/agentscope-ai/QwenPaw/issues/3823)** 用户请求提供 API 或命令行接口以支持自动化备份，反映了生产环境的数据安全需求。

## 7. 用户反馈摘要
- **痛点**: **稳定性与持久化**是最大痛点。多个 Issue (#3824, #3817, #3821) 均指向“配置/数据存不住”的问题，无论是 Web 刷新还是容器重启。
- **体验**: Windows 客户端性能和渲染问题 (#3826, #3830) 让桌面端用户体验受损。
- **场景**: 用户对**微信渠道** (#3837) 和 **browser_use** (#3836) 等外部集成场景的使用需求较高，但在消息截断和网络连接上遇到阻碍。
- **满意度**: 尽管存在 Bug，用户对长期记忆、向量模型等高级功能的探索热情很高，并愿意提供详细的根因分析（如 #3817），显示出社区具有较高的技术素养。

## 8. 待处理积压
- **[PR #3117](https://github.com/agentscope-ai/QwenPaw/pull/3117)**: 语义化技能路由功能已提交半月有余，目前处于 "Under Review" 状态，需要维护者尽快推进合并或反馈。
- **[Issue #3824](https://github.com/agentscope-ai/QwenPaw/issues/3824)**: 配置丢失严重 Bug，需立即响应并修复。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-04-26)

## 1. 今日速览
ZeptoClaw 项目今日整体呈现**“高强度维护，低用户干扰”**的态势。过去 24 小时内，项目未见新的 Issues 动态，也未发布新版本，但代码库底层进行了关键的依赖升级与 CI 架构优化。共有 4 个 PR 产生动态，其中 3 个已关闭（主要涉及依赖更新与 CI 扩展的前置尝试），1 个新的 CI 优化 PR 正在待合并状态。这表明项目正处于代码质量夯实阶段，维护者正致力于解决依赖兼容性问题并扩大测试覆盖率，以确保后续功能的稳定性。

## 2. 版本发布
无。

## 3. 项目进展
今日项目进展主要集中在**依赖健康度维护**与**CI 测试覆盖率增强**两方面，虽然无新功能上线，但消除了潜在的编译隐患。

*   **依赖升级与编译修复 (已合并/关闭)**
    *   **PR #547 [CLOSED] chore(deps): bump sha2 0.10 → 0.11**: 维护者 @qhkm 成功解决了核心依赖 `sha2` 从 0.10 升级至 0.11 过程中的破坏性变更。由于新版本 `digest` 输出类型变更（不再实现 `LowerHex`），导致原有代码构建失败。该 PR 修复了三处调用点，确保了项目能够跟随上游安全更新。
        *   链接: [qhkm/zeptoclaw PR #547](https://github.com/qhkm/zeptoclaw/pull/547)
    *   **PR #517 [CLOSED] [dependencies, rust] chore(deps): bump sha2**: 这是 Dependabot 发起的自动更新请求，因手动修复 PR #547 的介入而关闭，标志着依赖更新流程的闭环。
        *   链接: [qhkm/zeptoclaw PR #517](https://github.com/qhkm/zeptoclaw/pull/517)

*   **CI 架构优化 (进行中)**
    *   **PR #548 [OPEN] chore(ci): expand CI matrix for optional integration features**: 这是一个关键的基础设施更新。针对 `memory-embedding`、`screensh...` 等可选集成路径之前在默认构建中被忽略的问题，该 PR 扩展了 CI 矩阵。此举将防止“默认构建通过但可选功能编译失败”的情况发生，显著提升了代码交付质量。
        *   链接: [qhkm/zeptoclaw PR #548](https://github.com/qhkm/zeptoclaw/pull/548)
    *   **PR #544 [CLOSED]**: 此为 @manelsen 提交的 CI 扩展尝试，涉及 `channel-email`、`google`、`whatsapp-web` 等功能的编译检查。该 PR 已关闭，相关变更似乎正通过 PR #548 以新的分支形式继续推进。
        *   链接: [qhkm/zeptoclaw PR #544](https://github.com/qhkm/zeptoclaw/pull/544)

## 4. 社区热点
今日社区讨论较为冷清，暂无评论数或互动数显著的 Issues 或 PRs。活动主要集中在代码提交层面，显示项目目前处于维护者主导的内部迭代期。

## 5. Bug 与稳定性
今日无用户报告的新 Bug。但在依赖维护过程中发现并修复了一处**编译层面的兼容性问题**：

*   **[已修复] sha2 0.11 升级导致构建失败**
    *   **严重程度**: 中（影响构建）
    *   **详情**: 依赖库 `sha2` 升级后，`finalize()` 输出类型变更，导致 `format!("{:x}", ...)` 宏调用失败。
    *   **状态**: 已通过 PR #547 修复，代码已通过新的哈希处理方式适配。

## 6. 功能请求与路线图信号
虽然无显式的功能请求 Issues，但从 PR #544 和 #548 的动向可以捕捉到项目发展的**隐性路线图信号**：

*   **多渠道集成强化**: CI 矩阵的扩展明确指向了对 `channel-email`（邮件渠道）、`whatsapp-web`（WhatsApp）、`google`（谷歌服务集成）的支持维护。这暗示 ZeptoClaw 正致力于成为多模态、多渠道的 AI 智能体平台，确保这些可选模块在任何时候都是可编译且可用的。

## 7. 用户反馈摘要
过去 24 小时内无新增 Issues 或评论，无法提取有效用户反馈。这通常意味着版本处于相对稳定期，或者用户群体尚处于对现有版本的消化期。

## 8. 待处理积压
当前积压较少，但有一个技术细节需关注：

*   **PR #548 待合并**: 目前唯一处于 Open 状态的 PR。该 PR 包含了重要的 CI 矩阵扩展，建议维护者尽快审查合并，以防止后续针对可选功能的代码提交绕过测试检查。

---
**分析师点评**: ZeptoClaw 今日虽然看似“沉寂”，实则“内功深厚”。通过主动升级依赖并扩展 CI 矩阵，维护者正在为后续可能的多渠道集成功能铺平道路。特别是对 `sha2` 变更的快速响应，显示了项目对代码健康度的高标准要求。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*