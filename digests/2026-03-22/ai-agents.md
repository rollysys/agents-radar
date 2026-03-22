# OpenClaw 生态日报 2026-03-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-22 02:33 UTC

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

# OpenClaw 项目动态日报 (2026-03-22)

**分析师摘要**：OpenClaw 项目今日展现出极高的社区活跃度与开发迭代速度，但同时也暴露了近期版本引入的严重稳定性问题。过去24小时内，项目处理了超过1000条 Issues 和 PRs 更新，其中 **WhatsApp 频道连接性** 和 **本地网关认证** 成为 Bug 重灾区。建议用户在升级至最新版本前仔细检查配置兼容性。

---

### 1. 今日速览
- **活跃度飙升**：今日共有 500 条 Issue 更新和 500 条 PR 更新，显示项目处于高频迭代期。
- **PR 积压严重**：待合并 PR 高达 352 条（占比 70%），而合并/关闭仅 148 条，审查压力巨大。
- **质量警报**：新开 Issue (413) 远多于关闭 Issue (87)，且出现多处严重的 "Regression"（回归）标签，表明最新版本（v2026.3.x）可能存在引入新 Bug 的风险。
- **无新版本发布**：尽管更新频繁，但今日无正式 Release，可能表明团队正在为下一个大版本积累功能或正在进行稳定性修复。

### 2. 版本发布
**无**。今日无新版本发布。鉴于 Issues 中频繁提及 `v2026.3.13` 和 `v2026.3.11`，预计当前稳定版仍面临挑战，下一个版本可能侧重于修复回归问题。

### 3. 项目进展
今日合并/关闭的 PR 主要集中在**提升系统稳定性**和**修复 UI/交互细节**：

