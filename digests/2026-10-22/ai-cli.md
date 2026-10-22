# AI CLI 工具社区动态日报 2026-10-22

> 生成时间: 2026-10-22 03:47 UTC | 覆盖工具: 11 个

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

# AI CLI 工具生态横向对比分析报告 · 2026-10-22

## 1. 生态全景

AI CLI 工具已从单一终端助手演化为覆盖 CLI、桌面端、Web Shell、云端代理的全栈开发平台，头部产品（Claude Code、Codex、Qwen Code）均以密集版本迭代推进。**子代理/多智能体**、**Managed Agent 会话管理**、**沙箱与权限安全**成为三大竞争主线。与此同时，配额透明度、容量保障、升级回归等信任类问题在几乎所有社区集中爆发，标志着行业从“功能竞赛”进入“可靠性与信任竞赛”阶段。

## 2. 各工具活跃度对比

| 工具 | 热点 Issues | 重要 PR | Release | 今日关键事件 |
|---|---|---|---|---|
| Claude Code | 10（含2起安全级） | 0（release-only 仓库） | v2.1.307 | `safety_event` OTel 遥测；`kill(-1)` 进程逃逸 P0 |
| OpenAI Codex | 10 | 10 | 3 个 alpha | 容量错误重试修复 PR #31058；桌面端序列化回归 |
| Gemini CLI | 10 | 10 | v0.67.0-nightly | IDE companion 桥接进容器沙箱；取消语义修复潮 |
| Copilot CLI | 10+ | 1 | 3 个版本 | 1.0.102 后台任务 600s 超时回归；PRU 配额清零 |
| Qwen Code | 10 | 10 | v0.26.0 全家桶（4 端） | P1 权限绕过同日修复；Managed Agent 矩阵化收口 |
| OpenCode | 10 | 10 | 无 | 桌面端稳定性问题集中；v2 配置回归 |
| DeepSeek TUI (Codewhale) | 10 | 5 | 无 | 维护者集中报 8 个高质量 issue；SSE 重试缺陷 |
| Pi | 10 | 10 | v1.4.0 | 分类器图像输入；Windows TUI 老大难关闭 |
| oh-my-pi | 10 | 10 | v18.12.6 | prompt-cache 目录轴；16k 临时克隆吃盘 |
| Kimi Code CLI / DeepSeek Harness | — | — | — | 24h 无活动 |

