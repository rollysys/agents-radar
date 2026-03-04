# OpenClaw 生态日报 2026-03-04

> Issues: 165 | PRs: 500 | 覆盖项目: 10 个 | 生成时间: 2026-03-04 07:07 UTC

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

# OpenClaw 项目动态日报（2026-03-04）

## 1. 今日速览

过去 24 小时内，OpenClaw 项目保持极高的社区活跃度：共产生 **165 条 Issues 更新**（新开/活跃 80 条，关闭 85 条），**500 条 PR 更新**（待合并 407 条，已合并/关闭 93 条），但未发布新版本。整体来看，项目处于功能迭代高峰期，多个回归问题（尤其是 v2026.3.x 版本引入的）引发社区广泛讨论，同时多项重要功能（如 protobuf 迁移、token budget 路由、LLM 拦截钩子）正在积极推进中。

---

## 2. 版本发布

**本期无新版本发布**。近期版本 v2026.3.1、v2026.3.2、v2026.3.3 被社区反馈存在多个回归问题，建议用户关注官方后续补丁版本。

---

## 3. 项目进展

今日共有 **93 条 PR 已合并/关闭**，以下是推进重要功能的 PR 摘要：

| PR | 作者 | 功能/修复概述 | 链接 |
|---|---|---|---|
| **#33867** (CLOSED) | @xialonglee | 修复 TUI 会话键大小写问题，解决实时消息显示异常 | [查看](https://github.com/openclaw/openclaw/pull/33867) |
| **#34090** | @Sylchi | 添加 no-break protobuf 迁移基础架构，为多语言 connector 生成铺路 | [查看](https://github.com/openclaw/openclaw/pull/34090) |
| **#33916** | @zeroaltitude | 新增 `before_llm_call`、`after_llm_call`、`before_response_emit` 三个 LLM 拦截钩子 | [查看](https://github.com/openclaw/openclaw/pull/33916) |
| **#34071** | @jskoiz | 实现 token budget 路由功能，支持每日免费额度模型自动切换 | [查看](https://github.com/openclaw/openclaw/pull/34071) |
| **#33850** | @JonathanJing | 模型未知时建议相似名称，改善错误提示体验 | [查看](https://github.com/openclaw/openclaw/pull/33850) |
| **#34088** | @maweibin | 修复沙箱模式下 mkdirp 在 mount root 的边界检查问题 | [查看](https://github.com/openclaw/openclaw/pull/34088) |
| **#29613** | @KurohaneKaoruko | 新增原生 QQ (NapCat/OneBot11) 频道插件支持 | [查看](https://github.com/openclaw/openclaw/pull/29613) |
| **#33986** | @xiwan | 修复 cron 心跳间隔未正确遵守的问题 | [查看](https://github.com/openclaw/openclaw/pull/33986) |

**整体评估**：项目在协议层迁移（protobuf）、开发者体验（模型错误提示、hook 机制）、多平台支持（QQ 频道）方面均有显著推进。

---

## 4. 社区热点

以下 Issues/PRs 评论最多，反映社区高度关注：

| 类型 | Issue/PR # | 标题 | 评论数 | 热度分析 |
|---|---|---|---|---|
| **Issue** | **#28877** | [Bug] macOS app v2026.2.26 is arm64-only — regression vs v2026.2.25 (universal binary) | **17** | Intel Mac 用户无法使用，最新版本丢失通用二进制支持，引发强烈反弹 |
| **Issue** | **#32245** | [Bug] Vertex embedded runs fail with "Cannot convert undefined or null to object" on v2026.3.1 | **15** | Vertex 嵌入运行在 Telegram + cron 场景下全面失败，影响生产环境 |
| **Issue** | **#28835** | [Bug] Telegram API requests fail with Network request failed after upgrade from v2026.2.23 to v2026.2.26 | **12** | 升级后 Telegram 集成不可靠，Node HTTPS 超时但 curl 成功，网络层问题引发关注 |
| **PR** | **#33506** | feat(mattermost): block streaming edit-in-place (rebased) | 讨论中 | Mattermost 频道流式编辑功能重构，多人协作场景关键 |
| **PR** | **#33834** | Add Search Selection to Onboarding + Add Parallel Provider | 讨论中 | 入流程序列化搜索选择器，用户体验重要改进 |

**热点背后诉求**：macOS 通用二进制回归、Vertex/Telegram/Google Chat 多个集成回归问题是今日焦点，社区期望快速修复而非功能迭代。

---

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

### 🔴 严重（崩溃/数据丢失/生产阻塞）

| Issue # | 问题描述 | 版本 | 评论 | 已有 Fix PR? |
|---|---|---|---|---|
| **#28877** | macOS app v2026.2.26 仅支持 arm64，Intel Mac 崩溃 | v2026.2.26 | 17 | ❌ |
| **#32245** | Vertex 嵌入运行失败 "Cannot convert undefined or null to object" | v2026.3.1 | 15 | ❌ |
| **#28835** | Telegram API 请求失败 (Node HTTPS timeout) | v2026.2.26 | 12 | ❌ |
| **#33256** | Google Chat 在 v2026.3.3 损坏 | v2026.3.3 | 4 | ❌ |
| **#9023** | Token 燃烧问题：失败时发送 43k token 历史 | - | 7 | ❌ |

### 🟠 高（功能损坏/回归）

| Issue # | 问题描述 | 版本 | 评论 | 已有 Fix PR? |
|---|---|---|---|---|
| **#33468** | Google Chat 启动失败 "Cannot convert undefined or null to object" | v2026.3.2 | 5 | ❌ |
| **#28376** | macOS menubar app 非通用二进制 | v2026.2.26 | 5 | ❌ |
| **#32937** | WebUI 404 但 telnet 正常 | v2026.3.2 | 3 | ❌ |
| **#31689** | vllm + qwen3-coder-next 连接错误 | - | 3 | ❌ |
| **#33878** | Browser tool 在 ARM64 Ubuntu 超时 | v2026.3.2 | 2 | ❌ |
| **#33892** | llm-task plugin 找不到 pi-embedded-runner.js | v2026.3.2 | 2 | ❌ |

### 🟡 中（行为异常/体验问题）

| Issue # | 问题描述 | 评论 | 已有 Fix PR? |
|---|---|---|---|
| **#33453** | Telegram 部分流式处理导致重复消息 | 6 | ❌ |
| **#33883** | Feishu blockStreaming 导致移动端 30+ 重复消息 | 3 | ❌ |
| **#33940** | 手动执行 Cron 任务会改变执行时间 | 2 | ❌ |
| **#33864** | 提供商错误时用户消息被静默删除 | 2 | ❌ |

**稳定性评估**：今日共报告 **50+ Bug**，其中多个为 **v2026.3.x 回归问题**，主要集中在 macOS 平台兼容性、Google/Vertex 云服务集成、Telegram/Feishu 频道，建议优先修复。

---

## 6. 功能请求与路线图信号

社区提出的功能需求及实现可能性：

| Issue # | 功能请求 | 标签 | 评论 | 纳入版本可能性 |
|---|---|---|---|---|
| **#33803** | heartbeat 添加 jitter/startDelay 防止多 Agent 同时触发 | enhancement | 3 | ⭐⭐⭐ 高（已有 PR 讨论） |
| **#33944** | 侧边栏模型选择器添加模型白名单 | enhancement | 2 | ⭐⭐ 中 |
| **#21852** | Telegram 思考/详细消息添加静默通知 | feature | 2 | ⭐⭐ 中 |
| **#13562** | Ollama 作为 memorySearch 提供商 | enhancement | 3 | ⭐⭐ 中 |
| **#33986** (PR) | cron 尊重心跳间隔（已修复） | fix | - | ⭐⭐⭐ 已合并 |
| **#34071** (PR) | token budget 路由（每日免费额度） | feature | - | ⭐⭐⭐ 高（已有 PR） |

**路线图信号**：短期重点将放在 **回归问题修复**（尤其是 v2026.3.x），中期功能演进集中在 **多平台集成增强**（QQ 频道、protobuf 迁移）和 **成本控制**（token budget 路由）。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点：

### 用户满意之处
- **v2026.2.25 通用二进制**：用户明确表示怀念 v2026.2.25 的 universal binary 支持，期望恢复该特性（Issue #28877）
- **LLM 拦截钩子**：开发者对 `before_llm_call` 等钩子的灵活性表示欢迎（PR #33916）
- **TUI 修复**：会话键大小写修复后，用户反馈实时消息体验显著改善（PR #33867）

### 用户不满之处
- **升级导致的功能丢失**：多次升级后 Telegram、Google Chat、Vertex 等核心功能失效，用户感到 "每次小版本升级都在赌博"
- **静默失败**：多个问题（如 #33864 #33906）表现为静默失败，用户不知道发生了什么
- **文档缺失**：部分功能（如 #13562 Ollama memorySearch）配置方式不清晰

### 典型使用场景
- 多 Agent 心跳同步问题：7 个 Agent 同时触发心跳导致请求队列堆积（Issue #33803）
- VPN 环境下节点配对：ZeroTier VPN 场景下节点无法批准（Issue #22655）
- Discord 多会话阻塞：一个会话活跃时其他会话消息被丢弃（Issue #30006）

---

## 8. 待处理积压

以下 Issue 长期未响应或缺乏明确进展，建议维护者关注：

| Issue # | 问题 | 创建时间 | 状态 | 积压原因 |
|---|---|---|---|---|
| **#29122** | Workspace skills 静默跳过加载（无错误日志） | 2026-02-27 | OPEN | 4 周未修复 |
| **#17685** | /v1/chat/completions 忽略 image_url（无视觉支持） | 2026-02-16 | OPEN | 2+ 周无进展 |
| **#22188** | Slack reaction_added 事件在 Socket Mode 静默丢弃 | 2026-02-20 | OPEN | 2+ 周 |
| **#24235** | LLM 超时设置过于保守 | 2026-02-23 | OPEN | 1+ 月，stale |
| **#25059** | deriveIdHint 使用 npm 包名导致 ID 不匹配警告 | 2026-02-24 | OPEN | stale |
| **#28786** | ACP 会话因 PTY 问题失败 | 2026-02-27 | CLOSED | 近期关闭 |
| **#29613** (PR) | QQ 频道插件 | 2026-02-28 | OPEN | 大型功能，需审核 |

**积压评估**：部分 stale issues 建议关闭或重新分配资源，Workspace skills 加载和视觉支持是用户长期诉求。

---

*报告生成时间：2026-03-04 | 数据来源：OpenClaw GitHub Repository*

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**报告日期：2026-03-04**

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现**“一超多强、梯度分明”**的格局。核心项目 OpenClaw 以 500+ PR/Issue 事件量级主导生态演进，同时衍生出 ZeptoClaw（轻量安全）、PicoClaw（边缘计算）、NanoClaw（微小化）、TinyClaw（极致轻量）等多个差异化分支。整体生态处于**功能爆发期**，多项目同步推进 MCP 协议、多代理协作、渠道集成等关键技术方向，但多数项目仍面临**回归问题积压**与**社区响应效率**的挑战。

---

## 2. 各项目活跃度对比

