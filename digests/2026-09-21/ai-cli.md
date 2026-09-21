# AI CLI 工具社区动态日报 2026-09-21

> 生成时间: 2026-09-21 03:57 UTC | 覆盖工具: 11 个

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

**数据窗口：2026-09-20 至 2026-09-21**

---

## 1. 生态全景

AI CLI 工具已从单纯的终端编码助手演化为**多形态 Agent 平台**（TUI、桌面端、Web Shell、浏览器扩展、语音、Computer Use 全线开花）。头部工具（Claude Code、Codex）凭借商业模式支撑快速堆功能，但**质量债同步累积**——回归 bug、静默失败、配额不透明成为社区最大抱怨。垂直工具（Pi、oh-my-pi、Qwen Code）则在 provider 兼容性、token/缓存成本治理上深耕，反映出用户从“能用”转向“可控、可算账”的成熟诉求。中日韩开发者的 IME/编码本地化问题在多个社区（Kimi、Pi、Qwen）高频出现，表明非英语市场已成为不可忽视的用户基本盘。

---

## 2. 各工具活跃度对比

| 工具 | 热点 Issues（更新） | PR 更新 | Release | 当前焦点 |
|---|---|---|---|---|
| **Claude Code** | 13+（含 #91870 204评论） | 5 | 无 | Mods/hooks 扩展性落地、模型文风回归 |
| **OpenAI Codex** | 15+（3 条 60+ 评论） | 10 | **4 个 alpha**（0.156.0） | Windows 桌面稳定性、MCP 兼容回归 |
| **Gemini CLI** | — | — | — | 数据缺失 |
| **Copilot CLI** | 10+ | 0 | 无 | MCP 兼容、v1.0.86 回归、批量关闭历史 Issue |
| **Kimi Code CLI** | 3 | 3 | 无 | CJK/编码修复、subagent 稳定性 |
| **OpenCode** | 10 | 10 | 无 | Bedrock 修复、长命令后台化、V2 迁移遗留 |
| **Qwen Code** | 10 | 10+ | **v0.24.2** | token 治理路线图、Web Shell/SSH 工作区 |
| **DeepSeek TUI** | 5 | 6（全合入） | 无（0.10.0 冲刺中） | 发布就绪、心跳/守护进程治理 |
| **Pi** | 10 | 8+ | **v0.86.1**（Meta Muse provider） | 0.86 回归、provider 兼容、性能 |
| **oh-my-pi** | 10 | 10 | **v18.2.7**（含 2 个 Breaking） | Antigravity 假 429、缓存成本优化 |

**节奏判断**：Codex 的 4-alpha 连发是全场最快迭代；Pi / oh-my-pi / Qwen 保持周级稳定发版；Claude Code、Copilot CLI、Kimi 今日处于观察期。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **MCP 兼容性/健壮性** | Claude Code（#92215 OAuth 失效）、Codex（#44458/#45269 capability 协商失败）、Copilot CLI（#4870 Figma `-32601`、#4731 竞态）、OpenCode（#50254 假握手） | 协议容错、超时状态机、认证流程是最大公约数痛点 |
| **Token/上下文成本治理** | Qwen Code（#12028 系列：非对话上下文占 45.9%）、oh-my-pi（#12574：$800/3天缓存重写）、Claude Code（#77298 per-call effort）、Pi（#9117 prompt deltas） | 可观测性 + 缓存命中率优化，是成本敏感团队的主线 |
| **静默失败/可观测性** | Claude Code（4 条）、DeepSeek TUI（#6184）、oh-my-pi（#8798）、OpenCode（#49982） | “无错误但行为错误”被各社区一致认定为信任成本最高的问题 |
| **长会话资源管理** | Claude Code（#95773 30GB 内存）、Copilot CLI（#4807 33GB 日志）、oh-my-pi（#12632 内核 OOM） | 内存泄漏与后台事件风暴普遍存在 |
| **CJK/国际化** | Kimi（#2657/#2658）、Pi（#9497 IME）、Qwen | 中文用户基数大的工具修复优先级明显更高 |
| **会话数据安全** | Copilot CLI（#1675 `git clean -fd` 删文件）、Qwen（#12002 密钥明文落盘）、Qwen（#12091 transcript 损坏） | 数据丢失/泄漏是红线级问题 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 可扩展性（Mods/hooks/plugins）、桌面+浏览器全端 | Pro/Max 订阅重度用户 | 官方模型深度绑定，内置能力 mod 化重构 |
| **Codex** | 全形态覆盖（TUI/桌面/语音/Computer Use/Web 定时任务） | ChatGPT 订阅用户 | Rust 内核，alpha 快速迭代、质量换速度 |
| **Copilot CLI** | 企业集成（OTel/FinOps/BYOK）、GitHub 生态 | 企业 & GitHub 原生用户 | 依托 VS Code 模型基础设施，更新节奏偏慢 |
| **Kimi CLI** | 中文体验、多后端兼容（OpenCode Go） | 中文开发者 | 轻量 + 开放 provider |
| **OpenCode** | 多 provider 碎片化适配、桌面端 | 自选模型的付费 Go 订阅用户 | Effect/TS，V1→V2 迁移期 |
| **Qwen Code** | Web Shell/SSH 工作区、headless 自动化、企业扩展分发 | 团队部署 & 运维场景 | 最系统的工程化治理（预算、checkpoint、轨迹面板） |
| **DeepSeek TUI** | 发布质量、runtime API（流恢复/幂等提交） | 终端原生用户 | Rust TUI，社区驱动，节奏稳健 |
| **Pi / oh-my-pi** | Provider 中立、性能、缓存经济学 | 高级/成本敏感开发者 | TS 单仓（pi-ai 层），同源竞争、互相借鉴（fullscreen 模式移植） |

---

## 5. 社区热度与成熟度

- **最活跃**：Claude Code（单 Issue 204 评论）、Codex（多 Issue 60+ 评论）——大用户基数的双雄，但也都是抱怨密度最高的。
- **快速迭代期**：Codex（4 alpha/天）、Pi、oh-my-pi、Qwen Code——发版频繁但回归频发（Pi 0.86.x 系列回归、Qwen v0.24.0 `/cd` P1）。
- **发布冲刺期**：DeepSeek TUI 0.10.0——小社区但工程质量意识强（release-blocker 管理、CI 治理）。
- **平稳/沉寂**：Copilot CLI 今日零 PR，且批量关闭历史 Issue（hooks、会话恢复、BYOK），动向需观察是清理还是放弃；Kimi 数据量小，属成长期。
- **成熟度信号**：Qwen Code 展现最系统的路线图治理（“每项 token 节省需测量代价” #12333）；oh-my-pi 社区出现了带实测数据（$800/3天）的成本分析，用户专业度高。

---

## 6. 值得关注的趋势信号

1. **“可扩展性军备竞赛”开打**：Claude Code 的 Mods 提案（204 评论）、Codex 的子代理 elicitation、Qwen 的 managed extensions、Pi 的 system message deltas——hooks/插件/subagent 编排是下一阶段平台竞争的核心战场。
2. **成本可观测性成为采购决策要素**：Codex 后台静默消耗 6% 配额（#37445）、oh-my-pi 缓存重写损耗实测、Qwen 非对话上下文占比量化——“看不见的 token 开销”正在从抱怨变为产品功能（配额提示栏、`/context all` 报告）。
3. **静默失败是行业级信任危机**：五个以上社区独立报告同类问题，建议开发者在选型时把“错误是否可见”作为硬指标。
4. **Windows 是质量洼地**：Codex 三条同症状会话卡死 Issue、崩溃问题，Copilot ARM64/jemalloc 崩溃——Windows/边缘平台投入普遍不足。
5. **安全与隐私问题开始浮出水面**：内联密钥明文落盘、私自 `git fetch`、检查点删文件——企业采用前应做安全审计。
6. **对开发者的实操建议**：升级需谨慎（Pi 0.86、Codex 0.154.0 均有 breaking 回归，锁定版本 + 回滚方案是标配）；长期无人值守任务（Codex Web #38350）需自建监控；中文团队可优先评估 Kimi/Qwen 的本地化成熟度。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据说明：数据截止 2026-09-21，来自 anthropics/skills 仓库。本期 PR 数据中评论数缺失（undefined），热度判断综合 PR/Issue 交叉引用、更新频率与议题关联度；**以下所有 PR 均为 OPEN 状态**，无已合并条目。

---

## 一、热门 Skills 排行（PR）

