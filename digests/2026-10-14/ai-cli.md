# AI CLI 工具社区动态日报 2026-10-14

> 生成时间: 2026-10-14 04:02 UTC | 覆盖工具: 11 个

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
**数据日期：2026-10-14**

---

## 1. 生态全景

AI CLI 工具已从单一编码助手演进为多 Agent 编排平台，各家竞争焦点转向**多代理架构、会话持久化与故障恢复**等基础设施能力。上下文压缩与 token 成本优化（缓存 TTL、压缩时机、用量统计）成为跨工具的最强共振议题，反映用户正把 CLI 用于长会话、重负载生产场景。安全治理（沙箱、脱敏、分类器误报、MCP 漏洞）从边缘诉求上升为核心关切，企业合规用户的话语权明显增强。同时，Windows 平台质量欠账、自托管推理后端（vLLM/SGLang）兼容性是普遍短板。发布节奏两极分化：Codex 单日 4 个 alpha、Gemini/Qwen 密集 preview，而 Claude Code 稳定小步迭代。

---

## 2. 各工具活跃度对比

| 工具 | 版本发布 | Issue 活动 | PR 活动 | 整体活跃度 |
|---|---|---|---|---|
| **oh-my-pi** | v18.10.4（1 个） | 66 条更新 | **260 条更新** | 🔥🔥🔥 极高 |
| **OpenCode** | 无 | 10+ 热点（多问题当日闭环） | 10+ 重要 PR，含当日安全修复 | 🔥🔥🔥 极高 |
| **Codex (OpenAI)** | **4 个 alpha**（0.163.0-a8~a11） | 10 热点，头部 55 评论 | 10+ PR（基建主线） | 🔥🔥🔥 极高（发布最激进） |
| **Qwen Code** | v0.25.2-preview.0 + nightly | #12380 达 58 评论 | 10+ PR（架构级） | 🔥🔥 高 |
| **Pi** | 无 | 86 条 / 15 条 PR | 多个 P0 当日修复合并 | 🔥🔥 高 |
| **Claude Code** | v2.1.299（1 个） | 头部 Issue 23-49 评论，31 👍 | 仅 2 条（闭源仓库，正常） | 🔥🔥 高（讨论型） |
| **Gemini CLI** | **3 个版本**（稳定+preview+nightly） | 10 热点，2 个 P1 | 社区贡献 PR 密集合入 | 🔥🔥 高 |
| **DeepSeek TUI** | 无（0.10.2 候选中） | 10 热点 | 10+ PR，单人合入 6+ | 🔥🔥 高 |
| **Copilot CLI** | v1.0.97 + v1.0.98-1（2 个） | 34 条更新 | 无 PR 更新 | 🔥 中 |
| **Kimi Code / DeepSeek Harness** | 无 | 无活动 | 无活动 | — 静默 |

**要点**：oh-my-pi 的 PR 吞吐量断层领先；Codex 发布节奏最激进但 Issue 修复滞后（40+ 天老 bug 未解）；Claude Code 呈“高讨论、低代码”的闭源生态特征。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **上下文压缩可控性** | Claude Code（#98747 静默压缩丢上下文，31👍）、Codex（#49961 提前压缩）、OpenCode（溢出恢复 #55286）、Gemini CLI（token 效率 #19561，36.6k/轮）、Pi（#9075 压缩撞输出上限）、oh-my-pi（#15404 2GiB 会话死循环） | 压缩需透明、可关闭、可观测；全行业第一信任痛点 |
| **Prompt 缓存成本** | Pi（#10886 effort 切换缓存友好）、OpenCode（#51109 缓存 TTL 可配置）、DeepSeek TUI（#6969 缓存计价经济性分析）、Codex（#83756 类似问题） | 任何配置/工具集变动打穿缓存 = 真金白银，重度用户已开始做精细化成本建模 |
| **多 Agent 编排** | Claude Code（#28300 A2A 协议，49 评论）、Codex（跨会话通信提案 #16447）、Qwen Code（Managed Agent 主线，#12380 达 58 评论）、Gemini CLI（子代理体系）、oh-my-pi（worktree 隔离） | 从“能用”转向“可控可观测”：持久所有权、故障恢复、跨会话通信 |
| **会话恢复健壮性** | Codex（#50800 恢复后工具丢失）、Pi（#10785 已修）、Gemini CLI（恢复重复工具响应，已修）、DeepSeek TUI（8MiB 无法 resume）、OpenCode（ACP 残留 session） | resume 场景的状态一致性是普遍缺陷，几家已当日修复 |
| **Windows 平台质量** | Claude Code（鼠标追踪 #91142）、Codex（近半热点带 windows-os 标签）、DeepSeek TUI（中文输入法 #2323 开放 5 个月）、Pi（#7547 调研 83 评论）、Gemini CLI（CRLF/PowerShell） | 全行业最大欠账，Pi 已开始系统性调研 |
| **MCP 生态健壮性** | OpenCode（跨域重定向漏洞 GHSA，当日修复）、Claude Code（OAuth discovery 失败）、Copilot CLI（OAuth 失控弹窗）、Qwen Code（ACP 下工具不可见） | 安全 + 兼容性双重挑战，OpenCode 响应速度标杆 |
| **自托管/第三方 Provider 兼容** | Qwen Code（vLLM/SGLang 全 400）、Copilot CLI（BYOK 强制 temperature=0）、Codex（#52834 协议严格校验崩溃）、Pi（OpenRouter 畸形 tool call 卡死） | BYOK 用户群体显著增长，但被各家一致忽视 |
| **安全治理** | Claude Code（env 泄漏 #80153、[cyber] 分类器误报）、Gemini CLI（重定向降级 ASK_USER 已合入）、Codex（内容溯源 PR #53831） | 从沙箱防御到分类器可重置，企业合规驱动 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 上下文智能管理、企业安全、多 Agent 协作标准 | 专业开发者 + 企业（付费能力强） | 闭源核心 + Issue 驱动，功能最完整但透明度受质疑 |
| **Codex** | 桌面端/浏览器工具、守护进程、内容溯源审计 | OpenAI 全家桶用户、桌面工作流 | Rust 重写 + 激进 alpha 通道，基建投入大但回归频发 |
| **Gemini CLI** | 子代理体系、AST 感知代码理解、沙箱 | 开发者 + 社区贡献者 | 开源、社区 PR 活跃，安全收口（YOLO 模式降级）意识强 |
| **Copilot CLI** | GitHub 生态集成、企业治理、ACP/SDK | GitHub 企业客户 | 企业级权限体系 + BYOK 补课 |
| **Qwen Code** | Managed Agent 多代理架构、自托管后端 | 国内生态 + 自建推理用户 | 重量级架构（32 表 MySQL 基线、Harness/daemon），最“平台化” |
| **OpenCode** | 配置体系、桌面 GUI 插件、网关兼容 | 重度定制用户、开源社区 | 开放架构 + 社区共建，安全响应最快 |
| **Pi / oh-my-pi** | 多模型适配、缓存效率、TUI 渲染性能 | 高阶个人用户、模型极客 | 轻量多 provider，工程打磨极致（性能 PR 密集） |
| **DeepSeek TUI** | Rust 工程化、发布工程、Runtime API/IDE 集成 | 源码构建用户、Windows 用户 | Shapes 架构瘦身重构，最“编译器化”的严谨度 |

---

## 5. 社区热度与成熟度

- **最活跃**：oh-my-pi（66 Issues / 260 PRs）、OpenCode、Codex——社区贡献闭环速度是前两者的核心竞争力，多个问题“当天提报、当天修复”
- **快速迭代期**：Codex（日发 4 alpha）、Qwen Code（Managed Agent 架构冲刺期，尚有 CI 红灯、CVE 审计失败等主干健康问题）、DeepSeek TUI（0.10.2 发布工程攻坚）、Pi（1.2.0 回归集中暴露，处于补丁窗口）
- **成熟稳定期**：Claude Code（功能最全但信任问题发酵）、Copilot CLI（版本稳定迭代，但 PR 静默、社区参与感弱）
- **停滞/静默**：Kimi Code、DeepSeek Harness 无任何活动，生态位存疑
- **成熟度信号**：Gemini CLI 出现 P1 标签分级和 EPIC 级规划；oh-my-pi 的性能优化与回归测试密度表明已进入精雕期；Qwen Code 的大 PR 评审负担（#13902 衍生 deferred review）暴露规模化协作摩擦

---

## 6. 值得关注的趋势信号

1. **“压缩信任危机”是 2026 Q4 的标志性议题**：Claude Code #98747（31👍）与 Codex #49961 同期爆发，用户对“模型否认此前工作”零容忍。启示：任何自动压缩/上下文裁剪必须可观测、可关闭、可回滚——这是选型时的硬指标。

2. **缓存经济学成为高级用户核心技能**：Pi 的 effort 切换缓存保持、DeepSeek TUI 的驱逐经济性分析表明，工具行为的微小变化（工具集、thinking 等级、模型切换）都会打穿缓存。选型时应评估工具的“缓存稳定性设计”。

3. **多 Agent 从功能变为架构**：Qwen Code 的 Harness/journal/批次恢复、Codex 的 turn 生命周期压缩、Claude Code 的 A2A 呼声，说明行业正为“Agent 会崩溃、需接管”的现实做基础设施准备。Managed 模式目前均不适合关键生产负载（Qwen 自身 Issue 已承认）。

4. **安全责任左移到 CLI 层**：一周内出现 MCP SDK 漏洞（OpenCode 当日修复）、env 变量泄漏链路（Claude Code）、分类器误报污染会话。企业采购应审查：密钥脱敏、破坏性命令防护、分类器可重置性。

5. **BYOK/自托管是被低估的蓝海与雷区**：Copilot、Qwen、Codex、Pi 均在此翻车。如果你的团队使用自建端点，OpenCode 和 Pi 目前是兼容性最友好的选择。

6. **Windows 是全行业测试盲区**：8 款活跃工具中 6 款有集中 Windows 投诉。Windows 团队选型建议优先考虑有专项投入的工具（Pi 的官方调研、DeepSeek TUI 的 CI 守卫）。

7. **运营健康度参考**：Codex 40+ 天高评论 bug 未修 vs. OpenCode/oh-my-pi 当日闭环——在功能趋同的当下，**响应速度正在成为社区迁移的决定性因素**。

---

*本报告基于 2026-10-14 前后 24 小时 GitHub 公开动态生成，仅供技术选型参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（截至 2026-10-14）

