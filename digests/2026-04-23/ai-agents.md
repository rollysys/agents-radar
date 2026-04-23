# OpenClaw 生态日报 2026-04-23

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-23 02:52 UTC

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

# OpenClaw 项目动态日报 (2026-04-23)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，过去24小时内 Issues 与 PR 更新量均达到 500 条，显示社区互动频繁且开发节奏紧凑。项目刚刚发布了 **v2026.4.21** 版本，重点修复了插件运行时依赖问题并升级了图像生成模型支持。然而，新版本似乎引入了较严重的**依赖缺失回归问题**，导致大量用户在安装或升级后遭遇模块找不到的错误（如 `@larksuiteoapi/node-sdk`），社区反馈集中在安装稳定性和跨平台兼容性上。整体来看，项目功能迭代迅速（如 OpenWrt 支持、OpenTelemetry 集成），但版本质量管控（特别是包管理与依赖树）面临较大挑战。

## 2. 版本发布
**版本号**: `v2026.4.21` (发布于 2026-04-21，今日持续发酵)

**更新内容**:
- **Changes**: OpenAI 图像生成默认捆绑模型切换为 `gpt-image-2`，并在文档中增加了 2K/4K 分辨率提示。
- **Fixes**: 修复了捆绑插件的运行时依赖项问题 (`Plugins/doctor: repair bundled plugin runtime dependencies`)。

**迁移注意事项**:
- 新版本虽然声称修复了插件依赖，但根据今日 Issue 反馈，**全球 npm 安装可能存在依赖未正确打包的情况**。
- 建议用户在升级后密切监控启动日志，若出现 `Cannot find module` 错误，可能需要手动执行 `npm rebuild` 或等待补丁修复。

## 3. 项目进展
今日共有 **257 条 PR 更新（合并/关闭）**，主要进展集中在稳定性修复与新平台支持：

