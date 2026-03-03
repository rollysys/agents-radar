# OpenClaw 生态日报 2026-03-03

> Issues: 500 | PRs: 500 | 覆盖项目: 10 个 | 生成时间: 2026-03-03 02:29 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目日报 (2026-03-03)

## 今日速览

OpenClaw 项目在 2026-03-03 保持高度活跃状态。过去 24 小时内共产生 1000 条更新（Issues + PRs），其中 Issues 新开/活跃 168 条、已关闭 332 条；PR 待合并 153 条、已合并/关闭 347 条。v2026.3.1 版本刚刚发布，带来了 Claude 4.6 的 adaptive thinking 默认值调整和容器健康检查增强。社区讨论热度较高，macOS 平台的 arm64-only 回归问题引发较多关注，DingTalk 集成需求强烈。

---

## 版本发布

### v2026.3.1 已发布

**变更内容：**

| 类别 | 描述 |
|------|------|
| **Agents/Thinking** | Anthropic Claude 4.6 模型（包括 Bedrock 引用）默认 thinking level 设为 `adaptive`，其他具备推理能力的模型保持 `low`（除非显式配置） |
| **Gateway/Container** | 新增内置 HTTP liveness/readiness 探针 |

**影响评估：** 此次发布为常规迭代，未标注破坏性变更。建议用户关注 Claude 4.6 模型的行为变化——adaptive 模式可能产生更多 token 消耗。

---