## 一、热门 Skills 排行（按活跃度）

| # | Skill / PR | 功能 | 热点 | 状态 |
|---|---|---|---|---|
| 1 | **mcp-builder 修复** — [PR #1742](https://github.com/anthropics/skills/pull/1742) | 适配 mcp>=2 的 `streamable_http_client` 重命名与自定义 HTTP 头 | 修复长期存在的连接兼容性破坏（关联 #1668），是工具链类最活跃修复 | OPEN |
| 2 | **skill-creator 触发评估隔离** — [PR #1298](https://github.com/anthropics/skills/pull/1298) | 隔离 trigger evals，修复 Windows 兼容与运行时失败 | 对应多个高热度 Issue（#1383、#1352）：评估结果不可靠是 skill-creator 最大痛点 | OPEN |
| 3 | **skill-creator eval viewer 安全加固** — [PR #1961](https://github.com/anthropics/skills/pull/1961) | 修复 script breakout、DNS rebinding、跨站 POST、转义缺陷 | 与 XSS Issue #1394 呼应，安全审计驱动 | OPEN |
| 4 | **md2video-audio** — [PR #1703](https://github.com/anthropics/skills/pull/1703) | Markdown → Marp 幻灯片 → MP4 视频 + 类人配音，零成本 | 内容生成类中最有新意，覆盖“文档即视频”工作流 | OPEN |
| 5 | **notion-spec-to-implementation** — [PR #1245](https://github.com/anthropics/skills/pull/1245) | 将产品/技术 Spec 转为可执行的 Notion 任务+验收标准 | 切中“需求→任务→实现”自动化闭环需求 | OPEN |
| 6 | **document-typography** — [PR #514](https://github.com/anthropics/skills/pull/514) | 控制孤行、孤字换行、编号错位等排版问题 | 提出“AI 生成文档普遍存在排版缺陷”这一洞察 | OPEN |
| 7 | **AWT（AI Watch Tester）** — [PR #822](https://github.com/anthropics/skills/pull/822) | 零代码 AI 视觉 E2E 测试（Claude 看浏览器自动跑测试） | 测试自动化方向代表性贡献 | OPEN |
| 8 | **ODT skill** — [PR #486](https://github.com/anthropics/skills/pull/486) | OpenDocument 创建/填充/转 HTML | 补齐开源文档格式空白，长期未合并 | OPEN |

## 二、社区需求趋势（Issues 提炼）

1. **分发与信任机制**（最高热度）：[#492](https://github.com/anthropics/skills/issues/492)（46 条评论）指出社区 Skill 冒充 `anthropic/` 命名空间构成信任边界滥用——用户强烈要求官方签名/命名空间隔离。
2. **组织级共享**：[#228](https://github.com/anthropics/skills/issues/228) 要求 Claude.ai 支持组织内 Skill 库与直接分享链接，替代手动传文件。
3. **评估与质量工具可靠性**：#556、#1352、#1383、#1390 集中反映 skill-creator / mcp-builder 的 eval 脚本产生系统性假阴性——社区需要可信的 Skill 触发率评估。
4. **上下文经济性**：#1487 报告 claude-api skill 单次注入 ~156k token 耗尽窗口；#189 报告插件重复安装浪费上下文——按需加载是刚需。
5. **新方向提案**：compact-memory 紧凑记忆符号（#1329）、agent-governance 治理模式（#412）、推理质量门禁流水线（#1385）——从“工具技能”走向“认知与治理技能”。

## 三、高潜力待合并 Skills

- **[PR #1742](https://github.com/anthropics/skills/pull/1742)** mcp-builder 兼容修复 — 解决升级 mcp>=2 后连接全断的阻塞性 bug，落地优先级最高。
- **[PR #1298](https://github.com/anthropics/skills/pull/1298)** skill-creator 触发评估修复 — 直接回应三个高热度 Issue，修复后可恢复社区对评估工具的信任。
- **[PR #1961](https://github.com/anthropics/skills/pull/1961)** eval viewer 安全加固 — 与 Issue #1394 配套，安全类修复通常快速合并。
- **[PR #1997](https://github.com/anthropics/skills/pull/1997)** YAML frontmatter 解析修复 — 影响元数据准确性，小而关键。
- **[PR #1792](https://github.com/anthropics/skills/pull/1792)** docx 修订超时错误报告 — 防止 LibreOffice 超时被误报为成功，提升文档 Skill 可靠性。

## 四、生态洞察（一句话）

**社区最集中的诉求是“可信的分发机制 + 可靠的评估工具链 + 按需加载的上下文经济性”**——即从“能写 Skill”转向“能安全共享、可验证质量、不浪费上下文地使用 Skill”。

---

# Claude Code 社区动态日报 · 2026-10-14

## 1. 今日速览

Claude Code 发布 **v2.1.299**，新增 `CLAUDE_CODE_DISABLE_FILE_MENTIONS` 环境变量和终端空闲压缩（idle compaction）功能。但空闲压缩正是近期最热争议点：高赞 Issue #98747（31 👍）报告其静默丢弃长会话上下文且无法关闭，今日已被关闭，官方或已在 v2.1.299 中响应。此外，今日新增多个 `[cyber]` 安全分类器误拦截报告，成为当日新出现的集中性反馈。

## 2. 版本发布

### v2.1.299
- **新增 `CLAUDE_CODE_DISABLE_FILE_MENTIONS` 环境变量**：`@` 文件提及只向 Claude 提供路径，由其用文件工具自行读取，而非直接注入文件内容（有助于控制上下文体积与敏感信息）
- **终端空闲压缩**：约 200K+ token 的对话空闲约 54 分钟后，会在提示缓存过期前自动压缩——正对应 Issue #98747 反复请求的缓存成本问题，但关闭/告警能力仍待确认

🔗 [anthropics/claude-code Releases](https://github.com/anthropics/claude-code/releases)

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关注度 | 看点 |
|---|-------|--------|------|
| 1 | [#28300](https://github.com/anthropics/claude-code/issues/28300) 跨机器多 Agent 协作协议（A2A） | 49 评论 | 长期热帖，社区持续呼吁 Agent-to-Agent 通信标准，反映多 Agent 编排是最高频架构需求 |
| 2 | [#38536](https://github.com/anthropics/claude-code/issues/38536) 团队共享记忆 | 29 评论 / 10 👍 | 当前记忆系统仅限个人，团队知识交接、评审上下文无法迁移，企业用户痛点明显 |
| 3 | [#98747](https://github.com/anthropics/claude-code/issues/98747) 空闲压缩静默丢弃工作上下文 | 23 评论 / 31 👍 | **今日已关闭**——v2.1.286 起空闲会话被自动压缩、无退出选项且日志误标为 "manual"，是近期最热 bug，v2.1.299 的 idle compaction 或为官方回应 |
| 4 | [#80153](https://github.com/anthropics/claude-code/issues/80153) Bash 输出中敏感环境变量脱敏 | 5 评论 | 一条裸 `env` 命令即可将线上密钥写入持久化的会话转录，安全影响严重 |
| 5 | [#91142](https://github.com/anthropics/claude-code/issues/91142) attach 后台会话未启用鼠标追踪 | 6 评论 / 7 👍 | Windows 下字节级证据的 TUI bug，滚轮变方向键，附带复现矩阵，质量极高的报告 |
| 6 | [#96792](https://github.com/anthropics/claude-code/issues/96792) MCP OAuth discovery 失败 | 4 评论 | Windows/VS Code 下 `.well-known` 探测返回 InvalidHTTPResponse，影响多个 MCP 服务器 |
| 7 | [#101241](https://github.com/anthropics/claude-code/issues/101241) Agent 在“免确认重启”授权下执行 `docker rm` 销毁唯一日志 | 2 评论 | 权限粒度与破坏性操作防护的典型案例，标签含 data-loss |
| 8 | [#83756](https://github.com/anthropics/claude-code/issues/83756) 大型 MCP ToolSearch 批次使整个会话缓存失效 | 2 评论 | 与文档承诺的 tool-search 缓存保证相矛盾，直接影响 API 成本 |
| 9 | [#101945](https://github.com/anthropics/claude-code/issues/101945) / [#101925](https://github.com/anthropics/claude-code/issues/101925) `[cyber]` 安全分类器误拦截 | 今日新增多起 | 一次标记后会话内所有消息（包括 "hi"）持续被拦截，切换模型无效；另见 [#101932](https://github.com/anthropics/claude-code/issues/101932) 防御性 seccomp/Landlock 沙箱研究被误判 |
| 10 | [#71369](https://github.com/anthropics/claude-code/issues/71369) 终端标签标题反映 Agent 状态 | 7 评论 | tmux/多终端用户希望标题栏显示未读/运行状态，长时任务的可用性改进 |

其他值得关注：#98922（Cowork 定时任务未挂载文件夹）、#101950（压缩后 Claude 否认此前工作存在）、#101946（Ubuntu 26.04 沙箱 seccomp 失败）。

## 4. 重要 PR 进展

过去 24 小时仅 2 条 PR 更新，且均已关闭，无新合并的代码变更：

- [#44393](https://github.com/anthropics/claude-code/pull/44393) **修复 backfill 脚本忽略 `DAYS_BACK` 环境变量**：工作流传入的天数回溯参数此前被忽略，此修复按创建日期过滤 issue 并提前终止分页（仓库内部工具链改进）
- [#1](https://github.com/anthropics/claude-code/pull/1) 创建 SECURITY.md（历史 PR，仅记录性更新）

> Claude Code 主仓库以 issue 跟踪为主，核心代码为闭源发布，PR 活动稀疏属正常现象。

## 5. 功能需求趋势

从近期 Issues 提炼的热门方向：

1. **多 Agent 协作与编排**（#28300 等）：跨机器 A2A 协议是呼声最高的长期需求
2. **团队级知识共享**（#38536）：共享记忆、上下文在团队成员间流转
3. **上下文/压缩可控性**（#98747、#101950、#83756）：压缩的透明度、可关闭性及缓存成本优化集中爆发
4. **安全与隐私**（#80153、#95680、#101945）：环境变量脱敏、密钥全盘扩散与清除、安全分类器误报——今日最活跃的新兴主题
5. **TUI/终端体验**（#71369、#91142、#101910）：标签状态提示、鼠标支持、将笨重的插件/MCP 编辑器迁移到 Web GUI
6. **MCP 生态健壮性**（#96792、#99014、#101952、#101953）：OAuth 认证、Windows 连接超时、权限上限文档化
7. **权限模型精细化**（#101241、#90942）：破坏性命令防护、Co-Authored-By 归因可配置

## 6. 开发者关注点

- **上下文丢失焦虑**：空闲压缩与上下文压缩引发的“Claude 否认之前工作”（#101950）表明，自动压缩的边界与可观测性是当前最大信任痛点
- **安全分类器误伤面扩大**：`[cyber]` 拦截一旦触发即污染整个会话（#101945），且波及正当的沙箱安全研究（#101932），开发者期待分类器状态可重置
- **密钥泄漏链路缺乏治理**：从 Bash 输出到磁盘存储的多个环节均无脱敏/清除手段（#80153、#95680），企业合规用户高度关注
- **Windows 平台质量差距**：MCP 超时（#99014）、鼠标追踪（#91142）、VS Code 更新后不可用（#101922）等均集中在 Windows
- **可观测性与计费准确性**：headless 模式下模型归属、fallback 记录（#101943）及 stream-json 重试后的用量统计错误（#101951）影响自动化管线的可靠性

---
*数据来源：github.com/anthropics/claude-code · 统计窗口 2026-10-14 前后 24 小时*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-10-14

## 📌 今日速览

Codex CLI 密集发布 4 个 alpha 版本（0.163.0-alpha.8 至 .11），迭代节奏明显加快。社区方面，Windows 桌面端问题持续发酵——浏览器工具初始化失败（HRESULT 0x80070003）和浏览器进程崩溃成为新热点，而存在 40 余天的“本地项目从侧边栏消失”老问题（55 条评论）仍未修复。PR 侧，后台压缩（compaction）接入 turn 生命周期、Windows WinGet 守护进程安装等基础能力建设是主线。

---

## 🚀 版本发布

过去 24 小时发布 4 个 alpha 版本，处于快速迭代通道：

| 版本 | 链接 |
|---|---|
| rust-v0.163.0-alpha.11 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.11) |
| rust-v0.163.0-alpha.10 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10) |
| rust-v0.163.0-alpha.9 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.9) |
| rust-v0.163.0-alpha.8 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.8) |

Release Notes 均未附带详细变更说明，但从合并的 PR 推断主要涵盖守护进程安装/更新、遥测与压缩优化。

---

## 🔥 社区热点 Issues

1. **[#42739](https://github.com/openai/codex/issues/42739) Windows 更新后本地项目从侧边栏消失** — 55 条评论，持续 40+ 天未修复。项目数据在磁盘上仍存在但 UI 不显示，属数据感知层面的严重回归，是当前评论区最活跃的 Issue。

2. **[#53188](https://github.com/openai/codex/issues/53188) Windows 浏览器工具初始化失败（MXC launcher HRESULT 0x80070003）** — 3 天内积累 25 条评论，影响 browser/computer-use 功能，Windows 11 新版本桌面端高发，扩散速度快。

3. **[#26951](https://github.com/openai/codex/issues/26951) IDE 扩展在 VS Code Remote-SSH 下卡在加载状态** — 18 条评论、4 个月未解。CLI 正常而扩展不可用，长期困扰远程开发用户。

4. **[#49862](https://github.com/openai/codex/issues/49862) Windows 上 dot 缺乏读取/接续本地会话的原生工具** — 16 条评论，反映 dots 生态与本地会话互通能力缺失。

5. **[#48490](https://github.com/openai/codex/issues/48490) 跨设备会话同步过期，旧客户端隐藏移动端新消息** — 14 条评论，iPhone 与 Windows/web 之间的 revision 不一致可能导致用户误判会话状态。

6. **[#24648](https://github.com/openai/codex/issues/24648) thread/list 将省略的 modelProviders 当作过滤器** — 13 条评论、5 个月未解。第三方 app-server 集成方无法列出全部线程，API 语义设计缺陷（与 [#48358](https://github.com/openai/codex/issues/48358) 重复报告）。

7. **[#50800](https://github.com/openai/codex/issues/50800) macOS dots 会话恢复后本地线程工具消失** — 13 条评论，会话恢复后的工具状态未正确还原。

8. **[#49961](https://github.com/openai/codex/issues/49961) GPT-6.1 Sol / Astra 频繁提前压缩：内部 token 计数超出上报用量** — 6 👍、9 条评论。用量统计与压缩触发不一致，直接影响长上下文可用性和速率限制感知。

9. **[#53010](https://github.com/openai/codex/issues/53010) Windows 桌面 26.1007 浏览器进程反复崩溃** — Crashpad 日志确认的稳定性问题，与 #53188 共同指向浏览器工具链质量风险。

10. **[#52834](https://github.com/openai/codex/issues/52834) `<image_resize_notice>` 插入工具输出之间，卡死严格 OpenAI 兼容供应商线程** — 对自建 relay / 第三方供应商用户是阻断性问题，暴露协议兼容性细节问题。

---

## 🔧 重要 PR 进展

1. **[#53800](https://github.com/openai/codex/pull/53800) 后台压缩接入 turn 生命周期** — 在 pre/mid/post-turn 检查点异步触发压缩并采纳就绪结果，直接回应 #49961 反映的压缩体验问题。

2. **[#53831](https://github.com/openai/codex/pull/53831) 内容溯源追踪贯穿 prompt 组装与压缩** — 来源标注需在历史截断后仍可存活，为审计与安全打下基础。

3. **[#53811](https://github.com/openai/codex/pull/53811) 支持从 Windows WinGet 包安装守护进程** — 修复 WinGet 包目录布局与 daemon 期望不匹配的问题，补齐 Windows 分发链路（配套 [#53827](https://github.com/openai/codex/pull/53827) 安全清理旧 release、[#53853](https://github.com/openai/codex/pull/53853) 摘要复用）。

4. **[#53845](https://github.com/openai/codex/pull/53845) 修复 Unix daemon 更新器 socket 绑定与 bootstrap 就绪问题** — 解决 Unix socket 路径超限及就绪误报，提升更新可靠性。

5. **[#53805](https://github.com/openai/codex/pull/53805) workspace 路由错误增加安全诊断信息** — 对应 #52996 的 HTTP 432 问题，在避免泄露密钥的前提下暴露失败原因。

6. **[#53816](https://github.com/openai/codex/pull/53816) 交互式 CLI 恢复时拒绝 Guardian review 线程** — 防止误恢复内部 review 会话，改善 resume 的健壮性（配套 [#53797](https://github.com/openai/codex/pull/53797) review 上下文变化时自动刷新评估）。

7. **[#53754](https://github.com/openai/codex/pull/53754) TUI 键位映射支持 Command/Super 修饰键** — macOS 用户快捷键体验补全（配套 [#53753](https://github.com/openai/codex/pull/53753) composer 选中即复制）。

8. **[#53763](https://github.com/openai/codex/pull/53763) V2 能力发现返回解析后的插件与 skill 元数据** — 返回 `team:deploy` 式限定名及结构化 dependencies/policy，利好第三方集成。

9. **[#53794](https://github.com/openai/codex/pull/53794) worker 取消时保留 rollout 迁移锁** — 修复取消后压缩 worker 仍在运行导致的并发数据风险，属数据安全修复。

10. **[#53859](https://github.com/openai/codex/pull/53859) TUI 遥测记录分桶终端尺寸** — 为终端尺寸分布决策提供数据；另见 [#53804](https://github.com/openai/codex/pull/53804) 归档/删除时保持 Agent 指挥中心可见的 UX 修复。

---

## 📈 功能需求趋势

- **Windows 平台质量**：30 条热点 Issue 中近半带 `windows-os` 标签，浏览器工具、WSL、窗口管理、崩溃问题集中爆发，是当前最大欠账。
- **会话/任务恢复健壮性**：dots 任务恢复后工具丢失（#50800）、thread owner 变更后失败（#49892）、跨设备同步过期（#48490）——"resume" 场景可靠性需求强烈。
- **多窗口/多会话并行**：平铺分屏多会话（#42291，4 👍）、跨会话委托授权（#53858）、本地 UDS 跨会话通信提案（#16447，9 👍）反映用户正在把 Codex 当多智能体协调平台使用。
- **第三方/自定义供应商兼容**：modelProviders 过滤语义（#24648）、协议严格校验下的崩溃（#52834）、上游容量错误（#53862）——自建端点的用户群体在增长。
- **长上下文与用量透明**：压缩时机、token 计数准确性（#49961）持续受关注。

---

## ⚠️ 开发者关注点

1. **Windows 桌面端稳定性是最大痛点**：更新导致项目消失、浏览器工具崩溃、WSL 下无法 spawn 进程、150% 缩放窗口溢出（#53027）等问题叠加，且不少 Issue 数周无修复迹象。
2. **远程开发体验（Remote-SSH / WSL）长期不可用**：#26951 已存在 4 个月，今日新增 #53840（VS Code 1.141.1 后 WebView 401），远程场景回归测试明显不足。
3. **API 语义与用量报告需要透明化**：thread/list 的隐式过滤行为、内部 token 计数与上报不一致，都会直接破坏第三方集成与用户的速率限制预期。
4. **积极信号**：官方 PR 正系统性补强守护进程安装/更新链路、后台压缩、错误诊断与数据安全（迁移锁、内容溯源），工程基建在快速成熟；0.163.0 一天 4 个 alpha 也表明发布节奏激进，稳定性验证或成下一个关注点。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-14）

## 📌 今日速览

今日 Gemini CLI 密集发布三个版本（v0.64.0 稳定版、v0.65.0-preview.0 预览版及对应 nightly），修复重点集中在会话恢复、安全策略和 UTF 编码处理上。社区讨论焦点仍然围绕 **子代理（Subagent）可靠性**——多agent 挂起、状态误报等问题持续发酵。同时一批社区贡献的高质量 PR 今日被合入，覆盖安全、稳定性和 IDE 集成多个方向。

---

## 🚀 版本发布

### v0.64.0（稳定版）
- **fix(core)**: a2a-server 实现 V1→V2 设置迁移逻辑
- **fix(acp)**: 桥接 PromptResponse.usage 并发出 usage_update 通知

### v0.65.0-preview.0
- **fix(cli)**: 在不受信任的目录中强制执行只读工作区设置（安全相关，值得注意）
- **fix(core)**: 修复会话恢复时重复工具响应轮次的问题

### v0.65.0-nightly.20261014
- **fix(cli)**: 修复展开 Unicode 字符时反向搜索高亮索引错误
- **fix(core)**: 将仅含空白的 UTF-16/UTF-32 文件视为空文件

---

## 🔥 社区热点 Issues（Top 10）

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** 子代理达到 MAX_TURNS 后误报 success/GOAL，掩盖了实际中断 — **P1**，13 条评论。核心问题：中断状态被误报为成功，直接影响用户对结果的信任，是子代理可观测性方面的关键缺陷。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent 永久挂起 — **P1**，8 👍。简单如创建文件夹的操作也会挂起长达一小时，用户只能通过禁止子代理绕过。挂起类问题中最具用户痛感的一条。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** 利用模型 bash 亲和性的零依赖 OS 沙箱 + 执行后意图路由 — **P2** 大型增强提案。方向性讨论：如何在安全与发挥 Gemini 3 原生 bash 能力之间取得平衡，对架构演进影响深远。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** 评估 AST 感知的文件读取/搜索/代码库映射 — **EPIC**，衍生出 #22746、#22747 两个子调查（推荐 tilth/glyph/ast-grep）。这是提升代码理解精度、降低 token 消耗的潜在路线。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** Gemini 不主动使用 skills 和子代理 — 用户定义的 gradle/git skills 几乎从不被自动触发，反映工具选择/路由策略存在问题。

6. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** browser subagent 在 Wayland 下失败 — **P1**，Linux 用户体验受损，与 #22323 类似同样误报 GOAL 终止。

7. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** Browser Agent 忽略 settings.json 覆盖（如 maxTurns）— AgentRegistry 读取合并了配置但实际未生效，配置链路断裂。

8. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** get-shit-done output hook 导致崩溃 — **P1**，在输出用户摘要时稳定崩溃。

9. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** 超过 128 个工具时触发 400 错误 — 工具作用域管理不足，对重度扩展用户是硬阻断。

10. **[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)** "Tactful Extraction" 节俭 token 的外科式读取 — 当前基线约 36.6k tokens/轮，大文件读取曾致 +15k tokens/轮膨胀，社区对 token 效率关注度持续走高。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#29648](https://github.com/google-gemini/gemini-cli/pull/29648)** [P1/安全] YOLO 和 AUTO_EDIT 模式下含重定向（`>`、heredoc 等）的 shell 命令现在正确降级为 ASK_USER — 重要安全收口。
2. **[#29725](https://github.com/google-gemini/gemini-cli/pull/29725)** [P2] 实现终端同步输出（DECSET 2026）并隔离 spinner 渲染状态，消除 tmux 等复用器中的闪烁 — 大型 UI 稳定性改进。
3. **[#29744](https://github.com/google-gemini/gemini-cli/pull/29744)** 修复 VS Code Reload Window 后 `/ide enable` 无法重连的问题 — IDE 集成体验优化。
4. **[#29553](https://github.com/google-gemini/gemini-cli/pull/29553)** [P2，已合入] 项目月度消费上限 429 从“可重试”改为终态配额错误，避免 TUI 无限重试。
5. **[#29564](https://github.com/google-gemini/gemini-cli/pull/29564)**（已合入）设置迁移时保留 `${VAR}` 环境变量占位符，防止展开值被固化写入。
6. **[#29559](https://github.com/google-gemini/gemini-cli/pull/29559)**（已合入）diff 前归一化 CRLF，修复 Windows 文件整文件被识别为变更的问题。
7. **[#29551](https://github.com/google-gemini/gemini-cli/pull/29551)**（已合入）沙箱中 `core.sshCommand` 覆盖指向 `ssh`，修复 SSH 远程仓库 `unable to fork` 错误。
8. **[#29746](https://github.com/google-gemini/gemini-cli/pull/29746)** 修复 Windows PowerShell 替换检测中引号状态追踪失步导致的误报。
9. **[#29652](https://github.com/google-gemini/gemini-cli/pull/29652)** 修复 GitHub URL 解析：`blog.github.io` 不再被错误剥成 `hub.io`（`.git` 后缀剥离逻辑）。
10. **[#29742](https://github.com/google-gemini/gemini-cli/pull/29742)** [P2] 修复可滚动工具输出容器右边框溢出的渲染故障。

其他值得注意：#29573（容器镜像名带端口解析错误）、#29552（ripgrep 失败上报）、#29735（扩展下载流错误处理）均已于今日合入。

---

## 📈 功能需求趋势

- **子代理体系深化**（最热）：并行协作与共享内存（#18287）、后台化 Ctrl+B（#22741）、轨迹可分享（#22598）、`/bug` 报告包含子代理上下文（#21763）——社区对子代理从“能用”转向“可控可观测”。
- **代码理解智能化**：AST 感知工具（#22745/#22746/#22747）与 token 节俭读取（#19561）代表向精确化代码导航演进的共识。
- **任务管理持久化**：用文件 CRUD 任务追踪替换 in-context WriteToDo（#18836、#21000），对抗上下文腐烂。
- **沙箱与安全**：零依赖 OS 沙箱（#19873）、破坏性命令抑制（#22672）、per-workspace 策略（#18397）。
- **终端渲染性能**：resize 无闪烁（#21924）与 tmux 兼容（PR #29725）持续投入。

---

## ⚠️ 开发者关注点与痛点

1. **子代理可靠性是最大痛点**：挂起（#21409）、状态误报（#22323、#21983）、配置不生效（#22267）三类问题叠加，不少用户选择禁用子代理作为 workaround。
2. **token/上下文成本**：36.6k/轮基线 + 大文件读取膨胀，重度用户对上下文管理精细化诉求强烈。
3. **工具数量上限**：128+ 工具即 400 错误（#24246），扩展生态的天花板问题。
4. **Windows/跨平台细节**：CRLF、PowerShell 引号、Wayland 支持等平台兼容问题占比不低，今日多个修复 PR 即针对此。
5. **配置可信度**：settings.json 覆盖被忽略、symlink 代理不识别（#20079）、迁移丢失占位符——配置链路的“说一套做一套”正在侵蚀信任。

---

*数据来源：github.com/google-gemini/gemini-cli | 统计窗口：2026-10-13 至 2026-10-14*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-14** | 数据来源：github.com/github/copilot-cli

---

## 1. 今日速览

昨日连发多个版本，**v1.0.98-1 新增 Gemini 4 Argon 模型支持**，并修复了 MCP 状态同步、会话恢复等关键问题。社区讨论聚焦于 **BYOK 自定义提供者的采样与模型匹配缺陷**以及 **ACP 模式的若干兼容性问题**。企业用户对系统级安装器和更细粒度权限控制的呼声持续升温。

---

## 2. 版本发布

### v1.0.98-1
- **新增**：支持 Gemini 4 Argon 模型
- **修复**：
  - 分屏会话切换后，MCP 状态与 `/mcp` 命令保持与活跃会话同步
  - 恢复会话时正确处理已废弃的待授权工作，仅继续活跃的授权请求
  - 修复普通字符输入被吞的问题

### v1.0.97（2026-10-13）
- **新增**：为自定义 agents 提供作用域内的声明式 hooks
- **修复**：
  - 远程插件市场及插件拉取在 HTTPS 认证失败后，会使用已登录的 GitHub token 重试一次
  - TLS 拦截代理（省略 close_notify）下的流式响应可正常完成
  - 修复 GitHub SCP 风格 remote 的解析问题（含绝对路径场景，见 #5017）

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关注理由 |
|---|-------|---------|
| 1 | [#5115](https://github.com/github/copilot-cli/issues/5115) ACP 模式下 `/rename` 显示成功但实际未重命名 | ACP 集成生态的核心命令失效，1ms 内返回且无模型调用，5 条评论讨论热烈 |
| 2 | [#4950](https://github.com/github/copilot-cli/issues/4950) BYOK 强制 temperature=0 导致推理模型退化 | 自建推理服务用户的核心痛点，CLI 1.0.81+ 强制采样参数引发静默挂起 |
| 3 | [#4082](https://github.com/github/copilot-cli/issues/4082) CLI 与桌面应用跨端会话同步 | 13 👍，多端工作流的高票需求，长期开放 |
| 4 | [#1724](https://github.com/github/copilot-cli/issues/1724) 展示 Agent 内部 TODO 状态 | 12 👍，对标 opencode 的可观测性需求，今日仍有更新 |
| 5 | [#4358](https://github.com/github/copilot-cli/issues/4358) BYOK 模型选择器从 `/models` 端点动态拉取 | 9 👍，与 #4950 同属 BYOK 体验短板 |
| 6 | [#4931](https://github.com/github/copilot-cli/issues/4931) 云 Agent 内置 Playwright MCP 首次调用即断开 | GHEC 数据驻留租户受阻且无 workaround，企业用户关注 |
| 7 | [#5127](https://github.com/github/copilot-cli/issues/5127) SDK + BYOK 短名模型匹配失败且报误导性 OAuth 错误 | 自定义 Agent 场景直接不可用，错误信息误导排障方向 |
| 8 | [#5126](https://github.com/github/copilot-cli/issues/5126) 内置 agents（explore/task/research）忽略默认模型静默用会话模型 | 模型路由准确性问题，影响成本与性能预期 |
| 9 | [#5134](https://github.com/github/copilot-cli/issues/5134) Windows 上 MCP OAuth 初始化失控反复弹浏览器 | 阻断正常启动的严重回归，新报但影响面大 |
| 10 | [#5130](https://github.com/github/copilot-cli/issues/5130) "Managed account policy" 错误持续刷屏 | 1.0.94 起持续存在，严重影响日常使用体验 |

---

## 4. 重要 PR 进展

过去 24 小时内无更新的 Pull Request。修复工作主要体现在已发布的 v1.0.97/98 系列版本中（SCP remote 解析、TLS 代理流式响应、MCP 同步等修复均对应近期 Issue，如 #5017 已随版本关闭）。

---

## 5. 功能需求趋势

1. **BYOK / 自定义 Provider 成熟化**（#4950、#4358、#5127、#4936）：模型发现、采样参数控制、短名解析、凭证命令配置是当前最密集的需求集群
2. **会话管理增强**（#4082、#5128、#5132、#5115）：重命名、跨端同步、命名显示
3. **可观测性 / UI 控制**（#1724、#5137、#5125）：TODO 状态、思考过程默认展开、执行耗时展示
4. **企业部署与治理**（#5129、#316、#285）：系统级安装器、细粒度写权限、权限体系 Epic
5. **交互体验打磨**（#5131、#5135）：输入时不打断、会话嵌套退出逻辑

---

## 6. 开发者关注点

- **BYOK 是最大痛点来源**：强制采样参数、模型路由失效、误导性错误信息，自建推理用户流失风险高
- **ACP/SDK 集成边界问题多**：`/rename`、`includeCoAuthoredBy` 等在 ACP 模式下与交互模式行为不一致（#5133）
- **回归类 bug 影响信任**：Windows OAuth 失控（#5134）、输入字符丢失（已在 98-1 修复）、持续策略报错（#5130）
- **企业场景诉求明确**：安全策略兼容、集中部署、权限最小化是采购决策的关键因素
- **Agent 竞态问题**：`--agent` 启动后被静默取消（#5124），提示 MCP 重载与登录流程存在时序缺陷

---
*本报告基于过去 24 小时 GitHub 数据自动生成，共追踪 34 条 Issue 更新与 4 个版本发布。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-14

## 📰 今日速览

今日无新版本发布，但社区活动非常活跃：**安全方面**，MCP TypeScript SDK 的跨域重定向漏洞（GHSA-6prh-2h8m-c8cw）被披露并已在同日提交修复 PR（#55292/#55287）。**功能方面**，GUI 插件机制（#55246）与顶层 `policies` 配置稳定化（#55297）成为 V2 演进的焦点。同时，长会话上下文溢出恢复、模型选择器回归等老问题持续引发讨论。

---

## 🐛 社区热点 Issues

1. **[#25630](https://github.com/anomalyco/opencode/issues/25630)** [CLOSED] — 回归：PR #25167 后插件 `provider.models()` 无法填充自定义 provider。影响所有依赖自定义网关的用户，17 条评论、7 👍，是本期讨论最热的 Issue。

2. **[#55271](https://github.com/anomalyco/opencode/issues/55271)** [OPEN] — OpenAI Chat tool-content 校验中止会话 drain 时未指明违规 part，难以排查；今新提交，5 条评论。

3. **[#41206](https://github.com/anomalyco/opencode/issues/41206)** [OPEN] — OpenCode Go 周/月配额与使用历史不一致，涉及计费准确性，用户高度敏感。

4. **[#51109](https://github.com/anomalyco/opencode/issues/51109)** [OPEN] — 请求按 agent/provider/model 粒度配置 prompt-cache TTL。当前固定 Anthropic 5 分钟 TTL 是长会话的最大成本来源，属于高价值优化方向。

5. **[#55166](https://github.com/anomalyco/opencode/issues/55166)** [OPEN] — V2.0.28 锁定的 MCP client 2.0.0 存在跨域重定向携带请求体的安全漏洞（影响 < 2.3.0），当日即有修复 PR 跟进。

6. **[#53053](https://github.com/anomalyco/opencode/issues/53053)** [CLOSED] — 远程 MCP 服务器在 RTT > ~250ms 时无法连接（`autoSelectFamilyAttemptTimeout` 过小），已定位并关闭。

7. **[#54690](https://github.com/anomalyco/opencode/issues/54690)** [CLOSED] — 图片/文件 payload 未计入上下文导致长会话死于泛化 400 而非触发 compact；已由 PR #55286 提出修复。

8. **[#55293](https://github.com/anomalyco/opencode/issues/55293)** [OPEN] [已复现] — ACP（IDE 集成）持续残留空 session 且永不清理，是 #38064 被 stale bot 关闭后的追责帖，确认于 v2.0.26。

9. **[#55289](https://github.com/anomalyco/opencode/issues/55289)** [OPEN] [已复现] — 模型 `name: ""` 在 V1→V2 迁移中因 truthy 检查变为 `??` 导致空白标题且无法搜索，典型回归案例。

10. **[#42501](https://github.com/anomalyco/opencode/issues/42501)** [OPEN] — VS Code 1.105 集成终端中 TUI 滚轮失灵；确认根因在 xterm.js 而非 OpenCode，为用户排障节省大量时间。

---

## 🔧 重要 PR 进展

1. **[#55292](https://github.com/anomalyco/opencode/pull/55292)** / **[#55287](https://github.com/anomalyco/opencode/pull/55287)** [CLOSED] — 将 `@modelcontextprotocol/client` 升级至 2.3.0，修复 GHSA-6prh-2h8m-c8cw 安全公告。**今日安全优先事项**。

2. **[#55246](https://github.com/anomalyco/opencode/pull/55246)** [OPEN] — Desktop GUI 插件机制：插件可通过 `./gui` 导出附带图形界面，桌面端内置功能本身也改为内置插件。架构层面的重大演进。

3. **[#55297](https://github.com/anomalyco/opencode/pull/55297)** [CLOSED] — `policies` 配置从 `experimental` 毕业为顶层键，同时兼容 V1 的 `enabled_providers`/`disabled_providers`。

4. **[#55286](https://github.com/anomalyco/opencode/pull/55286)** [OPEN] — 对未分类的超大请求 400 错误降级为纯文本压缩恢复，解决 #54690/#46564 的会话死锁问题。

5. **[#55267](https://github.com/anomalyco/opencode/pull/55267)** [CLOSED] — 托管配置（`/etc/opencode`、MDM preferences）恢复最高优先级，修正 #54921 引入的优先级倒挂。

6. **[#55299](https://github.com/anomalyco/opencode/pull/55299)** [OPEN] — 展示 Claude 5.5+/Fable 5+ 等模型在工具调用间写入的进度更新，改善流式体验。

7. **[#55295](https://github.com/anomalyco/opencode/pull/55295)** [OPEN] — V2 composer 在 IME 输入法组合期间保持编辑器惰性，修复中日韩输入的经典问题（从 V1 #44826 移植）。

8. **[#55251](https://github.com/anomalyco/opencode/pull/55251)** [CLOSED] — 修复 steer（中途插话）从第一帧起即显示为 pending，消除“蓝色→灰色”闪烁。

9. **[#53366](https://github.com/anomalyco/opencode/pull/53366)** [OPEN] — 当某目录最后一个 session 被删除时停止其 stdio MCP 服务器，修复后台服务无限持有 MCP 进程的资源泄漏。

10. **[#54023](https://github.com/anomalyco/opencode/pull/54023)** [OPEN] — 通过 `credentials.lock` 跨 Location 协调凭证刷新，避免多窗口并发刷新导致的 token 竞争。

其他值得留意：i18n 基础设施落地（[#52000](https://github.com/anomalyco/opencode/pull/52000)）、透明终端背景（[#54517](https://github.com/anomalyco/opencode/pull/54517)）、IndexedDB 草稿连接恢复（[#55277](https://github.com/anomalyco/opencode/pull/55277)）。

---

## 📈 功能需求趋势

- **上下文与成本管理**：prompt-cache TTL 可配置（#51109）、图片/文件 token 计量（#54690）、溢出恢复（#46564）、压缩死循环（#54993）——长会话稳定性是最高频诉求。
- **模型路由与故障转移**：模型 failover（#55008）、Zen 网关 sticky 路由（#35402）、subagent 限制为父模型（#54997）。
- **V1→V2 迁移质量**：session 历史不迁移（#41217）、模型选择器回归（#55288、#55289、#49309）等一批回归问题集中爆发。
- **自定义 provider / 网关支持**：配置层 provider 在 UI 中被误判为“未连接”是反复出现的主题。
- **桌面端体验**：缩放持久化（#54990）、GUI 插件、非英文 locale 崩溃（#55000）。
- **MCP 生态健壮性**：远程连接超时、OAuth 安全、stdio 进程生命周期管理。

---

## ⚠️ 开发者关注点

1. **安全响应**：MCP client 漏洞当日披露、当日提交修复（#55166 → #55292），响应迅速，建议使用远程 MCP + OAuth 的用户尽快跟进升级。
2. **回归测试缺口**：V1→V2 重构引入多处行为差异（truthy→`??`、provider 展示逻辑、session schema），建议重度插件/自定义配置用户在升级前验证关键路径。
3. **网关/代理兼容性**：OpenAI 兼容代理返回的泛化 400 是会话死锁的主要来源，#55286 是值得关注的系统性修复。
4. **国际化**：locale key 缺失可致桌面端崩溃（#55000），TUI i18n 框架（#52000）正在推进，非英文用户近期需注意。
5. **成本透明度**：配额统计与实际用量不符（#41206）、缓存未命中导致重复计费（#35402）反映用户对计费可观测性的强烈需求。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-14

## 一、今日速览

Qwen Code 发布 **v0.25.2-preview.0** 预览版，核心更新集中在 Managed Agent 的 connector/broker 健壮性修复。社区今日焦点依然围绕 **Managed Agent 多代理架构**（#12380 讨论已达 58 条评论）展开，wenshao 持续提交架构级修复。此外，vLLM/SGLang 自建后端的**兼容性问题**（400 错误、上下文溢出识别失败）成为外部开发者的高频痛点。

---

## 二、版本发布

### v0.25.2-preview.0
- **fix(managed-agent)**: 基于 #12692 R2 评审修复 connector 和 broker 健壮性问题（PR #13330，@wenshao）
- feat(managed-agent): H4e-b2 相关功能推进
- 同日发布 nightly 版 `v0.25.1-nightly.20261013.6212189f1f`，包含相同修复

🔗 https://github.com/QwenLM/qwen-code/releases

---

## 三、社区热点 Issues

**1. [#12380] Managed Agent 双路径架构与分阶段交付提案**（58 评论）🔥
社区最活跃的架构讨论，定义了 Session 持久所有权、Workspace 绑定、可恢复工具执行等核心设计，几乎所有的 managed-agent Issue/PR 都以此为路线图。已标记 in-progress、ready-for-agent。
🔗 https://github.com/QwenLM/qwen-code/issues/12380

**2. [#13078] 每日依赖 CVE 审计失败**（20 评论）
CI 安全审计持续失败，可能是新的高危漏洞或 npm audit 端点不可用，需关注是否影响供应链安全。
🔗 https://github.com/QwenLM/qwen-code/issues/13078

**3. [#14116] P1：Harness 崩溃后 wake input 不会被消费**（3 评论）
P1 级缺陷——Session 的唤醒输入（Monitor 通知、channel 消息等）只有在 Session 被 Harness 加载时才会执行，崩溃后需依赖无关事件才能恢复，属于可用性核心问题。
🔗 https://github.com/QwenLM/qwen-code/issues/14116

**4. [#14114] P1：ACP 模式下 MCP 工具永远不被模型发现**
`qwen --acp` 中 session/new 传入的 MCP 服务器已注册但工具从未被通告给模型，deferred-tool reminder 未被 drain，模型完全无法使用这些工具（headless 模式正常）。
🔗 https://github.com/QwenLM/qwen-code/issues/14114

**5. [#14112] vLLM 后端 OpenAI 兼容 provider 全部 400**
无参数工具序列化时缺少 `parameters` 字段 + 不支持 `tool_choice:"required"`，导致 vLLM 类后端（TheHive AI 等）每次请求都失败。自托管用户的硬阻断。
🔗 https://github.com/QwenLM/qwen-code/issues/14112

**6. [#14096 / #14097] vLLM/SGLang 上下文溢出识别失败，反应式压缩不触发**
自建推理服务超出 max_model_len 后 session 卡死无法恢复，`getContextLengthExceededInfo` 不识别这两家的错误措辞。与 #14112 同属“自托管兼容性”痛点群。
🔗 https://github.com/QwenLM/qwen-code/issues/14096 · https://github.com/QwenLM/qwen-code/issues/14097

**7. [#13847] H4b 后续：无 Runtime 工作的批次中 Harness 崩溃会阻塞主 Session**
后台 Agent 启动/team call 批次崩溃后无持久化“批次进行中”标记，替代 Harness 无法恢复，是 Managed Agent 故障恢复链条上的关键一环。
🔗 https://github.com/QwenLM/qwen-code/issues/13847

**8. [#14126] Main CI 失败：SDK Java — ManagedAgentServerIntegrationTest**
MySQL 8.4 / Java 21 宿主进程故障门禁测试失败，主分支 CI 红灯，autofix 已跳过，需人工介入。
🔗 https://github.com/QwenLM/qwen-code/issues/14126

**9. [#14110] 构建失败：packages/cli 使用了 ink@7.0.3 未导出的 API**
`pnpm build` 报 51 个 TS 错误，Windows 构建受影响，从源码构建的用户被阻断。
🔗 https://github.com/QwenLM/qwen-code/issues/14110

**10. [#11272] 取消长时间 stdio MCP 工具调用会杀死 MCP 服务器且不可恢复**
来自钉钉 Channel 生产环境的报告，取消操作导致 MCP 服务器死亡且在 Channel 模式下无法恢复，影响生产可用性。
🔗 https://github.com/QwenLM/qwen-code/issues/11272

---

## 四、重要 PR 进展

**1. [#14056] 修复：崩溃后恢复 Hosted journal-only 工具批次**（autofix/takeover）
在 Hosted 工具批次首次写控制面之前增加持久 journal-only 等待，使替代 Harness 可继续或取消中断的回合。直接对应 Issue #13847。
🔗 https://github.com/QwenLM/qwen-code/pull/14056

**2. [#14069] Managed Agent 持久化收敛为 32 表基线**（已关闭/合并）
将 63 张业务表整合为 32 表 MySQL 8.4 基线，单一版本化 DDL 源。架构瘦身的重要一步。
🔗 https://github.com/QwenLM/qwen-code/pull/14069

**3. [#14130] 修复 ACP 模式下迟到的 MCP 工具通告**
在发送新 user prompt 前 drain 排队的 MCP 工具提醒，修复 P1 Issue #14114。
🔗 https://github.com/QwenLM/qwen-code/pull/14130

**4. [#14073] 新增 QwenCloud 作为 /auth 首选入口**
认证菜单首位新增 QwenCloud，与 ModelStudio 共存不替换，存量凭据不受影响。
🔗 https://github.com/QwenLM/qwen-code/pull/14073

**5. [#13969] 新增 FileChanged hook（本地会话）**
面向集成方的通用文件变更通知，支持监听字面文件名与递归目录，扩展 hooks 生态。
🔗 https://github.com/QwenLM/qwen-code/pull/13969

**6. [#13902] Agent 身份与 Agent Team 协作信息投射到 ACP/daemon 协议**
+3611/−235 的大 PR，子代理框架（thought/message/tool call）携带 `_meta.agent` 标识，客户端可区分多代理协作。社区期待度高（衍生 deferred 评审 Issue #14127）。
🔗 https://github.com/QwenLM/qwen-code/pull/13902

**7. [#14129] 跳过重复注入相同的 UserPromptSubmit hook 上下文**
byte-identical 的 additionalContext 不再每轮重复附加，节省 token，与 Issue #14089 形成记忆去重组合拳。
🔗 https://github.com/QwenLM/qwen-code/pull/14129

**8. [#13219] 为 managed-agent 重试循环添加终态边界**
所有异步重试循环获得预算与终态，消除永久卡死 projection 的可能。健壮性加固的代表性 PR。
🔗 https://github.com/QwenLM/qwen-code/pull/13219

**9. [#14071] Web Shell 展示实时 trajectory 执行**
Trajectory 面板新增可折叠的 Recent executions 区块，实时更新请求与工具执行状态。
🔗 https://github.com/QwenLM/qwen-code/pull/14071

**10. [#14124] 将 OSS 捕获预算接入 Hosted 会话**
新 Hosted 会话的 OSS 捕获预算控制，配合 32 表基线的存储治理。
🔗 https://github.com/QwenLM/qwen-code/pull/14124

---

## 五、功能需求趋势

1. **Managed Agent / 多代理架构**：绝对主线。#12380、#13847、#14116、#14070、#14122 等大量 Issue 集中在 Session 持久化、故障恢复、并发接管、Stage D/F 分阶段交付上，是项目当前最大投入方向。
2. **自托管推理后端兼容性**：vLLM/SGLang 的 400 错误、上下文溢出识别、错误信息不可诊断（#14112/#14115/#14096/#14097），OpenAI-compatible 生态适配需求强烈。
3. **上下文与 token 优化**：工具加载成本评估（#12333）、XML 恢复前缀扫描性能（#13787）、hook 上下文与本地记忆去重（#14089）。
4. **Web Shell / 桌面端 UI 打磨**：上下文用量环形指示器（#14085/#14051）、trajectory 实时执行展示、终端渲染细节。
5. **MCP 生态健壮性**：ACP 模式工具发现、长时调用取消导致服务器死亡、SerpApi 等搜索服务文档补充。
6. **认证与平台分发**：QwenCloud 一等公民入口（#14073）。

---

## 六、开发者关注点

- **可诊断性不足**：后端 400 只显示 "no body"，开发者呼吁在 CLI 错误和 `OPENAI_ERROR` 日志中暴露 errorResponse/headers/x-request-id（#14115）。
- **故障恢复语义复杂**：Harness 崩溃后的 Session 恢复存在多个边界缺陷（wake input 丢失、批次无标记、并发接管 409），表明 managed 模式尚不适合关键生产负载。
- **从源码构建易碎**：ink 版本锁定导致 51 个 TS 错误（#14110），依赖锁定与实际 API 不匹配。
- **CI 稳定性**：主分支 CI 多次红灯（#14126、#12714），CVE 审计持续失败（#13078），需关注供应链与主干健康。
- **大 PR 评审负担**：#13902 等超大 PR 频繁衍生 deferred-review Issue，评审流程（五轮规则）与交付速度的张力显现。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-10-14

## 📌 今日速览

v0.10.2 发布节奏加快：候选 PR #6968 持续汇总合入进展，crates.io 10 MiB 上传预检已在全部 29 个 workspace crate 上通过。社区贡献集中在 CI 测试稳定性修复（Lstarsky0 一人合入 6+ 个 flaky test 修复 PR）与 Windows 平台问题（输入法适配、runtime floor、/undo 严重 bug）。今日无新版本发布。

---

## 🔥 社区热点 Issues

**1. [#6094](https://github.com/codewhale-hq/Codewhale/issues/6094) — v0.10.2 补丁版追踪（官方入口）**
维护者 @Hmbown 每日更新 intake：#6956、#6958 已独立合入，main 当前在 `73e993a295`。想了解下个版本内容和如何贡献的起点。

**2. [#6652](https://github.com/codewhale-hq/Codewhale/issues/6652) — 长时间运行后 TUI 滚动卡顿（Windows 性能问题）**
运行数小时后滚动“果冻化”，部分内容已滚动、部分未滚动。11 条评论持续排查，是最受关注的 TUI 性能 bug 之一。

**3. [#6970](https://github.com/codewhale-hq/Codewhale/issues/6970) — `/undo` 命令严重 bug**
文件变更被回滚但对话内容未撤销，多次重试无效。昨日新报，直接损害核心交互可信度。

**4. [#6963](https://github.com/codewhale-hq/Codewhale/issues/6963) — Windows runtime floor 阻断只读管道命令**
原生安装下 Full Access 模式仍拒绝普通只读命令（`auto_review.rs`），是 #6827 的后续，安全策略过严影响日常使用。

**5. [#2323](https://github.com/codewhale-hq/Codewhale/issues/2323) — 未适配中文输入法（本地化长期痛点）**
拼音输入时占位符提示不隐藏、弹窗中字母误入命令区。自 5 月底开至今仍未解决，中文用户核心痛点。

**6. [#6955](https://github.com/codewhale-hq/Codewhale/issues/6955) — 会话文档超 8 MiB 无法 resume/fork**
journal 无上限增长是根因，错误提示也没有给出补救方案，与 #6842/#6954 共同构成会话持久化的系统性问题。

**7. [#6910](https://github.com/codewhale-hq/Codewhale/issues/6910) — 发布阻塞：crates.io 10 MiB tarball 上限预检**
v0.10.1 曾因 HTTP 413 使 tui/cli 包搁浅。10-13 更新：29 个 crate 的严格 no-upload 预检全部通过，含 DeepSeek key 保存修复。

**8. [#6962](https://github.com/codewhale-hq/Codewhale/issues/6962) — 发布前检查 Windows 导入下限（Win10 1607 回归防护）**
v0.10.1 在 Win10 1607 上因 `DeriveCapabilitySidsFromName` 无法启动（0xC0000139，见已关闭的 #6953）。提议加入 CI 防回归守卫。

**9. [#6969](https://github.com/codewhale-hq/Codewhale/issues/6969) — 延迟工具箱驱逐在 prompt 缓存计价下经济性为负**
深度分析：`ToolActivationCache`（8 names/16 KiB）驱逐触发全前缀重新填充 + 写溢价，预算对 wire 字节盲视。高质量成本分析贴。

**10. [#6932](https://github.com/codewhale-hq/Codewhale/issues/6932) — Claude 订阅 OAuth + 原生 Messages 路由**
创始人 10 月 8 日授权实施，接管 0.10.2 交接，覆盖 oauth.rs、provider 激活、原生 Anthropic transport 等多个切片。

---

## 🔀 重要 PR 进展

**1. [#6968](https://github.com/codewhale-hq/Codewhale/pull/6968) — 0.10.2 候选：endpoint 作用域 catalog、分层定价与发布验证**
发布主车道 PR，持续跟踪合入状态。

**2. [#6973](https://github.com/codewhale-hq/Codewhale/pull/6973) — FEAT-028：config 命令组全面迁移到 Shapes 架构**
大型行为保持型重构，移除 config 命令组对 `App`/TUI 的具体依赖。#5316 大拆解的又一步。

**3. [#6974](https://github.com/codewhale-hq/Codewhale/pull/6974) ✅ — 修复 DeepSeek root key 保存的 marker 错位**
仅写入 config 根而非 `[providers.deepseek]`，导致 key 读回为 missing。已合入，对应 Issue #6972。

**4. [#6929](https://github.com/codewhale-hq/Codewhale/pull/6929) ✅ — execpolicy：重定向不应被当作命令分隔符**
修复 Windows 上含单独 `&` 的命令被安全门硬阻断的问题。已合入。

**5. [#6949](https://github.com/codewhale-hq/Codewhale/pull/6949) ✅ — subagent 状态路径在 `.codewhale` 为 junction 时 re-root**
修复跨卷状态目录（junction 到其他盘）下子代理在 step 0 全部失败的问题。已合入。

**6. [#6924](https://github.com/codewhale-hq/Codewhale/pull/6924) — 每个 runtime store 一个控制端点、每个 workspace 一个 driver**
保留 @gaord 的 Runtime API 所有权贡献，Unix 客户端按 store 选择 control socket。仍在进行中。

**7. [#6959](https://github.com/codewhale-hq/Codewhale/pull/6959) — Runtime API 读写 workspace 信任状态**
让非 TUI 客户端（如 VS Code 扩展）能查看/设置项目信任裁决——IDE 集成方向的关键拼图。

**8. [#6952](https://github.com/codewhale-hq/Codewhale/pull/6952) ✅ — workflow gate 自锁死修复**
修复 gate 阻塞自身所属 role 导致整个 run 卡死的设计缺陷。

**9. [#6956](https://github.com/codewhale-hq/Codewhale/pull/6956) / [#6958](https://github.com/codewhale-hq/Codewhale/pull/6958) ✅ — flaky test 修复（subagent worktree / session picker）**
均已合入，保留原作者提交，正是 #6094 intake 中提到的两个。

**10. [#6943](https://github.com/codewhale-hq/Codewhale/pull/6943) — 移除 5 个模块的 blanket dead_code allow**
清理 #5587 切片，暴露并处理各模块真实的死代码。待 ECD 汇入。

> 另：@Lstarsky0 今日密集合入 #6966、#6967、#6971、#6975 等 CI 稳定性修复（Windows 超时、代理环境下 loopback 测试），显著改善主干 CI 可靠性。

---

## 📈 功能需求趋势

1. **Runtime API / IDE 集成**：#6924、#6959、#6160 显示外部客户端（VS Code 扩展等）通过 Runtime API 接管信任、控制、终端的需求在快速增长。
2. **架构瘦身（Shapes 化）**：EPIC #5316 持续推进，#6832、#6973 逐步将 TUI crate 的命令组迁移到可移植 Shapes 架构。
3. **Provider 扩展与认证**：Claude OAuth 原生路由（#6932）、DeepSeek key 保存修复（#6974）、Gemini 429 自动重试（#6923）。
4. **发布工程化**：crates.io 体积预检、Windows 导入下限 CI 守卫、ECD 汇入流程——发布防护成为 0.10.2 的主线工程。
5. **多语言/本地化**：中文输入法适配（#2323）、按语言生成 AGENTS.md（#6964）。

## 🛠️ 开发者关注点（痛点）

- **Windows 平台问题密度高**：滚动卡顿、/undo bug、runtime floor 误拦截、Win10 1607 兼容、cargo install 版本不更新（#6976）——Windows 是当前 bug 报告最集中的平台。
- **会话持久化可靠性**：8 MiB 上限阻断 resume/fork（#6955）、sub-agent handoff 导致 resume 拒绝（#6954）、journal 无界增长——恢复/分叉体验存在系统性缺陷。
- **成本透明度**：#6969 指出工具箱驱逐对 prompt 缓存计费的经济影响、#6889 反馈冷启动慢/失败模式误导——重度用户开始关注 token 成本与可观测性。
- **CI flaky tests**：Windows 超时、代理环境干扰是近期贡献者最高频的修复对象。

---
*数据来源：github.com/Hmbown/DeepSeek-TUI（codewhale-hq/Codewhale）· 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-14

## 📌 今日速览

今日无新版本发布，社区活跃度集中在 Issue 讨论与 PR 合并：GPT-6 缓存友好的 reasoning effort 切换（#10886）、会话恢复工具丢失修复（#10887）等多个 P0 级修复已合并关闭。同时出现多个与 1.2.0 版本相关的回归问题报告，包括 Codemode 兼容性破坏和 Nix 构建失败。

---

## 🐛 社区热点 Issues

**1. [#7547](https://github.com/earendil-works/pi/issues/7547) — Windows 使用方式调研（83 评论）**
官方发起的 Windows 体验调研帖持续发酵，聚焦原生运行 vs WSL 的资源分配方向。83 条评论显示 Windows 用户基数庞大，是当前最活跃的讨论线程。

**2. [#10314](https://github.com/earendil-works/pi/issues/10314) — 全屏模式下 Home/End 默认行为变更（已关闭）**
新 TUI 模式将 Home/End 从行内编辑改为滚动，引发键盘党强烈讨论后社区达成结论。反映 TUI 重构中“默认行为变更”的敏感度。

**3. [#10300](https://github.com/earendil-works/pi/issues/10300) — ChatGPT OAuth ID token 未持久化（OPEN）**
`credentialFromTokenResponse` 丢弃 ID token，导致扩展无法获取账户身份，且刷新时同样丢失。影响扩展生态的认证场景。

**4. [#10853](https://github.com/earendil-works/pi/issues/10853) — GPT-6 缓存友好的 effort 切换（P0，已由 PR #10886 解决）**
会话中切换思考等级会导致缓存失效。核心贡献者 dleviminzi 提出并落地了 `configuration_update` 方案，今日已修复。

**5. [#10785](https://github.com/earendil-works/pi/issues/10785) — 会话恢复丢失动态激活的工具（P0，已修复）**
恢复会话后 `defaultActive: false` 和 `deferred` 工具被静默禁用。PR #10887 当日合并，属高优先级修复。

**6. [#10256](https://github.com/earendil-works/pi/issues/10256) — mintty 终端颜色查询泄漏 + 误开外部编辑器（OPEN）**
0.99.x 在 mintty/ConPTY 下颜色查询应答泄漏进提示符，BEL 甚至触发外部编辑器。Windows 非 Terminal 用户的核心痛点。

**7. [#9549](https://github.com/earendil-works/pi/issues/9549) — 大型会话全屏重渲染打满单核（OPEN）**
每次 resize 重新输出整个 transcript，双核机器上一核饱和。性能优化是 TUI 重构后的持续主题。

**8. [#9075](https://github.com/earendil-works/pi/issues/9075) — 压缩摘要继承会话思考等级，高努力下确定性撞输出上限（OPEN）**
adaptive-thinking 模型上 compaction 的 thinking tokens 计入 `max_tokens`，高级别下必然截断。逻辑严密的分析获得 4 👍。

**9. [#10865](https://github.com/earendil-works/pi/issues/10865) — 1.0.x/1.1.x 与 Codemode 1.2 不兼容（P0，已关闭）**
`^1.0.4` 依赖范围解析到 pi-codemode@1.2.0 导致加载失败，干净的 npm install 即可复现，影响存量用户。

**10. [#10299](https://github.com/earendil-works/pi/issues/10299) — OpenRouter/GLM 空 tool call 永久卡死会话（OPEN）**
提供完整复现和修复方案，接续已被“无法复现”关闭的 #4854。畸形 tool call 被持久化后每轮重放，属稳定性硬伤。

---

## 🔧 重要 PR 进展

| PR | 状态 | 内容 |
|---|---|---|
| [#10886](https://github.com/earendil-works/pi/pull/10886) | ✅ 已合并 | GPT-6 effort 变更改用 `configuration_update` 事件发送，保持缓存命中，Codex 上也不再断开 WebSocket 续连 |
| [#10887](https://github.com/earendil-works/pi/pull/10887) | ✅ 已合并 | 会话恢复时还原 transcript 中记录的工具 loadout，修复 #10785 |
| [#10899](https://github.com/earendil-works/pi/pull/10899) / [#10902](https://github.com/earendil-works/pi/pull/10902) | ✅ 已合并 | Gemini 4 模型改用 `thinkingLevel` 线格式，修复 Vertex 拒绝 `thinkingBudget` 的 400 错误 |
| [#10913](https://github.com/earendil-works/pi/pull/10913) | 🔄 开放 | 统一模型引用解析策略：`--model provider/id` 按凭证可用性选择网关，而非目录顺序 |
| [#10914](https://github.com/earendil-works/pi/pull/10914) | 🔄 开放 | 文档迁移至仓库根目录，反映项目已扩展到 pi-ai、pi-durable 等多包 |
| [#10918](https://github.com/earendil-works/pi/pull/10918) | ✅ 已关闭 | 修复 skill 发现剥离 ignore 模式前导 `/` 导致根锚定失效（对应 #10877） |
| [#10910](https://github.com/earendil-works/pi/pull/10910) | 🔄 Draft | NVIDIA 默认模型切换为 Nemotron 3.5 Super VL（待模型公开，与 NVIDIA 官方协作） |
| [#10795](https://github.com/earendil-works/pi/pull/10795) | ✅ 已合并 | Anthropic 错误 tool result 中剥离图片，避免 API 拒绝 |
| [#10718](https://github.com/earendil-works/pi/pull/10718) | 🔄 开放 | `pi --export` HTML 输出补充系统提示词，与交互式 `/export` 行为对齐 |
| [#10528](https://github.com/earendil-works/pi/pull/10528) | 🔄 开放 | Nix 打包重构：`makeBinaryWrapper`、去除 map/d.ts 产物等 |

---

## 📈 功能需求趋势

1. **Windows / 终端兼容性**：#7547、#10256、#9549 表明 Windows 原生 + 多终端（mintty、ConPTY、rxvt）支持是最大需求方向。
2. **多模型适配**：Gemini 4 thinkingLevel、GPT-6 effort 切换、NVIDIA Nemotron 3.5、Groq Qwen3.8（#10741）——新模型上线后的快速适配是持续主题。
3. **扩展/SDK 生态**：OAuth ID token 持久化（#10300）、包命名空间（#8834）、嵌入式 SDK 内存不回收（#10642）——开发者希望更稳固的扩展与嵌入基础。
4. **会话稳定性**：工具丢失恢复、畸形 tool call 卡死、`pi update` 剪枝运行中版本（#10864）等会话生命周期问题集中出现。
5. **企业安全配置**：系统级最高优先级配置（#10895）反映企业部署场景需求上升。

---

## ⚠️ 开发者关注点

- **1.2.0 版本质量**：Codemode 兼容性破坏（#10865）、Nix 构建失败（#10881）、光标列偏移（#10862）等多个 1.2.0 相关问题集中报告，建议存量用户关注补丁版本。
- **长会话资源泄漏**：嵌入式 SDK 内存只增不减（#10642）、大 transcript 渲染性能（#9549），长时间运行场景的内存管理是共性痛点。
- **Provider 脆弱性**：`developer` 角色不兼容（#10741）、`$ref` schema 拒绝（#10521）说明长尾 provider 的容错处理仍需加强。
- **缓存效率**：reasoning effort / thinking budget 的任何变化都可能打穿缓存，社区对缓存保持（cache preservation）的敏感度显著提升。

---
*数据来源：github.com/earendil-works/pi · 过去 24 小时更新（Issues 86 条 / PRs 15 条）*

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 — 2026-10-14

## 一、今日速览

今日发布 **v18.10.4**，为审批提示新增紧凑模式支持。社区活跃度极高：过去 24 小时更新 Issues 66 条、PRs 260 条，TUI 渲染（SIXEL、SVG fence）和 `read`/`bash` 工具的正确性问题集中爆发，且当天即出现多个“issue 提报 → PR 修复”的快速闭环（如 HTTP 204 处理、图片重复读取指纹、SVG theme 初始化）。性能优化是 PR 主旋律，@yuzu-octopus 连续提交多个热路径优化。

---

## 二、版本发布

### [v18.10.4](https://github.com/can1357/oh-my-pi/releases)
- **@oh-my-pi/pi-agent-core**：`AgentTool.formatApprovalDetails` 新增 `ApprovalDetailsOptions` 参数，`compact: true` 时返回未截断的正文，支持紧凑审批提示统计行数（[#15550](https://github.com/can1357/oh-my-pi/pull/15550) by @H4vC）

---

## 三、社区热点 Issues

1. **[#12306](https://github.com/can1357/oh-my-pi/issues/12306)** — Zen 免费模型 `muse-spark-1.3-contributor-free` 在 OMP 中返回 403 FreeTierError，OpenCode 内正常。免费层跨客户端鉴权问题，8 👍 / 10 评论，长期未解。

2. **[#15586](https://github.com/can1357/oh-my-pi/issues/15586)** — 进程内 grep（ripgrep 绑定）会释放 SQLite 对 `agent.db` 的 POSIX 锁，导致 WAL 被删、凭据存储损坏。**P1 数据完整性级 bug**，值得所有人警惕。

3. **[#4991](https://github.com/can1357/oh-my-pi/issues/4991)** — 子代理强制继承完整 harness 系统提示，无法选择最小化“仅契约”提示。长流程编排场景下的上下文成本痛点。

4. **[#15649](https://github.com/can1357/oh-my-pi/issues/15649)** — `edit` 对 `read` 列截断的行做替换时**静默丢弃隐藏尾部**，通过所有校验却丢数据。工具链一致性的高危隐患。

5. **[#15209](https://github.com/can1357/oh-my-pi/issues/15209)** — Bun 1.4.3（10-10 发布）破坏两个测试；`bun@>=1.4` 语义在无预装的 runner 上装到 latest。CI 基础设施稳定性问题。

6. **[#6540](https://github.com/can1357/oh-my-pi/issues/6540)** — 意外停止分类器把带 "Next steps" 收尾的完整回答误判为异常停止，强制多余续写。启发式误报影响交付质量。

7. **[#15557](https://github.com/can1357/oh-my-pi/issues/15557)** — 交互式切换模型后，Xiaomi MiMo token-plan 凭证在进程剩余生命周期内持续 401。多 provider 凭证管理又一案例。

8. **[#15664](https://github.com/can1357/oh-my-pi/issues/15664)** — `/stats` 将 Codex 的 5 小时与 7 天配额窗口在 Team/ProLite 混合账号下错误合并，用量统计失真。

9. **[#13370](https://github.com/can1357/oh-my-pi/issues/13370)** — 非隔离 worktree 子代理的编辑实际落回父 checkout，且诊断信息掩盖了这一事实。已多次触发真实事故。

10. **[#15667](https://github.com/can1357/oh-my-pi/issues/15667) / [#15668](https://github.com/can1357/oh-my-pi/issues/15668)** — `read` 将 HTTP 204 判为失败；图片被覆盖重读后仍提示"identical"。两个当天提报、当天有对应修复 PR 的快速响应案例。

*已关闭：[#15624](https://github.com/can1357/oh-my-pi/issues/15624)（Antigravity gemini-4-argon 404）、[#15592](https://github.com/can1357/oh-my-pi/issues/15592)（OpenRouter sessionHeader FR）、[#15593](https://github.com/can1357/oh-my-pi/issues/15593)（skill 描述截断注入）。*

---

## 四、重要 PR 进展

1. **[#15404](https://github.com/can1357/oh-my-pi/pull/15404)** (review:p1) — 修复超 2 GiB 的文件型会话持久化失败后每轮重写崩溃的死循环。

2. **[#15327](https://github.com/can1357/oh-my-pi/pull/15327)** (review:p1) — SIXEL payload 在 eval / PTY bash / replay 中被截断破坏的修复，附 14 个回归测试。

3. **[#15336](https://github.com/can1357/oh-my-pi/pull/15336)** (review:p1) — 统一 thinking-toggle 路径，修复 `/settings` 隐藏 thinking 块时**静默删除助手回答**的 P0 bug。

4. **[#15326](https://github.com/can1357/oh-my-pi/pull/15326)** (review:p1) — bash 输出超 100 行在每次 replay/resume 时被静默截尾，Ctrl+O 现可恢复全部行。

5. **[#15674](https://github.com/can1357/oh-my-pi/pull/15674)** — `read` 正确处理 HTTP 204 无正文响应（对应 Issue #15667）。

6. **[#15673](https://github.com/can1357/oh-my-pi/pull/15673) / [#15669](https://github.com/can1357/oh-my-pi/pull/15669) / [#15672](https://github.com/can1357/oh-my-pi/pull/15672)** — @roboomp 的一天三连修：SVG figure theme 初始化、CRLF/CR SVG fence 解析、图片数据纳入重读指纹。

7. **[#15222](https://github.com/can1357/oh-my-pi/pull/15222) / [#15207](https://github.com/can1357/oh-my-pi/pull/15207) / [#15206](https://github.com/can1357/oh-my-pi/pull/15206)** — @yuzu-octopus 性能系列：会话条目 memoize 使 prune 只重写变更行、流式热路径削减每 chunk 开销、diff 每行只解析一次。

8. **[#11645](https://github.com/can1357/oh-my-pi/pull/11645)** (feat, review:p2) — 多账号 provider 支持显式优先级排序，替代隐式哈希/轮询。与 [#13528](https://github.com/can1357/oh-my-pi/pull/13528)（`/account` 严格会话级锁定）同属账号管理增强。

9. **[#10053](https://github.com/can1357/oh-my-pi/pull/10053)** — 明确模型 `drop`/`rm` todo 视为交接而非完成（fail-closed），堵住“假完成”漏洞。

10. **[#15331](https://github.com/can1357/oh-my-pi/pull/15331) / [#15337](https://github.com/can1357/oh-my-pi/pull/15337)** — stats 解析线程池跨同步运行保温复用；启动阶段 host/wslpath/tmux 探测改异步有界，不再阻塞首帧渲染。

---

## 五、功能需求趋势

- **多账号与凭据管理**：#4829（`/usage switch`）、#11645、#13528、#15557 —— 社区对细粒度 OAuth 账号控制需求强烈，是当前最活跃的功能线。
- **Provider 兼容性**：Zen 免费层（#12306）、Antigravity、Xiaomi、Cursor、OpenRouter sessionHeader —— 新模型/provider 接入后的鉴权与行为对齐问题持续涌现。
- **子代理与提示工程**：#4991（最小提示契约）、#13370（worktree 路径隔离）、#6540（停止分类器）—— 编排场景下对上下文可控性的诉求。
- **TUI 渲染质量**：SIXEL/SVG/Kitty 图形、theme 共享、replay 一致性集中报 bug，终端图形栈是当前薄弱环节。
- **可观测性**：#15664（配额窗口统计）、#15636（Auto-Promote vs fallback 文档澄清）—— 用量统计与文档精度。

---

## 六、开发者关注点

- **静默数据丢失最伤信任**：edit 截断尾部丢失（#15649）、bash 输出 replay 截断（#15326）、agent.db 锁损坏（#15586）—— 社区对“通过校验但丢数据”类问题容忍度极低。
- **工具输出的自一致性**：read/edit/bash 之间对同一数据的呈现不一致是多个 bug 的共同根源（截断、204、identical 提示误报）。
- **基础设施工具链漂移**：Bun 版本 floor 语义（#15209、PR #15332）提醒 CI 应锁定而非浮动版本。
- **快速闭环是亮点**：多个 P2 issue 当天提报当天修复（204、SVG theme、图片指纹），维护响应速度值得肯定。
- **性能意识普及**：流式热路径、会话持久化、启动时间的优化 PR 密集出现，长会话（多天、2 GiB+）场景已成为一等公民。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*