# OpenClaw 生态日报 2026-03-06

> Issues: 500 | PRs: 500 | 覆盖项目: 10 个 | 生成时间: 2026-03-06 02:23 UTC

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

# OpenClaw 项目动态日报（2026-03-06）

## 一、今日速览

过去 24 小时内，OpenClaw 项目保持高度活跃状态：共产生 **500 条 Issues 更新**（新开 411 条，关闭 89 条）以及 **500 条 PR 更新**（待合并 332 条，已合并 168 条），整体社区参与度维持在较高水平。值得注意的是，本日未发布新版本，但社区讨论热度不减，尤其是安全、平台兼容性和回归问题成为焦点。综合来看，项目处于功能迭代与稳定性修复并重的阶段。

---

## 二、版本发布

本日内无新版本发布（0 个 Release），相关版本信息请关注后续更新。

---

## 三、项目进展

本日共合并/关闭 **168 条 PR**，以下为值得关注的重要进展：

| PR 编号 | 标题 | 状态 | 意义 |
|---------|------|------|------|
| **#37020** | Add taskmaster wallet | CLOSED | 新增钱包功能集成 |
| **#37019** | iMessage channel support | CLOSED | 完善苹果生态消息通道 |
| **#35489** | flush reply pipeline before compaction wait | CLOSED | 解决了大上下文场景下自动压缩阻塞回复管道 7+ 分钟的问题 |
| **#34951** | fix memory-flush timestamped variant files | CLOSED | 修复内存 flush 时生成多余时间戳文件的问题 |
| **#33995** | Telegram hot-reload groups + UI fix | CLOSED | 支持群组配置热重载并修复更新横幅关闭逻辑 |
| **#10275** | Add multilingual support for UI | CLOSED | 为 Web UI 奠定国际化基础（i18n 脚手架） |

此外，以下 PR 正在积极推进中，预计将纳入下一版本：

- **#35345**（XL）：Slack 线程绑定支持，实现与 Discord 类似的 `/acp spawn --thread auto|here` 功能
- **#36590**（L）：新增 GPT-5.4 支持及 Codex OAuth 集成
- **#36815**（L）：Skills 索引优先加载，优化大型技能仓库的启动性能
- **#35679**（L）：`sessions_send_concurrent` 工具并发执行支持

---

## 四、社区热点

以下 Issues 和 PRs 引发最多讨论，反映用户核心诉求：

### 4.1 热门 Issues（按评论数排序）

| Issue 编号 | 标题 | 评论数 | 核心诉求 |
|------------|------|--------|----------|
| **#3460** | [enhancement] Internationalization (i18n) & Localization Support | **77** | 强烈呼吁多语言支持，社区已提交多个 PR，但官方暂无带宽承接 |
| **#75** | [enhancement] Linux/Windows Clawdbot Apps | **33** | macOS/iOS/Android 已有应用，缺失 Linux/Windows 客户端 |
| **#7631** | Windows 插件安装失败（spawn EINVAL） | **21** | Windows 平台兼容性 Bug，npm 子进程调用异常 |
| **#32245** | Vertex 嵌入运行回归错误 | **18** | v2026.3.1 版本升级后 Vertex 模型报错，影响 Telegram 和 cron 任务 |
| **#23538** | Anthropic setup-token 认证返回 401 | **18** | OAuth token 存储后运行时调用失败，隔离环境可复现 |
| **#32828** | 虚假 API 速率限制警告 | **15** | 所有模型均显示速率已达限，实际 API 正常运行，存在误判 |
| **#34810** | 文件系统工具突然失效 | **15** | 凌晨 4 点 ET 时间后，exec/read/write 工具全面失灵 |
| **#11829** | 安全路线图：保护 API Key | **13** | 多处向量可致 API Key 泄露至 LLM 或聊天界面，呼吁分层防护 |
| **#35077** | 回归问题：全新安装后全面故障 | **13** | v2026.3.2 升级后大量 401 错误，系统几乎不可用 |

### 4.2 热门 PRs

- **#34978**：新增 per-agent 沙盒会话可见性覆盖功能，解决全局配置不足问题
- **#36895**：Telegram 媒体本地根路径支持，完善文件传输能力
- **#36315**：修复 Windows 重启后 Gateway 版本号未更新的问题

---

## 五、Bug 与稳定性

以下 Bug 按严重程度排列，部分已有 Fix PR：

### 5.1 严重（Crash/无响应/数据丢失风险）

| Issue 编号 | 问题描述 | 严重类型 | 状态 | 关联 Fix |
|------------|----------|----------|------|----------|
| **#32245** | Vertex 嵌入运行报错 "Cannot convert undefined or null to object" | 回归 | OPEN | — |
| **#34810** | 文件系统工具（exec/read/write）突然全部失效 | 行为异常 | OPEN | — |
| **#33163** | Ollama 原生 API 在 ARM A1 无 GPU 环境无限等待 | 崩溃 | OPEN | — |
| **#36399** | Gemini CLI 多步工具调用 60 秒挂起（疑似 429 限速） | 崩溃 | OPEN | — |
| **#35634** | macOS 右 Option 键触发语音输入导致崩溃 | 崩溃 | CLOSED | — |

### 5.2 高（功能受损但可 workaround）

| Issue 编号 | 问题描述 | 状态 | 关联 Fix |
|------------|----------|------|----------|
| **#7631** | Windows 插件安装 spawn EINVAL | OPEN | — |
| **#27984** | Telegram 5-20MB 文件导致静默死锁 | OPEN | — |
| **#33961** | WhatsApp Baileys v7 QR 配对 100% 失败 | OPEN | — |
| **#27055** | OAuth (ChatGPT Pro) 仅 GPT-4o 可用，GPT-5+ 均失败 | OPEN | — |

### 5.3 中（回归或行为异常）

| Issue 编号 | 问题描述 | 状态 | 关联 Fix |
|------------|----------|------|----------|
| **#35077** | v2026.3.2 全新安装后全面故障 | OPEN | — |
| **#34241** | Azure OpenAI 切换后间歇性无工具执行 | OPEN | — |
| **#34741** | WhatsApp 中途会话同步丢失 | OPEN | — |

---

## 六、功能请求与路线图信号

以下功能请求获得较多关注，部分已有对应 PR：

| Issue/PR | 功能描述 | 需求来源 | 预计纳入 |
|----------|----------|----------|----------|
| **#3460** | i18n 多语言支持 | 77 条评论，社区多次提交 PR | 长期路线图 |
| **#75** | Linux/Windows 原生应用 | 33 条评论，58 👍 | 规划中 |
| **#27445** | `announceTarget` 子任务完成路由 | 6 条评论 | 可能在下一版本 |
| **#25145** | 出站消息审批门禁 | 5 条评论，安全相关 | 待定 |
| **#6731** | Safe/Unsafe 模式 | 安全沙盒需求 | 长期研究 |

---

## 七、用户反馈摘要

从本日 Issues 评论中提炼的关键痛点：

1. **平台覆盖不均**：Linux/Windows 用户强烈呼吁原生应用，macOS/iOS/Android 已完善但其他平台用户被忽视
2. **回归问题频发**：v2026.3.1/3.2 升级后出现多个严重回归，大幅影响可用性
3. **认证复杂性**：Anthropic、OpenAI OAuth、Google OAuth 等多认证流程存在问题，Token 管理混乱
4. **安全焦虑**：API Key 泄露风险引发高度关注，用户期待更严格的密钥保护机制
5. **Windows 兼容性**：插件安装、npm 调用、路径处理等在 Windows 环境下问题突出
6. **大模型支持滞后**：GPT-5、Claude 4/5 等新模型支持不完整，部分功能仅限旧模型可用

---

## 八、待处理积压

以下长期未解决或关注度高的问题需要维护团队重点关注：

| Issue 编号 | 问题 | 首次创建 | 状态 | 备注 |
|------------|------|----------|------|------|
| **#75** | Linux/Windows 应用 | 2026-01-01 | OPEN | 超过 60 天，仅次于 i18n |
| **#4349** | TUI 模型选择器显示全部 600+ 型号 | 2026-01-30 | OPEN | 影响用户体验 |
| **#16151** | 自定义 OpenAI Completions Provider 空响应 | 2026-02-14 | OPEN | 长期未修复 |
| **#26319** | Cron 工具 schema 未注入 | 2026-02-25 | OPEN | 工具不可用 |
| **#21297** | Control UI 按钮因竞态条件永久禁用 | 2026-02-19 | OPEN | 需前端修复 |

---

*本报告基于 2026-03-06 GitHub 公开数据生成，数据截止时间：2026-03-06 24:00（UTC）*

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**报告日期：** 2026-03-06

---

## 一、生态全景

当前个人 AI 助手/自主智能体开源生态呈现**“一超多强、差异化演进”**的格局。以 OpenClaw 为核心参照系（500 条日活更新），生态中已形成明确的技术分工：头部项目聚焦平台能力扩展与安全加固，中层项目深耕垂直场景（企业安全、边缘部署、多渠道集成），尾部项目则处于功能探索期。从社区反馈来看，**多渠道集成、Provider 多样化、安全加固、LLM 灵活性**是驱动生态演进的核心引擎，各项目在技术路线上的分化日趋明显。

---

## 二、各项目活跃度对比

| 项目 | Issues（当日） | PRs（当日） | Releases | 合并效率 | 活跃度分级 |
|------|----------------|-------------|----------|----------|------------|
| **OpenClaw** | 500（411 新开） | 500（332 待合并） | 0 | 33.6% | 🔥 核心枢纽 |
| **PicoClaw** | 23（18 新开） | 285（255 待合并） | 0 | 10.5% | 🚀 快速迭代 |
| **NanoBot** | 29 | 67（23 合并） | 0 | 34.3% | 🚀 快速迭代 |
| **Zeroclaw** | 50（13 新开） | 50（12 合并） | **v0.1.8** | 24.0% | ⬆️ 稳健增长 |
| **NanoClaw** | 23（12 新开） | 50（9 合并） | 0 | 18.0% | ⬆️ 稳健增长 |
| **IronClaw** | 18（13 新开） | 29（6 合并） | 0 | 20.7% | ⬆️ 稳健增长 |
| **LobsterAI** | 26（14 新开） | 22（21 合并） | 0 | 95.5% | ⬆️ 稳健增长 |
| **ZeptoClaw** | 15（3 新开） | 10（5 合并） | 0 | 50.0% | 🔧 深度优化 |
| **TinyClaw** | 3 | 3 | 0 | 0% | 🔸 探索期 |
| **EasyClaw** | 3 | 0 | 0 | — | 🔸 探索期 |

**关键发现：** PicoClaw 待合并 PR 积压达 255 条，为全生态最高，反映出功能扩张期的典型特征；LobsterAI PR 合并效率达 95.5%，问题响应最为积极；EasyClaw 与 TinyClaw 处于低活跃状态，可能需要社区运营介入。

---

## 三、OpenClaw 在生态中的定位

### 3.1 规模优势

OpenClaw 以 **500 条日活更新** 占据生态核心地位，其 Issue 与 PR 规模约为第二名 PicoClaw（285 PRs）的 **1.75 倍**，呈现明显的规模优势。这一量级差异使其成为事实上的**技术规范参照系**：其他项目（如 Zeroclaw、ZeptoClaw）在安全修复（SSRF、Cron 可靠性）上主动从 OpenClaw 移植补丁。

### 3.2 技术路线差异

| 维度 | OpenClaw | Zeroclaw | IronClaw | ZeptoClaw |
|------|----------|----------|----------|-----------|
| **核心方向** | 功能迭代 + 稳定性 | 企业级安全（MCP/TOTP） | Rust 性能 + 测试覆盖 | 轻量安全审计 |
| **架构风格** | 全栈 JS/TS，生态丰富 | 模块化 Go | Rust 原生 | Rust 轻量级 |
| **安全策略** | API Key 分层防护 | 显式可执行路径 + MCP | OsRng 关键随机数 | SSRF 护栏 |
| **社区重心** | i18n、Telegram、GPT-5 | MCP 生态、多租户 | e2e 测试、文档 | Cron 可靠性 |

