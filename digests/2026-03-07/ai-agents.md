# OpenClaw 生态日报 2026-03-07

> Issues: 500 | PRs: 500 | 覆盖项目: 10 个 | 生成时间: 2026-03-07 02:09 UTC

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

# OpenClaw 项目动态日报 (2026-03-07)

---

## 1. 今日速览

OpenClaw 社区今日保持高度活跃，共处理 **500 条 Issues 更新** 和 **500 条 PR 更新**，合并/关闭率达 62%（311/500）。新增 429 个活跃 Issue，关闭 71 个；待合并 PR 189 个，已合并 311 个。未发布新版本。核心问题集中在：macOS 平台回归（arm64-only）、文件系统工具失效、以及多平台 OAuth 认证卡顿问题上，社区讨论热烈，整体开发节奏紧凑。

---

## 2. 版本发布

**本期无新版本发布**。最新稳定版仍为 `v2026.3.2`，发布于 2026-03-04。

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR | 描述 | 状态 |
|---|---|---|
| [#38443](https://github.com/openclaw/openclaw/pull/38443) | fix: respect session modelOverride in followup/auto-reply fallback resolution | ✅ CLOSED |
| [#38462](https://github.com/openclaw/openclaw/pull/38462) | fix(plugin): prefer higher-precedence origin for duplicate plugin ids | ✅ CLOSED |
| [#31799](https://github.com/openclaw/openclaw/pull/31799) | fix(pi-embedded): honor configured provider baseUrl for Codex | ✅ CLOSED |
| [#37246](https://github.com/openclaw/openclaw/pull/37246) | fix(gateway): secure ws:// hostname validation when allowPrivateWs enabled | ✅ CLOSED |
| [#38406](https://github.com/openclaw/openclaw/pull/38406) | fix(signal): preserve original filename for outbound attachments | ✅ OPEN |
| [#38418](https://github.com/openclaw/openclaw/pull/38418) | fix(gateway): stop shared-main chat.send from inheriting stale external routes | ✅ OPEN |
| [#38463](https://github.com/openclaw/openclaw/pull/38463) | fix(systemd,gateway): resolve orphan subprocesses and port 18789 hangs | ✅ OPEN |
| [#1](https://github.com/openclaw/openclaw/pull/1) | fix: add @lid format support and allowFrom wildcard handling | ✅ CLOSED |

**推进的关键能力：**
- Session 模型覆盖在 429 回退重试时被正确尊重
- 重复插件 ID 的优先级处理修复
- Pi-embedded runner 正确应用配置的 provider baseUrl
- Signal 附件保留原始文件名
- WebSocket 主机名验证安全性提升
- systemd 子进程孤立的根因修复

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 标题 | 评论数 | 👍 | 状态 |
|---|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | [enhancement] Linux/Windows Clawdbot Apps | 33 | 58 | OPEN |
| [#34810](https://github.com/openclaw/openclaw/issues/34810) | [Bug] OpenClaw 突然丢失文件系统工具 (exec/read/write) | 22 | 7 | OPEN |
| [#7631](https://github.com/openclaw/openclaw/issues/7631) | Windows: openclaw plugins install fails with spawn EINVAL | 22 | 2 | CLOSED |
| [#32245](https://github.com/openclaw/openclaw/issues/32245) | [Bug]: Vertex embedded runs fail with "Cannot convert undefined or null to object" on v2026.3.1 | 18 | 2 | OPEN |
| [#36399](https://github.com/openclaw/openclaw/issues/36399) | [Bug]: Severe 60s hangs on multi-step tool calls with OAuth (google-gemini-cli) | 17 | 0 | OPEN |
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | [Bug]: macOS app v2026.2.26 is arm64-only — regression vs v2026.2.25 (universal binary) | 17 | 2 | OPEN |
| [#35077](https://github.com/openclaw/openclaw/issues/35077) | [Bug]: You made openclaw a broken disaster, nothing works | 16 | 1 | CLOSED |

**热点分析：**
- **#75 (Linux/Windows App 需求)** 是长期Feature Request，58 赞表明强烈社区需求，需官方明确路线图
- **#34810 文件系统工具失效** 是严重功能性 Bug，影响核心使用场景
- **#28877 macOS 回归** 涉及 Intel Mac 兼容性，属于破坏性变更
- **#36399 OAuth 卡顿 60s** 影响 Google Gemini CLI 用户体验

---

## 5. Bug 与稳定性

### 关键 Bug（按严重程度）

#### 🔴 严重 (影响核心功能)

| Issue | 描述 | 状态 | 已有 Fix? |
|---|---|---|---|
| [#34810](https://github.com/openclaw/openclaw/issues/34810) | OpenClaw 突然丢失 exec/read/write 文件系统工具，无法创建文件或执行命令 | OPEN | ❌ |
| [#36994](https://github.com/openclaw/openclaw/issues/36994) | Exec 和工具持续失效（regression） | OPEN | ❌ |
| [#32991](https://github.com/openclaw/openclaw/issues/32991) | 更新到 2026.3.2 后所有工具返回 "Tool not found" | OPEN | ❌ |
| [#33225](https://github.com/openclaw/openclaw/issues/33225) | 非交互式 onboarding 后 agent 无法写文件 | OPEN | ❌ |

#### 🟠 高 (影响主要功能)

| Issue | 描述 | 状态 | 已有 Fix? |
|---|---|---|---|
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | macOS v2026.2.26 仅 arm64，Intel Mac 崩溃 | OPEN | ❌ |
| [#36399](https://github.com/openclaw/openclaw/issues/36399) | OAuth 认证 60s 卡顿 (google-gemini-cli) | OPEN | ❌ |
| [#32245](https://github.com/openclaw/openclaw/issues/32245) | Vertex embedded runs 报错 "Cannot convert undefined or null to object" | OPEN | ❌ |
| [#32828](https://github.com/openclaw/openclaw/issues/32828) | 虚假的 "API rate limit reached" 错误提示（所有模型） | OPEN | ❌ |

#### 🟡 中 (影响部分场景)

| Issue | 描述 | 状态 | 已有 Fix? |
|---|---|---|---|
| [#33453](https://github.com/openclaw/openclaw/issues/33453) | Telegram 开启 partial streaming 时消息重复 | OPEN | ❌ |
| [#21872](https://github.com/openclaw/openclaw/issues/21872) | Telegram streaming 与 MiniMax 模型不兼容 | OPEN | ❌ |
| [#29420](https://github.com/openclaw/openclaw/issues/29420) | Discord WebSocket 重连后事件丢失 | CLOSED | ✅ |

---

## 6. 功能请求与路线图信号

### 高价值 Feature Requests

| Issue | 描述 | 状态 | 潜在纳入 |
|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows 桌面应用（功能集同 macOS） | OPEN | 🔸 长期 |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 预编译 Android APK 发布 | OPEN | 🔸 中期 |
| [#20416](https://github.com/openclaw/openclaw/issues/20416) | llm_input/llm_output hooks 改为可修改（支持 PII 脱敏、guardrails） | OPEN | 🔸 规划中 |
| [#5799](https://github.com/openclaw/openclaw/issues/5799) | Stabilisation Mode（锁定核心，提升稳定性） | CLOSED | ✅ 已采纳 |
| [#6823](https://github.com/openclaw/openclaw/issues/6823) | 工具执行 guardrails（人类审核关键操作） | OPEN | 🔸 规划中 |

**路线图信号：**
- [#5799](https://github.com/openclaw/openclaw/issues/5799) 已标记为 "Stabilisation Mode"，团队正收紧核心以提升稳定性
- [#20416](https://github.com/openclaw/openclaw/issues/20416) 涉及 middleware 模式，预计在下一大版本考虑
- PR [#35361](https://github.com/openclaw/openclaw/pull/35361) 正在实现 context dedup + read-lineage compaction

---

## 7. 用户反馈摘要

### 核心痛点

1. **多平台兼容性不足**
   - Linux/Windows 无官方桌面客户端（#75）
   - macOS Intel 版本回归（#28877）
   - Android 缺 APK（#9443）

2. **升级后功能破坏**
   - v2026.3.2 升级后工具全失效（#32991）
   - 文件系统操作突然不可用（#34810）
   - 非交互式 onboarding 后无法写文件（#33225）

3. **集成问题**
   - WhatsApp 绑定卡在 "logging in"（#4686）
   - Telegram streaming 重复消息（#33453, #21872）
   - Discord WebSocket 事件丢失（#29420）

### 用户满意度

- **不满**：大量回归问题（regression）导致"broken disaster"感受（#35077）
- **认可**：Stabilisation Mode 方向获支持（#5799, 52 👍）

---

## 8. 待处理积压

### 需关注的长尾 Issue

| Issue | 描述 | 创建时间 | 状态 |
|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows 客户端需求 | 2026-01-01 | OPEN (2年+) |
| [#4686](https://github.com/openclaw/openclaw/issues/4686) | WhatsApp 绑定 stuck | 2026-01-30 | OPEN |
| [#5290](https://github.com/openclaw/openclaw/issues/5290) | Bedrock 推理配置文件 ID 支持缺失 | 2026-01-31 | OPEN |
| [#5799](https://github.com/openclaw/openclaw/issues/5799) | Stabilisation Mode | 2026-02-01 | CLOSED |

### 高优先级待合并 PRs

| PR | 描述 | 规模 |
|---|---|---|
| [#35361](https://github.com/openclaw/openclaw/pull/35361) | context dedup + read-lineage compaction | XL |
| [#36630](https://github.com/openclaw/openclaw/pull/36630) | Signal 双向引用支持 | XL |
| [#35336](https://github.com/openclaw/openclaw/pull/35336) | DingTalk 集成 | XL |
| [#38278](https://github.com/openclaw/openclaw/pull/38278) | Slack mux receiver | XL |
| [#21182](https://github.com/openclaw/openclaw/pull/21182) | LiteLLM 模型发现 + prompt caching | L |

---

**报告生成时间**: 2026-03-07  
**数据来源**: GitHub OpenClaw Repository

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**报告周期：2026-03-07**

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**多极分化、并行演进**的格局。核心项目 OpenClaw 凭借 500+ 条日更事务维持最高活跃度，但被多个严重回归问题（文件系统工具失效、macOS Intel 兼容）困扰；生态呈现"一超多强"态势——Zeroclaw、NanoBot、PicoClaw 等项目在垂直场景（安全加固、多渠道集成、硬件嵌入式）快速迭代。**Provider 多元化、本地模型支持、多代理协作**成为全生态共识方向，同时**安全防护**（SSRF、命令注入）从 ZeptoClaw 的单点突破正在向全生态扩散。

---

## 2. 各项目活跃度对比

| 项目 | Issues 今日更新 | PRs 今日更新 | 待合并 PR | Release 今日 | 核心状态 |
|------|-----------------|--------------|-----------|--------------|----------|
| **OpenClaw** | 500 (新增429活跃) | 500 | 189 | ❌ 无 | 🟡 高活跃但多回归Bug |
| **Zeroclaw** | 17 (16新开) | 50 | 33 | ❌ 无 | 🟡 活跃，S0级Bug |
| **EasyClaw** | 3 (1新开) | 0 | 0 | ✅ v1.6.1/v1.6.0 | 🟢 稳定迭代 |
| **LobsterAI** | 15 (全活跃) | 8 | 2 | ✅ v0.2.0 | 🟢 活跃有新功能 |
| **ZeptoClaw** | 6 | 11 | 2 | ❌ 无 | 🟢 安全修复主导 |
| **NanoBot** | 26 (20新开) | 62 | 40 | ❌ 无 | 🟡 快速迭代期 |
| **PicoClaw** | 18 | 107 | 68 | ❌ 无 | 🟡 高吞吐 |
| **NanoClaw** | 14 | 50 | 13 | ❌ 无 | 🟢 工程完善期 |
| **IronClaw** | 32 (16新开) | 50 | 28 | ✅ v0.16.1/v0.16.0 | 🟢 架构改进期 |
| **TinyClaw** | 1 (关闭) | 4 | 3 | ❌ 无 | 🟢 低速演进 |

---

## 3. OpenClaw 在生态中的定位

### 定位特征

OpenClaw 是**生态核心参照系**——作为"Claw"系列命名空间的发源地，其代码库规模、社区参与度（500条/日事务）均显著领先于其他项目。然而，这种领先正在被**质量问题侵蚀**：

| 维度 | OpenClaw 现状 | 生态对比 |
|------|--------------|----------|
| **代码吞吐量** | 500条事务/日 | NanoBot (62)、PicoClaw (107) 紧随 |
| **Bug 严重度** | 🔴 4个严重Bug未解（工具失效、回归） | 多数项目Bug为中低 |
| **功能覆盖** | 最全（多Provider、多Channel） | 垂直项目更聚焦 |
| **版本节奏** | 3月4日后无新版本 | IronClaw、LobsterAI 近期发布 |

### 技术路线差异

- **OpenClaw**: 通用全栈平台，倾向聚合所有能力
- **ZeptoClaw**: 安全加固优先，SSRF防护全链路覆盖
- **NanoBot/PicoClaw**: 通道能力扩展（MQTT、IRC、WhatsApp媒体）
- **IronClaw**: 架构层统一（统一线程模型、WASM生态）
- **TinyClaw**: 多代理协作新架构探索

---

## 4. 共同关注的技术方向

### 多项目共同需求矩阵

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **本地模型支持** | OpenClaw, NanoBot, PicoClaw, IronClaw | Ollama 配置复杂、无响应问题（#1161 PicoClaw、#75 NanoBot） |
| **多渠道消息能力** | Zeroclaw, NanoBot, PicoClaw | WhatsApp 媒体（#1638 NanoBot）、Telegram 流式响应（#1098 PicoClaw）、IRC 集成（#1138 PicoClaw） |
| **安全加固** | ZeptoClaw (主导), NanoClaw | SSRF 防护、命令注入隔离、OAuth token 动态刷新 |
| **Provider 多元化** | LobsterAI, NanoBot, NanoClaw | Azure OpenAI (#1618)、Venice.ai (#1586)、StepFun (#237)、Avian (#549) |
| **多代理协作** | TinyClaw, NanoBot | 多代理团队并行、通信、任务链（#163 TinyClaw、#222 NanoBot） |
| **稳定性修复** | 多数项目 | 回归问题（OpenClaw #32991）、会话丢失（NanoClaw #735）、上下文丢失（LobsterAI #312） |

### 关键信号

- **安全已从"可选"变为"必选"**：ZeptoClaw 的 SSRF 全链路防护正在被生态关注
- **本地模型是最大公约数**：4+ 项目集中反馈 Ollama 配置问题，说明文档/UX 存在系统性不足

---

## 5. 差异化定位分析

### 功能侧重

| 项目 | 核心定位 | 目标用户 | 架构特点 |
|------|----------|----------|----------|
| **OpenClaw** | 通用全栈平台 | 开发者、全场景用户 | 聚合型，追求功能最全 |
| **Zeroclaw** | 安全强化版 | 企业/敏感场景 | 安全优先，SD-JWT、Verifiable Intent |
| **ZeptoClaw** | 安全基础设施 | 安全敏感开发者 | SSRF/命令注入防护专家 |
| **LobsterAI** | 网易有道定制版 | 中文用户 | Skill Store + MCP，视觉理解 |
| **EasyClaw** | 轻量入门版 | 新手/ macOS 用户 | 最小化配置，即装即用 |
| **NanoBot** | 物联网/多通道 | IoT、跨平台开发者 | MQTT、WhatsApp、飞书 |
| **PicoClaw** | 嵌入式/硬件 | 硬件开发者、树莓派 | 轻量化、多通道集成 |
| **NanoClaw** | 工程完善版 | 运维/生产环境 | 监控、Observability、容器化 |
| **IronClaw** | 架构演进版 | Near AI 生态 | WASM 扩展、LLM-as-Judge、内存管理 |
| **TinyClaw** | 协作实验版 | 探索多代理团队 | 线程隔离、团队协作架构 |

### 用户群体分层

- **生产级**: Zeroclaw、ZeptoClaw（安全）、NanoClaw（监控）、IronClaw（企业级）
- **开发级**: OpenClaw（通用）、NanoBot（多通道）、PicoClaw（嵌入式）
- **入门/轻量**: EasyClaw、TinyClaw、LobsterAI

---

## 6. 社区热度与成熟度

### 活跃度分层

```
高迭代期（功能高速迭代）:
├── NanoBot (62 PRs/日, 40待合并)
├── PicoClaw (107 PRs/日, 68待合并)  
├── OpenClaw (500 事务/日, 189待合并)
└── Zeroclaw (50 PRs/日, 33待合并)

稳定演进期（问题修复+小功能）:
├── ZeptoClaw (安全主题驱动)
├── LobsterAI (v0.2.0发布后)
└── TinyClaw (多代理架构重构)

质量巩固期（架构/监控/稳定性）:
├── NanoClaw (Observability完成, 监控闭环)
└── IronClaw (统一线程模型, e2e测试增强)

轻量维护期:
└── EasyClaw (版本稳定, Issue量极低)
```

### 成熟度评估

| 阶段 | 项目 | 特征 |
|------|------|------|
| **快速迭代** | OpenClaw, NanoBot, PicoClaw | 高 PR 量、较多 Bug、功能快速叠加 |
| **生态扩展** | Zeroclaw, ZeptoClaw | 通道能力、安全能力扩展 |
| **工程完善** | NanoClaw, IronClaw | 监控、测试、安全架构 |
| **产品化** | LobsterAI, EasyClaw | 有明确版本发布、用户反馈驱动 |

---

## 7. 值得关注的趋势信号

### 🔴 开发者需重点关注

1. **安全将成为基础设施**
   - ZeptoClaw 的 SSRF 全链路防护（截图、浏览器、技能安装）是行业标杆
   - NanoClaw 环境变量隔离（#781）、Zeroclaw Verifiable Intent 表明安全从"功能"走向"架构"

2. **本地模型是当前最大痛点**
   - 4+ 项目集中反馈 Ollama 配置/响应问题
   - OpenClaw 文件系统工具失效（#34810）与本地模型调用链路直接相关

3. **多代理协作是下一个架构升级方向**
   - TinyClaw (#163)、NanoBot (#222) 同步推进
   - 标志着从"单代理工具"向"多代理平台"的范式转移

4. **Provider 多元化势不可挡**
   - Azure OpenAI、Venice.ai、StepFun、Avian 等新 Provider 快速涌入
   - OpenClaw 面临"聚合者困境"——功能全但质量把控难度大

### 🟡 生态机会点

| 方向 | 机会描述 | 潜在价值 |
|------|----------|----------|
| **本地模型文档/UX** | 解决 Ollama 配置复杂性问题 | 降低入门门槛 |
| **安全中间件** | 将 ZeptoClaw 的 SSRF 能力抽象为通用库 | 生态共享 |
| **监控/可观测性** | NanoClaw 的 Observability 套件可复刻 | 生产部署必备 |
| **多通道媒体能力** | WhatsApp 媒体、飞书语音等 | 场景差异化 |

### 风险提示

- **OpenClaw 回归问题可能削弱生态信心**：用户"broken disaster"评价（#35077）需尽快修复
- **版本发布质量**：Zeroclaw v0.1.8 binaries 缺失影响新用户入站
- **依赖绑定**：部分项目对 Claude Code/Ollama 依赖过重，限制适用场景

---

**总结**：生态处于"春秋战国"阶段——OpenClaw 作为开创者面临质量大考，垂直玩家（安全、物联网、多代理）在细分领域快速崛起。对开发者而言，**安全加固**和**本地模型支持**是当前最确定的技术投资方向，也是生态竞争的关键差异点。

---

## 同赛道项目详细报告

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报
**2026-03-07**

---

## 1. 今日速览

2026年3月7日，Zeroclaw 项目保持高度活跃状态。过去24小时内共产生 **17 条 Issues 更新**（16 新开/活跃，1 已关闭）和 **50 条 PR 更新**（33 待合并，17 已合并/关闭），但**未发布新版本**。社区围绕 v0.1.8 发布问题产生较多讨论（ binaries 缺失导致安装脚本失败），同时多个 S0/S1 级严重 Bug 被报告，涉及 Discord、WebUI、Docker 等核心组件。PR 层面继续推进功能开发（Verifiable Intent 模块、容器感知 URL、邮件主题配置等），项目整体处于问题修复与新功能开发并行状态。

---

## 2. 版本发布

**无新版本发布**

近期 v0.1.8 存在发布问题，见「Bug 与稳定性」章节。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 描述 | 状态 |
|---|---|---|
| [#2938](https://github.com/zeroclaw-labs/zeroclaw/pull/2938) | **feat(verifiable_intent)**: 添加原生 Verifiable Intent 生命周期模块，支持 SD-JWT 分层凭证 | OPEN |
| [#2937](fix) | **fix(docker)**: 修复 Dockerfile 缺失 `data/` 文件夹导致构建失败 | OPEN |
| [#2936](fix) | **fix(providers)**: 调整 OpenAI 推理模型（o1/o3/o4/gpt-5）温度必须为 1.0 | OPEN |
| [#2935](fix) | 修复 bootstrap.sh 在 macOS Docker 环境下的 unbound variable 错误 | OPEN |
| [#2933](fix) | **fix(onboard)**: Docker 环境使用 `host.docker.internal` 替代 `localhost` | OPEN |
| [#2928](chore) | 迁移至单一 master 分支模型，更新维护者信息 | OPEN |
| [#2787](fix) | Dockerfile 复制 skills 文件夹至 builder 镜像 | **CLOSED** |
| [#2934](docs) | 扩展 i18n 语言支持（韩语、德语、阿拉伯语等） | OPEN |
| [#2932](feat) | **feat(email)**: 邮件默认主题可配置 | OPEN |
| [#2931](docs) | 重写 CI 文档以适配简化后的 4-workflow 系统 | OPEN |
| [#2927](feat) | **feat(agent)**: 添加 `--session-id` 支持有状态对话历史 | OPEN |

**评估**: 项目在多个维度同时推进——核心功能（Verifiable Intent、Session ID）、 DX 优化（Docker 构建、macOS 兼容）、国际化（多语言文档）、基础设施（分支策略统一）。30+ PR 待合并表明开发节奏健康。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 热度分析 |
|---|---|---|
| [#1955](https://github.com/zeroclaw-labs/zeroclaw/issues/1955) Qwen coding-plan 入口 | 3 | **已关闭** — 社区对使用阿里云 coding plan 的需求明确 |
| [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) Invalid schema for 'channel_ack_config' | 3 | **S1 阻塞** — 运行时错误，多个 provider/model 失败，需优先处理 |
| [#2885](https://github.com/zeroclaw-labs/zeroclaw/issues/2885) v0.1.8 无发布 binaries | 3 + 4 👍 | **高热度** — 直接影响用户部署，多人确认 |
| [#2896](https://github.com/zeroclaw-labs/zeroclaw/issues/2896) Discord WebSocket 停止接收消息 | 2 | **S0 严重** — Discord 通道功能失效 |
| [#2922](https://github.com/zeroclaw-labs/zeroclaw/issues/2922) 社区更新公告 | 2 | 官方沟通透明度获得认可（9 👍） |
| [#2910](https://github.com/zeroclaw-labs/zeroclaw/issues/2910) WebUI agent v0.1.8 不工作 | 2 + 截图 | 用户现场环境问题反馈 |
| [#2921](https://github.com/zeroclaw-labs/zeroclaw/issues/2921) v0.1.8 无二进制资源 | 2 | 与 #2885 重复追踪 |

**分析**: 社区关注点集中在 **v0.1.8 发布质量问题**（binaries 缺失导致安装失败）和 **Discord/WebUI 运行时稳定性**。官方发布的 [#2922](https://github.com/zeroclaw-labs/zeroclaw/issues/2922) 社区公告显示项目方重视透明度修复。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排序）

#### 🔴 S0 - 严重（数据丢失/安全风险/功能完全失效）

| Issue | 描述 | 状态 |
|---|---|---|
| [#2896](https://github.com/zeroclaw-labs/zeroclaw/issues/2896) | Discord WebSocket 在首次消息交换后停止接收 MESSAGE_CREATE 事件，无重连 | OPEN |
| [#2910](https://github.com/zeroclaw-labs/zeroclaw/issues/2910) | WebUI agent 连接错误，重连失败 | OPEN |
| [#2924](https://github.com/zeroclaw-labs/zeroclaw/issues/2924) | Docker 环境下 local llama 配置生成不完整 | OPEN |

#### 🟠 S1 - 阻塞（工作流受阻）

| Issue | 描述 | 是否有 Fix PR |
|---|---|---|
| [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) | Invalid schema for function 'channel_ack_config' 导致所有 provider/model 失败 | 无 |
| [#2885](https://github.com/zeroclaw-labs/zeroclaw/issues/2885) | v0.1.8 无发布 binaries | 无 |
| [#2921](https://github.com/zeroclaw-labs/zeroclaw/issues/2921) | v0.1.8 release 0 assets，官方安装脚本 curl 方式失效 | 无 |
| [#2930](https://github.com/zeroclaw-labs/zeroclaw/issues/2930) | macOS Docker bootstrap.sh unbound variable 错误 | [#2935](https://github.com/zeroclaw-labs/zeroclaw/pull/2935) **已提 PR** |
| [#2905](https://github.com/zeroclaw-labs/zeroclaw/issues/2905) | matrix-sdk 依赖编译时 query overflow | 无 |

#### 🟡 S3 - 轻微

| Issue | 描述 |
|---|---|
| [#2929](https://github.com/zeroclaw-labs/zeroclaw/issues/2929) | 分支策略不清晰：master vs main 困惑 |
| [#2914](https://github.com/zeroclaw-labs/zeroclaw/issues/2914) | Debian 12 安装 404 |

**关键风险**: v0.1.8 发布质量问题影响新用户入站，是当前最高优先级。

---

## 6. 功能请求与路线图信号

### 今日新增功能请求

| Issue | 功能描述 | 潜在纳入版本 |
|---|---|---|
| [#2926](https://github.com/zeroclaw-labs/zeroclaw/issues/2926) | **Provider HTTP 请求超时可配置**（当前硬编码 120s） | 视需求评估 |
| [#2916](https://github.com/zeroclaw-labs/zeroclaw/issues/2916) | Matrix 通道支持密码登录 + E2EE 恢复密钥 | 功能增强 |
| [#2918](https://github.com/zeroclaw-labs/zeroclaw/issues/2918) | WhatsApp Web 支持音频/媒体消息（语音、图片、文档） | 通道能力补全 |
| [#2907](https://github.com/zeroclaw-labs/zeroclaw/issues/2907) | 支持向 Telegram Channel 发送消息 | 通道功能 |
| [#2938](https://github.com/zeroclaw-labs/zeroclaw/pull/2938) | **Verifiable Intent 生命周期模块**（SD-JWT）| 已在 PR，可能纳入下版本 |
| [#2932](https://github.com/zeroclaw-labs/zeroclaw/pull/2932) | 邮件默认主题可配置 | 已在 PR |

**路线图信号**: 
- **通道能力扩展**是持续主题（WhatsApp 媒体、Telegram Channel、Matrix 认证）
- **DX 优化**受重视（HTTP 超时配置、Docker/容器兼容性）
- **安全/合规**方向有新模块（Verifiable Intent）

---

## 7. 用户反馈摘要

### 用户痛点与使用场景

1. **安装/部署失败**
   - v0.1.8 binaries 缺失导致官方安装脚本 `curl -fsSL ... | bash` 失效（影响 Debian/Linux 新用户）
   - macOS Docker 环境 bootstrap.sh 启动失败

2. **运行时稳定性**
   - Discord 连接在使用一次后"假死"，用户无法接收消息
   - WebUI agent 连接后报错重连失败

3. **配置复杂度**
   - Matrix 登录需手动获取 Access Token，流程繁琐
   - 本地 llama 在 Docker 中配置错误

4. **功能缺失**
   - WhatsApp 仅支持文本，语音/图片无法处理
   - Telegram 只能收不能发（用户树莓派传感器场景无法实现报警推送）

### 满意度信号

- **正向**: 官方社区公告获得 9 👍，显示用户对透明度认可的积极态度
- **负向**: v0.1.8 问题引发多人重复报告（#2885、#2921），影响信任度

---

## 8. 待处理积压

### 长期未响应的 Issues（创建 > 3 天且无官方回应）

| Issue | 创建日期 | 描述 | 风险 |
|---|---|---|---|
| [#2901](https://github.com/zeroclaw-labs/zeroclaw/issues/2901) | 2026-03-06 | Z.AI provider 不发送 `tool_stream: true`，导致 GLM-5 工具调用异常 | 功能缺陷 |
| [#2905](https://github.com/zeroclaw-labs/zeroclaw/issues/2905) | 2026-03-06 | matrix-sdk 编译 query overflow | **S1 阻塞** |

### 建议行动

1. **立即处理**: v0.1.8 binaries 缺失问题（影响面大）
2. **尽快响应**: Discord/WebUI S0 级运行时 bug
3. **关注积压**: Z.AI tool_stream 和 matrix-sdk 编译问题长期未解

---

*报告生成时间: 2026-03-07 | 数据来源: GitHub zeroclaw-labs/zeroclaw*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-07)

## 今日速览

过去24小时内，EasyClaw 项目保持较高的维护活跃度。共处理 3 条 Issues（1 条新开，2 条关闭），发布 2 个版本更新（v1.6.1 和 v1.6.0），项目整体处于稳定迭代状态。社区反馈主要集中在版本迁移兼容性和模型能力支持方面，目前暂无新增 Pull Request。

---

## 版本发布

### ✅ v1.6.1 发布

**发布说明：** EasyClaw v1.6.1 已发布，主要提供 macOS 安装问题的官方解决方案。

**已知问题修复/说明：**
- 针对 macOS Gatekeeper 拦截未签名应用的问题，提供官方临时解决方案（通过终端移除 quarantine 属性）

**迁移注意事项：**
- macOS 用户如遇 `"'EasyClaw' is damaged and can't be opened"` 提示，并非文件损坏，需执行终端命令解除拦截

📎 [Release v1.6.1](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.1)

---

### ✅ v1.6.0 发布

**发布说明：** v1.6.0 为前一版本迭代，包含功能优化与问题修复。

📎 [Release v1.6.0](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.0)

---

## 项目进展

| 类型 | 数量 | 详情 |
|------|------|------|
| 已合并 PR | 0 | 过去24小时无新增 PR |
| 已关闭 Issues | 2 | #9 (视觉理解支持), #10 (路径迁移) |

**重点进展：**
- Issue #9 已关闭：百炼 CodingPlan 视觉理解能力支持问题已进入修复流程
- Issue #10 已关闭：技能目录路径不一致问题已解决，`.openclaw` → `.easyclaw` 迁移完成

---

## 社区热点

### 🔥 Issue #9 - easyclaw接入百炼CodingPlan后，没有完全支持模型能力（如视觉理解）

- **状态:** 已关闭 ✅
- **作者:** @slowayear
- **评论数:** 5
- **摘要:** 百炼 CodingPlan 中 qwen3.5 和 kimi2.5 支持视觉理解，但 EasyClaw 默认配置仅支持文本能力，未能匹配对应模型的视觉理解能力。
- **热度分析:** 该问题反映用户对多模态模型支持的迫切需求，涉及 AI 能力集成层面，是当前社区关注的核心功能缺口。
- **链接:** https://github.com/gaoyangz77/easyclaw/issues/9

---

### 📌 Issue #11 - 更新1.5.16后异常

- **状态:** 开放中 🔵
- **作者:** @kichy-ge
- **评论数:** 4
- **摘要:** 用户报告更新至 1.5.16 版本后出现异常行为，附带了截图说明问题现象。
- **热度分析:** 这是近期唯一活跃的新开 Issue，用户反馈积极，讨论集中在问题复现与排查。
- **链接:** https://github.com/gaoyangz77/easyclaw/issues/11

---

## Bug 与稳定性

### 🐛 活跃 Bug

| Issue | 严重程度 | 状态 | 说明 |
|-------|----------|------|------|
| #11 | **中** | 🔵 开放 | 更新至 1.5.16 后异常，可能涉及版本兼容或回归问题 |

**评估：** 目前仅 1 条活跃 Bug，暂无 Fix PR 关联。建议维护者优先关注 #11 问题排查。

---

## 功能请求与路线图信号

从 Issues 讨论中提炼出以下功能方向信号：

| 功能需求 | 来源 Issue | 优先级信号 |
|----------|------------|------------|
| 视觉理解能力支持 | #9 | 高（已关闭，将进入开发） |
| 多模型能力自动匹配 | #9 | 中 |

**判断：** 视觉理解支持能力预计将在后续版本中实现，可关注项目后续 Release。

---

## 用户反馈摘要

### 正面反馈
- 版本迭代及时（v1.6.0 → v1.6.1 连续发布）
- macOS 安装问题提供官方解决方案

### 痛点与不满
1. **版本兼容性问题：** #11 反馈 1.5.16 版本更新后出现异常，影响用户体验
2. **路径迁移不彻底：** #10 指出 `.openclaw` → `.easyclaw` 迁移存在遗留问题
3. **多模态能力缺失：** #9 反馈 AI 模型视觉理解能力未被正确调用

---

## 待处理积压

| Issue | 状态 | 等待时间 | 建议 |
|-------|------|----------|------|
| #11 | 🔵 开放中 | 1 天 | 需维护者介入排查 |

**提醒：** Issue #11 为近期新开问题，建议尽快响应以维护社区活跃度。

---

*报告生成时间：2026-03-07 | 数据来源：GitHub EasyClaw Repository*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-03-07

---

## 1. 今日速览

LobsterAI 项目今日保持高度活跃：共产生 **15 条 Issues 更新**（均为新开/活跃状态）和 **8 条 PR 更新**（2 待合并、6 已合并/关闭）。新版本 **v0.2.0** 正式发布，带来 Skill Store 和 MCP 支持两大核心功能。项目整体向前推进明显，社区反馈积极，但同时多个功能性 Bug 被报告，主要集中在 Windows 端和图片显示/发送场景。

---

## 2. 版本发布

### v0.2.0 发布 🎉

**发布详情**：[Release v0.2.0](https://github.com/netease-youdao/LobsterAI/releases/tag/v0.2.0)

**核心更新**：

| 功能 | 关联 PR | 贡献者 |
|------|---------|--------|
| **Skill Store 支持** | [#254](https://github.com/netease-youdao/LobsterAI/pull/254), [#267](https://github.com/netease-youdao/LobsterAI/pull/267), [#298](https://github.com/netease-youdao/LobsterAI/pull/298) | @liuzhq1986 |
| **MCP 支持** | （相关 PR 见 Release 描述） | @liugang519 |

> 📌 **迁移提示**：从旧版本升级至 v0.2.0 后，历史对话数据可能丢失（见 Issue #317），建议用户提前备份对话记录。

---

## 3. 项目进展

今日共合并/关闭 **6 条 PR**，项目功能持续完善：

| PR | 状态 | 概述 | 贡献者 |
|----|------|------|--------|
| [#315](https://github.com/netease-youdao/LobsterAI/pull/315) | CLOSED | feat: 锁定 OpenClaw 到版本化发布，使用构建缓存 | @btc69m979y-dotcom |
| [#309](https://github.com/netease-youdao/LobsterAI/pull/309) | CLOSED | Liuzhq/context optimize - 修复聊天上下文丢失，修改模型超时时间 | @liuzhq1986 |
| [#311](https://github.com/netease-youdao/LobsterAI/pull/311) | CLOSED | fix: 为 OpenClaw 浏览器工具快照超时添加诊断 | @btc69m979y-dotcom |
| [#290](https://github.com/netease-youdao/LobsterAI/pull/290) | CLOSED | fix: 同步工作目录到 OpenClaw 配置 | @btc69m979y-dotcom |
| [#308](https://github.com/netease-youdao/LobsterAI/pull/308) | CLOSED | fix: 修复 Windows 端无法使用应用内置 node 的 bug | @fisherdaddy |
| [#304](https://github.com/netease-youdao/LobsterAI/pull/304) | CLOSED | fix: 修复 Windows 端沙箱不能用的问题，更新沙箱镜像 | @fisherdaddy |

**进展亮点**：
- **上下文丢失问题**（Issue #312）已通过 PR #309 修复 ⭐
- **Windows 端沙箱问题** 得到解决，镜像已更新
- **OpenClaw 工作目录同步** 问题修复，用户配置现在能正确生效

---

## 4. 社区热点

以下 Issues 讨论最为活跃（按评论数排序）：

| Issue | 评论 | 核心诉求 |
|-------|------|----------|
| [#303](https://github.com/netease-youdao/LobsterAI/issues/303) | 2 | Windows 文件名/目录名被自动插入空格，导致文件操作失败 |
| [#313](https://github.com/netease-youdao/LobsterAI/issues/313) | 2 | ComfyUI 生成的图片无法在对话框显示 |
| [#174](https://github.com/netease-youdao/LobsterAI/issues/174) | 2 | Ollama 调用能力需加强，长时间无反应、Request timed out |

**分析**：用户反馈集中在 **文件操作可靠性** 和 **图片渲染** 场景，这两类问题直接影响核心使用体验。Ollama 本地模型调用是高频需求，但目前稳定性不足。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 关联 PR |
|----------|-------|------|---------|
| 🔴 **高** | [#303](https://github.com/netease-youdao/LobsterAI/issues/303) | Windows 文件名被插入空格，导致文件读写失败 | - |
| 🔴 **高** | [#313](https://github.com/netease-youdao/LobsterAI/issues/313) | ComfyUI 图片无法在对话框显示 | - |
| 🔴 **高** | [#314](https://github.com/netease-youdao/LobsterAI/issues/314) | 图片无法发送到飞书，400 错误 | - |
| 🟡 **中** | [#312]( ✅ 已修复) | 聊天上下文丢失 | [#309](https://github.com/netease-youdao/LobsterAI/pull/309) |
| 🟡 **中** | [#307](https://github.com/netease-youdao/LobsterAI/issues/307) | Windows 本地执行缺少健康 Git Bash | [#308](https://github.com/netease-youdao/LobsterAI/pull/308) 已修复 |
| 🟡 **中** | [#318](https://github.com/netease-youdao/LobsterAI/issues/318) | 定时任务时间设置手工编辑后变成 nan:nan | - |
| 🟢 **低** | [#310](https://github.com/netease-youdao/LobsterAI/issues/310) | 定时任务 workingDirectory 中文字符乱码 | - |

---

## 6. 功能请求与路线图信号

以下功能需求被明确提出，结合已有 PR 可判断潜在纳入可能：

| Issue | 需求 | 已有相关 PR | 纳入可能性 |
|-------|------|-------------|------------|
| [#321](https://github.com/netease-youdao/LobsterAI/issues/321) | 每个任务对话框可自主选择运行环境（Sandbox/Local/Auto） | - | ⭐⭐⭐ 中 |
| [#320](https://github.com/netease-youdao/LobsterAI/issues/320) | 本地运行多个 Agent 代理（龙虾军团） | - | ⭐⭐ 低 |
| [#316](https://github.com/netease-youdao/LobsterAI/issues/316) | 请求支持 OpenRouter 的 auto 模式 | - | ⭐⭐⭐ 中 |
| [#174](https://github.com/netease-youdao/LobsterAI/issues/174) | 加强 Ollama 调用能力 | - | ⭐⭐⭐⭐ 高（已有多个 issue 反馈） |
| [#237](https://github.com/netease-youdao/LobsterAI/pull/237) | 添加 Stepfun provider（Step 3.5 Flash） | **PR 已在审** | ⭐⭐⭐⭐ 高 |

---

## 7. 用户反馈摘要

**用户痛点**：

- **文件操作可靠性**：Windows 用户反馈文件名/目录名被错误插入空格，导致文件读写持续失败（Issue #303）
- **上下文丢失**：多轮对话场景下，上下文没有正确提交，导致"前言不答后语"（Issue #312）
- **版本升级数据丢失**：从 0.124 升级到 0.2 版本后，历史对话全部丢失（Issue #317）
- **本地模型调用不稳定**：Ollama 调用频繁出现超时、无反应问题（Issue #174）

**用户满意点**：

- 项目迭代速度快（"龙虾最近每天一个版本"——Issue #174）
- Skill Store 和 MCP 新功能受期待

---

## 8. 待处理积压

以下 Issues 值得关注，需维护者尽快响应：

| Issue | 状态 | 等待时长 | 风险 |
|-------|------|----------|------|
| [#174](https://github.com-netease-youdao/LobsterAI/issues/174) | OPEN | ~7 天 | Ollama 关键功能，长期无修复 |
| [#317](https://github.com/netease-youdao/LobsterAI/issues/317) | OPEN | 1 天 | 数据丢失问题，影响升级用户体验 |
| [#303](https://github.com/netease-youdao/LobsterAI/issues/303) | OPEN | 1 天 | Windows 核心路径操作失败 |

---

> 📊 **数据来源**：LobsterAI GitHub 仓库 | 统计周期：2026-03-06 00:00 - 2026-03-07 00:00 (UTC+8)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-07)

## 1. 今日速览

2026年3月7日，ZeptoClaw 项目保持高度活跃。24小时内共处理 **17 条事务** (6 Issues + 11 PRs)，其中 **9 个 PR 已合并/关闭**，展现出不俗的开发吞吐。安全加固成为本周期核心主题——项目集中修复了多类 SSRF 漏洞 (截图工具、技能安装程序、浏览器请求链) 和 shell 命令注入风险，同时完善了任务崩溃隔离机制。代码库正向安全性与稳定性方向快速演进，未发布新版本。

---

## 2. 版本发布

本周期无新版本发布。

---

## 3. 项目进展

过去24小时内，项目合并/关闭了 **9 个 PR**，推进了以下关键工作：

| PR | 状态 | 主题 | 贡献者 |
|----|------|------|--------|
| [#274](https://github.com/qhkm/zeptoclaw/pull/274) | ✅ 合并 | security: harden screenshot tool against SSRF via redirect chains | @qhkm |
| [#270](https://github.com/qhkm/zeptoclaw/pull/270) | ✅ 合并 | feat(lark): enable Markdown rendering in Feishu/Lark | @qhkm |
| [#260](https://github.com/qhkm/zeptoclaw/pull/260) | ✅ 合并 | security: add SSRF guardrails to skill installer downloads | @AshishDeveloperr |
| [#269](https://github.com/qhkm/zeptoclaw/pull/269) | ✅ 合并 | security: add structured command parsing to shell.rs | @qhkm |
| [#265](https://github.com/qhkm/zeptoclaw/pull/265) | ✅ 合并 | fix: harden spawned task crash isolation | @qhkm |
| [#258](https://github.com/qhkm/zeptoclaw/pull/258) | ✅ 合并 | feat: track token usage in containerized agent mode | @papatinga81 |
| [#262](https://github.com/qhkm/zeptoclaw/pull/262) | ✅ 合并 | feat(discord): add HTTP CONNECT proxy support for Gateway WebSocket | @starsy |
| [#261](https://github.com/qhkm/zeptoclaw/pull/261) | ✅ 合并 | Fix GHSA-5gqm-m96q-7h65 | @zpbrent |
| [#267](https://github.com/qhkm/zeptoclaw/pull/267) | ✅ 合并 | security: add SSRF guardrails to skill installer with DNS pinning | @qhkm |

**重点进展：**

- **安全能力大幅提升**：项目完成了 4 项 SSRF 防护补强 (截图工具重定向链 #274、技能安装程序 #260/#267、浏览器请求链 #272)，并修复了 shell.rs 的命令注入漏洞 (#269)。GHSA-5gqm-m96q-7h65 漏洞已关闭 (#261)。
- **多渠道稳定性增强**：任务崩溃隔离从 Telegram 扩展至 Slack、Discord、Webhook、WhatsApp 等全渠道 (#265)，降低了异步任务 panics 导致进程崩溃的风险。
- **功能体验优化**：Feishu/Lark 渠道支持 Markdown 渲染 (#270)，Discord Gateway 新增 HTTP CONNECT 代理支持 (#262)，容器化 agent 模式新增 token 用量追踪 (#258)。

---

## 4. 社区热点

以下 Issues/PRs 获得较多关注或评论：

1. **[#222](https://github.com/qhkm/zeptoclaw/issues/222)** - feat: per-template capability sandbox (tools, shell patterns, resource limits)
   - 状态: OPEN | 评论: 2 | 标签: feat, P3-normal
   - **热度分析**：这是关于模板级能力沙箱的功能提案，旨在让每个 Agent 模板声明自己的工具 allowlist、shell 命令模式和资源限制。关联了 GHSA-5wp8-q9mx-8jx8 安全漏洞，引发了关于模板安全自描述的热烈讨论。

2. **[#271](https://github.com/qhkm/zeptoclaw/issues/271)** - bug: harden screenshot tool against SSRF via redirect chains
   - 状态: OPEN | 评论: 1 | 标签: bug
   - **热度分析**：社区发现截图工具 (`screenshot.rs`) 未对重定向链进行 SSRF 验证，而同类工具 (`http_request.rs`, `web.rs`) 已有防护。该问题直接催生了 PR #274 的修复。

3. **[#259](https://github.com/qhkm/zeptoclaw/issues/259)** - fix: harden spawned task crash isolation
   - 状态: CLOSED | 评论: 1 | 标签: bug, P2-high
   - **热度分析**：该 Issue 揭示了除 Telegram 外其他渠道缺乏 panic 隔离的问题，已通过 PR #265 修复并关闭。

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 状态 | 关联 PR | 说明 |
|-------|----------|------|---------|------|
| [#271](https://github.com/qhkm/zeptoclaw/issues/271) | P2-high | OPEN | #274 (已合并) | 截图工具未验证 SSRF 重定向链，存在内部地址泄露风险 |
| [#268](https://github.com/qhkm/zeptoclaw/issues/268) | P2-high | CLOSED | #269 (已合并) | shell.rs 首 token 匹配存在注入绕过，已添加结构化命令解析 |
| [#259](https://github.com/qhkm/zeptoclaw/issues/259) | P2-high | CLOSED | #265 (已合并) | 多渠道任务 panic 未隔离，已为全渠道添加 catch_unwind |
| [#245](https://github.com/qhkm/zeptoclaw/issues/245) | P2-high | CLOSED | #260, #267 (已合并) | 技能安装程序无 SSRF 防护，已添加 host 验证 + DNS pinning |

**稳定性评估**：本周期未报告新的崩溃或回归。已有 4 个高优先级安全问题修复并合入主干，代码库稳定性显著提升。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 状态 | 预计版本 | 说明 |
|-------|------|------|----------|------|
| [#222](https://github.com/qhkm/zeptoclaw/issues/222) | feat | OPEN | 待定 | per-template capability sandbox - 模板级安全沙箱，预计将成为下一版本核心特性 |
| [#273](https://github.com/qhkm/zeptoclaw/pull/273) | chore | OPEN | 待定 | switch to cargo-nextest for OOM-resistant test runs - 测试基础设施优化 |
| [#272](https://github.com/qhkm/zeptoclaw/pull/272) | feat | OPEN | 待定 | enforces SSRF checks on the actual browser request chain - 浏览器端 SSRF 防护 |

**路线图信号**：

- **安全加固仍是首要任务**：SSRF 防护已覆盖 HTTP 请求、浏览器、截图、技能安装等全链路，下一步可能是 #222 提出的模板级沙箱能力。
- **测试基础设施优化** (#273)：切换到 cargo-nextest 以解决 CI 环境下 OOM 问题，说明项目开始关注大规模测试的可维护性。
- **容器化与多渠道能力完善**：token 用量追踪 (#258)、Discord 代理支持 (#262) 等 PR 表明项目在深化企业级部署能力。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的用户痛点与诉求：

1. **安全风险感知强烈**：
   - 用户 (如 @zpbrent) 多次报告 SSRF 漏洞，体现出社区对安全边界的敏锐关注。
   - shell 命令注入风险 (GHSA-5wp8-q9mx-8jx8) 被标记为高优先级，用户期待更结构化的防护。

2. **多渠道体验差异**：
   - Feishu/Lark 用户反馈 Markdown 格式无法渲染 (Issue #266)，已通过 PR #270 解决。

3. **企业级部署需求**：
   - Discord 用户在企业网络环境下遇到 Gateway 连接失败问题 (#262)，需支持 HTTP CONNECT 代理。
   - 容器化部署场景下 token 用量不可见 (#258)，已补充 IPC 协议支持。

4. **CI/测试稳定性**：
   - 开发者反馈 `cargo test` 在低 RAM 环境下易被 OOM killer 终止 (#273)，影响调试效率。

---

## 8. 待处理积压

以下重要 Issue/PR 需关注：

| 编号 | 类型 | 状态 | 等待时间 | 备注 |
|------|------|------|----------|------|
| [#222](https://github.com/qhkm/zeptoclaw/issues/222) | Issue | OPEN | ~4 天 | per-template capability sandbox - 核心安全功能提案，需明确实现路线 |
| [#271](https://github.com/qhkm/zeptoclaw/issues/271) | Issue | OPEN | ~1 天 | 截图工具 SSRF 问题 - 已对应 PR #274 合并，待验证 |
| [#273](https://github.com/qhkm/zeptoclaw/pull/273) | PR | OPEN | ~1 天 | cargo-nextest 迁移 - 建议合并以改善测试体验 |
| [#272](https://github.com/qhkm/zeptoclaw/pull/272) | PR | OPEN | ~1 天 | 浏览器 SSRF 检查 - 建议合并以完成安全闭环 |

**建议**：优先处理 #272 (浏览器端 SSRF 检查) 以完成全链路安全防护；#222 需尽快进入设计评审阶段。

---

*报告生成时间: 2026-03-07 | 数据来源: GitHub qhkm/zeptoclaw*

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-07)

## 1. 今日速览

2026-03-07，NanoBot 项目保持高度活跃状态。过去24小时内共产生 **26 条 Issues 更新**（新开/活跃 20 条，已关闭 6 条）和 **62 条 PR 更新**（待合并 40 条，已合并/关闭 22 条），但无新版本发布。项目整体处于功能快速迭代期，多项重要功能（MQTT 通道、WhatsApp 媒体支持、Azure OpenAI 提供商）正在积极开发中，社区参与度较高。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

过去24小时内，以下重要 PR 已合并/关闭，项目功能得到显著推进：

| PR | 状态 | 说明 |
|---|---|---|
| [#1602](https://github.com/HKUDS/nanobot/pull/1602) | ✅ CLOSED | 多模态媒体生成 + Discord 增强 + 语音合成（68个提交） |
| [#1616](https://github.com/HKUDS/nanobot/pull/1616) | ✅ CLOSED | 技能支持 cron 定时任务（frontmatter 配置） |
| [#1573](https://github.com/HKUDS/nanobot/pull/1573) | ✅ CLOSED | 图片 MIME 类型检测（从 magic bytes 而非文件扩展名） |
| [#1626](https://github.com/HKUDS/nanobot/pull/1626) | ✅ CLOSED | Feishu 频道 `allow_from` 白名单支持 |
| [#1534](https://github.com/HKUDS/nanobot/pull/1534) | ✅ CLOSED | Discord 角色 @mention 功能 |
| [#1632](https://github.com/HKUDS/nanobot/pull/1632) | ✅ CLOSED | mem0 记忆集成 |
| [#805](https://github.com/HKUDS/nanobot/pull/805) | ✅ CLOSED | Web 工具可选开关 + MCP SSE 支持 |

**评估**：项目在多模态、通信频道集成、记忆系统等核心能力上持续完善，22 个 PR 合并/关闭显示出较强的开发吞吐量。

---

## 4. 社区热点

以下 Issues/PRs 讨论最为活跃，反映出用户的核心关切：

| Issue/PR | 评论 | 赞 | 主题 |
|---|---|---|---|
| [#75](https://github.com/HKUDS/nanobot/issues/75) | 18 | 0 | **如何连接 Ollama** — 配置问题持续被关注 |
| [#222](https://github.com/HKUDS/nanobot/issues/222) | 9 | 5 | **多代理设置是否支持？** — 热门功能请求 |
| [#1481](已关闭) | 8 | 1 | GitHub Copilot tool_calls 多选响应不工作 |
| [#1519](已关闭) | 6 | 1 | uv 环境下 WebSocket SSL 证书验证失败 |
| [#1459](https://github.com/HKUDS/nanobot/issues/1459) | 5 | 1 | Codex 5.3 "懒惰"不执行任务 |

**分析**：
- **Ollama 连接**（#75）持续高讨论度，表明文档/配置指南存在不足，用户难以快速上手。
- **多代理支持**（#222）获得较多认同（5赞），是明确的功能需求，已有多个相关 PR 推进。
- 多个 Provider（Copilot、Codex、Ollama）相关问题反映出用户对多模型接入场景的强烈需求。

---

## 5. Bug 与稳定性

今日报告/处理的 Bug 按严重程度排列如下：

| Issue | 严重程度 | 状态 | 说明 |
|---|---|---|---|
| [#1519](https://github.com/HKUDS/nanobot/issues/1519) | **高** | ✅ 已关闭 | uv 虚拟环境 WebSocket SSL 证书验证失败（根因：uv 不继承系统 SSL_CERT_DIR） |
| [#1611](https://github.com/HKUDS/nanobot/issues/1611) | **高** | ✅ 已关闭 | 飞书消息死循环（严重体验问题） |
| [#1481](https://github.com/HKUDS/nanobot/issues/1481) | **高** | ✅ 已关闭 | GitHub Copilot tool_calls 多选响应不工作 |
| [#1637 (PR)](https://github.com/HKUDS/nanobot/pull/1637) | **中** | 🔄 待合并 | 修复 tool_call_id 长度超 64 字符限制（Copilot → Codex 切换场景） |
| [#1634](https://github.com/HKUDS/nanobot/issues/1634) | **中** | 🆕 新开 | Codex OAuth tool call ID 超 OpenAI Responses API 限制导致会话损坏 |
| [#1633](https://github.com/HKUDS/nanobot/issues/1633) | **中** | 🆕 新开 | `nanobot gateway --w/--workspace` 命令不工作 |
| [#1628](https://github.com/HKUDS/nanobot/issues/1628) | **中** | 🆕 新开 | Kimi K2.5 (Moonshot) 无法接收图片/视频消息 |
| [#1607](https://github.com/HKUDS/nanobot/issues/1607) | **低** | 🆕 新开 | 飞书语音消息下载失败 |

**稳定性评估**：今日处理了多个高严重性问题（SSL、死循环、Copilot 集成），项目稳定性有所改善。但 provider 切换场景（#1634）存在潜在回归风险。

---

## 6. 功能请求与路线图信号

以下功能请求具有较高价值，结合已有 PR 可判断可能被纳入下一版本：

| Issue/PR | 方向 | 关联 PR |
|---|---|---|
| [#222](https://github.com/HKUDS/nanobot/issues/222) | 多代理（Multi-Agent）设置支持 | — |
| [#912](https://github.com/HKUDS/nanobot/issues/912) | 任务级模型配置（对话/工具/浏览器用途不同模型） | — |
| [#1586 (PR)](https://github.com/HKUDS/nanobot/pull/1586) | **Venice.ai Provider 支持** | 🔄 待合并 |
| [#1618 (PR)](https://github.com/HKUDS/nanobot/pull/1618) | **Azure OpenAI Provider 支持** | 🔄 待合并 |
| [#1638 (PR)](https://github.com/HKUDS/nanobot/pull/1638) | **WhatsApp 媒体支持**（图片、文档、视频） | 🔄 待合并 |
| [#1631 (PR)](https://github.com/HKUDS/nanobot/pull/1631) | **MQTT 通道支持**（IoT 场景） | 🔄 待合并 |
| [#1588 (PR)](https://github.com/HKUDS/nanobot/pull/1588) | ACIP 安全框架 | 🔄 待合并 |
| [#1625](https://github.com/HKUDS/nanobot/issues/1625) | Google Search Grounding 原生支持（Gemini API） | — |
| [#1604](https://github.com/HKUDS/nanobot/issues/1604) | Telegram 个性化消息配置 | — |

**路线图观察**：
- **Provider 扩展**（Venice.ai、Azure OpenAI、Mistral）正在积极推进，下一版本有望支持更多模型供应商。
- **通道能力**（WhatsApp 媒体、MQTT）扩展明显，项目正从纯聊天机器人向多场景 AI 助手演进。
- **多代理**和**任务级模型配置**是明确的长期需求，但尚未有对应 PR。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的核心用户痛点与场景：

| 痛点/场景 | 典型 Issue |
|---|---|
| **配置困难** | #75（Ollama 连接）、#1617（文档无中文） |
| **Provider 稳定性** | #1624（Codex 间歇性错误）、#1623（OpenAI API key 报错）、#1634（切换 Provider 会话损坏） |
| **长任务执行** | #1022（长任务"启动但不执行"）、#1459（Codex "懒惰"不干活） |
| **多模态问题** | #1628（Kimi K2.5 不支持图片/视频）、#1607（飞书语音下载失败） |
| **集成需求** | #1537（Brave Search API）、#1536（MCP 断开重连）、#1584（Whisper Turbo 提速） |
| **功能缺失** | #222（多代理）、#912（任务级模型）、#1625（Google Search Grounding） |

**满意度观察**：
- 正面：多模态媒体生成（#1602）、Discord 增强、mem0 记忆集成等功能受认可。
- 负面：Provider 切换稳定性、文档完整性（尤其是中文）、长任务执行可靠性是主要不满来源。

---

## 8. 待处理积压

以下 Issues 长期未响应或存在关键阻塞，建议维护者重点关注：

| Issue | 创建时间 | 状态 | 阻塞原因 |
|---|---|---|---|
|

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-07)

## 1. 今日速览

PicoClaw 社区今日保持 **高度活跃** 状态：24小时内处理了 **18条 Issues** 和 **107条 PRs**，其中 **68个 PR 等待合并**，项目推进效率显著。Issue 活跃度较高（11个新开/活跃），但无新版本发布。核心聚焦于 **provider 配置问题修复**、**channel 功能增强**（Telegram 流式响应、IRC 集成）以及 **工具安全改进**。整体项目处于功能迭代与 bug 修复并行的健康状态。

---

## 2. 版本发布

**本期无新版本发布。**

---

## 3. 项目进展

过去24小时，**39个 PR 已合并/关闭**，以下是代表性进展：

| PR | 类型 | 描述 | 状态 |
|---|---|---|---|
| [#1192](https://github.com/sipeed/picoclaw/pull/1192) | docs | 更新微信二维码 | ✅ 已关闭（待合并） |
| [#1200](https://github.com/sipeed/picoclaw/pull/1200) | deps | 升级 filippo.io/edwards25519 至 1.1.1 | ✅ 已关闭 |
| [#1199](https://github.com/sipeed/picoclaw/pull/1199) | deps | 升级 go-sdk 至 1.3.1 | ✅ 已关闭 |
| [#1107](https://github.com/sipeed/picoclaw/pull/1107) | fix | 防止读取二进制文件 | ✅ Open |
| [#757](https://github.com/sipeed/picoclaw/pull/757) | fix | 修复 cron job 后 agent 响应未发送到 channel | ✅ Open |

**重点推进**：
- **安全问题修复**：防止 exec 工具误拦截 HTTP URL（#1178）
- **Provider 适配**：修复 Groq API prompt_cache_key 兼容问题（#1196）
- **依赖维护**：及时跟进安全补丁

---

## 4. 社区热点

今日讨论最活跃的 Issues：

| Issue | 讨论量 | 类型 | 主题 |
|---|---|---|---|
| [#1161](https://github.com/sipeed/picoclaw/issues/1161) | 8条 | bug | **Ollama 本地模型配置问题**（agent 启动但不返回响应） |
| [#267](https://github.com/sipeed/picoclaw/issues/267) | 4条 | enhancement | 为 OpenAI/Gemini 添加 CLI 登录支持 |
| [#1103](https://github.com/sipeed/picoclaw/issues/1103) | 3条 | bug | ModelScope API 调用失败（unknown protocol） |

**热点分析**：
- **#1161** 热度最高，用户反馈配置本地 Ollama 模型时 agent 启动但无响应，涉及 **provider 配置复杂性问题**，可能是本地模型调用链路存在兼容问题
- **#267** 反映用户对简化认证流程的需求，已有 PR [#305](https://github.com/sipeed/picoclaw/pull/305) 在推进中
- **#1103** 涉及 ModelScope 中文镜像服务配置，是 provider 多样化过程中的典型兼容问题

---

## 5. Bug 与稳定性

按严重程度排列的 Bug 报告：

| Issue | 严重度 | 描述 | Fix PR |
|---|---|---|---|
| [#1161](https://github.com/sipeed/picoclaw/issues/1161) | **高** | Ollama 本地模型配置后无响应 | - |
| [#1102](https://github.com/sipeed/picoclaw/issues/1102) | **高** | deepseek 模型 max_tokens 范围错误（1-8192） | - |
| [#1176](https://github.com/sipeed/picoclaw/issues/1176) | **中** | Docker 环境下技能未加载 | - |
| [#1193](https://github.com/sipeed/picoclaw/issues/1193) | **中** | ExecTool 误拦截 HTTP URL 为绝对路径 | [#1178](https://github.com/sipeed/picoclaw/pull/1178) |
| [#1177](https://github.com/sipeed/picoclaw/issues/1177) | **低** | 模态框背幕点击异常关闭 | - |

**稳定性风险**：Provider 相关问题（Ollama、DeepSeek、ModelScope）集中爆发，涉及多模型适配与 API 兼容性，建议优先处理。

---

## 6. 功能请求与路线图信号

**高价值功能请求**（结合已有 PR 判断可能被纳入）：

| Issue | 功能 | 相关 PR | 纳入可能性 |
|---|---|---|---|
| [#1098](https://github.com/sipeed/picoclaw/issues/1098) | Telegram 实时流式响应 | [#1101](https://github.com/sipeed/picoclaw/pull/1101) | ⭐⭐⭐ 高 |
| [#284](https://github.com/sipeed/picoclaw/issues/284) | Swarm Mode 多实例协作 | - | ⭐⭐ 中 |
| [#547](https://github.com/sipeed/picoclaw/issues/547) | 改进 AGENT.md 任务解决模式 | - | ⭐⭐ 中 |
| [#1169](https://github.com/sipeed/picoclaw/issues/1169) | JSONL 会话持久化集成 | #732（历史） | ⭐⭐ 中 |
| [#1138](https://github.com/sipeed/picoclaw/pull/1138) | IRC 频道集成 | #1138 | ⭐⭐⭐ 高 |
| [#1198](https://github.com/sipeed/picoclaw/pull/1198) | pico_client 出站 WebSocket 通道 | #1198 | ⭐⭐⭐ 高 |

**路线图信号**：
- **Channel 扩展**是近期重点（Telegram 流式响应、IRC、pico_client）
- **Provider 优化**持续进行（CLI 登录、多模型兼容）
- **Agent 能力增强**（会话持久化、任务模式文档）

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的关键痛点与场景：

| 场景 | 痛点 | 典型 Issue |
|---|---|---|
| **本地模型部署** | Ollama 配置复杂，agent 启动但不返回结果 | #1161 |
| **多渠道消息** | Discord 回复消息缺乏上下文、Telegram 需实时流式响应 | #1048, #1098 |
| **工具安全** | exec 工具误拦截 URL 为路径，导致命令失败 | #1193 |
| **自定义模型** | 模型名称格式不识别（如 @cf/qwen/...） | #1165 |
| **Cron 任务** | 定期任务被误转为一次性任务 | #1126（已修复） |

**满意度方面**：用户对 cron 任务修复（#1126）、二进制文件读取安全（#1107）、依赖更新响应速度表示认可。

---

## 8. 待处理积压

**长期未响应的重要 Issue**（超过48小时无进展）：

| Issue | 描述 | 状态 | 提醒 |
|---|---|---|---|
| [#284](https://github.com/sipeed/picoclaw/issues/284) | Swarm Mode 多实例协作路线图 | Open | 社区关注度高，建议明确里程碑 |
| [#547](https://github.com/sipeed/picoclaw/issues/547) | AGENT.md 改进 | Open | 用户文档改进需求明确 |
| [#1169](https://github.com/sipeed/picoclaw/issues/1169) | JSONL 持久化集成 | Open | 技术方案较清晰，建议评审 |
| [#1148](https://github.com/sipeed/picoclaw/issues/1148) | 本地用例测试回归 | Open | 缺少复现步骤，需进一步跟进 |

**积压原因分析**：
- 功能类 Issue（Swarm Mode、JSONL）涉及架构调整，需较大开发量
- 部分 Issue 信息不足（如 #1148 无复现步骤）

---

**报告生成时间**：2026-03-07  
**数据来源**：GitHub PicoClaw 项目 (sipeed/picoclaw)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-07)

## 1. 今日速览

NanoClaw 社区今日保持高度活跃，24小时内产生 **64 条更新**（14 Issues + 50 PRs）。PR 合并/关闭率为 26%（13/50），显示出健康的代码审查节奏。值得注意的是，今日社区集中解决了多个长期存在的稳定性问题（DB 查询无 LIMIT、容器权限、OAuth token 过期），同时 Observability 系列功能（Status API、监控面板、告警通知）已全部闭环，反映出项目正在从功能扩张转向工程完善阶段。

---

## 2. 版本发布

**本期无新版本发布**

---

## 3. 项目进展

以下 PR 已于今日合并/关闭，标志着项目在多个维度取得实质进展：

| PR | 标题 | 类型 | 状态 |
|---|---|---|---|
| [#772](https://github.com/qwibitai/nanoclaw/pull/772) | feat(skills): add pdf-reader skill | Skill | ✅ Closed |
| [#708](https://github.com/qwibitai/nanoclaw/pull/708) | fix: add update_task tool for in-place task modification | Fix | ✅ Closed |
| [#770](https://github.com/qwibitai/nanoclaw/pull/770) | feat(skills): add image vision skill for WhatsApp | Skill | ✅ Closed |
| [#745](https://github.com/qwibitai/nanoclaw/pull/745) | fix(whatsapp): write pairing code to file for immediate access | Fix | ✅ Closed |
| [#735](https://github.com/qwibitai/nanoclaw/pull/735) | fix(db): add LIMIT to unbounded message history queries | Fix | ✅ Closed |
| [#691](https://github.com/qwibitai/nanoclaw/pull/691) | feat: timezone-aware context injection for agent prompts | Feature | ✅ Closed |
| [#780](https://github.com/qwibitai/nanoclaw/pull/780) | Add claude GitHub actions | - | ✅ Closed |
| [#549](https://github.com/qwibitai/nanoclaw/pull/549) | feat: add /use-avian skill for Avian LLM provider | Skill | ✅ Closed |
| [#503](https://github.com/qwibitai/nanoclaw/pull/503) | fix: support ANTHROPIC_BASE_URL in containers | Fix | ✅ Closed |

**重点进展解读：**

- **DB 稳定性修复** (#735)：为 `getNewMessages()` 和 `getMessagesSince()` 添加 LIMIT 200，防止无界查询导致 OOM 崩溃和 API 费用超支
- **任务系统完善** (#708)：新增 `update_task` 工具，支持原地修改任务，告别 cancel + recreate 模式
- **WhatsApp 能力扩展**：配对码即时写入文件 (#745)、PDF 读取 (#772)、图片理解 (#770) 三个技能连续合体
- **Observability 套件完成**：Status API (#773) + 结构化指标 (#774) + 告警通知 (#775) + 监控面板 (#776) 全部关闭，监控体系初步建成

---

## 4. 社区热点

以下 Issues 和 PRs 获得较高关注或代表重要技术方向：

### 🔥 热点 Issues

| Issue | 标题 | 类型 | 热度 |
|---|---|---|---|
| [#709](https://github.com/qwibitai/nanoclaw/issues/709) | Risk of secret env var management behavior diverging | Bug (High) | 1 💬 |
| [#777](https://github.com/qwibitai/nanoclaw/issues/777) | container EACCES/ENOENT when host runs as root | Bug (High) | 1 💬 |
| [#783](https://github.com/qwibitai/nanoclaw/issues/783) | schedule_task has no idempotency key | Bug (Medium) | 新增 |

**热点解读：**
- **#709 容器/Bash 环境变量分歧**：涉及安全深层防御机制，用户关注度高，已有 Fix PR [#781](https://github.com/qwibitai/nanoclaw/pull/781) 待合并
- **#777 root 权限容器权限问题**：生产环境常见问题，容器内 node 用户 (uid 1000) 与主机 root (uid 0) 权限不匹配导致静默失败

### 🔥 热点 PRs

| PR | 标题 | 状态 |
|---|---|---|
| [#785](https://github.com/qwibitai/nanoclaw/pull/785) | fix(auth): read OAuth token from ~/.claude/.credentials.json | 🔴 Blocked |
| [#786](https://github.com/qwibitai/nanoclaw/pull/786) | add import-clawhub skill for runtime skill integration | 🟡 Needs Review |
| [#762](https://github.com/qwibitai/nanoclaw/pull/762) | feat: add /add-llamacpp-tool skill for local model inference | 🟡 Needs Review |
| [#781](https://github.com/qwibitai/nanoclaw/pull/781) | fix(container): scrub every injected secret from Bash env | 🟡 Needs Review |
| [#706](https://github.com/qwibitai/nanoclaw/pull/706) | feat(skills): add icloud-tools skill | 🟡 Needs Review |

**关键 PR 分析：**
- **#785 修复每日 401 认证错误**：从 .env 读取的 OAuth token 几小时过期是用户痛点，PR 尝试从 `~/.claude/.credentials.json` 动态读取，但目前被 Blocked，需关注
- **#786 ClawHub 技能导入**：运行时集成社区技能，零核心代码修改，符合模块化趋势
- **#762 本地模型推理**：新增 llama.cpp 支持，对比已有 Ollama 技能，完善本地 AI 能力矩阵

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

| Issue | 标题 | 严重程度 | 已有 Fix PR |
|---|---|---|---|
| [#709](https://github.com/qwibitai/nanoclaw/issues/709) | 容器 allowlist 与 Bash subprocess blocklist 环境变量管理行为分歧 | 🔴 High | [#781](https://github.com/qwibitai/nanoclaw/pull/781) |
| [#777](https://github.com/qwibitai/nanoclaw/issues/777) | 主机 root 运行时容器 EACCES/ENOENT 权限问题 | 🔴 High | - |
| [#783](https://github.com/qwibitai/nanoclaw/issues/783) | schedule_task 缺少幂等键，任务跨会话累积 | 🟡 Medium | - |
| [#782](https://github.com/qwibitai/nanoclaw/issues/782) | 如何不依赖 Claude Code 运行项目 | 🟢 Low (Question) | - |

**关键 Bug 解读：**
- **#777 root 权限问题**是生产部署常见障碍，建议优先处理
- **#783 任务幂等性**是调度系统设计缺陷，可能导致后台任务泛滥

---

## 6. 功能请求与路线图信号

### 今日新增功能请求

| Issue | 标题 | 类型 | 优先级 |
|---|---|---|---|
| [#779](https://github.com/qwibitai/nanoclaw/issues/779) | Feature Request: Capability-Based Skill Security Model | Enhancement | Medium |
| [#783](https://github.com/qwibitai/nanoclaw/issues/783) | schedule_task 幂等性机制 | Bug | Medium |
| [#782](https://github.com/qwibitai/nanoclaw/issues/782) | 如何不依赖 Claude Code 运行 | Question | Low |

### 路线图信号分析

**能力安全模型 (#779)**：提出基于 manifest 的技能权限声明（网络/文件系统/环境变量），这与当前 Observability 套件完成后的下一阶段方向吻合——从"可观测"走向"可管控"。预计将成为下一版本的重点方向。

**LLM Provider 多元化**：Avian (#549)、Llama.cpp (#762) 等 PR 持续涌入，表明用户对非 Anthropic 模型的需求强烈，社区正在构建多模型支持矩阵。

---

## 7. 用户反馈摘要

从 Issues 评论和讨论中提炼的用户声音：

**✅ 用户满意点：**
- WhatsApp 能力持续完善（PDF、图片、配对码改进）
- 任务系统逐步补齐（update_task 工具上线）
- 监控体系从无到有

**⚠️ 用户痛点：**
1. **OAuth token 每日过期** (#785)：影响所有每日运行的用户，是阻塞性问题
2. **root 权限容器崩溃** (#777)：VPS/systemd 用户高频遇到
3. **非 Claude Code 用户无法使用** (#782)：项目依赖绑定过重
4. **schedule_task 重复累积** (#783)：夜间任务场景下问题突出

---

## 8. 待处理积压

以下 Issue/PR 超过 48 小时未获回应，需维护者关注：

| 类别 | Issue/PR | 标题 | 等待时间 |
|---|---|---|---|
| Issue | [#783](https://github.com/qwibitai/nanoclaw/issues/783) | schedule_task 幂等性 | 新增 |
| Issue | [#777](https://github.com/qwibitai/nanoclaw/issues/777) | root 权限容器权限 | 1 天 |
| Issue | [#779](https://github.com/qwibitai/nanoclaw/issues/779) | 能力安全模型 | 新增 |
| PR | [#785](https://github.com/qwibitai/nanoclaw/pull/785) | OAuth token 动态读取 | 🔴 Blocked |
| PR | [#778](https://github.com/qwibitai/nanoclaw/pull/778) | fix(container): set UTF-8 locale | 待合并 |

---

*日报生成时间: 2026-03-07 | 数据来源: GitHub NanoClaw Repository*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 - 2026-03-07

## 今日速览

IronClaw 项目在过去的 24 小时内保持高度活跃状态：共处理 32 条 Issues（16 新开/活跃，16 已关闭）和 50 条 PRs（28 待合并，22 已合并/关闭）。项目于 2026-03-06 连续发布 v0.16.0 和 v0.16.1 两个版本，解决了关键的 WASM 校验和问题。当前代码库正聚焦于统一线程模型、图像处理支持、LLM-as-Judge 安全评估等大型架构改进，社区参与度较高，整体健康度良好。

---

## 版本发布

### v0.16.1（2026-03-06）

**修复更新**

- 恢复了 WASM artifact SHA256 checksums 为 null（[#627](https://github.com/nearai/ironclaw/pull/627)）

**安装方式**
```sh
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/nearai/ironclaw/releases/download/v0.16.1/ironclaw-installer.sh | sh
```

### v0.16.0（2026-03-06）

**主要更新**

- **e2e 测试增强**：扩展标签测试、CI 并行化、3 个生产环境 Bug 修复（[#584](https://github.com/nearai/ironclaw/pull/584)）
- **WASM Extension 版本化**：支持 WIT 兼容检查（[#592](https://github.com/nearai/ironclaw/pull/592)）
- **HMAC-SHA256 Webhook 签名验证**：新增 Slack 签名验证支持（相关 Issue #492）

---

## 项目进展

### 已合并/关闭的重要 PRs

| PR # | 标题 | 贡献者 | 影响范围 |
|------|------|--------|----------|
| [#633](https://github.com/nearai/ironclaw/pull/633) | Release v0.17.0 | github-actions[bot] | 版本发布（⚠ 破坏性变更） |
| [#590](https://github.com/nearai/ironclaw/pull/590) | fix: Telegram channel group messages when owner_id is null | nickpismenkov | 安全性修复 |
| [#624](https://github.com/nearai/ironclaw/pull/624) | fix(wasm): per-engine cache dirs on Windows | zmanian | Windows 兼容性 |
| [#534](https://github.com/nearai/ironclaw/pull/534) | fix(libsql): flexible embedding dimensions | zmanian | 数据库兼容性 |
| [#629](https://github.com/nearai/ironclaw/pull/629) | feat: Wire memory hygiene into heartbeat | nickpismenkov | 内存管理 |
| [#636](https://github.com/nearai/ironclaw/pull/636) | feat(gateway): show version in status popover | ilblackdragon | UI 改进 |

### 待合并的重点 PRs

| PR # | 标题 | 风险级别 | 预计影响 |
|------|------|----------|----------|
| [#641](https://github.com/nearai/ironclaw/pull/641) | feat: Support processing images | Medium | 核心功能扩展 |
| [#614](https://github.com/nearai/ironclaw/pull/614) | LLM-as-Judge semantic evaluation | High | 安全架构 |
| [#607](https://github.com/nearai/ironclaw/pull/607) | feat: unified thread model for web gateway | Medium | 统一通信模型 |
| [#618](https://github.com/nearai/ironclaw/pull/618) | feat(llm): declarative provider registry | High | LLM 集成架构 |
| [#577](https://github.com/nearai/ironclaw/pull/577) | feat(routines): approval context | Medium | 自主执行权限 |
| [#581](https://github.com/nearai/ironclaw/pull/581) | docs: Mintlify documentation | Low | 文档建设 |

---

## 社区热点

### 热门 Issues（按讨论热度）

**1. Issue #439 - Registry update workflow fails** 🔥
- 链接：https://github.com/nearai/ironclaw/issues/439
- 状态：OPEN
- 摘要：Registry 更新工作流因 GitHub 分支保护规则失败
- 标签：1 👍 | 1 💬

**2. Issue #602 - No Telegram in default install** 🔥
- 链接：https://github.com/nearai/ironclaw/issues/602
- 状态：OPEN
- 摘要：本地安装时没有 Telegram 选项，只能通过源码构建使用
- 标签：1 👍 | 1 💬

**3. Issue #615 - Configurable Request Timeouts for Local LLM**
- 链接：https://github.com/nearai/ironclaw/issues/615
- 状态：OPEN
- 摘要：当前硬编码 15s 超时不适用于本地 LLM（Ollama/LM Studio/vLLM）
- 标签：1 👍

**4. Issue #410 - Cropped UI - Tablet** ✅ CLOSED
- 链接：https://github.com/nearai/ironclaw/issues/410
- 摘要：平板 UI 显示被裁剪问题
- 评论：2 条

---

## Bug 与稳定性

### 高优先级 Bug（待修复）

| Issue # | 问题描述 | 严重程度 | 状态 |
|---------|----------|----------|------|
| [#439](https://github.com/nearai/ironclaw/issues/439) | Registry workflow 失败阻止 WASM 通道安装 | 高 | OPEN |
| [#602](https://github.com/nearai/ironclaw/issues/602) | Telegram 无法默认安装 | 高 | OPEN |
| [#599](https://github.com/nearai/ironclaw/issues/599) | 启动时不显示 UI URL 和 token | 中 | OPEN |

### 已修复/关闭的问题

- **#410** Cropped UI - Tablet（已关闭）
- **#448** Telegram bot error（已关闭）
- **#494** Embedding dimension error（已关闭 - PR #534）
- **#443** Telegram group messages security（已关闭 - PR #590）
- **#504** Google Calendar integration bugs（已关闭）

---

## 功能请求与路线图信号

### 明确的功能增强请求

| Issue # | 功能 | 状态 | 关联 PR |
|---------|------|------|---------|
| [#549](https://github.com/nearai/ironclaw/issues/549) | 支持图像处理 | OPEN | [#641](https://github.com/nearai/ironclaw/pull/641) 已在开发 |
| [#639](https://github.com/nearai/ironclaw/issues/639) | MCP 自定义认证头 | OPEN | 暂无 |
| [#615](https://github.com/nearai/ironclaw/issues/615) | 可配置 LLM 请求超时 | OPEN | 暂无 |
| [#601](https://github.com/nearai/ironclaw/issues/601) | Dashboard 功能 | OPEN | 暂无 |

### 架构改进信号（路线图相关）

1. **统一线程模型** - Issue #607 正在进行，预计下版本完成
2. **LLM-as-Judge 安全评估** - Issue #614 引入语义评估层
3. **声明式 LLM Provider** - Issue #618 简化新提供商集成
4. **Memory Hygiene** - Issue #629 已合并， heartbeat 循环已集成

---

## 用户反馈摘要

### 痛点分析

1. **安装体验问题**
   - 用户反映 Telegram 在默认安装中不可用（#602, #599）
   - 启动时缺少 UI URL 显示，影响首次使用

2. **本地部署兼容性**
   - 硬编码超时不适合本地 LLM（#615）
   - Google Calendar WASM 工具集成存在 bug（#504，已关闭）

3. **安全/权限**
   - Telegram 群组消息权限控制问题（#443，已通过 #590 修复）

### 正面反馈

- E2E 测试覆盖增强（多个相关 Issue 已关闭）
- libSQL 灵活性改进（#534）
- 文档网站计划推进（#581）

---

## 待处理积压

### 长期未响应的 Issues

| Issue # | 描述 | 创建时间 | 状态 |
|---------|------|----------|------|
| [#549](https://github.com/nearai/ironclaw/issues/549) | 图像处理支持 | 2026-03-04 | OPEN |
| [#611](https://github.com/nearai/ironclaw/issues/611) | Claw Agent 绕过保护 | 2026-03-06 | OPEN |

### 建议关注

1. **Issue #439** - 阻塞 WASM 生态，建议优先处理
2. **Issue #602** - 影响新用户安装体验
3. **多个测试覆盖 Issue** (575, 574, 573, 572, 571) - 已关闭，项目测试基建显著改善

---

*报告生成时间：2026-03-07 | 数据来源：GitHub IronClaw Repository*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-07)

## 1. 今日速览

过去24小时，TinyClaw 项目保持较高开发活跃度，共产生 **1 个 Issue 关闭** 和 **4 条 PR 更新**（其中 1 个已合并）。值得注意的是，项目正在向多代理协同时代迈进——最新 PR #163 引入了多代理团队并行处理与通信能力，这是项目从"轮流执行"向"团队协作"转型的关键里程碑。当前待合并 PR 3 个，整体向前推进势头良好。

---

## 2. 版本发布

**无新版本发布**

过去24小时未产生新版本发布。

---

## 3. 项目进展

### ✅ 已合并/关闭 PR

**#161** - [fixes ISSUE 160 - prevents tag mismatch with package version](https://github.com/TinyAGI/tinyclaw/pull/161)  
- **状态**: 已关闭（合并）  
- **作者**: @michaelerobertsjr  
- **内容**: 在 GitHub Release Action 中加入版本校验机制，确保 package.json 版本与 Git Tag 严格同步，防止再次出现 "Update Available" 错误提示问题  
- **影响**: 修复了持续存在的版本号不同步问题，提升了发布流程的可靠性

---

### 🚧 待合并 PR (3个)

| PR | 标题 | 状态 | 作者 | 进展 |
|----|------|------|------|------|
| #152 | feat: per-thread session isolation for Claude and Codex agents | OPEN | @jlia0 | 新增 `thread_sessions` 表，实现每个代理+线程的独立会话隔离 |
| #154 | fix: resolve issue #19 security gaps and logging discrepancies | OPEN | @stakeswky | 移除日志中的明文消息内容、默认启用 Chromium 沙箱 |
| #163 | Multi-agent teams: parallel processing, agent-to-agent communication | OPEN | @dpbmaverick98 | 28 commits，35 files，实现多代理并行、代理间通信与任务链式传递 |

---

## 4. 社区热点

**#160** - [Current tag does not match the version in package.json](https://github.com/TinyAGI/tinyclaw/issues/160)  
- **状态**: 已关闭  
- **作者**: @michaelerobertsjr  
- **评论**: 2 条 | **点赞**: 1  
- **背景**: 项目出现 HEAD 指向 `v0.0.9` tag，但 package.json 中仍显示 `v0.0.8`，导致用户收到错误的 "Update Available" 提示  
- **热度分析**: 该问题直接影响用户体验和维护者信任感，引发维护者亲自修复并推动 #161 添加自动化校验，属于**高优先度修复**

---

## 5. Bug 与稳定性

### 🔴 已修复 (有 Fix PR)

| Issue | 描述 | 严重程度 | Fix PR | 状态 |
|-------|------|----------|--------|------|
| #160 | Tag 与 package.json 版本不匹配，导致错误更新提示 | **中** | #161 | ✅ 已合并 |

**根因分析**: Release GitHub Action 缺少版本一致性校验流程，手动打标签时容易遗漏 package.json 同步更新。

---

## 6. 功能请求与路线图信号

### 📌 正在开发的核心功能 (据现有 PR 判断)

| 功能 | PR | 预计版本 | 可能性 |
|------|-----|----------|--------|
| **多代理团队协作** (并行处理、通信、任务链) | #163 | v0.1.0+ | ⭐⭐⭐⭐⭐ 高度确定 |
| **Per-Thread 会话隔离** (Claude/Codex) | #152 | v0.1.0 | ⭐⭐⭐⭐ 较高 |
| **安全加固** (日志脱敏、沙箱策略) | #154 | v0.0.10 | ⭐⭐⭐⭐ 较高 |

**路线图信号**: 项目正在从"单一代理工具"向"多代理协作平台"演进，v0.1.0 预计将带来架构性升级。

---

## 7. 用户反馈摘要

从 Issue #160 评论中提炼：

- **痛点**: 用户收到错误的 "Update Available" 提示，实际并无新版本可用，感知上产生困惑
- **使用场景**: 持续集成/部署环境依赖准确的版本号进行判断
- **满意方向**: 问题报告后维护者快速响应并在 1 天内推出 Fix PR #161

---

## 8. 待处理积压

**当前无长期积压 Issue/PR**。所有活跃 PR 均在 3 月 1 日-6 日期间创建并保持更新，社区响应及时。

---

> 📊 **健康度评估**: ⭐⭐⭐⭐ (4/5)  
> 项目处于活跃迭代期，功能演进与稳定性修复并行，PR 吞吐量适中，社区反馈机制运转正常。需关注 v0.1.0 多代理功能的测试覆盖率。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*