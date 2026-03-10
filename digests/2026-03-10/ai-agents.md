# OpenClaw 生态日报 2026-03-10

> Issues: 500 | PRs: 500 | 覆盖项目: 10 个 | 生成时间: 2026-03-10 02:21 UTC

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

# OpenClaw 项目动态日报 (2026-03-10)

## 1. 今日速览

OpenClaw 项目今日保持高度活跃状态，24小时内共处理 **500 条 Issues**（新开/活跃 433 条，关闭 67 条）和 **500 条 PRs**（待合并 384 条，已合并/关闭 116 条）。项目发布了 v2026.3.8 正式版及 v2026.3.8-beta.1，引入了本地状态归档的备份/验证功能。社区讨论热度较高，尤其是关于工具调用回归、配置验证失败和飞书集成等问题。整体项目健康度良好，提交活跃度处于高位，但存在若干需要关注的回归问题。

---

## 2. 版本发布

### v2026.3.8 正式版
**发布内容：**
- **CLI/backup**: 新增 `openclaw backup create` 和 `openclaw backup verify` 命令，支持本地状态归档
  - 支持 `--only-config` 和 `--no-include-workspace` 参数
  - 提供 manifest/payload 验证
  - 在破坏性操作中提供备份指导
- **macOS/onboarding**: 新增远程门禁功能
- Mac 资源复用 v2026.3.8-beta.1 的 beta artifact