### 3.3 社区规模对比

OpenClaw 的 i18n Issue 拥有 **77 条评论**，为全生态最高热度需求；其 Linux/Windows 应用缺失问题（33 条评论）反映的平台覆盖不均也是多个项目面临的共性挑战。相较之下，Zeroclaw 企业功能需求更聚焦（Multi-User TOTP 仅 8 条评论），IronClaw 的贡献者参与度较低但测试需求旺盛。

---

## 四、共同关注的技术方向

### 4.1 多渠道集成（Channel Expansion）

| 项目 | 具体诉求 | 进展状态 |
|------|----------|----------|
| **NanoClaw** | 飞书、Google Chat | PR #758（飞书）、#752（Google Chat）进行中 |
| **NanoBot** | 飞书深度优化 | 流式输出、消息格式、Webhook 模式 |
| **LobsterAI** | 飞书机器人 | Issue #299 开放中 |
| **PicoClaw** | IRC 频道 | PR #1138 开发中 |

**分析：** 飞书成为多项目竞逐的焦点通道，反映出中文企业场景的强劲需求。

### 4.2 Provider 多样化与 LLM 灵活性

| 项目 | 新增 Provider | 需求类型 |
|------|---------------|----------|
| **NanoBot** | Venice.ai、Fireworks AI | 新增网关 |
| **LobsterAI** | 有道智云 | 私有化模型支持 |
| **ZeptoClaw** | xAI (Grok)、百度千帆 | 官方预设 |
| **PicoClaw** | 多 Provider 修复 | 兼容性修复 |

**共性诉求：** 用户对**动态切换 LLM 端点**（ZeptoClaw #193）、**Fallback providers 支持 per-provider API keys**（Zeroclaw）的呼声强烈，反映出生产环境对模型可用性的硬性要求。

### 4.3 安全加固（Security Hardening）

- **SSRF 漏洞修复**：ZeptoClaw #261、#263、#264 已修复 HTTP 重定向验证问题
- **密钥管理**：OpenClaw #11813（API Key 泄露防护）、NanoClaw #737（容器环境密钥暴露）
- **随机数安全**：IronClaw #519 替换为 `OsRng`
- **MCP 安全**：Zeroclaw #1379 显式可执行路径、ZeptoClaw #259 panic 隔离

### 4.4 运维可观测性

| 项目 | 功能 | 状态 |
|------|------|------|
| **ZeptoClaw** | `provider status` CLI | PR #250 已合并 |
| **ZeptoClaw** | Token 使用追踪 | Issue #258 进行中 |
| **PicoClaw** | `picoclaw doctor` 命令 | Issue #39 需求强烈 |
| **IronClaw** | 内存清理可视化 | Issue #495 已修复 |

---

## 五、差异化定位分析

| 项目 | 核心定位 | 目标用户 | 架构特点 |
|------|----------|----------|----------|
| **OpenClaw** | 全功能参考实现 | 开发者、进阶用户 | 全栈 JS/TS，最广泛集成 |
| **Zeroclaw** | 企业级安全智能体 | 企业用户、多租户场景 | Go + MCP，安全合规优先 |
| **NanoBot** | 多渠道消息枢纽 | 需要飞书/Telegram/Discord 集成的团队 | Python，通道扩展性强 |
| **LobsterAI** | 桌面端 AI 助手 | 开发者、个人用户 | Electron，侧重本地模型 |
| **PicoClaw** | 边缘/嵌入式部署 | IoT、ARM 设备、低资源环境 | Go 轻量，RISC-V 支持 |
| **IronClaw** | 高性能 Rust 实现 | 重视性能与安全的开发者 | Rust 原生，测试驱动 |
| **ZeptoClaw** | 安全审计轻量版 | 关注安全加固的小团队 | Rust 最小化攻击面 |
| **EasyClaw** | 易用性封装 | 非技术用户 | 简化配置，GUI 优先 |

**关键差异：** PicoClaw/ZeptoClaw 面向边缘计算与资源受限场景，Zeroclaw/IronClaw 面向企业级安全需求，NanoBot 面向多渠道集成，OpenClaw 则是生态“操作系统”角色。

---

## 六、社区热度与成熟度分层

### 🔥 快速迭代阶段（PicoClaw、NanoBot）

- **特征：** PR 积压量大（NanoBot 44 待合并、PicoClaw 255 待合并），功能快速扩张，多通道并行开发
- **风险：** 代码质量控制挑战增加，PicoClaw 已出现竞争条件 Bug（#1151）和死锁风险（#1150）
- **建议：** 需加强 Code Review 与自动化测试覆盖

### ⬆️ 质量巩固阶段（Zeroclaw、IronClaw、LobsterAI）

- **特征：** Issue 关闭率高（LobsterAI 46%），PR 合并效率高（IronClaw 20.7% 持续输出），重心从功能转向稳定性
- **亮点：** LobsterAI PR 合并效率达 95.5%，IronClaw 密集推进 e2e 测试覆盖，Zeroclaw v0.1.8 稳定发布
- **关注点：** 企业级功能深度（IronClaw TOTP/RBAC、Zeroclaw MCP）

### 🔧 深度优化阶段（ZeptoClaw）

- **特征：** 安全修复密集（SSRF、Cron 可靠性），PR #257 探讨测试工程实践，呈现“小而美”演进路径
- **定位：** 安全敏感型用户的轻量选择

### 🔸 探索/停滞阶段（EasyClaw、TinyClaw）

- **特征：** Issue 数量极低（各 3 条），无 PR 合并，版本发布停滞
- **风险：** 社区参与度不足，可能面临项目维护风险

---

## 七、值得关注的趋势信号

### 7.1 行业趋势提炼

| 趋势 | 信号强度 | 开发者参考价值 |
|------|----------|----------------|
| **企业级需求崛起** | 🔴 强 | TOTP/RBAC、MCP 安全沙箱、多租户成为差异化关键，企业场景付费意愿明确 |
| **多模态渠道竞争** | 🔴 强 | 飞书成为必争之地，Discord/Telegram 已有成熟方案，建议评估渠道优先级 |
| **边缘/轻量部署需求** | 🟠 中 | PicoClaw、ZeptoClaw 的资源优化方向值得关注，RISC-V/ARM 支持是蓝海 |
| **安全左移** | 🟠 中 | 各项目均强化安全审计，SSRF、密钥管理、panic 隔离是基础防线 |
| **Provider 碎片化** | 🟡 中 | 20+ Provider 支持带来兼容性挑战，需建立抽象层或参考 LiteLLM 方案 |

### 7.2 开发者行动建议

1. **若关注企业场景：** 优先研究 Zeroclaw（安全 MCP、TOTP）与 IronClaw（Rust 性能）的技术选型
2. **若关注渠道集成：** NanoBot 的飞书深度优化方案最具参考价值，其 WebSocket 与流式输出已趋成熟
3. **若关注轻量部署：** PicoClaw 的 ARM/RISC-V 适配经验，以及 ZeptoClaw 的安全审计实践值得关注
4. **若作为核心参考：** OpenClaw 的功能迭代路线图（GPT-5、Slack 线程、i18n）是生态风向标

---

**报告说明：** 本分析基于 2026-03-06 各项目 GitHub 公开数据生成，数据截止时间 UTC 24:00。活跃度评估综合考虑 Issue/PR 数量、合并效率、版本发布频率及 Bug 修复响应速度。

---

## 同赛道项目详细报告

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报

**日期：** 2026-03-06

---

## 1. 今日速览

过去 24 小时内，Zeroclaw 项目保持高度活跃：共处理 **50 条 Issues 更新**（13 条新开/活跃，37 条已关闭）和 **50 条 PR 更新**（38 条待合并，12 条已合并/关闭）。社区参与度维持高位，多个安全和功能改进 PR 正在推进。项目已发布 **v0.1.8** 版本，修复了安全配置和渠道消息重放问题。当前有 **2 个 OPEN 状态的高优先级 Issue** 需要关注，涉及 MCP 服务器支持和多路由功能。

---

## 2. 版本发布

### v0.1.8 已发布 ✅

**发布状态：** 已合并至主分支

**更新内容：**

| 类型 | 描述 | PR |
|------|------|-----|
| 🔒 安全修复 | 允许在 `allowed_commands` 中使用显式可执行文件路径 | #1379 |
| 🐛 Bug 修复 | 防止 Slack 消息在重启后重复重放 | #1378 |
| ⚙️ 配置修复 | 加强配置 Enforcement 相关修复 | (PR 中未完整列出) |

**迁移注意事项：** 无重大破坏性变更，主要为内部安全加固和渠道兼容性修复。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR # | 标题 | 状态 | 推进内容 |
|------|------|------|----------|
| #2895 | ci: replace all workflows with simplified CI/CD pipeline | OPEN | 删除 22 个旧工作流文件，简化为 3 个工作流 (ci.yml, release.yml, promote-release.yml) |
| #2894 | feat: MCP hot reload with SIGHUP support | OPEN | 实现 MCP 配置热重载，用户可通过 SIGHUP 信号重新加载 MCP 服务器，无需重启 daemon |
| #2891 | fix(channels): wire session strategy into conversation history keying | OPEN | 修复 Discord/Slack/Mattermost 渠道会话历史 keying 问题，纳入 session_config.strategy |
| #2845 | fix(tools/process): keep tracked process on kill failure paths | OPEN | 修复进程工具在 kill 失败路径下的回归问题，保持进程追踪准确性 |
| #2890 | feat(release): v0.1.9 - Provider-neutral onboarding + Electric Blue dashboard | OPEN | v0.1.9 预发布：Provider 中立 onboarding + Electric Blue 仪表盘 |

