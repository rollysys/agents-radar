# AI CLI 工具社区动态日报 2026-10-02

> 生成时间: 2026-10-02 04:40 UTC | 覆盖工具: 11 个

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

# AI CLI 工具生态横向对比分析报告 · 2026-10-02

---

## 1. 生态全景

AI CLI 工具已进入“深度扩展期”：头部产品（Claude Code、Codex）从单一编码助手演进为多 agent、多端（CLI/桌面/Web/移动）、插件化的开发平台。中型玩家（Gemini CLI、Qwen Code、OpenCode）则聚焦架构级重构（Managed Agent、v2、子代理体系）和成本治理。共性痛点高度收敛：挂起/超时类可靠性缺陷、Windows 平台兼容性、权限系统边界情况、以及企业级管控能力。同时，“无人值守长任务”和“多账号/配额管理”成为新的需求高地。

---

## 2. 各工具活跃度对比

| 工具 | 热点 Issues（条） | PR 更新（条） | Release | 今日焦点 |
|---|---|---|---|---|
| Claude Code | 10 | 5 | v2.1.287 | Claude Mods 插件机制发布；Artifact 分享问题簇 |
| OpenAI Codex | 10 | 10+ | **8 个**（rust-v0.160.0 + 7 alpha） | 发布节奏极快；Windows 桌面端问题爆发 |
| Gemini CLI | 10 | 10+ | v0.64.0-nightly | 多个 P1 安全修复；subagent 可靠性 |
| GitHub Copilot CLI | 10 | 1 | 3 个（v1.0.91~1.0.92-0） | sandbox CA 管理；企业管控缺陷集中 |
| Qwen Code | 10 | 10+ | v0.24.7-nightly | Managed Agent 双路径架构 Stage B–G 推进 |
| OpenCode | 10 | 10+ | 无 | v2 超时/挂起体系集中修复；社区贡献活跃 |
| Pi | 10 | 10+ | **v1.0.0** | 里程碑版本；TUI 全屏默认化适配问题 |
| oh-my-pi | 10 | 15+ | 3 个（v18.4.8–10） | 修复响应极快（当日报告当日修复） |
| DeepSeek TUI | 5 | 10 | 无（v0.10.1 集成中） | 集成分支收尾；汉化组发起 |
| Kimi Code CLI / DeepSeek Harness | — | — | — | 过去 24 小时无活动 |

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **挂起/超时与流可靠性** | OpenCode（≥6 个 issue 同根因）、Gemini CLI（#21409 无限挂起）、Pi（#10031 ESC 后卡死）、Codex（#31128 消息丢失）、oh-my-pi（#12398 输出截断） | 统一 stall 检测、重试上限、SSE 断流恢复是全行业最大工程痛点 |
| **子代理/多 agent 架构** | Claude Code（Hooks×Agents 隔离 #92533）、Gemini CLI（挂起/误报成功/不主动调用三类问题）、Qwen Code（Managed Agent 双路径）、oh-my-pi（Agent View 面板 #1627） | 多 agent 的隔离性、可观测性、生命周期管理是共性短板 |
| **Windows 平台兼容性** | Codex（windows-os 标签占新增 Issue 过半）、Claude Code（#85856）、oh-my-pi（连续回归）、OpenCode、Qwen Code（#13198） | Git Bash、WSL、conPTY、SSH 终端下的输入/编码/沙箱问题系统性存在 |
| **权限与安全边界** | Gemini CLI（4 个 P1 安全 PR：路径穿越/shell 注入/git 参数绕过）、Copilot CLI（#953 仓库级授权）、oh-my-pi（不可逆操作预选 Yes）、OpenCode（虚假署名 #52445） | 最小权限原则、沙箱逃逸防护、不可逆操作防护成为安全共识 |
| **多账号/配额与成本透明** | Codex（限额重置自动续跑 #21073）、Claude Code（限额误报 #54750）、oh-my-pi（凭证轮换/reset 消费安全）、Pi（真实计费取代估算）、Qwen Code（#12028 非会话 token 治理） | 付费用户对计量准确性和成本可观测的信任需求上升 |
| **企业级管控** | Copilot CLI（GHEC 数据驻留、托管模型策略、MCP 白名单 4 条 issue）、Claude Code（组织级分享默认） | 企业场景是 Copilot CLI 反馈主力，也是各家下一战场 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 插件生态扩展性（Mods）、Artifact 分享协作、桌面/Web 全端 | 付费专业开发者、团队协作 | 闭源、第一方深度集成、生态平台化 |
| **OpenAI Codex** | 云任务（gRPC 线程恢复）、Dot 多端集成、TUI 打磨 | ChatGPT 订阅用户（含 Pro 200 重度用户） | Rust 重写 + 云原生 + 高频 alpha 迭代 |
| **Gemini CLI** | 子代理体系、AST 感知代码理解、零依赖 OS 沙箱 | 开源社区、成本敏感开发者 | 开源 TypeScript、安全审计积极、Decision Gate 降延迟 |
| **Copilot CLI** | 沙箱 CA 信任管理、企业策略（GHEC/DR/MCP 管控） | GitHub 企业用户 | 深度绑定 GitHub 生态，企业合规优先 |
| **Qwen Code** | Managed Agent 双路径、Session 持久化、Hosted 执行 | 架构演进的长期主义者 | TS agent loop 与模型推理解耦，Java 控制平面，工程化分阶段交付 |
| **OpenCode** | 多 Provider 接入、本地模型体验、headless 自动化 | 自托管/开源模型用户 | Effect 架构、v2 重构期、社区驱动 |
| **Pi / oh-my-pi** | TUI 体验、多 Provider 目录与定价、多账号轮换、可编程 SDK | 终端原教旨主义者、重度多模型用户 | 开源 monorepo、迭代极快、社区 PR 生态活跃 |
| **DeepSeek TUI** | TUI 视觉打磨、插件/记忆生态、中文本地化 | 中文社区、个性化用户 | Rust + ratatui，创始人主导的艺术化路线 |

---

## 5. 社区热度与成熟度

- **第一梯队（成熟平台 + 高热度）**：Claude Code（Mods 议题 230 评论断层领先）、Codex（/undo 466 👍，8 版/天）。社区规模最大，但反馈重心已从“能不能用”转向“平台能力边界”。
- **第二梯队（快速迭代攻坚）**：Gemini CLI、Qwen Code、OpenCode——均处于架构重构/可靠性攻坚期，PR 与 Issue 高度对应，工程信号积极。oh-my-pi 以“当日修复”的响应速度成为小体量项目的质量标杆。
- **第三梯队（成长期/低活动）**：Pi（刚发布 v1.0.0，发布当天即被社区抓出 durable 缺陷，说明社区参与度健康）；DeepSeek TUI（issue 总量少但中文社区组织化起步）；Kimi Code CLI、DeepSeek Harness 近乎静默。
- **成熟度信号**：Qwen Code 的 follow-up 债务系统化追踪（3–36 条 Suggestion 级 follow-up）、Gemini CLI 的负责任披露 PoC，显示这两个项目已进入严肃的工程治理阶段。

---

## 6. 值得关注的趋势信号

1. **“可撤销性”成为新刚需**：Codex /undo（466 👍）+ 恢复 branch 选择器（46 👍）、Claude Code Artifact 版本固定、DeepSeek TUI 的 YOLO 模式之争——用户对 agent 高自主权的代价（误操作不可回滚）容忍度正在下降。工具选型时应考察 checkpoint/undo/sandbox 三件套的完备性。

2. **插件化从“扩展功能”走向“修改行为”**：Claude Code Mods 允许插件改深层运行行为，oh-my-pi/OpenCode/DeepSeek TUI 同步推进插件 OAuth provider 声明与结构化 hooks——CLI 工具正在复演 IDE 的插件平台化路径，第三方生态入口窗口正在打开。

3. **会话持久化与断点续跑是下一个竞争点**：Codex 的 gRPC 线程恢复、Qwen Code 的 Session 外部化与 fencing、Pi 的 pi-durable、Codex #21073 限额后自动续跑——“无人值守长任务”要求会话具备数据库级可靠性，这是 agent 从辅助工具走向生产系统的前提。

4. **成本与计费透明度直接影响付费信任**：Claude Code 限额误报、Pi 的 2–3 倍成本估算偏差、Qwen Code 非会话 token 治理、oh-my-pi 的智能分层路由（Jev）——真实计费数据接入和上下文成本压缩（AST 读取、Decision Gate）是可见的工程红利区。

5. **Windows 是全行业的质量分水岭**：十款工具中七款今日有 Windows 专属问题。Windows CI 覆盖不足（oh-my-pi main 分支 33 个测试失败）说明多数项目仍以 Unix 为主开发。Windows 重度用户选型时应优先考虑 Claude Code/Codex 一线产品，并暂缓采用刚发布的桌面版本。

6. **快节奏发版的回归代价正在显现**：Copilot CLI 1.0.89 两项回归、Codex 26.928 WSL 集体受阻、oh-my-pi 连续三次升级回归——alpha/nightly 节奏下，生产环境建议锁定稳定版并延迟 1–2 个周期升级。

---

*数据来源：各仓库过去 24 小时 GitHub 公开动态；热度指标（👍/评论数）为抓取时点数据，仅供横向参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

*数据来源：github.com/anthropics/skills（截止 2026-10-02）*

> ⚠️ 说明：本期 PR 评论数数据缺失（undefined），热度判断结合 PR/Issue 更新活跃度、关联 Issue 讨论量与存续时长综合评估。所有展示 PR 均为 **OPEN** 状态。

---

## 一、热门 Skills 排行（按综合活跃度）

