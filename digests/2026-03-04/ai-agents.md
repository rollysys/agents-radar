# OpenClaw 生态日报 2026-03-04

> Issues: 500 | PRs: 500 | 覆盖项目: 10 个 | 生成时间: 2026-03-04 02:22 UTC

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

**报告日期**：2026-03-04

---

## 1. 今日速览

过去 24 小时内，OpenClaw 仓库保持极高活跃度，共产生 **1,000 条** GitHub 更新（Issues + PRs）。Issues 层面新增 442 条活跃问题，PR 层面有 432 条待合并，显示项目处于高速迭代期。社区围绕 v2026.3.2 发布展开了大量讨论，主要聚焦于 SecretRef 扩展支持以及多个回归问题的修复。

---

## 2. 版本发布

### v2026.3.2 正式版

**发布概要**：本次更新将 SecretRef 支持扩展至全部 64 个用户凭据目标，涵盖运行时收集器、`openclaw secrets` 规划/应用/审计流程、入站 SecretInput UX 及相关文档。未解析的引用现在会快速失败。

**关键变更**：

- **SecretRef 覆盖范围扩展**：现在支持所有用户提供的凭据表面（64 个目标），包括模型提供商凭据、技能凭据、通道凭据（如 botToken、webhookSecret）等。
- **快速失败机制**：未解析的 SecretRef 现在会在早期阶段报错，而非延迟至运行时。

**迁移注意事项**：

- 若现有配置中存在无效的 SecretRef，升级后将在启动时立即失败，建议在升级前检查 `openclaw.json` 中的凭据配置。

### v2026.3.2-beta.1

作为正式版的前瞻测试版本，内容与正式版一致。

---

## 3. 项目进展

### 重要 PR 合并/进展

| PR 编号 | 标题 | 影响范围 | 状态 |
|---------|------|----------|------|
| #33769 | Voice-call: provider add asterisk-ari | 语音通话 | 已关闭（待后续） |
| #33499 | feat: agent self-elected continuation + gateway-native delegation | 代理自治 | 已关闭（被 #33771 替代） |
| #33771 | feat: agent self-elected continuation + gateway-native delegation | 代理自治 | 开放（XL size） |
| #33733 | follow-up: align ingress, atomic paths, and channel tests | 凭证语义统一 | 开放（XL size） |
| #33396 | feat(compaction): add fallbackModel | 压缩/配额错误处理 | 开放（L size） |

**推进的功能**：

- **代理自治**：新增自选继续（CONTINUE_WORK）和网关原生子代理委托机制，允许持久会话中的代理自主决定下一轮行动。
- **凭证语义统一**：针对通道入口、原子路径和测试契约进行硬化处理，确保运行时行为一致性。
- **压缩回退模型**：为配额/速率限制错误添加备用模型重试机制。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 状态 | 链接 |
|------------|------|--------|------|------|
| #3460 | [enhancement] Internationalization (i18n) & Localization Support | 73 | OPEN | [查看](https://github.com/openclaw/openclaw/issues/3460) |
| #26534 | Add DingTalk as a first-install channel option | 28 | OPEN | [查看](https://github.com/openclaw/openclaw/issues/26534) |
| #21872 | [bug] Telegram streaming not working with MiniMax model | 15 | OPEN | [查看](https://github.com/openclaw/openclaw/issues/21872) |
| #29632 | [bug] Duplicate feishu plugin causes pairing failure after v2026.2.26 upgrade | 15 | CLOSED | [查看](https://github.com/openclaw/openclaw/issues/29632) |

### 热点分析

**i18n 国际化需求**：Issue #3460 累积 73 条评论，反映全球用户对多语言支持的强烈诉求。项目方表示目前暂无足够带宽支持多语言，但社区仍在持续推动。

**钉钉集成**：#26534 要求在首次安装向导中提供钉钉作为通道选项，尽管钉钉通道功能已实现，但未在初始设置中呈现。

---

## 5. Bug 与稳定性

### 严重 Bug（影响生产环境）

| Issue 编号 | 描述 | 严重程度 | 回归 | Fix PR |
|------------|------|----------|------|--------|
| #32833 | exec plugin install fails on v2026.3.2 | 高 | 是 | - |
| #32245 | Vertex embedded runs fail with "Cannot convert undefined or null to object" on v2026.3.1 | 高 | 是 | - |
| #33419 | The agent does not have access to files and cannot perform any operations | 高 | 是 | - |
| #33225 | Agents onboarded via openclaw onboard cannot write files | 高 | 是 | - |
| #33468 | googlechat not starting with error "Cannot convert undefined or null to object" | 高 | 是 | - |

### 中等 Bug

| Issue 编号 | 描述 | 严重程度 | Fix PR |
|------------|------|----------|--------|
| #33623 | openclaw doctor clears custom API keys from secrets section | 中 | - |
| #33258 | File Write Failure on Fresh Install (v2026.3.2) | 中 | - |
| #32828 | False 'API rate limit reached' on all models | 中 | - |

### 回归问题汇总

今日出现多起回归问题，主要集中在：

- **v2026.3.2 升级后的插件安装失败**（exec、googlechat）
- **文件操作权限/访问问题**
- **Vertex/嵌入式运行时报错**

建议用户在升级前查阅官方升级指南，或等待后续补丁版本。

---

## 6. 功能请求与路线图信号

### 高需求功能

| Issue 编号 | 功能描述 | 状态 | 预期纳入 |
|------------|----------|------|----------|
| #3460 | Internationalization (i18n) & Localization Support | OPEN | 长期 |
| #26534 | Add DingTalk as a first-install channel option | OPEN | 近期 |
| #8079 | Add proxy configuration option for browser tool | OPEN | 讨论中 |
| #27445 | `announceTarget` option for sub-agent completion announce routing | OPEN | 规划中 |

### 路线图信号

从 PR #33771（agent self-elected continuation）和 #33396（compaction fallbackModel）来看，下一版本的关注点可能包括：

- 增强代理自主性
- 改善压缩机制的容错能力
- 凭证管理进一步规范化

---

## 7. 用户反馈摘要

### 痛点汇总

1. **升级后功能异常**：多个用户报告在升级至 v2026.2.26、v2026.3.1、v2026.3.2 后出现功能退化，包括插件安装失败、文件操作不可用、通道无法启动等。
2. **集成兼容性问题**：Telegram streaming 与 MiniMax 模型不兼容、Feishu 图片预览失效、Discord 连续性丢失等问题影响用户体验。
3. **配置复杂性**：用户反映 SecretRef 配置不熟悉，`openclaw doctor --fix` 意外清除自定义 API 密钥。

### 满意之处

- SecretRef 扩展支持获得积极反馈，用户凭据管理更加统一
- 社区对多通道集成（钉钉、飞书、Discord）保持关注
- 代理自治功能（CONTINUE_WORK）被评价为“解决长期痛点”

---

## 8. 待处理积压

### 长期未响应的 Issues（超过 30 天）

| Issue 编号 | 标题 | 创建时间 | 状态 |
|------------|------|----------|------|
| #5846 | Install fails on headless mac | 2026-02-01 | CLOSED |
| #17052 | HEARTBEAT.md bootstrap file size limit should be documented | 2026-02-15 | CLOSED |

### 建议关注

- **#3460**（i18n）：73 条讨论，建议官方早日给出路线图
- **#32833**（exec plugin regression）：影响 CLI 功能，建议优先修复
- **#32245**（Vertex regression）：影响嵌入式运行，需快速响应

---

*本报告基于 2026-03-04 的 GitHub 数据生成。*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**：2026-03-04

---

## 1. 生态全景

2026年3月初，个人 AI 助手与自主智能体开源生态呈现**多极分化、加速演进**的格局。以 OpenClaw 为首的头部项目已形成功能完备的代理框架，引领安全能力与自治性的技术方向；中腰部项目（PicoClaw、NanoBot、Zeroclaw）则保持高速迭代，竞争焦点集中在多渠道集成与本地模型支持；小型项目（EasyClaw、TinyClaw）侧重用户体验打磨。整体生态正从“功能堆砌”向“安全可控”与“模块化架构”转型，数据流安全（taint tracking）、代理协作（multi-agent）、多运行时支持成为共同技术趋势。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PRs 更新 | 版本发布 | PR 合并率 | 活跃度评级 |
|------|-------------|----------|----------|-----------|------------|
| **OpenClaw** | 442 (新开/活跃) | ~864 (含待合并) | v2026.3.2 | ~50% (432待合并) | ⭐⭐⭐⭐⭐ 极高 |
| **PicoClaw** | 108 (新开) | 242 (206待合并) | 无 | ~15% (36/242) | ⭐⭐⭐⭐⭐ 极高 |
| **NanoBot** | 22 (新开) | 53 (37待合并) | 无 | ~30% (16/53) | ⭐⭐⭐⭐ 高 |
| **Zeroclaw** | 31 | 50 (25待合并) | v0.1.8-alpha.1 | ~50% | ⭐⭐⭐⭐ 高 |
| **ZeptoClaw** | 11 | 18 | 无 | 高 (14/18) | ⭐⭐⭐⭐ 高 |
| **NanoClaw** | 6 | 26 (9待合并) | 无 | ~35% (9/26) | ⭐⭐⭐⭐ 高 |
| **IronClaw** | 12 | 34 (13已合并) | v0.14.0待发布 | ~38% | ⭐⭐⭐⭐ 高 |
| **LobsterAI** | 20 (新开) | 9 (7已合并) | 无 | ~78% | ⭐⭐⭐ 中高 |
| **TinyClaw** | 3 | 4 | v0.0.8, v0.0.9 | 中 | ⭐⭐⭐ 中 |
| **EasyClaw** | 0 (新开) | 0 | v1.5.15, v1.5.16 | N/A | ⭐⭐ 稳定 |

> 注：OpenClaw 数据包含全量更新（1000条），PicoClaw 数据最为庞大反映极高社区参与度。

---

## 3. OpenClaw 在生态中的定位

### 核心优势

| 维度 | OpenClaw 表现 | 生态位置 |
|------|---------------|----------|
| **社区规模** | 442 活跃 Issues + 432 待合并 PRs，领先所有项目 | 绝对头部 |
| **功能完备性** | SecretRef 扩展至64个凭据目标、代理自治、压缩回退模型 | 最完善 |
| **版本节奏** | v2026.3.2 正式版发布，保持双周迭代 | 成熟稳定 |
| **安全能力** | 快速失败机制、凭证语义统一 | 领先 |

### 技术路线差异

- **vs PicoClaw/NanoClaw**：OpenClaw 侧重企业级功能（多租户、审计），后者更追求轻量化与快速特性叠加
- **vs Zeroclaw/EasyClaw**：OpenClaw 拥有完整的插件生态与 CI/CD 基础设施，小型项目则聚焦单点突破（飞书集成、macOS 安装）
- **vs ZeptoClaw**：两者均强调安全（ZeptoClaw 的 taint tracking 与 OpenClaw 的 SecretRef 扩展），但 OpenClaw 生态更成熟

### 社区规模对比

