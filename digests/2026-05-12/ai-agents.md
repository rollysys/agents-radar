# OpenClaw 生态日报 2026-05-12

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-12 03:32 UTC

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

# OpenClaw 项目动态日报 (2026-05-12)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，Issues 与 PRs 更新量均达 500 条，显示出社区互动频繁且迭代节奏紧凑。然而，PR 积压情况严重（463 条待合并 vs 37 条已处理），提示维护者审核压力巨大或正处于内部功能整合期。项目连续发布 v2026.5.10-beta.4 和 beta.5，主要优化 CI 流程与 Fly.io 运行时环境检测。当前社区焦点集中在近期版本的性能回归问题及多智能体场景下的功能完善。

## 2. 版本发布
今日发布两个 Beta 版本，均侧重于底层基础设施优化：
- **v2026.5.10-beta.5** ([Release Link](https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.5))
- **v2026.5.10-beta.4** ([Release Link](https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.4))

**更新详情**：
1.  **CI 增强**：在 Plugin Prerelease 流程中引入了非阻塞的 `plugin-inspector-advisory` 工件。此举旨在捕获捆绑插件的兼容性诊断信息，而不会阻塞发布门控，有助于提高发布效率。
2.  **Runtime/Fly 适配**：增强了运行时环境感知能力，现在可以通过环境变量自动检测 Fly Machines 容器环境，从而确保 Gateway 正确绑定网络地址。

