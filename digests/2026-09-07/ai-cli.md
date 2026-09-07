# AI CLI 工具社区动态日报 2026-09-07

> 生成时间: 2026-09-07 03:33 UTC | 覆盖工具: 11 个

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
**数据日期：2026-09-07**

---

## 一、生态全景

AI CLI 工具已进入“功能深水区”竞争阶段：基础编码能力趋于同质化，竞争焦点转向**多智能体编排、跨设备/远程工作流、企业合规与安全**三大方向。社区反馈显示，工具间的互操作性诉求明显上升（Kimi 用户要求导入 Codex、Pi 适配 OpenCode 协议变更），同时**安全与隐私类问题**（遥测泄漏、沙箱绕过、权限回归）在多个项目中集中爆发，成为行业性议题。长期稳定性问题（挂起、长会话退化、Windows 平台质量）普遍未根治，说明各家都在“快速堆功能”与“夯实可靠性”之间承压。

---

## 二、各工具活跃度对比

| 工具 | Issue 活动（24h） | PR 活动（24h） | Release | 本日焦点 |
|---|---|---|---|---|
| **Claude Code** | 高（10+ 热点，含 197/130 评论长帖） | 中（10 PR 更新，大量被批量关闭） | ❌ 无 | CVP 误拦截、性能挂起、安全 PR |
| **OpenAI Codex** | 高（10 热点，多个已闭环） | 高（20 PR 合并） | ❌ 无 | Remote-SSH 回归修复、语音/worktree PR |
| **Gemini CLI** | 中高（10 热点，P1 居多） | 高（10+ PR） | ✅ nightly | 子代理可靠性、安全修复 |
| **Copilot CLI** | 中高（21 条更新） | 低（仅 1 PR） | ❌ 无 | ACP 协议缺陷、BYOK 成本 |
| **Kimi Code CLI** | 低（5 条，4 关闭） | 低（2 条） | ❌ 无 | backlog 清理 |
| **OpenCode** | 中高（10+ 热点） | 高（10+ PR，bot 驱动） | ❌ 无 | 渲染器重构、长命令控制 |
| **Qwen Code** | 高（10+ 热点，P1 隐私问题） | 高（10 重量级 PR） | ✅ v0.23.1-preview.1 | Mesh 多智能体、Browser SDK |
| **DeepSeek TUI** | 中（10 热点） | 高（10+ PR，8 已合并） | ❌（0.9.13 收尾中） | 发布准备、Fleet 编排 |
| **Pi** | 极高（44 条更新） | 极高（16 条） | ❌ 无 | Provider 兼容、故障转移 |
| **oh-my-pi** | 高（10+ 热点） | 高（10+ PR） | ✅ 两个补丁 | Muse Code 接入、插件链路 |
| **DeepSeek Harness** | 无活动 | 无活动 | ❌ | — |

**活跃度梯队**：第一梯队 Pi、Codex、Qwen Code、oh-my-pi、Gemini CLI；第二梯队 Claude Code、OpenCode、Copilot CLI、DeepSeek TUI；第三梯队 Kimi（维护期）、DeepSeek Harness（停滞）。

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **子代理/多智能体可靠性** | Gemini CLI（#22323 谎报成功、#21409 挂起）、OpenCode（#31942 无熔断循环 277 次）、Qwen Code（Mesh 体系）、DeepSeek TUI（Fleet 编排）、Claude Code（#80015 Task 工具回归） | 子代理状态可信上报、熔断/退避机制、多 agent 协作调度 |
| **长会话稳定性与上下文管理** | Claude Code（压缩后规则丢失 #67500）、Codex（JSONL 超限 CPU 飙升 #38611）、OpenCode（数据库无限增长 #34875）、oh-my-pi（压缩重试不可见 #10937） | 上下文压缩可配置、长会话资源回收、会话数据治理 |
| **长命令/后台任务控制** | OpenCode（#41753/#37007 无法中断）、Pi（steering 即时打断 #9260）、Claude Code（孤儿进程泄漏 #92583） | 执行中命令可中断、可纠偏、非阻塞提交新 prompt |
| **安全与隐私** | Qwen Code（遥测未脱敏 #11198）、Gemini CLI（沙箱绕过 PR #29184）、Copilot CLI（ACP 自动审批回归 #4537）、Claude Code（symlink 逃逸 PR） | 沙箱加固、遥测脱敏、权限审批不可静默降级 |
| **Windows 平台质量** | 几乎全部工具（Claude Code、Codex、Copilot CLI、Pi、OpenCode、Kimi） | 进程管理、DPI/多显示器、CRLF、路径分隔符 |
| **ACP/IDE 协议集成** | Copilot CLI（协议级缺陷集中报告）、DeepSeek TUI（schema 违规 #5969）、Kimi（Zed 启动失败）、Qwen Code（ACP 排队消息） | ACP 成为事实标准，但各家实现成熟度参差 |
| **用量/成本可观测性** | Codex（Business 计费 5-10 倍 #23671）、Copilot CLI（BYOK 缓存失效成本 5 倍 #4720）、OpenCode（token 计数错误）、oh-my-pi（provider 上报成本） | 计量准确性、缓存生效可验证、配额透明 |

---

## 四、差异化定位分析

- **Claude Code**：企业级用户体量最大，痛点集中在**企业安全合规**（CVP、EDR 兼容）与性能稳定性；插件生态已成型但跨平台健壮性不足。社区贡献被批量关闭，维护策略趋于收敛。
- **OpenAI Codex**：迭代节奏最快（日合并 20 PR），押注**语音交互、远程多设备、桌面端体验**；Windows 桌面质量是最大短板（windows-os 标签占 issue 1/3 以上）。
- **Gemini CLI**：工程文化最规范（P1/P2 分级、workstream 管理），聚焦**子代理可靠性工程**与 token 效率（AST 感知工具），并有零依赖 OS 沙箱的战略级架构讨论。
- **GitHub Copilot CLI**：**企业/生态集成**定位（GHEC、ACP、MCP OAuth），但自研迭代慢（仅 1 PR），ACP 协议缺陷暴露出对第三方集成方的质量责任。
- **Kimi Code CLI**：以 Claude Code/Codex 为功能基准的**跟随者**，当前处于维护清理期；用户核心诉求是跨设备接续与跨工具互操作（订阅不锁定）。
- **OpenCode**：**开源多 provider 聚合层**定位，AI bot 驱动开发（opencode-agent PR）+ 社区插件生态，差异化在 provider 中立性，但可靠性与计量准确性欠账较多。
- **Qwen Code**：激进的功能开拓者——**多智能体 Mesh、Playwright Browser SDK、Web Shell/远程 serve** 同日推进，迭代速度媲美一线大厂产品，但安全审查债务（遥测泄漏、加固丢失）需警惕。
- **DeepSeek TUI**：Rust 技术栈、发布纪律严明（release-note 收据制度），方向是**多模型 Fleet 编排**与 TUI 可配置性。
- **Pi / oh-my-pi**：**轻量级、provider 无关的极客向**工具，反应速度极快（当天报 bug 当天修复）；Pi 专注兼容性容错（跨 provider 故障转移），oh-my-pi 深耕插件/扩展 API 与订阅聚合。

---

## 五、社区热度与成熟度

- **社区热度最高**：Pi（44 issue + 16 PR 更新）和 Claude Code（单 issue 197 评论、151 👍 的长尾问题），但性质不同——Pi 是活跃共建，Claude Code 是痛点积压宣泄。
- **快速迭代期**：Qwen Code（预览版 + 重量级架构 PR 密集）、DeepSeek TUI（0.9.13 冲刺）、Codex（日合并 20 PR）。
- **成熟稳定期**：Gemini CLI（分级管理规范、nightly 节奏健康）、oh-my-pi（高频小步补丁，当天闭环能力突出）。
- **收敛/维护期**：Kimi Code CLI（backlog 清理为主）、Copilot CLI（社区反馈多但官方 PR 几乎停滞，外包给了生态）。
- **成熟度信号**：Claude Code 挂起问题 7 个月未解（2 月创建）、statusLine 9 个月未修，头部产品的长尾债务同样沉重；相比之下 DeepSeek TUI 和 oh-my-pi 展现了小团队的速度优势。

---

## 六、值得关注的趋势信号

1. **ACP 正在成为 IDE-Agent 互操作的事实标准**——Copilot CLI、Kimi、DeepSeek TUI、Qwen Code 均在适配，但严格客户端（JetBrains）暴露出实现合规性缺口。**建议**：构建 ACP 集成的团队应准备协议兼容性测试套件。
2. **安全责任前移，但“静默失效”是共性风险**——遥测未脱敏上传、glob 规则静默漏配、ACP 权限静默自动批准、strict schema 静默降级。**建议**：对 CLI 工具的企业部署做独立的输出审计，不信任默认安全配置。
3. **成本可观测性成为信任关键**——BYOK 缓存失效（5 倍成本）、Business 计费异常（5-10 倍）、token 计数为零，多家同时曝出。**建议**：重度用户应自建用量对账，BYOK 场景务必验证 `cached_tokens > 0`。
4. **多智能体编排是下一轮竞争主战场**——Qwen Mesh、DeepSeek Fleet、Codex 跨线程委派、oh-my-pi 子 agent 白名单，但 Gemini/OpenCode 的反馈表明“子代理谎报成功、无限循环”是普遍未解难题。**建议**：生产环境为子代理添加外部超时与结果校验，勿信任内部状态上报。
5. **供应商锁定松动迹象**——用户要求订阅跨工具流通（Kimi→Codex）、provider 中立工具（Pi/OpenCode/oh-my-pi）活跃度最高。轻量、可插拔的聚合层正在吸引最活跃的极客社区。
6. **Windows 是全行业的质量洼地**——11 个工具中近半数今日有 Windows 专属 issue。若团队主用 Windows，选型时应将平台成熟度权重调高，或考虑 WSL2（但注意 Copilot CLI 的 31GB 内存问题）。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-07）

## 一、热门 Skills 排行（PR 榜）

