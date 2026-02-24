# OpenClaw 项目动态日报 2026-02-24

> 数据来源: [openclaw/openclaw](https://github.com/openclaw/openclaw) | Issues: 500 | PRs: 500 | 生成时间: 2026-02-24 04:45 UTC

# OpenClaw 项目日报 | 2026-02-24

---

## 1. 今日速览

OpenClaw 今日展现出**极高的社区活跃度**，24小时内 Issues 更新 500 条（新开/活跃 197，关闭 303），PR 更新 500 条（待合并 442，已合并/关闭 58）。**无新版本发布**，但代码合并节奏密集，主要集中在稳定性修复、安全加固和渠道适配（Telegram/Feishu/WhatsApp）。值得关注的是，今日关闭了 303 个 Issues，显示维护团队正在积极清理积压；同时 442 个待合并 PR 表明社区贡献热情高涨，但 review 压力较大。整体项目健康度良好，处于**功能完善期向稳定期过渡**的阶段。

---

## 2. 版本发布

**无新版本发布**（最新版本仍为 2026.2.22-2）

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 核心改进 | 项目推进 |
|:---|:---|:---|:---|
| [#25008](https://github.com/openclaw/openclaw/pull/25008) | @zerone0x | **OpenRouter `auto` 模型跳过 reasoning 注入** | 修复 2026.2.22-2 引入的回归，恢复 OpenRouter 兼容性 |
| [#25025](https://github.com/openclaw/openclaw/pull/25025) | @hclsys | **修复 browser cookies set --url 选项冲突** | 解决 CLI 参数解析 bug，提升开发者体验 |
| [#25035](https://github.com/openclaw/openclaw/pull/25035) | @bmendonca3 | **默认拒绝 cron 工具在 /tools/invoke 的调用** | 安全加固，防止未授权访问调度器 |
| [#24686](https://github.com/openclaw/openclaw/pull/24686) | @mujiannan | **Feishu topic 会话绑定继承修复** | 解决飞书话题群会话隔离问题，企业用户关键修复 |
| [#24785](https://github.com/openclaw/openclaw/pull/24785) | @chilu18 | **dmPolicy 配置错误提示优化** | 提升配置错误可修复性，降低支持成本 |
| [#24527](https://github.com/openclaw/openclaw/pull/24527) | @easternbloc | **OpenAI 历史截断后工具结果修复** | 修复多工具调用场景下的会话损坏 |
| [#24733](https://github.com/openclaw/openclaw/pull/24733) | @Glucksberg | **resolveAgentRoute 输入 peer.kind 规范化** | 修复 `dm` vs `direct` 匹配失败，路由可靠性提升 |
| [#25044](https://github.com/openclaw/openclaw/pull/25044) | @bmendonca3 | **默认拒绝 nodes 工具在 /tools/invoke** | 安全加固，防止节点管理接口暴露 |

**整体进展评估**：今日合并的 PR 以**安全加固**（3项）、**渠道稳定性**（Feishu/Telegram/WhatsApp）、**配置体验优化**为主线，体现了项目从功能扩张向生产就绪的转型。特别是 OpenRouter 和 Feishu 的修复，直接回应了企业用户的阻断性问题。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 👍 | 核心诉求 | 分析 |
|:---|:---:|:---:|:---|:---|
| [#8576](https://github.com/openclaw/openclaw/issues/8576) | 30 | 7 | **@openclaw/feishu 安装失败** | 飞书插件安装问题成为今日焦点，反映中国企业用户增长；需关注插件分发基础设施 |
| [#25050](https://github.com/openclaw/openclaw/issues/25050) | 0 | 0 | **webchat 会话错误标记为 whatsapp** | 新报告的配置漂移问题，影响多渠道用户的会话路由准确性 |
| [#24870](https://github.com/openclaw/openclaw/issues/24870) | 3 | 3 | **Minimax 2.5 推理无法关闭** | 模型提供商兼容性问题，用户控制权诉求强烈 |
| [#23307](https://github.com/openclaw/openclaw/issues/23307) | 5 | 0 | **配置迁移时 ${ENV_VAR} 被解析为明文** | 安全敏感问题，环境变量引用在升级时泄露，已有 PR [#10258](https://github.com/openclaw/openclaw/pull/10258) 修复 |
| [#14596](https://github.com/openclaw/openclaw/issues/14596) | 4 | 0 | **子代理 write 工具缺失 content 参数** | 子代理工具调用稳定性，影响自动化工作流可靠性 |

**热点趋势**：飞书生态集成问题激增（#8576、#10549、#9246），表明中国市场成为增长重点；配置安全和环境变量处理成为信任敏感区；子代理（subagent）的稳定性问题持续被报告，是高级用户的核心痛点。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重程度 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#6413](https://github.com/openclaw/openclaw/issues/6413) | Gateway 进程虚拟内存泄漏（22GB+），重启后复现 | 开放，无 fix PR |
| 🔴 **Critical** | [#16323](https://github.com/openclaw/openclaw/issues/16323) | 安全审计：默认工具策略不安全、权限提升、Windows 命令注入 | 开放，安全专项 |
| 🟠 **High** | [#25050](https://github.com/openclaw/openclaw/issues/25050) | webchat 会话被错误标记为 whatsapp 渠道 | 开放，今日新报告 |
| 🟠 **High** | [#23307](https://github.com/openclaw/openclaw/issues/23307) | 升级时 ${ENV_VAR} 被解析为明文值，凭证泄露 | **已有 PR [#10258](https://github.com/openclaw/openclaw/pull/10258)** |
| 🟠 **High** | [#10294](https://github.com/openclaw/openclaw/issues/10294) | Ed25519 私钥以明文存储在浏览器 localStorage | **已有 PR [#10296](https://github.com/openclaw/openclaw/pull/10296)** |
| 🟡 **Medium** | [#24870](https://github.com/openclaw/openclaw/issues/24870) | Minimax 2.5 推理关闭后仍显示 | 开放 |
| 🟡 **Medium** | [#25042](https://github.com/openclaw/openclaw/issues/25042) | 子代理完成不自动触发主会话响应 | 开放 |
| 🟡 **Medium** | [#24995](https://github.com/openclaw/openclaw/issues/24995) | memory_search 导致 Node.js 堆 OOM 崩溃 | 开放 |

**稳定性评估**：内存泄漏（#6413）是最严重的生产风险，但缺乏复现细节；安全类问题有社区贡献的修复 PR，需优先 review；配置漂移和渠道标识错误是新出现的稳定性威胁。

---

## 6. 功能请求与路线图信号

### 用户提出的关键功能需求

| 需求 | Issue/PR | 状态 | 纳入可能性 |
|:---|:---|:---|:---|
| **动态工具发现**（减少上下文 token） | [#6651](https://github.com/openclaw/openclaw/issues/6651) | 开放，11 评论 | ⭐⭐⭐ 高，性能优化核心诉求 |
| **Discord 语义搜索** | [#17875](https://github.com/openclaw/openclaw/issues/17875) | 开放，4 评论 | ⭐⭐ 中，有明确实现方案 |
| **Linux 桌面语音听写**（热键→本地 STT→自动粘贴） | [#16933](https://github.com/openclaw/openclaw/issues/16933) | 开放，2 评论 | ⭐⭐ 中，社区已提供实现 |
| **Agent 生命周期 Hooks** | [#17707](https://github.com/openclaw/openclaw/issues/17707) | 开放，3 评论 | ⭐⭐⭐ 高，架构扩展性需求 |
| **每会话/每渠道推理级别覆盖** | [#17781](https://github.com/openclaw/openclaw/issues/17781) | 开放，1 评论 | ⭐⭐ 中，精细化控制诉求 |
| **可配置工具调用叙述模式** | [#17915](https://github.com/openclaw/openclaw/issues/17915) | 开放，1 评论 | ⭐⭐ 中，UX 优化 |

**路线图信号**：性能优化（动态工具发现、上下文预算）和可观测性（Hooks、追踪）是高级用户的核心诉求；语音交互和多模态能力正在从 macOS 向 Linux/Windows 扩展；企业场景需要更细粒度的策略控制（每渠道配置、安全加固）。

---

## 7. 用户反馈摘要

### 真实痛点

> *"Every request includes all tools not needed... makes responses less accurate, especially on smaller models"* — [#6651](https://github.com/openclaw/openclaw/issues/6651)

**上下文膨胀**是本地模型用户的核心痛点，直接影响成本和准确性。

> *"Feishu channel health check every 60 seconds exhausts API quota on free tier"* — [#10549](https://github.com/openclaw/openclaw/issues/10549)

**企业 IM 渠道的配额管理**缺乏精细化控制，导致生产环境意外中断。

> *"Sub-agent completion announce not delivered to main session"* — 多个相关 Issues

**子代理可靠性**是自动化工作流用户的阻断性问题，影响任务编排信任。

### 满意点

- 多渠道支持（Telegram/WhatsApp/Discord/Feishu）覆盖广泛
- 本地模型（Ollama）集成降低使用成本
- 活跃的安全响应（今日多项安全加固 PR）

### 不满意点

- 配置迁移时的凭证泄露风险（#23307）
- 文档与实现不一致（AGENTS.md 模板章节名不匹配 #25029）
- Windows 环境下的路径和权限问题持续存在

---

## 8. 待处理积压

### 长期未响应的重要 Issue/PR

| 条目 | 创建时间 | 最后活动 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#6413](https://github.com/openclaw/openclaw/issues/6413) Gateway 内存泄漏 | 2026-02-01 | 2026-02-24 | 🔴 生产稳定性 | 标记为 `priority:critical`，分配核心开发者调查 |
| [#3092](https://github.com/openclaw/openclaw/issues/3092) 会话锁超时导致渠道处理器失败 | 2026-01-28 | 2026-02-24 | 🟠 并发可靠性 | 与 #6413 可能相关，合并调查 |
| [#3344](https://github.com/openclaw/openclaw/issues/3344) Gemini 假工具调用 | 2026-01-28 | 2026-02-24 | 🟡 模型兼容性 | 已有多个相关 PR，需统一方案 |
| [#16323](https://github.com/openclaw/openclaw/issues/16323) 安全审计综合问题 | 2026-02-14 | 2026-02-24 | 🔴 安全合规 | 建立安全专项里程碑，分阶段修复 |
| [#17299](https://github.com/openclaw/openclaw/issues/17299) Agents Plane（多租户） | 2026-02-15 | 2026-02-24 | 🟡 企业功能 | 评估与现有架构兼容性，标记 `roadmap` |

**维护者提醒**：今日 442 个待合并 PR 中，建议优先 review 安全类（#10258, #10296, #10174）和渠道稳定性类（Feishu/Telegram 相关）贡献，以平衡社区贡献接纳与核心稳定性保障。

---

*日报生成时间：2026-02-24 | 数据来源：OpenClaw GitHub 仓库*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*