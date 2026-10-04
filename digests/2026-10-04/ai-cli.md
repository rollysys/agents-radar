# AI CLI 工具社区动态日报 2026-10-04

> 生成时间: 2026-10-04 04:53 UTC | 覆盖工具: 11 个

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

**日期：2026-10-04 | 数据范围：12 个主流 AI CLI 工具的公开社区动态**

---

## 1. 生态全景

AI CLI 工具已进入“深水区”竞争阶段：从早期比拼模型接入能力，转向比拼**架构可靠性、多智能体体系与上下文经济学**。头部工具（Claude Code、Codex）的社区矛盾集中在“模型行为漂移/用量计量”这类平台级信任问题，而第二梯队（Qwen Code、oh-my-pi、DeepSeek TUI）则在推进 Session/UI 进程分离、Managed Agent 等下一代架构。MCP 已成为全生态共性问题域，几乎每个工具都在为其稳定性、安全审批与资源管理买单。与此同时，Windows 平台支持从“能用”走向“可用”仍是普遍短板。

---

## 2. 各工具活跃度对比

| 工具 | 今日热点 Issue 数 | 今日 PR 活动数 | Release | 活跃特征 |
|---|---|---|---|---|
| **Claude Code** | ~13（含 3 个高热） | 4 | v2.1.289 | 单 Issue 最高 101👍，社区巨大但反馈以抱怨为主 |
| **OpenAI Codex** | 10+ | 20+ 合并 | 2 个 alpha（0.162.0-alpha.10/11） | 迭代最快，官方 PR 明显向 Windows 倾斜 |
| **Gemini CLI** | 10 | 10 | 无 | 社区贡献质量高（性能优化 20-28 倍、安全修复） |
| **Copilot CLI** | 24 条 Issue 更新 | 0 | 无 | Issue 集中爆发，官方响应滞后 |
| **OpenCode** | 10 | 10+（含密集清理系列） | 无 | v2 beta 打磨期，核心贡献者活跃 |
| **Qwen Code** | 10 | 10 | v0.24.7-nightly | 架构型推进（Managed Agent 多线并行） |
| **Pi** | 10 | 10 | v1.0.1 / v1.0.2 | 刚过 1.0，性能问题集中暴露 |
| **oh-my-pi** | 10（77 条更新） | 10（255 条更新） | v18.6.0 / v18.5.1 | 单人主导+社区，修复节奏极快 |
| **DeepSeek TUI** | 5 | 9（6 个社区 PR 合并） | 无 | crate 拆分重构期，外部贡献健康 |
| **DeepSeek Harness** | 0 | 0 | dsh-v0.2.1-alpha.1 | 版本驱动，社区互动平静 |
| **Kimi Code CLI** | 0 | 0 | 无 | 无活动 |

**关键观察**：Codex 的“alpha 快速验证 + 每日 20+ 合并”与 Claude Code 的“日更 patch + 社区高热”形成两种头部节奏；oh-my-pi 以 255 条 PR 更新成为单位时间工程强度最高的项目。

---

## 3. 共同关注的功能方向

### 3.1 上下文管理与压缩可靠性（最普遍痛点）
- **Claude Code** #98747：空闲 compaction 静默丢上下文，无 opt-out
- **Copilot CLI** #5045：`/compact` 反复失败；#5041：Plan 批准后继承全部规划转录
- **Pi** #10330 / #8301：CLI 模式压缩失效、压缩无法交错执行
- **OpenCode** #44094：compaction 忽略用户模型配置
- **oh-my-pi** #14277：snapcompact 按帧面积精细化

→ **共识信号**：压缩的“可控性”（何时触发、保留什么、可否拒绝）比“有无”更关键。OpenCode 社区 138👍 的 `/context` 需求、Claude Code 的用量计量争议，都指向**上下文透明度**这一缺口。

### 3.2 MCP 生态健壮性
- **Copilot CLI**：OAuth 失败（Entra ID、Atlassian）、工具目录快照回归（#5044）
- **Gemini CLI**：工具数 >128 报 400、MCP 审批提示不完整（#28664 安全盲区）
- **OpenCode**：失败不重试、高 RTT 不可连接、权限请求静默挂起
- **Codex**：MCP 栈泄漏、工具目录稳定性系列 PR
- **Qwen Code** #12531：MCP 身份混淆安全加固

### 3.3 子代理/多智能体可靠性
- **Gemini CLI** 三重叠加：假成功上报（#22323）、永久挂起（#21409）、不主动调用（#21968）
- **Claude Code**：compaction 后丢失 skill 附着（#94564）
- **OpenCode** #18213：子代理绕过 Plan 模式只读约束（安全）
- **Qwen Code**：Managed Agent 架构整体重构

### 3.4 安全与权限边界
- **Claude Code** #98591：批准后脚本被修改仍以原批准执行；PR #99137 插件只能收紧规则
- **Gemini CLI** PR #29510：Windows 命令注入修复
- **DeepSeek TUI** PR #6820：解释器进程绕过权限门控
- **Qwen Code** #13360：Goal 验证器可被模型自述绕过

### 3.5 Windows 平台稳定性
- **Codex**（今日 Issue 占比最高 + 官方 PR 集中投入）、**Claude Code**（#94478 每秒 17 个 git 进程）、**oh-my-pi**（鼠标 SGR 注入）、**DeepSeek TUI**（node.exe 误杀）、**Copilot CLI**（Git 配置破坏，已修）

---

## 4. 差异化定位分析

| 维度 | Claude Code | Codex | Gemini CLI | Copilot CLI | 第二梯队 |
|---|---|---|---|---|---|
| **核心优势** | 生态成熟度、插件/mod 体系 | 迭代速度、TUI 打磨 | 开放贡献模型、架构探索 | GitHub/企业集成（ACP） | 架构创新、模型中立 |
| **目标用户** | 重度订阅制开发者 | 早期采用者 + Windows 用户 | 社区驱动型开发者 | 企业 GitHub 生态用户 | 自托管/多模型用户 |
| **技术路线** | 闭源黑盒 + 修复驱动 | Rust 重写 + alpha 通道 | TS 开源 + 官方调研（AST 感知） | 多模型路由（HydraFusion） | 进程分离/Managed Agent |
| **当前主要矛盾** | 模型行为漂移与用量信任 | Dot↔本地↔Cloud 三层互通 | 子代理可靠性 | MCP 企业集成门槛 | v2/beta 迁移质量 |

**路线分歧点**：
- **生态兼容 vs 自建**：DeepSeek Harness 直接做 Claude Code Mods 兼容层（验证阶段），Codex/Qwen 推 ACP 桥接，oh-my-pi 申请加入 ACP Registry——**互操作层正成为新的竞争面**。
- **单体 vs 分离**：oh-my-pi #14166（会话/UI 进程分离）与 Qwen Code Managed Agent 是架构先行的代表；Claude Code/Copilot CLI 仍在单体内修补。
- **模型耦合度**：Claude Code/Codex 与自家模型强绑定（也因此承受模型漂移的信任冲击），oh-my-pi/Pi/OpenCode 走多 provider 中立路线，LithosAI 等开放权重渠道接入活跃。

---

## 5. 社区热度与成熟度

**活跃度梯队**：
- **第一梯队**：Claude Code（用户基数最大，101👍 的 issue 说明积压需求体量）、Codex（官方工程节奏最强）
- **第二梯队**：Gemini CLI（社区贡献质量突出）、oh-my-pi（修复响应最快，当日 issue 当日 PR）、Qwen Code（架构推进最有章法，但“合并后补审”模式有债务隐患——单 PR 超 3000 行触发熔断）
- **第三梯队**：OpenCode（v2 beta 打磨期）、Pi（1.0 刚过，性能债集中到期）、DeepSeek TUI（重构期，外部贡献节奏健康）
- **早期**：DeepSeek Harness（版本驱动、社区未起量）、Kimi Code CLI（无活动，疑似沉寂）

**成熟度信号**：
- **成熟但信任承压**：Claude Code（回归频发 2.1.282/286/288 + 用量争议三线叠加）
- **快速迭代期**：Codex（alpha 通道）、oh-my-pi（18.x 高频）
- **架构转型期**：Qwen Code、OpenCode、DeepSeek TUI——此阶段共同风险是迁移回归

---

## 6. 值得关注的趋势信号

1. **“用量透明度”正在成为新的产品标配要求**：Claude Code 的限额消耗暴增（3.6x）争议、OpenCode 的 429 异常、Qwen Code 的千万级 token 死循环（#10887）表明——**token 计量、计费准确性与失控熔断机制**将和当年的“上下文窗口”一样成为采购评估的硬指标。开发者选型时应关注工具是否提供 token 消耗的可审计日志与硬上限。

2. **“静默失败”是当前最危险的故障类别**：compaction 静默丢上下文（Claude Code）、子代理假成功（Gemini CLI）、MCP 权限请求不渲染（OpenCode）、HydraFusion 静默降级（Copilot CLI）。**工具层面的可观测性投入（如 `/context` 类命令）会直接决定生产可用性**。

3. **审批与执行的原子性成为安全新焦点**：Claude Code #98591（批准后脚本被改）与 Qwen Code #13360（验证器绕过）提示——AI CLI 的权限模型正从“工具级审批”演进到需要覆盖“批准-执行间隙”的完整性校验。企业采用前应做此类红队测试。

4. **互操作标准（ACP、Claude Code Mods 兼容层）开始改变格局**：小工具通过兼容大工具生态获取用户（DeepSeek Harness 的做法值得跟踪），第三方 IDE 客户端接入需求（Copilot CLI #5047、oh-my-pi #1122）密集出现。**"headless + 多客户端”是明确演进方向**。

5. **Windows 从二等公民走向主战场**：Codex 今日 PR 近半数投向 Windows；各工具的 Windows 进程管理、沙箱权限、终端序列问题集中修复。**Windows 开发者近期是各工具争抢的增量用户群**。

6. **升级节奏建议**：当前几乎所有主流工具都处于回归高发期（Claude Code 2.1.282-288、Codex 桌面 26.928/930、OpenCode v2 beta、Pi 1.0.x）。**生产环境建议锁定版本 + 延迟 1-2 个 patch 周期升级**，并优先验证：compaction 行为、MCP 连接、模型路由降级路径。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> ⚠️ **数据说明**：本批抓取数据中所有 PR 的评论数均为 `undefined`（点赞数为 0），因此无法严格按“关注度”排序。以下分析基于 PR 的内容质量、维护活跃度（更新时间跨度）、Issue 讨论热度及与社区需求的匹配度进行综合推断。数据截止 2026-10-04。

---

## 一、热门 Skills 排行（按综合影响力推断）