| # | Skill | PR | 功能与讨论热点 | 状态 |
|---|-------|-----|---------------|------|
| 1 | **skill-creator 触发评估修复** | [#1298](https://github.com/anthropics/skills/pull/1298) | 修复触发评估误报、Windows 下 select() 失败、运行时错误被误判为非触发等核心问题。关联 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 条评论，0% 触发率）与 [#1383](https://github.com/anthropics/skills/issues/1383)，是社区反馈最集中的基础设施级修复 | OPEN（6月起持续更新至9月） |
| 2 | **mcp-builder MCP v2 兼容修复** | [#1742](https://github.com/anthropics/skills/pull/1742) | 适配 `mcp>=2.0` 的 `streamable_http_client` 重命名与自定义 Header 机制，修复 [Issue #1668]；呼应 [#1390](https://github.com/anthropics/skills/issues/1390) 中评估脚本对真实 MCP server 全部 0 分的问题 | OPEN（9月活跃更新） |
| 3 | **docx 技能双修复** | [#1792](https://github.com/anthropics/skills/pull/1792)、[#541](https://github.com/anthropics/skills/pull/541) | #1792 修复 LibreOffice 超时误报成功；#541 修复 OOXML `w:id` 共享 ID 空间冲突导致文档损坏（硬编码低 ID 与书签冲突）。docx 是使用频率最高的文档类技能，修复需求持续 | 均为 OPEN |
| 4 | **claude-api 模型退役更新** | [#1607](https://github.com/anthropics/skills/pull/1607) | 标记 4 个已退役模型 ID；关联 [#1487](https://github.com/anthropics/skills/issues/1487) 爆出的该技能单次注入 ~156k token 耗尽上下文窗口的严重问题 | OPEN（修复 #1603） |
| 5 | **pyxel 复古游戏开发** | [#525](https://github.com/anthropics/skills/pull/525) | Python 复古游戏创建/调试/验证，含 headless 运行与帧检查。来自 Pyxel 作者本人，存续 7 个月仍活跃，是创意类技能的代表 | OPEN（3月起） |
| 6 | **md2video-audio** | [#1703](https://github.com/anthropics/skills/pull/1703) | Markdown → Marp 幻灯片 → 带真人配音的 MP4 视频，零成本方案，覆盖“文档即视频”新场景 | OPEN |
| 7 | **skill-creator 打包脚本修复** | [#1681](https://github.com/anthropics/skills/pull/1681) | 修复 `package_skill.py` 直接执行时的 ModuleNotFoundError 与过时路径文档，降低贡献者门槛 | OPEN |
| 8 | **frontend-design 质量重写** | [#210](https://github.com/anthropics/skills/pull/210) | 重写官方前端设计技能，提升指令可执行性与内部一致性——罕见的“社区改进官方技能”案例 | OPEN（存续 9 个月） |

---

## 二、社区需求趋势

从高评论 Issues 提炼出五大方向：

1. **安全与信任边界**（最热，43 评论）：[#492](https://github.com/anthropics/skills/issues/492) 指出社区技能以 `anthropic/` 命名空间分发、冒充官方技能，构成权限提升风险。配套需求：[#1394](https://github.com/anthropics/skills/issues/1394) eval-viewer XSS、[#83](https://github.com/anthropics/skills/pull/83) 的 skill-security-analyzer。**社区明确要求官方/第三方技能的命名空间隔离与签名机制。**

2. **组织级分发与共享**（16 评论，8 👍）：[#228](https://github.com/anthropics/skills/issues/228) 要求组织内技能共享库/直链分享，替代手动 Slack 传 `.skill` 文件的原始流程；[#189](https://github.com/anthropics/skills/issues/189)（9 👍）抱怨插件重复安装浪费上下文。

3. **Skill 工程化与质量评估**：skill-creator 的评估体系问题集中爆发（[#556](https://github.com/anthropics/skills/issues/556)、[#1383](https://github.com/anthropics/skills/issues/1383)、[#202](https://github.com/anthropics/skills/issues/202) 已关闭），社区需要可靠的触发率测试与基准测试工具链。

4. **上下文经济性**：[#1487](https://github.com/anthropics/skills/issues/1487) 单技能 156k token 注入问题引发对 SKILL.md 渐进式加载/懒加载机制的诉求。

5. **高价值垂直技能提案**：智能体安全治理（[#412](https://github.com/anthropics/skills/issues/412)）、紧凑记忆符号系统（[#1329](https://github.com/anthropics/skills/issues/1329)）、推理质量门禁流水线（[#1385](https://github.com/anthropics/skills/issues/1385)）、以及企业文档场景如 SharePoint 权限处理（[#1175](https://github.com/anthropics/skills/issues/1175)）。

---

## 三、高潜力待合并 Skills（活跃 OPEN PR）

- **[#1298](https://github.com/anthropics/skills/pull/1298)** skill-creator 触发评估修复 —— 对应多个高评论 Issue，官方最有动力合并的基础设施修复
- **[#1742](https://github.com/anthropics/skills/pull/1742)** mcp-builder MCP v2 兼容 —— 修复依赖破坏性问题，9月底仍在更新，合并信号强
- **[#1792](https://github.com/anthropics/skills/pull/1792)** docx LibreOffice 超时/输出校验 —— 小而关键的可靠性修复
- **[#1607](https://github.com/anthropics/skills/pull/1607)** claude-api 模型退役标记 —— 事实性文档修正，门槛低
- **[#1681](https://github.com/anthropics/skills/pull/1681)** skill-creator 打包脚本修复 —— 改善贡献者体验
- **[#525](https://github.com/anthropics/skills/pull/525)** pyxel 复古游戏开发 —— 上游作者亲自维护，长期打磨，创意类最有希望转正

---

## 四、生态洞察（一句话总结）

**社区最集中的诉求已从"提交新技能"转向"可信与可持续的技能工程"——即官方/第三方的信任边界隔离、组织级分发机制、可靠的触发评估工具链，以及技能的上下文经济性。**

---

# Claude Code 社区动态日报 · 2026-10-02

## 1. 今日速览

Claude Code 发布 **v2.1.287**，重磅推出 **Claude Mods** 插件机制（允许插件修改更深层的运行行为）及内置守护插件 **"You should know"**。Mods 作为本月最热话题，官方在 Issue #91870 持续跟进社区反馈。此外，Artifact 公开分享失败相关问题仍在集中爆发，成为仅次于 Mods 的第二大讨论焦点。

---

## 2. 版本发布

### v2.1.287
- **Claude Mods**：插件现可修改更深层的行为，扩展性大幅提升。
- **"You should know" 内置 Mod**：一个侧线 agent 实时监控会话，标记用户或 Claude 可能遗漏的问题。启用方式：`/plugin enable cc-plugin-you-should-know@builtin`（限第一方会话）。

---

## 3. 社区热点 Issues

1. **#91870 — Mods: 让 Claude 扩展性提升 10 倍**（230 评论 / 130 👍）
   官方 10 月 1 日发布社区更新："We're live!"，正快速消化社区反馈。这是 Mods 生态的核心讨论帖。👉 [链接](https://github.com/anthropics/claude-code/issues/91870)

2. **#2544 — CLAUDE.md 强制规则被持续忽略**（28 评论 / 41 👍）
   自 2025 年 6 月以来的跨仓库老大难问题，规则遵循稳定性仍是核心痛点。👉 [链接](https://github.com/anthropics/claude-code/issues/2544)

3. **#84862 — 全平台 Passkey (WebAuthn) 登录**（85 👍）
   高票功能请求：希望 Claude 账号在 CLI、桌面端、Web 全线支持无密码登录。👉 [链接](https://github.com/anthropics/claude-code/issues/84862)

4. **#79824 — Artifact 公开分享持续失败**（16 评论 / 21 👍）
   "This version can't be shared publicly" 错误跨版本复现，是 Artifact 分享问题簇的代表性 Issue。👉 [链接](https://github.com/anthropics/claude-code/issues/79824)

5. **#54750 — 会话限额显示 100% 但实际用量极低**（21 评论）
   计费/限额统计疑似不准，直接影响可用性，macOS 用户反馈集中。👉 [链接](https://github.com/anthropics/claude-code/issues/54750)

6. **#92215 — Claude Design 第一方 MCP 持续 403**
   transport 不附带 design-scoped token，OAuth 流程失效，错误提示还指向不存在的命令，多重问题叠加。👉 [链接](https://github.com/anthropics/claude-code/issues/92215)

7. **#85856 — Windows/Git Bash 下 Bash 工具静默吞掉一半反斜杠**
   MSVCRT 与 MSYS2 编码不匹配，引号也无法防护，属隐蔽且影响面大的正确性 Bug。👉 [链接](https://github.com/anthropics/claude-code/issues/85856)

8. **#79305 — 桌面端自定义主题/强调色**（37 👍）
   社区希望桌面端与 CLI 主题系统对齐，多显示器场景下窗口辨识度是主要动因。👉 [链接](https://github.com/anthropics/claude-code/issues/79305)

9. **#92533 — function-hooks 的 tool.call 钩子破坏 worktree agent 隔离**
   任何注册在 Bash 上的钩子都会导致隔离 agent 全部 Bash 调用被拒，Hooks 与 Agents 两个子系统的交互 Bug。👉 [链接](https://github.com/anthropics/claude-code/issues/92533)

10. **#93483 / #89070 — Artifact 分享版本固定问题**
    分享链接锁定旧版本，republish 不会移动 pin；Pro/Max 无法向指定人员分享"最新版"。分享体验存在系统性设计缺口。👉 [链接](https://github.com/anthropics/claude-code/issues/93483)

---

## 4. 重要 PR 进展

> 注：过去 24 小时仅 5 个 PR 更新，以下为全部有效内容。

1. **#98018 [已关闭] — mods: 回滚两项变更**（@poteat）
   回滚 #96363/#96364，agents-md 截断读取与 diff 强制配色两个 mod 恢复旧行为。体现官方对 Mods 反馈的快速响应。👉 [链接](https://github.com/anthropics/claude-code/pull/98018)

2. **#98555 [已关闭] — diff: 对话框打开所有列出文件的 diff**（@poteat）
   优化非全屏布局下 `/diff` 对话框：每个变更文件自动展开 diff，关闭时不输出冗余信息。👉 [链接](https://github.com/anthropics/claude-code/pull/98555)

3. **#94847 [开放] — diff: 首次编辑仅在有待列文件时打开面板**（@bcherny）
   修复对仓库外/ignored 文件写入时弹出空 diff 面板的问题。diff 体验是近期官方迭代重点。👉 [链接](https://github.com/anthropics/claude-code/pull/94847)

4. **#16632 [已关闭] — 修复 shell 操作符审批提示误报**（@ian）
   将 ralph-loop 初始化从展示型 `!` 代码块迁移为真正的 Bash 调用，修复 #16389。👉 [链接](https://github.com/anthropics/claude-code/pull/16632)

5. **#62592 [已关闭] — 更新 security-guidance 插件文档**（@mhegazy）
   README 文案小改动。👉 [链接](https://github.com/anthropics/claude-code/pull/62592)

---

## 5. 功能需求趋势

- **Mods / 插件扩展性**（绝对主导）：#91870 评论量断层第一，v2.1.287 已落地首版，社区诉求集中在更深的修改权限与第三方插件能力（如 #82571 要求开放第三方 channel 插件的通知入站）。
- **Artifact 分享与协作**：#79824、#78537、#89070、#93483 等多条 Issue 聚合，指向"版本固定、无法定向分享、无组织级默认分享"三大缺口。
- **认证与安全**：Passkey/WebAuthn 支持呼声高（#84862，85 👍）。
- **桌面端体验对齐 CLI**：自定义主题（#79305）、`/workflows` 进 VSCode（#75146）。
- **工具行为可配置性**：如 monitor 的 `persistent:true` 被移除引发不满（#94672）。

---

## 6. 开发者关注点

- **规则与权限可靠性**：CLAUDE.md 规则被忽略（#2544）、auto mode 误拦截 skill 的 allowed-tools（#98189）、PreToolUse 匹配器对 `for` 循环 fail-open（#79675）——权限系统在各层面的边界情况仍频出。
- **Hooks × Agents 交互稳定性**：function-hooks 破坏 worktree 隔离（#92533）、in-process teammate 关闭后 lead session 异常退出（#96226），多 agent 场景的健壮性待提升。
- **跨平台一致性**：Windows Git Bash 反斜杠丢失（#85856）、Remote Control 403（#95413）等平台特有问题持续存在。
- **MCP 生态兼容性**：新版协议（2026-07-28）对可选字段（ttlMs/cacheScope）校验过严导致整服务器工具被丢弃（#88128）；第一方 MCP（Claude Design）鉴权链路断裂（#92215）。
- **计量与限额透明度**：会话限额误报 100%（#54750）影响付费用户信任。
- **信息呈现**：桌面端将 Claude 中间笔记折叠进 "Ran N commands"（#98863）、Web 端横幅重复弹出（#98850），UI 信息可见性是近期新增反馈方向。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-10-02 | 数据来源：github.com/openai/codex**

---

## 📌 今日速览

Codex 进入高频发布节奏，过去 24 小时内连发 **8 个版本**，包括稳定版 rust-v0.160.0 和多个 0.162.0-alpha 预发布。Windows 桌面端（ChatGPT/Codex App 26.928.21956）成为问题重灾区：启动卡死、WSL 沙箱失败、Dot 集成异常等 Issue 密集涌现。同时"请恢复 /undo"老 Issue（#9203）热度持续攀升，已达 466 👍，成为社区最强呼声。

---

## 🚀 版本发布

### rust-v0.160.0（稳定版）
新功能：
- **任务中心浏览历史任务**：agent command center 新增键盘可操作的 "Show more" 动作（#49106）
- **Linux X11 中键粘贴**：全屏模式下支持选中 transcript 文本后中键粘贴（#49112）
- **项目外启动会话**：支持以 workspace 默认配置在项目外启动会话

### 预发布版本
0.161.0-alpha.8/9/12/13、0.162.0-alpha.1/2/3 —— 迭代速度极快，0.162 线已进入第 3 个 alpha。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 热度 | 为什么值得关注 |
|---|-------|------|------|----------------|
| 1 | [#9203 请恢复 /undo 命令](https://github.com/openai/codex/issues/9203) | OPEN | 👍466 / 💬86 | 当 Codex 误删未纳入 git 的文件或修改未提交内容时无法回滚，"It bites me several times" 是普遍心声。社区呼声最高的功能，从 1 月开放至今仍未解决 |
| 2 | [#48774 Codex Remote 在 Android 上配对失败](https://github.com/openai/codex/issues/48774) | OPEN | 💬33 | 扫码后授权流程中断，移动端 Remote 体验核心链路受阻 |
| 3 | [#49458 Windows 上 Dot 启动的本地任务缺少 Computer Use 工具](https://github.com/openai/codex/issues/49458) | OPEN | 💬24 | 普通 Codex 会话可用 Computer Use，但 Dot 触发的任务不可用，能力不一致 |
| 4 | [#49729 Dot 无法在已保存项目中创建/跟进本地任务](https://github.com/openai/codex/issues/49729) | OPEN | 💬20 | Dot 可建任务但无法按项目选择和继续会话，打破预期工作流 |
| 5 | [#21073 用量重置后自动恢复 CLI 会话](https://github.com/openai/codex/issues/21073) | OPEN | 👍70 | 用户希望半夜配额重置后任务自动续跑，"信息被浪费了"——高频生产力诉求 |
| 6 | [#49532 把分支选择功能加回 Codex App](https://github.com/openai/codex/issues/49532) | OPEN | 👍46 | UI 改版移除 branch 选择器引发强烈反弹，"please.. give us back" |
| 7 | [#48938 Windows 更新后反复渲染崩溃、白屏、严重输入延迟](https://github.com/openai/codex/issues/48938) | OPEN | 💬13 | Pro 200 付费用户怒斥更新后无法正常高强度工作，付费体验受损 |
| 8 | [#49731 Windows "Run agent in WSL" 所有命令失败](https://github.com/openai/codex/issues/49731) | OPEN | 💬10 | exec-server 删除 helper 目录导致 unified exec 进程创建失败，26.928 版本 WSL 用户集体受阻（另见 [#49789](https://github.com/openai/codex/issues/49789)） |
| 9 | [#31128 VS Code 扩展排队中的后续消息消失](https://github.com/openai/codex/issues/31128) | OPEN | 💬15 | 消息看似入队实则丢失，今日新增 [#49988](https://github.com/openai/codex/issues/49988)、[#50139](https://github.com/openai/codex/issues/50139) 同类报告——消息可靠性成为扩展端系统性问题 |
| 10 | [#49362 Sol 6.1 未出现在 Codex 中（已关闭）](https://github.com/openai/codex/issues/49362) | CLOSED | 👍20 | 新模型下发/可见性问题，与 [#49464](https://github.com/openai/codex/issues/49464)（VS Code 扩展缺失 GPT-6.1 Sol）同属模型可用性类问题 |

---

## 🔧 重要 PR 进展（Top 10）

1. [#50177 exec-server 支持可写文件流](https://github.com/openai/codex/pull/50177)
   通告 `fileWriteStreaming` 能力，支持带显式偏移、最大 1 MiB 分块的受控文件写入。

2. [#50113 云端线程恢复/附加的原生 gRPC 客户端](https://github.com/openai/codex/pull/50113)
   新增 `codex-cloud-client`，基于 HTTP/2 实现 `ThreadService.Resume` 与实时 Attach，云任务体验底层升级。

3. [#50148 TUI 新增受管 worktree 工具](https://github.com/openai/codex/pull/50148)
   通过 MCP 暴露 `create_worktree` / `list_worktrees` 等工具，git worktree 管理原语化。

4. [#50162 限制 exec-server 在途文件打开数](https://github.com/openai/codex/pull/50162)
   修复每连接 128 个文件句柄限制只在打开后检查的漏洞，改为信号量预占位——资源安全加固。

5. [#50129 保留远程 MCP 服务器的 Windows 环境变量](https://github.com/openai/codex/pull/50129)
   修复 Unix 主机启动 Windows MCP 执行器时环境变量被 Unix 默认 allowlist 误过滤的问题——直击 Windows 兼容痛点。

6. [#50131 TCP 隧道 JSON 诊断](https://github.com/openai/codex/pull/50131)
   新增 `--diagnostics-json` 输出版本化诊断记录，不泄露凭据/地址，可观测性提升。

7. [#50061 回 port MXC PowerShell 修复至 0.159.0-alpha.12](https://github.com/openai/codex/pull/50061)
   针对 260930 桌面发布的定向修复，Windows 本地 MXC 复用非打包 PowerShell 降级路径。

8. [#50109 全屏输入框限高并支持滚动](https://github.com/openai/codex/pull/50109)
   composer 上限为 2/3 屏，长草稿可浏览且保留 transcript 空间——TUI 打磨细节。

9. [#50087 会话驱逐时保留排队中的 agent 邮件](https://github.com/openai/codex/pull/50087)
   待读消息不再阻止空闲 agent 卸载，修复了向被驱逐 agent 发消息导致会话重载的问题。

10. [#50093 防止共享 instruction provider 自我委托](https://github.com/openai/codex/pull/50093)
    修复 instruction 加载递归死循环风险——架构级稳定性修复。

其他亮点：[#50099 Guardian V2 Decisions 对比（默认关闭）](https://github.com/openai/codex/pull/50099)、[#50082 V2 子代理动态工具继承](https://github.com/openai/codex/pull/50082)、[#50166 age 升级 0.12.1 消除 RUSTSEC 例外](https://github.com/openai/codex/pull/50166)。

---

## 📈 功能需求趋势

1. **Windows 桌面端稳定性（最大痛点）**：启动卡 logo、渲染崩溃、WSL 沙箱/exec 失败、ChatGPT/Codex 切换器不显示——今日新增 Issue 中 `windows-os` 标签占比过半。
2. **Dot / 多端集成可靠性**：Dot 创建任务路径混乱（Linux/Windows 混合路径）、云任务在各客户端可见性不一致、Computer Use 工具缺失。
3. **消息可靠性**：VS Code 扩展排队消息丢失/卡住成为跨 Issue 的系统性问题（#31128、#49988、#49975、#50139）。
4. **操作可撤销性**：`/undo` 回归呼声（466 👍）+ 恢复 branch 选择器（46 👍），反映用户对 UI 精简去功能化的不满。
5. **配额与自动化**：限额重置后自动恢复任务（#21073），体现"无人值守长任务"需求。
6. **新模型可用性**：Sol 6.1 / GPT-6.1 在不同客户端的下发不同步。

---

## ⚠️ 开发者关注点

- **付费用户情绪告警**：#48938 中 Pro 200 用户公开表达强烈不满，更新引发的白屏/输入延迟直接冲击高强度付费用户，建议 Windows 用户暂缓升级 26.928 系列。
- **WSL 用户集体受阻**：26.928.21956 版本 WSL 沙箱报 `No such file or directory`（#49731、#49789），exec-server helper 目录被删是根因，可关注 #50061 的回 port 修复节奏。
- **工程侧信号积极**：今日 PR 高度聚焦 exec-server 资源限制、Windows 环境兼容、云线程 gRPC 客户端，与 Issue 反馈的痛点高度对应，预计后续 alpha 版本将逐步消化。

---
*本报告基于 GitHub 公开数据自动汇总，链接均指向 openai/codex 仓库。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-10-02

## 1. 今日速览

今日发布 **v0.64.0-nightly**（20261002），重点修复 ChatRecordingService 的增量补丁与历史窗口管理、CLI 状态原子持久化。安全修复成为 PR 主旋律：沙箱构建 shell 注入、Windows git 参数绕过、checkpoint 路径穿越等多个 P1 安全问题集中提交。社区讨论焦点仍集中在 **subagent 可靠性**（挂起、误报成功、MAX_TURNS 处理）上。

## 2. 版本发布

**v0.64.0-nightly.20261002.gc9096a847**
- `fix(core)`: ChatRecordingService 实现追加式（append-only）增量补丁与有界历史窗口（#29568）
- `fix(cli)`: 状态持久化改为原子写入，损坏时可从备份恢复

## 3. 社区热点 Issues

1. **#22323** [P1] Subagent 触发 MAX_TURNS 后误报 `GOAL success`，掩盖真实中断 — 子代理可靠性核心问题，13 条评论热度最高。[链接](https://github.com/google-gemini/gemini-cli/issues/22323)
2. **#19873** [P2] 利用 Gemini 3 的 bash 原生能力：零依赖 OS 沙箱 + 执行后意图路由 — 架构层面的重要方向性提案。[链接](https://github.com/google-gemini/gemini-cli/issues/19873)
3. **#21409** [P1] Generalist agent 无限挂起（8 👍）— 即使创建文件夹这类简单操作也会挂起，影响面广。[链接](https://github.com/google-gemini/gemini-cli/issues/21409)
4. **#29600** [P3] `formatDuration` 单位边界取整错误（999.6ms 显示为 "1000ms"）— 今日新报，标记 `help wanted`，适合社区贡献。[链接](https://github.com/google-gemini/gemini-cli/issues/29600)
5. **#22745** [P2] 评估 AST 感知的文件读取/搜索/代码库映射 — 可能显著降低 token 消耗与轮次的 EPIC。[链接](https://github.com/google-gemini/gemini-cli/issues/22745)
6. **#21968** [P2] 模型几乎不主动使用 skills 和 sub-agents — 自主调用能力不足是社区普遍吐槽点。[链接](https://github.com/google-gemini/gemini-cli/issues/21968)
7. **#22186** [P1] get-shit-done 输出 hook 导致崩溃 — P1 级稳定性问题。[链接](https://github.com/google-gemini/gemini-cli/issues/22186)
8. **#21983** [P1] Browser subagent 在 Wayland 下失败 — Linux 桌面用户受阻。[链接](https://github.com/google-gemini/gemini-cli/issues/21983)
9. **#24246** [P2] 工具数超过 128 个触发 400 错误 — 多 MCP 场景下工具范围管理待优化。[链接](https://github.com/google-gemini/gemini-cli/issues/24246)
10. **#21924** [P2] 终端 resize 时高性能无闪烁渲染 — 需迁移到 RenderStatic，Ink 渲染层重构项。[链接](https://github.com/google-gemini/gemini-cli/issues/21924)

## 4. 重要 PR 进展

1. **#29480** [P1/安全] 校验 Windows 下 git 参数，阻止 `git diff --output=` 绕过权限提示覆盖任意文件。[链接](https://github.com/google-gemini/gemini-cli/pull/29480)
2. **#29479** [P1/安全] 修复 checkpoint 路径穿越（`x/../../secret` 可删除/读取目录外文件）。[链接](https://github.com/google-gemini/gemini-cli/pull/29479)
3. **#29492** [安全] 消除沙箱构建与网络配置中的 shell 插值注入风险。[链接](https://github.com/google-gemini/gemini-cli/pull/29492)
4. **#29491** [P1/安全] CI 中 `/patch` 命令缺少写权限校验，任意用户可触发发布流程。[链接](https://github.com/google-gemini/gemini-cli/pull/29491)
5. **#29481** [P1] 不可读的 `extension-enablement.json` 会静默重新启用所有被禁用扩展。[链接](https://github.com/google-gemini/gemini-cli/pull/29481)
6. **#29490 / #29366** [P1] 修复 session `-r` 恢复时工具响应被重复回放两遍的问题（两条并行修复）。[链接](https://github.com/google-gemini/gemini-cli/pull/29490)
7. **#29476** [P1] 修复 IDE 集成终端下确认提示按 Enter 无响应的挂起问题。[链接](https://github.com/google-gemini/gemini-cli/pull/29476)
8. **#29488** [P1/安全] 修复 MCP OAuth 流程中 RFC 9207 `iss` 参数校验逻辑（v0.61.0 起的回归）。[链接](https://github.com/google-gemini/gemini-cli/pull/29488)
9. **#29489** [P2] 阻止 Flash-Lite 模型继承 `ThinkingLevel.HIGH`，保证轻量模型低延迟。[链接](https://github.com/google-gemini/gemini-cli/pull/29489)
10. **#29482** 在主模型前增加可选的快速 "Decision Gate"，为简单消息走捷径，降低延迟与成本。[链接](https://github.com/google-gemini/gemini-cli/pull/29482)

另值得关注：#29601 是一个声明为负责任披露的 workflow_run artifact 链安全 PoC，建议维护者尽快跟进。

## 5. 功能需求趋势

- **Subagent 体系深化**：本地子代理 Sprint（#20195）、并行子代理共享内存（#18287）、子代理轨迹通过 `/chat share` 可见（#22598）、`/bug` 报告包含子代理上下文（#21763）——子代理是当前最大的投入方向。
- **代码理解效率**：AST 感知工具（#22745/#22746/#22747）、"Tactful Extraction" 精准读取以控制 36.6k tokens/turn 的上下文基线（#19561）、文件化任务追踪替代 WriteToDo（#18836/#21000）。
- **Bash 原生工作流**：零依赖 OS 沙箱以释放模型的 POSIX 工具链能力（#19873）。
- **浏览器代理健壮性**：session 接管与锁恢复（#22232）、settings.json 覆盖失效（#22267）。

## 6. 开发者关注点

- **子代理可靠性是最大痛点**：挂起（#21409）、误报成功（#22323）、不主动调用（#21968）三类问题叠加，部分用户被迫显式禁止 subagent 使用。
- **Session 恢复质量**：工具响应重复回放（#29490/#29366）、ACP 会话加载（#29368）反复被报告，表明持久化层存在系统性问题——今晚的原子写入修复是正面信号。
- **安全边界**：Windows git 参数绕过、checkpoint 路径穿越、shell 注入等一串 P1 说明权限提示与路径校验需系统性审计。
- **上下文成本**：token 膨胀与“上下文腐烂”驱动了 AST 读取与精准提取方向的持续需求。
- **可观测性不足**：`/bug` 缺子代理上下文、子代理轨迹难以查看，排障体验有待提升。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-10-02）

## 一、今日速览

昨日 Copilot CLI 连发三个版本（v1.0.91、v1.0.91-1、v1.0.92-0），重点推出 `copilot sandbox ca` 系列命令重构代理 CA 信任管理，并修复了 OAuth 重新认证后 MCP 工具失效的问题。社区方面，macOS 更新后 `.mcp-writer.binding` 导致会话不可用（#4998）和 1.0.89 启动认证竞态错误（#5008）持续发酵，成为今日讨论焦点。

---

## 二、版本发布

### v1.0.92-0
- **修复**：OAuth 重新认证后，工具定义未变化时 MCP 工具可继续正常工作。

### v1.0.91 / v1.0.91-1
- **新增**：`copilot sandbox ca` 命令族，支持检查、创建、信任、轮换和移除代理 CA 信任，含 Windows 无人值守安装；`/sandbox ca install` 拆分为 `create` 和 `trust`。
- **改进**：
  - 会话时间线在被中断的轮次结束后正确清除 busy 状态。
  - 沙箱化命令支持 Windows。
  - CLI 退出前刷新待发送遥测数据（带超时上限）。

---

## 三、社区热点 Issues

1. **#953 权限申请过于宽泛**（👍5，评论 8）[链接](https://github.com/github/copilot-cli/issues/953)
   企业用户长期痛点：认证时要求对账户所有内容的读写权限，而用户只想授权单个仓库。自 1 月开放至今仍在活跃讨论，反映企业级细粒度权限控制的强烈需求。

2. **#4998 macOS 更新后 CLI 完全不可用**（👍4，评论 6）[链接](https://github.com/github/copilot-cli/issues/4998)
   安装 macOS 安全更新并重启后，`.mcp-writer.binding` 持久化了过期的文件系统设备 ID，导致新旧会话均无法处理提示。影响 1.0.90-3，属于高严重度平台兼容性回归。

3. **#5008 1.0.89 启动竞态：模型提供商归属读取失败**（👍5，评论 6）[链接](https://github.com/github/copilot-cli/issues/5008)
   每次新交互会话启动时报两次 "Not authenticated" 错误，约 3 秒后登录完成才恢复正常。定位为启动时序竞态，多个用户可复现。

4. **#4851 Azure MCP 服务器 HTTP 请求失败**（👍8）[链接](https://github.com/github/copilot-cli/issues/4851)
   Rust 运行时在验证 Azure API Center MCP 注册表时出现 BrokenPipe，长期稳定使用的配置一夜之间失效。企业 Azure 用户的阻塞问题。

5. **#5024 Opus 5.5 原生任务因 beta header 被拒返回 400**（评论 1）[链接](https://github.com/github/copilot-cli/issues/5024)
   服务端拒绝 `anthropic-beta: fallback-credit-2026-07-01`，排障会话中 5/5 次复现。影响 Anthropic 新模型的可用性。

6. **#4938 GHEC 数据驻留租户 SDK 认证仍路由到 api.github.com**（👍1）[链接](https://github.com/github/copilot-cli/issues/4938)
   与 #4527 同类缺陷：.NET SDK 会话级 GitHubToken 认证路径未遵循 GHEC-DR 租户端点。企业数据合规场景的关键问题。

7. **#4959 企业托管 `model` 设置未生效**（👍3）[链接](https://github.com/github/copilot-cli/issues/4959)
   企业策略已下发但模型解析器忽略托管值，策略下发与实际应用脱节。

8. **#4989 企业 `allowedMcpServers` 的 serverName 匹配永不命中**[链接](https://github.com/github/copilot-cli/issues/4989)
   命名 MCP 服务器被企业白名单错误拦截，企业 MCP 管控能力存在实现缺陷。

9. **#5023 会话遥测计数器被掩码为字符串导致会话永久无法恢复**[链接](https://github.com/github/copilot-cli/issues/5023)
   代码变更指标以掩码字符串持久化后，恢复会话即失败——会话持久化健壮性的典型问题。

10. **#5030 ACP 模式下自定义 agent 无法启动（1.0.89 回归）**[链接](https://github.com/github/copilot-cli/issues/5030)
    `copilot --acp` 中 task 工具报 "Unsupported native sessions host effect"，内置 agent 不受影响，1.0.89 引入的回归。

---

## 四、重要 PR 进展

过去 24 小时仅 1 条 PR 更新：

- **#5036 更新 README 默认模型版本说明**（@mjgard）[链接](https://github.com/github/copilot-cli/pull/5036)
  文档同步：修正 README 中 Copilot CLI 默认模型的描述。小改动，但说明默认模型有变化，值得使用者留意。

> 注：本周期 PR 活动较少，主线开发动态主要体现在密集的 Release 节奏上（v1.0.91 → v1.0.92-0）。

---

## 五、功能需求趋势

1. **权限与安全精细化**：#953（仓库级权限授权）、#5032（co-authorship 被 `Copilot-Session` trailer 破坏）反映社区要求最小权限原则和干净的 git 元数据。
2. **企业可管理性**：#4938、#4959、#4989、#4989 集中暴露 GHEC/数据驻留、托管模型策略、MCP 白名单等企业管理能力的落地缺口——这是当前最密集的诉求方向。
3. **沙箱与网络环境**：新版本重点投入 sandbox CA 管理；同时 #5027 提出沙箱需正确处理 systemd-resolved stub resolver 的 DNS 场景。
4. **可观测性与 UI 可控性**：#5034（隐藏 MCP 状态通知）、#5033（关闭 "Task complete" 摘要）、#5029（状态栏暴露配额与计费周期）均为“降噪 + 信息自定义”类需求。
5. **会话可靠性**：#5023、#5035、#4911 持续聚焦会话恢复、流中断与 UI 更新冻结等稳定性问题。

---

## 六、开发者关注点

- **平台更新兼容性脆弱**：macOS 安全更新（#4998）、systemd-resolved（#5027）等系统级变更易使 CLI 陷入不可用状态，且缺少自愈机制。
- **启动竞态与回归频发**：1.0.89 引入认证竞态（#5008）和 ACP 自定义 agent 回归（#5030），快节奏发版下回归质量是隐忧。
- **模型工具调用容错不足**：#5038（grep 工具静默忽略 `n` 参数，导致丢行号）表明内置工具对模型参数变体应更宽容或显式报错；#4982 记录并行工具调用偶发挂起。
- **权限热切换缺陷**：#5031 指出任务运行中开启 autopilot 会导致工具调用全部被拒——权限模型在运行期的一致性有待加强。
- **企业用户是反馈主力**：数据驻留、托管策略、MCP 管控等企业场景问题占比高，是下一阶段优化的关键战场。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-02

## 1. 今日速览

今日无新版本发布，但 v2 分支贡献活动异常活跃：@JerryLiu369 一天内提交多个 LLM/Provider 稳定性修复 PR，@kitlangton 和 @opencode-agent[bot] 完成一系列代码清理。社区侧，超时/挂起类问题仍是最大痛点，桌面端自定义 Provider 配置失败（#51330）持续发酵。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#6231](https://github.com/anomalyco/opencode/issues/6231) 自动发现 OpenAI 兼容端点的模型列表**（👍 241 / 评论 60）
   长期高热度需求：LM Studio、Ollama 等本地 Provider 应支持自动枚举模型，免去手动维护 `opencode.json`。社区共鸣极强。

2. **[#51330](https://github.com/anomalyco/opencode/issues/51330) Desktop v2.0.16 自定义 Provider 保存始终失败**（OPEN）
   GUI 无法添加任何自定义 API Provider，与 #50650、#51031 的 v2 protocol 问题相关，直接阻塞 v2 Desktop 用户接入自托管模型。

3. **[#26602](https://github.com/anomalyco/opencode/issues/26602) Desktop 5 分钟 Headers Timeout 硬编码**（评论 16）
   本地慢速 Provider 被固定 5 分钟超时截断，`"timeout": false` 配置被无视。

4. **[#11865](https://github.com/anomalyco/opencode/issues/11865) Codex 子代理卡死且无超时/重试**（评论 27，已关闭）
   经典问题：子代理无响应导致整个会话永久挂起，需依赖中断才能恢复。

5. **[#46692](https://github.com/anomalyco/opencode/issues/46692) v2 路径静默忽略 chunkTimeout/timeout**（已关闭）
   配置被 schema 接受但 `packages/llm` 从不读取，v2 原生路径完全无 stall 保护，是多个挂起类 issue 的共同根因。

6. **[#37580](https://github.com/anomalyco/opencode/issues/37580) SSE 流中途断开导致会话永久挂起**（已关闭）
   openai 路径 chunkTimeout 无默认值，与上一条同属超时体系缺陷。

7. **[#41848](https://github.com/anomalyco/opencode/issues/41848) LLM 重试无上限，UI 永久显示 Thinking**（已关闭）
   RETRY_MAX_DELAY 高达约 24 天，DeepSeek 流错误触发无限重试，无任何用户反馈。

8. **[#48675](https://github.com/anomalyco/opencode/issues/48675) headless `opencode run` 流卡死无退出**（OPEN）
   三个并行 one-shot worker 同时 stall，零 chunk 超时缺失，影响 CI/自动化场景可靠性。

9. **[#52638](https://github.com/anomalyco/opencode/issues/52638) `opencode upgrade` 后旧实例后台残留**（OPEN，今日新建）
   客户端重启后 agent 循环未停止，旧进程继续在后台执行任务，存在安全隐患。

10. **[#52445](https://github.com/anomalyco/opencode/issues/52445) 未经配置写入虚假 `Co-Authored-By: Claude` 署名**（OPEN）
    在无任何 hook/模板配置下擅自添加归属行，引发对 agent 行为可控性与提交诚信的讨论。

## 4. 重要 PR 进展

1. **[#52669](https://github.com/anomalyco/opencode/pull/52669) 检测并中止退化重复的推理流**（OPEN）
   新增 `reasoning-guard.ts`，识别模型陷入循环推理的退化模式并主动中止，直击挂起类痛点。

2. **[#52671](https://github.com/anomalyco/opencode/pull/52671) 限制并发 ripgrep 子进程数**（OPEN）
   用 Effect 信号量将并发上限设为 4，防止工具扇出耗尽系统资源。

3. **[#52633](https://github.com/anomalyco/opencode/pull/52633) + [#52663](https://github.com/anomalyco/opencode/pull/52663) 原生 Cohere Provider**
   新增 `@opencode/ai` 原生 Cohere Chat v2 协议实现（支持 thinking、图像输入、工具调用），并将 Cohere 目录模型切换到原生路径。

4. **[#52654](https://github.com/anomalyco/opencode/pull/52654) 外部认证变更时刷新缓存的 Provider 状态**（OPEN）
   通过 authFingerprint 检测外部登录态变化并重建实例，修复 #50647。

5. **[#52651](https://github.com/anomalyco/opencode/pull/52651) opencode-go 不可解析 400 归类为上下文溢出**（OPEN）
   将不含错误信息的 400 响应正确映射为 context overflow，触发压缩而非失败。

6. **[#52670](https://github.com/anomalyco/opencode/pull/52670) 压缩取消后恢复的摘要挂载修正**（OPEN）
   修复压缩被取消且新提示先到时，摘要错误挂载到新 prompt 的问题。

7. **[#52665](https://github.com/anomalyco/opencode/pull/52665) 支持 `max` 推理强度并分类超载错误**（OPEN）
   扩展 OpenAIReasoningEfforts 接受 `max` 档位。

8. **[#52672](https://github.com/anomalyco/opencode/pull/52672) 短终端下首页 footer 不再换行重叠**（OPEN）
   截断目录/分支文本替代换行，附回归测试，关闭 #51563。

9. **[#52624](https://github.com/anomalyco/opencode/pull/52624) TUI 外部配置与主题热重载**（OPEN）
   免重启即可生效外部 config/theme 变更。

10. **[#51090](https://github.com/anomalyco/opencode/pull/51090) 纯推理轮次保持 "Working" 状态显示**（已合并）
    抑制仅有 reasoning 时的 "Used 1 Thought" 折叠行，避免 UI 看似无响应的误导。

## 5. 功能需求趋势

- **本地/自托管模型体验**：自动模型发现（#6231，241 👍）是呼声最高的需求，配合超时体系修复（#26602、#46692），本地慢速 Provider 是明显短板。
- **可靠性与容错**：超时、重试上限、流卡死检测是 v2 当前工程投入最密集的方向（今日多个 PR 印证）。
- **Provider 生态扩展**：原生 Cohere 支持、NVIDIA NIM 兼容性（#40185）、Gemini 图像生成（#40124）持续推动多模型覆盖。
- **进程与会话生命周期管理**：升级后残留进程（#52638）、幽灵子代理（#40193）反映 v2 多进程架构的清理机制不完善。
- **UX 细节打磨**：prompt 排队（#40191）、隐藏 tips（#40227）、终端布局适配等小改进需求稳定出现。

## 6. 开发者关注点

1. **挂起类问题成系统性缺陷**：至少 6 个 issue 指向同一根因——客户端缺乏统一的 stall 检测与重试上限，v2 重构后 timeout 配置静默失效尤其致命。
2. **v2 配置兼容性回归**：Desktop 的 native `providers` 块被忽略（#51252）、GUI 保存失败（#51330）、`--global` MCP 写错位置（#49904），v2 迁移期配置体系不稳定。
3. **Windows 支持滞后**：PATH 截断（#37125）、首次启动挂起（#38222）等平台特有问题反复出现。
4. **Agent 行为可控性**：未经授权的提交署名（#52445）和后台残留进程（#52638）引发信任与安全顾虑，建议关注 hook/权限机制的完善。
5. **Headless/自动化场景可靠性**：`opencode run` 无超时退出（#48675）直接影响 CI 集成，是自动化用户的核心诉求。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-02）

## 📌 今日速览

今日发布 v0.24.7-nightly 版本，修复了 Code Mode 文本与懒加载工具发现的对齐问题。社区讨论焦点持续集中在 **Managed Agent 双路径架构**（#12380，40 条评论）上，Stage D/G 的多个子任务及配套 PR 密集推进。同时，Hosted Hook、内存系统（MEMORY.md）、Broker 安全认证等方向出现多个新 Issue 和修复 PR。

---

## 🚀 版本发布

**v0.24.7-nightly.20261001.a7deb01bcb**（[Release](https://github.com/QwenLM/qwen-code/releases)）
- `fix(core)`: Code Mode 文本与懒加载工具发现（lazy tool discovery）对齐（PR #12990，@tanzhenxin）
- `fix(permissions)`: 修复已批准权限的生效逻辑

---

## 🔥 社区热点 Issues（Top 10）

1. **#12380 Managed Agent 双路径架构分阶段交付提案**（40 评论）
 核心路线图 Issue：保留现有 TS agent loop，将模型推理与工具环境供给解耦，赋予 Session 持久所有权、Workspace 绑定和可恢复的工具执行。是当前社区讨论量最高的设计文档。
 https://github.com/QwenLM/qwen-code/issues/12380

2. **#12028 非会话上下文 Token 治理**（18 评论）
 系统提示词、内置工具 schema、QWEN.md 与技能列表在每次请求都重复付费，长上下文模型下成本可观。社区高度关注的性能/成本议题。
 https://github.com/QwenLM/qwen-code/issues/12028

3. **#12867 Stage D 后续：持久生命周期、Turns、Actions 与 AgentDefinition**（17 评论，@wenshao）
 Stage D1–D3 已落地，本 Issue 追踪剩余切片，含 `java_durable` 准入配置。
 https://github.com/QwenLM/qwen-code/issues/12867

4. **#12737 ACP 桥接 Stage B：Legacy 与 Managed 双引擎配对宿主集成**（14 评论）
 包含 2026-09-28 的调度决策更新，明确 Hosted Managed 优先于本地 `qwen serve` 执行。
 https://github.com/QwenLM/qwen-code/issues/12737

5. **#13030 Hosted Workspace 配置新增只读搜索工具**（9 评论）
 提案将 `list_directory`、`glob`、`grep_search` 纳入 Hosted Harness 工具集，扩展 Hosted 执行能力。
 https://github.com/QwenLM/qwen-code/issues/13030

6. **#12889 延迟 tool_call schema 允许空参数调用**（7 评论，bug）
 懒加载工具下，带必填字段的工具被以空参数调用，涉及工具发现机制正确性。
 https://github.com/QwenLM/qwen-code/issues/12889

7. **#13078 每日依赖 CVE 审计失败**（6 评论）
 自动化安全审计亮红灯，可能存在新的高危漏洞，需 CI/CD 关注。
 https://github.com/QwenLM/qwen-code/issues/13078

8. **#12952 Stage G：权威 Session 历史、writer fencing 与接管**（6 评论）
 目标是外部化 Session 历史/检查点，在移除 owner 亲和性前验证 fencing 与 takeover 机制。
 https://github.com/QwenLM/qwen-code/issues/12952

9. **#13157 Agent Host 应在权限流之前运行边界守卫**（5 评论，P2 bug）
 工作区外的工具调用先触发权限流，PLAN 模式下自动拒绝导致整个 Host 运行中断——影响可用性的关键缺陷。
 https://github.com/QwenLM/qwen-code/issues/13157

10. **#13145 MEMORY.md 索引截断切断链接目标**（4 评论，ready-for-human）
 索引按 150 字符整行截断，路径被切断后链接失效。配套修复 PR #13156 已提交。
 https://github.com/QwenLM/qwen-code/issues/13145

---

## 🔧 重要 PR 进展（Top 10）

1. **#13142 存储不可变 AgentDefinition 修订（Stage D8a）**
 三条 Agent 路由实现为租户隔离、append-only 修订，带 SHA-256 摘要。配套 follow-up Issue #13191 已建立。
 https://github.com/QwenLM/qwen-code/pull/13142

2. **#13138 离线 W1b 恢复包**
 完整的离线恢复证据工作流：固定恢复点、导出私有 journal、比对操作员准备的 Workspace 与 worker 备份。
 https://github.com/QwenLM/qwen-code/pull/13138

3. **#13174 采纳下一个 Hosted Harness 代际（G3）**
 Hosted Session 不再绑定首个服务的 Harness 进程代际，Harness 重启后 Java 控制平面自动接管，避免绑定 Session 全部失败。
 https://github.com/QwenLM/qwen-code/pull/13174

4. **#13156 修复 MEMORY.md 索引链接可解析性**
 解决 #13145，截断不再落入链接目标内部。
 https://github.com/QwenLM/qwen-code/pull/13156

5. **#13154 修复 Web Shell 内存面板覆盖全局 QWEN.md**
 改走 daemon 内存路由读取 `~/.qwen/QWEN.md`，且不再对未读全的文件提供保存。
 https://github.com/QwenLM/qwen-code/pull/13154

6. **#13198 修复 Windows vim 模式剪贴板粘贴**
 200ms 超时低于 PowerShell 启动耗时导致静默失败，实用性强。
 https://github.com/QwenLM/qwen-code/pull/13198

7. **#13084 保护 Session 持有的工具输出退役（O4-1）**
 永久 Session 退役、固定预算数据库 reader lease、独立物理 PUT 尝试。
 https://github.com/QwenLM/qwen-code/pull/13084

8. **#13163 拒绝授权时停止绑定 Turn**（依赖 #13112）
 取消与绑定 Workspace 准入修复，对应 Issue #13162。
 https://github.com/QwenLM/qwen-code/pull/13163

9. **#13035 解析撕裂 transcript 行的托管会话元数据**
 处理 `}{` 粘连行这一已记录的损坏形态，提升会话恢复鲁棒性。
 https://github.com/QwenLM/qwen-code/pull/13035

10. **#13195 仅释放 load 持有的 Hook Runtime**（今日新提交）
 修复 #13193：`releaseEarlierOwners()` 释放了所有更早激活而非仅本 Harness 创建的，避免误释放。
 https://github.com/QwenLM/qwen-code/pull/13195

---

## 📈 功能需求趋势

- **Managed Agent / 多智能体架构**（绝对主导）：Stage B–G 的设计、实现与审查 follow-up 占据今日大半 Issue/PR，包括持久生命周期、writer fencing、Broker 认证（#13180）、离线恢复等。
- **Token 成本与长上下文性能**：非会话上下文治理（#12028）、Token 节省的 benchmark 验收门（#12333）、延迟优化（#13132）。
- **内存/记忆系统**：MEMORY.md 索引完整性、提取冷却与召回选择器实验（#13158、#13190）。
- **安全与凭证**：Broker 认证与凭证下发（#13180）、remote-connect HTTP 降级（#13123）、工作区信任（#13186）。
- **平台分发**：Android Phase 2（#13111）、Web Shell 体验持续打磨。

---

## ⚠️ 开发者关注点

1. **懒加载工具发现的副作用**：空参数调用（#12889）、工具指引规则失效（#12702）、Code Mode 对齐修复，表明 lazy tool discovery 正处于集中修 bug 阶段。
2. **Hosted 执行的可用性缺陷**：无交互端权限自动拒绝终止整个运行（#13157）、重试循环无终态与投影永久卡死（#13182）。
3. **CI/安全噪音**：每日 CVE 审计失败（#13078）、yamllint 加固（#12650）需关注。
4. **审查流程产生的 follow-up 债务**：多个 PR 合并后产生 3–36 条 Suggestion 级 follow-up（#13187、#13190、#13191），反映项目采用严格的多轮 review 节奏，技术债被系统化追踪。
5. **Windows 体验**：剪贴板超时（#13198）等小但高频的痛点仍有贡献空间。

---
*数据来源：github.com/QwenLM/qwen-code | 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报
**日期：2026-10-02 | 数据来源：github.com/Hmbown/DeepSeek-TUI**

---

## 一、今日速览

v0.10.1 集成进入收尾阶段：第一波集成 PR #6782 已合入 `main`，续集 PR #6815 于今日开启，承载剩余修复与 CI。社区贡献者 @asto18089 的七个修复 PR 已通过集成分支批量落地，涵盖 MCP 超时、JS 子进程泄漏、vision 请求封装等多个关键健壮性问题。此外，社区发起汉化组号召（#6804），反映中文用户群体的活跃度上升。

---

## 二、版本发布

过去 24 小时无新 Release。（v0.10.1 正在集成中，见 PR #6782 / #6815，预计近期发布。）

---

## 三、社区热点 Issues

1. **#6309 [CLOSED] 要求恢复 YOLO 模式**（@weifeng89，6 评论）
   用户反馈当前 operate mode 需逐步审批，操作繁琐，希望恢复免审批的 YOLO 模式。涉及安全与效率的核心权衡，讨论热度最高。
   链接：Hmbown/Codewhale Issue #6309

2. **#6804 [OPEN] 号召成立汉化组**（@SparkofSpike，2 评论）
   发起人指出 AI 翻译技术文档“只停留在能读”，计划组建志愿团队持续同步中文文档，并建立 QQ 群协作。反映国际化社区建设需求。
   链接：Hmbown/Codewhale Issue #6804

3. **#6328 [OPEN] 计划任务（watches/heartbeat）列表 UI**（@Hmbown）
   官方规划中的 agent 调度管理界面：命名监控、心跳条目、暂停/恢复。目前被 Core cron 路由阻塞，是日程功能的关键拼图。
   链接：Hmbown/Codewhale Issue #6328

4. **#6814 [OPEN] codewhale-ratatui 组件目录与 README 效果图库**（@Hmbown）
   创始人要求补全组件覆盖、新配色/渐变及统一视觉规范，属于艺术方向的持续性投入，TUI 观感升级信号明显。
   链接：Hmbown/Codewhale Issue #6814

5. **#6582 [CLOSED] hooks：shell tool_call_after 结构化执行回执**（@wuisabel-gif）
   为 MemoryWhale（本地 SQLite 记忆系统）插件铺路，请求通过 stdin 传递结构化执行数据（命令、cwd、退出码、输出）。生态插件集成的代表性需求。
   链接：Hmbown/Codewhale Issue #6582

> 注：过去 24 小时活跃 Issue 共 5 条，全部列出。

---

## 四、重要 PR 进展

1. **#6782 [CLOSED] v0.10.1 集成第一波（wave/0.10.1-next）**
   已合入 `main`，整合审计修复及贡献者 PR #6793/#6799/#6802，包括排队/取消回合经 Engine 事件仲裁、undo 恢复持久会话等。
   链接：Hmbown/Codewhale PR #6782

2. **#6815 [OPEN] v0.10.1 集成第二波**
   今日新建，继续承载剩余修复；已包含“空闲 worker 不再每 200ms 轮询磁盘”等性能改进（关联 #6728/#6573）。
   链接：Hmbown/Codewhale PR #6815

3. **#6802 [CLOSED] 落地 MCP tools/call 独立预算（承接 #6741）**
   修复两层短超时（120s/60s）误杀长时间工具调用（构建、测试套件、爬取）的问题，每请求一个 deadline。
   链接：Hmbown/Codewhale PR #6802

4. **#6799 [CLOSED] 批量落地 @asto18089 的七个 PR（#6736–#6744）**
   因 fork 拒绝维护者推送（HTTP 403），改走集成分支落地，涵盖引擎、工具、上下文多方面修复。
   链接：Hmbown/Codewhale PR #6799

5. **#6743 [CLOSED] 修复 JS 执行超时后子进程不退出**
   120s 超时触发时 tokio 直接丢弃等待 future 但未杀掉 Node 子进程，导致 CPU/文件句柄泄漏并误报超时。典型资源泄漏修复。
   链接：Hmbown/Codewhale PR #6743

6. **#6742 [CLOSED] vision 请求加连接边界与 30 分钟总封装**
   原单一 120s 客户端超时覆盖连接+上传+生成全程，慢而健康的 provider 被误杀。
   链接：Hmbown/Codewhale PR #6742

7. **#6740 [CLOSED] 工具调用期间保持空闲看门狗耐心**
   修复静默长工具调用触发 idle watchdog 误杀回合的问题——日志仅在开始/结束记录，中间零流量。
   链接：Hmbown/Codewhale PR #6740

8. **#6715 [OPEN] 多 ChatGPT/xAI 账号选择、显示与切换**
   解决多账号场景：登录无法选账号、不知当前用的是哪个、额度用尽报错不指明账号。实用性强。
   链接：Hmbown/Codewhale PR #6715

9. **#6805 [OPEN] 插件声明 OAuth AI provider（contribution-gate）**
   经审核的插件包可通过 `extensions.net.codewhale.providers` 声明 OpenAI 兼容 provider 与 OAuth 客户端，无需代理进程。生态扩展的重要一步。
   链接：Hmbown/Codewhale PR #6805

10. **#6807 [OPEN] Watch 鲸鱼宠物用桌面端 v2 轮廓重绘**
    创始人直接要求的视觉 parity 改动，配合 #6814 的艺术方向升级。
    链接：Hmbown/Codewhale PR #6807

其他：#6737/#6739 修复上下文标签携带绝对路径导致缓存失效的问题（含堆叠 PR）；#6810–#6813 为 Dependabot 常规依赖升级（React 19.3.0、@types/node、nixpkgs、fenix）。

---

## 五、功能需求趋势

- **免审批/自动化操作**：YOLO 模式回归呼声（#6309），社区对减少交互摩擦的诉求强烈。
- **调度与后台任务**：watches、heartbeat、cron 列表 UI（#6328），agent 自主化是明确路线图方向。
- **多账号/多 provider 管理**：ChatGPT/xAI 账号切换（#6715）、插件声明 OAuth provider（#6805），provider 生态持续开放。
- **插件与记忆生态**：结构化 hooks 回执（#6582）显示第三方记忆/记录类插件正在围绕项目成型。
- **TUI 视觉打磨**：ratatui 组件目录、渐变配色、鲸鱼宠物重绘（#6814/#6807），界面品质是官方投入重点。
- **中文本地化**：文档汉化组（#6804）代表非英语社区的规模化需求。

---

## 六、开发者关注点

1. **超时与预算机制不合理**：多处“一刀切”短超时误杀合法长任务（MCP 调用、vision 上传、JS 执行、空闲看门狗），本批修复集中回应，但暗示超时体系需统一设计。
2. **进程与资源泄漏**：JS 工具超时后子进程不退出、空闲 worker 高频磁盘轮询，性能与资源管理是高频痛点。
3. **上下文稳定性**：绝对路径写入 pinned system prompt 导致缓存失效与冗余 history 追加，影响 token 成本与可复现性。
4. **可观测性不足**：不知道当前用哪个账号、提交与 TurnStarted 难以关联（#6744），用户在排查问题时缺乏线索。
5. **外部贡献流程摩擦**：fork 分支拒绝维护者推送（403），维护者被迫走集成分支代为落地，贡献工作流有待改善。

---
*本报告基于过去 24 小时 GitHub 公开数据自动汇总，评论数为抓取时点数据。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-02

## 📌 今日速览

Pi 正式发布 **v1.0.0**，TUI 默认全屏模式，社区反响热烈但也带来一批新适配问题（tmux 乱码、Home/End 键位变更等）。同时 v1.0.0 的 `pi-durable` 包在发布当天就被发现 crash recovery 与 sleep 相关缺陷，团队快速响应处理。生态方面，模型目录定价准确性（OpenRouter、Bedrock）成为近期修复热点。

---

## 🚀 版本发布

### [v1.0.0](https://github.com/earendil-works/pi/releases/tag/v1.0.0)
- **默认全屏 TUI**：如需保留终端正常回滚，可设置 `tuiMode: "regular"`（[设置文档](https://github.com/earendil-works/pi/blob/v1.0.0/packages/coding-agent/docs/settings.md#terminal-and-display)）
- 其余更新内容在 Release 说明中被截断，建议直接查看 Release 页面

---

## 🔥 社区热点 Issues

1. **[#5653] 迁移离开 Shrinkwrap（23 评论，进行中）**
   同时安装 `pi-ai` 与 `pi-coding-agent` 会在磁盘上产生两份 `pi-ai`，模块级 `Map` 导致 API provider 注册表分裂。这是长期困扰 monorepo 用户的核心问题，迁出 shrinkwrap 后有望彻底解决。([链接](https://github.com/earendil-works/pi/issues/5653))

2. **[#10031] 按 ESC 停止思考后 Pi 偶发卡死在 "Working..."（19 评论）**
   自 ~v0.84.0 起跨多台机器复现，只能 Ctrl+C 退出后 `pi -c` 恢复。高关注度稳定性 bug。([链接](https://github.com/earendil-works/pi/issues/10031))

3. **[#9688] 剪贴板复制回归（已关闭）**
   为修复 #9618 引入的 OSC 52 触发逻辑变更，破坏了容器内（非 SSH）场景的复制功能。典型的“修复引入回归”案例。([链接](https://github.com/earendil-works/pi/issues/9688))

4. **[#9255] 长会话下 TUI 全屏重绘风暴（9 评论）**
   流式组件高度超过视口时几乎每帧触发 `fullRender(true)`，导致画面剧烈跳动/文字重影。TUI 渲染性能的关键问题。([链接](https://github.com/earendil-works/pi/issues/9255))

5. **[#10288] shrinkwrap 锁定含漏洞的 brace-expansion 5.0.9（已关闭）**
   三个 GHSA 通告（两个 high 级）影响供应链安全，与 #5653 的 shrinkwrap 迁移问题相互呼应，安全侧优先处理。([链接](https://github.com/earendil-works/pi/issues/10288))

6. **[#9980] OpenRouter 开源模型成本计算偏差 2-3 倍**
   目录采用最便宜 provider 的定价计算，实际路由往往更贵。已有对应 PR #10286 直接采用 OpenRouter 上报的真实账单金额。([链接](https://github.com/earendil-works/pi/issues/9980))

7. **[#10250] v0.99.0 起 tmux 3.6 下输入框出现十六进制颜色乱码**
   system 主题成为默认后，tmux 环境下启动即复现，疑似主题探测与 tmux 转义序列兼容性问题。([链接](https://github.com/earendil-works/pi/issues/10250))

8. **[#10320] v1.0.0 `pi-durable` CodingTools 遗漏 replay，崩溃恢复中断读取**
   发布当天即被发现：recovery 阶段未重跑 replay 标记为 `unsafe` 的 read，破坏了持久化恢复语义。([链接](https://github.com/earendil-works/pi/issues/10320))

9. **[#10314] 全屏模式下 Home/End 默认键位之争**
   Home/End 从行内编辑变为滚动到顶/底，社区对默认行为取舍有分歧，v1.0.0 全屏默认化后的典型 UX 争议。([链接](https://github.com/earendil-works/pi/issues/10314))

10. **[#9887] 模型传字符串参数导致 `read` 工具渲染错误（已修复）**
    `xiaomi/mimo-v2.6-flash` 等模型以字符串传 offset/limit，TUI 字符串拼接出错。展示了弱 schema 遵守模型带来的健壮性挑战，PR #10290 已修复。([链接](https://github.com/earendil-works/pi/issues/9887))

---

## 🔧 重要 PR 进展

1. **[#10329] Bedrock OpenAI 模型补充长上下文定价分层** — 超 272k token 后按 2x 输入/1.5x 输出计费，修复成本低估。([链接](https://github.com/earendil-works/pi/pull/10329))
2. **[#10328] Bedrock 自适应思考：系统提示/工具变更后丢弃不匹配的思考块** — 使用 `drop_block` binding 避免重放时 400。([链接](https://github.com/earendil-works/pi/pull/10328))
3. **[#9714] 支持 Azure Foundry Chat Completions 部署** — 使 DeepSeek V4 Pro 等 Foundry 部署可用，Azure provider 能力扩展。([链接](https://github.com/earendil-works/pi/pull/9714))
4. **[#10286] 直接采用 OpenRouter 上报的真实成本** — 解决 #9980 的估算偏差。([链接](https://github.com/earendil-works/pi/pull/10286))
5. **[#9880] 发布配置 JSON Schemas** — 为 models/settings/keybindings/themes 生成 schema，含 golden-file 防漂移检测，改善编辑器体验。([链接](https://github.com/earendil-works/pi/pull/9880))
6. **[#10197] 统一包工件验证** — 单一 manifest 驱动、内容寻址的工件集，本地验证更贴近发布产物。([链接](https://github.com/earendil-works/pi/pull/10197))
7. **[#10194] Anthropic OAuth 新增复制码登录（已合并）** — 改善远程机器上的登录体验。([链接](https://github.com/earendil-works/pi/pull/10194))
8. **[#8383] 修复 gemini-3.7-flash 禁用思考报 400** — 将 MINIMAL 改为 LOW。([链接](https://github.com/earendil-works/pi/pull/8383))
9. **[#10293] system 主题保持柔和配色（已合并）** — 通过 OKLCH chroma 上限修复 Catppuccin 等柔和主题被过度饱和的问题，关闭 #10255。([链接](https://github.com/earendil-works/pi/pull/10293))
10. **[#10322] Cloudflare Clef 分类模型加入 Workers AI（已关闭，另有 #10316）** — 27B 与 9B 两个决策模型，作为 `typesafe/jev` 的替代分类器。([链接](https://github.com/earendil-works/pi/pull/10322))

---

## 📈 功能需求趋势

- **MCP 体验深化**：按需连接 deferred 服务器（#10253）、同 URL 多 OAuth 账号（#10252）、OAuth 链接 OSC-8 可点击（#10186）、优雅关闭（#10249）
- **多模型/多平台接入**：Azure Foundry、Bedrock 定价与思考绑定、LLM Gateway、Cloudflare Workers AI，目录与 provider 扩展持续活跃
- **成本透明度**：真实计费数据取代目录估算成为社区共识（#9980、#10286、#10329）
- **持久化/可恢复执行**：`pi-durable` 的 checkpoint、replay、可替换 sleep（#10325、#10320）
- **TUI 打磨**：全屏模式下的键位、主题保真、渲染性能、剪贴板兼容性

---

## ⚠️ 开发者关注点

1. **稳定性**：ESC 中断卡死（#10031）、全屏重绘风暴（#9255）是当前最高频痛点
2. **终端环境兼容性**：tmux、容器、SSH 下的主题/剪贴板/转义序列兼容问题反复出现
3. **模型行为容错**：弱模型传字符串参数、代理层非标准错误文案（#9735）、thinking 字段不一致（#10262）要求 Pi 做更多防御性处理
4. **打包与供应链**：shrinkwrap 带来的重复依赖与安全漏洞（#5653、#10288）亟待迁移完成
5. **远程/无浏览器工作流**：远程机器登录（#10194、#10258、#10219）需求明显上升

---

*数据来源：github.com/earendil-works/pi · 统计窗口：过去 24 小时（86 条 Issue 更新、14 条 PR 更新）*

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 — 2026-10-02

## 📌 今日速览

今日连发三个修复版本（v18.4.8–v18.4.10），重点修复 Apple Silicon 旧系统启动崩溃、HTTP 400 请求日志无限占用磁盘、以及流式代理误执行截断工具调用等关键问题。Windows 平台问题集中爆发，多行粘贴泄漏输入记录（#14065）与 SSH 方向键异常（#14034）均当日报告当日修复，响应速度值得肯定。Fireworks 定价与模型目录问题成为今日 PR 热点。

---

## 🚀 版本发布

**[v18.4.10](https://github.com/can1357/oh-my-pi/releases)** — `@oh-my-pi/pi-agent-core`
- 🔒 安全相关修复：`streamProxy` 不再将截断的工具调用参数缓冲区补全为可执行的自动闭合预览，此类调用会返回解析错误给模型，避免工具被误执行（[#13868](https://github.com/can1357/oh-my-pi/issues/13868)）

**[v18.4.9](https://github.com/can1357/oh-my-pi/releases)** — `@oh-my-pi/pi-ai`
- 修复被拒绝的 HTTP 400 请求导致日志无限占用磁盘空间的问题，现在会自动清理旧日志并强制大小限制
- 修复不必要的凭证/会话更新触发其他进程无谓重载认证的问题

**[v18.4.8](https://github.com/can1357/oh-my-pi/releases)** — `@oh-my-pi/pi-natives` + `pi-tui`
- 修复 18.4.3 起在 Apple Silicon Mac（macOS < 27）上启动时段错误崩溃；Apple Foundation Models 支持改为仅在 macOS 27+ 加载
- TUI 新增可选 `terminal` 配置段

---

## 🔥 社区热点 Issues

1. **[#14065](https://github.com/can1357/oh-my-pi/issues/14065)** [P1, 已关闭] Windows 原生多行粘贴泄漏 win32-input-mode Enter 记录到提示框，无法插入换行。当日报告当日由 [#14066](https://github.com/can1357/oh-my-pi/pull/14066) 修复，11 条评论，是今日响应最快的 P1。

2. **[#14034](https://github.com/can1357/oh-my-pi/issues/14034)** [P1, 已关闭] 18.4.8 起 Windows over SSH 方向键表现为 Escape（`ESC[?9001h` 被无条件发送）。影响远程开发工作流，已快速关闭。

3. **[#12398](https://github.com/can1357/oh-my-pi/issues/12398)** [Bug, 18 条评论] ask 工具占据屏幕底部时终端输出被截断。9 月中旬报告至今仍开放，是本周讨论最热的 bug，涉及 TUI 重绘核心逻辑。

4. **[#7982](https://github.com/can1357/oh-my-pi/issues/7982)** [Enhancement, 14 评论 / 9 👍] 为每次 task 调用安全地指定模型。子代理模型控制的长期需求，已 triaged。

5. **[#13983](https://github.com/can1357/oh-my-pi/issues/13983)** [P2, 已关闭] `edit.enforceSeenLines` 守卫误拒已展示行——早前编辑后，即使全量读取过的未移动行也被拒绝。配套修复 PR #13982 已就绪。

6. **[#14030](https://github.com/can1357/oh-my-pi/issues/14030)** [P2] Plan 模式在提案已注册后无限循环调用 `write xd://propose`（每次返回 +0/-0），回合无法推进、审批选项不出现。

7. **[#14027](https://github.com/can1357/oh-my-pi/issues/14027)** [P1, 已关闭] 18.4.5+ 源码路由在 Bun 下失败：`./ratchet/prelude` 解析到 node_modules 下错误的 prelude.js，影响所有加载入口的扩展生态。

8. **[#13327](https://github.com/can1357/oh-my-pi/issues/13327)** [Enhancement] "消耗限流重置"确认框预选 Yes，一次回车即不可逆消耗 Codex/Claude reset 并静默开启 autoRedeem。与 [#13331](https://github.com/can1357/oh-my-pi/issues/13331)（confirm() 对不可逆操作预选 Yes）同属危险的 UX 设计模式，社区持续施压。

9. **[#14053](https://github.com/can1357/oh-my-pi/issues/14053)** [P2, 已关闭] Cursor 的 `USAGE_PRICING_REQUIRED`（429）不触发凭证轮换，多账号场景下请求持续失败。多账号配额管理仍是高痛点。

10. **[#1627](https://github.com/can1357/oh-my-pi/issues/1627)** [Enhancement, 5 评论] 请求内置 Agent View 多会话并行监控面板（对标 `claude agents`），反映多任务并行工作流的强烈需求。

---

## 🔧 重要 PR 进展

1. **[#14066](https://github.com/can1357/oh-my-pi/pull/14066)** [已合并] 修复括号粘贴内 win32-input-mode 记录解码，解决今日 #14065 的多行粘贴问题。
2. **[#14038](https://github.com/can1357/oh-my-pi/pull/14038)** [P1, 已关闭] SpawnRun 结算后移除 owner-signal 监听器，修复子代理运行对象长期驻留内存的泄漏。
3. **[#14069](https://github.com/can1357/oh-my-pi/pull/14069) / [#14068](https://github.com/can1357/oh-my-pi/pull/14068) / [#14067](https://github.com/can1357/oh-my-pi/pull/14067)** Fireworks 目录三连修：按 models.dev 自有行定价、默认模型改为 kimi-k3、同步 Fast 变体到实际在役路由——修复 404 与 $0 定价。
4. **[#14060](https://github.com/can1357/oh-my-pi/pull/14060)** 浏览器 relay 标签页隔离：默认 relay 打开独立后台页而非借用用户可见标签，并保护被借用页面不被误关闭。直接回应 [#11688](https://github.com/can1357/oh-my-pi/issues/11688)。
5. **[#13952](https://github.com/can1357/oh-my-pi/pull/13952) / [#13877](https://github.com/can1357/oh-my-pi/pull/13877) / [#13879](https://github.com/can1357/oh-my-pi/pull/13879)** @shawnkoh 的 goal 模式系列：为 RPC 宿主补齐 goal 命令与状态、允许 agent 主动开启 goal 模式（opt-in）、新增 `--goal` 启动参数。目标是让非 TUI 场景获得完整 goal 生命周期。
6. **[#13276](https://github.com/can1357/oh-my-pi/pull/13276)** [已关闭] 原生 Factory Droid provider：设备码登录、模型发现、用量上报及四种 HTTP 推理协议，可解决 #14032 的组织绑定 401 问题。
7. **[#11226](https://github.com/can1357/oh-my-pi/pull/11226)** LSP 关停加时限：2 秒优雅握手 + 1 秒硬终止，防止卡死的服务端拖住会话。
8. **[#13701](https://github.com/can1357/oh-my-pi/pull/13701) / [#13243](https://github.com/can1357/oh-my-pi/pull/13243) / [#13632](https://github.com/can1357/oh-my-pi/pull/13632)** @iliaal 的 TUI 性能三件套：流式 Markdown 列表行复用、未变更绘制跳过 transcript 子树扫描、已提交块释放渲染缓存——显著改善长会话内存与重绘开销。
9. **[#14062](https://github.com/can1357/oh-my-pi/pull/14062) / [#14063](https://github.com/can1357/oh-my-pi/pull/14063) / [#14064](https://github.com/can1357/oh-my-pi/pull/14064)** @szavadsky 测试基础设施修复：glyph 协议探测强制关闭 conpty（修复 WSL 误判）、两套件主机状态隔离、类型修复使 `bun check` 回绿。
10. **[#12763](https://github.com/can1357/oh-my-pi/pull/12763)** Jev 模型分层路由：基于判断链（TypeSafe System One）在请求简单时降级到更便宜档位，失败时保留原模型。智能成本优化的实验性方向。

---

## 📈 功能需求趋势

- **多账号/配额管理**：凭证轮换（#14053、#14022）、限流 reset 消费安全（#13327）、账号池策略是高频主题。
- **Provider 生态扩展与修复**：Fireworks 定价/模型、Factory Droid、Windsurf Enterprise 登录（#13116）、LiteLLM 会话追踪（#14044）——社区在积极推动更广的模型接入。
- **TUI 性能与长会话稳定性**：三个性能 PR 并行推进 + 渲染缓存释放，长时运行会话内存是明确攻坚方向。
- **多会话并行工作流**：Agent View 仪表盘（#1627）、后台任务管理 `/jobs kill/timeout`（#14015）、子代理聚焦续跑（#13801）。
- **SDK/RPC 可编程性**：goal 模式向 RPC 宿主开放、扩展加载路径修复（#13940、#14027），非 TUI 嵌入场景需求上升。
- **IDE/ACP 集成**：JetBrains ACP 挂起（#4902）、无 elicitation 客户端审批行为不一致（#11686）仍有待系统性解决。

---

## ⚠️ 开发者关注点

1. **Windows 平台回归频发**：18.4.8–18.4.10 期间连续出现 win32 输入模式、SSH 终端、测试套件（#14043：main 分支 Windows 33 个测试失败）问题，Windows CI 覆盖明显不足。
2. **危险操作默认值为 Yes**：confirm() 预选 Yes 导致误删会话、误耗 reset 的投诉持续累积，建议尽快统一改为不可逆操作默认 No。
3. **升级引入回归**：18.4.5+ 源码路由破坏扩展加载、18.4.8 SSH 键位异常——快速迭代下需加强发布前兼容性验证。
4. **模型目录数据质量**：Fireworks 定价错误、404 模型残留说明 catalog 与上游服务实际状态的同步机制需要加固。
5. **内存泄漏治理**：监听器未清理（#14038）、渲染缓存驻留等问题正在被系统性修复，长期运行的 agent 服务用户建议关注 18.4.10+。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*