| 项目 | Issues 事件 | PR 事件 | 待合并 PR | Release 状态 | 活跃度评级 |
|------|-------------|---------|-----------|--------------|------------|
| **OpenClaw** | 165 (80新开/活跃, 85关闭) | 500 (407待合并, 93已合/关) | 407 | 无新版本 | 🟢 极高 |
| **Zeroclaw** | 16 | 50 (22已合/关, 28待合并) | 28 | v0.1.8-alpha.1 | 🟢 高 |
| **EasyClaw** | 1 (历史问题关闭) | 0 | 0 | v1.5.16 | 🟡 低 |
| **LobsterAI** | 32 (16新开/活跃, 16关闭) | 11 (9已合/关, 2待合并) | 2 | 无 | 🟡 中 |
| **ZeptoClaw** | 8 (关闭) | 17 (14已合/关, 3待合并) | 3 | 无 | 🟢 高 |
| **NanoBot** | 26 | 52 (12已合/关, 40待合并) | 40 | 无 | 🟢 极高 |
| **PicoClaw** | 23 | 94 (37已合/关, 57待合并) | 57 | 无 | 🟢 极高 |
| **NanoClaw** | 6 (4新开, 2关闭) | 25 (7已合/关, 18待合并) | 18 | 无 | 🟢 高 |
| **IronClaw** | 5 (Bug已关闭) | 50 (21已合/关) | - | v0.14.0, v0.14.1准备中 | 🟢 高 |
| **TinyClaw** | 3 | 2 (待合并) | 2 | v0.0.8, v0.0.9 | 🟡 中 |

**数据解读**：PicoClaw (94条PR)、OpenClaw (500条PR)、NanoBot (52条PR) 构成第一梯队，呈现高速功能迭代特征；Zeroclaw、IronClaw、ZeptoClaw 处于稳健开发期；EasyClaw、TinyClaw 偏向稳定维护。

---

## 3. OpenClaw 在生态中的定位

### 优势对比

| 维度 | OpenClaw | 生态均值 | 评价 |
|------|----------|---------|------|
| **社区规模** | 165 Issues / 500 PRs | ~30 Issues / ~30 PRs | **绝对领先**，规模为平均水平的 5-10 倍 |
| **功能完备性** | protobuf迁移、token budget路由、LLM拦截钩子、多平台集成 | 单一功能迭代 | **生态基准**，其他项目多在特定方向做减法 |
| **版本质量** | v2026.3.x 存在多个回归问题 | 大多处于功能开发期 | **双刃剑**：功能激进带来稳定性风险 |
| **响应速度** | 日均 93 PR 合并/关闭 | 个位数/天 | **开发效率突出** |

### 技术路线差异

