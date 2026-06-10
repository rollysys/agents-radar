# AI CLI 工具社区动态日报 2026-06-10

> 生成时间: 2026-06-10 03:58 UTC | 覆盖工具: 8 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告 (2026-06-10)

## 1. 生态全景

当前 AI CLI 工具生态正处于从"单一对话助手"向"多智能体协作平台"演进的关键转折期。以 Qwen Code 和 Claude Code 为代表的工具正在实验 Agent Teams 和 Workflow 沙箱，试图解决复杂任务的自动化编排问题。与此同时，随着模型能力的增强，"安全与效能的平衡"成为核心矛盾，Claude Fable 5 的过滤器风波即是这一阶段的典型缩影。底层架构上，Rust 重写与协议标准化（ACP/MCP）成为提升性能与兼容性的主要手段。

## 2. 各工具活跃度对比

| 工具名称 | 版本动态 | Issues 热度/重点 | PR 活跃度/重点 | 成熟度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **v2.1.170** (Fable 5 上线) | **极高** (安全过滤器误判爆发，Agent Teams 配置问题) | **中** (主要针对新模型策略修复) | **生产级** (新模型引入新的稳定性挑战) |
| **OpenAI Codex** | **rust-v0.139.0** (网页搜索增强) | **高** (Windows 平台痛点，历史记录丢失) | **高** (图片处理、编译性能优化) | **生产级** (跨平台体验仍有短板) |
| **Gemini CLI** | **v0.46.0** / **v0.47.0-preview** | **中高** (Agent 挂起，配额逻辑错误) | **高** (安全漏洞修复，工具链标准化) | **快速迭代** (质量基建正在补齐) |
| **GitHub Copilot CLI** | **v1.0.61** (设置 UI 优化) | **中** (网络权限阻断企业内网，模型列表不同步) | **低** (仅少量 PR，主要在修 Bug) | **稳定维护** (企业权限管控收紧引发争议) |
| **Qwen Code** | **v0.18.0-preview** (CI 失败) | **中** (多模型配置混淆，IDE 集成交互) | **极高** (Agent Team，Workflow 沙箱，ACP 协议) | **前沿探索** (多智能体架构激进迭代) |
| **OpenCode** | **v1.17.0** (搜索加速) | **中高** (沙箱安全需求，自定义 Provider 兼容) | **高** (API Key 轮询，会话持久化) | **快速成长** (生态开放性强) |
| **CodeWhale** (原 DeepSeek TUI) | **v0.8.55** (品牌重塑) | **中** (Agent 自主行为失控，远程工作台) | **高** (HarmonyOS 移植，记忆系统重构) | **差异化发展** (侧重移动端与远程控制) |
| **Kimi Code CLI** | 无新版本 | **低** (文件读取死循环，编辑工具失败) | **极低** (仅 1 个功能性 PR) | **早期阶段** (基础稳定性待解决) |

## 3. 共同关注的功能方向

### 3.1 智能体编排与沙箱安全
*   **涉及工具**: Qwen Code, OpenCode, Claude Code, CodeWhale
*   **具体诉求**: 随着智能体自主性增强，社区对"失控"的担忧加剧。Qwen Code 引入 `node:vm` 沙箱，OpenCode 用户呼吁类 Seatbelt 机制，CodeWhale 出现 Agent 自作主张导致项目崩溃的 Bug。开发者迫切需要在赋予 Agent 自主执行能力的同时，限制其文件系统与网络权限。

### 3.2 历史与会话持久化
*   **涉及工具**: OpenAI Codex, Qwen Code, CodeWhale, GitHub Copilot CLI
*   **具体诉求**: OpenAI Codex 的"历史记录消失"和"仅显示最近 50 条"引发大量投诉；Qwen Code 和 CodeWhale 分别通过 `/rewind` 和"海马体记忆系统"探索长期记忆。CLI 工具正从"一次性问答"向"长期项目伙伴"转型，数据的持久化与可恢复性成为核心需求。

### 3.3 平台兼容性与细节体验
*   **涉及工具**: OpenAI Codex, Gemini CLI, GitHub Copilot CLI, CodeWhale
*   **具体诉求**: Windows 平台的安装、沙箱权限（OS Error 740）和终端体验是长期痛点。同时，非 ASCII 字符处理、复制粘贴体验等"最后一公里"问题在多个工具中被反复提及，严重影响日常开发效率。

## 4. 差异化定位分析

*   **Claude Code**: **模型能力驱动型**。依托 Fable 5 等最新模型，主打智能上限，适合对代码质量要求极高的场景。但目前深受安全策略"一刀切"之苦，适合能容忍一定误判以换取高智能的用户。
*   **OpenAI Codex**: **企业级集成型**。强依赖 VS Code 生态，注重 Rust 底层性能优化。适合已深入 OpenAI 生态的企业，但在 Windows 平台体验上仍有补课空间。
*   **Qwen Code**: **架构创新型**。激进引入多智能体协作和 ACP 协议，试图在协议层统一 IDE 接入。适合喜欢尝鲜、需要处理复杂工作流的高级开发者。
*   **OpenCode**: **开放生态型**。强调自定义 Provider 接入和模型轮询，适合需要聚合多家模型 API 或部署私有模型的用户，社区对开放性的呼声最高。
*   **GitHub Copilot CLI**: **安全合规型**。背靠 GitHub 生态，网络权限管控严格，模型列表受限。适合对安全合规要求极高的大型企业，但灵活性最差。
*   **CodeWhale**: **移动与远程型**。独辟蹊径深耕 HarmonyOS 适配和 Telegram 远程控制，试图打造"口袋里的 DevOps"，适合有移动办公或远程运维需求的场景。

## 5. 社区热度与成熟度

*   **第一梯队 (成熟稳定)**: **Claude Code** 与 **OpenAI Codex**。虽然问题不少，但社区反馈量大且集中在深度使用场景，说明已有庞大的生产环境用户基数。Claude Code 的 Issues 增长最为迅猛，显示其正处于用户激增期。
*   **第二梯队 (快速迭代)**: **Qwen Code** 与 **OpenCode**。PR 活跃度极高，功能更新频繁（每周甚至每日），社区讨论聚焦于架构层面的改进，显示出强劲的创新活力。
*   **第三梯队 (特色发展)**: **Gemini CLI** 与 **CodeWhale**。Gemini CLI 正在补齐质量基建，CodeWhale 则在特定领域（远程控制）建立壁垒，两者均有稳定的关注群体。
*   **跟进梯队**: **Kimi Code CLI** 与 **GitHub Copilot CLI**。前者处于基础功能修复阶段，后者似乎进入维护期，社区反馈响应较慢，代码提交活跃度较低。

## 6. 值得关注的趋势信号

### 6.1 "安全过滤器校准危机"爆发
Claude Fable 5 的遭遇表明，单纯提升模型能力而忽视"开发场景的上下文感知"会严重阻碍落地。**建议开发者**：在升级核心模型前，务必评估其对现有代码库术语的敏感度，或在测试环境先行验证安全策略是否会对 CI/CD 流程造成误杀。

### 6.2 Agent 走向"可控沙箱化"
从 Qwen Code 的 `node:vm` 到 OpenCode 的 Seatbelt 呼声，"裸奔"的 Agent 时代即将结束。**建议架构师**：在设计 Agent 应用时，应优先考虑引入权限分级或沙箱机制，而非依赖模型自觉，这是保障生产环境安全的必经之路。

### 6.3 CLI 正在成为"IDE 后端"
Qwen Code 推进 ACP 协议，OpenCode 支持 Zed 审查，Gemini 优化 MCP。CLI 不再仅仅是终端工具，而是正在演变为 IDE 的智能后端服务。**建议工具开发者**：应尽早考虑将 CLI 服务化，提供标准化的 API 或协议支持，以融入更广泛的开发环境。

### 6.4 历史记录管理成为新战场
用户对"会话丢失"的容忍度正在降低，对跨会话记忆的需求激增。**建议产品经理**：应重视本地数据库的健壮性，并提供跨会话的上下文召回能力（如 Rewind 功能），这将是提升用户粘性的关键功能。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-06-10)

基于 `anthropics/skills` 官方仓库数据分析，以下是社区最关注的技术动态。

## 1. 热门 Skills 排行

由于提供的 PR 列表中评论数据暂缺，以下根据 PR 的功能实用性、技术深度及潜在影响力筛选出最值得关注的 Skills：

