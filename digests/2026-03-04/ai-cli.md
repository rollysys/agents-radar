# AI CLI 工具社区动态日报 2026-03-04

> 生成时间: 2026-03-04 07:07 UTC | 覆盖工具: 6 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告

**报告周期：2026-03-04**

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**功能分化与平台基建并重**的阶段。主流工具已度过“能用”基础期，向“好用”体验期演进——表现为从单纯模型调用转向多Agent协作、插件生态、安全权限等系统性能力建设。跨平台兼容性（尤其Windows）仍是行业性痛点，而 MCP 协议集成、上下文管理优化、认证体系完善则成为差异化竞争的关键战场。社区活跃度整体较高，但成熟度参差：头部工具（Claude Code、Codex）已转向体验打磨，后发工具（Qwen Code、Gemini CLI）仍在补齐基础功能。

---

## 2. 各工具活跃度对比

| 工具 | Issues 新增 | PR 新增 | Release 动态 | 核心主题 |
|------|-------------|---------|--------------|----------|
| **Claude Code** | 46 | 11 | v2.1.66 发布 | 性能/内存管理、Windows 安装 |
| **OpenAI Codex** | ~15 | ~10 | 7 个 Rust alpha 版本 | Event Hooks、权限沙盒、跨平台 |
| **Gemini CLI** | 39 | 50 | 5 个版本 (nightly/preview/stable) | Windows 兼容、子 Agent UX、MCP |
| **Kimi Code CLI** | ~10 | 10 | v1.17.0 发布 (昨日) | MCP 稳定性、IDE 集成、本地模型 |
| **OpenCode** | 20 | 50 | v1.2.16 发布 | 认证计费、跨平台崩溃、多模型 |
| **Qwen Code** | 14 | 13 | v0.11.1 发布 | 编码兼容、Insight 多语言、Hooks |

*注：Codex Issue 数据为 Top 10 样本推算，其他工具为报告原文精确数字。*

---

## 3. 共同关注的功能方向

### 🔴 内存与性能管理
- **涉及工具**：Claude Code、Gemini CLI、Kimi Code CLI
- **具体诉求**：
  - Claude Code：129GB 内存泄漏、.claude.json 数百 MB 累积、idle 状态 100%+ CPU
  - Gemini CLI：Shell 输出性能差（秒 vs 分钟）、JS 堆内存耗尽
  - Kimi Code CLI：MCP 超时导致整个 CLI 挂掉的单点故障

### 🔴 跨平台兼容性（Windows 为重灾区）
- **涉及工具**：Claude Code、Gemini CLI、OpenCode、Qwen Code
- **具体诉求**：
  - Claude Code：Windows 安装重定向 Store、路径配置问题
  - Gemini CLI：CRLF 换行符、/ 路径分隔符、Windows Terminal Kitty
  - OpenCode：控制台乱码导致崩溃、Bash 命令损坏
  - Qwen Code：GBK 编码文件修改后乱码（严重 Bug）

### 🔴 认证与计费异常
- **涉及工具**：Claude Code、OpenAI Codex、OpenCode
- **具体诉求**：
  - Claude Code：ExitPlanMode 跳过审批（安全回归）、Windows 速率限制错误
  - Codex：Plus 订阅用量计量异常（5h+ 消耗配额）
  - OpenCode：Copilot 认证导致 Premium 请求滥用（160+ 评论，51 👍）

### 🟡 MCP 工具集成
- **涉及工具**：Gemini CLI、Kimi Code CLI、Qwen Code
- **具体诉求**：
  - Gemini CLI：outputSchema 导致 -32600 错误、上下文刷新机制
  - Kimi Code CLI：MCP 超时导致崩溃、加载状态显示
  - Qwen Code：容器环境 DNS 检查（适配 code-server）

### 🟡 子 Agent / 远程 Agent 架构
- **涉及工具**：Gemini CLI、Claude Code、Qwen Code
- **具体诉求**：
  - Gemini CLI：Remote Agent Sprint 1 基础设施、流式支持
  - Claude Code：子进程内存泄漏（30GB 累积）
  - Qwen Code：Arena 多模型对比执行

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | 企业级安全与深度控制 | 企业开发者、安全敏感团队 | 安全插件严重性系统、ExitPlanMode 审批流 |
| **OpenAI Codex** | 开发者工作流自动化 | GitHub 深度用户、CI/CD 场景 | 沙盒权限体系、Skill 权限合并、Event Hooks |
| **Gemini CLI** | Google 生态集成、多模态 | Google Cloud 用户、移动端/视频场景 | A2A 流式协议、视频剪贴板、多账户 OAuth |
| **Kimi Code CLI** | 长上下文处理、本地部署 | 长任务开发者、自部署用户 | ACP 协议会话恢复、自动上下文压缩 (ACC) |
| **OpenCode** | 多模型聚合、开放生态 | 成本敏感型开发者、多模型评测用户 | Copilot/Claude/Gemini 多 Provider、模型 Arena |
| **Qwen Code** | 中文开发者友好、本土化 | 中文开发者、Qwen 模型用户 | GBK 编码保留、多语言 Insight、AGENTS.md |

**关键差异**：
- **Codex** 走“权限精细化”路线，重构沙盒策略（v3 filesystem profiles）
- **Gemini CLI** 押注“远程 Agent”基础设施，面向未来多终端协作
- **OpenCode** 主打“多模型自由切换”，Arena 功能支持模型对比
- **Qwen Code** 聚焦“中文场景补齐”，编码兼容与本地化走在前列

---

## 5. 社区热度与成熟度

### 热度梯队

| 梯队 | 工具 | 指标表现 | 成熟度判断 |
|------|------|----------|------------|
| **第一梯队** | Claude Code (46 Issues)、OpenCode (20 Issues + 50 PRs) | Issue 量大、讨论深入（160+ 评论） | 成熟期，社区驱动力强 |
| **第二梯队** | Gemini CLI (39 Issues + 50 PRs)、OpenAI Codex (高频 alpha 迭代) | PR 活跃、版本迭代快 | 快速迭代期，功能快速演进 |
| **第三梯队** | Kimi Code CLI (v1.17.0)、Qwen Code (14 Issues + 13 PRs) | Issue 规模较小、功能聚焦 | 成长期，核心功能构建中 |

### 成熟度观察

- **OpenCode** 虽然 Issue 总数中等，但 PR 活跃度最高（50 PRs），且社区讨论热烈（Copilot 计费问题 160+ 评论），表明**社区参与深度**领先
- **OpenAI Codex** 采用“激进迭代”策略（7 个 alpha/日），适合早期采用者，但稳定性风险较高
- **Qwen Code** 社区规模最小，但功能方向明确（编码、多语言、Hooks），**小步快跑**特征明显
- **Claude Code** Issue 总量最高，但多为**历史积压问题**（.claude.json 性能问题长期存在），说明已进入“债务清理”阶段

---

## 6. 值得关注的趋势信号