- **OpenClaw**：全能型核心框架，追求“大一统”能力覆盖，拥抱 protobuf 标准化
- **ZeptoClaw**：聚焦数据流安全（taint tracking），定位“安全优先的轻量内核”
- **PicoClaw**：边缘计算导向，MIPS32 LE 编译支持、硬件兼容性优先
- **NanoClaw / TinyClaw**：微小化设计，强调攻击面最小化与可审计性
- **IronClaw**：企业级定位，NEAR 区块链集成、Venice AI 一级支持、安全审计成熟

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **MCP (Model Context Protocol) 支持** | ZeptoClaw (#233), NanoBot (#1502), NanoClaw (#545), TinyClaw (#158) | 标准化工具接入、Claude Desktop/VS Code Copilot 集成 |
| **多代理协作/ Swarm 架构** | OpenClaw, NanoBot (#1494), PicoClaw (#976, #709), NanoClaw (#384) | 任务分解、并行执行、Agent 间通信 |
| **渠道集成本土化** | OpenClaw (QQ), LobsterAI (钉钉), PicoClaw (飞书), NanoClaw (飞书 #671) | 绕过国内平台 API 限制、白名单配置简化 |
| **本地 LLM 支持** | NanoBot (#75), PicoClaw (#1006), TinyClaw (#159) | Ollama、LM Studio、Cursor CLI、Copilot CLI |
| **安全增强** | ZeptoClaw (taint tracking), IronClaw (5个安全PR), Zeroclaw (#2681) | 数据流追踪、提示注入检测、SSE token 保护 |
| **定时任务/Cron 可靠性** | OpenClaw (#33986), PicoClaw (#1043, #1044, #1058), NanoClaw (#669) | 重复执行修复、时区尊重、deliver=false 行为 |

**趋势洞察**：MCP 协议与多代理协作是生态共识，渠道本土化是国内项目的共性刚需，安全能力正从“可选”转向“必选”。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构 | 核心卖点 |
|------|----------|----------|----------|----------|
| **OpenClaw** | 全功能 Core | 开发者/企业 | TypeScript, protobuf | 生态完整性、插件丰富度 |
| **Zeroclaw** | 安全增强 | 高安全场景 | Rust | Taint tracking, 语义向量库守卫 |
| **EasyClaw** | 开箱即用 | 非技术用户 | - | 零配置体验、文档完善 |
| **LobsterAI** | 沙箱 + 视觉 | 网易生态用户 | QEMU 沙箱 | Windows/沙箱兼容性 |
| **ZeptoClaw** | 轻量安全 | 审计/嵌入式 | Go | 最小化攻击面、可提取内核 |
| **NanoBot** | 多代理平台 | 进阶开发者 | - | Agent Swarm、子代理独立配置 |
| **PicoClaw** | 边缘计算 | IoT/硬件玩家 | Go, MIPS支持 | 低功耗设备运行、多节点 Swarm |
| **NanoClaw** | 微小化 | 安全敏感 | Bun runtime | 小核心、可审计、随装扩展 |
| **IronClaw** | 企业级 | Near/区块链 | Rust | NEAR 集成、Venice AI、benchmark 系统 |
| **TinyClaw** | 极致轻量 | 极客/学习者 | - | 多渠道接入 (Discord/Telegram/WhatsApp) |

---

## 6. 社区热度与成熟度分层

### 快速迭代阶段 🟢

| 项目 | 特征 | 风险点 |
|------|------|--------|
| **OpenClaw** | PR 积压 407 个，功能激进 | 回归问题频发 (v2026.3.x) |
| **PicoClaw** | PR 待合并 57 个，多方向并行 | Cron 稳定性、渠道兼容性 |
| **NanoBot** | 待合并 PR 40 个，功能探索期 | 本地模型支持薄弱 |

### 质量巩固阶段 🟡

| 项目 | 特征 | 重点 |
|------|------|------|
| **IronClaw** | 安全 PR 密集 (5个)，版本迭代规范 | 安全审计、Benchmark 系统 |
| **Zeroclaw** | Alpha 版本发布，CI 简化 | Web Agent 连接、树莓派兼容 |
| **ZeptoClaw** | 功能目标达成，依赖项整合 | 文档完善、gog-* 依赖合并 |

### 稳定维护阶段 🔵

| 项目 | 状态 |
|------|------|
| **EasyClaw** | 无 PR 积压，版本正常发布 |
| **TinyClaw** | Bug 修复驱动，v0.0.9 刚发布 |

---

## 7. 值得关注的趋势信号

### 🔴 高优先级趋势

1. **MCP 协议成为生态事实标准**
   - ZeptoClaw、NanoBot、NanoClaw、TinyClaw 均在 MCP 方向投入资源
   - 意义：AI Agent 工具层互操作性的关键突破

2. **多代理协作从概念走向实现**
   - NanoBot (#1494)、PicoClaw (#976, #709)、OpenClaw 均在推进
   - 意义：单 Agent 向 Agent Swarm 的范式转移

3. **安全能力从“可选”到“必选”**
   - ZeptoClaw taint tracking、IronClaw 5个安全 PR、Zeroclaw 语义守卫
   - 意义：随着 Agent 部署场景扩大，安全成为差异化竞争力

### 🟡 中期趋势

4. **渠道本土化持续深化**
   - 飞书、钉钉、QQ、微信（OpenClaw QQ 频道 PR #29613）密集迭代
   - 国内市场的独特需求推动差异化实现

5. **运行时多样化**
   - NanoClaw (Bun)、TinyClaw (Cursor CLI/ Copilot CLI)、多 Provider 支持
   - 摆脱单一模型依赖成为共识

### 📊 对开发者的建议

| 场景 | 推荐项目 | 理由 |
|------|----------|------|
| **企业级生产部署** | IronClaw / OpenClaw | 安全合规、CI 成熟、企业支持 |
| **安全敏感场景** | ZeptoClaw / NanoClaw | Taint tracking、最小攻击面 |
| **边缘/硬件集成** | PicoClaw | MIPS 支持、低功耗、Swarm |
| **快速原型/学习** | TinyClaw / EasyClaw | 轻量、低门槛、多渠道 |
| **多代理复杂任务** | NanoBot | Agent Swarm、子代理配置 |

---

*报告生成时间：2026-03-04 | 数据来源：各项目 GitHub 动态日报*

---

## 同赛道项目详细报告

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-04)

## 1. 今日速览

Zeroclaw 项目在 2026-03-04 保持高度活跃，24小时内共产生 **16 条 Issues 更新** 和 **50 条 PR 更新**，其中 28 个 PR 待合并。项目发布了 **v0.1.8-alpha.1** 预览版本，主要包含安全层和配置方面的缺陷修复。社区围绕 Web Agent 连接问题、树莓派兼容性以及安全增强功能展开了激烈讨论，整体开发势头强劲，但需关注部分高优先级 Bug 的修复进度。

---

## 2. 版本发布

### v0.1.8-alpha.1 发布

**发布状态**: ✅ 已发布 | [查看 Release](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.8-alpha.1)

**更新内容**:

| PR | 描述 | 作者 |
|---|---|---|
| #1379 | fix(security): 允许在 allowed_commands 中使用显式可执行文件路径 | @chumyin |
| #1378 | fix(slack): 防止重启后重放旧消息 | @chumyin |
| - | fix(config): 配置强制执行... *(详情待补充)* | - |

**迁移注意事项**: 无重大破坏性变更，本次为 alpha 预览版本，建议在测试环境中验证。

---

## 3. 项目进展

过去 24 小时项目合并/关闭了 **22 个 PR**，以下是代表性进展：

| PR | 状态 | 描述 | 亮点 |
|---|---|---|---|
| #2694 | OPEN | fix(channels): 抑制 Telegram 频道中的 HEARTBEAT_OK  sentinel | 解决心跳消息误触发的用户体验问题 |
| #2692 | OPEN | fix: 设置默认 cargo run target 并复用 openrouter client | 改善本地开发体验 |
| #2681 | OPEN | feat(security): 添加语义向量库守卫和语料库更新器 | 新增语义提示注入检测能力 |
| #2688 | OPEN | fix(config): 在 Windows 上尊重 HOME 环境变量 | 修复 Windows 测试失败问题 |
| #2586 | OPEN | Fix WebSocket 连接错误 | 解决 Agent UI 重连循环问题 |
| #2608 | OPEN | fix(copilot): 支持多部分内容消息的视觉功能 | 补齐 Copilot 提供商视觉能力 |

> 📊 **合并率**: 22/50 (44%)，待合并 PR 28 个

---

## 4. 社区热点

以下 Issues 和 PR 讨论最为活跃（按评论数排序）：

### 🔥 热门 Issues

| Issue | 评论 | 热度原因 |
|---|---|---|
| [#2595](https://github.com/zeroclaw-labs/zeroclaw/issues/2595) - Web Agent Connection error | 7 | S1 级阻断问题，影响生产环境 |
| [#2590](https://github.com/zeroclaw-labs/zeroclaw/issues/2590) - 安全层 Canary Tokens + Semantic VectorDB 守卫 | 4 | 安全增强功能路线图 |
| [#2611](https://github.com/zeroclaw-labs/zeroclaw/issues/2611) - Provider 一致性护栏 | 3 | 代码质量与维护性讨论 |
| [#2674](https://github.com/zeroclaw-labs/zeroclaw/issues/2674) - Gemini API 400 错误 (已关闭) | 3 | 快速响应的 Bug 修复 |

### 💬 热门 PRs

| PR | 状态 | 关注点 |
|---|---|---|
| [#2690](https://github.com/zeroclaw-labs/zeroclaw/pull/2690) | OPEN | CI 简化为 8 个核心工作流 |
| [#2681](https://github.com/zeroclaw-labs/zeroclaw/pull/2681) | OPEN | 语义向量库安全守卫 (安全重点) |
| [#2461](https://github.com/zeroclaw-labs/zeroclaw/pull/2461) | OPEN | BlueBubbles 音频转录 + REST 下载 (大型功能) |

**社区情绪**: 对安全功能增强反应积极，但代码质量担忧仍然存在（见 Issue #2691）。

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

### 🔴 S0 - 数据丢失 / 安全风险

| Issue | 描述 | 状态 |
|---|---|---|
| [#2600](https://github.com/zeroclaw-labs/zeroclaw/issues/2600) | 树莓派 3B+ 无法调用工具 (文件/文件夹创建失败) | OPEN |
| [#2679](https://github.com/zeroclaw-labs/zeroclaw/issues/2679) | 审计日志配置无效，文件未创建 | OPEN |

### 🟠 S1 - 工作流阻断

| Issue | 描述 | 关联 PR |
|---|---|---|
| [#2595](https://github.com/zeroclaw-labs/zeroclaw/issues/2595) | Web Agent 连接错误，daemon 无法正常工作 | #2586 (待合并) |
| [#2693](https://github.com/zeroclaw-labs/zeroclaw/issues/2693) | Mistral 422 错误 | OPEN |
| [#2684](https://github.com/zeroclaw-labs/zeroclaw/issues/2684) | Windows WSL 工具 shell 失败 | OPEN |

### 🟡 S2 - 降级行为

| Issue | 描述 | 状态 |
|---|---|---|
| [#2682](https://github.com/zeroclaw-labs/zeroclaw/issues/2682) | Web UI 集成加载失败 (JSON 解析错误) | OPEN |
| [#2665](https://github.com/zeroclaw-labs/zeroclaw/issues/2665) | Memory 页面 React 错误 (category 对象问题) | OPEN |
| [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) | Feishu 配置无法启动 | OPEN |
| [#2686](https://github.com/zeroclaw-labs/zeroclaw/issues/2686) | Discord 频道转录不工作 | OPEN |

### 🔵 S3 - 小问题

| Issue | 描述 | 状态 |
|---|---|---|
| [#2683](https://github.com/zeroclaw-labs/zeroclaw/issues/2683) | 证书验证问题 (阿里云服务) | OPEN |

---

## 6. 功能请求与路线图信号

以下功能请求可能进入下一版本：

| Issue | 功能描述 | 潜在纳入依据 |
|---|---|---|
| [#2590](https://github.com/zeroclaw-labs/zeroclaw/issues/2590) | **Canary Tokens + Semantic VectorDB 守卫** | #2681 PR 已在开发中 |
| [#2669](https://github.com/zeroclaw-labs/zeroclaw/issues/2669) | **LMStudio 自定义连接器** | 社区明确需求 |
| [#2601](https://github.com/zeroclaw-labs/zeroclaw/issues/2601) | **Telegram allowed_users 环境变量支持** | 配置灵活性提升 |
| [#2691](https://github.com/zeroclaw-labs/zeroclaw/issues/2691) | **代码质量改进** | 社区强烈呼声 |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的关键用户痛点：

| 场景 | 用户反馈 | 情绪 |
|---|---|---|
| **生产环境稳定性** | "web agent shows 'Connection error. Attempting to reconnect...'" - 影响工作流 | 😤 沮丧 |
| **硬件兼容性** | "Raspberry Pi 3B+ 上无法创建文件或文件夹" - 基础功能缺失 | 😟 担忧 |
| **配置灵活性** | "希望在 allowed_users 中使用环境变量而非明文" | 👍 期待 |
| **安全增强** | "需要语义向量库守卫来防御提示注入" | ✅ 支持 |
| **代码质量** | "代码质量堪忧，社区协作态度更差" | 😠 不满 |

---

## 8. 待处理积压

以下是长期未响应或需要维护者关注的重要 Issue：

| Issue | 积压时间 | 优先级 | 提醒 |
|---|---|---|---|
| [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) - Feishu 配置问题 | 2 天 | S2 | 等待确认 |
| [#2590](https://github.com/zeroclaw-labs/zeroclaw/issues/2590) - 安全增强 | 2 天 | 功能 | PR #2681 推进中 |
| [#2691](https://github.com/zeroclaw-labs/zeroclaw/issues/2691) - 代码质量投诉 | 当天 | 社区 | 需官方回应 |

---

**报告生成时间**: 2026-03-04  
**数据来源**: GitHub Zeroclaw Labs


</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 | 2026-03-04

## 1. 今日速览

过去24小时内，EasyClaw 项目整体保持低活跃状态。无新增 Pull Request，Issue 板块有 1 条历史问题已关闭。项目于今日发布了 v1.5.16 新版本，同时附带 macOS Gatekeeper 问题的官方解决方案。社区讨论集中在飞书集成问题上，该问题经过多轮沟通后已于昨日关闭。整体项目处于稳定维护状态，版本迭代正常推进。

---

## 2. 版本发布

### 🚀 v1.5.16 发布

**发布说明：** EasyClaw v1.5.16 已正式发布。

**macOS 安装问题修复：**

近期大量 macOS 用户反馈安装时遇到 **"EasyClaw is damaged and can't be opened"** 错误提示。官方确认此问题系 **macOS Gatekeeper 安全机制拦截未签名应用** 而非文件实际损坏，并提供了官方解决方案：

> 1. 打开 **Terminal（终端）** 应用
> 2. [后续步骤略，详见发布页]

**链接：** https://github.com/gaoyangz77/easyclaw/releases

---

## 3. 项目进展

过去24小时内无 Pull Request 合并或关闭。项目当前无正在推进的功能开发，整体处于版本发布后的稳定期。

---

## 4. 社区热点

### 🔥 Issue #5：连接飞书不成功（已关闭）

| 属性 | 信息 |
|------|------|
| 状态 | CLOSED |
| 作者 | @leati |
| 创建时间 | 2026-03-02 |
| 更新时间 | 2026-03-03 |
| 评论数 | 11 |
| 点赞数 | 0 |

**问题摘要：** 用户在使用飞书集成功能时，持续收到添加白名单的提示。即使完成白名单操作后，重新发送消息仍提示需要添加白名单，导致功能无法正常使用。

**分析：** 该问题引发了一定程度的社区讨论（11条评论），表明飞书集成是用户的核心使用场景之一。问题最终标记为关闭，可能已通过技术排查或配置指导得到解决。此类反复出现的白名单问题值得开发团队关注，可能是 API 回调地址或认证机制存在潜在缺陷。

**链接：** https://github.com/gaoyangz77/easyclaw/issues/5

---

## 5. Bug 与稳定性

### 🐛 近期关闭的 Bug

| Issue | 严重程度 | 状态 | 说明 |
|-------|---------|------|------|
| #5 连接飞书不成功 | 中 | 已关闭 | 白名单配置后仍无法连接飞书 |

**说明：** 该问题是过去24小时内唯一报告的 Bug，现已关闭。由于缺乏 Fix PR 信息，无法确认是否已通过代码修复或仅通过配置指导解决。

---

## 6. 功能请求与路线图信号

过去24小时内无新增功能请求 Issue。基于 Issue #5 的讨论热度，**飞书集成稳定性** 可能是下一版本需要重点关注的方向。建议开发团队考虑：

- 优化飞书白名单验证机制，减少误判
- 提供更清晰的飞书配置指引文档

---

## 7. 用户反馈摘要

**核心痛点：**

- **飞书集成配置复杂**：用户反馈在飞书使用场景下频繁遇到白名单问题，配置后仍无法正常使用，暗示现有集成流程存在易用性问题
- **macOS 兼容性**：新版本发布特别针对 macOS Gatekeeper 问题提供解决方案，说明此前该问题影响面较广

**使用场景：**

- 飞书消息推送是用户高频使用功能
- macOS 用户群体占有一定比例

---

## 8. 待处理积压

| 类型 | 数量 | 说明 |
|------|------|------|
| 开放 Issue | 0 | 无长期未处理问题 |
| 待合并 PR | 0 | 无积压 |
| 长期未响应 Issue | 0 | 无 |

**评估：** 项目当前无明显积压问题，处理效率较高。

---

*报告生成时间：2026-03-04 | 数据来源：GitHub EasyClaw 仓库*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-04)

## 今日速览

过去 24 小时内，LobsterAI 项目保持较高活跃度，共处理 **32 条 Issues**（新开/活跃 16 条，关闭 16 条）和 **11 条 PR**（已合并/关闭 9 条，待合并 2 条）。社区反馈主要集中在 **沙箱模式文件访问**、**Windows 系统兼容性** 和 **中文路径支持** 三个方向。维护团队今日合并了多个重要修复 PR，涵盖中文路径编码、Telegram 群组消息过滤、钉钉网关重连机制等领域，项目整体向前推进明显。**无新版本发布**。

---

## 版本发布

> 本日无新版本发布。

---

## 项目进展

本日共合并/关闭 **9 条 PR**，以下为重要进展：

| PR | 标题 | 贡献者 | 说明 |
|---|------|--------|------|
| [#255](https://github.com/netease-youdao/LobsterAI/pull/255) | fix: 修复中文路径下 BASH_ENV 编码异常及 Skills 路径不可用 | @btc69m979y-dotcom | 修复 Windows 环境下非 ASCII 字符路径导致的 bash 命令输出乱码问题 |
| [#252](https://github.com/netease-youdao/LobsterAI/pull/252) | feat: telegram机器人，在群中只接收@机器人的消息 | @liugang519 | 解决 Telegram 群组中机器人过度响应的问题 (closes #181, #241) |
| [#250](https://github.com/netease-youdao/LobsterAI/pull/250) | fix: 修复图片附件文件路径未传递给模型导致 skill 引用路径错误 | @btc69m979y-dotcom | 修复视觉模型与 skill 配合时路径丢失问题 |
| [#238](https://github.com/netease-youdao/LobsterAI/pull/238) | fix: 修复 Windows 沙箱 VM 启动、附件及镜像问题 | @btc69m979y-dotcom | 修复 QEMU 文件锁冲突、VM 启动卡顿等问题 |
| [#249](https://github.com/netease-youdao/LobsterAI/pull/249) | fix: 修复钉钉网关不必要的重连并增加发送重试机制 | @liugang519 | 优化钉钉通知稳定性，增加 3 次重试机制 |

**待合并 PR (2条)**：
- [#240](https://github.com/netease-youdao/LobsterAI/pull/240) - Feat/workflow enhancement：提出多 Agent 分工协作的工作流新功能
- [#237](https://github.com/netease-youdao/LobsterAI/pull/237) - feat: add Stepfun provider：添加 StepFun 模型提供商支持

---

## 社区热点

以下 Issues 讨论最为活跃，反映用户核心诉求：

### 🔥 Top 3 高热度 Issue

1. **#205** - [最新版的还是安装不了？？](https://github.com/netease-youdao/LobsterAI/issues/205) (6 评论)
   - 用户反馈最新版安装持续失败，附带了错误截图
   - 状态：**CLOSED**

2. **#49** - [请教有道龙虾在私有网络部署的问题](https://github.com/netease-youdao/LobsterAI/issues/49) (4 评论)
   - 私有网络环境下证书错误处理、HTTP 访问等问题
   - 状态：**CLOSED**

3. **#125 / #78** - 沙箱模式文件访问问题 (各 3 评论)
   - #125: 沙箱模式下找不到上传的文件
   - #78: Windows 沙箱批处理程序无法访问本地文件
   - 状态：**均已 CLOSED**

### 其他活跃讨论
- **#202** - Windows 版本运行不了任何 skill (2 评论)
- **#191** - 单个 session 多次对话后容易出现 API Error (2 评论)
- **#97 / #198** - MCP 支持请求 (各 1 评论)

---

## Bug 与稳定性

### 严重问题 (影响核心功能)

| Issue | 描述 | 状态 | 修复 PR |
|-------|------|------|---------|
| [#232](https://github.com/netease-youdao/LobsterAI/issues/232) | 0.1.23 导致 macOS 内存飙升，容易卡死 | **OPEN** | - |
| [#253](https://github.com/netease-youdao/LobsterAI/issues/253) | Windows 系统部分 skill 无法适配（web-search 为例） | **OPEN** | - |
| [#245](https://github.com/netease-youdao/LobsterAI/issues/245) | 调用 ollama 模型时总是中断和报错 | **OPEN** | - |

### 中等问题 (功能缺陷)

| Issue | 描述 | 状态 | 相关修复 |
|-------|------|------|---------|
| [#230](https://github.com/netease-youdao/LobsterAI/issues/230) | 中文支持不友好，路径中中文额外增加空格 | **OPEN** | - |
| [#204](https://github.com/netease-youdao/LobsterAI/issues/204) | 飞书机器人 KEY 总是消失 | **OPEN** | - |
| [#224](https://github.com/netease-youdao/LobsterAI/issues/224) | 用户名为中文时无法写文件、使用 skills | **CLOSED** | #255 |
| [#246](https://github.com/netease-youdao/LobsterAI/issues/246) | 新版本无法覆盖安装，需手动备份数据 | **OPEN** | - |

### 已修复问题
- **中文路径编码问题** → PR #255 已合并
- **Telegram 群组过度响应** → PR #252 已合并
- **Windows 沙箱 VM 启动问题** → PR #238 已合并

---

## 功能请求与路线图信号

以下功能请求在本日得到较多关注，结合已有 PR 预计可能纳入下一版本：

| Issue | 功能请求 | 预计纳入版本 |
|-------|----------|-------------|
| [#97](https://github.com/netease-youdao/LobsterAI/issues/97) | 增加 MCP (Model Context Protocol) 支持 | 规划中 |
| [#198](https://github.com/netease-youdao/LobsterAI/issues/198) | 增加 MCP 设置界面 + 多模型切换路由 | 规划中 |
| [#240](https://github.com/netease-youdao/LobsterAI/pull/240) | 多 Agent 分工协作工作流 (workflow enhancement) | **待评审** |
| [#237](https://github.com/netease-youdao/LobsterAI/pull/237) | StepFun 模型提供商支持 | **待合并** |

---

## 用户反馈摘要

从 Issues 评论中提炼的用户痛点与需求：

### 痛点
1. **沙箱模式不完善**：多用户反馈沙箱模式下文件访问失败，是当前最高频问题
2. **Windows 兼容性差**：skill 无法运行、中文路径乱码、安装覆盖失败等问题集中
3. **私有网络部署困难**：证书错误处理、模型连接失败
4. **覆盖安装问题**：升级需手动备份数据库，用户数据易丢失

### 需求
1. MCP 协议支持（多个用户提及）
2. 更稳定的多模型路由切换
3. 移动端版本开发

### 满意度信号
- 积极：#49 (私有网络部署) 和 #252 (Telegram 群组消息过滤) 已关闭，用户问题得到解决
- 消极：#205 (安装问题)、#232 (macOS 内存问题) 仍为 Open 状态，用户不满情绪明显

---

## 待处理积压

以下 Issue 长期未响应或长期处于 Open 状态，需维护团队关注：

| Issue | 创建时间 | 状态 | 提醒 |
|-------|----------|------|------|
| [#49](https://github.com/netease-youdao/LobsterAI/issues/49) | 2026-02-23 | CLOSED | 私有网络部署问题已关闭，但用户最后更新在 03-04 |
| [#205](https://github.com/netease-youdao/LobsterAI/issues/205) | 2026-03-02 | CLOSED | 安装问题反馈强烈，建议排查安装流程 |
| [#232](https://github.com/netease-youdao/LobsterAI/issues/232) | 2026-03-03 | **OPEN** | macOS 内存飙升问题，可能影响用户留存 |
| [#246](https://github.com/netease-youdao/LobsterAI/issues/246) | 2026-03-03 | **OPEN** | 覆盖安装问题，影响升级体验 |
| [#247](https://github.com/netease-youdao/LobsterAI/issues/247) | 2026-03-04 | **OPEN** | Gemini 无法连接 |
| [#248](https://github.com/netease-youdao/LobsterAI/issues/248) | 2026-03-04 | **OPEN** | deepseek、qwen 测试连接提示成功但实际 401 错误 |

---

> **日报说明**：本报告基于 2026-03-04 当日 GitHub 数据自动生成，重点关注项目活跃度、功能进展与用户反馈。数据来源：LobsterAI/netease-youdao。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-04)

## 1. 今日速览

ZeptoClaw 项目在 2026-03-04 呈现出**极高的开发活跃度**。过去 24 小时内共处理 **17 条 PR 更新**（14 条已合并/关闭，3 条待合并），同时 **8 个 Issues 已关闭**，涵盖安全、API 集成、测试稳定性等多个关键领域。项目正处于功能快速迭代期，多个高优先级特性（taint tracking、MCP server、OpenAI 兼容 API）已合并入主干，展现出强劲的功能演进势头。

---

## 2. 版本发布

**无新版本发布**。最新 Release 仍为历史版本。

---

## 3. 项目进展

### 合并/关闭的重要 PR

| PR 编号 | 标题 | 领域 | 状态 |
|---------|------|------|------|
| [#241](https://github.com/qhkm/zeptoclaw/pull/241) | feat(safety): add taint tracking for data-flow safety | 安全 | ✅ 已合并 |
| [#233](https://github.com/qhkm/zeptoclaw/pull/233) | feat(mcp): add MCP server mode | 工具 | ✅ 已合并 |
| [#236](https://github.com/qhkm/zeptoclaw/pull/236) | feat(agent): upgrade loop guard with multi-layer detection | Agent | ✅ 已合并 |
| [#235](https://github.com/qhkm/zeptoclaw/pull/235) | feat(api): add OpenAI-compatible /v1/chat/completions endpoint | API | ✅ 已合并 |
| [#239](https://github.com/qhkm/zeptoclaw/pull/239) | feat(safety): data-flow taint tracking for tool I/O | 安全 | ✅ 已合并 |
| [#224](https://github.com/qhkm/zeptoclaw/pull/224) | refactor(kernel): extract thin kernel from create_agent() | 架构 | ✅ 已合并 |
| [#242](https://github.com/qhkm/zeptoclaw/pull/242) | fix(tests): stabilize plugin and doctor tests for Docker/act | 测试 | ✅ 已合并 |

**核心进展摘要：**
- **安全能力大幅增强**：TaintEngine 实现完成，支持数据血缘追踪，可检测 ExternalNetwork、Secret、PII、UserInput、UntrustedAgent 等标签，并在 shell 执行和网络请求前进行拦截
- **生态集成突破**：MCP server mode 支持 stdio 和 HTTP 两种传输方式，ZeptoClaw 可作为工具提供者接入 Claude Desktop、VS Code Copilot、Cursor
- **API 标准化**：新增 OpenAI 兼容的 `/v1/chat/completions` 和 `/v1/models` 端点，支持 SSE 流式和非流式响应
- **Agent 可靠性提升**：LoopGuard 升级为多层检测系统，支持 ping-pong 模式识别、结果感知阻塞、轮询relaxation
- **架构优化**：从 `create_agent_with_template()` 提取出 `src/kernel/` 模块，实现关注点分离

---

## 4. 社区热点

### 讨论活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 领域 |
|------------|------|--------|------|
| [#237](https://github.com/qhkm/zeptoclaw/issues/237) | docs: clarify screenshot feature behavior and usage | 1 | 文档 |
| [#225](https://github.com/qhkm/zeptoclaw/issues/225) | feat(safety): add taint tracking for data-flow-aware safety | 1 | 安全 |
| [#238](https://github.com/qhkm/zeptoclaw/issues/238) | chore: investigate Docker/act test mismatch | 0 | 测试 |

**热点分析：**
- **文档类 Issue 受关注**：`#237` 针对截图功能的文档模糊性进行讨论，反映出用户对工具行为准确理解的需求
- **安全功能引发兴趣**：Taint tracking 相关 Issue（#225、#219）获得评论，表明数据流安全是用户关注的核心差异化能力

---

## 5. Bug 与稳定性

### 今日修复的问题

| Issue 编号 | 问题描述 | 严重程度 | 修复状态 |
|------------|----------|----------|----------|
| [#238](https://github.com/qhkm/zeptoclaw/issues/238) | Docker/act 与本地测试结果不一致 | P2-high | ✅ 已修复 (PR #242) |

**技术细节：**
- `test_execute_binary_not_executable` 在 root 用户 (UID 0) 下会被跳过（root 绕过文件执行权限检查）
- 放宽了 spawn-failure 错误断言以接受 OS 差异

---

## 6. 功能请求与路线图信号

### 新功能需求（来自 Issue）

| Issue 编号 | 功能描述 | 优先级 | 关联 PR |
|------------|----------|--------|---------|
| [#217](https://github.com/qhkm/zeptoclaw/issues/217) | MCP server mode | P2-high | ✅ 已合并 (#233) |
| [#218](https://github.com/qhkm/zeptoclaw/issues/218) | OpenAI-compatible API | P2-high | ✅ 已合并 (#235) |
| [#219](https://github.com/qhkm/zeptoclaw/issues/219) | Taint tracking 数据流安全 | P2-high | ✅ 已合并 (#241) |
| [#220](https://github.com/qhkm/zeptoclaw/issues/220) | 升级 Loop Guard | P2-high | ✅ 已合并 (#236) |
| [#223](https://github.com/qhkm/zeptoclaw/issues/223) | 提取 Thin Kernel | P2-high | ✅ 已合并 (#224) |

**路线图信号：**
所有 P2-high 功能请求均已在本次迭代中完成实现并合并。项目下一阶段可能聚焦于：
- 依赖项更新（gog-gmail、gog-core、gog-calendar 待合并）
- 文档完善（如 #237 所述）
- 性能优化与边界情况处理

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的关键信息：

| Issue | 用户痛点/诉求 | 反馈来源 |
|-------|--------------|----------|
| #237 | 截图功能文档不清晰，导致手动验证时产生困惑 | 维护者 @qhkm 自身发现 |
| #238 | Docker/act 环境与本地测试结果不一致，影响 CI 信心 | PR #183 验证过程中发现 |

**观察：**
- 用户反馈主要来自维护者自身的测试和验证过程，当前尚未有外部用户 Issue 提交
- 项目处于早期内部迭代阶段，功能导向明确

---

## 8. 待处理积压

### 仍待合并的 PR

| PR 编号 | 标题 | 创建时间 | 状态 |
|---------|------|----------|------|
| [#228](https://github.com/qhkm/zeptoclaw/pull/228) | chore(deps): bump gog-gmail | 2026-03-03 | 🟡 待合并 |
| [#229](https://github.com/qhkm/zeptoclaw/pull/229) | chore(deps): bump gog-core | 2026-03-03 | 🟡 待合并 |
| [#232](https://github.com/qhkm/zeptoclaw/pull/232) | chore(deps): bump gog-calendar | 2026-03-03 | 🟡 待合并 |

### 长期未响应的 Issues

**无长期积压 Issues**。所有 8 个 Issues 均在 1-2 天内关闭。

---

## 📊 关键指标一览

| 指标 | 数值 |
|------|------|
| 新开 Issues | 0 |
| 关闭 Issues | 8 |
| 新开 PRs | 0（全部为历史 PR 处理） |
| 合并/关闭 PR | 14 |
| 待合并 PR | 3 |
| 新版本发布 | 0 |

**整体评估：** 项目健康度 **优秀**，无阻塞性问题，功能迭代高效，建议持续关注依赖项合并节奏。

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-04)

## 1. 今日速览

过去 24 小时，NanoBot 项目保持高度活跃状态。共产生 **78 条事件更新**（26 条 Issues + 52 条 PRs），其中 **40 个 PR 待合并**，显示出开发团队强劲的推进力。今日新开 Issues 数量较多（23 个），社区参与热情高涨，但同时积压的待处理问题也在增加。值得注意的是，有 **3 个 Issues 已关闭**，**12 个 PR 已合并/关闭**，项目整体处于快速迭代阶段。发布方面暂无新版本推送。

---

## 2. 版本发布

**本期无新版本发布**。最近未见 Release 更新记录。

---

## 3. 项目进展

今日项目取得多项关键进展，以下是已合并/关闭的重要 PR：

| PR | 描述 | 状态 |
|---|---|---|
| [#1499](https://github.com/HKUDS/nanobot/pull/1499) | fix(qq): add msg_seq to prevent message deduplication error | ✅ 已合并 |
| [#1417](https://github.com/HKUDS/nanobot/pull/1417) | fix: merge runtime context into user message to avoid consecutive user messages | ✅ 已关闭 |
| [#1491](https://github.com/HKUDS/nanobot/pull/1491) | Feat/feishu group tools | ✅ 已关闭 |

**重点进展解读：**

- **QQ 消息去重修复**（#1499）：解决了多消息发送时因 msg_seq 缺失导致的 40054005 错误，提升了 QQ 通道的稳定性。
- **用户消息合并修复**（#1417）：修复了某些 Provider 的内容格式问题导致的 API 错误，这是一个关键的兼容性修复。
- **飞书群工具**（#1491）：已合并，进一步完善了国内主流平台的支持。

---

## 4. 社区热点

以下 Issues/PRs 讨论最为活跃，体现了社区的核心诉求：

### 🔥 热点 Issues

| Issue | 标题 | 评论数 | 点赞 |
|---|---|---|---|
| [#75](https://github.com/HKUDS/nanobot/issues/75) | How Do I connect the Ollama | 17 | 0 |
| [#140](https://github.com/HKUDS/nanobot/issues/140) | Do you have any plans to support GitHub Copilot providers? | 8 | 4 |
| [#222](https://github.com/HKUDS/nanobot/issues/222) | Multi agents setup - Supported? | 8 | 5 |
| [#1481](https://github.com/HKUDS/nanobot/issues/1481) | the bot is so stupid, I'm not sure what went wrong | 7 | 1 |
| [#1459](https://github.com/HKUDS/nanobot/issues/1459) | nanobot with codex-5.3-codex is lazy and doesn't actually execute | 4 | 0 |

**分析：**
- **Ollama 连接问题**（#75）持续成为讨论热点（17 条评论），反映出大量用户希望本地部署 LLM，凸显了对本地模型支持的强烈需求。
- **多代理设置**（#222）和 **GitHub Copilot 提供商支持**（#140）获得较高关注（分别为 5 和 4 点赞），表明社区对多代理架构和更多 LLM 提供商的期待。
- **Bot 行为异常**（#1481、#1459）反映了实际使用中的体验问题，可能与模型配置或执行逻辑有关。

### 🔥 热点 PRs

| PR | 标题 | 状态 |
|---|---|---|
| [#1502](https://github.com/HKUDS/nanobot/pull/1502) | feat(mcp): add support for enabling and disabling tools in MCP server | 待合并 |
| [#1466](https://github.com/HKUDS/nanobot/pull/1466) | Support of AWS Bedrock | 待合并 |
| [#1494](https://github.com/HKUDS/nanobot/pull/1494) | Add Agent Swarm Skill - Multi-Agent Collaboration Mode | 待合并 |
| [#1498](https://github.com/HKUDS/nanobot/pull/1498) | feat: smart skill injection via TF-IDF relevance ranking | 待合并 |
| [#1489](https://github.com/HKUDS/nanobot/pull/1489) | feat(config): add subagent LLM configuration support | 待合并 |

**分析：**
- **AWS Bedrock 支持**（#1466）是企业级用户的重要需求一旦合并将大幅提升 NanoBot 在企业场景的竞争力。
- **Agent Swarm 模式**（#1494）和 **子代理独立 LLM 配置**（#1489）代表了多代理协作的核心能力，预计将成为下一版本的亮点功能。
- **MCP 工具动态管理**（#1502）和 **TF-IDF 技能注入**（#1498）体现了对精细化控制的追求。

---

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

| Issue | 标题 | 严重程度 | 状态 | Fix PR |
|---|---|---|---|---|
| [#1481](https://github.com/HKUDS/nanobot/issues/1481) | Bot 持续回复"I'm on it"不提供实际响应 | **高** | 开放 | - |
| [#1459](https://github.com/HKUDS/nanobot/issues/1459) | Codex-5.3-codex 懒惰执行，不实际调用工具 | **高** | 开放 | - |
| [#1401](https://github.com/HKUDS/nanobot/issues/1401) | TypeError: type 'Choice' is not subscriptable | **高** | 开放 | - |
| [#1487](https://github.com/HKUDS/nanobot/issues/1487) | Qwen3.5 function.arguments JSON 格式错误 | **中** | 开放 | - |
| [#1486](https://github.com/HKUDS/nanobot/issues/1486) | Provider 强制 dashscope 但 model 被错误路由至 moonshot | **中** | 开放 | - |
| [#1478](https://github.com/HKUDS/nanobot/issues/1478) | LM Studio 集成无法工作 | **中** | 开放 | - |
| [#1501](https://github.com/HKUDS/nanobot/issues/1501) | Telegram 媒体文件因文件名不唯一被覆盖 | **低** | 开放 | - |

**已修复 Bug：**
- [#1197](https://github.com/HKUDS/nanobot/issues/1197)：消息工具使用时的最终响应被静默丢弃（已关闭）
- [#1394](https://github.com/HKUDS/nanobot/issues/1394)：QQ 消息发送错误 - msgseq 问题（已关闭，PR #1499 已合并）

---

## 6. 功能请求与路线图信号

以下功能请求获得较多关注，结合已有 PR 判断可能被纳入下一版本：

| Issue | 功能请求 | 点赞 | 相关 PR | 纳入可能性 |
|---|---|---|---|---|
| [#1470](https://github.com/HKUDS/nanobot/issues/1470) | 支持本地 Hugging Face 模型 | 0 | - | 🟡 中 |
| [#140](https://github.com/HKUDS/nanobot/issues/140) | GitHub Copilot 提供商支持 | 4 | - | 🟡 中 |
| [#222](https://github.com/HKUDS/nanobot/issues/222) | 多代理设置文档与支持 | 5 | #1489, #1494 | 🟢 高 |
| [#1268](https://github.com/HKUDS/nanobot/issues/1268) | OpenAI 兼容的 Chat Completions API | 0 | - | 🟡 中 |
| [#1229](https://github.com/HKUDS/nanobot/issues/1229) | BoxLite 沙箱后端（实验性） | 0 | - | 🔴 低 |
| [#1471](https://github.com/HKUDS/nanobot/issues/1471) | 支持接收 Telegram 视频文件 | 0 | - | 🟡 中 |
| [#1503](https://github.com/HKUDS/nanobot/issues/1503) | Dokploy 部署模板 | 0 | - | 🔴 低 |

**路线图信号：**
1. **多代理协作**将成为核心方向：PR #1494（Agent Swarm）、#1489（子代理配置）、#1224（双层架构）均在推进中。
2. **企业级功能**：AWS Bedrock 支持（#1466）、Langfuse 可观测性（#1490）补强了企业场景需求。
3. **安全性增强**：#1305（敏感信息自动脱敏）、#1492（read_file 工具脱敏）体现了对安全性的重视。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点与场景：

### 👍 满意点
- **轻量高效**：多位用户称赞 NanoBot 是"简洁高效的 Agent 框架"（#1181）
- **异步消息场景适配**：单层 ReAct 循环在 Telegram/Discord 等异步场景表现优秀（#1181）
- **工具调用与对话管理**：设计深受好评（#1470）

### 👎 痛点与不满
1. **本地模型支持不足**：大量用户希望能连接 Ollama、LM Studio、本地 HF 模型，现有文档和配置不清晰（#75、#1470、#1478）
2. **执行结果不理想**：Bot 出现"懒惰"行为或不执行工具（#1481、#1459）
3. **信息流不可控**：执行过程中的思考步骤和工具调用信息强制输出，用户无法控制详细程度（#1500）
4. **Telegram 媒体处理**：图片/视频文件处理存在问题，文件名不唯一导致覆盖（#1501）
5. **国内平台兼容性**：QQ、飞书等通道存在偶发错误（#1394、#1499）

### 💡 典型场景
- **定时任务监控**：用户设置 cron 每小时检查 GitHub releases，希望无更新时不输出消息，但 Bot 输出了完整执行流程（#1500）
- **企业部署**：希望有 Dokploy 一键部署模板降低使用门槛（#1503）
- **多代理复杂任务**：用户提出 Agent Swarm 架构需求，希望处理多步骤复杂任务（#1493、#1495）

---

## 8. 待处理积压

以下 Issue 长期未响应或重要功能请求停滞，提醒维护者关注：

| Issue | 标题 | 创建时间 | 当前状态 | 备注 |
|---|---|---|---|---|
| [#75](https://github.com/HKUDS/nanobot/issues/75) | How Do I connect the Ollama | 2026-02-04 | 开放 | 29 天未解决，17 条评论，高需求 |
| [#140](https://github.com/HKUDS/nanobot/issues/140) | GitHub Copilot provider support | 2026-02-05 | 开放 | 27 天未解决，4 点赞 |
| [#222](https://github.com/HKUDS/nanobot/issues/222) | Multi agents setup | 2026-02-06 | 开放 | 26 天未解决，5 点赞，已有 PR 在推进 |
| [#1268](https://github.com/HKUDS/nanobot/issues/1268) | OpenAI-compatible API | 2026-02-27 | 开放 | 5 天无回应 |
| [#1229](https://github.com/HKUDS/nanobot/issues/1229) | BoxLite sandbox backend | 2026-02-26 | 开放 | 实验性功能，需评估 |

**待处理 PR 积压：**
- 当前有 **40 个 PR 待合并**，其中包含多个重要功能（AWS Bedrock、Agent Swarm、Langfuse 等），建议优先处理高价值 PR 以释放功能红利。

---

*报告生成时间：2026-03-04 | 数据来源：GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-04)

## 今日速览

PicoClaw 项目今日保持高度活跃，24小时内新增 **23条 Issues** 和 **94条 PRs**，PR待合并数量达57个，显示开发节奏紧凑。今日重点围绕模型提供者兼容性（Anthropic视觉支持、GLM搜索）、渠道功能增强（Discord引用消息、飞书卡片）、以及Cron任务调度等基础设施问题进行迭代。项目整体处于快速迭代期，社区参与度高，但存在多个待解决的兼容性和稳定性问题需要关注。

---

## 版本发布

**无新版本发布**

过去24小时内暂无 Release 更新。

---

## 项目进展

今日共有 **37个 PR** 被合并或关闭，以下为重要进展：

| PR | 类型 | 摘要 | 状态 |
|---|---|---|---|
| [#1057](https://github.com/sipeed/picoclaw/pull/1057) | 工具增强 | 添加 GLM Search (智谱) 网页搜索提供商，支持中国大陆无需代理的网络搜索 | ✅ 已关闭 |
| [#1063](https://github.com/sipeed/picoclaw/pull/1063) | 提供者增强 | 为原生 Anthropic 提供商添加视觉/图像支持（`anthropic/` 前缀模型） | 🟢 开放 |
| [#1062](https://github.com/sipeed/picoclaw/pull/1062) | 打包 | 为 PicoClaw Launcher 添加 Linux desktop entry，实现应用菜单集成 | 🟢 开放 |
| [#903](https://github.com/sipeed/picoclaw/pull/903) | 渠道功能 | 飞书消息卡片和流式输出支持 | ✅ 已关闭 |
| [#1051](https://github.com/sipeed/picoclaw/pull/1051) | 构建 | 添加 MIPS32 LE (mipsle) 交叉编译支持，扩展硬件兼容范围 | 🟢 开放 |
| [#981](https://github.com/sipeed/picoclaw/pull/981) | 多模态 | 为视觉-capable LLMs 添加多模态图像支持，修复 Telegram 等渠道的图片传递管道 | ✅ 已关闭 |
| [#1047](https://github.com/sipeed/picoclaw/pull/1047) | Discord 增强 | 支持引用消息和解析频道/链接引用，提升对话上下文理解 | 🟢 开放 |
| [#846](https://github.com/sipeed/picoclaw/pull/846) | 重构 | 工具系统重构，优化工具开发和使用便利性 | ✅ 已关闭 |
| [#1060](https://github.com/sipeed/picoclaw/pull/1060) | Bugfix | 修复 Cron `deliver=false` 任务静默丢弃 LLM 响应的问题 | 🟢 开放 |
| [#1059](https://github.com/sipeed/picoclaw/pull/1059) | Bugfix | 修复 Agent 打字指示器在斜杠命令后卡住的两个相关 Bug | 🟢 开放 |
| [#1061](https://github.com/sipeed/picoclaw/pull/1061) | 架构 | 引入 ModelRegistry 作为模型→提供者映射的单点真知，消除 `/switch model` 后的过时提供者引用 | 🟢 开放 |
| [#976](https://github.com/sipeed/picoclaw/pull/976) | 多Agent | 实现 Agent Team 架构，支持协调器分解复杂任务并委托给专业子 Agent 并发运行 | 🟢 开放 |
| [#709](swarm模式) | 多Agent协调 | 实现基于 gossip 的多节点协调（UDP 协议），包括成员管理、负载监控、会话切换、领导者选举 | 🟢 开放 |

**合并率估算**：37/94 ≈ **39%**

---

## 社区热点

以下 Issues/PRs 今日讨论最为活跃（按评论数排序）：

### 🔥 热门 Issues

1. **[#1006](https://github.com/sipeed/picoclaw/issues/1006)** - `[BUG] picolm-local 配置错误：api_key or api_base is required`
   - 🔶 类型：Bug (provider/config)
   - 💬 评论：**4条**
   - 📌 摘要：用户尝试配置本地 TinyLlama 模型时报错，config.json 配置问题
   - 🔍 诉求：本地模型配置流程需要更清晰的文档或引导

2. **[#507](https://github.com/sipeed/picoclaw/issues/507)** - `[Feature] PicoClaw 作为 OpenClaw Gateway 节点运行`
   - 🟢 类型：Enhancement
   - 💬 评论：**4条** | 👍 **1赞**
   - 📌 摘要：希望 PicoClaw 能作为节点接入 OpenClaw 生态系统，实现混用
   - 🔍 诉求：与 OpenClaw 生态的互操作性是企业级应用的基础需求

3. **[#1037](https://github.com/sipeed/picoclaw/issues/1037)** - `[BUG] 网站链接到欺诈项目`
   - 🔶 类型：Bug
   - 💬 评论：**4条**
   - 📌 摘要：picoclaw.net 页脚 Nanoclaw 链接指向欺诈网站 nanoclaw.net
   - 🔍 诉求：需紧急修复外链安全问题

4. **[#995](https://github.com/sipeed/picoclaw/issues/995)** - `[Feature] 添加多用户支持`
   - 🟢 类型：Enhancement (low priority)
   - 💬 评论：**4条**
   - 📌 摘要：单一 PicoClaw 实例供多用户共享，MEMORY.md 和 cronjobs 全局性问题
   - 🔍 诉求：家庭/朋友共享使用场景

5. **[#984](https://github.com/sipeed/picoclaw/issues/984)** - `[BUG] 配置有效 API key 后仍报 no API key configured`
   - 🔶 类型：Bug (provider/config)
   - 💬 评论：**2条**
   - 📌 摘要：Android Termux 环境下运行 PicoClaw 的兼容性问题
   - 🔍 诉求：移动端/边缘设备兼容性

---

## Bug 与稳定性

今日报告的 Bug 按严重程度排列：

### 🔴 高优先级

| Issue | 摘要 | 状态 |
|---|---|---|
| [#1064](https://github.com/sipeed/picoclaw/issues/1064) | v0.2.0 语音处理损坏：API Error 1210 (Invalid Parameter) 替换功能性 Tool-calling | 🆕 新开 |
| [#1058](https://github.com/sipeed/picoclaw/issues/1058) | Cron `deliver=false` 任务静默丢弃 LLM 响应，消息从未到达频道 | 🆕 新开 |
| [#1049](https://github.com/sipeed/picoclaw/issues/1049) | `read_file` 工具读取 PDF 等二进制文件时产生大量乱码字符 | 🆕 新开 |
| [#1048](https://github.com/sipeed/picoclaw/issues/1048) | Discord 引用消息缺乏上下文，频道引用也无法解析 | 🆕 新开 |
| [#1044](https://github.com/sipeed/picoclaw/issues/1044) | Cron 表达式忽略 `schedule.TZ` 字段，始终在 UTC 时区评估 | 🆕 新开 |
| [#1043](https://github.com/sipeed/picoclaw/issues/1043) | 周期性 Cron 任务静默变成一次性 "at" 任务，执行一次后被删除 | 🆕 新开 |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | `exec` 工具的 `guardCommand` 方法对 `wttr.in/Beijing?T` 这类命令误判为路径穿越 | 🆕 新开 |
| [#1019](https://github.com/sipeed/picoclaw/issues/1019) | NVIDIA API 集成因不支持 'prompt_cache_key' 参数失败 | 🆕 新开 |

### 🟡 中优先级

| Issue | 摘要 | 状态 |
|---|---|---|
| [#1025](https://github.com/sipeed/picoclaw/issues/1025) | Agent 执行脚本时超时时间能否在 config 中自定义（默认 1m0s） | 🆕 新开 |
| [#1039](https://github.com/sipeed/picoclaw/issues/1039) | `agent` 命令的 `--session` 标志被忽略 | 🆕 新开 |
| [#1036](https://github.com/sipeed/picoclaw/issues/1036) | Docker 安装无法在容器重启后保留更改（需自愈/自更新能力） | 🆕 新开 |

### 🟢 已有 Fix PR

- [#1060](https://github.com/sipeed/picoclaw/pull/1060) - 修复 Cron `deliver=false` 任务丢弃响应问题
- [#1059](https://github.com/sipeed/picoclaw/pull/1059) - 修复 Agent 打字指示器 Bug
- [#1056](https://github.com/sipeed/picoclaw/pull/1056) - 修复 read_file 工具安全问题（二进制文件）

---

## 功能请求与路线图信号

用户提出的新功能需求及纳入下一版本的可能性分析：

| Issue | 功能 | 评估 |
|---|---|---|
| [#806](https://github.com/sipeed/picoclaw/issues/806) | **WebUI 支持** (高优先级, 路线图) | ⭐ 已有 PR 在开发中，降低入门门槛的核心功能 |
| [#507](https://github.com/sipeed/picoclaw/issues/507) | 作为 OpenClaw Gateway 节点运行 | 🔶 企业级需求，需社区进一步推动 |
| [#572](https://github.com/sipeed/picoclaw/issues/572) | 添加 `/new` 或 `/clear` 命令开始新会话 | 🔶 用户体验改进，合理需求 |
| [#738](https://github.com/sipeed/picoclaw/issues/738) | 用户可配置钩子 (pre/post tool execution) | 🔶 扩展性需求，支持 self-improving-agent |
| [#1017](https://github.com/sipeed/picoclaw/issues/1017) | 基于 go ebpf 的命令安全组件 | 🔶 企业级安全需求 |
| [#1011](https://github.com/sipeed/picoclaw/issues/1011) | 模型访问代理支持 | 🟢 已有 PR #1057 添加 GLM 搜索提供商，方向一致 |
| [#1055](https://github.com/sipeed/picoclaw/issues/1055) | Node 节点设备控制逻辑（智能家居网关） | 🔶 参考 OpenClaw 架构，新增场景 |
| [#995](https://github.com/sipeed/picoclaw/issues/995) | 多用户支持 | 🔶 需解决 MEMORY.md 和 cron 全局性问题 |

**路线图信号**：WebUI 支持 (#806) 已在开发中，预计下个版本推出；多模态支持 (#981, #1063) 已基本完成；Agent Team (#976) 和 Swarm 模式 (#709) 代表多 Agent 协调的长期方向。

---

## 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点和使用场景：

### 满意/正向反馈
- **多模态能力**：用户对 Telegram 图片传递到视觉模型的功能增强表示期待 (#981)
- **中国本地化**：GLM Search 搜索提供商的添加解决了中国大陆部署的网络访问痛点 (#1057)
- **硬件兼容性**：MIPS32 LE 交叉编译支持扩展了低端设备的使用场景 (#1051)

### 不满/痛点
1. **配置复杂**：本地模型 (picolm-local) 配置门槛高，新手容易遇到 api_key/api_base 错误 (#1006)
2. **Cron 稳定性**：多个 Cron 相关 Bug 影响定时任务可靠性 (#1044, #1043, #1058)
3. **渠道消息丢失**：Discord 引用消息上下文丢失、飞书配置后无反应等渠道问题频发 (#1048, #978)
4. **安全误判**：`exec` 工具对合法命令（如 `curl wttr.in`）的路径安全检查过于严格 (#1042)
5. **移动端支持**：Android Termux 环境兼容性不佳 (#984)

---

## 待处理积压

以下 Issue 长期未响应或需要维护者关注：

| Issue | 积压时间 | 摘要 |
|---|---|---|
| [#507](https://github.com/sipeed/picoclaw/issues/507) | ~12天 | OpenClaw Gateway 节点功能，讨论较活跃但暂无明确进度 |
| [#572](https://github.com/sipeed/picoclaw/issues/572) | ~11天 | `/new` 命令需求，1赞，长期未处理 |
| [#738](https://github.com/sipeed/picoclaw/issues/738) | ~8天 | 钩子系统需求，有助于扩展性 |
| [#806](https://github.com/sipeed/picoclaw/issues/806) | ~6天 | WebUI 需求，6赞，高优先级路线图项，需持续推进 |
| [#1022](https://github.com/sipeed/picoclaw/issues/1022) | ~1天 | macOS 系统支持缺失 |

---

*报告生成时间：2026-03-04 | 数据来源：GitHub PicoClaw Repository*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期：2026-03-04**

---

## 1. 今日速览

NanoClaw 今日保持高度活跃，共产生 **31 条项目动态**（6 条 Issues + 25 条 PRs）。社区参与度显著，4 个新 Issue 开启，2 个 Issue 关闭；PR 方面 18 个待合并，7 个已合并/关闭。项目持续快速迭代，新增 Feishu 渠道支持、WebSocket 通信重构、多运行时支持等重要功能，展现出强劲的生态扩展态势。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

| PR | 状态 | 描述 | 链接 |
|---|---|---|---|
| #677 | ✅ 已合并 | **feat: configurable model selection** - 新增 `DEFAULT_MODEL` 环境变量和 `/model` 命令，支持运行时切换模型（sonnet/opus/haiku 别名），数据持久化至数据库 | [#677](https://github.com/qwibitai/nanoclaw/pull/677) |
| #276 | ✅ 已合并 | **[skill] add-chrome-browser** - 新增技能为 Agent 提供持久化 Chrome 浏览器，支持页面导航、元素点击、表单填写、截图及 Cookie 管理 | [#276](https://github.com/qwibitai/nanoclaw/pull/276) |
| #161 | ✅ 已关闭 | **feat: migrate from Node.js to Bun runtime** - 已在 #675 中重新开启，Bun 迁移工作持续推进 | [#161](https://github.com/qwibitai/nanoclaw/pull/161) |
| #683 | 🔄 进行中 | **refactor: replace file-based IPC with WebSocket communication** - 用 WebSocket 替换文件轮询 IPC，实现单 WebSocket 服务器 + 每容器 256 位加密令牌认证 | [#683](https://github.com/qwibitai/nanoclaw/pull/683) |
| #671 | 🔄 进行中 | **feat(skills): add Feishu (Lark) channel skill** - 新增飞书渠道支持，WebSocket 长连接模式，无需公网 URL | [#671](https://github.com/qwibitai/nanoclaw/pull/671) |
| #663 | 🔄 进行中 | **feat: support configurable non-Claude runtimes** - 新增多运行时支持，支持 claude/codex/gemini/opencode 切换 | [#663](https://github.com/qwibitai/nanoclaw/pull/663) |
| #675 | 🔄 进行中 | **feat: migrate from Node.js to Bun runtime** - 完整迁移至 Bun 以获得更快 SQLite 和原生 TypeScript 执行 | [#675](https://github.com/qwibitai/nanoclaw/pull/675) |

---

## 4. 社区热点

### 最高热度 Issue

| Issue | 状态 | 评论 | 点赞 | 摘要 |
|---|---|---|---|---|
| **#384** | 🟢 开放 | 8 | **13** | **Nanoclaw needs a skill marketplace/registry** - 核心安全理念：NanoClaw 从小开始、随安装扩展攻击面，与 OpenClaw 的大一统模式形成对比，用户呼吁建立技能市场/注册中心 | [#384](https://github.com/qwibitai/nanoclaw/issues/384) |
| #664 | 🟢 开放 | 2 | 0 | **different between nanoclaw vs claude code** - 用户感谢项目并询问 NanoClaw 与 Claude Code 的本质区别，涉及 Agents.md、SOUL.md、TOOL.md 等代理能力 | [#664](https://github.com/qwibitai/nanoclaw/issues/664) |
| #603 | 🔴 已关闭 | 2 | 0 | **Fix website layout for mobile** - 修复移动端网站布局问题 | [#603](https://github.com/qwibitai/nanoclaw/issues/603) |

### 高关注度 PR

| PR | 状态 | 摘要 |
|---|---|---|
| **#569** | 🔄 进行中 | **feat: add-channel-interactions skill** - 通用渠道交互能力（反应、引用回复、投票、输入指示器、附件转发、群组元数据、/chatid） |
| **#545** | 🔄 进行中 | **Feat: add Composio skill** - 集成 Composio MCP 获取 100+ 预建集成（HuggingFace、GitHub、Gmail、Slack 等） |
| **#679** | 🔄 进行中 | **add sender-allowlist skill** - 发送者白名单、触发 gating 和消息过滤，回应 #678 功能请求 |
| **#670** | 🔄 进行中 | **fix: auto-retry messages when Claude hits an API rate limit** - API 限流时自动重试，改进用户体验 |

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 状态 | 摘要 |
|---|---|---|---|
| **#669** | ⚠️ 中 | 🔄 进行中 | **Scheduled tasks run twice** - 定时任务在容器运行时间超过 60s 轮询间隔时执行两次，已有 fix PR #657 |
| **#673** | 🟢 低 | 🔴 已关闭 | **hq-sync skips new untracked files** - 因全局 git config `status.showUntrackedFiles=no` 导致未跟踪文件无法同步 |
| **#651** | 🟢 优化 | 🔄 进行中 | **reduce docker stop timeout** - Docker 停止超时从 10s 降至 1s，restart 提速约 10 倍 |

**已有 Fix PR：** #657 通过原子 claim 机制修复定时任务重复执行问题，同时关闭 #138、#211、#300、#578、#669 等多个相关 issue。

---

## 6. 功能请求与路线图信号

| Issue/PR | 信号强度 | 需求描述 | 关联 PR |
|---|---|---|---|
| **#384** | ⭐⭐⭐⭐⭐ | **Skill Marketplace/Registry** - 建立官方技能市场，提升可发现性和复用 | 暂无 |
| **#678** | ⭐⭐⭐⭐ | **Sender Allowlist** - 群组/聊天级别的触发权限控制，防 Token 滥用 | #679 (已有 PR) |
| **#663** | ⭐⭐⭐⭐ | **Multi-Runtime Support** - 摆脱 Claude 单一依赖，支持 Codex、Gemini、OpenCode | #663 (进行中) |
| **#683** | ⭐⭐⭐⭐ | **WebSocket IPC** - 用 WebSocket 替换文件轮询，提升通信效率 | #683 (进行中) |
| **#571** | ⭐⭐⭐ | **Feishu Support** - 飞书/ Lark 渠道集成 | #671 (进行中) |
| **#680** | ⭐⭐⭐ | **CLI Send Skill** - 命令行注入消息工具 | #680 (进行中) |

**趋势洞察**：社区对**多渠道集成**（Feishu、Slack 增强）、**多运行时支持**、**访问控制**（白名单）需求强烈，路线图正朝生态扩展和安全性方向演进。

---

## 7. 用户反馈摘要

### 正面反馈
- **#664** 用户高度评价 NanoClaw 的创新设计，感谢项目提供的差异化价值
- **#384** 社区认同"小核心、可审计、随需扩展"的安全理念，期待技能市场
- **#276** Chrome 浏览器技能获得合并，Agent 持久化浏览器能力受期待

### 痛点与需求
- **Token 滥用风险** (#678)：大群组中任何人都能 @ 触发 Agent，导致 API 费用浪费
- **功能边界模糊** (#664)：用户对 NanoClaw vs Claude Code 的差异不清晰，需要更明确的产品定位文档
- **定时任务可靠性** (#669)：任务重复执行导致用户收到重复通知/邮件

### 改进建议
- **#384** 建议建立官方技能注册中心，提升生态可发现性
- **#677** 模型选择功能已落地，用户可灵活切换不同模型

---

## 8. 待处理积压

| 项目 | 类型 | 积压时间 | 状态 | 行动建议 |
|---|---|---|---|---|
| **#384** Skill Marketplace | Issue | 2026-02-22 (10天) | 🟢 开放 | 需官方回应，考虑纳入路线图 |
| **#80** Configurable non-Claude runtimes | Issue | 较老 | 🔄 #663 进行中 | 即将解决 |
| **#499** Channel interaction features | Issue | 较老 | 🔄 #569 进行中 | 通用交互方案正在实现 |
| **#138, #211, #300, #578** 定时任务重复 | Issue | 多月 | 🔄 #657 进行中 | 修复中，即将批量关闭 |

---

*报告生成时间：2026-03-04 | 数据来源：GitHub qwibitai/nanoclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-03-04

## 1. 今日速览

IronClaw 项目在过去 24 小时内保持高度活跃，共产生 57 次事件更新。PR 活动尤为突出（50 条），其中 21 条已合并/关闭，显示出高效的迭代节奏。版本发布频繁，v0.14.0 刚刚发布即有 v0.14.1 正在准备中。安全修复成为本日焦点，多个高危安全问题通过 PR 解决。Issue 层面，5 个 Bug 报告已关闭，表明缺陷修复响应迅速。整体项目健康度良好，开发流程成熟。

---

## 2. 版本发布

### v0.14.0 发布 | 2026-03-04

**更新内容：**

- **remove the okta tool** ([#506](https://github.com/nearai/ironclaw/pull/506))
- **add OAuth support for WASM tools in web gateway** ([#489](https://github.com/nearai/ironclaw/pull/489))
- **fix jobs UI parity for non-sandbox mode** ([#491](https://github.com/nearai/ironclaw/pull/491))

**破坏性变更：** ⚠️ 存在 API breaking changes（见 PR #480）

> 详细 breaking changes 列表请参考 [#480](https://github.com/nearai/ironclaw/pull/480)

---

### v0.14.1 正在准备中

PR [#526](https://github.com/nearai/ironclaw/pull/526) 正在推进，聚焦于：

- 添加 `local-test` skill 和 `Dockerfile.test`
- API 兼容更新

---

## 3. 项目进展

本日合并/关闭的重要 PR：

| PR | 描述 | 状态 |
|---|---|---|
| [#95](https://github.com/nearai/ironclaw/pull/95) | **Venice AI 作为一级 LLM 后端** - 实现完整 VeniceProvider，支持 Venice 特定参数（web search/scrape）| ✅ 已合并 |
| [#14](https://github.com/nearai/ironclaw/pull/14) | **NEAR 密钥管理与交易签名** - 实现混合托管模式 | ✅ 已合并 |
| [#61](https://github.com/nearai/ironclaw/pull/61) | **PostgreSQL 服务加入 CI** - 为集成测试提供 pgvector 支持 | ✅ 已合并 |
| [#523](https://github.com/nearai/ironclaw/pull/523) | **CI 覆盖率增强** - 3 配置特征矩阵 + PostgreSQL + E2E | ✅ 已合并 |
| [#517](https://github.com/nearai/ironclaw/pull/517) | **强制修复提交包含回归测试** - CI 工作流 + git hook | ✅ 已合并 |
| [#525](https://github.com/nearai/ironclaw/pull/525) | **修复 release-plz PR 无法触发 CI** - 改用 GitHub App token | ✅ 已合并 |
| [#524](https://github.com/nearai/ironclaw/pull/524) | **添加 local-test skill 和 Dockerfile.test** | ✅ 已合并 |

**关键功能里程碑：**
- 🎯 **Agent Benchmark System** ([#512](https://github.com/nearai/ironclaw/pull/512)) Phase 1-4 实现中，覆盖 12 个场景
- 🔐 **安全修复** - 5 个安全 PR 正在推进，涵盖 SSE token、随机数生成、WASM 工具描述、DNS rebinding

---

## 4. 社区热点

本日讨论最活跃的 Issues：

### 🔥 #467 Trajectory benchmark system for agent quality evaluation
- **作者:** @zmanian | **评论:** 3 | **状态:** OPEN
- **链接:** https://github.com/nearai/ironclaw/issues/467
- **摘要:** 构建基准测试系统，通过真实 LLM 调用运行用户场景，用两层标准评估轨迹：
  1. 硬断言 — 工具选择、响应内容、成本、延迟的通过/失败检查
  2. LLM-as-judge...
- **分析:** 这是路线图级别的功能需求，与 PR #512 配合推进，标志项目进入成熟度验证阶段。

### #466 Adopt OpenClaw-inspired testing strategy
- **作者:** @zmanian | **状态:** OPEN
- **链接:** https://github.com/nearai/ironclaw/issues/466
- **摘要:** 研究 OpenClaw 的测试架构（三层测试套件、共享生命周期助手），目标学习其 243k LOC 的成熟实践。

---

## 5. Bug 与稳定性

### 已关闭 Bug（5个）| 全部修复 ✅

| Issue | 描述 | 严重程度 | 状态 |
|---|---|---|---|
| [#484](https://github.com/nearai/ironclaw/issues/484) | 手动触发的 routine 输出到错误线程 | **中** | ✅ 已关闭 |
| [#483](https://github.com/nearai/ironclaw/issues/483) | Routine "Run Now" 按钮无 UI 反馈 | **低** | ✅ 已关闭 |
| [#482](https://github.com/nearai/ironclaw/issues/482) | 技能安装失败时创建幽灵 DB 记录 | **中** | ✅ 已关闭 |
| [#481](https://github.com/nearai/ironclaw/issues/481) | 内存搜索结果链接到 chunk UUID 而非源文件路径 | **中** | ✅ 已关闭 |
| [#174](https://github.com/nearai/ironclaw/issues/174) | Possible onboarding bug | **低** | ✅ 已关闭 |

**回归测试覆盖：** PR [#509](https://github.com/nearai/ironclaw/pull/509) 添加了 #481 的回归测试

---

### 正在处理的安全问题 🔐

| PR | 描述 | 风险等级 | 状态 |
|---|---|---|---|
| [#521](https://github.com/nearai/ironclaw/pull/521) | **修复 SSE token 暴露问题** - 短 token 替代 URL query params | 高 | OPEN |
| [#522](https://github.com/nearai/ironclaw/pull/522) | **修复 unsafe env::set_var** - 使用 Mutex 替代 | 高 | OPEN |
| [#520](https://github.com/nearai/ironclaw/pull/520) | **WASM 工具描述/schema 从 capabilities.json 加载** | 高 | OPEN |
| [#519](https://github.com/nearai/ironclaw/pull/519) | **使用 OsRng 替代 thread_rng** - 加密安全 | 高 | OPEN |
| [#518](https://github.com/nearai/ironclaw/pull/518) | **DNS 一次性解析防止 rebinding** | 中 | OPEN |
| [#516](https://github.com/nearai/ironclaw/pull/516) | **要求 SANDBOX_ALLOW_FULL_ACCESS 显式启用** | 中 | OPEN |

---

## 6. 功能请求与路线图信号

### 高优先级功能

| Issue/PR | 功能 | 关联 |
|---|---|---|
| [#467](https://github.com/nearai/ironclaw/issues/467) | **Trajectory benchmark system** - Agent 质量评估 | [#512](https://github.com/nearai/ironclaw/pull/512) 正在实现 |
| [#466](https://github.com/nearai/ironclaw/issues/466) | **OpenClaw 测试策略** - 三层测试套件 | 路线图信号 |
| [#527](https://github.com/nearai/ironclaw/pull/527) | **CLI logs v2** - 日志查看子命令 | 待合并 |

**路线图信号：**
- Venice AI 已成为一级 LLM 后端 (#95)
- NEAR 密钥管理功能就绪 (#14)
- 本地测试能力增强 (#524 + Dockerfile.test)
- CI 基础设施成熟（PostgreSQL、E2E、覆盖率矩阵）

---

## 7. 用户反馈摘要

从 Issues 评论中提取的关键痛点：

1. **Routine 交互问题** - 用户报告手动触发 routine 时输出位置不可预测（#484）、UI 无反馈（#483），影响日常使用体验
2. **技能安装健壮性** - 下载失败导致幽灵记录，用户对"成功安装"的信任受损（#482）
3. **内存搜索可用性** - 搜索结果无法跳转源文件，降低了功能实用性（#481）
4. **入职体验** - 存在潜在的入职 bug（#174），可能影响新用户留存

**正面信号：** 所有报告的 Bug 均在 24 小时内关闭，响应速度快。

---

## 8. 待处理积压

### 长期未响应的 Issue

| Issue | 描述 | 创建时间 | 状态 |
|---|---|---|---|
| [#467](https://github.com/nearai/ironclaw/issues/467) | Trajectory benchmark system | 2026-03-02 | OPEN（正在通过 #512 解决）|
| [#466](https://github.com/nearai/ironclaw/issues/466) | OpenClaw testing strategy | 2026-03-02 | OPEN |

### 待合并的 PR

| PR | 描述 | 风险 | 状态 |
|---|---|---|---|
| [#512](https://github.com/nearai/ironclaw/pull/512) | Agent benchmark system | 中 | OPEN |
| [#527](https://github.com/nearai/ironclaw/pull/527) | CLI logs v2 | 低 | OPEN |
| [#509](https://github.com/nearai/ironclaw/pull/509) | 回归测试 - document_path | 低 | OPEN |
| #521-#516 | 安全修复 (6个) | 高/中 | OPEN |

---

*报告生成时间: 2026-03-04 | 数据来源: GitHub nearai/ironclaw*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-04)

## 1. 今日速览

过去 24 小时内，TinyClaw 项目保持高度活跃，共计 3 个新 Issue 和 2 个待合并 PR，并连续发布 v0.0.8 和 v0.0.9 两个版本，重点解决了 Telegram polling 在网络波动后的稳定性问题。项目社区参与度较高，功能扩展请求涵盖 AI Provider 集成 (Cursor CLI、GitHub Copilot CLI) 及路由器功能规划，显示项目正朝着多平台 AI Agent 协作方向演进。当前 PR 积压 2 个，待合并后将进一步提升项目健壮性和功能边界。

---

## 2. 版本发布

### v0.0.9 (2026-03-04)
**链接**: https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.9

**更新内容**: 修复 Telegram polling 在笔记本睡眠/网络重连后的 409 循环重启问题

**关键修复**:
- `stopPolling()` 未被 await，导致旧 polling 循环与新循环竞争，引发级联 409 冲突
- polling 错误处理和看门狗存在两个问题导致无限 409 循环

**影响范围**: Telegram 用户，网络不稳定场景下的稳定性

---

### v0.0.8 (2026-03-04)
**链接**: https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.8

**更新内容**: 
1. **新增功能**: 在 Discord、Telegram、WhatsApp 渠道客户端中添加 `/restart` 聊天命令，允许用户从任何聊天渠道重启 TinyClaw
2. **新增技能**: 注册 `tinyclaw-admin` 技能
3. **稳定性改进**: 为 Telegram 客户端添加 polling 看门狗和自动恢复机制

**迁移注意事项**: 无破坏性变更，现有用户可直接升级

---

## 3. 项目进展

| PR # | 标题 | 状态 | 推进内容 |
|------|------|------|----------|
| [#159](https://github.com/TinyAGI/tinyclaw/pull/159) | feat: add Cursor CLI as AI provider | OPEN (待合并) | 新增 Cursor CLI (`agent`) 作为第四个 AI Provider，集成 Anthropic (Claude)、OpenAI (Codex)、OpenCode 之外的选项，使拥有 Cursor Pro/Business 订阅的团队可直接复用 |
| [#155](https://github.com/TinyAGI/tinyclaw/pull/155) | fix(telegram): auto-reconnect polling after transient failures | OPEN (待合并) | 修复 Telegram bot 在瞬态网络失败 (ECONNRESET/ETIMEDOUT) 后的自动重连行为，补充看门狗恢复逻辑 |

**评估**: 两个 PR 均为高质量贡献，分别从功能扩展 (AI Provider 多样化) 和稳定性 (网络容错) 角度推进项目，合并后将显著提升用户体验。

---

## 4. 社区热点

| Issue # | 标题 | 热度 | 诉求分析 |
|---------|------|------|----------|
| [#158](https://github.com/TinyAGI/tinyclaw/issues/158) | implement clawrouter | 新开 (0 评论) | 集成 ClawRouter 项目，实现 AI Agent 间的任务路由编排，指向多 Agent 协作场景 |
| [#157](https://github.com/TinyAGI/tinyclaw/issues/157) | implement github copilot cli agents | 新开 (0 评论) | 利用 GitHub Copilot SDK 接入多 provider，支持 ghcp 订阅用户直接使用所有 Copilot 模型 |

**分析**: 两个高优先级功能请求均指向 AI Provider 扩展和生态集成。#157 与当前 #159 PR (Cursor CLI) 形成互补，表明社区对多模型接入有强烈需求。#158 规划路由层，符合 TinyClaw 作为多渠道 AI Agent 协调平台的定位。

---

## 5. Bug 与稳定性

| Issue # | 标题 | 严重程度 | 状态 | 关联 PR |
|---------|------|----------|------|---------|
| [#156](https://github.com/TinyAGI/tinyclaw/issues/156) | tinyclaw start — all channel/queue processes exit immediately on macOS (zsh shell init race condition) | **高** | OPEN | 无 Fix PR |

**问题描述**: 在 macOS (zsh) 环境下执行 `tinyclaw start` 后，所有进程 (Telegram、Queue Processor、Heartbeat) 在启动后数秒内显示 "Not Running"，尽管 tmux 会话本身存活，窗格返回 shell 提示符但无错误输出，重启无效。

**根因怀疑**: zsh shell 初始化竞争条件，可能与进程启动时序或环境变量加载有关。

**建议**: 需维护者介入排查，优先处理影响 macOS 用户基本使用。

---

## 6. 功能请求与路线图信号

| Issue # | 功能描述 | 潜在纳入版本 | 关联 PR |
|---------|----------|--------------|---------|
| [#159](https://github.com/TinyAGI/tinyclaw/pull/159) | Cursor CLI AI Provider | v0.1.0 (预计) | 已在 Review |
| [#157](https://github.com/TinyAGI/tinyclaw/issues/157) | GitHub Copilot CLI Agents | v0.1.x | 需实现 |
| [#158](https://github.com/TinyAGI/tinyclaw/issues/158) | ClawRouter 集成 | 规划中 | 需实现 |

**路线图信号**: 
- **短期**: v0.0.9/v0.0.10 聚焦 Telegram 稳定性修复
- **中期**: v0.1.0 重点扩展 AI Provider 生态 (Cursor、Copilot)
- **长期**: 多 Agent 路由编排 (ClawRouter)

---

## 7. 用户反馈摘要

从 Issue 评论中提炼 (本期无评论数据):

- **痛点**: macOS 启动竞争条件导致进程异常退出 (#156)
- **需求**: 多渠道统一 AI 能力接入、远程重启能力 (已在 v0.0.8 实现)
- **满意度**: Telegram polling 稳定性改进 (v0.0.8/v0.0.9) 获得正面反馈

---

## 8. 待处理积压

| Issue/PR # | 类型 | 积压时长 | 提醒事项 |
|------------|------|----------|----------|
| [#156](https://github.com/TinyAGI/tinyclaw/issues/156) | Bug | 1 天 | macOS 兼容性严重问题，需优先处理 |
| [#158](https://github.com/TinyAGI/tinyclaw/issues/158) | Feature Request | 1 天 | ClawRouter 集成规划，需评估技术方案 |
| [#157](https://github.com/TinyAGI/tinyclaw/issues/157) | Feature Request | 1 天 | Copilot SDK 集成，需确认依赖和实现成本 |
| [#155](https://github.com/TinyAGI/tinyclaw/pull/155) | PR (Fix) | 1 天 | Telegram 自动重连修复，建议合并入 v0.0.10 |
| [#159](https://github.com/TinyAGI/tinyclaw/pull/159) | PR (Feature) | 1 天 | Cursor CLI Provider，建议合并入下一功能版本 |

**维护者建议**: 
1. 优先合并 #155 修复 Telegram 稳定性
2. 尽快响应 #156 macOS 问题，避免用户流失
3. 评估 #157/#158 功能路线，适时发布路线图公告

---

*报告生成时间: 2026-03-04 | 数据来源: GitHub TinyClaw Repository*

</details>