- **[Closed] 移除 Codex CLI 认证导入路径** ([PR #70390](https://github.com/openclaw/openclaw/pull/70390)): 修复了从 Codex CLI 导入 OAuth 认证时的所有权问题，防止认证状态漂移，提升了安全性。
- **[Open] OpenWrt 扩展支持** ([PR #70444](https://github.com/openclaw/openclaw/pull/70444)): 社区正在推进对 OpenWrt 路由器设备的原生支持，通过 WebSocket 桥接实现设备管理，标志着 OpenClaw 向边缘计算/物联网场景拓展。
- **[Closed] 修复 OpenAI-completions 流式工具调用参数畸形** ([PR #70294](https://github.com/openclaw/openclaw/pull/70294)): 修复了自托管 Kimi/SGLang 模型在流式传输工具调用时的参数解析错误，增强了非标准 OpenAI 接口的兼容性。
- **[Open] 统一端到端 OpenTelemetry 追踪** ([PR #70424](https://github.com/openclaw/openclaw/pull/70424)): 正在引入完整的可观测性支持，这对多智能体系统的调试与监控至关重要。

## 4. 社区热点
今日讨论最热烈的话题集中在跨平台客户端需求与严重的安装故障：

1.  **Linux/Windows 原生客户端需求** ([Issue #75](https://github.com/openclaw/openclaw/issues/75))
    - **热度**: 评论 91 条 | 👍 71
    - **诉求**: 用户强烈呼吁提供 Linux 和 Windows 的原生桌面客户端，目前仅有 macOS/iOS/Android 支持。维护者 @steipete 已标记 `help wanted`，社区亟待贡献者介入。
2.  **实时语音对话支持** ([Issue #7200](https://github.com/openclaw/openclaw/issues/7200))
    - **热度**: 评论 21 条 | 👍 23
    - **诉求**: 希望通过 Twilio/WebRTC 集成实现双向流式语音通话，目前仅支持文本和预录音文件，阻碍了“电话助手”场景的落地。
3.  **本地模型部署 HTTP 422 错误** ([Issue #38902](https://github.com/openclaw/openclaw/issues/38902))
    - **热度**: 评论 22 条
    - **痛点**: CentOS 7 环境下配置本地 Qwen/DeepSeek 模型时报参数错误，反映了私有化部署的兼容性痛点。

## 5. Bug 与稳定性
今日报告了多起严重的**回归性 Bug**，主要集中在 v2026.4.21 版本的依赖管理上：

### 严重
- **[Bug] 全新安装/升级后缺少依赖导致无法启动** ([Issue #70198](https://github.com/openclaw/openclaw/issues/70198), [Issue #70346](https://github.com/openclaw/openclaw/issues/70346))
    - **现象**: 升级到 v2026.4.21 后，系统报错 `Cannot find module '@larksuiteoapi/node-sdk'`。即便用户未启用飞书插件，安装向导也会因此崩溃。
    - **原因**: 似乎与 v2026.4.21 的依赖打包策略有关，`doctor --fix` 亦无法修复。
    - **状态**: Issue 激增，属于阻断性故障。

### 高危
- **[Bug] `openclaw doctor --fix` 静默删除自定义配置** ([Issue #69631](https://github.com/openclaw/openclaw/issues/69631))
    - **现象**: 修复命令执行严格的 Schema 校验，会直接剔除未识别的 JSON 字段，导致用户自定义配置丢失。
    - **建议**: 暂时避免在生产环境随意执行 `--fix` 参数。

### 中等
- **[Bug] WhatsApp 通道媒体回复重复发送** ([Issue #68056](https://github.com/openclaw/openclaw/issues/68056)) - 已有相关修复 PR ([PR #70441](https://github.com/openclaw/openclaw/pull/70441))。
- **[Bug] Matrix 通道升级后无法启动** ([Issue #67936](https://github.com/openclaw/openclaw/issues/67936)) - 回归问题，依赖包丢失。

## 6. 功能请求与路线图信号
结合今日活跃的 Issues 与 PR，以下方向可能纳入近期规划：

- **多智能体协作增强** ([Issue #40245](https://github.com/openclaw/openclaw/issues/40245)): 请求支持多智能体共享工作区目录，解决目前必须物理拷贝文件的痛点。结合 PR 中的 durable jobs 和 trajectory bundle 功能，多智能体框架正在逐步成型。
- **敏感数据脱敏** ([Issue #64046](https://github.com/openclaw/openclaw/issues/64046)): 用户提出 API Key 和 Token 在配置文件及日志中明文存储的安全隐患，鉴于安全类 PR 的频繁合并，此功能有望提上日程。
- **全局规则即时同步** ([Issue #70036](https://github.com/openclaw/openclaw/issues/70036)): 请求通过注入 `userContent` 实现管理员规则的毫秒级生效，反映了企业级管理的刚需。

## 7. 用户反馈摘要
从评论中提炼出的真实声音：
- **痛点**: "升级像开盲盒" —— 频繁的依赖缺失问题（如 Issue #70198）让用户对升级心存顾虑；"Doctor 治病致残" —— 用户抱怨修复工具破坏了配置文件。
- **场景**: 大量用户尝试在本地部署 DeepSeek-R1 等大模型，但频繁遭遇参数校验错误 (Issue #38902)，说明私有化部署体验仍有待优化。
- **认可**: 社区对 OpenWrt 支持 (PR #70444) 和 OpenTelemetry 集成 (PR #70424) 表示欢迎，认为这是项目走向成熟基础设施的标志。

## 8. 待处理积压
以下重要议题长期悬而未决，建议维护者优先关注：

- **Issue #75**: Linux/Windows 客户端需求已存在数月，作为第二大热门 Issue，严重限制了桌面端用户群体的扩展。
- **Issue #27996**: Cron 调度器在编辑时无法重新计算下次运行时间，可能导致定时任务失效，属于核心调度逻辑缺陷。
- **Issue #31331**: Docker 容器内 Sandbox 无法正确挂载工作区，阻碍了容器化部署的深度使用，长期未解决。

---
**分析师结语**: OpenClaw 正处于功能快速扩张期（从 IoT 到 Multi-Agent），但今日爆发的"依赖地狱"问题暴露了发版流程中的自动化测试覆盖不足，特别是对 npm 全局安装路径和特定扩展依赖的检测缺失。建议项目组暂时放缓新功能合并，优先修复安装程序的稳定性，以恢复社区信心。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比日报 (2026-04-23)

## 1. 生态全景
当前 AI 智能体开源生态正处于从"功能堆砌"向"架构重构"转型的关键期，**多智能体协作、边缘端部署、长上下文记忆管理**成为核心竞争点。头部项目（如 IronClaw, NanoClaw）正通过 v2.0 架构重写解决状态同步与扩展性问题，而轻量级项目（如 ZeptoClaw）则致力于在资源受限环境下实现智能体落地。尽管功能迭代迅猛，但**依赖管理混乱与安装体验割裂**（OpenClaw, Zeroclaw）成为今日生态普遍痛点，显示出部分项目在工程化质量上的滞后。

## 2. 各项目活跃度对比

| 项目名称 | Issue 活跃度 | PR 活跃度 | 版本发布 | 健康度/状态 | 核心动向 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 🔥 极高 (500+) | 🔥 极高 (257) | v2026.4.21 | ⚠️ **风险** | 新版本引发严重依赖回归，社区负面反馈强烈 |
| **NanoBot** | ✅ 高 (18关闭) | ✅ 高 (24合并) | 无 | 🟢 **健康** | 问题关闭率高，架构优化与多平台集成并行 |
| **Zeroclaw** | 🔶 中 (50) | 🔶 中 (39) | 无 (v0.7.4前夕) | 🟡 **波动** | S1级Bug阻塞本地模型使用，正重构Schema |
| **Hermes Agent**| 🔥 高 (37新开) | ✅ 高 (8合并) | 无 | 🟢 **健康** | 聚焦国产模型兼容，修复多起稳定性Bug |
| **PicoClaw** | 🔶 中 (8新开) | ✅ 高 (11合并) | **v0.2.7** | 🟢 **健康** | 发布正式版，解决配置痛点，引入新搜索 |
| **NanoClaw** | 🔥 高 | 🔥 极高 (16合并) | 无 (v2.0前夕) | 🟡 **重构中** | v2.0架构大合并，代码变更巨大，引入微信生态 |
| **NullClaw** | 🔵 低 (5关闭) | 🔵 低 (0合并) | 无 | 🟢 **稳定** | 修复协议层Bug，关注边缘设备性能 |
| **IronClaw** | 🔥 高 | 🔥 极高 (50更新) | 无 | 🟡 **波动** | Engine v2重构期，存在严重安装与数据污染Bug |
| **LobsterAI** | 🔶 中 | ✅ 高 (12合并) | 无 | 🟢 **健康** | 强化多平台IM支持，解决Windows安装痛点 |
| **TinyClaw** | ⚪ 无 | ⚪ 无 | 无 | ⚫ **静默** | 无活动 |
| **Moltis** | ✅ 中 (5关闭) | ✅ 高 (10合并) | **v20260422.01** | 🟢 **健康** | 快速迭代，修复兼容性，引入Home Assistant |
| **CoPaw (QwenPaw)**| 🔥 高 (40处理) | 🔥 极高 (27合并) | **v1.1.3** | 🟢 **活跃** | 品牌重塑，发布备份系统与Plan Mode |
| **ZeptoClaw** | 🔶 中 (18) | ✅ 高 (22合并) | 无 | 🟢 **极优** | 安全加固，引入Liquid AI，严格控制二进制体积 |
| **EasyClaw** | ⚪ 无 | ⚪ 无 | v1.8.5/6 | 🟡 **静默** | 修复macOS安装问题，社区零互动 |

## 3. OpenClaw 在生态中的定位

**优势与定位**：
OpenClaw 凭借其极高的 Issue 与 PR 吞吐量，依然是生态中**流量最大、用户基数最广**的通用型智能体框架。其核心优势在于**功能覆盖广**（从 IoT/OpenWrt 支持到 OpenTelemetry 集成），试图打造"全场景"智能体底座。相比 ZeptoClaw 的"极致轻量"路线，OpenClaw 更倾向于"大而全"的平台化路线。

**技术路线差异**：
- **对比 NanoClaw/IronClaw**：OpenClaw 在多智能体架构（如 durable jobs, trajectory bundle）的探索上与竞品同步，但在**版本质量管控**上明显落后。IronClaw 和 NanoClaw 正通过 v2.0 重写解决架构债务，而 OpenClaw 今日的"依赖地狱"暴露了其在工程化治理上的短板。
- **对比 ZeptoClaw**：ZeptoClaw 强调安全审计与边缘计算（6MB 限制），OpenClaw 虽然也推进 OpenWrt 支持，但臃肿的依赖树使其难以适应资源受限环境。

**社区风险**：
今日 OpenClaw 社区出现的"Doctor 治病致残"和"升级开盲盒"反馈，显示出社区信任度正在受损。相比之下，NanoBot 和 ZeptoClaw 的高问题关闭率和有序迭代显示出更健康的社区治理能力。

## 4. 共同关注的技术方向

1.  **多智能体编排与自治能力**
    *   **涉及项目**: IronClaw, CoPaw, NanoBot, OpenClaw。
    *   **趋势**: IronClaw 引入 Mission Tools 实现任务自主规划；CoPaw 集成 Plan Mode；NanoBot 推进 durable jobs。社区正从单一对话机器人向具备"任务拆解-执行-回溯"能力的多智能体系统演进。

2.  **本地模型与边缘计算适配**
    *   **涉及项目**: OpenClaw, ZeptoClaw, LobsterAI, Hermes Agent。
    *   **趋势**: OpenClaw 推进 OpenWrt 支持；ZeptoClaw 集成 Liquid AI 以降低内存占用；LobsterAI 支持 LM Studio。在云端 API 成本高企与隐私需求驱动下，"本地化"和"边缘化"已成确定性趋势。

3.  **记忆系统的精细化控制**
    *   **涉及项目**: Zeroclaw, CoPaw, ZeptoClaw。
    *   **趋势**: Zeroclaw 修复 Memory 会话丢失；CoPaw 用户强烈请求物理删除对话以防上下文污染；ZeptoClaw 引入审计追踪。如何高效、安全地管理长上下文记忆是当前智能体落地的核心瓶颈。

4.  **多平台 IM 集成**
    *   **涉及项目**: LobsterAI, Moltis, NanoBot。
    *   **趋势**: Discord, Telegram, WeChat, Feishu 的多通道支持已成标配，甚至出现对 Signal 等隐私通讯的集成需求。

## 5. 差异化定位分析

-   **功能侧重**:
    -   **IronClaw & NanoClaw**: 定位于**企业级/开发者平台**，重点攻克 Engine v2 重构、成本预算控制、状态同步，旨在成为生产级 Agent OS。
    -   **ZeptoClaw**: 定位于**边缘与安全优先**，极致追求二进制体积与审计能力，适合嵌入式与高安全场景。
    -   **OpenClaw**: 定位于**通用全场景**，覆盖面最广但近期质量波动大，适合尝鲜与快速原型验证。
    -   **CoPaw (QwenPaw)**: 定位于**终端用户助手**，强调桌面端体验、备份恢复与国产模型生态绑定。

-   **目标用户**:
    -   **开发者**: OpenClaw, NanoBot, IronClaw（API 完善，架构复杂）。
    -   **极客/边缘计算爱好者**: ZeptoClaw, NullClaw。
    -   **普通用户/企业员工**: CoPaw, LobsterAI, EasyClaw（注重 GUI、安装包、IM 集成）。

## 6. 社区热度与成熟度

-   **快速迭代/高风险区 (活跃且波动)**:
    **OpenClaw**, **IronClaw**, **NanoClaw**。这三个项目代码提交极其活跃，但均面临架构重构带来的阵痛。OpenClaw 表现为发布版质量失控，IronClaw 和 NanoClaw 表现为大量重构代码积压待合并，存在潜在的回归风险。

-   **稳健发展区 (活跃且健康)**:
    **NanoBot**, **ZeptoClaw**, **Moltis**, **CoPaw**。这些项目保持着较高的 PR 合并率，且 Issue 处理及时。特别是 ZeptoClaw 的 CI 体积门禁和 NanoBot 的高关闭率，显示出优秀的工程素养和社区治理能力。

-   **孵化/维护区 (低活跃或静默)**:
    **TinyClaw**, **EasyClaw**, **NullClaw**。TinyClaw 和 EasyClaw 活动极低，处于维护或停滞状态；NullClaw 活动较低但稳步修复 Bug，属于小众精品维护模式。

## 7. 值得关注的趋势信号

1.  **"依赖地狱"警示工程化短板**
    OpenClaw 的 `Cannot find module` 灾难与 Zeroclaw 的 Provider 配置失效表明，随着项目依赖树复杂化，**安装体验与依赖治理**正成为阻碍用户留存的第一道高墙。建议各项目引入类似 ZeptoClaw 的严格构建门禁或 Moltis 的环境变量解析增强。

2.  **Agent 的"成本意识"觉醒**
    IronClaw 提出的 "USD 预算限制" 替代 "迭代次数限制"，以及 ZeptoClaw 对离线模型的支持，标志着开源社区开始重视 **Agent 运行成本的可预测性**。这将是企业级落地的重要考量指标。

3.  **国产模型生态的深度融合**
    Hermes Agent (阿里巴巴/Xiaomi)、CoPaw (QwenPaw)、LobsterAI 等项目均在第一时间适配 DeepSeek、Kimi、Qwen 等国产模型，甚至出现了专门针对国产模型计费点的适配需求。**国产化替代**已成为国内开源智能体项目的默认配置。

4.  **"记忆管理"即将迎来突破**
    CoPaw 用户对"记忆压缩导致信息丢失"的吐槽，以及 Zeroclaw 的 Memory 会话丢失 Bug，揭示了当前"黑盒记忆"的痛点。未来版本预计将向 **可视化记忆编辑、选择性持久化、梦境日志解释** 方向演进。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-23)

## 1. 今日速览
NanoBot 项目今日保持极高的活跃度，呈现出高效的迭代节奏。过去 24 小时内，项目共处理了 **41 个 Pull Requests**（其中 24 个已合并/关闭），并解决了 **18 个 Issues**，问题关闭率极高，显示出维护团队强健的处理能力。今日重点集中在多平台适配（Telegram、Discord、Feishu）、底层架构优化（OpenTelemetry 集成、Provider 容错）以及用户体验修复。整体来看，项目正处于功能快速扩张与稳定性打磨并行的健康阶段。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 **24 个 PR** 被合并或关闭，主要推进了以下关键模块的发展：

*   **多平台集成增强**：
    *   **WebUI 图片支持**：PR #3393 合并，引入了图片附件功能（文件选择、粘贴、拖拽），完善了多媒体交互体验。
    *   **Unix Socket 支持**：PR #2059 合并，新增了基于 Unix socket 的 JSON-RPC 通道，为本地程序化调用 Agent 提供了轻量级接口。
    *   **Feishu 渲染优化**：PR #3307 合并，修复并增强了飞书通道的 LaTeX 渲染支持。
    *   **Discord 线程修复**：PR #3397 修复了 Discord 线程回复的权限隔离问题，目前处于 Open 状态等待最终合并。

*   **核心 Bug 修复**：
    *   PR #2037 修复了开启 `restrictToWorkspace` 后内置技能无法访问的问题，提升了安全模式下的可用性。
    *   PR #3387 修复了 Anthropic 模型处理工具返回图片时的格式转换错误。
    *   PR #3383 修复了配置解析中 `exclude=True` 字段丢失的问题，确保了 `DreamConfig` 等配置的完整性。

*   **架构与可观测性**：
    *   PR #3173（Open）正在推进 OpenTelemetry 追踪集成，旨在为 LLM 调用和工具执行提供全链路可观测性支持，这是一个重要的基础设施升级。

## 4. 社区热点
今日社区讨论集中在机制设计与异常处理上：

*   **定时任务机制探讨** ([Issue #2892](https://github.com/HKUDS/nanobot/issues/2892))：该 Issue 虽已关闭，但引发了关于 Agent 与 Gateway 生命周期解耦的深入讨论。用户指出当前创建定时任务后需重启 Gateway 才能生效的不便，这反映了社区对"热加载"及 Agent 独立运行能力的强烈需求。
*   **Provider 容灾需求** ([Issue #3376](https://github.com/HKUDS/nanobot/issues/3376))：用户提出希望在单一 Provider 故障时自动切换到备用 Provider/Model 的 Failover 机制。这表明随着用户对稳定性要求的提高，单点依赖已无法满足生产环境需求。
*   **社区推广尝试**：社区成员尝试建立微信交流群（Issues #3394, #3395, #3396），虽然 Issue 被迅速关闭，但显示了用户群体对即时交流渠道的渴望。

## 5. Bug 与稳定性
今日报告的问题主要集中在模型兼容性和工具调用层面，部分已得到修复：

*   **[严重] LangSmith 集成失效** ([Issue #2493](https://github.com/HKUDS/nanobot/issues/2493))：由于最新版本移除了 `litellm_provider.py`，导致 LangSmith 集成中断。目前该 Issue 仍处于 Open 状态，标记为 `regression`，需维护者优先排查兼容性方案。
*   **[中等] 工具调用错误** ([Issue #3390](https://github.com/HKUDS/nanobot/issues/3390))：用户在 Telegram 通道执行工具调用时遇到 "Sorry, I encountered an error"，导致后续消息无法送达 LLM。目前原因不明，需进一步排查。
*   **[已修复] 多子智能体重复回复** ([Issue #3377](https://github.com/HKUDS/nanobot/issues/3377))：已修复。
*   **[已修复] GitHub Copilot GPT-5.x 模型兼容性** ([Issue #3360](https://github.com/HKUDS/nanobot/issues/3360))：针对新模型 API 端点的适配问题已解决。

## 6. 功能请求与路线图信号
结合今日 Open 的 Issues 与 PRs，识别出以下路线图信号：

*   **高可用与容灾**：Issue #3376 提出的 Provider Failover 机制是生产环境的关键需求。虽然目前已有 Retry 机制，但跨 Provider 的容灾将是下一阶段的重点。
*   **交互体验增强**：
    *   PR #3398 提议增加 Telegram 内联键盘按钮，这将大幅提升 Bot 的交互便捷性。
    *   PR #2526 正在修复 `/stop` 指令导致上下文丢失的问题，旨在保留用户意图，提升可控性。
*   **精细化管理**：
    *   PR #3400 提议允许用户控制 "Dream" 模块是否拥有修改 `USER.md` 和 `SOUL.md` 的权限，反映了用户对 AI 自主修改身份文件的担忧，倾向于更精细的权限控制。

## 7. 用户反馈摘要
*   **痛点**：
    *   **配置切换繁琐**：用户反馈运行时切换 Provider 困难 ([Issue #1954](https://github.com/HKUDS/nanobot/issues/1954))。
    *   **模型兼容性碎片化**：不同 Provider（如 OpenAI Codex, DeepSeek, Qwen）在 JSON 格式、API 端点上存在细微差异，导致报错频发（如 Issues #2469, #3328），用户期望更统一的接口封装。
*   **满意点**：
    *   社区对 WebUI 持续更新（如图片上传功能）表示欢迎。
    *   对于 Bug 的响应速度（如多子智能体重复回复问题在 24 小时内被 Close）给予了正面反馈。

## 8. 待处理积压
*   **LangSmith 回归问题** ([Issue #2493](https://github.com/HKUDS/nanobot/issues/2493))：此问题已存在一段时间且标记为 `regression`，目前尚未有明确的修复 PR，建议维护者尽快确认修复方案或提供临时迁移指南。
*   **API Key 缓存问题** ([Issue #173](https://github.com/HKUDS/nanobot/issues/173))：这是一个长期存在的 Stale Issue，涉及配置热更新失效，影响用户体验，建议在后续版本中重构配置加载逻辑。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-23)

## 1. 今日速览
Zeroclaw 项目今日呈现高活跃度开发状态，过去 24 小时内 Issues 更新达 50 条，PR 更新达 39 条，显示社区与开发团队互动频繁。尽管无新版本发布，但围绕 **v0.7.4 里程碑** 的准备工作正在紧锣密鼓地进行，大量 PR 集中在架构重构、多渠道适配修复以及安全增强上。今日重点关注包括严重的 Provider 配置失效问题、多渠道交互体验优化以及 Docker 镜像构建缺陷的修复。

## 2. 版本发布
无新版本发布。开发重心正倾向于 v0.7.4 的里程碑整合。

## 3. 项目进展
今日共有 7 个 PR 合并/关闭，主要集中在关键组件的修复与协议完善：

*   **ACP 协议修复落地 ([PR #5958](https://github.com/zeroclaw-labs/zeroclaw/pull/5958)):** 修复了 ACP 服务器日志注入问题并补全了协议规范，解决了与 `agentic.nvim` 等客户端的兼容性问题。
*   **Provider 配置键修复 ([PR #5993](https://github.com/zeroclaw-labs/zeroclaw/pull/5993)):** 修正了 `Config::apply_named_model_provider_profile` 逻辑，确保 provider fallback 键的正确镜像，提升了配置系统的可靠性。
*   **安全依赖更新 ([PR #6011](https://github.com/zeroclaw-labs/zeroclaw/pull/6011)):** 提交了针对 `rustls-webpki` 的安全修复，解决了潜在的 CRL 解析 panic 风险 (RUSTSEC-2026-0104)。
*   **Docker 构建修复推进 ([PR #5996](https://github.com/zeroclaw-labs/zeroclaw/pull/5996), [PR #5983](https://github.com/zeroclaw-labs/zeroclaw/pull/5983)):** 两个 PR 分别修复了官方 Docker 镜像中缺失 Web Dashboard 文件的问题，确保容器化部署的即开即用性。

## 4. 社区热点
*   **[Issue #5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) [CLOSED]:** 本条 Issue 虽已关闭，但以 11 条评论成为今日讨论焦点。话题涉及 `runtime.kind="native"` 是否应绕过 Docker 执行 Shell 工具的安全边界问题，反映了用户对沙箱逃逸与本地执行便利性之间的权衡关注。
*   **[Issue #5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) [OPEN]:** S1 级严重 Bug，`llamacpp` 对象配置被忽略，导致用户无法正常使用本地模型，引发社区对 Provider 模块稳定性的担忧。
*   **[Issue #5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) [OPEN]:** 关于多租户环境下的 RBAC（基于角色的访问控制）功能请求，标志着用户开始将 Zeroclaw 应用于更复杂的企业级多租户场景。

## 5. Bug 与稳定性
*   **[S1 - 致命] Provider 忽略 llamacpp 配置 ([Issue #5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815)):** 升级到 Schema v2 后，`providers.models.llamacpp` 配置失效，导致本地模型工作流完全阻塞。目前尚无修复 PR。
*   **[S1 - 致命] Anthropic Provider 兼容性错误 ([Issue #6007](https://github.com/zeroclaw-labs/zeroclaw/issues/6007)):** Provider 强制发送 `temperature` 参数导致 Claude 4.7 API 请求失败。
*   **[S1 - 致命] Web Dashboard 不可用 ([Issue #5959](https://github.com/zeroclaw-labs/zeroclaw/issues/5959)):** Docker 镜像构建时遗漏 `web/dist` 目录。**已有修复 PR**: [PR #5996](https://github.com/zeroclaw-labs/zeroclaw/pull/5996)。
*   **[S2 - 严重] 安全策略误拦截 Git 命令 ([Issue #5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809)):** Shell 策略将 `git -C` 参数误判为 `-c`（大小写混淆），导致合法 Git 操作被拦截。
*   **[S2 - 严重] Memory 会话记忆丢失 ([Issue #5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550)):** 自动保存的会话记忆因 `session_id` 不匹配导致无法被召回，影响 Agent 的上下文连贯性。

## 6. 功能请求与路线图信号
*   **Schema v3 迁移准备 ([Issue #5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947), [PR #6019](https://github.com/zeroclaw-labs/zeroclaw/pull/6019)):** 项目正在推进 Schema v3 的破坏性变更，旨在一次性解决配置字段的遗留问题，为未来架构铺路。
*   **PostgreSQL Memory 后端回归 ([PR #6016](https://github.com/zeroclaw-labs/zeroclaw/pull/6016)):** 重新引入曾被移除的 PG 后端，强烈信号表明项目正在恢复对多实例、共享存储部署模式的支持。
*   **WASM 执行桥完善 ([Issue #5912](https://github.com/zeroclaw-labs/zeroclaw/issues/5912)):** 基于 Extism 的 WASM 插件系统正在收尾，这将极大扩展 Zeroclaw 的插件生态能力。
*   **多渠道工具确认交互 ([PR #6010](https://github.com/zeroclaw-labs/zeroclaw/pull/6010)):** 正在为 Discord、Slack、Signal 等渠道实现 `request_approval`，解决非 CLI 环境下工具调用无法交互确认的痛点。

## 7. 用户反馈摘要
*   **安全策略配置复杂且易误伤:** 用户反馈 Shell 安全策略存在误拦截（如 Git 命令）或环境变量前缀语法不支持等问题，对安全边界的透明度和可配置性提出了更高要求。
*   **Docker 部署体验受损:** 多个反馈指出官方 Docker 镜像存在文件缺失或配置加载问题（Issue #5959, #5244），影响了“开箱即用”的体验。
*   **本地模型连接稳定性:** 用户对 `llamacpp` 等本地模型的集成报错较多，期望提升 Provider 层对不同模型后端的兼容鲁棒性。
*   **非 CLI 渠道的交互缺失:** 用户在使用 Telegram 等渠道时，发现 `always_ask` 工具被静默拒绝而非弹出确认，这限制了 Agent 在即时通讯平台上的实用性。

## 8. 待处理积压
*   **Issue #5877 (v0.7.4 里程碑追踪):** 作为版本发布的总控 Issue，包含大量待办事项，建议维护者持续跟进各子任务的进度。
*   **Issue #2324 (非 CLI 渠道工具确认缺失):** 虽有 PR #6010 正在处理，但该 Issue 存在时间较长，建议尽快合并相关 PR 以修复用户体验断点。
*   **Issue #5895 (内存限制静默失效):** 关于 Cgroups 内存限制在内核未启用时的静默失效问题，目前处于 `in-progress`，建议尽早修复以避免安全合规风险。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 (2026-04-23)

## 1. 今日速览
Hermes Agent 项目今日保持高度活跃，共处理了 **50 条 Issue 更新** 和 **50 条 PR 更新**，其中新开/活跃 Issue 37 条，关闭 13 条。虽然今日无新版本发布，但社区修复了多个关键稳定性问题（如网关 PID 锁死、摘要模型崩溃），并有 8 个 PR 成功合并。讨论热点集中在多模型提供商支持（Alibaba、Xiaomi）以及核心架构重构（平台适配器注册机制）。整体来看，项目正处于快速迭代期，稳定性和多平台兼容性是当前的主要优化方向。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 8 个 PR 被合并/关闭，主要集中在 Bug 修复和开发者体验优化：

*   **[FIX] 阿里云 MaaS 端点识别 (PR #14272)**：修复了阿里云模型服务端点（如 `maas.aliyuncs.com`）无法被正确识别为已知提供商的问题，避免了回退到默认上下文长度导致的错误。
*   **[FEAT] 委托就绪检查工具 (PR #14296)**：新增了 `delegation-readiness` 检查功能，帮助用户快速诊断子代理委托配置是否正确，并提供了修复脚本。
*   **[FIX] 网关 PID 僵尸进程问题 (Issue #14203, #14209)**：解决了 macOS 上网关因文件描述符耗尽崩溃后，`--replace` 参数无法清理僵尸 PID 文件导致的服务启动失败循环。
*   **[FIX] 微信图片发送失败 (Issue #13769)**：修复了 `send_image_file()` 因参数名不匹配导致图片发送静默失败的问题。
*   **[FIX] 摘要生成崩溃 (Issue #10721)**：修复了在摘要模型不可用时回退主模型生成摘要引发的 `NameError`。

## 4. 社区热点
今日讨论最活跃的议题反映了用户对**模型兼容性**和**架构扩展性**的强烈关注：

*   **[Issue #3956] OpenAI Codex 空响应陷入重试循环 (7条评论)**
    *   **链接**: [NousResearch/hermes-agent Issue #3956](https://github.com/NousResearch/hermes-agent/issues/3956)
    *   **分析**: 用户反馈当 Codex 返回有效空响应时，Hermes 错误地将其判定为“未完成”并重试 3 次，最终发送错误提示。这影响了机器人的静默行为逻辑，是一个亟需修复的逻辑 Bug。
*   **[Issue #2220] 请求支持阿里巴巴 Coding Plan 专用提供商 (4条评论)**
    *   **链接**: [NousResearch/hermes-agent Issue #2220](https://github.com/NousResearch/hermes-agent/issues/2220)
    *   **分析**: 社区希望原生支持阿里云 DashScope 的 Coding Plan，包括准确的上下文窗口限制配置，而非仅作为通用 OpenAI 兼容端点处理。
*   **[Issue #3823] 网关架构重构：自注册适配器 (3条评论, 2👍)**
    *   **链接**: [NousResearch/hermes-agent Issue #3823](https://github.com/NousResearch/hermes-agent/issues/3823)
    *   **分析**: 开发者提议重构消息平台网关，采用自注册适配器模式以消除大量样板代码。该提案获得了点赞支持，预示着项目即将进行大规模架构优化。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，部分已有修复方案：

### 🔴 严重/阻塞 (P1)
*   **[Bug] Open WebUI 工具调用记忆丢失 (Issue #14270)**
    *   **描述**: Open WebUI 会话中，AI 似乎“忘记”了刚才执行的工具调用结果，导致行为异常（如编辑文件后否认操作）。
    *   **状态**: Open
*   **[Bug] 会话分割导致响应丢失 (Issue #14238)**
    *   **描述**: 当长对话触发上下文压缩（会话分割）时，若恰逢 AI 返回最终响应，该响应可能被持久化到新会话但**未发送**给用户。
    *   **状态**: Open
*   **[Fix PR] 流式传输中工具参数格式错误修复 (PR #14291)**
    *   **描述**: 修复了流式传输组装过程中检测到畸形 JSON 参数时直接标记为截断导致的会话中断，现尝试修复 JSON 格式以保持会话继续。

### 🟠 一般/中 (P2)
*   **[Bug] 认证凭据池残留 (Issue #14218)**
    *   **描述**: 移除 `custom_provider` 后，`auth.json` 中的凭据未被清理，且在交互式界面中不可见，造成“幽灵”配置。
    *   **状态**: Open
*   **[Bug] 模型错误导致长耗时降级 (Issue #12770)**
    *   **描述**: 当模型输出无效工具参数时，系统错误地遍历所有备用提供商，浪费 20-60 秒。此为逻辑判断缺陷，非基础设施故障。
    *   **状态**: Open

### 🟢 已修复
*   **[Fix] 网关 PID 文件锁死 (Issue #14203 Closed)**
*   **[Fix] 微信图片发送失败 (Issue #13769 Closed)**
*   **[Fix] macOS 文件句柄耗尽 (Issue #14209 Closed)**

## 6. 功能请求与路线图信号
社区正在积极推动对更多国产模型平台和操作模式的支持：

*   **[Feature] 支持小米 MiMo Token Plan (Issue #14285)**
    *   用户请求支持小米 MiMo 的新 Token 计费端点，表明 Hermes 在国产模型生态中的渗透率正在提升。
*   **[Feature] 跨平台文件发送工具 (PR #14292)**
    *   新增 `send_file` 工具，统一了各平台（如飞书、微信）的文件发送接口，并增强了飞书适配器的路由逻辑。这标志着项目正在加强多平台一致性体验。
*   **[Feature] Cron 任务输出链式传递 (Issue #5439)**
    *   提议允许一个定时任务的输出作为下一个任务的输入，这将极大地增强自动化工作流的能力。

## 7. 用户反馈摘要
*   **痛点：模型回退策略笨拙**：用户抱怨在遇到模型输出错误（如 JSON 格式错误）时，系统尝试所有备用提供商耗时过长（#12770），希望改进错误分类，区分“模型能力问题”和“网络问题”。
*   **痛点：本地模型认证繁琐**：用户反馈使用 Ollama/LM Studio 等本地服务时，系统强制要求 API Key（即使是无效的），体验不佳。PR #14303 已尝试解决此问题。
*   **场景：企业微信集成困难**：多个 Issue (#13769, #13305) 涉及企业微信（WeCom/Weixin）的文件和媒体发送失败，说明该平台的适配层仍需打磨。
*   **满意度**：用户对“自注册适配器”重构提案（#3823）表示期待，认为这将显著降低维护新平台的门槛。

## 8. 待处理积压
以下重要 Issue 长期未获解决或虽有关注但仍未 Close，需维护者优先关注：

*   **Issue #3956 (P1)**: OpenAI Codex 空响应重试问题。该问题自 3 月 30 日创建以来持续活跃，直接影响了 Telegram 等渠道的交互体验，目前仍未有官方修复 PR 合并。
*   **Issue #10271**: OAuth 2.1 PKCE 认证失败。影响了特定 MCP 服务器的连接，涉及底层 SDK 兼容性，自 4 月 15 日以来仍未解决。
*   **PR #9454**: 自定义 HTTP Headers 支持。该 PR 自 4 月 14 日开启，已通过测试但尚未合并，阻碍了部分企业用户进行请求源标记的需求。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-23)

## 1. 今日速览
PicoClaw 项目今日保持**高活跃度**，成功发布了 `v0.2.7` 正式版及对应的 Nightly 构建，标志着项目进入了新的稳定迭代阶段。过去 24 小时内项目合并了 11 个 PR，主要集中在优化用户交互体验（如工具反馈动画）和解决长期存在的配置痛点。社区方面，Issue 互动频繁，新增了 8 个活跃 Issue，主要涉及运行稳定性与配置易用性问题。整体来看，项目核心功能稳步推进，但需关注部分遗留的 Bug 对用户体验的影响。

## 2. 版本发布
今日发布 **v0.2.7** 正式版本，主要更新内容如下：
- **新功能**：集成搜狗支持的网页搜索功能，增强了 AI 的信息获取能力。
- **体验优化**：引入频道工具反馈动画，统一了 Discord、Telegram、Feishu 等渠道的工具调用交互体验。
- **修复**：修复了搜狗 User Agent 的格式化问题以通过代码检查。
- **详细变更日志**：[v0.2.7 Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)

同时发布了 **Nightly Build (v0.2.7-nightly.20260423.68ceb54b)**，供开发者测试最新特性，需注意该版本可能存在不稳定性。

## 3. 项目进展
今日共有 **11 个 PR 被合并或关闭**，显著推动了项目进展：
- **配置体验重构**：合并了 [PR #2609](https://github.com/sipeed/picoclaw/pull/2609)，支持在模型列表中显式声明 `provider` 字段，解决了长期以来模型名称隐式解析导致的厂商混淆问题，这是对配置逻辑的重大改进。
- **交互体验增强**：[PR #2569](https://github.com/sipeed/picoclaw/pull/2569) 和 [PR #2622](https://github.com/sipeed/picoclaw/pull/2622) 统一了各聊天频道的工具反馈动画，使 AI 处理过程的展示更加简洁直观。
- **新增指令**：[PR #2502](https://github.com/sipeed/picoclaw/pull/2502) 引入 `/btw` 指令，支持用户在不干扰当前会话历史的情况下进行临时提问，增强了对话灵活性。
- **Web 端改进**：[PR #2563](https://github.com/sipeed/picoclaw/pull/2563) 完善了前端文件下载功能，[PR #2618](https://github.com/sipeed/picoclaw/pull/2618) 修复了 Pico 媒体代理的鉴权问题，提升了 Web UI 的可用性。

## 4. 社区热点
今日讨论最活跃的话题集中在配置与底层异常：
- **[Issue #2513](https://github.com/sipeed/picoclaw/issues/2513)**：Gateway 启动异常问题引发关注（5 条评论）。用户报告在 Debian 13 环境下启动后进程异常退出，影响了基本可用性。
- **[Issue #2548](https://github.com/sipeed/picoclaw/issues/2548)**：多认证凭据冲突错误（4 条评论）。反映了用户在自定义配置 Gemini 等模型时，对 JSON 配置结构的理解存在困难，导致 API 调用失败。
- **[Issue #1883](https://github.com/sipeed/picoclaw/issues/1883)**：关于配置模型名称解析的提案已关闭，该讨论推动了上述 PR #2609 的合并，体现了社区对改进配置逻辑的强烈诉求。

## 5. Bug 与稳定性
今日报告了若干关键 Bug，需维护者重点关注：
1.  **严重 [Session 丢失]**：[Issue #2621](https://github.com/sipeed/picoclaw/issues/2621) 报告 API 超时后会话上下文丢失并重置为默认 session，严重影响连续对话体验。目前暂无修复 PR。
2.  **严重 [Web 回归]**：[Issue #2615](https://github.com/sipeed/picoclaw/issues/2615) 指出 Web Chat 刷新前后消息显示不一致，这是旧 Bug (#2427) 的回归，影响了 UI 的可靠性。
3.  **中等 [工具注册]**：[Issue #2616](https://github.com/sipeed/picoclaw/issues/2616) 指出未启用 DuckDuckGo 时 `web_search` 工具无法识别，阻碍了国际用户的使用。
4.  **中等 [Gateway 异常]**：[Issue #2513](https://github.com/sipeed/picoclaw/issues/2513) 涉及 Gateway 启动失败，属阻塞级问题。

## 6. 功能请求与路线图信号
用户对新功能的诉求呈现多样化趋势：
- **多模态支持**：[PR #2626](https://github.com/sipeed/picoclaw/pull/2626) 正在尝试支持 Gemini 1.5 等模型的原生音频输入，若合并将极大增强 AI 的感知能力。
- **Embedding 支持**：[PR #2624](https://github.com/sipeed/picoclaw/pull/2624) 提出支持 OpenAI 兼容的 Embeddings 接口，符合扩展 AI 工具链的趋势。
- **环境变量配置**：[Issue #2623](https://github.com/sipeed/picoclaw/issues/2623) 请求支持 `.env` 文件配置 Skill，反映了用户对 Docker 及云原生部署场景下配置便捷性的需求。
- **边缘计算支持**：[Issue #2625](https://github.com/sipeed/picoclaw/issues/2625) 请求提供包含 WhatsApp 支持的 ARM 编译版本，显示了在树莓派等设备上的部署需求。

## 7. 用户反馈摘要
从 Issues 讨论中提炼出以下痛点：
- **配置门槛高**：多位用户在配置 Provider（如 Gemini、本地模型）时遇到模型名称解析和 API Key 格式问题，显式 Provider 字段的合并（PR #2609）有望缓解此问题。
- **稳定性焦虑**：Session 丢失和 Gateway 启动失败等问题让用户对系统稳定性产生担忧，尤其是在长时间运行或网络波动场景下。
- **国际化体验**：默认 Web Search 工具对非 DuckDuckGo 用户的限制导致了功能不可用，急需修复或配置项优化。

## 8. 待处理积压
- **长期未决 PR**：[PR #2256](https://github.com/sipeed/picoclaw/pull/2256) 关于 WebSocket 安全加固的 PR 自 4 月 1 日开启至今未合并，鉴于涉及安全风险，建议尽快排期 Review。
- **遗留 Bug**：[Issue #2513](https://github.com/sipeed/picoclaw/issues/2513) 的 Gateway 启动问题已有 5 条评论但尚未有明确解决方案，建议优先排查以保障基础运行。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-23)

## 1. 今日速览
NanoClaw 项目今日处于极高活跃度状态，核心开发重点聚焦于 v2.0.0 大版本的架构重构落地。过去 24 小时内 PR 更新量高达 27 条，其中 16 条已合并/关闭，显示出维护者正在快速收拢开发分支，为正式发布做最后冲刺。社区建设方面，官方新增了微信交流渠道，旨在降低本土用户的沟通门槛。整体来看，项目正经历一次重大的架构升级，代码库变动剧烈，稳定性修复与新功能引入并行推进。

## 2. 版本发布
**无正式 Release 发布**。但需重点关注已合并的 PR #1919，该 PR 标志着 **v2.0.0 架构重写** 正式进入主分支，包含 319 次提交，代码行变更达 +38k/-17k。预计正式 Release 将在后续清理工作完成后发布。

## 3. 项目进展
今日项目进展显著，主要体现在架构重构落地与安装体验优化上：

*   **🏗️ v2.0 架构重构落地**：PR [#1919](https://github.com/qwibitai/nanoclaw/pull/1919) 已合并。此次重构引入了新的实体模型（用户、角色、消息组、代理组），并修复了 v1 到 v2 的迁移行动项（见 PR [#1869](https://github.com/qwibitai/nanoclaw/pull/1869)）。这是项目今日最重要的里程碑。
*   **🚀 安装部署体验优化**：PR [#1908](https://github.com/qwibitai/nanoclaw/pull/1908) 合并，引入了品牌化的脚本安装流程 `nanoclaw.sh`，旨在帮助新手用户实现“零到运行”的快速部署。
*   **🐧 WSL 平台兼容性增强**：针对 WSL 环境下 systemd 缺失导致的 Docker 启动失败问题，PR [#1904](https://github.com/qwibitai/nanoclaw/pull/1904) 和 [#1903](https://github.com/qwibitai/nanoclaw/pull/1903) 提供了检测与修复方案，显著改善了 Windows 用户的安装体验。
*   **🛡️ 稳定性修复**：PR [#1923](https://github.com/qwibitai/nanoclaw/pull/1923) 修复了图片生成模块在网络超时时的未捕获异常问题；PR [#1877](https://github.com/qwibitai/nanoclaw/pull/1877) 重构了通道策略路由，增加了未知通道的注册流程。

## 4. 社区热点
*   **社群建设**：Issue [#1926](https://github.com/qwibitai/nanoclaw/issues/1926) 发布了 OpenClaw nanoclaw 社区微信交流群二维码，显示出项目方对中文社区建设的重视，意在建立更直接的实时技术支持渠道。
*   **权限回滚讨论**：PR [#1924](https://github.com/qwibitai/nanoclaw/pull/1924) 回滚了此前关于容器 home 目录权限的修复（PR #1885）。这表明 v2 架构下的容器权限管理策略可能仍存在争议或副作用，需要进一步验证。

## 5. Bug 与稳定性
今日修复了多个关键 Bug，稳定性显著提升：

*   **严重 (Critical)**：PR [#1923](https://github.com/qwibitai/nanoclaw/pull/1923) 修复了图片生成时 OpenAI socket 挂起导致的无限等待及崩溃问题。**状态：已修复**。
*   **中等**：PR [#1916](https://github.com/qwibitai/nanoclaw/pull/1916) 修复了配置环境变量（如 `CONTAINER_TIMEOUT`）非正整数或 NaN 时的潜在崩溃风险。**状态：Open (待合并)**。
*   **平台特定**：PR [#1904](https://github.com/qwibitai/nanoclaw/pull/1904) 修复了 WSL 无 systemd 环境下 Docker 安装后的启动失败问题。**状态：已修复**。
*   **回滚风险**：PR [#1924](https://github.com/qwibitai/nanoclaw/pull/1924) 回滚了容器目录写权限修复，可能重新引入映射宿主机 UID 时的写入失败风险，需关注后续替代方案。

## 6. 功能请求与路线图信号
*   **微信集成**：PR [#1921](https://github.com/qwibitai/nanoclaw/pull/1921) 提议通过 iLink bot 协议添加 `/add-weixin` 技能，实现从微信驱动 NanoClaw。结合 Issue #1926 的建群动作，**微信生态集成极有可能是下一版本的重点功能**。
*   **诊断与隐私**：PR [#1887](https://github.com/qwibitai/nanoclaw/pull/1887) 提出遵循 `DO_NOT_TRACK` 标准并跳过缺失 curl 的诊断，反映出项目正在完善隐私合规与脚本健壮性。

## 7. 用户反馈摘要
从 Issues 和 PR 描述中提炼出以下用户痛点：
*   **部署门槛高**：用户（尤其是 WSL 用户）在配置 Docker 和 systemd 时遇到阻碍，需依赖脚本自动化解决（PR #1904, #1908）。
*   **网络稳定性**：在使用 OpenAI 接口生成图片时，网络波动容易导致服务假死，需增加超时保护（PR #1923）。
*   **沟通需求**：用户对即时通讯工具（微信）接入及社区交流群有强烈需求（Issue #1926, PR #1921）。

## 8. 待处理积压
*   **PR [#1889](https://github.com/qwibitai/nanoclaw/pull/1889)**：修复 sqlite3 缺失时的静默数据丢失问题。该 PR 目前仍处于 Open 状态，鉴于其涉及数据安全，建议维护者优先审核并合并。
*   **PR [#1921](https://github.com/qwibitai/nanoclaw/pull/1921)**：微信接入功能目前处于 Open 状态，社区期待度较高，建议明确排期。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-23)

## 1. 今日速览
过去 24 小时，NullClaw 项目呈现出较高的维护活跃度，共处理了 10 条 Issue 更新（5 条关闭，5 条活跃），显示出维护者对社区反馈的积极回应。尽管没有新的版本发布或 PR 合并，但大量 Bug（特别是 Matrix 和 Otel 相关）的关闭表明项目稳定性正在提升。社区关注点集中在网关部署配置与 UI 易用性上，新增的 PR 暗示了 CLI 交互体验的即将改善。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日项目主要通过关闭 Issue 来提升稳定性，未观察到新的代码合并。

*   **Matrix 与 Otel 稳定性修复**：维护者关闭了多个关键 Bug Issue，包括 Matrix 协议的邀请处理与消息过滤问题 ([#606](https://github.com/nullclaw/nullclaw/issues/606)) 以及 Otel 诊断连接问题 ([#638](https://github.com/nullclaw/nullclaw/issues/638))。这表明近期提交的代码（虽非今日合并）已有效解决了这些痛点，项目在后端协议适配和可观测性方面迈出了坚实一步。
*   **诊断工具一致性**：关闭了关于 `channel status` 与 `doctor` 命令输出矛盾的 Issue ([#827](https://github.com/nullclaw/nullclaw/issues/827))，意味着内部状态检查逻辑得到了统一。

## 4. 社区热点
今日讨论最热烈的话题主要集中在网络配置与功能支持上：

*   **Tailscale 网关配置困境** ([#826](https://github.com/nullclaw/nullclaw/issues/826))：该 Issue 拥有 13 条评论，用户在使用 Tailscale 部署 NullClaw Gateway 时遇到 `NotImplemented` 错误。讨论揭示了用户在复杂网络环境下（VPS + VPN）对网关模式配置细节的困惑，官方文档在此场景下的指引尚显不足。
*   **WhatsApp Web 协议支持** ([#183](https://github.com/nullclaw/nullclaw/issues/183))：这是一个长期开放的功能请求，希望绕过 Meta Business API 直接通过 Baileys 库支持 WhatsApp Web。今日再次活跃，获得 2 个点赞，反映出社区对降低商业 API 依赖、通过扫码登录接入个人通讯账号的强烈需求。

## 5. Bug 与稳定性
今日报告的新 Bug 主要涉及性能与兼容性：

*   **[高] 网关模式 CPU 空转** ([#851](https://github.com/nullclaw/nullclaw/issues/851))：用户报告在树莓派 5 (Debian arm64) 上运行网关时，`accept4()` 系统调用在 `EAGAIN` 错误下陷入忙循环，导致 CPU 核心满载。目前 Issue 仍处于 Open 状态，尚无修复 PR，需关注其对边缘设备部署的影响。
*   **[中] 配置解析错误** ([#39](https://github.com/nullclaw/nullclaw/issues/39))：Matrix 配置无法被识别的问题已于今日关闭，提升了配置层面的健壮性。

## 6. 功能请求与路线图信号
*   **CLI 输出优化 (已响应)**：用户提出改进 `capabilities` 命令输出格式的需求 ([#860](https://github.com/nullclaw/nullclaw/issues/860))，希望增加颜色和表格化以提升可读性。维护者 @manelsen 随即提交了 PR #863 实现了该功能（支持 TTY 检测与颜色标记），这极有可能在下个版本中合并。
*   **微信 QR Code 登录**：用户询问是否支持微信扫码登录 ([#817](https://github.com/nullclaw/nullclaw/issues/817))，目前暂无明确支持计划，但这与 #183 (WhatsApp Web) 共同指向了“轻量级/个人账号接入”的路线图方向。

## 7. 用户反馈摘要
从评论中提炼出以下用户痛点：

*   **文档门槛较高**：用户反馈 Web UI 的配置文档充满了技术术语，表示“看不懂 70% 的内容”，呼吁提供更直观、非术语化的“人类语言”教程 ([#861](https://github.com/nullclaw/nullclaw/issues/861))。
*   **边缘设备性能敏感**：Bug #851 显示项目正尝试在 ARM 架构的边缘设备（如树莓派）上运行，用户对空闲状态下的资源占用非常敏感。
*   **状态感知偏差**：用户期望命令行工具输出的状态信息是一致的，此前 CLI 显示 OK 但 Doctor 报错的情况曾导致困扰 ([#827](https://github.com/nullclaw/nullclaw/issues/827))。

## 8. 待处理积压
*   **严重性能问题待修复**：Issue [#851](https://github.com/nullclaw/nullclaw/issues/851) 涉及 CPU 忙循环，可能导致边缘设备过热或卡顿，建议维护者优先排查。
*   **PR 待合并**：PR [#863](https://github.com/nullclaw/nullclaw/pull/863) 优化了 CLI 输出体验，建议尽快 Review 合并。
*   **长期功能缺口**：Issue [#183](https://github.com/nullclaw/nullclaw/issues/183) (WhatsApp Web) 持续活跃，虽然实现难度较大，但建议维护者给出是否纳入规划的明确信号。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-23)

## 1. 今日速览
IronClaw 项目今日保持**极高活跃度**，核心开发重点明显向 **Engine v2 架构重构** 倾斜，涉及工具调用元数据分离、任务系统构建及提示词工程优化。项目正在经历一次重大的架构升级，旨在解决 UI/后端状态不同步和预算控制等痛点。虽然未发布新版本，但 PR 更新量达 50 条，显示开发节奏紧凑。需警惕的是，今日报告了数个严重的功能性 Bug（如跨会话数据污染、安装失败）以及 CI/CD 流水线的不稳定信号。

## 2. 版本发布
*   **无新版本发布**。今日无 Release 更新，推测团队正处于 v0.26.0 发布后的密集开发与问题修复阶段。

## 3. 项目进展
今日共有 **11 个 PR 合并/关闭**，主要集中在基础设施改进与功能清理，但大量核心功能 PR（约 39 个）仍处于待合并状态，预示着下一次版本更新将包含重大变更。

*   **架构重构**：
    *   [PR #2877](https://github.com/nearai/ironclaw/pull/2877)：启动 CI 重设计的第一阶段，计划用 GitHub 原生合并队列替代现有的 staging promotion bot，解决批量 PR 难以审查的问题。
    *   [PR #2876](https://github.com/nearai/ironclaw/pull/2876)：为 Engine v2 添加动作发现元数据，这是实现 Engine v2 工具调用与背景分离的关键步骤。

*   **功能扩展**：
    *   [PR #2873](https://github.com/nearai/ironclaw/pull/2873)：引入 Mission Tool Family（任务工具集），包含创建、列出、触发等 7 个内置工具，显著增强 Agent 的自主任务编排能力。
    *   [PR #2863](https://github.com/nearai/ironclaw/pull/2863)：新增 Manifest 作为内置 LLM 提供商，支持自动复杂度分层。
    *   [PR #2865](https://github.com/nearai/ironclaw/pull/2865)：添加 Nostr 工具及 WebSocket 主机支持，扩展去中心化社交生态集成。

*   **清理与修复**：
    *   [PR #1594](https://github.com/nearai/ironclaw/pull/1594)：已合并，增加 `CLAWHUB_ENABLED` 开关以控制公共技能注册表访问。
    *   [Issue #2087](https://github.com/nearai/ironclaw/issues/2087)（已关闭）：修复了 Notion 设置导致 Agent 停止响应的问题。

## 4. 社区热点
今日讨论热度最高的问题集中在架构设计与严重的用户体验 Bug 上：

1.  **[Issue #2767](https://github.com/nearai/ironclaw/issues/2767) [Open]**  
    *   **摘要**：Epic 级议题，讨论将 Engine v2 的“能力背景”与“可调用工具模式”分离。
    *   **分析**：这是目前架构层面的核心讨论，评论数达 6 条。社区与团队正致力于解决 v2 引擎中工具定义混合导致的复杂性，旨在提升提示词的清晰度与执行效率。

2.  **[Issue #2818](https://github.com/nearai/ironclaw/issues/2818) [Open]**  
    *   **摘要**：`v0.26.0` 安装程序在 Linux x86_64 平台上执行失败。
    *   **分析**：作为优先级 P1 的阻塞问题，这直接影响了 Linux 用户的接入。社区迫切需要官方确认修复时间表。

3.  **[Issue #2833](https://github.com/nearai/ironclaw/issues/2833) [Open]**  
    *   **摘要**：跨会话响应污染。
    *   **分析**：用户报告在切换对话时，旧对话的内容会“串门”到新对话中。这是一个严重的数据隔离 Bug，触发了用户对隐私和上下文管理稳定性的担忧。

## 5. Bug 与稳定性
今日 Bug 报告频发，主要集中在 Web 端状态管理与集成稳定性，部分已匹配修复 PR。

*   **严重**:
    *   **[Issue #2833](https://github.com/nearai/ironclaw/issues/2833)**：跨会话响应污染。切换会话时上下文混乱，**暂无关联 Fix PR**，需紧急关注。
    *   **[Issue #2818](https://github.com/nearai/ironclaw/issues/2818)**：Linux x86_64 安装失败。阻塞新用户部署，**暂无关联 Fix PR**。

*   **中等**:
    *   **[Issue #2857](https://github.com/nearai/ironclaw/issues/2857)**：Web 端侧边栏聊天历史列表消失。可能与 [PR #2867](https://github.com/nearai/ironclaw/pull/2867)（修复侧边栏逻辑）相关。
    *   **[Issue #2858](https://github.com/nearai/ironclaw/issues/2858)**：Notion OAuth 显示成功但报错 "No matching pending authentication gate found"。
    *   **[Issue #2855](https://github.com/nearai/ironclaw/issues/2855)**：工具安装失败，原因缺失构建产物。

*   **CI/CD 不稳定**:
    *   **[Issue #2832, #2829, #2824](https://github.com/nearai/ironclaw/issues/2832)**：Live canary 测试在多个 Provider 矩阵中失败，表明当前主干分支在特定环境下存在运行时错误。

## 6. 功能请求与路线图信号
用户与开发者对 IronClaw 的“自主性”和“成本控制”提出了明确需求，部分已进入实现阶段。

*   **成本控制体系**：
    *   **[Issue #2843](https://github.com/nearai/ironclaw/issues/2843)** 提出用 **USD 预算限制** 替代现有的迭代次数/时间上限，建立 User → Project → Mission → Thread 的级联预算体系。这标志着项目正从“实验性玩具”向“生产级成本管控”转型。

*   **状态管理优化**：
    *   **[Issue #2792](https://github.com/nearai/ironclaw/issues/2792)** 提出“网关状态收敛”Epic，旨在消除 UI 与后端的状态漂移。这是解决今日频发的“侧边栏消失”、“污染”等状态 Bug 的根本之道。

*   **工具生态**：
    *   **[PR #2873](https://github.com/nearai/ironclaw/pull/2873)** (Mission Tools) 和 **[PR #2865](https://github.com/nearai/ironclaw/pull/2865)** (Nostr) 显示项目正在快速扩展 Agent 的行动半径，特别是任务自主规划能力的引入值得期待。

## 7. 用户反馈摘要
*   **安装痛点**：Linux 用户对 v0.26.0 安装脚本失败感到沮丧，认为这应该是发布前的基础检查项。
*   **并发与状态**：Web 端用户频繁遭遇 UI 不同步问题（历史消失、OAuth 状态不匹配），对 UI 流式更新的可靠性存疑。
*   **集成体验**：Notion 等第三方工具的集成虽然能用，但故障排查困难，错误提示晦涩。
*   **社区运营**：今日出现了多次“加入微信群”的 Issue（如 #2878），虽然意在建立中文社区，但被部分开发者视为噪音，建议项目方通过文档或置顶 Issue 统一引导。

## 8. 待处理积压
以下重要 Issue/PR 长期未获响应或处于关键审核阶段，需维护者重点关注：

1.  **[PR #2092](https://github.com/nearai/ironclaw/pull/2092) [Open]**  
    *   **内容**：修复通过内存投毒进行的间接提示注入攻击（安全漏洞）。
    *   **状态**：创建于 4 月 7 日，至今仍在等待合并。这是一个中等风险的安全修复，建议优先 Review。

2.  **[PR #1764](https://github.com/nearai/ironclaw/pull/1764) [Open]**  
    *   **内容**：Abound Demo 功能集（响应 API、凭证注入等）。
    *   **状态**：创建于 3 月 30 日，为大型功能 PR，涉及范围极广，可能需要拆解或专项评审会议推进。

3.  **[Issue #2583](https://github.com/nearai/ironclaw/issues/2583) [Open]**  
    *   **内容**：创建例程时连续代码错误导致失败。
    *   **状态**：P1 级 Bug，自 4 月 17 日报告以来未见实质性修复 PR 关联，影响 Agent 自动化核心流程。

---
**分析师总结**：IronClaw 正处于 Engine v2 架构演进的关键期，代码提交活跃，但对旧架构的维护和新功能的稳定性平衡面临挑战。今日暴露的跨会话污染和安装失败问题需立即响应，避免挫伤社区信心。建议优先处理 CI 流水线不稳定问题和 Linux 安装 Bug。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-23)

## 1. 今日速览
LobsterAI 今日保持了极高的开发活跃度，过去 24 小时内共有 **12 个 PR 成功合并/关闭**，显示出团队正在为即将到来的版本进行密集的功能迭代与缺陷修复。本次更新重点集中在 **多平台机器人支持（Discord/Telegram）** 和 **本地模型生态集成（LM Studio）**，显著增强了作为 AI 助手中台的连接能力。同时，针对 Windows 平台的安装体验与安全误报问题进行了专项优化。虽然社区反馈出现了关于核心工具执行失败的新 Bug，但整体项目推进势头良好，稳定性与易用性均有提升。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 12 个 PR 被合并或关闭，主要集中在功能扩展与平台稳定性修复：

- **生态集成与模型支持**：
    - **[feat] 支持 LM Studio 模型配置** ([PR #1787](https://github.com/netease-youdao/LobsterAI/pull/1787))：扩展了本地模型生态，用户现可便捷接入 LM Studio，降低了对云端模型的依赖。
    - **[feat] Discord 与 Telegram 多机器人支持** ([PR #1794](https://github.com/netease-youdao/LobsterAI/pull/1794), [PR #1792](https://github.com/netease-youdao/LobsterAI/pull/1792))：显著增强了 IM 渠道能力，支持多机器人实例管理，提升了企业级部署的灵活性。

- **稳定性与安全修复**：
    - **[fix] Windows 安装程序优化与杀毒误报解决** ([PR #1791](https://github.com/netease-youdao/LobsterAI/pull/1791), [PR #1786](https://github.com/netease-youdao/LobsterAI/pull/1786))：针对 Windows NSIS 安装器增加了详细日志，并精准化了 Windows Defender 的排除路径，解决了腾讯电脑管家等第三方安全软件的误报问题，提升了安装成功率。
    - **[fix] Cowork 网关模型配置热更** ([PR #1795](https://github.com/netease-youdao/LobsterAI/pull/1795))：修复了模型图片支持配置变更时网关未同步重启导致图片静默丢弃的严重问题。

- **用户体验优化**：
    - **[fix] 更新通知逻辑调整** ([PR #1793](https://github.com/netease-youdao/LobsterAI/pull/1793))：移除了下载完成后的自动弹窗，改为仅红点通知，减少对用户的打扰。
    - **[fix] 代理技能市场 CORS 问题** ([PR #1788](https://github.com/netease-youdao/LobsterAI/pull/1788))：通过主进程代理请求解决了渲染进程跨域限制，保障了技能市场的正常加载。

## 4. 社区热点
今日社区关注度较高的话题主要集中在功能性缺陷与新功能建议上：

- **[Issue #1796] Write tool 执行持续失败**：用户报告近日 Write/Edit 工具总是执行失败，即使更新应用也未解决。作为核心工具能力，该问题引发了用户对生产环境可用性的担忧。目前 Issue 处于 Open 状态，尚无官方修复 PR 关联。
- **[Issue #1797] 建议增加批量删除对话功能**：用户提议增加对话批量删除功能，以有效管理上下文。该建议获得了 +1 的点赞，反映出用户对于会话管理效率的迫切需求。

## 5. Bug 与稳定性
根据今日 Issues 及 PRs 情况，Bug 严重程度分级如下：

- **🔴 严重**:
    - **Write/Edit 工具执行失败** ([Issue #1796](https://github.com/netease-youdao/LobsterAI/issues/1796))：核心工具链路阻塞，直接影响用户使用 AI 进行文件操作，需紧急排查。
    - **模型图片支持静默丢失** ([PR #1795](https://github.com/netease-youdao/LobsterAI/pull/1795))：已通过合并 PR 修复。该问题曾导致订阅模型在特定时机下无法正确处理图片，属于隐蔽性较高的功能性 Bug。

- **🟡 一般**:
    - **Windows 安装冲突与误报** ([PR #1791](https://github.com/netease-youdao/LobsterAI/pull/1791))：已修复。解决了旧目录重命名冲突及安全软件误报导致的安装中断。
    - **技能市场 CORS 错误** ([PR #1788](https://github.com/netease-youdao/LobsterAI/pull/1788))：已修复。

## 6. 功能请求与路线图信号
- **对话管理增强**：结合 [Issue #1797](https://github.com/netease-youdao/LobsterAI/issues/1797) 的用户反馈，"批量删除对话"已成为高频诉求。目前项目中已有针对会话重命名 ([PR #641](https://github.com/netease-youdao/LobsterAI/pull/641)) 的社区 PR 待合并，建议团队统筹考虑会话管理的完整功能集（重命名、删除、归档），将社区贡献纳入主分支。
- **本地模型支持深化**：LM Studio 的支持 ([PR #1787](https://github.com/netease-youdao/LobsterAI/pull/1787)) 表明项目正在积极响应“数据不出域”的私有化部署需求，预计未来版本将进一步强化对 Ollama/vLLM 等本地推理框架的兼容性。

## 7. 用户反馈摘要
- **痛点**：用户对核心工具（Write/Edit）的稳定性极其敏感，近期更新可能引入了回归问题，导致工具执行失败。
- **场景**：部分用户将 LobsterAI 作为日常 IM 助手使用，对于多机器人管理有明确需求。
- **干扰问题**：用户对更新下载后的自动弹窗表示反感，开发团队今日已修复此体验问题。
- **安全信任**：Windows 平台的安全软件误报曾导致用户疑虑，今日的精准排除路径修复有助于恢复用户信任。

## 8. 待处理积压
以下 PRs 已停留较长时间（标记为 stale），建议维护者尽快评审或反馈：

- **[PR #641] 双击重命名会话**：功能完整且符合用户习惯，建议合并以完善会话管理体验。
- **[PR #697] 消息回滚与编辑重生成**：极具价值的功能，可显著提升对话容错率，建议优先 Review。
- **[PR #696] Windows 开机自启静默退出修复**：解决了 Windows 平台特定场景下的启动崩溃问题，对用户体验至关重要。
- **[PR #658] 支持 `!` 前缀执行 Shell 命令**：高级功能，需评估安全风险，但社区需求较高。

---
*分析师注：今日项目合并了大量功能更新，建议 QA 团队重点关注 Write Tool 失败问题是否与近期合并的模型配置或网关更新有关，尽快发布修复补丁。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-23)

## 1. 今日速览
Moltis 项目今日保持极高的开发活跃度，呈现出“快速迭代、修复优先”的健康态势。过去24小时内，项目成功发布了版本 `20260422.01`，并高效关闭了 5 个 Issues 和 10 个 PRs。核心贡献集中在提升系统兼容性（修复 WSL2、Kimi K2.5、Gemini 等问题）与拓展生态集成（Signal、Home Assistant）。社区反馈方面，用户对 UI 细节（聊天自动滚动）提出了优化需求，同时多个重量级功能 PR（如 MCP 服务器管理、子智能体预设）已提交待审，预示着下一个版本将带来显著的功能增强。

## 2. 版本发布
- **版本号**: `20260422.01`
- **发布时间**: 2026-04-22
- **更新说明**: 官方未提供详细的 Release Notes，根据提交记录分析，此版本主要集成了过去24小时内的关键 Bug 修复（如 Kimi/Fireworks 兼容性、Gemini 工具调用元数据保留等）及依赖更新。属于常规迭代版本，建议所有用户更新以获得更好的提供商兼容性。

## 3. 项目进展
今日共有 10 个 PR 被合并或关闭，显著提升了项目的稳定性与功能完整度：

- **关键修复合并**：
    - **[PR #834](https://github.com/moltis-org/moltis/pull/834)**: 修复了环境变量解析问题，支持从 `[env]` 配置节解析占位符，解决了用户配置复杂环境下的变量失效问题（关联 Issue #770）。
    - **[PR #832](https://github.com/moltis-org/moltis/pull/832)**: 修复了 Kimi K2.5 Turbo 在 Fireworks Fire Pass 上的 400 错误，增强了非标准 OpenAI 兼容提供商的支持。
    - **[PR #836](https://github.com/moltis-org/moltis/pull/836)**: 解决了 Gemini 模型工具调用元数据丢失的回归问题，确保多轮对话中工具调用上下文的完整性。
    - **[PR #833](https://github.com/moltis-org/moltis/pull/833)**: 修复了 OpenRouter + Google AI Studio 的工具模式回归 Bug，增强了非严格模式下的兼容性。

- **功能增强合并**：
    - **[PR #829](https://github.com/moltis-org/moltis/pull/829)**: 增强了 Onboarding 流程，用户现在可以在初始化向导中直接管理技能包，降低了上手门槛。

## 4. 社区热点
今日讨论最活跃的内容集中在用户体验改进与生态扩展：

- **[Issue #824](https://github.com/moltis-org/moltis/issues/824)**: **[Feature] 阻止聊天自动滚动**
    - 用户 @vvuk 提出当用户向上翻阅历史记录时，新消息不应强制将视图滚动到底部。这是一个典型的聊天应用 UX 痛点，社区正在讨论实现逻辑。
- **[PR #841](https://github.com/moltis-org/moltis/pull/841)**: **新增 Signal 通道支持**
    - 提议集成 `signal-cli` 作为新的消息通道，这表明 Moltis 正致力于扩展通信平台的覆盖范围，吸引隐私导向的用户群体。
- **[PR #827](https://github.com/moltis-org/moltis/pull/827)**: **原生 Home Assistant 集成**
    - 新增独立的 `moltis-home-assistant` crate，允许智能体直接通过 REST/WebSocket 控制智能家居设备，这是向“智能体具备实体行动力”迈出的重要一步。

## 5. Bug 与稳定性
今日修复了多个影响特定场景的严重 Bug，整体稳定性提升：

- **已修复 (High)**:
    - **[Issue #823](https://github.com/moltis-org/moltis/issues/823)**: 调试日志模式下 `broadcasting event` 刷屏导致磁盘被写满，已通过日志级别调整修复。
    - **[Issue #828](https://github.com/moltis-org/moltis/issues/828)**: Docker 沙箱在 WSL2 环境下因缺少 `/sys/class/dmi` 启动失败，影响了 Windows 用户的开发体验。
- **已修复 (Medium)**:
    - **[Issue #810](https://github.com/moltis-org/moltis/issues/810)**: Kimi K2.5 Turbo (Fireworks) 请求返回 400 错误。
    - **[Issue #773](https://github.com/moltis-org/moltis/issues/773)**: PWA 推送消息点击后出现 404。
- **待处理**:
    - **[Issue #824](https://github.com/moltis-org/moltis/issues/824)**: UI 滚动行为问题（已由维护者确认建议合理性）。

## 6. 功能请求与路线图信号
结合待合并的 PR，项目路线图显示出对“智能体能力标准化”与“多端协同”的重视：

- **智能体编排能力**：
    - **[PR #844](https://github.com/moltis-org/moltis/pull/844)**: 引入默认子智能体预设，如 `coder`, `reviewer`, `qa` 等，降低用户构建多智能体工作流的难度。
    - **[PR #840](https://github.com/moltis-org/moltis/pull/840)**: 添加 MCP (Model Context Protocol) 服务器管理技能，标准化外部工具接入方式。
- **项目控制粒度**：
    - **[PR #837](https://github.com/moltis-org/moltis/pull/837)**: 增加项目级的代码索引开关，允许用户在不需要语义搜索时节省资源，体现了对性能管理的精细化考量。

## 7. 用户反馈摘要
从 Issues 和 PR 描述中提炼出的用户真实声音：
- **痛点**：配置文件中的环境变量引用不生效导致部署困难（#770, #834 已修复）；部分第三方 LLM 提供商（如 Fireworks/Kimi）兼容性差，报错难以排查（#810）。
- **场景**：用户尝试在 WSL2 环境下运行 Docker 隔离的智能体（#828）；用户利用 Moltis 接入 Home Assistant 进行智能家居控制（#827）。
- **期望**：用户希望 UI 交互更人性化，如查阅历史记录时不要被打断（#824）。

## 8. 待处理积压
- **长期停滞 PR 关注**：
    - **[PR #470](https://github.com/moltis-org/moltis/pull/470)**: `feat(witness): tool execution witness recording`。该 PR 自 3 月底开启，引入了工具执行的可信记录功能，属于较复杂的架构改动，建议维护者评估是否需要协助推进。
    - **[PR #422](https://github.com/moltis-org/moltis/pull/422)**: 关于 MacOS 签名与公证的修复，目前已有新 PR #842 提出替代方案，建议关闭旧 PR 以清理积压。
- **新 PR 需要关注**：
    - 文档批量更新 PRs（#783, #800, #801）处于 Open 状态，涉及大量文档修正，建议尽快合并以降低用户阅读障碍。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-23)

## 1. 今日速览
CoPaw 项目今日活跃度显著提升，共处理 Issues 40 条、PRs 50 条，并发布了重要的 v1.1.3 版本。项目正式完成品牌重塑，由 CoPaw 更名为 **QwenPaw**，标志着项目生态定位的进一步明确。核心功能方面，备受期待的 Agent 备份与恢复系统已随新版本上线，同时社区关注已久的 "Plan Mode"（规划模式）相关 PR 已合并，大幅增强了 Agent 的任务规划能力。整体来看，项目正处于功能迭代与品牌升级的关键节点，社区反馈积极但对版本同步机制存在一定困惑。

## 2. 版本发布
- **v1.1.3**
  - **✨ Added (Agent System)**: 引入 **备份与恢复系统**。支持创建 Agent、技能、记忆和会话的范围级快照，支持按 Agent 选择性恢复，以及 zip 格式的导入/导出。这解决了用户长期关注的会话数据安全问题。
  - **⚠️ 注意**: 此次更新涉及核心数据存储模块，建议在升级前手动备份 `data` 目录，虽然系统已支持快照，但首次升级建议谨慎操作。

## 3. 项目进展
今日共有 27 个 PR 合并/关闭，项目在功能增强与稳定性修复上均有显著推进：
- **品牌重塑落地**：PR [#3285](https://github.com/agentscope-ai/QwenPaw/pull/3285) 正式完成了 CoPaw 到 QwenPaw 的重命名工作，统一了项目标识。
- **规划模式集成**：PR [#2904](https://github.com/agentscope-ai/QwenPaw/pull/2904) 与 [#3686](https://github.com/agentscope-ai/QwenPaw/pull/3686) 合并，正式引入 Plan Mode。用户可通过 `/plan` 指令生成结构化的多步骤任务计划，提升了复杂任务的处理能力。
- **安全与交互优化**：PR [#3652](https://github.com/agentscope-ai/QwenPaw/pull/3652) 正在推进安全策略的手动确认 UI 化，旨在替代文本指令 `/approve`，改善交互体验。
- **构建与部署修复**：PR [#3697](https://github.com/agentscope-ai/QwenPaw/pull/3697) 修复了 Dockerfile 中缺少 git 初始化的问题，解决了镜像打包失败痛点。
- **前端构建升级**：PR [#3712](https://github.com/agentscope-ai/QwenPaw/pull/3712) 提议将 Vite 升级至 v8 以提升构建性能，目前处于 Open 状态。

## 4. 社区热点
今日社区讨论焦点集中在用户痛点反馈与版本管理问题上：
- **[Issue #2482](https://github.com/agentscope-ai/QwenPaw/issues/2482) [OPEN]**: 一位重度用户提出了极具代表性的痛点：对话无法物理删除导致上下文污染、AI 压缩记忆导致信息丢失、长文本读取分片导致理解偏差。该 Issue 评论数达 14 条，反映了当前 Agent 在长上下文管理上的普遍短板。
- **[Issue #3693](https://github.com/agentscope-ai/QwenPaw/issues/3693) [OPEN]**: 使用 Anthropic 协议（火山引擎）时出现类型错误崩溃，评论数 13 条。用户指出代码对非流式对象进行了流式遍历，影响了特定渠道的可用性。
- **[Issue #3637](https://github.com/agentscope-ai/QwenPaw/issues/3637) [CLOSED]**: 用户对 PyPI 版本 (v1.0.2) 与 GitHub Release (v1.1.2) 不同步表示困惑。这反映了项目发布流程中自动化发布至 PyPI 的环节可能存在滞后，导致用户无法及时通过 pip 获取最新版。

## 5. Bug 与稳定性
今日报告的 Bug 涉及协议兼容、安全规则及部署流程：
- **严重**:
  - **[Issue #3693](https://github.com/agentscope-ai/QwenPaw/issues/3693)**: Anthropic 协议适配层崩溃，导致模型无法回复。目前暂无修复 PR，需优先关注。
  - **[Issue #3709](https://github.com/agentscope-ai/QwenPaw/issues/3709)**: 安全防护规则 `TOOL_CMD_IFS_INJECTION` 在禁用后仍然拦截命令，影响自动化脚本执行。
- **中等**:
  - **[Issue #3695](https://github.com/agentscope-ai/QwenPaw/issues/3695)**: v1.1.3 Docker 镜像打包因缺少 git 命令报错。已有 PR [#3697](https://github.com/agentscope-ai/QwenPaw/pull/3697) 尝试修复。
  - **[Issue #3707](https://github.com/agentscope-ai/QwenPaw/issues/3707)**: MiniMax M2.7 模型硬编码不支持图片识别，但 API 实际支持多模态。
- **低危**:
  - **[Issue #3688](https://github.com/agentscope-ai/QwenPaw/issues/3688)**: 内置技能描述忽略语言设置，导致 Prompt 中英文混杂。

## 6. 功能请求与路线图信号
- **记忆系统优化**：[Issue #3663](https://github.com/agentscope-ai/QwenPaw/issues/3663) 提出增加 "梦境日志" 输出，解释记忆整理过程，增强可解释性。结合 #2482 对记忆压缩的吐槽，记忆系统的精细化控制将是下一阶段重点。
- **文件操作回滚**：[PR #3346](https://github.com/agentscope-ai/QwenPaw/pull/3346) 正在支持文件操作回滚，有助于防止 Agent 误删文件，符合安全增强趋势。
- **外部进化引擎支持**：[Issue #3680](https://github.com/agentscope-ai/QwenPaw/issues/3680) 提议支持外部进化引擎集成，扩展了 Agent 的进化路径，可能被纳入后续版本。

## 7. 用户反馈摘要
- **上下文管理痛点**：重度用户强烈不满当前无法精准控制上下文（无法物理删除特定对话），导致 Token 浪费和模型幻觉。
- **版本发布困惑**：多个用户反馈 PyPI 版本滞后，希望提供清晰的源码安装指引。
- **桌面端体验**：Windows 端打包体积过大（500MB+）及安装包被安全软件误报是主要槽点。
- **渠道兼容性**：Discord、钉钉等渠道的连接稳定性及功能支持（如 @ 功能）仍有待完善。

## 8. 待处理积压
- **[Issue #2482](https://github.com/agentscope-ai/QwenPaw/issues/2482)**: 长期未解决的重度用户核心诉求（物理删除对话、长文本读取优化），建议开发团队优先评估。
- **[PR #3711](https://github.com/agentscope-ai/QwenPaw/pull/3711)**: 针对 Windows Defender 误报的修复 PR，状态为 Open，建议尽快合并以改善桌面端用户体验。
- **[Issue #3564](https://github.com/agentscope-ai/QwenPaw/issues/3564)**: 频繁中断问题，目前仅有评论但未明确指派解决，可能影响长期运行的稳定性。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-04-23)

## 1. 今日速览
ZeptoClaw 今日保持了极高的开发活跃度，呈现出明显的“安全加固”与“边缘计算深化”双轨并行态势。过去 24 小时内共有 24 个 PR 更新（其中 22 个已合并/关闭）和 18 个 Issue 更新，显示维护者正在高效清理积压任务并快速迭代新功能。项目重点推进了审计追踪、SSRF 防护和下载校验等安全特性，同时通过引入 Liquid AI 支持、MQTT 通道和离线模式，进一步夯实其在 IoT 和边缘设备领域的核心竞争力。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日项目取得了实质性进展，主要集中在安全性增强、基础设施修复和功能扩展三个维度：

*   **安全架构全面升级**：合并了多个关键安全 PR。
    *   [PR #528](qhkm/zeptoclaw PR #528)：实现了工具执行的在内存哈希链审计追踪，为操作记录提供防篡改能力。
    *   [PR #527](qhkm/zeptoclaw PR #527)：增加了配置时的 SSRF 端点校验，填补了用户自定义 Provider API 端点的安全漏洞。
    *   [PR #526](qhkm/zeptoclaw PR #526)：引入了 Skill 下载的 SHA256 校验，防止供应链投毒攻击。
*   **基础设施与稳定性修复**：
    *   [PR #529](qhkm/zeptoclaw PR #529)：修复了 Rust 1.95 升级带来的 Clippy Lint 错误，解除 CI 阻塞。
    *   [PR #523](qhkm/zeptoclaw PR #523)：修复了 Telegram Channel 配置的兼容性问题，解决了网关模式无法识别配置的 Bug。
    *   大量依赖项更新（如 `cargo-deny-action`, `taiki-e/install-action`, `uuid`, `libc` 等）已合并，保持依赖树新鲜度。
*   **功能评估与决策**：
    *   [PR #525](qhkm/zeptoclaw PR #525)：评估了通用工具库 Crate 的可行性，决定暂不引入，保持架构独立性。

## 4. 社区热点
今日社区讨论焦点集中在边缘计算能力的拓展与系统健壮性设计上：

*   **[Issue #541](qhkm/zeptoclaw Issue #541) [feat, P2-high]**: **Liquid AI (LFM) 集成**。维护者 @qhkm 发起了对 Liquid AI 模型的集成讨论，强调其非 Transformer 架构在边缘设备上的低内存优势，这是项目向“原生边缘智能”迈进的重要信号。
*   **[Issue #537](qhkm/zeptoclaw Issue #537) [chore, P1-critical]**: **二进制体积预算门禁**。提议在 CI 中加入硬性限制（>7MB 即失败），以捍卫项目“6MB 运行时”的战略护城河，引发了关于依赖管理的深层思考。
*   **[Issue #522](qhkm/zeptoclaw Issue #522) [bug]**: **Telegram 配置 Bug**。由社区用户 @Gantzfried 报告，指出配置文件加载失败的问题，维护者反应迅速，当天即有修复 PR 合并，体现了良好的社区响应速度。

## 5. Bug 与稳定性
今日修复了几个影响用户体验和开发流程的关键问题：

1.  **[P2-High] Telegram Channel 配置失效** ([Issue #522](qhkm/zeptoclaw Issue #522))：
    *   **现象**：Gateway 模式下无法正确加载 `config.json` 中的 Telegram 配置。
    *   **状态**：已由 [PR #523](qhkm/zeptoclaw PR #523) 修复，增加了对遗留配置键名的兼容性推断。
2.  **[P2-High] CI 流水线失败** ([Issue #534](qhkm/zeptoclaw Issue #534))：
    *   **现象**：Rust 1.95 新增 Clippy Lints 导致构建报错，以及 `rustls-webpki` 安全公告导致的检查失败。
    *   **状态**：已由 [PR #529](qhkm/zeptoclaw PR #529) 和 [PR #542](qhkm/zeptoclaw PR #542) 修复。

## 6. 功能请求与路线图信号
今日新增的 Issue 揭示了项目下一阶段明确的路线图方向——**极致的边缘适配性**：

*   **离线与弱网支持**：[Issue #539](qhkm/zeptoclaw Issue #539) 请求增加离线模式，支持在云端不可用时回退到本地模型，这是机器人与工业场景的核心刚需。
*   **IoT 原生集成**：[Issue #538](qhkm/zeptoclaw Issue #538) 提议将 MQTT 提升为一级 Channel，直接连接 Home Assistant 和工业 PLC，可能很快会被纳入开发日程。
*   **配置成熟度**：[Issue #530](qhkm/zeptoclaw Issue #530) 提出的配置版本化与迁移机制，标志着项目正从“极客工具”向“企业级产品”过渡，解决向后兼容性痛点。
*   **下一版本预测**：考虑到 [Issue #541](qhkm/zeptoclaw Issue #541) 已有对应的 [PR #543](qhkm/zeptoclaw PR #543) 开启，**Liquid AI 提供者支持**极可能是下一个合并的功能。

## 7. 用户反馈摘要
从 Issue 评论与 PR 描述中提炼出的用户痛点主要集中在：

*   **配置复杂度与兼容性**：用户 @Gantzfried 遇到的 Telegram 配置问题 ([Issue #522](qhkm/zeptoclaw Issue #522)) 反映了配置字段变更带来的迁移痛苦，维护者已通过增强向后兼容性解决。
*   **边缘部署的真实感**：维护者多次提及“树莓派”、“6MB 限制”和“工厂环境”，表明核心用户群对轻量化、能在资源受限环境中稳定运行的渴望极其强烈。
*   **安全性担忧**：关于 Skill 安全校验 ([Issue #535](qhkm/zeptoclaw Issue #535)) 和 Hash 审计 ([Issue #221](qhkm/zeptoclaw Issue #221)) 的讨论，显示出对 Agent 自主执行代码/命令的天然不信任感，急需透明的审计机制。

## 8. 待处理积压
*   **[PR #543](qhkm/zeptoclaw PR #543) [OPEN]**: **feat(providers): add Liquid AI (LFM2)**。该 PR 正在等待审查合并，是连接边缘模型生态的关键一步。
*   **[PR #517](qhkm/zeptoclaw PR #517) [OPEN]**: **chore(deps): bump sha2**。依赖升级 PR 尚未合并，需关注是否存在兼容性问题。
*   **[Issue #530](qhkm/zeptoclaw Issue #530) [P1-critical]**: **配置版本化**。作为 P1 级别的关键任务，目前尚未见对应的实现 PR，建议维护者优先排期，防止未来版本升级导致用户配置崩坏。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-04-23)

## 1. 今日速览
EasyClaw 项目今日整体呈现“开发端活跃、社区端静默”的态势。在过去24小时内，项目连续发布了 v1.8.5 和 v1.8.6 两个新版本，显示出维护者在解决特定平台兼容性问题上进行了快速迭代。与此同时，社区互动方面出现“零波动”，无新增、活跃或关闭的 Issues 与 PRs，表明目前用户反馈渠道处于暂时静默期。整体来看，项目维护重心当前高度集中在版本交付与安装体验优化上。

## 2. 版本发布
今日项目连续发布了两个更新版本，重点解决了 macOS 平台的部署问题：

*   **[v1.8.6: RivonClaw v1.8.6](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.6)**
*   **[v1.8.5: RivonClaw v1.8.5](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.5)**

**更新内容分析：**
两个版本的 Release Notes 内容高度一致，均聚焦于 **macOS 安装故障排除**。
*   **核心问题：** 解决 macOS 用户下载后提示“'RivonClaw' is damaged and can't be opened”（应用已损坏，无法打开）的问题。
*   **原因定位：** 明确指出该问题系 macOS Gatekeeper 安全机制拦截未签名应用所致，并非文件实际损坏。
*   **解决方案：** 提供了通过终端（Terminal）执行命令的修复指引（注：日志中指引内容截断，推测涉及 `xattr` 命令移除隔离属性）。

**迁移注意事项：**
*   macOS 用户在升级至 v1.8.6 后，若遭遇无法启动的情况，需严格按照 Release Notes 中的终端命令操作，这属于系统安全策略限制，非软件本身 Bug。
*   一日内连续发布两个小版本，暗示 v1.8.5 可能存在修复不彻底或打包问题，建议用户直接升级至 **v1.8.6**。

## 3. 项目进展
今日无公开的 Pull Request 合并或关闭记录。

项目进推进主要体现版本发布上。鉴于 v1.8.5 与 v1.8.6 发布时间接近且内容相似，推测维护者在后台进行了紧急修复或打包调整，主要推进了 macOS 平台的软件可用性修复工作，确保了开源分发的合规性与用户体验。

## 4. 社区热点
今日无活跃的 Issues 或 Pull Requests 讨论。社区层面暂无热点话题。

## 5. Bug 与稳定性
今日未收到用户提交的新 Bug 报告。但根据 Release Notes 反推，**macOS 平台的应用签名/公证问题**是目前影响稳定性的主要因素。

*   **问题：** 应用在 macOS 上因缺少签名被 Gatekeeper 拦截。
*   **严重程度：** 中等（会导致初级用户无法启动应用）。
*   **状态：** 已在文档层面提供解决方案，暂未从代码层面解决签名问题（可能涉及签名成本或流程问题）。

## 6. 功能请求与路线图信号
今日无新增功能请求。从频繁的安装指引更新来看，项目近期路线图可能侧重于**跨平台兼容性优化**与**用户安装门槛降低**。

## 7. 用户反馈摘要
由于今日无 Issue 评论数据，无法提取直接的用户声音。但 Release Notes 中特别强调 macOS 损坏提示的解决方案，侧面反映了**部分 macOS 用户曾遭遇安装失败**，并对“应用已损坏”的错误信息感到困惑。维护者通过更新文档说明，积极回应了这一痛点。

## 8. 待处理积压
今日数据源中未显示长期未响应的 Issue 或 PR。鉴于今日零互动，建议关注后续几天是否有针对 v1.8.6 版本的反馈涌现，以便及时清理潜在积压。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*