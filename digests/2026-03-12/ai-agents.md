# OpenClaw 生态日报 2026-03-12

> Issues: 500 | PRs: 500 | 覆盖项目: 10 个 | 生成时间: 2026-03-12 02:26 UTC

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

# OpenClaw 项目动态日报 | 2026-03-12

## 1. 今日速览

过去24小时内，OpenClaw 项目保持高度活跃状态。GitHub 数据显示共产生 **500 条 Issues 更新**（新开/活跃 420 条，关闭 80 条）以及 **500 条 PR 更新**（待合并 332 条，已合并/关闭 168 条）。值得注意的是，**Kimi K2.5 模型相关的配置验证问题** 成为今日社区讨论焦点，多个用户报告了 `requiresOpenAiAnthropicToolPayload` 键值不被识别的回归问题。项目整体向前推进明显，但存在若干影响用户体验的回归问题需要紧急修复。

---

## 2. 版本发布

**无新版本发布**

过去24小时内未检测到新的 Release 版本。

---

## 3. 项目进展

以下是今日值得关注的重要 PR 进展：

### 已合并/关闭 PRs

| PR | 标题 | 状态 |
|---|---|---|
| [#40470](https://github.com/openclaw/openclaw/pull/40470) | fix(telegram): preserve media in group history when bot not mentioned | CLOSED |
| [#43319](https://github.com/openclaw/openclaw/pull/43319) | feat: add hutmini-lobby skill for Lobsterr integration | CLOSED |

### 正在推进的重要功能 PRs

| PR | 标题 | 领域 |
|---|---|---|
| [#43589](https://github.com/openclaw/openclaw/pull/43589) | fix: file watchers miss directories created after startup (chokidar glob) | Agents |
| [#43497](https://github.com/openclaw/openclaw/pull/43497) | fix(agents): recover subagent runs after gateway restart | Agents |
| [#42512](https://github.com/openclaw/openclaw/pull/42512) | fix(whatsapp): repair web auto-TTS delivery | WhatsApp |
| [#41345](https://github.com/openclaw/openclaw/pull/41345) | Backup: add folder-backed encrypted snapshot flow | CLI |
| [#43016](https://github.com/openclaw/openclaw/pull/43016) | feat(HaromonyApp): add HarmonyOS node app | App |
| [#41640](https://github.com/openclaw/openclaw/pull/41640) | feat(auth): add `models auth clean` command | Auth |

**关键进展解读**：项目正在加强多平台支持（HarmonyOS）、数据备份能力、以及 agent 恢复机制，这些功能将显著提升生产环境稳定性。

---

## 4. 社区热点

以下 Issues 今日引发最多讨论（按评论数排序）：

### 热门 Issues TOP 5

| Issue | 评论数 | 标题 | 状态 |
|---|---|---|---|
| [#32828](https://github.com/openclaw/openclaw/issues/32828) | 51 | [Bug]: False 'API rate limit reached' on all models despite APIs being fully functional | CLOSED |
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | 44 | Add DingTalk as a first-install channel option | OPEN |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 16 | [enhancement] Request: Prebuilt Android APK releases | OPEN |
| [#9899](https://github.com/openclaw/openclaw/issues/9899) | 15 | [bug] Include day of week in system prompt date/time injection | OPEN |
| [#41445](https://github.com/openclaw/openclaw/issues/41445) | 15 | [Bug]: Kimi K2.5 config validation fails - unrecognized key 'requiresOpenAiAnthropicToolPayload' | CLOSED |

### 热点分析

1. **#32828 API 误报 Rate Limit（已关闭）**：这是一个影响广泛的问题，用户报告 OpenClaw 错误地显示所有模型都达到 API 速率限制，尽管底层 API 完全正常运作。该 Issue 获得 51 条评论和 7 个点赞，说明这是核心功能缺陷。

2. **#26534 DingTalk 首次安装支持**：用户强烈希望在首次设置向导中直接看到 DingTalk 渠道选项。虽然 DingTalk 频道支持已实现，但未在首次安装流程中呈现，导致用户体验断层。

3. **#41445 Kimi K2.5 配置验证问题**：这是今日最热门的回归问题之一，多个用户（#41690, #40911）报告相同错误，导致 Kimi 模型无法正常配置。

---

## 5. Bug 与稳定性

### 严重 Bug（影响核心功能）

| Issue | 标题 | 状态 | 关联 PR |
|---|---|---|---|
| [#42270](https://github.com/openclaw/openclaw/issues/42270) | [Bug]: OpenClaw 2026.3.8 regression: empty agent payloads + websocket 1006 closures with local LM Studio backend | OPEN | - |
| [#42883](https://github.com/openclaw/openclaw/issues/42883) | [Bug]: Cron jobs broken after update to 2026.3.8 | OPEN | - |
| [#42579](https://github.com/openclaw/openclaw/issues/42579) | Cron lane self-deadlock: isolated agentTurn jobs never execute with default maxConcurrentRuns | OPEN | - |

### 回归问题（Regressions）

| Issue | 标题 | 状态 |
|---|---|---|
| [#39907](https://github.com/openclaw/openclaw/issues/39907) | [Bug]: 2026.3.7 regression: kimi-coding/k2p5 emits literal exec(...) text instead of structured tool calls | CLOSED |
| [#41690](https://github.com/openclaw/openclaw/issues/41690) | [Bug]: Config validation failed: models.providers.kimi-coding.models.0.compat: Unrecognized key | CLOSED |
| [#40941](https://github.com/openclaw/openclaw/issues/40941) | [Bug]: Custom / Local Provider doesn't show current context length or number of input/output tokens | OPEN |
| [#40911](https://github.com/openclaw/openclaw/issues/40911) | [Bug]: api key config failed with error "Unrecognized key: requiresOpenAiAnthropicToolPayload" | CLOSED |

### 平台/渠道问题

| Issue | 标题 | 平台 |
|---|---|---|
| [#41083](https://github.com/openclaw/openclaw/issues/41083) | [Bug]: request to XAI is always timed out, not working | XAI |
| [#41950](https://github.com/openclaw/openclaw/issues/41950) | [Bug]: No active WhatsApp Web listener | WhatsApp |
| [#5047](https://github.com/openclaw/openclaw/issues/5047) | [Bug]: macOS app 'Browser Control' toggle doesn't start browser relay | macOS |
| [#17745](https://github.com/openclaw/openclaw/issues/17745) | [Bug]: Web dashboard shows "disconnected (1008): unauthorized: gateway token missing" | Web UI |

---

## 6. 功能请求与路线图信号

### 高关注功能请求

| Issue | 标题 | 评论数 | 点赞 | 预计影响 |
|---|---|---|---|---|
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | Add DingTalk as a first-install channel option | 44 | 11 | 渠道体验 |
| [#28744](https://github.com/openclaw/openclaw/issues/28744) | 支持Agent接收并识别图片内容 (视觉能力) | 12 | 0 | 核心能力 |
| [#28930](https://github.com/openclaw/openclaw/issues/28930) | Suggestions for Memory v2: Associative Traversal, Salience Weighting, and Access-Based Forgetting | 10 | 0 | Memory 系统 |
| [#39979](https://github.com/openclaw/openclaw/issues/39979) | [Feature]: Path-scoped RWX permissions for exec and file tools | 6 | 0 | 安全模型 |
| [#25145](https://github.com/openclaw/openclaw/issues/25145) | Feature request: Outbound message approval gate (pre-send hook) | 8 | 1 | 安全控制 |

### 潜在路线图信号

1. **视觉能力支持**（#28744）：用户明确请求在飞书等平台传递图片内容给支持视觉的模型（如 MiniMax-Vision），这与多模态发展趋势一致。

2. **Memory v2 规划**（#28930）：用户提出关于记忆系统的三点改进建议（关联遍历、显著性加权、访问遗忘），显示生产环境对记忆管理的迫切需求。

3. **DingTalk 集成**（#26534）：呼声极高，已有实现但未集成到安装向导，预计下个版本可能纳入。

---

## 7. 用户反馈摘要

### 核心痛点

1. **配置回归问题频发**：多个用户反馈 2026.3.7/2026.3.8 版本升级后出现配置验证失败，尤其是 Kimi 模型相关配置反复出现问题（#41445, #41690, #40911）。用户对"每次升级都可能破坏配置"表示不满。

2. **Cron 任务可靠性**：多个 Issue 报告 Cron 任务在升级后失效（#42883, #42579），用户依赖定时任务进行自动化操作，频繁失效影响生产使用。

3. **调试体验不佳**：用户反映错误信息不够明确，如 #32828 的 rate limit 误报导致用户反复检查 API key 而未找到真正问题。

### 积极反馈

1. **社区活跃度**：尽管存在问题，用户参与度依然很高，Issue 和 PR 数量均达到 500 条，显示项目生态健康。

2. **功能完善**：用户对新增的 HarmonyOS 支持、备份加密等功能表示期待。

---

## 8. 待处理积压

### 长期未解决的重要 Issues

| Issue | 标题 | 创建时间 | 评论 | 状态 |
|---|---|---|---|---|
| [#13938](https://github.com/openclaw/openclaw/issues/13938) | Session context accumulates infinitely until API limits are exceeded | 2026-02-11 | 7 | OPEN |
| [#8367](https://github.com/openclaw/openclaw/issues/8367) | github-copilot/claude-opus-4.5 fails with 400 'model_not_supported' | 2026-02-03 | 10 | OPEN |
| [#8366](https://github.com/openclaw/openclaw/issues/8366) | github-copilot/gpt-5.2-codex fails with 421 Misdirected Request | 2026-02-03 | 9 | OPEN |
| [#10386](https://github.com/openclaw/openclaw/issues/10386) | Workspace/extraDirs skills not discovered in version 2026.2.3-1 | 2026-02-06 | 10 | OPEN |
| [#18282](https://github.com/openclaw/openclaw/issues/18282) | GPT-5.2 reasoning items in session history cause recurring 400 errors | 2026-02-16 | 12 | OPEN |

### 建议关注

- **模型兼容性**：GitHub Copilot 相关的多个模型问题（#8367, #8366）长期未解决，影响特定用户群体
- **技能发现机制**：#10386 报告的工作区/额外目录技能无法被发现的问题持续存在
- **上下文累积**：#13938 报告的会话上下文无限累积问题，存在导致 API 限制超出的风险

---

**报告生成时间**：2026-03-12  
**数据来源**：GitHub OpenClaw Repository

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**报告周期：2026-03-12**

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现**多极分化、快速迭代**的格局。核心项目 OpenClaw 维持最高社区活跃度（日均 500 条 Issues/PR 更新），但正面临频繁回归问题的挑战；多个衍生项目（Zeroclaw、ZeptoClaw、PicoClaw 等）在垂直场景或架构优化上形成差异化竞争力。整体生态正从单一 Agent 框架向**多 Agent 协作、安全加固、多渠道集成**三大方向演进，2026 年上半年成为关键窗口期。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新开/活跃) | PRs (待合并/已合) | 今日 Release | 关键问题 | 健康度评估 |
|------|-------------------|-------------------|---------------|----------|------------|
| **OpenClaw** | 420 / 80 | 332 / 168 | ❌ 无 | Kimi K2.5 回归问题、Cron 失效 | ⚠️ 高活跃但质量波动 |
| **Zeroclaw** | 19 / 30 | 35 / 15 | ✅ v0.1.7-beta.30/28 | GLIBC_2.39 兼容性问题 (S0) | 🔶 快速迭代，兼容性风险 |
| **EasyClaw** | 1 / 0 | 1 / 0 | ✅ v1.6.6 | OpenAI OAuth 登录异常 | ✅ 稳定维护 |
| **LobsterAI** | 11 / 0 | 11 / 7 | ✅ v0.2.3 | 字符串空格 Bug、图片卡死 | 🔶 功能增强期 |
| **ZeptoClaw** | 1 / 0 | 0 / 13 | ✅ v0.7.5, v0.7.6 | 仅 1 个功能请求待处理 | ⭐⭐⭐⭐⭐ 最佳 |
| **NanoBot** | 28 / 25 | 32 / 50 | ❌ 无 | config.json 密钥泄露漏洞 | 🔶 高迭代 |
| **PicoClaw** | 16 / 6 | 62 / 40 | ✅ v0.2.2, nightly | Agent 重构、TUI 安全问题 | 🔶 高速迭代 |
| **NanoClaw** | 10 / 6 | 31 / 8 | ❌ 无 | WhatsApp 流式 flooding | 🔶 迭代中 |
| **IronClaw** | 45 / 0 | 50 / 0 | ✅ v0.18.0 | Telegram/Google Sheets 集成问题 | 🔶 稳健迭代 |
| **TinyClaw** | 3 / 9 | 1 / 6 | ✅ v0.0.10 | Rebranding 过渡期 | 🔶 重构期 |

> **数据说明**：Issues/PR 数量反映过去 24 小时全量活动。健康度综合考量 Issue 积压、Bug 严重程度、版本发布节奏。

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模与影响力

OpenClaw 仍是**生态核心枢纽**，以日均 500 条 Issues/PR 更新远超其他项目，社区规模约为第二梯队（PicoClaw、NanoBot）的 **4-5 倍**。其 Issue 讨论热度（#32828 达 51 条评论）和功能覆盖广度（涵盖 Telegram、WhatsApp、HarmonyOS 等 10+ 渠道）确立了行业参照物的地位。

### 3.2 技术路线差异

| 维度 | OpenClaw | 衍生项目策略 |
|------|-----------|--------------|
| **架构** | 单体应用，多功能集成 | 轻量化（ZeptoClaw）、垂直化（LobsterAI） |
| **分发** | 官方二进制为主 | Docker 优先（NanoClaw、TinyClaw） |
| **迭代** | 大版本高频更新 | 小步快跑、nightly 构建 |
| **安全** | 通用防护 | 针对性加固（ZeptoClaw 文件系统边界） |

### 3.3 相对劣势

- **回归问题频发**：2026.3.7/3.8 版本连续出现配置验证失败，用户对“升级即破坏”表达不满
- **调试体验**：错误信息不够明确（如 rate limit 误报 #32828）
- **积压严重**：#13938（上下文无限累积）、#8367（Copilot 模型兼容性）等长期未解

---

## 4. 共同关注的技术方向

### 4.1 多项目共同需求

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **多 Agent 协作** | PicoClaw (#915), NanoClaw (#987), TinyClaw (#186) | Teams 架构、任务分解、子 Agent 编排 |
| **安全加固** | ZeptoClaw (#324), NanoBot (#1873), IronClaw (#513) | Webhook HMAC 认证、文件系统边界、密钥泄露防护 |
| **多渠道集成** | LobsterAI (QQ/钉钉/企微), PicoClaw (Zalo), IronClaw (Discord) | 扩展 IM 平台覆盖，统一协议适配 |
| **视觉/多模态** | NanoBot (#1892), LobsterAI (#357), IronClaw | 非 Vision 模型兼容、图片读取稳定性 |
| **本地模型支持** | NanoBot (#193), TinyClaw (#111), ZeptoClaw (#316) | Ollama/vLLM 无 Key 认证、云端实例混合部署 |
| **CLI/运维增强** | IronClaw (#933), ZeptoClaw (#306) | channels/skills 子命令、config reset/uninstall |

### 4.2 趋势解读

**安全能力正在从“可选加固”变为“必备基线”**。ZeptoClaw 今日合并的 #324 PR 一次性修复 3 个 P1-Critical 安全问题（Webhook 认证、文件系统 TOCTOU 防护），NanoBot 的 config.json 密钥泄露漏洞引发社区高度关注，IronClaw 也在安全加固上持续投入。**建议所有项目将安全审计纳入 CI 流程**。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心定位 | 目标用户 | 关键技术标签 |
|------|----------|----------|--------------|
| **OpenClaw** | 全功能开源 Agent 框架 | 开发者、全场景用户 | 多渠道、插件化、通用 |
| **ZeptoClaw** | 轻量 CLI 工具 | 运维极客、安全敏感场景 | Rust、零依赖、安全审计 |
| **PicoClaw** | 多模态 Agent + 硬件集成 | 嵌入式、树莓派玩家 | TUI、SOUL.md、事件驱动 |
| **LobsterAI** | 中文 IM 集成 | 国内用户 | 飞书/QQ/钉钉/企微 |
| **IronClaw** | NEAR 生态 Agent | Web3 开发者 | WASM、Registry、Near AI 认证 |
| **TinyClaw** | 个人 AI 助手 | 非技术用户 | TinyOffice Web UI、品牌重塑 |

### 5.2 技术架构关键差异

```
OpenClaw      → Node.js/TypeScript，单体架构
ZeptoClaw     → Rust，性能优先，CLI 交互
PicoClaw      → TypeScript + Rust WASM，模块化
LobsterAI     → Node.js，IM 协议适配层
NanoBot       → Python/TypeScript，多 Provider 路由
NanoClaw      → Docker-first，容器化 Agent
IronClaw      → Rust + WASM，插件市场模式
TinyClaw      → npm workspaces monorepo，SQLite 队列
```

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

| 层级 | 项目 | 特征 |
|------|------|------|
| **第一梯队（生态核心）** | OpenClaw | 日均 500+ Issues/PRs，功能最全，Issue 积压最多 |
| **第二梯队（高速迭代）** | PicoClaw, NanoBot, Zeroclaw, IronClaw | 日均 40-100 条更新，功能快速推进，偶有阻塞性问题 |
| **第三梯队（垂直/小众）** | LobsterAI, ZeptoClaw, NanoClaw, TinyClaw, EasyClaw | 特定场景深耕，Issue 量级较低但解决效率高 |

### 6.2 成熟度评估

**质量巩固阶段**：
- **ZeptoClaw**：仅 1 个活跃 Issue，P1 级 Bug 全部修复，项目健康度满分
- **EasyClaw**：功能稳定，处于维护模式
- **IronClaw**：版本节奏稳健，v0.18.0 修复 Registry manifest 关键问题

**快速迭代阶段**：
- **PicoClaw**：Agent 重构、SOUL.md 定义、事件驱动循环，社区讨论热烈
- **NanoBot**：多实例支持、Provider 扩展、安全漏洞修复并行
- **OpenClaw**：功能膨胀但回归问题频发，处于“功能 vs 质量”拉锯期

---

## 7. 值得关注的趋势信号

### 7.1 社区反馈提炼

| 趋势 | 信号强度 | 证据 |
|------|----------|------|
| **Agent 2.0 架构转型** | 🔴 强 | PicoClaw #1218 (SOUL.md/AGENT.md 定义)、#1316 (事件驱动循环) 引发热议，标志从“工具执行器”向“有人格 AI 助手”演进 |
| **安全成为第一优先级** | 🔴 强 | ZeptoClaw 一次性修复 3 个 P1-Critical；NanoBot 密钥泄露 Issue 高热度；多项目并行加固 |
| **多 Agent 协作落地** | 🟠 中 | PicoClaw Teams (#915)、NanoClaw Session 轮转 (#987)、TinyClaw Monorepo (#186) 均已合并或开发中 |
| **中文生态独立演进** | 🟠 中 | LobsterAI 深耕 QQ/钉钉/企微；IronClaw 遭遇中文 Issue 抱怨；NanoBot 中文文档诉求 |
| **边缘/轻量化需求** | 🟡 弱 | ZeptoClaw CLI 交互增强；PicoClaw Raspberry Pi 定位；TinyClaw 移除 tmux 依赖 |

### 7.2 对 AI 智能体开发者的建议

1. **安全审计应前置**：ZeptoClaw 的文件系统边界防护、IronClaw 的 HMAC webhook 认证代表行业最佳实践，建议在架构设计阶段即纳入。
2. **关注 Agent 抽象标准**：PicoClaw 提出的 SOUL.md/AGENT.md 可能是未来个性化 Agent 配置的行业参考，关注其演进。
3. **多 Agent 协作是下一个战场**：已有 3+ 项目在 Teams/协作架构上发力，2026 下半年可能成为标配能力。
4. **本地模型支持加速**：Ollama/vLLM 无 Key 认证需求强烈，社区正在补齐“纯本地部署”最后一块拼图。

---

**报告生成时间：2026-03-12**  
**分析师：MiniMax-M2.5**

---

## 同赛道项目详细报告

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 | 2026-03-12

## 1. 今日速览

过去 24 小时 Zeroclaw 项目保持高度活跃：共处理 **49 条 Issues**（新开/活跃 19，关闭 30）和 **50 条 PRs**（待合并 35，已合并/关闭 15），同时发布 **2 个 beta 版本**（v0.1.7-beta.30/28）。项目整体呈现快速迭代态势，多项功能增强与缺陷修复并行推进，但需关注 GLIBC 兼容性问题导致的 S0 级运行时故障。

---

## 2. 版本发布

### v0.1.7-beta.30 & v0.1.7-beta.28

**变更摘要**：
- **CI/CD 简化**：用简化版 CI/CD pipeline 替换全部 workflows（#2895）
- **分支模型迁移**：从多分支模型迁移至单一 `master` 分支并更新维护者信息（#2928）
- **Bug 修复**：包含部分缺陷修复（内容被截断）

**迁移注意事项**：
- 分支策略变更：所有贡献需指向 `master` 分支
- 旧有 `main` 分支仍存在远程分支，可能造成混淆（见 Issue #3061）

**相关链接**：
- Release: [v0.1.7-beta.30](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.7-beta.30)
- Release: [v0.1.7-beta.28](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.7-beta.28)

---

## 3. 项目进展

### 今日合并/关闭的重要 PRs

| PR # | 标题 | 状态 | 意义 |
|------|------|------|------|
| #3191 | fix(config): accept open-ai-* aliases for wire_api config | **CLOSED** | 修复配置解析器与文档不一致问题，统一接受 `openai-*` 和 `open-ai-*` 格式 |
| #3106 | fix(cli): honor config default_temperature in agent command | **OPEN** | 修复 agent 命令忽略配置文件 default_temperature 的问题 |
| #3257 | fix(release): lower GNU Linux build runner baseline | **OPEN** | 解决 GLIBC 版本兼容性问题，降低官方构建的 GLIBC 基线 |
| #3255 | fix(config): encrypt channel secrets during save | **OPEN** | 修复配置文件保存时明文存储渠道凭证的安全问题 |
| #3256 | fix(config): decrypt channel secrets during load | **OPEN** | 修复加载配置时不解密渠道密钥的功能缺陷 |

**推进的功能领域**：
- **配置安全**：加密/解密渠道密钥的完整生命周期修复
- **多渠道支持**：Email subject 可配置、Feishu/Lark 功能别名
- **CI/CD 优化**：简化构建流程，降低 GLIBC 基线
- **用户体验**：Web UI 消息复制按钮、多行输入框

---

## 4. 社区热点

### 讨论最活跃的 Issues

**🔴 高热度 - #3070**：[bug] version `GLIBC_2.39' not found
- **评论**: 9 | **👍**: 2 | **严重性**: S0 - data loss / security risk
- **问题**：运行时依赖 GLIBC 2.39，但部分用户系统（如 Ubuntu 20.04）仅支持 2.31
- **相关 PR**：#3257 正在修复构建基线问题
- [Issue 链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3070)

**🟡 中热度 - #2929**：[bug] Quick clarification: `master` vs `main`
- **评论**: 6 | **👍**: 2 | **状态**: CLOSED
- **问题**：分支策略不清晰，文档指向 main，但默认分支是 master
- **进展**：#2928 已完成迁移，#3061 正在清理残留 main 分支
- [Issue 链接](https://github.com/zeroclaw-labs/zeroclaw/issues/2929)

**🟢 功能讨论 - #2355**：Granular tool control context-aware allow list
- **评论**: 4 | **状态**: CLOSED
- **需求**：实现细粒度、上下文感知的工具调用控制白名单
- [Issue 链接](https://github.com/zeroclaw-labs/zeroclaw/issues/2355)

**🟢 功能讨论 - #850**：Add the ability to disable reasoning
- **评论**: 4 | **状态**: CLOSED
- **需求**：允许禁用 Ollama 的 thinking/reasoning 输出
- [Issue 链接](https://github.com/zeroclaw-labs/zeroclaw/issues/850)

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

| 严重性 | Issue # | 标题 | 状态 | Fix PR |
|--------|---------|------|------|--------|
| **S0** | #3070 | GLIBC_2.39 not found，运行时崩溃 | OPEN | #3257 (正在修复) |
| **S1** | #3207 | 容器构建在 Rust 1.94 升级后失败 | CLOSED | - |
| **S1** | #2930 | Docker 初始化在 macOS 上报 `Unbound variable` | OPEN | - |
| **S1** | #2735 | provider_api 配置解析器与文档不一致 | CLOSED | #3191 |
| **S1** | #2947 | Docker Web 配置保存返回 HTTP 500 | OPEN | - |
| **S2** | #2494 | channels_config.feishu 无法启动 | OPEN | - |
| **S2** | #2953 | 官方构建缺少 channel-matrix 标志 | OPEN | - |
| **S2** | #3079 | Ollama+Qwen tool-calling 回归：thinking-only 输出 | OPEN | - |
| **S2** | #2529 | Daemon 只处理 SIGINT，忽略 SIGTERM（容器/K8s 部署问题） | CLOSED | - |
| **S3** | #3033 | default_temperature 配置不生效 | OPEN | #3106 (正在修复) |
| **S3** | #3082 | workspace_only + allowed_roots 合同与实际行为不匹配 | OPEN | - |
| **S3** | #3083 | Embedding provider 错误使用 default_provider API key | CLOSED | - |

**稳定性评估**：S0 级 GLIBC 兼容性问题影响官方二进制分发，需优先解决；多渠道配置（Feishu、Matrix）存在运行时故障。

---

## 6. 功能请求与路线图信号

### 新功能需求（潜在纳入下一版本）

| Issue # | 功能请求 | 热度 | 已有相关 PR |
|---------|----------|------|-------------|
| **#3176** | Azure OpenAI provider 支持 | 3 评论, 0 👍 | #3246, #3007 (双 PR 推进) |
| **#3153** | zeroclaw agent 支持 MCP | 3 评论, 1 👍 | - |
| **#3095** | 按需 MCP 工具加载（tool_search） | 2 评论 | - |
| **#3093** | 动态节点发现与能力广告 | 1 评论 | - |
| **#3152** | 网关 WebUI i18n 中文支持 | 2 评论 | - |
| **#3177** | Anthropic provider 视觉支持 | PR 已开 | #3177 (已实现) |

**路线图信号**：
- **Azure OpenAI**：双 PR（#3246, #3007）并行开发，预计下版本正式支持
- **MCP 增强**：agent 端 MCP 支持 + 按需加载是热门需求
- **多平台**：32 位系统支持（#3245）已通过 feature gates 实现

---

## 7. 用户反馈摘要

### 真实用户痛点与场景

1. **部署兼容性焦虑**
   - GLIBC 版本问题导致"官方二进制无法在旧系统运行"（#3070）
   - Docker 容器构建失败影响 CI/CD 流程（#3207）
   - SIGTERM 处理缺失导致 Kubernetes 优雅终止失败（#2529）

2. **配置困惑**
   - 分支策略不清晰导致贡献者困惑（#2929）
   - `provider_api` 配置值格式文档与代码不一致（#2735）
   - `default_temperature` 配置被 CLI 硬编码覆盖（#3033）

3. **渠道功能需求**
   - Feishu 配置无法连接（#2494）
   - Matrix 渠道官方构建缺失标志（#2953）
   - Slack 适配器不支持线程消息（#3084）

4. **安全顾虑**
   - 配置文件明文存储渠道凭证（#3255, #3256）
   - 配对令牌持久化后无法解密（#3254）

**用户满意度迹象**：
- 多项 UI 改进 PR 正在开发（消息复制、多行输入）
- 贡献者文档更新（#3109）
- 社区工具 ByeByeClaw 第三方出现

---

## 8. 待处理积压

### 长期未响应的重要 Issue（>7 天无更新）

| Issue # | 标题 | 创建时间 | 最后更新 | 状态 |
|---------|------|----------|----------|------|
| #2494 | channels_config.feishu 无法启动 | 2026-03-02 | 2026-03-11 | OPEN |
| #2953 | 官方构建缺少 channel-matrix 标志 | 2026-03-07 | 2026-03-11 | OPEN |
| #2960 | 浏览器配对持久化失效 | 2026-03-07 | 2026-03-11 | OPEN |
| #2930 | Docker 初始化在 macOS 报 Unbound variable | 2026-03-06 | 2026-03-11 | OPEN |
| #2947 | Docker Web 配置保存 HTTP 500 | 2026-03-07 | 2026-03-11 | OPEN |

### 建议关注

1. **渠道稳定性**：Feishu 和 Matrix 渠道问题影响中国用户和自托管部署
2. **平台兼容性**：GLIBC 问题和 Docker 构建问题需优先解决以改善分发
3. **待合并 PRs**：35 个 PR 等待合并，需关注审查积压

---

*报告生成时间: 2026-03-12 | 数据来源: GitHub zeroclaw-labs/zeroclaw*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-12)

## 1. 今日速览

过去24小时，EasyClaw 项目保持适度活跃。**新增 1 个 Issue** 报告 OpenAI OAuth 登录问题，**1 个 PR** 待合并修复 macOS Dock 与系统托盘图标显示，**v1.6.6 版本**正式发布并提供 macOS Gatekeeper 绕过方案。项目整体处于稳定维护状态，暂无重大阻塞问题。

---

## 2. 版本发布

### ✅ v1.6.6 发布

**发布详情：** EasyClaw v1.6.6 已正式发布

**更新重点：**
- 提供 macOS Gatekeeper 绕过说明，解决 "EasyClaw 已损坏，无法打开" 的误报问题
- 该问题属于 macOS 安全机制拦截未签名应用，非实际文件损坏

**macOS 解决步骤：**
1. 打开 Terminal（终端）
2. 执行相关命令移除隔离属性（详情见 Release 说明）

**影响范围：** macOS 用户

**迁移注意事项：** 无破坏性变更

**Release 链接：** https://github.com/gaoyangz77/easyclaw/releases

---

## 3. 项目进展

### 待合并 PR

| PR # | 标题 | 作者 | 状态 | 进展说明 |
|------|------|------|------|----------|
| **#15** | fix: app icon in macos dock and system tray | @mylinkedai | OPEN (待合并) | 修复 macOS Dock 和系统托盘中的应用图标显示问题 |

**评估：** 该 PR 专注于 UI 细节修复，预计将提升 macOS 平台用户体验。创建于 2026-03-10，已更新至 2026-03-12，建议优先合并。

---

## 4. 社区热点

### 🔥 Issue #16: OpenAI OAuth 好像有问题

| 项目 | 详情 |
|------|------|
| **状态** | OPEN |
| **作者** | @westisc |
| **创建时间** | 2026-03-11 |
| **评论数** | 1 |
| **点赞数** | 0 |

**问题描述：** 用户报告 OpenAI OAuth 登录功能异常，便携版和安装版均报相同错误（见截图）。

**链接：** https://github.com/gaoyangz77/easyclaw/issues/16

**热点分析：** 该 Issue 是今日唯一活跃 Issue，涉及核心认证功能，可能影响用户正常使用。建议优先排查 OAuth 回调配置或 API 密钥验证逻辑。

---

## 5. Bug 与稳定性

### 报告中的 Bug

| Issue # | 严重程度 | 问题描述 | 状态 | Fix PR |
|---------|----------|----------|------|--------|
| **#16** | **高** | OpenAI OAuth 登录异常，便携版和安装版均报错 | OPEN | 无 |

**评估：**
- 当前无已提交 Fix PR
- 涉及核心功能（认证），建议优先处理
- 需确认是否为 API 变更或配置问题

---

## 6. 功能请求与路线图信号

**今日无新增功能请求。**

从现有 PR #15 来看，下一版本可能包含：
- macOS 平台 UI 细节优化

**建议关注：** 若 Issue #16 确认为 API 变更导致，可能需要发布 hotfix 版本。

---

## 7. 用户反馈摘要

### 用户痛点

**Issue #16 反馈要点：**
- **场景：** OpenAI OAuth 登录
- **问题：** 便携版和安装版均无法正常使用 OAuth 登录
- **环境：** 两种部署版本均复现
- **用户态度：** 明确报告问题，期待修复

**综合评价：** 用户对 OAuth 集成有明确需求，当前登录失败直接影响核心使用场景。

---

## 8. 待处理积压

| 类型 | # | 标题 | 等待时间 | 建议 |
|------|---|------|----------|------|
| **Issue** | #16 | OpenAI OAuth 好像有问题 | 1 天 | 🔴 优先处理 |
| **PR** | #15 | fix: app icon in macos dock and system tray | 2 天 | 🟡 建议合并 |

**提醒维护者：**
1. **Issue #16** 涉及核心认证功能，需尽快定位原因并提供解决方案
2. **PR #15** 准备就绪，可合并后发布更新

---

*报告生成时间：2026-03-12 | 数据来源：GitHub EasyClaw Repository*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**2026-03-12**

---

## 1. 今日速览

过去 24 小时内，LobsterAI 项目保持较高活跃度，共产生 22 条更新（11 条 Issues + 11 条 PRs）。项目发布了 v0.2.3 版本，涵盖 IM 平台集成优化（QQ、钉钉、企微）及主界面附件多选功能。社区反馈活跃，多个功能性 Issue 引发讨论，其中字符串空格插入问题与 bash 执行卡顿问题关注度较高。目前待合并 PR 共 4 个，项目整体处于稳健迭代状态。

---

## 2. 版本发布

### v0.2.3 已发布

**发布时间**：2026-03-11

**更新内容**：

| PR | 作者 | 描述 |
|---|------|------|
| #348 | @liuzhq1986 | 修复 QQ 支持问题 |
| #355 | @liuzhq1986 | 聊天分页功能 |
| #371 | @liuzhq1986 | 主界面附件支持多文件选择 |

**变更类型**：功能增强 + Bug 修复  
**迁移注意事项**：无破坏性变更提示

🔗 [Release 详情](https://github.com/netease-youdao/LobsterAI/releases/tag/v0.2.3)

---

## 3. 项目进展

今日共合并/关闭 **7 个 PR**，主要推进方向如下：

| PR | 状态 | 类型 | 概述 |
|---|------|------|------|
| #383 | ✅ 已关闭 | 企微机器人 | 企微机器人支持 openclaw |
| #381 | ✅ 已关闭 | QQ 支持 | QQ 支持 openclaw 实现 |
| #378 | ✅ 已关闭 | 钉钉集成 | 钉钉支持 openclaw |
| #375 | ✅ 已关闭 | Bug 修复 | 修复 mac 端 node 环境污染问题 |
| #371 | ✅ 已关闭 | 功能增强 | 主界面附件支持多文件选择 |
| #373 | ✅ 已关闭 | Bug 修复 | 添加异步消息处理器防止 IM 平台超时 |
| #372 | ✅ 已关闭 | Bug 修复 | 同 #373 |

**核心推进**：
- IM 平台集成能力显著增强，QQ、钉钉、企微三大平台均已支持 openclaw 协议
- macOS 端环境隔离问题得到修复
- 异步消息处理机制优化，解决长任务超时问题

---

## 4. 社区热点

以下 Issues 今日讨论最为活跃：

| Issue | 标题 | 评论数 | 点赞 | 状态 |
|-------|------|--------|------|------|
| [#344](https://github.com/netease-youdao/LobsterAI/issues/344) | 官方大大们，啥时候修复这个自动在字符串中加空格的问题啊！！急！！ | 5 | 0 | OPEN |
| [#350](https://github.com/netease-youdao/LobsterAI/issues/350) | bash执行太慢了，卡好久 | 3 | 0 | OPEN |
| [#357](https://github.com/netease-youdao/LobsterAI/issues/357) | 每次让ai读取图片都会出现卡死情况 | 3 | 0 | OPEN |
| [#186](https://github.com/netease-youdao/LobsterAI/issues/186) | 记忆能力很差，换了好几个模型都不行，不如原版的openclaw | 2 | 0 | OPEN |
| [#273](https://github.com/netease-youdao/LobsterAI/issues/273) | 能否开发Ubuntu Linux版本？ | 2 | 0 | CLOSED |

**热点分析**：

1. **#344 字符串空格插入 Bug**：用户反馈当字符串包含"中文+数字"时，AI 会强制在中间插入空格，严重影响使用体验。这是今日评论最多的 Issue，已持续多日讨论，用户情绪较为急迫。
   
2. **#350 Bash 执行性能问题**：用户反映本地命令执行瞬间返回，但 LobsterAI 需要等待数分钟。该问题直接影响日常使用效率，是功能性痛点。

3. **#357 图片读取卡死**：用户每次让 AI 读取图片都会出现卡死情况，属于高频复现的稳定性问题。

---

## 5. Bug 与稳定性

### 严重程度：高

| Issue | 描述 | 状态 | 相关 PR |
|-------|------|------|---------|
| [#344](https://github.com/netease-youdao/LobsterAI/issues/344) | 字符串自动插入空格（中文+数字组合必现） | OPEN | - |
| [#357](https://github.com/netease-youdao/LobsterAI/issues/357) | AI 读取图片时卡死 | OPEN | - |
| [#385](https://github.com/netease-youdao/LobsterAI/issues/385) | 对话报错 - 讯飞 codePlaning 无内容回馈 | OPEN | - |

### 严重程度：中

| Issue | 描述 | 状态 | 相关 PR |
|-------|------|------|---------|
| [#350](https://github.com/netease-youdao/LobsterAI/issues/350) | Bash 执行过慢，命令返回后仍等待数分钟 | OPEN | - |
| [#186](https://github.com/netease-youdao/LobsterAI/issues/186) | 记忆能力差，换模型无效 | OPEN | - |

### 已修复

- **mac 端 node 环境污染**：#375 已合并修复

---

## 6. 功能请求与路线图信号

### 高频功能需求

| Issue | 功能 | 关注度 | 状态 |
|-------|------|--------|------|
| [#386](https://github.com/netease-youdao/LobsterAI/issues/386) | Docker 容器部署支持 | 0 👍 | OPEN |
| [#384](https://github.com/netease-youdao/LobsterAI/issues/384) | 更新 Claude Agent SDK 版本以支持 Agent Teams | 0 👍 | OPEN |
| [#379](https://github.com/netease-youdao/LobsterAI/issues/379) | 对话中增加"打开文件所在路径"图标 | 1 👍 | OPEN |
| [#377](https://github.com/netease-youdao/LobsterAI/issues/377) | 添加环境变量配置项（Skill 中读取 API-Key） | 1 👍 | OPEN |
| [#382](https://github.com/netease-youdao/LobsterAI/issues/382) | 更新时保留设置勿重填 | 1 👍 | OPEN |
| [#273](https://github.com/netease-youdao/LobsterAI/issues/273) | Ubuntu Linux 版本 | 已关闭 | CLOSED |

### PR 中的新功能

| PR | 功能 | 预计纳入 |
|----|------|----------|
| [#376](https://github.com/netease-youdao/LobsterAI/pull/376) | 定时任务每小时执行模式 | 近期 |
| [#380](https://github.com/netease-youdao/LobsterAI/pull/380) | Markdown 自定义 URI 协议支持（obsidian://, vscode:// 等） | 近期 |
| [#240](https://github.com/netease-youdao/LobsterAI/pull/240) | Workflow 增强 - 多 Agent 协作 + 专属 soul.md | 待评估 |

**路线图信号**：从 PR 和 Issue 来看，项目下一阶段重点可能在：
1. 定时任务调度能力增强
2. 外部应用集成（Obsidian、VSCode 等）
3. Docker 部署支持

---

## 7. 用户反馈摘要

### 核心痛点

| 类别 | 反馈 | 典型 Issue |
|------|------|------------|
| **准确性** | 中文+数字组合被强制插入空格，严重影响输出准确性 | #344 |
| **性能** | Bash 执行慢，命令返回后仍长时间等待 | #350 |
| **稳定性** | 图片读取必现卡死 | #357 |
| **记忆** | AI 记忆能力差，配置无效 | #186 |
| **易用性** | 更新后设置丢失，需重新填写 | #382 |

### 积极反馈

- 多位贡献者（@liuzhq1986、@mjnhmd、@liugang519）持续提交高质量 PR，IM 平台集成日趋完善
- 社区对 Workflow 增强功能（#240）表现出兴趣

---

## 8. 待处理积压

以下 Issue 超过 48 小时未获官方响应，需关注：

| Issue | 标题 | 创建时间 | 评论数 | 优先级 |
|-------|------|----------|--------|--------|
| [#186](https://github.com/netease-youdao/LobsterAI/issues/186) | 记忆能力很差 | 2026-02-28 | 2 | ⚠️ 长期未解决 |
| [#273](https://github.com/netease-youdao/LobsterAI/issues/273) | Ubuntu Linux 版本 | 2026-03-05 | 2 | 📋 需求 |
| [#344](https://github.com/netease-youdao/LobsterAI/issues/344) | 字符串空格 Bug | 2026-03-09 | 5 | 🔴 高 |
| [#350](https://github.com/netease-youdao/LobsterAI/issues/350) | Bash 执行慢 | 2026-03-09 | 3 | 🔴 高 |

---

*报告生成时间：2026-03-12 | 数据来源：GitHub LobsterAI 仓库*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报

**2026-03-12**

---

## 1. 今日速览

ZeptoClaw 项目在过去24小时内保持**高度活跃**状态，共合并/关闭了 **13个PR** 和 **12个Issue**。项目一口气发布了 **v0.7.5** 和 **v0.7.6** 两个版本，重点聚焦于**安全加固**（webhook认证强化、文件系统边界防护）和 **CLI 交互体验优化**（斜杠命令自动补全）。目前仅剩 **1个活跃 Issue**（#221 功能请求），项目整体处于快速迭代、健康向前的发展态势。

---

## 2. 版本发布

### v0.7.6 ✅

| 变更类型 | 描述 | PR |
|---------|------|-----|
| 🔧 Fix | 去重 Claude 订阅令牌警告，避免重复日志 | [#320](https://github.com/qhkm/zeptoclaw/pull/320) |
| ✨ Feat | CLI 交互模式新增斜杠命令自动补全功能 | [#323](https://github.com/qhkm/zeptoclaw/pull/323) |
| 🔒 Fix | 强化入站 webhook 认证与文件系统边界 | [#324](https://github.com/qhkm/zeptoclaw/pull/324) |

**迁移注意**：无破坏性变更。

---

### v0.7.5 ✅

| 变更类型 | 描述 | PR |
|---------|------|-----|
| ✨ Feat | CLI 新增 `config reset` 命令 | [#306](https://github.com/qhkm/zeptoclaw/pull/306) |
| ✨ Feat | 新增模型提供者兼容性验证机制 | [#311](https://github.com/qhkm/zeptoclaw/pull/311) |
| ✨ Feat | CLI 新增 `zeptoclaw uninstall` 命令 | (PR链接未完整提供) |

---

## 3. 项目进展

### 核心功能 PR（已合并）

| PR | 标题 | 贡献 |
|----|------|------|
| [#324](https://github.com/qhkm/zeptoclaw/pull/324) | **fix: harden inbound auth and filesystem boundaries** | 🔴 高优先级安全修复：强化 webhook 认证、文件系统写入校验、挂载路径验证、TOCTOU 防护、symlink 边界绕过防御；引入 Telegram username 允许列表废弃计划 |
| [#323](https://github.com/qhkm/zeptoclaw/pull/323) | **feat: slash command suggestions in CLI interactive mode** | ✨ 用户体验提升：为 `zeptoclaw agent` 添加斜杠命令自动补全，支持 `/model`, `/persona`, `/help` 等12个命令 |
| [#316](https://github.com/qhkm/zeptoclaw/pull/316) | **feat: Ollama cloud model support (keyless auth)** | ✨ 模型支持扩展：Ollama/vLLM 支持无 API Key 本地运行，云端实例有 Key 时正常认证 |
| [#320](https://github.com/qhkm/zeptoclaw/pull/320) | **fix: deduplicate Claude subscription token warning** | 🔧 修复重复日志问题，使用 `std::sync::Once` 确保警告仅打印一次 |

### 依赖更新 PR（已合并，共8个）

| PR | 依赖项 | 变更 |
|----|--------|------|
| [#302](https://github.com/qhkm/zeptoclaw/pull/302) | actions/upload-artifact | 6.0.0 → 7.0.0 |
| [#303](https://github.com/qhkm/zeptoclaw/pull/303) | actions/download-artifact | 7.0.0 → 8.0.0 |
| [#300](https://github.com/qhkm/zeptoclaw/pull/300) | codecov/codecov-action | 更新至最新 commit |
| [#296](https://github.com/qhkm/zeptoclaw/pull/296) | jsonwebtoken | 9.3.1 → 10.3.0 |
| [#297](https://github.com/qhkm/zeptoclaw/pull/297) | chromiumoxide | 0.9.0 → 0.9.1 |
| [#298](https://github.com/qhkm/zeptoclaw/pull/298) | anyhow | 1.0.101 → 1.0.102 |
| [#301](https://github.com/qhkm/zeptoclaw/pull/301) | chrono | 0.4.43 → 0.4.44 |
| [#304](https://github.com/qhkm/zeptoclaw/pull/304) | rustls | 0.23.36 → 0.23.37 |
| [#299](https://github.com/qhkm/zeptoclaw/pull/299) | @types/node (panel) | 25.2.0 → 25.3.0 |

---

## 4. 社区热点

### 🔥 唯一活跃 Issue

| Issue | 标题 | 热度 |
|-------|------|------|
| [#221](https://github.com/qhkm/zeptoclaw/issues/221) | **feat: Merkle hash-chain audit trail for tool execution** | 🟢 OPEN · 1 评论 |

> **摘要**：添加可防篡改的仅追加审计日志，将每次工具调用、Shell 执行、网络访问通过 SHA-256 链接成链（`prev_hash` 指向上一条），支持完整性验证。
> 
> **诉求分析**：这是一个面向企业级安全合规的功能需求，发布至今已8天（创建于 2026-03-03），是当前唯一的长期开放功能请求，体现了用户对**审计追溯能力**的实际业务需求。

---

## 5. Bug 与稳定性

### 已修复 Bug（按优先级排序）

| Issue | 严重度 | 描述 | 状态 |
|-------|--------|------|------|
| [#317](https://github.com/qhkm/zeptoclaw/issues/317) | P1-Critical | **verify WhatsApp Cloud webhook signatures** - 修复 GHSA-j5hq-p423-c9vw，添加 HMAC-SHA256 签名验证 | ✅ CLOSED |
| [#321](https://github.com/qhkm/zeptoclaw/issues/321) | P1-Critical | **stage Telegram username allowlist deprecation** - 修复用户名变更后的身份漂移风险，引入数字 ID 优先匹配 | ✅ CLOSED |
| [#319](https://github.com/qhkm/zeptoclaw/issues/319) | P1-Critical | **finish filesystem path hardening** - 完成工作区写入路径的 symlink/TOCTOU/硬链接别名风险加固 | ✅ CLOSED |
| [#327/#328](https://github.com/qhkm/zeptoclaw/issues/327) | P2-High | **fix channel setup clearing gaps** - 修复 webhook/Telegram/WhatsApp Cloud 配置初始化时的字段清理问题 | ✅ CLOSED |
| [#329](https://github.com/qhkm/zeptoclaw/issues/329) | P2-High | **harden filesystem tools with dirfd-relative writes** - 使用 dirfd-relative 写入和原子替换，关闭祖先 symlink TOCTOU 窗口 | ✅ CLOSED |
| [#330](https://github.com/qhkm/zeptoclaw/issues/330) | P2-High | **harden unix filesystem reads** - 使用 dirfd-relative openat 替代路径查找读取 | ✅ CLOSED |
| [#325](docs) | P2-High | **surface email header-trust limitation** - 在配置和运行时添加邮件通道允许列表的信任模型警告 | ✅ CLOSED |
| [#326](chore) | P2-High | **re-triage unsupported WhatsApp Bridge advisory** - 澄清 WhatsApp Bridge 无关安全 advisory | ✅ CLOSED |

**稳定性评估**：项目今日集中修复了 **3个 P1-Critical** 级别的安全/稳定性问题，全部通过 PR #324 统一合入，**未发现新报告的未修复 Bug**。

---

## 6. 功能请求与路线图信号

### 新功能需求

| Issue | 类型 | 描述 | 关联 PR | 纳入下一版本可能性 |
|-------|------|------|---------|-------------------|
| [#221](https://github.com/qhkm/zeptoclaw/issues/221) | **feat** | Merkle hash-chain audit trail | 无 | ⭐⭐⭐ 中高（安全合规强需求） |

### 今日已实现功能

- ✅ **Ollama 云模型支持**（#316）—— 已在 v0.7.5/v0.7.6 中发布
- ✅ **CLI 斜杠命令自动补全**（#323）—— 已在 v0.7.6 中发布
- ✅ **config reset / uninstall 命令**（#306）—— 已在 v0.7.5 中发布

**路线图信号**：从 Issue #221 的长期活跃和近期安全类 PR 的高频合并来看，项目当前处于**安全加固冲刺期**，下一版本可能继续围绕**审计日志**和**认证强化**展开。

---

## 7. 用户反馈摘要

从今日 Issue 评论中提炼的关键诉求：

| 场景 | 痛点 | 反馈来源 |
|------|------|----------|
| **安全性** | WhatsApp Bridge 存在未确认的安全 advisory，需要澄清与实际代码的关系 | #326 |
| **身份安全** | Telegram username 允许列表存在用户名回收后身份漂移风险 | #321 |
| **文件系统** | Unix 文件操作依赖路径查找存在 TOCTOU 风险，需要 dirfd-relative 原语 | #329, #330 |
| **Webhook 信任边界** | 入站 webhook 过度信任调用方提供的身份字段 | #318 |
| **邮件信任模型** | IMAP 邮件通道的 From Header 允许列表存在伪造风险，需明确警告 | #325 |

**用户满意之处**：CLI 交互体验改进（斜杠命令补全）、Ollama 本地运行无需dummy key、config/uninstall 命令完善了运维能力。

---

## 8. 待处理积压

| Issue | 类型 | 创建时间 | 状态 | 提醒 |
|-------|------|----------|------|------|
| [#221](https://github.com/qhkm/zeptoclaw/issues/221) | **feat: Merkle hash-chain audit trail** | 2026-03-03 | 🟢 OPEN | 📌 **唯一活跃功能请求**，建议维护者评估优先级 |

> **观察**：项目积压极低，今日关闭了12个 Issue，仅剩1个功能请求待处理。Issue 处理效率非常高。

---

## 📊 关键指标汇总

| 指标 | 数值 |
|------|------|
| 活跃 Issue | 1 |
| 新开/活跃 PR | 0（全部已合并） |
| 版本发布 | 2 (v0.7.5, v0.7.6) |
| P1-Critical Bug 修复 | 3 |
| 依赖更新 | 9 |
| 今日合并 PR 总数 | 13 |

**项目健康度评分**：⭐⭐⭐⭐⭐（5/5）  
**建议**：保持当前迭代节奏，关注 #221 审计日志功能的开发规划。

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期**：2026-03-12  
**项目**：NanoBot (github.com/HKUDS/nanobot)  
**数据周期**：过去 24 小时

---

## 1. 今日速览

项目今日保持高度活跃，共计 53 条 Issues 更新（28 新开/活跃，25 关闭）和 82 条 PR 更新（32 待合并，50 已合并/关闭）。尽管无新版本发布，但社区贡献积极，多项功能增强和 bug 修复已合并入主干，安全问题引发关注，项目整体处于快速迭代中。

---

## 2. 版本发布

**无新版本发布**（过去 24 小时）

---

## 3. 项目进展

今日合并/关闭的重要 PR 如下：

| PR | 状态 | 描述 | 链接 |
|---|---|---|---|
| #1581 | CLOSED | feat: multi-instance support with `--config` parameter — 支持多实例部署，满足多团队/多租户场景 | [链接](https://github.com/HKUDS/nanobot/pull/1581) |
| #1902 | CLOSED | Reconcile upstream changes — 恢复 Qwen 模型支持、添加 CfCrawlConfig/memory 设置、修复布尔参数问题 | [链接](https://github.com/HKUDS/nanobot/pull/1902) |
| #1892 | CLOSED | fix: filter image_url from session history for non-vision models — 解决非视觉模型加载历史时报错问题 | [链接](https://github.com/HKUDS/nanobot/pull/1892) |
| #1845 | CLOSED | fix: detect tilde paths in restrictToWorkspace shell guard — 支持 `~` 路径展开，增强安全性 | [链接](https://github.com/HKUDS/nanobot/pull/1845) |
| #1895 | CLOSED | enhance: improve filesystem & shell tools — 添加分页、模糊匹配、智能输出 | [链接](https://github.com/HKUDS/nanobot/pull/1895) |
| #1891 | CLOSED | fix(cli): add Matrix to channels status display — 修复 Matrix 渠道状态不显示的 bug | [链接](https://github.com/HKUDS/nanobot/pull/1891) |

**待合并的重要 PR**：
- #1901: fix: filter image_url for non-vision models at provider layer（修复 #1892 的遗留问题）
- #1900: feat(telegram): support reply-to-message context（Telegram 回复上下文支持）
- #1707: feat: add zero-npm Web UI channel（轻量级 Web UI 渠道）
- #1680: feat(providers): Mistral Provider + transcription service

---

## 4. 社区热点

以下 Issues 讨论最活跃（按评论数排序）：

| Issue | 状态 | 评论 | 核心诉求 |
|---|---|---|---|
| #2 | CLOSED | 19 | 强烈请求支持 Z.AI (Zhipu AI) API 与 GLM-4.x/4.7 系列模型native集成 |
| #193 | OPEN | 13 | 用户明确询问是否支持 Ollama API（当前仅支持 vLLM） |
| #855 | OPEN | 9 | 用户分享本地LmStudio部署经验，反馈 8B/4B 模型性能不佳 |
| #25 | CLOSED | 9 | 要求添加 Groq/Custom Provider 支持，社区反馈 API Key 报错 |
| #1873 | OPEN | 8 | **安全漏洞**：config.json 可被 exec() 访问并泄露密钥 |
| #1617 | CLOSED | 8 | 中文文档缺失，社区质疑"显得你了" |
| #123 | CLOSED | 7 | 功能请求：添加 Discord 渠道集成 |

**分析**：Zhipu AI (GLM) 支持是长期诉求，已关闭但可能已实现；Ollama 本地部署需求旺盛；安全漏洞 #1873 引发关注，需优先处理。

---

## 5. Bug 与稳定性

按严重程度排列的 Bug 报告：

| Issue | 严重程度 | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| #1873 | **高** | 安全漏洞：可经 exec() 访问并泄露 config.json 密钥 | OPEN | — |
| #1557 | **高** | 飞书 WebSocket 报错 "This event loop is already running" | CLOSED | — |
| #1300 | **中** | Matrix 渠道启动失败，报错信息不明确 | OPEN | — |
| #1879 | **中** | WhatsApp 渠道无法生成 QRcode | OPEN | — |
| #842 | **中** | 升级到 0.1.4 后 OpenRouter 认证失败 (401) | OPEN | — |
| #1157 | **中** | OpenRouter + StepFun 模型报 400 错误 | OPEN | — |
| #1894 | **中** | get_history slice 逻辑 bug：max_messages=0 时返回全量历史 | OPEN | #1894 |
| #1630 | **低** | skill (weather/skill-creator) 不可用 | OPEN | — |
| #1833 | **低** | 偶发 SIGTERM 退出，无明确原因 | OPEN | — |

---

## 6. 功能请求与路线图信号

用户高频功能需求（结合已有 PR 判断可能被纳入）：

| 需求 | 热度 | 相关 PR | 纳入可能性 |
|---|---|---|---|
| **Ollama API 支持** | 高 | #193 (讨论中) | 中（需社区贡献） |
| **Discord 渠道** | 中 | #123 (已关闭，可能已实现) | 高 |
| **微信 (WeChat) 支持** | 中 | #1819 | 低（暂无 PR） |
| **语音对话 (输入/输出)** | 中 | #1106 | 低（暂无 PR） |
| **Telegram 回复上下文** | 中 | #1900 (OPEN) | 高 |
| **Web UI 渠道** | 中 | #1707 (OPEN) | 高 |
| **多实例部署** | 中 | #1581 (CLOSED) | 已实现 |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的关键痛点与场景：

1. **本地部署困难**：用户反映本地使用 LmStudio 时 8B/4B 模型性能差，配置复杂（#855）
2. **非 Vision 模型兼容性**：切换到非视觉模型时历史记录包含 image_url 导致报错（#1892 修复中）
3. **文档缺失**：中文文档需求强烈，被质疑"显得你了"（#1617）
4. **渠道稳定性**：飞书、Matrix、WhatsApp 渠道均有问题反馈
5. **安全性担忧**：config.json 密钥泄露风险引发讨论（#1873）
6. **版本升级破坏**：0.1.3 → 0.1.4 升级导致 OpenRouter 配置失效（#842）

---

## 8. 待处理积压

以下长期未响应的 Issues/PR 需维护者关注：

| Issue/PR | 创建时间 | 描述 | 状态 |
|---|---|---|---|
| #193 | 2026-02-06 | Ollama API 支持（13条评论，无官方响应） | OPEN |
| #36 | 2026-02-03 | 不支持本地部署的 LLM 服务商（api_base 未正确处理 openai） | CLOSED |
| #45 | 2026-02-03 | local-vllm 配置报错 "No API key configured" | OPEN |
| #91 | 2026-02-04 | 渠道支持飞书/QQ/钉钉（3👍，无进展） | CLOSED |
| #126 | 2026-02-05 | GitHub Actions 构建 Docker 镜像（OPEN 1个月+） | OPEN |

---

*报告生成时间：2026-03-12 | 数据来源：GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 - 2026-03-12

## 1. 今日速览

PicoClaw 项目今日保持高度活跃状态。**24小时内处理了 22 条 Issues（16新开/活跃，6关闭）和 102 条 PRs（62待合并，40已合并/关闭）**，显示出强劲的开发动力。正式版 **v0.2.2** 发布，包含配置和语音转录相关改进；同步推送了 **v0.2.2-nightly** 每日构建版本。社区围绕 Agent 重构（SOUL.md/AGENT.md 定义、事件驱动循环）展开热议，多个 bugfix PR 已就位等待合并，整体项目健康度良好。

---

## 2. 版本发布

### ✅ 正式版本：v0.2.2

| 项目 | 内容 |
|------|------|
| 版本 | v0.2.2 |
| 发布时间 | 2026-03-12 |
| GitHub 链接 | https://github.com/sipeed/picoclaw/releases/tag/v0.2.2 |

**Changelog 亮点**：
- **#1363** - 添加 `exec allow_remote` 配置支持（Web 设置）
- **#1214** - 合并语音音频转录功能（echo-voice-audio-transcription）
- 其他多项配置与后端优化

**迁移注意事项**：无破坏性变更，为常规迭代版本。

---

### ✅ 夜间构建：v0.2.2-nightly.20260312.6612ca09

| 项目 | 内容 |
|------|------|
| 版本 | v0.2.2-nightly.20260312.6612ca09 |
| GitHub 链接 | https://github.com/sipeed/picoclaw/releases/tag/v0.2.2-nightly.20260312.6612ca09 |

**Changelog 亮点**：
- **#1370** - Matrix 频道支持富文本消息
- **#1317** - 新增 LongCat 模型提供商支持
- **Bugfix** - Agent 模式下 MCP 初始化修复

⚠️ **注意**：Nightly 构建可能不稳定，生产环境建议使用正式版 v0.2.2。

---

## 3. 项目进展

### 合并/关闭的重要 PRs

| PR | 标题 | 状态 | 贡献者 | 意义 |
|----|------|------|--------|------|
| **#915** | Feat/team - 多 Agent Teams 架构 | ✅ CLOSED | @lppp04808 | 实现团队协作式多 Agent 管道，支持协调者分解复杂任务并委托子 Agent |
| **#1388** | 移除过时的 TOOLS.md 引用 | ✅ CLOSED | @mahendrateja95 | 清理文档一致性，统一工具描述方式 |
| **#1056** | read_file 工具安全防护 | ✅ CLOSED | @XYDT-ChenBo | 修复 #1049，加强文件系统访问安全 |
| **#956** | promptcachekey 修复 | ✅ CLOSED | @Alexandersfg4 | 修复非 OpenAI 模型的 prompt 缓存问题 |
| **#1355** | 修复 TOOLS.md 引导文件 | ✅ CLOSED | @mahendrateja95 | 确保 Agent 正确加载 TOOLS.md |

### 推进中的重要功能 PRs

| PR | 标题 | 状态 | 亮点 |
|----|------|------|------|
| **#976** | feat: agent team | 🟢 OPEN | 多 Agent 团队协作架构（#915 的后续） |
| **#1351** | feat: add Zalo channel | 🟢 OPEN | 新增越南 Zalo 聊天渠道支持 |
| **#1284** | feat: Anthropic Messages API | 🟢 OPEN | 添加 Anthropic Messages 协议支持，解决 #269 |
| **#1295** | WeCom 长连接模式 | 🟢 OPEN | 企业微信 AI 机器人最新长连接实现 |
| **#1229** | OpenAI Responses API | 🟢 OPEN | 添加 `/responses` API 支持并保留 fallback |
| **#1389** | Per-agent SkillsFilter | 🟢 OPEN | 实现按 Agent 过滤技能，提升配置灵活性 |
| **#1332** | 工具使用调试渠道 | 🟢 OPEN | 实时工具反馈功能，提升透明度 |

---

## 4. 社区热点

### 🔥 高热度 Issues（按评论数排序）

| Issue | 标题 | 评论数 | 热度分析 |
|-------|------|--------|----------|
| **#1218** | [Agent refactor] 什么是 Agent - SOUL.md/AGENT.md 定义 | **13** | 核心架构讨论，定义 Agent 个性化配置方式，社区关注度高 |
| **#297** | 设计征集：PicoClaw Mantis Shrimp  Logo | **9** | 品牌视觉 Identity，呼声高但未最终确定 |
| **#1316** | [Agent refactor] 事件驱动 Agent 循环 + hooks/interrupts/steering | **7** | 架构升级提案，解决可观测性痛点 |
| **#748** | Groq API 兼容性：tool call 格式错误 | **6** | _provider 兼容性 bug，影响 Groq 用户 |
| **#440** | 用上下文窗口边界替代硬迭代限制 | **4** | 配置优化需求，社区反馈强烈 |

### 热点分析

1. **#1218 Agent 重构**：社区对 Agent 抽象定义高度关注，SOUL.md（人格/价值观）和 AGENT.md（行为规范）的提出标志着项目从纯技术实现向"有灵魂的 AI 助手"演进，引发 Philosophy + Engineering 的跨界讨论。

2. **#1316 事件驱动循环**：当前 Agent Loop 是黑盒设计，无法观察/拦截/中断。社区对可观测性和可控制性的需求迫切，该提案将 Loop 转变为事件系统，是下一代 Agent 架构的基础。

3. **#297 Logo 设计**：Mantis Shrimp（皮皮虾）作为项目精神象征，社区参与热情高，建议创作者可通过贡献获取官方认可。

---

## 5. Bug 与稳定性

### 🔴 高优先级 Bug

| Issue | 描述 | 严重程度 | 状态 | 修复进展 |
|-------|------|----------|------|----------|
| **#1151** | TUI PHI 配置标签页与其它标签页存在文件读写竞争条件；HomePath 未转义导致 shell 命令注入风险 | **HIGH** | OPEN | 需修复 read-modify-write 竞态 |
| **#748** | Groq API tool call 格式不兼容（`<function=name{...}>` vs OpenAI 标准） | HIGH | OPEN | 需 provider 层面适配 |
| **#1375** | volcengine SSL 证书验证失败 | HIGH | OPEN | SSL/TLS 配置问题 |

### 🟡 中等优先级 Bug

| Issue | 描述 | 状态 | 相关 PR |
|-------|------|------|---------|
| **#1350** | Docker 镜像 manifest 不可用 | OPEN | - |
| **#1348** | Windows 源码编译失败 | OPEN | - |
| **#1287** | Tool calling JSON 解析失败 | CLOSED | - |
| **#1299** | Agent 模式下 MCP 工具不可用 | CLOSED | ✅ 已修复于 nightly |

### ✅ 已修复 Bug（值得肯定）

- **#1290** - Web 后端 Gateway 启动配置问题 → PR 已合并
- **#1280** - IRC 配置中文标点问题 → 已关闭
- **#1373 / #1385** - Web 对话页恢复上次会话 → PR #1385 已 OPEN
- **#1369 / #1386** - JSON 编辑器水平滚动 → PR #1386 已 OPEN

---

## 6. 功能请求与路线图信号

### 🌟 高价值功能请求

| Issue | 功能 | 需求场景 | 社区支持 | 纳入版本可能性 |
|-------|------|----------|----------|----------------|
| **#1098** | Telegram 实时流响应 | 用户期望像 ChatGPT 一样流式输出 | 2 条讨论 | 中期 |
| **#175** | Engram 持久记忆后端 | 解决文件型记忆的搜索瓶颈 | 1 条讨论 | 长期 |
| **#1372** | OpenIM 插件 | 企业 IM 集成 | - | 待定 |
| **#1347** | GitHub Device Code 认证 | Copilot 集成 | - | 中期 |
| **#1371** | Docker 镜像增加 Node.js 22 | 自定义脚本需求 | - | 低 |

### 路线图信号分析

基于当前 PRs 和 Issues，**下一版本可能聚焦**：
1. **Agent 2.0 重构**：事件驱动循环 + SOUL/AGENT 定义
2. **多 Agent 协作**：Teams 架构成熟化
3. **Providers 增强**：Anthropic Messages、OpenAI Responses、LongCat
4. **渠道扩展**：Zalo、WeCom 长连接优化、Telegram 流式响应

---

## 7. 用户反馈摘要

### 真实痛点

1. **配置复杂性**：`max_tool_iterations: 20` 硬限制导致复杂任务失败（#440）
2. **调试困难**：Agent 执行黑盒化，工具调用过程无反馈（#1332 正在解决）
3. **Provider 碎片化**：Groq、volcengine 等兼容性各异
4. **Web 体验**：Firefox 下 JSON 编辑器样式崩溃、对话历史不持久

### 满意之处

- 项目响应速度快：24小时内处理 100+ PRs/Issues
- 多渠道支持：持续扩展 Telegram、WeCom、IRC、Matrix 等
- 社区参与：Logo 设计征集、多语言文档翻译活跃

---

## 8. 待处理积压

### ⚠️ 长期未响应 Issue（>7天无更新)

| Issue | 标题 | 创建时间 | 状态 | 建议 |
|-------|------|----------|------|------|
| **#175** | Engram 持久记忆后端 | 2026-02-14 | OPEN | 需维护者评估技术方案 |
| **#1347** | GitHub Device Code 认证 | 2026-03-11 | OPEN | 功能有价值，建议分配 |
| **#1371** | Docker + Node.js 22 | 2026-03-11 | OPEN | 评估必要性 |
| **#1348** | Windows 编译失败 | 2026-03-11 | OPEN | **高优先级**，影响开发者体验 |

### 待合并的高价值 PRs

建议优先合并以下 PR 以推进功能：
1. **#1389** - Per-agent SkillsFilter（配置增强）
2. **#1332** - 工具使用调试（开发者体验）
3. **#1385 / #1386** - Web UI bugfixes（用户体验）

---

*报告生成时间：2026-03-12 | 数据来源：GitHub PicoClaw Repository*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-12)

## 1. 今日速览

今日项目保持高度活跃，共产生 **16 条 Issues 更新**（新开/活跃 10 条，关闭 6 条）和 **39 条 PR 更新**（待合并 31 条，已合并/关闭 8 条）。未发布新版本。**Token 优化系列工作全部闭环**（3 个机制 + 3 个 Feature 独立 issue），标志着项目在成本控制方面取得重要进展。安全加固、容器网络修复、多实例支持等关键 PR 正在 review 中，项目整体向前推进明显。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日 **8 个 PR 已合并/关闭**，以下是代表性进展：

| PR | 状态 | 类型 | 描述 |
|---|---|---|---|
| [#977](https://github.com/qwibitai/nanoclaw/pull/977) | CLOSED | Feature | 语义记忆功能 (LanceDB + Gemini embeddings) — 为容器 agent 提供持久化向量记忆 |
| [#975](https://github.com/qwibitai/nanoclaw/pull/975) | CLOSED | Feature | GitHub MCP 服务器集成 — 支持结构化 GitHub 操作 |
| [#930](https://github.com/qwibitai/nanoclaw/pull/930) | OPEN | Fix | 自动刷新过期 OAuth 令牌 — 修复每日 401 错误问题 |
| [#965](https://github.com/qwibitai/nanoclaw/pull/965) | OPEN | Fix | 流式消息发送修复 — 避免 WhatsApp 消息 flooding |

**Token 优化系列 PR 均已合并/闭环**：
- [#980](https://github.com/qwibitai/nanoclaw/issues/980) Inline Compaction
- [#981](https://github.com/qwibitai/nanoclaw/issues/981) 响应长度控制  
- [#982](https://github.com/qwibitai/nanoclaw/issues/982) CLAUDE.md 自动压缩

---

## 4. 社区热点

今日评论/讨论最活跃的 Issues：

### 🔥 #732 [Bug] Send message after agent completes, not during streaming
- **链接**: https://github.com/qwibitai/nanoclaw/issues/732
- **热度**: 3 评论 | 优先级 High | Type: Bug
- **背景**: `processGroupMessages` 在流式输出时将每个 chunk 作为单独 WhatsApp 消息发送，导致聊天被碎片响应 flooding
- **相关 PR**: [#965](https://github.com/qwibitai/nanoclaw/pull/965) 已提供 fix，正在 review

### 🔥 #865 [Enhancement] Using containers alone doesn't make you more secure
- **链接**: https://github.com/qwibitai/nanoclaw/issues/865
- **热度**: 2 评论 | 优先级 High | Type: Enhancement
- **背景**: 安全加固相关，架构在多个位置过度信任容器，需要更多防御层

### 🔥 #958 [Bug] Can not get a response from NanoClaw
- **链接**: https://github.com/qwibitai/nanoclaw/issues/958
- **热度**: 1 评论 | 优先级 High | Type: Bug
- **背景**: 用户执行 /setup 后发送消息始终无响应，是高优先级用户体验问题

---

## 5. Bug 与稳定性

| Issue | 优先级 | 状态 | 说明 |
|---|---|---|---|
| [#732](https://github.com/qwibitai/nanoclaw/issues/732) | High | OPEN | WhatsApp 流式消息 flooding — **有 fix PR [#965](https://github.com/qwibitai/nanoclaw/pull/965)** |
| [#958](https://github.com/qwibitai/nanoclaw/issues/958) | High | OPEN | 无法获得响应 — Setup 后无回复 |
| [#960](https://github.com/qwibitai/nanoclaw/issues/960) | High | OPEN | MCP env vars 未传递到容器 — credential proxy 迁移后的回归 |
| [#853](https://github.com/qwibitai/nanoclaw/issues/853) | Medium | OPEN | 未支持 ANTHROPIC_AUTH_TOKEN — setup 验证不识别 |
| [#973](https://github.com/qwibitai/nanoclaw/issues/973) | Medium | OPEN | Setup 耗时过长 — 用户抱怨复杂度过高 |
| [#709](https://github.com/qwibitai/nanoclaw/issues/709) | High | CLOSED | 容器 allowlist 与 Bash subprocess blocklist 之间的 secret env var 管理行为不一致 |

---

## 6. 功能请求与路线图信号

用户提出的新功能需求，结合 PR 判断可能被纳入下一版本：

| Issue | 优先级 | 信号 |
|---|---|---|
| [#984](https://github.com/qwibitai/nanoclaw/issues/984) | High | Inline Compaction — 对话历史压缩，零额外 token 成本 |
| [#985](https://github.com/qwibitai/nanoclaw/issues/985) | Medium | 响应长度控制 — 减少 output token 浪费 (5x input 价格) |
| [#986](https://github.com/qwibitai/nanoclaw/issues/986) | Medium | CLAUDE.md 自动压缩 — 防止 system prompt 膨胀 |
| [#987](https://github.com/qwibitai/nanoclaw/pull/987) | High | Session 大小轮转 + 预死亡内存 flush — 解决 55MB/16K 行后会话丢失问题 |
| [#970](https://github.com/qwibitai/nanoclaw/pull/970) | Feature | 多实例支持 — `NANOCLAW_INSTANCE` 环境变量隔离资源 |
| [#963](https://github.com/qwibitai/nanoclaw/pull/963) | Feature | OpenAI Codex SDK 作为可选引擎 — 替代 Claude |
| [#974](https://github.com/qwibitai/nanoclaw/pull/974) | Feature | Discord 图像视觉 + 语音转录 |
| [#957](https://github.com/qwibitai/nanoclaw/issues/957) | Medium | 支持 Podman 作为 Docker 替代方案 |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点：

- **消息可靠性问题**：用户反复发送消息却收不到回复（#958），怀疑 NanoClaw 运行时异常但无明确错误信息
- **Setup 体验**：用户反馈通过 Claude Code 进行 Setup 异常缓慢，质疑为何需要如此复杂的配置而非简单的 .json 文件（#973）
- **认证兼容性问题**：Claude Code 官方使用 `ANTHROPIC_AUTH_TOKEN`，但 NanoClaw setup 验证仅识别 `CLAUDE_CODE_OAUTH_TOKEN` 和 `ANTHROPIC_API_KEY`（#853）
- **OAuth 令牌时效**：使用 `CLAUDE_CODE_OAUTH_TOKEN` 每隔数小时过期，导致每日早晨容器调用 agent 时出现 401 错误（#930 正在修复）
- **容器安全**：用户深度使用后认为当前架构在多个位置过度信任容器，安全性不足（#865）

---

## 8. 待处理积压

以下 Issues 超过 48 小时未获响应，需维护者关注：

| Issue | 优先级 | 积压时间 | 描述 |
|---|---|---|---|
| [#960](https://github.com/qwibitai/nanoclaw/issues/960) | High | ~1 天 | MCP env vars 未传递到容器 — 阻塞第三方 MCP 服务器 |
| [#973](https://github.com/qwibitai/nanoclaw/issues/973) | Medium | ~1 天 | Setup 耗时过长 — 用户体验问题 |
| [#957](https://github.com/qwibitai/nanoclaw/issues/957) | Medium | ~1 天 | 支持 Podman 替代 Docker — 文档建议 |

**长期积压提醒**：
- [#412](https://github.com/qwibitai/nanoclaw/pull/412) (2026-02-23 创建) — 主机机器授权 passthrough 功能，已近 20 天未合并

---

*报告生成时间: 2026-03-12 | 数据来源: GitHub NanoClaw (qwibitai/nanoclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-03-12)

## 1. 今日速览

IronClaw 项目今日保持高度活跃，共计 45 条 Issue 更新和 50 条 PR 更新。版本 v0.18.0 已于昨日发布并成功推向 main 分支，带来 WASM 工件 URL 修复等关键更新。今日社区聚焦于 Telegram 配对流程、Google Sheets 集成、ngrok 隧道稳定性等问题，同时多个安全相关的 Staging CI Review 发现高优先级问题。整体项目处于稳健迭代状态，但存在多个用户体验问题待修复。

---

## 2. 版本发布

### v0.18.0 (2026-03-11)

**发布说明：**

- **PR #865**: promote staging to main (2026-03-10 15:19 UTC)
- **PR #830**: update WASM arti

**关键更新：** 本版本主要包含 Registry manifest 修复，所有 14 个 registry manifests（10 个 tools + 4 个 channels）之前引用了遗留的无版本文件名和 null checksums，导致 `ironclaw registry install` 出现 404 错误。v0.18.0 已更新为带版本号的工件 URL 和来自 `checksums.txt` 的具体 SHA256 值。

**关联修复 PR：**
- #1007: fix(registry): use versioned artifact URLs and checksums for all WASM manifests

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 描述 | 状态 |
|---|---|---|
| [#1007](https://github.com/nearai/ironclaw/pull/1007) | fix(registry): use versioned artifact URLs and checksums for all WASM manifests | ✅ OPEN |
| [#758](https://github.com/nearai/ironclaw/pull/758) | Migrate GitHub webhook normalization into github tool | ✅ CLOSED |
| [#834](https://github.com/nearai/ironclaw/pull/834) | feat: add cargo-deny for supply chain safety | ✅ CLOSED |
| [#945](https://github.com/nearai/ironclaw/pull/945) | fix(ci): patch correct manifest when tools/channels share filename | ✅ CLOSED |
| [#793](https://github.com/nearai/ironclaw/pull/793) | fix(mcp): set session manager on non-OAuth HTTP MCP clients | ✅ CLOSED |
| [#679](https://github.com/nearai/ironclaw/pull/679) | fix(setup): preserve model selection on provider re-run | ✅ CLOSED |
| [#522](https://github.com/nearai/ironclaw/pull/522) | fix(security): make unsafe env::set_var calls safe with explicit invariants | ✅ CLOSED |
| [#516](https://github.com/nearai/ironclaw/pull/516) | fix(security): require explicit SANDBOX_ALLOW_FULL_ACCESS to enable FullAccess policy | ✅ CLOSED |
| [#514](https://github.com/nearai/ironclaw/pull/514) | fix(security): add Content-Security-Policy header to web gateway | ✅ CLOSED |
| [#513](https://github.com/nearai/ironclaw/pull/513) | fix(security): migrate webhook auth to HMAC-SHA256 signature header | ✅ CLOSED |

**推进的功能领域：**
- **CLI 增强**: channels list 和 skills list/search/info 子命令正在开发中 (#933, #918)
- **Discord Gateway**: 新增 WASM 频道流程 (#944)
- **安全加固**: 多项安全修复已合并，包括 CSP header、webhook HMAC 认证、sandbox 策略强化
- **MCP 改进**: OAuth 浏览器窗口修复、会话管理增强

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 标题 | 热度分析 |
|---|---|---|---|
| [#142](https://github.com/nearai/ironclaw/issues/142) | 9 | Why do I need to fork and edit this to get rid of the NEAR AI auth thing? why is it REQUIRED? | 用户对强制 NEAR AI 认证的强烈不满，认为这与项目本身无关 |
| [#733](https://github.com/nearai/ironclaw/issues/733) | 5 | Bug: ngrok process becomes zombie (<defunct>) after tunnel URL is obtained | ngrok 隧道稳定性问题，影响生产使用 |
| [#840](https://github.com/nearai/ironclaw/issues/840) | 4 | onboard installs stale default WASM tool artifacts incompatible with host WIT 0.3.0 | 新用户 onboarding 流程的兼容性问题 |
| [#875](https://github.com/nearai/ironclaw/issues/875) | 2 | `ironclaw onboard` fails to install dependencies | 依赖安装失败，checksum 验证问题 |
| [#299](https://github.com/nearai/ironclaw/issues/299) | 2 | Help Needed: Unable to authenticate MCP servers | MCP 服务器认证配置灵活性需求 |
| [#738](https://github.com/nearai/ironclaw/issues/738) | 2 | Bug: Managed Tunnel binds to Web Gateway port (3000) instead of Webhook Server port (8080) | 端口绑定错误导致 webhook 通道 404 |

**热点分析：**
- Issue #142 引发最多讨论，用户对强制认证机制表示强烈抗议，批评这一设计决策
- ngrok 隧道相关问题（#733, #738）持续受到关注，影响生产环境稳定性
- onboarding 流程的 WIT 版本兼容性问题影响新用户体验

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

**🔴 HIGH 严重程度：**

| Issue | 描述 | 状态 |
|---|---|---|
| [#1005](https://github.com/nearai/ironclaw/issues/1005) | [HIGH] Inconsistent double opt-in enforcement pathway | OPEN |
| [#988](https://github.com/nearai/ironclaw/issues/988) | [HIGH] Hardcoded environment variable instead of configuration abstraction | OPEN |
| [#977](https://github.com/nearai/ironclaw/issues/977) | [HIGH] Unbounded parameters schema JSON | OPEN |
| [#976](https://github.com/nearai/ironclaw/issues/976) | [HIGH] Unbounded description string in CapabilitiesFile | OPEN |
| [#733](https://github.com/nearai/ironclaw/issues/733) | ngrok process becomes zombie after tunnel URL obtained | CLOSED (待验证) |
| [#738](https://github.com/nearai/ironclaw/issues/738) | Managed Tunnel binds to wrong port (3000 vs 8080) | OPEN |

**🟡 MEDIUM 严重程度：**

| Issue | 描述 | 状态 |
|---|---|---|
| [#1001](https://github.com/nearai/ironclaw/issues/1001) | Telegram pairing approval required for existing bots | OPEN |
| [#1002](https://github.com/nearai/ironclaw/issues/1002) | Spreadsheet created but not populated — google-sheets write silently incomplete | OPEN |
| [#1000](https://github.com/nearai/ironclaw/issues/1000) | Rate limiter returns "retry after None" instead of duration | OPEN |
| [#999](https://github.com/nearai/ironclaw/issues/999) | Google Sheets returns 403 PERMISSION_DENIED after OAuth | OPEN |
| [#998](https://github.com/nearai/ironclaw/issues/998) | routine_update rejects schedule/type change on non-cron routines | OPEN |
| [#997](https://github.com/nearai/ironclaw/issues/997) | "Error: Waiting for approval" misleading UI message | OPEN |
| [#996](https://github.com/nearai/ironclaw/issues/996) | Tool approval modal requires page reload to appear | OPEN |
| [#994](https://github.com/nearai/ironclaw/issues/994) | Routine broadcast to Telegram fails with "Invalid chat_id 'default'" | OPEN |
| [#993](https://github.com/nearai/ironclaw/issues/993) | google-sheets tool: LLM passes values as JSON string instead of array | OPEN |
| [#992](https://github.com/nearai/ironclaw/issues/992) | Google OAuth URL broken when initiated from Telegram | OPEN |
| [#991](https://github.com/nearai/ironclaw/issues/991) | Telegram bot token validation fails intermittently (HTTP 404) | OPEN |

**🟢 已修复/关闭：**

| Issue | 描述 |
|---|---|
| [#875](https://github.com/nearai/ironclaw/issues/875) | `ironclaw onboard` fails to install dependencies (checksum issue) |
| [#942](https://github.com/nearai/ironclaw/issues/942) | Calling LLM missing User-Agent |
| [#890](https://github.com/nearai/ironclaw/issues/890) | Stdio MCP transport sends tools/list before initialize handshake |

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue | 功能描述 | 关联 PR | 纳入可能性 |
|---|---|---|---|
| [#299](https://github.com/nearai/ironclaw/issues/299) | 希望能修改 MCP servers 的 JSON 配置 | - | 中等（需评估） |
| [#933](https://github.com/nearai/ironclaw/pull/933) | CLI: add ironclaw channels list subcommand | OPEN | ⭐ 高（已有 PR） |
| [#918](https://github.com/nearai/ironclaw/pull/918) | CLI: add ironclaw skills list/search/info subcommands | OPEN | ⭐ 高（已有 PR） |
| [#844](https://github.com/nearai/ironclaw/pull/844) | CLI: add subcommand for managing scheduled routines | OPEN | ⭐ 高（已有 PR） |
| [#944](https://github.com/nearai/ironclaw/pull/944) | Discord Gateway mode as default WASM channel | OPEN | ⭐ 高（已有 PR） |
| [#938](https://github.com/nearai/ironclaw/pull/938) | Add Z.AI provider support for GLM-5 | OPEN | ⭐ 中等（已有 PR） |

**路线图信号：**
- **CLI 扩展** 是近期重点方向，多个相关 PR 正在开发
- **Discord Gateway** 支持作为 WASM 频道的默认路径正在推进
- **多 provider 支持**（Z.AI）持续扩展

---

## 7. 用户反馈摘要

### 真实用户痛点

1. **强制认证机制引发反感** (Issue #142, 9 评论)
   - 用户强烈要求移除 NEAR AI 强制认证，认为这与项目核心功能无关
   - 已有开发者创建 ByeByeClaw 卸载工具 (#919) 应对此问题

2. **ngrok 隧道稳定性问题** (Issue #733)
   - 生产环境中 ngrok 进程变为 zombie，导致隧道离线
   - 影响 webhook 接收，需要重启服务

3. **Onboarding 流程不顺畅** (Issue #840, #875)
   - 新用户安装的默认 WASM 工具与主机 WIT 版本不兼容
   - 依赖安装 checksum 验证失败

4. **Telegram 集成问题频发**
   - 配对流程需要手动发送消息才能激活
   - OAuth URL 参数错误 (`clientid` vs `client_id`)
   - Token 验证间歇性失败

5. **Google Sheets 集成缺陷**
   - OAuth 完成后仍返回 403 权限错误
   - LLM 传递参数格式错误（JSON string vs array）

### 用户满意度观察

- **不满点**：认证机制、隧道稳定性、第三方集成（Google/Telegram）
- **积极反馈**：项目 CLI 能力扩展受到期待，Discord Gateway 模式获关注

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 创建时间 | 状态 | 提醒 |
|---|---|---|---|
| [#299](https://github.com/nearai/ironclaw/issues/299) | 2026-02-22 | OPEN | MCP 认证灵活性需求，18 天未响应 |
| [#142](https://github.com/nearai/ironclaw/issues/142) | 2026-02-17 | CLOSED | 强制认证问题已关闭，但用户情绪需关注 |

### 高优先级待处理 PR

| PR | 描述 | 创建时间 |
|---|---|---|
| [#933](https://github.com/nearai/ironclaw/pull/933) | CLI channels list subcommand | 2026-03-11 |
| [#918](https://github.com/nearai/ironclaw/pull/918) | CLI skills list/search/info | 2026-03-11 |
| [#844](https://github.com/nearai/ironclaw/pull/844) | CLI routines management | 2026-03-10 |
| [#944](https://github.com/nearai/ironclaw/pull/944) | Discord Gateway WASM channel | 2026-03-11 |

---

**报告生成时间：** 2026-03-12  
**数据来源：** GitHub IronClaw Repository (nearai/ironclaw)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-12)

## 1. 今日速览

TinyClaw 项目今日保持极高活跃度，共处理 12 条 Issues（9 关闭 / 3 新开）和 7 条 PRs（6 合并 / 1 待合并）。新版本 v0.0.10 正式发布，带来多项关键修复；同时代号为 **"rebrand to TinyAGI"** 的大型品牌重构 PR 正在开发中，预计将显著提升项目整体架构与定位。项目当前处于快速迭代期，核心功能完善与开发者体验优化齐头并进，社区参与度高涨。

---

## 2. 版本发布

### v0.0.10 发布

**发布说明：** 本次更新聚焦稳定性提升与运维简化，未引入破坏性变更。

| 变更类型 | 详情 |
|---------|------|
| 🗑️ 移除日志窗格 | 从 tmux session (daemon.sh) 中移除专用日志窗格，简化界面 |
| 🔧 修复心跳检测 | 简化 `heartbeat-cron.sh` 中的 `TINYCLAW_HOME` 检测逻辑 |
| ⏱️ 延长监控超时 | Telegram polling watchdog 超时从 2 分钟提升至 5 分钟 |
| 🌐 本地化任务类型 | 将 Task/TaskStatus 类型从核心模块中解耦，支持多语言/多场景扩展 |

> 📦 Release 链接: https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.10

---

## 3. 项目进展

今日合并/关闭 6 条 PRs，项目整体实现多项关键功能推进：

| PR | 状态 | 概述 | 推进内容 |
|----|------|------|---------|
| **#191** | 🔵 OPEN | feat: rebrand tinyclaw to tinyagi | 全量品牌重塑：包名、环境变量、CLI命令、配置目录、文档全面更名 |
| **#186** | ✅ CLOSED | refactor: split monolith into npm workspaces monorepo with SQLite queue | 重构为 5 个 npm workspace 包 (`@tinyclaw/core/teams/channels/server/visualizer`)，用 SQLite 队列替代 Redis/BullMQ |
| **#185** | ✅ CLOSED | refactor(cli): migrate interactive prompts to @clack/prompts | CLI 交互式提示全面迁移至 TypeScript + @clack/prompts，移除 1500+ 行 bash 提示代码 |
| **#190** | ✅ CLOSED | fix: team comms and stream responses in real-time | 团队通信实时流式响应优化，修复 orchestration 逻辑 |
| **#183** | ✅ CLOSED | Remove message_received event and simplify office UI | 移除冗余事件，简化 TinyOffice 聊天 UI |
| **#182** | ✅ CLOSED | Auto-trigger agent when task moves to in progress | Kanban 看板拖拽任务至"进行中"自动触发 agent |
| **#143** | ✅ CLOSED | feat: add Avian AI provider | 新增 Avian AI (OpenAI 兼容) 提供商支持 |

> 📌 **重点关注**：#191 (Rebrand) 和 #186 (Monorepo + SQLite) 两大重构将对项目未来架构产生深远影响，建议在下个 Major 版本中合并。

---

## 4. 社区热点

今日社区讨论围绕 **TinyOffice (Web Portal) 增强功能** 展开，三条新 Issue 均来自同一作者 `@mczabca-boop`，反映了用户对 Web 端控制体验的强烈需求：

| Issue | 热度 | 诉求分析 |
|-------|------|---------|
| **#194** TinyOffice: add runtime control panel | 🆕 新增 | 期望在 Web 面板中直接控制 daemon、queue、heartbeat、channels 的启停，替代 CLI 操作 |
| **#192** TinyOffice UX suggestions | 🆕 新增 | 聊天会话应为持久化而非"阅后即焚"，需提供历史记录入口 |
| **#193** TinyOffice: add first-run web onboarding | 🆕 新增 | 首次安装应提供 Web 向导而非依赖 CLI + 配置文件编辑 |

**链接：**
- #194: https://github.com/TinyAGI/tinyclaw/issues/194
- #192: https://github.com/TinyAGI/tinyclaw/issues/192
- #193: https://github.com/TinyAGI/tinyclaw/issues/193

**分析：** TinyOffice 已从"简单的 Web 聊天入口"演变为"完整 Web 控制台"定位，用户期望摆脱命令行束缚，建议维护者将其纳入下版本路线图。

---

## 5. Bug 与稳定性

今日未报告新 Bug。已关闭的历史 Bug 均已在本次迭代中修复或确认非 Bug：

| Issue | 状态 | 严重程度 | 修复情况 |
|-------|------|---------|---------|
| #63 Clear interval on shutdown in queue-processor.ts | ✅ 已关闭 | 🟡 中 | PR 已合入，Shutdown 时清理 interval |
| #91 Agent does not acknowledge messages | ✅ 已关闭 | 🟡 中 | 归因于消息流处理逻辑，已在 #190 中修复 |
| #87 Support for zellij tinyclaw | ✅ 已关闭 | 🟢 低 | 需求类（Zellij 布局支持），非 Bug |

---

## 6. 功能请求与路线图信号

以下需求具有较高纳入下一版本的可行性（结合已有 PR 判断）：

| 需求 | 关联 PR/Issue | 可行性 |
|------|--------------|--------|
| **Web 端运行时控制面板** | #194 (Open) | ⭐⭐⭐ 高 —— TinyOffice 已是重点投入方向 |
| **聊天历史持久化** | #192 (Open) | ⭐⭐⭐ 高 —— 与 #186 重构中 SQLite 存储能力天然契合 |
| **Web 首次引导** | #193 (Open) | ⭐⭐ 中 —— 属于 UX 优化，开发成本适中 |
| **多 Provider 路由** | #41, #103, #111 (已关闭) | ⭐⭐⭐ 高 —— 多条 PR 已合并，新增 GLM 4.7 / Avian / Ollama 支持 |
| **Zellij 布局支持** | #87 (已关闭) | ⭐ 中 —— 社区有需求但暂无明确实现计划 |

---

## 7. 用户反馈摘要

从 Issues 评论与讨论中提炼核心痛点与诉求：

| 场景 | 用户原声 | 痛点/诉求 |
|------|---------|----------|
| **WhatsApp 消息延迟** | "Agent 在 WhatsApp 上发送消息时只显示 typing 状态，然后消失，直到我主动询问才回复" (#91) | 实时反馈缺失，消息状态不透明 |
| **任务追踪透明度** | "能否像 Claude-trace 或 Azire Phoenix 一样，提供每个 Agent 的调用链路图？" (#66) | 任务执行可视化需求 |
| **多模型灵活路由** | "我们有多 provider 环境，希望能把不同 Agent 路由到不同模型" (#41) | 细粒度模型分配能力 |
| **一键卸载需求** | "开发了 ByeByeClaw，一键清理 TinyClaw 及 Claw 家族工具" (#189) | 运维便利性提升 |
| **首次配置门槛** | "TinyOffice 配置体验不佳，首次设置仍依赖 CLI 和手工编辑配置" (#193) | 降低入门门槛 |

---

## 8. 待处理积压

以下 Issue 值得关注但暂无官方响应，建议维护者抽空评估：

| Issue | 状态 | 关注原因 |
|-------|------|---------|
| **#66** Mission control ui with traceability | 🔴 已关闭 | 用户对任务追踪可视化有强需求，可作为 TinyOffice 后续功能规划 |
| **#111** ollama and local model support | 🔴 已关闭 | 本地模型支持已有多人请求，建议评估集成方案 |
| **#41** Add more providers | 🔴 已关闭 | 已实现 OpenAI 兼容端点配置，建议在文档中明确说明用法 |

> ⚠️ **提示**：上述 Issue 虽已关闭，但评论中仍有个别用户追问进展，建议在关闭时提供明确的设计文档或后续计划链接，减少重复提问。

---

**—— 报告生成时间：2026-03-12 | 数据来源：GitHub TinyClaw Repository ——**

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*