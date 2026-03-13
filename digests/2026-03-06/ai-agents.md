# OpenClaw 生态日报 2026-03-06

> Issues: 500 | PRs: 500 | 覆盖项目: 11 个 | 生成时间: 2026-03-06 00:13 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 | 2026-03-06

## 1. 今日速览

OpenClaw 今日呈现**高活跃度、高压力**态势。24小时内产生 **500 条 Issues 更新**（421 活跃/新开，79 关闭）和 **500 条 PR 更新**（351 待合并，149 已合并/关闭），无新版本发布。社区讨论热度集中在 **v2026.3.2 回归问题**——大量用户报告升级后认证失败、工具失效、WhatsApp/Telegram 渠道异常。维护团队正密集推送修复 PR，但积压的待合并 PR 高达 351 个，代码审查压力显著。整体健康度：**功能迭代活跃，稳定性承压，用户信任处于关键窗口期**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR

| PR | 作者 | 核心改进 |
|:---|:---|:---|
| [#36873](https://github.com/openclaw/openclaw/pull/36873) | @dutifulbob | **Telegram ACP 流程可靠性修复**：解决 topic 绑定、参数解析、`--thread here` 可用性检测及审批失败问题 |
| [#36567](https://github.com/openclaw/openclaw/pull/36567) | @gumadeiras | **插件 Prompt Hook 策略强制执行**：新增 `allowPromptInjection` 运行时验证，阻断未授权 prompt 篡改 |
| [#35634](https://github.com/openclaw/openclaw/pull/35634) | @LuisCharro | **桌面应用崩溃修复**：解决 macOS 右 Option 键语音输入导致的 `Fatal access conflict` 崩溃 |
| [#1768](https://github.com/openclaw/openclaw/pull/1768) | @harmalh | **Docker 最小构建修复**：解决 `memory-core` 插件缺失导致的启动失败 |
| [#1749](https://github.com/openclaw/openclaw/pull/1749) | @trace37labs | **Web UI 节点配置修复**：解决 "Unsupported schema node" 错误 |
| [#33177](https://github.com/openclaw/openclaw/pull/33177) | @montvid | **Mistral 工具调用顺序修复**：解决 Devstral 2 + vLLM 的工具→用户消息排序错误 |

**整体推进**：今日合并聚焦于**渠道稳定性（Telegram/WhatsApp）、安全策略（插件 hook）、桌面体验**三大方向，但 v2026.3.2 引入的认证/工具回归问题仍在紧急修复中。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论 | 核心诉求 |
|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) **i18n 本地化支持** | 77 | 社区强烈希望多语言支持，但维护方明确表示**当前无资源投入**，需社区主导 |
| [#75](https://github.com/openclaw/openclaw/issues/75) **Linux/Windows Clawdbot 桌面应用** | 33 👍58 | 跨平台桌面端需求持续积压，macOS/iOS/Android 已支持，**Linux/Windows 缺口成生态短板** |
| [#7631](https://github.com/openclaw/openclaw/issues/7631) **Windows 插件安装 spawn EINVAL** | 21 | Windows 子进程调用兼容性问题，影响插件生态扩展 |
| [#32245](https://github.com/openclaw/openclaw/issues/32245) **Vertex 嵌入运行回归** | 18 | v2026.3.1 升级后 Vertex 模型崩溃，影响生产环境 |
| [#23538](https://github.com/openclaw/openclaw/issues/23538) **Anthropic setup-token 401 错误** | 18 | OAuth 认证流程与运行时调用脱节，孤立配置文件可复现 |

**背后信号**：用户群体已从早期采用者向**生产环境部署者**扩展，对稳定性、跨平台、企业级认证的需求激增，但项目工程资源明显跟不上用户增长节奏。

---

## 5. Bug 与稳定性

### 🚨 严重问题（生产阻断）

| Issue | 严重程度 | 状态 | 说明 |
|:---|:---|:---|:---|
| [#35077](https://github.com/openclaw/openclaw/issues/35077) **v2026.3.2 完全损坏** | 🔴 阻断 | 开放 | 用户报告"全新安装后 nothing works"，401 认证头缺失、bootstrap 初始化失败 |
| [#34830](https://github.com/openclaw/openclaw/issues/34830) **OpenRouter 401 缺失认证头** | 🔴 阻断 | 开放 | 同 #35077 的 OpenRouter 特化表现，API key 正确但请求未携带头 |
| [#34810](https://github.com/openclaw/openclaw/issues/34810) **文件系统工具突然失效** | 🔴 阻断 | 开放 | 凌晨 4 点 ET 后 agent 失去 exec/read/write 能力，疑似远程配置变更 |
| [#32828](https://github.com/openclaw/openclaw/issues/32828) **全模型误报 API 限流** | 🟠 高 | 开放 | 所有模型显示限流警告，实际 API 正常，Claude Code 对比验证通过 |
| [#32245](https://github.com/openclaw/openclaw/issues/32245) **Vertex 嵌入运行回归** | 🟠 高 | 开放 | Telegram + cron 场景下 "Cannot convert undefined or null to object" |

### ⚠️ 中等问题

| Issue | 说明 |
|:---|:---|
| [#32812](https://github.com/openclaw/openclaw/issues/32812) | Web UI 工具启用后无法点击保存（回归） |
| [#34741](https://github.com/openclaw/openclaw/issues/34741) | WhatsApp "No active listener" 会话失步 |
| [#34298](https://github.com/openclaw/openclaw/issues/34298) | 本地 Web UI 127.0.0.1:18789 返回 "Not Found" |
| [#17613](https://github.com/openclaw/openclaw/issues/17613) | 本地 OpenAI 兼容 LLM 连接超时 |

**修复进展**：[#36896](https://github.com/openclaw/openclaw/pull/36896) 针对 exec 工具 host=node 路由修复，[#36899](https://github.com/openclaw/openclaw/pull/36899) 针对 Webchat 心跳消息显示问题，但**v2026.3.2 核心回归尚无明确修复 PR**。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 纳入可能性评估 |
|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n 支持 | 功能请求 | ⭐⭐☆ 维护方明确拒绝短期投入，需社区 fork |
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows 桌面应用 | 功能请求 | ⭐⭐⭐ 高赞（58），生态关键缺口，但无 PR |
| [#7249](https://github.com/openclaw/openclaw/issues/7249) Azure Claude 支持 | 功能请求 | ⭐⭐⭐ 企业场景刚需，已有明确方案（endpoint + key） |
| [#22201](https://github.com/openclaw/openclaw/pull/22201) 插件自定义上下文管理 | 架构扩展 | ⭐⭐⭐⭐ XL 级 PR 开放中，将解锁插件深度定制 |
| [#35080](https://github.com/openclaw/openclaw/pull/35080) 子代理确定性公告交付 | 可靠性 | ⭐⭐⭐⭐ 修复长期回归，接近合并 |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) `announceTarget` 子代理路由 | 工作流 | ⭐⭐⭐ 多步骤编排刚需，有明确用例 |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) Safe/Unsafe ClawdBot 模式 | 安全架构 | ⭐⭐☆ 建议 Rust 重写，工程量大 |

**下一版本信号**：**子代理可靠性（#35080）、插件系统扩展（#22201）、Azure 企业集成（#7249）** 最可能进入 v2026.3.3 或 v2026.4.0。

---

## 7. 用户反馈摘要

### 😤 痛点（直接引用）

> *"You made openclaw a broken disaster, nothing works"* — @paciox [#35077](https://github.com/openclaw/openclaw/issues/35077)

> *"After doing an ubuntu vm complete reinstall to version 2026.3.2, nothing works"* — 同上

> *"OpenClaw suddenly lost filesystem tools... can no longer create files or run commands"* — @gdecdambra [#34810](https://github.com/openclaw/openclaw/issues/34810)

> *"5x API costs due to ineffective prompt caching"* — @svenssonaxel [#31708](https://github.com/openclaw/openclaw/issues/31708)

### 🎯 使用场景

| 场景 | 代表 Issue |
|:---|:---|
| 本地/自托管 LLM 集成 | #17613, #16151 |
| 多平台桌面部署（团队/企业） | #75 |
| Telegram/WhatsApp 商业客服 | #34741, #36090, #36323 |
| 金融/交易自动化 | #36893（AI trading assistant 技能 PR） |
| 跨模型故障转移（fallback chains） | #13623 |

### ✅ 满意点

- 多模型支持（OpenAI、Anthropic、Google、本地 LLM）的灵活性
- 插件扩展机制（当不遇到 #7631 的 Windows 安装问题时）

---

## 8. 待处理积压

### ⏳ 长期未响应的高价值 Issue

| Issue | 天数 | 风险 |
|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows 桌面应用 | 64 天 | **生态平台缺口**，58 赞无官方回应 |
| [#4349](https://github.com/openclaw/openclaw/issues/4349) TUI 模型选择器显示 600+ 模型 | 35 天 | 每日使用摩擦，4 赞 |
| [#21297](https://github.com/openclaw/openclaw/issues/21297) Control UI 工具访问按钮禁用 | 15 天 | 标记 stale，但影响配置工作流 |
| [#16151](https://github.com/openclaw/openclaw/issues/16151) 自定义 OpenAI 兼容 provider 空响应 | 20 天 | 自托管场景核心问题 |

### 📋 待合并关键 PR 提醒

| PR | 规模 | 阻塞风险 |
|:---|:---|:---|
| [#22201](https://github.com/openclaw/openclaw/pull/22201) 插件上下文管理 | XL | 架构变革，需深度审查 |
| [#35080](https://github.com/openclaw/openclaw/pull/35080) 子代理公告修复 | XL | 回归修复，建议优先 |
| [#34009](https://github.com/openclaw/openclaw/pull/34009)  onboarding 添加搜索 | L | 用户体验改进 |

---

**分析师备注**：OpenClaw 正处于**功能扩张与稳定性危机的交叉点**。v2026.3.2 的回归问题若不能在 48 小时内得到官方回应与热修复，可能引发社区信任滑坡。建议维护团队：1）紧急发布 v2026.3.3-hotfix 解决认证与工具失效；2）建立 LTS 分支策略隔离实验性功能；3）对 #75 等长期需求给出明确的平台扩展路线图。

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告 | 2026-03-06

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"功能扩张与稳定性危机的交叉点"**。头部项目 OpenClaw 因 v2026.3.2 重大回归面临信任考验，而 ZeroClaw、NanoBot 等追赶者借助 MCP 生态扩展与企业级安全架构快速差异化。整体呈现**三极分化**：追求功能完备性的"全能型"（OpenClaw）、专注边缘部署的"轻量型"（PicoClaw）、以及背靠云厂商的"集成型"（LobsterAI/CoPaw）。社区需求正从"能运行"向"生产就绪"跃迁，多租户、可观测性、跨平台稳定性成为新门槛。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布 | 健康度评估 |
|:---|:---:|:---:|:---|:---|
| **OpenClaw** | 500 (421活跃/79关闭) | 500 (351待合并/149已处理) | 无 | 🔴 **承压** - 高积压+严重回归，信任窗口期 |
| **NanoBot** | 29 (25活跃/4关闭) | 65 (42待合并/23已处理) | 无 | 🟡 **B+** - 基础设施债务需清理 |
| **ZeroClaw** | 50 (37关闭/13活跃) | 50 (37待合并/13已处理) | **v0.1.8** | 🟢 **稳健** - 74%解决率，企业转型期 |
| **PicoClaw** | 25 (19活跃/6关闭) | 286 (254待合并/32已处理) | 无 | 🟡 **活跃但失衡** - 88% PR积压，审查瓶颈 |
| **NanoClaw** | 23 (12新开/11关闭) | 50 (42待合并/8已处理) | 无 | 🟡 **冲刺期** - WhatsApp稳定性攻坚 |
| **IronClaw** | 22 (20活跃/2关闭) | 30 (26待合并/4已处理) | **v0.15.0** (3月4日) | 🟢 **质量导向** - 测试覆盖率专项 |
| **LobsterAI** | 26 (14新开/12关闭) | 23 (22合并/1待审) | 无 | 🟢 **高效** - 96% PR合并率 |
| **TinyClaw** | 3 (3活跃) | 3 (3待合并) | 无 | 🔴 **停滞** - 无代码推进，基础设施危机 |
| **CoPaw** | 50 (13新开/37关闭) | 50 (16待合并/34已处理) | **v0.0.5** | 🟢 **健康** - 74% issue关闭率 |
| **ZeptoClaw** | 12 (3活跃/9关闭) | 10 (5待合并/5已处理) | 无 | 🟢 **稳健** - 安全响应迅速 |
| **EasyClaw** | 3 (3新开) | 0 | 无 | 🔴 **低活跃** - 问题暴露期 |

---

## 3. OpenClaw 在生态中的定位

### 核心优势
- **生态位宽度**：唯一实现"多代理路由+插件市场+全渠道覆盖"三位一体的项目，#22201 插件上下文管理 PR 规模达 XL 级，架构扩展性领先
- **社区规模**：500 issues/PRs 日活量超其余项目总和，议题覆盖金融交易、客服自动化等生产场景
- **渠道成熟度**：Telegram/WhatsApp 商业客服场景功能最完备（对比 NanoClaw 的 WhatsApp 系统性故障、CoPaw 的 QQ 渠道 6 天未响应）

### 技术路线差异
| 维度 | OpenClaw | 典型对比（ZeroClaw） |
|:---|:---|:---|
| 架构哲学 | 功能优先，快速迭代 | 安全优先，企业级多租户 |
| 插件系统 | 运行时动态加载（#36567 Prompt Hook 安全加固中） | 外部 MCP 服务器支持（#1380 已落地） |
| 部署形态 | 自托管为主，桌面端 macOS 优先 | 团队/企业共享工作空间（TOTP+RBAC） |
| 稳定性策略 | 主分支直接推送（v2026.3.2 回归根源） | LTS 分支 + 热修复（v0.1.8 安全补丁） |

### 社区规模对比
- **绝对量级**：OpenClaw 日活 issues 是 ZeroClaw 的 10 倍、PicoClaw 的 20 倍
- **质量密度**：ZeroClaw 74% 解决率 vs OpenClaw 16%（79/500），后者审查队列积压 351 PRs 形成"活跃但失序"特征
- **企业渗透**：IronClaw/ZeroClaw 的多租户议题深度（#1856 TOTP+RBAC、#557 Hosted 安全模型）反超 OpenClaw 的个人工具定位

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫度 |
|:---|:---|:---|:---:|
| **MCP 生态扩展** | ZeroClaw(#1380)、NanoBot(#1536)、PicoClaw | 外部 MCP 服务器支持、热重载（SIGHUP）、K8s 重连机制 | 🔥🔥🔥 |
| **多租户/企业安全** | ZeroClaw(#1856)、IronClaw(#557)、ZeptoClaw(#222) | TOTP+RBAC、每模板能力沙箱、凭证隔离 | 🔥🔥🔥 |
| **流式响应体验** | NanoBot(#1522)、PicoClaw(#1101)、CoPaw | 长回复实时显示、"Thinking..." 过程可视化 | 🔥🔥 |
| **跨平台桌面端** | OpenClaw(#75)、NanoClaw(#1577)、LobsterAI | Linux/Windows 原生支持、Windows 子进程兼容 | 🔥🔥 |
| **本地/边缘模型** | NanoClaw(#712)、PicoClaw(#329)、CoPaw(#423) | Ollama/GGUF 深度集成、低成本替代方案 | 🔥🔥 |
| **消息去重/稳定性** | CoPaw(#207)、ZeroClaw(v0.1.8)、OpenClaw(#34741) | 渠道重连不丢消息、Slack 重启不重放 | 🔥🔥 |
| **可观测性/调试** | NanoBot(#1562)、PicoClaw(#39)、IronClaw(#584) | 推理过程透明化、`doctor` 诊断命令、E2E 测试 | 🔥 |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构特征 |
|:---|:---|:---|:---|
| **OpenClaw** | 个人 AI 助手"瑞士军刀" | 技术极客、自动化爱好者 | TypeScript 单体架构，插件运行时加载，功能覆盖最全 |
| **ZeroClaw** | 企业级多租户 AI 基础设施 | 团队/企业 IT 管理员 | Rust 核心，MCP 外部化，安全策略强制（S0 级响应） |
| **NanoBot** | 多提供商消息机器人框架 | 开发者/小团队 | Python 异步架构，渠道适配层丰富，企业功能追赶中 |
| **PicoClaw** | 边缘/嵌入式 AI 终端 | IoT 开发者、RISC-V 社区 | Go 语言，<64MB RAM 目标，OpenWrt 原生支持 |
| **IronClaw** | NEAR 生态托管 Agent 平台 | Web3 开发者、云服务用户 | Rust + WASM，Extensions 插件系统，Hosted/Local 双模 |
| **LobsterAI** | 有道智云集成 IDE 助手 | 中文开发者、企业私有化 | Electron 桌面端，国产模型深度适配，VM 沙箱隔离 |
| **CoPaw** | 国内渠道优先的 Agent 框架 | 中国企业微信/钉钉用户 | Python，飞书/钉钉/QQ 原生支持，多模态消息优化 |
| **ZeptoClaw** | 安全优先的轻量 Agent 内核 | 安全敏感型开发者 | Rust 统一内核，污点追踪，SSRF 防护内置 |
| **TinyClaw** | 极简 CLI 工具 | 脚本化用户 | tmux 进程管理，Avian AI 扩展中（当前停滞） |
| **EasyClaw** | 百炼生态封装层 | 阿里云用户 | 配置迁移自动化，国产模型能力完整映射 |

---

## 6. 社区热度与成熟度分层

### 🔥 快速迭代阶段（功能扩张）
| 项目 | 特征 | 风险 |
|:---|:---|:---|
| **OpenClaw** | 500+ 日活，XL 级架构 PR 并行 | 稳定性危机，v2026.3.2 回归未解 |
| **PicoClaw** | 286 PRs 日提交，RISC-V/OpenWrt 激进优化 | 88% 积压率，竞态/死锁 Bug 激增 |
| **NanoClaw** | 核心贡献者单日 5 PR 冲刺 WhatsApp 修复 | 配置机制脆弱，环境变量冲突反复 |

### 🟢 质量巩固阶段（生产就绪）
| 项目 | 特征 | 关键动作 |
|:---|:---|:---|
| **ZeroClaw** | v0.1.8 安全补丁，90% S0/S1 Bug 当日关闭 | MCP 热重载、多代理路由规划 |
| **IronClaw** | v0.15.0 后测试覆盖率专项，46 个 E2E 测试 | 多租户链条 PR 合并，Docker 资源泄漏修复 |
| **CoPaw** | v0.0.5 渠道管理系统重构，74% issue 关闭率 | QQ 渠道文档补齐，会话状态持久化 |
| **LobsterAI** | 96% PR 合并率，Windows 兼容性攻坚 | OpenAI Responses API 支持，上下文管理 |

### 🟡 转型/停滞阶段
| 项目 | 状态 | 关键挑战 |
|:---|:---|:---|
| **NanoBot** | 企业功能追赶，基础设施债务清理 | GitHub Copilot 提供商失效，飞书 WebSocket 回归 |
| **ZeptoClaw** | 安全架构收敛，崩溃隔离补齐 | 非 Telegram 通道 panic 隔离缺失 |
| **TinyClaw** | 基础设施危机显性化 | 零代码推进，macOS 崩溃未响应 |
| **EasyClaw** | 问题暴露期，配置迁移债务 | 零 PR 活动，升级体验断裂 |

---

## 7. 值得关注的趋势信号

### 信号一：MCP 成为事实标准，但实现路径分化
> **证据**：ZeroClaw #1380（外部 MCP 已落地）、NanoBot #1536（K8s 重连）、PicoClaw 远程 Skill #329  
> **价值**：智能体工具生态正从"内置优先"转向"外部注册表优先"，降低厂商锁定，但需解决热重载、版本控制、离线降级等运维复杂度

### 信号二："推理过程可视化"成为体验基线
> **证据**：NanoBot #1562（"Why is there nothing after the colon?"）、CoPaw #631（按渠道控制 `<think>` 显示）、IronClaw reasoning_content 泄漏修复  
> **价值**：用户不再满足于黑盒结果，可观测性设计需前置到架构层，而非事后补丁

### 信号三：国产模型/边缘部署催生"双轨架构"
> **证据**：NanoClaw #712（Ollama 技能）、PicoClaw SearXNG 替代商业搜索、LobsterAI 有道智云 #276、CoPaw GGUF #423  
> **价值**：成本敏感与数据合规驱动下，"云端大模型编排 + 本地小模型执行"的混合架构成为标配，框架需支持动态路由与降级

### 信号四：安全从"功能"变为"架构"
> **证据**：ZeptoClaw 统一安全内核 #256、ZeroClaw S0 级响应机制、IronClaw #557 多租户安全模型 RFC  
> **价值**：SSRF、提示注入、工具逃逸等攻击面需在内核层统一防护，而非渠道层重复实现

### 信号五：渠道体验差距成为迁移驱动力
> **证据**：OpenClaw WhatsApp/Telegram 稳定性危机 vs ZeroClaw v0.1.8 Slack 消息重放修复、CoPaw QQ 渠道 6 天未响应 #91  
> **价值**：企业用户评估框架时，"目标渠道是否生产可用"的权重已超过"功能丰富度"

---

**分析师结论**：2026 年 Q1 末，个人 AI 助手生态进入**"后功能竞赛"阶段**。OpenClaw 的 v2026.3.2 危机是转折点——社区开始用"生产环境可用性"而非"Demo 惊艳度"投票。建议开发者：优先评估 ZeroClaw（企业安全）、ZeptoClaw（安全内核）、CoPaw（国内渠道）的稳定性记录；关注 IronClaw 的测试覆盖率专项作为质量标杆；对 PicoClaw 的边缘创新保持观察但审慎投入生产。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-03-06

## 1. 今日速览

NanoBot 今日保持**高活跃度**，24小时内产生 **29 条 Issues 更新**（25 条活跃/新开，4 条关闭）和 **65 条 PR 更新**（42 条待合并，23 条已合并/关闭），无新版本发布。社区焦点集中在**多平台稳定性修复**（飞书、Telegram、Discord）、**LLM 提供商生态扩展**（Venice.ai、Kilo AI、Mistral）以及**企业级功能**（多实例部署、安全框架、MCP 重连机制）。项目正从"功能快速迭代期"向"生产稳定性优化期"过渡，CLI 信号处理、Windows 兼容性等基础设施问题开始浮现。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR（23 条中的关键项）

| PR | 作者 | 核心贡献 | 影响 |
|:---|:---|:---|:---|
| [#1522](https://github.com/HKUDS/nanobot/pull/1522) | @SergioSV96 | **Telegram 流式消息支持** — 新增中间草稿状态实时显示，修复 `reasoning_content`/`thinking_blocks` 提取 | 大幅提升长回复体验，降低用户等待焦虑 |
| [#1384](https://github.com/HKUDS/nanobot/pull/1384) | @zerone0x | **飞书多表格消息拆分** — 解决 `11310: card table number over limit` 错误 | 修复 #1382，飞书长消息可靠性↑ |
| [#1400](https://github.com/HKUDS/nanobot/pull/1400) | @chengyongru | **信号处理完善** — SIGTERM/SIGHUP 处理 + SIGPIPE 忽略， `os._exit` → `sys.exit` | Linux 优雅关闭、日志完整性 |
| [#1578](https://github.com/HKUDS/nanobot/pull/1578) | @Michael-lhh | **Telegram 权限优化** — 未授权用户不再显示"typing..."指示器 | 隐私与体验细节 |
| [#1297](https://github.com/HKUDS/nanobot/pull/1297) | @dmahurin | **Web Chat 通道** — Flask + HTML/JS 多会话持久化界面 | 全新交互入口，降低部署门槛 |
| [#995](https://github.com/HKUDS/nanobot/pull/995) + [#996](https://github.com/HKUDS/nanobot/pull/996) | @fat-operator | **Fireworks AI 流式支持** + 专用提供商 | 大模型长输出场景（>4096 tokens） |
| [#1019](https://github.com/HKUDS/nanobot/pull/1019) | @fat-operator | **Venice.ai 提供商**（基础实现，今日有扩展 PR） | 隐私优先的推理 API 接入 |

**整体进展评估**：今日合并 PR 覆盖**用户体验**（流式输出）、**平台兼容性**（飞书、Telegram）、**基础设施健壮性**（信号处理）三大维度，项目向生产就绪迈出实质性一步。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 深层分析 |
|:---|:---|:---:|:---|:---|
| 1 | [#235](https://github.com/HKUDS/nanobot/issues/235) "I've completed processing but have no response to give" | 8 | DeepSeek + Telegram 场景下 bot 突然进入"空回复"状态 | **长期悬案**（1个月+），用户已提供日志但根因未明，疑似 DeepSeek API 行为变化或上下文管理缺陷 |
| 2 | [#1481](https://github.com/HKUDS/nanobot/issues/1481) GitHub Copilot tool_calls 不工作（多选响应） | 8 | Copilot/Claude-sonnet-4.6 持续返回 "I'm on it" 不执行工具 | **高优先级阻塞问题**，影响 Copilot 作为主力提供商的可用性，与 #1554（call_id 长度错误）可能同源 |
| 3 | [#1557](https://github.com/HKUDS/nanobot/issues/1557) 飞书 WebSocket "event loop already running" | 5 | main 分支飞书完全不可用 | **回归问题**， asyncio 事件循环冲突，需紧急修复 |
| 4 | [#1562](https://github.com/HKUDS/nanobot/issues/1562) 无法显示完整 thinking/tool call 过程 | 5 | 推理过程可视化需求 | 已关闭，但反映用户对**可观测性**的强烈需求 |

**热点趋势**：GitHub Copilot 提供商的稳定性成为最大痛点（2 个高活跃 Issue），飞书企业用户遭遇回归故障，社区对**推理过程透明化**的呼声持续高涨。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 功能完全损坏** | [#1557](https://github.com/HKUDS/nanobot/issues/1557) | 飞书 WebSocket `event loop already running` — main 分支飞书通道瘫痪 | 开放 | 无 |
| 🔴 **P0** | [#1577](https://github.com/HKUDS/nanobot/issues/1577) | CLI `nanobot agent` 崩溃：`signal` 模块无 `SIGHUP` — **Windows 不兼容** | 开放 | 无（#1400 引入的回归）|
| 🟡 **P1 - 主要提供商失效** | [#1481](https://github.com/HKUDS/nanobot/issues/1481) | GitHub Copilot tool_calls 多选响应失败 | 开放 | 无 |
| 🟡 **P1** | [#1554](https://github.com/HKUDS/nanobot/issues/1554) | GitHub Copilot `call_id` 长度错误 | 开放 | 无 |
| 🟡 **P1** | [#1589](https://github.com/HKUDS/nanobot/issues/1589) | Telegram gateway 异常，无法与主 agent 通信 | 开放 | 无 |
| 🟡 **P1** | [#235](https://github.com/HKUDS/nanobot/issues/235) | DeepSeek "无响应" 状态（1个月+） | 开放 | 无 |
| 🟢 **P2 - 配置/文档问题** | [#1587](https://github.com/HKUDS/nanobot/issues/1587) | `--config` 参数文档声称存在但实际缺失 | 开放 | [#1581](https://github.com/HKUDS/nanobot/pull/1581) 待合并 |
| 🟢 **P2** | [#1519](https://github.com/HKUDS/nanobot/issues/1519) | uv 环境 SSL 证书验证失败（有解决方案） | 开放 | 文档待更新 |

**关键风险**：#1577 揭示 **Windows 平台 CLI 完全不可用**，系 #1400 合并后的回归；飞书企业用户因 #1557 被迫回退版本。

---

## 6. 功能请求与路线图信号

### 高价值功能请求（含关联 PR）

| 需求 | Issue/PR | 用户场景 | 纳入可能性 |
|:---|:---|:---|:---|
| **多实例部署** — `--config` 参数支持 | [#1581](https://github.com/HKUDS/nanobot/pull/1581) | 多团队/多租户隔离部署 | ⭐⭐⭐⭐⭐ PR 已提交，今日高优先级 |
| **MCP 连接重连机制** | [#1536](https://github.com/HKUDS/nanobot/issues/1536) | K8s 环境下 MCP server 漂移恢复 | ⭐⭐⭐⭐⭐ 生产刚需，待 PR |
| **CLI 流式输出** | [#1547](https://github.com/HKUDS/nanobot/issues/1547) | 长代码生成/报告场景减少等待焦虑 | ⭐⭐⭐⭐⭐ 体验核心，Telegram 已实现可复用 |
| **单消息模型路由** — `@prefix` | [#1530](https://github.com/HKUDS/nanobot/issues/1530) | 成本优化：简单问题用轻量模型 | ⭐⭐⭐⭐ 架构改动中等 |
| **ACIP 安全框架** | [#1588](https://github.com/HKUDS/nanobot/pull/1588) | 企业安全合规、提示注入防护 | ⭐⭐⭐⭐ 安全敏感场景 |
| **LLM 重试与限流处理** | [#1558](https://github.com/HKUDS/nanobot/issues/1558) + [#1580](https://github.com/HKUDS/nanobot/pull/1580) | Z.ai 等限流提供商的可靠性 | ⭐⭐⭐⭐⭐ PR #1580 已提交 |
| **Python 程序化调用通道** | [#1582](https://github.com/HKUDS/nanobot/pull/1582) | 嵌入其他 Python 应用 | ⭐⭐⭐⭐ 架构扩展性 |
| **OpenAI Codex 自定义 Responses 端点** | [#1549](https://github.com/HKUDS/nanobot/pull/1549) | 私有化/兼容端点接入 | ⭐⭐⭐⭐ 配置即代码 |
| **Whisper Turbo 语音转录** | [#1584](https://github.com/HKUDS/nanobot/issues/1584) | 降低语音消息延迟 | ⭐⭐⭐ 配置变更即可 |

**路线图信号**：企业级功能（多实例、安全框架、MCP 健壮性）正在超越消费级功能成为社区焦点，预示项目用户群体向 B 端迁移。

---

## 7. 用户反馈摘要

### 真实痛点

| 痛点 | 来源 | 典型表述 |
|:---|:---|:---|
| **"黑盒"推理过程** | [#1562](https://github.com/HKUDS/nanobot/issues/1562) | "Why is there nothing after the colon?" — 用户看不到模型思考过程 |
| **提供商生态碎片化** | [#1481](https://github.com/HKUDS/nanobot/issues/1481), [#1554](https://github.com/HKUDS/nanobot/issues/1554), [#1590](https://github.com/HKUDS/nanobot/issues/1590) | Copilot "stupid"、Ollama "failing"、DeepSeek "no response" — 每个提供商都有独特坑 |
| **飞书体验落差** | [#1548](https://github.com/HKUDS/nanobot/issues/1548) | "不如 OpenClaw 美观" — 卡片格式 vs 富文本的审美争议 |
| **成本焦虑** | [#1530](https://github.com/HKUDS/nanobot/issues/1530) | "burning through credits on basic config questions" |
| **K8s 运维痛苦** | [#1536](https://github.com/HKUDS/nanobot/issues/1536) | "only way is to restart from scratch" — MCP 断连无自愈 |

### 满意点

- Telegram 流式输出（[#1522](https://github.com/HKUDS/nanobot/pull/1522)）获得隐性认可
- 社区对多提供商支持的扩展速度表示肯定

---

## 8. 待处理积压

### 需维护者关注的高价值/长期 Issue

| Issue | 创建时间 | 当前状态 | 提醒 |
|:---|:---|:---|:---|
| [#235](https://github.com/HKUDS/nanobot/issues/235) DeepSeek "无响应" | 2026-02-06 | 开放，8 评论，6 👍 | **1个月无根因定位**，需核心开发者介入或标记 `needs-investigation` |
| [#845](https://github.com/HKUDS/nanobot/issues/845) `restrictToWorkspace` 沙箱失效 | 2026-02-19 | 开放，2 评论 | **安全相关**，shell 命令可绕过工作区限制，需安全审计 |
| [#1121](https://github.com/HKUDS/nanobot/issues/1121) 超时未触发 fallback | 2026-02-24 | 开放，1 评论，2 👍 | 可靠性核心功能，与 #1580 重试机制可协同解决 |
| [#126](https://github.com/HKUDS/nanobot/pull/126) GitHub Actions Docker 镜像 | 2026-02-05 | 开放，手动推送已验证 | 官方镜像发布流程，降低用户部署门槛 |

---

**日报生成时间**：2026-03-06  
**数据来源**：GitHub API 快照  
**项目健康度评分**：🟡 **B+**（高活跃度，基础设施债务需清理）

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 | 2026-03-06

## 1. 今日速览

ZeroClaw 项目今日呈现**高活跃度、高收敛性**特征：24小时内 50 个 Issues 中 37 个已关闭（74% 解决率），50 个 PR 中 13 个已合并/关闭，同时发布 v0.1.8 安全修复版本。社区讨论焦点集中在 **MCP 生态扩展**（外部服务器支持）、**多租户安全架构**（TOTP/权限）及 **渠道稳定性**（Discord/Matrix/Slack）。值得注意的是，项目正经历从"单用户工具"向"企业级多租户平台"的架构演进，相关 Issue 讨论深度显著。

---

## 2. 版本发布

### [v0.1.8](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.8) - 安全与稳定性修复

| 变更项 | 说明 | 影响 |
|--------|------|------|
| `fix(security)` | 允许 `allowed_commands` 中显式指定可执行路径 | 解决安全策略过于严格导致的工具调用失败 |
| `fix(slack)` | 防止重启后重放旧消息 | 关键稳定性修复，避免消息风暴 |
| `fix(config)` | 配置解析优化（摘要截断） | 提升配置健壮性 |

**迁移建议**：Slack 渠道用户务必升级，重启后不再出现历史消息重复推送问题；使用自定义命令路径的用户需检查 `allowed_commands` 配置格式。

---

## 3. 项目进展

### 今日核心合并方向

| 领域 | 进展 | 代表 PR/Issue |
|------|------|---------------|
| **MCP 生态** | 外部 MCP 服务器支持正式落地（npm/远程） | [#1380](https://github.com/zeroclaw-labs/zeroclaw/issues/1380) |
| **安全架构** | 多用户 TOTP + RBAC 权限系统完成设计闭环 | [#1856](https://github.com/zeroclaw-labs/zeroclaw/issues/1856) |
| **渠道修复** | Discord 图片发送、Matrix E2EE、Slack 消息重放等 5+ 渠道问题集中修复 | [#1381](https://github.com/zeroclaw-labs/zeroclaw/issues/1381), [#2702](https://github.com/zeroclaw-labs/zeroclaw/issues/2702) |
| **流式架构** | 渠道草稿流式传输与 Provider 流式消费对齐 | [#2721](https://github.com/zeroclaw-labs/zeroclaw/issues/2721), [#2869](https://github.com/zeroclaw-labs/zeroclaw/issues/2869) |
| **企业集成** | LiteLLM 作为注册 Provider 别名、Nextcloud Talk webhook 格式兼容 | [#2602](https://github.com/zeroclaw-labs/zeroclaw/issues/2602), [#2698](https://github.com/zeroclaw-labs/zeroclaw/issues/2698) |

**里程碑意义**：MCP 外部支持 + 多用户架构标志着 ZeroClaw 从"个人 AI 助手"向"团队/企业级 AI 基础设施"转型，与 OpenClaw 的多代理路由能力形成差异化竞争。

---

## 4. 社区热点

### 🔥 讨论最活跃（评论数 TOP 5）

| Issue | 评论 | 核心诉求 | 状态 |
|-------|------|---------|------|
| [#1380 External MCP Server Support](https://github.com/zeroclaw-labs/zeroclaw/issues/1380) | 12 | **生态开放性**：用户强烈要求支持 npm 包和远程 MCP 服务器，避免被内置工具限制 | ✅ 已关闭 |
| [#1856 Multi-User TOTP + RBAC](https://github.com/zeroclaw-labs/zeroclaw/issues/1856) | 8 | **企业安全**：共享工作空间场景下的 per-user 认证与细粒度权限 | ✅ 已关闭 |
| [#1381 Discord 图片发送失败](https://github.com/zeroclaw-labs/zeroclaw/issues/1381) | 6 | **渠道 parity**：要求与 OpenClaw 功能对齐 | ✅ 已关闭 |
| [#1575 Gateway Dashboard 代理访问错误](https://github.com/zeroclaw-labs/zeroclaw/issues/1575) | 5 | **Web UI 稳定性**：`crypto.randomUUID` 浏览器兼容问题 | ✅ 已关闭 |
| [#2486 Skill 相互调用警告](https://github.com/zeroclaw-labs/zeroclaw/issues/2486) | 5 | **跨目录 Skill 安全模型**：S0 级安全风险 | ✅ 已关闭 |

### 背后诉求分析
- **企业用户崛起**：TOTP/RBAC、审计日志、多代理路由等需求集中爆发，暗示用户群体从个人开发者向团队渗透
- **生态互操作性**：MCP、LiteLLM、Nextcloud 等集成诉求反映"不重新造轮子"的务实态度
- **渠道体验一致性**：Discord/Slack/Matrix 等渠道的功能 parity 成为基础门槛

---

## 5. Bug 与稳定性

### 按严重程度排列

| 级别 | 问题 | 状态 | Fix PR |
|------|------|------|--------|
| **S0 - 数据丢失/安全风险** | [#2486](https://github.com/zeroclaw-labs/zeroclaw/issues/2486) Skill 跨目录调用触发不安全警告 | ✅ 已关闭 | 已修复 |
| **S0** | [#2600](https://github.com/zeroclaw-labs/zeroclaw/issues/2600) Raspberry Pi 3B+ 无法调用工具（安全沙箱） | ✅ 已关闭 | 已修复 |
| **S0** | [#2679](https://github.com/zeroclaw-labs/zeroclaw/issues/2679) 审计日志配置无效 | ✅ 已关闭 | 已修复 |
| **S1 - 工作流阻断** | [#2782](https://github.com/zeroclaw-labs/zeroclaw/issues/2782) Discord 中无法文件写入/编辑 | ✅ 已关闭 | 已修复 |
| **S1** | [#2784](https://github.com/zeroclaw-labs/zeroclaw/issues/2784) `require_pairing = false` 仍要求配对码 | ✅ 已关闭 | 已修复 |
| **S1** | [#2702](https://github.com/zeroclaw-labs/zeroclaw/issues/2702) Matrix OTK 冲突循环导致 E2EE 失败 | ✅ 已关闭 | 已修复 |
| **S1** | [#2693](https://github.com/zeroclaw-labs/zeroclaw/issues/2693) Mistral 422 Extra inputs 错误 | ✅ 已关闭 | 已修复 |
| **S1** | [#2551](https://github.com/zeroclaw-labs/zeroclaw/issues/2551) OpenAI Codex websocket 失败无 SSE 回退 | ✅ 已关闭 | 已修复 |
| **S1** | [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) `channel_ack_config` 函数 schema 无效 | 🟡 **仍开放** | 待修复 |
| **S1** | [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) 飞书渠道无法启动 | 🟡 **仍开放** | 待修复 |

**风险评估**：今日 S0/S1 级 Bug 关闭率高达 90%，但 **飞书渠道和函数 schema 验证** 两个 S1 问题仍开放，可能影响中国企业用户 adoption。

---

## 6. 功能请求与路线图信号

| 功能 | 来源 | 成熟度 | 下一版本可能性 |
|------|------|--------|--------------|
| **MCP 热重载（SIGHUP）** | [#2894](https://github.com/zeroclaw-labs/zeroclaw/pull/2894), [#2893](https://github.com/zeroclaw-labs/zeroclaw/pull/2893) | 🔨 PR 已提交 | ⭐⭐⭐⭐⭐ 极高 |
| **多代理路由（OpenClaw 式）** | [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | 💡 需求阶段 | ⭐⭐⭐⭐☆ 高（👍 3） |
| **按需 Skill 加载** | [#2703](https://github.com/zeroclaw-labs/zeroclaw/issues/2703) | ✅ 已关闭 | 已实现 |
| **Copilot Vision 支持** | [#2608](https://github.com/zeroclaw-labs/zeroclaw/pull/2608) | 🔨 PR 开放 | ⭐⭐⭐⭐☆ 高 |
| **Shell 工具重定向策略** | [#2779](https://github.com/zeroclaw-labs/zeroclaw/issues/2779) | ✅ 已关闭 | 已修复 |
| **v0.1.9 发布准备** | [#2890](https://github.com/zeroclaw-labs/zeroclaw/pull/2890) | 🔨 PR 开放 | ⭐⭐⭐⭐⭐ 即将发布 |

**路线图信号**：v0.1.9 将带来**中性化 onboarding**（无默认 OpenRouter）、**Electric Blue 品牌仪表盘**，以及 MCP 热重载能力，标志着项目从"功能堆砌"进入"体验打磨"阶段。

---

## 7. 用户反馈摘要

### 💬 真实痛点（来自 Issue 评论）

> *"The tools should be more mature and wider support"* — @vuthanhtrung2010 on MCP 生态

> *"ZeroClaw's current TOTP and security model assumes a single operator per workspace"* — @htarrido-picart 指出企业场景的根本限制

> *"LLMs are trained on millions of examples with `2>&1`"* — @sghael 揭示 Shell 工具 UX 与 AI 行为模式的冲突

> *"10s downtime, all channels disconnected"* — MCP 热重载 PR 描述当前运维痛苦

### 😊 满意点
- 快速响应：安全相关问题（S0）平均 1-2 天内关闭
- 架构演进：MCP 支持、多用户设计体现长期 vision

### 😤 不满点
- 渠道 parity：Discord 图片发送、飞书稳定性落后于竞品
- 配置体验：审计日志、配对码等配置"看似生效实则无效"
- 边缘设备：Raspberry Pi 等 ARM 设备支持仍存摩擦

---

## 8. 待处理积压

### ⚠️ 需维护者关注

| Issue/PR | 类型 | 滞留时间 | 风险 |
|----------|------|---------|------|
| [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) `channel_ack_config` schema 无效 | S1 Bug | 3 天 | 阻断代理对话 |
| [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) 飞书渠道无法启动 | S2 Bug | 3 天 | 中国企业用户流失 |
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) 多代理路由 | Feature | 1 天 | 高 👍 需求，需 roadmap 回应 |
| [#2608](https://github.com/zeroclaw-labs/zeroclaw/pull/2608) Copilot Vision 支持 | PR | 3 天 | 中等风险，需 review |

### 建议行动
1. **优先修复** #2487 和 #2494，解除 S1/S2 级用户阻断
2. **官方回应** #2767 多代理路由需求，明确与 OpenClaw 的竞争/协作定位
3. **加速 review** MCP 热重载 PR（#2894/#2893），这是 v0.1.9 的关键卖点

---

*日报生成时间：2026-03-06 | 数据来源：GitHub API*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-03-06

## 1. 今日速览

PicoClaw 今日保持**极高活跃度**，24小时内产生 **25 条 Issues 更新**（19 活跃/新开，6 关闭）和 **286 条 PR 更新**（254 待合并，32 已合并/关闭）。项目处于**密集迭代期**，社区贡献热情高涨，但待合并 PR 积压严重（88.8% 未合并），维护者 review 压力显著。核心进展集中在**通道扩展**（IRC、Signal、Telegram 流式响应）、**配置系统加固**（环境变量支持、TUI 竞态修复）及**安全增强**（shell 工具 AST 化改造）。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 影响 |
|:---|:---|:---|:---|
| [#1145](https://github.com/sipeed/picoclaw/pull/1145) | @Esubaalew | **修复**：全局 skills 开关被忽略的问题，现在 `tools.skills.enabled=false` 会正确禁用 `find_skills`/`install_skill` | 配置行为一致性 |
| [#534](https://github.com/sipeed/picoclaw/pull/534) | @truongvinht | **新增**：SearXNG 作为第三方搜索后端，解决 DuckDuckGo 封禁数据中心 IP、Brave 取消免费 tier 的问题 | 搜索可靠性提升 |
| [#1104](https://github.com/sipeed/picoclaw/issues/1104) | @cornjosh | **文档修复**：`skills install --registry` 帮助文本误导性示例已修正 | 开发者体验 |

### 里程碑意义
- **搜索基础设施多元化**：SearXNG 加入标志着 PicoClaw 从依赖商业/易变 API 转向**自托管友好**架构，对边缘部署（RISC-V/OpenWrt 场景）至关重要。
- **配置系统治理加强**：全局开关修复 + 环境变量支持（#1155）显示项目正从"功能堆砌"转向**企业级可管理性**。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 核心诉求 | 信号解读 |
|:---|:---:|:---|:---|
| [#100](https://github.com/sipeed/picoclaw/issues/100) | **10** | OpenRouter 模型返回 "I've completed processing but have no response" | **已关闭** — 模型/provider 兼容性仍是边缘部署痛点 |
| [#39](https://github.com/sipeed/picoclaw/issues/39) | 4 | 请求 `picoclaw doctor` 诊断命令 | 运维可观测性需求强烈，对标 OpenClaw |
| [#329](https://github.com/sipeed/picoclaw/issues/329) | 4 | **远程引用 Skill 模型**（URL 按需获取，替代本地 SKILL.md） | 技能生态治理痛点：磁盘膨胀、版本碎片化 |
| [#738](https://github.com/sipeed/picoclaw/issues/738) | 4 | **用户可配置 Hooks**（pre/post 工具执行、消息事件） | 扩展性需求：支持 self-improving-agent 等高级场景 |

### 热点分析
- **#329 远程 Skill 模型** 与 **#714**（技能安装 CLI 重构）形成协同，可能推动技能系统从"文件系统为中心"转向"URL/注册表为中心"的架构升级。
- **#738 Hooks 系统** 是平台化关键：当前技能多为被动工具，Hooks 可实现主动编排、A/B 测试、合规审计等企业场景。

---

## 5. Bug 与稳定性

### 高优先级（P0/P1）

| Issue | 严重度 | 描述 | 状态 |
|:---|:---:|:---|:---|
| [#1150](https://github.com/sipeed/picoclaw/issues/1150) | **P0** | **Pool factory panic 导致永久死锁**：`getOrCreate()` panic 后未清理 `p.creating` 和 `inflight.done` | 🔴 无 fix PR |
| [#1151](https://github.com/sipeed/picoclaw/issues/1151) | **P1** | **TUI PHI tab 配置竞态**：多 tab 并发读写配置，且 `HomePath` 未转义注入 shell | 🔴 无 fix PR |
| [#1154](https://github.com/sipeed/picoclaw/issues/1154) | P1 | OpenRouter + Anthropic 流式错误："streaming is required for operations >10min" | 🟡 需 provider 层修复 |
| [#1153](https://github.com/sipeed/picoclaw/issues/1153) | P1 | 重复 `model_name` 负载均衡失效：总是解析到第二条，忽略第一、三条 | 🔴 配置系统回归 |

### 中优先级（P2）

| Issue | 描述 | 关联 PR |
|:---|:---|:---|
| [#1148](https://github.com/sipeed/picoclaw/issues/1148) | Commit `6c8866d` 破坏无 channel 本地使用场景 | 需 revert 或条件编译 |
| [#1126](https://github.com/sipeed/picoclaw/issues/1126) | Cron 定时任务静默变为一次性任务 | 已有 PR #1126 待 review |
| [#1102](https://github.com/sipeed/picoclaw/issues/1102) | DeepSeek `max_tokens` 范围错误（>8192） | Provider 适配层 |
| [#1103](https://github.com/sipeed/picoclaw/issues/1103) | ModelScope API 解析 `deepseek-ai/DeepSeek-V3.2` 协议错误 | URL 解析 bug |

### 稳定性评估
- **并发/竞态类 bug 激增**（#1150, #1151, #1153），反映 v0.2.0 后架构复杂度上升，测试覆盖不足。
- **边缘部署场景**（RISC-V 256MB RAM、无 channel、本地 Ollama）回归风险高，与主流通路测试存在 gap。

---

## 6. 功能请求与路线图信号

### 高可行性（已有 PR 或明确路径）

| 功能 | Issue/PR | 成熟度 | 预计版本 |
|:---|:---|:---:|:---|
| **IRC 通道支持** | [#1137](https://github.com/sipeed/picoclaw/issues/1137) / [#1138](https://github.com/sipeed/picoclaw/pull/1138) | 🟢 PR 已提交 | v0.3.0 |
| **Signal 通道** | [#630](https://github.com/sipeed/picoclaw/pull/630) | 🟡 长期 open，需 rebase | v0.3.x |
| **Telegram 流式响应** | [#1101](https://github.com/sipeed/picoclaw/pull/1101) | 🟢 PR 已提交 | v0.2.1 |
| **运行时模型切换** | [#1093](https://github.com/sipeed/picoclaw/pull/1093) / [#949](https://github.com/sipeed/picoclaw/pull/949) | 🟢 双 PR 竞争，需协调 | v0.2.1 |
| **Shell 工具 AST 安全加固** | [#1097](https://github.com/sipeed/picoclaw/pull/1097) | 🟢 架构级改进 | v0.3.0 |

### 架构级需求（需 RFC）

| 功能 | Issue | 技术挑战 | 路线图信号 |
|:---|:---|:---|:---|
| **远程 Skill 模型** | [#329](https://github.com/sipeed/picoclaw/issues/329) | 版本控制、离线降级、签名验证 | 技能系统 2.0 核心 |
| **用户 Hooks 系统** | [#738](https://github.com/sipeed/picoclaw/issues/738) | 事件定义、沙箱安全、性能隔离 | 平台化关键 |
| **多智能体协作框架** | [#423](https://github.com/sipeed/picoclaw/pull/423) | 共享上下文、权限边界、冲突解决 | WIP，依赖 #213, #131 |
| **OpenWrt 适配** | [#1132](https://github.com/sipeed/picoclaw/issues/1132) | 资源限制（<64MB）、musl libc、opkg 打包 | 边缘原生战略 |
| **超轻量部署** | [#784](https://github.com/sipeed/picoclaw/issues/784) | RPi Pico + LAN8720，~20kB RAM | 对标 Zero Claw 营销 |

---

## 7. 用户反馈摘要

### 痛点提炼

| 场景 | 反馈来源 | 核心不满 |
|:---|:---|:---|
| **模型配置调试** | #100, #958, #1102, #1103 | Provider/model 组合爆炸，错误信息晦涩（"unknown protocol deepseek-ai"），缺乏诊断工具 |
| **资源受限部署** | #1025, #784, #1132, #1154 | 1分钟 shell 超时不可配置；256MB RAM 设备流式失败；无轻量级搜索后端 |
| **技能管理** | #243, #329, #1104 | 技能位置不透明、磁盘膨胀、安装文档误导 |
| **TUI 配置可靠性** | #1151 | 多 tab 配置丢失、路径未转义导致命令注入风险 |

### 满意点
- **通道多样性**：Telegram/Discord/Signal/IRC 全面覆盖，社区驱动积极（#1138, #630）。
- **实时交互改进**：流式响应 PR（#1101）获期待，"Thinking..." 占位符体验差被多次提及。

---

## 8. 待处理积压

### 长期未响应的高价值 PR/Issue

| 项目 | 创建时间 | 状态 | 风险 |
|:---|:---|:---|:---|
| [#423](https://github.com/sipeed/picoclaw/pull/423) 多智能体框架 | 2026-02-18 | WIP，依赖 #213, #131 | 架构分歧导致重复劳动 |
| [#630](https://github.com/sipeed/picoclaw/pull/630) Signal 通道 | 2026-02-22 | Open，需 rebase #621/#877 | 通道重构漂移，合并成本上升 |
| [#649](https://github.com/sipeed/picoclaw/pull/649) 内存缓存优化 | 2026-02-22 | Open | 性能改进，但 review 资源不足 |
| [#714](https://github.com/sipeed/picoclaw/pull/714) 技能安装重构 | 2026-02-24 | Open | 与 #329 远程技能需求协同不足 |

### 维护者关注建议
1. **优先合并竞态/死锁修复**（#1150, #1151, #1153 需紧急响应）。
2. **建立 PR 分类机制**：254 待合并 PR 中，建议按 `channel/provider/tool/core` 标签分流 review。
3. **技能系统 RFC**：#329 与 #714 需统一设计，避免局部优化导致架构债务。

---

*日报生成时间：2026-03-06 | 数据来源：GitHub API 快照*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-03-06

## 1. 今日速览

NanoClaw 今日呈现**高强度活跃状态**，24小时内产生23条Issue更新（12新开/活跃、11关闭）和50条PR更新（42待审、8已合并/关闭），无新版本发布。社区焦点集中在**WhatsApp渠道稳定性修复**（3个相关高优先级Bug）、**模型配置灵活性**（ANTHROPIC_MODEL环境变量问题）以及**安全加固**（API密钥暴露风险）。值得注意的是，核心贡献者@glifocat单日提交5个PR，系统性修复注册流程和WhatsApp认证缺陷，显示项目正处于关键质量冲刺期。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要PR

| PR | 作者 | 类型 | 进展说明 |
|:---|:---|:---|:---|
| [#712](https://github.com/qwibitai/nanoclaw/pull/712) | @daniviber | Skill | **本地模型支持落地**：`/add-ollama`技能合并，允许Claude作为编排器调用本地Ollama模型（如qwen-coder、mistral）处理低成本任务，直接回应社区[#442](https://github.com/qwibitai/nanoclaw/issues/442)关于替代Claude API成本的诉求 |
| [#718](https://github.com/qwibitai/nanoclaw/pull/718) | @vweaver | Skill | **语音能力扩展**：Telegram语音转录技能合并，基于whisper.cpp实现本地语音处理，为[#722](https://github.com/qwibitai/nanoclaw/issues/722)统一媒体支持铺路 |
| [#749](https://github.com/qwibitai/nanoclaw/pull/749) | @ptheo16 | Docs | **开发者体验提升**：CLAUDE.md新增测试命令（`npm test`、`npm run typecheck`）和频道实现模式文档，降低新贡献者门槛 |
| [#468](https://github.com/qwibitai/nanoclaw/pull/468) → [#738](https://github.com/qwibitai/nanoclaw/pull/738) | @ofalvai | Fix | **模型配置修复**：ANTHROPIC_MODEL环境变量暴露问题首次修复后关闭，作者已提交改进版[#738](https://github.com/qwibitai/nanoclaw/pull/738)待审 |
| [#441](https://github.com/qwibitai/nanoclaw/pull/441) | @dongggcom | Simplification | **TUI交互简化**：基于Ink的终端UI合并，提供不依赖WhatsApp的本地交互方式 |

**整体推进评估**：今日合并聚焦"**去中心化AI调用**"（本地模型+本地语音）和"**部署灵活性**"（TUI+模型配置），项目正从"Claude-WhatsApp绑定"向"多模型-多渠道"架构演进。

---

## 4. 社区热点

### 高活跃度议题

| 议题 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| [#442](https://github.com/qwibitai/nanoclaw/issues/442) 开源模型替代Claude | 3评论，已关闭 | **成本敏感型用户痛点**：用户@tmrdev反映$5的Claude API入门成本，诉求本地模型支持。该Issue直接催生[#712](https://github.com/qwibitai/nanoclaw/pull/712) Ollama技能，显示社区需求到代码实现的高效响应 |
| [#526](https://github.com/qwibitai/nanoclaw/issues/526) 时区混淆问题 | 3👍，1评论，已关闭 | **国际化用户体验缺陷**：悉尼用户反复遭遇UTC/本地时间混淆，反映时间处理架构缺乏用户时区感知。与[#483](https://github.com/qwibitai/nanoclaw/issues/483)形成系列问题，需系统性重构 |
| [#613](https://github.com/qwibitai/nanoclaw/issues/613) + [#472](https://github.com/qwibitai/nanoclaw/issues/472) 模型环境变量失效 | 各2评论，均已关闭 | **配置机制深层Bug**：两个独立Issue揭示ANTHROPIC_MODEL/CLAUDE_MODEL环境变量被硬编码覆盖，CLI层与容器层配置传递断裂。虽有关闭Issue，但[#738](https://github.com/qwibitai/nanoclaw/pull/738)显示修复尚未完全落地 |
| [#642](https://github.com/qwibitai/nanoclaw/issues/642) CLI Channel RFC | 2评论，开放中 | **开发者集成诉求**：提出文件式IPC通道供Claude Code技能调用，瞄准"NanoClaw作为基础设施"的定位升级 |

**背后信号**：社区正从"能运行"向"运行成本低、配置灵活、集成深度"演进，项目架构需适应从个人助手到企业基础设施的扩展。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | 议题 | 状态 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| **🔴 High** | [#737](https://github.com/qwibitai/nanoclaw/issues/737) API密钥通过/proc环境变量暴露 | 开放 | 所有容器化部署，安全审计风险 | [#739](https://github.com/qwibitai/nanoclaw/pull/739)（已关闭测试PR），[#742](https://github.com/qwibitai/nanoclaw/pull/742)环境隔离增强待审 |
| **🔴 High** | [#730](https://github.com/qwibitai/nanoclaw/issues/730) CLAUDE_CODE_OAUTH_TOKEN隔夜过期 | 开放 | 使用OAuth Token的systemd/launchd部署 | 无 |
| **🔴 High** | [#732](https://github.com/qwibitai/nanoclaw/issues/732) 流式输出导致消息轰炸 | 开放 | WhatsApp用户体验 | 无（[#733](https://github.com/qwibitai/nanoclaw/issues/733)为重复Issue已关闭） |
| **🔴 High** | [#747](https://github.com/qwibitai/nanoclaw/issues/747) 配对码在缓冲执行中过期 | 开放 | CI/自动化部署场景 | [#745](https://github.com/qwibitai/nanoclaw/pull/745)待审 |
| **🔴 High** | [#748](https://github.com/qwibitai/nanoclaw/issues/748) 认证失败导致服务重启风暴 | 开放 | WhatsApp服务器可能软封禁 | [#746](https://github.com/qwibitai/nanoclaw/pull/746)待审 |
| **🔴 High** | [#750](https://github.com/qwibitai/nanoclaw/issues/750) DM-with-bot注册错误JID | 开放 | 专用号码+私聊部署模式 | [#751](https://github.com/qwibitai/nanoclaw/pull/751)待审 |
| **🟡 Medium** | [#731](https://github.com/qwibitai/nanoclaw/issues/731) fnm Node路径导致动态库加载失败 | 开放 | 使用fnm版本管理器的用户 | 无 |
| **🟡 Medium** | [#728](https://github.com/qwibitai/nanoclaw/issues/728) 定时任务工具描述矛盾 | 开放 | 定时任务开发者体验 | 无 |

**稳定性评估**：WhatsApp渠道存在**系统性可靠性问题**（认证、重连、消息处理），@glifocat的5个PR形成完整修复矩阵，建议优先合并。安全层面[#737](https://github.com/qwibitai/nanoclaw/issues/737)需紧急关注，容器隔离机制存在设计缺陷。

---

## 6. 功能请求与路线图信号

| 议题/PR | 类型 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#722](https://github.com/qwibitai/nanoclaw/issues/722) 统一频道媒体支持 | Enhancement | **高** | 已有[#718](https://github.com/qwibitai/nanoclaw/pull/718)语音基础，架构设计（懒加载+引用隔离）清晰，作者@k-fls活跃 |
| [#642](https://github.com/qwibitai/nanoclaw/issues/642) CLI Channel | Enhancement | **中** | 设计完整（文件IPC），但需评估与现有架构的整合成本 |
| [#752](https://github.com/qwibitai/nanoclaw/pull/752) Google Chat频道 | Skill | **中** | PR状态Blocked，需维护者评审，企业场景需求明确 |
| [#546](https://github.com/qwibitai/nanoclaw/pull/546) Mattermost频道 | Skill | **中** | 2月26日提交，长期Needs Review，企业IM集成趋势 |
| [#744](https://github.com/qwibitai/nanoclaw/pull/744) S3存储技能 | Skill | **低** | 状态Blocked，与核心功能关联度较低 |
| [#741](https://github.com/qwibitai/nanoclaw/pull/741) Telegram语音转录增强 | Feature | **高** | 基于已合并[#718](https://github.com/qwibitai/nanoclaw/pull/718)的扩展，技术债务低 |

**路线图信号**：项目正从"WhatsApp优先"向"**多频道+媒体丰富**"演进，基础设施层（存储、认证、配置）的稳定性修复优先于新频道扩展。

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#442](https://github.com/qwibitai/nanoclaw/issues/442) @tmrdev | Claude API成本不可控 | 个人开发者/小团队预算敏感，$5入门费即构成障碍 |
| [#526](https://github.com/qwibitai/nanoclaw/issues/526) @alexdonaldsonnz | 时区处理反复出错 | 跨时区协作场景，Agent无法可靠理解"今晚8点" |
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) @RobotKaln | OAuth Token运维负担 | 无人值守部署需每日手动重启 |
| [#747](https://github.com/qwibitai/nanoclaw/issues/747) @glifocat | 自动化部署流程断裂 | CI/CD场景下交互式认证不可行 |

### 满意点

- **技能架构灵活性**：[#712](https://github.com/qwibitai/nanoclaw/pull/712) Ollama技能显示"skills over features"哲学有效，社区可自助扩展
- **响应速度**：高优先级Bug（如WhatsApp重启风暴）24小时内出现针对性PR

### 不满意点

- **配置机制脆弱**：环境变量与硬编码冲突反复出现（[#613](https://github.com/qwibitai/nanoclaw/issues/613)、[#472](https://github.com/qwibitai/nanoclaw/issues/472)、[#468](https://github.com/qwibitai/nanoclaw/pull/468)→[#738](https://github.com/qwibitai/nanoclaw/pull/738)），显示配置层缺乏统一设计
- **文档与实现脱节**：[#393](https://github.com/qwibitai/nanoclaw/issues/393)更新方法不明确，[#728](https://github.com/qwibitai/nanoclaw/issues/728)工具描述自相矛盾

---

## 8. 待处理积压

### 需维护者关注

| 项目 | 创建时间 | 状态 | 风险 |
|:---|:---|:---|:---|
| [#546](https://github.com/qwibitai/nanoclaw/pull/546) Mattermost频道 | 2026-02-26 | Needs Review 8天 | 企业用户流失风险，竞品Mattermost集成可能分流 |
| [#670](https://github.com/qwibitai/nanoclaw/pull/670) API限流自动重试 | 2026-03-03 | Needs Review 2天 | 生产稳定性关键修复，与[#730](https://github.com/qwibitai/nanoclaw/issues/730)Token过期问题叠加影响可用性 |
| [#571](https://github.com/qwibitai/nanoclaw/issues/571) OpenCode支持诉求 | 2026-02-28 | 已关闭但无解决 | 用户明确"不使用Claude"，当前架构耦合度可能排斥非Claude用户 |

### 建议行动

1. **紧急**：合并@glifocat的5个WhatsApp修复PR（[#745](https://github.com/qwibitai/nanoclaw/pull/745)-[#746](https://github.com/qwibitai/nanoclaw/pull/746)、[#751](https://github.com/qwibitai/nanoclaw/pull/751)、[#754](https://github.com/qwibitai/nanoclaw/pull/754)、[#756](https://github.com/qwibitai/nanoclaw/pull/756)），形成WhatsApp稳定性补丁集
2. **本周**：评审[#737](https://github.com/qwibitai/nanoclaw/issues/737)安全修复方案，考虑联合[#742](https://github.com/qwibitai/nanoclaw/pull/742)环境隔离增强
3. **本月**：决策多频道架构优先级（Google Chat/Mattermost）vs 核心稳定性投资

---

*本日报基于GitHub公开数据生成，时间范围：2026-03-05 00:00 - 2026-03-05 23:59 UTC*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-03-06

## 1. 今日速览

IronClaw 今日呈现**高强度开发态势**：24小时内30个PR更新（26个待合并）、22个Issues活跃（20个新开/活跃），代码提交密度显著。核心团队正聚焦三大主线——**测试覆盖率攻坚**（@ilblackdragon 批量创建5个E2E测试Issue）、**Agent核心性能优化**（@henrypark133 主导系统提示词重构与工具链改进）、以及**多租户安全架构**的长期推进。v0.15.0版本刚于3月4日发布，为Hosted部署的OAuth回调路由提供了关键支持。项目整体健康度良好，但PR队列积压明显，需关注合并效率。

---

## 2. 版本发布

### v0.15.0（2026-03-04）

| 属性 | 详情 |
|:---|:---|
| 发布链接 | https://github.com/nearai/ironclaw/releases/tag/v0.15.0 |
| 关键更新 | Hosted实例的OAuth回调路由改造、工具调用错误详情展示、扩展认证UX优化 |
| 破坏性变更 | 无明确标注 |
| 迁移注意 | 使用Hosted部署的用户需验证OAuth回调URL配置 |

**核心变更详解：**
- **OAuth路由网关化** ([#555](https://github.com/nearai/ironclaw/pull/555))：Hosted实例的OAuth回调现通过Web网关路由，解决多租户环境下的回调地址冲突问题
- **工具错误透明化** ([#490](https://github.com/nearai/ironclaw/pull/490))：Web界面现在展示失败工具调用的详细错误信息，提升调试效率
- **扩展认证体验优化**：简化第三方扩展的授权流程

---

## 3. 项目进展

### 今日合并/关闭的PR

| PR | 作者 | 状态 | 核心贡献 |
|:---|:---|:---|:---|
| [#529](https://github.com/nearai/ironclaw/pull/529) | @ilblackdragon | **已关闭** | 13维复杂度评分器集成智能路由（因策略调整关闭，功能或拆分重提） |

### 关键推进中的PR（今日更新）

| PR | 作者 | 规模/风险 | 推进价值 |
|:---|:---|:---|:---|
| [#578](https://github.com/nearai/ironclaw/pull/578) | @ilblackdragon | XL/High | **工具链架构重构**：合并`web_fetch`与`http`工具，引入工具输出暂存机制解决大响应截断问题 |
| [#577](https://github.com/nearai/ironclaw/pull/577) | @ilblackdragon | XL/Medium | **Routine自治执行**：新增`ApprovalContext`区分交互式/自治模式，为后台Agent作业奠定安全基础 |
| [#584](https://github.com/nearai/ironclaw/pull/584) | @henrypark133 | XL/Medium | **质量基建**：46个E2E测试+3个生产Bug修复+CI并行化，测试覆盖Extensions全流程 |
| [#580](https://github.com/nearai/ironclaw/pull/580) | @henrypark133 | M/Low | **推理模型兼容**：修复GLM-4/5、DeepSeek R1、Qwen3的`reasoning_content`泄漏问题 |
| [#583](https://github.com/nearai/ironclaw/pull/583) | @henrypark133 | M/Medium | **性能优化**：每轮对话只构建一次系统提示词，强制文本模式时跳过工具描述 |

**整体进展评估**：今日代码演进集中在**Agent执行引擎的可靠性**（测试覆盖↑）、**LLM交互的健壮性**（推理模型适配）、以及**部署形态的分化支持**（Hosted多租户 vs 本地开发）。项目正从"功能可用"向"生产就绪"阶段过渡。

---

## 4. 社区热点

### 高关注度议题

| Issue/PR | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| [#557](https://github.com/nearai/ironclaw/issues/557) Architecture Review: Security Model for Hosted Multi-Tenant Deployment | 架构级议题 | **部署模式战略分歧**：社区需要明确IronClaw的定位——是优先本地开发者采用，还是Hosted消费级产品？安全模型的设计（特别是用户凭证隔离）将决定技术债务走向 |
| [#548](https://github.com/nearai/ironclaw/issues/548) Add Search to Chat API | 2评论，功能请求 | **开箱即用体验**：用户期望Agent默认具备网络搜索能力，而非手动配置工具 |
| [#545](https://github.com/nearai/ironclaw/issues/545) Configure credentials via chat | 1评论，功能请求 | **降低配置门槛**：工具凭证设置应通过自然对话完成，而非YAML/环境变量 |
| [#538](https://github.com/nearai/ironclaw/issues/538) Upgrade agent via agent.near.ai UI | 1评论，功能请求 | **托管服务生态**：用户期望通过官方UI管理Agent生命周期，暗示对PaaS化体验的期待 |

**诉求洞察**：社区声音呈现**"易用性优先于可控性"**的倾向——用户希望减少基础设施负担，获得类似ChatGPT Plugins的即插即用体验。这与当前项目"自托管+代码优先"的定位存在张力。

---

## 5. Bug 与稳定性

### 今日报告Bug（按严重程度）

| 优先级 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **High** | [#568](https://github.com/nearai/ironclaw/issues/568) | **Thread hydration丢失工具调用历史**——页面刷新后模型重复执行已完成的工具调用，破坏对话连续性 | 待修复，无PR |
| 🟡 **Medium** | [#564](https://github.com/nearai/ironclaw/issues/564) | **LLM响应解析三合一Bug**：`reasoning_content`泄漏、`clean_response`覆盖不全、未闭合think标签 | **已有PR** [#580](https://github.com/nearai/ironclaw/pull/580) |
| 🟡 **Medium** | [#443](https://github.com/nearai/ironclaw/issues/443) | **Telegram安全漏洞**：`owner_id`为null时群组消息对所有用户响应 | 待修复，无PR |
| 🟢 **Low** | [#566](https://github.com/nearai/ironclaw/issues/566) | **工具排序非确定性**：HashMap迭代导致LLM工具选择存在位置偏见 | **已有PR** [#582](https://github.com/nearai/ironclaw/pull/582) |

### 已修复Bug

| Issue | 修复PR | 说明 |
|:---|:---|:---|
| [#562](https://github.com/nearai/ironclaw/issues/562) | 已关闭 | E2E测试中未await的协outine修复 |
| [#544](https://github.com/nearai/ironclaw/issues/544) | 已关闭 | 临时移除Okta工具 |

---

## 6. 功能请求与路线图信号

### 新功能需求（今日创建）

| Issue | 类别 | 与现有PR关联 | 纳入v0.16可能性 |
|:---|:---|:---|:---|
| [#548](https://github.com/nearai/ironclaw/issues/548) Chat API内置搜索 | 核心能力 | 低（需新实现） | ⭐⭐⭐ 高——契合"默认智能"产品方向 |
| [#545](https://github.com/nearai/ironclaw/issues/545) 对话式凭证配置 | UX优化 | 中（Extensions框架相关） | ⭐⭐⭐ 高——与[#584](https://github.com/nearai/ironclaw/pull/584) Extensions测试工作协同 |
| [#538](https://github.com/nearai/ironclaw/issues/538) UI一键升级Agent | 托管服务 | 低（需基础设施） | ⭐⭐ 中——依赖Hosted部署成熟度 |

### 路线图信号：测试覆盖率专项

@ilblackdragon 今日批量创建5个测试Issue（[#571](https://github.com/nearai/ironclaw/issues/571)-[#575](https://github.com/nearai/ironclaw/issues/575)），覆盖：
- `worker.rs`（核心执行引擎，29%→60%覆盖率目标）
- `thread_ops.rs` + `scheduler.rs`（多轮对话与调度）
- `routine.rs` + `heartbeat.rs`（后台执行循环）
- `repository.rs`（工作区持久化，当前1.8%覆盖率）
- 内置工具（routine/time/job/web_fetch）

**解读**：项目正进入**"质量冲刺"阶段**，为可能的v1.0或生产发布做准备。测试债务的偿还优先级高于新功能。

---

## 7. 用户反馈摘要

### 痛点提炼

| 来源Issue | 痛点 | 场景 |
|:---|:---|:---|
| [#568](https://github.com/nearai/ironclaw/issues/568) | 页面刷新破坏对话状态 | Web用户期望无缝多设备/多标签体验 |
| [#567](https://github.com/nearai/ironclaw/issues/567) | 大工具输出撑爆上下文窗口 | 使用web_fetch获取长文档时Token耗尽 |
| [#563](https://github.com/nearai/ironclaw/issues/563) | Agent"叙述"而非"执行" | 模型用自然语言描述下一步而非调用工具 |
| [#565](https://github.com/nearai/ironclaw/issues/565) | 系统提示词重复构建的性能损耗 | 高频Agent场景下的延迟敏感 |

### 满意度信号

- **扩展生态**：[#584](https://github.com/nearai/ironclaw/pull/584)的46个E2E测试表明Extensions功能已进入稳定化阶段
- **推理模型支持**：[#580](https://github.com/nearai/ironclaw/pull/580)对国产/开源推理模型的适配显示技术包容性

---

## 8. 待处理积压

### 长期未响应的重要事项

| Issue/PR | 创建时间 | 状态 | 提醒 |
|:---|:---|:---|:---|
| [#230](https://github.com/nearai/ironclaw/issues/230) Background sandbox reaper | 2026-02-19（14天） | Open | **资源泄漏风险**：Docker容器孤儿化问题，生产部署前必须解决 |
| [#166](https://github.com/nearai/ironclaw/issues/166) Memory hygiene retention | 2026-02-18（15天） | Open | **技术债务**：`hygiene.rs`模块已实现但从未调用，工作区无限增长 |
| [#351](https://github.com/nearai/ironclaw/pull/351) Multi-tenant auth | 2026-02-24（10天） | Open, XL规模 | **架构阻塞**：Part 3 of 3，依赖[#348](https://github.com/nearai/ironclaw/pull/348)/[#349](https://github.com/nearai/ironclaw/pull/349)，需维护者协调合并顺序 |
| [#403](https://github.com/nearai/ironclaw/pull/403) WhatsApp完整支持 | 2026-02-27（7天） | Open, XL规模 | **企业需求**：Webhook验证、已读回执、去重等生产级功能 |

### 维护者行动建议

1. **优先合并** [#348](https://github.com/nearai/ironclaw/pull/348)→[#349](https://github.com/nearai/ironclaw/pull/349)→[#351](https://github.com/nearai/ironclaw/pull/351) 多租户链条，解锁Hosted部署
2. **评估** [#230](https://github.com/nearai/ironclaw/issues/230) 与 [#166](https://github.com/nearai/ironclaw/issues/166) 的里程碑归属，建议纳入v0.16
3. **关注** PR队列健康度：26个待合并PR中XL规模占比过高，需拆分或并行评审

---

*日报生成时间：2026-03-06 | 数据来源：GitHub API*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-03-06

---

## 1. 今日速览

LobsterAI 今日保持**高活跃度**，24小时内处理 **22/23 个 PR**（合并率 96%），关闭 **12/26 个 Issue**（关闭率 46%）。开发节奏紧凑，核心团队聚焦于 **Windows 兼容性修复**、**macOS 沙箱稳定性** 及 **MCP 生态扩展**。社区反馈量显著增长，新增 14 个活跃 Issue，VM 沙箱、中文路径处理、Playwright 工具链成为用户痛点集中区。无新版本发布，但密集的功能修复为 0.2 版本铺路。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 🔧 核心稳定性修复（Windows 专项）

| PR | 作者 | 关键修复 |
|:---|:---|:---|
| [#301](https://github.com/netease-youdao/LobsterAI/pull/301) | @fisherdaddy | macOS 沙箱相关问题修复 |
| [#297](https://github.com/netease-youdao/LobsterAI/pull/297) | @fisherdaddy | Windows 任务回答时 CMD 弹窗 bug |
| [#295](https://github.com/netease-youdao/LobsterAI/pull/295) | @fisherdaddy | Windows 报错无法启动 CC 的问题 |
| [#279](https://github.com/netease-youdao/LobsterAI/pull/279) / [#287](https://github.com/netease-youdao/LobsterAI/pull/287) / [#261](https://github.com/netease-youdao/LobsterAI/pull/261) | @btc69m979y-dotcom | OpenClaw gateway Windows 启动失败系列修复（ASAR 路径分隔符、ESM 加载、process.argv 处理） |

**技术债务清理**：[@Aoxiang-001](https://github.com/netease-youdao/LobsterAI/pull/291) 将 NIM SDK 迁移至 npm 包，**删除约 53,000 行内嵌代码**，显著降低维护负担。

### ✨ 功能扩展

| PR | 作者 | 功能 |
|:---|:---|:---|
| [#276](https://github.com/netease-youdao/LobsterAI/pull/276) | @Doge2077 | **新增有道智云供应商渠道**，支持私有化 DeepSeek、Kimi 模型独立配置 |
| [#289](https://github.com/netease-youdao/LobsterAI/pull/289) | @liugang519 | MCP 市场支持动态配置 |
| [#291](https://github.com/netease-youdao/LobsterAI/pull/291) | @Aoxiang-001 | P2P 已读回执、在线消息过滤 |
| [#290](https://github.com/netease-youdao/LobsterAI/pull/290) | @btc69m979y-dotcom | OpenClaw 工作目录同步至用户配置 |

### 🐛 体验优化

- [#300](https://github.com/netease-youdao/LobsterAI/pull/300) 修复停止对话切换模型后继续对话报错
- [#280](https://github.com/netease-youdao/LobsterAI/pull/280) 修复 cowork 时间默认为 UTC 的问题
- [#274](https://github.com/netease-youdao/LobsterAI/pull/274) 修复底层 LLM 报错时任务详情延迟反馈问题

---

## 4. 社区热点

### 高讨论 Issue

| Issue | 评论 | 核心诉求 |
|:---|:---|:---|
| [#185](https://github.com/netease-youdao/LobsterAI/issues/185) | 3 | **OpenAI Responses API 新格式支持** — 用户急需 `gpt-5.3-codex` 兼容，涉及 [迁移指南](https://developers.openai.com/api/docs/guides/migrate-to-responses) |
| [#12](https://github.com/netease-youdao/LobsterAI/issues/12) | 3 | **M2 Pro 性能卡顿** — 打字延迟问题，已关闭但需验证修复效果 |
| [#196](https://github.com/netease-youdao/LobsterAI/issues/196) | 2 | **Vercel find-skills 导入失败** — `<tool_use_error>Unknown skill` 错误，已关闭 |

### 新兴热点（今日新建，0评论但高潜在影响）

- [#299](https://github.com/netease-youdao/LobsterAI/issues/299) 飞书机器人群聊支持 — 企业协作场景扩展
- [#293](https://github.com/netease-youdao/LobsterAI/issues/293) Playwright MCP 工具链下载失败 — 工具生态阻塞
- [#288](https://github.com/netease-youdao/LobsterAI/issues/288) Discord 预回应（typing 状态）— 交互体验优化

**诉求分析**：用户从"能用"转向"好用"，关注企业集成（飞书/钉钉）、开发工具链稳定性、以及多平台体验一致性。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#275](https://github.com/netease-youdao/LobsterAI/issues/275) | **VM 沙箱不可用** — macOS 26.2 QEMU PCI 槽位耗尽 | 待修复，关联 PR [#301](https://github.com/netease-youdao/LobsterAI/pull/301) |
| 🔴 **高** | [#284](https://github.com/netease-youdao/LobsterAI/issues/284) | **Electron 开发启动失败** — Arch Linux + awesome wm 环境 | 待修复 |
| 🟡 **中** | [#230](https://github.com/netease-youdao/LobsterAI/issues/230) | 中文路径自动插入空格 — "图2.jpg" → "图 2.jpg" | 待修复 |
| 🟡 **中** | [#292](https://github.com/netease-youdao/LobsterAI/issues/292) | 超长上下文强制拉伸界面高度导致白屏 | 待修复 |
| 🟡 **中** | [#293](https://github.com/netease-youdao/LobsterAI/issues/293) | Playwright MCP npx 下载失败 | 待修复 |
| 🟢 **低** | [#286](https://github.com/netease-youdao/LobsterAI/issues/286) | 输入框链接解析断句错误 | 待修复 |

**已修复关闭**：M2 Pro 卡顿、开机自重启 bug、Windows 更新按钮缺失、Ollama 上下文获取失败等。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 可行性评估 |
|:---|:---|:---|
| **OpenAI Responses API 支持** | [#185](https://github.com/netease-youdao/LobsterAI/issues/185) | 🔥 **高优先级** — 阻碍最新模型使用，需架构升级 |
| **飞书机器人群聊** | [#299](https://github.com/netease-youdao/LobsterAI/issues/299) | 中等 — 已有 Telegram/Discord 基础，可复用模式 |
| **Discord 预回应状态** | [#288](https://github.com/netease-youdao/LobsterAI/issues/288) | 低 — 体验优化，参考 OpenClaw 实现 |
| **上下文管理/自动压缩/Token 统计** | [#282](https://github.com/netease-youdao/LobsterAI/issues/282) | 🔥 **高优先级** — 与 [#292](https://github.com/netease-youdao/LobsterAI/issues/292) 白屏问题强相关 |
| **Ubuntu Linux 版本** | [#273](https://github.com/netease-youdao/LobsterAI/issues/273) | 已关闭 — 需官方表态路线图 |
| **数学能力 Skill 内置** | [#168](https://github.com/netease-youdao/LobsterAI/issues/168) | 已关闭 — 社区 Skill 生态方向 |

**信号判断**：上下文管理（#282）与 Responses API（#185）最可能进入下一版本，直接解决当前用户阻塞性问题。

---

## 7. 用户反馈摘要

### 😤 核心痛点
- **"每次更新都到官网重新下载"** → 自动更新需求强烈（[#53](https://github.com/netease-youdao/LobsterAI/issues/53) 已关闭，[#121](https://github.com/netease-youdao/LobsterAI/issues/121) 已关闭）
- **"设置了环境变量不起作用，记忆条目容易暴露 API key"** → 安全配置机制缺失（[#145](https://github.com/netease-youdao/LobsterAI/issues/145)）
- **"VM 沙箱看不到邮箱配置，总提示没有 .env"** — 配置隔离混乱（[#277](https://github.com/netease-youdao/LobsterAI/issues/277)）

### ✅ 满意点
- 多平台覆盖（Mac/Win）初步达成
- MCP 生态扩展受关注
- 有道智云私有化部署支持（[#276](https://github.com/netease-youdao/LobsterAI/pull/276)）满足企业合规需求

### 🎯 使用场景
- **开发者**：Arch Linux 原生开发环境支持（[#284](https://github.com/netease-youdao/LobsterAI/issues/284)）
- **企业用户**：飞书/钉钉集成、API key 安全管理
- **高级用户**：VM 沙箱隔离运行、自定义模型供应商

---

## 8. 待处理积压

| Issue | 创建时间 | 问题 | 提醒 |
|:---|:---|:---|:---|
| [#105](https://github.com/netease-youdao/LobsterAI/issues/105) | 2026-02-25 | `max_completion_tokens` 32000 超限错误 | 10天未响应，本地模型配置问题 |
| [#145](https://github.com/netease-youdao/LobsterAI/issues/145) | 2026-02-27 | Tavily 等 Skill 的 API key 环境变量失效 | 8天未响应，安全相关 |
| [#240](https://github.com/netease-youdao/LobsterAI/pull/240) | 2026-03-03 | **Workflow 增强** — Agent 职责分离 + soul.md | 唯一待合并 PR，创新性功能需评审 |

**重点关注**：[#240](https://github.com/netease-youdao/LobsterAI/pull/240) 提出 Agent 工作流重构，支持 `<MINOR_FIX>`/`<CRITICAL_REDO>`/`<PERFECT>` 状态机，可能显著改变产品架构，建议优先评审。

---

*日报生成时间：2026-03-06 | 数据来源：GitHub API*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 | 2026-03-06

## 1. 今日速览

TinyClaw 今日保持中等活跃度，**3 条 Issues 和 3 条 PR 全部处于开放状态**，无合并或关闭动作。社区焦点集中在**版本发布流程的可靠性问题**——标签与 package.json 版本不匹配导致用户收到错误的更新提示，已有 PR 提交修复。此外，macOS 用户报告严重的进程启动崩溃问题，以及社区正式提出集成测试与跨平台发布安全的系统性改进提案。整体而言，项目正处于**质量基础设施升级的关键窗口期**，功能扩展（Avian AI 提供商、OpenViking 插件）因稳定性问题暂缓推进。

---

## 2. 版本发布

**无新版本发布**

> ⚠️ 注意：当前存在**版本标签管理异常**——Git 标签 `v0.0.9` 与 package.json 中的 `v0.0.8` 不一致，导致 CLI 持续误报"有可用更新"。详见 [Issue #160](https://github.com/TinyAGI/tinyclaw/issues/160)。

---

## 3. 项目进展

**今日无 PR 合并**

所有 3 条 PR 均处于待审查状态，项目代码层面**未向前推进**。关键 PR 状态：

| PR | 作者 | 状态 | 阻塞原因 |
|:---|:---|:---|:---|
| [#161](https://github.com/TinyAGI/tinyclaw/pull/161) 修复版本标签同步检查 | @michaelerobertsjr | 🔍 待合并 | 需审查通过以解决 #160 |
| [#143](https://github.com/TinyAGI/tinyclaw/pull/143) 新增 Avian AI 提供商 | @avianion | 🔍 待合并 | 已开放 7 天，无审查反馈 |
| [#150](https://github.com/TinyAGI/tinyclaw/pull/150) OpenViking 插件续作 | @mczabca-boop | 🔍 待合并 | 依赖 #149 的硬化工作 |

**评估**：功能扩展 PR 因缺乏审查资源积压，建议优先处理 #161 以恢复发布流程可信度。

---

## 4. 社区热点

### 🔥 最活跃讨论：版本标签不匹配（Issue #160）
- **链接**：[#160](https://github.com/TinyAGI/tinyclaw/issues/160)
- **数据**：2 条评论，1 个 👍，创建后 24 小时内即有关键修复 PR
- **诉求分析**：用户核心痛点是**工具链的可信度**——当 CLI 提示更新但实际无新版本时，会削弱用户对项目维护严谨性的信任。社区响应迅速，体现对发布流程质量的重视。

### 🔥 技术债务显性化：集成测试提案（Issue #162）
- **链接**：[#162](https://github.com/TinyAGI/tinyclaw/issues/162)
- **数据**：新创建，0 评论（提案型 Issue 典型特征）
- **诉求分析**：维护者 @michaelerobertsjr 系统性地提出**三项基础设施缺失**——无自动化测试、仅 Ubuntu 构建、无跨 OS 验证。这标志着项目从"快速迭代"向"质量工程"转型的明确信号，与 #160 的发布事故形成呼应。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#156](https://github.com/TinyAGI/tinyclaw/issues/156) | **macOS 上所有通道/队列进程启动后立即退出**（zsh shell 初始化竞态条件） | 🆘 **无修复 PR**，影响核心功能可用性 |
| 🟡 **中** | [#160](https://github.com/TinyAGI/tinyclaw/issues/160) | 版本标签与 package.json 不匹配导致错误更新提示 | ✅ **有修复 PR** [#161](https://github.com/TinyAGI/tinyclaw/pull/161) |

### #156 详细分析（macOS 崩溃）
- **现象**：`tinyclaw start` 后 Telegram/Queue/Heartbeat 进程数秒内全部显示 `Not Running`，tmux pane 静默返回 shell 无错误输出
- **根因假设**：zsh 初始化与进程启动的竞态条件
- **影响范围**：macOS 用户（推测为默认 shell 用户）
- **紧迫性**：**阻塞性 Bug**，无 workaround，建议维护者优先复现

---

## 6. 功能请求与路线图信号

| 来源 | 内容 | 纳入可能性评估 |
|:---|:---|:---|
| [PR #143](https://github.com/TinyAGI/tinyclaw/pull/143) | 新增 Avian AI 提供商（OpenAI 兼容 API） | ⭐⭐⭐ 高 — 代码已完成，仅缺审查 |
| [PR #150](https://github.com/TinyAGI/tinyclaw/pull/150) | OpenViking 插件续作 | ⭐⭐ 中 — 依赖前置 PR #149 的硬化工作，技术债务较重 |
| [Issue #162](https://github.com/TinyAGI/tinyclaw/issues/162) | 集成测试 + 跨 OS 发布安全 | ⭐⭐⭐⭐⭐ **最高** — 维护者主动提案，与当前事故直接相关，属于基础设施必选项 |

**路线图推断**：下一版本（v0.1.0?） likely 聚焦：
1. 修复发布流程（#161）
2. 建立 CI/CD 基础（#162）
3. 合并 Avian 提供商（#143）
4. 解决 macOS 稳定性（#156）

---

## 7. 用户反馈摘要

| 维度 | 具体内容 |
|:---|:---|
| **痛点** | macOS 用户遭遇"沉默失败"——进程退出无错误日志，调试困难（[#156](https://github.com/TinyAGI/tinyclaw/issues/156)） |
| **信任危机** | 版本提示系统误报更新，损害工具可信度（[#160](https://github.com/TinyAGI/tinyclaw/issues/160)） |
| **期望** | 明确的跨平台支持承诺，特别是 macOS 生产环境可用性 |
| **积极信号** | 社区成员主动提交系统性改进提案（#162），体现对项目长期健康的投入意愿 |

---

## 8. 待处理积压

| 项目 | 创建时间 | 状态 | 提醒 |
|:---|:---|:---|:---|
| [PR #143](https://github.com/TinyAGI/tinyclaw/pull/143) Avian AI 提供商 | 2026-02-27 | 开放 7 天，0 审查反馈 | ⚠️ 功能完整但存在审查资源瓶颈，建议设定审查 SLA |
| [PR #150](https://github.com/TinyAGI/tinyclaw/pull/150) OpenViking 续作 | 2026-02-27 | 开放 7 天，依赖 #149 | ⚠️ 插件架构债务需优先理清 |
| [Issue #156](https://github.com/TinyAGI/tinyclaw/issues/156) macOS 崩溃 | 2026-03-03 | 开放 3 天，无维护者响应 | 🚨 **阻塞性 Bug，建议 24h 内响应** |

---

**日报生成时间**：2026-03-06  
**数据来源**：GitHub API / TinyClaw 仓库公开信息  
**健康度评分**：🟡 **中等** — 基础设施债务显性化，功能扩展停滞，但社区主动提出系统性改进方案，转型窗口已打开。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-03-06

---

## 1. 今日速览

CoPaw 今日迎来 **v0.0.5 正式版发布**，标志着项目进入新的稳定迭代周期。过去24小时社区活跃度极高，**50 条 Issues 更新**（13 新开/活跃，37 关闭）与 **50 条 PR 更新**（16 待合并，34 已合并/关闭）显示出维护团队的高效响应能力。核心聚焦**渠道管理系统重构**（Channel Management System）与**多模态消息处理稳定性**，同时社区对 QQ、飞书、钉钉等国内渠道的适配需求持续旺盛。整体项目健康度良好，issue 关闭率达 74%，PR 合并率 68%。

---

## 2. 版本发布

### v0.0.5 正式版 & v0.0.5-beta.3
**发布日期**: 2026-03-05 | [Release 页面](https://github.com/agentscope-ai/CoPaw/releases)

#### 核心更新：Channel Management System（渠道管理系统）

| 特性 | 说明 | PR |
|:---|:---|:---|
| **渠道筛选标签** | All / Built-in / Custom 三态过滤 | #615 |
| **动态自定义字段编辑器** | 支持渠道级自定义字段配置 | #615 |
| **渠道类型徽章** | 可视化区分不同渠道来源 | #615 |

#### 迁移注意事项
- 从 v0.0.4 升级时**自定义模型配置可能丢失**（已知问题 #730，建议备份 `~/.copaw/` 目录）
- 飞书渠道 `receive_id` 持久化文件格式已修正，cron 定时任务重启后需验证

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（按影响排序）

| PR | 作者 | 核心贡献 | 解决的问题 |
|:---|:---|:---|:---|
| [#340](https://github.com/agentscope-ai/CoPaw/pull/340) | @fancyboi999 | **本地图片 Base64 转换** | 修复 `file://` URL 导致的多渠道图片发送失败（钉钉、飞书、Telegram） |
| [#616](https://github.com/agentscope-ai/CoPaw/pull/616) | @fancyboi999 | 图片预处理优化 | 避免本地路径作为 URL 写入，提升 OpenAI 兼容端点稳定性 |
| [#255](https://github.com/agentscope-ai/CoPaw/pull/255) | @liuxiaopai-ai | **Ollama 基础 URL 规范化** | 修复 #746 - Ollama 库异常、无法连接本地实例 |
| [#207](https://github.com/agentscope-ai/CoPaw/pull/207) | @liuxiaopai-ai | **全渠道消息去重机制** | 根治平台重试/重连导致的重复回复问题 |
| [#192](https://github.com/agentscope-ai/CoPaw/pull/192) | @dipeshbabu | 大输出死锁修复 | `execute_shell_command()` 使用 `communicate()` 替代 `wait()` |
| [#753](https://github.com/agentscope-ai/CoPaw/pull/753) | @xieyxclack | 版本号升级与发布说明 | v0.0.5 正式发布 |
| [#755](https://github.com/agentscope-ai/CoPaw/pull/755) | @rayrayraykk | Docker latest 标签 CI | 自动化镜像发布流程 |

**整体推进**: 今日合并的 PR 解决了**图片消息稳定性**、**本地模型连接**、**消息去重**三大核心痛点，显著提升了多模态场景下的用户体验。

---

## 4. 社区热点

### 讨论最活跃的 Issues（评论数 TOP 5）

| Issue | 评论 | 状态 | 核心诉求 | 链接 |
|:---|:---:|:---:|:---|:---|
| #423 GGUF 模型加载失败 | 10 | ✅ CLOSED | 本地模型（Qwen3-VL-2B-Thinking-GGUF）加载路径问题 | [#423](https://github.com/agentscope-ai/CoPaw/issues/423) |
| #91 QQ 机器人不回复 | 9 | 🔴 OPEN | **国内渠道回调机制** - 控制台可见消息但无回复，疑似回调配置错误 | [#91](https://github.com/agentscope-ai/CoPaw/issues/91) |
| #660 安装后 401 无法 chat | 8 | ✅ CLOSED | 认证配置流程不清晰 | [#660](https://github.com/agentscope-ai/CoPaw/issues/660) |
| #400 钉钉图片导致对话异常 | 5 | ✅ CLOSED | **多模态消息格式兼容** - `image_url` variant 不被识别 | [#400](https://github.com/agentscope-ai/CoPaw/issues/400) |
| #318 本地图片 OpenAI APIError | 5 | ✅ CLOSED | 图片 URL 格式验证失败 | [#318](https://github.com/agentscope-ai/CoPaw/issues/318) |

### 热点分析
- **#91 QQ 渠道** 持续 9 天未解决，反映**国内 IM 渠道文档和调试工具不足**
- **图片/多模态消息** 占据热点 issue 的 60%，是用户实际使用的核心场景
- **本地模型部署**（GGUF/Ollama）需求旺盛，与云端 API 形成互补使用模式

---

## 5. Bug 与稳定性

### 按严重程度排序

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---:|:---:|
| 🔴 **高** | [#736](https://github.com/agentscope-ai/CoPaw/issues/736) | **会话状态错乱** - 重启后回答历史问题，上下文污染 | 🔴 OPEN | 无 |
| 🔴 **高** | [#91](https://github.com/agentscope-ai/CoPaw/issues/91) | QQ 机器人无回复，回调机制失效 | 🔴 OPEN | 无 |
| 🟡 **中** | [#745](https://github.com/agentscope-ai/CoPaw/issues/745) | Bad Request - 控制台请求异常 | 🔴 OPEN | 无 |
| 🟡 **中** | [#682](https://github.com/agentscope-ai/CoPaw/issues/682) | `skill-creator` 执行报错 `FunctionNotFoundError: execute` | 🔴 OPEN | 无 |
| 🟡 **中** | [#619](https://github.com/agentscope-ai/CoPaw/issues/619) | 飞书复制粘贴图片识别为 post 类型 | 🔴 OPEN | 无 |
| 🟢 **低** | [#733](https://github.com/agentscope-ai/CoPaw/issues/733) | Azure OpenAI GPT-5 系列无法使用 | 🔴 OPEN | [#756](https://github.com/agentscope-ai/CoPaw/pull/756) |
| 🟢 **低** | [#730](https://github.com/agentscope-ai/CoPaw/issues/730) | 版本更新时自定义模型配置丢失 | ✅ CLOSED | 已修复 |
| 🟢 **低** | [#758](https://github.com/agentscope-ai/CoPaw/issues/758) | 飞书 receive_id 持久化格式错误 | ✅ CLOSED | 已修复 |

### 关键稳定性修复（今日已关闭）
- **图片消息链式故障** (#400, #318, #549, #557, #532) → 通过 #340, #616 系统性修复
- **Ollama 连接异常** (#746) → #255 修复基础 URL 配置
- **消息重复发送** → #207 全渠道去重机制

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue/PR | 类型 | 需求描述 | 纳入可能性 | 相关 PR |
|:---|:---|:---|:---:|:---|
| [#502](https://github.com/agentscope-ai/CoPaw/issues/502) | 控制台优化 | Compact History 按钮 + Token 用量监控 | ⭐⭐⭐ 高 | 无 |
| [#631](https://github.com/agentscope-ai/CoPaw/issues/631) | 渠道配置 | 按渠道控制是否显示 `<think>` 内容 | ⭐⭐⭐ 高 | 与 #24 相关 |
| [#24](https://github.com/agentscope-ai/CoPaw/issues/24) | 渠道配置 | Per-channel 消息类型屏蔽/折叠 | ⭐⭐⭐ 高 | v0.0.5 部分实现 |
| [#731](https://github.com/agentscope-ai/CoPaw/issues/731) | 插件生态 | 类似 OpenClaw 的 `plugins install` 机制 | ⭐⭐ 中 | 无 |
| [#717](https://github.com/agentscope-ai/CoPaw/pull/717) | Telegram 增强 | Markdown 转 HTML 富文本格式 | ⭐⭐⭐ 高 | 待合并 |
| [#759](https://github.com/agentscope-ai/CoPaw/pull/759) | 模型提供商 | OpenRouter 内置支持 | ⭐⭐⭐ 高 | 待合并 |

### 路线图信号
- **v0.0.6 可能方向**: 控制台体验优化（#502）、渠道级输出控制（#631）、OpenRouter 支持（#759）
- **长期**: 插件化架构（#731）可能是差异化竞争点

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 反馈来源 | 核心问题 |
|:---|:---|:---|
| **企业微信/钉钉办公集成** | #400, #416, #758 | 国内渠道文档不足，配置调试困难；iMessage 完全无文档 |
| **多模态消息稳定性** | #318, #549, #557, #532 | 图片发送后会话"中毒"，必须重启才能恢复 |
| **本地模型部署** | #423, #746, #247 | GGUF/Ollama 路径配置、库版本兼容性坑多 |
| **会话上下文管理** | #736, #62 | 重启后状态错乱、页面切换丢失对话，缺乏持久化保证 |
| **输出噪音控制** | #491, #631 | 飞书/QQ 渠道暴露完整思考过程，终端用户体验差 |

### 满意度信号
- ✅ 关闭 issue 响应速度快（#660 当日创建当日解决）
- ✅ 多模态问题得到系统性修复
- ⚠️ 国内渠道文档和调试工具仍是短板
- ⚠️ 配置持久化（#730）影响升级体验

---

## 8. 待处理积压

### 需维护者关注的重要事项

| 类型 | 事项 | 创建时间 | 风险 | 链接 |
|:---|:---|:---:|:---|:---|
| 🔴 **长期未响应** | QQ 机器人不回复 | 2026-02-28 (6天) | 国内用户流失风险 | [#91](https://github.com/agentscope-ai/CoPaw/issues/91) |
| 🔴 **高影响 Bug** | 会话状态错乱 | 2026-03-05 | 数据一致性危机 | [#736](https://github.com/agentscope-ai/CoPaw/issues/736) |
| 🟡 **文档缺口** | iMessage 配置文档 | 2026-03-03 (3天) | 渠道覆盖不完整 | [#416](https://github.com/agentscope-ai/CoPaw/issues/416) |
| 🟡 **待合并 PR** | Telegram Markdown 支持 | 2026-03-05 | 体验优化 | [#717](https://github.com/agentscope-ai/CoPaw/pull/717) |
| 🟡 **待合并 PR** | OpenRouter 内置支持 | 2026-03-05 | 模型生态扩展 | [#759](https://github.com/agentscope-ai/CoPaw/pull/759) |
| 🟡 **架构债务** | 插件安装机制 | 2026-03-05 | 与 OpenClaw 竞争差距 | [#731](https://github.com/agentscope-ai/CoPaw/issues/731) |

---

## 附录：数据概览

| 指标 | 数值 | 环比 |
|:---|:---:|:---:|
| Issues 更新 | 50 | - |
| Issues 关闭率 | 74% (37/50) | - |
| PR 更新 | 50 | - |
| PR 合并率 | 68% (34/50) | - |
| 新版本发布 | 2 | v0.0.5 正式版 |
| 首次贡献者 PR | 2 | #717, #759 |

---

*本日报基于 GitHub 公开数据生成，数据截止时间：2026-03-06*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-03-06

## 1. 今日速览

ZeptoClaw 今日呈现**高强度开发态势**，24小时内完成12个Issue关闭与5个PR合并，同时有5个PR待审、3个活跃Issue在推进中。项目核心聚焦于**安全加固**（SSRF防护）、**调度可靠性**（cron系统审计）与**内核架构收敛**（安全层统一路由）。值得注意的是，今日出现安全漏洞修复（GHSA-5gqm-m96q-7h65），社区响应迅速，相关PR已提交待合并。整体健康度：**活跃且稳健**，但需关注高优先级崩溃隔离问题的PR评审进度。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PRs

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#256](https://github.com/qhkm/zeptoclaw/pull/256) | @qhkm | **内核收敛三部曲**：安全API重命名（`check_tool_output`→`scan`）、Agent循环工具执行统一路由至`kernel::execute_tool`、新增`zeptoclaw provider status` CLI | **架构里程碑**：终结工具执行路径的分裂状态，所有工具调用（MCP+Agent循环）现在共享统一的安全、污点追踪与指标采集层 |
| [#255](https://github.com/qhkm/zeptoclaw/pull/255) | @qhkm | **Cron调度可靠性三修复**：防重复投递守卫、墙钟锚定tick防漂移、单任务执行超时控制 | 对齐OpenClaw 2026.2.x系列可靠性标准，解决生产环境长期运行的调度漂移与重复执行隐患 |
| [#247](https://github.com/qhkm/zeptoclaw/pull/247) | @qhkm | **xAI(Grok)与百度千帆命名预设** | 降低新用户配置门槛，无需手动`api_base`覆盖即可使用主流国产/海外模型 |
| [#216](https://github.com/qhkm/zeptoclaw/pull/216) | @qhkm | Telegram `/model list`显示用户自定义配置模型 | 改善多模型切换体验，解决[#193](https://github.com/qhkm/zeptoclaw/issues/193)提出的端点切换痛点的基础能力 |
| [#183](https://github.com/qhkm/zeptoclaw/pull/183) | @reneleonhardt | 依赖更新+供应链安全加固（pinning+Dependabot cooldown）+clippy修复 | 技术债务清理，提升CI/CD安全性 |

**整体进展评估**：今日合并内容覆盖**安全架构层**、**核心调度层**、**模型生态层**三个维度，属于近期少见的深度技术迭代日。

---

## 4. 社区热点

### 讨论最活跃议题

| 排名 | Issue/PR | 评论数 | 核心诉求分析 |
|:---|:---|:---|:---|
| 1 | [#193](https://github.com/qhkm/zeptoclaw/issues/193) [CLOSED] LLM端点动态切换 | 3 | **高频运维痛点**：用户在生产环境中遭遇速率限制时，急需无需重启的模型/端点热切换能力。虽已关闭，但Telegram的`/model`命令仅是部分解决，跨通道统一方案仍待观察 |
| 2 | [#222](https://github.com/qhkm/zeptoclaw/issues/222) [OPEN] 每模板能力沙箱 | 1 | **企业级安全需求**：模板作为"自描述安全制品"的愿景，反映社区对多租户场景下细粒度权限控制的期待 |
| 3 | [#259](https://github.com/qhkm/zeptoclaw/issues/259) [OPEN] 任务崩溃隔离加固 | 1 | **生产稳定性焦虑**：panic隔离目前仅Telegram实现，其他通道"裸奔"状态引发对混合部署场景可靠性的担忧 |

**诉求洞察**：社区正从"功能可用"向"生产就绪"迁移，安全隔离、可观测性、动态配置成为新焦点。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复PR | 影响范围 |
|:---|:---|:---|:---|:---|
| **P1-紧急** | [GHSA-5gqm-m96q-7h65](https://github.com/qhkm/zeptoclaw/security/advisories/GHSA-5gqm-m96q-7h65) SSRF漏洞：HTTP重定向跳未验证 | **待合并** | [#261](https://github.com/qhkm/zeptoclaw/pull/261) | `http_request`与`web_fetch`工具，允许中间跳转向内网 |
| **P2-高** | [#259](https://github.com/qhkm/zeptoclaw/issues/259) 异步任务panic无隔离，可致静默崩溃 | **待审PR** | [#265](https://github.com/qhkm/zeptoclaw/pull/265) | 除Telegram外所有通道（Slack/Discord/Webhook/WhatsApp/Lark/Email/MQTT/Serial） |
| **P2-高** | [#244](https://github.com/qhkm/zeptoclaw/issues/244) 超大工具结果上下文溢出 | **已修复** | 已合并 | 大文件读取、大规模git diff等场景 |
| **P3-中** | [#251](https://github.com/qhkm/zeptoclaw/issues/251) 安全API命名误导 | **已修复** | #256 | 代码可维护性，无运行时影响 |

**风险评估**：SSRF漏洞修复[#261](https://github.com/qhkm/zeptoclaw/pull/261)与崩溃隔离PR[#265](https://github.com/qhkm/zeptoclaw/pull/265)构成今日**关键路径**，建议优先评审合并。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 可行性信号 | 版本预测 |
|:---|:---|:---|:---|
| **Harness工程实践**（预提交钩子、结构化日志、轨迹回放等） | [#257](https://github.com/qhkm/zeptoclaw/issues/257) | 引用OpenAI Codex官方实践，作者为项目owner | **高概率v0.3+**：基础设施级改进，需协调开发工作流 |
| **每模板能力沙箱**（工具白名单、shell模式、资源限制） | [#222](https://github.com/qhkm/zeptoclaw/issues/222) | 与#256内核收敛方向一致，需配置系统配合 | **中等概率v0.4**：架构设计已完成，实现复杂度中等 |
| **容器化Agent模式Token追踪** | [#258](https://github.com/qhkm/zeptoclaw/pull/258) | **已有PR待审**，IPC协议扩展已完成 | **高概率下一版本**：PR就绪，仅需评审 |
| **Discord网关HTTP代理支持** | [#262](https://github.com/qhkm/zeptoclaw/pull/262) | **已有PR待审**，企业网络场景刚需 | **高概率下一版本**：场景明确，改动边界清晰 |
| **Skill安装器SSRF防护** | [#260](https://github.com/qhkm/zeptoclaw/pull/260) | **已有PR待审**，复用现有`web_fetch`防护 | **高概率下一版本**：安全合规类，通常优先合并 |

---

## 7. 用户反馈摘要

### 痛点
- **端点切换摩擦**："Most llm endpoints have rate limit, it is difficult to switch to another model/endpoint on the road" ([#193](https://github.com/qhkm/zeptoclaw/issues/193)) — 反映多供应商策略下的运维中断焦虑
- **网络环境限制**：Discord企业网络代理场景"connection fails or is silently dropped" ([#262](https://github.com/qhkm/zeptoclaw/pull/262)) — 云原生/企业部署的连通性障碍

### 满意点
- **安全响应速度**：SSRF漏洞从报告到PR提交当日完成（[#264](https://github.com/qhkm/zeptoclaw/issues/264)/[#263](https://github.com/qhkm/zeptoclaw/issues/263)→[#261](https://github.com/qhkm/zeptoclaw/pull/261)）
- **生态兼容性**：xAI/百度千帆预设降低国产模型接入成本

### 隐忧
- **功能parity不均**：Telegram获得panic隔离优先，其他通道"二等公民"状态 ([#259](https://github.com/qhkm/zeptoclaw/issues/259))

---

## 8. 待处理积压

| 类型 | 项目 | 创建时间 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| **长期PR** | [#183](https://github.com/qhkm/zeptoclaw/pull/183) 依赖更新 | 2026-02-26（8天前） | 供应链安全改进，已关闭 | ✅ 已解决 |
| **设计RFC** | [#257](https://github.com/qhkm/zeptoclaw/issues/257) Harness工程实践 | 2026-03-05（今日） | 零评论，可能淹没在今日高流量中 | ⚠️ 建议owner标记`good first issue`拆分任务，避免搁置 |
| **功能请求** | [#193](https://github.com/qhkm/zeptoclaw/issues/193) 端点动态切换 | 2026-02-27（7天前） | 虽关闭但方案不完整（仅Telegram） | 📌 建议创建follow-up issue追踪跨通道统一方案 |

---

*日报生成时间：2026-03-06 | 数据来源：GitHub API*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 | 2026-03-06

---

## 1. 今日速览

EasyClaw 今日社区活跃度为**低**，过去24小时内新增 3 条 Issue，无 PR 活动及版本发布。Issues 集中于**macOS 升级安装故障**、**多模态模型能力缺失**及**配置迁移路径不一致**三类问题，均涉及用户核心使用体验。值得注意的是，3 条 Issue 均由今日创建且已获初步反馈，响应速度良好，但无代码层面的修复进展。项目当前处于**问题暴露期**，需关注配置迁移的系统性修复。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**无 PR 合并或关闭**

今日代码层面无进展，项目功能迭代处于停滞状态。3 条活跃 Issue 均待技术方案确认，建议维护者优先处理 #10 配置路径问题，该问题具有结构性影响，可能阻碍后续版本升级的用户体验。

---

## 4. 社区热点

| 排名 | Issue | 热度分析 | 链接 |
|:---|:---|:---|:---|
| 🔥 #1 | #10 技能目录路径不一致 | **结构性配置债务**：版本升级后 `.openclaw` → `.easyclaw` 迁移不完全，导致配置与 UI 读取路径分离，用户技能管理失效。反映版本升级策略缺乏完整性验证 | [→](https://github.com/gaoyangz77/easyclaw/issues/10) |
| #2 | #8 macOS26.3 应用内更新失败 | **阻断性体验问题**：应用内下载更新后安装流程中断，附完整复现截图，直接影响 macOS 用户留存 | [→](https://github.com/gaoyangz77/easyclaw/issues/8) |
| #3 | #9 百炼 CodingPlan 视觉能力未接入 | **AI 能力缺口**：多模态模型（qwen3.5/kimi2.5）的视觉理解能力未被 EasyClaw 调用，配置层能力映射不完整 | [→](https://github.com/gaoyangz77/easyclaw/issues/9) |

**核心诉求洞察**：用户群体已从早期尝鲜者转向深度使用者，关注点从"能用"转向"稳定升级"和"完整能力调用"。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 问题类型 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 P0 | [#10](https://github.com/gaoyangz77/easyclaw/issues/10) 技能目录路径不一致 | **配置迁移回归** | Windows 升级用户、技能管理功能 | 无 |
| 🟡 P1 | [#8](https://github.com/gaoyangz77/easyclaw/issues/8) macOS 应用内更新失败 | **安装流程中断** | macOS 26.3 用户 | 无 |
| 🟢 P2 | [#9](https://github.com/gaoyangz77/easyclaw/issues/9) 视觉能力未接入 | **功能缺失** | 百炼 CodingPlan 用户 | 无 |

> **风险评估**：#10 具有数据一致性风险，若用户手动清理 `.openclaw` 目录将导致技能配置永久丢失。

---

## 6. 功能请求与路线图信号

| Issue | 需求本质 | 纳入下一版本可能性 | 关键依赖 |
|:---|:---|:---|:---|
| [#9](https://github.com/gaoyangz77/easyclaw/issues/9) 百炼视觉理解支持 | 多模态输入能力扩展 | **高** | 模型配置 schema 扩展、UI 图片上传组件 |
| - | 配置迁移自动化工具 | **中**（隐含需求） | #10 修复后的迁移脚本 |

**路线图信号**：EasyClaw 作为 AI 助手框架，多模态能力支持是竞争力关键。百炼作为国内主流模型平台，其完整能力接入应纳入近期优先级。

---

## 7. 用户反馈摘要

> 基于 Issue 描述与评论提炼

| 维度 | 反馈内容 |
|:---|:---|
| **痛点** | 版本升级后"数据还在老地方，UI 去新地方找"，配置管理心智负担重 |
| **场景** | 企业开发者通过百炼 CodingPlan 接入国产大模型，期望复用平台完整能力（含视觉） |
| **满意** | Issue 响应速度快，维护者当日即回复 |
| **不满** | 升级体验不连贯，"下载完装不上"破坏信任；多模态能力"有模型用不了" |

**典型用户画像**：国内 AI 应用开发者，深度集成百炼/阿里云生态，对配置稳定性和模型能力完整性敏感。

---

## 8. 待处理积压

**今日无长期积压项**，但需警惕 #10 的潜在连锁反应：

| 预警项 | 说明 | 建议行动 |
|:---|:---|:---|
| #10 配置路径问题 | 若 7 日内无修复方案，将积累大量升级用户的技术债务 | 维护者需确认统一路径策略，提供手动迁移脚本或自动修复工具 |

---

*日报生成时间：2026-03-06 | 数据来源：GitHub API 快照*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*