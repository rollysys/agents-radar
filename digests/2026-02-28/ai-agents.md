# OpenClaw 生态日报 2026-02-28

> Issues: 500 | PRs: 500 | 覆盖项目: 10 个 | 生成时间: 2026-02-28 08:12 UTC

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

# OpenClaw 项目动态日报 (2026-02-28)

## 今日速览

过去 24 小时内，OpenClaw 项目保持极高的社区活跃度：共产生 **500 条 Issues 更新**（402 条新开/活跃，98 条关闭）和 **500 条 PR 更新**（400 条待合并，100 条已合并/关闭），但无新版本发布。今日社区讨论热点集中在 DingTalk 首次安装渠道支持、Custom API Provider 的 4096 token 上下文窗口缺陷、以及多个 macOS/Discord/代理相关的回归问题。项目整体处于高功能迭代期，多个channel扩展（TypeX、DeJoy）和安全特性（SecretRef扩展）正在积极开发中。

---

## 版本发布

**无新版本发布**

过去 24 小时内暂无 Release 更新。

---

## 项目进展

今日合并/关闭的重要 PR 及功能推进情况：

| PR | 标题 | 状态 | 说明 |
|---|---|---|---|
| [#29580](https://github.com/openclaw/openclaw/pull/29580) | feat(secrets): expand SecretRef coverage | OPEN | 扩展 SecretRef 支持范围，覆盖全部用户提供的凭据矩阵，含 onboarding/configure UX 更新 |
| [#29547](https://github.com/openclaw/openclaw/pull/29547) | feat: ACP client runtime | OPEN | 新增 ACP 客户端运行时，允许 OpenClaw 调用外部 ACP agent |
| [#29584](https://github.com/openclaw/openclaw/pull/29584) | feat(typex): add TypeX channel extension | OPEN | 新增 TypeX 渠道扩展，支持 QR 登录 |
| [#29427](https://github.com/openclaw/openclaw/pull/29427) | Add DeJoy channel extension | OPEN | 新增 DeJoy (Matrix兼容协议) 渠道 |
| [#29546](https://github.com/openclaw/openclaw/pull/29546) | fix(cron): return accepted run ticket | OPEN | 修复 cron 超时导致客户端误判失败的问题 |
| [#29484](https://github.com/openclaw/openclaw/pull/29484) | fix(discord): add circuit breaker for WebSocket resume loop | OPEN | 修复 Discord WebSocket 无限恢复循环 |
| [#29411](https://github.com/openclaw/openclaw/pull/29411) | feat(feishu): add markdown tables | OPEN | 飞书渠道支持 Markdown 表格渲染 |
| [#29545](https://github.com/openclaw/openclaw/pull/29545) | fix(agents): load bootstrap files from explicit agentDir | OPEN | 修复 agentDir 中的 bootstrap 文件被忽略的问题 |
| [#29578](https://github.com/openclaw/openclaw/pull/29578) | feat: add Ling series open weight provider | OPEN | 新增 Ant Ling 开源权重模型提供商及两个 1T 模型 |
| [#29279](https://github.com/openclaw/openclaw/pull/29279) | fix(gateway): allow required Google Fonts origins | CLOSED | 修复 Control UI Google Fonts CSP 阻挡问题 |

**项目整体向前推进**：今日 PR 活动主要聚焦于 **新渠道扩展** (TypeX、DeJoy、ACP客户端)、**Bug修复** (cron超时、Discord WebSocket、Agent bootstrap加载) 和 **安全性增强** (SecretRef扩展、Google Fonts CSP)，多条功能线并行推进。

---

## 社区热点

今日讨论最活跃的 Issues（按评论数排序）：

| Issue | 标题 | 评论数 | 状态 |
|---|---|---|---|
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | Add DingTalk as a first-install channel option | 22 | OPEN |
| [#21653](https://github.com/openclaw/openclaw/issues/21653) | Custom API providers defaulted to 4096-token context window | 20 | OPEN |
| [#4544](https://github.com/openclaw/openclaw/issues/4544) | Cannot change model to Ollama Deepseek-r1:latest | 17 | CLOSED |
| [#23538](https://github.com/openclaw/openclaw/issues/23538) | Anthropic setup-token auth returns 401 Invalid bearer token | 15 | OPEN |
| [#10287](https://github.com/openclaw/openclaw/issues/10287) | Feishu duplicate plugin id warning | 11 | CLOSED |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | Request: Prebuilt Android APK releases | 11 | OPEN |
| [#2102](https://github.com/openclaw/openclaw/issues/2102) | HTTP_PROXY is ignored | 10 | CLOSED |
| [#1797](https://github.com/openclaw/openclaw/issues/1797) | GitHub Copilot Enterprise accounts fail with HTTP 421 | 9 | CLOSED |

**热点分析**：
- **DingTalk 首次安装渠道** (22 评论)：用户强烈希望在首次设置向导中直接提供 DingTalk 选项，而非事后手动配置，反映了国内用户对钉钉集成的迫切需求
- **Custom API Provider 上下文窗口** (20 评论)：这是一个阻塞性 bug — 默认 4096 token 低于 Agent 最低要求的 16000 token，导致用户一配置自定义 API 就立即失败
- **Ollama Deepseek-r1 模型切换** (17 评论)：本地模型用户反馈无法在聊天中切换到已下载的模型
- **Anthropic 401 认证** (15 评论)：setup-token 认证方式在 2026.2.21-2 版本出现回归

---

## Bug 与稳定性

今日报告的关键 Bug、崩溃、回归问题（按严重程度排列）：

| Issue | 标题 | 严重程度 | 状态 |
|---|---|---|---|
| [#21653](https://github.com/openclaw/openclaw/issues/21653) | Custom API providers 4096-token context window causing immediate failure | **Critical** | OPEN (无 Fix PR) |
| [#23538](https://github.com/openclaw/openclaw/issues/23538) | Anthropic setup-token auth returns 401 on 2026.2.21-2 | **Critical** | OPEN (无 Fix PR) |
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | macOS v2026.2.26 arm64-only regression (Intel Mac crash) | **High** | OPEN (无 Fix PR) |
| [#26207](https://github.com/openclaw/openclaw/issues/26207) | setGlobalDispatcher breaks HTTP proxy in 2026.2.24 | **High** | OPEN |
| [#27053](https://github.com/openclaw/openclaw/issues/27053) | Typing indicator persists indefinitely after response (2026.2.24 regression) | **Medium** | OPEN |
| [#7694](https://github.com/openclaw/openclaw/issues/7694) | Message ordering conflict when user sends message during tool execution | **Medium** | OPEN |
| [#28835](https://github.com/openclaw/openclaw/issues/28835) | Telegram API Network request failed after upgrade v2026.2.23→v2026.2.26 | **Medium** | OPEN |
| [#27409](https://github.com/openclaw/openclaw/issues/27409) | Discord REST API fetch failed despite proxy enabled | **Medium** | OPEN |
| [#29134](https://github.com/openclaw/openclaw/issues/29134) | ACP runtime backend reports unavailable on Windows | **Medium** | OPEN |
| [#29186](https://github.com/openclaw/openclaw/issues/29186) | sessions_spawn timeout too tight (10s) for embedded mode | **Medium** | OPEN |

**稳定性评估**：今日出现 **3 个 Critical 级别问题**（Custom API 上下文窗口、Anthropic 401 认证、macOS arm64 回归），均为阻塞用户正常使用的回归或设计缺陷。2026.2.24 版本引入的代理和 HTTP 相关回归较为集中，建议优先排查。

---

## 功能请求与路线图信号

用户提出的新功能需求及纳入下一版本的可能性分析：

| Issue | 功能请求 | 可能性 | 依据 |
|---|---|---|---|
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | DingTalk 作为首次安装渠道选项 | **高** | 已有 PR 讨论，DingTalk 渠道支持已实现 (#10347)，仅差 UI 入口 |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 预构建 Android APK 发布 | **中** | 代码已在 `apps/android`，缺打包发布流程 |
| [#21176](https://github.com/openclaw/openclaw/issues/21176) | 添加 gemini-3.1-pro-preview 模型 | **中** | 模型已发布，需更新 provider 目录 |
| [#5279](https://github.com/openclaw/openclaw/issues/5279) | Agent 生命周期钩子事件 | **中** | 符合插件化架构方向 |
| [#21600](https://github.com/openclaw/openclaw/issues/21600) | Mission Control v1: 运行时概览仪表盘 | **中** | 已有社区原型实现 |
| [#11127](https://github.com/openclaw/openclaw/issues/11127) | SearXNG 作为搜索提供商 | **低** | 需自托管，对隐私友好但实现工作量中等 |
| [#28744](https://github.com/openclaw/openclaw/issues/28744) | Agent 接收并识别图片内容 (视觉能力) | **中** | 平台层面需支持图片传递，模型侧已支持 MiniMax-Vision |

---

## 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点、使用场景与满意度：

**用户痛点**：
1. **配置门槛过高**：DingTalk 渠道虽已实现但未在首次安装时提供选项，需用户自行研究配置
2. **自定义 API 体验差**：默认 4096 token 限制导致自定义 API 一用就崩溃，用户不知如何调整
3. **版本回归影响生产**：2026.2.24/26 版本在代理环境、macOS Intel、Telegram/Discord 连接等方面出现多个回归
4. **本地模型支持不完善**：Ollama Deepseek-r1 模型切换失败，本地模型用户反馈活跃

**满意方面**：
- 飞书渠道功能持续完善（今日新增 markdown tables、broadcast 支持）
- Discord WebSocket 无限循环问题已有 circuit breaker 修复 PR
- cron 任务超时误判问题已修复

**未满足预期**：
- 无预构建 Android APK，用户需自行编译
- 缺乏 Mission Control 运营仪表盘

---

## 待处理积压

长期未响应的关键 Issue 或 PR（超过 7 天无维护者回复）：

| Issue | 标题 | 创建时间 | 长期未响应原因 |
|---|---|---|---|
| [#8619](https://github.com/openclaw/openclaw/issues/8619) | Gateway install failed: launchctl bootstrap failed (macOS) | 2026-02-04 | macOS 安装问题，可能需要更详尽的环境信息 |
| [#11257](https://github.com/openclaw/openclaw/issues/11257) | Browser process orphaned when gateway restarts (memory leak) | 2026-02-07 | 需监控进程生命周期 |
| [#7116](https://github.com/openclaw/openclaw/issues/7116) | Telegram bot cannot receive files sent as attachment | 2026-02-02 | 文件处理链路问题 |
| [#20730](https://github.com/openclaw/openclaw/issues/20730) | memorySearch BM25 does not work for CJK text | 2026-02-19 | FTS5 tokenizer 需支持 CJK |
| [#18874](https://github.com/openclaw/openclaw/issues/18874) | Ollama local model never responds (CPU-only) | 2026-02-17 | CPU 环境下的流式响应问题 |
| [#16652](https://github.com/openclaw/openclaw/issues/16652) | Telegram default provider not starting when accounts exist | 2026-02-15 | 多账户场景初始化逻辑缺陷 |

**提醒**：上述 Issue 多数超过 10 天未得到维护者响应，建议优先处理涉及用户体验阻塞的问题（如 #8619 安装失败、#20730 CJK 搜索）。

---

*本报告基于 GitHub 数据自动生成，仅供参考*

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**报告周期：2026-02-28**

---

## 1. 生态全景

2026年2月下旬，个人 AI 助手与自主智能体开源生态呈现**多极分化、并行演进**的格局。核心项目 OpenClaw 保持超高迭代节奏（单日 500 条 Issue/PR 更新），而其衍生项目 Zeroclaw、NanoClaw、IronClaw 等在垂直场景持续深耕。生态整体从“功能验证期”迈入“工程化落地期”，多渠道集成（钉钉、飞书、WhatsApp、Signal）、多 provider 支持（Ollama、Anthropic、GLM、DeepSeek）、Agent 记忆与工具编排成为共同技术焦点。与此同时，**稳定性问题**（版本回归、平台兼容性）集中显现，反映出快速迭代与质量保障之间的张力。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PR (24h) | Release | 社区健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500 (402 活跃/新开) | 500 (400 待合并) | ❌ 无 | 🔥 极高迭代期，功能爆炸式增长，但存在 3 个 Critical Bug 未修复 |
| **Zeroclaw** | 41 (34 已关闭) | 50 (29 已合并) | ❌ 无 | 🟢 高频迭代，经济模块 Phase 1 已合并，生产可用性提升 |
| **LobsterAI** | 25 | 21 | ✅ v0.1.22 | 🟢 高频迭代，多 IM 渠道接入加速 |
| **NanoBot** | 30 (23 活跃) | 73 (41 待合并) | ❌ 无 | 🔥 最高 PR 吞吐量，多通道安全性增强显著 |
| **PicoClaw** | 60 (44 活跃) | 96 (66 待合并) | ❌ 无 | 🔥 活跃度仅次于 OpenClaw，WeCom/MCP/Windows 多线推进 |
| **NanoClaw** | 3 | 35 (28 待合并) | ❌ 无 | 🟢 功能推进有序，Signal 通道、交互抽象层即将合并 |
| **IronClaw** | 4 | 24 (13 待合并) | ❌ 无 | 🟢 PTC/WASM/Avian Provider 多点突破，架构优化进行中 |
| **ZeptoClaw** | 1 | 2 (1 待合并) | ❌ 无 | 🟡 低活跃度，MCP stdio transport 已合并，功能稳定 |
| **TinyClaw** | 0 | 8 (4 待合并) | ❌ 无 | 🟡 稳定迭代，插件系统重构中 |
| **EasyClaw** | 1 (已关闭) | 0 | ✅ v1.5.11/12 | ⚪ 维护模式，聚焦文档与兼容性 |

> **活跃度分级**：🔥 高于 50 条 PR/日 → 极活跃；🟢 20-50 条 → 活跃；🟡 5-20 条 → 稳定；⚪ <5 条 → 维护

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心参照地位

OpenClaw 是生态中**事实上的技术基准与功能标杆**。其迭代规模超出同量级项目 5-10 倍：

- **Issue/PR 吞吐量**：500 条/日 vs. 第二梯队 50-100 条/日
- **功能覆盖面**：今日并行推进 9 条功能线（TypeX、DeJoy、ACP 客户端、SecretRef、Ling 系列模型等）
- **社区响应**：热点 Issue 均在 24 小时内获得维护者关注（尽管 Fix PR 覆盖率不足）

### 3.2 技术路线差异

| 维度 | OpenClaw | 衍生项目 | 差异点 |
|---|---|---|---|
| **架构策略** | 全功能平台，涵盖 20+ 渠道 | 聚焦单一场景（Zeroclaw 经济、NanoClaw 多通道） | OpenClaw 做“加法”，衍生项目做“减法” |
| **迭代节奏** | 日均 500 条更新，质量风险高 | 20-50 条更新，代码审查更充分 | OpenClaw 优先功能覆盖，衍生项目优先稳定性 |
| **生态定位** | 核心参照 + API 标准制定者 | 功能补充 + 垂直场景深耕 | OpenClaw 定义接口规范，其他项目跟随实现 |

### 3.3 社区规模对比

OpenClaw 的热点 Issue 讨论量（22 条评论 / DingTalk）显著高于其他项目，反映出**开发者注意力资源的高度集中**。衍生项目虽功能专精，但社区规模约为 OpenClaw 的 **10%-20%**（以 Issue 评论数衡量）。

---

## 4. 共同关注的技术方向

### 4.1 多渠道即时通讯集成

**涉及项目**：OpenClaw、LobsterAI、NanoBot、PicoClaw、NanoClaw、IronClaw

| 渠道 | 项目 | 状态 |
|---|---|---|
| 钉钉 (DingTalk) | OpenClaw, NanoBot | OpenClaw 首次安装选项热论中；NanoBot 群聊支持已合并 |
| 飞书 (Feishu) | OpenClaw, LobsterAI, NanoBot | Markdown 表格、消息提取优化进行中 |
| WhatsApp | PicoClaw, NanoClaw | PicoClaw 推理泄漏已修复；NanoClaw 重连优化待合并 |
| Signal | NanoClaw, IronClaw | NanoClaw Signal 通道待合并 |
| 企业微信 (WeCom) | PicoClaw | PR #893 审核中 |

> **趋势**：中国 IM 渠道（钉钉、飞书、企业微信）是差异化竞争焦点，海外项目（Signal、WhatsApp）侧重隐私与全球化场景。

### 4.2 本地模型与 Ollama 支持

**涉及项目**：OpenClaw、LobsterAI、NanoBot、PicoClaw

| 问题 | 项目 | 严重程度 |
|---|---|---|
| Ollama 连接超时/无响应 | LobsterAI (#150) | 🔴 高 |
| Ollama 模型切换失败 | OpenClaw (#4544) | 🟡 已关闭 |
| 本地 Ollama API Key 配置困惑 | PicoClaw (#109) | 🔴 高 |
| Ollama CPU-only 流式响应 | OpenClaw (#18874) | 🔴 高（积压 10 天） |

> **趋势**：本地部署是 2026 年重要需求方向，但各项目均在连接稳定性、模型配置、Token 上下文等方面存在技术债。

### 4.3 MCP (Model Context Protocol) 协议支持

**涉及项目**：ZeptoClaw、PicoClaw、IronClaw

| 项目 | 进展 | 意义 |
|---|---|---|
| ZeptoClaw | ✅ stdio transport 已合并 (#192) | 首个完成 HTTP + stdio 双传输的项目 |
| PicoClaw | 🔄 PR #282 进行中 | Docker 部署场景的 MCP 工具集成 |
| IronClaw | 🆕 PR #408 (PTC) 关联 | 程序化工具调用与 MCP 理念互补 |

> **趋势**：MCP 已从“协议规范”进入“实现落地”阶段，传输层抽象（HTTP vs stdio）是当前工程化焦点。

### 4.4 成本追踪与经济模块

**涉及项目**：Zeroclaw（主导）、OpenClaw（SecretRef 扩展）

| 项目 | 功能 | 状态 |
|---|---|---|
| Zeroclaw | Economic Agents Phase 1 | ✅ 已合并 (#2134) |
| Zeroclaw | Provider Token 使用量接入 CostObserver | ✅ 已合并 (#2167) |
| OpenClaw | SecretRef 扩展（凭据矩阵全覆盖） | 🔄 PR #29580 Open |

> **趋势**：Agent 经济自感知是新兴需求，Zeroclaw 领先一个身位，OpenClaw 侧重安全凭据管理。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心功能 | 目标用户 |
|---|---|---|
| **OpenClaw** | 全渠道 + 全 provider + 全功能覆盖 | 开发者首选基准、平台构建者 |
| **Zeroclaw** | 经济模块 + 成本追踪 | 企业财务监控、Agent 运营者 |
| **LobsterAI** | 网易系 IM 接入 + 火山引擎模型 | 国内企业用户、网易生态开发者 |
| **PicoClaw** | 硬件网关 + 多渠道 + MCP | 边缘部署、物联网场景 |
| **NanoClaw** | 多通道统一交互抽象 + Signal | 隐私优先用户、跨平台个人助手 |
| **IronClaw** | PTC + WASM + Avian Provider | 高级开发者、NEAR 生态集成 |
| **TinyClaw** | 轻量插件系统 | 个人极简部署 |
| **EasyClaw** | 文档完善 + macOS 兼容性 | 非技术用户、入门体验 |

### 5.2 技术架构差异

| 架构维度 | OpenClaw | PicoClaw | IronClaw | NanoClaw |
|---|---|---|---|---|
| **核心语言** | Go (推测) | Go | Rust | Python |
| **协议扩展** | ACP 客户端运行时 | MCP 工具 (Docker) | PTC (Programmatic Tool Calling) | channel-agnostic 抽象层 |
| **部署模式** | 云端 + 嵌入式 | 网关 + 边缘 | 云实例优先 | 容器化优先 |
| **安全特性** | SecretRef 凭据矩阵 | 暂无 | OpenTelemetry (待合并) | 暂无 |

### 5.3 目标用户分层

```
高端开发者 / 平台构建者
        │
        ▼
OpenClaw ◄───────────► Zeroclaw (企业财务)
        │                  │
        │            PicoClaw (边缘网关)
        │
        ▼
NanoBot / NanoClaw (多通道助手)
        │
        ▼
LobsterAI (国内 IM) ◄──► EasyClaw (入门用户)
        │
        ▼
TinyClaw (极简部署)
```

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

| 层级 | 项目 | 特征 |
|---|---|---|
| **🔥 快速迭代期** | OpenClaw, NanoBot, PicoClaw | 日均 50+ PR，功能快速演进，代码质量风险与机遇并存 |
| **🟢 成长巩固期** | Zeroclaw, LobsterAI, NanoClaw, IronClaw | 20-50 PR/日，功能专精化，开始关注稳定性与工程化 |
| **🟡 稳定维护期** | ZeptoClaw, TinyClaw | <20 PR/日，聚焦核心功能打磨 |
| **⚪ 文档/兼容性期** | EasyClaw | 版本迭代聚焦用户体验与跨平台兼容 |

### 6.2 成熟度信号

**质量提升迹象**：
- Zeroclaw 连续三天推动 dev → main 稳定版合并（#2003/#2002/#2001）
- PicoClaw 区分网络超时与上下文窗口错误（#681），错误处理粒度细化
- IronClaw 引入 OpenTelemetry PR #334，涵盖大量正确性与安全修复

**需关注的风险**：
- OpenClaw 3 个 Critical Bug 超过 48 小时无 Fix PR（#21653, #23538, #28877）
- PicoClaw 积压 6 个高优先级 Issue 超过 10 天（#75, #68, #116）
- NanoClaw WhatsApp 连接恢复后容器执行失败（#553）阻塞核心功能

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势提炼

| 趋势 | 证据 | 对开发者建议 |
|---|---|---|
| **多通道统一交互抽象** | NanoClaw PR #568 (channel-agnostic)、NanoBot 多渠道安全增强 | 投资统一交互层设计，避免重复适配 |
| **Agent 经济自感知** | Zeroclaw 经济模块 Phase 1 合并、OpenClaw SecretRef 扩展 | 成本追踪将成为企业级 Agent 标配 |
| **本地部署刚需** | Ollama 相关 Issue 占各项目热点 30%+ | 优化本地模型连接稳定性将是差异化关键 |
| **MCP 协议落地** | ZeptoClaw (stdio)、PicoClaw (Docker)、IronClaw (PTC) | 2026 年是 MCP 工具生态分水岭，需跟进 |
| **隐私优先通信** | Signal 通道需求（NanoClaw #499）、SimpleX Chat 请求（IronClaw #402） | 端到端加密通信将成为高级助手标配 |

### 7.2 开发者决策参考

1. **技术选型**：如需快速原型 → NanoBot；需企业级稳定 → Zeroclaw；需边缘部署 → PicoClaw
2. **生态参与**：跟随 OpenClaw 接口规范可确保兼容性；关注 Zeroclaw 经济模块可预判下一阶段需求
3. **风险规避**：避免在 Critical Bug 高发期（OpenClaw 当前）直接用于生产；优先选择已合并稳定版 PR 的项目
4. **差异化机会**：中国 IM 渠道（钉钉/飞书/企业微信）集成仍是蓝海；MCP 工具生态尚在早期，工具桥接层有创业空间

---

*本报告基于 2026-02-28 GitHub 公开数据生成，供技术决策者与开源生态参与者参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-02-28）

## 1. 今日速览

昨日项目活跃度较高，共处理 41 条 Issue 更新（34 条已关闭）和 50 条 PR 更新（29 条已合并）。社区贡献集中在经济模块（Economic Agents Phase 1）、PowerPoint 阅读工具、Cost Tracking 功能补全等方面。代码库持续保持高频迭代，多个长期积累的功能需求在本周期完成合并，显示出项目对生产可用性的持续追求。

---

## 2. 版本发布

**无新版本发布**

近期合并的 PR 包括 v0.1.6 版本的相关变更（PR #1331、#1374），但昨日无新版本标签发布。

---

## 3. 项目进展

### 核心功能合并

| PR | 描述 | 合并状态 |
|---|---|---|
| **#2134** | **ZeroClaw Economic Agents - Phase 1 Foundation** - 添加完整的经济追踪模块，支持成本 vs 价值分析，为经济自感知 AI 代理奠定基础 | ✅ 已合并 |
| **#2167** | **feat(cost): wire provider token usage to cost tracking** - 将 Provider Token 使用量接入 CostObserver，实现费用追踪 UI 的数据填充 | ✅ 已合并 |
| **#2156** | **feat(tools): add pptx_read tool** - 新增 PowerPoint 文本提取工具，补全 Office 文档支持（继 pdf_read、docx_read 之后） | ✅ 已合并 |
| **#2133** | **feat(tools): add Chrome/Firefox/Edge support to browser_open** - 扩展浏览器工具支持，不再仅限于 Brave | ✅ 已合并 |
| **#2174** | **fix(provider): remove shadowed routes variable** - 修复自定义路由 Provider 初始化失败问题 | ✅ 已合并 |
| **#2056** | **feat(shell): Enhance PowerShell command execution and Chinese encoding** - 增强 Windows 平台 PowerShell 执行及中文编码处理 | ✅ 已合并 |

### 批量合并

- **PR #2003 / #2002 / #2001**: 连续三天推动 dev 分支稳定版至 main，解决主分支编译/安装中断问题
- **PR #2163**: 批量更新依赖（shellexpand、chrono、rustls）
- **PR #2164**: 升级 zip 库至 8.1.0

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 标题 | 评论数 | 热度分析 |
|---|---|---|---|
| **#1856** | [Feature] Multi-User TOTP Enrollment and Role-Based Permissions | 7 | 多用户 TOTP 认证与基于角色的权限控制，是企业级部署核心需求 |
| **#88** | Feature parity checklist: OpenClaw → ZeroClaw migration blockers | 6 | 20👍，生产环境用户反馈 OpenClaw 迁移痛点，RAM 占用问题受关注 |
| **#2055** | [Bug] Cannot compile with channel-matrix | 6 | 编译错误阻止特性使用，影响开发者体验 |
| **#1469** | [Bug] Telegram voice transcription not triggering | 6 | Telegram 语音转文字功能失效，频道集成问题 |
| **#2072** | [Bug] 有没有win10跑通的 | 4 | 中文用户反馈 Windows 10 兼容性，Agent 操作未执行 |

### 热点 PR

| PR | 描述 | 状态 |
|---|---|---|
| **#2138** | RMN-2138: Revert b27b448 with conflict-safe resolution | 🔵 Open |
| **#1767** | chore(deps): bump tokio-postgres-rustls | 🔵 Open |
| **#2056** | feat(shell): PowerShell + Chinese encoding (Windows) | ✅ Merged |
| **#2130** | feat(tools): add pptx_read tool | 🔵 Open |

---

## 5. Bug 与稳定性

### 严重（S0-S1）Bug

| Issue | 描述 | 状态 |
|---|---|---|
| **#2055** | 编译报错：channel-matrix 特性无法编译 | ✅ 已关闭 |
| **#2084** | x86_64 Release 在 ubuntu22.04 上 glibc 版本不匹配 | ✅ 已关闭 |
| **#2083** | Debian 12 不支持 | ✅ 已关闭 |
| **#2060** | 多字节 UTF-8 字符导致 panic: byte index not a char boundary | ✅ 已关闭 |
| **#2066** | Docker bootstrap 报错：No such file or directory | ✅ 已关闭 |
| **#2041** | Windows 平台编译失败 | ✅ 已关闭 |

### 中等（S2）Bug

| Issue | 描述 | 状态 |
|---|---|---|
| **#2107** | Anthropic 模型视觉检测损坏 | ✅ 已关闭 |
| **#2047** | Slack Socket Mode 支持缺失（轮询浪费 API 限额） | ✅ 已关闭 |

### 已修复但值得关注

| Issue | 描述 | 相关 PR |
|---|---|---|
| **#1961** | Telegram 群组未授权用户被错误提示 "bind-telegram" | #1961 Open |

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

| Issue | 功能 | 预期版本 | 关联 PR |
|---|---|---|---|
| **#2079** | **GitHub 作为原生通道** - 代理可观察和响应 Repo 活动（Issues、PRs、评论） | 未来版本 | — |
| **#2111** | **Cost Tracking 实际工作** - 费用追踪 UI 填充真实数据 | ✅ 已通过 #2167 实现 | #2167 |
| **#2129** | **pptx_read 工具** - PowerPoint 文本提取 | ✅ 已通过 #2156/#2130 实现 | #2156 |
| **#2128** | **NO_REPLY 哨兵过滤** - Cron 心跳任务返回 "NO_REPLY" 时不推送到通道 | ✅ 已关闭 | — |
| **#2089** | **混合 Memory Backend** - SQLite (FTS) + Qdrant (向量搜索) | 规划中 | — |
| **#2152** | **Result-aware loop detection** - 代理工具调用循环的提前干预 | 🔵 Open | — |

### 持续性功能增强

- **多用户权限体系**（#1856）：企业级部署必需
- **Feishu/Lark 原生 Cron 推送**（#1715）：对齐现有频道支持
- **DingTalk 回归测试覆盖**（#2151）：中国生态补全

---

## 7. 用户反馈摘要

### 痛点

1. **编译/兼容性**
   - Debian 12、Ubuntu 22.04 glibc 版本问题（#2083、#2084）
   - Windows 10/11 编译失败、PowerShell 中文乱码（#2072、#2041）
   - channel-matrix 编译报错（#2055）

2. **功能缺失**
   - Cost Tracking 界面无数据（#2111）
   - Telegram 语音转文字不触发（#1469）
   - PPTX 文件无法读取（#2129）

3. **生产环境性能**
   - OpenClaw 迁移阻塞：RAM 占用高（#88，20 👍）
   - Slack API 轮询频率限制（#2047）

### 正面反馈

- **#88** 获得 20 个 👍，说明用户对 ZeroClaw 高度关注迁移路径
- 经济模块（Economic Agents Phase 1）的完整实现获得积极评价
- 多位贡献者（@Preventnetworkhacking、@reidliu41、@chumyin）持续输出高质量 PR

---

## 8. 待处理积压

### 长期未响应 Issue

| Issue | 描述 | 创建时间 | 状态 |
|---|---|---|---|
| **#88** | OpenClaw → ZeroClaw 迁移阻塞清单 | 2026-02-15 | 🔵 Open（6 评论） |
| **#2079** | GitHub 作为原生通道 | 2026-02-27 | 🔵 Open（2 评论） |
| **#1961** | Telegram 未授权用户错误提示 | 2026-02-26 | 🔵 Open |

### 建议关注

- **#88**（迁移阻塞）拥有最高社区热度（20 👍），建议维护者尽快评估并发布迁移指南
- **#2079**（GitHub 通道）是原生集成关键需求，建议纳入路线图
- 依赖更新频繁（昨日 5+ 条 dependabot PR），建议自动化测试覆盖

---

*报告生成时间：2026-02-28 | 数据来源：GitHub Zeroclaw Labs*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-02-28)

## 1. 今日速览

过去24小时内，EasyClaw 项目保持稳定迭代节奏，共发布 **2 个新版本** (v1.5.11 和 v1.5.12)，社区活跃度较低。Issue 方面仅产生 1 条更新记录，为已关闭的模型列表匹配问题；PR 层面无任何动态。整体项目处于常规维护状态，版本迭代平稳但社区参与度有限。

---

## 2. 版本发布

### v1.5.12 已发布 ✅

**发布时间**: 2026-02-28 (推测)

本次更新主要面向 **macOS 用户**提供 Gatekeeper 签名问题的官方解决方案。更新内容聚焦于用户体验优化，未涉及核心功能变更或破坏性变更。

**更新亮点**:
- 新增 macOS 安装引导文档，明确说明 Gatekeeper 拦截非签名应用的误报提示
- 提供 Terminal 命令行修复步骤 (`xattr -cr`)

**迁移注意事项**: 无需特殊迁移，已存在的用户升级后可参考新文档解决 macOS 兼容性问题。

**下载链接**: https://github.com/gaoyangz77/easyclaw/releases/tag/v1.5.12

---

### v1.5.11 已发布 ✅

**发布时间**: 2026-02-27/28 (推测)

作为 v1.5.12 的前序版本，该版本同步包含 macOS 安装说明文档的更新，属于小版本迭代。

**变更内容**:
- 同 v1.5.12，补充 macOS Gatekeeper 问题处理文档

**迁移注意事项**: 无破坏性变更。

**下载链接**: https://github.com/gaoyangz77/easyclaw/releases/tag/v1.5.11

---

## 3. 项目进展

过去24小时内 **无 PR 合并或关闭**。

项目当前无正在推进的功能开发或重大修复，版本迭代主要聚焦于文档完善和用户体验优化。如有功能开发需求，建议关注后续版本更新。

---

## 4. 社区热点

### Issue #2: easyclaw接入百炼coding plan后，客户端显示的模型列表与官方支持的不匹配 (已关闭 ✅)

| 维度 | 数据 |
|------|------|
| 作者 | @slowayear |
| 创建时间 | 2026-02-27 |
| 状态 | **CLOSED** |
| 评论数 | 3 |
| 点赞数 | 0 |

**问题概述**: 用户在使用 Windows 版 EasyClaw (v1.5.10) 接入百炼 coding plan 时，发现客户端显示的模型列表与官方支持的模型不匹配。

**热度分析**: 该 Issue 收到了 **3 条评论**，是过去24小时内唯一产生讨论的 Issue，反映出用户在多平台模型集成方面存在实际痛点。问题可能涉及 API 对接层的模型映射逻辑。

**链接**: https://github.com/gaoyangz77/easyclaw/issues/2

---

## 5. Bug 与稳定性

### 报告的 Bug (按严重程度排序)

| 严重程度 | Issue 描述 | 状态 | 是否有 Fix PR |
|----------|------------|------|---------------|
| **中** | 百炼 coding plan 客户端模型列表与官方不匹配 | **已关闭** | 未知 (Issue 已关闭) |

**分析**: 唯一报告的 Bug 已关闭，但关闭原因未明确说明（是否真正修复需进一步确认）。建议维护者关注此类模型对接问题的长期稳定性。

---

## 6. 功能请求与路线图信号

过去24小时内 **无新增功能请求**。

结合近期版本更新（v1.5.11/v1.5.12 聚焦于文档完善），项目当前路线图可能侧重于：
- 基础体验优化
- 文档建设
- 跨平台兼容性提升

如社区有新增功能需求，建议通过 Issue 提出以便纳入版本规划。

---

## 7. 用户反馈摘要

从 Issue #2 评论中提炼的用户痛点：

**核心诉求**:
- **模型对接准确性**: 用户反馈 EasyClaw 客户端显示的模型列表与百炼官方不匹配，影响实际使用体验
- **版本兼容性**: 用户已升级至 v1.5.10，但问题依然存在

**使用场景**:
- Windows 平台用户接入百炼 coding plan 服务

**满意度信号**:
- Issue 已关闭，但用户是否满意解决方案未知
- 0 点赞说明该问题影响范围可能有限或用户倾向于直接解决问题而非点赞

---

## 8. 待处理积压

### 长期未响应的 Issue / PR

**当前无积压问题**。

- Issue 板块: 1 条记录已关闭，无长期挂起问题
- PR 板块: 0 条记录，无待处理请求

**维护建议**: 项目整体处理效率良好，建议继续保持 Issue 响应节奏。

---

*报告生成时间: 2026-02-28 | 数据来源: GitHub (gaoyangz77/easyclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-02-28)

## 1. 今日速览

LobsterAI 今日保持高频迭代节奏，过去24小时内共处理 **25 条 Issues** 和 **21 条 PR**，并发布了 **v0.1.22** 新版本。项目在多 IM 渠道接入（网易小蜜蜂）、OAuth 能力扩展、云信 NIM 富媒体支持等方面持续推进。但与此同时，社区反馈的问题数量较多，尤其集中在 **Ollama 本地模型调用**、**Windows 系统兼容性** 及 **多平台 IM 消息路由** 三个领域，需重点关注。

---

## 2. 版本发布

### v0.1.22 发布

**发布说明**：本次更新聚焦于应用内更新机制和定时任务 IM 通知能力的增强。

| 功能 | 关联 PR | 贡献者 |
|------|--------|--------|
| 支持应用内自动更新 | [#154](https://github.com/netease-youdao/LobsterAI/pull/154), [#155](https://github.com/netease-youdao/LobsterAI/pull/155) | @liuzhq1986 |
| 增强定时任务 IM 通知：支持媒体发送、通知目标持久化 | [#147](https://github.com/netease-youdao/LobsterAI/pull/147) | @liugang519 |
| About 页面优化 | [#159](https://github.com/netease-youdao/LobsterAI/pull/159) | @fisherdaddy |

> **迁移注意事项**：暂无破坏性变更。应用内更新功能此前缺失，本次补齐后用户需重新登录以完成更新流程。

---

## 3. 项目进展

过去24小时，项目合并/关闭了 **15 个 PR**，持续引入新功能并修复问题：

| PR | 状态 | 核心内容 |
|----|------|----------|
| [#172](https://github.com/netease-youdao/LobsterAI/pull/172) | OPEN | **Antigravity OAuth 接入**：新增 OAuth 子系统，支持登录、模型同步、配置持久化，打通现有 Cowork/OpenAI 兼容代理链路 |
| [#158](https://github.com/netease-youdao/LobsterAI/pull/158) | OPEN | **网易小蜜蜂接入**：新增 XiaomifengGateway，支持小蜜蜂平台消息收发，与钉钉、飞书、Telegram、Discord、云信并列 |
| [#128](https://github.com/netease-youdao/LobsterAI/pull/128) | OPEN | **云信 NIM 富媒体消息**：支持图片/音频/视频/文件收发、配置热更新、账号白名单 |
| [#162](https://github.com/netease-youdao/LobsterAI/pull/162) | OPEN | **多 Custom 模型配置**：扩展 customProviders[]，支持多个自定义模型提供商，避免同名模型冲突 |
| [#127](https://github.com/netease-youdao/LobsterAI/pull/127) | OPEN | **修复默认模型设置**：合并后自动选择首个启用的 provider 作为 activeProvider，避免使用旧配置中的 stale baseUrl |
| [#149](https://github.com/netease-youdao/LobsterAI/pull/149) | CLOSED | **Ollama 模型编辑 UX 优化**：明确「模型名称」与「显示名称」字段含义，修正默认 baseUrl 和 apiFormat |
| [#107](https://github.com/netease-youdao/LobsterAI/pull/107) | CLOSED | **火山引擎模型接入**：新增 Volcengine 提供商，支持 Anthropic/OpenAI 双协议及 Coding Plan |
| [#115](https://github.com/netease-youdao/LobsterAI/pull/115) | CLOSED | **修复 Windows 系统路径问题**：确保 System32 目录和关键环境变量可用，修复用户安装工具找不到的问题 |
| [#104](https://github.com/netease-youdao/LobsterAI/pull/104) | CLOSED | **修复 MiniMax 兼容性问题**：合并多条 system message，修复 unknown model 错误 |

---

## 4. 社区热点

以下 Issues 今日讨论最为活跃，反映出用户的核心关切：

| Issue | 评论数 | 热度分析 |
|-------|--------|----------|
| [#89](https://github.com/netease-youdao/LobsterAI/issues/89) - 添加邮箱的作用是什么？ | 5 | 用户对邮箱功能定位不清晰，疑问其是否仅用于技能收发信还是可像飞书一样直接对话。IM 通知渠道中缺少邮箱选项导致困惑。**建议**：在文档或 UI 中明确邮箱用途。 |
| [#150](https://github.com/netease-youdao/LobsterAI/issues/150) - 没法用，用ollama本地部署模型 | 4 | 用户反馈 Ollama 本地部署模型完全无法使用，附带了截图但链接失效。**关联** PR #149 已优化 Ollama 模型编辑 UX，但实际连接问题仍待排查。 |
| [#102](https://github.com/netease-youdao/LobsterAI/issues/102) - 飞书/钉钉机器人需要低门槛 IM 接入 | 3 | 飞书和钉钉均需企业组织审核，用户呼吁提供更低门槛的接入方式（如 QQ 机器人）。**已有关注**：PR #158 刚接入网易小蜜蜂，或可缓解部分需求。 |
| [#174](https://github.com/netease-youdao/LobsterAI/issues/174) - 希望加强调用Ollama的能力 | 1 | 用户反馈从 0.1.17 到 0.1.22 各版本 Ollama 均无法成功使用，报 Request timed out 或不停转圈问题。**建议**：优先排查 Ollama 连接稳定性。 |

---

## 5. Bug 与稳定性

以下问题按严重程度排列，部分已有 fix PR 或正在处理中：

| Issue | 严重程度 | 状态 | 说明 |
|-------|----------|------|------|
| [#150](https://github.com/netease-youdao/LobsterAI/issues/150) | **高** | OPEN | Ollama 本地部署模型完全无法使用，影响本地化部署用户 |
| [#144](https://github.com/netease-youdao/LobsterAI/issues/144) | **高** | OPEN | Windows 11 报错 404 not found，疑似 API 调用问题 |
| [#141](https://github.com/netease-youdao/LobsterAI/issues/141) | **中** | OPEN | 沙箱读取文件出错，路径拼接错误，需检查文件路径逻辑 |
| [#153](https://github.com/netease-youdao/LobsterAI/issues/153) | **高** | OPEN | MacBook Pro M1 (ARM64) 安装后无法打开，疑似启动问题 |
| [#164](https://github.com/netease-youdao/LobsterAI/issues/164) | **中** | OPEN | Windows 下 bash 命令编码问题（UTF-8 vs GBK），导致乱码 |
| [#173](https://github.com/netease-youdao/LobsterAI/issues/173) | **中** | OPEN | 飞书 IM 消息阻塞堆积，重启后一次性返回大量消息 |
| [#181](https://github.com/netease-youdao/LobsterAI/issues/181) | **低** | OPEN | Telegram 机器人在群组中无法仅在 @ 时回复，会全部回复 |
| [#180](https://github.com/netease-youdao/LobsterAI/issues/180) | **中** | OPEN | Linux 下 cp 和 Read 工具报没有权限，但有写权限 |
| [#178](https://github.com/netease-youdao/LobsterAI/issues/178) | **中** | OPEN | Nvidia LLM API 连接失败，使用 custom config 配置 |
| [#143](https://github.com/netease-youdao/LobsterAI/issues/143) | **中** | **CLOSED** | 图片/PDF 文件识别错误，已关闭（可能已在其他版本修复） |

> **标注**：已关闭 Issue #143 如问题仍存在，需重新开帖确认。

---

## 6. 功能请求与路线图信号

以下功能需求已通过 Issue 明确提出，部分与今日 PR 方向吻合：

| Issue | 需求描述 | 潜在纳入判断 |
|-------|----------|--------------|
| [#174](https://github.com/netease-youdao/LobsterAI/issues/174) | 加强 Ollama 调用能力，解决连接超时、无反应问题 | **高优先级**，PR #149 已优化 UX，需继续修复底层连接 |
| [#176](https://github.com/netease-youdao/LobsterAI/issues/176) | 任务记录分组、笔记功能（支持 Markdown、导出 docx/pdf/html）、SKILL 内置编辑 | **功能丰富**，可考虑纳入 Roadmap |
| [#102](https://github.com/netease-youdao/LobsterAI/issues/102) | 低门槛 IM 机器人接入（如 QQ 机器人） | **中等优先级**，PR #158 已接入小蜜蜂，可继续扩展 |
| [#179](https://github.com/netease-youdao/LobsterAI/issues/179) | IM 启动新会话功能 | **功能点**，需评估实现复杂度 |
| [#168](https://github.com/netease-youdao/LobsterAI/issues/168) | 内置强数学能力 Skill | **差异化竞争力**，可评估接入 |
| [#166](https://github.com/netease-youdao/LobsterAI/issues/166) | 识别客户端 vs IM 渠道，决定文件发送路径 | **IM 路由逻辑优化**，用户体验相关 |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的核心用户痛点与诉求：

1. **Ollama 本地模型调用不Work**：多位用户反馈从旧版本到新版本均无法正常使用 Ollama，表现为超时、无响应。这是本地化部署的核心场景，亟需解决。

2. **Windows 兼容性遗留问题**：编码乱码（#164）、系统路径缺失（#115 刚修复）、覆盖安装失败（#169）、应用更新逻辑（#140/#154）等，用户在 Windows 环境下遇到多重障碍。

3. **IM 渠道体验割裂**：
   - 邮箱功能定位模糊（#89）
   - 飞书/钉钉需企业审核（#102）
   - 飞书消息阻塞（#173）、语音消息收不到（#165）、无法识别客户端 vs IM（#166）

4. **产品功能丰富度期待**：任务分组、笔记、Skill 内置编辑（#176）等功能表明进阶用户希望将 LobsterAI 作为生产力工具深度使用。

---

## 8. 待处理积压

以下 Issue 值得关注但尚未得到积极响应，建议维护者重点跟进：

| Issue | 积压时长 | 状态 | 提醒 |
|-------|----------|------|------|
| [#169](https://github.com/netease-youdao/LobsterAI/issues/169) - 实现不了覆盖安装 | 1天 | OPEN | v0.1.22 已发布 App Update 功能，需验证是否解决覆盖安装问题 |
| [#140](https://github.com/netease-youdao/LobsterAI/issues/140) - 为什么不能自动更新？ | 2天 | **CLOSED** | 已关闭，v0.1.22 已发布更新功能，需确认用户是否买账 |
| [#89](https://github.com/netease-youdao/LobsterAI/issues/89) - 邮箱作用不清晰 | 4天 | OPEN | 5条评论，需官方明确功能定位或补充文档 |
| [#102](https://github.com/netease-youdao/LobsterAI/issues/102) - 低门槛 IM 接入 | 3天 | OPEN | 长期需求，已有部分进展（小蜜蜂接入），需持续关注 |
| [#166](https://github.com/netease-youdao/LobsterAI/issues/166) - 识别不了客户端还是飞书 | 1天 | OPEN | IM 消息路由逻辑问题，影响文件发送 |

---

*报告生成时间：2026-02-28 | 数据来源：GitHub LobsterAI Repository*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-02-28)

## 1. 今日速览

ZeptoClaw 项目今日保持良好活跃度。社区贡献者提出了 **LLM 端点动态切换** 的实用功能需求（#193），而维护者此前提交的 **MCP stdio transport 功能** 已于昨日成功合并（#192），标志着项目在 MCP 协议支持方面取得重要进展。依赖更新 PR（#183）仍在待合并状态，预计近期将整合。

---

## 2. 版本发布

**本期无新版本发布**。如有版本更新需求，请关注项目 [Releases 页面](https://github.com/qhkm/zeptoclaw/releases)。

---

## 3. 项目进展

### ✅ 已合并/关闭 PR

| PR | 描述 | 状态 |
|---|---|---|
| [#192](https://github.com/qhkm/zeptoclaw/pull/192) | feat(mcp): add stdio transport and MCP tool registration | ✅ CLOSED |

**#192 推进内容：**
- 新增 `McpTransport` trait，实现 `HttpTransport` 和 `StdioTransport` 两种传输层抽象
- 重构 `McpClient`，引入 `new_stdio()` 构造函数和 `shutdown()` 方法，实现传输层无关设计
- 在 discovery 中新增 stdio MCP 条目，引入 `McpTransportType` 枚举
- 扩展 `McpServerConfig` 以支持 stdio 配置字段
- 完成 MCP discovery 和 registration 的完整接线

> 该 PR 关联 Issue #191，已于 2026-02-27 合并，标志着 ZeptoClaw 在 MCP 协议支持上从 HTTP 扩展到 stdio 传输，为本地工具集成铺平道路。

### 🔄 待合并 PR

| PR | 描述 | 状态 |
|---|---|---|
| [#183](https://github.com/qhkm/zeptoclaw/pull/183) | chore: Update dependencies | 🔄 OPEN |

**#183 包含更新：**
- 更新 Cargo、NPM、Docker 依赖
- GitHub Actions 工作流（启用 pinning 提升供应链安全）
- 引入 Dependabot 自动化更新（cargo/npm/docker/github-actions，设置 cooldown 避免频繁打扰）
- 修复部分 clippy 警告
- 限制 `sandbox-landlock` 功能特性

---

## 4. 社区热点

### 🔥 Issue #193 - [feat] LLM endpoint switching on the fly in telegram

| 项目 | 详情 |
|---|---|
| **链接** | https://github.com/qhkm/zeptoclaw/issues/193 |
| **作者** | @superhero75 |
| **状态** | OPEN |
| **评论** | 1 |

**诉求分析：**
- **核心痛点**：大多数 LLM 端点有速率限制（rate limit），用户希望在移动场景下能灵活切换到其他模型/端点
- **期望方案**：在 Telegram 中新增 `/models` 和 `/model` 命令，实现端点/模型动态切换（参考 OpenClaw 特性）
- **影响范围**：若实现，将显著提升用户体验，尤其适合需要频繁切换 LLM 供应商的场景

> 该需求与 OpenClaw 生态对齐，具备一定社区需求基础，建议维护者评估优先级。

---

## 5. Bug 与稳定性

**本期无新增 Bug 报告。** 如遇稳定性问题，请通过 [Issues](https://github.com/qhkm/zeptoclaw/issues) 报告。

---

## 6. 功能请求与路线图信号

### 📌 新增功能请求

| Issue | 功能 | 提议者 | 关联 PR |
|---|---|---|---|
| [#193](https://github.com/qhkm/zeptoclaw/issues/193) | Telegram 端 LLM 端点动态切换 | @superhero75 | - |

**路线图信号分析：**
- 该需求与 MCP stdio transport（#192 已合并）形成互补——stdio 支持本地工具集成，动态端点切换提升生产环境可用性
- 建议将其纳入下一版本规划，作为 Telegram 交互增强的一部分

### ✅ 已实现功能（关联 PR）

- **MCP stdio transport**（#192）：已在昨日合并，下一版本可发布

---

## 7. 用户反馈摘要

从 Issue 评论中提炼：

| Issue | 用户痛点/场景 | 反馈来源 |
|---|---|---|
| #193 | LLM 端点速率限制影响使用，亟需在 Telegram 中动态切换模型/端点 | @superhero75 |

**用户满意度观察：**
- 项目当前功能迭代活跃（MCP 支持持续完善），社区参与度良好
- 功能需求聚焦于**生产可用性**（端点切换）和**扩展性**（stdio transport），表明项目正从原型向实用工具演进

---

## 8. 待处理积压

| 项目 | 类型 | 状态 | 等待时间 | 建议 |
|---|---|---|---|---|
| [#183](https://github.com/qhkm/zeptoclaw/pull/183) | PR | OPEN | ~2 天 | 建议近期合并，包含依赖安全更新 |
| [#193](https://github.com/qhkm/zeptoclaw/issues/193) | Issue | OPEN | 1 天 | 建议评估优先级，适时分配 |

---

> **报告生成时间**：2026-02-28  
> **数据来源**：GitHub (qhkm/zeptoclaw)  
> **下次更新**：2026-03-01

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-02-28)

## 1. 今日速览

过去24小时内，NanoBot 项目保持高度活跃状态。共处理 **30 条 Issues 更新**（新开/活跃 23 条，关闭 7 条），**73 条 PR 更新**（待合并 41 条，已合并/关闭 32 条）。项目整体向前推进明显，尤其在渠道集成、工具安全性和多 provider 支持方面有重要进展。未发布新版本。社区参与度较高，多个功能性 Issue 和 Bug 修复 PR 引发积极讨论。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

过去24小时内，项目成功合并/关闭了 **32 条 PR**，以下为重要进展：

| PR | 描述 | 状态 |
|---|---|---|
| **#1286** | fix(shell): 修复 Windows 绝对路径在 workspace guard 中的解析问题 | ✅ CLOSED |
| **#1294** | fix: 处理 _tool_hint 中的 list 类型工具参数（适配 Kimi K2.5 等模型） | ✅ CLOSED |
| **#1314** | fix: 防止 session 被 null/error LLM 响应污染（修复 #1303） | ✅ CLOSED |
| **#1317** | Modify Feishu bot permissions in README | ✅ CLOSED |
| **#1307** | fix: QQ C2C 回复时传递 msg_id 避免主动消息权限错误 | ✅ CLOSED |
| **#1309** | fix: 解决空消息崩溃循环和上下文重复 bug | ✅ OPEN |
| **#1324** | feat: 添加 Vertex AI provider 支持及 Telegram proxy 修复 | ✅ OPEN |
| **#1320** | feat(dingtalk): 添加群聊消息支持 | ✅ OPEN |
| **#1323** | fix: 修复飞书交互消息文本无法提取 | ✅ CLOSED |
| **#1239** | Fix Matrix channel initialization and configuration | ✅ CLOSED |

> 关键进展：
> - **安全性增强**：Windows 路径解析修复、敏感参数日志脱敏、per-session 锁机制（#1298）
> - **多渠道完善**：Matrix 通道修复、钉钉群聊支持、飞书消息提取优化
> - **多 provider 扩展**：Vertex AI 支持、OpenAI Codex 关键词冲突修复

---

## 4. 社区热点

以下 Issues/PRs 引发最多讨论（按评论数排序）：

### 🔥 热门 Issues

| Issue | 标题 | 评论数 | 状态 |
|---|---|---|---|
| **#215** | [飞书无法建立长连接](https://github.com/HKUDS/nanobot/issues/215) | 20 | OPEN |
| **#1240** | [Infinite loop response when using llama3.3-70b-instruct](https://github.com/HKUDS/nanobot/issues/1240) | 13 | OPEN |
| **#222** | [Multi agents setup - Supported?](https://github.com/HKUDS/nanobot/issues/222) | 6 | OPEN |
| **#1176** | [bug: since v0.1.4.post2, AI keeps repeating previous messages](https://github.com/HKUDS/nanobot/issues/1176) | 6 | CLOSED |
| **#1267** | [zhipu provider does not work?](https://github.com/HKUDS/nanobot/issues/1267) | 5 | OPEN |

### 📌 热点分析

1. **飞书长连接问题**（#215, 20评论）：用户反馈在飞书事件中无法选择长连接模式，尽管已配置 app id 和 secret。这是渠道集成层面的阻塞性问题，涉及飞书开放平台配置理解门槛。

2. **Llama3.3 70B 无限循环响应**（#1240, 13评论）：严重用户体验问题，用户需按两次 Ctrl+C 强制终止，反映出模型输出控制或 session 管理存在缺陷。

3. **多代理设置**（#222, 6评论）：用户对多代理架构有强烈需求，期望官方提供文档或指南，反映项目在复杂场景支持上的缺口。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|---|---|---|---|
| 🔴 **高** | **#1240** | 使用 llama3.3-70b-instruct 时响应无限循环，需 Ctrl+C 两次终止 | OPEN |
| 🔴 **高** | **#1267** | Zhipu provider 报错 "Insufficient balance or no resource" | OPEN |
| 🔴 **高** | **#1318** | 安装 skill 后机器人重复回复消息 | OPEN |
| 🟠 **中** | **#1176** | AI 重复历史消息内容（v0.1.4.post2 引入的回归） | CLOSED |
| 🟠 **中** | **#1300** | Matrix 通道启动失败 | OPEN |
| 🟠 **中** | **#1304** | 无法使用 codex | OPEN |
| 🟡 **低** | **#1274** | Windows 绝对路径正则截断导致合法命令被误拦截 | OPEN |
| 🟡 **低** | **#1221** | 测试代码中引用不存在的 HEARTBEAT_OK_TOKEN | OPEN |

> **已有 Fix PR**：#1286（Windows 路径解析）、#1314（session 污染防护）、#1309（空消息崩溃循环）

---

## 6. 功能请求与路线图信号

| Issue | 功能请求 | 状态 | 关联 PR |
|---|---|---|---|
| **#222** | 多代理（Multi agents）设置支持与文档 | OPEN | - |
| **#1302** | 按会话隔离工作区（per-chat workspace isolation） | OPEN | - |
| **#1292** | Telegram 动态切换 LLM provider/model | OPEN | - |
| **#1268** | 暴露 OpenAI 兼容的 Chat Completions API | OPEN | - |
| **#1291** | 通过 config.json 允许自定义 Config 类 | OPEN | - |
| **#1215** | Agent 自动更新机制 | CLOSED | - |
| **#1291** | Config 类可通过 config.json 替换 | OPEN | - |

> **潜在纳入下一版本的功能**：
> - 多代理架构支持（#222）- 社区需求强烈，已有配置示例但缺文档
> - Per-session 工作区隔离（#1302）- 安全诉求明确
> - 动态 provider 切换（#1292）- 提升易用性
> - Vertex AI provider 支持（#1324）- PR 已提出，多云策略扩展

---

## 7. 用户反馈摘要

### 痛点与问题

1. **渠道集成复杂度高**
   - 飞书长连接配置困难（#215）
   - 钉钉群聊消息回复发到私聊（#1045）- 用户已自行修复并提交 PR
   - Matrix 通道无法启动（#1300）

2. **Provider 兼容性**
   - Zhipu（智谱）provider 报错（#1267）
   - Moonshot Kimi reasoning model 缺少 reasoning_content 字段（#1313）
   - Deepseek-reasoner 请求格式出错（#1225）

3. **Windows 平台支持**
   - ExecTool 路径解析误拦截（#1274）- 用户反馈影响实际使用
   - 建议文档完善 Windows 对比优势（#1265）

### 正面反馈

- 用户对比 OpenClaw 后认为 NanoBot 在 Windows 上表现更优（#1265）
- 项目在 Deep Research 和 GraphRAG 能力上展现技术深度（#1232）
- 安全审计主动联系（SkillSec），体现项目关注度提升

---

## 8. 待处理积压

以下 Issue/PR 超过 48 小时未获响应，需维护者关注：

| 类型 | Issue/PR | 标题 | 最后更新 |
|---|---|---|---|
| Issue | **#222** | Multi agents setup - Supported? | 2026-02-28 |
| Issue | **#1267** | zhipu provider does not work? | 2026-02-27 |
| Issue | **#1302** | per-chat workspace isolation | 2026-02-28 |
| Issue | **#1291** | Feature: Make Config class exchangeable via config.json | 2026-02-27 |
| PR | **#126** | 创建 github actions 编译 docker 镜像推送至 ghcr 和 dockerhub | 2026-02-28（长期未合） |
| PR | **#1238** | feat: AgentSkills.io format compatibility + GitHub skill installer | 2026-02-28 |

---

*报告生成时间：2026-02-28 | 数据来源：GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-02-28)

## 1. 今日速览

PicoClaw 社区在过去的 24 小时内保持了极高的活跃度：Issues 更新 60 条（其中 44 条新开/活跃），PR 更新 96 条（66 条待合并）。项目持续快速迭代，今日合并/关闭了 30 个 PR，并有多项重要功能正在积极开发中，包括 WeCom 渠道集成、MCP 工具支持、Windows 完整支持等。未发布新版本。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 描述 | 状态 |
|---|---|---|
| [#897](https://github.com/sipeed/picoclaw/pull/897) | fix: 启动时没有启用渠道时正确传播错误 | ✅ CLOSED |
| [#884](https://github.com/sipeed/picoclaw/pull/884) | Fix WhatsApp 推理内存泄漏问题 | ✅ CLOSED |
| [#681](https://github.com/sipeed/picoclaw/pull/681) | fix: 区分网络超时与上下文窗口错误 | ✅ CLOSED |
| [#885](https://github.com/sipeed/picoclaw/pull/885) | Update config.example.json | ✅ CLOSED |
| [#872](https://github.com/sipeed/picoclaw/pull/872) | Add WeCom AIBot channel implementation and tests | ✅ CLOSED |
| [#655](https://github.com/sipeed/picoclaw/pull/655) | Added a native WhatsApp channel implementation | ✅ CLOSED |

### 正在推进的重要功能 (Open PRs)

| PR | 描述 | 进度 |
|---|---|---|
| [#893](https://github.com/sipeed/picoclaw/pull/893) | 添加 WeCom AIBot 渠道实现和测试 | 🆕 新提交 |
| [#831](https://github.com/sipeed/picoclaw/pull/831) | 添加 Windows 支持（含简易配置向导） | 进行中 |
| [#282](https://github.com/sipeed/picoclaw/pull/282) | 添加 MCP 工具支持（Docker 部署） | 进行中 |
| [#709](https://github.com/sipeed/picoclaw/pull/709) | 实现多代理协调的 Swarm 模式 | 进行中 |
| [#896](https://github.com/sipeed/picoclaw/pull/896) | 支持环境变量配置 | 🆕 新提交 |
| [#874](https://github.com/sipeed/picoclaw/pull/874) | 添加 Bocha 网络搜索提供商 | 进行中 |
| [#630](https://github.com/sipeed/picoclaw/pull/630) | 添加 Signal 渠道支持 | 进行中 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 状态 | 主题 |
|---|---|---|---|
| [#4](https://github.com/sipeed/picoclaw/issues/4) | 10 | OPEN | 本地网络无法发现网关 |
| [#680](https://github.com/sipeed/picoclaw/issues/680) | 10 | OPEN | 默认 api_base 总是设置为 GLM 提供商 |
| [#88](https://github.com/sipeed/picoclaw/issues/88) | 10 | CLOSED | Chromebook 用户请求安装指南 |
| [#79](https://github.com/sipeed/picoclaw/issues/79) | 9 | OPEN | Gemini 3 Flash Preview 函数调用缺少 thought_signature |
| [#100](https://github.com/sipeed/picoclaw/issues/100) | 9 | CLOSED | 响应后提示 "I've completed processing but have no response" |
| [#28](https://github.com/sipeed/picoclaw/issues/28) | 8 | OPEN | LM Studio Easy Connect 功能请求 |
| [#148](https://github.com/sipeed/picoclaw/issues/148) | 8 | OPEN | 是否支持开箱即用的官方/第三方 SKILLs |

**分析：** 用户关注点集中在：
1. **多渠道集成** - LM Studio、WhatsApp、WeCom、Signal 等渠道需求强烈
2. **API 兼容性** - GLM、Ollama、Gemini 等提供商的配置和兼容性问题
3. **功能丰富度** - SKILLs 生态系统、MCP 协议支持

---

## 5. Bug 与稳定性

### 报告的 Bug（按严重程度）

| Issue | 严重程度 | 描述 | 状态 |
|---|---|---|---|
| [#79](https://github.com/sipeed/picoclaw/issues/79) | 🔴 高 | Gemini 3 Flash Preview 函数调用缺少 thought_signature | OPEN, PR #282 正在实现 MCP |
| [#109](https://github.com/sipeed/picoclaw/issues/109) | 🔴 高 | 使用本地 Ollama 时错误提示 "no API key configured" | OPEN |
| [#96](https://github.com/sipeed/picoclaw/issues/96) | 🔴 高 | 已配置 API Key 但仍报 "no API key configured" (glm4.7) | OPEN |
| [#127](https://github.com/sipeed/picoclaw/issues/127) | 🔴 高 | Windows/Gemini: "404 v1main" 错误和 "No API Key" 错误 | OPEN |
| [#778](https://github.com/sipeed/picoclaw/issues/778) | 🟡 中 | Summary 不包含相关上下文 | OPEN, PR #829 已修复 |
| [#545](https://github.com/sipeed/picoclaw/issues/545) | 🟡 中 | 任务委托后出现多个答案 | OPEN |
| [#748](https://github.com/sipeed/picoclaw/issues/748) | 🟡 中 | Groq API 兼容性：tool call 格式错误 | OPEN |
| [#36](https://github.com/sipeed/picoclaw/issues/36) | 🟡 中 | Telegram Gateway 在 "Thinking..." 后挂起 | OPEN |
| [#683](https://github.com/sipeed/picoclaw/issues/683) | 🟢 低 | 网络超时被错误分类为上下文窗口错误 | OPEN, PR #681 已修复 |

**已有 Fix 的 Bug：**
- ✅ PR [#829](https://github.com/sipeed/picoclaw/pull/829) - 修复摘要上下文丢失问题
- ✅ PR [#681](https://github.com/sipeed/picoclaw/pull/681) - 修复网络超时与上下文窗口错误混淆
- ✅ PR [#897](https://github.com/sipeed/picoclaw/pull/897) - 修复未启用渠道时启动错误未传播

---

## 6. 功能请求与路线图信号

### 高需求功能（结合 Open PRs 判断）

| Issue/PR | 功能 | 需求来源 | 预计纳入 |
|---|---|---|---|
| [#28](https://github.com/sipeed/picoclaw/issues/28) | LM Studio Easy Connect | 用户请求 | 长期 |
| [#290](https://github.com/sipeed/picoclaw/issues/290) | MCP (Model Context Protocol) 支持 | 路线图高优先级 | ✅ PR #282 正在实现 |
| [#99](https://github.com/sipeed/picoclaw/issues/99) | WhatsApp 渠道 | 用户请求 | ✅ PR #655 已合并 |
| [#248](https://github.com/sipeed/picoclaw/issues/248) | WhatsApp 支持 | 用户请求 | ✅ 已实现 |
| [#260](https://github.com/sipeed/picoclaw/issues/260) | Azure OpenAI 支持 | 企业需求 | OPEN |
| [#39](https://github.com/sipeed/picoclaw/issues/39) | `picoclaw doctor` 命令 | 运维需求 | OPEN |
| [#101](https://github.com/sipeed/picoclaw/issues/101) | Web Socket/REST API 外部仪表盘 | 企业需求 | OPEN |
| [#709](https://github.com/sipeed/picoclaw/pull/709) | Swarm 模式多代理协调 | 高级功能 | 开发中 |
| [#893](https://github.com/sipeed/picoclaw/pull/893) | WeCom AIBot 渠道 | 中国用户需求 | PR 审核中 |

---

## 7. 用户反馈摘要

### 真实痛点与使用场景

| 类别 | 反馈要点 |
|---|---|
| **平台兼容性** | Chromebook 用户不清楚如何安装；Windows 用户需要更简单的配置流程（#831 已解决） |
| **本地部署** | 本地 Ollama 集成困难，API Key 配置困惑（#109、#75） |
| **API 提供商** | 多提供商的 API Key 配置混乱，GLM/Groq/Gemini 兼容性问题频发 |
| **渠道需求** | WhatsApp、Signal、WeCom、Telegram 等多渠道需求强烈 |
| **功能增强** | SKILLs 生态系统不完善，缺少 MCP 协议支持（#282 正在解决） |
| **稳定性** | Telegram 消息显示原始 JSON、Discord 长消息处理、Gateway 挂起等问题 |

**积极信号：** 用户对 WhatsApp 集成（#655 已合并）、Windows 支持（#831）、MCP 支持（#282）等功能反响积极，社区贡献活跃。

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 存在时间 | 描述 | 建议 |
|---|---|---|---|
| [#75](https://github.com/sipeed/picoclaw/issues/75) | 2026-02-12 | 如何连接本地 Ollama？ | 需官方文档或示例 |
| [#68](https://github.com/sipeed/picoclaw/issues/68) | 2026-02-12 | 添加 open code 和 antigravity | 低优先级 |
| [#116](https://github.com/sipeed/picoclaw/issues/116) | 2026-02-13 | PicoClaw 代码问题清单（代码评审） | 需维护者评估 |

### 待合并的高价值 PR

| PR | 描述 | 建议 |
|---|---|---|
| [#893](https://github.com/sipeed/picoclaw/pull/893) | WeCom AIBot 渠道 | 建议审核合并 |
| [#831](https://github.com/sipeed/picoclaw/pull/831) | Windows 支持 + 配置向导 | 建议审核合并 |
| [#282](https://github.com/sipeed/picoclaw/pull/282) | MCP 工具支持 | 建议持续推进 |

---

**报告生成时间：** 2026-02-28  
**数据来源：** GitHub PicoClaw Repository (github.com/sipeed/picoclaw)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**2026-02-28**

---

## 1. 今日速览

NanoClaw 今日保持极高的开发活跃度，共处理 **35 条 PR 更新**（其中 7 个已合并/关闭，28 个待合并），新增 **3 个 Issues**。项目在多渠道架构、WhatsApp 连接韧性、平台兼容性方面持续推进，多个重量级功能 PR（Signal 通道、PID 锁文件、WhatsApp 重连优化）已进入待合并状态，整体向前推进态势明显。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

| PR | 标题 | 类型 | 状态 | 意义 |
|---|---|---|---|---|
| [#568](https://github.com/qwibitai/nanoclaw/pull/568) | feat: channel-agnostic interaction abstraction layer | Feature | ✅ Closed | 为所有通道添加反应、引号回复、投票、输入指示器等统一交互抽象 |
| [#339](https://github.com/qwibitai/nanoclaw/pull/339) | Feat/imessage channel | Feature | ✅ Closed | 新增 iMessage 通道支持 |
| [#547](https://github.com/qwibitai/nanoclaw/pull/547) | feat: add Shabbat mode 🕯️ | Feature | ✅ Closed | 新增犹太安息日自动断开模式 |
| [#511](https://github.com/qwibitai/nanoclaw/pull/511) | feat: add voice recognition skill (PyAnnote) | Feature | ✅ Closed | 添加基于 PyAnnote 的说话人识别技能 |
| [#515](https://github.com/qwibitai/nanoclaw/pull/515) | feat(skill): add Perplexity Research skill | Feature | ✅ Closed | 新增 Perplexity 研究模型集成 |
| [#509](https://github.com/qwibitai/nanoclaw/pull/509) | feat: add WhatsApp emoji reactions skill | Feature | ✅ Closed | 支持 WhatsApp 表情反应功能 |

**合并亮点**：今日闭合并合并了 7 个 PR，涵盖 iMessage 通道、表情反应、语音识别、Perplexity 研究、犹太安息日模式等重要功能，进一步丰富了 NanoClaw 的通道支持与交互能力。

---

## 4. 社区热点

| 类型 | PR # | 标题 | 热度 |
|---|---|---|---|
| 🔥 PR | [#499](https://github.com/qwibitai/nanoclaw/pull/499) | Add Signal as a channel via signal-cli daemon | 待合并 |
| 🔥 PR | [#500](https://github.com/qwibitai/nanoclaw/pull/500) | refactor: implement pluggable multi-channel architecture | 待合并 |
| 🔥 PR | [#569](https://github.com/qwibitai/nanoclaw/pull/569) | feat: add-channel-interactions skill | 待合并 |
| 🔥 PR | [#572](https://github.com/qwibitai/nanoclaw/pull/572) | feat: add Codex provider skill and codex-oauth package | 待合并 |
| 🔥 PR | [#566](https://github.com/qwibitai/nanoclaw/pull/566) | feat: improve WhatsApp reconnect resilience | 待合并 |

**分析**：社区对多通道架构（Signal 通道、channel-agnostic 交互层）关注极高，呼应了 #499 中用户希望"以更通用的方式解决所有通道交互功能"的诉求。Codex 提供商技能的引入也显示项目在扩展 LLM 支持方面的努力。

---

## 5. Bug 与稳定性

| Issue | 标题 | 严重程度 | 状态 | Fix PR |
|---|---|---|---|---|
| [#553](https://github.com/qwibitai/nanoclaw/issues/553) | Container execution fails after WhatsApp connection recovery | **高** | Open | 无 |
| #407 | WSL 首次运行三个设置 bug | 中 | 待合并 PR | [#407](https://github.com/qwibitai/nanoclaw/pull/407) |
| #512 | Docker 权限问题检测 | 中 | 待合并 PR | [#512](https://github.com/qwibitai/nanoclaw/pull/512) |
| #566 | WhatsApp 405 限速重连优化 | 中 | 待合并 PR | [#566](https://github.com/qwibitai/nanoclaw/pull/566) |

**#553 详情**：当未启用 VPN 启动 NanoClaw 时，WhatsApp 连接失败导致无法进入 `getMessageLoop`；启用 VPN 后连接成功但容器执行仍失败。这是一个阻塞性问题，影响用户正常工作流。

---

## 6. 功能请求与路线图信号

| Issue/PR | 功能描述 | 路线图信号 |
|---|---|---|
| [#554](https://github.com/qwibitai/nanoclaw/issues/554) | 缺少用户可见的任务取消机制 | ⚠️ 安全相关，可能纳入 |
| [#571](https://github.com/qwibitai/nanoclaw/issues/571) | Opencode 支持 / Windows 系统兼容性 | 需评估 |
| [#499](https://github.com/qwibitai/nanoclaw/pull/499) | Signal 通道支持 | 多个 PR 围绕此展开，高优先级 |
| [#500](https://github.com/qwibitai/nanoclaw/pull/500) | 可插拔多通道架构重构 | 架构级变更，预计下版本核心 |
| [#549](https://github.com/qwibitai/nanoclaw/pull/549) | Avian LLM 提供商支持 | 新提供商集成，常规迭代 |

**趋势判断**：多通道架构（Signal + 统一交互层）是当前路线图核心方向；#554 提出的任务取消机制涉及安全层面，预计将获得关注。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼：

- **使用场景**：用户希望在 WhatsApp 连接恢复后继续正常使用容器执行功能（#553）
- **兼容性诉求**：有用户尝试使用 Opencode，但项目尚未支持 Windows 系统（#571）
- **安全关切**：用户担心没有取消机制会导致如 "delete all my emails" 这类危险命令无法中断（#554）
- **积极反馈**：Signal 通道、多通道架构重构获得社区积极响应（多个关联 PR）

---

## 8. 待处理积压

| 类型 | # | 标题 | 等待时间 | 备注 |
|---|---|---|---|---|
| Issue | [#553](https://github.com/qwibitai/nanoclaw/issues/553) | Container execution fails after WhatsApp connection recovery | 1 天 | 高优先级 Bug |
| Issue | [#554](https://github.com/qwibitai/nanoclaw/issues/554) | No User-Exposed Cancellation Mechanism | 1 天 | 安全相关 |
| Issue | [#571](https://github.com/qwibitai/nanoclaw/issues/571) | Opencode / Windows 兼容性 | 新增 | 待评估 |

**提醒**：建议优先处理 #553（WhatsApp 连接恢复后容器执行失败），该问题直接影响核心功能可用性。

---

*报告生成时间：2026-02-28 | 数据来源：GitHub NanoClaw 仓库*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-02-28)

## 1. 今日速览

IronClaw 项目今日保持高度活跃状态，24 小时内新增 4 条 Issues 和 24 条 PR 更新。其中 13 个 PR 待合并，11 个已合并/关闭。项目持续推进多项核心功能，包括程序化工具调用 (PTC)、WASM 通道文件附件支持、WhatsApp Webhook 验证等。代码库展现出良好的迭代节奏，新贡献者积极参与（24 个 PR 中多个标记为 contributor: new），生态建设稳步前行。

---

## 2. 版本发布

**无新版本发布**

昨日合并的 PR #385 提及 v0.13.0 发布（从 0.12.0 升级），包含破坏性变更（externally-constructible struct adds field），但截至日报生成时尚未正式发布。如有版本升级需求，请关注官方 Release 页面。

---

## 3. 项目进展

| PR | 描述 | 状态 | 贡献者 | 推进内容 |
|---|---|---|---|---|
| [#408](https://github.com/nearai/ironclaw/pull/408) | feat(ptc): 程序化工具调用 (PTC) | OPEN | @zmanian | 实现 ToolExecutor、SDK、E2E 测试，支持工具嵌套调用（最大深度5层） |
| [#409](https://github.com/nearai/ironclaw/pull/409) | feat: WASM 通道文件/图片附件支持 | OPEN | @sergeytimoshin | WIT 新增 attachment 记录，支持 Telegram 发图、其他通道发文档 |
| [#403](https://github.com/nearai/ironclaw/pull/403) | feat(whatsapp): 完整 Webhook 验证 | OPEN | @jrevillard | 实现 GET 查询参数验证 + POST HMAC-SHA256 签名验证 |
| [#396](https://github.com/nearai/ironclaw/pull/396) | feat: 添加 Avian LLM 提供商 | OPEN | @avianion | 支持 DeepSeek、Kimi、GLM、MiniMax 模型 |
| [#399](https://github.com/nearai/ironclaw/pull/399) | feat(bootstrap): 自动检测 libsql | OPEN | @henrypark133 | 解决云实例 DATABASE_URL 缺失问题 |
| [#404](https://github.com/nearai/ironclaw/pull/404) | feat(web): 斜杠命令自动补全 | CLOSED | @henrypark133 | 18 个斜杠命令、Tab/Enter 选择、状态查询 |
| [#398](https://github.com/nearai/ironclaw/pull/398) | feat(routines): 通知投递给所有通道 | CLOSED | @henrypark133 | 修复 WASM 通道通知静默丢失问题 |
| [#391](https://github.com/nearai/ironclaw/pull/391) | fix: Web UI 跨通道显示 routines | CLOSED | @henrypark133 | 修复 Telegram 通道创建的 routines 在 Web UI 不可见 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 标题 | 评论数 | 亮点 |
|---|---|---|---|
| [#407](https://github.com/nearai/ironclaw/issues/407) | Ideas from Hermes Agent 值得借鉴 | 2 | 社区成员建议对标 Hermes Agent 架构，引入程序化工具调用等模式 |

**分析：** Issue #407 引发讨论，源于对标竞品 Hermes Agent 的功能演进。IronClaw 团队迅速响应，已在 PR #408 中实现第一项（PTC），后续预计有更多架构优化。

### 热门功能请求

| Issue | 标题 | 👍 | 摘要 |
|---|---|---|---|
| [#402](https://github.com/nearai/ironclaw/issues/402) | SimpleX Chat 通道集成 | 1 | 请求添加元数据最小化、E2EE 的通信选项 |

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| [#406](https://github.com/nearai/ironclaw/issues/406) | **高** | Discord/WhatsApp 通道缺少 build.sh，WASM 未编译，通道不出现在安装向导 | OPEN | - |
| [#410](https://github.com/nearai/ironclaw/issues/410) | **中** | 平板 UI 显示被裁剪 | OPEN | - |
| [#411](https://github.com/nearai/ironclaw/pull/411) | **高** (已修复) | MessageTool 使用 tokio::sync::RwLock 导致运行时 panic | OPEN | #411 已提交 fix |

**风险提示：** Issue #406 阻塞了 Discord/WhatsApp 通道的正常使用，影响范围较大，建议优先处理。

---

## 6. 功能请求与路线图信号

| Issue | 功能 | 评估 | 关联 PR |
|---|---|---|---|
| [#402](https://github.com/nearai/ironclaw/issues/402) | SimpleX Chat 集成 | 中期可行，需 simoxide-client + Docker | - |
| [#407](https://github.com/nearai/ironclaw/issues/407) | Hermes Agent 模式借鉴 | 已开始落地（PTC），后续预计持续 | #408 |
| [#409](https://github.com/nearai/ironclaw/pull/409) | WASM 通道文件附件 | 合并后可增强 Telegram/其他通道能力 | #409 (OPEN) |
| [#333](https://github.com/nearai/ironclaw/pull/333) | Slack Socket Mode | 解决 NAT 穿透问题，提升部署灵活性 | #333 (OPEN) |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼：

- **架构认可**：社区对 IronClaw 的多通道、工具执行、记忆/技能架构给予肯定（见 #407）。
- **集成诉求**：用户希望扩展更多通信通道（SimpleX Chat、Discord、WhatsApp），特别是安全隐私优先的选项。
- **UI 体验**：平板用户报告界面裁剪问题，影响移动端使用体验。
- **部署痛点**：NEAR AI 云实例存在数据库配置问题（#399 已修复），影响 `config get/set` 命令。

---

## 8. 待处理积压

| Item | 长期未响应 | 最后更新 | 风险 |
|---|---|---|---|
| [#333](https://github.com/nearai/ironclaw/pull/333) | Slack Socket Mode | 2026-02-27 | 功能完整，建议合并 |
| [#334](https://github.com/nearai/ironclaw/pull/334) | OpenTelemetry 可观测性 | 2026-02-27 | 涵盖大量正确性/安全修复，建议合并 |
| [#406](https://github.com/nearai/ironclaw/issues/406) | Discord/WhatsApp build.sh 缺失 | 2026-02-27 | 阻塞用户使用，需优先 |

---

**报告生成时间**：2026-02-28  
**数据来源**：GitHub IronClaw Repository (nearai/ironclaw)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报（2026-02-28）

## 今日速览

过去24小时内，TinyClaw 项目保持较高活跃度，共产生 8 条 Pull Request 更新，其中 4 条已合并/关闭，4 条待合并。项目未发布新版本，但围绕插件系统（Plugin System）的重构与加固工作持续推进，同时 monorepo 迁移和即时通讯平台（Discord、Telegram）支持优化也在并行开发。整体来看，项目处于功能迭代关键期，社区贡献活跃。

## 版本发布

过去24小时无新版本发布。最近一次版本更新记录为 #148（版本提升至 0.0.7），但该 PR 已关闭，具体发布信息需查阅 Release 页面。

## 项目进展

**已合并/关闭的 PR（共 4 条）：**

- **#146** feat: add plugin system with events and hooks (rebased) —— @jlia0 重新整理并解决了合并冲突的插件系统版本，为项目轻量化插件架构奠定基础
  链接：https://github.com/TinyAGI/tinyclaw/pull/146

- **#127** feat: add plugin system with events and hooks —— @steven1522 原始贡献，实现事件广播与消息钩子转换功能，支持 3D 形象可视化与多平台格式转换
  链接：https://github.com/TinyAGI/tinyclaw/pull/127

- **#145** fix: copy skills to agent workspaces instead of symlinking —— 修复技能文件复制逻辑，统一从 TINYCLAW_HOME 源加载默认技能，避免符号链接问题
  链接：https://github.com/TinyAGI/tinyclaw/pull/145

- **#148** chore: bump version to 0.0.7 —— 版本号更新
  链接：https://github.com/TinyAGI/tinyclaw/pull/148

**待合并的 PR（共 4 条）：**

- **#149** hardening: gate plugins, add hook timeouts, and sanitize metadata —— 插件安全加固、钩子超时控制、元数据清理，作为堆叠式 PR 的基础分支，需优先合并
  链接：https://github.com/TinyAGI/tinyclaw/pull/149

- **#150** feat(openviking): continuation after plugin hardening —— 基于 #149 的后续开发，功能延续
  链接：https://github.com/TinyAGI/tinyclaw/pull/150

- **#147** refactor: monorepo —— 代码库向 monorepo 结构迁移，预计提升构建与依赖管理效率
  链接：https://github.com/TinyAGI/tinyclaw/pull/147

- **#142** fix: Discord thread replies, Telegram thread support, and queue reliability —— 修复 Discord 线程回复、Telegram 论坛主题支持及队列稳定性问题
  链接：https://github.com/TinyAGI/tinyclaw/pull/142

## 社区热点

截至本日报时刻，未获取到带评论或点赞的热门 Issues/PRs。当前数据中所有 PR 均无明确评论统计（undefined），社区讨论热度有待观察。建议关注以下具备功能延伸性的 PR：

- **#147**（monorepo 迁移）—— 涉及项目架构重大调整，可能引发后续关于构建流程的讨论
- **#142**（Discord/Telegram 修复）—— 直接影响多平台用户体验，是用户高频使用场景

## Bug 与稳定性

今日未收到新增 Issue 报告。已关注的历史稳定性相关 PR 包括：

- **#142**（Discord/Telegram 修复）—— 修复消息队列 PATH 解析问题，提升后台运行可靠性
- **#145**（技能文件复制）—— 解决符号链接导致的文件访问异常

以上问题均已有对应修复 PR 待合并。

## 功能请求与路线图信号

从现有 PR 组合可推断项目近期重点方向：

1. **插件系统完善**（#127/#146/#149/#150）—— 事件与钩子机制已趋成熟，后续将进入安全加固与功能扩展阶段
2. **架构现代化**（#147）—— monorepo 改造表明项目追求更高的代码组织效率与跨包复用
3. **多平台消息支持深化**（#142）—— Discord 与 Telegram 的线程机制优化，体现对主流即时通讯渠道的重视

上述功能点有望在下一版本（0.0.8 或更高）中集中体现。

## 用户反馈摘要

由于本期数据未包含 Issues 评论信息，无法提取具体用户痛点。结合 PR 内容分析：

- 插件系统的设计需求明确（事件广播、消息转换），说明已有一定规模的插件生态或使用场景
- Discord/Telegram 修复反映用户在实际部署中对多平台消息可靠性的诉求

## 待处理积压

以下 PR 已开放较久或具备重要功能价值，建议维护者关注合并优先级：

- **#142**（Discord/Telegram 修复）—— 创建于 2026-02-27，涉及多平台核心功能，建议尽快审阅
- **#147**（monorepo 迁移）—— 架构层面重大变更，需评估对现有工作流的影响
- **#149**（插件安全加固）—— 作为 #150 的前置依赖，建议优先处理

---

*本报告基于 GitHub 公开数据自动生成，仅供参考。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*