| # | Skill / PR | 功能与热点 | 状态 |
|---|---|---|---|
| 1 | **skill-creator 触发评测修复** [PR #1298](https://github.com/anthropics/skills/pull/1298) | 修复 skill-creator 触发评估的误报/漏报：per-worker 探针竞争、Windows 下 select() 失败、运行时故障被误判为非触发。关联社区热议的 Issue #556（触发率 0%）与 [PR #1769](https://github.com/anthropics/skills/pull/1769)（precision=100%/recall=0%），是当前**最核心的质量基建修复** | OPEN |
| 2 | **mcp-builder 修复集** [PR #1742](https://github.com/anthropics/skills/pull/1742) | 适配 mcp>=2 的 `streamable_http_client` 重命名与自定义 header；配合 [PR #1724](https://github.com/anthropics/skills/pull/1724)（默认模型升级到 claude-sonnet-5）及 Issue #1390 的评测 0 分问题，**mcp-builder 是修复最密集的官方 Skill** | OPEN |
| 3 | **md2video-audio** [PR #1703](https://github.com/anthropics/skills/pull/1703) | Markdown → Marp 幻灯片 → 带真人配音的 MP4 视频，零成本内容创作，社区关注度高 | OPEN |
| 4 | **AWT (AI Watch Tester)** [PR #822](https://github.com/anthropics/skills/pull/822) | AI 驱动的零代码 E2E 测试（视觉+浏览器控制），持续更新至 9 月，测试自动化方向代表 | OPEN |
| 5 | **Pyxel 复古游戏开发** [PR #525](https://github.com/anthropics/skills/pull/525) | Python 复古游戏创建/调试/验证，含确定性 headless 运行与帧检查，创作类 Skill 代表 | OPEN |
| 6 | **document-typography** [PR #514](https://github.com/anthropics/skills/pull/514) | 修复 AI 生成文档的孤行、寡段、编号错位等排版问题，直击“AI 文档普遍痛点” | OPEN |
| 7 | **blast-radius** [PR #1776](https://github.com/anthropics/skills/pull/1776) | 批量/破坏性操作前的“影响半径”检查清单（删库、批量发邮件等），安全护栏类新秀 | OPEN |
| 8 | **DOCX/PDF Office 修复系列** [PR #538](https://github.com/anthropics/skills/pull/538)、[PR #541](https://github.com/anthropics/skills/pull/541)、[PR #1790](https://github.com/anthropics/skills/pull/1790)、[PR #1734](https://github.com/anthropics/skills/pull/1734) | 文档 Skill 的长尾修复（大小写引用、w:id 冲突致文档损坏、rels 缺失、孤立批注），**文档处理是修复贡献最活跃领域** | OPEN |

---

## 二、社区需求趋势（来自 Issues）

1. **安全与信任边界**（最热，43 评论）：[Issue #492](https://github.com/anthropics/skills/issues/492) 社区 Skill 冒用 `anthropic/` 命名空间构成信任滥用风险；[Issue #412](https://github.com/anthropics/skills/issues/412) 提出 agent-governance 安全治理 Skill；#1175 关注 Skill 内权限逻辑的安全性。**供应链与权限治理是第一诉求**。
2. **组织级分发与共享**：[Issue #228](https://github.com/anthropics/skills/issues/228)（16 评论）要求 org 内 Skill 共享库/直链分享；#189 插件重复安装问题。
3. **评测与触发可靠性**：[Issue #556](https://github.com/anthropics/skills/issues/556)（12 评论）`claude -p` 永不触发 Skill；#1390 评测器静默伪造错误。Skill 的“可度量性”是落地瓶颈。
4. **上下文经济性**：#1487 `claude-api` Skill 单次注入 ~156k token 打爆上下文；#1329 提出 compact-memory 紧凑符号记忆 Skill。
5. **质量门禁工作流**：#1385 提出三段式推理质量门禁管线（校准→对抗审查→交付验证）。
6. **平台兼容性**：#29 Bedrock 支持、#16 Skills 与 MCP 互操作。

---

## 三、高潜力待合并 Skills（OPEN 但活跃）

- **[PR #1298](https://github.com/anthropics/skills/pull/1298)** + **[PR #1769](https://github.com/anthropics/skills/pull/1769)**：skill-creator 触发评测双修复，直击核心 Issue #556/#1721，合并优先级高。
- **[PR #1742](https://github.com/anthropics/skills/pull/1742)**：修复 Issue #1668，mcp>=2 兼容属阻塞性 bug。
- **[PR #1790](https://github.com/anthropics/skills/pull/1790)** / **[PR #1765](https://github.com/anthropics/skills/pull/1765)**：9 月新鲜提交的 docx/office 小型修复，路径明确、易合并。
- **[PR #525](https://github.com/anthropics/skills/pull/525)**（Pyxel）与 **[PR #822](https://github.com/anthropics/skills/pull/822)**（AWT）：长期打磨（3 月起持续更新至今），社区驱动的功能型 Skill 代表。

---

## 四、生态洞察（一句话）

> **当前社区最集中的诉求不是“更多 Skill”，而是“可信的 Skill”——即命名空间安全治理、可复现的触发评测、以及不撑爆上下文的轻量化加载，这三者共同构成 Skills 生态从 demos 走向生产的关键瓶颈。**

---

# Claude Code 社区动态日报 — 2026-09-21

## 1. 今日速览

今日无新版本发布。社区焦点集中在 **Mods 扩展性提案（#91870）** 官方更新进展——Anthropic 确认将在数周内交付 function hooks，并有多条相关 PR（diff mod、telemetry mod）活跃合入。同时，**模型行为问题持续发酵**：文风重复、英式拼写、Auto mode 分类器误拦截等反馈占据多页 Issue，Discord 插件消息静默丢弃的回归问题也在 2.1.278 上重现。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **#91870 — Mods：让 Claude Code 可扩展性提升 10 倍**（204 评论 / 124 👍）
   官方 9 月 9 日更新确认 function hooks 将在“数周”内交付。这是当前社区参与度最高的提案，直接定义了 hooks + plugins 的未来形态。[链接](https://github.com/anthropics/claude-code/issues/91870)

2. **#77136 — Claude 4.7/4.8/5.0/Fable 文风重复、散文连贯性差**（124 评论 / 436 👍）
   👍 数最高，跨多个模型版本复现，即使有明确风格指令仍出现修辞口癖，反映模型质量回归的广泛不满。[链接](https://github.com/anthropics/claude-code/issues/77136)

3. **#76694 — Cowork 合并后丢失“选择文件夹”，被替换为上传式知识菜单**（30 评论）
   Chat/Cowork 合并引发工作流断裂，影响项目级上下文管理，桌面端用户反馈强烈。[链接](https://github.com/anthropics/claude-code/issues/76694)

4. **#22992 — 请求支持 RFC 8628 设备码认证（无头环境 Pro/Max）**（19 评论 / 36 👍）
   长期悬置的 SSH/容器场景登录痛点，服务器用户的刚需。[链接](https://github.com/anthropics/claude-code/issues/22992)

5. **#95326 — Claude in Chrome 在 reddit.com 上所有工具被安全限制封锁**（7 评论）
   9 月 18 日起突然失效，疑似安全策略误伤，影响浏览器扩展可用性。[链接](https://github.com/anthropics/claude-code/issues/95326)

6. **#77298 — Agent (Task) 工具请求 per-call `effort` 参数**（6 评论 / 18 👍）
   当前只能通过 agent 定义文件的 frontmatter 设置推理力度，缺少调用时灵活性，子代理编排用户的普遍诉求。[链接](https://github.com/anthropics/claude-code/issues/77298)

7. **#92215 — Claude Design 一方 MCP 持续 403，OAuth 流程失效**（6 评论）
   token 未携带 design scope、`claude mcp login` 已死、错误提示指向不存在的命令——三方故障叠加。[链接](https://github.com/anthropics/claude-code/issues/92215)

8. **#84698 — Desktop 在 diff/commit 刷新时后台悄悄执行 `git fetch`**（6 评论）
   隐私/网络层面不可接受且无开关禁用，涉及企业合规场景。[链接](https://github.com/anthropics/claude-code/issues/84698)

9. **#72957 — Write/Edit 工具静默解码 `\uXXXX` 破坏转义序列文本**（has repro）
   无法在文件中保存字面 `\uXXXX`，对测试数据/Unicode 处理是数据损坏级 bug。[链接](https://github.com/anthropics/claude-code/issues/72957)

10. **#95775 — Discord 插件入站消息静默丢弃（2.1.278 上回归 #86566）**
    typing 指示器触发但无会话轮次，通道功能在最新版再次失效，回归问题反复出现值得关注。[链接](https://github.com/anthropics/claude-code/issues/95775)

其他速览：#95773（macOS 上内存泄漏吃掉 30GB RAM）、#95425（`/login` 显示成功但 token 未保存）、#95777（Auto mode 分类器无视用户明确批准仍拦截）。

## 4. 重要 PR 进展

过去 24 小时共 5 条 PR 更新，多数与 Mods 体系落地相关：

1. **#95423 — diff mod：只读 shell 命令后不再重复拉取 diff**（@poteat, OPEN）
   内置面板仅在有写操作后刷新，mod 此前对 `ls`、`git status` 等只读命令也刷新，造成开销；现读取 `isReadOnly` 对齐行为。[链接](https://github.com/anthropics/claude-code/pull/95423)

2. **#95698 — 修复三个捆绑插件 hook 脚本未加引号/未走 bash 的问题**（@claude[bot], OPEN）
   涉及 ralph-wiggum、output-style 插件的 Stop hook，修复路径含空格时的执行失败（refs #95673、#78490）。[链接](https://github.com/anthropics/claude-code/pull/95698)

3. **#95587 — diff mod：恢复会话时打开面板、/clear 保留、会话行跟随引擎**（@poteat, CLOSED）
   继续消除 mod 与内置 diff 面板的行为差异，共三处对齐，已合并关闭。[链接](https://github.com/anthropics/claude-code/pull/95587)

4. **#94847 — diff mod：首次编辑仅在确有文件可列时才打开面板**（@bcherny, OPEN）
   避免对仓库外/ignored 文件的编辑弹出空面板的体验问题。[链接](https://github.com/anthropics/claude-code/pull/94847)

5. **#95618 — telemetry mod：通过 $ 收集完整行、批量上报，仅限内置插件**（@poteat, CLOSED）
   明确遥测边界：拒绝用户/管理员安装的插件的上报，隐私设计上是个积极信号。[链接](https://github.com/anthropics/claude-code/pull/95618)

## 5. 功能需求趋势

- **Mods / Hooks / Plugins 可扩展性**：#91870 及配套 PR 显示这是 Anthropic 当前投入最重的方向，diff、telemetry 等内置能力正以 mod 形式重构。
- **子代理与模型编排**：per-call `model`/`effort` 覆盖、确定性模型路由（#77298、#69545）是高级用户的高频诉求。
- **模型行为质量**：文风口癖、英式拼写（#77136、#90603、#91679）形成聚类，多账号可复现。
- **无头/远程环境认证**：设备码流（#22992）、token 持久化（#95425）持续被请求。
- **Worktree 隔离与安全模型**：跨 worktree 写入守卫的边界问题（#95389、#95776）暴露文档与实现不一致。
- **MCP 连接器能力补全**：Google Drive 无法更新已有文件内容（#95292）。

## 6. 开发者关注点

1. **静默失败类 bug 是最大痛点**：消息丢弃（#95775）、写入守卫不生效（#95389）、hook systemMessage 不渲染（#95774）、token 未保存（#95425）——均无错误提示，排查成本极高。
2. **回归问题频发**：Discord 插件问题在 2.1.105 修复后于 2.1.278 重现；Chrome 扩展安全限制突然收紧，缺少变更通告。
3. **不可关闭的后台行为**：私自 `git fetch`（#84698）、“Classify session states” 未文档化且涉及隐私与成本（#60955，22 👍）。
4. **权限/安全层的可配置性不足**：Auto mode 分类器凌驾于用户批准之上（#95777）、Safeguard 误拦截（#95670），用户希望有显式覆盖路径。
5. **资源占用**：16GB 机型吃满 30GB 内存（#95773）表明长会话内存管理仍需改进。

---
*数据来源：github.com/anthropics/claude-code · 统计窗口：2026-09-20 至 2026-09-21*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-09-21）

## 📰 今日速览

Codex 团队今日密集发布了 4 个 alpha 版本（v0.156.0-alpha.10 至 alpha.13），迭代节奏极快。社区方面，Windows 桌面端“第二条消息无法发送”问题持续发酵，多个独立 Issue 报告相同症状；MCP 兼容性问题（尤其是 0.154.0 的 experimental capabilities 协商失败）成为新热点。PR 侧以 TUI 体验打磨为主，子代理（subagent）和语音功能也有重要修复。

---

## 🚀 版本发布

过去 24 小时连续发布 4 个 alpha 版本，均无详细 changelog，处于快速迭代通道：

| 版本 | 链接 |
|---|---|
| rust-v0.156.0-alpha.13 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.13) |
| rust-v0.156.0-alpha.12 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.12) |
| rust-v0.156.0-alpha.11 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.11) |
| rust-v0.156.0-alpha.10 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.10) |

---

## 🔥 社区热点 Issues

1. **[#25178](https://github.com/openai/codex/issues/25178)** — Windows 10 22H2 上 Computer Use 截图因 `SetIsBorderRequired` 接口不受支持而失败（0x80004002）。73 条评论、28 👍，是本周讨论最热烈的长期 bug。

2. **[#38350](https://github.com/openai/codex/issues/38350)** — Codex Web 定时任务在成功运行后**未经授权自动暂停**，多个无关任务同时失效。69 条评论，涉及自动化可靠性，影响生产工作流。

3. **[#37445](https://github.com/openai/codex/issues/37445)** — 受控实验证实：仅打开 ChatGPT 桌面应用（未提交任何 prompt），后台建议每次固定消耗 **6% 周配额**。涉及配额透明度，13 👍。

4. **[#29343](https://github.com/openai/codex/issues/29343)** — Chrome 插件、Browser/Computer Use **静默拒绝**与某些站点交互，Pro 用户（€225/月）报告，安全检查机制缺少反馈。

5. **[#41622](https://github.com/openai/codex/issues/41622)** — 请求在 config.toml 中增加**关闭自动对话 recap** 的设置。83 👍 居今日之首，反映资深用户对“噪音输出”的强烈不满。

6. **[#44458](https://github.com/openai/codex/issues/44458)** — CLI 0.154.0 实验性 capability 破坏内置 Messages 和 Computer Use MCP 启动；[#45269](https://github.com/openai/codex/issues/45269) 报告了相同根因（`capabilities.experimental` 被拒绝，JSON-RPC -32603），提示版本兼容性回归。

7. **[#43347](https://github.com/openai/codex/issues/43347)** — Windows 端关闭最后一个 Browser Use 标签页会**导致整个桌面应用崩溃**，跨两个版本复现。

8. **[#45797](https://github.com/openai/codex/issues/45797) / [#46590](https://github.com/openai/codex/issues/46590) / [#46299](https://github.com/openai/codex/issues/46299)** — 三个独立 Issue 均报告 Windows 桌面端**首轮对话后第二条消息卡死/无法发送**，重装仅临时缓解。症状高度一致，疑似同一底层问题，值得官方合并跟进。

9. **[#45449](https://github.com/openai/codex/issues/45449)** — macOS 27 上 Chrome 扩展已安装但原生消息 manifest 缺失，无法与桌面应用连接。

10. **[#44546](https://github.com/openai/codex/issues/44546)** — 要求**彻底移除桌面宠物功能**（13 👍）。社区对强行加入的趣味性功能存在明显分歧。

---

## 🔧 重要 PR 进展（多为 bot 提交、已合入）

1. [#46938](https://github.com/openai/codex/pull/46938) — TUI 新增 Mermaid/数学/表格的**独立渲染开关**，可回退显示源码。
2. [#46917](https://github.com/openai/codex/pull/46917) — 模型目录强制校验**运行时 provider 要求**，修复缓存目录过期问题。
3. [#46912](https://github.com/openai/codex/pull/46912) — 配额警告**常驻 composer 提示栏**，与 Issue #37445 的配额透明度诉求呼应。
4. [#46877](https://github.com/openai/codex/pull/46877) — **子代理可请求 MCP elicitation 输入**，解锁子线程中的浏览器登录、表单填写等交互。
5. [#46880](https://github.com/openai/codex/pull/46880) — 修复语音播放：jitter buffer 窗口扩展 + PCM 直通，解决丢包和静音覆盖。
6. [#46922](https://github.com/openai/codex/pull/46922) — 修复 realtime V3 语音转写在 handoff 时的错乱覆盖问题。
7. [#46867](https://github.com/openai/codex/pull/46867) — 子代理活动**延迟至父答案流完成后渲染**，避免冲掉正在流式输出的回答。
8. [#46883](https://github.com/openai/codex/pull/46883) — 新增 `/tui` 命令，可切换 Scrollback/Fullscreen 模式。
9. [#46895](https://github.com/openai/codex/pull/46895) / [#46884](https://github.com/openai/codex/pull/46884) — TUI 支持右键复制选中文本、链接单击打开并美化裸 URL。
10. [#46897](https://github.com/openai/codex/pull/46897) — 活动图表遵循终端实际色彩级别，修复 Windows Terminal 降级为低色深。

---

## 📈 功能需求趋势

- **可配置性/降噪**：关闭自动 recap（#41622, 83 👍）、独立渲染开关（PR #46938）、MCP-only 模式（[#6049](https://github.com/openai/codex/issues/6049), 46 👍）——社区强烈希望对输出和行为有精细控制。
- **MCP 生态兼容性**：experimental capabilities 协商（#44458、#45269、#45889）和 OAuth scopes（#20503）相关故障集中出现，第三方 MCP 集成是脆弱点。
- **Windows 桌面稳定性**：会话卡死、应用崩溃、策略误拦截（#43633）多发，Windows 端质量明显落后于 macOS。
- **配额与计费透明度**：后台静默消耗配额（#37445）引发信任担忧。

---

## ⚠️ 开发者关注点

1. **Windows 会话流断裂**是当前最高频痛点（至少 3 个独立 Issue），重装仅临时有效，尚无官方 workaround。
2. **0.154.0 引入的 MCP breaking change** 影响 messages/computer-use 及 Fantastical 等第三方服务器，升级前建议锁定版本。
3. **API-key 认证功能受限**（#45341）：Chrome 浏览器控制不支持 apikey 认证，混合用户受影响。
4. **长期未修的老 bug**（#25178 追踪近 4 个月、#20503 近 5 个月）显示核心兼容性问题修复节奏偏慢。
5. 企业/自动化用户需注意 Web 端定时任务的自动暂停问题（#38350），关键任务建议加监控。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-09-21** | 数据来源：github.com/github/copilot-cli

---

## 1. 今日速览

过去 24 小时无新版本发布、无 PR 活跃更新，社区动态全部集中在 Issue 侧。讨论热度最高的仍是 MCP 兼容性问题（Figma 远程服务器、Google OAuth），同时新增 3 条高质量 triage Issue（#4917-#4919），涉及 auto 模式模型选择策略与 ARM64 平台兼容性。今日有大量历史 Issue 被批量关闭，涉及 hooks、会话恢复、BYOK 等长期跟踪的缺陷。

---

## 2. 版本发布

过去 24 小时无新 Release。（当前社区讨论基线版本约为 v1.0.86）

---

## 3. 社区热点 Issues

1. **#4870 [已关闭] Figma 远程 MCP 服务器加载失败（`-32601` 被视为致命错误）**
   👍 11 | 评论 8 | 作者 @JustJan
   Figma 托管 MCP 服务器认证初始化成功，但 CLI 的 `server/discover` 探测将 `-32601` 错误当作致命失败，导致工具永不注册——而 VS Code 中工作正常。MCP 互操作性问题的典型代表，关注度高。
   🔗 github/copilot-cli Issue #4870

2. **#3762 [已关闭] `contextTier` 配置项无效**
   评论 7 | 作者 @matthall88
   长上下文配置仅在手动通过 model picker 选择后才生效，配置驱动的场景完全失效，影响自动化工作流。
   🔗 github/copilot-cli Issue #3762

3. **#1675 [已关闭] 检查点恢复执行 `git clean -fd` 永久删除未跟踪文件**
   评论 5 | 作者 @barucoh
   数据丢失级别的严重缺陷：Escape 恢复检查点会清空所有 untracked 文件，是本库历史上最危险的行为之一。
   🔗 github/copilot-cli Issue #1675

4. **#4224 [已关闭] 子代理 OTel spans 缺失计费属性，外部成本核算低估**
   评论 5 | 作者 @stefanpinson
   企业用户做成本归集时子代理调用的计费属性全部缺失，直接影响 FinOps 场景。
   🔗 github/copilot-cli Issue #4224

5. **#4839 [开放] 提供禁用任务栏图标的选项**
   👍 3 | 评论 4 | 作者 @logar16
   多会话用户图标堆积干扰，需求简单但反映 UI 可配置性的普遍诉求。
   🔗 github/copilot-cli Issue #4839

6. **#4807 [开放] 空闲进程陷入 FileWatch 事件风暴：占用 2 核 CPU、写出 33+ GB 日志**
   评论 2 | 作者 @nayato
   资源泄漏严重案例，持续 35 小时高 CPU，值得关注官方修复进度。
   🔗 github/copilot-cli Issue #4807

7. **#4731 [开放] 超时取消后向同一 MCP 服务器派发 `tools/list` 刷新，导致工具永久丢失**
   评论 2 | 作者 @tecrogue
   取消 + 刷新的竞态使该服务器工具在进程生命周期内被剥离，MCP 状态机健壮性问题的深挖报告。
   🔗 github/copilot-cli Issue #4731

8. **#4917 [开放/triage] Auto 模型选择在 Linux 内核补丁系列任务中能力不足**
   作者 @rppt
   来自内核开发者的反馈：gpt-5.6-sol 级别模型无法遵守 commit 边界，反映 Auto 选择策略对高强度工程任务的适配问题。
   🔗 github/copilot-cli Issue #4917

9. **#4918 [开放/triage] 内置 ARM64 ripgrep 在 64 KiB 页的 Linux 上因 jemalloc 崩溃**
   作者 @alejandro5042
   平台兼容性硬伤：搜索工具在特定 ARM64 配置上完全不可用。
   🔗 github/copilot-cli Issue #4918

10. **#4919 [开放/triage] auto 模式下 `/ask` 报模型不支持**
    作者 @ecki
    v1.0.86 新引入的问题，长时间任务中用 `/ask` tangents 反复失败，可能是最新版本回归。
    🔗 github/copilot-cli Issue #4919

---

## 4. 重要 PR 进展

过去 24 小时无 PR 更新，本节省略。

---

## 5. 功能需求趋势

- **MCP 生态兼容性**（#4870、#4606、#3958、#4731）：远程服务器协议容错、OAuth issuer 处理、Windows .bat 启动、超时状态机，是最大痛点集群。
- **会话可靠性**（#4098、#2012、#4673、#1675）：events.jsonl 损坏、恢复时自动续跑用户已中止的任务、检查点误删文件——用户对“会话不丢数据、不失控”的诉求强烈。
- **模型选择与 BYOK**（#4917、#3118、#2670、#3762）：Auto 策略智能度、新模型目录同步、长上下文配置生效。
- **UI/交互可配置性**（#4839、#3692、#3034）：Escape 行为、prompt 暂存、任务栏图标开关。
- **平台兼容性**（#4918、#2726、#3958）：ARM64、iTerm2/PTY、Windows 细节问题持续存在。

---

## 6. 开发者关注点

1. **数据安全是红线**：检查点恢复误删 untracked 文件（#1675）、会话文件损坏不可恢复（#4098/#2012）这类问题信任成本最高。
2. **资源与稳定性**：FileWatch 事件风暴（#4807）、搜索工具卡死（#4448）表明后台进程管理仍需打磨。
3. **Hooks/插件机制成熟度**：`preToolUse` 拒绝不生效（#3874）、多 hook additionalContext 只保留最后一个（#3589）、extensions 工具死锁（#2348），扩展生态的可靠性问题集中。
4. **企业侧成本可观测性**：OTel 计费属性缺失（#4224）、BYOK 被误报 premium 请求（#2670），影响团队级部署决策。
5. **v1.0.86 新回归**：`/ask` 在 auto 模式失败（#4919），建议升级用户留意。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-09-21）

> 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 一、今日速览

今日无新版本发布，社区活跃度集中在 Bug 修复方向：三个新提交的 PR 分别修复了 **CJK 输入法 Enter 误提交**、**Windows GBK 编码崩溃**和 **OpenCode Go 兼容性**问题。同时，两个新 Issue 反映了 subagent 启动时的 OAuth 端点超时和超大 prompt 导致的正则栈溢出崩溃，值得稳定性敏感的用户关注。

---

## 二、版本发布

过去 24 小时无新 Release。（当前社区反馈显示最新版本为 2.0.2）

---

## 三、社区热点 Issues

今日共 3 条 Issue 有更新（数据量少于 10 条，以下为全部）：

1. **[#2650](https://github.com/MoonshotAI/kimi-cli/issues/2650) [Bug] Subagent 间歇性启动失败：auth.kimi.ai OAuth token 获取超时**
   - 重要性：★★★★★
   - 主会话认证正常，但 subagent 启动时间歇性因 OAuth 连接超时失败，重试可恢复。疑似 auth 端点瞬时抖动导致整个 subagent spawn 中断，属于可靠性/重试机制缺陷，对依赖多 agent 工作流的用户影响较大。

2. **[#2655](https://github.com/MoonshotAI/kimi-cli/issues/2655) [Bug] 大 prompt 导致客户端崩溃：路径正则栈溢出（~900KB 输入）**
   - 重要性：★★★★☆
   - 在发起任何网络请求前，约 900KB 的输入即触发路径解析正则的栈溢出崩溃（v2.0.2）。暴露了输入预处理的健壮性问题，尚无维护者回复，建议关注后续修复进展。

3. **[#1534](https://github.com/MoonshotAI/kimi-cli/issues/1534) [已关闭] CLI 在终端界面乱序且自动重复**
   - 重要性：★★☆☆☆
   - 中英文双语报告的终端 UI 渲染问题（调整终端尺寸后界面混乱）。今日关闭，属长期遗留问题的清理，无评论互动。

---

## 四、重要 PR 进展

今日共 3 条 PR 更新（数据量少于 10 条，以下为全部）：

1. **[#2658](https://github.com/MoonshotAI/kimi-cli/pull/2658) fix(web): 保留 IME 输入组合状态，修复 Enter 误提交**（作者：@dvd233）
   - 修复 [#2643](https://github.com/MoonshotAI/kimi-cli/issues/2643)：`kimi web` 中 CJK 输入法组合未确认时按 Enter 会误提交 prompt。根因是 macOS/WKWebView 下 WebKit 在 keydown 处理前就清除了 `isComposing`。对中文/日文/韩文用户是高价值修复。

2. **[#2657](https://github.com/MoonshotAI/kimi-cli/pull/2657) fix(print): 处理不支持的 stdout 编码**（作者：@dvd233）
   - 修复 [#2629](https://github.com/MoonshotAI/kimi-cli/issues/2629)：Windows 控制台使用 GBK 等传统编码时，print 模式输出超编码字符抛出 `UnicodeEncodeError` 直接终止。方案是在写 stdout 前按实际编码做清洗。中文 Windows 用户的刚需修复。

3. **[#2656](https://github.com/MoonshotAI/kimi-cli/pull/2656) fix(llm): 为 OpenCode Go 主机发送 x-opencode-session 头**（作者：@FOWEPJF255）
   - 修复 [#2653](https://github.com/MoonshotAI/kimi-cli/issues/2653)：OpenCode Go 对缺失稳定 `x-opencode-session` 头的请求返回 HTTP 400。PR 自动检测 `opencode.ai` 官方域名并注入当前 Kimi 会话 ID，改善第三方平台兼容性。

---

## 五、功能需求趋势

从近期 Issues/PRs 观察：

- **稳定性与容错**：subagent OAuth 超时（#2650）、大输入栈溢出（#2655）表明社区对重试机制和输入预处理的健壮性有明确诉求。
- **国际化 / 多平台兼容**：三个 PR 中两个涉及 CJK 输入法和非 UTF-8 编码（#2658、#2657），中文用户群体的本地化体验是高频贡献方向。
- **第三方平台集成**：OpenCode Go 等外部 LLM 网关的兼容性修复（#2656）显示用户在将 kimi-cli 与多种后端组合使用。

---

## 六、开发者关注点

- **subagent 可靠性**：OAuth token 获取缺乏超时重试，瞬时网络问题会级联放大为工作流失败。
- **大输入处理**：路径解析正则在超大 prompt 下栈溢出，建议在预处理阶段做长度保护。
- **Windows / CJK 环境**：编码和 IME 问题是中文开发者的两大痛点，#2657/#2658 尚待合入，受影响用户可订阅跟踪。
- **维护者响应**：#2655 等新 Issue 暂无官方回复，建议关注其认领情况。

---
*本日报基于过去 24 小时 GitHub 数据自动汇总，链接均指向对应 Issue/PR 页面。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-21

## 今日速览

今日无新版本发布，但社区修复活动非常活跃。Bedrock 工具图片导致会话卡死的顽固 Bug 已有修复 PR 合入（#50272），Desktop 端浏览器登录 OpenCode Go 的引导流程（#50267）和后台长命令迁移（#50276）是今日亮点。Zen 免费模型重试时间不断升级的问题（#50093）持续引发用户不满。

## 版本发布

过去 24 小时无新 Release。

## 社区热点 Issues

1. **#48069 Bedrock GPT-6 Astra 读取图片后请求失败**（已关闭）— read 工具返回图片后，Bedrock ConverseStream 返回 400，会话卡死。13 条评论，今日已被 PR #50272 修复关闭。
2. **#50093 Zen 免费模型超限后重试计时器跨模型持续升级**（OPEN）— 用户等待 6 小时后切换模型，重试时间反而更长，8 条评论、5 👍，反映免费额度体验问题严重。
3. **#9955 TUI 垂直空间浪费、padding 过多**（已关闭）— 21 👍 的高热度 UX 投诉，涉及顶栏/底栏合并等优化，长期跟踪后今日关闭。
4. **#22260 read 工具应支持音视频附件**（已关闭）— 目前音视频被当作二进制拒绝，请求作为模型原生媒体附件传递，8 👍，今日关闭。
5. **#22103 TUI token 计数器应显示子代理用量**（已关闭）— 当前只统计主会话，子代理 token 不可见，9 👍，已解决。
6. **#49982 配置变更时插件重载失败，静默丢失自定义 agents/命令**（OPEN）— `opencode serve --service` 下报 `TypeError: pe is not a function`，需重启恢复，是 v2.0.9 的严重可用性问题。
7. **#50155 DeepSeek V4 Flash 要求 Global 区域但缺少 Privacy 设置项**（OPEN）— 付费 Go 订阅用户被区域校验卡住，设置项缺失。
8. **#50206 OpenCode Go 模型输出畸形 XML/DSML 工具调用**（OPEN）— 模型输出非合法工具调用 payload，导致工具执行失败，影响面较广。
9. **#49938 opencode.ai 改版后 default2 workspace 丢失**（OPEN）— 付费用户在新 Web UI 中无法访问原 workspace，5 👍。
10. **#14791 Agent 偏好用 bash 而非 grep/glob 工具**（已关闭）— 长期被讨论的工具选择问题，今日关闭，值得关 注是否有行为改进落地。

## 重要 PR 进展

1. **#50272**（已合）修复 Bedrock 工具图片 400 错误 — 仅对 Claude/Nova/Llama 4 保留图片在 tool result 中，其余模型上提处理。同时关闭 #48069、#49443。
2. **#50267** Desktop 登录引导改为浏览器 OAuth — 选择 OpenCode Go/Console 直接跳浏览器登录，API key 移入"高级"选项。
3. **#50276** 长时间运行的 shell 命令 5 秒后转入后台 — 防止 dev server 阻塞会话，关联 #34366、#47350。
4. **#50270** 删除会话时同步清理 V1 遗留数据行 — 修复迁移后 `session/message/part` 旧表数据永久残留。
5. **#50254**（已合）MCP 在未认证 200 握手时强制启动 OAuth — 修复 Gmail MCP 假连接问题。
6. **#50264**（已合）升级 togetherai SDK 使流式响应上报 usage — 修复 Together 模型 token/成本恒为 0 的问题。
7. **#50231** Effect 升级至 rc.115 — 涉及 socket 生命周期、schema 解析等多项 breaking changes 适配。
8. **#50275** Code Mode search 整词匹配优先于子串匹配 — 提升 `zones` 匹配 `get_zones` 而非 `get_timezones` 的排序准确性。
9. **#49882** Agent 引用的文件以富媒体标签页打开 — 解决截图/录像/CSV 等文件链接被 DOMPurify 剥离或乱码解码的问题。
10. **#49560** `/move` 命令支持自定义目标路径 — 放宽仅限当前项目 worktree 的限制，一次关闭 4 个相关 issue。

## 功能需求趋势

- **多媒体输入扩展**：read 工具支持音视频附件（#22260）反映用户希望 Agent 能直接消费本地媒体文件。
- **计费/额度透明度**：Zen 免费模型重试升级（#50093）、Go 订阅区域限制（#50155）显示托管模型体验是当前最集中的投诉区。
- **TUI/桌面端 UX 打磨**：空间利用（#9955）、plan/build 模式切换按钮（#38277）、子代理 token 显示（#22103）等小而高频的易用性需求。
- **规则与权限体系**：路径作用域规则（#37463，类 Cursor globs）、agent .md 权限 glob 匹配失败（#38351），社区渴望更精细的上下文控制。
- **新 Provider 支持**：QwenCloud International（#43067）等国际化模型接入需求持续。

## 开发者关注点

- **会话/状态管理的健壮性**：插件重载静默失败（#49982）、`/sessions` 数据不一致（#38303）、workspace 丢失（#49938）——V1→V2 迁移遗留问题仍是 bug 重灾区。
- **Provider 兼容性碎片化**：Bedrock 图片支持差异、Anthropic 压缩后的 user boundary（#31048）、Go 模型 DSML 输出畸形，多 provider 适配消耗大量维护精力。
- **低配机器友好性**：pre-push hook 无并发限制导致 8GB 设备崩溃（#38386），提示项目对贡献者硬件门槛偏高。
- **静默失败类 Bug 危害最大**：权限 glob 不匹配、mutation 吞错（#32691）等多条 issue 均指出"无报错但行为错误"最影响信任，建议优先补充校验与告警。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-21）

## 一、今日速览

Qwen Code 今日发布 **v0.24.2**，主要包含 Web Shell 远程工作区添加流程修复与 Live Voice 麦克风 AudioWorklet 采集两项更新。社区讨论焦点集中在**非对话上下文 token 治理**（#12028 系列）这一大型性能路线图，以及多会话网关、工作流恢复健壮性等核心议题。此外，Web Shell 生态快速扩张，SSH 工作区、轨迹面板、QR 配对等 PR 密集推进。

---

## 二、版本发布

### v0.24.2
- **feat(web-shell): restore remote workspace add flow**（[#12085](https://github.com/QwenLM/qwen-code/pull/12085)，@yiliang114）
- **feat(web-shell): 使用 AudioWorklet 采集 Live Voice 麦克风音频**（[#12338](https://github.com/QwenLM/qwen-code/pull/12338)，@qqqys）
- 无已知破坏性变更。

---

## 三、社区热点 Issues

1. **[#12028](https://github.com/QwenLM/qwen-code/issues/12028) 非对话上下文 token 治理（总览）** — @yiliang114 | 评论 10
   系统提示词、内置工具 schema、`QWEN.md`、技能列表等“非对话上下文”在每次请求中都要付费传输，在大上下文模型上其体积可能远超对话本身。这是本周最系统的性能治理路线图，衍生出多个子 Issue。

2. **[#12287](https://github.com/QwenLM/qwen-code/issues/12287) 工作流 retry-from-history 健壮性跟进拆分** — @qqqys | 评论 9
   原 PR 膨胀至 1900 行、涉及 runner 恢复语义与 checkpoint schema，社区将其拆分为独立可评审的硬化项，反映对后台自动化可靠性的重视。

3. **[#12029](https://github.com/QwenLM/qwen-code/issues/12029) 上下文窗口百分比预算在大窗口下失效** — @yiliang114 | 评论 8
   ToolSearch 预加载与上下文告警两项以窗口百分比表达的预算，在大窗口下反而永不触发——与项目迈向大窗口的方向相悖，标记 ready-for-human。

4. **[#12303](https://github.com/QwenLM/qwen-code/issues/12303) 多会话宿主的会话结算、封顶与命名** — @qqqys | 评论 7
   跨会话网关按目标会话设置判定消息后，多会话宿主的治理问题仍悬而未决，属多智能体路线图关键设计讨论。

5. **[#12224](https://github.com/QwenLM/qwen-code/issues/12224) v0.24.0 后 `/cd` 命令失效（P1）** — @alchem1ster | 评论 6
   升级后即使无活跃会话，`/cd` 也报“响应或工具调用进行中”。P1 级用户可直接感知的回归 bug。

6. **[#12091](https://github.com/QwenLM/qwen-code/issues/12091) 删除活跃会话导致 transcript 永久损坏（P1）** — @yiliang114 | 评论 5
   `sessions/delete` 对仍被 runtime 持有的会话 unlink 文件，写入者重建出无头文件，导致 degraded_history 且自动续跑被禁用。

7. **[#12002](https://github.com/QwenLM/qwen-code/issues/12002) 工具调用中的内联密钥被明文写入会话 JSONL（安全，P1）** — @yiliang114 | 评论 5
   模型生成的 shell 命令携带 `export TOKEN='...'` 类内联密钥时被原样持久化到 chat recording 与 ui-telemetry，存在离设备暴露风险，已 ready-for-human。

8. **[#11815](https://github.com/QwenLM/qwen-code/issues/11815) 复合命令切分误读尾部 `#` 注释中的操作符** — @TianYuan1024 | 评论 6
   导致已允许的命令被要求二次确认，是权限判定准确性的持续修复系列一环。

9. **[#12333](https://github.com/QwenLM/qwen-code/issues/12333) token 优化缺少工具召回/任务成功率的验收门槛** — @yiliang114 | 评论 4
   提出“每个 token 节省都要测量其代价”——为 token 治理工作补上基准测试对比能力，否则最大的节省项无法负责任地开启。

10. **[#12277](https://github.com/QwenLM/qwen-code/issues/12277) `qwen serve` 启用 Local Control 时 EADDRINUSE** — @4ekuct25 | 评论 5
    临时端口被 LAN 接口占用时第二个 HTTP 监听冲突，影响 Desktop 场景的 Web Shell 局域网访问。

---

## 四、重要 PR 进展

1. **[#12255](https://github.com/QwenLM/qwen-code/pull/12255) SSH 工作区支持（无需远程 daemon）** — @wenshao
   Web Shell 中添加 `ssh://user@host:2222/path` 即可通过本地 daemon 在远程项目上工作，文件读写、shell、Git、交互终端全走 SSH。

2. **[#12340](https://github.com/QwenLM/qwen-code/pull/12340) 一次性 headless 执行性能优化** — @yiliang114
   显式单次提示默认采用 pipe 型 `child_process` 后端，POSIX 下内存参数重启改为替换当前进程，降低启动开销。

3. **[#12323](https://github.com/QwenLM/qwen-code/pull/12323) Agent 工具提示词指引迁移为内置 skill** — @yiliang114
   将 Agent 描述中的长篇 prompt 写作指引移入 `agent-delegation` skill，仅保留 192 字符指针，直接缩减常驻上下文。

4. **[#12154](https://github.com/QwenLM/qwen-code/pull/12154) Web Shell Git 对话框新增 Worktrees 管理标签页** — @wenshao
   列出所有 worktree、分支、锁与缺失目录状态，补全可视化 Git 管理能力。

5. **[#12356](https://github.com/QwenLM/qwen-code/pull/12356) 运行轨迹面板：展示一次运行的时间去向** — @qqqys
   右侧面板列出会话的轮次、模型请求、消息与工具调用，附带时长、TTFT 和 token 计数。

6. **[#12322](https://github.com/QwenLM/qwen-code/pull/12322) 非回环监听上默认启用带过期的 QR 配对** — @wenshao
   QR 携带 60 秒过期的一次性邀请，扫描授予独立设备凭证，兼顾移动端便捷与安全。

7. **[#12347](https://github.com/QwenLM/qwen-code/pull/12347) 恢复运行先写 checkpoint 再注册** — @qqqys
   resume 前置持久化 checkpoint 并在写入失败时拒绝启动，提升工作流恢复可靠性（对应 #12287）。

8. **[#12369](https://github.com/QwenLM/qwen-code/pull/12369) /review 记录计划计算来源并报告漂移** — @wenshao
   计划记录 diff 摘要与块边界，覆盖率检查时可发现 diff 变化导致的漂移；配套 [#12371](https://github.com/QwenLM/qwen-code/pull/12371) 报告运行实际读取了多少 diff。

9. **[#12183](https://github.com/QwenLM/qwen-code/pull/12183) 从目录加载部署管理的扩展** — @jkxiao
   新增 `--managed-extensions <root>`，面向企业部署场景的扩展分发机制。

10. **[#12348](https://github.com/QwenLM/qwen-code/pull/12348) 跨会话消息按宿主命名的会话判定** — @qqqys
    解决一个会话拥有多个 id 时入站网关的判定歧义，是多会话治理（#12303）的落地一步。

---

## 五、功能需求趋势

- **上下文 token 治理（最热主线）**：#12028 衍生出 #12029、#12030、#12054、#12326、#12333 等系列 Issue，覆盖工具 schema 瘦身、扩展上下文门控、常驻工具面选择与节省-代价度量，是社区当前投入最系统的方向。
- **后台自动化与 daemon 可靠性**：工作流 checkpoint/恢复硬化（#12287、#12347）、无人值守会话可诊断性（#11944）、活跃会话删除安全（#12091）。
- **Web Shell / 多端体验**：SSH 工作区、QR 配对、轨迹面板、宿主设置白名单（#12320）、模型增删宿主控制（#12335）、Chrome 扩展上架（#12240）。
- **大上下文模型适配**：多个 issue 标注 `model/long-context`，百分比预算失效问题成为大窗口时代的典型痛点。
- **安全与隐私**：内联密钥泄漏（#12002）、MCP 内联媒体按声明 mime 而非字节判定（#12290）。

---

## 六、开发者关注点

- **token 成本可观测性缺失**：内置工具描述占非对话上下文 45.9%（#12054），却无体积追踪，开发者对“看不见的开销”不满。
- **权限判定的 shell 解析精度**：Unicode 空白（#12089）、`#` 注释（#11815）等边缘 case 持续被报告，影响免确认体验。
- **回归质量**：v0.24.0 引入的 `/cd` 失效（#12224）等 P1 回归影响日常使用。
- **测试与 CI 稳定性**：多个 autofix PR 长期处于 needs-human 状态（#9305、#10455、#11001、#11134、#11297、#11658），macOS E2E 碎片、OpenTUI 渲染等 CI 腿需要人工介入。
- **文档与代码不一致**：#11948 指出多处 JSDoc 与实现相悖，增加维护者与 AI 工具的阅读成本。

---
*数据截至 2026-09-21，来源：github.com/QwenLM/qwen-code*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (Codewhale) 社区动态日报 — 2026-09-21

## 1. 今日速览

今日项目无新版本发布，但 **0.10.0 的发布冲刺进入收尾阶段**：#6370 发布就绪 PR 已合并，CI 全绿，随后一天内连续合入三个 follow-up PR（#6371/#6372/#6373），修复心跳超时、Linux 遗留 sleep 进程等关键问题。同时，运行时 API 大特性 PR #6361（终端字节流、流恢复、幂等提交）也已落地。

## 2. 版本发布

过去 24 小时无新 Release。0.10.0 处于发布前最后打磨期（见 [Issue #6094](https://github.com/Hmbown/Codewhale/issues/6094)）。

## 3. 社区热点 Issues（5 条在跟踪范围内）

- **#6184 [CLOSED] 引擎运行中静默冻结** — 长时间工具密集运行时引擎中途停止产出，用户消息被持久化但无响应、无错误、无日志。7 条评论，该问题与 #6371 的心跳/超时修复链路相关，现已关闭。→ [链接](https://github.com/Hmbown/Codewhale/issues/6184)
- **#6094 [OPEN] v0.10.0 路线图与发布清单** — 维护者发布的“从这里开始”帖，明确 0.10.0 的重设计目标取代未发布的 0.9.14，是当前社区协作的入口。→ [链接](https://github.com/Hmbown/Codewhale/issues/6094)
- **#5856 [OPEN] Computer-use 插件：live-install 回执与首次 look-act 循环** — 标记 release-blocker，内置 bundle 的发现/信任/启用验收项仍未完成，是 0.10.0 正式发布前的主要阻塞项。→ [链接](https://github.com/Hmbown/Codewhale/issues/5856)
- **#6362 [CLOSED] 测试线程栈溢出导致测试套件中止** — `configured_model_api_tests` 栈溢出使 `cargo test --lib` 无法完成，阻塞工作区测试门禁；已由 #6370 中的栈修复解决。→ [链接](https://github.com/Hmbown/Codewhale/issues/6362)
- **#6155 [OPEN] /pet 桌面宠物的真机终端验收** — 0.9.13 已带上 `/pet`，但真实终端资格验证与跨 TUI/桌面共享 owner 的验收仍开放。→ [链接](https://github.com/Hmbown/Codewhale/issues/6155)

## 4. 重要 PR 进展（6 条在跟踪范围内，均已合并）

- **#6370 — 0.10.0 发布就绪**：修复 #6362 栈溢出、绿 CI、Extensions 信任审查、SIGPIPE 安全的 MCP 启动。→ [链接](https://github.com/Hmbown/Codewhale/pull/6370)
- **#6371 — follow-up：用户输入截止时间、终端路由移出 runtime worker、sleep inhibitor 改为 tokio 子进程**。修复心跳机制下超时永不触发的红色问题。→ [链接](https://github.com/Hmbown/Codewhale/pull/6371)
- **#6372 — follow-up 2：消除 Linux 上每个交互回合遗留的 `sleep infinity` 进程，限制终端路由阻塞任务**。→ [链接](https://github.com/Hmbown/Codewhale/pull/6372)
- **#6373 — 文档同步**：更新 `ENVIRONMENTS.md` 中 Linux sleep inhibitor 的实际实现描述（改为管道 `cat` 守护方式）。→ [链接](https://github.com/Hmbown/Codewhale/pull/6373)
- **#6361 — runtime-api 大特性**：终端字节流（app#34）、流恢复 + 幂等提交（app#76）、pet agent 数量锁定（#12），解除两个 Core 侧阻塞。→ [链接](https://github.com/Hmbown/Codewhale/pull/6361)
- **#6369（@AdityaVG13）— 会话修复**：外部会话导入（`/resume`/inline JSON）后同步引擎状态，避免引擎停留在旧会话历史。→ [链接](https://github.com/Hmbown/Codewhale/pull/6369)

## 5. 功能需求趋势

- **0.10.0 重设计与发布质量**：当前社区最核心主线，所有 PR 围绕发布就绪、CI 稳定与 follow-up 修复展开。
- **Computer-use / 工具能力**：内置 computer-use 插件的信任与启用流程（#5856）是 release-blocker，反映对外部工具操作能力的强烈需求。
- **会话与流可靠性**：流恢复、幂等提交（#6361）、外部会话导入同步（#6369）表明“长会话不丢状态”是高优先方向。
- **跨端一致性**：TUI + 桌面共享 owner（#6155）、终端字节流 API，指向统一的多表面架构。

## 6. 开发者关注点

- **静默失败的可观测性**：#6184 类“无日志、无崩溃、无响应”的冻结是最大痛点，推动心跳超时与守护进程治理（#6371/#6372）。
- **测试基础设施健壮性**：测试栈溢出（#6362）曾阻塞整个工作区门禁，大测试二进制的栈管理值得借鉴。
- **资源泄漏治理**：Linux 上遗留 `sleep infinity` 进程、inhibitor 生命周期管理，显示异步守护进程清理是持续审查重点。
- **外部贡献者参与路径**：#6094 明确“如何参与”，社区贡献（如 #6369）正逐步进入主线。

---
*数据来源：github.com/Hmbown/DeepSeek-TUI（仓库内链接指向 Hmbown/Codewhale）*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-09-21

## 📌 今日速览

Pi 发布 **v0.86.1**，带来 Meta (Muse) 官方 provider 支持。0.86.x 系列相关的回归问题集中爆发：Codex 工具调用泄漏为纯文本、NInfer 兼容性破坏、RPC steer 关联失效等。同时社区贡献活跃，bash 输出处理、agent 循环健壮性等多个修复 PR 落地。

---

## 🚀 版本发布

### v0.86.1
- **Meta Muse provider**：支持通过 `/login meta` 或 `META_API_KEY` 接入 Muse Spark 模型，详见 [providers 文档](https://github.com/earendil-works/pi/blob/v0.86.1/packages/coding-agent/docs/providers.md#meta-muse-subscription)。

---

## 🔥 社区热点 Issues

1. **[#7547](https://github.com/earendil-works/pi/issues/7547) · Windows 使用方式调查**（67 评论，长期热帖）
   官方发起的 Windows 支持方向讨论，涉及原生支持 vs 扩展委派的资源分配决策，持续吸引大量用户反馈。

2. **[#9822](https://github.com/earendil-works/pi/issues/9822) · 0.86.x Codex 工具调用以 harmony 原文泄漏**
   `gpt-5.6-luna` 上压缩（compaction）后工具调用变为纯文本，无内容执行、模型反复重试——0.86 新版本的高优先级回归。

3. **[#9794](https://github.com/earendil-works/pi/issues/9794) · 0.86.0 升级后导入错误**
   升级后报 `Cannot find module ... openai-responses-*.js`，疑似打包/分发问题，影响面可能较广。

4. **[#9816](https://github.com/earendil-works/pi/issues/9816) · 0.86 更新破坏 NInfer 支持**
   第三方推理引擎因 `strict=true` 要求不符返回 400，与 strict tools 行为变更直接相关。

5. **[#9688](https://github.com/earendil-works/pi/issues/9688) · 剪贴板复制回归**（👍2）
   修复 #9618 的提交引入回归：OSC 52 回退现在要求检测到 SSH 会话，容器内非 SSH 用户受影响。

6. **[#9508](https://github.com/earendil-works/pi/issues/9508) · pi-ai 向兼容 provider 发送 OpenAI 专有字段**
   导致部分 OpenAI 兼容端点返回 400/422，影响自定义 provider 生态的兼容性核心问题。

7. **[#9815](https://github.com/earendil-works/pi/issues/9815) · Mistral 429 未遵循 `Retry-After`**
   provider-retry 逻辑未尊重服务端重试提示，导致限速风暴。

8. **[#9062](https://github.com/earendil-works/pi/issues/9062) · 工具调用参数解析 O(N²)**
   碎片化 delta 场景下 `partialJson` 反复全量重解析，长会话性能隐患。

9. **[#9497](https://github.com/earendil-works/pi/issues/9497) · Windows CJK IME 输入卡顿**
   中文输入法候选窗不显示、延迟严重，`showHardwareCursor` 可绕过——对中文用户可用性影响大。

10. **[#9807](https://github.com/earendil-works/pi/issues/9807) · TUI 大会话全量重渲染卡顿**
    800+ 消息会话滚动/输入明显延迟，建议引入增量 diff 渲染（对标 OpenTUI）。

---

## 🔀 重要 PR 进展

1. **[#9096](https://github.com/earendil-works/pi/pull/9096) · Meta provider + Muse OAuth**
   v0.86.1 核心功能落地；已知怪癖：token 每日重新铸造、流式输出实为“伪流式”。

2. **[#9116](https://github.com/earendil-works/pi/pull/9116) · 会话中系统消息支持**
   pi-ai 层新增 mid-conversation system messages，为动态 prompt/工具变更打基础。

3. **[#9117](https://github.com/earendil-works/pi/pull/9117) · prompt/工具变更改为 system message deltas**
   上条的上层集成，避免每次重写顶层 prompt，改善缓存命中与 token 消耗。

4. **[#9804](https://github.com/earendil-works/pi/pull/9804) · Cerebras 排除 strict mode**
   修复 v0.86.0 上安装含非 strict 工具扩展时所有 Cerebras 请求 400 的问题。

5. **[#9799](https://github.com/earendil-works/pi/pull/9799) · agentLoop 不可恢复失败时终止流**
   补齐 loop promise 的 rejection 处理，避免 provider/网络故障时流悬挂。

6. **[#9800](https://github.com/earendil-works/pi/pull/9800) · bash 输出临时文件 WriteStream 错误处理**
   修复输出超截断阈值时临时文件写入的错误处理缺失。

7. **[#8743](https://github.com/earendil-works/pi/pull/8743) · 忽略过期的 Kitty 图片转换**
   解决图片位置变更后晚到转换结果错乱渲染的竞态问题。

8. **社区快速响应 Issues 的修复信号**（多 Issue 当天关闭）：
   - [#9805](https://github.com/earendil-works/pi/issues/9805) Z.AI 上下文溢出识别
   - [#9810](https://github.com/earendil-works/pi/issues/9810) Codex CacheWarmer 空闲缓存失效
   - [#9785](https://github.com/earendil-works/pi/issues/9785) bash timeout 秒/毫秒混淆

---

## 📈 功能需求趋势

- **Provider 兼容性与生态开放**：OpenAI 兼容端点字段清理（#9508）、NInfer/strict tools（#9816）、区域化登录（Kimi #9818）——第三方/自托管引擎是持续热点。
- **性能优化**：流式解析 O(N²)（#9062）、TUI 增量渲染（#9807）、会话列表懒解析（#9820）、缓存命中（#9810）。
- **Windows 体验**：安装路径统一（#7547）、CJK IME（#9497）、硬件光标模式（#9748）。
- **扩展系统可编程性**：ModelRegistry 方法绑定（#9821）、npm 包 exports 解析（#9817）、`auth check` 对扩展 provider 的可见性（#9448）。
- **配置可观测性**：skills 过滤语义文档化（#9806/#9808）、图片缩放参数暴露（#9631）。

---

## ⚠️ 开发者关注点

1. **0.86 升级风险**：升级前注意导入错误（#9794）、NInfer/Cerebras strict tools（#9816/#9804）、RPC steer 关联（#9803）等已知回归，建议暂缓非必要升级或预留回滚方案。
2. **兼容 provider 用户**：strict mode 与 OpenAI 专有字段的发送行为是当前最大痛点。
3. **Windows/中文用户**：IME 卡顿有 workaround（`showHardwareCursor`），原生修复待跟进。
4. **长会话用户**：缓存失效重计费（106k/162k token）与 TUI 卡顿值得关注 #9810、#9807 进展。

---
*数据来源：github.com/earendil-works/pi · 过去 24 小时动态*

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报（2026-09-21）

## 📌 今日速览

今日发布 **v18.2.7**，包含 `@oh-my-pi/pi-ai` 的两处 Breaking Changes（Anthropic provider 导入路径调整、`NO_AUTH_SENTINEL` 导出迁移）。社区最热话题仍是 **Google Antigravity 虚假 429 配额错误**——三个相关 Issue 累计 150+ 评论，且在最新版 v18.2.6 上仍可复现。PR 方向集中在**缓存成本优化**和**自托管模型支持**（ComfyUI）。

---

## 🚀 版本发布

### v18.2.7
**Breaking Changes：**
- Anthropic streaming 及 provider 请求辅助函数需从 `@oh-my-pi/pi-ai/providers/anthropic` 导入，不再支持从包根导入
- 公开导出 `NO_AUTH_SENTINEL` 从 `providers/openai-shared` 迁移至 `auth-retry`

**修复：** Anthropic 相关修复（release notes 截断，详见 [Releases 页面](https://github.com/can1357/oh-my-pi/releases)）

> ⚠️ 使用 pi-ai 包做二次开发的同学需检查导入路径。

---

## 🔥 社区热点 Issues

### 1. Antigravity 429 假配额耗尽（已关闭但未根治）
[#11689](https://github.com/can1357/oh-my-pi/issues/11689) · 106 评论 · 19 👍
最热 Issue。Google AI Pro 用户持续遇到 429 `RESOURCE_EXHAUSTED`，provider 甚至要求 30 分钟等待。虽已关闭，但社区持续涌入报告。

### 2. 根因定位：system prompt 中的 `<system-conventions>` 标签触发 429
[#11699](https://github.com/can1357/oh-my-pi/issues/11699) · 27 评论
深入分析指出系统提示词标签是触发 Google 端误判的原因，是理解 #11689 的关键线索。

### 3. ⚠️ v18.2.6 上仍可复现 429
[#12655](https://github.com/can1357/oh-my-pi/issues/12655) · 21 评论 · 8 👍 · **今日新建**
`gemini-3.8-flash-high` 在配额健康账户上首回合即失败。说明修复不完整，Antigravity 用户暂建议回避该模型。

### 4. 后台 Bash 作业子进程退出后仍显示 running
[#12657](https://github.com/can1357/oh-my-pi/issues/12657) · **今日新建**
后台任务状态不收敛导致 `hub wait` 挂起、agent 无法继续。影响后台作业工作流的核心可靠性。

### 5. JS Eval 跨 cell 丢失变量更新
[#10987](https://github.com/can1357/oh-my-pi/issues/10987) · prio:p2
含 top-level await 的 cell 更新变量后，下一 cell 仍读到声明时的旧值。持久内核语义正确性问题。

### 6. 工具 Promise 永不 settle 导致会话永久卡死
[#8798](https://github.com/can1357/oh-my-pi/issues/8798)
并行 `web_search` 部分调用无结果无超时，整个 turn 永久挂起，Esc 和退出均失效。缺乏工具级超时兜底。

### 7. agent-loop 中 checkSteering() 异常级联跳过后续工具调用
[#12544](https://github.com/can1357/oh-my-pi/issues/12544)
代码审计发现 `runTool` 末尾未防护的 `await checkSteering()` 可能级联导致剩余工具调用被误标为 `skipped`。

### 8. 持久 Python 内核多日会话内存无限增长
[#12632](https://github.com/can1357/oh-my-pi/issues/12632) · 已关闭
无 RSS 上限、无内核回收机制，16GB 机器上长期会话 OOM 风险。已修复关闭。

### 9. main 分支 CI 变红：10 个 llama.cpp/Qwen 测试断言过时
[#12603](https://github.com/can1357/oh-my-pi/issues/12603) · 已关闭
自 09-19 起所有 open PR 显示红色。已有修复 PR #12599 合入。

### 10. 请求移植 Pi 的 tuiMode 全屏底部固定栏
[#11600](https://github.com/can1357/oh-my-pi/issues/11600)
Pi 0.84 的 fullscreen 模式（编辑器/队列/部件固定底部）呼声高，TUI 体验持续向 Pi 对齐。

---

## 🔀 重要 PR 进展

| PR | 内容 | 状态 |
|---|---|---|
| [#12663](https://github.com/can1357/oh-my-pi/pull/12663) | `/context all` 详细上下文报告，逐工具/skill 展示 token 占用（对齐 Claude Code） | 🆕 新开 |
| [#12658](https://github.com/can1357/oh-my-pi/pull/12658) | **自托管图像模型支持**：`models.yml` 自定义 image 类模型 + ComfyUI 原生传输 | 🆕 新开 |
| [#12574](https://github.com/can1357/oh-my-pi/pull/12574) | Anthropic prompt-cache 刷新网关允许列表（作者实测单工程师 3 天 $800 缓存重写损耗） | 讨论中 |
| [#12615](https://github.com/can1357/oh-my-pi/pull/12615) | 缓存保活按空闲时间而非次数预算（与 #12574 配套） | 讨论中 |
| [#12571](https://github.com/can1357/oh-my-pi/pull/12571) | 保留被 `drop_block` 丢弃的 thinking 块以维持缓存前缀稳定 | 讨论中 |
| [#12573](https://github.com/can1357/oh-my-pi/pull/12573) | 统一图像长边上限 1568 + 暴露 `images.maxDimension`（截图占 transcript 64–87%） | 讨论中 |
| [#12599](https://github.com/can1357/oh-my-pi/pull/12599) | 修复 #12603：重新 pin Qwen wire 测试到 `chat_template_kwargs` 方言 | ✅ 已合 |
| [#11711](https://github.com/can1357/oh-my-pi/pull/11711) | LiteLLM usage provider，状态栏显示代理剩余预算 | review:p2 |
| [#12654](https://github.com/can1357/oh-my-pi/pull/12654) | Responses API 408 超时恢复机制按 turn 输出重新武装，避免无限 408 | 新开 |
| [#12653](https://github.com/can1357/oh-my-pi/pull/12653) | 修复兼容性插件下模型选择器退出崩溃 | 新开 |

---

## 📈 功能需求趋势

1. **Provider 稳定性与新后端**：Antigravity 429 占据绝对热度；ComfyUI/自托管模型、Serply 搜索、alibaba-token-plan 均为社区驱动接入
2. **Token/缓存成本控制**：分层定价支持（#3476）、缓存保活预算（#12615/#12571）、图像尺寸上限（#12573）、详细上下文报告（#12663）——成本敏感型团队集中发力
3. **TUI/UX 打磨**：fullscreen 模式（#11600）、model preset 一键切换（#7630）、prewalk 可取消（#8746）
4. **可靠性工程**：工具调用超时兜底、后台任务状态收敛、agent-loop 异常防护、内核内存回收——本周 bug 报告主流
5. **调度能力**：原生 cron 式定时任务（#2763）、hub wait 可配置退避阶梯（#12111）

## 🛠️ 开发者关注点

- **升级 v18.2.7 需检查 pi-ai 导入路径**（Breaking Change）
- **Antigravity + gemini-3.8-flash-high 组合暂不可用**，等待官方根治 #12655
- **长期会话稳定性是高频痛点**：Python 内核内存、后台任务挂起、工具 Promise 卡死——建议重度用户定期重启会话
- **缓存成本优化是当前 PR 主线**，LiteLLM 网关用户尤其值得关注 #12574/#12615 动向
- **贡献者注意**：#12603 类 CI 红 now 已修复，此前“PR 全红”应是误判

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*