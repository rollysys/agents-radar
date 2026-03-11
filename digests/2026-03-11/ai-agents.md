# OpenClaw 生态日报 2026-03-11

> Issues: 500 | PRs: 500 | 覆盖项目: 10 个 | 生成时间: 2026-03-11 02:13 UTC

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

# OpenClaw 项目动态日报 (2026-03-11)

## 1. 今日速览

过去24小时，OpenClaw 项目保持极高活跃度：共产生 **500 条 Issues 更新**（368 条新开/活跃，132 条关闭）和 **500 条 PR 更新**（348 条待合并，152 条已合并/关闭）。社区围绕多个回归Bug和新功能请求展开激烈讨论，但 **无新版本发布**。整体项目健康度良好，合并率较高(152/500)，建议关注近期多个 v2026.3.x 版本的回归问题修复进展。

---

## 2. 版本发布

**本期无新版本发布**

---

## 3. 项目进展

过去24小时已合并/关闭 **152 个 PR**，以下是重点推进的项目：

| PR | 作者 | 描述 | 影响范围 |
|---|---|---|---|
| [#41503](https://github.com/openclaw/openclaw/pull/41503) | @BunsDev | `feat(ui): dashboard-v2 views refactor (slice 3/3)` | Web UI |
| [#42428](https://github.com/openclaw/openclaw/pull/42428) | @ahua2020qq | `feat(acp): add audit logging system for control plane security` | 安全审计 |
| [#42022](https://github.com/openclaw/openclaw/pull/42022) | @markmonkey | `Fix Codex OAuth proxy dispatcher handling` | OAuth |
| [#33489](https://github.com/openclaw/openclaw/pull/33489) | @prdeepak | `feat(mac): add launchd daemon scope for gateway service` | macOS |
| [#40658](https://github.com/openclaw/openclaw/pull/40658) | @shichangs | `Onboarding: add rescue watchdog setup` | 监控恢复 |
| [#42670](https://github.com/openclaw/openclaw/pull/42670) | @rstar327 | `fix(deps): bump tar override from 7.5.10 to 7.5.11` | 依赖安全 |

**积极信号**：
- Dashboard v2 三大切片全部合并完成，Web UI 重构进入收官阶段
- 控制平面安全审计系统首次引入，符合企业合规需求
- macOS LaunchDaemon 支持补齐，平台能力进一步完善

---

## 4. 社区热点

以下 Issues/PRs 评论数最多，反映核心社区诉求：

### 🔥 Issues 热点

| Issue | 评论 | 核心诉求 |
|---|---|---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | **97** | **i18n & Localization Support** — 多语言支持需求强烈，但团队暂无带宽 |
| [#27009](https://github.com/openclaw/openclaw/issues/27009) | **21** | **OpenCode Go 订阅集成** — 社区期待接入 Kimi K2.5、GLM-5 等模型 |
| [#39062](https://github.com/openclaw/openclaw/issues/39062) | **18** | **文件系统工具丢失** — exec/read/write 工具失效 |
| [#35220](https://github.com/openclaw/openclaw/issues/35220) | **13** | **Codex 流式错误不回退模型** — 回归问题 |
| [#9157](https://github.com/openclaw/openclaw/issues/9157) | **12** | **文件注入浪费 93.5% token 预算** — 严重性能问题 |

### 📢 趋势分析

- **i18n 需求迫切**：97条评论压倒性领先，说明国际化是全球用户的核心诉求
- **新版模型支持**：OpenCode Go (Kimi/GLM/Minimax) 订阅集成受关注
- **Token 成本敏感**：#9157 性能问题引发热议，提示需优化系统提示词注入策略

---

## 5. Bug 与稳定性

### 🚨 严重 Bug (回归问题)

| Issue | 版本 | 严重程度 | 状态 | 关联 PR |
|---|---|---|---|---|
| [#39062](https://github.com/openclaw/openclaw/issues/39062) | 2026.3.2 | **高** | OPEN | - |
| [#42270](https://github.com/openclaw/openclaw/issues/42270) | 2026.3.8 | **高** | OPEN | - |
| [#41462](https://github.com/openclaw/openclaw/issues/41462) | 2026.3.2 | **高** | OPEN | - |

**#39062 - 文件系统工具丢失**：更新至 2026.3.2 后，exec/read/write 工具失效，影响核心功能

**#42270 - 空 payload + WebSocket 1006 关闭**：与本地 LM Studio 后端集成时出现回归

**#41462 - 工具调度回归**：2026.3.1 → 2026.3.2 间工具调用无法到达 Gateway

### ⚠️ 中等 Bug

| Issue | 类型 | 状态 |
|---|---|---|
| [#41690](https://github.com/openclaw/openclaw/issues/41690) | Kimi 配置验证失败 (regression) | OPEN |
| [#39792](https://github.com/openclaw/openclaw/issues/39792) | OpenAI Codex OAuth 400 错误 (regression) | OPEN |
| [#36182](https://github.com/openclaw/openclaw/issues/36182) | Perplexity Search API 401 错误 (regression) | OPEN |
| [#34830](https://github.com/openclaw/openclaw/issues/34830) | OpenRouter 401 missing auth header (regression) | OPEN |

---

## 6. 功能请求与路线图信号

### ✨ 高期待功能

| Issue | 功能描述 | 关联 PR | 纳入可能性 |
|---|---|---|---|
| [#27009](https://github.com/openclaw/openclaw/issues/27009) | OpenCode Go 订阅支持 (Kimi K2.5, GLM-5, Minimax M2.5) | - | 高 |
| [#10010](https://github.com/openclaw/openclaw/issues/10010) | Agent Teams - 并行 Agent 协调 | - | 中 |
| [#6872](https://github.com/openclaw/openclaw/issues/6872) | xAI 支持 (x_search, web_search, code_exec) | - | 中 |
| [#28930](https://github.com/openclaw/openclaw/issues/28930) | Memory v2 建议 (关联遍历、显著性加权) | - | 中 |
| [#39979](https://github.com/openclaw/openclaw/issues/39979) | 路径级 RWX 权限控制 | - | 中 |

**信号解读**：OpenCode Go 集成有社区明确需求 (21 评论)，且与现有 OpenCode Zen 功能线一致，预计将成为下一版本重点。Agent Teams 功能对标 Claude Code 实验特性，有望进入路线图。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的关键痛点：

### 😤 核心不满

1. **升级后功能退化**：多个 v2026.3.x 版本用户报告升级后功能异常 (OAuth失效、工具不可用、配置报错)
2. **配置复杂度**：Kimi/GLM/Minimax 等新模型配置验证严格，用户频繁遇到 "Unrecognized key" 错误
3. **平台不一致**：macOS LaunchAgent 经常需要手动 reinstall，cron isolated sessions 在 Linux 下行为异常
4. **Token 浪费**：每次消息注入 workspace 文件导致 ~35,600 tokens 浪费，成本敏感用户不满

### ✅ 积极反馈

- Dashboard v2 三大切片合并完成，Web UI 改进受期待
- 安全审计系统首次引入，满足企业合规需求
- Telegram/Discord 频道修复持续推进

---

## 8. 待处理积压

以下 Issues 长期未解决或缺乏响应，需维护者关注：

| Issue | 状态 | 积压时长 | 风险 |
|---|---|---|---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | OPEN | ~41天 | i18n 社区诉求高，需官方路线图 |
| [#9157](https://github.com/openclaw/openclaw/issues/9157) | OPEN | ~35天 | 性能回归，token 浪费严重 |
| [#28930](https://github.com/openclaw/openclaw/issues/28930) | OPEN | ~12天 | Memory v2 建议缺乏官方回应 |
| [#21154](https://github.com/openclaw/openclaw/issues/21154) | OPEN | ~20天 | IRC 插件重复连接问题 |
| [#10008](https://github.com/openclaw/openclaw/issues/10008) | OPEN | ~33天 | Feishu 插件重复注册导致延迟 |

---

**日报生成时间**：2026-03-11  
**数据来源**：GitHub OpenClaw Repository

---

## 横向生态对比

# 2026-03-11 开源 AI 智能体生态横向对比分析报告

## 1. 生态全景

当前开源 AI 智能体/个人 AI 助手生态呈现**多极分化、快速演进**的态势。以 OpenClaw 为核心的生态已形成包含 10+ 个衍生项目的活跃社区，单日 GitHub 交互量突破 1000 条（Issues+PRs），反映出开发者对 AI Agent 基础设施的强烈需求。i18n 支持、新模型集成（Kimi/GLM/Minimax）、多渠道覆盖（Telegram/Discord/飞书）成为普遍诉求，但与此同时，版本回归问题、安全漏洞、跨平台兼容性等质量挑战也同步显现，表明生态正从功能扩张期向可靠性加固期过渡。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新增/活跃) | PRs (新增/活跃) | 版本发布 | 合并率 | 社区健康度评估 |
|------|---------------------|------------------|----------|--------|-----------------|
| **OpenClaw** | 500 | 500 | 无 | 30.4% (152/500) | 🟢 良好（功能迭代旺盛，回归问题需关注） |
| **Zeroclaw** | 33 | 50 | 无 | 28.0% (14/50) | 🟢 稳健（安全特性突出，GLIBC 依赖问题） |
| **EasyClaw** | 1 | 1 | v1.6.4, v1.6.5 | 0% (0/1) | 🟢 维护期（补丁发布，聚焦 macOS 兼容） |
| **LobsterAI** | 13 | 8 | 无 | 75.0% (6/8) | 🟢 良好（IM 渠道快速覆盖，Token 异常需修复） |
| **ZeptoClaw** | 11 | 18 | v0.7.2-v0.7.4 | 44.4% (8/18) | 🟢 优秀（功能密集发布，无积压 Issues） |
| **NanoBot** | 28 | 67 | 无 | 19.4% (13/67) | 🟢 快速迭代（待合并 PR 积压较多） |
| **PicoClaw** | 32 | 82 | v0.2.1-nightly | 45.1% (37/82) | 🟢 活跃（Nightly 验证机制，Ollama 问题突出） |
| **NanoClaw** | 21 | 38 | 无 | 44.7% (17/38) | 🟢 良好（安全得分 92.1，调度器问题 Critical） |
| **IronClaw** | 50 | 50 | v0.17.0 | 44.0% (22/50) | 🟡 质量加固期（18 个 CRITICAL/HIGH Bug 报告） |
| **TinyClaw** | 0 | 8 | 无 | 50.0% (4/8) | 🟢 重构期（Monorepo 拆分进行中） |

*注：合并率 = 已合并/关闭 PR / 总 PR 更新数*

---

## 3. OpenClaw 在生态中的定位

**OpenClaw** 作为生态核心参照物，其定位具有以下特征：

| 维度 | OpenClaw 现状 | 生态对比 |
|------|---------------|----------|
| **社区规模** | 500 Issues / 500 PRs（单日） | 远超其他项目，呈数量级领先 |
| **技术路线** | 全功能 + 安全审计 + 控制平面 | Zeroclaw 侧重安全硬化，EasyClaw 侧重简化，TinyClaw 侧重架构现代化 |
| **版本策略** | 持续迭代，v2026.3.x 回归问题较多 | ZeptoClaw 发布节奏紧凑（3 版本/日），IronClaw 刚发布 v0.17.0 |
| **差异化优势** | Dashboard v2 重构完成、OAuth/LaunchDaemon 平台能力完善 | 社区需求最全面（i18n、模型集成、Token 优化），但响应速度受限于带宽 |

**关键差距**：OpenClaw 的 i18n 需求（97 条评论）长期未解决，Token 浪费问题（#9157）积压 35 天，与社区期望存在张力。

---

## 4. 共同关注的技术方向

以下需求在多个项目中同步涌现，反映行业共识：

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫度 |
|----------|----------|----------|--------|
| **i18n 本地化** | OpenClaw (97 评论), Zeroclaw, NanoBot | 多语言 UI/文档支持，中文社区需求旺盛 | 🔴 高 |
| **本地模型集成** | PicoClaw (#1161, 14 评论), LobsterAI (#360), NanoBot | Ollama/LM-Studio/本地模型配置与调用优化 | 🔴 高 |
| **多渠道覆盖** | LobsterAI (飞书/Discord/Telegram/企业微信), PicoClaw (QQ/Telegram/Mattermost), NanoClaw (WhatsApp/Gmail) | IM 渠道扩展与统一消息协议 | 🟡 中 |
| **安全加固** | Zeroclaw (API Key 前缀验证), NanoClaw (OAuth 刷新, 凭证硬化), IronClaw (Webhook HMAC) | 认证、凭证管理、权限控制 | 🟡 中 |
| **Agent 协作/Teams** | PicoClaw (#915), OpenClaw (#10010), NanoBot (#1690) | 多 Agent 协调、任务分解、子代理工具继承 | 🟡 中 |
| **记忆系统** | OpenClaw (#28930), NanoClaw (#907), NanoBot | 结构化记忆、会话搜索、技能自创建 | 🟡 中 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特点 |
|------|----------|----------|--------------|
| **OpenClaw** | 全功能平台 + 企业合规 | 企业用户、开发者 | Dashboard v2、Audit Logging、控制平面 |
| **Zeroclaw** | 安全优先 | 高安全敏感场景 | 严格沙箱、API Key 预检、Telegram 审批修复 |
| **EasyClaw** | 极简开箱即用 | 个人用户、macOS 用户 | 小步迭代、文档驱动 |
| **LobsterAI** | IM 渠道集成 | 国内企业（钉钉/飞书/企微） | 插件预安装、IM 同步 |
| **ZeptoClaw** | CLI 工具链 + WhatsApp | 开发者、社交媒体运营 | wa-rs 原生支持、凭证自动导入 |
| **NanoBot** | 多模型 + 故障转移 | 高级用户、生产环境 | litellm 升级、端点轮询、多模型选择 |
| **PicoClaw** | 本地部署 + Agent 重构 | 树莓派/边缘设备 | Nightly 构建、Agent 架构重构 |
| **NanoClaw** | 学习系统 + 安全 | 企业/安全团队 | Nerq Trust Index A+ (92.1)、FTS5 搜索 |
| **IronClaw** | 任务持久化 + Webhook | 开发者、Slack 用户 | Routine 引擎、LLM 参数过滤、通道 relay |
| **TinyClaw** | 架构现代化 | 开发者 | Monorepo 拆分、SQLite 队列、@clack/prompts |

---

## 6. 社区热度与成熟度

基于单日活跃度与代码质量信号，可将项目分为三个层次：

### 🔥 快速迭代阶段
- **OpenClaw**：功能扩张期，Issues/PRs 交互量最大，回归问题需关注
- **ZeptoClaw**：CLI 工具链密集完善，版本发布频繁
- **NanoBot / PicoClaw**：功能覆盖快速推进，积压 PR 较多

### ⚖️ 质量巩固阶段
- **IronClaw**：v0.17.0 发布后进入密集 Bug 修复期（18 个 CRITICAL/HIGH），反映代码审查机制活跃
- **NanoClaw**：安全得分亮眼但调度器存在 Critical 问题，需优先修复

### 🔧 架构重构/维护期
- **TinyClaw**：Monorepo 拆分进行中，重构期间功能暂停
- **EasyClaw**：小补丁发布，聚焦已知问题修复

### 🚀 新兴/小众项目
- **LobsterAI**：渠道集成快速推进，但 Token 异常等问题影响可用性

---

## 7. 值得关注的趋势信号

### 行业趋势提炼

1. **安全可信成为一等公民**
   - NanoClaw 获得第三方安全评测认证（92.1 A+），Zeroclaw 安全限制过严引争议，IronClaw 大量安全 Bug 被 CI 捕获
   - **开发者启示**：AI Agent 的企业采用取决于安全审计能力，需从设计阶段嵌入安全机制

2. **本地部署需求井喷**
   - PicoClaw (14 评论)、LobsterAI (502 错误)、NanoBot 均有本地模型配置问题
   - **开发者启示**：Ollama/LM-Studio 集成是 2026 年的关键差异化能力，文档和 DX 需重点优化

3. **IM 渠道成为标配**
   - 飞书/Discord/Telegram/WhatsApp/QQ/企业微信同步推进，多项目呈现“全渠道覆盖”策略
   - **开发者启示**：中国开发者对飞书/企微需求强烈，海外偏好 Discord/Telegram，需差异化适配

4. **记忆与学习系统呼之欲出**
   - OpenClaw Memory v2、NanoClaw learning-system (Epic #907)、NanoBot 多模型选择均在规划中
   - **开发者启示**：长期记忆 + 技能自学习是 Agent 从工具走向伙伴的关键演进方向

5. **架构现代化与质量工程**
   - TinyClaw Monorepo 拆分、IronClaw 统一 AgenticLoop、ZeptoClaw 配置验证器修复
   - **开发者启示**：代码质量治理（CI 审查、类型安全、测试覆盖）是可持续迭代的基础

### 行动建议

| 角色 | 关注点 | 推荐动作 |
|------|--------|----------|
| **技术决策者** | 选型评估 | 企业级首选 OpenClaw（功能全）或 NanoClaw（安全强）；轻量场景可选 EasyClaw |
| **贡献者** | 参与机会 | i18n (#3460)、Ollama 集成 (#1161)、多 Agent Teams 为高价值贡献方向 |
| **产品经理** | 需求对齐 | 本地模型支持、IM 渠道集成、记忆系统为社区共识，优先级可前置 |
| **安全工程师** | 风险关注 | IronClaw/NanoClaw 的安全修复、OAuth 刷新机制、凭证硬化是行业标杆实践 |

---

*报告生成时间：2026-03-11 | 数据来源：各项目 GitHub 每日动态*

---

## 同赛道项目详细报告

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-11)

## 1. 今日速览

过去24小时内，Zeroclaw 项目保持高度活跃状态。Issues 更新共 33 条，其中新开/活跃 22 条、已关闭 11 条；PR 更新共 50 条，待合并 36 条、已合并/关闭 14 条。社区参与度较高，未有新版本发布。项目整体呈现稳健迭代态势，多个功能性 PR 正在推进中，但需关注部分高优先级 Bug 的修复进度。

## 2. 版本发布

过去 24 小时内无新版本发布。

## 3. 项目进展

过去 24 小时内合并/关闭了 14 条 PR，以下为重要进展：

- **#3147** [feat(skills): add zeroclaw operational skill for CLI and REST API usage](https://github.com/zeroclaw-labs/zeroclaw/pull/3147) (CLOSED) - 新增 ZeroClaw 操作技能，帮助 Claude Code 用户快速发现 CLI 命令和 API 端点，降低使用门槛。

- **#3142** [feat(provider): add API key prefix pre-flight validation](https://github.com/zeroclaw-labs/zeroclaw/pull/3142) (CLOSED) - 新增 API Key 前缀预检验证，在首次 API 调用前捕获格式错误，避免出现神秘的 401 错误。

- **#3140** [docs: add dynamic contributor badge and contributors grid to README](https://github.com/zeroclaw-labs/zeroclaw/pull/3140) (CLOSED) - README 添加动态贡献者徽章和贡献者网格，提升社区认可度。

- **#3139** [fix(build): ensure web/dist directory exists at compile time](https://github.com/zeroclaw-labs/zeroclaw/pull/3139) (CLOSED) - 修复构建时 web/dist 目录不存在导致的编译失败问题。

- **#3133** [feat(web): auto-expand multiline chat composer](https://github.com/zeroclaw-labs/zeroclaw/pull/3133) (CLOSED) - Web 聊天输入框支持自动扩展多行，与 OpenClaw 体验对齐。

- **#3121** [feat(web): add hover-to-copy action for chat messages](https://github.com/zeroclaw-labs/zeroclaw/pull/3121) (CLOSED) - Web 聊天界面添加悬停复制功能，支持用户和助手消息的快速复制。

## 4. 社区热点

以下 Issues/PRs 讨论最为活跃：

1. **[#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)** [enhancement]: 除了安全,什么功能也没有 (33 条评论) - 用户强烈反馈安全限制过于严格，即使完全放开配置也无法执行安装等操作，认为 ZeroClaw 过于注重安全而牺牲了可用性。该问题已于 2026-03-10 关闭。

2. **[#1575](https://github.com/zeroclaw-labs/zeroclaw/issues/1575)** [bug]: zeroclaw gateway dashboard agent access error (7 条评论) - 访问 agent 子页面时出现 `crypto.randomUUID is not a function` 错误，已关闭。

3. **[#3070](](https://github.com/zeroclaw-labs/zeroclaw/issues/3070))** [bug]: version `GLIBC_2.39' not found (7 条评论) - 运行时依赖 GLIBC_2.39，但系统环境不满足要求， severity 为 S0（数据丢失/安全风险），需重点关注。

4. **[#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487)** [bug]: Invalid schema for function 'channel_ack_config' (5 条评论) - 所有 provider/model 均失败，severity 为 S1（工作流阻塞）。

## 5. Bug 与稳定性

按严重程度排列的 Bug 报告：

| Issue | 描述 | 严重程度 | 状态 | 关联 PR |
|-------|------|----------|------|---------|
| [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) | GLIBC_2.39 依赖缺失 | S0 - 数据丢失/安全风险 | OPEN | - |
| [#2992](https://github.com/zeroclaw-labs/zeroclaw/issues/2992) | secrets.encrypt 启用时仍发送明文 secret 到 Authorization header | S1 - 工作流阻塞 | CLOSED | - |
| [#3008](https://github.com/zeroclaw-labs/zeroclaw/issues/3008) | 部分 coding plans 仅允许在 code agent 和 openclaw 中使用 | S0 - 数据丢失/安全风险 | CLOSED | - |
| [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) | Invalid schema for function 'channel_ack_config' | S1 - 工作流阻塞 | OPEN | - |
| [#3079](https://github.com/zeroclaw-labs/zeroclaw/issues/3079) | Ollama+Qwen tool-calling 回归：thinking-only 输出，malformed tool_call | S1 - 工作流阻塞 | OPEN | - |
| [#1575](https://github.com/zeroclaw-labs/zeroclaw/issues/1575) | gateway dashboard agent access error (crypto.randomUUID) | S3 - 次要问题 | CLOSED | - |
| [#3135](https://github.com/zeroclaw-labs/zeroclaw/issues/3135) | Windows 上 cargo clippy pre-push hook 因 platform-unaware sync_directory 调用失败 | S1 - 工作流阻塞 | OPEN | - |

## 6. 功能请求与路线图信号

用户提出的新功能需求（按时间排序）：

- **[#3152](https://github.com/zeroclaw-labs/zeroclaw/issues/3152)** [Feature]: i18n requests - Gateway WebUI 需要支持中文
- **[#3146](https://github.com/zeroclaw-labs/zeroclaw/issues/3146)** [Feature]: Ease tool usage approval on channels - 简化手机端工具使用审批流程
- **[#3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095)** [Feature]: on-demand MCP tool loading via tool_search - 按需加载 MCP 工具模式，减少系统提示词大小
- **[#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059)** [Feature]: can not use ali yun bailian coding plan - 阿里云百炼 coding plan 支持
- **[#3129](https://github.com/zeroclaw-labs/zeroclaw/issues/3129)** [Feature]: Preserve message draft - 切换聊天线程时保留草稿消息
- **[#3125](https://github.com/zeroclaw-labs/zeroclaw/issues/3125)** [Feature]: Support custom API path suffix for custom: endpoints - 自定义 API 路径后缀支持

**已有相关 PR 推进**：
- [#3067](https://github.com/zeroclaw-labs/zeroclaw/pull/3067) - fix(config): honor default_temperature config
- [#3007](https://github.com/zeroclaw-labs/zeroclaw/pull/3007) - feat(provider): add support for azure openai provider
- [#3144](https://github.com/zeroclaw-labs/zeroclaw/pull/3144) - feat(web): auto-expand chat composer (已合并)

## 7. 用户反馈摘要

从 Issues 评论中提炼的关键用户痛点：

1. **安全限制过严**：用户反馈 ZeroClaw 安全限制过于严格，即使完全放开配置也无法执行基本操作（如安装 ffmpeg），导致产品可用性极低。([#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478))

2. **Telegram 工具审批缺失**：用户报告 Telegram 渠道的 `autonomy.always_ask` 工具会自动执行而不会询问用户，缺乏必要的审批机制。([#3143](https://github.com/zeroclaw-labs/zeroclaw/pull/3143) 已修复)

3. **Web 界面体验不佳**：用户反映 Web 聊天输入框为固定高度，长文本编辑困难；且缺少消息复制功能。([#3133](https://github.com/zeroclaw-labs/zeroclaw/pull/3133), [#3121](https://github.com/zeroclaw-labs/zeroclaw/pull/3121) 已修复)

4. **配置复杂度**：用户提到 OpenClaw 太大配置太复杂，选择了 ZeroClaw，但发现 ZeroClaw 也有自己的配置复杂度问题。

5. **Telegram 机器人 token 加密不完整**：用户发现 secrets.encrypt 无法保护 Telegram bot_token，存在明文泄露风险。([#3126](https://github.com/zeroclaw-labs/zeroclaw/issues/3126))

## 8. 待处理积压

以下 Issues 长期未响应或需要维护者重点关注：

| Issue | 描述 | 创建时间 | 状态 | 建议 |
|-------|------|----------|------|------|
| [#3044](https://github.com/zeroclaw-labs/zeroclaw/issues/3044) | 自定义模型 onboarding 命令不正确 | 2026-03-08 | OPEN | 需确认 OpenRouter API 模型 ID 格式 |
| [#3041](https://github.com/zeroclaw-labs/zeroclaw/issues/3041) | browser tool click action 超时无恢复机制 | 2026-03-08 | OPEN | 建议参考 rust_native 后端的 click_with_recovery 链 |
| [#3069](https://github.com/zeroclaw-labs/zeroclaw/issues/3069) | MCP 工具未暴露给 delegate 子代理 | 2026-03-09 | OPEN | 需确保 MCP 工具在子代理中可调用 |
| [#3033](https://github.com/zeroclaw-labs/zeroclaw/issues/3033) | default_temperature 配置未生效 | 2026-03-08 | OPEN | [#3067](https://github.com/zeroclaw-labs/zeroclaw/pull/3067) 已修复，待合并 |
| [#2017](https://github.com/zeroclaw-labs/zeroclaw/pull/2017) | feat(providers): add Avian as OpenAI-compatible provider | 2026-02-27 | OPEN | 长期未合并，需评估优先级 |
| [#3131](https://github.com/zeroclaw-labs/zeroclaw/issues/3131) | 分支策略澄清：master/main/dev/main-fix 分歧 | 2026-03-10 | OPEN | 需明确官方分支策略 |

---

*本报告基于 GitHub 数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-11)

---

## 1. 今日速览

过去 24 小时内，EasyClaw 项目保持活跃开发态势。项目共产生 1 条 Issue 更新（已关闭）、1 条 PR 更新（待合并），并同步发布 2 个版本补丁（v1.6.4 和 v1.6.5）。整体来看，项目修复效率较高，社区反馈渠道畅通，今日属于常规维护迭代期。

---

## 2. 版本发布

### v1.6.5 发布

**发布说明**：本次更新为补丁版本，主要面向 macOS 用户解决 Gatekeeper 拦截问题。

**更新内容**：

- 补充了 macOS 安装说明，针对 "已损坏，无法打开" 提示提供详细解决方案
- 引导用户通过 Terminal 执行 `xattr` 命令移除隔离属性

**破坏性变更**：无

**迁移注意事项**：无

### v1.6.4 发布

**发布说明**：与 v1.6.5 同日发布，内容一致，均为文档层面的补充说明。

---

## 3. 项目进展

### PR 合并/关闭情况

| PR # | 标题 | 状态 | 说明 |
|------|------|------|------|
| [#15](https://github.com/gaoyangz77/easyclaw/pull/15) | fix: app icon in macos dock and system tray | OPEN | 修复 macOS Dock 和系统托盘中的应用图标显示问题 |

**进展分析**：PR #15 正在待合并状态，该修复针对 macOS 平台用户体验进行优化，表明项目对跨平台细节体验的关注。合并后将进一步提升 macOS 用户的日常使用感受。

---

## 4. 社区热点

### 热门讨论：Issue #13

| 项目 | 内容 |
|------|------|
| **标题** | 在对话 chat 选择图片，但是模型并没有接受到图片 |
| **链接** | https://github.com/gaoyangz77/easyclaw/issues/13 |
| **状态** | CLOSED ✅ |
| **作者** | @westisc |
| **评论数** | 3 |
| **点赞数** | 0 |

**问题描述**：用户在使用对话功能选择图片时，模型未能接收到图片内容，而在 Codex 中可以正常读取图片。

**分析**：该 Issue 包含截图对比，清晰地展示了问题现象。评论数达到 3 条，说明维护者与用户之间进行了多轮沟通，最终已关闭，表明问题已得到解决或已有明确解决方案。这是今日讨论最活跃的 Issue。

---

## 5. Bug 与稳定性

### 本日 Bug 报告

| 严重程度 | Issue | 状态 | 是否有 Fix PR |
|----------|-------|------|---------------|
| **中** | [#13](https://github.com/gaoyangz77/easyclaw/issues/13) - 图片上传模型未接收 | 已关闭 | 否（可能为配置或后端问题） |
| **低** | [#15](https://github.com/gaoyangz77/easyclaw/pull/15) - macOS Dock/托盘图标问题 | OPEN | 是（PR #15） |

**说明**：本日无新增严重 Bug。图片上传问题 (#13) 已关闭，macOS 图标问题已有对应修复 PR。

---

## 6. 功能请求与路线图信号

### 本日功能相关动态

- **PR #15**：修复 macOS Dock 和系统托盘中的应用图标——属于 UI/UX 优化类需求，表明项目在完善 macOS 平台适配。

**路线图信号**：从近期更新（连续发布 v1.6.4 和 v1.6.5）来看，项目当前处于小步快跑阶段，重点在于修复已知问题和完善 macOS 平台体验。尚无大规模功能更新的明确信号。

---

## 7. 用户反馈摘要

### 核心痛点

1. **图片上传功能异常**：用户反馈在对话中选择图片时，模型无法接收图片内容。这直接影响多模态交互的核心功能体验。
2. **macOS 兼容性困扰**：部分 macOS 用户遇到 Gatekeeper 拦截提示，不熟悉命令行操作的用户可能误认为应用损坏。

### 用户场景

- 用户尝试使用 EasyClaw 进行多模态对话（图片+文字），但图片无法被模型识别
- macOS 新用户首次安装时遇到安全警告，不知如何解决

### 满意之处

- Issue #13 能在短时间内关闭，说明维护者响应积极
- 版本说明文档详尽，提供了针对 Gatekeeper 问题的逐步解决方案

---

## 8. 待处理积压

| 类型 | # | 标题 | 状态 | 建议 |
|------|---|------|------|------|
| **PR** | [#15](https://github.com/gaoyangz77/easyclaw/pull/15) | fix: app icon in macos dock and system tray | OPEN | 建议尽快合并，优化 macOS 用户体验 |

**提醒**：PR #15 已开放一日，建议优先处理合并，以关闭开发分支。

---

*报告生成时间：2026-03-11 | 数据来源：GitHub (gaoyangz77/easyclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期：** 2026-03-11  
**数据来源：** github.com/netease-youdao/LobsterAI

---

## 1. 今日速览

过去 24 小时内，LobsterAI 项目保持较高活跃度：**13 条新开 Issues** 聚焦于功能体验问题（如 Token 超限、界面显示、通知失效），**8 条 PR 更新** 中 6 条已被合并/关闭，项目持续迭代。社区反馈热烈，本地部署兼容性、IM 渠道集成、UI/UX 稳定性为当前核心关注点。整体项目健康度良好，合并效率较高（75% PR 已关闭），但存在部分用户报告的阻塞性问题待解。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日共有 **6 条 PR 被合并/关闭**，项目功能持续推进：

| PR | 状态 | 描述 |
|---|---|---|
| [#346](https://github.com/netease-youdao/LobsterAI/pull/346) | CLOSED | **OpenClaw 插件预安装系统 + IM 渠道配置同步**：新增通用插件预安装机制，在 `package.json` 中声明插件并自动下载/打包；同时预装并自动同步 4 个官方 IM 渠道插件配置（DingTalk、飞书、QQ、企业微信） |
| [#364](https://github.com/netease-youdao/LobsterAI/pull/364) | CLOSED | **飞书 IM 支持 OpenClaw**：新增飞书即时通讯渠道集成 |
| [#363](https://github.com/netease-youdao/LobsterAI/pull/363) | CLOSED | **Discord IM 支持实现**：新增 Discord 渠道集成 |
| [#359](https://github.com/netease-youdao/LobsterAI/pull/359) | CLOSED | **Telegram 相关的 Bugfix**：修复 Telegram 集成中的问题 |
| [#356](https://github.com/netease-youdao/LobsterAI/pull/356) | CLOSED | **Telegram OpenClaw 实现**：Telegram 渠道功能开发 |
| [#355](https://github.com/netease-youdao/LobsterAI/pull/355) | CLOSED | **聊天翻页功能**：在聊天界面添加对话轮次上下翻页功能 |

**待合并 PR（2条）：**
- [#5](https://github.com/netease-youdao/LobsterAI/pull/5) - ESLint 规则配置与未使用变量修复
- [#367](https://github.com/netease-youdao/LobsterAI/pull/367) - MCP JSON 配置导入修复

---

## 4. 社区热点

以下 Issues 讨论活跃度较高（按评论数排序）：

| Issue | 评论 | 核心诉求 |
|---|---|---|
| [#370](https://github.com/netease-youdao/LobsterAI/issues/370) | 1 | **Token 超限问题**：用户输入简短文本即报 "8961 input tokens" 错误，涉及模型上下文长度配置问题 |
| [#368](https://github.com/netease-youdao/LobsterAI/issues/368) | 2 | **Ubuntu 24.04 deb 安装后界面空白**：自定义 deb 包安装后 UI 无显示，疑似兼容性问题 |
| [#357](https://github.com/netease-youdao/LobsterAI/issues/357) | 2 | **AI 读取图片卡死**：每次让 AI 读取图片都会出现卡死情况 |
| [#360](https://github.com/netease-youdao/LobsterAI/issues/360) | 1 | **本地模型调用失败**：本地部署 qwen3_235b 返回 502 错误（ERR_EMPTY_RESPONSE） |
| [#120](https://github.com/netease-youdao/LobsterAI/issues/120) | 1 | **企业微信渠道需求**：长期需求，已在 #346 PR 中实现 |

**分析：** 用户反馈集中于三大类问题：
1. **本地部署兼容性**（Ubuntu 系统、本地模型调用）
2. **Token/上下文处理异常**（#370 可能是严重 bug）
3. **IM 渠道通知失效**（定时任务钉钉通知）

---

## 5. Bug 与稳定性

以下 Bug 按严重程度排列：

| Issue | 严重度 | 描述 | Fix 状态 |
|---|---|---|---|
| [#370](https://github.com/netease-youdao/LobsterAI/issues/370) | **高** | 输入简短文本即报 8961 tokens，疑似 Token 计算错误或上下文泄漏 | 待 Fix |
| [#357](https://github.com/netease-youdao/LobsterAI/issues/357) | **高** | AI 读取图片必卡死，功能完全不可用 | 待 Fix |
| [#360](https://github.com/netease-youdao/LobsterAI/issues/360) | **中** | 本地模型调用返回 502，影响本地部署用户 | 待 Fix |
| [#368]( Ubuntu 安装问题) | **中** | Ubuntu 24.04 deb 安装后界面空白 | 待 Fix |
| [#358](https://github.com/netease-youdao/LobsterAI/issues/358) | **中** | 任务未跑完就显示完成，疑似任务状态判断错误 | 待 Fix |
| [#361](https://github.com/netease-youdao/LobsterAI/issues/361) | **低** | 聊天界面无法显示图片 | 待 Fix |
| [#366](https://github.com/netease-youdao/LobsterAI/issues/366) | **低** | Gateway 端口配置问题 | 待 Fix |

> 注：暂无 Fix PR 关联上述 Bug。

---

## 6. 功能请求与路线图信号

以下功能需求具有纳入下一版本的潜力（结合已有 PR 判断）：

| Issue | 需求 | 已有相关 PR |
|---|---|---|
| [#365](https://github.com/netease-youdao/LobsterAI/issues/365) | **添加 LM-Studio 支持**（本地模型服务） | 无直接 PR，可作为本地模型扩展 |
| [#120](https://github.com/netease-youdao/LobsterAI/issues/120) | **企业微信渠道** | 已在 #346 中实现（PR 已合并） |
| [#369](https://github.com/netease-youdao/LobsterAI/issues/369) | **定时任务钉钉通知** | 需修复通知逻辑 |
| [#362](https://github.com/netease-youdao/LobsterAI/issues/362) | **腾讯 Code Plan 连接** | 无直接 PR |
| [#320](https://github.com/netease-youdao/LobsterAI/issues/320) | **多 Agent 代理配置** | 无直接 PR |

**路线图信号：**
- **IM 渠道完善**：飞书、Discord、Telegram 已合并，企业微信已在 #346 中支持，下一步可能是腾讯系（#362）或通知功能增强（#369）
- **本地模型支持**：LM-Studio 支持请求出现（#365），结合 #360 本地模型调用问题，需优化本地部署兼容性

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的关键用户痛点与场景：

**用户痛点：**
1. **功能不可用**（#357 图片读取卡死、#370 Token 异常）—— 用户明确表示核心功能无法使用
2. **本地部署困难**（#360、#368）—— Ubuntu 24.04 兼容性问题、本地模型调用失败
3. **通知失效**（#369）—— 定时任务钉钉通知突然失效，影响生产使用

**使用场景：**
- 多 Agent 并行任务（#320）
- 本地私有模型部署（#360、#365）
- IM 渠道集成（飞书、Discord、Telegram、钉钉、企业微信）

**满意点：**
- IM 渠道集成持续丰富（近期多个 PR 合并）
- 聊天翻页功能上线（#355）

---

## 8. 待处理积压

以下 Issue 长期未响应或重要但暂无 Fix PR：

| Issue | 积压时长 | 描述 |
|---|---|---|
| [#120](https://github.com/netease-youdao/LobsterAI/issues/120) | ~13 天（2026-02-26） | 企业微信渠道需求 → **已在 #346 中实现，建议关闭** |
| [#320](https://github.com/netease-youdao/LobsterAI/issues/320) | ~5 天（2026-03-06） | 多 Agent 代理配置需求 |
| [#354](https://github.com/netease-youdao/LobsterAI/issues/354) | 1 天 | 循环卡死无法清除记忆 |

**建议：** 
- #120 可标记为已解决（PR #346 已合并）
- #320、#354 建议尽快响应，#354 涉及用户体验阻塞

---

*报告生成时间：2026-03-11*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-11)

## 1. 今日速览

过去 24 小时内，ZeptoClaw 项目保持极高活跃度：**11 个 Issues 全部已关闭**，**18 个 PR 中 8 个已合并/关闭**。项目在 CLI 功能完善、配置系统优化、WhatsApp 原生支持等方向均取得显著进展。发布 3 个版本 (v0.7.2-v0.7.4)，迭代节奏紧凑。当前代码库处于高度健康状态，无待处理的新开 Issues，合并的 PR 涵盖了从特性功能到依赖更新的全栈改进。

---

## 2. 版本发布

### v0.7.4
**发布日期**: 2026-03-10

**更新内容**:
- **feat**: 原生 WhatsApp Web 渠道支持 via wa-rs (替换失效的 whatsmeow-bridge)

**Full Changelog**: https://github.com/qhkm/zeptoclaw/compare/v0.7.3...v0.7.4

---

### v0.7.3
**发布日期**: 2026-03-10

**更新内容**:
- **feat(auth)**: 自动导入 Claude CLI 凭证作为降级方案

**Full Changelog**: https://github.com/qhkm/zeptoclaw/compare/v0.7.2...v0.7.3

---

### v0.7.2
**发布日期**: 2026-03-10

**更新内容**:
- **feat**: 新增 grep、find、统一 diff 编辑工具
- **fix(onboard)**: API 密钥验证时将 HTTP 429 视为有效响应

**Full Changelog**: https://github.com/qhkm/zeptoclaw/compare/v0.7.1...v0.7.2

> ⚠️ **迁移注意事项**: WhatsApp Web 特性通过 `--features whatsapp-web` 特性门控，默认二进制不受影响。

---

## 3. 项目进展

| PR | 状态 | 关键内容 |
|---|---|---|
| [#294](https://github.com/qhkm/zeptoclaw/pull/294) | ✅ 已合并 | 原生 WhatsApp Web 渠道 via wa-rs |
| [#315](https://github.com/qhkm/zeptoclaw/pull/315) | ✅ 已合并 | 新增 `zeptoclaw uninstall` 命令 |
| [#314](https://github.com/qhkm/zeptoclaw/pull/314) | ✅ 已合并 | 修复配置验证器与运行时 schema 同步 |
| [#313](https://github.com/qhkm/zeptoclaw/pull/313) | ✅ 已合并 | CLI agent 模式默认 warn 级日志 |
| [#311](https://github.com/qhkm/zeptoclaw/pull/311) | ✅ 已合并 | 模型-提供者兼容性预检查 |
| [#306](https://github.com/qhkm/zeptoclaw/pull/306) | ✅ 已合并 | 新增 `zeptoclaw config reset` 命令 |
| [#290](https://github.com/qhkm/zeptoclaw/pull/290) | ✅ 已合并 | 自动导入 Claude CLI 凭证 |
| [#293](https://github.com/qhkm/zeptoclaw/pull/293) | ✅ 已合并 | onborad 时将 HTTP 429 视为有效密钥 |

**进展概述**: 今日项目在 **CLI 工具链完善** (uninstall/config reset/logging)、**配置系统健壮性** (validator schema/模型兼容性)、**渠道扩展** (WhatsApp Web 原生支持) 三个维度同步推进，8 个 PR 全部高质量合并。

---

## 4. 社区热点

| Issue/PR | 热度 | 链接 |
|---|---|---|
| #288: Native WhatsApp Web support | 2 评论 | [Issue](https://github.com/qhkm/zeptoclaw/issues/288) |
| #307: `zeptoclaw uninstall` command | 1 评论 | [Issue](https://github.com/qhkm/zeptoclaw/issues/307) |
| #295: Threads publishing skill | 1 评论 | [Issue](https://github.com/qhkm/zeptoclaw/issues/295) |
| #291: rate-limited API key validation 测试覆盖 | 1 评论 | [Issue](https://github.com/qhkm/zeptoclaw/issues/291) |

**热点分析**:
- **WhatsApp Web 原生支持** (#288) 讨论热度最高，社区对废弃的 whatsmeow-bridge 替换方案期待已久，该功能已在 v0.7.4 中落地
- **CLI 功能完善** (uninstall/config reset) 获得持续关注，反映用户对完整 CLI 工具链的诉求
- **Meta Threads 发布技能** (#295) 标志着项目向多平台社交媒体自动化扩展

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | Fix PR |
|---|---|---|---|
| **P1-Critical** | #310: 配置验证器拒绝运行时有效字段 (tunnel/timezone/tool_timeout_secs) | ✅ 已关闭 | [#314](https://github.com/qhkm/zeptoclaw/pull/314) |
| **P2-High** | #312: CLI agent 模式日志噪音过多 | ✅ 已关闭 | [#313](https://github.com/qhkm/zeptoclaw/pull/313) |
| **P2-High** | #291: rate-limited API key 验证缺少回归测试 | ✅ 已关闭 | [#293](https://github.com/qhkm/zeptoclaw/pull/293) |
| **P2-High** | #292: 首次 onboard 时 rate limit 错误提示混乱 | ✅ 已关闭 | [#293](https://github.com/qhkm/zeptoclaw/pull/293) |

**稳定性评估**: 今日无未修复的 Bug 遗留。关键配置验证逻辑和 CLI 日志问题已通过 PR #314/#313 修复并合入主干。

---

## 6. 功能请求与路线图信号

| 功能请求 | 链接 | 关联 PR/状态 |
|---|---|---|
| 新增 `zeptoclaw uninstall` 命令 | [#307](https://github.com/qhkm/zeptoclaw/issues/307) | ✅ 已合并 #315 |
| 新增 `zeptoclaw config reset` 命令 | [#305](https://github.com/qhkm/zeptoclaw/issues/305) | ✅ 已合并 #306 |
| 模型-提供者兼容性验证 | [#309](https://github.com/qhkm/zeptoclaw/issues/309) | ✅ 已合并 #311 |
| Meta Threads 发布 skill | [#295](https://github.com/qhkm/zeptoclaw/issues/295) | ✅ 已关闭 |
| WhatsApp Web 原生支持 | [#288](https://github.com/qhkm/zeptoclaw/issues/288) | ✅ 已合并 #294 |

**路线图信号**:
- **CLI 工具链完善**: uninstall/config reset 已落地，下一阶段可能聚焦于 CLI 状态管理
- **多渠道扩展**: WhatsApp Web 已实现，Threads skill 已在规划，暗示社交媒体自动化是重点方向
- **配置系统强化**: 模型-提供者兼容性检查、验证器 schema 同步，表明配置层是近期优化重点

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的关键痛点：

1. **API 密钥验证体验**:
   - 新用户首次运行 `zeptoclaw onboard` 时遭遇 HTTP 429 会被误判为"密钥无效"
   - 实际是服务端的速率限制，而非凭证问题 → 已通过 #293 修复

2. **配置字段识别**:
   - 用户报告 `tunnel`、`agents.defaults.timezone` 等有效字段被配置验证器拒绝
   - 验证器 schema 与运行时类型不同步 → 已通过 #314 修复

3. **CLI 日志噪音**:
   - 运行 `zeptoclaw agent -m "testing"` 时 info 级日志过载，影响调试体验
   - 应为 CLI 交互模式提供更简洁的输出 → 已通过 #313 修复

4. **WhatsApp 渠道可用性**:
   - 原有 `whatsapp.rs` 依赖不存在的外部二进制，用户无法使用 WhatsApp 频道
   - 强烈需要原生替代方案 → 已通过 v0.7.4 实现

---

## 8. 待处理积压

**无积压 Issues**: 今日 11 个 Issues 全部关闭，无长期未响应的遗留项。

**待合并 PRs** (10 个 Open):
| PR | 作者 | 内容 |
|---|---|---|
| [#287](https://github.com/qhkm/zeptoclaw/pull/287) | @taqtiqa-mark | Dev tools for consistent pre-PR state |
| [#301](https://github.com/qhkm/zeptoclaw/pull/301) | dependabot[bot] | bump chrono 0.4.43 → 0.4.44 |
| [#298](https://github.com/qhkm/zeptoclaw/pull/298) | dependabot[bot] | bump anyhow 1.0.101 → 1.0.102 |
| [#304](https://github.com/qhkm/zeptoclaw/pull/304) | dependabot[bot] | bump rustls 0.23.36 → 0.23.37 |
| [#303](https://github.com/qhkm/zeptoclaw/pull/303) | dependabot[bot] | bump actions/download-artifact 7.0.0 → 8.0.0 |
| [#302](https://github.com/qhkm/zeptoclaw/pull/302) | dependabot[bot] | bump actions/upload-artifact 6.0.0 → 7.0.0 |
| [#300](https://github.com/qhkm/zeptoclaw/pull/300) | dependabot[bot] | bump codecov/codecov-action |
| [#299](https://github.com/qhkm/zeptoclaw/pull/299) | dependabot[bot] | bump @types/node 25.2.0 → 25.3.0 |
| [#296](https://github.com/qhkm/zeptoclaw/pull/296) | dependabot[bot] | bump jsonwebtoken 9.3.1 → 10.3.0 |
| [#297](https://github.com/qhkm/zeptoclaw/pull/297) | dependabot[bot] | bump chromiumoxide 0.9.0 → 0.9.1 |

> 📌 **提醒**: #287 为贡献者工具类 PR，建议优先评审；其余 9 个为依赖版本更新，可批量处理。

---

*报告生成时间: 2026-03-11 | 数据来源: GitHub qhkm/zeptoclaw*

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-11)

## 今日速览

过去24小时内，NanoBot 项目保持高度活跃状态：共产生 **35 条 Issues**（其中新开/活跃 28 条）和 **67 条 PRs**（其中待合并 54 条）。尽管无新版本发布，但社区贡献热情高涨，PR 合并/关闭数达 13 条，多项功能增强与 bug 修复正在推进中。整体项目处于快速迭代期，功能覆盖与稳定性并重。

---

## 版本发布

**无新版本发布**

过去24小时内未检测到新版本标签更新。

---

## 项目进展

### 今日合并/关闭的重要 PRs

| PR # | 状态 | 标题 | 推进内容 |
|------|------|------|----------|
| [#1857](https://github.com/HKUDS/nanobot/pull/1857) | ✅ CLOSED | resolve PR #1836 merge conflicts | 解决 memory consolidation 相关合并冲突，保留 provider-specific tool_choice 行为并添加重试支持测试 |
| [#1853](https://github.com/HKUDS/nanobot/pull/1853) | ✅ CLOSED | Adding nvidia escalation tool | 集成 nvidia/Qwen3-Nemotron-32B-RLBFF 工具 |

### 值得关注的 Open PRs（功能推进中）

| PR # | 标题 | 预计影响 |
|------|------|----------|
| [#1854](https://github.com/HKUDS/nanobot/pull/1854) | 统一守护进程网关语义层 | 跨平台(Mac/Linux/Windows)统一后台运行体验 |
| [#1855](https://github.com/HKUDS/nanobot/pull/1855) | 升级 litellm 至 1.82.1 | 支持 Moonshot(Kimi K2.5) 图像输入 |
| [#1690](https://github.com/HKUDS/nanobot/pull/1690) | providers_manager 多模型支持 | 根据任务自动选择 LLM，支持 multimodal + image skills |
| [#1849](https://github.com/HKUDS/nanobot/pull/1849) | Provider endpoint rotation + failover | 多端点轮询 + 冷却故障转移机制 |
| [#111](https://github.com/HKUDS/nanobot/pull/111) | 添加 Google Vertex AI provider | 新增 Google Cloud Vertex AI LLM 支持 |

---

## 社区热点

### 讨论最活跃的 Issues（按评论数排序）

1. **[#1617](https://github.com/HKUDS/nanobot/issues/1617)** - **说明文档无中文** (7 评论)
   - 作者：@suxmao
   - 诉求：希望项目提供中文 README 文档
   - 热度分析：反映出项目在中国开发者社区的关注度提升，多语言本地化需求迫切

2. **[#123](https://github.com/HKUDS/nanobot/issues/123)** - **feat: Add Discord channel support** (6 评论)
   - 作者：@anchapin
   - 诉求：集成 Discord 频道支持，实现通过 Discord 与 AI 助手交互
   - 热度分析：Discord 是海外主流社区平台，需求旺盛；该功能已在 PR #24 中实现但缺乏测试覆盖

3. **[#1461](https://github.com/HKUDS/nanobot/issues/1461)** - **统一守护进程网关语义层** (4 评论)
   - 作者：@xcosmosbox
   - 诉求：升级 nanobot gateway 为默认后台守护进程，提供统一的 restart/status/logs 控制体验
   - 对应 PR：[#1854](https://github.com/HKUDS/nanobot/pull/1854)

4. **[#1692](https://github.com/HKUDS/nanobot/issues/1692)** - **Telegram bot answers twice** (4 评论, 3 👍)
   - 作者：@aiko929
   - 问题：机器人回复两次，一次带 Markdown 渲染一次不带
   - 严重程度：中等，影响用户体验

5. **[#1819](https://github.com/HKUDS/nanobot/issues/1819)** - **建议增加微信(Wechat)支持** (4 评论)
   - 作者：@firehuman100
   - 诉求：希望支持通过微信与 nanobot 交互
   - 热度分析：中国用户核心需求，与 Issue #1617 形成呼应

6. **[#1815](https://github.com/HKUDS/nanobot/issues/1815)** - **飞书云文档、知识库支持** (4 评论)
   - 作者：@ZZFFFF
   - 诉求：希望支持飞书文档生态

---

## Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）

| Issue # | 标题 | 严重程度 | 状态 | 已有 Fix PR |
|---------|------|----------|------|-------------|
| [#1817](https://github.com/HKUDS/nanobot/issues/1817) | 🔒 Security: restrictToWorkspace bypass using ~ paths | **高** | OPEN | [#1845](https://github.com/HKUDS/nanobot/pull/1845) |
| [#1783](https://github.com/HKUDS/nanobot/issues/1783) | Codex provider: hardcoded 60s timeout causes silent failures | **高** | OPEN | 无 |
| [#1834](https://github.com/HKUDS/nanobot/issues/1834) | Deepseek Reasoner 下 spawn 工具报错：缺少 reasoning_content | **中** | OPEN | [#1848](https://github.com/HKUDS/nanobot/pull/1848), [#1846](https://github.com/HKUDS/nanobot/pull/1846) |
| [#1692](https://github.com/HKUDS/nanobot/issues/1692) | Telegram bot 回复两次 | **中** | OPEN | 无 |
| [#1823](https://github.com/HKUDS/nanobot/issues/1823) | Memory consolidation 不继承 agent temperature/maxTokens | **中** | OPEN | [#1825](https://github.com/HKUDS/nanobot/pull/1825), [#1847](https://github.com/HKUDS/nanobot/pull/1847) |
| [#1829](https://github.com/HKUDS/nanobot/issues/1829) | 添加命令后不生效 | **低** | OPEN | 无 |
| [#1833](https://github.com/HKUDS/nanobot/issues/1833) | Received SIGTERM, 程序无故退出 | **中** | OPEN | 无 |
| [#1826](https://github.com/HKUDS/nanobot/issues/1826) | docker compose run 后 ssh 无法连接 | **低** | OPEN | 无 |

### 稳定性问题信号

- **Cron 定时任务**：Issue #1828 报告 cron 任务无法触发，Issue #1837 提议添加 run history tracking
- **Matrix 渠道**：Issue #1300、#1851 报告 Matrix 认证错误和问题
- **进程中断**：Issue #1762 报告任务执行期间无法中断

---

## 功能请求与路线图信号

### 高需求功能（多用户请求，可能纳入下一版本）

| 功能 | 对应 Issue/PR | 需求来源 |
|------|---------------|----------|
| **微信(WeChat)支持** | #1819 | 中国开发者社区 |
| **Discord 频道支持** | #123 (已实现缺测试) | 海外开发者社区 |
| **飞书云文档/知识库** | #1815 | 中文开发者 |
| **统一守护进程网关** | #1461 + #1854 | 跨平台用户 |
| **Google Vertex AI** | #111 | 企业用户 |
| **多模型自动选择** | #1690 | 高级用户 |
| **Endpoint 故障转移** | #1849 | 生产环境需求 |

### 架构改进方向（RFC）

- **Issue #97**: 核心架构改进提案（Memory, Security, Testing）- 6 👍 支持

---

## 用户反馈摘要

### 真实痛点与使用场景

1. **多平台用户体验不一致**：用户期望跨 Mac/Linux/Windows 使用统一命令体验（Issue #1461）
2. **中国本地化需求旺盛**：文档中文、微信/飞书支持请求集中爆发，反映出项目在华语区影响力扩大
3. **记忆功能待优化**：长期记忆维护方式（SQLite vs 纯文本）、MEMORY.md 开关控制等议题活跃（Issue #1774, #1831, #1818）
4. **安全意识提升**：restrictToWorkspace 路径绕过漏洞报告（#1817）表明用户安全审计参与度提高
5. **定时任务可靠性**：cron 任务失败无提示、无法中断正在执行的任务等影响生产使用

### 满意度指标

- 👍 最高 👍 Issue #1617 (文档中文) - 1
- 👍 Issue #97 (架构改进 RFC) - 6
- 👍 Issue #1692 (Telegram 重复回复) - 3

---

## 待处理积压

### 长期未响应的重要 Issue

| Issue # | 标题 | 创建时间 | 状态 | 风险 |
|---------|------|----------|------|------|
| [#97](https://github.com/HKUDS/nanobot/issues/97) | RFC: 核心架构改进提案 | 2026-02-04 | OPEN | 路线图方向需明确 |
| [#123](https://github.com/HKUDS/nanobot/issues/123) | Discord 支持 | 2026-02-04 | OPEN | 功能已实现待测试覆盖 |
| [#640](https://github.com/HKUDS/nanobot/issues/640) | 任务完成后无响应 | 2026-02-14 | OPEN | 稳定性问题 |

### 建议关注

- **PR #111**: Google Vertex AI 支持 - 长期未合并，建议明确路线图
- **Issue #1300**: Matrix 渠道问题 - 多次更新仍未完全解决

---

*报告生成时间：2026-03-11 | 数据来源：GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-11)

## 1. 今日速览

PicoClaw 项目今日保持高度活跃，共处理 **32 条 Issue 更新** 和 **82 条 PR 更新**，并发布了一个新的夜间构建版本 (v0.2.1-nightly.20260311.9cd2d218)。社区讨论围绕 Agent 重构、Telegram 频道增强和渠道功能扩展展开，多个重要功能的 PR 正在积极推进中。项目整体向前推进态势明显，合并率达 45%（37/82），但同时积压的待合并 PR 仍有 45 个，可能需要关注审查效率。

---

## 2. 版本发布

### 🔥 新版本发布

**v0.2.1-nightly.20260311.9cd2d218** (Nightly Build)

| 项目 | 详情 |
|------|------|
| 发布时间 | 2026-03-11 |
| 类型 | Nightly Build |
| Git Tag | v0.2.1-nightly.20260311.9cd2d218 |

**更新内容 (Changelog):**
- **PR #1207**: 新增 Debug 模式不截断输出的功能 (`feat/debug-mode-no-truncate`)
- **PR #1291**: 新增 Telegram Forum Topics 支持 (`feat/telegram-forum-topics`)
- **Bug 修复**: 优化了 debug 文档说明

**Full Changelog**: https://github.com/sipeed/picoclaw/compare/v0.2.1...v0.2.1-nightly.20260311.9cd2d218

> ⚠️ **注意**: 这是一个 nightly 构建版本，可能不稳定，建议仅在测试环境中使用。

---

## 3. 项目进展

### ✅ 已合并/关闭的重要 PR

| PR | 类型 | 描述 | 状态 |
|----|------|------|------|
| [#1336](https://github.com/sipeed/picoclaw/pull/1336) | enhancement | **QQ 频道支持**：新增 Markdown/图片/音频/视频/文件回复功能 | CLOSED |
| [#915](https://github.com/sipeed/picoclaw/pull/915) | enhancement | **多 Agent Teams 架构**：支持协调者分解复杂任务并委托子代理 | CLOSED |
| [#1301](https://github.com/sipeed/picoclaw/pull/1301) | bug fix | **配置修复**：支持中文逗号作为 `allow_from` 环境变量分隔符 | OPEN (待合并) |
| [#1302](https://github.com/sipeed/picoclaw/pull/1302) | docs | **文档改进**：增强 AGENTS.md 添加任务模式和技能发现指南 | OPEN |
| [#1304](https://github.com/sipeed/picoclaw/pull/1304) | enhancement | **Docker 镜像优化**：预装 curl、jq、git、python3 等开发工具 | OPEN |
| [#757](https://github.com/sipeed/picoclaw/pull/757) | bug fix | **Cron 修复**：修复定时任务触发后 Agent 响应未发送到频道的问题 | OPEN |
| [#747](https://github.com/sipeed/picoclaw/pull/747) | enhancement | **交互式命令模式**：新增 `:help/:usage` 命令和 token 使用追踪 | OPEN |

**推进的关键功能领域：**
- 🔌 **渠道扩展**: QQ 频道支持、Mattermost 频道支持、Telegram Forum Topics
- 🤖 **Agent 能力**: 多 Agent Teams 架构、交互式命令模式、技能自动注入
- 🐛 **稳定性修复**: Cron 响应丢失、配置解析中文逗号、round-robin 选模型偏移错误

---

## 4. 社区热点

### 🔥 今日讨论最活跃的 Issues

| Issue | 评论数 | 标题 | 类型 |
|-------|--------|------|------|
| [#1161](https://github.com/sipeed/picoclaw/issues/1161) | **14** | **[BUG] 如何正确配置 PicoClaw 使用本地 Ollama 模型？** | bug |
| [#1218](https://github.com/sipeed/picoclaw/issues/1218) | **12** | **[Agent refactor] 什么是 Agent** | enhancement |
| [#297](https://github.com/sipeed/picoclaw/issues/297) | **8** | **设计：创建可爱的皮皮虾(PicoClaw) Logo** | roadmap |
| [#1270](https://github.com/sipeed/picoclaw/issues/1270) | **7** | **[Feature] Telegram Forum Topics 支持** | enhancement |
| [#1278](https://github.com/sipeed/picoclaw/issues/1278) | **6** | **[Feature] Subagent 工具访问和继承支持** | enhancement |
| [#1316](https://github.com/sipeed/picoclaw/issues/1316) | **3** | **[Agent refactor] 事件驱动 Agent 循环，支持 hooks/interrupts/steering** | enhancement |

**热点分析：**
1. **Ollama 本地模型配置问题** (14 条评论): 用户对本地大模型集成的需求强烈，说明 PicoClaw 的"本地化部署"定位受到关注
2. **Agent 重构** (Issue #1218, #1316): 社区对 Agent 架构的长期发展方向高度关注，正在讨论定义 `SOUL.md` 和 `AGENT.md` 文档，以及事件驱动循环设计
3. **渠道功能增强**: Telegram Forum Topics 和 Subagent 工具继承是两个重要的功能扩展方向

---

## 5. Bug 与稳定性

### 🐛 今日报告的 Bug（按严重程度排列）

| Issue | 严重程度 | 描述 | 状态 | Fix PR |
|-------|----------|------|------|--------|
| [#1161](https://github.com/sipeed/picoclaw/issues/1161) | **高** | Ollama 本地模型配置后 Agent 运行但不产生响应 | OPEN | - |
| [#1287](https://github.com/sipeed/picoclaw/issues/1287) | **高** | 工具调用失败：JSON 解析错误 | OPEN | - |
| [#1307](https://github.com/sipeed/picoclaw/issues/1307) | **中** | 飞书认证 12 小时后过期 | OPEN | [#1318](https://github.com/sipeed/picoclaw/pull/1318) |
| [#1298](https://github.com/sipeed/picoclaw/issues/1298) | **中** | Telegram 斜杠命令 (/help, /model 等) 失效 | OPEN | - |
| [#1323](https://github.com/sipeed/picoclaw/issues/1323) | **中** | Telegram 无限发送 "typing" 状态 | OPEN | - |
| [#1280](https://github.com/sipeed/picoclaw/issues/1280) | **低** | IRC 配置使用中文逗号导致解析失败 | OPEN | [#1301](https://github.com/sipeed/picoclaw/pull/1301) |
| [#1281](https://github.com/sipeed/picoclaw/issues/1281) | **低** | 飞书消息不显示被@用户和发送者的 user_id | OPEN | - |

**稳定性评估：**
- 🔴 **高优先级**: Ollama 本地模型集成问题影响核心功能，已吸引 14 条讨论但尚未解决
- 🟡 **已有 Fix**: 飞书 token 过期问题已提交 PR #1318，预计近期修复

---

## 6. 功能请求与路线图信号

### ✨ 今日重要功能请求

| Issue | 功能描述 | 优先级 | 相关 PR |
|-------|----------|--------|---------|
| [#1270](https://github.com/sipeed/picoclaw/issues/1270) | **Telegram Forum Topics 支持** | high | [#1291](https://github.com/sipeed/picoclaw/pull/1291) 已合并到 nightly |
| [#1278](https://github.com/sipeed/picoclaw/issues/1278) | **Subagent 工具继承支持** (read_file, write_file, exec 等) | medium | [#915](https://github.com/sipeed/picoclaw/pull/915) 已合并 |
| [#1328](https://github.com/sipeed/picoclaw/issues/1328) | **Telegram 原生表情回应** (低噪音确认) | low | - |
| [#1293](https://github.com/sipeed/picoclaw/issues/1293) | **Kimi Coding Provider 支持** | medium | - |
| [#1276](https://github.com/sipeed/picoclaw/issues/1276) | **企业微信长链接模式** (WebSocket) | medium | - |
| [#1288](https://github.com/sipeed/picoclaw/pull/1288) | **Mattermost 频道支持** | medium | OPEN |
| [#906](https://github.com/sipeed/picoclaw/issues/906) | **工具执行超时可配置** | medium | - |

**路线图信号：**
- ✅ **即将发布**: Telegram Forum Topics 已合并，可能在下一版本正式支持
- 🔄 **积极开发**: 多 Agent Teams 架构、QQ 频道支持、Mattermost 频道
- 📋 **规划中**: Agent 重构 (SOUL.md/AGENT.md 定义、事件驱动循环)

---

## 7. 用户反馈摘要

### 💬 用户痛点与需求提炼

**1. 本地模型集成困难**
> *"I am trying to configure PicoClaw to work with local models running in Ollama, but although the agent starts and appears to call the model, it does not produce a final response."*
> 
**核心诉求**: 用户希望开箱即用的本地大模型支持，尤其是 Ollama 集成需要更清晰的文档和配置指引。

**2. 渠道功能差距**
- 飞书 (Feishu) 存在认证过期、user_id 缺失等问题
- Telegram 用户期待 Forum Topics 和表情回应
- IRC 配置对中文用户不友好（逗号问题）

**3. Agent 能力扩展**
- 多个 Issue 讨论 Subagent 工具继承、团队协作、交互模式
- 用户对"可观测性"（事件驱动）有强烈需求

**4. 文档与 DX**
- WebUI 配置体验需优化
- Workspace 文件结构需改进（分离生成文件）

---

## 8. 待处理积压

### ⚠️ 需关注的长尾 Issue/PR

| 类型 | Issue/PR | 创建时间 | 状态 | 备注 |
|------|-----------|----------|------|------|
| Issue | [#297](https://github.com/sipeed/picoclaw/issues/297) Logo 设计 | 2026-02-16 | CLOSED | 8 条评论，已关闭 |
| Issue | [#1161](https://github.com/sipeed/picoclaw/issues/1161) Ollama 配置 | 2026-03-06 | OPEN | 14 条评论待解决 |
| Issue | [#1218](https://github.com/sipeed/picoclaw/issues/1218) Agent 定义 | 2026-03-07 | OPEN | 12 条评论，重要架构讨论 |
| PR | [#915](https://github.com/sipeed/picoclaw/pull/915) Teams 架构 | 2026-02-28 | CLOSED | 已合并 |
| PR | [#747](https://github.com/sipeed/picoclaw/pull/747) 交互模式 | 2026-02-25 | OPEN | 长期未合并 |
| PR | [#757](https://github.com/sipeed/picoclaw/pull/757) Cron 修复 | 2026-02-25 | OPEN | 重要 bug 修复 |

**建议行动：**
1. **优先解决**: Issue #1161 (Ollama 问题已讨论 5 天，需明确解决方案)
2. **加快合并**: PR #747, #757 (创建超 2 周，影响核心功能)
3. **持续推进**: Agent 重构路线图 (Issue #1218, #1316)

---

*报告生成时间: 2026-03-11 | 数据来源: GitHub PicoClaw Repository*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-11)

---

## 1. 今日速览

过去24小时，NanoClaw 项目保持高度活跃：**21条 Issues 更新**（11新开/活跃 + 10关闭），**38条 PR 更新**（21待合并 + 17已合并/关闭），整体呈现快速迭代态势。项目近期聚焦于四大核心能力建设：学习系统（会话搜索、结构化记忆、技能自创建）、安全加固（凭证代理硬化、OAuth token 刷新）、多渠道集成（WhatsApp、Gmail、Telegram）以及稳定性修复（PID锁文件、根用户权限兼容）。值得注意的是，项目在 Nerq Trust Index 评测中获得 92.1 分（A+），位列 Top 5，安全性与可信度获得第三方认可。

---

## 2. 版本发布

**本期无新版本发布**。最近发布记录为空，团队正专注于功能开发与缺陷修复，预计后续将有版本更新。

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR | 描述 | 状态 |
|---|---|---|
| [#931](https://github.com/qwibitai/nanoclaw/pull/931) | Add Telegram channel support with bot pool for agent swarm | 已关闭 |
| [#929](https://github.com/qwibitai/nanoclaw/pull/929) | fix: skip .env shadow mount on Apple Container (non-Docker runtimes) | 已关闭 |
| [#939](https://github.com/qwibitai/nanoclaw/pull/939) | fix: add PID lockfile to prevent multiple instances | 已关闭 |
| [#945](https://github.com/qwibitai/nanoclaw/pull/945) | feat: integrate @onecli-sh/sdk for container proxy configuration | 已关闭 |
| [#947](https://github.com/qwibitai/nanoclaw/pull/947) | Added codex support | 已关闭 |

### 待合并的高优先级 PRs

| PR | 描述 | 待审 |
|---|---|---|
| [#871](https://github.com/qwibitai/nanoclaw/pull/871) | fix: harden credential proxy using unconditional OAuth injection, streaming, per-request creds | 🔴 高优 |
| [#930](https://github.com/qwibitai/nanoclaw/pull/930) | fix: automatically refresh expired OAuth tokens from Claude Code credentials | 🔴 高优 |
| [#940](https://github.com/qwibitai/nanoclaw/pull/940) | fix: add PID lockfile to prevent multiple instances | 🔴 高优 |
| [#943](https://github.com/qwibitai/nanoclaw/pull/943) | fix: Apple Container networking and mount compatibility | 🔴 高优 |
| [#795](https://github.com/qwibitai/nanoclaw/pull/795) | feat: add /setup-secrets skill for sops+age .env encryption | 🟡 技能 |
| [#917](https://github.com/qwibitai/nanoclaw/pull/917) | feat: WhatsApp/Gmail channels, image vision, voice, PDF skills | 🟡 功能 |
| [#597](https://github.com/qwibitai/nanoclaw/pull/597) | feat: add Google Workspace MCP skill | 🟡 技能 |

**进展亮点**：多项安全与稳定性修复已进入 Review 阶段，包括 OAuth token 自动刷新、凭证代理硬化、多实例防护等，预计将在近期合并。

---

## 4. 社区热点

### 热门 Issues

| Issue | 标题 | 热度 |
|---|---|---|
| [#926](https://github.com/qwibitai/nanoclaw/issues/926) | Admin mode: intercept main-channel admin commands and add /capabilities read-only flow | 🔥 High |
| [#825](https://github.com/qwibitai/nanoclaw/issues/825) | fix(scheduler): once-task race condition — marked completed before fire handler runs | 🔥 Critical |
| [#865](https://github.com/qwibitai/nanoclaw/issues/865) | Using containers alone doesn't make you more secure | 🔥 High |
| [#924](https://github.com/qwibitai/nanoclaw/issues/924) | nanoclaw scored 92.1 (A+) on Nerq Trust Index | 🏆 荣誉 |

**热点分析**：

- **#926 管理员模式**：用户呼吁在主通道拦截管理员命令，增加 `/capabilities` 只读查询功能。这是 admin-mode 设计的第一阶段，链接了外部 Claude AI 的设计规范，表明项目正加强多租户/权限管理能力。
- **#825 调度器竞态条件**：这是 2026-03-08 "faking tool calls" 事故的根本原因。Issue 详细描述了 `reschedule_task()` 在 `handle_schedule_fired` 执行前即将任务标记为已完成的问题，引发社区对调度器健壮性的广泛关注。
- **#865 容器安全反思**：Issue 指出当前架构在多个位置过度信任容器，建议将脚本从 agent 层面抽离，这是对项目安全模型的重要审视。

---

## 5. Bug 与稳定性

### 本期报告的 Bug（按严重程度）

| Issue | 描述 | 严重程度 | Fix PR |
|---|---|---|---|
| [#825](https://github.com/qwibitai/nanoclaw/issues/825) | 调度器 once-task 竞态条件：任务在 fire handler 执行前被标记为已完成 | 🔴 Critical | 待提交 |
| [#941](https://github.com/qwibitai/nanoclaw/issues/941) | 不必要的 TypeScript 重新编译导致性能下降 | 🔴 High | 待提交 |
| [#777 (引用自 #942)](https://github.com/qwibitai/nanoclaw/issues/942) | 根用户运行时容器 EACCES/ENOENT 错误 | 🔴 High | [#942](https://github.com/qwibitai/nanoclaw/pull/942) 已提交 |
| [#693 (引用自 #940)](https://github.com/qwibitai/nanoclaw/issues/940) | 多实例运行导致重复响应和竞态条件 | 🟠 Medium | [#940](https://github.com/qwibitai/nanoclaw/pull/940) 已提交 |

**稳定性评估**：调度器竞态条件（#825）为 Critical 级别，是已知事故根因，需优先修复。性能相关问题（#941）影响用户体验，已进入排查阶段。根用户权限和多实例问题是历史积累的兼容性问题，相关 Fix PR 已就绪。

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

| Issue | 功能 | 优先级 | 相关 PR |
|---|---|---|---|
| [#907](https://github.com/qwibitai/nanoclaw/issues/907) | Epic: nanoclaw-learning-system (FTS5搜索、结构化记忆、技能自创建、显式记忆命令) | 🔴 High | #908, #909, #910, #911, #912, #913 |
| [#926](https://github.com/qwibitai/nanoclaw/issues/926) | Admin mode: /capabilities read-only flow | 🔴 High | - |
| [#865](https://github.com/qwibitai/nanoclaw/issues/865) | 容器安全加固：重新审视信任模型 | 🔴 High | #871 (凭证代理硬化) |

### 路线图信号

1. **学习系统 Epic (#907)**：四项自学习能力构成统一 Epic，已有 6+ 个子任务和对应 PR，预计将成为下一版本的核心特性。
2. **多渠道集成**：WhatsApp/Gmail (#917)、Telegram (#931)、Google Workspace MCP (#597) 三个 PR 并行推进，多渠道能力即将成熟。
3. **安全硬化**：从凭证代理 (#871) 到 OAuth 刷新 (#930) 再到容器安全 (#865)，安全能力持续加强，符合企业级应用需求。

---

## 7. 用户反馈摘要

### 正面反馈

- **#924**：社区庆祝 NanoClaw 在 Nerq Trust Index 获得 92.1 分（A+），位列 Top 5 AI agents。用户可添加信任徽章到 README。
- **#795**：`/setup-secrets` 技能受好评，用户可在本地使用 sops+age 加密 .env 文件，无需外部服务。

### 痛点与需求

- **#941 用户 vzaliva**：反馈 Mac 原生容器环境下响应缓慢，经分析发现是 TypeScript 不必要的重新编译导致。
- **#777 用户报告**：Linux 根用户环境下容器崩溃或无法处理后续消息，已由 #942 修复。
- **#693 用户报告**：通过 distrobox-enter 重启时旧进程未退出，导致双实例运行，已由 #940 修复。
- **#865 用户 calebfaruki**：提出容器安全架构反思，认为当前过度信任容器端，建议加强 host 侧验证。

---

## 8. 待处理积压

### 长期未响应的 Issues

| Issue | 标题 | 创建时间 | 状态 | 提醒 |
|---|---|---|---|---|
| [#865](https://github.com/qwibitai/nanoclaw/issues/865) | Using containers alone doesn't make you more secure | 2026-03-09 | Open | 🔴 高优先安全议题，建议维护者关注 |
| [#825](https://github.com/qwibitai/nanoclaw/issues/825) | fix(scheduler): once-task race condition | 2026-03-08 | Open | 🔴 Critical，已关联事故，需优先修复 |

### 待Review的高优先级PRs

| PR | 描述 | 提交时间 | 建议 |
|---|---|---|---|
| [#871](https://github.com/qwibitai/nanoclaw/pull/871) | 凭证代理硬化 | 2026-03-09 | 建议优先 Review，修复 #865 中的凭证暴露漏洞 |
| [#930](https://github.com/qwibitai/nanoclaw/pull/930) | OAuth token 自动刷新 | 2026-03-10 | 解决每日 401 错误，建议优先合并 |

---

*报告生成时间：2026-03-11 | 数据来源：GitHub qwibitai/nanoclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-03-11)

## 1. 今日速览

IronClaw 项目在 2026-03-11 保持高度活跃。过去 24 小时内共处理 **50 条 Issues**（新开/活跃 35，关闭 15）和 **50 条 PRs**（待合并 28，已合并/关闭 22）。版本 **v0.17.0** 于昨日发布，带来 LLM provider 参数过滤和任务持久化等核心改进。但值得注意的是，今日出现大量由 Staging CI 自动生成的 CRITICAL/HIGH 级别 bug 报告（主要关于并发安全、Token 预算执行不完整等），表明项目正经历大规模代码审查和质量加固阶段。

---

## 2. 版本发布

### v0.17.0 发布 (2026-03-10)

**Release Notes 概要：**

| 类别 | 内容 | 相关 PR |
|------|------|---------|
| **LLM** | 新增 per-provider unsupported parameter filtering，支持根据不同 LLM Provider 自动过滤不支持的参数 | #809, #749, #728 |
| **核心功能** | 在 `save_job` 中持久化 `user_id`，并在 routine 执行时暴露 `job_id` | #709 |
| **CI/CD** | 新增 chained promotion PRs 机制，优化 staging → main 的自动化发布流程 | — |

> 🔗 Release 链接: https://github.com/nearai/ironclaw/releases/tag/v0.17.0

---

## 3. 项目进展

### 今日合并/关闭的重要 PRs

| PR # | 标题 | 状态 | 贡献者 | 意义 |
|------|------|------|--------|------|
| **#903** | Import OpenClaw memory, history and settings | ✅ CLOSED | @nickpismenkov | 支持从 OpenClaw 迁移数据，增强迁移体验 |
| **#848** | fix(safety): allow empty string tool params | ✅ CLOSED | @micsama | 修复 `memory_tree` 接受空字符串路径的验证问题 |
| **#800** | refactor: unify three agentic loops into single AgenticLoop engine | ✅ CLOSED | @qbit-glitch | 将三个重复的 agentic loop 统一为单一引擎 (205 行共享代码) |
| **#790** | feat: add channel-relay integration for Slack | ✅ CLOSED | @PierreLeGuen | 新增 Slack relay 通道集成，支持 OAuth 流程 |
| **#898** | merge: resolve main → staging conflicts | ✅ CLOSED | @henrypark133 | 解决合并冲突，统一 staging 的参数过滤逻辑 |

### 正在推进的重大功能

| PR # | 标题 | 状态 | 范围 | 预计影响 |
|------|------|------|------|----------|
| **#757** | Add generic host-verified /webhook/tools/{tool} ingress | 🔵 OPEN | agent, web, wasm, tool | 新增通用 Webhook 入口，支持 HMAC 验证 |
| **#844** | feat(cli): add `routine` subcommand for managing scheduled routines | 🔵 OPEN | cli, docs | CLI 管理定时任务，支持 list/create/edit/enable/disable/delete/history |
| **#905** | fix: release lock guards before awaiting channel send | 🔵 OPEN | 多文件 | **修复 CRITICAL 并发问题**：解决 RwLock 持有期间 await 导致的阻塞 |
| **#822** | feat(doctor): expand diagnostics from 7 to 16 health checks | 🔵 OPEN | cli, docs | 扩展诊断检查，提前捕获配置错误 |

> 🔗 所有 PRs: https://github.com/nearai/ironclaw/pulls

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 点赞 | 状态 | 热点分析 |
|---------|------|--------|------|------|----------|
| **#67** | near.ai account is shoehorned in | **4** | **8** | CLOSED | 社区强烈要求移除 near.ai 账号强制要求，认为限制了项目受众。项目方需权衡开源友好性与商业目标。 |
| **#840** | onboard installs stale default WASM tool artifacts incompatible with host WIT 0.3.0 | 2 | 0 | OPEN | 新手安装时发现 WASM 工具与主机 WIT 版本不匹配，导致 `github` 和 `web-search` 工具无法加载。 |
| **#868** | [CRITICAL] Unsafe environment variable modification during SIGHUP with race condition | 2 | 0 | CLOSED | Staging CI 发现的严重并发安全问题，已在 PR #905 中修复。 |
| **#867** | [CRITICAL] Invalid default model gpt-5-mini does not exist in OpenAI API | 2 | 0 | CLOSED | 默认模型配置错误，需更新默认值。 |

> 🔗 全部 Issues: https://github.com/nearai/ironclaw/issues

---

## 5. Bug 与稳定性

### 按严重程度排列的今日 Bug 报告

#### 🔴 CRITICAL (需立即处理)

| Issue # | 问题描述 | 状态 | 修复PR |
|---------|----------|------|--------|
| **#868** | SIGHUP 期间不安全的環境變數修改，存在 race condition | CLOSED | — |
| **#867** | 默认模型 `gpt-5-mini` 不存在于 OpenAI API | CLOSED | — |
| **#813** | Non-transactional multi-step context updates (metadata/token setup 与 DB 之间) | OPEN | — |
| **#823** | N+1 query pattern in event trigger loop (`routine_engine`) | OPEN | — |
| **#869** | Lock held across async I/O boundary blocks webhook processing | OPEN | **#905** |
| **#812** | TOCTOU race between `get_job()` and `update_job_status()` without transaction | CLOSED | — |

#### 🟠 HIGH (高优先级)

| Issue # | 问题描述 | 状态 | 修复PR |
|---------|----------|------|--------|
| **#858** | N+1 query anti-pattern in secrets credential injection | OPEN | — |
| **#859** | Unbounded memory allocation for secrets list | OPEN | — |
| **#826** | Unbounded message Vec growth in routine tool loop | OPEN | — |
| **#825** | ReDoS risk in event trigger regex patterns | OPEN | — |
| **#819** | `tool_remove` 和 `skill_remove` 从 auto-approvable 降级 | OPEN | — |
| **#816** | Token budget enforcement incomplete: `select_tools()` LLM calls bypass tracking | OPEN | — |
| **#815** | User-supplied metadata bypasses configured token budget | OPEN | — |
| **#814** | Token budget not persisted to database | OPEN | — |
| **#827** | Full message Vec clone per iteration (O(n) copying 5x) | OPEN | — |
| **#828** | Stringly-typed notification metadata keys | OPEN | — |

> 📊 统计：今日共报告 **18 个** CRITICAL/HIGH 级别问题，其中 **12 个** 来自 Staging CI 自动代码审查。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue # | 功能描述 | 状态 | 相关 PR | 纳入可能性 |
|---------|----------|------|---------|------------|
| **#766** | Add support for image + text to Chat API and IronClaw | OPEN | — | 🔶 中等 (依赖 cloud API 能力) |
| **#299** | Help Needed: Unable to authenticate MCP servers | OPEN | **#313** (OPEN) | 🔶 已进入 PR |
| **#58** | Import OpenClaw memory, history and settings | CLOSED | **#903** (CLOSED) | ✅ 已发布 (v0.17.0) |

### 路线图信号

从今日 PRs 判断，下一版本可能聚焦以下方向：

1. **Webhook 能力扩展**：PR #757 (通用 webhook 入口) + PR #758 (GitHub webhook 迁移) 表明项目在强化事件驱动架构
2. **CLI 工具完善**：PR #844 (定时任务管理) + PR #822 (诊断扩展) 表明 CLI 将成为一等公民
3. **通道集成多样化**：PR #790 (Slack relay) 已合并，PR #333 (Slack Socket Mode) 正在推进
4. **性能与安全加固**：大量 CRITICAL/HIGH bug 报告表明项目正处于密集的代码质量和安全审查周期

---

## 7. 用户反馈摘要

### 真实用户痛点

| 来源 | 痛点 | 频次 |
|------|------|------|
| **Issue #67** | near.ai 账号强制要求限制了项目普及 | 高 (8 赞) |
| **Issue #840** | 新手安装时 WASM 工具与主机版本不匹配，无法启动 | 中 |
| **Issue #697** | 沙盒/Docker 不可用时任务静默失败，无反馈 | 中 |
| **Issue #299** | 无法自定义 MCP 服务器的 JSON 配置 | 中 |

### 正面反馈

- **Issue #58** (OpenClaw 迁移) 解决后获得积极响应 (3 赞)
- 项目对 Slack 集成的投入 (PR #790, #796) 获得社区关注

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue # | 标题 | 创建时间 | 状态 | 风险 |
|---------|------|----------|------|------|
| **#299** | Unable to authenticate MCP servers | 2026-02-22 | OPEN | MCP 认证是核心功能需求，长期未解影响可用性 |
| **#333** | Add Slack Socket Mode support | 2026-02-23 | OPEN | Slack 集成重要补充 |

### 需关注的 OPEN PRs (超过 48 小时无更新)

| PR # | 标题 | 创建时间 | 状态 |
|------|------|----------|------|
| **#757** | Add generic host-verified /webhook/tools/{tool} ingress | 2026-03-09 | OPEN |
| **#758** | Migrate GitHub webhook normalization into github tool | 2026-03-09 | OPEN |
| **#313** | Fix bug with MCP auth | 2026-02-22 | OPEN |

---

*📅 日期: 2026-03-11 | 📊 数据来源: GitHub IronClaw Repository*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-11)

## 1. 今日速览

过去24小时内，TinyClaw 项目保持较高的开发活跃度，共产生 **8 条 PR 更新**，其中 **4 条已合并/关闭**，4 条待合并。无新 Issue 报告，也无新版本发布。今日的重点工作集中在代码重构与构建系统优化方面，项目整体处于健康迭代状态。值得注意的是，多项关键重构（包括 Monorepo 拆分、构建系统修复、CLI 交互迁移）正在同步推进，显示项目正处于重要的架构演进阶段。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日共合并/关闭 **4 条 PR**，推进了以下重要工作：

| PR | 状态 | 概要 |
|---|---|---|
| [#186](https://github.com/TinyAGI/tinyclaw/pull/186) | ✅ CLOSED | **Monorepo 重构**：将扁平 `src/` 拆分为 5 个 npm workspace 包（`@tinyclaw/core`, `@tinyclaw/teams`, `@tinyclaw/channels`, `@tinyclaw/server`, `@tinyclaw/visualizer`），同时用 SQLite 队列替换 BullMQ/Redis（从 427 行简化至约 160 行）。项目架构现代化迈出关键一步。 |
| [#187](](https://github.com/TinyAGI/tinyclaw/pull/187)) | ✅ CLOSED | **构建系统修复**：修复 Monorepo 重构后的构建失败问题。原先使用 `npm run build --workspaces` 并行构建导致依赖顺序问题，现改用 `tsc --build` 尊重 TypeScript 项目引用依赖关系。 |
| [#188](https://github.com/TinyAGI/tinyclaw/pull/188) | ✅ CLOSED | **Git 优化**：将 `*.tsbuildinfo`（TypeScript 增量构建缓存文件）加入 `.gitignore`，保持版本库整洁。 |
| [#177](https://github.com/TinyAGI/tinyclaw/pull/177) | ✅ CLOSED | **聊天室功能**：新增聊天室 REST API（`GET/POST /api/chatroom/:teamId`）及实时 CLI 查看器，支持类型发送消息。用户现在可直接在 CLI 中查看和参与团队聊天。 |

**合并 PR 占比**：50%（4/8），表明项目对代码质量有一定把控。

---

## 4. 社区热点

今日无新增 Issue，PR 层面的讨论热度较高。以下是待合并的 **4 条 OPEN PR**，值得关注：

| PR | 热度指标 | 概要 |
|---|---|---|
| [#185](https://github.com/TinyAGI/tinyclaw/pull/185) | 待合并 | **CLI 交互迁移**：将约 1500+ 行 Bash `read` 交互提示迁移至 TypeScript 的 `@clack/prompts` 库，实现更好的验证反馈、彩色输出和结构化交互。 |
| [#183](https://github.com/TinyAGI/tinyclaw/pull/183) | 待合并 | **简化 Office UI**：移除冗余的 `message_received` 事件（与 `agent_routed` 重复），简化办公聊天 UI 仅显示消息，移除活动栏。 |
| [#182](https://github.com/TinyAGI/tinyclaw/pull/182) | 待合并 | **Kanban 自动化**：任务拖入"进行中"列时自动触发assigned agent 工作，减少用户手动点击"发送"步骤。 |
| [#172](https://github.com/TinyAGI/tinyclaw/pull/172) | 待合并 | **通道模块化**：新增模块化通道架构，并提供 TUI（终端用户界面）通道示例。 |

**分析**：目前活跃 PR 主要聚焦于 **UX 优化**（#185、#182、#183）和 **架构演进**（#172）。其中 #185 涉及较大的交互逻辑迁移（1500+ 行），预计是近期重点审查对象。

---

## 5. Bug 与稳定性

今日 **无新增 Bug Issue 报告**。已有的 #187 修复了构建失败问题，表明项目对构建稳定性较为重视。未发现崩溃或回归问题的公开报告。

---

## 6. 功能请求与路线图信号

基于今日活跃 PR，可推测项目下一阶段的重点方向：

| 功能方向 | 来自 PR | 预计影响 |
|---|---|---|
| **CLI 现代化** | #185 | 将所有 Bash 提示迁移至 @clack/prompts，提升跨平台兼容性和用户体验 |
| **通道生态扩展** | #172 | 模块化通道设计，支持接入更多通信渠道（TUI 作为示例） |
| **Kanban 自动化** | #182 | 减少手动操作，提升任务流转效率 |
| **UI 简化** | #183 | 移除冗余功能，降低认知负担 |

**路线图信号**：项目正从单体架构向模块化 Monorepo 演进，同时注重 CLI/UX 现代化。预计下一版本将带来更清晰的包结构和更友好的交互体验。

---

## 7. 用户反馈摘要

今日 **无新增 Issue 评论**，暂无直接用户反馈可提取。但从 PR 内容可间接推断用户/开发者痛点：

- 原 Bash 交互脚本验证能力弱、无结构化输出 → #185 旨在解决
- 原 BullMQ/Redis 队列部署复杂、维护成本高 → #186 用 SQLite 简化
- 原构建系统并行执行导致失败 → #187 修复
- 任务拖拽后需额外点击"发送" → #182 自动化

---

## 8. 待处理积压

以下 **OPEN PR** 等待合并，建议维护者关注：

| PR | 等待时长 | 优先级建议 |
|---|---|---|
| [#185](https://github.com/TinyAGI/tinyclaw/pull/185) | 2 天 | **高**：涉及 1500+ 行交互逻辑变更，建议仔细审查 |
| [#172](https://github.com/TinyAGI/tinyclaw/pull/172) | 2 天 | **中**：新增通道架构，可能影响后续通道开发 |
| [#183](https://github.com/TinyAGI/tinyclaw/pull/183) | 2 天 | **低-中**：UI 简化，风险较低 |
| [#182](https://github.com/TinyAGI/tinyclaw/pull/182) | 2 天 | **中**：Kanban 自动化，功能性变更 |

**无长期未响应的 Issue**。

---

*报告生成时间：2026-03-11 | 数据来源：GitHub TinyClaw Repository*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*