| 项目 | 今日 Issues+PR 总量 | 规模定位 |
|------|---------------------|----------|
| OpenClaw | ~1000 | 大型开源项目 |
| PicoClaw | ~354 | 大型开源项目 |
| NanoBot | ~82 | 中型项目 |
| Zeroclaw | ~81 | 中型项目 |
| 其他 | <50 | 小型/个人项目 |

---

## 4. 共同关注的技术方向

### 4.1 安全能力增强（多项目共识）

| 项目 | 具体诉求 |
|------|----------|
| **ZeptoClaw** | Taint tracking 数据流安全、Semantic VectorDB Guard、glob forbidden_paths |
| **OpenClaw** | SecretRef 快速失败机制、凭证语义统一 |
| **Zeroclaw** | Canary Tokens、审计日志配置 |
| **IronClaw** | DOMPurify 替换正则 HTML sanitizer（XSS 修复） |
| **NanoClaw** | 发送者白名单触发控制 |

**分析**：数据流安全从“被动防御”转向“主动标记”，多项目正构建统一的威胁模型。

### 4.2 本地模型与多 Provider 支持

| 项目 | 需求 |
|------|------|
| **PicoClaw** | LM Studio Easy Connect (Issue #28)、Ollama 本地连接修复 |
| **NanoBot** | Ollama 连接问题 (17条评论)、LM Studio 集成修复 |
| **ZeptoClaw** | OpenAI 兼容 API (`/v1/chat/completions`) |
| **NanoClaw** | Avian LLM provider、Claude 以外运行时 |
| **LobsterAI** | Stepfun provider、多种模型支持 |

### 4.3 多渠道集成与消息可靠性

- **Telegram**：PicoClaw 重复消息修复、NanoBot 流式输出、TinyClaw 轮询稳定性
- **飞书**：EasyClaw 连接问题、NanoClaw WebSocket 支持
- **Discord**：PicoClaw 引用消息支持、NanoClaw 群组权限控制
- **WhatsApp/IMessage**：IronClaw Webhook 验证、PicoClaw/ZeroClaw BlueBubbles(iMessage)

### 4.4 代理协作与自治

| 项目 | 功能 |
|------|------|
| **OpenClaw** | 自选继续（CONTINUE_WORK）、网关原生子代理委托 |
| **PicoClaw** | Swarm mode、Agent team |
| **NanoBot** | 多智能体设置（讨论中） |
| **LobsterAI** | 多 agent 协作工作流 (PR #240) |

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心定位 | 差异化功能 |
|------|----------|------------|
| **OpenClaw** | 企业级代理框架 | SecretRef 64目标、压缩回退模型 |
| **PicoClaw** | 多模态终端代理 | 3阶段运行时、思维链系统、Wails 启动器 |
| **ZeptoClaw** | 安全增强型代理 | Taint tracking、MCP Server、Loop Guard |
| **NanoBot** | 轻量级 LLM 交互 | 单层 ReAct 循环、Langfuse 可观测性 |
| **LobsterAI** | 沙箱化 AI 助手 | Windows 沙箱修复、MCP 支持、公式渲染 |
| **EasyClaw** | 用户友好型助手 | 跨平台安装体验（macOS/Windows） |
| **TinyClaw** | 极简多渠道代理 | 团队管理、Cursor CLI 支持 |

### 5.2 目标用户

- **OpenClaw / IronClaw**：企业用户、开发者
- **PicoClaw / NanoBot**：技术爱好者、多渠道运营者
- **EasyClaw / TinyClaw**：非技术用户、小团队
- **ZeptoClaw / Zeroclaw**：安全敏感型部署

### 5.3 技术架构差异

| 架构特征 | 代表项目 |
|----------|----------|
| **Bun 运行时迁移** | NanoClaw（从 Node.js 迁移） |
| **模块化重构** | ZeptoClaw（thin kernel extraction） |
| **Wails 桌面打包** | PicoClaw |
| **WebAssembly** | IronClaw（wasm tools） |
| **三层测试架构** | OpenClaw（IronClaw 计划学习） |

---

## 6. 社区热度与成熟度

### 活跃度分层

```
🔥 快速迭代期（高功能吞吐量）
├── PicoClaw    (242 PRs, 112 Issues)
├── OpenClaw    (1000 更新)
├── NanoBot     (53 PRs, 29 Issues)
└── Zeroclaw    (50 PRs, 31 Issues)

🔧 质量巩固期（安全/稳定性优先）
├── IronClaw    (v0.14.0 待发布，安全修复)
├── ZeptoClaw   (安全功能落地)
└── NanoClaw    (Bun 迁移完成，稳定性增强)

📦 稳定维护期（单点优化）
├── EasyClaw    (小版本快速修复)
└── TinyClaw    (补丁版本)
```

### 成熟度评估

| 项目 | 代码覆盖率 | 安全投入 | 发布规范 | 综合成熟度 |
|------|-----------|----------|----------|-----------|
| OpenClaw | 高 | 高（SecretRef 扩展） | 双周发布 | ⭐⭐⭐⭐⭐ |
| IronClaw | 近期新增 | 高（DOMPurify） | v0.14.0 待发布 | ⭐⭐⭐⭐ |
| ZeptoClaw | 中 | 极高（taint tracking） | alpha 阶段 | ⭐⭐⭐ |
| PicoClaw | 低 | 中 | 快速迭代 | ⭐⭐⭐ |
| NanoBot | 中 | 中 | 活跃开发 | ⭐⭐⭐ |

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势提炼

| 趋势 | 证据 | 对开发者建议 |
|------|------|--------------|
| **安全成为核心竞争力** | ZeptoClaw taint tracking、OpenClaw SecretRef、IronClaw XSS 修复 | 将数据流安全纳入核心设计，而非事后补救 |
| **多 runtime 支持** | NanoClaw Bun 迁移、ZeptoClaw MCP Server | 关注 Bun、Deno 等新一代运行时对性能的影响 |
| **本地模型优先** | 5+ 项目聚焦 Ollama/LM Studio 集成 | 本地部署需求被低估，文档与错误诊断需加强 |
| **代理协作标准化** | 3+ 项目推进 multi-agent 功能 | 关注代理间通信协议与状态管理 |
| **国际化需求爆发** | OpenClaw i18n (73 评论)、NanoClaw 中文文档 | 全球化部署需前置化 |

### 7.2 关键社区信号

- **OpenClaw i18n Issue #3460**：73 条评论，国际化是最高频需求
- **PicoClaw Gemini 3 兼容性**：Critical bug 反映上游模型变更风险
- **NanoBot Ollama 连接**：17 条评论，本地模型配置复杂度需解决
- **TinyClaw macOS 部署**：反映跨平台体验仍是痛点

### 7.3 技术决策参考

> **对于 AI 智能体开发者**：
> 1. 优先参考 OpenClaw 的安全实践（SecretRef 扩展）
> 2. 学习 ZeptoClaw 的 taint tracking 实现数据流安全
> 3. 关注 PicoClaw 的 3 阶段运行时架构演进
> 4. 本地模型支持需作为一等公民设计，而非事后适配

> **对于技术决策者**：
> - 生产环境优先选择 OpenClaw/IronClaw（成熟安全）
> - 快速原型可选 NanoClaw/TinyClaw（轻量）
> - 安全敏感场景关注 ZeptoClaw（专项投入大）

---

*报告基于 2026-03-04 各项目 GitHub 动态数据生成*

---

## 同赛道项目详细报告

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-04)

## 1. 今日速览

Zeroclaw 项目今日保持高度活跃，共计 31 条 Issue 更新和 50 条 PR 更新，并发布了 v0.1.8-alpha.1 预览版本。项目整体呈现健康发展态势：25 个 PR 已被合并/关闭，25 个 PR 待合并，进度平衡。社区参与度高，Issue #2595 (web agent 连接错误) 引发最多讨论(6条评论)，安全层增强功能受关注。

---

## 2. 版本发布

### v0.1.8-alpha.1 发布

**发布状态**: ✅ 已发布  
**发布时间**: 2026-03-04

**What's Changed:**

| PR | 作者 | 描述 |
|---|---|---|
| [#1379](https://github.com/zeroclaw-labs/zeroclaw/pull/1379) | @chumyin | fix(security): allow explicit executable paths in allowed_commands |
| [#1378](https://github.com/zeroclaw-labs/zeroclaw/pull/1378) | @chumyin | fix(slack): prevent replaying old messages after restart |

> **注**: 完整 changelog 因数据截断未完整展示。该版本为 alpha 预览版，建议生产环境暂缓升级。

---

## 3. 项目进展

### 已合并/关闭的重要 PR (25条)

| PR | 状态 | 规模 | 主题 |
|---|---|---|---|
| [#2675](https://github.com/zeroclaw-labs/zeroclaw/pull/2675) | ✅ CLOSED | XS | fix(ci): unblock main lint and codeql regressions |
| [#2677](https://github.com/zeroclaw-labs/zeroclaw/pull/2677) | ✅ CLOSED | XS | fix(agent): one-time non-cli allow-all token bypasses all approvals |
| [#2676](https://github.com/zeroclaw-labs/zeroclaw/pull/2676) | ✅ CLOSED | XS | fix(agent): one-time non-cli allow-all token now bypasses all approvals |
| [#1853](https://github.com/zeroclaw-labs/zeroclaw/pull/1853) | ✅ CLOSED | XS | feat(tools): add Feishu document operation tool with 13 actions |
| [#2488](https://github.com/zeroclaw-labs/zeroclaw/pull/2488) | ✅ CLOSED | XS | fix(gateway): clarify public-bind warning wording |
| [#1754](https://github.com/zeroclaw-labs/zeroclaw/pull/1754) | ✅ CLOSED | XS | fix(build): remove duplicate ModelProviderConfig |
| [#2673](https://github.com/zeroclaw-labs/zeroclaw/pull/2673) | ✅ CLOSED | XS | fix(test): resolve compilation errors and warnings |

### 待合并的重要 PR (25条)

| PR | 规模 | 主题 | 风险 |
|---|---|---|---|
| [#2681](https://github.com/zeroclaw-labs/zeroclaw/pull/2681) | L | feat(security): add semantic vectordb guard and corpus updater | high |
| [#2671](https://github.com/zeroclaw-labs/zeroclaw/pull/2671) | XL | feat(provider): add dedicated LM Studio provider | medium |
| [#2567](https://github.com/zeroclaw-labs/zeroclaw/pull/2567) | XS | fix(daemon): handle sigterm shutdown signal | medium |
| [#2495](https://github.com/zeroclaw-labs/zeroclaw/pull/2495) | XL | feat(channel/bluebubbles): dm_policy, group_policy, send_read_receipts | high |
| [#2584](https://github.com/zeroclaw-labs/zeroclaw/pull/2584) | XL | feat(channel/bb): text chunking | high |
| [#2582](https://github.com/zeroclaw-labs/zeroclaw/pull/2582) | XL | feat(tool/bluebubbles): send_attachment tool | high |
| [#2637](https://github.com/zeroclaw-labs/zeroclaw/pull/2637) | S | feat(security): add glob wildcard support for forbidden_paths | high |
| [#2609](https://github.com/zeroclaw-labs/zeroclaw/pull/2609) | L | refactor(providers): centralize static compatible provider descriptors | medium |

> **评估**: 项目在安全增强 (semantic vectordb guard, glob forbidden_paths) 和 iMessage (BlueBubbles) 通道功能上持续推进，LM Studio 专用 provider 也在开发中。

---

## 4. 社区热点

### 热门 Issues (按评论数排序)

| Issue | 状态 | 评论 | 主题 |
|---|---|---|---|
| [#2595](https://github.com/zeroclaw-labs/zeroclaw/issues/2595) | OPEN | 6 | **[BUG]** web agent Connection error - S1 阻塞 |
| [#2650](https://github.com/zeroclaw-labs/zeroclaw/issues/2650) | CLOSED | 4 | **[BUG]** zeroclaw skills install doesn't work - S1 阻塞 |
| [#2674](https://github.com/zeroclaw-labs/zeroclaw/issues/2674) | CLOSED | 3 | **[BUG]** Gemini API rejection (400 Bad Request) |
| [#2590](https://github.com/zeroclaw-labs/zeroclaw/issues/2590) | OPEN | 3 | **[FEATURE]** Extend security layer with Canary Tokens |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | OPEN | 3 | **[FEATURE]** Webhook transforms |
| [#2641](https://github.com/zeroclaw-labs/zeroclaw/issues/2641) | CLOSED | 3 | **[FEATURE]** Post-turn durable fact extraction |
| [#2651](https://github.com/zeroclaw-labs/zeroclaw/issues/2651) | CLOSED | 3 | **[FEATURE]** Add allowed_tools/denied_tools |
| [#2634](https://github.com/zeroclaw-labs/zeroclaw/issues/2634) | CLOSED | 2 | **[SECURITY]** open-skills auto-sync supply-chain risk |

**分析**: 
- **web agent 连接问题** (Issue #2595) 是今日最热议题，S1 级别阻塞影响用户体验
- **安全增强** 需求突出：Canary Tokens、Semantic VectorDB Guard、glob forbidden_paths 均有对应 PR 推进
- **BlueBubbles (iMessage)** 功能持续完善，多个 PR 在建

---

## 5. Bug 与稳定性

### S0/S1 级别 Bug (严重阻塞)

| Issue | 状态 | 严重度 | 描述 | Fix 状态 |
|---|---|---|---|---|
| [#2595](https://github.com/zeroclaw-labs/zeroclaw/issues/2595) | OPEN | S1 | web agent Connection error，daemon 无法正常工作 | ❌ 待处理 |
| [#2650](https://github.com/zeroclaw-labs/zeroclaw/issues/2650) | CLOSED | S1 | zeroclaw skills install 失败 | ✅ 已关闭 |
| [#2674](https://github.com/zeroclaw-labs/zeroclaw/issues/2674) | CLOSED | S1 | Gemini API 400 Bad Request | ✅ 已关闭 |
| [#2683](https://github.com/zeroclaw-labs/zeroclaw/issues/2683) | OPEN | S3 | 证书验证问题 (阿里云 Dashscope) | ❌ 待处理 |
| [#2679](https://github.com/zeroclaw-labs/zeroclaw/issues/2679) | OPEN | S0 | 审计日志配置不生效 | ❌ 待处理 |
| [#2600](https://github.com/zeroclaw-labs/zeroclaw/issues/2600) | OPEN | S0 | Raspberry Pi 3B+ 无法调用工具 | ❌ 待处理 |

### S2 级别 Bug (降级体验)

| Issue | 状态 | 描述 |
|---|---|---|
| [#2682](https://github.com/zeroclaw-labs/zeroclaw/issues/2682) | OPEN | Web UI Integrations 加载失败 |
| [#2665](https://github.com/zeroclaw-labs/zeroclaw/issues/2665) | OPEN | Memory 页面 React 错误 (category 对象处理) |
| [#2403](https://github.com/zeroclaw-labs/zeroclaw/issues/2403) | OPEN | Telegram 首条消息图片重复 |

---

## 6. 功能请求与路线图信号

### 高价值 Feature 请求

| Issue | 状态 | 主题 | 关联 PR | 纳入可能性 |
|---|---|---|---|---|
| [#2590](https://github.com/zeroclaw-labs/zeroclaw/issues/2590) | OPEN | Canary Tokens + Semantic VectorDB guard | [#2681](https://github.com/zeroclaw-labs/zeroclaw/pull/2681) | ⭐⭐⭐ 高 |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | OPEN | Webhook transforms | - | ⭐⭐ 中 |
| [#2668](https://github.com/zeroclaw-labs/zeroclaw/issues/2668) | OPEN | Matrix 语音转录支持 | - | ⭐⭐ 中 |
| [#2669](https://github.com/zeroclaw-labs/zeroclaw/issues/2669) | OPEN | LM Studio 自定义 provider | [#2671](https://github.com/zeroclaw-labs/zeroclaw/pull/2671) | ⭐⭐⭐ 高 |
| [#2602](https://github.com/zeroclaw-labs/zeroclaw/issues/2602) | OPEN | LiteLLM 注册为 provider alias | - | ⭐⭐ 中 |
| [#2606](https://github.com/zeroclaw-labs/zeroclaw/issues/2606) | OPEN | Shell 工具命令级审批 | - | ⭐⭐ 中 |
| [#2601](https://github.com/zeroclaw-labs/zeroclaw/issues/2601) | OPEN | Telegram allowed_users 环境变量 | - | ⭐⭐ 中 |
| [#2561](https://github.com/zeroclaw-labs/zeroclaw/issues/2561) | CLOSED | Telegram StreamMode::On 原生流式响应 | - | ✅ 已实现 |

---

## 7. 用户反馈摘要

### 核心痛点

1. **连接与网络问题**
   - web agent 连接失败频发 (Issue #2595)
   - 阿里云 Dashscope 服务证书验证问题 (Issue #2683)
   - Raspberry Pi 3B+ 平台兼容性问题 (Issue #2600)

2. **功能缺失**
   - 技能安装失败，用户无法从 ClawHub 安装技能 (Issue #2650)
   - 自定义 OpenAI 端点默认模型不生效 (Issue #2589)
   - Telegram 用户 ID 需硬编码，安全性低 (Issue #2601)

3. **安全问题**
   - open-skills 自动同步存在供应链注入风险 (Issue #2634)
   - 审计日志配置不生效 (Issue #2679)

### 积极反馈

- CLI agent 工作正常 (相比 web agent)
- Telegram 原生流式响应功能已实现 (Issue #2561)
- 安全层增强 (Canary Tokens, VectorDB Guard) 受期待

---

## 8. 待处理积压

### 长期未响应 Issue (>7天)

| Issue | 创建时间 | 状态 | 描述 |
|---|---|---|---|
| [#1211](https://github.com/zeroclaw-labs/zeroclaw/issues/1211) | 2026-02-21 | CLOSED | NextCloud Config initializing missing (3条评论) |
| [#2403](https://github.com/zeroclaw-labs/zeroclaw/issues/2403) | 2026-03-01 | OPEN | Telegram 图片重复问题 |
| [#2465](https://github.com/zeroclaw-labs/zeroclaw/issues/2465) | 2026-03-02 | CLOSED | 本地网络暴露措辞问题 (已关闭) |

### 需关注的高风险 PR

| PR | 风险 | 描述 |
|---|---|---|
| [#2681](https://github.com/zeroclaw-labs/zeroclaw/pull/2681) | high | Semantic VectorDB Guard - 安全核心功能 |
| [#2637](https://github.com/zeroclaw-labs/zeroclaw/pull/2637) | high | Glob forbidden_paths - 安全增强 |
| [#2495](https://github.com/zeroclaw-labs/zeroclaw/pull/2495) | high | BlueBubbles 权限策略 |

---

**报告生成时间**: 2026-03-04  
**数据来源**: github.com/zeroclaw-labs/zeroclaw

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 | 2026-03-04

## 1. 今日速览

2026年3月4日，EasyClaw 项目保持稳定迭代节奏。过去24小时内共发布 **2 个新版本**（v1.5.15、v1.5.16），社区活跃度集中在 Issue 解决层面——**2 个 Issue 已关闭**（#5 飞书连接问题、#6 配置覆盖升级丢失问题），但无新增 Issue 或 PR 提交。项目当前处于小版本快速修复期，主要围绕用户体验问题进行打磨。考虑到近期连续发布新版本，建议关注版本兼容性及升级流程稳定性。

---

## 2. 版本发布

### v1.5.16 已发布
**发布状态**: ✅ 已发布  
**发布时间**: 2026-03-03（推测）

本次更新主要涉及 macOS Gatekeeper 签名问题的用户指导优化。更新内容延续 v1.5.15，进一步完善了 macOS 安装时的常见问题文档。

**更新亮点**:
- 完善 macOS 安装失败时的中文用户指引
- 提供 Terminal 命令行修复未签名应用的方法

**迁移注意事项**: 无破坏性变更

**链接**: https://github.com/gaoyangz77/easyclaw/releases/tag/v1.5.16

---

### v1.5.15 已发布
**发布状态**: ✅ 已发布  
**发布时间**: 2026-03-03（推测）

**更新亮点**:
- 首次针对 macOS Gatekeeper 拦截问题提供官方解决方案
- 增加中文/英文双语安装指引

**迁移注意事项**: 无破坏性变更

**链接**: https://github.com/gaoyangz77/easyclaw/releases/tag/v1.5.15

> 📌 **版本发布小结**: 项目在 24 小时内连续发布两个小版本，聚焦于 macOS 安装体验优化，表明维护者对跨平台用户体验的重视。

---

## 3. 项目进展

### PR 合并情况
过去 24 小时 **无 PR 提交或合并**。

### Issue 关闭情况
| Issue | 状态 | 主题 | 关闭时间 |
|-------|------|------|----------|
| [#5](https://github.com/gaoyangz77/easyclaw/issues/5) | ✅ 已关闭 | 连接飞书不成功 | 2026-03-03 |
| [#6](https://github.com/gaoyangz77/easyclaw/issues/6) | ✅ 已关闭 | 覆盖安装后配置失效被重置 | 2026-03-03 |

**进展评估**: 两个社区反馈强烈的问题（飞书连接失败、配置升级丢失）已在本周期内关闭，项目稳定性和用户体验得到改善。但需注意关闭原因是否真正解决问题，抑或仅为临时处理。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue

**#5 - 连接飞书不成功**
- **作者**: @leati
- **创建时间**: 2026-03-02
- **评论数**: 11 条（🔥 本周期最高）
- **状态**: 已关闭
- **摘要**: 用户在飞书发送消息持续被要求添加白名单，添加后问题依旧。
- **链接**: https://github.com/gaoyangz77/easyclaw/issues/5

**热度分析**: 该 Issue 获得 11 条评论，表明飞书集成是用户高频使用场景，且问题可能涉及服务端配置或 API 变更。建议后续版本增强飞书连接的状态提示和错误诊断能力。

---

## 5. Bug 与稳定性

### 本周期报告的 Bug

| Issue | 严重程度 | 问题描述 | 状态 |
|-------|----------|----------|------|
| [#5](https://github.com/gaoyangz77/easyclaw/issues/5) | ⚠️ 中 | 飞书连接失败，频繁提示添加白名单 | ✅ 已关闭 |
| [#6](https://github.com/gaoyangz77/easyclaw/issues/6) | ⚠️ 中 | Windows 覆盖安装后配置/记忆数据丢失 | ✅ 已关闭 |

**稳定性小结**: 本周期无新增 Bug 报告。已关闭的 2 个 Issue 均涉及用户数据持久化和第三方集成，属于影响核心体验的问题。连续小版本发布（v1.5.15/16）或与此类问题的修复相关。

---

## 6. 功能请求与路线图信号

### 本周期新增功能请求
**无**

### 潜在路线图信号
从 Issue #5（飞书连接）和 #6（配置迁移）的讨论热度来看，用户对以下方向存在明确需求：
1. **跨版本配置迁移机制** — 覆盖安装时的数据保留需更可靠
2. **飞书集成稳定性** — 需要更清晰的连接状态反馈和错误诊断
3. **跨平台一致性** — macOS 安装问题频发，需简化安装流程

> 📌 结合近期连续发布两个小版本修复 macOS 安装问题，项目可能正处于 **"跨平台体验优化"** 迭代周期。

---

## 7. 用户反馈摘要

### 核心用户痛点

| 场景 | 痛点 | 频次 |
|------|------|------|
| 飞书集成 | 连接失败，频繁要求添加白名单 | 高 |
| Windows 升级 | 覆盖安装后配置丢失，被迫重新开始 | 中 |
| macOS 安装 | Gatekeeper 拦截，提示"已损坏" | 中 |

### 用户满意之处
- 维护响应速度较快（Issue 均在创建后 1-2 天内关闭）
- 持续小版本迭代，版本发布频繁

### 用户不满意之处
- 升级覆盖安装的数据保留机制不可靠
- 第三方集成（飞书）缺乏明确的配置指引

---

## 8. 待处理积压

### 长期未响应的 Issue / PR
**无长期积压 Issue**。本周期所有 Issue 均已关闭。

### 建议关注
- **飞书集成**: Issue #5 虽然已关闭，但评论数高达 11 条，需确认是否彻底解决，抑或用户无奈放弃
- **配置迁移**: Issue #6 反映的覆盖安装数据丢失问题可能是共性问题，建议在后续版本中提供更稳健的迁移方案

---

## 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐⭐ | 2 个 Issue 关闭，2 个版本发布，无 PR |
| 响应速度 | ⭐⭐⭐⭐ | Issue 1-2 天内关闭 |
| 稳定性 | ⭐⭐⭐ | 存在配置迁移、飞书连接等重复问题 |
| 社区参与 | ⭐⭐⭐ | 评论集中在 1-2 个 Issue |

**综合评估**: 项目处于稳定维护期，小版本迭代频繁，但需关注用户数据迁移可靠性和第三方集成稳定性的长期改进。

---

*日报生成时间: 2026-03-04 | 数据来源: GitHub EasyClaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**2026年3月4日 | 星期三**

---

## 1. 今日速览

过去 24 小时内，LobsterAI 项目保持较高活跃度，共产生 **31 条 Issue 更新**（20 新开/活跃，11 已关闭）和 **9 条 PR 更新**（7 已合并/关闭，2 待处理）。社区反馈热烈，Issue #3（沙箱版本错误）以 7 条评论成为讨论焦点。项目持续推进功能迭代，Windows 沙箱关键修复、Stepfun 模型支持等 PR 正在开发中。**整体项目健康度良好，但沙箱相关问题的关注度持续高涨，需重点跟进。**

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 状态 | 说明 |
|---|---|---|
| [#238](https://github.com/netease-youdao/LobsterAI/pull/238) | ✅ Closed | **修复 Windows 沙箱 VM 启动、附件及镜像问题** — 解决 QEMU 重试文件锁冲突、VM 启动卡在空 runlevel、agentd 服务依赖优化 |
| [#216](https://github.com/netease-youdao/LobsterAI/pull/216) | ✅ Closed | 修复 Windows 打包时 skill 依赖安装失败（添加 `shell: isWin`） |
| [#236](https://github.com/netease-youdao/LobsterAI/pull/236) | ✅ Closed | 修复 Issue #195：邮箱 skill 搜不到发票类型邮件 |
| [#233](https://github.com/netease-youdao/LobsterAI/pull/233) | ✅ Closed | **feat: 支持 MCP（Model Context Protocol）** |
| [#222](https://github.com/netease-youdao/LobsterAI/pull/222) | ✅ Closed | feat: 支持数理化公式渲染（KaTeX + remark-math） |
| [#229](https://github.com/netease-youdao/LobsterAI/pull/229) | ✅ Closed | 修复 IM 配置保存 bug & 邮箱配置页交互闪跳，增加服务条款和导出日志功能 |
| [#228](https://github.com/netease-youdao/LobsterAI/pull/228) | ✅ Closed | fix: 支持小蜜蜂账号实时变更 |

### 待处理 PR

| PR | 状态 | 说明 |
|---|---|---|
| [#240](https://github.com/netease-youdao/LobsterAI/pull/240) | 🔄 Open | **Feat/workflow enhancement** — 多 agent 协作工作流，支持自定义 soul.md，引入 PASS/REJECT 机制 |
| [#237](https://github.com/netease-youdao/LobsterAI/pull/237) | 🔄 Open | **feat: add Stepfun provider** — 新增 Step 3.5 Flash 模型支持及自定义图标 |

---

## 4. 社区热点

以下 Issues 引发最多讨论（按评论数排序）：

| Issue | 评论 | 状态 | 核心问题 |
|---|---|---|---|
| [#3](https://github.com/netease-youdao/LobsterAI/issues/3) | 7 | ✅ Closed | **Sandbox 自动下载安装的版本错误** — Mac M4 环境安装 x86_64 虚拟机导致沙箱不可用 |
| [#205](https://github.com/netease-youdao/LobsterAI/issues/205) | 6 | ✅ Closed | 安装问题长期未解决 |
| [#125](https://github.com/netease-youdao/LobsterAI/issues/125) | 3 | ✅ Closed | 沙箱模式找不到上传的文件 |
| [#78](沙箱运行时无法访问本地文件内容) | 3 | ✅ Closed | Win10 沙箱模式下预设文件夹为空 |
| [#37](https://github.com/netease-youdao/LobsterAI/issues/37) | 3 | 🔄 Open | 联网搜索能力被禁用 — WebFetch/WebSearch 被应用策略拦截 |

**分析**：沙箱相关问题占据热点榜首，反映出这是用户最常遇到的场景。Issue #3 和 #205 均已关闭，但用户反馈安装问题仍存在，后续需验证修复效果。

---

## 5. Bug 与稳定性

### 严重（高优先级）

| Issue | 严重程度 | 说明 | 关联 PR |
|---|---|---|---|
| [#232](https://github.com/netease-youdao/LobsterAI/issues/232) | 🔴 严重 | 0.1.23 导致 macOS 内存飙升、卡死，可能与沙箱模式相关 | — |
| [#239](https://github.com/netease-youdao/LobsterAI/issues/239) | 🔴 严重 | Windows 10 新装环境 Claude Code 进程退出错误（code 1） | — |
| [#202](https://github.com/netease-youdao/LobsterAI/issues/202) | 🔴 严重 | Windows 版本无法运行任何 skill，强制要求安装 Cygwin | — |
| [#191](https://github.com/netease-youdao/LobsterAI/issues/191) | 🔴 严重 | 单个 session 多次对话后 API Error 400（tool_calls 缺失响应） | — |
| [#243](https://github.com/netease-youdao/LobsterAI/issues/243) | 🔴 严重 | 必现 API Error 400（Write tool_call 无响应消息） | — |

### 中等

| Issue | 严重程度 | 说明 |
|---|---|---|
| [#244](https://github.com/netease-youdao/LobsterAI/issues/244) | 🟡 中 | MacBook Pro M2 Max 输入卡顿、显示延迟 |
| [#248](https://github.com/netease-youdao/LobsterAI/issues/248) | 🟡 中 | deepseek/qwen 测试连接成功但实际报 401 令牌错误 |
| [#247](https://github.com/netease-youdao/LobsterAI/issues/247) | 🟡 中 | gemini 无法连接 |
| [#245](https://github.com/netease-youdao/LobsterAI/issues/245) | 🟡 中 | ollama 模型调用时频繁中断报错 |

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue | 功能描述 | 潜在纳入 |
|---|---|---|
| [#240](https://github.com/netease-youdao/LobsterAI/pull/240) | **Workflow Enhancement** — 多 agent 协作、自定义 soul.md、PASS/REJECT 机制 | ⭐ 值得关注 |
| [#237](https://github.com/netease-youdao/LobsterAI/pull/237) | **Stepfun Provider** — Step 3.5 Flash 模型支持 | ⭐ 下一版本可能纳入 |
| [#227](https://github.com/netease-youdao/LobsterAI/issues/227) | 缺少上下文压缩功能，单一会话上下文受限 | 需评估 |
| [#186](https://github.com/netease-youdao/LobsterAI/issues/186) | 记忆能力差，不如原版 OpenClaw | 需评估 |
| [#242](https://github.com/netease-youdao/LobsterAI/issues/242) | 飞书消息发送后添加状态图标 + 即时回显 | 需评估 |

---

## 7. 用户反馈摘要

### 痛点

1. **沙箱问题频发** — 文件找不到、无法访问本地内容、安装失败是最高频反馈
2. **Windows 兼容性** — skill 依赖 Cygwin、VM 启动失败、安装问题
3. **macOS 稳定性** — 0.1.23 版本内存飙升卡死、输入延迟
4. **API 错误** — 多次对话后易触发 tool_calls 相关 400 错误

### 正面反馈

- PR #238 修复了 Windows 沙箱多项关键问题，用户期待验证效果
- MCP 支持、公式渲染等新功能获社区认可

---

## 8. 待处理积压

以下 Issue 超过 48 小时未获官方回应，需关注：

| Issue | 等待时间 | 说明 |
|---|---|---|
| [#234](https://github.com/netease-youdao/LobsterAI/issues/234) | 1 天 | skill-creator 路径在沙箱重启后丢失 |
| [#231](https://github.com/netease-youdao/LobsterAI/issues/231) | 1 天 | 新版本内置 Python 不可用 |
| [#230](https://github.com/netease-youdao/LobsterAI/issues/230) | 1 天 | 中文路径额外增加空格导致文件识别失败 |
| [#246](https://github.com/netease-youdao/LobsterAI/issues/246) | 1 天 | 覆盖安装导致用户数据丢失风险 |

---

*报告生成时间：2026-03-04 | 数据来源：GitHub LobsterAI 仓库*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-04)

## 1. 今日速览

ZeptoClaw 项目在 2026-03-04 呈现高度活跃态势。过去 24 小时内共处理 29 项工单（11 条 Issues + 18 条 PRs），其中 14 个 PR 已被合并/关闭，8 个 Issues 得以解决。核心进展集中在安全功能增强（taint tracking、loop guard）、API 拓展（OpenAI 兼容端点、MCP server）以及基础设施重构（thin kernel extraction）三大方向。项目当前无新版本发布，代码库处于功能迭代密集期，整体向前推进势头强劲。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日合并/关闭的重要 PR 及功能推进：

| PR | 状态 | 核心内容 |
|---|---|---|
| **#241** | Closed | **Taint Tracking 数据流安全** — TaintEngine 标记工具输出的来源元数据（ExternalNetwork、Secret、UserInput、PII、UntrustedAgent），并在执行前阻止恶意数据流向敏感sink |
| **#233** | Closed | **MCP Server 模式** — 新增 `zeptoclap mcp-server` 命令，通过 stdio（默认）或 HTTP（`:3000`）向 Claude Desktop、VS Code、Cursor 暴露工具 |
| **#236** | Closed | **Loop Guard 升级** — 多层检测：ping-pong 振荡识别、outcome-aware 阻塞、poll  relaxation、梯度响应（Warn→Block→CircuitBreak） |
| **#235** | Closed | **OpenAI 兼容 API** — 新增 `/v1/chat/completions` 和 `/v1/models` 端点，支持 SSE 流式和非流式输出，可作为 OpenAI SDK 的 drop-in 替代 |
| **#224** | Closed | **Thin Kernel 重构** — 从 `create_agent_with_template()` 提取 ~700 行代码至 `src/kernel/` 模块，封装为 ZeptoKernel::boot() 单一入口 |
| **#214** | Closed | **SearXNG Web Search 支持** — 新增第三方搜索提供商，支持自托管实例配置 |
| **#239** | Closed | **数据流污点追踪（工具 I/O）** — TaintEngine 集成至 kernel gate 流水线，pre-execution sink 检查 + post-execution output 标记 |

**项目整体评估**：安全能力显著增强（MCP server、taint tracking、loop guard），API 生态持续扩展（OpenAI 兼容），内部架构趋于模块化（thin kernel extraction）。多项 P2-high 功能已落地。

---

## 4. 社区热点

今日讨论最活跃的 Issues：

| Issue | 状态 | 讨论热度 | 链接 |
|---|---|---|---|
| **#237** docs: clarify screenshot feature behavior | CLOSED | 1 条评论 | [查看](https://github.com/qhkm/zeptoclaw/issues/237) |
| **#225** feat(safety): add taint tracking for data-flow-aware safety | CLOSED | 1 条评论 | [查看](https://github.com/qhkm/zeptoclaw/issues/225) |
| **#238** chore: investigate Docker/act test mismatch | OPEN | 0 条评论 | [查看](https://github.com/qhkm/zeptoclaw/issues/238) |

**分析**：热点集中在文档澄清（screenshot 功能）和安全功能实现。#237 的评论反馈表明用户对工具行为存在实际困惑，推动了文档改进；#225 相关 PR 被多次重开（#241, #240, #239, #234），说明安全功能的实现经过多轮迭代，社区对数据流安全的重视程度较高。

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 描述 | 状态 | 关联 Fix PR |
|---|---|---|---|---|
| **#238** | P2-high | Docker/act 环境下 plugin 和 doctor 测试与本地运行结果不一致 | OPEN | #242 (Open) |
| **#237** (docs issue) | P3-normal | screenshot 功能文档不清晰导致用户使用困惑 | CLOSED | — |

**#238 详情**：本地测试通过但 Docker/act 环境出现以下失败：
- `providers::plugin::tests::test_chat_spawn_failure`
- `tools::binary_plugin::tests::test_execute_binary_not_executable`
- `tools::doctor::tests::*`

关联 PR #242 已提出修复：root 用户跳过权限检查测试 + 扩大 spawn-failure 错误断言容忍度。

---

## 6. 功能请求与路线图信号

**新功能请求（Open）**：

| Issue | 领域 | 描述 | 预期版本信号 |
|---|---|---|---|
| **#222** | Config | per-template capability sandbox（工具 allowlist、shell 模式、资源限制） | P3-normal，中期需求 |
| **#221** | Safety | Merkle hash-chain audit trail for tool execution | P3-normal，安全审计方向 |
| **#238** | Testing | Docker/act 测试稳定性 | P2-high，短期修复 |

**路线图信号判断**：
- **安全能力**已成为核心差异化方向（taint tracking 已落地，#221 审计追踪是自然延伸）
- **MCP 生态**从 client 拓展至 server，#217 已完成
- **OpenAI 兼容** API #218 已落地，生态集成能力增强
- **模块化重构** #223 thin kernel 提取为后续插件化铺路

---

## 7. 用户反馈摘要

从 Issue 评论中提炼：

- **文档需求**（#237）：用户对 `--features screenshot` 与 `agent -m "Make a screenshot"` 的行为差异存在困惑，要求明确说明 screenshot 工具是 URL 捕获（非桌面截屏）
- **安全关注**：taint tracking 相关 Issue（#225, #219）虽无直接用户评论，但 PR 多轮重开反映维护者对数据流安全的高度重视
- **测试环境问题**：#238 由维护者在 PR #183 验证中发现，暂无用户直接反馈，但影响 CI 可靠性

**用户痛点场景**：手动验证时的截图功能误用、Docker/CI 环境一致性

---

## 8. 待处理积压

| Issue/PR | 类型 | 积压时长 | 提醒 |
|---|---|---|---|
| **#238** | Issue | 1 天 | Docker/act 测试不匹配需优先解决，影响 CI 可靠性 |
| **#222** | Issue | 1 天 | per-template sandbox 需规划，属于较大架构变更 |
| **#221** | Issue | 1 天 | Merkle 审计追踪可纳入安全路线图 |
| **#242** | PR (Open) | 1 天 | 修复 #238 的测试问题，需 review 合并 |
| **#228, #229, #232** | PRs (Open) | 1 天 | 依赖更新（gog-gmail、gog-core、gog-calendar），待合并 |

---

*报告生成时间：2026-03-04 | 数据来源：GitHub qhkm/zeptoclaw*

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-04)

## 1. 今日速览

过去24小时，NanoBot 项目保持高度活跃状态。共有 **29 条 Issues 更新**（新开/活跃 22 条，关闭 7 条），以及 **53 条 PRs 更新**（待合并 37 条，已合并/关闭 16 条）。社区参与度较高，多个功能增强 PR 正在积极开发中，包括 Langfuse 可观测性支持、Telegram 群组话题支持、视频文件接收等。Bug 修复方面进展显著，已关闭多个影响用户体验的问题。整体项目健康度良好，开发节奏稳定。

---

## 2. 版本发布

**本期无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR # | 标题 | 状态 | 说明 |
|------|------|------|------|
| [#1491](https://github.com/HKUDS/nanobot/pull/1491) | Feat/feishu group tools | ✅ CLOSED | 飞书群组工具功能 |
| [#1417](https://github.com/HKUDS/nanobot/pull/1417) | fix: merge runtime context into user message | ✅ CLOSED | 修复连续用户消息导致的 API 错误（关联 #1414） |
| [#1485](https://github.com/HKUDS/nanobot/pull/1485) | fix: add missed `openai` dependency | ✅ CLOSED | 修复缺失的 openai 依赖 |
| [#1480](https://github.com/HKUDS/nanobot/pull/1480) | Feature/streaming output | ✅ CLOSED | 新增流式输出支持，优化 Telegram 体验 |
| [#313](https://github.com/HKUDS/nanobot/pull/313) | feat: Add model alias resolution | ✅ CLOSED | 模型别名解析与 provider 前缀自动映射 |

**项目推进亮点**：多个核心体验优化已合并，包括运行时上下文合并修复（解决 Minimax API 错误）、流式输出支持（改善 Telegram 交互）、模型别名功能（简化配置）。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 点赞 | 状态 |
|---------|------|--------|------|------|
| [#75](https://github.com/HKUDS/nanobot/issues/75) | How Do I content the Ollama | 17 | 0 | OPEN |
| [#140](https://github.com/HKUDS/nanobot/issues/140) | Do you have any plans to support GitHub Copilot providers? | 8 | 4 | OPEN |
| [#222](https://github.com/HKUDS/nanobot/issues/222) | Multi agents setup - Supported ? | 8 | 5 | OPEN |

**热点分析**：

1. **#75 Ollama 连接问题** - 17 条评论显示用户对本地模型部署有强烈需求，配置文件中的 `model: "ollama/kimi-k2.5:cloud"` 引发关于如何正确配置本地 Ollama 的持续讨论。

2. **#140 GitHub Copilot Provider 支持** - 8 条评论、4 点赞表明用户希望将 NanoBot 作为 Copilot 的后端，扩展使用场景。

3. **#222 多智能体设置** - 8 条评论、5 点赞，社区对多智能体架构有明确需求，期盼官方文档或指南。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度）

| Issue # | 描述 | 严重程度 | 状态 | Fix PR |
|---------|------|----------|------|--------|
| [#1487](https://github.com/HKUDS/nanobot/issues/1487) | 大模型调用错误：function.arguments 参数必须为 JSON 格式 | 🔴 高 | OPEN | - |
| [#1481](https://github.com/HKUDS/nanobot/issues/1481) | bot 回复"I'm on it"后停止响应（Windows + GitHub Copilot） | 🔴 高 | OPEN | - |
| [#1478](https://github.com/HKUDS/nanobot/issues/1478) | LM Studio 集成无法工作，报错"No API key configured" | 🟠 中 | OPEN | - |
| [#1401](https://github.com/HKUDS/nanobot/issues/1401) | TypeError: type 'Choice' is not subscriptable | 🟠 中 | OPEN | - |
| [#1486](https://github.com/HKUDS/nanobot/issues/1486) | provider 强制 dashscope 但 model 被错误路由至 moonshot | 🟡 低 | OPEN | - |
| [#1473](https://github.com/HKUDS/nanobot/issues/1473) | subagent 重复调用问题 | 🟡 低 | OPEN | - |

**备注**：已修复的 Bug 包括 #1197（message tool 导致 final response 丢失）、#1394（QQ 消息去重错误）、#1462（Telegram 代理配置失败）。

---

## 6. 功能请求与路线图信号

### 新功能请求（近期可能纳入）

| Issue # | 功能请求 | 状态 | 关联 PR |
|---------|----------|------|---------|
| [#1470](https://github.com/HKUDS/nanobot/issues/1470) | 支持本地 Hugging Face 模型配置 | OPEN | - |
| [#1461](https://github.com/HKUDS/nanobot/issues/1461) | 统一 daemon gateway 语义层（后台运行） | OPEN | - |
| [#1268](https://github.com/HKUDS/nanobot/issues/1268) | 暴露 OpenAI 兼容 Chat Completions API | OPEN | - |
| [#1471](https://github.com/HKUDS/nanobot/issues/1471) | 支持接收 Telegram 视频文件 | OPEN | [#1472](https://github.com/HKUDS/nanobot/pull/1472) |
| [#1448](https://github.com/HKUDS/nanobot/issues/1448) | Skill 执行安全沙箱 | OPEN | - |
| [#1229](https://github.com/HKUDS/nanobot/issues/1229) | 可选 BoxLite 沙箱后端 | OPEN | - |

### 正在开发中的功能 PRs

- **#1490** - Langfuse 可观测性支持
- **#1489** - 子 Agent LLM 配置支持
- **#1488** - MCP SSE 传输支持
- **#1484** - PDF 文本提取
- **#1482** - Telegram 群组话题支持
- **#1475** - Nostr 频道支持 (NIP-17)
- **#1443** - 心跳推理与通知解耦

---

## 7. 用户反馈摘要

### 用户痛点与场景

1. **本地模型部署困难**：多个用户反馈无法正确连接 Ollama、LM Studio 等本地模型，需要更清晰的文档。

2. **长任务执行卡顿**（#1022）：用户尝试执行"爬取 Facebook 页面最新帖子"等长任务时，nanobot 返回"Starting execution now"后无实际动作。

3. **国内渠道适配**：QQ 消息去重错误（#1394）、Telegram 代理配置问题（#1462）反映国内用户对多渠道稳定性的需求。

4. **历史记录噪音**（#1449）：`HISTORY.md` 快速增长且包含大量无意义信息，影响调试体验。

5. **模型兼容性**：
   - GitHub Copilot/Claude Sonnet 4.6 出现"懒执行"问题（#1459）
   - Codex 5.3 不执行实际动作（#1459）
   - qwen3.5 plus 模型 PDF 生成技能报错（#1487）

### 正面反馈

- 多位用户在 #1181 中赞赏 NanoBot 的单层 ReAct 循环设计，认为其非常适合 Telegram/Discord 等异步消息场景。
- #1470 作者称赞 NanoBot 是"优秀的轻量级 LLM 交互框架"。

---

## 8. 待处理积压

### 长期未解决的重要 Issues

| Issue # | 问题 | 创建时间 | 状态 | 建议 |
|---------|------|----------|------|------|
| [#75](https://github.com/HKUDS/nanobot/issues/75) | Ollama 连接配置 | 2026-02-04 | OPEN | 需官方文档或配置示例 |
| [#222](https://github.com/HKUDS/nanobot/issues/222) | 多智能体设置指南 | 2026-02-06 | OPEN | 需文档或示例 |
| [#140](https://github.com/HKUDS/nanobot/issues/140) | GitHub Copilot Provider | 2026-02-05 | OPEN | 评估可行性 |
| [#1022](https://github.com/HKUDS/nanobot/issues/1022) | 长任务执行无响应 | 2026-02-22 | OPEN | 高优先级调查 |
| [#1181](https://github.com/HKUDS/nanobot/issues/1181) | 双层架构建议 | 2026-02-25 | OPEN | 需技术评审 |

### 待处理的重要 PRs

| PR # | 标题 | 状态 | 建议 |
|------|------|------|------|
| [#1233](https://github.com/HKUDS/nanobot/pull/1233) | feat: add async event injection mechanism | OPEN | 建议优先评审 |
| [#1440](https://github.com/HKUDS/nanobot/pull/1440) | Experiment: bot with bot p2p chat | OPEN | 实验性功能，可考虑合并 |
| [#1297](https://github.com/HKUDS/nanobot/pull/1297) | Simple web chat channel | OPEN | 建议评审 |
| [#1390](https://github.com/HKUDS/nanobot/pull/1390) | feat: Mistral Provider and Voxtral Audio | OPEN | 建议评审 |

---

**日报生成时间**：2026-03-04  
**数据来源**：GitHub HKUDS/nanobot

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-03-04**

---

## 1. 今日速览

PicoClaw 社区今日保持**高度活跃**状态。24小时内共产生 **112 条 Issues 更新**（其中108条为新开/活跃，4条已关闭）和 **242 条 PR 更新**（206条待合并，36条已合并/关闭）。项目整体呈现快速迭代态势，但 PR 合并效率（36/242 ≈ 15%）有待提升。今日无新版本发布，社区讨论主要集中在本地模型集成、Gemini 3 兼容性及多平台支持等领域。

---

## 2. 版本发布

**本期无新版本发布**

---

## 3. 项目进展

今日共 **36 条 PR 已合并/关闭**，以下为重要进展：

| PR # | 状态 | 标题 | 贡献者 | 意义 |
|------|------|------|--------|------|
| [#1009](https://github.com/sipeed/picoclaw/pull/1009) | **CLOSED** | feat: 3-phase runtime loop, CoT system, memory hierarchy, Wails launcher & release bundle | @mingzhi1 | 重大架构升级：引入3阶段运行时循环、思维链系统、内存层级、Wails启动器 |
| [#892](https://github.com/sipeed/picoclaw/pull/892) | **CLOSED** | Fix/inbound dedup messageid | @mosir | 修复Telegram重复回复问题，防止心跳/工具调用循环导致的消息风暴 |
| [#783](https://github.com/sipeed/picoclaw/pull/783) | **CLOSED** | [BUG] Model list entries with / in model field cause provider resolution failure | @fernandof | 修复OpenRouter命名空间模型ID解析错误 |
| [#370](https://github.com/sipeed/picoclaw/pull/370) | **CLOSED** | Docs: Add comprehensive Social Media Integration Guide | @firaseth | 新增社交媒体集成文档 |
| [#433](https://github.com/sipeed/picoclaw/pull/433) | **CLOSED** | Claude/fix agent persistence | @agenciaspace | 修复Agent持久化问题 |

> **注**：部分PR状态为CLOSED但未标注MERGED，具体合并情况需进一步确认。

---

## 4. 社区热点

以下 Issues/PRs 评论数最多，反映核心用户诉求：

### Issues 讨论热度 TOP 5

| Issue # | 标题 | 评论数 | 标签 | 链接 |
|---------|------|--------|------|------|
| #190 | Tutorial guide for installation on an Android Phone | **10** | documentation, question | [查看](https://github.com/sipeed/picoclaw/issues/190) |
| #79 | Gemini 3 Flash Preview: Function call fails due to missing thought_signature | **9** | bug, provider | [查看](https://github.com/sipeed/picoclaw/issues/79) |
| #148 | Can the openclaw official or third-party SKILLs be supported out of the box in picoclaw? | **8** | enhancement, skill | [查看](https://github.com/sipeed/picoclaw/issues/148) |
| #28 | Feat Request: LM Studio Easy Connect | **8** | enhancement, provider | [查看](https://github.com/sipeed/picoclaw/issues/28) |
| #297 | Design: Create a cute Mantis Shrimp logo for PicoClaw! | **7** | roadmap, design | [查看](https://github.com/sipeed/picoclaw/issues/297) |

### PR 讨论热度 TOP 3

| PR # | 标题 | 状态 | 链接 |
|------|------|------|------|
| #1047 | feat(discord): support referenced messages and resolve channel/link references | OPEN | [查看](https://github.com/sipeed/picoclaw/pull/1047) |
| #709 | feat: implement swarm mode for multi-agent coordination | OPEN | [查看](https://github.com/sipeed/picoclaw/pull/709) |
| #976 | feat: agent team | OPEN | [查看](https://github.com/sipeed/picoclaw/pull/976) |

### 热点分析

1. **本地模型集成需求旺盛**：Issue #190（Android安装）、#28（LM Studio）、#109（本地Ollama）均涉及本地化部署，用户对隐私控制和离线运行有强烈诉求。

2. **Gemini 3 兼容性告急**：Issue #79、#161 均指向 Gemini 3 强制要求 `thought_signature` 的破坏性变更，导致工具调用失败，需紧急适配。

3. **多Agent系统演进**：PR #709（swarm mode）、#976（agent team）预示项目向多Agent协作方向演进，社区对此关注度高。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

### 🔴 高优先级（影响核心功能）

| Issue # | 标题 | 严重程度 | 状态 | Fix PR |
|---------|------|----------|------|--------|
| [#79](https://github.com/sipeed/picoclaw/issues/79) | Gemini 3 Flash Preview: Function call fails (missing thought_signature) | **Critical** | OPEN | - |
| [#161](https://github.com/sipeed/picoclaw/issues/161) | Incompatibility with Gemini 3 Pro/Flash (Mandatory Thought Signatures) | **Critical** | OPEN | - |
| [#109](https://github.com/sipeed/picoclaw/issues/109) | [Bug] 使用本地 Ollama 时提示 "no API key configured" 错误 | **High** | OPEN | - |
| [#127](https://github.com/sipeed/picoclaw/issues/127) | Windows/Gemini: "404 v1main" on native provider | **High** | OPEN | - |
| [#966](https://github.com/sipeed/picoclaw/issues/966) | Local Thinking model (Qwen 3.5) return empty content | **High** | OPEN | - |

### 🟡 中优先级

| Issue # | 标题 | 严重程度 | 状态 |
|---------|------|----------|------|
| [#1006](https://github.com/sipeed/picoclaw/issues/1006) | [BUG] picolm-local: api_key or api_base is required | Medium | OPEN |
| [#96](https://github.com/sipeed/picoclaw/issues/96) | apikey is already set, Error: no API key configured (model: z-ai/glm4.7) | Medium | OPEN |
| [#288](https://github.com/sipeed/picoclaw/issues/288) | change identity PicoClaw (Docker) | Medium | OPEN |
| [#197](https://github.com/sipeed/picoclaw/issues/197) | Bot stuck on running express server | Medium | OPEN |

### 🟢 已修复

- [#783](https://github.com/sipeed/picoclaw/issues/783) - Model list entries with `/` in model field cause provider resolution failure → **已通过 PR #696 修复**

---

## 6. 功能请求与路线图信号

今日社区提出以下功能需求，结合已有 PR 可判断演进方向：

### ⭐ 最可能纳入下一版本的功能

| Issue # | 功能描述 | 对应 PR | 可能性 |
|---------|----------|---------|--------|
| #995 | 多用户支持（家庭/朋友共享实例） | - | **High** - 需求明确 |
| #738 | 用户可配置钩子（pre/post tool execution, message events） | - | **High** - 生态扩展性强 |
| #61 | 聊天中支持文件收发 | - | **High** - 实用性强 |
| #440 | 用上下文窗口限制替代硬迭代次数 | - | **High** - 架构改进 |
| #415 | 集成 Open-Skills 快速启动 | - | **Medium** |
| #260 | Azure OpenAI 支持 | - | **Medium** |
| #248 | WhatsApp 支持 | - | **Medium** |

### 🚀 已在开发中的功能（通过 PR 判断）

1. **多Agent协作**：PR [#709](https://github.com/sipeed/picoclaw/pull/709)（swarm mode）、[#976](https://github.com/sipeed/picoclaw/pull/976)（agent team）
2. **Discord增强**：PR [#1047](https://github.com/sipeed/picoclaw/pull/1047)（引用消息支持）
3. **Agent能力增强**：PR [#943](https://github.com/sipeed/picoclaw/pull/943)（日志并发安全）、[#1029](https://github.com/sipeed/picoclaw/pull/1029)（可配置摘要阈值）

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点与场景：

### 👍 用户满意之处

- 项目迭代速度快，功能持续增加
- 多渠道（Telegram、Discord、Slack）支持完善
- 开源生态活跃，第三方集成积极

### 👎 用户不满/痛点

1. **本地模型配置复杂**：Issue #109、#75、#1006 均反映本地 Ollama 配置困难，"no API key configured" 错误频繁出现
2. **文档不足**：Issue #190 明确请求 Android 安装教程；Issue #75 询问如何连接本地 Ollama
3. **兼容性断裂**：Gemini 3 强制思维签名导致现有功能失效，用户对上游变更措手不及
4. **Windows 支持不完善**：Issue #127、#109 均涉及 Windows 11 环境问题
5. **会话管理缺失**：Issue #572、#995 反映无法方便地开启新会话或管理多用户

### 💡 典型使用场景

- 家庭/朋友共享 PicoClaw 实例（#995）
- Android 手机上运行 AI 助手（#190）
- 通过 LM Studio 连接本地大模型（#28）
- 企业内网部署（需 Azure OpenAI 支持，#260）

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或陷入停滞，需维护者关注：

| Issue/PR # | 标题 | 状态 | 积压时长 | 优先级 | 备注 |
|------------|------|------|----------|--------|------|
| [#116](https://github.com/sipeed/picoclaw/issues/116) | PicoClaw 代码问题清单(代码审查) | OPEN | ~20天 | **High** | 含P0 BUG-001: skillsCmd() 重复定义 |
| [#154](https://github.com/sipeed/picoclaw/pull/154) | feat: add minimax provider support | OPEN | ~18天 | Medium | 等待审查 |
| [#171](https://github.com/sipeed/picoclaw/issues/171) | Even smaller binaries with Go build tags | OPEN | ~18天 | Low | 长期优化建议 |
| [#425](https://github.com/sipeed/picoclaw/issues/425) | I think i ported PicoClaw to Windows-x86? | OPEN | ~14天 | Low | 非官方fork，可参考 |

---

## 📊 数据一览

| 指标 | 数值 |
|------|------|
| Issues 新开/活跃 | 108 |
| Issues 已关闭 | 4 |
| PR 待合并 | 206 |
| PR 已合并/关闭 | 36 |
| 新版本发布 | 0 |
| 评论最多 Issue | #190 (10条) |
| 评论最多 PR | #1047 (OPEN) |

---

*报告生成时间：2026-03-04 | 数据来源：GitHub PicoClaw Repository*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-03-04

---

## 1. 今日速览

NanoClaw 社区今日保持**高度活跃**状态。24小时内共处理 **32 项工件更新**（6 Issues + 26 PRs），其中 PR 合并/关闭率约为 **35%**（9/26）。项目持续快速迭代，功能扩展与 Bug 修复并行推进，今日重点集中在多运行时支持、渠道集成和安全功能增强。代码贡献覆盖面广，涵盖从底层运行时迁移（Bun）到上层技能增强的完整技术栈。

---

## 2. 版本发布

**本期无新版本发布**

---

## 3. 项目进展

今日共 **9 个 PR 已合并/关闭**，推进了多项关键功能：

| PR | 状态 | 概要 | 链接 |
|---|---|---|---|
| #677 | ✅ CLOSED | **可配置模型选择**：新增 `DEFAULT_MODEL` 环境变量和 `/model` Telegram 命令，支持 `sonnet`、`opus`、`haiku` 等别名 | [#677](https://github.com/qwibitai/nanoclaw/pull/677) |
| #276 | ✅ CLOSED | **Chrome 浏览器技能**：新增持久化 Chrome sidecar，支持页面导航、可访问性快照、填表、截图、Cookie 管理 | [#276](https://github.com/qwibitai/nanoclaw/pull/276) |
| #657 | ✅ CLOSED | **定时任务防重执行**：3行代码修复调度器竞态条件，关闭 #138、#211、#300、#578、#669 五个关联 Issue | [#657](https://github.com/qwibitai/nanoclaw/pull/657) |
| #674 | ✅ CLOSED | **WebSockets 渠道支持** | [#674](https://github.com/qwibitai/nanoclaw/pull/674) |
| #161 / #675 | ✅ CLOSED | **Bun 运行时迁移**：主分支重新 base，将 Node.js 替换为 Bun 以获得更快 SQLite、原生 TS 执行 | [#675](https://github.com/qwibitai/nanoclaw/pull/675) |
| #408 | ✅ CLOSED | **中文文档同步**：README_zh.md 与 README.md 保持一致 | [#408](https://github.com/qwibitai/nanoclaw/pull/408) |
| #327 | ✅ CLOSED | **容器代理第三方 API 端点支持**：扩展 secrets allowlist，支持 `ANTHROPIC_BASE_URL` 等变量 | [#327](https://github.com/qwibitai/nanoclaw/pull/327) |
| #673 | ✅ CLOSED (Issue) | **修复 hq-sync 全局 git 配置导致的新文件漏同步问题** | [#673](https://github.com/qwibitai/nanoclaw/issues/673) |
| #603 | ✅ CLOSED (Issue) | **修复移动端网站布局问题** | [#603](https://github.com/qwibitai/nanoclaw/issues/603) |

---

## 4. 社区热点

今日社区讨论热度集中在以下议题：

### 🔥 最热门 Issue

**#384 Nanoclaw needs a skill marketplace/registry**
- 📊 13 👍 | 8 💬
- 👤 @longregen
- 🔗 https://github.com/qwibitai/nanoclaw/issues/384

**核心诉求**：提出 NanoClaw 应建立技能市场/注册中心，强调项目"小而可审计"的核心设计理念——用户从最小攻击面开始，仅在实际安装技能时扩展功能面。这是项目的核心竞争力点。

---

### 🔥 高热度 PR 讨论

**#670 fix: auto-retry messages when Claude hits an API rate limit**
- 📊 正在开发中
- 👤 @singha1337
- 🔗 https://github.com/qwibitai/nanoclaw/pull/670

**解决什么问题**：当 Claude 触发 API 速率限制时，用户会收到 "You've hit your usage limit" 通知，但原始请求被静默丢弃。PR 正在实现自动重试机制。

---

## 5. Bug 与稳定性

今日报告/处理中的 Bug：

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 高 | #669 | 定时任务在容器运行时间超过 SCHEDULER_POLL_INTERVAL (60s) 时执行两次 | OPEN | ✅ #657 已修复 |
| 🟡 中 | #673 | hq-sync 因全局 git 配置跳过新未跟踪文件 | CLOSED | ✅ 已修复 |
| 🟡 中 | #670 | Claude API 速率限制时消息被静默丢弃 | OPEN | ✅ PR #670 在处理 |
| 🟢 低 | #603 | 移动端网站布局错误 | CLOSED | ✅ 已修复 |

---

## 6. 功能请求与路线图信号

今日新增功能请求及趋势分析：

| Issue/PR | 功能 | 分析 |
|---|---|---|
| **#678** | 发送者白名单触发控制和消息过滤 | 来自 @akshan-main，针对群组场景的 API 消耗控制，已有对应 PR #679 |
| **#664** | Nanoclaw vs Claude Code 区别澄清 | 用户想了解项目差异化特性，涉及 Agents.md、SOUL.md、TOOL.md 等 agentic 能力 |
| **#384** | 技能 marketplace/registry | 长期功能愿景，13赞表明社区需求强烈 |
| **#663** | 支持可配置的 Claude 以外运行时 | 已实现多 runtime 支持（codex/gemini/opencode） |
| **#549** | Avian LLM provider 集成 | 正在开发，提供 DeepSeek V3.2、Kimi K2.5 等模型 |
| **#545** | Composio 技能（100+ MCP 集成） | 正在开发，HuggingFace/GitHub/Gmail/Slack 等 |
| **#671** | 飞书/ Lark 渠道技能 | 正在开发，WebSocket 长连接模式 |

**路线图信号**：项目正在向**多运行时、多渠道、多模型**方向演进，Bun 迁移和模块化技能体系是近期重点。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的关键信息：

| 场景 | 痛点 | 来源 |
|---|---|---|
| **群组使用** | 任何成员都能触发 agent 导致 API token 过度消耗，缺乏权限控制 | #678 |
| **定时任务** | 任务重复执行导致用户收到重复消息/邮件 | #669 |
| **API 限制** | 速率限制时请求被静默丢弃，用户体验不佳 | #670 |
| **文档需求** | 用户希望了解 Nanoclaw 与 Claude Code 的本质区别 | #664 |
| **移动端体验** | 网站在移动设备上布局错乱 | #603 |

**积极反馈**：项目的小型化安全理念（攻击面随技能扩展）获得社区认可（#384 13赞）。

---

## 8. 待处理积压

以下重要 Issue 长期未响应或需要维护者关注：

| Issue | 积压时长 | 优先级 | 摘要 |
|---|---|---|---|
| **#384** | ~10 天 | ⭐ 高 | Skill marketplace/registry 需求，社区关注度高 |
| **#664** | 1 天 | 🟡 中 | 差异化说明需求，需文档响应 |
| **#678** | 1 天 | ⭐ 高 | 发送者白名单功能，已关联 PR #679 |
| **#669** | 1 天 | 🔴 高 | 定时任务重复执行，已被 #657 修复但 Issue 仍 OPEN |
| **#545** | ~6 天 | 🟡 中 | Composio MCP 集成，PR 等待合并 |
| **#549** | ~5 天 | 🟡 中 | Avian LLM 集成，PR 等待合并 |

---

**日报结束**

*数据来源：GitHub NanoClaw (qwibitai/nanoclaw) | 统计周期：2026-03-04 24小时内*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**2026-03-04** | GitHub: nearai/ironclaw

---

## 1. 今日速览

过去24小时，IronClaw 项目保持高度活跃：共处理 **12 条 Issues**（8 新开/活跃，4 关闭）和 **34 条 PRs**（13 已合并/关闭）。项目在安全修复、测试基础设施现代化两个方向取得显著进展——**4 个 Bug 相关 Issues 已被修复并合并**，同时 **v0.14.0 版本已就绪待发布**。代码覆盖率和安全防护能力均在提升中。

---

## 2. 版本发布

### ✅ v0.14.0 已就绪（待发布）

| 项目 | 变更 |
|------|------|
| ironclaw | 0.13.1 → **0.14.0** |

⚠️ **破坏性变更**：存在 API breaking changes（详见 PR #480）

> 📎 PR #480: [chore: release v0.14.0](https://github.com/nearai/ironclaw/pull/480)

---

## 3. 项目进展

### 已合并/关闭的关键 PRs

| PR | 描述 | 状态 |
|----|------|------|
| **#511** | ci: add code coverage with cargo-llvm-cov and Codecov | ✅ CLOSED |
| **#508** | fix(web): mobile browser bar obscures chat input (`100vh` → `100dvh`) | ✅ CLOSED |
| **#500** | fix(web): assign unique thread_id to manual routine triggers | ✅ CLOSED |
| **#501** | fix(web): refresh routine UI after Run Now trigger | ✅ CLOSED |
| **#502** | fix(skills): use slug for skill download URL from ClawHub | ✅ CLOSED |
| **#503** | fix(workspace): thread document path through search results | ✅ CLOSED |
| **#506** | feat: remove the okta tool | ✅ CLOSED |

### 正在进行的重要工作

| PR | 范围 | 描述 |
|----|------|------|
| **#512** | benchmark, testing | [feat] add agent benchmark system with E2E test hardening (XL) |
| **#510** | security | [fix] replace regex HTML sanitizer with DOMPurify to prevent XSS (S) |
| **#507** | testing | Improve test infrastructure: StubChannel, gateway helpers, security tests |
| **#469** | llm | [fix] treat OpenRouter free tier models as zero cost |
| **#498** | wasm | [fix] coerce string parameters to schema-declared types |
| **#478** | wasm | [fix] use per-engine cache dirs on Windows to avoid file lock error |
| **#465** | agent | [feat] add conversation history loading and message batching |
| **#451** | llm | Add Venice.ai provider |
| **#403** | whatsapp | webhook verification, mark_as_read, deduplication and reliable ACK |

> 📎 更多待合并 PRs: https://github.com/nearai/ironclaw/pulls?q=is%3Aopen+sort%3Aupdated-desc

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 标题 | 评论数 | 状态 |
|-------|------|--------|------|
| **#467** | Trajectory benchmark system for agent quality evaluation | 2 | OPEN |
| **#410** | Cropped UI - Tablet | 1 | OPEN |
| **#459** | Missing docker images ? "ironclaw-worker:latest" | 1 | OPEN |

**分析**：
- **#467** 引发关注：社区提议构建一个真实场景的 Agent 质量评估基准系统，采用双层评估标准（硬断言 + LLM-as-judge），这是提升 Agent 可信度的重要基础设施需求
- UI 适配问题（#410）和 Docker 镜像缺失（#459）各收到 1 条评论，说明这两个问题可能影响部分用户正常使用

> 📎 #467: https://github.com/nearai/ironclaw/issues/467

---

## 5. Bug 与稳定性

### 今日报告/修复的 Bugs

| Issue/PR | 严重程度 | 描述 | 状态 |
|----------|----------|------|------|
| **#484** | **Medium** | [bug] manually triggered routine delivers output to wrong thread | ✅ Fixed (PR #500) |
| **#483** | **Medium** | [bug] routine "Run Now" button provides no UI feedback | ✅ Fixed (PR #501) |
| **#482** | **Medium** | [bug] skill install creates ghost DB record on download failure | ✅ Fixed (PR #502) |
| **#481** | **Medium** | [bug] memory search results link to chunk UUID instead of source file path | ✅ Fixed (PR #503) |
| **#510** | **High** (Security) | XSS vulnerability: replace regex HTML sanitizer with DOMPurify | 🔄 OPEN |
| **#494** | **Medium** | Embedding dimension error (768 vs 1536 mismatch) | 🔄 OPEN |
| **#495** | **Low** | memory hygiene error (AFK 后出现) | 🔄 OPEN |

**关键进展**：
- 4 个 Web/Routine 相关的 Bugs 已在本周期内修复并合并
- **安全修复 #510** 正在审查中：用 DOMPurify 替换可被绕过的正则表达式 HTML  sanitizer，解决 Prompt 注入导致的 XSS 攻击向量

> 📎 安全修复 PR #510: https://github.com/nearai/ironclaw/pull/510

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue | 功能 | 背景 |
|-------|------|------|
| **#467** | Trajectory benchmark system | 提议构建 E2E Agent 质量评估框架 |
| **#504** | Google Calendar | 现有集成存在 bug（list 等 API 异常） |
| **#492** | HMAC-SHA256 webhook signature validation for Slack | 扩展 Webhook 路由器的签名验证能力 |
| **#466** | Adopt OpenClaw-inspired testing strategy | 学习 OpenClaw 的三层测试架构 |

### 已在开发中的重大功能

| PR | 功能 | 预计影响 |
|----|------|----------|
| **#512** | Agent benchmark system | Agent 质量评估标准化 |
| **#451** | Venice.ai provider | 新 LLM Provider 支持 |
| **#291** | Anthropic prompt caching | 成本优化 |
| **#321** | NPA psychographic profiling | 个性化交互 |
| **#403** | WhatsApp webhook verification & reliable ACK | 消息可靠性 |

---

## 7. 用户反馈摘要

### 真实痛点与场景

| 来源 | 反馈内容 |
|------|----------|
| **#459** 用户 JeremyHutchings | Docker 镜像 `ironclaw-worker:latest` 缺失导致 Job 重启失败，影响生产环境 |
| **#494** 用户 PolBlanco | Embedding 维度配置错误（768 vs 1536），libSQL 存储失败，需要 PostgreSQL 或手动配置 |
| **#495** 用户 PolBlanco | 长时间 AFK 后出现 memory hygiene 错误 |
| **#410** 用户 henrypark133 | 平板设备上 UI 被裁剪，影响移动端体验 |
| **#504** 用户 henrypark133 | Google Calendar 在 wasm tools 中存在 API 规范缺失或参数传递问题 |

### 满意度信号

- **Routine 功能修复**（#483, #484, #500, #501）表明团队响应迅速，连续合并 4 个相关修复
- **代码覆盖率 CI**（#511）的加入提升了项目质量保障信心

---

## 8. 待处理积压

### 长期未响应的 Issues（超过 7 天）

| Issue | 标题 | 创建时间 | 状态 |
|-------|------|----------|------|
| **#410** | Cropped UI - Tablet | 2026-02-28 | OPEN |
| **#494** | Embedding dimension error | 2026-03-03 | OPEN |

### 建议关注

1. **#410** — 平板 UI 裁剪问题（6 天未解决），可能影响移动端用户
2. **#494** — Embedding 维度错误导致存储失败，需要明确配置指引或自动检测机制

---

**日报编制说明**：本日报基于 2026-03-04 GitHub 数据自动生成，涵盖过去 24 小时的 Issues/PRs 活动。如有遗漏或需调整，请联系项目维护者。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-04)

## 今日速览

过去24小时内，TinyClaw 项目保持较高活跃度，共产生 3 条新 Issue 和 4 条 PR 更新。版本发布方面连续发布 v0.0.8 和 v0.0.9 两个补丁版本，重点修复了 Telegram 轮询的稳定性问题。当前 PR 队列中有 3 个待合并请求，整体项目处于健康迭代状态，代码提交频率和社区参与度均维持在较高水平。

---

## 版本发布

### v0.0.9
**发布状态**: 已发布 | [Release 链接](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.9)

**更新内容**:
- **修复**: 防止笔记本电脑睡眠后 Telegram 轮询重启进入无限循环
- **根因分析**:
  1. `stopPolling()` 未被 await，导致旧轮询循环在重启后仍然存活并与新循环竞争，引发级联 409 冲突

**影响范围**: Telegram 客户端用户，特别是使用笔记本电脑进行开发且有睡眠/唤醒场景的用户

**迁移注意事项**: 无破坏性变更，需重启服务以应用更新

---

### v0.0.8
**发布状态**: 已发布 | [Release 链接](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.8)

**更新内容**:
- **功能**: 为 Discord、Telegram、WhatsApp 频道客户端添加 `/restart` 聊天内命令
- **功能**: 注册 `tinyclaw-admin` skill
- **修复**: 为 Telegram 客户端添加轮询看门狗和恢复机制

**影响范围**: 所有多频道用户，提升运维便利性

---

## 项目进展

### 已合并/关闭 PR

| PR # | 标题 | 状态 | 贡献者 | 推进内容 |
|------|------|------|--------|----------|
| #153 | feat: support team member management and cleanup team references on agent removal | **CLOSED** | @mokizzz | 添加团队成员管理命令（`team add-agent`/`team remove-agent`），修复删除代理时的陈旧团队引用问题（包括组长重新分配或空团队删除） |

### 待合并 PR (3)

| PR # | 标题 | 贡献者 | 预估影响 |
|------|------|--------|----------|
| #159 | feat: add Cursor CLI as AI provider | @elo-mate | 新增第四个 AI 提供商（Cursor CLI），已有 Cursor Pro/Business 订阅的用户可直接使用 |
| #155 | fix(telegram): auto-reconnect polling after transient failures | @stakeswky | 修复 Telegram 机器人因临时网络故障（ECONNRESET/ETIMEDOUT）导致轮询断开后无法自动重连的问题 |
| #154 | fix: resolve issue #19 security gaps and logging discrepancies | @stakeswky | 修复安全漏洞和日志差异问题：移除日志中的明文消息内容片段、保持 Chromium 沙盒默认启用、允许通过环境变量显式禁用沙盒 |

---

## 社区热点

### Issue #158: implement clawrouter
**状态**: OPEN | [链接](https://github.com/TinyAGI/tinyclaw/issues/158)

**摘要**: 请求实现 ClawRouter 功能，链接指向外部项目 https://github.com/BlockRunAI/ClawRouter

**热度评估**: ⭐⭐ (新开Issue暂无评论，需进一步观察)

---

### Issue #157: implement github copilot cli agents
**状态**: OPEN | [链接](https://github.com/TinyAGI/tinyclaw/issues/157)

**摘要**: 请求通过 ghcp SDK 实现 GitHub Copilot CLI 代理，以利用 GitHub Copilot 订阅获取所有提供商支持

**热度评估**: ⭐⭐⭐ (涉及热门 AI 编程助手集成，社区关注度高)

---

## Bug 与稳定性

### Issue #156: tinyclaw start — all channel/queue processes exit immediately on macOS
**状态**: OPEN | [链接](https://github.com/TinyAGI/tinyclaw/issues/156)

**严重程度**: 🟡 中等

**问题描述**: 
- 在 macOS (zsh shell) 环境下执行 `tinyclaw start` 后，所有进程（Telegram、Queue Processor、Heartbeat）在启动后几秒内显示 "Not Running"
- tmux 会话本身保持活跃，但面板返回 shell 提示符，无错误输出
- 重启无法解决问题

**用户场景**: macOS zsh 用户首次部署

**已有修复**: 暂无对应 PR

---

## 功能请求与路线图信号

### 高优先级功能信号

| Issue/PR | 功能描述 | 关联度 |
|-----------|----------|--------|
| #159 PR | Cursor CLI AI 提供商 | v0.1.0 路线图候选 |
| #157 Issue | GitHub Copilot CLI 集成 | v0.1.0 路线图候选 |
| #158 Issue | ClawRouter 集成 | 扩展生态 |
| #155 PR | Telegram 自动重连 | 稳定性增强，预计下一版本合并 |

**路线图信号分析**: 下一版本可能聚焦于多 AI 提供商扩展（Cursor、Copilot）和 Telegram 稳定性增强。

---

## 用户反馈摘要

### 核心痛点提取

1. **macOS 部署兼容性**: Issue #156 反映出 macOS zsh 环境下的进程启动问题，影响新用户体验
2. **Telegram 连接稳定性**: v0.0.9 和 #155 PR 表明轮询重启/重连是持续关注的稳定性问题
3. **AI 提供商需求**: 社区对多 AI 提供商支持有明确诉求（Cursor、Copilot）

### 正面反馈

- v0.0.8 的 `/restart` 命令和看门狗机制获正面评价，提升运维效率
- 团队管理功能（#153）的完善受到认可

---

## 待处理积压

| Issue # | 标题 | 状态 | 积压时长 | 备注 |
|---------|------|------|----------|------|
| #156 | macOS zsh 进程立即退出 | OPEN | 1天 | 需维护者关注，暂无响应 |
| #157 | GitHub Copilot CLI | OPEN | 1天 | 新Issue，评估中 |
| #158 | ClawRouter 实现 | OPEN | 1天 | 新Issue，需确认与现有功能关系 |

**提醒**: #156 涉及用户无法正常启动服务，建议优先处理以改善新用户 onboarding 体验。

---

*报告生成时间: 2026-03-04 | 数据来源: GitHub TinyClaw Repository*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*