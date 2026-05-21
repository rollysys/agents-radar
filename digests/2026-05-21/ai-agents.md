# OpenClaw 生态日报 2026-05-21

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-21 04:00 UTC

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

# OpenClaw 项目动态日报 (2026-05-21)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，过去 24 小时内 Issues 与 PR 更新量均达到 500 条，显示出社区对项目的高度关注与贡献热情。项目发布了 **v2026.5.19** 正式版与 **v2026.5.20-beta.1** 测试版，重点增强了 Discord 语音会话的功能与内部架构的清理。尽管新开 Issue 数量（477）远超关闭数量（23），表明项目正处于功能快速迭代与社区反馈爆发期，但大量待合并 PR（457）也反映出贡献者正在积极填补缺口。

## 2. 版本发布
### v2026.5.20-beta.1
- **核心更新**：Discord 语音会话重大升级。支持语音频道跟随、多用户切换、边界对账以及 DAVE 恢复保留，显著提升了语音交互的稳定性与灵活性。
- **相关 PR**：[#84264](https://github.com/openclaw/openclaw/pull/84264)
- **迁移提示**：涉及 Discord 机器人的部署需注意 `IDENTITY.md` 与 `USER.md` 的包含逻辑变更。

### v2026.5.19
- **核心更新**：代码重构与依赖维护。明确了 Agent 修复应遵循清晰的边界重构原则，弃用了部分旧的插件 SDK/API 路径。
- **依赖更新**：`@openclaw/proxyline` 升级至 0.3.3，Pi 包升级至 0.75.1。
- **破坏性变更**：提高了 Node.js 最低支持版本要求，旧版本 Node 环境需尽快升级。

## 3. 项目进展
尽管今日合并/关闭的 PR 数量较少（43 条），但待合并 PR 队列庞大，多个核心功能正在审核中，项目整体处于密集开发阶段：

- **Discord/Feishu 集成优化**：PR [#42936](https://github.com/openclaw/openclaw/pull/42936) 修复了 Feishu 流式输出的配置兼容性；PR [#42480](https://github.com/openclaw/openclaw/pull/42480) 修复了 Discord 消息合并时 @mention 丢失的问题。
- **内存与调度修复**：PR [#84792](https://github.com/openclaw/openclaw/pull/84792) 引入预检压缩前的内存刷新机制，旨在解决高负载下的稳定性问题；PR [#84794](https://github.com/openclaw/openclaw/pull/84794) 修复了隔离 Cron 会话未及时清理的问题。
- **安全与沙箱**：PR [#42853](https://github.com/openclaw/openclaw/pull/42853) 增加了 Node.js 堆内存限制的自动检测配置，防止 OOM 崩溃；PR [#42841](https://github.com/openclaw/openclaw/pull/42841) 为 Node 运行/安装增加了 WebSocket Header 支持，适配 Cloudflare Zero Trust 等安全代理。

## 4. 社区热点
今日讨论最活跃的话题集中在跨平台支持与消息处理的准确性上：

- **[Issue #75] Linux/Windows Clawdbot Apps 需求** (评论 105 条)：社区强烈呼吁提供 Linux 和 Windows 原生客户端，以补全生态。
  - 链接：[openclaw/openclaw Issue #75](https://github.com/openclaw/openclaw/issues/75)
- **[Issue #25592] 工具调用间文本泄露至消息渠道** (评论 26 条)：Agent 在工具调用期间产生的内部日志/错误信息意外发送给用户，严重影响隐私与体验，被标记为高优先级。
  - 链接：[openclaw/openclaw Issue #25592](https://github.com/openclaw/openclaw/issues/25592)
- **[Issue #9443] 预编译 Android APK 请求** (评论 24 条)：用户希望官方直接提供 APK 下载，降低 Android 端部署门槛。
  - 链接：[openclaw/openclaw Issue #9443](https://github.com/openclaw/openclaw/issues/9443)
- **[Issue #22676] Signal 守护进程竞态条件** (评论 17 条)：SIGUSR1 重启时导致孤儿进程与发送失败，涉及底层进程管理的稳定性问题。
  - 链接：[openclaw/openclaw Issue #22676](https://github.com/openclaw/openclaw/issues/22676)

## 5. Bug 与稳定性
今日报告了多个严重的回归与稳定性问题，部分已有修复 PR 跟进：

- **[严重] 消息丢失/泄露**：Issue [#25592](https://github.com/openclaw/openclaw/issues/25592) 导致内部处理文本泄露；Issue [#41744](https://github.com/openclaw/openclaw/issues/41744) 报告飞书渠道图片读取后丢失。
- **[严重] 进程崩溃/死锁**：Issue [#22676](https://github.com/openclaw/openclaw/issues/22676) Signal 重启死锁；Issue [#38327](https://github.com/openclaw/openclaw/issues/38327) 报告 Google Vertex 模型调用触发 "Cannot convert undefined or null to object" 崩溃。
- **[回归] 环境变量失效**：Issue [#31583](https://github.com/openclaw/openclaw/issues/31583) 指出 `exec` 工具不再继承 `skills.entries.*.env` 变量，导致密钥注入失败。
- **[回归] UI 安全上下文**：Issue [#32473](https://github.com/openclaw/openclaw/issues/32473) 报告 Control UI 在非 HTTPS 环境下强制要求设备身份验证，导致部分 VPS 部署无法访问。

## 6. 功能请求与路线图信号
社区正在推动更深层次的架构改进与易用性增强：

- **企业级安全控制**：Issue [#39604](https://github.com/openclaw/openclaw/issues/39604) 请求支持私有网络访问 (`allowPrivateNetwork`)；Issue [#10659](https://github.com/openclaw/openclaw/issues/10659) 提出密钥掩码 功能，防止 Agent 直接读取 API Key。
- **上下文管理优化**：Issue [#22438](https://github.com/openclaw/openclaw/issues/22438) 提议分层加载引导文件，以节省 Token 消耗；Issue [#34400](https://github.com/openclaw/openclaw/issues/34400) 请求内存搜索支持递归子目录。
- **计划纳入信号**：PR [#42853](https://github.com/openclaw/openclaw/pull/42853) (Node 堆内存自动配置) 和 PR [#42936](https://github.com/openclaw/openclaw/pull/42936) (飞书流式修复) 已提交证明，有望在近期版本中解决内存溢出和飞书交互问题。

## 7. 用户反馈摘要
- **部署痛点**：Docker 与 Sandbox 配置仍然复杂，Issue [#31331](https://github.com/openclaw/openclaw/issues/31331) 反映 Docker 内 Sandbox 权限映射错误；Windows 用户在更新时遇到文件占用问题 (Issue [#40540](https://github.com/openclaw/openclaw/issues/40540))。
- **多渠道体验**：用户对 Slack、Feishu、Telegram 的富文本与交互支持需求强烈 (Issue [#12602](https://github.com/openclaw/openclaw/issues/12602))，同时对消息路由准确性（如 Issue [#32296](https://github.com/openclaw/openclaw/issues/32296) 会话上下文混淆）表示担忧。
- **满意度**：Discord 语音功能的更新受到期待，但用户对配置引导文件的复杂性（Issue [#29387](https://github.com/openclaw/openclaw/issues/29387)）表示困惑，希望有更直观的配置层级说明。

## 8. 待处理积压
以下高优 Issue 长期未获解决或处于僵局，需维护者关注：

- **[P1] Issue #29387**：`agentDir` 中的引导文件被忽略，导致多 Agent 配置失效，影响工作流隔离。
  - 链接：[openclaw/openclaw Issue #29387](https://github.com/openclaw/openclaw/issues/29387)
- **[P1] Issue #31583**：环境变量继承回归问题，阻断了基于 Skill 的安全密钥管理。
  - 链接：[openclaw/openclaw Issue #31583](https://github.com/openclaw/openclaw/issues/31583)
- **[长期需求] Issue #75**：Linux/Windows 客户端缺失，这是目前社区呼声最高的平台支持请求。
  - 链接：[openclaw/openclaw Issue #75](https://github.com/openclaw/openclaw/issues/75)

---

## 横向生态对比

# 2026-05-21 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
当前 AI 智能体开源生态正处于**从单点功能向多智能体架构演进**的关键转折期。头部项目（如 Zeroclaw、IronClaw）正引领“多智能体主机”与“安全运行时”的架构重构，而腰部项目则聚焦于**模型兼容性（特别是 DeepSeek-V4 思维链模式）**与**多模态交互**的快速迭代。社区反馈显示，**上下文管理失控**（内存泄露、压缩丢失）与**企业级权限控制**已成为阻碍项目在生产环境落地的最大痛点，生态整体正从“功能堆砌”转向“稳定性与安全合规”的深水区。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PR 活跃度 | Release 情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 极高 (日更 500+) | 极高 (日更 500+) | v2026.5.19 / v2026.5.20-beta | ⚠️ 高压：新增远超关闭，社区反馈积压严重 |
| **CoPaw** | 高 (30/17 Closed) | 高 (32/15 Merged) | v1.1.8.post1 | ✅ 健康：迭代快，修复及时，生态扩展积极 |
| **IronClaw** | 中 (16 Active) | 高 (48 Active) | 无 | ✅ 健康：架构重构稳步推进，企业级特性增强 |
| **Hermes Agent**| 高 (49 New Active) | 中 (43 Pending) | 无 | ⚠️ 偏差：积压 PR 较多，认证阻塞问题长期未解 |
| **Zeroclaw** | 中 (30 Active) | 中 (46 Pending) | v0.8.0-beta-1 | ⚠️ 阵痛：架构升级导致兼容性 Issue 爆发 |
| **PicoClaw** | 中 (流式输出热议) | 中 (28 Active) | v0.2.8-nightly | ✅ 活跃：响应迅速，侧重低成本与轻量化 |
| **NanoBot** | 低 (10 New) | 中 (42 Active) | 无 | ✅ 稳健：PR 合并率高，核心功能落地快 |
| **NanoClaw** | 低 (0 New Comments) | 中 (16 Active) | 无 | ⚠️ 滞后：安全相关 PR 积压，分支维护滞后 |
| **LobsterAI** | 低 (1 New) | 低 (7 Merged) | 无 | ✅ 平稳：聚焦细节打磨与 IM 集成 |
| **Moltis** | 低 (2 New) | 低 (3 Merged) | 无 | ✅ 平稳：修补核心漏洞，关注 Agent 自我认知 |
| **ZeptoClaw** | 极低 | 极低 (1 PR) | 无 | ⚖️ 静默：关键 Provider 修复待审核 |
| **NullClaw** | 无 | 极低 (PR 更新) | 无 | ⚖️ 维护：核心功能开发周期过长 |
| **TinyClaw / EasyClaw** | 无 | 无 | 无 | 💤 休眠：无动态 |

## 3. OpenClaw 在生态中的定位
**定位：生态流量中心与集成标准参照，但正面临架构老化的挑战。**

*   **体量与影响力**：OpenClaw 的 Issue/PR 日更量级（500+）远超其他项目一个数量级，是当之无愧的**流量中心**。它承担了最广泛的社区反馈，扮演着“个人助手”标准实现的角色。
*   **优势与隐忧**：相比 Zeroclaw（多智能体架构）和 IronClaw（安全运行时），OpenClaw 的优势在于成熟的**多平台接入能力**（Discord/飞书/Slack）和庞大的用户基数。然而，大量未关闭的 Issue 和“修补式”更新（如 Discord 补丁、内存刷新机制）显示其正面临**技术债累积**的压力，缺乏像 Zeroclaw v0.8 那样的底层重构魄力。
*   **对比差异**：NanoBot 和 PicoClaw 在特定领域（如冷启动优化、低成本硬件支持）更具灵活性；IronClaw 和 Zeroclaw 则在企业级安全与多智能体架构上更为激进。OpenClaw 需警惕被更具现代架构优势的项目分流核心开发者。

## 4. 共同关注的技术方向
1.  **DeepSeek-V4 "Thinking Mode" 适配**
    *   **涉及项目**：Zeroclaw (#6059 P1级Bug)、Hermes (#29621)、PicoClaw (#2903)。
    *   **具体诉求**：各项目均遭遇 DeepSeek-V4 推理模式导致的 API 格式错误或 Token 统计异常，社区迫切需要一套标准的“思维链”解析与适配方案，而非简单的 OpenAI 兼容层。

2.  **上下文管理与内存稳定性**
    *   **涉及项目**：OpenClaw (#84792 内存刷新)、Hermes (#29559 压缩丢上下文)、NanoBot (#3744 Session隔离)、Moltis (#1010 嵌套内存)。
    *   **具体诉求**：长对话场景下的内存泄露、压缩丢失和隔离失效是普遍痛点。社区正从简单的 KV 存储转向更复杂的分层记忆与会话级隔离架构。

3.  **企业级安全与权限控制**
    *   **涉及项目**：IronClaw (Reborn 安全策略)、OpenClaw (#39604 私有网络)、NanoBot (#3937 危险命令确认)、Zeroclaw (Schema V3)。
    *   **具体诉求**：随着 Agent 进入生产环境，对敏感操作（执行命令、网络访问）的二次确认、密钥掩码和细粒度权限控制需求激增。

## 5. 差异化定位分析

*   **架构理念**：
    *   **Zeroclaw**：**多智能体优先**。v0.8.0 彻底重构为“主机”模式，强调 Agent 间通信（ACP 协议），适合复杂工作流编排。
    *   **IronClaw**：**安全与运行时优先**。核心在于“Reborn”架构和 TEE/凭证管理，适合对数据隐私有高要求的企业场景。
    *   **NanoBot**：**性能与学术优先**。专注于冷启动优化（<1s）和网关轻量化，适合资源受限环境或研究型项目。
    *   **CoPaw**：**生态与渠道优先**。Skill Market 和 Tauri 桌面端重构，强调“开箱即用”的插件生态和 IM 集成体验。

*   **目标用户**：
    *   **OpenClaw/CoPaw**：面向广泛的 C 端用户和极客，侧重 IM 接入与易用性。
    *   **IronClaw/Hermes**：面向开发者与企业用户，侧重可扩展性与安全。
    *   **PicoClaw**：面向硬件玩家与成本敏感型用户（GPT4Free 支持）。

## 6. 社区热度与成熟度
*   **快速迭代期（热血）**：**CoPaw, Zeroclaw, PicoClaw**。这些项目正处于功能爆发或架构大改期，社区兴奋度高，但伴随较高的回归风险（如 Zeroclaw 的配置迁移痛、CoPaw 的 UI 丢失）。
*   **质量巩固期（阵痛）**：**OpenClaw, Hermes Agent**。项目规模庞大，当前重心被迫转向处理积压 Issue 和稳定性修复，新功能开发速度受阻于技术债。
*   **稳健演进期（成熟）**：**IronClaw, NanoBot, LobsterAI**。路线图清晰，PR 合并有序，关注底层架构优化，社区噪音相对较少。
*   **维护/停滞期**：**NullClaw, ZeptoClaw**。活跃度低，核心功能开发缓慢或依赖个别贡献者。

## 7. 值得关注的趋势信号
1.  **从 Web Chat 走向 IDE 与桌面原生应用**
    *   NanoClaw 正在推进 ACP 协议以接入 IDE（WebStorm），CoPaw 重构 Tauri 桌面端，Hermes 提议 Canvas 环境。这表明 **纯 Web Chat 已无法满足复杂任务需求**，Agent 正在向本地操作系统深度集成，寻求更低延迟和更强的文件控制权。

2.  **本地模型与“免费”路由的刚需化**
    *   PicoClaw 社区强烈呼吁 GPT4Free 支持，NanoBot 优化 Ollama 集成。在 API 成本上升和隐私考量下，**“自带后端”** 正成为 Agent 部署的标准选项，路由策略需支持成本优先或隐私优先的智能切换。

3.  **配置管理成为新的“隐形杀手”**
    *   OpenClaw 的环境变量失效、Zeroclaw 的 Schema V3 迁移困难、Hermes 的配置覆盖问题。复杂的配置层级正在劝退新用户。未来的竞争点将不仅是模型能力，更是**配置体验（DX）**，谁能解决“配置地狱”，谁就能获得更高的采用率。

**建议**：开发者应重点关注 **DeepSeek-V4 适配** 的通用解法，以及 **IDE 集成协议（如 ACP）** 的发展，这代表了智能体从“对话玩具”转向“生产力工具”的关键路径。对于生产部署，建议暂缓采用处于“架构剧变期”（如 Zeroclaw v0.8.0-beta）的版本，优先选择 IronClaw 或稳定的 NanoBot 版本。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-21)

## 1. 今日速览
NanoBot 项目今日呈现高度活跃状态，核心开发进度显著提速。过去 24 小时内共处理了 **42 条 PR 更新**，其中 **30 条已合并/关闭**，显示维护团队正在密集进行代码审查与功能迭代。虽然无新版本 Release 发布，但多项重磅功能（Signal 渠道、多模态支持、长任务处理）已成功合入主分支，项目整体功能丰富度与稳定性迈上新台阶。Issues 方面新增 10 条讨论，主要集中在 WebUI 稳定性与企业级多用户隔离需求上。

## 2. 版本发布
**无**。虽无正式 Release，但主分支已合入大量新特性，预示着下一次版本更新将包含重大改进。

## 3. 项目进展
今日共有 **30 个 PR 被合并或关闭**，推进了以下关键领域的发展：

*   **新渠道支持**：**PR #3935** 成功合入 Signal 渠道支持，通过集成 `signal-cli` 实现了安全通讯接入，回应了用户长期以来的诉求（关联 Issue #49）。
*   **性能大幅优化**：**PR #3918** 实现了网关冷启动优化，将启动时间从约 4.6 秒缩减至 480 毫秒（优化幅度达 90%），显著提升了用户体验和部署效率。
*   **多模态能力扩展**：**PR #2908** 合并，将多模态支持从图像扩展至音视频，使 Agent 具备了更强大的感知能力。
*   **复杂任务处理**：**PR #3460** 引入 `LongTaskTool`，允许 Agent 将长耗时任务分解为多步子任务执行，增强了 Agent 处理复杂问题的能力。
*   **架构重构**：**PR #3856** 将核心循环逻辑拆分为 `checkpoint.py` 和 `turn_writer.py`，提升了代码的可维护性。

## 4. 社区热点
今日社区关注点集中在**通讯渠道扩展**与**WebUI 稳定性**上：

*   **[Issue #49](https://github.com/HKUDS/nanobot/issues/49) [ feat: Add Signal channel support]**：该 Issue 创建于 3 个月前，今日随着 PR #3935 的合并得到解决。社区对此功能期待已久（👍 5），标志着 NanoBot 在隐私通讯领域的布局。
*   **[Issue #3884](https://github.com/HKUDS/nanobot/issues/3884) [Bug: WebUI conversation closes]**：WebUI 对话在首次响应后意外关闭，严重影响前端体验，评论数已达 3 条，且有用户确认复现。目前已有 **PR #3944** 提出修复方案。
*   **[Issue #3744](https://github.com/HKUDS/nanobot/issues/3744) [Session级别 MEMORY]**：多用户共用 Agent 时的数据隔离问题引发讨论，反映了企业/团队场景下的核心痛点。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，部分已有修复方案：

*   **严重**：
    *   **[Issue #3884](https://github.com/HKUDS/nanobot/issues/3884)**：WebUI 会话在首次回复后关闭。
        *   *状态*：已有修复 PR [PR #3944](https://github.com/HKUDS/nanobot/pull/3944)。
    *   **[Issue #3945](https://github.com/HKUDS/nanobot/issues/3945)**：WebUI 出现 `Duplicate value for 'tool_call_id'` 错误，导致对话中断。
        *   *状态*：已有修复 PR [PR #3943](https://github.com/HKUDS/nanobot/pull/3943)，解决了流式模式下并行工具调用的 ID 冲突问题。
*   **中等**：
    *   **[Issue #3931](https://github.com/HKUDS/nanobot/issues/3931)**：安全沙箱配置 `restrictToWorkspace=true` 误拦截合法的网络请求（如 curl），影响正常网络工具使用。
    *   **[Issue #3939](https://github.com/HKUDS/nanobot/issues/3939)**：Moonshot API 拒绝同时包含 `thinking` 和 `reasoning_effort` 参数的请求。
        *   *状态*：已有修复 PR [PR #3940](https://github.com/HKUDS/nanobot/pull/3940)。
    *   **[Issue #3934](https://github.com/HKUDS/nanobot/issues/3934)**：`exec` 工具无法通过 pip 正确安装第三方库，环境变量 `PATH` 优先级设置错误。

## 6. 功能请求与路线图信号
根据新增 Issue 与 PR 活动分析，下一阶段重点方向如下：

*   **本地模型生态增强**：[Issue #3941](https://github.com/HKUDS/nanobot/issues/3941) 请求增加 Ollama 的图像生成支持，结合已有的 LLM 支持，完善本地模型的全栈能力。
*   **团队协作与企业级特性**：[Issue #3744](https://github.com/HKUDS/nanobot/issues/3744) 的 Session 级记忆隔离需求强烈，表明用户正在将 NanoBot 应用于多成员协作场景。
*   **群聊体验优化**：[Issue #3938](https://github.com/HKUDS/nanobot/issues/3938) 提出群聊消息缓冲/防抖功能，解决多用户快速发言导致的 Agent 混乱问题。
*   **安全性增强**：[PR #3937](https://github.com/HKUDS/nanobot/pull/3937) 提出为危险命令增加用户确认机制，目前处于 Open 状态，有望提升系统安全性。

## 7. 用户反馈摘要
*   **痛点**：WebUI 不稳定（会话断开、ID 冲突）是当前用户最直接的不满；多用户环境下的内存隔离机制缺失阻碍了团队部署。
*   **场景**：用户尝试将 NanoBot 接入 Signal 进行安全通讯；通过 WebUI 进行日常交互；在 Ollama 本地环境中尝试进行文生图操作。
*   **期待**：用户希望系统能更智能地处理并发和流式响应（如 Tool Call ID 去重），并期待更完善的本地模型支持。

## 8. 待处理积压
*   **[Issue #3744](https://github.com/HKUDS/nanobot/issues/3744)**：多用户 Session 级 Memory 请求尚无明确解决方案，需维护者关注架构设计。
*   **[PR #3937](https://github.com/HKUDS/nanobot/pull/3937)**：危险命令确认机制 PR 待审查，涉及安全核心逻辑，建议优先评估。
*   **[PR #3927](https://github.com/HKUDS/nanobot/pull/3927)**：新增 Novita AI Provider 的 PR 处于 Open 状态，拓展了新的 LLM 供应商，待合并。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-21)

## 1. 今日速览
Zeroclaw 项目今日迎来了重大架构升级，正式发布 **v0.8.0-beta-1**，标志着项目从单智能体守护进程成功转型为真正的多智能体主机。尽管版本更新具有里程碑意义，但社区活跃度显示出较高的维护压力：过去24小时内新增/活跃 Issues 高达 30 条，仅关闭 10 条；PR 待合并积压达 46 条，合并仅 4 条。社区焦点主要集中在 v0.8.0 带来的 Schema V3 迁移适配、DeepSeek-V4 API 兼容性危机以及 MCP 工具调用的稳定性问题上。

## 2. 版本发布
### v0.8.0-beta-1
- **链接**: [Release v0.8.0-beta-1](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0-beta-1)
- **核心变更**: 架构从单 Agent 升级为多 Agent 主机。单次安装现已支持并行运行多个命名 Agent，每个 Agent 拥有独立的身份、工作区、内存、模型提供商、通道和安全配置文件，且 Agent 间可相互通信。
- **破坏性变更**: 涉及 Schema V3 迁移 (相关 Issue #5947 已关闭)，配置文件结构发生重大调整，用户需注意配置迁移。
- **迁移注意**: 旧的单一工作区身份模型已被替换，用户需按新的 `[agents.<alias>]` 结构重组配置。

## 3. 项目进展
今日项目主要推进了 v0.8.0 架构落地的核心基础工作，以及部分修复：
- **多智能体架构落地**: 随着核心 RFC #5890 (Multi-agent UX flow) 和 #6272 (Multi-agent runtime) 的关闭，多智能体运行时的隔离权限与工作区机制已正式确立。
- **Schema V3 迁移完成**: Issue #5947 关闭，标志着破坏性字段迁移已完成，为 v0.8.0 铺平道路。
- **测试覆盖合并**: PR #6744 已合并，增加了对流式负载追踪的测试覆盖，提升了 Provider 模块的稳定性。
- **文档与构建优化**: PR #6814 修正了 CI Labeler 的误标记问题，PR #6805 更新了部署脚本以适配 v0.8.0 的新网关启动方式。

## 4. 社区热点
今日社区讨论热度最高的问题集中在 **兼容性** 与 **配置复杂性** 上：
- **[#6059 [Bug]: Incompatible with DeepSeek-V4 API format](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)**
  - **热度**: 👍 4 | 评论 11
  - **分析**: 这是目前最高优先级 (P1) 的活跃 Bug。用户报告 DeepSeek-V4-Pro/Flash 在 "thinking mode" 下 API 报错。鉴于 DeepSeek 在开源社区的流行度，此问题引发了广泛关注，目前状态为 "in-progress"。
- **[#5890 [RFC]: Multi-agent UX flow — design](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)**
  - **热度**: 评论 9
  - **分析**: 该 RFC 今日正式关闭并被接受，确立了多智能体交互的设计规范，是 v0.8.0 发布的前奏。
- **[#6820 [Feature]: ACP protocol extensions for diff/file-proposal message types](https://github.com/zeroclaw-labs/zeroclaw/issues/6820)**
  - **热度**: 评论 2
  - **分析**: 新提出的 Feature Request，旨在扩展 ACP 协议以支持 Agent 提议的文件变更和 Diff 展示，这对于 TUI 和 Web 端的代码编辑工作流至关重要。

## 5. Bug 与稳定性
今日报告了多个高风险 Bug，主要集中在 **工具调用** 和 **配置解析** 模块，反映出 v0.8.0 架构升级带来的震荡：

- **高危 (High Risk / P1)**:
  - **[#6059 DeepSeek-V4 API 兼容性](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)**: 严重程度 S2，导致模型行为降级，目前开发团队正在处理。
  - **[#6699 tool_filter_groups 对 MCP 工具无效](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)**: 配置了工具过滤组但实际未生效，存在前缀检查 Bug 和延迟加载集成问题。
  - **[#6721 tool_search 导致 Webhook 模式静默挂起](https://github.com/zeroclaw-labs/zeroclaw/issues/6721)**: 在非交互模式下，由于 `tool_search` 不在默认批准列表，导致请求挂起 120s 后自动拒绝，严重影响自动化流程。
  - **[PR #6816 安全策略命令分割修复](https://github.com/zeroclaw-labs/zeroclaw/pull/6816)**: 修复了 SecurityPolicy 在处理多行 Heredocs 时的解析错误，防止安全策略误判。

- **中危 (Medium Risk / P2)**:
  - **[#6724 Channels 监管器崩溃循环](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)**: 当所有通道配置为 `enabled=false` 时，监管器会陷入死循环重启。
  - **[#6723 OpenAI Provider 硬编码超时](https://github.com/zeroclaw-labs/zeroclaw/issues/6723)**: 忽略用户配置的 `timeout_secs`，强制使用 120s 超时。
  - **[#6720 死代码 context_aware_tools](https://github.com/zeroclaw-labs/zeroclaw/issues/6720)**: 配置字段存在但未实际生效。

## 6. 功能请求与路线图信号
结合新版本与今日 Issues，项目下一阶段重点已明确：
- **TUI (Terminal User Interface) 全面重构**: 今日连开 4 个 Tracker Issues (#6825, #6824, #6823, #6822)，涵盖 TUI 的 UX 设计、聊天功能、ACP 桥接及发布矩阵。这表明在多智能体架构稳定后，**交互体验** 将是下一版本核心。
- **ACP 协议增强**: #6820 提议在协议层支持文件变更提议，预示着 Zeroclaw 将具备更强的代码自主修改能力。
- **轻量化尝试**: #6165 提出移除冗余集成代码，改用 Skills 机制，反映了社区对核心组件“瘦身”的诉求。

## 7. 用户反馈摘要
从 Issue 评论中提炼出以下痛点：
- **配置迁移痛点**: 随着多智能体和 Schema V3 的引入，用户面临配置结构调整的压力，部分配置项（如 `tool_filter_groups`, `context_aware_tools`）被指“虽配无效”。
- **API 兼容性焦虑**: DeepSeek 等国产大模型的快速迭代导致 Zeroclaw 兼容性滞后，用户迫切希望 Provider 层能更快适配新 API 特性（如 Thinking Mode）。
- **运行时稳定性**: 多个 Bug 报告 (#6724, #6721) 显示，在特定配置或非交互模式下，系统存在崩溃或死锁风险，自动化运维体验有待提升。

## 8. 待处理积压
- **PR 积压严重**: 当前有 **46 个 PR 处于待合并状态**，其中包括 [PR #5652 (Anthropic Extended Thinking 支持)](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) 等长期高价值功能，建议维护者优先处理积压以避免功能分支过期。
- **历史债务**: Issue #6074 追踪了之前批量回滚丢失的 153 个提交，目前状态为 `in-progress`，需持续关注恢复进度，防止代码资产流失。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-21)

## 1. 今日速览
Hermes Agent 项目今日维持高活跃度，社区提交了 **49 条新活跃 Issue**，同时有 **43 个 PR 处于待合并状态**，显示出项目迭代节奏紧凑但审核压力较大。今日无新版本发布，开发重心主要集中在**安全加固**（Webhook/Slack）、**网关稳定性**（重启/正则修复）以及**多平台适配**（Discord/DeepSeek/Feishu）。社区对 Anthropic 认证失败（#15080）和 TUI 界面可读性（#18080）的反馈尤为强烈，建议维护者优先关注 P1 级别的上下文丢失与认证问题。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 7 个 PR 更新为已合并/关闭状态，另有大量修复类 PR 等待审核，重点进展如下：

*   **安全加固推进**：针对 Webhook 路由的安全修复 [PR #29629](https://github.com/NousResearch/hermes-agent/pull/29629) 已提交，旨在解决 GHSA-27g9-x3x6-4m35 漏洞，确保无密钥路由“安全关闭”；同时 [PR #29627](https://github.com/NousResearch/hermes-agent/pull/29627) 强化了 Slack Block Kit 交互回调的权限校验。
*   **网关与核心修复**：[PR #29619](https://github.com/NousResearch/hermes-agent/pull/29619) 修复了网关重启导致新实例挂起的严重 Bug；[PR #29620](https://github.com/NousResearch/hermes-agent/pull/29620) 修复了 MEDIA 正则表达式的关键转义错误。
*   **平台适配优化**：[PR #29630](https://github.com/NousResearch/hermes-agent/pull/29630) 优化了飞书对 Markdown 表格的渲染支持；[PR #29622](https://github.com/NousResearch/hermes-agent/pull/29622) 修复了 DeepSeek 模型配置 API Key 不生效的问题。
*   **测试覆盖**：[PR #29016](https://github.com/NousResearch/hermes-agent/pull/29016) 重构了测试套件，引入进程隔离以解决手动重置状态的不稳定性。

## 4. 社区热点
今日社区讨论聚焦于认证阻塞与体验优化：

*   **[Issue #15080](https://github.com/NousResearch/hermes-agent/issues/15080) [P1]**: **Anthropic OAuth 认证全线失败**。用户报告在使用 Claude Max 订阅的 OAuth Token 时请求被拒绝（HTTP 400），该问题自 4 月底持续至今，评论数达 13 条，是当前阻碍 Anthropic 用户的核心阻塞点。
*   **[Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080) [P3]**: **Dashboard 主题急需优化**。用户反馈当前主题字体小、对比度低、衬线字体难以阅读，获得 **22 个点赞**，是今日呼声最高的体验改进需求。
*   **[Issue #3002](https://github.com/NousResearch/hermes-agent/issues/3002)**: **NeuTTS 安装失败**。新用户在开启语音功能时遭遇 pip 模块缺失错误，持续引发讨论。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，按严重程度排序：

*   **P1 - 严重功能受损**:
    *   **[Issue #29559](https://github.com/NousResearch/hermes-agent/issues/29559)**: 上下文压缩过程中若发生网络错误，系统将**静默丢弃所有被压缩的消息**，导致长任务上下文完全丢失，需重置会话。
    *   **[Issue #13079](https://github.com/NousResearch/hermes-agent/issues/13079)**: `read_file` 工具的去重机制将缓存提示文本污染到实际文件内容中。
*   **P2 - 回归与兼容性问题**:
    *   **[Issue #29562](https://github.com/NousResearch/hermes-agent/issues/29562)**: v0.14.0 引入回归，Dashboard TUI 无法显示长对话的完整历史，头部消息被截断。
    *   **[Issue #29567](https://github.com/NousResearch/hermes-agent/issues/29567)**: 后台审查进程导致 Anthropic Prefix Cache 碎片化，浪费约 50% 的缓存写入。
    *   **[Issue #29621](https://github.com/NousResearch/hermes-agent/issues/29621)**: DeepSeek 主模型触发 429 限流后，切换备用模型失败并报错 `NameError`。
    *   **[Issue #29612](https://github.com/NousResearch/hermes-agent/issues/29612)**: Discord 移动端 @mention 无法触发 Bot 响应。
*   **P3 - 配置与 UI 问题**:
    *   **[Issue #29285](https://github.com/NousResearch/hermes-agent/issues/29285)**: `auth.json` 中的配置静默覆盖 `config.yaml` 中的模型配置，导致运行时模型错乱。

## 6. 功能请求与路线图信号
*   **多角色路由重构**：[Issue #5143](https://github.com/NousResearch/hermes-agent/issues/5143) 更新了 v2 提案，计划通过网关钩子实现更干净的多角色自动路由与误路由恢复机制。
*   **Canvas 交互环境**：[Issue #29565](https://github.com/NousResearch/hermes-agent/issues/29565) 提议构建 Hermes-Canvas，实现基于 GUI 的文本编辑与混合补全环境，增强 Agent 的交互能力。
*   **会话级工作目录**：[Issue #29531](https://github.com/NousResearch/hermes-agent/issues/29531) 建议为网关会话提供独立的工作目录，以解决多会话并发冲突问题。

## 7. 用户反馈摘要
*   **认证体验痛点**：用户对 Anthropic OAuth 认证问题感到挫败，即便是付费订阅用户也无法正常使用本地 Token，认为这是阻碍使用 Hermes 的最大障碍。
*   **UI/UX 体验差**：多位用户指出 Dashboard 的默认主题设计“非主流”，字体细小且对比度低，严重影响长时间使用的舒适度，强烈建议引入更标准的无衬线字体和高对比度主题。
*   **稳定性担忧**：长对话场景下的上下文丢失（#29559）让用户对执行关键任务感到不安，认为应增加失败保护或重试机制。

## 8. 待处理积压
*   **[Issue #15080](https://github.com/NousResearch/hermes-agent/issues/15080)**: Anthropic OAuth 认证问题已持续近一个月，严重影响付费用户接入，急需官方介入或给出临时方案。
*   **[PR #13274](https://github.com/NousResearch/hermes-agent/pull/13274)**: 修复 Telegram 用户名 Chat ID 支持的 PR 已开启一月有余，虽经过讨论但尚未合并，影响 Telegram 频道集成。
*   **[Issue #3002](https://github.com/NousResearch/hermes-agent/issues/3002)**: 安装依赖问题仍未解决，增加了新用户的入门门槛。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-21)

## 1. 今日速览
PicoClaw 项目今日保持**高度活跃**状态，开发重心显著向**系统稳定性与鲁棒性**倾斜。过去 24 小时内共有 28 条 PR 更新，其中 10 条已合并/关闭，显示出维护者正在积极清理技术债务并推进 v0.2.8 版本的迭代。今日发布了 `v0.2.8-nightly` 版本，包含了针对 Agent 循环、消息总线和存储层的关键修复。社区方面，用户对**流式输出**和**低成本/免费模型支持**（如 GPT4Free）的关注度持续升温，新功能请求与实现几乎同步进行，项目生态扩展迅速。

## 2. 版本发布
- **nightly: Nightly Build v0.2.8-nightly.20260521.33f9d638**
  - **更新内容**：自动构建版本，包含最新的代码提交。
  - **注意事项**：官方提示此为自动构建版本，可能存在不稳定性，建议测试环境优先验证。
  - **变更日志**：[v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## 3. 项目进展
今日共有 **10 条 PR 合并/关闭**，主要集中在功能增强与关键 Bug 修复，显著提升了系统的可用性：

- **Agent 能力增强**：
  - PR #2898 (Closed): 修复了 `thinking_level: "off"` 的显式处理逻辑，确保关闭思考模式时行为符合预期，这对 DeepSeek 等模型的使用至关重要。
  - PR #2765 (Closed) & #2760 (Closed): 合并了 `update_plan` 工具移植与 `image_generate` 图片生成工具，丰富了 Agent 的原生工具链。
- **系统稳定性与恢复**：
  - PR #2891 (Closed): 新增“恢复出厂设置”功能，解决了版本升级配置不兼容导致的启动失败问题，提供了安全的降级/重置路径。
  - PR #2725 (Closed): 修复了 MCP 初始化失败导致 Agent 僵死的问题，增强了网络不佳环境下的容错性。
- **提供商支持优化**：
  - PR #2757 (Closed): 修复了 OpenAI OAuth 认证支持，改善了 Codex 和转录功能的集成体验。

## 4. 社区热点
今日讨论最活跃的 Issues 集中在功能扩展与核心交互体验上：

- **[Issue #1950](https://github.com/sipeed/picoclaw/issues/1950) [Web Chat 流式输出]**：评论数达 9 条。这是用户长期关注的痛点，希望能支持 Web 端的流式输出以提升交互体验。目前标记为 `enhancement` 且优先级较低，但社区呼声很高。
- **[Issue #2404](https://github.com/sipeed/picoclaw/issues/2404) [流式 HTTP 请求配置]**：评论数 7 条。用户提议在配置文件中直接支持 `streaming: true`，以便更好地对接 LLM 后端。
- **[Issue #2901](https://github.com/sipeed/picoclaw/issues/2901) & [PR #2909](https://github.com/sipeed/picoclaw/pull/2909) [GPT4Free 支持]**：今日新开的功能请求与 PR。用户希望集成 GPT4Free 作为 Provider，以降低在轻量级硬件上的使用成本。PR #2909 已快速跟进实现，显示出社区对低成本/免费方案的强烈需求。

## 5. Bug 与稳定性
今日报告并处理的 Bug 主要涉及系统启动崩溃与运行时稳定性，严重程度较高的问题已有修复方案：

- **🔴 严重**：[Issue #2720](https://github.com/sipeed/picoclaw/issues/2720) **PID 文件校验导致启动崩溃循环**。
  - **现象**：系统崩溃后 PID 文件未清理，若 PID 被系统其他进程复用，PicoClaw 会误判自身已运行而拒绝启动。
  - **状态**：已有修复方案 [PR #2813](https://github.com/sipeed/picoclaw/pull/2813)，正在等待合并。
- **🟠 中等**：[Issue #2769](https://github.com/sipeed/picoclaw/issues/2769) **跨提供商认证失败 (401)**。
  - **现象**：有效的 API Key 被判定为无效。该 Issue 已关闭，推测已在近期版本中修复。
- **🟢 修复中**：
  - [PR #2904](https://github.com/sipeed/picoclaw/pull/2904)：修复 Agent 循环重载时的资源泄漏与 Panic 风险。
  - [PR #2905](https://github.com/sipeed/picoclaw/pull/2905)：修复 Fallback 链在上下文过期时的无效重试问题。
  - [PR #2907](https://github.com/sipeed/picoclaw/pull/2907)：修复 JSONL 存储在崩溃后的元数据漂移问题。

## 6. 功能请求与路线图信号
结合 Issues 与今日活跃的 PRs，项目路线图呈现以下趋势：

1.  **多模态与富媒体支持**：[Issue #2855](https://github.com/sipeed/picoclaw/issues/2855) 与 [PR #2856](https://github.com/sipeed/picoclaw/pull/2856) 显示项目正在打通 Agent 与外部通道（如 Telegram）的富媒体交互能力，支持图文混发。
2.  **深度集成特定模型特性**：[Issue #2903](https://github.com/sipeed/picoclaw/issues/2903) 提出对 DeepSeek 思考模式的映射支持，表明项目正从“通用 OpenAI 兼容”转向“针对主流模型深度适配”。
3.  **降低使用门槛**：新增的“恢复出厂设置” ([PR #2891](https://github.com/sipeed/picoclaw/pull/2891)) 与 GPT4Free 支持 ([PR #2909](https://github.com/sipeed/picoclaw/pull/2909)) 均旨在降低小白用户和开发者的尝鲜门槛。

## 7. 用户反馈摘要
- **痛点**：
  - **流式输出缺失**：Web 端用户迫切需要流式输出功能，目前的请求-响应模式体验较慢。
  - **崩溃恢复机制**：PID 文件锁死导致无法自动重启是生产环境的隐患，用户反馈较为强烈。
  - **特定硬件兼容**：Raspberry Pi Zero 2 用户希望默认构建包含 WhatsApp 支持 ([Issue #2625](https://github.com/sipeed/picoclaw/issues/2625))。
- **满意点**：
  - 开发者对新功能的响应速度极快，如 GPT4Free 的支持在提出当天即有 PR 跟进。
  - 系统加固类 PR（如 CSRF 保护、路径遍历校验 [PR #2900](https://github.com/sipeed/picoclaw/pull/2900)）显示了项目对安全性的重视。

## 8. 待处理积压
以下重要 Issue/PR 处于 Stale 或长期未合并状态，需维护者关注：

- **[PR #2813](https://github.com/sipeed/picoclaw/pull/2813) [PID 校验修复]**：针对高优先级的崩溃循环问题 ([Issue #2720](https://github.com/sipeed/picoclaw/issues/2720))，建议尽快 Review 合并。
- **[Issue #1950](https://github.com/sipeed/picoclaw/issues/1950) & [Issue #2404](https://github.com/sipeed/picoclaw/issues/2404) [流式输出支持]**：长期活跃的功能请求，建议纳入近期 Roadmap 进行规划。
- **[PR #2858](https://github.com/sipeed/picoclaw/pull/2858) [Markdown 执行安全修复]**：涉及 Exec 工具的安全加固，建议评估后合并。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-21)

## 1. 今日速览
NanoClaw 项目今日呈现出高度活跃的开发状态，核心贡献者正大力推进多模态能力与协议扩展。过去 24 小时内，项目接收到了 16 个 PR 更新（其中 12 个处于待合并状态），显示了社区在功能迭代上的强劲动力。虽然今日无新版本发布，但多个重量级功能分支（如 Veo 3.1 视频生成、ACP 协议集成）正在积极通过审查，预示着下一次版本更新将包含重大功能升级。与此同时，社区反馈聚焦于容器基础设施的稳定性与多平台集成的细节问题，整体项目健康度良好，正处于功能快速累积期。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 4 个 PR 被关闭（均为 `dooha333` 提交的 LXC 安装与设置修复系列），具体进展如下：

*   **基础设施与安装修复**：一组针对 LXC 环境安装体验的修复 PR ([#2052](https://github.com/nanocoai/nanoclaw/pull/2052), [#2054](https://github.com/nanocoai/nanoclaw/pull/2054), [#2056](https://github.com/nanocoai/nanoclaw/pull/2056), [#2057](https://github.com/nanocoai/nanoclaw/pull/2057)) 已关闭。这些 PR 解决了 systemd 在 LXC 中的安装问题、设置过程中的隐形 sudo 挂起以及 polkit 噪音干扰，显著提升了非标准主机环境下的部署成功率。

**活跃开发中的重点功能（Open PRs）：**

*   **多模态视频生成 (Edna Veo 3.1)**：PR [#2532](https://github.com/nanocoai/nanoclaw/pull/2532) 正在集成 Google Veo 3.1，实现端到端的视频生成、拼接及 Slack 投递能力，同时支持入站媒体处理，这将极大地扩展 Agent 的内容创作边界。
*   **IDE 深度集成 (ACP 协议)**：PR [#2542](https://github.com/nanocoai/nanoclaw/pull/2542) 与 [#2575](https://github.com/nanocoai/nanoclaw/pull/2575) 提出了 ACP (Agent Client Protocol) 支持，允许 NanoClaw 作为 IDE（如 WebStorm）的后端 Agent 运行，实现了文件提及 与 IDE 的联动，为开发者提供了更原生的 AI 编程体验。
*   **上下文感知增强**：PR [#2573](https://github.com/nanocoai/nanoclaw/pull/2573) 旨在让 Agent 能够感知自身的上下文窗口使用率，从而主动调整工作节奏，避免因超出上下文限制导致任务失败。

## 4. 社区热点
今日社区活跃点主要集中在集成兼容性与基础设施维护上，尽管 Issues 评论数为 0，但新开 Issue 直击痛点：

*   **Apple Container 基础设施滞后**：Issue [#2574](https://github.com/nanocoai/nanoclaw/issues/2574) 指出 `skill/apple-container` 分支严重落后于主分支，导致合并会回滚基础设施更新。这反映了社区对特定技能分支维护滞后的担忧，呼吁维护者关注分支同步问题。
*   **WhatsApp 共享模式误触**：Issue [#2570](https://github.com/nanocoai/nanoclaw/issues/2570) 报告了在 WhatsApp 共享号码模式下，提及人工客服会错误唤醒 AI Agent。这暴露了多租户/共享模式下消息路由逻辑的缺陷，是影响生产环境使用体验的关键问题。

## 5. Bug 与稳定性
今日报告了多个影响功能可用性的 Bug，部分已有修复方案：

*   **[High]** **Apple Container 分支过时**：Issue [#2574](https://github.com/nanocoai/nanoclaw/issues/2574) 指出基础设施回滚风险。目前尚未有修复 PR 链接。
*   **[High]** **Rootless Podman 兼容性**：PR [#2572](https://github.com/nanocoai/nanoclaw/pull/2572) 修复了在 rootless Podman 下容器进程 UID 映射错误导致的写入权限问题。这是一个两层的复合 Bug，严重影响非 root 环境部署。
*   **[Medium]** **数据库写入静默失败**：PR [#2496](https://github.com/nanocoai/nanoclaw/pull/2496) 修复了 `writeOutboundDirect` 以只读模式打开数据库导致的消息投递失败。
*   **[Medium]** **Emoji Reaction Schema 不一致**：Issue [#2569](https://github.com/nanocoai/nanoclaw/issues/2569) 指出 Schema 要求 shortcode 但处理器传递了原始字符，导致 WhatsApp 和 Discord 报错。
*   **[Medium]** **轮询重复文本**：PR [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) 修复了 `send_message` 在轮询中途触发时的重复文本问题。

## 6. 功能请求与路线图信号
今日的功能提案与实现主要围绕“扩展 Agent 能力边界”与“降低成本”展开：

*   **IDE 原生化**：ACP 协议的引入 ([#2542](https://github.com/nanocoai/nanoclaw/pull/2542), [#2575](https://github.com/nanocoai/nanoclaw/pull/2575)) 明确了 NanoClaw 意图成为通用 AI 后端，不仅仅局限于 CLI 或 Web 端。
*   **成本优化**：PR [#2571](https://github.com/nanocoai/nanoclaw/pull/2571) 引入了 `rtk` 技能，声称可为开发命令节省 60-90% 的 Token 消耗，显示出对运营成本控制的重视。
*   **数据架构重构**：PR [#1723](https://github.com/nanocoai/nanoclaw/pull/1723) 提出的可插拔中央数据库（SQLite + SeekDB）仍在更新，预示着项目正在为大规模部署做架构准备。

## 7. 用户反馈摘要
从 Issues 内容分析，用户反馈主要集中在以下场景：

*   **部署环境多样性**：用户正在尝试在 LXC、Rootless Podman 等“非标准”环境中部署 NanoClaw，并遇到了权限和 Systemd 兼容性问题。
*   **多平台集成细节**：WhatsApp 和 Discord 集成的边缘案例被频繁提及（如 @提及触发逻辑、Emoji 格式），说明用户正在将这些集成用于实际生产流程。
*   **基础设施维护**：用户对技能分支的维护状态敏感，期望分支能紧跟主分支的架构演进（Issue #2574）。

## 8. 待处理积压
以下长期未响应或高影响的 Issue/PR 需要维护者关注：

*   **安全相关 PR 积压**：PR [#1999](https://github.com/nanocoai/nanoclaw/pull/1999) (拒绝符号链接目录)、[#2004](https://github.com/nanocoai/nanoclaw/pull/2004) (仅信任官方渠道) 和 [#2383](https://github.com/nanocoai/nanoclaw/pull/2383) (Agent 间授权检查) 均已提交超过 10 天，涉及核心安全边界，建议优先审查。
*   **数据库架构重构**：PR [#1723](https://github.com/nanocoai/nanoclaw/pull/1723) (SQLite/SeekDB 重构) 已持续活跃一个多月，是底层架构变更，需推动合并或打回。
*   **Apple Container 分支维护**：Issue [#2574](https://github.com/nanocoai/nanoclaw/issues/2574) 提示特定功能分支严重腐烂，需维护者进行 rebase 或归档处理。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-05-21)

## 1. 今日速览
NullClaw 项目今日整体活跃度较低，用户端反馈平静，无新增 Issues 或版本发布。开发重心主要集中于底层架构的迭代，核心贡献者正在推进两项重要的待合并 PR，分别涉及核心调度引擎与跨平台兼容性。虽然今日无代码合并记录，但 PR #783 的持续更新表明项目正致力于增强智能体的自主运行能力。整体来看，项目处于功能累积与稳定性维护阶段。

## 2. 版本发布
无。

## 3. 项目进展
今日无合并或关闭的 PR。项目进展主要体现在以下两个正在活跃开发的特性分支：

*   **自动化调度引擎推进**: PR [#783](https://github.com/nullclaw/nullclaw/pull/783) 今日有更新，该 PR 旨在引入基于数据库的 Cron subagent 引擎。一旦合并，NullClaw 将具备定时任务执行、历史记录追踪及安全加固能力，标志着项目从被动响应向主动自主智能体迈进了一大步。
*   **Windows 平台兼容性增强**: PR [#892](https://github.com/nullclaw/nullclaw/pull/892) 目前处于 Open 状态，重点解决 Windows 平台网络解析的回归测试问题。这表明开发团队正在积极修补跨平台兼容性短板，确保在 Windows 环境下的稳定性。

## 4. 社区热点
今日无活跃的 Issues 讨论，社区互动较为冷淡。关注度较高的动态主要集中在代码贡献侧：

*   **[PR #783](https://github.com/nullclaw/nullclaw/pull/783) feat(cron): cron subagent...**
    *   **分析**: 尽管该 PR 创建于 4 月，但今日的更新表明其仍是当前开发主线。该功能涉及安全加固和 JSON 输出，是构建可自动化、可编程 AI 智能体的关键基础设施，预计将在合并后显著提升项目的企业级应用价值。

## 5. Bug 与稳定性
根据今日活跃的 PR 分析，发现以下潜在或已修复的稳定性问题：

*   **[中等] Windows 平台网络解析回归** (关联 PR: [#892](https://github.com/nullclaw/nullclaw/pull/892))
    *   **问题描述**: 引用 Issue #890。Windows 版本的 `getAddressList` 此前仅存根，导致主机名预解析失败，抛出 `HostResolutionFailed` 错误，直接影响所有需要网络连接的供应商聊天补全功能。
    *   **状态**: 问题已在 `main` 分支修复，当前 PR 正在添加回归测试以确保修复的长期有效性。目前尚无用户在 Issues 中报告新发 Bug。

## 6. 功能请求与路线图信号
*   **自主调度与自动化**: PR [#783](https://github.com/nullclaw/nullclaw/pull/783) 明确释放了路线图信号——NullClaw 正在集成 Cron 能力。这意味着用户未来可定义周期性任务、设置时区偏移量，并接收执行历史与告警。这是 AI Agent 从“对话工具”转向“自动化运维助手”的关键信号。
*   **标准化输出**: 同一 PR 中提到的 `cron list --json` 等 CLI 输出格式化功能，显示项目正在加强对脚本集成和程序化调用的支持。

## 7. 用户反馈摘要
过去 24 小时无新开 Issue 或评论，暂无法提炼用户痛点或满意反馈。当前的寂静可能意味着现有版本稳定性尚可，或用户正在观望下一版本功能的落地。

## 8. 待处理积压
*   **[重要] PR #783 持续积压**: 该 PR 自 2026-04-07 创建至今已逾 1 个月，虽今日有更新但尚未合并。鉴于其涉及核心调度引擎与数据库变更，建议维护者关注其合并进度，以防长期分支导致合并冲突或阻断其他依赖功能的开发。
*   **[一般] PR #892 测试补充**: 该 PR 自 5 月 5 日开启，目前处于 Open 状态。建议尽快合并以完善 CI 对 Windows 平台的覆盖。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-21)

## 1. 今日速览
IronClaw 项目今日保持**高度活跃**状态，核心开发重点集中在代号为 "Reborn" 的架构重构上。过去24小时内，项目共有 **48 条 PR 更新**（其中 19 条已合并/关闭）和 **16 条 Issue 更新**。虽然无新版本 Release 发布，但合并的代码显著推进了宿主运行时的安全策略、凭证管理和 Shell 能力迁移。社区贡献方面，出现了关于企业微信通道和 IronHub 集成的大型 PR，显示出生态扩展的强劲势头。

## 2. 版本发布
无新版本发布。
*(注：PR #3708 正在准备 `ironclaw_common` 0.5.0 和 `ironclaw` 0.28.2 的发布，包含 API 破坏性变更，但截至发稿时尚未合并。)*

## 3. 项目进展
今日合并/关闭的关键 PR 推动了 "Reborn" 架构的实质性落地，主要进展如下：

*   **宿主能力与安全策略强化**：
    *   PR [#3820](https://github.com/nearai/ironclaw/pull/3820) 已合并，强化了宿主能力调度前的运行时策略检查，确保 `NetworkMode::Deny` 等策略在工具调用前生效。
    *   PR [#3816](https://github.com/nearai/ironclaw/pull/3816) 已合并，成功将 Shell 能力移植至 Reborn 内置能力中，支持调用方级别的权限控制。
    *   PR [#3818](https://github.com/nearai/ironclaw/pull/3818) 已合并，强制生产环境出口流量使用分段凭证，拒绝直接的 SecretStore 租赁，提升了安全性。

*   **本地开发体验优化**：
    *   PR [#3832](https://github.com/nearai/ironclaw/pull/3832) 和 [#3833](https://github.com/nearai/ironclaw/pull/3833) 已合并，优化了 Reborn 本地开发环境中的 Shell 授权与权限构造，方便开发者进行 CLI 工作流测试。

*   **CI/CD 基础设施建设**：
    *   PR [#3808](https://github.com/nearai/ironclaw/pull/3808) 已合并，引入了 `/benchmark` 斜杠命令调度器，支持维护者在 PR 上直接触发性能基准测试。

## 4. 社区热点
今日社区关注点集中在扩展生态与大型功能重构上，以下 Issues 和 PRs 引发了较多讨论（基于标签规模与变更范围）：

*   **[PR] feat(ironhub): install tools and skills from IronHub** [#3737](https://github.com/nearai/ironclaw/pull/3737)
    *   **分析**：这是一个 XL 级别的贡献，旨在让 Agent 能在运行时从 IronHub 安装工具和技能，打破仅在构建期安装的限制。涉及数据库迁移和网关端点，是生态开放的关键一步。
*   **[PR] feat: wecom channel** [#2394](https://github.com/nearai/ironclaw/pull/2394)
    *   **分析**：长期运行的 XL 级 PR，旨在增加独立的企业微信 WASM 通道。今日再次活跃，表明社区对办公场景集成的持续需求。
*   **[Issue] Routine notifications lack context in user's chat thread** [#1519](https://github.com/nearai/ironclaw/issues/1519)
    *   **分析**：该 Issue 反映了用户在接收 Telegram 通知时上下文割裂的问题（通知存在于独立会话中），这是多通道交互体验的核心痛点，今日再次被激活讨论。

## 5. Bug 与稳定性
今日报告并处理了若干关键问题，其中包含一个回归问题修复和一个潜在的严重逻辑缺陷：

*   **[已修复] v0.28.2 回归问题：Provider 配置缺失** [#3734](https://github.com/nearai/ironclaw/issues/3734)
    *   **详情**：用户报告在 Non-TEE v0.28.2 版本中，设置页面的 "Inference provider" 不再显示 API Key 和获取模型列表控件。该 Issue 随后被关闭，推测已在待发布版本中修复。
*   **[未修复] 严重：Thread::restore_from_messages 丢弃孤立助手消息** [#3821](https://github.com/nearai/ironclaw/issues/3821)
    *   **详情**：新开 Issue 指出 `src/agent/session.rs` 中的 `restore_from_messages` 函数在重建会话状态时，会丢弃没有对应用户输入的助手消息行。这可能导致上下文注入受阻或会话历史丢失，目前尚无关联 Fix PR。
*   **[待定] Nightly E2E 测试失败** [#3447](https://github.com/nearai/ironclaw/issues/3447)
    *   **详情**：自动化 E2E 测试持续失败，项目稳定性面临挑战。

## 6. 功能请求与路线图信号
通过 Issues 和活跃 PR 分析，项目路线图呈现出明显的 "Native Reborn" 迁移趋势：

*   **Reborn 多通道迁移**：Issue [#3580](https://github.com/nearai/ironclaw/issues/3580) 提出将 WebUI/Web Gateway 迁移至原生 Reborn Surface，且已有 PR [#3815](https://github.com/nearai/ironclaw/pull/3815) 和 [#3828](https://github.com/nearai/ironclaw/pull/3828) 正在实施 WebUI v2 的网关组合与入口委托。
*   **第三方服务集成**：
    *   Issue [#3829](https://github.com/nearai/ironclaw/issues/3829) 提出实现原生 Google Calendar 和 Gmail 扩展能力。
    *   Issue [#3805](https://github.com/nearai/ironclaw/issues/3805) 提出实现 Notion MCP 能力路径。
    *   **信号**：项目正从单一聊天机器人向具备丰富外部工具链的自动化 Agent 平台演进，重点打通 Google Workspace 和 Notion。
*   **认证与审批流**：Issue [#3094](https://github.com/nearai/ironclaw/issues/3094) 计划增加 `ApprovalInteractionService`，表明将支持更复杂的人机交互确认流程。

## 7. 用户反馈摘要
从 Issue 评论和描述中提炼的真实痛点：

*   **通知体验割裂**：用户反馈在使用 Routine（例行任务）发送通知（如 Telegram）时，消息被隔离在专门的会话中，用户在主聊天线程中看到的广播内容缺乏上下文，难以追溯来源（Issue #1519）。
*   **配置界面缺失**：用户在升级后发现配置项消失，导致无法设置 API Key（Issue #3734），反映出部分升级路径的兼容性问题。

## 8. 待处理积压
*   **[PR] feat: wecom channel** [#2394](https://github.com/nearai/ironclaw/pull/2394)
    *   **状态**：Open | 创建于 2026-04-13
    *   **提醒**：该 PR 规模庞大（XL），涉及企业微信支持，目前仍在活跃更新中。建议维护者重点关注，防止长期阻塞。
*   **[Issue] Routine notifications lack context** [#1519](https://github.com/nearai/ironclaw/issues/1519)
    *   **状态**：Open | 创建于 2026-03-21
    *   **提醒**：该体验问题存在已久，今日虽有更新但尚未有明确解决方案合入，建议排期优化。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-21)

## 1. 今日速览
LobsterAI 今日展现出较高的开发活跃度，核心团队专注于功能迭代与稳定性优化。过去 24 小时内共有 **7 个 PR 成功合并/关闭**，显著增强了模型配置灵活性（支持 ContextWindow）、推理过程可视化（Thinking Block 展示）及跨平台体验（Windows DPI 修复）。虽然无新版本发布，但合并的功能特性表明项目正积蓄力量向下一版本迈进。社区方面，新增 1 条关于本地运行环境配置的 Issue，提示新手入门体验仍有优化空间。整体来看，项目处于健康的功能扩展与细节打磨阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 7 个 PR 合并/关闭，主要集中在智能体核心能力与用户体验优化：

*   **核心功能增强**：
    *   [PR #2019](https://github.com/netease-youdao/LobsterAI/pull/2019) **合并**：实现了模型自定义参数透传与 Thinking Block 独立展示，增强了 AI 推理过程的可见性，支持更复杂的模型配置。
    *   [PR #2021](https://github.com/netease-youdao/LobsterAI/pull/2021) **合并**：为套餐模型增加了 `contextWindow` 配置支持，允许后端精确控制上下文截断长度，提升了长对话场景下的稳定性。
*   **稳定性与性能修复**：
    *   [PR #2023](https://github.com/netease-youdao/LobsterAI/pull/2023) **合并**：重点提升了浏览器与 WebFetch 工具的成功率与稳定性，这对 Agent 执行网络任务至关重要。
    *   [PR #2018](https://github.com/netease-youdao/LobsterAI/pull/2018) **合并**：修复了 Token 刷新导致 OpenClaw 网关重启的问题，提升了服务连续性。
    *   [PR #2015](https://github.com/netease-youdao/LobsterAI/pull/2015) **合并**：修复了 OpenClaw 压缩重试机制与工具结果间隙处理问题，提升了长任务执行的鲁棒性。
*   **用户体验优化**：
    *   [PR #2022](https://github.com/netease-youdao/LobsterAI/pull/2022) **合并**：优化了 HTML 预览与源码展示体验，引入懒加载解决了大文件卡顿问题。
    *   [PR #2020](https://github.com/netease-youdao/LobsterAI/pull/2020) **合并**：解决了 Windows 多显示器跨 DPI 场景下窗口过小的问题，改善了桌面端多屏用户体验。

## 4. 社区热点
今日社区讨论焦点集中在本地部署与配置问题上：

*   **[Issue #2017](https://github.com/netease-youdao/LobsterAI/issues/2017)**：用户反馈本地运行时无法登录、无法输入问题，提示“检测到内置 OpenClaw runtime（cfmind），请先执行打包前构建脚本”。该问题阻碍了本地开发者的快速启动，反映出项目构建流程或错误提示的引导性有待加强。
*   **[Issue #1568](https://github.com/netease-youdao/LobsterAI/issues/1568) [CLOSED]**：关于钉钉流式消息配置及 OpenClaw Connector 安装的问题已关闭。虽然已关闭，但表明用户对 IM 集成（特别是钉钉）有明确需求，且对第三方连接器的部署文档存在困惑。

## 5. Bug 与稳定性
今日新增 1 个功能性阻断 Bug，且有多个重要修复 PR 处于待合并状态：

*   **严重 (Critical - 新增)**：
    *   [Issue #2017](https://github.com/netease-youdao/LobsterAI/issues/2017)：本地运行环境检测失败，导致应用不可用。目前暂无对应 Fix PR，建议维护者优先关注。
*   **高优先级 (已修复/待合并)**：
    *   [PR #1576](https://github.com/netease-youdao/LobsterAI/pull/1576) [OPEN]：修复 SSE 流监听器竞态条件，防止新请求流数据丢失。此修复对对话稳定性影响极大，建议尽快合并。
    *   [PR #1550](https://github.com/netease-youdao/LobsterAI/pull/1550) [OPEN]：修复定时任务“不通知”模式下触发报错的问题。
*   **中等**：
    *   [PR #1560](https://github.com/netease-youdao/LobsterAI/pull/1560) [OPEN]：修复 Agent 编辑后无法切回聊天界面的 UI 交互问题。

## 6. 功能请求与路线图信号
从活跃的 PR 动态中可以洞察项目接下来的发展方向：

*   **多模态与交互体验**：[PR #1580](https://github.com/netease-youdao/LobsterAI/pull/1580) 提议在输入框增加图片缩略图预览，[PR #1553](https://github.com/netease-youdao/LobsterAI/pull/1553) 提议 Write 工具文件卡片预览。这表明项目正在强化多模态交互与文件处理的可视化体验。
*   **IM 集成深化**：[PR #1573](https://github.com/netease-youdao/LobsterAI/pull/1573) 提议为 IM 渠道（Telegram/钉钉/飞书等）增加斜杠命令支持，显示项目正致力于提升 Agent 在第三方 IM 平台上的可控性与易用性。
*   **可观测性**：[PR #1548](https://github.com/netease-youdua/LobsterAI/pull/1548) 与 [PR #1583](https://github.com/netease-youdao/LobsterAI/pull/1583) 分别关注流式耗时计时器与技能使用频次统计，预示着未来版本将提供更强的运行状态监控能力。

## 7. 用户反馈摘要
*   **痛点**：本地构建流程复杂，新手容易遗漏 `openclaw runtime` 的打包步骤，导致运行时报错且提示不够明确（#2017）。IM 集成配置（如钉钉 Connector）缺乏详细的安装指引（#1568）。
*   **场景**：用户尝试在多显示器 Windows 环境下使用（#2020 已修复），以及通过 IM 渠道进行任务调度和通知管理（#1550, #1573）。
*   **满意度**：社区对 UI 细节优化（如 HTML 源码懒加载、Windows DPI 修复）反应积极，表明项目对桌面端体验的打磨受到了认可。

## 8. 待处理积压
以下重要 PR 长期未合并（标记为 Stale），建议维护者关注审查：

1.  **[PR #1576](https://github.com/netease-youdao/LobsterAI/pull/1576)**：涉及 SSE 流数据丢失的严重潜在 Bug，技术含量高，建议优先 Review。
2.  **[PR #1553](https://github.com/netease-youdao/LobsterAI/pull/1553)**：Write 工具文件预览面板功能，影响用户对生成文件的直观查看体验。
3.  **[PR #1555](https://github.com/netease-youdao/LobsterAI/pull/1555)**：Mac x64 打包失败的修复，影响特定平台的发布流程。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-21)

## 1. 今日速览
Moltis 项目今日保持活跃的开发维护节奏，重点聚焦于系统稳定性与核心功能的修缮。过去 24 小时内，项目成功关闭了 3 个 Pull Requests，主要解决了 Vault 密码同步、进程资源泄漏及内存管理文件结构等关键技术债。社区方面，共有 2 个新功能提案（Provider 支持、文档访问）被提出，显示出用户对扩展性与 Agent 能力边界的关注。整体来看，项目正在积极修补潜在风险并响应社区对功能扩展的需求，健康度良好。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 3 个 PR 被关闭（推测已合并），显著提升了系统的安全性与稳定性：

*   **修复进程泄漏风险**：PR #1009 修复了 `QmdManager` 在超时时未能正确终止子进程的问题。此前超时仅丢弃 Future 而未杀死底层进程，导致严重的资源泄漏。此修复对长时间运行的 Agent 稳定性至关重要。
    *   链接：[moltis-org/moltis PR #1009](https://github.com/moltis-org/moltis/pull/1009)
*   **增强内存管理灵活性**：PR #1010 扩展了 `memory_save` 和 `memory_delete` 的功能，支持嵌套子文件夹及任意集合写入。这一改进使得 Agent 的记忆存储结构更加灵活，不再局限于根目录扁平化存储。
    *   链接：[moltis-org/moltis PR #1010](https://github.com/moltis-org/moltis/pull/1010)
*   **修复 Vault 密码同步**：PR #1026 解决了认证密码与 Vault 密码轮换时的原子性问题，防止因不一致导致的密封 Vault 错误，增强了安全模块的鲁棒性。
    *   链接：[moltis-org/moltis PR #1026](https://github.com/moltis-org/moltis/pull/1026)

## 4. 社区热点
今日讨论最活跃的话题围绕 Docker 环境下的部署问题与 Agent 能力扩展：

*   **Docker 环境下 Sandbox 失败问题（已解决）**：Issue #977 引发了较多讨论（3 条评论）。用户报告在 Proxmox LXC 容器运行 Docker 时，Browser sandbox 工具无法创建数据目录。该问题已于今日关闭，表明维护团队已定位并可能通过文档或代码修复解决了该环境兼容性问题。
    *   链接：[moltis-org/moltis Issue #977](https://github.com/moltis-org/moltis/issues/977)
*   **Agent 原生文档访问需求**：Issue #1028 提议 Agent 应“开箱即用”地访问 Moltis 官方文档，反映出用户希望 Agent 能更自主地解决使用中的问题，减少上下文切换。
    *   链接：[moltis-org/moltis Issue #1028](https://github.com/moltis-org/moltis/issues/1028)

## 5. Bug 与稳定性
今日处理的 Bug 修复具有较高优先级，主要集中在底层资源管理与安全机制：

*   **[高危] 子进程资源泄漏（已修复）**：PR #1009 修复的问题属于严重的资源管理缺陷。在 Agent 长时间运行或频繁调用 QMD 工具时，未释放的子进程会逐渐耗尽系统资源，今日修复后系统健壮性将大幅提升。
*   **[中等] Vault 密码不一致风险（已修复）**：PR #1026 修复了密码轮换时的竞态条件，避免了用户因密码不匹配被锁死在密封 Vault 之外。
*   **[环境] Docker Sandbox 兼容性（已关闭）**：Issue #977 涉及特定虚拟化环境（Proxmox/LXC）下的文件系统权限问题，该问题的关闭意味着团队已确认修复方案或提供了明确的部署指南。

## 6. 功能请求与路线图信号
社区今日提出的新需求指向了生态兼容性与智能化水平的提升：

*   **扩展 LLM Provider 支持**：Issue #1027 请求支持 "Google Antigravity SDK"。这表明用户群体希望接入更多样化的模型后端，可能与特定区域的可用性或成本优化有关。
    *   链接：[moltis-org/moltis Issue #1027](https://github.com/moltis-org/moltis/issues/1027)
*   **Agent 自我认知增强**：Issue #1028 提出的 Agent 访问文档功能，属于提升 Agent “智能化”与“易用性”的重要信号。若被采纳，Moltis Agent 将具备自我检索文档解决配置错误的能力。

## 7. 用户反馈摘要
从今日 Issues 与 PRs 的摘要中可以提炼出以下用户画像与痛点：

*   **部署环境多样化**：用户不仅运行 Docker，还涉及 Proxmox LXC 等嵌套虚拟化环境，对文件系统隔离和权限管理有较高要求。
*   **对“开箱即用”的期待**：用户（@IlyaBizyaev）希望 Agent 能原生理解项目文档，说明当前 Agent 在面对配置问题或高级功能时，缺乏足够的内置知识库支持。
*   **数据组织结构化需求**：PR #1010 的合并反映了社区对 Agent 记忆管理从“简单存储”转向“结构化归档”的需求，用户希望按集合或文件夹组织记忆。

## 8. 待处理积压
目前数据源中未显示长期未响应（>30天）的 Issue 或 PR。今日关闭的 Issue #977 历时约 15 天（05-06 至 05-20），响应速度处于健康水平。建议维护者关注新提出的 Issue #1027 与 #1028，它们代表了明确的社区功能走向。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 - 2026-05-21

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持高活跃度开发状态，共处理 **30 条 Issues**（关闭 17 条）和 **32 条 PRs**（合并/关闭 15 条），并发布了补丁版本 **v1.1.8.post1**。项目重心目前明显向**生态扩展**（支持新模型提供者、Skill Market）和**底层架构优化**（集成测试重构、桌面端 Tauri 支持）倾斜。然而，v1.1.8 版本引入的 UI 回归问题（如配置项消失）及部分渠道（微信、钉钉、飞书）的稳定性问题成为用户反馈焦点。整体来看，项目迭代速度快，但需警惕新版本带来的功能回归风险。

## 2. 版本发布
**新版本：v1.1.8.post1**
*   **更新重点**：
    *   **文档增强**：增加了安装备份目录的文档说明 (`#4534`)。
    *   **新 Provider 支持**：新增 **OpenCode Go** 模型支持，通过 `meta.base_url_options` 实现与 OpenCode (Zen) 的端点切换 (`#4536`)。
*   **影响范围**：主要面向需要使用 OpenCode 新模型的开发者，无破坏性变更。

## 3. 项目进展
今日共有 15 个 PR 被合并或关闭，项目在功能增强和测试基建方面取得显著进展：
*   **模型生态**：合并了 OpenCode Go 提供者支持 (`#4536`)，丰富了模型路由选择。
*   **渠道体验优化**：
    *   合并了飞书渠道的流式打字机卡片功能 (`#2862`)，提升飞书用户交互体验。
    *   合并了 QwenPaw Pet 插件的 Windows 兼容性修复 (`#4564`)，解决了进程崩溃和中文支持问题。
*   **前端与桌面端**：
    *   合并了插件安装/卸载后自动刷新页面的修复 (`#4588`)。
    *   关键 PR `#3813` (Tauri 2.x 桌面端支持) 正在活跃审查中，预示桌面端架构将有重大升级。
*   **代码质量**：`#4561` 大幅重构并扩展了集成测试套件（由 10 个用例增至 105 个），显著提升了项目核心逻辑的保障能力。
*   **下一版本准备**：已启动 `v1.1.9b1` 的版本号升级工作 (`#4589`)。

## 4. 社区热点
今日社区讨论主要集中在**多渠道集成的稳定性**和**性能问题**上：
*   **[Issue #4477] 微信 iLink 推送失败** (评论 14 条)：用户反馈微信定时任务推送在 Token 过期时缺乏重试机制。该问题已引起开发团队重视，目前有 PR `#4576` 正在修复消息去重和重试逻辑。
*   **[Issue #4496] AGENTS.md 加载错误** (评论 13 条)：升级后系统提示词加载错误（加载了模板而非实际文件）引发热议，涉及工作区配置优先级问题，现已关闭（可能已修复或确认无效）。
*   **[Issue #4559] Agent 数量过多导致页面卡顿** (评论 8 条)：用户报告超过 40 个 Agent 时 WebUI 明显卡顿，反映前端渲染或状态管理存在性能瓶颈。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，部分已有修复方案：

*   **严重**:
    *   **[Issue #4590] WebUI 运行配置项消失**：升级 v1.1.8 后，`max_input_length` 设置项在界面消失，严重影响用户对上下文窗口的控制。
    *   **[Issue #4559] 前端性能瓶颈**：大量 Agent 导致页面访问变慢，疑似前端渲染未优化。
    *   **[Issue #4541] Pet 插件导致主程序崩溃**：Windows 下启用 Pet 插件发送首条消息时会引发闪退，已有修复 PR (`#4564`) 合并。

*   **中等**:
    *   **[Issue #4585] 企业微信插件工具无法发现**：自研插件在桌面端可用，但在企业微信渠道中无法被 Agent 感知。
    *   **[Issue #4556] 语音转写配置无效**：配置了 Whisper API 后，浏览器仍强制使用原生 Web Speech API。
    *   **[Issue #4586] 钉钉文件名乱码**：发送文件时中文文件名被错误重编码。
    *   **[Issue #4535] 本地访问备份接口 403**：本地访问 `/backups` 被拦截，已有 PR `#4562` 尝试修复代理 IP 判定逻辑。

## 6. 功能请求与路线图信号
*   **[PR #4578] Coding Mode (编码模式)**：提议在浏览器中嵌入类 VS Code IDE，增强 Agent 编程能力。这是一个高价值的功能扩展，目前处于 Open 状态。
*   **[PR #4518] Skill Market (技能市场)**：正在重构 Skill Hub，计划引入统一的技能市场，支持多源搜索和安装。这将是下一步生态建设的重点。
*   **[Issue #4584] Playwright 浏览器自动化**：用户请求支持 Playwright 以替代当前不稳定的 CDP 连接，提升定时任务稳定性。
*   **[Issue #4539] 免费多模态路由**：请求实现根据输入类型（图/文/音）自动切换模型的免费路由功能，降低使用门槛。

## 7. 用户反馈摘要
*   **痛点**：
    *   **稳定性**：v1.1.8 版本引入了 UI 回归（配置消失）和权限问题（备份 403），影响了升级体验。
    *   **渠道集成**：微信、飞书、钉钉等 IM 渠道的文件传输、Token 刷新和插件同步问题频发，用户对多端一致性的期待较高。
    *   **资源占用**：桌面端进程残留 (`#4587`) 和前端 CPU 占用过高 (`#4558`) 反映了客户端架构优化的紧迫性。
*   **满意点**：
    *   对 **Pet 插件** 的快速修复反应表示认可。
    *   对 **集成测试覆盖率** 的大幅提升（PR #4561）表示赞许，认为有助于项目长期稳定。

## 8. 待处理积压
*   **[Issue #4559] 性能问题**：针对大量 Agent 导致的页面卡顿，尚无明确的修复 PR 分配，建议前端团队关注渲染优化。
*   **[Issue #4590] UI 配置丢失**：作为新版本引入的回归问题，需优先修复。
*   **[PR #3813] Tauri 桌面端重构**：作为大型重构 PR，已 open 一段时间，需维护者加快 Review 进度以解决现有桌面端的进程管理和稳定性问题。
*   **[Issue #4584] 浏览器自动化增强**：用户对 Playwright 的需求强烈，建议纳入 Roadmap 考虑。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-05-21)

## 1. 今日速览
ZeptoClaw 项目今日整体活跃度较低，处于平稳维护状态。过去24小时内无新增 Issue、无版本发布，也未合并任何代码。社区方面，贡献者 @Sisuthros 提交了一项关键修复 PR，旨在解决 Provider 推断逻辑中可能导致生产环境报错的隐患。整体来看，项目今日虽无功能性迭代，但在稳定性修补上有实质性进展。

## 2. 版本发布
无。

## 3. 项目进展
今日无已合并或已关闭的 Pull Requests。项目代码库未见功能新增或存量任务清理，主要动态集中在待处理的修复补丁上。

## 4. 社区热点
今日唯一的动态来自 Pull Request #592 **[fix(providers): keyword fallback must not claim unconfigured provider](https://github.com/qhkm/zeptoclaw/pull/592)**。

*   **分析**：该 PR 虽为新开，但揭示了系统在处理特定模型 ID（如 `openai/gpt-oss-120b`）时的路由缺陷。作者指出，关键词回退机制若忽略 `available_providers` 配置，会导致系统错误地调用未配置的 Provider。这反映了社区/贡献者对生产环境鲁棒性的高度关注，尤其是在多 Provider 共存的复杂场景下。

## 5. Bug 与稳定性
今日报告了一个影响生产环境稳定性的 Bug，已有对应的修复 PR，按严重程度排列如下：

*   **[高危] Provider 推断逻辑导致生产环境 100% 错误率**
    *   **描述**：函数 `infer_provider_name_for_model` 的关键词回退逻辑未检查 `available_providers`，导致系统强制使用未配置的 Provider。
    *   **影响**：在 NIM-served Photon 实例上，模型 ID `openai/gpt-oss-120b` 解析错误，导致服务不可用。
    *   **修复状态**：**已有修复 PR**。详见 [PR #592](https://github.com/qhkm/zeptoclaw/pull/592)。
    *   **建议**：维护者应优先审核并合并此 PR，以防止用户在类似配置场景下遭遇服务中断。

## 6. 功能请求与路线图信号
今日无新增功能请求。从现有 PR 活动来看，项目当前的路线图信号指向**架构健壮性优化**，特别是对 Provider 路由逻辑的严格校验，这表明项目正处于消除边缘案例错误的阶段，而非功能扩张期。

## 7. 用户反馈摘要
今日无直接的 Issue 用户评论。但从 PR #592 的提交信息中可提炼出关键痛点：
*   **配置边界不清**：用户可能期望系统在未明确配置 Provider 时报错或跳过，而非由系统“自作主张”地回退到一个无效 Provider。
*   **特定模型兼容性**：使用 NIM 或自定义模型服务的用户，对于模型 ID 的解析规则较为敏感，现有的关键词匹配机制可能过于宽泛。

## 8. 待处理积压
当前暂无长期未响应的 Issues 数据。今日唯一的待处理项为：

*   **[待审核] PR #592**: 修复 Provider 推断回退逻辑。建议维护者尽快响应，以修复潜在的生产环境阻断性问题。
    *   链接：[qhkm/zeptoclaw PR #592](https://github.com/qhkm/zeptoclaw/pull/592)

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*