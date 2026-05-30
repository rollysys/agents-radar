# OpenClaw 生态日报 2026-05-30

> Issues: 325 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-30 03:40 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报
**日期**: 2026-05-30

---

## 今日速览

OpenClaw 今日活跃度极高，24 小时内 Issues 更新 325 条（新开 156 条，关闭 169 条），PR 更新 500 条（待合并 334 条，已合并/关闭 166 条）。项目连续发布了 **4 个 beta 版本 (v2026.5.28-beta.1 至 beta.4)**，全部聚焦于 Agent 和 Codex 运行时恢复机制的稳定性增强，显示出团队正在密集修复近期引入的回归问题。社区反馈活跃，多条 P1 级 Bug 报告涉及跨平台 UI 回归、OAuth 认证失效、消息丢失等关键问题，维护者响应积极。整体而言，项目处于高频迭代修复阶段，健康度良好但稳定性压力较大。

---

## 版本发布

### v2026.5.28-beta.4 / beta.3 / beta.2 / beta.1
**发布日期**: 2026-05-28

**核心更新**: Agent and Codex runtime recovery 更稳固
- **Subagents 工作区隔离**: 子代理保持独立的 cwd/workspace 分离
- **Hook 上下文作用域**: hook 上下文保持在 prompt-local 范围
- **Session 锁超时释放**: 超时中止时正确释放会话锁
- **重启续传修复**: 避免陈旧的重启续传状态
- **Codex 组件容错**: Codex app-server/helper 故障不再破坏共享运行时状态

**迁移注意事项**: 无破坏性变更，建议所有 beta 用户升级至最新版本以获得运行时稳定性修复。

---

## 项目进展

### 已合并/关闭的重要 PR