| # | Skill / PR | 功能 | 状态 | 讨论热点 |
|---|---|---|---|---|
| 1 | **skill-creator 修复** [PR #1298](https://github.com/anthropics/skills/pull/1298) | 隔离触发评估、修复 Windows 兼容与运行时失败 | OPEN | 社区审计发现 skill-creator 多处缺陷（见 Issue #1383、#1394、#202），该 PR 是核心修复，活跃近 3 个月 |
| 2 | **mcp-builder 修复** [PR #1742](https://github.com/anthropics/skills/pull/1742) | 适配 mcp>=2 的 `streamable_http_client` 重命名与自定义 header | OPEN | 修复 #1668；配合 Issue #1390（评估脚本对真实 MCP server 全部 0 分），MCP 生态兼容性是焦点 |
| 3 | **docx 修复** [PR #1792](https://github.com/anthropics/skills/pull/1792) | LibreOffice 超时正确报错，验证修订标记清除 | OPEN | 官方 docx skill 的可靠性修补，与 #1734（孤儿批注检测）同属文档处理热点 |
| 4 | **claude-api 模型退役更新** [PR #1607](https://github.com/anthropics/skills/pull/1607) | 标记 4 个已退役模型 ID | OPEN | 修复 #1603；相关 Issue #1487（skill 一次性注入 ~156k token 耗尽上下文）是重磅讨论 |
| 5 | **pyxel 复古游戏开发** [PR #525](https://github.com/anthropics/skills/pull/525) | Python 复古游戏创建/调试/无头验证 | OPEN | 由 Pyxel 作者 @kitao 提交，存活 7 个月仍活跃，创作者背书度高 |
| 6 | **AWT 端到端测试** [PR #822](https://github.com/anthropics/skills/pull/822) | 视觉 + 浏览器控制的零代码 E2E 测试 | OPEN | AI 驱动测试的代表，持续更新至 9 月 |
| 7 | **document-typography** [PR #514](https://github.com/anthropics/skills/pull/514) | AI 生成文档的排版质控（孤行/寡行/编号对齐） | OPEN | 切中“AI 生成文档通病”这一普遍痛点 |
| 8 | **frontend-design 改进** [PR #210](https://github.com/anthropics/skills/pull/210) | 提升官方前端设计 skill 的可执行性 | OPEN | 社区对官方 skill 质量/指令可操作性的典型反馈 |

---

## 二、社区需求趋势（源自 Issues）

1. **安全与信任边界**（最热，43 条评论）：[Issue #492](https://github.com/anthropics/skills/issues/492) — 社区 skill 冒充 `anthropic/` 命名空间构成信任滥用；配套需求是 #1394（eval-viewer XSS）、#83（skill-security-analyzer）。
2. **企业协作与组织内共享**：[Issue #228](https://github.com/anthropics/skills/issues/228)（16 评论）— 期望 org 级 skill 库与分享链接，取代手动传文件。
3. **Skill 可靠性与评估工具链**：[Issue #556](https://github.com/anthropics/skills/issues/556)（`claude -p` 触发率 0%）、#1383、#1390 — 触发评估、基准测试、跨平台（Windows）兼容是高频痛点。
4. **上下文效率**：[Issue #1487](https://github.com/anthropics/skills/issues/1487) — skill 按需加载而非全量注入的诉求强烈。
5. **质量门禁与治理类 Skill**：#1385（推理质量门禁管线）、#412（agent-governance）、#1776（blast-radius 破坏性操作检查清单）— 社区从“能做”转向“安全地做”。
6. **长程记忆与状态压缩**：[Issue #1329](https://github.com/anthropics/skills/issues/1329)（compact-memory 符号化记忆）。

---

## 三、高潜力待合并 Skills

- [PR #1742](https://github.com/anthropics/skills/pull/1742) mcp-builder 兼容修复 — 修复明确引用的 #1668，9 月底仍在更新，合并概率高。
- [PR #1792](https://github.com/anthropics/skills/pull/1792) docx 超时报错修复 — 小而准的可靠性补丁，典型易合并形态。
- [PR #1607](https://github.com/anthropics/skills/pull/1607) claude-api 模型退役 — 事实性更新且修复了对应 Issue #1603，10 月初仍有活动。
- [PR #1730](https://github.com/anthropics/skills/pull/1730) claude-api 死链修复 — 已验证 HTTP 200 的文档链接替换。
- [PR #525](https://github.com/anthropics/skills/pull/525) pyxel — 持续维护 7 个月、上游作者亲自提交。

---

## 四、生态洞察（一句话）

**社区最集中的诉求已从“提交新 Skill”转向“可信的 Skill 分发机制与可靠的评估/触发工具链”——即安全边界（命名空间与权限）、上下文效率（按需加载）和跨平台评估基建三大结构性问题。**

---

# Claude Code 社区动态日报 · 2026-10-04

## 1. 今日速览

Claude Code 发布 **v2.1.289**，主要修复权限规则与终端冻结问题。社区今日最热话题是 **Opus 5.5 行为漂移**（thinking 翻倍、输出膨胀、用量加速消耗）以及 **2.1.286 引入的空闲自动 compaction 静默丢失上下文**。桌面端（Windows git 进程风暴、macOS 权限弹窗）问题持续发酵。

---

## 2. 版本发布

### v2.1.289
- 修复复合 shell 命令中嵌套部分的 deny/ask 规则无法覆盖用户安装 mod 的审批（托管机器场景）
- 修复短代码块包含大量未闭合 `<script>` 标签或深层 `${` 嵌套替换时终端冻结的问题
- 修复 `Read` 相关问题（摘要截断）

链接：[anthropics/claude-code Releases](https://github.com/anthropics/claude-code/releases)

---

## 3. 社区热点 Issues

| # | Issue | 关注点 |
|---|-------|--------|
| 1 | [#37951 隐藏 Edit/Write 内联 diff 的选项](https://github.com/anthropics/claude-code/issues/37951) | 101 👍 / 30 评论的老牌需求。对话流中的内联 diff 无法关闭，用户希望 `showDiffs: false` 类设置 |
| 2 | [#96931 Linux 输入框 0-90 秒内停止接收按键](https://github.com/anthropics/claude-code/issues/96931) | 2.1.282 回归，13 条评论。会话中途键盘完全失灵，Ctrl-C 无效，2.1.281 正常 |
| 3 | [#98747 空闲 compaction 静默丢弃工作上下文](https://github.com/anthropics/claude-code/issues/98747) | 2.1.286 新行为：prompt cache 过期前自动压缩且无 opt-out，长会话的上下文基础被破坏 |
| 4 | [#98679 Opus 5.5 行为漂移：thinking ~2x、输出 ~1.6x](https://github.com/anthropics/claude-code/issues/98679) | 10-01 起模型行为显著变化且判断力下降，Claude Code 之外也有复现，疑似模型侧调整 |
| 5 | [#97398 周用量限额消耗速度暴增 ~3.6x](https://github.com/anthropics/claude-code/issues/97398) | 有 transcript 数据支撑：上周 9,352 条响应耗尽限额，本周 715 条已到 24% |
| 6 | [#94478 Windows 桌面端每秒生成 ~17 个 git 进程](https://github.com/anthropics/claude-code/issues/94478) | 每天约 200 万个短命进程，放大内核池泄漏至 ~6GB/天，资源浪费严重 |
| 7 | [#83841 macOS 26 每次会话重复弹“访问其他应用数据”](https://github.com/anthropics/claude-code/issues/83841) | Desktop 通过 disclaimer helper 启动会话导致 TCC 弹窗无法清除，长期未解 |
| 8 | [#98591 批准脚本后 Claude 编辑脚本并以同一批准运行修改版](https://github.com/anthropics/claude-code/issues/98591) | 安全性问题：用户批准的生产脚本被 Claude 修改后仍在原批准下执行 |
| 9 | [#72957 Write/Edit 静默解码 \uXXXX 破坏文件内容](https://github.com/anthropics/claude-code/issues/72957) | 无法写入字面 `\uXXXX` 转义序列，影响含 escape-sequence 的代码文件 |
| 10 | [#31992 跨机器会话恢复（CLI-to-CLI）](https://github.com/anthropics/claude-code/issues/31992) | 20 👍 的功能需求：同步会话状态实现多机无缝接续 |

其他值得留意：[#87424 间歇性 ECONNRESET](https://github.com/anthropics/claude-code/issues/87424)、[#99320 2.1.288 内联 rm 检查误报](https://github.com/anthropics/claude-code/issues/99320)、[#99371 非交互模式误报余额不足](https://github.com/anthropics/claude-code/issues/99371)。

---

## 4. 重要 PR 进展

> 过去 24 小时仅 4 个 PR 更新，精选如下：

1. **[#99137 sec-default：插件只能收紧、不能放宽其上的规则](https://github.com/anthropics/claude-code/pull/99137)** — 安全加固：个人插件无法解除 deny/ask 规则或修改固定变量，无需新引擎支持。与 v2.1.289 的权限修复呼应。
2. **[#99206 /diff 停靠面板首行渲染对齐](https://github.com/anthropics/claude-code/pull/99206)** — UI 细节修复：停靠模式下 diff 面板头部空行数修正。
3. **[#81672 hookify 包导入与安装目录名解耦](https://github.com/anthropics/claude-code/pull/81672)** — 修复 marketplace 安装场景下 hook 入口依赖目录名为 `hookify` 的问题（修复 #69665、#81448）。
4. **[#77977 文档：marketplace source 的 skipLfs 选项](https://github.com/anthropics/claude-code/pull/77977)（已关闭）** — 补充 GitHub/Git 源跳过 LFS 下载的插件开发文档。

---

## 5. 功能需求趋势

- **输出可定制性**：内联 diff 开关（#37951, 101 👍）、Desktop 动画指示器回归（#98254）——用户强烈要求对 UI 噪音的控制权
- **多机/多端工作流**：跨机会话恢复（#31992）、Remote Control 远程附加终端（#87190）、Projects 支持本地会话作为线程（#99156）
- **权限与安全精细化**：claude.ai 默认权限模式含“跳过所有审批”（#98159）、审批范围与实际执行一致性（#98591）
- **用量透明度**：计费/限额计量准确性（#97398、#97449、#98269）成为近期集中爆发的话题

---

## 6. 开发者关注点

1. **版本回归频发**：2.1.282（输入失灵）、2.1.286（自动 compaction）、2.1.288（rm 检查误报）连续引入回归，升级需谨慎
2. **成本失控焦虑**：Opus 5.5 行为漂移 + 限额消耗加速 + 计量疑点，三线叠加引发对订阅价值的质疑
3. **桌面端质量短板**：Windows 进程风暴/GPU 闪烁（#98082）、macOS TCC 弹窗与 Dock 图标重复（#99140）、a11y 虚拟化列表问题（#99332）
4. **上下文管理不可控**：compaction 丢失 skill 附着（#94564）与静默压缩（#98747）表明长会话可靠性仍是核心痛点
5. **安全边界**：权限规则优先级、审批后脚本篡改等安全问题开始受到社区系统性审视

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-10-04

## 📌 今日速览

Codex CLI 持续高频迭代，24 小时内连发两个 alpha 版本（0.162.0-alpha.10 / alpha.11），同时合并了 20+ 个 PR，重点打磨 TUI 体验、Windows 平台稳定性和 MCP 工具目录管理。社区侧，Windows 桌面端问题集中爆发：Dot 启动的本地任务缺少 Computer Use 工具（#49458，45 条评论）成为最大热点，VS Code 扩展更新后消息丢失问题（#49988）虽已关闭但相关新 Issue 仍在涌现。

---

## 🚀 版本发布

| 版本 | 说明 |
|---|---|
| [rust-v0.162.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.11) | 最新 alpha，连续快速迭代 |
| [rust-v0.162.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.10) | 同日早些时候发布 |

两个版本均无详细 changelog，属 alpha 快速验证通道，结合今日合并的 PR 推断主要涵盖 TUI 交互、Windows daemon 与 MCP 工具目录改进。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#49458](https://github.com/openai/codex/issues/49458) — [Windows] Dot 启动的本地任务缺少 Computer Use 工具**
   今日最高热度（45 评论 / 20 👍）。普通本地 Codex 会话 Computer Use 正常，但通过 Dot 启动的任务无法使用该工具集，直接影响 Dot + 远程任务的核心工作流。

2. **[#49988](https://github.com/openai/codex/issues/49988) — VS Code 扩展更新后提交消息间歇性丢失（已关闭）**
   10 月 1 日更新后按 Enter 输入框被清空但消息未发出，需多次重试。47 👍 / 39 评论，影响面广；已关闭，但见下方 #50225 等后续报告，需观察修复是否彻底。

3. **[#50428](https://github.com/openai/codex/issues/50428) — Windows 桌面 durable chat 提交/fork 失败（AbsolutePathBuf 反序列化错误）**
   Windows 端无法新建对话或 fork，错误指向路径序列化缺少 base path。注意：今日合并的 [PR #50558](https://github.com/openai/codex/pull/50558) 正好修复了绝对路径解析读取当前目录的问题，可能直接相关。

4. **[#48913](https://github.com/openai/codex/issues/48913) — 请求增加关闭随机会话问候语的配置项（已关闭）**
   31 👍，CLI 用户对新加入的随机问候文案反感强烈（一天开上百个会话），高频小痛点，社区共鸣大。

5. **[#47041](https://github.com/openai/codex/issues/47041) — GPT-5.6 Sol / GPT-6 Astra 误拒无害提示（invalid_prompt）**
   桌面端新模型对无害 prompt 报 invalid_prompt，涉及模型行为本身，持续开放中。

6. **[#50225](https://github.com/openai/codex/issues/50225) / [#50653](https://github.com/openai/codex/issues/50653) — VS Code 扩展消息丢失问题持续蔓延**
   多个新 Issue 报告相同症状（消息消失、卡 pending、含图片消息发送失败），且扩展内置的问题上报通道不可用，说明 #49988 的修复可能未覆盖全部场景。

7. **[#39783](https://github.com/openai/codex/issues/39783) — 桌面端临时摘要线程泄漏完整 MCP 栈（性能问题）**
   每次 thread_summary 生成都启动用户全部全局 stdio MCP 服务器，结束后通过 thread/unsubscribe 泄漏，长期运行的桌面端资源浪费明显。

8. **[#45163](https://github.com/openai/codex/issues/45163) — TUI 调色板仅在启动时缓存，系统深浅色切换后输入不可读**
   经典的“启动时快照”设计缺陷，0.154.0 起 main 分支仍存在，持续未修。

9. **[#50645](https://github.com/openai/codex/issues/50645) — macOS 端 `$CODEX_HOME/pets` 超 700 条目后启动约 10 秒即崩溃**
   EXC_BREAKPOINT in CrBrowserMain，每次启动必现，疑似浏览器层资源上限问题。

10. **[#50520](https://github.com/openai/codex/issues/50520) — Windows 沙箱反复出现 helper_sandbox_lock_failed**
    `.sandbox-bin` 目录权限被系统回退为 Modify 导致沙箱反复失效，Windows 原生沙箱的权限管理仍是薄弱环节。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#50558](https://github.com/openai/codex/pull/50558) — 绝对路径解析不再读取当前目录**
   修复当前目录被删除后路径解析失败，很可能直接对应 Issue #50428 的 Windows 崩溃。

2. **[#50781](https://github.com/openai/codex/pull/50781) — TUI MCP 启动通知限定为自有线程**
   修复无关线程的审批请求串入当前 CLI 窗口的安全/混淆问题，与 Issue #50355 相关。

3. **[#50788](https://github.com/openai/codex/pull/50788) — Vim Normal 模式空草稿下按 `/` 直接打开斜杠命令**
   Vim 用户操作流优化，细节体验提升。

4. **[#50540](https://github.com/openai/codex/pull/50540) — Responses Lite 增量发送工具目录更新**
   性能优化：初始目录发送一次，之后只追加变更定义，减少 token 与带宽开销。

5. **[#50587 系列：#50741 / #50562 / #50536 / #50687 / #50546](https://github.com/openai/codex/pull/50741) — Code Mode 工具目录稳定性专项**
   一组 PR 确保环境就绪状态变化、MCP 目录变化不影响模型可见的工具 schema 与 exec 描述——提升提示词稳定性、减少无谓的上下文扰动。

6. **[#50720](https://github.com/openai/codex/pull/50720) — 解码 Windows Terminal 映射的 Shift+Enter 序列**
   修复 Windows Terminal 用户无法用 Shift+Enter 换行的长期痛点。

7. **[#50555](https://github.com/openai/codex/pull/50555) — WSL home 挂载在 Windows 文件系统时跳过 daemon 自启**
   避免 DrvFS/9p 权限语义不符导致 TUI 启动前失败，提升 WSL 兼容性。

8. **[#50782](https://github.com/openai/codex/pull/50782) — Windows daemon 发布遇文件锁时自动重试**
   针对杀软扫描占用文件导致发布失败的场景加重试机制。

9. **[#50764](https://github.com/openai/codex/pull/50764) — 允许在 turn 运行中执行 `/archive`**
   解除会话归档的操作限制，附带确认提示。

10. **[#50564](https://github.com/openai/codex/pull/50564) — 底部弹窗打开时允许选中文本复制**
    计划确认弹窗不再阻断转录文本的复制，TUI 可用性细节改进。

---

## 📈 功能需求趋势

- **Windows 平台稳定性**：今日 Issue 中 Windows 相关占比最高（沙箱权限、daemon 锁、路径解析、通知声音、Computer Use 截图超时），是当前最集中的问题域；官方 PR 也明显向 Windows 倾斜。
- **Dot / 远程任务互操作**：Dot 创建的任务缺少工具、无法在 Android Remote 中显示、Cloud 线程读写失败（#50168、#50698、#50784），“Dot ↔ 本地 ↔ Cloud”三层互通是新架构的高风险区。
- **VS Code 扩展可靠性**：消息丢失问题在 10 月 1 日更新后集中爆发且持续发酵，IDE 集成的输入可靠性是用户最直接的痛点。
- **MCP 生态**：从 MCP 栈泄漏（#39783）到工具目录稳定性系列 PR，MCP 资源管理与性能成为双向热点。
- **可配置性/降噪**：关闭问候语（31 👍）、通知声音控制等诉求表明重度用户希望减少“非必要输出”。

---

## ⚠️ 开发者关注点

1. **升级需谨慎**：Windows 桌面 26.928/26.930 系列版本问题密集（消息提交失败、启动黑屏循环、Cloud 任务创建受阻），生产环境建议关注修复版本再升级。
2. **VS Code 扩展用户**：若遇消息丢失，长消息/含图片消息重试成功率更低，建议先复制内容再提交作为临时规避。
3. **CLI 用户可期待**：本轮 alpha 迭代的 TUI 改进（Vim 支持、模态下复制、Markdown 链接标签保留）将在 0.162 稳定版落地。
4. **WSL 用户注意**：home 目录位于 Windows 挂载盘时 daemon 行为已有针对性修复（PR #50555）。
5. **反馈渠道问题**：扩展内置 issue 上报不可用（#50225），遇到问题请直接到 GitHub 仓库提报。

---

*数据截至 2026-10-04，来源：github.com/openai/codex 公开数据。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-04）

## 一、今日速览

今日无新版本发布，社区焦点集中在 **Subagent（子代理）体系的稳定性与可观测性**上：包括 subagent 达到 MAX_TURNS 后误报成功、通用 agent 挂起等 P1 级 bug 持续引发讨论。PR 方面，一批**性能优化（数组装载路径线性化）**和**多模态 tool response 修复**的社区贡献值得关注，其中 Windows 命令注入防护的 PR 是重要的安全加固。

---

## 二、版本发布

过去 24 小时无新 Release。

---

## 三、社区热点 Issues

1. **#22323 — Subagent 达到 MAX_TURNS 后被误报为成功（GOAL），掩盖中断事实**
   🔴 P1 | 评论 13
   `codebase_investigator` 子代理即使未做任何分析、只是撞上轮次上限，仍报告 `success` / `GOAL`。这类“假成功”直接误导主 agent 的后续决策，是子代理可靠性最核心的缺陷之一。
   链接：google-gemini/gemini-cli Issue #22323

2. **#21409 — 通用（generalist）agent 永久挂起**
   🔴 P1 | 评论 8 | 👍 8
   只要 CLI 将任务委派给 generalist agent，连建目录这类简单操作也会挂起（用户等待超过 1 小时）。 workaround 是在提示中禁止使用子代理。8 个 👍 说明影响面广。
   链接：google-gemini/gemini-cli Issue #21409

3. **#19873 — 零依赖 OS 沙箱 + 执行后意图路由，释放模型的 bash 原生能力**
   🟠 P2 | 评论 9
   社区提出的重量级架构提案：Gemini 3 模型天生擅长链式使用 POSIX 工具（grep/cat/sed/awk），应通过操作系统级沙箱在不牺牲安全的前提下充分释放该能力。方向性讨论热烈。
   链接：google-gemini/gemini-cli Issue #19873

4. **#21968 — Gemini 不主动使用 skills 和 sub-agents**
   🟠 P2 | 评论 7
   自定义 skills（如 gradle、git）几乎从不被模型自主调用，只有显式指令才会触发。反映提示词/调度策略与子代理生态脱节的普遍痛点。
   链接：google-gemini/gemini-cli Issue #21968

5. **#22745 — EPIC：评估 AST 感知的文件读取、搜索与代码库映射**
   🟠 P2 | 评论 7
   官方发起的调查系列：AST 感知工具可单次调用精确读取方法边界，减少错位读取和 token 噪音。配套子任务 #22746（tilth/glyph）和 #22747（ast-grep）。
   链接：google-gemini/gemini-cli Issue #22745

6. **#22267 — Browser Agent 完全忽略 settings.json 配置（如 maxTurns）**
   🟠 P2 | 评论 4
   `AgentRegistry` 初始化时正确合并了配置，但 Browser Agent 运行时未生效——配置链路断裂的典型案例。
   链接：google-gemini/gemini-cli Issue #22267

7. **#21983 — browser subagent 在 Wayland 下失败**
   🔴 P1 | 评论 4
   Linux Wayland 环境下浏览器子代理直接失败，同样是“GOAL 成功”式的错误上报，与 #22323 相互印证。
   链接：google-gemini/gemini-cli Issue #21983

8. **#24246 — 工具数量 >128 时遭遇 400 错误**
   🟠 P2 | 评论 3
   可用工具超过 API 限制时直接报 400，期望 agent 能智能裁剪工具作用域。对重度 MCP/自定义工具用户是硬阻塞。
   链接：google-gemini/gemini-cli Issue #24246

9. **#22186 — get-shit-done output hook 导致崩溃**
   🔴 P1 | 评论 3
   任务即将完成、打印用户摘要时触发崩溃，属于“临门一脚”型高挫败感 bug。
   链接：google-gemini/gemini-cli Issue #22186

10. **#19561 — "Tactful Extraction"：token 节约型外科手术式代码读取**
    🟢 P3 | 评论 2
    当前基线约 36.6k tokens/turn，大文件读取造成上下文“消防水管”式膨胀。提案建立 grep → 精读的分级代码发现层次，直指上下文经济学核心问题。
    链接：google-gemini/gemini-cli Issue #19561

---

## 四、重要 PR 进展

1. **#29510 — Windows 子进程参数引号加固，防命令注入**
   修复 Windows 下 `shell: true` 调用 diff 命令时文件路径可导致的命令注入，引入 `quoteCmdArg` 辅助函数。⚠️ 安全类修复，建议关注。
   链接：google-gemini/gemini-cli PR #29510

2. **#29621 — 保留 subagent 多模态 tool response parts**
   修复本地子代理回传工具结果时图像数据被丢弃的问题，按 call ID 追踪完整 parts 数组。
   链接：google-gemini/gemini-cli PR #29621

3. **#29590 — 修复 functionResponse.parts 在剥离 tool call id 前缀时丢失**
   工具返回的图像（如截图）此前从未到达模型，此修复打通了多模态工具链路。
   链接：google-gemini/gemini-cli PR #29590

4. **#29517 — 性能：线性化 truncateHistoryToBudget 数组重构**
   将逐条 `unshift()` 改为 `push()` + 反转，优化聊天压缩服务的历史重建。
   链接：google-gemini/gemini-cli PR #29517

5. **#29515 — 状态快照 ID 查找从 O(n²) 降到线性**
   用 `Set` 替代数组查找，合成基准 291.95 ms → **10.26 ms**（~28 倍）。
   链接：google-gemini/gemini-cli PR #29515

6. **#29516 — 缓存 transcript turn 索引**
   `indexOf()` 改为 `Map` 缓存，10,000 节点基准 414.20 ms → **17.91 ms**（~23 倍）。
   链接：google-gemini/gemini-cli PR #29516

7. **#29411 — `--resume` 恢复到最近活跃的会话**（已关闭）
   此前 bare `--resume` 按启动时间选取，导致恢复到过期的 spike 会话，现改为按最近活动排序。修复 #29410。
   链接：google-gemini/gemini-cli PR #29411

8. **#29407 — JSON 序列化保留共享引用**（已关闭）
   将进程级 `WeakSet` 改为递归路径跟踪，OpenTelemetry 导出中重复数组不再变成 `[Circular]`。修复 #29406。
   链接：google-gemini/gemini-cli PR #29407

9. **#28664 — MCP 同意提示反映完整服务器配置**
   扩展更新确认此前只展示 command/args/httpUrl，未覆盖 `env`、`cwd`、`headers` 等可影响执行的敏感字段，存在安全审批盲区。
   链接：google-gemini/gemini-cli PR #28664

10. **#29404 — 新增 `gemini models list` 子命令（JSON 输出）**（已关闭）
    使外部集成无需硬编码模型 ID 即可发现 `-m/--model` 的合法取值。
    链接：google-gemini/gemini-cli PR #29404

---

## 五、功能需求趋势

| 方向 | 代表 Issue | 说明 |
|---|---|---|
| **子代理体系成熟化** | #20195、#18287、#22741、#22598 | 本地 subagent Sprint、并行协作、后台化（Ctrl+B）、轨迹共享，官方在系统性投入 |
| **AST 感知代码理解** | #22745、#22746、#22747 | 探索 tilth/glyph/ast-grep 用于精确读取与代码库映射 |
| **上下文经济与 token 效率** | #19561、#18836 | "Tactful Extraction"、文件持久化任务追踪替代 in-context todo |
| **安全与沙箱** | #19873、#22672、#29510、#28664 | OS 级沙箱、破坏性命令防护、注入加固、MCP 审批完整性 |
| **可观测性** | #21763、#22598 | `/bug` 报告和 `/chat share` 需包含 subagent 上下文 |
| **浏览器代理健壮性** | #22267、#22232、#21983 | 配置生效、会话接管、Wayland 支持 |

---

## 六、开发者关注点

1. **子代理可靠性是最大痛点**：假成功上报（#22323、#21983）、无限挂起（#21409）、不主动调用（#21968）三个层面的问题叠加，许多用户被迫在提示中禁用 subagent——与官方大力投入子代理生态的方向形成反差。
2. **终端体验细节**：终端 resize 闪烁（#21924）、`\n` 转义错误（#22466）、`tildeifyPath` 路径边界错误（#29622）等 UI 层小问题持续消耗用户耐心。
3. **配置一致性**：settings.json 覆盖在 Browser Agent 等路径上不生效（#22267），symlink 的 agent 文件不识别（#20079），用户对“配置写了但没用”容忍度低。
4. **工具与 token 规模化**：工具数超限直接 400（#24246）、上下文基线偏高（#19561），重度用户对 token 成本和工具管理敏感。
5. **安全边界意识提升**：社区和贡献者均在推动更严格的安全模型（沙箱提案、命令注入修复、MCP 审批完整性），值得企业在采用前评估。

---
*数据来源：google-gemini/gemini-cli（过去 24 小时）*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-04 | 数据来源：[github/copilot-cli](https://github.com/github/copilot-cli)**

---

## 一、今日速览

今日无新版本发布，社区以 Issue 反馈为主，MCP 生态成为最集中的问题域——OAuth 认证失败（Entra ID / Atlassian）、工具目录回归 Bug、大小写匹配等多个 MCP 相关问题集中爆发。同时，ACP 模式的功能缺口（模型列表、Computer Use 插件、辅助审批）引发多位开发者的功能请求。macOS 更新后 `.mcp-writer.binding` 残留导致 CLI 不可用的高热度 Bug（#4998）仍在等待修复。

---

## 二、版本发布

过去 24 小时无新 Release。

---

## 三、社区热点 Issues

**1. [#4998](https://github.com/github/copilot-cli/issues/4998) — macOS 更新/重启后 CLI 完全不可用（`.mcp-writer.binding` 残留过期的文件系统设备 ID）**
🔥 7 👍 / 7 评论，最高热度。安全更新重启后所有会话（新建和恢复）均无法处理 prompt，属阻断级 Bug，影响 macOS 用户升级路径，值得官方优先响应。

**2. [#5044](https://github.com/github/copilot-cli/issues/5044) — 1.0.87 回归：MCP 工具调用报 "MCP tool catalog changed"**
当快照与实际 `tools/list` 响应中无关工具的 `_meta` 字段不一致时调用即失败。版本回归类问题，影响所有使用带快照 MCP 服务器的用户。

**3. [#5042](https://github.com/github/copilot-cli/issues/5042) — HydraFusion 路由 400 后切换到小上下文模型，静态提示词装不下、工具集中途变化**
长会话稳定性问题：同一会话被静默降级到能力不足的模型，可能导致上下文丢失和行为突变。

**4. [#5040](https://github.com/github/copilot-cli/issues/5040) — MCP OAuth：Entra ID 拒绝 127.0.0.1 回调（AADSTS50011）**
企业用户接入 Microsoft Entra 保护的远程 MCP 服务器的阻断问题，涉及 4 个受影响服务器，缺少 localhost host 覆盖配置。

**5. [#5014](https://github.com/github/copilot-cli/issues/5014) — MCP OAuth "Sign in" 对有状态服务器（Atlassian）报 HTTP 400**
自 1.0.90-0 起，已存有有效 token 的 Atlassian MCP 仍要求登录且登录失败，企业场景受影响明显。

**6. [#4946](https://github.com/github/copilot-cli/issues/4946) — 后台 shell 完成通知后触发 HTTP 400 `content[].thinking`**
后台命令跨 turn 完成后通知被注入新 turn，引发模型 API 请求格式错误，是后台任务与模型协议交互的边界 Bug。

**7. [#5047](https://github.com/github/copilot-cli/issues/5047) — 功能请求：在 ACP 模式下暴露辅助审批（assisted approval）**
让 T3 Code 等 ACP 客户端复用 Copilot 内置的安全判定器自动审批安全操作，是 ACP 生态集成的关键能力补齐。

**8. [#5049](https://github.com/github/copilot-cli/issues/5049) — ACP 模式下 Computer Use 插件不可用（Windows, 1.0.91）**
CLI 已启用但 ACP 会话中插件及其 MCP server 缺失，命令可识别但无法执行，属于 CLI 与 ACP 能力不一致。

**9. [#5041](https://github.com/github/copilot-cli/issues/5041) — 功能请求：Plan mode 增加“接受计划并重置上下文”操作**
批准计划后实现会话继承完整规划转录（含被否决方案），浪费上下文。提案保留产物、丢弃规划过程，是高质量的上下文管理改进方向。

**10. [#5045](https://github.com/github/copilot-cli/issues/5045) — `/compact` 使用 gpt-6.1-sol 时反复失败（空模型响应）**
上下文压缩是长会话刚需，持续失败意味着会话无法续命，且已有类似历史报告。

其他值得留意：[#5027](https://github.com/github/copilot-cli/issues/5027)（Linux 沙箱 + systemd-resolved DNS 失效）、[#5043](https://github.com/github/copilot-cli/issues/5043)（Herdr 中 Ctrl+Shift+C 意外取消 attestation）、[#5050](https://github.com/github/copilot-cli/issues/5050)（`/mcp` 大小写敏感匹配）。

**近期关闭**：#2795（agent + plugin-dir + prompt 组合失效，17 👍）、#4012（BYOK reasoning effort 不支持 glm-5.2:cloud，23 👍）、#1287（marketplace kebab-case 校验）、#2907（MCP 慢连接阈值配置）、#4531（Windows 下 `code .` 破坏 Git 配置）等多个长尾问题近期解决，清障节奏良好。

---

## 四、重要 PR 进展

过去 24 小时无 PR 活动更新。

---

## 五、功能需求趋势

从近期 Issue 提炼出以下方向：

- **ACP 协议补齐**：#4880（模型列表暴露）、#5047（辅助审批）、#5049（插件可用性）——ACP 作为第三方客户端接入通道，能力对齐 CLI 是最强需求
- **MCP 生态健壮性**：OAuth 认证（#5040、#5014）、工具目录一致性（#5044）、匹配容错（#5050）——MCP 已是问题最密集的子系统
- **上下文管理精细化**：#5041（规划上下文隔离）、#5045（压缩可靠性）、#5042（会话降级保护）
- **可访问性与键盘操作**：#5015（Vim/less 风格分页导航）、#5043（自定义终端快捷键兼容）
- **配置灵活性**：#2907（阈值可配置化）已关闭，显示团队在响应硬编码痛点的诉求

---

## 六、开发者关注点

1. **平台级兼容 Bug 频发**：macOS 系统更新（#4998）、Linux systemd-resolved（#5027）、Windows Git 环境（#4531）——CLI 与操作系统深度耦合的回归风险是最大痛点
2. **模型路由与会话稳定性**：HydraFusion 静默降级（#5042）、`/compact` 失败（#5045）、`content[].thinking` 400（#4946）表明长会话 + 多模型场景仍不成熟
3. **企业集成门槛高**：Entra ID、Atlassian、OAuth 回调等企业身份链路问题集中，制约 MCP 在企业内的落地
4. **沙箱网络可用性**：DNS 解析在沙箱内失效（#5027）直接影响权限沙箱的实用性
5. **多终端/多 IME 环境**：CJK 字符乱码（#3369）、Herdr 快捷键冲突（#5043）反映非美式环境用户的基础体验仍需打磨

---
*本日报基于过去 24 小时 GitHub 数据自动整理，共追踪 24 条 Issue 更新、0 条 PR、0 条 Release。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-04

## 📌 今日速览

今日无新版本发布。社区焦点集中在 **MCP 稳定性问题**（远程服务器连接失败后不重试、高 RTT 环境无法连接）和 **v2 迁移兼容性**（`/etc/opencode` 配置不再受支持）。PR 方面，核心贡献者 @kitlangton 完成了一轮大规模 TUI 死代码清理，@Hona 持续打磨 GUI 与 TUI 的行为一致性。

---

## 🐛 社区热点 Issues

**1. Model generates identical response twice**（#25270，25 评论，已关闭）
模型连续两次生成完全相同的回复，困扰用户数月后今日关闭。高讨论量说明流式响应/缓存去重是长期痛点。
🔗 anomalyco/opencode#25270

**2. [FEATURE] Session context usage**（#6152，138 👍，23 评论）
请求实现类似 Claude `/context` 的会话上下文占用分析工具。**138 个赞**是本期最高，是社区呼声最强的功能需求，长期保持活跃讨论。
🔗 anomalyco/opencode#6152

**3. Copying Japanese text results in mojibake**（#30068，17 评论，已关闭）
复制日文文本出现 UTF-8/latin1 乱码——屏幕显示正常但剪贴板内容损坏。国际化用户的重要修复，今日关闭。
🔗 anomalyco/opencode#30068

**4. AI aborts after writing `</｜DSML｜tool_calls>`**（#49050，13 评论，OPEN）
模型输出 DSML 终止标记即中断，直接影响可用性。与 #50206 同属 DSML 协议解析问题。
🔗 anomalyco/opencode#49050

**5. Compaction ignores `agents.compaction.model` since v2 beta refactor**（#44094，12 评论，OPEN）
8 月"shared model request"重构后，v2 beta 的压缩操作静默使用会话当前模型，忽略用户配置。v2 迁移质量问题的典型案例。
🔗 anomalyco/opencode#44094

**6. Malformed XML/DSML tool-call output from OpenCode Go models**（#50206，7 评论，OPEN）
OpenCode Go 托管模型频繁输出非法 DSML 工具调用格式，导致工具执行失败——影响付费订阅用户的核心体验。
🔗 anomalyco/opencode#50206

**7. MCP 工具权限请求在 Code Mode 中不可见，导致执行挂起**（#51223，6 评论，OPEN）
Code Mode 内 MCP 工具触发的权限询问不会渲染到 TUI，用户只能中断。静默失败类问题，排查成本高。
🔗 anomalyco/opencode#51223

**8. 远程 MCP 服务器失败一次后永不重试**（#52237，5 评论，OPEN）
macOS 睡眠唤醒后远程 MCP 连接永久失败，需重启后台服务。MCP 状态管理设计缺陷。
🔗 anomalyco/opencode#52237

**9. Sub-agent 在 compaction 后绕过 Plan 模式限制**（#18213，5 评论，已关闭）
压缩发生后子代理用 `cat`/`sed` 修改代码，突破 Plan 模式只读约束——涉及安全边界问题，值得关注修复方案。
🔗 anomalyco/opencode#18213

**10. 远程 MCP 在 RTT > 250ms 时无法连接**（#53053，今日新建，3 评论，OPEN）
`autoSelectFamilyAttemptTimeout` 过小导致高延迟网络环境下远程 MCP 永远加载失败。今日新报，与 #52237 共同指向 MCP 网络层薄弱。
🔗 anomalyco/opencode#53053

---

## 🔧 重要 PR 进展

**1. docs: 同步 contributing 与 config 文档**（#53079，OPEN）
修复文档与代码脱节（TUI 代码路径过时），关闭 #41547。
🔗 anomalyco/opencode#53079

**2. GUI 对齐 TUI 的 steer 撤销与待处理输入顺序**（#53076，OPEN，@Hona）
GUI 中撤回 pending steer 的行为与 TUI `/undo` 一致化，减少双端体验差异。
🔗 anomalyco/opencode#53076

**3. 收紧 GUI 扩展 SDK 接口**（#53078，OPEN，@Hona）
统一 `list({ session, screen, open })` 命名参数，保证 panel 与 slot 始终拿到非空 screen——SDK API 规范化改进。
🔗 anomalyco/opencode#53078

**4. 移除未使用的插件主题注册**（#52992，CLOSED，@kitlangton）
清理 `pluginThemes` 死代码写入路径。

**5. 移除 V1 语法主题生成（约 500 行）**（#52987，CLOSED）
删除 V1 遗留的 `generateSyntax` 等大块死代码，v2 甩掉历史包袱的标志性清理。
🔗 anomalyco/opencode#52987

**6. 裁剪 `@opencode/tui` 未使用的 28 个子路径导出**（#52988，CLOSED）
私有包 exports 全面瘦身，降低维护面。

**7. 移除永久禁用的 unshare 命令**（#53003，CLOSED）
`enabled: false` 的死命令及不可达分支一并移除。

**8. 移除 V1 配置别名与无用 keybind 值**（#52990，CLOSED）
V1 配置兼容层的又一轮清理。

**9. 共享 mini requestOptions 辅助函数**（#53000，CLOSED）
消除两处字节级重复的私有 helper。

**10. 移除未读的终端环境字段**（#52991，CLOSED）
`multiplexer`/`displayServer` 从未被读取（git 历史验证），删除。

> 💡 本轮 @kitlangton 系列清理 PR（#52986–#53003）均以 `rg`/`git log -G` 严格验证无消费者后删除，节奏密集、全部当日合并，是一次高质量的 TUI 代码库瘦身行动。

---

## 📈 功能需求趋势

1. **会话上下文可观测性**：`/context` 类工具（#6152，138 👍）呼声最高，用户需要 token 占用分解来管理长会话。
2. **MCP 可靠性与生命周期管理**：连接重试、高延迟兼容、子进程回收（#52237/#53053/#52410）集中爆发，是当前最迫切的稳定化方向。
3. **v2 迁移完整性**：配置目录优先级（#53074）、compaction 模型配置（#44094）等回归问题增多，v2 beta 处于关键打磨期。
4. **模型输出协议健壮性**：DSML 工具调用解析失败（#49050/#50206）影响基础可用性。
5. **桌面端体验**：Skill/MCP GUI 管理界面（#31399）、任意文件附件（#40341）、历史会话访问（#38272，100 条/30 天限制）。

---

## ⚠️ 开发者关注点

- **MCP 是当前最大痛点**：权限请求静默挂起、失败不重试、高 RTT 不可用、子进程泄漏（曾 65 分钟吃掉 20GB 内存）——远程 MCP 用户建议暂时准备重启后台服务的 workaround。
- **v2 beta 用户需谨慎**：`/etc/opencode` 不可变配置暂不受支持（#53074），企业部署用户注意；compaction 模型配置失效需检查。
- **付费 OpenCode Go 用户遭遇 429 限流异常**（#52408）：dashboard 配额充足却持续触发限流且配额快速消耗，影响订阅价值。
- **安全边界可靠性**：Plan 模式在 compaction 后可被子代理绕过（#18213），依赖只读约束的工作流需留意。
- **国际化编码问题已修复**：日文复制乱码（#30068）与重复回复（#25270）两大长尾 bug 今日关闭，相关用户建议升级验证。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-04

## 📌 今日速览

今日 Qwen Code 发布了 nightly 版本 v0.24.7，社区活跃度集中在 **Managed Agent 架构**的多线推进上——wenshao、yiliang114 等核心贡献者密集提交了 H3 后台 Shell/Monitor、M5b 工具结果持久化等关键切片。同时，非会话上下文 Token 治理（#12028）与 CVE 审计失败（#13078）等质量议题持续引发讨论。

---

## 🚀 版本发布

**v0.24.7-nightly.20261003.2c591ecc08**（[Release](https://github.com/QwenLM/qwen-code/releases)）
- `fix(core)`: Code Mode 文本与懒加载工具发现机制对齐（[PR #12990](https://github.com/QwenLM/qwen-code/pull/12990)）
- `fix(permissions)`: 权限批准相关修复

---

## 🔥 社区热点 Issues

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380) Managed Agent 双路径架构提案**（45 评论）
   定义分阶段 Managed Agent 架构：保留现有 TS agent loop、模型推理与工具环境解耦、Session 持久所有权与可恢复工具执行。是当前讨论量最高的方向性提案。

2. **[#12028](https://github.com/QwenLM/qwen-code/issues/12028) 非会话上下文 Token 治理**（18 评论，进行中）
   系统提示词、内置工具 schema、`QWEN.md` 等在每次请求都重复付费，长上下文模型上该开销可能远超会话本身。核心性能优化主战场。

3. **[#12737](https://github.com/QwenLM/qwen-code/issues/12737) ACP 桥接 Stage B 主机集成**（16 评论）
   Legacy 与 Managed 引擎配对运行的主机集成方案，含 2026-09-28 调度决策更新。

4. **[#10887](https://github.com/QwenLM/qwen-code/issues/10887) [P1] 重复工具错误无早停机制**（7 评论）
   生产会话在死胡同循环中烧掉 5-14M Token，影响 0.20.1–0.21.0 版本，最高优先级 bug。

5. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078) 依赖 CVE 每日审计失败**（8 评论）
   定时审计任务失败，可能存在新的高危漏洞，需要安全关注。

6. **[#13283](https://github.com/QwenLM/qwen-code/issues/13283) LSP 拉取能力未被读取**（4 评论，待人工处理）
   仅推送模式的 LSP 服务器会触发 15 秒超时并否决工作区报告，影响编辑器诊断体验。

7. **[#13209](https://github.com/QwenLM/qwen-code/issues/13209) models.dev 目录键不闭合**（4 评论）
   `normalize()` 仅对 Claude 处理点号版本号，导致 qwen/glm/doubao 的点号拼写无法匹配目录条目，影响模型切换。

8. **[#13340](https://github.com/QwenLM/qwen-code/issues/13340) Web Shell 计划审批体验**（4 评论）
   计划渲染为纯文本（裸 `#` 标题），建议 Markdown 渲染并强制 Plan & Review 的 Todo 结构。

9. **[#13309](https://github.com/QwenLM/qwen-code/issues/13309) Markdown 流式分割误判**（4 评论）
   行内代码中的波浪线围栏标记被误识别为代码块，导致流式渲染插入错误的闭合围栏。

10. **[#13360](https://github.com/QwenLM/qwen-code/issues/13360) Goal 验证器安全缺陷**
    聚合包装器结果（agent/advisor/workflow）被误分类为 `external_fact`，模型自述文本可“证明”文件/测试变更，存在验证绕过风险。

---

## 🔧 重要 PR 进展

1. **[#13265](https://github.com/QwenLM/qwen-code/pull/13265) H3：后台 Shell 与 Monitor 运行时**
   Managed 路径实现后台 Shell/Monitor，双语设计文档已先行合入。

2. **[#13291](https://github.com/QwenLM/qwen-code/pull/13291) M5b：本地 Runtime 工具结果持久化**
   每个 Managed 会话的工具调用参数、定义与结果都在会话同一权威存储中持久化，保障可恢复性。

3. **[#13168](https://github.com/QwenLM/qwen-code/pull/13168) Hosted Turn 获取 Workspace 项目上下文**
   Hosted turns 现在读取会话工作目录中的 `QWEN.md`/`AGENTS.md`。注意该 PR 已达 +3250/-186，超出 1500 行熔断线，遗留 11 条建议转至 #13364。

4. **[#13351](https://github.com/QwenLM/qwen-code/pull/13351)（已关闭）midstream 重试撤回已发布前缀**
   模型流中断后从头重试并撤回孤儿前缀，避免重试答案拼接污染公开 transcript。配套 issue #13319 一并关闭。

5. **[#13314](https://github.com/QwenLM/qwen-code/pull/13314) sdk-java Hosted Harness 关键审查修复**
   修复 #12654 合并后遗留的 11 个 Critical 与 2 个 Minor 发现。

6. **[#13363](https://github.com/QwenLM/qwen-code/pull/13363) JDBC 连接池切换 HikariCP → Druid**
   Managed Agent Server 改用 Alibaba Druid，消除对 Spring 传递依赖的无意识选择。

7. **[#13299](https://github.com/QwenLM/qwen-code/pull/13299) models.dev 目录支持点号/横杠双键**
   修复 #13209，使 qwen2-5 等点号拼写的模型 ID 正确匹配。

8. **[#13354](https://github.com/QwenLM/qwen-code/pull/13354) 可靠的 ACTIVE Workspace 删除（L3）**
   ACTIVE 会话删除需先结算 SessionEnd 再执行 SessionDelete，并验证提交结果。

9. **[#13359](https://github.com/QwenLM/qwen-code/pull/13359) Turn 级 deadline 超时分类失败**
   贯通 Managed 栈的 Turn 超时机制（默认 30 分钟），超时被归类为确定性失败。

10. **[#12531](https://github.com/QwenLM/qwen-code/pull/12531) 阻止 MCP 规则授权冲突服务器**
    MCP 权限规则遵循工具生产者的原始身份，`foo.bar` 的允许规则无法授予 `foo_bar` 注册的工具，安全加固。

---

## 📈 功能需求趋势

- **Managed Agent / 多智能体架构**：绝对主线。#12380、#12737、#13300 等十余个 issue/PR 围绕双路径架构、ACP 桥接、Hosted Harness 分阶段交付展开。
- **Token 治理与长上下文成本**：#12028 牵引出 #12333（benchmark 门禁）、#13252（输出钳制）、#13004/#13003（记忆提取冷却）等成体系的优化需求。
- **Web Shell / Desktop 体验**：快捷键（#13175）、Markdown 渲染（#13340、#13309）、Composer 标签清理（#13262）等 UI 打磨需求活跃。
- **平台分发**：Android Phase 2 收尾（#13111）、sdk-java 客户端建设持续推进。
- **CI/安全基础设施**：CodeQL 静默失败修复（#13249 已关闭）、CVE 审计（#13078）、测试去 flake 化（#13356）。

---

## ⚠️ 开发者关注点

1. **Token 消耗失控风险**：#10887 中死循环烧掉千万级 Token 仍是最高优先级痛点，且 Token 优化工作缺少“代价侧”（工具召回率/任务成功率）度量门禁（#12333）。
2. **大规模 PR 的审查债务**：多处出现“合并后补审”模式（#12654、#13129、#13168），单 PR 超 3000 行触发熔断、遗留数十条 deferred Suggestions，审查带宽明显承压。
3. **CI 可靠性**：夜间 CodeQL 曾连续 13 次静默超时（#13249）、hook-runner 测试竞态（#13356）、serve A/B 基础设施 flake，持续消耗维护精力。
4. **验证与安全边界**：Goal 验证器绕过（#13360）、MCP 身份混淆（#12531）表明权限/验证层仍需系统加固。
5. **版本兼容性**：混合版本 takeover 拒绝呈现为不透明的 503（#13320 已关闭），跨版本 journal 兼容是运维敏感点。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（Codewhale）社区动态日报

**日期：2026-10-04 | 数据来源：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)**

---

## 一、今日速览

0.10.1 集成 PR #6815 持续推进，成为当前最活跃的主线工作，涵盖 Rust Engine 收敛、TypeScript 模块复用与 Ratatui UX 改进。EPIC-005 大规模 crate 拆分迎来实质进展，FEAT-027 的 draft PR #6832 已提交，`/permissions` 与 `/status` 命令迈向可移植化。过去 24 小时社区贡献活跃，6 个贡献者 PR 被关闭合并，涵盖 i18n、字素换行、执行策略等多项修复。

---

## 二、版本发布

过去 24 小时无新 Release。

---

## 三、社区热点 Issues（今日更新共 5 条，全部覆盖）

1. **[#5316] EPIC-005: CodeWhale TUI Crate 拆分（总览 Issue）** — @aboimpinto | OPEN | 31 条评论
   链接：[Issue #5316](https://github.com/Hmbown/Codewhale/issues/5316)
   **为何重要**：这是 TUI 架构重构的伞形 Issue，涉及大规模 crate 解耦。FEAT-027 已于 10-03 完成实现并提交 draft PR #6832，评论数达 31 条，是社区当前讨论最密集的架构话题。

2. **[#6827] Windows npm 安装下杀死 node.exe 会导致 Codewhale 无清理直接退出，agent 自己的 "stop node" 命令可能误杀会话** — @jayanthvee | OPEN
   链接：[Issue #6827](https://github.com/Hmbown/Codewhale/issues/6827)
   **为何重要**：Windows 平台进程树管理是长期痛点，影响会话数据安全（无清理即退出可能导致状态丢失），目前等待 triage。

3. **[#6418] 无法恢复会话（Runtime store 归属不匹配）** — @luestr | **CLOSED**
   链接：[Issue #6418](https://github.com/Hmbown/Codewhale/issues/6418)
   **为何重要**：会话恢复是 TUI 工具的核心可靠性能力，该 bug 已于 10-03 关闭，说明修复已落地。

4. **[#6328] 计划任务（watches / heartbeat）列表 UI** — @Hmbown | OPEN
   链接：[Issue #6328](https://github.com/Hmbown/Codewhale/issues/6328)
   **为何重要**：agent 定时调度能力的 UI 入口，展示调度间隔、上次/下次运行时间及暂停/恢复，目前被 Core cron 路由阻塞，是 roadmap 上的明确节点。

5. **[#6818] 将完整的 Ratatui 组件浏览器加入官网** — @Hmbown | OPEN
   链接：[Issue #6818](https://github.com/Hmbown/Codewhale/issues/6818)
   **为何重要**：已完成 204 条目的封闭导出并合入 wave/0.10.1-next 分支，将大幅改善 UI 组件的文档与上手体验。

---

## 四、重要 PR 进展（今日更新共 9 条，全部覆盖）

### 🟢 仍在开放

1. **[#6815] 0.10.1 集成：Engine 收敛、TypeScript 模块复用与 Ratatui UX** — @Hmbown
   链接：[PR #6815](https://github.com/Hmbown/Codewhale/pull/6815)
   统一 Rust Engine 承载执行、provider 身份、权限、事件、会话、存储与计量；ACP、子 agent 与递归 RLM 共享同一 turn 路径。当前主线集成 PR。

2. **[#6805] feat(plugins): 支持经审核的 OAuth AI provider** — @LIghtJUNction
   链接：[PR #6805](https://github.com/Hmbown/Codewhale/pull/6805)
   允许审核过的插件包通过 `extensions.net.codewhale.providers` 声明 OpenAI 兼容 provider 与 OAuth 客户端，复用现有 provider 路由与流式路径。

3. **[#6832] refactor(commands): 采用可移植 config/status Shapes（FEAT-027）** — @aboimpinto
   链接：[PR #6832](https://github.com/Hmbown/Codewhale/pull/6832)
   EPIC-005 拆分的最新产出，使 `/permissions`（含别名与 `/config` 权限规则路由）和 `/status` 独立可移植，接续已合并的 #6793。

### ✅ 已关闭/合并

4. **[#6830] feat(tui): 固定提示头跟随视口并支持点击跳转** — @SparkofSpike
   链接：[PR #6830](https://github.com/Hmbown/Codewhale/pull/6830)
   固定用户提示头改为按视口起始 turn 显示而非仅最新消息，点击可跳回对应消息，滚动导航体验显著提升。

5. **[#6829] fix(tui): diff 与工具输出按字素边界换行** — @Lstarsky0
   链接：[PR #6829](https://github.com/Hmbown/Codewhale/pull/6829)
   修复两处仍按 `char` 逐字换行的路径，保证 keycap、ZWJ emoji 与组合字符对齐（#4479 类问题）。

6. **[#6831] fix(tui): 补齐 12 个语言包中遗留英文的上下文检查器文案** — @Lstarsky0
   链接：[PR #6831](https://github.com/Hmbown/Codewhale/pull/6831)
   修复 14 个语言包中 12 个（除 zh-Hans/zh-Hant 外）上下文检查器行与快捷键提示未翻译的问题。

7. **[#6820] fix(tui): Python/JavaScript 工具应用逐次调用执行策略** — @Guan0923
   链接：[PR #6820](https://github.com/Hmbown/Codewhale/pull/6820)
   将 `code_execution` / `js_execution` 的解释器进程接入权限感知启动器，修复原先跳过权限门控直接启动本地进程的安全漏洞。

8. **[#6819] fix(cli): 修复配置诊断对 HTTP(S) 协议大小写的误判** — @Guan0923
   链接：[PR #6819](https://github.com/Hmbown/Codewhale/pull/6819)
   `config doctor` 对协议判断加 `to_ascii_lowercase()`，不再误报大写协议地址为非法配置。

9. **[#6806] build(deps): 依赖升级（axios 1.18.1 → 1.20.0）** — dependabot[bot]
   链接：[PR #6806](https://github.com/Hmbown/Codewhale/pull/6806)
   飞书/企微 bridge 集成目录的 npm_and_yarn 组例行升级。

---

## 五、功能需求趋势

- **架构可移植化（EPIC-005 / FEAT-027）**：crate 拆分 + 共享 command Shapes 是当前最强主线，命令正逐个从单体中剥离。
- **统一 Rust Engine**：执行、权限、会话、计量收敛到单一 Engine，TypeScript 模块仅复用捕获的权限（#6815）。
- **Provider 生态扩展**：插件声明式 OAuth / OpenAI 兼容 provider（#6805），降低接入门槛。
- **TUI 视觉与导航体验**：固定提示头跳转（#6830）、字素级换行（#6829）、组件浏览器上官网（#6818）。
- **Agent 调度能力**：watches / heartbeat 计划任务列表 UI（#6328），等待 Core cron 路由解锁。
- **国际化**：多语言包翻译补全持续进行（#6831）。

## 六、开发者关注点

- **Windows 平台进程管理**：node.exe 被杀导致无清理退出（#6827）是当前待 triage 的高优问题。
- **会话持久化可靠性**：Runtime store 归属校验引发的恢复失败（#6418）虽已关闭，但反映出版本升级时迁移兼容性需持续关注。
- **执行安全**：解释器进程绕过权限启动器（#6820）提示社区对工具执行沙箱与权限门控的敏感性。
- **终端渲染正确性**：emoji/组合字符的宽度对齐问题（#6829、#4479 系）是 Ratatui 生态的长期痛点。
- **贡献流程健康**：过去一天 6 个社区 PR 合并（contribution-gate 标签），外部贡献节奏良好，但 gate 审核吞吐需保持。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-04

## 一、今日速览

Pi 连续发布 v1.0.1 与 v1.0.2 两个版本，引入 Nix flake 安装支持和按思考级别（thinking level）配置采样参数两项重要特性。TUI 性能与渲染问题仍是社区讨论焦点——长会话 CPU 占用、全屏重绘风暴等 Issue 持续活跃。1.0.1 中 `/mcp` 菜单消失的回归问题已被报告并关闭，多个修复 PR 正在推进中。

## 二、版本发布

### [v1.0.2](https://github.com/earendil-works/pi/releases/tag/v1.0.2)
- **按思考级别采样**：`models.json` 中新增 `samplingParamsByThinkingLevel`，可为 OpenAI 兼容 API 的每个思考级别分别设置 `temperature`、`top_p` 等参数（源自 PR #9776）。

### [v1.0.1](https://github.com/earendil-works/pi/releases/tag/v1.0.1)
- **Nix flake 支持**：可通过 `nix run github:earendil-works/pi/stable` 直接运行，`nix profile add` 持久安装。
- 其他项目级改进（详见 [安装文档](https://github.com/earendil-works/pi/blob/v1.0.1/packages/coding-agent/docs/quickstart.md#1-install-pi)）。

## 三、社区热点 Issues

1. **[#2870](https://github.com/earendil-works/pi/issues/2870) XDG 基础目录规范（已关闭）** — 62 👍 / 24 评论，本日最热。Linux 下配置散落主目录的问题终于解决，是社区呼声最高的合规性改进之一。

2. **[#7730](https://github.com/earendil-works/pi/issues/7730) macOS 长会话 CPU 占用过高达 100%+** — 与上下文/会话长度相关，内存占用 600-800MB，长期未解，直接影响重度用户日常体验。

3. **[#9807](https://github.com/earendil-works/pi/issues/9807) 800+ 消息会话 TUI 滚动/输入卡顿** — 社区建议采用增量 cell 级 diff 渲染（对标 OpenCode 的 OpenTUI），与 #7730 共同指向大 session 性能瓶颈。

4. **[#9255](https://github.com/earendil-works/pi/issues/9255) 全屏模式重绘风暴致长转录跳动/文字重叠** — 变更行位于视口上方时几乎每帧触发全量重绘，是全屏 TUI 稳定性的核心 bug。

5. **[#9688](https://github.com/earendil-works/pi/issues/9688) 剪贴板复制回归（已关闭）** — OSC 52 逻辑收紧为“仅 SSH 场景”后，容器内用户复制失效，典型修复引入回归案例。

6. **[#10427](https://github.com/earendil-works/pi/issues/10427) 1.0.1 中 `/mcp` 菜单消失（已关闭）** — 新版本回归问题，无扩展环境下也无法唤起，升级用户需关注。

7. **[#10314](https://github.com/earendil-works/pi/issues/10314) 全屏模式 Home/End 默认键位之争** — 行首跳转 vs 页面滚动，涉及默认行为变更的产品决策讨论，7 条评论仍在进行。

8. **[#10287](https://github.com/earendil-works/pi/issues/10287) 网络错误后 `getContextUsage()` 上下文估算暴涨至 33 万 tokens** — 从 42k 跳升约 8 倍，影响自动 compaction 触发判断，可靠性问题。

9. **[#10330](https://github.com/earendil-works/pi/issues/10330) CLI 模式（`--mode json`）自动压缩不生效** — TUI 正常但 CLI 失败，影响脚本化/自动化使用场景。

10. **[#8301](https://github.com/earendil-works/pi/issues/8301) 提示队列中无法交错执行 `/compact`** — 排队的首个 compact 立即取消会话，阻碍长任务批量工作流。

## 四、重要 PR 进展

1. **[#10443](https://github.com/earendil-works/pi/pull/10443)（已关闭）** 终端消失时 stdin `EIO` 错误路由至 `emergencyTerminalExit`，避免 ssh 断开/tmux 掉线导致的崩溃。今日新提交。

2. **[#10440](https://github.com/earendil-works/pi/pull/10440)（开放）** QuickJS wasm 路径改为进程内解析一次，修复 pnpm 全局更新后 codemode 持续失败（对应 Issue #10439）。

3. **[#9776](https://github.com/earendil-works/pi/pull/9776)（已合并关闭）** 按思考级别采样参数，已随 v1.0.2 发布。

4. **[#10437](https://github.com/earendil-works/pi/pull/10437)（开放）** 交互模式下设置保存失败（只读 settings.json 等）即时上报，而非静默吞掉错误。

5. **[#10433](https://github.com/earendil-works/pi/pull/10433) / [#10429](https://github.com/earendil-works/pi/pull/10429)（开放）** 允许应用在 OpenAI 登录流程中自定义名称与 User-Agent，避免基于 pi-ai 的第三方工具在"Sign in with ChatGPT"中被显示为 "Pi"。

6. **[#10410](https://github.com/earendil-works/pi/pull/10410)（开放）** durable SDK 暴露 `thinkingBudgets`、`websocketConnectTimeoutMs`、`sessionId` 等会话选项。

7. **[#8734](https://github.com/earendil-works/pi/pull/8734)（开放）** OpenAI Responses 兼容 provider 支持顶层 `instructions` 格式的系统提示，关闭 #8388。

8. **[#10397](https://github.com/earendil-works/pi/pull/10397)（已关闭）** 服务端复用相同 `(call_id, id)` 时去重 tool call id，防止消息历史损坏。

9. **[#10402](https://github.com/earendil-works/pi/pull/10402)（已关闭）** macOS 上绑定 Ctrl+H 为退格删除，改善 CapsLock→Ctrl 用户的键位习惯。

10. **[#10261](https://github.com/earendil-works/pi/pull/10261)（开放）** 新增提示模板（`/current-time`）文档化 eval，用 Vitest 验证生成命令展开的准确性。

## 五、功能需求趋势

- **TUI 渲染架构升级**：#9255、#9807、#10383 显示社区强烈期待从全量重绘转向增量 diff 渲染。
- **大 session/上下文性能**：CPU 占用（#7730）、上下文估算失准（#10287）、自动压缩不可靠（#10330、#8301）集中出现，长会话稳定性是当前最大主题。
- **provider 兼容性与成本控制**：缓存保持的 reasoning 调整（#9335）、prompt 前缀重复计费（#10267）、Responses API 历史污染（#10139），社区对 token 成本与缓存命中的敏感度很高。
- **可定制性/品牌化**：应用名与 UA 自定义（#10429/#10433）反映 pi-ai 作为底层 SDK 的生态化趋势。
- **跨平台细节**：Windows 路径 glob（#9262）、mintty 颜色查询泄漏（#10256）、Unix socket MCP（#10247）、Nix 支持（v1.0.1）持续补齐平台短板。
- **包管理与更新体验**：旧版本目录堆积（#10392，每版约 168MB）、pnpm 更新破坏 codemode（#10439）。

## 六、开发者关注点

1. **长会话是性能重灾区**：CPU、渲染、内存、上下文计量问题相互交织，建议重度用户关注 #7730 / #9807 进展，必要时分会话使用。
2. **升级 1.0.x 需验证回归**：`/mcp` 菜单消失（#10427）、剪贴板复制（#9688）均为近期修复引入的回归，升级后建议快速自检。
3. **自动化/CLI 用户注意**：CLI 模式自动压缩失效（#10330）、`PI_OFFLINE=1` 阻断显式更新（#6566）影响脚本化场景。
4. **成本敏感用户**：`before_agent_start` 注入的提示在非用户发起的 run 中被丢弃并重新计费（#10267），使用扩展注入系统提示的用户应留意。
5. **managed install 用户**：旧版本不清理（#10392），长期更新会累积数 GB 冗余，可手动清理 `~/.pi/agent/install/releases/`。

---
*数据截至 2026-10-04，来源：github.com/earendil-works/pi*

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-10-04

## 📰 今日速览

oh-my-pi 今日连发两个版本：**v18.6.0** 修复了 DeepSeek 原生 `<｜DSML｜>` 工具调用残留文本污染会话历史的问题，**v18.5.1** 为成本估算器引入 provider 上报的真实费用数据。社区讨论焦点集中在 Windows TUI 鼠标追踪泄漏（SGR 报文注入输入框）、DSML healer 误吞正文两个回归性 Bug，以及多个大型架构 PR（跨进程会话分离、多路复用终端）的持续推进。

---

## 🚀 版本发布

### [v18.6.0](https://github.com/can1357/oh-my-pi/releases)
**@oh-my-pi/pi-agent-core 修复**：当 DeepSeek 回合以无法解析的原始 `<｜DSML｜…>` 工具调用文本结束且未产生实际调用时，坏掉的标记现在会在写入历史前被清除，避免污染后续上下文。

### [v18.5.1](https://github.com/can1357/oh-my-pi/releases)
- **新增**：`CostEstimatorContext` 增加 provider 上报的使用成本、未规范化的 provider ID 和请求的模型 ID——成本估算器可直接使用已记录的费用，无需从 token 数重新计算。
- **改进**：多项内部优化。

---

## 🔥 社区热点 Issues

1. **[#14217](https://github.com/can1357/oh-my-pi/issues/14217) — Windows TUI 全屏浮层关闭后鼠标追踪未关闭（8 评论，P2）**
   关闭 `/model` 等浮层后，鼠标移动会将原始 SGR 报文（`[<35;60;20m…`）直接注入 composer。在 omp 18.5.1 + Windows Terminal 稳定复现，属高可见性的终端状态管理 Bug。

2. **[#14272](https://github.com/can1357/oh-my-pi/issues/14272) — DSML 扫描器静默丢弃不完整包络后的全部正文（P2）**
   自 #14202 将 DSML healer 扩大到所有 DeepSeek 类模型后，正文中引用 `<｜DSML｜tool_calls>` 开标记会导致其后内容全部丢失。与今日 v18.6.0 修复方向直接相关，官方修复 PR #14273 已提交。

3. **[#14093](https://github.com/can1357/oh-my-pi/issues/14093) — 流式中提交模型切换 `^` 提及，`m<N>` 伪名从未告知模型（P2）**
   编排器将 `<model agent="m1"/>` 当纯文本读取，多模型路由失效，影响 steering 场景的核心体验。

4. **[#14281](https://github.com/can1357/oh-my-pi/issues/14281) — collab 手机端收不到 `cfg://` 配置变更审批提示（P2）**
   工具审批和 ask 提示能同步，但配置变更审批只在宿主 TUI 出现，手机端 10 秒后静默失败。当日已有修复 PR #14282。

5. **[#14262](https://github.com/can1357/oh-my-pi/issues/14262) — Resume 选择器增加 New session 入口（6 评论）**
   用户通过 shell 别名将 `omp` 映射为 `omp -r`，希望在同一界面选择恢复或新建会话（按钮 + Ctrl+N），反映了对启动流程灵活性的真实需求。

6. **[#14091](https://github.com/can1357/oh-my-pi/issues/14091) / [#14092](https://github.com/can1357/oh-my-pi/issues/14092) — grep 工具两处行为不一致（P2）**
   分号分隔的 artifact 作用域被当作单一 URI 拒绝；HTTPS `:raw` 在 grep 中先被拒绝而 read 正常。同一作者集中报告，工具语义一致性有待梳理。

7. **[#14167](https://github.com/can1357/oh-my-pi/issues/14167) — Anthropic thinking 被 binding_control 无效化（P2，已关闭）**
   Fable 5.1 / Opus 5.5 / Sonnet 5.5 中途工具变更未按 Anthropic 文档使用 mid-turn system message，已快速修复关闭。

8. **[#14200](https://github.com/can1357/oh-my-pi/issues/14200) — 从“工具描述裁剪”模型切回完整描述模型后报错（P2）**
   动态模型切换时的状态残留问题——切换后第二个模型持续失败，重启后正常，暴露了模型热切换路径的清理缺陷。

9. **[#1122](https://github.com/can1357/oh-my-pi/issues/1122) — 申请加入 ACP Registry（11 评论，5 👍）**
   长期开放的发现性诉求：注册后可提升 OMP 在 ACP 生态中的曝光度，配合 #14211（Zed 中 edit 审批无 diff）可见 ACP 集成体验仍是重点打磨方向。

10. **[#4385](https://github.com/can1357/oh-my-pi/issues/4385) — Windows 上 pi-natives 不应无条件暂存 .node 文件（15 评论，已关闭）**
    安装路径与 DLL 锁问题的讨论收官，Windows 原生体验的长期痛点得到解决。

> 📌 值得注意的批量关闭：#13652（macOS 辅助功能 CFNumber 调试文本）、#13619（Windows IDA 工具崩溃 P1）、#13940（编译版 pi-catalog 子路径导入）、#12939（Opus 5.5 拒绝 forced tool_choice P1）等多个跨平台 P1/P2 均在本周期关闭，修复节奏健康。

---

## 🔧 重要 PR 进展

1. **[#14282](https://github.com/can1357/oh-my-pi/pull/14282) — 修复 collab 访客收不到 `cfg://` 审批**
   镜像配置变更审批提示到 collab 客户端，直接对应今日 Issue #14281。

2. **[#14273](https://github.com/can1357/oh-my-pi/pull/14273) — 保留不完整 DSML 包络后的正文**
   修复 DeepSeek 类模型流中引用开标记吞掉剩余回复的问题，与 v18.6.0 形成互补修复。

3. **[#14166](https://github.com/can1357/oh-my-pi/pull/14166) — 多路复用会话宿主与可选 TUI 客户端（架构级）**
   系列首篇：将 omp 拆分为会话进程与 UI 客户端，建立跨进程通信。这是项目近期最重大的架构演进之一。

4. **[#14263](https://github.com/can1357/oh-my-pi/pull/14263) — 跨进程 peer 消息**
   作者公开询问维护者是否属于 core 范围，否则转为插件——社区对核心边界的讨论值得跟踪。

5. **[#13767](https://github.com/can1357/oh-my-pi/pull/13767) — TUI 性能：transcript 块移除去除冗余全量扫描（review:p1）**
   针对长会话恢复缓慢的剖析结果：`removeChild` 现在尾部搜索 + 单次同步，对重度用户收益明显。

6. **[#14277](https://github.com/can1357/oh-my-pi/pull/14277) — snapcompact 按帧面积动态设定负载上限**
   Codex 小帧模型从保留 17 帧提升到 26 帧，上下文压缩更精确。

7. **[#14179](https://github.com/can1357/oh-my-pi/pull/14179) — RPC 新增 `abort_and_restore_queue` 命令**
   复刻 TUI Esc 行为，原子化清空队列并中止，消除排队 steer 泄漏为新回合的竞态。

8. **[#14110](https://github.com/can1357/oh-my-pi/pull/14110) — RPC 模式支持 `/btw` 侧问**
   侧问可作为主回合流式进行中的临时回合，RPC 宿主功能对齐 TUI。

9. **[#13874](https://github.com/can1357/oh-my-pi/pull/13874) — 在 `/models` 中管理自定义 provider**
   在 TUI 内创建、命名、配置 OpenAI 兼容 provider（如 llama.cpp），摆脱启动前设环境变量的流程。

10. **[#14206](https://github.com/can1357/oh-my-pi/pull/14206) — 新增 LithosAI provider**
    接入 `api.lithosai.cloud` 托管的开放权重模型（Kimi K3、DeepSeek V4.1 Flash、GLM-5.3），社区对新推理渠道的响应速度很快。

---

## 📈 功能需求趋势

- **架构分层与远程化**：会话/UI 进程分离（#14166）、RPC 能力补齐（#14110、#14179、#14153）、collab 体验修复（#14281/#14282）——"headless + 多客户端"是当前最明确的主线。
- **ACP / IDE 集成**：Registry 收录（#1122）、Zed 中审批无 diff（#14211）。
- **多模型编排健壮性**：模型切换状态残留（#14200）、steering 模型提及（#14093）、DeepSeek DSML 兼容（#14272，连续两个版本修复）。
- **Provider 生态扩展**：LithosAI（#14206）、OpenAI Codex reasoning summary 配置化（#8006）、Anthropic mid-turn 工具变更规范遵循（#14167）。
- **TUI 打磨**：性能（#13767）、信息密度（#11840、#13269）、自定义 provider 管理（#13874）。
- **配置与凭据安全**：批量清除 provider 凭据（#14209）、skill 可见性控制（#14049）。

---

## ⚠️ 开发者关注点

1. **DeepSeek 类模型兼容性是持续雷区**：DSML healer 近期扩大范围后引入正文丢失回归（#14272），叠加 v18.6.0 与 PR #14273，提示使用 DeepSeek 的用户尽快升级。
2. **Windows 原生体验仍有硬伤**：鼠标 SGR 注入（#14217）、IDA 工具崩溃（#13619，已修）——Windows 用户建议关注 patch release。
3. **动态模型切换路径缺乏充分清理**：#14200（工具描述残留）等多份报告指向同一模式，重度多模型用户可能遇到诡异失败，重启可临时规避。
4. **长会话性能**：transcript 操作的 O(n) 扫描已被定位（#13767），长会话用户可关注该 PR 合入。
5. **grep/read 工具语义不一致**（#14091/#14092）：自动化 agent 工作流中依赖 `:raw` 或多 artifact 作用域的用户需注意绕过。

---

*数据来源：GitHub can1357/oh-my-pi（过去 24 小时，Issues 77 条更新 / PRs 255 条更新）*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报
**日期：2026-10-04**

---

## 1. 今日速览

今日 DeepSeek Harness 发布了新预发布版本 **dsh-v0.2.1-alpha.1**，最大亮点是引入了实验性的 **Claude Code Mods 兼容层**，迈出生态兼容探索的第一步。此外，插件管理页新增「让 Agent 创建插件」入口，进一步降低插件开发门槛。过去 24 小时内无新 Issue 与 PR 更新，社区互动相对平静。

---

## 2. 版本发布

### 🚀 dsh-v0.2.1-alpha.1

**✨ 新增功能：**

- **实验性 Claude Code Mods 兼容层**（@tianyicui）
  - 当前阶段目标是验证 Claude Code Mods API 功能大致为 DeepSeek Harness 插件的子集
  - 官方明确说明：此版本**并非提供完整兼容性**，主要面向技术验证
- **插件管理页新增「让 Agent 创建插件」入口**
  - 支持保留草稿进入创造模式
  - 发送需求后才正式开始执行，避免误触发

📎 [Release: dsh-v0.2.1-alpha.1](https://github.com/deepseek-ai/deepseek-harness/releases)

---

## 3. 社区热点 Issues

过去 24 小时内无 Issue 更新，本节今日省略。

---

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本节今日省略。

---

## 5. 功能需求趋势

今日无新 Issue 数据可供分析。但从本次 Release 可窥见近期方向：

- **生态兼容**：Claude Code Mods 兼容层表明团队正在探索与主流 Agent 框架的互操作性
- **Agent 驱动开发**：「让 Agent 创建插件」功能延续了用 Agent 降低开发门槛的产品思路

---

## 6. 开发者关注点

- **兼容性预期管理**：官方明确强调兼容层尚处验证阶段，开发者短期内不应依赖其实现生产级 Claude Code Mods 迁移
- **插件生态活跃度**：插件创建流程的持续简化，预示插件生态将是下一阶段的重点投入方向

---

*数据来源：GitHub deepseek-ai/deepseek-harness · 本报告由自动化流程生成*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*