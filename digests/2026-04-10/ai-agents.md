# OpenClaw 生态日报 2026-04-10

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-10 02:48 UTC

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

# OpenClaw 项目动态日报 (2026-04-10)

## 1. 今日速览
OpenClaw 项目今日维持极高的社区活跃度，Issues 与 PR 更新量均达到 500 条，显示出开发者与用户互动的繁荣景象。然而，**PR 积压现象严重**，待合并 PR 高达 340 条，表明代码审查成为项目推进的瓶颈。今日焦点集中在严重的安装阻断问题（模块缺失）和基础功能的稳定性（内存溢出），同时社区正在深入探讨基于去中心化标准的智能体身份验证架构。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
尽管无版本发布，但代码库合并活动活跃，重点修复了渠道稳定性和会话管理问题：

*   **渠道稳定性修复**：合并了 [PR #63916](https://github.com/openclaw/openclaw/pull/63916)，修复了 WhatsApp Web 重连时待发送消息积压的问题，防止重连间隙的消息丢失。
*   **会话存储架构升级**：合并了 [PR #41724](https://github.com/openclaw/openclaw/pull/41724)，引入了可插拔的会话存储适配器 API，允许插件自定义会话存储后端，为多租户和高可用部署提供了基础。
*   **工具调用去重**：合并了 [PR #43370](https://github.com/openclaw/openclaw/pull/43370)，解决了 Gemini 等模型在合并连续助手消息时可能产生的 `tool_use` ID 重复问题，提升了兼容性。
*   **待合并安全补丁**：[PR #50181](https://github.com/openclaw/openclaw/pull/50181) 修复了媒体信任路径漏洞，防止恶意插件通过伪造工具名窃取本地文件，目前急需审查合并。

## 4. 社区热点
*   **智能体身份架构 RFC**：[Issue #49971](https://github.com/openclaw/openclaw/issues/49971) 引发了 77 条深度评论。该提案建议结合 W3C DID 和 ERC-8004 标准为 OpenClaw 引入原生身份验证，这标志着项目正在向更标准化、安全化的去中心化智能体网络演进。
*   **严重安装阻断 Bug**：[Issue #62994](https://github.com/openclaw/openclaw/issues/62994)（29 条评论）和 [Issue #62272](https://github.com/openclaw/openclaw/issues/62272)（17 条评论）报告了安装或更新时找不到 `@buape/carbon` 模块，导致 CLI 无法启动。该问题影响范围广，严重阻碍了新用户上手。
*   **基础命令内存溢出**：[Issue #45064](https://github.com/openclaw/openclaw/issues/45064)（28 条评论）指出 v2026.3.12 版本在执行 `gateway status` 等基础命令时发生 OOM 崩溃，引起用户对版本稳定性的担忧。

## 5. Bug 与稳定性
*   **严重**:
    *   **安装失败**：[Issue #62994](https://github.com/openclaw/openclaw/issues/62994) - v2026.4.8 安装过程中缺少核心模块 `@buape/carbon`。
    *   **内存泄漏**：[Issue #45064](https://github.com/openclaw/openclaw/issues/45064) - 执行基础命令触发 JavaScript heap out of memory。
*   **高危安全**:
    *   **SSRF 防护绕过**：[Issue #25215](https://github.com/openclaw/openclaw/issues/25215)（已关闭）- 新增的 IP 检查逻辑误杀了 Clash 等工具使用的 fake-ip 段。
    *   **工具名称冲突漏洞**：[PR #50181](https://github.com/openclaw/openclaw/pull/50181)（待合并）- 修复了外部插件可重名覆盖内置工具并利用信任路径泄露文件的问题。
*   **功能回归**:
    *   **Tool 执行静默失败**：[Issue #40069](https://github.com/openclaw/openclaw/issues/40069) - Agent 声称执行了工具但实际无调用。
    *   **配置丢失**：[Issue #61847](https://github.com/openclaw/openclaw/issues/61847) - 使用 `--force` 重装会覆盖 systemd 服务文件中的环境变量配置，导致 AWS 凭证失效。

## 6. 功能请求与路线图信号
*   **原生身份验证**：基于 [Issue #49971](https://github.com/openclaw/openclaw/issues/49971) 的讨论，项目可能会在近期启动对去中心化身份（DID）的原生支持，以增强智能体间的信任机制。
*   **熔断保护机制**：[PR #64031](https://github.com/openclaw/openclaw/pull/64031) 引入了社区插件 `rate-limit-circuit-breaker`，旨在解决群聊中因 LLM 限流导致的消息死循环风暴，这将成为提升多智能体协作稳定性的关键组件。
*   **数据抓取增强**：[PR #63668](https://github.com/openclaw/openclaw/pull/63668) 提议集成 MrScraper 插件，显示出项目正在扩展其生态，增强对复杂网页数据的抓取能力。

## 7. 用户反馈摘要
用户反馈集中在**安装与升级体验的脆弱性**上，依赖包缺失导致无法启动的问题引发了大量负面反馈。Docker 用户对技能安装机制表示不满，指出官方镜像缺乏必要的系统依赖（如 `brew`）。此外，**网络配置的复杂性**依然是痛点，涉及代理设置、SSRF 白名单配置以及内网穿透场景下的连通性问题。部分用户对最新模型（如 GPT-5.4）的支持表示困惑，配置可用但运行时报错。

## 8. 待处理积压
*   **PR 审查拥堵**：当前 **340 个待合并 PR** 已构成严重积压，其中包括关键的安全修复和稳定性改进。建议项目维护者优先处理标记为 `security` 或 `crash` 的 PR。
*   **长期未决问题**：[Issue #14593](https://github.com/openclaw/openclaw/issues/14593) 自 2026-02-12 开启至今未解决，Docker 环境下的技能安装失败严重影响容器化部署体验。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-04-10)

## 1. 生态全景
当前 AI 智能体开源生态正处于**从单体应用向架构重构过渡的关键期**。一方面，头部项目面临功能堆叠带来的维护瓶颈，纷纷启动微内核化或模块化拆分；另一方面，随着 GPT-5.x、Gemini 3.x 等新模型发布，**极速适配前沿模型**成为项目竞争力的核心指标。稳定性与安全性问题（OOM、沙箱逃逸、身份验证）取代单纯的功能开发，成为社区关注的焦点。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PRs 活跃度/合并数 | Release | 健康度/状态简评 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 极高 (500+ 更新) | 高 (更新 500+, 待合并 340) | 无 | 🟡 **拥堵期**：社区繁荣但维护瓶颈严重，积压了大量待审查 PR。 |
| **Moltis** | 高 (关闭 14) | 极高 (合并 23) | v20260409.01 | 🟢 **健康**：迭代极快，响应前沿模型需求迅速，维护节奏紧凑。 |
| **CoPaw** | 极高 (50+ 交互) | 高 (合并 33) | v1.0.2 | 🟢 **活跃**：品牌重塑期，插件系统与路由功能增强，渠道稳定性有待修复。 |
| **IronClaw** | 中 (23 更新) | 高 (50 更新, 18 合并) | 无 | 🟢 **重构期**：V2 引擎大刀阔斧重构，移除旧代码，关注架构简化。 |
| **LobsterAI** | 中 | 高 (40 更新, 16 合并) | 无 | 🟡 **震荡期**：架构收拢中，但最新版本 Mac 平台崩溃问题严重。 |
| **Zeroclaw** | 中 | 高 (43 更新) | 无 | 🟡 **调整期**：微内核重构进行中，WSL2 OOM 等资源占用问题突出。 |
| **Hermes Agent**| 中 (42 更新) | 中 (38 待合并, 12 合并) | 无 | 🟢 **成长期**：多智能体架构探索，企业级需求呼声高。 |
| **PicoClaw** | 中 (18 更新) | 中 (24 更新, 14 合并) | 无 | 🟡 **修复期**：WebSocket 连接故障引发社区不满，急需修复兼容性。 |
| **NanoClaw** | 中 | 中 (12 合并) | 无 | 🟢 **稳健**：架构解耦（数据库适配器）进展顺利。 |
| **NanoBot** | 中 (26 更新) | 中 (50 更新, 21 合并) | 无 | 🟢 **维护期**：重点修复内存管理与兼容性，WebUI 需求强烈。 |
| **NullClaw** | 低 (关闭 6) | 中 (合并 22) | v2026.4.9 | 🟢 **健康**：发布新版本，重点增强 OpenAI 兼容性与消息投递。 |
| **EasyClaw** | 低 (无活动) | 低 (无活动) | v1.7.9 | 🔵 **静默**：仅发布版本解决安装问题，无代码交互。 |
| **TinyClaw** | 无 | 无 | 无 | ⚪ **停滞**：无活动。 |

## 3. OpenClaw 在生态中的定位

作为生态中的**核心参照项目**，OpenClaw 展现出典型的“大教堂与集市”特征。

*   **优势**：社区规模最大，生态讨论最深入（如 DID 身份验证 RFC），功能覆盖面最广，是行业标准的风向标。
*   **劣势**：**维护效率成为最大短板**。340 个待合并 PR 远超其他项目总和，代码审查速度跟不上社区贡献速度，导致严重的 PR 积压。同时，基础稳定性问题（安装阻断、OOM）频发，反映出代码质量控制面临挑战。
*   **技术路线差异**：相比 Zeroclaw 和 IronClaw 正在激进地进行微内核拆分，OpenClaw 仍维持整体架构，但正尝试引入更标准化的身份层（DID）来应对去中心化需求。

## 4. 共同关注的技术方向

1.  **架构微内核化与解耦**
    *   **涉及项目**：Zeroclaw (拆分 Crates)、IronClaw (V2 引擎重构)、NanoClaw (数据库适配器)、LobsterAI (移除旧引擎)。
    *   **诉求**：解决编译慢、二进制体积大、模块耦合度高的问题，旨在提升运行效率与可维护性。

2.  **前沿模型极速适配**
    *   **涉及项目**：Moltis (GPT-5.x, Gemini 3.x)、PicoClaw (Codex/GPT-5.4 流式修复)、LobsterAI (百度千帆)、OpenClaw (Gemini 适配)。
    *   **诉求**：项目对 SOTA 模型的支持速度成为核心竞争力，流式输出兼容与推理模型适配是当前热点。

3.  **工具调用与 MCP 协议**
    *   **涉及项目**：IronClaw (沙箱化 MCP)、CoPaw (HTTP MCP)、Hermes Agent (SelfTool v2)。
    *   **诉求**：增强 Agent 对外部工具的调用能力，标准化工具协议，并解决沙箱环境下的安全隔离问题。

4.  **多模态与语音交互**
    *   **涉及项目**：IronClaw、Hermes Agent、Zeroclaw 均提及 Telegram 语音转录或 TTS 集成。
    *   **诉求**：Agent 正从纯文本交互向语音、文件解析等多模态演进。

## 5. 差异化定位分析

*   **功能侧重**：
    *   **OpenClaw & CoPaw**：追求大而全的功能覆盖与插件生态，侧重标准化与通用性。
    *   **Zeroclaw & IronClaw**：侧重底层架构性能、编译效率与安全性（沙箱），吸引硬核开发者。
    *   **Hermes Agent**：明确面向**多智能体协作**与企业级部署（AWS Bedrock 支持），定位更高阶的自动化场景。
    *   **Moltis**：侧重于作为**模型网关**的适配能力，对本地模型和云端新模型的响应速度最快。

*   **目标用户**：
    *   **OpenClaw/Moltis/CoPaw**：面向广泛的开发者与早期采用者，注重易用性。
    *   **Zeroclaw/IronClaw**：面向有定制化需求、关注底层架构的技术极客。

*   **技术架构**：
    *   Rust 系逐渐占据主导，注重高并发与内存安全；而 Hermes 和 CoPaw 等项目则在探索更灵活的 Python/Go 混合架构或重插件化架构。

## 6. 社区热度与成熟度

*   **快速迭代期 (活跃度高，稳定性波动)**：OpenClaw、Zeroclaw、CoPaw。这些项目功能更新快，但近期均暴露出严重的稳定性问题（OOM、连接中断、版本崩溃），需警惕“功能过剩、稳定性欠佳”的陷阱。
*   **质量巩固期 (注重修复与重构)**：IronClaw、LobsterAI、NanoClaw。活跃度中等，主要精力花在偿还技术债务（重构、移除旧代码、修复升级 Bug），架构调整意图明显。
*   **稳定维护期 (健康度高)**：Moltis、NullClaw。迭代节奏稳定，Bug 修复效率高（如 Moltis 当日关闭多个严重 Bug），项目健康度最佳。
*   **萌芽/停滞期**：EasyClaw、TinyClaw、ZeptoClaw。交互低迷，处于维护或停滞状态。

## 7. 值得关注的趋势信号

1.  **PR 积压预警**：OpenClaw 的 340 个待合并 PR 是一个危险信号，表明开源项目的治理模式面临挑战。大型项目可能需要引入更自动化的 CI/CD 审查机制或分权管理模式，否则将成为发展的绊脚石。
2.  **“内存溢出”成高频词**：OpenClaw (OOM)、Zeroclaw (WSL2 OOM)、NanoBot (内存管理) 均报告了内存问题。随着 Agent 任务复杂度提升（长上下文、多轮对话），**内存管理已成为限制 Agent 长期运行的关键瓶颈**。
3.  **企业级安全合规觉醒**：OpenClaw 探讨 DID 身份，Moltis 修复沙箱逃逸，IronClaw 升级 Wasmtime。社区不再满足于简单的功能实现，而是开始深入构建**身份验证、安全隔离与合规执行**的企业级护城河。
4.  **WebUI 与用户产品化**：NanoBot、Hermes Agent 社区强烈呼吁 WebUI，显示出用户不再满足于 CLI 交互，期望 Agent 框架能提供**开箱即用的终端产品体验**，这迫使底层框架向应用层延伸。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-10)

## 1. 今日速览
NanoBot 项目今日保持极高的活跃度，过去 24 小时内共有 26 条 Issue 更新与 50 条 PR 更新。尽管未发布新版本，但开发重心明显向系统稳定性与用户体验优化倾斜，尤其是针对 v0.1.5 版本引入的兼容性问题和内存管理机制的修复。社区对 WebUI、跨平台统一会话及上下文压缩等核心功能的讨论热度不减，显示出用户对产品化成熟度的迫切需求。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 21 个 PR 被合并或关闭，主要进展集中在修复 v0.1.5 引入的回归问题及优化流式交互体验：
- **WebUI 基础设施落地**：[PR #2911](https://github.com/HKUDS/nanobot/pull/2911) 合并，引入了 WebSocket 调试工具的初始设置，为后续构建完整的 WebUI（如 [Issue #2949](https://github.com/HKUDS/nanobot/issues/2949) 讨论）奠定了基础。
- **模型兼容性修复**：[PR #2973](https://github.com/HKUDS/nanobot/pull/2973) 关闭，修复了 Gemma 4 等模型输出 `<thought>` 标签导致的信息泄露问题，确保了用户界面的整洁。
- **内存管理优化**：[PR #2971](https://github.com/HKUDS/nanobot/pull/2971) 关闭，解决了大上下文窗口模型（如 Claude Sonnet 4.6）在 Token 预算未满时无法触发内存合并的问题，防止会话无限增长。
- **流式交互增强**：针对 Telegram 和飞书渠道的流式输出体验进行了多项尝试与修复，如 [PR #2967](https://github.com/HKUDS/nanobot/pull/2967)（Telegram 滚动窗口编辑）和 [PR #2993](https://github.com/HKUDS/nanobot/pull/2993)（飞书流式恢复）。

## 4. 社区热点
1. **[Issue #2949] 🎭 Feature Discussion: Should nanobot have its own WebUI?**
   - **热度**：8 评论，5 👍
   - **分析**：这是今日讨论最热烈的话题。用户目前依赖 CLI 或第三方聊天软件与 Agent 交互，缺乏官方原生 Web 界面。这反映了社区希望 NanoBot 从“开发者工具”向“终端用户产品”转型的强烈诉求。
2. **[Issue #2892] 定时任务的机制 - cron mechanism**
   - **热度**：6 评论
   - **分析**：用户质疑当前定时任务必须重启 Gateway 才能生效的设计逻辑，暴露了在 Agent 动态配置与网关热加载之间的架构短板。
3. **[Issue #2798] [feature request] Unified Session**
   - **热度**：6 评论
   - **分析**：用户希望跨平台（Discord、Telegram 等）共享同一会话上下文，体现了多端同步的高频需求。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的严重 Bug，需重点关注：
- **严重 (数据安全)**：[Issue #2957](https://github.com/HKUDS/nanobot/issues/2957) Dream 模式意外清空 `MEMORY.md` 文件，导致长期记忆丢失。目前暂无修复 PR，建议用户注意备份。
- **严重 (环境兼容)**：[Issue #2917](https://github.com/HKUDS/nanobot/issues/2917) 升级至 v0.1.5 后 Python 环境丢失，导致技能执行失败。
- **中等 (隐私/体验)**：[Issue #2947](https://github.com/HKUDS/nanobot/issues/2947) Runtime Context 元数据被错误发送给用户，干扰对话且可能泄露内部信息。
- **中等 (依赖冲突)**：[Issue #2970](https://github.com/HKUDS/nanobot/issues/2970) 飞书渠道因 `lark-oapi` 模块找不到而启动失败，疑似依赖版本兼容性问题。
- **已修复**：[Issue #2980](https://github.com/HKUDS/nanobot/issues/2980) Dream Git Store 在工作区初始化嵌套 Git 仓库覆盖用户配置的问题，已有修复 [PR #2988](https://github.com/HKUDS/nanobot/pull/2988) 待合并。

## 6. 功能请求与路线图信号
- **上下文压缩与记忆管理**：[Issue #2984](https://github.com/HKUDS/nanobot/issues/2984) 提议基于阈值的自动上下文压缩，结合 [PR #2979](https://github.com/HKUDS/nanobot/pull/2979)（消息计数触发合并），预示着下一版本将重点解决长对话场景下的 Token 消耗与性能问题。
- **运行时模型切换**：[Issue #2975](https://github.com/HKUDS/nanobot/issues/2975) 请求增加 `/model` 命令以在对话中动态切换 LLM，结合已有的 [PR #1760](https://github.com/HKUDS/nanobot/pull/1760)（MCP 工具白名单），显示项目正在增强运行时的灵活性与可控性。
- **自我进化能力**：[PR #2521](https://github.com/HKUDS/nanobot/pull/2521) 提出的 SelfTool v2 允许 Agent 审查和修改运行时状态，若合并将显著提升 Agent 的自主性，符合 Agentic AI 的发展趋势。

## 7. 用户反馈摘要
- **痛点**：v0.1.5 版本升级体验不佳，存在 Python 路径丢失和飞书依赖报错等阻碍性问题。
- **痛点**：Agent 的长期记忆管理存在风险，用户报告出现记忆文件被清空或覆盖的情况。
- **满意点**：有用户称赞 NanoBot 的代码库比 OpenClaw 更整洁易懂 ([Issue #2989](https://github.com/HKUDS/nanobot/issues/2989))。
- **场景**：多渠道用户强烈希望实现“无缝切换”，即在 Telegram 和 Discord 等不同平台间保持对话连续性。

## 8. 待处理积压
- **[Issue #2925](https://github.com/HKUDS/nanobot/issues/2925)**：PIP 安装 API 功能报错 `No matching distribution`，阻碍了部分用户的安装部署，需维护者确认发布配置。
- **[Issue #2641](https://github.com/HKUDS/nanobot/issues/2641)**：Matrix 端到端加密的 Emoji 验证功能缺失，自 3 月 30 日创建以来持续活跃，等待社区贡献。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-10)

## 1. 今日速览
Zeroclaw 项目今日处于**高活跃开发状态**，核心重心正从单体架构向微内核架构演进，标志性的架构重构 RFC（#5574）与对应的 PR（#5559）已提交，旨在解决编译慢与二进制体积过大的问题。虽然无新版本发布，但提交量巨大（43 个 PR 更新），主要集中在功能增强、错误修复及社区技能的迁移。与此同时，社区反馈了大量关于稳定性（OOM、工具调用失败）和兼容性的 Bug，表明当前版本在特定场景下仍需打磨。整体来看，项目正处于 v0.7.0 向 v1.0.0 过渡的关键架构调整期。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
尽管无新版本发布，今日的开发进展依然显著，主要体现在架构重构、功能增强和关键修复三个方面：

*   **架构重构（核心进展）**：
    - PR #5559 提交了极具里程碑意义的重构代码，将庞大的单 Crate 拆分为 10 个工作区 Crate，旨在实现微内核架构。此举将大幅提升编译速度并允许用户按需裁剪子系统，是向 v1.0.0 迈进的关键一步。
    - 对应的架构 RFC（Issue #5574）详细阐述了这一转型计划，目前已引发核心开发者的关注与讨论。

*   **功能增强**：
    - PR #5572 从 OpenClaw 迁移了 52 个社区技能，并增加了 TUI 设置向导，极大丰富了开箱即用的能力。
    - PR #5350 为 Google Workspace 工具添加了辅助命令支持，提升了办公自动化能力。

*   **关键修复**：
    - 针对严重的 WSL2 OOM 问题，PR #5548 提出了通过限制 TTL 和历史记录上限的解决方案。
    - PR #5545 修复了 Dockerfile.debian 无法构建的问题，解决了本地部署障碍。
    - PR #5565 修复了特定 Provider（如 Deepseek V3.2）在工具输出为空时的崩溃问题。

## 4. 社区热点
今日讨论热度最高的话题集中在架构演进与功能缺失上：

*   **[Issue #5574] RFC: ZeroClaw 微内核转型**
    - **热度分析**：作为今日最受关注的话题，该提案直指当前代码库庞大、编译缓慢的痛点。社区对模块化架构抱有极高期待，讨论重点在于如何平滑过渡以及如何处理子系统依赖。
    - 链接：[zeroclaw-labs/zeroclaw Issue #5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574)

*   **[Issue #5509] feat: Telegram 语音消息转录支持**
    - **热度分析**：用户指出竞争对手 OpenClaw 已支持该功能，Zeroclaw 的缺失导致用户体验断层。这反映了用户对多模态交互能力的强烈需求。
    - 链接：[zeroclaw-labs/zeroclaw Issue #5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509)

*   **[Issue #5459] Bug: Ollama Provider 工具调用失效**
    - **热度分析**：这是一个严重的功能性回归问题，Ollama 用户无法使用工具调用，导致 Agent 能力瘫痪，需引起高度重视。
    - 链接：[zeroclaw-labs/zeroclaw Issue #5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459)

## 5. Bug 与稳定性
今日报告了多个严重影响使用体验的 Bug，按严重程度排序如下：

### 严重 (S0 - 数据丢失/安全风险/核心功能阻断)
1.  **[Issue #5542] WSL2 连续 OOM 导致进程被杀**
    - **现象**：在 WSL2 环境下，Zeroclaw 内存占用飙升至 8.5GB 并被系统 OOM Killer 终止，重启后迅速复现。
    - **修复状态**：已有修复 PR #5548，通过设置默认 TTL 和限制种子历史记录大小来缓解。
    - 链接：[zeroclaw-labs/zeroclaw Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)
2.  **[Issue #5537] GPT 文件解析引发持久错误循环**
    - **现象**：发送文件后触发错误响应，随后 Agent 进入死循环，持续消耗配额并报错。
    - **修复状态**：暂无修复 PR。
    - 链接：[zeroclaw-labs/zeroclaw Issue #5537](https://github.com/zeroclaw-labs/zeroclaw/issues/5537)
3.  **[Issue #5535] 飞书附件无法解析**
    - **现象**：未保存的飞书附件无法被正确解析，导致文件处理流程中断。
    - **修复状态**：暂无修复 PR。
    - 链接：[zeroclaw-labs/zeroclaw Issue #5535](https://github.com/zeroclaw-labs/zeroclaw/issues/5535)

### 高危 (S1 - 工作流阻断)
1.  **[Issue #5459] Ollama 工具调用失效**
    - **现象**：`tool_count=0` 导致 Ollama 原生工具调用完全不可用。
    - **修复状态**：暂无修复 PR。
    - 链接：[zeroclaw-labs/zeroclaw Issue #5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459)
2.  **[Issue #5564] 自定义 Provider 空输出导致后续调用失败**
    - **现象**：工具执行成功但 stdout 为空时，Deepseek V3.2 等模型会返回 400 错误。
    - **修复状态**：已有修复 PR #5565，通过标准化空输出来解决。
    - 链接：[zeroclaw-labs/zeroclaw Issue #5564](https://github.com/zeroclaw-labs/zeroclaw/issues/5564)

### 中低危 (S2/S3 - 体验降级/界面问题)
- **[Issue #5562]** Windows Shell 命令执行时闪烁控制台窗口。
- **[Issue #5558]** 飞书通道配置 `ack_reactions=false` 无效。
- **[Issue #5541]** Dockerfile.debian 构建失败（已有修复 PR #5545）。

## 6. 功能请求与路线图信号
结合 Issue 和 PR 活跃度，以下功能极有可能被纳入下一阶段开发：

*   **微内核架构 (已启动)**：Issue #5574 与 PR #5559 表明项目正在落实该重构，预计将在 v1.0.0 版本中实装。
*   **通信渠道增强**：Issue #5573 提出增加 SMTP 邮件发送通道，用于定时任务汇报，填补了当前在“推送到邮件”场景的空白。
*   **性能优化**：Issue #5570 建议在 SQLite 内存后端使用 ANN 索引替代暴力扫描，这对大规模记忆召回性能至关重要，符合 Agent 长期记忆优化的趋势。
*   **Telegram 语音支持**：Issue #5509 呼声较高，填补这一跨平台功能差距是提升竞争力的必要步骤。

## 7. 用户反馈摘要
从今日的 Issues 中可以提炼出以下用户痛点：

*   **资源消耗过大**：WSL2 用户频繁遭遇 OOM，表明 Zeroclaw 在资源受限环境下缺乏有效的内存限制机制，严重影响后台运行的稳定性。
*   **文件处理脆弱**：飞书和 GPT 的文件解析问题（#5537, #5535）表明当前的文件预处理流程不够健壮，容易导致 Agent 陷入错误循环。
*   **配置体验割裂**：配置项拼写错误（如 `allowed_path` vs `allowed_roots`）被静默忽略（Issue #5546 PR 描述中提及），增加了用户调试难度。
*   **模型兼容性细节**：Ollama 和自定义 Provider (Deepseek) 的兼容性问题表明，在适配不同 LLM 后端时，Zeroclaw 对边缘情况（如空输出、工具计数）的处理仍需细化。

## 8. 待处理积压
以下重要 Issue 长期未获解决或今日才暴露但尚未有明确修复方案，建议维护者优先关注：

*   **[Issue #5459] Ollama Provider 工具调用彻底失效**：这是一个阻塞性问题，影响所有依赖 Ollama 本地模型的用户，且目前尚未有对应 PR 提交修复。
*   **[Issue #5537] 错误循环导致工作流瘫痪**：S0 级别的稳定性问题，目前仅报告无修复方案，可能导致用户 Token 消耗异常。
*   **[Issue #5560] CLI 缺少 `sop` 子命令**：虽然被标记为 S2，但这属于文档与代码不一致的问题，容易误导尝试使用 SOP 功能的用户。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-04-10)

## 1. 今日速览
Hermes Agent 今日社区活跃度极高，过去 24 小时内共有 42 条新开/活跃 Issue 和 38 条待合并 PR，显示出项目正处于快速迭代与功能扩展期。尽管本日无新版本发布，但核心开发重心明显向**多智能体架构演进**及**跨平台网关稳定性**倾斜。社区对企业级功能（如 AWS Bedrock 原生支持）和交互体验（Web UI）的呼声强烈，项目整体健康度良好，但较高的 PR 积压量提示代码审核压力正在增加。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 12 个 PR 被合并或关闭，主要修复了严重的数据安全漏洞并扩展了技能生态：

*   **[Critical Fix] 源文件损坏修复 (PR #5325)**：合并了针对 Issue #5322 的修复。此前 PII 脱敏逻辑错误地将脱敏后的 `***` 直接写回磁盘源文件，导致代码损坏。此更新将脱敏行为限制在显示层，保障了用户代码资产安全。
*   **[Auth Fix] Anthropic OAuth 修复 (PR #6854)**：合并修复了 Issue #6475，解决了使用 Claude 订阅认证时报错 "You're out of extra usage" 的问题，修正了 OAuth 流程中 Header 构造和计费错误判断。
*   **[Feature] 可选技能扩展 (PR #3742)**：合并了 SiYuan Note 和 Scrapling 作为可选技能，增强了 Agent 在知识库管理和网页抓取方面的能力。

## 4. 社区热点
*   **多智能体架构规划 (Issue #344)**
    *   **热度**：评论 20 条 | 👍 10
    *   **分析**：作为项目的总领性 Issue，社区正热烈讨论如何将 Hermes 从单智能体升级为具备编排、协作和角色分工的多智能体系统。这标志着项目正在向更复杂的 Agentic Workflow 进化。
*   **原生 AWS Bedrock 支持 (Issue #3863)**
    *   **热度**：评论 5 条 | 👍 11
    *   **分析**：这是今日点赞数最高的 Issue。企业用户强烈要求原生支持 AWS Bedrock，指出目前通过 OpenRouter 中转带来的延迟增加、成本上升及企业功能缺失（如 VPC Endpoint）是主要痛点。
*   **Web UI Gateway 需求 (Issue #501)**
    *   **热度**：评论 4 条
    *   **分析**：用户指出缺乏本地 Web UI 是 Hermes 相比竞品（如 Claude Artifacts）的明显短板，呼吁构建支持流式输出和富媒体渲染的浏览器交互界面。

## 5. Bug 与稳定性
今日报告了多个影响核心流程的 Bug，部分已有修复方案：

*   **[严重] OpenAI Codex Provider 返回空响应 (Issue #5736)**
    *   **状态**：OPEN
    *   **详情**：在调用 gpt-5.x 模型时，Agent Loop 返回空响应导致任务中断，严重影响依赖 Codex 模型的用户。
*   **[严重] 工具名称重复导致执行失败 (Issue #5417)**
    *   **状态**：OPEN
    *   **详情**：工具调用时名称出现重复（如 `write_filewrite_file`），导致工具无法找到，且错误会指数级放大。
*   **[中等] 长消息分片丢失 (Issue #6888, #6892)**
    *   **状态**：Fix Proposed (PR #6891, #6894)
    *   **详情**：在 Telegram/Discord 等平台，长文本被分割后，后续分片被丢弃或延迟处理，导致 Agent 只能看到部分指令。相关平台适配修复 PR 已提交。
*   **[中等] Delegate 任务静默截断 (Issue #6880)**
    *   **状态**：Fix Proposed (PR #6881)
    *   **详情**：批量任务超过 3 个时会被静默截断，模型无法感知任务丢失。

## 6. 功能请求与路线图信号
*   **多智能体通信层**：PR #6895 提出集成 `AgentLair` 以实现持久的邮箱身份和异步收件箱，这为 Issue #344 的多智能体协作提供了底层通信支撑。
*   **CLI 交互优化**：Issue #6898 提议引入类似 Cursor IDE 的输入队列机制，避免用户误触 Enter 打断 Agent 思考，反映了用户对交互体验细节的关注。
*   **语音支持扩展**：PR #6884 新增了 naga.ac 作为 TTS/STT 提供商，补齐了语音交互生态。

## 7. 用户反馈摘要
*   **企业级部署痛点**：用户在 Issue #3863 和 #6598 中反馈，在使用 Azure OpenAI 或 AWS Bedrock 时遇到配置困难或性能损耗，迫切需要原生的企业云服务适配。
*   **网关健壮性不足**：多位用户反馈 Docker 环境下 Cron 失效 (Issue #6797)、Matrix E2EE 解密失败 (Issue #6174) 以及 Feishu 审批流报错 (Issue #6893)，表明 Hermes 在作为长期服务运行时的稳定性仍需打磨。
*   **模型兼容性期待**：Issue #6209 反映自定义端点配置不够灵活，无法手动指定 API 协议（api_mode），导致部分代理网关无法使用。

## 8. 待处理积压
*   **PR 审核压力**：目前有 **38 个待合并 PR**，其中包括关键的消息分片修复 (PR #6891, #6894) 和任务截断修复 (PR #6881)。建议维护者优先处理这些影响基础功能稳定性的 PR。
*   **长期未关闭的功能请求**：Issue #344（多智能体架构）已活跃超过一个月，虽然讨论热烈，但需要更多具体的实现 PR 来推动落地。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-10)

## 1. 今日速览
PicoClaw 项目今日维持高活跃度，社区反馈热烈。过去24小时内共有 18 条 Issue 更新和 24 条 PR 更新，其中大量 PR 为依赖项版本升级，显示项目正处于积极维护阶段。然而，社区反馈集中在 v0.2.5 版本引入的 **WebSocket 连接故障** 以及多通道（飞书/Telegram）下的**消息处理异常**，稳定性面临挑战。值得注意的是，针对 Codex (GPT-5.4) 的流式输出修复和 MCP 工具调用的改进已在 PR 队列中，显示出开发者正致力于修复底层协议与模型兼容性问题。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 14 个 PR 被合并或关闭，主要集中在依赖维护与文档修复，另有 10 个功能性/修复 PR 处于待合并状态。

*   **依赖维护**: 合并了多个 `dependabot` 提交，升级了前端 与后端 (Go SDK, AWS SDK, SQLite) 的核心依赖，确保上游安全与兼容性。
*   **文档修正**: PR #2420 修复了工具文档中关于 JSON 转义语义的描述，解决了 Issue #2337 提出的多提供商兼容性问题。
*   **日志增强**: PR #2414 修复了 Gateway 启动时的错误日志记录问题，提升了排障便捷性。
*   **待合并核心修复**:
    *   PR #2449: 修复 WebUI 中 Agent 推理过程与最终回复混淆的问题，提升用户体验。
    *   PR #2437 & #2443: 针对 Codex/GPT-5.4 模型的流式输出空响应问题进行了多项修复，解决了模型返回内容为空的关键 Bug。
    *   PR #2442: 重构 Skills 注册中心并增加 GitHub 后端支持，这将显著增强技能发现能力，是一个较大的功能变更。

## 4. 社区热点
今日讨论最活跃的话题集中在连接稳定性与消息处理逻辑：

*   **WebSocket 连接中断争议** ([Issue #2319](https://github.com/sipeed/picoclaw/issues/2319), [Issue #2463](https://github.com/sipeed/picoclaw/issues/2463))：用户反馈自 v0.2.5 起 WebSocket 连接失败，导致基于此开发的 Chrome 插件及第三方客户端无法使用。用户 @axwfae 指出端口变更可能导致了不兼容，目前该问题尚未被官方确认修复，引发社区对向后兼容性的担忧。
*   **消息队列处理逻辑** ([Issue #2447](https://github.com/sipeed/picoclaw/issues/2447), [Issue #2464](https://github.com/sipeed/picoclaw/issues/2464))：多通道场景下“只响应最后一条消息”的问题引发关注，用户希望支持任务队列化处理而非简单的覆盖，这反映了用户将 PicoClaw 作为自动化后台服务的诉求。

## 5. Bug 与稳定性
今日 Bug 报告较多，按严重程度排序如下：

*   **🔴 严重**:
    *   [Issue #2319](https://github.com/sipeed/picoclaw/issues/2319) / [Issue #2463](https://github.com/sipeed/picoclaw/issues/2463): WebSocket 客户端无法连接，影响外部集成。目前无对应 Fix PR。
    *   [Issue #2429](https://github.com/sipeed/picoclaw/issues/2429): 控制台模式下输入字符重复，导致无法正常使用。用户情绪较为激动。
*   **🟠 中等**:
    *   [Issue #2448](https://github.com/sipeed/picoclaw/issues/2448): WebUI 直接暴露 Agent 内部思维链，且格式混乱。**已有 Fix PR #2449**。
    *   [Issue #2447](https://github.com/sipeed/picoclaw/issues/2447): 飞书/多通道连续发送消息时丢失早期任务。
    *   [Issue #2439](https://github.com/sipeed/picoclaw/issues/2439): Token 覆盖行为未文档化且破坏外部集成。
*   **🟢 轻微**:
    *   [Issue #2367](https://github.com/sipeed/picoclaw/issues/2367): App 最后一屏标题未跟随语言设置切换。

## 6. 功能请求与路线图信号
*   **SMTP 发送通道** ([Issue #2465](https://github.com/sipeed/picoclaw/issues/2465))：用户提议增加 SMTP 频道以支持定时任务（如周报、检查）发送结果。鉴于其通用性，该功能极有可能被纳入路线图。
*   **MCP 安全配置增强** ([Issue #2444](https://github.com/sipeed/picoclaw/issues/2444))：建议支持在 `.security.yml` 中存储 MCP Server 的环境变量密钥，符合企业级安全加固趋势。
*   **输入体验优化** ([Issue #2376](https://github.com/sipeed/picoclaw/issues/2376))：移动端用户请求将“回车键”映射为换行而非发送，这是即时通讯类 AI 助手的常见痛点。

## 7. 用户反馈摘要
*   **痛点**：用户对 WebSocket 协议的非兼容性变更感到困惑和沮丧，这阻碍了高级用户利用 PicoClaw 搭建自定义客户端。
*   **场景**：大量用户尝试在 Docker、Synology NAS 及 Android Termux 等多样化环境中部署，反馈出 PicoClaw 对文件系统权限（如 Issue #2440 readonly rootfs）和依赖环境有较高要求。
*   **满意度**：用户对项目迭代速度表示认可，但对近期版本（v0.2.5/0.2.6）引入的回归问题表示不满。

## 8. 待处理积压
*   **长期未决的 Telegram/Termux 兼容性问题** ([PR #2209](https://github.com/sipeed/picoclaw/pull/2209))：该 PR 已存在多日，旨在解决 Termux 环境下的 TLS 问题，建议维护者尽快 Review 以支持边缘部署场景。
*   **Skills 重构 PR** ([PR #2442](https://github.com/sipeed/picoclaw/pull/2442))：该 PR 变更较大，涉及技能发现机制，需重点关注其架构合理性，以免影响后续插件生态。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-10)

## 1. 今日速览
NanoClaw 项目今日保持**极高的开发活跃度**，尽管没有发布新版本，但代码合并量显著，过去24小时内共有 **12 个 PR 被合并或关闭**，主要集中在提升系统稳定性、修复跨平台兼容性问题以及优化消息触发机制。社区方面，关于 SSL 证书故障和 OAuth 计费策略变更的讨论热度最高，反映出用户对基础设施稳定性和使用成本的高度关注。整体来看，项目正处于快速迭代修复阶段，架构层面的重构（如数据库适配层）已提上日程。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 12 个 PR 完成合并或关闭，显著提升了系统的健壮性与用户体验：

*   **容器与权限修复**：PR #1713 修复了容器用户权限问题，确保容器内进程能够正确写入会话目录；PR #1698 解决了新群组创建时缺失 API Key 导致的初始化失败问题。
*   **消息触发逻辑优化**：PR #1711 修复了触发词必须位于消息首位的限制，提升了交互自然度；PR #1712 增强了群组消息回复机制，回复机器人消息 now 也能触发响应；PR #1714 自动化处理了心跳检测中的异常消息路由。
*   **稳定性增强**：PR #1572 引入 `AbortController` 以防止 SDK 查询挂起导致容器无响应；PR #1550 增加了端口占用时的重试逻辑，提升了服务崩溃后的恢复能力。
*   **功能迭代**：PR #1710 增强了日历解析能力；PR #1709 完善了模型使用量的日志记录。

## 4. 社区热点
今日讨论最活跃的议题集中在服务可用性与成本控制：

*   **[Issue #1503](https://github.com/qwibitai/nanoclaw/issues/1503)**: **nanoclaw.dev SSL 证书失效**。
    *   **热度**：15 条评论。
    *   **分析**：这是目前最紧迫的用户痛点，证书失效导致用户无法正常访问或配置服务，用户迫切需要基础设施层面的修复。
*   **[Issue #1620](https://github.com/qwibitai/nanoclaw/issues/1620)**: **OAuth Token 计费策略变更警示**。
    *   **热度**：6 条评论。
    *   **分析**：Anthropic 调整了 API 计费策略，使用 OAuth Token 将产生额外费用。用户建议文档应明确推荐使用 API Key 以避免账单意外激增，这涉及到文档更新与最佳实践指引。

## 5. Bug 与稳定性
今日报告了若干关键 Bug，部分已迅速修复：

*   **严重**：**[Issue #1718](https://github.com/qwibitai/nanoclaw/issues/1718)** - 异步调用链缺失 `.catch()` 导致进程挂起。
    *   **详情**：`container-runner.ts` 中未捕获的 Promise 异常会导致整个任务调度器卡死，甚至引发任务重复派发。
    *   **状态**：**未修复**（已有相关修复 PR #1702 处理 IPC 消息丢失，但需确认是否覆盖此场景）。
*   **中等**：**[Issue #1719](https://github.com/qwibitai/nanoclaw/issues/1719)** - Windows 平台脚本路径硬编码错误（已关闭）。
    *   **详情**：`session-cleanup.ts` 硬编码 `/bin/bash` 导致 Windows 环境清理失败。
    *   **状态**：**已关闭**（推测已在其他提交或 PR 中修复）。

## 6. 功能请求与路线图信号
今日出现重要的架构级功能请求，预示项目正在向更灵活的架构演进：

*   **数据库解耦**：**[Issue #1722](https://github.com/qwibitai/nanoclaw/issues/1722)** 提出引入可插拔数据库适配器层。
    *   **进展**：作者 **@dengfuping** 同步提交了 **[PR #1723](https://github.com/qwibitai/nanoclaw/pull/1723)** 实现了基于 SQLite 的适配器重构。这表明项目正计划摆脱单一存储依赖，支持更多数据库后端，极有可能合并。
*   **Slack 多工作区支持**：**[PR #1721](https://github.com/qwibitai/nanoclaw/pull/1721)** 引入了 Slack Socket Mode，支持单实例服务多工作区，这是一个高价值的 Channel 增强。
*   **多租户路由模式**：**[PR #1720](https://github.com/qwibitai/nanoclaw/pull/1720)** 实现了会话委托，允许轻量级路由 Agent 分发任务给专用 Agent，暗示项目正在向多 Agent 协作架构发展。

## 7. 用户反馈摘要
*   **部署体验**：用户在使用 Docker 部署时遇到权限写入问题（#1713 已修复）和 API Key 注入缺失问题（#1698 已修复），表明安装文档或默认配置仍有优化空间。
*   **成本敏感**：用户对 Anthropic 的计费策略变更非常敏感，希望项目能提供明确的指引，避免产生额外费用。
*   **多平台需求**：Windows 用户的报告（#1719）显示项目在非 Linux 环境下的兼容性测试仍需加强。

## 8. 待处理积压
以下重要议题长期未得到最终解决，建议维护者优先关注：

*   **基础设施故障**：[Issue #1503](https://github.com/qwibitai/nanoclaw/issues/1503) (SSL 证书问题) 自 3 月 28 日开启至今已逾两周，严重影响服务可用性，需立即介入。
*   **调度器可靠性**：[PR #1338](https://github.com/qwibitai/nanoclaw/pull/1338) (防止任务重启后重复触发) 自 3 月 22 日开启至今未合并，这是核心调度逻辑的潜在隐患。
*   **MCP 集成**：[PR #1515](https://github.com/qwibitai/nanoclaw/pull/1515) (群组级 MCP 服务器加载) 是一个高价值功能，已提交一周，需维护者 Review 以推进外部工具集成能力。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-10)

## 1. 今日速览
NullClaw 项目今日呈现出极高的维护活跃度与迭代速度。过去 24 小时内，项目成功发布了 **v2026.4.9** 新版本，合并了高达 **22 个 Pull Requests**，并关闭了 6 个 Issues，显示出维护团队正在进行大规模的功能收敛与缺陷修复。本次更新重点增强了 OpenAI API 兼容性、改进了多平台（Telegram/QQ）消息投递的稳定性，并引入了通过 Web 发现安装技能的功能。整体来看，项目正处于功能完善与稳定性提升的关键阶段，健康度极佳。

## 2. 版本发布
**新版本：v2026.4.9**
- **更新亮点**：
  - **文档增强**：新增面向非技术用户的入门指南，支持英文与中文，降低了上手门槛。
  - **分发改进**：Windows 二进制文件现在打包为 `.zip` 归档，方便 Windows 用户解压即用。
- **链接**：[v2026.4.9 Release](https://github.com/nullclaw/nullclaw/releases/tag/v2026.4.9)

## 3. 项目进展
今日共有 22 个 PR 被合并，推进了多个关键模块的演进：

- **API 兼容性与 Provider 支持**：
  - **PR #709**：显著增强 OpenAI 兼容 API 支持，增加了 `session_id` (user) 和自定义 body 参数注入功能，解决了长期困扰用户的 API 适配问题。
  - **PR #728**：修复了自定义 provider（如 Cloudflare AI）主模型解析错误的问题，提升了对复杂 API 路径的兼容性。

- **消息通道稳定性**：
  - **PR #730 & #731**：引入持久化出站投递 Outbox 机制，并增加了瞬时网络错误的重试逻辑，大幅提升了消息投递的可靠性。
  - **PR #732**：专门修复了 QQ 频道在执行耗时任务时连接断开的问题，增加了无 `msg_id` 时的降级重试策略。

- **安装与配置体验**：
  - **PR #735**：实现了通过 `.well-known` URI 发现并安装技能的功能，紧跟 Agent Skills 标准化趋势。
  - **PR #794, #749, #756**：集中修复了 Docker 环境下及交互式初始化时的配置文件格式与路径问题，确保首次配置流程顺畅。

- **安全性与其他**：
  - **PR #752**：将 OTLP 遥测端点默认调整为 HTTPS，增强了安全性。
  - **PR #751**：增加了 Sandbox 安全模块的单元测试覆盖。

## 4. 社区热点
今日社区关注点集中在功能性缺陷与新特性的讨论上：

- **Issue #791 [OPEN]**：关于 Shell 工具无法在物理 Linux 系统上运行的问题。这是一个严重的功能性阻塞，影响了 Linux 用户的体验，目前尚未有修复 PR，需重点关注。
  - 链接：[Issue #791](https://github.com/nullclaw/nullclaw/issues/791)
- **Issue #701 [CLOSED]**：关于 OpenAI API 支持不完整的讨论。该问题通过今日合并的 PR #709 得到彻底解决，反映了社区对 API 标准化对接的强烈需求。
  - 链接：[Issue #701](https://github.com/nullclaw/nullclaw/issues/701)

## 5. Bug 与稳定性
今日报告的新 Bug 集中在核心功能层面，部分旧 Bug 已得到修复：

- **严重**：
  - **Issue #791 [OPEN]**：Shell 无法在物理 Linux 上运行。目前状态为未解决，建议维护者优先排查。
  - **Issue #793 [OPEN]**：System Prompt 错误继承了第一个 subagent 的 prompt。这会导致主 Agent 行为异常，目前尚未修复。

- **已修复**：
  - **Issue #765 [CLOSED]**：交互式初始化生成的 `config.json` 格式压缩、难以阅读。已通过 [PR #794](https://github.com/nullclaw/nullclaw/pull/794) 修复。
  - **Issue #722 [CLOSED]**：QQ 执行耗时任务断连问题。已通过 [PR #732](https://github.com/nullclaw/nullclaw/pull/732) 修复。
  - **PR #781 [CLOSED]**：修复了 GLM-5 等模型返回 `tool_calls: null` 导致的崩溃问题，提升了容错性。

## 6. 功能请求与路线图信号
- **Issue #734 [CLOSED]**：社区请求支持 `.well-known` URI 标准化技能安装。该需求已在 [PR #735](https://github.com/nullclaw/nullclaw/pull/735) 中实现，表明项目正在积极跟进 Agent 生态标准。
- **Issue #701 [CLOSED]**：请求支持 OpenAI API 的 `session_id` 与自定义参数。此功能已在 [PR #709](https://github.com/nullclaw/nullclaw/pull/709) 中落地，显示了项目对开发者自定义需求的响应。

## 7. 用户反馈摘要
- **Linux 用户痛点**：有用户反馈在物理 Linux 环境下 Shell 工具不可用，即使开启了权限，这在服务器部署场景下是一个主要阻碍。
- **配置体验**：用户对交互式初始化生成的配置文件格式混乱表示不满（Issue #765），现已修复。
- **长任务稳定性**：QQ 用户曾面临长任务中断的问题，今日的更新对此进行了针对性优化，提升了即时通讯场景下的鲁棒性。
- **新手友好度**：v2026.4.9 引入的新手指南是对非技术用户反馈的积极响应。

## 8. 待处理积压
- **高优先级**：[Issue #791](https://github.com/nullclaw/nullclaw/issues/791) (Linux Shell 运行失败) 和 [Issue #793](https://github.com/nullclaw/nullclaw/issues/793) (Prompt 继承错误) 为今日新增且未解决的阻断性问题，建议尽快处理。
- **Pending PRs**：目前有 2 个待合并 PR，暂无明确滞留积压的长期 Issue，项目维护节奏良好。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 (2026-04-10)

## 1. 今日速览
IronClaw 项目今日活跃度显著提升，过去 24 小时内共有 50 个 PR 更新与 23 个 Issue 更新，显示出项目处于高频迭代阶段。核心开发重点集中在 **V2 引擎架构重构与清理**（移除旧代码、简化核心抽象）以及 **WASM/工具链稳定性修复**。安全性方面，修复了 Auth URL 校验缺失的潜在风险。自动化集成测试表现抢眼，通过 Live-test 机制验证了 Prometheus 指标等关键功能。整体来看，项目正在经历一次大规模的架构瘦身与健壮性增强，但也暴露了部分用户升级迁移与第三方集成的痛点。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **18 个 PR 合并/关闭**，重点推进了以下方面：

*   **核心依赖升级与安全修复**：PR [#2224](https://github.com/nearai/ironclaw/pull/2224) 成功将 Wasmtime 升级至 43.0.1，解决了旧版本的安全隐患并恢复了 CI 通过率。
*   **V2 引擎与网关健壮性**：PR [#2172](https://github.com/nearai/ironclaw/pull/2172) 修复了认证流程中的重复响应问题，PR [#2178](https://github.com/nearai/ironclaw/pull/2178) 修正了网关对 "yes/no" 等关键词的误解析逻辑，显著改善了对话体验。
*   **部署与构建优化**：PR [#2219](https://github.com/nearai/ironclaw/pull/2219) 优化了 Railway 部署配置，确保预打包 WASM 扩展的正确构建。
*   **架构简化启动**：PR [#2192](https://github.com/nearai/ironclaw/issues/2192) 与 [#2193](https://github.com/nearai/ironclaw/issues/2193) 拉开了代码重构序幕，计划移除 V1 引擎代码并大幅简化核心概念，预计将减少约 3.5 万行代码。

## 4. 社区热点
*   **架构简化提案**：Issue [#2192](https://github.com/nearai/ironclaw/issues/2192) 提议将现有的 7 个顶层抽象概念简化为 3 个（Tools, Channels, Skills），旨在降低开发者的认知负荷与贡献门槛，引发社区对架构复杂度的讨论。
*   **Prometheus 指标需求**：Issue [#2184](https://github.com/nearai/ironclaw/issues/2184) 及其衍生的自动化测试 Issue（如 [#2204](https://github.com/nearai/ironclaw/issues/2204)）受到关注，显示社区对系统可观测性有强烈需求，目前该功能已通过自动化测试验证。
*   **数据库迁移难题**：Issue [#1328](https://github.com/nearai/ironclaw/issues/1328) 反映了 v0.19.0 升级过程中 PostgreSQL 迁移校验失败的问题，已获得 3 个点赞，是近期用户升级的主要阻碍之一。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，部分已有修复方案：

*   **🔴 高危 - Auth URL 安全漏洞**：Issue [#2206](https://github.com/nearai/ironclaw/issues/2206) 指出 V2 引擎未对 `auth_url` 进行协议校验，存在 XSS/恶意跳转风险。
    *   *状态*：Fix PR [#2215](https://github.com/nearai/ironclaw/pull/2215) 已提交，正在审核中。
*   **🟠 中危 - MCP 工具名称不规范**：LLM 调用带连字符的工具名（如 `notion-search`）时会失败。
    *   *状态*：Fix PR [#2227](https://github.com/nearai/ironclaw/pull/2227) 已提交，规范化命名。
*   **🟠 中危 - 私有网络配置受阻**：Issue [#1754](https://github.com/nearai/ironclaw/issues/1754) 报告在内网部署时，系统强制要求 HTTPS，导致自托管模型无法连接。
*   **🟡 低危 - 注册表识别错误**：Issue [#2221](https://github.com/nearai/ironclaw/issues/2221) 报告 `ironclaw registry list` 误将空目录识别为注册表。Fix PR [#2222](https://github.com/nearai/ironclaw/pull/2222) 已提交。

## 6. 功能请求与路线图信号
*   **语音转录支持**：Issue [#2223](https://github.com/nearai/ironclaw/issues/2223) 请求集成 Whisper Large v3 以支持 Telegram 语音消息转录，填补多模态交互空白。
*   **沙箱化 MCP 支持**：PR [#2214](https://github.com/nearai/ironclaw/pull/2214) 正在实现容器化工人节点中的 MCP 客户端支持，这将增强插件系统的安全隔离能力。
*   **阿里云模型支持**：PR [#1446](https://github.com/nearai/ironclaw/pull/1446) 提议增加阿里云百炼模型提供商，表明社区希望扩展对非 OpenAI 标准模型的支持。

## 7. 用户反馈摘要
*   **OAuth 集成体验差**：多个 Issue（如 [#902](https://github.com/nearai/ironclaw/issues/902), [#1992](https://github.com/nearai/ironclaw/issues/1992)）反映 Google OAuth 流程频繁受阻或报错，用户在连接 Google Suite 和 Gmail 时面临较高门槛。
*   **Slack 集成缺失与断裂**：Issue [#1997](https://github.com/nearai/ironclaw/issues/1997) 和 [#1998](https://github.com/nearai/ironclaw/issues/1998) 指出 Slack 应用不可用或配置流程混乱，导致机器人无响应。
*   **文档可见度低**：Issue [#1174](https://github.com/nearai/ironclaw/issues/1174) 表明用户难以找到有效的配置文档，项目组已通过迁移文档仓库（Issue [#2188](https://github.com/nearai/ironclaw/issues/2188)）来改善此情况。

## 8. 待处理积压
*   **长期未合并的大型 PR**：PR [#1446](https://github.com/nearai/ironclaw/pull/1446)（阿里云支持）已停滞约 20 天，需维护者进行兼容性审查。
*   **Slack 集成问题未决**：Issue [#1997](https://github.com/nearai/ironclaw/issues/1997) 和 [#1998](https://github.com/nearai/ironclaw/issues/1998) 自 4 月初开启至今仍为 Open 状态，影响多渠道部署体验。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-10)

## 1. 今日速览
LobsterAI 项目今日开发活跃度极高，主要集中在架构重构与稳定性修复上。过去 24 小时内共有 40 条 PR 更新，其中 16 条已合并，显示出团队正在密集推进代码迭代。重点动向包括移除旧的 `yd-cowork` 引擎以收拢架构，以及新增百度千帆大模型支持。尽管开发端进展迅速，但社区反馈显示近期版本存在较为严重的稳定性问题，特别是 Mac 平台上的启动崩溃和会话功能异常，需引起维护者高度重视。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 16 个 PR 被合并，主要推进了以下工作：

*   **新模型与功能支持**：
    *   **新增百度千帆大模型支持**：PR [#929](https://github.com/netease-youdao/LobsterAI/pull/929) 已合并，扩展了项目的大模型生态。
    *   **POPO 扫码登录**：PR [#1612](https://github.com/netease-youdao/LobsterAI/pull/1612) 实现了 POPO 渠道的二维码扫码登录流程。
*   **Bug 修复与体验优化**：
    *   **定时任务修复**：PR [#1613](https://github.com/netease-youdao/LobsterAI/pull/1613) 修复了保存定时任务后脏状态未重置的问题。
    *   **SQLite 数据库修复**：PR [#1609](https://github.com/netease-youdao/LobsterAI/pull/1609) 修复了内存迁移仅在成功时标记的问题，防止数据丢失。
    *   **UI 细节**：PR [#1605](https://github.com/netease-youdao/LobsterAI/pull/1605) 和 [#1604](https://github.com/netease-youdao/LobsterAI/pull/1604) 分别修复了 MCP 列表样式和深色模式下的 UI 显示问题。
*   **架构重构（待合并）**：
    *   PR [#1611](https://github.com/netease-youdao/LobsterAI/pull/1611) 正在推进移除 `yd-cowork` 旧引擎链路，这将显著简化架构，统一收拢至 `openclaw` 引擎。

## 4. 社区热点
今日社区讨论主要集中在以下几个 Issues 上：

*   **Issue #284 - Electron 启动失败**：该 Issue 更新于今日，涉及在 Arch Linux + Awesome WM 环境下应用无法启动的问题。尽管是旧 Issue，但今日再次活跃，表明跨平台兼容性（尤其是非标准桌面环境）仍是用户痛点。
    *   链接：[netease-youdao/LobsterAI Issue #284](https://github.com/netease-youdao/LobsterAI/issues/284)
*   **Issue #1614 - 集成 Hermes Agent 建议**：用户提议将 `hermes-agent` 作为可选引擎。这反映了用户对可插拔 Agent 架构的期待，希望项目能支持更多样的 Agent 后端。
    *   链接：[netease-youdao/LobsterAI Issue #1614](https://github.com/netease-youdao/LobsterAI/issues/1614)

## 5. Bug 与稳定性
今日报告了多个严重影响使用的 Bug，且集中在最新的 2026.04.08 版本：

*   **[严重] 启动崩溃 (Mac)**：Issue [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) 报告了 Mac (Intel) 平台更新最新版本后首次启动即崩溃的问题。目前尚无修复 PR 关联，属于阻塞性问题。
*   **[严重] 核心功能不可用**：Issue [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) 报告会话功能和定时任务功能均无法正常执行，可能影响核心业务流程。
*   **[一般] 国际化遗漏**：Issue [#1586](https://github.com/netease-youdao/LobsterAI/issues/1586) 指出切换语言后，部分 UI 文本（如“条款”、“工具风格”）未翻译。
*   **[已修复] 潜在数据风险**：PR [#1597](https://github.com/netease-youdao/LobsterAI/pull/1597)（Open）和 [#1602](https://github.com/netease-youdao/LobsterAI/pull/1602)（Open）分别修复了 SQLite 外键约束失效和消息序列号并发竞争问题，这些是提升系统稳定性的重要修复。

## 6. 功能请求与路线图信号
*   **Agent 引擎扩展**：Issue #1614 提出的 `hermes-agent` 集成请求，结合 PR #1611 中移除旧引擎、统一 `openclaw` 架构的趋势，预示着项目未来可能更倾向于模块化的 Agent 接入方式。
*   **会话持久化配置**：PR [#1610](https://github.com/netease-youdao/LobsterAI/pull/1610) 和 [#1575](https://github.com/netease-youdao/LobsterAI/pull/1575) 添加了 OpenClaw 会话保持时长的配置，表明项目正在精细化控制会话生命周期，以满足不同场景的留存需求。

## 7. 用户反馈摘要
*   **痛点**：近期版本（2026.04.08）稳定性堪忧，Mac 用户遭遇闪退，核心会话功能受阻，建议开发团队在推进重构的同时加强回归测试。
*   **场景**：用户在 Linux 平铺式窗口管理器环境下运行遇到阻碍，说明 Electron 应用在不同 Linux 发行版及 WM 环境下的兼容性测试覆盖不足。
*   **期待**：用户希望能有更多样化的 AI Agent 引擎选择，不局限于当前的 OpenClaw 或 OpenAI 兼容方案。

## 8. 待处理积压
*   **Issue #284**：Linux 特定环境启动失败问题长期未彻底解决，建议维护者关注 Electron 在不同 Window Manager 下的兼容性调试。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-10)

## 1. 今日速览
Moltis 项目今日呈现极高的维护活跃度，展现了“日清日结”的高效迭代节奏。过去24小时内，项目成功发布了版本 `20260409.01`，并以此为基础完成了惊人的 **23 个 PR 合并** 与 **14 个 Issue 关闭**，仅遗留 1 个新开 Issue。核心进展集中在**扩大模型生态支持**（Gemini 3.x, GPT-5.x, Alibaba Cloud）与**修复关键基础设施 Bug**（BOOT.md 注入失效、inotify 资源耗尽、沙箱逃逸风险）。整体来看，项目健康度极佳，对前沿模型和本地部署场景的支持响应极为迅速。

## 2. 版本发布
- **[Release 20260409.01](https://github.com/moltis-org/moltis/releases/tag/20260409.01)**
  本次版本更新内容丰富，属于功能性增强与稳定性修复的重要版本。
  - **核心更新**：新增对 **Alibaba Cloud Coding Plan**、**Gemini 3.x** 系列模型的支持，完善了对 GPT-5.x 推理模型的适配；修复了 MiniMax Provider 系统提示词丢失的严重问题。
  - **重要修复**：解决了 BOOT.md 内容未注入、ExecTool 配置项失效、Linux 安装包路径错误等阻碍性问题。
  - **迁移注意**：针对 Linux 用户，文档已修正安装包路径，建议通过 `install.sh` 脚本进行部署以确保正确性。

## 3. 项目进展
今日共合并 23 个 PR，显著提升了项目在多模型支持和工具链稳定性方面的表现：

- **模型生态扩展**：
  - [PR #621](https://github.com/moltis-org/moltis/pull/621)：新增 Alibaba Cloud Coding Plan provider，支持 Qwen3 等 9 个模型。
  - [PR #605](https://github.com/moltis-org/moltis/pull/605)：正式加入 Gemini 3.x 模型静态目录及推理支持。
  - [PR #613](https://github.com/moltis-org/moltis/pull/613)：引入 `ModelCapabilities` 结构体，重构模型能力注册机制，为 GPT-5.x 等复杂模型提供更好的底层支持。

- **关键 Bug 修复**：
  - [PR #614](https://github.com/moltis-org/moltis/pull/614)：**修复了 BOOT.md 内容从未被注入系统的严重 Bug**，恢复了启动消息功能。
  - [PR #617](https://github.com/moltis-org/moltis/pull/617)：修复了 `[tools.exec]` 配置项（超时/输出限制）被忽略的问题，增强了沙箱执行的可控性。
  - [PR #608](https://github.com/moltis-org/moltis/pull/608)：优化了文件监听逻辑，修复了禁用的技能文件也会占用 inotify slots 导致资源耗尽的问题。

- **基础设施优化**：
  - [PR #609](https://github.com/moltis-org/moltis/pull/609)：增加了对 Podman 容器后端的支持检测。
  - [PR #610](https://github.com/moltis-org/moltis/pull/610)：将工作区文件（AGENTS.md）截断上限从 6K 提升至 50K，并支持配置化。

## 4. 社区热点
今日社区互动频繁，主要集中在前沿模型适配和特定 Provider 的兼容性问题上：

- **Issue [#601](https://github.com/moltis-org/moltis/issues/601) & [#603](https://github.com/moltis-org/moltis/issues/603)**：用户请求支持 GPT-5.x 和 Gemini 3.x 的推理特性。项目组响应极快，Issue 当天创建即当天关闭，相关功能已通过 PR #605 和 PR #613 合并上线。这表明项目对前沿 AI 模型的跟进速度非常快。
- **Issue [#597](https://github.com/moltis-org/moltis/issues/597)**：关于 LM Studio 推理流不显示的问题引发了讨论。这是一个典型的本地模型用户痛点，项目组随后通过 PR #620 增加了回归测试覆盖，确保流式推理内容的正确展示。
- **Issue [#579](https://github.com/moltis-org/moltis/issues/579)**：针对频道 DM 令牌限制耗尽的会话轮换功能请求已被合并实现（通过相关架构优化），显示了项目对大规模对话场景的优化关注。

## 5. Bug 与稳定性
今日修复了多个中高危级别的 Bug，显著提升了系统稳定性：

- **🔴 高危 (已修复)**：[Issue #594](https://github.com/moltis-org/moltis/issues/594) - `boot-md` hook 长期未生效，导致 BOOT.md 内容被完全忽略。Fix: [PR #614](https://github.com/moltis-org/moltis/pull/614)。
- **🔴 高危 (待处理)**：[Issue #626](https://github.com/moltis-org/moltis/issues/626) - **新开 Issue**，报告沙箱 exec tool 可绕过 `dcg-guard` hook，存在安全隐患。目前尚无修复 PR，需维护者重点关注。
- **🟠 中危 (已修复)**：[Issue #596](https://github.com/moltis-org/moltis/issues/596) - 监听所有技能文件导致 inotify slots 耗尽。Fix: [PR #608](https://github.com/moltis-org/moltis/pull/608)。
- **🟠 中危 (已修复)**：[Issue #616](https://github.com/moltis-org/moltis/issues/616) - Exec Tool 忽略超时配置，可能导致命令无限期挂起。Fix: [PR #617](https://github.com/moltis-org/moltis/pull/617)。
- **🟠 中危 (已修复)**：[Issue #592](https://github.com/moltis-org/moltis/issues/592) - MiniMax Provider 系统角色被拒问题复发。Fix: [PR #611](https://github.com/moltis-org/moltis/pull/611) & [PR #622](https://github.com/moltis-org/moltis/pull/622)。

## 6. 功能请求与路线图信号
- **多模型推理支持**：用户对 GPT-5 和 Gemini 3 的快速支持请求（Issue #601, #602, #603）已被纳入本次发布，显示路线图高度贴合用户对 SOTA 模型的需求。
- **本地模型体验优化**：针对 LM Studio (Issue #597) 和 Ollama (Issue #615 404 错误) 的修复和测试覆盖，表明项目正在强化作为“本地优先”AI 助手的定位。
- **依赖更新**：[PR #604](https://github.com/moltis-org/moltis/pull/604) (Dependabot) 仍在待合并状态，涉及 jsonwebtoken 等核心库升级，预计将在下一批次合并。

## 7. 用户反馈摘要
- **痛点：配置未生效**：用户报告 `moltis.toml` 中的 `exec` 超时配置无效（Issue #616），反映出用户对精细化控制工具行为有强需求，且对配置文件的“静默忽略”感到困惑。
- **痛点：文档滞后**：Linux 安装文档中的文件名错误（Issue #595）导致安装失败，这对新用户非常不友好，已在今日修复。
- **场景：混合云部署**：用户同时使用 Ollama/LM Studio（本地）和 OpenAI/MiniMax/Alibaba（云端），反馈集中在 Provider 兼容性细节上（如 404 错误、流式输出异常），说明 Moltis 被大量用作统一 AI 网关。

## 8. 待处理积压
- **🚨 紧急安全风险**：[Issue #626](https://github.com/moltis-org/moltis/issues/626) 关于沙箱 exec tool 绕过 hook 的问题今日新开，涉及潜在的安全逃逸风险，建议立即排查。
- **依赖更新积压**：[PR #604](https://github.com/moltis-org/moltis/pull/604) 涉及 4 个依赖库的更新，建议尽快完成 CI 验证并合并，以保持依赖树的健康。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-10)

## 1. 今日速览
CoPaw 项目今日保持**极高活跃度**，社区互动频繁。过去 24 小时内 Issues 交互量达 50 条，PR 更新量达 49 条，且项目发布了 **v1.0.2** 正式版本。开发重心主要集中在**品牌重塑（CoPaw -> QwenPaw）**与**功能增强（插件系统、LLM 路由）**两方面。Bug 修复效率较高，但多渠道接入（微信、飞书、QQ）的稳定性问题仍是用户反馈焦点。整体来看，项目正处于功能迭代与生态完善的关键阶段。

## 2. 版本发布
今日发布 **v1.0.2** 正式版及 **v1.0.2-beta.2** 测试版。

- **v1.0.2**
  - **核心更新**：增加了从工作区 `plugins/` 文件夹安装扩展的能力 ([#3101](https://github.com/agentscope-ai/CoPaw/pull/3101), [#3131](https://github.com/agentscope-ai/CoPaw/pull/3132))，这将极大提升本地开发的灵活性。
  - **其他**：Release Note 内容存在截断，建议关注后续文档补充。
- **v1.0.2-beta.2**
  - **变更**：主要为网站热修复及相关回滚操作，涉及 PR [#3112](https://github.com/agentscope-ai/CoPaw/pull/3112) 与 [#3115](https://github.com/agentscope-ai/CoPaw/pull/3115)。

## 3. 项目进展
今日共有 33 个 PR 合并或关闭，项目推进迅速，主要集中在底层重构与新功能落地：

- **品牌重构**：项目正在进行重命名工作，环境变量配置已从 `COPAW` 迁移至 `QWENPAW` ([#3171](https://github.com/agentscope-ai/CoPaw/pull/3171))，CLI 层面的重命名 PR ([#3189](https://github.com/agentscope-ai/CoPaw/pull/3189)) 正在审核中。
- **核心功能增强**：
  - **LLM 路由**：新增 Web 端与 CLI 的 LLM 路由配置功能，支持模型切换与降级策略 ([#1089](https://github.com/agentscope-ai/CoPaw/pull/1089), [#1209](https://github.com/agentscope-ai/CoPaw/pull/1209))。
  - **模型选择**：Web 控制台新增模型 ID 自动补全下拉框，优化配置体验 ([#3175](https://github.com/agentscope-ai/CoPaw/pull/3175))。
- **重要修复**：
  - 修复了 Console 频道 `filter_thinking` 配置无效的问题，现在流式输出可正确过滤思考过程 ([#3185](https://github.com/agentscope-ai/CoPaw/pull/3185))。
  - 修复了 HTTP MCP 相关错误 ([#3167](https://github.com/agentscope-ai/CoPaw/pull/3167))。

## 4. 社区热点
今日社区讨论主要集中在**功能扩展**与**多渠道稳定性**：

- **[Issue #280](https://github.com/agentscope-ai/CoPaw/Issue/280)** (评论 25 条)：讨论“哪些技能和 MCP 应作为内置功能”。社区强烈希望能预装常用 Skills/MCPs 以实现开箱即用，减少配置成本。
- **[Issue #2291](https://github.com/agentscope-ai/CoPaw/Issue/2291)** (评论 54 条)：“Help Wanted”任务列表。大量贡献者正在认领任务，显示社区参与度极高。
- **[Issue #2868](https://github.com/agentscope-ai/CoPaw/Issue/2868)** (评论 11 条)：微信渠道消息接收不全问题，反映了用户在 IM 集成场景下的痛点。
- **[Issue #3124](https://github.com/agentscope-ai/CoPaw/Issue/3124)** (评论 3 条)：建议在会话界面直接渲染图表（折线图、饼图），对标 ChatGPT 等竞品的数据分析能力。

## 5. Bug 与稳定性
今日报告的 Bug 集中在渠道连接与配置兼容性，部分已有修复方案：

- **严重 (High)**：
  - **[Issue #3136](https://github.com/agentscope-ai/CoPaw/Issue/3136)**：QQ/WeChat 频道在停止时阻塞异步事件循环长达 8-10 秒，导致应用无响应。
    - *状态*：已有修复 PR [#3188](https://github.com/agentscope-ai/CoPaw/pull/3188) 待合并，通过强制关闭 WebSocket 解决。
  - **[Issue #3183](https://github.com/agentscope-ai/CoPaw/Issue/3183)**：`execute_shell_command` 在 Ubuntu 环境下执行基础命令（如 ls）失败。
- **中等**：
  - **[Issue #3063](https://github.com/agentscope-ai/CoPaw/Issue/3063)**：飞书长连接出现异步锁错误，导致对话无响应（已关闭，可能已修复）。
  - **[Issue #3174](https://github.com/agentscope-ai/CoPaw/Issue/3174)**：Console 流式输出未过滤 thinking blocks。**已修复** ([#3185](https://github.com/agentscope-ai/CoPaw/pull/3185))。
- **配置/兼容性**：
  - **[Issue #3162](https://github.com/agentscope-ai/CoPaw/Issue/3162)**：阿里云编码模型切换时报错 422。
  - **[Issue #3163](https://github.com/agentscope-ai/CoPaw/Issue/3163)**：Docker 部署升级导致数据丢失，用户需注意数据卷持久化。

## 6. 功能请求与路线图信号
- **图表可视化 ([#3124](https://github.com/agentscope-ai/CoPaw/Issue/3124))**：用户希望支持 Markdown 图表或图片内嵌，提升数据分析体验。这符合 AI Agent 向多模态工具发展的趋势。
- **会话管理优化 ([#2936](https://github.com/agentscope-ai/CoPaw/Issue/2936))**：请求增加“会话置顶”功能，解决多智能体协作时会话窗口混乱的问题。
- **浏览器伪装 ([#3075](https://github.com/agentscope-ai/CoPaw/Issue/3075))**：`browser_visible` 模式触发人机验证，用户希望减少自动化特征。开发者在 PR [#3164](https://github.com/agentscope-ai/CoPaw/pull/3164) 中已优化浏览器启动策略，预计下版本将改善此问题。

## 7. 用户反馈摘要
- **痛点**：
  - **配置门槛高**：自定义模型供应商配置复杂，常出现前后端连接状态不一致（如 [Issue #3161](https://github.com/agentscope-ai/CoPaw/Issue/3161)）。
  - **渠道稳定性**：微信、飞书、QQ 等渠道的连接稳定性是最大槽点，涉及消息丢失、锁死等问题。
  - **Docker 升级**：用户对 Docker 升级导致的数据丢失表示担忧，急需官方明确的持久化指南。
- **满意点**：
  - 开源社区响应迅速，特别是对 "Help Wanted" 任务的认领机制表示欢迎。
  - 新增的 LLM 路由功能 ([#1089](https://github.com/agentscope-ai/CoPaw/pull/1089)) 受到关注，解决了模型 API 不稳定时的自动切换需求。

## 8. 待处理积压
- **品牌重塑 PR**：[#3189](https://github.com/agentscope-ai/CoPaw/pull/3189) 正在进行大规模重命名，需维护者重点关注合并时机与破坏性变更说明。
- **旧版问题**：[Issue #2831](https://github.com/agentscope-ai/CoPaw/Issue/2831) 关于 Web Console 中无法停止 Write File 循环的问题仍处于 Open 状态，涉及用户体验安全，建议优先处理。
- **测试基建**：[PR #2506](https://github.com/agentscope-ai/CoPaw/pull/2506) 建立了 Channel 契约测试，对于解决当前频发的渠道连接问题至关重要，建议尽快合并。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 (2026-04-10)

**分析师：** AI 智能体与个人 AI 助手开源项目分析组
**数据来源：** github.com/gaoyangz77/easyclaw

---

### 1. 今日速览
EasyClaw 项目今日整体呈现“低交互、高交付”的状态。虽然过去 24 小时内 Issues 与 Pull Requests 无任何更新动态，社区讨论趋于平静，但项目组默默完成了 v1.7.9 版本的发布工作。这表明项目目前处于稳定维护期，核心开发活动集中在版本迭代与体验优化上，而非新功能开发或故障应急。整体项目健康度良好，无积压的紧急问题。

### 2. 版本发布
今日项目发布了 **v1.7.9 (RivonClaw v1.7.9)** 版本，本次更新主要聚焦于 macOS 平台的安装体验优化。

*   **更新重点**：针对 macOS 用户常见的“应用已损坏无法打开”问题，Release Notes 中提供了详细的故障排除指引。该问题通常源于 macOS Gatekeeper 对未签名或非公证应用的拦截，并非软件本身代码逻辑错误。
*   **破坏性变更**：无代码层面的破坏性变更。
*   **迁移注意事项**：macOS 用户在升级或安装此版本时，若遇到拦截提示，需通过终端执行命令移除隔离属性（Release 文档中已给出指引开头），无需进行配置迁移。

> **链接**：[Release v1.7.9: RivonClaw v1.7.9](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.9)

### 3. 项目进展
今日无合并或关闭的 Pull Requests。项目的实质性进展主要体现在 v1.7.9 版本的发布流程中，开发重点在于解决分发层面的签名认证痛点，确保用户在 macOS 环境下的可用性。项目整体向前迈进了坚实的一小步，侧重于“可用性”而非“新特性”。

### 4. 社区热点
过去 24 小时内无活跃的 Issues 或 PRs 讨论。社区情绪平稳，暂无争议性话题或热点诉求爆发。

### 5. Bug 与稳定性
*   **今日新增 Bug**：0 条。
*   **稳定性分析**：虽然今日无 Bug 报告，但 v1.7.9 的发布说明间接揭示了 macOS 平台存在一个高频的“伪 Bug”（Gatekeeper 拦截）。该问题虽非代码缺陷，但对用户初次使用的稳定性感知影响较大。目前官方已提供文档级解决方案，暂无相关 Fix PR 提交记录，推测可能通过构建脚本优化或文档引导解决。

### 6. 功能请求与路线图信号
*   **新功能请求**：今日无新增功能请求。
*   **路线图判断**：由于缺乏活跃的 Issue 讨论，短期内项目路线图不明朗。预计下一阶段工作仍将围绕现有功能的稳定性维护及跨平台兼容性适配展开。

### 7. 用户反馈摘要
从今日发布的 v1.7.9 说明中可以提炼出以下用户反馈信号：
*   **痛点**：macOS 用户对应用签名状态极为敏感，Gatekeeper 拦截是阻碍新用户上手的主要门槛。
*   **满意度**：开发者及时更新文档说明解决安装阻碍，体现了对用户体验的关注，但缺乏代码层面的签名解决方案可能仍会让部分非技术用户感到困惑。

### 8. 待处理积压
*   **当前状态**：根据现有数据，Issues 列表为空或无活跃项，暂无明显积压的待处理任务。
*   **建议**：鉴于今日活跃度较低，建议维护者关注 v1.7.9 发布后的实际下载反馈，特别是 macOS 用户在应用签名问题上的后续反应，以便评估是否需要引入自动化代码签名流程。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*