# OpenClaw 生态日报 2026-03-01

> Issues: 500 | PRs: 500 | 覆盖项目: 10 个 | 生成时间: 2026-03-01 14:04 UTC

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

# OpenClaw 项目动态日报 (2026-03-01)

## 1. 今日速览

过去24小时项目活跃度较高：共处理 **500 条 Issues**（新开/活跃 214 条，已关闭 286 条）和 **500 条 PRs**（待合并 413 条，已合并/关闭 87 条）。未发布新版本。社区参与积极，多个功能性 PR 正在推进，但同时也出现多个回归 Bug 报告，尤其是 macOS 平台的兼容性问题和 Discord 频道的 WebSocket 稳定性问题需要重点关注。

---

## 2. 版本发布

**无新版本发布**。过去24小时内无 Release 更新记录。

---

## 3. 项目进展

今日有 **87 个 PR** 被合并/关闭，项目整体保持向前推进。以下为值得注意的进展：

| PR 编号 | 标题 | 贡献者 | 意义 |
|---------|------|--------|------|
| #30683 | fix: expand ~ in file paths for Edit tool | @kevinWangSheng | 修复 Edit 工具路径解析问题，支持 `~/.codex/config.toml` 写法 |
| #30695 | feat(telegram): inline buttons for exec approvals | @sfo2001 | Telegram 渠道新增内联按钮，支持"允许一次/始终允许/拒绝"操作 |
| #30641 | feat: add @ import directives for workspace bootstrap MD files | @macwang | 支持在 bootstrap MD 文件中使用 `@path.md` 语法导入其他文件 |
| #30693 | fix(subagents): allow session_status in sub-agent sessions | @byungsker | 修复子代理会话中 `session_status` 工具不可用的问题 |
| #30699 | fix(gateway): ignore interfaces without ip addresses in mdns | @Kiyo5hi | 修复网关在无 IP 地址网卡上启动失败的问题 |

**相关链接**：
- PR #30683: https://github.com/openclaw/openclaw/pull/30683
- PR #30695: https://github.com/openclaw/openclaw/pull/30695
- PR #30641: https://github.com/openclaw/openclaw/pull/30641
- PR #30693: https://github.com/openclaw/openclaw/pull/30693
- PR #30699: https://github.com/openclaw/openclaw/pull/30699

---

## 4. 社区热点

以下 Issues/PRs 讨论最为活跃（按评论数排序）：

### 热门 Issues