**项目整体评估：** 多个核心改进正在积极推进，MCP 热重载和 CI/CD 简化是本次更新亮点，v0.1.9 路线图清晰。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 点赞 | 状态 |
|---------|------|--------|------|------|
| [#1380](https://github.com/zeroclaw-labs/zeroclaw/issues/1380) | [Feature] External MCP Server Support | **12** | 8 | CLOSED |
| [#1856](https://github.com/zeroclaw-labs/zeroclaw/issues/1856) | [Feature] Multi-User TOTP Enrollment and Role-Based Permissions | **8** | 0 | CLOSED |
| [#1381](https://github.com/zeroclaw-labs/zeroclaw/issues/1381) | [Bug] Zeroclaw can't send image to Discord | **7** | 0 | CLOSED |
| [#2486](https://github.com/zeroclaw-labs/zeroclaw/issues/2486) | [Bug] Issues with skill mutual invocation | **5** | 0 | CLOSED |
| [#2682](](https://github.com/zeroclaw-labs/zeroclaw/issues/2682)) | [Bug] Integrations Failed to load | **5** | 0 | CLOSED |

### 热点分析

**#1380 External MCP Server Support** 是社区最强烈的功能需求（8 👍），用户呼吁支持通过 npm 或远程 MCP 服务器扩展工具生态。该需求已完成讨论并关闭，预计将在后续版本中实现。

**#1856 Multi-User TOTP** 反映了企业级场景需求，要求每个用户拥有独立的 TOTP 密钥和基于角色的权限控制，体现了 ZeroClaw 向多用户协作方向演进的趋势。

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

| 严重程度 | Issue # | 描述 | 状态 | Fix PR |
|----------|---------|------|------|--------|
| **S0** (数据丢失/安全风险) | [#2486](https://github.com/zeroclaw-labs/zeroclaw/issues/2486) | Skill 互相调用触发安全警告 | CLOSED | - |
| **S0** | [#2600](https://github.com/zeroclaw-labs/zeroclaw/issues/2600) | Raspberry 3B+ 上无法创建文件/文件夹 | CLOSED | - |
| **S0** | [#2679](https://github.com/zeroclaw-labs/zeroclaw/issues/2679) | 审计日志配置无效 | CLOSED | - |
| **S1** (工作流阻塞) | [#2782](https://github.com/zeroclaw-labs/zeroclaw/issues/2782) | Discord 环境下无法写入/编辑文件 | CLOSED | - |
| **S1** | [#2702](https://github.com/zeroclaw-labs/zeroclaw/issues/2702) | Matrix 渠道 OTK 上传循环导致 E2EE 失败 | CLOSED | - |
| **S1** | [#2551](https://github.com/zeroclaw-labs/zeroclaw/issues/2551) | OpenAI Codex WebSocket 流式失败无 SSE 回退 | CLOSED | - |
| **S2** (降级行为) | [#2682](https://github.com/zeroclaw-labs/zeroclaw/issues/2682) | Integrations 加载失败 | CLOSED | - |
| **S2** | [#2537](https://github.com/zeroclaw-labs/zeroclaw/issues/2537) | start_channels 不使用 model_routes | CLOSED | - |

**稳定性评估：** 过去 24 小时关闭的 Bug 数量较多（37 条 Issues 关闭），S0/S1 级别问题已全部修复。当前暂无未解决的高优先级 Bug 报告。

---

## 6. 功能请求与路线图信号

### 新功能需求（按关注度排序）

| Issue # | 功能描述 | 评论数 | 状态 | 关联 PR |
|---------|----------|--------|------|---------|
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | Multi-Agent Routing (多代理路由) | 2 | OPEN | - |
| [#2703](https://github.com/zeroclaw-labs/zeroclaw/issues/2703) | 按需加载 Skill 而非全量系统提示注入 | 3 | CLOSED | - |
| [#2602](https://github.com/zeroclaw-labs/zeroclaw/issues/2602) | 添加 LiteLLM 作为注册 Provider 别名 | 3 | CLOSED | - |
| [#2517](https://github.com/zeroclaw-labs/zeroclaw/issues/2517) | Fallback providers 支持 per-provider API keys | 3 | CLOSED | - |

### 路线图信号

- **MCP 生态扩展：** #1380 (External MCP Server Support) 已完成讨论，预计纳入后续版本
- **多代理架构：** #2767 明确提出多隔离代理 + 绑定路由需求，与当前 PR #2891 (session strategy) 方向一致
- **Provider 多样性：** LiteLLM 支持、per-provider API keys 需求表明用户对多模型网关的强烈需求
- **性能优化：** #2703 按需 Skill 加载可显著减少启动时系统提示膨胀

---

## 7. 用户反馈摘要

### 真实痛点与使用场景

| 场景 | 用户反馈 | 来源 Issue |
|------|----------|------------|
| **树莓派部署** | v0.1.7 在 Raspberry Pi 3B+ 上无法创建文件，安全沙箱问题 | #2600 |
| **Discord 集成** | 无法发送图片到 Discord，功能缺失 | #1381 |
| **企业安全** | 需要多用户 TOTP 和基于角色的权限控制 | #1856 |
| **审计合规** | 审计日志配置无效，无法创建日志文件 | #2679 |
| **开发体验** | MCP 配置更改需重启整个 daemon，期望热重载 | #2894 |

### 满意度观察

- **已满足需求：** 社区对 MCP 扩展性、多渠道集成（Discord/Slack/Mattermost）有明确诉求，项目响应积极
- **待改进点：** 边缘平台兼容性（Raspberry Pi）、企业级功能（TOTP/RBAC）需加强

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue # | 标题 | 创建时间 | 状态 | 提醒 |
|---------|------|----------|------|------|
| [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) | Error: Invalid schema for function 'channel_ack_config' | 2026-03-02 | **OPEN** | S1 级别，影响 Agent 对话 |
| [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) | channels_config.feishu cannot start | 2026-03-02 | **OPEN** | S2 级别，飞书渠道连接失败 |
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | Multi-Agent Routing | 2026-03-04 | **OPEN** | 重要功能需求 |

### 待合并的高优先级 PR

| PR # | 标题 | 风险等级 | 状态 |
|------|------|----------|------|
| #2895 | ci: replace all workflows with simplified CI/CD | medium | OPEN |
| #2894 | feat: MCP hot reload with SIGHUP | - | OPEN |
| #2774 | feat(memory): postgres_qdrant_hybrid backend | high | OPEN |
| #2757 | fix(security): harden process tool lifecycle | high | OPEN |

---

**报告生成时间：** 2026-03-06  
**数据来源：** GitHub Zeroclaw Labs Repository

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-06)

---

## 1. 今日速览

过去24小时内，EasyClaw 项目保持一定的社区活跃度，共产生 **3 条新 Issue**，主要涉及功能适配、Bug 反馈和配置路径迁移问题。**无 PR 更新** 或新版本发布，项目整体处于问题收集与排查阶段。3 个 Issue 均处于 OPEN 状态，其中功能适配类问题获得较多关注（Issue #9 包含截图说明）。建议维护者优先处理路径不一致问题（Issue #10），该问题直接影响用户体验和数据一致性。

---

## 2. 版本发布

**无新版本发布**

近期无 Release 更新，项目可能处于维护周期或等待功能完善。

---

## 3. 项目进展

**过去24小时无 PR 合并或关闭**

项目暂无代码层面的推进，所有工作可能集中在 Issue 讨论和需求梳理阶段。

---

## 4. 社区热点

### 🔥 Issue #9: easyclaw接入百炼CodingPlan后，没有完全支持模型能力，如视觉理解

- **链接**: https://github.com/gaoyangz77/easyclaw/issues/9
- **作者**: @slowayear
- **状态**: OPEN
- **评论数**: 3 ⭐
- **摘要**: 百炼的 Coding Plan 中，qwen3.5 和 kimi2.5 是支持视觉理解的，但 EasyClaw 默认配置只有文本能力，无法匹配对应模型的视觉理解能力。

**分析**: 该 Issue 涉及多模型能力适配问题，用户已附上截图说明当前配置限制。用户希望 EasyClaw 能自动识别并启用模型的视觉理解能力，而非仅依赖默认文本配置。这是功能增强类需求，可能需要扩展模型配置检测逻辑。

---

### 📌 Issue #10: 技能目录路径不一致 - 版本升级后配置与 UI 读取路径分离

- **链接**: https://github.com/gaoyangz77/easyclaw/issues/10
- **作者**: @slowayear
- **状态**: OPEN
- **评论数**: 1
- **摘要**: 版本升级后数据目录从 `.openclaw` 迁移到 `.easyclaw`，但迁移不完全。主配置文件指向 `C:\Users\{user}\.openclaw`，而 UI 实际读取 `C:\Users\{user}\.easyclaw\openclaw\skills`。

**分析**: 这是一个**严重的产品一致性 Bug**。路径不一致可能导致用户配置的技能无法被正确加载，影响核心功能使用。建议优先处理。

---

## 5. Bug 与稳定性

### ⚠️ 高优先级

| Issue | 描述 | 状态 | 严重程度 |
|-------|------|------|----------|
| [#10](https://github.com/gaoyangz77/easyclaw/issues/10) | 技能目录路径不一致 - 配置与 UI 读取路径分离 | OPEN | **高** - 影响技能加载 |
| [#8](https://github.com/gaoyangz77/easyclaw/issues/8) | macOS 26.3 应用内下载更新后无法正常安装更新 | OPEN | **高** - 影响用户升级 |

### 📝 问题说明

- **Issue #8**: 用户在 macOS 26.3 环境下通过应用内下载更新时遇到安装失败问题，已附上 3 张步骤截图。该问题可能影响用户无法获取最新版本。
- **Issue #10**: 数据目录迁移不完整，导致配置文件与 UI 读取路径分离，用户配置的技能可能无法正常加载。

**暂无 Fix PR**，建议维护者尽快介入排查。

---

## 6. 功能请求与路线图信号

### 💡 Issue #9: 视觉理解能力适配

- **需求**: EasyClaw 接入百炼 CodingPlan 后，应自动识别并启用 qwen3.5、kimi2.5 等模型的视觉理解能力，而非仅支持文本模式。
- **潜在影响**: 若实现，将增强多模型适配能力，提升 EasyClaw 在多模态场景下的竞争力。
- **纳入版本可能性**: 中等，需评估实现复杂度，可能作为后续版本功能点。

---

## 7. 用户反馈摘要

### 核心痛点

1. **功能适配不完整** (Issue #9): 用户使用百炼 CodingPlan 时，发现 EasyClaw 未充分释放模型的视觉理解能力，限制了使用场景。
2. **安装/更新失败** (Issue #8): macOS 用户反馈应用内下载更新后无法正常安装，影响版本迭代体验。
3. **路径迁移遗留问题** (Issue #10): 升级用户面临配置与 UI 路径不一致，可能导致技能配置失效。

### 满意度信号

- 用户积极参与 Issue 讨论（Issue #9 已有 3 条评论），说明社区对项目关注度高，期望产品能力持续完善。
- Issue #10 和 #9 由同一用户 @slowayear 报告，该用户可能是深度用户或贡献者，建议维护者保持沟通。

---

## 8. 待处理积压

| Issue | 描述 | 创建时间 | 状态 | 提醒 |
|-------|------|----------|------|------|
| [#8](https://github.com/gaoyangz77/easyclaw/issues/8) | macOS 26.3 更新安装失败 | 2026-03-05 | OPEN | 需复现排查 |
| [#9](https://github.com/gaoyangz77/easyclaw/issues/9) | 百炼模型视觉理解能力未适配 | 2026-03-05 | OPEN | 需功能评估 |
| [#10](https://github.com/gaoyangz77/easyclaw/issues/10) | 技能目录路径不一致 | 2026-03-05 | OPEN | **建议优先处理** |

**提醒**: 所有 3 个 Issue 均创建于 2026-03-05 且处于 OPEN 状态，建议维护者尽快响应，避免社区参与度下降。

---

*报告生成时间: 2026-03-06 | 数据来源: GitHub (gaoyangz77/easyclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

```json
{
  "date": "2026-03-06",
  "project": "LobsterAI (netease-youdao/LobsterAI)",
  "report": {
    "summary": "过去24小时项目保持高度活跃，共处理26条Issue和22条PR。Issue活跃度较高（新开/活跃14条），PR合并效率显著（21条已合并/关闭）。重点问题集中在VM沙箱兼容性、中文路径处理、Electron启动等方面。社区反馈积极，多项功能请求（飞书机器人、Discord预回应、Linux版本）体现用户对多平台支持的期待。",
    
    "version_release": null,
    
    "project_progress": {
      "highlights": [
        {
          "pr_number": 291,
          "title": "NIM SDK 迁移至 npm 包，过滤在线消息，新增 P2P 已读回执",
          "status": "已合并",
          "impact": "删除内嵌SDK约53000行代码，减少项目体积，提升可维护性；新增P2P已读回执功能改善消息体验"
        },
        {
          "pr_number": 301,
          "title": "修复 mac 沙箱相关问题",
          "status": "已合并",
          "impact": "解决macOS 26.2系统上VM沙箱运行失败问题"
        },
        {
          "pr_number": 300,
          "title": "修复停止对话切换模型后继续对话报错的问题",
          "status": "已合并",
          "impact": "修复核心交互流程bug，提升用户体验"
        },
        {
          "pr_number": 297,
          "title": "修复 Windows 端任务回答时cmd 弹出的 bug",
          "status": "已合并",
          "impact": "消除Windows平台后台任务运行时不必要的cmd弹窗"
        },
        {
          "pr_number": 279,
          "pr_number_v2": 287,
          "title": "解决 OpenClaw gateway 在 Windows 上的启动失败问题",
          "status": "已合并",
          "impact": "通过自动提取ESM模块和CJS wrapper机制，解决Windows平台ASAR兼容性问题"
        },
        {
          "pr_number": 276,
          "title": "AI团队增加有道智云供应商渠道",
          "status": "已合并",
          "impact": "新增有道智云模型提供商，支持私有化DeepSeek、Kimi等模型配置"
        },
        {
          "pr_number": 289,
          "title": "mcp市场支持动态配置",
          "status": "已合并",
          "impact": "增强MCP市场功能灵活性"
        }
      ]
    },
    
    "community_hotspots": [
      {
        "issue_number": 185,
        "title": "建议custom供应商支持 openai 的新格式，目前 gpt-5.3-codex 用不了",
        "comments": 3,
        "status": "OPEN",
        "link": "https://github.com/netease-youdao/LobsterAI/issues/185",
        "analysis": "用户请求支持OpenAI新的Responses API格式，反映了对最新模型兼容性的需求。这是技术演进驱动的功能请求，涉及API迁移。"
      },
      {
        "issue_number": 12,
        "title": "M2 Pro 非常卡，打字一顿一顿的",
        "comments": 3,
        "status": "CLOSED",
        "link": "https://github.com/netease-youdao/LobsterAI/issues/12",
        "analysis": "性能问题反馈，已关闭。用户在ARM Mac设备上遇到严重卡顿，影响基础使用体验。"
      },
      {
        "issue_number": 196,
        "title": "不支持find-skills",
        "comments": 2,
        "status": "CLOSED",
        "link": "https://github.com/netease-youdao/LobsterAI/issues/196",
        "analysis": "Vercel AI SDK的find-skills功能不兼容，已关闭。"
      },
      {
        "issue_number": 275,
        "title": "VM沙箱不可用",
        "comments": 2,
        "status": "OPEN",
        "link": "https://github.com/netease-youdao/LobsterAI/issues/275",
        "analysis": "macOS 26.2系统上PCI插槽耗尽导致virtio-9p-pci无法加载，是系统兼容性新问题，需关注。"
      },
      {
        "issue_number": 230,
        "title": "对中文支持不友好，路径中有中文会额外增加空格",
        "comments": 2,
        "status": "OPEN",
        "link": "https://github.com/netease-youdao/LobsterAI/issues/230",
        "analysis": "国际化体验问题，中文文件名处理不当导致功能失效，影响国内用户基础使用。"
      }
    ],
    
    "bugs_and_stability": [
      {
        "severity": "HIGH",
        "issue_number": 275,
        "title": "VM沙箱不可用（macOS 26.2）",
        "description": "PCI: no slot/function available for virtio-9p-pci",
        "status": "OPEN",
        "has_fix_pr": false,
        "link": "https://github.com/netease-youdao/LobsterAI/issues/275"
      },
      {
        "severity": "HIGH",
        "issue_number": 284,
        "title": "failed to start the electron app (Arch Linux + awesome-wm)",
        "description": "在无桌面环境的Arch Linux上运行electron:dev失败",
        "status": "OPEN",
        "has_fix_pr": false,
        "link": "https://github.com/netease-youdao/LobsterAI/issues/284"
      },
      {
        "severity": "MEDIUM",
        "issue_number": 230,
        "title": "中文路径处理问题",
        "description": "文件名中的中文字符被额外添加空格，导致文件无法识别",
        "status": "OPEN",
        "has_fix_pr": false,
        "link": "https://github.com/netease-youdao/LobsterAI/issues/230"
      },
      {
        "severity": "MEDIUM",
        "issue_number": 105,
        "title": "设置本地模型提示max_completion_tokens过大",
        "description": "本地模型llm模式下提示token限制错误",
        "status": "OPEN",
        "has_fix_pr": false,
        "link": "https://github.com/netease-youdao/LobsterAI/issues/105"
      },
      {
        "severity": "MEDIUM",
        "issue_number": 292,
        "title": "上下文超长后会导致app界面被强制拉伸高度",
        "description": "长上下文导致界面白屏",
        "status": "OPEN",
        "has_fix_pr": false,
        "link": "https://github.com/netease-youdao/LobsterAI/issues/292"
      },
      {
        "severity": "LOW",
        "issue_number": 269,
        "title": "使用ollama时无法获取上下文",
        "status": "CLOSED",
        "has_fix_pr": false,
        "link": "https://github.com/netease-youdao/LobsterAI/issues/269"
      }
    ],
    
    "feature_requests": [
      {
        "issue_number": 299,
        "title": "是否可以支持飞书机器人群里交流",
        "status": "OPEN",
        "priority": "MEDIUM",
        "link": "https://github.com/netease-youdao/LobsterAI/issues/299",
        "notes": "用户希望在飞书平台使用LobsterAI机器人"
      },
      {
        "issue_number": 288,
        "title": "希望在设置中添加discord的预回应",
        "status": "OPEN",
        "priority": "MEDIUM",
        "link": "https://github.com/netease-youdao/LobsterAI/issues/288",
        "notes": "类似OpenClaw的体验优化，添加[正在思考]等提示"
      },
      {
        "issue_number": 273,
        "title": "[Suggestion]能否开发Ubuntu Linux版本？",
        "status": "CLOSED",
        "priority": "HIGH",
        "link": "https://github.com/netease-youdao/LobsterAI/issues/273",
        "notes": "Linux平台需求强烈，已有相关PR修复Windows兼容性，Linux支持可能纳入路线图"
      },
      {
        "issue_number": 282,
        "title": "没有上下文管理的功能",
        "status": "OPEN",
        "priority": "HIGH",
        "link": "https://github.com/netease-youdao/LobsterAI/issues/282",
        "notes": "功能缺口：自动上下文管理、自动压缩、Token消耗统计、上下文超限时自动压缩"
      },
      {
        "issue_number": 145,
        "title": "关于tavily等skill的api key问题",
        "status": "OPEN",
        "priority": "MEDIUM",
        "link": "https://github.com/netease-youdao/LobsterAI/issues/145",
        "notes": "环境变量配置在mac下不生效，用户临时用记忆条目解决但有安全风险"
      }
    ],
    
    "user_feedback_summary": {
      "pain_points": [
        "macOS 26.2系统兼容性问题（VM沙箱、Electron启动）",
        "中文环境用户体验（路径空格、文件名识别）",
        "本地模型token限制配置不合理",
        "平台覆盖不完整（Linux版本缺失）",
        "API Key管理不够安全便捷"
      ],
      "positive_signals": [
        "自动更新功能请求活跃，说明用户期待更便捷的版本管理",
        "多平台集成需求（飞书、Discord）反映生态扩展期待",
        "上下文管理功能请求说明用户对长对话场景有需求",
        "数学能力skill需求反映专业场景使用"
      ],
      "satisfaction_indicators": [
        "Issue关闭率较高（12/26 ≈ 46%），问题响应积极",
        "PR合并效率高（21/22 ≈ 95%），开发迭代顺畅",
        "Windows兼容性持续改进（多个相关PR）"
      ]
    },
    
    "backlog_reminder": {
      "items": [
        {
          "issue_number": 145,
          "title": "关于tavily等skill的api key问题",
          "age_days": 7,
          "last_update": "2026-03-05",
          "link": "https://github.com/netease-youdao/LobsterAI/issues/145",
          "note": "环境变量配置不生效，需提供更安全的API Key管理方案"
        },
        {
          "issue_number": 105,
          "title": "设置本地模型提示max_completion_tokens过大",
          "age_days": 9,
          "last_update": "2026-03-05",
          "link": "https://github.com/netease-youdao/LobsterAI/issues/105",
          "note": "token配置逻辑需优化"
        },
        {
          "issue_number": 282,
          "title": "没有上下文管理的功能",
          "age_days": 1,
          "last_update": "2026-03-05",
          "link": "https://github.com/netease-youdao/LobsterAI/issues/282",
          "note": "新提出的重要功能缺口，需评估优先级"
        },
        {
          "issue_number": 293,
          "title": "playwright这个工具用不了",
          "age_days": 1,
          "last_update": "2026-03-05",
          "link": "https://github.com/netease-youdao/LobsterAI/issues/293",
          "note": "MCP工具依赖问题，npx下载失败"
        }
      ]
    }
  }
}
```

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-06)

## 今日速览

过去24小时内，ZeptoClaw 项目保持高度活跃：共处理 **15 条 Issues**（3 条新开/活跃，12 条关闭）和 **10 条 PRs**（5 条待合并，5 条已合并/关闭）。版本发布数为 0。安全修复成为今日焦点——项目集中处理了多起 SSRF 漏洞和安全加固任务，同时 cron 调度器的可靠性审计与修复也告完成，整体项目健康度良好，正在向更安全、更稳定的方向演进。

---

## 版本发布

**无新版本发布**

---

## 项目进展

| PR | 状态 | 概述 | 链接 |
|---|---|---|---|
| #256 | 已合并 | **kernel convergence**：安全扫描重命名、agent loop gate 路由、provider status CLI | [#256](https://github.com/qhkm/zeptoclaw/pull/256) |
| #255 | 已合并 | **fix(cron)**：审计并修复调度器可靠性，实现重复投递防护、时钟漂移修正 | [#255](https://github.com/qhkm/zeptoclaw/pull/255) |
| #247 | 已合并 | **feat(providers)**：添加 xAI (Grok) 和百度千帆预设 | [#247](https://github.com/qhkm/zeptoclaw/pull/247) |
| #216 | 已合并 | **fix(channels)**：`/model list` 现在显示用户配置的模型 | [#216](https://github.com/qhkm/zeptoclaw/pull/216) |
| #183 | 已合并 | **chore**：更新依赖（cargo, npm, Docker, GitHub Actions），加强供应链安全 | [#183](https://github.com/qhkm/zeptoclaw/pull/183) |

**推进的关键能力**：
- **安全架构收敛**：agent loop 工具执行现在统一经过 `kernel::execute_tool()`，实现统一的污点追踪、安全扫描和指标采集
- **Cron 可靠性**：从 OpenClaw 移植了三个关键修复（重复投递防护、时钟漂移修正、执行超时）
- **多 provider 支持**：新增 xAI Grok 和百度千帆官方预设，降低用户接入门槛

---

## 社区热点

| Issue/PR | 讨论热度 | 主题 | 链接 |
|---|---|---|---|
| #193 | 3 条评论 | **[feat] LLM endpoint switching on the fly** - Telegram 端动态切换 LLM 端点/模型 | [#193](https://github.com/qhkm/zeptoclaw/issues/193) |
| #222 | 1 条评论 | **[feat] per-template capability sandbox** - 模板级能力沙箱声明 | [#222](https://github.com/qhkm/zeptoclaw/issues/222) |
| #259 | 1 条评论 | **[bug] harden spawned task crash isolation** - 任务 panic 隔离加固 | [#259](https://github.com/qhkm/zeptoclaw/issues/259) |
| #257 | RFC 提案 | **[rfc] adopt harness engineering practices** - 引入 OpenAI 风格的测试工程实践 | [#257](https://github.com/qhkm/zeptoclaw/issues/257) |

**热点分析**：

1. **#193 LLM 端点动态切换**：社区对多 LLM 端点灵活切换有明确需求，尤其在单个端点触发速率限制时。该功能将增强 Telegram 场景下的可用性。

2. **#257 Harness Engineering RFC**：项目正在探讨引入 Git pre-push 钩子、自动化测试框架等工程实践，这是提升 agent 驱动开发可靠性的长期投资信号。

3. **#222 模板级沙箱**：自描述安全模板的概念受到关注，允许模板声明自己的工具白名单、shell 模式和资源限制，这是向更精细化安全管控演进的方向。

---

## Bug 与稳定性

| Issue | 严重程度 | 状态 | 描述 | 修复状态 |
|---|---|---|---|---|
| #259 | **P2-high** | OPEN | **spawned task crash isolation**：Telegram 之外的其他 channel（Slack、Discord、Webhook 等）和 tool execution join_all 路径缺乏 panic 隔离 | PR #265 处理中 |
| #264 | **Security** | CLOSED | **http_request redirect SSRF**：未验证中间重定向 hop，允许内网访问 | PR #261 已修复 |
| #263 | **Security** | CLOSED | **web_fetch redirect SSRF**：仅在 reqwest 跟随完后才验证最终 URL | PR #261 已修复 |
| #252 | **P2-high** | CLOSED | **cron 重复投递**：进程崩溃后重启可能导致同一任务执行两次 | PR #255 已修复 |
| #253 | **P3-normal** | CLOSED | **cron 时钟漂移**：固定 sleep 间隔导致长期调度偏移 | PR #255 已修复 |

**稳定性评估**：Cron 调度器的历史遗留问题已系统性修复；安全漏洞（SSRF）已通过 PR #261 统一处理。唯一待解的高优先级问题是 #259（任务 panic 隔离），PR #265 正在处理中。

---

## 功能请求与路线图信号

| Issue | 优先级 | 功能 | 潜在版本 |
|---|---|---|---|
| #222 | P3-normal | **per-template capability sandbox** - 模板级工具白名单、shell 模式、资源限制声明 | 路线图讨论中 |
| #193 | - | **Telegram 端动态切换 LLM 端点** - `/models` 和 `/model` 命令 | 待实现 |
| #257 | RFC | **harness engineering practices** - 自动化测试工程实践 | 长期规划 |
| #258 | OPEN | **containerized agent token 使用追踪** - IPC 协议添加 UsageSnapshot | PR 在审 |

**路线图信号**：
- **安全优先**：连续的安全修复（SSRF、panic 隔离、污点追踪）表明项目正处在安全加固周期
- **可观测性增强**：`provider status` CLI (#250) 和 token 追踪 (#258) 表明运维友好性是近期重点
- **多 channel 可靠**：Discord WebSocket 代理支持 (#262) 反映企业/容器化部署场景需求

---

## 用户反馈摘要

从 Issues 评论中提炼的核心诉求：

1. **Telegram 灵活性**：用户 @superhero75 反馈在移动场景下频繁遇到 LLM 速率限制，希望能够在对话中动态切换模型/端点（#193）

2. **安全问题紧迫**：安全研究员报告了 SSRF 漏洞（#263, #264），项目快速响应并修复

3. **Cron 可靠性**：内部审计发现 cron 调度在长时间运行后可能出现时钟漂移和重复执行，社区从 OpenClaw 移植了修复方案

4. **Provider 可见性**：用户无法查看实际使用的 provider chain，#250 解决了这个可观测性痛点

---

## 待处理积压

| Issue | 开放时长 | 状态 | 提醒 |
|---|---|---|---|
| #259 | 1 天 | OPEN | **高优先级**：spawned task panic 隔离，PR #265 正在处理，建议尽快合并 |
| #222 | 3 天 | OPEN | **功能特性**：模板级沙箱设计，需要进一步评审和设计确认 |
| #258 | 1 天 | OPEN | **功能增强**：containerized agent token 追踪，需代码评审 |
| #262 | 1 天 | **待合并** | Discord HTTP CONNECT 代理支持，建议合并窗口考虑 |
| #260 | 1 天 | **待合并** | SSRF 护栏添加到 skill installer，建议安全优先合并 |
| #261 | 1 天 | **待合并** | GHSA-5gqm-m96q-7h65 漏洞修复，**建议紧急合并** |

**维护者提醒**：
- #261 涉及公开安全漏洞修复，**建议优先合并**
- #259 和 #265 形成配对（Issue + Fix PR），建议一并处理
- #257 是 RFC 性质的长期讨论，可暂不急于决策

---

*报告生成时间：2026-03-06 | 数据来源：GitHub qhkm/zeptoclaw*

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-06)

## 1. 今日速览

过去24小时，NanoBot 项目保持高度活跃：共产生 **96 条更新**（29 条 Issues + 67 条 PRs），其中 **23 个 PR 已被合并/关闭**，**5 个 Issue 已关闭**。飞书(Feishu) 通道成为今日开发热点，多项优化 PR 集中提交（消息格式智能选择、流式输出、Webhook 模式等）。社区反馈主要集中在 Telegram/DeepSeek 无响应、Copilot 工具调用失败、SSL 证书路径等生产环境问题上，整体项目健康度良好但存在若干阻塞用户体验的 Bug 需关注。

---

## 2. 版本发布

**无新版本发布** 🎯

---

## 3. 项目进展

| PR 编号 | 状态 | 标题 | 贡献者 | 说明 |
|---------|------|------|--------|------|
| [#1597](https://github.com/HKUDS/nanobot/pull/1597) | ✅ 已关闭 | fix(feishu): smart message format selection | @pikaqqqqqq | 修复飞书消息强制使用交互式卡片的问题，现在可智能选择普通消息或卡片格式 |
| [#1596](https://github.com/HKUDS/nanobot/pull/1596) | 🔄 进行中 | feat(feishu): streaming card output with Card Kit API | @pikaqqqqqq | 实现流式输出，用户可实时看到生成内容，改善长响应等待体验 |
| [#1595](https://github.com/HKUDS/nanobot/pull/1595) | 🔄 进行中 | feat(feishu): add webhook mode with signature verification | @pikaqqqqqq | 新增 Webhook 模式支持（带签名验证），适用于反向代理/无服务器部署场景 |
| [#1594](https://github.com/HKUDS/nanobot/pull/1594) | 🔄 进行中 | fix(feishu): use msg_type "media" for mp4 video files | @pikaqqqqqq | 修复视频文件使用 "file" 类型导致需下载才能播放的问题 |
| [#1593](https://github.com/HKUDS/nanobot/pull/1593) | 🔄 进行中 | feat(feishu): add typing indicator during message processing | @pikaqqqqqq | 增加"正在输入"指示器，提升用户交互反馈感知 |
| [#1586](https://github.com/HKUDS/nanobot/pull/1586) | 🔄 进行中 | feat(provider): Venice.ai provider support | @fat-operator | 新增 Venice.ai 作为 LLM 网关提供商 |
| [#1588](https://github.com/HKUDS/nanobot/pull/1588) | 🔄 进行中 | feat: ACIP security framework for agents | @fat-operator | 实现 ACIP 安全框架，自动引导安全配置 |
| [#1582](https://github.com/HKUDS/nanobot/pull/1582) | 🔄 进行中 | feat(channels): add python_call channel | @coolerwu | 新增 Python 程序化调用通道，支持 `await channel.call()` |
| [#1581](https://github.com/HKUDS/nanobot/pull/1581) | 🔄 进行中 | feat: multi-instance support with --config parameter | @shenchengtsi | 多实例支持，允许通过 --config 参数运行不同配置 |

**合并/关闭的 PRs:**
- [#995](https://github.com/HKUDS/nanobot/pull/995) - feat(custom-provider): add streaming support - ✅ 已关闭
- [#996](https://github.com/HKUDS/nanobot/pull/996) - feat(providers): add Fireworks AI - ✅ 已关闭
- [#1019](https://github.com/HKUDS/nanobot/pull/1019) - feat(providers): add Venice.ai provider - ✅ 已关闭

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 👍 | 状态 |
|------------|------|--------|-----|------|
| [#235](https://github.com/HKUDS/nanobot/issues/235) | "I've completed processing but have no response to give." | 8 | 6 | OPEN |
| [#1481](https://github.com/HKUDS/nanobot/issues/1481) | [BUG] GitHub Copilot tool_calls not working (multi-choice response) | 8 | 1 | OPEN |
| [#1519](https://github.com/HKUDS/nanobot/issues/1519) | WebSocket 连接报 SSL CERTIFICATE_VERIFY_FAILED (uv 环境) | 5 | 1 | OPEN |
| [#1557](https://github.com/HKUDS/nanobot/issues/1557) | main分支最新代码飞书无法正常工作 | 5 | 0 | OPEN |

### 热点分析

**#235 (Telegram + DeepSeek 无响应)** - 这是今日最热门 Issue，用户反映使用 Telegram 配合 DeepSeek 模型时，机器人运行一段时间后开始只返回 "I've completed processing but have no response to give."，无任何错误日志。**核心诉求**：希望获取更有意义的错误信息或恢复正常响应。

**#1481 (Copilot 工具调用失败)** - 用户使用 GitHub Copilot (claude-sonnet-4.6) 时，机器人始终回复 "I'm on it" 但不执行工具调用。**核心诉求**：修复多选响应场景下的工具调用功能。

**#1519 (uv 环境 SSL 证书问题)** - 飞书 WebSocket 连接失败，报 SSL 证书验证错误。根因已定位：uv 虚拟环境不会自动继承系统证书路径。**已有解决方案**：在 systemd service 中显式注入 `SSL_CERT_DIR` 和 `SSL_CERT_FILE`。

---

## 5. Bug 与稳定性

### 严重 (影响生产环境使用)

| Issue | 描述 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#235](https://github.com/HKUDS/nanobot/issues/235) | Telegram + DeepSeek 无响应，只返回固定文本 | OPEN | ❌ 无 |
| [#1481](https://github.com/HKUDS/nanobot/issues/1481) | GitHub Copilot 工具调用不工作 | OPEN | ❌ 无 |
| [#1519](https://github.com/HKUDS/nanobot/issues/1519) | uv 环境下飞书 WebSocket SSL 验证失败 | OPEN | ⚠️ 有 workaround |
| [#1557](https://github.com/HKUDS/nanobot/issues/1557) | 飞书 WebSocket: "This event loop is already running" | OPEN | ❌ 无 |
| [#1577](https://github.com/HKUDS/nanobot/issues/1577) | CLI 命令 "nanobot agent" 报错 AttributeError: module 'signal' has no attribute 'SIGHUP' | OPEN | ❌ 无 |
| [#1589](https://github.com/HKUDS/nanobot/issues/1589) | Telegram gateway 报错，无法与主 agent 通信 | OPEN | ❌ 无 |
| [#1554](https://github.com/HKUDS/nanobot/issues/1554) | GitHub Copilot provider 在工具调用时报 call_id length error | OPEN | ❌ 无 |

### 中等 (功能受限但可绕过)

| Issue | 描述 | 状态 |
|-------|------|------|
| [#845](https://github.com/HKUDS/nanobot/issues/845) | restrictToWorkspace=true 未真正实现沙箱隔离，shell 命令仍可读取外部文件 | OPEN |
| [#1121](https://github.com/HKUDS/nanobot/issues/1121) | LLM 超时时 fallback model 未触发 | OPEN |
| [#1537](https://github.com/HKUDS/nanobot/issues/1537) | Brave Search API 无法使用 | OPEN |
| [#1558](https://github.com/HKUDS/nanobot/issues/1558) | LLM provider API 限流处理不当 | OPEN |

---

## 6. 功能请求与路线图信号

### 高呼声功能请求

| Issue | 功能描述 | 评论数 | 关联 PR |
|-------|----------|--------|---------|
| [#1530](https://github.com/HKUDS/nanobot/issues/1530) | feat: per-message model routing with @prefix (按消息选择不同模型) | 2 | 无 |
| [#1547](https://github.com/HKUDS/nanobot/issues/1547) | feat: CLI/Agent 模式下支持流式输出 | 0 | ⚠️ #1596 正在实现飞书流式输出 |
| [#1549](https://github.com/HKUDS/nanobot/issues/1549) | feat(openai_codex): 支持自定义 Responses 模式并保留 OAuth 回退 | 0 | 无 |
| [#1556](https://github.com/HKUDS/nanobot/issues/1556) | 支持阿里云 coding plan | 0 | 无 |
| [#1584](https://github.com/HKUDS/nanobot/issues/1584) | 使用 whisper-large-v3-turbo 替代 whisper-large-v3 提升转录速度 | 0 | 无 |
| [#1548](https://github.com/HKUDS/nanobot/issues/1548) | 飞书回复消息格式应更灵活，类似 OpenClaw | 2 | ✅ #1597 已修复 |

### 路线图信号

从 PR 活动来看，**飞书通道优化** 是近期开发重点：
- 流式输出 (Card Kit API)
- Webhook 模式支持
- 消息格式智能选择 ✅ 已合并
- 打字指示器
- 视频 inline 播放

**新增 Provider 方面**：Venice.ai、Fireworks AI、Mistral/Voxtral、Kilo AI 等多个网关提供商正在接入中。

---

## 7. 用户反馈摘要

### 用户痛点

1. **响应无反馈** - 用户在等待长响应时只能面对空白屏幕 10-30+ 秒，无任何进度提示（#1596 正在解决）
2. **错误信息不友好** - 很多错误只返回 "I've completed processing but have no response to give."，用户无法定位问题
3. **飞书消息格式过重** - 所有消息都强制使用交互式卡片，短消息看起来不自然（#1597 已修复）
4. **SSL 证书路径** - uv/conda 等虚拟环境用户经常遇到 SSL 验证失败

### 用户满意度

- **配置灵活性** 方面获得认可：用户喜欢可通过 JSON 配置多种 Provider
- **多通道支持** 受到好评：Telegram、Discord、飞书、Matrix 等覆盖主流平台
- **工具调用能力** 是核心价值：文件操作、shell 命令、web search 等

### 使用场景

- 企业内部 AI 助手（飞书/Telegram 集成）
- 本地模型部署（Ollama 集成）
- 多租户场景（#1581 多实例支持正在开发）
- 代码辅助（GitHub Copilot 集成）

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 创建时间 | 状态 | 风险 |
|-------|----------|------|------|
| [#845](https://github.com/HKUDS/nanobot/issues/845) restrictToWorkspace 沙箱绕过 | 2026-02-19 | OPEN | 🔴 安全漏洞 |
| [#235](https://github.com/HKUDS/nanobot/issues/235) DeepSeek 无响应 | 2026-02-06 | OPEN | 🔴 阻塞生产 |
| [#549](https://github.com/HKUDS/nanobot/issues/549) Discord 群组策略控制 | 2026-02-12 | CLOSED | ✅ 已关闭 |
| [#1076](https://github.com/HKUDS/nanobot/issues/1076) Z.ai (GLM Global) coding plan 支持 | 2026-02-23 | CLOSED | ✅ 已关闭 |

### 建议关注

1. **#235** - 已持续一个月未解决，影响 DeepSeek 用户体验
2. **#845** - 安全漏洞，涉及 workspace 隔离机制，需优先评估
3. **#1587** - CLI --config 参数缺失文档与实现不符

---

*报告生成时间: 2026-03-06 | 数据来源: GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-06)

## 1. 今日速览

PicoClaw 社区在过去的 24 小时内保持 **极高活跃度**：共产生 **308 条** 事件更新（23 条 Issues + 285 条 PRs），其中 **255 个 PR 等待合并**，显示项目正处于快速迭代阶段。Issues 中新开/活跃 18 个、关闭 5 个，PR 已合并/关闭 30 个，整体呈现健康的发展态势。然而，多个高优先级 Bug 报告（provider 崩溃、配置竞争条件、模型加载失败）需要关注。

---

## 2. 版本发布

**无新版本发布。** 近期无 Release 记录。

---

## 3. 项目进展

以下 PR 已在过去 24 小时内合并/关闭，体现了项目在多个维度的推进：

| PR | 描述 | 状态 |
|---|---|---|
| [#1155](https://github.com/sipeed/picoclaw/pull/1155) | **feat: honor PICOCLAW_HOME env var** — 支持通过 `PICOCLAW_HOME` 和 `PICOCLAW_CONFIG` 环境变量自定义配置、认证和工作区路径 | ✅ **已合并** |
| [#1104](https://github.com/sipeed/picoclaw/issues/1104) | **docs: 修复 `skills install --registry` 帮助示例** — 修正了命令参数处理的文档说明 | ✅ 已关闭 |
| [#1134](https://github.com/sipeed/picoclaw/issues/1134) | **fix: skills install 429 错误处理** — 解决 ClawHub 下载端点持续返回 HTTP 429 的问题 | ✅ 已关闭 |
| [#1149](https://github.com/sipeed/picoclaw/issues/1149) | **fix: Telegram 频道发送 "[voice]" 字符串** — 修复语音消息处理异常 | ✅ 已关闭 |
| [#634](https://github.com/sipeed/picoclaw/issues/634) | **Task: 重构工具系统** — 优化工具模块结构，每个工具独立文件实现 | ✅ 已关闭 |

**其他值得关注的高质量 PR 正在开发中：**
- [#1138](https://github.com/sipeed/picoclaw/pull/1138) — IRC 频道集成（新增消息通道）
- [#1077](https://github.com/sipeed/picoclaw/pull/1077) — Git 仓库技能安装器 + Gateway 后台服务
- [#1157](https://github.com/sipeed/picoclaw/pull/1157) — **exec 工具超时可配置**（解决 #1025 超时自定义需求）
- [#1045](https://github.com/sipeed/picoclaw/pull/1045) — **修复 cron 参数验证**（防止 LLM 默认值劫持优先级）
- [#649](https://github.com/sipeed/picoclaw/pull/649) — 内存和缓存性能优化
- [#423](https://github.com/sipeed/picoclaw/pull/423) — 多代理协作框架（WIP）

---

## 4. 社区热点

以下 Issues 和 PRs 引发了较多讨论或关注：

### 🔥 热门 Issues

1. **[#100](https://github.com/sipeed/picoclaw/issues/100) [CLOSED]** — *“I've completed processing but have no response to give.”*
   - **作者**: @huangchengcheng | **评论**: 10 | **👍**: 2
   - **摘要**: 用户在使用 OpenRouter (arcee-ai/trinity-large-preview) 时，每次响应后都收到该消息，疑似 provider 或模型问题。讨论活跃，可能涉及流式响应或模型输出的兼容性问题。

2. **[#39](https://github.com/sipeed/picoclaw/issues/39) [OPEN]** — *添加 `picoclaw doctor` 命令*
   - **作者**: @vijaykarthiktk | **评论**: 4 | **👍**: 0
   - **摘要**: 功能请求，参考 OpenClaw 实现健康检查和诊断工具，验证配置、Provider 健康、系统和频道状态。已有潜在实现方向。

3. **[#329](https://github.com/sipeed/picoclaw/issues/329) [OPEN]** — *远程引用 Skill Model*
   - **作者**: @harshbansal7 | **评论**: 4 | **👍**: 0
   - **摘要**: 提议从本地持久化的 SKILL.md 文件迁移到远程 URL 引用模型，按需获取技能，减少磁盘占用并实现自动更新。与 PR #1077 (Git 仓库安装) 相呼应。

4. **[#1154](https://github.com/sipeed/picoclaw/issues/1154) [OPEN]** — *Anthropic streaming error (OpenRouter)*
   - **作者**: @challo105 | **评论**: 2 | **👍**: 0
   - **摘要**: 在 LicheeRV Nano (RISC-V, 256MB) 上使用 OpenRouter + mistral-7b-instruct 模型时报错：`streaming is required for operations that may take longer than 10 minutes`。**高优先级 Bug**，影响边缘设备部署。

5. **[#1151](https://github.com/sipeed/picoclaw/issues/1151) [OPEN]** — *TUI PHI 标签页配置写入竞争条件*
   - **作者**: @drpedapati | **评论**: 0 | **👍**: 0
   - **摘要**: **P1 级 Bug**：`phiSetLocalDefaultsCmd` 在 `tea.Cmd` goroutine 中执行 read-modify-write，其他标签页（settings、login、routing）也做同样操作，存在 **race condition**。同时 `HomePath` 在 shell 命令中未转义，存在安全风险。

6. **[#1150](https://github.com/sipeed/picoclaw/issues/1150) [OPEN]** — *pool: factory panic 导致 inflight 条目孤立*
   - **作者**: @drpedapati | **评论**: 0 | **👍**: 0
   - **摘要**: **P1 级 Bug**：在 `pkg/routing/pool.go` 的 `getOrCreate()` 中，如果 `p.factory(target)` panic，goroutine 不会清理 `p.creating` 中的 key，也不会关闭 `inflight.done`，导致该 target **永久死锁**。

### 🔥 热门 PRs

1. **[#1157](https://github.com/sipeed/picoclaw/pull/1157)** — *fix(tools): make exec tool timeout configurable*
   - **作者**: @wangyanfu2 | 创建于 2026-03-06
   - **摘要**: 为 `ExecConfig` 添加 `TimeoutSeconds` 字段，允许通过配置自定义 shell 命令执行超时（默认 60s），解决 Issue #1025。

2. **[#1045](https://github.com/sipeed/picoclaw/pull/1045)** — *fix(cron): validate schedule params*
   - **作者**: @AaronJny | 创建于 2026-03-04，更新于 2026-03-06
   - **摘要**: 修复关键 Bug：LLM 提供的默认值（如 `at_seconds: 0`）导致所有周期性 cron 任务被静默存储为一次性 "at" 任务。与 Issue #1126 对应。

3. **[#1138](https://github.com/sipeed/picoclaw/pull/1138)** — *feat(channels): add IRC channel integration*
   - **作者**: @amirmamaghani | 创建于 2026-03-05
   - **摘要**: 新增 IRC 消息通道支持，使用 `ergochat/irc-go` 库，支持 TLS、SASL/NickServ 认证、自动重连、DM 和频道消息。

---

## 5. Bug 与稳定性

按严重程度排列的 Bug 报告：

### 🔴 P1 - 高优先级（已有 Fix PR）

| Issue | 描述 | 关联 PR |
|---|---|---|
| [#1151](https://github.com/sipeed/picoclaw/issues/1151) | TUI PHI 标签页配置写入竞争条件 + HomePath 未转义 | **无 Fix PR** |
| [#1150](https://github.com/sipeed/picoclaw/issues/1150) | pool: factory panic 导致永久死锁 | **无 Fix PR** |
| [#1154](https://github.com/sipeed/picoclaw/issues/1154) | OpenRouter provider 下 Anthropic streaming 错误 | **无 Fix PR** |
| [#1126](https://github.com/sipeed/picoclaw/issues/1126) | 周期性 cron 任务静默转为一次性任务 | [#1045](https://github.com/sipeed/picoclaw/pull/1045) ✅ |
| [#1153](https://github.com/sipeed/picoclaw/issues/1153) | 重复 model_name 条目回退逻辑错误，总使用第二个 | **无 Fix PR** |
| [#1157](https://github.com/sipeed/picoclaw/pull/1157) | exec 工具超时不可配置（60s 硬编码） | [#1157](https://github.com/sipeed/picoclaw/pull/1157) ✅ |

### 🟡 P2 - 中优先级

| Issue | 描述 |
|---|---|
| [#1103](https://github.com/sipeed/picoclaw/issues/1103) | 添加自定义模型时 modelscope.cn API 调用失败（unknown protocol） |
| [#1102](https://github.com/sipeed/picoclaw/issues/1102) | deepseek 模型不可用，max_tokens 范围错误 |
| [#958](https://github.com/sipeed/picoclaw/issues/958) | model "llama3.2" not found in model_list (Ollama) |
| [#1148](https://github.com/sipeed/picoclaw/issues/1148) | commit 6c8866de 破坏本地用例和测试 |
| [#1025](https://github.com/sipeed/picoclaw/issues/1025) | Agent 执行脚本时超时不可自定义 |

### 🟢 P3 - 低优先级/文档

| Issue | 描述 |
|---|---|
| [#1152](https://github.com/sipeed/picoclaw/issues/1152) | HTML 硬件配置表显示 8GB 最低内存，与代码中 6GB 修复不一致 |

---

## 6. 功能请求与路线图信号

用户提出的新功能需求，结合已有 PR 判断可能被纳入下一版本：

| Issue | 功能描述 | 关联 PR/状态 |
|---|---|---|
| [#39](https://github.com/sipeed/picoclaw/issues/39) | **picoclaw doctor 命令** — 配置验证、Provider 健康检查、系统诊断 | 社区呼声高，可能纳入 |
| [#329](https://github.com/sipeed/picoclaw/issues/329) | **远程 Skill Model** — 通过 URL 按需获取技能，减少磁盘占用 | PR #1077 已实现 Git 仓库安装，或可扩展 |
| [#267](https://github.com/sipeed/picoclaw/issues/267) | **CLI 登录支持 OpenAI/Gemini** | 暂无 PR，用户需求明确 |
| [#784](https://github.com/sipeed/picoclaw/issues/784) | **Going smaller** — 树莓派 Pico + LAN8720 超低功耗方案 | 营销导向，需硬件支持 |
| [#1137](https://github.com/sipeed/picoclaw/issues/1137) / [#1138](https://github.com/sipeed/picoclaw/pull/1138) | **IRC 频道集成** | PR 已在开发中 ✅ |
| [#1132](https://github.com/sipeed/picoclaw/issues/1132) | **适配 OpenWrt 系统** | 路由器部署需求，暂无实现 |
| [#423](https://github.com/sipeed/picoclaw/pull/423) | **多代理协作框架** (WIP) | 长期重要功能，正在开发 |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实痛点和使用场景：

1. **Provider 兼容性问题集中爆发**
   - 多名用户反馈 OpenRouter、ModelScope、DeepSeek 等 Provider 的配置或 API 调用失败（#1103, #1102, #1154, #958），表明 Provider 适配层存在碎片化问题。
   - *用户场景*：在边缘设备（RISC-V）上部署，希望使用免费/低成本的 Provider。

2. **Cron 任务行为不符合预期**
   - 周期性任务被静默转为一次性任务（#1126），导致自动化运维场景失效。**用户痛点强**。

3. **超时和资源限制不灵活**
   - exec 工具超时硬编码 60s（#1025）、context window 限制（#1102）在生产环境中不够用。**PR #1157 已修复超时问题**。

4. **TUI 配置操作的并发安全**
   - PHI 标签页的 race condition（#1151）影响用户在 TUI 中管理敏感配置的安全性。

5. **技能系统使用门槛高**
   - 用户不清楚技能在哪里、如何集成（#243），文档和引导需要改进。

---

## 8. 待处理积压

以下 Issue 长期未响应或重要 PR 停滞，需要维护者关注：

| Issue/PR | 描述 | 状态 | 建议 |
|---|---|---|---|
| [#39](https://github.com/sipeed/picoclaw/issues/39) | `picoclaw doctor` 命令功能请求 | OPEN (2026-02-11) | 考虑纳入路线图 |
| [#267](https://github.com/sipe

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-06)

---

## 1. 今日速览

2026年3月6日，NanoClaw 项目保持高度活跃状态。过去24小时内共产生 **23条 Issue 更新**（新开/活跃12个，关闭11个）和 **50条 PR 更新**（待合并41个，已合并/关闭9个）。项目持续快速迭代，社区贡献积极，多个重要功能正在推进中，包括飞书渠道集成、WebSocket 通信重构、WhatsApp 认证问题修复等。安全与稳定性方面的修复也是今日焦点。

---

## 2. 版本发布

**本期无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的 PR (9条)

| PR | 状态 | 概述 |
|---|---|---|
| [#757](https://github.com/qwibitai/nanoclaw/pull/757) | CLOSED | Add mcp search tools |
| [#749](https://github.com/qwibitai/nanoclaw/pull/749) | CLOSED | docs: add test/typecheck/format commands and channel implementation pattern to CLAUDE.md |
| [#718](https://github.com/qwibitai/nanoclaw/pull/718) | CLOSED | feat: add /add-telegram-voice skill for local whisper.cpp transcription |
| [#740](https://github.com/qwibitai/nanoclaw/pull/740) | CLOSED | test: push workflow |
| [#739](https://github.com/qwibitai/nanoclaw/pull/739) | CLOSED | test: evaluate issue #737 container /proc credential isolation |

### 待合并的重要 PR (41条)

| PR | 状态 | 概述 |
|---|---|---|
| [#758](https://github.com/qwibitai/nanoclaw/pull/758) | OPEN | **feat: add /add-feishu skill for Feishu (Lark) channel** - 新增飞书/ Lark 渠道支持 |
| [#683](https://github.com/qwibitai/nanoclaw/pull/683) | OPEN (WIP) | **refactor: replace file-based IPC with WebSocket communication** - 用 WebSocket 替换文件式 IPC |
| [#670](https://github.com/qwibitai/nanoclaw/pull/670) | OPEN (Needs Review) | **fix: auto-retry messages when Claude hits an API rate limit** - API 限流自动重试 |
| [#746](https://github.com/qwibitai/nanoclaw/pull/746) | OPEN (Needs Review) | **fix(whatsapp): prevent service restart hammering on auth failure** - 防止 WhatsApp 认证失败后反复重连 |
| [#751](https://github.com/qwibitai/nanoclaw/pull/751) | OPEN (Needs Review) | **fix(whatsapp): use sender's JID for DM-with-bot registration** - DM 机器人注册 JID 修复 |
| [#752](https://github.com/qwibitai/nanoclaw/pull/752) | OPEN (Blocked) | **Add Google Chat** - 新增 Google Chat 渠道支持 |
| [#754](https://github.com/qwibitai/nanoclaw/pull/754) | OPEN (WIP) | **fix(register): update assistant name in all groups/*/CLAUDE.md** - 注册时更新所有群组的助手名称 |
| [#756](https://github.com/qwibitai/nanoclaw/pull/756) | OPEN (Needs Review) | **fix(register): create CLAUDE.md in group folder from template** - 注册时在群组文件夹创建 CLAUDE.md |
| [#745](https://github.com/qwibitai/nanoclaw/pull/745) | OPEN (Needs Review) | **fix(whatsapp): write pairing code to file for immediate access** - WhatsApp 配对码立即写入文件 |
| [#741](https://github.com/qwibitai/nanoclaw/pull/741) | OPEN (Needs Review) | **feat: add Telegram voice transcription to use-local-whisper skill** - Telegram 语音转录 |
| [#742](https://github.com/qwibitai/nanoclaw/pull/742) | OPEN (Needs QA) | **chore: enhance container environment isolation** - 增强容器环境隔离 |
| [#744](https://github.com/qwibitai/nanoclaw/pull/744) | OPEN (Blocked) | **Feat/add s3 storage skill** - S3 存储技能 |
| [#738](https://github.com/qwibitai/nanoclaw/pull/738) | OPEN (Needs Review) | **fix: Expose ANTHROPIC_MODEL from .env to agent** - 暴露 ANTHROPIC_MODEL 环境变量给 Agent |

---

## 4. 社区热点

今日讨论最活跃的 Issues：

| Issue | 评论数 | 热度分析 |
|---|---|---|
| [#393](https://github.com/qwibitai/nanoclaw/issues/393) | 3 | 文档缺失问题，用户不清楚如何更新 NanoClaw |
| [#442](https://github.com/qwibitai/nanoclaw/issues/442) | 3 | 社区热议：希望用开源模型替换 Claude 以降低成本 |
| [#574](https://github.com/qwibitai/nanoclaw/issues/574) | 2 | 容器缺少 jq 工具，建议加入以避免 eval 风险 |
| [#613](https://github.com/qwibitai/nanoclaw/issues/613) | 2 | ANTHROPIC_MODEL 环境变量被忽略的 Bug |
| [#472](https://github.com/qwibitai/nanoclaw/issues/472) | 2 | CLAUDE_MODEL 环境变量不生效 |
| [#157](https://github.com/qwibitai/nanoclaw/issues/157) | 2 | WhatsApp QR 码生成在 Node 20 上挂起 |
| [#642](https://github.com/qwibitai/nanoclaw/issues/642) | 2 | RFC: CLI Channel for Claude Code Integration - 频道集成讨论 |

**热点分析：**
- **成本敏感**：Issue #442（希望用 Ollama 等本地开源模型替代 Claude）引发社区热议，反映用户对 API 成本的关注
- **文档需求**：Issue #393 表明文档更新指南缺失，需补充
- **环境变量问题**：多个 Issue 反馈环境变量（ANTHROPIC_MODEL、CLAUDE_MODEL）不生效，是高频痛点

---

## 5. Bug 与稳定性

### 高优先级 Bug (已标记 Fix PR)

| Issue | 优先级 | 状态 | Fix PR |
|---|---|---|---|
| [#747](https://github.com/qwibitai/nanoclaw/issues/747) | High | OPEN | [#745](https://github.com/qwibitai/nanoclaw/pull/745) |
| [#748](https://github.com/qwibitai/nanoclaw/issues/748) | High | OPEN | [#746](https://github.com/qwibitai/nanoclaw/pull/746) |
| [#750](https://github.com/qwibitai/nanoclaw/issues/750) | High | OPEN | [#751](https://github.com/qwibitai/nanoclaw/pull/751) |
| [#755](https://github.com/qwibitai/nanoclaw/issues/755) | High | OPEN | [#756](https://github.com/qwibitai/nanoclaw/pull/756) |
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) | High | OPEN | 无 |
| [#732](https://github.com/qwibitai/nanoclaw/issues/732) | High | OPEN | 无 |
| [#483](https://github.com/qwibitai/nanoclaw/issues/483) | High | CLOSED | 无 |

### 高优先级 Bug (无 Fix PR)

| Issue | 描述 |
|---|---|
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) | CLAUDE_CODE_OAUTH_TOKEN 每日过期，容器每日早晨 401 错误 |
| [#732](https://github.com/qwibitai/nanoclaw/issues/732) | Agent 流式输出时发送多条消息，冲刷聊天 |
| [#483](https://github.com/qwibitai/nanoclaw/issues/483) | 用户与服务器时区不匹配导致任务在错误时间执行 |

### 中等优先级 Bug

| Issue | 优先级 | 描述 |
|---|---|---|
| [#737](https://github.com/qwibitai/nanoclaw/issues/737) | Medium | [Security] API Key 可通过进程环境检查暴露 |
| [#731](https://github.com/qwibitai/nanoclaw/issues/731) | Medium | systemd 服务使用临时 fnm node 路径，npm rebuild 后 ERR_DLOPEN_FAILED |
| [#753](https://github.com/qwibitai/nanoclaw/issues/753) | Medium | 注册时助手名称未更新到 groups/main/CLAUDE.md |
| [#728](https://github.com/qwibitai/nanoclaw/issues/728) | Medium | send_message 工具描述在定时任务中误导 |

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

| Issue | 请求内容 | 相关 PR |
|---|---|---|
| [#722](https://github.com/qwibitai/nanoclaw/issues/722) | **unified channel media support** - 统一渠道媒体支持（图片、视频、音频、文档、贴纸） | 无 |
| [#642](https://github.com/qwibitai/nanoclaw/issues/642) | RFC: CLI Channel for Claude Code Integration - CLI 频道文件式 IPC | 无 |

### 已实现/正在实现的功能 (PR)

- **飞书渠道** → [#758](https://github.com/qwibitai/nanoclaw/pull/758) (Feishu/Lark 支持)
- **Google Chat 渠道** → [#752](https://github.com/qwibitai/nanoclaw/pull/752) (待合并)
- **Telegram 语音转录** → [#718](https://github.com/qwibitai/nanoclaw/pull/718) (已关闭/待重新开启)
- **Ollama 本地模型** → [#712](https://github.com/qwibitai/nanoclaw/pull/712) (已合并)
- **S3 存储技能** → [#744](https://github.com/qwibitai/nanoclaw/pull/744) (Blocked)

---

## 7. 用户反馈摘要

### 痛点与问题

| 反馈来源 | 痛点 | Issue |
|---|---|---|
| @dabeeeenster | 文档不清晰，不知道如何更新 NanoClaw | [#393](https://github.com/qwibitai/nanoclaw/issues/393) |
| @tmrdev | Claude API 成本高，希望支持本地开源模型（Ollama/qwen-coder/mistral/llama3） | [#442](https://github.com/qwibitai/nanoclaw/issues/442) |
| @ErikDeBruijn | 容器缺少 jq，当前用 node -e 解析有安全风险 | [#574](https://github.com/qwibitai/nanoclaw/issues/574) |
| @glifocat | WhatsApp 配对码在 Claude Code Bash 环境中无法显示 | [#747](https://github.com/qwibitai/nanoclaw/issues/747) |
| @RobotKaln | OAuth Token 每早过期，容器服务每日早晨 401 错误 | [#730](https://github.com/qwibitai/nanoclaw/issues/730) |
| @agent-tre | fnm 管理的 Node 路径在 systemd 服务中不稳定 | [#731](https://github.com/qwibitai/nanoclaw/issues/731) |
| @alexdonaldsonnz | 时区混乱，Agent 反复搞错本地时间 | [#526](https://github.com/qwibitai/nanoclaw/issues/526) |

### 正面反馈

- 项目"技能优先于功能"（skills over features）的理念受认可
- 社区贡献活跃，渠道集成（飞书、Google Chat、Telegram）不断丰富
- 本地模型支持（Ollama）已合并，用户多样化需求得到响应

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 描述 | 创建时间 |
|---|---|---|
| [#157](https://github.com/qwibitai/nanoclaw/issues/157) | WhatsApp QR 码生成在 Node 20 上挂起 | 2026-02-09 |
| [#427](https://github.com/qwibitai/nanoclaw/issues/427) | latest ai assistant nano claw (用户询问最新版本) | 2026-02-23 |

### 建议关注

1. **时区相关 Bug**（#483, #526）—— 影响用户体验，建议优先修复
2. **环境变量问题**（#613, #472, #738）—— 高频痛点，PR #738 已解决部分
3. **OAuth Token 过期**（#730）—— 生产环境稳定性问题，需长期方案
4. **安全漏洞**（#737）—— API Key 暴露问题，虽然有测试 PR #739，仍需正式修复

---

*本报告基于 2026-03-06 GitHub 数据生成*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-03-06)

## 1. 今日速览

过去24小时，IronClaw 项目保持高度活跃状态：共处理 **18 条 Issues**（13 新开/活跃，5 关闭）和 **29 条 PRs**（6 已合并/关闭，23 待合并）。代码贡献热度不减，尤其在测试覆盖增强、安全加固、文档建设方面有多项重大进展。社区对 Agent 行为优化和工具系统改进的关注度持续上升，路线图相关讨论也开始显现。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR | 描述 | 状态 |
|---|---|---|
| **#535** | fix: prevent concurrent memory hygiene passes and Windows file lock errors | ✅ 已合并 |
| **#582** | fix: sort tool_definitions() for deterministic LLM tool ordering | ✅ 已合并 |
| **#531** | feat: restart | ✅ 已合并 |
| **#578** | feat: merge http/web_fetch tools, add tool output stash | ✅ 已合并 |
| **#580** | fix(llm): fix reasoning model response parsing bugs | ✅ 已合并 |

**关键推进：**
- **安全问题修复** (#519)：使用 `OsRng` 替代 `thread_rng()` 进行安全关键随机数生成，这是高优先级的安全加固
- **工具系统优化** (#582)：对 `tool_definitions()` 排序确保 LLM 工具选择的一致性
- **Agent 重启功能** (#531)：用户现在可以从聊天或 UI 重启 IronClaw
- **HTTP 工具合并** (#578)：将 `web_fetch` 合并到 `http` 工具，并添加大响应暂存机制

---

## 4. 社区热点

### 讨论最活跃的 Issues

1. **[#16] Up for accepting new contributors?** (已关闭)
   - 作者: @nightfullstar | 6 条评论
   - 链接: https://github.com/nearai/ironclaw/issues/16
   - 诉求：询问贡献者文档和路线图，表达参与项目的兴趣

2. **[#548] Add Search to Chat API** (开放中)
   - 作者: @sergeiest | 2 条评论
   - 链接: https://github.com/nearai/ironclaw/issues/548
   - 诉求：为 Chat API 添加搜索端点，使 IronClaw 默认具备网页搜索能力

3. **[#545] Configure credentials via chat** (开放中)
   - 作者: @sergeiest | 1 条评论
   - 链接: https://github.com/nearai/ironclaw/issues/545
   - 诉求：在聊天界面配置凭证时，每个支持工具应包含描述和输入字段

### 热点 PR

- **[#581] docs: Add comprehensive Mintlify documentation website**
  - 作者: @logicminds | XL 规模
  - 链接: https://github.com/nearai/ironclaw/pull/581
  - 看点：新建 Mintlify 文档网站，全面提升项目文档质量

---

## 5. Bug 与稳定性

### 今日报告/修复的 Bug（按严重程度）

| Issue | 描述 | 严重程度 | 状态 |
|---|---|---|---|
| **#495** | memory hygiene error - AFK 时出现多次清理 | 高 | ✅ 已修复 (#535) |
| **#568** | thread hydration 丢失 tool-call history，页面重载导致模型重复调用工具 | 高 | 🛠️ 待修复 |
| **#564** | LLM response parsing — reasoning_content 泄漏、clean_response 缺口、未闭合 think 标签 | 中 | ✅ 已修复 (#580) |
| **#562** | test_extensions.py 中的 unawaited coroutine 导致测试失败 | 低 | ✅ 已修复 |

**#568 Bug 详情：**
- 问题：`Thread::messages()` 仅重建 `[user, assistant]` 对话历史，丢失 tool calls 和 tool results
- 影响：页面重载后模型会重新执行之前的工具调用
- 位置：`src/agent/session.rs:319-328`

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue | 描述 | 潜在纳入 |
|---|---|---|
| **#548** | Add Search to Chat API | 🔥 热门需求 |
| **#545** | Configure credentials via chat | 🔥 热门需求 |
| **#538** | Upgrade agent via agent.near.ai UI | 📋 规划中 |
| **#543** | Restart IronClaw from chat or UI | ✅ 已实现 (#531) |
| **#577** | Approval context for autonomous job execution | 🔨 开发中 |

### 路线图信号

**测试覆盖成为近期重点：**
- 连续多个 Issue 聚焦 e2e trace tests：routine_engine (#575)、workspace persistence (#574)、builtin tools (#573)、thread_ops/scheduler (#572)、worker.rs (#571)
- 这是项目迈向 60%+ 测试覆盖率的重要举措

**新 Provider 集成：**
- #576 实现 NVIDIA NIM API provider
- #451 添加 Venice.ai provider
- 多元化 LLM 支持是明确的产品方向

---

## 7. 用户反馈摘要

从 Issues 评论中提炼：

1. **贡献者参与意愿高**：用户 @nightfullstar 密切关注仓库，渴望有文档了解路线图并参与贡献
2. **工具可用性诉求**：用户希望聊天界面能直接配置凭证、搜索网页，而非仅通过配置文件
3. **稳定性关注**：memory hygiene 错误在 AFK 场景下反复出现，引发用户困扰，已通过 #535 修复
4. **Agent 行为期望**：用户观察到 Agent 在某些场景下"叙述下一步行动"而非直接调用工具，期待更精准的行为控制

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 描述 | 创建时间 | 状态 |
|---|---|---|---|
| **#16** | Up for accepting new contributors? | 2026-02-10 | ✅ 已关闭 |

### 需关注的高优先级待合并 PRs

| PR | 规模 | 风险 | 描述 |
|---|---|---|---|
| **#519** | M | 高 | fix(security): use OsRng for all security-critical key generation |
| **#586** | XL | 中 | test: add WIT compatibility tests for WASM extensions |
| **#581** | XL | 高 | docs: Add comprehensive Mintlify documentation website |
| **#587** | XS | 中 | fix: enable libsql remote + tls features for Turso cloud sync |
| **#576** | L | 高 | feat(llm): implement NVIDIA NIM API provider |

---

*报告生成时间：2026-03-06 | 数据来源：GitHub IronClaw (nearai/ironclaw)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目日报 | 2026-03-06

---

## 1. 今日速览

过去24小时内，TinyClaw 项目保持较高活跃度，共产生 **3 条新 Issues** 和 **3 条待合并 PRs**，整体呈现积极开发态势。无新版本发布。社区围绕版本同步问题和跨平台稳定性展开讨论，Issue #161 已针对版本标签不同步问题提供修复方案，整体项目健康度良好。

---

## 2. 版本发布

**本期无新版本发布**

---

## 3. 项目进展

| PR | 状态 | 内容概述 | 链接 |
|---|---|---|---|
| **#161** | OPEN | 修复 Issue #160 — 添加 GitHub Action 守卫，防止 tag 与 package.json 版本不同步 | [查看详情](https://github.com/TinyAGI/tinyclaw/pull/161) |
| **#143** | OPEN | 添加 Avian AI provider，支持 OpenAI 兼容 API | [查看详情](https://github.com/TinyAGI/tinyclaw/pull/143) |
| **#150** | OPEN | OpenViking 插件持续集成（rebase 到 main 分支） | [查看详情](https://github.com/TinyAGI/tinyclaw/pull/150) |

**推进要点：**
- PR #161 从根本上解决了版本发布流程中的同步问题，提升发布可靠性
- PR #143 引入 Avian 作为新 AI provider，拓展多模型支持能力
- PR #150 完成 OpenViking 插件的迁移适配

---

## 4. 社区热点

### 🔥 Issue #160 — Tag 与 package.json 版本不匹配
- **作者**: @michaelerobertsjr
- **评论**: 2 条 | **点赞**: 1
- **链接**: [查看详情](https://github.com/TinyAGI/tinyclaw/issues/160)
- **分析**: 此问题导致用户收到错误的更新提示（显示需从 v0.0.8 更新到 v0.0.9，但实际当前已是 v0.0.9）。社区关注度高，已由同一作者提交 PR #161 修复，预计将合并。

### 📢 Issue #162 — 提案：添加集成测试和跨 OS 发布安全
- **作者**: @michaelerobertsjr
- **评论**: 0 条 | **点赞**: 0
- **链接**: [查看详情](https://github.com/TinyAGI/tinyclaw/issues/162)
- **分析**: 社区开始关注项目长期质量保障，提议引入自动化测试和跨平台 CI/CD，标志项目进入成熟度提升阶段。

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 描述 | 修复状态 |
|---|---|---|---|
| **#160** | 🟡 中 | Tag 与 package.json 版本不同步，导致更新提示错误 | PR #161 已提出修复 |
| **#156** | 🔴 高 | macOS (zsh) 上 tinyclaw start 后所有进程立即退出 | 调查进行中，待社区反馈 |

**说明**: Issue #156 涉及 macOS 平台稳定性，影响核心启动功能，需优先关注。

---

## 6. 功能请求与路线图信号

| Issue | 功能/需求 | 链接 |
|---|---|---|
| **#162** | 集成测试与跨 OS 发布安全 | [查看详情](https://github.com/TinyAGI/tinyclaw/issues/162) |
| **#143** (PR) | Avian AI provider 支持 | [查看详情](https://github.com/TinyAGI/tinyclaw/pull/143) |

**信号解读**:
- 多 AI provider 支持是明确的功能演进方向（PR #143 已实现 Avian）
- 项目开始重视质量保障体系建设（Issue #162 提议测试与 CI/CD）
- 跨平台兼容性需求凸显（macOS 问题 #156）

---

## 7. 用户反馈摘要

从 Issue 评论中提炼：

- **版本管理混乱**: 用户反馈当前 tag 指向 v0.0.9，但 package.json 显示 v0.0.8，导致更新提示错误，影响信任度
- **macOS 兼容性**: 用户在 macOS zsh 环境下启动 tinyclaw 时遇到进程立即退出的问题，怀疑与 shell 初始化竞争条件有关
- **质量保障诉求**: 社区提出目前项目缺少自动化测试和跨平台验证，呼吁加强发布流程安全性

---

## 8. 待处理积压

| 类型 | Issue/PR | 链接 | 备注 |
|---|---|---|---|
| Issue | **#156** | [查看详情](https://github.com/TinyAGI/tinyclaw/issues/156) | macOS 进程退出问题，5 天无正式修复方案 |
| Issue | **#162** | [查看详情](https://github.com/TinyAGI/tinyclaw/issues/162) | 测试与跨平台提案，需官方评估路线图 |
| PR | **#143** | [查看详情](https://github.com/TinyAGI/tinyclaw/pull/143) | Avian AI provider，已开放 7 天，建议合并评估 |
| PR | **#150** | [查看详情](https://github.com/TinyAGI/tinyclaw/pull/150) | OpenViking 延续，已开放 7 天，建议合并评估 |

---

*报告生成时间: 2026-03-06 | 数据来源: GitHub TinyAGI/tinyclaw*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*