| # | PR | Skill / 主题 | 状态 | 说明 |
|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator eval 修复** | OPEN | 修复 `run_eval.py` 恒报 0% recall 的核心缺陷（对应 Issue #556，10+ 独立复现），描述优化循环一直在“对噪声做优化”；同时修复 Windows 流读取、触发检测与并行 worker。社区关注度最高的工程类 PR。 |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | OPEN | 生成文档的排版质控：孤行、孤寡段落、编号错位——直击 Claude 生成文档的普遍痛点，属高频体验类需求。 |
| 3 | [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design 改进** | OPEN | 重写官方 frontend-design skill 的指令，强调单会话内可执行、可操作，反映社区对 skill 提示词“落地性”的高要求。 |
| 4 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | OPEN | 元技能（meta-skill）：从结构、安全等五维度评估 skill 质量，与生态治理诉求高度呼应。 |
| 5 | [#541](https://github.com/anthropics/skills/pull/541) + [#538](https://github.com/anthropics/skills/pull/538) | **docx / pdf 修复系列**（@Lubrsy706） | OPEN | 修复 OOXML `w:id` 冲突导致文档损坏、大小写敏感路径引用断裂等实际 bug，代表社区对官方文档类 skill 稳定性的持续打磨。 |
| 6 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | OPEN | 交付前审计：先机械校验文件存在性，再做四维推理质量门控，通用性强。 |
| 7 | [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind 多智能体编排** | OPEN | 用免费模型的 headless worker 承担机械工作，Claude 只做规划/审查/合并——成本敏感型编排思路引发讨论。 |
| 8 | [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow 平台 skill** | OPEN | 覆盖 ITSM/ITOM/SecOps/FSM 等企业全域，是企业级 skill 的代表样本。 |

## 二、社区需求趋势（Issues 提炼）

1. **信任与安全治理**：[#492](https://github.com/anthropics/skills/issues/492)（43 条评论，全站最热）——社区 skill 冒用 `anthropic/` 命名空间造成信任边界滥用，强烈要求命名空间隔离与签名机制。
2. **组织内共享/分发**：[#228](https://github.com/anthropics/skills/issues/228)——需要组织级 skill 库与直接分享链接，摆脱手动传文件。
3. **Skill 质量验证基建**：[#556](https://github.com/anthropics/skills/issues/556)、[#1390](https://github.com/anthropics/skills/issues/1390)、[#202](https://github.com/anthropics/skills/issues/202)——评测脚本在 Windows / 真实 MCP server 上失效、skill-creator 不符合自身最佳实践，社区要求官方“以身作则”。
4. **上下文效率**：[#1487](https://github.com/anthropics/skills/issues/1487)——claude-api skill 一次注入 156k token 打爆上下文，渐进加载呼声高。
5. **AI 自审/治理类 skill**：[#1385](https://github.com/anthropics/skills/issues/1385)、[#1329](https://github.com/anthropics/skills/issues/1329)、[#412](https://github.com/anthropics/skills/issues/412)——推理质量门控、紧凑记忆表示、agent 治理等元能力是新兴方向。
6. **文档处理与排版**：docx/pdf/odt/typography 相关持续高热（#514、#486、#1734）。
7. **跨平台与生态互通**：Windows 兼容（#1050、#1099）、Bedrock 支持（#29）、Skills 暴露为 MCP（#16）。

## 三、高潜力待合并 Skills（活跃且 OPEN）

- [#1298](https://github.com/anthropics/skills/pull/1298) eval 框架修复——阻塞多个下游工具，优先级最高
- [#541](https://github.com/anthropics/skills/pull/541) docx w:id 冲突修复——明确的 root cause + 修复方案
- [#1602](https://github.com/anthropics/skills/pull/1602) mcp-builder 评测序列化/编码多项修复（对应 Issue #1390）
- [#1607](https://github.com/anthropics/skills/pull/1607) claude-api 过期模型 ID 更新（对应 #1603）
- [#1367](https://github.com/anthropics/skills/pull/1367) self-audit——与社区质量门控需求直接匹配
- [#514](https://github.com/anthropics/skills/pull/514) document-typography——需求普适、边界清晰

## 四、生态洞察（一句话）

> 社区最集中的诉求已从“贡献新 skill”转向**生态治理与工程可信度**——命名空间信任边界、组织级分发、以及让官方评测/文档类 skill（skill-creator、mcp-builder、claude-api、docx/pdf）真正做到跨平台稳定、上下文高效，是当前 Skills 生态的核心矛盾。

---

# Claude Code 社区动态日报
**日期：2026-09-07 | 数据来源：github.com/anthropics/claude-code**

---

## 一、今日速览

今日无新版本发布，社区焦点集中在 **Cyber Safeguards 误拦截已通过 CVP 认证的组织**这一长期未解问题上（#84352，197 条评论持续发酵）。同时新增多个高质量 bug 报告涉及 Bash 工具在 macOS/Windows 上的进程管理缺陷，以及权限系统 `blockReadsOutsideWorkingDirectories` 与配置的冲突问题。PR 区有大量历史社区贡献被集中关闭，仅存 2 个待处理的安全相关修复。

---

## 二、版本发布

过去 24 小时无新 Release。

---

## 三、社区热点 Issues

1. **CVP 认证组织仍被 Cyber Safeguards 拦截** [#84352](https://github.com/anthropics/claude-code/issues/84352)（197 评论 / 27 👍）
   已通过 Cyber Verification Program 审批的组织再次被安全拦截，认证门户却显示“审核中”。企业级用户的持续性痛点，评论区高度活跃，今日再度更新。

2. **Claude Code 频繁挂起/卡顿 5-20 分钟** [#26224](https://github.com/anthropics/claude-code/issues/26224)（130 评论 / 151 👍）
   半年多的老问题（2 月创建），影响大量用户的核心工作流，👍 数全场最高，说明性能稳定性仍是最大槽点。

3. **Linux TUI 无法复制文本** [#62699](https://github.com/anthropics/claude-code/issues/62699)（42 评论 / 68 👍）
   `Ctrl+Shift+C` 和右键菜单均失效，基础可用性问题，Linux 用户体验严重受损。

4. **MEMORY.md 压缩提醒阈值应可配置** [#91188](https://github.com/anthropics/claude-code/issues/91188)（28 评论）
   auto-memory 硬编码 200 行/25KB 加载上限，接近阈值时反复提醒打扰用户。Memory 功能持续演进下的新配置需求。

5. **statusLine 自定义命令不执行** [#13517](https://github.com/anthropics/claude-code/issues/13517)（23 评论）
   macOS 下 settings.json 中的 statusLine 命令失效，9 个月未修复，有复现标记。

6. **插件市场 Update 按钮置灰不可点** [#45810](https://github.com/anthropics/claude-code/issues/45810)（17 评论）
   明明有版本更新却无法点击，插件生态维护体验受损。

7. **Task-list 工具不再暴露给模型** [#80015](https://github.com/anthropics/claude-code/issues/80015)（14 评论 / 13 👍）
   `TaskCreate/TaskUpdate` 等工具从模型工具集中消失（UI 仍可见任务），疑似更新引入的回归，直接影响 agent 工作流。

8. **Cowork 合并后丢失“选择文件夹”入口** [#76694](https://github.com/anthropics/claude-code/issues/76674)（12 评论 / 15 👍）
   Chat/Cowork 合并后新建项目变成上传式知识菜单，功能降级引发用户不满。

9. **上下文压缩后丢失关键行为规则** [#67500](https://github.com/anthropics/claude-code/issues/67500)（12 评论）
   压缩（compaction）后 Claude 遗忘会话早期确立的行为约束（memory 写入、不停止策略等），可靠性核心问题。

10. **EDR 环境下 Bash 工具 5 秒即杀进程** [#92586](https://github.com/anthropics/claude-code/issues/92586)（今日新增，有复现）
    macOS 上 EDR 短暂硬链接新文件触发输出文件校验失败，所有 Bash 命令约 5 秒后被终止。企业安全软件兼容性是新兴痛点。

**其他今日新增值得关注**：
- [#92583](https://github.com/anthropics/claude-code/issues/92583)：Windows 上超时自动后台化的命令永不清理，孤儿进程泄漏内核句柄数天
- [#92582](https://github.com/anthropics/claude-code/issues/92582)：`blockReadsOutsideWorkingDirectories` 无视 `additionalDirectories` 配置，权限模型不一致
- [#92584](https://github.com/anthropics/claude-code/issues/92584)：`--json-schema` 无法确认 strict 模式是否生效（静默降级）

---

## 四、重要 PR 进展

1. **修复 `**` glob 模式不匹配零深度路径** [#87079](https://github.com/anthropics/claude-code/pull/87079)（OPEN）
   security-patterns.json 中的安全规则因 `**/*.ts` 需要字面 `/` 而静默漏掉顶层文件——**安全规则静默失效**，值得优先合入。

2. **修复 pr-review-toolkit 所有 agent 的无效 YAML frontmatter** [#87077](https://github.com/anthropics/claude-code/pull/87077)（OPEN）
   agent 描述含未引号对话文本导致 YAML 解析失败，agent 加载后元数据为空。

3. **修复 security-guidance 插件 symlink 逃逸漏洞** [#68689](https://github.com/anthropics/claude-code/pull/68689)（CLOSED）
   恶意仓库可通过 symlink 读取本地任意文件（如 `~/.ssh/id_rsa`），属本地文件泄露漏洞修复。

4. **修复 test-hook.sh shell 注入** [#68686](https://github.com/anthropics/claude-code/pull/68686)（CLOSED）
   通过 stdin 重定向消除 `$TEST_INPUT` 拼接导致的注入风险。

5. **新增 `/bug` 命令从终端直接提交 GitHub Issue** [#68707](https://github.com/anthropics/claude-code/pull/68707)（CLOSED）
   bug-reporter 插件，改善 issue 提交流程的有趣尝试。

6. **修复 duplicate 关闭逻辑覆盖已有标签** [#68693](https://github.com/anthropics/claude-code/pull/68693)（CLOSED）
   GitHub PATCH 会替换整个标签集，导致原有 platform/area 标签被静默擦除，影响 issue 分诊数据质量。

7. **修复 Windows 下 `CLAUDE_PLUGIN_ROOT` 反斜杠路径问题** [#68694](https://github.com/anthropics/claude-code/pull/68694)（CLOSED）
   Windows 路径分隔符破坏 hook 内联 bash 脚本，插件生态跨平台兼容的典型问题。

8. **修复 triage 不再将 Desktop 问题标记为 invalid** [#68678](https://github.com/anthropics/claude-code/pull/68678)（CLOSED）
   自动分诊流程准确度改进。

9. **修复 macOS bash 3.x 下 `set -u` 数组展开崩溃** [#68702](https://github.com/anthropics/claude-code/pull/68702)（CLOSED）
   ralph-wiggum 插件在 macOS 默认 bash 3.x 下无法运行的兼容修复。

10. **修复分页逻辑：页未满即应停止** [#68673](https://github.com/anthropics/claude-code/pull/68673)（CLOSED）
    脚本分页仅在空页时退出，可能导致多余 API 请求。

> 📌 观察：今日 @AZERDSQ131 的十余个贡献被批量关闭（多为 6 月提交的插件/脚本修复），仅 @anishsamant 的两个安全/质量修复仍处 OPEN 状态。

---

## 五、功能需求趋势

- **安全与合规**：Cyber Safeguards 误拦截（#84352、#92565）、密钥传递原语（#90301）、strict schema 可验证性（#92584）——企业安全场景需求集中爆发
- **Memory/上下文管理**：MEMORY.md 可配置化（#91188）、压缩后规则丢失（#67500）
- **Desktop / Cowork 体验**：多账号会话恢复（#74662）、Chat/Cowork 合并后的功能回归（#76694）、项目排序（#87723）
- **Windows 平台质量**：进程清理（#92583）、控制台闪烁（#70200）、worktree 大小写路径校验（#91618）、env 文件无限增长（#78146）
- **IDE 集成**：VS Code 编辑器组锁定开关（#80148）、WSL 图片渲染（#85520）

---

## 六、开发者关注点

1. **性能与稳定性是头号痛点**：挂起/卡顿问题（#26224，151 👍）长期悬而未决，跨 compaction 的行为一致性同样影响信任度。
2. **企业环境兼容性**：EDR 安全软件与 Bash 沙箱冲突（#92586）、CVP 认证形同虚设（#84352），企业用户在安全合规与可用性之间被两头挤压。
3. **权限模型一致性**：`blockReadsOutsideWorkingDirectories` 与 `additionalDirectories` 的冲突（#92582）表明权限配置语义需要更清晰的文档与测试。
4. **回归问题频发**：Task 工具消失（#80015）、statusLine 失效（#13517）等表明快速迭代中缺少对既有功能的回归保障。
5. **插件生态跨平台健壮性**：大量 PR 集中修复 Windows 路径、CRLF、bash 版本差异，插件框架的跨平台抽象层仍有改进空间。

---
*本报告基于 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-09-07

---

## 📌 今日速览

今日无新版本发布，但社区活跃度较高：VS Code 扩展 26.901.22334 的 Remote-SSH 兼容性回归（`using` 语法导致 Node 22 解析失败）成为焦点，多条相关 Issue 已被关闭；桌面端 Windows 平台的窗口/输入问题（Pets 点击失效、更新后无窗口）持续发酵；此外 GPT-6 Astra 模型误报"invalid_prompt"引发多人复现。合并的 20 个 PR 主要围绕 TUI worktree 管理、权限配置和语音播放管线。

---

## 🐛 社区热点 Issues（Top 10）

| # | Issue | 状态 | 关注度 | 看点 |
|---|-------|------|--------|------|
| 1 | [#28919](https://github.com/openai/codex/issues/28919) Windows App 缺失"控制其他设备"标签页 | OPEN | 63 评论 / 59 👍 | Windows 版与 macOS 版功能不对等的老问题，已持续近 3 个月，社区诉求强烈 |
| 2 | [#42663](https://github.com/openai/codex/issues/42663) Remote-SSH 下扩展无法激活（Node 22 无法解析 `using`） | OPEN | 10 评论 / 5 👍 | 26.5901.22334 版本打包产物使用了 Node 22 不支持的语法，Remote-SSH 用户大面积受影响 |
| 3 | [#41960](https://github.com/openai/codex/issues/41960) Windows 下 Pets 宠物无法响应点击/拖拽 | OPEN | 20 评论 / 24 👍 | 新功能 Pets 的 Windows 输入命中区域问题，一周内 👍 数快速上升 |
| 4 | [#42661](https://github.com/openai/codex/issues/42661) Pets 输入区域偏移、重启后点击穿透 | OPEN | 13 评论 | 多显示器 + DPI 缩放场景下 Pets 交互失效，与 #41960 同根因疑似 |
| 5 | [#23671](https://github.com/openai/codex/issues/23671) Business 账户用量消耗比 Plus 快 5–10 倍 | OPEN | 8 评论 | 受控对比实验数据详实，涉及计费公平性，企业用户高度关注 |
| 6 | [#43237](https://github.com/openai/codex/issues/43237) GPT-6 Astra 连 `hi` 都被拒（invalid_prompt） | OPEN | 3 评论 | 跨 Linux/macOS 隔离复现，模型端误判问题，另有 #43058 同类报告 |
| 7 | [#43124](https://github.com/openai/codex/issues/43124) macOS 历史会话冻结在旧消息（projection 序号不匹配） | OPEN | 5 评论 | 长会话数据投影机制 bug，新消息从 UI 消失但数据仍在 |
| 8 | [#42501](https://github.com/openai/codex/issues/42501) cua_node 无法复制 node_repl.exe 导致 UI 无法启动 | OPEN | 10 评论 | 26.901.1978.0 更新后 Windows 启动失败，与 #42714 同属"有进程无窗口"类问题 |
| 9 | [#38611](https://github.com/openai/codex/issues/38611) 会话 JSONL 超 V8 字符串上限导致 Chrome 控制循环占用 160%+ CPU | OPEN | 5 评论 | 长任务下性能退化，触发浏览器控制功能的重试死循环 |
| 10 | [#43322](https://github.com/openai/codex/issues/43322) "Selected model is at capacity" 频繁出现 | CLOSED | 4 评论 | 今日新建即关，当日 #43341（韩语用户报告配额消耗过快）延续了用量类投诉热度 |

> 已修复：扩展 26.901.22334 的 `chatgpt.openSidebar not found` / `using` 语法问题相关 Issue（#42882、#43155、#43293、#43240）均已关闭，疑似已发布修复版本。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#43308](https://github.com/openai/codex/pull/43308)** — Windows app-server 关停改用 socket 请求（`/daemon/shutdown` + PID 校验），替代文件标记方案，提升关停可靠性。
2. **[#43330](https://github.com/openai/codex/pull/43330)** — 恢复/fork 远程任务时保留服务端保存的权限配置，避免本地设置覆盖命名权限 profile。
3. **[#43340](https://github.com/openai/codex/pull/43340)** — TUI 权限选择器支持选择远程命名权限 profile。
4. **[#43286](https://github.com/openai/codex/pull/43286)** — TUI 新增 worktree 浏览器：可搜索、查看 owner 元数据、恢复 owner 线程。
5. **[#43279](https://github.com/openai/codex/pull/43279)** — 会话发现覆盖 linked worktree；配套 [#43298](https://github.com/openai/codex/pull/43298) 将 worktree 切换延迟到新事件循环迭代，避免阻塞 UI。
6. **[#43248](https://github.com/openai/codex/pull/43248) / [#43244](https://github.com/openai/codex/pull/43244)** — 语音管线重大进展：voice-host RTP 音频接入 GStreamer 播放，新增有界 `GstAudioSink` 组件。
7. **[#43289](https://github.com/openai/codex/pull/43289) / [#43265](https://github.com/openai/codex/pull/43265)** — 新增 capability 门控的 MCP 用户验证处理及实验性 `userVerification` API 契约。
8. **[#43253](https://github.com/openai/codex/pull/43253)** — 恢复会话遇到 active writer 时降级为只读模式，改善多端并发体验。
9. **[#43261](https://github.com/openai/codex/pull/43261) / [#43177](https://github.com/openai/codex/pull/43177)** — TUI 启动/后台任务统一使用服务端模型默认值，修正客户端陈旧配置问题。
10. **[#43304](https://github.com/openai/codex/pull/43304) / [#43282](https://github.com/openai/codex/pull/43282)** — Bazel 构建优化：将 stamp 元数据与编译输入隔离、stamping 改为 opt-in，显著提升远程缓存复用率。

---

## 📈 功能需求趋势

- **Windows 桌面端质量**：占比最高的 issue 来源（windows-os 标签超过 1/3），集中在窗口管理、DPI/多显示器、Computer Use 枚举。
- **远程/多设备工作流**：Remote-SSH、远程任务权限、跨线程委派（#42460）、"控制其他设备"（#28919）需求旺盛。
- **会话与历史管理**：目录重命名后工作目录更新（#26836）、幽灵会话（#41987）、长会话投影/迁移（#43124）是长期诉求。
- **用量与模型可用性**：容量限制（#43322）、Business 配额消耗异常（#23671）及 GPT-6 误判 invalid_prompt（#43237、#43058）集中爆发。
- **Pets / Voice 等新功能**：配套 bug 快速涌现，同时 PR 侧语音管线活跃开发中。

---

## ⚠️ 开发者关注点

1. **扩展版本回归风险**：26.901.22334 的 Remote-SSH 崩溃影响大量用户，建议 CI 增加 Node 22 语法兼容性检查；相关 Issue 已批量关闭，请留意修复版本。
2. **长会话稳定性**：JSONL 超长引发 CPU 飙升（#38611）、投影序号错误（#43124）表明长上下文会话仍是薄弱环节。
3. **权限模型演进**：TUI/远程任务的命名权限 profile 体系正在成型（3 个 PR），插件/自动化开发者需关注 `thread/settings/update` 接口变化。
4. **Windows 打包链路**：cua_node staging、Electron 资源内 CLI 定位（#22423）等问题反复出现，Windows 分发渠道（MS Store）稳定性待提升。
5. **用量透明度**：多语言用户（中/韩）报告配额消耗异常，模型端 prompt 误判与配额计费的可观测性是信任关键。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-09-07

## 📌 今日速览

今日发布 v0.60.0-nightly.20260907 常规夜间版本。社区最活跃的讨论集中在**子代理（Subagent）可靠性**上：MAX_TURNS 中断被误报为成功、通用 agent 挂起等 P1 问题持续发酵。PR 方向，Windows 沙箱中 `git diff --output` 静默写文件的安全漏洞修复值得重点关注。

---

## 🚀 版本发布

- **v0.60.0-nightly.20260907.g85aca163f**（[Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.60.0-nightly.20260906.g85aca163f...v0.60.0-nightly.20260907.g85aca163f)）：常规自动版本提升，由 [#29233](https://github.com/google-gemini/gemini-cli/pull/29233) 触发，无面向用户的显著变更。

---

## 🔥 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)**（P1，13 评论）— `codebase_investigator` 子代理触发 MAX_TURNS 后仍报告 `success`/`GOAL` 终止，掩盖真实中断原因。子代理状态上报机制的可信度问题，直接影响任务编排的可靠性判断。
2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)**（P1，8 评论，8 👍）— 通用 agent 无限挂起，简单的建目录操作也卡死，用户需等待一小时以上。👍 数说明影响面广。
3. **[#29133](https://github.com/google-gemini/gemini-cli/issues/29133)**（P2，9 评论）— `--list-sessions` 从不标记当前会话，导致 `--delete-session` 可删除活跃会话。交互式 Session Browser 正确而 CLI 路径有缺陷，已有对应修复 PR（见下）。
4. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)**（P2，9 评论）— 提议零依赖 OS 沙箱 + 执行后意图路由，以释放 Gemini 3 模型原生的 bash 工具链能力。战略级的架构方向讨论。
5. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)**（P2，7 评论）— 评估 AST 感知的文件读取/搜索/代码库映射，目标是用单次调用精准读取方法边界，降低 token 噪音与回合数。
6. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)**（P2，安全）— Auto Memory 在模型脱敏前就将本地 transcript 发送给后台提取 agent，需确定性脱敏并减少日志。
7. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)**（P2）— 模型几乎不会自主调用自定义 skills 和子代理，即使任务高度相关，需显式指令才触发。技能路由是普遍痛点。
8. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)**（P1，4 评论，3 👍）— Shell 命令完成后仍显示 "Awaiting user input" 卡住，极简单命令也复现。
9. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)**（P2）— 工具数超过限制（>128）时直接 400 错误，agent 应智能裁剪作用域内工具。
10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)**（P2，客户工单）— agent 在复杂 git 操作中倾向使用 `git reset --force` 等破坏性命令，应优先安全替代方案。

---

## 🛠 重要 PR 进展

1. **[#29184](https://github.com/google-gemini/gemini-cli/pull/29184)**（P1/安全，OPEN）— 修复 Windows 沙箱中 `git diff --output=<path>` 可静默截断任意文件的安全绕过：默认模式下 git 只读命令本不弹确认。
2. **[#29134](https://github.com/google-gemini/gemini-cli/pull/29134)**（OPEN）— 修复 #29133：CLI 路径传递活跃会话 ID，防止删除当前会话，含回归测试。
3. **[#29229](https://github.com/google-gemini/gemini-cli/pull/29229)**（OPEN）— 设置编辑器用 `Number.isFinite` 拒绝 `1e309` 等溢出输入，避免 JSON 序列化将设置悄悄存为 `null`。
4. **[#29131](https://github.com/google-gemini/gemini-cli/pull/29131) / [#29132](https://github.com/google-gemini/gemini-cli/pull/29132)**（OPEN）— 修复 CRLF 文件触发全文件 diff 灌入模型上下文的问题，规范行尾后再计算 diff 片段。
5. **[#29137](https://github.com/google-gemini/gemini-cli/pull/29137)**（OPEN）— Dependabot 批量更新 76 个 npm 依赖，含 `simple-git`、MCP SDK 等。
6. **[#28973](https://github.com/google-gemini/gemini-cli/pull/28973)**（CLOSED）— 沙箱镜像从 EOL 的 node:20-slim 升级到 node:22-slim，消除无安全补丁的运行时风险。
7. **[#28972](https://github.com/google-gemini/gemini-cli/pull/28972)**（CLOSED，P1）— `formatTruncatedToolOutput` 对非正 `maxChars` 加防护，此前会静默产出截断错乱输出。
8. **[#28971](https://github.com/google-gemini/gemini-cli/pull/28971)**（CLOSED）— 修复 MCP 工具名超长截断后同名冲突导致工具注册覆盖的问题。
9. **[#28975](https://github.com/google-gemini/gemini-cli/pull/28975)**（CLOSED）— 修复符号链接工作区根目录（如 macOS `/tmp`）导致 `glob` 返回 "No files found"。
10. **[#29230](https://github.com/google-gemini/gemini-cli/pull/29230) / [#29231](https://github.com/google-gemini/gemini-cli/pull/29231)**（OPEN）— 修复文档死链锚点与过时 JSDoc 参数，提升文档质量。

---

## 📈 功能需求趋势

- **子代理可靠性工程**（最大热点）：终止状态误报、挂起、上下文缺失（#21763）、symlink agent 不识别（#20079）、轨迹分享（#22598）等成体系问题，维护团队以 workstream-rollup 统一追踪。
- **Agent 智能化行为**：自主调用 skills/子代理（#21968）、自我认知能力（#21432）、避免破坏性命令（#22672）。
- **代码探索与 token 效率**：AST 感知工具（#22745/#22746）、"Tactful Extraction" 精准读取（#19561）、上下文瘦身。
- **Auto Memory 体系化改进**：确定性脱敏（#26525）、低信号会话无限重试（#26522）、无效 patch 处理（#26523）。
- **安全加固**：bash 原生能力 + OS 沙箱（#19873）、Windows git 参数校验（PR #29184）。

---

## ⚠️ 开发者关注点

1. **挂起/卡死类问题最伤体验**：通用 agent 挂起（#21409）、shell 卡在 "Waiting input"（#25166）、vite 交互提示卡死（#22465）是用户最高频抱怨。
2. **子代理“谎报成功”**（#22323）让依赖子代理结果的工作流难以信任，需人工复核。
3. **跨平台一致性**：Windows（CRLF diff、沙箱绕过）与 macOS（symlink、Wayland browser agent #21983）各有专属坑。
4. **配置不生效**：Browser Agent 忽略 `settings.json` 的 maxTurns 覆盖（#22267），`/compress` 不持久化（#21335）削弱用户对配置的信任。
5. **安全意识增强**：Auto Memory 的数据外发路径、EOL 运行时、静默写文件漏洞——社区对安全类修复的响应速度和优先级普遍给予正面评价。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-09-07** | 数据来源：github.com/github/copilot-cli

---

## 一、今日速览

今日无新版本发布，但社区活跃度较高，过去 24 小时共更新 21 条 Issues。ACP（Agent Client Protocol）模式成为反馈焦点——权限审批回归、后台子代理被意外中止等多个协议级缺陷被集中报告。同时 Desktop 1.1.15 的 Local 会话限制、BYOK 模式成本激增（约 5 倍）等问题也引发关注。

---

## 二、版本发布

过去 24 小时无新 Release。（当前社区反馈主要针对 CLI 1.0.82 与 Desktop 1.1.15）

---

## 三、社区热点 Issues（精选 10 条）

1. **ACP 模式自动批准工具调用（安全回归）** [#4537](https://github.com/github/copilot-cli/issues/4537)
   自 1.0.81-1 起，`--acp` 模式不再发送 `session/request_permission`，Shell 命令、文件编辑/删除在无审批情况下直接执行，是 #845 的回归，属安全隐患级别，社区 +2 关注。

2. **BYOK 模式静默禁用 prompt caching，成本约 5 倍** [#4720](https://github.com/github/copilot-cli/issues/4720)
   1.0.82 BYOK 请求不携带缓存声明，`cached_tokens=0`，每轮全价重发全部上下文，对重度用户成本影响显著。

3. **GHEC 数据驻留租户 prompt 模式 401（已关闭）** [#4527](https://github.com/github/copilot-cli/issues/4527)
   `copilot -p` 的模型目录请求错误访问 `api.githubcopilot.com` 而非租户端点，已修复关闭，企业用户可关注修复版本。

4. **Desktop 1.1.15 无法创建第二个 Local 分支会话** [#4742](https://github.com/github/copilot-cli/issues/4742)
   新版引入单项目单 Local workspace 限制，阻断多分支并行工作流，属升级后高优先级可用性问题。

5. **ACP：session/prompt 无条件中止会话，杀掉后台子代理** [#4555](https://github.com/github/copilot-cli/issues/4555)
   `session/prompt` 处理器第一动作即调用 `session.abort()`，与交互式 TUI 行为不一致，破坏多代理编排。

6. **ask_user 表单提前回车导致输入永久丢失** [#4738](https://github.com/github/copilot-cli/issues/4738)
   用户标记为“高严重性数据丢失”，社区建议表单草稿自动保存/恢复。

7. **MCP OAuth token 跨会话无法可靠复用** [#4695](https://github.com/github/copilot-cli/issues/4695)
   HTTP MCP 服务器（PKCE 公共客户端）缓存键不稳定，导致反复重新授权，影响 MCP 生态体验。

8. **仓库级插件作用域需求（已关闭）** [#1665](https://github.com/github/copilot-cli/issues/1665)
   18 👍、14 评论的热门功能请求——插件从 per-user 扩展到 per-repo/project 作用域，今日关闭，值得关注是否已实现。

9. **企业默认模型在 CLI 中不可用** [#4692](https://github.com/github/copilot-cli/issues/4692)
   组织管理的 `MAI-Code-1.1-Flash` 在 VSCode/Desktop 正常，CLI 却回退默认模型，企业策略一致性缺口。

10. **WSL2 下内存占用 ~31 GB、CPU ~57%** [#4694](https://github.com/github/copilot-cli/issues/4694)
    长会话 + 高强度思考模型下资源异常膨胀，是 Linux/WSL 平台稳定性的典型痛点。

---

## 四、重要 PR 进展

今日仅 1 条 PR 更新：

- **#4739 [OPEN] docs: 提议终端接管 macOS 通知** [@anujb-msft](https://github.com/github/copilot-cli/pull/4739)
  文档型参考提案：分析 macOS 通知点击问题，附带 MIT 许可的终端通知实现示例及可移植回归测试。明确说明是提案而非 CLI 代码变更，为后续通知交互改进提供设计参考。

*其余 9 条 PR 建议位：本周期内无其他活跃 PR，建议关注官方仓库 release 分支动态。*

---

## 五、功能需求趋势

1. **ACP 协议成熟度**：权限审批、后台任务生命周期、session-idle 信号（#4537/#4555/#4743），ACP 集成方是当前反馈主力。
2. **输入体验细化**：Shift+Arrow 文本选择（#2644）、Ctrl+E 接受补全建议（#4736）、表单防误触（#4738）。
3. **企业/租户支持**：GHEC 数据驻留端点（#4527）、企业默认模型（#4692）。
4. **BYOK 与成本控制**：prompt caching（#4720）、max_output_tokens 截断处理（#4733）。
5. **插件与定制化**：仓库级插件作用域（#1665）、agentStop hook 行为（#3894）。

---

## 六、开发者关注点

- **安全回归风险**：ACP 自动审批工具调用（#4537）直接影响无人值守场景安全，建议相关版本用户尽快评估。
- **成本敏感**：BYOK 用户需警惕 1.0.82 的缓存失效问题（#4720），账单可能显著上涨。
- **升级稳定性**：Desktop 1.1.15 引入会话限制（#4742），多会话工作流用户升级前需评估。
- **资源占用**：长会话高负载下的内存/CPU 膨胀（#4694）反映资源回收机制仍需改进。
- **UI 信息丢失**：正文被折叠为 "Thought for Ns"（#4735）、表单输入丢失（#4738）正在侵蚀用户信任。

---
*本报告基于过去 24 小时 GitHub 公开数据自动生成，链接均指向官方仓库。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-07** | 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 📌 今日速览

今日无新版本发布，社区活跃度集中在前沿功能讨论与存量 Issue 清理上。最具人气的是「Remote Control - 跨设备继续本地会话」功能请求（👍32），已积累 13 条讨论；同时新增社区 PR #2636 优化共享目录缓存逻辑，多条历史 bug Issue（Zed 集成、鉴权失败）于昨日集中关闭，显示维护团队正在积极清理 backlog。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues

> 今日共 5 条 Issue 更新，按关注度排序：

1. **[OPEN] #1282 跨设备远程接续本地会话（Remote Control）** — @CatKang，👍32 / 评论 13
   请求支持从手机、平板或任意浏览器继续本地 CLI 会话，实现“离开桌面也不中断”的连续工作流。这是目前人气最高的功能请求，热度持续近半年仍未关闭，值得持续关注。
   🔗 [Issue #1282](https://github.com/MoonshotAI/kimi-cli/issues/1282)

2. **[CLOSED] #2252 /goal 命令 + coding plan 导入 Codex** — @DuskLin，评论 9
   请求对齐 Codex 的 `/goal` 命令（Claude Code 已在 138 版本跟进），并允许 coding plan 导入 Codex 使用。反映了社区对**跨工具互操作性**的强烈诉求——用户希望订阅权益不被单一 CLI 锁定。现已关闭，可能已有处理结论。
   🔗 [Issue #2252](https://github.com/MoonshotAI/kimi-cli/issues/2252)

3. **[CLOSED] #1284 Windows 下无法在 Zed IDE ACP 面板启动** — @prashanth057
   v1.14.0 在 Windows + Zed ACP 环境下无法启动，属于 IDE 集成关键路径 bug。关闭或意味着已修复或定位，Windows + Zed 用户可关注后续版本。
   🔗 [Issue #1284](https://github.com/MoonshotAI/kimi-cli/issues/1284)

4. **[CLOSED] #1350 频繁出现 Authorization failed** — @dapeng1162
   v1.17.0 + debian12 环境下登录态频繁失效（`kimi-for-coding` 模型）。鉴权稳定性是高频痛点，此 Issue 关闭可留意是否随版本修复。
   🔗 [Issue #1350](https://github.com/MoonshotAI/kimi-cli/issues/1350)

5. **[CLOSED] #1349 Shell prompt 不再显示 cwd/git 分支** — @Sirfetch-d
   近期版本中提示符仅剩 `✨ / 💫 / $` 符号，丢失工作目录与分支信息，影响交互式工作中的上下文确认。社区请求**可配置的 prompt 显示**，已关闭。
   🔗 [Issue #1349](https://github.com/MoonshotAI/kimi-cli/issues/1349)

---

## 🔧 重要 PR 进展

> 今日共 2 条 PR 更新：

1. **[OPEN] #2636 优化 get_share_dir：缓存 + 路径处理** — @gugu8intel-i9（今日新提交）
   社区贡献者对 `get_share_dir` 增加缓存与路径处理优化，属于文件系统层面的性能改进，附带 Devin 自动审查徽章，等待维护者 review。
   🔗 [PR #2636](https://github.com/MoonshotAI/kimi-cli/pull/2636)

2. **[OPEN] #2513 fix(kosong): 递归解码双重编码的工具调用参数** — @nitishagar（昨日更新）
   修复 Moonshot API 返回的 `function.arguments` 嵌套值被双重 JSON 编码的问题——单次 `json.loads` 后 `todos` 等字段仍是字符串，导致 Pydantic 校验失败（`Input should be a valid list`）。新增共享 `decode_tool_arguments` 工具递归解码，对**工具调用的可靠性**是重要修复。
   🔗 [PR #2513](https://github.com/MoonshotAI/kimi-cli/pull/2513)

---

## 📈 功能需求趋势

从近期 Issues 中可提炼出以下方向：

- **跨设备/远程工作流**：Remote Control（#1282，👍32）是呼声最高的能力，反映 CLI 用户对移动端接续会话的强烈需求。
- **跨工具互操作**：coding plan 导入 Codex（#2252）表明用户期望订阅与主流编程平台（Codex、Claude Code）打通，拒绝供应商锁定。
- **IDE 集成稳定性**：Zed ACP（#1284）等集成场景的 bug 说明 Windows 生态的 IDE 兼容仍是薄弱环节。
- **命令对齐**：`/goal` 等竞品已有命令的跟进需求，社区以 Claude Code / Codex 为功能基准。

## ⚠️ 开发者关注点（痛点）

1. **登录态稳定性**：Authorization failed 类问题（#1350）是长期痛点，影响长时间工作流连续性。
2. **工具调用数据健壮性**：API 返回参数双重编码导致 Pydantic 校验失败（PR #2513），提示底层协议兼容性需加固。
3. **交互体验细节**：Shell prompt 信息缺失（#1349）表明部分 UI 精简改动缺少可配置项，用户希望保留 cwd/branch 等上下文信息。
4. **Windows 平台体验**：Zed 集成启动失败（#1284）再次暴露 Windows 支持滞后于 macOS/Linux。

---
*数据统计窗口：过去 24 小时 | Issues 5 条（4 关闭 / 1 开放）| PRs 2 条（均开放）| 无新版本发布*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-07）

## 1. 今日速览

今日无新版本发布，社区活动集中在 Issue 清理与新 PR 提交上。多条由 `opencode-agent[bot]` 驱动的修复 PR 集中提交，覆盖 CLI、TUI、移动端 UI 等多个组件；@Hona 提交的三层渲染器持久化性能重构（借鉴 VS Code 存储架构）是今日最值得关注的 PR 系列。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **#27589 TUI 在 Alpine Linux (musl) 1.14.50 版本崩溃** — `getcontext symbol not found` 回归问题，39 条评论、12 👍，是本期讨论最热烈的 Issue，涉及 musl 兼容性，最终已关闭。[链接](https://github.com/anomalyco/opencode/issues/27589)
2. **#47716 Together AI token 用量始终为 0**（OPEN，今日新提）— 内置 `@ai-sdk/togetherai` 未发送 `stream_options.include_usage`，导致用量与成本全部记录为零，属数据完整性问题。[链接](https://github.com/anomalyco/opencode/issues/47716)
3. **#41753 新提示词被运行中的 bash 工具阻塞**（OPEN）— 长命令执行期间新提交的 prompt 被静默搁置，直接影响交互体验。[链接](https://github.com/anomalyco/opencode/issues/41753)
4. **#37007 无法中断 bash 工具执行的长命令**（OPEN）— dev server 类命令会无限阻塞会话，与上条共同构成“长命令不可控”痛点。[链接](https://github.com/anomalyco/opencode/issues/37007)
5. **#22225 CLI 增加技能使用统计** — 13 条评论，提案以本地 JSON 记录 skill 调用计数，反映社区对可观测性的需求。[链接](https://github.com/anomalyco/opencode/issues/22225)
6. **#32749 Explore agent 浪费 token** — 无论任务大小都会启动子代理，主代理还要重读文件，社区对 agent 编排成本有明确不满。[链接](https://github.com/anomalyco/opencode/issues/32749)
7. **#34712 输入 token 统计与 circle context 不一致** — compact 后 token 计数不降，计量准确性问题，5 👍。[链接](https://github.com/anomalyco/opencode/issues/34712)
8. **#35294 Desktop 启动时阻塞拉取 models.dev 导致 "Local Server could not be reached"** — v1.17.12+ 回归，弱网环境下 sidecar 挂起，只能降级到 v1.17.11。[链接](https://github.com/anomalyco/opencode/issues/35294)
9. **#31942 Agent 无熔断机制导致 MCP 调用循环 277 次** — 搜索不存在的 MCP 资源耗尽 token 限额，暴露缺少循环检测/熔断保护。[链接](https://github.com/anomalyco/opencode/issues/31942)
10. **#34875 可配置的会话数据保留与自动清理** — opencode.db 无限增长问题，长期运行用户的核心诉求。[链接](https://github.com/anomalyco/opencode/issues/34875)

其他值得一看：#35895 长会话消息接口无分页（1.93MB 单次响应）、#35917 worktree 会话 SSE 事件丢失、#47713 中文用户提出的会话记录跨机迁移需求。

## 4. 重要 PR 进展

1. **#47704/#47705/#47706 渲染器持久化三层重构**（@Hona）— 借鉴 VS Code 的 `Memento`/per-resource backup 架构：命名空间批量读写 → 定时序列化 → 大文本内容寻址分块，系统性解决渲染层持久化性能问题。[PR #47704](https://github.com/anomalyco/opencode/pull/47704)
2. **#47720 修复 Node SEA 构建下的插件解析**（OPEN）— SEA 嵌入式 ESM 入口缺少 `import.meta.resolve`，通过 VM 导入器获取原生解析器。[链接](https://github.com/anomalyco/opencode/pull/47720)
3. **#47719 插件注册模板命令**（@dbpolito）— Promise/Effect 插件可声明式注册 `template`、`agent`、`model`、`subagent` 命令，扩展插件能力面。[链接](https://github.com/anomalyco/opencode/pull/47719)
4. **#46534 新增 Firecrawl developer search 提供商**（@erikengervall）— 网络搜索提供商生态持续扩充。[链接](https://github.com/anomalyco/opencode/pull/46534)
5. **#47702 Muse Spark 模型路由到 Responses API** — 修复 1.2/1.3 版本经 CLI 调用返回 0 token 或 HTTP 500 的问题。[链接](https://github.com/anomalyco/opencode/pull/47702)
6. **#47711 将相邻 edit/write/patch 差异分组展示** — 时间线中同类文件操作合并为有序组，保留展开状态，提升 diff 可读性。[链接](https://github.com/anomalyco/opencode/pull/47711)
7. **#47666 TUI 标签忙碌状态仅由执行态驱动** — 修复 shell `!` 命令存储输出但未执行时 spinner 误转的问题。[链接](https://github.com/anomalyco/opencode/pull/47666)
8. **#47640 Office 文件与 PDF 预览及文本提取**（@xirothedev）— 离线文档预览 + office 附件文本抽取，补齐多模态输入能力。[链接](https://github.com/anomalyco/opencode/pull/47640)
9. **#45424 修复无原生路由的 AI SDK 提供商分发** — `fromCatalogModel` 目前仅路由三个 AI SDK 包，扩展了分发覆盖面。[链接](https://github.com/anomalyco/opencode/pull/45424)
10. **#45482 异步子代理任务诚实、单次、有序应答并终止** — 修复子代理异步任务确认消息处理缺陷，属 agent 运行时正确性改进。[链接](https://github.com/anomalyco/opencode/pull/45482)

注：#47669（TeamJules worker swarm）与 #47656（GitPigeon mesh sync）已被关闭，疑似 AI 生成/不合规提交，合规流程在发挥作用。

## 5. 功能需求趋势

- **可观测性与计量准确性**：token 计数错误（#34712、#47716）、用量图表（#26682）、skill 使用统计（#22225）持续被提及。
- **长命令/后台任务控制**：中断执行、非阻塞提交新 prompt（#41753、#37007）是当前活跃的交互痛点。
- **Agent 成本与鲁棒性**：explore agent token 浪费（#32749）、缺少循环熔断（#31942）、异步子代理正确性（#45482）。
- **数据管理与迁移**：SQLite 无限增长（#34875）、会话跨机迁移（#47713）、长会话分页（#35895）。
- **多提供商支持**：Firecrawl 搜索、Muse Spark、Anthropic Vertex 环境变量（#35880）、Together AI 修复。
- **移动端/桌面端体验**：键盘安全区（#47712）、worktree UI 改进（#47310）。

## 6. 开发者关注点

1. **可靠性回归频发**：Alpine musl 崩溃（#27589）、启动阻塞 fetch（#35294）等回归说明发布前多平台/弱网测试覆盖不足。
2. **CLI Linux 剪贴板体验差**：需手动安装 xclip/xsel（#35977、#35978），新用户上手即遇阻。
3. **token 成本敏感**：agent 编排不当（explore 子代理滥用、无熔断循环）直接造成真金白银的浪费，社区呼声强烈。
4. **长会话性能退化**：数据不清理、接口无分页、SSE 变慢（#35892），长期重度用户是负反馈主力。
5. **配置安全**：AI 直接编辑 opencode.json 易破坏 JSON 导致崩溃（#35954），需要结构化配置写入机制。

---
*数据来源：github.com/anomalyco/opencode | 统计窗口：2026-09-07 前 24 小时*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-07）

## 一、今日速览

今日发布 **v0.23.1-preview.1** 预览版，核心是 Web Shell 动态工作流的可视化管理；但配套的发布流程一度因 `integration_docker` 失败（#11185）。生态方向动作密集：**多智能体 Mesh 基础设施**、**Playwright Browser SDK**、**一键远程 serve 配对**等多个重量级 PR 同日推进。安全方面，一条 P1 级遥测隐私问题（#11198）值得所有用户留意。

## 二、版本发布

**v0.23.1-preview.1**（另有 nightly `v0.23.0-nightly.20260906.92a8a8d179`）
- feat(web-shell): 可视化并管理动态工作流运行（#10594，@qqqys）
- perf(web-shell): 会话工作流投影派生优化

⚠️ 注：该版本首次发布时 release workflow 因 Docker 集成任务失败中断（[Issue #11185](https://github.com/QwenLM/qwen-code/issues/11185)），与 CI 效率问题 #11109 相关。

## 三、社区热点 Issues（Top 10）

1. **[#11198](https://github.com/QwenLM/qwen-code/issues/11198) [P1] 遥测上传未脱敏的工具错误原文** — 默认开启的 usage-statistics 通道将含 shell 命令行的原始错误文本上传至 RUM 端点，涉及凭据安全与数据隐私，当前最高优先级待人工处理。
2. **[#8662](https://github.com/QwenLM/qwen-code/issues/8662) [P3] TUI 渲染层从 ink 迁移至 OpenTUI（追踪）** — 30 条评论的长期讨论帖。现有 ink 7 + 1037 行补丁的结构性问题（闪烁等）难以根治，是终端 UX 路线图的核心。
3. **[#11031](https://github.com/QwenLM/qwen-code/issues/11031) [P1, 已关闭] /export html 在每个文件嵌入完整 Web Shell 运行时** — 空会话导出文件高达 19.5MB，已修复关闭。
4. **[#6181](https://github.com/QwenLM/qwen-code/issues/6181) [P1] 移动端 Web Shell 会话切换卡顿** — 四层成本（轮询、全量历史加载、逐帧 O(transcript) 渲染）叠加导致数秒冻结，已 ready-for-agent。
5. **[#11186](https://github.com/QwenLM/qwen-code/issues/11186) [P2] serve 主目录工作区读取用户级设置时通道所有权模型漏洞** — daemon 设置作用域归属设计缺陷，正在讨论中。
6. **[#11217](https://github.com/QwenLM/qwen-code/issues/11217) / [#11215](https://github.com/QwenLM/qwen-code/issues/11215) [P2] SSE 错误处理两大缺陷** — Anthropic SSE 失败时 headless JSON 误报成功；无状态码的限流错误跳过重试退避。非交互场景可靠性问题。
7. **[#11205](https://github.com/QwenLM/qwen-code/issues/11205) [P2] main 分支内容过滤器丢失六项安全加固** — #10421 与 #9742 合并冲突导致 EACCES、spawn 超时、候选上限等加固丢失。
8. **[#11146](https://github.com/QwenLM/qwen-code/issues/11146) / [#11162](https://github.com/QwenLM/qwen-code/issues/11162) [P2] 工具调度器取消语义漏洞** — 已中止请求被无关活动批次阻塞、排队取消跳过完成清理，@CorgiBoyG 连续两天深挖 CoreToolScheduler。
9. **[#11228](https://github.com/QwenLM/qwen-code/issues/11228) [P2] 右键菜单不消费按键事件** — `KeypressContext` 广播式派发丢弃返回值，composer 与审批对话框响应同一按键，暴露按键架构级问题。
10. **[#11109](https://github.com/QwenLM/qwen-code/issues/11109) [P2] release.yml 大量重复工作且一步验证无效** — 两次发布超时，其中一个 20 分钟步骤什么都不验证，CI/CD 效率痛点集中爆发。

## 四、重要 PR 进展（Top 10）

1. **[#11241](https://github.com/QwenLM/qwen-code/pull/11241) Playwright Browser SDK** — 模型可用的类型化浏览器控制 SDK：语义定位器、DOM 快照引用、视觉坐标三种目标识别方式，对标 Codex Browser Use。
2. **[#11242](https://github.com/QwenLM/qwen-code/pull/11242) Chrome Native Messaging 中继** — 通过本地 host + Chrome 扩展复用用户已有浏览器，桥接 CDP 命令与事件。
3. **[#11206](https://github.com/QwenLM/qwen-code/pull/11206) 多智能体 Mesh 准入基础** — 持久化工作区 agent 协作的规则与存储层：mention 路由、逐线程 turn 门控、树级 token 门控、原子预约。
4. **[#11236](https://github.com/QwenLM/qwen-code/pull/11236) Mesh 步骤 5/6/9** — 从"run 预约”到“agent 运行与关闭回报”的完整链路，含工具、dispatcher、REST 与 Web Shell 页面。
5. **[#11172](https://github.com/QwenLM/qwen-code/pull/11172) 一键远程 serve 启动** — 非回环绑定时自动生成临时 128-bit bearer token，打印配对二维码，同源 Shell 访问。
6. **[#11239](https://github.com/QwenLM/qwen-code/pull/11239) Goal 无进展自动暂停** — 连续三个自主 turn 无有效证据产出即自动暂停，防止 Goal 空转。
7. **[#11015](https://github.com/QwenLM/qwen-code/pull/11015) 命名会话 worktree 重置（Part 4B）** — `/clear` `/new` `/reset` 可作用于 worktree 隔离任务并保留其分支与文件。
8. **[#11086](https://github.com/QwenLM/qwen-code/pull/11086) 扩展按工作区运行时作用域化** — 全局扩展目录接入各工作区运行时，含 daemon/SDK 访问与 `@` 菜单更新。
9. **[#10347](https://github.com/QwenLM/qwen-code/pull/10347) 瞬时网络错误（EOF）自动重试** — 将包裹在 4xx 中的底层网络故障归类为可重试传输错误，惠及无 Ctrl+Y 的渠道。
10. **[#11238](https://github.com/QwenLM/qwen-code/pull/11238) / [#11240](https://github.com/QwenLM/qwen-code/pull/11240) Web Shell 会话导航增强** — 会话概览显示工作区/分支/PR 与状态过滤；侧边栏统一无工作区、归档与项目会话的展示。

## 五、功能需求趋势

- **多智能体协作（Mesh / Agent Team）**：#11206、#11225、#11236 密集落地，#10247 作为质量追踪总帖，是当前最活跃的架构方向。
- **浏览器自动化**：Browser SDK + Chrome 扩展两连发，明显在补齐对标 Codex/Claude 的 computer-use 能力。
- **Web Shell / serve 体验**：导出瘦身、移动端性能、会话导航、远程配对——几乎每条 P1/P2 都涉及 web-shell，是投入最重的模块。
- **终端 UX 重构**：ink → OpenTUI 迁移讨论持续发酵，渲染层换血在即。
- **IDE/ACP 集成**：#8542（ACP 运行中排队消息）、VS Code companion 的 indicator 失效问题仍在推进。
- **协议兼容性与可靠性**：OpenAI 兼容后端 `/effort` 透传（#11227）、SSE 错误分类与重试（#11215/#11217）。

## 六、开发者关注点

1. **隐私与凭据安全**：遥测未脱敏上传（#11198）+ 过滤器加固丢失（#11205），安全审查 debt 偏多，建议关注默认遥测行为。
2. **非交互/CI 场景可靠性**：headless 模式误报成功（#11217）、skill 的 PreToolUse hook 不触发（#11067）——脚本化使用者的核心痛点。
3. **工具调度与取消语义**：调度器中止/排队清理连续曝出三个 issue，异步生命周期管理是稳定性薄弱环节。
4. **CI/CD 成本**：release 重复工作、E2E 超时、flat timeout 在自托管池上被争抢杀死（#11209），工程效率问题集中。
5. **大文件导出与产物体积**：19.5MB HTML 导出虽已修复，但 transcript 入口仍携带 daemon runtime（#11100），瘦身仍在进行。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报 · 2026-09-07

## 一、今日速览

社区今日焦点集中在 **0.9.13 发布准备**上：变更日志收据 PR（#5967）已合并，标志着七个已合入功能补齐了发布说明，版本即将可切。测试基础设施获得重大修复——六个高负载下不稳定的并行测试已完成根因分析并隔离（#5970）。此外，ACP 协议合规性 bug（#5969）导致 JetBrains IDEA 等严格客户端无法连接，是今日最紧急的新报告。

---

## 二、版本发布

过去 24 小时无新 Release。v0.9.13 处于收尾阶段，等待最终验收。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 为什么重要 |
|---|-------|-----------|
| 1 | [#5969](https://github.com/Hmbown/DeepSeek-TUI/issues/5969) `serve --acp` 的 `initialize` 响应违反 ACP schema，`sessionCapabilities.list` 返回布尔而非对象 | **今日新报，兼容性阻断级**：JetBrains IDEA 等严格校验的 ACP 客户端直接连接失败，直接影响 IDE 集成用户群 |
| 2 | [#5929](https://github.com/Hmbown/DeepSeek-TUI/issues/5929) 六个测试在高负载并行下随机失败、单独运行通过 | 追踪型 issue，每次失败代价是重跑或 25 分钟 CI 矩阵；已有对应修复 PR #5970 |
| 3 | [#5620](https://github.com/Hmbown/DeepSeek-TUI/issues/5620) 上下文压力警告转瞬即逝，agent 不会主动响应 | 中等严重度的**安全信号失效**：静默上下文退化，12 条评论，社区讨论热烈 |
| 4 | [#5316](https://github.com/Hmbown/DeepSeek-TUI/issues/5316) EPIC-005：TUI Crate 拆解总跟踪 | 22 条评论的长期战略 epic，所有子任务与 PR 均汇报于此，是理解项目架构演进的主线 |
| 5 | [#5950](https://github.com/Hmbown/DeepSeek-TUI/issues/5950) 0.9.12 底部 UI（posture bar + metrics line）不可配置，`/statusline` 形同虚设 | 直击 0.9.12 重设计的可用性回退，用户失去常显上下文指标；修复已分两片落地 |
| 6 | [#5915](https://github.com/Hmbown/DeepSeek-TUI/issues/5915) Fleet 模型链路：provider → model → 候选名单 → 角色 | 创始人 9/6 亲自定方向，Fleet 多模型编排是核心路线图功能 |
| 7 | [#5931](https://github.com/Hmbown/DeepSeek-TUI/issues/5931) 会话 ID 漂移、审批回执写入失败只写日志不上报 | 涉及 checkpoint 孤儿化和审计完整性，日志显示 14 次会话 ID 漂移 |
| 8 | [#5926](https://github.com/Hmbown/DeepSeek-TUI/issues/5926) MCP footer 显示 "8 failed"，实际 7 个只是需要 OAuth 登录 | 已关闭：状态命名误导用户，配套修复 #5971 让 `/mcp` 优先展示需登录服务器 |
| 9 | [#5932](https://github.com/Hmbown/DeepSeek-TUI/issues/5932) 测试隔离泄漏：onboarding 测试把 fixture provider 写入真实 `setup_state.json` | **污染开发者真实环境**的测试卫生问题，代价高且隐蔽 |
| 10 | [#5872](https://github.com/Hmbown/DeepSeek-TUI/issues/5872) 引入 rusty_alloc 作为 mimalloc 的可选替代 | 社区贡献者需求：免 C 编译器、免构建脚本、可交叉编译；对应 PR #5968 已落地 |

---

## 四、重要 PR 进展（Top 10）

| # | PR | 内容 |
|---|-----|------|
| 1 | [#5967](https://github.com/Hmbown/DeepSeek-TUI/pull/5967) ✅ | 为七个已合入的 0.9.13 功能补齐 release-note 收据，**解除发布阻塞** |
| 2 | [#5970](https://github.com/Hmbown/DeepSeek-TUI/pull/5970) 🟡 | 修复 #5929 中 5/6 个负载不稳定测试，第六个论证为并行安全；附根因与复现证据表 |
| 3 | [#5973](https://github.com/Hmbown/DeepSeek-TUI/pull/5973) 🟡 | posture bar / metrics line 支持 `full/compact/hidden` 预设，可经 `/config` 实时切换（#5950 收尾） |
| 4 | [#5971](https://github.com/Hmbown/DeepSeek-TUI/pull/5971) ✅ | `/mcp` 优先列出需登录的服务器，失败刷新保留原始响应回执 |
| 5 | [#5968](https://github.com/Hmbown/DeepSeek-TUI/pull/5968) ✅ | opt-in 的 rusty_alloc 全局分配器特性，纯 Rust 实现 mimalloc v2.4.5 |
| 6 | [#5962](https://github.com/Hmbown/DeepSeek-TUI/pull/5962) ✅ | `/statusline` 重新接管底部渲染，上下文水位常显（#5950 上半片） |
| 7 | [#5965](https://github.com/Hmbown/DeepSeek-TUI/pull/5965) ✅ | 压缩摘要器支持自定义指令后缀 + 可配置原文保留条数（#5956） |
| 8 | [#5964](https://github.com/Hmbown/DeepSeek-TUI/pull/5964) ✅ | 斜杠命令可发现性：输入时及 `/help` 中展示子命令与用法（约 120 个命令中 70 个带参数） |
| 9 | [#5957](https://github.com/Hmbown/DeepSeek-TUI/pull/5957) ✅ | mid-turn MCP 刷新保持工具池 deferred 状态，避免整个 MCP 工具面瞬间涌入模型上下文 |
| 10 | [#5966](https://github.com/Hmbown/DeepSeek-TUI/pull/5966) ✅ | catalog 驱动的动态 provider 账户密钥 + 一等 `codewhale` 路由 + sandbox/ShannonNet 批量接入（rebase 落地） |

其他值得一提：[#5946](https://github.com/Hmbown/DeepSeek-TUI/pull/5946)（Fleet worker 交付物摘要）、[#5960](https://github.com/Hmbown/DeepSeek-TUI/pull/5960)（会话 ID 漂移改为可见通知）、[#5870](https://github.com/Hmbown/DeepSeek-TUI/pull/5870)（社区贡献：原子提交拆分按依赖排序）。

---

## 五、功能需求趋势

1. **多模型 Fleet 编排**：per-task 模型选择（#5955）、模型候选名单与角色分配（#5915）、worker 交付物可见性（#5946）——多 agent 多模型调度是当前最强主线。
2. **TUI 可配置性与可发现性**：底部 UI 配置（#5950）、命令用法提示（#5952）、Fleet 菜单精简（#5888）——0.9.12 重设计后的一轮体验回补。
3. **上下文管理**：压缩提示词可调与原文保留（#5956）、上下文压力主动响应（#5620）。
4. **IDE / 协议集成**：ACP schema 合规（#5969）暴露了对严格客户端兼容的迫切需求。
5. **构建与供应链轻量化**：rusty_alloc（#5872）免 C 工具链诉求。

## 六、开发者关注点

- **测试稳定性与隔离**：#5929（并行 flaky 测试）+ #5932（测试污染真实配置文件）双双出现，CI 可靠性与测试卫生是当前工程痛点。
- **错误静默化**：#5931、#5960、#5972 一系列改动反映统一方向——关键故障（会话漂移、回执失败、store 故障）从日志升级为用户可见通知。
- **状态误导**：#5926（“failed” 实为待登录）、#5887（长时间停在 "20 connecting"）表明 MCP 状态呈现仍是高频抱怨点。
- **Windows 体验**：#5908（输入动作假报成功）、#5909（CRLF 静默转 LF）、#5923（toggle_pin 阻塞 TUI 线程），Windows 路径的边角 bug 密集。

---
*数据来源：github.com/Hmbown/DeepSeek-TUI · 统计窗口：2026-09-06 ~ 2026-09-07（UTC）*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-09-07

## 1. 今日速览

今日无新版本发布，但社区活跃度极高（过去 24 小时 44 条 Issue 更新、16 条 PR 更新）。**Copilot GPT-6 Astra 路由错误修复**、**跨 Provider 故障转移（fallback chain）** 和 **steering 消息即时中断当前 turn** 是今日三大焦点。此外，OpenCode Go 强制要求 `x-opencode-session` 头引发的兼容性问题是本日突发的生态事件。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#4945](https://github.com/earendil-works/pi/issues/4945)** openai-codex 连接可靠性问题 —— TUI 卡在 `Working...` 无任何输出，76 条评论、32 👍，是当前最受关注的长尾问题，标注 inprogress。
2. **[#7547](https://github.com/earendil-works/pi/issues/7547)** Windows 使用方式调研（sink-thread）—— 官方发起的 Windows 体验讨论帖，57 条评论，用于决定核心修复与文档的优先级方向。
3. **[#9052](https://github.com/earendil-works/pi/issues/9052)** 全屏模式滚轮滚动速度仅为常规模式 1/3 —— 全屏 TUI 的核心体验缺陷，直接影响日常使用。
4. **[#8826](https://github.com/earendil-works/pi/issues/8826)** 为长时间瞬时故障设置 agent 重试退避上限 —— 指数退避在持续 503 场景下间隔失控，需要可配置上限。
5. **[#9230](https://github.com/earendil-works/pi/issues/9230)** OpenCode Go 要求 `x-opencode-session` 头（今日生效）—— 上游协议变更导致 prompt-cache 亲和性丢失，紧急兼容性问题，关联 [#9237](https://github.com/earendil-works/pi/issues/9237)（社区桥接包同样缺失该头）。
6. **[#9242](https://github.com/earendil-works/pi/issues/9242)** 跨 Provider 故障转移链 —— 请求在 transport/DNS 错误时自动切换到备用 provider，已有对应 PR（见下文）落地。
7. **[#9209](https://github.com/earendil-works/pi/issues/9209)** Copilot GPT-6 Astra 被路由到不支持的 /chat/completions 端点，返回 400；关联 [#9133](https://github.com/earendil-works/pi/issues/9133)（请求模型选择器支持 gpt-6 astra）。
8. **[#9244](https://github.com/earendil-works/pi/issues/9244)** MagicDNS/Tailscale 主机名 fetch 报 ENOTFOUND —— undici 未使用系统 dns.lookup，影响内网用户。
9. **[#9260](https://github.com/earendil-works/pi/issues/9260)** steering 消息应即时打断运行中的 turn —— 长命令执行时纠偏消息延迟生效，今日新提并已出 PR。
10. **[#9263](https://github.com/earendil-works/pi/issues/9263)** Anthropic 兼容网关 strict schema 兼容性 —— strict schema 与 `strict` 字段强绑定导致 Bedrock 代理类网关 400，今日新提并已出 PR。

## 4. 重要 PR 进展

1. **[#9259](https://github.com/earendil-works/pi/pull/9259)** steering 消息通过中断当前 turn 即时生效（fixes #9260）。
2. **[#9261](https://github.com/earendil-works/pi/pull/9261)** 新增 `sendStrictToolField` 兼容开关，解耦 strict schema 与 strict 字段（fixes #9263）。
3. **[#9253](https://github.com/earendil-works/pi/pull/9253)** Copilot GPT 模型改走 Responses 端点，修复 Astra 路由错误（fixes #9209），OPEN。
4. **[#9248/9249/9251](https://github.com/earendil-works/pi/pull/9251)** 跨 Provider 故障转移 hop，transport 错误时切到备用 provider（fixes #9242），多轮迭代后已合入。
5. **[#9250/9252](https://github.com/earendil-works/pi/pull/9252)** undici connect lookup 钉到系统 dns.lookup，修复 MagicDNS 解析失败（fixes #9244）。
6. **[#6881](https://github.com/earendil-works/pi/pull/6881)** 优先使用 provider 上报的计费成本替代目录费率计算，inprogress。
7. **[#9233](https://github.com/earendil-works/pi/pull/9233)** 模型鉴权改为实时解析而非启动快照，修复启动竞态。
8. **[#9224](https://github.com/earendil-works/pi/pull/9224)** OpenRouter `:free` 模型 maxTokens 钳制到基础模型上限，避免 400。
9. **[#9080](https://github.com/earendil-works/pi/pull/9080)** TUI 新增 jump-to-latest 控件，附视频 Demo。
10. **[#9137](https://github.com/earendil-works/pi/pull/9137)**（mitsuhiko，WIP）新增 Nix flake 支持；**[#7610](https://github.com/earendil-works/pi/pull/7610)** 新增 LLM Gateway 内置 provider，均 OPEN。

## 5. 功能需求趋势

- **Provider 兼容性与新模型支持**：GPT-6 Astra、OpenRouter、Copilot 端点路由、OpenCode Go 协议变更、Anthropic 兼容网关——上游生态变化是本日最密集的需求来源。
- **可靠性 / 容错**：重试退避上限、跨 Provider fallback、终端失败分类（#9247）等“生产可用性”诉求集中出现。
- **TUI 体验打磨**：全屏模式滚动速度、视口上方变更导致的破坏性重绘（#9240）、会话恢复图片全尺寸重渲染（#9256）、jump-to-latest。
- **扩展 API 深化**：暴露 ModelRuntime（#8791）、setTuiMode（#9238）、用户消息确认投递（#9236）、按调用工具确认（#9228）。
- **成本与缓存优化**：provider 上报成本、Anthropic 第 4 个 cache breakpoint（#9246）、Codex 图片 file_id 引用（#8617）。

## 6. 开发者关注点

- **Windows 体验仍是最大痛点**：shell_path 被 WSL 覆盖（#9229）、Shift+Enter 提交异常（#7175）等问题持续存在，官方已开 sink-thread 收集反馈。
- **流式中断/恢复体验**：TUI 卡死（#4945）、steering 延迟（#9260）、会话恢复模型名错误（#9243）反映状态管理的一致性问题。
- **上游协议变更响应速度**：OpenCode Go 头部要求当日生效即触发社区求助，凸显 provider 适配的敏捷性需求。
- **长任务可观测性与控制**：用户需要在长命令执行中纠偏、分类失败原因并跨 provider 续跑，核心诉求是“不丢上下文的连续工作流”。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 · 2026-09-07

## 一、今日速览

今日 oh-my-pi 连发两个补丁版本（v18.1.12 / v18.1.13），重点引入 **Muse Code 订阅接入**并修复了环境变量过滤缺陷。社区侧，Astra 扩展上下文窗口回归问题（#11093）当天报出、当天出修复 PR（#11094），响应迅速。插件生态的 lock.json 版本漂移（#11090）与 npm 安装的 Settings 隔离问题（#11048）成为开发者最集中的痛点。

---

## 二、版本发布

### [v18.1.13](https://github.com/can1357/oh-my-pi/releases)
- **`@oh-my-pi/pi-utils`**：修复 `filterChildShellEnv` 将 omp 进程自身的启动环境来源（dotenv 之前的 `NODE_ENV` 及从 `/proc/self/environ` 读取的启动器变量）错误应用到调用方传入的环境对象；现在来源过滤仅作用于相关场景。

### [v18.1.12](https://github.com/can1357/oh-my-pi/releases)
- **`@oh-my-pi/pi-ai`**：新增 **Muse Code 订阅**支持——登录、凭证刷新、推理调用及 `/usage` 配额上报，并带持久化限流退避机制，配额刷新可自动恢复而非无限重试。
- **`@oh-my-pi/pi-catalog`**：将 Muse Code 注册为 provider。

---

## 三、社区热点 Issues

1. **[#11021](https://github.com/can1357/oh-my-pi/issues/11021)** [CLOSED] Muse Spark 1.3 思考档位目录滞后
 `--thinking max` 已端到端可用，但目录仍将 1.3 系列封顶在 `xhigh`。12 条评论热度最高，标记 wontfix 关闭——与 v18.1.12 的 Muse Code 接入直接相关。

2. **[#11090](https://github.com/can1357/oh-my-pi/issues/11090)** [OPEN] 插件 lock.json 版本漂移
 lock 记录 `1.0.3` 但磁盘代码仍是 `1.0.2`，`doctor` 误报健康、`upgrade` 拒绝 npm-scope 插件。暴露插件管理链路三处缺陷，p2 优先级。

3. **[#11048](https://github.com/can1357/oh-my-pi/issues/11048)** [OPEN · **P1**] npm 安装下扩展 Settings 隔离
 扩展拿到独立 Settings 模块而非活跃会话配置，生成的 agent 定义丢失。今日唯一 P1，插件生态的核心阻塞问题。

4. **[#11093](https://github.com/can1357/oh-my-pi/issues/11093)** [CLOSED] 18.1.13 Astra 扩展上下文显示回归
 Extended Context 关闭时仍显示 1M 窗口。当天即有修复 PR #11094 响应。

5. **[#8058](https://github.com/can1357/oh-my-pi/issues/8058)** [OPEN] `before_agent_start` 缺失 `systemPromptOptions`
 legacy-pi-compat 层事件负载与 Pi 契约不符，导致依赖该字段的扩展每轮崩溃。长期未解的兼容性问题。

6. **[#10864](https://github.com/can1357/oh-my-pi/issues/10864)** [OPEN] TUI 编辑器渲染崩溃
 模块级 `theme` 未初始化时调用 `getColorMode()` 抛出未捕获 TypeError，会话中随机崩溃，稳定性硬伤。

7. **[#10278](https://github.com/can1357/oh-my-pi/issues/10278)** [CLOSED] omp-legacy-pi-bundled 导出缺失
 插件安装接连失败（先 `calculateContextTokens` 等），旧问题 #6859 的延续，与 #11048 同属 legacy 兼容层问题。

8. **[#11014](https://github.com/can1357/oh-my-pi/issues/11014)** [OPEN] Zhipu 429 重置时间解析错误
 中文“将在…重置”时间戳（北京时间）被强制按 UTC 解析，导致恰好晚 8 小时唤醒。典型的本地化时区 bug。

9. **[#10937](https://github.com/can1357/oh-my-pi/issues/10937)** [OPEN] Codex 服务器压缩重试不可见
 V2 中止 + V1 404 后以约 3 分钟间隔静默重试数分钟，TUI 无重试详情，长会话体验受损。

10. **[#11062](https://github.com/can1357/oh-my-pi/issues/11062)** [OPEN] AdviseTool 静默丢弃超预算建议
 以“Deferred”状态掩盖丢弃行为、误报重复、配额耗尽时遗留挂起建议——advisor 子系统的可信度问题。

> 另值得关注：[#7171](https://github.com/can1357/oh-my-pi/issues/7171)（子 agent 批量提交 findings）、[#11091](https://github.com/can1357/oh-my-pi/issues/11091)（向扩展开放内置浏览器）、[#9273](https://github.com/can1357/oh-my-pi/issues/9273)（`/clear` 后 AGENTS.md 未重读，已修复关闭）。

---

## 四、重要 PR 进展

1. **[#11101](https://github.com/can1357/oh-my-pi/pull/11101)** 模型/努力级别作用域的服务层级
 允许 fast mode 只对特定模型开启，直接响应 #7961 需求，今日新开。

2. **[#11094](https://github.com/can1357/oh-my-pi/pull/11094)** [P0] 恢复 Astra 扩展上下文 opt-in
 关闭：272K 标准窗口；开启：1.05M 文档窗口。修复 #11093，含显式 `contextWindow` 覆盖优先逻辑。

3. **[#11099](https://github.com/can1357/oh-my-pi/pull/11099)** [P0] Ask 自定义答案保留与推进
 粘贴+回车竞态、分片粘贴、多选自定义答案推进——Ask 交互体验的系统性修复。

4. **[#10056](https://github.com/can1357/oh-my-pi/pull/10056)** [P0] Eval 桥接获取未截断工具输出
 当前内核拿到的是被中间省略的模型侧文本（50 KiB 预算、60%头+25%尾），Eval 场景下信息严重丢失。

5. **[#11098](https://github.com/can1357/oh-my-pi/pull/11098)** 修复测试泄漏
 确定性复现 #11097 的 StatusLine 未销毁问题，配套 PR 当天跟进。

6. **[#11004](https://github.com/can1357/oh-my-pi/pull/11004)** Agent 定义文件作为主会话 persona
 `omp --agent reviewer` 直接以任意已发现 agent 启动主会话，一次性关闭 #6836/#5306/#7056 三个需求。

7. **[#11072](https://github.com/can1357/oh-my-pi/pull/11072)** Live editor attach
 通过 daemon broker 广播活跃会话，新增 `omp attach list/send`，**编辑器集成**方向的关键基建。

8. **[#9521](https://github.com/can1357/oh-my-pi/pull/9521)** 子 agent 硬性工具白名单
 frontmatter `tools:` 成为 MCP/扩展/自定义工具的硬 allowlist，重写后 23 个 review 线程全部处理完毕。

9. **[#10644](https://github.com/can1357/oh-my-pi/pull/10644)** [P1] 原子写入保留符号链接配置
 修复 dotfiles 用户 `mcp.json`/`config.yml`/`ssh.json` 被 rename 覆盖为普通文件的问题。

10. **[#9009](https://github.com/can1357/oh-my-pi/pull/9009)** [P1] Browser Relay 回收孤儿 debugger 附件
 relay 进程死亡后 Chrome debugger 附件永久残留，修复 #8930。

> 其他：[#10057](https://github.com/can1357/oh-my-pi/pull/10057)（暴露扩展上下文上限）、[#10835](https://github.com/can1357/oh-my-pi/pull/10835)（`ctx.agentIdentity`）、[#11075](https://github.com/can1357/oh-my-pi/pull/11075)（`/prewalk restart`）、[#9969](https://github.com/can1357/oh-my-pi/pull/9969)（LSP 懒发现嵌套项目根）。

---

## 五、功能需求趋势

1. **插件/扩展生态健壮性**（最强烈）：lock.json 漂移、Settings 隔离、legacy 导出缺失、内置浏览器未开放（#11091/#11100）——扩展 API 边界与宿主能力对齐是当前最大诉求。
2. **编辑器/外部集成**：`omp attach`（#11072）、persona 启动（#11004）、collab 自动托管（#9833）、后台自更新（#9035）。
3. **Provider 与模型管理**：Muse Code 接入落地；Astra 窗口/定价/压缩（#11093/#10937/#10980）；per-model fast mode（#7961/#11101）；Zhipu 时区修复。
4. **Agent 编排能力**：子 agent 批量 findings（#7171）、工具硬白名单（#9521）、advisor 投递策略（#10442/#11062）、prewalk handoff（#11018）。
5. **TUI/UX 细节**：自动补全刷新（#11060）、composer 残留空行（#11007）、wmux Windows 渲染（#11012）、resume 提示排版（#11001）。

---

## 六、开发者关注点

- **插件升级链路不可信**：lock 与实际代码不一致 + doctor 盲区 + upgrade 拒绝，三条命令互相矛盾（#11090），建议升级前谨慎核对 `node_modules` 实际版本。
- **npm 安装 vs bundled 行为分叉**：#11048 显示 npm CLI 下扩展拿到隔离 Settings，使用扩展的开发者应留意此差异直至修复。
- **长会话稳定性**：服务器压缩静默重试（#10937）、随机 TUI 崩溃（#10864）、advisor 配额耗尽挂起（#11062），长跑场景仍需关注。
- **本地化/时区陷阱**：Zhipu 429 中文时间戳解析（#11014）提示非英文 provider 的边缘 case 仍待覆盖。
- **测试基础设施**：多个 flaky test issue（#11097/#10836）表明 CI 稳定性在拖累合并节奏，配套修复 PR 已开始跟进。

---
*数据来源：GitHub can1357/oh-my-pi · 统计窗口 2026-09-07 前 24 小时*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*