# OpenClaw 生态日报 2026-03-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-29 02:43 UTC

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

# OpenClaw 项目动态日报 (2026-03-29)

## 1. 今日速览

OpenClaw 项目今日保持了极高的活跃度，过去24小时内共有 **1000 条** Issue 和 PR 更新。项目发布了 **v2026.3.28** 正式版，主要聚焦于 Provider 的现代化重构，移除了陈旧的 Qwen OAuth 集成。然而，社区重心目前高度集中在稳定性上，大量反馈指向 **v2026.3.24** 之后的版本引入了严重的回归问题，特别是 Discord 连接崩溃和 Gateway 启动失败。目前有 **342 个 PR 处于待合并状态**，显示出项目正在快速迭代，但同时也面临着代码审查和稳定性保障的巨大压力。

## 2. 版本发布

### v2026.3.28 (Latest)
**发布日期**: 2026-03-28

**⚠️ 破坏性变更**:
1.  **Providers/Qwen**: 移除了已弃用的 `qwen-portal-auth` OAuth 集成（针对 `portal.qwen.ai`）。
    *   **迁移操作**: 用户需迁移至 Model Studio，命令：`openclaw onboard --auth-choice modelstudio-api-key`。(#52709)
2.  **Config/Doctor**: 停止对超过两个月的旧版自动配置迁移的支持，强制用户更新配置结构。

**分析**: 此次更新清理了技术债务，强制用户使用更标准的 API Key 认证方式，有助于提升安全性和维护性。

## 3. 项目进展

尽管待合并 PR 数量巨大（342个），今日仍有 **158 个 PR 被合并/关闭**，显示维护团队正在努力推进：

*   **稳定性修复**:
    *   **PR #56730**: 修复了 Hook 注入的启动文件在重启时重复累积的问题，减少上下文浪费。
    *   **PR #56729**: 修复了 Read 工具路径验证的误报警告。
    *   **PR #56731**: 优化了 Feishu 工具注册的日志记录，减少日志刷屏。
*   **功能增强**:
    *   **PR #56401**: 在 Web UI 中集成了 **CodeMirror 6** 编辑器，用于查看和编辑 Raw Config，提升用户体验。
    *   **PR #56590**: 新增了 `@kansodata/jira-cloud` 技能包脚手架，扩展了项目管理能力。
*   **架构优化**:
    *   **PR #56722**: 统一了所有组件的 `state-dir` 解析逻辑，修复了自定义状态目录导致的数据散落问题。
    *   **PR #55513**: 针对大附件引入了 **Claim Check 模式**，通过 `media://inbound/<id>` URI 代理访问，防止 OOM 和 Socket 挂起。

## 4. 社区热点

今日社区讨论主要集中在跨平台客户端需求和严重的连接稳定性问题上：

1.  **[Issue #75] Linux/Windows Clawdbot Apps** (👍 66 | 💬 58)
    *   **诉求**: 用户强烈呼吁官方推出 Linux 和 Windows 原生客户端，目前仅有 macOS/iOS/Android。作为每日活跃度最高的问题，反映了 OpenClaw 向桌面全平台扩展的迫切需求。
    *   **链接**: [openclaw/openclaw Issue #75](https://github.com/openclaw/openclaw/issues/75)

2.  **[Issue #23538] Anthropic setup-token auth returns 401** (💬 25)
    *   **诉求**: 用户在配置 Anthropic Token 后仍遭遇 401 错误，且在全新隔离配置文件中可复现。这表明认证流程可能存在底层逻辑缺陷。
    *   **链接**: [openclaw/openclaw Issue #23538](https://github.com/openclaw/openclaw/issues/23538)

3.  **[Issue #13688] Discord WebSocket disconnects & unbounded backoff** (💬 19)
    *   **诉求**: Discord 机器人频繁断连（WebSocket 1005/1006），且指数退避算法无上限，导致机器人离线超过 30 分钟并丢失私信。这是影响服务可用性的关键问题。
    *   **链接**: [openclaw/openclaw Issue #13688](https://github.com/openclaw/openclaw/issues/13688)

4.  **[Issue #49971] RFC: Native Agent Identity & Trust Verification** (💬 17)
    *   **诉求**: 一个高质量的 RFC，建议结合 ERC-8004 和 W3C DID 标准，为 OpenClaw 实现原生的智能体身份与信任验证。标志着社区对 AI Agent 安全互操作性的深度思考。
    *   **链接**: [openclaw/openclaw Issue #49971](https://github.com/openclaw/openclaw/issues/49971)

## 5. Bug 与稳定性

今日报告的 Bug 数量显著，且多个被标记为 `regression`（回归），需引起高度重视：

### 🔴 严重
1.  **[Issue #54931] Discord health-monitor triggers crash loop (v2026.3.24)**
    *   **现象**: 升级后 Gateway 每 35 分钟崩溃一次，由 Discord 健康监测触发未捕获异常。
    *   **状态**: Open，已确认回归。
    *   **链接**: [openclaw/openclaw Issue #54931](https://github.com/openclaw/openclaw/issues/54931)
2.  **[Issue #34830] 401 missing authentication header**
    *   **现象**: 升级到 2026.3.2 后 OpenRouter 报 401 错误，API Key 确认无误，导致服务不可用。
    *   **链接**: [openclaw/openclaw Issue #34830](https://github.com/openclaw/openclaw/issues/34830)
3.  **[Issue #53870] Matrix plugin security scan block**
    *   **现象**: 安装 Matrix 插件时被 VirusTotal 安全扫描无限期阻止。
    *   **链接**: [openclaw/openclaw Issue #53870](https://github.com/openclaw/openclaw/issues/53870)

### 🟠 中等
1.  **[Issue #53959] GPT-5.3-codex stops executing tools**
    *   **现象**: 2026.3.23-2 更新后，OpenAI Codex 模型停止执行任何工具调用（Exec, MCP 等）。
    *   **链接**: [openclaw/openclaw Issue #53959](https://github.com/openclaw/openclaw/issues/53959)
2.  **[Issue #54555] Matrix E2EE broken**
    *   **现象**: Matrix 端到端加密失效，原因疑似缺少 WASM 文件。
    *   **链接**: [openclaw/openclaw Issue #53353](https://github.com/openclaw/openclaw/issues/53353)

## 6. 功能请求与路线图信号

*   **平台扩展**: Linux/Windows 客户端支持 (#75) 是目前最受期待的功能。
*   **模型支持**: 社区正在积极适配最新的 **Grok 4.1 Fast** (#6872) 和 **GPT-5.3-codex**，但在工具调用适配上遇到瓶颈。
*   **外部工具**: **PR #52986** 正在尝试增加 **QQ 频道** 的原生支持，这将极大地扩展 OpenClaw 在中文社区的受众。
*   **架构演进**: **PR #38780** 提出的 "Context-Pressure-Aware Continuation" 意图解决长上下文对话中的记忆丢失问题，这是通往长期记忆 Agent 的关键一步。

## 7. 用户反馈摘要

*   **痛点**: "升级后连不上" 是今日最核心的抱怨。Discord 掉线和 401 认证错误严重打击了用户对版本升级的信心。
*   **场景**: 大量用户在 **Docker 环境** 中部署遇到 Skill 安装失败 (#14593) 或权限问题，说明 OpenClaw 的容器化适配仍有待完善。
*   **认可**: 尽管存在 Bug，用户对 **Plugin 系统** 的灵活性表示认可，积极开发 Jira、QQ 等插件显示了生态的活力。

## 8. 待处理积压

*   **[Issue #14593] Skill install fails in Docker**: 影响容器化部署体验，存在已久，亟待解决。
    *   **链接**: [openclaw/openclaw Issue #14593](https://github.com/openclaw/openclaw/issues/14593)
*   **[PR #38780] feat: context-pressure-aware continuation**: 这是一个 XL 级的大型 PR，涉及核心 Agent 逻辑，审查周期长，但对项目未来至关重要。
    *   **链接**: [openclaw/openclaw PR #38780](https://github.com/openclaw/openclaw/pull/38780)
*   **[PR #42512] fix(whatsapp): repair web auto-TTS delivery**: 修复 WhatsApp Web 自动语音交付的 PR，自 3 月 10 日开启至今未合并，影响相关渠道用户。
    *   **链接**: [openclaw/openclaw PR #42512](https://github.com/openclaw/openclaw/pull/42512)

---
*分析师建议：当前版本 (v2026.3.28) 虽然发布了正式版，但引入的回归问题较多（特别是认证和 Discord 模块）。建议开发团队在推进 QQ 频道等新功能前，优先解决认证模块的 401 问题和 Discord 的崩溃循环，以恢复社区信心。*

---

## 横向生态对比

# 2026-03-29 AI 智能体与个人助手开源生态横向对比分析报告

**报告日期**: 2026-03-29
**分析师**: AI Tech Analyst

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态正处于**从单一对话工具向多模态、多渠道协作平台转型的关键期**。各项目普遍不再满足于简单的 LLM 调用，而是致力于解决 Agent 在**长期记忆、跨平台通讯、工具调用稳定性**方面的工程难题。

然而，生态整体面临**"快速迭代带来的稳定性阵痛"**，以 OpenClaw 为首的核心项目今日均出现了严重的连接崩溃或认证回归问题，显示出在功能堆叠与系统稳定性之间存在显著张力。同时，针对**企业级需求（多租户、私有化部署）**和**边缘计算场景（路由器、树莓派）**的分化趋势日益明显。

---

## 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | Release | 核心动态 | 健康度/状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~1000 (高) | ~500 (342 Open) | v2026.3.28 | **高活跃/高风险**。发布正式版，但遭遇严重回归（Discord/401），社区焦点集中在稳定性修复。 | ⚠️ **震荡期** |
| **PicoClaw** | 43 | 87 (54 Merged) | Nightly | **极速迭代**。重点突破 OpenWrt/边缘计算与 Agent Phase 2 重构，合并率高。 | ✅ **上升期** |
| **NanoBot** | 23 | 36 (12 Merged) | - | **安全与修复**。历史版本供应链安全警告，核心修复集中在 Kimi/Minimax 兼容性。 | ⚠️ **维护期** |
| **IronClaw** | ~10 | 50 (13 Merged) | - | **架构重构**。推进多租户与前端组件化，但也暴露了 WASM/Telegram 稳定性问题。 | 🔄 **重构期** |
| **Moltis** | ~8 | ~15 (11 Merged) | 3 Releases | **快速修复**。一日发三版，重点解决 Telegram 论坛与 LLM Provider 超时。 | ✅ **稳定交付** |
| **TinyClaw** | ~7 | ~15 (15 Merged) | - | **代码清理**。零积压，专注 Docker 体验与 Web 控制台整合。 | ✅ **健康** |
| **CoPaw** | 31 | 25 (14 Merged) | - | **社区驱动**。任务板活跃，聚焦 MCP 空指针修复与钉钉集成。 | ✅ **活跃** |
| **Zeroclaw** | 50 | 50 (0 Merged) | - | **异常状态**。疑似发生大规模代码回滚，大量 PR 重新开启，MQTT 依赖缺失。 | 🔴 **异常** |
| **LobsterAI** | 6 | 17 (11 Merged) | 2026.3.29 | **体验优化**。修复 Gateway 崩溃，交互 UI 重构，但配置持久化遭诟病。 | ✅ **良好** |
| **Others** | - | - | - | **特定领域**。NanoClaw (Web Dashboard), NullClaw (Windows Fix), EasyClaw (Bug), ZeptoClaw (Long Context). | - |

---

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照系**，OpenClaw 依然保持着压倒性的社区规模（单日千级 Issue），但正面临严峻的"大企业病"挑战。

*   **优势**：生态位极其丰富。从对 GPT-5.3-codex、Grok 4.1 等最新模型的极速适配，到 QQ 频道、飞书等本土化渠道的覆盖，OpenClaw 展示了强大的**广度**。
*   **劣势**：**稳定性与管控能力滞后**。今日 v2026.3.28 版本引发的 Discord 崩溃和 401 认证错误，以及 342 个待合并 PR 的积压，显示出维护团队在快速迭代中失去了对代码质量的把控。
*   **对比**：相比 PicoClaw 的轻量化边缘优势和 IronClaw 的企业级架构野心，OpenClaw 目前显得臃肿且脆弱。它试图满足所有人，结果导致核心网关体验出现裂痕。

---

## 4. 共同关注的技术方向

今日各项目不约而同地在以下三个方向发力，形成了明显的技术共振：

1.  **即时通讯（IM）渠道的深度集成与修复**
    *   **现象**：几乎所有项目都在处理 Telegram、Discord、飞书、微信的连接或渲染问题。
    *   **具体诉求**：
        *   **Telegram**: OpenClaw (#13688) 的 WebSocket 断连，ZeptoClaw (#461) 的静默失败，NanoClaw (#1507) 的媒体下载。
        *   **Discord**: OpenClaw (#54931) 的崩溃循环。
        *   **飞书**: IronClaw (#1673) 的配对死锁，LobsterAI (#986) 的非流式回复。
    *   **趋势**: 用户不再满足于 Web UI，强烈需要将 Agent 接入日常高频使用的 IM 工具中，作为 "Always-on" 的助手。

2.  **多模型聚合与本地模型适配**
    *   **现象**：从依赖单一巨头转向 "Bring Your Own Model"。
    *   **具体诉求**：EasyClaw 报告 GLM/Kimi 切换失败 (#29)；Moltis 延长本地模型探测超时 (#502)；CoPaw 重构 Local Model 模块 (#2419)；PicoClaw 用户呼吁 Ollama 无缝接入 (#1161)。

3.  **工具调用安全性与沙箱机制**
    *   **现象**：随着 Agent 权限扩大，安全防护成为刚需。
    *   **具体诉求**：IronClaw 修复 Shell 工具读取敏感文件漏洞 (#1713)；Zeroclaw 讨论 HMAC 工具校验 (#4830)；PicoClaw 用户反馈安全策略误拦截 (#2107)。

---

## 5. 差异化定位分析

*   **OpenClaw & IronClaw (全能型/企业级)**
    *   追求功能大而全，支持复杂架构（如 IronClaw 的多租户、OpenClaw 的 Claim Check 模式）。
    *   **差异**: OpenClaw 社区更杂乱，IronClaw 架构更严谨（Rust/WASM），但 IronClaw 目前在渠道集成（如飞书）上落后于 OpenClaw。

*   **PicoClaw & TinyClaw (轻量型/边缘计算)**
    *   **PicoClaw**: 极度侧重**硬件结合**（OpenWrt/路由器/嵌入式），走 "AIoT Agent" 路线。
    *   **TinyClaw**: 侧重**个人开发者体验**，通过 TinyOffice Web 端降低使用门槛，Docker 化程度高。

*   **LobsterAI & CoPaw (工作流/生产力)**
    *   侧重办公场景。LobsterAI 集成网易内部生态，CoPaw 深度结合钉钉文档与 Jira，解决具体的企业协作痛点。

*   **NanoBot & Moltis (中间件/网关)**
    *   更像是连接器。NanoBot 关注轻量化部署，Moltis 关注 GraphQL 和语音搜索等能力的扩展。

---

## 6. 社区热度与成熟度

*   **第一梯队 (活跃/动荡)**: **OpenClaw**。流量巨大，但处于"发布-回滚-修 Bug"的循环中，需要加强 QA 流程。
*   **第二梯队 (快速成长)**: **PicoClaw, IronClaw**。PR 合并积极，架构演进清晰，虽然有小 Bug 但路线图明确。
*   **第三梯队 (稳定交付)**: **Moltis, TinyClaw, CoPaw**。专注于解决具体问题，积压少，响应速度快，适合寻求稳定的开发者。
*   **异常预警**: **Zeroclaw**。今日的零合并与批量回滚是严重的负面信号，建议观察者暂时保持距离，直至 CI/CD 恢复正常。

---

## 7. 值得关注的趋势信号

1.  **Agent 身份与信任链**
    *   OpenClaw 的 RFC #49971 提出基于 DID/ERC-8004 的身份验证。这标志着开源社区开始思考 Agent 间互联的**底层协议标准**，而非仅仅停留在应用层。

2.  **可观测性 的兴起**
    *   NanoClaw 引入 Token 成本追踪 (#1528) 和 Web Dashboard。这表明 Agent 正从"黑盒魔法"转变为需要精细化管理成本和资源的"工程系统"。

3.  **配置管理的痛点普遍化**
    *   LobsterAI (#1006) 和 NanoBot 都出现了配置持久化或迁移导致的问题。随着 Agent 状态变复杂（Skills, Memory, MCP configs），如何实现**无感升级与状态迁移**将成为所有项目的必修课。

**给开发者的建议**：
如果你正在寻找生产级部署，目前 **Moltis** 或 **TinyClaw** 可能比 OpenClaw 更稳定；如果你关注边缘计算，**PicoClaw** 是不二之选；如果你关注企业级安全架构，请密切关注 **IronClaw** 的多租户 PR 进展。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-29)

## 1. 今日速览
NanoBot 项目今日保持**极高的社区活跃度**，共产生 23 条 Issue 更新和 36 条 PR 更新。社区关注焦点主要集中在 **v0.1.4.post6 版本的稳定性**及**安全合规性**上。尽管没有新的版本发布，但开发者合并了 12 个 PR，重点修复了配置、心跳机制和 Telegram 渠道的问题，显示出维护团队正在积极响应用户反馈。今日最严重的事件是社区披露了一个涉及恶意代码的历史版本安全问题，值得所有用户关注。

## 2. 版本发布
**无新版本发布。**
目前最新版本仍为 `v0.1.4.post6`。考虑到今日修复了多个 Bug（如 Kimi 思考模式兼容、配置项保存逻辑等），预计近期可能会有新的补丁版本发布。

## 3. 项目进展
今日共有 **12 个 PR 被合并**，主要集中在提升系统健壮性和优化用户体验：

*   **核心逻辑修复**：合并了 [PR #2580](https://github.com/HKUDS/nanobot/pull/2580)，修复了 Agent 执行完工具后返回空内容导致直接抛出保底字符串的问题，增加了重试修复机制。
*   **配置系统增强**：[PR #2212](https://github.com/HKUDS/nanobot/pull/2212) 和 [PR #2265](https://github.com/HKUDS/nanobot/pull/2265) 合并，引入了运行时密钥引用解析和环境变量的强化处理，提升了部署安全性。
*   **心跳机制优化**：[PR #2420](https://github.com/HKUDS/nanobot/pull/2420) 将心跳运行改为短暂模式，解决了长期运行导致的状态膨胀问题。
*   **渠道集成推进**：虽然微软 Teams 集成 PR ([#2081](https://github.com/HKUDS/nanobot/pull/2081)) 被关闭，但开发者开启了基于最新代码库的新 PR ([#2600](https://github.com/HKUDS/nanobot/pull/2600))，表明多渠道支持仍在积极规划中。

## 4. 社区热点
今日社区讨论最热烈的话题聚焦于安全与架构：

1.  **⚠️ 严重安全警告 ([Issue #2439](https://github.com/HKUDS/nanobot/issues/2439))**
    *   **内容**：用户报告在 PyPI 上的历史版本 `v0.1.4.post5` 中发现了恶意数据渗透代码（`litellm_init.pth`）。
    *   **诉求**：虽然该问题针对的是旧版本，但社区高度关注官方的回应和供应链安全的后续保障措施。该 Issue 获得了 4 个点赞和 6 条评论。
2.  **架构优化讨论 ([Issue #2576](https://github.com/HKUDS/nanobot/issues/2576))**
    *   **内容**：用户针对 Agent 循环终结逻辑提出了深度优化建议，指出当前 LLM 在工具执行后可能返回空内容，导致交互生硬。
    *   **诉求**：希望改进工具结果的总结机制，减少对 LLM “自觉性”的依赖。

## 5. Bug 与稳定性
今日报告了多个涉及 `v0.1.4.post6` 的新 Bug，主要集中在特定模型兼容性和渠道稳定性：

*   **🔴 严重 - 功能失效**
    *   **Minimax Provider 失效**：升级到 post6 后内置 Minimax 提供商无法工作。([Issue #2590](https://github.com/HKUDS/nanobot/issues/2590))
    *   **Ollama Local 404**：本地 Ollama 配置出现 404 错误且网关未监听预期端口。([Issue #2570](https://github.com/HKUDS/nanobot/issues/2570))
*   **🟠 中等 - 兼容性与体验**
    *   **Kimi K2.5 思考模式报错**：工具调用消息中缺少 `reasoning_content` 导致崩溃。*（已有修复 PR [ #2598](https://github.com/HKUDS/nanobot/pull/2598)）* ([Issue #2579](https://github.com/HKUDS/nanobot/issues/2579))
    *   **Telegram Markdown 渲染不稳定**：升级后 Markdown 渲染有时失效。([Issue #2568](https://github.com/HKUDS/nanobot/issues/2568))
    *   **Github Copilot 登录失败**：OAuth Header 格式错误。([Issue #2573](https://github.com/HKUDS/nanobot/issues/2573))
*   **🟢 轻微 - 逻辑错误**
    *   **Session 索引越界**：`_find_legal_start` 方法存在 Off-by-one 错误。*（已有修复 PR [ #2597](https://github.com/HKUDS/nanobot/pull/2597)）* ([Issue #2583](https://github.com/HKUDS/nanobot/issues/2583))

## 6. 功能请求与路线图信号
从今日的 Issues 和 PRs 中可以捕捉到项目扩展的方向：

*   **多渠道支持**：除了正在重构的 Microsoft Teams 支持外，社区成员提交了 **iMessage 集成** 的 PR ([PR #2539](https://github.com/HKUDS/nanobot/pull/2539))，显示出将 NanoBot 接入更多主流通讯平台的强烈需求。
*   **WhatsApp 增强**：用户请求原生的 WhatsApp 语音消息支持 (STT + TTS) ([Issue #2152](https://github.com/HKUDS/nanobot/issues/2152))，同时相关媒体收发功能的 PR ([PR #2010](https://github.com/HKUDS/nanobot/pull/2010)) 仍在待合并状态。
*   **搜索提供商扩展**：社区正在讨论接纳新搜索提供商的标准 ([Issue #2572](https://github.com/HKUDS/nanobot/issues/2572))，暗示项目正致力于丰富内置搜索能力。

## 7. 用户反馈摘要
*   **痛点**：用户对 **升级后的回归问题**（如 Minimax 失效、Telegram 渲染问题）表示沮丧，特别是 `post6` 版本带来的破坏性变更影响了生产环境。
*   **场景**：大量用户尝试在 **本地低配环境**（如 Raspberry Pi）运行 NanoBot 结合 Ollama，但遇到了网关和连接问题，说明轻量化部署体验仍有待优化。
*   **肯定**：尽管存在 Bug，用户对 NanoBot 的 **Agent 循环机制** 表现出深入研究的兴趣，并主动提出架构级改进建议，显示出核心设计受到了技术用户的认可。

## 8. 待处理积压
*   **长期未解决的 Fallback 问题**：[Issue #1121](https://github.com/HKUDS/nanobot/issues/1121) 指出当主模型超时（503）时，Fallback 模型未被触发。该问题自 2 月提出至今仍处于 Open 状态，严重影响服务的高可用性，建议维护者优先排期。
*   **Matrix 认证问题**：[Issue #1681](https://github.com/HKUDS/nanobot/issues/1681) 涉及加密房间登录错误，虽然有 PR 尝试修复 ([#2596](https://github.com/HKUDS/nanobot/pull/2596))，但仍需关注是否彻底解决。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是 Zeroclaw 项目 2026-03-29 的动态日报。

# Zeroclaw 项目日报 (2026-03-29)

## 1. 今日速览
Zeroclaw 今日处于**高活跃度但状态异常**的阶段。虽然 Issues 交互频繁（50条更新，29条关闭），但 PR 端出现了**极其罕见的数据异常**：过去 24 小时内有 **50 个 PR 处于待合并状态，且合并/关闭数为 0**。结合 PR 描述中频繁出现的 "re-opened after a batch revert"（批量回滚后重新开启），推测项目在今日早些时候可能经历了一次重大的代码回滚或 Git 历史重置。目前社区正忙于修复由回滚引发的回归问题（如 MQTT 缺失依赖）以及重新提交功能代码。

## 2. 版本发布
*   **无新版本发布**：尽管代码库活动剧烈，但官方尚未发布新的 Release tag 以稳定当前混乱的状态。

## 3. 项目进展
由于今日无合并记录，项目进展主要体现在**重新提交与回归修复**上，整体进度处于"修复-恢复"阶段：

*   **大规模 PR 恢复**：维护者 `@SimianAstronaut7` 集中重新提交了约 20+ 个 PR（如 #4966, #4965, #4963 等），涵盖了 Homebrew 发布、阿里云 Provider 支持、文件工具路径修复等之前已开发完成的功能。
*   **关键热修复提交**：
    *   **内存雪崩修复**：PR #4936 修复了 `auto_save` 导致内存递归膨胀的严重 Bug（Issue #4916）。
    *   **配置热重载**：PR #4959 重新提交了 `zeroclaw config reload` 功能，这是社区呼声极高的特性。

## 4. 社区热点
今日讨论最密集的 Issue 集中在**摩擦点追踪、文档缺失和核心功能异常**：

1.  **[Issue #4657] Matrix channel: friction tracker**
    *   **热度**：9 评论 | 👍 2
    *   **分析**：这是一个总领式 Issue，详细记录了 v0.6.2 版本中 Matrix 频道的诸多痛点（如 E2EE 重试循环、线程上下文丢失）。这是目前社区反馈最集中的区域，表明多端加密通信的稳定性仍是最大挑战。
2.  **[Issue #4863] [Bug]: can not get open-codex to work properly**
    *   **热度**：5 评论
    *   **分析**：用户在配置 `openai-codex` (GPT-5.4-mini) 时遇到渲染问题，反映了**文档滞后于代码发展**的现状，用户难以正确配置最新的模型 Provider。
3.  **[Issue #4804] [Bug]: Matrix thread replies lack conversation context**
    *   **热度**：5 评论 (已关闭)
    *   **分析**：Matrix 频道中，话题的第二次回复丢失上下文。虽然已关闭，但结合 #4657 看，这仍是影响体验的核心摩擦点。

## 5. Bug 与稳定性
今日 Bug 报告主要涉及**供应链安全、构建缺失和运行时逻辑错误**，严重程度较高：

*   **🔴 S1 - 供应链风险 (新建)**:
    *   [Issue #4955](https://github.com/zeroclaw-labs/zeroclaw/issues/4955): `open_skills` 功能硬编码了一个第三方 Git 仓库 (`besoeasy/open-skills`)，存在严重的供应链攻击风险。
*   **🔴 S1 - 构建失败 (回归)**:
    *   [Issue #4946](https://github.com/zeroclaw-labs/zeroclaw/issues/4946): `rumqttc` 依赖在 v0.6.6 标签中丢失，导致启用 MQTT 功能时编译失败。这是典型的发布/回滚流程疏漏。
*   **🟠 S2 - 逻辑缺陷**:
    *   [Issue #4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916) (已有关联 PR #4936): 自动保存功能会将"记忆上下文"本身再次存入数据库，导致内存呈指数级爆炸增长。
    *   [Issue #4810](https://github.com/zeroclaw-labs/zeroclaw/issues/4810) (已关闭): 历史修剪器 会切断 `tool_use` 和 `tool_result` 的配对，导致 Anthropic API 报 400 错误。

## 6. 功能请求与路线图信号
*   **HMAC 工具校验**：[Issue #4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830) 提出为工具执行结果添加 HMAC-SHA256 签名，以检测 Agent 的幻觉。这显示了企业级用户对**可验证性**的强烈需求。
*   **本地开发支持**：[Issue #4868](https://github.com/zeroclaw-labs/zeroclaw/issues/4868) 请求 `http_request` 工具支持访问私有地址，以便通过 Zeroclaw 控制智能家居或本地服务。
*   **预期纳入下个版本**：
    *   **配置热重载** (PR #4959): 解决重启即失忆的痛点。
    *   **内存隔离** (PR #5061): 允许子 Agent 拥有独立的内存命名空间。

## 7. 用户反馈摘要
*   **痛点：文档严重脱节**：多个 Issue (如 #4863, #4851) 反映虽然代码支持 GitHub Copilot 或 OpenAI-compatible providers，但缺乏文档引导，导致用户配置时频频受阻。
*   **痛点：低配设备构建困难**：[Issue #4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704) 指出尽管 Zeroclaw 宣称支持树莓派，但在 8GB RAM 设备上编译仍会 OOM，用户希望调整编译配置以适应边缘设备。
*   **满意点**：社区对 `zeroclaw config reload` 功能的回归（PR #4959）表示欢迎，这曾是阻断工作流的主要痛点。

## 8. 待处理积压
*   **CI/CD 警报遗漏**：[Issue #4656](https://github.com/zeroclaw-labs/zeroclaw/issues/4656) 指出 CI 的 `clippy` 检查跳过了可选功能（如 Matrix），导致代码合并时忽略了潜在警告。建议维护者优先修复 CI 流程，防止低质量代码合入。
*   **长期未解的上下文丢失**：尽管 [Issue #4804](https://github.com/zeroclaw-labs/zeroclaw/issues/4804) 已关闭，但相关的 Matrix 上下文丢失问题在 Friction Tracker (#4657) 中仍被标记为活跃痛点，需确认是否彻底解决。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-29)

## 1. 今日速览
PicoClaw 项目今日保持**极高活跃度**，社区贡献与反馈热度持续升温。过去24小时内共处理了 **130 次交互**（43 条 Issues + 87 条 PRs），其中 PR 合并/关闭数达到 54 条，显示出维护团队强大的代码吞吐量与审核能力。

今日核心动态集中在 **v0.2.4-nightly** 版本的持续迭代，重点围绕 **Agent 重构（Phase 2）** 与 **多渠道适配（Telegram/飞书/QQ）** 展开。值得注意的是，安全性与工具调用的稳定性成为社区关注焦点，多个安全相关的修复已被纳入夜间构建。

🚀 **活跃度评估**: 🔋 **极 High** | 📈 **走势**: 上升期 (迈向 v0.2.4 正式版)

---

## 2. 版本发布
### 📦 Nightly Build: `v0.2.4-nightly.20260329.27f638e9`
- **发布时间**: 2026-03-29
- **性质**: 自动化构建，可能不稳定，仅供测试。
- **更新范围**: 包含 `main` 分支自 `v0.2.4` 以来的所有变更。
- **变更日志**: [Compare v0.2.4...main](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)
- **建议**: 开发者与高级用户可下载体验最新功能（如 LuCI 界面、Agent 安全盾），生产环境建议等待 Stable 版本。

---

## 3. 项目进展
今日共有 **54 个 PR 被合并或关闭**，项目在功能增强与跨平台支持上迈出了一大步。

**关键合并与修复：**
*   **OpenWrt 支持 (#2130)**: 新增 `luci-app-picoclaw`，提供 LuCI Web 管理界面，支持在路由器上进行可视化的服务控制与状态监控，极大地拓展了边缘计算场景。
*   **微信渠道稳定性 (#2124)**: 修复了 `context_token` 仅存储在内存导致重启后发送失败的问题，现已持久化到磁盘。
*   **国际化 (#1770)**: 新增马来语文档支持，社区全球化进程加速。
*   **多智能体协作架构 (#1940 - Open but active)**: 重构了 `team` 工具以适配新的 `SubTurn` 机制，为 Phase 2 的多智能体协同打下基础。

---

## 4. 社区热点
今日讨论最激烈的 Issue 揭示了用户在**本地化部署**与**安全配置**方面的痛点。

| Issue | 评论数 | 核心诉求 | 分析 |
| :--- | :--- | :--- | :--- |
| [#1161](https://github.com/sipeed/picoclaw/issues/1161) | 18 | **本地 Ollama 配置** | 用户希望无缝接入本地模型，但遇到无响应问题，反映了对“开箱即用”本地推理的强烈需求。 |
| [#2107](https://github.com/sipeed/picoclaw/issues/2107) | 14 | **误判的安全拦截** | 工具调用被 `safety guard` 错误拦截。这表明内置的安全策略可能过于严格，需要更细粒度的配置。 |
| [#1941](https://github.com/sipeed/picoclaw/issues/1941) | 12 | **配置文件丢失** | 升级或重启后配置被清空。这是严重的数据可靠性问题，直接影响用户信任度。 |
| [#1437](https://github.com/sipeed/picoclaw/issues/1437) | 5 | **移动网络连通性** | 飞书在手机热点下连接不稳定。反映了 IM 渠道对网络环境变化的敏感性。 |

---

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在**工具执行**、**配置持久化**与**特定模型适配**。部分已有修复方案。

*   **🔴 严重**:
    *   **配置被清空 (#1941)**: 升级导致配置丢失。⚠️ 暂未看到直接修复 PR，需关注。
    *   **Cron 指令 Bug (#1532)**: `picoclaw cron add` 指令存在逻辑错误。⚠️ 修复 PR [#2100] 正在处理相关响应发布问题。
*   **🟠 中等**:
    *   **工具调用误拦截 (#2107)**: "Command blocked by safety guard"。🔥 社区已有关于 **Agent Shield** 的 PR [#2138]，或能解决此问题。
    *   **Provider 适配 (#2136)**: 工具调用提取逻辑有缺陷，影响特定模型。修复方案在讨论中。
    *   **Gateway 启动失败 (#2105)**: 首次安装无 PID 文件问题。PR [#2134] 已提出增加 PID 文件管理。
    *   **Windows QQ 渠道 (#2080)**: Windows 环境下 QQ 渠道不可用。

---

## 6. 功能请求与路线图信号
社区正在从单一 Agent 向多智能体协作及更丰富的交互形式演进。

*   **原生 Telegram 反应 (#1328)**: 请求支持 Telegram 的 Emoji 反应作为低噪反馈，而非发送文本。这符合“类人化”交互趋势。
*   **Docker 预装工具 (#1228)**: 用户希望 Docker 镜像内置 `python`, `curl` 等工具，以便开箱即用。
*   **Mattermost 支持 (#1587)**: 企业级即时通讯渠道扩展需求。
*   **Live Task List (#2137)**: 请求通过消息编辑实时展示多步骤任务的进度，解决 Agent "沉默期" 的用户体验问题。

**预测**: `Multi-Agent` (#1934) 和 `Tool UX` (实时反馈、安全配置) 将是下一版本的核心。

---

## 7. 用户反馈摘要
*   **痛点**: **配置复杂**（尤其是本地模型接入）、**安全策略过严**（导致正常工具调用失败）、**特定平台适配**（Windows QQ, 移动网络飞书）。
*   **场景**: 用户尝试在 **OpenWrt 路由器**、**Android Termux**、**本地 PC** 等多种边缘设备上运行 PicoClaw，作为个人助手或家庭中枢。
*   **满意度**: 用户对项目的迭代速度表示认可，但对配置迁移（Upgrade）和数据持久化表示担忧。

---

## 8. 待处理积压
以下重要 Issue/PR 涉及核心架构，需要维护者重点关注：

1.  **Meta: Agent Refactor Phase 2 (#1934)**: [Issue](https://github.com/sipeed/picoclaw/issues/1934)
    *   状态: Draft。这是项目的重大架构升级，涉及多 Agent 协作。
2.  **Agent Shield 安全增强 (#2138)**: [PR](https://github.com/sipeed/picoclaw/pull/2138)
    *   状态: Open。引入安全盾机制，直接关联 #2107 的 Bug 修复，需尽快 Review。
3.  **OpenAICompat 序列化修复 (#1460)**: [PR](https://github.com/sipeed/picoclaw/pull/1460)
    *   状态: Open。已持续半月，修复严格模式下的兼容性问题，影响部分 Provider 接入。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 2026-03-29 NanoClaw 项目动态日报：

# 📊 NanoClaw 项目日报 (2026-03-29)

## 1. 今日速览
NanoClaw 项目今日保持**极高的开发活跃度**，虽然未发布新版本，但社区贡献呈现出井喷态势。过去24小时内共有 **31 条 PR 更新**（其中 10 条已合并/关闭）和 **5 条 Issues 更新**。重点主要集中在**多渠道媒体支持**（WhatsApp/Telegram/Discord）、**可观测性增强**（Web Dashboard/Token 追踪）以及**底层架构维护**（Apple Container 兼容/任务调度修复）。整体来看，项目正处于功能快速迭代与生态补全阶段。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 项目进展
今日共有 10 个 PR 被合并或关闭，显著提升了项目的稳定性与兼容性：

*   **架构与同步策略**：关闭了 Issue #1512 和 #1510，表明团队已完成对上游安全补丁的挑选 及每周依赖审查流程，确保分叉版本的安全性。
*   **平台兼容性修复**：合并了 PR #1523 (fix: Apple Container networking)，修复了在 Apple Container VM 环境下的网络网关检测和 `.env` 挂载问题，这对 macOS 用户至关重要。
*   **用户体验增强**：合并了 PR #1521 (feat: add local-chat channel)，正式引入了自带 PWA 前端的本地聊天服务器，为用户提供无需第三方 API 的本地交互界面。
*   **凭证架构评估**：关闭了 Issue #1511，团队已评估并决定如何处理上游 `credential-proxy` 到 `OneCLI Agent Vault` 的迁移。

---

## 4. 社区热点
今日讨论与关注点主要集中在**功能扩展与多模态支持**：

*   **[PR #1528] feat: add token cost tracking**：由 @kenbolton 提交，旨在追踪 Agent 运行的 Token 消耗（输入/输出/缓存）。这反映了用户对**成本控制**和**资源监控**的强烈需求。
*   **[PR #1121] Feat: add Signal channel**：由 @brentkearney 长期维护的 Signal 频道集成 PR 再次活跃，显示社区对**隐私通讯渠道**集成的持续关注。
*   **[Issue #1503] nanoclaw.dev SSL invalid**：这是一个紧急的基础设施问题，官方网站 SSL 证书失效，影响了项目的对外形象和文档访问。

---

## 5. Bug 与稳定性
今日报告的关键问题主要集中在基础设施与媒体处理逻辑：

1.  **🔴 [严重] SSL 证书失效**
    *   **Issue**: [#1503](https://github.com/qwibitai/nanoclaw/issues/1503)
    *   **详情**: `nanoclaw.dev` 域名 SSL 证书无效。
    *   **状态**: Open，需运维团队立即介入。

2.  **🟠 [中等] WhatsApp 媒体内容不可达**
    *   **Issue**: [#1522](https://github.com/qwibitai/nanoclaw/issues/1522)
    *   **详情**: Agent 无法接收 WhatsApp 的图片和语音备忘录，仅能获取 `media_id`，导致多模态交互失效。
    *   **Fix PR**: [#1526](https://github.com/qwibitai/nanoclaw/pull/1526) (feat: add WhatsApp media fetcher utility) 已提交，待审核。

3.  **🟠 [中等] Telegram 媒体处理缺失**
    *   **Issue**: 相关 PR 描述中提及。
    *   **Fix PR**: [#1507](https://github.com/qwibitai/nanoclaw/pull/1507) (fix(telegram): download media) 已提交，修复了 Telegram 仅保存占位符文本而忽略实际文件的问题。

---

## 6. 功能请求与路线图信号
结合 Open PR 与 Issues，可以看出下一阶段的迭代重点：

*   **📈 可视化监控 Dashboard**：PR [#1514](https://github.com/qwibitai/nanoclaw/pull/1514) 和 [#1524](https://github.com/qwibitai/nanoclaw/pull/1524) 均提出了 Web Dashboard 实现（端口 3333），包含 Notion 状态监控、消息量图表等。这表明**可视化控制面板**极有可能在近期合入主分支。
*   **🤖 Agent 间通信 (P2P)**：PR [#1516](https://github.com/qwibitai/nanoclaw/pull/1516) 提出了 NanoClaw 实例间的直接通信协议。这标志着项目可能从“单点 AI 助手”向**分布式 Agent 协作网络**演进。
*   **🔌 MCP 生态集成**：PR [#1515](https://github.com/qwibitai/nanoclaw/pull/1515) 支持加载群组级 MCP 服务器，意味着项目正在深化与**Home Assistant** 等外部工具的集成能力。

---

## 7. 用户反馈摘要
从 Issues 和 PR 描述中提炼出的关键反馈：

*   **痛点：多模态支持断层**：用户 (@lazer-sketch) 反馈在 WhatsApp 场景下发送图片后 Agent “毫无反应”，暴露了当前版本在处理闭源平台媒体流时的逻辑缺失。
*   **痛点：非回显频道的历史记录丢失**：开发者 (@kenbolton) 指出 Telegram/Slack 等频道的 Bot 回复不会自动存入数据库，导致历史记录不完整（PR #1518 旨在解决此问题）。
*   **场景：本地化部署需求**：用户对 PR #1521 (local-chat) 和 PR #1527 (Room API proxy) 的关注，反映出部分用户倾向于**完全自托管**、不依赖云服务的部署方式。

---

## 8. 待处理积压
*   **⚠️ 紧急运维**: Issue [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) 官网 SSL 证书问题需要立即处理，已持续 24 小时。
*   **⚠️ 长期 PR**: PR [#1121](https://github.com/qwibitai/nanoclaw/pull/1121) (Signal 频道) 已创建两周，仍处于 "Needs Review" 状态，建议维护者 @brentkearney 或官方团队确认其阻塞点。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是基于您提供的 GitHub 数据生成的 NullClaw 项目动态日报（2026-03-29）。

---

# NullClaw 项目动态日报 (2026-03-29)

**分析师观点：** NullClaw 今日呈现出“快速响应，跨平台攻坚”的态势。社区不仅提出了关键的功能性请求（微信集成），维护者对 Windows 平台出现的网络回归问题表现出了极高的响应速度（Issue 报告后即有修复 PR）。虽然有一个功能分支被关闭，但核心稳定性修复（Windows WebSocket）占据主导，显示了项目对质量控制的优先考量。

## 1. 今日速览
- **整体活跃度**：中等偏高。过去24小时内共有 4 个 Issue/PR 更新，主要集中在跨平台兼容性和生态集成。
- **核心进展**：维护者 @manelsen 迅速响应了 Windows 平台的 WebSocket 连接失败问题，提交了针对性修复 PR #742。
- **社区关注**：用户对微信（WeChat）插件集成的呼声较高，Issue #714 持续获得关注，表明 NullClaw 在中文区及东南亚市场的扩展潜力。
- **健康度评估**：Bug 响应周期极短，从 Issue 提出到 PR 提交仅隔数小时（或同步进行），显示出维护者对核心功能（Gateway/Web）的高度敏感。

## 2. 版本发布
- **状态**：过去24小时无新版本发布。
- **趋势**：当前开发重点似乎在于修复 Windows 平台的回归问题以及整合外部功能请求，预计随着 PR #742 的合并，可能会发布一个补丁版本。

## 3. 项目进展
今日的主要进展集中在**问题修复**与**功能筛选**：

- **[FIX] Windows WebSocket 修复 (PR #742)**
  - **链接**：[nullclaw/nullclaw PR #742](https://github.com/nullclaw/nullclaw/pulls/742)
  - **详情**：针对 Issue #739，PR 将 `websocket` 依赖本地化以便于版本控制和修复。解决了 Windows 环境下 WebSocket 立即断开（Code 1006）的严重回归问题。这是今日最重要的代码变更，直接保障了 Windows 用户的 Web Channel 可用性。

- **[CLEANUP] 功能分支关闭 (PR #741)**
  - **链接**：[nullclaw/nullclaw PR #741](https://github.com/nullclaw/nullclaw/pulls/741)
  - **详情**：`Feature/anthropic only onboarding` 分支已被关闭。这通常意味着该功能的实验性尝试暂时中止，或实现方式需要重新规划，项目目前可能不会仅局限于 Anthropic 的单一引导流程。

## 4. 社区热点
今日讨论最活跃的 Issue 是关于**生态扩展**：

- **微信插件集成请求 (Issue #714)**
  - **链接**：[nullclaw/nullclaw Issue #714](https://github.com/nullclaw/nullclaw/issues/714)
  - **热度数据**：评论 7 条（持续活跃中）
  - **分析**：作者 @735589187 指出官方已发布支持 OpenClaw 的微信插件，且竞品 Fork 已支持。鉴于微信在中国大陆和东南亚的庞大用户群，社区强烈建议 NullClaw 跟进。这反映了用户希望 NullClaw 能成为连接主流 IM 平台与 AI 模型的核心网关。

## 5. Bug 与稳定性
今日报告了一个严重的**平台特定回归问题**，且已有修复方案：

- **[HIGH] Windows Web Channel 连接失败 (Issue #739)**
  - **链接**：[nullclaw/nullclaw Issue #739](https://github.com/nullclaw/nullclaw/issues/739)
  - **表现**：在 Windows 10/11 原生环境下，运行 `nullclaw gateway` 后，WebSocket 连接立即断开，错误码 1006。
  - **影响范围**：严重影响 Windows 用户的 Web Channel 功能。
  - **修复状态**：**已有修复 PR** (#742)。该问题被确认为依赖库回归，通过本地化依赖并打补丁解决。

## 6. 功能请求与路线图信号
- **信号 1：IM 平台集成**
  - Issue #714 显示出社区不仅将 NullClaw 视为 AI 工具，更视其为 **IM Bot 后端**。微信集成的优先级在社区认知中正在提升。
- **信号 2：多模型引导流程**
  - PR #741 的关闭暗示团队可能正在重新评估“仅 Anthropic”的引导策略，未来可能转向更通用的多模型 Onboarding 体验。

## 7. 用户反馈摘要
从 Issue #739 的复现步骤可以看出，NullClaw 的核心用户群包含**开发者与高级用户**，他们倾向于：
1.  **源码编译**：使用 Zig 0.15.2 从源码构建。
2.  **本地网关模式**：通过本地 WebSocket (127.0.0.1) 进行调试和集成。
3.  **痛点**：对跨平台（特别是 Windows 原生环境）的稳定性有硬性要求。

从 Issue #714 可知，用户对**竞品功能对标**非常敏感，希望 NullClaw 保持对主流生态（如微信）的兼容性，以应用于实际的自动化业务中。

## 8. 待处理积压
- **PR #742 待合并**：Windows WebSocket 的关键修复目前处于 Open 状态，建议维护者优先 Review 并合并，以减少对 Windows 用户的影响。
- **Issue #714 待确认**：微信插件集成请求目前未有官方明确的时间表，建议团队评估插件接入的复杂度并给予回复，以安抚社区情绪。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是根据 2026-03-29 的 GitHub 数据生成的 **IronClaw** 项目动态日报。

---

# 📊 IronClaw 项目日报 (2026-03-29)

## 1. 今日速览
IronClaw 项目今日呈现出极高的开发活跃度，过去 24 小时内 PR 更新量达到 **50 条**，其中待合并 PR 高达 **37 条**，显示出项目正处于密集的功能迭代与架构重构期。虽然今日无新版本 Release 发布，但核心团队正在推进包括**前端组件化、多租户隔离架构、以及统一执行引擎 v2** 在内的多个重量级 PR。稳定性方面，通过 CI 自动发现了高危数据库信息泄露问题并已迅速关闭相关 PR 修复，社区对 Telegram Bot 和飞书频道的集成问题反馈较多。整体而言，项目正在从单体应用向更模块化、更安全的企业级架构快速演进。

## 2. 版本发布
*   **状态**: 本日无新版本发布 (0 Releases)。

## 3. 项目进展
今日共有 **13 个 PR 被合并或关闭**（主要集中在 CI 检查和部分功能修复），标志着项目在安全性和稳定性维护上取得了进展：

*   **🛡️ 安全修复**: 关闭了关于数据库错误详情泄露至 API 客户端的高危问题 ([#1702](https://github.com/nearai/ironclaw/issues/1702))，相关修复 PR 提升了错误处理的卫生标准。
*   **🛠️ 代码质量**: 合并了改进文档贡献指南的 PR ([#1704](https://github.com/nearai/ironclaw/pull/1704))，规范了开源社区的贡献流程。

**正在进行中的重磅更新:**
*   **前端架构重构**: PR [#1725](https://github.com/nearai/ironclaw/pull/1725) 正在将 Gateway 前端提取为独立的 `ironclaw_frontend` crate 并引入 Widget 系统，这将允许用户深度定制 UI。
*   **多租户与用户管理**: PR [#1626](https://github.com/nearai/ironclaw/pull/1626) 引入了基于数据库的用户管理和多租户隔离，是企业级部署的关键基础设施。
*   **执行引擎 v2**: PR [#1557](https://github.com/nearai/ironclaw/pull/1557) 提出了统一的 Thread-Capability-CodeAct 执行引擎，旨在替换当前碎片化的抽象层。

## 4. 社区热点
今日讨论主要集中在跨平台集成受阻和性能/测试指标优化上：

*   **🔥 [bug] Telegram Bot HTTP Tool 报错** ([#1676](https://github.com/nearai/ironclaw/issues/1676))
    *   **热度**: 10 条评论
    *   **分析**: 用户在尝试配置 Telegram Bot 自动轮询消息时遇到持续的 HTTP tool 错误。用户指出竞品 OpenClaw 表现良好，而 IronClaw 在工具调用链路上存在稳定性问题。这是一个影响较大的功能性阻断 Bug。
*   **📊 指标计算逻辑优化** ([#1731](https://github.com/nearai/ironclaw/issues/1731))
    *   **分析**: 开发者指出当前的 `pass_rate` 使用 "1.0 完美分" 作为通过标准具有误导性，建议引入 `pass@k` 和 `pass^k` 指标以更准确反映 LLM Judge 下的任务成功率。这反映了项目对评估体系严谨性的追求。
*   **📱 飞书/Lark 频道配对卡死** ([#1673](https://github.com/nearai/ironclaw/issues/1673))
    *   **分析**: 用户反馈配置飞书应用后，频道一直停留在 "Awaiting Pairing" 状态，未生成配对码，导致无法完成集成。

## 5. Bug 与稳定性
今日暴露了数个值得注意的 Bug 和安全隐患，部分已由自动化 CI 捕获：

*   **🔴 HIGH: 数据库错误信息泄露**
    *   **Issue**: [#1702](https://github.com/nearai/ironclaw/issues/1702) (Closed)
    *   **详情**: API 响应中直接格式化了数据库异常信息，可能泄露底层架构细节。
    *   **状态**: 已由 CI 检出并关闭，相关修复可能包含在即将合并的 PR 中。
*   **🟠 MEDIUM: WASM 工具 Schema 不匹配**
    *   **Issue**: [#1303](https://github.com/nearai/ironclaw/issues/1303) (Closed)
    *   **详情**: 即使 WASM 工具导出了类型化的 Schema，IronClaw 仍向 LLM 广播宽松的 `{}` Schema，导致模型调用参数错误。
    *   **状态**: 已关闭，推测已修复。
*   **🟠 MEDIUM: Shell 工具绕过文件安全限制**
    *   **Issue**: 由 PR [#1713](https://github.com/nearai/ironclaw/pull/1713) 修复
    *   **详情**: Shell 工具可以通过 `cat` 命令读取 `~/.ssh/id_rsa` 等敏感文件，绕过了 ReadFileTool 的限制。
    *   **修复方案**: 引入共享的 `SENSITIVE_PATH_PATTERNS` 列表并在 Shell 和 File 工具层强制执行。
*   **🔵 修复 PR**: [#1719](https://github.com/nearai/ironclaw/pull/1719) 专门针对 API 响应中的内部错误细节进行了清洗，增强安全性。

## 6. 功能请求与路线图信号
从活跃的 PR 和 Issue 来看，项目下一阶段的路线图非常明确：

1.  **网络与基础设施灵活性**: PR [#1696](https://github.com/nearai/ironclaw/pull/1696) 允许通过 `LLM_ALLOW_LOCAL_NETWORK` 访问局域网 IP，支持 Ollama/vLLM 等本地模型部署。
2.  **企业级安全与隔离**: 多个 PR ([#1626](https://github.com/nearai/ironclaw/pull/1626), [#1713](https://github.com/nearai/ironclaw/pull/1713)) 显示项目正在强化沙箱隔离和权限管理，目标是满足企业级私有化部署需求。
3.  **连接性增强**: PR [#1549](https://github.com/nearai/ironclaw/pull/1549) 支持 Slack Socket Mode，PR [#944](https://github.com/nearai/ironclaw/pull/944) 支持 Discord Gateway，表明项目致力于解决 NAT 穿透和网络受限环境下的连接问题。
4.  **评估体系重构**: Issue [#1731](https://github.com/nearai/ironclaw/issues/1731) 提出的指标变更信号表明项目正在建立更科学的 Agent 评估基准。

## 7. 用户反馈摘要
从 Issue 评论中提炼出的用户痛点如下：

*   **Telegram 集成体验差**: 用户反映 Telegram Bot 的 HTTP Tool 调用经常失败，相比于其他竞品（如 OpenClaw），IronClaw 在消息轮询和工具执行层面的稳定性不足。
*   **飞书集成流程断层**: 用户在配置飞书机器人时，遇到了"无限等待配对"的死锁状态，文档或代码逻辑中缺乏明确的错误反馈机制。
*   **自托管模型网络限制**: 之前版本默认拦截局域网 IP 导致无法连接内网的 Ollama 服务，这在 PR #1696 中得到确认并即将修复。

## 8. 待处理积压
以下重要 Issue 或 PR 虽有更新但长期处于 Open 状态，建议关注：

*   **PR #944 (Discord Gateway)**: 这是一个 XL 级别的功能 PR，由新贡献者发起，涉及复杂的 WASM Channel 改造，已经过数日讨论尚未合并，需要核心团队重点 Review 以防卡顿。
*   **PR #1626 (多租户架构)**: 核心架构级改动，影响面极广，目前处于 Open 状态，是项目架构升级的关键路径。
*   **Issue #1676 (Telegram Bug)**: 该 Bug 导致核心功能不可用且评论较多，建议维护者优先确认是工具层问题还是配置问题。

---
*分析师注: IronClaw 目前处于 "重型重构期"。虽然功能丰富度在快速提升（Discord, Slack, 前端 Widget, 多租户），但稳定性（Telegram, WASM Schema）正处于阵痛期。建议开发团队在合并新架构（如 Engine v2）前，优先解决工具链路和权限安全的回归测试。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是根据 LobsterAI (github.com/netease-youdao/LobsterAI) 2026-03-29 的 GitHub 动态生成的项目日报。

---

# LobsterAI 项目动态日报 (2026-03-29)

## 1. 今日速览
LobsterAI 今日保持了**极高的开发活跃度**，共处理了 **17 个 PR**（其中 11 个已合并/关闭）和 **6 个 Issue**。项目刚刚发布了 **`2026.3.29`** 新版本，带来了 UI 交互重构、MCP 插件修复以及日志导出的优化。社区方面，焦点集中在**配置持久化**和**即时通讯（IM）消息同步**的体验问题上，开发者针对 Gateway 崩溃和 MCP 环境变量传递等问题迅速响应并提交了修复。整体来看，项目正处于功能快速迭代与稳定性修复并行的阶段。

## 2. 版本发布
### **[Release 2026.3.29](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.29)**
本次更新主要聚焦于交互体验优化与 Bug 修复：
*   **交互重构**: `AskUserQuestion` 插件移除了确认弹窗，改为结构化交互；消息导航重构为迷你轨道样式。
*   **关键修复**: 修复了导出日志时的挂起问题以及 `reply was never sent` 错误。

## 3. 项目进展
今日共有 **11 个 PR 被合并**，显著提升了系统的稳定性与架构合理性：

*   **架构重构 (IM)**: 完成了 "Xiaomifeng" (网易蜂) 从独立网关到 OpenClaw 插件的迁移 ([PR #984](https://github.com/netease-youdao/LobsterAI/pull/984), [PR #994](https://github.com/netease-youdao/LobsterAI/pull/994))，统一了平台常量，减少了独立进程维护成本。
*   **严重 Bug 修复**:
    *   修复了自定义模型名称丢失及由此引发的 Gateway 无限重启崩溃问题 ([PR #894](https://github.com/netease-youdao/LobsterAI/pull/894))，显著提升了系统容错性。
    *   修复了定时任务执行期间导致 Gateway 崩溃的问题 ([PR #993](https://github.com/netease-youdao/LobsterAI/pull/993))。
    *   修复了切换任务会话时附件消失的问题 ([PR #851](https://github.com/netease-youdao/LobsterAI/pull/851))。
*   **MCP 优化**: 移除了 `McpBridgeServer` 的 Secret 鉴权机制，解决了 App 重启后因 Secret 不匹配导致的 401 错误 ([PR #1002](https://github.com/netease-youdao/LobsterAI/pull/1002))。

## 4. 社区热点
今日社区讨论最活跃的问题集中在**用户配置的自主权与持久化**：

*   **[Issue #1006](https://github.com/netease-youdao/LobsterAI/issues/1006) [OPEN] 配置文件和工作空间文件在重启后被重置**
    *   **热度**: 高 (关联 Issue #1005)
    *   **诉求**: 用户反馈 LobsterAI 启动时会强制覆盖 `openclaw.json` 和 `AGENTS.md` 等文件，导致自定义配置（如飞书流式输出）丢失。目前用户只能通过外部定时任务（Cron）恢复配置，体验极差。
    *   **分析**: 这反映了当前应用“重置优于迁移”的启动逻辑与用户“配置持久化”需求之间的矛盾。

*   **[Issue #986](https://github.com/netease-youdao/LobsterAI/issues/986) [OPEN] 微信回复没有与客户端同步**
    *   **诉求**: 用户抱怨微信机器人响应不是流式的，而是等待处理完毕后一次性发送多条消息，造成长时间等待后的“消息轰炸”感。

## 5. Bug 与稳定性
今日修复了多个严重级别的 Bug，同时有新的稳定性问题浮现：

*   **严重 - 已修复**:
    *   **Gateway 无限重启**: 因配置字段丢失导致进程 Crash Loop，已由 [PR #894](https://github.com/netease-youdao/LobsterAI/pull/894) 修复。
*   **中等 - 待处理**:
    *   **Notion MCP 401 错误**: [Issue #1003](https://github.com/netease-youdao/LobsterAI/issues/1003) 指出 MCP Bridge 启动 `npx` 时未正确透传环境变量，导致 Notion MCP Server 无法读取 Token。此问题与今日合并的 [PR #1001](https://github.com/netease-youdao/LobsterAI/pull/1001) (SSE 支持) 可能有相关性。
    *   **SSE/HTTP 流式 MCP 无效**: [PR #1001](https://github.com/netease-youdao/LobsterAI/pull/1001) 指出当前仅支持 stdio 类型 MCP，SSE 类型配置虽保存但不生效，该 PR 目前处于 Open 状态。

## 6. 功能请求与路线图信号
从待合并的 PR 和讨论中可以看出近期的功能演进方向：

*   **交互效率提升**: [PR #999](https://github.com/netease-youdao/LobsterAI/pull/999) 正在开发 **Cmd+K 命令面板**，旨在通过模糊搜索统一操作入口。
*   **上下文操作优化**: [PR #998](https://github.com/netease-youdao/LobsterAI/pull/998) 提议增加**选中文本浮动工具栏**，支持一键引用、解释或翻译。
*   **国际化增强**: [PR #991](https://github.com/netease-youdao/LobsterAI/pull/991) 和 [PR #996](https://github.com/netease-youdao/LobsterAI/pull/996) 正在完善预设 Agent 和技能描述的 i18n 支持。

## 7. 用户反馈摘要
*   **痛点**: 用户对“配置被重置”极其敏感，特别是高级用户。应用启动时对配置文件的激进覆盖策略被视为一种“反功能”。
*   **体验**: 微信端的“异步回复+批量发送”模式严重影响了对话的自然感，用户期望真正的流式输出体验。
*   **好评**: 开发者对 Bug 的响应速度非常快（如一天内修复杂复杂的 Gateway 重启问题），社区对修复进度的认可度较高。

## 8. 待处理积压
*   **[Issue #1006](https://github.com/netease-youdao/LobsterAI/issues/1006)**: 需要维护者尽快确认配置持久化的设计方案，目前的 Workaround（定时任务恢复）并非长久之计。
*   **[PR #1001](https://github.com/netease-youdao/LobsterAI/pull/1001)**: 关于 SSE/HTTP 类型 MCP 支持的修复 PR 仍处于 Open 状态，建议优先 Review 以解决 [Issue #1003](https://github.com/netease-youdao/LobsterAI/issues/1003) 中的环境变量问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-29)

> **数据来源**: [TinyAGI/TinyClaw](https://github.com/TinyAGI/tinyclaw)
> **分析周期**: 过去 24 小时

---

### 1. 今日速览
今日 TinyClaw 项目呈现出极高的维护活跃度与迭代速度。虽然没有发布新的版本，但团队集中关闭了 **7 个 Issues** 和合并了 **15 个 Pull Requests**，显示出项目正在进行大规模的代码清理、Bug 修复及架构优化。重点推进了安装体验的重构、Docker 容器化部署的稳定性修复以及 Web 控制台的功能整合。总体而言，项目健康度优秀，正处于为下一个稳定版本夯实基础的阶段。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
今日共有 15 个 PR 被合并/关闭，主要围绕**安装体验优化**、**Docker 支持**和**前端重构**三个方向推进：

*   **安装与部署重构**:
    *   **PR #237 / #235**: 确立 `curl` 脚本为默认安装方式，优化了 README 文档结构，移除了过时的安装脚本引用。
    *   **PR #239**: 增加了旧品牌数据目录 (`~/.tinyclaw`) 向新目录 (`~/.tinyagi`) 的自动迁移逻辑，确保老用户平滑升级。
    *   **PR #240**: 修复了 `better-sqlite3` 原生模块在不同操作系统下的构建问题。
*   **Docker 稳定性修复**:
    *   **PR #265**: 调整了 Docker 数据持久化路径，确保 AI CLI (如 Codex/Claude) 的鉴权信息能被正确读写。
    *   **PR #266**: 解决了 Codex 在容器内因权限问题无法读取 `auth.json` 导致 500 错误的致命问题。
*   **功能增强与 UI**:
    *   **PR #268**: 重构了 TinyOffice Web 端布局，将 Providers 合并至 Services 标签页，精简了界面。
    *   **PR #218**: 引入了 5 分钟超时机制，强制杀死卡死的 Agent 进程，显著提升了系统鲁棒性。
    *   **PR #113**: 实现了 Agent 工具调用（读、写、执行等）在 Telegram 频道的实时流式反馈。

### 4. 社区热点
今日社区互动主要集中在功能增强与平台支持请求上：

*   **[Issue #193] TinyOffice 首次运行引导流程**
    *   **链接**: [TinyAGI/tinyagi #193](https://github.com/TinyAGI/tinyagi/issues/193)
    *   **热度**: 10 条评论
    *   **分析**: 用户强烈希望摆脱 CLI 和手动配置文件编辑的繁琐流程，期待一个类似 SaaS 产品的 Web 端初始化向导。该 Issue 已关闭，暗示相关功能可能已排期或通过其他方式解决。
*   **[Issue #126] Telegram Bot 断线重连失败**
    *   **链接**: [TinyAGI/tinyagi #126](https://github.com/TinyAGI/tinyagi/issues/126)
    *   **热度**: 7 条评论
    *   **分析**: 这是一个影响较广的连接稳定性问题。随着该 Issue 的关闭，预计相关修复已合并。
*   **[Issue #124] 扩展 LLM 提供商支持**
    *   **链接**: [TinyAGI/tinyagi #124](https://github.com/TinyAGI/tinyagi/issues/124)
    *   **热度**: 6 条评论
    *   **分析**: 用户呼吁集成 z.ai, Kimi, OpenRouter 等更多提供商，以分散 Claude API 的配额压力。

### 5. Bug 与稳定性
今日修复了多个影响系统稳定性的关键 Bug，主要集中在进程管理和环境适配：

*   **[HIGH] Agent 进程假死**: 修复了当 Claude/Codex 进程挂起时，系统仅重置数据库状态但不杀死进程导致资源泄露的问题。
    *   *Fix*: **PR #218**
*   **[HIGH] Docker 鉴权失败**: 修复了 Docker 容器中 Codex 无法读取 API Key 导致 WebSocket 500 错误的问题。
    *   *Fix*: **PR #266**
*   **[MEDIUM] Telegram 连接稳定性**: 解决了 Telegram 客户端无法自动重连的问题。
    *   *Related Issue*: **Issue #126**
*   **[MEDIUM] WSL2 环境超时**: 解决了在 WSL2 环境下 Telegram 客户端 `ETIMEDOUT` 的问题。
    *   *Related Issue*: **Issue #84**
*   **[LOW] TS 类型错误**: 修复了 Strict 模式下的 TypeScript 编译错误。
    *   *Fix*: **PR #264**

### 6. 功能请求与路线图信号
从已关闭的 Issue 和合并的 PR 来看，项目接下来的路线图重点如下：

*   **Web 控制台增强**: **Issue #194** 提出的“运行时控制面板”（管理守护进程、队列、心跳）和 **Issue #193** 的“首次运行引导”均已关闭，结合 **PR #268** 的 UI 重构，预示着 TinyOffice 正在向全功能控制台演进，旨在彻底脱离 CLI 操作。
*   **多智能体与多模型支持**: **Issue #124** 的讨论及 **PR #168** (Multi-agent + Kimi/Minimax support) 的合并，表明项目正积极解除对单一 LLM 提供商的依赖，向多模型异构计算架构转型。

### 7. 用户反馈摘要
*   **痛点**: 配置门槛高（依赖 CLI 和 JSON 编辑），Telegram 连接不稳定，Docker 环境下鉴权配置复杂。
*   **场景**: 用户主要将 TinyClaw 用于通过 Telegram 等即时通讯工具远程调度 AI Agent 执行代码编写和系统管理任务。
*   **满意度**: 随着 Docker 修复和 Web 界面的整合，部署难度正在降低；实时流式反馈功能的加入（PR #113）极大地提升了交互体验。

### 8. 待处理积压
*   **无显著积压**: 过去 24 小时内所有活跃的 Issues (7条) 和 PRs (15条) 均已关闭或合并，显示维护团队当前处理能力极强，积压清理工作已告一段落。建议关注后续新开 Issue 的响应速度。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

这里是 **Moltis** 项目 2026-03-29 的动态日报。

---

### 📊 Moltis 项目动态日报 (2026-03-29)

#### 1. 今日速览
Moltis 项目今日呈现**极高**的开发与维护活跃度，处于持续集成与快速迭代状态。
过去 24 小时内，项目成功合并了 **11 个 PR** 并关闭了 **8 个 Issue**，不仅修复了多个影响核心体验的关键 Bug（如 LLM 提供商连接超时、聊天记录压缩报错），还发布了 3 个版本。这表明项目团队正在为即将到来的新功能进行密集的稳定性修复和代码清理。

#### 2. 版本发布
今日连续发布了 3 个迭代版本，显示团队正在通过 CI/CD 进行快速验证与交付：
- **[20260328.03](https://github.com/moltis-org/moltis/releases/tag/20260328.03)**
- **[20260328.02](https://github.com/moltis-org/moltis/releases/tag/20260328.02)**
- **[20260328.01](https://github.com/moltis-org/moltis/releases/tag/20260328.01)**
> **注**：虽然 Release Notes 较为简略，但结合 PR 记录来看，这些版本主要包含了对 Telegram 论坛支持、GraphQL 服务绑定及 LLM 提供商兼容性的修复。

#### 3. 项目进展
今日共有 **11 个 PR** 被合并，项目在**多平台适配**和**兼容性修复**方面取得重大进展：
- **渠道集成**：合并了 Matrix 协议的集成代码 ([PR #500](https://github.com/moltis-org/moltis/pull/500))，并修复了 Telegram 论坛主题的会话隔离与回复路由问题 ([PR #498](https://github.com/moltis-org/moltis/pull/498), [PR #512](https://github.com/moltis-org/moltis/pull/512))，显著增强了多渠道消息处理的准确性。
- **核心架构修复**：修复了 GraphQL 绕过动态聊天服务绑定的长期遗留问题 ([PR #511](https://github.com/moltis-org/moltis/pull/511))，这对于基于 GraphQL 的客户端稳定性至关重要。
- **模型提供商兼容性**：大幅优化了自定义 OpenAI 兼容提供商的体验，解决了无模型列表时的超时问题 ([PR #507](https://github.com/moltis-org/moltis/pull/507))，并修复了 MiniMax 的系统提示词格式错误 ([PR #510](https://github.com/moltis-org/moltis/pull/510))。

#### 4. 社区热点
今日社区关注度较高的议题主要集中在**功能扩展**与**部署困难**：
- **[PR #513 Add Jina.ai as web search provider](https://github.com/moltis-org/moltis/pull/513)**：社区成员积极贡献新的搜索提供商集成，表明项目在 RAG（检索增强生成）领域的需求旺盛。
- **[Issue #496 install.sh fails on ARM64](https://github.com/moltis-org/moltis/issues/496)**：该 Issue 反映了在 ARM64 架构 Linux 上的安装包缺失（404 错误），虽已关闭，但显示出用户对非 x86 架构（如树莓派、ARM 服务器）的部署需求强烈。
- **[PR #503 Session recall & Skill portability](https://github.com/moltis-org/moltis/pull/503)**：该待合并 PR 包含了会话召回和技能导出等高级功能，是未来版本的重要路线图信号。

#### 5. Bug 与稳定性
今日修复了多个**高优先级**的阻断性 Bug，显著提升了系统健壮性：
- **[已修复] 上下文压缩导致聊天崩溃** ([Issue #501](https://github.com/moltis-org/moltis/issues/501) / [PR #505](https://github.com/moltis-org/moltis/pull/505))：修复了手动压缩上下文时因角色设置错误导致的崩溃，严重程度：**高**。
- **[已修复] 添加自定义 LLM 导致超时** ([Issue #502](https://github.com/moltis-org/moltis/issues/502) / [PR #515](https://github.com/moltis-org/moltis/pull/515))：将探测超时时间从 10s 延长至 30s，解决了本地大模型加载慢导致的连接失败问题。
- **[已修复] MiniMax 模型报错 "invalid chat setting"** ([Issue #508](https://github.com/moltis-org/moltis/issues/508) / [PR #510](https://github.com/moltis-org/moltis/pull/510))：针对特定供应商的 API 格式适配问题。
- **[已修复] 模型选择列表为空** ([Issue #514](https://github.com/moltis-org/moltis/issues/514))：影响了用户正常选择模型。

#### 6. 功能请求与路线图信号
- **语音与搜索能力增强**：待处理的 [PR #513](https://github.com/moltis-org/moltis/pull/513) (Jina.ai 搜索) 和 [PR #499](https://github.com/moltis-org/moltis/pull/499) (自定义 TTS/STT base_url) 表明，Moltis 正致力于解耦特定服务商依赖，转向支持更通用的本地或第三方兼容服务。
- **长期记忆与技能系统**：[PR #503](https://github.com/moltis-org/moltis/pull/503) 提到了跨会话回忆和技能包导出，这预示着项目正从单纯的“聊天机器人”向具备长期记忆和可迁移技能的“智能体”演进。

#### 7. 用户反馈摘要
- **部署痛点**：ARM64 用户在安装阶段即遭遇 404 错误，表明目前的构建流水线可能遗漏了对 `aarch64` 架构的编译支持。
- **本地模型用户增多**：多个 Bug 报告（如超时设置、自定义 Provider 探测）都与使用本地 LLM（如 Ollama, vLLM）有关，用户倾向于使用 OpenAI 兼容接口接入私有模型，但对配置参数（如 Model ID）较为敏感。
- **升级兼容性**：有用户反馈升级后出现配置失效的问题，提示后续版本需注意数据迁移的平滑性。

#### 8. 待处理积压
目前有 **4 个 PR** 处于待合并状态，建议维护者重点关注：
- **[PR #503](https://github.com/moltis-org/moltis/pull/503)**：涉及会话回忆和 SSH 运行时，功能较大，需仔细审查其对现有上下文管理逻辑的影响。
- **[PR #513](https://github.com/moltis-org/moltis/pull/513)**：Jina.ai 搜索集成，属于社区贡献，需检查 API 密钥管理与错误处理规范。
- **[PR #499](https://github.com/moltis-org/moltis/pull/499)**：语音服务自定义 URL 支持，属于必要的体验优化。

---

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-29)

你好！我是 AI 智能体开源项目分析师。以下是基于 `agentscope-ai/CoPaw` 最新 GitHub 数据生成的日报。

## 1. 今日速览
CoPaw 项目今日保持**高度活跃**状态，社区互动频繁。过去24小时内共有 **31 条 Issue 更新** 和 **25 条 PR 更新**，其中新开 Issue 占比很高，显示项目正在快速吸纳新用户。目前有 11 条 PR 处于待合并状态，表明开发节奏紧凑。今日重点关注**稳定性修复**（MCP 配置空值崩溃）和**生态扩展**（钉钉文档、OpenCode 集成）。虽然未发布新版本，但多项核心功能的 PR 已进入 Review 阶段，预示着下一次版本更新将包含重大改进。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 14 个 PR 被合并或关闭，主要集中在 Bug 修复、文档更新和新 Provider 适配，项目健壮性得到提升。

*   **[FIX] 修复 MCP 配置空指针异常** (PR #2471)
    *   **内容**：修复了 `MCPConfigWatcher` 在配置为空时导致 CLI 工具崩溃的问题。
    *   **关联**：解决了 Issue #2462。这是一个严重的启动阻塞问题，修复后显著提升了 CLI 用户的体验。
    *   **链接**：[agentscope-ai/CoPaw PR #2471](https://github.com/agentscope-ai/CoPaw/pull/2471)

*   **[FEATURE] 增加 CoPaw 本地模型支持** (PR #2419)
    *   **内容**：重构了 Local Model 模块，引入 CoPaw Local Model 支持，降低了对外部 API 的依赖。
    *   **链接**：[agentscope-ai/CoPaw PR #2419](https://github.com/agentscope-ai/CoPaw/pull/2419)

*   **[DOCS] 文档与配置更新** (PR #2461, #2450, #2444)
    *   更新了关于 Agent、MCP 工具及核心配置的文档，帮助用户更好地理解复杂的配置项。
    *   **链接**：[PR #2461](https://github.com/agentscope-ai/CoPaw/pull/2461), [PR #2450](https://github.com/agentscope-ai/CoPaw/pull/2450)

## 4. 社区热点
今日社区讨论焦点集中在**贡献者任务认领**和**安装配置困难**上。

*   **🐾 Help Wanted: Open Tasks** (Issue #2291)
    *   **热度**：32 条评论。
    *   **分析**：这是项目的核心贡献任务板，大量开发者在评论区认领 P0-P2 优先级的任务，显示出社区对 CoPaw 愿景的高度认可和积极参与意愿。
    *   **链接**：[agentscope-ai/CoPaw Issue #2291](https://github.com/agentscope-ai/CoPaw/issues/2291)

*   **[Bug] CoPaw 进程空闲时 CPU 占用 100%** (Issue #2218)
    *   **热度**：10 条评论。
    *   **分析**：用户报告空闲状态下存在忙循环。性能问题是影响本地部署体验的关键，该 Issue 受到高度关注。
    *   **链接**：[agentscope-ai/CoPaw Issue #2218](https://github.com/agentscope-ai/CoPaw/issues/2218)

*   **[Bug] Ollama 配置困难与 LLM 选项消失** (Issue #2298, #2425)
    *   **热度**：合计 10+ 条评论。
    *   **分析**：多位用户反馈 v0.2.0 后 Web UI 中模型选择框消失，且 Ollama 集成配置门槛过高。这反映了 UI 交互逻辑变更后缺乏引导，以及本地模型集成的文档急需完善。
    *   **链接**：[Issue #2298](https://github.com/agentscope-ai/CoPaw/issues/2298), [Issue #2425](https://github.com/agentscope-ai/CoPaw/issues/2425)

## 5. Bug 与稳定性
今日报告了多个影响核心流程的 Bug，严重程度较高。

*   **🔴 [Critical] MCP 配置加载导致 CLI 完全失效** (Issue #2462)
    *   **现象**：当 MCP 配置为空时，调用 `model_dump()` 触发 `AttributeError`，导致 CLI 无法启动。
    *   **状态**：**已修复** (PR #2471 已合并)。
    *   **链接**：[agentscope-ai/CoPaw Issue #2462](https://github.com/agentscope-ai/CoPaw/issues/2462)

*   **🟠 [High] 网关重启导致 Agent 永久卡死** (Issue #2445)
    *   **现象**：执行 `pkill` 或重启服务后，Agent 进入无响应状态，且无超时报错，必须重新部署。
    *   **状态**：Open，等待修复。
    *   **链接**：[agentscope-ai/CoPaw Issue #2445](https://github.com/agentscope-ai/CoPaw/issues/2445)

*   **🟠 [High] 严重网络波动导致工具调用失败** (Issue #2435)
    *   **现象**：在网络不稳定环境下，`execute_shell_command` 和 `gh CLI` 频繁超时，Agent 效率极低。
    *   **状态**：Open，建议增加重试机制。
    *   **链接**：[agentscope-ai/CoPaw Issue #2435](https://github.com/agentscope-ai/CoPaw/issues/2435)

*   **🟡 [Medium] Telegram 频道消息轰炸** (Issue #2464)
    *   **现象**：执行任务时，系统向 Telegram 发送数十条碎片化日志消息，而非合并发送。
    *   **状态**：已关闭（可能已在近期版本修复或确认为配置问题）。
    *   **链接**：[agentscope-ai/CoPaw Issue #2464](https://github.com/agentscope-ai/CoPaw/issues/2464)

## 6. 功能请求与路线图信号
用户对**多模态交互**、**企业级工具集成**及**底层调度优化**有强烈需求。

*   **Agent 消息队列与优先级调度系统** (Issue #2468 / PR #2469)
    *   **诉求**：支持优先级打断、工作排队和任务恢复。
    *   **进展**：开发者 **@cnyarx** 已直接提交包含优先级队列实现的 PR #2469。这是一个高质量的架构级贡献，极有可能被合并。
    *   **链接**：[Issue #2468](https://github.com/agentscope-ai/CoPaw/issues/2468) | [PR #2469](https://github.com/agentscope-ai/CoPaw/pull/2469)

*   **钉钉 AI 表格/文档操作工具** (Issue #2451 / PR #2465)
    *   **诉求**：扩展钉钉集成能力，支持操作 AI 表格和文档。
    *   **进展**：**@zjncs** 已提交 PR #2465，实现了增删改查等完整工具链，目前处于待合并状态。
    *   **链接**：[Issue #2451](https://github.com/agentscope-ai/CoPaw/issues/2451) | [PR #2465](https://github.com/agentscope-ai/CoPaw/pull/2465)

*   **用户资产备份与迁移** (Issue #2443 / PR #2457)
    *   **诉求**：支持导出/导入记忆、技能和工具配置，便于跨设备迁移。
    *   **进展**：PR #2457 已提交，支持 ZIP 格式打包和版本兼容性检查。
    *   **链接**：[Issue #2443](https://github.com/agentscope-ai/CoPaw/issues/2443) | [PR #2457](https://github.com/agentscope-ai/CoPaw/pull/2457)

*   **其他值得关注的请求**：
    *   Console Web 支持粘贴图片 (Issue #2434)
    *   Docker 增加 noVNC 支持 (Issue #2447)

## 7. 用户反馈摘要
*   **UI/UX 痛点**：
    *   **版本升级困惑**：升级 v0.2.0 后，Web UI 的模型选择框消失，只显示 Provider，导致用户无法切换具体模型（Issue #2425）。
    *   **历史记录隐藏**：新的 UI 将历史聊天框隐藏在右侧，不便于多角色切换和协作（Issue #2454）。
*   **配置体验**：
    *   **Ollama 门槛高**：用户普遍反映 `pip install 'copaw[ollama]'` 经常报错，且文档缺乏清晰的排错指南（Issue #2298）。
*   **稳定性反馈**：
    *   **QA Agent 破坏环境**：有用户反馈在与 QA Agent 交互后，Web UI 损坏且重装无法修复（Issue #2293）。

## 8. 待处理积压
*   **长期未决的 CPU 占用问题 (Issue #2218)**：自 03-24 报告以来，虽然评论活跃，但尚未有明确的 Fix PR 被合并，建议维护者优先排查 `epoll` 空转问题。
*   **Qwen 模型兼容性报错 (Issue #2277)**：关于 `auto tool choice` 的 400 错误自 03-25 以来仍未解决，影响了部分自定义模型用户的使用。
*   **语音转录失效 (Issue #2439)**：影响多模态体验，目前尚无修复进展。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

以下是为您生成的 **ZeptoClaw** 项目 2026-03-29 动态日报。

---

# ZeptoClaw 项目日报 (2026-03-29)

### 1. 今日速览
ZeptoClaw 今日维护活跃度显著提升，核心贡献者 @stuartbowness 集中解决了长对话场景下的系统稳定性问题。项目目前处于**高强度修复与优化阶段**，虽然没有新版本发布，但代码库迎来了 2 个重要的待合并 PR，分别针对上下文溢出和 Telegram 消息静默失败提供了解决方案。社区方面出现了 1 个关于 Telegram 深度研究的严重 Bug 报告，且该 Bug 已有对应的修复 PR 提交，显示出维护者对线上问题的极快响应速度。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
尽管今日无代码合并，但提交的两个 PR 标志着项目在**健壮性**和**用户体验**两大关键领域取得了重要进展：

*   **架构重构 - 上下文管理**: 提交了 [PR #460](https://github.com/qhkm/zeptoclaw/pull/460)，旨在彻底解决长对话中的 Token 溢出崩溃问题。该 PR 将原本单一的字数统计压缩策略升级为“多层深度防御”策略，这将极大提升 Agent 在处理长时任务时的稳定性。
*   **关键修复 - Telegram 交互**: 提交了 [PR #462](https://github.com/qhkm/zeptoclaw/pull/462)，针对 Telegram 端长消息静默失败的问题引入了分块机制和纯文本回退方案。这修复了用户在移动端接收复杂反馈时的盲区。

### 4. 社区热点
今日社区焦点主要集中在 Telegram 集成的稳定性上。

*   **[Issue #461](https://github.com/qhkm/zeptoclaw/issues/461) bug: research tasks via Telegram silently fail with no response**
    *   **热度数据**: 👍 0 | 评论 0
    *   **分析**: 该 Issue 详细描述了用户在进行开放式研究任务（特别是涉及浏览器使用的场景）时，Agent 处理完成但用户收不到任何反馈的严重体验问题。作者在 Issue 中直接附带了根本原因分析（RCA），指出 Telegram HTML 渲染错误是罪魁祸首。虽然目前评论数为 0，但其关联的 Fix PR (#462) 已提交，显示出维护者正在高效闭环该问题。

### 5. Bug 与稳定性
今日报告了 1 个严重级别的 Bug，主要集中在多模态/外部集成接口：

1.  **[严重] Telegram 长任务静默失败 ([Issue #461](https://github.com/qhkm/zeptoclaw/issues/461))**
    *   **现象**: 涉及浏览器使用的复杂研究任务在 Telegram 端无响应，且无错误提示。
    *   **原因**: `render_telegram_html()` 生成畸形标签导致消息发送失败，且缺乏降级处理。
    *   **状态**: **已有 Fix PR** ([PR #462](https://github.com/qhkm/zeptoclaw/pull/462))，等待合并。

### 6. 功能请求与路线图信号
*   **长上下文支持**: [PR #460](https://github.com/qhkm/zeptoclaw/pull/460) 的提交表明项目正在向支持**超长对话记忆**和**复杂多步任务**演进。这是 AI Agent 迈向生产级可用的重要信号，意味着未来的版本将能更好地处理需要长期记忆的复杂工作流。

### 7. 用户反馈摘要
*   **痛点**: 用户在使用 Telegram 作为前端进行重度任务时体验较差，主要表现为“静默失败”（Bot 假死），这会让人误以为系统崩溃。
*   **场景**: 用户倾向于使用 ZeptoClaw 进行“开放式研究”（如 "Rust 社区最固执的开发者是谁"），这类任务通常需要 Agent 进行大量的网页浏览和信息整合。
*   **反馈质量**: Issue 提交者不仅反馈了问题，还提供了详细的 RCA（根本原因分析），表明社区用户具备较高的技术素养，且深度参与项目的 Debug 过程。

### 8. 待处理积压
*   **PR 积压**: 当前有 2 个高价值 PR ([#460](https://github.com/qhkm/zeptoclaw/pull/460), [#462](https://github.com/qhkm/zeptoclaw/pull/462)) 处于 Open 状态。鉴于其解决的是崩溃级和静默失败级问题，**建议维护者优先 Review 并合并 #462**，以尽快修复线上体验问题。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-29)

这里是 EasyClaw 开源项目日报。根据过去 24 小时的 GitHub 数据，项目今日无代码合并或版本发布，主要动态集中在社区报告的模型兼容性问题上。以下是详细分析。

---

### 1. 今日速览
项目今日活跃度主要集中在**问题追踪（Issue Tracking）**方面。虽然代码仓库没有新的提交或版本发布，但社区用户报告了 **2 条**关于多模型切换的高优先级 Bug。这表明项目正处于被实际使用的阶段，且用户开始尝试跨模型调用的高级场景。目前无 PR 进展，项目整体处于维护观望期，需尽快解决新出现的稳定性问题以恢复健康度。

### 2. 版本发布
*   **无新版本发布**

### 3. 项目进展
*   **无合并/关闭的 PR**
    *   今日无代码变更，项目核心功能代码库保持静止。

### 4. 社区热点
今日社区关注点集中在 **百炼套餐的模型切换异常** 上。
*   **最活跃 Issue**: [Bug] 百炼套餐模型切换后出现 HTTP 400 InvalidParameter 错误 [#29](https://github.com/gaoyangz77/rivonclaw/issues/29)
    *   **分析**: 该 Issue 在发布当天即获得评论互动。用户在使用 RivonClaw（推测为 EasyClaw 核心组件）时，尝试从默认的 Qwen3.5 模型切换至 GLM 或 Kimi 模型，结果触发 API 参数校验失败。这反映了用户对**“多模型聚合/AI 智能体切换”**的强需求，也暴露了当前版本在处理非默认模型输入长度校验上的不足。

### 5. Bug 与稳定性
今日报告了严重的兼容性错误，目前**尚无 Fix PR**。

*   **🔴 严重: 模型切换导致 API 400 错误**
    *   **Issue**: [#29](https://github.com/gaoyangz77/rivonclaw/issues/29) & [#28](https://github.com/gaoyangz77/rivonclaw/issues/28)
    *   **症状**: 从 Qwen3.5 切换至 GLM/Kimi 后，系统报错 `HTTP 400: InternalError.Algo.InvalidParameter: Range of input length should be [1, 202752]`。
    *   **分析**: 错误信息暗示在切换模型时，请求体中的 `input length`（输入长度）计算或传参可能存在越界或格式错误，或者未能正确适配目标模型的 API 限制。由于两个 Issue 描述高度相似，极可能是同一处代码逻辑缺陷。
    *   **状态**: **待修复**。

### 6. 功能请求与路线图信号
*   **信号 - 多模型适配优化**: 虽然用户报告的是 Bug，但同时也释放了明确的信号——用户强烈需要**在不同 LLM 提供商（Qwen, GLM, Kimi）之间无缝切换**的能力。修复此 Bug 将直接提升项目作为“多模型 AI 客户端”的核心竞争力，建议将其纳入下一版本（V1.7.8?）的高优先级路线图。

### 7. 用户反馈摘要
*   **痛点**: 用户在 Windows 11 环境（V1.7.7）下无法正常使用非默认模型，导致工作流中断。
*   **场景**: 用户倾向于在同一客户端内对比不同模型的效果，或依赖特定模型（如 Kimi 的长文本能力）。
*   **情绪**: 由于是阻塞性问题（无法调用），用户可能较为焦急，期待快速响应。

### 8. 待处理积压
*   **🔴 高优先级积压**: 建议维护者立即关注 Issue [#28](https://github.com/gaoyangz77/rivonclaw/issues/28) 和 [#29](https://github.com/gaoyangz77/rivonclaw/issues/29)。鉴于这两个问题影响了核心调用功能，且涉及多个主流模型，若不及时修复可能导致用户流失至其他竞品客户端。

---
*数据来源: GitHub EasyClaw Repository*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*