# OpenClaw 生态日报 2026-03-05

> Issues: 500 | PRs: 500 | 覆盖项目: 10 个 | 生成时间: 2026-03-05 02:25 UTC

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

# OpenClaw 项目动态日报

**报告日期：2026-03-05**

---

## 1. 今日速览

过去24小时，OpenClaw 项目活跃度维持高位：共处理 **500 条 Issues**（新开/活跃 439，关闭 61）和 **500 条 PRs**（待合并 394，已合并/关闭 106）。未发布新版本。社区讨论集中在 i18n 国际化需求、DingTalk 集成、以及 v2026.3.2 版本的多个回归 Bug 上。整体项目处于功能迭代与稳定性修复并行阶段，积压 PR 较多（394个待合并），需关注处理效率。

---

## 2. 版本发布

**本期无新版本发布**

---

## 3. 项目进展

过去24小时内合并/关闭了 **106 个 PRs**，以下是代表性进展：

| PR | 作者 | 描述 | 类型 |
|----|------|------|------|
| [#35241](https://github.com/openclaw/openclaw/pull/35241) | @zhangzhejian | CLI 添加 `--session-key` 标志，支持显式会话路由 | CLI 增强 |
| [#34009](https://github.com/openclaw/openclaw/pull/34009) | @kesku | onboarding 添加 web search 配置流程 | 新功能 |
| [#33956](https://github.com/openclaw/openclaw/pull/33956) | @ayanesakura | 修复 cron 手动运行导致 schedules 漂移问题 | Bug 修复 |
| [#34127](https://github.com/openclaw/openclaw/pull/34127) | @ayanesakura | 修复 Slack 静默 NO_REPLY 后仍显示 typing 指示器 | Bug 修复 |
| [#34739](https://github.com/openclaw/openclaw/pull/34739) | @ayanesakura | Ollama 支持读取 `thinking` 字段（kimi-k2.5 等模型） | 模型支持 |
| [#35109](https://github.com/openclaw/openclaw/pull/35109) | @markfietje | Gateway 支持 Tailscale Serve WebSocket 源验证 | 网络修复 |
| [#35204](https://github.com/openclaw/openclaw/pull/35204) | @ningding97 | GoogleChat 接受不带 `email_verified` 的 app-url token | 渠道修复 |
| [#33112](https://github.com/openclaw/openclaw/pull/33112) | @MichaelJayW | **新增 DingTalk 渠道插件**（含 todo、calendar、AI card） | 新渠道 |
| [#35094](https://github.com/openclaw/openclaw/pull/35094) | @joshavant | Gateway auth.token 支持 SecretRef 引用 | 安全增强 |

**关键里程碑**：DingTalk 渠道插件进入 PR 阶段，将填补中国主流企业通讯工具集成的空白。

---

## 4. 社区热点

以下 Issues 讨论热度最高，反映核心用户诉求：

### 🔥 Top 5 讨论热点

| Issue | 评论数 | 主题 | 链接 |
|-------|--------|------|------|
| **#3460** | 76 | i18n & 国际化支持 | [查看](https://github.com/openclaw/openclaw/issues/3460) |
| **#75** | 32 | Linux/Windows Clawdbot Apps | [查看](https://github.com/openclaw/openclaw/issues/75) |
| **#26534** | 30 | 添加 DingTalk 作为首次安装渠道选项 | [查看](https://github.com/openclaw/openclaw/issues/26534) |
| **#32245** | 17 | Vertex 嵌入运行在 v2026.3.1 失败（回归） | [查看](https://github.com/openclaw/openclaw/issues/32245) |
| **#13552** | 16 | macOS companion app SSH 隧道无法传递 auth token | [查看](https://github.com/openclaw/openclaw/issues/13552) |

**分析**：
- **#3460 (i18n)** 持续高热，76条评论表明多语言需求迫切，但官方回应暂无带宽支持，引发社区失望
- **#75** 呼声高涨，Linux/Windows 平台缺失已拖延许久，用户希望 macOS/iOS/Android 同等体验
- **#26534** 与 PR #33112 形成呼应，DingTalk 集成已是确定性方向

---

## 5. Bug 与稳定性

### 严重（影响核心功能）

| Issue | 严重性 | 描述 | 状态 | 关联 PR |
|-------|--------|------|------|---------|
| **#35077** | 🔴 严重 | v2026.3.2 完全不可用，401 认证错误频发 | OPEN | — |
| **#34830** | 🔴 严重 | OpenRouter 报 401 missing auth header | OPEN | — |
| **#35078** | 🔴 严重 | Plugin native bindings (node_sqlite3) 在 Jiti loader 下失败 | OPEN | — |
| **#34992** | 🔴 严重 | Memory search 报 "missing node:sqlite" (Node.js 22) | OPEN | — |
| **#32833** | 🔴 严重 | exec plugin 在 v2026.3.2 安装失败 | OPEN | — |
| **#32245** | 🔴 严重 | Vertex 嵌入运行报错 "Cannot convert undefined or null to object" | OPEN | — |

### 中等（影响部分用户）

| Issue | 严重性 | 描述 | 状态 |
|-------|--------|------|------|
| **#28835** | 🟠 中等 | Telegram API 请求在 v2026.2.26 升级后失败 | OPEN |
| **#33468** | 🟠 中等 | GoogleChat 启动报错（同上 null object） | OPEN |
| **#34741** | 🟠 中等 | WhatsApp 中途断连 "No active listener" | OPEN |
| **#4686** | 🟠 中等 | WhatsApp 链接卡在 "logging in" | OPEN |
| **#33419** | 🟠 中等 | Agent 无法访问文件，无法执行文件操作 | OPEN |

**v2026.3.2 回归问题突出**：多个 Issue 指向升级后功能失效，需优先排查发布流程。

---

## 6. 功能请求与路线图信号

### 高需求功能（已有 PR 或明确方向）

| Issue | 需求 | 状态 | 信号 |
|-------|------|------|------|
| **#26534** | DingTalk 首次安装渠道 | PR #33112 已实现 | ✅ 下一版本有望合入 |
| **#75** | Linux/Windows Clawdbot Apps | 长期需求 | ⚠️ 缺乏资源 |
| **#14159** | Pre-tool hooks (gate scripts) | 功能请求 | 🟡 需评估 |
| **#17481** | Window-based cron + daily run limit | 功能请求 | 🟡 需评估 |
| **#22083** | `/usage` 持久化到 openclaw.json | 功能请求 | 🟡 需评估 |
| **#13610** | 原生 secrets 管理集成 (AWS Secrets Manager, Vault) | 功能请求 | 🟡 与 #17311 相关 |

---

## 7. 用户反馈摘要

### 痛点汇总

1. **v2026.3.2 稳定性灾难**  
   多名用户在升级后遭遇完全不可用：401 认证错误（#35077, #34830）、exec 插件安装失败（#32833）、文件系统工具丢失（#34810, #33419）。用户 @paciox 直言：“You made openclaw a broken disaster, nothing works”。

2. **平台覆盖不完整**  
   Linux/Windows 用户持续抱怨缺乏官方应用（#75），企业场景受限。

3. **企业微信场景需求**  
   DingTalk 集成是明确的下一站方向，已有 PR #33112 覆盖todo/calendar/AI card。

4. **认证配置复杂**  
   macOS SSH 隧道场景下 token 传递失败（#13552）、OpenRouter API key 配置界面跳步骤（#8983）。

### 积极反馈

- PR #34739 解决 Ollama thinking 输出丢失问题，受本地模型用户好评
- Cron 手动运行漂移修复（#33956）解决长期调度痛点

---

## 8. 待处理积压

### 长期未响应的高价值 Issues

| Issue | 存在时间 | 描述 | 优先级 |
|-------|----------|------|--------|
| **#75** | 2026-01-01 | Linux/Windows Clawdbot Apps | 🔴 高 |
| **#3460** | 2026-01-28 | i18n & Localization | 🔴 高 |
| **#4899** | 2026-01-30 | 10秒延迟 vs 直接 Ollama | 🟠 中 |
| **#5290** | 2026-01-31 | Bedrock Inference Profile ID 支持 | 🟠 中 |
| **#2868** | 2026-01-27 | Claude 模型 token 消耗异常高 | 🟠 中 |

### 积压 PR 统计
- **待合并 PRs：394 个**（过去24小时新增约 30 个）
- 建议优先级：回归 Bug 修复 > DingTalk 等明确功能 > 体验优化

---

**报告生成时间：2026-03-05 08:00 UTC**  
**数据来源：GitHub OpenClaw/openclaw**

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**报告日期：2026-03-05**

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**多极分化、快速迭代**的格局。以 OpenClaw 为首的头部项目凭借 500+ 的日活跃事务量占据生态核心位置，同时衍生出大量垂直化、场景化的分支项目（Zeroclaw、PicoClaw、NanoClaw 等）。技术演进方向高度趋同：**跨平台兼容性**、**多渠道集成**、**本地模型支持**、**MCP 协议**成为共同竞速的赛道。值得关注的是，各项目普遍面临 **v2026.3.2 类版本回归问题** 和 **积压 PR 清理压力**，反映出快速迭代与质量管控之间的张力。整体生态处于功能爆发期，但成熟度参差不齐，尚未形成统一的架构范式。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新开/活跃) | PRs (待合并/已合) | Release | 健康度评估 |
|------|-------------------|-------------------|---------|-----------|
| **OpenClaw** | 500 (439/61) | 500 (394/106) | ❌ 无 | ⚠️ 高活跃但积压严重 |
| **Zeroclaw** | 49 (42/7) | 50 (39/11) | ❌ 待发布 0.1.8 | ✅ 健康迭代 |
| **EasyClaw** | 0 | 0 | ✅ v1.5.16 | 🔸 低活跃但稳定 |
| **LobsterAI** | 25 (12/13) | 18 (1/17) | ❌ 无 | ✅ 高度活跃 |
| **ZeptoClaw** | 5 | 7 (1/6) | ✅ v0.6.2 | ✅ 活跃且高效 |
| **NanoBot** | 22 | 58 (45/13) | ❌ 无 | ✅ 高度活跃 |
| **PicoClaw** | 25 (19/6) | 110 (73/37) | ❌ 无 | ⚠️ 极高吞吐量 |
| **NanoClaw** | 50 | 47 (27/20) | ❌ 无 | ✅ 高度活跃 |
| **IronClaw** | 22 | 50 | ✅ v0.14.0 + v0.15.0 | ✅ 快速迭代 |
| **TinyClaw** | 1 | 1 (0/1) | ❌ 无 | 🔸 中等活跃 |

> **数据说明**：Issues/PR 统计为过去 24 小时数据。健康度评估综合考虑事务吞吐量、积压情况、版本发布节奏。

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心参照地位

OpenClaw 作为**生态基准参照物**，其技术决策和社区动态直接影响下游分支项目的演进方向。典型例证：

- **ZeptoClaw** 明确对标 OpenClaw 进行 cron 调度器审计（Issue #246）
- **PicoClaw** 将 OpenClaw 兼容性列为路线图优先级（Issue #507）
- **多项目响应安全修复**：ZeptoClaw 主动审计 SSRF 防护，即源于对 OpenClaw 安全问题的跟进

### 3.2 规模与资源优势

| 维度 | OpenClaw | 典型分支项目 |
|------|----------|-------------|
| 日均 Issues | 500 | 20-50 |
| 日均 PRs | 500 | 10-50 |
| 贡献者规模 | 数百人活跃 | 数十人活跃 |
| 积压 PR | 394 | 1-45 |

### 3.3 技术路线差异

OpenClaw 采取 **"大而全"路线**，强调功能完整性和企业级特性（如 DingTalk 集成、Vertex 嵌入支持）；而 NanoClaw、NanoBot 等分支项目则选择 **"小而美"路径**，聚焦特定场景（如 skills 生态、本地模型优化），形成差异化竞争优势。

---

## 4. 共同关注的技术方向

### 4.1 跨平台兼容性（Windows/Linux/macOS）

| 项目 | 具体诉求 |
|------|----------|
| OpenClaw | #75 Linux/Windows Clawdbot Apps 长期需求 |
| LobsterAI | PR #261/255/238 修复 Windows ASAR/路径/沙箱问题 |
| NanoClaw | #80 多运行时支持（减少平台锁定） |
| PicoClaw | #88 Chromebook 下载指南需求 |

**分析**：跨平台覆盖是生态共识，但 OpenClaw 受限于资源难以全面响应，LobsterAI 等中国背景项目在 Windows 适配上更为积极。

### 4.2 本地模型支持（Ollama/vLLM）

| 项目 | 进展 |
|------|------|
| OpenClaw | PR #34739 支持 Ollama thinking 字段 |
| NanoClaw | #712 添加 /add-ollama 技能 |
| NanoBot | #603 Ollama 连接问题积压 20+ 天 |
| TinyClaw | #138 已合并 OpenCode CLI 模式 |
| LobsterAI | #269 Ollama 上下文问题 |

**分析**：本地模型是降低 API 成本的核心路径，各项目均已布局但支持深度不一，Ollama 连接稳定性是共性痛点。

### 4.3 多消息渠道集成

| 项目 | 新增/修复 |
|------|-----------|
| OpenClaw | #33112 DingTalk 渠道插件（里程碑） |
| LobsterAI | PR #252 Telegram 群组@响应；PR #258 飞书 Reaction |
| NanoClaw | #715 Telegram 频道+语音转录 |
| NanoBot | #1541 飞书群聊 sender 识别 |
| IronClaw | #536 扩展认证 UX（Discord/Slack/Telegram/WhatsApp） |

**分析**：钉钉（DingTalk）是 OpenClaw 生态独有的中国企业级需求，其他项目则聚焦全球化 IM 平台。

### 4.4 MCP 协议与工具生态

| 项目 | 进展 |
|------|------|
| ZeptoClaw | v0.6.2 已发布 MCP stdio 传输支持 |
| NanoBot | #1536 MCP 连接断开重试机制需求 |
| LobsterAI | #97 MCP 支持需求（高呼声） |
| PicoClaw | #1114 Hook 系统（工具执行前后钩子） |

**分析**：MCP 作为 Anthropic 推行的工具标准，已进入生态采纳期，但各项目实现深度不同。

### 4.5 安全与沙箱

| 项目 | 进展 |
|------|------|
| ZeptoClaw | GHSA-hhjv-jq77-cmvx shell bypass 漏洞已修复 |
| OpenClaw | #32833 exec plugin 安装失败；#35077 401 认证错误 |
| NanoClaw | #635 WhatsApp 认证文件权限 644→600 安全问题 |
| IronClaw | #557 安全模型审查（本地 vs 托管部署） |

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心定位 | 差异化能力 |
|------|----------|------------|
| **OpenClaw** | 生态核心/企业级 | DingTalk 集成、多云部署、Gateway |
| **Zeroclaw** | 混合记忆架构 | postgres_qdrant_hybrid 后端 |
| **ZeptoClaw** | 安全敏感型 | shell blocklist、SSRF 防护、MCP |
| **PicoClaw** | 多代理协调 | Swarm 模式（NAT JetStream）、Hook 系统 |
| **NanoClaw** | 轻量可扩展 | Skills 生态、PID 单例保护 |
| **NanoBot** | 多平台部署 | 飞书/Telegram/QQ 全覆盖、Web UI |
| **LobsterAI** | 中国市场 | 网易 IM（NIM/Xiaomifeng）、飞书深度集成 |
| **IronClaw** | 托管服务 | OAuth 路由、多租户、E2E 基准测试 |
| **TinyClaw** | 极简 CLI | OpenCode 集成、无社交平台依赖 |
| **EasyClaw** | 桌面客户端 | macOS 原生体验 |

### 5.2 目标用户

- **企业级**：OpenClaw、IronClaw、Zeroclaw
- **开发者/极客**：NanoClaw、TinyClaw、ZeptoClaw
- **中国用户**：LobsterAI（网易系）、OpenClaw（DingTalk）
- **多平台用户**：NanoBot、PicoClaw

### 5.3 技术架构

| 架构类型 | 代表项目 | 特征 |
|----------|----------|------|
| **单体大核心** | OpenClaw | 功能全面、依赖复杂、积压严重 |
| **模块化插件** | PicoClaw/NanoClaw | Hook 系统、Skills 生态 |
| **云原生** | IronClaw | OAuth 路由、多租户、Podman 支持 |
| **轻量客户端** | EasyClaw | 桌面原生、低依赖 |

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

| 层级 | 项目 | 特征 |
|------|------|------|
| **🚀 快速迭代** | OpenClaw、PicoClaw、NanoBot、NanoClaw、IronClaw | 日均 50+ 事务，功能快速演进，但积压 PR 较多 |
| **📈 稳定增长** | Zeroclaw、LobsterAI、ZeptoClaw | 事务量适中，功能与质量平衡 |
| **🔸 维护期** | EasyClaw、TinyClaw | 低事务量，功能冻结或小规模迭代 |

### 6.2 成熟度信号

| 成熟度指标 | 领先项目 | 待改进项目 |
|------------|----------|------------|
| 版本发布节奏 | IronClaw (双版本连发)、ZeptoClaw | OpenClaw (积压严重)、NanoBot |
| Bug 修复响应 | ZeptoClaw (安全漏洞 24h 内修复) | NanoClaw (5 个 High Bug 无 Fix PR) |
| 社区响应度 | LobsterAI (问题响应及时) | OpenClaw (#75 i18n 拖延)、NanoClaw (#80 30天+) |
| 文档完整性 | ZeptoClaw (Disclaimer)、PicoClaw (需加强 #88) | TinyClaw (#393 更新文档缺失) |

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势

| 趋势 | 证据 | 开发者建议 |
|------|------|------------|
| **MCP 协议采纳加速** | ZeptoClaw v0.6.2、LobsterAI/NanoBot 需求旺盛 | 工具生态开发者应优先适配 MCP 标准 |
| **本地模型部署常态化** | 6+ 项目布局 Ollama/vLLM | 优化本地模型兼容性将成为竞争差异化点 |
| **多代理协作兴起** | PicoClaw Swarm (#709)、NanoBot Agent Swarm (#1493) | 架构设计需考虑多 Agent 通信层 |
| **中国企业级需求涌现** | DingTalk 里程碑、网易 IM 深度集成 | 中国市场有独特渠道需求壁垒 |
| **安全成为硬性要求** | SSRF 防护、shell bypass 修复、OAuth 路由 | 生产部署必须重视安全基线 |

### 7.2 风险预警

| 风险 | 相关项目 | 建议 |
|------|----------|------|
| **版本回归问题** | OpenClaw v2026.3.2 多起严重 Bug | 发布前加强回归测试，特别是认证和插件系统 |
| **积压 PR 清理压力** | OpenClaw 394、NanoBot 45、PicoClaw 73 | 建立优先级评估机制，避免功能通货膨胀 |
| **供应商锁定焦虑** | NanoClaw #80 (34👍)、TinyClaw #124 | 多 Provider 支持应纳入路线图 |
| **生产环境稳定性** | NanoClaw #595 OOM 40h、NanoBot #1481 | 长时间运行测试和监控告警需完善 |

### 7.3 机会点

1. **OpenClaw 生态贡献**：积压 PR 清理、DingTalk 集成完善、i18n 国际化
2. **安全基建**：SSRF 防护、Canary Tokens（Zeroclaw #2590）、上下文溢出处理
3. **中国本地化**：LobsterAI 的网易 IM 方案可反哺 OpenClaw 生态
4. **测试基准**：IronClaw E2E 测试系统（#512）值得其他项目借鉴

---

**报告说明**：本报告基于 2026-03-05 各项目 GitHub 公开数据生成，活跃度数据存在统计口径差异，仅供参考。

---

## 同赛道项目详细报告

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-05)

## 1. 今日速览

项目今日保持高度活跃，共产生 **99 条 GitHub 活动**（49 Issues + 50 PRs）。PR 待合并队列积压 39 条，显示开发节奏强劲。Issue 活跃度较高（42 新开/活跃），但关闭率偏低（7/49 ≈ 14%），积压压力需关注。代码合并与功能开发并行推进，整体项目处于健康迭代状态。

---

## 2. 版本发布

**无新版本发布**

PR #2775 已将版本号提升至 0.1.8，但截至本日报截稿尚未正式发布。近期可关注 Release 动态。

---

## 3. 项目进展

### 合并/关闭的重要 PR

| PR | 作者 | 描述 | 状态 |
|---|---|---|---|
| [#2775](https://github.com/zeroclaw-labs/zeroclaw/pull/2775) | @theonlyhennygod | release: bump version to 0.1.8 | **OPEN** (待发布) |
| [#2789](https://github.com/zeroclaw-labs/zeroclaw/pull/2789) | @theonlyhennygod | fix(agent/config): resolve #2784 #2782 #2781 tool-loop and gateway regressions | **OPEN** (待合并) |
| [#2774](https://github.com/zeroclaw-labs/zeroclaw/pull/2774) | @day01 | feat(memory): add postgres_qdrant_hybrid backend with qdrant sync-state | **OPEN** (XL size) |
| [#2777](https://github.com/zeroclaw-labs/zeroclaw/pull/2777) | @JordanTheJet | ci: migrate from Hetzner VMs to Blacksmith + GitHub-hosted runners | **OPEN** |
| [#2787](https://github.com/zeroclaw-labs/zeroclaw/pull/2787) | @Miggleness | (fix)Dockerfile: Copy skills folder to builder image | **OPEN** |
| [#2493](https://github.com/zeroclaw-labs/zeroclaw/pull/2493) | @leszek3737 | fix(memory): serialize MemoryCategory as plain string in JSON API responses | **CLOSED** |
| [#2776](https://github.com/zeroclaw-labs/zeroclaw/pull/2776) | @WAlexandreW | feat(channel): Add Mistral Voxtral support for voice transcription | **CLOSED** |

**关键进展**：
- **postgres_qdrant_hybrid 内存后端** (#2774)：新增混合检索后端，PostgreSQL 作为 CRUD 主存储，Qdrant 提供语义检索能力
- **CI 基础设施迁移** (#2777)：从 Hetzner 自托管 VM 迁移至 Blacksmith + GitHub-hosted runners，降低运维成本
- **Mistral Voxtral 语音转写** (#2776/#2778)：打破 Groq Whisper 硬依赖，支持多 STT 提供商
- **多个回归修复** (#2789)：由 Distinguished Contributor @theonlyhennygod 操刀修复近期 tool-loop、gateway、deferred-action 相关问题

---

## 4. 社区热点

以下 Issues/PRs 讨论热度最高，反映核心用户诉求：

### 热门 Issues

| Issue | 评论数 | 标签 | 热度分析 |
|---|---|---|---|
| [#2595](https://github.com/zeroclaw-labs/zeroclaw/issues/2595) | 8 | bug, S1 | **Web Agent 连接问题**：daemon 模式下 web agent 无法连接，影响生产工作流 |
| [#2590](https://github.com/zeroclaw-labs/zeroclaw/issues/2590) | 5 | enhancement | **安全增强**：用户提议添加 Canary Tokens（防泄露检测）和 Semantic VectorDB Guard（防提示注入），安全敏感型用户强需求 |
| [#2611](https://github.com/zeroclaw-labs/zeroclaw/issues/2611) | 5 | enhancement | **Provider 一致性**：工厂、发现、测试矩阵需同步维护，反映代码组织问题 |
| [#2274](https://github.com/zeroclaw-labs/zeroclaw/issues/2274) | 4 | enhancement, RFI | **Chat-based CRM 用例**：社区用户调研报告，轻量运行时、多租户需求明确 |
| [#2691](https://github.com/zeroclaw-labs/zeroclaw/issues/2691) | 2 | enhancement | **代码质量批评**：获得 6 👍，反映部分用户对项目协作方式的关切 |

### 热门 PRs

| PR | 热度分析 |
|---|---|
| [#2789](https://github.com/zeroclaw-labs/zeroclaw/pull/2789) | 聚焦修复 3 个回归问题（gateway 配置兼容、deferred-action 误判、tool-loop），直接影响用户体验 |
| [#2774](https://github.com/zeroclaw-labs/zeroclaw/pull/2774) | 混合向量检索后端，技术架构有突破性进展 |

---

## 5. Bug 与稳定性

### 严重 Bug（S0-S1）

| Issue | 严重度 | 状态 | 说明 |
|---|---|---|---|
| [#2600](https://github.com/zeroclaw-labs/zeroclaw/issues/2600) | S0 | **OPEN** | Raspberry 3B+ 无法创建文件，安全沙箱问题 |
| [#2588](https://github.com/zeroclaw-labs/zeroclaw/issues/2588) | S0 | **OPEN** | 请求缺少 tools 参数，可能导致数据丢失 |
| [#2679](https://github.com/zeroclaw-labs/zeroclaw/issues/2679) | S0 | **OPEN** | 审计日志配置无效，安全合规风险 |
| [#2595](https://github.com/zeroclaw-labs/zeroclaw/issues/2595) | S1 | **OPEN** | Web agent 连接错误，工作流阻塞 |
| [#2782](https://github.com/zeroclaw-labs/zeroclaw/issues/2782) | S1 | **OPEN** | Discord 环境下无法写入/编辑文件 |
| [#2702](https://github.com/zeroclaw-labs/zeroclaw/issues/2702) | S1 | **OPEN** | Matrix OTK 冲突循环，E2EE 解密失败 |
| [#2698](https://github.com/zeroclaw-labs/zeroclaw/issues/2698) | S1 | **OPEN** | Nextcloud Talk webhook 格式不兼容，工作流阻塞 |

### 中等 Bug（S2-S3）

| Issue | 严重度 | 状态 | 说明 |
|---|---|---|---|
| [#2682](https://github.com/zeroclaw-labs/zeroclaw/issues/2682) | S2 | **OPEN** | Web UI Integrations 加载失败 |
| [#2665](https://github.com/zeroclaw-labs/zeroclaw/issues/2665) | S2 | **OPEN** | Memory 页面 React 错误，自定义 category 返回对象而非字符串 |
| [#2784](https://github.com/zeroclaw-labs/zeroclaw/issues/2784) | S1 | **OPEN** | Gateway require_pairing=false 仍要求配对码 |
| [#1575](https://github.com/zeroclaw-labs/zeroclaw/issues/1575) | S3 | **CLOSED** | Dashboard agent 访问错误（crypto.randomUUID） |

> **⚠️ 已存在 Fix PR**：#2789 修复 #2784、#2782、#2781 相关回归问题

---

## 6. 功能请求与路线图信号

以下功能请求具有较高合理性，可能纳入下一版本：

| Issue | 功能 | 合理性分析 |
|---|---|---|
| [#2590](https://github.com/zeroclaw-labs/zeroclaw/issues/2590) | **Canary Tokens + Semantic VectorDB Guard** | 安全防御正交补充，已有 VectorDB 基础设施，实现成本可控 |
| [#2788](https://github.com/zeroclaw-labs/zeroclaw/issues/2788) | **MariaDB 内存支持** | SQLite 不足，PostgreSQL 非 always 可用，企业自托管标准化需求 |
| [#2602](https://github.com/zeroclaw-labs/zeroclaw/issues/2602) | **LiteLLM Provider Alias** | OpenAI 兼容网关已支持 vLLM/SGLang/LM Studio，LiteLLM 呼声高 |
| [#2668](https://github.com/zeroclaw-labs/zeroclaw/issues/2668) | **Matrix 语音转写** | 与 #2776/2778 Mistral Voxtral PR 互补，可统一实现 |
| [#2601](https://github.com/zeroclaw-labs/zeroclaw/issues/2601) | **Telegram 配置环境变量** | 安全加固需求，避免明文存储用户 ID |
| [#2703](https://github.com/zeroclaw-labs/zeroclaw/issues/2703) | **按需 Skill 加载** | 性能优化，减少启动时系统提示膨胀 |
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | **多 Agent 路由** | 企业级需求，OpenClaw 已支持，路线图信号明确 |

---

## 7. 用户反馈摘要

### 痛点与不满

1. **生产环境稳定性**：多起 S0-S1 级问题（#2600 Raspberry、#2595 Web Agent、#2588 tools 参数）影响生产部署信心
2. **代码质量关切**：#2691 获得 6 👍，反映部分用户对代码库质量和社区协作方式的担忧
3. **文档/配置混乱**：LM Studio 自定义连接器配置混乱 (#2669)、Windows HOME 变量问题 (#2688)
4. **Webhook 兼容性**：Nextcloud Talk 格式不符 (#2698)，用户需自行适配

### 积极信号

1. **CRM 场景需求**：#2274 显示社区评估用于 Chat-based CRM，轻量运行时价值被认可
2. **安全增强意愿**：Canary Tokens 和语义检索防护请求反映对安全性的重视
3. **多平台覆盖**：Matrix、Telegram、Discord、Slack 等 channel 全面开花

---

## 8. 待处理积压

以下 Issue 长期未响应或存在潜在风险：

| Issue | 积压时间 | 风险 |
|---|---|---|
| [#898](https://github.com/zeroclaw-labs/zeroclaw/issues/898) | 2026-02-19 已关闭 | 视觉模型支持，关闭但未合并 PR，可能需求未完全满足 |
| [#1175](https://github.com/zeroclaw-labs/zeroclaw/issues/1175) | 2026-02-21 已关闭 | Slack channel ID 可选但必填，关闭但需验证修复 |
| [#1575](https://github.com/zeroclaw-labs/zeroclaw/issues/1575) | 2026-02-24 已关闭 | Dashboard crypto.randomUUID 问题，需确认回归测试 |
| [#2691](https://github.com/zeroclaw-labs/zeroclaw/issues/2691) | 2026-03-04 | 代码质量批评，应正面回应社区关切 |

> **建议**：维护团队可优先处理 #2691 社区关系问题，同时推进 #2789 回归修复 PR 合并以缓解用户投诉。

---

*Generated from GitHub data - 2026-03-05*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-05)

## 1. 今日速览

今日 EasyClaw 项目整体处于**低活跃度**状态。过去24小时内无新增 Issue 或 Pull Request 动态，但成功发布了 **v1.5.16** 版本。项目维护工作正常推进，主要聚焦于版本迭代与现有功能优化。鉴于无新增社区互动，项目健康度评估为**稳定**但需关注社区参与度。

---

## 2. 版本发布 ✅

### v1.5.16 发布

**发布详情：**
- **版本号：** v1.5.16
- **发布类型：** 常规版本更新

**安装说明（macOS 已知问题）：**

部分 macOS 用户可能遇到 **"'EasyClaw' is damaged and can't be opened"** 提示，这是 macOS Gatekeeper 安全机制拦截未签名应用所致，并非文件实际损坏。

**解决方法：**
1. 打开 **Terminal** 终端应用
2. [步骤信息在原文中截断，建议用户查阅完整发布说明]

**链接：** [Release v1.5.16](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.5.16)

> ⚠️ **注意：** 由于安装说明内容截断，建议维护者补充完整操作步骤以便用户正确处理 macOS 签名问题。

---

## 3. 项目进展

过去24小时内 **无 PR 合并或关闭** 记录。项目在 v1.5.16 发布后可能处于功能冻结期，准备下一轮开发周期。

---

## 4. 社区热点

**今日无活跃讨论。** 暂无产生评论、Reaction 或高关注度的 Issues/PRs。

---

## 5. Bug 与稳定性

**今日无新 Bug 报告。** 未发现崩溃、回归问题报告。

---

## 6. 功能请求与路线图信号

**今日无新功能请求。** 缺乏社区输入可能影响下一版本功能规划方向。

---

## 7. 用户反馈摘要

基于今日 **0 条 Issues 更新** 数据，无可提取的用户痛点、使用场景或满意度反馈。建议维护者关注往期 Issues 以持续改进产品。

---

## 8. 待处理积压

**长期无响应 Issue/PR 预警：** 今日无新数据，但建议定期检查历史未关闭 Issue，保持社区响应度。

---

### 📊 数据一览

| 指标 | 数值 |
|------|------|
| 新增 Issues | 0 |
| 关闭 Issues | 0 |
| 新增 PRs | 0 |
| 合并/关闭 PRs | 0 |
| 新版本发布 | 1 (v1.5.16) |

---

**报告生成时间：** 2026-03-05  
**数据来源：** GitHub (github.com/gaoyangz77/easyclaw)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-05)

## 今日速览

过去24小时内，LobsterAI 项目保持高度活跃状态，共产生 **43** 条社区动态（25条Issues + 18条PRs）。项目合并了 **17** 个 PR，仅 **1** 个 PR 处于待合并状态，未发布新版本。值得注意的是，今日关闭的 Issues 数量（13）与新开/活跃 Issues（12）基本持平，显示项目在问题响应方面保持良好节奏。Windows 兼容性和多平台 IM 消息处理是今日开发重点，多个相关修复 PR 已合并。

---

## 版本发布

**无新版本发布**

过去24小时内，项目未发布新的 Release 版本。

---

## 项目进展

今日项目合并了 **17** 个 Pull Request，以下为重要进展：

1. **PR #272** - [feat: replace skill-creator with new version](https://github.com/netease-youdao/LobsterAI/pull/272)  
   替换 skill-creator 为新版本，推动 Skill 生态能力升级。

2. **PR #271** - [feat: optimize prompt size and token usage for cowork](https://github.com/netease-youdao/LobsterAI/pull/271)  
   优化 prompt 大小与 token 使用效率，同时改进模型连接性测试弹窗体验。

3. **PR #264** - [feat: 将 NIM Gateway 从单实例 node-nim SDK 迁移到多实例 nim.js SDK](https://github.com/netease-youdao/LobsterAI/pull/264)  
   解决 node-nim 单实例限制，支持 NIM Gateway 和 Xiaomifeng Gateway 同时运行，提升网易 IM 集成的灵活性。

4. **PR #261** - [fix: Windows 兼容性修复 - OpenClaw runtime 构建与启动](https://github.com/netease-youdao/LobsterAI/pull/261)  
   修复 ASAR 路径分隔符、ESM + ASAR 兼容、gateway.mode 缺失等 Windows 平台关键问题。

5. **PR #255** - [fix: 修复中文路径下 BASH_ENV 编码异常及 Skills 路径不可用](https://github.com/netease-youdao/LobsterAI/pull/255)  
   解决 Windows 环境下中文用户名/路径导致的编码损坏和技能路径问题。

6. **PR #258** - [feat: IM消息处理时在用户消息上添加 Reaction 状态图标](https://github.com/netease-youdao/LobsterAI/pull/258)  
   为飞书、Telegram、Discord 平台的消息处理添加"正在处理"视觉反馈。

7. **PR #252** - [feat: telegram机器人，在群中只接收@机器人的消息](https://github.com/netease-youdao/LobsterAI/pull/252)  
   解决 Telegram 群组中机器人过度响应的问题（关闭 #181, #241）。

8. **PR #250** - [fix: 修复图片附件文件路径未传递给模型导致 skill 引用路径错误](https://github.com/netease-youdao/LobsterAI/pull/250)  
   修复视觉模型与 skill 配合时，图片路径未传递导致模型无法定位文件的问题。

9. **PR #238** - [fix: 修复 Windows 沙箱 VM 启动、附件及镜像问题](https://github.com/netease-youdao/LobsterAI/pull/238)  
   提升 Windows 沙箱环境的启动可靠性和文件访问稳定性。

10. **PR #240** - [OPEN] [Feat/workflow enhancement](https://github.com/netease-youdao/LobsterAI/pull/240)  
    新增 workflow 功能，支持多 agent 协作与模型分配，目前处于待审核状态。

---

## 社区热点

以下 Issues 和 PRs 获得较多关注或具有代表性意义：

| 类型 | 编号 | 标题 | 状态 | 评论数 | 热度分析 |
|------|------|------|------|--------|----------|
| Issue | [#244](https://github.com/netease-youdao/LobsterAI/issues/244) | mac版输入不流畅 | OPEN | 2 | Mac 用户反馈输入法卡顿、显示延迟，影响使用体验 |
| Issue | [#253](https://github.com/netease-youdao/LobsterAI/issues/253) | windows系统兼容问题：部分skill无法适配windows | CLOSED | 2 | Windows 平台 skill 调用受限，需通过 bash 命令触发 |
| Issue | [#235](https://github.com/netease-youdao/LobsterAI/issues/235) | 怎么更新 APP | OPEN | 1 | 用户询问应用内更新功能，版本 0.1.23 |
| Issue | [#230](https://github.com/netease-youdao/LobsterAI/issues/230) | 对中文支持不友好，路径中有中文会额外增加空格 | OPEN | 1 | 中文文件名处理错误，插入多余空格导致文件无法识别 |
| Issue | [#269](https://github.com/netease-youdao/LobsterAI/issues/269) | 使用ollama时无法获取上下文 | OPEN | 0 | 本地模型上下文保持问题 |
| Issue | [#97](https://github.com/netease-youdao/LobsterAI/issues/97) | 希望增加MCP的支持 | CLOSED | 1 | MCP 能力需求强烈，已有多个相关 issue |

**热点分析**：今日社区关注点集中在 **跨平台兼容性**（Windows/Mac）、**本地模型支持**（Ollama）、以及 **IM 平台集成**（Telegram/飞书）三个方面。Mac 输入流畅度和中文路径问题是用户反馈的痛点。

---

## Bug 与稳定性

按严重程度排列的 Bug 报告：

| 严重程度 | Issue | 描述 | 状态 | 相关 Fix PR |
|----------|-------|------|------|-------------|
| **高** | [#244](https://github.com/netease-youdao/LobsterAI/issues/244) | Mac 版输入严重卡顿，拼音输入法不流畅 | OPEN | - |
| **高** | [#269](https://github.com/netease-youdao/LobsterAI/issues/269) | 使用 Ollama 时无法获取上下文 | OPEN | - |
| **中** | [#270](https://github.com/netease-youdao/LobsterAI/issues/270) | Prompt is too long | OPEN | PR #271 已优化 |
| **中** | [#266](https://github.com/netease-youdao/LobsterAI/issues/266) | 脚本输出结果被格式化处理，导致信息丢失 | CLOSED | - |
| **低** | [#251](https://github.com/netease-youdao/LobsterAI/issues/251) | 定时任务的通知IM没有更新小蜜蜂 | OPEN | - |
| **低** | [#224](https://github.com/netease-youdao/LobsterAI/issues/224) | 用户名为中文时无法写文件/使用skills | CLOSED | PR #255 已修复 |

**稳定性评估**：项目今日未报告崩溃或严重回归问题。Windows 平台的多项修复（PR #261, #255, #238）已合并，有望显著提升 Windows 用户体验。

---

## 功能请求与路线图信号

用户提出的新功能需求及可行性分析：

| Issue | 功能请求 | 需求来源 | 预估纳入版本 |
|-------|----------|----------|--------------|
| [#97](https://github.com/netease-youdao/LobsterAI/issues/97) | MCP (Model Context Protocol) 支持 | 多用户呼吁 | 预计后续版本 |
| [#198](https://github.com/netease-youdao/LobsterAI/issues/198) | MCP 设置界面 + 多模型切换路由 | 开发者 | 预计后续版本 |
| [#268](https://github.com/netease-youdao/LobsterAI/issues/268) | 对接腾讯官方 QQ 开放平台 | 用户需求 | 待评估 |
| [#265](https://github.com/netease-youdao/LobsterAI/issues/265) | 支持 WhatsApp | 用户需求 | 待评估 |
| [#256](https://github.com/netease-youdao/LobsterAI/issues/256) | 本地模型与 API 模型智能切换 | 技术需求 | 待评估 |
| [#240](https://github.com/netease-youdao/LobsterAI/pull/240) | Workflow 多 Agent 协作 | 功能增强 | PR 审核中 |

**路线图信号**：MCP 支持是多用户重复提出的需求，预计将成为下一版本的重点功能方向。Workflow 增强功能的 PR (#240) 已提交审核，代表项目向多 Agent 协作方向演进。

---

## 用户反馈摘要

从 Issues 评论中提炼的用户痛点与使用场景：

1. **跨平台体验差异明显**  
   - Windows 用户受困于 skill 调用限制、中文路径编码、ASAR 兼容性等问题  
   - Mac 用户反馈输入法卡顿、性能不佳  

2. **本地模型支持待完善**  
   - Ollama 上下文保持失败，本地模型能力受限  
   - 用户期望本地模型与 API 模型能智能切换  

3. **IM 平台集成需优化**  
   - Telegram 群组过度响应问题（已修复于 PR #252）  
   - 飞书消息状态图标缺失（已修复于 PR #258）  
   - 定时任务通知无法指定具体对话框  

4. **更新机制不明确**  
   - 用户不清楚如何更新应用（Issue #235）  
   - 覆盖安装频繁失败（Issue #169）  

5. **中文环境兼容性**  
   - 中文路径空格问题、中文用户名导致功能失效等  

**用户满意度**：多数功能性 issue 已通过 PR 修复，但跨平台兼容性和本地模型支持仍是用户主要不满来源。

---

## 待处理积压

以下 Issue 或 PR 长期未响应或需重点关注：

| 编号 | 类型 | 标题 | 创建时间 | 当前状态 | 提醒 |
|------|------|------|----------|----------|------|
| [#169](https://github.com/netease-youdao/LobsterAI/issues/169) | Issue | 实现不了覆盖安装 | 2026-02-27 | CLOSED | 需验证修复效果 |
| [#97](https://github.com/netease-youdao/LobsterAI/issues/97) | Issue | 希望增加MCP的支持 | 2026-02-25 | CLOSED | 需官方路线图回应 |
| [#156](https://github.com/netease-youdao/LobsterAI/issues/156) | Issue | telegram 沟通时没有 typing 状态 | 2026-02-27 | CLOSED | 需验证修复效果 |
| [#240](https://github.com/netease-youdao/LobsterAI/pull/240) | PR | Feat/workflow enhancement | 2026-03-03 | OPEN | 等待审核合并 |

---

**报告生成时间**：2026-03-05  
**数据来源**：GitHub LobsterAI Repository (github.com/netease-youdao/LobsterAI)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-03-05

## 1. 今日速览

ZeptoClaw 项目今日保持高度活跃。24小时内共处理 **5 条 Issues** 和 **7 条 Pull Requests**，并成功发布 **v0.6.2** 版本，带来 MCP stdio 传输和多模态图像输入支持两项重要功能。安全方面取得显著进展——修复了 GitHub 披露的 Android shell 块列表绕过漏洞（GHSA-hhjv-jq77-cmvx）。同时，项目正积极响应 OpenClaw 的最新安全修复，着手审计自身 cron 调度器并规划 SSRF 防护和上下文溢出恢复等高优先级功能。整体项目健康度良好，合并率达 86%（6/7 PR），仅 1 个 PR 待合并。

---

## 2. 版本发布

### 🎉 v0.6.2 已发布

**发布内容：**

| 变更类型 | 描述 | 相关 PR |
|---------|------|--------|
| 🆕 **功能** | 新增 MCP stdio 传输和 MCP tool 注册支持 | [#192](https://github.com/qhkm/zeptoclaw/pull/192) |
| 📝 **文档** | 添加免责声明——不涉及 token、加密货币、区块链 | [#204](https://github.com/qhkm/zeptoclaw/pull/204) |
| 🆕 **功能** | 新增多模态视觉/图像输入支持 | (Release note) |

**迁移注意事项：** 无破坏性变更提示，建议用户升级以获得 MCP 集成能力。

---

## 3. 项目进展

### ✅ 已合并/关闭的 PR（共 6 条）

| PR | 状态 | 描述 | 意义 |
|----|------|------|------|
| [#248](https://github.com/qhkm/zeptoclaw/pull/248) | **CLOSED** | 安全修复：patch shell blocklist bypass 和 Android rm flag permutation | 修复 3 个 GitHub 安全 advisory (GHSA-hhjv-jq77-cmvx HIGH)，防止恶意构造的命令绕过沙箱 |
| [#242](https://github.com/qhkm/zeptoclaw/pull/242) | **CLOSED** | 修复：稳定化 Docker/act 环境下的 plugin 和 doctor 测试 | 解决长期测试环境不一致问题，提升 CI 可靠性 |
| [#183](https://github.com/qhkm/zeptoclaw/pull/183) | **CLOSED** | 依赖更新：更新 cargo/npm/Docker/GitHub Actions，修复 clippy 警告 | 供应链安全加固，代码质量改进 |
| [#232](https://github.com/qhkm/zeptoclaw/pull/232) | **CLOSED** | 依赖升级：gog-calendar `b2cb233` → `d30a532` | 依赖维护 |
| [#229](https://github.com/qhkm/zeptoclaw/pull/229) | **CLOSED** | 依赖升级：gog-core `b2cb233` → `d30a532` | 依赖维护 |
| [#228](https://github.com/qhkm/zeptoclaw/pull/228) | **CLOSED** | 依赖升级：gog-gmail `b2cb233` → `d30a532` | 依赖维护 |

### 🔄 待合并的 PR（共 1 条）

| PR | 状态 | 描述 | 预计影响 |
|----|------|------|---------|
| [#247](https://github.com/qhkm/zeptoclaw/pull/247) | **OPEN** | 功能：新增 xAI (Grok) 和 Baidu Qianfan provider 预设 | 完善多 provider 生态，关闭 #243 |

---

## 4. 社区热点

### 🔥 今日活跃 Issues

| Issue | 标签 | 热度 | 摘要 |
|-------|------|------|------|
| [#246](https://github.com/qhkm/zeptoclaw/issues/246) | chore, P3 | 🟡 | **cron 调度器可靠性审计**：对标 OpenClaw 2026.2.2–2026.2.6 的修复，审计 `src/cron/` 模块 |
| [#245](https://github.com/qhkm/zeptoclaw/issues/245) | feat, P2 | 🔴 | **安全：skill installer 添加 SSRF 防护**：防止恶意 URL 攻击内部服务（如 AWS metadata `169.254.169.254`） |
| [#244](https://github.com/qhkm/zeptoclaw/issues/244) | feat, P2 | 🔴 | **两层上下文溢出恢复**：解决超大工具结果（如大型 git diff）超过模型上下文窗口的问题 |
| [#243](https://github.com/qhkm/zeptoclaw/issues/243) | feat, P3 | 🟡 | **新增 xAI (Grok) 和 Baidu Qianfan provider 预设**：降低用户接入门槛，已有对应 PR #247 |

**分析：** 今日热点集中在 **安全增强**（SSRF guardrails、shell bypass 修复）和 **多 provider 生态扩展**（xAI、百度千帆）两个方向。P2 高优先级 Issues 占比 50%，显示项目对安全性和核心功能的重视。

---

## 5. Bug 与稳定性

### 🐛 今日报告/处理的 Bug

| Issue | 严重程度 | 状态 | 描述 | 修复状态 |
|-------|---------|------|------|---------|
| **GHSA-hhjv-jq77-cmvx** | 🔴 HIGH | 已修复 | Android `device_shell()` blocklist 绕过——通过参数排列（如 `rm -r -f`）规避检测 | ✅ PR #248 已合并 |
| #238 | 🟠 MEDIUM | 已关闭 | Docker/act 与本地测试结果不匹配（plugin/doctor 测试） | ✅ PR #242 已合并 |

**备注：** 今日无新增公开 Bug 报告。安全漏洞通过 GitHub Security Advisories 渠道披露并已快速修复。

---

## 6. 功能请求与路线图信号

### 📋 今日新增功能请求

| Issue | 优先级 | 预计纳入版本 | 描述 |
|-------|--------|-------------|------|
| [#245](https://github.com/qhkm/zeptoclaw/issues/245) | **P2-high** | 下一 minor | **SSRF guardrails**：skill installer 下载防护，预计实现路径明确 |
| [#244](https://github.com/qhkm/zeptoclaw/issues/244) | **P2-high** | 下一 minor | **两层上下文溢出恢复**：针对超大工具结果的处理，方案已有思路 |
| [#243](https://github.com/qhkm/zeptoclaw/issues/243) | **P3-normal** | v0.6.2+ | **xAI/百度千帆预设**：PR #247 已在 review，预计近期合并 |
| [#246](https://github.com/qhkm/zeptoclaw/issues/246) | **P3-normal** | 待定 | **cron 可靠性审计**：对标 OpenClaw 的长期技术债务 |

**路线图信号：** 下一版本 likely 聚焦 **安全加固**（SSRF）+ **多模态能力完善**（上下文管理）+ **多 provider 生态**。

---

## 7. 用户反馈摘要

### 💬 Issues 评论洞察

**痛点与需求：**

- **测试环境不一致**：Issue #238 反馈本地测试通过但 Docker/act 失败，已通过 PR #242 修复并添加 root 用户检测逻辑
- **Provider 接入门槛**：Issue #243 指出 xAI 和百度千fan虽已支持但缺少预设、环境变量和文档，已通过 PR #247 解决

**使用场景暗示：**

- Skill installer 的远程下载功能被高频使用（对应 SSRF 安全问题）
- 大型代码库/项目用户面临工具结果超上下文问题（对应 #244）

**满意度信号：**

- v0.6.2 的 MCP stdio 传输和多模态支持表明项目在 AI Agent 集成方向持续投入，社区期待度高

---

## 8. 待处理积压

### ⚠️ 需关注的中长期 Issue

| Issue | 积压时长 | 优先级 | 描述 | 建议 |
|-------|---------|--------|------|------|
| [#246](https://github.com/qhkm/zeptoclaw/issues/246) | 1 天 | P3 | cron 调度器审计 | 需对照 OpenClaw 2026.2.2–2026.2.6 修复，建议分配专项时间 |
| [#244](https://github.com/qhkm/zeptoclaw/issues/244) | 1 天 | P2 | 两层上下文溢出恢复 | 技术方案较复杂，建议提前启动技术评审 |

**备注：** 项目积压情况健康，无长期无人响应的 Issue，最近的 Issue 均在一周内创建。

---

*📊 数据来源：GitHub (github.com/qhkm/zeptoclaw) | 统计周期：2026-03-04 00:00 – 2026-03-05 00:00 (UTC)*

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-05)

## 1. 今日速览

过去24小时内，NanoBot 项目保持高度活跃状态：**22 条 Issues 更新**，**58 条 PR 更新**（其中45条待合并，13条已合并/关闭）。社区参与度较高，多个功能性 PR 正在推进，包括 Telegram 流式消息、飞书群聊sender识别等特性。整体项目处于健康迭代状态，功能完善与Bug修复并行推进。

---

## 2. 版本发布

**本期无新版本发布**。最近无 Release 记录。

---

## 3. 项目进展

| PR | 状态 | 描述 | 推进内容 |
|---|---|---|---|
| [#1540](https://github.com/HKUDS/nanobot/pull/1540) | 🔴 CLOSED | Add sender_id to runtime context for Feishu group chat sender identification | 飞书群聊sender识别功能（后被 #1541 替代） |
| [#1532](https://github.com/HKUDS/nanobot/pull/1532) | 🔴 CLOSED | Add Web UI setup wizard and Railway web deployment template | Web UI 部署模板 |
| [#1511](https://github.com/HKUDS/nanobot/pull/1511) | 🔴 CLOSED | fix: add size limit to ReadFileTool to prevent OOM | 防止大文件读取导致OOM崩溃 |
| [#1531](https://github.com/HKUDS/nanobot/pull/1531) | 🔴 CLOSED | fix(feishu): convert audio type to file for API compatibility | 修复飞书语音消息下载失败问题 |
| [#1507](https://github.com/HKUDS/nanobot/pull/1507) | 🔴 CLOSED | fix: guard validate_params against non-dict input | 修复LLM返回非法工具参数时的崩溃 |
| [#1508](https://github.com/HKUDS/nanobot/pull/1508) | 🔴 CLOSED | fix: handle invalid ISO datetime in CronTool gracefully | 修复CronTool处理非法日期时间格式 |
| [#1521](https://github.com/HKUDS/nanobot/pull/1521) | 🔴 CLOSED | test: fix test failures from refactored cron and context builder | 测试用例修复 |

**关键进展**：7个PR在本期关闭，其中包含多个稳定性修复（OOM防护、参数校验、日期格式处理）和功能改进。项目测试覆盖率得到提升。

---

## 4. 社区热点

| 话题 | 类型 | 评论数 | 热度分析 |
|---|---|---|---|
| [#1481](https://github.com/HKUDS/nanobot/issues/1481) | Issue | 7 | **Bot响应异常** - 用户报告Windows环境下使用claude-sonnet-4.6时持续回复"I'm on it"无法正常交互，是本期讨论最活跃的问题 |
| [#603](https://github.com/HKUDS/nanobot/issues/603) | Issue | 5 | **Ollama本地模型无法使用** - 配置vllm provider连接本地Ollama一直卡在"nanobot is thinking"，历史积压问题 |
| [#397](https://github.com/HKUDS/nanobot/issues/397) | Issue | 5 | **功能请求：多模型聚合平台与OAuth认证** - 社区对RouterWay等平台集成需求强烈 |
| [#1459](https://github.com/HKUDS/nanobot/issues/1459) | Issue | 4 | **Codex-5.3-codex模型懒执行** - Bot不执行实际操作，只回复"会读取"但实际未读取 |

**热点解读**：用户对本地部署(Local Ollama)和模型执行可靠性问题关注度最高，反映出生产环境使用场景的稳定性需求。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#1487](https://github.com/HKUDS/nanobot/issues/1487) | qwen3.5 plus模型调用function.arguments必须是JSON格式报错 | - |
| 🔴 高 | [#1514](https://github.com/HKUDS/nanobot/issues/1514) | 智谱API Key突然不可用，报ZaiException参数错误 | - |
| 🟠 中 | [#1519](https://github.com/HKUDS/nanobot/issues/1519) | uv环境下飞书WebSocket连接报SSL CERTIFICATE_VERIFY_FAILED | - |
| 🟠 中 | [#1501](https://github.com/HKUDS/nanobot/issues/1501) | Telegram媒体文件因文件名不唯一而被覆盖 | - |
| 🟠 中 | [#1537](https://github.com/HKUDS/nanobot/issues/1537) | Brave搜索API无法使用 | - |
| 🟡 低 | [#1524](https://github.com/HKUDS/nanobot/issues/1524) | 飞书无法读取文档链接内容 | - |

**稳定性评估**：本期报告多个运行时错误(SSL/网络)、API兼容性问题，但尚未看到对应的 Fix PR，建议优先处理用户无法正常使用的问题。

---

## 6. 功能请求与路线图信号

| Feature Request | 关联PR | 优先级信号 |
|---|---|---|
| **Telegram流式消息** (支持sendMessageDraft) | [#1522](https://github.com/HKUDS/nanobot/pull/1522) ⭐ OPEN | 🔥 高 - PR已提交，社区期待已久 |
| **飞书群聊sender识别** | [#1541](https://github.com/HKUDS/nanobot/pull/1541) ⭐ OPEN | 🔥 高 - 解决群聊场景核心痛点 |
| **MCP连接断开重试机制** | [#1536](https://github.com/HKUDS/nanobot/issues/1536) | 🆕 新增 - 生产环境必需 |
| **多模型聚合平台OAuth支持** | [#397](https://github.com/HKUDS/nanobot/issues/397) | 📋 规划中 - 需官方支持 |
| **Agent Swarm多代理协作** | [#1493](https://github.com/HKUDS/nanobot/issues/1493) / [#1494](https://github.com/HKUDS/nanobot/pull/1494) | 🚀 创新特性 - RFC阶段 |
| **按消息前缀路由模型** | [#1530](https://github.com/HKUDS/nanobot/issues/1530) | 💡 成本优化 - 精细化控制 |
| **QQ频道Markdown渲染** | [#1518](https://github.com/HKUDS/nanobot/issues/1518) | 🛠️ 小改动 - 配置层面即可支持 |
| **Dokploy一键部署模板** | [#1503](https://github.com/HKUDS/nanobot/issues/1503) | 🏗️ 基础设施 - 降低门槛 |

**路线图信号**：流式消息、群聊识别、MCP重连是近期最可能合并的功能；Agent Swarm代表项目向多代理架构演进的长期方向。

---

## 7. 用户反馈摘要

**痛点与不满**：
- **本地模型部署困难**：Ollama本地连接问题频繁出现，用户配置复杂且缺乏清晰文档
- **执行可靠性不足**：Bot"假执行"问题（声称读取但未读取、懒执行）影响信任度
- **生产环境稳定性**：SSL证书、WebSocket断开、API错误处理等生产级问题反馈增多

**使用场景**：
- 飞书/Telegram/QQ多平台部署
- 本地LLM+Ollama/vLLM
- Cron定时任务与Webhook集成
- 多代理协作复杂任务

**满意度线索**：
- Telegram流式消息PR(#1522)获得社区积极响应
- 多个用户主动提交Skill(CrowPay、Nightmarket)扩展生态

---

## 8. 待处理积压

| Issue | 积压时长 | 状态 | 建议 |
|---|---|---|---|
| [#603](https://github.com/HKUDS/nanobot/issues/603) | ~20天 | OPEN | Ollama本地模型连接问题需优先解决，影响核心使用场景 |
| [#397](https://github.com/HKUDS/nanobot/issues/397) | ~24天 | OPEN | 多平台OAuth支持需评估工作量，适时回应社区 |
| [#471](https://github.com/HKUDS/nanobot/issues/471) | ~23天 | OPEN | Telegram流式消息功能已有PR(#1522)，建议加速合并 |
| [#671](https://github.com/HKUDS/nanobot/issues/671) | ~18天 | OPEN | 与#471重复，建议合并处理 |
| [#126](https://github.com/HKUDS/nanobot/pull/126) | ~28天 | OPEN | GitHub Actions Docker构建流程，建议评估合并 |

**提醒**：建议维护者关注积压超过2周的Issue，尤其是影响核心功能使用的本地模型连接问题。

---

*报告生成时间：2026-03-05 | 数据来源：GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-05)

## 1. 今日速览

PicoClaw 项目今日保持高度活跃状态，24小时内共处理 **135** 条事务（25 条 Issues + 110 条 PRs）。PR 吞吐量显著，待合并 PR 达 **73** 条，已合并/关闭 **37** 条，表明开发团队正在快速迭代。Issue 活跃度较高，19 条新开/活跃，6 条已关闭，社区参与积极。**无新版本发布**。整体项目处于功能扩展与稳定性修复并行的健康状态。

---

## 2. 版本发布

**本期无新版本发布**

---

## 3. 项目进展

今日共有 **37** 条 PR 被合并/关闭，以下为值得关注的重要进展：

| PR | 描述 | 状态 |
|---|---|---|
| [#1117](https://github.com/sipeed/picoclaw/pull/1117) | fix(agent): sanitize tool_call/tool_result pairs in history compression | OPEN |
| [#1116](https://github.com/sipeed/picoclaw/pull/1116) | fix(wechat): use correct API for QQ group chat replies | OPEN |
| [#1115](https://github.com/sipeed/picoclaw/pull/1115) | fix(agent): include tool messages in session summary context | OPEN |
| [#1114](https://github.com/sipeed/picoclaw/pull/1114) | feat(hooks): implement hook system for pre/post tool execution | OPEN |
| [#1105](https://github.com/sipeed/picoclaw/pull/1105) | fix(skills): use --registry flag value as registry name | OPEN |
| [#1038](https://github.com/sipeed/picoclaw/pull/1038) | feat(skills): add IndexRegistry | OPEN |
| [#709](https://github.com/sipeed/picoclaw/pull/709) | feat: implement swarm mode for multi-agent coordination | OPEN |
| [#1108](https://github.com/sipeed/picoclaw/pull/1108) | Claude/security review picoclaw-armored | CLOSED |
| [#1076](https://github.com/sipeed/picoclaw/pull/1076) | feat: add extended thinking support for Anthropic models | CLOSED |
| [#1080](https://github.com/sipeed/picoclaw/pull/1080) | fix: eliminate data races on shared tool instances | CLOSED |

**核心推进：**
- **Hook 系统** (#1114)：实现工具执行前后的钩子机制，支持审计、指标收集、自定义策略检查
- **Swarm 模式** (#709)：基于 NATS JetStream 的多代理协调架构
- **Anthropic 扩展思考** (#1076)：新增可配置的 thinking_level
- **安全问题修复** (#1108)：修复 OAuth 硬编码凭证等安全漏洞
- **Provider 稳定性**：多项修复改善 Deepseek、ModelScope、Ollama 本地模型兼容性

---

## 4. 社区热点

以下 Issues/PRs 评论活跃度最高，反映社区核心诉求：

### 热点 Issues

| Issue | 评论数 | 摘要 |
|---|---|---|
| [#88](https://github.com/sipeed/picoclaw/issues/88) | 11 | Chromebook 用户请求添加下载指南（已关闭） |
| [#738](https://github.com/sipeed/picoclaw/issues/738) | 4 | **Feature: User-configurable hooks** - 用户可配置钩子系统需求 |
| [#711](https://github.com/sipeed/picoclaw/issues/711) | 4 | JSONL-backed session persistence with Store interface（已关闭） |
| [#1006](https://github.com/sipeed/picoclaw/issues/1006) | 4 | picolm-local 模型配置缺少 api_key/api_base |
| [#507](https://github.com/sipeed/picoclaw/issues/507) | 4 | 作为 OpenClaw 网关节点运行 |
| [#806](https://github.com/sipeed/picoclaw/issues/806) | 2 | **WebUI 支持**（高优先级路线图，7 👍） |

### 热点分析

1. **#738 Hook 系统需求**：用户强烈希望自定义脚本/命令可在代理事件触发时执行，这将为 self-improving-agent 等高级技能铺路
2. **#806 WebUI**：7 👍 表明社区对降低入门门槛的浏览器界面有强烈需求
3. **#507 OpenClaw 兼容性**：用户希望融入 OpenClaw 生态，实现混合部署
4. **#88 Chromebook 指南**：老 Issue 仍有持续讨论，说明文档覆盖仍有盲区

---

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列：

### 高优先级

| Issue | 描述 | 状态 |
|---|---|---|
| [#1102](https://github.com/sipeed/picoclaw/issues/1102) | Deepseek 模型 max_tokens 范围错误 [1,8192] | **已关联 PR #1109** |
| [#1103](https://github.com/sipeed/picoclaw/issues/1103) | ModelScope deepseek-ai 模型 "unknown protocol" 错误 | **已关联 PR #1112** |
| [#1068](https://github.com/sipeed/picoclaw/issues/1068) | API 返回 HTML 时错误信息不友好 | OPEN |
| [#1006](https://github.com/sipeed/picoclaw/issues/1006) | picolm-local 缺少 api_key/api_base 报错 | OPEN |
| [#1064](https://github.com/sipeed/picoclaw/issues/1064) | v0.2.0 语音处理 API Error 1210 | OPEN |
| [#1058](https://github.com/sipeed/picoclaw/issues/1058) | Cron deliver=false 任务静默丢弃 LLM 响应 | OPEN |
| [#1044](https://github.com/sipeed/picoclaw/issues/1044) | Cron TZ 字段被忽略，始终 UTC 执行 | OPEN |

### 中等优先级

| Issue | 描述 | 状态 |
|---|---|---|
| [#1043](https://github.com/sipeed/picoclaw/issues/1043) | 周期性 Cron 任务静默变成一次性任务 | OPEN |
| [#1049](https://github.com/sipeed/picoclaw/issues/1049) | read_file 读取 PDF 等二进制文件产生乱码 | OPEN |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | exec 工具 guardCommand 误判相对路径 | OPEN |
| [#1048](https://github.com/sipeed/picoclaw/issues/1048) | Discord 回复消息缺少上下文 | OPEN |

---

## 6. 功能请求与路线图信号

以下功能请求与近期 PR 趋势表明可能进入下一版本：

| 功能 | 关联 PR/Issue | 可能性 |
|---|---|---|
| **WebUI 支持** | #806 (高优先级路线图) | ⭐⭐⭐ 高 |
| **用户可配置 Hook 系统** | #738, #1114 (已有实现) | ⭐⭐⭐ 高 |
| **Swarm 多代理协调** | #709 (实现中) | ⭐⭐⭐ 高 |
| **Telegram 实时流响应** | #1098 | ⭐⭐ 中 |
| **WhatsApp 支持** | #248 (已关闭，可能恢复) | ⭐⭐ 中 |
| **Node 设备控制** | #1055 (参考 OpenClaw) | ⭐ 中 |
| **Dokploy 部署模板** | #1065 | ⭐ 低 |
| **GoBetterAuth 认证集成** | #1067 | ⭐ 低 |

---

## 7. 用户反馈摘要

### 真实痛点

1. **本地模型配置复杂**：
   - "picolm-local 需要 api_key 或 api_base，但本地模型不需要这些"
   - "Deepseek 模型 max_tokens 范围 [1,8192] 与默认设置冲突"

2. **文档/UX 不足**：
   - "Chromebook 用户不知道如何下载使用"
   - "skills install --registry 帮助示例误导"

3. **功能缺失**：
   - "希望有 WebUI 降低非技术用户门槛"
   - "需要 OpenClaw 生态兼容性"

4. **现有 Bug 影响使用**：
   - "v0.2.0 语音消息完全损坏"
   - "Cron 任务根本不重复执行"

### 正面反馈

- 用户对 Hook 系统、Swarm 模式、IndexRegistry 等新功能表示期待
- 安全审查和代码质量改进受到认可

---

## 8. 待处理积压

以下 Issue 超过 7 天未获响应，需维护者关注：

| Issue | 创建时间 | 描述 | 优先级 |
|---|---|---|---|
| [#507](https://github.com/sipeed/picoclaw/issues/507) | 2026-02-20 | 作为 OpenClaw 网关节点运行 | 中 |
| [#645](https://github.com/sipeed/picoclaw/issues/645) | 2026-02-22 | 推理内容被静默丢弃 | 中 |
| [#738](https://github.com/sipeed/picoclaw/issues/738) | 2026-02-24 | Hook 系统需求（已有关联 PR #1114）| 高 |
| [#711](2026-02-24) | 2026-02-24 | JSONL 会话持久化（已关闭，#711）| - |
| [#854](https://github.com/sipeed/picoclaw/issues/854) | 2026-02-27 | 摘要阈值硬编码为 20（已关闭）| - |

**建议**：#507、#645 建议尽快评估并与用户沟通方向

---

*报告生成时间：2026-03-05 | 数据来源：GitHub PicoClaw Repo*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-05)

## 1. 今日速览

过去24小时项目保持高度活跃，共产生 **50条Issues更新** 和 **47条PR更新**。PR合并/关闭20个（其中5个已关闭），待合并27个，代码贡献节奏稳健。社区对多运行时支持（OpenCode/Gemini）和技能生态扩展讨论热烈，但部分高优先级Bug（如OOM崩溃、模型环境变量失效）仍未有fix PR，稳定性仍是隐忧。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

| PR | 状态 | 描述 | 意义 |
|---|---|---|---|
| [#720](https://github.com/qwibitai/nanoclaw/pull/720) | ✅ CLOSED | 添加PID文件单例保护，防止重复进程 | 修复孤儿进程导致的服务异常 |
| [#715](https://github.com/qwibitai/nanoclaw/pull/715) | ✅ CLOSED | 添加Telegram频道+本地语音转录 | 扩展消息渠道能力 |
| [#714](https://github.com/qwibitai/nanoclaw/pull/714) | ✅ CLOSED | 修复processGroupMessages中setTyping错误处理 | 提升消息处理稳定性 |
| [#712](https://github.com/qwibitai/nanoclaw/pull/712) | ✅ CLOSED | 添加/add-ollama技能支持本地模型 | 降低API成本，增强本地推理 |
| [#702](https://github.com/qwibitai/nanoclaw/pull/702) | ✅ CLOSED | 添加use-local-whisper技能 | 用本地Whisper替代OpenAI API |
| [#683](https://github.com/qwibitai/nanoclaw/pull/683) | 🔄 OPEN | 用WebSocket替换文件IPC | 架构优化，降低延迟 |
| [#718](https://github.com/qwibitai/nanoclaw/pull/718) | 🔄 OPEN | 添加Telegram语音本地转录技能 | 完善Telegram生态 |
| [#682](https://github.com/qwibitai/nanoclaw/pull/682) | 🔄 OPEN | Slack线程感知回复路由+App Home DM修复 | 提升Slack集成体验 |

---

## 4. 社区热点

### Issues 讨论热度 TOP 5

| Issue | 评论 | 👍 | 摘要 |
|---|---|---|---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | 16 | 34 | **支持OpenCode/Codex/Gemini等运行时** — 核心诉求是减少对Anthropic的依赖，用户担忧订阅被取消 |
| [#384](https://github.com/qwibitai/nanoclaw/issues/384) | 8 | 13 | **技能市场/注册表** — 社区认同NanoClaw"小核心+可扩展"的安全理念，呼吁构建技能生态 |
| [#29](https://github.com/qwibitai/nanoclaw/issues/29) | 3 | 1 | 添加Signal作为消息渠道 |
| [#398](https://github.com/qwibitai/nanoclaw/issues/398) | 3 | 0 | WebFetch/WebSearch工具衰减控制 |
| [#393](https://github.com/qwibitai/nanoclaw/issues/393) | 2 | 0 | 文档不清晰：如何更新NanoClaw？ |

**分析**：Issue #80 引发最多讨论（16评论+34👍），反映出社区对**供应商锁定**的深度焦虑。随着Anthropic政策收紧，用户强烈呼吁支持开源竞品OpenCode。Issue #384 则显示社区对**技能经济**的期待——这与项目"skills over features"哲学高度契合。

---

## 5. Bug 与稳定性

### 严重程度：高 🔴

| Issue | 优先级 | 摘要 | Fix PR |
|---|---|---|---|
| [#595](https://github.com/qwibitai/nanoclaw/issues/595) | **Critical** | OOM崩溃约40小时——幽灵socket在重连时累积 | ❌ 无 |
| [#635](https://github.com/qwibitai/nanoclaw/issues/635) | **High** | WhatsApp认证文件权限644而非600，存在安全风险 | ❌ 无 |
| [#472](https://github.com/qwibitai/nanoclaw/issues/472) | **High** | CLAUDE_MODEL环境变量不生效 | ❌ 无 |
| [#613](https://github.com/qwibitai/nanoclaw/issues/613) | **High** | ANTHROPIC_MODEL被忽略，CLI映射到旧版本 | ❌ 无 |
| [#233](https://github.com/qwibitai/nanoclaw/issues/233) | **High** | IPC消息在容器查询结果后被丢弃 | ❌ 无 |

### 严重程度：中等 🟡

| Issue | 优先级 | 摘要 | Fix PR |
|---|---|---|---|
| [#157](https://github.com/qwibitai/nanoclaw/issues/157) | Medium | WhatsApp QR生成在Node 20挂起 | ❌ 无 |
| [#413](https://github.com/qwibitai/nanoclaw/issues/413) | Medium | Linux systemd回退跳过可修复情况 | ❌ 无 |
| [#553](https://github.com/qwibitai/nanoclaw/issues/553) | Medium | WhatsApp连接恢复后容器执行失败 | ❌ 无 |

**⚠️ 警示**：5个High/Critical级别Bug均无对应fix PR，其中OOM内存泄漏（#595）和认证文件权限（#635）直接影响生产稳定性，应优先处理。

---

## 6. 功能请求与路线图信号

### 高呼声功能（👍≥8）

| Issue | 👍 | 摘要 | 对应PR/进展 |
|---|---|---|---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | 34 | 多运行时支持(OpenCode/Codex/Gemini) | #672 (ANTHROPIC_MODEL支持) |
| [#384](https://github.com/qwibitai/nanoclaw/issues/384) | 13 | 技能市场/注册表 | 无 |
| [#439](https://github.com/qwibitai/nanoclaw/issues/439) | 8 | 简化安装流程 | 无 |

### 功能演进信号

从PR可见项目正在向以下方向演进：
1. **多渠道扩展** — Telegram (#715/#718)、Feishu (#671)、Signal (#29)
2. **本地化部署** — Ollama集成 (#712)、本地Whisper (#702)
3. **架构优化** — WebSocket替换文件IPC (#683)、PID单例保护(#720)
4. **模型灵活性** — 自定义模型选择 (#672)

---

## 7. 用户反馈摘要

| 场景 | 痛点 | 来源 |
|---|---|---|
| **供应商锁定** | "Anthropic已经在关闭使用OpenClaw的订阅，支持其他提供商很紧迫" | #80 |
| **安全焦虑** | "多人服务器上认证文件644权限暴露敏感凭证" | #635 |
| **安装门槛** | "Claude安装想法不错，但shell脚本+几个问题更简单快速" | #439 |
| **文档缺失** | "不清楚如何更新NanoClaw，是否有推荐方法？" | #393 |
| **运维困惑** | "运行40小时后OOM崩溃，launchd静默重启很难发现" | #595 |

**积极反馈**：Issue #384 社区高度认同NanoClaw的"小核心+可扩展"安全理念，认为这是与OpenClaw的差异化竞争优势。

---

## 8. 待处理积压

### 长期未响应高优先级 Issues（>30天无更新）

| Issue | 创建日期 | 优先级 | 摘要 | 等待时间 |
|---|---|---|---|---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | 2026-02-04 | Low | 多运行时支持 | ~30天 |
| [#29](https://github.com/qwibitai/nanoclaw/issues/29) | 2026-02-02 | Low | Signal渠道 | ~32天 |
| [#157](https://github.com/qwibitai/nanoclaw/issues/157) | 2026-02-09 | Medium | Node 20 QR挂起 | ~25天 |
| [#183](https://github.com/qwibitai/nanoclaw/issues/183) | 2026-02-12 | Medium | 连接管理无指数退避 | ~22天 |
| [#186](https://github.com/qwibitai/nanoclaw/issues/186) | 2026-02-12 | Medium | 出站消息无速率限制 | ~22天 |

### 建议关注

- **#80** 和 **#384** 是社区共识度最高的功能方向，建议纳入路线图
- **#595 (OOM)** 和 **#635 (安全)** 虽无PR但影响重大，需主动推进
- PR #683 (WebSocket IPC) 若合并将重构核心通信架构，建议重点review

---

*数据来源: GitHub NanoClaw (qwibitai/nanoclaw) | 统计周期: 2026-03-04 00:00 - 2026-03-05 00:00 (UTC)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期**: 2026-03-05 | **项目**: nearai/ironclaw

---

## 1. 今日速览

IronClaw 今日保持高度活跃，共处理 **22 条 Issues** 和 **50 条 PRs**，并连续发布 v0.14.0 和 v0.15.0 两个版本。项目在 OAuth 路由、Web 网关错误展示、扩展认证体验等方面取得显著进展。当前仓库有 **110 个 Open Issues**，整体呈现快速迭代态势，但部分功能（图像处理、聊天搜索、基准测试）尚在规划阶段。

---

## 2. 版本发布

### ✅ v0.15.0 (2026-03-04)
**破坏性变更** ⚠️

| 类别 | 内容 |
|------|------|
| **OAuth** | 新增通过 Web 网关为托管实例提供 OAuth 路由回调 ([#555](https://github.com/nearai/ironclaw/pull/555)) |
| **Web** | 失败的工具调用现在显示详细错误信息 ([#490](https://github.com/nearai/ironclaw/pull/490)) |
| **扩展** | 改进认证 UX，添加负载时验证 ([#536](https://github.com/nearai/ironclaw/pull/536)) |
| **移除** | 移除 Okta 工具 ([#506](https://github.com/nearai/ironclaw/pull/506)) |
| **集成** | 为 Web 网关的 WASM 工具添加 OAuth 支持 ([#489](https://github.com/nearai/ironclaw/pull/489)) |

> **迁移注意**: Okta 工具已被移除，使用 Okta 集成的用户需重新配置认证方式。

### ✅ v0.14.0 (2026-03-04)
**破坏性变更** ⚠️

同属今日发布，包含 Okta 工具移除和 Web 网关 OAuth 支持的基础改动。

---

## 3. 项目进展

| PR | 状态 | 概述 |
|----|------|------|
| [#555](https://github.com/nearai/ironclaw/pull/555) | ✅ 已合并 | **OAuth 路由**: 为托管实例添加 `/oauth/callback` 公共路由，支持实例前缀 CSRF 状态管理 |
| [#490](https://github.com/nearai/ironclaw/pull/490) | ✅ 已合并 | **Web 错误展示**: 失败工具调用现在显示错误消息和输入参数（含敏感值脱敏） |
| [#536](https://github.com/nearai/ironclaw/pull/536) | ✅ 已合并 | **扩展认证 UX**: 为 Discord/Slack/Telegram/WhatsApp/GitHub 添加 setup_url 和描述性提示 |
| [#512](https://github.com/nearai/ironclaw/pull/512) | ✅ 已合并 | **E2E 测试系统**: 实现轨迹基准测试系统（12 个场景，覆盖 5 个类别） |
| [#529](https://github.com/nearai/ironclaw/pull/529) | 🔄 进行中 | **智能路由**: 将 13 维复杂度评分器集成到 SmartRoutingProvider |
| [#553](https://github.com/nearai/ironclaw/pull/553) | 🔄 进行中 | **轨迹基准**: 添加 e2e 轨迹测试框架和 TestRig |
| [#551](https://github.com/nearai/ironclaw/pull/551) | 🔄 进行中 | **Podman 支持**: 为沙箱添加 Podman 运行支持 |

---

## 4. 社区热点

### 📌 Issues 讨论热度最高

| Issue | 热度 | 摘要 |
|-------|------|------|
| [#558](https://github.com/nearai/ironclaw/issues/558) | 📊 **110 open** | **Issue Triage Report**: 当前有 110 个 Open Issues（26 Bug，76 Feature，8 模糊） |
| [#557](https://github.com/nearai/ironclaw/issues/557) | 🔥 **Architecture** | **安全模型审查**: 探讨本地开发者部署 vs 托管多租户部署的安全架构设计 |
| [#230](https://github.com/nearai/ironclaw/issues/230) | 🛠️ **Enhancement** | **后台沙箱回收器**: 建议为孤立 Docker 容器添加后台自动清理机制 |
| [#166](](https://github.com/nearai/ironclaw/issues/166)) | 🧹 **Enhancement** | **内存 hygiene 策略**: 现有 `hygiene.rs` 模块从未被调用，workspace 无限增长 |

### 📌 PRs 关注度最高

| PR | 状态 | 摘要 |
|----|------|------|
| [#531](https://github.com/nearai/ironclaw/pull/531) | 🔄 XL | **Agent 重启功能**: 支持从聊天或 UI 重启 IronClaw |
| [#348](https://github.com/nearai/ironclaw/pull/348) | 🔄 XL | **分层内存**: 支持敏感度级别的隐私重定向（多租户 Part 1） |
| [#476](https://github.com/nearai/ironclaw/pull/476) | 🔄 XL | **Gemini CLI OAuth**: 集成 Google Cloud Code Assist API |
| [#451](https://github.com/nearai/ironclaw/pull/451) | 🔄 M | **Venice.ai Provider**: 添加新的 LLM 提供商 |

---

## 5. Bug 与稳定性

### 🔴 高优先级

| Issue | 状态 | 描述 | 已有 Fix? |
|-------|------|------|-----------|
| [#486](https://github.com/nearai/ironclaw/issues/486) | ✅ 已关闭 | WASM 工具拒绝 JSON 字符串格式的数字参数 | 否（未提供修复 PR） |
| [#487](https://github.com/nearai/ironclaw/issues/487) | ✅ 已关闭 | 工具调用全部失败时返回原始 "[Called tool...]" 文本 | 否 |
| [#485](https://github.com/nearai/ironclaw/issues/485) | ✅ 已关闭 | Job 重启失败时 UI 无错误反馈 | 否 |
| [#443](https://github.com/nearai/ironclaw/issues/443) | 🔴 Open | Telegram 群组在 `owner_id=null` 时接受所有用户消息 | 否 |

### 🟡 中优先级

| Issue | 状态 | 描述 |
|-------|------|------|
| [#492](https://github.com/nearai/ironclaw/issues/492) | 🟡 Open | 需添加 HMAC-SHA256 Slack webhook 签名验证 |

---

## 6. 功能请求与路线图信号

### 🚀 新功能需求（来自 Issues）

| Issue | 请求 | 潜在版本 |
|-------|------|----------|
| [#549](https://github.com/nearai/ironclaw/issues/549) | 支持处理图片 | 规划中 |
| [#547](https://github.com/nearai/ironclaw/issues/547) | 基准测试最优模型 | 规划中 |
| [#548](https://github.com/nearai/ironclaw/issues/548) | 聊天 API 搜索功能 | 规划中 |
| [#545](https://github.com/nearai/ironclaw/issues/545) | 通过聊天配置凭据 | 规划中 |
| [#543](https://github.com/nearai/ironclaw/issues/543) | 从聊天/UI 重启 IronClaw | 已在 #531 中实现 |
| [#542](https://github.com/nearai/ironclaw/issues/542) | Agent 应尝试两种不同方法两次 | 规划中 |
| [#538](https://github.com/nearai/ironclaw/issues/538) | 通过 agent.near.ai UI 升级 | 规划中 |

### 📈 与已有 PR 关联判断

- **高可信度纳入下一版本**: #531（重启功能）、#551（Podman 支持）、#552（长消息自动拆分）
- **路线图相关**: #348（多租户内存分层）、#476（Gemini OAuth）、#451（Venice.ai）

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼：

### ✅ 积极反馈
- Web 网关的错误展示改进获得认可（#490 已合并）
- OAuth 托管实例路由支持解决了实际部署痛点（#555）

### ❌ 痛点与不满
1. **Telegram 安全漏洞**: 用户反馈 `owner_id=null` 时 Telegram 会响应群组内所有消息，存在安全风险（#443）
2. **Slack Webhook 不完整**: 缺少 HMAC-SHA256 签名验证，无法满足生产级 Slack 集成（#492）
3. **工具参数类型限制**: WASM 工具无法处理 JSON 字符串格式的数字参数，导致调用失败（#486）
4. **Job 失败无反馈**: UI 在 Job 重启失败时不显示错误，用户无法排查（#485）

---

## 8. 待处理积压

### ⚠️ 长期未响应 Issue（>7 天）

| Issue | 存在时间 | 描述 | 优先级 |
|-------|----------|------|--------|
| [#230](https://github.com/nearai/ironclaw/issues/230) | ~14 天 | 后台沙箱回收器 | 中 |
| [#166](https://github.com/nearai/ironclaw/issues/166) | ~15 天 | 内存 hygiene 策略未集成 | 中 |
| [#348](https://github.com/nearai/ironclaw/pull/348) | ~9 天 | 分层内存 PR 等待合并（Part 1 of 3） | 高 |

### 🚨 建议行动
- **#348**: 建议优先审查并合并，作为多租户功能的基础
- **#166**: hygiene.rs 模块已存在但未被调用，需确认是否计划集成
- **#443**: Telegram 安全漏洞建议尽快修复

---

*报告生成时间: 2026-03-05 | 数据来源: GitHub API*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 | 2026-03-05

## 1. 今日速览

今日 TinyClaw 项目保持**中等活跃度**。过去24小时内共产生2条更新：1个 PR 已关闭（合并），1个 Issue 保持开放状态。无新版本发布。项目持续推进多平台 AI Provider 集成的功能迭代，社区对扩展 Provider 支持的需求较为明确。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ PR #138 已合并：Add OpenCode integration and CLI-only mode support

- **作者**: @benjaminwestern
- **状态**: 已关闭（2026-03-04）
- **链接**: https://github.com/TinyAGI/tinyclaw/pull/138
- **摘要**: 本次 PR 联合 KimiK2.5 和 Opus4.6 协作开发，为 TinyClaw 引入了 **OpenCode** 作为新的 AI Provider，支持用户**无需依赖 Discord、Telegram 或 WhatsApp** 即可使用 CLI 模式运行项目。
- **核心变更**:
  - 新增 OpenCode provider 集成
  - 支持纯 CLI 运行模式，摆脱对社交平台的强依赖
- **项目意义**: 显著扩展了 TinyClaw 的使用场景，降低了用户接入门槛，使项目从"社交平台 AI 助手"向"通用 CLI AI 工具"迈出重要一步。

---

## 4. 社区热点

### 🔥 Issue #124：want more provider support [z.ai kimi opencode.zen openrouter]

- **状态**: OPEN（活跃）
- **作者**: @takasungi
- **创建时间**: 2026-02-18
- **更新时间**: 2026-03-04
- **评论数**: 5
- **链接**: https://github.com/TinyAGI/tinyclaw/issues/124
- **摘要**: 用户呼吁支持更多 AI Provider（包括 z.ai、Kimi、OpenCode、Zen、OpenRouter），原因是当使用更多 Agent 时，Claude Code API 配额会快速消耗。

**分析**: 这是当前社区最活跃的讨论议题。用户的核心诉求是**降低对单一 API 的依赖**，通过引入更多 Provider 来分散配额压力。随着 PR #138 引入 OpenCode，该需求已部分响应，但 z.ai、Kimi、Zen、OpenRouter 等仍在讨论中。此 Issue 的活跃度表明多 Provider 支持是用户高度期待的功能方向。

---

## 5. Bug 与稳定性

**今日无 Bug 报告**

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 Issue | 状态 | 潜在纳入可能性 |
|----------|-----------|------|---------------|
| OpenCode Provider 支持 | #138 (PR) | ✅ 已合并 | 已实现 |
| z.ai Provider 支持 | #124 | 🔸 Open | 中期 |
| Kimi Provider 支持 | #124 | 🔸 Open | 中期 |
| Zen Provider 支持 | #124 | 🔸 Open | 中期 |
| OpenRouter Provider 支持 | #124 | 🔸 Open | 长期 |
| CLI-only 模式（无需社交平台） | #138 (PR) | ✅ 已合并 | 已实现 |

**路线图信号**: 结合 PR #138 的合并动向，项目正在向**多 Provider + 纯 CLI 化**方向演进。Issue #124 中列出的 Provider 需求极有可能在后续版本中被逐步采纳，建议维护者将其纳入中短期路线图。

---

## 7. 用户反馈摘要

从 Issue #124 的评论互动中提炼以下用户痛点与诉求：

- **核心痛点**: 当前高度依赖 Claude Code API，配额消耗速度快，多 Agent 场景下配额告急
- **使用场景**: 多 Agent 并发调用 AI 能力的企业级或重度个人用户
- **期望**: 引入更多可替代的 AI Provider，实现 API 配额的分担与成本优化
- **满意度**: 用户对项目本身的功能表示认可，但迫切希望扩展 Provider 生态

---

## 8. 待处理积压

| Issue / PR | 状态 | 未响应时长 | 备注 |
|------------|------|-----------|------|
| #124 want more provider support | OPEN | 自 2026-02-18 起（15天+） | 5 条评论，社区关注度高，需优先回应 |

**提醒**: Issue #124 虽处于活跃讨论状态，但自创建以来未得到官方明确回应，建议维护者尽快表态路线图计划，以稳定社区预期。

---

*日报生成时间: 2026-03-05 | 数据来源: GitHub TinyClaw (tinyagi/tinyclaw)*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*