### 📈 行业趋势

1. **MCP 协议走向大一统**
   - Gemini CLI、Kimi Code CLI、Qwen Code 均在 MCP 集成上有明确投入
   - 趋势：MCP 将成为 AI CLI 工具的“USB-C 接口”，工具间互操作性提升
   - 开发者建议：优先支持 MCP 协议，预留扩展点

2. **内存管理从“能用”转向“可控”**
   - Claude Code 多起极端案例（129GB、30GB 泄漏）敲响警钟
   - 趋势：上下文压缩（ACC）、自动清理机制将成为标配
   - 开发者建议：监控 CLI 内存占用，设计资源上限策略

3. **Windows 平台历史债务集中爆发**
   - 6 款工具中有 4 款在 Windows 侧存在显著问题
   - 趋势：跨平台将成为采购决策的关键因素，而非“加分项”
   - 开发者建议：CI 流水线加入 Windows 端覆盖，优先修复高频崩溃

4. **认证计费体系重构**
   - Codex 计量异常、OpenCode Copilot 滥用、Claude 速率限制错误集中爆发
   - 趋势：从“按调用次数”向“按实际消耗”精细化计量演进
   - 开发者建议：增加用量可视化，提供异常告警

5. **子 Agent/远程 Agent 基础设施曙光初现**
   - Gemini CLI Remote Agent Sprint 1、Qwen Code Arena 并行执行
   - 趋势：单人 Agent → 多 Agent 协作，工作流编排能力分化
   - 开发者建议：关注 Agent 间通信协议（已有 ACP 草案）、权限隔离设计

### 💡 开发者参考

- **选型**：若重视安全与审批流 → Claude Code；若重视多模型对比 → OpenCode；若侧重 Google 生态 → Gemini CLI；若需长上下文处理 → Kimi Code CLI；若面向中文场景 → Qwen Code
- **避坑**：Windows 用户谨慎选型，关注各工具 Release Note 中的 Windows 修复；生产环境警惕 alpha 版本稳定性
- **参与**：Event Hooks (Codex 456 👍)、macOS Intel 支持 (Codex 114 👍)、GBK 编码 (Qwen Code) 为高需求功能，可贡献 PR/Issue 参与塑造

---

*本报告基于 2026-03-04 公开社区数据生成，供技术决策与趋势研究参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截止：2026-03-04 | 来源：github.com/anthropics/skills

---

## 一、热门 Skills 排行

根据 PR 摘要信息提取，以下是社区关注度最高的 Skills：

| 排名 | PR # | Skill 名称 | 功能概述 | 状态 |
|:---:|:---:|------------|----------|:----:|
| 1 | #83 | skill-quality-analyzer & skill-security-analyzer | 质量分析 + 安全审计双 meta skill，评估结构、文档、安全等维度 | OPEN |
| 2 | #210 | frontend-design | 改进前端设计技能清晰度和可操作性，确保指令可单轮执行 | OPEN |
| 3 | #154 | shodh-memory | AI 代理持久记忆系统，跨会话维持上下文 | OPEN |
| 4 | #147 | codebase-inventory-audit | 代码库清理与文档审计，识别孤儿代码、未使用文件 | OPEN |
| 5 | #181 | SAP-RPT-1-OSS predictor | SAP 开源表格模型的预测分析技能 | OPEN |
| 6 | #288 | 8 new skills (tutorial-builder, a11y-auditor, data-storytelling 等) | 教程生成、无障碍审计、数据讲故事等系列技能 | OPEN |
| 7 | #419 | Buildr | Telegram 与 Claude Code 桥接，远程控制编码会话 | OPEN |
| 8 | #444 | AURELION suite (kernel, advisor, agent, memory) | 认知+记忆框架，结构化思维模板 | OPEN |

> 所有热门 PR 均为 **OPEN** 状态，尚未合并。评论数均显示 `undefined`，可能与数据抓取方式有关。

---

## 二、社区需求趋势

从 Issues 中提炼的核心诉求：

| 需求方向 | 相关 Issue | 说明 |
|----------|------------|------|
| **平台稳定性** | #62 (10评论), #406, #403, #389 | 技能消失、无法上传/删除、API 宕机等严重体验问题 |
| **Skill 质量与规范** | #202 (8评论), #100 | skill-creator 文档风格不符合最佳实践、许可证争议 |
| **跨平台集成** | #29 (4评论) | 期望支持 AWS Bedrock |
| **MCP 标准化** | #16 (4评论), #185 | 建议将 Skills 暴露为 MCPs，实现包管理器式体验 |
| **Agent 治理/安全** | #412 (3评论) | 提议新增 agent-governance skill，专注策略执行、威胁检测 |
| **文档/链接修复** | #141, #184 | 博客链接失效、agentskills.io 重定向错误 |

**趋势总结**：社区当前两大核心诉求 —  
① **基础设施稳定性**（Skill 上传/删除/加载的可靠性）  
② **Skill 质量提升**（编写规范、治理框架、跨平台能力）

---

## 三、高潜力待合并 Skills

以下 PR 评论活跃或功能完整度较高，具备近期合并潜力：

| PR # | Skill | 亮点 | 潜在合并理由 |
|:----:|-------|------|--------------|
| **#210** | frontend-design | 改进清晰度与可操作性，单轮对话可执行 | 官方博客已引用，相关讨论持续 |
| **#362** | skill-creator UTF-8 fix | 修复多字节字符导致 Rust panic | 明确 bug 修复，必要性高 |
| **#288** | 8 new skills | 一次性贡献多个标准化工学技能（a11y、changelog 等） | 符合官方 skill 发展方向 |
| **#154** | shodh-memory | 持久上下文是高频需求 | 解决了 Claude 长对话记忆痛点 |

---

## 四、Skills 生态洞察

> **一句话总结**：当前社区最集中的诉求是 **Skill 基础设施的稳定性保障 + 质量标准化**（从「能用到好用」的过渡阶段），同时对跨平台集成（MCP、Bedrock）和垂直领域专业技能（SAP 预测、Agent 治理）有明确需求。

---

*报告生成时间：2026-03-04 | 数据源：GitHub anthropics/skills*

---

# Claude Code 社区动态日报 (2026-03-04)

## 今日速览

今日 Claude Code 社区共产生 46 条活跃 Issue 和 11 条 Pull Request。**Windows 平台安装问题**成为社区讨论焦点，同时**内存泄漏**和**性能问题**持续困扰用户。v2.1.66 版本刚刚发布，建议用户关注更新日志。

---

## 版本发布

### v2.1.66 已发布

**链接**: https://github.com/anthropics/claude-code/releases/tag/v2.1.66

> 今日暂无详细更新日志，建议访问 Release 页面查看具体变更内容。

---

## 社区热点 Issues

### 1. Windows 安装重定向至 Microsoft Store
**Issue #28892** | 评论: 52 | 👍: 15  
链接: https://github.com/anthropics/claude-code/issues/28892