## 3. 项目进展
尽管合并数量较少，但部分关键 PR 展示了重要的架构改进与修复方向：
- **性能优化**：PR [#65134](https://github.com/openclaw/openclaw/pull/65134) 提议使用轻量级的 `completeSimple` 替代 `runEmbeddedPiAgent` 来生成 LLM slug，旨在解决当前实现消耗大量 Token（16k-48k）的问题，这对降低运行成本有直接意义。
- **平台集成修复**：PR [#64920](https://github.com/openclaw/openclaw/pull/64920) 修复了飞书话题组消息并发处理受限的问题，显著改善了多话题场景下的响应速度。
- **新功能支持**：PR [#64064](https://github.com/openclaw/openclaw/pull/64064) 正在推进对 Anthropic advisor tool 的支持，这将允许模型在推理过程中咨询独立的实例，扩展了 Agent 的能力边界。
- **配置灵活性**：PR [#80661](https://github.com/openclaw/openclaw/pull/80661) 提议将运行循环的重试限制配置化，赋予运维人员更多针对成本和失败恢复策略的控制权。

## 4. 社区热点
今日讨论最热烈的话题集中在系统稳定性与多智能体架构支持：
- **严重性能回归** ([#76562](https://github.com/openclaw/openclaw/issues/76562))：用户报告从 `2026.4.24` 升级后，网关进程 CPU 占用率飙升至 100%，控制面 RPC 延迟显著增加，导致系统不稳定。该问题引发了广泛共鸣，目前尚未有明确的修复方案。
- **Agent 响应中断** ([#76877](https://github.com/openclaw/openclaw/issues/76877) - Closed)：用户反馈 Agent 在工作中途停止响应，需手动询问进度才能恢复。虽然该 Issue 已关闭，但结合高 CPU 问题，暗示调度或心跳机制可能存在瓶颈。
- **多智能体隔离需求** ([#63829](https://github.com/openclaw/openclaw/issues/63829))：用户强烈请求支持 Per-agent memory-wiki 配置，指出当前全局共享知识库无法满足多 Agent 独立隔离的场景需求，这是迈向成熟多智能体架构的关键一步。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及性能、配置兼容性及运行时稳定性：

**🔴 严重**
- **高 CPU 与控制面延迟** ([#76562](https://github.com/openclaw/openclaw/issues/76562))：升级后系统几乎不可用，Node 进程 CPU 满载，需立即排查。
- **连锁故障导致上下文丢失** ([#80040](https://github.com/openclaw/openclaw/issues/80040))：OAuth 失效触发 Provider 切换，进而导致工具重复执行和缓存丢失，严重影响对话连续性。

**🟠 一般**
- **Gateway 启动过慢** ([#61278](https://github.com/openclaw/openclaw/issues/61278))：Hook 初始化阻塞主进程，导致启动耗时约 4 分钟，影响运维效率。
- **HTTP 连接池缺失** ([#78851](https://github.com/openclaw/openclaw/issues/78851))：每次 Agent 运行均建立新连接，导致模型解析阶段固定耗时 7-8 秒。
- **配置校验失败** ([#63101](https://github.com/openclaw/openclaw/issues/63101))：升级到 v4.8 后飞书渠道配置报错 "must NOT have additional properties"，存在破坏性变更。

**ℹ️ 测试噪音**
- 多个 QA harness 相关 Issue（如 [#80320](https://github.com/openclaw/openclaw/issues/80320), [#80312](https://github.com/openclaw/openclaw/issues/80312)）被证实为测试框架本身的误报，而非产品 Bug，建议维护者优化 Issue 分类标签以免混淆。

## 6. 功能请求与路线图信号
- **多槽位记忆架构** ([#60572](https://github.com/openclaw/openclaw/issues/60572))：提议支持多个 Memory 插件并行工作，处理不同层级的记忆。结合 Per-agent memory-wiki 的需求，预示着记忆系统将向更模块化、分层化的方向演进。
- **敏感数据脱敏** ([#64046](https://github.com/openclaw/openclaw/issues/64046))：用户指出 API Key 和 Token 在日志及 UI 中明文展示存在安全隐患，呼吁全面支持脱敏，这是企业级部署的刚需。
- **模型回退重试策略** ([#59413](https://github.com/openclaw/openclaw/issues/59413))：针对代理/池化 API 提供商，请求支持单点失败后的重试机制，而非直接切换模型，这对于高可用性网关至关重要。

## 7. 用户反馈摘要
- **性能焦虑**：多位用户反映近期版本存在明显的性能退化，尤其是资源占用飙升和响应延迟，影响了生产环境的稳定性。
- **运维痛点**：缺乏连接池支持导致的固定延迟，以及 Hook 初始化阻塞启动，成为部署和扩缩容的主要瓶颈。
- **企业级特性缺失**：多租户隔离 ([#60127](https://github.com/openclaw/openclaw/issues/60127)) 和数据脱敏功能的缺失，阻碍了 OpenClaw 在更严格合规要求场景下的应用。

## 8. 待处理积压
- **PR 审核积压**：当前有 **463 条 PR 处于待合并状态**，其中包括 PR [#79925](https://github.com/openclaw/openclaw/pull/79925)（上下文压力感知续行）等大型功能更新。巨大的积压量可能导致新功能交付延迟及合并冲突频发，建议社区关注审核资源的投入。
- **长期未决 Issue**：Issue [#48003](https://github.com/openclaw/openclaw/issues/48003) (Steer mode 消息注入失效) 和 [#57901](https://github.com/openclaw/openclaw/issues/57901) (Safeguard compaction 配置失效) 长期处于 Open 状态，这些核心功能的回归可能影响用户升级意愿。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-05-12)

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于**从单点功能突破向多租户、多模态、高并发架构演进**的关键转折期。头部项目（如 OpenClaw）面临规模化带来的性能瓶颈与治理压力，中型项目（如 NanoBot, IronClaw）则积极重构架构以支持多用户与复杂调度。**多智能体协作（A2A）**、**记忆系统的隔离与分层**以及**成本控制**成为今日生态中最显著的技术共识。同时，边缘计算（PicoClaw）与桌面端（Hermes, LobsterAI）的进展显示 AI 助手正在向更广泛的部署场景渗透。

## 2. 各项目活跃度对比

| 项目名称 | Issues 动态 | PRs 动态 | Release 情况 | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 更新 500+ (高热) | 更新 500+ (积压 463) | v2026.5.10-beta.4/5 | 🟡 **拥堵期**：社区互动极强，但维护审核压力巨大，存在严重性能回归。 |
| **CoPaw** | 更新 50, 关闭 25 | 更新 42, 合并 18 | 无 | 🟢 **高效期**：缺陷修复率高，迭代节奏快，社区响应迅速。 |
| **IronClaw** | 更新 38 | 更新 50 | v0.28.1 | 🟢 **重构期**：并行推进 "Reborn" 架构升级与新功能，活跃度极高。 |
| **Zeroclaw** | 更新 19, 关闭 9 | 更新 50, 合并 21 | 无 (v0.8.0 准备中) | 🟢 **冲刺期**：密集修复 Bug，为大版本集成做准备，代码吞吐量大。 |
| **Hermes Agent**| 新增 48, 关闭 2 | 合并 5 | Desktop Test Build | 🟡 **压力期**：Issue 积压严重，核心功能迭代受阻于平台兼容性问题。 |
| **NanoBot** | 更新 11 | 更新 24, 合并 8 | 无 | 🟢 **成长期**：核心架构向插件化与多用户转型，质量与速度平衡良好。 |
| **PicoClaw** | 关闭 8 | 合并 10 | Nightly Build | 🟢 **稳健期**：多渠道集成顺利，嵌入式特色鲜明。 |
| **NanoClaw** | 新增若干关键Issue | 更新 18, 合并 9 | 无 | 🟡 **修复期**：快速修复架构问题，但报告了严重的底层稳定性 Bug。 |
| **LobsterAI** | 无新增 | 更新 9, 合并 7 | 无 | 🟢 **打磨期**：专注 UI/UX 细节与记忆系统重构，迭代稳健。 |
| **NullClaw** | 关闭 1 关键Issue | 活跃 5 (待合并) | 无 | 🟢 **维稳期**：对阻断性 Bug 响应极快，功能更新谨慎。 |
| **Moltis** | 处理 4, 关闭 3 | 合并 2 | 无 | 🟢 **维护期**：聚焦部署脚本修复，响应快但功能更新少。 |
| **ZeptoClaw** | 关闭 1 (审计) | 无 | 无 | 🔵 **静默期**：仅进行安全审计，无功能性活动。 |

## 3. OpenClaw 在生态中的定位

*   **规模定位**：OpenClaw 是目前生态中**流量最大、用户痛点最集中**的核心参照项目。其 Issue 与 PR 更新量级（500+）远超其他项目，显示出极高的社区关注度。
*   **技术路线差异**：
    *   相比 **NanoBot** 和 **IronClaw** 正在推进的轻量级插件化/模块化重构，OpenClaw 正在为早期架构的“技术债”买单（如严重的性能回归 #76562 和 PR 积压）。
    *   相比 **PicoClaw** 专注于嵌入式场景，OpenClaw 更侧重于云端与网关的高并发处理（Fly.io 适配）。
*   **优势与隐忧**：优势在于社区反馈数据丰富，生态效应强；隐忧在于维护效率跟不上用户增长，**性能焦虑**（CPU 飙升、Token 消耗）成为当前最大掣肘，且多智能体架构（Memory Wiki）尚未成熟，落后于用户需求。

## 4. 共同关注的技术方向

1.  **多租户与记忆隔离**
    *   **涉及项目**：OpenClaw (#63829), NanoBot (#3744), IronClaw (#3264)。
    *   **具体诉求**：随着 AI 助手从“个人玩具”转向“团队服务”，全局共享记忆机制失效。用户强烈请求 Per-agent / Per-user 的记忆隔离，这是多智能体架构的基础设施刚需。

2.  **Token 成本与性能优化**
    *   **涉及项目**：OpenClaw (#65134), Hermes Agent (#18733)。
    *   **具体诉求**：由于 LLM 调用成本高昂，社区普遍关注上下文压缩和轻量化推理。OpenClaw 提议用 `completeSimple` 替代重量级 Agent 调用以降低 Token 消耗；Hermes 用户请求针对大上下文模型设置独立压缩阈值。

3.  **Provider 兼容性与稳定性**
    *   **涉及项目**：Zeroclaw (#6584), CoPaw (#4133), NullClaw (#902), PicoClaw (#2645)。
    *   **具体诉求**：模型服务商（OpenAI, Anthropic, SiliconFlow, Bedrock 等）接口变更频繁，Reasoning 字段支持、流式输出修复、网络连接稳定性是各项目的共同痛点。

4.  **A2A (Agent-to-Agent) 协议**
    *   **涉及项目**：Hermes Agent (#514)。
    *   **趋势信号**：社区开始呼吁标准化的 Agent 互操作协议，预示着未来的竞争将从单体智能体能力转向多 Agent 协作生态。

## 5. 差异化定位分析

| 维度 | OpenClaw (核心参照) | NanoBot (学术/轻量) | PicoClaw (边缘计算) | IronClaw (架构重构) | Hermes Agent (桌面/互操作) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | 网关性能、企业级集成 | 插件化架构、多用户隔离 | 嵌入式部署、多渠道接入 | 多租户架构、Slack/微信集成 | 桌面端体验、A2A 协议 |
| **目标用户** | 大规模部署用户、运维人员 | 开发者、个人极客 | 边缘设备开发者、IoT 场景 | 企业级应用开发者 | 终端用户、多 Agent 开发者 |
| **架构特点** | 单体高并发，负载压力大 | 模块化，易于扩展 | 轻量级，支持 Yocto | "Reborn" 全栈重构中 | 沙箱执行，多进程管理 |

## 6. 社区热度与成熟度

*   **快速迭代期**：**NanoBot, IronClaw, CoPaw**。这些项目处于功能扩展与架构升级阶段，PR 合并快，社区对架构性变动（如多用户支持）讨论热烈，代码质量与活跃度平衡较好。
*   **质量巩固期**：**Zeroclaw, PicoClaw, LobsterAI**。这些项目专注于修复特定领域的 Bug（如 Provider 兼容性、UI 细节），迭代稳健，较少出现颠覆性架构变更，适合生产环境试用。
*   **拥堵治理期**：**OpenClaw**。作为核心项目，面临“成长的烦恼”，社区热度极高但维护瓶颈显现，需重点关注 PR 审核效率与性能回归问题。
*   **探索预研期**：**Hermes Agent**。虽积压较多，但在 A2A 协议、沙箱执行等前沿领域探索较深。

## 7. 值得关注的趋势信号

1.  **记忆系统的“数据库化”**：
    多个项目（LobsterAI 的 Dreaming API, NanoBot 的 Session Isolation）显示，记忆系统正从简单的文件存储向结构化、可检索、支持自演化的数据库架构演进。**“记忆隔离”已成为多用户场景下的核心功能分水岭。**

2.  **边缘侧 AI 的崛起**：
    PicoClaw 引入 Yocto/OpenEmbedded 支持是一个强烈信号，表明开源 AI 助手正在摆脱对云端高算力的绝对依赖，向**端侧/嵌入式设备**渗透，这将极大拓展 AI 的应用边界。

3.  **从“能用”到“耐用”的转变**：
    今日大量 Bug 报告集中在**断连重连、PID 进程管理、OAuth 失效重试**等非功能性需求上。这表明开源 AI 助手已跨越“Demo 阶段”，用户开始在生产环境对**鲁棒性**提出严苛要求。

4.  **开发者体验 (DX) 的精细化**：
    Shell 环境自定义、Provider 连通性测试 UI（CoPaw, PicoClaw）等功能的加入，显示出项目方正致力于降低配置门槛，提升开发者/运维人员在不同环境下的调试效率。

**分析师建议：** 对于技术决策者，当前应优先关注 **NanoBot** 和 **IronClaw** 的架构演进，以解决多租户隔离难题；对于开发者，需警惕 OpenClaw 当前的性能回归风险，并在自身项目中预研 **记忆分层** 架构。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-12)

## 1. 今日速览
NanoBot 项目今日保持高度活跃，核心架构向插件化与多租户方向迈出关键一步。过去 24 小时内，项目共处理了 11 条 Issue 更新和 24 条 PR 更新，其中 8 个 PR 成功合并或关闭，迭代效率显著。重点进展包括核心工具系统的插件化重构、WebUI 多用户支持以及多个 Provider 兼容性修复。社区讨论焦点集中在多用户场景下的会话隔离、记忆机制优化以及网络不稳定环境下的模型切换需求。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 8 个 PR 合并或关闭，项目在架构扩展性与稳定性方面取得实质进展：

*   **架构重构**：[PR #3729](HKUDS/nanobot PR #3729) 已合并，将核心工具系统从硬编码重构为自描述插件模式，大幅降低了扩展新工具的复杂度。
*   **多租户支持**：[PR #3749](HKUDS/nanobot PR #3749) 已合并，引入了 WebUI 多账户体系与用户状态隔离（`~/.nanobot/users/<ulid>/`），标志着 NanoBot 正式支持多用户场景。
*   **关键修复**：
    *   [PR #3734](HKUDS/nanobot PR #3734) 修复了小米 MiMo 模型无法关闭 Reasoning 模式的问题 ([Issue #3585](HKUDS/nanobot Issue #3585))。
    *   [PR #3751](HKUDS/nanobot PR #3751) 修复了企业微信文件名识别错误的问题 ([Issue #3737](HKUDS/nanobot Issue #3737))。
    *   [PR #3733](HKUDS/nanobot PR #3733) 修复了非 HTTPS 环境下 WebUI 的随机 UUID 生成崩溃问题。
*   **生态扩展**：[PR #3736](HKUDS/nanobot PR #3736) 新增了对 LongCat (美团) Provider 的支持。

## 4. 社区热点
*   **多用户记忆隔离机制讨论**：[Issue #3744](HKUDS/nanobot Issue #3744) 引发了关于 Session 级别 MEMORY 功能的热烈讨论。用户 @IamWWT 提出在多 IM 用户共用同一个 Agent 时，现有的 `USER.md` 和 `MEMORY.md` 机制存在冲突，亟需隔离方案。这反映出社区对 NanoBot 从“个人助手”向“团队服务”转型的强烈需求。
*   **生产环境部署方案**：[PR #3621](HKUDS/nanobot PR #3621) 提出了针对 Hugging Face Spaces 的多角色 Agent 编排方案，展示了社区在生产环境部署复杂 Agent 架构方面的探索，虽未合并但关注度较高。
*   **动态模型切换需求**：[Issue #3742](HKUDS/nanobot Issue #3742) 用户请求支持 `/model` 斜杠命令以便在网络不佳时动态切换模型，反映了国内用户跨境访问 LLM API 的实际痛点。

## 5. Bug 与稳定性
*   **严重**：[Issue #2828](HKUDS/nanobot Issue #2828) 报告 DuckDuckGo 搜索导致整个系统挂起，甚至无法通过 Ctrl+C 终止，需强制停止进程。该 Issue 已关闭，推测已在近期重构中修复或失效。
*   **中等**：[Issue #3739](HKUDS/nanobot Issue #3739) 指出在 MCP 服务未启动时，NanoBot Agent 启动直接报错，缺少优雅的错误提示或降级处理。
*   **中等**：[Issue #3746](HKUDS/nanobot Issue #3746) 报告 WebUI 启动后预加载超过 1MB 的代码高亮资源，影响加载性能。
*   **已修复**：[Issue #3585](HKUDS/nanobot Issue #3585) 小米 MiMo 模型无法禁用推理模式的问题已通过 [PR #3734](HKUDS/nanobot PR #3734) 修复。

## 6. 功能请求与路线图信号
*   **网页搜索增强**：[Issue #3741](HKUDS/nanobot Issue #3741) 与 [PR #3743](HKUDS/nanobot PR #3743) 均指向支持 Provider 托管的网页搜索工具（如 Azure OpenAI），这表明项目正在寻求更原生的、减少本地依赖的网络搜索集成方案。
*   **会话持久化与恢复**：[Issue #3689](HKUDS/nanobot Issue #3689) 用户提出中断会话后上下文丢失的问题，希望能保留中断前的状态。结合今日合并的多租户架构，会话级的状态管理将成为下一阶段的优化重点。
*   **Token 用量追踪**：[Issue #3731](HKUDS/nanobot Issue #3731) 请求增加 `/insights` 命令以追踪历史 Token 消耗，表明用户对成本控制的需求日益增长。

## 7. 用户反馈摘要
*   **痛点**：多用户共享实例时，记忆文件（`USER.md`）混淆严重，无法区分不同用户的上下文 ([Issue #3744](HKUDS/nanobot Issue #3744))。
*   **痛点**：Agent 陷入死循环或执行长任务时，用户尝试打断并重置，但 Agent 会“失忆”，丢失之前的任务上下文 ([Issue #3689](HKUDS/nanobot Issue #3689))。
*   **满意度**：社区对插件化架构 ([PR #3729](HKUDS/nanobot PR #3729)) 反应积极，认为这解决了工具注册的硬编码痛点；对企业微信文件名识别的修复 ([PR #3751](HKUDS/nanobot PR #3751)) 解决了实际办公场景中的常见问题。

## 8. 待处理积压
*   **长期未响应**：[PR #3621](HKUDS/nanobot PR #3621) 关于 HF Spaces 多角色部署的 PR 更新多日但仍未合并，建议维护者 Review 该方案是否符合主线架构。
*   **需关注**：[Issue #3744](HKUDS/nanobot Issue #3744) 涉及架构层面的多用户隔离，尽管今日已有多租户 PR 合并，但记忆隔离的具体实现路径仍需官方确认或指引。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-12)

## 1. 今日速览
Zeroclaw 项目今日保持**高活跃度**，社区贡献与维护者响应速度极快。过去 24 小时内共有 50 个 PR 更新（其中 21 个已合并/关闭）和 19 个 Issue 更新（关闭 9 个）。项目重心集中在**Provider 兼容性修复**（特别是 OpenAI-Compatible 的 Reasoning 字段支持）、**渠道稳定性**（Matrix/Discord/Telegram）以及**v0.8.0 大版本集成**上。尽管无新版本发布，但 `integration/v0.8.0` 分支的 PR 活动频繁，预示着重大更新即将到来。

## 2. 版本发布
无新版本发布。但需关注 PR #6398 正在密集集成 v0.8.0 相关代码，涉及 Schema v3 迁移，预计下一版本将包含破坏性变更。

## 3. 项目进展
今日合并/关闭的关键 PR 推动了稳定性和兼容性显著提升：
- **Provider 兼容性增强**：合并了 PR #6281（Email InboxAPI 文档）和修复了 OpenAI-Compatible provider 对 `reasoning` 字段的支持 (关联 Issue #6584, PR #6587)，解决了 vLLM/OpenRouter 用户的推理内容丢失痛点。
- **渠道修复**：解决了 Matrix 渠道的构建失败问题 (Issue #6530 已关闭)，并修复了 Discord 媒体收发缺口 (PR #6572) 和 Telegram TTS 语音回复触发逻辑 (PR #6588)。
- **文档与体验**：修复了 Homebrew 合并失败的问题 (Issue #6547)，更新了沙箱文档 (PR #6581) 和网关配置文档 (PR #6583)。
- **核心架构**：PR #6398 (Integration/v0.8.0) 持续更新，正在进行 Schema v3 迁移的最后冲刺。

## 4. 社区热点
今日讨论最活跃、影响范围最广的内容：
- **[Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)**: **审计：追踪批量回滚中丢失的 153 个提交**。
  - *分析*：这是一个高风险的技术债务清理工作，维护者正在尝试恢复 3 月份被回滚掉的代码，涉及大量历史功能和修复，社区高度关注恢复进度。
- **[PR #6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398)**: **Integration/v0.8.0**。
  - *分析*：作为下一个大版本的集成分支，涉及几乎全模块的重构（core, agent, channel 等），是当前项目最核心的工程节点。
- **[Issue #6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)**: **[Bug]: 单轮/多轮对话丢失 user message**。
  - *分析*：严重程度 S1，涉及自定义 Provider 的兼容性，用户反馈强烈，目前仍未解决，是今日最紧迫的 Bug。

## 5. Bug 与稳定性
今日报告的关键 Bug 按严重程度排列：

- **S1 - 阻塞工作流**:
  - **[Issue #6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)**: 使用自定义 Provider 时出现 User Message 丢失，导致 "All providers/models failed"。目前状态 Open，尚无 Fix PR。
- **S2 - 功能降级**:
  - **[Issue #6589](https://github.com/zeroclaw-labs/zeroclaw/issues/6589)**: RouterProvider 在混合模型设置下，视觉能力回退逻辑失效。
  - **[Issue #6584](https://github.com/zeroclaw-labs/zeroclaw/issues/6584)**: OpenAI-Compatible Provider 忽略 `reasoning` 字段。**(已有修复 PR #6587)**。
- **已修复**:
  - **[Issue #6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530)**: Matrix SDK 升级导致的递归限制溢出构建失败（已关闭）。
  - **[Issue #4083](https://github.com/zeroclaw-labs/zeroclaw/issues/4083)**: Telegram Bot 无法使用 Web Search 工具（已关闭）。

## 6. 功能请求与路线图信号
结合 Issue 与 PR，发现以下路线图信号：
- **多模态与媒体生成**: [Issue #6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) 提出 **ComfyUI/Comfy Cloud 集成**，希望将其作为一级媒体生成 Provider，支持远程工作流和未来的视频生成 (`gen_video`)。这表明项目正向多媒体 Agent 平台演进。
- **隐私搜索**: [Issue #5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) 提议增加 **SearXNG** 支持，以解决 DuckDuckGo 的验证码阻塞问题。PR #6582 已开始着手改善 DuckDuckGo 的阻塞检测。
- **v0.8.0 集成**: PR #6398 显示正在迁移至 Schema v3，这将是一个破坏性变更，建议用户密切关注迁移指南。

## 7. 用户反馈摘要
从 Issues 评论和描述中提炼的痛点：
- **消息丢失是致命伤**: 使用本地部署模型（如 Qwen）的用户对消息丢失极其敏感 (#6034)，这直接导致 Agent 工作流中断。
- **文档滞后**: 多个 Issue (#6547, #6393) 指出文档与实际代码不一致，特别是 Docker 安装指令和 Homebrew 版本更新延迟，增加了新用户的上手门槛。
- **Reasoning 内容不可见**: 用户希望在使用 OpenRouter/vLLM 等兼容接口时能看到模型的思考过程 (#6584)，PR #6587 已响应此需求。

## 8. 待处理积压
提醒维护者关注以下长期未解决或高风险项：
- **[Issue #6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)**: 自定义 Provider 消息丢失（S1 级别，P1 优先级），需立即介入。
- **[Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)**: 历史代码恢复审计工作仍在进行中，需确保 153 个提交的功能被正确找回或重写。
- **[PR #6553](https://github.com/zeroclaw-labs/zeroclaw/pull/6553)**: 修复 SSE 日志流长期不可用的问题，对于远程部署用户至关重要，目前仍为 Open 状态，建议尽快合并。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-12)

## 1. 今日速览
Hermes Agent 项目今日呈现高活跃度与高积压并存的状态。过去 24 小时内，社区提交了 **48 条新 Issue** 与大量 PR 更新，显示用户对项目的高度关注，但仅有 **2 条 Issue 被关闭** 和 **5 条 PR 被合并**，表明项目正处于功能迭代与 Bug 修复的攻坚期，维护团队面临较大的响应压力。核心关注点集中在跨平台客户端稳定性（Desktop/Telegram）、Agent 互操作性协议（A2A）以及底层 Context 压缩机制的健壮性上。项目发布了桌面端测试版本，标志着 GUI 客户端正在向正式版逼近。

## 2. 版本发布
- **Release: `desktop-pr20059-installers`**
  - **类型**: Ad-hoc 测试版 (非稳定版)
  - **内容**: 针对 PR #20059 的安装包构建，主要用于安装程序 UX 的冒烟测试。
  - **平台覆盖**: macOS arm64 (DMG), Windows x64/arm64 (NSIS), Linux x64/arm64 (AppImage)。
  - **注意**: 此版本未签名，仅供测试使用，不建议用于生产环境。Commit: `bff052d61`。

## 3. 项目进展
尽管今日合并数量较少（5 条），但活跃的 PR 列表揭示了开发团队正在重点解决以下领域：

- **平台适配与网关修复**: 针对多平台网关进行了大量修复，PR #23061 修复了 Telegram 处理不支持的文档类型时的逻辑错误；PR #23070 修复了 Signal 平台来自已链接设备的群组消息无法传递给 Agent 的问题。
- **桌面端与进程管理**: PR #24135 修复了 Dashboard 关闭后 PTY 子进程残留导致的资源耗尽问题；PR #21724 解决了 Docker 部署下 WebUI 误报网关状态的问题。
- **认证与核心逻辑**: PR #21743 修复了内置 Provider 忽略 `config.yaml` 中 `api_key` 的严重配置问题；PR #21953 优化了压缩模型对自定义上下文长度的识别逻辑。
- **集成扩展**: PR #8902 正在推进集成 Novita Agent Sandbox 作为终端后端，增强沙箱执行能力。

## 4. 社区热点
今日讨论最活跃的 Issue 集中在互操作性与底层架构设计：

1.  **[Issue #514] Feature: A2A (Agent-to-Agent) Protocol Support**
    - **热度**: 👍 4 | 评论 13
    - **分析**: 社区强烈呼吁支持 Google 的 A2A 协议，以解决 "Who can help me?" 的 Agent 发现与通信问题。这标志着用户需求已从单一 Agent 能力转向多 Agent 协作生态。
2.  **[Issue #15080] [Bug]: Claude Max OAuth Token Rejection**
    - **热度**: 评论 10
    - **分析**: 高优先级 Bug。用户在使用 Claude Max 订阅的 OAuth Token 时遭遇 HTTP 400 拒绝，严重影响 Anthropic 原生 Provider 的付费用户体验。
3.  **[Issue #16084] [Feature] Feishu CardKit Streaming**
    - **热度**: 👍 1 | 评论 5
    - **分析**: 飞书平台的流式输出体验优化，目前的消息更新机制导致频繁刷新和限流，用户希望引入 CardKit 改善体验。

## 5. Bug 与稳定性
今日报告了大量功能性 Bug，部分涉及核心流程阻塞：

**P1 - 严重**:
- **[Issue #15080]** Anthropic Provider 使用 OAuth Token 请求被拒，导致服务不可用。
- **[Issue #23979]** Cron 调度器缓存空模型导致任务执行失败。
- **[Issue #24140]** Telegram 机器人全线崩溃，因 MiniMax 模型上下文窗口低于硬编码阈值（64k）被拒绝。

**P2 - 高危**:
- **[Issue #24072]** 会话中切换模型时，`context_length` 配置未更新，导致上下文逻辑错误。
- **[Issue #23799]** 内存机制缺陷，OpenClaw 工具调用会触发全量子进程重建，造成资源泄漏。
- **[Issue #11020]** 浏览器工具生命周期管理缺陷，导致持久化浏览器会话被误杀。

**已有修复 PR (待合并)**:
- PR #21743 修复 API Key 读取问题。
- PR #24135 修复 PTY 进程残留问题。
- PR #21754 修复飞书平台进度条残留问题。

## 6. 功能请求与路线图信号
- **Agent 协作**: Issue #514 (A2A 协议) 的高讨论度显示出强烈的 **Multi-Agent 架构转型信号**。
- **记忆增强**: Issue #509 提出的 "Cognitive Memory Operations" 旨在引入 LLM 驱动的记忆编码与提取，弥补现有扁平化记忆系统的不足。
- **用户体验**: Issue #21910 请求类似 Claude Code 的 "Rewind/Edit" 功能，允许用户回滚对话，这是提升交互容错率的关键特性。
- **配置灵活性**: Issue #18733 建议为不同模型设置独立的压缩阈值，以适应 DeepSeek V4 等大上下文模型。

## 7. 用户反馈摘要
- **桌面端体验**: Windows 用户反馈初始化卡在 94% (Issue #24089，现已关闭)，macOS 用户反馈 PID 锁文件冲突 (Issue #24067)。
- **模型支持**: 用户对上下文窗口的硬性限制表示困惑，特别是 MiniMax 等小上下文模型在 Telegram 上完全不可用 (Issue #24140)。
- **配置复杂度**: 多个 Issue (如 #24072, #19753) 反映了配置优先级、Provider 切换时的状态残留问题，用户期望更健壮的配置热重载机制。
- **网络与连接**: 飞书、WhatsApp、Signal 等平台的网关连接稳定性依然是痛点，特别是断连后的自动重连机制缺失 (Issue #23491)。

## 8. 待处理积压
- **PR #8902 (Novita Agent Sandbox)**: 已开启近一个月，尚需最终审查合并，该功能对云端沙箱执行至关重要。
- **Issue #514 (A2A Support)**: 作为标志性功能请求，目前仍处于 Open 状态，需核心团队明确架构规划。
- **Issue #7798 (Smart Routing Bug)**: 涉及智能路由与压缩逻辑的核心 Bug，影响长期会话的稳定性，建议优先处理。

---
*分析师注：项目目前处于功能广度扩展（A2A、更多平台）与内部重构（Memory、Routing）的并行期，高Issue增量提示代码质量与测试覆盖率需同步提升。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-12)

## 1. 今日速览
PicoClaw 项目今日保持**高活跃度**，开发迭代速度显著加快。过去 24 小时内共有 **10 个 PR 被合并/关闭**，**8 个 Issue 得到解决**，且发布了一个新的 Nightly 版本 (`v0.2.8-nightly.20260512`)。项目在多模态交互能力和模型支持方面取得重要进展，新增了 Slack Webhook 支持并修复了 Bedrock 和 Telegram 的关键问题。社区反馈方面，用户对多模态消息支持和搜索服务的稳定性提出了明确需求。

## 2. 版本发布
- **Nightly Build: v0.2.8-nightly.20260512**
  - **更新性质**：自动构建版本，可能存在不稳定性，仅供测试尝鲜。
  - **变更范围**：涵盖了 `main` 分支自 `v0.2.8` 以来的所有最新提交，包括 Bedrock 流式支持、Slack 频道集成及 WebUI 配置优化。
  - **链接**：[Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## 3. 项目进展
今日共有 10 个 PR 关闭（推测已合并入主分支），显著提升了项目的功能完善度与稳定性：

- **多渠道支持增强**：
  - [PR #2719](https://github.com/sipeed/picoclaw/pull/2719) **新增 Slack Webhook 频道支持**，支持 Block Kit 格式化与 Markdown 转换，扩展了企业级应用场景。
  - [PR #2758](https://github.com/sipeed/picoclaw/pull/2758) **修复 Telegram 相册媒体组处理**，解决了媒体组消息被拆分处理的问题，提升了即时通讯体验。
- **模型能力优化**：
  - [PR #2645](https://github.com/sipeed/picoclaw/pull/2645) **实现 Bedrock Provider 实时流式传输**，修复了此前仅支持非流式响应的短板，大幅优化了 AWS 模型交互体验。
  - [PR #2581](https://github.com/sipeed/picoclaw/pull/2581) **修复 Codex 流式输出丢失问题**，确保从流事件中正确恢复输出内容。
- **WebUI 与配置重构**：
  - [PR #2831](https://github.com/sipeed/picoclaw/pull/2831) **重构模型配置表单基础**，为后续更复杂的 Provider 选择和连通性测试打下后端基础。
  - [PR #2565](https://github.com/sipeed/picoclaw/pull/2565) **修复配置加载逻辑**，解决了 `mention_only=false` 被错误覆盖的问题。
- **文档与生态**：
  - [PR #2852](https://github.com/sipeed/picoclaw/pull/2852) 增加了 Agent 自演化配置的文档说明。

## 4. 社区热点
今日社区讨论聚焦于**工具链的健壮性**与**多模态能力扩展**：

- **[PR #2856](https://github.com/sipeed/picoclaw/pull/2856) & Issue #2855**：关于 `message` 工具支持媒体附件的讨论。当前 Agent 发送图片需拆分为文本和文件两个步骤，社区强烈建议合并为一个原子操作，该 PR 正试图解决此痛点。
- **[Issue #2720](https://github.com/sipeed/picoclaw/issues/2720)**：关于 PID 文件导致崩溃循环的 Bug 报告。维护者与用户深入探讨了 PID 校验逻辑，指出当前仅检查 PID 存在性而未校验进程身份的缺陷，这是一个影响服务稳定性的高优先级问题。
- **[Issue #2582](https://github.com/sipeed/picoclaw/issues/2582)**：关于 Web Search API 额度耗尽时的自动 Fallback 机制请求。社区希望实现 `Brave → Tavily → ...` 的降级链路，该 Issue 虽被关闭，但引发了关于服务容错设计的思考。

## 5. Bug 与稳定性
今日报告并处理了若干关键 Bug，稳定性有所提升：

- **严重**：
  - [Issue #2720](https://github.com/sipeed/picoclaw/issues/2720)：**PID 单例检查缺陷导致崩溃循环**。当 PID 被系统其他进程复用时，Gateway 无法启动。目前尚未有合并的修复 PR，需紧急关注。
- **中等**：
  - [Issue #2796](https://github.com/sipeed/picoclaw/issues/2796)：**历史记录显示不全**。多次对话仅显示最后一条用户消息，影响用户体验，目前处于 Open 状态。
  - [Issue #2046](https://github.com/sipeed/picoclaw/issues/2046)：LongCat API 工具调用失败，已通过某次提交修复并关闭。
- **已修复**：
  - [Issue #2590](https://github.com/sipeed/picoclaw/issues/2590)：Android App 无法启动服务的问题已关闭。
  - [PR #2565](https://github.com/sipeed/picoclaw/pull/2565)：修复了 `mention_only` 配置项被错误重置的问题。

## 6. 功能请求与路线图信号
结合 Issues 与 PRs，发现以下明显的技术演进信号：

1.  **多模态通信标准化**：[Issue #2855](https://github.com/sipeed/picoclaw/issues/2855) 和 [PR #2856](https://github.com/sipeed/picoclaw/pull/2856) 表明项目正在将“图文并茂”的消息发送能力从底层 Channel 上升到 Agent 工具层，这将极大简化 Agent 编排逻辑。
2.  **嵌入式生态拓展**：[PR #2851](https://github.com/sipeed/picoclaw/pull/2851) 提交了 Yocto/OpenEmbedded 层支持，表明 PicoClaw 正积极进军专业的嵌入式 Linux 设备市场，利用其轻量级优势。
3.  **WebUI 配置体验重构**：一系列 PR（[PR #2831](https://github.com/sipeed/picoclaw/pull/2831), [PR #2832](https://github.com/sipeed/picoclaw/pull/2832), [PR #2833](https://github.com/sipeed/picoclaw/pull/2833)）显示正在重构 Web 配置界面，未来版本将支持可视化的 Provider 测试与模型目录管理。

## 7. 用户反馈摘要
- **痛点**：
  - 搜索 API 缺乏自动重试/降级机制，额度耗尽即报错（[Issue #2582](https://github.com/sipeed/picoclaw/issues/2582)）。
  - Android 端服务启动存在环境兼容性问题（[Issue #2590](https://github.com/sipeed/picoclaw/issues/2590)）。
  - 历史记录压缩逻辑影响用户查看完整上下文（[Issue #2796](https://github.com/sipeed/picoclaw/issues/2796)）。
- **正面反馈**：
  - 社区对新渠道（Slack, Telegram 相册）的支持反应积极。
  - 对 Nightly Build 的快速迭代表示认可，尤其是 Bedrock 流式支持的加入。

## 8. 待处理积压
- **高风险未解**：[Issue #2720](https://github.com/sipeed/picoclaw/issues/2720)（PID 校验崩溃循环）是目前最危险的潜在 Bug，建议维护者优先介入修复。
- **长期停滞 PR**：
  - [PR #2647](https://github.com/sipeed/picoclaw/pull/2647)（DuckDuckGo 默认搜索配置）虽标记为 Stale 但功能重要，建议合并以完善搜索工具链。
  - [PR #2763](https://github.com/sipeed/picoclaw/pull/2763)（Gemini Web Search Provider）目前处于 Open 状态，若合并将丰富搜索源选择。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-12)

## 1. 今日速览
NanoClaw 项目今日保持高强度的开发迭代，整体活跃度显著提升。过去 24 小时内共有 18 条 PR 更新，其中 9 条已完成合并，显示出维护团队在清理积压代码和推进新功能方面的强劲执行力。虽然今日无新版本发布，但合并的代码主要集中在提升系统稳定性（如隔离频道连接故障、修复容器唤醒逻辑）和扩展集成能力（如 Sentry、WhatsApp 重连）。与此同时，社区反馈了两个严重的底层稳定性问题（容器挂载配置丢失和消息静默丢失），目前尚未有修复 PR，值得核心团队高度关注。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 9 个 PR 被合并，重点修复了运行时稳定性与边缘情况处理：

*   **关键稳定性修复**：合并了 [PR #1785](https://github.com/nanocoai/nanoclaw/pull/1785)，修复了单个频道连接失败（如 Gmail OAuth 失效）导致整个服务崩溃的问题。现在单个频道故障会被隔离，不再影响其他频道的可用性，极大提升了生产环境的鲁棒性。
*   **Agent 行为修正**：[PR #2414](https://github.com/nanocoai/nanoclaw/pull/2414) 解决了 Agent 输出裸文本时被静默丢弃的问题，现在会引导 Agent 重新发送正确格式的消息；[PR #2413](https://github.com/nanocoai/nanoclaw/pull/2413) 优化了会话压缩后的消息路由提醒位置，确保 Agent 不会迷失上下文。
*   **兼容性与清理**：[PR #2410](https://github.com/nanocoai/nanoclaw/pull/2410) 修复了旧数据库模式下缺少 `on_wake` 列导致的容器崩溃循环；[PR #2408](https://github.com/nanocoai/nanoclaw/pull/2408) 完成了从旧命名空间 `qwibitai/nanoclaw` 到 `nanocoai/nanoclaw` 的最终清理工作。
*   **集成增强**：[PR #1662](https://github.com/nanocoai/nanoclaw/pull/1662) 合并了 Sentry IPC 集成，增强了错误监控能力。

## 4. 社区热点
今日最受关注的更新集中在复杂集成与底层架构改进：

*   **X (Twitter) 集成大重构**：[PR #2409](https://github.com/nanocoai/nanoclaw/pull/2409) 提议将 X 平台集成重写并移植到 v2 架构，支持 Linux 平台，并将工具数量从 5 个扩展至 25 个，实现与 Web UI 几乎对等的操作能力。这是目前最宏大的功能扩展 PR。
*   **长期记忆支持**：[PR #2420](https://github.com/nanocoai/nanoclaw/pull/2420) 引入了 Hindsight 记忆引擎的捆绑式 MCP 封装，允许 Agent 拥有长期记忆能力，这是社区呼声较高的 Agent 能力增强方向。
*   **底层故障报告**：由 @jumprope-jesse 提交的 [Issue #2424](https://github.com/nanocoai/nanoclaw/issues/2424) 报告了 Daemon 重启后容器挂载点丢失的严重问题，虽然评论数为 0，但其潜在的生产风险使其成为今日最需要关注的隐患。

## 5. Bug 与稳定性
今日报告了数个影响核心流程的 Bug，按严重程度排序如下：

1.  **[严重] 容器配置存活故障** ([Issue #2424](https://github.com/nanocoai/nanoclaw/issues/2424))：Daemon 重启后，Agent 组容器仅保留顶层挂载，关键的 `/workspace/agent` 挂载点丢失，且无报错信息。
    *   *状态*：Open，暂无修复 PR。
2.  **[严重] 消息静默丢失** ([Issue #2423](https://github.com/nanocoai/nanoclaw/issues/2423))：出站消息发送失败（如 API 限流、过滤）后，系统仅记录状态为 'failed' 但未通知 Agent，导致 Agent 误以为消息已送达，影响任务闭环。
    *   *状态*：Open，暂无修复 PR。
3.  **[中等] CLI 创建命令缺陷** ([Issue #2415](https://github.com/nanocoai/nanoclaw/issues/2415))：`ncl groups create` 未正确写入 `container_configs` 行，导致首次 Spawn 失败。
    *   *状态*：已有修复 PR [PR #2416](https://github.com/nanocoai/nanoclaw/pull/2416)。

## 6. 功能请求与路线图信号
*   **模型容错机制**：用户 @dvirarad 提出 [Issue #2417](https://github.com/nanocoai/nanoclaw/issues/2417)，请求支持 `fallbackModel`，以便当主模型触达使用限制时自动降级到备用模型（如从 Opus 降级到 Sonnet），防止任务中断。目前已提交对应的实现 PR [PR #2418](https://github.com/nanocoai/nanoclaw/pull/2418)，预计很快合入。
*   **Google 认证技能**：[PR #2422](https://github.com/nanocoai/nanoclaw/pull/2422) 提交了 Google OAuth 基础技能及诊断 MCP 工具，这将极大降低 Agent 接入 Google 服务的门槛。
*   **Fedora/Podman 支持**：[PR #2421](https://github.com/nanocoai/nanoclaw/pull/2421) 旨在修复对 Fedora Podman 的兼容性，表明项目正在向更多样的部署环境拓展。

## 7. 用户反馈摘要
*   **痛点：运维可靠性**：用户 @jumprope-jesse 反馈的 Bug 暴露了 NanoClaw 在 Daemon 重启和配置持久化方面的短板。用户不仅希望功能可用，更期望在异常流程（如重启、API 限流）中获得明确的状态反馈，而非“静默失败”或“配置丢失”。
*   **痛点：CLI 易用性**：用户 @glifocat 指出 CLI 命令生成的数据不完整，导致后续流程阻塞，说明工具链的数据一致性校验仍需加强。

## 8. 待处理积压
*   **Open PRs 需审视**：[PR #1913](https://github.com/nanocoai/nanoclaw/pull/1913) 和 [PR #1916](https://github.com/nanocoai/nanoclaw/pull/1916) 自 4 月下旬开启至今仍未合并，涉及 Assistant 重命名引用和配置参数校验，建议维护者评估是否可以合入。
*   **关键故障待修复**：Issue #2424 和 #2423 涉及核心数据一致性和消息投递保障，建议维护者优先介入调查。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-12)

## 1. 今日速览
过去 24 小时，NullClaw 项目呈现出**高开发活跃度与快速问题响应**的状态。尽管没有发布新版本，但社区提交了 5 个高质量的待合并 PR，涵盖了从底层网络稳定性到 AI 审计隐私保护的广泛领域。最引人注目的是，针对版本回归导致的 `HostResolutionFailed` 问题（Issue #902）已得到确认并关闭，显示出维护者对线上阻断性 Bug 的响应速度极快。整体来看，项目正处于功能迭代与稳定性修补并行的关键阶段。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
虽然今日无合并的 PR，但关闭了一个关键回归问题，且有多个重量级 PR 正在审查中，项目在以下方面取得实质性推进：

*   **关键问题修复**：Issue #902 的关闭标志着 `2026.5.x` 版本引入的网络层重构导致的 `siliconflow` provider 不可用问题已得到解决，恢复了部分用户的正常使用。
*   **隐私与安全增强**：PR #911 提出了针对 workspace audit 的隐私保护方案，引入 LLM 辅助分类但确保不泄露原始密钥，这代表了项目在 AI 安全能力上的重要升级。
*   **基础设施稳定性**：PR #910 针对 Discord gateway 进行了深度修复，移除了导致心跳饥饿的 mutex，这将显著提升长连接场景下的稳定性。
*   **自动化能力扩展**：PR #783 持续更新，旨在引入基于数据库的 Cron 子智能体引擎，一旦合并，将大幅增强 NullClaw 作为自主智能体的任务调度能力。

## 4. 社区热点
今日社区关注点集中在**稳定性回归**与**功能扩展**两方面：

*   **[Issue #902](https://github.com/nullclaw/nullclaw/issues/902) [CLOSED]**: **热度最高**。该 Issue 报告了升级到 `2026.5.x` 后网络解析失败的问题。由于影响范围是特定 Provider 的核心功能，且涉及近期 HTTP/DNS 重构，引发了维护者的快速响应与修复。这反映出用户对底层网络栈变更的敏感度极高。

## 5. Bug 与稳定性
今日报告并处理了一个严重级别的回归 Bug：

*   **严重 - 网络解析失败**:
    *   **Issue**: [#902](https://github.com/nullclaw/nullclaw/issues/902)
    *   **现象**: 升级至 `2026.5.x` 后使用 `siliconflow` provider 报错 `HostResolutionFailed`，回退至 `2026.4.9` 正常。
    *   **状态**: **已关闭**。推测已在主分支修复，或关联至 PR #908 中的网络修复逻辑。
*   **潜在稳定性修复**:
    *   **PR**: [#883](https://github.com/nullclaw/nullclaw/pull/883) 修复了 Zig stdlib 导致子进程生成失败的 Bug，提升了宿主环境的安全性。
    *   **PR**: [#910](https://github.com/nullclaw/nullclaw/pull/910) 修复了 Discord gateway 的死锁与连接保持问题。

## 6. 功能请求与路线图信号
结合今日活跃 PR，项目路线图呈现以下信号：

*   **安全审计智能化**: PR #911 显示项目正探索“AI 辅助 + 隐私优先”的审计模式，这可能成为后续版本的标准功能。
*   **复杂任务调度**: PR #783 持续活跃，表明项目正试图从“单次对话工具”向“具备时间维度的自主 Agent”演进。
*   **生态系统兼容性**: PR #908 作为 Hackathon 提交，引入了推理流追踪与成本核算，暗示社区希望增强项目的可观测性与商业化潜力。

## 7. 用户反馈摘要
从 Issue #902 的反馈中提炼出以下关键信息：

*   **痛点**: 用户对**网络层变更极其敏感**。Bug 描述中提到“Exact same config, token, network works perfectly in 2026.4.9”，表明用户在升级 minor 版本时预期是平滑的，任何破坏性变更（如 DNS 重构）若未做好兼容性测试，会直接阻断工作流。
*   **场景**: `siliconflow` 作为 Provider 被频繁使用，社区对该平台的兼容性要求较高。
*   **满意度**: 虽然遇到了阻断性问题，但问题的迅速关闭反映出用户对维护者修复能力的认可。

## 8. 待处理积压
*   **PR #783 (Cron subagent)**: 该 PR 创建于 4 月 7 日，至今已逾一个月，虽然今日有更新但尚未合并。这是一个大型功能更新，建议维护者关注合并进度，避免长期分支导致的冲突风险。
*   **PR #908 (Hackathon Project)**: 作为 Hackathon 参赛项目，代码包含网络修复与功能增强，建议维护者尽快 Review 并决定是否合入主分支，特别是其中对 `HostResolutionFailed` 的处理可能关联 Issue #902 的修复。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-12)

## 1. 今日速览
IronClaw 项目今日保持极高的开发活跃度，过去 24 小时内 Issues 更新达 38 条，PR 更新达 50 条，显示出社区与核心团队正在并行推进功能迭代与问题修复。核心亮点是 **v0.28.1 版本的发布**，带来了 Slack 与 WeChat 的渠道集成增强；同时，代号为 **"Reborn" 的大型架构重构**取得显著进展，多个核心架构定义 Issue 已关闭。然而，用户侧反馈了一些影响使用的集成 Bug（如 Gmail 连接 502、Telegram Markdown 渲染问题），值得开发者关注。

## 2. 版本发布
### [ironclaw-v0.28.1](https://github.com/nearai/ironclaw/releases/tag/v0.28.1) (2026-05-11)
本次更新主要集中在渠道集成能力的增强：
*   **新增功能**:
    *   **Slack**: 新增 `pairing_approve` 工具，支持通过聊天界面进行 Slack 绑定授权 ([#3396](https://github.com/nearai/ironclaw/pull/3396))。
    *   **WeChat**: 增加了微信注册工件元数据支持 ([#3386](https://github.com/nearai/ironclaw/pull/3386))。
*   **其他**: 更新了通用路径描述。

## 3. 项目进展
尽管输入数据中未详细列出已合并 PR 的具体内容，但从大量关闭的 Issues 可以推断项目正在快速推进 **"Reborn" 架构重构**，这是 IronClaw 走向下一阶段的关键里程碑。

*   **架构落地**:
    *   **会话与存储**: 关闭了 [#3193](https://github.com/nearai/ironclaw/issue/3193) (会话绑定合约) 和 [#3204](https://github.com/nearai/ironclaw/issue/3204) (转录与线程存储边界)，确立了核心数据流基础。
    *   **驱动与执行**: 关闭了 [#3107](https://github.com/nearai/ironclaw/issue/3107) (AgentLoopDriver 定义) 和 [#3232](https://github.com/nearai/ironclaw/issue/3232) (LoopExit 合约)，完善了代理循环执行模型。
    *   **多租户支持**: [#3264](https://github.com/nearai/ironclaw/issue/3264) 已关闭，定义了多租户轮次准入策略。
*   **待合并的大型 PR (活跃开发中)**:
    *   **ProductAdapter 栈**: 正在进行 Telegram v2 的适配器重构 ([#3352](https://github.com/nearai/ironclaw/pull/3352), [#3353](https://github.com/nearai/ironclaw/pull/3353), [#3354](https://github.com/nearai/ironclaw/pull/3354))，旨在提升生产环境的消息处理能力。
    *   **移动端适配**: PR [#3461](https://github.com/nearai/ironclaw/pull/3461) 将重构移动端 UI，引入汉堡抽屉布局，改善小屏体验。

## 4. 社区热点
今日讨论最活跃的话题集中在架构重构细节与新功能的稳定性上：

1.  **[Reborn] 架构讨论**: Issue [#3193](https://github.com/nearai/ironclaw/issue/3193) (6 条评论) 和 [#3204](https://github.com/nearai/ironclaw/issue/3204) (5 条评论) 引发了关于会话绑定与存储边界的深入探讨，现已关闭并实施。
2.  **独立二进制发布**: Issue [#3069](https://github.com/nearai/ironclaw/issue/3069) 讨论将 Reborn 作为独立二进制文件发布，涉及到产品边界划分，评论数达 3 条。
3.  **信任边界加固**: Issue [#3492](https://github.com/nearai/ironclaw/issue/3492) 提出了在 Reborn 堆栈中加强信任边界安全基线的需求，防止公共 API 处的构造漏洞，引发核心开发者关注。
4.  **Docker 镜像支持**: Issue [#748](https://github.com/nearai/ironclaw/issue/748) 呼吁发布 `ironclaw-worker` Docker 镜像以简化沙箱环境搭建，获得 6 个 👍，是社区长期痛点。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，主要集中在渠道集成与部署配置：

*   **P1 / 集成阻断**:
    *   **Gmail 集成 502**: Issue [#3128](https://github.com/nearai/ironclaw/issue/3128) 报告在聊天助手中添加 Gmail 时认证流末端返回 502 错误。
    *   **Telegram 设置失败**: Issue [#3317](https://github.com/nearai/ironclaw/issue/3317) 报告本地 IronClaw 下 Telegram 设置无法工作。
*   **P2 / 功能缺陷**:
    *   **Slack 格式错乱**: Issue [#3499](https://github.com/nearai/ironclaw/issue/3499) 指出 Slack 频道直接发送原始 Markdown 而非转换为 Slack 的 `mrkdwn` 格式，导致阅读体验差。
    *   **多租户权限失效**: Issue [#3490](https://github.com/nearai/ironclaw/issue/3490) 指出管理员禁用 "shell" 工具后，用户代理仍可访问，存在权限管控漏洞。
    *   **文件保存路径错误**: Issue [#2905](https://github.com/nearai/ironclaw/issue/2905) 指出代理在托管环境中将文件保存至不可访问的 `/home/agent`。
*   **已修复**: Issue [#2903](https://github.com/nearai/ironclaw/issue/2903) (Telegram 长回复静默失败) 和 #3317 已关闭，推测已修复。

## 6. 功能请求与路线图信号
*   **Reborn 贡献者跑道**: Issue [#3484](https://github.com/nearai/ironclaw/issue/3484) 提出了 "Reborn Contributor Runway" 计划，旨在建立稳定的基础设施，允许并行移植 skills/tools/channels。这表明项目正在为大规模社区协作做准备。
*   **Reborn 二进制分发**: Issue [#3069](https://github.com/nearai/ironclaw/issue/3069) 和 [#3483](https://github.com/nearai/ironclaw/issue/3483) 正在推进 Reborn 作为独立可执行文件的发布流程。
*   **本地 Web UI 可发现性**: Issue [#3500](https://github.com/nearai/ironclaw/issue/3500) 指出新用户在本地安装后难以发现 Web UI，建议优化新手引导流程。

## 7. 用户反馈摘要
*   **痛点**: 多租户环境下的权限配置失效（#3490）导致管理员担忧安全合规；第三方渠道集成（Gmail, Telegram）的认证流程不够健壮，容易因网络或配置问题中断。
*   **使用场景**: 用户希望将 IronClaw 用于生产级的多租户环境，并依赖 Slack/Telegram/Gmail 进行自动化交互，这些场景对权限控制和消息格式有严格要求。
*   **满意度**: 对 Reborn 架构的快速迭代表示关注（大量 Issue 关闭），但对文档和入门引导（如 Docker 镜像缺失、Web UI 难发现）感到困扰。

## 8. 待处理积压
*   **[重要] Docker 沙箱镜像**: Issue [#748](https://github.com/nearai/ironclaw/issue/748) 自 3 月创建至今未解决，严重影响沙箱功能的 "开箱即用" 体验，需维护者尽快响应。
*   **V2 引擎引导**: Issue [#3034](https://github.com/nearai/ironclaw/issue/3034) 指出 V2 引擎默认禁用 HTTP 工具且无引导，影响测试体验，已被标记为 Bug_bash_P2。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-12)

## 1. 今日速览
LobsterAI 项目今日保持了较高的开发活跃度，呈现出**重研发、轻交互**的特点。虽然过去 24 小时内无新增 Issue 和版本发布，但代码仓库迎来了 9 次 PR 更新，其中 7 个 PR 已顺利合并，显示出团队高效的代码审查与迭代速度。今日工作重心集中在**用户界面（UI）细节打磨**、**预览模块功能增强**以及**记忆系统架构重构**。整体来看，项目正处于功能完善与体验优化的快速迭代期，代码质量与稳定性得到进一步巩固。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日共有 7 个 PR 合并入主分支，显著提升了客户端的稳定性与交互体验：

*   **记忆系统架构重构**：PR #1943 合并，将设置中的记忆页面由平铺布局重构为 Tab 切换式（记忆条目/语义搜索/Dreaming），并新增 IPC 通道对接后端 Dreaming API。这标志着 LobsterAI 在长期记忆管理与自演化能力上迈出关键一步。
    *   链接: [netease-youdao/LobsterAI PR #1943](https://github.com/netease-youdao/LobsterAI/pull/1943)
*   **预览模块修复与增强**：PR #1945 解决了 Mermaid/PPTX 预览的多个顽疾，包括脚本执行权限、缩放报错及文件搜索体验优化，显著提升了文件处理的健壮性。
    *   链接: [netease-youdao/LobsterAI PR #1945](https://github.com/netease-youdao/LobsterAI/pull/1945)
*   **UI/UX 细节修复**：
    *   PR #1944 修复了代码块水平滚动时背景色截断的问题，视觉体验更加统一。
        *   链接: [netease-youdao/LobsterAI PR #1944](https://github.com/netease-youdao/LobsterAI/pull/1944)
    *   PR #1942 优化了消息元数据的悬停行为及侧边栏图标清晰度，交互更符合直觉。
        *   链接: [netease-youdao/LobsterAI PR #1942](https://github.com/netease-youdao/LobsterAI/pull/1942)
*   **数据同步修复**：PR #1940 修复了消息尾部 `NO_REPLY` 标记的同步问题，确保对话状态的准确性。
    *   链接: [netease-youdao/LobsterAI PR #1940](https://github.com/netease-youdao/LobsterAI/pull/1940)
*   **技能升级**：PR #1941 将 youdaonote 技能升级至 v1.0.9。
    *   链接: [netease-youdao/LobsterAI PR #1941](https://github.com/netease-youdao/LobsterAI/pull/1941)

## 4. 社区热点
由于本日无新增 Issue 且 PR 评论数据未显示大量讨论，社区热度主要集中在代码贡献层面：

*   **语音输入功能提案**：PR #1947 提议引入语音输入按钮，通过调用系统原生听写功能（Windows Win+H / macOS Fn+Fn）实现语音转文字。该 PR 详细阐述了因 Chromium 内核限制而放弃 Web Speech API 转而采用原生方案的决策过程，是值得关注的交互体验改进方向。
    *   链接: [netease-youdao/LobsterAI PR #1947](https://github.com/netease-youdao/LobsterAI/pull/1947)

## 5. Bug 与稳定性
本日无新增公开 Bug 报告，但已合并的修复 PR 解决了以下历史遗留问题：

*   **[已修复] 预览模块兼容性问题** (PR #1945)：修复了 PPTX 预览因 sandbox 限制导致脚本无法执行的问题，以及 Mermaid 图表缩放时的 Passive Event Listener 报错。
*   **[已修复] 样式渲染缺陷** (PR #1944)：解决了纯文本代码块在水平滚动时背景色无法延伸的视觉 Bug。
*   **[已修复] 状态同步异常** (PR #1940)：修复了特定消息标记（NO_REPLY）的同步逻辑错误。

## 6. 功能请求与路线图信号
*   **语音交互支持**：目前处于 OPEN 状态的 PR #1947 显示，开发者正在尝试填补语音输入功能的空白。该功能一旦合并，将极大地提升用户在移动端或桌面端的输入效率，极有可能被纳入下一阶段的更新路线图。
*   **记忆系统可视化**：随着 PR #1943 的合并，"Dreaming"（记忆整理）功能正式进入前端界面，预示着项目将更加注重 AI 的自我反思与长期记忆能力，这将是个人 AI 助手差异化竞争的核心功能。

## 7. 用户反馈摘要
本日无公开的 Issue 讨论，暂无法从用户侧提取直接反馈。但从今日密集的 UI 修复（代码块样式、按钮悬停、图标清晰度）推断，项目团队正在积极响应用户关于**界面精细度**和**操作流畅性**的隐性需求。

## 8. 待处理积压
*   **依赖更新滞后风险**：由 Dependabot 发起的 PR #1277（Electron 40.2.1 -> 42.0.1 升级）自 4 月开启至今仍未合并。考虑到 Electron 大版本跨度较大，可能存在破坏性变更需谨慎测试。建议维护者优先评估该 PR，避免技术债务累积导致后续升级困难。
    *   链接: [netease-youdao/LobsterAI PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-12)

## 1. 今日速览
过去 24 小时，Moltis 项目处于**高强度的维护与修复模式**，虽无新版本发布，但代码库活跃度较高。项目团队重点解决了近期集中爆发的安装与构建问题，共处理了 4 个 Issue 和 2 个 PR，其中 3 个 Bug 报告已关闭，显示出维护者对社区反馈的响应速度极快。目前的焦点在于保障部署流程的稳定性，特别是针对 Proxmox 环境和依赖地址变更的修复。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 2 个修复类 PR 被合并/关闭，显著提升了安装部署环节的健壮性：

*   **修复 Proxmox 安装交互阻塞 ([PR #992](moltis-org/moltis PR #992))**
    该 PR 解决了在非交互式终端环境下（如自动化脚本调用 `lxc-attach` 时）Docker 沙箱提示失败导致安装中断的问题。通过优化逻辑，既保留了交互式体验，又为自动化部署提供了默认回退方案，修复了 [Issue #991](moltis-org/moltis Issue #991) 中的部署阻塞。

*   **更新 Discrawl 模块路径 ([PR #989](moltis-org/moltis PR #989))**
    针对 `discrawl` 仓库地址迁移导致的沙箱容器构建失败问题，该 PR 更新了 Go 模块路径及相关的 Skill 元数据，并增加了回归测试断言，从根源上解决了依赖漂移引发的构建崩溃 ([Issue #988](moltis-org/moltis Issue #988))。

## 4. 社区热点
今日最受关注的讨论集中在功能配置与底层部署环境：

*   **[Issue #990](moltis-org/moltis Issue #990) - 用户自定义 Agent 模式失效**
    该 Issue 虽已关闭，但引发了关于配置生效机制的讨论。用户反馈自定义 Agent 模式无法正常工作，这触及了 Moltis 核心的“个性化定制”能力，维护者迅速响应并修复了该功能，表明项目对核心体验的重视。

*   **[Issue #993](moltis-org/moltis Issue #993) - Proxmox 脚本第 91 行报错**
    这是今日唯一新增且仍处于 Open 状态的 Issue。用户在使用 Proxmox 脚本创建 LXC 容器时在第 91 行遭遇失败，这表明尽管 [PR #992](moltis-org/moltis PR #992) 修复了部分安装逻辑，但在特定环境下的部署流程仍存在未解决的边缘情况。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在**部署构建**与**功能可用性**方面，严重程度评估如下：

*   **🟡 中等 (Open): Proxmox LXC 创建失败 (Line 91)**
    *   **链接:** [Issue #993](moltis-org/moltis Issue #993)
    *   **状态:** Open
    *   **详情:** 用户在 Proxmox 环境下执行脚本时，于第 91 行发生错误。虽然之前相关的 Line 29 错误已修复，但新报错点表明安装脚本在不同阶段可能存在兼容性或逻辑漏洞，目前尚无 Fix PR。

*   **🟢 已修复: Docker 沙箱构建失败 & 安装交互阻塞**
    *   **链接:** [Issue #988](moltis-org/moltis Issue #988), [Issue #991](moltis-org/moltis Issue #991)
    *   **状态:** Closed (已通过 [PR #989](moltis-org/moltis PR #989) 和 [PR #992](moltis-org/moltis PR #992) 修复)
    *   **详情:** 依赖地址变更导致的构建崩溃和非交互式环境下的安装卡死问题均已解决。

*   **🟢 已修复: 用户自定义 Agent 模式失效**
    *   **链接:** [Issue #990](moltis-org/moltis Issue #990)
    *   **状态:** Closed
    *   **详情:** 核心功能配置项失效，已确认修复。

## 6. 功能请求与路线图信号
*   **无明确的新功能请求**。
*   **信号分析:** 今日动态显示项目正处于“填坑”阶段。用户频繁提交关于 Proxmox 脚本的 Bug ([Issue #991](moltis-org/moltis Issue #991), [Issue #993](moltis-org/moltis Issue #993))，暗示 Moltis 在自托管和私有云部署场景中的用户基数正在增长。确保一键部署脚本的健壮性可能是下一阶段维护的重点。

## 7. 用户反馈摘要
*   **痛点:** 用户在使用 Proxmox 进行自动化部署时体验较为坎坷，连续遭遇 Line 29 和 Line 91 的脚本错误，反映出脚本对环境差异的容错性有待加强。
*   **满意度:** 尽管遭遇部署问题，但用户 @holgzn 和 @Thndr 提交的 Issue 描述详尽且专业，配合度较高。维护者 @penso 的响应极为迅速（当日提交 PR 并合并），社区对 Bug 的修复速度表示了隐性的认可。

## 8. 待处理积压
*   **[Issue #993](moltis-org/moltis Issue #993):** 目前唯一处于 Open 状态的新 Issue。建议维护者优先排查 Proxmox 脚本第 91 行的逻辑，可能需要进一步的用户环境日志来定位是网络问题还是代码逻辑问题。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-05-12)

## 1. 今日速览
CoPaw 项目今日保持高度活跃，Issues 与 PR 更新量均处于高位（分别为 50 条和 42 条），显示出社区互动频繁且开发节奏紧凑。项目当前处于功能迭代与稳定性修复并重阶段，今日共有 18 个 PR 被合并或关闭，主要涉及控制台 UI 优化、Shell 命令执行配置化以及异步性能提升。虽然未发布新版本，但针对 Windows 环境下的 Shell 兼容性、记忆索引同步等痛点问题已有对应的修复方案提交。整体来看，项目健康度良好，维护者对社区反馈的响应速度快，缺陷修复率高（今日关闭 25 个 Issue）。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **18 个 PR** 更新为已合并或关闭状态，显著推进了以下模块的成熟度：

*   **UI 体验优化**：PR #4231 解决了用户消息不支持换行的问题（Fixes #2712），提升了聊天界面的文本展示效果；PR #4209 增强了钉钉通道对引用消息的处理能力。
*   **底层性能与稳定性**：PR #4229 优化了异步依赖，修复了线程池阻塞问题；PR #4212 修复了配置异常的键传递错误。
*   **功能增强**：PR #4215 引入了 `shell_command_executable` 配置项，允许用户自定义 Shell 环境（解决 Windows 编码及 Linux Dash 兼容性问题）。

目前仍有 **24 个 PR** 处于待合并状态，其中包括备受关注的 **Tauri 2.x 桌面端支持** (#3813) 和 **控制台插件系统** (#4214)，预计将在近期合并。

## 4. 社区热点
今日社区讨论主要集中在模型服务商兼容性、任务调度稳定性及历史记录管理上：

*   **Issue #2429** (11 评论): 用户反馈 Cron 定时任务执行测试时收到中断提示。该问题已关闭，反映出社区对 Agent 自动化任务可靠性的高度关注。
    *   链接: [agentscope-ai/QwenPaw Issue #2429](https://github.com/agentscope-ai/QwenPaw/issues/2429)
*   **Issue #4133** (10 评论): 升级到 v1.1.5.post2 后，OpenCode 模型提供商无法正常使用，引发 API 调用失败。该问题已关闭，说明维护团队已定位并解决了版本兼容性故障。
    *   链接: [agentscope-ai/QwenPaw Issue #4133](https://github.com/agentscope-ai/QwenPaw/issues/4133)
*   **Issue #3843** (9 评论): 报告了严重的会话历史丢失问题，现有聊天记录突然消失并路由到新会话。该问题已关闭，涉及数据持久化的核心稳定性。
    *   链接: [agentscope-ai/QwenPaw Issue #3843](https://github.com/agentscope-ai/QwenPaw/issues/3843)
*   **Issue #4165** (8 评论): 火山引擎模型配置失败问题，涉及 API Key 连接测试，已得到修复。
    *   链接: [agentscope-ai/QwenPaw Issue #4165](https://github.com/agentscope-ai/QwenPaw/issues/4165)

## 5. Bug 与稳定性
今日报告了若干影响用户体验的关键 Bug，部分已有修复方案：

*   **[严重] MCP 调用阻塞** (Issue #4227): 在 `stream_http` 模式下，若 MCP 目标返回 401 错误，会导致整个调用阻塞直至超时。目前尚未有合并的修复 PR，需关注。
    *   链接: [agentscope-ai/QwenPaw Issue #4227](https://github.com/agentscope-ai/QwenPaw/issues/4227)
*   **[严重] 网页端长对话卡死** (Issue #4213): 长对话导致前端一次性加载海量 Token，引发页面卡顿甚至崩溃，建议分片传输。
    *   链接: [agentscope-ai/QwenPaw Issue #4213](https://github.com/agentscope-ai/QwenPaw/issues/4213)
*   **[中等] 记忆索引不同步** (Issue #4220): 自动记忆功能写入文件后未同步更新向量索引，导致新会话无法检索。**已有修复 PR #4224**。
    *   链接: [agentscope-ai/QwenPaw Issue #4220](https://github.com/agentscope-ai/QwenPaw/issues/4220)
*   **[中等] Windows Shell 窗口闪烁** (Issue #4123): 执行 Shell 命令时弹出控制台窗口。**已有修复 PR #4215**，通过配置项优化 Shell 调用逻辑。
    *   链接: [agentscope-ai/QwenPaw Issue #4123](https://github.com/agentscope-ai/QwenPaw/issues/4123)

## 6. 功能请求与路线图信号
社区与开发者正在推动以下新功能，预计将纳入下个版本：

*   **Shell 环境自定义** (PR #4215): 解决了多平台 Shell 兼容性问题，允许用户选择 Bash、Zsh 或 PowerShell，这将极大改善 Windows 下的编码问题和 Linux 下的脚本兼容性。
    *   链接: [agentscope-ai/QwenPaw PR #4215](https://github.com/agentscope-ai/QwenPaw/pull/4215)
*   **控制台插件管理** (PR #4214): 支持在 UI 界面直接安装/卸载插件，降低扩展功能的部署门槛。
    *   链接: [agentscope-ai/QwenPaw PR #4214](https://github.com/agentscope-ai/QwenPaw/pull/4214)
*   **多附件上传** (Issue #4192): 用户请求支持在聊天中一次性添加多个附件，目前限制为单文件。
    *   链接: [agentscope-ai/QwenPaw Issue #4192](https://github.com/agentscope-ai/QwenPaw/issues/4192)
*   **移动端侧边栏折叠** (PR #4225): 优化窄屏设备上的 UI 展示，提升移动端用户体验。
    *   链接: [agentscope-ai/QwenPaw PR #4225](https://github.com/agentscope-ai/QwenPaw/pull/4225)

## 7. 用户反馈摘要
*   **痛点**：用户在升级版本后常遇到模型提供商（如 OpenCode、DashScope）配置失效问题（#4133, #4159），需关注版本升级的兼容性测试；网络波动对 Agent 执行效率影响较大（#2435）。
*   **场景**：大量用户使用 CoPaw 进行 Cron 定时任务调度（#2429）和复杂的多轮对话记忆检索（#4220），表明其在自动化工作流和长时记忆方面有较强需求。
*   **满意度**：虽然有 Bug 报告，但大部分 Issue 如 #4133、#4165 均在短时间内关闭，用户对维护团队的响应速度表示认可。

## 8. 待处理积压
*   **Issue #3813 (Tauri 桌面端支持)**: 该 PR 自 4 月 24 日开启至今，正处于 Review 阶段，建议加快合并进度以满足桌面端用户需求。
    *   链接: [agentscope-ai/QwenPaw PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)
*   **Issue #4227 (MCP 阻塞)**: 作为今日新发的严重 Bug，目前暂无关联 PR，建议维护者优先排查 HTTP 错误处理逻辑。
    *   链接: [agentscope-ai/QwenPaw Issue #4227](https://github.com/agentscope-ai/QwenPaw/issues/4227)
*   **Issue #2308 (ADBPG 长期记忆)**: 自 3 月开启的功能性 PR，处于长期 Review 状态，建议评估其与现有记忆架构的融合。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 (2026-05-12)

**项目开源地址**: [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

### 1. 今日速览
ZeptoClaw 项目今日整体活跃度较低，代码层面无新增提交或版本发布，重心向安全治理倾斜。过去 24 小时内无新开 Issue 或 PR，唯一的动态是成功关闭了一个关于安全审计的任务。这表明项目当前处于稳定维护期，维护者正致力于通过深度审计工具确保代码库的安全性与健壮性。整体项目健康度良好，无明显阻碍性风险。

### 2. 版本发布
无。

### 3. 项目进展
今日虽无功能代码合并，但在项目安全性建设上取得了实质性进展：
*   **安全审计流程闭环**：Issue #584 的关闭标志着单仓库深度 AI 漏洞审计工作的完成。维护者成功运行了 `role-orchestrator` 技能，完成了证据把关的深度审计，并生成了 `.codex-audit-work` 相关工件。这一进展虽然没有改变功能代码，但为项目的安全合规性筑高了壁垒，排除了潜在的潜在安全隐患。

### 4. 社区热点
今日讨论最集中（也是唯一）的动态集中在安全审计领域：
*   **[#584 [CLOSED] chore(security): single-repository deep ai-vulns audit](https://github.com/qhkm/zeptoclaw/issues/584)**
    *   **分析**：该 Issue 由 @liey1 发起并迅速关闭，评论数达 2 条。该任务的诉求在于利用 AI 智能体能力（role-orchestrator）对代码库进行全维度的漏洞扫描。这不仅是一个技术维护动作，也传递出项目正在积极探索“AI 辅助安全运维”的信号。其诉求在于建立自动化的安全边界和证据链，而非单纯的人工审查，显示了项目维护的高标准化趋势。

### 5. Bug 与稳定性
*   **新增 Bug**：今日未收到新的 Bug 报告或崩溃反馈。
*   **稳定性评估**：项目稳定性未受挑战，无回归问题报告。

### 6. 功能请求与路线图信号
*   **新功能请求**：今日无新增功能请求。
*   **路线图信号**：从 #584 的处理可以看出，项目下一阶段的重点可能不在于堆砌新功能，而在于**夯实底层安全架构**与**完善 AI 辅助工作流**。生成审计工件和共享内存的记录，暗示项目可能在为后续的自动化合规检查或更复杂的 AI Agent 集成做准备。

### 7. 用户反馈摘要
由于今日无外部用户提出的新 Issue 或 PR，暂无典型的终端用户反馈数据。今日的动态主要反映维护者内部对代码质量的严格把控。

### 8. 待处理积压
*   **积压状态**：今日无长期未响应的 Issue 或 PR 触发预警。
*   **维护提示**：鉴于今日零新增活跃，建议关注社区是否存在潜在的未回复问题，或在下一阶段发布新的功能规划以激活社区参与度。

---
*分析师注：数据源截至于 2026-05-12 00:00 UTC。项目整体平稳，建议持续关注后续安全审计结果的公开细节。*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*