**变更详情：** [GitHub Release](https://github.com/openclaw/openclaw/releases/tag/v2026.3.8)

### v2026.3.8-beta.1
**发布内容：**
- 同 v2026.3.8 的 CLI/backup 功能
- PR #40163 感谢 @shichangs 的贡献

**变更详情：** [GitHub Release](https://github.com/openclaw/openclaw/releases/tag/v2026.3.8-beta.1)

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR # | 标题 | 状态 | 说明 |
|------|------|------|------|
| **#24761** | fix(auth): classify OAuth missing-scope errors as auth | **CLOSED** | 修复 OAuth 缺失 scope 错误分类，将 `Missing scopes:` 和 `insufficient permission(s)` 响应归类为认证失败 |
| **#40893** | Fix Feishu Chinese filename displayed as URL-encoded | **OPEN** | 修复飞书中文字符文件名上传时显示为 URL 编码的问题 (#40770) |
| **#40552** | fix: kimi-coding tool_use regression since 909f26a26 | **CLOSED** | 修复 kimi-coding/k2p5 工具调用回归问题 |
| **#41599** | fix(secrets): resolve web tool SecretRefs atomically at runtime | **OPEN** | 修复 web 工具凭据的 SecretRef 运行时解析不一致问题 |
| **#39991** | feat(sessions): directory-per-session store to eliminate lock contention | **OPEN** | XL 级功能：实现每会话目录存储，消除锁争用 |
| **#41597** | feat(gateway): queue inbound messages during drain and recover | **OPEN** | XL 级功能：网关排出期间队列化入站消息并恢复中断对话 |

**今日亮点：**
- 备份/验证功能的正式发布提升了用户数据安全保障
- 会话存储重构（#39991）将解决长期困扰的跨会话锁竞争问题
- 网关消息恢复机制（#41597）将消除重启时的静默消息丢失

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue # | 标题 | 评论数 | 状态 | 核心诉求 |
|---------|------|--------|------|----------|
| **#3460** | Internationalization (i18n) & Localization Support | **95** | OPEN | 社区强烈呼吁多语言支持，但团队暂无带宽 |
| **#32828** | False 'API rate limit reached' on all models | **45** | OPEN | 误报 API 限速，实际 API 完全正常，影响所有配置模型 |
| **#39062** | OpenClaw lost filesystem tools (exec/read/write) | **16** | OPEN | 2026.3.2 版本后文件系统工具失效 |
| **#39907** | 2026.3.7 regression: kimi-coding emits literal exec text | **13** | CLOSED | kimi-coding/k2p5 工具调用退化为纯文本 |
| **#6156** | macOS Gateway never becomes ready | **12** | OPEN | macOS 网关就绪问题，安装向导卡在重试 |
| **#2317** | Add SearXNG as fallback provider | **12** | OPEN | 请求添加 SearXNG 作为 Brave Search 的备用搜索提供商 |

**热点分析：**
- **i18n 需求迫切**：Issue #3460 收到 95 条评论，表明国际化是社区长期关注的功能需求
- **API 误报问题突出**：Issue #32828 引发广泛讨论，涉及多模型配置用户的实际使用体验
- **回归问题频繁**：多个 2026.3.x 版本的回归问题（工具失效、配置验证失败）成为社区焦点

---

## 5. Bug 与稳定性

### 严重问题（Critical）

| Issue # | 问题描述 | 状态 | 严重程度 | 关联 PR |
|---------|----------|------|----------|---------|
| **#40977** | Can't use control UI, disconnected (4008): connect failed (v2026.3.8) | OPEN | **Regression** | - |
| **#40806** | Agent tool calls isolated, don't affect real filesystem | OPEN | **Regression** | - |
| **#41405** | Cron jobs silently broken in 2026.3.8 - no execution, no errors | OPEN | **Regression** | - |

### 高优先级问题

| Issue # | 问题描述 | 状态 | 严重程度 | 关联 PR |
|---------|----------|------|----------|---------|
| **#32828** | False 'API rate limit reached' on all models | OPEN | High | - |
| **#39062** | Lost filesystem tools (exec/read/write) | OPEN | High | - |
| **#40911** | API key config failed with "Unrecognized key: requiresOpenAiAnthropicToolPayload" | OPEN | Regression | - |
| **#36182** | Perplexity Search API error (401) with OpenRouter | OPEN | Regression | - |
| **#40818** | config.get fails with RangeError: Invalid string length | OPEN | Regression | - |

### 已修复/正在修复的问题

| Issue # | 问题描述 | 状态 | 修复进度 |
|---------|----------|------|----------|
| **#39907** | kimi-coding/k2p5 emits literal exec text | CLOSED | ✅ 已修复 |
| **#40552** | kimi-coding tool_use regression | CLOSED | ✅ 已修复 |
| **#39733** | Feishu onboard error: Cannot find module '@larksuiteoapi/node-sdk' | CLOSED | ✅ 已修复 |

**稳定性评估：**
- 2026.3.8 版本存在 **3 个关键回归问题**，建议用户谨慎升级
- 文件系统工具失效和 Cron 任务静默失败可能导致用户数据丢失风险
- 控制 UI 连接问题影响用户体验

---

## 6. 功能请求与路线图信号

### 新功能请求（按热度排序）

| Issue # | 功能描述 | 热度 | 预计纳入 |
|---------|----------|------|----------|
| **#2317** | Add SearXNG as fallback provider | 👍15 | **可能性高** - 有 PR #16565 (A2A) 相关功能 |
| **#8865** | TUI Light Theme / Color Customization Support | 👍4 | 中期规划 |
| **#6823** | Execution Guardrails for Tool Safety | 👍4 | **可能性高** - 安全相关 |
| **#7597** | Tool execution hook events (tool:before, tool:after) | 👍5 | 中期规划 |
| **#19569** | Workspace git-backed history & rollback | 👍5 | 长期规划 |

### 路线图信号

| PR # | 功能 | 状态 | 意义 |
|------|------|------|------|
| **#41633** | Openclaw Agent Apps integration | OPEN | 扩展 Agent Apps 运行时能力 |
| **#41603** | VoiceWake: Route wake words to different agents | OPEN | 多 Agent 路由支持 |
| **#41631** | ModelScope model provider support | OPEN | 新模型提供商支持 |
| **#16565** | A2A: agent_call and debate_call tools | OPEN | Agent 间通信基础设施 |

---

## 7. 用户反馈摘要

### 用户痛点

1. **配置验证失败频发**
   - Issue #40911: "Unrecognized key: requiresOpenAiAnthropicToolPayload"
   - Issue #40617: 阿里云百炼 API Key 配置失败
   - 用户反映按照文档配置但无法通过验证

2. **工具调用回归**
   - Issue #40069: 工具执行静默失败，声称执行但未实际调用
   - Issue #40157: kimi-coding 子代理工具调用返回纯文本
   - 用户对工具可靠性失去信心

3. **平台集成问题**
   - Issue #6156: macOS 网关始终无法就绪
   - Issue #22608: 飞书发送图片无法预览
   - Issue #33370: Google Chat DM 回复变成线程回复

### 用户满意度

- ✅ **备份功能受好评**：新发布的 `openclaw backup` 命令解决用户长期需求
- ⚠️ **版本稳定性存疑**：多个回归问题影响生产环境使用信心
- 💡 **功能需求明确**：i18n、SearXNG 备用、工具钩子等需求清晰

---

## 8. 待处理积压

### 长期未解决的重要 Issues

| Issue # | 问题 | 创建时间 | 状态 | 优先级 |
|---------|------|----------|------|--------|
| **#3460** | Internationalization (i18n) | 2026-01-28 | OPEN | 长期需求 |
| **#6156** | macOS Gateway never becomes ready | 2026-02-01 | OPEN | High |
| **#2317** | SearXNG fallback provider | 2026-01-26 | OPEN | Medium |
| **#11890** | WebChat UI freezes on large sessions | 2026-02-08 | OPEN | Medium |

### 需要维护者关注的 PRs

| PR # | 功能 | 等待时间 | 建议 |
|------|------|----------|------|
| **#16565** | A2A agent_call/debate_call tools | ~24天 | 尽快审查合并 |
| **#39991** | directory-per-session store | ~2天 | 重点审查，性能优化关键 |
| **#41597** | gateway message queue | ~1天 | 紧急审查，消除消息丢失 |

---

**日报生成时间**：2026-03-10  
**数据来源**：GitHub OpenClaw Repository  
**分析师**：AI 开源项目分析助手

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**报告日期：2026-03-10**

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**多极分化、快速迭代**的格局。以 OpenClaw 为核心参照，生态内已形成 10+ 个活跃项目，覆盖 CLI 工具、渠道集成、Provider 扩展、多 Agent 协作等核心能力。今日汇总数据显示，生态整体处于高度活跃状态，**日均 Issues 更新超 700 条、PR 更新超 500 条**，但版本发布节奏差异显著——仅 3 个项目发布新版本，暗示多数项目仍处于功能开发阶段。值得注意的是，安全相关修复（密钥泄露、凭据管理）和多渠道扩展（飞书、企业微信、Telegram）成为跨项目共识，反映行业从“单点工具”向“平台化 Agent”演进的趋势。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新开/活跃) | PRs (待合并/已合并) | Release | 健康度评估 |
|------|-------------------|---------------------|---------|------------|
| **OpenClaw** | 500 (433/67) | 500 (384/116) | v2026.3.8 正式版 + beta | 🟢 良好（回归问题需关注） |
| **Zeroclaw** | 25 (22/3) | 50 (45/5) | 无 | 🟢 活跃 |
| **EasyClaw** | 3 (1/2) | 0 (0/0) | v1.6.3 | 🟡 低活跃 |
| **LobsterAI** | 15 (15/0) | 26 (1/25) | 无 | 🟢 高度活跃 |
| **ZeptoClaw** | 2 (2/0) | 3 (3/0) | 无 | 🟡 功能开发阶段 |
| **NanoBot** | 19 (16/3) | 67 (54/13) | 无 | 🟢 高度活跃 |
| **PicoClaw** | 19 (19/0) | 80 (40/40) | v0.2.1 + Nightly | 🟢 高度活跃 |
| **NanoClaw** | 27 (23/4) | 50 (47/3) | 无 | 🟢 高度活跃 |
| **IronClaw** | 35 (23/12) | 50 (37/13) | 无 | 🟢 高度活跃 |
| **TinyClaw** | 2 (2/0) | 26 (7/19) | 无 | 🟢 高度活跃 |

---

## 3. OpenClaw 在生态中的定位

### 优势维度

| 维度 | OpenClaw 表现 | 生态对比 |
|------|--------------|----------|
| **社区规模** | 500 Issues/PRs 日活 | 最高，超出次高项目（LobsterAI）约 20 倍 |
| **功能完整度** | CLI/backup、飞书集成、OAuth 修复、子会话存储 | 最全，涵盖渠道、Provider、Agent 核心能力 |
| **版本发布节奏** | 月度正式版 + Beta | 最规范，有明确版本管理 |
| **回归问题响应** | 3 个 Critical 回归（v2026.3.8） | 需改进，部分项目无回归问题 |

### 技术路线差异

- **OpenClaw**：定位为**核心参照**，侧重企业级功能（备份、安全、网关消息队列），技术栈偏向 Rust + 全面配置化
- **Zeroclaw**：聚焦**安全运营**，关注 allowed_roots、网络隔离（PR #460）
- **LobsterAI**：侧重**企业集成**，MCP、钉钉/企业微信、OpenAI 兼容代理安全修复
- **NanoBot / PicoClaw**：侧重**渠道扩展**，Telegram、Slack、WeCom、Mattermost
- **TinyClaw**：侧重**架构现代化**，monorepo 重构、SQLite 队列、语音通道

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **多渠道集成** | NanoBot, PicoClaw, IronClaw, LobsterAI | 飞书、企业微信、Telegram、Slack、Mattermost、IRC、Signal |
| **Provider 扩展** | OpenClaw, NanoBot, LobsterAI, IronClaw | 多模型聚合平台（OpenRouter）、OpenAI Codex、MCP 工具、Minimax |
| **安全/凭据管理** | Zeroclaw, NanoClaw, OpenClaw | 密钥泄露修复、凭据代理、网络隔离、OAuth Token 刷新 |
| **Subagent/多 Agent** | OpenClaw, NanoBot, TinyClaw, IronClaw | 子代理工具继承、Agent 间通信、工作流编排 |
| **MCP 支持** | LobsterAI, NanoBot, PicoClaw | MCP 工具懒加载、远程 HTTP MCP |
| **国际化/替代运行时** | NanoClaw | OpenCode、Codex、Gemini 替代 Anthropic |

---

## 5. 差异化定位分析

### 功能侧重

| 项目 | 核心功能 | 目标用户 |
|------|----------|----------|
| **OpenClaw** | 企业级备份/验证、网关消息恢复、OAuth 统一认证 | 企业用户、开发者 |
| **Zeroclaw** | 安全运营工具、网络隔离、GLIBC 兼容性 | 安全敏感型用户 |
| **EasyClaw** | macOS  Gatekeeper 签名修复、图片上传 | C 端用户 |
| **LobsterAI** | MCP 支持、企业微信、OpenAI 兼容代理安全 | 企业 IM 用户 |
| **ZeptoClaw** | Claude CLI 凭据自动导入、WhatsApp Web 原生 | 开发者 |
| **NanoBot** | Web 搜索可插拔、Langfuse 可观测性、多渠道 | 开发者、运营人员 |
| **PicoClaw** | Mattermost、IRC、Signal、Telegram Forum | 开发者、多平台用户 |
| **NanoClaw** | 分组级凭据管理、Windows 支持、Podman | 多租户用户 |
| **IronClaw** | LanceDB 向量存储、Codex、Routine 工作流 | 企业级开发者 |
| **TinyClaw** | monorepo 重构、SQLite 队列、语音通道、多 Agent | 开发者、团队协作 |

### 架构差异

- **Monolith → Modular**：TinyClaw (#186)、PicoClaw 正在进行模块化重构
- **Redis → SQLite**：TinyClaw 用 SQLite 队列替代 BullMQ/Redis，降低运维复杂度
- **Keychain 集成**：ZeptoClaw 实现 macOS Keychain 自动导入

---

## 6. 社区热度与成熟度

### 活跃度分层

| 层级 | 项目 | 特征 |
|------|------|------|
| **第一梯队（成熟期）** | OpenClaw | 高 Issue/PR 量 + 规范版本发布 + 回归问题管理 |
| **第二梯队（快速迭代）** | NanoBot, PicoClaw, NanoClaw, IronClaw, TinyClaw, LobsterAI | 高 PR 合并率，功能快速推进，暂无版本发布压力 |
| **第三梯队（功能探索）** | ZeptoClaw, Zeroclaw | Issue/PR 量较低，聚焦特定功能方向 |
| **第四梯队（维护期）** | EasyClaw | 低活跃，低 Issue/PR，更新周期长 |

### 质量巩固 vs 快速迭代

- **质量巩固阶段**：OpenClaw（需解决 3 个 Critical 回归）、Zeroclaw（GLIBC 兼容性）
- **快速迭代阶段**：TinyClaw（monorepo 重构）、PicoClaw（Mattermost/IRC）、LobsterAI（MCP/企业微信）

---

## 7. 值得关注的趋势信号

### 行业趋势

1. **平台化转型**：从单点工具（CLI）向多渠道、多模型、多 Agent 平台演进，OpenClaw v2026.3.8 的 backup/verify 功能、PicoClaw 的 Mattermost 支持均体现此趋势

2. **安全常态化**：密钥泄露（NanoClaw #880）、凭据代理（NanoClaw #878）、网络隔离（Zeroclaw #460）成为必选项，非功能需求

3. **Provider 生态爆发**：多模型聚合平台（RouterWay）、OpenAI Codex、自托管模型（Ollama、SGLang）需求涌现，10+ 项目中有 6 个涉及 Provider 扩展

4. **运维简化**：SQLite 替代 Redis（TinyClaw）、Keychain 自动导入（ZeptoClaw）、Docker 镜像私有化（PicoClaw #302）反映开发者对低门槛运维的诉求

5. **企业集成深化**：飞书/企业微信（4+ 项目）、MCP（3+ 项目）、Langfuse 可观测性（NanoBot）标识企业级场景成为主战场

### 对 AI 智能体开发者的建议

| 方向 | 建议 | 优先级 |
|------|------|--------|
| **多渠道兼容** | 预留渠道抽象层，优先支持飞书/企业微信/Telegram | 高 |
| **Provider 可插拔** | 参考 NanoBot #398 设计，避免硬编码 | 高 |
| **安全基线** | 实施凭据管理、网络隔离、输出过滤 | 高 |
| **Subagent 能力** | 工具继承、中断机制是核心竞争力 | 中 |
| **运维降本** | SQLite 队列、本地化部署、Keychain 集成 | 中 |

---

**报告生成时间**：2026-03-10  
**分析师**：AI 开源项目分析助手

---

## 同赛道项目详细报告

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报

**2026-03-10**

---

## 1. 今日速览

今日 Zeroclaw 项目保持**高度活跃**状态。24小时内产生 **25 条 Issue 更新**（新开/活跃 22，关闭 3）和 **50 条 PR 更新**（待合并 45，已合并/关闭 5）。社区贡献热度不减，功能增强与 Bug 修复并行推进。值得注意的是，今日有多项安全相关修复提交（allowed_roots、security operations tool），同时新增 Wecom 渠道支持等功能请求。未发布新版本。

---

## 2. 版本发布

**本期无新版本发布**（Release 数为 0）。

---

## 3. 项目进展

过去 24 小时共有 **5 个 PR 已合并/关闭**，推进了多项关键修复与功能：

| PR | 状态 | 描述 |
|---|---|---|
| [#3089](https://github.com/zeroclaw-labs/zeroclaw/pull/3089) | ✅ CLOSED | **feat(openclaw_node)**: 新增长久化 `node-run` CLI 命令，支持自动重连、协议解析修复、设备 ID 派生、TLS 开发证书处理 |
| [#2396](https://github.com/zeroclaw-labs/zeroclaw/pull/2396) | ✅ CLOSED | **fix(provider)**: 修复 `openai-codex` 供应商中运行时多模态配置被默认配置覆盖的问题 |
| [#2399](https://github.com/zeroclaw-labs/zeroclaw/pull/2399) | ✅ CLOSED | **fix(telegram)**: 修复.reply 上下文中斜杠命令路由被引用前缀干扰的问题 |
| [#3077](https://github.com/zeroclaw-labs/zeroclaw/pull/3077) | 🔄 OPEN | **feat(ci)**: 新增 `aarch64-unknown-linux-musl` 目标支持（适用于 OpenWrt 路由器等设备） |
| [#3085](https://github.com/zeroclaw-labs/zeroclaw/pull/3085) | 🔄 OPEN | **fix(security)**: 使 `allowed_roots` 对绝对路径/ `~/...` 路径在 `workspace_only=true` 时一致生效 |

---

## 4. 社区热点

以下 Issue/PR 今日讨论热度最高（按评论数排序）：

| Issue/PR | 热度 | 主题 |
|---|---|---|
| [#3012](https://github.com/zeroclaw-labs/zeroclaw/issues/3012) | 8 条评论 | **channel-lark 功能命名混乱、未启用默认支持**：Feishu/Lark 渠道存在但名称为 `channel-lark`（应为 `channel-feishu`），且未默认启用，社区呼吁明确集成策略 |
| [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) | 7 条评论 | **GLIBC_2.39 版本缺失**：运行时崩溃，报错 "`GLIBC_2.39' not found"，S0 级别数据丢失/安全风险 |
| [#2929](https://github.com/zeroclaw-labs/zeroclaw/issues/2929) | 5 条评论 | **分支策略不清晰**：`master` vs `main` 混用导致贡献者困惑 |

**分析**：Issue #3012 反映出社区对飞书集成的强烈需求（飞书是中东/中国市场重要的企业协作工具），而 #3070 是典型的环境兼容性问题，可能影响 Linux 发行版用户。

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

| Issue | 严重度 | 状态 | 描述 |
|---|---|---|---|
| [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) | **S0** | 🔴 OPEN | GLIBC_2.39 版本缺失导致运行时崩溃 |
| [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) | **S1** | 🔴 OPEN | `channel_ack_config` Schema 错误导致 Agent 聊天失败 |
| [#2905](https://github.com/zeroclaw-labs/zeroclaw/issues/2905) | **S1** | 🔴 OPEN | matrix-sdk 依赖编译时查询溢出，阻塞构建 |
| [#1406](https://github.com/zeroclaw-labs/zeroclaw/issues/1406) | **S1** | 🟢 CLOSED | 安全策略通配符配置无效（3月9日已关闭） |
| [#3024](https://github.com/zeroclaw-labs/zeroclaw/issues/3024) | **S1** | 🔴 OPEN | 中文字符切片 panic：`byte index 4 is not a char boundary` |
| [#3079](https://github.com/zeroclaw-labs/zeroclaw/issues/3079) | **S1** | 🔴 OPEN | Ollama+Qwen 工具调用回归：thinking-only 输出、格式错误的 `<tool_call>`、动作丢失 |
| [#2964](https://github.com/zeroclaw-labs/zeroclaw/issues/2964) | **S1** | 🟢 CLOSED | Slack 渠道发现与 thread 回复问题（3月9日已关闭） |
| [#3088](https://github.com/zeroclaw-labs/zeroclaw/issues/3088) | **S2** | 🔴 OPEN | Token 成本追踪对渠道无效，始终显示 $0.00 |
| [#3084]( Slack 适配器未订阅 thread 消息事件，导致内联回复缺失） | **S2** | 🔴 OPEN | （注：链接缺失，需验证） |

---

## 6. 功能请求与路线图信号

今日新增功能请求（按赞数/讨论度）：

| Issue | 类型 | 描述 | 潜在纳入 |
|---|---|---|---|
| [#2916](https://github.com/zeroclaw-labs/zeroclaw/issues/2916) | ✨ Feature | Matrix 渠道密码登录 + E2EE 恢复密钥 | 🔸 可能 |
| [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) | ✨ Feature | Wecom (微信企业版) WebSocket + Webhook 双模式支持 | 🔸 可能 |
| [#3043](https://github.com/zeroclaw-labs/zeroclaw/issues/3043) | ✨ Feature | 树莓派 Model B (ARMv7) 二进制支持 | 🔸 可能 |
| [#2561](https://github.com/zeroclaw-labs/zeroclaw/issues/2561) | ✨ Feature | Telegram `StreamMode::On` 原生流式响应 | ✅ 已关闭 |

**判断**：Wecom 渠道支持（#3090）与 Matrix 密码登录（#2916）有明确市场需求，特别是 #3090 提到了 openclaw 相关扩展的参考实现，纳入可能性较高。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的用户痛点与场景：

| 场景 | 痛点 | 来源 |
|---|---|---|
| **飞书集成** | 功能存在但未默认启用、命名混乱（channel-lark vs channel-feishu） | #3012 |
| **Linux 兼容性** | 主流发行版 glibc 版本低于 2.39，导致二进制无法运行 | #3070 |
| **Slack 线程交互** | Bot 不支持 thread 内联回复，只能在顶层回复 | #3084 |
| **Token 成本追踪** | 通过渠道使用时成本始终为 $0，无法计量 | #3088 |
| **Web 搜索密钥** | Brave API 密钥配置后仍报未配置，无法热重载 | #3078 |
| **Docker 初始化** | macOS Docker 环境下 bootstrap.sh 报 Unbound variable | #2930 |

**满意点**：新合并的 #3089（持久化节点运行器）、#2399（Telegram 斜杠命令修复）解决了长期痛点。

---

## 8. 待处理积压

以下 Issue 长期未响应或停滞，建议维护者关注：

| Issue | 积压时长 | 状态 | 描述 |
|---|---|---|---|
| [#2929](https://github.com/zeroclaw-labs/zeroclaw/issues/2929) | ~4 天 | 🔴 OPEN | 分支策略 master/main 混乱，社区多次反馈仍未明确 |
| [#1406](https://github.com/zeroclaw-labs/zeroclaw/issues/1406) | ~16 天 | 🟢 CLOSED | 已于 3月9日关闭 |
| [#2905](https://github.com/zeroclaw-labs/zeroclaw/issues/2905) | ~4 天 | 🔴 OPEN | matrix-sdk 编译溢出，阻塞构建，暂无 fix PR |
| [#2930](https://github.com/zeroclaw-labs/zeroclaw/issues/2930) | ~4 天 | 🔴 OPEN | Docker macOS 初始化失败，影响新用户 onboarding |

---

*本报告基于 2026-03-10 24 小时内的 GitHub 公开数据生成。*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-10)

## 1. 今日速览

过去24小时内，EasyClaw 项目保持低活跃度状态。共产生 **3 条 Issue 更新**（1 个新开，2 个已关闭），**0 条 PR 更新**。项目发布了 **v1.6.3 新版本**，主要针对 macOS Gatekeeper 签名问题提供解决方案。社区围绕图片上传功能出现 1 个待处理的技术问题，整体项目健康度良好，但代码贡献活动较为平淡。

---

## 2. 版本发布

### ✅ v1.6.3 发布

**发布说明：**

本次更新主要提供 **macOS Gatekeeper 问题**的官方解决方案，而非功能迭代。

**问题背景：**
macOS 用户在运行 EasyClaw 时可能遇到 `"'EasyClaw' is damaged and can't be opened"` 提示，这是系统安全机制拦截未签名应用所致，实际文件并未损坏。

**解决步骤：**
1. 打开 **Terminal**（终端）
2. 执行相应命令移除隔离属性（详见 Release 说明）

**影响范围：** macOS 用户  
**破坏性变更：** 无  
**迁移注意事项：** 无

🔗 [Release v1.6.3](https://github.com/gaoyangz77/easyclaw/releases)

---

## 3. 项目进展

过去24小时内 **无 PR 合并或关闭**，项目代码层面无显著推进。 Issue #12 和 #14 已关闭，但均为社区交流类议题，非代码层面的功能或修复。

| 类型 | 数量 |
|------|------|
| 新开 PR | 0 |
| 待合并 PR | 0 |
| 已合并/关闭 PR | 0 |

---

## 4. 社区热点

### 🔥 Issue #13: 在对话chat选择图片，但是模型并没有接受到图片

- **作者：** @westisc
- **状态：** OPEN（待处理）
- **评论数：** 2
- **链接：** https://github.com/gaoyangz77/easyclaw/issues/13

**问题描述：**
用户反映在对话聊天中选择图片后，模型并未接收到图片内容。用户在 Codex 中测试时图片可以正常读取，但在 EasyClaw 应用中出现问题。附带了详细的截图证据。

**诉求分析：**
这是一个**功能性 Bug**，涉及图片上传至模型的链路问题。用户已提供复现步骤和对比测试结果（Codex 可正常工作），具备较高的可排查性。

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 状态 | 说明 |
|-------|----------|------|------|
| #13 | **高** | OPEN | 图片选择后模型未接收到内容，影响核心功能使用 |

**说明：** Issue #13 为当前唯一待处理的有效 Bug，用户已提供详细复现步骤和对比数据（Codex 正常 vs EasyClaw 异常），建议优先排查图片上传至模型的调用链路。

---

## 6. 功能请求与路线图信号

过去24小时 **无明确的功能请求 Issue**。当前唯一的待处理 Issue #13 属于 Bug 修复范畴，不涉及新功能建议。

**基于现有数据推测：**
- 短期内项目可能聚焦于 Bug 修复（如图 #13 问题）
- v1.6.3 刚刚发布，下一版本节奏待观察

---

## 7. 用户反馈摘要

### 来自 Issue #12（已关闭）

> "哥们，有技术交流群吗？弄一个交流群，这样以后可以多交流，感觉这个easyclaw项目架构非常符合我预期的架构"

**反馈要点：**
- 用户对项目**架构高度认可**
- 存在**社群交流需求**，希望建立技术社区

### 来自 Issue #14（已关闭）

> "这个跟复盛那个easyclaw那个官网有关系吗"

**反馈要点：**
- 用户对项目与"复盛 easyclaw 官网"的关系存在疑问
- 可能涉及品牌/分支版本混淆问题

### 来自 Issue #13（待处理）

> "在对话chat选择图片，但是模型并没有接受到图片"

**反馈要点：**
- **核心功能缺陷**：图片上传功能在生产环境不可用
- 影响用户实际使用体验

---

## 8. 待处理积压

| Issue | 积压时长 | 优先级 | 备注 |
|-------|----------|--------|------|
| #13 | 1 天 | **高** | 图片上传 Bug，需尽快修复 |

**提醒维护者关注：** Issue #13 为当前唯一的有效技术 Bug，建议优先处理。已关闭的 #12 和 #14 虽为非技术问题，但 Issue #12 反映了用户的社群交流诉求，可酌情考虑是否建立官方交流渠道。

---

*报告生成时间：2026-03-10 | 数据来源：GitHub (gaoyangz77/easyclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期：2026-03-10**

---

## 1. 今日速览

LobsterAI 项目在过去 24 小时内保持较高的开发活跃度。Issue 板块新增 15 条（均为新开），PR 板块共 26 条更新，其中 25 条已合并/关闭，1 条待合并。本日无新版本发布。社区反馈集中于 **Bash 命令执行性能问题** 和 **字符串处理 Bug**，多个功能特性 PR 已合并（包括 MCP 支持、企业微信支持、OpenAI 兼容代理安全修复等），项目整体向前推进明显。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

过去 24 小时共合并/关闭 **25 条 PR**，以下是重点推进的功能与修复：

| PR | 状态 | 概述 |
|---|---|---|
| [#346](https://github.com/netease-youdao/LobsterAI/pull/346) | OPEN（待合并） | **OpenClaw 插件预装系统 + 钉钉配置同步**：新增通用插件预装机制，在 `package.json` 中声明插件并在开发/构建时自动下载打包；首个插件为钉钉连接器 `@dingtalk-real-ai/dingtalk-connector` v0.7.3 |
| [#233](https://github.com/netease-youdao/LobsterAI/pull/233) | CLOSED | **MCP 支持**：新增 MCP（Model Context Protocol）功能支持 |
| [#335](https://github.com/netease-youdao/LobsterAI/pull/335) | CLOSED | 修复定时任务不支持企业微信的 bug |
| [#332](https://github.com/netease-youdao/LobsterAI/pull/332) | CLOSED | 定时任务创建页面新增 IM 渠道支持 |
| [#331](https://github.com/netease-youdao/LobsterAI/pull/331) | CLOSED | **IM 新增企业微信支持** |
| [#209](https://github.com/netease-youdao/LobsterAI/pull/209) | CLOSED | **安全修复**：将 OpenAI 兼容代理绑定至 127.0.0.1，防止远程未授权 RCE 攻击 |
| [#108](https://github.com/netease-youdao/LobsterAI/pull/108) | CLOSED | 钉钉、飞书、Telegram、Discord 支持媒体内容输入 |
| [#117](https://github.com/netease-youdao/LobsterAI/pull/117) | CLOSED | Skill 基本信息解析支持完整 YAML 格式 |
| [#348](https://github.com/netease-youdao/LobsterAI/pull/348) | CLOSED | QQ SDK 关闭 debug 日志、媒体消息展示优化 |

**整体评估**：本日合并的 PR 覆盖了多个重要功能领域（MCP、IM 平台扩展、企业微信、安全修复），对企业级用户场景有显著价值。

---

## 4. 社区热点

以下 Issues 讨论最为活跃（按评论数排序）：

| Issue | 评论 | 热度分析 |
|---|---|---|
| [#344](https://github.com/netease-youdao/LobsterAI/issues/344) | 4 | **高优先级 Bug**：字符串含“中文+数字”时自动插入空格，严重影响使用，多名用户在评论区确认复现 |
| [#70](https://github.com/netease-youdao/LobsterAI/issues/70) | 2 | Bash 执行缓慢问题，macOS M4 环境特定反馈 |
| [#350](https://github.com/netease-youdao/LobsterAI/issues/350) | 2 | 命令执行返回后仍需等待数分钟，影响体验 |
| [#320](https://github.com/netease-youdao/LobsterAI/issues/320) | 2 | 本地多 Agent 代理运行需求 |
| [#260](https://github.com/netease-youdao/LobsterAI/issues/260) | 1 | 定时任务 IM 通知无法指定具体对话框 |

**热点分析**：**Issue #344** 是今日最热话题，用户强烈反馈字符串处理逻辑错误（自动在中文与数字间加空格），已有多人跟帖确认，影响了字符串处理类工作流的准确性。**Bash 执行性能**（#70、#350）也是集中反馈点，可能与底层执行机制或模型调用有关。

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 描述 | 关联 Fix PR |
|---|---|---|---|
| [#344](https://github.com/netease-youdao/LobsterAI/issues/344) | **高** | 字符串含“中文+数字”时自动插入空格，导致输出错误 | 无 |
| [#352](https://github.com/netease-youdao/LobsterAI/issues/352) | **高** | 无法执行任务，Claude Code 进程以 code 1 退出 | 无 |
| [#70](https://github.com/netease-youdao/LobsterAI/issues/70) | **中** | Bash 执行慢 + `zsh: pwd:1: too many arguments` 错误 | 无 |
| [#350](https://github.com/netease-youdao/LobsterAI/issues/350) | **中** | Bash 执行返回后仍卡顿数分钟 | 无 |
| [#354](https://github.com/netease-youdao/LobsterAI/issues/354) | **中** | 陷入循环无法清除记忆，重复执行上一任务 | 无 |
| [#341](https://github.com/netease-youdao/LobsterAI/issues/341) | **低** | Git Bash 运行时异常（附截图） | 无 |
| [#345](https://github.com/netease-youdao/LobsterAI/issues/345) | **低** | 离线环境缺少本地依赖库导致 skill 不可用 | 无 |

**评估**：本日无关联 Fix PR 的 Bug 修复进展。**Issue #344** 和 **#352** 为高优先级问题，建议优先处理。

---

## 6. 功能请求与路线图信号

| Issue | 功能请求 | 评估 |
|---|---|---|
| [#349](https://github.com/netease-youdao/LobsterAI/issues/349) | **自定义系统提示词 + SubAgent 功能**：用户可自定义系统提示词、编排 SubAgent、启用/禁用特定 skills 和 mcp | 与 MCP (#233) 配合可形成工作流定制能力，有望纳入后续版本 |
| [#342](https://github.com/netease-youdao/LobsterAI/issues/342) | **HITL（人在回环）支持**：在关键节点引入人类决策 | 企业场景需求明确，需评估实现复杂度 |
| [#343](https://github.com/netease-youdao/LobsterAI/issues/343) | **打字机效果**：逐字输出而非分段返回 | UI 体验优化，实现成本较低 |
| [#320](https://github.com/netease-youdao/LobsterAI/issues/320) | **本地运行多 Agent 代理** | 多租户/多任务场景需求 |
| [#351](https://github.com/netease-youdao/LobsterAI/issues/351) | **远程 HTTP MCP 服务器支持** | #233 已支持 MCP，但远程 HTTP 传输（streamable_http/SSE）尚不支持 |
| [#347](https://github.com/netease-youdao/LobsterAI/issues/347) | **QQ 适配器支持文件和图片回复** | #348 已部分优化媒体展示，需进一步支持发送 |
| [#345](https://github.com/netease-youdao/LobsterAI/issues/345) | **离线依赖库本地化** | 离线部署场景需求 |

**路线图信号**：基于本日合并的 PR（尤其是 #233 MCP、#331 企业微信、#346 插件系统），项目正在向**多平台集成**和**可扩展架构**方向演进。自定义工作流（#349）和 HITL（#342）是企业用户关注的高级功能，可能在后续版本中逐步引入。

---

## 7. 用户反馈摘要

从 Issues 评论和内容中提炼的关键反馈：

- **性能不满**：多个用户反馈 Bash 命令执行缓慢（#70、#350），与直接终端执行差异显著，影响使用体验。有用户直接对比 OpenClaw 速度更快。
- **字符串处理缺陷**：“中文+数字”组合时自动加空格（#344）是当前最影响准确性的 Bug，用户反馈“无法替代 openclaw”。
- **功能丰富度期待**：用户希望支持自定义提示词（#349）、多 Agent（#320）、打字机效果（#343）、HITL（#342）等。
- **平台兼容性**：远程 MCP（#351）、QQ 文件图片回复（#347）、企业微信定时任务（已在 #331/#335 修复）是多平台用户的关键需求。
- **部署灵活性**：离线环境依赖库问题（#345）限制了企业在内网环境的使用。

---

## 8. 待处理积压

以下 Issue 长期未响应或高优先级，建议维护者关注：

| Issue | 状态 | 积压时长 | 建议 |
|---|---|---|---|
| [#70](https://github.com/netease-youdao/LobsterAI/issues/70) | OPEN | 约 14 天（2026-02-24 创建） | Bash 执行性能问题已持续两周，影响日常使用 |
| [#344](https://github.com/netease-youdao/LobsterAI/issues/344) | OPEN | 1 天 | 今日热点 Bug，需优先修复 |
| [#352](https://github.com/netease-youdao/LobsterAI/issues/352) | OPEN | 1 天 | 进程异常退出，需排查根因 |
| [#351](https://github.com/netease-youdao/LobsterAI/issues/351) | OPEN | 1 天 | 远程 MCP 功能缺失，影响 MCP 生态集成 |

---

*报告生成时间：2026-03-10 | 数据来源：GitHub LobsterAI (netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# 📊 ZeptoClaw 项目动态日报 | 2026-03-10

## 1. 今日速览

ZeptoClaw 项目在 2026-03-09 保持活跃开发态势，共产生 2 个新 Issue 和 3 个新 PR。社区围绕两大核心方向展开工作：认证凭据的自动导入机制（解决开发体验痛点）以及 WhatsApp Web 原生支持的长期技术债务清理。目前所有 PR 均为待合并状态，尚未有代码合并记录，项目整体处于功能开发阶段，进度正常。

---

## 2. 版本发布

**无新版本发布**

过去 24 小时内项目未发布任何 Release。

---

## 3. 项目进展

### 待合并 PR 概览

| PR 编号 | 作者 | 标题 | 状态 |
|---------|------|------|------|
| [#290](https://github.com/qhkm/zeptoclaw/pull/290) | @qhkm | feat(auth): auto-import Claude CLI credentials as fallback | 🟡 OPEN |
| [#287](https://github.com/qhkm/zeptoclaw/pull/287) | @taqtiqa-mark | chore: Dev tools for consistent pre-PR state | 🟡 OPEN |
| [#286](https://github.com/qhkm/zeptoclaw/pull/286) | @taqtiqa-mark | feat: add SKILL.md presence check in GitHub skill search | 🟡 OPEN |

**重点 PR 解读：**

- **#290** 与 Issue #289 直接对应，实现了从 macOS Keychain 或 `~/.claude.json` 自动导入 Claude CLI OAuth 令牌的功能，作为最低优先级凭据回退方案。该功能将显著改善零配置使用体验。
- **#287** 旨在为贡献者提供统一的开发/测试环境，规范本地 test/lint 检查流程，降低 PR 准入门槛。
- **#286** 为技能搜索增加 SKILL.md 文件深度扫描能力，提升搜索结果质量。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 作者 | 标题 | 热度 |
|-------|------|------|------|
| [#289](https://github.com/qhkm/zeptoclaw/issues/289) | @qhkm | feat: auto-import Claude CLI subscription credentials as fallback | 🟡 0 👍 / 0 💬 |
| [#288](https://github.com/qhkm/zeptoclaw/issues/288) | @deorozindo | feat: Native WhatsApp Web support (replace whatsmeow-bridge stub) | 🟡 0 👍 / 0 💬 |

**热点分析：**

- **#288 WhatsApp Web 原生支持**：这是一个技术债务清理类 Issue。当前实现依赖不存在的外部 `whatsmeow-bridge` 二进制文件（`src/deps/fetcher.rs` 返回 "Binary download not yet implemented"）。作者提出使用原生 WhatsApp Web 方案替代，这是用户长期期待的功能，将消除对外部二进制文件的依赖。

- **#289 Claude CLI 凭据自动导入**：解决开发者重复配置 API Key 的痛点，实现零配置开箱即用，符合 ZeptoClaw "简化工作流"的产品定位。

---

## 5. Bug 与稳定性

**今日无 Bug 报告**

过去 24 小时内未收到新的 Bug、崩溃或回归问题报告。

---

## 6. 功能请求与路线图信号

### 新增功能请求

| Issue | 功能描述 | 潜在纳入版本 |
|-------|----------|--------------|
| #288 | Native WhatsApp Web 支持 | 视 PR 推进情况 |
| #289 | Claude CLI 凭据自动导入 | 已有对应 PR #290，预计近期合并 |

**路线图信号：**

基于当前 PR 堆栈判断，项目短期路线图将聚焦于：
1. **认证凭据管理优化**（#290 实现自动导入）
2. **开发者工具链完善**（#287 统一开发环境）
3. **技能搜索质量提升**（#286 深度扫描）
4. **即时通讯渠道原生化**（#288 WhatsApp Web）

---

## 7. 用户反馈摘要

从现有 Issue 和 PR 描述中可提炼以下用户痛点：

| 场景 | 痛点 | 解决方向 |
|------|------|----------|
| 首次使用 | 需要手动配置 Anthropic API Key，门槛较高 | #289 自动导入 Claude CLI 凭据 |
| WhatsApp 集成 | 依赖不存在的外部二进制，无法正常使用 | #288 原生 WhatsApp Web 实现 |
| 贡献者协作 | 不同开发者的本地环境差异导致 PR 检查结果不一致 | #287 统一开发工具链 |
| 技能搜索 | 搜索结果质量参差不齐，缺乏技能文档验证 | #286 SKILL.md 深度扫描 |

---

## 8. 待处理积压

### 长期未响应 Issue

**无长期积压 Issue**

所有 Issue 均为 2026-03-09 新创建，项目响应及时。

---

### 建议关注

- **#288 WhatsApp Web 支持**：该 Issue 指出一个关键的可用性问题（当前 WhatsApp 通道依赖不存在的二进制），建议优先评估合并可行性。

---

**报告生成时间**：2026-03-10  
**数据来源**：GitHub (github.com/qhkm/zeptoclaw)

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-10)

## 今日速览

过去24小时内，NanoBot 项目保持高度活跃状态：共处理 **19 条 Issues**（新开/活跃 16 条，关闭 3 条）和 **67 条 PR 更新**（待合并 54 条，已合并/关闭 13 条）。社区参与度较高，功能请求与 bug 反馈并存，主要集中在 provider 扩展、渠道集成和稳定性优化方向。未发布新版本。

---

## 版本发布

**本期无新版本发布**。近期需关注 #1765 报告的源码升级问题（v0.1.4.post3 → v0.1.4.post4），已有用户反馈升级失效。

---

## 项目进展

| PR | 作者 | 描述 | 状态 |
|---|---|---|---|
| [#1803](https://github.com/HKUDS/nanobot/pull/1803) | @tatianna0 | feat(subagent): 继承父代理工具而非硬编码 | Open |
| [#1233](https://github.com/HKUDS/nanobot/pull/1233) | @chengyongru | feat: 异步事件注入机制，支持用户中断 | Open |
| [#1724](https://github.com/HKUDS/nanobot/pull/1724) | @zztdandan | feat(dispatch): ACP 后端运行时，兼容 AgentLoop | Open |
| [#1801](https://github.com/HKUDS/nanobot/pull/1801) | @friday-cloud | feat(telegram): mention-only 群组模式与表情响应 | Open |
| [#1793](https://github.com/HKUDS/nanobot/pull/1793) | @h4nz4 | feat(telegram): 支持 HTTP(S) 媒体 URL | Open |
| [#1490](https://github.com/HKUDS/nanobot/pull/1490) | @rgstephens | feat: Langfuse 可观测性支持 | Open |
| [#398](https://github.com/HKUDS/nanobot/pull/398) | @chris-alexander | feat(web): 可配置 Web 搜索提供者 (Brave/DuckDuckGo/Tavily/SearXNG) | Open |
| [#1680](https://github.com/HKUDS/nanobot/pull/1680) | @rudy-of-the-corner | feat(providers): Mistral Provider 及通用转录服务 | Open |
| [#1327](https://github.com/HKUDS/nanobot/pull/1327) | @chengyongru | Add WeChat Work (WeCom) channel support | Open |
| [#1784](https://github.com/HKUDS/nanobot/pull/1784) | @ailuntz | fix(slack): 定义 thread 用法 | **Closed** ✅ |

**关键进展**：
- 子代理工具继承机制正在完善 (#1803, #1429)，将解决 MCP 工具无法被 subagent 使用的问题
- 用户中断机制取得进展 (#1233, #1789)，有望解决 #1762 反馈的"任务运行时无法中断"痛点
- 多渠道功能增强：Telegram 媒体 URL 支持、WeCom 集成、Slack 线程修复
- Web 搜索提供者可插拔化 (#398, #1719)，社区长期诉求有望落地

---

## 社区热点

### 讨论最活跃的 Issues

| Issue | 作者 | 评论/👍 | 主题 |
|---|---|---|---|
| [#140](https://github.com/HKUDS/nanobot/issues/140) | @zhilongjiang | 9 评论 / 4 👍 | 计划支持 GitHub Copilot providers？ |
| [#397](https://github.com/HKUDS/nanobot/issues/397) | @Fossils999 | 6 评论 | 多模型聚合平台与 OAuth 认证支持 |
| [#581](https://github.com/HKUDS/nanobot/issues/581) | @capt-marbles | 5 评论 | Minimax provider 缺失 |
| [#359](https://github.com/HKUDS/nanobot/issues/359) | @JohnnyBonk | 3 评论 / 8 👍 | MCP 工具官方支持 |
| [#1719](https://github.com/HKUDS/nanobot/issues/1719) | @trashhalo | 2 评论 / 8 👍 | web_search 后端应可替换 |
| [#1692](https://github.com/HKUDS/nanobot/issues/1692) | @aiko929 | 2 评论 / 3 👍 | Telegram 机器人回答两次 |

**分析**：
- **Provider 扩展**是核心诉求：Copilot、Minimax、多模型聚合平台（RouterWay 等）、Mistral 等需求强烈
- **MCP 工具支持**热度很高（8 👍），已有多个相关 PR 推进中
- **Telegram 渠道**问题较多（重复回复、媒体处理），需关注稳定性

---

## Bug 与稳定性

### 需紧急关注的 Bug

| Issue | 严重程度 | 描述 | Fix 状态 |
|---|---|---|---|
| [#1765](https://github.com/HKUDS/nanobot/issues/1765) | **高** | v0.1.4.post3 源码升级到 post4 失败 | 暂无 fix |
| [#1773](https://github.com/HKUDS/nanobot/issues/1773) | **高** | Slack 频道 'use_thread' 未定义 | **已修复** (#1784) |
| [#1781](https://github.com/HKUDS/nanobot/issues/1781) | **高** | 全局锁 _processing_lock 导致 Agent 阻塞，cron 任务无法执行 | 暂无 fix |
| [#1777](https://github.com/HKUDS/nanobot/issues/1777) | **中** | v0.1.4.post3 请求自定义接口返回 403 | 暂无 fix |
| [#1791](https://github.com/HKUDS/nanobot/issues/1791) | **中** | 环境变量在 config.json 存在时被忽略 | 已有 fix PR (#1798) |
| [#1792](https://github.com/HKUDS/nanobot/issues/1792) | **中** | 消息工具无法正确处理 MCP 工具获取的图片 | 已有 fix PR (#1793) |
| [#1783](https://github.com/HKUDS/nanobot/issues/1783) | **中** | Codex provider 硬编码 60s 超时，无重试 | 已有 fix PR (#1788) |
| [#1762](https://github.com/HKUDS/nanobot/issues/1762) | **中** | 机器人工作时无法被中断 | 已有 fix PR (#1233, #1789) |

---

## 功能请求与路线图信号

### 高价值功能请求

| Issue | 需求 | 已有对应 PR/进展 |
|---|---|---|
| [#397](https://github.com/HKUDS/nanobot/issues/397) | 多模型聚合平台 + OAuth 认证 | 多个 provider PR 在推进 |
| [#359](https://github.com/HKUDS/nanobot/issues/359) | MCP 工具官方支持 | #1429, #1803 正在实现 |
| [#1719](https://github.com/HKUDS/nanobot/issues/1719) | Web 搜索后端可插拔 | #398 已提出方案 |
| [#140](https://github.com/HKUDS/nanobot/issues/140) | GitHub Copilot providers | 社区持续关注 |

**路线图信号**：
- **Provider 生态扩展**是近期重点方向（Mistral、WeChat Work、Langfuse 集成均已见 PR）
- **Subagent 能力增强**（工具继承、中断机制）正在完善
- **多渠道稳定性**（Telegram、Slack、QQ）是近期修复重点

---

## 用户反馈摘要

### 核心痛点

1. **Provider 生态不足**：用户强烈希望支持更多模型聚合平台（RouterWay、OpenRouter 等）及 OAuth 认证
2. **Telegram 渠道不稳定**：重复回复、媒体处理问题频发
3. **任务中断能力缺失**：机器人工作时无法接收新指令 (#1762)
4. **版本升级问题**：源码升级方式失效 (#1765)
5. **全局锁阻塞**：影响 cron 定时任务执行 (#1781)

### 满意之处

- MCP 工具支持呼声高，社区积极参与实现
- 多渠道功能（Telegram、QQ、Slack、WeCom）持续扩展

---

## 待处理积压

### 长期未响应的重要 Issue

| Issue | 创建时间 | 状态 | 建议 |
|---|---|---|---|
| [#140](https://github.com/HKUDS/nanobot/issues/140) | 2026-02-05 | Open | 考虑纳入路线图，明确 Copilot 支持计划 |
| [#128](https://github.com/HKUDS/nanobot/issues/128) | 2026-02-05 | Open | LM Studio / vLLM 集成问题，需进一步定位 |
| [#397](https://github.com/HKUDS/nanobot/issues/397) | 2026-02-09 | Open | 多模型聚合平台诉求强烈，建议官方回应 |
| [#359](https://github.com/HKUDS/nanobot/issues/359) | 2026-02-08 | Open | MCP 支持已在推进中，建议同步进展 |

---

*报告生成时间：2026-03-10 | 数据来源：GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-10)

## 1. 今日速览

PicoClaw 今日保持高度活跃，共产生 **99 条 GitHub 活动** (19 Issues + 80 PRs)，其中 **40 个 PR 已合并/关闭**，新版本 v0.2.1 正式发布，Nightly 构建同步更新。项目在多渠道集成 (Mattermost、Signal、IRC 改进) 和 Agent 能力增强 (子代理工具访问、JSONL 持久化) 方面持续推进，但同时存在多个渠道 bug (飞书、QQ、IRC) 等待修复。整体健康度良好，开发节奏稳健。

---

## 2. 版本发布

### ✅ v0.2.1 正式版发布

**发布链接**: https://github.com/sipeed/picoclaw/releases/tag/v0.2.1

**更新内容**:
- 新增 picoclaw-launcher-tUI 全新风格横幅 (#1008)
- 新增 minimax provider 支持 (#1273)
- 更新贡献指南 (contributing.md)

**迁移注意**: 无破坏性变更，为常规功能更新。

---

### 🌙 v0.2.1-nightly.20260310.b89f6445

**发布链接**: https://github.com/sipeed/picoclaw/releases/tag/v0.2.1-nightly.20260310.b89f6445

**更新内容**:
- 对齐 gorelease 和 release note 工作流 (#1285)
- 合并 #1107: 防止 read_file 工具读取大文件/二进制文件

**Full Changelog**: https://github.com/sipeed/picoclaw/compare/v0.2.1...v0.2.1-nightly.20260310.b89f6445

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 描述 | 状态 |
|---|---|---|
| [#1285](https://github.com/sipeed/picoclaw/pull/1285) | 夜间构建对齐 gorelease 流程，添加自动 changelog | ✅ 已合并 |
| [#1107](https://github.com/sipeed/picoclaw/pull/1107) | 防止 read_file 工具读取大文件/二进制文件 (fix #1049) | ✅ 已合并 |
| [#1255](https://github.com/sipeed/picoclaw/pull/1255) | 修复 QQ 群消息使用错误 API (PostC2CMessage → PostGroupMessage) | ✅ 已合并 |
| [#1286](https://github.com/sipeed/picoclaw/pull/1286) | 添加 reaction 工具和 typing/placeholder 清理 | ✅ 已合并 |
| [#1283](https://github.com/sipeed/picoclaw/pull/1283) | 修复飞书消息中提及身份和 sender open_id 保留问题 | ✅ 已合并 |
| [#1243](https://github.com/sipeed/picoclaw/pull/1243) | MCP 工具懒加载 (Tool Discovery) | ✅ 已合并 |
| [#1267](https://github.com/sipeed/picoclaw/pull/1267) | 移除飞书中不必要的 crypto/rand | ✅ 已合并 |

### 正在推进的重要 PR

| PR | 描述 | 状态 |
|---|---|---|
| [#1288](https://github.com/sipeed/picoclaw/pull/1288) | **Mattermost 渠道支持** - 使用 WebSocket API v4 | 🔄 Open |
| [#873](https://github.com/sipeed/picoclaw/pull/873) | 飞书工具进度反馈和用户中止支持 | 🔄 Open |
| [#699](https://github.com/sipeed/picoclaw/pull/699) | 重构 AgentLoop，提高代码质量 | 🔄 Open |
| [#1038](https://github.com/sipeed/picoclaw/pull/1038) | 添加 IndexRegistry - 支持自定义技能索引 | 🔄 Open |
| [#1248](https://github.com/sipeed/picoclaw/pull/1248) | 任务计划跟踪和进度消息管理 | 🔄 Open |
| [#1284](https://github.com/sipeed/picoclaw/pull/1284) | 添加 anthropic-messages 协议支持 (解决 #269) | 🔄 Open |
| [#1101](https://github.com/sipeed/picoclaw/pull/1101) | Telegram 流式 LLM 响应 (sendMessageDraft) | 🔄 Open |

---

## 4. 社区热点

### 讨论最活跃的 Issues

1. **[#1210](https://github.com/sipeed/picoclaw/issues/1210)** - 企业微信智能机器人配置问题
   - 作者: @lslove10010 | 评论: 10 | 状态: Open
   - 诉求: 提供企业微信 AI Bot 配置示例和指导

2. **[#302](https://github.com/sipeed/picoclaw/issues/302)** - ghcr.io/sipeed/picoclaw 私有镜像请求
   - 作者: @mattn | 评论: 6 | 👍: 2 | 状态: Open
   - 诉求: 将 Docker 镜像设置为公开访问

3. **[#1011](https://github.com/sipeed/picoclaw/issues/1011)** - 添加代理功能
   - 作者: @AnterCreeper | 评论: 2 | 状态: Open
   - 背景: 用户在特定地区无法访问模型 API (403 错误)，需要代理支持

### 热门功能请求

| Issue | 功能 | 状态 |
|---|---|---|
| [#1270](https://github.com/sipeed/picoclaw/issues/1270) | Telegram Forum Topics 支持 | Open |
| [#41](https://github.com/sipeed/picoclaw/issues/41) | 添加 Signal 渠道集成 | Open |
| [#1260](https://github.com/sipeed/picoclaw/issues/1260) | IRC 集成功能 | Closed |
| [#1276](https://github.com/sipeed/picoclaw/issues/1276) | 企业微信长链接模式 | Open |

---

## 5. Bug 与稳定性

### 🔴 高优先级 Bug

| Issue | 描述 | 状态 |
|---|---|---|
| [#1287](https://github.com/sipeed/picoclaw/issues/1287) | 工具调用失败: JSON 解析错误 (tool_calls.arguments 类型问题) | Open |
| [#1262](https://github.com/sipeed/picoclaw/issues/1262) | MCP 工具调用失败 - 初始化完成前就发送请求 | Open |
| [#1281](https://github.com/sipeed/picoclaw/issues/1281) | 飞书消息不显示被@用户和发信人的 user_id | Open (已有 fix PR #1283) |
| [#1242](https://github.com/sipeed/picoclaw/issues/1242) | QQ 渠道无法正确根据 bindings 区分 agent | Open |

### 🟡 中等优先级 Bug

| Issue | 描述 | 状态 |
|---|---|---|
| [#1280](https://github.com/sipeed/picoclaw/issues/1280) | IRC 配置中使用中文逗号导致解析错误 | Open |
| [#1279](https://github.com/sipeed/picoclaw/issues/1279) | IRC 自动加入频道返回 400 Bad Request | Open |
| [#1269](https://github.com/sipeed/picoclaw/issues/1269) | 天气查询技能返回错误数据 | Open |
| [#1277](https://github.com/sipeed/picoclaw/issues/1277) | OAuth token 过期后无法重新认证 | Closed |

### 🔧 已修复 (待验证)

- [#1049](https://github.com/sipeed/picoclaw/issues/1049) - read_file 读取 PDF 等二进制文件问题 → 已通过 #1107 修复
- [#1221](https://github.com/sipeed/picoclaw/issues/1221) (QQ 群消息 API 错误) → 已通过 #1255 修复

---

## 6. 功能请求与路线图信号

### 🔮 即将纳入的功能 (已有相关 PR)

| 功能 | 相关 PR | 预计版本 |
|---|---|---|
| **Mattermost 渠道** | #1288 | 未来版本 |
| **Signal 渠道** | #41 (长期需求) | 路线图中 |
| **Telegram 流式响应** | #1101 | 未来版本 |
| **任务计划跟踪** | #1248 | 未来版本 |
| **子代理工具访问** | #1278 | 规划中 |
| **企业微信长链接** | #1276 | 用户请求 |
| **模型访问代理** | #1011 | 用户请求 |
| **JSONL 持久化** | #1169 | 规划中 |

### 📌 路线图信号

1. **多渠道扩展**: Mattermost、Signal、IRC 改进、Telegram Forum Topics - 项目正在丰富渠道支持
2. **Agent 能力增强**: 子代理、JSONL 持久化、工具懒加载 - 深化 Agent 核心能力
3. **用户体验优化**: 飞书进度反馈、Telegram 流式响应、任务计划跟踪 - 提升实时交互体验

---

## 7. 用户反馈摘要

### 用户痛点

- **网络限制**: 部分用户因地区限制无法访问特定模型 API，需要代理支持 (#1011)
- **渠道集成不完善**: 飞书缺少 user_id、QQ 绑定有问题、IRC 配置易出错
- **文档缺失**: 企业微信配置、渠道使用等缺乏详细示例 (#1210)
- **镜像访问**: Docker 镜像为私有，用户请求公开访问 (#302)

### 正面反馈

- 新版本添加 minimax provider 得到好评
- JSONL 持久化架构改进方向被认可 (#1169)
- MCP 工具懒加载解决了上下文窗口压力 (#1243)

---

## 8. 待处理积压

### ⚠️ 长期未解决的重要 Issue

| Issue | 描述 | 创建时间 | 状态 |
|---|---|---|---|
| [#302](https://github.com/sipeed/picoclaw/issues/302) | Docker 镜像公开访问请求 | 2026-02-16 | Open (23天) |
| [#41](https://github.com/sipeed/picoclaw/issues/41) | Signal 渠道集成 | 2026-02-11 | Open (27天) |
| [#63](https://github.com/sipeed/picoclaw/issues/63) | 会话内管理 cronjobs | 2026-02-12 | Open (26天) |
| [#1169](https://github.com/sipeed/picoclaw/issues/1169) | JSONL 持久化集成 | 2026-03-06 | Open (4天) |

### 🔄 建议关注

- **#1011 代理功能**: 用户因地区限制无法使用，需求迫切
- **#1270 Telegram Forum**: 与 OpenClaw 功能对齐
- **#1276 企业微信长链接**: 新官方功能，对接需求

---

*报告生成时间: 2026-03-10 | 数据来源: GitHub PicoClaw Repository*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-10)

## 1. 今日速览

过去 24 小时内，NanoClaw 项目保持高度活跃状态：**27 条 Issues 更新**（23 条新开/活跃，4 条关闭），**50 条 PR 更新**（47 条待合并，3 条已合并/关闭）。项目整体呈现快速迭代特征，社区参与度高。安全相关工作成为今日焦点——一次性关闭了 2 个安全 Issue（密钥泄露和 Gmail 管道注入防护），同时多个高优先级功能正在推进中。技能分支合并自动化遇到多次冲突，提示主分支与技能分支之间存在一定的同步压力。

---

## 2. 版本发布

**无新版本发布**

过去 24 小时内无 Release 更新。

---

## 3. 项目进展

### 已合并/关闭的 PR（3 条）

| PR | 状态 | 说明 |
|---|---|---|
| [#848](https://github.com/qwibitai/nanoclaw/pull/848) | 已关闭 | （待清理的 PR） |
| [#849](https://github.com/qwibitai/nanoclaw/pull/849) | 已关闭 | （待清理的 PR） |
| — | — | 合并数据较少，主要为待合并状态 |

### 值得关注的待合并 PR（47 条待处理）

以下为今日更新且具有代表性的待合并 PR：

- **[#332](https://github.com/qwibitai/nanoclaw/pull/332)** - feat: Podman Support for setup — 新增 Podman 容器运行时支持
- **[#415](https://github.com/qwibitai/nanoclaw/pull/415)** - feat: add Windows support to setup — 重大平台扩展，支持 Windows + WSL
- **[#460](https://github.com/qwibitai/nanoclaw/pull/460)** - feat(security): add network isolation for non-main containers — 非主容器默认网络隔离，增强安全
- **[#373](fix: refresh current_tasks.json snapshot after IPC task mutations)** — 修复容器会话内任务列表 stale 问题
- **[#455](https://github.com/qwibitai/nanoclaw/pull/455)** - fix: skill package fixes for cross-platform + multi-channel — 跨平台技能包修复

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 类型 | 评论 | 点赞 | 热度分析 |
|---|---|---|---|---|
| **[#80](https://github.com/qwibitai/nanoclaw/issues/80)** | Enhancement | 21 | 37 | **最高热度** — 支持 OpenCode、Codex、Gemini 等替代运行时，规避 Anthropic 订阅风险 |
| **[#783](https://github.com/qwibitai/nanoclaw/issues/783)** | Bug | 3 | 0 | schedule_task 缺少幂等性键，任务跨会话累积 |
| **[#880](https://github.com/qwibitai/nanoclaw/issues/880)** | Security Bug | 1 | 0 | **已关闭** — Agent 在终端输出中泄露密钥凭据 |
| **[#891](https://github.com/qwibitai/nanoclaw/issues/891)** | Enhancement | 1 | 0 | **已关闭** — Gmail 安全管道：提示注入过滤 + 隔离收件箱组 |

**#80 深度分析**：这是目前社区最强烈的功能请求。用户痛点在于 Anthropic 已经在关闭部分用户的订阅，NanoClaw 过度依赖 Claude Code 是潜在风险。OpenCode 作为开源替代品被推荐。该 Issue 已有 37 人点赞支持，预计将进入下一版本路线图。

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

#### Critical（严重）

| Issue | 状态 | 说明 |
|---|---|---|
| **[#880](https://github.com/qwibitai/nanoclaw/issues/880)** | ✅ 已关闭 | **SECURITY** — Agent 在 bash 命令输出中泄露 .env 密钥和凭据 |
| **[#889](https://github.com/qwibitai/nanoclaw/issues/889)** | 🔵 OPEN | Unicode 孤立代理符污染 JSONL 转录，导致下次 API 调用 HTTP 400 |
| **[#905](https://github.com/qwibitai/nanoclaw/issues/905)** | 🔵 OPEN | Agent runner 源码挂载仅在首次复制，之后从不更新 |

#### High（高优先级）

| Issue | 状态 | 说明 |
|---|---|---|
| **[#730](https://github.com/qwibitai/nanoclaw/issues/730)** | 🔵 OPEN | CLAUDE_CODE_OAUTH_TOKEN 过夜过期，导致容器每日早晨 401 失败 |
| **[#869](https://github.com/qwibitai/nanoclaw/issues/869)** | 🔵 OPEN | 缺少分组级凭据管理，所有组共享同一套 API 配额和身份 |
| **[#722](https://github.com/qwibitai/nanoclaw/issues/722)** | 🔵 OPEN | 缺少统一渠道媒体支持（图片、视频、音频、文档、贴纸） |
| **[#859](https://github.com/qwibitai/nanoclaw/issues/859)** | ✅ 已关闭 | 请求删除 PR #848 和 #849（已处理） |

#### Medium（中优先级）

| Issue | 状态 | 说明 |
|---|---|---|
| **[#897](https://github.com/qwibitai/nanoclaw/issues/897)** - [#896](https://github.com/qwibitai/nanoclaw/issues/896) | 🔵 OPEN | **批量合并失败** — 技能分支与主分支冲突（skill/apple-container, skill/compact, skill/ollama-tool） |
| **[#853](https://github.com/qwibitai/nanoclaw/issues/853)** | 🔵 OPEN | setup 验证不支持 ANTHROPIC_AUTH_TOKEN |
| **[#783](https://github.com/qwibitai/nanoclaw/issues/783)** | 🔵 OPEN | schedule_task 无幂等性键 |
| **[#375](https://github.com/qwibitai/nanoclaw/issues/375)** | 🔵 OPEN | WhatsApp 聊天显示名称被用作工作区文件夹名，而非硬编码 "main" |

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

| Issue | 优先级 | 预计版本 | 说明 |
|---|---|---|---|
| **[#80](https://github.com/qwibitai/nanoclaw/issues/80)** | Low → High | 可能在 1.x | 支持 OpenCode、Codex、Gemini 等替代 AI 运行时 |
| **[#869](https://github.com/qwibitai/nanoclaw/issues/869)** | High | 下一版本 | 分组级凭据管理和交互式重新认证 |
| **[#722](https://github.com/qwibitai/nanoclaw/issues/722)** | High | 下一版本 | 统一渠道媒体支持（图片/视频/音频/文档/贴纸） |
| **[#878](https://github.com/qwibitai/nanoclaw/issues/878)** | High | 下一版本 | 凭据代理扩展至 GROQ_API_KEY 和 OPENAI_API_KEY |
| **[#881](https://github.com/qwibitai/nanoclaw/issues/881)** | High | 近期 | AI Architect 状态持久化和 Issue 去重 |
| **[#460 (PR)](https://github.com/qwibitai/nanoclaw/pull/460)** | High | 下一版本 | 非主容器网络隔离（安全增强） |

### 路线图信号

从 PR 和 Issue 合并趋势来看，**下一版本的主要方向**可能包括：
1. **安全性强化** — 凭据管理、网络隔离、提示注入防护
2. **多平台支持** — Windows 完整支持、Podman 支持
3. **多运行时支持** — 减少对 Anthropic 的依赖
4. **运维可靠性** — OAuth Token 刷新机制、任务幂等性

---

## 7. 用户反馈摘要

### 真实用户痛点

| 场景 | 痛点 | 来自 Issue |
|---|---|---|
| **安全顾虑** | Anthropic 关闭用户订阅导致服务不可用，期望支持开源替代品 | #80 |
| **凭据管理混乱** | 所有群组共享同一套 API 配额，无法为特定群组配置独立凭据 | #869 |
| **每日早晨故障** | OAuth Token 过夜过期，后台服务无法自动刷新，导致每日早晨 401 错误 | #730 |
| **密钥泄露** | Agent 在终端输出中打印密钥和凭据，存在严重安全风险 | #880 |
| **跨平台困难** | Windows 用户首次运行遇到多处兼容性问题 | #415, #407 |
| **媒体支持缺失** | WhatsApp/Telegram/Discord 渠道不支持图片/视频等媒体 | #722 |

### 满意度反馈

- **Gmail 安全管道**（#891 已关闭）用户对新增的提示注入过滤和隔离收件箱组表示认可
- **网络隔离**（#460 PR）用户期待非主容器的网络安全提升

---

## 8. 待处理积压

### 长期未响应的重点 Issue（超过 30 天）

| Issue | 创建时间 | 状态 | 风险 |
|---|---|---|---|
| **[#80](https://github.com/qwibitai/nanoclaw/issues/80)** | 2026-02-04 | OPEN | 高热度但未分配，可能影响用户留存 |
| **[#29](https://github.com/qwibitai/nanoclaw/issues/29)** | 2026-02-02 | OPEN | Signal 消息渠道请求，低优先级但有需求 |
| **[#375](https://github.com/qwibitai/nanoclaw/issues/375)** | 2026-02-22 | OPEN | WhatsApp 工作区命名 bug |

### 技能分支合并积压（需人工介入）

以下 6 个 Issue 报告了自动合并失败，需要维护者手动处理：

- **[#897](https://github.com/qwibitai/nanoclaw/issues/897)** — f41b399 之后的合并冲突
- **[#898](https://github.com/qwibitai/nanoclaw/issues/898)** — 621fde8 之后的合并冲突
- **[#892](https://github.com/qwibitai/nanoclaw/issues/892)** — 5118239 之后的合并冲突
- **[#893](https://github.com/qwibitai/nanoclaw/issues/893)** — 8564937 之后的合并冲突
- **[#895](https://github.com/qwibitai/nanoclaw/issues/895)** — e6ea914 之后的合并冲突
- **[#896](https://github.com/qwibitai/nanoclaw/issues/896)** — 4dee68c 之后的合并冲突

**受影响分支**：`skill/apple-container`、`skill/compact`、`skill/ollama-tool`

---

*报告生成时间：2026-03-10 | 数据来源：GitHub NanoClaw Repository*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-03-10)

## 1. 今日速览

过去24小时，IronClaw 项目保持高度活跃：共产生 **35 条 Issues 更新**（23 条新开/活跃，12 条关闭）和 **50 条 PR 更新**（37 条待合并，13 条已合并/关闭）。值得注意的是，PR #788 尝试修复 Job 无限循环问题但未能成功合并，项目仍面临一些稳定性挑战。社区贡献持续旺盛，多个新功能 PR 正在推进中。

---

## 2. 版本发布

本期无新版本发布。

---

## 3. 项目进展

| PR | 状态 | 说明 |
|---|---|---|
| [#788](https://github.com/nearai/ironclaw/pull/788) | ❌ CLOSED (Failed) | 尝试修复 Job token 预算和迭代上限问题，添加 `max_tokens_per_job` 配置，但未能成功合并 |
| 其他 49 条 PR | 🔲 OPEN | 包含多个重要功能更新，如 LanceDB 向量存储、OpenAI Codex 支持、轻量级 Routine 工具调用等 |

**关键推进方向**：
- **扩展性增强**：PR #677 统一认证入口、PR #744 添加 OpenAI Codex LLM provider、PR #720 引入 LanceDB 向量存储
- **稳定性提升**：PR #731 修复 Job 状态转换幂等性、PR #735 防止 Tunnel 僵尸进程
- **用户体验**：PR #679 保留模型选择、PR #714 构建 Worker Docker 镜像

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 摘要 |
|---|---|---|
| [#602](https://github.com/nearai/ironclaw/issues/602) | 4 | **Telegram 未默认安装**：本地安装时无 Telegram 选项，仅源码构建可用 |
| [#728](https://github.com/nearai/ironclaw/issues/728) | 3 | **kimi-k2.5 模型兼容性**：Temperature 限制和缺失 reasoning_content |
| [#548](https://github.com/nearai/ironclaw/issues/548) | 2 | **Chat API 添加搜索端点**：默认支持 Web 搜索 |
| [#439](https://github.com/nearai/ironclaw/issues/439) | 2 | **Registry 更新工作流失败**：checksum 生成与分支保护规则冲突 |

**热点分析**：
- **Telegram 集成问题**（#602）反映用户对开箱即用体验的期望与实际安装流程之间的落差
- **kimi-k2.5 兼容性**（#728）表明新模型支持需求迫切
- **搜索功能**（#548）是增强 Agent 能力的常见需求

---

## 5. Bug 与稳定性

### 高优先级 Bug

| Issue | 严重程度 | 状态 | 说明 |
|---|---|---|---|
| [#738](https://github.com/nearai/ironclaw/issues/738) | 🔴 高 | OPEN | Managed Tunnel 绑定错误端口 (3000→8080)，导致 Webhook 返回 404 |
| [#702](https://github.com/nearai/ironclaw/issues/702) | 🔴 高 | OPEN | Channel HTTP 配置变更后服务器不重启，无热加载 |
| [#699](https://github.com/nearai/ironclaw/issues/699) | 🔴 高 | OPEN | Chat API `/api/chat/send` 静默丢弃消息，线程卡死 |
| [#700](https://github.com/nearai/ironclaw/issues/700) | 🔴 高 | OPEN | CLI `tool setup` / `secret set` 在 libSQL 后端上崩溃 |

### 已关闭的 Bug

| Issue | 状态 | 说明 |
|---|---|---|
| [#698](https://github.com/nearai/ironclaw/issues/698) | ✅ CLOSED | Jobs 无限循环无 token 预算/迭代上限（尝试通过 #788 修复但未成功） |
| [#701](https://github.com/nearai/ironclaw/issues/701) | ✅ CLOSED | Agent 误执行破坏性操作（无确认提示） |

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue | 摘要 | 潜在纳入 |
|---|---|---|
| [#766](https://github.com/nearai/ironclaw/issues/766) | Chat API 支持图像+文本输入 | 🔲 PR #730 轻量级 Routine 工具调用可能覆盖部分需求 |
| [#765](https://github.com/nearai/ironclaw/issues/765) | 优化 Agent 日志以降低 DataDog 成本（当前 22M logs/天） | 🔲 性能优化需求 |
| [#780](https://github.com/nearai/ironclaw/issues/780) | IronClaw UI 价格显示不准确 | 🔲 UI Bug |
| [#761](https://github.com/nearai/ironclaw/issues/761) | Web Gateway 添加浅色主题 | 🔲 UI 增强 |
| [#773](https://github.com/nearai/ironclaw/issues/773) | GCP 验证以支持 G Suite 集成 | 🔲 长期基础设施需求 |

### 路线图信号
- **多模态输入**：图像+文本支持需求出现
- **LLM 提供商多样化**：Codex CLI OAuth 集成 (PR #693)、OpenAI Codex (PR #744) 正在开发
- **Routine/工作流**：事件触发 Routine (PR #756) 和 Webhook 端点 (PR #736) 正在推进

---

## 7. 用户反馈摘要

### 痛点与不满
1. **安装体验复杂**：`#602` 用户反馈 Telegram 安装困难，仅源码构建可用
2. **成本风险担忧**：`#698` 用户遭遇 Job 无限循环，担心成本暴露
3. **功能缺失**：`#548` 用户需要 Web 搜索能力；`#766` 需要图像输入支持

### 实际使用场景
- 企业用户希望共享技能给员工 agents (`#770`)
- 运营负责人构建的技能需要跨团队复用
- 需要与 Slack、Telegram 等外部通道集成 (`#738` Webhook 问题影响此场景)

### 满意度方面
- 用户对 Routine 功能表示关注（多个相关 PR 在积极开发）
- 新功能如 LanceDB 向量存储收到积极反馈

---

## 8. 待处理积压

### 长期未解决的 Issues

| Issue | 创建时间 | 状态 | 说明 |
|---|---|---|---|
| [#439](https://github.com/nearai/ironclaw/issues/439) | 2026-03-01 | OPEN | Registry 更新工作流失败，阻碍 WASM 通道安装 |
| [#651](https://github.com/nearai/ironclaw/issues/651) | - | OPEN | 通道凭证验证 + Routine Webhook 端点（相关 PR #689 正在修复） |

### 需关注的 PR

| PR | 风险 | 说明 |
|---|---|---|
| [#677](https://github.com/nearai/ironclaw/pull/677) | 🔴 高 | 统一扩展认证入口，涉及核心安全机制 |
| [#720](https://github.com/nearai/ironclaw/pull/720) | 🟡 中 | LanceDB 向量存储替换，可能影响现有数据库集成 |
| [#756](https://github.com/nearai/ironclaw/pull/756) | 🟡 中 | 事件触发 Routine，涉及核心调度逻辑 |

---

*报告生成时间：2026-03-10 | 数据来源：GitHub IronClaw Repository*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-10)

---

## 1. 今日速览

过去24小时，TinyClaw 项目保持极高的开发活跃度，共处理 **26 条 PR 更新**（其中 7 条待合并，19 条已合并/关闭），同时关闭了 2 个 Issues。尽管无新版本发布，但项目在架构重构、多 Provider 支持、CLI 现代化等方面持续快速推进。整体项目健康度良好，开发节奏稳健。

---

## 2. 版本发布

**无新版本发布**

过去24小时内无 Release 更新。

---

## 3. 项目进展

今日合并/关闭了 **19 条 PR**，主要集中在以下方向：

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#186](https://github.com/TinyAGI/tinyclaw/pull/186) | refactor: split monolith into npm workspaces monorepo with SQLite queue | OPEN | 将 flat `src/` 重构为 5 个 npm workspace 包 (`@tinyclaw/core`, `@tinyclaw/teams`, `@tinyclaw/channels`, `@tinyclaw/server`, `@tinyclaw/visualizer`)，用 SQLite 队列替代 BullMQ/Redis，大幅简化架构 |
| [#178](https://github.com/TinyAGI/tinyclaw/pull/178) | feat: add custom provider support and auth token configuration | CLOSED | 新增自定义 Provider 系统，支持任意 OpenAI/Anthropic 兼容端点，新增 `tinyclaw provider` CLI 命令 |
| [#185](https://github.com/TinyAGI/tinyclaw/pull/185) | refactor(cli): migrate interactive prompts to @clack/prompts | OPEN | 将 1500+ 行 bash read 交互迁移到 TypeScript @clack/prompts，提升 UX |
| [#182](https://github.com/TinyAGI/tinyclaw/pull/182) | Auto-trigger agent when task moves to in progress | OPEN | 看板任务拖入 "In Progress" 列时自动触发 Agent |
| [#179](https://github.com/TinyAGI/tinyclaw/pull/179) | fix: add delay after tmux pane creation for shell init | CLOSED | 修复 macOS zsh 启动竞态条件（2秒延迟） |
| [#166](https://github.com/TinyAGI/tinyclaw/pull/166) | feat: add custom OpenAI-compatible provider for self-hosted models | CLOSED | 支持 SGLang、Ollama、vLLM、LM Studio、DeepSeek 等自托管模型 |
| [#39](https://github.com/TinyAGI/tinyclaw/pull/39) | feat: add Telnyx/ClawdTalk voice channel integration | CLOSED | 新增电话语音通道集成，支持呼入/呼出 |
| [#163](https://github.com/TinyAGI/tinyclaw/pull/163) | Multi-agent teams: parallel processing, agent-to-agent communication | CLOSED | 多 Agent 团队支持：并行处理、Agent 间通信、任务链 |
| [#172](https://github.com/TinyAGI/tinyclaw/pull/172) | Modularized channels and added a TUI channel as example | OPEN | 通道模块化，新增 TUI 通道示例 |
| [#177](https://github.com/TinyAGI/tinyclaw/pull/177) | Add chatroom API and real-time CLI viewer | CLOSED | 新增聊天室 REST API 和实时 TUI 查看器 |

**总体评估**：项目正经历重大架构演进（monorepo 化、SQLite 队列替换），同时快速补齐多 Provider、语音、多 Agent 协作等核心功能。

---

## 4. 社区热点

| Issue/PR | 标题 | 评论数 | 状态 |
|---|---|---|---|
| [#156](https://github.com/TinyAGI/tinyclaw/issues/156) | tinyclaw start — all channel/queue processes exit immediately on macOS (zsh shell init race condition) | 2 | CLOSED |
| [#164](https://github.com/TinyAGI/tinyclaw/issues/164) | 0.0.8 update script install 0.0.8. 0.0.9 install script install 0.0.8 | 0 | CLOSED |

**分析**：

- **#156** 是今日讨论最多的 Issue（2 条评论），涉及 macOS 下 zsh 初始化竞态条件导致所有进程立即退出。该问题已通过 PR #179（添加 2 秒延迟）修复。反映出用户对跨平台稳定性的关注。
- **#164** 反映脚本版本号错误，虽无评论但可能影响用户体验。

---

## 5. Bug 与稳定性

| Issue | 描述 | 严重程度 | 状态 | 修复 PR |
|---|---|---|---|---|
| [#156](https://github.com/TinyAGI/tinyclaw/issues/156) | macOS zsh 启动竞态条件导致进程立即退出 | **高** | 已关闭 | [#179](https://github.com/TinyAGI/tinyclaw/pull/179) |
| [#164](https://github.com/TinyAGI/tinyclaw/issues/164) | 更新/安装脚本安装错误版本 (0.0.8 而非 0.0.9) | **中** | 已关闭 | 无 |

**说明**：两个 Bug 均已在昨日关闭，#156 有对应修复 PR，#164 需确认是否需要独立修复 PR。

---

## 6. 功能请求与路线图信号

从今日 PR 可观察到的路线图信号：

1. **Monorepo 架构重构** (#186) — 正在进行中，预计下一版本完成
2. **自定义 Provider 扩展** (#178, #166) — 已支持任意 OpenAI 兼容端点，下一步可能支持更多认证方式
3. **多 Agent 协作** (#163) — 已实现并行处理与 Agent 间通信，可能继续完善任务链与追踪
4. **语音通道** (#39) — Telnyx 集成已完成，语音能力成为稳定功能
5. **CLI 现代化** (#185) — 迁移到 @clack/prompts，预计提升交互体验
6. **TUI 通道** (#172) — 通道模块化示例，可能引入更多通道类型

---

## 7. 用户反馈摘要

从 Issue 评论中提炼：

- **用户痛点**：
  - macOS 下启动失败（进程立即退出）影响实际使用
  - 安装脚本版本号错误导致升级困惑
- **使用场景**：
  - 多通道（Telegram、Discord、语音）接入
  - 自托管模型部署（Ollama、SGLang）
  - 多 Agent 团队协作
- **满意点**：
  - 自定义 Provider 灵活度高
  - 文档持续完善（README 更新）

---

## 8. 待处理积压

| Issue/PR | 标题 | 创建时间 | 状态 | 提醒 |
|---|---|---|---|---|
| [#141](https://github.com/TinyAGI/tinyclaw/pull/141) | feat: Discord guild channels, slash commands, and agent handoff | 2026-02-26 | OPEN | 重要功能 PR，待合并 |
| [#186](https://github.com/TinyAGI/tinyclaw/pull/186) | refactor: split monolith into npm workspaces monorepo | 2026-03-09 | OPEN | 关键架构重构，需关注 |
| [#185](https://github.com/TinyAGI/tinyclaw/pull/185) | refactor(cli): migrate to @clack/prompts | 2026-03-09 | OPEN | UX 改进，待合并 |
| [#182](https://github.com/TinyAGI/tinyclaw/pull/182) | Auto-trigger agent when task moves to in progress | 2026-03-09 | OPEN | 看板自动化功能，待审查 |
| [#183](https://github.com/TinyAGI/tinyclaw/pull/183) | Remove message_received event and simplify office UI | 2026-03-09 | OPEN | UI 简化，待合并 |
| [#172](https://github.com/TinyAGI/tinyclaw/pull/172) | Modularized channels and TUI channel | 2026-03-09 | OPEN | 通道扩展，待审查 |

**提醒维护者**：上述 6 条 OPEN PR 均在近 2 天内更新，建议优先处理 #141（Discord 功能）和 #186（架构重构），以保持功能迭代节奏。

---

*报告生成时间：2026-03-10 | 数据来源：GitHub TinyClaw Repository*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*