**关注理由**: 热度最高的 Issue，超过 50 条评论反映 Windows 用户在安装 Claude Desktop 时被强制重定向到 Microsoft Store，无法正常使用。这是影响大量 Windows 用户的阻塞性问题。

---

### 2. .claude.json 历史累积导致性能问题
**Issue #5024** | 评论: 47 | 👍: 45  
链接: https://github.com/anthropics/claude-code/issues/5024

**关注理由**: 长期存在的性能问题，`.claude.json` 文件无限增长可能导致数百 MB 存储和启动变慢。用户迫切需要自动清理机制。

---

### 3. 严重内存泄漏：消耗 129GB RAM
**Issue #11315** | 评论: 37 | 👍: 31  
链接: https://github.com/anthropics/claude-code/issues/11315

**关注理由**: 极端案例报告，Claude Code 消耗 129GB 虚拟内存导致系统完全冻结。需要重启。这是内存管理方面的严重缺陷。

---

### 4. Linux TTY 设备访问导致终端冻结
**Issue #6237** | 评论: 23 | 👍: 3  
链接: https://github.com/anthropics/claude-code/issues/6237

**关注理由**: Linux 用户频繁遇到终端冻结问题，影响开发效率。该 Issue 已有复现步骤。

---

### 5. 空闲状态高 CPU 占用 (100%+)
**Issue #19393** | 评论: 20 | 👍: 13  
链接: https://github.com/anthropics/claude-code/issues/19393

**关注理由**: Claude Code 在空闲时仍持续占用 100%+ CPU，导致系统卡顿和风扇噪音，影响日常使用体验。

---

### 6. ExitPlanMode 跳过审批提示 (v2.1.63 回归)
**Issue #29548** | 评论: 10 | 👍: 5  
链接: https://github.com/anthropics/claude-code/issues/29548

**关注理由**: 安全相关回归 bug，ExitPlanMode 跳过用户审批直接显示"已批准"，存在安全隐患。

---

### 7. 子进程内存泄漏
**Issue #20369** | 评论: 10 | 👍: 0  
链接: https://github.com/anthropics/claude-code/issues/20369

**关注理由**: 父会话终止后，子 agent 进程未被正确清理，累积内存可达 30GB，需手动 kill。

---

### 8. Slack 插件认证失败
**Issue #18009** | 评论: 10 | 👍: 21  
链接: https://github.com/anthropics/claude-code/issues/18009

**关注理由**: 较多用户关注的集成问题，Slack 插件不支持动态客户端注册，导致认证失败。

---

### 9. iOS Web UI "Create PR" 按钮缺失
**Issue #30021** | 评论: 9 | 👍: 15  
链接: https://github.com/anthropics/claude-code/issues/30021

**关注理由**: 影响 iOS 用户体验的 UI 问题，推送后无法便捷创建 PR。

---

### 10. Windows 速率限制错误
**Issue #29579** | 评论: 9 | 👍: 5  
链接: https://github.com/anthropics/claude-code/issues/29579

**关注理由**: Claude Max 订阅用户仍遭遇速率限制，仅使用 16%额度，疑似 API 计费异常。

---

## 重要 PR 进展

| PR | 标题 | 类型 |
|---|---|---|
| #30636 | 更新 25+ 过时文档 URL 至新域名 | 文档 |
| #30626 | 修复 ralph-wiggum 插件 stop hook | Bug 修复 |
| #30582 | 代币积分计划 (Bug 调查与报告激励) | 新功能 |
| #30604 | open-hive 多代理碰撞检测插件 | 新功能 |
| #30596 | 添加 CLAUDE.md 代码库文档 | 文档 |
| #30521 | gpg-pinentry-guard 防止 GPG 签名卡顿 | 新功能 |
| #30537 | 修复 ralph-loop 无参数调用崩溃 | Bug 修复 |
| #30472 | Merge (合并请求) | 基础设施 |
| #30460 | Claude/General session hr5 n2 | 基础设施 |
| #30305 | 实现安全插件严重性系统 | 安全增强 |

**重点 PR 说明**:

- **#30636**: 文档全面迁移至 `code.claude.com` 新域名，涉及 10+ 文件
- **#30604**: Open Hive 插件实现多开发者工作碰撞检测，6 个 hooks 后台运行
- **#30305**: 安全插件从二元拦截升级为 2 级严重性系统 (Block/Warn)

---

## 功能需求趋势

从 46 条 Issue 中提炼出以下社区关注方向：

| 方向 | 相关 Issue | 热度 |
|---|---|---|
| **性能优化** (内存/CPU) | #5024, #11315, #19393, #20369 | 🔥🔥🔥 |
| **跨平台兼容性** (Windows/Linux) | #28892, #6237, #28309, #30633 | 🔥🔥 |
| **插件系统增强** | #15439, #30593, #18009 | 🔥🔥 |
| **API/认证问题** | #29579, #29430 | 🔥 |
| **CLI/TUI 体验** | #24431, #23430, #24947 | 🔥 |
| **移动端/Web UI** | #30021 | 🔥 |

---

## 开发者关注点

### 🔴 核心痛点

1. **内存管理失控** — 多个 Issue 反映内存泄漏导致系统不稳定，用户要求改进资源清理机制
2. **Windows 安装/使用体验差** — 从安装器重定向到路径配置，问题频发
3. **空闲状态资源消耗** — 闲置时仍占用高 CPU，不符合开发者对轻量工具的预期

### 🟡 高频需求

1. **自动清理机制** —  特别是 `.claude.json` 历史记录的自动清理
2. **更专业的 UI措辞** —  Loading 状态文字被批"不专业"
3. **更细腻的思考指示器** — 用户希望有简单的 "Thinking..." 而非复杂动画
4. **hooks 扩展** — 如 PostClear hook 的需求

---

*日报生成时间: 2026-03-04 | 数据来源: github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# 2026-03-04 OpenAI Codex 社区动态日报

## 1. 今日速览

今日 Codex 社区继续保持高度活跃：Rust 客户端发布了 v0.108.0-alpha 系列共 7 个版本，持续推进核心架构迭代。社区热点集中在 **Event Hooks** 功能请求（455+ 👍）、**macOS Intel 支持**（114+ 👍）以及沙盒权限体系重构等议题。PR 层面重点推进文件系统权限配置、插件系统增强和测试稳定性优化。

---

## 2. 版本发布

| 版本 | 发布类型 | 说明 |
|------|----------|------|
| **rust-v0.108.0-alpha.10** | Alpha | 2026-03-04 最新发布 |
| rust-v0.108.0-alpha.9 | Alpha | - |
| rust-v0.108.0-alpha.8 | Alpha | - |
| rust-v0.108.0-alpha.7 | Alpha | - |
| rust-v0.108.0-alpha.6 | Alpha | - |
| rust-v0.108.0-alpha.5 | Alpha | - |
| rust-v0.108.0-alpha.3 | Alpha | - |

