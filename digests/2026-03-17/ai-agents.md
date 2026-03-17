# OpenClaw 生态日报 2026-03-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-17 02:26 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
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

# OpenClaw 项目动态日报 (2026-03-17)

## 1. 今日速览
OpenClaw 项目今日呈现出**极高的社区活跃度**与**较高的不稳定性**并存的状态。过去 24 小时内，Issue 与 PR 的更新量均达到 500 条，显示出社区对项目的强烈关注。然而，这种关注主要集中在**版本 v2026.3.12 引发的严重回归问题**上，特别是内存泄漏（OOM）、WhatsApp 通道断裂以及网关频繁重启等严重故障。虽然社区提交了大量修复 PR（待合并 348 条），但官方尚未发布新版本进行修复，导致大量用户受阻。整体而言，项目正处于修复近期版本引入的严重 Bug 的关键时期。

## 2. 版本发布
*   **无新版本发布**。
*   **注意**：当前大量 Bug 报告针对 `v2026.3.12` 版本，建议尚未升级的用户暂缓升级，等待修复补丁。

## 3. 项目进展
尽管 Issue 列表被 Bug 淹没，但代码库仍有不少旨在提升稳定性和功能的 PR 活跃更新（今日待合并 PR 数量高达 348 条，已处理 152 条）：