| 排名 | Skill 名称 | 功能简介 | 状态 |
| :--- | :--- | :--- | :--- |
| 1 | **[PR #514: document-typography](https://github.com/anthropics/skills/pull/514)** | **文档排版质量控制**。解决 AI 生成文档中常见的“孤行”、“寡行”及编号错位问题，提升文档专业度。 | OPEN |
| 2 | **[PR #486: ODT Skill](https://github.com/anthropics/skills/pull/486)** | **OpenDocument 格式支持**。支持创建、填充及转换 ODT/ODS 文件，填补了对开源标准文档格式的支持空白。 | OPEN |
| 3 | **[PR #83: Meta-Skills Suite](https://github.com/anthropics/skills/pull/83)** | **元技能工具集**。包含 `skill-quality-analyzer` 和 `skill-security-analyzer`，用于自动评估 Skill 本身的质量与安全性。 | OPEN |
| 4 | **[PR #1140: agent-creator](https://github.com/anthropics/skills/pull/1140)** | **智能体构建器**。新增元技能用于创建特定任务的 Agent 集合，并修复了多工具调用的评估稳定性问题。 | OPEN |
| 5 | **[PR #444: AURELION Suite](https://github.com/anthropics/skills/pull/444)** | **认知与记忆框架**。引入结构化思维模板与持久化记忆系统，旨在提升 AI 的专业领域知识管理能力。 | OPEN |
| 6 | **[PR #723: testing-patterns](https://github.com/anthropics/skills/pull/723)** | **全栈测试模式**。涵盖单元测试、React 组件测试及 API 集成测试的最佳实践，覆盖“测试金字塔”理论。 | OPEN |
| 7 | **[PR #568: ServiceNow Platform](https://github.com/anthropics/skills/pull/568)** | **企业级平台助手**。覆盖 ServiceNow 的 ITSM, ITOM, SecOps 等多模块，定位为广泛的企业平台辅助工具。 | OPEN |

---

## 2. 社区需求趋势

根据 Issues 讨论热度，社区关注点已从单一的“功能实现”转向**企业级协作**与**工程化稳定性**：

*   **企业级协作与权限管理**
    社区强烈呼吁支持组织内部的 Skill 共享机制，而非目前的个人文件上传模式。
    > 相关 Issue: [#228 Enable org-wide skill sharing](https://github.com/anthropics/skills/issues/228) (13 评论)

*   **工具链稳定性**
    开发者反馈 `skill-creator` 的核心评估脚本 `run_eval.py` 存在严重 Bug，导致技能触发率统计失真，影响了 Skill 迭代的可靠性。
    > 相关 Issue: [#556 run_eval.py trigger rate failure](https://github.com/anthropics/skills/issues/556) (12 评论)

*   **安全与信任边界**
    社区对第三方 Skill 冒充官方命名空间表示担忧，提出了信任边界漏洞的问题，呼吁建立更严格的认证机制。
    > 相关 Issue: [#492 Security: trust boundary abuse](https://github.com/anthropics/skills/issues/492) (7 评论)

*   **架构标准化 (MCP 集成)**
    有开发者建议将 Skills 暴露为 MCP (Model Context Protocol) 接口，以实现更标准化的软件调用协议。
    > 相关 Issue: [#16 Expose Skills as MCPs](https://github.com/anthropics/skills/issues/16) (4 评论)

---

## 3. 高潜力待合并 Skills

以下 PR 均处于 OPEN 状态，主要针对核心工具链进行修复或填补关键功能缺口，落地价值高：

*   **[PR #361: YAML 特殊字符校验](https://github.com/anthropics/skills/pull/361)**
    *   **价值**：修复 `quick_validate.py` 无法检测 YAML 描述字段中特殊字符（如 `:`, `#`）的问题，防止解析静默失败。
    *   **状态**：已更新至 06-10，修复基础解析问题，属于关键基建修复。

*   **[PR #1099 & #1050: Windows 兼容性修复](https://github.com/anthropics/skills/pull/1099)**
    *   **价值**：解决了 Windows 平台下子进程管道读取失败及 `claude.cmd` 调用失败的问题，显著改善跨平台开发体验。
    *   **状态**：针对特定平台的关键 Bug 修复。

*   **[PR #362: UTF-8 字符处理](https://github.com/anthropics/skills/pull/362)**
    *   **价值**：修复多字节字符（如中文）导致的 CLI Panic，对国际化用户至关重要。
    *   **状态**：长期未合并但在 06-10 有更新，表明仍在活跃推进。

*   **[PR #538: PDF 技能修复](https://github.com/anthropics/skills/pull/538)**
    *   **价值**：修复 PDF 技能中文件引用的大小写敏感问题，提升在 Linux 等系统上的兼容性。

---

## 4. Skills 生态洞察

当前社区最集中的诉求是**建立企业级的 Skill 分发与权限管理体系**，同时迫切需要解决**跨平台兼容性**与**评估工具链**的基础缺陷，标志着生态正从“个人尝鲜”向“团队生产化”过渡。

---

# Claude Code 社区动态日报 (2026-06-10)

> 数据来源: github.com/anthropics/claude-code

---

## 1. 今日速览

Anthropic 今日发布 **v2.1.170**，正式推出 **Claude Fable 5** 模型，这是一款被定义为 "Mythos-class" 的新一代模型，官方宣称其能力超越此前所有公开发布的模型。然而，新版本发布后社区反馈集中爆发：Fable 5 的安全过滤器被广泛报告为过于激进，大量合法开发任务被误判拦截。此外，Agent Teams 功能的配置继承问题、终端复制粘贴体验问题等长期痛点仍在持续讨论中。

---

## 2. 版本发布

### v2.1.170 (2026-06-10)

**核心更新：**
- **Claude Fable 5 模型上线**：Mythos-class 级别模型，官方称其在能力上超越此前任何公开发布的模型。用户升级至 2.1.170 后即可访问该模型。
- **Session 修复**：解决了会话相关的若干问题。

**官方公告链接：** https://www.anthropic.com/news/claude-fable-5-mythos-5

---

## 3. 社区热点 Issues

### 🔥 高关注度问题

| # | 标题 | 热度 | 关键点 |
|---|------|------|--------|
| **#18170** | [终端复制粘贴包含多余缩进和尾随空格](https://github.com/anthropics/claude-code/issues/18170) | 👍 261 / 💬 123 | 长期存在的 UX 痛点，从终端输出复制代码块时会带入对齐用的制表符/空格，影响开发效率。 |
| **#29006** | [Claude Desktop 远程控制功能请求](https://github.com/anthropics/claude-code/issues/29006) | 👍 94 / 💬 28 | 社区强烈希望 Claude Desktop App 能远程控制 Claude Code 会话。 |

### 🐛 关键 Bug 报告

| # | 标题 | 影响 | 关键点 |
|---|------|------|--------|
| **#32368** | [Agent Teams 子代理未继承模型配置](https://github.com/anthropics/claude-code/issues/32368) | 👍 8 / 💬 17 | 使用自定义模型端点时，生成的队友代理尝试调用错误的模型 ID (`claude-opus-4-6`)，导致 403 权限错误。 |
| **#33153** | [Bundled Bun 二进制缺少 AVX 基线支持](https://github.com/anthropics/claude-code/issues/33153) | 👍 9 / 💬 9 | 在非 AVX CPU 上启动时崩溃，需要使用 baseline 构建版本。 |
| **#48311** | [CLI 自动更新器不清理旧二进制，触发重复 macOS TCC 权限弹窗](https://github.com/anthropics/claude-code/issues/48311) | 👍 4 / 💬 6 | 每个新版本被视为新应用，触发新的权限请求。 |
| **#61930** | [iOS Code 标签页：语音听写后键盘遮挡发送按钮](https://github.com/anthropics/claude-code/issues/61930) | 👍 4 / 💬 5 | 移动端远程控制场景下的 UI 阻塞问题。 |

### ⚠️ Fable 5 安全过滤器问题（今日集中爆发）

新模型发布后，社区大量报告安全过滤器误判：

| # | 标题 | 误判类型 |
|---|------|----------|
| **#66697** | [授权安全审计被 Fable 5 安全分类器误判](https://github.com/anthropics/claude-code/issues/66697) | 用户对自己代码库进行安全审查被拦截 |
| **#66793** | [代理工具构建被过度限制性安全过滤器阻止](https://github.com/anthropics/claude-code/issues/66793) | 正常的代理工具开发被标记 |
| **#66790** | [合法代码审查任务被过度安全标记](https://github.com/anthropics/claude-code/issues/66790) | 代码安全加固练习被拦截 |
| **#66786** | [合法开发代码被 Fable 安全过滤器误判](https://github.com/anthropics/claude-code/issues/66786) | TypeScript 开发代码被标记 |
| **#66780** | [人口统计数据被误判为潜在滥用](https://github.com/anthropics/claude-code/issues/66780) | 教学/学习用的人口统计数据分析被拦截 |
| **#66783** | [工作区上下文中的基础设施术语触发网络分类器](https://github.com/anthropics/claude-code/issues/66783) | nginx、JWT、ports 等术语触发误判 |

### 🚨 严重问题

| # | 标题 | 严重性 |
|---|------|--------|
| **#66760** | [API 400：harness 发出无效 `type: "fallback"` 内容块，会话永久不可恢复](https://github.com/anthropics/claude-code/issues/66760) | 会话完全损坏，重试会重复失败 |
| **#66792** | [未回答的 A/B 选项被解释为批准，自动启动多代理工作流消耗 token](https://github.com/anthropics/claude-code/issues/66792) | 未经用户确认的自主行为，消耗计费 token |

---

## 4. 重要 PR 进展

| PR | 标题 | 状态 | 说明 |
|---|------|------|------|
| **#66608** | [修复 Fable 5 安全策略对格点规范理论问题的误判](https://github.com/anthropics/claude-code/pull/66608) | OPEN | 修复 #66592，针对物理学问题的安全过滤器误判 |
| **#66607** | [修复 Fable 5 安全分类器在授权安全测试中自动切换到 Opus](https://github.com/anthropics/claude-code/pull/66607) | OPEN | 修复 #66595，安全测试场景下的模型自动切换问题 |
| **#66577** | [同步 security-guidance 版本和描述](https://github.com/anthropics/claude-code/pull/66577) | OPEN | 修复 marketplace.json 与 plugin.json 版本不一致 |
| **#66575** | [修复 pr-review-toolkit 插件作者名](https://github.com/anthropics/claude-code/pull/66575) | OPEN | 作者名从 "Daisy" 更正为 "Daisy Hollman" |
| **#66573** | [修复 ralph-wiggum 脚本中被 `set -euo pipefail` 破坏的错误处理](https://github.com/anthropics/claude-code/pull/66573) | OPEN | 恢复失效的错误处理逻辑 |
| **#66650** | [修复 pr-review-toolkit 插件 manifest 作者名](https://github.com/anthropics/claude-code/pull/66650) | OPEN | 与 #66575 类似，修复插件 manifest 中的作者名一致性 |
| **#66572** | [修复图片处理 API 错误消耗使用限制问题](https://github.com/anthropics/claude-code/pull/66572) | WIP | 修复 #62466，图片处理失败时仍消耗 token |

---

## 5. 功能需求趋势

从今日 Issues 中提炼出以下核心关注方向：

| 方向 | 热度 | 描述 |
|------|------|------|
| **🔒 安全过滤器调优** | ⭐⭐⭐⭐⭐ | Fable 5 发布后首要问题，合法开发任务被广泛误判，急需精细化调校 |
| **🖥️ 远程控制/跨设备同步** | ⭐⭐⭐⭐ | Claude Desktop 与 Claude Code 会话打通需求强烈 |
| **🤖 Agent Teams 稳定性** | ⭐⭐⭐ | 子代理配置继承、工作流可靠性问题亟待解决 |
| **📱 移动端体验优化** | ⭐⭐⭐ | iOS/Android 平台的 UI/UX 问题（键盘遮挡、触摸交互） |
| **⚙️ 安装/更新体验** | ⭐⭐⭐ | macOS 权限弹窗、旧版本清理、非 AVX CPU 支持 |
| **💾 会话恢复与可靠性** | ⭐⭐ | API 错误后的会话恢复机制 |

---

## 6. 开发者关注点

### 🎯 核心痛点

1. **Fable 5 安全过滤器过于激进**
   - 大量开发者报告合法任务被拦截：安全审计、代码审查、数据分析、基础设施配置等
   - 工作区上下文中的技术术语触发误判
   - 建议增加白名单机制或上下文感知能力

2. **终端复制粘贴体验**
   - #18170 持续活跃，影响日常开发效率
   - 代码块复制后需要手动清理缩进和尾随空格

3. **Agent 工作流可靠性**
   - 子代理不继承模型配置导致 403 错误
   - 未授权的自动行为消耗计费 token
   - Agent ID 标签缺失影响追踪

4. **平台兼容性**
   - macOS TCC 权限弹窗重复出现
   - 非 AVX CPU 支持缺失
   - CLI 自动更新器残留旧版本

5. **会话健壮性**
   - API 错误导致会话永久损坏
   - 重试机制会重复相同失败路径

---

**总结：** 今日 Claude Code 社区围绕 Fable 5 新模型发布展开热烈讨论。虽然官方宣称新模型能力强大，但安全过滤器的过度限制成为开发者最紧迫的阻碍。同时，Agent Teams 的配置继承问题、终端体验优化等长期需求仍在等待解决。建议 Anthropic 优先处理 Fable 5 安全过滤器的误判问题，确保开发者能够正常使用新模型进行合法开发工作。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-06-10)

## 1. 今日速览
OpenAI Codex 今日发布了 `rust-v0.139.0` 正式版，重点增强了 Code mode 的网页搜索能力及 Schema 处理兼容性。社区方面，Windows 平台的安装限制与沙箱回归问题引发大量讨论，同时 Desktop 版本更新后导致的历史记录“消失”问题持续发酵，成为用户反馈的焦点。

## 2. 版本发布
**[rust-v0.139.0](https://github.com/openai/codex/releases/tag/rust-v0.139.0)**
- **独立网页搜索**：Code mode 现支持直接调用独立网页搜索，包括嵌套的 JavaScript 工具调用场景，并能接收纯文本搜索结果。
- **Schema 优化**：工具和连接器的输入 Schema 现在保留 `oneOf` 和 `allOf` 字段；大型 Schema 在压缩时保持更浅的结构，提升了复杂工具调用的兼容性。

## 3. 社区热点 Issues (Top 10)

1.  **[Feature] 请求支持 Windows 独立安装包** [#13993](https://github.com/openai/codex/issues/13993)
    - **热度**: 👍 144 | 💬 69
    - **摘要**: 社区强烈呼吁提供独立的 `codex-setup.exe` 安装包。许多用户因企业策略或系统限制无法使用 Microsoft Store，目前只能通过 CLI 或旁加载方式使用，体验受限。

2.  **[Bug] Windows 沙箱环境 setup refresh 失败** [#24391](https://github.com/openai/codex/issues/24391)
    - **热度**: 👍 25 | 💬 44
    - **摘要**: 自 CLI 0.133.0 版本起，Windows 沙箱执行命令失败，阻碍了 Windows 用户的正常使用。用户反馈需回退至旧版本才能临时解决。

3.  **[Bug] Desktop 更新后项目聊天记录丢失** [#20741](https://github.com/openai/codex/issues/20741)
    - **热度**: 👍 14 | 💬 33
    - **摘要**: 用户升级 Desktop 应用后，发现历史项目对话记录凭空消失。这是一个影响范围较广的数据可见性问题，引发用户对数据持久化的担忧。

4.  **[Bug] Windows CLI 滚动显示异常** [#10726](https://github.com/openai/codex/issues/10726)
    - **热度**: 👍 15 | 💬 32
    - **摘要**: Windows 终端下的 TUI 滚动功能长期存在缺陷，影响交互体验，目前仍未得到有效修复。

5.  **[Bug] Pro 版本周限额消耗过快** [#19585](https://github.com/openai/codex/issues/19585)
    - **热度**: 👍 27 | 💬 29
    - **摘要**: 用户反馈在使用 GPT-5.5 时，即使非重度使用，Pro 账户的每周限额也消耗异常迅速，怀疑与不稳定的上下文压缩机制有关。

6.  **[Bug] Desktop 隐藏“最近50条”之外的对话** [#21128](https://github.com/openai/codex/issues/21128)
    - **热度**: 👍 16 | 💬 23
    - **摘要**: Desktop 应用仅显示全局最近 50 条对话，导致旧的项目对话在 UI 中不可见，严重影响长期项目的连续性工作。

7.  **[Bug] 更新后本地对话历史丢失 (SQLite 数据存在但 UI 不显示)** [#23979](https://github.com/openai/codex/issues/23979)
    - **热度**: 👍 4 | 💬 21
    - **摘要**: 类似 #20741，用户发现 `state_5.sqlite` 中数据完好，但 UI 无法加载历史记录，定位为索引或读取逻辑错误。

8.  **[Bug] Windows App 重启后旧线程丢失** [#17540](https://github.com/openai/codex/issues/17540)
    - **热度**: 👍 6 | 💬 19
    - **摘要**: Windows 桌面端特定 Bug，重启应用后侧边栏搜索无法找到磁盘上已存在的旧对话线程。

9.  **[Feature] VS Code 多根工作区支持** [#2909](https://github.com/openai/codex/issues/2909)
    - **热度**: 👍 125 | 💬 9
    - **摘要**: VS Code 插件高票请求，希望支持 Multi-root Workspaces，以便在单个工作区中处理多个代码库项目。

10. **[Bug] Windows 沙箱回归 (CreateProcessAsUserW 失败)** [#26158](https://github.com/openai/codex/issues/26158)
    - **热度**: 👍 4 | 💬 8
    - **摘要**: CLI 0.136.0+ 版本在 Windows 沙箱环境下出现 `os error 740` 权限错误，导致用户被迫停留在旧版本 0.132.0。

## 4. 重要 PR 进展 (Top 10)

1.  **[Core] 图像历史记录调整与优化** [#27247](https://github.com/openai/codex/pull/27247)
    - **内容**: 引入 `resize_all_images` 特性开关，在客户端统一处理对话历史中的图片缩放，优化内存占用与传输效率。

2.  **[Windows] 支持加密本地密钥以解决存储限制** [#17931](https://github.com/openai/codex/pull/17931)
    - **内容**: 修复 Windows Credential Manager 2,560 字节限制导致的 Keyring 持久化失败问题，对大型 OAuth Token 进行加密存储支持。

3.  **[Image] 调整图片时保留元数据** [#27266](https://github.com/openai/codex/pull/27266)
    - **内容**: 在调整和重新编码提示词图片时，保留 ICC 配置文件和 EXIF 元数据，防止图片色彩或方向信息丢失。

4.  **[MCP] 增量刷新 MCP 连接** [#27291](https://github.com/openai/codex/pull/27291)
    - **内容**: 优化 MCP 连接管理器，仅替换变更或失败的连接，保留未变更的客户端，提升启动速度和稳定性。

5.  **[Perf] 移除 ToolExecutor 中的 async_trait** [#27304](https://github.com/openai/codex/pull/27304)
    - **内容**: 重构代码以移除 `async_trait`，显著减少 Rust 编译时间（从 227s 降至 50s），提升开发构建效率。

6.  **[Core] 剥离 Responses Lite 请求中的图像细节** [#27246](https://github.com/openai/codex/pull/27246)
    - **内容**: 优化请求载荷，在启用 `resize_all_images` 时剥离图像 `detail` 字段，减少不必要的数据传输。

7.  **[TUI] 插件远程目录渲染** [#26703](https://github.com/openai/codex/pull/26703)
    - **内容**: 为 TUI 界面增加远程插件目录区块的渲染能力，支持浏览和详情查看。

8.  **[App] 修复更新后遗留的 Crashpad Helper 进程** [#25259](https://github.com/openai/codex/issues/25259)
    - **内容**: 虽为 Issue，但关联修复逻辑，解决应用更新后旧版 Helper 进程残留导致的冲突问题。

9.  **[App-Server] 传播图像生成来源信息** [#27271](https://github.com/openai/codex/pull/27271)
    - **内容**: 在 Responses API 中传递图像生成的来源信息，并在 v2 版本的线程条目中暴露，增强可追溯性。

10. **[Core] Outline ToolExecutor Handlers** [#27299](https://github.com/openai/codex/pull/27299)
    - **内容**: 代码重构，将 `ToolExecutor` 中的大型 Handler 逻辑移出 Trait，配合 #27304 优化编译速度。

## 5. 功能需求趋势

-   **数据持久化与可靠性**：社区对 Desktop 客户端“聊天记录消失”问题反响强烈，主要集中在 UI 无法正确加载数据库中已存在的数据，以及“最近50条”限制导致项目历史不可见。
-   **Windows 平台体验对齐**：Windows 用户对独立安装包、沙箱权限控制（OS Error 740）及 TUI 滚动体验的诉求强烈，Windows 平台的兼容性已成为主要痛点。
-   **多工作区与插件生态**：VS Code 多根工作区支持依然是高票需求，同时 TUI 界面对远程插件目录的支持也在逐步完善中。

## 6. 开发者关注点

-   **历史记录可见性逻辑缺陷**：多个 Issue 指出 Desktop 客户端在加载本地线程时存在逻辑缺陷（如只加载最近50条、更新后索引丢失），开发者建议改进本地数据库索引策略以避免误判数据丢失。
-   **Windows 环境权限问题**：Windows 沙箱环境的 `CreateProcessAsUserW` 失败及 Credential Manager 大小限制，反映出在 Windows 企业级环境下的权限和存储机制需要针对性优化。
-   **构建性能优化**：核心团队正致力于减少 Rust 编译时间，移除 `async_trait` 等重构工作显示出对开发者构建体验的重视。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-10)

## 1. 今日速览
Gemini CLI 今日发布 **v0.46.0 正式版**及 **v0.47.0-preview.0 预览版**，重点修复了 PTY 原生崩溃问题及 Vertex AI 模型映射错误。社区热议集中在 Agent 执行的稳定性上，包括通用 Agent 挂起、子 Agent 任务中断误报成功等 P1 级故障。此外，安全性与内存系统的改进也是今日开发的焦点。

## 2. 版本发布
*   **v0.46.0 (Stable)**
    *   **核心修复**：增强了 PTY（伪终端）调整大小的健壮性，防止因原生崩溃导致程序卡死 ([PR #27496](https://github.com/google-gemini/gemini-cli/pull/27496))。
    *   **链接**：[Release v0.46.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0)
*   **v0.46.0-preview.3 & v0.45.3 (Patch)**
    *   **关键修复**：针对 Vertex AI 模型映射进行重构，解决了 `gemini-3.5-flash` 在特定认证方式下无法识别的问题 ([PR #27749](https://github.com/google-gemini/gemini-cli/pull/27749))。
    *   **链接**：[Release v0.46.0-preview.3](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0-preview.3)
*   **v0.47.0-preview.0 (Preview)**
    *   启动新一轮预览版迭代，主要包含版本号升级及变更日志整合。

## 3. 社区热点 Issues (Top 10)

1.  **[P1] Generalist agent hangs (通用 Agent 无限挂起)**
    *   **编号**：[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
    *   **理由**：严重影响用户体验的核心 Bug。当 CLI 调用通用 Agent 时会永久卡死，即使简单的文件夹创建操作也无法完成，社区对此关注度极高（👍 8）。
2.  **[P1] Subagent recovery after MAX_TURNS is reported as GOAL success**
    *   **编号**：[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    *   **理由**：Agent 可靠性问题。子 Agent 在达到最大轮次限制被迫中断时，错误地报告为“成功”，导致任务状态欺骗，隐藏了实际未完成的事实。
3.  **[P1] Shell command execution gets stuck (Shell 命令执行卡死)**
    *   **编号**：[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
    *   **理由**：交互体验痛点。命令执行完毕后 CLI 仍显示 "Waiting input" 导致界面卡死，需强制终止进程。
4.  **[P1] Robust component level evaluations (组件级行为评估)**
    *   **编号**：[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)
    *   **理由**：质量基础设施 Epic。旨在建立行为级测试以提升 Agent 稳定性，目前已生成 76 个测试用例，是项目成熟化的关键一步。
5.  **[P2] Cloud Code Assist API error (429): Individual quota reached**
    *   **编号**：[#27761](https://github.com/google-gemini/gemini-cli/issues/27761)
    *   **理由**：用户高频反馈的计费/配额问题。用户购买了 Pro 计划但显示使用量为 0%，却遭遇 429 配额限制，涉及账户鉴权与后端配额同步逻辑。
6.  **[P2] Add deterministic redaction and reduce Auto Memory logging**
    *   **编号**：[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)
    *   **理由**：安全性改进。Auto Memory 功能在将日志发送给模型前未完全脱敏敏感信息，存在潜在安全风险。
7.  **[P2] Gemini does not use skills and sub-agents enough**
    *   **编号**：[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    *   **理由**：功能有效性问题。模型极少主动调用自定义 Skills，即使任务高度相关，导致定制化工具价值无法发挥。
8.  **[P2] Assess the impact of AST-aware file reads (AST 感知文件读取评估)**
    *   **编号**：[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    *   **理由**：性能与智能优化。探讨引入 AST（抽象语法树）感知工具，以减少 Token 消耗并提高代码读取的精准度。
9.  **[P2] Stop Auto Memory from retrying low-signal sessions indefinitely**
    *   **编号**：[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)
    *   **理由**：性能与资源浪费。Auto Memory 机制会对低信号会话进行无限重试，浪费后台资源且难以发现。
10. **[P1] Browser Agent fails in Wayland**
    *   **编号**：[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
    *   **理由**：平台兼容性。Browser Agent 在 Wayland 显示协议下无法正常工作，限制了 Linux 用户的体验。

## 4. 重要 PR 进展 (Top 10)

1.  **[关键修复] Vertex AI model mapping fix**
    *   **编号**：[PR #27749](https://github.com/google-gemini/gemini-cli/pull/27749)
    *   **内容**：修复 `gemini-3.5-flash` 在特定 Google 登录认证方式下的模型映射错误，已 Cherry-pick 至 v0.45.3 和 v0.46.0-preview.3 版本。
2.  **[安全修复] Prevent path traversal vulnerabilities in skill install**
    *   **编号**：[PR #27767](https://github.com/google-gemini/gemini-cli/pull/27767)
    *   **内容**：修复了 `installSkill`, `linkSkill`, `uninstallSkill` 中的三个路径遍历漏洞，防止恶意 Skill 写入系统敏感路径。
3.  **[工具链] Add static eval source analyzer**
    *   **编号**：[PR #27631](https://github.com/google-gemini/gemini-cli/pull/27631)
    *   **内容**：引入评估开发工具链的第一部分，使用 TypeScript AST 解析 Eval 文件，提取元数据以辅助质量评估。
4.  **[构建修复] Resolve parallel workspace compilation race condition**
    *   **编号**：[PR #27643](https://github.com/google-gemini/gemini-cli/pull/27643)
    *   **内容**：解决了并行 Workspace 编译时的竞态条件，将构建过程拆分为核心、库、应用三个拓扑阶段，确保依赖顺序正确。
5.  **[标准化] Standardize tool output formatting**
    *   **编号**：[PR #27772](https://github.com/google-gemini/gemini-cli/pull/27772)
    *   **内容**：重构外部工具（MCP, Shell, Web-fetch）的输出格式，引入 `wrapUntrusted` 辅助函数统一文本转换逻辑，提升一致性。
6.  **[MCP] Fix MCP header encoding for non-ASCII values**
    *   **编号**：[PR #27771](https://github.com/google-gemini/gemini-cli/pull/27771)
    *   **内容**：修复 MCP HTTP 传输中的 Header 编码问题，支持 Unicode 字符（如 `mąka`），解决了非 ASCII 配置导致的发现失败问题。
7.  **[UI/UX] Filter internal session context from history during resumption**
    *   **编号**：[PR #27391](https://github.com/google-gemini/gemini-cli/pull/27391)
    *   **内容**：修复了恢复会话时在 TUI 界面错误显示内部 `<session_context>` XML 块的问题，提升了界面整洁度。
8.  **[功能] Add Amazon URL parsing and metadata extraction**
    *   **编号**：[PR #27455](https://github.com/google-gemini/gemini-cli/pull/27455)
    *   **内容**：增强了 `web-fetch` 功能，支持自动解析 Amazon 短链接并提取产品元数据，便于进行比较分析。
9.  **[UX] Avoid persisting empty resume sessions**
    *   **编号**：[PR #27770](https://github.com/google-gemini/gemini-cli/pull/27770)
    *   **内容**：防止空会话或仅包含启动命令的会话出现在恢复列表中，清理了无效的历史记录。
10. **[UI] Prevent infinite re-render loop**
    *   **编号**：[PR #23948](https://github.com/google-gemini/gemini-cli/pull/23948)
    *   **内容**：修复了 `useFlickerDetector` 和 `useSessionResume` 缺少依赖数组导致的无限重渲染死锁 Bug。

## 5. 功能需求趋势
*   **Agent 可靠性**：社区强烈要求解决 Agent "挂起" 和 "幻觉报告"（谎报成功）的问题。用户对 Agent 执行任务的可信度表示担忧，尤其是子 Agent 的状态管理。
*   **AST 感知能力**：开发者呼吁引入 AST 感知的文件读取和搜索工具，认为这能显著减少 Token 浪费并提高代码分析的精准度，超越目前的文本匹配模式。
*   **安全与隐私**：Auto Memory 功能的透明度和安全性受到关注，需避免敏感信息泄露及无效的无限重试。
*   **平台兼容性**：Wayland 环境下的支持以及非 ASCII 字符的处理仍是痛点。

## 6. 开发者关注点
*   **工具使用意愿低**：开发者反馈 Gemini CLI 模型极少主动调用自定义 Skills，即使指令明确描述了使用场景，这降低了 CLI 的扩展价值。
*   **配额系统混乱**：Pro 用户遇到 429 错误但后台显示使用量为 0%，反映了前端配额展示与后端限制之间的同步问题，影响了付费用户的信任。
*   **构建稳定性**：内部开发流程中并行构建的竞态条件被修复，显示项目复杂度正在增加，对 CI/CD 流程提出了更高要求。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-06-10)

## 1. 今日速览
GitHub Copilot CLI 发布了 **v1.0.61** 版本，主要修复了会话恢复时的白屏 Bug，并引入了全新的 `/settings` 交互式设置界面及 UI 细节优化。社区方面，用户对 **v1.0.60 引入的网络权限变更** 反响强烈，多个 Issue 反映私有网络访问受阻导致企业 Agent 失效。此外，关于模型一致性（CLI 与 VS Code 模型列表不同步）及 Git Worktree 管理的讨论热度居高不下。

## 2. 版本发布
**v1.0.61** (发布于 2026-06-09)
- **新增功能**：添加 `/settings` 交互式对话框，支持在一个界面浏览和编辑所有用户设置。
- **UI 优化**：改进了 `/agents` 选择器和“创建新 Agent”向导的边框、标题和输入框样式，保持视觉一致性。
- **Bug 修复**：修复了恢复会话可能导致屏幕空白的问题。
- **详情链接**：[Release v1.0.61](https://github.com/github/copilot-cli/releases/tag/v1.0.61)

## 3. 社区热点 Issues (Top 10)

1.  **[高优先级] 恢复 CLI 命令以避免工作流中断**
    - **链接**：[Issue #53](https://github.com/github/copilot-cli/issues/53)
    - **简述**：社区对移除某些 CLI 命令表示不满，已有用户开发第三方版本（如 `shell-ai`）以填补空白。该 Issue 持续获得关注（75 👍），开发者呼吁官方尽快回应。

2.  **[功能缺失] CLI 未列出组织启用的模型（如 Gemini 3.1 Pro）**
    - **链接**：[Issue #1703](https://github.com/github/copilot-cli/issues/1703)
    - **简述**：用户发现在同一账号和组织下，VS Code 可用的模型（如 Gemini 3.1 Pro）在 CLI 中不显示，导致模型体验割裂（54 👍）。

3.  **[用户体验] Git Worktree 管理混乱，建议默认禁用**
    - **链接**：[Issue #2243](https://github.com/github/copilot-cli/issues/2243)
    - **简述**：用户反馈 Agent 自动创建的 Worktree 导致代码难以合并回主分支，建议此功能默认关闭或由用户手动开启（8 👍）。

4.  **[关键故障] Claude Sonnet 4.6 执行失败 (HTTP 503 错误)**
    - **链接**：[Issue #2050](https://github.com/github/copilot-cli/issues/2050)
    - **简述**：用户在使用 Claude Sonnet 4.6 模型时频繁遭遇连接中断和 503 错误，严重影响生成任务的连续性。

5.  **[网络权限] v1.0.60 禁止访问私有网络导致 Agent 失效**
    - **链接**：[Issue #3731](https://github.com/github/copilot-cli/issues/3731)
    - **简述**：企业用户反馈 1.0.60 版本默认阻止了 Agent 访问企业内网资源（如模板和标准文档），请求提供配置选项以恢复该权限。

6.  **[回归问题] v1.0.60 导致 userPromptSubmitted 钩子失效**
    - **链接**：[Issue #3727](https://github.com/github/copilot-cli/issues/3727)
    - **简述**：插件开发者报告 v1.0.60 引入回归，导致 `additionalContext` 无法注入到 Planner 中，破坏了现有的插件工作流。

7.  **[功能请求] 内置 Git Worktree 生命周期管理**
    - **链接**：[Issue #1613](https://github.com/github/copilot-cli/issues/1613)
    - **简述**：针对 Worktree 的痛点，有开发者提议 CLI 应具备自动创建、隔离任务和销毁 Worktree 的原生能力，获得 31 👍 支持。

8.  **[平台差异] Linux 下 Ctrl+Shift+C 快捷键失效**
    - **链接**：[Issue #2082](https://github.com/github/copilot-cli/issues/2082)
    - **简述**：Ubuntu 24.04 环境下，Copilot CLI 劫持了 `Ctrl+Shift+C`，导致标准的终端复制功能无法使用。

9.  **[数据损坏] Edit 工具损坏非 UTF-8 编码文件**
    - **链接**：[Issue #3732](https://github.com/github/copilot-cli/issues/3732)
    - **简述**：新报告指出，`edit` 工具在处理 CP1252 等非 UTF-8 编码文件时，会将其错误转换导致文件损坏，影响遗留项目维护。

10. **[认证问题] 恢复会话后无法加载模型列表**
    - **链接**：[Issue #3596](https://github.com/github/copilot-cli/issues/3596)
    - **简述**：用户在恢复特定会话时遇到 `Not authenticated` 错误，导致无法切换模型，必须新建会话才能解决。

## 4. 重要 PR 进展

过去 24 小时内 PR 更新较少，仅监测到 1 条新增 PR：

- **[新增] Jigg empire ai** (#3737)
  - **链接**：[PR #3737](https://github.com/github/copilot-cli/pull/3737)
  - **简述**：该 PR 内容疑似为测试或无关内容，尚未有实质性代码合并讨论。
  - *注：社区核心功能修复与迭代目前主要集中在 Issue 反馈中，代码提交活跃度本日较低。*

## 5. 功能需求趋势

- **模型与平台对齐**：社区强烈要求 CLI 具备与 VS Code 相同的模型支持能力，特别是对企业级模型和第三方模型（如 Gemini 3.1, Custom Models）的支持。
- **安全与权限平衡**：新版本的网络隔离策略引发了企业用户的反弹，亟需更灵活的“白名单”或网络配置选项，以支持内网 MCP 服务器和私有资源访问。
- **工作流隔离与安全**：关于 Git Worktree 的讨论显示出两极分化，一方面用户需要隔离环境避免污染主分支，另一方面自动化 Worktree 的不可控性令人担忧，急需可视化的生命周期管理工具。
- **开发者体验 (DX) 优化**：包括对 Windows 终端快捷键、非 UTF-8 编码支持、剪切板中文乱码等细节问题的修复需求增多。

## 6. 开发者关注点

- **版本升级风险**：v1.0.60 被标记为引入了多个回归问题（Hook 失效、网络阻断），开发者建议在升级前检查插件兼容性及网络环境配置。
- **插件与扩展生态**：MCP (Model Context Protocol) 相关问题频发，包括服务器启动失控、路径配置错误以及 OAuth 重连问题，显示该模块仍处于快速迭代且不够稳定的阶段。
- **字符编码兼容性**：非 ASCII 字符（如中文）在剪切板、终端输出及文件编辑中的处理依然是跨平台开发的痛点，涉及多个新开 Issue。
- **卸载与清理**：Windows 平台上出现无法卸载的情况，表明安装包管理可能存在残留或注册表锁定问题。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-06-10)

## 1. 今日速览
今日社区关注度主要集中在核心工具链的稳定性与可观测性上。虽然无新版本发布，但出现了关于文件读取死循环和编辑工具高频失败的关键 Bug 反馈。社区贡献者提交了重要 PR，旨在通过将 Hook 错误输出暴露给 LLM 来增强上下文感知能力，这标志着工具正向更智能的自纠错方向演进。

## 2. 版本发布
*   **无新版本发布**：过去 24 小时内官方未发布新的 Release。

## 3. 社区热点 Issues
今日共有 2 条活跃 Issue，均涉及核心功能阻塞，建议重点关注：

1.  **[#640 Kimi CLI 陷入重复读取文件的死循环](https://github.com/MoonshotAI/kimi-cli/issues/640)**
    *   **重要性**：严重影响用户体验和 Token 消耗。该问题自 1 月提交至今仍未解决，用户反馈在使用 `mimo-v2-flash` 模型时，CLI 会在读取文件时陷入无限循环。
    *   **社区反应**：目前有 7 条评论，虽为旧 Issue 但今日又有更新，表明该 Bug 可能具有复发性或与特定模型配置强相关，需排查是否为上下文窗口管理或指令遵循问题。

2.  **[#2443 新版本中 Edit tool 频繁失败](https://github.com/MoonshotAI/kimi-cli/issues/2443)**
    *   **重要性**：编辑工具是代码修改的核心能力。用户报告在 v0.12.0 版本中使用 `k2.6` 模型时，编辑操作频繁报错，直接阻碍开发工作流。
    *   **社区反应**：为新发起的 Issue（昨日创建），目前尚无官方回复。此类工具调用失败通常与模型对工具调用的参数格式适配有关，需开发团队尽快确认兼容性。

## 4. 重要 PR 进展
今日有 1 条功能性 PR，聚焦于提升 Agent 的自我感知能力：

1.  **[#2445 feat(hooks): 将 PostToolUse hook 的 stderr 暴露给 LLM 上下文](https://github.com/MoonshotAI/kimi-cli/pull/2445)**
    *   **内容概述**：作者 `@zwpdbh` 提出了一项重要改进，将 `PostToolUse` 钩子从“发射后不管”模式改为等待模式。
    *   **技术价值**：此举允许捕获 Hook 的标准错误输出并将其附加到工具结果消息中。这意味着 LLM 能够立即看到 Hook 执行过程中的报错信息，从而有机会在下一个 Turn 中自动修正错误，显著提升了工具链的鲁棒性和自动化调试能力。

## 5. 功能需求趋势
根据今日 Issues 分析，社区关注的重点方向如下：
*   **稳定性优先**：相比于新功能，用户目前更受困于基础功能的稳定性（如文件读取、代码编辑），减少死循环和工具调用失败是目前最迫切的隐形需求。
*   **上下文与错误处理**：从 PR #2445 的方向可以看出，社区正在推动增强 CLI 的“可观测性”，希望 LLM 能更清楚地感知工具执行过程中的错误细节，而非盲目重试。

## 6. 开发者关注点
*   **痛点：Agent 死循环**：开发者反馈在特定模型（如 mimo-v2-flash）下容易出现逻辑死锁，导致资源浪费，需优化任务终止条件。
*   **痛点：模型适配兼容性**：不同模型（k2.6 vs mimo-v2-flash）在工具调用上的表现差异较大，开发者呼吁 CLI 层面做更好的兼容处理或提示词优化。
*   **需求：错误反馈透明化**：开发者希望工具执行的底层错误能更透明地传递给模型，以实现更智能的错误处理，而非仅仅在终端打印日志。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-06-10)

## 1. 今日速览
OpenCode 今日发布 **v1.17.0** 版本，核心改进包括引入 `fff` 支持的大规模项目文件搜索加速，以及新增 Cohere North 模型支持和会话粘性路由头。社区方面，关于 **Agent 沙箱安全机制** 的讨论热度居高不下，同时自定义 Provider 的兼容性与配置问题仍是开发者反馈的焦点。

## 2. 版本发布
**v1.17.0**
- **性能提升**：集成 `fff` 工具，显著提升大型项目中的文件搜索速度。
- **网络与路由**：增加 `X-Session-Id` 请求头，支持需要粘性路由的代理设置。
- **模型支持**：新增 Cohere North 模型支持；增加 `reasoning` 作为交错字段选项。
- **贡献者**：@dmtrKovalenko, @songchaow 等。

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] #2242 Agent 沙箱隔离机制需求**
    - **链接**: [anomalyco/opencode Issue #2242](https://github.com/anomalyco/opencode/issues/2242)
    - **简析**：社区强烈呼吁限制 Agent 的终端命令权限（如禁止访问当前目录外文件）。作者指出竞品已支持 macOS Seatbelt 等机制，该 Issue 点赞数达 53，是用户最关心的安全功能之一。

2.  **[OPEN] #13984 CLI 复制粘贴功能失效**
    - **链接**: [anomalyco/opencode Issue #13984](https://github.com/anomalyco/opencode/issues/13984)
    - **简析**：用户反馈在 OpenCode CLI 中无法正常进行复制粘贴操作，提示已复制但实际粘贴无内容。这是一个影响基础体验的高频 Bug，评论数达 45 条。

3.  **[CLOSED] #3472 VSCode 扩展上下文感知问题**
    - **链接**: [anomalyco/opencode Issue #3472](https://github.com/anomalyco/opencode/issues/3472)
    - **简析**：虽然已关闭，但引发了大量讨论。用户在 VSCode 中选中文本后，Agent 无法识别上下文。这反映了 IDE 集成中上下文同步的痛点。

4.  **[OPEN] #5674 自定义 OpenAI 兼容 Provider 配置未生效**
    - **链接**: [anomalyco/opencode Issue #5674](https://github.com/anomalyco/opencode/issues/5674)
    - **简析**：配置文件中的 `baseURL` 和 `apiKey` 未正确传递给 API 调用，导致自定义模型接入困难。这是接入私有/第三方模型时的关键阻碍。

5.  **[OPEN] #20802 自定义 Provider 图片附件无法正确传递**
    - **链接**: [anomalyco/opencode Issue #20802](https://github.com/anomalyco/opencode/issues/20802)
    - **简析**：在使用自定义 Provider 时，图片附件无法作为视觉输入传递给模型。这对多模态应用开发者造成了困扰。

6.  **[OPEN] #31498 开发者 Prompt 效率低下**
    - **链接**: [anomalyco/opencode Issue #31498](https://github.com/anomalyco/opencode/issues/31498)
    - **简析**：用户批评 Agent 的系统提示词过于冗长低效，导致简单任务（如移动文件）也会经过复杂的自我辩论。社区呼吁优化 Prompt 设计以提升响应速度。

7.  **[OPEN] #30662 会话标题自动生成失败**
    - **链接**: [anomalyco/opencode Issue #30662](https://github.com/anomalyco/opencode/issues/30662)
    - **简析**：使用特定 Provider 时，会话标题无法自动生成。影响了会话管理的用户体验。

8.  **[OPEN] #31337 Server 模式下状态接口不可用**
    - **链接**: [anomalyco/opencode Issue #31337](https://github.com/anomalyco/opencode/issues/31337)
    - **简析**：`/session/status` 端点返回 404，阻碍了基于 Server 模式的集成开发。

9.  **[CLOSED] #26508 订阅支付争议与退款问题**
    - **链接**: [anomalyco/opencode Issue #26508](https://github.com/anomalyco/opencode/issues/26508)
    - **简析**：用户反馈支付 UI 易引起误解且退款流程缓慢。虽然属于运营问题，但影响了品牌口碑，需引起官方重视。

10. **[OPEN] #18757 工具执行频繁中断**
    - **链接**: [anomalyco/opencode Issue #18757](https://github.com/anomalyco/opencode/issues/18757)
    - **简析**：在 v1.3.0+ 版本中，Bash/Edit 等工具频繁报 "Tool execution aborted" 错误，用户需频繁重启会话。

## 4. 重要 PR 进展 (Top 10)

1.  **[OPEN] #31601 核心功能：项目引用指引与自动补全**
    - **链接**: [anomalyco/opencode PR #31601](https://github.com/anomalyco/opencode/pull/31601)
    - **简析**：为项目和 Git 引用添加描述与自动补全元数据，优化 Agent 对外部目录的访问逻辑，提升多仓库协作体验。

2.  **[OPEN] #31596 新特性：API Key 轮询支持**
    - **链接**: [anomalyco/opencode PR #31596](https://github.com/anomalyco/opencode/pull/31596)
    - **简析**：支持配置 API Key 数组，允许对 Provider 进行轮询调用。这对高并发场景下的速率限制处理非常实用。

3.  **[OPEN] #31392 功能：ACP 客户端原生审查支持**
    - **链接**: [anomalyco/opencode PR #31392](https://github.com/anomalyco/opencode/pull/31392)
    - **简析**：支持在 Zed 和 Devin 等 ACP 客户端中进行原生的文件修改审查，增强了 OpenCode 作为后端引擎的集成能力。

4.  **[OPEN] #31599 重构：消息标准化逻辑抽取**
    - **链接**: [anomalyco/opencode PR #31599](https://github.com/anomalyco/opencode/pull/31599)
    - **简析**：从 `normalizeMessages` 中提取 Anthropic/Bedrock/Deepseek 等特定逻辑，旨在优化代码结构并修复潜在的 Prompt 缓存问题。

5.  **[OPEN] #31602 修复：TUI 输入拦截问题**
    - **链接**: [anomalyco/opencode PR #31602](https://github.com/anomalyco/opencode/pull/31602)
    - **简析**：修复了聊天框聚焦时，特定按键（如 'l'）被 Leader Key 机制错误拦截导致无法输入的问题。

6.  **[OPEN] #31515 新特性：iFlow Provider 集成**
    - **链接**: [anomalyco/opencode PR #31515](https://github.com/anomalyco/opencode/pull/31515)
    - **简析**：为 `websearch` 和 `webfetch` 工具添加可选的 iFlow Provider 路径，扩展网络搜索能力。

7.  **[OPEN] #30682 修复：Git Rebase 后的会话孤儿问题**
    - **链接**: [anomalyco/opencode PR #30682](https://github.com/anomalyco/opencode/pull/30682)
    - **简析**：解决无远程 URL 的项目在 Git History 重写后 Project ID 变化导致的会话丢失问题。

8.  **[OPEN] #31595 修复：MCP 客户端创建容错**
    - **链接**: [anomalyco/opencode PR #31595](https://github.com/anomalyco/opencode/pull/31595)
    - **简析**：增强 MCP 客户端初始化的健壮性，防止因工具初始化失败导致整个客户端崩溃。

9.  **[CLOSED] #31583 依赖更新：升级 fff 至 0.9.4**
    - **链接**: [anomalyco/opencode PR #31583](https://github.com/anomalyco/opencode/pull/31583)
    - **简析**：配合 v1.17.0 版本发布，升级底层搜索库 `fff`，优化原生库解析。

10. **[OPEN] #31589 重构：文件搜索迁移至 V2 接口**
    - **链接**: [anomalyco/opencode PR #31589](https://github.com/anomalyco/opencode/pull/31589)
    - **简析**：将应用层文件选择器迁移至 v2 文件系统搜索接口，提升搜索一致性与性能。

## 5. 功能需求趋势
- **自定义模型接入增强**：大量 Issues 涉及 OpenAI-compatible Provider 的配置、Vision 支持及参数传递，显示用户强烈希望将 OpenCode 作为通用 AI 客户端对接私有或小众模型。
- **安全与沙箱隔离**：Agent 权限控制（文件系统、终端命令）需求热度不减，用户期待类似 Seatbelt 的隔离机制以保障生产环境安全。
- **IDE 深度集成**：上下文感知、会话导出与迁移、以及在 Zed/VSCode 中的原生审查功能，表明用户希望 OpenCode 能无缝融入现有开发工作流。

## 6. 开发者关注点
- **稳定性与易用性痛点**：CLI 复制粘贴失效、工具执行无故中断等基础体验问题严重影响开发效率，需优先修复。
- **Prompt 设计优化**：有开发者指出当前内部 Prompt 导致 Agent “过度思考”简单任务，期望在准确性与 Token 消耗/延迟之间取得更好平衡。
- **计费与服务响应**：订阅支付流程的不透明和客服响应滞后引发了负面反馈，建议官方优化支付 UI 引导并建立更透明的退款流程。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-06-10)

## 1. 今日速览
今日 Qwen Code 发布了 **v0.18.0-preview.1** 版本，但随后的 v0.18.0-preview.2 发布流程因 CI 问题失败。社区重点聚焦于 **Agentic 能力增强**，多智能体协作与 Workflow 沙箱机制成为开发热点。同时，ACP 协议的 Streamable HTTP 传输实现正在推进，旨在提升 IDE 集成体验。

## 2. 版本发布
- **v0.18.0-preview.1**: 本次预览版主要包含 CLI 输出修复及部分底层调整，为后续功能迭代做铺垫。
  - 链接: [Release v0.18.0-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.0-preview.1)
- **注意**: v0.18.0-preview.2 发布工作流已失败，团队正在排查中。
  - 链接: [Issue #4920](https://github.com/QwenLM/qwen-code/issues/4920)

## 3. 社区热点 Issues (Top 10)

1.  **[发布阻塞] Release Failed for v0.18.0-preview.2**
    - **原因**: CI 工作流运行失败，阻断了最新版本的发布，需开发团队紧急修复。
    - 链接: [#4920](https://github.com/QwenLM/qwen-code/issues/4920)

2.  **[功能追踪] tracking(serve): ACP Streamable HTTP transport**
    - **内容**: Daemon 模式正在实现 ACP (Agent Client Protocol) 流式 HTTP 传输，这将允许 Zed、JetBrains 等 IDE 直接连接 `qwen serve`，无需适配器。
    - 链接: [#4782](https://github.com/QwenLM/qwen-code/issues/4782)

3.  **[核心功能] feat(core): add enter_plan_mode tool and Plan Approval Gate**
    - **内容**: 引入“计划模式”，允许模型在执行复杂任务前主动进入规划状态并设立审批关卡，显著提升 Agent 自主性与安全性。
    - 链接: [#4853](https://github.com/QwenLM/qwen-code/pull/4853)

4.  **[Bug] OpenWork 无法区分不同提供商的同名模型**
    - **痛点**: 配置多个 OpenAI 兼容提供商时，UI 无法区分同名模型，导致模型切换混淆。
    - 链接: [#4877](https://github.com/QwenLM/qwen-code/issues/4877)

5.  **[Bug] IDEA 插件 ask_user_question 不显示问题文本**
    - **影响**: 在 JetBrains 插件中，Agent 提问时用户看不到问题文本，也无法输入，阻塞了交互流程。
    - 链接: [#4888](https://github.com/QwenLM/qwen-code/issues/4888)

6.  **[功能请求] In-process MCP server support for Python SDK**
    - **需求**: 开发者希望在 Python SDK 中支持进程内 MCP 服务器，以减少外部进程管理的复杂性。
    - 链接: [#4889](https://github.com/QwenLM/qwen-code/issues/4889)

7.  **[Bug] Terminal resize during streaming leaves fragmented content**
    - **体验**: 在生成内容时调整终端窗口大小，会导致历史记录显示碎片化，宽度不一致。
    - 链接: [#4891](https://github.com/QwenLM/qwen-code/issues/4891)

8.  **[功能请求] Support installing extensions from archive files and URLs**
    - **需求**: 建议支持直接从 `.zip`/`.tar.gz` 归档文件或 URL 安装插件，目前源码和 PR 已提交。
    - 链接: [#4910](https://github.com/QwenLM/qwen-code/issues/4910)

9.  **[Bug] Windows SYSTEM 用户安装后环境变量丢失**
    - **场景**: 通过 SSM (SYSTEM 用户) 安装后，新会话中 `qwen` 命令无法找到，影响云服务器部署体验。
    - 链接: [#4901](https://github.com/QwenLM/qwen-code/issues/4901)

10. **[功能请求] Add --safe-mode flag**
    - **用途**: 建议添加 `--safe-mode` 启动参数，禁用所有用户自定义配置，便于排查问题。
    - 链接: [#4883](https://github.com/QwenLM/qwen-code/issues/4883)

## 4. 重要 PR 进展 (Top 10)

1.  **feat: add Agent Team experimental feature (#4844)**
    - **内容**: 实验性引入多智能体协作模式，允许模型创建 Team 并行执行子任务，解决复杂问题。
    - 链接: [PR #4844](https://github.com/QwenLM/qwen-code/pull/4844)

2.  **feat(core): Workflow tool P1 — minimal node:vm sandbox (#4732)**
    - **内容**: 实现了 Dynamic Workflows 的 P1 阶段，引入基于 `node:vm` 的沙箱环境，支持运行模型生成的 JS 脚本。
    - 链接: [PR #4732](https://github.com/QwenLM/qwen-code/pull/4732)

3.  **feat(core): layered tool-output truncation (#4880)**
    - **内容**: 优化 Token 消耗，引入分层工具输出截断机制，对过长的工具输出进行截断并存储为临时文件，防止上下文溢出。
    - 链接: [PR #4880](https://github.com/QwenLM/qwen-code/pull/4880)

4.  **feat(core): persist file history snapshots for /rewind (#4897)**
    - **内容**: 支持跨会话持久化文件历史快照，使得 `/rewind` 命令在重启 CLI 后依然有效。
    - 链接: [PR #4897](https://github.com/QwenLM/qwen-code/pull/4897)

5.  **fix(dual-output): prevent FIFO blocking on startup (#4894)**
    - **修复**: 解决了 Dual Output 模式下，如果 FIFO 管道无读取端导致的启动阻塞问题，提升了非交互模式的稳定性。
    - 链接: [PR #4894](https://github.com/QwenLM/qwen-code/pull/4894)

6.  **feat(daemon): Support image upload and echo in WebShell (#4922)**
    - **内容**: 为 Daemon 模式的 WebShell 增加了图片上传和回显支持，补齐了多模态交互能力。
    - 链接: [PR #4922](https://github.com/QwenLM/qwen-code/pull/4922)

7.  **feat(extensions): support archive install sources (#4909)**
    - **内容**: 扩展插件安装来源，支持从本地压缩包或远程 URL 直接安装。
    - 链接: [PR #4909](https://github.com/QwenLM/qwen-code/pull/4909)

8.  **feat(serve): add cursor-based pagination for session list (#4902)**
    - **内容**: 为 REST 和 ACP 接口的会话列表增加了基于游标的分页功能，优化大量会话时的加载性能。
    - 链接: [PR #4902](https://github.com/QwenLM/qwen-code/pull/4902)

9.  **feat(stats): add interactive /stats dashboard (#4779)**
    - **内容**: 新增交互式 `/stats` 仪表盘，支持跨会话追踪使用情况、活动趋势和效率指标。
    - 链接: [PR #4779](https://github.com/QwenLM/qwen-code/pull/4779)

10. **fix(openai): default splitToolMedia (#4917)**
    - **修复**: 修复了在严格兼容 OpenAI 的后端中，工具调用返回的图片无法正确传给模型的问题。
    - 链接: [PR #4917](https://github.com/QwenLM/qwen-code/pull/4917)

## 5. 功能需求趋势

-   **Agentic 能力与编排**: 社区正在积极推动从单一对话向多智能体和自动化工作流演进。重点包括 **Workflow 沙箱** (#4732)、**多智能体协作** (#4844) 以及 **计划模式** (#4853)，显示出 Qwen Code 正在向更自主的 AI 软件工程师角色转型。
-   **IDE 与协议集成**: 随着对 **ACP 协议** (#4782) 的支持，以及 **Python SDK 进程内 MCP 服务器** (#4889) 的需求，开发者希望通过标准协议将 Qwen Code 更紧密地集成到现有开发环境（Zed, JetBrains, VSCode）中。
-   **上下文与性能管理**: 面对长任务，**Token 溢出管理** (#4880)、**跨会话 Rewind** (#4897) 以及 **Stats 仪表盘** (#4779) 成为关注焦点，反映了用户在处理复杂项目时对稳定性和可控性的迫切需求。

## 6. 开发者关注点

-   **模型配置与切换痛点**: 多个 Issues (#4877, #4904) 反馈了在多提供商环境下模型切换逻辑混乱、同名模型难以区分的问题，配置管理急需优化。
-   **非交互模式稳定性**: Dual Output 模式下的无响应 (#4727) 和 FIFO 阻塞 (#4894) 表明，在 CI/CD 或作为后端服务运行时的稳定性仍需打磨。
-   **UI 细节体验**: 终端渲染碎片化 (#4891)、桌面端文件预览遮挡 (#4885) 以及插件交互失效 (#4888) 等问题，表明前端体验的打磨是提升用户满意度的关键。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 (2026-06-10)

## 1. 今日速览
项目迎来重大品牌重塑，正式更名为 **CodeWhale**，并发布 **v0.8.55** 版本，新增 Together AI 和 OpenAI Codex 支持。社区今日焦点集中于品牌迁移后的路径兼容性问题，以及“远程工作台”功能的深度开发。此外，HarmonyOS 平台的适配工作取得突破性进展，扩展了客户端生态。

## 2. 版本发布
**v0.8.55 — Together AI, OpenAI Codex, Model Catalog**
- **品牌重塑**：项目正式更名为 `CodeWhale`，旧 npm 包 `deepseek-tui` 已停止维护，用户需参照 `docs/REBRAND.md` 进行迁移。
- **新特性**：集成 Together AI 和 OpenAI Codex 模型，扩展了模型目录功能。
- 链接：[Release v0.8.55](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.55)

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] [#2942 Codewhale 自问自答导致项目崩溃](https://github.com/Hmbown/CodeWhale/issues/2942)**
    *   **内容**：用户反馈 Agent 在未收到指令时擅自执行操作（自问自答），导致正在开发的项目崩溃。
    *   **重要性**：严重的功能性 Bug，涉及 Agent 的自主控制逻辑，直接影响代码安全。

2.  **[OPEN] [#2935 设计海马体记忆系统](https://github.com/Hmbown/CodeWhale/issues/2935)**
    *   **内容**：提议构建跨会话的“海马体记忆系统”，以解决当前 1M token 上下文窗口之外的长期记忆问题。
    *   **重要性**：核心架构层面的功能增强，旨在实现无限上下文和持久化记忆。

3.  **[OPEN] [#2969 v0.8.55 更新日志缺失](https://github.com/Hmbown/CodeWhale/issues/2969)**
    *   **内容**：CHANGELOG 文件未包含最新的 v0.8.55 版本信息。
    *   **重要性**：文档同步问题，影响用户对版本更新的感知和追踪。

4.  **[OPEN] [#1990 远程工作台：评估 US-first Cloudflare/AWS/Telegram 链路](https://github.com/Hmbown/CodeWhale/issues/1990)**
    *   **内容**：规划非腾讯云生态的海外基础设施路径，构建廉价的海外远程开发环境。
    *   **重要性**：项目战略级功能，旨在拓展全球用户群的远程开发场景。

5.  **[OPEN] [#2966 Telegram 桥接串行更新导致审批死锁](https://github.com/Hmbown/CodeWhale/issues/2966)**
    *   **内容**：在远程工作台测试中，Telegram 桥接在请求工具审批时出现死锁，用户点击“允许”按钮无响应。
    *   **重要性**：阻碍远程控制功能落地的关键阻塞问题。

6.  **[OPEN] [#2964 v0.8.56: DigitalOcean + Telegram 远程工作台设置](https://github.com/Hmbown/CodeWhale/issues/2964)**
    *   **内容**：计划提供“15分钟搭建远程工作台”的完整文档，包含美国 VPS 和 Telegram 桥接。
    *   **重要性**：远程工作台功能的实现里程碑。

7.  **[OPEN] [#2931 自动检测版本更新并通知](https://github.com/Hmbown/CodeWhale/issues/2931)**
    *   **内容**：建议在启动时增加版本检测机制，解决用户手动检查更新的滞后性问题。
    *   **重要性**：提升用户体验，确保用户及时获取安全补丁和功能更新。

8.  **[CLOSED] [#2922 Agent 在 YOLO 模式下反复确认](https://github.com/Hmbown/CodeWhale/issues/2922)**
    *   **内容**：用户质疑 Agent 在执行原子操作时过度确认 YOLO 模式状态。
    *   **重要性**：涉及交互逻辑与用户信任机制的设计讨论。

9.  **[OPEN] [#2963 DeepSeek V4 Anthropic Messages API 适配测试](https://github.com/Hmbown/CodeWhale/issues/2963)**
    *   **内容**：提议实验性支持 DeepSeek V4 的 Anthropic 兼容 API，对比工具调用和 Web 搜索行为。
    *   **重要性**：探索新的 API 适配方案，可能简化 Provider 架构。

10. **[OPEN] [#2656 Sub-agent 会话名冲突难以诊断](https://github.com/Hmbown/CodeWhale/issues/2656)**
    *   **内容**：在多 Agent 编排测试中，会话名冲突错误信息对 Agent 不够友好，难以自愈。
    *   **重要性**：影响多 Agent 协作（Orchestration）的稳定性。

## 4. 重要 PR 进展 (Top 10)

1.  **[#2943 修复 macOS 键盘快捷键映射](https://github.com/Hmbown/CodeWhale/pull/2943)**
    *   **内容**：修复 macOS 终端中 Cmd (SUPER) 键未正确映射为 Ctrl 键的问题，统一了快捷键体验。

2.  **[#2634 移植至 HarmonyOS](https://github.com/Hmbown/CodeWhale/pull/2634)**
    *   **内容**：实现了对鸿蒙系统的适配，条件编译排除了 Linux 特有的依赖。
    *   **意义**：极大地扩展了客户端支持范围。

3.  **[#2925 新增 Together AI 专用 Provider 支持](https://github.com/Hmbown/CodeWhale/pull/2925)**
    *   **内容**：将 Together AI 作为独立 Provider 接入，包含配置、认证及 Picker 界面支持。

4.  **[#2920 修复大文本粘贴路径问题](https://github.com/Hmbown/CodeWhale/pull/2920)**
    *   **内容**：将粘贴文件的存储路径从旧的 `.deepseek/pastes/` 迁移至 `.codewhale/pastes/`，配合品牌重塑。

5.  **[#2579 Phase 4: 使用 AppendLog 重构 Session.messages](https://github.com/Hmbown/CodeWhale/pull/2579)**
    *   **内容**：核心重构，将会话消息存储从 `Vec<Message>` 替换为仅追加日志，优化性能与数据结构。

6.  **[#2927 模型目录新增 Qwen 3.7 Max](https://github.com/Hmbown/CodeWhale/pull/2927)**
    *   **内容**：在 OpenRouter 模型目录中添加了对 Qwen 3.7 Max 的支持。

7.  **[#2971 暴露匹配的审批规则元数据](https://github.com/Hmbown/CodeWhale/pull/2971)**
    *   **内容**：在审批请求事件中暴露匹配到的执行策略规则，增强了可解释性。

8.  **[#2892 沙箱提权对话框国际化 (i18n)](https://github.com/Hmbown/CodeWhale/pull/2892)**
    *   **内容**：将沙箱提权对话框迁移至翻译系统，支持包含中日英在内的 7 种语言。

9.  **[#2479 重构 Provider 枚举为 Provider Trait](https://github.com/Hmbown/CodeWhale/pull/2479)**
    *   **内容**：架构重构，引入 Provider Trait 替代原有的枚举匹配，减少代码重复，便于扩展新 Provider。

10. **[#1865 新增 Pro Plan 路由配置](https://github.com/Hmbown/CodeWhale/pull/1865)**
    *   **内容**：引入 `/mode pro-plan` 路由配置，优化计划确认流程。

## 5. 功能需求趋势

*   **远程开发与移动端控制**：社区强烈需求“远程工作台”功能，集中在 Telegram 桥接、廉价云主机（DigitalOcean）一键部署、移动端审批与交互（#1990, #2964, #2968）。
*   **多模型与异构 API 支持**：用户不仅关注模型种类（Qwen 3.7, DeepSeek V4），更关注不同 API 协议的适配，希望通过 Anthropic 协议接入 DeepSeek，或支持 Together AI 等聚合平台（#2963, #2906）。
*   **记忆与上下文管理**：随着项目向 Agent 方向演进，超越单一上下文窗口的长期记忆系统成为热点，如“海马体记忆”提案（#2935）。

## 6. 开发者关注点

*   **迁移平滑度**：品牌从 `DeepSeek-TUI` 到 `CodeWhale` 的变更引发了路径迁移问题（#2920），开发者迫切需要无缝的更新脚本或明确的迁移指引，避免旧配置失效。
*   **Agent 自主性与安全性**：Agent 自作主张执行命令（#2942）引发了担忧，开发者更倾向于严格遵循指令或具备完善的沙箱/回滚机制，强调“信任”与“可控性”。
*   **跨平台兼容性细节**：除了 HarmonyOS 等大平台支持外，macOS 终端的修饰键映射（#2943）等细节问题也是开发者反馈的高频痛点。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*