# OpenClaw 生态日报 2026-03-25

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-25 02:30 UTC

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

# OpenClaw 项目动态日报 (2026-03-25)

## 1. 今日速览
OpenClaw 项目今日呈现**高活跃度、高迭代**状态，社区对 3 月下旬发布的新版本（v2026.3.22+）反馈极其热烈。过去 24 小时内产生了 **500 条 Issue 更新**和 **500 条 PR 更新**，显示出项目在快速演进的同时也面临着显著的回归测试压力。目前项目重心集中在修复新版本引入的**插件兼容性**（微信/WhatsApp）和**Control UI 构建缺失**等紧急问题上。

## 2. 版本发布
**无新版本发布**。
尽管没有发布新的 Release tag，但从 Issue 内容推断，项目正处于 **v2026.3.22 至 v2026.3.23** 的快速迭代期。大量 Regression（回归）报告表明近期版本变更较大，建议用户在升级前检查下方提到的已知问题。

## 3. 项目进展
尽管 PR 积压较多（待合并 382 条），但维护者今日合并了若干关键修复，主要围绕**稳定性修复**和**新功能基础建设**：

*   **Control UI 与构建修复**: 合并了修复 NPM 包中 `dist/control-ui/` 缺失的 PR，解决了升级后仪表盘 503 错误的问题 ([#52808](https://github.com/openclaw/openclaw/issues/52808))。
*   **连接性增强**: 修复了 `openclaw logs --follow` 中的网关连接错误 ([#45173](https://github.com/openclaw/openclaw/issues/45173))。
*   **功能扩展**: 合并了内置 **AIPing Provider** 支持的 PR，降低了第三方模型接入的配置门槛 ([PR #35558](https://github.com/openclaw/openclaw/pull/35558))。
*   **工具增强**: 新增了运行时工具可用性视图 `/tools` ([PR #54088](https://github.com/openclaw/openclaw/pull/54088))，提升了 Agent 调试能力。

## 4. 社区热点
今日讨论最集中的领域是**新版本的兼容性危机**和**平台覆盖需求**：

1.  **[OPEN] Linux/Windows 原生应用支持** ([Issue #75](https://github.com/openclaw/openclaw/issues/75))
    *   **热度**: 👍 65 | 评论 48
    *   **分析**: 这是社区长期的高优需求。目前仅有 macOS/iOS/Android 支持，Linux 和 Windows 用户迫切需要原生的 Clawdbot 应用体验，而非依赖 Docker 或复杂的 Node 环境。
2.  **[OPEN] 微信插件兼容性危机** ([Issue #52885](https://github.com/openclaw/openclaw/issues/52885))
    *   **热度**: 评论 37
    *   **分析**: 腾讯官方微信插件 `@tencent-weixin/openclaw-weixin` 在 v2026.3.22+ 版本中加载失败。涉及 ESM 模块引用路径问题，严重影响中文区核心用户的工作流。
3.  **[CLOSED] 钓鱼安全警告** ([Issue #49836](https://github.com/openclaw/openclaw/issues/49836))
    *   **热度**: 评论 33 | 👍 18
    *   **分析**: 社区迅速发现并处置了一起利用 OpenClaw 名义进行钱包连接钓鱼的事件。已被版主关闭，反映了社区较强的安全维护意识。
4.  **[OPEN] 长期记忆与知识管理** ([Issue #50096](https://github.com/openclaw/openclaw/issues/50096))
    *   **热度**: 评论 10
    *   **分析**: 关于 Agent "长期记忆" 架构的深度讨论。用户指出目前的记忆系统（Driftnet）缺乏连续性，呼吁构建更强大的知识管理（KM）系统，这是通往 AGI 路线上的核心卡点。

## 5. Bug 与稳定性
今日 Bug 报告激增，主要集中在**升级后的回归问题**，按严重程度排序：

*   **🔴 Critical (阻塞使用)**:
    *   **Control UI 资产丢失**: 升级后 `dist/control-ui/` 目录缺失，导致 Web 控制台完全不可用 ([Issue #52808](https://github.com/openclaw/openclaw/issues/52808))。**状态**: 已有 Fix PR 并合并。
    *   **WhatsApp 插件崩溃**: v2026.3.23 中 WhatsApp 插件导致 Agent 进程崩溃 ([Issue #53247](https://github.com/openclaw/openclaw/issues/53247))。
    *   **Gateway 启动失败**: 报错 `non-loopback Control UI requires gateway.controlUi.allowedOrigins` ([Issue #27473](https://github.com/openclaw/openclaw/issues/27473))。

*   **🟠 High (功能受损)**:
    *   **SSRF 误杀**: 新增的 SSRF 检查逻辑拦截了 Clash/mihomo 的 fake-ip 段 (198.18.0.0/15)，导致代理环境下网络请求失败 ([Issue #25215](https://github.com/openclaw/openclaw/issues/25215))。
    *   **OAuth Token 刷新失败**: OpenAI Codex 等模型的 Token 刷新存在竞态条件或持久化失败，导致频繁掉线 ([Issue #26322](https://github.com/openclaw/openclaw/issues/26322), [Issue #52037](https://github.com/openclaw/openclaw/issues/52037))。
    *   **Mistral 模型调用失败**: Tool call ID 格式不符合 Mistral 严格限制导致 422 错误 ([Issue #52548](https://github.com/openclaw/openclaw/issues/52548))。

## 6. 功能请求与路线图信号
*   **多平台客户端**: Issue #75 显示 Linux/Windows 客户端是当前最大的用户缺口。
*   **企业级审计**: PR #42810 提出了控制面审计日志系统，暗示项目正在加强面向企业的安全合规能力。
*   **QQ 频道支持**: PR #52986 正在添加 QQ Bot 的原生 Channel 支持，标志着即时通讯覆盖面的进一步扩大。
*   **细粒度模型控制**: 用户请求在 Agent 配置中支持 `thinkingDefault`，以便为不同复杂度的 Agent 分配不同的思考深度 ([Issue #21097](https://github.com/openclaw/openclaw/issues/21097))。

## 7. 用户反馈摘要
*   **痛点**: 用户对近期频繁的 **Breaking Changes（破坏性变更）** 感到疲惫，特别是插件系统（微信、WhatsApp）和构建产物的稳定性。
*   **场景**: 大量用户在 **WSL2 + Windows** 环境下遇到网络和 UI 访问问题，说明这是开发者常用的主要开发环境之一。
*   **评价**: 尽管 Bug 较多，但社区对 OpenClaw 的愿景（如长期记忆、多模态）持积极态度，参与者积极提交日志和复现步骤，社区健康度较高。

## 8. 待处理积压
*   **Stale Issues**: 存在大量标记为 `[stale]` 的 Bug 未处理，例如 CJK 文本搜索失效 ([Issue #20730](https://github.com/openclaw/openclaw/issues/20730)) 和 Fallback 链跨 Provider 切换失败 ([Issue #23829](https://github.com/openclaw/openclaw/issues/23829))。
*   **PR 积压**: 目前有 **382 个 PR 处于待合并状态**。虽然包含了大量功能增强，但巨大的积压量可能导致代码冲突和维护难度增加。建议维护者优先处理修复 Critical Bug 的 PR。

---

## 横向生态对比

基于 2026-03-25 的社区动态数据，以下是关于 AI 智能体与个人助手开源生态的横向对比分析报告。

---

# 📊 AI 智能体开源生态横向对比分析日报 (2026-03-25)

## 1. 生态全景
当前 AI 智能体开源生态正处于**从单一对话能力向多模态、长记忆、多端协同进化的“深水区”**。头部项目（如 OpenClaw）虽面临快速迭代带来的稳定性阵痛，但正引领插件化与跨平台连接的标准；新兴轻量级项目则致力于解决特定痛点，如多模型后端支持（ZeptoClaw/NanoClaw）或自托管架构重构。整体趋势显示出市场对**打破数据孤岛（长期记忆/知识图谱）**和**脱离 IM 限制的原生客户端**有着极其迫切的需求。

## 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PR 更新 (24h) | 版本发布 | 健康度/状态 | 核心关键词 |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **OpenClaw** | **~500** | **~500** | 无 (迭代中) | 🔴 **高压** | 兼容性危机、回归测试、插件生态 |
| **TinyClaw** | 0 | 5 (合并) | **v0.0.19** (3个) | 🟢 **稳健** | 架构重构、消息持久化、流式优化 |
| **ZeptoClaw** | 4 (新增) | 25 (更新) | **v0.8.2** | 🟡 **活跃** | 多模态、ACP协议、Rust生态 |
| **NanoClaw** | 5 (新增) | 50 (更新) | 无 | 🟠 **震荡** | 分支冲突、Web UI、混合模型 |
| **NullClaw** | 0 | 5 (Open) | 无 | 🔵 **内向** | 知识图谱、竞态修复、自托管 |

> *注：健康度评估基于 Issue 处理速度与 Bug 严重程度。OpenClaw 虽活跃但回归问题严重；TinyClaw 修复迅速且无声响。*

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照系**，OpenClaw 在各方面均表现出“旗舰”特征，但也承载了最大的复杂性负担：

*   **社区规模与粘性**：OpenClaw 的 Issue/PR 数量（~500）比第二名高出一个数量级，且拥有具体的“钓鱼安全警告”和“Linux 原生应用”高热讨论，表明其已具备**广泛的大众用户基础**，而不仅是开发者玩具。
*   **技术路线（广度 vs 深度）**：
    *   **OpenClaw** 走**全平台覆盖 + 插件化**路线，试图通过连接器（微信/WhatsApp）接管用户的数字生活，但目前受困于**ESM 模块兼容性**和**构建产物缺失**等工程化难题。
    *   **对比 ZeptoClaw**：ZeptoClaw 正在通过 **ACP (Agent Client Protocol)** 探索成为标准化的“后端大脑”，侧重于协议而非 UI。
    *   **对比 NullClaw**：NullClaw 专注于**底层架构**（知识图谱、竞态控制），更像是 OpenClaw 未来版本的“实验室”，专注于解决单一 Agent 的记忆与并发极限。
*   **优势与痛点**：OpenClaw 的优势在于**生态连接器丰富**（QQ/微信/WhatsApp），但痛点在于**版本发布质量管控（QA）**。今日多达 3 个 P0/P1 级别的回归 Bug（UI 丢失、插件崩溃）表明其 CI/CD 流程已跟不上代码变更速度。

## 4. 共同关注的技术方向

多项目动态揭示了当前技术演进的三个共振点：

1.  **原生客户端与 Web UI 的觉醒**：
    *   **涉及项目**：OpenClaw, NanoClaw, ZeptoClaw
    *   **诉求**：社区不再满足于仅通过 Telegram/Discord 侧边栏使用 Agent。OpenClaw 用户强烈要求 Linux/Windows 原生应用；NanoClaw 用户自行开发 Web 多会话界面；ZeptoClaw 增强 ACP 支持。**脱离 IM 软件束缚、拥有独立工作台**是明确趋势。

2.  **后端模型的去垄断化**：
    *   **涉及项目**：NanoClaw, NullClaw, ZeptoClaw, OpenClaw
    *   **诉求**：几乎所有项目都在加强对非 OpenAI/Claude 模型的支持。NanoClaw 集成 GitHub Copilot SDK，ZeptoClaw 修复 Qwen 配置，NullClaw 优化 vLLM 兼容。**“模型无关”** 已成为标配，企业用户出于成本和合规需求，强烈要求混合部署。

3.  **长期记忆的架构重构**：
    *   **涉及项目**：OpenClaw, NullClaw
    *   **诉求**：OpenClaw 社区热议 "Driftnet" 记忆系统的连续性问题，NullClaw 直接提交了基于 SQLite 的知识图谱后端。简单的向量检索已无法满足需求，**结构化的知识管理（KM）** 是通往 AGI 的必经之路。

## 5. 差异化定位分析

*   **OpenClaw (连接者)**：
    *   **定位**：普通用户的 AI OS 入口。
    *   **弱点**：更新过于激进，稳定性堪忧，适合极客尝鲜，企业生产环境慎用。
*   **TinyClaw (工匠)**：
    *   **定位**：轻量级、高可靠的消息处理中枢。
    *   **差异点**：今日动态显示其正在精修**消息持久化**和**流式响应**，甚至重构了 Telegram 底层驱动。相比 OpenClaw 的“大而全”，TinyClaw 更像是在做“小而美”的高可靠中间件。
*   **ZeptoClaw (协议派)**：
    *   **定位**：Rust 生态下的高性能 Agent 节点。
    *   **差异点**：重视**工具链安全**（指令注入防护）和**标准化协议**（ACP）。其 Rust 技术栈天然吸引了注重性能和安全的开发者。
*   **NullClaw (架构师)**：
    *   **定位**：下一代 Agent 架构的实验田。
    *   **差异点**：在多实例内存同步和并发调度上投入巨大，完全没有用户侧噪音，专注于解决 Agent 集群化后的技术债。

## 6. 社区热度与成熟度

*   **快速迭代/动荡期**:
    *   **OpenClaw**: 处于版本发布后的“灭火”阶段，社区极其活跃但充满抱怨（500+ Issues）。
    *   **NanoClaw**: 正经历架构调整的阵痛，大量技能分支合并冲突表明主分支正在经历大幅重构。

*   **质量巩固/稳步期**:
    *   **TinyClaw**: "0 Issues, 3 Releases" 的数据极其亮眼，显示出维护者对代码库极强的掌控力，处于修复技术债的黄金期。
    *   **ZeptoClaw**: 社区小而精，PR 主要是依赖更新和具体 Bug 修复，正从 MVP 向可用工具转变。

*   **内部孵化期**:
    *   **NullClaw**: 社区静默，核心开发主导，尚未大规模推广。

## 7. 值得关注的趋势信号

1.  **SSRF 防护与代理冲突将成为新热点**：
    *   OpenClaw 的 Issue #25215 指出，AI Agent 为了安全增加的 SSRF 检查逻辑，会误杀开发者常用的 Clash/mihomo 代理环境。随着 Agent 自主联网能力增强，**“Agent 网络权限管理”与“用户本地网络环境”的冲突**将愈发频繁，需要更智能的白名单机制。

2.  **“原生应用”需求即将爆发**：
    *   既然 OpenClaw 的 Issue #75 和 NanoClaw 的 #1273 都在呼唤独立 UI，这预示着 AI Agent 将从“寄生在 IM 中”转向“拥有独立进程和窗口”。**Electron/Tauri 等跨平台桌面端技术栈**可能会重新回到 AI 开发者的视野。

3.  **记忆系统的 SQLite 化**：
    *   NullClaw 的 PR #712 表明，对于个人助手而言，重型数据库并非必需，**SQLite + 递归 CTE** 实现的轻量级知识图谱可能是在端侧实现长期记忆的最优解。

4.  **供应链安全**：
    *   OpenClaw 的钓鱼警告和 ZeptoClaw 的工具执行加固表明，随着 Agent 权限增大（操作钱包、执行代码），**针对 Agent 的攻击面**正在扩大，安全审计将成为后续版本的硬指标。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

这里是 **NanoClaw** 项目 2026-03-25 的动态日报。

### 1. 今日速览
NanoClaw 今日处于**高活跃度开发状态**，社区贡献主要集中在扩展 AI 后端支持（如 GitHub Copilot、OpenCode）以及增强多渠道接入能力（Web、Matrix）。虽然代码提交频繁（50个 PR 更新），但自动化系统报告了大量的技能分支合并冲突，显示主分支正处于快速迭代期，架构变动较大，维护者需关注集成稳定性。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
今日共有 **15 个 PR 被合并/关闭**，主要推进了以下改进：
*   **IPC 与权限修复**：合并了 [PR #1397](https://github.com/qwibitai/nanoclaw/pull/1397)，修复了 Host 以 Root 权限运行时导致的 IPC 权限错误，解决了容器代理无法删除文件导致的无限循环问题。
*   **诊断提示词修复**：[PR #1372](https://github.com/qwibitai/nanoclaw/pull/1372) 修复了诊断信息（diagnostics）从未展示给 Agent 的 Bug，改为显式指令。
*   **安全管理文档**：[PR #1400](https://github.com/qwibitai/nanoclaw/pull/1400) 更新了文档，明确了通过 OneCLI 网关管理密钥的最佳实践。

### 4. 社区热点
*   **[Issue #1273](https://github.com/qwibitai/nanoclaw/issues/1273) - 多会话 Web Channel 实现**
    *   **热度**：👍 2，评论 3
    *   **分析**：用户 @rozek 因为不满足于仅通过 IM 客户端使用 NanoClaw，自行开发了一个基于 Web 的多会话界面。这反映了高级用户对于**更友好的 GUI 管理界面**和**脱离特定即时通讯软件束缚**的强烈需求。
*   **[Issue #1163](https://github.com/qwibitai/nanoclaw/issues/1163) - 支持多 AI 提供商**
    *   **热度**：👍 3，评论 1
    *   **分析**：用户请求支持 OpenCode 或 GitHub Copilot SDK，以打破对 Claude Code 的单一依赖。企业用户出于成本和合规考虑，对**混合/并行使用不同 AI 后端**的需求日益增长。

### 5. Bug 与稳定性
今日自动化系统报告了密集的**技能分支合并失败**，需维护者紧急处理：
*   **严重阻塞**：
    *   **CI/CD 基础设施故障**：自动化机器人报告在合并 `main` 分支到以下技能分支时发生冲突：
        *   `skill/apple-container`
        *   `skill/native-credential-proxy`
        *   `skill/ollama-tool`
        *   `skill/compact`
    *   **关联 Issue**：[#1413](https://github.com/qwibitai/nanoclaw/issues/1413), [#1412](https://github.com/qwibitai/nanoclaw/issues/1412), [#1411](https://github.com/qwibitai/nanoclaw/issues/1411) 等（共 7 个相关 Issue）。
    *   **影响**：这些技能可能已落后于主分支最新功能，且无法自动修复，需手动解决冲突。
*   **一般 Bug**：
    *   **[Issue #1391](https://github.com/qwibitai/nanoclaw/issues/1391) / [Issue #1390](https://github.com/qwibitai/nanoclaw/issues/1390)**：通过 IPC 或 `/add` 命令注册新群组时，未创建 `CLAUDE.md` 文件，导致新群组的 Agent 缺乏身份指令（“失忆”）。目前尚无修复 PR。

### 6. 功能请求与路线图信号
*   **多渠道扩展**：
    *   **[Issue #1413](https://github.com/qwibitai/nanoclaw/issues/1413)**：请求添加 Matrix 协议支持，以覆盖注重隐私和自托管的社区。
    *   **[PR #1407](https://github.com/qwibitai/nanoclaw/issues/1407)**：建议增加 Telegram 表情反应（Emoji Reactions）的 MCP 工具，增强交互反馈。
*   **AI 后端多样化**：
    *   **[PR #1351](https://github.com/qwibitai/nanoclaw/pull/1351)**：正在开发 GitHub Copilot SDK 集成，允许使用 GPT-4.1 等模型作为后端。
    *   **[PR #850](https://github.com/qwibitai/nanoclaw/pull/850)**：正在建立通道无关的附件处理接口，为未来支持更多富媒体渠道打基础。

### 7. 用户反馈摘要
*   **痛点**：目前 NanoClaw 强依赖 IM（Discord/Slack/WhatsApp）作为 UI，对于需要在桌面端进行复杂操作或多窗口管理的用户来说体验不佳（Issue #1273）。
*   **迁移难点**：企业在采用时由于合规原因无法仅使用 Claude，迫切需要能够切换或并行运行其他模型（Issue #1163）。
*   **部署问题**：以 Root 权限运行 Host 导致的权限问题曾一度阻塞生产环境使用（PR #1397 已修复）。

### 8. 待处理积压
*   **[PR #1126](https://github.com/qwibitai/nanoclaw/pull/1126)**：关于禁用 `/remote-control` 功能的 PR 已开启 9 天，处于 "Needs Review" 状态。该功能涉及安全控制，建议维护者尽快评估合入。
*   **[PR #799](https://github.com/qwibitai/nanoclaw/pull/799)**：关于修复时区感知上下文的 PR 已停滞近 18 天，该问题会导致 Agent 在恢复会话时搞错星期几，影响用户体验，需重新Review。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

这里是基于 NullClaw 项目 2026-03-25 GitHub 数据生成的动态日报。

# NullClaw 项目动态日报 (2026-03-25)

## 1. 今日速览
NullClaw 项目今日保持**高强度的代码提交活跃度**，重点集中在核心架构的稳定性增强与内存系统的深度重构。尽管今日无新版本发布，但出现了 5 个高质量且涵盖范围广泛（Cross-platform、Knowledge Graph、Concurrency）的待合并 PR，显示出项目正处于功能迭代的关键阶段。值得注意的是，社区今日无新增 Issue 或评论互动，表明当前进展主要由核心贡献者驱动，属于**内向型开发周期**。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日无已合并的 PR，但有 5 个重要的 PR 处于 **OPEN** 状态，直接反映了项目接下来的重点走向：

*   **架构稳定性修复**：PR [#689](https://github.com/nullclaw/nullclaw/pull/689) 针对 Scheduler/Worker 的竞态条件（Race Condition）和内存泄漏问题提交了重大修复，涉及 Mutex 生命周期管理。这将显著提升 Daemon 的稳定性。
*   **内存系统重构**：PR [#712](https://github.com/nullclaw/nullclaw/pull/712) 引入了基于 SQLite 递归 CTE 的知识图谱内存后端；PR [#711](https://github.com/nullclaw/nullclaw/pull/711) 提出了跨实例内存同步机制。这两项更新预示着 NullClaw 的 Agent 记忆能力将迎来质的飞跃。
*   **兼容性增强**：PR [#669](https://github.com/nullclaw/nullclaw/pull/669) 优化了自定义 vLLM/Qwen 端点的推理兼容性，降低了对 OpenAI API 的强依赖。
*   **文档完善**：PR [#713](https://github.com/nullclaw/nullclaw/pull/713) 对文档导航和运行时指南进行了系统性优化。

## 4. 社区热点
*   **无活跃讨论**：过去 24 小时内 Issues 和 PR 均无新增评论（评论数: 0）。
*   **分析**：尽管 PR 提交频繁，但社区互动处于静默期。这可能意味着目前的更新多为核心维护者发起的草稿或 WIP（Work In Progress）状态，尚未广泛征求社区意见，或者正处于等待 CI 检查/初步 Review 的阶段。

## 5. Bug 与稳定性
今日无新增用户提交的 Bug Issue，但代码提交中包含了重要的潜在修复：

*   **[严重] Scheduler 竞态与内存泄漏**：PR [#689](https://github.com/nullclaw/nullclaw/pull/689) 修复了 Daemon `schedulerThread` 中的严重并发问题。
    *   *详情*：修复了 `reloadJobs` 切片交换与 `tick` HTTP 处理程序之间的竞态条件，并解决了 Mutex 生命周期导致的潜在内存泄漏。
    *   *状态*：Fix PR 已提交，等待合并 (OPEN)。

## 6. 功能请求与路线图信号
虽然没有显式的 "Feature Request" Issue，但今日的 PR 提交揭示了明确的路线图信号：

*   **多实例/分布式 Agent 支持**：PR [#711](https://github.com/nullclaw/nullclaw/pull/711) (Cross Memory) 显示项目正在探索 Agent 实例间的状态同步，这是迈向多 Agent 协作或高可用部署的关键信号。
*   **结构化长期记忆**：PR [#712](https://github.com/nullclaw/nullclaw/pull/712) (Knowledge Graph Backend) 表明项目正在取代简单的 KV 存储，转向基于图谱的复杂关系记忆，这将提升 Agent 的上下文理解能力。

## 7. 用户反馈摘要
*   **数据缺失**：由于过去 24 小时内 Issues 和 PR 评论数为 0，暂无法从用户互动中提取具体的痛点或满意度反馈。
*   **隐性反馈**：从 PR [#669](https://github.com/nullclaw/nullclaw/pull/669) 可以推断，部分高级用户或开发者正在尝试使用私有化部署的 vLLM 或 Qwen 模型，并遇到了兼容性障碍（特别是 `enable_thinking` 参数的传递），该 PR 解决了这一集成痛点。

## 8. 待处理积压
目前项目有 5 个活跃 PR 等待处理，且均为今日更新，无长期滞留的 "僵尸" PR。建议维护者优先关注以下积压项的 Review 进度：

1.  **[#689](https://github.com/nullclaw/nullclaw/pull/689) (fix/cron)**：涉及核心调度器锁逻辑，需优先进行代码审查以确保系统稳定性。
2.  **[#712](https://github.com/nullclaw/nullclaw/pull/712) (feat/memory)**：引入了新的 Schema 和后端逻辑，测试覆盖率需重点关注。

---
*分析师注：当前项目处于“代码高产但社区静默”的状态，建议在合并核心 PR 后发布 Beta 版本以重新激活社区测试与反馈。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

以下是基于 2026-03-25 数据生成的 TinyClaw (TinyAGI) 项目动态日报。

---

# 📊 TinyClaw (TinyAGI) 项目日报 (2026-03-25)

## 1. 今日速览
TinyClaw 项目今日呈现**高强度的维护与迭代状态**。尽管社区 Issues 讨论区显得相对平静（0 条新话题），但核心开发团队进行了密集的内部交付，**单日合并了 5 个关键 PR 并连续发布了 3 个小版本（v0.0.17 - v0.0.19）**。更新重心主要集中在**系统稳定性修复**（解决竞争条件、消息持久化）和**架构优化**（Telegram 重构、流式响应改进）。这种“静默式爆发”表明项目正处于修复技术债与打磨核心功能的攻坚期。

## 2. 版本发布
今日连续推送了 3 个版本更新，建议所有用户尽快升级至 **v0.0.19** 以获得稳定性修复。

*   **v0.0.19** (最新版)
    *   **重点修复**：修复了计划任务消息无法持久化到 `agent_messages` 表的严重数据丢失问题；解决了 `invoke` 流程中 `signalDone` 的竞争条件，防止任务被过早终止。
    *   **链接**：[Release v0.0.19](https://github.com/TinyAGI/tinyagi/releases/tag/v0.0.19)

*   **v0.0.18**
    *   **重点修复**：消除了 Team 模式下响应流重复发送的问题，优化了输出体验。
    *   **链接**：[Release v0.0.18](https://github.com/TinyAGI/tinyagi/releases/tag/v0.0.18)

*   **v0.0.17**
    *   **重大更新**：
        *   **Skills Manager**：引入新技能 `skills-manager`，允许 Agent 动态搜索和安装技能，显著扩展了系统的可扩展性。
        *   **架构迁移**：Telegram 频道已从 `node-telegram-bot-api` 迁移至 **grammY**，这可能带来底层 API 调用方式的微调。
    *   **链接**：[Release v0.0.17](https://github.com/TinyAGI/tinyagi/releases/tag/v0.0.17)

## 3. 项目进展
今日共有 **5 个 PR 被合并**，项目整体质量与健壮性迈上了新台阶：

1.  **消息持久化与流式优化** ([PR #256](https://github.com/TinyAGI/tinyagi/pull/256) [Merged], [PR #259](https://github.com/TinyAGI/tinyagi/pull/259) [Merged])
    *   重构了消息入队逻辑，现在用户消息会立即持久化到 `agent_messages`，不再依赖处理结束。同时引入了流式响应进度回调，并增加了 Agent 签名。这标志着 TinyAGI 的消息系统从“处理完存储”转向了“实时流式存储”。

2.  **修复计划任务数据丢失** ([PR #259](https://github.com/TinyAGI/tinyagi/pull/259) [Merged])
    *   修补了 `fireSchedule()` 只写入队列不写入持久化表的漏洞，确保定时任务记录可查。

3.  **修复进程与信号竞争** ([PR #258](https://github.com/TinyAGI/tinyagi/pull/258) [Merged])
    *   解决了子进程在 `SIGTERM` 后触发 `close` 事件导致的虚假拒绝问题，大幅提升了命令行工具和子进程调用的稳定性。

4.  **修复渠道推送延迟** ([PR #257](https://github.com/TinyAGI/tinyagi/pull/257) [Merged])
    *   修复了主动消息（如 POST API 触发）在 Telegram 等渠道不推送的问题，增加了 SSE 事件触发机制。

5.  **仪表盘状态修正** ([PR #255](https://github.com/TinyAGI/tinyagi/pull/255) [Merged])
    *   修正了前端面板无法正确区分“排队中”和“处理中”状态的问题，提升了管理后台的可观测性。

## 4. 社区热点
*   **社区静默，代码活跃**：过去 24 小时内 **Issues 列表无新增或活跃讨论**。这通常意味着当前版本的主要痛点可能已被内部测试覆盖，或者正处于新功能发布后的“消化期”。
*   **潜在关注点**：尽管 Issue 为 0，但 [PR #256](https://github.com/TinyAGI/tinyagi/pull/256) 引入的“Agent signatures”（强制签名）和数据库字段变更可能会在后续用户升级中引发讨论。

## 5. Bug 与稳定性
今日修复的 Bug 数量较多且质量较高，主要集中在**异步逻辑**和**数据一致性**上：

*   **🔴 严重**：
    *   **计划任务数据丢失**：定时消息未写入数据库。
        *   *状态*：✅ 已修复 ([PR #259](https://github.com/TinyAGI/tinyagi/pull/259))。
    *   **进程竞争导致崩溃**：`runCommandStreaming` 可能因竞争条件导致任务误判为失败。
        *   *状态*：✅ 已修复 ([PR #258](https://github.com/TinyAGI/tinyagi/pull/258))。

*   **🟡 中等**：
    *   **Telegram 推送失效**：主动消息不触发 SSE 事件导致推送延迟。
        *   *状态*：✅ 已修复 ([PR #257](https://github.com/TinyAGI/tinyagi/pull/257))。
    *   **重复输出**：Team 模式下消息重复流式输出。
        *   *状态*：✅ 已修复 (v0.0.18)。

## 6. 功能请求与路线图信号
*   **动态技能扩展**：[PR #254](https://github.com/TinyAGI/tinyagi/pull/254) (v0.0.17) 引入的 `skills-manager` 是一个强烈的路线图信号。这表明 TinyAGI 正在向**插件化、模块化架构**演进，未来用户可能通过简单的注册表配置来扩展 Agent 能力，而无需修改核心代码。
*   **多渠道适配优化**：Telegram 到 grammY 的迁移 ([v0.0.17](https://github.com/TinyAGI/tinyagi/releases/tag/v0.0.17)) 暗示项目正在优化多渠道的底层驱动，未来可能会看到对 Discord 或 Slack 等平台更高效的适配。

## 7. 用户反馈摘要
由于今日无活跃 Issue，无直接用户吐槽。但从合并的 PR 推断，此前用户可能面临以下痛点（现已解决）：
*   “为什么我在 Dashboard 看不到准确的排队状态？” -> 已通过 [PR #255](https://github.com/TinyAGI/tinyagi/pull/255) 解决。
*   “Telegram 机器人有时候不回话，非要我发个消息它才动。” -> 典型的 SSE 事件缺失，已通过 [PR #257](https://github.com/TinyAGI/tinyagi/pull/257) 解决。

## 8. 待处理积压
*   **当前无显性积压**：基于今日 0 Issue 和 5 PR 的处理速度，项目目前的维护响应速度极快，无明显积压迹象。
*   **潜在风险提示**：[PR #256](https://github.com/TinyAGI/tinyagi/pull/256) 移除了 `hasAgentMessage` helper 并修改了消息持久化逻辑，这是一个**破坏性变更**的信号。对于自行二次开发或依赖旧版数据库逻辑的开发者，建议仔细检查此次更新，以防数据兼容性问题。

---
*分析师注：TinyAGI 正在快速迭代其核心消息管道。建议运维人员关注 v0.0.19 的数据库迁移工作，确保 `agent_messages` 表结构兼容。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-25)

## 1. 今日速览
ZeptoClaw 项目今日呈现**高活跃度与快速迭代**状态，开发重心明显向 **Telegram 频道功能增强**与**模型提供商兼容性**倾斜。过去24小时内不仅发布了 **v0.8.1 和 v0.8.2** 两个版本，还产生了 **25 个 PR 更新**，显示出维护者正在积极清理技术债务并整合社区贡献。社区方面，新开放的核心 Bug 报告集中在 Telegram 多媒体支持和并发处理上，而首个由外部贡献者提交的 **ACP (Agent Client Protocol)** 实现也有实质性推进。

## 2. 版本发布
今日连续发布了 **v0.8.1** 和 **v0.8.2**，主要聚焦于工具执行安全性和依赖更新。

- **[v0.8.2](https://github.com/qhkm/zeptoclaw/releases/tag/v0.8.2)**
  - **更新内容**: 主要是依赖库与 GitHub Actions 的维护性更新。Bump `Swatinem/rust-cache` 至 2.9.1，`docker/metadata-action` 至 6.0.0。
  - **影响**: 优化 CI/CD 构建速度与 Docker 元数据生成逻辑，对运行时逻辑无直接破坏性影响。

- **[v0.8.1](https://github.com/qhkm/zeptoclay/releases/tag/v0.8.1)**
  - **更新内容**:
    1. **Security**: 加固了嵌入式 `ZeptoAgent` 的工具执行机制，防止潜在的指令注入风险。
    2. **Tools**: 改进了 `edit_file` 的模糊匹配逻辑，增加了一致性测试固件和输出截断功能。
    3. **Community**: 改进了 Telegram 频道体验。
  - **破坏性变更/迁移**: `edit_file` 工具的逻辑变更可能影响依赖旧版模糊匹配的自动化脚本（Issue #403 显示旧版存在映射错误），建议测试现有的文件修改 Prompt 流程。

## 3. 项目进展
今日共有 **17 个 PR 被合并或关闭**，进展主要集中在**依赖维护**、**Telegram 功能修复**及**开发环境标准化**。

- **依赖维护浪潮**: 大量 `dependabot` PR 被批量合并，包括 [docker/login-action#380](https://github.com/qhkm/zeptoclaw/pull/380), [bcrypt#413](https://github.com/qhkm/zeptoclaw/pull/413), [rustyline#385](https://github.com/qhkm/zeptoclaw/pull/385) 等。这表明项目在进行功能开发前，成功完成了依赖库的“大扫除”，提升了安全性与构建稳定性。
- **Telegram 用户体验修复**: 合并了 [PR #409](https://github.com/qhkm/zeptoclaw/pull/409)，解决了长消息发送失败且无报错的问题。现在系统会根据 Markdown 边界（段落、代码块）自动拆分消息，显著改善了用户在 Telegram 上的交互体验。
- **开发环境标准化**: 重新开放并推进了 [PR #287](https://github.com/qhkm/zeptoclaw/pull/287) 的相关讨论，旨在引入容器化的 Dev Tools，确保开发者在提交 PR 前拥有统一的 Lint/Test 环境。

## 4. 社区热点
尽管 Issues 总量不多，但针对新功能的讨论较为集中。

- **[PR #356 feat(channels): ACP (Agent Client Protocol)](https://github.com/qhkm/zeptoclaw/pull/356)**
  - **状态**: Open
  - **分析**: 这是一项重大的功能贡献，引入了 ACP 的 stdio 和 HTTP 实现。这意味着 ZeptoClaw 将能作为子进程被其他 ACP 客户端（如 `acpx`）无缝调用。这是项目从单一助手工具向**可嵌入式 Agent 框架**演进的关键信号。
- **[Issue #397 Do we have a community?](https://github.com/qhkm/zeptoclaw/issues/397)**
  - **状态**: Closed
  - **分析**: 用户反馈配置 Qwen 模型遇到困难，寻求社区支持。这暴露了**文档缺失**（特别是针对非默认模型或私有模型接入的配置指南）的问题。Issue 虽关闭，但触发了对社区渠道和文档完善的重视。

## 5. Bug 与稳定性
今日新增了多个关键 Bug 报告，维护者响应极其迅速，部分已有对应 Fix PR。

1.  **[P1-Critical] [Issue #416] bug(providers): 模型发现回归问题**
    - **描述**: PR #407 引入了回归，导致带有前缀的模型 ID（如 `anthropic/claude...`）路由失败，且启动时产生不匹配警告。
    - **进度**: 🔴 **无已知修复 PR** (PR #417 似乎试图解决部分问题，但需确认关联性)。
2.  **[P1-Critical] [Issue #403] bug(tools): edit_file 模糊匹配错误**
    - **描述**: NFC 标准化回退映射可能导致错误的字节范围，空格标准化可能导致死循环。
    - **进度**: 🟢 **已在 v0.8.1 中修复**。
3.  **[Issue #419] bug: Telegram 图片消息被静默忽略**
    - **描述**: Handler 仅监听 `msg.text()`，导致发送图片时机器人无响应。
    - **进度**: 🟢 **已有修复 PR #420**。
4.  **[Issue #415] bug: Telegram 并发消息导致 Typing Indicator 竞态条件**
    - **描述**: 快速连发消息时，第二条消息的 Indicator 会覆盖第一条，导致第一条发送完毕时错误地取消了输入状态。
    - **进度**: 🟢 **已有修复 PR #418**。

## 6. 功能请求与路线图信号
- **多模态交互**: [PR #420](https://github.com/qhkm/zeptoclaw/pull/420) 的提出标志着 ZeptoClaw 正在补齐 Telegram 端的多模态能力（图片理解），这可能是全面支持多模态输入的序幕。
- **Agent 协议标准化**: [PR #356](https://github.com/qhkm/zeptoclaw/pull/356) 表明项目正积极拥抱 **ACP (Agent Client Protocol)**，未来版本极有可能将此作为官方支持的传输层协议，使其更容易集成到自动化工作流中。
- **DevOps 标准化**: [PR #422](https://github.com/qhkm/zeptoclaw/pull/422) 暗示项目正在加强工程化规范，未来贡献代码可能需要通过容器化脚本的检查。

## 7. 用户反馈摘要
- **配置门槛较高**: Issue #397 显示，对于非 OpenAI/Claude 系列的模型（如 Qwen），用户目前的配置体验并不友好，缺乏清晰的指引文档。
- **反馈机制缺失**: Issue #419 和之前的 #409 提到，当机器人处理失败（如图片无法识别、消息过长）时，往往选择“静默”，这让用户感到困惑。用户强烈期望机器人能提供明确的错误反馈或自动降级处理（如消息拆分）。

## 8. 待处理积压
- **[PR #287 Dev Container Tooling](https://github.com/qhkm/zeptoclaw/pull/287)**: 该 PR 已停留较长时间（创建于 03-09），今日虽被重新提及（见 PR #422），但仍未合并。这是一个提升协作效率的基础设施更新，建议优先 Review。
- **[PR #356 ACP Implementation](https://github.com/qhkm/zeptoclaw/pull/356)**: 作为一项大型功能重构，该 PR 自 03-13 开启至今，急需维护者进行架构层面的最终审查或测试，以避免功能分支滞后过多。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*