| Issue | 评论 | 点赞 | 主题 |
|-------|------|------|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 30 | 55 | **Linux/Windows Clawdbot Apps** - 社区请求 macOS/iOS/Android 之外的 Linux 和 Windows 客户端 |
| [#16862](https://github.com/openclaw/openclaw/issues/16862) | 29 | 11 | **Web UI Error: missing scope: operator.read** - 升级后 WebUI 报错缺少权限 scope |
| [#3741](https://github.com/openclaw/openclaw/issues/3741) | 21 | 0 | **Telegram channel fails to start** - 自动启用逻辑错误写入 `plugins.entries` 而非 channels |
| [#14215](https://github.com/openclaw/openclaw/issues/14215) | 15 | 2 | **Browser Control Broken** - 浏览器自动化连接不稳定 |
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | 13 | 1 | **macOS app v2026.2.26 is arm64-only** - 回归问题：Intel Mac 无法运行 |
| [#29420](https://github.com/openclaw/openclaw/issues/29420) | 11 | 0 | **Discord WebSocket reconnect drops events** - 重连时丢失 seq gap 事件 |

### 热门 PRs

| PR | 主题 |
|----|------|
| [#28761](https://github.com/openclaw/openclaw/pull/28761) | **feat(channels): add suppressOutbound config** - 为所有渠道添加"仅监听"模式配置 |
| [#30641](https://github.com/openclaw/openclaw/pull/30641) | **feat: add @ import directives** - workspace bootstrap 文件支持 @ 导入语法 |
| [#30695](https://github.com/openclaw/openclaw/pull/30695) | **feat(telegram): inline buttons for exec approvals** - Telegram 执行审批内联按钮 |

**分析**：Issue #75 持续受到关注（55赞最高），反映用户对跨平台客户端的强烈需求；#16862 和 #28877 均涉及升级后的回归问题，需优先处理以保障用户体验。

---

## 5. Bug 与稳定性

以下 Bug 按严重程度排列，其中部分已有 Fix PR：

### 严重 (影响核心功能)

| Issue | 状态 | 描述 | 是否有 Fix |
|-------|------|------|------------|
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | OPEN | **macOS app v2026.2.26 is arm64-only** — Intel Mac 崩溃，v2026.2.25 为通用二进制 | ❌ 无 |
| [#29420](https://github.com/openclaw/openclaw/issues/29420) | OPEN | **Discord WebSocket reconnect drops events** — 重连时 seq gap 导致 @mention 丢失 | ❌ 无 |
| [#16862](https://github.com/openclaw/openclaw/issues/16862) | CLOSED | **Web UI Error: missing scope: operator.read** — 升级后 WebUI 报错 | ✅ 已关闭 |
| [#24395](https://github.com/openclaw/openclaw/issues/24395) | CLOSED | **All channel plugins disabled in v2026.2.22** — 回归问题 | ✅ 已关闭 |

### 中等 (影响部分场景)

| Issue | 状态 | 描述 |
|-------|------|------|
| [#14215](https://github.com/openclaw/openclaw/issues/14215) | OPEN | **Browser Control Broken** — Chrome 扩展和中继连接不稳定 |
| [#15582](https://github.com/openclaw/openclaw/issues/15582) | OPEN | **Remote CDP (Browserless) blocked** — 端口占用误报 |
| [#21009](https://github.com/openclaw/openclaw/issues/21009) | OPEN | **Mac App overwrites openclaw.json** — 导致 bind=lan 崩溃循环 |
| [#30305](https://github.com/openclaw/openclaw/issues/30305) | OPEN | **LLM timeout with remote ollama** — 远程 Ollama 超时 |

### 已通过 PR 修复

- **#30696**: fix(telegram): expose direct message ids in inbound metadata
- **#30694**: fix(reply): retry empty text-only model responses once
- **#30691**: fix(reply): dedupe restart drain error floods per route

---

## 6. 功能请求与路线图信号

以下是新功能请求，结合已有 PR 可判断可能被纳入下一版本：

| Issue/PR | 功能描述 | 预计影响 |
|----------|----------|----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | **Linux/Windows Clawdbot Apps** — 开发 Linux/Windows 客户端 | 高需求，长期特性 |
| [#17700](https://github.com/openclaw/openclaw/issues/17700) | **feat: atomic config management** — 配置变更原子化 + 验证 + 崩溃回滚 | 核心架构改进 |
| [#28761](https://github.com/openclaw/openclaw/pull/28761) | **suppressOutbound config** — 渠道"仅监听"模式 | 进行中 PR |
| [#30641](https://github.com/openclaw/openclaw/pull/30641) | **@ import directives** — bootstrap 文件支持 @ 导入 | 小型改进 |
| [#9491](https://github.com/openclaw/openclaw/issues/9491) | **Configurable Bootstrap Files** — 可配置的引导文件注入 | 长期特性 |

**路线图信号**：从 Issue #17700（原子配置管理）和 PR #28761（仅监听模式）的推进来看，项目正在加强对生产环境部署稳定性和安全性的关注。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点：

1. **跨平台兼容性焦虑**
   - "You can't open the application 'OpenClaw' because this application is not supported on this Mac" — Intel Mac 用户无法使用 v2026.2.26
   - Linux/Windows 用户持续呼吁官方客户端支持

2. **升级后的"惊喜"**
   - 多个用户报告升级后出现回归问题（WebUI 报错、渠道禁用、macOS 崩溃）
   - "#24395 升级到 2026.2.22 后所有渠道插件都禁用了"

3. **自动化可靠性**
   - Discord WebSocket 重连丢失事件导致 @mention 失效
   - 远程 Ollama 模型持续超时
   - 浏览器控制连接不稳定

4. **配置管理脆弱**
   - "invalid values 导致 gateway 崩溃进入 crash loop，没有回滚机制"
   - Mac App 覆盖 openclaw.json 导致循环崩溃

**正面反馈**：Telegram 内联审批按钮（#30695）获得积极响应；子代理 session_status 修复（#30693）解决了工具表面不一致问题。

---

## 8. 待处理积压

以下 Issue 长期未响应或需要维护者重点关注：

| Issue | 创建时间 | 状态 | 原因 |
|-------|----------|------|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | OPEN | 长期需求，跨平台客户端开发资源有限 |
| [#4833](https://github.com/openclaw/openclaw/issues/4833) | 2026-01-30 | CLOSED | 刚关闭 |
| [#21785](https://github.com/openclaw/openclaw/issues/21785) | 2026-02-20 | CLOSED | PR 不完整遗留问题，已关闭 |
| [#21009](https://github.com/openclaw/openclaw/issues/21009) | 2026-02-19 | OPEN | Mac App 配置覆盖问题，需协调 macOS 团队 |
| [#30305](https://github.com/openclaw/openclaw/issues/30305) | 2026-03-01 | OPEN | 今日新报告，远程 Ollama 超时 |

**建议**：重点关注 #28877（macOS 回归）和 #29420（Discord 事件丢失），这两个问题影响大量用户且暂无 Fix PR。

---

*报告生成时间：2026-03-01 | 数据来源：OpenClaw GitHub Repository*

---

## 横向生态对比


# AI 智能体开源生态横向对比分析报告

**报告周期：2026-03-01 | 数据来源：各项目 GitHub 公开数据**

---

## 1. 生态全景

2026年3月初，个人 AI 助手与自主智能体开源生态呈现**多极分化、加速演进**的格局。头部项目（OpenClaw、Zeroclaw、NanoBot、PicoClaw）日均 Issues + PRs 处理量已超过 500 条，社区协作密度接近成熟开源项目水平。值得关注的是，**多渠道架构重构**（Telegram/WhatsApp/飞书/Web）与**多运行时支持**（Claude/Codex/Gemini/OpenAI）成为贯穿半数项目的核心演进方向，反映出生态正从单一体客户端向可扩展智能体平台转型。版本发布节奏整体偏缓，多数项目处于功能迭代与稳定性加固的并行周期，尚未形成统一的行业标准。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新增/活跃 → 关闭) | PRs (待合并 → 已合并/关闭) | Release | 健康度评估 |
|------|---------------------------|---------------------------|---------|------------|
| **OpenClaw** | 500 (214 → 286) | 500 (413 → 87) | 无 | 🟢 极高活跃，功能驱动 |
| **Zeroclaw** | 100 (50 → 50) | 100 (50 → 0) | 无 | 🟢 高活跃，PR 积压待消化 |
| **EasyClaw** | 2 (2 → 0) | 0 | 无 | 🔴 低速运行，功能停滞 |
| **LobsterAI** | 7 (7 → 0) | 8 (0 → 8) | 无 | 🟡 中等，PR 消化效率高 |
| **ZeptoClaw** | 1 (1 → 0) | 7 (1 → 7) | 无 | 🟢 极高效，PR 全部当日关闭 |
| **NanoBot** | 21 (新开) | 68 (33 → 35) | **v0.1.4.post3** | 🟢 活跃，版本迭代中 |
| **PicoClaw** | 17 (9 → 8) | 69 (51 → 18) | 无 | 🟢 高活跃，PR 队列较长 |
| **NanoClaw** | 11 (8 → 3) | 30 (25 → 5) | 无 | 🟡 中等，安全修复待合并 |
| **IronClaw** | 19 (2 → 17) | 33 (13 → 20) | 无 | 🟢 稳定，bugfix 效率突出 |
| **TinyClaw** | 2 (1 → 1) | 2 (2 → 0) | 无 | 🔴 低速，功能增强缓慢 |

**活跃度分层**：

- **第一梯队**（日更新 >100 条）：OpenClaw、Zeroclaw
- **第二梯队**（日更新 30-100 条）：NanoBot、PicoClaw、NanoClaw、IronClaw
- **第三梯队**（日更新 <30 条）：LobsterAI、ZeptoClaw
- **第四梯队**（基本停滞）：EasyClaw、TinyClaw

---

## 3. OpenClaw 在生态中的定位

### 规模优势

OpenClaw 以 **日均 500 条 Issues + PRs 处理量** 占据生态规模首位，是第二名 Zeroclaw 的 5 倍。这一差距不仅体现在数量上，更反映在社区参与广度——OpenClaw 的 Issue #75（Linux/Windows 客户端需求）获得 **55 赞**，是生态内关注度最高的单一需求。

### 技术路线差异

| 维度 | OpenClaw | Zeroclaw | NanoBot | PicoClaw |
|------|----------|-----------|---------|----------|
| **架构重心** | 跨平台客户端 + 渠道生态 | 多工作区拆分 + Web Dashboard | 上下文降噪 + 会话可靠性 | Provider 集成 + Channel 系统 |
| **更新节奏** | 功能驱动，快速迭代 | 重构驱动的过渡期 | 版本迭代明确（v0.1.4.post3） | 功能完善 + 稳定性并重 |
| **安全投入** | 常规 bugfix | 常规 bugfix | 常规 bugfix | 6 个 regex 阻止破坏性 git 操作 (#195) |
| **社区治理** | Issue 响应快，回归问题突出 | RFI 机制活跃，路线图透明 | 功能请求回应度高 | Issue 讨论深度中等 |

### 相对劣势

1. **回归问题频发**：macOS v2026.2.26 仅有 arm64 版本导致 Intel Mac 崩溃（#28877），Discord WebSocket 重连丢事件（#29420），均为影响面大的回归 Bug
2. **版本发布保守**：近 24 小时无 Release，远低于 NanoBot 的当日版本迭代节奏
3. **文档成熟度**：Issue #2299 暴露 CI 队列饱和问题（p99 等待 656 分钟），基础设施治理落后于功能开发

---

## 4. 共同关注的技术方向

以下需求在 **3 个以上项目** 中同步出现，反映生态共识：

### 4.1 多渠道架构（Multi-Channel Architecture）

| 项目 | 具体诉求 | 状态 |
|------|----------|------|
| NanoClaw | 可插拔多渠道架构重构（#500） | 核心重构进行中 |
| PicoClaw | Channel 系统重构（#621，83% 进度） | 10/12 阶段推进中 |
| OpenClaw | suppressOutbound 配置（#28761） | PR 进行中 |
| Zeroclaw | Web Dashboard Agent Tab 修复（#2168） | 已有 Fix PR |

**共性**：从单一渠道（WhatsApp/Telegram）向全渠道统一架构迁移，需要统一的消息抽象层、会话管理和权限模型。

### 4.2 多运行时支持（Multi-Runtime Support）

| 项目 | 具体诉求 | 状态 |
|------|----------|------|
| NanoClaw | 支持 OpenCode、Codex、Gemini（#80，33 赞） | 长期路线图 |
| TinyClaw | per-thread session 隔离（#152） | PR 待合并 |
| OpenClaw | 子代理 session_status 修复（#30693） | 已合并 |
| NanoBot | Qwen OAuth 支持（#1105） | 已合并 |

**共性**：降低对单一 LLM 提供商的依赖，适配企业多模型部署场景，尤其是 Claude 账户风险规避需求在社区反馈中显著上升。

### 4.3 生产环境稳定性

| 项目 | 具体诉求 | 状态 |
|------|----------|------|
| OpenClaw | 配置原子化管理 + 崩溃回滚（#17700） | RFI 阶段 |
| IronClaw | PostgreSQL TLS 支持（#427） | 已合并 |
| Zeroclaw | 远程 Ollama 端点及 WS 超时（#2305） | PR 进行中 |
| NanoClaw | OOM 修复 + 命令注入安全（#605） | PR 待合并 |

**共性**：从“能跑”向“跑得稳”过渡，配置管理、错误恢复、安全加固成为共同焦点。

### 4.4 成本控制与配额管理

| 项目 | 具体诉求 | 状态 |
|------|----------|------|
| ZeptoClaw | per-provider usage quota（#210） | 已合并 |
| Zeroclaw | Token 消耗与成本管理 RFI（#2269） | 讨论中 |
| OpenClaw | 远程 Ollama 超时问题（#30305） | OPEN |

---

## 5. 差异化定位分析

### 功能侧重

| 项目 | 核心定位 | 差异化能力 | 目标用户 |
|------|----------|-----------|----------|
| **OpenClaw** | 全功能跨平台 AI 助手 | 渠道生态最全（Telegram/Discord/飞书/Email），Bootstrap MD 导入 | 高级开发者、技术团队 |
| **Zeroclaw** | 企业级 Agent 编排 | 多工作区拆分、Web Dashboard、M4-5 crate 拆分 | 企业部署、多租户场景 |
| **NanoBot** | 可靠性优先智能体 | 上下文降噪、会话截断、Web Chat Channel | 追求回答准确性的用户 |
| **ZeptoClaw** | 轻量多模态 + IoT | MQTT 通道、DeepSeek/Kimi 支持、多模态视觉 | IoT 开发者、多模型爱好者 |
| **PicoClaw** | 硬件友好的嵌入式 Agent | 模型路由、智能选择、构建时裁剪 | 边缘计算、资源受限环境 |
| **NanoClaw** | 多渠道消息代理 | WhatsApp + Telegram 双支持、可插拔架构 | 跨境电商、客服场景 |
| **IronClaw** | 私有部署安全智能体 | PostgreSQL TLS、多租户工作区、Atlas 集成 | 企业私有化部署 |
| **LobsterAI** | 开箱即用桌面客户端 | Windows 捆绑 Python 运行时、中文优化 | 非技术用户 |

### 技术架构差异

- **Go 系主导**：OpenClaw、Zeroclaw、PicoClaw、IronClaw、ZeptoClaw（Go + Rust）
- **Node.js 系**：NanoClaw（容器化架构）、NanoBot（TypeScript/Go）
- **桌面应用**：LobsterAI（Electron + Python）、EasyClaw（Tauri）
- **嵌入式**：PicoClaw（构建时裁剪）

---

## 6. 社区热度与成熟度

### 成熟度分层

| 阶段 | 项目 | 特征 |
|------|------|------|
| **快速迭代期** | NanoBot、ZeptoClaw | 版本迭代频繁（NanoBot 当日出 v0.1.4.post3），PR 消化效率极高，功能快速补全 |
| **功能完善期** | OpenClaw、Zeroclaw、PicoClaw | 功能覆盖面广，Bugfix 与新功能并行，PR 队列较长但稳定推进 |
| **架构重构期** | NanoClaw、IronClaw | 核心架构重构（多渠道、多租户），breaking changes 预期，稳定性修复密集 |
| **低速维持期** | EasyClaw、TinyClaw | Issue/PR 产出极低，无活跃 PR，社区驱动不足 |

### 社区响应质量

- **响应最快**：NanoBot（Issue #623 在 5 条评论内即有跟进）、ZeptoClaw（PR #195 安全修复 2 天内待合并）
- **响应较慢**：TinyClaw（Issue #151 激烈投诉后无明确技术回应）、EasyClaw（Issue #4 用户明确表示要推广但无维护者互动）
- **透明度和治理最佳**：Zeroclaw（RFI 机制活跃，路线图信号清晰）、IronClaw（批量修复效率高，一次合并解决 6 个问题）

---

## 7. 值得关注的趋势信号

### 趋势一：多渠道统一架构成为基础设施竞争焦点

NanoClaw 的 #500（可插拔多渠道）与 PicoClaw 的 #621（Channel 系统重构，83% 进度）表明，**跨消息平台的统一抽象层**正在从“可选特性”演变为“基础设施标配”。对于 AI 智能体开发者，建议优先关注消息路由、会话隔离和渠道权限的统一设计。

### 趋势二：运行时多元化从“可选”转向“必需”

NanoClaw Issue #80（33 赞、15 评论）揭示了一个重要信号：用户对 **Anthropic 账户批量封禁风险的担忧**正在驱动运行时多样化需求。OpenClaw 的子代理支持（#30693）和 NanoBot 的 Qwen OAuth（#1105）进一步验证这一方向。建议开发者在架构层面预留运行时抽象接口。

### 趋势三：生产环境从“功能优先”转向“稳定性优先”

OpenClaw 的配置原子化管理（#17700）、IronClaw 的 PostgreSQL TLS 支持（#427）、NanoClaw 的命令注入安全修复（#605）形成合力，表明 **生产级智能体的核心挑战已从“能做什么”转向“如何稳定运行”**。配置回滚、错误恢复、安全边界将成为下一个竞争维度。

### 趋势四：成本控制从“使用后关注”变为“设计时需求”

ZeptoClaw 的 per-provider quota（#210）和 Zeroclaw 的 Token 消耗 RFI（#2269）显示，**成本治理正在前移到架构设计阶段**。随着 Agent 工作负载在企业场景中规模化部署，token 消耗可视化、配额管理、多模型成本优化将成为标配功能。

### 对 AI 智能体开发者的建议

1. **短期**：优先解决回归问题——OpenClaw 的 macOS 崩溃和 Discord 丢事件影响大量现有用户
2. **中期**：构建可插拔渠道架构，避免被单一平台绑定
3. **长期**：在设计阶段嵌入运行时抽象和成本治理能力，为多模型、多渠道、多租户场景做好准备
4. **差异化机会**：EasyClaw 和 TinyClaw 代表的低速项目暴露了 **Windows 兼容性和开箱即用体验** 的市场需求尚未被充分满足

---

*本报告基于 2026-03-01 各项目 GitHub 公开数据生成。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-01)

## 1. 今日速览

过去24小时内，Zeroclaw 项目保持高度活跃：共产生 **100 条 GitHub 更新**（50 条 Issues + 50 条 PRs）。Issues 方面 31 个新开/活跃，19 个已关闭；PRs 方面 50 个待合并，尚未有合并记录。社区参与度较高，热门 Issue 讨论热烈（最高 9 条评论），多个功能路线图 RFI（Request for Information）被提出。项目正在推进大规模重构（多工作区拆分、Web Dashboard 重建），同时修复多个阻塞性 Bug（Feishu 通道、WebSocket 认证）。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日 **50 个 PR 待合并**，暂无合并记录，以下为今日值得关注的重要 PR：

| PR | 作者 | 摘要 | 风险 |
|---|---|---|---|
| [#1719](https://github.com/zeroclaw-labs/zeroclaw/pull/1719) | @reidliu41 | feat(onboard): 添加 Web 版设置向导，降低非技术用户入门门槛 | medium |
| [#2343](https://github.com/zeroclaw-labs/zeroclaw/pull/2343) | @theonlyhenniggod | fix(web): 重建 Dashboard dist，修复 WebSocket 认证与会话持久化 | low |
| [#2346](https://github.com/zeroclaw-labs/zeroclaw/pull/2346) | @Preventnetworkhacking | fix: 重建 Web 资源并修复 Agent Tab WebSocket 认证 TypeScript 错误 | medium |
| [#2357](https://github.com/zeroclaw-labs/zeroclaw/pull/2357) | @alexFilim | fix(providers): 修复 OpenAI Codex WebSocket 空流回退及编译错误 | high |
| [#2305](https://github.com/zeroclaw-labs/zeroclaw/pull/2305) | @ecschoye | fix(gateway,doctor): 支持远程 Ollama 端点及 WS 超时 | medium |
| [#1892](https://github.com/zeroclaw-labs/zeroclaw/pull/1892) | @LupoGrigi0 | fix(web): 将内存管道集成到 WebSocket 聊天处理器 | high |
| [#2056](https://github.com/zeroclaw-labs/zeroclaw/pull/2056) | @awol2005ex | feat(shell): 增强 Windows PowerShell 命令执行及中文编码处理 | high |
| [#2368](https://github.com/zeroclaw-labs/zeroclaw/pull/2368) | @geraint0923 | feat(search): 添加 Grok web-search 和 x-search 工具 | medium |
| [#1432](https://github.com/zeroclaw-labs/zeroclaw/pull/1432) | @klampatech | feat(clawhub): 添加完整 LLM 工具集成 + CLI | high |
| [#2246](https://github.com/zeroclaw-labs/zeroclaw/pull/2246) | @alexandme | feat(whatsapp): 为 WhatsApp Web 添加 allowed_groups 过滤 | high |

**关键进展**：
- **Web Dashboard 重建**：Issue #2168（Agent Tab WebSocket 连接失败）已通过 PR #2343 和 #2346 修复，需合并后重新部署
- **内存管道修复**：PR #1892 修复了 WebSocket 聊天会话不保存内存的严重问题
- **CI 队列问题**：Issue #2299 报告 CI 饱和（382 个排队，p99 等待 656 分钟），待官方响应

---

## 4. 社区热点

以下 Issues/PRs 评论数最多，反映社区最关注的话题：

### 热门 Issues

| Issue | 评论 | 标签 | 摘要 |
|---|---|---|---|
| [#1380](https://github.com/zeroclaw-labs/zeroclaw/issues/1380) | 9 | enhancement | **External MCP Server Support** - 支持通过 npm 或远程 MCP 添加外部 MCP 服务器配置 |
| [#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269) | 7 | enhancement, RFI | **Token 消耗与成本管理** - 探讨产品化 Agent 工作负载的成本可行性设计方向 |
| [#2388](https://github.com/zeroclaw-labs/zeroclaw/issues/2388) | 6 | distinguished contributor | **Agent-team 编排深度实现** - 实现 token 效率治理、拓扑基准测试、策略门验证 |
| [#2263](https://github.com/zeroclaw-labs/zeroclaw/issues/2263) | 6 | enhancement (CLOSED) | **M4-5 多 crate 工作区拆分** - 正式将大 crate 拆分提上日程，启动 RFI |
| [#2168](https://github.com/zeroclaw-labs/zeroclaw/issues/2168) | 4 | bug | **Web Dashboard Agent Tab 连接错误** - WebSocket 认证变更导致资源不匹配 |
| [#2325](https://github.com/zeroclaw-labs/zeroclaw/issues/2325) | 4 | bug (S1) | **飞书/Feishu 通道无法工作** - 编译未包含 `channel-lark` 特性 |
| [#2299](https://github.com/zeroclaw-labs/zeroclaw/issues/2299) | 4 | enhancement (CLOSED) | **CI Actions 队列饱和** - 自托管 runner 排队超过 10 小时 |

**分析**：社区高度关注 **MCP 外部服务器支持**、**成本管理**、**Agent 编排** 等长期路线图功能，同时 **CI 性能** 和 **Web Dashboard 稳定性** 是近期痛点。

---

## 5. Bug 与稳定性

今日报告的 Bug，按严重程度排列：

### S0-S1 严重阻塞

| Issue | 严重程度 | 摘要 | 状态 |
|---|---|---|---|
| [#2325](https://github.com/zeroclaw-labs/zeroclaw/issues/2325) | S1 - workflow blocked | 飞书通道配置后编译未包含 `channel-lark` 特性，导致无法工作 | OPEN |
| [#2168](https://github.com/zeroclaw-labs/zeroclaw/issues/2168) | S1 - workflow blocked | Web Dashboard Agent Tab 显示连接错误，WebSocket 认证失败 | OPEN (有 Fix PR) |
| [#2230](https://github.com/zeroclaw-labs/zeroclaw/issues/2230) | S0 - data loss | `channel-lark` 在 Windows 上编译失败 | CLOSED |

### S2 降级行为

| Issue | 严重程度 | 摘要 | 状态 |
|---|---|---|---|
| [#2301](https://github.com/zeroclaw-labs/zeroclaw/issues/2301) | S2 - degraded | Debian 13 Proxmox LXC 安装失败，`bootstrap.sh` 权限错误 | OPEN |
| [#2210](https://github.com/zeroclaw-labs/zeroclaw/issues/2210) | S2 - degraded | 内存仅存储用户消息，不存储 Agent 响应 | CLOSED |
| [#2367](https://github.com/zeroclaw-labs/zeroclaw/issues/2367) | S2 - degraded | 系统提示"当前日期时间"在多轮对话中不更新，仍为初始值 | OPEN |

### S3 次要问题

| Issue | 严重程度 | 摘要 | 状态 |
|---|---|---|---|
| [#2291](https://github.com/zeroclaw-labs/zeroclaw/issues/2291) | S3 - minor | README 文档中 `zeroclaw gateway start` 命令不存在 | CLOSED |
| [#2220](https://github.com/zeroclaw-labs/zeroclaw/issues/2220) | S3 - minor | Cron Job 重复执行任务 | CLOSED |

**已有 Fix PR**：
- #2168 → PR #2343、#2346
- #2327 (MCP stdio transport) → 已修复

---

## 6. 功能请求与路线图信号

以下功能请求可能进入下一版本，结合已有 PR 判断：

### 高优先级路线图信号

| Issue | 类型 | 摘要 | 相关 PR |
|---|---|---|---|
| [#1380](https://github.com/zeroclaw-labs/zeroclaw/issues/1380) | Feature | **外部 MCP 服务器支持** - 支持 npm/远程 MCP 配置 | - |
| [#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269) | RFI | **Token 消耗与成本管理** - 产品化 Agent 成本优化 | - |
| [#2388](https://github.com/zeroclaw-labs/zeroclaw/issues/2388) | Feature | **Agent-team 编排深度实现** - 包含 token 效率治理 | - |
| [#2263](https://github.com/zeroclaw-labs/zeroclaw/issues/2263) | Initiative | **M4-5 多 crate 工作区拆分** - 改善编译时间 | - |
| [#2309](https://github.com/zeroclaw-labs/zeroclaw/issues/2309) | RFI | **Q0-3 Stop-reason 状态机** - Max-tokens 继续行为 | - |
| [#2308](https://github.com/zeroclaw-labs/zeroclaw/issues/2308) | RFI | **F1-3 Agent 生命周期状态机** | - |

### 新增功能请求

| Issue | 摘要 | 状态 |
|---|---|---|
| [#2376](https://github.com/zeroclaw-labs/zeroclaw/issues/2376) | Gemini provider 缺少图像/多模态输入支持 | OPEN |
| [#2386](https://github.com/zeroclaw-labs/zeroclaw/issues/2386) | 记忆检索的时间衰减评分 + 核心记忆豁免 | OPEN |
| [#2381](https://github.com/zeroclaw-labs/zeroclaw/issues/2381) | 压缩前记忆刷新，保留持久事实 | OPEN |
| [#2378](https://github.com/zeroclaw-labs/zeroclaw/issues/2378) | 核心记忆类别在上下文检索中提升评分 | OPEN |
| [#2317](https://github.com/zeroclaw-labs/zeroclaw/issues/2317) | 添加 xlsx_read 工具读取 Excel | CLOSED (已合并) |
| [#1865](https://github.com/zeroclaw-labs/zeroclaw/issues/1865) | HITL 交互式审批扩展至 Telegram Inline Buttons | OPEN |
| [#2274](https://github.com/zeroclaw-labs/zeroclaw/issues/2274) | Chat-based CRM 用例 - 主动心跳、轻量运行时、多租户 | OPEN |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的关键用户痛点与场景：

### 痛点
1. **安装问题**：Debian 13 Proxmox LXC 环境安装失败，权限拒绝（#2301）
2. **编译时间**：大型单一 crate 导致编译时间过长，影响迭代效率（#2263）
3. **CI 等待**：自托管 runner 队列饱和，p99 等待超过 10 小时（#2299）
4. **文档缺失**：安装说明未在 README 中引用，需查看 GitHub Issue（#2283）
5. **飞书通道**：编译未包含 `channel-lark` 特性，用户配置后无法使用（#2325）

### 正面反馈
- **Agent 编排需求**：社区对 Agent-team 编排、token 成本管理表现出浓厚兴趣，多个 RFI 收到响应
- **多模态支持**：用户积极推动 Gemini 图像输入支持（#2376）
- **CRM 场景**：有用户将 ZeroClaw 视为 OpenClaw 的低成本替代方案，用于 Chat-based CRM 产品

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或需维护者关注：

| Issue/PR | 距今 | 摘要 | 风险 |
|---|---|---|---|
| [#2299](https://github.com/zeroclaw-labs/zeroclaw/issues/2299) | 2 天 | CI 队列饱和问题（382 个排队，p99 656 分钟） | 高 |
| [#2168](https://github.com/zeroclaw-labs/zeroclaw/issues/2168) | 2 天 | Web Dashboard Agent Tab 连接失败 | 高 (有 Fix) |
| [#2325](https://github.com/zeroclaw-labs/zeroclaw/issues/2325) | 1 天 | 飞书通道 S1 阻塞 | 高 |
| [#2301](https://github.com/zeroclaw-labs/zeroclaw/issues/2301) | 1 天 | Debian 安装 S2 问题 | 中 |
| [#1428](https://github.com/zeroclaw-labs/zeroclaw/issues/1428) | 8 天 | 自定义 OpenAI 兼容 provider 在 HTTP 516 时错误重试 | 中 |

---

*报告生成时间：2026-03-01 | 数据来源：GitHub zeroclaw-labs/zeroclaw*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 | 2026-03-01

---

## 1. 今日速览

过去24小时内，项目收到 **2 条新 Issue**，暂无 PR 合并或版本发布。社区活跃度维持在日常水平，2个新增 Issue 均来自真实用户反馈，主要聚焦功能缺失问题。项目当前处于功能完善阶段，用户对任务计划、对话记录及多对话支持有明确需求。建议维护者关注 Issue 评论中的用户场景描述，有助于规划后续迭代优先级。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**过去24小时无 PR 合并或关闭**

项目当前无活跃 PR 推进，代码库处于相对静止状态。考虑到 Issue #3 和 #4 提出的功能需求，建议维护者评估是否需要开启相关功能的开发分支。

---

## 4. 社区热点

### 🔥 Issue #3 - 对话不能切换模型，而且不支持多对话同时进行

| 项目 | 内容 |
|------|------|
| **作者** | @gxlqssjf |
| **状态** | OPEN |
| **评论** | 1 条 |
| **链接** | [GitHub Issue #3](https://github.com/gaoyangz77/easyclaw/issues/3) |

**分析**：该问题涉及核心交互体验，用户反馈对话功能存在两点不足：
1. 无法切换 AI 模型
2. 不支持多对话并发

从1条评论来看，社区对此问题存在讨论，可能是多用户共性需求。该 Issue 触及产品核心竞争力（模型切换、多会话管理），建议优先评估。

---

### 🔥 Issue #4 - 缺任务计划和对话记录

| 项目 | 内容 |
|------|------|
| **作者** | @leati |
| **状态** | OPEN |
| **评论** | 0 条 |
| **链接** | [GitHub Issue #4](https://github.com/gaoyangz77/easyclaw/issues/4) |

**分析**：用户明确表示"这个是最和我心意的"，说明对项目整体较为满意，但功能上缺少任务计划管理和对话记录功能。从"明天我要给同事推"的表述看，用户有强推广意愿，功能完善后将有助于口碑传播。该 Issue 无评论但意图清晰，属于高价值功能需求。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|----------|-------|------|------|
| 中 | #3 | 对话模型切换失效、多会话不支持 | OPEN，暂无 fix PR |

今日未报告崩溃或严重回归问题。Issue #3 属于功能缺陷（功能不可用），而非稳定性问题，建议归入功能迭代范畴处理。

---

## 6. 功能请求与路线图信号

| 功能需求 | 关联 Issue | 潜在纳入版本 |
|----------|------------|--------------|
| 模型切换 | #3 | 下一版本（功能增强） |
| 多对话并发支持 | #3 | 下一版本（功能增强） |
| 任务计划功能 | #4 | 下一版本（功能增强） |
| 对话记录存储/展示 | #4 | 下一版本（功能增强） |

**判断依据**：两项 Issue 均无关联 PR，但需求明确且来自真实用户反馈。结合项目当前处于功能补全阶段的判断，上述4项功能有较大概率纳入下一版本迭代。建议维护者在 README 或 Roadmap 中补充功能规划，降低用户预期不确定性。

---

## 7. 用户反馈摘要

### 正面反馈
- **Issue #4** 用户表示"用了好多个版本的龙虾，这个是最和我心意的"，对项目整体满意度较高
- 用户主动提及要"给同事推"，具备社区传播潜力

### 负面反馈/痛点
- 对话模型无法切换，使用灵活性受限
- 不支持多对话并行操作，工作流效率受限
- 缺少任务计划功能，场景覆盖不足
- 缺少对话历史记录，影响持续使用体验

### 使用场景
- 多会话并发交互
- 带结构化输出的对话任务
- 任务规划与执行

---

## 8. 待处理积压

| Issue | 创建时间 | 当前状态 | 提醒 |
|-------|----------|----------|------|
| #3 | 2026-03-01 | OPEN，无任何 PR 关联 | 建议 3 天内回应，评估开发可行性 |
| #4 | 2026-03-01 | OPEN，无任何 PR 关联 | 用户有推广意愿，建议尽快反馈，优先处理 |

**当前积压量**：2 个 OPEN Issue  
**平均响应时间**：当日（创建即读）  
**建议**：两个 Issue 均为今日新增，暂无积压风险。但考虑到 Issue #4 用户明确提到明日要给同事推广，维护者若能在此之前做出功能规划回应，将显著提升用户信心和社区活跃度。

---

*报告生成时间：2026-03-01 | 数据来源：GitHub EasyClaw Repository*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-01)

## 1. 今日速览

LobsterAI 项目在 2026-03-01 保持较高活跃度。过去 24 小时内共产生 **7 条 Issues**（全为新开/活跃状态，无关闭）和 **8 条 PRs**（全部已合并/关闭）。社区参与度良好，多位贡献者提交了修复和功能改进 PR。主要关注点集中在模型兼容性、多会话稳定性、用户体验优化等方面。当前项目处于功能迭代期，核心功能日趋完善，但存在部分用户报告的兼容性问题需后续跟进。

---

## 2. 版本发布

**无新版本发布**

过去 24 小时内未检测到版本更新。当前最新版本信息请参考项目 Releases 页面。

---

## 3. 项目进展

过去 24 小时内共合并/关闭 **8 个 PR**，项目在多个方面取得进展：

| PR # | 标题 | 贡献者 | 意义 |
|------|------|--------|------|
| **#192** | feature: add bundled Windows Python runtime support | @fisherdaddy | **重点** - 为 Windows 包集成便携式 Python 解释器，用户无需手动安装 Python，显著降低入门门槛 |
| **#194** | fix: disambiguate model selection by provider key | @fisherdaddy | 修复同一模型 ID 在多供应商存在时的选择歧义问题，确保用户选择正确持久化 |
| **#167** | fix: 解决自定义邮箱的高级设置的 bug & 优化体验 | @fisherdaddy | 修复自定义邮箱配置的体验问题 |
| **#160** | fix: 修复 websearch skills 中文乱码的问题 | @fisherdaddy | 解决中文搜索结果的乱码问题，提升中文用户体验 |
| **#129** | feat: 支持系统代理设置，默认关闭 | @fisherdaddy | 新增系统代理配置选项，增强网络灵活性 |
| **#193** | Liuzhq/skill optimize | @liuzhq1986 | Skill 模块优化 |
| **#127** | Fix default model in settings | @mammut001 | 修复设置中默认模型选择逻辑，确保使用最新启用的供应商 |
| **#123** | Fix-MiniMax OpenAI Invalid Params | @mammut001 | 修复 MiniMax API 参数错误问题 |

**综合评估**：本期 PR 质量较高，覆盖用户体验、跨平台支持、多供应商兼容性等多个维度，特别是 #192 Windows 运行时打包是降低用户使用门槛的重要改进。

---

## 4. 社区热点

以下 Issues 引发较多讨论或具有代表性：

| Issue # | 标题 | 评论数 | 热度分析 |
|---------|------|--------|----------|
| **#187** | 非阿里模型好像都不能用 | 2 | 多供应商兼容性问题，用户报告非阿里系模型无法使用，涉及模型选择器逻辑（可能与 #194 修复相关） |
| **#185** | 建议custom供应商支持 openai 的新格式，目前 gpt-5.3-codex 用不了 | 2 | OpenAI 新 API 格式兼容需求，用户明确指出需要支持 Responses API |

**热点分析**：本期热点集中在 **模型兼容性** 和 **API 格式适配** 两个主题，反映用户对多模型支持的强烈需求。#185 直接关联 OpenAI 最新 API 演进，具备一定前瞻性。

---

## 5. Bug 与稳定性

| Issue # | 标题 | 严重程度 | 状态 | 相关 Fix |
|---------|------|----------|------|----------|
| **#191** | 单个session多次对话后容易出现API Error | **高** | OPEN | 无 - 需关注 |
| **#188** | skill默认是全开的，但是啥都调用不了（cygpath 依赖问题） | **中** | OPEN | 无 |
| **#195** | 邮箱SKILL搜不到发票类型的自动发信邮件 | **中** | OPEN | 无 |

**重点关注**：

- **#191** 涉及会话稳定性问题，报错信息为 `invalid_request_error: an assistant message with 'tool_calls' must be followed by tool messages`，属于对话上下文处理缺陷，可能影响用户体验
- **#188** 涉及 Windows 环境下 cygpath 依赖问题，虽然 PR #192 已解决 Python 运行时问题，但 skill 调用层仍可能存在依赖缺失

---

## 6. 功能请求与路线图信号

| Issue # | 标题 | 需求类型 | 实现可能性 |
|---------|------|----------|------------|
| **#185** | custom供应商支持 openai 的新格式 | API 兼容 | **高** - 有明确技术指向，已有相关 PR #194 改进模型选择 |
| **#189** | 请问支持openai的OAuth 吗？ | 新功能 | 中 - 需评估开发成本 |
| **#190** | LobsterAI可以支持的最大对话数是多少，如何恢复历史会话 | 功能咨询/改进 | 中 - 涉及数据持久化设计 |
| **#195** | 邮箱SKILL搜不到发票类型的自动发信邮件 | 功能增强 | 中 - 需扩展邮件解析规则 |

**路线图信号**：结合本期 PR #192（Windows 运行时）、#194（多供应商模型选择），项目近期重点可能在 **跨平台体验优化** 和 **多模型支持**，#185 的 OpenAI 新格式支持有望在后续版本中实现。

---

## 7. 用户反馈摘要

从 Issues 评论和内容中提炼的用户痛点：

- **多模型兼容性不足**：用户反馈非阿里模型无法使用（#187），OpenAI 最新模型格式不支持（#185）
- **Windows 入门门槛**：新用户反馈需要手动安装 Python（#188），本期 #192 已解决
- **会话稳定性**：多次对话后出现 API 错误（#191），影响连续使用体验
- **数据持久化困惑**：版本更新后历史会话丢失，用户不清楚恢复方法（#190）
- **邮件解析局限**：部分发票类邮件无法被正确识别和归档（#195）

**满意度方面**：用户对 skill 优化（#193）、中文乱码修复（#160）、系统代理支持（#129）等改进表示认可。

---

## 8. 待处理积压

以下 Issues 创建时间较早或重要但尚未有明确响应：

| Issue # | 标题 | 创建时间 | 状态 | 提醒 |
|---------|------|----------|------|------|
| **#191** | 单个session多次对话后容易出现API Error | 2026-03-01 | OPEN | **高优先级** - 影响核心功能稳定性 |
| **#188** | skill默认是全开的，但是啥都调用不了 | 2026-02-28 | OPEN | Windows 环境下 skill 调用问题 |
| **#195** | 邮箱SKILL搜不到发票类型的自动发信邮件 | 2026-03-01 | OPEN | 邮件解析功能缺失 |
| **#190** | 如何恢复历史会话 | 2026-03-01 | OPEN | 用户文档/功能需求 |

**建议**：优先处理 #191（会话稳定性）和 #188（skill 调用），这两个问题直接影响核心使用体验。

---

*报告生成时间：2026-03-01 | 数据来源：GitHub LobsterAI Repository*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报

**2026年3月1日**

---

## 1. 今日速览

今日 ZeptoClaw 项目继续保持极高的开发活跃度。过去24小时内，项目合并/关闭了 **7 个 PR**，涵盖了多模态 AI、IoT 通信、文档处理、身份认证等多个关键功能领域。仅 **1 个 PR 处于待合并状态**，社区积极响应功能需求并快速实现。当前项目处于功能扩展期，多项重量级特性刚刚合入主干，代码库健康度良好。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日项目实现了多项重要功能，合并了 **7 个 PR**，具体如下：

| PR | 标题 | 状态 | 推进内容 |
|----|------|------|----------|
| [#210](https://github.com/qhkm/zeptoclaw/pull/210) | feat(quota): per-provider usage quota management | ✅ 已关闭 | 实现按提供商配额管理，防止意外账单，支持成本控制 |
| [#208](https://github.com/qhkm/zeptoclaw/pull/208) | feat(providers): add DeepSeek and Kimi support | ✅ 已关闭 | 新增 DeepSeek 和 Kimi (Moonshot AI) 支持，扩充模型选择 |
| [#209](https://github.com/qhkm/zeptoclaw/pull/209) | feat(channels): add MQTT channel for IoT | ✅ 已关闭 | 新增 MQTT 通道，支持 IoT 设备通过网络通信（ESP32/RPi等） |
| [#206](https://github.com/qhkm/zeptoclaw/pull/206) | feat(tools): add DOCX text extraction tool | ✅ 已关闭 | 新增 `docx_read` 工具，支持从 DOCX 文件提取文本 |
| [#205](https://github.com/qhkm/zeptoclaw/pull/205) | feat(auth): OpenAI OAuth / Codex CLI auth | ✅ 已关闭 | 支持从 Codex CLI 导入 token，支持浏览器 OAuth 登录 OpenAI |
| [#202](https://github.com/qhkm/zeptoclaw/pull/202) | feat: add multimodal vision/image input support | ✅ 已关闭 | 实现多模态视觉/图片输入支持，覆盖所有消息通道 |
| [#204](https://github.com/qhkm/zeptoclaw/pull/204) | docs: add disclaimer | ✅ 已关闭 | 在 README 中添加免责声明，明确项目无 Token/加密货币/区块链关联 |

**待合并 PR：**

- [#195](https://github.com/qhkm/zeptoclaw/pull/195) **fix(safety): block destructive git operations in shell blocklist** — 添加 6 个正则表达式阻止通过 shell 执行破坏性 git 命令（`push --force`, `reset --hard`, `clean -f`, `branch -D` 等），修复安全漏洞，预计近期合并。

---

## 4. 社区热点

今日讨论最活跃的 Issue 是：

### [#193](https://github.com/qhkm/zeptoclaw/issues/193) [OPEN] LLM endpoint switching on the fly in telegram

- **作者**: @superhero75
- **创建时间**: 2026-02-27
- **评论数**: 3
- **标签**: feat

**核心诉求**：大多数 LLM 端点都有速率限制（rate limit），用户希望在 Telegram 中动态切换模型或端点，例如使用 `/models` 和 `/model` 命令。

**分析**：这是一个实际的使用痛点需求，与刚刚合并的 DeepSeek/Kimi 支持 (#208) 高度相关——当用户接入多个 LLM 提供商时，确实需要灵活切换能力。该功能如果实现，将显著提升多模型部署场景下的可用性。

---

## 5. Bug 与稳定性

**今日无新 Bug 报告**

---

## 6. 功能请求与路线图信号

今日社区提出了以下新功能请求，结合已合并的 PR 可以看出明显的路线图趋势：

| Issue | 功能 | 状态 | 潜在纳入版本 |
|-------|------|------|-------------|
| [#193](https://github.com/qhkm/zeptoclaw/issues/193) | Telegram 中动态切换 LLM 端点/模型 | OPEN | 预计下一版本 |
| [#184](https://github.com/qhkm/zeptoclaw/issues/184) | 升级 reqwest 0.12 → 0.13 | CLOSED (blocked) | 等待上游 gogcli-rs 更新 |

**趋势分析**：
- 项目正在快速补齐多模态能力（Vision、DOCX）
- IoT 布局明显（MQTT 通道）
- 身份认证能力持续增强（OAuth）
- 提供商生态持续扩展（DeepSeek、Kimi、Quota 管理）

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的用户痛点与场景：

- **Rate Limit 痛点**：Issue #193 提到多数 LLM 端点存在速率限制，切换不灵活，影响生产环境使用
- **多端点管理需求**：用户需要在 Telegram 中快速切换不同模型/端点（使用 `/models` 和 `/model` 命令）
- **IoT 场景缺失**：现有 Serial (UART) 通信无法满足 WiFi/网络环境下 ESP32、Raspberry Pi、Arduino 等设备的通信需求
- **文档处理缺口**：用户经常发送 DOCX 文件（商务文档、报告、合同），但 ZeptoClaw 仅支持 PDF
- **视觉交互期望**：所有主流消息平台（Telegram、Discord、WhatsApp、Slack、Lark、Email）都原生支持图片，用户期望在 Agent 中处理图像

---

## 8. 待处理积压

| Issue/PR | 状态 | 等待时间 | 备注 |
|----------|------|----------|------|
| [#195](https://github.com/qhkm/zeptoclaw/pull/195) | OPEN | ~2 天 | 安全修复：阻止破坏性 git 操作，需尽快合并 |
| [#193](https://github.com/qhkm/zeptoclaw/issues/193) | OPEN | ~3 天 | 热门功能请求，3条评论，需评估实现方案 |

---

**报告生成时间**: 2026-03-01  
**数据来源**: GitHub (github.com/qhkm/zeptoclaw)

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-01)

## 1. 今日速览

NanoBot 项目今日保持极高活跃度：过去24小时内新增 21 条 Issues 和 68 条 PRs，新版本 v0.1.4.post3 刚刚发布（33 个 PR 合并，16 位新贡献者），社区参与热情高涨。版本更新聚焦于**减少上下文噪音以降低幻觉**，标志着项目在智能体可靠性方面迈出重要一步。当前有 49 个 PR 待合并，项目整体向前推进势头强劲。

---

## 2. 版本发布

### 🎉 v0.1.4.post3 已发布

**发布说明**：
> 🐈 nanobot `v0.1.4.post3` just dropped — 33 PRs merged, 16 new contributors! You guys are unstoppable 🔥

**核心改进**：
- **更干净的上下文 (Cleaner Context)**：减少无关信息输入，提升智能体决策质量
- **更健壮的会话历史 (Hardened Session History)**：修复多处历史管理缺陷
- **更少的干扰消息 (Fewer Ghost Messages)**：消除幽灵消息，降低幻觉输出

**影响评估**：此次更新为增量发布，无破坏性变更。现有用户可平滑升级，建议关注会话行为变化。

---

## 3. 项目进展

### 合并/关闭的重要 PRs

| PR # | 标题 | 状态 | 意义 |
|------|------|------|------|
| #1331 | Heartbeat 工具参数解析增强 | ✅ CLOSED | 修复出站分发器被单条坏消息打挂的稳定性问题 |
| #1370 | feat(tool): add web search proxy | ✅ CLOSED | 新增 Web 搜索代理功能 |
| #1375 | feat(cron): improve cron job context handling | ✅ CLOSED | 改进定时任务上下文处理，LLM 可识别系统驱动的提醒 |
| #1105 | Add Qwen OAuth support | ✅ CLOSED | 新增 Qwen OAuth 认证支持 |
| #1233 | feat: add async event injection for user interruption | ✅ CLOSED | 新增用户中断的异步事件注入机制 |
| #1361 | fix(feishu): parse post wrapper payload | ✅ CLOSED | 修复飞书消息解析问题 |

**待合并的重量级 PRs**：
- #1341: **Web Chat Channel** - 自带 SSE token 流和多人会话 UI 的浏览器聊天界面
- #1038: **Session History Truncation** - 修复工具调用/结果截断不一致问题
- #1367: **Kimi-Coding 模型支持** - 新增 Kimi Coding 模型映射和端点
- #1366: **LLM 重试策略与回退模型** - 可配置的重试策略和故障转移
- #1377: **集成 DeepAgents 框架** - LangGraph 智能体后端支持

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 热度分析 |
|---------|------|--------|----------|
| [#623](https://github.com/HKUDS/nanobot/issues/623) | Persistent "Tool Not Found" Errors for Custom Skills | 5 | **最高优先级 Bug** - 自定义技能（如 google_calendar, ha-voice）持续报错，影响核心功能 |
| [#1265](https://github.com/HKUDS/nanobot/issues/1265) | 【建议】在Windows上实测对比openclaw和nanobot的建议 | 5 | **竞品分析** - 用户力证 nanobot 在 Windows 兼容性上优于 openclaw，建议强化此优势 |
| [#140](https://github.com/HKUDS/nanobot/issues/140) | GitHub Copilot providers 支持计划 | 5 | **路线图信号** - 4 人点赞，功能需求明确 |
| [#1302](https://github.com/HKUDS/nanobot/issues/1302) | per-session working directory isolation | 4 | **架构需求** - 多会话场景下工作目录隔离的合理诉求 |
| [#1353](https://github.com/HKUDS/nanobot/issues/1353) | ClawHub rate limit issue | 3 | **平台稳定性** - Skill 安装遭遇速率限制 |

**热点 PR**：
- [#1369](https://github.com/HKUDS/nanobot/pull/1369): **Forward Telegram reactions to agent** - 3 条评论，受益于 Issue #1334 的讨论

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

| 严重程度 | Issue # | 描述 | 状态 |
|----------|---------|------|------|
| 🔴 **Critical** | [#1365](https://github.com/HKUDS/nanobot/issues/1365) | Linux 下执行复杂任务时进程意外 "Terminated"，无错误日志 | OPEN |
| 🔴 **Critical** | [#1363](https://github.com/HKUDS/nanobot/issues/1363) | 子 Agent 对话历史完全丢失，无 Session 存储 | OPEN |
| 🟠 **High** | [#623](https://github.com/HKUDS/nanobot/issues/623) | 自定义技能持续报 "Tool Not Found" | OPEN |
| 🟠 **High** | [#1380](https://github.com/HKUDS/nanobot/issues/1380) | Telegram groupPolicy: "mention" 被忽略，响应所有消息 | OPEN |
| 🟠 **High** | [#1328](https://github.com/HKUDS/nanobot/issues/1328) | Agent 和 Gateway 不共享 skills | OPEN |
| 🟡 **Medium** | [#1332](https://github.com/HKUDS/nanobot/issues/1332) | Token 消耗异常高，发"hello"需 5000+ tokens | OPEN |
| 🟡 **Medium** | [#1318](https://github.com/HKUDS/nanobot/issues/1318) | 安装 skill 后机器人重复回复消息 | OPEN |
| 🟢 **Low** | [#1382](https://github.com/HKUDS/nanobot/issues/1382) | 飞书 Markdown 表格超出数量限制 | OPEN |
| 🟢 **Low** | [#1344](https://github.com/HKUDS/nanobot/issues/1344) | QQ 机器人偶发 "Invalid type for messages" 错误 | OPEN |

**已有 Fix PR 的 Bug**：
- ✅ #1350: `send_progress/send_tool_hints` 在 gateway 模式不生效 → PR #1376 已 OPEN
- ✅ #1343: QQ 频道只读文件系统错误 → 已 CLOSED (Issue #1343)

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue # | 功能 | 预计纳入版本 | 依据 |
|---------|------|-------------|------|
| [#140](https://github.com/HKUDS/nanobot/issues/140) | GitHub Copilot providers 支持 | 未来版本 | 5 评论，4 点赞，需求明确 |
| [#1302](https://github.com/HKUDS/nanobot/issues/1302) | 每会话工作目录隔离 | 待定 | 架构改进，涉及较深改动 |
| [#1334](https://github.com/HKUDS/nanobot/issues/1334) | Telegram 表情反应支持 | 近期 | PR #1369 已实现，#1338 已关闭 |
| [#1378](https://github.com/HKUDS/nanobot/issues/1378) | 通用工具编排器：并行执行与依赖注入 | 待评估 | 用户已成功 patch，有实现参考 |

### 路线图信号

结合今日 PR 活动，**下一版本可能包含**：
1. **Web Chat Channel** (PR #1341) - 自带 UI，降低使用门槛
2. **Kim i-Coding 模型支持** (PR #1367) - 扩展模型覆盖
3. **LLM 重试与回退机制** (PR #1366) - 提升稳定性
4. **DeepAgents 框架集成** (PR #1377) - 引入 LangGraph 后端
5. **Telegram 表情反应** (PR #1369) - 完善渠道功能

---

## 7. 用户反馈摘要

### 痛点与不满

1. **自定义技能安装困难** (#623)
   - 用户首次使用即遇阻，期待开箱即用的体验
   - "It's very exciting getting things to work!" 背后的无奈

2. **Token 消耗异常** (#1332)
   - "发个 hello，输入 token 要 5 千多"
   - "问怎么安装 skills，直接消耗 3 万多"
   - 成本焦虑影响使用意愿

3. **Windows 兼容性虽有优势但仍有坑** (#1265)
   - "nanobot 安装 skill 也偶尔出问题"
   - 建议强化 Windows 优势获取用户

### 满意点

1. **Windows 部署优于竞品** - 用户亲测 openclaw 需要 WSL，nanobot 更易用
2. **速度更快** - 响应速度优于 openclaw
3. **可调教** - "调教后基本上可以成功"

### 期待功能

- 每会话工作目录隔离 (#1302)
- GitHub Copilot 提供商支持 (#140)
- 更智能的上下文管理 (v0.1.4.post3 已回应)

---

## 8. 待处理积压

### 长期未响应的重要 Issues

| Issue # | 创建时间 | 标题 | 等待时长 |
|---------|----------|------|----------|
| [#140](https://github.com/HKUDS/nanobot/issues/140) | 2026-02-05 | GitHub Copilot providers 支持计划 | ~24 天 |
| [#110](https://github.com/HKUDS/nanobot/issues/110) | 2026-02-04 | 如何不输出 markdown | ~25 天 |
| [#126](https://github.com/HKUDS/nanobot/issues/126) | 2026-02-05 | 创建 GitHub Actions 编译 Docker 镜像 | ~24 天 |

### 建议关注

1. **功能请求类 Issue** (#140, #110) 缺乏官方回应，建议明确路线图态度
2. **长期 open 的基础设施 Issue** (#126) 涉及 CI/CD 自动化，值得评估合并

---

**日报生成时间**：2026-03-01  
**数据来源**：GitHub HKUDS/nanobot

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期**: 2026-03-01

---

## 1. 今日速览

PicoClaw 项目在过去的24小时内保持高度活跃状态。共处理 **17 条 Issues**（新开/活跃 9 条，关闭 8 条）和 **69 条 PRs**（待合并 51 条，已合并/关闭 18 条），整体开发节奏紧凑。社区围绕 Provider 集成、Channel 功能增强以及 Agent 系统重构展开大量讨论，未发布新版本。Bug 报告与功能请求并存，项目在功能完善与稳定性维护之间稳步推进。

---

## 2. 版本发布

本期无新版本发布。

---

## 3. 项目进展

以下为过去24小时内已合并/关闭的重要 PR，这些提交推动了项目功能演进与代码质量提升：

| PR # | 标题 | 状态 | 关键贡献 |
|------|------|------|----------|
| [#950](https://github.com/sipeed/picoclaw/pull/950) | feat(agent): session management | **CLOSED** | 引入跨通道命令注册表基础，实现 `pkg/commands` 共享命令域，包含 Definition、Registry、Dispatcher |
| [#902](https://github.com/sipeed/picoclaw/pull/902) | feat(feishu): enhance channel with rich text, media sending | **CLOSED** | 飞书通道增强，支持富文本渲染、媒体文件发送、消息编辑/占位符、反应及 @提及处理 |
| [#919](https://github.com/sipeed/picoclaw/pull/919) | fix: improve error handling in GitHub Copilot provider | **CLOSED** | 修复 `SendAndWait` 方法错误返回值被忽略的问题，改进错误消息描述 |
| [#911](https://github.com/sipeed/picoclaw/pull/911) | fix: do regex precompile instead on the fly | **CLOSED** | 将 HTTP 状态正则编译从每次调用移至包级别初始化，避免重复 `regexp.MustCompile` |
| [#861](https://github.com/sipeed/picoclaw/pull/861) | refactor(modernize): apply safe modernize fixes | **CLOSED** | 应用安全的代码现代化修复（循环/风格/stdlib 升级），无 API 或行为变更 |
| [#955](https://github.com/sipeed/picoclaw/pull/955) | docs: update wechat qrcode | **CLOSED** | 更新微信二维码文档 |

---

## 4. 社区热点

以下 Issues/PRs 评论数最多，反映出社区当前最关注的议题：

### 讨论热度最高的 Issues

1. **[#901](https://github.com/sipeed/picoclaw/issues/901) - [BUG] I can't add openrouter/free model in picoclaw**
   - **作者**: @shadmanshaikh | **评论**: 11
   - **摘要**: 用户在尝试使用 `picoclaw agent -m "hi"` 调用 OpenRouter 免费模型时遇到问题
   - **关联 PR**: [#954](https://github.com/sipeed/picoclaw/pull/954) 已修复，将 "free" 别名映射至 "openrouter/auto"

2. **[#4](https://github.com/sipeed/picoclaw/issues/4) - I'm not seeing the gateway on the local network.**
   - **作者**: @beginrescueend | **评论**: 11
   - **摘要**: 在 Ubuntu 24.04 (AMD Ryzen 7) 上运行 `./picoclaw-linux-amd64 gateway start` 后，无法在局域网发现网关

3. **[#295](https://github.com/sipeed/picoclaw/issues/295) - Feature: Intelligent Model Routing for Cost & Performance Optimization**
   - **作者**: @Zepan | **评论**: 9 | **👍**: 0
   - **摘要**: 提出实现**模型路由系统**，根据任务复杂度智能选择模型（GPT-4o/Claude 3.5 Sonnet vs 轻量模型），以优化响应速度与 token 支出

4. **[#621](https://github.com/sipeed/picoclaw/issues/621) - [Refactor] Channel System Refactoring**
   - **作者**: @alexhoshina | **评论**: 5 | **👍**: 4
   - **摘要**: Channel 系统重构进度已达 83%（10/12 阶段），关联 PR #662 (Draft)

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

| Issue # | 标题 | 严重程度 | 状态 | 关联 Fix PR |
|---------|------|----------|------|-------------|
| [#671](https://github.com/sipeed/picoclaw/issues/671) | `[BUG] gateway status` launches an extra gateway worker process | **高** | CLOSED | - |
| [#386](https://github.com/sipeed/picoclaw/issues/386) | exec tool blocks commands containing URLs due to path guard misidentifying URLs as file paths | **高** | CLOSED | - |
| [#794](https://github.com/sipeed/picoclaw/issues/794) | 400 Bad Request on Codex API call with gpt-5.3-codex in Headless Device Auth mode | **中** | OPEN | - |
| [#945](https://github.com/sipeed/picoclaw/issues/945) | voice package is not being used - `voice.GroqTranscriber` is not part of the process any more | **中** | OPEN | [#947](https://github.com/sipeed/picoclaw/pull/947) |
| [#928](https://github.com/sipeed/picoclaw/issues/928) | skills search returns HTTP 404 in v0.2.0 (ClawHub registry mismatch) | **低** | CLOSED | - |
| [#958](https://github.com/sipeed/picoclaw/issues/958) | Error: model "llama3.2" not found in model_list | **低** | OPEN | - |

---

## 6. 功能请求与路线图信号

社区提出的新功能需求，部分已有对应 PR：

| Issue # | 功能请求 | 状态 | 相关 PR |
|---------|----------|------|---------|
| [#295](https://github.com/sipeed/picoclaw/issues/295) | **Intelligent Model Routing** - 根据任务复杂度智能选择模型以优化成本与性能 | OPEN | - |
| [#880](https://github.com/sipeed/picoclaw/issues/880) | **Telegram API 自定义 base URL** - 适配伊朗等地区无法访问默认 Telegram 服务器的场景 | OPEN | - |
| [#906](https://github.com/sipeed/picoclaw/issues/906) | **可配置的工具执行超时** - 当前硬编码 60 秒 | OPEN | [#944](https://github.com/sipeed/picoclaw/pull/944) |
| [#923](https://github.com/sipeed/picoclaw/issues/923) | **构建时跳过特定功能** - 支持按需编译，减小二进制体积 | OPEN | [#953](https://github.com/sipeed/picoclaw/pull/953) |
| [#948](https://github.com/sipeed/picoclaw/issues/948) | **通用文件附件支持** - 支持跨平台分享 AI 生成的文件（.mp3、图片、代码导出） | OPEN | - |
| [#772](https://github.com/sipeed/picoclaw/issues/772) | **Agent 系统重构** - 拆分 `loop.go` (~1200 LOC) 的单一结构，解决路由、LLM迭代、工具执行、上下文管理耦合 | OPEN | - |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点与使用场景：

- **Provider 集成困难**: 多位用户反馈在添加 OpenRouter 免费模型、Ollama 本地模型时遇到配置问题（#901, #958），表明配置文档或错误提示需改进
- **网络环境限制**: 伊朗等地区用户无法直接访问 Telegram API，亟需自定义 base URL 支持（#880）
- **本地部署场景**: 用户在 Ubuntu 24.04 上部署 gateway 时遇到局域网发现问题（#4），暗示网络发现机制可能存在兼容性问题
- **功能缺失**: 用户生成 .mp3 语音、图像等文件后无法分享给用户（#948），当前 message tool 仅支持文本内容
- **构建体积**: 开发者希望在构建时跳过未使用的功能/厂商支持，以适配更小型的设备

---

## 8. 待处理积压

以下 Issue 长时间未得到响应或需要维护者关注：

| Issue # | 标题 | 创建时间 | 当前状态 | 提醒 |
|---------|------|----------|----------|------|
| [#4](https://github.com/sipeed/picoclaw/issues/4) | I'm not seeing the gateway on the local network. | 2026-02-09 | 已有 11 评论 | 最后更新 2026-02-28，需持续跟进 |
| [#266](https://github.com/sipeed/picoclaw/issues/266) | Feature Request: Integration of Baidu Browser and Baidu Search | 2026-02-16 | CLOSED (wontfix) | 已关闭，但用户可能仍有需求 |
| [#295](https://github.com/sipeed/picoclaw/issues/295) | Feature: Intelligent Model Routing | 2026-02-16 | OPEN | 路线图重要功能，建议评估优先级 |
| [#794](https://github.com/sipeed/picoclaw/issues/794) | 400 Bad Request on Codex API (Headless Auth) | 2026-02-26 | OPEN | 涉及第三方 API 集成，需调查 |

---

**报告生成时间**: 2026-03-01  
**数据来源**: GitHub PicoClaw Repository (github.com/sipeed/picoclaw)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**2026-03-01**

---

## 1. 今日速览

NanoClaw 项目今日保持高度活跃状态，共产生 41 条更新（11 条 Issues + 30 条 PRs）。Issues 层面 8 个新开/活跃，3 个关闭；PR 层面待合并 25 个，已合并/关闭 5 个。社区贡献热度显著，尤其在多渠道架构重构、WhatsApp 体验增强（打字指示器、阅读回执、消息拆分）方面形成多个并行推进的功能分支。**今日无版本发布**，但多个关键 Bug fix（如 OOM 崩溃、命令注入漏洞）已进入 PR 阶段，整体项目处于健康迭代状态。

---

## 2. 版本发布

本期无新版本发布。

---

## 3. 项目进展

| PR | 标题 | 状态 | 推进内容 |
|---|---|---|---|
| [#615](https://github.com/qwibitai/nanoclaw/pull/615) | fix: re-register launchd service on macOS and stop orphaned nanoclaw processes | **待合并** | 修复 macOS 上重复的 NanoClaw 编排进程问题 |
| [#612](https://github.com/qwibitai/nanoclaw/pull/612) | fix: always sync agent-runner source to existing groups | **待合并** | 确保每次容器启动时同步核心 agent-runner 源代码，使 MCP 工具更新能传播到所有群组 |
| [#605](https://github.com/qwibitai/nanoclaw/pull/605) | fix: command injection in stopContainer + OOM from ghost sockets | **待合并** | **安全修复**：修复 `stopContainer()` 中的命令注入漏洞；修复 WhatsApp 频道重连时幽灵套接字累积导致的 OOM |
| [#606](https://github.com/qwibitai/nanoclaw/pull/606) | fix: make CLAUDE_MODEL env var work end-to-end | **待合并** | 修复 `CLAUDE_MODEL` 环境变量在容器中不生效的问题 |
| [#607](防止 scheduler duplicate execution for long-running tasks) | fix: prevent scheduler duplicate execution for long-running tasks | **待合并** | 修复调度器在任务执行时间超过轮询间隔时的重复执行问题 |
| [#609](https://github.com/qwibitai/nanoclaw/pull/609) | fix: add CJK font support for Chromium screenshots | **待合并** | 为 Chromium 截图添加中日韩字体支持 |
| [#600](https://github.com/qwibitai/nanoclaw/pull/600) | **已关闭** | feat: personalise assistant for job hunting workflows + AI-Slop Reviewer | 个性化求职助手 + AI-Slop 简历审查功能（已关闭） |

**关键进展**：项目正在推进多渠道架构重构（#500）、Telegram 频道支持（#614）、以及多个 WhatsApp 体验增强功能，代码质量与安全意识显著提升。

---

## 4. 社区热点

### 热门 Issues 讨论

| Issue | 标题 | 状态 | 👍 | 💬 | 热度分析 |
|---|---|---|---|---|---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | [enhancement] Support runtime(s) other than Claude | **OPEN** | **33** | **15** | **最高热度**：用户担忧 Anthropic 订阅被批量关闭，强烈呼吁支持 OpenCode、Codex、Gemini 等替代运行时 |
| [#620](https://github.com/qwibitai/nanoclaw/issues/620) | feat: immediate read receipts on message receive | **CLOSED** | 0 | 1 | 已实现：收到消息时立即发送阅读回执 |
| [#621](https://github.com/qwibitai/nanoclaw/issues/621) | feat: typing indicators during agent processing | **OPEN** | 0 | 0 | 新功能请求：代理推理时显示"正在输入"状态 |

### 热门 PR 关注

| PR | 标题 | 热度分析 |
|---|---|---|
| [#500](https://github.com/qwibitai/nanoclaw/pull/500) | refactor: implement pluggable multi-channel architecture | 核心架构重构，将 NanoClaw 从硬编码 WhatsApp 转型为可插拔多渠道架构 |
| [#614](https://github.com/qwibitai/nanoclaw/pull/614) | feat: add Telegram channel support | 新增 Telegram 消息渠道支持，使用 Grammy 库 |
| [#327](https://github.com/qwibitai/nanoclaw/pull/327) | feat: support third-party API endpoints in container agents | 支持容器代理使用第三方 API 端点 |

**热点分析**：
- **运行时多样性**（#80）是社区最强烈的呼声，33 赞 15 评论反映出用户对平台风险的担忧
- **多渠道架构**（#500）是今年核心演进方向，Telegram 支持（#614）正是该架构的首个受益者

---

## 5. Bug 与稳定性

### 严重 Bug

| Issue | 标题 | 严重程度 | 状态 | Fix PR |
|---|---|---|---|---|
| [#595](https://github.com/qwibitai/nanoclaw/issues/595) | Bug: OOM crash after ~40h — ghost sockets accumulate on reconnect | **严重** | OPEN | [#605](https://github.com/qwibitai/nanoclaw/pull/605)（待合并） |
| [#613](https://github.com/qwibitai/nanoclaw/issues/613) | ANTHROPIC_MODEL=claude-sonnet-4-6 is ignored — CLI maps it to claude-sonnet-4-20250514 | **高** | OPEN | [#606](https://github.com/qwibitai/nanoclaw/pull/606)（待合并） |

### 中等 Bug

| Issue | 标题 | 严重程度 | 状态 | Fix PR |
|---|---|---|---|---|
| [#611](https://github.com/qwibitai/nanoclaw/issues/611) | Agent-runner source copy is never updated after initial creation | **中** | OPEN | [#612](https://github.com/qwibitai/nanoclaw/pull/612)（待合并） |
| [#616](https://github.com/qwibitai/nanoclaw/pull/616) | fix: group sync script fails on Node.js 24 | **中** | 待合并 | — |

**稳定性评估**：长期运行 OOM 问题（#595）已有 Fix PR #605，命令注入漏洞（#605）已修复，整体稳定性风险正在被系统性扫除。

---

## 6. 功能请求与路线图信号

### 新功能请求（今日新增）

| Issue | 功能 | 预估纳入版本 | 关联 PR |
|---|---|---|---|
| [#621](https://github.com/qwibitai/nanoclaw/issues/621) | 打字指示器（Typing Indicators） | 可能在下一个 minor 版本 | 无 |
| [#619](https://github.com/qwibitai/nanoclaw/issues/619) | 输出拆分（Output Splitting）— 长响应拆分为多条消息 | 功能请求 | 无 |
| [#618](https://github.com/qwibitai/nanoclaw/issues/618) | 引用/回复支持（Quote/Reply） | 功能请求 | 无 |
| [#617](https://github.com/qwibitai/nanoclaw/issues/617) | 消息引导（Message Steering）— 实时注入新消息 | 功能请求 | 无 |
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | 多运行时支持（OpenCode、Codex、Gemini） | 长期路线图 | 无 |

### 已合并/待合并功能 PR

- **#614**：Telegram 渠道支持 → 预计下版本纳入
- **#500**：可插拔多渠道架构重构 → 核心架构演进
- **#575**：容器代理可通过 IPC 请求上游更新
- **#547**：安息日模式（Shabbat Mode）

**路线图信号**：项目正在从单渠道（WhatsApp）向多渠道架构转型，WhatsApp 体验优化（打字、阅读回执、消息拆分）是近期重点。

---

## 7. 用户反馈摘要

### 痛点与需求

| 来源 | 反馈内容 | 提炼需求 |
|---|---|---|
| Issue #80（33 赞） | "Anthropic is already shutting down peoples' subs for using them with OpenClaw" | **平台风险规避**：用户担忧 Anthropic 账户被批量封禁，强烈要求支持替代运行时 |
| Issue #595 | "NanoClaw crashes with a JavaScript heap OOM error after running for ~40 hours" | **长期稳定性**：生产环境需要 7×24 小时稳定运行 |
| Issue #613 | "Setting ANTHROPIC_MODEL=claude-sonnet-4-6 has no effect" | **配置透明性**：用户期望环境变量配置能如预期生效 |
| Issue #621 | "Users see nothing happening for seconds/minutes" | **用户体验**：代理处理时需要视觉反馈（打字指示器） |
| Issue #619 | "Long responses appear as walls of text on mobile" | **移动端体验**：长消息需要拆分以适配移动端显示 |

### 积极反馈

- Issue #610：用户询问 PI 是否仍在使用，表示 "I think PI is great" — 对项目核心功能的认可

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 标题 | 创建时间 | 状态 | 提醒 |
|---|---|---|---|---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | Support runtime(s) other than Claude | 2026-02-04 | OPEN | **高优先级**：33 赞，15 评论，社区高度关注 |
| [#595](https://github.com/qwibitai/nanoclaw/issues/595) | OOM crash after ~40h | 2026-02-28 | OPEN | **已 Fix PR**：#605 待合并 |

**积压评估**：Issue #80 已开放近一个月，虽有 PR #327（第三方 API 端点支持）在推进，但完整的运行时多样化方案尚未形成，需维护者关注回应。

---

*报告生成时间：2026-03-01 | 数据来源：GitHub NanoClaw 仓库*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-03-01

## 1. 今日速览

过去24小时，IronClaw 项目保持高度活跃状态：共处理 **19 条 Issues 更新**（其中 2 条新开，17 条已关闭）以及 **33 条 PR 更新**（13 条待合并，20 条已合并/关闭）。项目在版本兼容性、安全加固、用户体验优化方面持续推进，今日未发布新版本。整体开发节奏稳健，大量 bugfix 已合并入主分支。

---

## 2. 版本发布

**无新版本发布**

今日暂无新版本发布。值得注意的是，PR #385 正在推进 v0.13.0 版本，计划从 0.12.0 升级至 0.13.0，该版本包含 API 破坏性变更。

---

## 3. 项目进展

今日共有 **20 个 PR 已合并/关闭**，以下为重要推进：

| PR | 状态 | 摘要 |
|---|---|---|
| **#428** | 已关闭 | 批量修复 6 个问题：Docker macOS 自动启动引导 (#417)、Clippy 复杂度阈值配置 (#338)、FallbackFailed 错误结构化 (#330)、扩展卸载后凭证残留 (#358)、cloudflared 冲突检测 (#419)、内存嵌入警告 (#344) |
| **#427** | 已关闭 | **PostgreSQL TLS 支持**：修复所有 PostgreSQL 连接硬编码 NoTls 的问题，现已支持 AWS RDS、Neon、Supabase 等需要 TLS 的托管服务 |
| **#432** | 已关闭 | **通道激活状态持久化**：修复 Web UI 激活的通道在重启后丢失的问题 (#392) |
| **#433** | 已关闭 | **入站消息密钥泄露扫描**：新增 SafetyLayer 的 `scan_inbound_for_secrets()`，防止 LLM 回显密钥触发循环报错 |
| **#430** | 已关闭 | **Tailscale Funnel 修复**：改用 `tailscale funnel --bg <port>` 后台模式，修复隧道建立失败问题 |
| **#429** | 已关闭 | **Discord/WhatsApp 通道构建脚本**：补全缺失的 build.sh，使这两个通道出现在设置向导中 |
| **#431** | 已关闭 | **密钥名称标准化**：修复 Slack 通道大小写不敏感匹配问题，web UI 存储 `SLACK_BOT_TOKEN` 但 capabilities.json 期望 `slack_bot_token` |
| **#426** | 已关闭 | **模型名称持久化到 .env**：修复 `llama3.2` 在重启后被截断为 `llama3` 的问题 |
| **#424** | 已关闭 | **cloudflared 二进制检查与 Token 验证**：设置向导现在会检查二进制是否存在并验证 Token 格式 |
| **#423** | 已关闭 | **PostgreSQL 版本与 pgvector 检查**：迁移前验证 PG 版本 >= 15 及 pgvector 可用性 |
| **#422** | 已关闭 | **zsh compdef 防护**：防止在 compinit 之前 source 补全文件时报错 |

**待合并的重要 PR**：
- **#411**：`MessageTool` 的 RwLock 修复（避免运行时 panic），关联 #442
- **#440**：CLI 命令日志功能
- **#442**：新增 26 个测试（多线程安全、数据库 CRUD、并发、错误处理）

---

## 4. 社区热点

### 讨论最活跃的 PRs

1. **#294** — [docs: add comprehensive documentation suite](https://github.com/nearai/ironclaw/pull/294)
   - 贡献者：@mudrii (new contributor)
   - 范围：docs
   - 为 v0.12.0 提供完整文档套件，同步 ironclaw-docs 内容

2. **#442** — [test: add 26 tests for multi-thread safety, db CRUD, concurrency, errors](https://github.com/nearai/ironclaw/pull/442)
   - 贡献者：@zmanian
   - 规模：XL，Risk: high
   - 针对 #411 修复的 `blocking_read` panic，新增 4 个层级的测试覆盖

3. **#441** — [Feature/atlas integration](https://github.com/nearai/ironclaw/pull/441)
   - 贡献者：@matthewbegg (new contributor)
   - 规模：XL，Risk: medium
   - 集成 Atlas 功能

4. **#349** — [feat(workspace): multi-scope workspace reads](https://github.com/nearai/ironclaw/pull/349)
   - 贡献者：@standardtoaster
   - 多租户路线图 Part 2，依赖 #348

5. **#348** — [feat(workspace): layered memory with sensitivity-based privacy redirect](https://github.com/nearai/ironclaw/pull/348)
   - 贡献者：@standardtoaster
   - 多租户路线图 Part 1

---

## 5. Bug 与稳定性

### 新报告的 Bug（按严重程度）

| Issue | 严重程度 | 状态 | 关联 Fix |
|---|---|---|---|
| **#443** Telegram 群组消息权限绕过 | **高** | OPEN | 无 — 当 `owner_id` 为 null 时，机器人响应所有群成员消息 |
| **#439** Registry 更新工作流失败 | **高** | OPEN | 无 — GitHub 分支保护规则阻止 WASM 通道/工具安装 |

### 已修复的 Bug（今日关闭）

| Issue | 描述 | 关联 PR |
|---|---|---|
| #394 | Tailscale funnel 不工作 | #430 |
| #413 | Slack 通道 "not_authed" 错误 | #431 |
| #419 | 未检测 cloudflared 冲突 | #424 |
| #392 | Telegram 通道重启后未激活 | #432 |
| #363 | PostgreSQL 硬编码 NoTls | #427 |
| #393 | Telegram 密钥过滤器导致死循环 | #433 |
| #406 | Discord/WhatsApp 通道缺少 build.sh | #429 |
| #400 | openai_compatible 截断模型名 | #426 |
| #418 | Cloudflare 隧道未检查二进制 | #424 |
| #420 | zsh compdef 无防护调用 | #422 |

---

## 6. 功能请求与路线图信号

### 新功能请求

1. **#443** — Telegram 群组消息权限控制
   - 用户要求当 `owner_id` 为 null 时，应遵守 `respond_to_all_group_messages` 配置，而非向所有人响应

### 路线图信号

从活跃 PR 可见项目下一阶段重点：

| 方向 | 信号 PR | 说明 |
|---|---|---|
| **多租户/工作区** | #348, #349 | 分层内存 + 敏感度隐私重定向 + 多作用域读取 |
| **测试覆盖率强化** | #442 | 26 个新测试覆盖多线程安全、并发、错误处理 |
| **外部集成** | #441 | Atlas 集成 |

---

## 7. 用户反馈摘要

### 真实痛点

1. **Tailscale 隧道配置**
   - 用户期望 IronClaw 自动建立 Tailscale funnel，但需要手动执行命令才能生效（#394）

2. **PostgreSQL TLS 兼容性**
   - 使用 AWS RDS、Neon、Supabase 等托管数据库的用户无法连接，因为代码硬编码禁用 TLS（#363）

3. **Docker 自动启动**
   - macOS 用户重启后发现 Docker 未随系统启动，导致 IronClaw 沙箱失效（#417）

4. **通道激活状态丢失**
   - Web UI 激活 Telegram 通道后，重启 ironclaw 需要重新手动激活（#392）

5. **Slack 凭证大小写问题**
   - UI 保存 `SLACK_BOT_TOKEN`，但内部期望 `slack_bot_token`，导致认证失败（#413）

6. **模型名称截断**
   - 使用 Ollama 时 `llama3.2` 被截断为 `llama3`，后端返回 404（#400）

### 满意之处

- 设置向导的错误提示改进（PostgreSQL 版本、pgvector 检查）
- Discord/WhatsApp 通道补全后将在向导中可见
- 批量修复效率高，一次合并解决多个用户痛点

---

## 8. 待处理积压

以下 Issue 已存在一段时间，需维护者关注：

| Issue | 存在时间 | 状态 | 优先级 |
|---|---|---|---|
| **#439** Registry 更新工作流失败 | 2026-03-01 | OPEN | 高 — 阻塞 WASM 工具安装 |
| **#443** Telegram 群组权限绕过 | 2026-03-01 | OPEN | 高 — 安全风险 |

---

*报告生成时间：2026-03-01 | 数据来源：GitHub nearai/ironclaw*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-01)

## 1. 今日速览

过去 24 小时内，TinyClaw 项目保持适度活跃，共产生 2 条 Issues 更新（新开 1 条、关闭 1 条）和 2 条 Pull Requests（均为待合并状态）。项目暂无新版本发布。社区讨论围绕跨平台兼容性争议和线程会话隔离功能展开，整体呈现功能迭代与用户反馈并行的健康态势。

---

## 2. 版本发布

**无新版本发布**

过去 24 小时内项目未发布任何 Release。

---

## 3. 项目进展

**待合并 PR 共 2 条**

| PR 编号 | 标题 | 状态 | 推进内容 |
|---------|------|------|----------|
| [#152](https://github.com/TinyAGI/tinyclaw/pull/152) | feat: per-thread session isolation for Claude and Codex agents | OPEN | 新增 `thread_sessions` 表实现 `(agent_id, thread_id) → session_id` 映射；Claude 端支持 `--session-id <uuid>` 创建独立会话、`-r <uuid>` 恢复指定会话，替代共享的 `-c` 标志；Codex 端同步支持 |
| [#150](https://github.com/TinyAGI/tinyclaw/pull/150) | feat(openviking): continuation after plugin hardening | OPEN | 将 OpenViking 延续栈 Rebase 到 TinyAGI/main（不含 PR1 加固提交），推进 OpenViking 插件集成 |

**评估**：2 个 PR 均为功能增强类，聚焦多会话隔离与插件生态扩展，暂无破坏性变更。若合并将显著提升项目对多平台、多会话场景的支持能力。

---

## 4. 社区热点

**讨论最活跃的 Issue**

| Issue 编号 | 标题 | 状态 | 活跃度 |
|------------|------|------|--------|
| [#151](https://github.com/TinyAGI/tinyclaw/issues/151) | this shit aint for Windows quit lying | CLOSED | 2 条评论 |

**分析**：该 Issue 标题措辞激烈，反映用户对 Windows 兼容性的强烈不满。用户详细描述了在 Windows 环境下遭遇的层层障碍：需手动安装 jq、修复损坏的 settings.json、强制 PowerShell 执行 Linux 脚本，最终却因脚本依赖不存在的 Linux 窗口管理器而失败。尽管 Issue 已标记为 Closed，但未显示明确的技术解决方案或官方回应，可能以关闭评论方式处理。此 Issue 暴露出项目文档与实际体验存在显著落差，需引起维护团队关注。

---

## 5. Bug 与稳定性

**已报告问题**

| Issue 编号 | 严重程度 | 问题描述 | 是否有 Fix PR |
|------------|----------|----------|---------------|
| [#151](https://github.com/TinyAGI/tinyclaw/issues/151) | **高** | Windows 兼容性严重不足：项目声称支持 Windows，但实际存在脚本依赖 Linux 特定工具链（jq、Linux 窗口管理器等）、跨平台引导机制缺失等问题 | 无 |

**评估**：跨平台兼容性是基础体验问题，直接影响潜在用户留存。建议优先排查并明确 Windows 支持范围，或补充安装引导文档。

---

## 6. 功能请求与路线图信号

**新增功能请求**

| Issue 编号 | 功能描述 | 关联 PR |
|------------|----------|---------|
| [#144](https://github.com/TinyAGI/tinyclaw/issues/144) | per-thread session isolation via --session-id / --resume：实现跨 Telegram topic、Discord thread 的会话隔离，避免上下文泄露 | [#152](https://github.com/TinyAGI/tinyclaw/pull/152) 已在实现中 |

**评估**：线程会话隔离是高频需求，与 PR #152 形成明确的功能-实现对应关系，大概率纳入下一版本功能集。PR #150 则推进 OpenViking 插件生态，反映项目在多后端集成方向的持续投入。

---

## 7. 用户反馈摘要

**核心痛点**

1. **跨平台兼容性缺失**：用户明确表示项目文档存在误导性声明（"quit lying"），实际 Windows 部署体验极差，需手动解决大量依赖问题
2. **多会话管理混乱**：当前所有渠道的消息共享单一 Claude 会话，导致不同平台（Discord thread、Telegram topic）的上下文相互污染，用户无法建立隔离的对话线程

**用户诉求**

- 明确并兑现跨平台支持承诺
- 提供开箱即用的 Windows 安装流程
- 支持按线程/话题的独立会话管理

---

## 8. 待处理积压

**需关注的长尾 Issue**

| Issue 编号 | 状态 | 持续时间 | 风险提示 |
|------------|------|----------|----------|
| [#144](https://github.com/TinyAGI/tinyclaw/issues/144) | OPEN | 2 天 | 功能请求待实现，已关联 PR #152，建议优先处理 |

**建议**：考虑到 PR #152 已在实现中，建议维护者尽快审查合并，或在 Issue #144 中更新进度预期，避免重复跟踪。

---

*本日报基于 2026-03-01 00:00 - 24:00 UTC 时间窗口内的 GitHub 公开数据生成*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*