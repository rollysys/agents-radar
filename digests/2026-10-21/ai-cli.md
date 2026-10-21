# AI CLI 工具社区动态日报 2026-10-21

> 生成时间: 2026-10-21 03:47 UTC | 覆盖工具: 11 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Pi](https://github.com/earendil-works/pi)
- [oh-my-pi](https://github.com/can1357/oh-my-pi)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告
**数据窗口：2026-10-21 | 覆盖 11 个主流 AI CLI 项目**

---

## 一、生态全景

AI CLI 工具已从“单一对话终端”全面演进为**多智能体编排 + 沙箱化执行 + 桌面端交付**的复合形态。当前生态呈现三个鲜明特征：一是头部工具（Claude Code、Codex、Gemini CLI）进入高频道迭代期，升级即回归（如 Bedrock CA、V2 迁移回归）成为普遍风险；二是**子代理（subagent）可靠性**和**沙箱安全边界**几乎同时在所有工具社区爆发为热点问题域；三是小而精的开源工具（OpenCode、Pi、oh-my-pi）通过缓存经济学、CJK 国际化、类型安全等差异化工程深耕，活跃度已不输官方项目。

---

## 二、各工具活跃度对比

| 工具 | 热点 Issues | PR 动态 | Release | 活跃焦点 |
|---|---|---|---|---|
| **Claude Code** | 10+（高热度） | 3 | **2 个稳定版**（v2.1.305/306） | 认证修复、沙箱嵌套、Desktop 体验 |
| **Codex** | 10+（高争议） | 10+ | 2 个 alpha（0.164.0-a.7/8） | Computer Use、MCP/企业认证、配额失控 |
| **Gemini CLI** | 10 | 10 | **3 个版本**（稳定+preview+nightly） | Subagent 挂起、沙箱桥接、新模型 |
| **Copilot CLI** | 10+ | 0 | **3 个版本** | 权限系统、沙箱代理兼容 |
| **OpenCode** | 10 | 10+ | 无 | V2 回归、Desktop UI 重构 |
| **Qwen Code** | 10+（含 ~10 条 CI 噪音） | 10+ | 2 preview | Web Shell/daemon、memory 治理 |
| **DeepSeek TUI** | 10 | 10 | 无 | 会话持久化、TUI 细节打磨 |
| **Pi** | 10 | 10 | 无 | Prompt cache 保全、CJK 修复 |
| **oh-my-pi** | 10 | 10 | 2 个补丁版 | 多智能体编排、12h 缓存 |
| **Kimi Code CLI** | 0 | 0 | 无 | 静默 |
| **DeepSeek Harness** | 0 | 0 | 无 | 静默 |

**发布节奏分层明显**：Claude Code / Copilot / Gemini 走“稳定版快速跟进”；Codex 双 alpha 显示激进重构；OpenCode / Pi / DeepSeek TUI 处于 PR 驱动的持续打磨期，无 Release 节奏。

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **子代理可靠性** | Gemini（#21409 挂起、#22323 误报成功）、OpenCode（#57603 权限静默失败、#32132 虚假 completed）、oh-my-pi（#16490 worker 误判死亡）、Codex（#40125 审批降级）、DeepSeek TUI（resume 拒绝含 sub-agent 记录） | 跨工具的系统性短板：挂起、误报成功、权限失效、报告丢失 |
| **上下文压缩与 token 计量准确性** | Codex（#53309 双重计数）、Claude Code（#103901 误压缩）、oh-my-pi（#15797 过早压缩）、Qwen（#14976 估算错误）、DeepSeek TUI（#6981 压缩失败） | “压缩黑盒 + 计量不准”是全行业痛点 |
| **沙箱与企业环境兼容** | Claude Code（Bedrock CA 回归）、Copilot（NO_PROXY、Gradle daemon）、Gemini（容器沙箱桥接）、OpenCode（external_directory 误报）、DeepSeek TUI（macOS Seatbelt） | 代理网络、自定义 CA、容器/IDE 共存 |
| **Windows 平台成熟度** | Claude Code、Codex、OpenCode、Qwen、Pi | Claude Code 热点 Issue 约 1/3 涉及 Windows；Codex 约半数——Windows 是全生态的“二等公民” |
| **成本透明度** | Codex（2.42 亿 token 失控）、Claude Code（#85421 隐性插件消耗）、Pi（OpenRouter 成本偏差 2-3 倍）、oh-my-pi（kimi-k3 低估 30%） | 隐性/失控消耗 + 统计不准 |
| **Headless/CI 场景** | Codex（#20919 非 TTY 挂起）、Gemini（PR #29849 信号处理）、Copilot（#5201 缺 errorCode） | 自动化流水线嵌入需求增长但支持不足 |
| **MCP 生态工程化** | Codex（OAuth 协调、企业认证 4 条 PR）、Qwen（/mcp 误报）、Copilot（token 静默刷新）、Pi（BOM 解析 P0） | 从“能用”走向“可靠、可审计、可企业部署” |

---

## 四、差异化定位分析

- **Claude Code**：企业级 + 桌面端双轨。组织级安全治理（PR #99540）、Bedrock 企业集成、Routines 自动化是独特卖点；但 Desktop 内嵌 CLI 与独立 CLI 行为不一致正在制造分裂。
- **Codex**：押注 Agent 工具能力（Computer Use / Browser Use），且是唯一将 MCP 企业认证作为战略级 PR 密集投入的工具；但 BYOK 用户被 Work mode 阻塞暴露了首方/第三方体验断层。
- **Gemini CLI**：技术前瞻性最强——AST 感知工具链、“Tactful Extraction” token 经济学、零依赖 OS 沙箱等官方主导的大型调研，走平台化路线。
- **Copilot CLI**：权限系统精细化（assistedApprovalInstructions、路径审批），依托 GitHub 生态；但社区已正式要求 Stable 发布通道，回归疲劳显现。
- **OpenCode**：V1→V2 大迁移期，Desktop App 交互（队列编辑、文件树重构）投入最重，多 provider 自由度是核心卖点。
- **Qwen Code**：独特的 Web Shell / daemon 远程架构方向，且明确请求 Claude Code Mod runtime 兼容——生态兼容性追随者策略。
- **Pi / oh-my-pi**：工程极客向。Prompt cache 保全、12h 长缓存、CJK 渲染、启动性能（130 静态导入→懒加载）等底层优化密度最高；oh-my-pi 的多智能体监督（Overseer）设计领先社区诉求。
- **DeepSeek TUI**：专注终端 UI 细节 QA（窄屏截断、滚动指示）与会话持久化架构解耦，社区协作文化健康（13 个贡献者 PR 独立合入）。

---

## 五、社区热度与成熟度

**第一梯队（高热度 + 高投入）**：Claude Code（Issue 互动量最大，46 👍 的功能请求）、Codex（争议最集中，单 Issue 33 评论）、Gemini CLI（P1 响应 + 稳定/preview/nightly 三轨发布）。

**第二梯队（快速迭代）**：OpenCode（24h 内 50 Issue + 50 PR，社区驱动最强）、oh-my-pi（外部贡献者 mitsuhishi 级别 PR 质量高）、Copilot CLI（修复闭环快，多个沙箱 Issue 当日关闭）。

**深耕期**：Pi、Qwen Code、DeepSeek TUI——Issue 量稳定，工程细节导向。

**观察**：Kimi Code CLI 与 DeepSeek Harness 连续静默，与前者形成对比的是 Pi 生态却持续有 Kimi OAuth 相关更新，开源主动性差异明显。

---

## 六、值得关注的趋势信号

1. **子代理是下一个信任战场**：五个工具同时报告“子代理误报成功/静默失败”，意味着多智能体编排的可靠性已落后于其宣传速度。选型时应将“子代理可观测性”（如 oh-my-pi PR #16135 的模型解析披露）作为评估维度。

2. **升级即回归成为常态，回滚预案是刚需**：Claude Code 2.1.304 CA 回归、Codex 配额循环、OpenCode V2 权限回归、Copilot 连续回归引发 Stable 通道请求。**建议生产环境锁定版本、关注已知良好版本（如 Claude Code v2.1.303），勿盲目追新。**

3. **Token 经济学进入精细化时代**：从 12h 提示缓存（oh-my-pi）、AST 外科式读取（Gemini 调研 ast-grep/tilth/glyph）、到压缩时机控制——重度用户的成本优化诉求正从“模型选择”转向“上下文工程”。工具间有效 token 成本差异可能达数倍。

4. **MCP 从功能走向治理**：Codex 的企业认证复用、Claude Code 的组织级工具上限，标志 MCP 正在补齐企业级 IAM 能力——对自托管/多团队用户是关键利好信号。

5. **Headless/CI 是尚未满足的增量市场**：三款工具同时暴露非交互模式缺陷（信号处理、错误码、挂起），将 CLI 嵌入流水线的开发者需预留降级方案。

6. **Windows 用户是最大被忽视群体**：全生态约 1/3~1/2 的痛点 Issue 涉及 Windows（ARM64、非系统盘、进程风暴），Windows 优先的企业采购方应要求供应商提供明确的平台 SLA。

---
*本报告基于各项目 GitHub 公开数据自动汇总分析，仅供技术选型参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-10-21）

## 1. 热门 Skills 排行（PR）

| # | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **mcp-builder** — [PR #1742](https://github.com/anthropics/skills/pull/1742) | 适配 mcp>=2 的 `streamable_http_client` 导入与自定义 headers | 对应 Issue #1668，MCP 协议升级后的兼容性是近期焦点；配套 Issue #1390 还暴露评估脚本对所有真实 MCP 服务器打 0 分的问题 | OPEN |
| 2 | **skill-creator** — [PR #1298](https://github.com/anthropics/skills/pull/1298) | 隔离 trigger evals，修复 Windows 及运行时故障 | Issue #556（触发率 0%）评论 13 条、#1383（6 个可复现问题）、#1394（XSS），是整个仓库被审计最多的 Skill | OPEN |
| 3 | **skill-creator（eval viewer 加固）** — [PR #1961](https://github.com/anthropics/skills/pull/1961) | 修复 eval viewer 的脚本逃逸、DNS rebinding、跨站 POST | 安全社区持续关注本地 viewer 渲染不可信模型输出的风险 | OPEN |
| 4 | **notion-spec-to-implementation + quantitative-resume-auditor** — [PR #1245](https://github.com/anthropics/skills/pull/1245) | 将产品/技术 Spec 拆解为 Notion 可执行任务；简历量化审计 | 挂起近 4.5 个月仍持续更新，代表工作流自动化类需求 | OPEN |
| 5 | **docx** — [PR #1792](https://github.com/anthropics/skills/pull/1792) | LibreOffice 超时正确报错并校验修订标记已清除 | 配套 Issue #2018（merge_runs.py 写出非法 XML）表明 docx 是 bug 密度最高的文档类 Skill | OPEN |
| 6 | **md2video-audio** — [PR #1703](https://github.com/anthropics/skills/pull/1703) | Markdown 编译为带真人语音的 MP4 视频 | 零成本、Marp 方案，多媒体生成方向代表作 | OPEN |
| 7 | **proofcore-contract-auditor** — [PR #1771](https://github.com/anthropics/skills/pull/1771) | Solidity/Rust 合约静态分析 + TON 链上存证审计 | Web3 场景 Skill；同时引发社区对第三方商业 Skill 植入的信任讨论（见 Issue #492） | OPEN |
| 8 | **pyxel** — [PR #525](https://github.com/anthropics/skills/pull/525) | Python 复古游戏开发（无头运行、帧检查） | 早期 PR 持续存活 7 个月，社区游戏开发长尾需求 | OPEN |

## 2. 社区需求趋势（Issues）

- **组织级 Skill 分发与管理**：[Issue #228](https://github.com/anthropics/skills/issues/228)（16 评论）希望 Skills 可在组织内直接共享，替代手动传 .skill 文件——呼声最高的功能需求。
- **Skill 安全与信任边界**：[Issue #492](https://github.com/anthropics/skills/issues/492)（46 评论，全仓库第一）指出社区 Skill 冒用 `anthropic/` 命名空间构成权限滥用风险。
- **Skill 元工具与质量度量**：[Issue #1329](https://github.com/anthropics/skills/issues/1329) compact-memory（紧凑 agent 状态符号）、[Issue #202](https://github.com/anthropics/skills/issues/202)（已关闭，skill-creator 应符合最佳实践）、[Issue #1385](https://github.com/anthropics/skills/issues/1385) 推理质量门禁管线——社区在探索"管理 Skill 的 Skill"。
- **评测可靠性**：[Issue #556](https://github.com/anthropics/skills/issues/556) 触发率 0% 的评测框架问题，是 Skill 开发者最痛的阻塞点。
- **上下文经济性**：[Issue #1487](https://github.com/anthropics/skills/issues/1487) claude-api skill 一次性注入 ~156k tokens 耗尽上下文，反映对 Skill 瘦身化的诉求。
- **安装/去重体验**：[Issue #189](https://github.com/anthropics/skills/issues/189)（9 👍）两个官方插件内容重复导致上下文膨胀。

## 3. 高潜力待合并 Skills（评论活跃 / 持续维护中）

- **PR #1298 & #1997**（skill-creator 修复系列）——对应多个高评论 Issue，合并紧迫性最高
- **PR #1742**（mcp-builder mcp>=2 兼容）——修复核心工具链兼容性
- **PR #1245**（Notion Spec 转 implementations）——6 月创建、10 月仍在更新，维护意愿强
- **PR #1681 / #1730**（skill-creator 脚本路径、claude-api 死链修复）——低成本易合并的卫生类 PR
- **PR #1792**（docx 超时报错）——修复静默失败，工程质量提升

## 4. 生态洞察（一句话）

**社区当前最集中的诉求是：建立 Skills 的信任与质量基础设施——安全分发（命名空间治理）、可靠的触发/评测机制、以及 Skill 自身的上下文瘦身——而不仅是更多新 Skill。**

---

# Claude Code 社区动态日报（2026-10-21）

## 一、今日速览

过去 24 小时内 Claude Code 连发两个版本（v2.1.305 / v2.1.306），重点修复云会话认证与 MCP 工具过多导致的误压缩问题，并新增 Linux 沙箱嵌套用户命名空间与无人值守重试配置。社区方面，Desktop 应用的 Routines 侧边栏回归问题（#102142）持续发酵，Bedrock 自定义 CA 回归（#103680）和 Windows ARM64 Cowork 沙箱问题仍是高关注度痛点。

---

## 二、版本发布

### v2.1.306
- 修复云会话中缺少环境变量启动时 `claude -p` 报 "Not logged in" 的问题
- 修复 MCP 工具较多的会话中 API 错误被 "prompt is too long" 掩盖、且触发不必要压缩的问题

### v2.1.305
- 新增 `sandbox.allowNestedUserNamespaces`：允许 Linux 沙箱内命令创建用户命名空间（支持 Chromium、rootless podman 等），⚠️ 注意这会绕过沙箱的文件保护
- 新增 `CLAUDE_CODE_RETRY_WATCHDOG_USAGE_LIMIT_RECHECK_MS`：为无人值守重试模式提供用量限额重查间隔配置

---

## 三、社区热点 Issues（Top 10）

1. **[#12676](https://github.com/anthropics/claude-code/issues/12676) 视频输入支持（46 👍，19 评论）**
   长期高热度功能请求：希望 Claude Code 支持 video 输入。作为多模态工作流的关键缺口，持续获得社区投票。

2. **[#102142](https://github.com/anthropics/claude-code/issues/102142) Desktop Routines 板块被侧边栏更新隐藏（13 👍，18 评论）**
   2.37337.1 版本更新后 Code 标签页 Routines 板块消失，且每次启动都重置为隐藏，影响日常例行任务用户，新近且增长快。

3. **[#89673](https://github.com/anthropics/claude-code/issues/89673) Desktop 换行/提交键位可配置（58 👍，12 评论）**
   请求 Enter 插入换行、Ctrl+Enter 提交，与主流 IM 习惯一致。👍 数最高的功能请求之一，反映键位自定义是刚需。

4. **[#76110](https://github.com/anthropics/claude-code/issues/76110) xfce4-terminal 中 Ctrl+click 链接打开两个重复标签页（19 评论）**
   有稳定复现，问题特定于 Claude Code 渲染的链接而非终端原生输出，定位到 TUI 层的链接转义处理。

5. **[#66535](https://github.com/anthropics/claude-code/issues/66535) Windows ARM64 / Snapdragon 上 Cowork 沙箱无法就绪（12 👍，16 评论）**
   自 6 月开放的长期问题，ARM64 Windows 用户基本被排除在 Cowork 功能之外，等待官方支持。

6. **[#85421](https://github.com/anthropics/claude-code/issues/85421) security-guidance 插件 layer 3 默认开启且无用量可见性（7 评论）**
   每次 commit 触发 agentic 审查、约 77 次审查消耗约 200k tokens 且用量被丢弃。默认开启 + 不可见成本引发信任与透明度担忧。

7. **[#103680](https://github.com/anthropics/claude-code/issues/103680) Bedrock 自定义 CA 在 2.1.304 回归失效（3 评论）**
   企业用户关键回归：`UNABLE_TO_GET_ISSUER_CERT`，自定义 CA 已加载但未被使用（2.1.303 正常）。v2.1.305+ 企业用户需注意。

8. **[#98910](https://github.com/anthropics/claude-code/issues/98910) 云会话 VM 重启后回退到 /clear 之前的对话**
   云端会话休眠唤醒后上下文“跳跃”回旧状态，模型基于过时状态继续工作，影响长会话可靠性。

9. **[#102573](https://github.com/anthropics/claude-code/issues/102573) "You should know" 内置插件在 Desktop 中不生效（Windows）**
   同机同配置下 CLI 正常、Desktop 嵌入式 CLI 不工作，指向 Desktop 内嵌 CLI 与独立 CLI 的行为差异。

10. **[#103899](https://github.com/anthropics/claude-code/issues/103899) Auto 模式分类器拦截合法防御性安全操作**
    与 #103101（分类器拦截时希望显示权限提示而非直接拒绝）呼应，Auto 模式的拦截策略误伤与黑盒化正成为新的反馈焦点。

---

## 四、重要 PR 进展（近 24 小时更新，共 3 条）

1. **[#21459](https://github.com/anthropics/claude-code/pull/21459) hookify：新增 glob_match 与大小写敏感控制**
   为规则匹配增加 glob 模式（如 `*.py`）和 `case_sensitive` 选项，降低正则编写门槛。

2. **[#99141](https://github.com/anthropics/claude-code/pull/99141) diff 面板：无可绘制内容时保留 pane，有内容即显示**
   改进 `/diff` 提前打开时的体验，避免 pane 丢失，属于 pane/引擎渲染体系（基于 #99118）的持续迭代。

3. **[#99540](https://github.com/anthropics/claude-code/pull/99540) 安全默认值：组织级工具上限约束个人安装的插件**
   组织对某工具设定的审批/限制上限，现在对成员个人安装插件的 hook 同样生效，且每个 hook 决策带 `.catch` 兜底。企业治理能力的重要补强。

> 注：过去 24 小时仅 3 条 PR 更新，今日动态以 Issues 为主。

---

## 五、功能需求趋势

- **Desktop 应用体验**：最密集的反馈来源——键位自定义（#89673）、侧边栏会话组嵌套/排序（#93058、#98654）、Routines 可见性（#102142、#54517）、git 状态图标跨平台一致性（#103896）、语音听写（#103553）。
- **多模态输入**：视频输入（#12676，46 👍）呼声最高。
- **权限与安全治理**：Auto 模式拦截透明度（#103101、#103899）、组织级安全上限（PR #99540）、security-guidance 插件成本可控性（#85421）。
- **企业/自托管环境**：Bedrock 自定义 CA、代理网络等企业集成问题的持续出现。
- **云端会话可靠性**：会话状态恢复、认证（v2.1.306 修复）、无人值守任务（routines + GitHub 集成，#100723）。

---

## 六、开发者关注点

1. **Windows 平台仍是重灾区**：今日 30 条高评论 Issues 中约 1/3 涉及 Windows（ARM64 沙箱、Desktop 插件失效、Remote Control 初始化失败、git 图标缺失、busy-spin CPU 占用 #103340）。Windows 用户占比高但体验滞后。
2. **Desktop 内嵌 CLI 与独立 CLI 行为不一致**：插件、MCP、链接处理等多处出现"终端正常、Desktop 异常"，建议遇到问题时先对比验证两个环境。
3. **隐藏成本与透明度**：默认开启的 agentic 插件消耗大量 token 且无可见性（#85421），配合 Auto 模式的静默拦截，"黑盒决策"是信任层面的核心痛点。
4. **长会话/云会话状态一致性**：/clear 后状态回退（#98910）、auto-compact 误触发（#103901）表明上下文管理仍有边界 bug。
5. **升级即回归**：2.1.304 引入 Bedrock CA 回归提醒企业用户在升级前保留回滚预案（v2.1.303 为已知良好版本）。

---
*数据截至 2026-10-21，来源：github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-10-21 | 数据来源：github.com/openai/codex**

---

## 一、今日速览

Codex 桌面端（尤其 Windows 平台）的 Computer Use / Browser Use 功能成为社区吐槽重灾区，截图捕获、BYOK 模式阻塞、来源授权失效等多条高热度 Issue 集中爆发。同时官方发布 `0.164.0-alpha.7/8` 两个 alpha 版本，并以 copyberry[bot] 高频合入 MCP、rollout 存储与性能优化相关 PR，显示底层架构持续打磨中。此外，多条"模型容量已满"（model at capacity）和配额异常消耗的报告值得关注。

---

## 二、版本发布

| 版本 | 说明 |
|---|---|
| [rust-v0.164.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.8) | 最新 alpha，24小时内连发 |
| [rust-v0.164.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.7) | 同日早些时候发布 |

两个版本均为 alpha 迭代，Release Notes 未附详细变更说明，属例行快速发布节奏。

---

## 三、社区热点 Issues（Top 10）

1. **[#54841](https://github.com/openai/codex/issues/54841) — BYOK 模式下 Work mode 无法提交消息（32 评论，23 👍）**
   启用本地 browser/computer 工具时 BYOK 用户被完全阻塞，是今日社区共鸣最强的问题，23 个点赞反映出 BYOK 用户基数不小。

2. **[#49383](https://github.com/openai/codex/issues/49383) — Windows Computer Use 截图捕获失败（33 评论）**
   FrameArrived 超时 + E_INVALIDARG，持续近一个月未解，是 Computer Use 在 Windows 上可靠性问题的典型代表。

3. **[#40125](https://github.com/openai/codex/issues/40125) — 子代理审批模式被意外降级（27 评论）**
   Desktop `create_thread` 间歇性将 Full Access 子会话降级为 managed 模式，影响 Pro 用户多代理工作流的可预测性。

4. **[#51790](https://github.com/openai/codex/issues/51790) — `send_message_to_thread` 报 "'sendRequest.bind' is not a function"（24 评论）**
   macOS 桌面端子代理通信 API 损坏，影响依赖该接口的自动化编排。

5. **[#52839](https://github.com/openai/codex/issues/52839) — ChatGPT 登录下 Sol Ultrafast 缺失于模型目录（23 评论）**
   fast/ultrafast 模式已启用但首方模型目录不含该模型，疑似 CLI 目录同步 bug。

6. **[#53309](https://github.com/openai/codex/issues/53309) — 历史推理内容被双重计入，导致过早自动压缩（17 评论，8 👍）**
   对长上下文重度用户影响直接——有效上下文被虚增，压缩提前触发，Pro Max $500 用户也在受影响之列。

7. **[#46023](https://github.com/openai/codex/issues/46023) — 单任务消耗 2.42 亿 token、2h44m 吃掉 11% 周配额（3 评论）**
   子代理 token 消耗失控，暴露配额计量与成本透明度问题。

8. **[#55740](https://github.com/openai/codex/issues/55740) / [#55583](https://github.com/openai/codex/issues/55583) — "Selected model is at capacity" 在所有模型上无限循环**
   两条同日活跃报告，配额重置后账号仍不可用，属账号级服务问题，值得官方尽快回应。

9. **[#52790](https://github.com/openai/codex/issues/52790) — Cloudflare challenge 阻塞新建会话**
   Windows 桌面端新聊天被工作区设置加载失败卡住，退出重登仅暂时缓解，疑似网络/CDN 层问题。

10. **[#55753](https://github.com/openai/codex/issues/55753) — Codex 引发 Git 进程风暴（5023 个进程），致系统瘫痪（新 Issue）**
    进程失控耗尽资源导致硬件重启，虽评论尚少但严重性极高，属今日最值得关注的稳定性报告。

---

## 四、重要 PR 进展（Top 10）

1. **[#55724](https://github.com/openai/codex/pull/55724) — 跨会话共享已准备的 MCP 工具定义**
   将不可变 MCP 工具元数据与 per-handler 缓存拆分复用，减少重复 schema 归一化开销，是 MCP 性能优化的重要一步。

2. **[#55701](https://github.com/openai/codex/pull/55701) — MCP OAuth 刷新协调默认启用**
   `mcp_oauth_refresh_coordination` 转正为稳定特性，多 MCP 服务器的 OAuth token 管理更可靠。

3. **[#55698](https://github.com/openai/codex/pull/55698) — 企业 MCP 认证复用 Codex 账号授权**
   企业 MCP 连接可直接使用匹配 issuer 的 Codex 账号 OAuth grant，简化企业部署。

4. **[#55696](https://github.com/openai/codex/pull/55696) — 运行时刷新时保留企业 MCP 授权**
   配置重载/`thread/revert` 不再丢失企业 MCP 凭据，修复运行中线程的认证连续性。

5. **[#55733](https://github.com/openai/codex/pull/55733) — RolloutItem 元数据与压缩载荷装箱（Box）**
   内存布局优化，保持序列化格式不变，典型的 Rust 性能重构。

6. **[#55719](https://github.com/openai/codex/pull/55719) — 凭据掩码不可用时统一 exec 降级**
   修复受保护 shell 快照失败导致命令无法执行的问题——对沙箱可用性是实质改进。

7. **[#55725](https://github.com/openai/codex/pull/55725) — Rollout 追踪中保留 code cell 响应元数据**
   修复 code cell 生命周期事件丢失初始响应状态的问题，改善会话回放完整性。

8. **[#55710](https://github.com/openai/codex/pull/55710) — 从运行时事件解析 MCP 后端身份**
   修复 MCP 调用被误分类为内置工具的追踪错误，对 telemetry/审计准确性重要。

9. **[#55705](https://github.com/openai/codex/pull/55705) — 云技能缓存状态集中到目录锁下**
   统一 SkillCatalogState 的并发管理，auth scope 变化时正确清空缓存。

10. **[#55723](https://github.com/openai/codex/pull/55723) — app-server 通知发送减少冗余 clone**
    用 `repeat_n` 移动语义替代逐接收者克隆，小而美的性能优化。

> 注：PR 队列中另有大量长期挂起的 dependabot 依赖升级（Rust toolchain 1.94~1.97、zip 8.x、ratatui 等），显示依赖更新节奏滞后于上游，值得团队关注。

---

## 五、功能需求趋势

- **Agent 工具能力（Computer Use / Browser Use）**：占比最高。截图失败、来源授权不生效、工具被禁用、原生工具缺失（#51149、#55285、#55756）——Windows 平台尤为集中。
- **MCP 生态成熟度**：Issue 侧有浏览器控制 MCP 首启卡死（#55650），PR 侧则是今日最密集的改进方向（OAuth、企业认证、性能），官方投入明显。
- **配额与成本透明度**：token 双重计数、242M token 失控消耗、容量错误循环，用户强烈要求可预测的用量与配额模型。
- **多代理/子代理（subagent）稳定性**：审批模式降级、跨线程通信失败、token 失控，子代理编排是故障高发区。
- **BYOK / 自定义模型支持**：Work mode 阻塞（#54841）、切换 provider 后 `invalid_encrypted_content`（#53713）。
- **Codex Cloud 网络策略**：内部代理连接失败、Azure Blob 白名单被拒（#54179、#50612）。

---

## 六、开发者关注点（痛点总结）

1. **Windows 是一等公民但体验最差**：今日 30 条热点 Issue 中约半数标记 `windows-os`，覆盖沙箱（CreateRestrictedToken failed: 87）、UI、进程风暴等。
2. **长上下文与配额计量不准确**：双重计入推理 token 导致提前压缩，直接影响重度用户生产力。
3. **状态/授权持久化脆弱**：全局状态解析失败导致本地项目消失（#55755）、会话历史 UUID 不匹配（#43422）、授权刷新后丢失。
4. **CI/自动化场景支持不足**：`codex exec` 在非 TTY 管道下无限挂起（#20919）、`--json` 输出缺 `command_execution` 事件（#47433），影响将 Codex 嵌入流水线的开发者。
5. **模型行为可靠性**：指令遵循失败与虚假任务完成报告（#55741），提示模型侧与工具侧需要更好的对齐反馈机制。

---
*本报告基于 GitHub 公开数据自动整理，仅供参考。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-21）

## 1. 今日速览

今日发布 **v0.65.0 稳定版** 和 **v0.66.0-preview.0** 预览版，重点修复了不可信目录下的只读工作区设置和会话恢复时的重复工具响应问题。社区 PR 活跃，新增 **Gemini 4 Argon 模型支持**（#29737）、IDE companion 容器沙箱桥接（#29858）等重要功能。Issue 区 Subagent 相关问题持续占据热点，包括子代理挂起、MAX_TURNS 误报成功等 P1 级 bug。

---

## 2. 版本发布

### v0.65.0（稳定版）
- **fix(cli)**: 在不可信文件夹中强制执行只读工作区设置，提升安全性
- **fix(core)**: 修复恢复会话时出现重复工具响应 turn 的问题
- [Release 链接](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0)

### v0.66.0-preview.0（预览版）
- 更新 ROADMAP.md，移除过时的 2025 路线图
- 版本号例行提升
- [Release 链接](https://github.com/google-gemini/gemini-cli/releases/tag/v0.66.0-preview.0)

### v0.67.0-nightly（每夜版）
- **chore**: 将 gsutil 迁移到 gcloud storage
- **fix(core)**: 在 shell 和 git 环境中保留用户级 `~/.gitconfig`，修复容器/沙箱场景下 git 配置丢失问题

---

## 3. 社区热点 Issues

### 🔴 P1 高优先级

**1. Subagent 达到 MAX_TURNS 后误报 GOAL 成功** — [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
`codebase_investigator` 子代理在触及最大轮次限制、未做任何分析时，仍报告 `status: "success"`，掩盖了实际中断。13 条评论，属可靠性核心问题。

**2. Generalist agent 无限挂起** — [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
CLI 委托给 generalist agent 后永久挂起（用户等待长达 1 小时），简单如创建文件夹也会卡死。8 个 👍，用户反馈强烈，临时方案是提示模型不使用子代理。

**3. get-shit-done output hook 导致崩溃** — [#22186](https://github.com/google-gemini/gemini-cli/issues/22186)
GSD 输出快完成（打印用户摘要）时反复崩溃，影响该模式可用性。

**4. bugreport 缺少子代理上下文** — [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)
`/bug` 报告仅包含主会话信息，无法诊断子代理内部问题，加大排障难度。

### 🟡 P2/P3 值得关注

**5. Gemini 不会主动使用 skills 和 sub-agents** — [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
用户反映即使有高度相关的自定义 skill（如 gradle、git），模型也不会自主调用，需显式指令。

**6. Zero-Dependency OS 沙箱 + 后执行意图路由** — [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)
利用 Gemini 3 原生 bash 能力（grep/sed/awk 链式调用）同时兼顾安全性的大型增强提案，9 条评论。

**7. AST 感知文件读取/搜索/映射评估** — [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
EPIC 级调研：用 AST 工具精确读取方法边界，减少 token 噪音与错位读取。配套子项 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#22747](https://github.com/google-gemini/gemini-cli/issues/22747) 推荐评估 tilth/glyph/ast-grep。

**8. Browser Agent 忽略 settings.json 覆盖配置** — [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
`AgentRegistry` 正确合并配置但 Browser Agent 运行时完全忽略（如 maxTurns）。相关：浏览器会话锁自动接管需求 [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)。

**9. 超过 128 个工具触发 400 错误** — [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
重度 MCP/扩展用户的核心痛点，需更智能的工具作用域裁剪。

**10. 'Tactful Extraction' 节省 token 的外科式读取** — [#19561](https://github.com/google-gemini/gemini-cli/issues/19561)
当前基线约 36.6k tokens/turn，大文件读取导致上下文膨胀（+15k/turn），提议建立 grep 优先的分级代码发现体系。

---

## 4. 重要 PR 进展

**1. feat(models): Gemini 4 Argon 模型支持** — [#29737](https://github.com/google-gemini/gemini-cli/pull/29737) 🟢 OPEN
注册 `gemini-4-argon` 为可选模型，配置基于 chat-base-3 别名扩展。

**2. feat(cli): IDE companion 容器沙箱桥接（exec stdio）** — [#29858](https://github.com/google-gemini/gemini-cli/pull/29858) 🟢 OPEN (XL)
修复 `GEMINI_SANDBOX=docker|podman|runsc` 下 IDE 集成（/ide、文件上下文、原生 diff）完全不可用的问题。是 #29597/#29665/#29748 系列修复的最终方案。

**3. fix(core): YOLO/AUTO_EDIT 模式下重定向 shell 命令强制降级** — [#29648](https://github.com/google-gemini/gemini-cli/pull/29648) 🔴 已合并 (P1 安全)
修复含重定向（`>`、heredoc 等）的命令绕过 `ASK_USER` 降级的安全漏洞，修复 #29310。

**4. fix(cli): 任务树中显示执行中的子代理工具调用** — [#29859](https://github.com/google-gemini/gemini-cli/pull/29859) 🟢 OPEN
修复子代理执行期间任务树显示空白的问题，直接关联 #21409 的可观测性痛点。

**5. fix(cli): 非交互模式下的信号终止与取消处理** — [#29849](https://github.com/google-gemini/gemini-cli/pull/29849) 🟢 OPEN
修复 headless 模式收到 SIGINT/SIGTERM 后仍执行本地 shell 副作用并重复提交工具结果的问题。对 CI/CD 场景关键。

**6. fix(extensions): 仅剥离尾部 .git 后缀** — [#29652](https://github.com/google-gemini/gemini-cli/pull/29652) 🔴 已合并
修复 `blog.github.io` 被误解析为 `hub.io` 导致扩展安装失败的经典 replace bug。

**7. fix(cli): 扩展 downloadFile 流错误处理** — [#29735](https://github.com/google-gemini/gemini-cli/pull/29735) 🟢 OPEN
处理 HTTP 响应流与写入流失败，清理半成品文件，promise 精确 reject 一次。

**8. chore(deps): npm 依赖批量升级（74 项）** — [#29664](https://github.com/google-gemini/gemini-cli/pull/29664) 🟢 OPEN (P1)
含 MCP SDK 1.23.0→1.32.1、@octokit/rest 等大规模更新。

**9. fix(core): 保留用户级 ~/.gitconfig** — [#29832](https://github.com/google-gemini/gemini-cli/pull/29832) 🔴 已发布于 nightly
沙箱/shell 环境不再丢失用户 git 身份配置。

**10. test: OSS VRP 秘密隔离 PoC** — [#29855](https://github.com/google-gemini/gemini-cli/pull/29855) 🔴 已关闭（请勿合并）
Google OSS VRP 安全研究 PoC，验证 E2E 环境中 API key 泄露风险面。

---

## 5. 功能需求趋势

| 方向 | 代表 Issue | 趋势解读 |
|---|---|---|
| **Subagent 可靠性与可观测性** | #22323, #21409, #21968, #22598, #21763 | 最强主线：挂起、误报成功、不主动调用、轨迹不可见，社区呼吁全面加固 |
| **沙箱与安全** | #19873, #22672, #29648 | OS 级零依赖沙箱、破坏性命令防护、审批模式收紧并行推进 |
| **AST 感知工具链** | #22745/46/47 | 官方主导调研 tilth/glyph/ast-grep，追求精准读取与 token 节省 |
| **Token 效率** | #19561, #18836 | "Tactful Extraction" 分级读取、文件化任务追踪替代 in-context todo |
| **浏览器代理健壮性** | #22267, #22232, #21983 | 配置覆盖失效、会话锁恢复、Wayland 兼容性 |
| **并行子代理协作** | #18287, #20195 | 共享内存/并行执行仍处规划早期，是长期方向 |
| **新模型接入** | PR #29737 | Gemini 4 Argon 支持已提交，预示下一代模型发布临近 |

---

## 6. 开发者关注点

1. **Subagent 挂起是最大痛点**：generalist agent 无限挂起（#21409）已促使部分用户主动禁用子代理，直接影响日常工作流信任度。
2. **Token 成本焦虑**：36.6k/turn 的基线开销与大文件"firehose"读取促使社区强烈关注 AST/外科式读取方案。
3. **Headless/CI 场景信号处理**：取消后仍执行副作用命令（PR #29849）对自动化流水线是安全隐患。
4. **配置一致性**：Browser Agent 忽略 settings.json、symlink 代理不被识别（#20079），配置分散导致行为不可预期。
5. **安全边界持续收紧**：今日合入的重定向命令降级修复（#29648）和 gitconfig 保留（#29832）表明团队正系统性修补沙箱旁路。
6. **IDE + 沙箱兼容性**：容器沙箱下 IDE 集成长期不可用，#29858 的 stdio 桥接方案值得容器化用户持续跟踪。

---
*数据来源：github.com/google-gemini/gemini-cli | 统计窗口：2026-10-20 ~ 2026-10-21*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-10-21）

## 1. 今日速览

过去 24 小时 Copilot CLI 连发三个版本（v1.0.101 / 1.0.101-1 / 1.0.102-0），重点改进沙箱代理兼容性、会话恢复速度和子代理结构化输出。社区方面，**权限系统**（沙箱、审批、代理）依然是问题最集中的区域，多个沙箱相关回归已被快速修复关闭。另有用户正式提出建立 **Stable 稳定发布通道** 的诉求，反映快速迭代带来的回归疲劳。

## 2. 版本发布

### v1.0.102-0
- **改进**：沙箱网络流量继承宿主代理设置时遵循 `NO_PROXY` / `ALL_PROXY`
- **修复**：
  - 插件市场支持 git-subdir 源和长描述
  - Fish shell 补全兼容 `--effort` 等选项别名

### v1.0.101
- 为支持的模型上的动态工作流子代理提供原生结构化输出
- 新增 `assistedApprovalInstructions` 设置，引导 Assisted Permissions 审批决策
- 创建并进入目录的 shell 命令改为请求路径审批（而非提前拒绝）

### v1.0.101-1
- 恢复会话时更快显示对话，不再等待占位环境初始化
- 沙箱化 MCP server 启动避免不必要的重启
- `/config` 和 `/settings` 支持设置/取消 `showReasoning`

## 3. 社区热点 Issues

1. **#5105** [已关闭] macOS 沙箱阻止 Gradle daemon 连接 — 即使允许本地网络，Gradle 客户端仍无法连接 daemon（`java.net.Socket` 异常）。6 条评论，属沙箱网络高频痛点，已随新版本修复关闭。
2. **#2955** `/allow-all` 不抑制 bash 执行确认 — 核心权限体验问题，自 4 月持续开放，社区持续跟进。
3. **#4203** MCP OAuth 过期 token 强制交互式重登 — 明明有有效 refresh_token 却不走静默刷新（RFC 6749 §6），3 👍，企业用户痛点。
4. **#4065** 数据外泄防护过于激进 — 合法 spec 文件中 `${env.AUTH_TOKEN}` 等内容被误拦，3 👍。
5. **#5203** 请求稳定发布通道 — 用户明确指出快速迭代引入回归影响日常使用，建议 Stable/Beta 分轨。值得产品侧重视。
6. **#5176** [已关闭] Linux 沙箱 ~10 秒后 SIGKILL 长命令 — bwrap 父进程死亡信号绑定到已退出线程，已修复。
7. **#5199** [已关闭] Linux 沙箱代理链忽略 `NO_PROXY` — 与 v1.0.102-0 的修复直接对应，修复闭环迅速。
8. **#5177** 回归：harness 迁移后仓库级 Git 命令不再请求审批 — 安全相关回归，`git add/push` 等静默执行，优先级应较高。
9. **#5173** `cd` 进新建目录的命令被硬拒绝（"unusable session working directory"）— v1.0.101 修复针对此类场景，可验证是否解决。
10. **#5205** 上下文窗口 rollover 失败：缺少 checkpoint.md — 长会话崩溃，影响自动化 agent 场景可靠性。

其他值得留意：#5192（ACP 模式 MCP OAuth token 不持久化）、#5207（Windows 沙箱非系统盘目录不可访问）、#5171（NumLock-off 数字键盘失效，标注回归）。

## 4. 重要 PR 进展

过去 24 小时无 PR 更新，本节省略。

## 5. 功能需求趋势

- **权限与沙箱体验**：最集中的方向，涉及代理穿透、Git 命令审批、shell guard 误杀（#5214）等
- **MCP / OAuth 可靠性**：token 缓存复用、静默刷新、ACP 持久化（#4695、#4203、#5192、#5209）
- **模型灵活性**：BYOM 支持 Gemini provider（#2560）、启动时模型选择被管理员策略覆盖（#5213）
- **UI/交互可配置性**：自定义键位（#5211）、时间线默认展开（#2959）、token 计数显示（#2808，5 👍）
- **发布工程**：稳定通道诉求（#5203）
- **会话/上下文管理**：上下文 rollover 稳定性（#5205）、`/ask` 后续追问与 fork（#5215）

## 6. 开发者关注点

1. **权限系统可靠性是最大痛点**：从 `/allow-all` 失效、resumed session 静默拒绝（#5206）到 Git 命令审批回归（#5177），权限「该拦不拦、不该拦乱拦」两类问题并存，直接影响信任与效率。
2. **沙箱在企业环境的兼容性**：代理（NO_PROXY/ALL_PROXY）、跨盘符、Gradle/长进程等场景问题密集，本周版本已修复多个，但 Windows 非系统盘问题仍开放。
3. **MCP OAuth 生命周期管理**：token 不复用、不持久化、不静默刷新，是多会话/无头场景的核心摩擦。
4. **快速迭代 vs 稳定性**：连续多个回归（#5171、#5173、#5177）催生稳定通道请求，社区对发布节奏的容忍度在下降。
5. **无头/自动化模式成熟度**：headless JSON-RPC 错误缺乏 errorCode（#5201）、ACP token 问题、后台 agent 重试死循环（#5210），表明非交互场景仍需打磨。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-10-21）

## 一、今日速览

今日无新版本发布，但社区活动非常活跃：50 个 Issues 与 50 个 PR 在过去 24 小时内更新。核心贡献者 @kitlangton 密集提交了多个 Desktop App 交互改进 PR（队列消息编辑、标签页同步优化、文件树性能重构），@rekram1-node 则发起了 `packages/ai` 的一系列类型安全重构。新报告了两个值得警惕的 V2 回归问题：Windows 上 skill 目录加载失效、以及子代理 "ask" 权限静默失败。

## 二、版本发布

过去 24 小时无新 Release。

## 三、社区热点 Issues

1. **[#57603](https://github.com/anomalyco/opencode/issues/57603) 子代理写权限 "ask" 模式静默失败（V2 回归）**
   主代理委托子代理执行写操作时，`ask` 权限既不弹窗也不报错，直接静默失败。V1 正常、V2 失效，属于权限模型的严重回归，影响多代理工作流的安全性。

2. **[#57524](https://github.com/anomalyco/opencode/issues/57524) Windows 下 `/api/skill` 返回空数组（2.0.32，已复现）**
   配置了 skill roots 的情况下，Windows 返回 `{"data": []}`，而 macOS 同配置返回 48 条。10-18 日的会话还能加载，现在两台 Windows 机器均无法加载任何 skill。

3. **[#57621](https://github.com/anomalyco/opencode/issues/57621) 附加 4K PNG 导致 TUI 卡死并杀死所有终端会话**
   粘贴/附加大图片（或大块剪贴板内容）会让整台机器上的终端窗口全部失去响应。影响面大，正在 triage。

4. **[#57515](https://github.com/anomalyco/opencode/issues/57515) 复合命令中相对 `cd` 触发幽灵 external_directory 提示（已复现）**
   `cd ../backend` 这类相对路径会触发“访问项目外目录”确认，即使该目录实际可达。误报会打断自动化流程。

5. **[#50322](https://github.com/anomalyco/opencode/issues/50322) `/models` 选择器隐藏配置文件声明的 provider 名称**
   通过 `opencode.jsonc` 内联 `settings.apiKey` 定义的 provider，在 TUI 模型选择器中不显示 provider 标签，自定义多 provider 用户难以区分模型归属。已有对应修复 PR #57007。

6. **[#55250](https://github.com/anomalyco/opencode/issues/55250) 网络重连后误报 "Session location unavailable"（已复现）**
   短暂断网后 TUI 弹出会话目录恢复提示，即使目录完全正常。选回同一目录即可恢复，但对不稳定网络环境用户是高频干扰。

7. **[#32132](https://github.com/anomalyco/opencode/issues/32132) 子代理中途终止却报告 "completed"**
   子代理未完成即终止，父代理收到截断输出但状态为成功。输出量远低于 50KB/2000 行截断上限，说明是逻辑性早停，可靠性隐患。

8. **[#56657](https://github.com/anomalyco/opencode/issues/56657) V2 无法屏蔽 `.claude` 目录下的 skills 自动加载**
   V1 的环境变量开关未被 V2 继承，与其他 harness 共存的用户无法阻止 skills 交叉加载，存在提示词污染风险。

9. **[#57620](https://github.com/anomalyco/opencode/issues/57620) 桌面端 Mermaid 图表请求平移/缩放**
   新功能请求：当前 Mermaid 渲染为固定宽度静态 SVG，大图无法浏览，希望增加 pan/zoom。

10. **[#57259](https://github.com/anomalyco/opencode/issues/57259) 请求 `--model` 参数启动 TUI**
    V2 的 `opencode` 命令不接受 `--model`/`-m` 启动全屏 TUI 并预选模型，属于高频 CLI 工作流断点。

## 四、重要 PR 进展

1. **[#57559](https://github.com/anomalyco/opencode/pull/57559) Questions/权限/队列消息从 composer 弹性生长（@kitlangton）**
   重大 UI 改进：问答、权限确认、排队消息出现时不再单帧跳变，区域以弹簧动画展开，timeline 锁定不抖动。

2. **[#57569](https://github.com/anomalyco/opencode/pull/57569) 修复服务器繁忙时队列消息不可编辑（@kitlangton）**
   15 个子代理压满服务器时，队列中带图消息点击无响应。修复了编辑流中“所有队列操作等待同一 mutation”等三个 bug。

3. **[#57617](https://github.com/anomalyco/opencode/pull/57617) 推迟非活动标签同步，避免重启时冷启动（@kitlangton）**
   跳过非活动 tab 的挂载即同步，将 `session.sync`/`pending.sync` 等后台同步推迟到活动会话 tab 就绪后执行，直接改善启动性能。

4. **[#57573](https://github.com/anomalyco/opencode/pull/57573) 文件树迁移至 @pierre/trees（@kitlangton）**
   Desktop 文件树（Review 面板与文件浏览器）从自有实现迁移到 `@pierre/trees` beta.6，性能重构。

5. **[#57007](https://github.com/anomalyco/opencode/pull/57007) TUI 识别配置文件定义的 providers（@OpeOginni）**
   修复 #49309，让 config-only provider（无 integration 连接、仅内联 apiKey）在 UI 中正确标识，关联 Issue #50322 的痛点。

6. **[#55295](https://github.com/anomalyco/opencode/pull/55295) IME 输入法组合期间保持 composer 静默（@Mirac1eSky）**
   将 V1 的 IME 修复移植到 V2 composer，修复中文/日文等输入法 composing 期间误触发快捷操作的问题。CJK 用户重点关注。

7. **[#57618](https://github.com/anomalyco/opencode/pull/57618) V1 迁移时解析相对目录（@MohammadAlMasalmeh）**
   修复 `directory: "."` 的 V1 会话在每次启动时卡在同一行的迁移死循环。

8. **[#51939](https://github.com/anomalyco/opencode/pull/51939) 标题生成使用最低模型变体（@rekram1-node）**
   Provider 无小模型时，标题生成此前会用会话主模型按完整变体运行（含 reasoning 成本），此修复降低无谓开销。

9. **[#57598](https://github.com/anomalyco/opencode/pull/57598) 设置页支持从侧栏滚动（@Hona）**
   小而实用的 UX 修复：鼠标悬停在 settings gutter/侧栏上时也可滚动设置页。

10. **[#57606](https://github.com/anomalyco/opencode/pull/57606) 等系列 `packages/ai` 类型安全重构（@rekram1-node）**
    一天内提交约 9 个重构 PR：收紧 protocol schema、消除 `as` 强转、去重 JSON/URL 工具函数、移除未用的 WebSocket jsonTransport、Bedrock 事件流类型化等，系统性清理 AI 层的类型债务。

## 五、功能需求趋势

- **多代理（subagent）可靠性**：权限静默失败、虚假 completed、后台代理导致 TUI 卡顿——多代理是核心场景，但 V2 的权限与稳定性欠账明显。
- **V1→V2 迁移兼容**：skills 屏蔽开关丢失、`session`/`session_v2` 分裂、相对目录迁移死循环，迁移体验是当前高频摩擦点。
- **桌面端 UX 打磨**：多项目管理、标签页识别、Mermaid 交互、问题撤销（#42403）——重度用户的桌面端体验诉求集中。
- **跨终端/跨平台一致性**：Windows 专属 bug（#57524）、Warp/CSI-u 按键兼容（#43051）、IME 输入（#55295），长尾平台问题持续累积。
- **成本与模型配置**：标题生成降级到小模型、`max_tokens` 超限、`/models` 选择器信息缺失，用户对 token 成本和模型可观测性敏感。

## 六、开发者关注点

1. **V2 回归风险**：多个 V1 正常的功能（权限 ask、skills 屏蔽、`--model` 参数）在 V2 缺失或失效，建议迁移前做权限与 skills 行为验证。
2. **多代理 + 高负载下的 UI 响应性**：后台子代理满载会冻结 TUI（#43891）、队列消息不可编辑，团队正在通过 PR #57569/#57617 系统性优化。
3. **网络不稳定环境**：断线重连误报会话目录不可用（#55250），远程/移动办公用户受影响较大。
4. **类型安全债务清偿中**：`packages/ai` 的批量重构说明协议层此前存在大量运行时检查和强转，外部插件开发者需关注接口收紧带来的兼容性变化。
5. **Windows 平台成熟度滞后**：skill 加载、下载速度等 Windows 专属问题反复出现，Windows 用户建议关注 2.0.32 之后的修复节奏。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-21）

## 📰 今日速览

Qwen Code 发布 **v0.25.4-preview.1**，引入 daemon 会话级 Skill/Extension 刷新能力。社区聚焦三大方向：**Web Shell/daemon 体验优化**（远程连接、初始化超时、离线恢复）、**memory 子系统治理**（静默丢弃、提取节奏）以及 **CI 稳定性治理**（Managed Agent gate 大量失败与修复）。桌面端连接远程 daemon 的可用性问题成为新热点。

---

## 🚀 版本发布

**v0.25.4-preview.1**（同日还有 preview.0 及 nightly 构建）
- feat(daemon): 支持会话级（session-targeted）Skill 与 Extension 刷新 — [PR #14050](https://github.com/QwenLM/qwen-code/pull/14050)
- fix(managed-agent): 限制初始发布相关行为（bounded initial publication）

> Preview 连发两个版本，说明 daemon 侧 Skill/Extension 能力正在密集迭代中。

---

## 🔥 社区热点 Issues（Top 10）

1. **#13787** [P3] XML tool-call 恢复在多调用大响应中重复前缀扫描，延迟显著 — 8 条评论持续讨论，附带了复现基准数据，直接关联 [PR #13579](https://github.com/QwenLM/qwen-code/pull/13579)，是当前性能治理焦点。[链接](https://github.com/QwenLM/qwen-code/issues/13787)

2. **#12668** [P1] 自更新导致内置 ripgrep 丢失执行权限位，spawn 报 EACCES — P1 级平台 bug，npm 更新机制破坏二进制可用性，影响面广。[链接](https://github.com/QwenLM/qwen-code/issues/12668)

3. **#14977** [P2] Windows 下 `qwen serve` 冷启动 POST /session 超时（AcpSessionBridge initialize timed out）— workspace 扫描阻塞事件循环 + 初始化预算过紧，Web UI 首会话创建失败。当日新报，已有对应修复 PR #14985。[链接](https://github.com/QwenLM/qwen-code/issues/14977)

4. **#14976** [P2] always-on context token 估算错误，且建议无法降低实际数字 — 计量准确性问题影响用户对上下文预算的信任。[链接](https://github.com/QwenLM/qwen-code/issues/14976)

5. **#14032** [P2] `/mcp` 面板将有状态 HTTP Streamable MCP 误报 disconnected，Reconnect 失败但实际工具调用正常 — 状态显示与真实连接状态不一致的典型问题。[链接](https://github.com/QwenLM/qwen-code/issues/14032)

6. **#14939** [P2] 桌面客户端无法连接远程 `qwen serve` daemon，除非 `--allow-origin '*'` — LAN 部署被 CORS 403 拦截，暴露了 daemon 安全配置模型的缺口。[链接](https://github.com/QwenLM/qwen-code/issues/14939)

7. **#13749** [P2] 请求实现 Claude Code 风格的 Mod runtime（register/on API 兼容）— 生态兼容性方向的标志性需求，已 ready-for-human。[链接](https://github.com/QwenLM/qwen-code/issues/13749)

8. **#14877** [P2] memory writer 静默丢弃超预算索引条目，且丢弃的是最旧记忆 — 数据丢失型 bug，配合 #13612/#13640 显示 memory 子系统正在系统化补强。[链接](https://github.com/QwenLM/qwen-code/issues/14877)

9. **#14979** [P2] 改进 edit tool，移植 dsh-better-edit 理念替代 read/edit — 用户直言"edit 是工作流中最差的一环"，old_text 精确匹配是高频痛点。[链接](https://github.com/QwenLM/qwen-code/issues/14979)

10. **#14973** [P2] PR #14129（跳过未变更的 UserPromptSubmit hook 上下文注入）遗留 13 条审查意见 — 体现社区高质量 review 文化。[链接](https://github.com/QwenLM/qwen-code/issues/14973)

> CI 噪音提示：过去 24 小时出现约 10 条 Managed Agent gate 失败 issue（#14940-#14958），多数已关闭，与 #14912/#14965 的 host-lock 排队改造相关。

---

## 🔧 重要 PR 进展（Top 10）

1. **#14985** [fix(daemon)] 为 ACP initialize 握手分配独立启动预算，冷启动慢时不再饿死握手 — 直接响应 #14977。[链接](https://github.com/QwenLM/qwen-code/pull/14985)

2. **#14934** [fix(cli)] standalone 更新时保留 Node/Bun 运行时边界与 registry、代理、CA 配置。[链接](https://github.com/QwenLM/qwen-code/pull/14934)

3. **#14980** [fix(web-shell)] 断网时暂停业务请求与重连循环，通过有界恢复探测自动恢复。[链接](https://github.com/QwenLM/qwen-code/pull/14980)

4. **#14930** [feat(managed-agent)] Managed Workspace 会话创建时可导入已启用 Skills。[链接](https://github.com/QwenLM/qwen-code/pull/14930)

5. **#14876** [feat(workflow)] 为人类提交添加单轮 Workflow 提示，覆盖终端/IDE/Web/SDK。[链接](https://github.com/QwenLM/qwen-code/pull/14876)

6. **#14846** [feat(cua)] 精简 Computer Use 契约并移植原生可靠性修复（元素 ID、输入调度共享驱动）。[链接](https://github.com/QwenLM/qwen-code/pull/14846)

7. **#13579** [fix(core)] 恢复参数中引用其他调用的外层 XML tool call — 关联性能热点 #13787。[链接](https://github.com/QwenLM/qwen-code/pull/13579)

8. **#14172** [feat(cli)] Linux 下 Ctrl+V 粘贴剪贴板文本 — 填补 TUI 仅支持图片粘贴的空白。[链接](https://github.com/QwenLM/qwen-code/pull/14172)

9. **#14912 / #14965** [fix(ci)] sdk-java host lock 改为先到先得票据队列，fast tier 优先 — 集中治理 CI 不稳定。[链接](https://github.com/QwenLM/qwen-code/pull/14912) | [链接](https://github.com/QwenLM/qwen-code/pull/14965)

10. **#14904 / #14984** [feat(web-shell)] Web Shell 统一最近会话侧边栏 + 轨迹记录详情页重构 — Web Shell UI 迭代明显加速。[链接](https://github.com/QwenLM/qwen-code/pull/14904) | [链接](https://github.com/QwenLM/qwen-code/pull/14984)

---

## 📈 功能需求趋势

- **Web Shell / daemon 体验**：远程连接、会话管理、离线恢复、UI 重构（#14904/#14984/#14939/#14947），是本期最活跃方向
- **Memory 子系统治理**：提取节奏、静默丢弃、测试覆盖成体系跟进（#13571/#13612/#13640/#14877）
- **生态兼容**：Claude Code Mod runtime、Claude Mods 复用（#13749），降低迁移成本诉求明显
- **工具可靠性**：edit tool 体验重构（#14979）、XML tool-call 解析性能与正确性（#13787/#13579）
- **CI/测试工程化**：fault gates（FG11d/FG13e/FG13f 系列）、host-lock 排队、测试隔离
- **桌面/远程部署**：连接持久化、token 记忆（#14947）

---

## 🎯 开发者关注点（痛点汇总）

1. **初始化/启动超时**：Windows 冷启动、ACP 握手预算共享导致 504（#14977，PR #14985）
2. **更新机制破坏环境**：ripgrep 执行位丢失（#12668）、运行时配置保留（#14934）
3. **token 计量不准**：上下文警告数字与实际不符且建议无效（#14976）
4. **状态显示与真实状态脱节**：/mcp 面板误报（#14032）
5. **远程访问配置门槛高**：CORS/allow-origin 交互对普通用户不友好（#14939）
6. **edit 工具匹配失败率高**：exact old_text 匹配成为日常摩擦点（#14979）

---

*数据来源：github.com/QwenLM/qwen-code · 统计窗口 2026-10-21 前 24 小时*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-10-21

## 今日速览

过去 24 小时无新版本发布，社区重心集中在 v0.10.2 的打磨上：贡献者 @Lstarsky0 密集提交多个 TUI 细节修复 PR，核心维护者 @Hmbown 同步更新多个 tracking issue 的 0.10.1 状态。用户侧最突出的痛点仍是会话持久化（resume/fork）和上下文压缩相关的缺陷。`/model` 选择器的严重性能冻结问题已修复合入。

---

## 社区热点 Issues

1. **#6978** — Turn snapshots 失败报错 "git commit-tree failed"，且旧用户回合被重复投递，自 10-12 起影响 0.10.0 长会话用户（Windows 11，99 MB 会话无法保留）。9 条评论，属于回滚 0.10.1 后暴露的持久化核心缺陷。[链接](https://github.com/codewhale-hq/Codewhale/issues/6978)

2. **#6981** — 上下文压缩失败："Chat API response missing choices"，新会话同样触发，8 条评论，是当前最高活跃度的运行时 bug。[链接](https://github.com/codewhale-hq/Codewhale/issues/6981)

3. **#6094** — v0.10.2 官方 tracking issue：已有 13 个贡献者 PR 以独立 PR 形式合入（保留原作者），最新为 #6977。关注 0.10.2 的开发者应以此为入口。[链接](https://github.com/codewhale-hq/Codewhale/issues/6094)

4. **#6955** — 超过 8 MiB 的会话文档无法 resume/fork，且报错未给出补救路径（journal 是超限主因）。与 #6842（journal 无上限）相关联。[链接](https://github.com/codewhale-hq/Codewhale/issues/6955)

5. **#6954** — resume 拒绝任何包含原始 sub-agent 交接记录的会话，canonical acknowledgement 校验逻辑与保存文档不一致。与 #6955 同为会话恢复类缺陷。[链接](https://github.com/codewhale-hq/Codewhale/issues/6954)

6. **#6050** — 可插拔 agent memory 架构提案：当前 `MemoryBackend` 仅 Native/Off，建议提供通用后端接口并以 causal-memory/mem0 为参考实现。架构层面的重要讨论。[链接](https://github.com/codewhale-hq/Codewhale/issues/6050)

7. **#4955** — macOS 用户请求零沙箱 / `--no-sandbox` 模式：内核级 Seatbelt 沙箱日常阻断基本 shell 命令，长期未解决的用户痛点。[链接](https://github.com/codewhale-hq/Codewhale/issues/4955)

8. **#5860** — 对话中的持续自学习（自动技能演化）：让 agent 自动从重复问题中提取模式写入 SKILL.md，而非依赖手工维护。[链接](https://github.com/codewhale-hq/Codewhale/issues/5860)

9. **#6923** —（已关闭）Gemini 429 错误时应等待并自动重试，而非直接终止任务。已处理，反映 provider 限流处理策略的改进方向。[链接](https://github.com/codewhale-hq/Codewhale/issues/6923)

10. **#6526** — standing-instruction 预算（48 KB 硬编码）缺少可配置项，且裁剪/丢弃对用户不可见。可观测性 + 可配置性的典型诉求。[链接](https://github.com/codewhale-hq/Codewhale/issues/6526)

---

## 重要 PR 进展

1. **#7026**（已合入）— **性能修复**：`/model` 打开时 TUI 冻结 3-4 秒（52 路由 / 3,444 行目录），现降至约 150 ms。四个独立原因逐一修复。[链接](https://github.com/codewhale-hq/Codewhale/pull/7026)

2. **#7009** — 重构：13 个核心导航命令（`/anchor`、`/help`、`/transcript` 等）迁移至可移植 command Shapes，为后续 crate 抽取铺路。[链接](https://github.com/codewhale-hq/Codewhale/pull/7009)

3. **#7033** — 修复 to-do 行标题过长时状态词被截断的问题（80×24 终端）。[链接](https://github.com/codewhale-hq/Codewhale/pull/7033)

4. **#7034** — 修复 approval footer 分隔符错位（开头悬空点、尾部提示粘连）。[链接](https://github.com/codewhale-hq/Codewhale/pull/7034)

5. **#7030** — 修复 markdown 渲染中嵌套列表缩进丢失、全部拍平的问题。[链接](https://github.com/codewhale-hq/Codewhale/pull/7030)

6. **#7029**（已合入）— 修复 /keys（Hotbar setup）宽终端下描述列过窄的布局问题。[链接](https://github.com/codewhale-hq/Codewhale/pull/7029)

7. **#7028**（已合入）— /statusline 列表超屏时显示滚动条指示。[链接](https://github.com/codewhale-hq/Codewhale/pull/7028)

8. **#7027**（已合入）— /feedback 选项描述截断时按词边界加省略号。[链接](https://github.com/codewhale-hq/Codewhale/pull/7027)

9. **#7016**（已合入）— CI 修复：缺少 `CNB_GIT_TOKEN` 时跳过 CNB 镜像同步，避免 fork 仓库误报红。[链接](https://github.com/codewhale-hq/Codewhale/pull/7016)

10. **#7032 / #7031**（已关闭）— dependabot 依赖批量升级：MCP TypeScript SDK、follow-redirects、vite 8.3.4（含安全修复）。[链接](https://github.com/codewhale-hq/Codewhale/pull/7032)

---

## 功能需求趋势

- **会话持久化与恢复**：#6954、#6955、#6978 集中反映 resume/fork/snapshot 链路的可靠性问题，是当前最迫切的缺陷集群。
- **上下文管理与压缩**：#6981、#6425、#6426、#6991（fastctx 方案）指向同一主题——压缩可控性、模型可感知的上下文压力信号、token 开销优化。
- **记忆与自学习**：可插拔 memory 后端（#6050）、对话自学习技能演化（#5860）。
- **架构解耦**：TUI/runtime crate 拆分持续推进（#6034、#6937、#6145），0.10.x–0.11 的主线工程。
- **安全与审批体验**：统一 Engine 级审批授权存储（#6481）、Auto-Review 低成本路由（#6480）、macOS 沙箱放宽（#4955）。
- **Provider 兼容性**：自定义 provider 支持 `/responses` 端点（#6997，已关闭）、OAuth 回调窗口延长（#6865，已关闭）。

## 开发者关注点

1. **长会话数据安全**：大体积会话（>8 MiB）无法恢复且无补救指引，snapshot 失败导致旧回合重放——长会话用户面临数据丢失风险。
2. **上下文压缩黑盒**：压缩失败直接导致回合失败，且自动压缩开启时模型对上下文压力零感知。
3. **终端 UI 细节在小屏/窄终端下的表现**：本周大量 PR 集中修复 40-100 列宽度下的截断、滚动指示问题，说明官方在系统性做终端适配 QA。
4. **硬编码限制缺乏可观测性**：instruction 预算、journal 上限、OAuth 等待窗口等固定阈值，用户希望可配置且有明确的失败提示。
5. **`/model` 等界面的性能**：大规模路由/目录配置下的响应性（#7026 已解决，是性能关注度的信号）。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-21

## 1. 今日速览

今日无新版本发布，但 PR 活动密集：**Scaleway 正式成为内置 provider**（#11182/#11181）、**CJK 粗体渲染修复在 TUI 与 HTML 导出双落地**（#10730/#11168），以及多项 prompt cache 保全修复合入。Issues 侧社区持续聚焦**缓存失效、Windows 终端兼容与成本统计准确性**三大痛点。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#6300](https://github.com/earendil-works/pi/issues/6300) Windows TUI 每次按键重绘输入行**（OPEN，17 评论）— 长期未决的 Windows 核心体验 bug，每个字符换行显示，影响面广，持续引发讨论。

2. **[#10895](https://github.com/earendil-works/pi/issues/10895) 系统级配置（MDM）最高优先级**（CLOSED/no-action，15 评论）— 企业安全场景诉求：支持 `/etc/pi/models.json` 等系统级配置，讨论热烈但暂不采纳，值得企业用户持续关注。

3. **[#10628](https://github.com/earendil-works/pi/issues/10628) OSC 52 复制在 tmux 中被吞掉**（OPEN，8 评论，5 👍）— tmux 下 copy-on-select 不做 passthrough 包装，headless SSH 场景复制失效，点赞数最高的 issue 之一。

4. **[#10976](https://github.com/earendil-works/pi/issues/10976) Microsoft Store 版 pwsh 7 回退到 PowerShell 5.1**（OPEN，8 评论）— `where pwsh.exe` 命中 Store 的 app execution alias 假路径，Windows 用户高频踩坑。

5. **[#10956](https://github.com/earendil-works/pi/issues/10956) cacheWarming "idle" 被扩展 hook 静默终止**（OPEN，7 评论）— 扩展处理 turn_end 且上下文含自定义消息后 idle 预热永不触发，直接影响缓存命中率与成本。

6. **[#8752](https://github.com/earendil-works/pi/issues/8752) Bedrock usage.input 未跨模型族归一化**（CLOSED，7 评论，5 👍）— Anthropic 净值 vs OpenAI 系毛值导致假缓存未命中提示、输入成本翻倍计费，企业 Bedrock 用户重点问题。

7. **[#9265](https://github.com/earendil-works/pi/issues/9265) openai-completions 流式工具调用 O(n²) 重解析冻结事件循环**（OPEN，6 评论）— 每 delta 重新解析累积 JSON，多会话单进程嵌入场景下性能瓶颈明确。

8. **[#9980](https://github.com/earendil-works/pi/issues/9980) OpenRouter 热门开源模型成本偏差 2-3 倍**（OPEN，6 评论）— 目录取最便宜 provider 定价，与 PR #11178/#10286 的 totalFromProvider 工作直接相关。

9. **[#11191](https://github.com/earendil-works/pi/issues/11191) mcp.json 含 UTF-8 BOM 解析失败**（CLOSED，P0）— BOM 不可见导致错误指向不明，所有 MCP server 不加载，属高优先级快速修复。

10. **[#10154](https://github.com/earendil-works/pi/issues/10154) 中文粗体在 CJK 标点旁渲染为字面 `**`**（CLOSED）— 长期困扰中日韩用户的渲染问题，今日由 #10730（TUI）+ #11168（HTML 导出）完整关闭。

## 4. 重要 PR 进展

1. **[#11182](https://github.com/earendil-works/pi/pull/11182) 新增 Scaleway provider**（已合入）— Scaleway Generative APIs 作为内置 OpenAI 兼容 provider，支持 `SCW_API_KEY` 与 `/login scaleway`，关闭 #6165。

2. **[#11142](https://github.com/earendil-works/pi/pull/11142) Responses API 工具变更时保留 prompt cache**（已合入，by mitsuhiko）— 修复工具增删后停止增量锚定、顶层重发全量 tools 导致缓存前缀失效的问题。

3. **[#10730](https://github.com/earendil-works/pi/pull/10730) TUI 修复 CJK 粗体渲染**（已合入）— 解决 CommonMark flanking 规则下中文标点旁 `**` 无法闭合的问题。

4. **[#11168](https://github.com/earendil-works/pi/pull/11168) HTML 导出同步修复 CJK 强调渲染**（已合入）— vendor `marked-cjk-friendly` 的 emStrong tokenizer，与 TUI 修复对齐。

5. **[#11185](https://github.com/earendil-works/pi/pull/11185) 未闭合 `$$` 数学块不再吞掉 Markdown 表格**（已合入）— 块级数学 token 不再跨越表格边界。

6. **[#11188](https://github.com/earendil-works/pi/pull/11188) 扩展加载器暴露 pi-ai/models 子路径**（已合入）— 修复扩展（如 clampThinkingLevel）import 公共 /models 子路径报 "Cannot find module"。

7. **[#11164](https://github.com/earendil-works/pi/pull/11164) 修复扩展前置消息导致系统消息定位失败**（已合入）— session_start 阶段 sendMessage 的扩展会使 Anthropic 请求丢失 system 字段与工具锚定。

8. **[#11153](https://github.com/earendil-works/pi/pull/11153) 为 Rex 终端启用 Kitty 图片协议**（已合入）— 与 Rex 团队确认后启用，未来客户端均支持该协议。

9. **[#11178](https://github.com/earendil-works/pi/pull/11178) usage 新增 totalFromProvider 标志**（OPEN）— 区分 provider 实报成本与本地估算成本，是解决 #9980 OpenRouter 成本偏差的地基。

10. **[#11173](https://github.com/earendil-works/pi/pull/11173) openai-codex 目录移除 OpenAI 已下线模型**（已合入）— 顺带发现该目录测试因模型下线长期全红未自动运行的问题。

## 5. 功能需求趋势

- **Prompt cache 保全**：多个 issue/PR 聚焦缓存失效场景（#10956、#11061、#11114、#11142），是当前最集中的工程方向。
- **企业/安全管理**：MDM 系统级配置（#10895）、Copilot Enterprise 模型可见性（#11006）反映企业采用诉求。
- **新 Provider/模型接入**：Scaleway 合入、Ant Ling 模型更新（#10943）、Kimi OAuth 全球化（#9819）、Gemini thought signature 支持（#10157）。
- **Windows 体验**：PowerShell 探测（#10976）、终端异常退出残留状态（#11170）、shell 工具选择偏好（#11049）。
- **成本透明度**：OpenRouter 定价（#9980）与 Bedrock usage 归一化（#8752）推动成本统计准确性。
- **codemode 增强**：schema 类型推断（#11122）、`only` 模式缓存（#11114）、后台任务选项（#11189）。

## 6. 开发者关注点

- **缓存与成本的强关联**：缓存静默失效（扩展 hook、工具变更、系统消息合并）导致成本不可预期，是高级用户最痛的点，近期修复密集但场景仍不断被发现。
- **多运行时/多终端兼容性**：bun 运行时问题（#7244 建议版本号显示 runtime）、tmux/Wayland/Windows Terminal 各有专属 bug，环境矩阵测试压力大。
- **扩展生态的边界情况**：扩展注入消息、并发 confirm 对话框（#11166）、hook 顺序（#9932）等交互问题增多，说明扩展机制趋于成熟但需更强的契约保障。
- **流式性能**：O(n²) 工具参数重解析（#9265）提醒嵌入式/多会话场景对事件循环阻塞极敏感。
- **国际化细节**：CJK 粗体渲染历经多次修复终于闭环，但 mcp.json BOM（#11191）这类编码细节仍会产生 P0 级隐形故障。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-10-21

## 📰 今日速览

oh-my-pi 今日连发两个补丁版本 v18.12.4 / v18.12.5，重点改进 OpenAI 12 小时提示缓存与 Bedrock 原生压缩。社区热度集中在**多智能体编排可靠性**（vibe worker 误判死亡、subagent 报告丢失）和 **18.12 编译版扩展加载失败**等回归问题上。贡献者 @will-bogusz 单日提交多个 bash 工具链优化 PR，@yuzu-octopus 的性能优化系列持续活跃。

---

## 🚀 版本发布

### [v18.12.5](https://github.com/can1357/oh-my-pi/releases)
**@oh-my-pi/pi-ai**
- **新增**：GPT-5.6+ 在 Responses API 上的 OpenAI 12 小时提示缓存支持。`cacheRetention: "long"` 现在会请求 `prompt_cache_options.ttl: "12h"`（替代之前被忽略的旧版 `prompt_cache_retention: "24h"`），`promptCache.ttl` 接受 `"12h"`。

### [v18.12.4](https://github.com/can1357/oh-my-pi/releases)
- **pi-agent-core 修复**：为支持的 Bedrock Claude 模型启用原生压缩（[#16343](https://github.com/can1357/oh-my-pi/pull/16343) by @anatoli-tsinovoy）
- **pi-ai 新增**：`auth.acco...` 中加入可选的 `reclaimAbovePct`（发布说明截断，推测为账户额度回收阈值控制）

---

## 🔥 社区热点 Issues

**1. [#16493](https://github.com/can1357/oh-my-pi/issues/16493) [CLOSED] Codex 提供商全模型 HTTP 404（Windows / 18.12.3）**
ChatGPT Plus 订阅下所有推理请求返回 `{"detail":"Not Found"}`，而官方 Codex 桌面端正常。影响订阅用户核心工作流，当日提出当日关闭，响应迅速。

**2. [#16454](https://github.com/can1357/oh-my-pi/issues/16454) [OPEN] 编译版 18.12 无法加载扩展的 pi-coding-agent 子路径导入**
Linux x64 独立编译版破坏了外部扩展对公共 wildcard 子路径的导入——这是 18.12 的**回归级阻断问题**，扩展生态受影响，需密切关注修复进度。

**3. [#16490](https://github.com/can1357/oh-my-pi/issues/16490) [OPEN] vibe worker 被 steer 误标为“不可恢复”并丢失结果**
director 的 `vibe_send` 在 worker `yield` 后落窗口即触发误判 tombstone，但 worker 实际仍在运行。多智能体编排核心可靠性问题，P2。

**4. [#11809](https://github.com/can1357/oh-my-pi/issues/11809) [CLOSED] Antigravity 429 RESOURCE_EXHAUSTED 持续复现**
28 条评论的长跑 issue，配额健康账户下 `gemini-3.8-flash-high` 仍被无细节 429 拒绝，最终以 duplicate 关闭——Google 提供商配额处理仍是社区长期痛点。

**5. [#16591](https://github.com/can1357/oh-my-pi/issues/16591) [OPEN] /review 在 reftable 仓库失败**
错误信息自己写着"use the CLI fallback"，但 `/review` 代码路径并未回退——典型的自曝式 bug，影响采用新 git ref 存储格式的用户。

**6. [#10600](https://github.com/can1357/oh-my-pi/issues/10600) [OPEN] 自主会话中 advisor 延迟反馈到达时已过时**
审批预授权的长工具链中，第 20 步的 concern 到整个 prompt cycle 结束才送达，将 advisor 推向 blocker 行为。自治模式体验的核心设计问题。

**7. [#14948](https://github.com/can1357/oh-my-pi/issues/14948) [OPEN] RPC 模式隐藏的 todo-error 提醒永久阻塞 session_settled**
失败的 `todo` 调用 + steer 后续注入 = 会话实际空闲但永不报告 settled。对构建 OMP 客户端的 SDK 用户是阻断性问题。

**8. [#15797](https://github.com/can1357/oh-my-pi/issues/15797) [OPEN] 自动压缩过早触发：上下文估算计入了被丢弃的历史 thinking**
chat-completions 不回放推理内容时，262K 窗口在 ~100-230K 实际 token 就触发压缩——白白损失大量可用上下文。

**9. [#16568](https://github.com/can1357/oh-my-pi/issues/16568) [OPEN] Bedrock ARN 上 `:max` 后缀未剥离导致 HTTP 400**
`:low/:medium/:high` 都正常，唯独 `:max` 被当作模型 ID 的一部分发送，边界情况处理遗漏。

**10. [#14597](https://github.com/can1357/oh-my-pi/issues/14597) [OPEN] 用户可指令的 Overseer 监督智能体需求**
社区持续呼吁“监督层”智能体：观察主智能体输出、按用户完成标准决定是否收工。与 #7731（对标 Hermes Agent 自改进循环）共同反映社区对**更高级编排能力**的期待。

---

## 🔧 重要 PR 进展

**1. [#16588](https://github.com/can1357/oh-my-pi/pull/16588) fix(pi-shell): diff hunk 中以 `--`/`++` 开头的行不再被误读为文件头 (review:p0)**
被最小化的 diff 列出不存在的文件——解析器现按 hunk 行数对齐。标注 p0，最快合入优先级。

**2. [#16583](https://github.com/can1357/oh-my-pi/pull/16583) fix: subagent 在收尾时收到 peer 消息不再丢失报告 (review:p1)**
peer 消息落在结束窗口时，子智能体只回一句"not for me"丢掉完整报告；现在报告先送达、消息另开 turn 处理。直接对应 #16490 一类编排可靠性问题。

**3. [#15224](https://github.com/can1357/oh-my-pi/pull/15224) perf: main.ts 懒加载非启动路径模块**
启动时 130 个静态导入评估 ~1900 个模块，而首帧只需 ~101 个。启动性能显著优化，@yuzu-octopus 性能系列的核心。

**4. [#16465](https://github.com/can1357/oh-my-pi/pull/16465) fix: 会话 resume 后 memory block 保持稳定 (review:p1)**
之前 resume 会从磁盘重建 memory block，导致其他会话的 learn 调用悄悄改写当前 prompt——同时保护了 prompt cache。

**5. [#16461](https://github.com/can1357/oh-my-pi/pull/16461) fix(catalog): 尊重 LiteLLM 声明的 reasoning 等级 (review:p1)**
发现映射器现读取网关在 `model_info` 中声明的 `reasoning_effort_levels` / `supports_reasoning`，自建网关用户受益。

**6. [#16576](https://github.com/can1357/oh-my-pi/pull/16576) feat: bash 输出行携带行号标签供 edit 锚定**
`grep -n` 找到代码后 edit 被拒的比例从 60% 降低——bash 与 edit 工具之间的闭环补强，很实用的 DX 改进。

**7. [#16589](https://github.com/can1357/oh-my-pi/pull/16589) fix: 16KB 内的 diff/jq/ssh 输出在最小化器中保持完整**
摘要化输出常常迫使模型回头再读原始 artifact，现在小结果直接完整返回，减少工具调用轮次。

**8. [#16196](https://github.com/can1357/oh-my-pi/pull/16196) fix(task): 隔离智能体的后续 turn 变更像首次运行一样落地**
`task.isolation.enabled` 下后续 turn 的变更只在 agent 释放时才被捕获，会话运行期间父 checkout 拿不到。

**9. [#16135](https://github.com/can1357/oh-my-pi/pull/16135) feat: 展示每个 subagent 实际解析的模型及是否降级回退**
之前要解析子会话 JSONL 才能知道，现直接进入 task-result 信封——多智能体可观测性提升。

**10. [#16160](https://github.com/can1357/oh-my-pi/pull/16160) feat: /context 变为可交互的上下文内容检查器**
替代不便的 `/dump`，直接查看实际上下文内容，调试 prompt 的利器。

---

## 📈 功能需求趋势

1. **多智能体编排与监督**：Overseer 监督智能体（#14597）、对标 Hermes 自改进循环（#7731）、advisor 实时介入（#10600）、subagent 可靠性——社区强烈希望 OMP 从“单 agent + 工具”进化为可控的多层编排系统。
2. **提供商覆盖与配额处理**：DeepSeek Responses API + 托管 web_search（#7794）、Antigravity 429、Bedrock ARN 细节、Codex 404——新提供商接入与既有提供商的长尾兼容问题并存。
3. **上下文与缓存经济性**：12h 提示缓存（已发布）、过早压缩（#15797）、parked subagent 缓存失效（#15523）、kimi-k3 成本低估 30%（#16508）——token 成本是持续主题。
4. **SDK / RPC 可编程性**：session_settled 阻塞（#14948）、模型角色枚举与变更 API（#5858）、扩展子路径加载（#16454）——以 OMP 为底座构建上层应用的开发者群体在壮大。
5. **桌面/系统级工具能力**：Windows WinForms 前台抢占（#16572）、Linux 键盘输入被劫持（#15945）——computer 工具的跨平台稳定性仍需打磨。

---

## ⚠️ 开发者关注点

- **18.12 编译版扩展兼容性是当前最紧急的回归**（#16454），使用 standalone 版本 + 扩展的用户建议暂缓升级。
- **自治/长会话模式的边缘状态问题集中爆发**：steer 时序、todo-error 隐藏提醒、yield 窗口竞态——异步消息落点处理是代码库的系统性薄弱区。
- **token 成本可观测性不足**：压缩时机、缓存命中、cacheWrite 计价的不准确让重度用户难以预算控制。
- **性能优化窗口明显**：@yuzu-octopus 系列证明启动路径、session 持久化、流式热路径均有大幅优化空间，欢迎贡献。
- **长跑 issue 的闭环质量**：#11809 以 duplicate 关闭但社区仍有复现报告，Google 提供商问题需要更明确的 root cause 沟通。

---
*数据来源：GitHub can1357/oh-my-pi · 过去 24 小时 Releases / Issues / PRs*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*