## 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 描述 | 状态 |
|----|------|------|------|
| [#31398](https://github.com/openclaw/openclaw/pull/31398) | @szcascsa | Webchat/TUI: 传播 ACP 会话模式的线程元数据 | ✅ CLOSED |
| [#32433](https://github.com/openclaw/openclaw/pull/32433) | @KimGLee | fix(fs-safe): 遵守 umask/默认 ACL 创建文件 (0o666) | 🟢 OPEN |
| [#32420](https://github.com/openclaw/openclaw/pull/32420) | @akgitrepos | Slack: 降级不支持原生流式处理的回退日志级别 | 🟢 OPEN |
| [#32434]( BoundDeliveryRouter 接入 ACP 投递路径用于线程绑定会话) | @mechramc | fix: wire BoundDeliveryRouter into ACP delivery path | 🟢 OPEN |
| [#30185](https://github.com/openclaw/openclaw/pull/30185) | @joelnishanth | feat: Adaptive Model Routing with token savings meter | 🟢 OPEN |
| [#32428](https://github.com/openclaw/openclaw/pull/32428) | @Starxer | feat: support minimax-cn usage tracking | 🟢 OPEN |
| [#32427](https://github.com/openclaw/openclaw/pull/32427) | @scoootscooob | feat(subagents): 添加 completionDelivery 配置抑制渠道发送 | 🟢 OPEN |
| [#32419](https://github.com/openclaw/openclaw/pull/32419) | @scoootscooob | feat(agents): 添加 reasoningDefault 配置持久化推理模式 | 🟢 OPEN |
| [#10356](https://github.com/openclaw/openclaw/pull/10356) | @hmmhhmhm | TTS: 添加 Typecast 提供商（情感预设、音频调优） | 🟢 OPEN |
| [#32373](https://github.com/openclaw/openclaw/pull/32373) | @Techris93 | Add token hardening modules for gateway (T-ACCESS-003) | 🟢 OPEN |

**推进的功能领域：**
- **多渠道消息投递**：ACP 会话线程绑定、BoundDeliveryRouter 集成
- **模型路由**：Adaptive Model Routing + token 节省计量器
- **安全加固**：Token 脱敏模块、umask 兼容
- **TTS 提供商**：新增 Typecast 支持

---

## 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 👍 | 主题 |
|-------|------|-----|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 31 | 56 | **[Feature Request] Linux/Windows Clawdbot Apps** |
| [#2145](https://github.com/openclaw/openclaw/issues/2145) | 25 | 4 | **[Bug] 启动后持续显示 disconnected (1006)** |
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | 23 | 7 | **[Feature] 将 DingTalk 列为首次安装渠道选项** |
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | 15 | 2 | **[Bug Regression] macOS app v2026.2.26 仅 arm64，回归问题** |
| [#21872](https://github.com/openclaw/openclaw/issues/21872) | 13 | 1 | **[Bug] Telegram streaming 与 MiniMax 模型不兼容** |

**热点分析：**

1. **#75 - Linux/Windows 应用需求强烈**：这是长期积压的需求（自 2026-01-01 起），56 个点赞表明跨平台覆盖是核心痛点。macOS/iOS/Android 已支持，Linux/Windows 缺失。

2. **#26534 - DingTalk 集成**：虽然 DingTalk 渠道已实现（#10347），但首次设置向导未提供选择入口，用户需手动配置。需求明确：将其加入 onboarding 流程。

3. **#28877 - macOS 回归问题**：v2026.2.26 仅发送 arm64 版本，导致 Intel Mac 用户无法使用。这是一个明确的回归——v2026.2.25 是 universal binary。

---

## Bug 与稳定性

### 严重 Bug（按严重程度排序）

| Issue | 严重性 | 描述 | Fix 状态 |
|-------|--------|------|----------|
| [#32245](https://github.com/openclaw/openclaw/issues/32245) | 🔴 **Critical** | Vertex embedded runs 在 v2026.3.1 报错 "Cannot convert undefined or null to object"，影响 Telegram + cron 场景 | 🟡 PR 未知 |
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | 🔴 **Critical** | **Regression**: macOS v2026.2.26 仅 arm64，Intel Mac 完全无法使用 | 🟡 PR 未知 |
| [#32039](https://github.com/openclaw/openclaw/issues/32039) | 🟠 **High** | **Regression**: 通过 OpenRouter 调用 x-ai/grok-4.1-fast 报错 | 🟡 PR 未知 |
| [#32103](https://github.com/openclaw/openclaw/issues/32103) | 🟠 **High** | **Regression**: Slack 顶级消息被视为新线程，失去所有历史上下文 | 🟡 PR 未知 |
| [#28835](https://github.com/openclaw/openclaw/issues/28835) | 🟠 **High** | Telegram API 请求在 v2026.2.23→v2026.2.26 升级后失败（Node HTTPS timeout） | 🟡 PR 未知 |
| [#2145](https://github.com/openclaw/openclaw/issues/2145) | 🟠 **High** | 启动后持续 disconnected (1006)，无法使用 | 🟡 PR 未知 |

### 中等/其他问题

| Issue | 描述 |
|-------|------|
| [#32230](https://github.com/openclaw/openclaw/issues/32230) | Webchat 复制/粘贴长 UUID 时注入空格，导致 CLI 命令失败 |
| [#31253](https://github.com/openclaw/openclaw/issues/31253) | mem0 插件：session 级记忆在 /new 重置后仍然保留 |
| [#29103](https://github.com/openclaw/openclaw/issues/29103) | Compaction 破坏 tool_use/tool_result 对，导致 Anthropic API 拒绝请求 |
| [#29348](https://github.com/openclaw/openclaw/issues/29348) | google-antigravity-auth 插件自 v2026.2.22 被移除，无法运行 `openclaw models auth` |

---

## 功能请求与路线图信号

### 高需求功能（可能纳入下一版本）

| Issue | 请求内容 | 关联 PR | 评估 |
|-------|----------|---------|------|
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | DingTalk 作为首次安装渠道选项 | 已有 #10347 实现 | ⭐ 可能性が高い |
| [#27197](https://github.com/openclaw/openclaw/issues/27197) | 添加 Tavily 作为 web_search 提供商 | — | ⭐ 可能性が高い |
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows 客户端应用 | — | 🔸 长期需求 |
| [#16357](https://github.com/openclaw/openclaw/issues/16357) | 支持 prompt_cache_key 元数据用于提供商端缓存路由 | — | 🔸 优化建议 |

### 已实现/在开发的功能

| PR | 状态 | 功能 |
|----|------|------|
| [#30185](https://github.com/openclaw/openclaw/pull/30185) | OPEN | Adaptive Model Routing + token 节省计量器 |
| [#10356](https://github.com/openclaw/openclaw/pull/10356) | OPEN | Typecast TTS 提供商（情感预设） |
| [#32428](https://github.com/openclaw/openclaw/pull/32428) | OPEN | MiniMax-CN 使用量追踪 |
| [#32000](https://github.com/openclaw/openclaw/pull/32000) | OPEN | Matrix: 基于草稿的消息流式处理 |

---

## 用户反馈摘要

### 真实痛点与场景

| 反馈来源 | 场景描述 | 痛点 |
|----------|----------|------|
| **#28077** | 首次安装 clawbot 后升级到 openclaw | 升级安装脚本失败 |
| **#14593** | Docker 容器内安装 skill | brew 命令不存在导致 skill 安装失败 |
| **#9533** | 使用 Ollama 本地模型 | 切换到本地模型后记忆功能失效 |
| **#8619** | macOS 安装 gateway | launchctl bootstrap 失败，找不到用户域 |
| **#28175** | pnpm 全局安装 | "unsafe plugin manifest path" 错误 |
| **#17613** | 连接本地 OpenAI 兼容 LLM | 尽管 curl 直接调用正常，embedded agent 超时连接 |

### 满意度观察

- **正面**：Claude 4.6 的 adaptive thinking 模式受到期待（v2026.3.1 新增）
- **负面**：频繁的回归问题（macOS universal binary、Slack 线程处理）影响信任度
- **改进空间**：文档/迁移指南、Docker 运行时可靠性

---

## 待处理积压

### 长期未解决的重要 Issues

| Issue | 存在时间 | 评论 | 优先级 |
|-------|----------|------|--------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | 31 | 🔴 高 |
| [#7143](https://github.com/openclaw/openclaw/issues/7143) | 2026-02-02 | 10 | 🟡 中 |
| [#10806](https://github.com/openclaw/openclaw/issues/10806) | 2026-02-07 | 7 | 🟡 中 |
| [#8619](https://github.com/openclaw/openclaw/issues/8619) | 2026-02-04 | 8 | 🟡 中 |

### 建议关注

1. **#75** Linux/Windows 应用需求持续活跃 2 个月，建议明确路线图
2. **#7143** macOS Canvas 卡在 "Waiting for A2UI message" 状态近一个月未修复
3. **v2026.3.1 刚发布即出现 #32245 回归**，需紧急响应

---

*报告生成时间：2026-03-03 | 数据来源：GitHub OpenClaw 项目*

---

## 横向生态对比

# 2026-03-03 个人 AI 助手开源生态横向对比分析报告

## 一、生态全景

2026年3月初，个人AI助手与自主智能体开源生态呈现**多极分化、快速迭代**的格局。以OpenClaw为头部标杆的项目已形成千级Issue/PR的社区规模，而 Zeroclaw 系列（Zeroclaw/EasyClaw/ZeptoClaw/NanoClaw 等）和独立项目（LobsterAI/IronClaw/TinyClaw/PicoClaw/NanoBot）则在不同维度展开差异化竞争。**多渠道消息投递、模型路由灵活性、记忆系统增强、WebSocket/MCP 协议集成**成为共同技术焦点。整体生态正处于从功能堆砌向工程可靠性过渡的关键阶段，部分项目已出现明显的质量债务积压，需在迭代速度与稳定性之间寻求平衡。

---

## 二、各项目活跃度对比

| 项目 | Issues (新开/活跃) | Issues (已关闭) | PR (待合并) | PR (已合并/关闭) | Release 情况 | 活跃度评级 |
|------|-------------------|-----------------|------------|------------------|--------------|-----------|
| **OpenClaw** | 168 | 332 | 153 | 347 | v2026.3.1 | ⭐⭐⭐⭐⭐ 极高 |
| **Zeroclaw** | 40 | — | 45 | 5 | v0.2.0 | ⭐⭐⭐⭐ 高 |
| **LobsterAI** | 17 | 15 | 1 | 16 | v0.1.24 | ⭐⭐⭐⭐ 高 |
| **NanoBot** | 22 | 2 | 53 | 18 | 无 | ⭐⭐⭐⭐ 高 |
| **PicoClaw** | 13 | 4 | 40 | 31 | 无 | ⭐⭐⭐⭐ 高 |
| **NanoClaw** | 12 | 3 | 18 | 15 | 无 | ⭐⭐⭐⭐ 高 |
| **IronClaw** | 18 | 1 | 29 | 11 | v0.13.0 + v0.13.1 | ⭐⭐⭐⭐ 高 |
| **TinyClaw** | 1 | 3 | 2 | 5 | 无 | ⭐⭐ 中 |
| **EasyClaw** | 2 | 2 | 0 | 0 | v1.5.14 | ⭐⭐ 低 |
| **ZeptoClaw** | 0 | 2 | 2 | 1 | 无 | ⭐⭐ 中 |

> **说明**：活跃度评级综合考量 Issue/PR 总量、合并效率、版本发布节奏。OpenClaw 以绝对规模领先，Zeroclaw 系列整体呈现高活跃状态，LobsterAI/IronClaw/NanoBot/PicoClaw 构成第二梯队，EasyClaw/ZeptoClaw/TinyClaw 处于低速维护状态。

---

## 三、OpenClaw 在生态中的定位

### 3.1 规模优势

OpenClaw 过去24小时产生 **1000 条更新**（Issues + PRs），是生态内规模最大的项目，约为第二梯队（Zeroclaw/NanoBot/PicoClaw）的 **15-20 倍**。这一差距不仅体现在数量上，更反映在社区参与广度——OpenClaw 拥有更完整的 issue 分类体系（Feature/Bug/Regression）和更细粒度的严重程度标注。

### 3.2 技术路线差异

| 维度 | OpenClaw | 生态同类项目 |
|------|---------|-------------|
| **模型层** | Anthropic Claude 4.6 为核心，Adaptive Thinking 为默认，Multi-Provider 路由 | 多依赖 OpenAI 兼容 API，部分支持 Claude Code（如 NanoClaw） |
| **协议层** | ACP (Agent Control Protocol) 深度集成，会话线程绑定 | 多数项目尚未实现 ACP，NanoClaw 正在探索 |
| **通道层** | DingTalk/Slack/Telegram 多通道成熟，WebSocket 刚合并 | PicoClaw/Zeroclaw 各自推进通道，但整合度较低 |
| **记忆层** | mem0 插件 + session 级记忆 + 压缩模块 | TinyClaw（NanoBot）各有 QMD/BM25 方案，但成熟度不一 |
| **部署层** | Gateway + 容器健康探针 + 多平台客户端 | 多数仍以 CLI 为主，客户端覆盖不足 |

### 3.3 社区规模对比

- **OpenClaw**：56 赞的长期需求（#75 Linux/Windows 应用）表明跨平台覆盖是核心痛点
- **Zeroclaw**：代码质量话题（#2546）获最高关注，体现社区对可维护性的期待
- **IronClaw**：HERMES Agent 架构讨论（#407）反映技术前沿探索兴趣

OpenClaw 的优势在于 **先发规模 + 完整生态**，但这也带来维护复杂度——积压的回归 Bug（如 macOS arm64 回归、Telegram streaming 回归）数量显著高于中小型项目。

---

## 四、共同关注的技术方向

### 4.1 多渠道消息投递与会话管理

| 项目 | 具体诉求 |
|------|---------|
| **OpenClaw** | ACP 会话线程绑定、BoundDeliveryRouter 集成 |
| **Zeroclaw** | BlueBubbles iMessage 全家桶（媒体发送/群组管理/reply/edit/unsend） |
| **PicoClaw** | 飞书渠道 Markdown 卡片、@提及、消息编辑、表情反应 |
| **NanoBot** | WhatsApp fromMe 支持、QQ 消息权限修复 |
| **IronClaw** | Slack Socket Mode 支持、消息去重（#259） |

**分析**：各项目均在强化多渠道消息的**完整性**（支持媒体、编辑、threading）和**可靠性**（权限修复、去重），这是个人 AI 助手从“玩具”走向“生产力工具”的必经之路。

### 4.2 模型路由与 Multi-Provider 支持

| 项目 | 进展 |
|------|------|
| **OpenClaw** | Adaptive Model Routing + token 节省计量器（#30185） |
| **PicoClaw** | LiteLLM 提供商别名（已合并）、Kimi/Moonshot/Opencode 支持（在途） |
| **NanoClaw** | OAuth 令牌自动刷新（#656）、运行时抽象探索（#80 OpenCode 支持） |
| **TinyClaw** | 多 provider 支持需求（#124） |
| **IronClaw** | Venice AI 一级后端（长期在途 #95）、Gemini CLI OAuth 集成 |
| **LobsterAI** | 非阿里模型支持问题（#187 未解决） |

**分析**：**降低供应商锁定风险**是普遍诉求。OpenClaw 的 Adaptive Routing 处于技术领先位置，其他项目或依赖 LiteLLM、或探索原生 SDK 替代方案。TinyClaw 用户反馈“Claude Code API 配额快速耗尽”是这一焦虑的直接体现。

### 4.3 记忆/历史管理系统

| 项目 | 进展 |
|------|------|
| **OpenClaw** | mem0 插件、session 级记忆压缩、token 脱敏模块 |
| **NanoBot** | HISTORY.md 大小限制（#1454）、per-session 工作目录（#1345） |
| **TinyClaw** | QMD 长期记忆检索（BM25 + VSearch，已合并 #34） |
| **Zeroclaw** | 记忆检索多查询关键词扩展（#2592 在途） |
| **LobsterAI** | 上下文压缩需求（#227） |

**分析**：记忆系统正从“简单存储”向“智能检索”演进。BM25/VSearch 向量检索、会话级隔离、token 优化是共同方向。NanoBot 的 historyMaxChars 方案与 OpenClaw 的压缩模块思路相近，但后者在安全脱敏方面更成熟。

### 4.4 WebSocket / MCP / 新协议集成

| 项目 | 协议方向 |
|------|---------|
| **PicoClaw** | WebSocket 通道（14 个测试用例覆盖，已合并 #1005） |
| **PicoClaw** | MCP 工具支持（已合并 #282） |
| **IronClaw** | Brave Web Search WASM 工具（已合并 #474） |
| **Zeroclaw** | SearXNG 搜索 provider（在途 #214） |

**分析**：WebSocket 和 MCP 是**实时性**与**可扩展性**的关键基础设施。PicoClaw 的 TDD 开发方式（14 个测试用例覆盖）是值得关注的工程实践。

---

## 五、差异化定位分析

### 5.1 功能侧重

| 项目 | 核心功能定位 | 典型用户场景 |
|------|-------------|-------------|
| **OpenClaw** | 全功能旗舰级 AI 助手 | 企业级多渠道部署、复杂工作流 |
| **Zeroclaw** | 安全加固 + 多通道 | 高安全要求企业、隐私敏感用户 |
| **LobsterAI** | 网易生态集成 | 已有网易小蜜蜂/云信用户 |
| **IronClaw** | WASM 运行时 + 插件生态 | 开发者友好、可扩展性强 |
| **PicoClaw** | MCP + 多代理架构 | 技术探索者、团队协作场景 |
| **NanoClaw** | 运行时抽象 + 容器化 | 跨模型切换需求、Docker 用户 |
| **TinyClaw** | 轻量 CLI + 长期记忆 | 个人开发者、资源受限环境 |
| **EasyClaw** | 开箱即用客户端 | 非技术用户、桌面端需求 |

### 5.2 技术架构关键差异

- **OpenClaw / IronClaw**：采用 Gateway 架构，强调服务化部署
- **NanoClaw / TinyClaw**：聚焦容器化与安全沙箱
- **PicoClaw**：Go 语言实现，侧重性能和协议标准化
- **LobsterAI**：网易系深度集成，IM 通道为特色

### 5.3 目标用户分层

| 层级 | 项目 | 用户画像 |
|------|------|---------|
| **企业/团队** | OpenClaw, Zeroclaw | 需要多用户、多渠道、权限控制 |
| **开发者** | PicoClaw, IronClaw, NanoClaw | 注重扩展性、MCP、定制化 |
| **个人用户** | TinyClaw, EasyClaw, LobsterAI | 注重易用性、IM 集成、桌面端 |

---

## 六、社区热度与成熟度分层

### 6.1 快速迭代阶段（高活跃 + 高变更）

| 项目 | 特征 |
|------|------|
| **OpenClaw** | 周级版本发布、功能快速堆叠、回归风险累积 |
| **PicoClaw** | 路线图驱动（3 月第一阶段）、MCP + 通道并行开发 |
| **NanoBot** | 功能 PR 密集（71 条 PR 更新）、Web 聊天等新方向探索 |
| **IronClaw** | 连续版本发布（v0.13.0/0.13.1）、WASM 工具生态扩张 |

**风险**：快速迭代带来**质量债务**，OpenClaw 积压 6+ 回归 Bug，PicoClaw 4 个 High 级别 Bug 待修复。

### 6.2 质量巩固阶段（中等活跃 + 重稳定性）

| 项目 | 特征 |
|------|------|
| **Zeroclaw** | 积压 45 个待审 PR、代码质量话题（#2546）受关注 |
| **LobsterAI** | 多项 Windows 兼容性问题未解、安装问题长期拖延 |
| **NanoClaw** | 安全漏洞（#635 WhatsApp 权限）首次报告、OOM 风险（#595） |

**挑战**：从“能用到好用”的跨越，需要在稳定性、安全性、文档上投入更多资源。

### 6.3 低速维护阶段

| 项目 | 状态 |
|------|------|
| **EasyClaw** | Issue #6 配置丢失 bug 需 hotfix、飞书集成问题 |
| **ZeptoClaw** | 仅 2-3 条事务更新，依赖单一开发者（@qhkm） |
| **TinyClaw** | 安全加固 PR（#149/#150）待合并，新功能扩展缓慢 |

---

## 七、值得关注的趋势信号

### 7.1 供应商锁定焦虑 → 运行时抽象需求爆发

- **NanoClaw #80**：34 赞、16 评论，核心诉求“支持 OpenCode/Codex/Gemini 等运行时”
- **TinyClaw #124**：用户明确提到“Claude Code API 配额快速耗尽”
- **OpenClaw**：虽以 Claude 为核心，但 Adaptive Routing 已在做多模型平滑切换

> **对开发者的建议**：无论当前主攻哪个模型，都应在架构层面预留多 provider 抽象层。LiteLLM 是当前主流方案，但社区已出现“用原生 SDK 替代 LiteLLM”（NanoBot #161）的讨论——前者降低集成成本，后者追求包体积与控制力。

### 7.2 从 CLI 到 GUI 的自然演进

- **PicoClaw** WebSocket 通道（#1005）→ Web UI 打下基础
- **NanoClaw** Web UI 需求（#661）已有第三方实现（WhosClaw）
- **IronClaw** Jobs 标签页 + 数据库存储（#436）→ Web 管理界面
- **OpenClaw** 长期缺失 Linux/Windows 桌面客户端（#75）

> **趋势**：CLI 工具向 Web/GUI 演进是确定性方向，但各项目进展差异大。OpenClaw 桌面端需求积压 2 个月未解，可能成为竞争对手的突破口。

### 7.3 安全与权限问题首次系统性暴露

- **Zeroclaw #2593**：配置目录写入保护（安全修复）
- **NanoClaw #635**：WhatsApp auth 文件权限 644→600（安全漏洞）
- **NanoClaw #595**：OOM 崩溃 + 静默重启（生产环境可见性）
- **PicoClaw #973**：长时间运行后通道 PANIC 退出（稳定性）

> **行业信号**：当项目从“个人玩具”进入“生产部署”，安全（权限隔离）、稳定性（OOM/崩溃）、可见性（日志/监控）问题会集中爆发。OpenClaw 的 token 脱敏模块（#32373）是前瞻性布局。

### 7.4 记忆系统从“存储”向“智能检索”升级

- **TinyClaw**：BM25 + VSearch 双轨检索（#34）
- **NanoBot**：historyMaxChars 自动裁剪（#1454）
- **Zeroclaw**：多查询关键词扩展（#2592）

> **技术趋势**：记忆系统的下一步是**语义理解**与**成本控制**的平衡。OpenClaw 的 token 计量器（#30185）与记忆压缩思路一致，但各项目均未推出成熟的“记忆摘要/压缩”商业级方案。

### 7.5 MCP 协议正在成为新标准

- **PicoClaw** 率先合并 MCP 工具支持（#282），14 个测试用例覆盖
- **IronClaw** WASM 工具生态扩张
- **Zeroclaw** 搜索 provider 扩展（SearXNG 在途）

> **判断**：MCP（Model Context Protocol）已完成从“概念”到“落地”的关键一步。PicoClaw 的 TDD 开发方式值得参考——协议类功能应以测试驱动，确保互操作性的同时降低回归风险。

---

## 📌 总结

2026年3月初的个人 AI 助手开源生态呈现 **“一超多强、梯度明显”** 的格局：

1. **OpenClaw** 凭借规模优势占据生态核心，但需警惕质量债务累积
2. **Zeroclaw 系列 + PicoClaw + IronClaw** 构成创新试验田，在通道、协议、MCP 等方向快速推进
3. **LobsterAI / EasyClaw** 聚焦垂直场景（网易生态/桌面端），差异化生存空间明确
4. **TinyClaw / ZeptoClaw** 依赖核心维护者，风险与机遇并存

**对 AI 智能体开发者的核心建议**：

- **架构层面**：优先考虑 Multi-Provider 抽象 + MCP 协议集成，降低供应商锁定风险
- **工程层面**：协议类功能参考 PicoClaw 的 TDD 实践，安全/稳定性问题借鉴 NanoClaw 的容器化经验
- **产品层面**：从 CLI 到 Web GUI 的演进是确定性方向，可关注 OpenClaw 桌面端缺口带来的市场机会
- **社区运营**：活跃 Issue 响应速度与功能迭代同等重要——IronClaw 的 Hermes Agent 讨论（#407）和 NanoClaw 的 OpenCode 需求（#80）表明，技术前沿话题是社区活跃度的关键驱动力

---

*报告生成时间：2026-03-03 | 数据来源：GitHub 各项目 Issue/PR 动态*

---

## 同赛道项目详细报告

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报
**2026-03-03**

---

## 1. 今日速览

2026年3月3日，Zeroclaw 项目保持高度活跃状态。过去24小时内共产生40条 Issue 更新和50条 PR 更新，其中仅5个 PR 已被合并/关闭，积压待审的 PR 达45个。项目代码重构与功能开发并行推进：发布分支已合并 v0.2.0 版本，多个 BlueBubbles iMessage 通道功能正在密集开发中，同时修复了1个关键安全漏洞（配置目录写入保护）。整体健康度良好，但需关注积压 PR 的审查效率。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 合并/关闭的 Pull Requests

| PR | 描述 | 状态 |
|---|---|---|
| [#2533](https://github.com/zeroclaw-labs/zeroclaw/pull/2533) | release: v0.2.0 | ✅ 已关闭（版本发布） |
| [#2349](https://github.com/zeroclaw-labs/zeroclaw/pull/2349) | feat(tool): add whitespace-flexible matching fallback to file_edit | ✅ 已关闭（合并） |

### 重点在审 PR（推进中的功能）

1. **BlueBubbles iMessage 功能全家桶**（多合一综合性 PR）:
   - [#2582](https://github.com/zeroclaw-labs/zeroclaw/pull/2582) - send_attachment tool（iMessage 媒体发送）
   - [#2584](https://github.com/zeroclaw-labs/zeroclaw/pull/2584) - text_chunking（文本分块，解决长消息限制）
   - [#2585](https://github.com/zeroclaw-labs/zeroclaw/pull/2585) - group mention gating（群组 @mention 门控）
   - [#2583](https://github.com/zeroclaw-labs/zeroclaw/pull/2583) - reply, edit, unsend 消息操作
   - [#2532](https://github.com/zeroclaw-labs/zeroclaw/pull/2532) - group management tool（群组管理）
   - [#2495](https://github.com/zeroclaw-labs/zeroclaw/pull/2495) - dm_policy, group_policy, send_read_receipts
   - [#2461](https://github.com/zeroclaw-labs/zeroclaw/pull/2461) - audio transcription, tapback reactions

2. **安全修复**:
   - [#2593](https://github.com/zeroclaw-labs/zeroclaw/pull/2593) - **fix(security): block agent from writing to its own config directory**（高优先级安全修复，防止权限提升）

3. **功能增强**:
   - [#2481](https://github.com/zeroclaw-labs/zeroclaw/pull/2481) - web_search_tool 新增 Bing provider 支持
   - [#2592](https://github.com/zeroclaw-labs/zeroclaw/pull/2592) - memory: multi-query expansion with error-safe recall
   - [#2596](https://github.com/zeroclaw-labs/zeroclaw/pull/2596) - Fix old repo URL in OpenRouter logs and docs
   - [#2591](https://github.com/zeroclaw-labs/zeroclaw/pull/2591) - fix(windows): increase stack size to resolve runtime overflow

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 标签 | 摘要 |
|---|---|---|---|
| [#2546](https://github.com/zeroclaw-labs/zeroclaw/issues/2546) | 8 | [CLOSED], code simplification | Code simplification sweep: reduce duplication and flatten complexity（代码简化 sweep，清理6个最大源文件） |
| [#2595](https://github.com/zeroclaw-labs/zeroclaw/issues/2595) | 4 | [OPEN], bug, S1 | web agent Connection error（web agent 连接错误，daemon 模式无法正常工作） |
| [#2503](n/a) | 4 | [OPEN], enhancement | where is napcat channel（用户找不到 NAPCAT/OneBot 通道选项） |
| [#2486](https://github.com/zeroclaw-labs/zeroclaw/issues/2486) | 4 | [OPEN], bug, S0 | Issues with skill mutual invocation（跨文件夹技能调用触发安全警告） |
| [#2472](https://github.com/zeroclaw-labs/zeroclaw/issues/2472) | 3 | [OPEN], enhancement | Multi-query keyword expansion for memory retrieval（为长消息增加二次记忆检索） |

**热点分析**：
- **代码质量话题**（#2546）获得最高关注度，说明社区对代码可维护性有较高期待
- **web agent 连接问题**（#2595）是当前最紧迫的用户-facing 问题，影响 daemon 模式可用性
- **NAPCAT/OneBot 通道需求**（#2503）反映出用户对更多消息平台集成的渴望

---

## 5. Bug 与稳定性

### 按严重程度排序的 Bug 报告

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| **S0** | [#2486](https://github.com/zeroclaw-labs/zeroclaw/issues/2486) | 跨文件夹技能互相调用会触发安全警告 | OPEN |
| **S0** | [#2499](https://github.com/zeroclaw-labs/zeroclaw/issues/2499) | win11 双击 zeroclaw.exe 闪退 | OPEN |
| **S0** | [#2560](https://github.com/zeroclaw-labs/zeroclaw/issues/2560) | Telegram 语音消息接收回归（0.1.7 可用，最新 main 分支不可用） | CLOSED |
| **S0** | [#2588](https://github.com/zeroclaw-labs/zeroclaw/issues/2588) | 请求不包含 'tools' 参数 | OPEN |
| **S1** | [#2595](https://github.com/zeroclaw-labs/zeroclaw/issues/2595) | web agent Connection error | OPEN |
| **S1** | [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) | Invalid schema for function 'channel_ack_config' | OPEN |
| **S1** | [#2510](https://github.com/zeroclaw-labs/zeroclaw/issues/2510) | initialized=false 时控制台持续打印激活提示 | OPEN |
| **S1** | [#2589](https://github.com/zeroclaw-labs/zeroclaw/issues/2589) | custom openai endpoint model 无响应 | OPEN |
| **S1** | [#2551](https://github.com/zeroclaw-labs/zeroclaw/issues/2551) | OpenAI Codex websocket stream 失败不触发 SSE fallback | OPEN |
| **S2** | [#2529](https://github.com/zeroclaw-labs/zeroclaw/issues/2529) | Daemon 仅处理 SIGINT，忽略 SIGTERM（影响 K8s 部署） | OPEN |
| **S2** | [#2587](https://github.com/zeroclaw-labs/zeroclaw/issues/2587) | Custom memory category 导致 web dashboard 崩溃 | CLOSED |
| **S2** | [#2537](https://github.com/zeroclaw-labs/zeroclaw/issues/2537) | start_channels 不使用 model_routes | OPEN |

**关键观察**：
- 3个 S0 级别 Bug 中，**Windows 11 闪退问题**影响面最广，需优先处理
- **Telegram 语音消息回归**（#2560）已关闭，可能已在 main 分支修复
- **SIGTERM 处理缺失**（#2529）影响容器化部署场景，是生产环境隐患

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue | 功能描述 | 相关 PR/进展 |
|---|---|---|
| [#2503](n/a) | NAPCAT/OneBot 通道支持 | 无对应 PR |
| [#2472](https://github.com/zeroclaw-labs/zeroclaw/issues/2472) | 记忆检索多查询关键词扩展 | [#2592](https://github.com/zeroclaw-labs/zeroclaw/pull/2592) 已在开发中 |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | Webhook 自定义路径和 transforms | 无对应 PR |
| [#2517](https://github.com/zeroclaw-labs/zeroclaw/issues/2517) | Fallback providers 支持每个 provider 独立 API key | 无对应 PR |
| [#2456](https://github.com/zeroclaw-labs/zeroclaw/issues/2456) | ACP Server Mode（Agent Control Protocol） | 无对应 PR |
| [#2561](https://github.com/zeroclaw-labs/zeroclaw/issues/2561) | Telegram StreamMode::On 原生流式响应 | 无对应 PR |
| [#2555](https://github.com/zeroclaw-labs/zeroclaw/issues/2555) | Azure OpenAI 自定义 provider auth_header 支持 | 无对应 PR |
| [#2511](https://github.com/zeroclaw-labs/zeroclaw/issues/2511) | Telegram 消息 parse_mode 设置 | 无对应 PR |

**路线图信号分析**：
- **记忆检索增强**（#2472）已有对应 PR #2592，极可能纳入下一版本
- **BlueBubbles 功能**密集开发中，覆盖媒体发送、群组管理、流式响应等多个维度，预计 v0.3.0 将是"iMessage 通道大版本"
- **多 provider 支持**需求强烈（Azure OpenAI、OneBot、ACP），但暂无明确开发计划

---

## 7. 用户反馈摘要

### 用户痛点与使用场景

| 场景 | 痛点 | 证据 |
|---|---|---|
| **Windows 桌面用户** | 应用程序频繁闪退，无法正常使用 | [#2499](https://github.com/zeroclaw-labs/zeroclaw/issues/2499) - "win11，双击zeroclaw.exe 闪退" |
| **Web 部署用户** | daemon 模式连接失败，web agent 无法使用 | [#2595](https://github.com/zeroclaw-labs/zeroclaw/issues/2595) - "Connection error. Attempting to reconnect..." |
| **Telegram 群组用户** | 机器人响应每条消息，无视 @mention | [#2585](https://github.com/zeroclaw-labs/zeroclaw/pull/2585) PR 正在解决此问题 |
| **OneBot 用户** | 找不到 NAPCAT/NAPCAT 通道选项 | [#2503](n/a) - 用户截图显示通道列表缺失 |
| **生产环境运维** | K8s 部署无法优雅终止（SIGTERM 不响应） | [#2529](https://github.com/zeroclaw-labs/zeroclaw/issues/2529) |
| **OAuth 集成** | OpenAI Codex OAuth 配置文档不清晰 | [#2474](https://github.com/zeroclaw-labs/zeroclaw/issues/2474) |
| **记忆功能** | 长消息记忆检索不完整 | [#2472](https://github.com/zeroclaw-labs/zeroclaw/issues/2472) - "single recall() query provides insufficient coverage" |

### 用户满意度观察

- **正面反馈**：CLI agent 运行良好（#2595 中用户提及"cli agent works well"）
- **不满累积**：Windows 兼容性、生产环境信号处理、通道支持完整性是三大持续痛点

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 存在时间 | 优先级 | 描述 |
|---|---|---|---|
| [#2474](https://github.com/zeroclaw-labs/zeroclaw/issues/2474) | 2026-03-02 | S1 | OpenAI Codex OAuth 使用文档缺失细节 |
| [#2551](https://github.com/zeroclaw-labs/zeroclaw/issues/2551) | 2026-03-02 | S1 | OpenAI Codex websocket stream 失败不触发 SSE fallback |
| [#2511](https://github.com/zeroclaw-labs/zeroclaw/issues/2511) | 2026-03-02 | S3 | Telegram 消息格式化不生效（parse_mode 未设置） |
| [#2460](https://github.com/zeroclaw-labs/zeroclaw/issues/2460) | 2026-03-01 | S2 | Telegram 群组消息缺少 sender 字段到 LLM 请求 |
| [#2309](https://github.com/zeroclaw-labs/zeroclaw/issues/2309) | 2026-03-01 | - | Stop-reason state machine + max-tokens continuation（已关闭） |

**提醒维护者关注**：
- Issue #2474 和 #2551 涉及核心 provider 功能，建议优先响应
- Issue #2460 影响 Telegram 群组场景的 LLM 上下文完整性

---

*本日报由 AI 自动生成，数据来源：GitHub zeroclaw-labs/zeroclaw 仓库 | 统计截止时间：2026-03-03*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 | 2026-03-03

---

## 1. 今日速览

过去24小时内，EasyClaw 项目保持较低但稳定的社会化开发活动。**Issues 层面**：共4条更新（新开2条、关闭2条），暂无新增 PR，整体活跃度较低。**发布层面**：v1.5.14 版本于今日发布，主要包含安装包层面的问题修复（macOS Gatekeeper 签名问题）。**社区反馈**：用户持续关注配置迁移、飞书集成等核心使用场景，共产生15条评论互动。整体项目处于常规维护状态，无重大阻断性问题。

---

## 2. 版本发布

### 🎉 v1.5.14 发布

**发布概述**：本次更新聚焦于 macOS 用户的安装体验优化，修复了 Gatekeeper 安全机制导致的误报“应用已损坏”问题。

| 项目 | 说明 |
|------|------|
| 版本号 | v1.5.14 |
| 发布类型 | 补丁更新 |
| 平台 | macOS / Windows |

**更新内容**：
- **macOS 安装修复**：提供 Gatekeeper 绕过指南，用户需通过终端命令 `xattr -cr` 移除隔离属性
- **Windows 安装包**：保持常规覆盖升级机制

**破坏性变更**：无

**迁移注意事项**：
- ⚠️ **Windows 用户请注意**：根据 Issue #6 反馈，从 1.5.13 覆盖安装至 1.5.14 后，部分用户遭遇配置丢失、被重置的问题。建议在升级前**手动备份配置文件**。

**下载链接**：https://github.com/gaoyangz77/easyclaw/releases/tag/v1.5.14

---

## 3. 项目进展

过去24小时内，**无 PR 合并或关闭**。项目代码层面暂无新增功能推进。

**PR 积压情况**：待合并 PR 数为 0，整体开发节奏放缓。

---

## 4. 社区热点

### 🔥 Issue #5：连接飞书不成功

| 项目 | 内容 |
|------|------|
| 状态 | OPEN |
| 作者 | @leati |
| 评论数 | **11 条**（今日最高） |
| 点赞数 | 0 |
| 链接 | https://github.com/gaoyangz77/easyclaw/issues/5 |

**问题摘要**：用户在飞书平台发消息时持续被要求添加白名单，添加后问题依旧。

**热度分析**：该 Issue 获得今日最高评论量（11条），反映出飞书集成是用户的**高频核心场景**。评论互动密集，说明可能涉及配置、网络或 API 层面的复杂排查，需维护者重点关注。

---

## 5. Bug 与稳定性

### 🐛 今日报告的 Bug

| 严重程度 | Issue | 描述 | 状态 | 关联 PR |
|----------|-------|------|------|---------|
| **高** | #6 | 覆盖安装后配置失效，程序被重置 | OPEN | 无 |
| **中** | #5 | 飞书连接失败，反复要求添加白名单 | OPEN | 无 |

**关键问题**：

1. **#6 配置迁移 BUG**：根据用户反馈，从 1.5.13 覆盖安装至 1.5.14 后，之前的配置和记忆全部丢失。该问题影响用户**数据安全**，但目前仅报告1例，可能为个例或与特定 Windows 版本/安装路径有关。**暂无 fix PR**。

2. **#5 飞书集成异常**：白名单机制失效，可能与飞书 API 变更或网络环境有关，暂无明确复现步骤。

**稳定性评估**：v1.5.14 发布后即出现配置丢失反馈（Issue #6），建议尽快发布热修复补丁 v1.5.15。

---

## 6. 功能请求与路线图信号

### 📋 功能需求汇总

| Issue | 功能描述 | 请求者 | 状态 | 潜在优先级 |
|-------|----------|--------|------|------------|
| #3 | 对话切换模型、多对话并行、去除结构化回复 | @gxlqssjf | **CLOSED** | 高 |
| #4 | 任务计划功能、对话记录保存 | @leati | **CLOSED** | 中 |

**需求分析**：

- **Issue #3** 已关闭，暗示相关功能已在 v1.5.14 中实现或计划在后续版本实现
- **Issue #4** 已关闭，用户明确表达“给同事推荐”的意愿，说明产品已达到可用状态，新增功能为锦上添花

**路线图信号**：基于 Issue 关闭情况推测，下一版本可能聚焦于：
- 多模型对话支持
- 本地对话记录持久化

---

## 7. 用户反馈摘要

### 💬 核心痛点

| 场景 | 用户原声 | 痛点等级 |
|------|----------|----------|
| **飞书集成** | “在飞书发消息一直让我加白名单，加过白名单后也没用，发新的消息还是让加白名单” | 高 |
| **升级配置丢失** | “从1.5.13使用1.5.14的exe安装文件覆盖安装升级后，easyclaw被重置了……被归零重新开始” | 高 |
| **功能完整性** | “就是差个任务计划和对话记录，希望能补上” | 中 |

### 👍 积极反馈

- Issue #4 用户表示：“用了好多个版本的龙虾，这个是最和我心意的。” —— 产品定位和核心体验获得认可，具备社区传播潜力。

---

## 8. 待处理积压

### ⚠️ 需关注的长期待办

| Issue | 描述 | 创建时间 | 当前状态 | 处理建议 |
|-------|------|----------|----------|----------|
| #5 | 飞书连接白名单问题 | 2026-03-02 | OPEN（11条评论待回复） | 需维护者介入排查，疑似 API 或网络配置问题 |
| #6 | 覆盖安装配置丢失 | 2026-03-02 | OPEN（3条评论待回复） | **高优先级**，建议本周内发布 hotfix |

**提醒**：Issue #5 和 #6 均为 2026-03-02 新创建，目前处于 OPEN 状态且维护者尚未回应。建议尽快响应以维护社区信任。

---

*报告生成时间：2026-03-03 | 数据来源：GitHub EasyClaw Repository*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期：** 2026-03-03  
**项目仓库：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
**数据周期：** 过去 24 小时

---

## 1. 今日速览

过去 24 小时内，LobsterAI 项目保持较高活跃度：共处理 **32 条 Issues**（17 新开/活跃，15 已关闭）和 **17 条 PRs**（1 待合并，16 已合并/关闭）。今日发布 **v0.1.24** 版本，带来视觉模型图片支持、Linux 支持和小蜜蜂 IM 接入等重要功能。项目整体呈现稳健迭代态势，多个长期反馈的跨平台问题（如 Windows 编码、Linux 支持）在本期得到解决。

---

## 2. 版本发布

### v0.1.24 发布

**发布状态：** ✅ 已发布  
**发布公告链接：** [GitHub Releases v0.1.24](https://github.com/netease-youdao/LobsterAI/releases/tag/v0.1.24)

#### 新增功能

| 功能 | 贡献者 | 相关 PR |
|------|--------|---------|
| 视觉模型图片传递支持 | @btc69m979y-dotcom | [#203](https://github.com/netease-youdao/LobsterAI/pull/203) |
| Linux 系统支持（AppImage + deb 包） | @Mind-Hand | [#217](https://github.com/netease-youdao/LobsterAI/pull/217) |
| 网易小蜜蜂 IM 接入 | @renhongchao | [#158](https://github.com/netease-youdao/LobsterAI/pull/158) |

#### 破坏性变更与迁移注意事项

- **Windows 编码策略调整**：本期 PR [#207](https://github.com/netease-youdao/LobsterAI/pull/207) 修复了 Windows 中文系统 GBK 编码导致的命令行乱码问题，通过设置 UTF-8 环境变量强制统一输出编码。此变更可能影响依赖原有 GBK 输出格式的自定义脚本，建议在升级后测试现有工作流。
- **skill 构建流程优化**：Windows 平台的 skill 依赖安装流程得到修复（[#216](https://github.com/netease-youdao/LobsterAI/pull/216)，[#214](https://github.com/netease-youdao/LobsterAI/pull/214)），如遇构建问题建议清理缓存后重试。

---

## 3. 项目进展

### 本期合并/关闭的重要 PRs

| PR 编号 | 标题 | 状态 | 贡献者 | 影响说明 |
|---------|------|------|--------|----------|
| [#217](https://github.com/netease-youdao/LobsterAI/pull/217) | Feature: Linux support | ✅ 已合并 | @Mind-Hand | 新增 AppImage 和 deb 包，Linux 桌面环境集成优化 |
| [#207](https://github.com/netease-youdao/LobsterAI/pull/207) | fix: 解决 Windows 中文系统 GBK 编码导致命令行输出乱码 | ✅ 已合并 | @btc69m979y-dotcom | 彻底解决 Windows 中文环境命令行乱码问题（关闭 #164, #183） |
| [#203](https://github.com/netease-youdao/LobsterAI/pull/203) | Feat: image base64 input | ✅ 已合并 | @btc69m979y-dotcom | cowork 模式支持图片上传，修复多轮对话图片丢失（关闭 #71） |
| [#222](https://github.com/netease-youdao/LobsterAI/pull/222) | feat: 支持数理化公式渲染（KaTeX + remark-math） | ✅ 已合并 | @liuzhq1986 | 解决数学/化学/物理公式渲染问题 |
| [#158](https://github.com/netease-youdao/LobsterAI/pull/158) | feat: 添加小蜜蜂接入 | ✅ 已合并 | @renhongchao | 新增网易小蜜蜂 IM 渠道，与钉钉/飞书/Telegram 等并列 |
| [#128](https://github.com/netease-youdao/LobsterAI/pull/128) | feat: 云信 NIM 富媒体消息、配置热更新与账号白名单 | ✅ 已合并 | @Aoxiang-001 | 云信通道支持图片/音频/视频/文件收发，热更新机制 |
| [#225](https://github.com/netease-youdao/LobsterAI/pull/225) | fix: 修复 Windows 端提示缺少 git bash 的问题 | ✅ 已合并 | @fisherdaddy | Windows 端 git bash 兼容性修复 |
| [#214](https://github.com/netease-youdao/LobsterAI/pull/214) | fix: Windows 邮箱连通性测试与 cowork 邮箱查收修复 | ✅ 已合并 | @btc69m979y-dotcom | Windows 邮箱功能修复，npm 检测增强 |

### 仍在审核中的 PR

- **[#228](https://github.com/netease-youdao/LobsterAI/pull/228)** - fix: 支持小蜜蜂账号实时变更（@renhongchao）- 2026-03-03 新开

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 状态 | 评论数 | 链接 | 核心诉求 |
|-------|------|--------|------|----------|
| #89 添加邮箱的作用是什么？并且我都是添加失败 | 🔴 已关闭 | **5** | [#89](https://github.com/netease-youdao/LobsterAI/issues/89) | 用户对邮箱功能定位不清晰（是技能收发信还是 IM 对话？），且测试 163/QQ 邮箱始终连接失败 |
| #144 win11报错用不了 | 🟢 开放中 | **4** | [#144](https://github.com/netease-youdao/LobsterAI/issues/144) | Windows 11 系统运行报错，404 not found error，涉及 Claude Agent SDK 调用 |
| #187 非阿里模型好像都不能用 | 🟢 开放中 | **3** | [#187](https://github.com/netease-youdao/LobsterAI/issues/187) | 除阿里系模型外，其他模型均无法使用 |
| #87 使用自定义模型功能出错 | 🔴 已关闭 | **3** | [#87](https://github.com/netease-youdao/LobsterAI/issues/87) | 自定义模型配置后工具调用失败，API 返回 400 错误（Invalid JSON payload） |
| #205 最新版的还是安装不了？？ | 🟢 开放中 | **2** | [#205](https://github.com/netease-youdao/LobsterAI/issues/205) | 安装问题长期未解决，用户抱怨拖延已久 |
| #197 钉钉IM是有什么配额限制吗，为什么突然接不通了 | 🟢 开放中 | **2** | [#197](https://github.com/netease-youdao/LobsterAI/issues/197) | 钉钉 IM 连接突然失效，疑似配额限制 |

### 热点分析

**邮箱功能** 是本期社区讨论焦点。Issue #89 以 5 条评论成为讨论最活跃的议题，用户核心困惑在于：邮箱功能定位不明确——究竟是用技能收发信，还是像飞书一样可对话？与此同时，多个 Issues（#69, #31）反映邮箱连接从未成功过，涉及 QQ 邮箱和 163 邮箱的 TSL/SSL 配置尝试均告失败。尽管本期 PR #214 修复了 Windows 邮箱连通性测试，但社区反馈表明问题可能尚未完全解决，建议后续重点关注。

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

| 严重程度 | Issue | 状态 | 描述 | 相关 Fix PR |
|----------|-------|------|------|-------------|
| 🔴 高 | #144 win11报错 | 🟢 开放 | Windows 11 报 404 not found error，Claude Agent SDK 调用失败 | 无 |
| 🔴 高 | #187 非阿里模型不能使用 | 🟢 开放 | 除阿里系模型外均不可用 | 无 |
| 🔴 高 | #205 最新版安装不了 | 🟢 开放 | 安装问题长期存在，用户抱怨久拖未决 | 无 |
| 🔴 高 | #219 大量问答后发消息无限等待 | 🟢 开放 | 单任务大量 Q&A 后消息发送无返回，持续处于执行中 | 无 |
| 🟡 中 | #213 Windows11沙箱上传文件无法读取 | 🟢 开放 | 沙箱模式下传文件找不到，放 workspace 也不行 | 无 |
| 🟡 中 | #215 中文识别有问题 | 🟢 开放 | 中文目录文件创建乱码；定时任务只能增不能删 | 无 |
| 🟡 中 | #224 用户名为中文时无法写文件 | 🟢 开放 | 中文用户名导致无法写文件和使用 skills | 无 |
| 🟡 中 | #202 Windows版本运行不了任何bash脚本 | 🟢 开放 | 任何 skill 都涉及调用 cygpath，强制要求 Cygwin | 无 |
| 🟢 低 | #208 公式没有正确渲染 | 🔴 已关闭 | 数学/化学/物理公式未渲染 | [#222](https://github.com/netease-youdao/LobsterAI/pull/222) 已修复 |
| 🟢 低 | #164 Windows编码导致乱码 | 🔴 已关闭 | Windows GBK 编码导致命令行乱码 | [#207](https://github.com/netease-youdao/LobsterAI/pull/207) 已修复 |

### 稳定性评估

- **已修复**：2 个长期反馈的稳定性问题（Windows 编码 #164、公式渲染 #208）在本期得到解决
- **待修复**：8+ 个中高严重程度问题仍处于开放状态，主要集中在 **Windows 兼容性**（安装、运行、bash 脚本）和 **多模型支持** 领域

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue | 状态 | 功能描述 | 初步评估 |
|-------|------|----------|----------|
| #227 没有上下文压缩 | 🟢 开放 | 缺少上下文压缩功能，导致单一会话对话上下文受限 | 长期需求，需评估对话管理策略 |
| #226 怎么把lobsterAI和agentunion.net建立链接呢？ | 🟢 开放 | 外部服务集成需求 | 待明确 |
| #179 如何使用IM启动新的会话 | 🟢 开放 | IM 消息都放到同一会话，希望支持新会话 | IM 功能增强需求 |
| #81 发布包能否支持便携版 | 🔴 已关闭 | 企业合规场景需要便携版（无安装权限） | 需求合理性高 |

### 路线图信号分析

基于本期 PR 合并情况，以下方向可能成为下一版本重点：

1. **跨平台体验持续优化**：Linux 支持已合并（#217），但 Issues 显示 Windows 端仍有问题待解（#202, #213, #215），预计后续版本会继续完善 Windows 兼容性
2. **多模型支持**：Issue #187 反馈非阿里模型不可用，虽然本期 PR #157 修复了 Moonshot/Kimi 的 Coding Plan 端点切换问题，但多模型兼容性仍是用户痛点
3. **IM 生态扩展**：小蜜蜂接入已合并（#158），#228 进一步优化实时变更能力，IM 渠道预计是持续迭代方向

---

## 7. 用户反馈摘要

### 真实用户痛点

| 场景 | 痛点 | 证据 |
|------|------|------|
| **Windows 兼容性** | 安装失败、运行报错、bash 脚本无法执行、中文用户名/目录乱码 | Issues #205, #144, #202, #215, #224 |
| **邮箱功能** | 连接失败、无法收发、功能定位不清晰 | Issues #89, #69, #31 |
| **多模型支持** | 非阿里模型不可用、自定义模型工具调用失败 | Issues #187, #87 |
| **安装部署** | 便携版缺失、企业合规受限 | Issue #81 |

### 满意的地方

- 视觉模型图片支持（#203）解决了图片识别问题
- Windows 中文编码问题（#207）得到彻底修复
- Linux 支持（#217）填补了跨平台空白
- 公式渲染（#222）改善了学术场景体验

---

## 8. 待处理积压

### 长期未响应的重点 Issue（超过 7 天无更新）

| Issue | 状态 | 创建时间 | 当前评论 | 风险等级 |
|-------|------|----------|----------|----------|
| #37 联网搜索能力被禁用 | 🟢 开放 | 2026-02-22 | 2 | 🔴 高 - 环境层面限制，可能无法自行解决 |
| #80 没法打开 | 🔴 已关闭 | 2026-02-24 | 2 | 🟢 已关闭 |
| #81 便携版请求 | 🔴 已关闭 | 2026-02-24 | 0 | 🟢 已关闭 |

### 待合并的 PR

| PR | 状态 | 创建时间 | 贡献者 | 阻塞因素 |
|----|------|----------|--------|----------|
| #228 支持小蜜蜂账号实时变更 | 🟠 待合并 | 2026-03-03 | @renhongchao | 刚提交，待审核 |

### 维护者建议

1. **优先处理**：Issue #144（Win11 报错）和 #187（非阿里模型不可用）影响核心功能，建议优先排查
2. **邮箱功能**：虽然 PR #214 修复了部分问题，但社区反馈仍频繁，建议做一次系统性测试和文档补充
3. **Windows 安装问题**：Issue #205 用户抱怨长期未解决，建议定位根因（可能是多因素叠加）

---

*报告生成时间：2026-03-03 | 数据来源：GitHub Issues & PRs | 项目：netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报

**报告日期：2026-03-03**  
**数据来源：GitHub (github.com/qhkm/zeptoclaw)**

---

## 1. 今日速览

过去24小时内，ZeptoClaw 项目保持较高活跃度，共处理 **2 条 Issues**（均为已关闭状态）以及 **3 条 Pull Requests**（1 条已合并，2 条待合并）。项目在搜索工具和即时通讯渠道方面持续迭代，未发布新版本。整体健康度良好，开发者 @qhkm 持续推进功能完善与 bug 修复工作。

> **活跃度评估**：⭐⭐⭐⭐ (4/5) — 功能开发节奏稳健，PR 合并效率较高

---

## 2. 版本发布

**本期无新版本发布**

---

## 3. 项目进展

### 已合并/关闭 PR

| PR | 标题 | 状态 | 说明 |
|---|---|---|---|
| [#215](https://github.com/qhkm/zeptoclaw/pull/215) | fix(lark): use correct receive_id_type based on ID prefix | ✅ 已合并 | 修复 Feishu 飞书消息回复失败问题（错误码 99992361），通过自动识别 ID 前缀（`oc_` → `chat_id`）解决跨应用错误 |

**推进功能**：
- **飞书渠道修复**：解决使用 `channels.lark` 时 outbound 消息发送失败的技术债
- **SearXNG 搜索引擎集成**：PR #214 仍在待合并状态，将新增第三方搜索 provider

---

## 4. 社区热点

### 热门讨论

| 类型 | 链接 | 讨论内容 |
|---|---|---|
| **Issue #212** | [feat: add SearXNG web search provider](https://github.com/qhkm/zeptoclaw/issues/212) | 新增 SearXNG 作为第三大 Web 搜索 provider，支持自托管实例，包含 `provider` 字段和 `api_url` 配置项，1 条评论 |

**热度分析**：SearXNG 功能请求获得社区关注，反映用户对多元化搜索源和自托管隐私的诉求。

---

## 5. Bug 与稳定性

### 本期报告 Bug

| Issue | 严重程度 | 状态 | 说明 |
|---|---|---|---|
| [#213](https://github.com/qhkm/zeptoclaw/issues/213) | 🟡 中 | ✅ 已关闭 | **Lark outbound 发送失败**：使用 Feishu 渠道时，inbound 消息接收正常，但 outbound 回复返回 400 错误，Feishu 报错 `99992361 open_id cross app`。根因是 `send()` 函数错误地将 `chat_id`（前缀 `oc_`）作为 `open_id` 传递。|

> **修复状态**：已通过 PR #215 合并修复

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue/PR | 功能 | 状态 | 纳入可能性 |
|---|---|---|---|
| **PR #214** | [feat(tools): add SearXNG web search provider](https://github.com/qhkm/zeptoclaw/pull/214) | 🔲 待合并 | ⭐⭐⭐⭐⭐ 高 - 代码已实现，待 review 合并 |
| **PR #216** | [fix(channels): show configured provider models in /model list](https://github.com/qhkm/zeptoclaw/pull/216) | 🔲 待合并 | ⭐⭐⭐⭐ 高 - 增强模型列表展示用户体验 |

**路线图信号**：
- 搜索能力持续扩展：从 Brave、DuckDuckGo 到 SearXNG，支持自托管场景
- 配置透明度提升：`/model list` 将显示用户自定义模型，增强可观测性

---

## 7. 用户反馈摘要

从 Issue 评论与 PR 描述中提取：

| 场景 | 痛点/需求 |
|---|---|
| **搜索工具** | 用户需要更多搜索 provider 选择，尤其是可自托管的 SearXNG，以满足隐私合规或内网部署需求 |
| **飞书集成** | 飞书消息收发存在 ID 类型混用问题，影响生产环境使用稳定性 |

> **满意度**：功能迭代积极响应用户定制化需求

---

## 8. 待处理积压

### 需关注的长期待处理项

| Issue/PR | 状态 | 提醒 |
|---|---|---|
| **PR #214** (SearXNG) | 🔲 待合并 | 建议尽快合并，SearXNG 功能开发已完成 |
| **PR #216** (model list) | 🔲 待合并 | 建议尽快合并，提升配置透明度 |

> **无长期未响应的 Issues**

---

**报告生成时间**：2026-03-03  
**分析师**：AI 开源项目观察助手

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-03)

## 1. 今日速览

过去24小时，NanoBot 项目保持高度活跃状态：共处理 **24 条 Issues**（22 新开/活跃，2 已关闭）和 **71 条 PRs**（53 待合并，18 已合并/关闭），无新版本发布。今日社区贡献集中在文档完善、记忆/历史管理优化、Channels 功能增强（如 WhatsApp、QQ、网页聊天）以及多 Provider 稳定性修复上。项目整体呈现健康迭代态势，多个重要功能 PR 接近可合并状态。

---

## 2. 版本发布

**无新版本发布**。最近发布为 post3 版本（0.1.4.post3）。

---

## 3. 项目进展

以下 PR 已合并或关闭，推进了关键功能：

| PR | 状态 | 描述 | 链接 |
|---|---|---|---|
| **#1307** | ✅ 已合并 | fix(QQ): 传递 msg_id 避免主动消息权限错误 - 解决 QQ C2C 回复时因缺少原始消息 ID 导致报错 `40034102` 的问题 | [#1307](https://github.com/HKUDS/nanobot/pull/1307) |
| **#64** | ✅ 已合并 | chore(compose): 更新 docker-compose 配置 - 扩展服务（gateway, onboard, WhatsApp login, agent, status）并添加 .env 支持 | [#64](https://github.com/HKUDS/nanobot/pull/64) |

**待合并的重要 PR（评论/关注度高）：**

- **#1454** [OPEN] fix(memory): HISTORY.md 大小限制与更严格的历史压缩 prompt - 新增 `agents.defaults.historyMaxChars` 配置项，默认 0（无限制），超限时自动裁剪历史文件
- **#1450** [OPEN] fix(whatsapp): 允许 fromMe 消息 - 解决 WhatsApp 关联设备所有者无法与机器人交互的问题
- **#1345** [OPEN] feat: 引入会话级工作目录 - 避免跨会话文件干扰，文件系统工具注册在 `workspace/sessionkey` 下
- **#1341** [OPEN] feat: 新增 Web 聊天通道 - 支持 SSE token 流式传输和多会话 UI
- **#1443** [OPEN] feat: 解耦心跳推理与通知 - 心跳 Agent 默认静默推理，只有显式 `message` 工具调用才会通知用户
- **#1446** [OPEN] feat(usage): 新增 usage.jsonl 日志 - 记录 tool_call、llm_call、turn 事件，便于用量分析

---

## 4. 社区热点

以下 Issues/PRs 今日讨论最活跃（按评论数排序）：

| Issue/PR | 评论数 | 热度摘要 | 链接 |
|---|---|---|---|
| **#430** | 14 | How to use web_search？ - 用户询问 WebSearchTool 使用方法，附详细截图 | [#430](https://github.com/HKUDS/nanobot/issues/430) |
| **#222** | 7 | Multi agents setup - Supported? - 用户希望了解多 Agent 配置，5 人点赞，已有相关配置示例 | [#222](https://github.com/HKUDS/nanobot/issues/222) |
| **#161** | 5 | Proposal: Replace LiteLLM with native SDKs - 8 人点赞，建议移除 litellm 依赖改用原生 SDK 以减小包体积 | [#161](https://github.com/HKUDS/nanobot/issues/161) |
| **#1332** | 4 | 消耗的 token 好多啊 - 用户反馈发送 "hello" 消耗 5000+ token，安装 skills 消耗 3 万+，中文社区关注度高 | [#1332](https://github.com/HKUDS/nanobot/issues/1332) |
| **#927** | 4 | Feat: Add SearXNG as optional web search backend - 建议在现有 Brave Search 基础上新增 SearXNG 作为可选后端 | [#927](https://github.com/HKUDS/nanobot/issues/927) |
| **#1394** | 3 | [CLOSED] Error sending QQ message - 已关闭，QQ 消息去重错误 | [#1394](https://github.com/HKUDS/nanobot/issues/1394) |
| **#224** | 3 | [CLOSED] WhatsApp AllowList doesn't work - 已关闭，WhatsApp 白名单失效问题 | [#224](https://github.com/HKUDS/nanobot/issues/224) |

---

## 5. Bug 与稳定性

今日报告的 Bug，按严重程度排列：

| Issue | 严重程度 | 描述 | 状态 | 关联 PR |
|---|---|---|---|---|
| **#1441** | 🔴 高 | [BUG] Cron 提醒触发无限循环 - cron job 发送的提醒消息被错误识别为用户新消息，导致无限递归 | OPEN | - |
| **#1414** | 🔴 高 | Bug: Minimax API 拒绝连续用户消息 - `invalid_type` 错误，使用 Feishu 通道 + Minimax 模型时每个消息都失败 | OPEN | - |
| **#1401** | 🔴 高 | TypeError: type 'Choice' is not subscriptable - 对话中途卡死，nanobot agent 启动即报错 | OPEN | - |
| **#1407** | 🟡 中 | Unable to use local Qwen3 model via vLLM - Windows 环境下配置本地 Qwen3 模型失败 | OPEN | - |
| **#1396** | 🟡 中 | bug with QQ channel - QQ 机器人偶发无原因报错 | OPEN | - |
| **#1412** | 🟢 低 | processing from another bot? - 无法处理来自另一个 bot 的消息 | OPEN | - |

**已有 Fix PR 的问题：**
- QQ 消息权限错误 → [#1307](https://github.com/HKUDS/nanobot/pull/1307) 已合并
- WhatsApp 白名单 → [#1450](https://github.com/HKUDS/nanobot/pull/1450) 已提交修复

---

## 6. 功能请求与路线图信号

高价值功能请求（结合现有 PR 判断可能被纳入下一版本）：

| Issue | 请求内容 | 已有相关 PR | 纳入可能性 |
|---|---|---|---|
| **#161** | 用原生 SDK (openai/anthropic/google-generativeai) 替代 LiteLLM | - | 🟡 中（需评估工作量） |
| **#927** | 新增 SearXNG 作为 Web 搜索后端 | - | 🟡 中（功能明确） |
| **#1448** | 实现技能执行的安全沙箱（容器/WASM） | - | 🟢 远期（架构建议） |
| **#1442** | 添加 LangFuse 追踪支持 | - | 🟡 中（实现简单） |
| **#1418** | DingTalk 通道显示发送者名称而非 staffId | - | 🟡 中 |
| **#1262** | Telegram 添加 reply_to 参数支持对话线程 | - | 🟡 中 |

**功能增强趋势：**
- 记忆/历史管理优化（#1454, #1447）→ 预计下版本合并
- Web 聊天通道（#1341）→ 接近可用
- 心跳机制重构（#1443）→ 改善用户体验

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的关键痛点与需求：

1. **Token 消耗过高** (#1332)：用户实际测试发现简单消息消耗 5000+ token，安装 skills 消耗 3 万+，中文社区反馈强烈，关注成本与效率
2. **多渠道使用困惑**：
   - WebSearch 不会用 (#430)
   - WhatsApp 白名单不生效 (#224)
   - QQ 消息权限报错 (#1394)
   - DingTalk 无法显示发送者姓名 (#1418)
3. **本地模型配置复杂** (#1407)：用户尝试 Windows + vLLM + Qwen3 失败，配置困难
4. **Cron 任务噪音** (#1445)：用户不希望 cron 任务在无实质变化时发送通知
5. **多 Agent 需求** (#222)：用户希望官方提供多 Agent 设置文档和小型指南

**满意度提升点：**
- QQ 消息修复 (#1307) 获得积极反馈
- WhatsApp 关联设备支持修复 (#1450) 解决核心场景

---

## 8. 待处理积压

以下 Issue 超过 3 天未响应且具有重要价值，建议维护者关注：

| Issue | 等待天数 | 描述 | 优先级 |
|---|---|---|---|
| **#222** | ~25 天 | Multi agents setup - 5 人点赞，7 条讨论 | 🟡 中 |
| **#161** | ~26 天 | Replace LiteLLM with native SDKs - 8 人点赞 | 🟡 中 |
| **#927** | ~10 天 | Add SearXNG backend | 🟡 中 |
| **#1262** | ~4 天 | Telegram reply_to parameter | 🟡 中 |
| **#1418** | ~1 天 | DingTalk sender name | 🟡 中 |

**长期未响应的 PR：**
- **#1345** (per-session working directory) - 活跃开发中，3 月 2 日更新
- **#1385** (reasoning_details fix) - 3 月 2 日更新

---

*报告生成时间：2026-03-03 | 数据来源：GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-03-03

## 1. 今日速览

过去 24 小时，PicoClaw 项目保持 **高度活跃** 状态。共有 **17 条 Issues 更新**（新开/活跃 13 条，关闭 4 条）和 **71 条 PR 更新**（待合并 40 条，已合并/关闭 31 条）。代码合并活跃度显著，多个重要功能 PR 成功关闭，包括 WebSocket 通道实现、MCP 工具支持、LiteLLM 提供商别名等。项目正在向 3 月路线图的第一阶段推进，MCP 集成和飞书渠道增强成为近期开发重点。

---

## 2. 版本发布

**本期无新版本发布**。最新 Release 仍为历史版本。

---

## 3. 项目进展

以下 PR 已于本期合并/关闭，项目整体功能得到重要推进：

| PR | 状态 | 说明 |
|---|---|---|
| [#1005](https://github.com/sipeed/picoclaw/pull/1005) | CLOSED | **WebSocket 通道实现**（TDD 红绿测试驱动开发）：完成 14 个测试用例，覆盖构造函数、发送守卫、认证握手、连接/接收、连接/发送、会话密钥传递/降级、重连、优雅关闭、并发发送等场景 |
| [#282](https://github.com/sipeed/picoclaw/pull/282) | CLOSED | **MCP 工具支持**：引入 Model Context Protocol 集成，支持从外部 MCP 服务器动态注册工具，并提供生产级 Docker 部署选项 |
| [#736](将https://github.com/sipeed/picoclaw/pull/736) | CLOSED | **工具模块重构**：将单体文件（如 edit.go、web.go）拆分为每个工具一个独立文件，优化目录结构可维护性 |
| [#930](https://github.com/sipeed/picoclaw/pull/930) | CLOSED | **LiteLLM 提供商别名支持**：在 OpenAI 兼容路径中添加 `litellm/` 一级别名，支持 LiteLLM 代理模型名称 |
| [#727](https://github.com/sipeed/picoclaw/pull/727) | CLOSED | **修复 WeCom 消息去重数据竞态**：修复并发 map 访问竞态条件，用环形缓冲区策略替换全量 map 重置，解决"失忆悬崖"逻辑缺陷 |

**其他值得关注的在途 PR**：

- [#976](https://github.com/sipeed/picoclaw/pull/976) - **Agent Team 多代理架构**：实现团队协作模式，协调员 agent 可分解复杂任务并委托给专业子 agent 并发执行
- [#933](https://github.com/sipeed/picoclaw/pull/933) - **添加 Kimi/Moonshot 和 Opencode 提供商支持**
- [#1000](https://github.com/sipeed/picoclaw/pull/1000) - **飞书渠道增强**：支持 Markdown 卡片消息、媒体、@提及、消息编辑、表情反应等特性
- [#997](https://github.com/sipeed/picoclaw/pull/997) - **添加 Exa AI 搜索提供商**

---

## 4. 社区热点

以下 Issues/PRs 本期讨论最活跃（按评论数排序）：

| Issue/PR | 评论 | 点赞 | 概述 |
|---|---|---|---|
| [#290](https://github.com/sipeed/picoclaw/issues/290) | 7 | 5 | **[CLOSED] 实现 MCP 支持以实现可扩展操作**（高优先级路线图项） |
| [#288](https://github.com/sipeed/picoclaw/issues/288) | 5 | 0 | **[OPEN] 修改 PicoClaw 身份标识**：用户反馈在 Docker 环境中修改 soul.md、identity.md 等配置文件后，Telegram 询问时仍无法生效，已尝试清除 volume 和重新构建 Docker |
| [#572](https://github.com/sipeed/picoclaw/issues/572) | 2 | 0 | **[Feature] 添加 `/new` 或 `/clear` 命令启动新会话**：解决会话累积上下文导致 token 限制或上下文混乱的问题 |
| [#966](https://github.com/sipeed/picoclaw/issues/966) | 2 | 0 | **[BUG] 本地思考模型（Qwen 3.5）在 reasoning 消耗所有 token 时返回空内容** |
| [#975](https://github.com/sipeed/picoclaw/issues/975) | 1 | 0 | **[BUG] 负载均衡未按预期工作** |

**热点分析**：

- **MCP 集成**（#290）已成为项目路线图核心功能，已合并相关 PR #282，社区关注度高（7 评论、5 点赞）
- **Docker 环境配置问题**（#288）反映用户对配置持久化和修改生效机制的困惑，是用户体验层面的重要痛点
- **会话管理**（#572）是实用功能需求，预计将被纳入后续版本

---

## 5. Bug 与稳定性

按严重程度排列的本期 Bug 报告：

| Issue | 严重程度 | 状态 | 说明 |
|---|---|---|---|
| [#966](https://github.com/sipeed/picoclaw/issues/966) | **High** | OPEN | **本地思考模型返回空内容**：使用 Qwen 3.5（或其他思考/推理模型）通过 `openai_compat` 提供商时，LLM 偶尔返回空的 `content`，所有 token 被 `reasoning_content` 消耗 |
| [#975](https://github.com/sipeed/picoclaw/issues/975) | **High** | OPEN | **负载均衡未按预期工作**：在 GLM-4.7（bigmodel.cn）、infini-ai、aliyun 提供商环境下负载分配异常 |
| [#978](https://github.com/sipeed/picoclaw/issues/978) | **High** | OPEN | **配置飞书后发消息没有反应**：在小米路由器3G（OpenWrt 24）上使用 Termux 运行 PicoClaw，飞书渠道无法正常工作 |
| [#973](https://github.com/sipeed/picoclaw/issues/973) | **High** | OPEN | **连接 QQ 和钉钉后保持在线一夜，PANIC 并退出**：通道在长时间运行后出现消息队列关闭导致的崩溃 |
| [#1006](https://github.com/sipeed/picoclaw/issues/1006) | **Medium** | OPEN | **本地模型 picolm-local 配置错误**：提示 `api_key or api_base is required for HTTP-based protocol "openai"` |
| [#1004](https://github.com/sipeed/picoclaw/issues/1004) | **Medium** | OPEN | **切换到 DeepSeek-Chat 大模型的错误提示**：工具调用后缺少必需的 tool_messages 响应 |
| [#1003](https://github.com/sipeed/picoclaw/issues/1003) | **Medium** | OPEN | **OpenAI OAuth 不支持调试通道**：使用 OAuth 认证时，调试通道无输出，无法看到内部活动 |
| [#964](https://github.com/sipeed/picoclaw/issues/964) | **Medium** | CLOSED | **[已修复] 安全防护阻止重定向到 /dev/null 的命令**：在 restrict_to_workspace 模式下执行工具调用时，LLM 生成的 stdout/stderr 重定向命令被阻止 |
| [#965](https://github.com/sipeed/picoclaw/issues/965) | **Low** | CLOSED | **[已修复] 写入 /dev/mmcblk* 和 /dev/nvme* 设备也应被阻止**：扩展了 /dev/sd* 的安全防护范围 |

**稳定性评估**：本期报告 **4 个 High 级别 Bug**，主要集中在通道连接（飞书、QQ、钉钉）和模型交互（空内容、负载均衡）方面。建议优先关注 #966（模型空内容）和 #975（负载均衡）——这两项直接影响核心 AI 对话功能。

---

## 6. 功能请求与路线图信号

### 本期新增功能请求

| Issue | 概述 | 预计可行性 |
|---|---|---|
| [#995](https://github.com/sipeed/picoclaw/issues/995) | **多用户支持**：单个 PicoClaw 实例可供多名用户共享，MEMORY.md 和 cronjobs 当前为全局工作区共享 | 中等（需改造会话管理） |
| [#986](https://github.com/sipeed/picoclaw/issues/986) | **AirPlay 通道实现 HomePod 音频输出**：通过 Tailscale + 树莓派桥接推送 TTS 音频 | 较低（依赖外部硬件） |
| [#984](https://github.com/sipeed/picoclaw/issues/984) | **在 Android Termux 上运行 PicoClaw 的配置问题** | 需排查 |
| [#988](https://github.com/sipeed/picoclaw/issues/988) | **PicoClaw 路线图：2026 年 3 月（第一阶段）**：包括 ByteDance Volcengine 提供商集成、多语言支持等 | 已纳入路线图 |

### 路线图信号分析

根据 Issue #988（2026 年 3 月路线图）以及已在途的 PR 进度，以下功能极有可能在下一版本发布：

1. **MCP 工具支持** ✅ 已合并（#282）
2. **多代理团队架构** 🔄 在途（#976）
3. **ByteDance Volcengine 提供商** 📋 规划中
4. **飞书通道增强** 🔄 在途（#1000）
5. **WebSocket 通道** ✅ 已合并（#1005）
6. **LiteLLM 别名支持** ✅ 已合并（#930）
7. **Exa AI 搜索** 🔄 在途（#997）

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点与使用场景：

### 核心痛点

1. **Docker 环境配置不生效**（#288）
   - 用户多次尝试修改 `soul.md`、`identity.md` 等文件，清除 volume 和重建 Docker 后，Telegram 询问时配置仍未生效
   - **影响**：严重阻碍新用户入门体验

2. **本地模型集成困难**（#1006）
   - 用户在使用本地 tinyllama 模型时遇到 API key/api_base 配置问题
   - **影响**：对本地部署用户不友好

3. **会话上下文累积**（#572）
   - 用户反映对话历史累积后可能触及 token 限制或导致上下文混乱
   - **诉求**：需要手动重启进程才能开始新会话

### 正面反馈信号

- MCP 集成（#290）获得 5 点赞，社区对可扩展工具注册机制期待较高
- 多代理架构（#976）得到关注，表明复杂任务分解需求存在

---

## 8. 待处理积压

以下 Issues 长期未响应或需维护者重点关注：

| Issue | 状态 | 积压时长 | 优先级 | 建议 |
|---|---|---|---|---|
| [#288](https://github.com/sipeed/picoclaw/issues/288) | OPEN | 约 15 天 | **High** | 用户明确遇到配置不生效问题，建议排查 Docker 构建流程或提供更明确的配置修改指南 |
| [#572](https://github.com/sipeed/picoclaw/issues/572) | OPEN | 约 10 天 | Medium | 功能请求已有 PR #976（Agent Team）部分覆盖会话管理，建议评估优先级 |
| [#534](https://github.com/sipeed/picoclaw/pull/534) | OPEN | 约 11 天 | Medium | SearXNG 搜索提供商支持已提出多日，建议评估合并可行性 |
| [#467](https://github.com/sipeed/picoclaw/pull/467) | OPEN | 约 12 天 | Low | Docker 镜像优化改进，建议评估合并 |

**积压评估**：#288（配置不生效）是阻塞性问题，建议优先处理以改善新用户体验。

---

*报告生成时间：2026-03-03 | 数据来源：GitHub PicoClaw Repository*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**2026-03-03**

---

## 1. 今日速览

过去24小时项目保持高度活跃，共处理 **48 条事务**（15 Issues + 33 PRs）。新增 Issue 12 个、关闭 3 个；PR 待合并 18 个、已合并/关闭 15 个。版本发布 **0 个**。核心开发继续围绕多通道架构重构、OAuth 认证优化、容器调度效率提升等方向推进。社区对运行时灵活性（支持 OpenCode 等竞品）和 Web UI 需求强烈，安全问题（WhatsApp 文件权限）已首次报告。

---

## 2. 版本发布

**无新版本发布**。最近版本 v1.1.3（见 Issue #613）。

---

## 3. 项目进展

| PR | 状态 | 描述 | 亮点 |
|---|---|---|---|
| [#657](https://github.com/qwibitai/nanoclaw/pull/657) | OPEN | **原子化任务认领机制** | 用 SQLite 事务替代两阶段 `getDueTasks` + `updateTaskAfterRun`，消除调度器轮询时的竞态窗口 |
| [#656](https://github.com/qwibitai/nanoclaw/pull/656) | OPEN | **OAuth 令牌自动刷新** | 从 macOS Keychain 读取刷新令牌，每次容器启动前刷新访问令牌，解决令牌过期中断问题 |
| [#654](https://github.com/qwibitai/nanoclaw/pull/654) | OPEN | **Typed Event Bus** | 零新依赖，13 个生命周期事件覆盖容器全链路（spawn→output→close→idle→agent invoked/completed...） |
| [#651](https://github.com/qwibitai/nanoclaw/pull/651) | OPEN | **Docker stop 超时优化** | `-t 1` 将重启速度提升约 10 倍（20s → 2s），适配无状态容器 |
| [#500](https://github.com/qwibitai/nanoclaw/pull/500) | CLOSED | **可插拔多通道架构重构** | 将 NanoClaw 从硬编码 Telegram 转型为通道无关架构，支持 WhatsApp、Slack、Google Chat 等 |
| [#419](https://github.com/qwibitai/nanoclaw/pull/419) | CLOSED | **防止 .env 泄露到容器** | 挂载 `/dev/null` 覆盖 `/workspace/project/.env`，阻断主机 secrets 通过 bind mount 泄露 |

**合并/关闭的 PR 中**，多通道架构重构（#500）和安全修复（#419）最具里程碑意义，标志项目向平台无关化迈出关键一步。

---

## 4. 社区热点

### Issue 热度排行

| Issue | 状态 | 赞 | 评论 | 主题 |
|---|---|---|---|---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | OPEN | **34** | **16** | **支持 OpenCode/Codex/Gemini 等运行时** |
| [#571](https://github.com/qwibitai/nanoclaw/issues/571) | OPEN | 1 | 1 | 使用 OpenCode（非 Claude） |
| [#574](https://github.com/qwibitai/nanoclaw/issues/574) | OPEN | 1 | 1 | 容器缺少 jq 工具 |
| [#661](https://github.com/qwibitai/nanoclaw/issues/661) | OPEN | 0 | 0 | **Web UI 需求** |

**分析**：
- **#80** 是绝对热点。Anthropic 近期开始限制 Claude Code 订阅，用户担忧 NanoClaw 依赖单一供应商的脆弱性。OpenCode 作为开源替代品已实现 Claude Code CLI 兼容接口，社区呼吁 NanoClaw 抽象运行时层。这是**路线图级**的需求，与 PR #500（多通道架构）在方向上一致。
- **#661** 来自中文社区用户，提到自研 Web UI 方案已发布（WhosClaw 项目），说明部分用户已自建可视化层。

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 描述 | 已有 Fix? |
|---|---|---|---|
| [#595](https://github.com/qwibitai/nanoclaw/issues/595) | **高** | OOM 崩溃（~40h 运行后），ghost sockets 累积 | 无 |
| [#635](https://github.com/qwibitai/nanoclaw/issues/635) | **高** | WhatsApp auth 文件权限 644（可读）→ 应为 600 | 无 |
| [#613](https://github.com/qwibitai/nanoclaw/issues/613) | **中** | `ANTHROPIC_MODEL` 环境变量被忽略 | 无 |
| [#611](https://github.com/qwibitai/nanoclaw/issues/611) | **中** | agent-runner 源码首次复制后不再更新 | 无 |
| [#652/#649](https://github.com/qwibitai/nanoclaw/issues/652) | **中** | Cron 提醒触发无限循环 | 已关闭（可能随 #657 修复） |

**关注点**：
- **#595**（OOM）是生产环境稳定性风险，`launchd` 静默重启导致问题易被忽视，需优先排查。
- **#635** 是**安全漏洞**，多用户系统上其他用户可读取 WhatsApp session 凭证。

---

## 6. 功能请求与路线图信号

| Issue | 功能 | 关联 PR | 评估 |
|---|---|---|---|
| #80 | 运行时抽象（OpenCode/Codex/Gemini） | #500（多通道架构） | ⭐ 极高优先级，可能纳入下一主版本 |
| #617 | 消息注入（主动插入用户消息到运行中的 agent） | — | 中等，适合作为交互增强 |
| #618 | Quote/Reply 上下文线程 | — | 中等，WhatsApp 端已支持，需 RustClaw 适配层 |
| #642 | Claude Code 技能的文件化 IPC 通道 | — | RFC 阶段，创新性高 |
| #661 | Web UI | — | 社区已有第三方实现（WhosClaw），官方暂无计划 |
| #574 | 容器预装 jq | — | 小优化，可接受 |

**趋势判断**：多通道架构（#500 已合并）→ 运行时抽象（#80）→ 交互增强（#617/#618）是自然的演进路径。

---

## 7. 用户反馈摘要

- **运行时焦虑**（#80）："Anthropic 已经在关闭使用 OpenClaw 的用户订阅，支持其他供应商是审慎的。" — 反映出用户对供应商锁定的担忧。
- **Windows 兼容性**（#571）：用户反馈 OpenCode 在 Windows Sys 环境下的使用问题。
- **生产级稳定性**（#595）：40 小时 OOM 崩溃、`launchd` 静默恢复 — 运维可见性不足。
- **WhatsApp 限制**（#659）：Disappearing messages 不支持，影响私密聊天场景。
- **Cron 干扰**（#652）：系统提醒被误识为用户消息，形成无限循环 — 通道隔离逻辑需加强。

---

## 8. 待处理积压

| Issue/PR | 积压时长 | 状态 | 备注 |
|---|---|---|---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | ~1 个月（2026-02-04） | OPEN | 34 赞，社区最高优先级 |
| [#595](https://github.com/qwibitai/nanoclaw/issues/595) | 3 天 | OPEN | 生产环境 OOM 风险 |
| [#296](https://github.com/qwibitai/nanoclaw/pull/296) | ~2 周 | OPEN | 调度任务被活跃容器阻塞，PR 已提出 |

**建议**：维护者应优先关注 #80（路线图）、#595（稳定性）、#635（安全漏洞）三个方向。

---

*Generated by AI Analyst | Data: 2026-03-03 24h*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-03-03

## 1. 今日速览

过去24小时，IronClaw 项目保持高度活跃：共处理 **19 条 Issues 更新**（新开/活跃 18 条，关闭 1 条），**40 条 PR 更新**（待合并 29 条，已合并/关闭 11 条）。项目于 2026-03-02 连续发布 v0.13.0 和 v0.13.1 两个版本，并在今日（03-03）已启动 v0.13.2 发布流程。代码合并节奏稳健，多项关键 bugfix 已合入主线，包括 WASM 运行时密钥注入修复和 Windows 缓存目录冲突解决。社区贡献活跃，新增简体中文翻译 PR 和 Podman 支持贡献。

---

## 2. 版本发布

### v0.13.1 | 2026-03-02 ✅ 已发布

**Release Notes:**

| 类别 | 内容 | PR |
|------|------|-----|
| **新增** | 添加 Brave Web Search WASM 工具 | [#474](https://github.com/nearai/ironclaw/pull/474) |
| **修复** | *(web)* 斜杠命令自动补全的自动滚动和 Enter 键确认行为 | [#475](https://github.com/nearai/ironclaw/pull/475) |
| **修复** | 修正 telegram-mtp 扩展的下载 URL | [#470](https://github.com/nearai/ironclaw/pull/470) |

---

### v0.13.0 | 2026-03-02 ✅ 已发布

**Release Notes:**

| 类别 | 内容 | PR |
|------|------|-----|
| **新增** | *(cli)* 添加 `tool setup` 命令 + GitHub 配置架构 | [#438](https://github.com/nearai/ironclaw/pull/438) |
| **新增** | 添加 `web_fetch` 内置工具 | [#435](https://github.com/nearai/ironclaw/pull/435) |
| **新增** | *(web)* 基于数据库的 Jobs 标签页 + 调度器触发的本地任务 | [#436](https://github.com/nearai/ironclaw/pull/436) |

> ⚠️ **迁移注意**: v0.13.0 引入了新的 `web_fetch` 工具和 Jobs 数据库结构，首次升级需关注数据库迁移脚本是否正常运行。

---

### v0.13.2 发布中 | PR #480

PR [#480](https://github.com/nearai/ironclaw/pull/480) 已于 2026-03-03 创建，预计近期合入。主要修复内容：**将密钥存储接入所有 WASM 运行时激活路径**（[#479](https://github.com/nearai/ironclaw/pull/479)）。

---

## 3. 项目进展

以下 PR 已于过去24小时合并/关闭，项目功能得到实质推进：

| PR | 标题 | 状态 | 贡献者 | 意义 |
|----|------|------|--------|------|
| [#479](https://github.com/nearai/ironclaw/pull/479) | fix: wire secrets store into all WASM runtime activation paths | ✅ 已关闭 | @henrypark133 | **关键修复**：修复 WASM 工具运行时缺失密钥注入的 bug，401 错误问题解决 |
| [#474](https://github.com/nearai/ironclaw/pull/474) | feat: add Brave Web Search WASM tool | ✅ 已关闭 | @henrypark133 | 新增 Brave Search API 集成 |
| [#475](https://github.com/nearai/ironclaw/pull/475) | fix(web): auto-scroll and Enter completion for slash commands | ✅ 已关闭 | @henrypark133 | Web UI 交互体验优化 |
| [#470](https://github.com/nearai/ironclaw/pull/470) | fix: correct download URLs for telegram-mtproto and slack-tool | ✅ 已关闭 | @henrypark133 | 修复扩展下载链接错误 |
| [#473](https://github.com/nearai/ironclaw/pull/473) | support podman | ✅ 已关闭 | @jwiklund | 实验性支持 Podman 容器运行时 |
| [#453](https://github.com/nearai/ironclaw/pull/453) | chore: release v0.13.1 | ✅ 已关闭 | @github-actions[bot] | 版本发布工作流 |

**关键进展总结**：
- WASM 运行时密钥注入问题彻底修复（影响所有通过 UI 激活的扩展）
- Windows 平台 WASM 缓存目录冲突问题已通过 [#478](https://github.com/nearai/ironclaw/pull/478) 修复（待合并）
- 多项用户体验优化（Slack 命令补全、Jobs 任务管理）

---

## 4. 社区热点

过去24小时讨论最活跃的 Issues：

| Issue | 标题 | 评论数 | 👍 | 链接 |
|-------|------|--------|-----|------|
| **#407** | Ideas from Hermes Agent worth adopting | 3 | 1 | [查看](https://github.com/nearai/ironclaw/issues/407) |
| **#259** | feat: debounce rapid inbound messages into a single agent turn | 2 | 1 | [查看](https://github.com/nearai/ironclaw/issues/259) |
| #448 | setting telegram bot error | 1 | 0 | [查看](https://github.com/nearai/ironclaw/issues/448) |
| #97 | Generic embedding model endpoint is missing | 1 | 0 | [查看](https://github.com/nearai/ironclaw/issues/97) |

### 🔥 热点分析

**#407** 引发最多讨论。该 Issue 研究了 [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) 项目（一个与 IronClaw 类似的 Python 个人 AI 代理），提出了值得借鉴的架构模式。这反映出社区对扩展 IronClaw 功能边界（多渠道、工具执行、记忆、技能）的高度兴趣。

**#259** 关注消息去重问题：当用户快速连续发送多条消息时，IronClaw 逐条处理导致 LLM 缺乏上下文。该功能请求已关联 PR [#465](https://github.com/nearai/ironclaw/pull/465)（正在进行中），预计将显著改善多渠道消息处理体验。

---

## 5. Bug 与稳定性

### 今日新增 Bug 报告（按严重程度）

| 严重程度 | Issue | 标题 | 是否有 Fix PR |
|----------|-------|------|---------------|
| 🔴 **高** | [#487](https://github.com/nearai/ironclaw/issues/487) | Agent 返回原始 "[Called tool ...]" 文本当所有工具调用失败 | ❌ 待处理 |
| 🔴 **高** | [#486](https://github.com/nearai/ironclaw/issues/486) | WASM 工具拒绝 JSON 字符串格式的数值参数 | ❌ 待处理 |
| 🟡 **中** | [#485](https://github.com/nearai/ironclaw/issues/485) | 任务重启失败时 UI 无错误反馈 | ❌ 待处理 |
| 🟡 **中** | [#484](https://github.com/nearai/ironclaw/issues/484) | 手动触发的 routine 输出到错误线程 | ❌ 待处理 |
| 🟡 **中** | [#483](https://github.com/nearai/ironclaw/issues/483) | Routine "Run Now" 按钮无 UI 反馈 | ❌ 待处理 |
| 🟡 **中** | [#482](https://github.com/nearai/ironclaw/issues/482) | Skill 安装失败时创建幽灵数据库记录 | ❌ 待处理 |
| 🟡 **中** | [#481](https://github.com/nearai/ironclaw/issues/481) | 记忆搜索结果链接到 chunk UUID 而非源文件路径 | ❌ 待处理 |

### 其他待修复 Bug

| Issue | 标题 | 链接 |
|-------|------|------|
| #439 | Registry 更新工作流失败，阻止 WASM 渠道/工具安装 | [查看](https://github.com/nearai/ironclaw/issues/439) |
| #463 | OpenRouter 免费模型显示错误费用 | [查看](https://github.com/nearai/ironclaw/issues/463) — 已关联 PR [#469](https://github.com/nearai/ironclaw/pull/469) |
| #459 | 缺少 Docker 镜像 "ironclaw-worker:latest" | [查看](https://github.com/nearai/ironclaw/issues/459) |

> ⚠️ **稳定性预警**：今日集中报告了 7 个 Web UI 相关的 bug，涉及任务管理、Routine 执行、Skill 安装等核心功能，建议优先处理。

---

## 6. 功能请求与路线图信号

### 今日新增功能请求

| Issue | 功能描述 | 关联 PR/Issue | 纳入版本可能性 |
|-------|----------|---------------|----------------|
| [#467](https://github.com/nearai/ironclaw/issues/467) | 构建 Agent 质量评估的轨迹基准测试系统 | — | 中期（需大规模开发） |
| [#466](https://github.com/nearai/ironclaw/issues/466) | 采用 OpenClaw 风格的测试策略：分层测试、stub 渠道、gateway 辅助 | — | 中期 |
| [#462](https://github.com/nearai/ironclaw/issues/462) | 支持 Podman 容器运行时 | [#473](https://github.com/nearai/ironclaw/pull/473) 已合入 | ✅ v0.13.x |
| [#450](https://github.com/nearai/ironclaw/issues/450) | 支持飞书（Lark/Bot）渠道 | — | 长期 |
| [#97](https://github.com/nearai/ironclaw/issues/97) | 通用嵌入模型端点（支持本地/自定义端点） | — | 中期 |

### 正在进行中的功能开发

| PR | 功能 | 状态 |
|----|------|------|
| [#476](https://github.com/nearai/ironclaw/pull/476) | Gemini CLI OAuth 集成（Cloud Code API） | 🔄 进行中 |
| [#465](https://github.com/nearai/ironclaw/pull/465) | 对话历史加载与消息批量处理（修复 #259） | 🔄 进行中 |
| [#333](https://github.com/nearai/ironclaw/pull/333) | Slack Socket Mode 支持（NAT 友好连接） | 🔄 进行中 |
| [#95](https://github.com/nearai/ironclaw/pull/95) | Venice AI 作为一级 LLM 后端 | 🔄 进行中（长期） |

---

## 7. 用户反馈摘要

从 Issues 评论和讨论中提炼的真实用户痛点与场景：

### 痛点

1. **Telegram Bot 配置困难**
   - Issue [#448](https://github.com/nearai/ironclaw/issues/448)：用户配置 Telegram Bot 时遇到错误
   - 涉及凭证注入、API 权限等问题

2. **容器运行时兼容性**
   - Issue [#462](https://github.com/nearai/ironclaw/issues/462)、[#459](https://github.com/nearai/ironclaw/issues/459)：用户期望支持 Podman，或遇到 Docker 镜像缺失问题
   - PR [#473](https://github.com/nearai/ironclaw/pull/473) 已部分解决

3. **LLM 成本计算错误**
   - Issue [#463](https://github.com/nearai/ironclaw/issues/463)：OpenRouter 免费模型显示 $2.50/$10.00 而非 $0
   - PR [#469](https://github.com/nearai/ironclaw/pull/469) 已修复

4. **嵌入模型端点受限**
   - Issue [#97](https://github.com/nearai/ironclaw/issues/97)：当前仅支持 NearAI 和 OpenAI 嵌入端点
   - 用户希望支持本地部署或自定义端点

### 正面反馈

- 社区对 Hermes Agent 架构研究的兴趣（#407）表明用户关注项目长期技术演进
- 多项 quick fix（#470 下载链接、#475 UI 交互）得到快速响应，社区满意度较高

---

## 8. 待处理积压

以下 Issues 超过 48 小时未得到官方回应，需关注：

| Issue | 标题 | 创建时间 | 状态 | 提醒 |
|-------|------|----------|------|------|
| [#97](https://github.com/nearai/ironclaw/issues/97) | 通用嵌入模型端点缺失 | 2026-02-14 | 🟡 Open | 长期未处理，需求明确 |
| [#439](https://github.com/nearai/ironclaw/issues/439) | Registry 更新工作流失败 | 2026-03-01 | 🟡 Open | 阻塞 WASM 扩展安装 |
| [#463](https://github.com/nearai/ironclaw/issues/463) | OpenRouter 免费模型费用错误 | 2026-03-02 | 🟡 Open | 已关联 PR #469 |
| [#459](https://github.com/nearai/ironclaw/issues/459) | 缺少 Docker 镜像 ironclaw-worker | 2026-03-02 | 🟡 Open | 影响任务执行 |
| [#467](https://github.com/nearai/ironclaw/issues/467) | 轨迹基准测试系统 | 2026-03-02 | 🟡 Open | 路线图讨论阶段 |

### 积压 PR 提醒

以下贡献者提交的 PR 等待审查超过 48 小时：

| PR | 标题 | 贡献者 | 等待时长 |
|----|------|--------|----------|
| [#95](https://github.com/nearai/ironclaw/pull/95) | feat: add Venice AI as first-class LLM backend | @jesseproudman | ~17 天 |
| [#333](https://github.com/nearai/ironclaw/pull/333) | feat: add Slack Socket Mode support | @KonstantinMirin | ~8 天 |
| [#334](https://github.com/nearai/ironclaw/pull/334) | feat: add OpenTelemetry observability | @KonstantinMirin | ~8 天 |
| [#451](https://github.com/nearai/ironclaw/pull/451) | Add Venice.ai provider | @adrienlo | ~1 天 |

> 📌 **建议**：优先处理 #95（Venice AI）和 #439（Registry 工作流），前者用户需求强烈，后者阻塞关键功能。

---

## 📊 数据概览

| 指标 | 数值 |
|------|------|
| Issues 新增/活跃 | 18 |
| Issues 关闭 | 1 |
| PR 待合并 | 29 |
| PR 已合并/关闭 | 11 |
| 新版本发布 | 2 (v0.13.0, v0.13.1) |
| 活跃贡献者 | ~15 人 |

---

*报告生成时间: 2026-03-03 | 数据来源: GitHub nearai/ironclaw*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-03)

## 1. 今日速览

过去24小时，TinyClaw 项目保持高度活跃。社区贡献者持续推进核心功能开发，共完成 **5 个 Pull Requests 合并**，涵盖长期记忆检索、OpenViking 集成、Tmux 配置修复等多个关键领域。Issue 方面，1个新 Issue 开放（多provider支持需求），3个 Issue 已关闭。整体项目处于稳健迭代状态，功能边界持续扩展，安全加固与插件生态并重。

---

## 2. 版本发布

**无新版本发布**

过去24小时内暂无版本标签更新。

---

## 3. 项目进展

过去24小时共有 **5 个 Pull Requests 合并/关闭**，项目功能持续推进：

| PR | 标题 | 状态 | 贡献者 | 进展说明 |
|---|---|---|---|---|
| [#34](https://github.com/TinyAGI/tinyclaw/pull/34) | Add long-term memory retrieval powered by qmd (BM25 and VSearch) | ✅ 已合并 | @mczabca-boop | 增强了 QMD 记忆检索的可靠性、可观测性，并修复了 Claude 注入安全问题，完成了记忆管道的端到端加固 |
| [#105](https://github.com/TinyAGI/tinyclaw/pull/105) | Used qodercli to add qodercli support | ✅ 已合并 | @dagelf | 新增 qodercli 支持，同时修复了 setup 脚本在用户输入错误时过早退出的问题 |
| [#132](https://github.com/TinyAGI/tinyclaw/pull/132) | feat: integrate OpenViking native flow and setup auto-bootstrap | ✅ 已合并 | @mczabca-boop | 将 OpenViking 集成从传统的 markdown 优先检索升级为原生架构（Session + Search + Memory），并保留了安全兼容的回退路径 |
| [#140](https://github.com/TinyAGI/tinyclaw/pull/140) | fix: respect tmux base-index and pane-base-index settings | ✅ 已合并 | @noqcks | 修复了 daemon 硬编码窗口索引导致使用自定义 tmux 配置（base-index=1）的用户出现静默失败的问题 |
| [#139](https://github.com/TinyAGI/tinyclaw/pull/139) | fix: propagate model/provider changes to agents | ✅ 已合并 | @axonstone | 修复了 `tinyclaw model` 和 `tinyclaw provider --model` 命令无法生效的 bug，现在可正确向所有匹配的 agent 传播配置变更 |

**待合并 PR (2个)：**

| PR | 标题 | 状态 | 贡献者 |
|---|---|---|---|
| [#150](https://github.com/TinyAGI/tinyclaw/pull/150) | feat(openviking): continuation after plugin hardening | 🔵 待合并 | @mczabca-boop |
| [#149](https://github.com/TinyAGI/tinyclaw/pull/149) | hardening: gate plugins, add hook timeouts, and sanitize metadata | 🔵 待合并 | @mczabca-boop |

> 📊 **合并率**: 5/7 ≈ **71%** | 当前有2个安全加固相关的 stacked PR 等待合并，预计将为项目带来插件加固、hook 超时控制、元数据清理等安全增强。

---

## 4. 社区热点

今日最活跃的讨论 Issue：

**#124 [OPEN] want more provider support [z.ai kimi opencode.zen openrouter]**
- 作者：[@takasungi](https://github.com/takasungi)
- 创建：2026-02-18 | 更新：2026-03-03
- 评论：4 条 | 👍：0
- 链接：https://github.com/TinyAGI/TinyAGI/tinyclaw/issues/124

**摘要**：用户希望增加更多 provider 支持（z.ai、kimi、opencode.zen、openrouter），原因是当使用更多 agent 时，Claude Code API 配额会快速消耗。

**分析**：这是当前唯一的新增/活跃 Issue，反映了用户对多 provider 扩展的强烈需求，以降低对单一 API 的依赖。当前 PR 中暂无直接对应实现，但 #139 的 model/provider 变更传播修复为此类扩展奠定了配置基础设施。

---

## 5. Bug 与稳定性

今日报告/修复的 Bug：

| Issue | 严重程度 | 描述 | 状态 | 对应 PR |
|-------|---------|------|------|---------|
| [#140](https://github.com/TinyAGI/tinyclaw/pull/140) | 🟡 中 | daemon 硬编码 tmux 窗口/面板索引，导致使用 `base-index=1` 配置的用户出现静默失败 | ✅ 已修复并合并 | #140 |
| [#139](https://github.com/TinyAGI/tinyclaw/pull/139) | 🟡 中 | `tinyclaw model` 和 `tinyclaw provider` 命令无法向 agent 传播配置变更 | ✅ 已修复并合并 | #139 |
| [#62](https://github.com/TinyAGI/tinyclaw/issues/62) | 🔴 高 | bug: model, reset and heartbeat doesn't work for multi-agents | ✅ 已关闭 | 未知 |

> 🔍 **#62** 虽已关闭，但 Issue 详情中未显示具体修复 PR，建议维护者确认是否已实际修复或作为重复项关闭。

---

## 6. 功能请求与路线图信号

今日新提出的功能需求：

| Issue | 功能请求 | 背景 | 预计可行性 |
|-------|---------|------|-----------|
| [#124](https://github.com/TinyAGI/tinyclaw/issues/124) | 增加多 provider 支持 (z.ai, kimi, opencode.zen, openrouter) | 用户面临 Claude Code API 配额快速耗尽的问题 | ⭐⭐⭐ 高 —— 已有 #139 修复作为基础设施支撑 |
| [#58](https://github.com/TinyAGI/tinyclaw/issues/58) | API 可访问性 (API endpoint + MCP option) | 家庭实验室用户希望能够暴露内部/本地网络 API，并可选开放公网访问 | ⭐⭐ 中 —— 已有讨论，需开发资源 |

**路线图信号**：
- **插件安全加固** (#149, #150)：当前 stacked PR 的核心主题，预计合并后将进入下一阶段
- **记忆系统增强** (#34)：QMD 记忆检索已成熟，下一版本可能继续深化记忆功能
- **多 provider 扩展** (#124)：用户明确诉求，可能成为下一版本的优先级需求

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的关键用户痛点与场景：

| 场景 | 痛点 | 满意度 |
|-----|------|-------|
| **多 agent 场景** | API 配额快速耗尽，渴望更多 provider 选择 | 😟 不满意 |
| **家庭实验室部署** | 缺乏 API 暴露能力，无法支持内部网络使用 | 😟 不满意 |
| **tmux 自定义配置** | 使用 `base-index=1` 时出现静默失败，难以排查 | 😟 不满意 |
| **多模型切换** | `tinyclaw model` 命令不生效，配置形同虚设 | 😟 不满意 |

**正面反馈**：
- #22 (So what's the difference between this and openclaw) 获得 2 👍，说明项目定位受到关注

---

## 8. 待处理积压

以下 Issue 值得关注但尚未得到积极响应：

| Issue | 标题 | 创建时间 | 状态 | 备注 |
|-------|------|---------|------|------|
| [#124](https://github.com/TinyAGI/tinyclaw/issues/124) | want more provider support | 2026-02-18 | OPEN | 活跃讨论中（4条评论），建议优先处理 |
| [#58](https://github.com/TinyAGI/tinyclaw/issues/58) | Feat: API accessible | 2026-02-14 | CLOSED | 已关闭，但未显示对应 PR，可能未实际解决 |
| [#62](https://github.com/TinyAGI/tinyclaw/issues/62) | bug: model, reset and heartbeat doesn't work for multi-agents | 2026-02-14 | CLOSED | 已关闭但无 PR 关联，需确认修复状态 |

> ⚠️ **提醒**：#58 和 #62 均已关闭但缺乏明确的修复路径说明，建议维护者确认实际状态，避免"假性关闭"导致的问题遗留。

---

## 📈 关键指标一览

| 指标 | 数值 | 评估 |
|-----|------|------|
| Issue 活跃度 | 4 条（新增1，关闭3） | ✅ 正常 |
| PR 合并率 | 71% (5/7) | ✅ 较高 |
| 开放 Issue 积压 | 1 条 | ✅ 较低 |
| 待合并 PR | 2 条 | ⚠️ 需关注合并队列 |

---

*报告生成时间：2026-03-03 | 数据来源：GitHub TinyClaw Repository*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*