| PR | 摘要 | 影响 |
|----|------|------|
| [#88127](https://github.com/openclaw/openclaw/pull/88127) | **perf(test): fix explicit-file Vitest wrapper hangs** | 修复测试框架挂起问题，提升 CI 稳定性 |
| [#88083](https://github.com/openclaw/openclaw/pull/88083) | **fix(agent): preserve media task success on delivery miss** | 修复媒体生成成功但投递失败时的状态丢失问题 |
| [#87141](https://github.com/openclaw/openclaw/pull/87141) | **fix(plugin): harden schema and metadata fuzz boundaries** | 加固插件 schema 边界，提升安全性 |

### 待合并的重要 PR（高优先级）

| PR | 摘要 | 状态 |
|----|------|------|
| [#81402](https://github.com/openclaw/openclaw/pull/81402) | **refactor: move runtime state to SQLite** | XL 级重构，将运行时状态从 JSON/JSONL 迁移至 SQLite，解决文件锁和数据一致性问题 |
| [#84234](https://github.com/openclaw/openclaw/pull/84234) | **fix(cli-runner): write-side flush gate + orphan-tool-use invalidator** | 修复 CLI runner 会话恢复上下文丢失问题 |
| [#81851](https://github.com/openclaw/openclaw/pull/81851) | **feat(anthropic): claude-cli-interactive backend** | 新增本地 TLS 代理实现 Claude 交互式流式推理 |

**项目整体进展**: 本日关闭 169 个 Issue、合并 166 个 PR，主要是针对运行时稳定性、OAuth 认证、消息投递等核心问题的修复。大型架构重构 PR (#81402 SQLite 迁移) 仍在审核中，有望从根本上解决会话锁和状态持久化问题。

---

## 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 痛点分析 |
|-------|------|----------|
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | 13 | **Windows UI 回归**: 4.14 版本后 Web Dashboard 输入框吞字、流式回复不可见，用户需刷新才能看到内容，严重影响日常使用 |
| [#84038](https://github.com/openclaw/openclaw/issues/84038) | 12 | **doctor --fix 破坏配置**: 自动修复工具错误迁移 openai-codex 配置到 openai，导致 PI+OAuth 运行时损坏且 token 消耗飙升 3-4 倍 |
| [#87177](https://github.com/openclaw/openclaw/issues/87177) | 11 | **QQBot 消息重复**: 心跳会话泄漏非标准内容，导致消息重复发送 |
| [#86820](https://github.com/openclaw/openclaw/issues/86820) | 11 | **OAuth Compaction 回退**: Codex OAuth 压缩失败回退到直连 OpenAI API，因缺少 API Key 而报错 |
| [#88102](https://github.com/openclaw/openclaw/issues/88102) | 11 | **模型路由拒绝**: 5.27 版本后 Codex runtime 拒绝 openai/gpt-5.5，用户被迫使用 codex/gpt-5.5 变通 |

### 背后诉求

1. **跨平台稳定性**: Windows 用户占比大，UI 回归问题影响面广
2. **配置迁移安全**: 自动化工具 (`doctor --fix`) 需更保守，避免破坏生产环境
3. **OAuth 认证健壮性**: 多模型、多 Provider 场景下的认证链路脆弱

---

## Bug 与稳定性

### P1 级严重 Bug（按严重程度排序）

| Issue | 状态 | 描述 | 修复 PR |
|-------|------|------|---------|
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | OPEN | Windows Chat UI 回归：输入吞字、流式回复不可见 | 无 |
| [#84038](https://github.com/openclaw/openclaw/issues/84038) | CLOSED | doctor --fix 破坏配置导致 token 通胀 | 需确认 |
| [#87177](https://github.com/openclaw/openclaw/issues/87177) | OPEN | QQBot 消息重复 | 无 |
| [#87711](https://github.com/openclaw/openclaw/issues/87711) | OPEN | Telegram 首轮空回复（只有 footer） | 无 |
| [#87646](https://github.com/openclaw/openclaw/issues/87646) | OPEN | Feishu 升级后无法分发消息 | 无 |
| [#83184](https://github.com/openclaw/openclaw/issues/83184) | OPEN | 心跳驱动回复卡住 pendingFinalDelivery | 无 |
| [#88102](https://github.com/openclaw/openclaw/issues/88102) | CLOSED | Codex runtime 拒绝 openai/gpt-5.5 | 已关闭 |

### 回归问题汇总

- **v2026.4.14+**: Windows WebChat UI 渲染回归 ([#67035](https://github.com/openclaw/openclaw/issues/67035))
- **v2026.5.22**: Event-loop 饥饿回归 ([#86509](https://github.com/openclaw/openclaw/issues/86509)) - 已关闭
- **v2026.5.26+**: Native hook relay 不可用 ([#87536](https://github.com/openclaw/openclaw/issues/87536)) - 已关闭
- **v2026.5.27**: Feishu 消息分发失败 ([#87646](https://github.com/openclaw/openclaw/issues/87646))

---

## 功能请求与路线图信号

### 新功能需求

| Issue | 描述 | 潜在纳入信号 |
|-------|------|-------------|
| [#88154](https://github.com/openclaw/openclaw/issues/88154) | **Slack Modal 支持**: 工作流交互式弹窗 | 无相关 PR，处于需求阶段 |
| [#17925](https://github.com/openclaw/openclaw/issues/17925) | **原生 web_search passthrough**: 支持 ZAI/GLM 和 Google/Gemini | 无相关 PR |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | **Per-agent dreaming 配置**: 避免 OOM | 无相关 PR |
| [#10118](https://github.com/openclaw/openclaw/issues/10118) | **TUI Shift+Enter 换行** | 无相关 PR |

### 已有 PR 对应的功能增强

| PR | 功能 | 状态 |
|----|------|------|
| [#81851](https://github.com/openclaw/openclaw/pull/81851) | Claude CLI 交互式后端 | 待合并 |
| [#82596](https://github.com/openclaw/openclaw/pull/82596) | Exec denylist 功能 | 待合并 |
| [#87072](https://github.com/openclaw/openclaw/pull/87072) | Telegram 交错进度显示 | 待合并 |
| [#81834](https://github.com/openclaw/openclaw/pull/81834) | SenseAudio TTS Provider | 待合并 |

---

## 用户反馈摘要

### 真实痛点

1. **UI 可用性下降**: Windows 用户反馈 Web Dashboard 输入体验严重退化，"typing indicator flashes then blanks"，需频繁刷新页面 ([#67035](https://github.com/openclaw/openclaw/issues/67035))

2. **配置工具不可信**: `doctor --fix` 自动迁移导致生产环境配置损坏，用户对自动化工具失去信任 ([#84038](https://github.com/openclaw/openclaw/issues/84038))

3. **Token 成本失控**: Codex 原生运行时 token 消耗比 OpenClaw PI 运行时高 3-4 倍，增加成本压力 ([#84038](https://github.com/openclaw/openclaw/issues/84038))

4. **多渠道消息丢失**: Telegram、Feishu、Matrix 等渠道出现消息路由错误或丢失 ([#77576](https://github.com/openclaw/openclaw/issues/77576), [#87646](https://github.com/openclaw/openclaw/issues/87646))

### 满意点

- SQLite 运行时状态重构 ([#81402](https://github.com/openclaw/openclaw/pull/81402)) 获得社区期待，有望解决长期存在的文件锁问题
- 4 个 beta 版本快速迭代，团队对稳定性问题响应及时

---

## 待处理积压

### 长期未解决的 P1 Issue

| Issue | 创建日期 | 状态 | 提醒 |
|-------|----------|------|------|
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | 2026-04-15 | OPEN | Windows UI 回归已持续 45 天，影响面广，建议优先处理 |
| [#54155](https://github.com/openclaw/openclaw/issues/54155) | 2026-03-25 | OPEN | Gateway 内存泄漏：4 天内从 389MB 增长至 14.7GB |
| [#75378](https://github.com/openclaw/openclaw/issues/75378) | 2026-05-01 | OPEN | 子代理并发导致事件循环阻塞和 1012 重启 |

### 长期未合并的重要 PR

| PR | 创建日期 | 状态 | 提醒 |
|----|----------|------|------|
| [#42637](https://github.com/openclaw/openclaw/pull/42637) | 2026-03-11 | OPEN | Skills 截断时显示省略的技能名称，等待 Review |
| [#52365](https://github.com/openclaw/openclaw/pull/52365) | 2026-03-22 | OPEN | Cron 预算耗尽时停止 fallback 尝试 |
| [#71652](https://github.com/openclaw/openclaw/pull/71652) | 2026-04-25 | OPEN | 主机压力下拒绝本地 tsgo 检查 |

---

**报告生成时间**: 2026-05-30 | **数据来源**: OpenClaw GitHub Repository

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告 (2026-05-30)

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于从“功能爆发”向“稳定性与安全性重构”转型的关键时期。头部项目（如 OpenClaw, Hermes）正密集解决高频迭代带来的运行时回归问题与多智能体协作架构，而腰部项目则聚焦于垂直场景适配（如 DeepSeek 推理模式兼容、桌面端体验）与底层安全加固。整体技术栈呈现出**存储方案向 SQLite 迁移**、**通信协议向 MCP/A2A 演进**、**执行环境向沙箱化隔离**的三大明显趋势。

## 2. 各项目活跃度对比

| 项目 | Issues 动态 (更新/新开/关闭) | PRs 动态 (更新/待合并/已合并) | Release 情况 | 健康度/阶段评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 325 / 156 / 169 | 500 / 334 / 166 | 4 Beta (v2026.5.28) | **高频迭代**：修复回归，社区极度活跃，压力较大 |
| **Hermes Agent**| 50 / 35 / 15 | 50 / 30 / 20 | v0.15.2 | **快速演进**：架构调整，聚焦协议与成本优化 |
| **CoPaw** | 48 (活跃) | 31 (活跃) | v1.1.10-beta.1 | **功能扩展**：多智能体协作增强，迁移准备中 |
| **IronClaw** | 17 (活跃) | 50 / - / 22 | 无 (Crates.io 滞后) | **架构重构**：Reborn 攻坚期，凭证体系重构 |
| **Zeroclaw** | 21 (活跃) | 49 / - / 12 | 无 | **稳定维护**：核心 Provider 修复，兼容性增强 |
| **NanoBot** | 30 / 30 / 2 | 40 (大量待审) | 无 | **质量夯实**：安全审计期，积压多，Issue 堆积 |
| **LobsterAI** | 1 (新增) | 14 / - / 9 | 无 | **性能优化**：解决大输出渲染瓶颈 |
| **NanoClaw** | 少量 (1 高优) | 7 / 5 / 2 | 无 | **快速迭代**：Telegram 适配与安全审计 |
| **NullClaw** | 0 | 7 / 2 / 4 | v2026.5.29 | **稳健迭代**：底层系统修复，构建兼容性 |
| **PicoClaw** | 4 (活跃) | 8 / 4 / 4 | v0.2.9 | **功能完善**：国际化与 UI 配置 |
| **EasyClaw** | 0 | 0 | v1.8.18/19 | **静默维护**：CI/CD 签名加固 |
| **Moltis** | 3 (2 新增) | 2 / 1 / 1 | 无 | **跨平台适配**：面临 Apple Silicon 挑战 |

## 3. OpenClaw 在生态中的定位

作为生态中的**核心参照项目**，OpenClaw 展现出了典型的“平台级”特征：
*   **规模效应**：Issues 和 PRs 活跃度断层领先（更新量是第二梯队的 6-10 倍），拥有最庞大的社区用户群和贡献者基数。
*   **技术路线**：聚焦于**运行时内核的稳定性**（如 SQLite 迁移 PR #81402、Session 锁机制），试图解决高并发和多轮对话中的状态一致性问题。相比 Hermes 对“通信协议”的探索，OpenClaw 更像是在打造一个**稳固的操作系统内核**。
*   **社区痛点**：高度活跃背后是“稳定性”与“新特性”的激烈博弈。Windows UI 回归（#67035）和配置迁移破坏（#84038）等 P1 级 Bug 频发，反映出其发布流程和质量把控面临巨大挑战，这也是大规模通用平台型项目的典型特征。

## 4. 共同关注的技术方向

多项目在同一天动态中折射出高度一致的技术诉求：

1.  **DeepSeek 推理模型适配**
    *   **涉及项目**：Zeroclaw, Hermes Agent
    *   **具体诉求**：DeepSeek V4 等推理模型在多轮对话中对 `reasoning_content` 的处理成为共性痛点。Zeroclaw 修复了上下文压缩导致推理内容丢失的问题，Hermes 也修复了相关参数映射。表明**推理模型已成为 Agent 核心支持的标配**，但协议适配仍处于补课阶段。

2.  **记忆与上下文管理**
    *   **涉及项目**：OpenClaw, NanoBot, IronClaw, CoPaw
    *   **具体诉求**：
        *   OpenClaw 推动 SQLite 持久化以解决 JSON 文件锁问题；
        *   NanoBot 遭遇“短期记忆丢失”痛点；
        *   IronClaw 探索自动触发 `memory_write`；
        *   CoPaw 面临向量库索引膨胀问题。
    *   **趋势**：简单的上下文截断已无法满足需求，**结构化压缩**与**持久化存储**是当前演进方向。

3.  **供应链与沙箱安全**
    *   **涉及项目**：NanoClaw, Hermes Agent, Moltis
    *   **具体诉求**：NanoClaw 警示 MCP 工具供应链风险；Hermes 修复了 Config 明文存储和 MCP 命令绕过审批漏洞；Moltis 遭遇沙箱逃逸挑战。随着 Agent 权限扩大（如执行 Shell、读取文件），**安全性已从“可选项”变为“阻断项”**。

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | Zeroclaw | PicoClaw / CoPaw |
| :--- | :--- | :--- | :--- | :--- |
| **核心定位** | **通用智能体宿主** | **多智能体协作协议** | **高兼容性网关** | **桌面/端侧应用** |
| **技术侧重** | 运行时恢复、状态持久化 | A2A 协议、Token 成本优化 | Provider 适配、模型路由 | GUI 体验、本地化集成 |
| **目标用户** | 开发者、极客、自托管用户 | 企业级多智能体开发者 | 追求性价比/多模型切换用户 | 普通消费者、轻度用户 |
| **架构特点** | 单体/主从架构，重内核 | 分布式/协作架构，重通信 | 网关代理架构，重路由 | Electron/Vite 桌面壳，重交互 |

## 6. 社区热度与成熟度

*   **快速迭代期**：
    *   **OpenClaw**：处于 Beta 版本高频发布期，稳定性修复与回归问题并存，社区反馈极快。
    *   **Hermes Agent**：架构演进迅速，A2A 协议支持呼声高，处于功能扩展与性能优化的黄金期。
    *   **IronClaw**：处于“Reborn”架构重构攻坚期，凭证体系重构虽痛但必要。

*   **质量巩固期**：
    *   **NanoBot**：明显的“还债”阶段，核心贡献者集中修复安全漏洞和并发 Bug，Issue 积压是质量提升的前兆。
    *   **LobsterAI**：针对大输出场景进行性能优化，关注点从“能用”转向“好用/流畅”。
    *   **EasyClaw / NullClaw**：进入底层维护阶段，关注 POSIX 兼容性和代码签名，标志着产品走向成熟。

## 7. 值得关注的趋势信号

1.  **Token 经济学成为核心考量**：Hermes 社区关于 Lazy Tool Schema Loading 的讨论（#6839）与 OpenClaw 中 Codex 运行时 Token 消耗飙升的 Bug（#84038）表明，随着模型能力增强和成本累积，**Token 消耗优化**将成为 Agent 框架的核心竞争力之一。
2.  **桌面端“正规军”化**：EasyClaw 完成 macOS 公证和 Windows 签名，PicoClaw 发布 v0.2.9 完善配置 UI，LobsterAI 优化大输出渲染。这标志着个人 AI 助手正从“CLI 玩具”向**企业级/消费级桌面应用**跨越，安装信任度和 UI 流畅度成为硬指标。
3.  **MCP（Model Context Protocol）标准化加速**：多个项目提及 MCP 配置 UI（PicoClaw）、MCP 工具安全（NanoClaw, Hermes, Moltis）。MCP 正成为连接 Agent 与外部工具的事实标准，围绕其安全性、配置体验和工具链的竞争将成为下一阶段的焦点。
4.  **企业级集成需求爆发**：Slack、Feishu、企业微信等渠道的适配问题频繁出现在 Bug 列表中（Zeroclaw, OpenClaw），显示 AI 智能体正在从个人玩具渗透进**企业内部工作流**，对稳定性（OAuth、消息路由）的要求远超个人场景。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-30)

## 1. 今日速览
NanoBot 项目今日处于**高强度维护与安全加固**状态。尽管 Issue 新增量（30条）远超关闭量（2条），但这主要源于核心贡献者 @hamb1y 对项目进行了一次深度的安全审计与边界测试，单日提交了十余个针对并发、权限和协议解析的修复补丁。PR 活跃度极高（更新 40 条），主要集中在堵塞安全漏洞（如 SSRF、鉴权绕过）和提升系统稳定性。社区方面，用户对 Agent 的“短期记忆丢失”问题反馈强烈，核心开发者正在推进相关修复。整体来看，项目正在经历一次重要的质量夯实过程，短期内的 Issue 堆积是质量提升的前兆。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日项目进展主要集中在**安全性增强**与**核心逻辑修复**，共有 2 个 PR 关闭/合并，大量修复 PR 处于待合并状态：
*   **模型预设功能落地**：[PR #3696](HKUDS/nanobot PR #3696) 已关闭（预计已合并），引入了模型预设配置与自动故障转移机制，显著提升了多模型切换的灵活性。
*   **跨平台兼容性修复**：[PR #4051](HKUDS/nanobot PR #4051) 修复了 Windows 环境下多行命令执行的兼容性问题，改善了 Windows 用户的使用体验。
*   **安全与并发修复推进**：核心贡献者提交了一系列针对性极强的修复 PR，包括修复 WebSocket 鉴权漏洞的 [PR #4103](HKUDS/nanobot PR #4103)、修复并发写入导致历史记录损坏的 [PR #4104](HKUDS/nanobot PR #4104)，以及解决 MCP SSRF 风险的 [PR #4100](HKUDS/nanobot PR #4100)。

## 4. 社区热点
今日社区讨论最热烈的问题集中在 Agent 的记忆与上下文管理上：
*   **[Issue #4044](HKUDS/nanobot Issue #4044) [bug] short term memory loss**  
    **热度**：评论数 4 条（今日最高）  
    **分析**：用户反馈 Agent 在提问后立即遗忘上下文，导致对话链条断裂。这直指 NanoBot 的核心痛点——上下文窗口压力与记忆修剪策略的平衡。该问题引发了关于 `MEMORY.md` 与上下文截断机制的深入讨论，是当前用户体验最大的绊脚石。

## 5. Bug 与稳定性
今日报告了多个中高危 Bug，主要集中在**安全性**与**并发稳定性**，且大部分已提交对应修复：

*   **【高危-安全】未授权访问风险**  
    [Issue #4078](HKUDS/nanobot Issue #4078)：OpenAI 兼容接口接受未认证请求；[Issue #4077](HKUDS/nanobot Issue #4077)：WebSocket token 签发缺陷。  
    *修复状态*：已有对应修复 PR [PR #4103](HKUDS/nanobot PR #4103) 等待合并。

*   **【高危-稳定】并发竞态条件**  
    [Issue #4081](HKUDS/nanobot Issue #4081)：并发写入可能导致历史游标重复；[Issue #4080](HKUDS/nanobot Issue #4080)：`process_direct` 绕过会话锁导致并发冲突。  
    *修复状态*：已提交 [PR #4104](HKUDS/nanobot PR #4104) 修复会话锁问题。

*   **【中危-逻辑】上下文修剪缺陷**  
    [Issue #4056](HKUDS/nanobot Issue #4056)：上下文修剪可能误删紧邻用户回复的助手提问，导致模型困惑。  
    *修复状态*：已提交 [PR #4089](HKUDS/nanobot PR #4089) 优化修剪逻辑。

## 6. 功能请求与路线图信号
*   **手动记忆模式**：[PR #4050](HKUDS/nanobot PR #4050) 提议引入“手动记忆模式”，隔离自动记忆流。这直接响应了 Issue #4044 中用户对自动记忆不可控的担忧，预计将成为下一阶段优化的重点。
*   **文档提取灵活性**：[Issue #4043](HKUDS/nanobot Issue #4043) 建议增加配置以禁用自动文档提取。该 Issue 已关闭，暗示相关功能可能在后续版本中提供开关，提升工作流定制能力。

## 7. 用户反馈摘要
*   **记忆连贯性是核心诉求**：用户对 Agent“转头就忘”的现象容忍度低，期望系统能更智能地保留关键对话上下文，而非简单的截断。
*   **API 经济性提醒**：[Issue #3006](HKUDS/nanobot Issue #3006) 反映 API Key 欠费时无警告，用户希望增加更友好的错误反馈，避免误以为是系统宕机。
*   **工作流定制需求**：用户希望对文档提取、工具调用路径有更细粒度的控制权（如 Issue #4043），而非“全家桶式”的自动处理。

## 8. 待处理积压
*   **安全审计 PR 积压**：目前有大量由 @hamb1y 提交的安全与稳定性修复 PR（如 [PR #4099](HKUDS/nanobot PR #4099), [PR #4098](HKUDS/nanobot PR #4098)）处于 Open 状态。建议维护团队优先 Review 并合并这些涉及安全边界的 PR，以消除潜在风险。
*   **核心功能 PR**：[PR #4050](HKUDS/nanobot PR #4050)（手动记忆模式）虽未合并但意义重大，建议尽快排期 Review，以解决社区反馈强烈的记忆管理痛点。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-30)

## 1. 今日速览
Zeroclaw 项目今日保持**高活跃度**，共处理 Issue 更新 21 条，PR 更新 49 条，其中 12 个 PR 已合并/关闭。项目重心主要集中在**修复影响核心功能的 Bug**（特别是 DeepSeek 推理模式与 Windows 桌面端构建）以及**推进 v0.7.6/v0.7.8 版本的特性落地**。今日虽然没有发布新版本，但多项关键修复（如 `reasoning_content` 丢失问题）已合并，显著提升了系统稳定性。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **12 个 PR 合并/关闭**，显著推进了以下领域：

*   **核心 Provider 修复**：合并了 PR [#6284](https://github.com/zeroclaw-labs/zeroclaw/pull/6284) 和 [#6285](https://github.com/zeroclaw-labs/zeroclaw/pull/6285)，修复了 DeepSeek 等思考模式 Provider 在上下文压缩和非工具调用场景下丢失 `reasoning_content` 的严重问题，恢复了多轮对话能力。
*   **桌面端构建修复**：合并了 PR [#6987](https://github.com/zeroclaw-labs/zeroclaw/pull/6987)，移除了手动 Manifest 链接器标志，解决了 Windows 平台 CVT1100/LNK1123 构建失败问题，恢复了 Windows 桌面端的 CI/CD 流程。
*   **架构优化**：合并了 PR [#6907](https://github.com/zeroclaw-labs/zeroclaw/pull/6907)，引入 `MemoryStrategy` trait，解耦了高层内存策略与底层存储，为后续更灵活的记忆管理打下基础。
*   **网络与工具增强**：合并了 PR [#5450](https://github.com/zeroclaw-labs/zeroclaw/pull/5450)，为 `web_fetch` 等工具增加了 IPv6 支持；合并了 PR [#6945](https://github.com/zeroclaw-labs/zeroclaw/pull/6945)，允许为 Agent 配置独立的 `classifier_provider`，降低了主模型在意图分类上的成本。

## 4. 社区热点
今日社区讨论最活跃的话题集中在 DeepSeek 兼容性与系统安全性：

*   **DeepSeek 推理内容丢失 (Issue #6233)**：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6233)
    *   **热度**：8 条评论。
    *   **分析**：用户在使用 DeepSeek V4 进行多轮对话时遭遇 API 400 错误。讨论揭示了 `chat_messages_to_native()` 函数在处理纯文本 Assistant 消息时存在逻辑缺陷，导致推理链条断裂。该问题已通过今日合并的 PR #6284 修复。
*   **MCP 工具过滤失效 (Issue #6699)**：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)
    *   **热度**：7 条评论。
    *   **分析**：用户发现 `tool_filter_groups` 配置对真实 MCP 工具无效。维护者与社区深入讨论了前缀匹配 Bug 及延迟加载机制的集成问题，这反映了用户对精细化工具权限控制的强烈需求。
*   **企业微信 集成 (Issue #3090)**：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3090)
    *   **热度**：5 条评论。
    *   **分析**：社区用户长期期待支持企业微信渠道，该 Issue 的活跃表明了 ToB 场景下国内办公软件集成的高优先级。

## 5. Bug 与稳定性
今日报告了多个高风险 Bug，部分已有修复方案：

*   **[S1 - 严重] Slack Socket Mode 认证失败 (Issue #6992)**：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6992)
    *   **现象**：Slack 渠道拒绝所有消息，提示 "unauthorized user"，导致渠道完全不可用。目前暂无关联 Fix PR。
*   **[S1 - 严重] 工具序列化绕过安全策略 (Issue #6991)**：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6991)
    *   **现象**：v0.8.0-beta-1 中，原生工具序列化未遵循 Risk Profile 和 Tool Filter 限制，存在安全隐患。目前暂无关联 Fix PR。
*   **[S1 - 严重] Telegram 语音转录失败 (Issue #6999)**：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6999)
    *   **现象**：多 Agent 配置下，语音消息因转录提供者配置解析错误而被静默丢弃。
*   **[S2 - 中等] CLI 退格键处理 Bug (Issue #6995)**：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6995)
    *   **现象**：交互模式下退格键按字节删除而非按字符删除，影响 CJK 用户输入体验。

## 6. 功能请求与路线图信号
*   **本地优先模式 (Issue #5287)**：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)
    *   用户请求针对本地小模型优化 Prompt 体积，并防止系统指令泄露。鉴于其获得 2 个点赞且为 `priority:p2`，可能被纳入后续版本规划。
*   **沙箱策略精细化 RFC (Issue #6996)**：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)
    *   提议在配置层面控制文件系统和网络权限，增强沙箱安全性。目前标记为 `needs-maintainer-review`，是架构演进的重要信号。
*   **v0.7.8 Desktop Polish (Issue #7015)**：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7015)
    *   官方发布 v0.7.8 桌面端优化队列，涵盖菜单栏、托盘及无障碍功能，明确了短期发版目标。

## 7. 用户反馈摘要
*   **痛点：DeepSeek 兼容性**：多位用户反馈在使用 DeepSeek V4 时出现多轮对话崩溃（#6233, #6269），主要痛点在于推理内容的处理机制与 API 严格要求不匹配。
*   **痛点：构建与部署**：Windows 桌面端构建失败（#6964）阻断了部分用户的升级路径，反馈及时且修复迅速。
*   **场景：企业级集成**：用户对 Slack、Telegram 和企业微信的稳定性及配置灵活性要求极高，特别是多 Agent 场景下的 Provider 路由和鉴权问题（#6992, #7001）。

## 8. 待处理积压
*   **审计 153 个丢失的 Commit (Issue #6074)**：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)
    *   状态为 `in-progress`。该问题涉及历史代码回滚导致的功能丢失，技术债较重，需持续关注恢复进度。
*   **v0.8.1 集成队列 (Issue #6970)**：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)
    *   作为 v0.8.1 的路线图追踪 Issue，目前汇聚了多个高优先级的渠道与 Provider 集成任务，需维护者定期梳理。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-30)

## 1. 今日速览
Hermes Agent 项目今日保持高度活跃，共处理了 **50 条 Issues 更新**（35 新开/活跃，15 关闭）和 **50 条 PRs 更新**（30 待合并，20 已合并/关闭），并发布了 **v2026.5.29.2 (v0.15.2)** 补丁版本。社区讨论焦点集中在 **Agent 间通信协议 (A2A)** 的支持与 **Token 消耗优化** 上，显示出项目正积极向多智能体协作与性能优化方向探索。同时，针对 Docker 部署、安全性及 Provider 兼容性等核心问题的修复也在积极推进中，整体项目健康度良好，迭代速度快。

## 2. 版本发布
**版本号**: v2026.5.29.2 (Hermes Agent v0.15.2)
**发布日期**: 2026-05-29

**更新内容**:
- **🐛 Bug Fixes**: 修复了打包问题，确保 `plugin.yaml` manifests 被正确打包到 wheel 和 sdist 中 ([Commit 827f7f0](https://github.com/NousResearch/hermes-agent/commit/827f7f07825be57108cbea18325e8f5e9fb5d2f2))。

**影响分析**: 此版本主要修复安装包缺失配置文件的问题，建议通过 pip 安装的用户尽快升级至 v0.15.2 以避免插件加载失败。

---

## 3. 项目进展
今日共有 **20 个 PR 被合并或关闭**，显著提升了系统的稳定性与兼容性：

- **GUI 进程合并** ([PR #35038](https://github.com/NousResearch/hermes-agent/pull/35038)): 将 `main` 分支合并至 `bb/gui`，同步了 264 个提交，为即将推出的桌面端应用铺平道路。
- **Telegram 连接稳定性** ([PR #27317](https://github.com/NousResearch/hermes-agent/pull/27317)): 彻底重构了 Telegram 网络错误恢复逻辑，移除了与 python-telegram-bot 内部重试冲突的自建重试机制，解决了长期存在的“重连金字塔”问题。
- **邮件网关安全与兼容性** ([PR #16340](https://github.com/NousResearch/hermes-agent/pull/16340), [PR #19966](https://github.com/NousResearch/hermes-agent/pull/19966)): 修复了 8-bit 邮件头导致的崩溃，并增加了非白名单发件人过滤机制，防止邮件循环。
- **Provider 适配优化** ([PR #17195](https://github.com/NousResearch/hermes-agent/pull/17195)): 修复了 DeepSeek API 的 `reasoning_effort` 参数映射，并增加了 Gemini 的 `thinking_config` 支持。
- **记忆组件修复** ([PR #29664](https://github.com/NousResearch/hermes-agent/pull/29664)): 修复了 OpenViking 记忆提取管道断裂的问题，绕过了上游缺陷。

---

## 4. 社区热点
今日社区讨论最为热烈的话题围绕 **互操作性** 与 **性能瓶颈** 展开：

1.  **A2A 协议支持** ([Issue #514](https://github.com/NousResearch/hermes-agent/issues/514))
    - **热度**: 👍 12 | 💬 24
    - **分析**: 社区强烈呼吁支持 Google 的 A2A (Agent-to-Agent) 协议。用户希望 Hermes 能从“单体工具调用”进化为“多智能体协作网络”，解决“谁能帮我”的问题，这与现有的 MCP 协议形成互补。

2.  **Lazy Tool Schema Loading** ([Issue #6839](https://github.com/NousResearch/hermes-agent/issues/6839))
    - **热度**: 👍 13 | 💬 20
    - **分析**: 针对本地模型和高 Token 消耗的痛点。用户指出当前每次调用都注入全量 Tool Schema（约 3500-5000 tokens），导致成本高昂且性能下降。建议采用两阶段注入方案，反映出生产环境对成本控制的迫切需求。

3.  **Docker 镜像启动失败** ([Issue #34071](https://github.com/NousResearch/hermes-agent/issues/34071))
    - **热度**: 💬 13 (已关闭)
    - **分析**: v0.15.0 版本 Docker 镜像缺失关键启动脚本导致大规模部署受阻，该问题引发了运维用户的强烈关注，目前已有相关修复跟进。

---

## 5. Bug 与稳定性
今日报告的关键 Bug 集中在 **安全、配置与部署** 方面：

### 🔴 P1 / 严重
- **MCP 命令绕过审批机制** ([Issue #32877](https://github.com/NousResearch/hermes-agent/issues/32877) [CLOSED]):
  - **问题**: `approval.py` 仅挂载于 terminal_tool，导致 MCP 包装的命令（SSH, Docker 等）可绕过危险命令检查。
  - **状态**: 已关闭，推测已修复。
- **Config 明文存储 API Key** ([Issue #35091](https://github.com/NousResearch/hermes-agent/issues/35091) [CLOSED]):
  - **问题**: `hermes config set` 将 API keys 写入 `config.yaml` 明文，违反安全规范。
  - **状态**: 已关闭。
- **Docker 镜像缺失文件** ([Issue #34071](https://github.com/NousResearch/hermes-agent/issues/34071) [CLOSED]):
  - **问题**: v0.15.0 镜像缺失 `stage2-hook.sh` 等文件，容器启动失败。

### 🟠 P2 / 中等
- **Cerebras 模型多轮对话失败** ([Issue #34716](https://github.com/NousResearch/hermes-agent/issues/34716)):
  - **问题**: 使用 Cerebras 模型时，第二轮对话报错 `reasoning_content` 不支持。
- **非默认 Profile 网关 SSH 失败** ([Issue #35059](https://github.com/NousResearch/hermes-agent/issues/35059)):
  - **问题**: 使用非默认 profile 启动网关时，因 HOME 变量未正确设置导致无法找到 SSH config。
- **CLI Update 失败** ([Issue #35105](https://github.com/NousResearch/hermes-agent/issues/35105) [CLOSED]):
  - **问题**: `hermes update` 在使用 uv 环境时因未指定目标 Python 环境而失败。

### 🟡 待修复 PR
- [PR #35118](https://github.com/NousResearch/hermes-agent/pull/35118): 修复 Starlette CVE-2026-48710 BadHost 漏洞（待合并）。
- [PR #35117](https://github.com/NousResearch/hermes-agent/pull/35117): 修复 Weixin/WeChat 网关的 asyncio 超时问题。

---

## 6. 功能请求与路线图信号
- **Dashboard 远程访问** ([Issue #10567](https://github.com/NousResearch/hermes-agent/issues/10567)): 用户请求增加 `--host` 和 CORS 配置以支持 Tailscale/VPN 远程访问 Dashboard，这对于远程运维场景非常关键。
- **桌面端应用** ([PR #20059](https://github.com/NousResearch/hermes-agent/pull/20059)): 社区正在开发基于 Electron/Vite 的桌面端应用，目前仍在活跃开发中，未合并。
- **Hermes 进程命名** ([PR #35111](https://github.com/NousResearch/hermes-agent/pull/35111)): 提议将进程名设置为 `hermes` 而非 `python3`，提升运维可观测性。

---

## 7. 用户反馈摘要
- **本地模型用户痛点**: Issue #6839 反映出本地模型用户对 Token 开销极其敏感，认为当前全量工具注入是“不可接受的资源浪费”。
- **部署体验**: Docker 镜像的问题（Issue #34071）让部分运维用户感到挫败，认为基础镜像的稳定性应作为最高优先级保障。
- **安全意识**: 用户对 API Key 明文存储（Issue #35091）和 MCP 权限绕过（Issue #32877）表示担忧，强调项目安全合规需加强。
- **特定平台兼容**: Cerebras 和 Nix 用户遇到了较为边缘的兼容性问题，期待官方提供更广泛的开箱即用支持。

---

## 8. 待处理积压
- **Issue #11096** (P1): 涉及 v0.9.0 版本遗留的 `context_length` 覆盖和配置优先级问题，虽有 Workaround 但尚未有彻底修复的迹象，需核心团队关注。
- **Issue #25184**: Mattermost 移动端用户无法发送命令的问题长期未解，影响特定平台的可用性。
- **Issue #32517**: Linux 下 TUI+tmux 的输入丢失问题仍处于 Open 状态，影响重度终端用户的体验。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-30)

## 1. 今日速览
PicoClaw 项目今日迎来了重要的 **v0.2.9 正式版**发布，同时也推送了最新的 Nightly 构建，显示出项目正在加速迭代周期。社区活跃度保持健康，共有 8 个 PR 更新和 4 个 Issue 更新，其中国际化进程明显加快（新增繁体中文、捷克语支持）。核心功能上，新增了 MCP 配置 UI 支持并优化了视觉图像处理管线。不过，用户反馈中关于 QQ 频道稳定性和执行命令的问题需要关注。总体而言，项目正在从功能堆叠向稳定性和易用性方向演进。

## 2. 版本发布
今日发布了 **v0.2.9** 正式版本，包含以下关键更新：
*   **配置界面优化**：合并了 PR #2770，在 Web UI 中新增了 MCP（Model Context Protocol）配置板块，降低了用户配置 MCP 的门槛。
*   **工具反馈改进**：为 `tool_feedback` 增加了 `pretty_print` 和 `disable_escape_html` 的默认配置，提升了工具输出在界面上的可读性。
*   **依赖与修复**：包含若干依赖更新（如 pion/rtp）及常规修复。

此外，**Nightly Build (v0.2.9-nightly.20260530.e81d3710)** 也已同步更新，供测试用户尝鲜。

🔗 **相关链接**：
*   [v0.2.9 Release Note](https://github.com/sipeed/picoclaw/releases/tag/v0.2.9)

## 3. 项目进展
过去 24 小时内共有 4 个 PR 被合并/关闭，另有 4 个 PR 处于活跃待合并状态，项目推进顺利：

*   **国际化增强**：
    *   PR #2932 已合并：新增捷克语本地化支持，覆盖率达到了 100% (792/792 strings)。
    *   PR #2935 开放中：新增繁体中文支持，进一步完善了多语言文档体系。
*   **依赖维护**：
    *   PR #2961 与 #2960 已合并：由 Dependabot 发起，分别升级了 `pion/rtp` 和 `caarlos0/env` 依赖，提升了底层库的稳定性。
*   **功能与修复活跃**：
    *   PR #2964 开放中：提出了针对视觉管线 的可配置入站图像压缩功能，旨在解决大媒体文件导致的负载问题。
    *   PR #2965 开放中：修复了 `exec` 工具在 `restrict_to_workspace` 模式下对无 scheme URL（如 `wttr.in`）的误判问题，提升了命令执行的鲁棒性。

🔗 **相关链接**：
*   [PR #2932: Add Czech locale](https://github.com/sipeed/picoclaw/pull/2932)
*   [PR #2964: Image input compression](https://github.com/sipeed/picoclaw/pull/2964)

## 4. 社区热点
今日讨论最为活跃的议题是 **Issue #2952**，作者 @xhynice 指出项目发布节奏放缓，并集中反馈了三个痛点：
1.  **Exec 命令问题**：部分模型首次执行时默认不带 actions:run 导致报错。
2.  **QQ 频道死循环**：重启后发送信息会再次触发重启，需清除上下文才能解除，暗示 Agent 上下文管理可能存在 Bug。
3.  **模型配置 UI**：建议优化 Key 管理，支持提供商下拉选择及一键获取模型列表。

该 Issue 获得了开发者的迅速回应，反映了用户对**易用性**和**特定渠道稳定性**的高度关注。

🔗 **相关链接**：
*   [Issue #2952: [Feature]好久没发新版本了](https://github.com/sipeed/picoclaw/issues/2952)

## 5. Bug 与稳定性
根据今日反馈，存在以下主要稳定性问题：

*   **严重 - QQ 频道重启循环** (Issue #2952)：
    用户报告在重启 QQ 频道后，发送任意消息会再次触发重启，表现为某种状态持久化错误。
    *   *状态*：Open，尚无修复 PR，建议开发者优先排查 agent 上下文持久化逻辑。

*   **中等 - Exec 工具 URL 误判** (PR #2965)：
    当启用工作空间限制时，Exec 工具错误地将无 scheme 的 URL（如 `curl wttr.in`）解析为本地绝对路径，导致请求失败。
    *   *状态*：Fix PR 已提交，待合并。

*   **中等 - Skill 二进制依赖缺失** (Issue #2351 - Closed)：
    旧版中，当 Skill 所需的二进制文件（如 `agent-browser`）未安装时，系统仍会将其注入 Prompt，导致 LLM 产生幻觉并在运行时报错。
    *   *状态*：该 Issue 已关闭，推测已在最新版本中修复或优化了验证逻辑。

## 6. 功能请求与路线图信号
*   **Agent 间通信**：Issue #2929 提出构建“一等公民”级别的 Agent 间点对点通信层，以支持协作工作流。这表明 PicoClaw 正在向多智能体协作架构演进，目前虽支持 spawn/delegate，但缺乏对等通信机制。
*   **视觉管线优化**：PR #2964 提出的图像压缩策略，是对当前仅限制文件大小策略的升级，预示着项目将支持更灵活的多媒体处理策略。
*   **边缘设备支持**：Issue #2625 请求在 Raspberry Pi Zero 2 (arm64) 的默认构建中包含 WhatsApp 支持，反映出用户在物联网设备上部署 AI 智能体的强烈需求。

## 7. 用户反馈摘要
*   **发布节奏**：用户对版本更新间隔较为敏感，认为“好久没发新版本”，v0.2.9 的发布将缓解此焦虑。
*   **配置体验**：用户希望 Web UI 能提供更智能的模型提供商配置（如 API Key 复用、模型列表自动拉取），目前的配置流程可能较为繁琐。
*   **部署场景**：有用户尝试在 Raspberry Pi Zero 2 等低功耗设备上运行 PicoClaw 并使用 WhatsApp 渠道，表明项目在边缘计算场景有一定用户基础。

## 8. 待处理积压
以下重要 Issue/PR 长期未得到最终解决，建议维护者关注：

*   **Issue #2625**：Raspberry Pi Zero 2 的 WhatsApp 编译支持请求（创建于 4 月 22 日），标记为 Low Priority 但仍有用户持续关注。
*   **PR #2877**：关于添加 Tirith 安全扫描的 PR 已被关闭，但安全问题仍需考量，目前状态显示为 Stale。
*   **PR #2662**：关于统一文档中供应商表格的 PR（创建于 4 月 24 日），仍在 Open 状态，等待合并以优化文档结构。

---
*分析师注：今日项目正式发布 v0.2.9 版本有效回应了社区关于更新停滞的质疑，国际化与 UI 配置的改进显示项目正致力于降低使用门槛。然而，QQ 频道的重启 Bug 与 Exec 命令的兼容性问题暴露了在特定适配层和工具调用上的细节缺陷，建议优先处理 PR #2965 和调查 QQ 频道重启循环问题。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-30)

## 1. 今日速览
NanoClaw 项目今日整体活跃度较高，开发节奏紧凑。过去 24 小时内共有 7 条 PR 更新，其中 2 条顺利关闭，5 条新 PR 待合并，主要集中在 Telegram 适配器修复、群聊上下文优化及可观测性集成。虽然无新版本发布，但代码库变动频繁。社区方面新增 1 条关于供应链安全的高优先级 Issue，提示了 AI 智能体工具链中的潜在风险。整体来看，项目正处于快速迭代期，重点在于提升多平台适配稳定性与安全性。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目在功能增强与平台适配方面取得了实质性进展，共有 2 个 PR 被关闭（推测为已合并或已处理），具体如下：

*   **可观测性增强**：PR [#2456](https://github.com/nanocoai/nanoclaw/pull/2456) 已关闭。该 PR 为 Claude Provider 集成了 LangFuse 可观测性功能，能够追踪延迟、API 错误及工具调用耗时，标志着项目在企业级监控与调试能力上迈进一步。
*   **Gmail 工具集成**：PR [#1961](https://github.com/nanocoai/nanoclaw/pull/1961) 已关闭。该功能引入了基于 OneCLI 的 Gmail MCP 工具，解决了 v2 版本中容器无法直接持有 API Key 的安全隐患，完善了邮件处理能力的集成。

目前仍有 5 个 PR 处于 Open 状态，主要集中在 Telegram 平台的 Bug 修复与群聊上下文功能增强，显示出项目正在加强对即时通讯场景的支持。

## 4. 社区热点
今日社区关注度最高的是关于供应链安全的新 Issue：

*   **Issue [#2641](https://github.com/nanocoai/nanoclaw/issues/2641) - Supply chain risk**：由用户 @NoamGit 发起。该 Issue 提出了关于 `@gongrzhe/server-gmail-autoauth-mcp` 包的供应链风险警告。作者引用了一篇 Medium 文章，指出 AI 智能体在自动安装依赖或请求权限时可能存在的安全隐患。这反映了社区对 AI Agent 自主操作安全性的高度敏感，维护者需尽快评估该依赖包的安全性或考虑替代方案。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在 Telegram 集成与依赖管理方面，已有对应的修复 PR 提交：

*   **严重 - 供应链安全风险**：
    *   Issue [#2641](https://github.com/nanocoai/nanoclaw/issues/2641)：Gmail MCP 工具依赖包存在供应链攻击风险。
    *   *状态*：待确认/待处理。

*   **中等 - Telegram 交互逻辑缺陷**：
    *   Bug：Telegram 回复机器人消息时上下文识别错误。
    *   Fix PR：[#2644](https://github.com/nanocoai/nanoclaw/pull/2644) - 修复了 `extractReplyContext` 无法识别回复对象是否为机器人的问题。
    *   Bug：路由模式在直接提及或 DM 时未触发。
    *   Fix PR：[#2643](https://github.com/nanocoai/nanoclaw/pull/2643) - 修复了 `evaluateEngage` 仅匹配正则而忽略直接 @提及 的逻辑。

*   **低 - 依赖版本冲突**：
    *   Bug：Telegram 适配器安装脚本的依赖版本锁定问题。
    *   Fix PR：[#2642](https://github.com/nanocoai/nanoclaw/pull/2642) - 将 `chat-adapter` 版本固定为 4.26.0 以解决 peerDependency 冲突。

## 6. 功能请求与路线图信号
从今日的 PR 动态中可以捕捉到以下路线图信号：

*   **群组聊天智能化**：PR [#2645](https://github.com/nanocoai/nanoclaw/pull/2645) 提出为群组聊天增加“按 Agent 组的上下文窗口”。这意味着 NanoClaw 正向支持多 Agent 协作的高级群聊场景演进，Agent 将能根据未读消息上下文进行更智能的回复，而非简单的单轮对话。
*   **多模态/可视化尝试**：PR [#2646](https://github.com/nanocoai/nanoclaw/pull/2646) 添加了“街道风影图”应用，集成了 OSM 地图与气象数据。这暗示项目正在探索地理空间数据处理或可视化工具链的集成能力。

## 7. 用户反馈摘要
从 Issue #2641 的反馈来看，用户对 **AI 智能体的权限控制与代码执行安全** 极为敏感。用户担心在使用 MCP（Model Context Protocol）工具时，AI 可能会安装恶意代码或泄露敏感凭证（如 Gmail 密码）。这表明项目在集成第三方工具（特别是涉及邮件、文件系统等高权限操作）时，必须加强沙箱隔离与权限审计机制。

## 8. 待处理积压
*   **安全审计**：Issue [#2641](https://github.com/nanocoai/nanoclaw/issues/2641) 涉及供应链安全，建议维护者优先响应，确认是否需要移除或替换相关依赖包。
*   **功能审查**：现有 5 个待合并 PR 均处于待定状态，建议尽快完成 Code Review 以推进 Telegram 修复和新功能的上线，避免积压影响迭代速度。特别是 PR [#2645](https://github.com/nanocoai/nanoclaw/pull/2645) 涉及核心路由逻辑，需仔细测试。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-30)

## 1. 今日速览
NullClaw 项目今日保持高活跃度，顺利发布了 **v2026.5.29** 新版本，标志着项目基础设施与适配器功能的又一次迭代。过去24小时内虽然没有新的 Issue 产生，但代码合并活动频繁，共有 **4 个 PR 成功合并**，解决了包括 POSIX 线程休眠、Nix 构建兼容性及 LINE 频道路由在内的关键问题。目前仍有 2 个功能性修复 PR 待处理，主要集中在 AI 模型提供商兼容性与上下文管理配置上。整体来看，项目处于健康的快速迭代期，维护者对社区贡献的响应速度较快。

## 2. 版本发布
**新版本：v2026.5.29**
本次更新主要聚焦于底层基础设施优化与原生适配器增强，包含以下核心变更：
- **基础设施迁移**：将 GitHub workflows 迁移至 `nullbuilder`，优化 CI/CD 流程 ([PR #889](https://github.com/nullclaw/nullclaw/pull/889))。
- **功能新增**：增加了原生 ACP stdio adapter，提升了适配器层的原生交互能力 ([PR #896](https://github.com/nullclaw/nullclaw/pull/896))。
- **文档更新**：包含了部分文档修正。

> **分析师注**：虽然 Release Notes 中提及 `v2026.5.4`，但结合 PR #938 的版本号升级逻辑，本次发布实为 v2026.5.29，建议用户升级时关注 workflow 变更可能带来的本地构建脚本影响。

## 3. 项目进展
今日共有 4 个关键 PR 合并入库，显著提升了系统稳定性与构建兼容性：
- **核心修复：POSIX 线程休眠**：PR [#878](https://github.com/nullclaw/nullclaw/pull/878) 已合并，修复了 `std_compat.thread.sleep()` 在 POSIX 系统上的行为。原先的实现使用协作式让出，可能导致线程未真正挂起；现已切换为真正的 `nanosleep` 路径，这对提高 NullClaw 在服务器端的并发稳定性至关重要。
- **版本发布准备**：PR [#938](https://github.com/nullclaw/nullclaw/pull/938) 已合并，完成了 `build.zig.zon` 的版本号更新，正式封版 v2026.5.29。
- **渠道修复：LINE 集成**：PR [#934](https://github.com/nullclaw/nullclaw/pull/934) 已合并，重构了 LINE 频道的 sendMessage 路由，并引入了线程安全的 replyToken 缓存（TTL 30s），解决了 Webhook 回复时的路由匹配问题。
- **构建支持：Nix/Zig 0.16.0**：PR [#935](https://github.com/nullclaw/nullclaw/pull/935) 已合并，修复了 `flake.lock` 指向旧版 zig2nix 导致的构建失败问题，现在 Nix 构建已完全支持 Zig 0.16.0。

## 4. 社区热点
由于今日无活跃 Issues 讨论，社区关注点主要集中在两个待合并的功能修复 PR 上，反映了高级用户对自定义配置的深度需求：
- **[PR #940] 自定义 OpenAI 兼容提供商支持**：作者 @raskevichai 指出，当前在交互式菜单中选择自定义 provider 时，系统错误地硬编码返回了三个 Claude 模型，导致无法查询真实的模型目录。该修复备受期待，解决了多模型切换的核心痛点。
- **[PR #939] Agent 上下文压缩配置失效**：作者 @raskevichai 发现配置项 `compact_context` 虽然存在但未被运行时读取，导致上下文总是被压缩。该 PR 修复了这一逻辑死代码，恢复了用户对会话上下文长度的控制权。

## 5. Bug 与稳定性
今日修复与暴露的 Bug 主要集中在运行时逻辑与配置解析，按严重程度排列如下：

| 级别 | 描述 | 状态 | 关联链接 |
| :--- | :--- | :--- | :--- |
| **高** | **POSIX 线程休眠失效**：线程在 `sleep` 时未真正挂起，影响调度稳定性。 | **已修复** (PR #878) | [链接](https://github.com/nullclaw/nullclaw/pull/878) |
| **中** | **Nix 构建失败**：Zig 0.16.0 环境下 lockfiles 版本不匹配。 | **已修复** (PR #935) | [链接](https://github.com/nullclaw/nullclaw/pull/935) |
| **中** | **自定义模型查询错误**：自定义 OpenAI 兼容提供商返回错误的模型列表。 | **待合并** (PR #940) | [链接](https://github.com/nullclaw/nullclaw/pull/940) |
| **低** | **配置项 `compact_context` 失效**：配置被解析但未生效，导致非预期的上下文压缩。 | **待合并** (PR #939) | [链接](https://github.com/nullclaw/nullclaw/pull/939) |

## 6. 功能请求与路线图信号
从今日的 PR 动态来看，项目路线图呈现出两个明显的信号：
1.  **多模型提供商生态扩展**：PR #940 的修复表明项目正在积极适配非官方的 OpenAI 兼容 API，这为接入更多本地模型或第三方 LLM 服务铺平了道路。
2.  **精细化 Agent 控制**：PR #939 对 `compact_context` 的修复，显示出用户对 Agent 运行时行为（特别是内存/上下文管理）有精细化的控制需求，未来可能会增加更多此类微调配置项。

## 7. 用户反馈摘要
虽然今日无 Issue 新增，但从合并的 PR 描述中可提炼出以下用户痛点：
- **平台一致性体验**：用户对 POSIX 系统的支持要求较高，之前的 sleep 实现未能满足部分托管环境下的线程调度预期。
- **多平台接入困惑**：在接入 LINE 等外部渠道时，reply token 的生命周期管理对开发者来说较为复杂，PR #934 的缓存机制表明开发者希望简化这一流程。
- **配置有效性焦虑**：用户期望配置文件中的每一项都能实际生效，PR #939 暴露出的 "Dead flag" 问题可能会降低用户对配置系统的信任度，需引以为戒。

## 8. 待处理积压
- **PR Review 呼吁**：目前有 2 个高质量 PR ([#939](https://github.com/nullclaw/nullclaw/pull/939), [#940](https://github.com/nullclaw/nullclaw/pull/940)) 处于 Open 状态，均由活跃贡献者 @raskevichai 提交，涉及核心 Agent 逻辑与模型适配，建议维护者优先 Review 并合并，以便及时修复配置失效与模型查询错误。
- **长期 Issue**：PR #878 从 4 月创建至今才合并，说明底层系统调用的变更审核周期较长，建议项目组未来对涉及 OS 层面的修改建立更明确的测试验证标准，缩短此类关键修复的周期。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-30)

## 1. 今日速览
IronClaw 项目今日保持极高的开发活跃度，过去 24 小时内 PR 更新达 50 条，Issue 更新 17 条，显示出项目正处于“Reborn”架构重构的密集攻坚期。核心团队主要聚焦于**产品级认证体系**与**MCP 扩展生态**的落地，合并了多个关键 PR 以打通 OAuth 流程和凭证管理。社区贡献方面，针对 Agent 记忆管理、上下文压缩及安全防护的补丁提交活跃。尽管开发势头强劲，但出现了 Nightly E2E 测试失败及代码编译问题，且 Crates.io 发布版本滞后于 GitHub Release 的供应链问题需引起关注。

## 2. 版本发布
今日无新版本发布。

> **注意**：虽然 GitHub 已发布 `v0.27.0`，但 [Crates.io](https://crates.io/crates/ironclaw) 仍停留在 `v0.24.0`，导致下游依赖受 Wasmtime CVE 漏洞影响无法升级。详见 [Issue #3259](https://github.com/nearai/ironclaw/issues/3259)。

## 3. 项目进展
今日共有 22 个 PR 被合并/关闭，主要推进了 Reborn 架构的落地与安全凭证体系的构建：

*   **认证与凭证体系重构**：
    *   [PR #4233](https://github.com/nearai/ironclaw/pull/4233) 完成了 GitHub WASM 凭证向产品认证的迁移。
    *   [PR #4231](https://github.com/nearai/ironclaw/pull/4231) 将 Reborn 认证消费者接入暂存凭证系统。
    *   [PR #4234](https://github.com/nearai/ironclaw/pull/4234) 实现了持久化产品认证，修复了审查发现的问题。
*   **MCP 扩展生态完善**：
    *   [PR #4228](https://github.com/nearai/ironclaw/pull/4228) 将 Notion MCP 扩展移植至 Reborn 架构。
    *   [PR #4223](https://github.com/nearai/ironclaw/pull/4223) 移植了 NEAR AI MCP 扩展，并支持 `nearai.search` 能力。
*   **架构与规范**：
    *   [PR #4248](https://github.com/nearai/ironclaw/pull/4248) 与 [PR #4249](https://github.com/nearai/ironclaw/pull/4249) 分别确立了投递解析与触发器入口的契约规范，锁定了架构边界。
*   **智能体优化**：
    *   [PR #4232](https://github.com/nearai/ironclaw/pull/4232) 修复了认证阻塞退出的验证逻辑，防止状态落入错误的恢复模式。

## 4. 社区热点
*   **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259)** (评论数: 11) **Crates.io 发布滞后阻碍安全更新**
    *   **分析**：这是今日讨论最热烈的话题。下游用户因 Wasmtime 28.x 版本的 CVE 漏洞被迫升级，但 IronClaw 在 Crates.io 上的版本（0.24.0）严重滞后于 GitHub Release（0.27.0），导致依赖链断裂。这反映了项目发布自动化流程可能存在瓶颈，急需维护者响应。
*   **[Issue #3857](https://github.com/nearai/ironclaw/issues/3857)** (评论数: 5) **Slack ProductAdapter MVP 开发**
    *   **分析**：社区对 Slack 集成的需求迫切，正在讨论如何实现带有预配置凭证的 MVP 版本，相关 PR ([#4035](https://github.com/nearai/ironclaw/pull/4035)) 已提交待审。

## 5. Bug 与稳定性
今日报告了若干影响稳定性与安全性的问题，需重点关注：

1.  **构建失败**：
    *   [Issue #4237](https://github.com/nearai/ironclaw/issues/4237): 由于 `ironclaw_product_workflow` 中的特性标志不匹配，导致编译失败，阻塞了 PR #4234 的验证。
    *   [Issue #4108](https://github.com/nearai/ironclaw/issues/4108): Nightly E2E 测试失败，影响扩展模块的稳定性验证。

2.  **性能与逻辑缺陷**：
    *   [Issue #4241](https://github.com/nearai/ironclaw/issues/4241): **KV Cache 复用失效**。在多轮对话中，实时注入的 Workspace Prompt Inputs 导致前缀不匹配，破坏了 LLM 的 KV Cache 复用机制，显著增加推理成本和延迟。尚无修复 PR。
    *   [Issue #4222](https://github.com/nearai/ironclaw/issues/4222): **敏感信息残留**。HTTP 凭证注入后，明文未从请求载体中及时清零，存在潜在的安全风险。

3.  **资源泄露风险**：
    *   [Issue #4226](https://github.com/nearai/ironclaw/issues/4226): 进程交接去重状态未设置边界，长时间运行的进程可能导致内存无限增长。

## 6. 功能请求与路线图信号
*   **Agent 智能体优化**：新贡献者提交了多个 PR 旨在提升 Agent 的自主性与稳定性。
    *   [PR #4251](https://github.com/nearai/ironclaw/pull/4251) 引入结构化上下文压缩摘要。
    *   [PR #4252](https://github.com/nearai/ironclaw/pull/4252) 建议在 Agent 空闲 N 次迭代后自动触发 `memory_write`，防止上下文丢失。
    *   [PR #4250](https://github.com/nearai/ironclaw/pull/4250) 实现了 LLM 流式调用中断功能，提升了用户控制权。
*   **WebChat v2 认证**：[Issue #4204](https://github.com/nearai/ironclaw/issues/4204) 和 [PR #4245](https://github.com/nearai/ironclaw/pull/4245) 正在推进 WebChat v2 的 SSO（GitHub/NEAR/Google）支持，预计将在下一阶段合并。

## 7. 用户反馈摘要
*   **依赖管理痛点**：下游开发者对版本同步问题感到沮丧，指出 Crates.io 版本更新不及时导致无法绕过底层依赖的安全漏洞（[Issue #3259](https://github.com/nearai/ironclaw/issues/3259)）。
*   **安全性讨论**：关于 `RuntimeCredentialTarget::PathPlaceholder` 的安全性存在争议，部分开发者认为其泄露风险高于收益，建议移除或加固（[Issue #3917](https://github.com/nearai/ironclaw/issues/3917)）。

## 8. 待处理积压
*   **[Issue #3281](https://github.com/nearai/ironclaw/issues/3281)** (P0 建议): EventStreamManager 的持久化投影扇出功能自 5 月 6 日开启，至今未有关闭迹象，作为 Reborn 架构的关键组件需加速推进。
*   **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259)**: 发布流程阻塞问题已持续近一个月，建议维护者优先处理发布自动化或手动发布 `0.25.0+` 版本以解下游之急。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-30)

## 1. 今日速览
LobsterAI 项目今日保持**高活跃度**，开发重心明显向**性能优化与稳定性修复**倾斜。过去 24 小时内共处理了 14 条 PR，其中 9 条已合并或关闭，主要解决了大输出场景下的渲染阻塞和连接中断问题。新增 1 条关于界面假死的 Bug 反馈，虽无新版本发布，但代码库变更频繁，显示项目正处于密集迭代期，整体健康度良好。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **9 条 PR 被合并或关闭**，显著提升了应用在处理大量数据时的稳定性和用户体验：

*   **核心性能优化**: PR #2077 和 #2075 重点解决了大输出场景下的性能瓶颈。针对超过 20KB 的大型 Tool Result 和超大 Markdown 内容，引入了延迟渲染和轻量级预览机制，有效避免了 UI 阻塞，解决了 `exec` 风暴期间的连接稳定性问题。
    *   链接: [netease-youdao/LobsterAI PR #2077](https://github.com/netease-youdao/LobsterAI/pull/2077)
    *   链接: [netease-youdao/LobsterAI PR #2075](https://github.com/netease-youdao/LobsterAI/pull/2075)
*   **会话管理增强**: PR #2074 增加了子智能体会话的删除功能及相应的状态清理逻辑，进一步完善了多智能体架构下的会话生命周期管理。
    *   链接: [netease-youdao/LobsterAI PR #2074](https://github.com/netease-youdao/LobsterAI/pull/2074)
*   **用户体验改进**: PR #2076 优化了文件预览工具栏的操作收纳，使界面更加简洁；PR #2073 修复了本地文件缺失时的错误提示，提升了容错性。
    *   链接: [netease-youdao/LobsterAI PR #2076](https://github.com/netease-youdao/LobsterAI/pull/2076)
    *   链接: [netease-youdao/LobsterAI PR #2073](https://github.com/netease-youdao/LobsterAI/pull/2073)
*   **底层架构优化**: PR #2072 优化了 OpenClaw 网关的启动流程，解决了插件重复注册和配置同步冗余问题；PR #2057 修复了 Windows 平台的更新启动器脚本问题。
    *   链接: [netease-youdao/LobsterAI PR #2072](https://github.com/netease-youdao/LobsterAI/pull/2072)
    *   链接: [netease-youdao/LobsterAI PR #2057](https://github.com/netease-youdao/LobsterAI/pull/2057)

## 4. 社区热点
今日社区互动较少，暂无高讨论量的 Issues 或 PRs。唯一的新增 Issue #2079 报告了具体的 UI 交互问题，反映了用户对客户端流畅度的敏感性。今日的 PR 合并活动主要由核心开发团队驱动，集中在技术债务偿还和性能调优上。

## 5. Bug 与稳定性
今日报告了 1 个关键 Bug，开发团队已通过合并相关 PR 进行了预防性修复：

*   **🟠 中等严重度 - 执行结果窗口滚动假死**
    *   **Issue**: #2079 报告在 2026.5.27 版本中，执行结果窗口滚动到顶端时会出现假死现象，且可复现。
    *   **状态**: [OPEN]
    *   **分析**: 该问题极可能与今日合并的 PR #2077 和 #2077 修复的“大输出场景渲染性能”问题相关。之前的版本在处理大量输出渲染时未做分片或延迟处理，导致主线程阻塞。
    *   **修复进度**: 虽然该 Issue 尚未关闭，但今日合并的 PR #2077（大输出延迟渲染）和 PR #2075（超大 Markdown 默认不渲染）已从根本上解决了此类 UI 阻塞问题，建议等待新版本验证。
    *   **链接**: [netease-youdao/LobsterAI Issue #2079](https://github.com/netease-youdao/LobsterAI/issues/2079)

## 6. 功能请求与路线图信号
今日有 5 个处于 Open 状态的 PR 更新（#1473 - #1477），均由社区用户 @MaoQianTu 提交，集中在**数据丢失防护**方向：
*   **核心诉求**: 用户强烈希望在关闭弹窗、切换会话或重新编辑时，能够有确认机制防止未保存的内容丢失。
*   **涉及场景**: Agent 创建弹窗、Agent 设置面板、MCP 服务器配置弹窗、输入框草稿持久化。
*   **路线图信号**: 这些 PR 均创建于 4 月初，目前标记为 `[stale]` 但状态为 Open，表明项目维护者可能正在重新评估这些 UX 改进。鉴于这些是提升用户信任感的关键细节，建议纳入下一阶段的 UX 优化路线图。

## 7. 用户反馈摘要
*   **痛点**: 用户对客户端的**流畅度**极其敏感。Issue #2079 显示，即使是窗口滚动这样的基础操作，一旦出现卡顿或假死，会严重影响用户体验。这验证了今日合并的一系列渲染性能优化的必要性。
*   **场景**: 用户在查看 Agent 执行结果（尤其是长输出）时，高频使用滚动操作，性能瓶颈往往在此暴露。

## 8. 待处理积压
*   **⚠️ 需关注的数据安全类 PR**: 有 5 个由 @MaoQianTu 提交的 PR（#1473, #1474, #1475, #1476, #1477）长期处于 Open/Stale 状态。这些 PR 旨在防止用户内容静默丢失（如未保存关闭、切换会话草稿丢失）。此类改进对工具类软件的口碑至关重要，建议维护者尽快 Review 或给予反馈。
    *   代表链接: [netease-youdao/LobsterAI PR #1473](https://github.com/netease-youdao/LobsterAI/pull/1473)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 (2026-05-30)

## 1. 今日速览
Moltis 项目在过去 24 小时内保持了稳健的维护节奏，成功修复了技能管理模块的逻辑漏洞，并通过依赖更新保障了代码库的时效性。社区方面，虽然无新版本发布，但出现了两个涉及底层架构兼容性的高质量 Bug 报告，分别针对 Apple Silicon 和企业代理环境，显示了用户正在更复杂的场景中部署 Moltis。整体来看，项目处于活跃维护状态，但在跨平台沙箱适配方面面临新的挑战。

## 2. 版本发布
无。

## 3. 项目进展
今日项目主要推进了功能修复与依赖维护，具体进展如下：
*   **技能管理逻辑修复**：合并了 PR [#1084](https://github.com/moltis-org/moltis/pull/1084)，修复了 Issue [#1083](https://github.com/moltis-org/moltis/issues/1083)。此前用户无法在类别启用的情况下单独禁用某个捆绑技能，此次更新将单个技能的禁用状态与类别禁用状态解耦，细化了控制粒度，提升了技能管理的灵活性。
*   **依赖更新**：开启了 PR [#1087](https://github.com/moltis-org/moltis/pull/1087)，由 Dependabot 发起，将 `tar` 依赖从 0.4.45 升级至 0.4.46，目前处于待合并状态，有助于修复潜在的安全漏洞或性能问题。

## 4. 社区热点
今日社区活跃度主要体现在问题反馈的质量上，虽然评论数较少，但提交的 Issue 具有较高的技术深度：
*   **[Apple Containers 后端兼容性]** Issue [#1086](https://github.com/moltis-org/moltis/issues/1086)：用户 @karlmdavis 报告了在企业代理环境下使用 Apple Containers 后端时构建失败的问题。这反映了部分高级用户正在尝试利用 macOS 的新容器化技术，但网络环境适配尚不完善。
*   **[ARM64 架构适配]** Issue [#1085](https://github.com/moltis-org/moltis/issues/1085)：同样由 @karlmdavis 提出，指出在 Apple Silicon (arm64) 环境下 Docker 沙箱因硬编码挂载点导致启动失败。该问题触及了底层系统架构差异，是影响 Moltis 在 Mac 生态普及的关键阻碍。

## 5. Bug 与稳定性
今日共记录 3 个 Issue，其中 1 个已修复，2 个新开且严重程度较高：

*   **🔴 严重** - **Docker 沙箱在 ARM64 架构下启动失败**
    *   链接: [Issue #1085](https://github.com/moltis-org/moltis/issues/1085)
    *   详情: 在 Apple Silicon 设备上，由于 DMI 信息缺失，硬编码的 `/sys/class/dmi` 挂载导致 `runc` 报错，沙箱无法运行。
    *   状态: **待修复** (暂无关联 PR)。

*   **🟠 中等** - **Apple Containers 后端在企业代理下构建失败**
    *   链接: [Issue #1086](https://github.com/moltis-org/moltis/issues/1086)
    *   详情: 构建器 VM 内部无法解析 DNS，导致无法拉取镜像，影响企业网环境用户。
    *   状态: **待修复** (暂无关联 PR)。

*   **🟢 已解决** - **技能启用/禁用状态管理错误**
    *   链接: [Issue #1083](https://github.com/moltis-org/moltis/issues/1083)
    *   详情: 按类别禁用后无法单独启用技能。
    *   状态: **已关闭** (通过 PR [#1084](https://github.com/moltis-org/moltis/pull/1084) 修复)。

## 6. 功能请求与路线图信号
今日虽无显性的功能请求，但 Bug 报告中隐含了重要的路线图信号：
*   **多架构支持优化**：Issue #1085 表明，Moltis 目前对 ARM64 架构（尤其是 Apple Silicon）的适配仍存在盲区，系统需要实现更智能的文件系统挂载检测逻辑，而非硬编码路径。
*   **网络环境适应性**：Issue #1086 暗示项目需增强对复杂网络环境（如 HTTPS 代理、Zscaler 安全网关）的支持，这可能需要引入代理配置透传机制或自定义 DNS 设置。

## 7. 用户反馈摘要
从今日的 Issue 提交可以看出，Moltis 的用户群体正深入使用最新的容器化技术（如 Apple Containers），同时也对跨平台一致性有强烈需求：
*   **痛点**：Apple Silicon 用户无法正常使用 Docker 沙箱模式，这是一个严重的可用性阻断问题。
*   **场景**：企业用户在受管制的网络环境中部署 Moltis 时遇到阻碍，提示文档或配置引导需加强对代理场景的覆盖。
*   **满意度**：针对技能管理的 Bug 修复响应迅速（Issue 创建当日即修复合并），显示了维护团队对用户体验反馈的高效处理能力。

## 8. 待处理积压
*   **重点关注**：Issue [#1085](https://github.com/moltis-org/moltis/issues/1085) 和 [#1086](https://github.com/moltis-org/moltis/issues/1086) 均涉及底层运行环境，且均由同一用户在今日集中反馈，建议维护者优先进行复现验证，以免影响 macOS 用户群体的核心使用体验。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 (2026-05-30)

## 1. 今日速览
CoPaw 项目今日保持高活跃度，共处理了 48 条 Issue 更新与 31 条 PR 更新，并发布了 **v1.1.10-beta.1** 版本。项目重心主要集中在稳定性修复与用户体验优化，特别是针对桌面端的易用性改进（如 Pet 插件依赖、Git 窗口闪烁）。社区方面，关于“对话回退/分支管理”的功能需求引发热议，同时底层架构向 AgentScope 2.0 迁移的计划已提上日程，显示出项目正从单点功能迭代向架构重构阶段过渡。

## 2. 版本发布
- **[v1.1.10-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.10-beta.1)**
    - **更新内容**：主要包含文档更新、CI 流程优化（移除冗余的 unit-tests.yml）以及版本号升级。
    - **注意**：虽然 Release Note 提及 `v1.1.9`，但 Tag 为 `v1.1.10-beta.1`，属于迭代过程中的测试版本，建议开发者关注后续正式版。

## 3. 项目进展
今日共有 17 个 PR 被合并或关闭，显著推进了以下领域：

- **多智能体协作能力增强**：合并了 [PR #4806](https://github.com/agentscope-ai/QwenPaw/pull/4806)，新增 `spawn_subagent` 工具，允许 Agent 在当前工作区内委派临时子任务，进一步完善了多智能体协作模式。
- **桌面端体验修复**：
    - [PR #4801](https://github.com/agentscope-ai/QwenPaw/pull/4801) 修复了 v1.1.9 桌面端 Pet 插件因缺少依赖导致的启动失败问题。
    - [PR #4696](https://github.com/agentscope-ai/QwenPaw/pull/4696) 解决了 Windows 下 Coding 模式弹出黑色 CMD 窗口的视觉干扰问题。
    - [PR #4779](https://github.com/agentscope-ai/QwenPaw/pull/4779) 修复了打包版桌面端 CLI 路径解析问题，解决了定时任务无法找到命令的 Bug。
- **功能优化**：[PR #4810](https://github.com/agentscope-ai/QwenPaw/pull/4810) 正在审查中，计划优化聊天输入框的 `/skill` 自动补全交互；[PR #4742](https://github.com/agentscope-ai/QwenPaw/pull/4742) 重构了飞书卡片系统并修复了流式模式下的显示问题。

## 4. 社区热点
- **[Issue #4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) [Feature]: 对话删除与回退功能**
    - **热度**：评论数 7。
    - **诉求**：用户强烈希望能像 IDE 或 Trae 一样，支持删除单条对话并回退到该状态（包括文件变更回退），以及对沙箱环境的精细化管理。这反映了用户对 Agent “容错性”和“过程管理”的高需求。
- **[Issue #3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) [Feature]: CoPaw Agent Teams**
    - **热度**：评论数 6。
    - **诉求**：用户提出了宏大的构想，希望实现“自然语言驱动的自进化多智能体协作团队”，认为当前的多智能体模式过于依赖手动配置，缺乏团队动态演化的能力。
- **[Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) [Breaking Change]: 迁移至 AgentScope 2.0**
    - **热度**：评论数 3，点赞 2。
    - **分析**：官方发起的架构级迁移提案，计划将后端依赖升级至 AgentScope 2.0。这将是未来几个版本的重中之重，预计将带来性能与 API 层面的重大变化。

## 5. Bug 与稳定性
今日报告了多个影响使用的严重 Bug，部分已修复：

- **严重 (已修复)**：
    - **[Issue #4739](https://github.com/agentscope-ai/QwenPaw/issues/4739)**：工具调用超时或成功后 Agent 卡死，等待用户输入而不继续响应。已关闭。
    - **[Issue #4802](https://github.com/agentscope-ai/QwenPaw/issues/4802)**：v1.1.9 版本聊天界面发送消息后卡死，无法收到回复。已关闭。
- **严重 (待处理)**：
    - **[Issue #4795](https://github.com/agentscope-ai/QwenPaw/issues/4795)**：向量数据库索引无限膨胀至 37GB 导致 `memory_search` 崩溃。此问题影响长期使用的用户，涉及 ChromaDB 底层清理机制，需关注。
    - **[Issue #4792](https://github.com/agentscope-ai/QwenPaw/issues/4792)**：流式输出长文本时导致本地电脑严重卡顿（系统级性能崩溃），疑似前端渲染性能问题。
- **中等 (待处理)**：
    - **[Issue #4828](https://github.com/agentscope-ai/QwenPaw/issues/4828)**：Windows 桌面端执行 Shell 命令时 CMD 窗口频繁闪烁（#4696 已修复 Git 相关，此处为通用 Shell 命令）。
    - **[Issue #4807](https://github.com/agentscope-ai/QwenPaw/issues/4807)**：升级版本后被禁用的内置技能自动重置为启用，配置持久化存在问题。

## 6. 功能请求与路线图信号
- **交互体验优化**：用户 [Issue #4796](https://github.com/agentscope-ai/QwenPaw/issues/4796) 建议输入框支持 `/` 自动联想 Skill，目前 [PR #4810](https://github.com/agentscope-ai/QwenPaw/pull/4810) 已着手实现该功能，预计近期合入。
- **桌面端集成**：[Issue #4830](https://github.com/agentscope-ai/QwenPaw/issues/4830) 建议桌面端输出的本地文件路径支持点击直接打开目录，符合桌面端工具化趋势。
- **消息处理策略**：[Issue #4826](https://github.com/agentscope-ai/QwenPaw/issues/4826) 提出新增三种新消息处理模式（直接打断、等待完成、工具调用后插入），显示用户对 Agent 控制流的细粒度需求。

## 7. 用户反馈摘要
- **痛点**：定时任务与用户消息的 Session 冲突 ([#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653)) 依然困扰部分用户；本地 CLI 工具调用（如飞书 CLI）的网络/进程隔离问题 ([#4712](https://github.com/agentscope-ai/QwenPaw/issues/4712)) 在桌面端较为突出。
- **满意度**：社区对多 Agent 并行运行的基础能力表示认可，但对多 Agent 间的协作自动化（自进化）抱有更高期待。
- **场景**：用户常将 CoPaw 用于自动化运维、定时提醒及复杂数据处理，对 Shell 执行、文件系统操作的稳定性依赖极高。

## 8. 待处理积压
- **[Issue #4408](https://github.com/agentscope-ai/QwenPaw/issues/4408)**：建议工作目录默认文件统一存放（如 `.qwenpaw` 文件夹）。该 Issue 活跃度较高（评论 6），涉及项目结构整洁性，建议官方纳入规划。
- **[Issue #3224](https://github.com/agentscope-ai/QwenPaw/issues/3224)**：关于“自进化多智能体团队”的讨论。虽然是长期目标，但该 Issue 提供了详细的架构设计思路，值得核心团队定期回应或设立专项里程碑。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-05-30)

## 1. 今日速览
EasyClaw 项目今日整体呈现出**"静默维护，底层迭代"**的状态。虽然社区交互层面（Issues 与 PR）表现为零活跃度，但维护者在底层基础设施方面动作频繁，连续发布了 v1.8.18 和 v1.8.19 两个版本。这一迹象表明项目正处于**代码签名与 CI/CD 流水线加固的关键阶段**，重点解决了 macOS 与 Windows 平台的安装信任问题，而非功能层面的扩张。整体来看，项目健康度良好，但在社区响应与互动方面需关注是否存在活跃度下降的风险。

## 2. 版本发布
今日连续发布两个新版本，重点聚焦于**安全分发与自动更新机制的修复**，属于重要的底层维护更新。

### v1.8.19: RivonClaw v1.8.19
**[Release Notes](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.19)**

*   **核心更新**：
    *   **元数据刷新**：刷新了已签名的桌面版发布元数据，确保在 macOS 和 Windows 上进行 electron-updater 端到端验证时的完整性与可信度。
    *   **CI 契约检查**：在 CI 流程中保留了打包后的 OpenClaw 运行时契约检查，确保更新构件包含必需的工作区模板，防止因缺少依赖导致的运行时错误。
    *   **暂存构建验证**：利用此次暂存构建确认签名安装程序的更新流程能够正常执行（注：原文截断，推测为验证流程闭环）。

### v1.8.18: RivonClaw v1.8.18
**[Release Notes](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.18)**

*   **核心更新**：
    *   **macOS 签名与公证**：正式在 CI 中启用 macOS Developer ID 签名和公证。**重要意义**：用户下载安装时将不再触发 Gatekeeper 拦截，无需手动绕过安全设置，大幅提升用户体验与软件信任度。
    *   **自动更新修复**：恢复了 macOS 的签名自动更新流程，解决了此前 release artifacts 无法被 electron-updater 信任的问题。
    *   **Windows 签名准备**：开始通过 Azure Artifact Sig 准备 Windows 发布签名（注：原文截断，推测为正在进行中或已完成初步配置）。

**迁移/升级建议**：
*   建议所有用户尽快升级至 **v1.8.19**，以获得更流畅的自动更新体验和更安全的应用签名保障。
*   macOS 用户将明显感知到安装过程中的安全警告消失，这是本次更新的核心价值。

## 3. 项目进展
今日无已合并或关闭的 PR。项目进展主要体现在上述版本发布中涉及的 CI 流程优化与自动化构建配置的调整。维护者并未通过 PR 形式进行代码合并，推测部分变更可能通过直接提交或 Release 分支合并完成，重点解决了分发渠道的安全信任问题。

## 4. 社区热点
今日无活跃的 Issues 或 PRs 讨论，社区呈现静默状态。

## 5. Bug 与稳定性
今日无新增 Bug 报告。值得注意的是，v1.8.18 的发布说明提到"Restore the signed macOS auto-update flow"，暗示此前版本可能存在 macOS 自动更新失效或签名校验失败的问题，该问题在今日的更新中已得到**修复**。

## 6. 功能请求与路线图信号
今日无新功能请求。根据 Release Notes 分析，项目近期路线图的重心在于**提升跨平台安装体验的安全性**（如 Windows Azure 签名准备）和**CI 流程的健壮性**。预计下一阶段可能继续完善 Windows 平台的签名发布流程。

## 7. 用户反馈摘要
由于今日无 Issues 评论，无法提炼具体的用户反馈。但从维护者专注于"Gatekeeper workarounds"和"installer updates"来看，此前的核心痛点可能在于用户安装困难、安全软件误报或自动更新失败。今日的更新直接回应了这些潜在的痛点。

## 8. 待处理积压
由于今日无活跃 Issue，暂无具体的"长期未响应"单据需提醒。建议维护者在完成底层签名工作后，适当关注社区动态，激活用户讨论，以打破当前的零交互局面。

---

**分析师点评**：EasyClaw 今日虽表面风平浪静，实则暗流涌动。连续两个版本的高质量基础设施更新，展现了维护者对软件交付质量的严格要求。特别是 macOS 公证的完成，是项目走向成熟化、专业化的里程碑。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*