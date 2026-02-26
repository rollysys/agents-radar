# OpenClaw 项目动态日报 2026-02-26

> 数据来源: [openclaw/openclaw](https://github.com/openclaw/openclaw) | Issues: 500 | PRs: 500 | 生成时间: 2026-02-26 08:46 UTC

# OpenClaw 项目动态日报 | 2026-02-26

## 1. 今日速览

OpenClaw 今日保持极高活跃度，24小时内 **500+ Issues** 和 **500+ PRs** 更新，社区参与度处于峰值水平。项目发布 **v2026.2.25** 稳定版及 beta 版本，重点优化 Android 端聊天体验与启动性能。核心开发节奏聚焦 **Feishu/飞书生态完善**（多账号路由、线程回复）、**Ollama 本地模型适配**（上下文窗口修复、嵌入支持）及 **Telegram/Discord 等渠道稳定性**（打字指示器、消息分片问题）。社区对 **DingTalk 钉钉入驻** 呼声高涨，两个相关 Issue 同日进入热榜。整体项目健康度良好，但积压的"stale"标签 Issue 需关注。

---

## 2. 版本发布

### v2026.2.25 (稳定版) & v2026.2.25-beta.1
**发布日期**: 2026-02-25 | [Release 页面](https://github.com/openclaw/openclaw/releases)

| 变更类别 | 详情 |
|---------|------|
| **Android/Chat** | 优化流式消息传输处理，改进原生 Android 聊天 UI 的 Markdown 渲染质量，支持 GitHub 风格 Markdown (#26079) |
| **Android/启动性能** | 延迟前台服务启动，将 WebView 调试初始化移出关键路径 |

**破坏性变更**: 无  
**迁移注意**: Android 用户建议升级以获得更流畅的聊天体验；beta 版与稳定版内容一致，供渠道测试使用。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#27154](https://github.com/openclaw/openclaw/pull/27154) | @yinghaosang | 修复配置文档中错误的 Providers 链接（指向 WhatsApp → 正确指向 /providers） | ✅ 已合并 |
| [#17378](https://github.com/openclaw/openclaw/pull/17378) | @ar-nadeem | 允许 `dangerouslyDisableDeviceAuth` 在 `trusted-proxy` 认证模式下生效，修复 Control UI 绕过设备认证的场景 | ✅ 已合并 |

**整体推进**: 今日合并 PR 以文档修复和安全配置优化为主，大型功能 PR（如 #24397 DecisionEngine、#18196 客户端技能安全）仍在 review 队列。项目核心架构向 **v10.4 决策引擎 + 可观测性 + 成本优化** 演进中。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | Web UI "Unsupported schema node" 错误 | 20 条 | **Clawdbot 控制面板 Nodes/Accounts 区块崩溃**，用户无法查看账户配置，被迫使用 Raw 模式 | [#1749](https://github.com/openclaw/openclaw/issues/1749) |
| 2 | 将钉钉添加为首次安装渠道选项 | 17 条 | **企业用户强烈需求**：钉钉已支持但不在引导流程中，需手动配置 | [#26534](https://github.com/openclaw/openclaw/issues/26534) |
| 3 | Ollama 误用本地 CLI 而非远程 API | 11 条 | **混合部署场景痛点**：配置远程 Ollama 端点后仍尝试调用本地二进制文件 | [#11283](https://github.com/openclaw/openclaw/issues/11283) |
| 4 | 自定义 API 提供商默认 4096 token 上下文导致失败 | 11 条 | **配置易用性**：新用户 onboarding 时因默认上下文窗口过小而直接失败 | [#21653](https://github.com/openclaw/openclaw/issues/21653) |

**背后信号**: 企业级部署（钉钉、远程 Ollama、多账户飞书）成为社区焦点，配置引导的"首次体验"是用户流失关键节点。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重程度 | Issue | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | Telegram 消息分片乱序/重复 | 长消息拆分后顺序错乱，用户收到空/截断/重复消息 | 🔄 [#27157](https://github.com/openclaw/openclaw/issues/27157) 已关闭（同日修复） | [#27157](https://github.com/openclaw/openclaw/issues/27157) |
| 🔴 **高** | 工具名未 trim 导致 "Tool not found" | LLM 输出带空格的工具名直接失败 | ✅ [#27313](https://github.com/openclaw/openclaw/pull/27313) 待合并 | [#27045](https://github.com/openclaw/openclaw/issues/27045) |
| 🟡 **中** | Telegram 打字指示器无限持续 | `streaming: partial` 模式下指示器不消失 | 待修复 | [#26761](https://github.com/openclaw/openclaw/issues/26761) |
| 🟡 **中** | Discord `ackReaction` 不自动触发 | 配置有效但确认反应不发送 | 待修复 | [#23577](https://github.com/openclaw/openclaw/issues/23577) |
| 🟡 **中** | Agent 级 `models.json` apiKey 不覆盖主配置 | 多租户场景密钥隔离失效 | ✅ [#27293](https://github.com/openclaw/openclaw/pull/27293) 待合并 | [#27243](https://github.com/openclaw/openclaw/issues/27243) |
| 🟢 **低** | 缓存命中率显示超 100% | 统计计算错误（1142% cached） | ✅ [#27315](https://github.com/openclaw/openclaw/pull/27315) 待合并 | - |

**回归风险**: [#27157](https://github.com/openclaw/openclaw/issues/27157) 显示 Telegram 消息分片为近期引入，需关注发布节奏。

---

## 6. 功能请求与路线图信号

| 功能请求 | 状态 | 纳入可能性 | 关键 PR/Issue |
|:---|:---|:---|:---|
| **Ollama 嵌入提供商支持** | 🔄 开发中 | **高** | [#26349](https://github.com/openclaw/openclaw/pull/26349) 待合并 |
| **Vertex AI Anthropic 提供商 (Claude on GCP)** | ✅ 已实现 | 已发布 | [#6937](https://github.com/openclaw/openclaw/issues/6937) 已关闭 |
| **Anthropic adaptive thinking / Opus 4.6 effort 参数** | 📋 待评估 | 中 | [#9837](https://github.com/openclaw/openclaw/issues/9837) |
| **GitHub Copilot gpt-5.3-codex + xhigh reasoning** | 🔄 开发中 | **高** | [#19301](https://github.com/openclaw/openclaw/issues/19301), [#27251](https://github.com/openclaw/openclaw/pull/27251) |
| **Moonshot/Kimi 原生网页搜索** | 📋 待评估 | 中 | [#16616](https://github.com/openclaw/openclaw/issues/16616) |
| **TUI 内联图片渲染 (Kitty/iTerm2)** | 🔄 开发中 | **高** | [#23764](https://github.com/openclaw/openclaw/pull/23764) |
| **Android 通知监听 (`notifications.list`)** | 🔄 开发中 | **高** | [#27344](https://github.com/openclaw/openclaw/pull/27344) |

**下一版本信号**: v2026.3.x 预计聚焦 **本地模型生态完善**（Ollama 嵌入、上下文修复）和 **移动端能力扩展**（Android 通知、图片渲染）。

---

## 7. 用户反馈摘要

### 💬 真实痛点提炼

| 场景 | 反馈原文风格 | 情绪 |
|:---|:---|:---|
| **Raspberry Pi 4B 性能** | "17+ 秒执行 `--help`... 几乎无法使用" | 😤 沮丧 |
| **macOS 应用 Canvas 卡死** | "Waiting for A2UI message 永远等待，推送成功但界面不更新" | 😤 沮丧 |
| **飞书多账户路由** | "所有消息都路由到默认账户，尽管收到了正确的 app_id" | 😠 困惑 |
| **首次配置体验** | "Docker 文档跳过了关键镜像下载步骤，步骤必然失败" | 😠 不满 |
| **钉钉缺失** | "钉钉已实现但不在引导流程，必须手动配置" | 😐 期待 |

### ✅ 满意点
- Vertex AI Claude 支持快速落地（[#6937](https://github.com/openclaw/openclaw/issues/6937) 9 条评论高效关闭）
- 社区响应速度快（[#27157](https://github.com/openclaw/openclaw/issues/27157) 当日报告当日修复）

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issue

| Issue | 天数 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| [#4349](https://github.com/openclaw/openclaw/issues/4349) TUI 模型选择器显示 600+ 模型 | 27 天 | 用户体验严重受损 | 标记 `good first issue` |
| [#5090](https://github.com/openclaw/openclaw/issues/5090) macOS 缺少 NSRemindersUsageDescription | 26 天 | Apple 审核风险 | 需 iOS/macOS 开发者介入 |
| [#5769](https://github.com/openclaw/openclaw/issues/5769) Ollama 流式破坏工具调用 | 26 天 | 核心功能缺陷 | 与 [#27292](https://github.com/openclaw/openclaw/pull/27292) 关联评估 |
| [#8044](https://github.com/openclaw/openclaw/issues/8044) Peekaboo Bridge 发现失效 | 23 天 | macOS 自动化能力退化 | PR 已提交待 review |
| [#12785](https://github.com/openclaw/openclaw/issues/12785) 新手友好 Issue 列表 | 17 天 | 社区建设 | 维护者需打标签 |

**维护者提醒**: 5 个 `stale` 标签 Issue 今日仍有活动评论，建议重新评估优先级或明确关闭理由。

---

*日报生成时间: 2026-02-26 | 数据来源: github.com/openclaw/openclaw*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*