- **[#52004](https://github.com/openclaw/openclaw/pull/52004) [gateway] 修复回环连接的 Websocket 握手超时**：解决了本地网关 (127.0.0.1) 在高负载下连接中断的问题，直接回应了 Issue [#51987](https://github.com/openclaw/openclaw/issues/51987)。
- **[#50366](https://github.com/openclaw/openclaw/pull/50366) [plugins] 增加 `before_message_process` 钩子**：为插件系统增加了关键的拦截能力，允许在 AI 处理前进行消息路由或过滤，这对构建复杂的客服机器人等场景至关重要。
- **[#51808](https://github.com/openclaw/openclaw/pull/51808) [msteams] 迁移至官方 Teams SDK**：大幅重构了 MS Teams 支持，提升了企业级集成的稳定性。
- **[#51962](https://github.com/openclaw/openclaw/pull/51962) [security] 增强审计与命令安全**：强化了对危险 Node 命令的拦截，提升了沙箱安全性。

### 4. 社区热点
今日社区讨论集中在国际化支持、平台集成障碍及严重的运行时错误：

1.  **[#3460](https://github.com/openclaw/openclaw/issues/3460) [enhancement] 国际化 (i18n) 支持 (👍 4, 评论 112)**
    *   **诉求**：社区强烈要求支持多语言。官方回应目前带宽有限，但该话题热度极高，反映了全球化部署的需求。
2.  **[#26534](https://github.com/openclaw/openclaw/issues/26534) 添加钉钉作为首次安装渠道选项 (👍 26, 评论 75)**
    *   **诉求**：用户希望在初始设置向导中直接配置钉钉，目前虽然支持但配置繁琐。表明 OpenClaw 在中国市场的企业应用集成需求很大。
3.  **[#44851](https://github.com/openclaw/openclaw/issues/44851) Kimi web_search 集成 401 错误 (评论 23)**
    *   **痛点**：Kimi 模型的 Chat API 正常，但工具调用失败。用户在使用非 OpenAI 模型的 Tool calling 功能时仍面临兼容性挑战。
4.  **[#51429](https://github.com/openclaw/openclaw/issues/51429) 硬编码路径的严重低级错误 (评论 10)**
    *   **热点**：用户发现代码中疑似硬编码了开发者的个人路径 (`/Users/wangtao`)，引发了对代码审查流程质量的担忧和嘲讽。

### 5. Bug 与稳定性
今日报告了多个影响使用的严重 Bug，按严重程度排序：

- **🔥 P0 - 系统崩溃/配置破坏**
    - **[#51429](https://github.com/openclaw/openclaw/issues/51429) 硬编码路径导致工作区错误**：最新版安装后创建无关用户目录，可能导致权限错误或数据写入异常。尚无 Fix PR。
    - **[#34741](https://github.com/openclaw/openclaw/issues/34741) [Bug]: WhatsApp 会话中断**：状态显示已连接但实际无监听器，导致消息发送失败。这是一个影响核心通信功能的回归问题。
    - **[#48008](https://github.com/openclaw/openclaw/issues/48008) [Bug]: Gateway Token 不匹配与端口冲突**：升级到 v2026.3.13 后网关无法启动，涉及破坏性变更。

- **⚠️ P1 - 功能失效**
    - **[#49088](https://github.com/openclaw/openclaw/issues/49088) [Bug]: web_fetch 在 Linux 上静默失败**：由于 NVM 安装的 Node.js 缺失特定根证书，导致工具无法抓取 HTTPS 内容。
    - **[#41905](https://github.com/openclaw/openclaw/issues/41905) Token 计数器卡在 0**：使用 Bailian 等兼容提供商时，流式响应的用量无法被统计。PR [#51673](https://github.com/openclaw/openclaw/pull/51673) 正在尝试修复。

- **🛠️ P2 - 体验问题**
    - **[#51873](https://github.com/openclaw/openclaw/issues/51873) Telegram 上下文缓存失效**：导致重复发送相同上下文，增加 Token 消耗。

### 6. 功能请求与路线图信号
- **语音交互**：[#49246](https://github.com/openclaw/openclaw/issues/49246) 请求集成 STT/TTS 以支持语音对话，配合智能家居场景。这符合 AI 助手多模态发展的趋势。
- **MiniMax 模型支持**：[#50234](https://github.com/openclaw/openclaw/issues/50234) 要求支持 M2.7 模型。结合 Kimi 和 Moonshot 的 Issues，项目对国产模型的支持正在快速迭代中。
- **代理身份验证**：[#49971](https://github.com/openclaw/openclaw/issues/49971) 提出了基于 W3C DID/VC 的代理身份信任验证 RFC。这是一个前瞻性的架构提案，可能影响未来版本的安全性设计。

### 7. 用户反馈摘要
- **配置门槛高**：用户反馈在 Telegram 论坛、钉钉等渠道的配置过程中遇到诸多隐式规则（如 Slash 命令被忽略、Token 冲突），导致初次体验受阻。
- **多模态能力不稳定**：视觉识别相关的 Issue ([#23452](https://github.com/openclaw/openclaw/issues/23452)) 显示用户在发送图片时经常遇到模型"看不见"的情况，严重依赖特定版本的配置。
- **对企业级部署的渴望**：围绕钉钉、MS Teams、国产大模型（Kimi/MiniMax）的讨论热度极高，显示 OpenClaw 正在被严肃地用于生产环境或企业内部工具。

### 8. 待处理积压
- **[#50090](https://github.com/openclaw/openclaw/issues/50090) 社区 Skill 生态发展**：关于 ClawHub 和技能分发的讨论尚未有明确结论，需要官方投入资源构建生态。
- **[#23909](https://github.com/openclaw/openclaw/issues/23909) Raspberry Pi (arm64) 更新失败**：涉及底层 Opus 库编译问题，长期未解决，阻碍了在边缘设备上的部署。
- **提醒**：大量 `v2026.3.13` 相关的回归问题（如 [#48479](https://github.com/openclaw/openclaw/issues/48479) Google Vertex 认证失败）堆积，建议维护者优先发布补丁版本解决认证和连接稳定性问题。

---

## 横向生态对比

# 2026-03-22 AI 智能体与个人助手开源生态横向对比分析报告

## 1. 生态全景

2026年3月的个人AI助手开源生态呈现出**“功能军备竞赛”与“稳定性阵痛”并存**的态势。各项目在**多模态交互**（语音/视觉）、**多渠道接入**（IM集成）及**多智能体协作**方面展开了激烈的开发竞赛，但在快速迭代中普遍暴露了回归测试不足、升级兼容性差等隐患。企业级部署需求（钉钉/飞书集成、国产模型支持）成为驱动项目发展的核心商业动力，标志着开源智能体正从“极客玩具”向“生产力工具”转型。

## 2. 各项目活跃度对比

| 项目名称 | Issue 更新 | PR 更新 | 版本发布 (24h) | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 无 | 🚨 **高风险**：Bug井喷 (1000+ updates)，PR 积压严重 (352)，v2026.3.x 存在多处 P0 级回归。 |
| **Zeroclaw** | 36 | 50 | 10个 | 🚀 **爆发期**：高频发布 (v0.5.5->v0.5.6)，功能大爆发 (A2A/记忆系统)，合并率极高。 |
| **PicoClaw** | 29 | 36 | 1个 | 🛠️ **迭代期**：推进浏览器自动化与 Subagent 架构，PR 处理高效，稳步迈向 v0.2.3。 |
| **NanoClaw** | 28 | 38 | 无 | ⚡ **活跃期**：高代码变动，聚焦容器化部署与全渠道通信，Skill 分支合并冲突需关注。 |
| **IronClaw** | - (活跃) | 50 | 无 | 🏗️ **重构期**：42个 PR 待合并，多智能体路由与 UX 重构中，存在安全软件误报问题。 |
| **CoPaw** | 46 | 13 | 无 | 🐛 **修复期**：社区热度高但面临升级阵痛 (数据丢失/兼容性)，多智能体编排 PR 待合并。 |
| **LobsterAI** | 16 | 30 | 1个 | 🩹 **巩固期**：发布 v2026.3.21，集中修复内存泄漏与主进程阻塞，代码质量提升中。 |
| **NullClaw** | - (活跃) | 31+ | 1个 | 🛡️ **稳定期**：发布 v2026.3.21，统一 IM 启动流程，优化 MCP 与 Ollama 兼容性。 |
| **NanoBot** | 19 | 51 | 无 | 🔨 **优化期**：重构多模态架构，待合并 PR 多，社区对 WebUI 需求强烈。 |
| **Moltis** | 0 | 2 | 无 | 🔇 **沉寂期**：无社区互动，仅有关键的 Windows 文件锁修复 PR 待审核。 |
| **TinyClaw** | 0 | 2 | 无 | 🔇 **低活跃**：无社区互动，核心开发者专注于底层消息队列修复。 |
| **EasyClaw** | 0 | 0 | 3个 | 🏃 **快修期**：连发三版修复 API 错误，维护响应极快，Issue 列表清零。 |

## 3. OpenClaw 在生态中的定位

*   **核心参照地位**：OpenClaw 依然是生态中**流量最大、功能覆盖最广**的综合性平台，其 Issue 和 PR 的绝对数量远超同类。
*   **优势**：具备最完善的**企业级集成能力**（MS Teams, 钉钉, WhatsApp），是全球化部署的首选；插件系统（`before_message_process` 钩子）展现了强大的中间件扩展性。
*   **技术路线差异**：相较于 NanoBot/PicoClaw 专注于架构解耦和边缘计算，OpenClaw 更倾向于**All-in-One**的厚重架构，这导致其在快速迭代时更容易出现“硬编码路径” (#51429) 和“网关认证冲突” (#48008) 等系统性 Bug。
*   **社区现状**：虽然社区规模最大，但当前**信噪比低**，大量用户被困在 v2026.3.x 的升级泥潭中，急需一次稳定性修补版本（LTS）来挽回口碑。

## 4. 共同关注的技术方向

1.  **多模态能力的解耦与增强**
    *   **涉及项目**：NanoBot, Zeroclaw, PicoClaw, TinyClaw
    *   **具体诉求**：社区强烈要求将视觉 (VL) 和语音 (STT/TTS) 模型与主文本模型分离。例如 NanoBot (#2339) 和 Zeroclaw (#4119) 均提出了“专用视觉提供商”架构，允许 GPT-4 文本搭配本地/Ollama 视觉模型，以优化成本和性能。

2.  **即时通讯 (IM) 渠道的深度集成**
    *   **涉及项目**：OpenClaw, NanoBot, CoPaw, LobsterAI
    *   **具体诉求**：**企业办公场景**成为必争之地。对钉钉、飞书、Slack、Telegram 的支持不再是简单的收发消息，而是深入到 *Emoji Reaction* (NanoClaw #1288)、*消息防抖* (NullClaw #618) 和 *富媒体文件处理* (PicoClaw #2324)。

3.  **记忆系统的架构升级**
    *   **涉及项目**：Zeroclaw, OpenClaw, IronClaw
    *   **具体诉求**：简单的向量库检索已无法满足需求。Zeroclaw 引入了 *Cortex Memory (L0/L1/L2 分层)* 和 *时间衰减机制*，而社区在讨论基于 BM25/MMR 的 9 阶段评分管道，显示出对**高精度长期记忆**的迫切需求。

## 5. 差异化定位分析

*   **架构哲学：**
    *   **OpenClaw** (厚重单体)：强调开箱即用的全功能，适合企业快速部署。
    *   **NanoBot / TinyClaw** (模块化/轻量)：强调核心逻辑的解耦，如 NanoBot 重构 `process_direct` 接口，适合二次开发。
    *   **PicoClaw / NullClaw** (边缘/跨平台)：关注 Docker、ARM64 (树莓派) 和 Nix 构建，侧重隐私和本地化运行。

*   **功能侧重：**
    *   **Zeroclaw**：激进探索 Agent 互操作性 (A2A 协议) 和自动化工具链。
    *   **LobsterAI**：深耕国内办公生态（泡泡/飞书），解决 Electron 应用的性能痛点。
    *   **CoPaw**：侧重多智能体编排，试图解决多 Bot 协作的逻辑复杂性。

## 6. 社区热度与成熟度

*   **快速迭代/激进区**：**Zeroclaw** 和 **IronClaw**。两者 PR 堆积量大，功能更新激进（如 A2A、多智能体），适合追求前沿特性的技术极客，但需承担不稳定风险。
*   **成熟稳定/保守区**：**LobsterAI** 和 **NullClaw**。今日发布版本侧重于修复内存泄漏、IPC 阻塞和 API 兼容性，表明项目进入了“质量巩固期”，适合生产环境寻求稳定的团队。
*   **危机/震荡区**：**OpenClaw** 和 **CoPaw**。虽然热度极高，但面临着严重的回归问题和升级抱怨，社区信任度正处于考验期，急需修复版本。
*   **低活跃/长尾区**：**Moltis**, **TinyClaw**, **EasyClaw**。主要由核心维护者驱动，社区讨论较少，适合特定需求的小众用户。

## 7. 值得关注的趋势信号

1.  **“工具调用” 成为兼容性重灾区**
    *   各项目普遍报告了 Tool Calling 的问题，如 OpenClaw 的 Kimi 401 错误、CoPaw 的 Gemini 签名错误。这表明 **LLM 提供商在 Function Calling 协议上的碎片化**正在给上游开源项目带来巨大的适配成本。建议开发者建立更健壮的协议适配层。

2.  **安全与易用性的博弈加剧**
    *   Zeroclaw (#1478) 和 IronClaw (#1518) 的用户均抱怨安全策略过于繁琐，导致 Agent 变得“无能”。未来的趋势将是引入 **基于 LLM 的风险评估** 或 **白名单机制**，在安全与自主性之间寻找平衡。

3.  **本地化/隐私部署是刚需**
    *   从 WebUI 的强烈需求到本地 TTS/GPU 加速的请求，再到 Zeroclaw 对 Nix 构建的修复，证明**完全离线、数据不出域**依然是个人 AI 助手的核心卖点。

4.  **配置体验的崩溃点**
    *   用户对复杂的 YAML/JSON 配置和 CLI 参数感到疲惫。多个项目 的社区都在呼吁 WebUI 或可视化配置面板。**降低“首次配置门槛”**将是下一阶段争夺普通用户的关键。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-22)

## 1. 今日速览
NanoBot 项目今日维持高热度开发状态，社区贡献活跃。过去24小时内，**Issue 互动量达 19 条**，其中新报告问题 13 个，问题解决率约 31%（关闭 6 个）；**Pull Request 活跃度显著**，更新数达 51 条，显示核心团队正在积极审查并合并社区代码。虽然今日无新版本 Release 发布，但大量针对 **多模态支持、并发性能优化及新接入渠道（如 NapCatQQ、Teams）** 的 PR 正在等待合并（待处理 PR 高达 33 个），预示着下一次版本更新将包含重大功能增强与性能修复。

## 2. 版本发布
*   **无新版本发布**。
    *   *分析*：当前主分支可能正处于功能冻结或大量特性集成阶段（基于 `v0.1.4.post5` 后的活跃度），预计大量积压的 PR 合并后将发布新的 minor 版本。

## 3. 项目进展
今日共有 **18 个 PR 被合并或关闭**，重点推进了以下领域：

*   **架构重构与代码质量**：
    *   [PR #2338](https://github.com/HKUDS/nanobot/pull/2338)：重构了 `process_direct` 接口以统一返回 `OutboundMessage`，消除了 CLI 和其他调用方的不一致逻辑。
    *   [PR #2333](https://github.com/HKUDS/nanobot/pull/2333) & [PR #2215](https://github.com/HKUDS/nanobot/pull/2215)：引入了内容感知的合成确认机制（ACK）及模糊去重，有效解决了 Agent 在工具调用过程中重复输出相同进度文本的问题，显著提升了对话体验。
    *   [PR #2277](https://github.com/HKUDS/nanobot/pull/2277)：修复了 Prompt Token 估算中遗漏图像 Token 计数的问题，这对于包含多模态输入的成本控制至关重要。

*   **功能增强**：
    *   [PR #1985](https://github.com/HKUDS/nanobot/pull/1985)：新增 `/status` 斜杠命令，允许用户在聊天窗口直接查看运行时状态，极大便利了运维监控。

## 4. 社区热点
*   **最活跃 Issue**: [I've created [nanobot-webui], A self-hosted web management panel for nanobot](https://github.com/HKUDS/nanobot/issues/1922) (👍 6, 评论 7)
    *   *分析*：社区对于官方尚未提供的 Web UI 管理界面需求强烈，第三方实现 `nanobot-webui` 获得了高度关注，表明**可视化管理**是目前用户体验的主要痛点之一。
*   **值得关注的贡献**: [[nanobot ui] added a dashboard for nanobot](https://github.com/HKUDS/nanobot/issues/2213)
    *   *分析*：另一位开发者贡献了基于 Python+Vue 的 Dashboard 方案，进一步验证了社区对 Gateway/Server 端可视化管理的迫切需求。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，主要集中在**多模态处理**和**本地模型兼容性**上：

*   **严重**:
    *   [Issue #2293](https://github.com/HKUDS/nanobot/issues/2293)：使用 Ollama 本地部署 `qwen2.5:14b` 时，一旦 Agent 执行工具调用，对话会静默失败。这影响了本地隐私部署的稳定性。
    *   [Issue #1410](https://github.com/HKUDS/nanobot/issues/1410) (Closed): 语音转录强制重定向到 Groq 而忽略用户安装的本地 Whisper 技能。(注：Issue 已关闭，可能已有解决方案)。
*   **回归问题**:
    *   [Issue #2141](https://github.com/HKUDS/nanobot/issues/2141) (Closed): 升级到 `v0.1.4.post5` 后 Telegram 语音转录失效。
*   **隐私与配置**:
    *   [Issue #2341](https://github.com/HKUDS/nanobot/issues/2341)：`WebFetchTool` 强制代理所有 URL 至 `jina.ai`，即便未配置 API Key，引发潜在隐私担忧。
*   **已修复**:
    *   [Issue #2250](https://github.com/HKUDS/nanobot/issues/2250)：`onboard` 命令参数解析错误（已关闭）。

## 6. 功能请求与路线图信号
从 Issues 和 PRs 来看，项目正向**更深度的多模态集成**和**即时通讯软件支持**发展：

*   **多模态分离**：[Issue #2339](https://github.com/HKUDS/nanobot/issues/2339) 与 [PR #2340](https://github.com/HKUDS/nanobot/pull/2340) 提出并实现了“专用视觉提供商”功能。允许用户在配置中分离文本模型（如 GPT-4）和视觉模型（如 Claude Vision 或本地 VL），这是针对复杂 Agent 场景的高级需求，**极大概率纳入下个版本**。
*   **即时通讯全功能支持**：
    *   **QQ**: [PR #2337](https://github.com/HKUDS/nanobot/pull/2337) 新增 NapCatQQ 适配器；[PR #2316](https://github.com/HKUDS/nanobot/pull/2316) 修复 QQ 语音文件格式。
    *   **企业微信/钉钉**: [PR #2324](https://github.com/HKUDS/nanobot/pull/2324) 增加了对 QQ 和企业微信的完整媒体支持。
*   **性能优化**：[Issue #981](https://github.com/HKUDS/nanobot/issues/981) 提出系统提示词中的动态时间戳破坏了 Prompt 缓存，建议优化以降低 API 成本。

## 7. 用户反馈摘要
*   **积极反馈**：用户对 NanoBot 作为“第一个个人 AI”表示非常兴奋，认可其开发潜力 (Source: #623)。
*   **痛点**：
    1.  **工具发现机制**：用户反馈更新 MCP Server 后，NanoBot 无法自动发现新工具 (#2325)。
    2.  **配置复杂性**：多实例配置 (`-c` 参数) 和自定义模型提供商的调试依然较为困难 (#2250, #2329)。
    3.  **干扰性信息**：心跳检测在聊天界面产生冗余信息，用户希望有静默选项 (#2126)。

## 8. 待处理积压
*   **需重点关注的 PR**：
    *   [PR #2340](https://github.com/HKUDS/nanobot/pull/2340) (Custom VL Provider)：核心功能增强，建议优先 Review。
    *   [PR #2317](https://github.com/HKUDS/nanobot/pull/2317) (Context Budget)：针对 Token 消耗的关键优化，标记为 `to-nightly`。
    *   [PR #2335](https://github.com/HKUDS/nanobot/pull/2335) (Concurrency Locks)：将全局锁改为会话级锁，提升高并发下的吞吐量。
*   **长期悬而未决的 Issue**：
    *   [Issue #981](https://github.com/HKUDS/nanobot/issues/981)：Prompt 缓存优化建议，涉及核心架构调整，尚未有官方定论。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-22)

你好！我是 Zeroclaw 项目分析师。以下是基于过去 24 小时 GitHub 数据生成的第 2026-03-22 期日报。

---

## 1. 今日速览

Zeroclaw 项目今日保持着**极高的开发活跃度**，呈现出“功能大爆发”与“精细化打磨”并行的态势。
过去 24 小时内项目产出了 **10 个版本**（从 v0.5.5 到 v0.5.6-beta.536），显示发布节奏非常紧凑。
社区互动方面，共有 **36 条 Issues 更新** 和 **50 条 PR 更新**，其中 **32 条 PR 已被合并**，合并率极高。
今日重点在于**工具链的增强**（如表情回复、Fal.ai 绘图、代理间通信）以及 **Web Dashboard 的用户体验修复**，同时社区对“安全策略与易用性平衡”的讨论达到了新高。

---

## 2. 版本发布

今日发布了从 `v0.5.5` 稳定版到 `v0.5.6-beta.536` 的多个迭代版本。

### 🔥 核心更新 (v0.5.6 vs v0.5.5)

#### 新增功能
*   **工具链增强**:
    *   集成 **fal.ai** 实现独立的图片生成工具 ([Release Note](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.6-beta.536))。
    *   新增 **Emoji Reaction Tool**，支持跨频道表情反应 ([Release Note](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.6-beta.536))。
    *   新增 **Session tools**，支持代理间消息列表、历史记录和发送 ([Release Note](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.6-beta.536))。
*   **提供商与集成**:
    *   新增 **DeepMyst** 作为 OpenAI 兼容提供商 ([v0.5.5](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.5))。
    *   集成 **wttr.in** 天气数据工具 ([v0.5.5](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.5))。
    *   新增 **Slack Assistants API** 状态指示器及 Markdown 格式支持 ([v0.5.5](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.5))。

#### 修复与改进
*   **安装体验**: 修复了 macOS 上安装脚本需手动接受 Xcode 许可证的问题，现在支持自动处理 ([v0.5.6](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.6))。
*   **网络代理**: 增加了针对特定频道的 `proxy_url` 支持 (HTTP/SOCKS5)。
*   **稳定性**: 修复了 `execute_successful_subprocess` 中的间歇性管道破损错误。

---

## 3. 项目进展

今日共有 **32 个 PR 被合并**，项目在多模态、记忆系统和前端界面上均有显著推进。

*   **🤝 互操作性**:
    *   **[#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) A2A 协议支持**: 提议支持 Agent-to-Agent 协议，允许 Zeroclaw 与外部智能体通信，目前已打开，是迈向多智能体协作的关键一步。
*   **🧠 记忆系统**:
    *   **[#2387](https://github.com/zeroclaw-labs/zeroclaw/pull/2387) 时间衰减评分**: 合并了记忆的时间衰减机制，Core 内容保持常青，旧记忆权重降低。
    *   **[#2948](https://github.com/zeroclaw-labs/zeroclaw/pull/2948) Cortex Memory 后端**: 合并了 Cortex-Memory 集成，引入 L0/L1/L2 分层记忆架构。
    *   **[#4113](https://github.com/zeroclaw-labs/zeroclaw/pull/4113) Mem0 修复**: 修复了 mem0 重启丢数据的问题，现在配置了 `on_disk: True`。
*   **🎨 Web Dashboard 修复 (用户体验显著提升)**:
    *   **[#4201](https://github.com/zeroclaw-labs/zeroclaw/pull/4201) Config 页面**: 修复了视口溢出问题，并增加了 TOML 语法高亮。
    *   **[#4186](https://github.com/zeroclaw-labs/zeroclaw/pull/4186) Cron 页面**: 修复了表格过长导致整页滚动的问题，现在已限制在视口内。
    *   **[#4180](https://github.com/zeroclaw-labs/zeroclaw/pull/4180) Tools 页面**: 增加了章节可折叠功能。
*   **🛠️ 工具与频道**:
    *   **[#3805](https://github.com/zeroclaw-labs/zeroclaw/pull/3805) WhatsApp 增强**: 合并了提及触发、图片处理和按聊天隔离会话的功能。

---

## 4. 社区热点

今日社区讨论最热烈的话题集中在**安全策略的易用性**与**本地化部署体验**。

1.  **[#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) [CLOSED] 安全策略 vs 易用性**
    *   **热度**: 👍 6, 评论 44
    *   **分析**: 用户抱怨开启了所有安全配置后，Agent 仍拒绝执行安装 ffmpeg 等操作，沦为“聊天机器人”。这反映了高级用户在“安全沙箱”与“生产力工具”之间的摩擦。维护者可能需要更清晰的“God Mode”配置选项或更友好的引导。
2.  **[#3478](https://github.com/zeroclaw-labs/zeroclaw/issues/3478) [OPEN] SQLite 记忆管道增强**
    *   **热度**: 评论 3
    *   **分析**: 社区开发者 @5queezer 提出了一套复杂的 9 阶段评分管道（BM25、MMR 等），显示出用户对提升 Agent 长期记忆质量的强烈技术需求。
3.  **[#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) [OPEN] A2A 协议支持**
    *   **热度**: 👍 4
    *   **分析**: 用户希望 Zeroclaw 能遵循 Linux Foundation 的 A2A 协议，实现跨实例、跨框架的 Agent 通信，这是迈向分布式 AI 网络的重要信号。

---

## 5. Bug 与稳定性

今日报告了若干关键 Bug，部分已有修复方案。

| 严重度 | Issue/PR | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **S0 (数据/安全)** | [#4127](https://github.com/zeroclaw-labs/zeroclaw/issues/4127) | 关闭安全设置后，Agent 陷入幻觉循环，似乎在不断执行不存在的操作。 | CLOSED (可能已修复或无法复现) |
| **S0 (数据丢失)** | [#4124](https://github.com/zeroclaw-labs/zeroclaw/issues/4124) | 使用 `zhipu/zai` 模型时 Prompt 超出最大长度导致崩溃。 | CLOSED |
| **S1 (流程阻塞)** | [#4139](https://github.com/zeroclaw-labs/zeroclaw/issues/4139) | 处理中文字符时，`creator.rs` 发生 UTF-8 字节索引切片导致的 Panic。 | OPEN |
| **S1 (流程阻塞)** | [#4207](https://github.com/zeroclaw-labs/zeroclaw/issues/4207) | 使用 `install.sh` 安装后访问 Web Dashboard 提示不可用，需手动 build。 | OPEN |
| **S2 (体验降级)** | [#4204](https://github.com/zeroclaw-labs/zeroclaw/issues/4204) | Postgres 记忆后端使用 `ILIKE` 进行简单子串匹配，导致多词搜索失效。 | OPEN (已有 PR [#4208](https://github.com/zeroclaw-labs/zeroclaw/pull/4208) 修复) |

---

## 6. 功能请求与路线图信号

*   **本地化与隐私**:
    *   **[#4116](https://github.com/zeroclaw-labs/zeroclaw/issues/4116)**: 请求添加本地 GPU 加速 TTS (Piper/Coqui)，配合现有的本地 LLM 和 STT，实现全链路离线化。
    *   **[#4119](https://github.com/zeroclaw-labs/zeroclaw/issues/4119)**: 请求将图像/视觉消息路由到专门的多模态提供商，解决本地 LLM 无法处理图片的问题。
*   **开发者体验 (DevOps)**:
    *   **[#3569](https://github.com/zeroclaw-labs/zeroclaw/issues/3569)**: 请求 `zeroclaw config reload` 热重载功能，避免修改配置重启导致会话历史丢失。
    *   **[#3565](https://github.com/zeroclaw-labs/zeroclaw/issues/3565)**: 请求增加 Token 消耗和成本追踪的仪表盘。

**预测**: 鉴于已有相关 PR 提交，**本地 TTS** 和 **Postgres 全文搜索** 很可能在下一版本中落地。

---

## 7. 用户反馈摘要

*   **痛点**: **权限管理过于严格**是用户最大的挫败感来源，用户希望有一个明确的“完全信任”开关，而不是被安全策略频繁拦截。
*   **场景**: 大量用户正在尝试**本地部署** (Local LLM + Whisper + TTS)，他们迫切需要各组件的本地化替代方案以保护隐私或降低成本。
*   **好评**: 对 Web Dashboard 的持续细微修复（如滚动条、语法高亮）受到欢迎，表明项目团队注重细节打磨。

---

## 8. 待处理积压

*   **[#3683](https://github.com/zeroclaw-labs/zeroclaw/issues/3683) [Feature] 自主技能创建**: 提出将成功的对话转化为技能文档并自我改进的“学习循环”，目前尚在提案阶段，建议维护者重点关注，这是 Agent 智能化的核心方向。
*   **[#3679](https://github.com/zeroclaw-labs/zeroclaw/issues/3679) [Bug] 成本追踪缺失**: 从 `main` 切换到 `master` 分支后，原有的成本追踪代码丢失，至今未修复，这是一个影响生产环境的关键功能缺失。

---
*数据来源：Zeroclaw GitHub Repository (2026-03-22 08:00 AM UTC 截止)*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目动态日报 (2026-03-22)**

---

### 1. 今日速览

PicoClaw 项目今日保持**极高的开发活跃度**，不仅发布了最新的 **v0.2.3-nightly** 自动构建版本，还在代码合并和问题修复上取得了显著进展。过去24小时内共有 **36 个 PR 更新**（其中 14 个已合并/关闭）和 **29 个 Issue 更新**（16 个已关闭），显示出维护团队正在高效地处理社区反馈与代码迭代。重点推进了 Agent 浏览器自动化技能、Discord 语音支持以及多项底层 Bug 修复，项目整体向着更加稳定和功能丰富的 v0.2.3 正式版稳步迈进。

---

### 2. 版本发布

- **nightly: Nightly Build (v0.2.3-nightly.20260322.c0bb8d6d)**
  - **类型**: 自动化构建
  - **说明**: 这是一个每夜构建版本，包含了最新的代码提交（对应 commit `c0bb8d6d`），可能不稳定，仅供测试用途。
  - **变更范围**: 对比 v0.2.3 版本，主要包含了主分支上的最新修复与功能提交。
  - **链接**: [Release Page](https://github.com/sipeed/picoclaw/releases/tag/v0.2.3-nightly.20260322.c0bb8d6d)

---

### 3. 项目进展

今日共有 **14 个 PR** 被合并或关闭，显著提升了项目的稳定性与功能广度：

- **新增浏览器自动化能力**: PR #1861 合并，引入了 `agent-browser` 技能，允许 Agent 通过 Chrome DevTools Protocol (CDP) 进行浏览器自动化操作。同时添加了 `Dockerfile.heavy` 以支持包含浏览器依赖的重型容器部署。
  - 链接: [PR #1861](https://github.com/sipeed/picoclaw/pull/1861)
- **Subagent 架构演进**: PR #1584 (PoC) 和修复 PR #1717 的推进，表明项目正在重构 Agent 执行循环，支持层级化的子代理（Sub-turns）调用，解决了子代理无法继承工具列表的关键 Bug。
  - 链接: [PR #1584](https://github.com/sipeed/picoclaw/pull/1584), [PR #1717](https://github.com/sipeed/picoclaw/pull/1717)
- **心跳机制优化**: 合并 PR #1617，修复了心跳功能在默认模板下误触发消耗 Token 的问题，现在只有用户确实添加了任务才会触发 LLM。
  - 链接: [PR #1617](https://github.com/sipeed/picoclaw/pull/1617)
- **基础设施与兼容性**: 修复了 Telegram 负数 Group ID 识别错误 (PR #1855) 和 Azure AI Foundry 端点支持 (PR #1860)，并清理了 Docker 构建忽略文件 (PR #1782)。
  - 链接: [PR #1855](https://github.com/sipeed/picoclaw/pull/1855), [PR #1860](https://github.com/sipeed/picoclaw/pull/1860)

---

### 4. 社区热点

- **[Feature] TTS 和 ASR 架构设计 (Issue #1648)**
  - **热度**: 17 条评论
  - **分析**: 社区对 PicoClaw 的语音交互能力（TTS/ASR）需求强烈。该 Issue 提出了详细的架构设计，讨论集中在如何将语音网关与现有 Agent 架构融合。已有相关 PR (#1642, #1852) 正在推进中，显示出这是下一阶段的开发重点。
  - 链接: [Issue #1648](https://github.com/sipeed/picoclaw/issues/1648)
- **[Feature] WebUI 支持 (Issue #806)**
  - **热度**: 7 条评论, 7 个点赞
  - **分析**: 作为高优先级路线图项目，WebUI 的重构工作正在进行中，旨在降低非技术用户的使用门槛。这是目前用户最期待的功能之一。
  - 链接: [Issue #806](https://github.com/sipeed/picoclaw/issues/806)
- **配置架构重构 (PR #1352)**
  - **热度**: 活跃更新
  - **分析**: 这是一个大型的重构 PR，旨在引入配置版本控制和迁移机制。虽然评论数显示为 undefined（可能是 Bot 更新），但其涉及的代码范围广，是确保项目未来配置兼容性的基石。
  - 链接: [PR #1352](https://github.com/sipeed/picoclaw/pull/1352)

---

### 5. Bug 与稳定性

今日报告及处理的 Bug 主要集中在 API 兼容性和工具调用逻辑：

- **[P1] Groq API 工具调用失败 (Issue #748)**
  - **描述**: Groq 提供商拒绝 PicoClaw 生成的非标准工具调用格式（`<function=name{...}>`），导致 400 错误。
  - **状态**: OPEN，尚无明确 Fix PR。
  - 链接: [Issue #748](https://github.com/sipeed/picoclaw/issues/748)
- **[P1] Anthropic API 工具结果重复 (PR #1793)**
  - **描述**: 使用 Anthropic 模型时报错 "each tool_use must have a single result"。
  - **状态**: 已有 Fix PR (#1793) 待合并，通过去重和合并连续结果块解决。
  - 链接: [PR #1793](https://github.com/sipeed/picoclaw/pull/1793)
- **[P2] OpenAI 兼容端点 API Key 缺失 (Issue #1864)**
  - **描述**: `/v1/models` 探针未传递 API Key，导致本地网关（如 axonhub）认证失败。
  - **状态**: OPEN。
  - 链接: [Issue #1864](https://github.com/sipeed/picoclaw/issues/1864)
- **[P2] MCP 非文本 Base64 数据占用上下文 (Issue #1862)**
  - **描述**: MCP 返回的大型非文本 Base64 数据被直接传给 LLM，导致上下文溢出。
  - **状态**: OPEN。
  - 链接: [Issue #1862](https://github.com/sipeed/picoclaw/issues/1862)

---

### 6. 功能请求与路线图信号

- **Exec 工具增强**: Issue #1733 和 PR #1869 提出为 `exec` 工具添加 PTY（伪终端）和后台执行支持。尽管之前因构建失败被回滚（PR #1865），但开发者已修复 Loong64 架构的依赖问题并重新提交，**极有可能**在近期合并，这将解决 Docker 构建等长耗时任务的交互问题。
  - 链接: [Issue #1733](https://github.com/sipeed/picoclaw/issues/1733)
- **Docker 运行时 Python 支持**: Issue #1870 和 PR #1871 建议在 Docker 镜像中预装 Python3，以支持依赖 Python 脚本的 Skills。这是一个合理的功能增强，且实现简单，预计会被接纳。
  - 链接: [Issue #1870](https://github.com/sipeed/picoclaw/issues/1870)

---

### 7. 用户反馈摘要

- **部署体验**: 用户反馈 aarch64 架构的 .deb 包安装存在问题 (Issue #1763)，影响了边缘设备用户的体验。
- **Token 消耗敏感**: Issue #1561 关于心跳空转消耗 Token 的问题已得到修复 (PR #1617)，这表明用户对后台静默成本非常敏感。
- **配置复杂度**: 多个 Issue (#1737, #1704) 反映了 Launcher 模式和 TUI 设置的混淆，用户容易误操作禁用通道或找不到 WebSocket 端口，急需 WebUI 和更清晰的文档引导。
- **文档缺失**: 用户在询问 REST API 支持 (Issue #1856) 和 Cron 任务文档 (Issue #1868)，说明文档覆盖度仍需提高。

---

### 8. 待处理积压

- **Issue #1648 (TTS/ASR 支持)**: 尽管有活跃讨论和关联 PR，但核心架构集成尚未完成，需持续关注。
- **Issue #748 (Groq 兼容性)**: 影响特定提供商的核心功能，长期未修复可能导致部分用户流失。
- **Issue #806 (WebUI)**: 作为一个高点赞数的 Feature，目前仍在重构中，需确保按路线图交付。
- **PR #1352 (Config Refactor)**: 该重构工作涉及面广，且已持续数日，需尽快完成审查合并，以免阻塞其他依赖配置结构的 PR。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报**
**日期**: 2026-03-22 | **分析师**: AI 开源项目观察员

---

### 1. 今日速览
NanoClaw 今日维持了极高的开发活跃度，虽然未发布新版本，但代码库变动剧烈。过去24小时内共有 **38 个 PR 更新**（其中待合并 29 个，显示社区贡献激增）和 **28 个 Issue 更新**。核心贡献者 @akasha-scheuermann 和 @bitcryptic-gw 集中解决了容器崩溃恢复和跨平台部署的核心痛点，同时社区正在积极填补 Slack、WhatsApp 和 Discord 等多渠道集成的空白。大量自动化的 "Merge-forward" Issue 暗示主分支近期经历了重构，导致部分 Skill 分支需要人工介入合并。

### 2. 版本发布
*   **无新版本发布**。
    *   *注*：尽管无正式 Release，`main` 分支活跃度极高，建议关注每日构建版。

### 3. 项目进展
今日共有 **9 个 PR 合并/关闭**（主要集中在 Bug 修复和基础设施优化），以及大量活跃的待合并 PR：

*   **核心稳定性修复**: @akasha-scheuermann 提交了多项关键修复，包括容器启动时的陈旧 Skills 清理 ([#1320](qwibitai/nanoclaw PR #1320))、Slash 命令检测逻辑修复 ([#1319](qwibitai/nanoclaw PR #1319)) 以及防止消息管道在崩溃时丢失数据的回滚游标机制 ([#1321](qwibitai/nanoclaw PR #1321))。
*   **Telegram 集成闭环**: Issue [#1288](qwibitai/nanoclaw Issue #1288) 的关闭标志着 Agent 现已支持读取用户对消息的 Emoji 反应，结合之前的“设置反应”功能，Telegram 交互体验已趋完善。
*   **多平台部署支持**: @bitcryptic-gw 的 Linux/Docker 部署支持 PR ([#1089](qwibitai/nanoclaw PR #1089)) 持续获得关注，解决了非 macOS 用户的部署难题。
*   **MCP 桥接突破**: 新提交的 PR [#1324](qwibitai/nanoclaw PR #1324) 试图通过 IPC 桥接主机端 MCP 服务器，这将使 Linux 容器化的 Agent 能够调用 macOS 原生 API（如 EventKit），极具战略意义。

### 4. 社区热点
*   **Linux 支持文档冲突** [Issue #1075](qwibitai/nanoclaw Issue #1075):
    *   **热度**: 3 评论 | 类型: 文档
    *   **分析**: 用户发现官网声称支持 Linux，但 README 标注 "Coming Soon"。这反映了用户对 Linux 深度支持的强烈需求与当前文档滞后之间的矛盾。
*   **Web 端多会话渠道** [Issue #1273](qwibitai/nanoclaw Issue #1273):
    *   **热度**: 1 评论 | 👍: 1
    *   **分析**: 用户 @rozik 自行开发了一个基于 Web 的多会话交互界面。这表明部分用户不满足于仅通过 IM（Telegram/Discord）使用 Agent，更倾向于 Web 原生交互。
*   **Slack 原生集成请求** [Issue #876](qwibitai/nanoclaw Issue #876):
    *   **热度**: 2 评论 | 👍: 1
    *   **分析**: B 端用户对 Slack 集成的呼声依然很高，目前尚无人认领开发。

### 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，部分已有修复方案：

*   **严重 - Duty Cycle 卡死** [Issue #1315](qwibitai/nanoclaw Issue #1315):
    *   **现象**: Agent 在触发 `dutyCycleLoop` 后，无法完成 retrospective 或 dream 阶段，导致状态卡死。
    *   **状态**: **OPEN**，建议暂时禁用该功能。
*   **中等 - CLI 非零退出码** [Issue #1312](qwibitai/nanoclaw Issue #1312):
    *   **现象**: `claw` 脚本在检测到结束哨兵并调用 `proc.kill()` 后，错误地返回了非零退出码，影响脚本编排。
    *   **状态**: **OPEN**。
*   **修复中 - Apple Container 首次设置崩溃** [PR #1323](qwibitai/nanoclaw PR #1323):
    *   **现象**: 在全新 macOS 安装上，因为挂载了 `/dev/null` 导致 VirtioFS 报错，首次设置直接失败。
    *   **状态**: **Fix PR 已提交** (#1323)，待合并。
*   **阻塞 - Skill 分支合并冲突**:
    *   连续出现多个 Issue (如 [#1307](qwibitai/nanoclaw Issue #1307), [#1306](qwibitai/nanoclaw Issue #1306)) 报告 `skill/apple-container` 和 `skill/compact` 分支无法自动合并 main 分支代码。这表明近期核心代码重构幅度较大，功能分支维护滞后。

### 6. 功能请求与路线图信号
*   **会话重置机制** [Issue #1211](qwibitai/nanoclaw Issue #1211) (👍: 2):
    *   **诉求**: 增加 `/new` 命令以清除上下文，解决长期对话导致的 Token 浪费问题。
    *   **进展**: 已有相关 PR [#1311](qwibitai/nanoclaw PR #1311) 提交，正在实现 "Create new session" 功能，**极大概率近期合并**。
*   **密钥管理增强** [Issue #1316](qwibitai/nanoclaw Issue #1316):
    *   **诉求**: 将明文 `.env` 迁移至 macOS Keychain 并支持 1Password。
    *   **趋势**: 随着项目对安全性的重视，本地加密存储将是下一步重点。
*   **全渠道通信技能包** [PR #1313](qwibitai/nanoclaw PR #1313):
    *   **内容**: 试图一次性集成 WhatsApp, Discord, PDF 处理和语音转文字。
    *   **判断**: 这是一个大型功能聚合 PR，可能作为下一版本的“大礼包”特性发布。

### 7. 用户反馈摘要
*   **部署痛点**: Issues 中多次提及 Docker/Linux 部署的配置复杂度，现有 PR ([#1089](qwibitai/nanoclaw PR #1089)) 获得了大量关注，证明容器化部署是目前用户最大的痛点。
*   **上下文管理**: 用户对无限增长的会话历史感到担忧（Token 消耗），希望能手动或自动重置上下文 ([#1211](qwibitai/nanoclaw Issue #1211))。
*   **交互体验**: Telegram 的 Emoji 反应功能被视为提升“拟人化”交互的关键特性，备受期待。

### 8. 待处理积压
*   **Skill 分支维护危机**: 自动化机器人报告 `skill/compact` 和 `skill/apple-container` 分支已连续多次合并失败（见 Issue [#1307](qwibitai/nanoclaw Issue #1307)）。这会导致依赖这些技能的用户无法获得最新的主分支修复，**建议维护者优先处理**。
*   **API 端点自定义 PR** ([#1257](qwibitai/nanoclaw PR #1257)): 针对第三方 API 兼容（如 z.ai）的修复已挂起 2 天，对于希望使用非官方 API 的用户来说是关键阻碍。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

这里是 **NullClaw** 项目 2026-03-22 的动态日报。

# NullClaw 项目日报 (2026-03-22)

## 1. 今日速览
NullClaw 今日保持了极高的开发活跃度，正处于版本 **v2026.3.21** 发布后的快速迭代期。过去 24 小时内，项目合并了 **31 个 PR**，解决了包括 Ollama 空响应、MCP 协议兼容性和流式传输稳定性在内的多项关键问题。与此同时，社区反馈热烈，新增了关于“消息防抖”和“Gemini CLI 握手失败”的讨论。整体来看，项目正在积极完善多渠道支持和运行时稳定性，但也暴露出新版本在特定配置下的兼容性隐患。

## 2. 版本发布
### **v2026.3.21**
- **链接**: [Release v2026.3.21](https://github.com/nullclaw/nullclaw/releases/tag/v2026.3.21)
- **核心更新**:
  - **运行时增强**: 默认集成了 `wasm3` 解释器，提升了 WebAssembly 的支持能力 ([PR #568](https://github.com/nullclaw/nullclaw/pull/568))。
  - **Agent 特性**: 支持可配置的提示词时区，增强了多地区部署的灵活性。
- **升级/迁移注意**: 无明显破坏性变更，但建议关注默认启用的 wasm3 运行时对现有环境的兼容性。

## 3. 项目进展
今日共有 **31 个 PR 被合并**，主要集中在稳定性修复、协议兼容性和渠道整合：

- **Provider 适配与修复**:
  - **Ollama 空响应修复**: 通过默认发送 `"think": false` 修复了交互式对话中的空内容错误 ([PR #668](https://github.com/nullclaw/nullclaw/pull/668))。
  - **流式传输健壮性**: 增加了对停滞 SSE 流的检测（curl speed-limit），并限制了非流式回退的超时时间 ([PR #597](https://github.com/nullclaw/nullclaw/pull/597))。
  - **空响应重试**: 修复了流式传输模式下跳过空响应重试逻辑的 Bug ([PR #663](https://github.com/nullclaw/nullclaw/pull/663))。
- **MCP (Model Context Protocol) 优化**:
  - 允许 localhost、私有 IP 和 Tailscale 网段使用 HTTP MCP URLs ([PR #642](https://github.com/nullclaw/nullclaw/pull/642))。
  - 修复了 HTTP 传输层的 Accept 头和 SSE 响应解析问题 ([PR #658](https://github.com/nullclaw/nullclaw/pull/658))。
- **架构重构**: 将 Telegram 和 Signal 的启动流程统一到共享轮询循环中，优化了资源管理 ([PR #677](https://github.com/nullclaw/nullclaw/pull/677))。

## 4. 社区热点
今日社区讨论集中在用户体验和新协议支持上：

- **[#618] "Wife-safe" 消息防抖**: 用户希望 Bot 能等待用户发完一连串消息后再统一回复，而不是逐条响应。这反映了聊天机器人场景下的真实痛点，目前已有对应 PR 正在处理 ([Issue #618](https://github.com/nullclaw/nullclaw/issues/618))。
- **[#671] Chat UI 驱动用户 "Crazy"**: 用户反馈在便携热点设备上使用 Web UI 遇到配置问题。维护者迅速响应并合并了澄清公网绑定指引的修复 ([Issue #671](https://github.com/nullclaw/nullclaw/issues/671))。
- **[#674] Gemini CLI 兼容性**: 报告了 `gemini-cli` ACP provider 与 v0.34.0 的握手失败问题，涉及协议版本号字段类型错误。

## 5. Bug 与稳定性
今日报告了数个影响用户体验的 Bug，部分已有修复方案：

| 严重度 | Issue/PR | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **高** | [Issue #665](https://github.com/nullclaw/nullclaw/issues/665) | **Agent 启动崩溃**: 用户在使用 x86_64 构建版本时遇到 `error.NoResponseContent`，导致 Agent 无法正常启动。 | **待修复** |
| **中** | [Issue #674](https://github.com/nullclaw/nullclaw/issues/674) | **Gemini CLI 挂起**: ACP 握手协议不匹配导致请求无限期挂起。 | **PR 已提交** ([PR #675](https://github.com/nullclaw/nullclaw/pull/675)) |
| **中** | [Issue #638](https://github.com/nullclaw/nullclaw/issues/638) | **Otel 诊断问题**: OpenTelemetry 在容器化部署中无法正常工作。 | **已关闭** (可能已修复或需更多信息) |
| **低** | [Issue #671](https://github.com/nullclaw/nullclaw/issues/671) | **Web UI 配置困惑**: 非本地回环地址绑定的认证指引不清晰。 | **已修复** |

## 6. 功能请求与路线图信号
- **消息防抖**: [PR #676](https://github.com/nullclaw/nullclaw/pull/676) 正在实现针对 Telegram/Discord/CLI 的入站消息防抖功能，默认设置为 3000ms。这极有可能合并入下一版本，显著改善多段连续输入的交互体验。
- **沙盒执行**: [PR #678](https://github.com/nullclaw/nullclaw/pull/678) 提议为 Shell 工具增加系统级沙盒隔离支持，项目正在加强安全性建设。
- **自适应智能管道**: [PR #527](https://github.com/nullclaw/nullclaw/pull/527) 提出了包含评分器和技能路由的完整质量循环，虽然处于 Draft 阶段，但预示了项目向自我进化 Agent 架构发展的意图。
- **邮件通道全双工**: [PR #667](https://github.com/nullclaw/nullclaw/pull/667) 正在将邮件通道从“仅发送”升级为支持 IMAP IDLE 的双向轮询通道。

## 7. 用户反馈摘要
- **痛点**: 用户在配置 Web UI 的公网访问时感到困惑，特别是关于 `auth_token` 和 loopback 限制的逻辑。
- **场景**: 家庭/个人助理场景（如给妻子做的 Bot）对“连续消息处理”有强需求，单条响应模式被认为干扰过大。
- **稳定性**: 有用户反馈下载的 Release 版本直接报错，提示构建版本可能存在环境依赖或内存分配问题。

## 8. 待处理积压
- **[Issue #665](https://github.com/nullclaw/nullclaw/issues/665)**: **error.NoResponseContent** 导致 Agent 无法运行。这是一个未经评论的新 Issue，且涉及核心启动流程，建议维护者优先排查是否与 v2026.3.21 的默认配置变更有关。
- **[PR #527](https://github.com/nullclaw/nullclaw/pull/527)**: 关于“自适应智能管道”的大型 PR，自 3/14 创建以来尚未合并，需关注其代码审查进度。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是为您生成的 2026-03-22 IronClaw 项目动态日报。

---

# 📊 IronClaw 项目日报 (2026-03-22)

## 1. 今日速览
IronClaw 今日处于**高强度的功能迭代与代码重构期**，虽然未发布新的稳定版本，但代码库活跃度极高。过去24小时内共有 **50 个 PR 更新**（其中 42 个处于待合并/审核状态），显示出核心团队正在为下一个大版本进行大规模的代码积压和功能整合。Issues 板块新增了多个关键的 P1/CRITICAL 级别的 Bug 报告（涉及安全软件误报和 TEE 环境下的凭证注入），且核心贡献者 @ilblackdragon 正在推动包括多智能体路由、UX 全面翻新及工具调用语义评估在内的多项重大更新。总体而言，项目正处于 **"重量级更新合并周"**，功能丰富度显著提升，但需警惕短期内的高风险变更。

## 2. 版本发布
- **无新版本发布**：今日无 Release 更新。目前开发重点集中在 `staging` 分支的大量 Feature PR 合并，预计在完成当前的 UX 重构和工具链优化后将发布新版本。

## 3. 项目进展
今日共有 **8 个 PR 被合并/关闭**，主要集中在用户体验优化、依赖修复和 OAuth 安全性增强：

*   **UX 与交互体验增强**：合并了 [#496](https://github.com/nearai/ironclaw/pull/496) 和 [#1121](https://github.com/nearai/ironclaw/pull/1121)，分别引入了 Web 端配置模态框的文本设置字段支持，以及修复了 MCP 客户端在扩展管理器中的持久化丢失问题，显著改善了 Web 端用户配置插件的体验。
*   **安全性修复**：[#1454](https://github.com/nearai/ironclaw/pull/1454) 修复了 OAuth 流程中状态解码的一个关键漏洞，防止了畸形状态静默回退到旧版处理逻辑导致的匹配失败（关联修复 Issue #1441）。
*   **CLI 功能扩展**：[#1399](https://github.com/nearai/ironclaw/pull/1399) 为 CLI routine 命令增加了 `--use-tools` 和 `--max-tool-rounds` 标志，赋予了脚本化任务更强的控制能力。

**进展评估**：项目正从单一的 Agent 核心向多租户、多通道、插件化架构快速演进。

## 4. 社区热点
今日讨论热度最高、影响范围最广的内容主要集中在 Agent 的高级能力扩展上：

*   **[Issue #84] Agent System Advanced Features (multi-agent, streaming)**: 作者 @ilblackdragon 提出了实现 **多智能体路由** 和 **全局会话** 的需求。这是社区长期关注的痛点，用户希望在不同 Agent 之间隔离工作区并进行消息路由，同时保持可选的共享上下文。
    *   🔗 链接：[nearai/ironclaw Issue #84](https://github.com/nearai/ironclaw/issues/84)
*   **[PR #1513] Thread per-tool reasoning**: 核心开发者正在推动将 LLM 的推理过程（即"为什么选择该工具"）贯穿全链路（从 Provider 到 REPL/Web UI），这被视为提升 Agent 可解释性的关键一步。
    *   🔗 链接：[nearai/ironclaw PR #1513](https://github.com/nearai/ironclaw/pull/1513)
*   **[Issue #1458] Persistent Sandbox for generic actions**: 用户强烈建议实现持久化的沙箱环境，以支持 SSH、VPN、Ansible 等需要维持状态的操作，而非当前的临时容器模式。
    *   🔗 链接：[nearai/ironclaw Issue #1458](https://github.com/nearai/ironclaw/issues/1458)

## 5. Bug 与稳定性
今日报告了数个高风险问题，主要集中在特定环境下的兼容性和安全性：

*   **🚨 CRITICAL: Security Software False Positive**
    *   **描述**：Microsoft Defender 将 `ironclaw-x86_64-pc-windows-msvc.msi` 标记为 `Trojan:Win32/Wacatac.C!ml`。
    *   **影响**：严重影响 Windows 用户的安装与信任度。
    *   🔗 链接：[Issue #1538](https://github.com/nearai/ironclaw/issues/1538)
*   **🔥 P1: WASM Credential Injection Failures in TEE**
    *   **描述**：在 NEAR AI 托管的 TEE 环境中，WASM 工具的凭证注入在运行时静默失败，尽管存储是成功的。
    *   **状态**：**OPEN**，等待修复。
    *   🔗 链接：[Issue #1537](https://github.com/nearai/ironclaw/issues/1537)
*   **🔧 P1: OAuth CI Flakiness**
    *   **描述**：OAuth 通配符回调测试在 CI 中因竞态条件导致偶发失败。
    *   **状态**：**CLOSED** (可能通过 PR #1454 修复或暂时绕过)。
    *   🔗 链接：[Issue #1280](https://github.com/nearai/ironclaw/issues/1280)
*   **🐛 Provider Compatibility Issues**:
    *   Qwen (Issue #1520) 和 Gemini (Issue #1521) 在特定配置下出现 405/400 错误，主要涉及 Function Calling 的兼容性问题。

## 6. 功能请求与路线图信号
根据 Issues 和活跃 PRs，以下功能极有可能在近期纳入主分支：

1.  **持久化沙箱**：针对 Issue #1458 的讨论，结合目前的 WASM tool 重构，未来版本可能会引入基于容器的有状态执行环境。
2.  **HTTP 域名白名单**：Issue #1518 提出为 Agent 配置 HTTP 域名白名单以减少人工审批，这与当前正在进行的 Safety Layer (PR #614) 改进方向一致，预计很快会有 PR 跟进。
3.  **Web UI 自定义 LLM 提供商**：PR #1340 (Web UI 配置自定义 LLM) 已经 OPEN 且处于活跃状态，这是多模型支持的关键一步。

## 7. 用户反馈摘要
从今日的 Issues 中可以提炼出以下核心用户痛点：

*   **操作中断频繁**：用户在使用 Agent 进行多步工作流（如 ACP 协议）时，频繁的 HTTP 请求审批严重打断流程，迫切需要"信任一次，全程有效"的白名单机制。
*   **上下文丢失感**：Routine（例行任务）通知目前与用户聊天线程隔离，导致用户收到通知后无法直接在当前上下文中追溯详情。
*   **环境兼容性焦虑**：Windows 版本被杀毒软件拦截，以及 TEE 环境下的凭证不可用，表明用户在非标准 Linux 环境下的部署体验仍有待打磨。

## 8. 待处理积压
以下重要 Issue/PR 需引起维护者注意，以防阻塞进度：

*   **[PR #1118] Multi-tenant auth**: 该 PR 涉及多租户架构的核心重构，已被积压多日，虽然是"High Risk"且来自于 Regular Contributor，但其解决的 `thread_id` 污染问题对生产环境至关重要。
    *   🔗 链接：[nearai/ironclaw PR #1118](https://github.com/nearai/ironclaw/pull/1118)
*   **[PR #614] LLM-as-Judge**: 引入 LLM 作为裁判来评估工具调用意图，这是一个极具前瞻性但极其复杂的 Safety 特性，目前处于 Open 状态且涉及面广，需要密集测试。
    *   🔗 链接：[nearai/ironclaw PR #614](https://github.com/nearai/ironclaw/pull/614)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-22)

## 1. 今日速览
LobsterAI 项目今日保持**高度活跃**状态，随着 `2026.3.21` 版本的发布，开发重心主要集中在系统稳定性修复与代码重构上。过去24小时内共有 30 个 PR 更新（其中 16 个已合并）和 16 个 Issue 更新，显示出维护团队响应迅速，尤其是在处理新版本引入的回归问题方面。社区贡献者 **@BucleLiu** 提交了多项高质量的代码质量与安全问题报告，暴露了主进程阻塞、内存泄漏及输入校验等潜在风险。此外，针对 IM 集成（泡泡/飞书）和 OpenClaw 引擎的修复占据了合并代码的主流。

## 2. 版本发布
### Release `2026.3.21`
本次更新主要增强了日志系统与 IM 连接能力，建议所有用户升级，但需注意 Webhook 模式的配置迁移。

**更新亮点：**
*   **日志增强**: 引入日志按天轮转，限制单文件 80MB，保留 7 天，优化磁盘占用 ([PR #569](https://github.com/netease-youdao/LobsterAI/pull/569))。
*   **IM 支持**: 泡泡IM (Popo) 新增 WebSocket 长连接模式，提升消息实时性 ([PR #556](https://github.com/netease-youdao/LobsterAI/pull/556))。
*   **飞书集成**: 增加一键飞书 功能。

**迁移/升级注意事项：**
*   升级后若泡泡 IM 连接失败，请检查 `connectionMode` 配置，老版本用户可能需要重新配置 webhook 或切换至 websocket 模式 ([PR #615](https://github.com/netease-youdao/LobsterAI/pull/615))。

## 3. 项目进展
今日共有 **16 个 PR 被合并**，显著提升了应用的稳定性与用户体验：

*   **架构重构与性能**: 
    *   [PR #573](https://github.com/netease-youdao/LobsterAI/pull/573): 将 `SqliteStore` 重构为异步 I/O 并加入防抖保存机制，彻底解决了同步写磁盘阻塞主进程 UI 卡顿的问题。
*   **关键 Bug 修复**:
    *   [PR #617](https://github.com/netease-youdao/LobsterAI/pull/617): 修复了 `stoppedSessions` 的内存泄漏问题，确保删除会话后内存被正确释放。
    *   [PR #620](https://github.com/netease-youdao/LobsterAI/pull/620): 修复了 OpenClaw 模式下 Windows 环境无法找到 Python 运行时的问题。
    *   [PR #607](https://github.com/netease-youdao/LobsterAI/pull/607): 修复了 OpenClaw 引擎中助手消息在工具调用后被错误分片的显示 Bug。
*   **用户体验优化**:
    *   [PR #608](https://github.com/netease-youdao/LobsterAI/pull/608): 增加了首次启动隐私协议弹窗，满足合规要求。
    *   [PR #614](https://github.com/netease-youdao/LobsterAI/pull/614): IM 渠道创建的会话现在会禁用本地输入框并显示提示，避免用户误操作。

## 4. 社区热点
*   **[PR #635] 重构核心文件** ([链接](https://github.com/netease-youdao/LobsterAI/pull/635)): @noransu 提议将 `main.ts` (3984行) 和 `Settings.tsx` (3301行) 拆分为模块化组件。此举意在解决代码臃肿问题，预计将显著提高项目的可维护性，是社区目前关注度较高的架构改进提案。
*   **[Issue #611] 升级后 404 错误** ([链接](https://github.com/netease-youdao/LobsterAI/issues/611)): 用户反馈升级最新版后所有对话报 404 错误（nginx 拦截），可能与服务端路由配置或模型 API 变更有关，是今日最紧急的用户反馈。
*   **[Issue #632] MEEET World 集成请求** ([链接](https://github.com/netease-youdao/LobsterAI/issues/632)): 社区用户提议接入 MEEET World 的 707 个 AI 智能体，显示出项目在扩展 Agent 生态方面的吸引力。

## 5. Bug 与稳定性
今日报告了多个中高危问题，主要集中在**性能**和**稳定性**领域：

*   **Critical (未修复)**: [Issue #611](https://github.com/netease-youdao/LobsterAI/issues/611) 升级后服务不可用 (404)，严重影响可用性。
*   **High (已修复)**: [Issue #571](https://github.com/netease-youdao/LobsterAI/issues/571) `stoppedSessions` 内存泄漏。已通过 [PR #617](https://github.com/netease-youdao/LobsterAI/pull/617) 修复。
*   **High (已修复)**: [Issue #621](https://github.com/netease-youdao/LobsterAI/issues/621) SQLite 同步写入阻塞主进程。已通过 [PR #573](https://github.com/netease-youdao/LobsterAI/pull/573) 修复。
*   **Medium (未修复 - 代码质量)**: 
    *   [Issue #630](https://github.com/netease-youdao/LobsterAI/issues/630) 记忆文本解析存在 ReDoS (正则拒绝服务) 风险。
    *   [Issue #624](https://github.com/netease-youdao/LobsterAI/issues/624) 主进程空指针崩溃风险。
    *   [Issue #623](https://github.com/netease-youdao/LobsterAI/issues/623) 异步 IPC 缺少顶层 try-catch 可能导致进程崩溃。
*   **Low (未修复)**: [Issue #498](https://github.com/netease-youdao/LobsterAI/issues/498) 上下文记忆提取异常，导致 AI 重复回答旧内容。

## 6. 功能请求与路线图信号
*   **结构化输入重构**: [PR #610](https://github.com/netease-youdao/LobsterAI/pull/610) 提议重构 Cowork 输入框，引入类似 Cursor 的结构化 Composer，支持更自然的资源引用，目前仍在 Open 状态，这是提升交互体验的重要方向。
*   **Cron 辅助**: [PR #605](https://github.com/netease-youdao/LobsterAI/pull/605) 为定时任务增加了未来 5 次执行时间预览，降低了 Cron 表达式的配置门槛，处于待合并状态。

## 7. 用户反馈摘要
*   **痛点**: 升级后的兼容性问题（404 错误）让用户感到挫败；长时间对话后 AI "失忆"或"复读" ([Issue #498](https://github.com/netease-youdao/LobsterAI/issues/498)) 影响使用体验。
*   **场景**: 用户大量使用 IM（飞书/泡泡）集成功能，并依赖 Cowork 引擎执行复杂任务，对 OpenClaw 的 Python 环境依赖较为敏感。
*   **评价**: 尽管存在 Bug，但用户对 WebSocket 长连接和新功能持积极态度，社区也在积极贡献代码安全审计。

## 8. 待处理积压
*   **安全隐患**: 由 @BucleLiu 提交的系列安全问题（ReDoS #630, IPC 异常捕获 #623, 空指针 #624）目前处于 Open 状态，建议维护团队尽快 Review 并合并相关防御性代码。
*   **Google Gemini 兼容性**: [Issue #634](https://github.com/netease-youdao/LobsterAI/issues/634) 指出最新版在使用 Gemini 3 时报 400 错误，目前尚无官方回复，可能阻碍部分模型用户的使用。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

以下是关于 TinyClaw (TinyAGI) 项目 2026-03-22 的动态日报：

---

# 📊 TinyClaw 项目动态日报 (2026-03-22)

### 1. 今日速览
TinyClaw 项目在过去 24 小时内维持了**低交互、高实质性开发**的状态。虽然社区侧的 Issues 讨论归于平静（0 条更新），但核心开发者在代码质量与系统稳定性上投入了显著精力。今日共有 2 个关键 Pull Requests 更新，主要聚焦于**通信层（Telegram）的稳定性修复**以及**消息队列调度逻辑的重构**。项目整体处于“修补与优化”阶段，并未发布新版本，但代码库的健壮性得到了边际改善。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
今日的工程进展主要由核心贡献者 @jlia0 推动，虽然只合并/关闭了 1 个 PR，但均涉及核心运行逻辑：

*   **🛠️ 修复 Telegram 长连接静默故障 [已合并/关闭]**
    *   **PR**: [#246 fix(telegram): fix watchdog timer bug](https://github.com/TinyAGI/tinyagi/pull/246)
    *   **详情**: 修复了一个严重的 Telegram 看门狗计时器 Bug。此前，在网络中断或设备（如笔记本电脑）休眠/唤醒后，Bot 会停止轮询消息且无法自动恢复。此修复确保了 Bot 在网络波动后的自愈能力，显著提升了托管服务的稳定性。

*   **🔄 重构消息队列路由逻辑 [待合并]**
    *   **PR**: [#247 fix(api): resolve agent routing at enqueue time](https://github.com/TinyAGI/tinyagi/pull/247)
    *   **详情**: 这是一个针对消息队列序列化的修复。此前，通道消息与计划任务并行处理，导致未指定 agent 的消息错误进入 "default" 链，破坏了多 Agent 场景下的上下文一致性。该 PR 将路由解析提前至入队阶段，目前状态为 **Open**，等待审查合并。

### 4. 社区热点
*   **暂无明显热点**。
*   过去 24 小时内 Issues 区无新增或活跃讨论，PR 区虽有更新但主要集中在技术修复层面，尚未引发广泛评论。这表明项目当前处于功能迭代期，而非大规模社区讨论期。

### 5. Bug 与稳定性
今日修复并暴露了两个关键的系统稳定性隐患：

*   **🔴 [严重] Telegram Bot 假死 (已修复)**
    *   **问题**: 守护进程无法在网络恢复后重启轮询，导致 Bot 无响应。
    *   **状态**: **已修复** (PR #246)。
    *   **影响**: 所有依赖 Telegram 接口的用户。

*   **🟠 [中等] 多 Agent 路由混乱 (修复中)**
    *   **问题**: 并发消息处理导致路由错误，消息被错误的 Agent 消化。
    *   **状态**: **Fix 待合并** (PR #247)。
    *   **影响**: 影响复杂工作流和多 Agent 交互的准确性。

### 6. 功能请求与路线图信号
*   **路线图信号**: 尽管没有显式的 Feature Request Issues，但从 PR #247 的修复内容可以看出，项目正在向**更严格的队列化管理**和**多 Agent 精细化路由**演进。这暗示下一阶段的小版本更新可能会重点优化高并发下的任务调度架构，而非新增表层功能。

### 7. 用户反馈摘要
*   **暂无有效反馈**。
*   由于今日无活跃 Issues，无法从用户评论中提炼痛点。但从 PR #246 的描述（"laptop sleep/wake cycles"）推断，开发者正在关注**个人/边缘部署场景**下的稳定性体验。

### 8. 待处理积压
*   **关键 PR 待审查**: [PR #247](https://github.com/TinyAGI/tinyagi/pull/247) 目前处于 Open 状态，涉及核心 API 路由逻辑，建议维护者优先进行 Code Review 并尽快合并，以解决潜在的队列竞争问题。
*   **Issue 积压**: 由于长期无 Issue 更新，建议项目组主动清理过期 Issues 或发布社区调查以激活反馈。

---
*分析师注：今日项目活跃度主要体现在代码提交的“质”而非“量”，核心开发者正在解决底层架构的遗留问题，这通常是版本发布前的信号。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

基于 2026-03-22 的 GitHub 数据，以下是 Moltis 开源项目的每日动态日报。

### Moltis 项目日报 (2026-03-22)

#### 1. 今日速览
Moltis 项目今日整体处于**低频交互、代码持续集成**的状态。虽然过去 24 小时内未观测到新的 Issue 提交或版本发布，但代码仓库保持活跃，有 2 个 Pull Requests 正在处理中。社区焦点目前主要集中在**跨平台兼容性修复（Windows 文件锁问题）**与**构建系统优化（Nix 支持）**。整体来看，项目正在通过修补底层系统级问题来提升稳定性，尚未进入新功能发布的密集期。

#### 2. 版本发布
*   **无新版本发布**。

#### 3. 项目进展
今日无合并的 PR，但有 2 个重要的 PR 处于 Open 状态并在近期有更新，表明开发者正在攻坚以下技术难点：

*   **Windows 平台兼容性修复**：PR [#436](https://github.com/moltis-org/moltis/pull/436) 针对 Windows 环境下的文件锁定问题（LockFileEx os error 5）提交了修复方案。作者 `@vanduc2514` 指出问题源于 Rust 标准库中 `OpenOptions::append(true)` 的权限设置，并建议通过 `write(true)+seek` 的方式绕过限制。该修复若合并，将显著改善 Windows 用户的会话持久化体验。
*   **Nix 构建支持**：PR [#459](https://github.com/moltis-org/moltis/pull/459) 致力于修复 Nix 构建流程。作者 `@jmikedupont2` 正在添加 Nix 相关配置并处理 witness code。这标志着项目正在完善 DevOps 体验，向支持声明式构建和复现环境迈进。

#### 4. 社区热点
*   由于今日 Issues 为 0 且 PR 评论数为 0，**社区互动较为沉寂**。
*   重点关注对象为 PR [#436](https://github.com/moltis-org/moltis/pull/436)，该 PR 解决了核心的 I/O 问题（Issue #434 的修复），虽然评论不多，但从技术深度来看，它是保障跨平台稳定性的关键一环。

#### 5. Bug 与稳定性
*   **严重级**:
    *   **Windows 文件锁死 (Issue #434 对应 PR #436)**: 在 Windows 上运行时，会话文件写入会因权限不足触发 `LockFileEx os error 5`。
    *   **状态**: 已有修复 PR [#436](https://github.com/moltis-org/moltis/pull/436)，目前正在等待审核合并。该方案修改了底层文件打开模式，需重点测试是否引入回归问题。
*   **一般级**:
    *   **Nix 构建异常**: 由 PR [#459](https://github.com/moltis-org/moltis/pull/459) 暴露出的构建系统适配问题，目前正在修复中。

#### 6. 功能请求与路线图信号
*   **构建与分发**: PR [#459](https://github.com/moltis-org/moltis/pull/459) 暗示了社区对**Nix Flake** 或类似确定性构建支持的需求。这通常意味着核心贡献者或重度用户希望在部署和环境搭建上拥有更高的一致性。
*   **稳定性优先**: 当前活跃的 PR 均为修复性质，预示着下一阶段的项目重心在于**夯实基础设施**，而非激进的功能扩展。

#### 7. 用户反馈摘要
*   虽然今日无新 Issue，但从活跃 PR 的上下文推断：
    *   **痛点**: Windows 用户在使用持久化会话功能时可能遇到程序崩溃或数据无法写入的情况。
    *   **诉求**: 开发者或高级用户希望在 NixOS 环境中原生构建项目。

#### 8. 待处理积压
*   **PR Review 积压**: 目前有 2 个待合并的 PR ([#436](https://github.com/moltis-org/moltis/pull/436), [#459](https://github.com/moltis-org/moltis/pull/459)) 处于 Open 状态且无评论。建议维护团队尽快介入 Code Review，尤其是涉及底层 I/O 操作的 #436，以防止阻塞 Windows 平台的正常使用。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-22)

> 数据来源: [CoPaw GitHub](https://github.com/agentscope-ai/CoPaw) | 分析师: AI OpenSource Analyst

## 1. 今日速览
CoPaw 项目今日维持高热度，社区活跃度显著提升，过去24小时内共有 **46 条 Issues 更新**（其中 37 条为新开/活跃）和 **13 条 PR 更新**。项目正处于 v1.0 发布后的快速迭代期，核心讨论集中在**多智能体编排**、**Docker 升级兼容性**以及**飞书集成稳定性**上。尽管没有新的版本发布，但社区贡献了大量针对稳定性修复和文档完善的 PR，显示出健康的维护状态。

## 2. 版本发布
*   **无新版本发布**。
    *   *注：* 社区普遍在使用 `0.1.0` 及 `0.1.0.post1` 版本，部分用户反映从 `0.0.7` 升级存在兼容性问题。

## 3. 项目进展
今日共有 **3 个 PR 合并/关闭**，主要集中在修复自定义通道和文档补充，增强了系统的可扩展性和易用性：

*   **[[PR #1991] fix(channels): handle dict type for custom channels](https://github.com/agentscope-ai/CoPaw/pull/1991)**
    *   **进展**: 修复了 `ChannelManager` 使用 `getattr` 读取字典类型配置时的错误。
    *   **意义**: 恢复并保障了**自定义通道**的正常启动与使用，解决了 [Issue #1987](https://github.com/agentscope-ai/CoPaw/issues/1987) 的阻断性问题。
*   **[[PR #1995] docs(faq): add Windows port 8088 conflict troubleshooting](https://github.com/agentscope-ai/CoPaw/pull/1995)**
    *   **进展**: 增加了 Windows 端口冲突（8088）的故障排查文档。
    *   **意义**: 解决了 Windows 用户（特别是 Docker/WSL2 环境）常见的部署阻碍。

## 4. 社区热点
今日讨论最集中的话题反映了 v1.0 版本升级后的阵痛及对多智能体功能的期待：

1.  **[[Issue #1976] Error: Unknown agent error: RuntimeError: Task has been cancelled!](https://github.com/agentscope-ai/CoPaw/issues/1976)** (评论: 14)
    *   **热度原因**: 这是一个严重的运行时错误，导致任务被意外取消。评论中提到该问题已在 #1956 中修复，但仍有大量用户在不同环境下复现，表明稳定性仍需验证。
2.  **[[Issue #2023] 升级1.0后技能丢失与记忆缺失](https://github.com/agentscope-ai/CoPaw/issues/2023)** (评论: 12)
    *   **热度原因**: Docker 用户从旧版升级到 1.0 后遭遇数据丢失。这是一个破坏性的用户体验问题，急需迁移指南或自动修复工具。
3.  **[[Issue #1345] 飞书频道对话出现"延迟回复"问题](https://github.com/agentscope-ai/CoPaw/issues/1345)** (评论: 10)
    *   **热度原因**: 飞书作为主要接入渠道，其消息队列的顺序处理问题严重影响 Bot 的实用性，长期未彻底解决引发用户焦虑。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在**数据持久化**和**模型兼容性**，部分已有修复方案：

*   **🔴 严重**:
    *   **Gemini API 兼容性崩溃**: [Issue #2033](https://github.com/agentscope-ai/CoPaw/issues/2033) 报告调用 Gemini 3.1/2.5 时出现 `Corrupted thought signature` 和 `ValidationError`，导致 Agent 不可用。
    *   **会话历史丢失**: [Issue #2034](https://github.com/agentscope-ai/CoPaw/issues/2034) WebUI 刷新后聊天记录清空，影响基础使用。
*   **🟠 中等**:
    *   **Docker 升级配置失效**: [Issue #1998](https://github.com/agentscope-ai/CoPaw/issues/1998) 升级后配置无法加载。
    *   **钉钉文件接收失败**: [Issue #2028](https://github.com/agentscope-ai/CoPaw/issues/2028) 多智能体版本引入了回归 Bug。
*   **🟢 已有修复/进展**:
    *   **自定义通道无法启动**: 已通过 [PR #1991](https://github.com/agentscope-ai/CoPaw/pull/1991) 修复。
    *   **JSON 文件损坏**: [Issue #1950](https://github.com/agentscope-ai/CoPaw/issues/1950) 涉及 `chats.json` 损坏，已关闭但需关注是否彻底解决。

## 6. 功能请求与路线图信号
社区对**多智能体协作**和**模型提供商扩展**的需求极其强烈，且已有对应的 PR 正在推进：

*   **多智能体编排**:
    *   **需求**: [Issue #2035](https://github.com/agentscope-ai/CoPaw/issues/2035) 和 [Issue #2032](https://github.com/agentscope-ai/CoPaw/issues/2032) 呼吁支持全局技能共享和绑定不同 Bot。
    *   **实现进度**: [PR #2036 (Multi-Agent Orchestration System)](https://github.com/agentscope-ai/CoPaw/pull/2036) 和 [PR #1952](https://github.com/agentscope-ai/CoPaw/pull/1952) 已经提交了后端编排引擎和 API，**极有可能在近期合入主分支**。
*   **模型支持扩展**:
    *   **需求**: [Issue #2029](https://github.com/agentscope-ai/CoPaw/issues/2029) 请求内置 OpenRouter 支持。
    *   **实现进度**: [PR #1192](https://github.com/agentscope-ai/CoPaw/pull/1192) 已经实现了 OpenRouter Provider，正在等待合并。

## 7. 用户反馈摘要
*   **痛点**: 升级体验差（"推倒重来"）、Windows 端口冲突、文件写入中文乱码、飞书消息处理顺序混乱。
*   **场景**: 用户大量使用 CoPaw 进行办公自动化（飞书/钉钉集成）、本地文件管理（Write File 技能）以及尝试构建多 Agent 协作系统。
*   **满意度**: 尽管存在 Bug，用户对多智能体方向的发展表示期待，但对文档（如 [Issue #2008](https://github.com/agentscope-ai/CoPaw/issues/2008) 指出的 YAML Front Matter 缺失）和升级平滑度抱怨较多。

## 8. 待处理积压
以下重要 Issue 长期未获解决或今日仍未有官方明确回复，建议维护者优先关注：

*   **[Issue #1403] 飞书消息去重机制缺失**: 可能导致 Bot 重复回复或逻辑死循环。
*   **[Issue #1131] Windows PowerShell 错误捕获**: 影响 Windows 用户的 Shell 技能使用体验。
*   **[PR #2016] TokenUsageManager 死锁修复**: 这是一个关键的并发性能修复 PR，目前处于 Open 状态，建议尽快 Review 合并以防高负载下服务卡死。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-22)

**分析师**：AI Open Source Analyst
**项目**：EasyClaw (RivonClaw)
**日期**：2026-03-22

---

### 1. 今日速览
EasyClaw 项目今日呈现出**高频发布与高效率维护**的状态。在过去 24 小时内，项目连续发布了 v1.7.3、v1.7.4 和 v1.7.5 三个版本，显示出维护者正在快速推进功能迭代或进行紧急修复。社区方面，虽然新开 Issue 为 0，但成功关闭了 2 个存量 Issue，解决了用户关于功能咨询和运行时错误的具体问题。整体来看，项目处于活跃开发期，维护者对反馈的响应速度极快，但需关注 macOS 平台的签名机制对用户体验的影响。

### 2. 版本发布
今日项目连续推出了 3 个新版本，建议用户**立即升级至最新的 v1.7.5** 以获得最佳稳定性。

*   **v1.7.5 (Latest)**: RivonClaw v1.7.5
*   **v1.7.4**: RivonClaw v1.7.4
*   **v1.7.3**: RivonClaw v1.7.3

**⚠️ 重要变更与安装注意事项 (macOS 用户必读):**
本次系列更新在 Release Notes 中重点强调了 macOS 的安装问题。由于应用未经 Apple 公证，macOS Gatekeeper 会拦截并提示“已损坏”。
*   **受影响系统**：macOS
*   **现象**：提示 "'RivonClaw' is damaged and can't be opened"。
*   **解决方案**：这并非文件损坏，而是安全拦截。用户需通过 **Terminal (终端)** 执行命令移除隔离属性（通常为 `xattr -cr /Applications/RivonClaw.app`，具体请参考 Release 说明）。

### 3. 项目进展
虽然今日无代码合并记录，但从 Issue 关闭情况和版本发布频率推断，维护者在幕后进行了大量修复工作。
*   **问题修复**：成功解决了 Windows 11 环境下 v1.7.2 版本出现的 API 交互错误（Issue #25），该修复很可能已包含在 v1.7.3 及后续版本中。
*   **文档完善**：针对用户对“多浏览器”功能的困惑（Issue #22）进行了回应并关闭工单，表明项目对用户教育的重视。

### 4. 社区热点
今日社区（GitHub Issues）主要围绕以下两个已关闭的话题展开，反映了用户在**功能理解**和**报错排查**上的关注点：

*   **[功能咨询] 多浏览器模式的意义** (Issue #22)
    *   **链接**：[gaoyangz77/rivonclaw Issue #22](https://github.com/gaoyangz77/rivonclaw/issues/22)
    *   **分析**：用户对“多浏览器”功能的定义感到困惑（是多用户隔离还是多平台同步？）。这表明当前 UI 或文档对该功能的解释不够直观，建议维护者在 README 或设置页面增加 Tooltip 说明。
*   **[运行故障] Windows 11 API 响应错误** (Issue #25)
    *   **链接**：[gaoyangz77/rivonclaw Issue #25](https://github.com/gaoyangz77/rivonclaw/issues/25)
    *   **分析**：这是今日最关键的稳定性问题。用户在 Win11 上遇到 `400 [] is too short - 'tools'` 错误，导致 AI 无响应。该问题已被关闭，推测已在最新版本中修复。

### 5. Bug 与稳定性
今日报告并处理的 Bug 主要涉及兼容性和 API 交互逻辑。

*   **🔴 严重 - API 交互失败**
    *   **表现**：Windows 11 v1.7.2 版本，AI 对话返回 `400 [] is too short - 'tools'`，导致功能不可用。
    *   **状态**：Issue #25 已关闭。根据今日连发 3 个版本的节奏，推测此 Bug 为本次紧急更新的核心原因。**建议所有 v1.7.2 用户立即升级。**
*   **🟡 中等 - macOS“应用已损坏”**
    *   **表现**：无法在 macOS 上正常启动。
    *   **状态**：属于环境配置问题，非代码 Bug。Release Notes 已提供修复方案，属于已知痛点。

### 6. 功能请求与路线图信号
*   **信号：账户与隔离机制**
    *   来自 Issue #22 的讨论表明用户对“多浏览器/多实例”的应用场景有较高关注度（如区分工作/生活账号，或隔离 Cookie）。
    *   **预测**：虽然目前只是咨询，但如果此类问题增多，未来版本可能会增强会话管理功能，例如 explicitly（显式地）支持“多账户 Profile 切换”或“数据隔离容器”。

### 7. 用户反馈摘要
从今日的 Issues 互动中可以提炼出以下用户画像与痛点：
*   **真实痛点**：用户对于 Client 端直接报出的 API 错误（如 `400 ... tools`）感到无助，期望客户端能有更友好的错误降级或提示，而不是直接在对话窗口抛出 JSON 错误。
*   **使用场景**：用户尝试在同一设备上通过“多浏览器”功能管理不同的身份或任务流，这是典型的“Power User”需求。
*   **满意度**：虽然有 Bug，但维护者快速关闭 Issue 并发布更新的行为暗示了较高的维护活跃度，对社区信心有正面作用。

### 8. 待处理积压
*   **无明显积压**：今日无新增 Issue，且现有的活跃 Issue 均得到了处理（0 新开 / 2 关闭）。项目目前的 Issue 列表非常干净，维护效率极高。
*   **建议关注**：虽然不是积压，但连续 3 个小版本号的更新可能意味着 v1.7.3/4 引入了新的回归问题。建议密切关注 v1.7.5 发布后 24 小时内的用户反馈。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*