*   **稳定性修复**：
    *   [PR #45858](https://github.com/openclaw/openclaw/pull/45858): 修复了内存嵌入功能在不同代理间的一致性问题（401 鉴权错误），提升了记忆功能的可靠性。
    *   [PR #45762](https://github.com/openclaw/openclaw/pull/45762) & [PR #45763](https://github.com/openclaw/openclaw/pull/45763): 针对 429 限流错误引入了指数退避重试机制和更友好的错误提示，试图解决模型调用链快速失败的问题。
    *   [PR #45817](https://github.com/openclaw/openclaw/pull/45817) & [PR #45815](https://github.com/openclaw/openclaw/pull/45815): 加强了 Android 客户端的权限处理和音频播放稳定性。
    *   [PR #47222](https://github.com/openclaw/openclaw/pull/47222): 修复了 systemd 环境下 CLI 断开导致网关误接收 SIGTERM 并重启的问题。
*   **功能增强**：
    *   [PR #45764](https://github.com/openclaw/openclaw/pull/45764): 浏览器工具默认改用 Chrome MCP (`existing-session`)，简化了用户配置流程。
    *   [PR #45824](https://github.com/openclaw/openclaw/pull/45824) (已关闭): 尝试修复 OpenRouter 新模型静态快照导致图片丢失的问题。

## 4. 社区热点
今日社区讨论焦点几乎全部集中在 v2026.3.12 的质量问题上：

1.  **国际化支持受阻**：[Issue #3460](https://github.com/openclaw/openclaw/issues/3460) (👍3, 评论 101)。虽然社区热情高涨，但维护者明确表示目前没有精力支持多语言，这是一个长期的痛点。
2.  **UI 与基础功能瘫痪**：[Issue #45471](https://github.com/openclaw/openclaw/issues/45471) (评论 76)。升级后 UI 聊天界面无法打开，属于严重的回归 Bug，严重影响可用性。
3.  **严重的内存泄漏**：[Issue #45064](https://github.com/openclaw/openclaw/issues/45064) (评论 25)。执行基础 CLI 命令即触发 OOM 崩溃，导致 CLI 完全不可用。
4.  **网关稳定性危机**：[Issue #48205](https://github.com/openclaw/openclaw/issues/48205) (评论 19)。网关平均每 50 分钟无故重启，严重破坏长时运行任务。

## 5. Bug 与稳定性
今日报告的 Bug 数量巨大且严重程度高，主要集中在 **v2026.3.12** 引入的回归问题：

*   **🔴 致命 - 应用不可用**
    *   **内存溢出 (OOM)**: [Issue #45064](https://github.com/openclaw/openclaw/issues/45064) - 基础命令导致崩溃。[Issue #41778](https://github.com/openclaw/openclaw/issues/41778) - 4GB 服务器执行发送命令崩溃。[Issue #45440](https://github.com/openclaw/openclaw/issues/45440) - 树莓派 4 内存暴涨。
    *   **WhatsApp 通道断裂**: [Issue #45171](https://github.com/openclaw/openclaw/issues/45171) & [Issue #45474](https://github.com/openclaw/openclaw/issues/45474) - 状态显示已连接但无法收发消息，或频繁重连。
    *   **UI 崩溃**: [Issue #45471](https://github.com/openclaw/openclaw/issues/45471) - Chat 界面无法打开。

*   **🟠 严重 - 功能受损**
    *   **网关不稳定**: [Issue #48205](https://github.com/openclaw/openclaw/issues/48205) - 定期重启。[Issue #45772](https://github.com/openclaw/openclaw/issues/45772) - 心跳停止。
    *   **配置回滚**: [Issue #45287](https://github.com/openclaw/openclaw/issues/45287) - 升级因插件验证失败自动回滚。
    *   **平台兼容性**: [Issue #45275](https://github.com/openclaw/openclaw/issues/45275) - Windows 构建失败。[Issue #8619](https://github.com/openclaw/openclaw/issues/8619) - macOS 安装脚本报错。

*   **已有修复意向 (Fix PRs)**
    *   针对网关重启：[PR #47222](https://github.com/openclaw/openclaw/pull/47222) (SIGTERM), [PR #47388](https://github.com/openclaw/openclaw/pull/47388) (Handshake timeout)。
    *   针对 Model Fallback 问题：[PR #45762](https://github.com/openclaw/openclaw/pull/45762), [PR #45763](https://github.com/openclaw/openclaw/pull/45763)。

## 6. 功能请求与路线图信号
1.  **多语言支持**: [Issue #3460](https://github.com/openclaw/openclaw/issues/3460) 呼声极高，虽然官方暂无力支持，但这显然是扩大用户基数的必经之路。
2.  **API 密钥安全管理**: [Issue #7916](https://github.com/openclaw/openclaw/issues/7916) (👍10) 提出加密存储 API Key，而非明文存储，这是安全性的重要改进。
3.  **Token 预算优化**: [Issue #9157](https://github.com/openclaw/openclaw/issues/9157) (👍12) 指出工作区文件注入浪费了大量 Token，提议优化注入策略。
4.  **Sub-agent 上下文继承**: [Issue #45868](https://github.com/openclaw/openclaw/issues/45868) (已关闭) 反映了子代理会话空间解析错误的问题，这对于多智能体协作至关重要。

## 7. 用户反馈摘要
*   **痛点**：用户对 `v2026.3.12` 版本质量感到沮丧，普遍反映升级后出现内存占用过高、服务无故重启、核心通道（特别是 WhatsApp）不可用等问题。
*   **场景**：大量用户在低配环境（如 4GB 内存服务器、树莓派）部署时遇到阻碍；也有用户在进行多智能体协作时遇到会话上下文错误。
*   **满意度**：虽然有大量 Bug 报告，但社区提交 PR 的积极性很高（348 个待合并），说明开发者社区对项目依然抱有信心并积极贡献代码。

## 8. 待处理积压
*   **WhatsApp 登录死锁**: [Issue #4686](https://github.com/openclaw/openclaw/issues/4686) (👍18) - 长期存在的 WhatsApp 登录卡在 "logging in" 的问题，影响广泛。
*   **安全路线图**: [Issue #11829](https://github.com/openclaw/openclaw/issues/11829) - 关于保护 API Key 不泄露给 LLM 的安全提议，尚未有明确实施计划。
*   **飞书图片预览**: [Issue #22608](https://github.com/openclaw/openclaw/issues/22608) - 飞书渠道发送图片无法预览的问题长期未决。

---

## 横向生态对比

# 开源 AI 智能体生态横向对比分析报告 (2026-03-17)

## 1. 生态全景
当前开源个人 AI 助手与自主智能体生态正处于**"架构分化期"与"质量阵痛期"并存的阶段**。一方面，各项目正从单一的聊天机器人向具备长期记忆、多模态、多工具协作的复杂 Agent 演进，出现了以 OpenClaw 为代表的"大而全"平台与以 NanoBot/PicoClaw 为代表的"轻量化/特定场景"架构的分化；另一方面，随着功能复杂度的提升，**稳定性（OOM、死循环）**、**兼容性（模型协议、系统环境）**以及**安全与易用性的平衡**成为全行业共同面临的严峻挑战。

## 2. 各项目活跃度对比

| 项目名称 | 今日 Issue 更新 | 今日 PR 更新 | 版本发布 | 健康度/状态评估 | 核心特征 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 (极高) | ~500 (极高) | 无 (修复中) | ⚠️ **高风险**<br>严重回归 Bug 积压 | 生态核心参照，当前受困于质量危机 |
| **NanoBot** | 166 (关闭率高) | 57 (合并) | **v0.1.4.post5** | ✅ **健康**<br>高效迭代，吞吐能力强 | 轻量级，多渠道扩展迅速 |
| **Zeroclaw** | 44 (活跃) | 31 (待合并) | v0.4.3 (1日10版) | 🚀 **激进**<br>功能爆发，配置复杂 | 企业级特性，安全沙箱严格 |
| **PicoClaw** | 21 | 73 (35 合并) | Nightly | 🛠️ **重构中**<br>架构调整，多模态增强 | 嵌入式/边缘计算友好，架构灵活 |
| **CoPaw** | **36 (新增)** | 26 (待合并) | 0.1.0b1 (准备中) | 🔥 **热度高**<br>用户增长快，痛点明显 | Web 端优先，NAS/Synology 场景 |
| **IronClaw** | 25 | 50 (20 合并) | 无 | 🛡️ **稳定化**<br>Bug 修复冲刺 | Routine/任务调度强，NEAR 生态 |
| **NanoClaw** | 19 (新增 FR) | 21 (合并) | 无 | 🧭 **转型期**<br>战略规划清晰，架构升级 | 安全与可观测性增强 |
| **NullClaw** | 低 | 25 (高) | 无 | 🛠️ **底层攻坚**<br>专注推理模型适配 | 兼容性修复，非 systemd 支持 |
| **TinyClaw** | 4 | 6 | **v0.0.14** | ⚠️ **Web 不稳**<br>调度系统重构 | 调度内置化，UI 简化 |
| **Moltis** | 2 | 7 | 无 | 🩹 **修整中**<br>解决边缘兼容性 | 本地模型 兼容性好 |
| **ZeptoClaw** | 2 | 3 | 无 | 📉 **平稳**<br>企业级集成开发 | 云原生，Vertex AI 支持 |
| **EasyClaw** | 3 | 0 | **v1.7.0** | ⚠️ **平台故障**<br>Windows 兼容性回归 | 简单易用，跨平台客户端 |

> **注**：健康度评估基于 Issue 解决率、Bug 严重程度及发布频率综合判断。

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照项目**，OpenClaw 拥有最大的社区规模和最全的功能集，但在今日的横向对比中暴露出明显的**规模不经济**问题。

*   **优势**：生态位高，是功能定义的风向标；拥有最丰富的 Channels（WhatsApp, WeChat 等）和 Connectors；社区贡献基数大（348 个待合并 PR）。
*   **劣势 (对比显现)**：
    *   **稳定性失控**：相比 NanoBot 的高效修复和 Zeroclaw 的快速迭代，OpenClaw 因 `v2026.3.12` 陷入严重的质量危机（OOM、UI 崩溃），且官方响应滞后。
    *   **技术债沉重**：长期存在的 WhatsApp 登录死锁和国际化缺失，显示出维护者处理历史积压问题的吃力。
*   **定位总结**：OpenClaw 是试图满足所有需求的"瑞士军刀"，但当前正处于**"大而不强"的脆弱时刻**，给了 NanoBot、CoPaw 等新兴项目抢占细分市场的机会。

## 4. 共同关注的技术方向

分析发现，尽管项目定位不同，但全社区在以下四个技术方向上达成了高度共识：

1.  **多模态交互闭环**：
    *   **涉及项目**: PicoClaw, ZeptoClaw, Moltis, CoPaw.
    *   **具体诉求**: 社区不再满足于简单的文字回复，**TTS/ASR (语音)**、**Vision (视觉)** 在工具调用中的稳定性成为焦点。例如 ZeptoClaw (#368) 和 Moltis 正在攻坚图片在多轮工具调用中的 Base64 编码传递问题。

2.  **上下文与记忆管理**：
    *   **涉及项目**: OpenClaw, TinyClaw, Zeroclaw.
    *   **具体诉求**: 随着任务变长，Token 预算优化、内存压缩和知识图谱成为刚需。Zeroclaw 引入了知识图谱，OpenClaw 和 CoPaw 都在解决内存压缩导致的崩溃或失忆问题。

3.  **安全性与易用性的博弈**：
    *   **涉及项目**: Zeroclaw, PicoClaw, NanoClaw.
    *   **具体诉求**: Zeroclaw 因安全策略过严导致配置极难上手，PicoClaw 和 NanoClaw 则在增加 `exec` 禁用、日志脱敏和 Prompt 注入检测。社区正在寻找"安全沙箱"与"开发者自由"之间的平衡点。

4.  **企业级/云原生基础设施**：
    *   **涉及项目**: NullClaw, IronClaw, ZeptoClaw.
    *   **具体诉求**: 对 **OpenRC (Alpine)**、**OAuth Token 自动刷新**、**Webhook 推送**及 **Vertex AI/Bedrock** 等企业级后端的支持，表明这些项目正在寻求生产环境的落地。

## 5. 差异化定位分析

*   **架构复杂度**：
    *   **重型**: OpenClaw (All-in-one), Zeroclaw (安全优先).
    *   **轻型/模块化**: NanoBot (核心极简), PicoClaw (事件驱动), ZeptoClaw (协议标准).
*   **目标用户**：
    *   **极客/开发者**: NanoBot (配置灵活), NullClaw (底层适配).
    *   **企业/团队**: IronClaw (Routine), Zeroclaw (知识管理), CoPaw (Web 协作).
    *   **个人/小白**: EasyClaw (开箱即用), TinyClaw (UI 优先).
*   **技术栈偏好**：
    *   **Python 为主**: OpenClaw, NanoBot, CoPaw, Moltis.
    *   **Rust/系统级**: Zeroclaw, ZeptoClaw (性能敏感).

## 6. 社区热度与成熟度

*   **第一梯队**:
    *   **NanoBot**: **快速迭代期**。极高的 Issue 关闭率和稳定的版本发布，显示出维护团队强大的吞吐能力，社区信心最强。
    *   **OpenClaw**: **质量危机期**。虽然活跃度最高，但负面反馈激增，处于关键转折点，急需修复版本挽回信誉。

*   **第二梯队 (高潜/成长)**:
    *   **Zeroclaw**: **功能爆发期**。一日十版的发布节奏激进，但文档和配置体验拖了后腿。
    *   **CoPaw**: **用户增长期**。用户反馈极其活跃，但对稳定性的抱怨增多（CPU/内存），正面临"从小而美到大众化"的性能阵痛。

*   **第三梯队 (深耕/垂直)**:
    *   **IronClaw, NullClaw, PicoClaw**: **稳定建设期**。各自在任务调度、模型兼容性和嵌入式场景默默耕耘，PR 多为实质性修复，社区讨论质量较高。

## 7. 值得关注的趋势信号

1.  **调度系统的内置化**:
    *   TinyClaw (v0.0.14) 和 OpenClaw 都在放弃系统 Crontab，转向内置的进程调度和日历 UI。**建议开发者**: Agent 平台应具备独立的任务编排能力，而非依赖宿主机环境。

2.  **多模型路由 协议化**:
    *   多个项目 (NullClaw, NanoBot, CoPaw) 都在解决非 OpenAI 模型（DeepSeek, Claude, GLM）的适配问题，且不仅是 API 兼容，更涉及字段解析（如 `reasoning_content`）。**建议开发者**: 未来的 Agent 架构设计必须假设底层 LLM 是异构的。

3.  **"连接"比"模型"更痛**:
    *   今日大量的 Bug 报告集中在 WebSocket 断连、SSE 缓冲、OAuth 过期和 Docker 网络配置上。这说明 Agent 的**工程稳定性**目前比**模型智能**更影响用户体验。

4.  **Web 端管理成为标配**:
    *   几乎所有活跃项目都在加强 Web UI (TinyOffice, CoPaw Console)。用户越来越倾向于通过可视化界面配置 Agent，而非手写 JSON/TOML。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-17)

## 1. 今日速览
NanoBot 项目今日呈现出**极高活跃度**与**快速迭代**的健康状态。随着 **v0.1.4.post5** 版本的发布，社区反馈热烈，过去24小时内共有 **57 个 PR 被合并**，涉及 29 位新贡献者。项目组高效处理了大量积压与新增 Issue，关闭了 166 个问题（解决率高达 88%），显示出维护团队强大的吞吐能力。功能上，新的 Channel 集成（Teams、ESPHome）与底层架构优化（流式输出、实例锁）正在快速推进。

## 2. 版本发布
### [v0.1.4.post5](https://github.com/HKUDS/nanobot/releases/tag/v0.1.4.post5)
- **更新重点**：此版本主要侧重于**稳定性打磨与细节优化**。官方描述为"少了一些炫技，多了几分细腻"，着重于修复边缘情况与提升日常使用的可信度。
- **数据支撑**：合并了 57 个 PR，迎来了 29 位新贡献者，社区规模显著扩大。
- **破坏性变更**：暂无明确的破坏性变更报告，建议用户从旧版升级时留意配置文件的兼容性（特别是 WeCom 等新渠道）。

## 3. 项目进展
今日共有 **191 个 PR 更新（合并/关闭）**，主要进展如下：
- **渠道扩展**：
  - [PR #1327](https://github.com/HKUDS/nanobot/pull/1327) (Merged): 成功集成 **企业微信** 渠道支持。
  - [PR #2129](https://github.com/HKUDS/nanobot/pull/2129) (Open): 新增 **Microsoft Teams** 渠道支持。
  - [PR #2128](https://github.com/HKUDS/nanobot/pull/2128) (Closed): 尝试集成 **ESPHome** 语音助手通道（虽然 PR 已关闭，但相关探索表明项目正向 IoT 领域拓展）。
- **核心功能增强**：
  - [PR #1839](https://github.com/HKUDS/nanobot/pull/1839) (Open): 引入 **LLM 流式响应** 支持，提升交互体验。
  - [PR #1224](https://github.com/HKUDS/nanobot/pull/1224) (Open): 提出双层架构，增强 Agent Runtime 的任务中断与控制能力。
  - [PR #2127](https://github.com/HKUDS/nanobot/pull/2127) (Open): 增加 **实例锁**，防止重复启动导致的资源冲突。

## 4. 社区热点
今日讨论最热烈的话题集中在**多模型支持**与**渠道配置**上：
- **[Issue #336](https://github.com/HKUDS/nanobot/issues/336) [CLOSED]**: **DeepSeek 模型配置问题**。
  - **热度**：20 条评论。
  - **诉求**：用户在使用 DeepSeek API 时遇到 Provider 识别错误。这反映了用户对集成国产/非标准 OpenAI 接口模型的强烈需求，且希望配置过程更加简单透明。
- **[Issue #430](https://github.com/HKUDS/nanobot/issues/430) [CLOSED]**: **Web Search 使用咨询**。
  - **热度**：14 条评论。
  - **诉求**：用户对内置联网搜索功能的配置存在困惑，文档可能需要进一步完善。
- **[Issue #1988](https://github.com/HKUDS/nanobot/issues/1988) [OPEN]**: **企业微信 渠道配置失效**。
  - **热度**：10 条评论。
  - **诉求**：新版本升级后配置文件结构变化导致网关无法启动。这是新功能快速迭代中常见的文档与迁移指引缺失问题。

## 5. Bug 与稳定性
今日报告的关键 Bug 主要涉及**循环执行**与**工具可靠性**：
1.  **[P1] Agent 重复回复** ([Issue #1692](https://github.com/HKUDS/nanobot/issues/1692)):
    - **现象**：Telegram Bot 同时发送一条 Markdown 渲染的和一条纯文本的重复消息。
    - **状态**：Open，影响用户体验，需排查 Channel 层的消息分发逻辑。
2.  **[P1] Agent 陷入死循环** ([Issue #672](https://github.com/HKUDS/nanobot/issues/672)):
    - **现象**：Bot 在任务完成或失败后，持续重复发送相同的回复。
    - **状态**：Closed（可能在 v0.1.4.post5 中修复）。
3.  **[P2] 技能调用"假装执行"** ([Issue #594](https://github.com/HKUDS/nanobot/issues/594)):
    - **现象**：LLM 声称调用了工具，但实际未执行，仅为推测结果。这是 Agent 稳定性的核心痛点。
    - **状态**：Closed。
4.  **[P2] 文件操作路径混乱** ([Issue #648](https://github.com/HKUDS/nanobot/issues/648)):
    - **现象**：相对路径与绝对路径混用导致文件编辑失败。

## 6. 功能请求与路线图信号
用户对 NanoBot 的期望正从"可用"转向"好用"和"强大"：
- **多模型路由** ([Issue #2072](https://github.com/HKUDS/nanobot/issues/2072)): 用户请求原生支持 Multi-Agent Routing，类似于 OpenClaw 的机制。结合 [PR #1224] 的架构优化，这可能是下一阶段的重点。
- **更多 Search Provider** ([Issue #405](https://github.com/HKUDS/nanobot/issues/405)): 强烈请求支持 **SearXNG**，以满足隐私敏感和本地化搜索的需求。
- **MCP 协议支持** ([Issue #359](https://github.com/HKUDS/nanobot/issues/359)): 8 个 👍 支持，用户希望标准化工具接口，以便复用现有的 MCP 工具生态。

## 7. 用户反馈摘要
通过今日的 Issue 分析，提炼出以下用户画像与痛点：
- **模型配置复杂**：用户普遍认为 `provider` 与 `model` 的映射关系不够直观（[Issue #286](https://github.com/HKUDS/nanobot/issues/286)），特别是使用第三方代理或本地模型时，前缀处理令人困惑。
- **本地化部署门槛**：尽管项目宣称"Ultra-lightweight"，但 Node.js 依赖引发了关于"轻量级"定义的争议（[Issue #660](https://github.com/HKUDS/nanobot/issues/660)）。
- **交互式配置需求**：用户对 [PR #321] 和 [Issue #2018] 提到的交互式初始化向导表现出浓厚兴趣，希望能摆脱手动编辑 JSON 的痛苦。

## 8. 待处理积压
以下重要 Issue 尚未解决，建议维护者关注：
- **[Issue #1932](https://github.com/HKUDS/nanobot/issues/1932)**: **技能禁用功能**。目前只能删除技能，无法临时禁用，阻碍了灵活配置。
- **[Issue #1991](https://github.com/HKUDS/nanobot/issues/1991)**: **多自定义模型切换**。用户希望能像 OpenAI 的 `GPTs` 一样快速切换不同的 Custom Model 配置。

---
*分析师注：NanoBot 正处于功能爆发期，v0.1.4.post5 的发布虽然号称"安静"，但底层架构（如 Steering Loop、Streaming）的 PR 显示出项目正在为更复杂的 Multi-Agent 场景做准备。建议优先解决模型配置的易用性问题，以降低新用户的流失率。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-17)

## 1. 今日速览
Zeroclaw 项目今日呈现**高度活跃**状态，社区热度与开发迭代速度显著加快。过去24小时内新增了 **10 个版本发布**（从 v0.4.0 到 v0.4.3），显示项目正处于功能快速整合期。Issue 活跃度极高（44 条更新），主要集中在**权限配置复杂**、**部署兼容性**（GLIBC/Docker）以及**新渠道集成**（X/Twitter, Mochat）的讨论。共有 **31 个 PR 待合并**，表明大量新功能（如知识图谱、企业监控、语音循环）正在排队审查，项目正在向更生产就绪的方向迈进。

---

## 2. 版本发布
今日连续发布了多个版本，核心迭代集中在性能优化与渠道扩展。

*   **最新稳定版: v0.4.3**
    *   **主要更新**:
        *   **Cache**: 引入双层响应缓存、多提供商 Token 追踪及缓存分析功能，显著优化 LLM 调用成本与性能。
        *   **Channels**: 新增 **X/Twitter** 和 **Mochat** 渠道集成。
        *   **Config**: 转录配置支持 `initial_prompt`，改善专有名词识别准确率。
        *   **Heartbeat**: 增加健康指标和自适应间隔。
    *   **破坏性变更/迁移注意**: 
        *   虽然未明确标注 Breaking Changes，但 v0.4.1-beta.269 引入了 SQLite 后端和 FTS5，可能涉及数据存储迁移。
        *   建议用户升级前检查 `data_retention` 等新配置字段是否强制要求（参考 Issue #3684）。

*   **历史版本 (今日发布)**:
    *   **v0.4.0**: 引入了基于 Token 的上下文压缩、持久化会话、Notion 集成以及自主知识积累 Agent 包。

---

## 3. 项目进展
今日共有 **19 个 PR 被合并/关闭**，主要集中在基础设施加固和功能扩展。

*   **核心功能推进**:
    *   **工具链增强**: 合并了针对 **Claude Code, Gemini CLI, KiloCLI** 的集成 (Issue #2990)，增强了 AI 编码工具的调用能力。
    *   **通讯渠道**: 修复了 WhatsApp Web 不支持语音/媒体消息的问题 (Issue #2918)，并解决了 QQ 频道 Markdown 渲染的回归问题 (PR #3752)。
    *   **安全性**: 修复了 Agent 可能通过 `file_write` 工具篡改 `config.toml` 从而提升权限的漏洞 (Issue #2400 相关讨论)。

*   **待合并的重要 PR (Open)**:
    *   **企业级特性**: 正在审查添加 **Mastodon, ntfy, Gotify** 适配器 (PR #3589) 以及 **LinkedIn** 集成 (PR #3604)。
    *   **可观测性**: PR #3587 提出了健康检查/就绪端点，PR #3596 引入了知识图谱功能，显示出项目正向生产级 Agent 平台演进。

---

## 4. 社区热点
今日社区讨论极其激烈，尤其是关于易用性与安全性的平衡。

1.  **[Feature] 安全与易用性的冲突** (Issue #1478)
    *   **评论数**: 39
    *   **核心诉求**: 用户抱怨 Zeroclaw 的安全策略过于严格，导致配置极其复杂，甚至在完全开放权限的情况下仍拒绝执行安装命令（如 ffmpeg）。用户直言：“除了安全，什么功能也没有”，质疑其作为“玩具”的可用性。
    *   **分析**: 这是目前最痛点的问题。Zeroclaw 强调安全沙箱，但这对非企业级开发者或个人用户造成了极高的上手门槛。

2.  **[Bug] GLIBC_2.39 未找到** (Issue #3070)
    *   **评论数**: 10
    *   **核心诉求**: 用户在运行编译好的二进制文件时遇到 `GLIBC_2.39` 依赖缺失问题，影响了一批使用旧版 Linux 发行版的用户。

3.  **[Feature] M4-5 多 Crate 工作区拆分** (Issue #2263)
    *   **评论数**: 7
    *   **核心诉求**: 针对编译时间过长的问题，社区提议将庞大的单体 Crate 拆分为多 Crate 工作区，以加快迭代速度。

---

## 5. Bug 与稳定性
今日报告了多个严重影响使用的 Bug，部分已有修复方案。

*   **S0 / S1 - 严重阻塞工作流**:
    1.  **Docker 镜像损坏** (Issue #3687): 最新 Docker 镜像仅为 292KB（正常约 9MB），导致容器启动后无反应。**状态**: 已确认。
    2.  **配置向后不兼容** (Issue #3684): 升级到 v0.3.4+ 后，因 `config.toml` 缺少新字段（如 `data_retention`）导致启动崩溃。**状态**: Closed (可能已通过文档或补丁解决)。
    3.  **WebUI 连接失败** (Issue #2910): v0.1.8 版本 WebUI 报错 "Connection error"，导致无法通过界面操作。

*   **S2 - 体验降级**:
    *   **交互式引导失效** (Issue #3658): v0.3.2 中 `zeroclaw onboard` 直接生成默认配置，不再弹出交互提示。
    *   **ARM64 Docker 退出** (Issue #3714): 官方镜像在 ARM64 架构（如 DGX Spark）上立即退出。

*   **已修复/有进展**:
    *   Issue #3688 (Daemon 随终端关闭而终止) 和 Issue #3552 (Nextcloud Webhook 失效) 均在今日得到响应或关闭。

---

## 6. 功能请求与路线图信号
结合 Open PRs 和 Issues，可以看出项目下一阶段的重点：

1.  **企业级知识管理**:
    *   **需求**: Issue #3596 (PR) 提出构建**知识图谱**，用于捕获和重用组织知识（架构决策、专家档案等）。
    *   **判断**: 极有可能合并，这标志着 Zeroclaw 从单纯的执行 Agent 向知识型 Agent 转型。

2.  **语音交互增强**:
    *   **需求**: PR #3607 提出增加 **Voice-loop mode**，支持免提音频对话。
    *   **判断**: 正在积极开发中，配合 v0.4.3 中的转录优化，语音能力将是下个亮点。

3.  **模型提供商兼容性**:
    *   **需求**: Issue #3742 请求支持 Amazon Bedrock 的长短效 API Key；Issue #3059 请求支持阿里云百炼。
    *   **判断**: 社区对国产模型和云厂商原生支持的呼声很高，预计会有相关 PR 随后跟进。

---

## 7. 用户反馈摘要
*   **痛点**: 
    *   **"安全过度"**: 多个用户反馈在个人开发环境下，安全策略导致工具（如安装包、浏览器）几乎不可用 (Issue #1478)。
    *   **部署困难**: 编译依赖（GLIBC）和 Docker 镜像问题频发，对非 Rust 技术栈用户不友好。
    *   **配置复杂**: 配置文件结构变更缺乏平滑迁移机制，导致升级后服务崩溃。

*   **满意点**: 
    *   开发者对**多渠道集成**（Twitter, Mastodon, WhatsApp）的响应速度表示认可。
    *   新增的**缓存机制**和**Token 追踪**被视为降低成本的关键功能。

---

## 8. 待处理积压
以下重要 Issue 长期未解决或需持续关注：

1.  **Issue #1478**: 虽已关闭，但关于“安全策略灵活性”的讨论尚未有完美的配置解决方案，建议维护者提供明确的“开发者模式”或“解除武装模式”配置模板。
2.  **Issue #3580**: Web Dashboard 不可用问题，对于想要快速体验的用户是巨大的阻碍，需优先修复 Web 前端构建流程。
3.  **Issue #2400**: Agent 权限提升漏洞是一个深层次的安全架构问题，建议进行彻底的审计，防止 Agent 修改自身配置。

---

*数据来源: Zeroclaw GitHub Repository (2026-03-17)*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-17)

**分析师**: AI OpenSource Analyst
**数据来源**: github.com/sipeed/picoclaw

---

## 1. 今日速览

PicoClaw 项目今日保持**极高活跃度**，呈现出典型的"快速迭代期"特征。过去 24 小时内，社区提交了 **21 条 Issue** 和 **73 条 PR**，其中 PR 合并/关闭数达 35 条，开发迭代速度极快。项目刚刚发布了 **`v0.2.3-nightly`** 自动构建版本。架构重构（Agent Loop）、多模态支持（TTS/ASR）以及各渠道适配是当前的核心工作重心。整体来看，项目处于功能爆发与架构优化的并行阶段。

## 2. 版本发布

- **Version**: `nightly` (Nightly Build)
- **Tag**: `v0.2.3-nightly.20260317.79b0568d`
- **ChangeLog**: [v0.2.3...main](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)
- **说明**: 这是一个自动化发布的每日构建版本，包含最新的代码提交，**可能不稳定**，建议测试环境使用。此次更新包含了 Agent 执行上下文修复、Cron 任务逻辑优化以及多个 Provider 的兼容性补丁。

## 3. 项目进展

今日共有 **35 个 PR 被合并或关闭**，主要集中在**稳定性修复**与**安全增强**：

1.  **执行安全与配置**:
    -   PR [#1627] 新增了禁用 `exec` 工具的配置选项，显著降低了 Shell 执行带来的安全风险。
    -   PR [#1647] 使 Cron 命令执行可配置化，增强了任务调度的控制力。
2.  **关键 Bug 修复**:
    -   PR [#1659] 修复了 Anthropic 模型调用工具时因 `name` 字段为空导致的 400 错误，解决了部分用户无法使用 Claude 模型的问题。
    -   PR [#1536] 修复了非图片类附件（文档/音视频）在沙箱环境下的读取权限问题。
3.  **渠道与日志**:
    -   PR [#1645] 增强了日志安全性，自动遮蔽 Telegram Bot Token，防止密钥泄露。
    -   PR [#1349] (已合并) 扩展了 QQ 频道的附件支持，提升了社交渠道的交互体验。

**总结**: 项目在**安全性**（禁用 Exec、日志脱敏）和**稳定性**（Anthropic 修复、文件权限）方面取得了实质性进展。

## 4. 社区热点

今日讨论最活跃的话题集中在**架构重构**与**配置管理**：

1.  **Issue #1316 [Agent refactor] Event-driven agent loop**: 评论数 **11**。
    -   **链接**: [sipeed/picoclaw Issue #1316](https://github.com/sipeed/picoclaw/issues/1316)
    -   **分析**: 这是目前的 "Hot Topic"。核心开发者正在重构 Agent Loop，试图将其从"黑盒"转变为支持 Hook、中断和事件驱动的架构。这表明项目正在为更复杂的自动化工作流和多 Agent 协作打基础。
2.  **PR #1490 Context boundary detection**: 评论数较多。
    -   **链接**: [sipeed/picoclaw PR #1490](https://github.com/sipeed/picoclaw/pull/1490)
    -   **分析**: 针对 #1316 的具体实现之一，涉及上下文边界检测和 Token 预算管理。社区正在激烈讨论如何优雅地实现上下文压缩而不丢失关键信息。
3.  **Feature: `picoclaw doctor` command (#39)**:
    -   **分析**: 用户强烈需要一个类似 OpenClaw 的诊断工具来解决环境配置问题，这反映了当前部署配置的复杂性依然较高。

## 5. Bug 与稳定性

今日 Bug 报告主要集中在 **Provider 兼容性** 和 **资源管理**：

| 级别 | Issue/PR | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **严重** | **#1652** | **GLM Coding Plan 不支持**: 使用 GLM 模型会直接报错 "余额不足"，疑似协议适配问题。 | Open |
| **严重** | **#1650** | **服务无限重启**: 部分配置下 PicoClaw 服务启动后不断崩溃重启。 | Open |
| **高** | **#1634** | **多 Agent 共享 Provider**: 配置多个 Agent 时，它们错误地共享了同一个 Provider 实例，导致 API Key 或模型选择冲突。 | Open |
| **中** | **#1635** | **API Key 继承失效**: `model_list` 无法从 `providers` 处继承 `api_key`，导致配置冗余。 | Open |
| **已修复**| **PR #1659** | **Anthropic Tool Use 崩溃**: 修复了 Claude 模型处理历史记录时 Tool Name 为空导致的 400 错误。 | Merged |

## 6. 功能请求与路线图信号

从 Issue 和 PR 动向来看，下一阶段的路线图信号非常明确：

1.  **多模态交互**:
    -   **Issue #1648** 提议增加 **TTS (语音合成) 和 ASR (语音识别)** 支持。
    -   *信号*: PicoClaw 正试图从纯文本机器人向语音交互助手演进。
2.  **外部集成与编排**:
    -   **PR #1657** 增加了 HTTP Ingress 端点，允许外部系统通过 HTTP API 触发 Agent。
    -   **Issue #1475** 请求结构化的事件流。
    -   *信号*: 项目正在增强作为"微服务"或"后端大脑"的能力，以便集成到更大的业务系统中。
3.  **精细化控制**:
    -   **Issue #1612** 和 **PR #1656** 均指向更细粒度的冷却控制和 Cron 调度限制。
    -   *信号*: 防止 API 滥用和资源浪费，提升生产环境可靠性。

## 7. 用户反馈摘要

-   **痛点 1: 网络与连接稳定性**: 多位用户（如 #1653）反映在小型 Linux 开发板上运行时，容易出现 "connection reset by peer"，Agent 因此中断退出。用户希望 Agent 具备更强的**自愈/重试能力**。
-   **痛点 2: 配置复杂性**: 用户反馈配置文件（`model_list` 与 `providers`）的逻辑不够直观（#1635），希望能有更好的继承机制或校验工具（#39）。
-   **场景: 群聊识别**: Issue #1615 指出在飞书/Slack 群聊中，Agent 往往不知道"谁"在说话，导致回复缺乏针对性，用户希望增强上下文感知。

## 8. 待处理积压

以下重要问题目前处于 Open 状态且尚未有明确修复 PR，建议维护者关注：

1.  **Issue #1634 (Provider 共享冲突)**: 这是一个架构层面的 Bug，会严重影响多 Agent 场景的使用，需要优先修复。
2.  **Issue #1652 (GLM 兼容性)**: 影响了国内核心用户群体的使用体验。
3.  **Issue #1623 (Cron 时区支持)**: 目前 Cron 仅支持 UTC，对非 UTC 地区的用户极不友好，属于体验级短板。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

这里是 **NanoClaw** 项目 2026-03-17 的动态日报。

---

### 1. 今日速览
NanoClaw 今日呈现出**极高的社区活跃度与战略转型信号**。尽管没有发布新版本，但项目在 24 小时内涌现了大量高质量的 Feature Request（共 19 个新 Issue），且主要集中在安全增强、可观测性及多模型支持等企业级痛点上。贡献者 @butterandcode 今日集中提交了 12 份设计严谨的提案并迅速关闭（转为开发计划），显示出核心团队正在进行深度的功能规划与架构重构。PR 合并区活跃，社区正在积极修复 OAuth Token 过期、日志膨胀等影响生产环境的关键 Bug。整体而言，项目正从 MVP 阶段向更健壮、更安全、多 Runtime 支持的成熟阶段演进。

---

### 2. 版本发布
*   **无新版本发布** (Last updated: 2026-03-17)。

---

### 3. 项目进展
今日共有 **21 个 PR 被合并或关闭**，重点推进了以下领域：

*   **安全与稳定性增强**：
    *   **[MERGED]** PR #1182: 修复了 Rollup 的高危 CVE (GHSA-mw96-cpmx-2vgc)，并引入了 ZOEYAI 基础依赖，清理了构建安全隐患。
    *   **[MERGED]** PR #511 & #509: 合并了语音识别 和 WhatsApp 反应 技能，增强了多模态交互能力。
*   **架构优化**：
    *   **[MERGED]** PR #626: 引入了 "Patch-queue" 模型，将 Fork 的定制化代码转为 Skills 在构建时应用，解决了上游更新冲突痛点，这是一个重大的架构改进。
*   **待处理的重要修复 (Open PRs)**：
    *   PR #1098 (Fix): 修复了 Agent 无法识别当前星期几的问题，等待合并。
    *   PR #1091 (Fix): 修复了 `.env` 文件缺失时的回退逻辑，增强了容器化部署的鲁棒性。

---

### 4. 社区热点
今日讨论热度最高的议题集中在 **"开放性"** 与 **"企业级特性"**：

1.  **[Issue #80]** **Support runtime(s) other than Claude** (👍 47, 评论 23)
    *   **链接**: [qwibitai/nanoclaw Issue #80](https://github.com/qwibitai/nanoclaw/issues/80)
    *   **分析**: 这是目前社区呼声最高的功能。由于 Anthropic 开始封禁非官方客户端的订阅，用户强烈要求支持 OpenCode、Gemini、Codex 等替代 Runtime。这表明单一依附于 Claude 生态的风险已成为用户的核心痛点。
2.  **[Issue #730]** **CLAUDE_CODE_OAUTH_TOKEN expires overnight** (Priority: High)
    *   **链接**: [qwibitai/nanoclaw Issue #730](https://github.com/qwibitai/nanoclaw/issues/730)
    *   **分析**: OAuth Token 隔夜失效导致容器每早崩溃 (401 错误)。这是一个严重影响用户体验的 Bug，讨论集中在如何实现后台服务的无感 Token 刷新。
3.  **[PR #547]** **feat: add Shabbat mode 🕯️**
    *   **链接**: [qwibitai/nanoclaw PR #547](https://github.com/qwibitai/nanoclaw/pull/547)
    *   **分析**: 一个有趣的社区贡献，允许机器人在安息日自动停止运行，反映了 NanoClaw 在个人生活助手场景下的深入渗透。

---

### 5. Bug 与稳定性
今日报告了若干影响生产环境的 Bug，部分已有修复方案：

*   **P0 - 致命/阻塞 (High Priority)**
    *   **[Issue #1088] nanoclaw log == 27 GB after 5 days** [CLOSED]
        *   **状态**: 已确认并有临时解决方案 (`truncate`)。
        *   **分析**: 日志未轮转导致磁盘被写满。需关注是否会在下个版本引入日志轮转机制。
    *   **[Issue #1142] Agent SDK pinned to outdated model** [OPEN]
        *   **状态**: 待修复。
        *   **分析**: 容器内 SDK 版本过旧，导致模型默认回退到旧版 Claude 3.5，影响智能体表现。
    *   **[Issue #1067] Fails to start on reboot (Apple Container race condition)** [OPEN]
        *   **状态**: 待修复。
        *   **分析**: macOS 重启时，NanoClaw 启动快于容器运行时服务，导致启动失败。需要增加重试逻辑。

*   **P1 - 重要修复 (已有 PR)**
    *   **[Issue #698] Agent cannot determine day of week**: PR #1098 已提交修复，等待合并。
    *   **[Issue #1090] EROFS crash**: 已有 PR 修复 `.claude.json` 只读挂载导致的崩溃。

---

### 6. 功能请求与路线图信号
今日 @butterandcode 批量提交并关闭了一系列高质量 Feature Request，这通常意味着**这些功能已进入实质开发阶段或被纳入短期路线图**：

1.  **安全与合规**
    *   **[Issue #1176] Encryption at rest**: 敏感配置落盘加密。
    *   **[Issue #1164] Prompt injection detection**: 提示词注入检测层。
    *   **[Issue #1170] SSRF protection**: 阻止容器访问内部私有 IP。

2.  **可靠性与架构 (Reliability)**
    *   **[Issue #1172] SQLite message queue**: 消息持久化与重试机制，防止消息丢失。
    *   **[Issue #1167] Tool call loop detection**: 智能体死循环检测与熔断。

3.  **生态扩展**
    *   **[Issue #1181] Community skill registry**: 提出了类似 npm 的 `install-skill` 命令构想，建立一个轻量级的技能市场。

---

### 7. 用户反馈摘要
从 Issues 评论区提炼出的核心反馈如下：

*   **部署痛点**:
    *   **Intel Mac 用户被遗忘**: Issue #1079 指出当前 Docker 沙箱不支持 Intel Mac，且无替代安装路径，导致一部分老用户无法使用。
    *   **Token 管理繁琐**: Issue #730 和 #1015 反映出无论是 OAuth 还是第三方 API Key (DeepInfra)，目前的配置和续期体验都不够顺滑。

*   **使用场景**:
    *   用户正在尝试将 NanoClaw 用于非 Claude 模型 (Issue #1092, #80)，表明 NanoClaw 正被视为一个通用的 "AI Agent Runtime"，而不仅仅是 Claude 的附属工具。

*   **满意度**:
    *   尽管有 Bug，但用户对项目评价很高 (Issue #957: "very useful and well designed")，并积极贡献 Skills (WhatsApp, Perplexity, Voice)，证明社区粘性很强。

---

### 8. 待处理积压
以下重要 Issue 长期未得到解决或响应，建议维护者关注：

1.  **[Issue #957] Support Podman as Docker alternative**
    *   **状态**: OPEN (创建于 03-11，评论 4)
    *   **建议**: 随着安全和许可问题日益突出，支持 Podman 对 Linux/macOS 用户非常有价值。
2.  **[Issue #80] Support other LLM providers**
    *   **状态**: OPEN (创建于 02-04，评论 23)
    *   **建议**: 这是社区最想要的功能。如果核心团队不打算支持，应明确表态或在文档中说明 "Community Supported" 的路径。
3.  **[PR #1035] WebFetch Sanitization**
    *   **状态**: OPEN (提交于 03-13)
    *   **建议**: 这是一个重要的安全修复 PR，建议优先进行 Code Review 并合并。

---
*数据来源: NanoClaw GitHub Repository (2026-03-17 Snapshot)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-03-17)

**分析师洞察**：NullClaw 今日呈现出极高的大模型底层适配开发活跃度。虽然未发布新版本，但核心贡献者正集中火力解决**推理模型的兼容性**、**流式传输的稳定性**以及**非 systemd 环境的支持**。大量的修复 PR 集中在错误处理和底层传输协议上，表明项目正处于从“功能可用”向“生产健壮”过渡的关键阶段。

---

### 1. 今日速览
- **整体状态**：项目处于高强度维护与功能迭代期，社区提交活跃，PR 更新高达 25 条。
- **核心焦点**：重点攻坚**流式响应（SSE）的容错机制**（如超时检测、空响应重试）及**推理模型（Reasoning Models）的字段解析**。
- **生态扩展**：新增对腾讯混元、百川模型的兼容，并开始构建外部通道插件系统。
- **平台支持**：社区贡献了 OpenRC 支持，标志着 NullClaw 正向 Alpine/Gentoo 等轻量级 Linux 发行版下沉。

### 2. 版本发布
- **无新版本发布**：虽然合并了多个修复，但官方未推送新的 Release tag，预计相关修复将积累至下一个版本集中发布。

### 3. 项目进展
今日共有 **7 个 PR 合并/关闭**，显著提升了系统的稳定性和兼容性：

- **Agent 核心逻辑增强**：合并了 [PR #587](https://github.com/nullclaw/nullclaw/pull/587)（测试覆盖率要求）和 [PR #567](https://github.com/nullclaw/nullclaw/pull/567)（MCP 工具初始化修复），修复了网关会话中 MCP 工具不可用的严重回归问题。
- **平台兼容性突破**：[PR #550](https://github.com/nullclaw/nullclaw/pull/550) 恢复了 Windows 上的本地 WebChannel 支持，解决了 WebSocket 通信失败的问题。
- **错误处理规范化**：[PR #584](https://github.com/nullclaw/nullclaw/pull/584) 修复了模型返回空内容时的解析静默失败问题，现在能正确抛出 `NoResponseContent` 错误。

### 4. 社区热点
- **功能对比与定位**：[Issue #583](https://github.com/nullclaw/nullclaw/issues/583) 发起了与 Mimiclaw 项目的对比讨论。这反映了用户在选择 AI 智能体框架时对**架构差异**和**功能边界**的困惑，维护者需关注如何明确 NullClaw 的差异化优势。
- **集成痛点**：[Issue #117](https://github.com/nullclaw/nullclaw/issues/117) 持续活跃，用户在寻求添加自定义模型提供商（如 Claude）的具体方法，表明**自定义 Provider 的文档或配置流程**仍有优化空间。

### 5. Bug 与稳定性
今日报告了多个影响生产环境的 Bug，部分已提交修复：

1.  **[严重] Cron 任务静默失败**
    - **描述**：[Issue #592](https://github.com/nullclaw/nullclaw/issues/592) 报告 Cron 任务未能按计划运行，且无明确错误反馈。
    - **状态**：**已修复**。见 [PR #598](https://github.com/nullclaw/nullclaw/pull/598)，新增了诊断警告和 `status` 命令。

2.  **[严重] 服务管理在 Alpine Linux (OpenRC) 上全面失效**
    - **描述**：[Issue #601](https://github.com/nullclaw/nullclaw/issues/601) 指出 `service` 命令在非 systemd 环境下报 `FileNotFound` 错误。
    - **状态**：**已修复**。见 [PR #602](https://github.com/nullclaw/nullclaw/pull/602)，新增了对 OpenRC 的支持。

3.  **[中等] 推理模型 Kimi-k2.5 API 解析错误**
    - **描述**：[Issue #576](https://github.com/nullclaw/nullclaw/issues/576) 指出使用 moonshot-intl 提供商时返回 `ApiError`，原因是无法解析 `reasoning_content` 字段。
    - **状态**：**修复中**。见 [PR #594](https://github.com/nullclaw/nullclaw/pull/594)，专门处理流式传输中的推理内容字段。

4.  **[中等] 下载文件测试失败**
    - **描述**：[Issue #599](https://github.com/nullclaw/nullclaw/issues/599) 涉及 curl 协议限制导致的测试失败，影响底层文件操作。

### 6. 功能请求与路线图信号
- **全栈部署简化**：[Issue #588](https://github.com/nullclaw/nullclaw/issues/588) 提出单一命令引导全栈环境的需求。结合 [PR #600](https://github.com/nullclaw/nullclaw/pull/600)（OTLP 可观测性支持）和 [PR #604](https://github.com/nullclaw/nullclaw/pull/604)（外部通道插件），可以看出项目正朝着**模块化、易观测、易部署**的企业级架构演进。
- **富消息支持**：[PR #596](https://github.com/nullclaw/nullclaw/pull/596) 提出抽象富消息端口，支持钉钉和飞书的 Card 2.0 标准，信号显示项目正在加强对**国内即时通讯平台**的深度集成。

### 7. 用户反馈摘要
- **部署体验**：用户对 Docker Compose 的手动配置感到繁琐，急需“一键部署”解决方案。
- **模型支持**：用户不仅关注 OpenAI 兼容接口，对 Kimi、Claude 及国产大模型（混元、百川）的**原生字段支持**（如 reasoning_content）有强烈需求。
- **系统适配**：轻量级 Linux 用户（Alpine）对 Systemd 依赖表示不满，今日的 OpenRC 修复是对这一诉求的直接回应。

### 8. 待处理积压
- **[OPEN] #117 添加自定义 Provider**：此 Issue 悬而未决且长期活跃，建议维护者优先完善相关文档或提供配置模版。
- **[OPEN] #599 测试失败问题**：涉及构建环境的底层配置，可能需要维护者直接介入 CI/CD 流程的调整。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是为您生成的 **IronClaw** 项目 2026-03-17 动态日报：

---

# 📊 IronClaw 项目日报 (2026-03-17)

## 1. 今日速览
IronClaw 项目今日呈现出**极高**的开发与维护活跃度。在过去 24 小时内，项目处理了 25 条 Issue 更新（关闭 10 个 Bug）和 50 条 PR 更新（合并/关闭 20 个），主要集中在修复 Routine（例程）系统的核心缺陷和优化错误提示体验。社区方面，用户对 Telegram 集成和特定 LLM 后端（Mistral/NEAR AI）的兼容性问题反馈强烈。虽然没有发布新版本，但大量的 Bug 修复合并表明项目正处于**稳定化冲刺阶段**，重点在于打磨多渠道集成和沙箱机制的健壮性。

## 2. 版本发布
*   **无新版本发布**。尽管有大量代码合并，今日暂未观测到正式的 Release Tag 发布，推测目前的改动正在通过 CI 流水线积攒，预计将在近期集中发布。

## 3. 项目进展
今日共有 **20 个 PR** 被合并或关闭，显著提升了项目的稳定性，尤其是 Routine 和 Telegram 模块：

*   **用户体验与错误提示优化**：合并了 [PR #1265](https://github.com/nearai/ironclaw/pull/1265)，修复了等待用户审批时显示 "Error" 的误导性 UI 文案，消除了不必要的用户恐慌。
*   **Routine 事件触发修复**：合并了 [PR #1211](https://github.com/nearai/ironclaw/pull/1211)，解决了 Event-triggered routines（事件触发例程）因大小写敏感而从未触发的严重逻辑错误。
*   **Sandbox 容错增强**：合并了 [PR #1224](https://github.com/nearai/ironclaw/issues/1224)，为沙箱容器添加了针对瞬时故障的重试逻辑，大幅提升了 Job 执行的鲁棒性。
*   **CI 优化**：合并了 [PR #1266](https://github.com/nearai/ironclaw/pull/1266) 和 [PR #1264](https://github.com/nearai/ironclaw/pull/1264)，优化了集成测试隔离策略并更新了组件版本，减轻了主测试矩阵的压力。

## 4. 社区热点
讨论热度最高的区域集中在 **Routine 机制的可靠性** 与 **特定 LLM 后端适配**：

*   **[PR #769](https://github.com/nearai/ironclaw/pull/769) (fix: routines)**：针对 full_job routines 在沙箱不可用时静默失败的修复，该 PR 影响核心架构，吸引了核心贡献者的持续讨论。
*   **[PR #1259](https://github.com/nearai/ironclaw/pull/1259) (fix: LLM calls)**：针对 NEAR AI 和 Claude 模型调用失败（无用户查询/助手预填充）的修复，引发了关于消息历史构建规范的深入探讨。
*   **[Issue #1271](https://github.com/nearai/ironclaw/issues/1271) (Build Error)**：今日新发的构建问题，用户报告 `feishu` 组件在 main 分支构建失败，阻碍了部分开发者的使用，需关注。

## 5. Bug 与稳定性
今日报告并处理的 Bug 主要围绕 **Routines** 和 **多渠道通信**，部分已有修复方案：

| 严重度 | 描述 | 状态/Fix PR | 链接 |
| :--- | :--- | :--- | :--- |
| **P1 (高)** | **Routines 在 Telegram 查询不可见**：通过 Web 创建的例程在 Telegram 端不可见，存在跨端数据隔离问题。 | **Open** (待修复) | [Issue #995](https://github.com/nearai/ironclaw/issues/995) |
| **P1 (高)** | **Telegram 广播失败**：Routine 触发时尝试向 Telegram 发送通知，但使用了错误的 `chat_id="default"` 导致静默失败。 | **Closed** (已验证修复) | [Issue #994](https://github.com/nearai/ironclaw/issues/994) |
| **P1 (高)** | **Routine 类型变更受阻**：尝试将事件触发改为 Cron 触发时 API 报错，需删除重建，体验极差。 | **Closed** (已验证) | [Issue #998](https://github.com/nearai/ironclaw/issues/998) |
| **P1 (高)** | **Anthropic OAuth Token 过期**：Token 过期导致对话中途中断，且丢失当前请求。 | **Closed** (已验证) | [Issue #1136](https://github.com/nearai/ironclaw/issues/1136) |
| **中** | **Mistral API 工具调用 ID 不兼容**：Mistral 要求 9 字符字母数字 ID，导致工具调用 400 错误。 | **Open** (新报错) | [Issue #1241](https://github.com/nearai/ironclaw/issues/1241) |
| **中** | **限流器逻辑缺陷**：Rate limiter 返回 "retry after None"，导致无法计算退避时间。 | **Fix Open** | [Issue #1000](https://github.com/nearai/ironclaw/issues/1000), [PR #1269](https://github.com/nearai/ironclaw/pull/1269) |

> 💡 **CI 自动审查预警**：Staging CI 自动创建了数个关于架构违规（如 Telegram 逻辑侵入核心模块）的 Issue ([#1248](https://github.com/nearai/ironclaw/issues/1248), [#1249](https://github.com/nearai/ironclaw/issues/1249))，虽目前标记为 High Risk，但属于代码质量优化范畴。

## 6. 功能请求与路线图信号
从 Issues 和 PRs 中捕捉到以下功能演进信号：

*   **WebSocket 支持缺失**：用户强烈反馈当前 Channel 不支持 WebSocket ([Issue #1245](https://github.com/nearai/ironclaw/issues/1245))，这限制了实时交互场景的性能。
*   **Webhook 推送模型重构**：[PR #1254](https://github.com/nearai/ironclaw/pull/1254) 提议将 SSE 拉取模型改为 Webhook 推送。这表明项目正在重构底层消息分发架构，以支持更高并发的实时通信。
*   **快照加密**：[Issue #1235](https://github.com/nearai/ironclaw/issues/1235) 提议对磁盘上的快照进行静态加密。这符合企业级安全合规需求，可能是项目进军商业用例的前兆。
*   **简化 Onboarding**：[Issue #1244](https://github.com/nearai/ironclaw/issues/1244) 建议简化目前长达 9 步的配置流程。这表明项目正试图降低新用户的上手门槛。

## 7. 用户反馈摘要
通过今日的 Issue 分析，提炼出以下用户痛点：

*   **跨平台体验割裂**：用户对 "Web 端能用的 Routine 在 Telegram 端查不到/用不了" 感到非常困惑和沮丧 ([Issue #995](https://github.com/nearai/ironclaw/issues/995), [#1051](https://github.com/nearai/ironclaw/issues/1051))。这表明多端状态同步是目前最大的槽点。
*   **误导性的错误提示**：用户容易被 "Error: Waiting for approval" 吓到，以为程序崩溃 ([Issue #997](https://github.com/nearai/ironclaw/issues/997))。这反映了目前的前端文案缺乏对 "阻塞状态" 的区分度。
*   **配置流程繁琐**：有用户抱怨初次配置涉及 9 个步骤，极易出错且令人望而却步 ([Issue #1244](https://github.com/nearai/ironclaw/issues/1244))。

## 8. 待处理积压
以下重要 Issue/PR 长期未决或处于关键状态，建议维护者优先关注：

*   **[PR #1254] Webhook Event Refactor**：这是一个 XL 级的大型重构 PR，涉及 Web 网关和扩展机制，目前处于 Open 状态。鉴于其可能改变核心通信架构，需尽早进行架构评审。
    *   链接: [nearai/ironclaw PR #1254](https://github.com/nearai/ironclaw/pull/1254)
*   **[Issue #995] Routines Telegram 可见性**：这是一个 P1 级别的功能性 Bug，影响核心卖点（多端同步），但目前未见直接的 Fix PR 链接，建议排查是否为数据库查询权限或 Scope 问题。
    *   链接: [nearai/ironclaw Issue #995](https://github.com/nearai/ironclaw/issues/995)
*   **[PR #625] Programmatic Tool Calling (PTC)**：一个 XL 级的功能性 PR，旨在实现工具间的编程式调用（无需 LLM 中转）。该功能对性能提升至关重要，但已开放数日，建议推进 Review 以防合并冲突积压。
    *   链接: [nearai/ironclaw PR #625](https://github.com/nearai/ironclaw/pull/625)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-17)

您好，我是您的开源项目分析师。以下是基于 LobsterAI (netease-youdao) 项目 2026年3月17日 的 GitHub 动态生成的日报。

## 1. 今日速览
LobsterAI 今日保持**高度活跃**状态，发布了重要的 `2026.3.16` 版本，重点修复了 Windows 平台的兼容性问题。社区方面，开发者积极响应了昨日的 PR 积压，共合并了 12 个拉取请求，显著提升了 IM 通道（钉钉/飞书）的稳定性与功能性。然而，新版本引入了一些回归问题，尤其是升级后的鉴权配置和部分模型（如 GLM5）的兼容性引发了用户的集中反馈。此外，关于项目“套壳”抄袭的讨论成为今日社区舆论的一个热点。

## 2. 版本发布
**Release: v2026.3.16**
此版本主要聚焦于 Windows 平台的构建修复与运行时稳定性。
- **更新重点**:
    - **Windows 兼容性**: 彻底解决了 OpenClaw runtime 在 Windows 下的构建与启动失败问题 ([PR #261](https://github.com/netease-youdao/LobsterAI/pull/261), [PR #279](https://github.com/netease-youdao/LobsterAI/pull/279))。
- **破坏性变更/迁移注意**:
    - 升级到此版本后，部分用户可能遇到 `No API key found` 错误 ([Issue #452](https://github.com/netease-youdao/LobsterAI/issues/452))，建议检查 `Auth store` 路径下的配置文件，必要时可能需要清理旧数据重新初始化。

## 3. 项目进展
今日共合并/关闭 **12** 个 PR，项目在 IM 集成、UI 交互和底层引擎方面取得了实质性进展：
- **IM 通道增强**: 大幅优化了钉钉与飞书的体验。修复了钉钉定时任务不发送消息的严重 Bug ([PR #449](https://github.com/netease-youdao/LobsterAI/pull/449))，解决了 IM 消息乱序问题 ([PR #451](https://github.com/netease-youdao/LobsterAI/pull/451))，并修复了开启 IM 通道时 UI 不生成会话的故障 ([PR #436](https://github.com/netease-youdao/LobsterAI/pull/436))。
- **视觉与引擎**: 修复了 OpenClaw 引擎处理图片的缺陷，并改进了对非视觉模型的兼容性（不再静默丢弃图片，而是给出提示）([PR #437](https://github.com/netease-youdao/LobsterAI/pull/437))。
- **体验优化**: 优化了权限确认弹窗的展示 ([PR #445](https://github.com/netease-youdao/LobsterAI/pull/445))，解决了本地图片展示问题 ([PR #447](https://github.com/netease-youdao/LobsterAI/pull/447))。

## 4. 社区热点
- **[Issue #435 [OPEN]](https://github.com/netease-youdao/LobsterAI/issues/435) “这是套壳的嘛？”**
    - **热度**: 👍 0 | 评论: 2
    - **分析**: 用户指出市面上存在高度相似的产品（Wind Claw, Zeelin Claw），质疑其未遵守开源协议。这反映了用户对 LobsterAI 品牌识别度及其被“白嫖”的担忧，维护者可能需要发布官方声明或版权声明来澄清。
- **[Issue #452 [OPEN]](https://github.com/netease-youdao/LobsterAI/issues/452) 升级后 API Key 丢失**
    - **热度**: 👍 0 | 评论: 1
    - **分析**: 作为新版本的阻塞性问题，该 Issue 反映了迁移路径的不顺畅，是当前技术支持的重点。

## 5. Bug 与稳定性
今日报告了多个**必现**级别的 Bug，主要集中在兼容性与配置解析：
1.  **[严重] 配置解析错误** - [Issue #441](https://github.com/netease-youdao/LobsterAI/issues/441): `.env` 文件中包含 `#` 等特殊字符的密码会被截断，导致鉴权失败。
2.  **[严重] 模型兼容性** - [Issue #446](https://github.com/netease-youdao/LobsterAI/issues/446): 使用智谱 GLM5 模型进行复杂操作（如安装 Skill）时必现崩溃。
3.  **[严重] 新版本回归** - [Issue #452](https://github.com/netease-youdao/LobsterAI/issues/452): 升级后提示找不到 Provider "lobster" 的 API Key。
4.  **[一般] 启动报错** - [Issue #454](https://github.com/netease-youdao/LobsterAI/issues/454): Windows/Stepfun 环境下，新建任务首次对话必现 `model validation failed`，需重发才能恢复。

## 6. 功能请求与路线图信号
- **Mermaid 支持**: 用户强烈请求增加对 Mermaid 图表的预览支持 ([Issue #450](https://github.com/netease-youdao/LobsterAI/issues/450))。
- **Token 消耗优化**: 用户质疑 System Prompt 过长导致 Token 消耗过大 ([Issue #453](https://github.com/netease-youdao/LobsterAI/issues/453))，暗示未来版本可能需要优化 Prompt 压缩策略或提供配置选项。
- **新增 Provider**: [PR #438](https://github.com/netease-youdao/LobsterAI/pull/438) 提议增加 AIHubMix 提供商，目前处于待合并状态。

## 7. 用户反馈摘要
- **痛点**: **Token 消耗大**是用户非常介意的一点，特别是每次对话都附带完整系统指令；**特殊字符处理**缺失导致配置失败让用户感到困惑。
- **场景**: 大量用户通过 IM（钉钉/飞书）使用机器人，今日的修复直接回应了这部分用户的需求。
- **评价**: 正面评价集中在今日修复的 Windows 兼容性上；负面评价主要针对新版本的升级体验（数据迁移/鉴权丢失）。

## 8. 待处理积压
- **[PR #451](https://github.com/netease-youdao/LobsterAI/pull/451) (OPEN)**: 修复 IM 频道消息乱序的关键 PR，目前仍在审核中，建议尽快合并以稳定 IM 功能。
- **[Issue #435](https://github.com/netease-youdao/LobsterAI/issues/435)**: 关于抄袭的法律/版权问题，建议官方介入回复。

---
*分析师注：项目当前处于快速迭代期，新功能引入较多，建议下一阶段重点关注版本升级的平滑过渡（特别是配置文件迁移）以及非主流模型（GLM5等）的兼容性测试。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

这里是为您生成的 **TinyClaw** 项目 2026-03-17 动态日报。

---

# 📊 TinyClaw 项目日报 (2026-03-17)

## 1. 今日速览
TinyClaw 今日迎来了重要的 **v0.0.14 版本**发布，标志着项目从依赖系统 Crontab 转向内置进程调度的重要架构升级。社区活跃度显著提升，过去 24 小时内共有 6 次 PR 更新（3 个合并，3 个待定）和 4 个新开 Issue。核心维护者 @jlia0 高效推进了 UI 重构和 Heartbeat 修复，但社区反馈显示 **TinyOffice 的配置持久化** 和 **SSE 连接稳定性** 存在明显痛点，需引起重视。整体而言，项目功能在快速迭代，但 Web 端的稳定性亟需跟进。

## 2. 版本发布
### **v0.0.14** (Released on 2026-03-16)
[View Release](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.14)

本次更新重点在于**调度系统的内置化与可视化管理**：
*   **核心变更**：放弃了操作系统层面的 Crontab 依赖，迁移至基于 `croner` 的进程内调度。
*   **新功能**：
    *   新增 REST API 用于管理调度任务。
    *   TinyOffice 中增加了全屏日历 UI，支持管理循环任务和一次性任务。
    *   支持调度任务的持久化存储。
*   **影响**：用户不再需要配置宿主机的 Crontab，降低了部署门槛，增强了跨平台兼容性。

## 3. 项目进展
今日共有 3 个关键 PR 合并，显著提升了项目的架构整洁度和功能完整度：

*   **feat(schedule): Internalize schedule management** [PR #225](https://github.com/TinyAGI/tinyclaw/pull/225) **[Core]**
    *   **内容**：实现了 v0.0.14 的核心功能，将任务调度内部化，并提供了 API 和日历 UI 支持。
    *   **意义**：解耦了对系统环境的依赖，是迈向独立应用的重要一步。
*   **fix(heartbeat): Persist per-agent enabled and interval settings** [PR #230](https://github.com/TinyAGI/tinyclaw/pull/230) **[Bugfix]**
    *   **内容**：修复了心跳 API 端点无法正确读取和持久化单个 Agent 覆盖配置的问题。
    *   **意义**：直接回应了社区关于设置不生效的反馈，修复了核心配置逻辑。
*   **refactor(ui): Refactor agent and task components** [PR #229](https://github.com/TinyAGI/tinyclaw/pull/229)
    *   **内容**：重构了 Agent 和 Task 组件架构，优化了 Chat 视图 UI，并将保存按钮移至具体 Tab 内。
    *   **意义**：提升了前端代码的可维护性和用户体验。

## 4. 社区热点
今日讨论主要集中在 TinyOffice 的可用性问题上：

1.  **TinyOffice SSE 连接失败** [Issue #231](https://github.com/TinyAGI/tinyclaw/issues/231)
    *   **热度**：由资深用户 @crisdias 提交，精准定位了 Next.js Rewrite 机制导致 SSE 流被缓冲的问题。
    *   **诉求**：前端代理层与后端实时流不兼容，导致 Web UI 总是显示 "Disconnected"，严重影响实时交互体验。
2.  **Heartbeat 设置导致 Agent 重置** [Issue #228](https://github.com/TinyAGI/tinyclaw/issues/228)
    *   **热度**：用户 @Chavell3 报告了一个严重可用性问题，尝试更改心跳设置时，CLI 工具意外销毁了整个 Agent 配置。
    *   **诉求**：CLI 的引导式 Setup 流程存在逻辑缺陷，需要增加防误触保护或配置合并逻辑。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在 Web 端配置持久化和连接稳定性，部分已有修复方案：

*   **🔴 High | Core feature broken** [Issue #228](https://github.com/TinyAGI/tinyclaw/issues/228)
    *   **问题**：通过 CLI 修改 Heartbeat 会重置整个 Agent。
    *   **状态**：**暂无直接修复 PR**，需警惕该版本 CLI Setup 命令的危险性。
*   **🟠 Medium | Feature broken** [Issue #227](https://github.com/TinyAGI/tinyclaw/issues/227)
    *   **问题**：TinyOffice Web UI 中修改的 Heartbeat 设置不持久化。
    *   **状态**：**已修复**。[PR #230](https://github.com/TinyAGI/tinyclaw/pull/230) 已合并，解决了 API 端持久化缺失的问题。
*   **🟠 Medium | UI Connectivity** [Issue #231](https://github.com/TinyAGI/tinyclaw/issues/231)
    *   **问题**：Next.js 代理缓冲导致 SSE 断连。
    *   **状态**：**修复中**。[PR #232](https://github.com/TinyAGI/tinyclaw/pull/232) 已提交，建议绕过 Rewrite 直接连接 API。

## 6. 功能请求与路线图信号
*   **TinyOffice 收藏/置顶 Agent 功能** [Issue #226](https://github.com/TinyAGI/tinyclaw/issues/226)
    *   **需求**：用户希望能在拥有大量 Agent 时，置顶常用的“主力” Agent。
    *   **分析**：这是一个高价值的 UX 改进。目前积压中，尚未有相关 PR。
*   **Web 端初始化设置**
    *   **信号**：[PR #214](https://github.com/TinyAGI/tinyclaw/pull/214)（待合并）提议增加 `--skip-setup` 标志和 `/connect` 页面。
    *   **意义**：这意味着项目正在向“纯 Web 配置”体验靠拢，减少对命令行的依赖，这可能成为下个版本的重点。

## 7. 用户反馈摘要
*   **痛点**：配置的**持久化** 是用户最大的痛点。无论是 Heartbeat 间隔还是简单的开关状态，用户反馈“保存后丢失”或“修改后重置”，表明 v0.0.14 之前的版本在状态管理上存在断层。
*   **场景**：重度用户拥有庞大的 Agent 列表，急需分类或置顶功能来管理混乱的界面 (Issue #226)。
*   **正面**：用户对调度系统迁移到 UI 内部表示期待，这从侧面反映了 v0.0.14 的发布方向是正确的。

## 8. 待处理积压
*   **[PR #214](https://github.com/TinyAGI/tinyclaw/pull/214) & [PR #213](https://github.com/TinyAGI/tinyclaw/pull/213)**：这两个处于 Open 状态的大型 PR（Web Setup 和 Queue 架构重构）已经多日未合并，建议维护者优先 Review 以避免功能分支过时。
*   **[Issue #228](https://github.com/TinyAGI/tinyclaw/issues/228)**：关于 CLI 销毁配置的严重 Bug，目前尚未看到专门的修复 PR，建议在下一个 Patch 版本中优先处理。

---
*分析师建议：TinyClaw 正处于架构转型的关键期（调度内置化、前端重构）。虽然 v0.0.14 功能亮眼，但 Web 端的 Bug（特别是 SSE 和配置保存）可能阻碍用户升级。建议优先合并 PR #232 修复连接问题，并尽快调查 Issue #228 中的 CLI 逻辑缺陷。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目日报 - 2026年03月17日**

这里是基于 Moltis (github.com/moltis-org/moltis) 最新 GitHub 数据生成的项目动态日报。

---

### 1. 今日速览
Moltis 项目今日保持着**高度活跃**的开发状态，过去24小时内共有 7 次 PR 更新和 2 次 Issue 更新。虽然今日无新版本发布，但社区贡献者集中解决了多个影响用户体验的边缘案例（Edge Cases），特别是针对非标准 LLM 提供商的兼容性问题。共有 3 个 PR 被合并，4 个 PR 处于待合并状态，显示出维护者正在积极审核代码。整体来看，项目正处于修复累积阶段，为下一次版本发布做准备。

### 2. 版本发布
*   **无新版本发布**

### 3. 项目进展
今日共有 3 个 Pull Requests 被合并，显著提升了系统的鲁棒性：

*   **修复 Jinja 模板错误 [MERGED]:**
    *   **PR [#431](https://github.com/moltis-org/moltis/pull/431):** 修复了通过 llama.cpp 使用 Qwen 等模型时的 Jinja 模板错误。通过合并系统消息并确保其位于消息列表开头，解决了 `System message must be at the beginning` 的崩溃问题。
*   **优化 UI 逻辑与减少模型幻觉 [MERGED]:**
    *   **PR [#435](https://github.com/moltis-org/moltis/pull/435):** 修复了在未配置节点时 `exec` 工具仍显示 `node` 参数的问题。此举有效防止了 Qwen3-Coder 等模型因尝试猜测参数值而导致的反复执行失败。
*   **代码整理 [MERGED]:**
    *   **PR [#443](https://github.com/moltis-org/moltis/pull/443):** "Yachiyo git fixes pr2"，合并了常规代码修复。

**进展评估：** 项目今日主要攻克了 LLM 兼容性痛点，特别是针对 Qwen 系列模型在特定配置下的行为异常进行了修复，提升了本地部署用户的体验。

### 4. 社区热点
今日最受关注的议题主要围绕 MCP（Model Context Protocol）的集成与使用：

*   **Issue [#118](https://github.com/moltis-org/moltis/issues/118) - 添加 Node/npx 到 Docker 镜像:**
    *   该 Issue 虽创建于 2 月，但今日再次活跃。用户强烈建议在 Docker 镜像中内置 Node.js 环境，以便直接在容器内运行基于 Node 的 MCP 服务器。这反映了用户希望 Moltis Docker 版能提供"开箱即用"的完整 MCP 生态支持。

### 5. Bug 与稳定性
今日报告了一个新的网络配置相关 Bug：

*   **🔴 IPv6 绑定问题 [NEW]:**
    *   **Issue [#447](https://github.com/moltis-org/moltis/issues/447):** 用户报告 Moltis 尝试绑定 IPv6 地址导致失败。这是一个阻碍性问题，可能影响特定网络环境下的部署。目前尚无修复 PR。
*   **工具调用兼容性修复 [FIX PR OPEN]:**
    *   **PR [#444](https://github.com/moltis-org/moltis/pull/444):** 针对 Kimi K2.5 等模型在并行调用工具时篡改工具名（如添加后缀 `_2` 或前缀 `functions_`）的问题提交了修复，等待合并。

### 6. 功能请求与路线图信号
从开放的 PR 和 Issue 中可以看出近期的功能演进方向：

*   **文件共享能力增强:**
    *   **PR [#353](https://github.com/moltis-org/moltis/pull/353):** 正在添加 `send_document` 工具，支持将 PDF、CSV、DOCX 等文件发送到会话通道。该功能虽然早在 3 月 7 日提出，但今日仍在更新，表明维护者正在积极准备合并此功能。
*   **MCP 可定制性提升:**
    *   **PR [#439](https://github.com/moltis-org/moltis/pull/439):** 提议为 MCP 服务器添加自定义显示名称，这将改善用户界面体验，区分技术标识符和友好名称。

### 7. 用户反馈摘要
*   **Docker 用户渴望全栈体验：** Issue #118 表明，Docker 用户不希望仅有一个运行时，他们期望容器内包含完整的工具链（如 Node）以支持 MCP 扩展。
*   **小众/本地模型兼容性需求强烈：** Issue #431 和 #435 的反馈显示，不少用户正在结合 llama.cpp 和 Qwen 系列模型使用 Moltis。他们对模型输出格式的微小差异（如消息顺序、幻觉参数）非常敏感，需要项目层做更多容错处理。

### 8. 待处理积压
*   **长期未决的功能 PR：** PR #353（文件共享工具）已开放 10 天，功能价值高，建议维护者优先 Review 并合并。
*   **关键环境缺失：** Issue #118（Docker 支持 Node）是 Docker 用户的核心痛点，且已获得点赞，建议开发团队尽快纳入路线图。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the CoPaw Project Daily Report for 2026-03-17.

# 📜 CoPaw 项目动态日报 (2026-03-17)

## 1. 今日速览
CoPaw 项目今日维持高热度运转，**Issue 活跃度爆棚（36 条新开）**，显示出用户基数快速增长带来的反馈压力。社区关注度主要集中在 **v0.0.7 版本引入的稳定性问题**（如 CPU 飙升、内存压缩崩溃）以及 **多渠道（飞书/钉钉）的兼容性**。值得欣喜的是，核心团队与贡献者反应迅速，**待合并 PR 达到 26 条**，且出现了 `0.1.0b1` 的版本更新 PR，预示着项目正处于从早期快速迭代向 Beta 版过渡的关键节点。

## 2. 版本发布
*   **正式版**: 今日无新 Release。
*   **开发版**: 出现版本号升级信号。
    *   **[PR #1617] chore(version): bumping version to 0.1.0b1**
        *   **说明**: 项目正在准备发布 `0.1.0b1`，标志着 CoPaw 即将进入 Beta 阶段，通常意味着核心架构趋于稳定。

## 3. 项目进展
今日共有 **24 条 PR 更新（合并/关闭）**，重点解决了安全性、UI 体验和系统稳定性：

*   **UI 体验重大更新 (Dark Mode)**:
    *   **[PR #1566] Feat/console dark**: 合并了 Web Console 的夜间模式/暗黑主题，解决了用户长期呼吁的视觉体验问题。同时也关闭了相关的 Issue (#669, #1116)。
*   **稳定性修复**:
    *   **[PR #1608] fix: handle None system_prompt**: 修复了当 Agent 无系统提示词时，Memory Compaction（内存压缩）导致的 Crash 问题。
    *   **[PR #564] feat(security)/skill scanner**: 合并了 Skill 静态安全扫描功能，防止安装恶意技能，增强了平台安全性。
*   **渠道修复**:
    *   **[PR #1554] fix(channels): skip empty text blocks**: 修复了钉钉富文本消息解析错误导致 LLM API 报错 400 的问题 (关联 Issue #1303)。
*   **工具更新**:
    *   **[PR #1278] feat(CLI): Add `copaw update` command**: 新增内置升级命令，简化用户升级流程。

## 4. 社区热点
今日讨论最热烈的问题集中在**部署稳定性**与**平台易用性**：

1.  **[Issue #1610] [enhancement] 容器关闭前台网页导致任务停止**
    *   **热度**: 💬 9 | 痛点: NAS 用户强烈要求后台运行能力。当前 Docker 容器似乎依赖 Web Session 保活，一旦关闭浏览器标签页，任务就会中断，这与 NAS 24h 运行的场景严重冲突。
2.  **[Issue #1385] [Bug]: CPU 占用飙升至 100% (Ubuntu 25.10)**
    *   **热度**: 💬 8 | 痛点: v0.0.7 版本在 Ubuntu 上出现严重的性能倒退。用户排查发现与 MCP (Model Context Protocol) 或文件读取操作有关，即使无信息发送也会空转。
3.  **[Issue #1345] [Bug]: 飞书频道对话"延迟回复"**
    *   **热度**: 💬 7 | 痛点: 飞书渠道存在严重的消息队列乱序/阻塞问题，Bot 经常回答上一个问题，导致交互体验极差。

## 5. Bug 与稳定性
今日 Bug 报告集中爆发，严重程度较高，主要集中在 v0.0.7 引入的回归问题：

*   严重 - **[Issue #1385] CPU 100% 占用**
    *   **状态**: Open | **修复进度**: 用户已尝试定位代码，等待官方确认。
*   严重 - **[Issue #1596] 记忆压缩机制导致对话失忆/乱码**
    *   **状态**: Open | 描述: 压缩逻辑过于激进或异常，导致上下文信息丢失。
*   严重 - **[Issue #1383] 飞书图片导致不支持 Vision 的模型崩溃**
    *   **状态**: Open | 描述: 图片消息未过滤直接透传给非多模态模型，导致 400 错误且 Agent 崩溃。
*   中等 - **[Issue #1613] Ollama SDK 未安装报错**
    *   **状态**: Open | 描述: 连接本地 Ollama 失败。
*   中等 - **[Issue #1593] Windows GBK 编码崩溃**
    *   **状态**: **已有 Fix PR (#1601)** | 描述: Windows 控制台输出 Emoji 时因编码错误崩溃。

## 6. 功能请求与路线图信号
用户对功能的诉求开始从"能用"转向"好用"和"深度定制"：

*   **后台运行/服务化**: 随着更多用户将 CoPaw 部署在 NAS/服务器，要求彻底解除 Web UI 会话强绑定的呼声很高。
*   **多模态增强**: 
    *   **[Issue #918]** 飞书图片/语音的直接识别支持。
    *   **[PR #1476]** 语音转录功能（正在开发中，支持 Local Whisper）。
*   **多 Agent 支持**: **[Issue #1587]** 用户询问何时支持多 Agent 协作，这是 Roadmap 上的关键节点。
*   **中文适配**: **[Issue #1586]** 官方文档缺乏中文版，且部分日志/报错信息对中文用户不友好。

## 7. 用户反馈摘要
*   **部署场景**: NAS 用户（Docker）已成为主力人群之一，对后台静默运行有刚需。
*   **版本焦虑**: v0.0.7 引入的 Bug 较多，部分用户反馈回退到 v0.0.6.post1。
*   **渠道痛点**: 飞书和钉钉的机器人接入体验仍有待打磨，尤其是消息同步稳定性和富文本解析。
*   **模型适配**: 用户尝试接入各种非标准 API (Cline, Codex, Ollama)，兼容性问题频发。

## 8. 待处理积压
以下重要 Issue 涉及核心架构，建议维护者优先关注：

*   **[Issue #430] 🐾 CoPaw Official Roadmap**: 官方路线图 Issue，已有 3 条评论，建议更新进度以引导贡献者。
*   **[Issue #1610] 容器任务无法后台运行**: 涉及架构调整，影响核心部署体验。
*   **[Issue #1569] 飞书渠道吞回复**: 涉及消息投递逻辑，严重影响飞书用户信心。
*   **[PR #1329] Web Authentication**: 大型功能 PR（Web 登录认证），待合并状态，涉及安全性变更，建议尽快 Review 或合并。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

以下是为您生成的 **ZeptoClaw** 项目 2026-03-17 动态日报。

---

# ZeptoClaw 项目动态日报 (2026-03-17)

## 1. 今日速览
ZeptoClaw 项目今日保持**中等偏高**的活跃度，核心开发与社区贡献并进。过去 24 小时内，项目专注于解决多模态交互中的稳定性问题，并积极推进对企业级基础设施的支持。社区提交了 2 个新的 Bug 报告，涉及容器权限和多模态工具调用，同时有 3 个重要的功能 PR 处于活跃状态（含 1 个已关闭）。整体来看，项目正在向更健壮的云原生和多模型支持方向发展，但需关注近期出现的容器化兼容性问题。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
尽管今日无代码合并，但 PR 列表的活跃更新显示了明确的技术演进方向：

*   **多模态交互修复尝试 ([PR #355](https://github.com/qhkm/zeptoclaw/pull/355))**：
    *   状态已更新（由 @rafaellin 提交），旨在修复图片内容在 Agent 循环中丢失的问题。虽然目前显示为 Closed（可能是未合并的直接关闭或另开 PR），但这表明社区正在积极尝试解决 Agent 在多轮对话中处理图片的痛点。
*   **企业级模型支持扩展 ([PR #364](https://github.com/qhkm/zeptoclaw/pull/364))**：
    *   由核心贡献者 @qhkm 提交，引入了 **Google Vertex AI** provider。该 PR 实现了零新增依赖的企业级鉴权，表明项目正在积极适配 GCP 生态，提升对商业大模型的后端兼容性。
*   **协议层能力增强 ([PR #356](https://github.com/qhkm/zeptoclaw/pull/356))**：
    *   由 @starsy 提交，实现了 **ACP (Agent Client Protocol)** 的 stdio 和 HTTP 传输通道。这为 ZeptoClaw 作为子进程被其他客户端调用提供了标准化的协议支持，极大地增强了其作为 SDK 或后端服务的集成能力。

## 4. 社区热点
今日的讨论焦点集中在**开发体验** 与 **多模态稳定性** 上：

*   **[Issue #369](https://github.com/qhkm/zeptoclaw/issues/369) - 容器权限问题**：
    *   该问题由 @taqtiqa-mark 提出，关注在使用 Rootless Podman 进行 Lint 时的权限拒绝问题。作者不仅提出了问题，还直接给出了修复方案（重映射 CARGO_HOME），反映了社区高级用户的深度参与。
*   **[Issue #368](https://github.com/qhkm/zeptoclaw/issues/368) - 工具循环中的图片丢失**：
    *   这是影响 Agent 实际可用性的关键问题。用户发现在多轮工具调用中，图片路径未能转换为 base64，导致 LLM 接收失败。这是目前用户反馈最强烈的功能断点。

## 5. Bug 与稳定性
今日新增 2 个 Bug 报告，暂无崩溃报告，但存在功能回归风险：

1.  **[P2-High] Cargo 权限拒绝 (Dev/CI 环境)**
    *   **链接**: [Issue #369](https://github.com/qhkm/zeptoclaw/issues/369)
    *   **详情**: 在 Rootless Podman 环境下，`rust:slim` 镜像中的 `/usr/local/cargo` 归属权导致非 root 用户无法写入缓存。
    *   **状态**: 已有建议修复方案，等待 PR 提交。

2.  **[Functional] Agent 工具循环图片解析失败**
    *   **链接**: [Issue #368](https://github.com/qhkm/zeptoclaw/issues/368)
    *   **详情**: Agent 执行工具时，后续调用中图片未被转换为 base64，导致 API 调用失败。
    *   **状态**: 严重影响了涉及视觉模型的使用体验，需优先排查。

## 6. 功能请求与路线图信号
结合 Issue 与 PR，可以看出项目下一阶段的迭代重点：

*   **企业级云原生适配**: [Issue #369](https://github.com/qhkm/zeptoclaw/issues/369) 和 [PR #364](https://github.com/qhkm/zeptoclaw/pull/364) 表明项目正在被引入更严格的容器化 CI/CD 流程和云厂商环境（GCP/Vertex AI）。
*   **标准化协议支持**: [PR #356](https://github.com/qhkm/zeptoclaw/pull/356) 预示着 ZeptoClaw 正在寻求成为更通用的 Agent 后端，而不仅仅是一个独立的 CLI 工具。

## 7. 用户反馈摘要
*   **痛点**: 用户在使用多模态 Agent（Vision + Tools）时体验受阻，图片无法在长上下文中保持 ([Issue #368](https://github.com/qhkm/zeptoclaw/issues/368))。
*   **场景**: 开发者倾向于在非 root 权限的容器环境（如 Podman）中进行构建和测试，现有的镜像权限配置构成了阻碍 ([Issue #369](https://github.com/qhkm/zeptoclaw/issues/369))。
*   **正面信号**: 用户对底层协议（ACP）和云服务（Vertex AI）的集成需求强烈，说明项目正在被用于严肃的生产环境搭建。

## 8. 待处理积压
*   **[PR #364](https://github.com/qhkm/zeptoclaw/pull/364) & [PR #356](https://github.com/qhkm/zeptoclaw/pull/356)**: 这两个重要的 Feature PR 均处于 Open 状态且近期有更新。建议维护者尽快进行 Code Review 并合并，以解锁后续的 Vertex AI 和 ACP 功能。
*   **[Issue #368](https://github.com/qhkm/zeptoclaw/issues/368)**: 该 Bug 直接影响核心 Agent 功能的可用性，建议标记为 Priority 并关联至现有的修复尝试。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-17)

**分析师摘要**：EasyClaw 今日主要受新版发布驱动，社区活跃度显著提升。随着 v1.7.0 的推送，macOS 端引入了新的安全签名机制说明，同时也引发了 Windows 平台的兼容性震荡。建议维护者优先关注升级导致的连接中断问题。

---

### 1. 今日速览
EasyClaw 今日处于**高活跃度**状态，主要驱动力来自 **v1.7.0** 的正式发布。虽然代码提交层面无新增 PR，但社区反馈迅速且热烈，单日产生 3 条 Issue 更新。v1.7.0 版本着重解决了安装与部署体验（特别是 macOS），但也带来了 Windows 平台的连接稳定性回归问题。目前项目维护者响应速度较快，昨日关于 OpenAI OAuth 的问题已得到解决并关闭。

### 2. 版本发布
📦 **[v1.7.0] EasyClaw v1.7.0** (发布于近期，今日活跃)
此次更新主要聚焦于**安装体验与系统兼容性**，特别是针对 macOS 的安全机制进行了适配说明。

*   **macOS 适配重点**：解决了 macOS Gatekeeper 拦截未签名应用的问题。若用户遇到 "'EasyClaw' is damaged and can't be opened" 提示，需通过终端命令移除隔离属性（具体命令见 Release Note）。
*   **破坏性变更/迁移注意**：
    *   **Windows 兼容性警报**：根据 Issue #18 反馈，从 v1.6.8 升级至 v1.7.0 后，Windows 系统可能出现连接失败的情况。建议 Windows 用户暂缓升级或保留旧版备份，等待修复补丁。
*   **链接**：[EasyClaw v1.7.0 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.0)

### 3. 项目进展
今日无合并的 Pull Requests。项目当前的重心在于 v1.7.0 发布后的**稳定性维护与文档补充**。

### 4. 社区热点
今日讨论最热烈的话题集中在版本升级后的异常与部署需求：

*   **🔥 [Issue #18] Windows 1.7.0 连接失败** (评论: 4)
    *   **链接**：[gaoyangz77/easyclaw Issue #18](https://github.com/gaoyangz77/easyclaw/issues/18)
    *   **分析**：这是今日最活跃的线程。用户 @slowayear 报告了从 1.6.8 跨版本升级后的严重连接问题。这表明 v1.7.0 可能修改了底层网络协议或鉴权方式，导致旧版本配置无法平滑迁移。社区正在积极排查是否为个例或普遍回归。

*   **💬 [Issue #17] Windows 版本打包教程请求** (评论: 1)
    *   **链接**：[gaoyangz77/easyclaw Issue #17](https://github.com/gaoyangz77/easyclaw/issues/17)
    *   **分析**：用户 @584731180 表达了对 Windows 环境下源码编译和打包流程的强烈需求。这反映出部分进阶用户希望自行编译以解决兼容性问题，或进行二次开发。

### 5. Bug 与稳定性
今日报告了 1 个严重的功能性 Bug，且存在 1 个已解决的旧 Bug。

*   **🔴 严重 - Windows 连接中断**
    *   **Issue**：[#18 - Windows系统，从1.6.8升级到1.7.0后链接不上了](https://github.com/gaoyangz77/easyclaw/issues/18)
    *   **状态**：OPEN | **Fix PR**：无
    *   **详情**：升级后核心功能（连接/抓取）不可用，截图显示具体的错误界面。鉴于该问题直接影响核心可用性，建议标记为最高优先级。

*   **🟢 已解决**
    *   **Issue**：[#16 - OpenAI Oauth好像有问题](https://github.com/gaoyangz77/easyclaw/issues/16)
    *   **状态**：CLOSED
    *   **详情**：关于 OpenAI 认证的报错已在今日修复或确认为非代码问题（便携版与安装版均复现），该 Issue 已被关闭。

### 6. 功能请求与路线图信号
*   **文档与开发者体验**：Issue #17 请求 Windows 的启动和打包教程。这暗示了项目在 Windows 端的开发者文档尚不完善。若维护者能提供标准化的构建脚本或 Wiki，将有助于社区贡献者自行修复类似 #18 的平台特定 Bug。

### 7. 用户反馈摘要
*   **痛点**：升级体验差，v1.7.0 缺乏对 Windows 旧版配置的向后兼容，导致用户被迫回退。
*   **场景**：用户主要使用场景涉及 OpenAI API 的交互（Issue #16, #18）。
*   **满意度**：用户对解决 macOS 报毒问题（v1.7.0 Release Note）表示欢迎，但对 Windows 版本的稳定性表示担忧。

### 8. 待处理积压
*   **需紧急响应**：[Issue #18](https://github.com/gaoyangz77/easyclaw/issues/18) - 目前已有 4 条评论但尚未有官方明确的修复方案，需维护者介入确认是否为普遍回归 Bug。
*   **文档完善**：[Issue #17](https://github.com/gaoyangz77/easyclaw/issues/17) - 这是一个低优先级但对社区健康度有益的请求，建议纳入文档路线图。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*