> 🚀 过去24小时内共发布7个 Rust 客户端 alpha 版本，版本号快速迭代，开发者可关注 [codex/releases](https://github.com/openai/codex/releases) 获取最新动态。

---

## 3. 社区热点 Issues（Top 10）

### 🔥 #2109 | Event Hooks 功能请求
- **标签**: enhancement, agent
- **评论**: 55 | **点赞**: 456 👑
- **摘要**: 社区强烈呼吁支持事件钩子，可通过模式匹配在 Codex 行为前后触发脚本/命令
- **链接**: https://github.com/openai/codex/issues/2109

### 🔥 #10410 | macOS Intel (x86_64) 支持
- **标签**: enhancement, app
- **评论**: 95 | **点赞**: 114
- **摘要**: 大量Intel Mac用户请求桌面应用支持x86_64架构或提供Universal通用构建
- **链接**: https://github.com/openai/codex/issues/10410

### ⚠️ #13186 | Plus 订阅用量计量异常
- **标签**: bug, rate-limits, CLI
- **评论**: 57 | **点赞**: 8
- **摘要**: 小任务消耗大量配额（5h+），用户报告计量系统可能存在问题
- **链接**: https://github.com/openai/codex/issues/13186

### 🐛 #13328 | Codex CLI 无响应
- **标签**: bug, TUI, CLI
- **评论**: 5 | **点赞**: 2
- **摘要**: 线程阻塞无法返回，或提示 "stream disconnected before completion: Operation timed out"
- **链接**: https://github.com/openai/codex/issues/13328

### 🐛 #13379 | VSCode Codex chat 卡在 "thinking"
- **标签**: bug, extension
- **评论**: 5 | **点赞**: 0
- **摘要**: 系统崩溃后 VSCode 扩展一直停留在 thinking 状态
- **链接**: https://github.com/openai/codex/issues/13379

### 🐛 #10099 | VSCode 持续请求权限
- **标签**: bug, windows-os, extension, sandbox
- **评论**: 7 | **点赞**: 1
- **摘要**: Windows 用户反复收到 "Approve Once/This Session/Reject" 权限弹窗
- **链接**: https://github.com/openai/codex/issues/10099

### 🐛 #10695 | 沙盒中 GH_TOKEN 环境变量不可用
- **标签**: bug, auth, sandbox, app
- **评论**: 8 | **点赞**: 4
- **摘要**: GitHub Fix CI 技能因沙盒限制无法访问 keychain 和 GH_TOKEN，导致 `gh auth status` 返回 invalid
- **链接**: https://github.com/openai/codex/issues/10695

### 💡 #11747 | /add-dir 斜杠命令
- **标签**: enhancement, CLI
- **评论**: 4 | **点赞**: 5
- **摘要**: 建议支持在会话中途添加工作目录，而非只能通过启动参数 `--add-dir` 指定
- **链接**: https://github.com/openai/codex/issues/11747

### 🐛 #13426 | config.toml 环境变量未加载
- **标签**: bug, extension, sandbox
- **评论**: 2 | **点赞**: 0
- **摘要**: `.codex/config.toml` 中定义的 `shell_enviro...` 环境变量未被加载
- **链接**: https://github.com/openai/codex/issues/13426

### 🐛 #13436 | 思考过程默认折叠
- **标签**: bug, extension
- **评论**: 1 | **点赞**: 0
- **摘要**: VSCode 扩展现在默认折叠 "thinking..." 思考过程区块，用户体验有变化
- **链接**: https://github.com/openai/codex/issues/13436

---

## 4. 重要 PR 进展（Top 10）

| PR | 标题 | 类型 | 链接 |
|----|------|------|------|
| **#13434** | config: add v3 filesystem permission profiles | 权限重构 | https://github.com/openai/codex/pull/13434 |
| **#13433** | feat: track plugins mcps/apps and add plugin info to user_instructions | 插件系统 | https://github.com/openai/codex/pull/13433 |
| **#13428** | Add external approval handler support | 权限审批 | https://github.com/openai/codex/pull/13428 |
| **#13427** | chore: Nest skill and protocol network permissions under `network.enabled` | 权限配置 | https://github.com/openai/codex/pull/13427 |
| **#13432** | refactor: route zsh-fork through unified exec | Shell 执行 | https://github.com/openai/codex/pull/13432 |
| **#13392** | refactor: prepare unified exec for zsh-fork backend | Shell 执行 | https://github.com/openai/codex/pull/13392 |
| **#13329** | [js_repl] Hard-stop active js_repl execs on explicit user interrupts | REPL 修复 | https://github.com/openai/codex/pull/13329 |
| **#13417** | Stabilize flaky app-server/core tests | 测试稳定性 | https://github.com/openai/codex/pull/13417 |
| **#13422** | plugin: support local-based marketplace.json + install endpoint | 插件生态 | https://github.com/openai/codex/pull/13422 |
| **#13053** | fix: merge skill permissions with the current sandbox by default | 权限合并 | https://github.com/openai/codex/pull/13053 |

**重点解读**：
- **权限体系重构** (#13434, #13427)：分离 `Permissions` 和 `SandboxPolicy` 的三层关注点，重构网络权限配置结构
- **插件系统增强** (#13433, #13422)：新增插件→MCP/应用映射追踪，支持本地 marketplace.json
- **Shell 执行统一化** (#13432)：推进 zsh-fork 后端接入 UnifiedExec，提升权限升级保证

---

## 5. 功能需求趋势

基于今日 Issue 数据，社区关注的功能方向如下：

| 方向 | 热度 | 说明 |
|------|------|------|
| **跨平台支持** | ⭐⭐⭐ | macOS Intel (x86_64)、Windows 兼容性、Linux 沙盒 |
| **权限与沙盒** | ⭐⭐⭐ | 文件系统权限配置、网络访问控制、skill 权限合并 |
| **IDE 集成体验** | ⭐⭐ | VSCode 扩展权限弹窗、thinking 状态显示、崩溃恢复 |
| **插件/技能系统** | ⭐⭐ | Event Hooks、插件市场、本地化支持 |
| **计量与配额** | ⭐ | 使用量异常、小任务大配额问题 |
| **性能/稳定性** | ⭐ | CLI 无响应、内存泄漏、测试稳定性 |

---

## 6. 开发者关注点

1. **沙盒与权限的平衡**：多个 issue 反馈沙盒限制了常见开发工作流（如 GitHub CLI、MCP 工具），需要更灵活的网络/文件访问控制

2. **Windows 平台体验**：文件读取报错、权限弹窗频繁、MCP 服务残留等问题集中在 Windows 环境

3. **CLI 稳定性**：无响应、线程阻塞、stream 超时等问题影响生产使用

4. **配置一致性**：config.toml 环境变量加载异常、权限配置分散在多处（需整合至 v3 profiles）

5. **企业功能**：用量计量准确性、session 共享、feature flag 强制锁定等企业级需求日益增长

---

*本报告基于 2026-03-04 GitHub 公开数据生成*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-03-04)

## 今日速览

今日社区活跃度较高，共更新 39 个 Issues 和 50 个 PRs。版本方面发布了 v0.34.0-nightly 以及多个补丁版本。热点集中在 Windows 平台兼容性修复、子 Agent 体验优化、以及 MCP 工具集成稳定性提升。

---

## 版本发布

| 版本 | 类型 | 关键变更 |
|------|------|----------|
| **v0.34.0-nightly.20260304.28af4e127** | Nightly | 版本号更新 |
| **v0.33.0-preview.1** | Patch | cherry-pick 修复补丁 |
| **v0.32.1** | Patch | 修复 MCP 上下文刷新机制 |
| **v0.33.0-preview.0** | Preview | 文档更新（移除 Preview Features 标识） |
| **v0.32.0** | Stable | A2A 流式读取、plan 模式集成测试 |

> 来源: https://github.com/google-gemini/gemini-cli/releases

---

## 社区热点 Issues (Top 10)

### 1. 计划内容在审批对话框中被截断
**#20716** | 评论: 8 | 状态: OPEN  
退出 plan 模式时，审批对话框只显示前 15 行内容，后续被隐藏。影响用户体验和计划完整性判断。  
🔗 https://github.com/google-gemini/gemini-cli/issues/20716

### 2. AskUser 开放问题不支持 ctrl+r 搜索历史
**#20142** | 评论: 8 | 状态: OPEN  
用户希望在与 AI 对话时能通过 ctrl+r 快速搜索历史记录，当前功能缺失。  
🔗 https://github.com/google-gemini/gemini-cli/issues/20142

### 3. Windows Terminal 的 Kitty 支持问题
**#20882** | 评论: 5 | 状态: OPEN  
Windows Terminal 已合并 Kitty 支持，但 GCLI 中 `shift+enter` 仍无法使用，需排查原因。  
🔗 https://github.com/google-gemini/gemini-cli/issues/20882

### 4. MCP 工具 outputSchema 导致 -32600 错误
**#21053** | 评论: 2 | 状态: OPEN  
MCP 工具返回带 outputSchema 的结果时验证失败，抛出协议错误。  
🔗 https://github.com/google-gemini/gemini-cli/issues/21053

### 5. Windows 下更新进行时重启导致崩溃
**#20127** | 评论: 5 | 状态: CLOSED  
更新过程中按 R 重启 CLI 导致崩溃，已通过 PR #21016 修复。  
🔗 https://github.com/google-gemini/gemini-cli/issues/20127

### 6. AskUser 开放问题支持外部编辑器
**#20181** | 评论: 3 | 状态: OPEN  
用户希望在回答开放问题时能调用外部编辑器（如 vim）进行长文本输入。  
🔗 https://github.com/google-gemini/gemini-cli/issues/20181

### 7. 远程 Agent：Sprint 1 基础设施与核心 UX
**#20302** | 评论: 3 | 状态: OPEN  
P0 级 Epic，建立远程 Agent 的核心基础设施和流式支持。  
🔗 https://github.com/google-gemini/gemini-cli/issues/20302

### 8. 子 Agent UX 优化
**#20886** | 评论: 2 | 状态: OPEN  
需要添加展开器查看完整子 Agent 工具调用历史，匹配新的 UX 设计稿。  
🔗 https://github.com/google-gemini/gemini-cli/issues/20886

### 9. Shell 输出性能差
**#21069** | 评论: 0 | 状态: OPEN  
用户反馈相同命令在原生 Shell 和 GCLI 中的执行时间差异巨大（秒 vs 分钟）。  
🔗 https://github.com/google-gemini/gemini-cli/issues/21069

### 10. JS 堆内存耗尽
**#20550** | 评论: 2 | 状态: OPEN  
大规模任务执行时出现 `RangeError: Maximum update depth exceeded`，疑似内存泄漏。  
🔗 https://github.com/google-gemini/gemini-cli/issues/20550

---

## 重要 PR 进展 (Top 10)

### 1. Windows 换行符与路径分隔符修复
**#21068** | OPEN | 修复 CRLF 换行符导致的渲染问题和 `/` 路径分隔在 Windows 上的兼容性问题。  
🔗 https://github.com/google-gemini/gemini-cli/pull/21068

### 2. OAuth 成功但需项目 ID 时的错误消息改进
**#21070** | OPEN | 优化错误提示，明确区分 OAuth 成功与项目配置缺失。  
🔗 https://github.com/google-gemini/gemini-cli/pull/21070

### 3. MCP Notifications/tools/list_changed 支持修复
**#21050** | OPEN | 增强 MCP 上下文刷新机制，处理快速连续刷新请求。  
🔗 https://github.com/google-gemini/gemini-cli/pull/21050

### 4. 新增 /generate 命令
**#21060** | OPEN | 添加直接通过自然语言生成文件内容的 slash 命令。  
🔗 https://github.com/google-gemini/gemini-cli/pull/21060

### 5. 任务追踪器 ASCII 树可视化
**#21067** | OPEN | 任务执行时实时显示 ASCII 树状进度，包含状态流转和进度条。  
🔗 https://github.com/google-gemini/gemini-cli/pull/21067

### 6. /auth 和 /about 显示已连接 Google 账户邮箱
**#21061** | CLOSED | 用户可查看当前认证的 Google 账户，便于多账户切换。  
🔗 https://github.com/google-gemini/gemini-cli/pull/21061

### 7. Shell 自动完成渲染优化
**#20931** | CLOSED | 将自动完成项渲染为 ghost text，符合原生 Shell 习惯。  
🔗 https://github.com/google-gemini/gemini-cli/pull/20931

### 8. 最大更新深度错误防御性修复
**#20940** | CLOSED | 重构 OverflowContext 防止 React 更新深度超限。  
🔗 https://github.com/google-gemini/gemini-cli/pull/20940

### 9. 重启时防止并发自动更新
**#21016** | CLOSED | 保护重启操作免受并发自动更新的干扰。  
🔗 https://github.com/google-gemini/gemini-cli/pull/21016

### 10. @file 自动完成优先显示文件名
**#21064** | OPEN | 优化文件自动完成，优先匹配实际文件名而非目录结构。  
🔗 https://github.com/google-gemini/gemini-cli/pull/21064

---

## 功能需求趋势

从 Issues 中提炼出以下社区关注方向：

| 方向 | 热度 | 说明 |
|------|------|------|
| **Windows 平台兼容性** | 🔥🔥🔥 | 路径分隔、换行符、Terminal 集成、gVisor 支持 |
| **子 Agent / 远程 Agent** | 🔥🔥🔥 | Sprint 系列 Epic，多项 UX 优化正在进行 |
| **Shell 性能优化** | 🔥🔥 | 输出性能差、内存占用问题 |
| **MCP 工具稳定性** | 🔥🔥 | outputSchema 验证、通知机制 |
| **用户体验细节** | 🔥 | 计划截断、ctrl+r 搜索、ghost text 自动完成 |
| **认证与多账户** | 🔥 | 显示当前 Google 账户、OAuth 流程优化 |

---

## 开发者关注点

1. **跨平台兼容性仍是痛点**  
   Windows 平台的多个 bug（路径、换行符、Terminal）集中在今日修复队列中，反映该方向历史积压较多。

2. **Shell 性能问题突出**  
   #21069 和 #20550 反映出大规模任务执行时的性能瓶颈，是开发者高频反馈点。

3. **认证流程体验待改进**  
   用户对多账户切换、OAuth 错误消息清晰度的需求强烈，已通过多个 PR 逐步改善。

4. **Subagent/Remote Agent 基础设施建设中**  
   多个 Epic 正在进行，涵盖认证、流式处理、后台操作等核心能力。

---

*本日报由 AI 技术分析师生成，数据截至 2026-03-04*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**2026-03-04**

---

## 1. 今日速览

Kimi Code CLI 于昨日发布 **v1.17.0** 版本，重点增强了 ACP 协议版本协商与会话恢复能力，并新增待办事项显示功能。社区方面，MCP 超时问题引发较多关注，同时 JetBrains IDE 集成和本地模型接入成为近期热点需求。

---

## 2. 版本发布

### v1.17.0 发布 | 2026-03-03

**更新内容：**

| 特性 | 描述 |
|------|------|
| **ACP 协议增强** | 支持协议版本协商与会话恢复（Session Resume） |
| **待办事项显示** | Web 模式下新增待办列表展示功能 |
| **文档更新** | 新增 MCP 加载状态说明、ACP 认证文档（中英文） |

> 🔗 [Release Notes #1331](https://github.com/MoonshotAI/kimi-cli/pull/1331) | [Changelog](https://github.com/MoonshotAI/kimi-cli/blob/main/CHANGELOG.md)

---

## 3. 社区热点 Issues（6条）

### 🔴 高优先级问题

| Issue | 标题 | 重要性分析 |
|-------|------|------------|
| **#1332** | [bug] Ubuntu 22.04 升级到 1.17.0 后报错 | **严重** - 新版本兼容性问题，影响 Linux 主流发行版，暂无解决方案 |
| **#1316** | [bug] MCP timeout 导致 kimi-cli 不可用 | **严重** - 单个 MCP 连接失败导致整个 CLI 挂掉，属致命缺陷 |
| **#1335** | [bug] kimi-cli 接入本地 ollama 报错 | **中等** - 用户自部署场景需求强烈，API 兼容性待修复 |
| **#1334** | [bug] JetBrains IDE kimi 不可用 | **中等** - IDE 集成问题，影响主流开发环境使用 |
| **#1321** | [bug] 系统内核变量问题导致 kimi cli 失效 | **中等** - 环境变量未做防御性清洗，导致服务崩溃 |

### 🟡 功能需求

| Issue | 标题 | 需求分析 |
|-------|------|----------|
| **#1327** | [enhancement] 建议默认增加每轮步数 | 用户反馈默认 100 步限制过低，上下文仅用 34.5% 即触发上限 |

> 🔗 所有 Issues: https://github.com/MoonshotAI/kimi-cli/issues

---

## 4. 重要 PR 进展（10条）

### ✅ 已合并

| PR | 标题 | 核心功能 |
|----|------|----------|
| **#1331** | chore: bump version to 1.17.0 | 版本升级与发布 |
| **#1330** | feat: add /export and /import commands | 新增会话上下文导出/导入命令 |
| **#1317** | feat: add session context export/import slash commands | 会话导入导出功能实现 |
| **#1324** | feat: add session logging | 新增结构化会话日志（记录到 ~/.kimi/sessions） |
| **#1322** | feat(shell): show context token usage | 状态栏显示上下文 Token 使用率 |
| **#1318** | feat(mcp): show MCP loading status | MCP 加载状态前置显示 |
| **#1323** | fix(shell): resolve terminal resize artifacts | 修复终端Resize重影问题 |

### 🔄 进行中

| PR | 标题 | 核心功能 |
|----|------|----------|
| **#1329** | feat: add auto context compress ability | **新增 ACC 模式** - 自动上下文压缩，延长长任务持续性 |
| **#1328** | Fix minor bugs in file tools and UI feedback | 修复 StrReplaceFile 替换计数、UI反馈问题 |
| **#1326** | fix(ui): terminal resize fixes | 终端Resize事件处理优化 |
| **#1325** | feat(ui): add video clipboard paste support | 支持视频剪贴板粘贴（Ctrl+V）及自动检测 |
| **#1236** | feat(http): enable trust_env | 启用 trust_env 支持代理环境 |

> 🔗 所有 PRs: https://github.com/MoonshotAI/kimi-cli/pulls

---

## 5. 功能需求趋势

基于 Issues 与 PR 的分析，当前社区关注重点如下：

| 方向 | 热度 | 具体表现 |
|------|------|----------|
| **🔌 MCP 集成** | ⭐⭐⭐ | MCP 超时导致崩溃（#1316）、加载状态显示（已合并#1318） |
| **🖥️ IDE 集成** | ⭐⭐ | JetBrains 插件问题（#1334）、VSCode 期待 |
| **📦 本地模型支持** | ⭐⭐ | ollama 接入报错（#1335）、自部署 API 兼容性 |
| **📹 多模态增强** | ⭐⭐ | 视频粘贴支持（#1325 进行中） |
| **🧠 上下文管理** | ⭐⭐ | 自动压缩（#1329）、Token 使用可视化（已合并#1322） |
| **🛡️ 稳定性增强** | ⭐⭐ | 环境变量防御（#1321）、错误处理强化 |
| **📝 会话管理** | ⭐ | 导入/导出功能（已合并）、会话日志（已合并） |

---

## 6. 开发者关注点

### 🔥 痛点问题

1. **MCP 单点故障** - 一个 MCP 连接超时导致整个 CLI 不可用，开发者呼吁更健壮的错误隔离机制
2. **新版本兼容性** - Ubuntu 22.04 升级后直接报错，需关注 Linux 发行版适配
3. **环境变量污染** - 系统内核变量未做清洗，直接导致服务失效

### 💡 高频需求

- **默认配置优化**：默认步数 100 过低，用户希望提升上限或提供动态调整
- **长任务支持**：通过 ACC 自动上下文压缩满足长时间运行任务需求
- **本地部署友好**：支持 ollama 及自部署 API 的接入需求强烈
- **终端体验**：Resize 修复、视频粘贴等细节体验持续改进

---

**📅 明日关注**：v1.17.0 升级问题修复进展、MCP 稳定性改进、ACC 自动压缩功能测试

*本日报由 AI 技术分析师生成，数据来源于 GitHub 公开信息*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-03-04)

## 今日速览

OpenCode v1.2.16 正式发布，带来 OpenTUI markdown 渲染增强和多项核心修复。社区持续活跃，24小时内新增 20 条 Issues 和 50 条 PRs，其中 Copilot 认证导致 Premium 请求滥用问题引发广泛讨论（160+ 评论），Windows 平台问题依然是痛点。

---

## 版本发布

### v1.2.16 发布

**更新内容：**

- **Auth**: 规范化 auth 登录 URL 的尾部斜杠处理（@elithrar）
- **OpenTUI**: 升级至 v0.1.86，默认启用 Markdown 渲染
- **Gemini**: 修复 combiner schema 兄弟注入漏洞
- **Cloudflare**: 转发元数据选项到 Cloudflare AI Gateway provider（@ryanskidmore）
- **Bus**: 修复事件中的 part 数据克隆问题

---

## 社区热点 Issues

### 1. Copilot 认证导致 Premium 请求滥用 🔥🔥🔥
**#8030** | 160 评论 | 51 👍  
https://github.com/anomalyco/opencode/issues/8030

> 早晨使用 Github Copilot Opus 4.5 时，仅一两个请求就消耗了半月配额——约 60 个 agent 发起请求被错误计为 premium 请求。X-Initiator header 应设为 "agent"。

**影响严重**：大量用户反馈配额快速耗尽，是今日最热门 Issue。

---

### 2. qwen3-coder 无法调用 Edit 工具 🔥
**#6918** | 32 评论 | 17 👍  
https://github.com/anomalyco/opencode/issues/6918

> 使用 qwen3-coder:free 时持续失败，提示 edit tool 参数验证失败（oldString 应为 string）。

**社区反应**：qwen3 模型用户较多，影响面广。

---

### 3. Claude 订阅 Token 过期问题
**#6559** | 20 评论 | 18 👍  
https://github.com/anomalyco/opencode/issues/6559

> 停止使用约 12 小时后，首次对话报 `Token refresh failed: 400`，需随机输入内容后才能恢复。

**影响**：远程 agent 用户受影响严重。

---

### 4. Copilot Provider 认证后仍无法使用
**#9178** | 19 评论 | 6 👍  
https://github.com/anomalyco/opencode/issues/9178

> GitHub 认证流程正常完成，但使用任何 Copilot 模型时报错要求重新认证。

---

### 5. Windows 控制台乱码导致崩溃
**#10414** | 9 评论 | 2 👍  
https://github.com/anomalyco/opencode/issues/10414

> 在 Windows 上使用 OpenCode 一段时间后崩溃，疑似控制台输出乱码导致。

---

### 6. macOS Desktop 白屏崩溃
**#15967** | 1 评论 | 0 👍  
https://github.com/anomalyco/opencode/issues/15967

> macOS OpenCode Desktop 打开白屏，崩溃报告显示 WebKit 在处理 theme 属性时出问题。**已有 PR #15965 修复**。

---

### 7. Bash 工具在 Windows 上的命令损坏
**#15810** | 1 评论 | 1 👍  
https://github.com/anomalyco/opencode/issues/15810

> Git Bash（反斜杠路径）和 cmd.exe（多行、引号、变量）均有silent command corruption，LLM 缺乏相关指导。

---

### 8. LSP 诊断延迟或跳过
**#12288** | 3 评论 | 0 👍  
https://github.com/anomalyco/opencode/issues/12288

> LSP 服务器运行时，诊断信息被系统跳过或延迟，影响用户体验。

---

### 9. WebFetch 抓取 nextjs.org 资源失败
**#15966** | 1 评论 | 0 👍  
https://github.com/anomalyco/opencode/issues/15966

> WebFetch 访问 nextjs.org 的 /brand、/icons 等路径返回 404。

---

### 10. macOS 命令找不到（npm/bun/rg）
**#15758** | 4 评论 | 0 👍  
https://github.com/anomalyco/opencode/issues/15758

> OpenCode 无法找到系统中通过 fnm 管理的 node 版本、bun 等命令，终端中正常。

---

## 重要 PR 进展

| PR | 作者 | 内容 | 状态 |
|---|---|---|---|
| **#15663** | @Brendonovich | **[Beta] 添加 Electron 版 Desktop** | Open |
| **#15965** | @y9y9work-jpg | 修复 macOS 白屏崩溃：移除 runtime data-theme 属性变更 | Open |
| **#15867** | @ML-Marco | 修复 Java 元数据文件错误创建在项目根目录（关闭 #9596） | Open |
| **#13854** | @mocksoul | 修复 TUI 在消息完成后仍流式渲染 markdown/code 的问题 | Open |
| **#13485** | @sahilchouksey | 修复 Copilot：启用 gpt-5.3-codex 等需 /responses 端点的模型 | Closed |
| **#6736** | @MichaelC001 | TUI 订阅全局事件实现双向 Web 同步 | Closed |
| **#6707** | @fiskee | 添加 sqlfluff SQL 文件格式化支持 | Closed |
| **#6702** | @ry2009 | WebFetch 二进制guard：图片/PDF 作为附件返回 | Closed |
| **#6701** | @ry2009 | Bash 工具处理 \r 进度条覆盖，减少噪音 | Closed |
| **#6671** | @ry2009 | 工具：修剪持久化 LSP 诊断，只保留编辑文件诊断 | Closed |

---

## 功能需求趋势

从 Issues 提炼的社区关注方向：

1. **新模型支持**：qwen3-coder 集成、GPT-5.3 Codex、Claude token 优化
2. **跨平台稳定性**：Windows/macOS 多项 bug 仍需修复
3. **性能优化**：LSP 诊断导致会话膨胀、会话消息分页（已部分解决）
4. **Compaction 增强**：可配置阈值和压缩模型（#5200, #11930）
5. **异步通信**：Agent 提问时允许用户异步响应（#15969）
6. **权限超时**：权限请求增加超时机制（#15968）

---

## 开发者关注点

**高频痛点：**

- **认证问题**：Copilot、Claude token 过期反复出现，影响生产使用
- **Windows 兼容性**：命令行处理、终端输出乱码仍是重灾区
- **资源滥用**：LSP 诊断、对话上下文导致存储/性能下降

**高频需求：**

- 更智能的上下文压缩策略
- 完善的状态栏/插件系统（Status Bar Registry 已实现）
- 移动端/Web 端同步体验

---

*日报由 AI 生成，数据截至 2026-03-04 24:00*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-03-04)

## 今日速览

今日 Qwen Code 发布 **v0.11.1 正式版**，带来 AGENTS.md 默认上下文支持等重要功能。社区活跃度较高，新增 14 条 Issue 和 13 条 PR，其中 **GBK 编码文件处理**、**项目级 Insight**、**多语言报告** 成为热点关注方向。建议开发者关注编码兼容性和容器环境适配的最新进展。

---

## 版本发布

**v0.11.1 正式版发布**

| 版本 | 类型 | 关键更新 |
|------|------|----------|
| v0.11.1 | 正式版 | - 支持 AGENTS.md 作为默认上下文文件 (#2018)<br>- 修复 subagent output-language.md 追加问题 |
| v0.11.1-nightly.20260304 | 每日构建 | 基于 v0.11.1 的最新 nightly |
| v0.11.1-preview.2 | 预览版 | 预览版本 |

📎 [版本对比](https://github.com/QwenLM/qwen-code/compare/v0.11.1...v0.11.1-preview.2)

---

## 社区热点 Issues

| # | 标题 | 类型 | 重要性 | 社区反馈 |
|---|------|------|--------|----------|
| **#2040** | [支持项目级 Insight 功能](https://github.com/QwenLM/qwen-code/issues/2040) | 功能需求 | ⭐⭐⭐ | 当前 Insight 仅支持机器级别，用户需要按项目查看分析数据，5 条评论 |
| **#2069** | [GBK 编码文件修改后乱码](https://github.com/QwenLM/qwen-code/issues/2069) | 严重 Bug | ⭐⭐⭐ | 仅支持 UTF-8 导致中文代码文件永久损坏，1 条评论 |
| **#773** | [Termux (Android) 安装失败](https://github.com/QwenLM/qwen-code/issues/773) | 平台兼容 | ⭐⭐⭐ | 长时间未解决，用户已提供补丁和指南，3 条评论 |
| **#2074** | [询问后输出俏皮话不专业](https://github.com/QwenLM/qwen-code/issues/2074) | UX 优化 | ⭐⭐ | 用户反馈中间插入语影响专业性，2 条评论 |
| **#362** | [RFC: 添加日志查看功能](https://github.com/QwenLM/qwen-code/issues/362) | 长期需求 | ⭐⭐⭐ | 提议 /log-view 命令解决终端输出难以追溯问题，1 👍 |
| **#2064** | [API 错误：模型流异常终止](https://github.com/QwenLM/qwen-code/issues/2064) | 稳定性 | ⭐⭐ | 间歇性空流导致请求失败，1 条评论 |
| **#2062** | [AGENTS.md 不生效](https://github.com/QwenLM/qwen-code/issues/2062) | 功能问题 | ⭐⭐ | v0.11.1 新功能存在配置问题，1 条评论 |
| **#2010** | [客户端敏感信息脱敏](https://github.com/QwenLM/qwen-code/issues/2010) | 安全功能 | ⭐⭐ | 请求在发送前替换敏感信息，1 条评论 |
| **#2066** | [数字+中文路径解析错误](https://github.com/QwenLM/qwen-code/issues/2066) | CLI Bug | ⭐ | 路径中的数字和中文被错误添加空格 |
| **#2058** | [频繁使用 write_file 重写整个文件](https://github.com/QwenLM/qwen-code/issues/2058) | 性能/体验 | ⭐ | 编辑失败率较高，影响效率 |

---

## 重要 PR 进展

| # | 标题 | 开发者 | 进展 | 关键内容 |
|---|------|--------|------|----------|
| **#2073** | [修复非 UTF-8 编码文件读写](https://github.com/QwenLM/qwen-code/pull/2073) | @LaZzyMan | OPEN | 解决 #2069：自动检测并保留原始编码（GBK 等） |
| **#2070** | [Insight HTML 报告多语言支持](https://github.com/QwenLM/qwen-code/pull/2070) | @tanzhenxin | OPEN | 为 /insight 命令添加语言参数支持 |
| **#2065** | [瞬态流异常独立重试机制](https://github.com/QwenLM/qwen-code/pull/2065) | @yiliang114 | OPEN | 为 NO_FINISH_REASON 添加专属重试预算（5 次指数退避） |
| **#2063** | [ACP 集成迁移到官方 SDK](https://github.com/QwenLM/qwen-code/pull/2063) | @Mingholy | OPEN | 从自定义实现迁移到 @agentclientprotocol/sdk |
| **#2024** | [拒绝 PDF 文件防止会话损坏](https://github.com/QwenLM/qwen-code/pull/2024) | @drewd789 | OPEN | 在源头拒绝 PDF，避免 base64 嵌入导致 API 400 错误 |
| **#2061** | [Insight 报告多语言支持](https://github.com/QwenLM/qwen-code/pull/2061) | @pomelo-nwu | OPEN | LLM 生成内容本地化，支持用户语言设置 |
| **#1912** | [多模型竞争执行 Arena](https://github.com/QwenLM/qwen-code/pull/1912) | @tanzhenxin | OPEN | 并行运行多模型任务，支持结果对比和最佳方案合并 |
| **#1988** | [Hooks 系统基础设施](https://github.com/QwenLM/qwen-code/pull/1988) | @DennisYu07 | OPEN | 实现 5 个核心模块和 12 种钩子事件类型 |
| **#1817** | [容器环境异步 DNS 检查](https://github.com/QwenLM/qwen-code/pull/1817) | @yiliang114 | OPEN | 修复 code-server 等容器环境的 IDE 连接问题 |
| **#2047** | [TTY 模式下忽略 stream-json](https://github.com/QwenLM/qwen-code/pull/2047) | @Mingholy | OPEN | 修复交互式终端模式下的进程挂起问题 |

---

## 功能需求趋势

基于今日 Issues 和 PR ，社区关注的功能方向如下：

| 方向 | 热度 | 说明 |
|------|------|------|
| **多语言/国际化** | 🔥🔥🔥 | Insight 报告、UI 本地化需求旺盛，PR #2070/#2061 正在推进 |
| **编码兼容性** | 🔥🔥🔥 | GBK 编码问题引发广泛关注，PR #2073 紧急修复中 |
| **Insight 分析增强** | 🔥🔥 | 项目级分析需求明确 (#2040)，报告功能持续完善 |
| **容器/IDE 集成** | 🔥🔥 | 容器环境适配 (#1817)、WebIDE 连接问题 |
| **API 稳定性** | 🔥 | 流异常处理 (#2065)、输入长度校验 (#2068) |
| **安全/隐私** | 🔥 | 客户端敏感信息脱敏 (#2010) 需求 |
| **平台扩展** | 🟡 | Termux/Android 支持 (#773) 仍待解决 |

---

## 开发者关注点

### 🔴 紧急痛点

1. **编码兼容性问题**：GBK 编码文件修改后无法恢复，这是影响中文开发者的高优先级 Bug
2. **Termux 安装失败**：Android 平台长期未解决，用户已提供补丁等待合并

### 🟡 高频需求

1. **多语言支持**：Insight 报告、UI 国际化是社区强烈诉求
2. **路径解析**：数字+中文组合路径在 CLI 中解析错误
3. **API 稳定性**：流式响应偶发异常需要更好的重试机制

### 🟢 积极信号

1. **v0.11.1 发布**：AGENTS.md 功能正式上线，社区期待度高
2. **Hooks 系统**：PR #1988 基础设施逐步完善，自定义扩展可期
3. **Arena 功能**：多模型对比能力正在开发，有望提升模型选择效率

---

> 📊 报告生成时间：2026-03-04 | 数据来源：github.com/QwenLM/qwen-code

</details>