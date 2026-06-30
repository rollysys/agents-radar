# AI CLI 工具社区动态日报 2026-06-30

> 生成时间: 2026-06-30 03:54 UTC | 覆盖工具: 8 个

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

# AI CLI 工具生态横向对比分析报告 (2026-06-30)

## 1. 生态全景
当前 AI CLI 工具生态正从"功能验证期"迈向"企业级深耕与稳定性攻坚期"。**Anthropic (Claude Code)** 与 **OpenAI (Codex)** 正引领企业级管控与底层安全加固的浪潮，重点解决部署合规性与系统资源消耗痛点；**Google (Gemini CLI)** 与 **OpenCode** 等竞争者则聚焦于 Agent 架构的健壮性，致力于解决多智能体协作中的死锁与权限失控问题。整体来看，社区关注焦点已从单纯的代码生成能力，转向**资源占用（SSD/内存）、安全边界、成本控制（缓存命中率）**等生产环境核心指标，MCP（Model Context Protocol）已成为生态扩展的事实标准。

## 2. 各工具活跃度对比

| 工具名称 | 版本动态 | 热点 Issues (讨论度) | PR 活跃度 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.196 (企业功能增强) | ⭐️⭐️⭐️⭐️<br>(#26224 冻结问题 146👍/124💬) | 🟢 低 (3个)<br>侧重文档与部署 | 企业管理、性能冻结、MCP集成 |
| **OpenAI Codex** | v0.142.4 / v0.143.0-alpha | ⭐️⭐️⭐️⭐️⭐️<br>(#28224 SSD损耗 407👍/108💬) | 🟢 高 (10个)<br>侧重安全与性能 | SSD寿命、安全加固、Undo回滚 |
| **Gemini CLI** | v0.51.0-nightly | ⭐️⭐️⭐️<br>(子智能体死锁与状态误报) | 🟢 高 (10个)<br>侧重架构修复 | 子智能体稳定性、权限沙箱、MCP协议 |
| **GitHub Copilot CLI**| v1.0.66-2 | ⭐️⭐️<br>(UI渲染与配置同步) | ⚪ 无更新 | 企业配置推送、终端UI体验、Windows兼容 |
| **Kimi Code CLI** | 无 | ⭐️ (移动端交互优化) | ⚪ 无更新 | 移动端体验、跨平台一致性 |
| **OpenCode** | 无 | ⭐️⭐️⭐️⭐️<br>(#29079 响应延迟 118💬) | 🟢 高 (10个)<br>侧重V2架构重构 | V2重构、Windows崩溃、模型兼容 |
| **Qwen Code** | v0.19.3-nightly | ⭐️⭐️⭐️<br>(OOM崩溃与成本控制) | 🟢 高 (10个)<br>侧重内存优化与移动端 | 内存管理、缓存命中率、移动端适配 |
| **DeepSeek TUI** | v0.8.66 (筹备中) | ⭐️⭐️⭐️⭐️<br>(缓存命中率与Token消耗) | 🟢 高 (10个)<br>侧重并发UI修复 | 成本控制、并发性能、缓存机制 |

## 3. 共同关注的功能方向

*   **系统资源与稳定性 (重中之重)**：
    *   **OpenAI Codex** 社区爆发式关注 SQLite 日志写入量导致 SSD 寿命受损 (#28224)；**Claude Code** 严重的应用冻结问题 (#26224) 持续发酵；**Qwen Code** 与 **DeepSeek TUI** 均在极力修复 OOM（内存溢出）与 UI 渲染卡顿。这表明本地资源消耗已成为制约 CLI 工具长时间运行的关键瓶颈。

*   **安全边界与权限管控**：
    *   **OpenAI Codex** 连续合并多个 PR 修复 Git 命令执行与 PowerShell 解析器信任漏洞；**Gemini CLI** 加固文件写入权限，防止 Agent 篡改配置文件；**DeepSeek TUI** 与 **Claude Code** 均在探讨 YOLO 模式与企业级权限管理的平衡。Agent 的自主性与系统安全之间的博弈成为共识。

*   **成本控制与缓存优化**：
    *   **DeepSeek TUI** 与 **Qwen Code** 社区对 Prompt 缓存命中率表现出极高的敏感度，用户强烈要求优化上下文加载策略以降低 Token 成本。**Anthropic** 也在处理缓存未命中导致的成本增加反馈。

*   **MCP 生态集成与稳定性**：
    *   **Claude Code**、**Gemini CLI**、**GitHub Copilot CLI** 均在解决 MCP 插件加载、OAuth 认证或通信协议兼容性问题。MCP 已成为连接外部工具的标准，但其稳定性（如进程堆积、认证失败）仍是各工具共同的痛点。

## 4. 差异化定位分析

*   **Claude Code (企业管家)**：定位最接近企业级生产环境工具。重点发力组织级模型管控、云架构集成，但对本地 GUI 性能（如冻结问题）存在短板。
*   **OpenAI Codex (系统级基建)**：技术下沉最深，关注点在操作系统层面的安全（Git配置隔离）与硬件寿命（SSD写入优化），适合对安全与底层控制有极高要求的场景。
*   **Gemini CLI (多智能体编排)**：专注于子智能体的调度与协作逻辑，虽然架构先进，但目前受困于状态同步与死锁问题，处于"架构领先但稳定性待完善"的阶段。
*   **GitHub Copilot CLI (生态连接器)**：强依赖 GitHub 生态，侧重于云端配置同步与 IDE 体验一致性，但在本地终端渲染和跨平台（Windows）适配上略显乏力。
*   **DeepSeek TUI / Qwen Code (性价比与轻量化)**：这两款工具对成本极其敏感，核心差异化在于对国产/开源模型的深度适配（如 GLM, DeepSeek V4），以及在有限资源下的性能调优（内存、缓存）。

## 5. 社区热度与成熟度

*   **高热度 + 高成熟度 (头部)**：**Claude Code** 和 **OpenAI Codex** 拥有最高的社区讨论热度（点赞数破百），Issue 级别已触及深层次的生产环境阻碍（硬件损耗、应用冻结），表明其用户基数大且使用场景深入，进入了"填坑"阶段。
*   **高活跃 + 快速迭代 (追赶者)**：**Gemini CLI**、**OpenCode**、**Qwen Code** 和 **DeepSeek TUI** 展现了极高的 PR 活跃度（单日 10 个左右 PR），正处于快速重构架构（如 OpenCode V2）和修复核心 Bug 的攻坚期，社区反馈响应迅速。
*   **低活跃 / 维护期**：**Kimi Code CLI** 今日动态极少，可能处于功能平稳期或暂无重大更新；**GitHub Copilot CLI** 虽有版本发布，但 PR 动态缺失，Issue 多为体验优化，显得相对平缓。

## 6. 值得关注的趋势信号

1.  **Agent 的"硬件税"浮出水面**：OpenAI Codex 的 SSD 磨损问题警示开发者，本地运行的 Agent 并非无成本。未来 CLI 工具可能需要引入更精细的 I/O 节流机制或更轻量的日志存储引擎。
2.  **"安全沙箱"成为标配功能**：从 Codex 的 Git 命令审批到 Gemini 的配置文件写保护，"信任但验证" 正在取代"自主执行"。开发者应准备好迎接更严格的默认安全策略，这可能需要改变现有的工作流习惯。
3.  **成本透明化需求激增**：用户对 Token 消耗的感知已从"大概多少"进化到"精确控制"（如缓存命中率监控）。对于 Multi-Agent 场景，缺乏成本可视化的工具将被企业用户抛弃。
4.  **Windows 平台仍是"难啃的骨头"**：Claude Code、OpenAI Codex、OpenCode、GitHub Copilot CLI 均报告了 Windows 特定的崩溃、沙箱弹窗或路径解析问题。这暗示 AI CLI 工具在跨平台底层系统交互上仍有大量技术债需要偿还。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-06-30)

**数据说明**：本次分析基于 `anthropics/skills` 官方仓库数据。由于提供的 PR 数据中“评论数”字段缺失，本报告综合了关联 Issue 的热度、PR 摘要中的引用情况（如 “10+ reproductions”）及功能重要性进行热度评估。

---

### 1. 热门 Skills 排行

以下是近期社区关注度最高、讨论最激烈的 Skills 动态：

1.  **[核心修复] `run_eval.py` 评估系统失效修复**
    *   **链接**：[PR #1298](https://github.com/anthropics/skills/pull/1298)
    *   **状态**：OPEN
    *   **功能**：修复了 `skill-creator` 中评估脚本的致命 Bug（此前所有 Skill 描述优化均因 Recall 为 0% 而无效），并修复了 Windows 流读取问题。
    *   **热度分析**：关联 [Issue #556](https://github.com/anthropics/skills/issues/556)（12条评论），被多次复现。这是 Skill 开发工具链的关键修复，直接影响社区开发者创建高质量 Skill 的能力。

2.  **[安全漏洞] 社区 Skills 冒充官方命名空间问题**
    *   **链接**：[Issue #492](https://github.com/anthropics/skills/issues/492)
    *   **状态**：OPEN
    *   **功能/问题**：指出社区 Skills 使用 `anthropic/` 命名空间导致用户误判为官方出品，引发信任边界安全风险。
    *   **热度分析**：评论数高达 32 条，为本期最热议题。社区强烈要求官方规范命名空间，建立信任机制。

3.  **[新增功能] `shodh-memory`：AI 代理持久化记忆**
    *   **链接**：[PR #154](https://github.com/anthropics/skills/pull/154)
    *   **状态**：OPEN
    *   **功能**：为 AI 代理提供跨对话的持久化上下文记忆，解决 Agent 长期记忆缺失痛点。
    *   **热度分析**：针对 AI Agent 的“记忆”短板，属于高价值功能扩展，具有极高的实用潜力。

4.  **[新增功能] `document-typography`：文档排版质量控制**
    *   **链接**：[PR #514](https://github.com/anthropics/skills/pull/514)
    *   **状态**：OPEN
    *   **功能**：解决 AI 生成文档中的孤行、寡行及编号错位问题。
    *   **热度分析**：解决了文档生成的“最后一公里”体验问题，属于高频刚需功能。

5.  **[新增功能] `skill-quality-analyzer` & `skill-security-analyzer`**
    *   **链接**：[PR #83](https://github.com/anthropics/skills/pull/83)
    *   **状态**：OPEN
    *   **功能**：新增两个元技能，分别用于评估 Skill 的质量与安全性。
    *   **热度分析**：响应了社区对 Skill 标准化和安全性的关注，属于生态基础设施建设。

6.  **[功能改进] 组织内 Skill 共享机制**
    *   **链接**：[Issue #228](https://github.com/anthropics/skills/issues/228)
    *   **状态**：OPEN
    *   **功能**：呼吁支持企业/团队内部直接共享 Skills，替代当前手动上传 `.skill` 文件的低效方式。
    *   **热度分析**：评论数 14 条，反映了 Skills 从个人工具向企业工作流渗透的趋势。

---

### 2. 社区需求趋势

从 Issues 讨论中提炼出以下核心需求方向：

*   **企业级协作与权限管理**：社区强烈呼吁支持组织内共享 Skills（Issue #228）及解决命名空间信任问题（Issue #492）。用户不再满足于个人沙盒，而是希望 Skills 能作为团队标准工具流转。
*   **跨平台兼容性**：Windows 平台的兼容性是重灾区（Issue #1061, #1099, #1050），涉及脚本执行、编码及管道处理。社区要求 Skill 开发工具链在 Windows 上有开箱即用的体验。
*   **工具链稳定性**：创建 Skills 的核心工具 `skill-creator` 频繁报错（Issue #556, #1169），导致无法验证和优化 Skill。社区急需稳定、可信赖的开发脚手架。
*   **生态互联互通**：出现了关于 AWS Bedrock 支持（Issue #29）、MCP 协议暴露（Issue #16）及 SharePoint 集成（Issue #1175）的诉求，表明 Skills 正在寻求与更广泛的云服务和工作流协议对接。

---

### 3. 高潜力待合并 Skills

以下 PR 均处于 OPEN 状态，但解决了关键痛点或提供了高价值功能，近期值得关注：

*   **PR #1298**：**修复 `run_eval.py` 全零召回问题**。
    *   理由：阻碍了 Skill 描述优化的核心功能，解决了大量用户反馈的 Bug，合并优先级极高。
*   **PR #361 / #539**：**YAML 解析预校验**。
    *   理由：修复特殊字符导致 Skill 描述被截断的隐性 Bug，提升了 Skill 定义文件的健壮性，属于低成本高收益的基础修复。
*   **PR #1050**：**Windows 子进程兼容性修复**。
    *   理由：解决了 Windows 平台下 `run_loop.py` 完全无法运行的问题，是大范围推广 Skills 开发的前置条件。

---

### 4. Skills 生态洞察

**当前社区最集中的诉求是：从“个人尝鲜”转向“工业化协作”，迫切需要解决 Skill 开发工具链的稳定性及企业级分发权限问题。**

---

# Claude Code 社区动态日报 (2026-06-30)

## 1. 今日速览
Claude Code 今日发布 **v2.1.196** 版本，重点增强了企业级管理功能，新增组织默认模型设置，并优化了会话命名体验。社区方面，性能问题引发高度关注，Issue #26224 报告的应用卡顿/冻结问题持续发酵，评论数已超 120 条。此外，Bash 工具调用异常及 AWS Bedrock 认证支持成为开发者讨论的热点。

## 2. 版本发布
**v2.1.196** (发布于 2026-06-30)
- **组织默认模型支持**：管理员可在组织控制台设置默认模型，用户未选择时将显示 "Org default" 或 "Role default"，强化了企业部署的一致性管理。
- **会话默认命名优化**：启动会话时自动生成可读性更强的默认名称，便于用户快速识别和管理历史记录。

链接: [Release v2.1.196](https://github.com/anthropics/claude-code/releases/tag/v2.1.196)

## 3. 社区热点 Issues (Top 10)

1.  **[URGENT] 应用频繁卡顿/冻结严重影响使用**
    - **编号**: #26224 | **点赞**: 146 | **评论**: 124
    - **详情**: 大量用户反馈 Claude Code 在处理大量提示词时会出现 5-20 分钟甚至更长时间的挂起、冻结现象，严重影响开发效率。该问题目前仍处于 Open 状态，急需官方修复。
    - **链接**: [Issue #26224](https://github.com/anthropics/claude-code/issues/26224)

2.  **[Feature] Chrome 扩展亟需支持 AWS Bedrock 认证**
    - **编号**: #16128 | **点赞**: 109 | **评论**: 26
    - **详情**: 企业用户强烈要求 Chrome 扩展支持 AWS Bedrock 认证，以便在现有云架构下无缝集成 Claude Code。这是企业级部署的关键需求。
    - **链接**: [Issue #16128](https://github.com/anthropics/claude-code/issues/16128)

3.  **[Bug] Bash 工具调用以纯文本形式输出而非执行**
    - **编号**: #63870 | **点赞**: 36 | **评论**: 23
    - **详情**: 严重的功能性 Bug，Claude Code 间歇性将 Bash 工具调用以原始 `<invoke>` 文本形式输出，导致命令无法执行，破坏了自动化工作流。
    - **链接**: [Issue #63870](https://github.com/anthropics/claude-code/issues/63870)

4.  **[Feature] 呼吁 Max Plan 个人用户开放 Microsoft 365 连接器**
    - **编号**: #20469 | **点赞**: 62 | **评论**: 58
    - **详情**: 高级个人用户指出其付费高于 Team 版，却无法使用 M365 连接器，认为权益分配不合理。该 Issue 已关闭，但引发了关于定价与功能权益的广泛讨论。
    - **链接**: [Issue #20469](https://github.com/anthropics/claude-code/issues/20469)

5.  **[Bug] Advisor 触发时 API 无响应错误**
    - **编号**: #69238 | **点赞**: 47 | **评论**: 30
    - **详情**: 当 Advisor 功能触发时，频繁出现 "No response from API" 错误，导致使用 Opus 4.8 等模型时体验中断。
    - **链接**: [Issue #69238](https://github.com/anthropics/claude-code/issues/69238)

6.  **[Bug] Windows 桌面版 Cowork 标签页缺失**
    - **编号**: #48407 | **点赞**: 16 | **评论**: 35
    - **详情**: Windows 11 平台 v1.2581.0 版本中，Cowork 功能的标签页未显示，导致用户无法使用协作特性。
    - **链接**: [Issue #48407](https://github.com/anthropics/claude-code/issues/48407)

7.  **[Bug] Opus 4.8 间歇性生成格式错误的工具调用**
    - **编号**: #67307 | **点赞**: 13 | **评论**: 4
    - **详情**: Opus 4.8 模型在生成工具调用时偶尔会丢失 `antml:` 前缀或混入杂乱 token，导致工具调用被渲染为纯文本而非执行。
    - **链接**: [Issue #67307](https://github.com/anthropics/claude-code/issues/67307)

8.  **[Bug] 无法禁用有问题的 Interactive Question Tool**
    - **编号**: #10258 | **点赞**: 5 | **评论**: 19
    - **详情**: 长期存在的问题，用户无法关闭或禁用 Interactive Question Tool，该工具的 Bug 经常阻塞工作流，缺乏用户控制权。
    - **链接**: [Issue #10258](https://github.com/anthropics/claude-code/issues/10258)

9.  **[Bug] 插件市场目录被清空导致插件加载全失败**
    - **编号**: #71948 | **点赞**: 0 | **评论**: 2
    - **详情**: 严重的扩展性故障。应用内插件加载器与 CLI 路径不一致，导致清空市场目录后无法重新克隆，致使所有插件和 MCP 服务器加载失败。
    - **链接**: [Issue #71948](https://github.com/anthropics/claude-code/issues/71948)

10. **[Feature] VS Code 扩展请求支持会话分支 (/fork)**
    - **编号**: #69272 | **点赞**: 1 | **评论**: 6
    - **详情**: CLI 已支持 `/fork` 进行会话分支，VS Code 扩展端尚不支持。用户希望在不同 IDE 环境间获得一致的功能体验。
    - **链接**: [Issue #69272](https://github.com/anthropics/claude-code/issues/69272)

## 4. 重要 PR 进展

过去 24 小时内仅更新了 3 个 PR，主要集中在文档与示例部署方面：

1.  **Add Claude Gateway on GCP example deployment assets**
    - **编号**: #72361 [CLOSED]
    - **内容**: 新增 Google Cloud Platform 上 Claude Gateway 的参考部署资产，配合官方文档提供开箱即用的 Terraform 配置。
    - **链接**: [PR #72361](https://github.com/anthropics/claude-code/pull/72361)

2.  **Gateway GCP example: Agent Platform rebrand and README cleanup**
    - **编号**: #72363 [CLOSED]
    - **内容**: 配合上述 PR 进行品牌重命名（Agent Platform）及文档清理，提升示例的可读性和规范性。
    - **链接**: [PR #72363](https://github.com/anthropics/claude-code/pull/72363)

3.  **docs(examples/hooks): note Bash tool_input exposes more fields**
    - **编号**: #72264 [OPEN]
    - **内容**: 文档修正，补充了 Bash 工具 `tool_input` 中除了 `command` 外还包含 `run_in_background`、`description` 等字段的说明，帮助开发者更好地编写 Hooks。
    - **链接**: [PR #72264](https://github.com/anthropics/claude-code/pull/72264)

## 5. 功能需求趋势

-   **企业级认证与集成**: 随着组织默认模型功能的发布，社区对 **AWS Bedrock 认证** (#16128) 及其他企业级连接器（如 M365 #20469）的需求呼声依然高涨，显示企业用户对合规与现有架构集成的重视。
-   **跨平台功能对等**: Windows 用户对 Cowork 功能缺失反应强烈，同时 VS Code 用户也要求获得与 CLI 一致的高级功能（如 `/fork`），表明用户希望在各平台获得无差异的体验。
-   **稳定性与控制权**: 大量反馈集中在应用卡顿、工具调用序列化失败以及无法禁用特定工具上。用户迫切希望提升核心 Agent 循环的稳定性，并获得更细粒度的功能开关控制。

## 6. 开发者关注点

-   **核心循环可靠性受损**: 开发者普遍关注 Bash 工具调用失效 (#63870) 和严重的应用冻结问题 (#26224)。这些 "Stop-the-world" 级别的 Bug 直接切断了开发工作流，是目前社区最大的痛点。
-   **扩展性生态脆弱**: 插件市场路径不一致导致的全量加载失败 (#71948) 暴露了扩展性架构的不稳定性，这对于依赖 MCP 和插件的进阶用户来说是致命打击。
-   **配置粒度不足**: 从无法禁用交互式工具 (#10258) 到 Windows Shell 强制使用 PowerShell (#72389)，开发者反馈指出 Claude Code 在环境适配和用户自定义配置方面仍有较大改进空间。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-06-30)

## 1. 今日速览
今日 OpenAI Codex 发布了 `rust-v0.142.4` 正式版与 `v0.143.0-alpha.31` 测试版，主要聚焦于底层维护。社区最关注的热点是 **SQLite 日志写入量过大导致 SSD 寿命受损** 的问题，尽管相关修复已合并，但部分用户反馈 macOS 上仍存在日志膨胀现象。此外，开发团队今日合并了多项关键安全更新，重点修复了 Git 命令执行、PowerShell 解析器信任机制以及 WebSocket 连接稳定性问题。

## 2. 版本发布
- **[rust-v0.142.4](https://github.com/openai/codex/releases/tag/rust-v0.142.4)**
  - **更新说明**：无面向用户的功能更新，主要为内部维护与 Chore 更新。
- **[rust-v0.143.0-alpha.31](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.31)**
  - **更新说明**：测试版本迭代，包含最新的安全加固与性能优化代码。

## 3. 社区热点 Issues (Top 10)

1.  **[Critical] SQLite 日志写入量巨大威胁 SSD 寿命** ([#28224](https://github.com/openai/codex/issues/28224))
    - **热度**：👍 407 | 💬 108
    - **简评**：社区反馈 Codex 的 SQLite 反馈日志年写入量可达 640TB，严重消耗 SSD 耐久度。作者指出虽然三个相关 PR 已合并修复了 85% 的问题，但该 Issue 仍是近期最受关注的性能与硬件安全问题。

2.  **[Feature] 请求恢复 "/undo" 命令功能** ([#9203](https://github.com/openai/codex/issues/9203))
    - **热度**：👍 307 | 💬 52
    - **简评**：用户强烈呼吁恢复 `/undo` 功能，以便在 Codex 误删文件或修改未提交代码时能够快速回滚，这是目前社区呼声最高的功能请求之一。

3.  **[Bug] 自定义模型配置错误** ([#30224](https://github.com/openai/codex/issues/30224))
    - **热度**：👍 20 | 💬 60
    - **简评**：使用特定 Header (`X-OpenAI-Internal-Codex-Responses-Lite`) 时触发 "Model not supported" 错误，影响部分高级用户的自定义模型配置。

4.  **[Bug] macOS 持续存在的 SQLite 日志膨胀问题** ([#29532](https://github.com/openai/codex/issues/29532))
    - **热度**：👍 7 | 💬 26
    - **简评**：作为 #28224 的后续，用户指出在升级到 `v0.142.0` 后，macOS 端的日志写入压力虽有缓解但依然存在，特别是 `trace` 日志仍产生大量数据。

5.  **[Bug] Windows 桌面端仅显示 "Something went wrong"** ([#29320](https://github.com/openai/codex/issues/29320))
    - **热度**：👍 1 | 💬 26
    - **简评**：Windows 更新后广泛出现的启动失败/白屏问题，导致用户无法正常使用 App。

6.  **[Bug] GPT-5.5 推理 Token 聚类导致性能下降** ([#30364](https://github.com/openai/codex/issues/30364))
    - **热度**：👍 29 | 💬 21
    - **简评**：技术分析类 Issue。用户发现 GPT-5.5 的推理输出 Token 经常卡在特定数值（如 516, 1034），怀疑模型推理过程被异常截断或限流，影响复杂任务质量。

7.  **[Bug] macOS Intel 版 Computer Use 插件不可用** ([#18404](https://github.com/openai/codex/issues/18404))
    - **热度**：👍 13 | 💬 23
    - **简评**：Intel Mac 用户反映 Computer Use 插件在设置中显示不可用，尽管 MCP Server 状态正常，属于平台兼容性遗留问题。

8.  **[Bug] Windows 沙箱 setup 弹窗干扰** ([#29200](https://github.com/openai/codex/issues/29200))
    - **热度**：👍 8 | 💬 20
    - **简评**：Windows 桌面版在执行 `apply_patch` 时频繁弹出沙箱设置错误对话框，严重影响用户体验。

9.  **[Bug] 本地开发任务触发生物安全误报** ([#30634](https://github.com/openai/codex/issues/30634))
    - **热度**：👍 0 | 💬 2
    - **简评**：今日新增 Issue。Codex Desktop 错误地将普通本地软件开发任务标记为生物安全风险并阻止，显示了安全过滤机制在特定语境下的过度敏感。

10. **[Bug] MCP Server 进程堆积问题** ([#21984](https://github.com/openai/codex/issues/21984))
    - **热度**：👍 4 | 💬 10
    - **简评**：CLI 会话启动时会急切加载所有配置的 MCP Server，导致长时间运行的会话积累大量无用的浏览器/工具进程，占用系统资源。

## 4. 重要 PR 进展 (Top 10)

1.  **[Performance] 减少日志体积，避免 SSD 写入压力** ([#30651](https://github.com/openai/codex/pull/30651))
    - **内容**：修改日志逻辑，不再将完整的 Responses WebSocket 请求体存入 `logs_2.sqlite`，仅记录字节长度。此举直接响应了 Issue #28224，旨在防止数据库和 WAL 文件无限增长。

2.  **[Security] Git Worktree Helpers 执行闭源安全加固** ([#27914](https://github.com/openai/codex/pull/27914))
    - **内容**：修复安全漏洞 PSEC-4394。防止恶意的 Git 仓库配置在 worktree 操作期间执行未授权的代码，确保在不可信仓库中的操作安全。

3.  **[Security] 强制审批通用 Git 命令** ([#28714](https://github.com/openai/codex/pull/28714))
    - **内容**：修正了仅基于 `argv` 判断 Git 命令只读性的不安全逻辑，防止通过配置或环境变量篡改将 `git status` 等命令变为执行脚本的载体。

4.  **[Stability] WebSocket 连接存活检测与断开处理** ([#30643](https://github.com/openai/codex/pull/30643))
    - **内容**：为 Rendezvous WebSocket 增加了 60 秒超时检测机制，并优化了断开原因的分类，解决了连接假死和背压掩盖超时的问题。

5.  **[UX] 允许在 MCP 启动期间进行 Review 操作** ([#30509](https://github.com/openai/codex/pull/30509))
    - **内容**：解耦了 MCP 初始化与前台 UI 状态。此前用户必须等待 MCP Server 完全启动才能进行 Review 操作，现在允许后台启动，提升了交互流畅度。

6.  **[Bugfix] 防止 Tool Search 投毒导致会话损坏** ([#30618](https://github.com/openai/codex/pull/30618))
    - **内容**：修复了一个严重 Bug —— 恶意构造的 `tool_search_call` 参数会损坏会话状态，导致后续所有恢复操作失败。增加了校验逻辑以防止持久化错误数据。

7.  **[Security] Windows 仅信任系统 PowerShell 解析器** ([#30628](https://github.com/openai/codex/pull/30628))
    - **内容**：安全加固。防止恶意仓库提供伪造的 `pwsh.exe` 来绕过安全检查，确保 Windows 下的 AST 解析仅使用系统可信路径。

8.  **[Feature] App Server WebSocket 增加令牌认证** ([#30315](https://github.com/openai/codex/pull/30315))
    - **内容**：为 app-server 的 WebSocket 监听器增加了生成 URL-safe Token 的认证机制，增强了本地服务端点的安全性。

9.  **[MCP] 接受 MCP 通知的空 HTTP 响应** ([#30642](https://github.com/openai/codex/pull/30642))
    - **内容**：修复了 MCP 协议兼容性问题，当发送 JSON-RPC 通知时，允许服务端返回空响应体，避免因协议解析失败导致的通信中断。

10. **[Security] 隔离 Marketplace Git 传输配置** ([#28760](https://github.com/openai/codex/pull/28760))
    - **内容**：防止 Codex 在不可信仓库中执行 Marketplace 操作（如 `git ls-remote`）时继承该仓库的恶意 Git 配置，隔离了潜在攻击面。

## 5. 功能需求趋势
*   **数据安全与资源占用**：社区对客户端本地产生的日志文件体积和 SSD 写入损耗表现出极高的敏感度，要求优化本地数据库写入策略。
*   **操作回滚能力**：`/undo` 功能依然是用户在开发流程中防止 AI 误操作的最后防线，需求强烈。
*   **模型推理透明度**：用户开始关注 GPT-5.5 等新模型的 Token 消耗分布与推理截断机制，期望模型行为更加可预测。
*   **后台任务管理**：随着 MCP（Model Context Protocol）的深度集成，用户希望改进后台进程的生命周期管理，避免资源泄露。

## 6. 开发者关注点
*   **SSD 写入压力**：多位开发者报告本地 Codex 数据库文件迅速增长，对硬件寿命表示担忧，建议监控本地 `logs_2.sqlite` 文件变化。
*   **安全策略误伤**：部分开发者在进行普通本地开发时遇到 Safety Check 阻断，提示安全过滤规则可能过于严格或缺乏上下文理解。
*   **Windows 平台稳定性**：Windows 端的沙箱机制、应用启动和崩溃问题仍是反馈的高发区，建议 Windows 用户暂时关注 CLI 版本的稳定性。
*   **Git 集成安全性**：近期多个 PR 显示团队正在重构 Git 相关的安全边界，开发者若遇到 Git 命令权限变更，可能与这些安全加固有关。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-30)

## 1. 今日速览
Gemini CLI 今日发布了 v0.51.0-nightly 版本。社区关注焦点集中在智能体的稳定性与安全性上，包括子智能体因 MAX_TURNS 导致的错误报告掩盖问题、Auto Memory 的隐私日志风险修复，以及防止智能体执行破坏性操作的安全加固。此外，多项关于推理循环限制和思维链泄漏的修复 PR 值得开发者关注。

## 2. 版本发布
- **v0.51.0-nightly.20260630.gae0a3aa7b**
  - **更新内容**：常规 nightly 版本构建，包含最新的代码提交。
  - **链接**：[Release v0.51.0-nightly.20260630](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260630.gae0a3aa7b)

## 3. 社区热点 Issues

1.  **[#22323] Subagent recovery after MAX_TURNS is reported as GOAL success**
    - **重要性**：P1 级别 Bug。当子智能体达到最大交互轮数（MAX_TURNS）限制时，错误地报告 "GOAL success"，导致中断被掩盖，严重影响任务执行的可靠性。
    - **社区反应**：评论数 8 条，讨论热烈，维护者标记为 `status/need-retesting`。
    - **链接**：[Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2.  **[#21409] Generalist agent hangs**
    - **重要性**：P1 级别 Bug。通用智能体在执行简单任务（如创建文件夹）时会无限挂起，导致 CLI 不可用。
    - **社区反应**：获 8 个点赞，多位用户确认存在此问题。
    - **链接**：[Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3.  **[#21968] Gemini does not use skills and sub-agents enough**
    - **重要性**：P2 级别功能缺陷。智能体很少主动调用用户定义的自定义 skills 和 sub-agents，导致个性化配置无效。
    - **社区反应**：用户反馈即使明确指示，智能体仍经常忽略相关工具。
    - **链接**：[Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

4.  **[#26525] Add deterministic redaction and reduce Auto Memory logging**
    - **重要性**：安全性问题。Auto Memory 在将日志发送给模型前未能有效脱敏，存在泄露 secrets 的风险。
    - **社区反应**：维护者已介入讨论解决方案。
    - **链接**：[Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

5.  **[#25166] Shell command execution gets stuck with "Waiting input"**
    - **重要性**：P1 级别 Bug。Shell 命令执行完毕后，CLI 仍显示 "Awaiting user input" 并挂起，影响核心交互流程。
    - **社区反应**：获 3 个点赞，影响日常开发效率。
    - **链接**：[Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

6.  **[#24246] Gemini CLI encounters 400 error with > 128 tools**
    - **重要性**：扩展性瓶颈。当工具数量超过 128 个时，CLI 报错 400，限制了大型项目中的工具集成能力。
    - **社区反应**：开发者希望智能体能更智能地管理工具作用域。
    - **链接**：[Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

7.  **[#21983] browser subagent fails in wayland**
    - **重要性**：平台兼容性问题。Browser subagent 在 Wayland 环境下运行失败，影响 Linux 桌面用户体验。
    - **社区反应**：提供了详细的错误日志。
    - **链接**：[Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

8.  **[#22672] Agent should stop/discourage destructive behavior**
    - **重要性**：安全性增强。智能体在执行 git reset 或数据库修改等危险操作时缺乏保护机制。
    - **社区反应**：建议模型应优先选择更安全的替代方案。
    - **链接**：[Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

9.  **[#22267] [BUG] Browser Agent ignores settings.json overrides**
    - **重要性**：配置系统 Bug。Browser Agent 忽略 settings.json 中的配置覆盖（如 maxTurns），导致行为不可控。
    - **链接**：[Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)

10. **[#26522] Stop Auto Memory from retrying low-signal sessions indefinitely**
    - **重要性**：性能问题。Auto Memory 机制在遇到低信号会话时会无限重试，造成资源浪费。
    - **链接**：[Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

## 4. 重要 PR 进展

1.  **[#28215] Harden file-write scope: stop sandbox/auto-accept writes to .gemini and .gitconfig**
    - **内容**：**安全性关键修复**。防止智能体在沙箱或自动接受模式下写入 `.gemini` 配置目录和 `.gitconfig`，堵住了通过提示词注入提升权限的漏洞。
    - **链接**：[PR #28215](https://github.com/google-gemini/gemini-cli/pull/28215)

2.  **[#28089] feat(core): implement MCP elicitation (form + url) capability**
    - **内容**：新功能。实现了 MCP 协议的 elicitation 能力（支持表单和 URL 模式），增强了客户端与服务端的交互能力。
    - **链接**：[PR #28089](https://github.com/google-gemini/gemini-cli/pull/28089)

3.  **[#27971] fix(core): strip thoughts from scrubbed history turns and resolve thought leakage**
    - **内容**：可靠性修复。解决了 "思维泄漏" 问题，清理历史记录中的模型内心独白，防止模型在后续轮次中混淆或陷入无限循环。
    - **链接**：[PR #27971](https://github.com/google-gemini/gemini-cli/pull/27971)

4.  **[#28164] fix(core): limit recursive reasoning turns per single user request**
    - **内容**：资源保护。引入了每个用户请求 15 轮递归推理的限制，防止无限循环耗尽 CPU 或 API 配额。
    - **链接**：[PR #28164](https://github.com/google-gemini/gemini-cli/pull/28164)

5.  **[#28096] fix(core): drop late tool calls after SIGINT cancellation**
    - **内容**：稳定性修复。修复了用户按 Ctrl+C 取消后，工具调用仍可能在后台执行并提交结果的问题。
    - **链接**：[PR #28096](https://github.com/google-gemini/gemini-cli/pull/28096)

6.  **[#28053] fix(core-tools): resolve defensive path resolution for at-reference files**
    - **内容**：Bug 修复。修复了文件系统工具处理带有 `@` 前缀路径时的 "File not found" 错误。
    - **链接**：[PR #28053](https://github.com/google-gemini/gemini-cli/pull/28053)

7.  **[#28202] fix: forward SIGINT/SIGTERM/SIGQUIT to child process during relaunch**
    - **内容**：进程管理优化。修复了 CLI 重启时信号未转发给子进程导致僵尸进程的问题。
    - **链接**：[PR #28202](https://github.com/google-gemini/gemini-cli/pull/28202)

8.  **[#28100] fix(vscode-ide-companion): register Disposables leaked by comma operators**
    - **内容**：VS Code 插件内存泄漏修复。修复了 `activate()` 中因逗号表达式导致的 Disposable 对象未注册问题。
    - **链接**：[PR #28100](https://github.com/google-gemini/gemini-cli/pull/28100)

9.  **[#28163] feat(caretaker): add triage worker core foundation (part 1/2)**
    - **内容**：基础设施。引入了 Caretaker Agent 的 Triage Worker 基础模块，用于自动化问题分类。
    - **链接**：[PR #28163](https://github.com/google-gemini/gemini-cli/pull/28163)

10. **[#28099] fix(cli): show descriptive sandbox label in footer**
    - **内容**：UI 改进。修复了底部状态栏显示硬编码字符串 "current process" 而非实际沙箱名称的问题。
    - **链接**：[PR #28099](https://github.com/google-gemini/gemini-cli/pull/28099)

## 5. 功能需求趋势

-   **智能体稳定性与可控性**：社区强烈要求解决智能体挂起、无限循环以及错误报告不准确的问题（如 MAX_TURNS 误报成功），反映了在生产环境中对鲁棒性的迫切需求。
-   **安全与权限控制**：近期多个 Issue 和 PR 关注沙箱逃逸、敏感数据脱敏以及防止破坏性操作，显示出项目正加强安全边界以适应企业级应用场景。
-   **工具链与扩展性**：对 MCP（Model Context Protocol）协议的支持深化（如 Elicitation 功能）以及对工具数量限制的讨论，表明项目正致力于打通更广泛的开发者工具生态。

## 6. 开发者关注点

-   **任务执行死锁与挂起**：多位开发者反馈 CLI 在执行 Shell 命令或调用子智能体时频繁挂起，甚至需要强制终止进程，这是目前最影响体验的痛点。
-   **配置与工具调用的"失忆"**：开发者抱怨智能体经常忽略 `settings.json` 中的配置或忘记使用自定义 Skills，导致需要频繁人工干预或显式指令。
-   **资源消耗与限制**：Auto Memory 的无限重试和递归推理缺乏限制曾导致资源浪费，社区对引入限制机制（如 PR #28164）表示欢迎，但也希望限制值可配置化。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-06-30)

## 1. 今日速览
GitHub Copilot CLI 发布了 **v1.0.66-2** 版本，重点优化了插件生态的兼容性，允许不同插件间的同名技能共存，并增强了对 LSP 日志的查看能力。社区讨论焦点集中在终端 UI 渲染体验（特别是 Alt-screen 模式）以及 Windows 平台的兼容性问题上。此外，企业级配置管理与本地环境变量同步的需求依然是开发者关注的高频话题。

## 2. 版本发布
**版本号**: v1.0.66-2

**主要更新内容**:
- **插件兼容性**: 允许来自不同插件的同名技能共存，解决了命名冲突问题。
- **集成能力**: 集成功能现在可以读取和写入 CLI 用户设置。
- **调试增强**: 支持在 `/lsp logs` 中查看 LSP 服务器日志，并可通过 `read_agent` 读取。
- **体验优化**: 在 GitHub 仓库中检测到缺失 `gh` CLI 时会提示安装。
- **渲染改进**: 添加了 GitHub 附件变体以优化提示渲染。

## 3. 社区热点 Issues

以下是今日最值得关注的 10 个 Issue：

1.  **[#1799] [OPEN] 如何关闭 Alt-screen 视图？**
    - **重要性**: 社区活跃度高（👍7, 评论10），反映了新版本 UI 变更对用户习惯的冲击。
    - **摘要**: 用户抱怨近期发布的 alt-screen 功能导致诸多问题，希望切回原有模式。
    - **链接**: [github/copilot-cli Issue #1799](https://github.com/github/copilot-cli/issues/1799)

2.  **[#3909] [OPEN] 功能请求：企业/组织级服务器托管设置**
    - **重要性**: 企业级功能的强需求，涉及组织对开发者本地 CLI 的管控能力。
    - **摘要**: Org 管理员目前无法向本地 CLI 推送配置（特别是环境变量），希望能扩展云端管理能力至本地环境。
    - **链接**: [github/copilot-cli/issues/3909](https://github.com/github/copilot-cli/issues/3909)

3.  **[#3948] [OPEN] web_fetch 工具调用失败**
    - **重要性**: 核心网络工具功能受阻，影响 Agent 联网获取信息的能力。
    - **摘要**: 用户反馈在使用 `web_fetch` 时始终遇到 `TypeError: fetch failed`，且排除了代理设置问题。
    - **链接**: [github/copilot-cli/issues/3948](https://github.com/github/copilot-cli/issues/3948)

4.  **[#3972] [OPEN] UI 界面显示鼠标移动轨迹字符流**
    - **重要性**: 严重的 UI 渲染 Bug，直接影响工具可用性。
    - **摘要**: 在首次加载时，UI 经常显示代表鼠标移动的连续字符流，导致界面混乱无法正常使用。
    - **链接**: [github/copilot-cli/issues/3972](https://github.com/github/copilot-cli/issues/3972)

5.  **[#3958] [OPEN] Windows v1.0.66 启动 stdio MCP 服务器失败**
    - **重要性**: Windows 平台的回归 Bug，阻断了特定配置用户的 MCP 功能使用。
    - **摘要**: 新版本在 Windows 上无法启动命令为 `.bat/.cmd` 且带参数的 stdio MCP 服务器。
    - **链接**: [github/copilot-cli/issues/3958](https://github.com/github/copilot-cli/issues/3958)

6.  **[#2364] [CLOSED] [严重] Agent 会话无限期运行且无法停止**
    - **重要性**: 涉及 Agent 会话管理的死循环问题，属于严重功能性 Bug（目前已关闭）。
    - **摘要**: 组织仓库中的 Copilot Coding Agent 会话可能卡死，仅显示初始计划而无提交，无法停止或回复。
    - **链接**: [github/copilot-cli/issues/2364](https://github.com/github/copilot-cli/issues/2364)

7.  **[#3957] [CLOSED] MBP 上无法使用触控板滚动历史记录**
    - **重要性**: 影响 macOS 用户的交互体验（👍5）。
    - **摘要**: 在 MBP 上使用触控板滚动时，会选中之前的提示词而不是滚动窗口。
    - **链接**: [github/copilot-cli/issues/3957](https://github.com/github/copilot-cli/issues/3957)

8.  **[#3936] [OPEN] Ctrl+G 应在 $EDITOR 中展开粘贴标记**
    - **重要性**: 工作流体验优化，涉及与 Claude Code 的功能对齐。
    - **摘要**: 当启用 `compactPaste` 时，在编辑器中编辑提示词应将 `[Paste #N]` 标记展开为实际文本，而非保留字面标记。
    - **链接**: [github/copilot-cli/issues/3936](https://github.com/github/copilot-cli/issues/3936)

9.  **[#3971] [OPEN] 功能请求：仓库类型会话的完整文件树浏览器**
    - **重要性**: 工作区管理体验增强。
    - **摘要**: 希望在 repository-backed session（worktree）中也能像 folder session 一样拥有侧边栏文件树浏览器，而不仅仅是 Git Changes 视图。
    - **链接**: [github/copilot-cli/issues/3971](https://github.com/github/copilot-cli/issues/3971)

10. **[#3904] [OPEN] CloudQueryError 导致 /chronicle standup 失败**
    - **重要性**: 涉及云同步与本地回退机制的数据一致性问题。
    - **摘要**: 当云端存储出错时，尽管有本地数据，`/chronicle standup` 命令仍因时间戳解析问题失败。
    - **链接**: [github/copilot-cli/issues/3904](https://github.com/github/copilot-cli/issues/3904)

## 4. 重要 PR 进展
过去 24 小时内暂无更新的 Pull Requests。

## 5. 功能需求趋势
根据近期 Issues 分析，社区功能需求呈现以下趋势：
- **会话管理精细化**: 用户希望对会话有更强的掌控力，包括会话的标签化管理（#3970）、状态进度指示（#3969）、以及明确的保留/过期策略显示（#3963）。
- **企业级管控增强**: 随着企业采用率提高，对本地 CLI 实例进行集中配置推送（特别是环境变量和安全策略）的需求日益强烈（#3909）。
- **IDE 与终端体验对齐**: 开发者希望 CLI 中的体验能对标 VS Code 或其他 IDE，例如在 Worktree 模式下查看完整文件树（#3971），以及在编辑器中正确处理粘贴内容（#3936）。

## 6. 开发者关注点
- **跨平台兼容性**: Windows 平台问题频发，包括 MCP 启动失败（#3958）、Git 符号链接支持（#2286）以及 OAuth 端口占用问题（#3973），显示出 Windows 端的测试覆盖或环境适配存在短板。
- **TUI 渲染稳定性**: 终端 UI 渲染问题仍是反馈重灾区，包括 Alt-screen 模式的切换困扰（#1799）、鼠标移动字符乱码（#3972）以及删除文本后的“幽灵”字符残留（#3959）。
- **网络与连接**: 网络请求稳定性依然堪忧，`web_fetch` 工具的失败反馈（#3948）提示底层网络库或代理处理可能存在边缘情况未覆盖。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-06-30)

## 1. 今日速览
Kimi Code CLI 社区今日整体较为平静，过去 24 小时内无新版本发布或代码合并动态。社区焦点集中在用户交互体验的细节优化上，特别是关于移动端与桌面端 Enter 键行为逻辑的讨论，反映出用户对跨平台输入体验一致性有较高期待。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues
过去 24 小时内仅有 1 条 Issue 更新，具体如下：

*   **[OPEN] Issue #2479 移动端与桌面端 Enter 键交互逻辑存在使用痛点**
    *   **链接**: [MoonshotAI/kimi-cli Issue #2479](https://github.com/MoonshotAI/kimi-cli/issues/2479)
    *   **主要内容**：作者 @Dealazer 指出当前的键盘交互逻辑在不同平台存在不便。
        *   **移动端**：按下 Enter 键直接发送 Prompt，导致无法方便地输入多行文本，严重影响移动设备的实用性。
        *   **桌面端**：需要按 Shift + Enter 才能换行，与常规习惯略有出入（作者暗示可能希望有更直观的换行方式或配置选项）。
    *   **重要性分析**：这是一个典型的 UX（用户体验）增强请求。CLI 工具在移动端的使用场景日益增多，输入法与 CLI 的交互逻辑直接决定了产品的可用性。该 Issue 指出了阻碍移动端使用的关键障碍，值得开发团队关注。

## 4. 重要 PR 进展
过去 24 小时内无 Pull Request 更新。

## 5. 功能需求趋势
根据今日 Issue 反馈，社区关注点如下：

*   **跨平台交互一致性**：用户期望在移动设备（如手机/平板）和桌面端获得一致且符合平台习惯的输入体验。特别是针对移动端文本编辑能力的增强，如支持多行输入或自定义发送快捷键。

## 6. 开发者关注点
*   **移动端可用性痛点**：开发者反馈当前的 Enter 键逻辑使得在手机上进行多行文本编辑变得“几乎不可能”，这成为了限制 Kimi Code CLI 在移动场景下普及的主要阻碍。
*   **快捷键映射灵活性**：桌面端默认的 Shift+Enter 换行逻辑被部分用户认为不够直观，建议未来版本考虑提供快捷键自定义功能，以适应不同开发者的肌肉记忆。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-06-30)

## 1. 今日速览
今日 OpenCode 社区活跃度较高，重点关注 v1.17.10 版本在 Windows 平台上的严重崩溃问题以及部分模型响应延迟的性能瓶颈。核心开发团队正大力推进 V2 架构的重构工作，包括后台作业服务和提示词工具链的对齐。此外，关于自定义模型提供商的配置兼容性和 Token 消耗异常问题引发了较多用户讨论。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues

1.  **[#29079](https://github.com/anomalyco/opencode/issues/29079) GPT Models takes too long to respond**
    *   **摘要**：用户报告使用 GPT-5.4 等模型时，简单指令偶尔响应时间从几秒延长至数分钟，严重影响开发效率。
    *   **重要性**：目前评论数最高（118条）的 Issue，表明模型响应延迟是当前最普遍的痛点，可能与后端负载或路由策略有关。

2.  **[#33742](https://github.com/anomalyco/opencode/issues/33742) OpenCode v1.17.10 crashes with Bun segmentation fault on Windows**
    *   **摘要**：v1.17.10 在 Windows 上触发 Bun 原生段错误导致崩溃，回退至 v1.17.9 后稳定。
    *   **重要性**：严重的回归问题，直接阻断了 Windows 用户的升级路径，需立即关注修复。

3.  **[#5674](https://github.com/anomalyco/opencode/issues/5674) Custom OpenAI-compatible provider options not being passed to API calls**
    *   **摘要**：自定义 OpenAI 兼容提供商的配置（如 baseURL、apiKey）未能正确传递给 API 调用。
    *   **重要性**：长期存在的问题，影响 OpenCode 作为聚合客户端对接私有/定制模型的能力，是扩展性的关键 Bug。

4.  **[#34537](https://github.com/anomalyco/opencode/issues/34537) 异常消耗我的token**
    *   **摘要**：用户报告在一夜之间因编辑失败导致 Token 消耗了 80%，涉及潜在的死循环或未捕获的错误重试。
    *   **重要性**：直接关系到用户成本，"天塌了"式的反馈表明此类 Bug 对用户信任度打击极大。

5.  **[#33696](https://github.com/anomalyco/opencode/issues/33696) GitHub Copilot provider broken**
    *   **摘要**：即使重新授权，GitHub Copilot 提供商仍无法发现模型，导致功能不可用。
    *   **重要性**：Copilot 是主流编码辅助工具，其集成故障影响面较广。

6.  **[#33998](https://github.com/anomalyco/opencode/issues/33998) [OpenCode Go] GLM-5.2 prompt cache randomly drops**
    *   **摘要**：GLM-5.2 通过 opencode-go 网关调用时，提示词缓存经常意外丢失，导致成本激增。
    *   **重要性**：涉及成本优化和特定模型网关的稳定性，对于依赖长上下文的用户至关重要。

7.  **[#29204](https://github.com/anomalyco/opencode/issues/29204) Memory leak in server mode**
    *   **摘要**：服务器模式下，每个会话都会向 Effect-ts 内部发射器添加无界 EventTarget 监听器，导致内存泄漏。
    *   **重要性**：影响长期运行的服务稳定性，是 Server 模式部署的关键障碍。

8.  **[#34543](https://github.com/anomalyco/opencode/issues/34543) websearch 连接失败**
    *   **摘要**：DeepSeek 原生适配 Claude Code 的 websearch 调用失败，提示 Schema 错误。
    *   **重要性**：工具链集成问题，影响 Agent 联网搜索能力。

9.  **[#34526](https://github.com/anomalyco/opencode/issues/34526) V2 MCP OAuth: token refresh race across locations/processes**
    *   **摘要**：V2 架构中，跨进程/位置的 OAuth Token 刷新存在竞态条件风险。
    *   **重要性**：涉及 V2 核心认证机制的并发安全性，属于架构层面的技术债。

10. **[#34553](https://github.com/anomalyco/opencode/issues/34553) OpenCode Desktop plugin runtime makes cwd-based project detection unreliable**
    *   **摘要**：Desktop 版插件运行环境与 CLI 不一致，导致基于 CWD 的项目检测和 Shell 环境变量读取失败。
    *   **重要性**：破坏了 Desktop 与 CLI 的行为一致性，增加了插件开发者的适配成本。

## 4. 重要 PR 进展

1.  **[#34559](https://github.com/anomalyco/opencode/pull/34559) refactor(core): replace background job service**
    *   **内容**：重构后台作业服务，将进程本地的 API 替换为通用的 Job 服务，并将通知/渲染所有权移至工具层。
    *   **进展**：已合并。这是 V2 架构演进的重要一步，解耦了作业管理与核心逻辑。

2.  **[#34557](https://github.com/anomalyco/opencode/pull/34557) fix(core): align v2 prompt tool names**
    *   **内容**：对齐 V2 会话运行器的提示词工具名称（如将 Bash 改为 shell 等），移除 GPT 提示词中不存在的 multi_tool_use 指令。
    *   **进展**：已合并。修复了 V2 提示词与实际工具定义的不匹配问题。

3.  **[#34558](https://github.com/anomalyco/opencode/issues/34558) fix(core): gate v2 edit tools by model**
    *   **内容**：根据模型 ID 动态加载 V2 编辑工具，Patch 导向的 GPT 模型使用 `apply_patch`，其他模型使用 `edit/write`。
    *   **进展**：Open。确保不同模型使用最适合的编辑工具策略。

4.  **[#33523](https://github.com/anomalyco/opencode/pull/33523) feat: Add LLM and session observability hooks**
    *   **内容**：向插件 SDK 添加四个可观测性钩子，允许插件监控 LLM 流、工具执行和 Agent 运行状态。
    *   **进展**：Open。将极大增强生态系统的可观测性和调试能力。

5.  **[#34555](https://github.com/anomalyco/opencode/pull/34555) fix(provider): forward agent temperature for config-defined custom models**
    *   **内容**：修复配置定义的自定义模型在缺少 `capabilities.temperature` 字段时默认为 false，导致 Agent temperature 被丢弃的问题。
    *   **进展**：Open。直接修复了 Issue #34554，解决了自定义模型配置的行为异常。

6.  **[#34204](https://github.com/anomalyco/opencode/pull/34204) feat(tui): collapsible user and assistant messages**
    *   **内容**：在 TUI 会话视图中增加点击折叠用户和助手消息的功能。
    *   **进展**：Open。UI/UX 改进，有助于管理长对话的屏幕空间。

7.  **[#34519](https://github.com/anomalyco/opencode/pull/34519) refactor(opencode): keep plugin pty environment route local**
    *   **内容**：将 PluginPtyEnvironment.layer 限制为显式的路由本地 PTY 环境例外，移除冗余的 HTTP 路由提供者。
    *   **进展**：已合并。优化了插件环境的隔离性和架构清晰度。

8.  **[#34552](https://github.com/anomalyco/opencode/pull/34552) fix(core): respect OPENCODE_LOG_LEVEL in the stderr logger**
    *   **内容**：修复 stderrLogger 忽略 `OPENCODE_LOG_LEVEL` 环境变量的问题，增加日志级别检查。
    *   **进展**：Open。改善调试体验。

9.  **[#34352](https://github.com/anomalyco/opencode/pull/34352) fix(app): register export logs globally**
    *   **内容**：将“导出日志”功能移至 Desktop 全局命令注册，避免菜单项重复处理逻辑。
    *   **进展**：Open。修复了 Desktop 应用层面的功能入口问题。

10. **[#34547](https://github.com/anomalyco/opencode/pull/34547) fix(ui): prevent tool status blank frame**
    *   **内容**：修复工具状态切换时的空白帧闪烁问题，优化动画过渡逻辑。
    *   **进展**：已合并。提升 UI 流畅度。

## 5. 功能需求趋势

*   **模型兼容性与配置**：社区对 OpenAI 兼容提供商、自定义模型配置的支持需求强烈，希望 OpenCode 能作为统一的 AI 编码网关。
*   **V2 架构稳定性**：随着 V2 的推进，OAuth 并发、工具调用对齐、环境变量传递等底层问题逐渐暴露，成为近期修复的重点。
*   **成本控制与透明度**：Token 消耗异常和 Prompt Cache 失效问题备受关注，用户急需更稳定的上下文缓存机制来控制成本。
*   **平台一致性**：Windows 平台的稳定性以及 Desktop 与 CLI 环境的一致性是开发者反复提及的问题。

## 6. 开发者关注点

*   **Windows 平台崩溃**：v1.17.10 的 Bun 段错误崩溃是当前最紧急的阻断性问题，开发者呼吁尽快修复或撤回更新。
*   **响应延迟**：GPT 模型的长尾延迟问题严重影响交互体验，开发者怀疑是后端路由或负载均衡问题。
*   **插件环境隔离**：开发者希望 Desktop 和 CLI 的插件运行环境保持一致，特别是 `cwd`、环境变量和模块加载机制。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-06-30)

## 1. 今日速览
今日 Qwen Code 发布了 `v0.19.3-nightly` 版本，重点更新了 Daemon 文档。社区关注焦点集中在**系统稳定性与内存管理**（修复 OOM 崩溃、API 流超时）以及**生态兼容性**（GLM 模型输出解析、Anthropic 缓存优化）。此外，针对移动端 Web Shell 的适配和 CLI 交互体验的改进也是本次更新的亮点。

## 2. 版本发布
- **v0.19.3-nightly.20260630.e00fe6a27**
  - 主要更新了 Daemon 相关文档，涵盖了近期 PR 的变更说明。

## 3. 社区热点 Issues (Top 10)

1.  **[P2] MCP 安装导致任务异常闪退 (OOM)** [#6004](https://github.com/QwenLM/qwen-code/issues/6004)
    - **摘要**：用户在安装 MCP 时触发 GC 异常导致程序直接闪退，日志显示内存占用极高。该问题严重影响插件扩展的稳定性，社区反馈活跃。

2.  **[P2] 升级后频繁出现 API 流超时** [#5975](https://github.com/QwenLM/qwen-code/issues/5975)
    - **摘要**：升级至 v0.19.3 后，用户报告在模型思考后无输出，随后报错 "No stream activity for 120000ms"。这是一个影响正常使用的关键 Bug。

3.  **[P2] GLM-5.2 模型输出泄露 Thinking 标签** [#6007](https://github.com/QwenLM/qwen-code/issues/6007)
    - **摘要**：使用 OpenAI 兼容协议对接 GLM-5.2 时，思维链内容被当作普通文本输出，导致显示混乱。这反映了社区对不同模型协议兼容性的迫切需求。

4.  **[P2] Anthropic Provider 缓存未命中导致成本增加** [#5942](https://github.com/QwenLM/qwen-code/issues/5942)
    - **摘要**：技术深度较高的 Issue，指出 Qwen Code 在处理 Anthropic 协议时，由于前缀不一致导致 Prompt 缓存失效，直接增加了 API 调用成本。

5.  **[P2] 支持可配置的对话压缩模型** [#5956](https://github.com/QwenLM/qwen-code/issues/5956)
    - **摘要**：建议允许用户指定一个“便宜”的模型专门用于处理历史对话压缩，避免主模型消耗自身的上下文窗口处理非核心任务，兼具成本与性能考量。

6.  **[P1] Subagent 在退出 Plan Mode 后仍卡在计划模式** [#6036](https://github.com/QwenLM/qwen-code/issues/6036)
    - **摘要**：核心调度逻辑 Bug，导致子代理无法正常执行工具，影响自动化任务的完整性。

7.  **[P2] exit_plan_mode 绕过用户审批机制** [#6034](https://github.com/QwenLM/qwen-code/issues/6034)
    - **摘要**：当 Gate 服务不可用时，系统自动降级执行计划，存在安全隐患。社区正在讨论如何在安全性与可用性之间取得平衡。

8.  **[P2] 移动端 Web Shell 侧边栏缺失** [#6000](https://github.com/QwenLM/qwen-code/issues/6000)
    - **摘要**：在移动浏览器访问 `qwen serve` 时，侧边栏被隐藏且无替代交互方式，导致无法切换会话。随着移动办公场景增加，此需求关注度上升。

9.  **[P2] 支持内联模型切换命令** [#5967](https://github.com/QwenLM/qwen-code/issues/5967)
    - **摘要**：用户希望简化模型切换流程，通过 `/model <id> <prompt>` 格式实现单次提问切换模型，无需多步操作。

10. **[P2] Windows 下 Tilde 路径解析错误** [#6030](https://github.com/QwenLM/qwen-code/issues/6030)
    - **摘要**：Windows 环境下 `~\docs` 被错误解析为当前目录下的字面量文件夹，影响跨平台文件操作体验。

## 4. 重要 PR 进展 (Top 10)

1.  **feat(cli): 支持内联单次模型覆盖** [#6022](https://github.com/QwenLM/qwen-code/pull/6022)
    - **内容**：实现了 `/model <model-id> <prompt>` 功能，允许单次提问使用特定模型后自动回退。响应了 Issue #5967，极大提升了多模型调试体验。

2.  **fix(core): 修复 GLM 响应的 Thinking 标签解析** [#6033](https://github.com/QwenLM/qwen-code/pull/6033)
    - **内容**：针对 GLM 模型在 DashScope 协议下返回的 `<tool_call>...(scan)/message>` 标签进行正确解析，修复了 Issue #6007 中的输出泄露问题。

3.  **fix(cli): 避免 OOM 路径下的全量历史克隆** [#6018](https://github.com/QwenLM/qwen-code/pull/6018)
    - **内容**：优化了 API 错误上报和 Agent 缓存快照逻辑，避免深拷贝庞大的对话历史，直接解决 Issue #6004 反映的内存溢出痛点。

4.  **feat(web-shell): 添加移动端侧边栏抽屉** [#6003](https://github.com/QwenLM/qwen-code/pull/6003)
    - **内容**：为移动端视图增加了汉堡菜单和侧边栏抽屉组件，解决了移动端无法查看会话列表的问题。

5.  **feat(serve): 支持 HTTPS/TLS** [#6032](https://github.com/QwenLM/qwen-code/pull/6032)
    - **内容**：新增 `--tls-cert` 和 `--tls-key` 参数，允许 Daemon 启用 HTTPS。这是实现移动端安全访问和语音输入功能的前置条件。

6.  **feat(cli): 添加 /reload-plugins 命令** [#6037](https://github.com/QwenLM/qwen-code/pull/6037)
    - **内容**：新增热重载插件的 Slash 命令，用户修改插件配置后无需重启会话即可生效。

7.  **fix(cli): 替换模糊宽度的 Emoji 为 Unicode 符号** [#5974](https://github.com/QwenLM/qwen-code/pull/5974)
    - **内容**：将 `✦` 等在东亚语言环境下宽度模糊的字符替换为标准 Unicode 符号，修复了终端 UI 中的对齐错乱问题。

8.  **feat(core): 支持 MCP allowed/excluded 的 glob 模式** [#6012](https://github.com/QwenLM/qwen-code/pull/6012)
    - **内容**：增强了 MCP 配置灵活性，管理员可以使用通配符批量配置允许或禁止的服务器。

9.  **feat(channel): 添加主动定时例程** [#6038](https://github.com/QwenLM/qwen-code/pull/6038)
    - **内容**：为 Daemon 增加了调度器支持，允许定时触发任务，扩展了 Qwen Code 在自动化场景下的能力。

10. **fix(cli): 保持 serve health 端点的快速响应** [#6013](https://github.com/QwenLM/qwen-code/pull/6013)
    - **内容**：优化启动流程，延迟加载重型运行时，确保 Docker/负载均衡器的健康检查不会被阻塞。

## 5. 功能需求趋势
- **跨模型与协议兼容性**：社区对 Qwen Code 作为统一客户端对接不同模型（GLM, Anthropic, DeepSeek）表现出强烈需求，尤其是对特定模型的输出格式解析和 Token 计费优化。
- **自动化与后台任务**：围绕 Daemon 和 Channel 的讨论增多，包括定时任务、后台 Loop 模式以及远程控制，显示出 Qwen Code 正从“CLI 工具”向“自动化 Agent 服务”演进的态势。
- **成本控制精细化**：用户对 Prompt Cache 的命中率、压缩模型的成本分摊表现出极高的敏感度，期待更细粒度的成本控制配置。

## 6. 开发者关注点
- **内存稳定性**：OOM 问题依然是开发者的核心痛点，特别是在处理长对话或加载复杂 MCP 时。
- **移动端体验**：随着 Web Shell 功能的完善，移动端访问的适配需求（HTTPS、侧边栏）成为新的关注热点。
- **UI 细节打磨**：终端 UI 的字符对齐、Emoji 显示、鼠标交互支持等细节问题持续受到开发者的关注，反映了工具成熟度的提升。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 (2026-06-30)

## 1. 今日速览
DeepSeek TUI（项目代号 CodeWhale）今日核心动态集中在 **v0.8.66 版本的发布攻坚**。开发团队集中修复了高并发 Sub-agent 场景下导致 TUI 界面卡死和渲染溢出的严重 Bug，并优化了锁竞争机制。产品层面做出重要调整，决定默认隐藏 "Hotbar" 功能以降低新用户认知负担。此外，社区对输入缓存命中率低及 Token 消耗异常的关注度持续走高。

## 2. 版本发布
过去 24 小时内无正式版本发布。

## 3. 社区热点 Issues (Top 10)

1.  **[#1177 输入缓存命中率过低](https://github.com/Hmbown/CodeWhale/issues/1177)**
    *   **关注点**：用户反馈对比竞品 DeepSeek-Reasonix，本项目的输入缓存命中率极低，导致成本增加。
    *   **社区反应**：评论数达 24 条，用户普遍认为这是急需改善的核心体验问题。

2.  **[#743 Token 消耗异常增大](https://github.com/Hmbown/CodeWhale/issues/743)**
    *   **关注点**：用户报告短时间内消耗数亿 Token，质疑请求密度过大及交互信息未优化。
    *   **重要性**：涉及成本控制，是开发者最敏感的痛点之一。

3.  **[#1120 缓存命中问题复现与排查](https://github.com/Hmbown/CodeWhale/issues/1120)**
    *   **关注点**：继 #1177 后，用户针对同一项目的修改场景进行了缓存未命中的复现与讨论，试图定位版本问题。

4.  **[#3800 v0.8.66 发布门禁：多 Sub-agent 并发导致 TUI 卡死](https://github.com/Hmbown/CodeWhale/issues/3800)**
    *   **重要性**：标记为 `release-blocker`。高并发启动子代理时会导致 UI 失去响应，是目前版本发布的阻碍性问题，团队已提交多个 PR 修复。

5.  **[#3807 v0.8.66 产品决策：默认隐藏 Hotbar](https://github.com/Hmbown/CodeWhale/issues/3807)**
    *   **关注点**：官方决定在 v0.8.66 版本中默认隐藏 Hotbar（快捷操作栏），需用户显式开启。旨在保持界面整洁，聚焦稳定性。

6.  **[#3799 TUI 布局与文本溢出系统性修复](https://github.com/Hmbown/CodeWhale/issues/3799)**
    *   **重要性**：标记为 `release-blocker`，涉及模态框文本溢出、底部按钮被裁剪等长期存在的 UI 痛点。

7.  **[#3819 MCP OAuth 认证 UX 问题](https://github.com/Hmbown/CodeWhale/issues/3819)**
    *   **关注点**：用户报告配置 OAuth 保护的 MCP 服务器时遇到 Token 不刷新、静默错误等问题，影响了与外部工具的集成体验。

8.  **[#1747 UI 可读性与缓存问题反馈](https://github.com/Hmbown/CodeWhale/issues/1747)**
    *   **关注点**：开发者反馈长时间工作流中 UI 难以阅读，同时伴随缓存命中率低的问题。

9.  **[#1186 增强执行策略的持久化权限规则](https://github.com/Hmbown/CodeWhale/issues/1186)**
    *   **重要性**：提议增加类型化的持久权限规则（支持工具名、命令前缀等），以减少重复确认，提升 Agent 模式的自动化体验。

10. **[#2693 v0.9.0 规划：模型特定上下文策略](https://github.com/Hmbown/CodeWhale/issues/2693)**
    *   **关注点**：官方发布 v0.9.0 路线图，计划针对 DeepSeek V4 和小米 MiMo v2.5 等不同模型优化上下文加载策略，以提高缓存命中率。

## 4. 重要 PR 进展 (Top 10)

1.  **[#3816 优化 Sub-agent 状态持久化性能](https://github.com/Hmbown/CodeWhale/pull/3816)**
    *   **内容**：修复了状态持久化持有写锁导致的阻塞问题，将其移出热路径，显著改善高并发下的响应速度。
    *   **关联**：Fixes #3805，是解决 TUI 卡死的关键修复之一。

2.  **[#3815 默认隐藏 Hotbar](https://github.com/Hmbown/CodeWhale/pull/3815)**
    *   **内容**：将 Hotbar 的默认行为改为隐藏，仅在用户显式配置或调用时显示，符合今日发布的产品决策。

3.  **[#3813 解决 Sub-agent 状态风暴导致的 UI 阻塞](https://github.com/Hmbown/CodeWhale/pull/3813)**
    *   **内容**：将 `ListSubAgents` 的刷新事件改为非阻塞发送，防止事件通道填满导致主循环卡顿。

4.  **[#3814 修复 TUI 审批控件溢出问题](https://github.com/Hmbown/CodeWhale/pull/3814)**
    *   **内容**：重构审批提示框布局，确保长文本下操作按钮始终可见，解决 #3799 提出的问题。

5.  **[#3809 从只读快照渲染侧边栏](https://github.com/Hmbown/CodeWhale/pull/3809)**
    *   **内容**：修复了 UI 刷新时争抢写锁的问题，改为从快照读取，避免阻塞 Agent 完成任务的逻辑。

6.  **[#3812 允许 Agent 启动加入并行调度批次](https://github.com/Hmbown/CodeWhale/pull/3812)**
    *   **内容**：优化 Agent 工具调用逻辑，支持并行启动，解决高并发下启动延迟线性增长的问题。

7.  **[#3817 保持 YOLO 模式的持续授权](https://github.com/Hmbown/CodeWhale/pull/3817)**
    *   **内容**：修复了在 YOLO 模式下运行时，子代理或延续操作仍可能弹出审批提示的问题，确保自动执行权限的一致性。

8.  **[#3820 同步 Xiaomi MiMo Token 计划文档](https://github.com/Hmbown/CodeWhale/pull/3820)**
    *   **内容**：更新文档以支持小米 MiMo 模型的直连和 Token 计费说明，扩展模型生态支持。

9.  **[#3789 在状态栏显示安全策略状态](https://github.com/Hmbown/CodeWhale/pull/3789)**
    *   **内容**：增加 `/status` 命令的安全状态显示，区分 Plan（只读）、Agent（写入）和 YOLO（无限制）模式。

10. **[#3818 展开活跃工具运行摘要](https://github.com/Hmbown/CodeWhale/pull/3818)**
    *   **内容**：改进 UI，允许在工具还在运行时就展开查看详情，提升实时交互体验。

## 5. 功能需求趋势

*   **成本控制与性能优化**：缓存命中率和 Token 消耗是社区最核心的诉求。用户强烈呼吁优化 Prompt 路径和上下文管理，以对标竞品性能。
*   **Agent 稳定性与并发能力**：随着多 Agent 协作场景增多，TUI 的并发处理能力（锁竞争、事件通道阻塞）成为开发重心。
*   **权限管理精细化**：社区希望有更持久的权限配置方案，减少重复确认，特别是针对 Shell 执行和 MCP 工具调用的自动化授权。
*   **多模型适配**：针对不同模型（DeepSeek V4, Xiaomi MiMo）的差异化配置和路由策略需求增加。

## 6. 开发者关注点

*   **TUI 卡顿与假死**：开发者在处理大量文件或启动多个子 Agent 时，频繁遇到界面卡死，需关注即将发布的 v0.8.66 是否彻底解决了锁竞争问题。
*   **缓存机制失效**：实际测试中缓存命中率远低于预期，建议关注官方 #2693 关于上下文策略优化的后续版本。
*   **默认配置变更**：Hotbar 功能已默认关闭，开发者如需使用需手动开启（通过 `/hotbar` 命令或配置文件）。
*   **权限弹窗干扰**：YOLO 模式下的权限弹窗 Bug 已修复，建议及时更新以获得流畅的自动化体验。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*