**迭代节奏**：Codex（3 alpha/日）与 Copilot CLI（3 版/日）最快；Qwen Code 单日发布 4 端联动版本，工程化程度最高；OpenCode、DeepSeek TUI 处于无 release 的修复积累期。

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **子代理可靠性** | Gemini (#22323/#21409)、Claude (#104156/#104181)、Qwen (#15145)、Copilot (#5223) | 挂起、误报成功、权限继承、超时——用户对 subagent 信任度普遍偏低 |
| **沙箱与权限安全** | Claude（kill(-1)、auto mode 误删）、Qwen (#15129 deny 绕过)、Copilot (ACP 沙箱不生效)、Gemini (#19873) | 破坏性操作拦截不可靠是跨工具的共性焦虑 |
| **MCP 生态健壮性** | Claude (#104166 挂起/#104181 PATH)、Codex (#39054 OAuth 死循环)、Copilot (#5192)、DeepSeek TUI (#7035)、oh-my-pi (#16672 199k schema 泄漏) | OAuth 持久化、连接超时、schema 体积管理是三大痛点 |
| **配额/成本透明度** | Claude (#103437 计量异常)、Codex (#53569 容量)、Copilot (#4802 PRU 清零)、oh-my-pi (#16104 免费桶阻塞付费) | 计量规则不透明 + 付费不可用，是付费用户最大不满 |
| **取消/中断语义** | Gemini (PR #29868/#29849)、oh-my-pi (#16460)、DeepSeek TUI (#7045) | 取消后仍执行副作用、重试忽略 abort 信号 |
| **上下文压缩与 token 经济** | OpenCode (#58015)、Gemini (#22745 AST)、oh-my-pi (#15230 cache 失效)、DeepSeek TUI (#6969) | compaction 策略、cache 保持、AST 精准读取 |
| **桌面端质量** | Codex (#55744)、OpenCode (#56394)、Qwen (#15109)、Copilot (#5197) | 升级回归、进程残留、权限声明缺失 |

## 4. 差异化定位分析

- **Claude Code**：企业级可观测性路线（OTel safety_event），但闭源 release-only，社区沟通透明度被诟病（Buddy 请愿 1194 👍、配额异议）。目标：重度付费企业用户。
- **OpenAI Codex**：云-端一体（CloudClient、Dot ↔ Cloud），企业管控 PR 密集（托管配置、Bedrock 向导），但容量 SLA 是硬伤。目标：Pro 订阅 + 企业混合部署。
- **Gemini CLI**：技术理想主义，聚焦沙箱架构（OS 级零依赖）、AST-aware 工具链、token 经济性提案。研发向用户。
- **Copilot CLI**：依托 GitHub 生态，ACP 协议与 MCP 策略管控是差异化面，但快速迭代下回归频发。
- **Qwen Code**：开源阵营中工程化最完整——能力对齐矩阵 + CI 门禁 + 4 端同步发布，Managed Agent/Web Shell 是产品主线。目标：自托管与企业私有部署。
- **OpenCode / Pi / oh-my-pi**：开源/多供应商前端阵营。Pi 主打协议容错与多网关兼容；oh-my-pi 深耕记忆系统与成本工程（prompt-cache 轴）；OpenCode 重桌面体验与本地模型。
- **DeepSeek TUI**：社区驱动的补丁周期模式（v0.10.2 tracking issue），聚焦 Web 搜索可信度与架构模块化。

## 5. 社区热度与成熟度

- **高热度 + 高摩擦**：Claude Code（问题体量与情绪强度最大）、Codex（容量问题刷屏）
- **高活跃 + 工程化成熟**：Qwen Code（issue 当日报当日修）、oh-my-pi（PR 251 条更新/日，测试基建投入显著）
- **快速迭代 + 质量波动**：Copilot CLI、Codex 桌面端（升级回归成对出现）
- **稳健修复期**：Gemini CLI、Pi、OpenCode、DeepSeek TUI
- **低活跃**：Kimi Code CLI、DeepSeek Harness

响应速度标杆：Qwen Code P1 权限绕过同日提交修复 PR；Pi 当日提出当日合入（#11230）。

## 6. 值得关注的趋势信号

1. **可观测性成为企业采购门槛**：Claude 的 `safety_event` 与 Qwen 的归因 header 表明，工具调用审计管道是下一站必备能力。
2. **“能力矩阵 + 门禁”对抗迁移漂移**：Qwen 用机器可读矩阵锁定 Managed vs legacy 能力差距，值得所有经历架构迁移的团队借鉴。
3. **Prompt cache 有效性 = 成本地战场**：oh-my-pi 的 `prompt-cache-persistent` 轴、图片钳制重写缓存、MCP schema 注入等 issue 显示，上下文管理的微小缺陷会被 token 单价指数级放大。
4. **配额信任危机是行业性风险**：三大商业产品同时出现计量/容量争议，开发者应保留自有用量日志做交叉验证。
5. **对开发者的即时建议**：
   - unattended/子代理工作流谨慎授权（kill 逃逸、auto mode 误删均有实锤）
   - Codex 桌面 26.1016.x 与 Copilot CLI 1.0.102+ 暂缓升级
   - 企业自定义证书环境注意 Claude 2.1.304+ Bedrock CA 回归
   - 集成 MCP 时自行监控 OAuth token 状态（无工具会主动提醒）

**一句话总结**：功能层面差距在收窄，安全边界、配额信任与升级质量正在成为用户选择工具的决定性因素。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据来源：github.com/anthropics/skills ｜ 数据截止：2026-10-22**

---

## 一、热门 Skills 排行（PR）

> 说明：PR 评论数数据缺失，以下按活跃度（更新频率、关联 Issue 讨论度、影响面）综合排序。**所有 Top PR 均为 OPEN 状态**，本身也反映了官方审查节奏较慢的现状。

| # | PR / Skill | 功能与讨论热点 | 状态 |
|---|---|---|---|
| 1 | **mcp-builder 修复** [#1742](https://github.com/anthropics/skills/pull/1742) | 适配 mcp>=2.0 的 `streamable_http_client` 重命名与自定义 Header 机制；关联 Issue [#1390](https://github.com/anthropics/skills/issues/1390)（评估脚本对真实 MCP 服务器全 0 分）——mcp-builder 是社区投诉最集中的官方 Skill | OPEN |
| 2 | **skill-creator 触发评估修复** [#1298](https://github.com/anthropics/skills/pull/1298) | 修复 trigger eval 误报、Windows `select()` 兼容、运行时故障被误判为“未触发”；直接回应 Issue [#556](https://github.com/anthropics/skills/issues/556)（0% 触发率）和 [#1383](https://github.com/anthropics/skills/issues/1383) 的六项审计发现 | OPEN |
| 3 | **skill-creator eval-viewer 安全加固** [#1961](https://github.com/anthropics/skills/pull/1961) | 修复 script breakout、DNS rebinding、跨站 POST；呼应 Issue [#1394](https://github.com/anthropics/skills/issues/1394)（eval-viewer XSS） | OPEN |
| 4 | **notion-spec-to-implementation + quantitative-resume-auditor** [#1245](https://github.com/anthropics/skills/pull/1245) | 将产品/技术 Spec 转为 Notion 可执行任务；挂起最久（6月起）、10月仍有更新，是需求最明确的新 Skill 提案 | OPEN |
| 5 | **skill-creator YAML frontmatter 修复** [#1997](https://github.com/anthropics/skills/pull/1997) | 修复 `parse_skill_md` 手工解析导致描述元数据与 SKILL.md 不一致，影响评估与优化全链路 | OPEN |
| 6 | **webapp-testing 命令注入修复** [#1980](https://github.com/anthropics/skills/pull/1980) | 消除 `shell=True` 导致的 CWE-78 命令注入风险；同作者另有 [#1976](https://github.com/anthropics/skills/pull/1976)、[#1977](https://github.com/anthropics/skills/pull/1977)（algorithmic-art 负数取模修复），是一波系统性的社区代码审计 | OPEN |
| 7 | **md2video-audio** [#1703](https://github.com/anthropics/skills/pull/1703) | Markdown → Marp 幻灯 → 带真人配音的 MP4，主打零成本内容自动化，方向新颖 | OPEN |
| 8 | **pyxel 复古游戏开发** [#525](https://github.com/anthropics/skills/pull/525)（@kitao，Pyxel 作者本人提交） | Python 复古游戏创建/调试/无头验证，3月提交至今仍 OPEN，长尾待审代表 | OPEN |

---

## 二、社区需求趋势（Issues 提炼）

1. **信任与安全机制**：最热 Issue [#492](https://github.com/anthropics/skills/issues/492)（46 评论）——社区 Skill 冒用 `anthropic/` 命名空间造成信任边界滥用；叠加多份 XSS/注入类安全 PR，**Skill 分发的签名与命名空间治理**是第一大诉求。
2. **组织级协作共享**：[#228](https://github.com/anthropics/skills/issues/228)（17 评论、8 👍）要求 org 内 Skill 库/分享链接，替代“Slack 传文件 + 手动上传”。
3. **Skill 触发与评估可靠性**：[#556](https://github.com/anthropics/skills/issues/556)、[#1383](https://github.com/anthropics/skills/issues/1383)——skill-creator 的 eval 工具链在 Windows/真实环境下大量失效，开发者要可信的 Skill 质量度量。
4. **Agent 记忆与上下文效率**：[#1329](https://github.com/anthropics/skills/issues/1329)（compact-memory 符号化状态压缩）、[#1487](https://github.com/anthropics/skills/issues/1487)（claude-api Skill 一次注入 156k token）——长会话下的上下文经济性。
5. **AI 输出质量治理**：[#1385](https://github.com/anthropics/skills/issues/1385) 提出三段式“推理质量门禁”流水线（校准→对抗审查→交付验证）。
6. **垂直/领域 Skill**：HPC 集群操作（[#1615](https://github.com/anthropics/skills/pull/1615)）、Web3 合约审计（[#1771](https://github.com/anthropics/skills/pull/1771)）、文档排版质检（[#514](https://github.com/anthropics/skills/pull/514)）等长尾需求持续涌入。

---

## 三、高潜力待合并 Skills（活跃 OPEN PR）

- **[#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder 修复**——修复上游 API 破坏性变更，阻塞用户最多，合并优先级最高。
- **[#1961](https://github.com/anthropics/skills/pull/1961) + [#1997](https://github.com/anthropics/skills/pull/1997) skill-creator 加固**——安全与正确性双修，10月仍活跃更新。
- **[#1245](https://github.com/anthropics/skills/pull/1245) Notion Spec 转 Implementation**——跨 4+ 月持续维护，需求验证充分。
- **[#1792](https://github.com/anthropics/skills/pull/1792) docx 修订验证修复**——回应 docx Skill 长期“假成功”问题（另见 [#2018](https://github.com/anthropics/skills/issues/2018) merge_runs.py 写坏 XML），docx 修复集群可能打包落地。
- **[#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing 安全修复**——CWE-78 级别修复，官方合并动力强。

---

## 四、生态洞察（一句话）

**社区最集中的诉求不是“更多 Skill”，而是“可信的 Skill”——命名空间防伪、组织化分发、可复现的触发/评估工具链与安全加固，质量与信任基建已明显跑输 Skill 数量的增长。**

---

# Claude Code 社区动态日报 · 2026-10-22

## 📌 今日速览

Claude Code 发布 v2.1.307，新增 `claude_code.safety_event` OpenTelemetry 安全事件遥测，并升级 API 版本至 2026-10-21。社区方面，“Bring Back Buddy” 请愿帖（1194 👍）持续发酵；配额消耗异常报告集中涌现；安全领域出现两起严重 Bug 报告（Bash 子代理 `kill(-1)` 清空用户进程、Auto mode 误删 GitHub 项目数据）。

---

## 🚀 版本发布

### [v2.1.307](https://github.com/anthropics/claude-code/releases)
- 新增 `/claude-api api-version`，将 Claude API 代码迁移至 API 版本 `2026-10-21`
- 新增 `claude_code.safety_event` OpenTelemetry 事件：每次当权限规则、auto mode、安全检查、hook 或沙箱**拦截/提示/退回**工具调用时都会发出——对构建安全审计与可观测性管道的团队是重要能力
- 修复若干请求问题（changelog 被截断）

---

## 🔥 社区热点 Issues（Top 10）

1. **[#45596](https://github.com/anthropics/claude-code/issues/45596) — Bring Back Buddy 社区联名请愿**（282 评论 / 1194 👍）
  `/buddy` 功能自 4 月 v2.1.97 起被静默移除，社区持续要求回归。这是仓库热度最高的议题，被标记 duplicate 但呼声未减，官方应给出明确表态。

2. **[#104156](https://github.com/anthropics/claude-code/issues/104156) — 子代理脚本 `kill(-1, SIGKILL)` 清空 tmux、全部 Claude 会话及桌面环境**（今日新报）
  Bash 沙箱隔离失效的严重安全缺陷，子代理可向所有用户进程发信号。安全级别最高的新 Issue，值得所有跑后台代理的用户关注。

3. **[#103680](https://github.com/anthropics/claude-code/issues/103680) — Bedrock 自定义 CA 回归：2.1.304 出现 UNABLE_TO_GET_ISSUER_CERT**（有复现）
  企业 Bedrock 用户从 2.1.303 升级后自定义证书加载但不生效，属阻塞级回归。

4. **[#103437](https://github.com/anthropics/claude-code/issues/103437) / [#103376](https://github.com/anthropics/claude-code/issues/103376) — Max 5x 配额消耗异常激增**
  多名用户实测：相同 token 量从 4.4 天耗 60% 变为 22 小时耗 54%，且附有量化数据。配额计量疑似变更，社区情绪敏感。

5. **[#91506](https://github.com/anthropics/claude-code/issues/91506) — Auto mode 未拦截破坏性 GitHub mutation，抹掉 12 个已完成 Sprint**
  自动权限分类器放行删除操作、却拦截完全相同的恢复操作，暴露 auto mode 分类器对破坏性 API 调用的判别盲区，附 data-loss 标签。

6. **[#13585](https://github.com/anthropics/claude-code/issues/13585) — CLI 配额信息查询**（128 👍）
  长期高票需求：在 CLI 内查看 5 小时/周配额用量，与今日集中出现的配额异常报告形成呼应。

7. **[#3412](https://github.com/anthropics/claude-code/issues/3412) — 粘贴文本块提交前可编辑**（291 👍，已关闭）
  无障碍场景（语音听写）的高票老 Issue 今日关闭，可能与 v2.1.307 附近的相关改进有关。

8. **[#104166](https://github.com/anthropics/claude-code/issues/104166) — Streamable HTTP MCP：服务器中途死亡后 tools/call 永久挂起**（今日新报）
  客户端已重连 GET 流但从不让 pending POST 失败，导致代理无限等待。MCP 生态可靠性问题。

9. **[#104181](https://github.com/anthropics/claude-code/issues/104181) — daemon 后台会话 PATH 过窄，MCP/状态栏命令 ENOENT**（今日新报）
  `claude agents` / `--bg` 会话以最小 PATH 启动，破坏 stdio MCP 服务器与自定义命令，后台代理工作流的基础性问题。

10. **[#56281](https://github.com/anthropics/claude-code/issues/56281) — Max 5x → 20x 升级支付持续失败且客服无响应**
  计费/账号链路故障 + 支持响应缺位，影响付费转化的同时也在消耗社区信任。

---

## 🔀 重要 PR 进展

过去 24 小时无活跃 PR 更新（数据源为 issues-only 仓库，代码变更通过 Release 发布）。今日的代码动态集中在 v2.1.307 版本发布中，见上文“版本发布”。

---

## 📈 功能需求趋势

- **多账号与账号切换**：#55621、#89785、#89993 三条 Issue 持续活跃，覆盖 VSCode 扩展、CLI 与程序化凭据管理，是当前最集中的功能方向（个人 + 工作订阅并存场景）
- **配额透明度**：#13585、#95942（工作日重置选项）、#78362 反映用户对用量/限额可视化与计量规则的高度不信任
- **TUI 定制化**：#96309（项目级会话前缀与颜色，第 16 次提交仍被 stale 关闭）显示社区对基础 UI 配置诉求与维护流程的矛盾
- **可观测性与安全**：v2.1.307 的 `safety_event` 与多起沙箱/auto mode 安全报告共同指向：企业用户需要更强的工具调用审计与隔离保证
- **移动端 / Remote Control 体验**：#104179（Android 键盘）、#104172（iOS 工具输出消失）、#100694（桌面端重连丢失）显示多端会话同步仍是薄弱环节

## ⚠️ 开发者关注点

1. **升级需谨慎**：2.1.304 引入 Bedrock CA 回归，企业自定义证书环境建议暂缓升级或确认 2.1.307 修复情况
2. **后台/子代理风险**：PATH 环境变量（#104181）与进程信号逃逸（#104156）两个今日新 Issue 都影响 unattended 工作流，建议限制子代理 Bash 权限、避免在生产机上并行多会话
3. **Auto mode 慎用于生产数据操作**：#91506、#95414（OneDrive 源码树被删）表明破坏性操作的分类拦截仍不可靠
4. **配额计量存疑**：如果近期用量异常上涨，可在 #103437 / #103376 补充实测数据帮助定位
5. **沟通缺口**：Buddy 移除无说明、重复 Issue 被 stale 关闭、支持工单无响应——社区对官方响应透明度的不满在累积，值得 Anthropic 侧关注

---
*数据来源：github.com/anthropics/claude-code（过去 24 小时 Releases / Issues / PRs）*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-10-22

## 📌 今日速览

今日 Codex 连发三个 alpha 版本（v0.164.0-alpha.9/10、v0.163.0-alpha.11.1），迭代节奏密集。社区最大热点是 **macOS 桌面端 26.1016.51333 新聊天 "Cannot serialize value" 启动失败**（73 条评论、152 👍），Windows 端同步出现同款 Worktree 模式故障；同时 **"Selected model is at capacity" 容量错误** 在多平台持续发酵，官方 PR #31058 的重试修复仍在推进中。

---

## 🚀 版本发布

过去 24 小时发布 3 个 alpha 版本：

- **rust-v0.164.0-alpha.9 / alpha.10**：0.164.0 系列连发两版，配合今日合入的大量 PR（云 app-server、OAuth 会话等），迭代速度明显加快
- **rust-v0.163.0-alpha.11.1**：0.163.0 稳定线的补丁 alpha，CLI 用户目前广泛使用 0.163.0 稳定版

---

## 🔥 社区热点 Issues

1. **[#55744](https://github.com/openai/codex/issues/55744)** — macOS 新聊天首条消息报 "Cannot serialize value" 无法启动。73 评论 / 152 👍，今日最高热度，直接影响 26.1016.51333 桌面版核心使用流程。

2. **[#8745](https://github.com/openai/codex/issues/8745)** — 请求 CLI 内置 LSP 支持（自动检测+安装语言服务器）。503 👍 的长期高票功能需求，持续活跃至今。

3. **[#53569](https://github.com/openai/codex/issues/53569)** — Pro $200 用户在桌面/Web/CLI 频繁遇到 "Selected model is at capacity"。容量问题已成付费用户最大痛点。

4. **[#55740](https://github.com/openai/codex/issues/55740)** / **[#56056](https://github.com/openai/codex/issues/56056)** — 同类容量错误新报，覆盖 GPT-6.1/GPT-6 全模型线，Windows 端尤为集中。#43668 中用户情绪已明显激化。

5. **[#55827](https://github.com/openai/codex/issues/55827)** — Windows Worktree 模式新聊天同样报 "Cannot serialize value"，本地模式正常。与 #55744 呼应，指向跨平台序列化回归。

6. **[#55795](https://github.com/openai/codex/issues/55795)** / **[#55783](https://github.com/openai/codex/issues/55783)** — 升级到 26.1016 后 Windows Dots 入口消失、macOS 侧边栏 Dot 丢失（Web 端正常）。新版升级引发的回归成对出现。

7. **[#51649](https://github.com/openai/codex/issues/51649)** — Windows 桌面端 MCP/CUA/node_repl 进程累积达 200 个 Node 辅助进程、11.6 GB 内存。长期未解的进程泄漏问题（另见 #28361）。

8. **[#39054](https://github.com/openai/codex/issues/39054)** — MCP OAuth refresh token 被拒后仍被无限重试，从不提示重新认证。跨 5 个版本复现的认证逻辑缺陷。

9. **[#50168](https://github.com/openai/codex/issues/50168)** — Dot 可读取 Codex Cloud 任务但写入（创建/发消息）全部失败。云到云互操作的关键缺口。

10. **[#55489](https://github.com/openai/codex/issues/55489)** — 桌面端 "Couldn't load workspace settings" 阻塞发消息，日志显示 403 cloudflare_challenge 与 432 路由不可用。疑似安全校验误伤，中文用户社区反馈集中。

---

## 🔧 重要 PR 进展

1. **[#31058](https://github.com/openai/codex/pull/31058)** — 模型容量错误改为有界重试（30s/2m/5m 三级退避，最多 3 次），直接针对今日刷屏的 capacity 问题，状态 "[code finalized]"。
2. **[#56037](https://github.com/openai/codex/pull/56037)** — 新增 channel 支持的 `CloudClient`，打通云 app-server 的请求/事件/生命周期管理。
3. **[#56036](https://github.com/openai/codex/pull/56036)** — 请求级 OAuth 凭证与会话生命周期 API，拒绝的 token 在重试中可恢复——有望缓解 #39054。
4. **[#56033](https://github.com/openai/codex/pull/56033)** — Bedrock 配置向导转正并默认启用，AWS 用户上手成本大幅降低。
5. **[#56055](https://github.com/openai/codex/pull/56055)** — 支持强制从指定服务器拉取托管配置，面向企业管理员。
6. **[#56049](https://github.com/openai/codex/pull/56049)** — 远程执行支持自定义凭证提供商，修复凭证遮蔽回退漏洞。
7. **[#56003](https://github.com/openai/codex/pull/56003)** — MITM 凭证替换限定到可信来源与占位符，安全加固。
8. **[#56022](https://github.com/openai/codex/pull/56022)** — 修复 `-c`/`--config` 在 CLI 多级子命令间丢失覆盖的解析 bug。
9. **[#56020](https://github.com/openai/codex/pull/56020)** — `thread/sample` 允许在失败/中断的回合后继续采样，提升实验灵活性。
10. **[#56024](https://github.com/openai/codex/pull/56024)** — 限制 HTTP/3 TCP 隧道解码头大小（64 KiB 上限），防御 QPACK 头部膨胀。

---

## 📈 功能需求趋势

- **稳定性与容量保障**：capacity 错误相关 Issue 占今日热点近三分之一，付费用户对可用性 SLA 的诉求最强
- **LSP / IDE 语义集成**（#8745，503 👍）：让 CLI 获得语言级诊断与符号智能仍是头号功能请求
- **云与互操作**：Dot ↔ Codex Cloud 双向读写、cloud 环境发现（#50182）是新兴方向
- **企业管控**：托管配置、凭证提供商、Bedrock 向导等 PR 显示官方在加强企业级部署能力
- **桌面端体验**：升级回归（Dots 消失、序列化失败）表明桌面版质量管控是当前短板

## ⚠️ 开发者关注点

1. **升级 26.1016.x 风险高**：macOS/Windows 均有启动失败与功能丢失报告，建议暂缓升级
2. **Windows 资源泄漏未根治**：进程累积与内存膨胀（#51649、#28361）长期存在，重度 MCP 用户需定期重启
3. **容量错误缺少缓解手段**：官方重试修复（PR #31058）尚未发布到稳定版，CLI 用户可关注 0.164.0 alpha
4. **中文/长文本输出被静默截断**（#54628、#47826）：无错误提示的 mid-stream 中断值得内容创作者警惕
5. **MCP OAuth 失效后无重新授权提示**（#39054）：集成 MCP 服务时建议监控 token 状态

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-10-22

## 1. 今日速览

今日发布 **v0.67.0-nightly** 版本，亮点是将 IDE companion 扩展通过 exec stdio 桥接进容器沙箱（PR #29858），大幅改善沙箱环境下的 IDE 集成体验。社区方面，**子代理稳定性**仍是焦点：Subagent 达到 MAX_TURNS 后误报成功（#22323）与通用代理无限挂起（#21409）两个 P1 问题持续引发讨论。PR 活动集中在**请求取消/信号处理的健壮性修复**和**沙箱认证持久化**方向。

## 2. 版本发布

**[v0.67.0-nightly.20261022.g09d81bf11](https://github.com/google-gemini/gemini-cli/releases)**
- 🆕 **feat(cli): 将 IDE companion 通过 exec stdio 桥接进容器沙箱**（@elberthc-byte，PR #29858）——沙箱环境内也能使用 IDE 集成能力
- 📝 包含 v0.66.0-preview.0 的 changelog 更新

## 3. 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** [P1] Subagent 达到 MAX_TURNS 后仍报告 `status: success` / `GOAL` 终止，掩盖真实中断。13 条评论，属于状态上报正确性 bug，直接影响任务可信度。
2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** [P1] 通用代理挂起——甚至简单的文件夹创建也会无限等待，用户需等待一小时后手动取消（8 👍）。临时方案是禁止模型使用子代理。
3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** [P2] 增强提案：利用 Gemini 3 模型的原生 bash 能力，通过零依赖 OS 沙箱 + 执行后意图路由，兼顾安全性与 POSIX 工具链效率。
4. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** [P1] `get-shit-done` 输出 hook 在打印用户摘要时导致 CLI 崩溃。
5. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** [P1] browser subagent 在 Wayland 下失败，报 GOAL 终止但实际未完成。
6. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** [P2] 模型几乎从不主动使用自定义 skills 和 sub-agents，只有在显式指示时才使用——涉及调度策略/提示工程的深层问题。
7. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** [P2] EPIC：评估 AST-aware 的文件读取、搜索与代码库映射能否减少 token 噪声、提升精度（子项 #22746、#22747 分别探索 tilth/glyph 与 ast-grep）。
8. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** [P2] 工具数量超过限制时遭遇 400 错误，代理需更智能地限制工具作用域。
9. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** [P2] Browser Agent 完全忽略 `settings.json` 中的配置覆盖（如 `maxTurns`）。
10. **[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)** [P3] “Tactful Extraction”提案：建立外科手术式代码发现层级（grep 优先），解决大文件读取导致的上下文膨胀（+15k tokens/turn）。

## 4. 重要 PR 进展

1. **[#29858](https://github.com/google-gemini/gemini-cli/pull/29858)**（已随今日 nightly 发布）将 IDE companion 桥接进容器沙箱，补齐沙箱内的 IDE 集成。
2. **[#29671](https://github.com/google-gemini/gemini-cli/pull/29671)** [P1, 已关闭] 沙箱内持久化认证、文件夹信任与会话状态，修复重复认证提示和信任重启循环（关联 #29461）。
3. **[#29744](https://github.com/google-gemini/gemini-cli/pull/29744)** `/ide enable` 在 VS Code Reload Window 后支持自动重连，无需重启 VS Code。
4. **[#29756](https://github.com/google-gemini/gemini-cli/pull/29756)** 新增 `requestHeadersTimeoutMs` / `requestBodyTimeoutMs` 配置，解决长思考轮次 5 分钟无输出被 `UND_ERR_BODY_TIMEOUT` 中断的问题。
5. **[#29868](https://github.com/google-gemini/gemini-cli/pull/29868)** 修复用户按 Escape 取消后，continuation stream 仍继续执行工具和 auto-nudge 的问题。
6. **[#29849](https://github.com/google-gemini/gemini-cli/pull/29849)** [P2] 非交互模式下正确处理 SIGINT/SIGTERM，防止取消后仍执行 shell 副作用。
7. **[#29867](https://github.com/google-gemini/gemini-cli/pull/29867)** 修复废弃设置自动迁移时 `${VAR}` 占位符被运行时展开值覆盖的 bug。
8. **[#29833](https://github.com/google-gemini/gemini-cli/pull/29833)** [安全] 缩小不可信 flag 检查范围至外部输入，并对已批准的 flag 记忆化，显著减少重复确认弹窗。
9. **[#29746](https://github.com/google-gemini/gemini-cli/pull/29746)** 修复 Windows 下 `detectPowerShellSubstitution` 引号状态跟踪失步导致的误报。
10. **[#29847](https://github.com/google-gemini/gemini-cli/pull/29847)** [P2, 已关闭] 修复 workspace 为家目录时的重复 agent 加载误报。

## 5. 功能需求趋势

- **子代理体系深化**（最集中）：本地 subagent Sprint（#20195）、并行子代理协作与共享内存（#18287）、subagent 轨迹通过 `/chat share` 可见（#22598）、`settings.json` 子代理发现（#18285）。
- **AST-aware 工具链**：#22745 EPIC 及子项，探索更精准的代码读取/搜索以降低 token 成本。
- **沙箱与安全**：OS 级零依赖沙箱（#19873）、破坏性命令防护（#22672）、shell 命令确认优化（PR #29833）。
- **任务管理演进**：用持久化文件 CRUD 替代 in-context 的 WriteToDo（#18836、#21000），对抗“context rot”。
- **浏览器代理健壮性**：会话接管与锁恢复（#22232）、配置覆盖生效（#22267）、Wayland 支持（#21983）。
- **IDE 集成与沙箱融合**：今日发布的核心方向。

## 6. 开发者关注点

- **取消/中断语义不可靠**是本周最高频痛点：取消后仍执行工具（PR #29868、#29849）、重试循环忽略 abort 信号（PR #29670）、MAX_TURNS 被误报为成功（#22323）。
- **子代理调度可信度**：挂起（#21409）+ 不主动调用（#21968）+ bug 报告缺上下文（#21763），用户对 subagent 的信任度偏低。
- **长时任务与超时**：长思考轮次被超时中断（PR #29756）、交互式 prompt 卡死（#22465）。
- **Token 经济性**：上下文基线约 36.6k tokens/turn，大文件读取造成显著膨胀（#19561）。
- **配置一致性**：设置迁移破坏环境变量占位符（PR #29867）、Browser Agent 忽略配置覆盖（#22267）、symlink agent 不被识别（#20079）。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-10-22

## 1. 今日速览

过去 24 小时内 Copilot CLI 连发三个版本（v1.0.102 / 102-1 / 103-0），重点改进 MCP 工具快照缓存、子代理权限继承和远程启动参数。社区方面，**1.0.102 出现回归问题**（后台子代理超 600 秒导致 autopilot 停止），ACP 模式相关缺陷持续集中曝光，vim 输入模式需求（#13）热度居高不下。

## 2. 版本发布

### v1.0.103-0
- **Added**：点击已完成的响应代码块可直接复制原始代码（可配置）
- **Improved**：
  - 同一仓库内注册的多个 Git worktree 可复用本地 MCP 工具快照缓存
  - 远程启动选项重构：更清晰的 hosting/connection 参数标志，弃用旧的 `--remote` / `--no-re`

### v1.0.102 / v1.0.102-1
- Prompt mode（`-p` 和管道 stdin）现在遵循托管 Auto 模型选择
- 子代理遵循自定义与 MCP 工具审批，避免重复权限弹窗，允许继承的工作流运行
- 插件市场支持 git 子目录来源和更长插件描述

## 3. 社区热点 Issues（Top 10）

1. **[#13](https://github.com/github/copilot-cli/issues/13) [CLOSED] vi/vim 输入模式**（👍 76，评论 15）— 社区呼声最高的老牌需求，模态编辑用户期待键盘高效编辑，已关闭或已有进展，持续引发讨论。

2. **[#5223](https://github.com/github/copilot-cli/issues/5223) [OPEN] 1.0.102 回归：后台子代理超 600 秒导致 autopilot 停止** — 新版本回归问题，无 workaround 时只能降级，值得所有升级用户警惕。

3. **[#4802](https://github.com/github/copilot-cli/issues/4802) [OPEN] 启用 Assisted Permissions 后 PRU 配额被清零** — 涉及计费与配额，疑似与权限功能相关，影响信任度，官方 triage 中。

4. **[#4414](https://github.com/github/copilot-cli/issues/4414) [CLOSED] BYOK 自定义 provider 本地返回 403** — BYOK 用户核心痛点：请求未到达 provider 即被本地拦截，误报 `/login` 错误。

5. **[#5192](https://github.com/github/copilot-cli/issues/5192) [OPEN] ACP 模式 MCP OAuth token 不持久化** — 每个新会话都重新弹浏览器认证，严重影响 ACP 客户端（如多 thread 编辑器）体验。

6. **[#5089](https://github.com/github/copilot-cli/issues/5089) [CLOSED] ACP 模式忽略 `--sandbox` 配置** — 沙箱未生效即 shell 命令未受保护，属于安全相关问题，已关闭（应已修复）。

7. **[#5054](https://github.com/github/copilot-cli/issues/5054) [OPEN] 自动 compaction 反复超时（300s）** — 大上下文 + xhigh reasoning 场景下摘要器无法收敛，几乎每轮重试，直接影响长会话可用性。

8. **[#5219](https://github.com/github/copilot-cli/issues/5219) [OPEN] 未知 model id 回退 128k 默认上限导致整轮失败** — 子代理指定未知模型时以 prompt budget 错误卡死会话，错误处理路径缺陷。

9. **[#5197](https://github.com/github/copilot-cli/issues/5197) [OPEN] WSL2 上 voice server segfault**（1.0.100 起）— 语音功能在 WSL2 完全不可用，卡在“Fetching voice models”。

10. **[#5221](https://github.com/github/copilot-cli/issues/5221) [OPEN] 无障碍回归：小键盘 Home/End 键失效** — 无障碍问题且为回归，影响特定输入习惯用户。

其他值得关注：[#5220](https://github.com/github/copilot-cli/issues/5220)（Claude 1 小时 prompt cache TTL 选项）、[#5214](https://github.com/github/copilot-cli/issues/5214)（shell guard 误杀 `kill $VAR` 等正常命令）、[#5207](https://github.com/github/copilot-cli/issues/5207)（Windows 沙箱 + 非系统盘目录无法访问）。

## 4. 重要 PR 进展

> ⚠️ 过去 24 小时内仅 1 条 PR 更新，数据量不足以支撑 Top 10。

- **[PR #1960](https://github.com/github/copilot-cli/pull/1960) [CLOSED] install: 使用 GITHUB_TOKEN 认证 GitHub 请求** — 安装脚本支持通过 `GITHUB_TOKEN` 认证 curl/wget 下载和 `ls-remote`，规避 API 限流并支持私有仓库安装。社区长期诉求，最终被关闭（可能以其他方案合入）。

## 5. 功能需求趋势

- **输入体验 / 键盘交互**：vim 模式（#13）、小键盘 Home/End（#5221）、Ctrl+E Plan 查看（#1870）— 模态编辑与终端键位兼容是持续热点。
- **ACP / 非交互模式**：OAuth 持久化（#5192）、沙箱生效（#5089）、task_complete 消息格式（#5150）— ACP 作为新兴集成面，缺陷集中暴露。
- **模型与 BYOK 灵活性**：额外请求参数（#3448）、显式模型选择持久化（#5213）、Claude cache TTL（#5220）、reasoning_effort 兼容（#4941）。
- **沙箱与权限**：Windows 多盘符（#5207）、shell guard 误判（#5214）、企业 MCP Registry only 策略（#5155）。
- **企业 / 策略管控**：MCP 策略指纹计算（#5155）、托管模型覆盖用户选择（#5213）、PRU 配额（#4802）。

## 6. 开发者关注点

1. **新版回归频发**：1.0.102 引入 600s 后台任务超时回归（#5223），社区对快速迭代下的质量保障有所担忧。
2. **沙箱可靠性**：Windows 非系统盘、ACP 模式沙箱不生效、shell guard 过度拦截——安全机制“误伤”正常工作流是高频痛点。
3. **长会话稳定性**：compaction 超时、响应中断重试循环（#3363）、会话卡死（#5219）指向大上下文场景的资源管理短板。
4. **BYOK 与企业管控冲突**：本地 403 误拦截、策略覆盖用户模型选择，反映托管策略与自定义配置的摩擦。
5. **凭证与配额信任**：PRU 配额被清零（#4802）、MCP OAuth 不持久化，涉及计费和认证的基础设施问题最伤害用户信任。
6. **升级建议**：WSL2 语音用户暂避 1.0.100+；依赖后台长任务的用户在 #5223 修复前可设置 `COPILOT_TASK_WAIT_TIMEOUT_SECONDS` 或暂缓升级至 1.0.102+。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-22

## 📌 今日速览

今日无新版本发布，社区焦点集中在桌面端稳定性（macOS 进程残留、权限声明缺失）和 v2 配置/会话机制的多处回归问题上。贡献者 @rekram1-node 一天内提交多个代码清理 PR，@kitlangton 持续推进桌面端动画与 UI 打磨，开发者生态活跃度较高。

---

## 🐛 社区热点 Issues

1. **#56394** [BUG] macOS Cmd+Q 留下半死进程，再次点击 Dock 图标渲染器卡死（12 评论）
   桌面端核心体验问题，进程既不退出也不进入后台服务态，需手动 kill。活跃讨论中。
   https://github.com/anomalyco/opencode/issues/56394

2. **#50650** 桌面端自定义 Provider 保存必然抛出 `provider.custom.unavailable`（12 评论，8 👍）
   自定义 OpenAI 兼容 provider 的表单在任何服务器上（含内置本地服务器）都无法保存成功，阻断性 Bug，长期未解。
   https://github.com/anomalyco/opencode/issues/50650

3. **#6111** [已关闭] Windows SSH 场景下复制到剪贴板失效（10 评论）
   MobaXterm/Windows Terminal 用户长期痛点，今日关闭，值得关注是否随修复版本发布。
   https://github.com/anomalyco/opencode/issues/6111

4. **#56748** [已复现] TUI 已送达的图片消息卡片残留不消失（8 评论）
   Windows v2 TUI 中带图消息的排队卡片在回合结束后不清理，inbox 同步异常。
   https://github.com/anomalyco/opencode/issues/56748

5. **#56285** [已复现] 桌面端快速上滑被弹回底部，历史记录逐块懒加载（6 评论）
   长会话滚动体验问题，无法一次性向上滚动，加载策略需重做。
   https://github.com/anomalyco/opencode/issues/56285

6. **#56636** [已复现] v2 长请求期间 Warming prompt 重复发送，最终中断会话（6 评论）
   本地 CPU 模型 + 200K 上下文场景下 warming 任务多次重发，会话被终止，影响重度用户。
   https://github.com/anomalyco/opencode/issues/56636

7. **#55727** [已复现] v2.0.29 agent 的 `model` 配置对新会话不生效（5 评论）
   `agents.<id>.model` 与 frontmatter 均被忽略，配置正确性回归，影响面广。
   https://github.com/anomalyco/opencode/issues/55727

8. **#56707** [已复现] 客户端 SSE 大小守卫因流分块方式误杀合法事件（5 评论）
   生成客户端在消费完整帧前检查累计缓冲区，两个合法事件合并在同一 chunk 传输时会触发 `SseEventTooLarge`，底层协议层问题。
   https://github.com/anomalyco/opencode/issues/56707

9. **#56479** macOS 桌面端未声明 `NSDocumentsFolderUsageDescription`，`~/Documents` 工作区静默 EPERM（3 评论）
   症状表现为模型选择器为空，用户难以排查，属典型打包遗漏。
   https://github.com/anomalyco/opencode/issues/56479

10. **#57978** 安装桌面端后 TUI 卡在 "Starting background server..."（新 issue）
    桌面端与 TUI 共存时的后台服务端口/锁冲突，双端用户的启动阻断问题。
    https://github.com/anomalyco/opencode/issues/57978

---

## 🔧 重要 PR 进展

1. **#58015** fix(core): compaction 转录分阶段收缩，而非直接丢弃历史
   上下文压缩时先分阶段裁剪，避免一刀切丢弃完整交互记录，改善长会话体验。
   https://github.com/anomalyco/opencode/pull/58015

2. **#58001** refactor(ai): WebSocket 帧只解码一次，provider 选项类型从 schema 派生
   消除 OpenResponses 热路径上的重复 JSON 解码，性能优化。
   https://github.com/anomalyco/opencode/pull/58001

3. **#58010** feat(ui): 全局统一活动 Spinner 为 Soft Radar（contributor）
   修复部分 Spinner 不跟随 Knobs 设置的不一致问题。
   https://github.com/anomalyco/opencode/pull/58010

4. **#58013** [已合并/关闭] fix(app): 恢复侧栏 spring 动画并修复 squish 与 blackout 两个缺陷
   https://github.com/anomalyco/opencode/pull/58013

5. **#57224** feat(app): 会话运行期间时间线 iOS 风格动画（+1156 行）
   桌面端流式输出渲染的重大 UI 改进，测试覆盖充分。
   https://github.com/anomalyco/opencode/pull/57224

6. **#58016** docs(cli): CLI 文档 v1 命令替换为 v2 等价物
   修复文档中已废弃命令导致用户直接报 `ENOENT` 的问题。
   https://github.com/anomalyco/opencode/pull/58016

7. **#57530** fix(tui): 修复侧栏 Todo 容器被 flex-shrink 压缩
   https://github.com/anomalyco/opencode/pull/57530

8. **#57993** refactor(ai): OpenAI 协议中消除重复的选项解析与 SSE 帧解码
   单请求重复解析 3 次的问题修复，流式路径性能改善。
   https://github.com/anomalyco/opencode/pull/57993

9. **#58006** fix(app): 头部分隔符默认为 11px chevron（contributor）
   UI 细节定调，移除冗余的 project/worktree 斜杠。
   https://github.com/anomalyco/opencode/pull/58006

10. **#57947** feat(app): 侧栏 tab 预览卡片在行间平滑滑移（contributor）
    https://github.com/anomalyco/opencode/pull/57947

---

## 📈 功能需求趋势

- **桌面端成熟度**：macOS 权限/进程管理、滚动加载、会话标签管理（MRU 切换）是高频诉求（#56394、#56285、#44258）
- **自定义 Provider / 配置可靠性**：多个 issue 反映 provider 配置被静默丢弃或保存失败（#50650、#56816），v2 配置迁移需系统性回归测试
- **键盘优先工作流**：键盘应答权限弹窗、Esc 聚焦输入框等可访问性需求持续出现（#44246、#44243）
- **会话管理增强**：rewind 到任意历史节点、多 workspace 隔离架构是社区讨论焦点（#56933、#43898）
- **长上下文 / 本地模型**：大上下文 compaction、warming 机制、本地 CPU 模型支持的重度用户需求明显（#56636、#58015）

## ⚠️ 开发者关注点

1. **进程生命周期管理是重灾区**：Cmd+Q 半死进程（#56394）、bun 进程残留（#56963）、桌面端与 TUI 服务冲突（#57978），跨端后台服务架构待统一
2. **v1→v2 迁移遗留问题多**：agent model 不生效、配置字段静默丢弃、文档过时，建议升级前关注 issue 追踪
3. **安全相关**：webfetch SSRF 问题（#36376）已关闭、agent 破坏性命令审批缺失（#46386）仍开放，生产环境使用需配置权限白名单
4. **大数据量输入风险**：4K 图片附件可致 TUI 卡死并影响整个终端（#57621，已修复关闭），建议保持最新版本

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-22

## 📌 今日速览

今天 Qwen Code 发布了 **v0.26.0** 全家桶（CLI、Desktop、TypeScript SDK、CUA Driver），核心特性是 daemon 层支持面向 Session 的 Skill 与 Extension 刷新。社区方面，一个 **P1 级安全 Issue（#15129）** 曝出 `permissions.deny` 规则可被 grep/glob 绕过，同日即有修复 PR #15144 提交；此外 Managed Agent / Web Shell 生态持续高密度迭代，多线程围绕 Session 管理、CI 稳定性展开。

---

## 🚀 版本发布

### [v0.26.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.0)
- **feat(daemon): 支持 session 级别的 Skill 与 Extension 刷新**（[#14050](https://github.com/QwenLM/qwen-code/pull/14050)）
- 官方声明无已知破坏性变更
- 同步发布的配套版本：
  - [desktop-v0.26.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.26.0)：桌面端同步 daemon 特性与 managed-agent 修复
  - [sdk-typescript-v0.1.22](https://github.com/QwenLM/qwen-code/releases)：捆绑 CLI 0.26.0
  - [cua-driver-rs-v0.26.0](https://github.com/QwenLM/qwen-code/releases)：CUA Driver 预编译二进制（macOS 签名+公证，Linux/Windows 未签名）
  - [v0.25.3-nightly](https://github.com/QwenLM/qwen-code/releases)：10-21 nightly 版本

---

## 🔥 社区热点 Issues

1. **[#15129](https://github.com/QwenLM/qwen-code/issues/15129)｜P1 安全：`permissions.deny Read(...)` 可被绕过**
   `Read(./secret.env)` 能拦截 `read_file`，但 `grep_search` 和 `glob` 仍可返回被拒文件的内容与文件名，与文档承诺相悖。涉及文件访问控制的权限边界漏洞，**今日最高优先级**，修复 PR #15144 已同日提交。

2. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078)｜每日依赖 CVE 审计连续失败**
   自动化安全审计持续报错（可能是新高危漏洞或 npm audit 端点不可用），已积累 28 条评论，是长期未解决的安全隐患。

3. **[#12668](https://github.com/QwenLM/qwen-code/issues/12668)｜已关闭：自更新导致 vendored ripgrep 丢失执行位**
   npm 自更新后 ripgrep 二进制 EACCES、工具不可用。P1 级 bug，今日关闭，涉及安装/打包链路，自更新用户应关注。

4. **[#15052](https://github.com/QwenLM/qwen-code/issues/15052)｜P2：main 分支 E2E 十次合并仅覆盖一次**
   pending 的 E2E 运行在被启动前就被替换，过去 24h 内 56 个 commit 仅 5 次有效 E2E。主分支质量保障存在系统性缺口。

5. **[#15135](https://github.com/QwenLM/qwen-code/issues/15135)｜已关闭：web-shell E2E 确定性失败**
   #15061 合入后 workspace label 加了 " · Managed" 后缀，旧测试断言未同步，所有 full tier PR 均被误杀。今日已修复，反应了团队快速止血能力。

6. **[#14446](https://github.com/QwenLM/qwen-code/issues/14446)｜P2：Managed Agent Stage F FG11 故障门禁（schedule/automation_run 域）**
   @wenshao 主导的多智能体路线图测试基建，附 2026-10-22 最新验收状态，是 roadmap/multi-agent 的关键跟踪 Issue。

7. **[#14979](https://github.com/QwenLM/qwen-code/issues/14979)｜P2：改进 edit 工具**
   用户反馈 edit 工具的 exact old_text 匹配是工作流中最大痛点，建议移植 [dsh-better-edit](https://github.com/Rianico/dsh-better-edit) 的思路。直击日常使用体验。

8. **[#15125](https://github.com/QwenLM/qwen-code/issues/15125)｜P2：read_file 对无视觉能力的模型错误宣传图片支持**
   模型无图像输入时，图片被替换为文本占位符，模型仍以为能“看到”图片。多模态与纯文本模型混用场景下的实际缺陷。

9. **[#15109](https://github.com/QwenLM/qwen-code/issues/15109)｜P2：Desktop 任务通知无法启用**
   WebView 对临时 loopback origin 拒绝通知权限，设置开关静默失效。桌面端用户体验的代表性问题。

10. **[#15138](https://github.com/QwenLM/qwen-code/issues/15138)｜P2：Java failure reporter 可能静默丢弃 PR 报告**
    #14522 合入后仍存在的分页任务遗漏问题，post-merge review 已记录两个上报缺口，影响 CI 失败归因准确性。

---

## 🔀 重要 PR 进展

1. **[#15144](https://github.com/QwenLM/qwen-code/pull/15144)｜fix(core): grep/glob 结果遵循路径级 Read 拒绝规则**
   修复今日 P1 安全 Issue #15129，被拒文件从搜索结果中剔除，并追加省略数量提示，静默结果可辨识。

2. **[#15069](https://github.com/QwenLM/qwen-code/pull/15069)｜feat(core): 定时任务支持外部 shell 命令门控**
   调度器在触发前于模型外运行 gate 命令，静默退出 0 则跳过本次触发——不产生模型轮次、不进队列、不写 transcript。设计精巧的轻量条件执行机制。

3. **[#15131](https://github.com/QwenLM/qwen-code/pull/15131)｜feat(managed-agent): 安全结算恢复与继续 Session**
   Turn 在恢复/取消驱动下保持到持久化结算确认后才接受新消息，引入保守五态恢复视图。Managed Agent 可靠性核心工作。

4. **[#15100](https://github.com/QwenLM/qwen-code/pull/15100)｜feat(managed-agent): Session 生命周期 UI 与只读导出**
   Web Shell 支持关闭、归档、恢复、删除，已关闭会话保持可读。补齐产品级 Session 管理体验。

5. **[#15089](https://github.com/QwenLM/qwen-code/pull/15089)｜feat(serve): Managed Workspace Session 补齐 web_fetch 与 todo_write**
   消除与 legacy daemon 的工具能力差距，长任务不再依赖 shell 抓网页。

6. **[#15085](https://github.com/QwenLM/qwen-code/pull/15085)｜feat(cli): Managed Agent 能力对齐矩阵**
   机器可读的 Managed 路径 vs legacy daemon 能力矩阵并纳入 CI 检查，每个能力标签强制一行声明——用工程手段锁死功能漂移。

7. **[#15145](https://github.com/QwenLM/qwen-code/pull/15145)｜fix(core): Workflow 子代理关联到发起它的 Workflow 调用**
   修复 Issue #15140 的“父调用未定位”轨迹问题，subagent id 携带 callId 后缀实现正确嵌套。

8. **[#13737](https://github.com/QwenLM/qwen-code/pull/13737)｜fix(rewind): 通过源身份解析 legacy Turn**
   会话回退以唯一源身份关联用户消息/模型锚点/边界记录，否则拒绝变更——回退安全性的加固。

9. **[#13969](https://github.com/QwenLM/qwen-code/pull/13969)｜feat(hooks): 本地 Session 的 FileChanged 通知**
   Hooks 可注册文件/递归目录监听，扩展本地工作流的文件变更响应能力。

10. **[#15025](https://github.com/QwenLM/qwen-code/pull/15025)｜fix(web-shell): 跨视图保留编辑器草稿附件**
    未发送的图片/文件与文本草稿在会话切换、页面刷新后保留，基于 IndexedDB 持久化。

---

## 📈 功能需求趋势

- **Managed Agent / 多会话管理**（最热）：归档/搜索/恢复会话（#15077、#15080）、生命周期 UI、与 legacy daemon 的能力对齐（#15084、#15085）——明显是当前产品主线。
- **安全与权限**：deny 规则覆盖面（#15129）、依赖 CVE 审计（#13078）。
- **多智能体协作**：Agent Team、FG11 故障门禁、workflow 子代理追踪（#14446、#15140）。
- **工具体验改进**：edit 工具重构（#14979）、shell 命令产物提醒（#15054）、read_file 多模态适配（#15125）。
- **桌面/Web Shell 体验**：通知权限（#15109）、草稿附件、轨迹视图。
- **可观测与自动化**：子代理前台运行默认值（#15147）、通知绑定精确匹配（#15130）。

## 🛠️ 开发者关注点（痛点）

1. **CI 稳定性是最大内耗**：E2E 覆盖率仅 1/10（#15052）、Java failure reporter 丢报告（#15138）、多起确定性红测试——主分支质量保障亟需系统性投入。
2. **权限模型与文档不一致**：deny 规则的实现与文档承诺不匹配（#15129），提示权限体系需要更完整的契约测试。
3. **新旧引擎迁移期摩擦**：Managed Agent 与 legacy `qwen serve` 的能力差距驱动了大量 issue/PR，社区在推动用矩阵和门禁让迁移可验证。
4. **安装/自更新链路脆弱**：vendored 二进制权限丢失（#12668）虽已修复，但提示 npm 分发方式对二进制文件属性的保留存在风险。
5. **edit 工具匹配体验**：exact old_text 匹配是用户明确点名的“最差工作流环节”（#14979），是产品侧最值得关注的 UX 信号。

> 💡 **今日一句话**：v0.26.0 落地 session 级 Skill/Extension 刷新，但真正值得盯的是 P1 权限绕过（#15129）的同日修复，以及 Managed Agent 生态正以“矩阵 + 门禁”的工程化方式加速收口。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-10-22 | 数据来源：github.com/Hmbown/DeepSeek-TUI**

---

## 一、今日速览

今日无新版本发布，社区焦点集中在 **v0.10.2 补丁周期**：维护者 @Hmbown 在过去 24 小时内集中提交了一批高质量 bug 报告（#7035–#7042），主要覆盖 Web 搜索可靠性、MCP 连接稳定性和 TUI 渲染问题。同时 #7042/#7045 等用户新报 issue 暴露了会话恢复与 SSE 重试机制的深层缺陷，值得贡献者关注。

---

## 二、版本发布

过去 24 小时无新 Release。当前补丁周期以 [Issue #6094](https://github.com/codewhale-hq/Codewhale/issues/6094)（v0.10.2 tracking）为入口，截至 10-14 已有 **13 个贡献者 PR 以独立 PR 形式合入**，最新为 #6977（commit `88b4c58dfb`）。

---

## 三、社区热点 Issues

1. **[#6094](https://github.com/codewhale-hq/Codewhale/issues/6094) — v0.10.2 补丁追踪总入口**
   维护者维护的 patch release 路线图，明确本周期覆盖范围与参与方式，9 条评论，是贡献者的首选起点。

2. **[#6050](https://github.com/codewhale-hq/Codewhale/issues/6050) — 可插拔 Agent 记忆后端（mem0 / causal-memory）**
   `MemoryBackend` 目前仅支持 `Native/Off`，社区希望开放第三方后端接缝（含 MCP），是架构级增强提案，讨论活跃（8 评论）。

3. **[#6955](https://github.com/codewhale-hq/Codewhale/issues/6955) — 8 MiB 以上会话文档无法 resume/fork**
   journal 无上限膨胀是根因，错误提示未给出任何补救路径，直接影响重度用户的长会话工作流。

4. **[#6954](https://github.com/codewhale-hq/Codewhale/issues/6954) — 含原始 sub-agent handoff 的历史无法恢复**
   canonical acknowledgement 比对 Engine 恢复消息与保存文档不一致即拒绝，与 #6955 同属会话持久化可靠性问题。

5. **[#7045](https://github.com/codewhale-hq/Codewhale/issues/7045) — SSE 重试被流打开窗口截断（新，今日创建）**
   瞬时 429 直接杀死当前 turn，`max_retries=35` 形同虚设；HTTP/1.1 回退路径无重试无分类。网络层高优先级 bug。

6. **[#7042](https://github.com/codewhale-hq/Codewhale/issues/7042) — workspace 级 flock 阻止同目录并行恢复第二个会话**
   一会话打开时 `resume` 另一会话被拒，影响多会话并行使用场景。

7. **[#7039](https://github.com/codewhale-hq/Codewhale/issues/7039) — Provider 原生搜索返回未验证引用**
   返回的 URL 可 404，甚至出现虚构 PR 引用并进入 subagent 结论——“错误但自信的结果比没有结果更糟”，可信度问题的核心提案。

8. **[#7038](https://github.com/codewhale-hq/Codewhale/issues/7038) — Web fetch 不升级浏览器、JS 渲染页丢弃元数据**
   华为/OpenHarmony 等客户端渲染文档系统性不可抓取，与 #7040（只读角色无网络逃生通道）构成 Web 能力短板系列。

9. **[#7035](https://github.com/codewhale-hq/Codewhale/issues/7035) — MCP 启动 chip 永久卡在 "connecting"**
   种子预测（seeded prediction）无超时机制，7 服务器配置实测复现，影响 MCP 用户体验的可信度。

10. **[#7043](https://github.com/codewhale-hq/Codewhale/issues/7043) — 黑底黑字不可读（macOS 0.10.1，shoreline 等主题）**
    低门槛但直接影响可用性的主题渲染 bug，预计纳入 0.10.2。

---

## 四、重要 PR 进展

1. **[#7041](https://github.com/codewhale-hq/Codewhale/pull/7041)**（开放）— 修复 shell 执行时 `with_env` 整体替换环境映射，导致 Windows `PYTHONIOENCODING` 等 stdio 默认值丢失的问题。

2. **[#7009](https://github.com/codewhale-hq/Codewhale/pull/7009)**（开放）— 完成 13 个核心导航命令（`/anchor`、`/turn`、`/transcript` 等）的可移植 Shapes 抽象（FEAT-031），为后续 crate 拆分铺路。

3. **[#7033](https://github.com/codewhale-hq/Codewhale/pull/7033)**（已关闭）— 修复长标题 to-do 行在窄屏下丢失状态词的布局问题。

4. **[#7030](https://github.com/codewhale-hq/Codewhale/pull/7030)**（已关闭）— 修复 markdown 渲染中嵌套列表缩进被 strip 导致层级拍平的问题。

5. **[#7034](https://github.com/codewhale-hq/Codewhale/pull/7034)**（已关闭）— 修复审批卡片 footer 分隔符错位（起始悬空圆点、提示语粘连）。

> 过去 24 小时 PR 共 5 条，三条为 @Lstarsky0 的 TUI 细节修复并已关闭，符合 #6094 描述的贡献者 PR 保留原分支的合入模式。

---

## 五、功能需求趋势

- **Web 搜索与抓取可靠性**（#7038/#7039/#7040/#7037）：引用验证、浏览器升级、只读角色逃生通道、测试覆盖，是本周期最密集的需求簇。
- **可插拔架构**（#6050）：记忆后端插件化，呼应 MCP 生态扩展方向。
- **Runtime/TUI crate 拆分**（#6937/#6941/#7009）：RS-10/RS-14 系列持续推进，工程模块化是维护者明确的路线。
- **多会话与并发**（#7042/#6915）：workspace 级锁与 Engine 启动恢复。

---

## 六、开发者关注点

1. **会话持久化可靠性**：8 MiB 上限（#6955）、handoff 恢复失败（#6954）、并行 resume 被锁（#7042）——长会话用户痛点集中。
2. **网络层健壮性**：SSE 重试上限失效（#7045）在限流场景下放大故障。
3. **MCP 体验**：连接状态无超时（#7035）、插件建议误触发（#7036，提到 MCP 即弹 Convex 推荐）。
4. **TUI 渲染细节**：主题配色（#7043）、列表缩进与状态词截断已通过 PR 修复，说明社区对小颗粒 UI 修复响应迅速。
5. **成本经济性**：#6969 指出 deferred-toolbox 驱逐策略在 prompt cache 定价下净亏损，体现社区对 token 成本的精细化关注。

---
*数据截至 2026-10-22，Issue/PR 链接均指向 codewhale-hq/Codewhale 仓库。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报（2026-10-22）

## 📌 今日速览

Pi 发布 **v1.4.0**，为分类器模型带来图像输入能力，覆盖 TypeSafe Jev 与 Cloudflare Clef 等模型。社区方面，Windows TUI 兼容性问题持续发酵，Scaleway 提供商正式合入，多个 P0 级修复（grep 配置污染、`/tree` 工具失效、会话恢复）在本日集中关闭。

---

## 🚀 版本发布

### v1.4.0
- **分类器模型图像输入**：codemode 的 `models.classify()` 现支持 `images` 参数，适用于 TypeSafe Jev 和 Cloudflare Clef 模型，覆盖 `typesafe`、`cloudflare-workers-ai` 和 OpenRouter 渠道。[查看详情](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent)

---

## 🔥 社区热点 Issues

1. **[#6300](https://github.com/earendil-works/pi/issues/6300) [CLOSED] Windows 输入行每次按键重绘（每字符换行）**
   Windows TUI 老大难问题，20 条评论、横跨三个月的讨论，今日终于关闭。Windows 终端兼容性是 Pi 的持续痛点。

2. **[#7553](https://github.com/earendil-works/pi/issues/7553) [OPEN] 为 compaction 配置独立的思考级别/模型**
   压缩（自动/手动）无条件复用会话当前 thinking level，导致推理模型用户的摘要思考预算与正常轮次耦合。11 条评论、3 👍，标记 to-discuss，是高级用户的强需求。

3. **[#10019](https://github.com/earendil-works/pi/issues/10019) [OPEN] Anthropic 订阅请求在 UTC :00/:30 挂起**
   请求返回 200 + pings 但无 `message_start`，会话冻结且 Claude Code 无此问题，疑似 Pi 侧流处理缺陷。

4. **[#9656](https://github.com/earendil-works/pi/issues/9656) [OPEN] 全屏模式下 Windows + Zellij 鼠标滚轮滚动错误**
   滚轮滚动提示历史而非对话记录，仅在 Windows 原生 Zellij 下复现（Linux + tmux 正常），4 👍 反映了复现难度与影响面。

5. **[#10956](https://github.com/earendil-works/pi/issues/10956) [OPEN] cacheWarming "idle" 被扩展的 turn_end 处理静默中断**
   有用户 9 月以来 507 次决策事件全部未触发空闲预热，成本优化场景下的实际痛点。

6. **[#11112](https://github.com/earendil-works/pi/issues/11112) [OPEN] 让 prepareArguments 修复解析失败的工具调用参数**
   Sonnet 5 偶尔输出 `"oldText">` 这类畸形 JSON，目前直接降级为空参数。提案让扩展有机会修复，是提升容错韧性的好方向。

7. **[#10995](https://github.com/earendil-works/pi/issues/10995) [CLOSED] 模型切换后旧模型 thinking 被转为纯文本**
   GLM-5.3 → Kimi K3 切换后，新模型模仿错误模式把推理写进可见回复。多模型混用场景的关键修复。

8. **[#11200](https://github.com/earendil-works/pi/issues/11200) [CLOSED] [p0] OpenAI-Responses 流缺失 arguments 时崩溃**
   兼容网关缺少 `arguments` 字段即触发 `undefined.startsWith` 崩溃，P0 快速闭环。

9. **[#11086](https://github.com/earendil-works/pi/issues/11086) [OPEN] [p0] Windows 终端 CPU 高负载时符号泄漏进输入**
   SSH + 客户端高 CPU 场景下终端转义序列解析异常，与 #6300 一同构成 Windows TUI 稳定性主题。

10. **[#10984](https://github.com/earendil-works/pi/issues/10984) [OPEN] 向不支持图像的模型发图后 会话永久报错**
    一次错误后图像字段被持续携带，会话不可用，只能新建。交互健壮性欠缺的典型案例。

---

## 🔧 重要 PR 进展

1. **[#11181](https://github.com/earendil-works/pi/pull/11181) [CLOSED] 新增 Scaleway 提供商** — 内置 OpenAI 兼容 provider，支持 `SCW_SECRET_KEY` 和 `/login scaleway`，关闭了 6 月提出的 #6165。

2. **[#11230](https://github.com/earendil-works/pi/pull/11230) [CLOSED] grep 工具通过 `--no-config` 忽略 ripgrep 配置** — 修复 `RIPGREP_CONFIG_PATH` 中 `--fixed-strings` 导致搜索结果不完整的隐蔽 bug（对应 #11203），当日提出当日合入。

3. **[#11233](https://github.com/earendil-works/pi/pull/11233) [CLOSED] 修复长度恢复时遗漏工具结果** — recovery 隐藏失败消息时的 context edit 不再误删工具结果。

4. **[#11212](https://github.com/earendil-works/pi/pull/11212) [CLOSED] @ 自动补全转义正则元字符** — 修复 `[id].tsx` 等括号文件名无法补全的问题（#10972）。

5. **[#11247](https://github.com/earendil-works/pi/pull/11247) [CLOSED] codemode 允许脚本声明 tools/console 变量** — 解除包装函数参数名与脚本顶层声明冲突导致的 SyntaxError。

6. **[#9993](https://github.com/earendil-works/pi/pull/9993) [CLOSED] Vertex AI 提供商支持 Anthropic Claude** — 通过 GCP 凭证直接使用 Sonnet/Opus/Haiku，历时近一个月终合入。

7. **[#11005](https://github.com/earendil-works/pi/pull/11005) [CLOSED] 修复 Gemini 4 未映射模型的 thinkingBudget 400 错误** — P0 回归修复，解除自定义 `models.json` 的阻塞。

8. **[#11213](https://github.com/earendil-works/pi/pull/11213) [CLOSED] pi-durable 增加提供商归因 header** — 统一 provider/session 归因 header 表，提升可观测性。

9. **[#7441](https://github.com/earendil-works/pi/pull/7441) [CLOSED] openai-completions 容忍缺失 finish_reason** — 修复不合规网关下每个会话必挂的问题，8 月提交、今日合入。

10. **[#10286](https://github.com/earendil-works/pi/pull/10286) [OPEN] 使用 OpenRouter 实际计费成本** — 用网关上报的真实账单替代目录估算，成本敏感用户期待合入。

---

## 📈 功能需求趋势

- **Windows / 终端兼容性**（#6300、#9656、#11086）：Windows TUI 是最大问题聚集地，涉及渲染、鼠标、输入解析多层。
- **多提供商扩展**：Scaleway（#11181）、Vertex 上的 Claude（#9993）、OpenRouter 计费（#10286）——社区持续推动 EU 托管、混合云和成本透明。
- **流式与协议容错**：对不合规 OpenAI 兼容网关的容忍度（#7441、#11200、#10949）成为高频主题，反映 Pi 被大量用作多网关前端。
- **上下文与成本管理**：独立 compaction thinking 级别（#7553）、cache warming 可靠性（#10956、#10536）是重度用户的核心诉求。
- **会话/树状态一致性**：`/tree` 回溯、会话恢复后工具集恢复（#11075、#11062）等多个 P0 已修复，显示维护者在该方向的集中投入。

## ⚠️ 开发者关注点

1. **扩展生态的边界行为**：`registerVirtualModel`、turn_end 处理、`createAgentSession` 在扩展内死锁（#11198）等，表明扩展 API 的生命周期与并发语义需要更明确的契约。
2. **模型切换与 thinking 块处理**：跨模型 replay 时 thinking 块的格式转换（#10995、#10954）是反复出现的坑。
3. **错误恢复韧性**：畸形 JSON 参数（#11112）、向不支持的模型发图（#10984）等场景缺乏优雅降级路径，社区希望失败可修复而非会话报废。
4. **静默失败**：`pi -p` 空输出退出 0（#11012）、cache warming 静默停止（#10956）这类“无报错但行为不对”的问题最消耗排查时间。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-10-22

## 一、今日速览

今天 oh-my-pi 发布了 **v18.12.6**，主要更新了模型目录（新增 prompt-cache-persistent 轴、刷新 Yolo-Auto 目录）。Issue 区持续活跃（24 小时内更新 57 条），热点集中在**图像预算机制导致的 prompt cache 反复失效**、**TUI 图片渲染空白**和**多供应商配额/路由问题**。PR 区（251 条更新）涌现大量测试基建与工具链修复，其中小米 MiMo V2.6 登录校验修复（review:p0/p1）和 Nix Darwin 构建修复较为关键。

---

## 二、版本发布

### [v18.12.6](https://github.com/can1357/oh-my-pi/releases)
**@oh-my-pi/pi-catalog**
- **Added**：新增 `prompt-cache-persistent` 目录轴（`isPromptCachePersistent`），用于标记供应商端点自身不过期 prompt cache 的提供商；已登录的 OpenAI Codex 已声明该属性。
- **Changed**：更新内置 Yolo-Auto 目录至当前模型列表（`qwen3.8-27` 等）。

---

## 三、社区热点 Issues

1. **[#15230](https://github.com/can1357/oh-my-pi/issues/15230)｜Image-budget 钳制每请求逐出一张图，重写整个 Anthropic prompt cache**（10 评论）
   会话图片数超预算后，`clampProviderContextImages()` 每次请求丢弃最旧一张图，导致每张新截图都触发全量 prompt cache 重写——直接推高成本与延迟。高频使用截图工作流的用户最受影响。

2. **[#16693](https://github.com/can1357/oh-my-pi/issues/16693)｜Marketplace 自动更新残留 16,000 个临时克隆目录，吃掉数百 GB 磁盘**（p1）
   omp 启动期间退出会在 `~/.omp/plugins/cache/marketplaces/` 留下完整 checkout，累积效应惊人。少数直接影响用户机器健康的 bug，建议尽快处理。

3. **[#16672](https://github.com/can1357/oh-my-pi/issues/16672)｜子代理在 MCP 连接前创建后，重启时把全部 MCP schema 顶层注入（约 199k token/轮）**（7 评论）
   大型 MCP 服务器场景下的性能炸弹，单轮多消耗约 20 万 schema token，属于上下文预算的重大泄漏。

4. **[#6022](https://github.com/can1357/oh-my-pi/issues/6022)｜紧凑工具调用渲染：聚合连续调用、无边框显示**（8 评论，👍2）
   长期开放的 UX 诉求：大量小工具调用各自渲染全宽边框盒子造成刷屏。今日有对应 PR #16726 落地 `display.collapsedToolTitles`，值得关注联动进展。

5. **[#14135](https://github.com/can1357/oh-my-pi/issues/14135)｜Anthropic OAuth 回调端口 54545 写死，多 devcontainer 冲突**（7 评论，p2）
   多窗口 VS Code devcontainer 环境下端口被占导致登录失败，是 devcontainer 用户的高频痛点。

6. **[#16104](https://github.com/can1357/oh-my-pi/issues/16104)｜Antigravity：Gemini 4 配额耗尽的免费桶阻塞付费账户，Gemini 3.8 Flash 全部路由到已耗尽的免费号**（5 评论）
   多账户配额调度逻辑缺陷，付费用户反而完全无法使用，涉及真金白银的体验问题。

7. **[#16723](https://github.com/can1357/oh-my-pi/issues/16723)｜mnemopi 图语音仍使用 ASCII-only 正则提取实体，代词正则误匹配越南语词尾 "i"**（5 评论，今日新增）
   #7918 修复 gist 侧后，graph voice 侧同样的问题依然存在——非英语用户记忆系统国际化仍不完整。已有对应修复 PR #16724。

8. **[#16610](https://github.com/can1357/oh-my-pi/issues/16610)｜web/deepseek 搜索引擎自 18.12.2 起从目录中丢失**（5 评论，p2）
   目录再生成的意外回归，导致功能完全不可选。社区已提交修复 PR #16609，回归管理流程值得反思。

9. **[#16618](https://github.com/can1357/oh-my-pi/issues/16618)｜browser：Python 关键字参数落入 selector 槽位、非字符串路径崩溃等系列问题**
   Browser 工具对 Python 调用约定的适配不完善，一次报告覆盖多个边界情况，浏览器自动化用户生产率受损。

10. **[#16639](https://github.com/can1357/oh-my-pi/issues/16639)｜mnemopi 自动召回无相关性下限，无关记忆注入每个会话首轮**
    记忆系统“宁滥勿缺”的默认策略引发质量担忧，与 #16723 一起反映 mnemopi 是当前反馈最密集的子模块。

---

## 四、重要 PR 进展

1. **[#16727](https://github.com/can1357/oh-my-pi/pull/16727)｜fix: Xiaomi 登录校验切换至 MiMo V2.6**（review:p1）
   Xiaomi Token Plan 校验写死 `mimo-v2.5` 已不再受支持，改用 `mimo-v2.6-flash` 并更新三个区域默认模型——供应商侧模型下线的紧急适配。

2. **[#16722](https://github.com/can1357/oh-my-pi/pull/16722)｜test: npm 全局布局 fixture**（review:p0）
   修复隔离 fixture 中 npm 全局 `node_modules` 缺失的问题，使 min-release-age 契约的 dry run 真正生效。

3. **[#16709](https://github.com/can1357/oh-my-pi/pull/16709)｜test(ai): 收窄图像钳制 fixture**（review:p0）
   将超高图 fixture 从 1440x8570 缩至 240x8570，在保留断言语义的同时大幅降低测试开销，覆盖 Anthropic/Antigravity 钳制边界。

4. **[#16726](https://github.com/can1357/oh-my-pi/pull/16726)｜feat(tui): `display.collapsedToolTitles` 单行工具调用**
   直接回应 #6022 的信息过载痛点，在“全部隐藏”与“全量渲染”之间提供中间档。

5. **[#16584](https://github.com/can1357/oh-my-pi/pull/16584)｜fix(nix): Darwin 构建 Apple Foundation Models 桥接**（review:p1）
   为 Nix 构建钉住 Swift 6.4 与 macOS SDK 27，修复此前静默缺失 AFM 支持的构建问题。

6. **[#16724](https://github.com/can1357/oh-my-pi/pull/16724)｜fix(mnemopi): gist 与 graph voice 共享 Unicode 专名提取**
   用统一提取器修复 #16723 中的越南语/非 ASCII 实体识别问题。

7. **[#16415](https://github.com/can1357/oh-my-pi/pull/16415)｜fix(tui): /usage 条形图旁显示已用配额百分比**（review:p1）
   使数字与进度条语义一致（% used vs 剩余），小改动大体验。

8. **[#16460](https://github.com/can1357/oh-my-pi/pull/16460)｜fix: 扩展 compaction 失败改为上报而非 reject**（review:p1）
   `ctx.compact()` 失败现在走扩展自身错误回调，符合回调式扩展 API 契约。

9. **[#16160](https://github.com/can1357/oh-my-pi/pull/16160)｜feat: /context 交互式只读 Context Viewer**
   替代 `/dump` 的低效方式，允许直接检查实际上下文内容——对调试 prompt 组成的用户是刚需。

10. **[#16458](https://github.com/can1357/oh-my-pi/pull/16458)｜fix(tui): kitty 键盘协议在同一写入中启用**（review:p1）
    修复握手期间按键丢失的问题，且按 screen 独立维护两套编码栈——与 #16721（WSL 下 Alt+Shift 组合键失效）相关，值得追踪。

---

## 五、功能需求趋势

- **记忆系统（mnemopi）质量与国际化**：#16723、#16639、#16679 集中出现，社区关注召回相关性过滤、非英语实体提取、与 Anthropic 政策的兼容。
- **Provider 目录准确性与路由**：#16610（目录条目丢失）、#16711（长上下文定价缺失）、#16104（多账户配额调度）、#12690（Perplexity 搜索 API 迁移提案）——目录数据与调度策略成为稳定性的关键。
- **TUI 渲染与信息密度**：#6022、#16635、#13675、#16660，围绕图片/图表渲染上限、长行软换行、工具调用紧凑显示的诉求持续发酵。
- **多语言/Unicode 处理**：#16723 与 PR #16466（全角标点折叠）显示 CJK/越南语用户群体的实际规模。
- **浏览器自动化健壮性**：#16618、#16619、#16620、#15256，CDP 附加与 Python 绑定边界问题集中。

---

## 六、开发者关注点

- **Prompt cache 有效性是成本核心**：#15230（图片钳制重写缓存）叠加 #16672（MCP schema 顶层注入 199k token），上下文管理的微小缺陷会被 token 单价放大，开发者对“哪些操作会打碎 cache”高度敏感。
- **磁盘与资源卫生**：#16693（数百 GB 临时克隆残留）提醒用户检查 `~/.omp/plugins/cache/marketplaces/`，也暴露了后台任务的清理责任问题。
- **认证与环境适配**：写死的回调端口（#14135）、供应商模型下线导致登录失败（PR #16727）、OAuth 中断（#16652）表明认证层需要更强的可配置性与容错。
- **多终端/多路复用环境兼容性**：WSL（#16721）、tmux/screen（PR #16717）、iTerm2/Kitty（#13675、#16660）上的键盘与图像协议问题依旧高频，是 TUI 工具绕不开的深水区。

---

*数据来源：GitHub can1357/oh-my-pi（Issues 57 条更新 / PR 251 条更新 / Release v18.12.6）*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*