# AI CLI 工具社区动态日报 2026-09-24

> 生成时间: 2026-09-24 03:45 UTC | 覆盖工具: 11 个

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

**日期：2026-09-24 | 数据来源：12 个主流 AI CLI 工具的 GitHub 社区动态**

---

## 一、生态全景

AI CLI 工具已进入“多智能体 + 长会话稳定性”的深水区竞争：头部产品（Claude Code、Codex、Gemini CLI）日更 PR 均达 20+ 条，迭代节奏接近传统 SaaS 水平，而竞争重心正从“基础可用”转向**成本可观测、权限安全、扩展生态**三大方向。新模型（Gemini 3.8 Flash、GPT-6 Sol/Luna、Opus 5.5）的快速接入成为各工具的共同压力测试，首发兼容性问题频发。同时，Windows 平台已成为全行业公认的质量洼地，多家工具的沙箱、IME 输入、更新器问题集中爆发。多智能体编排（Qwen 的 mesh 协作、Codex 的 Guardian v2、Gemini 的 subagent 体系）和 A2A 协议正在从实验走向产品化。

---

## 二、各工具活跃度对比

| 工具 | Issues 动态 | PRs 动态 | Release | 核心动向 |
|---|---|---|---|---|
| **Claude Code** | 热点丰富（头号 issue 1497 评论） | 6 条（24h 偏少） | v2.1.281 | Bedrock assume_role、安全分类器误拦截争议 |
| **OpenAI Codex** | ~50 条（40% Windows 标签） | 20+ 合并 | 7 个 alpha（24h） | Windows 沙箱修复、Guardian v2 简化、扩展钩子 |
| **Gemini CLI** | 50 条 | 39 条 | v0.62.0-nightly/preview | Gemini 3.8 Flash 接入、subagent 可靠性 |
| **Copilot CLI** | 中等（10 个热点，多数已关闭） | 1 条 | v1.0.89-1 | GPT-6 Sol/Luna、context-memory 修复 |
| **Kimi Code CLI** | 1 条 | 0 | 无 | 安全事故 issue（yolo 模式 rm -rf）持续跟进 |
| **OpenCode** | 活跃（10 热点） | 10+ 高质量 PR | 无 | V2 迁移、多 provider 兼容、付费账号事故 |
| **Qwen Code** | 活跃（10 热点，架构讨论 11 评论） | 10+ | v0.24.4-nightly + cua-driver | 跨机 Agent、A2A 共享、Managed Agent 架构 |
| **DeepSeek TUI** | 42 条 | 43 条 | 无（0.10.1 筹备中） | 0.10.2 权限安全系列立项（15+ issues） |
| **Pi** | **107 条（最高）** | 19 条 | 无 | 扩展流事件访问、GPT-6 上下文修正 |
| **oh-my-pi** | 102 条 | **183 条（最高）** | v18.3.0 + v18.2.11 | 扩展 SDK 深化、Opus 5.5 兼容 |
| **DeepSeek Harness** | 0 | 0 | dsh-v0.1.7-rc.1 | Web 终端、会话归档、MCP 资源 |

**解读**：oh-my-pi 和 Pi 的 issue/PR 数量级最高但属小而精的社区；Codex 与 Gemini CLI 的“官方投入/合并速度”最激进（Codex 24h 连发 7 个 alpha）；Kimi 和 DeepSeek Harness 处于低活跃或版本消化期。

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **1. 权限与安全模型** | Claude Code、Kimi、DeepSeek TUI、oh-my-pi、OpenCode | 安全分类器误拦截合法操作（Claude #95777 一天 5+ 同类报告）；yolo 模式下 rm -rf 逃逸工作区（Kimi #2596）；审批门 fail-open 隐患（OMP #10362）；DeepSeek TUI 一次性立项 15+ 权限重构 issue |
| **2. 成本可观测性** | Claude Code、Pi、Copilot CLI、OpenCode、oh-my-pi | prompt cache 意外重建致成本暴涨（Claude #90018/#96578）；跨会话用量报表缺失；缓存计费费率错误（Pi #9210）；compaction 无界重试烧钱（Copilot #4663） |
| **3. Subagent/多智能体编排** | Gemini、oh-my-pi、Qwen、OpenCode | 子代理状态误报成功（Gemini #22323）、事件循环卡死（OMP #5372）、完成通知丢失（OpenCode #50751）、跨机 Agent 协作（Qwen #12582） |
| **4. Windows 平台成熟度** | Codex（~40% issue）、Claude Code、Pi、OpenCode、Gemini | 沙箱初始化失败、IME 输入不可用（Pi #9497、Claude #92959）、更新器回归、PowerShell 卡死 |
| **5. 记忆系统（Memory）** | Claude Code、Gemini、Copilot CLI、OpenCode | memory 与 prompt cache 成本冲突（Claude #96578）、加载状态不可见、脱敏缺失致泄露风险（Gemini #26525） |
| **6. 扩展/插件生态** | Codex、oh-my-pi、Pi、OpenCode、Qwen | 模型请求/响应拦截钩子（Codex #47679）、provider 原始流事件（Pi #9901）、可 steering 子代理 SDK（OMP #2574）、V1→V2 迁移路径（OpenCode） |
| **7. “静默失败”治理** | Pi、Copilot CLI、oh-my-pi、Claude Code | 配置写了不生效、未知模型静默回退、错误无用户可见信号——多社区同时提出"fail loudly"诉求 |

---

## 四、差异化定位分析

| 工具 | 定位与路线 |
|---|---|
| **Claude Code** | 企业级旗舰：面向订阅制重度用户，重投入安全合规（Bedrock IAM、Apps Gateway、security-guidance 审查器），但受制于配额体系（#16157 近 1500 评论）和分类器过度拦截 |
| **OpenAI Codex** | 全平台 + 桌面端野心：Rust 重写、高频 alpha、Guardian 安全架构、扩展钩子与能力发现 V2，为插件生态和 ChatGPT 账号体系深度整合铺路；Windows 是明显短板 |
| **Gemini CLI** | 开源 + 多模型开放路线：nightly/preview 双轨发布，重注 subagent、AST 感知上下文优化、零依赖 OS 沙箱等前沿方向，社区探索性强 |
| **Copilot CLI** | GitHub 生态整合：企业管控（managed-settings、MCP registry 策略）与 BYOK 双线，但版本节奏慢（24h 仅 1 PR），处于消化期 |
| **Qwen Code** | 分布式多智能体先锋：跨机 Agent、A2A 共享、mesh 协作是国内最激进的架构探索，兼顾性能优化（RSS 660→434MB） |
| **OpenCode** | 多 provider 聚合层：openai-compatible 路由、schema 兼容修复密集，定位中立底座，但 V2 迁移和付费运营可靠性承压 |
| **Pi / oh-my-pi** | 黑客型/可扩展底座：扩展 API 表达力、自定义 provider、深度可配置（JSON Schema、主题系统），面向高级用户和 SDK 宿主开发者；oh-my-pi 迭代强度（183 PR/24h）在同类中罕见 |
| **DeepSeek TUI / Harness** | 弱模型友好路线：deferred tool 首调优化、Auto-Review 熔断等设计明显为能力较弱模型兜底；Harness 补齐 Web 端与 MCP 标准协议 |
| **Kimi Code CLI** | 早期阶段，活跃度低，主要价值在于为全行业提供了 yolo 模式安全事故的警示案例 |

---

## 五、社区热度与成熟度

- **第一梯队（高热度 + 高成熟度）**：Claude Code（issue 讨论深度最高，#16157 近 1500 评论显示用户黏性与不满并存）、Codex（合并速度最快，官方投入最重）
- **快速迭代冲刺期**：Gemini CLI、oh-my-pi、Codex——日均 20+ PR，处于功能扩张和架构重构并行阶段
- **活跃但转型阵痛期**：OpenCode（V2 迁移）、DeepSeek TUI（0.10.x 权限重构）、Pi（回归频发，部分用户停留在 0.85.1）
- **平稳/低谷期**：Copilot CLI（发布后消化）、DeepSeek Harness（RC 验证窗口）、Kimi CLI（近乎静默）

**成熟度信号**：回归频发是当前全行业的共同特征——Codex 桌面端 git 按钮消失、Pi 连续两个版本回归、DeepSeek TUI 0.10.0 升级问题集中，反映“快速迭代 vs 发布质量”的张力普遍存在。

---

## 六、值得关注的趋势信号

1. **安全模型从“权限确认”走向“分级治理”**：DeepSeek TUI 的 A/G/M/R 系列、Codex 的 Guardian v2、Claude 的分类器争议，共同指向行业共识——粗粒度的 allow/yolo 二元模型已不够，需要按命令危险等级、host+协议+端口、路径白名单的细粒度授权，且**审查失败不得伪装成安全拒绝**。

2. **“静默降级”成为社区公敌**：至少 5 个工具的社区同时提出 fail loudly 诉求（未知模型静默回退、配置失效无提示、错误吞掉）。对开发者的启示：任何回退路径都必须有用户可见信号，这正在从体验问题上升为信任问题。

3. **Prompt cache 经济学浮出水面**：Claude Code 的 cache 意外重建、Copilot 的 TTL 空闲 compaction 提案、Pi 的费率计费错误表明，长会话工具的真实成本已由缓存命中率决定。选型时应考察工具是否提供缓存命中/重建的可观测手段。

4. **扩展 SDK 是下一个护城河**：Codex 的请求拦截钩子、Pi 的 provider 流事件、OMP 的子代理生成原语——头部工具都在把核心能力下沉为扩展接口。“功能活在扩展里”的架构将决定生态位。

5. **A2A 与跨机 Agent 从提案到落地**：Qwen 的 #12582、Codex 的能力发现 V2、Gemini 的 a2a-server 表明 agent 间协作协议正在产品化，值得关注早期集成机会。

6. **默认安全配置不容试错**：OpenCode 无鉴权服务器被植入挖矿程序、Kimi yolo 模式删数据两个真实事故，为全行业敲响警钟——**生产环境禁用宽松权限模式、重要数据保持备份、暴露端口必须鉴权**，这三条应成为团队使用 AI CLI 的强制规范。

---

*报告基于各仓库过去 24 小时公开数据自动汇总，Issue/PR 编号均可在对应仓库查证。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（截至 2026-09-24）

## 一、热门 Skills 排行（PR）

| # | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **skill-creator 触发评估修复**（[#1298](https://github.com/anthropics/skills/pull/1298)、[#1769](https://github.com/anthropics/skills/pull/1769)） | 修复 skill-creator 触发评估误报、Windows 兼容、0% recall 等核心缺陷 | 社区元工具 skill-creator 本身的可靠性，是近期最集中的修复战场 | OPEN |
| 2 | **md2video-audio**（[#1703](https://github.com/anthropics/skills/pull/1703)） | Markdown 一键编译为带真人配音的 MP4 视频（Marp + TTS，零成本） | 内容创作者对“文档→视频”自动化流水线的强烈兴趣 | OPEN |
| 3 | **Pyxel 复古游戏开发**（[#525](https://github.com/anthropics/skills/pull/525)） | Python 复古游戏创建、无头运行验证、帧检查 | 长期存活（3 月至今仍活跃更新 9-22），垂直创作类 skill 代表 | OPEN |
| 4 | **AWT AI E2E 测试**（[#822](https://github.com/anthropics/skills/pull/822)） | 视觉 + 浏览器控制的零代码端到端测试生成 | AI 驱动测试自动化，与 testing-patterns 一起构成“测试”主题热点 | OPEN |
| 5 | **mcp-builder 兼容修复**（[#1742](https://github.com/anthropics/skills/pull/1742)） | 适配 mcp>=2.0 的 `streamable_http_client` 重命名及自定义 headers | 对应 Issue [#1390](https://github.com/anthropics/skills/issues/1390)（评估脚本对真实 MCP server 全部 0 分），MCP 生态兼容性刚需 | OPEN |
| 6 | **document-typography**（[#514](https://github.com/anthropics/skills/pull/514)） | 消除 AI 生成文档的孤行、寡妇标题、编号错位等排版缺陷 | 直击“AI 生成的每个文档都有排版问题”这一普遍痛点 | OPEN |
| 7 | **blast-radius**（[#1776](https://github.com/anthropics/skills/pull/1776)） | 批量/破坏性写操作前的爆炸半径检查清单 | AI Agent 安全操作守卫，新颖的安全视角 | OPEN |
| 8 | **docx 技能系列修复**（[#541](https://github.com/anthropics/skills/pull/541)、[#1790](https://github.com/anthropics/skills/pull/1790)、[#1792](https://github.com/anthropics/skills/pull/1792)、[#1734](https://github.com/anthropics/skills/pull/1734)） | 修复 w:id 冲突、rels 缺失、LibreOffice 超时误报、孤儿批注 | 官方 docx skill 缺陷密集，Lubrsy706 与 TINGyu123644 为活跃贡献者 | OPEN |

## 二、社区需求趋势（Issues 提炼）

1. **安全与信任边界**：[#492](https://github.com/anthropics/skills/issues/492)（43 条评论，最热）——社区 skill 冒充 `anthropic/` 命名空间构成信任滥用；[#1175](https://github.com/anthropics/skills/issues/1175) 关注企业文档权限安全。**签名/来源验证是第一大诉求**。
2. **组织内共享与分发**：[#228](https://github.com/anthropics/skills/issues/228) 要求 org 级 skill 库；[#16](https://github.com/anthropics/skills/issues/16) 提出 Skills 与 MCP 互操作；[#29](https://github.com/anthropics/skills/issues/29) 要求 Bedrock 支持。
3. **上下文效率**：[#1487](https://github.com/anthropics/skills/issues/1487)——`claude-api` skill 一次性注入 ~156k token 耗尽上下文；[#1329](https://github.com/anthropics/skills/issues/1329) 提出 compact-memory 紧凑记忆表示。**渐进式加载是核心关切**。
4. **Agent 治理与质量门禁**：[#412](https://github.com/anthropics/skills/issues/412)（agent-governance）、[#1385](https://github.com/anthropics/skills/issues/1385)（推理质量门禁流水线）、PR #1776（blast-radius）——AI 自我约束/审查类 skill 需求抬头。
5. **工具链可靠性**：[#556](https://github.com/anthropics/skills/issues/556)（触发率 0%）、[#1390](https://github.com/anthropics/skills/issues/1390)、[#1362](https://github.com/anthropics/skills/issues/1362)——评估与构建脚本在新版本依赖下频繁失效。

## 三、高潜力待合并 Skills

- **[#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder mcp>=2 适配**：修复高优 Issue #1668，9 月仍持续更新，最可能近期落地。
- **[#525](https://github.com/anthropics/skills/pull/525) Pyxel skill**：存活 6+ 月且 9-22 仍活跃，作者持续跟进。
- **[#1298](https://github.com/anthropics/skills/pull/1298) / [#1769](https://github.com/anthropics/skills/pull/1769) skill-creator 触发评估修复**：对应社区反复报告的评估失效问题，官方有强动机合并。
- **[#1703](https://github.com/anthropics/skills/pull/1703) md2video-audio**：零依赖、覆盖高频内容创作场景。
- **[#1790](https://github.com/anthropics/skills/pull/1790) / [#1792](https://github.com/anthropics/skills/pull/1792) docx 修复**：小而精准的缺陷修复，合并阻力最小。

## 四、生态洞察

**当前社区最集中的诉求是：让 Skills 生态“可信且可控”——即建立社区 skill 的身份验证与信任边界（#492），同时解决上下文爆炸、触发评估失效和官方 skill（docx/mcp-builder）的可靠性缺陷，把 Skills 从“能用”推向“企业可放心用”。**

---

# Claude Code 社区动态日报 · 2026-09-24

## 1. 今日速览

Claude Code 发布 **v2.1.281**，主要增强 Claude Apps Gateway 对新版 Desktop 密钥的支持，并为 Bedrock 上游新增 `assume_role` IAM 角色调用能力。社区侧，Max 订阅用量限制问题（#16157）持续发酵，评论已近 1500 条；同时多条新报告聚焦**安全分类器误拦截授权操作**和**prompt cache 被意外重建导致的成本问题**，值得重点关注。

---

## 2. 版本发布

### v2.1.281
- 新增 Claude Apps Gateway 对较新 Claude Desktop 密钥的支持，覆盖 `desktop` 策略块中的 `blockReadsOutsideWorkingDirectories` 与 `disableBypassPermissionsMode`
- Bedrock 上游支持 `assume_role`：网关可以 IAM 角色身份调用 Bedrock

🔗 [Releases](https://github.com/anthropics/claude-code/releases)

---

## 3. 社区热点 Issues

| # | 标题 | 关注点 |
|---|------|--------|
| [#16157](https://github.com/anthropics/claude-code/issues/16157) | Max 订阅秒触用量限制 | **1497 评论 / 694 👍**，持续数月的头号痛点，官方已挂 oncall，仍未根治 |
| [#82056](https://github.com/anthropics/claude-code/issues/82056) | Auto-memory 索引加载状态不可见 | 会话无法得知 memory 索引是完整/截断/未加载，影响可观测性，54 条评论 |
| [#14200](https://github.com/anthropics/claude-code/issues/14200) | Plugins 支持 rules | 108 👍，插件生态最热门功能请求 |
| [#7618](https://github.com/anthropics/claude-code/issues/7618) | VS Code 终端抢焦点 | `/ide` 模式下老牌体验问题，仍有重现 |
| [#78148](https://github.com/anthropics/claude-code/issues/78148) | 跨会话历史成本/用量统计 | `/cost` 仅显示当前会话，社区强烈需要周/月维度报表 |
| [#77697](https://github.com/anthropics/claude-code/issues/77697) | macOS Keychain 未设信任应用列表 | 每次读取凭证都弹授权框，认证体验问题 |
| [#95775](https://github.com/anthropics/claude-code/issues/95775) | Discord 插件入站消息静默丢弃 | 2.1.278 回归，#86566 复发，官方插件可用性受损 |
| [#90018](https://github.com/anthropics/claude-code/issues/90018) | `totalTokensReminder` 导致 prompt cache 失效 | 工具循环中缓存被反复重写，关闭后恢复，成本敏感用户必看 |
| [#96578](https://github.com/anthropics/claude-code/issues/96578) | Auto-memory 每轮重建 prompt cache | 新会话每条消息都按 cache-write 计费，禁用 auto-memory 后恢复，与 #90018 同属成本类问题 |
| [#95777](https://github.com/anthropics/claude-code/issues/95777) | Auto mode 分类器无视用户明确批准 | 今日多条同类报告（#96572/#96575/#96576/#96577），安全分类器误拦截成为新爆发点 |

其他值得关注：[#96389](https://github.com/anthropics/claude-code/issues/96389)（Windows MSIX 更新器回归 Squirrel 报错）、[#93967](https://github.com/anthropics/claude-code/issues/93967)（Windows OAuth 403）、[#92959](https://github.com/anthropics/claude-code/issues/92959)（日语 IME 转换下划线不显示）。

---

## 4. 重要 PR 进展

> 注：过去 24 小时仅 6 个 PR 更新，以下为全部重点。

1. [#96434](https://github.com/anthropics/claude-code/pull/96434)（by claude[bot]）— **安全修复**：security-guidance 审查器此前可通过 `git diff/show` 将被权限规则拒绝的密钥文件（如 `secrets.yaml`）带入模型上下文，现予以隔离。修复 #96276。
2. [#96570](https://github.com/anthropics/claude-code/pull/96570) — `command.run` hook 的命令匹配改为引擎可扫描的字面量，修复启动时斜杠命令等待模块加载的问题。
3. [#96487](https://github.com/anthropics/claude-code/pull/96487) — telemetry 行携带引擎版本/基础版本/构建时间（依赖 2.1.281 新增的 `$.session.version()`）。
4. [#96363](https://github.com/anthropics/claude-code/pull/96363) — `git diff` 加 `--no-color`，修复 `color.ui=always` 配置下 diff 体为空的问题。
5. [#96364](https://github.com/anthropics/claude-code/pull/96364) — 修复超长嵌套 `AGENTS.md` 被分页 Read 后仍被重复附加的问题。
6. [#79150](https://github.com/anthropics/claude-code/pull/79150) — 对齐 code-review README 与当前基于验证的命令实现（文档更新）。

---

## 5. 功能需求趋势

- **成本可观测与用量管理**：跨会话成本统计（#78148）、用量告警阈值准确性（#94694）、Max x20 配额不符预期（#96581）——随订阅体系复杂化，成本透明度是第一诉求。
- **插件/生态扩展**：Plugins rules 支持（#14200）呼声最高；官方 Discord 插件可靠性问题（#95775）暴露插件质量风险。
- **Memory 机制可控性**：加载状态可见性（#82056）、auto-memory 与缓存成本的冲突（#96578），社区希望 memory 默认行为更透明、可调。
- **项目/工作流管理**：`claude project mv` 一键迁移项目状态（#96018）等 CLI 生命周期命令需求浮现。
- **安全分类器精细化**：授权运维任务、自有系统操作被误拦截的报告今日集中出现，需配置化白名单路径。

---

## 6. 开发者关注点

1. **成本异常是最大痛点**：prompt cache 意外重建（#90018、#96578）+ 用量限额误判（#16157、#96581）叠加，重度用户实际开销显著高于预期。
2. **安全分类器过度拦截**：合法授权的系统管理、自有设备脚本、公开信息研究均被阻断，且无解释、无配置出口，影响专业用户信任。
3. **Windows 平台质量洼地**：OAuth 403（#93967）、MSIX 更新器回归（#96389）、agent-view 异常后台化（#96532）集中出现。
4. **认证体验**：macOS Keychain 反复弹窗（#77697）长期未修。
5. **国际化输入**：日语 IME 转换显示问题（#92959）影响非英语用户日常使用。
6. **VS Code 扩展细节**：焦点抢占（#7618）、光标渲染（#96571）、历史会话渲染不完整（#95656）等显示层 bug 持续累积。

---
*数据来源：anthropics/claude-code · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-09-24

## 1. 今日速览

Codex 团队今日保持高频迭代，Rust CLI 连发多个 alpha 版本（0.157/0.158 系列），合并 PR 集中在 **Windows 沙箱修复、WebSocket 会话管理优化和 Guardian 上下文架构简化** 三大方向。社区侧，Windows 桌面端问题仍是重灾区，而 "Astra 星星特效应默认关闭”（#44561，77 👍）成为呼声最高的功能诉求之一。

---

## 2. 版本发布

过去 24 小时发布 7 个 alpha 版本，节奏非常密集：

| 版本 | 说明 |
|---|---|
| rust-v0.158.0-alpha.2 ~ alpha.6 | 0.158 主线快速迭代，5 个 alpha 连发 |
| rust-v0.157.0-alpha.11 | 0.157 分支补丁 |
| rust-v0.155.0-alpha.16.4 | 0.155 分支维护更新 |

Release Notes 均为简要说明，具体变更可对照下方 PR 列表（大量修复已合入，对应 0.158 主线）。

---

## 3. 社区热点 Issues（Top 10）

1. **[#25319](https://github.com/openai/codex/issues/25319)** · VS Code 聊天按工作区/项目隔离（39 评论 / 93 👍）
   社区呼声最高的功能需求：IDE 扩展的聊天历史应限定在当前 workspace，避免跨项目污染。开放于 5 月，至今持续活跃，值得团队优先排期。

2. **[#44561](https://github.com/openai/codex/issues/44561)** · 要求默认关闭 Astra 星星特效（33 评论 / 77 👍）
   用户反馈"以为屏幕坏了”，与 [#44640](https://github.com/openai/codex/issues/44640)（18 👍，特效干扰判断 agent 是否在运行）构成明确的社区共识：视觉特效应默认关闭或可发现地关闭。相关 TUI 修复 PR #47717 已合并。

3. **[#42853](https://github.com/openai/codex/issues/42853)** · Windows 桌面端 GPT-6 Astra 模型选择器缺失（36 评论）
   合格的 ChatGPT Pro 账户在 Windows 桌面端看不到 Astra 模型，属于功能性缺失，影响面大。

4. **[#47383](https://github.com/openai/codex/issues/47383)** · Windows 10 注册式沙箱 setup 失败并阻塞审批模式（25 评论）
   新版桌面应用更新后 UI 报错，阻塞核心工作流。对应修复 PR #47695（沙箱凭据修复）今日已合并，可关注后续版本。

5. **[#44696](https://github.com/openai/codex/issues/44696)** · Windows 沙箱 helper 全面报 `helper_unknown_error`（19 评论）
   workspace-write 默认模式下所有 exec_command 和文件读取全部失败，是 Windows 沙箱链路的又一关键阻塞问题。

6. **[#17793](https://github.com/openai/codex/issues/17793)** · TUI 退格键一次删除多个字符（21 评论）
   长期未修的输入体验 bug，自 4 月持续活跃，直接影响 CLI 日常可用性。

7. **[#43594](https://github.com/openai/codex/issues/43594)** · Computer Use 被错误限制在 Darwin 平台（14 评论）
   Windows 后端实际可用，但主进程将其 gate 在 macOS，导致 `@oai/sky` 未注册——典型的平台 gating 配置错误。

8. **[#46986](https://github.com/openai/codex/issues/46986)** · 发送按钮在既有会话中保持禁用（9 评论）
   跨 Windows/macOS 的 composer 状态回归（关联 #45885、#45626 等一串 issue）， workaround 是切换到 Settings 页再切回。

9. **[#47511](https://github.com/openai/codex/issues/47511)** · 桌面端 git commit & push 按钮消失（5 评论 / 13 👍）
   26.917.51856 版本的明显回归，高 👍 说明影响用户较多。

10. **[#47415](https://github.com/openai/codex/issues/47415)** · Linux/Btrfs：沙箱拒绝 app-server socket 挂载（4 评论）
    因 fstat 设备号与 mountinfo 不一致导致 bubblewrap 启动失败，代表了 Linux 非 ext4 文件系统用户的沙箱兼容性痛点。

---

## 4. 重要 PR 进展（Top 10）

1. **[#47695](https://github.com/openai/codex/pull/47695)** · 修复 Windows 沙箱注册凭据被拒问题
   在 provisioning 阶段校验存储密码，检测 setup 表面成功但实际被 Windows 拒绝的情况——直接回应 Issue #47383。

2. **[#47717](https://github.com/openai/codex/pull/47717)** · 修复模型选择器的递归 TUI 事件分发
   Astra 模型确认时在 TUI 线程栈上递归轮询事件分发器，可能导致卡顿；现改为先解包再分发。

3. **[#47701](https://github.com/openai/codex/pull/47701)** / **[#47709](https://github.com/openai/codex/pull/47709)** · WebSocket 连接预热与修复机制
   允许空闲线程预热/修复 WebSocket 连接，resume 预热统一走缓存会话路径，降低首轮延迟。

4. **[#47703](https://github.com/openai/codex/pull/47703)** · 保留 ChatGPT 后端请求的账户网络策略
   修复凭据捕获的请求绕过网络策略的问题，确保凭据撤销后仍能正确阻断——安全相关修复。

5. **[#47712](https://github.com/openai/codex/pull/47712)** · 统一 exec 输出缓冲区原子更新
   消除取消操作在两个缓冲区之间打断更新导致的状态不一致。

6. **[#47714](https://github.com/openai/codex/pull/47714)** · 元数据预算超限时更精细地保留工具结果
   不再“一刀切”替换所有工具结果元数据，保留资源访问证据，提升上下文质量。

7. **[#47686](https://github.com/openai/codex/pull/47686)** / **[#47689](https://github.com/openai/codex/pull/47689)** · Guardian v2 上下文架构收敛
   Thread-owned 上下文成为无条件默认，废弃 `guardianv2.thread_context` 配置项，大幅简化历史管理与授权审查路径。

8. **[#47683](https://github.com/openai/codex/pull/47683)** · Executor 能力发现 V2 基础设施
   定义 `capabilities/discoverV2` 协议，服务启动时预扫描插件与全局 skill 目录，为插件生态铺路。

9. **[#47679](https://github.com/openai/codex/pull/47679)** · 扩展 API 新增模型请求/响应拦截钩子
   `ModelRequestContributor` + `ModelResponseInterceptor`，扩展可注入 client_metadata 并拦截请求流——扩展性重大增强。

10. **[#47713](https://github.com/openai/codex/pull/47713)** · 重构共享配置 crate 依赖关系
    将 `Provider`/`RetryConfig` 移入 `codex-client`，降低 crate 间耦合，改善工程可维护性。

---

## 5. 功能需求趋势

- **IDE 集成体验**：工作区级会话隔离（#25319，93 👍）、状态栏速率限制显示（#18822、#47734）持续高热度。
- **视觉/交互可配置性**：Astra 特效默认关闭的诉求强烈（#44561 + #44640 合计 95 👍）。
- **Windows 平台对齐**：今日 50 条 Issue 中约 40% 带 `windows-os` 标签，模型选择器、沙箱、Computer Use、内置浏览器全面落后于 macOS。
- **浏览器/Computer Use 自动化**：IAB 路由丢失（#45028）、cua.getState 失败（#45340）、Edge URL 识别失败（#45996）、Chrome 标签页操作失败（#47732），该模块问题集中爆发。
- **远程/多设备协作**：Remote Control 注册失败（#46601）、移动端写锁无法释放（#46647）。

---

## 6. 开发者关注点

1. **Windows 沙箱是当前最大痛点**：多个高评论 Issue（#47383、#44696、#42968、#47429 WSL2）指向沙箱初始化/凭据/挂载链路，团队已在今日合并针对性修复（PR #47695），建议关注下一个 stable 版本。
2. **配置持久化缺陷**：TUI 中关闭 Fast 模式不写入 `config.toml`（#47534，已关闭）、未识别的 `features.thread_tools` 告警（#47043），反映配置系统在快速迭代中出现漂移。
3. **升级回归频发**：26.917 桌面版引入 git 按钮消失（#47511）、发送按钮禁用（#46986）等回归，桌面端发布质量管控需加强。
4. **CLI 卫生问题长期未决**：旧版本不清理（#22293）、/tmp 目录泄漏（#31599）、退格键 bug（#17793）等“小问题”数月未修，累积影响日常体验。
5. **积极信号**：合并节奏极快（24 小时 20+ PR），且 Guardian 架构简化、扩展钩子、能力发现 V2 等均为面向长期可扩展性的实质性投入。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-09-24

## 1. 今日速览

今日 Gemini CLI 发布了 **v0.62.0-nightly** 与 **v0.62.0-preview.0**，同时合并了支持 **Gemini 3.8 Flash / 3.5 Flash Lite** 的重要 PR（#29443）。社区讨论焦点集中在**子代理（Subagent）可靠性**与**内存/记忆系统安全**两大方向，多个 P1 级别 Issue 持续活跃。

---

## 2. 版本发布

### v0.62.0-nightly.20260924
- 运行 VSC 集成测试前检查测试是否存在（PR #29462）
- 修复连接恢复期间重试进度指示器不显示的问题（PR #29468 / #28340）
- 🔗 [Release 链接](https://github.com/google-gemini/gemini-cli/releases)

### v0.62.0-preview.0
- a2a-server：tasks metadata 端点对不支持的 store 提前返回，修复 501 响应后逻辑穿透导致 `ERR_HTTP_HEADERS_SENT` 崩溃的问题（PR #29334 / #27754）

### v0.61.0 / v0.61.0-preview.1
- v0.61.0 正式版发布；preview.1 为 cherry-pick 补丁版本（PR #29455）

---

## 3. 社区热点 Issues

1. **#22323 [P1] Subagent 达到 MAX_TURNS 后被误报为 GOAL 成功** — 子代理因回合上限中断却被标记为成功，掩盖了真实失败原因，直接影响任务可靠性判定。评论 13 条，为今日最热。🔗 [Issue](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#19873 [P2] 利用模型 bash 原生能力的零依赖 OS 沙箱方案** — 社区探讨如何在不牺牲安全的前提下让 Gemini 3 发挥 POSIX 工具链的原生优势，方向性很强。🔗 [Issue](https://github.com/google-gemini/gemini-cli/issues/19873)

3. **#21409 [P1] Generalist agent 无限挂起** — 通用代理执行简单操作（如建目录）也可能挂起一小时以上，👍 8，用户痛点明显。🔗 [Issue](https://github.com/google-gemini/gemini-cli/issues/21409)

4. **#22745 [P2] AST 感知的文件读取/搜索/代码库映射评估** — 探索用 AST 工具精确读取方法边界，减少 token 浪费与多轮错位读取。🔗 [Issue](https://github.com/google-gemini/gemini-cli/issues/22745)

5. **#21968 [P2] Gemini 主动使用 skills 和 sub-agents 不足** — 用户反馈模型几乎不会自主调用自定义技能，需显式指令才触发。🔗 [Issue](https://github.com/google-gemini/gemini-cli/issues/21968)

6. **#26525 [P2/安全] Auto Memory 缺乏确定性脱敏** — 转录内容先进入模型上下文后才做密钥脱敏，存在敏感信息泄露风险，安全问题需重点关注。🔗 [Issue](https://github.com/google-gemini/gemini-cli/issues/26525)

7. **#22267 [P2] Browser Agent 忽略 settings.json 配置覆盖** — maxTurns 等配置完全失效，AgentRegistry 读取合并逻辑存在缺陷。🔗 [Issue](https://github.com/google-gemini/gemini-cli/issues/22267)

8. **#24246 [P2] 工具数量 >128 时触发 400 错误** — 工具过多时 API 直接报错，社区期望智能限制工具作用域。🔗 [Issue](https://github.com/google-gemini/gemini-cli/issues/24246)

9. **#22186 [P1] get-shit-done output hook 导致崩溃** — 输出 summary 阶段反复崩溃 CLI，P1 级稳定性问题。🔗 [Issue](https://github.com/google-gemini/gemini-cli/issues/22186)

10. **#21335 [P2] /compress 压缩结果不持久化** — 会话恢复后压缩丢失，token 节省效果归零，影响长期会话成本。🔗 [Issue](https://github.com/google-gemini/gemini-cli/issues/21335)

---

## 4. 重要 PR 进展

1. **#29443 [已合并，P1] 支持 Gemini 3.8 Flash 与 3.5 Flash Lite** — 新模型 GA 接入，今日最重要功能变更。🔗 [PR](https://github.com/google-gemini/gemini-cli/pull/29443)

2. **#29451 [P1] 限制工具输出大小并优化长循环内存生命周期** — 解决长时间运行 agent 的内存无界增长问题。🔗 [PR](https://github.com/google-gemini/gemini-cli/pull/29451)

3. **#29468 [已合并，P1] 连接恢复时显示重试进度** — 修复 429/503 错误时 UI 卡在 "Thinking..." 的问题。🔗 [PR](https://github.com/google-gemini/gemini-cli/pull/29468)

4. **#29265 [已关闭] 防止中断回合导致的会话上下文污染** — SIGINT/超时中断后破坏会话历史、影响后续 prompt 执行的关键修复。🔗 [PR](https://github.com/google-gemini/gemini-cli/pull/29265)

5. **#29359 修复 web_fetch 丢失表格数据** — HTML 表格被拍平为无分隔字符串，修复后结构化数据可正确传递给模型。🔗 [PR](https://github.com/google-gemini/gemini-cli/pull/29359)

6. **#29354 [P2] rootless Podman 沙箱使用 --userns=keep-id** — 修复挂载目录 EACCES 错误（node-gyp 构建失败），利好容器沙箱用户。🔗 [PR](https://github.com/google-gemini/gemini-cli/pull/29354)

7. **#29358 修复 Ctrl+R 反向搜索高亮偏移** — 处理大小写映射回原文本，含回归测试。🔗 [PR](https://github.com/google-gemini/gemini-cli/pull/29358)

8. **#27754 [已合并，P1] a2a-server 501 响应后补充 return** — 修复 A2A 服务器崩溃。🔗 [PR](https://github.com/google-gemini/gemini-cli/pull/27754)

9. **#27863 [已合并，P1] 工具调用优先使用结构化显示标题** — 修复 #23018，改善工具调用 UI 展示。🔗 [PR](https://github.com/google-gemini/gemini-cli/pull/27863)

10. **#19013 [P1] 修复 Windows 扩展更新 EBUSY 锁错误** — Windows 下删除旧扩展目录时文件被占用导致更新失败。🔗 [PR](https://github.com/google-gemini/gemini-cli/pull/19013)

---

## 5. 功能需求趋势

| 方向 | 代表 Issue | 趋势判断 |
|---|---|---|
| **子代理架构与可靠性** | #22323, #21409, #20195, #22598 | 最活跃方向，覆盖错误上报、挂起恢复、轨迹共享 |
| **记忆系统（Auto Memory）** | #26525, #26522, #26523, #26516 | 安全脱敏 + 质量改进集中提交，为近期重点投入区 |
| **沙箱与安全执行** | #19873, #22672 | 社区力推零依赖 OS 沙箱与破坏性命令防护 |
| **上下文/Token 优化** | #22745, #19561, #18836, #21335 | AST 感知读取、手术式提取、持久化任务追踪呼声高 |
| **新模型支持** | PR #29443 | Gemini 3.8 Flash 系列已落地 |

---

## 6. 开发者关注点

- **稳定性痛点**：agent 挂起（#21409）、中断污染上下文（#29265）、长任务内存膨胀（#29451）构成稳定性三连击，是开发者最频繁抱怨的运行时问题。
- **安全与隐私**：Auto Memory 在脱敏前将本地转录送入模型上下文（#26525），企业用户对日志与敏感数据处理存有顾虑。
- **配置一致性**：Browser Agent 忽略 settings.json（#22267）、symlink 代理不被识别（#20079）、`/compress` 不持久化（#21335），配置“写了不生效”类问题积累较多。
- **工具规模上限**：>128 工具触发 400（#24246），重度 MCP/扩展用户期待智能工具筛选机制。
- **模型自主性**：模型不主动使用 skills/sub-agents（#21968）、滥用临时脚本污染工作区（#23571），反映对行为约束与引导策略的需求。

---
*数据来源：github.com/google-gemini/gemini-cli | 统计窗口：过去 24 小时（Issues 50 条 / PRs 39 条）*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-24 | 数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

v1.0.89-1 发布，新增 GPT-6 Sol / GPT-6 Luna 模型选项，并修复了 View 工具行范围解析与本地会话消息队列的两个体验问题。社区方面，context-memory（`store_memory` 失败、compaction 无限重试）与认证令牌刷新失效是当前讨论最集中的技术痛点；BYOK 用户报告 DeepSeek 兼容性再次回归。今日仅 1 个 PR 更新，仓库处于版本发布后的消化期。

---

## 2. 版本发布

### v1.0.89-1

**Added**
- 模型选择器新增 **GPT-6 Sol** 和 **GPT-6 Luna**（可用时显示）

**Fixed**
- View 工具现在能正确处理 provider 发送的扁平化 `view_range` 参数中的行范围
- 本地会话中，聊天输入框为空时按 ↑ 可召回待发送消息，且不再打断排队中的 prompts

---

## 3. 社区热点 Issues

1. **#4535** `store_memory` 在 v1.0.81 预发布版中稳定失败：`Instance id is required`（10 评论，已关闭）
   记忆写入核心路径缺陷，影响 context-memory 功能可用性，是本期讨论最多的 issue，近期已修复关闭。

2. **#2421** HTTP/2 GOAWAY 竞态导致级联重试失败并静默浪费 premium 请求（8 评论，19 👍，已关闭）
   合并了 5 个重复 issue，涉及 undici 连接池内部状态不变量被破坏，是企业用户最关心的计费/稳定性问题。

3. **#2995** 无法使用 DeepSeek API（9 评论，9 👍，已关闭）
   BYOK 经典问题，但注意 #4840 显示同类问题近期复发，说明第三方 provider 兼容性仍有反复。

4. **#4847** 自动 managed-settings 刷新破坏 IDE MCP 重载并禁用 /allow-all（4 评论，OPEN）
   长会话 + VS Code 连接场景下的策略执行失败，影响企业管控工作流。

5. **#4663** Compaction 失败后每轮原样重试：无退避、无降级、计费持续增长、无用户可见错误（3 评论，OPEN）
   涉及真金白银的无界重试，且上下文单调增长，是当前最高风险的 open bug 之一。

6. **#4929** 进程内 auth token 停止刷新，所有 prompt 失败直至重启（3 评论，OPEN）
   新提交（09-22），/login 也无法恢复，长会话用户的高频痛点。

7. **#4840** BYOK 与 DeepSeek 再次失效：400 错误 `tools[4].type: unknown variant 'custom'`（2 评论，OPEN）
   昨日仍有更新，疑似近期版本回归，与 #2995 呼应，BYOK 用户需警惕。

8. **#4594** 自定义 agent 的 `web`/`search` 工具别名在 1.0.81-9 上绑定零工具，静默禁用 web + 文件搜索（2 评论，OPEN）
   无任何报错和日志，属于典型的“静默失效”类缺陷，排障成本高。

9. **#4512** MCP registry 策略拉取失败时，本地 stdio MCP server 也被“fail closed”全部阻断（2 评论，OPEN）
   过度防御式设计：无企业管控在场的个人用户也被波及，架构层面值得讨论。

10. **#4724** 请求空闲时按 prompt cache TTL（约 5 分钟）自动 compaction（1 评论，09-24 更新）
    精准的成本优化提案：避免空闲后全量重读未缓存上下文带来的延迟和费用。

---

## 4. 重要 PR 进展

过去 24 小时仅 1 个 PR 更新：

- **#4948** [OPEN] 更新 `actions/github-script` pin 至 v9.0.0 commit
  纯 CI 依赖维护：仓库无运行时依赖清单，作者已核对其余 Actions pin 均为最新，`git diff --check` 通过。

> 本期为版本发布后阶段，功能类 PR 活跃度低，值得关注 issue 列表中的修复进展（如 #4535、#2421 均已关闭，对应修复应已随近期版本落地）。

---

## 5. 功能需求趋势

- **自定义模型端点 / BYOK**：#4003（自定义 endpoint 对齐 VS Code）、#2995、#4840 —— 第三方/本地模型接入是持续热点
- **上下文与成本管理**：#4724（按 cache TTL 自动 compaction）、#4663（compaction 重试治理）、#1688/#2333 系列
- **后台任务可视化**：#1783（子 agent 折叠面板）、#2682（长命令实时输出 UI）—— 多 agent 可观测性需求上升
- **权限与自动化**：#3877（启动时自动 /allow-all）、#3331（插件启动自动更新）
- **可配置性与 MCP 生态**：#4512（MCP fail-open 降级）、#4901（Atlassian MCP OAuth）、#4521（沙箱禁用）

## 6. 开发者关注点

- **静默失败是最大痛点**：工具绑定失败（#4594）、compaction 重试（#4663）、GOAWAY 计费浪费（#2421）都缺少用户可见的错误信号，社区反复呼吁更好的可观测性
- **长会话稳定性**：token 刷新失效（#4929）、managed-settings 刷新失败（#4847）、agent 卡死（#2533）均发生在长时间运行场景
- **第三方 provider 兼容性反复**：DeepSeek 相关问题关闭后又复发（#2995 → #4840），回归测试覆盖不足
- **Voice 模式安装受阻**：#4667、#4814 均因内部 Foundry Local NuGet feed 401 失败，疑似基础设施配置问题，建议关注官方修复

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-24 | 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)**

---

## 1. 今日速览

今日 Kimi Code CLI 仓库无新版本发布，也无活跃的 PR 更新。社区焦点集中在一条高严重性安全类 Issue 上：有用户报告 Agent 在 yolo 权限模式下误删了工作区外的用户数据（#2596），该问题涉及权限边界与文件操作安全，值得所有使用宽松权限模式的用户警惕。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

今日仅 1 条 Issue 有更新：

- **#2596 [OPEN] Agent 在工作区外对已存在目录执行 `rm -rf`，删除用户会话数据**
  作者：@iMaxTomas | 创建：2026-08-07 | 👍 0 | 评论 1
  🔗 [MoonshotAI/kimi-cli Issue #2596](https://github.com/MoonshotAI/kimi-cli/issues/2596)

  **为什么重要：**
  - 这是典型的**权限逃逸 + 破坏性命令**安全事故：Agent 在清理自己创建的 symlink 时，未察觉 `ln -sfn` 实际已失败（目标为真实目录而非链接），随后对 `~/.pi/agent/sessions` 这一工作区外的路径执行了删除操作。
  - 暴露了 yolo（自动批准）模式下的核心风险：Agent 对文件系统状态的**假设未经验证**即执行不可逆操作。
  - 该 Issue 已存在近两个月（8月创建，9月23日仍有更新），说明社区持续关注官方是否会在路径保护、命令执行前校验等方面给出修复。
  - **对用户的启示**：在生产环境或含敏感数据的机器上慎用 yolo 模式，重要数据保持备份。

---

## 4. 重要 PR 进展

过去 24 小时无 PR 更新。

---

## 5. 功能需求趋势

基于今日可用数据（仅 1 条活跃 Issue），可提炼的方向为：

- **安全性与沙箱边界**：破坏性命令（`rm -rf` 等）的硬性路径白名单/黑名单、工作区外操作的强制确认，是社区对 Agent 类 CLI 工具的刚性需求。
- **文件系统操作的可观测性**：Agent 在执行前应验证目标实际状态（如 symlink 是否创建成功），并在失败时感知并调整，而非基于假设继续执行。

---

## 6. 开发者关注点

- **yolo 模式的风险治理**：开发者需要在“免确认流畅性”与“数据安全”之间取得平衡，期待更细粒度的权限策略（如按命令危险等级分级授权）。
- **Agent 自我校验能力**：命令执行失败后的状态感知与纠错，是当前用户报告的主要痛点之一。
- **今日整体活跃度较低**（0 Release、0 PR、1 Issue），建议明日继续关注 #2596 的官方回复与后续安全修复进展。

---

*本日报基于过去 24 小时 GitHub 数据自动汇总，如有遗漏请以仓库实际内容为准。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-24

## 📰 今日速览

今日无新版本发布，但社区开发活动非常活跃——一天内出现多个高质量修复 PR，核心贡献者 @rekram1-node 集中提交了 Copilot Responses 端点路由、Gemini schema 处理、输出上限自适应等一系列关键修复。付费用户侧最值得关注的是 Console 迁移导致 Go 订阅工作区丢失的问题（#50201），已有 8 条评论且持续发酵。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#50201](https://github.com/anomalyco/opencode/issues/50201) 付费账号在 Console 迁移中丢失** — OPEN | 👍4 | 💬8
   付费 Go 工作区在 Console 迁移后不可见，订阅、用量和发票全部消失，用户被迫进入空白组织。直接影响付费用户信任，是今日最紧急的运营类问题。

2. **[#50678](https://github.com/anomalyco/opencode/issues/50678) MiMo 2.6 Flash 陷入无限循环不可用** — OPEN | 💬2
   新模型在多次迭代后疯狂重复 Glob/Find/Read 调用导致不可用，反映新模型接入的质量保障问题。

3. **[#50172](https://github.com/anomalyco/opencode/issues/50172) v1 文件插件加载器存在 v2 default export 回退缺陷** — OPEN | 💬3
   存在 v2 default export 时，v1 legacy named exports 永远不会被回退加载，与 V2 插件迁移生态问题直接相关。

4. **[#48365](https://github.com/anomalyco/opencode/issues/48365) [2.0] V1 插件无迁移路径、headless 自定义命令失效** — OPEN | 💬2
   Beta 测试中发现四项独立缺陷 + 文档缺口，V1→V2 迁移是当前 2.0 发布的核心阻力。

5. **[#47398](https://github.com/anomalyco/opencode/issues/47398) [2.0] openai-compatible 模型不发送 max_tokens** — OPEN | 👍1
   v2 CLI 中 `limit.output` 配置被忽略，thinking 输出被 provider 默认值截断。已有对应修复 PR（#51021）。

6. **[#50751](https://github.com/anomalyco/opencode/issues/50751) 后台 subagent 完成后父会话收不到通知** — OPEN | 💬2
   子代理回合已完成并持久化，但父会话无限等待，多代理编排可靠性的关键缺陷。

7. **[#44935](https://github.com/anomalyco/opencode/issues/44935) TUI 中单波浪号内容被渲染层吞掉** — OPEN | 💬2
   `3~5`、`30~60%` 等文本在 TUI 渲染时丢失，数据本身完好，纯渲染层 bug。

8. **[#39170](https://github.com/anomalyco/opencode/issues/39170) Desktop 行内 LaTeX 公式不渲染** — OPEN | 👍2
   `$$...$$` 块级正常但 `$...$` 行内公式显示原始代码，影响数学/技术内容阅读体验。

9. **[#48925](https://github.com/anomalyco/opencode/issues/48925) ACP agent 在 PowerShell 进程启动脚本上卡死** — OPEN | 💬2
   Rider IDE 中插件频繁卡在 `$log`、`$exe` 等脚本命令上，反映 IDE 集成在 Windows 环境的稳定性问题。

10. **[#38857](https://github.com/anomalyco/opencode/issues/38857)（已关闭）无密码 `opencode web` 服务器被植入挖矿程序** — 💬3
    安全类重磅案例：`0.0.0.0:4096` 无鉴权默认配置导致两台主机被部署 XMRig 挖矿，凸显默认安全配置的重要性。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#51021](https://github.com/anomalyco/opencode/pull/51021) 输出上限自适应上下文窗口** — OPEN
   修复 V2 仅在 Anthropic 路由发送输出限制的问题，其他路由全部回落 provider 默认值。同时关闭 #46595 与 #47398。

2. **[#51026](https://github.com/anomalyco/opencode/pull/51026) Copilot 模型解析到内置 SDK 和 Responses 端点** — OPEN
   修复 Copilot 上 Grok/Gemini/MAI Code 被错误发送到 `/chat/completions` 导致的失败。

3. **[#51017](https://github.com/anomalyco/opencode/pull/51017) 按模型名应用 Gemini/Kimi schema 处理** — OPEN
   #51009 的后续：解决经 OpenRouter/Vercel Gateway 等 OpenAI 兼容端点访问 Gemini 时的 schema 兼容问题。

4. **[#48501](https://github.com/anomalyco/opencode/pull/48501) Console/Go 设备流登录（contributor）** — OPEN
   全平台统一通过 Console 设备登录，Console 托管 provider 归组为单一区块，是账号体系整合的关键一步。

5. **[#49229](https://github.com/anomalyco/opencode/pull/49229) Provider 请求头与 chunk 超时默认 5 分钟** — OPEN
   为响应头等待和流式 chunk 间隔分别设置 300s 超时，约束长时间无响应的挂起请求。

6. **[#50422](https://github.com/anomalyco/opencode/pull/50422) 恢复 GitLab workflow 发现 + OAuth 登录（contributor）** — OPEN
   修复内置 GitLab Duo provider 的 workflow 发现回归，并新增 OAuth 支持。

7. **[#51009](https://github.com/anomalyco/opencode/pull/51009) Gemini 工具 schema 改用 parametersJsonSchema** — 已合并
   摒弃有损的 legacy `parameters` 投影，原生 Gemini 协议全面切换到完整 JSON Schema 传递。

8. **[#51019](https://github.com/anomalyco/opencode/pull/51019) 失败查询后重试实例状态** — OPEN
   修复 Effect `ScopedCache` 缓存失败结果导致单个配置文件错误永久阻塞实例状态读取的问题。

9. **[#50892](https://github.com/anomalyco/opencode/pull/50892) TUI 工具调用显示耗时** — OPEN
   为工具调用增加运行时长展示，改善执行过程可见性（同日还有 #51025 为 subagent 选择器加 token 成本展示）。

10. **[#50188](https://github.com/anomalyco/opencode/pull/50188) V1 会话迁移时标注已重命名的 legacy 工具** — 已关闭/处理
    迁移后的历史中保留原工具名注释，避免模型调用已不存在的 `bash`/`task`/`todowrite` 时才报错。

---

## 📈 功能需求趋势

- **V2 / 2.0 迁移生态**：V1 插件兼容、迁移路径、V2 API 文档是当前最大的呼声集中区（#48365、#50172）。
- **多模型接入质量**：Copilot Responses 路由、Gemini schema、MiMo 循环、Zen 模型可用性——新模型/网关接入的健壮性持续承压。
- **可观测性增强**：工具耗时、token 成本、用量指标 API（#38824）等透明化需求上升。
- **IDE / 桌面端体验**：Desktop 的 LaTeX 渲染、git worktree、RTL 布局、ACP 在 JetBrains 中的稳定性。
- **安全默认值**：`opencode web` 无鉴权暴露事件后，社区对安全默认配置与访问日志的诉求明显。

---

## ⚠️ 开发者关注点

1. **付费账号可靠性**：Console 迁移丢订阅（#50201）、周限额误报（#38855）等问题直接影响付费用户留存，需要运营侧快速响应。
2. **V2 beta 的破坏性变更**：插件无法加载、headless 命令失效、权限校验被 shell 工具绕过（#38664）——2.0 发布前需系统性收口。
3. **headless/JSON 输出不完整**：`opencode run --format json` 丢事件（#31435、#38661）是 CI/自动化场景的长期痛点。
4. **多代理编排稳定性**：subagent 完成通知丢失（#50751）表明后台任务生命周期管理仍有缺陷。
5. **Windows / 国际化兼容**：PowerShell 卡死、CJK IME 误提交（#35746）、阿语 RTL 布局等问题提示平台适配测试覆盖不足。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-24

## 一、今日速览

今日社区活跃度集中于**多智能体协作与跨机运行**方向：PR #12582 提出让 Agent 运行在其他计算机上、绑定 Codex/Claude Code 并通过 A2A 共享，是 #11206 本地协作之上的重要延伸。Issue #12380（Managed Agent 双路径架构提案）以 11 条评论领跑讨论，显示社区对 Session 持久化与多 Agent 分发的强烈关注。此外发布 v0.24.4-nightly，重点修复 deferred-tool 相关文档与测试缺口。

## 二、版本发布

- **v0.24.4-nightly.20260923.d0cd622a68**：修复 deferred-tool bridge 导致的过时/未测试内容（PR #12355），并更新相关文档计划。
- **cua-driver-rs v0.20.11**：预编译二进制更新——macOS 提供签名+公证的通用二进制及 `QwenCuaDriver.app`；Linux 支持 x86_64/arm64（glibc ≥ 2.31）；Windows 提供 UIAccess worker 与原生 SDK payload。

## 三、社区热点 Issues

1. **#12380** [P2] Managed Agent 双路径架构提案 — 保留现有 TS agent loop，使模型推理与工具环境供给解耦，Session 获得持久所有权与可恢复的工具执行。评论 11 条，为近期最热架构讨论。
2. **#12185** [P1] web-shell 发布包存在无法解析的 `@/` 类型导入并内联六个运行时依赖 — 已通过发布管线触达 npm 用户，P1 级包装质量问题。
3. **#12553** [P2] 项目重命名/移动导致已保存 Session 不可达 — 用户实际痛点，Session 按绝对路径派生目录名，已催生修复 PR #12592。
4. **#11966** [P2] Desktop 应用工具调用块渲染为空 — 用户无法在批准前核对 Edit/Shell 内容，直接影响信任与安全体验。
5. **#12514** [P2] Session-commit 注册未覆盖所有提交路径，导致误报 “非本会话提交” 而 amend 被阻断 — Git 工作流安全护栏的误伤问题。
6. **#11198** [P1，已关闭] 遥测上传未经脱敏的原始工具错误文本（含 shell 命令行）至 RUM — 高优先级隐私问题，现已关闭。
7. **#12584** [P2] Runtime Broker 在调用结束后未对超时工具执行做 fencing — SDK-Java 侧会话释放被阻塞，影响 daemon 稳定性。
8. **#12405** [P2] one-shot headless 启动延迟与内存基线优化 — 承接 #12340（RSS 660→434MB）后的下一步性能工作。
9. **#12326** [P2] 静态手工维护的 eager tool 列表应可自动选择且不使 prompt prefix 失效 — 长上下文/token 管理路线图关键一环。
10. **#12589** [P3] System One Decision Gate 提案（本地小模型分类路由，跳过昂贵推理）— 同日即有对应实现 PR #12590，社区响应迅速。

## 四、重要 PR 进展

1. **#12582** 跨机运行 Agent + 绑定 Codex/Claude Code + A2A 共享 — 基于 #11206 的分布式协作扩展，今日新开。
2. **#11206** 持久化共享线程 Agent 协作（mesh）— Agent 身份、任务分配、打断、取消与审查的完整协作闭环。
3. **#12492** `/batch-api` 工作流 — 新增 Batch API 传输（submit/status/fetch/cancel）及 agent 判断任务适配性的批量执行体验。
4. **#12258** MCP 增强：支持大型 App、作用域工具调用与来源隔离 — 已在远程 HTTPS 实例验证生产组件。
5. **#12592** 项目移动后的显式 resume 恢复 — 跨项目目录有界查找 + 交互确认，直接修复 #12553。
6. **#12587** Desktop 更新检查环境变量开关（`QWEN_DESKTOP_DISABLE_UPDATES=1`）— 快速响应 #12575 需求。
7. **#12590** System One Decision Gate（Von 分类模型 + `/superfast`）— 默认关闭、fail-open 设计。
8. **#12540** 关闭 `/context` 统计的 deferred 跟进项 — token 会计准确性修复系列。
9. **#9417** 权限规则切分排除 heredoc 主体 — 使 `Bash(python *)` 能正确匹配 Python heredoc，修复 #9381。
10. **#12559** OpenTUI popup 几何与补全截断对齐 ink 行为 — 终端渲染一致性修复。

## 五、功能需求趋势

- **多 Agent / 分布式协作**：#12380 架构提案、#11206/#12582 PR 链、A2A 共享，是当前最强主线。
- **Session 管理健壮性**：项目移动恢复（#12553）、会话历史关键词搜索（#6824）、turn 级 transcript 导航（#12398、#12591）。
- **性能与 token 成本**：headless 启动延迟（#12405）、agent 描述过长（#12272）、eager tools 自动选择（#12326）、System One 门控（#12589）。
- **Web Shell / Desktop 体验**：包装质量（#12185）、Live 走 Web Shell 端点（#12530）、更新检查可控（#12575/#12587）。
- **安全与 Windows 平台**：NTFS 文件 ID BigInt 系列跟进（#11848 → #12574、#12578）、commit 归属护栏（#12514）。

## 六、开发者关注点

- **发布质量门槛**：web-shell 包缺陷直达 npm（#12185）、CI helper 测试 repo 级失败（#11937）、Windows 夜间红（#12270）、E2E Smoke 超时（#12593），表明发布管线与测试基建仍是高频摩擦点。
- **Windows/文件标识安全**：`isSameFile` 及 inode 比较在 2^53 以上 fail-open 的系列跟进占多个 issue/PR，跨平台文件身份校验需系统性收口。
- **隐私合规**：遥测原始错误文本未脱敏（#11198）虽已关闭，但提示 telemetry 管道需持续审计。
- **会话可移植性**：Session 与绝对路径强耦合是反复出现的用户痛点，社区期待更健壮的项目迁移方案。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-09-24）

## 1. 今日速览

今日无新版本发布，但 **0.10.2 权限安全系列（A/G/M/R 共 15+ 个 Issue）集中立项**，系统性地重构审批授权、Auto-Review 守护和 Full Access 权限模型，成为最重量级的动态。同时 0.10.1 发布准备持续推进，多个阻塞级 bugfix PR（审批卡死、deferred tool 首次调用、goal 恢复）已合入。模型侧 Agent 体验优化（#6488 “Agent affordances 六大缺口”）由官方一次性抛出 8 个配套 Issue，值得关注。

## 2. 版本发布

过去 24 小时无新 Release。0.10.1 仍在发布准备阶段（见 #6458 相关 CI/发布 PR）。

## 3. 社区热点 Issues

1. **#5316 EPIC-005: CodeWhale TUI Crate 拆解（Umbrella）** — 29 条评论的长期追踪 Issue，执行权威已迁移至 Linear（C03–C10），是理解项目架构演进的主线。[链接](https://github.com/Hmbown/Codewhale/issues/5316)
2. **#6310 ACP 后续：空终端响应与 Full Access 发现** — 10 条评论；原始 ACP 配置 bug 已修复，报告者在 Paseo 夜间版本中验证通过，是 0.10.0 的重要收尾。[链接](https://github.com/Hmbown/Codewhale/issues/6310)
3. **#6427 [bug] 0.10.0 回归：Windows Terminal 多行粘贴逐行自动提交** — #5981 的回归，直接影响 Windows 用户日常输入体验。[链接](https://github.com/Hmbown/Codewhale/issues/6427)
4. **#6421 [bug] deepseek-flash 模型报“不支持图片输入”** — 离线目录将 flash 模型错误标记为 text-only，修复 PR #6424 已部分合入，等待完整验证。[链接](https://github.com/Hmbown/Codewhale/issues/6421)
5. **#6418 [bug] 会话无法恢复** — Runtime store 版本不匹配导致 session restore 失败，属于数据兼容性硬伤。[链接](https://github.com/Hmbown/Codewhale/issues/6418)
6. **#6488 Agent affordances：harness 给模型良好行动条件的六大缺口** — 从“模型视角”审视 harness，已正式批准（2026-09-23），衍生出 #6489–#6494 一整组改进。[链接](https://github.com/Hmbown/Codewhale/issues/6488)
7. **#6481 0.11 A1：统一 Engine 持有的审批授权存储** — 当前 TUI/runtime/网络三套 grant store 互不共享，是权限体系重构的地基。[链接](https://github.com/Hmbown/Codewhale/issues/6481)
8. **#6475 0.10.2 G1：Auto-Review 区分“审查失败”与“审查拒绝”** — 审查失败不得伪装成安全裁决，未超时应回退给人类决策，安全设计理念清晰。[链接](https://github.com/Hmbown/Codewhale/issues/6475)
9. **#6473 0.10.2 M1+M2：进入 Full Access 须确认，默认仅本会话生效** — 修复 Shift+Tab 无确认直接进入无沙箱模式的隐患。[链接](https://github.com/Hmbown/Codewhale/issues/6473)
10. **#6426 模型自主触发 compaction（含 note-to-self）** — 社区提出的增强：允许模型在自选边界调用压缩工具，与引擎自动压缩互补。[链接](https://github.com/Hmbown/Codewhale/issues/6426)

## 4. 重要 PR 进展

1. **#6496 fix(runtime): 审批后的 run_verifiers 不再挂起** — 修复 0.10.1 桌面 QA 报告的 "stuck approval"，审批卡说明将写明后续行为。[链接](https://github.com/Hmbown/Codewhale/pull/6496)
2. **#6437 feat(tools): deferred tool 首次合法调用直接执行** — 消除每次延迟加载工具的白白一轮往返，弱模型不再死循环（配套 Issue #6494）。[链接](https://github.com/Hmbown/Codewhale/pull/6437)
3. **#6439 fix(goals): 用户再次发言时恢复 runtime 中断的 goal** — 0.10.1 dogfooding 中发现的发布阻塞项。[链接](https://github.com/Hmbown/Codewhale/pull/6439)
4. **#6438 feat(fleet): 被拒首次请求的已批准替代路由** — 如 pinned reviewer 模型额度耗尽时自动换路由，提升 Fleet 可用性。[链接](https://github.com/Hmbown/Codewhale/pull/6438)
5. **#6428 fix(tui): 保留 Windows 原生粘贴保护** — 针对 #6427 回归的修复，但故意保持 Issue 开放至真实 Windows Terminal 验收。[链接](https://github.com/Hmbown/Codewhale/pull/6428)
6. **#6424 fix(models): 离线目录恢复 DeepSeek Flash 图片输入** — 部分修复 #6421，等待报告者路由与 Windows 路径验证。[链接](https://github.com/Hmbown/Codewhale/pull/6424)
7. **#6483 fix(tui): undo 正确回滚对应回合的文件** — 修复 VS Code 客户端保存的会话中 undo 分叉对话且文件留在磁盘的问题。[链接](https://github.com/Hmbown/Codewhale/pull/6483)
8. **#6408 feat(providers): 新增 Yolo-Auto 兼容主机** — 数据驱动的 OpenAI Chat Completions 网关接入，无需新增 ProviderKind。[链接](https://github.com/Hmbown/Codewhale/pull/6408)
9. **#6440 build: 每次开发构建持机器级锁** — 多 agent 共享一台内存受限 Mac 的构建协调方案，反映 dogfooding 强度。[链接](https://github.com/Hmbown/Codewhale/pull/6440)
10. **#6461 ci: macOS 预算/评测任务与 Test 并行** — 解决自托管 Mac runner 串行排队（单日 14 个）导致 7 个 PR 失败的 CI 瓶颈。[链接](https://github.com/Hmbown/Codewhale/pull/6461)

## 5. 功能需求趋势

- **权限与安全模型重构（最热）**：0.10.2/0.11 的 A/G/M/R 系列覆盖统一授权存储（#6481）、网络审批按 host+协议+端口 键控（#6484）、命令前缀白名单收紧（#6482）、Auto-Review 守护闭环（#6475–#6480）、Full Access 徽章与确认（#6470/#6473）。
- **模型侧 Agent 体验**：让模型感知上下文压力与预算（#6490）、非阻塞提问（#6489）、子 agent 结果机器可验证回执（#6492）、每会话 scratch 目录（#6491）。
- **上下文管理**：模型自主 compaction（#6426）、compaction 前软提醒（#6425）。
- **模型兼容性**：DeepSeek Flash 图像输入（#6421）、新 provider 网关接入（#6408）。
- **平台输入体验**：Windows Terminal 多行粘贴回归（#6427）。

## 6. 开发者关注点

- **0.10.0 回归问题**：多行粘贴（#6427）、会话恢复（#6418）等升级后问题集中出现，建议 0.10.1 落地后再升级。
- **审批交互可靠性**：审批后挂起（#6496）、权限变更不可见（#6470）是桌面端 dogfooding 的高频痛点。
- **弱模型友好度**：deferred tool 首调重试、Auto-Review 连续拒绝熔断（#6478）等设计明显在为能力较弱的模型兜底。
- **CI/基础设施**：自托管 Mac runner 排队、release 测试竞态（#6462）、change detection 基准更新（#6463）占用了不少维护精力，说明多 agent 并行开发对基础设施压力显著。

---
*数据来源：github.com/Hmbown/DeepSeek-TUI（Issues 42 条 / PRs 43 条 / Releases 0）*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 — 2026-09-24

## 1. 今日速览

今日无新版本发布，但 PR 活动密集：19 个 PR 更新中包含多项已合入的重要改动，包括**扩展 API 终于可以访问 provider 原始流事件**（#9901，解决长期争议的 #9784）、**图像与分类器模型基础设施统一**（#9948）以及 **GPT-6 上下文限制修正**（#9964）。Issues 方面，Windows 平台问题持续发酵：shell 解析非确定性行为（#9361）和 CJK IME 输入卡顿（#9497）均在今日更新，是 Windows 用户的核心痛点。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **#5653** [进行中] 迁移离 Shrinkwrap（21 评论）
   同时安装 `pi-ai` 和 `pi-coding-agent` 导致磁盘上出现两份 `pi-ai` 副本，因 provider registry 是模块级 Map，两副本互相隔离产生难以排查的 bug。这是包管理架构层面的老问题，讨论持续近三个月。
   链接：earendil-works/pi Issue #5653

2. **#7885** [已关闭] npm 搜索未索引 8 月 4 日后发布的 pi-packages（14 评论）
   新发布的包无法被 `npm search` 检索，导致 pi.dev/packages 画廊缺失新包——直接影响生态分发的可见性问题。
   链接：earendil-works/pi Issue #7885

3. **#7128** [已关闭] 默认系统提示中 PI_* 环境变量检查规则过度诱导 bash 调用（12 评论，13 👍）
   高赞 issue：新增的系统提示指引使 agent 频繁执行不必要的环境检查命令，影响 token 消耗与效率，反映社区对默认提示词质量的高度敏感。
   链接：earendil-works/pi Issue #7128

4. **#9843** [已关闭] 0.86.x 回归：长请求经 LiteLLM 代理中流报 `APIConnectionError`（12 评论）
   从 0.85.1 升级后出现的回归，同时影响 TUI 和 Pendant (VS Code)，是近期版本稳定性问题的典型代表。
   链接：earendil-works/pi Issue #9843

5. **#9361** [开放] Windows：加载扩展时 shellPath 被非确定性忽略，回退到 WSL bash.exe（10 评论）
   今日仍在更新。有效配置被静默忽略并落到 System32 的 WSL bash，非确定性使排查极其困难，Windows 用户核心痛点。
   链接：earendil-works/pi Issue #9361

6. **#9497** [开放] Windows：CJK IME 输入卡顿、候选窗口不显示（4 评论）
   今日更新。中文/日文/韩文输入在 Windows 上几乎不可用，`showHardwareCursor` 可绕过，对中文用户社区影响重大。
   链接：earendil-works/pi Issue #9497

7. **#9688** [已关闭] 回归：剪贴板复制失效（8 评论，2 👍）
   修复 #9618 的提交收紧了 OSC 52 触发条件，只检测到 SSH 才生效，容器内用户受害。典型的“修一个 bug 引入另一个”。
   链接：earendil-works/pi Issue #9688

8. **#9549** [开放] 大型会话每帧重渲染、每次 resize 重发整个 transcript（8 评论）
   双核机器上打满一个核心，性能问题在低端硬件上愈发凸显。
   链接：earendil-works/pi Issue #9549

9. **#9784** [已关闭] Meta-Issue：允许扩展访问响应中的厂商特有字段（5 评论）
   作者自嘲“冒着被封号的风险反复提”——`AssistantMessage` 被称为"Procrustean bed"（普罗克鲁斯特之床）。已被 #9901 解决，是扩展 API 表达力的标志性进展。
   链接：earendil-works/pi Issue #9784

10. **#9075** [开放] 压缩摘要继承会话 thinking level，高努力档位必然撞输出上限（4 评论，3 👍）
    自适应 thinking 模型上，压缩摘要的 thinking token 占用 max_tokens，导致确定性失败，影响所有重度使用长会话的用户。
    链接：earendil-works/pi Issue #9075

## 4. 重要 PR 进展

1. **#9901** [已关闭] 扩展可订阅 provider 流事件
   新增 `onProviderStreamEvent` 贯穿 pi-ai 与 agent core，扩展终于能拿到厂商特有字段，关闭争议已久的 #9784。
   链接：earendil-works/pi PR #9901

2. **#9948** [已关闭] 统一图像与分类器模型基础设施
   mitsuhiko 的大改动，重构模型系统以支持非 chat 模型类型，为多模态能力铺路。
   链接：earendil-works/pi PR #9948

3. **#9964** [已关闭] 修正 GPT-6 API 上下文限制
   GPT-6 Astra/Sol/Luna 上下文窗口设为 1,050,000 tokens，保留 128K 输出限制，附回归测试。
   链接：earendil-works/pi PR #9964

4. **#9459** [已关闭] 会话恢复时优先使用记录的 model_change
   修复 #9243：恢复会话不再被 provider 回显的模型名误导，采用 @pwguler 的诊断方案。
   链接：earendil-works/pi PR #9459

5. **#9956** [已关闭] Enter 键先绘制用户消息气泡再执行 preflight
   修复输入回车后消息气泡延迟出现的体验问题，采用乐观渲染策略。
   链接：earendil-works/pi PR #9956

6. **#9941** [已关闭] 中止后立即重新提交的提示不再丢失
   Escape 中止流式响应后快速重提交，原会被排队进永不排空的 steer 队列，现转为全新 prompt。
   链接：earendil-works/pi PR #9941

7. **#9977** [已关闭] 导出 scoped storage 一致性测试套件
   通过 `@earendil-works/pi-durable/testing` 暴露可注入 Vitest/Jest 适配器的一致性套件，利好第三方宿主实现。
   链接：earendil-works/pi PR #9977

8. **#9763** [已关闭] pi.dev 兼容性检查
   CI 架构调整：PR gate 成为唯一贡献者授权边界，PR 代码不进入特权 `pull_request_target` 任务，安全设计值得借鉴。
   链接：earendil-works/pi PR #9763

9. **#9880** [开放] 发布配置 JSON Schemas
   为 models.json / settings.json / keybindings.json / themes 生成 JSON Schema，编辑器自动补全指日可待。
   链接：earendil-works/pi PR #9880

10. **#8398** [开放] 颜色值与主题样式重构
    mitsuhiko 的 TUI 大重构：直接暴露颜色值，支持色彩运算，并为非终端界面（GUI）做准备，保留旧 API 向后兼容。
    链接：earendil-works/pi PR #8398

其他值得留意：#9988 修复模型把行号参数传成字符串导致显示 `25-2512` 这类荒谬行范围；#6881（进行中）让 provider 上报的计费成本优先于目录费率计算。

## 5. 功能需求趋势

- **扩展 API 表达力**：访问原始流字段（#9784→#9901）、prompt disposition 暴露（#9098）、扩展注册 provider 的可靠性（#8810、#9884）——扩展生态是当前最活跃的需求方向。
- **Windows 支持成熟度**：shell 解析（#9361）、IME 输入（#9497）、渲染性能（#9549）集中爆发，Windows 已成为质量洼地。
- **会话状态与恢复正确性**：模型恢复（#9243、#9884）、溢出恢复重放（#7724）、中止后的 tool call 残留（#9986）、队列消息丢失（#9886），长会话生命周期管理问题密集。
- **Provider/网关兼容性**：LiteLLM 回归（#9843）、负载均衡代理下的 reasoning item 重放（#9966）、GLM 5.x 空增量（#9674）、Bedrock 图片嵌套（#8643）。
- **计费与成本可观测性**：1h 缓存写入被按 5m 费率计费（#9210）、provider 上报成本（#6881）。
- **包生态基础设施**：npm 索引缺失（#7885）、Shrinkwrap 迁移（#5653）、包命名空间（#8834）。

## 6. 开发者关注点

1. **回归频发**：0.86.x–0.87.0 连续出现回归（剪贴板 #9688、LiteLLM #9843、Ollama 模型失效 #9858），部分用户被迫停留在 0.85.1，升级信心受挫。
2. **静默降级/回退行为**：shellPath 被忽略、defaultProvider 被间歇性替换，"非确定性 + 静默"组合是最受诟病的失败模式，社区呼吁 fail loudly。
3. **配置体验**：JSON Schema 发布（#9880）回应了配置项日益复杂带来的编辑体验诉求。
4. **扩展生命周期管理**：运行时重载安全（#9222、#7948）、扩展消息在 clearQueue 中丢失（#9886），SDK 宿主开发者对会话操作语义的健壮性有明确期待。
5. **重资源场景稳定性**：大 transcript 渲染、长流式响应 OOM（#9036）、高 thinking 档位压缩失败（#9075），重度用户持续撞到资源边界。

---
*数据来源：github.com/earendil-works/pi | 统计窗口：过去 24 小时（107 条 Issue 更新，19 条 PR 更新）*

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-09-24

## 一、今日速览

oh-my-pi 今日发布 **v18.3.0**，新增 AgentTool.docTopics 工具文档机制与 TOOL_INTERRUPT_ABORT_REASON 中断原因区分，同时 v18.2.11 修复了后台任务打断前台 Bash 调用和 Opus 5.5 mid-session effort 切换失效的问题。社区方面，Claude Opus 5.5 版本兼容问题（#12870）持续发酵，围绕扩展 SDK 的 RPC/子代理能力提案成为最活跃的功能讨论方向。

---

## 二、版本发布

### [v18.3.0](https://github.com/can1357/oh-my-pi/releases)
**@oh-my-pi/pi-agent-core**
- Added: 支持通过新的 `AgentTool.docTopics` 方法按需为 agent 工具生成文档
- Added: 新增 `TOOL_INTERRUPT_ABORT_REASON`，使可中断工具能够区分排队 steering、peer 消息或后台任务完成与完整的运行中止

### [v18.2.11](https://github.com/can1357/oh-my-pi/releases)
**@oh-my-pi/pi-agent-core**
- Fixed: 修复后台任务完成时会打断前台 Bash 和 eval 调用、导致这些调用被反复移入后台的问题

**@oh-my-pi/pi-ai**
- Fixed: 修复 Claude Opus 5.5 无法应用 mid-session 高 effort 切换的问题

---

## 三、社区热点 Issues

1. **[#2574] 扩展子代理生成原语提案（ctx.agents.spawn）** — 13 评论
   扩展目前只能通过 `ctx.models.complete()` 一次性调用模型，无法生成对 TUI Agent Hub 可见、可 steering 的子代理。这是扩展 SDK 能力边界的核心讨论，与近期多个 SDK PR 形成呼应。[链接](https://github.com/can1357/oh-my-pi/issues/2574)

2. **[#12870] Opus 5.5 需要 Claude Code 2.1.280+** — 12 评论，👍 7
   Anthropic 新模型发布即遇兼容问题：OMP 请求头携带旧版本号被 400 拒绝。新模型首发支持是社区最敏感的话题，与 v18.2.11 的 Opus 5.5 修复直接相关。[链接](https://github.com/can1357/oh-my-pi/issues/12870)

3. **[#12398] ask 工具占据屏幕底部时终端输出被截断** — 10 评论
   TUI 重绘 bug：ask 工具激活时用户需要阅读上方信息再作答，但显示不完整，影响核心交互流程。[链接](https://github.com/can1357/oh-my-pi/issues/12398)

4. **[#5372] 9 个子代理并发导致事件循环永久卡死（100% CPU）** — 9 评论，prio:p1
   事件循环阻塞时长指数级增长（0.5s → 82.4s）直至永不返回，所有子代理饿死、进程无法恢复。多子代理并发稳定性仍是硬伤。[链接](https://github.com/can1357/oh-my-pi/issues/5372)

5. **[#4991] 子代理无法选择精简 system prompt** — 8 评论
   Task tool 生成的子代理总是继承完整 harness system prompt，对紧耦合的编排代理是 token 浪费，社区对 prompt 灵活性的诉求明确。[链接](https://github.com/can1357/oh-my-pi/issues/4991)

6. **[#12884] 注册 openai-codex gpt-6-sol / gpt-6-luna 选择器** — 7 评论
   Codex CLI 已提供新 GPT-6 型号，OMP 未注册且未知选择器静默回退——模型选择器更新滞后 + 静默回退的双重问题。[链接](https://github.com/can1357/oh-my-pi/issues/12884)

7. **[#12961] bun 进程夜间膨胀至 24.7GB RSS，jetsam 杀进程丢失整个会话** — 5 评论
   ~55 个并发 bun 进程在无值守夜间运行后内存失控，macOS jetsam 一键团灭，暴露了大规模并发场景下的内存治理问题。[链接](https://github.com/can1357/oh-my-pi/issues/12961)

8. **[#10362] 审批门在缺少工具上下文时静默回退到 yolo + 空策略** — 5 评论
   安全性问题：4 处可选链调用点在 execute-time context 缺失时**fail open** 而非 fail closed，属于应该优先处理的安全加固项。[链接](https://github.com/can1357/oh-my-pi/issues/10362)

9. **[#12924] LSP 诊断在 write 创建被导入模块后保持过期（#12857 未修复）** — 7 评论，prio:p2
   writethrough 在文件落盘前发送 didOpen，真实 typescript-language-server 场景下仍复现，修复回归追踪值得关注。[链接](https://github.com/can1357/oh-my-pi/issues/12924)

10. **[#2230] 严格遵守 AGENTS.md 项目规则防止上下文漂移** — 6 评论
    对标 Claude Code 的 CLAUDE.md 遵循度，反映用户对规则 adherence 质量的持续不满，是体验侧的长期痛点。[链接](https://github.com/can1357/oh-my-pi/issues/2230)

---

## 四、重要 PR 进展

1. **[#10835] 扩展上下文暴露 agent 身份（ctx.agentIdentity）** — review:p2
   在 #10431 基础上重做的精简实现，扩展可感知自身运行于何种 agent 会话（子代理/主会话），是扩展 SDK 身份体系的基础。[链接](https://github.com/can1357/oh-my-pi/pull/10835)

2. **[#11618] RPC 将排队的 follow-up 提升为 steering** — review:p2
   新增 `promote_queued_message` RPC 命令与 `AgentSession.promoteQueuedMessage()`，补齐外部驱动场景下的消息调度控制。[链接](https://github.com/can1357/oh-my-pi/pull/11618)

3. **[#13061] 修复子代理模型切换后上下文窗口显示错误**
   直接修复今日 Issue #13058：fallback 后 Agent Hub 仍按初始模型的窗口计算用量条。[链接](https://github.com/can1357/oh-my-pi/pull/13061)

4. **[#12946] Nix CUDA 修复：onnxruntime CUDA EP 实际加载** — review:p0
   `cudaSupport = true` 不再静默回退到 CPU，正确链接 cuBLAS/cuDNN 运行时，Nix 用户的重要修复。[链接](https://github.com/can1357/oh-my-pi/pull/12946)

5. **[#12535] 加载 prompt 中提到的每个 /skill:name**
   从单 token 前缀匹配扩展为全 prompt 扫描，支持一句话触发多个技能，技能系统可用性大幅提升。[链接](https://github.com/can1357/oh-my-pi/pull/12535)

6. **[#13060] 展开的编辑预览在生成完成后显示完整 diff**
   区分流式阶段（保持视口上限）与完成阶段（显示全量 diff），改善编辑审批体验。[链接](https://github.com/can1357/oh-my-pi/pull/13060)

7. **[#11834 / #13027] RPC 提交也执行原生输入钩子** — 一对配套 PR
   修复 ompweb（RPC 通道）绕过输入钩子导致扩展在 Web 与终端间行为不一致的问题，是扩展一致性的关键修复。[链接](https://github.com/can1357/oh-my-pi/pull/11834)

8. **[#12151] 同名技能按命名空间保留而非丢弃**
   内容相同的技能静默合并，内容不同的以命名空间区分——解决技能安装镜像/symlink 场景的冲突问题。[链接](https://github.com/can1357/oh-my-pi/pull/12151)

9. **[#12273] 新增 `omp skills` 命令提供机器可读技能列表**
   供 ompweb 等外部 GUI 复用 OMP 的技能解析，避免重复实现，是生态互操作的基础设施。[链接](https://github.com/can1357/oh-my-pi/pull/12273)

10. **[#9009] browser-relay 回收孤儿 debugger 附件** — review:p1
    修复 relay 进程死亡后 Chrome debugger 附件与 infobar 永久残留的问题。[链接](https://github.com/can1357/oh-my-pi/pull/9009)

其他值得留意：[#13057 修复 ollama-chat 成本计价](https://github.com/can1357/oh-my-pi/pull/13057)、[#13054 热窗口配额阈值可配置](https://github.com/can1357/oh-my-pi/pull/13054)、[#9726 新增 AnySearch 搜索提供商](https://github.com/can1357/oh-my-pi/pull/9726)。

---

## 五、功能需求趋势

- **扩展 SDK 能力深化**（最显著）：#2574（可 steering 子代理）、#12979（RPC 协议扩展注册表）、#12990（扩展自定义配置键）、#12991（message_persisted 事件）——扩展作者正系统性提出“让功能完全活在扩展里”的通用接口诉求
- **新模型/提供商快速支持**：Opus 5.5 兼容、GPT-6-sol/luna 注册、Dakera 记忆引擎、Nous Portal 提供商——模型生态跟进速度是用户留存关键
- **多会话与子代理可观测性**：#8656（单进程多会话线程）、#13009（Agent Hub 显示 tok/s）、#13058（fallback 后窗口显示）
- **TUI 打磨**：计划修订时显示原计划（#5280）、blockquote 样式修复（#12988）、Glyph 字体策略（#12947）
- **企业/受限环境适配**：npm registry 覆盖（#9114）、FreeBSD 支持（#3538）、Nix CUDA 修复

---

## 六、开发者关注点

1. **稳定性是最大痛点**：事件循环卡死（#5372）、24GB 内存膨胀（#12961）、后台任务打断前台调用（v18.2.11 已修）——长时间/大规模并发运行场景的可靠性问题反复出现
2. **静默降级不受欢迎**：LiteLLM 发现超时静默回退丢 thinking（#11355）、模型选择器未知值静默回退（#12884）、Copilot fallback 掩盖 400 错误（#12901）、模型解析静默回退（#12943）——社区强烈要求“降级必须可见”
3. **安全性需加固**：审批门 fail-open 到 yolo（#10362）应尽快处理
4. **Token/成本效率**：子代理精简 prompt（#4991）、按需 advisor 咨询（#6274）——用户对 token 消耗精细化控制的需求上升
5. **规则遵循质量**：AGENTS.md adherence（#2230）是与竞品对比的核心体验差距之一

> 数据统计口径：过去 24 小时内更新的 Issues 共 102 条、PRs 共 183 条。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报

**日期：2026-09-24**
**仓库：[deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)**

---

## 📌 今日速览

今日核心动态是 **dsh-v0.1.7-rc.1** 候选版本的发布。作为 0.1.7 系列的首个 RC 版本，它汇总了自 v0.1.5-rc.3 以以来的主要变更，涵盖 Web 终端、会话归档管理和 MCP 资源能力增强三大方向。过去 24 小时内无新增 Issue 和 PR 动态，社区讨论整体平稳，处于版本验证窗口期。

---

## 🚀 版本发布

### dsh-v0.1.7-rc.1
🔗 [Release 链接](https://github.com/deepseek-ai/deepseek-harness/releases)

**新增功能：**

- **Web 侧边栏终端**：新增内嵌终端，支持多标签页、Shell 选择以及页面刷新后恢复会话状态。（贡献者：@LegGasai）
- **会话归档管理**：支持会话置顶、筛选与恢复，归档运行中会话时会提示确认受影响的任务，避免误操作。（贡献者：@tianyicui, @Yifffan, @LegGasai）
- **MCP 能力增强**：支持发现和读取资源、使用 URI 模板，扩展了与外部工具生态的互操作性。

> 💡 简评：Web 终端 + 会话归档的组合显著提升了浏览器端使用体验的完整性，MCP 资源支持则表明项目正在向标准化工具协议生态靠拢。建议生产环境用户关注 RC 版稳定性反馈后再升级。

---

## 🔥 社区热点 Issues

过去 24 小时内无 Issue 更新，本节今日省略。

---

## 🔧 重要 PR 进展

过去 24 小时内无 PR 更新，本节今日省略。

---

## 📈 功能需求趋势

由于今日无新增 Issue 数据，基于近期版本迭代方向可观察到以下趋势：

1. **Web 端体验补齐**：终端、会话管理等持续投入，浏览器端正逐步对齐桌面端能力。
2. **MCP 生态集成**：资源发现、URI 模板等支持表明 MCP 是明确的战略方向。
3. **会话与任务管理**：归档、恢复、置顶等精细化管理工作流成为高频迭代点。

---

## 🛠️ 开发者关注点

- RC 版本验证是当前重点，建议开发者关注 v0.1.7 正式版发布前的稳定性反馈。
- Web 终端刷新恢复、多 Shell 支持等新特性可能带来配置兼容性问题，升级前建议查阅 Release Notes 完整变更列表。

---

*数据来源：GitHub API，统计窗口为过去 24 小时。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*