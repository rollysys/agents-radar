# OpenClaw 生态日报 2026-03-12

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-12 00:07 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目日报 · 2026-03-12

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**，24小时内产生 **500 条 Issues 更新**（398 新开/活跃，102 关闭）和 **500 条 PR 更新**（338 待合并，162 已合并/关闭），无新版本发布。社区焦点集中在 **Kimi K2.5 模型配置的回归问题**（多个相关 Issue 被快速关闭）、**飞书/钉钉等企业级 IM 渠道的功能完善**，以及 **Cron 任务与执行稳定性**的持续优化。值得注意的是，今日出现多个关于 2026.3.8 版本的回归报告，显示该版本可能存在稳定性风险。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 关键改进 | 状态 |
|:---|:---|:---|:---|
| [#43520](https://github.com/openclaw/openclaw/pull/43520) | @vincentkoc | **CLI 稳定性**：修复 `skills --json` 输出含 ANSI 转义序列导致 JSON 解析失败的问题，并优化 Windows 旧版控制台表格渲染 | ✅ 已合并 |
| [#27557](https://github.com/openclaw/openclaw/pull/27557) | @Jimmy-xuzimo | **CLI 修复**：同上问题的早期修复方案，被 #43520 取代合并 | ✅ 已关闭 |
| [#42560](https://github.com/openclaw/openclaw/pull/42560) | @hclsys | **Matrix 渠道可靠性**：为 directory-live API 添加 30 秒 fetch 超时，防止 Matrix 服务器无响应时进程挂死 | ✅ 已合并 |
| [#41535](https://github.com/openclaw/openclaw/pull/41535) | @hclsys | **Nextcloud Talk 可靠性**：为消息发送和反应 API 添加 30 秒超时 | ✅ 已合并 |
| [#41534](https://github.com/openclaw/openclaw/pull/41534) | @hclsys | **Google Chat/Talk Voice 可靠性**：为 JWKS 证书获取和 ElevenLabs 语音列表 API 添加 10 秒超时 | ✅ 已合并 |
| [#41466](https://github.com/openclaw/openclaw/pull/41466) | @cgdusek | **ACP 线程绑定修复**：修复原生线程绑定会话放置逻辑，解决 Telegram 话题、Google Chat 线程等场景下的会话路由不一致问题 | ✅ 已合并 |
| [#41015](https://github.com/openclaw/openclaw/pull/41015) | @X-AlexBin | **Windows 兼容性**：为旧版 Windows 控制台自动降级为 ASCII 表格边框 | ✅ 已合并 |

### 核心推进方向

1. **超时与韧性工程**：今日合并的多个 PR 系统性为各渠道（Matrix、Nextcloud Talk、Google Chat）和外部 API 调用添加 `AbortSignal.timeout`，解决"挂死"类稳定性问题
2. **CLI 输出可靠性**：彻底解决 JSON 输出被 ANSI 序列污染的问题，对自动化集成至关重要
3. **企业 IM 渠道打磨**：持续修复 Telegram、Google Chat、Matrix 等渠道的线程/话题路由逻辑

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| 1 | [#32828](https://github.com/openclaw/openclaw/issues/32828) 误报"API rate limit reached" | **51** | 所有模型均显示速率限制警告，但 API 实际正常；用户验证 Claude Code 使用相同密钥无问题 | ✅ 已关闭 |
| 2 | [#26534](https://github.com/openclaw/openclaw/issues/26534) 钉钉首次安装渠道选项 | **41** | 钉钉已实现渠道支持但未在首次设置向导中展示，用户需手动配置 | 🟡 开放 |
| 3 | [#9443](https://github.com/openclaw/openclaw/issues/9443) 预构建 Android APK 发布 | **16** | 仓库含 Android 源码但无预编译 APK，普通用户无法使用 | 🟡 开放 |
| 4 | [#9899](https://github.com/openclaw/openclaw/issues/9899) 系统提示注入星期信息 | **15** | 当前日期格式缺少星期，导致 Agent 频繁误判日程查询中的星期 | 🟡 开放 |
| 5 | [#41445](https://github.com/openclaw/openclaw/issues/41445) / [#39907](https://github.com/openclaw/openclaw/issues/39907) / [#41690](https://github.com/openclaw/openclaw/issues/41690) / [#40911](https://github.com/openclaw/openclaw/issues/40911) | **15/15/13/11** | **Kimi K2.5 配置验证失败集群**：`requiresOpenAiAnthropicToolPayload` 键未被识别，或工具调用返回纯文本而非结构化格式 | ✅ 多数已关闭 |

### 热点分析

- **Kimi 集成阵痛期**：Kimi K2.5 模型（kimi-coding/k2p5）的上线引发配置验证、工具格式兼容等多重问题，显示新模型接入的测试覆盖不足
- **企业级部署需求强烈**：钉钉首次安装流程、Android APK 预构建等诉求反映非技术用户群体的扩张
- **日期/时间上下文精度**：#9899 揭示 Agent 在日程类任务中的系统性弱点，属易修复高价值改进

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重程度 | Issue | 描述 | 修复状态 |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#42270](https://github.com/openclaw/openclaw/issues/42270) | **2026.3.8 回归**：本地 LM Studio 后端出现空 Agent payload + WebSocket 1006 断开 | 🟡 开放，无 PR |
| 🔴 **Critical** | [#42883](https://github.com/openclaw/openclaw/issues/42883) | **2026.3.8 回归**：Cron 任务完全停止运行 | 🟡 开放，无 PR |
| 🟠 **High** | [#39907](https://github.com/openclaw/openclaw/issues/39907) / [#41445](https://github.com/openclaw/openclaw/issues/41445) / [#41690](https://github.com/openclaw/openclaw/issues/41690) | Kimi K2.5 工具调用格式错误或配置验证失败 | ✅ 已关闭（快速修复） |
| 🟠 **High** | [#40631](https://github.com/openclaw/openclaw/issues/40631) | 执行停滞：Agent 确认任务但未执行任何操作（每月 1-2 次） | 🟡 开放，无 PR |
| 🟠 **High** | [#35220](https://github.com/openclaw/openclaw/issues/35220) | Codex Responses API 流式 server_error 不触发模型回退 | 🟡 开放，无 PR |
| 🟡 **Medium** | [#41083](https://github.com/openclaw/openclaw/issues/41083) | XAI 请求持续超时 | 🟡 开放，无 PR |
| 🟡 **Medium** | [#40941](https://github.com/openclaw/openclaw/issues/40941) | 自定义/本地 Provider 不显示上下文长度和 token 计数（2026.3.7 回归） | 🟡 开放，无 PR |

### 关键风险信号

**2026.3.8 版本存在显著回归**：今日新报告的 #42270 和 #42883 均指向该版本，涉及：
- 本地 LLM 后端（LM Studio）的 WebSocket 连接稳定性
- Cron 调度系统完全失效

建议维护者评估是否需要紧急发布 2026.3.9 热修复。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 热度 | 可行性评估 |
|:---|:---|:---:|:---|
| **钉钉首次安装向导集成** | [#26534](https://github.com/openclaw/openclaw/issues/26534) | ⭐⭐⭐⭐⭐ | 高，渠道已实现，仅需 UI 层暴露 |
| **预构建 Android APK** | [#9443](https://github.com/openclaw/openclaw/issues/9443) | ⭐⭐⭐⭐ | 中，需 CI/CD 配置 |
| **Agent 视觉能力（图片识别）** | [#28744](https://github.com/openclaw/openclaw/issues/28744) | ⭐⭐⭐⭐ | 高，MiniMax 等模型已支持，需平台层传递图片数据 |
| **Memory v2 架构建议** | [#28930](https://github.com/openclaw/openclaw/issues/28930) | ⭐⭐⭐ | 中，来自运行 11 天的 AI Agent 用户深度反馈 |
| **路径级 RWX 权限控制** | [#39979](https://github.com/openclaw/openclaw/issues/39979) | ⭐⭐⭐ | 中，安全架构改进 |
| **出站消息审批门控** | [#25145](https://github.com/openclaw/openclaw/issues/25145) | ⭐⭐⭐ | 中，企业合规需求 |
| **Mistral web_search Provider** | [#41834](https://github.com/openclaw/openclaw/pull/41834) | - | 🟡 PR 开放中，可能纳入下一版本 |

### 下一版本可能纳入

- **Mistral 搜索支持**（#41834 PR 已开放）
- **钉钉安装流程优化**（需求明确，实现简单）
- **系统提示日期格式增强**（#9899，单点修复）

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 核心不满 |
|:---|:---|:---|
| **模型配置挫败感** | #41445, #41690, #40911 | Kimi 配置报错信息晦涩，用户反复尝试无法解决 |
| **版本升级恐惧** | #42270, #42883 | 2026.3.7→3.8 升级后核心功能断裂，用户不敢升级 |
| **Token 浪费焦虑** | #9157 | 工作区文件每次消息注入 35,600 tokens，浪费 93.5% 预算 |
| **Cron 可靠性** | #19795, #42883, #42579 | 定时任务在隔离会话中无法访问技能，或完全停止运行 |
| **本地 LLM 支持** | #42270 | 与 LM Studio 等本地后端的集成不稳定 |

### 积极反馈

- **快速响应 Kimi 问题**：多个 Kimi 相关 Issue 在 24 小时内被关闭，用户认可修复速度
- **企业渠道扩展**：钉钉、飞书等国内渠道支持获正面关注

---

## 8. 待处理积压

### 长期未响应的高价值 Issue

| Issue | 创建时间 | 最后更新 | 问题 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#9157](https://github.com/openclaw/openclaw/issues/9157) Token 浪费 | 2026-02-04 | 今日 | 工作区文件重复注入导致 93.5% token 浪费，有 12 👍 | 优先级提升，设计缓存/引用机制 |
| [#3092](https://github.com/openclaw/openclaw/issues/3092) 会话锁超时 | 2026-01-28 | 今日 | 长操作导致通道处理器失败，标记 stale 但持续复现 | 重新评估 stale 标签，分配工程师 |
| [#18282](https://github.com/openclaw/openclaw/issues/18282) GPT-5.2 推理项错误 | 2026-02-16 | 今日 | 会话历史中的 reasoning 项导致 400 错误 | 标记为 GPT-5.x 支持 blocker |
| [#8367](https://github.com/openclaw/openclaw/issues/8367) GitHub Copilot Claude 模型不支持 | 2026-02-03 | 今日 | Copilot 渠道 Claude 模型 400 错误 | 评估 Copilot 渠道维护状态 |
| [#5047](https://github.com/openclaw/openclaw/issues/5047) macOS 浏览器控制失效 | 2026-01-31 | 今日 | 菜单勾选但不启动浏览器 relay，有 7 👍 | 桌面端优先级提升 |

### 需要维护者决策

- **#26534 钉钉安装向导**：渠道已实现，是否纳入 2026.3.9？
- **2026.3.8 回归处理**：是否回滚或紧急热修复？

---

*日报生成时间：2026-03-12 · 数据来源：GitHub API*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告
**分析日期：2026-03-12**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态呈现**"一超多强、垂直分化"**格局：OpenClaw 以 500+ Issues/PR 的日活稳居核心参照地位，但 PicoClaw、NanoBot、CoPaw 等第二梯队项目通过差异化定位（嵌入式硬件、学术本地化、企业 IM 集成）快速崛起。整体技术焦点从"功能可用"转向"生产就绪"——安全加固、多平台稳定性、本地 LLM 支持成为共性优先级。中国本土生态（钉钉/飞书/QQ 集成、智谱/火山引擎适配）成为差异化竞争的关键战场。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活跃/关闭) | PR (待合并/已合并) | 版本发布 | 健康度评估 |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 398/102 | 338/162 | 无 | 🟢 极高活跃，质量承压（3.8 回归风险） |
| **PicoClaw** | 17/6 | 62/39 | v0.2.2 + 夜间版 | 🟢 密集迭代，PR 积压需清理 |
| **NanoBot** | 24/26 | 32/49 | 无 | 🟢 高活跃，安全债务累积 |
| **Zeroclaw** | 20/19 | 2/48 | v0.1.7-beta.30/28 | 🟡 CI 重构期，分支策略混乱 |
| **NanoClaw** | 7/2 | 31/8 | 无 | 🟡 功能扩张期，稳定性风险 |
| **IronClaw** | 9/25 | 20/30 | v0.18.0 | 🟢 高质量交付，AI 审查创新 |
| **CoPaw** | 32/18 | 26/24 | 无 | 🟢 高活跃，v0.0.6 回归需修复 |
| **Moltis** | 9/25 | 20/9 | 无 | 🟡 清旧账模式，Node 协议扩展前瞻 |
| **TinyClaw** | 3/6 | 1/6 | v0.0.10 | 🟢 架构重构完成，工程化成熟 |
| **ZeptoClaw** | 1/15 | 0/16 | v0.7.5/6 | 🟢 安全冲刺，单点贡献风险 |
| **LobsterAI** | 11/1 | 4/7 | v0.2.3 | 🟡 体验阻断问题积压 |
| **EasyClaw** | 1/0 | 0/0 | v1.6.6 | 🔴 低活跃，核心功能故障待响应 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 500 Issues/PR 日活，绝对领先 | PicoClaw (101 PR)、CoPaw (50/50) 约为 1/5-1/10 |
| **技术路线** | **企业级多渠道中枢**：飞书/钉钉/Slack/Discord/Telegram 全覆盖 | NanoBot 侧重本地部署；IronClaw 绑定 NEAR 生态；CoPaw 聚焦中国 IM |
| **核心优势** | 渠道生态完整性、快速响应（Kimi 问题 24h 修复）、CLI 自动化集成 | 对比：Zeroclaw 的 Gateway 设计、PicoClaw 的嵌入式优化、TinyClaw 的团队编排 |
| **质量风险** | 2026.3.8 版本 Cron + WebSocket 回归，显示快速迭代下的测试覆盖缺口 | ZeptoClaw/IronClaw 安全审计更严格；TinyClaw 架构重构更彻底 |
| **差异化缺口** | 记忆系统、多 Agent 编排弱于 TinyClaw；本地 LLM 体验弱于 NanoBot | #9157 Token 浪费、#9899 日期上下文等长期 Issue 未解决 |

**定位结论**：OpenClaw 是**生态整合者**而非技术先锋，适合需要"开箱即用多平台覆盖"的用户，但对架构创新（如 TinyClaw 的 SQLite WAL 队列、ZeptoClaw 的 dirfd-relative 安全模型）响应滞后。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫度 |
|:---|:---|:---|:---:|
| **企业 IM 深度集成** | OpenClaw、NanoBot、CoPaw、LobsterAI、Zeroclaw | 钉钉首次安装向导 (#26534)、飞书文档技能 (#1889)、企微/QQ 机器人 (#1290) | 🔥🔥🔥🔥🔥 |
| **本地 LLM 零配置** | NanoBot (#193)、PicoClaw (#1161)、ZeptoClaw (#316)、TinyClaw (#111) | Ollama/vLLM/LM Studio 免 API Key 接入，降低隐私敏感场景门槛 | 🔥🔥🔥🔥🔥 |
| **安全加固与隔离** | ZeptoClaw (#324)、NanoClaw (#865)、CoPaw (#563)、IronClaw (#760) | 容器≠安全、文件系统 TOCTOU、webhook 签名验证、Tool-Guard 框架 | 🔥🔥🔥🔥🔥 |
| **消息压缩与记忆** | CoPaw (#1243 压缩失效)、OpenClaw (#9157 Token 浪费)、TinyClaw (#192 会话恢复) | 长对话成本控制、上下文窗口优化、持久化记忆架构 | 🔥🔥🔥🔥☆ |
| **可观测性与调试** | TinyClaw (#66 Mission Control)、CoPaw (#1284 Token 追踪)、IronClaw (AI 审查) | Agent 执行追踪、工具调用可视化、成本透明化 | 🔥🔥🔥☆☆ |
| **多 Agent 编排** | TinyClaw (团队通信)、CoPaw (#1299 协议文档)、OpenClaw (#3093 动态节点) | Agent 间协作、工作流路由、分布式能力广告 | 🔥🔥🔥☆☆ |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户 | 技术架构特征 |
|:---|:---|:---|:---|
| **OpenClaw** | 全渠道消息中枢、CLI 自动化 | 开发者、DevOps、多平台运营者 | Node.js 单体，渠道插件化，Cron 任务驱动 |
| **PicoClaw** | 嵌入式硬件 (Sipeed)、轻量本地运行 | 边缘 AI、IoT 开发者 | Go 语言，WASM 工具链，Gateway 模式 |
| **NanoBot** | 学术研究、隐私优先本地部署 | 高校、隐私敏感企业 | Python 异步，SQLite 优先，容器沙盒 |
| **TinyClaw** | 多 Agent 团队编排、可视化工作流 | AI 团队、自动化工作流设计者 | TypeScript monorepo，BullMQ→SQLite WAL，TinyOffice Web 门户 |
| **ZeptoClaw** | 安全加固、审计合规 | 金融、医疗等监管严格行业 | Rust 系统级，dirfd-relative 文件操作，Merkle 审计链规划 |
| **IronClaw** | NEAR 区块链生态绑定、WASM 工具链 | Web3 开发者、去中心化应用 | Rust + WASM，staging CI 晋升模型，AI 辅助审查 |
| **CoPaw** | 中国本土 IM 生态、低代码 Skill 开发 | 中国企业用户、非技术运营者 | Python，AgentScope 基础，Tool-Guard 安全框架 |
| **LobsterAI** | 网易有道内容生态、教育场景 | 教育行业、内容创作者 | 未公开架构，快速 IM 适配，体验打磨滞后 |
| **Moltis** | 分布式节点协议、边缘计算 | 多节点部署、混合云场景 | Rust，Node 协议扩展 RFC，Vault 安全状态机 |
| **Zeroclaw** | 配置加密、浏览器配对 | 个人用户、安全敏感场景 | Rust，Vite 前端，配对码运维 |

---

## 6. 社区热度与成熟度分层

| 阶段 | 项目 | 特征信号 |
|:---|:---|:---|
| **🚀 快速迭代期** | OpenClaw、PicoClaw、CoPaw | 日活 50+，功能扩张快，技术债务同步累积；OpenClaw 3.8 回归、CoPaw 压缩失效为典型风险 |
| **🔧 质量巩固期** | TinyClaw、ZeptoClaw、IronClaw | 架构重构完成（TinyClaw #186）、安全冲刺（ZeptoClaw 10 个 P1 修复）、AI 审查创新（IronClaw）；关注外部贡献激活 |
| **🧹 清旧账模式** | Moltis、Zeroclaw | Issue 关闭率 > 新开率，历史积压消化；Moltis Node 协议 RFC 前瞻，Zeroclaw 分支策略混乱待解 |
| **⚠️ 维护风险期** | NanoClaw、LobsterAI、EasyClaw | 单点贡献（NanoClaw @5queezer）、体验阻断积压（LobsterAI #344 空格 Bug）、低活跃故障（EasyClaw OAuth） |
| **🌱 早期探索期** | — | 生态暂无典型代表，TinyClaw 已跨越至质量巩固期 |

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **"本地优先"成为默认选项** | NanoBot #193、ZeptoClaw #316、TinyClaw #111 的高热度 | 隐私合规驱动下，Ollama/vLLM 兼容不再是差异化，而是**准入门槛**；需设计零配置发现机制 |
| **安全从"功能"变为"架构"** | ZeptoClaw #324 的 dirfd-relative 实现、NanoClaw #865 的容器安全范式反思 | TOCTOU、供应链攻击、提示注入需从**代码层**前置到**设计层**；建议引入 formal verification 或 AI 辅助审查（IronClaw 模式） |
| **IM 渠道成为生态护城河** | OpenClaw 钉钉/飞书、CoPaw QQ/NapCat、LobsterAI 单日三平台适配 | 中国 IM 生态（钉钉/飞书/企微/QQ）的**深度集成**（非仅消息收发，而是文档/日程/审批）成为企业采纳关键决策因素 |
| **记忆系统的架构分化** | TinyClaw #977 语义记忆 vs OpenClaw #9157 Token 浪费 vs CoPaw #186 记忆失效 | 向量数据库（LanceDB）vs 提示压缩 vs 外部知识库三种路线并存；需根据场景（长期项目 vs 单次会话）选择 |
| **从"单 Agent"到"团队编排"** | TinyClaw 团队通信 #190、CoPaw #1299 协议文档、OpenClaw #3093 动态节点 | 多 Agent 协作的**通信协议标准化**（类似 MCP 但用于 Agent-Agent）将成为下一竞争焦点 |
| **可观测性需求爆发** | TinyClaw #66 Mission Control、CoPaw Token 追踪 #1284 | 用户不再满足于"能跑"，需要**成本透明、执行可视、错误可追溯**；建议内置 OpenTelemetry 或类似方案 |

---

**分析师结论**：生态正处于从"功能竞赛"向"质量与信任竞赛"的转折点。OpenClaw 需警惕规模带来的惯性风险，而 ZeptoClaw/TinyClaw 的安全与架构创新可能定义下一代标准。中国本土 IM 集成与本地 LLM 支持是当前最明确的差异化窗口。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-03-12

> 项目地址：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 分析周期：过去24小时

---

## 1. 今日速览

NanoBot 今日保持**高活跃度开发节奏**，24小时内产生 **50 条 Issues 更新**（24新开/活跃，26关闭）和 **81 条 PR 更新**（32待合并，49已合并/关闭），PR 处理效率显著高于 Issues。社区关注点集中在**多平台渠道扩展**（Telegram 回复上下文、飞书文档技能）、**本地部署体验优化**（Ollama、vLLM、LM Studio）以及**安全性加固**（配置隔离、工作区限制）。值得注意的是，今日无新版本发布，但主干分支持续集成多项增强功能，显示项目处于快速迭代期。

---

## 2. 版本发布

**无新版本发布**

今日未发布正式版本。最新版本仍为 `v0.1.4.post3`（据 #1630 用户报告）。多个 PR 已就绪待合并，预计近期将累积发布补丁版本。

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#1895](https://github.com/HKUDS/nanobot/pull/1895) | @Re-bin | **文件系统工具增强**：ReadFileTool 新增 `offset`/`limit` 分页参数、行号显示；Shell 工具输出截断策略优化 | - |
| [#1891](https://github.com/HKUDS/nanobot/pull/1891) | @lailoo | **修复 Matrix 渠道状态显示缺失** | [#1887](https://github.com/HKUDS/nanobot/issues/1887) |
| [#1874](https://github.com/HKUDS/nanobot/pull/1874) | @WhalerO | **修复 Gemini 工具调用回放失败**：保留 `thought_signature` 等 provider 特定元数据 | - |
| [#1845](https://github.com/HKUDS/nanobot/pull/1845) | @nikolasdehor | **安全加固**：shell 守卫新增 `~` 路径检测，防止工作区限制绕过 | - |
| [#1827](https://github.com/HKUDS/nanobot/pull/1827) | @suger-m | **安全加固**：exec 命令强制展开 home 路径后再进行工作区边界检查 | [#1817](https://github.com/HKUDS/nanobot/issues/1817) |
| [#1208](https://github.com/HKUDS/nanobot/pull/1208) | @cgajagon | **依赖优化**：Codex OAuth 改为可选懒加载，减少强制依赖 | - |

**整体进展评估**：今日合并 PR 聚焦**工具链健壮性**（文件分页、输出控制）和**安全边界加固**（路径解析、工作区隔离），标志着项目从功能扩张期进入**质量巩固期**。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---:|
| 1 | [#2](https://github.com/HKUDS/nanobot/issues/2) 智谱 AI (Z.AI) 原生支持 | 19 | **中国本土模型生态接入**：用户强烈要求内置 GLM-4.x/4.7 系列支持，而非通过 OpenRouter 间接调用 | ✅ 已关闭 |
| 2 | [#193](https://github.com/HKUDS/nanobot/issues/193) Ollama API 支持 | 13 | **本地开源模型友好性**：LM Studio/vLLM 之外，Ollama 是本地部署主流选择，用户期望零配置接入 | 🔵 开放 |
| 3 | [#855](https://github.com/HKUDS/nanobot/issues/855) 本地部署经验分享 | 9 | **社区知识沉淀**：RTX 3050 + 64GB RAM 用户分享 LM Studio 调优经验，反映**小显存场景下的性能痛点** | 🔵 开放 |
| 4 | [#25](https://github.com/HKUDS/nanobot/issues/25) Groq/自定义 Provider | 9 | **开放生态**：用户希望添加 Groq 等 OpenAI 兼容 API，愿意贡献代码 | ✅ 已关闭 |
| 5 | [#1873](https://github.com/HKUDS/nanobot/issues/1873) 配置安全隔离 | 7 | **生产级安全**：`config.json` 可被 agent 通过 `exec()` 读取泄露密钥，要求核心循环以不同用户运行 | 🔵 开放 |

### 🔥 值得关注的待合并 PR

| PR | 亮点 | 潜在影响 |
|:---|:---|:---|
| [#1900](https://github.com/HKUDS/nanobot/pull/1900) Telegram 回复消息上下文支持 | 解决 [#1875](https://github.com/HKUDS/nanobot/issues/1875)，实现回复链语义理解 | 大幅提升 Telegram 多轮对话体验 |
| [#1707](https://github.com/HKUDS/nanobot/pull/1707) 零依赖 Web UI 渠道 | FastAPI + WebSocket，~45MB 内存占用，OpenClaw 风格控制界面 | 可能替代现有重依赖前端方案 |
| [#1861](https://github.com/HKUDS/nanobot/pull/1861) OpenAI 兼容 Endpoint 渠道 | 允许外部应用通过标准 API 接入 nanobot | 生态扩展关键基础设施 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 问题描述 | 状态 |
|:---|:---|:---|:---:|
| 🔴 **高** | [#1873](https://github.com/HKUDS/nanobot/issues/1873) | **安全配置泄露**：agent 可通过 `exec()` 读取 `config.yaml` 中的 API 密钥，容器化部署无安全边界 | 🔵 开放，无 PR |
| 🔴 **高** | [#1833](https://github.com/HKUDS/nanobot/issues/1833) | **无故崩溃**：运行半小时内两次 `SIGTERM` 退出，无错误日志 | 🔵 开放，需复现 |
| 🟡 **中** | [#1157](https://github.com/HKUDS/nanobot/issues/1157) | OpenRouter + StepFun 模型 400 错误，`v0.1.4.post2` 未修复 | 🔵 开放 |
| 🟡 **中** | [#842](https://github.com/HKUDS/nanobot/issues/842) | OpenRouter 配置升级后认证失败（`0.1.3p7` → `0.1.4`） | 🔵 开放 |
| 🟡 **中** | [#1300](https://github.com/HKUDS/nanobot/issues/1300) | Matrix 渠道启动失败（WebSocket 事件循环冲突） | 🔵 开放 |
| 🟡 **中** | [#1879](https://github.com/HKUDS/nanobot/issues/1879) | WhatsApp 渠道无法生成 QR 码 | 🔵 开放 |
| 🟢 **低** | [#1630](https://github.com/HKUDS/nanobot/issues/1630) | 内置技能（weather/skill-creator）不可用 | 🔵 开放，配置问题？ |
| 🟢 **低** | [#1887](https://github.com/HKUDS/nanobot/issues/1887) | Matrix 缺失于 `channels status` 列表 | ✅ **已修复** [#1891](https://github.com/HKUDS/nanobot/pull/1891) |

---

## 6. 功能请求与路线图信号

### 高优先级（已有 PR 或强烈社区共识）

| 功能 | 来源 | 信号强度 | 关键 PR |
|:---|:---|:---:|:---|
| **Telegram 回复上下文** | [#1875](https://github.com/HKUDS/nanobot/issues/1875) | ⭐⭐⭐⭐⭐ | [#1900](https://github.com/HKUDS/nanobot/pull/1900) 已就绪 |
| **飞书文档技能** | [#1889](https://github.com/HKUDS/nanobot/pull/1889) | ⭐⭐⭐⭐⭐ | PR 今日提交 |
| **可配置 Shell 输出截断** | [#1871](https://github.com/HKUDS/nanobot/issues/1871) | ⭐⭐⭐⭐⭐ | [#1896](https://github.com/HKUDS/nanobot/pull/1896) 已就绪 |
| **Mistral Provider + 通用转录** | [#1680](https://github.com/HKUDS/nanobot/pull/1680) | ⭐⭐⭐⭐☆ | 开放中，测试覆盖 Telegram |
| **Groq Whisper 模型配置** | [#1746](https://github.com/HKUDS/nanobot/pull/1746) | ⭐⭐⭐⭐☆ | 开放中 |

### 中期需求（社区呼声高，待资源投入）

| 功能 | 来源 | 阻碍因素 |
|:---|:---|:---|
| **Ollama 原生支持** | [#193](https://github.com/HKUDS/nanobot/issues/193) | 需设计 provider 抽象层，与现有 vLLM/LM Studio 策略统一 |
| **微信 (WeChat) 渠道** | [#1819](https://github.com/HKUDS/nanobot/issues/1819) | 中国大陆核心需求，但微信生态封闭，需调研合规接入方案 |
| **统一守护进程网关** | [#1461](https://github.com/HKUDS/nanobot/issues/1461) | 架构级变更，涉及多平台状态管理、日志聚合 |

---

## 7. 用户反馈摘要

### ✅ 满意点
- **本地部署可行性**：[#855](https://github.com/HKUDS/nanobot/issues/855) 用户确认 RTX 3050 + 64GB RAM 可运行 4B/8B 模型及 GLM-4.7-Flash
- **渠道扩展速度**：Discord、飞书、Telegram 等集成响应迅速

### ❌ 痛点与摩擦

| 痛点 | 典型反馈 | 来源 |
|:---|:---|:---|
| **配置复杂度高** | "升级 `0.1.3p7` → `0.1.4` 后 OpenRouter 失效" | [#842](https://github.com/HKUDS/nanobot/issues/842) |
| **错误信息不透明** | "SIGTERM 退出无任何原因" | [#1833](https://github.com/HKUDS/nanobot/issues/1833) |
| **技能发现困难** | "weather/skill-creator 技能不可用" | [#1630](https://github.com/HKUDS/nanobot/issues/1630) |
| **安全意识觉醒** | "config.json 可被 agent 读取，无法安全容器化" | [#1873](https://github.com/HKUDS/nanobot/issues/1873) |
| **中文文档缺失** | "很多国外开源项目都有中文 README"（情绪性反馈） | [#1617](https://github.com/HKUDS/nanobot/issues/1617) |

### 🎯 使用场景洞察
- **个人 AI 助手**：通过 Telegram/WhatsApp 进行日常任务管理
- **本地化知识库**：结合 LM Studio/vLLM 实现隐私敏感场景
- **企业集成**：飞书、钉钉等国内办公平台接入需求强烈

---

## 8. 待处理积压

### ⚠️ 需要维护者关注

| Issue/PR | 创建时间 | 问题 | 建议行动 |
|:---|:---|:---|:---|
| [#361](https://github.com/HKUDS/nanobot/pull/361) | 2026-02-08 | **大型功能 PR**：Kilo 后端 + 免费 Opencode 模型 + Telegram 插件系统，评论数最多但长期未决 | 拆分 review，或明确拒绝/接受 |
| [#126](https://github.com/HKUDS/nanobot/pull/126) | 2026-02-05 | **CI/CD 基础设施**：Docker 镜像自动推送至 ghcr/dockerhub，社区已验证可用 | 优先合并，减轻发布负担 |
| [#193](https://github.com/HKUDS/nanobot/issues/193) | 2026-02-06 | **本地部署核心需求**：Ollama 支持，13 条评论，与项目"本地优先"定位高度相关 | 评估是否纳入 v0.2.0 |
| [#1873](https://github.com/HKUDS/nanobot/issues/1873) | 2026-03-11 | **安全架构缺陷**：配置隔离问题，影响生产部署信心 | 需核心维护者回应安全策略 |

---

> **健康度评估**：🟢 活跃开发 | 🟡 技术债务累积（配置/安全架构）| 🔵 社区生态扩张期

*日报生成时间：2026-03-12 | 数据来源：GitHub API 快照*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 | 2026-03-12

## 1. 今日速览

Zeroclaw 今日保持**高活跃开发状态**，24小时内处理 **39 条 Issues**（20新开/活跃，19关闭）和 **50 条 PR**（48已合并/关闭，2待合并），代码吞吐效率显著。项目刚完成 **CI/CD 架构重大重构**（单 master 分支模型迁移），并连续发布两个 beta 版本。社区讨论热度集中在**运行时兼容性**（GLIBC 版本依赖）和**配置加密解密**两个核心稳定性议题，同时 Azure OpenAI 支持等新功能需求持续涌入。整体健康度良好，但需关注 Windows 平台构建和 Docker 部署的边际问题。

---

## 2. 版本发布

### v0.1.7-beta.30 / v0.1.7-beta.28
🔗 [Release 页面](https://github.com/zeroclaw-labs/zeroclaw/releases)

| 变更项 | 详情 | 影响 |
|--------|------|------|
| **CI/CD 重构** | 替换全部工作流为简化流水线 | 构建时间优化，需验证新流水线稳定性 |
| **分支模型迁移** | 统一至单 `master` 分支，废弃 `main`/`dev` 双轨 | ⚠️ **破坏性变更**：贡献者需重新配置本地分支追踪 |
| **维护者更新** | 更新 MAINTAINERS 文件 | 治理透明度提升 |

**迁移注意事项**：
- 原 `main` 分支用户需执行：`git branch -u origin/master master`
- 文档和发布工作流中 `main` 引用已全局替换，但 Issue #2929 显示社区仍存在分支策略困惑，建议维护者更新贡献指南

---

## 3. 项目进展

### 今日合并的关键 PR（48 条中的核心项）

| PR | 作者 | 贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#3047](https://github.com/zeroclaw-labs/zeroclaw/pull/3047) | @mark-linyb | **Windows 构建修复**：`sync_directory` 添加 `cfg(unix)` 条件编译 | 解除 Windows 开发者工作流阻塞（S1 级问题） |
| [#3235](https://github.com/zeroclaw-labs/zeroclaw/pull/3235) | @theonlyhennygod | **CLI 体验优化**：提取 `resolve_display_text` 辅助函数，阻止 `<tool_call>` 协议文本泄露 | 解决 #3049 用户反馈的交互体验问题 |
| [#3236](https://github.com/zeroclaw-labs/zeroclaw/pull/3236) | @theonlyhennygod | **开发体验**：Vite dev server 添加 `/health` 和 `/pair` 代理路由 | 本地开发无需重启即可测试配对流程 |
| [#867](https://github.com/zeroclaw-labs/zeroclaw/pull/867) | @willsarg | **社区治理**：引入 Contributor Covenant 行为准则 | 项目成熟度标志，为大规模贡献者增长做准备 |
| [#1186](https://github.com/zeroclaw-labs/zeroclaw/pull/1186) | @agorevski | **质量基建**：新增 81 个单元测试覆盖审计-07 缺口 | 测试覆盖率显著提升，技术债务降低 |

**整体推进评估**：今日合并 PR 聚焦**开发者体验修复**（Windows 构建、CLI 输出净化）和**治理基建**（行为准则、测试覆盖），属于"修内功"型进展，为 v0.2.0 稳定版奠定质量基础。

---

## 4. 社区热点

### 高讨论度 Issues（按评论数排序）

| Rank | Issue | 评论 | 核心诉求 | 背后信号 |
|:---|:---|:---:|:---|:---|
| 1 | [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) GLIBC_2.39 未找到 | 9 | Linux 二进制兼容性 | **运行时依赖过新**，阻碍旧发行版（Ubuntu 22.04 等）用户采用 |
| 2 | [#2929](https://github.com/zeroclaw-labs/zeroclaw/issues/2929) master vs main 分支困惑 | 6 | 分支策略文档清晰度 | CI 重构后的**沟通缺口**，贡献者信任成本上升 |
| 3 | [#2355](https://github.com/zeroclaw-labs/zeroclaw/issues/2355) 细粒度工具控制 | 4 | 上下文感知的允许列表 | 企业级**安全策略需求**，与 #3153 MCP 代理支持形成需求簇 |
| 4 | [#850](https://github.com/zeroclaw-labs/zeroclaw/issues/850) 禁用推理能力 | 4 | Ollama 推理控制 | 成本敏感用户的**可预测性诉求** |

**热点分析**：GLIBC 兼容性议题（#3070）获 9 评论且标记 S0（数据丢失/安全风险），实际为**部署阻塞问题**，建议优先提供静态链接构建或 musl 版本。分支困惑（#2929）反映技术变更的社区沟通滞后，需文档紧急补丁。

---

## 5. Bug 与稳定性

### 按严重程度排序的活跃 Bug

| 严重度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---:|:---|:---:|
| **S0** | [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) | 🔴 Open | GLIBC_2.39 动态链接依赖导致旧系统无法运行 | ❌ 无 |
| **S1** | [#2930](https://github.com/zeroclaw-labs/zeroclaw/issues/2930) | 🔴 Open | Docker MacOS 初始化 `Unbound variable` 错误 | ❌ 无 |
| **S1** | [#2947](https://github.com/zeroclaw-labs/zeroclaw/issues/2947) | 🔴 Open | Docker Web 配置保存 HTTP 500 错误 | ❌ 无 |
| **S2** | [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) | 🔴 Open | 飞书渠道配置无法启动（WebSocket 连接错误） | ❌ 无 |
| **S2** | [#2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953) | 🔴 Open | Matrix 渠道标志缺失于官方构建 | ❌ 无 |
| **S2** | [#2960](https://github.com/zeroclaw-labs/zeroclaw/issues/2960) | 🔴 Open | 浏览器配对持久化失效（每次需新配对码） | ❌ 无 |
| **S2** | [#3069](https://github.com/zeroclaw-labs/zeroclaw/issues/3069) | 🔴 Open | MCP 工具未正确暴露给委托子代理 | ❌ 无 |

### 今日已关闭的关键 Bug

| Issue | 修复内容 | 关闭 PR |
|:---|:---|:---:|
| [#3175](https://github.com/zeroclaw-labs/zeroclaw/issues/3175) | 渠道 `bot_token` 加密后未解密导致重启失效 | 已合并 |
| [#3173](https://github.com/zeroclaw-labs/zeroclaw/issues/3173) | `paired_tokens` 加密后未解密导致 WebSocket 认证失败 | 已合并 |
| [#3207](https://github.com/zeroclaw-labs/zeroclaw/issues/3207) | Rust 1.94 容器构建失败 | 已回滚 |
| [#3083](https://github.com/zeroclaw-labs/zeroclaw/issues/3083) | Embedding provider 错误使用 default_provider API key | 已合并 |

**稳定性评估**：配置加密解密链（#3175/#3173）的连续修复表明该模块存在**系统性设计缺陷**，建议审计完整加密数据流。Docker/Mac 平台问题（#2930/#2947）形成**平台特定风险簇**，需专项测试覆盖。

---

## 6. 功能请求与路线图信号

### 新提交的功能请求

| Issue | 需求 | 与现有 PR 关联 | 纳入可能性 |
|:---|:---|:---|:---:|
| [#3176](https://github.com/zeroclaw-labs/zeroclaw/issues/3176) Azure OpenAI 提供商支持 | 企业 Azure 订阅用户 LLM 调用 | 无 | ⭐⭐⭐ 高（企业刚需） |
| [#3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095) 按需 MCP 工具加载 | `tool_search` 延迟激活减少上下文浪费 | 无 | ⭐⭐⭐ 高（性能优化） |
| [#3093](https://github.com/zeroclaw-labs/zeroclaw/issues/3093) 动态节点发现与能力广告 | OpenClaw 式节点生态 | 无 | ⭐⭐ 中（架构级变更） |
| [#3152](https://github.com/zeroclaw-labs/zeroclaw/issues/3152) Gateway WebUI 中文 i18n | 中文界面支持 | 无 | ⭐⭐ 中（社区驱动） |
| [#3129](https://github.com/zeroclaw-labs/zeroclaw/issues/3129) 消息草稿保留 | 切换设置/线程时不丢失草稿 | 无 | ⭐⭐ 中（UX 优化） |

### 已有关键功能 PR 进展

- [#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) `zeroclaw agent` MCP 支持 → **已关闭**，实现并入主线
- [#2355](https://github.com/zeroclaw-labs/zeroclaw/issues/2355) 细粒度工具控制 → 讨论中，安全策略模块待设计

**路线图信号**：Azure OpenAI（#3176）与按需 MCP 加载（#3095）分别代表**企业集成**和**性能优化**两条主线，预计进入 v0.1.8 或 v0.2.0 规划。动态节点发现（#3093）暗示项目可能向**分布式多代理架构**演进，需关注与现有 Gateway 设计的兼容性。

---

## 7. 用户反馈摘要

### 痛点提炼（来自 Issue 评论）

| 场景 | 原声引用 | 严重程度 |
|:---|:---|:---:|
| **Linux 部署挫败** | "version `GLIBC_2.39' not found" — 旧系统完全无法运行 | 🔴 阻断 |
| **配置持久化焦虑** | "channels silently fail after a daemon restart" — 加密解密 bug 导致信任崩塌 | 🔴 数据丢失风险 |
| **Windows 开发排斥** | "cargo clippy pre-push hook fails on Windows" — 跨平台工具链不完善 | 🟡 摩擦 |
| **分支策略困惑** | "hard to tell what is going on" — 技术变更缺乏沟通 | 🟡 认知负荷 |
| **企业集成缺口** | "users with active azure subscriptions... zeroclaw does not support" — 云原生落地障碍 | 🟡 商业采用 |

### 满意点

- MCP 生态整合获认可（#3153 快速关闭）
- 配对码获取命令（#3015）提升运维效率
- 社区卸载工具 ByeByeClaw（#3169）体现生态自组织能力

---

## 8. 待处理积压

### 需维护者关注的长尾 Issue

| Issue | 天数 | 风险 | 建议动作 |
|:---|:---:|:---|:---|
| [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) GLIBC 兼容性 | 3 | S0 级阻断广泛 Linux 部署 | 提供静态链接构建或文档降级方案 |
| [#2929](https://github.com/zeroclaw-labs/zeroclaw/issues/2929) 分支策略文档 | 6 | 贡献者 onboarding 摩擦 | 24h 内更新 CONTRIBUTING.md |
| [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) 飞书渠道故障 | 10 | 中国企业用户流失 | 分配渠道维护者或标记 help-wanted |
| [#2960](https://github.com/zeroclaw-labs/zeroclaw/issues/2960) 浏览器配对持久化 | 5 | Gateway 核心体验破损 | 纳入 v0.1.8 修复里程碑 |

### 待合并 PR 提醒

- [#3235](https://github.com/zeroclaw-labs/zeroclaw/pull/3235) CLI 工具调用显示修复 — 已解决冲突，待最终审查
- [#3236](https://github.com/zeroclaw-labs/zeroclaw/pull/3236) Vite 代理路由 — 开发体验优化，建议优先合并

---

*本日报基于 Zeroclaw 开源社区公开数据生成，不代表项目官方立场。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-03-12

## 1. 今日速览

PicoClaw 今日展现**极高活跃度**，24小时内产生 **101 个 PR 更新**（62 待合并）和 **23 条 Issues 更新**（17 活跃），并发布 **3 个版本**（含正式版 v0.2.2）。社区正经历**密集迭代期**：Agent 架构重构成为核心主线，Web UI 体验优化快速响应，同时 Provider 兼容性修复持续进行。项目健康度良好，但 PR 积压量较大，需关注合并效率。

---

## 2. 版本发布

### [v0.2.2](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2)（正式版）
| 属性 | 内容 |
|:---|:---|
| **核心变更** | Web 设置新增 `exec allow_remote` 配置支持；合并语音/音频转录功能（Echo Voice） |
| **关键提交** | `8949a25` - 远程执行权限配置；`30584f0` - Echo Voice 音频转录 |
| **迁移注意** | 若使用 Web 面板管理远程执行权限，需升级后重新检查安全策略 |

### [v0.2.1-nightly.20260311.9cd2d218](https://github.com/sipeed/picoclaw/releases/tag/v0.2.1-nightly.20260311.9cd2d218)（夜间版）
| 属性 | 内容 |
|:---|:---|
| **核心变更** | Debug 模式无截断输出；Telegram Forum Topics 支持 |
| **稳定性** | ⚠️ 自动化构建，生产环境慎用 |

---

## 3. 项目进展

### 已合并/关闭的关键 PR（39 条中的核心项）

| PR | 作者 | 贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#1056](https://github.com/sipeed/picoclaw/pull/1056) | @XYDT-ChenBo | `read_file` 工具添加安全防护 | **安全基线提升** - 防止路径遍历攻击 |
| [#956](https://github.com/sipeed/picoclaw/pull/956) | @Alexandersfg4 | 修复非 OpenAI 模型的 `prompt_cache_key` 误用 | **兼容性修复** - 解决 Groq/其他提供商的 400 错误 |
| [#1355](https://github.com/sipeed/picoclaw/pull/1355) | @mahendrateja95 | `TOOLS.md` 纳入 Agent 引导文件 | **架构完善** - 工具描述正式化 |
| [#1387](https://github.com/sipeed/picoclaw/pull/1387) | @mahendrateja95 | 改进 `prompt_cache_key` 主机匹配逻辑 | **可靠性** - 使用 `url.Parse()` 替代字符串包含判断 |
| [#1196](https://github.com/sipeed/picoclaw/pull/1196) | @gautamrajur | 跳过 Groq API 的 `prompt_cache_key` | **Provider 生态** - 与 #956/#835 形成完整修复链 |
| [#835](https://github.com/sipeed/picoclaw/pull/835) | @PixelTux | 排除 Groq 的 Prompt Caching | **同上** |
| [#796](https://github.com/sipeed/picoclaw/pull/796) | @friday-james | 跳过 Gemini 的 `prompt_cache_key` | **Provider 生态** - Gemini 400 错误根治 |
| [#943](https://github.com/sipeed/picoclaw/pull/943) | @ukpratik | 日志文件写入互斥锁 | **稳定性** - 并发安全修复 |
| [#1296](https://github.com/sipeed/picoclaw/pull/1296) | @yorkhellen | 移除 Go 日志重复时间戳 | **体验优化** - 日志可读性提升 |
| [#555](https://github.com/sipeed/picoclaw/pull/555) | @as3k | Agent 管道端到端视觉/图像支持 | **能力扩展** - Gemini 2.0 Flash 图像处理启用 |

**整体推进评估**：今日合并聚焦 **Provider 兼容性矩阵完善**（OpenAI/Groq/Gemini 全覆盖）、**Agent 架构基础设施**（TOOLS.md、Vision 支持）、**安全与稳定性加固** 三大方向，为 v0.3.0 的 Agent 重构奠定坚实基础。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 | 分析 |
|:---|:---|:---:|:---|:---|
| 🥇 | [#1161](https://github.com/sipeed/picoclaw/issues/1161) Ollama 本地模型配置困惑 | **14** | 文档缺失/配置复杂 | **新用户 onboarding 瓶颈** - 本地 LLM 部署是核心场景，但配置指引不足导致"能启动无输出"的挫败感 |
| 🥈 | [#1218](https://github.com/sipeed/picoclaw/issues/1218) Agent 定义：`SOUL.md` 与 `AGENT.md` | **13** | 架构设计讨论 | **项目哲学落地** - 将 Agent 人格（SOUL）与功能（AGENT）分离的设计获得深度参与，体现社区对"AI 角色化"的强烈兴趣 |
| 🥉 | [#1316](https://github.com/sipeed/picoclaw/issues/1316) 事件驱动 Agent Loop | **7** | 可观测性与可控性 | **生产就绪需求** - 用户需要 hook、中断、追加消息能力，反映从"能跑"到"可控"的成熟度跃迁需求 |

### 高价值 PR 讨论
- [#1389](https://github.com/sipeed/picoclaw/pull/1389) **per-agent SkillsFilter** - 实现 Agent 级技能隔离，为空/ nil 时全量兼容，架构设计获认可

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---:|:---|:---:|
| 🔴 **High** | [#1151](https://github.com/sipeed/picoclaw/issues/1151) | 🟡 Open | TUI PHI 标签配置竞态条件 + HomePath 未转义 | 无 |
| 🔴 **High** | [#748](https://github.com/sipeed/picoclaw/issues/748) | 🟡 Open | Groq API 工具调用格式错误（`tool_use_failed`） | #956, #1196, #835 已合并，待验证 |
| 🟡 **Medium** | [#1350](https://github.com/sipeed/picoclaw/issues/1350) | 🟡 Open | Launcher Docker 镜像 manifest 不可用 | 无 |
| 🟡 **Medium** | [#1375](https://github.com/sipeed/picoclaw/issues/1375) | 🟡 Open | 火山引擎 SSL 证书问题 | 无 |
| 🟡 **Medium** | [#1369](https://github.com/sipeed/picoclaw/issues/1369) | 🟡 Open | Web 页面 JSON 编辑器无法左右滑动 | [#1386](https://github.com/sipeed/picoclaw/pull/1386) 🟡 Open |
| 🟡 **Medium** | [#1364](https://github.com/sipeed/picoclaw/issues/1364) | 🟡 Open | Firefox 下 Raw JSON 配置文本区高度塌陷 | 无 |
| 🟡 **Medium** | [#1348](https://github.com/sipeed/picoclaw/issues/1348) | 🟡 Open | Windows 源码启动失败（包引入错误） | 无 |
| 🟢 **Low** | [#1373](https://github.com/sipeed/picoclaw/issues/1373) | 🟡 Open | Web 对话页面默认显示新对话而非上次内容 | [#1385](https://github.com/sipeed/picoclaw/pull/1385) 🟡 Open |

### 已关闭 Bug（今日修复验证）
| Issue | 关闭原因 |
|:---|:---|
| [#297](https://github.com/sipeed/picoclaw/issues/297) | 螳螂虾 Logo 设计完成 |
| [#1280](https://github.com/sipeed/picoclaw/issues/1280) | IRC 配置中文标点问题 |
| [#1287](https://github.com/sipeed/picoclaw/issues/1287) | 工具调用 JSON 解析失败 |
| [#1299](https://github.com/sipeed/picoclaw/issues/1299) | Agent 模式 MCP 不工作 |
| [#1290](https://github.com/sipeed/picoclaw/issues/1290) | Gateway 自启动配置 |
| [#1333](https://github.com/sipeed/picoclaw/issues/1333) | Mistral 422 错误（`extra_forbidden`）|

---

## 6. 功能请求与路线图信号

### 用户提出且与活跃 PR 共振的需求

| 功能请求 | Issue | 相关 PR | 纳入下一版本概率 |
|:---|:---|:---|:---:|
| **Telegram 实时流式响应** | [#1098](https://github.com/sipeed/picoclaw/issues/1098) | #1332（工具实时反馈）技术同源 | **高** - 基础设施已就绪 |
| **Engram 持久化内存后端** | [#175](https://github.com/sipeed/picoclaw/issues/175) | 无 | 中 - 与当前 `MEMORY.md` 哲学冲突，需架构决策 |
| **Android 设备自动化** | [#292](https://github.com/sipeed/picoclaw/issues/292) | 无 | 中 - 路线图标记，技术挑战大 |
| **GitHub Copilot 设备码认证** | [#1347](https://github.com/sipeed/picoclaw/issues/1347) | 无 | **高** - 认证生态完善需求明确 |
| **OpenIM 插件支持** | [#1372](https://github.com/sipeed/picoclaw/issues/1372) | 无 | 低 - 等待社区贡献 |
| **Docker 镜像内置 Node.js 22** | [#1371](https://github.com/sipeed/picoclaw/issues/1371) | 无 | 中 - 运行时扩展需求 |
| **请求日志与统计系统** | 无对应 Issue | [#1383](https://github.com/sipeed/picoclaw/pull/1383) | **高** - 企业级功能，PR 已提交 |

### 架构级信号
- **Agent 重构**（#1218, #1316）与 **Skills 过滤**（#1389）表明 v0.3.0 将聚焦 **多 Agent 编排与权限隔离**
- **iMessage 支持**（#1268）拓展 Apple 生态，与 Telegram/IRC 形成完整 IM 矩阵

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 核心不满 |
|:---|:---|:---|
| **本地部署门槛** | #1161 | "Agent 启动但无响应" - 配置 Ollama 的隐性依赖未文档化 |
| **跨平台开发体验** | #1348 | Windows 源码构建失败，Go 模块缓存问题无明确解决方案 |
| **Web UI 移动端适配** | #1369 | JSON 编辑器无法横向滑动，阻碍配置调试 |
| **企业网络环境** | #1375 | 火山引擎 SSL 证书验证失败，需绕过或更新 CA |

### 满意点
- **快速迭代响应**：#1373（对话状态记忆）当日提 Issue 当日有 PR #1385
- **架构设计透明**：#1218 的 SOUL/AGENT 分离设计获得深度社区参与

### 期望落差
- **Docker 部署体验**：#1350 Launcher 镜像缺失 manifest，与"一键部署"承诺有差距
- **Provider 兼容性**：Groq/Gemini 的 `prompt_cache_key` 问题反复出现，显示测试矩阵覆盖不足

---

## 8. 待处理积压

### 需维护者关注的高价值积压

| Issue/PR | 创建时间 | 状态 | 风险/价值 |
|:---|:---:|:---:|:---|
| [#292](https://github.com/sipeed/picoclaw/issues/292) Android 自动化 | 2026-02-16 | Open, 3 评论 | **路线图功能**，技术复杂度高，需资源投入决策 |
| [#175](https://github.com/sipeed/picoclaw/issues/175) Engram 内存后端 | 2026-02-14 | Open, 1 评论 | **架构分歧**，需明确与 `MEMORY.md` 的演进关系 |
| [#748](https://github.com/sipeed/picoclaw/issues/748) Groq 工具调用 | 2026-02-25 | Open, 6 评论 | 多 PR 声称修复，需验证关闭或明确剩余问题 |
| [#1139](https://github.com/sipeed/picoclaw/pull/1139) 环境变量日志级别 | 2026-03-05 | Open | **体验优化**，低冲突，建议优先合并 |
| [#1179](https://github.com/sipeed/picoclaw/pull/1179) MessageBus 优雅关闭 | 2026-03-06 | Open | **稳定性**，Go 泛式重构，需代码审查资源 |

### 合并队列压力
- **62 个待合并 PR** 中，建议优先处理：
  1. Web UI 修复（#1385, #1386）- 用户体验直接影响
  2. Agent 架构相关（#1389, #1332）- v0.3.0 基础
  3. 日志/可观测性（#1383, #1139）- 运维刚需

---

*日报生成时间：2026-03-12 | 数据来源：GitHub API 与公开仓库活动*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-03-12

## 1. 今日速览

NanoClaw 今日呈现**高强度开发态势**，24小时内产生 **39 个 PR**（31 个待审）和 **9 个 Issue**（7 个活跃），活跃度处于近期峰值。核心矛盾集中在**容器架构安全加固**与**多平台扩展**两条主线：社区正激烈辩论容器隔离的信任边界问题，同时飞书、QQ、Discord 等渠道接入 PR 密集涌现。稳定性方面，OAuth 令牌刷新、流式消息洪水、MCP 环境变量传递等高频 Bug 均有待审修复方案，但 #958 "完全无响应" 类基础可用性问题仍待诊断。整体项目处于**功能快速扩张期**，技术债务与安全审计压力同步累积。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭 PR（8 个）

| PR | 作者 | 类型 | 关键进展 |
|:---|:---|:---|:---|
| [#977](https://github.com/qwibitai/nanoclaw/pull/977) | @5queezer | 功能 | **语义记忆系统**：LanceDB + Gemini 嵌入实现向量记忆，提供 `memory_store/search/delete/count` 4 个 MCP 工具 |
| [#975](https://github.com/qwibitai/nanoclaw/pull/975) | @5queezer | 功能 | **GitHub MCP 服务器**：容器内原生集成 `@modelcontextprotocol/server-github`，支持结构化仓库操作 |

> **里程碑意义**：语义记忆 PR 的合并标志着 NanoClaw 从"无状态代理"向"持久化认知架构"演进，为长期任务执行奠定基础。

---

## 4. 社区热点

### 最高关注度议题

| 排名 | Issue/PR | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#865](https://github.com/qwibitai/nanoclaw/issues/865) | 高优 Enhancement，安全架构深度讨论 | **容器安全范式反思**：@calebfaruki 提出"容器≠安全"的系统性批评，指出当前架构在脚本执行层级、容器镜像信任、主机凭证暴露三处存在过度信任。该 Issue 触及项目核心架构假设，可能推动安全模型重构 |
| 🔥2 | [#977](https://github.com/qwibitai/nanoclaw/pull/977) | 语义记忆功能合并 | 社区对"代理长期记忆"需求强烈，LanceDB 选型兼顾本地隐私与云端扩展，但 Gemini 嵌入的供应商锁定引发潜在担忧 |
| 🔥3 | [#732](https://github.com/qwibitai/nanoclaw/issues/732) / [#965](https://github.com/qwibitai/nanoclaw/pull/965) | 高优 Bug + 配套修复 PR | WhatsApp 流式消息洪水问题：用户痛点明确（"渐进式长文本刷屏"），@kianwoon 已提交缓冲修复方案待审 |

**深层信号**：安全架构辩论（#865）与功能快速迭代形成张力，社区开始质疑"Move Fast"策略下的安全债累积。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 状态 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| **High** | [#958](https://github.com/qwibitai/nanoclaw/issues/958) Can not get a response | 🆕 新报，待诊断 | 基础可用性完全阻断 | ❌ 无 |
| **High** | [#960](https://github.com/qwibitai/nanoclaw/issues/960) MCP env vars not passed after credential proxy migration | 🆕 新报，根因明确 | 第三方 MCP 服务器（iCloud、Home Assistant 等）失效 | ❌ 无（需回滚或补漏） |
| **High** | [#732](https://github.com/qwibitai/nanoclaw/issues/732) 流式消息洪水 | 有修复待审 | WhatsApp 用户体验 | ✅ [#965](https://github.com/qwibitai/nanoclaw/pull/965) |
| **High** | [#709](https://github.com/qwibitai/nanoclaw/issues/709) 密钥管理双列表漂移风险 | ✅ 已关闭 | 安全防御纵深失效 | 已解决 |
| Medium | [#853](https://github.com/qwibitai/nanoclaw/issues/853) ANTHROPIC_AUTH_TOKEN 未识别 | 有修复待审 | Claude Code 用户 setup 体验 | 待关联 PR |
| Medium | [#973](https://github.com/qwibitai/nanoclaw/issues/973) Setup 耗时过长 | 🆕 新报 | 首次用户体验 | ❌ 无 |

**关键风险**：#960 揭示 credential proxy 迁移（#798）的回归缺陷，MCP 生态兼容性断裂，建议紧急评估回滚或热修复。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **Podman 支持** | [#957](https://github.com/qwibitai/nanoclaw/issues/957) | ⭐⭐⭐ 高 | 符合 #865 安全加固方向，Docker Desktop 许可争议推动替代方案需求 |
| **多实例共存** | [#970](https://github.com/qwibitai/nanoclaw/pull/970) | ⭐⭐⭐⭐ 极高 | PR 已提交，企业级部署刚需，命名空间隔离设计成熟 |
| **OpenAI Codex 引擎** | [#963](https://github.com/qwibitai/nanoclaw/pull/963) | ⭐⭐⭐⭐ 极高 | 直接回应 #80 多运行时支持路线图，opt-in 设计降低风险 |
| **Discord 视觉+语音** | [#974](https://github.com/qwibitai/nanoclaw/pull/974) | ⭐⭐⭐⭐ 极高 | 多模态能力补齐，sharp 图像处理 + 语音转写技术栈完整 |
| **飞书/Lark 渠道** | [#964](https://github.com/qwibitai/nanoclaw/pull/964) | ⭐⭐⭐⭐ 极高 | 企业 IM 覆盖关键缺口，WebSocket 方案无需公网 IP |
| **QQ 渠道** | [#966](https://github.com/qwibitai/nanoclaw/pull/966), [#836](https://github.com/qwibitai/nanoclaw/pull/836) | ⭐⭐⭐ 高 | 两个竞争实现，需合并评估；国内生态重要入口 |
| **GitHub 自治治理** | [#921](https://github.com/qwibitai/nanoclaw/pull/921) | ⭐⭐ 中 | 概念超前（"self-healing lanes"），标记为 Blocked，需架构共识 |

**路线图推断**：下一版本核心主题或为**"多平台覆盖 + 多引擎支持"**，中国/东南亚企业 IM 生态（飞书、QQ）与 OpenAI 生态兼容是明确优先级。

---

## 7. 用户反馈摘要

### 真实痛点

> *"I run /setup and followed all steps. I send message, and never get reply... I can't understand how this could happen"* — [#958](https://github.com/qwibitai/nanoclaw/issues/958) @FengqianLin

**诊断盲区**：setup 成功但运行时静默失败，缺乏可观测性工具，用户陷入"黑箱调试"困境。

> *"Setup via claude code is incredibly slow, what is it so complex for setup that a plain .json file cannot handle?"* — [#973](https://github.com/qwibitai/nanoclaw/issues/973) @rhighs

**体验债务**：交互式 setup 的复杂度与用户预期的"单文件配置"存在落差。

### 安全焦虑

> *"Assume the agent is untrusted... Most scripts should not live at the agent level"* — [#865](https://github.com/qwibitai/nanoclaw/issues/865) @calebfaruki

**架构信任危机**：早期用户开始质疑核心设计假设，从"功能可用"转向"生产就绪"评估。

### 积极信号

> *"Created ByeByeClaw — a one-click uninstaller"* — [#955](https://github.com/qwibitai/nanoclaw/issues/955) @wanikua

生态工具涌现表明用户基数足够支撑周边工具链，但"卸载工具"本身也暗示 setup/清理体验的原生缺陷。

---

## 8. 待处理积压

| 类型 | 条目 | 悬停时间 | 风险 |
|:---|:---|:---|:---|
| PR | [#412](https://github.com/qwibitai/nanoclaw/pull/412) 主机授权透传 | 17 天 | setup 体验改进，与 #973 痛点相关 |
| PR | [#836](https://github.com/qwibitai/nanoclaw/pull/836) QQ 渠道（较早实现） | 4 天 | 与 #966 功能重复，需协调合并或择优 |
| Issue | 长期无响应的 **High 优先级 Bug** 模式 | — | #958 等新报严重问题缺乏维护者介入 |

**维护者行动建议**：
1. 优先诊断 #958（完全无响应）—— 需补充调试指南或遥测能力
2. 紧急评估 #960（MCP 回归）—— 考虑 credential proxy 回滚
3. 协调 #836 vs #966 QQ 实现 —— 避免社区贡献者精力分散

---

*日报生成时间：2026-03-12 | 数据来源：GitHub API / qwibitai/nanoclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-03-12

## 1. 今日速览

IronClaw 今日呈现**高活跃度与高质量交付并行**的态势：v0.18.0 正式发布后 24 小时内即启动 v0.19.0 发布流程，显示快速迭代节奏。Issues 侧 34 条更新中社区反馈占主导，特别是 WASM 工具链兼容性、MCP 协议合规性、以及 ngrok 隧道稳定性成为焦点。PR 流水线 50 条更新中，自动化 staging-promotion 占比显著（6 条），体现 CI/CD 成熟度提升。值得注意的是，AI 驱动的 staging-ci-review 今日批量产出 7 条安全/质量 issue，标志项目进入"人机协同代码审查"新阶段。

---

## 2. 版本发布

### v0.18.0 已发布（2026-03-11）

| 属性 | 详情 |
|:---|:---|
| **标签** | [v0.18.0](https://github.com/nearai/ironclaw/releases/tag/v0.18.0) |
| **核心变更** | WASM arti 更新、staging 分支晋升 |
| **破坏性变更** | 暂无明确文档，但 #959 报告 `staging/Cargo.toml` 版本号未同步（仍为 0.17.0） |
| **迁移注意** | ⚠️ 首次安装用户可能遇到 registry 404 问题（见 #958）— 工具产物 URL 使用旧版无版本命名 |

**关键跟进**：v0.19.0 发布 PR [#973](https://github.com/nearai/ironclaw/pull/973) 已创建，包含 API 破坏性变更（`constructible_struct_adds_field`）。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#964](https://github.com/nearai/ironclaw/pull/964) | @henrypark133 | **WASM 产物命名空间隔离**：为工具/通道添加 `tool-`/`channel-` 前缀，解决同名冲突（如 slack/telegram） | #958 |
| [#935](https://github.com/nearai/ironclaw/pull/935) | @reidliu41 | **MCP 协议合规**：修复 stdio/unix 传输跳过 `initialize` 握手的问题 | #890 |
| [#760](https://github.com/nearai/ironclaw/pull/760) | @pikaxinge | **安全加固**：阻断跨用户 `thread_id` 上下文污染（高危漏洞修复） | — |
| [#735](https://github.com/nearai/ironclaw/pull/735) | @lighterEB | **稳定性**：ngrok 僵尸进程修复，通过后台任务持续排空管道 | #733 |
| [#949](https://github.com/nearai/ironclaw/pull/949) | @reidliu41 | **体验优化**：Windows 双键触发问题修复， onboard 流程更稳健 | #937 |
| [#752](https://github.com/nearai/ironclaw/pull/752) | @reidliu41 | **安全**：MCP 自定义 Header CRLF 注入防护 + Authorization 覆盖 bug 修复 | #704 |

**整体推进评估**：今日合并聚焦**协议合规性**（MCP）、**安全加固**（上下文隔离、Header 注入）、**稳定性**（进程管理、Windows 输入），项目在生产就绪度上迈出关键一步。

---

## 4. 社区热点

### 高互动 Issues

| 排名 | Issue | 评论 | 核心诉求 | 深层分析 |
|:---|:---|:---:|:---|:---|
| 1 | [#142](https://github.com/nearai/ironclaw/issues/142) | 9 | **NEAR AI 认证强制化争议** | 社区对"必须 fork 修改才能移除 NEAR AI 认证"强烈不满，反映**开源核心与商业生态的张力**。作者情绪激烈，暗示竞品（OpenClaw 生态）分流风险 |
| 2 | [#733](https://github.com/nearai/ironclaw/issues/733) | 5 | ngrok 僵尸进程 | 生产环境稳定性痛点，已快速修复（PR #735） |
| 3 | [#840](https://github.com/nearai/ironclaw/issues/840) | 4 | WASM 工具 WIT 版本不匹配 | ** onboarding 体验断裂**：新用户首次安装即遇错误，影响转化 |
| 4 | [#299](https://github.com/nearai/ironclaw/issues/299) | 2 | MCP 服务器认证配置困难 | Browserbase 集成案例，暴露**MCP 配置灵活性不足** |
| 5 | [#738](https://github.com/nearai/ironclaw/issues/738) | 2 | 托管隧道端口绑定错误 |  webhook 通道 404 根因，配置逻辑 bug |

**趋势洞察**：社区声音从"功能请求"转向"体验修复"和"架构解耦"，对 IronClaw 作为**独立开源项目**的期待 vs **NEAR 生态绑定**的现实矛盾正在积累。

---

## 5. Bug 与稳定性

### 按严重程度排序

| 级别 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---:|:---|:---|
| 🔴 **HIGH** | [#975](https://github.com/nearai/ironclaw/issues/975) | Open | `validate_tool_schema()` 无界递归（置信度 90%） | 无 |
| 🔴 **HIGH** | [#974](https://github.com/nearai/ironclaw/issues/974) | Open | `resolve_nested()` 无界递归（置信度 95%） | 无 |
| 🔴 **HIGH** | [#977](https://github.com/nearai/ironclaw/issues/977) | Open | 参数 schema JSON 无界（置信度 75%） | 无 |
| 🔴 **HIGH** | [#976](https://github.com/nearai/ironclaw/issues/976) | Open | `CapabilitiesFile` 描述字符串无界（置信度 75%） | 无 |
| 🔴 **HIGH** | [#963](https://github.com/nearai/ironclaw/issues/963) | Open | `test.yml` 工作流条件逻辑等价性 bug（置信度 100%） | 无 |
| 🟡 **MEDIUM** | [#980](https://github.com/nearai/ironclaw/issues/980) | Open | 缺失参数警告条件误导性 | 无 |
| 🟡 **MEDIUM** | [#979](https://github.com/nearai/ironclaw/issues/979) | Open | JSON 文件读取无大小限制 | 无 |
| 🟡 **MEDIUM** | [#978](https://github.com/nearai/ironclaw/issues/978) | Open | 热路径大 JSON 不必要克隆 | 无 |
| 🟢 **已修复** | [#733](https://github.com/nearai/ironclaw/issues/733) | Closed | ngrok 僵尸进程 | [#735](https://github.com/nearai/ironclaw/pull/735) |
| 🟢 **已修复** | [#937](https://github.com/nearai/ironclaw/issues/937) | Closed | Windows 双键触发 | [#949](https://github.com/nearai/ironclaw/pull/949) |
| 🟢 **已修复** | [#890](https://github.com/nearai/ironclaw/issues/890) | Closed | MCP 跳过 initialize 握手 | [#935](https://github.com/nearai/ironclaw/pull/935) |

**关键观察**：AI 代码审查（staging-ci-review）今日爆发式产出 7 条 issue，其中 4 条 HIGH 级别均涉及**无界递归/无界输入**类安全风险。这既是质量提升信号，也提示**人工 review 可能遗漏的系统性问题**。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 可行性信号 | 纳入 v0.19+ 概率 |
|:---|:---|:---|:---:|
| [#914](https://github.com/nearai/ironclaw/issues/914) | 集成 `cortex-mem` 作为可选内存后端 | 社区生态扩展需求，Rust 原生 | ⭐⭐⭐⭐ |
| [#913](https://github.com/nearai/ironclaw/issues/913) | Anthropic 兼容端点自定义 `base_url` | 常见需求（vLLM/SGLang/llama.cpp） | ⭐⭐⭐⭐⭐ |
| [#946](https://github.com/nearai/ironclaw/issues/946) | Web 聊天悬停复制按钮 | UX 细节，PR #844 显示 CLI 侧已有 routine 管理 | ⭐⭐⭐⭐ |
| [#770](https://github.com/nearai/ironclaw/issues/770) | Agent 间技能共享 | 企业场景核心需求，架构影响大 | ⭐⭐⭐ |
| [#943](https://github.com/nearai/ironclaw/issues/943) | OpenClaw 生态兼容 | 战略级问题，与 #142 认证争议相关 | ⭐⭐ |

**PR 前瞻**：[#844](https://github.com/nearai/ironclaw/pull/844) 的 `routine` CLI 子命令（XL 级，低风险）已进入 review，预计 v0.19.0 或 v0.20.0 落地。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **首次安装即失败** | #840, #875, #939, #958 | WASM 工具链版本不匹配、checksum 失败、registry 404 — "onboard" 体验脆弱 |
| **Windows 二等公民** | #937, #930 | 输入处理 bug、API key 提示跳过、路径问题 |
| **MCP 配置黑盒** | #299 | 无法直接编辑 `mcpServers` JSON，认证参数传递困难 |
| **生态锁定焦虑** | #142 | "为什么必须 NEAR AI 认证？" — 身份认同危机 |

### 正向反馈

- **快速响应**：ngrok 僵尸进程 (#733) 从报告到修复仅 3 天
- **安全投入**：上下文隔离 (#760) 体现对多租户安全的重视
- **国际化**：俄语 README (#850) 显示社区扩展意愿

---

## 8. 待处理积压

### 需维护者关注

| Issue | 天数 | 风险 | 建议动作 |
|:---|:---:|:---|:---|
| [#142](https://github.com/nearai/ironclaw/issues/142) | 23d | 🔥 **社区信任危机** | 官方回应 NEAR AI 认证的架构必要性，或提供官方插件化方案 |
| [#299](https://github.com/nearai/ironclaw/issues/299) | 18d | MCP 采用障碍 | 文档补充或配置界面改进 |
| [#770](https://github.com/nearai/ironclaw/issues/770) | 2d | 企业场景缺失 | 路线图沟通 |

### 技术债务

- **版本同步**：#959 指出 `staging/Cargo.toml` 与 release tag 版本号不一致，需流程修复
- **AI 审查 issue 跟进**：7 条 staging-ci-review 产出 issue 尚无人工认领，需建立分级响应机制

---

*本日报基于 IronClaw 开源社区公开数据生成，不代表 NEAR AI 官方立场。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-03-12

> 网易有道开源 AI 智能体平台 | [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日保持**高活跃度**，24小时内产生 **12 条 Issues**（11 活跃/1 关闭）与 **11 条 PR**（7 已合并/关闭）。项目发布 **v0.2.3 补丁版本**，聚焦 IM 平台集成修复与 UI 体验优化。社区反馈呈现**两极分化**：一方面企业微信、QQ、钉钉等 IM 适配进展迅速；另一方面核心体验问题（中文数字空格插入、Bash 执行卡顿、记忆能力弱）持续发酵，用户流失风险显现。PR 合并效率较高，但 Issue 响应率偏低，长期 Bug 积压需关注。

---

## 2. 版本发布

### [v0.2.3](https://github.com/netease-youdao/LobsterAI/releases/tag/v0.2.3) 已发布

| 属性 | 内容 |
|:---|:---|
| 发布日期 | 2026-03-11 |
| 变更类型 | 补丁版本（Patch） |
| 主要贡献者 | @liuzhq1986 |

**更新内容：**

| PR | 变更说明 | 影响范围 |
|:---|:---|:---|
| [#348](https://github.com/netease-youdao/LobsterAI/pull/348) | 修复 IM/QQ 相关问题 | IM 平台稳定性 |
| [#355](https://github.com/netease-youdao/LobsterAI/pull/355) | 聊天分页功能 | 长对话性能 |
| [#371](https://github.com/netease-youdao/LobsterAI/pull/371) | **主界面附件支持多文件选择** | 核心交互体验 |

**迁移注意事项：** 从 Release Note 截断处判断，可能存在未完整展示的破坏性变更，建议升级前备份配置（参考 [#382](https://github.com/netease-youdao/LobsterAI/issues/382) 用户反馈"更新时所有设置需重新填写"）。

---

## 3. 项目进展

### 今日已合并/关闭 PR（7 条）

| PR | 作者 | 核心贡献 | 项目价值 |
|:---|:---|:---|:---|
| [#371](https://github.com/netease-youdao/LobsterAI/pull/371) | @liuzhq1986 | 主界面多文件选择 | ⭐ 用户体验关键改进 |
| [#375](https://github.com/netease-youdao/LobsterAI/pull/375) | @fisherdaddy | 修复 Mac 端 Node 环境污染 | 开发环境稳定性 |
| [#378](https://github.com/netease-youdao/LobsterAI/pull/378) | @liugang519 | 钉钉支持 OpenClaw 实现 | 企业 IM 生态扩展 |
| [#381](https://github.com/netease-youdao/LobsterAI/pull/381) | @liugang519 | QQ 支持 OpenClaw 实现 | 社交 IM 生态扩展 |
| [#383](https://github.com/netease-youdao/LobsterAI/pull/383) | @liugang519 | 企微机器人支持 OpenClaw | 企业 IM 生态扩展 |
| [#372](https://github.com/netease-youdao/LobsterAI/pull/372) / [#373](https://github.com/netease-youdao/LobsterAI/pull/373) | @mjnhmd | IM 平台异步消息处理器（迭代关闭） | 超时问题根治方案 |

**进展评估：** 
- **IM 平台战略**：单日完成钉钉/QQ/企微三大平台 OpenClaw 适配，显示有道在企业服务市场的激进布局
- **技术债务清理**：Mac 环境修复与异步消息处理器（防 IM 平台超时）体现工程化成熟度提升
- **遗留问题**：#372/#373/#374 显示同一功能经 3 次 PR 迭代，代码审查流程可能存在反复

---

## 4. 社区热点

### 🔥 讨论最活跃 Issues

| 排名 | Issue | 评论数 | 核心诉求 | 情绪分析 |
|:---|:---|:---:|:---|:---|
| 1 | [#344](https://github.com/netease-youdao/LobsterAI/issues/344) 中文+数字自动加空格 | **5 条** | 阻断性 Bug 修复 | 😤 急躁/愤怒 |
| 2 | [#350](https://github.com/netease-youdao/LobsterAI/issues/350) Bash 执行太慢 | **3 条** | 性能优化 | 😤 急躁 |
| 3 | [#357](https://github.com/netease-youdao/LobsterAI/issues/357) 读取图片卡死 | **3 条** | 稳定性修复 | 😤 急躁 |

**诉求深度分析：**

> **#344 空格插入问题** — 用户明确对比 OpenClaw："目前还无法替代 openclaw"，这是**竞品替代关键阻碍**。技术层面疑似 tokenization 或后处理逻辑缺陷，但用户反馈"告诉他错误还是会加"，暗示 prompt engineering 无法规避，需底层修复。

> **#350 Bash 性能问题** — 暴露 Agent 工具调用的 timeout 机制设计缺陷："天生没有返回字符串的命令还要干等"，需引入 async/await 或流式输出机制（与今日合并的 #372 系列方向一致）。

---

## 5. Bug 与稳定性

### 🚨 按严重程度排序

| 优先级 | Issue | 现象 | 影响范围 | Fix PR 状态 |
|:---|:---|:---|:---|:---|
| **P0-阻断** | [#344](https://github.com/netease-youdao/LobsterAI/issues/344) | 中文数字间强制插空格 | 中文用户核心体验 | ❌ 无 |
| **P0-阻断** | [#357](https://github.com/netease-youdao/LobsterAI/issues/357) | 读取图片卡死 | 多模态功能 | ❌ 无 |
| **P1-严重** | [#350](https://github.com/netease-youdao/LobsterAI/issues/350) | Bash 命令执行分钟级延迟 | 开发者效率 | 🔄 相关：#372 系列（IM 超时） |
| **P1-严重** | [#186](https://github.com/netease-youdao/LobsterAI/issues/186) | 记忆能力极差，多模型无效 | 长期对话可用性 | ❌ 无（12 天未解决） |
| **P1-严重** | [#370](https://github.com/netease-youdao/LobsterAI/issues/370) | 输入"你好"触发 8961 token | Token 计算逻辑错误 | ❌ 无 |
| **P2-一般** | [#385](https://github.com/netease-youdao/LobsterAI/issues/385) | 讯飞 codePlaning 对话报错 | 第三方模型兼容 | ❌ 无 |
| **P2-一般** | [#382](https://github.com/netease-youdao/LobsterAI/issues/382) | 更新后配置丢失 | 升级体验 | ❌ 无 |

**稳定性健康度：⚠️ 黄色预警** — 3 个 P0 级体验阻断问题 0 修复，用户流失风险高。

---

## 6. 功能请求与路线图信号

### 今日新增功能请求（6 条）

| Issue | 需求 | 技术可行性 | 纳入下版本概率 | 信号强度 |
|:---|:---|:---:|:---:|:---:|
| [#386](https://github.com/netease-youdao/LobsterAI/issues/386) Docker 容器部署 | 云原生/企业部署 | 高 | ⭐⭐⭐⭐⭐ | 🔥 强需求 |
| [#384](https://github.com/netease-youdao/LobsterAI/issues/384) 升级 Claude Agent SDK（Agent Teams） | 多 Agent 协作 | 中 | ⭐⭐⭐⭐☆ | 🔥 强需求（与 #240 呼应） |
| [#377](https://github.com/netease-youdao/LobsterAI/issues/377) 环境变量配置项 | Skill 开发灵活性 | 高 | ⭐⭐⭐⭐⭐ | 🔥 强需求（chart-visualization 已需要） |
| [#379](https://github.com/netease-youdao/LobsterAI/issues/379) 文件路径快速打开 | 开发者体验 | 高 | ⭐⭐⭐⭐☆ | 👍 1 票支持 |
| [#273](https://github.com/netease-youdao/LobsterAI/issues/273) Ubuntu Linux 版本 | 跨平台支持 | 中 | ⭐⭐⭐☆☆ | ✅ 已关闭（可能已支持或搁置） |

### 与现有 PR 的路线图关联

- **Agent Teams / 多 Agent 工作流**：[#384](https://github.com/netease-youdao/LobsterAI/issues/384) 请求升级 SDK + [#240](https://github.com/netease-youdao/LobsterAI/pull/240) `Feat/workflow enhancement`（3 月 3 日提出，含 agent 专属 soul.md 与 PASS/REJECT 流转机制）→ **v0.3.0 核心方向**
- **定时任务增强**：[#376](https://github.com/netease-youdao/LobsterAI/pull/376) 新增小时级调度模式 → **自动化能力扩展**
- **外部应用集成**：[#380](https://github.com/netease-youdao/LobsterAI/pull/380) 自定义 URI 协议支持（Obsidian/VS Code/Figma）→ **工具链生态**

---

## 7. 用户反馈摘要

### 💔 核心痛点（ verbatim 提炼）

| 痛点 | 原声引用 | 场景 |
|:---|:---|:---|
| **无法替代 OpenClaw** | "因为[空格]这个严重BUG，所以目前还无法替代openclaw" | 中文内容生产 |
| **更新体验差** | "更新又这么频繁""所有设置都要重新填写一遍，差劲" | 版本迭代 |
| **记忆虚假承诺** | "即使在记忆里面配置上，也几乎没有效果" | 长期项目协作 |
| **Token 计算失控** | "输入一个你好，怎么就超token数了" | 成本控制恐慌 |
| **多模态不稳定** | "每次让ai读取图片都会出现卡死情况" | 视觉工作流 |

### ✅ 认可方向

- IM 平台集成速度快（单日三平台）
- 更新频率高（活跃维护信号）

---

## 8. 待处理积压

### ⏰ 长期未响应高价值 Issue

| Issue | 创建时间 | 天数 | 风险 | 建议动作 |
|:---|:---|:---:|:---|:---|
| [#186](https://github.com/netease-youdao/LobsterAI/issues/186) 记忆能力差 | 2026-02-28 | **12 天** | 竞品对比负面传播 | 优先级提升至 P0，分配架构师 |
| [#240](https://github.com/netease-youdao/LobsterAI/pull/240) Workflow Enhancement | 2026-03-03 | **9 天** | 社区贡献流失 | 明确 review 时间表或合并 |
| [#344](https://github.com/netease-youdao/LobsterAI/issues/344) 中文空格 Bug | 2026-03-09 | 3 天 | 中文市场口碑崩塌 | 48 小时内响应修复计划 |

### 📊 维护者关注清单

- [ ] 确认 #344 空格插入问题的根因（tokenizer/post-processing？）
- [ ] 评估 #370 token 计算异常的监控告警机制
- [ ] 制定配置持久化方案（解决 #382 更新丢配置）
- [ ] 回应 #186 记忆能力问题的技术路线图

---

*日报生成时间：2026-03-12 | 数据来源：GitHub API 与公开仓库活动*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 | 2026-03-12

> 项目: [TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw) | 分析日期: 2026-03-12

---

## 1. 今日速览

TinyClaw 今日呈现**高强度迭代态势**：24小时内完成 **9 个 Issue 关闭** 与 **6 个 PR 合并/关闭**，仅余 1 个待合并 PR 和 3 个新开启的功能请求。核心维护者 @jlia0 主导了架构级重构——从 Bash CLI 迁移至 TypeScript/@clack/prompts、单体拆分为 5 个 npm workspace，并发布 v0.0.10 优化运维体验。社区活跃度显著，单日出现 3 个连贯的 TinyOffice UX 改进提案，显示 Web 门户正成为用户关注焦点。**项目健康度：优秀**，技术债务清理与功能演进并行推进。

---

## 2. 版本发布

### [v0.0.10](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.10) | 2026-03-11

| 变更项 | 说明 | 影响评估 |
|:---|:---|:---|
| **移除 logs pane** | 从 `daemon.sh` 的 tmux session 中移除专用日志面板 | ⚠️ 轻微破坏性：依赖 tmux 日志面板的运维脚本需调整 |
| **简化 TINYCLAW_HOME 检测** | `heartbeat-cron.sh` 中优化主目录探测逻辑 | ✅ 正向优化，减少配置摩擦 |
| **Telegram watchdog 超时调整** | 轮询超时从 2m 延长至 5m | ✅ 提升稳定性，减少误报重启 |
| **Task/TaskStatus 类型本地化** | 任务类型定义迁移（PR #186 后续） | ⚠️ 外部集成若硬编码类型路径需更新 |

**迁移建议**：若使用自定义 tmux 布局监控日志，需改用 `tinyclaw logs` CLI 命令或转向 TinyOffice Web 界面。

---

## 3. 项目进展

### 已合并/关闭的核心 PRs

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#190](https://github.com/TinyAGI/tinyclaw/pull/190) | @jlia0 | **团队通信实时流修复**：团队编排逻辑迁移至 `@tinyclaw/teams`，代理响应实时流式输出 | 🔥 **关键稳定性修复**——解决团队场景下响应延迟/丢失问题 |
| [#186](https://github.com/TinyAGI/tinyclaw/pull/186) | @jlia0 | **架构重构**：单体 → 5 workspace  monorepo，BullMQ/Redis → SQLite WAL 队列 | 🏗️ **基础设施现代化**，降低部署复杂度，移除 Redis 依赖 |
| [#185](https://github.com/TinyAGI/tinyclaw/pull/185) | @jlia0 | **CLI 体验升级**：1500+ 行 Bash 交互迁移至 TypeScript/@clack/prompts | ✨ 显著提升安装配置体验，输入验证与错误提示更友好 |
| [#183](https://github.com/TinyAGI/tinyclaw/pull/183) | @jlia0 | **事件系统精简**：移除冗余 `message_received` 事件，简化 Office UI | 🧹 减少技术债务，UI 聚焦核心信息流 |
| [#182](https://github.com/TinyAGI/tinyclaw/pull/182) | @jlia0 | **看板交互优化**：任务拖至"In Progress"自动触发代理 | 🎯 消除重复操作，工作流更直觉 |
| [#143](https://github.com/TinyAGI/tinyclaw/pull/143) | @avianion | **新增 Avian AI 提供商** | 🌐 扩展多提供商生态，OpenAI 兼容端点模式验证 |

**整体演进**：今日合并标志着 TinyClaw 从"功能验证期"进入"工程化成熟期"——架构解耦、运维简化、用户体验三位一体推进。

---

## 4. 社区热点

### 高互动议题

| Issue | 评论数 | 热度分析 |
|:---|:---|:---|
| [#66](https://github.com/TinyAGI/tinyclaw/issues/66) Mission Control UI with traceability | 6 评论 | **长期热门**：用户对 Claude-trace、Azure Phoenix 级别的可观测性有强烈需求，涉及代理间通信图谱、工具调用追踪、记忆池可视化。虽已关闭，但需求未完全满足，可能复现于 TinyOffice 路线图。 |
| [#111](https://github.com/TinyAGI/tinyclaw/issues/111) Ollama & local model support | 3 评论, 👍1 | **隐私驱动诉求**：本地模型支持 + Claude API 密钥配置，反映企业/敏感场景用户群体。 |
| [#189](https://github.com/TinyAGI/tinyclaw/issues/189) ByeByeClaw 卸载工具 | 1 评论 | **生态信号**：社区已出现第三方卸载工具，侧面验证安装/卸载流程仍有摩擦，官方或需内置 `tinyclaw uninstall`。 |

### 今日新增热点（3 连贯提案）

| Issue | 提案者 | 核心诉求 |
|:---|:---|:---|
| [#194](https://github.com/TinyAGI/tinyclaw/issues/194) TinyOffice 运行时控制面板 | @mczabca-boop | Web 门户需覆盖 CLI 的 start/stop/restart 能力，实现"零 CLI"运维 |
| [#193](https://github.com/TinyAGI/tinyclaw/issues/193) TinyOffice 首次启动引导 | @mczabca-boop | 新用户 onboarding 完全依赖 CLI，Web 配置向导缺失 |
| [#192](https://github.com/TinyAGI/tinyclaw/issues/192) TinyOffice UX 建议 | @mczabca-boop | 聊天记录持久化、会话恢复机制缺陷 |

**诉求洞察**：同一用户连续提交 3 个 TinyOffice 改进提案，表明 Web 门户已成为**新用户首触路径**，但当前功能缺口（运行时控制、首次配置、会话管理）正在造成流失风险。

---

## 5. Bug 与稳定性

| 问题 | Issue/PR | 严重程度 | 状态 |
|:---|:---|:---|:---|
| 团队通信响应丢失/延迟 | [#190](https://github.com/TinyAGI/tinyclaw/pull/190) | 🔴 **高** | ✅ **已修复**（v0.0.10 包含） |
| 队列处理器 shutdown 时 interval 未清理 | [#63](https://github.com/TinyAGI/tinyclaw/issues/63) | 🟡 中 | ✅ 已关闭（PR #186 SQLite 重构间接解决） |
| WhatsApp 代理不确认消息（仅显示 typing 后消失） | [#91](https://github.com/TinyAGI/tinyclaw/issues/91) | 🟡 中 | ✅ 已关闭（推测与 #190 团队通信修复相关） |

**今日无新增未修复 Bug**，稳定性态势良好。v0.0.10 的 watchdog 超时调整进一步降低 Telegram 渠道假死风险。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 可行性评估 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **TinyOffice 运行时控制面板** | [#194](https://github.com/TinyAGI/tinyclaw/issues/194) | 高：已有 daemon/queue/heartbeat 基础，需暴露 HTTP API | ⭐⭐⭐⭐⭐ 极高（与 #193/#192 形成完整故事线） |
| **TinyOffice 首次启动引导** | [#193](https://github.com/TinyAGI/tinyclaw/issues/193) | 高：配置向导可复用 #185 的 @clack/prompts 逻辑为 Web 版 | ⭐⭐⭐⭐⭐ 极高 |
| **聊天记录持久化与会话恢复** | [#192](https://github.com/TinyAGI/tinyclaw/issues/192) | 中：需扩展 SQLite schema，UI 状态管理重构 | ⭐⭐⭐⭐☆ 高 |
| **Mission Control 级可观测性** | [#66](https://github.com/TinyAGI/tinyclaw/issues/66) | 中-高：依赖 #186 的新架构，可视化组件工作量大 | ⭐⭐⭐☆☆ 中（长期路线图） |
| **Zellij 终端复用器支持** | [#87](https://github.com/TinyAGI/tinyclaw/issues/87) | 低-中：tmux 布局已简化（v0.0.10 移除 logs pane），优先级下降 | ⭐⭐☆☆☆ 低 |

**品牌信号**：PR [#191](https://github.com/TinyAGI/tinyclaw/pull/191) 提出完整 rebranding 至 **TinyAGI**，若合并将触发全生态重命名（包名、环境变量、CLI 命令）。此为**重大决策**，需评估文档、社区、集成的迁移成本。

---

## 7. 用户反馈摘要

### 痛点
| 反馈来源 | 具体问题 |
|:---|:---|
| @mczabca-boop (#192-194) | "New Chat 是临时的"——会话状态丢失造成工作流断裂 |
| @mczabca-boop (#193) | "初始设置仍严重依赖 CLI"——Web 优先承诺未兑现 |
| @iamvince (#66) | 缺乏"代理在谈论什么、使用什么工具"的可视化追踪 |
| @charlesanim (#91) | WhatsApp 渠道"正在输入"后无响应，信任感崩塌 |

### 满意点
| 反馈来源 | 积极评价 |
|:---|:---|
| @shrikantlatkar (#111) | 对本地模型支持的期待，认可项目方向 |
| @apoapostolov (#103) | GLM 4.7 支持快速响应并关闭 |
| 社区整体 | PR #185 的 CLI 迁移获隐含认可（无负面反馈） |

### 使用场景洞察
- **多提供商路由**：用户明确需要"不同代理绑定不同模型"（#41, #103, #111, #143）
- **团队/企业场景**：#66 的 traceability 需求、#194 的运行时控制，均指向生产级部署
- **渠道碎片化**：WhatsApp、Telegram 问题频发，提示渠道适配层需更健壮的重试/反馈机制

---

## 8. 待处理积压

| 项目 | 类型 | 状态 | 建议行动 |
|:---|:---|:---|:---|
| [#191](https://github.com/TinyAGI/tinyclaw/pull/191) Rebrand to TinyAGI | PR | 🟡 **待合并**（唯一 open PR） | **决策紧迫**：合并前需确认文档站点、Docker Hub、npm 组织名已预留；建议发布迁移指南后再合并 |
| [#194](https://github.com/TinyAGI/tinyclaw/issues/194) TinyOffice 控制面板 | Issue | 🟢 Open, 0 评论 | 建议维护者快速响应，确认与 #193/#192 的合并规划，避免贡献者流失 |
| [#193](https://github.com/TinyAGI/tinyclaw/issues/193) TinyOffice 首次引导 | Issue | 🟢 Open, 0 评论 | 同上，可标记为 `good first issue` 吸引社区贡献 |
| [#192](https://github.com/TinyAGI/tinyclaw/issues/192) TinyOffice UX 建议 | Issue | 🟢 Open, 0 评论 | 需拆分具体任务，聊天记录持久化为独立高优先级任务 |

---

## 附录：关键链接速查

| 资源 | 链接 |
|:---|:---|
| 项目主页 | https://github.com/TinyAGI/tinyclaw |
| v0.0.10 Release | https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.10 |
| 待合并 PR #191 | https://github.com/TinyAGI/tinyclaw/pull/191 |
| TinyOffice 改进系列 | [#192](https://github.com/TinyAGI/tinyclaw/issues/192) [#193](https://github.com/TinyAGI/tinyclaw/issues/193) [#194](https://github.com/TinyAGI/tinyclaw/issues/194) |

---

*本日报基于 GitHub 公开数据生成，未包含私有讨论或线下决策信息。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-03-12

> **项目**: moltis-org/moltis  
> **日期**: 2026-03-12  
> **分析周期**: 过去24小时

---

## 1. 今日速览

Moltis 今日呈现**高强度开发态势**，单日 29 个 PR 更新（20 个待合并）显示核心团队正在密集迭代。Issues 侧以"清旧账"为主，25 个关闭 vs 9 个新开，维护者正系统性消化历史积压。值得关注的是 **Node 协议扩展 RFC (#391)** 的提出，标志着项目向分布式多节点架构演进的关键一步。整体健康度良好，但待合并 PR 数量较高，建议关注代码审查瓶颈。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR（9 个）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#397](https://github.com/moltis-org/moltis/pull/397) | @penso | **修复 MLX 流式输出泄漏特殊 token**（`<\|im_end\|>` 等） | #306 |
| [#399](https://github.com/moltis-org/moltis/pull/399) | @penso | **修复 Discord 频道自动压缩目标错误** — 频道消息现正确压缩对应会话，而非误触"main" | #103 |
| [#400](https://github.com/moltis-org/moltis/pull/400) | @penso | 向后兼容旧版 memory embedding 配置键，降低迁移摩擦 | #109 |
| [#401](https://github.com/moltis-org/moltis/pull/401) | @penso | Docker 环境变量引导支持 `MOLTIS_PROVIDER`/`MOLTIS_API_KEY` 及简写别名 | #125 |

**整体推进评估**：今日合并聚焦**本地 LLM 体验修复**（MLX token 泄漏、GGUF 配置）和**多平台集成稳定性**（Discord 会话隔离、Docker 部署简化），为 v0.x 版本的质量巩固奠定基础。

---

## 4. 社区热点

### 高讨论度 Issues

| Issue | 状态 | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| **#181** Crons and heartbeat 无法设置激活 | 🔴 CLOSED | 8 | **定时任务核心功能失效**，用户无法配置自动化工作流 | [链接](https://github.com/moltis-org/moltis/issues/181) |
| **#129** Docker 密码登录失败 | 🔴 CLOSED | 4 | 部署后认证流程断裂，Telegram 可用但 Web UI 不可用 | [链接](https://github.com/moltis-org/moltis/issues/129) |
| **#102** DinD 沙盒挂载路径错误 | 🔴 CLOSED | 3 ⭐4 | **容器内路径 vs 主机路径混淆**，导致沙盒工作区为空 | [链接](https://github.com/moltis-org/moltis/issues/102) |
| **#391** RFC: Node-Advertised Tools | 🟢 OPEN | 2 | **协议层扩展**：远程节点需支持工具发现，而非仅 shell exec | [链接](https://github.com/moltis-org/moltis/issues/391) |
| **#414** z.ai 开箱即用失败 | 🟡 OPEN | 2 | 新用户 onboarding 体验受阻，网络配置文档不足 | [链接](https://github.com/moltis-org/moltis/issues/414) |

**诉求分析**：
- **#181** 的高评论数反映定时任务是用户高频需求，功能可用性直接影响产品价值
- **#391** 的 RFC 性质表明社区开始关注**边缘计算/分布式代理**场景，可能重塑项目架构

---

## 5. Bug 与稳定性

### 今日活跃 Bug 报告（按严重程度）

| 严重程度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#414](https://github.com/moltis-org/moltis/issues/414) | z.ai 提供商默认配置网络错误，新用户无法完成首次设置 | 无 | 🟡 OPEN |
| 🔴 **高** | [#407](https://github.com/moltis-org/moltis/issues/407) | Network-filter Proxy 启动即崩溃，`web_search` 完全不可用 | 无 | 🟡 OPEN |
| 🟡 **中** | [#261](https://github.com/moltis-org/moltis/issues/261) | GitHub Copilot 提供商报错 | 无 | 🟡 OPEN |
| 🟡 **中** | [#344](https://github.com/moltis-org/moltis/issues/344) | Vault sealed 状态 UX 糟糕，用户不知如何解锁 | 无 | 🟡 OPEN |
| 🟢 **低** | [#334](https://github.com/moltis-org/moltis/issues/334) | 模型行为泛化问题（"Every model"） | 无 | 🟡 OPEN |

**已修复今日验证**（关联 PR #397, #399, #400, #401）：
- MLX 特殊 token 泄漏 ✅
- Discord 会话压缩错误 ✅
- 旧配置键兼容性 ✅

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 内容 | 纳入可能性 |
|:---|:---|:---|:---|
| [#391](https://github.com/moltis-org/moltis/issues/391) | RFC | Node-Advertised Tools：远程节点协议扩展，支持工具注册发现 | **高** — 架构级需求，已标记为 RFC |
| [#272](https://github.com/moltis-org/moltis/issues/272) | Feature | Webhook 功能需求（2 👍） | 中 — 集成类需求，待设计评审 |
| [#114](https://github.com/moltis-org/moltis/issues/114) | Feature | LM Studio/OpenAI 兼容端点（2 👍） | **已实现** — 见 #400 配置兼容 |
| [#275](https://github.com/moltis-org/moltis/issues/275) | Feature | OpenAI Responses API 支持 | 中 — 需评估与现有 chat completions 差异 |
| [#416](https://github.com/moltis-org/moltis/pull/416) | PR | 远程 MCP URL 和 Headers 密钥管理 | **高** — 安全强化，待合并 |
| [#408](https://github.com/moltis-org/moltis/pull/408) | PR | Vulkan GGUF 支持（opt-in） | 中 — 本地 LLM 硬件扩展 |

**信号判断**：Node 协议扩展（#391）和 MCP 安全强化（#416）代表项目向**企业级分布式部署**演进，预计成为下一版本核心叙事。

---

## 7. 用户反馈摘要

### 真实痛点

> *"Docker 部署后密码登录完全失败，只能走 Telegram"* — @besoeasy #129  
> **→ 认证流程的容器环境适配存在盲区**

> *"定时任务和心跳根本无法设置激活"* — @grapewheel #181  
> **→ 核心自动化功能有严重可用性缺陷**

> *"Vault is sealed 的 UX 太糟糕了，不知道该怎么办"* — @lostmsu #344  
> **→ 安全状态的用户引导缺失**

### 满意场景

> *"Discord 机器人功能正常"* — #129 Reporter  
> **→ 多平台集成（Telegram/Discord）相对成熟**

### 部署摩擦

- Docker 环境变量配置门槛（#125 → 已由 #401 缓解）
- 新提供商（z.ai）网络配置文档不足（#414）

---

## 8. 待处理积压

### 需维护者关注的长期 Issue

| Issue | 创建时间 | 问题 | 风险 |
|:---|:---|:---|:---|
| [#261](https://github.com/moltis-org/moltis/issues/261) | 2026-02-28 | GitHub Copilot 提供商持续报错 | Copilot 是热门集成，影响用户留存 |
| [#272](https://github.com/moltis-org/moltis/issues/272) | 2026-03-01 | Webhook 功能（2 👍） | 自动化场景核心需求，竞品普遍支持 |
| [#334](https://github.com/moltis-org/moltis/issues/334) | 2026-03-05 | "Every model" 泛化行为问题 | 描述模糊，需维护者澄清 scope |

### 高优先级待合并 PR

| PR | 风险 | 建议动作 |
|:---|:---|:---|
| [#416](https://github.com/moltis-org/moltis/pull/416) | 安全相关（MCP 密钥管理），影响面广 | 优先审查合并 |
| [#398](https://github.com/moltis-org/moltis/pull/398) | 用户安装体验反馈综合修复 | 快速验证后合并 |
| [#418](https://github.com/moltis-org/moltis/pull/418) | 中断会话历史持久化，数据完整性 | 需测试覆盖验证 |

---

**日报生成时间**: 2026-03-12  
**数据来源**: GitHub API (moltis-org/moltis)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-03-12

---

## 1. 今日速览

CoPaw 今日保持**高活跃度**，24小时内产生 **50 条 Issues 更新**（32 新开/活跃，18 关闭）与 **50 条 PR 更新**（26 待合并，24 已合并/关闭），无新版本发布。社区焦点集中在 **v0.0.6 升级问题**（前端版本显示异常、飞书频道重复消息、消息压缩失效）与 **Windows 桌面版体验优化**。值得关注的是，今日有 **8 个首次贡献者 PR** 进入流程，显示项目吸引力持续上升。多智能体通信协议文档的完善标志着架构能力向企业级协作场景延伸。

---

## 2. 版本发布

**无新版本发布**

> 社区对 `copaw update` 命令的需求强烈（[#1188](https://github.com/agentscope-ai/CoPaw/issues/1188)），相关 PR [#1278](https://github.com/agentscope-ai/CoPaw/pull/1278) 已提交待审。

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 影响评估 |
|:---|:---|:---|:---|
| [#519](https://github.com/agentscope-ai/CoPaw/pull/519) | @rowanchen-com | Web UI 基础认证系统（环境变量配置） | 🔒 **安全增强**：解决公网部署的未授权访问风险 |
| [#1212](https://github.com/agentscope-ai/CoPaw/pull/1212) | @Nufe-muzi | QQ 图片消息发送修复 | 🐛 **稳定性**：解决图片消息静默失败问题 |
| [#1284](https://github.com/agentscope-ai/CoPaw/pull/1284) | @zhijianma | Agent 新增 `get_token_usage` 工具 | 📊 **可观测性**：支持 Token 消耗追踪 |
| [#1236](https://github.com/agentscope-ai/CoPaw/pull/1236) | @qbc2016 | Session 存取异步化 | ⚡ **性能**：提升 I/O 密集型场景响应速度 |
| [#1260](https://github.com/agentscope-ai/CoPaw/pull/1260) | @qbc2016 | Windows 执行 Shell 命令修复 | 🪟 **平台兼容**：解决 Windows 版核心功能故障 |
| [#925](https://github.com/agentscope-ai/CoPaw/pull/925) | @FuKunZ | 中国用户自动 PyPI 镜像选择 | 🇨🇳 **体验优化**：解决安装卡顿痛点 |
| [#563](https://github.com/agentscope-ai/CoPaw/pull/563) | @gnipping | Tool-Call Guard 安全框架 | 🛡️ **安全架构**：预检工具调用，防范命令注入与数据泄露 |
| [#1282](https://github.com/agentscope-ai/CoPaw/pull/1282) | @rayrayraykk | Windows 性能优化 + SSL 修复 | 🪟 **桌面版关键修复** |
| [#1279](https://github.com/agentscope-ai/CoPaw/pull/1279) | @lalaliat | 喜马拉雅 Skill 修正 | 🔧 **Skill 生态完善** |

**整体进展评估**：今日合并 PR 覆盖**安全认证、平台兼容性、性能优化、安全框架**四大维度，项目从"功能可用"向"生产就绪"迈出关键一步。Tool-Guard 框架的引入尤其标志着安全能力的体系化。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论 | 核心诉求 | 背后信号 |
|:---|:---:|:---|:---|
| [#1195](https://github.com/agentscope-ai/CoPaw/issues/1195) | **11** | `pip upgrade` 后前端仍显示旧版本 | **版本管理混乱**：前端与后端版本不同步，用户困惑升级是否成功 |
| [#863](https://github.com/agentscope-ai/CoPaw/issues/863) | 9 | 终端启动报错（websockets 废弃警告） | 依赖管理需收紧，废弃 API 清理滞后 |
| [#779](https://github.com/agentscope-ai/CoPaw/issues/779) | 5 | 钉钉消息排版错误 | 企业 IM 适配细节体验待打磨 |
| [#1100](https://github.com/agentscope-ai/CoPaw/issues/1100) | 5 | v0.0.6 飞书频道重复消息 | **回归 Bug**：新版本引入的消息去重逻辑失效 |
| [#577](https://github.com/agentscope-ai/CoPaw/issues/577) | 5 | 阿里 Coding Plan 配置超时 | 模型提供商适配的健壮性不足 |

### 🔥 值得关注的待审 PR

| PR | 亮点 | 潜在影响 |
|:---|:---|:---|
| [#1299](https://github.com/agentscope-ai/CoPaw/pull/1299) | **多智能体通信协议文档** + 可运行示例 | 填补架构文档空白，降低多 Agent 协作开发门槛 |
| [#1290](https://github.com/agentscope-ai/CoPaw/pull/1290) | **NapCat QQ 频道**（OneBot 11 协议） | 扩展 QQ 生态支持，社区高频需求 |
| [#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) | OpenRouter 提供商（含模型过滤） | 降低多模型接入成本，丰富模型选择 |
| [#1118](https://github.com/agentscope-ai/CoPaw/pull/1118) | 钉钉 AI Card 回复 | 企业场景交互体验升级 |
| [#1278](https://github.com/agentscope-ai/CoPaw/pull/1278) | `copaw update` 自动更新命令 | 解决版本升级用户痛点，提升留存 |

---

## 5. Bug 与稳定性

### 🚨 高优先级（影响核心功能）

| Issue | 描述 | 严重程度 | Fix PR | 状态 |
|:---|:---|:---:|:---|:---|
| [#1195](https://github.com/agentscope-ai/CoPaw/issues/1195) | 前端版本显示不随 pip 升级更新 | **P1** | 待调查 | 🔴 无 |
| [#1100](https://github.com/agentscope-ai/CoPaw/issues/1100) | v0.0.6 飞书重复消息 | **P1** | 待调查 | 🔴 无 |
| [#1243](https://github.com/agentscope-ai/CoPaw/issues/1243) | v0.0.6.post1 消息压缩三条路径全部失效 | **P0** | 待调查 | 🔴 **严重回归** |
| [#1222](https://github.com/agentscope-ai/CoPaw/issues/1222) | 消息压缩后数量不匹配致 API 失败 | **P1** | 待调查 | 🔴 无 |
| [#1293](https://github.com/agentscope-ai/CoPaw/issues/1293) | `write_file`/`execute_shell_command` 工具调用失败 | **P1** | 待调查 | 🔴 无 |

### ⚠️ 中优先级（特定场景）

| Issue | 描述 | 场景限制 |
|:---|:---|:---|
| [#919](https://github.com/agentscope-ai/CoPaw/issues/919) | 图片处理导致机器人持续报错 | kimi-k2-turbo-preview + 飞书 |
| [#1248](https://github.com/agentscope-ai/CoPaw/issues/1248) | `ProviderManager` 属性错误 | Windows 特定环境 |
| [#1277](https://github.com/agentscope-ai/CoPaw/issues/1277) | 对话崩溃（请求体超 6MB 限制） | 长上下文场景 |
| [#1218](https://github.com/agentscope-ai/CoPaw/issues/1218) | 飞书突然无法响应（500 错误） | 偶发，需日志分析 |

**关键洞察**：v0.0.6 版本存在**消息压缩功能严重回归**，三条压缩路径（自动压缩、`/compact`、`/new`）全部失效，仅 `/clear` 可用。这是影响长对话场景的核心功能缺陷，建议优先修复。

---

## 6. 功能请求与路线图信号

### 已提交 PR、高概率纳入下一版本

| 需求 | PR | 信号强度 |
|:---|:---|:---:|
| 自动更新命令 `copaw update` | [#1278](https://github.com/agentscope-ai/CoPaw/pull/1278) | ⭐⭐⭐⭐⭐ |
| QQ 机器人支持（NapCat） | [#1290](https://github.com/agentscope-ai/CoPaw/pull/1290) | ⭐⭐⭐⭐⭐ |
| 邮件 Skill | [#1272](https://github.com/agentscope-ai/CoPaw/pull/1272) | ⭐⭐⭐⭐☆ |
| 聊天路由选择器 | [#1209](https://github.com/agentscope-ai/CoPaw/pull/1209) | ⭐⭐⭐⭐☆ |
| Skill 元数据描述展示 | [#1235](https://github.com/agentscope-ai/CoPaw/pull/1235) | ⭐⭐⭐⭐☆ |
| Skill 流式优化（AI 优化 + 停止按钮） | [#853](https://github.com/agentscope-ai/CoPaw/pull/853) | ⭐⭐⭐⭐☆ |

### 社区强烈需求、待产品决策

| 需求 | Issue | 用户痛点 | 可行性评估 |
|:---|:---|:---|:---|
| 插件/钩子机制（模型调用前拦截） | [#1283](https://github.com/agentscope-ai/CoPaw/issues/1283) | 钉钉发送本地图片导致模型报错，需预处理 | 架构改动中等 |
| Skill UI 可视化操作 | [#1193](https://github.com/agentscope-ai/CoPaw/issues/1193) | 降低非技术用户使用门槛 | 参考开源方案集成 |
| Windows exe 自动配置 Python 环境 | [#1244](https://github.com/agentscope-ai/CoPaw/issues/1244) | 桌面版用户配置困难 | 打包流程调整 |
| 飞书手动创建新对话 | [#1288](https://github.com/agentscope-ai/CoPaw/issues/1288) | 长对话 Token 消耗过高 | 已有 `/new` 但失效，需修复 |
| 内置 Skill 体验提升（文档处理类） | [#995](https://github.com/agentscope-ai/CoPaw/issues/995) | 直接影响用户留存 | 持续优化项 |

---

## 7. 用户反馈摘要

### 😤 核心痛点

> **"升级后版本号不变，根本不知道成功没有"** —— @HZJprince [#1195](https://github.com/agentscope-ai/CoPaw/issues/1195)

> **"压缩功能完全失效，112 条消息一条没少，文件反而变大"** —— @doncrocs-lgtm [#1243](https://github.com/agentscope-ai/CoPaw/issues/1243)

> **"Windows 装完启动，模型找不到 Python 环境"** —— @330570902 [#1244](https://github.com/agentscope-ai/CoPaw/issues/1244)

### 😊 积极反馈

> **"Tool-Guard 框架解决了我们担心的命令注入问题"** —— 安全相关 PR 评论

> **"NapCat QQ 支持终于来了，可以接入群聊"** —— 社区期待 [#1290](https://github.com/agentscope-ai/CoPaw/pull/1290)

### 📊 使用场景洞察

| 场景 | 占比信号 | 关键需求 |
|:---|:---|:---|
| 企业 IM 集成（钉钉/飞书） | 🔥🔥🔥🔥🔥 | 稳定性 > 功能丰富度 |
| 个人桌面端（Windows/Mac） | 🔥🔥🔥🔥☆ | 一键安装、自动更新 |
| 多模型切换（OpenRouter/硅基流动） | 🔥🔥🔥☆☆ | 配置简化、连接诊断 |
| 长对话/记忆管理 | 🔥🔥🔥🔥☆ | 压缩可靠性、Token 控制 |

---

## 8. 待处理积压

### ⚠️ 需维护者关注的高价值 Issue/PR

| 类型 | 条目 | 积压时间 | 风险/机会 |
|:---|:---|:---:|:---|
| **PR** | [#853](https://github.com/agentscope-ai/CoPaw/pull/853) Skill 流式优化 | 5 天 | 用户体验关键提升， review 停滞 |
| **PR** | [#1118](https://github.com/agentscope-ai/CoPaw/pull/1118) 钉钉 AI Card | 2 天 | 企业场景差异化能力 |
| **PR** | [#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) OpenRouter 支持 | 2 天 | 模型生态扩展 |
| **Issue** | [#995](https://github.com/agentscope-ai/CoPaw/issues/995) 内置 Skill 改进 | 3 天 | 直接影响用户留存的产品意见 |
| **Issue** | [#1188](https://github.com/agentscope-ai/CoPaw/issues/1188) 更新命令需求 | 2 天 | 已有 PR [#1278](https://github.com/agentscope-ai/CoPaw/pull/1278)，需协调合并 |

---

## 附录：数据速查

| 指标 | 数值 | 环比评估 |
|:---|:---:|:---|
| Issues 更新 | 50 | 高活跃 |
| PR 更新 | 50 | 高活跃 |
| 首次贡献者 PR | 8 | 🌱 社区增长健康 |
| 关闭/合并率 | Issues 36% / PR 48% | 处理效率良好 |
| 无响应超 3 天 PR | 3 | 需关注 |

---

*本日报基于 GitHub 公开数据生成，时间范围：2026-03-11 至 2026-03-12*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-03-12

---

## 1. 今日速览

ZeptoClaw 今日呈现**高强度安全加固冲刺**态势：24小时内完成16个PR合并/关闭，密集发布v0.7.5和v0.7.6两个版本，核心聚焦**入站认证强化**与**文件系统边界防护**。项目安全优先级显著抬升，CLI交互体验同步优化，但社区贡献者单一（@qhkm主导15/16个PR），外部参与仍待激活。整体健康度：**高活跃度、强安全导向、需生态扩展**。

---

## 2. 版本发布

### v0.7.6 | [Release](https://github.com/qhkm/zeptoclaw/releases/tag/v0.7.6)
| 属性 | 内容 |
|:---|:---|
| **发布时间** | 2026-03-11 |
| **更新类型** | 安全修复 + 体验优化 |
| **破坏性变更** | 无 |

**核心变更：**
- **fix**: 消除Claude订阅令牌警告重复打印（[#320](https://github.com/qhkm/zeptoclaw/pull/320)）— 使用`std::sync::Once`确保启动阶段仅提示一次
- **feat**: CLI交互模式新增斜杠命令自动补全（[#323](https://github.com/qhkm/zeptoclaw/pull/323)）— 支持`/model`, `/persona`, `/tools`等12个命令的Tab补全
- **fix**: 强化入站认证与文件系统边界防护（[#324](https://github.com/qhkm/zeptoclaw/pull/324)）— 修复webhook认证绕过、符号链接TOCTOU攻击、硬链接边界突破等高危漏洞

**迁移注意**：v0.7.6包含关键安全修复，建议所有用户立即升级，尤其是使用webhook渠道或文件系统工具的场景。

---

### v0.7.5 | [Release](https://github.com/qhkm/zeptoclaw/releases/tag/v0.7.5)
| 属性 | 内容 |
|:---|:---|
| **发布时间** | 2026-03-10-11 |
| **更新类型** | 功能增强 |
| **破坏性变更** | 无 |

**核心变更：**
- **feat(cli)**: 新增`zeptoclaw config reset`命令（[#306](https://github.com/qhkm/zeptoclaw/pull/306)）
- **feat**: 模型提供商兼容性验证（[#311](https://github.com/qhkm/zeptoclaw/pull/311)）
- **feat(cli)**: 新增`zeptoclaw uninstall`命令（[#315](https://github.com/qhkm/zeptoclaw/pull/315)）— 支持`--yes`自动确认与`--remove-binary`二进制移除

---

## 3. 项目进展

### 今日关键合并（按战略价值排序）

| PR | 作者 | 进展价值 | 技术深度 |
|:---|:---|:---|:---|
| [#324](https://github.com/qhkm/zeptoclaw/pull/324) | @qhkm | ⭐⭐⭐⭐⭐ **安全架构升级** | 实现webhook HMAC-SHA256签名验证、dirfd-relative文件操作、原子替换写入，关闭TOCTOU窗口 |
| [#323](https://github.com/qhkm/zeptoclaw/pull/323) | @qhkm | ⭐⭐⭐⭐ **CLI体验跃升** | 基于rustline实现斜杠命令智能补全，降低交互门槛 |
| [#316](https://github.com/qhkm/zeptoclaw/pull/316) | @qhkm | ⭐⭐⭐⭐ **生态扩展** | Ollama/vLLM本地实例免API Key认证，支持云Ollama有Key场景 |
| [#315](https://github.com/qhkm/zeptoclaw/pull/315) | @qhkm | ⭐⭐⭐ **运维完备性** | 完整卸载能力，区分状态清理与二进制移除 |
| [#314](https://github.com/qhkm/zeptoclaw/pull/314) | @qhkm | ⭐⭐⭐ **配置一致性** | 修复配置校验器与运行时schema不同步问题 |
| [#313](https://github.com/qhkm/zeptoclaw/pull/313) | @qhkm | ⭐⭐⭐ **日志降噪** | CLI agent模式默认warn级别，消除启动信息淹没 |

**整体推进评估**：今日合并使ZeptoClaw从"功能可用"迈向**"生产级安全可信"**，文件系统安全模型达到Unix最佳实践水平（openat/rename原子操作），webhook认证对齐行业标准（Hub-Signature-256）。

---

## 4. 社区热点

### 讨论热度分析

| 排名 | Issue/PR | 互动指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 1 | [#221](https://github.com/qhkm/zeptoclaw/issues/221) 开放中 | 创建8天，今日更新 | **审计合规刚需**：企业用户需要Merkle哈希链实现工具执行的可验证审计，满足金融/医疗行业合规要求 |
| 2 | [#326](https://github.com/qhkm/zeptoclaw/issues/326) 已关闭 | 1评论 | **安全漏洞澄清**：社区关注GHSA-j966-r55r-f865 WhatsApp Bridge漏洞是否影响本项目，维护者快速响应确认不受影响的证据链 |
| 3 | [#287](https://github.com/qhkm/zeptoclaw/pull/287) 待合并 | 外部贡献者 | **开发者体验**：@taqtiqa-mark提议标准化pre-PR开发工具链，解决"不同开发者本地检查不一致"痛点 |

**诉求洞察**：企业级安全审计（#221）与开发者工具标准化（#287）代表社区从"个人使用"向"团队/企业部署"演进的需求信号。

---

## 5. Bug 与稳定性

### 今日修复的安全漏洞（按严重程度）

| 优先级 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| **P1-Critical** | [#319](https://github.com/qhkm/zeptoclaw/issues/319) | 文件系统路径加固未完成 | [#324](https://github.com/qhkm/zeptoclaw/pull/324) | ✅ 已修复 |
| **P1-Critical** | [#318](https://github.com/qhkm/zeptoclaw/issues/318) | 入站webhook认证路径脆弱 | [#324](https://github.com/qhkm/zeptoclaw/pull/324) | ✅ 已修复 |
| **P1-Critical** | [#321](https://github.com/qhkm/zeptoclaw/issues/321) | Telegram用户名allowlist存在身份漂移风险 | [#324](https://github.com/qhkm/zeptoclaw/pull/324) | ✅ 已修复（渐进式弃用） |
| **P1-Critical** | [#317](https://github.com/qhkm/zeptoclaw/issues/317) | WhatsApp Cloud webhook签名未验证 | [#324](https://github.com/qhkm/zeptoclaw/pull/324) | ✅ 已修复 |
| **P1-Critical** | [#310](https://github.com/qhkm/zeptoclaw/issues/310) | 配置校验器拒绝有效字段 | [#314](https://github.com/qhkm/zeptoclaw/pull/314) | ✅ 已修复 |
| **P2-High** | [#330](https://github.com/qhkm/zeptoclaw/issues/330) | Unix文件系统读取未使用dirfd-relative | [#324](https://github.com/qhkm/zeptoclaw/pull/324) | ✅ 已修复 |
| **P2-High** | [#329](https://github.com/qhkm/zeptoclaw/issues/329) | 文件系统写入存在TOCTOU窗口 | [#324](https://github.com/qhkm/zeptoclaw/pull/324) | ✅ 已修复 |
| **P2-High** | [#327](https://github.com/qhkm/zeptoclaw/issues/327) [#328](https://github.com/qhkm/zeptoclaw/issues/328) | 渠道设置清除逻辑缺陷 | [#324](https://github.com/qhkm/zeptoclaw/pull/324) | ✅ 已修复 |
| **P2-High** | [#325](https://github.com/qhkm/zeptoclaw/issues/325) | 邮件头信任模型未向用户暴露 | [#324](https://github.com/qhkm/zeptoclaw/pull/324) | ✅ 已修复（配置警告） |
| **P2-High** | [#312](https://github.com/qhkm/zeptoclaw/issues/312) | CLI agent模式日志过载 | [#313](https://github.com/qhkm/zeptoclaw/pull/313) | ✅ 已修复 |

**稳定性评估**：今日完成**10个P1/P2级安全修复**，文件系统与webhook安全模型达到生产就绪标准。无新增崩溃报告，回归风险低（所有修复均含测试覆盖）。

---

## 6. 功能请求与路线图信号

### 待评估功能需求

| Issue | 需求描述 | 可行性信号 | 版本预测 |
|:---|:---|:---|:---|
| [#221](https://github.com/qhkm/zeptoclaw/issues/221) | Merkle哈希链审计日志 | 高（安全主题延续，SHA-256已实现） | v0.8.0 |
| [#284](https://github.com/qhkm/zeptoclaw/issues/284) → [#316](https://github.com/qhkm/zeptoclaw/pull/316) | Ollama云模型支持 | ✅ 已实现 | v0.7.5 |
| [#287](https://github.com/qhkm/zeptoclaw/pull/287) | 开发工具标准化 | 中（外部贡献，需评审） | v0.8.0或社区插件 |

**路线图推断**：v0.8.0可能聚焦**可观测性增强**（审计日志#221 + 现有tracing基础设施）与**开发者生态**（#287工具链 + 插件系统）。

---

## 7. 用户反馈摘要

### 从Issue评论提炼的真实声音

| 场景 | 痛点/诉求 | 来源Issue |
|:---|:---|:---|
| **企业合规部署** | "需要tamper-evident audit trail满足监管审计" | [#221](https://github.com/qhkm/zeptoclaw/issues/221) |
| **本地AI集成** | "Ollama官方云设置无效" → 已解决 | [#284](https://github.com/qhkm/zeptoclaw/issues/284) |
| **配置管理** | "有效配置被错误拒绝" → 已解决 | [#310](https://github.com/qhkm/zeptoclaw/issues/310) |
| **运维清理** | "需要彻底卸载避免残留" → 已解决 | [#307](https://github.com/qhkm/zeptoclaw/issues/307) |
| **交互效率** | "命令记不住，需要自动补全" → 已解决 | [#322](https://github.com/qhkm/zeptoclaw/issues/322) |

**满意度信号**：CLI体验优化（日志降噪、自动补全、卸载命令）响应迅速，反映维护者对"最后一公里"体验的重视。

---

## 8. 待处理积压

### 需维护者关注事项

| 类型 | 项目 | 状态 | 风险提示 |
|:---|:---|:---|:---|
| **长期开放Issue** | [#221](https://github.com/qhkm/zeptoclaw/issues/221) Merkle审计链 | 8天开放，今日更新 | 企业用户关键需求，建议纳入v0.8.0里程碑 |
| **待评审外部PR** | [#287](https://github.com/qhkm/zeptoclaw/pull/287) 开发工具链 | 3天开放 | 首个外部工具贡献，快速响应可激励社区参与 |
| **安全披露跟进** | [#326](https://github.com/qhkm/zeptoclaw/issues/326) GHSA澄清 | 已关闭 | 建立安全响应SOP，建议发布安全公告文档 |

**健康度建议**：当前@qhkm个人贡献占比过高（>90%），建议通过#287的积极评审、#221的里程碑承诺，培育外部贡献者信心。

---

*日报生成时间：2026-03-12*  
*数据来源：GitHub API (qhkm/zeptoclaw)*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 | 2026-03-12

> **项目地址**: [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)  
> **报告日期**: 2026-03-12

---

## 1. 今日速览

EasyClaw 项目今日活跃度**较低**，处于维护期稳定状态。过去24小时内仅有 **1 条 Issue 更新**，无 PR 活动，但发布了 **v1.6.6 补丁版本**，主要聚焦 macOS 安装体验优化。社区反馈显示 OpenAI OAuth 认证模块存在疑似故障，已触发用户报告。整体健康度评估：**稳定但需关注认证稳定性**。

---

## 2. 版本发布

### v1.6.6 — 已发布
| 属性 | 详情 |
|:---|:---|
| **版本号** | v1.6.6 |
| **发布日期** | 2026-03-12 |
| **类型** | 补丁版本 / 文档修复 |

**核心变更**：
- 新增 macOS Gatekeeper 绕过指南，解决 `"EasyClaw" is damaged and can't be opened` 误报问题
- 提供中英双语安装故障排除说明

**破坏性变更**: 无  
**迁移注意事项**: 无需迁移，新用户直接参考安装文档即可

> 🔗 [Release 页面](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.6)

---

## 3. 项目进展

**今日无合并/关闭的 PR**。

项目今日未推进功能性代码变更，重心放在**发布渠道维护**（v1.6.6 文档更新）。建议维护者关注认证模块的潜在技术债务。

---

## 4. 社区热点

| 排名 | Issue | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| #1 | [#16 OpenAI Oauth好像有问题](https://github.com/gaoyangz77/easyclaw/issues/16) | 💬 1 评论, 👍 0 | **认证层稳定性焦虑** — 用户报告便携版与安装版均出现相同 OAuth 错误，配图显示为典型的授权回调失败或令牌获取异常。诉求：急需官方确认是否为服务端变更或客户端适配问题 |

**信号解读**: 该 Issue 触及 EasyClaw 作为 AI 助手的核心能力（第三方模型接入），若 OAuth 流程断裂将直接影响产品可用性。建议 24h 内响应。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | OpenAI OAuth 认证失败 | 待确认 | 全平台（便携版+安装版）| ❌ 无 |

**技术细节**: 用户截图显示授权流程异常（具体错误码待补充），需区分是 OpenAI 服务端策略更新、EasyClaw 回调 URL 配置过期，还是本地证书/网络问题。

> 🔗 [Issue #16](https://github.com/gaoyangz77/easyclaw/issues/16)

---

## 6. 功能请求与路线图信号

**今日无新增功能请求**。

现有 Issue #16 若确认为 OAuth 协议层问题，可能衍生出以下需求：
- 支持多 OAuth 提供商冗余（Azure OpenAI、第三方代理）
- 增加本地 API Key 直连模式作为 fallback

---

## 7. 用户反馈摘要

| 维度 | 内容 |
|:---|:---|
| **痛点** | macOS 安装门槛（Gatekeeper 拦截）已获文档缓解；但 OpenAI 接入稳定性成为新阻塞点 |
| **使用场景** | 用户依赖 EasyClaw 作为跨平台 AI 客户端，期望"开箱即用"的模型接入体验 |
| **满意度信号** | 用户主动提供截图和复现环境（便携/安装双版本），配合度高 |
| **不满信号** | "都是报一样的错误" — 暗示问题非个案，可能存在系统性故障 |

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后活动 | 风险提醒 |
|:---|:---|:---|:---|
| [#16 OpenAI Oauth好像有问题](https://github.com/gaoyangz77/easyclaw/issues/16) | 2026-03-11 | 2026-03-11 | ⚠️ **24h 内未响应** — 核心功能故障，建议优先介入 |

---

**分析师备注**: EasyClaw 今日处于"低代码活动、高用户风险"状态。v1.6.6 的文档更新显示维护者活跃，建议同步响应 OAuth 故障报告，避免社区信任损耗。建议下一步：在 Issue #16 请求用户提供具体错误日志、OAuth 流程截图、以及 OpenAI 账户地区信息以定位根因。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*