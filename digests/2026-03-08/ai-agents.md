# OpenClaw 生态日报 2026-03-08

> Issues: 500 | PRs: 500 | 覆盖项目: 10 个 | 生成时间: 2026-03-08 02:27 UTC

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

**报告日期**: 2026-03-08  
**数据来源**: GitHub (github.com/openclaw/openclaw)

---

## 1. 今日速览

过去 24 小时内，OpenClaw 项目保持高度活跃状态：**500 条 Issues 更新**（297 新开/活跃，203 关闭），**500 条 PR 更新**（273 待合并，227 已合并/关闭）。未发布新版本。项目整体呈现高提交频率和多线并行的开发态势，多个关键 Bug 和功能优化正在同步推进。社区讨论热度集中在 OAuth 认证、平台兼容性和 API 稳定性方面。

---

## 2. 版本发布

**本期无新版本发布**。项目最新稳定版本信息请查阅 GitHub Releases 页面。

---

## 3. 项目进展

以下为今日合并/关闭的重要 PR，体现了项目在功能完善、Bug 修复和安全加固方面的进展：

| PR | 标题 | 状态 | 关键进展 |
|---|---|---|---|
| [#39355](https://github.com/openclaw/openclaw/pull/39355) | Gateway: stop and restart unmanaged listeners | **CLOSED** | 解决容器环境下 gateway stop/restart 因缺少服务管理器单元而失败的问题 |
| [#38619](https://github.com/openclaw/openclaw/pull/38619) | fix(discord): split CJK text at natural boundaries | **CLOSED** | 修复 Discord 消息超过 2000 字符限制时 CJK 文本被错误截断的问题 |
| [#39067](https://github.com/openclaw/openclaw/pull/39067) | Gateway: add safer password-file input | **CLOSED** | 新增 `openclaw gateway run --password-file` 选项，避免密码在进程列表中暴露 |
| [#39385](https://github.com/openclaw/openclaw/pull/39385) | fix(signal): add groups config to schema | **CLOSED** | 为 Signal 群组添加 per-group `requireMention` 配置支持 |
| [#39301](https://github.com/openclaw/openclaw/pull/39301) | fix(ui): preserve selected agent after config save | **CLOSED** | 修复 Agents 页面保存配置后 UI 重置为默认代理的回归问题 |
| [#12191](https://github.com/openclaw/openclaw/pull/12191) | fix: guard against undefined model.input | **CLOSED** | 修复自定义提供商（如 xAI/Grok、Ollama）模型缺少 `input` 属性导致的 TypeError |

---

## 4. 社区热点

以下为今日讨论最活跃的 Issues，反映用户最迫切的诉求和痛点：

### 讨论热度 TOP 5 Issues

| Issue | 标题 | 评论数 | 点赞数 | 状态 |
|---|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | [enhancement] Linux/Windows Clawdbot Apps | **34** | 58 | OPEN |
| [#34810](https://github.com/openclaw/openclaw/issues/34810) | [Bug] OpenClaw 突然丢失文件系统工具 (exec/read/write) | **29** | 7 | CLOSED |
| [#32828](https://github.com/openclaw/openclaw/issues/32828) | [Bug] 所有模型均报 "API rate limit reached" 误报 | **24** | 5 | OPEN |
| [#36399](https://github.com/openclaw/openclaw/issues/36399) | [Bug] OAuth (google-gemini-cli) 多步工具调用严重卡顿 60s | **18** | 0 | OPEN |
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | [Bug] macOS app v2026.2.26 仅 arm64，Intel Mac 无法运行 | **17** | 2 | OPEN |

### 热点分析

- **平台覆盖诉求**：Issue #75 持续关注 Linux/Windows 平台 Apps 缺失，用户期待与 macOS/iOS/Android 相同的功能体验
- **认证问题集中**：多个 Issues 涉及 OAuth 认证失败、API 密钥失效、SSRF 保护误拦截等问题
- **回归问题频发**：近期多个回归 Bug 影响用户体验（如 #28877 macOS 通用二进制回退、#33225 非交互式 onboarding 后无法写文件）

---

## 5. Bug 与稳定性

以下为今日报告的关键 Bug，按严重程度排列：

### 高优先级（影响核心功能）

| Issue | 标题 | 类型 | 状态 | 备注 |
|---|---|---|---|---|
| [#34810](https://github.com/openclaw/openclaw/issues/34810) | OpenClaw 突然丢失文件系统工具 | **Bug: Behavior** | CLOSED | 4:00 AM ET 突发，已关闭 |
| [#32828](https://github.com/openclaw/openclaw/issues/32828) | 所有模型误报 "API rate limit reached" | **Bug: Behavior** | OPEN | API 正常工作但 OpenClaw 误报 |
| [#36399](https://github.com/openclaw/openclaw/issues/36399) | OAuth google-gemini-cli 60s 卡顿 | **Bug: Crash** | OPEN | 多步工具调用静默 HTTP 429 重试 |
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | macOS v2026.2.26 仅 arm64 | **Regression** | OPEN | Intel Mac 立即崩溃 |
| [#36994](https://github.com/openclaw/openclaw/issues/36994) | Exec 和工具持续失效 | **Regression** | OPEN | 首次运行后持续失效 |

### 中优先级

| Issue | 标题 | 类型 | 状态 |
|---|---|---|---|
| [#11805](https://github.com/openclaw/openclaw/issues/11805) | EC2/headless 服务器 gateway status 失败 | Bug | CLOSED |
| [#36008](https://github.com/openclaw/openclaw/issues/36008) | systemctl is-enabled 不可用 | Regression | CLOSED |
| [#39081](https://github.com/openclaw/openclaw/issues/39081) | Windows Gateway PATH 不完整，工具找不到 | Bug | CLOSED |

---

## 6. 功能请求与路线图信号

以下为用户提出的新功能需求，部分已有相关 PR 推进：

### 高需求功能请求

| Issue | 功能描述 | 状态 | 相关 PR |
|---|---|---|---|
| [#27009](https://github.com/openclaw/openclaw/issues/27009) | 支持 OpenCode Go 订阅（Kimi K2.5, GLM-5 等） | OPEN | — |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 提供预编译 Android APK 发布 | OPEN | — |
| [#2317](https://github.com/openclaw/openclaw/issues/2317) | 添加 SearXNG 作为 Brave Search 备选提供商 | OPEN | — |
| [#28744](https://github.com/openclaw/openclaw/issues/28744) | Agent 接收并识别图片内容（视觉能力） | OPEN | — |
| [#25145](https://github.com/openclaw/openclaw/issues/25145) | 出站消息审批门（消息/执行工具的预发送钩子） | OPEN | — |

### 已在推进的功能

- **PR #39368**: exec 工具自定义 shell 路径支持（解决 Windows 默认 PowerShell 无法配置问题）
- **PR #39364**: browser relay 绑定地址可配置（支持 WSL2 环境）
- **PR #39363**: voice-call 延迟初始 TTS 至媒体流连接

---

## 7. 用户反馈摘要

### 核心痛点

1. **认证与 API 可靠性**
   - 多位用户报告 OAuth 认证失败、API 密钥失效、rate limit 误报等问题
   - SSRF 保护机制在代理环境下频繁误拦截 Discord CDN 等合法请求（#33086）

2. **平台兼容性**
   - Linux/Windows 平台 Apps 缺失
   - macOS Intel 版本回归问题影响大量用户
   - ARM 服务器（OCI A1）无 GPU 环境下 Ollama 无限等待

3. **性能与稳定性**
   - Gateway 延迟显著（相比直接 Ollama 约 10 秒）
   - Discord WebSocket 频繁断开，回退机制无效
   - 多账户设置下健康监控错误重启所有渠道

4. **配置与调试困难**
   - 配置文件验证失败时安全设置被静默重置为不安全的默认值（#5052）
   - 长期运行会话压缩后 thinking block 签名损坏导致 API 调用失败（#36229）

### 积极反馈

- 多位用户对项目多渠道支持和社区响应速度表示认可
- 新版本在部分场景下性能有所提升

---

## 8. 待处理积压

以下为长期未响应的关键 Issue，提醒维护者关注：

| Issue | 标题 | 创建时间 | 状态 | 积压天数 |
|---|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 2026-01-01 | OPEN | 66 天 |
| [#2317](https://github.com/openclaw/openclaw/issues/2317) | SearXNG fallback provider | 2026-01-26 | OPEN | 41 天 |
| [#5116](https://github.com/openclaw/openclaw/issues/5116) | iMessage FDA 不通过 LaunchAgent 传播 | 2026-01-31 | OPEN | 36 天 |
| [#3181](https://github.com/openclaw/openclaw/issues/3181) | 心跳循环触发过度模型调用 | 2026-01-28 | OPEN | 39 天 |
| [#5813](https://github.com/openclaw/openclaw/issues/5813) | agentToAgent.enabled: true 子代理无法启动 | 2026-02-01 | OPEN | 35 天 |

---

**报告生成时间**: 2026-03-08  
**数据统计周期**: 过去 24 小时（截至 2026-03-08）

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态横向对比分析报告

**报告日期**: 2026-03-08  
**数据周期**: 过去 24 小时

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现**多极分化、垂直深耕**的格局。以 OpenClaw 为首的头部项目保持极高提交频率（单日 500 条 Issue/PR 更新），而 EasyClaw、TinyClaw 等项目已进入维护模式。技术演进上，**安全硬化**（ZeptoClaw）、**多运行时支持**（NanoClaw、NanoBot）、**跨平台兼容性**（LobsterAI、PicoClaw）成为差异化竞争的主战场。值得关注的是，**本地模型部署（Ollama）支持不足**和**OAuth/认证问题**是全生态的共性痛点，尚未出现统一的成熟解决方案。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 版本发布 | 活跃度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500 (297 新开/活跃) | 500 (273 待合并) | 无 | 🟢 极高 |
| **NanoBot** | 27 (20 新开) | 72 (48 待合并) | 无 | 🟢 极高 |
| **IronClaw** | 31 (27 新开) | 50 (34 待合并) | 无 | 🟢 极高 |
| **ZeptoClaw** | 未详 | 6 已合并 | v0.7.0, v0.7.1 | 🟢 高（安全主题） |
| **PicoClaw** | 19 (13 新开) | 44 (29 待合并) | 无 | 🟢 高 |
| **NanoClaw** | 7 (5 新开) | 50 (36 待合并) | 无 | 🟢 高 |
| **Zeroclaw** | 16 (11 新开) | 50 (45 待合并) | 无 | 🟢 高 |
| **LobsterAI** | 9 新开 | 23 已合并 | v0.2.1 | 🟢 高 |
| **EasyClaw** | 1 已关闭 | 0 | v1.6.2 | 🟡 低（维护阶段） |
| **TinyClaw** | 1 新开 | 1 已关闭 | 无 | 🔴 低 |

---

## 3. OpenClaw 在生态中的定位

OpenClaw 作为**核心参照项目**，在生态中占据以下独特位置：

| 维度 | OpenClaw 表现 | 生态对比 |
|---|---|---|
| **规模领先** | 单日 500 条 Issue/PR 更新，远超第二梯队（NanoBot、IronClaw 50-72 条） | 头部效应显著，规模约为第二梯队的 7-10 倍 |
| **功能完备性** | 覆盖 7+ 渠道（Telegram、Discord、Signal 等），多 Provider 支持 | 生态最全，但 PicoClaw（QQ/企业微信）、NanoBot（DingTalk）等在特定渠道有优势 |
| **安全响应** | 高优先 Bug 均在 24 小时内处理 | ZeptoClaw 以安全硬化为差异化方向（本期修复 5+ SSRF/路径遍历漏洞） |
| **社区活跃度** | Issue #75（Linux/Windows Apps）积压 66 天 | NanoClaw #80（多运行时支持）积压 32 天；IronClaw #324（Telegram）积压 13 天 |

**技术路线差异**：OpenClaw 采取“大而全”策略，强调多渠道、多 Provider 兼容；ZeptoClaw 聚焦安全基础设施；NanoClaw/NanoBot 侧重多运行时和记忆系统；PicoClaw 深耕中文社区（QQ、企业微信）。

---

## 4. 共同关注的技术方向

以下需求在**多个项目**中同步出现，反映生态共性趋势：

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **本地模型（Ollama/vLLM）支持** | OpenClaw, NanoBot, PicoClaw, NanoClaw | 配置复杂、无响应、Request timed out（#34810, #174, #1161） |
| **OAuth/认证可靠性** | OpenClaw, IronClaw, NanoBot | OAuth 失败、API 密钥失效、SSRP 误拦截（#36399, #693） |
| **多 Provider/运行时支持** | NanoClaw, NanoBot, TinyClaw | 摆脱 Anthropic 锁定，支持 OpenCode、Gemini、Ollama（#80, #193） |
| **平台兼容性** | OpenClaw, LobsterAI, PicoClaw | macOS Intel 回归、Linux/Windows Apps 缺失、ARM 服务器支持 |
| **安全硬化** | ZeptoClaw, OpenClaw, NanoClaw | 路径验证、SSRF 防护、容器权限沙箱（#271, #280, #277） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构 |
|---|---|---|---|
| **OpenClaw** | 全功能通用 Agent | 开发者、爱好者 | Go，后端 Gateway + 前端 UI |
| **ZeptoClaw** | 安全基础设施 | 企业用户、高安全场景 | Rust，强调沙箱与路径验证 |
| **NanoClaw** | 多运行时、知识管理 | 高级用户、私有部署 | 强调多 LLM Runtime 抽象 |
| **IronClaw** | Routine/Job 调度 | 开发者、SaaS 集成 | FullJob 模式、worker 事件持久化 |
| **PicoClaw** | 中文渠道集成 | 中文开发者、企业 | QQ、企业微信、Telegram |
| **LobsterAI** | 桌面客户端、跨平台 | 普通用户 | 桌面端内置 Python 运行时 |
| **EasyClaw** | macOS 兼容性 | macOS 用户 | 极简维护模式 |
| **TinyClaw** | 多 CLI Provider | 开发者尝鲜 | 轻量级、CLI 工具集合 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（高活跃度）

- **OpenClaw / NanoBot / IronClaw**：单日 PR 吞吐量 50+，功能快速推进但积压 Issue 较多
- **ZeptoClaw**：安全主题驱动，本期发布两个版本，修复 5+ 漏洞

### 质量巩固阶段

- **EasyClaw**：新版本 v1.6.2 聚焦 Bug 修复，无新功能 PR
- **LobsterAI**：v0.2.1 刚发布，正处于稳定性验证期

### 低活跃/停滞风险

- **TinyClaw**：单日 1 Issue + 1 PR，社区响应弱
- **NanoClaw**：存在长期积压（#80 32天无响应、#212 阻塞 23天）

---

## 7. 值得关注的趋势信号

### 🔴 高优先级趋势

1. **本地部署成为刚需**：Ollama/vLLM 相关 Issue 在 OpenClaw、NanoBot、PicoClaw 均进入 Top 3，反映私有化/离线部署需求的爆发
2. **认证可靠性是生态短板**：OAuth 失败、API 密钥问题、SSRF 误拦截集中爆发，影响生产可用性
3. **安全硬化进入系统化阶段**：ZeptoClaw 的 per-template capability sandbox 预示“安全作为模板属性”的新范式

### 🟡 中期趋势

1. **多运行时竞争加剧**：NanoClaw #80 获得 36 👍，用户对 Anthropic 锁定风险的担忧正在转化为行动
2. **Routine/Job 模式走向成熟**：IronClaw 的 FullJob routine + 事件持久化代表 Agent 任务调度的演进方向
3. **中文渠道差异化**：PicoClaw 的 QQ/企业微信、LobsterAI 的飞书集成服务特定市场需求

### 建议

- **对 AI 智能体开发者**：优先解决 Ollama 本地部署体验和 OAuth 可靠性，这两点是全生态的共性阻塞点
- **对企业用户**：关注 ZeptoClaw 的安全硬化进展，其 per-template sandbox 可能成为行业标杆
- **对生态贡献者**：避开 OpenClaw 的成熟领域，选择 PicoClaw（中文渠道）、NanoClaw（多运行时）等差异化方向更容易获得认可

---

*本报告基于 2026-03-08 GitHub 公开数据生成，仅供技术决策参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报

**2026-03-08**

---

## 1. 今日速览

过去24小时内，Zeroclaw 项目保持高度活跃状态。Issues 更新 16 条（新开/活跃 11 条，关闭 5 条），PR 更新 50 条（待合并 45 条，已合并/关闭 5 条）。今日无新版本发布，但有多个功能 PR 正在推进，包括 Anthropic 视觉支持、Mistral Voxtral 语音转录、QQ bot 消息渲染等。社区讨论热度较高，主要集中在版本发布资产缺失、配置问题和多平台集成方面。整体项目健康度良好，持续迭代中。

---

## 2. 版本发布

**无新版本发布**

过去24小时内未检测到新版本发布。值得注意的是，Issue #2921 报告 v0.1.8 release 缺少二进制资产，这可能导致用户安装问题。

---

## 3. 项目进展

今日共有 5 个 PR 被合并/关闭，项目持续向前推进：

| PR | 标题 | 状态 | 推进内容 |
|---|---|---|---|
| #2965 | fix(mistral): omit null tool call fields | CLOSED | 修复 Mistral 严格 OpenAI 兼容模式下 422 验证错误 |
| #2928 | chore: migrate to single master branch model | CLOSED | 迁移至单一 master 分支模型，更新维护者 |
| #2944 | feat(config): make compatible timeout and tool-repeat policy configuration | CLOSED | 配置超时和工具重复策略（#2967 替代版本） |
| #2778 | feat(channel): Add Mistral Voxtral support for voice transcription | CLOSED | 添加 Mistral Voxtral 语音转录支持 |
| #2776 | 同上（另一个合并） | CLOSED | 同上 |

**重要进展**：
- **发布流程优化**：PR #2962 正在进行中，计划改用每日 beta 发布模式，替换有问题的 release 插件
- **分支策略统一**：PR #2928 已合并，结束 dev/main 双分支模型，统一使用 master

---

## 4. 社区热点

以下 Issues/PRs 今日讨论最活跃（按评论数排序）：

### 热门 Issues

| Issue | 标题 | 评论数 | 热度分析 |
|---|---|---|---|
| #1717 | [Bug] Compilation error in lark.rs with channel-lark feature | 8 | S1 严重阻塞问题，涉及编译错误 |
| #848 | [Bug] Can't get web search tool working | 5 | 工具超时问题 |
| #2921 | v0.1.8 release has no binary assets | 5 | 发布流程问题，影响安装 |
| #2929 | [Bug] Quick clarification: master vs main | 4 | 分支策略困惑 |

### 热门 PRs

| PR | 标题 | 状态 |
|---|---|---|
| #2976 | chore: update .gitignore, CODEOWNERS, and dependabot configuration | OPEN |
| #2975 | fix(skills): preserve always-on skill prompts in compact mode | OPEN |
| #2974 | [ISSUE #2973] fix: update response handling in loop_ to avoid unnecessary cloning | OPEN |
| #2971 | feat(provider): add vision support to anthropic provider | OPEN |
| #2968 | feat(transcription): add Mistral Voxtral support for voice transcription | OPEN |

**热点分析**：v0.1.8 缺失二进制资产引发社区关注（5 条评论），可能影响用户安装体验。此外，分支策略（master vs main）的澄清需求也较为迫切。

---

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列：

### S1 - 阻塞性问题（立即处理）

| Issue | 标题 | 状态 | Fix 进度 |
|---|---|---|---|
| #1717 | Compilation error in lark.rs with channel-lark feature | CLOSED | 已关闭 |
| #2961 | 网页无法使用agent对话 | OPEN | 待处理 |
| #2947 | docker web configuration saving config.toml gives HTTP 500 error | OPEN | 待处理 |

### S2 - 退化行为

| Issue | 标题 | 状态 | Fix 进度 |
|---|---|---|---|
| #2960 | Browser pairing persistance is broken | OPEN | 待处理 |
| #2953 | Add channel-matrix flag in official builds | OPEN | 待处理 |
| #848 | Can't get web search tool working | CLOSED | 已关闭 |
| #1391 | Open-skills fail audit | CLOSED | 已关闭 |

### S3 - 轻微问题

| Issue | 标题 | 状态 |
|---|---|---|
| #2929 | Quick clarification: master vs main | OPEN |
| #2941 | web_fetch allowed_domains serde default bug | OPEN |

**稳定性小结**：今日关闭 5 个 Issues，包括 2 个 S1 阻塞问题（#1717 编译错误、#848 工具超时）。仍存在 3 个 S1 问题待处理，主要是网页端对话和 Docker 配置保存。

---

## 6. 功能请求与路线图信号

今日新增功能请求（按发布时间排序）：

| Issue | 功能描述 | 潜在价值 |
|---|---|---|
| #2973 | 优化循环运行返回结果的打印性能 | 性能优化，预计被纳入（已有 PR #2974） |
| #2972 | 为插件实现安全沙箱（wasm/独立进程） | 安全增强，社区安全呼声高 |
| #2963 | 为慢速/本地 LLM 工作负载添加可配置 pace 控制 | 体验优化，本地模型用户需求 |
| #2958 | 添加 QQ bot Markdown 和多媒体消息渲染支持 | 平台集成，中国社区需求 |

**已纳入路线图的信号**（通过相关 PR 判断）：
- ✅ **Anthropic 视觉支持**：PR #2971 正在进行
- ✅ **Mistral Voxtral 语音转录**：PR #2968/#2778 已合并
- ✅ **OpenAI Flex 服务层**：PR #2969 正在进行
- ✅ **上下文限制可配置**：PR #2970 正在进行

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的关键用户痛点：

### 用户痛点

1. **安装问题**（Issue #2921）
   - v0.1.8 缺失预编译二进制，导致 Linux 安装脚本失效
   - 用户无法通过官方渠道快速部署

2. **分支策略困惑**（Issue #2929）
   - GitHub 默认分支为 master，但文档指向 main
   - 贡献者不知应向哪个分支提交 PR

3. **平台集成缺失**（Issue #2953）
   - 官方构建未包含 channel-matrix 标志
   - Matrix 用户无法正常使用

### 积极反馈

- Issue #2208（cortex-mem 支持）已关闭，功能已实现
- 多个 Slack 相关问题已修复（#2964）

---

## 8. 待处理积压

以下 Issues/PR 超过 48 小时未获响应，需维护者关注：

### 长期未响应 Issues

| Issue | 标题 | 创建时间 | 状态 | 建议 |
|---|---|---|---|---|
| #2921 | v0.1.8 release has no binary assets | 2026-03-06 | OPEN | 高优先级，影响用户体验 |
| #2953 | Add channel-matrix flag in official builds | 2026-03-07 | OPEN | 中优先级，平台支持 |
| #2961 | 网页无法使用agent对话 | 2026-03-07 | OPEN | S1 阻塞问题 |
| #2947 | docker web configuration HTTP 500 error | 2026-03-07 | OPEN | S1 阻塞问题 |

### 长期未响应 PRs

| PR | 标题 | 创建时间 | 状态 |
|---|---|---|---|
| #2017 | feat(providers): add Avian as OpenAI-compatible provider | 2026-02-27 | OPEN |
| #2952 | Fix: Address clippy pedantic warnings | 2026-03-07 | OPEN |

**建议**：优先处理 #2921（二进制资产缺失）和 #2961/#2947（S1 阻塞问题），以改善用户体验。

---

*报告生成时间：2026-03-08 | 数据来源：GitHub Zeroclaw 项目*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报

**2026年3月8日**

---

## 1. 今日速览

今日项目整体保持低活跃状态。**Issue #11** 已关闭，PR 合并数为 0，但发布了 **v1.6.2** 新版本。项目当前处于维护性更新阶段，主要聚焦于发布后稳定性验证。社区反馈渠道保持开放，但新增互动有限。建议关注新版本发布后的用户反馈收集情况。

---

## 2. 版本发布

### ✅ v1.6.2 发布

**发布说明：** 此次更新主要针对 macOS 用户提供了 Gatekeeper 签名问题的官方解决指引。

**关键内容：**
- 针对 macOS Gatekeeper 拦截未签名应用的问题，提供了官方临时解决方案
- 通过终端命令 `xattr -cr` 移除隔离属性即可正常运行
- 明确说明文件未被损坏，消除用户误解

**破坏性变更：** 无

**迁移注意事项：** 无需迁移，这是面向用户的临时兼容性修复。

**参考链接：** https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.2

---

## 3. 项目进展

过去 24 小时无 PR 合并或关闭。项目整体推进暂时放缓，可能与新版本刚发布有关，需等待后续功能迭代。

---

## 4. 社区热点

### 📢 Issue #11: 更新 1.5.16 后异常

- **链接：** https://github.com/gaoyangz77/easyclaw/issues/11
- **状态：** 已关闭
- **评论数：** 4
- **作者：** @kichy-ge
- **创建时间：** 2026-03-06
- **更新时间：** 2026-03-07

**分析：** 该 Issue 引发了一定讨论（4条评论），用户报告了更新至 1.5.16 版本后出现异常（附带了2张异常截图）。Issue 已在 2026-03-07 关闭，表明问题已得到解决或已确认无需处理。具体的解决方案未在数据中体现，但从时间线来看，维护者可能在 24 小时内进行了响应。

---

## 5. Bug 与稳定性

### 🐞 今日报告 Bug

| Issue | 描述 | 严重程度 | 状态 | Fix PR |
|-------|------|----------|------|--------|
| #11 | 更新 1.5.16 后程序异常 | 中 | 已关闭 | 无 |

**说明：** Issue #11 附带了2张异常截图，但具体错误类型未在摘要中体现。该问题已关闭，建议查看完整 Issue 内容以获取详细信息。

---

## 6. 功能请求与路线图信号

今日无新增功能请求或路线图相关讨论。

---

## 7. 用户反馈摘要

从 Issue #11 的评论互动中可提炼以下用户痛点：

- **问题场景：** 用户在更新至 1.5.16 版本后遇到程序异常
- **用户诉求：** 寻求问题原因及解决方案
- **满意度信号：** Issue 已关闭，问题可能已解决，用户满意度有待进一步确认

**使用场景推测：** 该工具可能涉及 macOS 平台的第三方应用管理或系统工具类功能。

---

## 8. 待处理积压

今日无长期未响应的 Issue 或 PR 需要提醒。Issue #11 已于近期关闭，项目当前无明显积压问题。

---

*本日报基于 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-08)

## 1. 今日速览

LobsterAI 项目在 2026-03-07 保持高度活跃，24 小时内合并/关闭了 **23 个 PR**，并发布了 **v0.2.1** 新版本。项目延续了快速迭代节奏，主要集中在 UI 交互优化、跨平台兼容性修复（Windows/Mac）以及批量删除等实用功能。社区反馈活跃，共产生 **9 条新 Issues**，用户关注点集中在 Ollama 本地模型调用、飞书集成及数据迁移兼容性方面。

---

## 2. 版本发布

### v0.2.1 发布 ✅

**发布说明**：本次版本带来了批量删除任务、Stepfun 模型支持等新功能，同时修复了多个 UI 和跨平台问题。

| PR | 描述 |
|---|---|
| [#327](https://github.com/netease-youdao/LobsterAI/pull/327) | add batch delete |
| [#237](https://github.com/netease-youdao/LobsterAI/pull/237) | add Stepfun provider with Step 3.5 Flash and custom icon |

> 📌 **迁移注意事项**：暂无破坏性变更报告。

---

## 3. 项目进展

过去 24 小时项目合并了 **23 个 PR**，以下是核心推进的功能与修复：

### 功能增强
| PR | 描述 | 贡献者 |
|---|---|---|
| [#326](https://github.com/netease-youdao/LobsterAI/pull/326) | 支持批量删除任务，侧边栏操作菜单新增批量操作入口 | @liuzhq1986 |
| [#324](https://github.com/netease-youdao/LobsterAI/pull/324) | UI 优化：添加输入框密码显示切换、修复低分辨率图标模糊、侧边栏高亮丢失 | @liuzhq1986 |
| [#192](https://github.com/netease-youdao/LobsterAI/pull/192) | Windows 端内置 Python 运行时支持 | @fisherdaddy |

### 跨平台 Bug 修复
| PR | 描述 | 平台 |
|---|---|---|
| [#325](https://github.com/netease-youdao/LobsterAI/pull/325) | 修复 Windows 聊天 streaming 滚动异常、输入框卡顿 | Windows |
| [#308](https://github.com/netease-youdao/LobsterAI/pull/308) | 修复 Windows 端无法使用应用内置 node | Windows |
| [#304](https://github.com/netease-youdao/LobsterAI/pull/304) | 修复 Windows 端沙箱不能用，更新沙箱镜像 | Windows |
| [#301](https://github.com/netease-youdao/LobsterAI/pull/301) | 修复 mac 沙箱相关问题 | macOS |
| [#297](https://github.com/netease-youdao/LobsterAI/pull/297) | 修复 Windows 端任务回答时 cmd 弹出的 bug | Windows |
| [#295](https://github.com/netease-youdao/LobsterAI/pull/295) | 修复 Windows 报错无法启动 cc 的问题 | Windows |

### 稳定性修复
| PR | 描述 |
|---|---|
| [#280](https://github.com/netease-youdao/LobsterAI/pull/280) | 修复 cowork 时间默认为 UTC 的问题 |
| [#274](https://github.com/netease-youdao/LobsterAI/pull/274) | 修复底层 LLM 报错时任务详情延迟报错的问题 |
| [#194](https://github.com/netease-youdao/LobsterAI/pull/194) | 同名模型在不同 provider 下的选择逻辑修复 |

---

## 4. 社区热点

以下 Issues 评论最多，值得关注：

### 🔥 #174 希望加强调用Ollama的能力
- **作者**: @Gitnetbot
- **评论数**: 3
- **链接**: https://github.com/netease-youdao/LobsterAI/issues/174
- **摘要**: 用户反馈 Ollama 本地模型调用问题频发，包括 Request timed out、长时间无响应等，从 0.1.17 到 0.1.22 多个版本均未解决。

### 🔥 #188 skill默认是全开的，但是啥都调用不了
- **作者**: @jeff-wangzhen
- **评论数**: 3
- **链接**: https://github.com/netease-youdao/LobsterAI/issues/188
- **摘要**: 用户反馈 skill 功能无法正常使用，怀疑与 cygpath 依赖相关。

### 🔥 #329 【问题】0.2.1版本飞书机器人添加连接不通
- **作者**: @xiaolietu
- **评论数**: 1
- **链接**: https://github.com/netease-youdao/LobsterAI/issues/329
- **摘要**: 0.2.1 版本飞书机器人配置后无法连接，用户确认 ID、Secret 及权限配置无误。

---

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#323](https://github.com/netease-youdao/LobsterAI/issues/323) | macOS 15.6.1 M1 系统任务无法输出，任务对话框卡住 | 否 |
| 🔴 高 | [#329](https://github.com/netease-youdao/LobsterAI/issues/329) | 0.2.1 版本飞书机器人连接不通 | 否 |
| 🟠 中 | [#314](https://github.com/netease-youdao/LobsterAI/issues/314) | ComfyUI 生成的图片无法发送到飞书，报错 400 | 否 |
| 🟠 中 | [#317](https://github.com/netease-youdao/LobsterAI/issues/317) | 卸载 0.124 安装 0.2 后历史对话全部丢失 | 否 |
| 🟠 中 | [#318](https://github.com/netease-youdao/LobsterAI/issues/318) | 定时任务手工编辑后变成 nan:nan | 否 |
| 🟡 低 | [#150](https://github.com/netease-youdao/LobsterAI/issues/150) | Ollama 本地部署模型无法使用 | 部分相关 [#174](#-174-希望加强调用ollama的能力) |

---

## 6. 功能请求与路线图信号

### 📌 功能建议

**#322** [功能建议：支持配置驱动的多 Agent 自定义（CLI 命令行 + 桌面端图形界面）](https://github.com/netease-youdao/LobsterAI/issues/322)
- **作者**: @isaiah5818
- **需求**: 当前多 Agent 自定义需编写 Python 代码，门槛较高；建议支持配置文件方式自定义 Agent、角色及层级关系。
- **👍**: 1

**#318** [定时任务手工设置](https://github.com/netease-youdao/LobsterAI/issues/318)
- 用户呼吁支持手工编辑定时任务间隔，而非仅依赖 AI 生成。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实痛点：

| 场景 | 反馈 |
|---|---|
| **本地模型部署** | Ollama 本地调用问题频发，用户尝试多个版本（0.1.17~0.1.22）均失败，主要表现为 Request timed out、长时间转圈无响应 |
| **飞书集成** | 新版本飞书机器人连接失败、图片发送报错 400，用户已确认配置无误 |
| **版本升级兼容性** | 从旧版本升级到 0.2 后历史对话丢失，用户呼吁数据迁移保留 |
| **跨平台稳定性** | macOS M1 任务无法输出、Windows 端沙箱异常等问题影响用户体验 |
| **功能可用性** | Skill 默认全开但无法调用；定时任务手工编辑后数据异常 |

---

## 8. 待处理积压

以下 Issue 长时间未响应，建议维护者关注：

| Issue | 创建时间 | 状态 | 描述 |
|---|---|---|---|
| [#150](https://github.com/netease-youdao/LobsterAI/issues/150) | 2026-02-27 | OPEN | 没法用，用ollama本地部署模型 |
| [#174](https://github.com/netease-youdao/LobsterAI/issues/174) | 2026-02-28 | OPEN | 希望加强调用Ollama的能力 |
| [#188](https://github.com/netease-youdao/LobsterAI/issues/188) | 2026-02-28 | OPEN | skill默认是全开的，但是啥都调用不了 |

> ⚠️ 以上 3 个 Issue 创建于 2026-02-27~28，距今已约一周未得到官方回复，其中 **Ollama 本地调用问题** 多次被用户提及，可能影响一批本地部署用户的使用体验。

---

*📊 本报告基于 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-08)

## 今日速览

ZeptoClaw 项目在 2026-03-07 迎来高强度开发日：24小时内合并/关闭 **6个PR**，同时发布 **v0.7.0** 和 **v0.7.1** 两个版本，安全加固成为本周期核心主题。项目围绕路径验证、SSRF防护、挂载检查等维度完成系统性安全硬化，同时新增 per-template 能力沙箱和代码覆盖率工具，进展显著。当前有 **1个PR待合并**（#283 grep/find/diff 工具），社区活跃度较高。

---

## 版本发布

### ✅ v0.7.1 - 安全加固小版本

**发布说明**：https://github.com/qhkm/zeptoclaw/releases/tag/v0.7.1

| 变更类型 | PR | 描述 |
|---------|-----|------|
| 新功能 | [#279](https://github.com/qhkm/zeptoclaw/pull/279) | per-template capability sandbox（模板级能力沙箱） |
| 安全修复 | [#281](https://github.com/qhkm/zeptoclaw/pull/281) | 加固轻量级挂载验证，防范 symlink/hardlink 绕过 |

**迁移注意事项**：无破坏性变更

---

### ✅ v0.7.0 - 安全硬化与新集成

**发布说明**：https://github.com/qhkm/zeptoclaw/releases/tag/v0.7.0

**核心焦点**：Security Hardening

- Shell 执行、文件访问、网络请求、Skill 安装全链路安全加固
- 新增 Provider 集成与 Channel 改进
- 路径验证强化（详见下方安全 PR）

---

## 项目进展

今日合并/关闭 **6个 PR**，项目在安全基础设施方面取得重大进展：

| PR | 状态 | 类型 | 进展说明 |
|----|------|------|----------|
| [#279](https://github.com/qhkm/zeptoclaw/pull/279) | ✅ Merged | Feature | **per-template capability sandbox**：新增模板级声明式沙箱，支持 tool allowlist、shell 命令白名单、资源限制 |
| [#281](https://github.com/qhkm/zeptoclaw/pull/281) | ✅ Merged | Security | **挂载验证硬化**：修复 symlink/hardlink 绕过 blocked-pattern 检查 |
| [#278](https://github.com/qhkm/zeptoclaw/pull/278) | ✅ Merged | Security | **路径验证加固**：修复 dangling symlink 逃逸（R1/R2/R3） |
| [#272](https://github.com/qhkm/zeptoclaw/pull/272) | ✅ Merged | Security | **浏览器 SSRF 防护**：CDP Fetch 拦截实现 redirect chain 验证 |
| [#276](https://github.com/qhkm/zeptoclaw/pull/276) | ✅ Merged | CI/CD | **代码覆盖率**：集成 cargo-llvm-cov + Codecov |
| [#273](https://github.com/qhkm/zeptoclaw/pull/273) | ✅ Merged | CI/CD | **测试可靠性**：切换至 cargo-nextest，防止 OOM 导致测试静默失败 |

---

## 社区热点

### 🔥 最高关注度 Issue/PR

| 议题 | 类型 | 热度 | 链接 |
|------|------|------|------|
| feat: per-template capability sandbox | Feature | 高（关联 #222） | [PR #279](https://github.com/qhkm/zeptoclaw/pull/279) / [Issue #222](https://github.com/qhkm/zeptoclaw/issues/222) |
| feat: add grep, find, and unified diff edit tools | Feature | 中 | [PR #283](https://github.com/qhkm/zeptoclaw/pull/283) / [Issue #282](https://github.com/qhkm/zeptoclaw/issues/282) |

**分析**：per-template capability sandbox 是本期核心功能亮点，将模板升级为"自描述安全工件"，允许模板声明其可使用的工具列表、shell 白名单和资源配额。社区对该能力的呼声较高（#222 于 3月3日创建，7日合并）。

grep/find/diff 工具补全了从 pi-rs 迁移的代码编辑工作流，是工具链完善的重要信号。

---

## Bug 与稳定性

### 🐞 已修复的安全漏洞（本期重点）

| 严重程度 | Issue | 问题描述 | Fix PR |
|---------|-------|----------|--------|
| **高** | [#271](https://github.com/qhkm/zeptoclaw/issues/271) | Screenshot 工具未验证 redirect chain，存在 SSRF 风险 | [#272](https://github.com/qhkm/zeptoclaw/pull/272) ✅ |
| **高** | [#280](https://github.com/qhkm/zeptoclaw/issues/280) | 挂载验证未解析 symlink/hardlink，可绕过 blocked-pattern | [#281](https://github.com/qhkm/zeptoclaw/pull/281) ✅ |
| **高** | [#277](https://github.com/qhkm/zeptoclaw/issues/277) | workspace 路径边界检查存在 symlink/TOCTOU/hardlink 三重风险 | [#278](https://github.com/qhkm/zeptoclaw/pull/278) ✅ |

**评估**：本期以安全漏洞修复为主，全部已通过 PR 修复并合并，无遗留严重问题。

---

## 功能请求与路线图信号

### 🚀 正在开发的功能

| 功能 | Issue | PR | 预计版本 | 链接 |
|------|-------|-----|----------|------|
| GrepTool / FindTool / Unified Diff | #282 | #283 (Open) | 预计纳入下一个小版本 | [PR #283](https://github.com/qhkm/zeptoclaw/pull/283) |

**路线图信号**：
- v0.7.x 仍以**安全硬化**为主要主题
- 工具链补全（grep/find/diff）是提升开发者体验的明确信号
- per-template sandbox 的引入预示未来将强化多租户/多模板场景的安全隔离能力

---

## 用户反馈摘要

从 Issue 评论中提炼：

| 场景/痛点 | 来源 | 链接 |
|-----------|------|------|
| **CI 测试可靠性**：原有 cargo test 在低 RAM 环境下易被 OOM Killer 静默杀死，导致测试结果不可信 | @starsy | [PR #273](https://github.com/qhkm/zeptoclaw/pull/273) |
| **代码覆盖率缺失**：社区多次呼吁引入覆盖率工具以保障代码质量 | @reneleonhardt | [Issue #275](https://github.com/qhkm/zeptoclaw/issues/275) |
| **安全审计需求**：SSRF、挂载逃逸、路径遍历等问题由安全研究者 @zpbrent 连续报告并配合修复 | @zpbrent | [#271](https://github.com/qhkm/zeptoclaw/issues/271), [#280](https://github.com/qhkm/zeptoclaw/issues/280), [#277](https://github.com/qhkm/zeptoclaw/issues/277) |

**总体反馈倾向**：社区对安全问题的快速响应和修复表示认可，CI 改进（OOM 防护、覆盖率）提升了开发者体验。

---

## 待处理积压

### ⚠️ 需关注的项目

| 项目 | 状态 | 链接 | 备注 |
|------|------|------|------|
| #283 grep/find/diff tools | Open (待合并) | [PR #283](https://github.com/qhkm/zeptoclaw/pull/283) | 预计今日可合并 |

**无长期积压 Issue**：本期所有 Issue 均在 24 小时内处理完毕，项目响应效率优秀。

---

## 📊 健康度评估

| 维度 | 评分 | 说明 |
|------|------|------|
| **活跃度** | 🟢 高 | 6 PR 合并，2 版本发布 |
| **安全性** | 🟢 优秀 | 连续修复 5+ 安全漏洞，系统性加固 |
| **社区参与** | 🟢 良好 | 外部安全研究者持续贡献 |
| **CI/CD** | 🟢 进步 | OOM 防护 + 覆盖率工具到位 |
| **功能交付** | 🟡 平稳 | 核心安全功能就绪，工具链补充中 |

**总结**：项目处于健康迭代状态，安全基础设施显著增强，建议持续关注 #283 工具集成的后续测试。

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：** 2026-03-08  
**数据来源：** GitHub HKUDS/nanobot

---

## 1. 今日速览

过去24小时内，NanoBot 项目保持**高度活跃**状态。Issue 更新共 27 条（新开/活跃 20 条，已关闭 7 条），PR 更新达 72 条（待合并 48 条，已合并/关闭 24 条）。无新版本发布。社区贡献者持续推进多项目功能开发，包括 per-message model routing、WebSocket 通道支持、多模型管理等特性，整体项目处于快速迭代期。

---

## 2. 版本发布

**无新版本发布。** 

最新稳定版本仍为 v0.1.4.post3。

---

## 3. 项目进展

以下 PR 已在过去 24 小时内合并/关闭，推进了关键功能或修复：

| PR | 状态 | 说明 |
|---|---|---|
| [#1467](https://github.com/HKUDS/nanobot/pull/1467) | CLOSED | feat(dingtalk): 添加群聊消息支持 |
| [#532](https://github.com/HKUDS/nanobot/pull/532) | CLOSED | feat: QQ群消息处理和动态回复分发 |
| [#1677](https://github.com/HKUDS/nanobot/pull/1677) | CLOSED | fix(auth): 防止 allowlist 绕过漏洞（安全修复） |
| [#1381](https://github.com/HKUDS/nanobot/pull/1381) | CLOSED | fix: 尊重配置文件中的 gateway 端口设置 |
| [#1421](https://github.com/HKUDS/nanobot/pull/1421) | CLOSED | feat(whatsapp): 通过 bridge media 字段支持内联图片 |

**关键进展：**
- DingTalk 和 QQ 群聊消息支持得到完善
- 安全漏洞修复（allowlist 绕过）
- 配置文件端口设置现在会被正确读取

---

## 4. 社区热点

以下 Issues/PRs 评论最多，反映核心用户诉求：

| 议题 | 评论数 | 链接 |
|---|---|---|
| Ollama API 支持？ | 11 | [#193](https://github.com/HKUDS/nanobot/issues/193) |
| Multi agents setup - Supported ? | 10 | [#222](https://github.com/HKUDS/nanobot/issues/222) |
| Unable to use Web Search via Brave API | 5 | [#1537](https://github.com/HKUDS/nanobot/issues/1537) |
| Kimi Code API 拒绝 | 4 | [#354](https://github.com/HKUDS/nanobot/issues/354) |
| OpenRouter StepFun 400 错误 | 4 | [#1157](https://github.com/HKUDS/nanobot/issues/1157) |

**分析：**
1. **Ollama 本地模型支持**（#193, 11评论）— 用户期待在本地部署 Ollama 作为推理后端，当前仅支持 vLLM
2. **多代理系统**（#222, 10评论）— 多个用户询问如何在单一工作区运行多代理，文档不足
3. **Brave Search API 集成问题**（#1537）— 已关闭但用户仍在探索正确配置方式
4. **非 OpenAI 兼容 API** — Kimi Code、StepFun、Zhipu 等国内模型兼容性问题是热点

---

## 5. Bug 与稳定性

按严重程度排列的 Bug 报告：

| 严重度 | Issue | 描述 | 链接 |
|---|---|---|---|
| 🔴 高 | #1174 | 内存合并耗时过长甚至失败（尤其本地模型），Cloud 模型 GLM-4.7 也会失败 | [#1174](https://github.com/HKUDS/nanobot/issues/1174) |
| 🔴 高 | #1640 | 会话卡住，手动删除内存文件后仍无法重置（GLM-4.7 cloud） | [#1640](https://github.com/HKUDS/nanobot/issues/1640) |
| 🔴 高 | #1633 | `nanobot gateway --w/--workspace` 命令不工作 | [#1633](https://github.com/HKUDS/nanobot/issues/1633) |
| 🟡 中 | #510 | Gateway 绑定端口 18790 失败（Docker 环境） | [#510](https://github.com/HKUDS/nanobot/issues/510) |
| 🟡 中 | #1681 | Matrix 认证问题（Olm 事件解密失败） | [#1681](https://github.com/HKUDS/nanobot/issues/1681) |
| 🟢 低 | #1554 | GitHub Copilot provider call_id 长度错误 | [#1554](https://github.com/HKUDS/nanobot/issues/1554) |

**Fix PR 状态：**
- [#1691](https://github.com/HKUDS/nanobot/pull/1691) - fix: 内存合并失败时推进 last_consolidated，防止重试风暴（已 OPEN）
- [#1684](https://github.com/HKUDS/nanobot/pull/1684) - fix: agent 模式下使用 workspace cron 存储（已 OPEN）

---

## 6. 功能请求与路线图信号

用户提出的新功能需求，结合已有 PR 判断可能被纳入下一版本：

| 功能 | 需求来源 | PR 状态 | 纳入可能性 |
|---|---|---|---|
| **Per-message model routing (@prefix)** | #1530, #1686 | PR #1686 OPEN | ⭐⭐⭐ 高 |
| **WebSocket 通道支持** | #1685 | 讨论中 | ⭐⭐ 中 |
| **Discord replyToMessage 对齐 Telegram** | #1663 | Issue OPEN | ⭐⭐ 中 |
| **MQS (阿里云消息队列) 通道** | #1670 | Issue CLOSED（未实现） | ⭐ 低 |
| **vLLM session-affinity routing** | #1645 | Issue OPEN | ⭐⭐ 中 |
| **多模型自动路由 (providers_manager)** | #1690 | PR #1690 OPEN | ⭐⭐⭐ 高 |
| **Mistral Provider + 转录服务** | #1680 | PR #1680 OPEN | ⭐⭐⭐ 高 |

**高可信度纳入预测：** per-message model routing、providers_manager、Mistral provider、ExecTool 交互式确认（#1643）

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点与场景：

| 场景 | 痛点 | 链接 |
|---|---|---|
| **本地部署** | Ollama 支持缺失，只能用 vLLM | #193 |
| **多代理协作** | 文档缺失，不清楚如何配置多代理 | #222, #1642 |
| **国内模型** | StepFun、Kimi Code、Zhipu API 兼容性差，错误信息不明确 | #1157, #354, #1664 |
| **群聊消息** | DingTalk/QQ/Discord 群聊回复行为不符合预期 | #1045, #1662, #1663 |
| **中文支持** | 文档无中文，影响中文用户使用 | #1617 |
| **稳定性** | 内存合并失败导致会话卡死，影响生产使用 | #1174, #1640 |
| **WhatsApp** | 无法回复自己的消息（self-message） | #1672 |

**满意度方面：** 项目核心功能（Agent 能力、Telegram/Discord 集成、工具系统）获得认可，贡献者响应积极。

---

## 8. 待处理积压

以下重要 Issue 长期未响应或无 fix PR，建议维护者关注：

| Issue | 创建时间 | 状态 | 原因 |
|---|---|---|---|
| **#193** Ollama API 支持 | 2026-02-06 | OPEN | 核心功能缺失，社区关注度高（11评论） |
| **#222** Multi agents setup | 2026-02-06 | OPEN | 文档不足，需求迫切 |
| **#510** Gateway 端口绑定失败 | 2026-02-11 | OPEN | Docker 环境兼容性问题 |
| **#354** Kimi Code API 拒绝 | 2026-02-08 | OPEN | 国内热门模型兼容性 |
| **#1157** StepFun 400 错误 | 2026-02-25 | OPEN | OpenRouter 集成问题 |
| **#1174** 内存合并失败 | 2026-02-25 | OPEN | 稳定性关键问题 |

**建议优先处理：** #1174 / #1640（内存合并相关稳定性问题）、#193 / #222（高需求功能）

---

*报告生成时间：2026-03-08 | 数据覆盖：2026-03-07 00:00 - 2026-03-08 00:00 (UTC+8)*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-08)

## 1. 今日速览

PicoClaw 社区今日保持高度活跃，共计收到 **19 条 Issues 更新**（新开/活跃 13 条，关闭 6 条），**44 条 PR 更新**（待合并 29 条，已合并/关闭 15 条）。未发布新版本。社区围绕本地模型集成、频道功能增强、Agent 重构等方向展开讨论，整体呈现积极发展态势。

---

## 2. 版本发布

**无新版本发布**

过去 24 小时内无 Release 更新。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 描述 | 状态 |
|---|---|---|
| [#238](https://github.com/sipeed/picoclaw/pull/238) | fix(claude): 解决 Claude API 请求中空工具名问题 | CLOSED |
| [#696](https://github.com/sipeed/picoclaw/pull/696) | fix: 模型解析器处理模型名中的两个 `/` | CLOSED |
| [#1227](https://github.com/sipeed/picoclaw/pull/1227) | feat(qq): QQ 频道支持直接推送本地多媒体文件（图片、文件） | OPEN |
| [#1226](https://github.com/sipeed/picoclaw/pull/1226) | feat(ci/cd): 添加每日构建工作流 (nightly build) | OPEN |
| [#1225](https://github.com/sipeed/picoclaw/pull/1225) | fix: 支持 Telegram 论坛话题 (message_thread_id 路由)；feat: 添加基于 Web 的 Gateway Dashboard UI | OPEN |
| [#1220](https://github.com/sipeed/picoclaw/pull/1220) | feat: 添加 Matrix 频道支持 | OPEN |
| [#1187](https://github.com/sipeed/picoclaw/pull/1187) | feat: 让 gateway 感知 config.json 变化（热更新） | OPEN |
| [#1100](https://github.com/sipeed/picoclaw/pull/1100) | feat: 添加 Vivgrid provider 支持 | OPEN |

**进展摘要**：今日重点推进了频道能力扩展（QQ 媒体推送、Matrix 支持、Telegram 论坛话题）、CI/CD 自动化（nightly build）、配置热更新等核心功能。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 标题 | 评论数 | 热度分析 |
|---|---|---|---|
| [#1161](https://github.com/sipeed/picoclaw/issues/1161) | **[BUG] 如何正确配置 PicoClaw 使用本地 Ollama 模型？** | 13 | 本地部署刚需，用户遇到 agent 启动但无响应的配置问题 |
| [#1210](https://github.com/sipeed/picoclaw/issues/1210) | picoclaw 配置企业微信智能机器人 | 5 | 中文社区企业应用场景需求 |
| [#966](https://github.com/sipeed/picoclaw/issues/966) | **[BUG] 本地 Thinking 模型 (Qwen 3.5) reasoning 消耗所有 tokens 时返回空内容** | 4 | 思考模型 token 分配 bug |
| [#62](https://github.com/sipeed/picoclaw/issues/62) | **[BUG] Telegram allow_from 对有 username 的数字用户 ID 不生效** | 3 | Telegram 频道访问控制 bug |

**热点分析**：本地模型部署（Ollama）和企业微信集成是中文社区的核心诉求；Ollama 配置问题的 13 条讨论反映用户对离线/私有化部署的强烈需求。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度）

| Issue | 描述 | 严重程度 | Fix 状态 |
|---|---|---|---|
| [#1221](https://github.com/sipeed/picoclaw/issues/1221) | **[BUG] QQ 频道群消息发送失败 - 使用了错误的 API 端点** | **高** | 无 Fix PR |
| [#1161](https://github.com/sipeed/picoclaw/issues/1161) | **[BUG] 本地 Ollama 模型配置后无响应** | **高** | 讨论中 |
| [#966](https://github.com/sipeed/picoclaw/issues/966) | **[BUG] Qwen 3.5 reasoning 消耗全部 tokens 返回空内容** | **高** | 已关闭（可能随 #1050 修复） |
| [#1212](https://github.com/sipeed/picoclaw/issues/1212) | **[BUG] Telegram 发送多条消息后持续显示"正在输入..."** | **中** | 无 Fix PR |
| [#1203](https://github.com/sipeed/picoclaw/issues/1203) | **[BUG] Safety guard 错误拦截包含 URL 的命令** | **中** | 无 Fix PR |
| [#1153](https://github.com/sipeed/picoclaw/issues/1153) | **[BUG] 重复 model_name 条目未正确回退** | **中** | 无 Fix PR |
| [#62](https://github.com/sipeed/picoclaw/issues/62) | **[BUG] Telegram allow_from 对有 username 的数字 ID 不生效** | **低** | 无 Fix PR |

**稳定性提示**：QQ 群消息 API 端点错误 (#1221) 和 Telegram 输入状态 bug (#1212) 影响核心用户体验，建议优先处理。

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue | 描述 | 潜在纳入版本 |
|---|---|---|
| [#1219](https://github.com/sipeed/picoclaw/issues/1219) | **Feature Request: 添加 uninstall_skill 命令** | 近期 |
| [#1204](https://github.com/sipeed/picoclaw/issues/1204) | **Feature: 离线/本地环境懒加载 Provider** | 中期 |
| [#1137](https://github.com/sipeed/picoclaw/issues/1137) | **feat: 添加 IRC 频道集成** | 已在 #1137 PR 中 |
| [#1213](https://github.com/sipeed/picoclaw/issues/1213) | **Feature: 在说明文档里没有找到如何设置 API 的 fallbacks** | 文档更新 |

### 路线图信号

- **[#988](https://github.com/sipeed/picoclaw/issues/988)**: PicoClaw Roadmap: March 2026 (Phase 1) — 4 👍
  - Provider 扩展：集成 ByteDance Volcengine
  - 频道增强：多通道支持
  
- **[#1216](https://github.com/sipeed/picoclaw/issues/1216)**: Meta: Agent refactor — 今日新建，标志架构重构开始

---

## 7. 用户反馈摘要

### 真实用户痛点

1. **本地部署困难** (#1161, #1204)
   - 用户希望离线使用 Ollama，但配置复杂且无响应
   - 需求：简化本地模型配置流程，支持懒加载减少资源占用

2. **企业微信集成** (#1210)
   - 中文企业用户需要配置企业微信机器人，但文档示例不完整

3. **Telegram 体验问题** (#1212, #62)
   - 多消息发送后输入状态不消失
   - allow_from 规则对同时有 ID 和 username 的用户失效

4. **Skill 管理不完善** (#1211)
   - 只能安装 skill，无法卸载，使用困难

### 满意点

- 频道支持广泛（QQ、Telegram、Discord 等）
- 多 provider 兼容性强
- Web UI 改进（Dashboard）受期待

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 描述 | 创建时间 | 状态 |
|---|---|---|---|
| [#1201](https://github.com/sipeed/picoclaw/issues/1201) | Skill 调用 Python 脚本不工作 | 2026-03-07 | OPEN，0 评论 |
| [#1209](https://github.com/sipeed/picoclaw/issues/1209) | Timeout error with context deadline exceeded | 2026-03-07 | OPEN，0 评论 |
| [#1101](https://github.com/sipeed/picoclaw/pull/1101) | feat(telegram): 通过 sendMessageDraft 流式传输 LLM 响应 | 2026-03-04 | OPEN |

**提醒**：部分 Issue 创建于 3 月 7 日但暂无响应，建议维护者尽快确认处理优先级。

---

*报告生成时间：2026-03-08 | 数据来源：GitHub PicoClaw 项目*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-08)

## 1. 今日速览

过去 24 小时，NanoClaw 项目保持高度活跃状态。Issue 更新 7 条（5 新开/活跃，2 已关闭），PR 更新 50 条（36 待合并，14 已合并/关闭），无新版本发布。项目继续在多供应商运行时支持、容器权限修复、知识管理流水线等多个方向并行推进。社区参与度高，尤其是关于多运行时支持的提案获得 36 👍 响应。

---

## 2. 版本发布

**本期无新版本发布。**

---

## 3. 项目进展

| PR | 状态 | 描述 | 意义 |
|----|------|------|------|
| [#735](https://github.com/qwibitai/nanoclaw/pull/735) | ✅ 已合并 | fix(db): add LIMIT to unbounded message history queries | **关键修复** — 为 `getNewMessages` 和 `getMessagesSince` 查询添加 LIMIT 200，防止 OOM 崩溃和过度 API 费用 |
| [#683](https://github.com/qwibitai/nanoclaw/pull/683) | ✅ 已关闭 | refactor: replace file-based IPC with WebSocket communication | 用 WebSocket 通信替换基于文件的 IPC（stdin/stdout/文件系统轮询），提升通信效率 |
| [#804](https://github.com/qwibitai/nanoclaw/pull/804) | ✅ 已关闭 | Convert hal-runtime SPEC.md to OpenSpec base specs | 规范文档标准化 |
| [#805](https://github.com/qwibitai/nanoclaw/pull/805) | ✅ 已关闭 | Wire WhatsApp provider using Baileys | WhatsApp 渠道接入 |
| [#806](https://github.com/qwibitai/nanoclaw/pull/806) | ✅ 已关闭 | Implement Hippocampus per-turn memory recall | 运行时记忆recall功能 |
| [#807](https://github.com/qwibitai/nanoclaw/pull/807) | ✅ 已关闭 | Implement CC webhook hooks in hal-runtime | Webhook 集成 |

**合并率**：14/50 = **28%**，处于较高水平。

---

## 4. 社区热点

| 类型 | 链接 | 评论 | 👍 | 摘要 |
|------|------|------|-----|------|
| Issue | [#80](https://github.com/qwibitai/nanoclaw/issues/80) | 18 | **36** | **[Enhancement] 支持 Claude 之外的运行时** — 要求支持 OpenCode、Codex、Gemini 等竞品，因 Anthropic 频繁封禁用户账户 |
| Issue | [#348](https://github.com/qwibitai/nanoclaw/issues/348) | 3 | 2 | 搜索 "nanoclaw" 指向过时的营销网站 nanoclaw.net，存在误导性声明 |
| Issue | [#777](https://github.com/qwibitai/nanoclaw/issues/777) | 2 | 0 | **[Bug High] 容器权限问题** — 主机以 root 运行时，容器 EACCES/ENOENT 错误 |

**热点分析**：Issue #80 获得最高关注（36 👍），反映用户对**供应商锁定风险**的担忧。Anthropic 频繁封禁使用 OpenClaw 的订阅，迫使社区寻求多运行时支持。OpenCode 作为开源竞品被点名。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 状态 | 描述 | 已有 Fix PR? |
|--------|-------|------|------|--------------|
| **High** | [#777](https://github.com/qwibitai/nanoclaw/issues/777) | OPEN | 容器 EACCES/ENOENT — 主机以 root 运行时，文件系统权限不匹配导致容器崩溃或消息处理失败 | ❌ 无 |
| **Medium** | [#783](https://github.com/qwibitai/nanoclaw/issues/783) | OPEN | `schedule_task` 无幂等键 — 同一任务跨会话累积重复 | ❌ 无 |
| — | [#802](https://github.com/qwibitai/nanoclaw/pull/802) | OPEN | fix: 防止 idle timeout 触发时新消息丢失（竞态条件） | ⚠️ PR 已提交 |
| — | [#814](https://github.com/qwibitai/nanoclaw/pull/814) | OPEN | fix(setup): 同步 mount allowlist 到 group container_config | ⚠️ PR 已提交 |

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 描述 | 评估 |
|----------|------|------|------|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | Enhancement | 支持 OpenCode、Codex、Gemini 等多运行时 | 🔥 高需求，可能纳入路线图 |
| [#813](https://github.com/qwibitai/nanoclaw/issues/813) | Skill | Gmail 邮件摄入到 fleeting notes 流水线 | 与 #812 互补 |
| [#811](https://github.com/qwibitai/nanoclaw/issues/811) | Skill | Fleeting Notes Agent：自动化摄入、AI 路由、Obsidian 流水线 | PR #812 已实现 |
| [#810](https://github.com/qwibitai/nanoclaw/pull/810) | Skill (WIP) | Corsair skill — 集成数百种服务 | 推进中 |
| [#809](https://github.com/qwibitai/nanoclaw/pull/809) | Skill | AgentMail skill — AI 专用邮箱 | 待审查 |
| [#212](https://github.com/qwibitai/nanoclaw/pull/212) | Feature | WebUI 控制面板 | 🔴 阻塞中 |

---

## 7. 用户反馈摘要

**用户痛点与需求**：

1. **供应商锁定风险** — Issue #80：用户反映 Anthropic 频繁封禁使用 OpenClaw/NanoClaw 的订阅，希望支持 OpenCode 等开源替代品
2. **误导性营销信息** — Issue #348：搜索结果中的 nanoclaw.net 包含不实声明，损害项目声誉
3. **权限问题** — Issue #777：Linux root 用户场景下容器权限配置复杂，导致静默失败
4. **任务重复** — Issue #783：定时任务无幂等机制，跨会话累积重复任务

**使用场景**：
- 知识管理：Things 3 → vault → daily note 流水线（#811/#812）
- 多渠道消息：Signal、WhatsApp、Email 集成
- 容器化安全运行

---

## 8. 待处理积压

| 类型 | 链接 | 状态 | 逾期时间 | 说明 |
|------|------|------|---------|------|
| Issue | [#80](https://github.com/qwibitai/nanoclaw/issues/80) | OPEN | 2026-02-04 创建 | 高优先级功能请求，36 👍，32 天未响应 |
| PR | [#212](https://github.com/qwibitai/nanoclaw/pull/212) | OPEN | 2026-02-13 | WebUI 控制面板，Blocked，23 天无进展 |
| PR | [#129](https://github.com/qwibitai/nanoclaw/pull/129) | OPEN | 2026-02-07 | x-integration 架构重构，Blocked，29 天 |
| PR | [#496](https://github.com/qwibitai/nanoclaw/pull/496) | OPEN | 2026-02-25 | Things 3 skill，WIP，11 天 |
| PR | [#63](https://github.com/qwibitai/nanoclaw/pull/63) | OPEN | 2026-02-03 | WhatsApp 认证重试，Blocked，33 天 |

**建议**：Issue #80 和 PR #129/PR #212 长期阻塞，建议优先评估或明确关闭条件。

---

*报告生成时间：2026-03-08 | 数据来源：GitHub qwibitai/nanoclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-03-08)

## 1. 今日速览

过去24小时项目保持**极高活跃度**：共产生 **31 条 Issue 更新**（27 个新开/活跃，4 个关闭）和 **50 条 PR 更新**（34 个待合并，16 个已合并/关闭）。无新版本发布。多个大型功能 PR 正在推进中，包括 FullJob routine 模式、时区支持、Codex CLI OAuth 集成等核心特性。项目整体处于快速迭代状态，代码合并活跃，但同时累积了多个用户体验和稳定性问题需关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

以下 PR 已合并或在审，对项目有重要推进作用：

| PR | 描述 | 状态 |
|---|---|---|
| [#709](https://github.com/nearai/ironclaw/pull/709) | **FullJob routine 模式 + worker 事件持久化**：支持 Routine 通过 `Scheduler::dispatch_job` 分发完整 Agent 任务，worker 事件持久化到 DB 并通过 SSE 广播到 Web UI | OPEN |
| [#707](https://github.com/nearai/ironclaw/pull/707) | **修复 /model 选择持久化**：选择模型后不再丢失，重启后保留到 DB 和 config.toml | OPEN |
| [#705](https://github.com/nearai/ironclaw/pull/705) | **libSQL 时间戳标准化为 RFC 3339**：修复 #663，统一使用 UTC offset 时间格式 | OPEN |
| [#708](https://github.com/nearai/ironclaw/pull/708) | **修复 routine message tool 上下文解析**：解决 full-job worker 中 "No target specified" 错误 | OPEN |
| [#703](https://github.com/nearai/ironclaw/pull/703) | **清理死代码**：删除未使用的 LlmEvaluator、chunk_by_paragraphs 等，缩小攻击面 | OPEN |
| [#678](https://github.com/nearai/ironclaw/pull/678) | **时区工具支持 + webhook 触发端点**：时区转换、格式化、IANA 时区解析；添加 `POST /api/webhooks/{path}` | OPEN |
| [#625](https://github.com/nearai/ironclaw/pull/625) | **PTC (编程式工具调用)**：实现 ToolExecutor，支持工具调用工具，无需 LLM 往返 | OPEN |
| [#693](https://github.com/nearai/ironclaw/pull/693) | **复用 Codex CLI OAuth tokens**：复用 OpenAI Codex 的 auth.json，实现 ChatGPT 后端认证 | OPEN |
| [#706](https://github.com/nearai/ironclaw/pull/706) | **修复 setup wizard**：环境变量安全选项下初始化 secrets crypto，解决 #666 | OPEN |

---

## 4. 社区热点

以下是今日讨论最活跃的 Issues：

| Issue | 评论 | 热度 |
|---|---|---|
| [#324](https://github.com/nearai/ironclaw/issues/324) Telegram bot only manually polls! | 6 | 🔥🔥🔥 |
| [#602](https://github.com/nearai/ironclaw/issues/602) No Telegram in default install | 3 | 🔥🔥 |
| [#697](https://github.com/nearai/ironclaw/issues/697) Routines: execution fails silently when sandbox/Docker unavailable | 2 | 🔥 |
| [#211](https://github.com/nearai/ironclaw/issues/211) feat: add automated PR labeling | 2 | 🔥 |
| [#674](https://github.com/nearai/ironclaw/issues/674) [UX]: Setup Performance & Complexity Improvements | 2 | 🔥 |

**分析**：
- **Telegram 相关问题**（#324、#602）持续受关注，用户对 Telegram 集成的易用性不满，集中在"仅手动轮询"和"默认安装不包含 Telegram"两个点
- **UX 体验**（#674）反馈.setup 向导需 9 步、约 10 分钟，摩擦较大
- **Routine 执行失败静默**（#697）是一个潜在的安全/可靠性隐患，用户要求更好的错误反馈

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

| Issue | 严重程度 | 描述 | Fix PR |
|---|---|---|---|
| [#657](https://github.com/nearai/ironclaw/issues/657) | 🔴 严重 | tokio runtime overflow panic: `overflow when subtracting duration from instant` | — |
| [#697](https://github.com/nearai/ironclaw/issues/697) | 🔴 严重 | Routine 执行在 Docker/沙箱不可用时静默失败，无任何反馈 | — |
| [#702](https://github.com/nearai/ironclaw/issues/702) | 🔴 严重 | Channel HTTP 配置变更后无热重载，服务器不重启 | — |
| [#700](https://github.com/nearai/ironclaw/issues/700) | 🟠 高 | CLI `tool setup` / `secret set` 在 libSQL 后端上崩溃 | — |
| [#699](https://github.com/nearai/ironclaw/issues/699) | 🟠 高 | Chat API `/api/chat/send` 静默丢弃消息，线程卡死 | — |
| [#701](https://github.com/nearai/ironclaw/issues/701) | 🟠 高 | Agent 执行破坏性操作（删除 WASM）无确认提示 | — |
| [#698](https://github.com/nearai/ironclaw/issues/698) | 🟠 高 | Jobs 无限重试，无 token 预算/迭代上限，取消按钮无效 | — |
| [#696](https://github.com/nearai/ironclaw/issues/696) | 🟡 中 | lightweight routine 无法执行工具，输出原始 XML | — |
| [#666](https://github.com/nearai/ironclaw/issues/666) | 🟡 中 | Setup wizard OpenAI 兼容模型配置不保存 API key | [#706](https://github.com/nearai/ironclaw/pull/706) 已修复 |
| [#663](https://github.com/nearai/ironclaw/issues/663) | 🟡 中 | libSQL 时间戳存储不一致 | [#705](https://github.com/nearai/ironclaw/pull/705) 已修复 |

---

## 6. 功能请求与路线图信号

用户提出的新功能需求及已有对应 PR 的信号：

| Issue | 功能 | 已有 PR | 预计纳入 |
|---|---|---|---|
| [#698](https://github.com/nearai/ironclaw/issues/698) | Jobs token 预算、迭代上限、有效取消机制 | — | 需关注 |
| [#701](https://github.com/nearai/ironclaw/issues/701) | Agent destructive actions 确认提示 | — | 需关注 |
| [#696](https://github.com/nearai/ironclaw/issues/696) | lightweight routine 工具执行支持 | — | 需关注 |
| [#650](https://github.com/nearai/ironclaw/issues/650) | NEAR Wallet OAuth 认证 | — | 需关注 |
| [#661](https://github.com/nearai/ironclaw/issues/661) | 时区感知 session context + 客户端检测 | [#678](https://github.com/nearai/ironclaw/pull/678) | ✅ 下一版本 |
| [#662](https://github.com/nearai/ironclaw/issues/662) | Time tool 时区转换支持 | [#678](https://github.com/nearai/ironclaw/pull/678) | ✅ 下一版本 |
| [#639](https://github.com/nearai/ironclaw/issues/639) | MCP 自定义 HTTP headers | [#710](https://github.com/nearai/ironclaw/pull/710), [#704](https://github.com/nearai/ironclaw/pull/704) | ✅ 下一版本 |

**路线图信号**：时区支持、MCP headers、FullJob routine 模式、Codex CLI 集成 是近期重点方向。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的真实用户痛点：

1. **Telegram 集成差**（#324, #602）
   - "Telegram bot 只有手动轮询模式，无法接收推送"
   - "按照文档安装，没有 Telegram 选项，只能从源码构建"

2. **Setup 体验糟糕**（#674）
   - "9 步交互式向导需要 10 分钟，太慢了"
   - "重跑 onboarding 会丢失之前选的模型"（#600，已部分修复）

3. **Job 可靠性担忧**（#698, #697）
   - " Jobs 陷入无限重试，没有预算上限，成本失控"
   - "Docker 不可用时任务静默失败，完全不知道出了什么问题"

4. **Agent 安全性**（#701）
   - "用户说'重置 slack 配置'，Agent 直接删除了 WASM 文件，没有确认"

5. **基础设施问题**（#700, #699）
   - "CLI 工具命令在 libSQL 后端上崩溃"
   - "API 说消息已接受，但消息根本没出现"

---

## 8. 待处理积压

以下 Issue 长期未响应或需重点关注：

| Issue | 状态 | 积压时间 | 优先级 |
|---|---|---|---|
| [#324](https://github.com/nearai/ironclaw/issues/324) Telegram bot only manually polls! | OPEN | ~13 天 | 🔴 高 |
| [#602](https://github.com/nearai/ironclaw/issues/602) No Telegram in default install | OPEN | ~2 天 | 🔴 高 |
| [#134](https://github.com/nearai/ironclaw/issues/134) Edge Hardware Support (Pattern A): MCP GPIO Daemon | OPEN | ~19 天 | 🟡 中 |
| [#657](https://github.com/nearai/ironclaw/issues/657) tokio runtime overflow panic | OPEN | ~1 天 | 🔴 高 |
| [#600](https://github.com/nearai/ironclaw/issues/600) (related to #707) | — | — | ✅ 部分修复 |

**提醒**：Telegram 相关问题（#324、#602）积压较久，建议优先处理以改善用户体验。

---

*本日报基于 2026-03-08 24 小时内的 GitHub 数据自动生成*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-08)

## 1. 今日速览

过去24小时内，TinyClaw 项目保持适度活跃。社区提交了 **1 个新 Issue** 报告安装脚本版本不一致的 Bug，同时 **1 个功能 PR**（Gemini CLI 支持）已被关闭合并。项目整体向前推进，继续丰富其作为 AI 智能体与个人 AI 助手的开源工具集。未发布新版本，当前版本仍为 0.0.9。

---

## 2. 版本发布

> 本期无新版本发布

---

## 3. 项目进展

### ✅ PR #165 已关闭 | feat: add Gemini CLI provider support
- **作者**: @tigerjj
- **状态**: 已关闭（推测已合并）
- **更新**: 2026-03-07
- **链接**: https://github.com/TinyAGI/tinyclaw/pull/165

**内容摘要**:
该 PR 为 TinyClaw 添加了 **Gemini CLI** (`gemini`) 作为新的 AI provider，支持与 Anthropic (Claude)、OpenAI (Codex)、OpenCode 并列使用。项目继续扩展其多 provider 生态，进一步增强了兼容性和用户选择空间。

---

## 4. 社区热点

### 🔥 Issue #164 | 0.0.8 update script install 0.0.8. 0.0.9 install script install 0.0.8
- **作者**: @SpongGreen
- **状态**: OPEN
- **创建/更新**: 2026-03-07
- **评论**: 0 | **👍**: 0
- **链接**: https://github.com/TinyAGI/tinyclaw/issues/164

**分析**:
该 Issue 指出当前 0.0.9 版本的 `update` 和 `install` 脚本实际安装的仍是 0.0.8 版本，属于**版本发布/脚本同步问题**。目前暂无评论和反应，社区关注度较低，但问题本身影响用户正常使用，存在一定严重性。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | 关联 PR |
|---------|-------|------|------|---------|
| **中** | [#164](https://github.com/TinyAGI/tinyclaw/issues/164) | update/install 脚本在 0.0.9 版本仍安装 0.0.8 | OPEN | 无 |

> 该 Bug 涉及版本发布流程，建议优先排查脚本版本号写死或读取逻辑错误。

---

## 6. 功能请求与路线图信号

基于本期数据，**Gemini CLI provider 支持** (PR #165) 已合并，表明项目正在积极扩展多 AI provider 能力。结合前序 PR #159（Cursor CLI 支持），TinyClaw 正逐步完善对主流 AI CLI 工具的集成。

**潜在下一版本功能方向**:
- 继续引入其他 AI CLI provider（如 Ollama、LM Studio 等）
- 修复脚本版本同步问题（Issue #164）或将随补丁版本解决

---

## 7. 用户反馈摘要

从 Issue #164 可以提炼以下用户痛点：

- **场景**: 用户使用 0.0.9 版本的 update 或 install 脚本时，预期安装最新版本，但实际得到旧版本 0.0.8
- **诉求**: 脚本应正确读取/写入版本号，确保安装与声称版本一致
- **满意/不满意**: 用户未留下评论，情绪未知；问题属于**功能性缺陷**，直接影响信任度

---

## 8. 待处理积压

| 类型 | Issue/PR | 标题 | 状态 | 备注 |
|------|----------|------|------|------|
| **Bug** | [#164](https://github.com/TinyAGI/tinyclaw/issues/164) | 脚本版本安装错误 | OPEN | 需维护者响应 |

> 建议优先处理 Issue #164，避免影响新用户首次体验和项目口碑。

---

*Generated on 2026-03-08 | Data source: GitHub TinyClaw (tinyagi/tinyclaw)*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*