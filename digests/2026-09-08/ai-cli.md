# AI CLI 工具社区动态日报 2026-09-08

> 生成时间: 2026-09-08 03:38 UTC | 覆盖工具: 11 个

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
**日期：2026-09-08 | 数据范围：12 个主流 AI CLI 工具 GitHub 社区动态**

---

## 一、生态全景

AI CLI 工具已从单一编码助手演进为“终端原生 Agent 平台”，竞争焦点转向**多代理编排、后台自动化（daemon/serve 模式）和插件/扩展生态**。与此同时，所有头部工具都面临三类共性挑战：**付费容量/计费透明度引发的信任危机（Claude Code、Codex）、静默失败/数据安全事件、Windows 平台体验系统性落后**。开源新势力（Pi、OpenCode、oh-my-pi、Qwen Code）通过快速响应 provider 变动和高度模块化架构，正以“周级迭代”侵蚀闭源巨头的体验优势。

---

## 二、各工具活跃度对比

| 工具 | Issues 更新（今日/总热度） | PR 更新 | Release | 主要信号 |
|---|---|---|---|---|
| **Claude Code** | 10+ 热点（#16157 达 1493 评论/694👍） | 2（历来稀少） | 无 | 数据安全高危事件、计费争议 |
| **OpenAI Codex** | 10+ 热点，容量故障连环爆发 | 10+（copyberry bot 自动合并） | rust-v0.154.0-alpha.6 | 服务端容量危机、语音/Guardian 开发密集 |
| **Gemini CLI** | 10+ 热点（Subagent 为焦点） | 10+（含批量关闭） | v0.60.0-nightly | Subagent 可靠性、安全沙箱 |
| **GitHub Copilot CLI** | 10 热点（v1.0.83 回归集中） | 4 | 无 | 会话管理回归、桌面端限制争议 |
| **Qwen Code** | 47 更新 | 50 更新 | v0.23.1-preview.2 + cua-driver-rs | **当日最活跃**，daemon/Web Shell 主线 |
| **OpenCode** | 10 热点（大量批量关闭） | 10+ | 无 | Provider 扩张、无限代理模式 |
| **Pi** | 64 更新 | 27 更新 | 无 | Provider 适配、架构演进 |
| **oh-my-pi** | 56 更新 | 10+ | v18.1.14 | P0/P1 修复高频，异步进度重构 |
| **DeepSeek TUI (CodeWhale)** | 10 热点 | 10+ | 0.9.13 冲刺中 | 创始人 live-report 驱动修复 |
| **DeepSeek Harness** | 0 | 0 | v0.1.3-alpha.2 | 平静，纯版本驱动 |
| **Kimi Code CLI** | 2 | 1 | 无 | 早期阶段，样本量小 |

**分层结论**：Claude Code 社区规模最大但互动单向（Issue 为主）；Qwen Code、Pi、oh-my-pi 的更新量（50+/64/56）显示开源阵营工程节奏最快。

---

## 三、共同关注的功能方向

### 1. Subagent / 多代理可靠性（覆盖面最广）
- **Gemini CLI**：挂起（#21409）、误报成功（#22323）、不主动调用（#21968）
- **Claude Code**：跨会话 SendMessage/ListAgents 回归（#92016、#92258）
- **OpenCode**：子代理无法用 todowrite（#12938）；**DeepSeek Harness** 专门发布子代理 Steer/消息排队能力
- **Codex**：worktree 任务不继承自动批准（#33282）
→ **“多代理”已从卖点变为 bug 富矿，状态机与可观测性是共同短板。**

### 2. 会话生命周期管理（resume/fork/undo）
- **Copilot CLI**：resume 破坏 MCP（#4753）、stale item ID（#4505）、wedge（#4755）
- **oh-my-pi**：`/tan` 分叉 mid-turn 两连报；**OpenCode**：`/undo` 不回退文件（22👍）；**Gemini CLI**：`/compress` 恢复后丢失
→ **会话恢复路径是当前全行业质量薄弱点。**

### 3. Provider 兼容性与模型路由
- **Pi**：OpenCode 会话头、Copilot Responses 路由、Bedrock 图片
- **oh-my-pi**：Zhipu 时区、reasoning-off 降级重试（今日发版修复）
- **OpenCode**：阿里云、Z.AI、Moonshot、Snowflake Cortex 密集合入
- **Qwen Code**：llama-server grammar 回归、`/effort` 透传

### 4. 后台/daemon 自治运行
- **Qwen Code**：serve 模式输出丢失（#11119）、后台 Agent 恢复（#8586）
- **OpenCode**：无限代理模式（#47019）；**oh-my-pi**：异步进度投递三件套；**Codex/DeepSeek TUI**：goal/预算控制

### 5. 安全与数据保护
- **Claude Code**：`rm -rf` 误删照片（high-priority）、静默删 transcript；**Gemini CLI**：脱敏时机过晚、`.env` 注入；**oh-my-pi**：卸载残留 symlink 供应链风险；**OpenCode**：MCP 证书 pinning

### 6. Windows 平台体验
Claude Code（置顶/conhost）、Codex（白屏/快捷键崩溃）、Copilot（会话限制）、Qwen（ConPTY 泄漏 347 进程/2.8GB）、oh-my-pi（孤儿 worker）、Kimi（IME）——**几乎无一幸免**。

---

## 四、差异化定位分析

| 工具 | 定位 | 技术路线 | 目标用户 |
|---|---|---|---|
| **Claude Code** | 闭源生态旗舰，功能最全（桌面/Web/RC/Cowork microVM） | 内部开发，Issue 驱动反馈 | Max 订阅重度付费用户 |
| **Codex** | 多模态激进（WebRTC 语音、Computer Use、Secure Enclave） | Rust 重写 + bot 自动化流水线 | OpenAI 订阅用户、语音/浏览器场景 |
| **Gemini CLI** | 大厂开源 + 架构探索（零依赖 OS 沙箱、AST 感知工具） | 社区 PR 活跃、P0-P2 分级 | 免费额度用户、扩展开发者 |
| **Copilot CLI** | GitHub 生态深度绑定（workspace/collection/记忆） | 桌面+CLI 双端 | GitHub 企业/托管策略用户 |
| **Qwen Code** | 后台自动化先锋（serve/daemon/Web Shell/cua-driver 跨端） | 高度 bot 自动化 CI，迭代最激进 | 本地推理、IM 集成（钉钉 Channel）用户 |
| **OpenCode** | Provider 无关的开放平台 | 多 provider/多用户/自托管优先 | 企业自托管、非 OpenAI/Anthropic 模型用户 |
| **Pi / oh-my-pi** | 轻量高性能瑞士军刀 | provider 适配层（pi-ai）+ 扩展 API 一等公民化 | 多模型切换的重度终端用户 |
| **DeepSeek 双产品** | TUI 打磨（CodeWhale）vs Harness 编排实验 | Rust、EPIC 化架构治理、founder live-report | DeepSeek 模型用户、早期采用者 |
| **Kimi Code CLI** | 早期追赶者 | 第三方 PR 探路（远程配对） | 小规模社区 |

---

## 五、社区热度与成熟度

- **成熟期（大社区、慢修复）**：Claude Code、Codex —— 社区声量最大，但 8 个月+ 的老 issue（#16157、#28507）反映闭源响应瓶颈；两者正经历**付费用户信任危机**。
- **快速上升期**：Qwen Code、Pi、oh-my-pi —— 日均 50+ 更新、外部 provider 变动当天修复（Pi 的 #9230 快速闭环）、发版频率高（oh-my-pi v18.1.14）。
- **稳定迭代期**：Gemini CLI、OpenCode、DeepSeek TUI —— 架构治理化（EPIC 拆分、批量 issue 清理、文档评测工程化）。
- **早期**：Kimi CLI、DeepSeek Harness —— 社区互动稀疏，产品驱动为主。

---

## 六、值得关注的趋势信号

1. **“静默失败”成为行业头号信任杀手**。生图 404 被吞、subagent 误报 GOAL success、压缩截断的工具调用被“修复成合法 JSON 执行”、`rm -rf` 未验证即执行——社区共识是“宁可报错，不要装作成功”。**对开发者的启示：部署 agent 时必须自建结果验证与 destructive 操作的二次确认层，不能依赖工具内置保障。**

2. **Agent 正从“会话”走向“常驻服务”**。daemon/serve、无限代理模式、异步进度投递、goal 预算控制在 6+ 个工具中同步出现。**长时自治场景的会话回收、后台恢复、资源清理（Windows 进程泄漏）将成为下一轮竞争的决胜点。**

3. **计费/容量透明度是付费产品最大风险敞口**。Claude 限额秒触（1493 评论）与 Codex 容量故障（3 个月未解、$200/月用户流失）表明：**模型能力趋同后，服务可用性与用量可预测性将主导付费工具的选型。**

4. **Provider 中立层价值上升**。Pi/oh-my-pi/OpenCode 对 provider 变动的快速适配证明，“模型可插拔 + 认证/降级/重试统一处理”的抽象层正成为独立价值点，且被其他工具复用（DeepSeek Harness 直接依赖 pi-ai）。

5. **安全边界从权限模型转向纵深防御**。MCP 证书 pinning、沙箱文件系统隔离、确定性前置脱敏、环境变量剥离——**企业采用 AI CLI 前，应重点审计工具的数据保留策略、脱敏时机与会话注入边界。**

6. **Windows 是所有工具的共性洼地**，且 IM 集成（钉钉 Channel）、非拉丁 IME 等国际化需求开始出现——**中文开发者社区在部分开源项目（Qwen Code、DeepSeek 系）中已成为一手生产环境反馈来源。**

---

*本报告基于 2026-09-08 各仓库公开 GitHub 数据自动生成的日报汇总而成，样本为单日窗口，趋势判断建议结合多日数据验证。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
（数据截止 2026-09-08，来源：anthropics/skills）

> ⚠️ 数据说明：本次抓取的 PR 评论数与点赞数均为空（undefined），"热门"排序基于 PR 入选热门列表及关联 Issue 讨论热度综合推断。所有入选 PR 状态均为 **OPEN**，无已合并条目。

---

## 一、热门 Skills 排行（PR）

| # | PR | Skill | 状态 | 看点 |
|---|----|----|------|------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 评测修复** | OPEN | 修复 `run_eval.py` 恒报 0% recall 的核心缺陷，关联 [Issue #556](https://github.com/anthropics/skills/issues/556)（10+ 独立复现、12 条评论），是社区最痛的 bug 修复 |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | OPEN | AI 生成文档的排版质控：孤行、寡段、编号对齐，直击 Claude 文档输出的普遍痛点 |
| 3 | [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind 多智能体编排** | OPEN | 零成本编排：Claude Code 作规划者，headless opencode 免费模型做机械劳动，反映"上下文是稀缺资源"的编排思路 |
| 4 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit 质量门禁** | OPEN | 机械文件校验 + 四维推理审计，与作者同期 [Issue #1385](https://github.com/anthropics/skills/issues/1385) 的推理质量流水线提案呼应 |
| 5 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT 文档 Skill** | OPEN | OpenDocument 创建/模板填充/转 HTML，补齐开源文档格式空白 |
| 6 | [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design 改进** | OPEN | 提升官方前端设计 Skill 的可执行性与指令清晰度 |
| 7 | [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | OPEN | SCNet HPC 集群 SSH + Slurm 作业操作，体现科研计算场景需求 |
| 8 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality / security-analyzer** | OPEN | 元 Skill：给 Skill 本身做质量与安全体检，呼应 [Issue #492](https://github.com/anthropics/skills/issues/492) 的信任边界安全议题 |

**Bug 修复类高热 PR**（同样值得关注）：
- [#541](https://github.com/anthropics/skills/pull/541) docx 修订 ID 冲突导致文档损坏
- [#538](https://github.com/anthropics/skills/pull/538) pdf SKILL.md 大小写引用错误（Linux 上必现）
- [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050) skill-creator Windows 兼容性（subprocess、`claude.cmd`、编码）
- [#1602](https://github.com/anthropics/skills/pull/1602) mcp-builder 评测序列化与指标修复（关联 [Issue #1390](https://github.com/anthropics/skills/issues/1390)）

---

## 二、社区需求趋势（Issues 提炼）

1. **安全与信任边界**（最热，[#492](https://github.com/anthropics/skills/issues/492)，43 评论）：社区 Skill 冒用 `anthropic/` 命名空间，用户呼吁签名/命名空间隔离机制；[Issue #1175](https://github.com/anthropics/skills/issues/1175) 也关注企业场景权限控制。
2. **组织级分发与共享**：[#228](https://github.com/anthropics/skills/issues/228)（16 评论）要求组织内 Skill 库与直接分享链接，替代"下载 .skill 走 Slack"的原始流程。
3. **skill-creator 评测工具链可靠性**：[#556](https://github.com/anthropics/skills/issues/556)（12 评论）触发率恒为 0，描述优化循环等于对噪声优化；Windows 用户 (#1099/#1050) 反复受阻。
4. **上下文效率**：[#1487](https://github.com/anthropics/skills/issues/1487) `claude-api` skill 单次注入 ~156k token 撑爆上下文；[#1329](https://github.com/anthropics/skills/issues/1329) 提议 compact-memory 符号化压缩 agent 状态。
5. **输出质量门禁 / 治理**：[#1385](https://github.com/anthropics/skills/issues/1385)、[#412](https://github.com/anthropics/skills/issues/412) 均要求对 AI 交付物做对抗性审查与治理审计。
6. **平台兼容性**：AWS Bedrock 支持 ([#29](https://github.com/anthropics/skills/issues/29))、Windows 兼容、pnpm ≥10.1 ([#1362](https://github.com/anthropics/skills/issues/1362))。
7. **Skill 与 MCP 融合**：[#16](https://github.com/anthropics/skills/issues/16) 提出 Skill 暴露为 MCP 接口。

---

## 三、高潜力待合并 Skills（OPEN 但活跃度高）

- **#1298 skill-creator 评测修复** — 对应官方核心工具链最严重的缺陷（#556），合并优先级最高，官方压力明确。
- **#541 docx 修订 ID 冲突修复** — 数据损坏级 bug，修复方向清晰（避免硬编码低 ID），易合并。
- **#538 pdf 大小写修复** — 8 处机械替换，低风险高确定性。
- **#1607 claude-api 模型退役标注** / **#1724 mcp-builder 默认模型更新** — 文档级小修，配合官方模型迭代节奏，落地概率大。
- **#514 document-typography** — 讨论周期长（3 月至今），覆盖所有文档生成场景，属官方文档 Skill 线的自然延伸。
- **#210 frontend-design 改进** — 存量 Skill 质量优化，与官方"SKILL.md 应是操作指令而非教学文档"的取向一致（呼应已关闭的 [#202](https://github.com/anthropics/skills/issues/202)）。

---

## 四、生态洞察（一句话总结）

**社区最集中的诉求不是"更多 Skill"，而是"可信的分发机制 + 可靠的评测工具链 + 克制的上下文消耗"——即 Skills 生态的基建质量先于数量。**

---

# Claude Code 社区动态日报
**日期：2026-09-08 | 数据来源：github.com/anthropics/claude-code**

---

## 一、今日速览

今日无新版本发布。社区热度最高的是 Max 订阅用户“瞬间触发用量上限”的老牌 bug（#16157，评论近 1500 条），以及 @poteat 提出的 Function Hooks 插件架构提案（#91870，官方征集反馈中）。数据安全方面出现多个高危信号：静默删除会话记录（#59248）、`rm -rf` 误删用户照片（#92737）值得所有用户警惕。

---

## 二、版本发布

过去 24 小时无新 Release。

---

## 三、社区热点 Issues

1. **[#16157](https://github.com/anthropics/claude-code/issues/16157) Max 订阅瞬间触发用量上限** | 1493 评论 / 694 👍
   持续 8 个多月的老大难问题，已被打上 `oncall` 标签，官方持续跟进中。这是社区对计费/限额透明度不满的集中爆发点。

2. **[#91870](https://github.com/anthropics/claude-code/issues/91870) Function Hooks 插件深度定制提案** | 137 评论 / 83 👍
   仿 Express/Koa 中间件模型，允许通过 `$` 对象副作用追踪深度修改 Claude Code 行为。官方主动征集社区反馈，是插件生态的关键方向。

3. **[#59248](https://github.com/anthropics/claude-code/issues/59248) 静默清理删除会话记录（data-loss）** | 42 评论
   无提示、无 opt-in、无法恢复地删除历史 transcript，涉及用户核心数据资产，标记 `has repro`，数据保留策略亟需改进。

4. **[#92737](https://github.com/anthropics/claude-code/issues/92737) Claude 用 rm -rf 删除用户不可替代的个人照片（high-priority, data-loss）**
   移动脚本存在静默 bug 时，Claude 未验证移动成功即执行 `rm -rf` 删除源目录。涉及 agent 安全执行边界，官方标记高优先级。

5. **[#92016](https://github.com/anthropics/claude-code/issues/92016) Desktop Code tab 自动拒绝 CLI 原生 SendMessage，破坏 subagent 恢复** | 19 评论
   桌面端与 CLI 的权限模型不一致导致回归，多 agent 工作流中断。

6. **[#89467](https://github.com/anthropics/claude-code/issues/89467) Windows 桌面窗口强制置顶无法关闭** | 19 评论 / 28 👍
   无任何设置可禁用，Windows 用户体验的顽固痛点。

7. **[#33041](https://github.com/anthropics/claude-code/issues/33041) Remote Control 频繁断连** | 13 评论 / 29 👍
   会话每几分钟自动掉线，远程办公场景的核心障碍，与 #92010（空闲超时暂停 RC）相互印证。

8. **[#65577](https://github.com/anthropics/claude-code/issues/65577) Cowork 本地 microVM 磁盘镜像无限增长**
   `claudevm.bundle/rootfs.img` 从不回收，静默吃满磁盘导致空间故障。

9. **[#91623](https://github.com/anthropics/claude-code/issues/91623) Fable 5.1 后 Max 20x 套餐 22 小时耗尽**
   5.1 每轮输出是 5.0 的 2 倍，输出膨胀直接推高用量消耗，与 #16157 计费问题叠加。

10. **[#92258](https://github.com/anthropics/claude-code/issues/92258) CCD 2.1.258→2.1.260 跨会话 SendMessage/ListAgents 回归**
    桌面端后台更新引入回归，“自动更新破坏功能”模式在多个 issue 中反复出现。

---

## 四、重要 PR 进展

过去 24 小时仅 2 条 PR 更新：

1. **[#39043](https://github.com/anthropics/claude-code/pull/39043) 移除 Frontend Design Skill 中的 "retro-futuristic" 风格推荐**（OPEN）
   @t3dotgg 提交，“Trust me on this one.” —— 知名开发者的设计品味之争。

2. **[#26175](https://github.com/anthropics/claude-code/pull/26175) 修复损坏的原生安装引导脚本**（CLOSED）
   官方安装脚本会静默失败并误删已有 npm 全局安装，导致无可用的 `claude` 命令。已被关闭（可能已由官方内部修复）。

> 💡 注：本仓库 PR 活动历来稀少，主开发在 Anthropic 内部进行，Issue 是社区互动的主阵地。

---

## 五、功能需求趋势

- **插件/钩子生态扩展**：Function Hooks 提案（#91870）、MCP 替换 memory 后端（#48465）、插件 skill 可见性（#92769）
- **多 Agent 协作与跨会话通信**：SendMessage/ListAgents 相关回归集中爆发（#92016、#92258）
- **会话可移植性与记忆管理**：teleport web→local 交接丢上下文（#92734）、memory 需遵守 git worktree 边界（#16600）、compaction 前通知与记录（#89831）
- **桌面端体验打磨**：Enter/Ctrl+Enter 键位自定义（#89673）、usage ring 展示会话上下文（#91712）
- **远程与会话连接稳定性**：Remote Control 断连系列（#33041、#92010、#89752）

---

## 六、开发者关注点

1. **数据安全是最大痛点**：静默删除 transcript（#59248）、`rm -rf` 误删照片（#92737）表明 destructive 操作需要更强的验证与回收机制。
2. **用量计费不透明**：限额秒触（#16157）、Fable 5.1 输出膨胀（#91623）长期得不到根治，付费用户信任持续流失。
3. **桌面端自动更新频繁引入回归**：多个 issue 由 stealth update 触发（#92010、#92258、#91763），且 Windows MSIX 更新可被遗留进程卡死。
4. **Windows 平台体验明显落后**：窗口置顶（#89467）、conhost 闪窗（#66540）、MSIX 更新阻塞（#91763）。
5. **平台一致性缺失**：CLI/桌面/Web 三端的权限、连接器、会话行为不一致，是功能摩擦的反复来源（#92016、#83694、#92734）。

---
*本报告基于过去 24 小时 GitHub 公开数据自动生成。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-09-08

## 一、今日速览

今日 Codex 社区最突出的动态是**大规模"Selected model is at capacity"服务容量故障**——从 6 月持续至今的老 Issue（#28507）持续发酵，过去 24 小时内新增至少 5 条相关 Issue，涵盖 GPT-5.5/5.6/6 Astra 等全线模型，付费 Pro 20x 用户不满情绪明显升温。开发侧则发布 rust-v0.154.0-alpha.6 预览版，PR 活动集中在**TUI 语音对话（WebRTC）**、Guardian 安全审查架构重构和 macOS Secure Enclave 验证等方向。

---

## 二、版本发布

- **rust-v0.154.0-alpha.6**：预发布版本，无详细 changelog，属于 0.154 线的例行 alpha 迭代。([Release 链接](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.6))

---

## 三、社区热点 Issues

1. **#28507 [bug, rate-limits] 模型容量错误持续三个月未解**（46 评论 / 44 👍）
   最受关注的长期痛点。Pro 5x 用户报告 "Selected model is at capacity" 持续出现，社区讨论高度活跃，今日仍在更新。
   https://github.com/openai/codex/issues/28507

2. **#43398 [bug] 全线模型容量故障，仅 5.4-mini 可用（9月7日）**（17 评论）
   Pro 20x 用户报告 GPT-5.5、5.6-Sol、6-Astra 全部失败，是当前容量事件的最新放大，与 #28507 形成连锁反应。
   https://github.com/openai/codex/issues/43398

3. **#43368 / #43682 / #43652 等多条同日新增容量错误 Issue**
   macOS、Linux、Windows 多平台同时中招，说明是服务端问题而非客户端。用户在 #43668 中措辞激烈：“20x 订阅者也一直遇到，你们是在装看不见吗？”
   https://github.com/openai/codex/issues/43368 | https://github.com/openai/codex/issues/43682 | https://github.com/openai/codex/issues/43668

4. **#42853 [bug] Windows Pro 账户模型选择器缺少 GPT-6 Astra**（17 评论）
   合格账户在 Windows Desktop 上看不到新模型，可能涉及功能灰度发布与平台不同步。
   https://github.com/openai/codex/issues/42853

5. **#43321 [bug, safety-check] macOS GPT-5.6 Sol 安全检查误报 + 可观测性问题**（17 评论）
   protectionType=cyber 与 renderer fetch 行为不一致，属于安全层透明度问题，对理解 Codex 安全架构有参考价值。
   https://github.com/openai/codex/issues/43321

6. **#20883 [enhancement, mcp] 请求项目级 MCP 进程池**（21 评论 / 6 👍）
   目前每个 session 独立启动 stdio MCP server，多会话场景资源浪费严重，是 MCP 用户体验的核心架构诉求。
   https://github.com/openai/codex/issues/20883

7. **#25271 [bug] Windows 上 Computer Use 无法识别 Chrome URL**（31 评论）
   连 chrome://newtab/ 都失败，长期未修，反映 Computer Use 在 Windows 平台的成熟度不足。
   https://github.com/openai/codex/issues/25271

8. **#17401 [enhancement] AGENTS.md 支持 @include 指令**（11 评论 / 21 👍）
   高赞功能请求：支持模块化组合指令文件，对大型 monorepo 工作流意义重大，社区呼声持续。
   https://github.com/openai/codex/issues/17401

9. **#42683 [bug] Windows Alt+P 快捷键导致应用崩溃**（11 评论）
   简单可复现的稳定性 bug，影响中文用户群（原报告为中文），暴露 Windows 端质量回归。
   https://github.com/openai/codex/issues/42683

10. **#43673 [bug] Windows 浏览器控制路由中途消失且不可恢复**
    Agent 工作流执行到关键步骤时浏览器控制丢失，导致耗时任务前功尽弃——属于影响实际生产任务的高价值 bug。
    https://github.com/openai/codex/issues/43673

**其他值得留意**：#41871/#43674 Windows 白屏问题多发；#34953 Git LFS 临时文件泄漏；#43675 委托审查被拒授权矛盾；#42973 Desktop 更新后 SSH headless 任务回归。

---

## 四、重要 PR 进展

1. **#43581 TUI 新增 WebRTC 实时语音对话**：`/voice`、`/voice mute`、`/voice stop` 命令，含实时字幕与音量指示。
   https://github.com/openai/codex/pull/43581

2. **#43624 macOS 用户验证接入 Secure Enclave 签名**：生物识别保护的凭证创建/复用/删除，补齐 macOS 验证提供方。
   https://github.com/openai/codex/pull/43624

3. **#43651 语音静音快捷键 + 录音活动指示**：`Ctrl+X` 切换麦克风，标题栏录音状态点。
   https://github.com/openai/codex/pull/43651

4. **#43656 语音转录 split-flap 翻牌动画**：实时转录视觉体验优化。
   https://github.com/openai/codex/pull/43656

5. **#43622 + #43619 服务端版本过旧警告**：CLI 检测到连接的 app-server 版本落后时提示用户，配套稳定版本比较工具函数。
   https://github.com/openai/codex/pull/43622 | https://github.com/openai/codex/pull/43619

6. **#43603 修复 tmux 下 TUI 尺寸通知丢失**：500ms 轮询终端尺寸，解决 tmux 中界面残留旧尺寸问题。
   https://github.com/openai/codex/pull/43603

7. **#43595/#43599/#43601/#43602/#43597 Guardian 上下文注册表系列重构**：将 REPL 证据、图像选择、可信工具/技能元数据统一收敛到 `codex-guardian-context` 共享注册表，是安全审查架构的大规模整理。
   https://github.com/openai/codex/pull/43595

8. **#43572 app-server 关停宽限期可配置**：新增 `shutdownGraceSeconds`，替代固定 60 秒。
   https://github.com/openai/codex/pull/43572

9. **#43604 模型目录剥离 base_instructions**：`models.json` 不再打包基础指令，自动目录更新流程同步过滤。
   https://github.com/openai/codex/pull/43604

10. **#43576 TUI 聚合相邻 Computer Use 操作**：连续 `cua_repl` 调用合并显示为紧凑的"Using computer"分组。
    https://github.com/openai/codex/pull/43576

**观察**：本批 PR 均来自 `copyberry[bot]` 且已 CLOSED，显示 OpenAI 内部高度自动化的合并流水线；今日主线明显是 **TUI 语音能力落地** 与 **Guardian 安全架构模块化**。

---

## 五、功能需求趋势

- **服务稳定性与容量保障**（最大声量）：模型容量错误横跨三个月、全线模型、全部付费层级，是当前社区情绪的核心爆点。
- **MCP 架构演进**：项目级 MCP 进程池复用（#20883）呼声明确，避免每 session 重复拉起进程。
- **指令/上下文管理**：AGENTS.md 模块化 @include（#17401，21 👍）、实验性 Context Management 对 API-key 用户的开放诉求（#42446）。
- **Computer Use / 浏览器控制可靠性**：Windows Chrome URL 识别、浏览器路由中途丢失等多个长期 issue 待解。
- **语音/多端体验**：任务历史在移动端语音模式后丢失（#43267）、WebRTC 会话结束误标（#35201），与 PR 侧语音密集开发形成呼应——能力在快速上量，边缘 case 还在补。

---

## 六、开发者关注点

1. **付费用户信任危机**：Pro 20x（$200/月）用户在容量故障中受影响最直接，多条 issue 措辞激烈，官方响应缺位是主要风险。
2. **Windows 平台质量差距明显**：白屏、快捷键崩溃、LFS 泄漏、模型选择器缺项、会话恢复丢历史——Windows 相关 issue 占比极高。
3. **会话/线程状态机脆弱**：`markedStreaming` 卡死（#19690）、`task_started` 孤儿事件毒化重开（#23035）、序号重复截断历史（#43640），本地状态恢复逻辑是 bug 富矿。
4. **权限与授权模型一致性**：worktree 任务不继承自动批准（#33282）、委托审查有明确授权仍被拒（#43675），授权传递机制存在设计缺口。
5. **版本兼容可见性**：PR #43622 的“服务端过旧警告”侧面说明 CLI 与 app-server 版本漂移已是用户实际困扰。

---
*数据来源：github.com/openai/codex · 统计窗口：2026-09-07 至 2026-09-08*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-09-08

## 📌 今日速览

今日发布 v0.60.0-nightly.20260908.g85aca163f 每日构建版本。Issue 池中 Subagent（子代理）相关问题持续成为焦点——包括挂起、误报成功状态、不主动调用等核心可靠性问题。PR 方面，多名社区贡献者的批量修复被集中关闭（多个带有 `pr-nudge-sent` 标签），另有安全加固、沙箱边界强化等新 PR 提交。

## 🚀 版本发布

- **v0.60.0-nightly.20260908.g85aca163f**（每日自动构建，无详细 changelog）
  [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.60.0-nightly.20260907.g85aca163f...v0.60.0-nightly.20260908.g85aca163f)
  对应版本 PR：[#29243](https://github.com/google-gemini/gemini-cli/pull/29243)

## 🔥 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent 触达 MAX_TURNS 后误报 `GOAL success`（P1）
   中断被伪装成成功，直接误导上层代理决策，是子代理可靠性链路的关键缺陷。13 条评论，处于待复测状态。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent 无限挂起（P1）
   简单任务（如创建文件夹）也会挂起一小时以上，用户只能手动禁止子代理来规避。8 个 👍，是用户痛点最直接的反馈之一。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** 零依赖 OS 沙箱 + 执行后意图路由（P2，大型增强）
   核心思路：Gemini 3 模型天然偏好 bash 工具链（grep/sed/awk），应通过系统级沙箱安全释放这一能力，而非依赖受限的自定义工具。这是影响架构方向的大讨论。

4. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** 模型不主动使用 skills 和 sub-agents（P2）
   自定义 skill 几乎从不被自主触发，只有在用户显式指令时才生效，直接影响扩展生态的实用性。

5. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** Auto Memory 确定性脱敏（P2，安全）
   密钥脱敏发生在内容已进入模型上下文之后，存在泄露风险；同时后台日志可能记录敏感内容。安全问题优先级高。

6. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell 命令执行完成后卡在 "Waiting input"（P1）
   简单命令执行完毕后 CLI 挂起，主流程被阻塞，用户体验破坏性强。

7. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** AST 感知文件读取/搜索/映射评估（P2 EPIC）
   探索用 AST 感知工具（候选：tilth、glyph）精确定位方法边界，减少误读轮次和 token 噪音，是性能优化的战略性方向。

8. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** 工具数超限时遭遇 400 错误（P2）
   超过 128/400 个工具注册时 API 报错，代理需要更智能的工具范围裁剪，对重度扩展用户影响大。

9. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** get-shit-done output hook 导致崩溃（P1）
   输出 summary 阶段反复崩溃，属稳定性硬伤。

10. **[#21335](https://github.com/google-gemini/gemini-cli/issues/21335)** `/compress` 结果在 session resume 后丢失（P2）
    压缩摘要未持久化到磁盘，恢复会话后 token 节省效果归零。

## 🔧 重要 PR 进展

1. **[#29242](https://github.com/google-gemini/gemini-cli/pull/29242)**（OPEN）修复 `isAuthenticationError` 用 `includes('401')` 子串匹配的误判——端口号 4012 也会触发重认证/登出流程。
2. **[#29214](https://github.com/google-gemini/gemini-cli/pull/29214)**（OPEN）沙箱文件系统边界强化：隔离运行时状态、替换宿主目录挂载为只读配置、路径检查中解析符号链接。
3. **[#29166](https://github.com/google-gemini/gemini-cli/pull/29166)**（OPEN）扩展更新前备份目录，使回滚真正生效（原回滚逻辑恢复的是空目录，失败更新会直接损坏扩展）。
4. **[#29239](https://github.com/google-gemini/gemini-cli/pull/29239)**（OPEN）修复窄终端下 ghost text 换字处理的死循环。
5. **[#29237](https://github.com/google-gemini/gemini-cli/pull/29237)**（OPEN）`list_background_processes` 对信号杀死进程不再打印 `(Exit Code: null)`。
6. **[#29008](https://github.com/google-gemini/gemini-cli/pull/29008)**（CLOSED）安全修复：`getSafeGitEnv` 剥离影响执行行为的 `GIT_*` 环境变量（`.env` 注入风险，P1）。
7. **[#29004](https://github.com/google-gemini/gemini-cli/pull/29004) / [#28995](https://github.com/google-gemini/gemini-cli/pull/28995)**（CLOSED）修复 `formatTruncatedToolOutput` 在负数 maxChars 下输出膨胀翻倍的 bug（两个重复修复被关闭处理）。
8. **[#29005](https://github.com/google-gemini/gemini-cli/pull/29005)**（CLOSED）规范化沙箱 `DEBUG` 环境变量真值判断，防止 `"false"` 误开启 `--inspect-brk` 等调试特性。
9. **[#29022](https://github.com/google-gemini/gemini-cli/pull/29022)**（CLOSED）新增 `ui.keepAskUserQuestionsInHistory` 选项，ask_user 的提问在历史记录中保留。
10. **[#27636](https://github.com/google-gemini/gemini-cli/pull/27636)**（CLOSED，Stale）VirtualizedList 性能优化与点击处理修复，标记过期关闭，长列表渲染性能问题仍未落地。

> 注：今日大量社区 PR（#29013、#29011、#29009、#29015 等）被集中关闭，多为文档修正与 CI 权限改进，可能等待维护者引导重新提交。

## 📈 功能需求趋势

- **Subagent 可靠性**：挂起、状态误报、自主调用率低、trajectory 不可见、bugreport 缺上下文——子代理生态是目前最密集的问题域。
- **安全与沙箱**：`.env` 注入防护、GIT_* 环境变量、确定性脱敏、沙箱文件系统边界、workflow 投毒（#29236）等安全议题持续升温。
- **AST 感知代码理解**：以 #22745/#22746 为代表，社区探索更精准的代码库导航方式以降低 token 消耗。
- **性能与终端体验**：终端 resize 防闪烁（#21924）、虚拟化列表优化、ghost text 渲染。
- **Auto Memory 质量**：#26516/#26522/#26523 一系列跟踪，聚焦低信号会话循环重试、无效 patch 静默跳过等。
- **浏览器代理健壮性**：Wayland 失败、会话锁恢复、settings.json 覆盖失效。

## 🎯 开发者关注点

1. **子代理“静默失败”是最伤信任的问题**：挂起、误报成功（GOAL success）、bugreport 无上下文，让调试几乎不可能，社区呼声集中在可观测性上。
2. **工具数量上限**：重度用户（多扩展 + 多 skill）撞上 400 工具 API 限制，需要智能工具裁剪机制。
3. **脱敏时机太晚**：敏感信息进入模型上下文后才脱敏，开发者（尤其企业用户）要求前置的确定性脱敏。
4. **配置与持久化细节**：`/compress` 不持久化、symlink agent 不识别、Browser Agent 忽略 settings.json——配置系统的边界情况频出。
5. **模型行为不可控**：随机位置生成临时脚本（#23571）、倾向使用 `git reset --force` 等危险操作（#22672），用户希望更强的行为约束与工作区卫生管理。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-09-08

## 📰 今日速览

今日无新版本发布，但社区活跃度较高：**v1.0.83 会话恢复与 MCP 相关回归问题集中爆发**，包括会话恢复中断 MCP 连接（#4753）、TUI 空闲时 CPU 占用异常（#4750）等。桌面端 1.1.15 的 **Local 会话创建限制**引发多起强烈反馈（#4742、#4756，后者获 10 个 👍）。安装脚本对 FreeBSD 等非主流平台误判为 Windows 的问题（#3710）已有两个社区 PR 修复（#4761、#4762）。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues（Top 10）

1. **#4756 Windows 端需归档所有空闲项目会话才能新建 Local 会话**（👍 10）
   桌面端 1.1.15 引入的硬性限制，工作流严重受阻，是今日获赞最多的 Issue。
   链接: github/copilot-cli Issue #4756

2. **#4742 无法在同一项目中创建第二个 Local (branch) 会话**（7 评论）
   与 #4756 同源的 1.1.15 回归，错误提示 "This project already has an active Local workspace"，讨论热烈。
   链接: github/copilot-cli Issue #4742

3. **#4438 `disable-model-invocation: true` 导致 Skill 完全不可用**（👍 6）
   Skill 配置语义与文档不符：本应“仅手动调用”，实际连显式调用也返回 Skill not found，影响自定义 Skill 用户。
   链接: github/copilot-cli Issue #4438

4. **#4757 `--yolo`/`--allow-all` 被无策略账户的 fail-closed 机制永久禁用**
   托管策略缺失时错误套用 fail-closed 姿态，且会话内永不解除，直接影响高级用户的自动化工作流。
   链接: github/copilot-cli Issue #4757

5. **#4753 v1.0.83 会话恢复会取消初始化中的 stdio MCP 连接**（超时从 v1.0.82 的 ~16s 缩至 ~1s）
   明确的版本回归，恢复会话后 MCP 服务器静默不可用。
   链接: github/copilot-cli Issue #4753

6. **#3945 Memories 跨仓库泄漏**
   新建仓库中 Copilot 引用了其他仓库的记忆内容，涉及隐私与上下文隔离，今日更新。
   链接: github/copilot-cli Issue #3945

7. **#4017 MCP OAuth：第三方 HTTP 服务器取消 host-token 后认证流程静默失败**
   Atlassian、incident.io 等远程 MCP 服务器无法认证，无弹窗无报错，排查困难。
   链接: github/copilot-cli Issue #4017

8. **#4505 恢复会话后保留过期 connection item ID，所有 prompt 返回 400**
   `/fork` 也无法恢复，会话数据实质损坏。
   链接: github/copilot-cli Issue #4505

9. **#4750 TUI 空闲时 CPU 占用异常**
   空闲 TUI 占用 1 核，运行 prompt 后倍增至 2-4 核，性能问题值得持续关注。
   链接: github/copilot-cli Issue #4750

10. **#1999 德语键盘无法输入 @ (Alt-Gr + q)**（已关闭，10 评论）
    持续半年的键盘布局兼容性问题，今日关闭，可供类似输入法/键盘问题参考。
    链接: github/copilot-cli Issue #1999

**其他值得关注**：#4755 会话排队消息导致永久 wedge（仅能杀进程恢复）、#4754 被驱逐会话删除静默失效（ON DELETE CASCADE 不触发）、#4709 多仓库 collection 因 main/master 分支名不一致导致 workspace 永久不可用、#4747 `/refine` 对 gpt-4o-mini 误传 reasoning_effort 参数。

---

## 🔧 重要 PR 进展

> 今日仅 4 个 PR 更新，按重要性排序：

1. **#4762 [CLOSED] install: 报告不支持的操作系统**
   修复 FreeBSD 被误判为 Windows 的安装脚本问题，对应 Issue #3710，已关闭（可能与 #4761 重复）。
   链接: github/copilot-cli PR #4762

2. **#4761 [OPEN] install: 报告不支持的操作系统**
   与 #4762 同目标的社区修复：非 macOS/Linux 平台明确提示 "unsupported"，而非落入 Windows 分支。
   链接: github/copilot-cli PR #4761

3. **#4746 [OPEN] 新增实验性 next-action 扩展原型**
   微软工程师提交的 SDK 扩展示例，演示通过 `joinSession()` 复用前台会话实现模型推断的下一步操作，对扩展开发者有参考价值。
   链接: github/copilot-cli PR #4746

4. **#4748 [OPEN] Add joke cli**
   无实质内容的社区 PR，预期将被关闭。
   链接: github/copilot-cli PR #4748

---

## 📈 功能需求趋势

1. **会话管理体验**：多会话并行（#4742、#4756）、按仓库过滤/恢复会话（#4693）、会话可靠删除（#4754）、collection 多仓库支持（#4709）——本周期最集中的诉求。
2. **MCP 生态健壮性**：OAuth 认证（#4017、#4681）、连接超时（#4753、#4749）、取消请求规范（#4759）、User-Agent 头（#4681）。
3. **终端 UI 可读性**：按类型折叠输出区块、颜色标识（#1787）、表单草稿自动保存防丢失（#4738）。
4. **Agent/Skill 可组合性**：自定义 agent 的 `--agent` 标志加载（#4752）、Skill 调用语义（#4438）、后台子代理事件时序（#4760）。
5. **权限与安全边界**：`--yolo` 旁路策略（#4757）、记忆隔离（#3945）。

---

## ⚠️ 开发者关注点

- **v1.0.83 回归风险**：升级后 MCP 连接超时（#4753）、CPU 占用（#4750）、Azure MCP learn 调用 180s 超时（#4749）等问题集中出现，建议重度 MCP 用户暂缓升级或关注 1.0.84。
- **桌面端 1.1.15 会话限制**：Local 会话互斥策略（#4742/#4756）改变了多任务并行工作流，是当前负面反馈最集中的区域。
- **会话状态可靠性**：wedge、stale item ID、恢复失败等多类问题表明会话生命周期管理（尤其 resume 路径）是当前质量薄弱点。
- **数据隐私**：跨仓库记忆泄漏（#3945）值得企业用户警惕。
- **国际化输入**：非英语键盘布局（德语 Alt-Gr）仍有历史遗留问题（#1999 已关闭，可跟踪修复方案）。

---
*数据来源：github.com/github/copilot-cli · 统计窗口：2026-09-07 ~ 2026-09-08*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-08 | 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)**

---

## 一、今日速览

今日无新版本发布，社区动态以 Bug 反馈为主。新增一条较严重的 Agent 行为异常 Issue：Agent 陷入重复调用 Read 工具的循环，无法发出预期的 Edit 调用（#2637），值得核心维护者关注。此外，长期存在的 Windows IME 输入重复字符 Bug（#2584）于昨日再度更新，仍有用户受影响。PR 方面，Build Remote Agent 手机配对功能 PR（#2616）有新进展。

---

## 二、版本发布

过去 24 小时无新 Release。

---

## 三、社区热点 Issues

今日活跃 Issue 共 2 条，均值得关注：

### 1. Agent 陷入重复 Read 工具循环，无法发出 Edit 调用
**[#2637](https://github.com/MoonshotAI/kimi-cli/issues/2637) | OPEN | 作者 @devalirzayev | 0 评论**

- **为什么重要**：这是直接影响核心任务执行能力的 Bug——Agent 卡在只读循环中无法推进到编辑操作，属于功能性阻断问题。报告使用 v0.41.0 官方 harness、默认模型，复现条件清晰。
- **社区反应**：刚创建（2026-09-07），尚无官方回应，建议维护者优先分诊。

### 2. Windows 下泰语及其他 IME 输入字符重复
**[#2584](https://github.com/MoonshotAI/kimi-cli/issues/2584) | OPEN | 作者 @mgprona | 1 评论 · 👍 1**

- **为什么重要**：影响非拉丁字母输入（泰语等 IME）用户在 Windows 11 上的可用性，v0.31.1 仍存在，说明该问题跨越多个版本未修复。IME 兼容性是终端工具的常见难点（通常与按键事件处理有关）。
- **社区反应**：已持续一个多月（创建于 2026-08-04），昨日有更新但评论仅 1 条，关注度偏低，国际化用户群体值得留意。

---

## 四、重要 PR 进展

今日活跃 PR 共 1 条：

### 1. 新增 Build Remote Agent 手机配对功能（协议 gbr/1）
**[PR #2616](https://github.com/MoonshotAI/kimi-cli/pull/2616) | OPEN | 作者 @LinespottingPrivate**

- **内容**：将 Build Remote Agent（付费 iOS/Android 应用）添加为桌面 Agent 的配对设备。手机端作为**观察者 + 否决者（spectator + veto）**而非编排者，可通过免费 MIT 协议的 [gbr-agent](https://github.com/LinespottingOrg/GrokBuildRemote-Agents) 注入本地会话。
- **观察点**：引入第三方付费应用的配对机制，涉及安全边界（手机可注入会话）与外部依赖，预计维护团队会审慎评估。该 PR 自 8 月 23 日创建至今未合并，昨日有更新活动。

---

## 五、功能需求趋势

基于今日活跃 Issues 的有限样本，可观察到以下方向：

1. **Agent 执行可靠性**：Agent 行为异常（工具调用循环）是用户最痛的反馈类型，社区期待更稳定的工具调用决策机制。
2. **跨平台输入兼容性**：Windows IME（泰语等）支持缺口，反映国际化/多语言输入场景的兼容需求。
3. **远程协作与移动端联动**：第三方 PR 显示社区对“手机监控/干预本地 Agent 会话”的场景有真实兴趣，方向上与远程控制、多端协同趋势一致。

---

## 六、开发者关注点

- **核心执行链路稳定性**：#2637 表明 Agent 在长任务中可能出现工具调用死循环，开发者希望有循环检测或超时中断机制。
- **Windows 平台体验**：IME 输入 Bug 长期未修，Windows 用户输入体验仍是短板，尤其在 CJK/东南亚语言用户中。
- **第三方扩展生态**：PR #2616 折射出社区希望扩展 Kimi CLI 的配对/远程能力，但安全模型（外部设备注入会话）需要官方明确边界与审查标准。

---

> 📌 **数据说明**：今日样本量较小（2 Issues + 1 PR），趋势判断仅供参考。如需追踪 #2637 的修复进展，建议关注 Release 动态。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-08

## 📌 今日速览

今日无新版本发布。社区活动以 PR 为主，新增了多个 AI 提供商支持（Alibaba、Z.AI、Moonshot）以及一个备受关注的“无限代理模式”修复 PR。多个月内积压的高热度 Issues（如 `/undo` 不回退文件编辑）今日集中关闭，表明社区在做 issue 清理和状态同步。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues（Top 10）

1. **[/undo and /timeline undo does not revert file edits](https://github.com/anomalyco/opencode/issues/4704)**（#4704，已关闭）
   23 条评论 / 22 👍，本期最高热度。撤销功能不回退文件编辑是核心体验缺陷，长期困扰用户，现已关闭，建议关注后续版本验证。

2. **[Copy shows copied popup but clipboard remains unchanged on Linux](https://github.com/anomalyco/opencode/issues/24713)**（#24713，已关闭）
   Linux 终端剪贴板“假复制”问题，12 条评论，涉及终端兼容性这一老大难领域。

3. **[Multi-user auth and per-user provider credentials for opencode web](https://github.com/anomalyco/opencode/issues/20067)**（#20067，已关闭）
   20 👍，企业共享部署场景的强需求——多用户认证 + 按用户隔离的 provider 凭据，是 OpenCode 走向团队化的关键功能。

4. **[Support drag-and-drop for Microsoft Office files](https://github.com/anomalyco/opencode/issues/27689)**（#27689，仍开放）
   仍开放的少数高热 issue，拖拽 .docx/.xlsx 进聊天，反映非纯代码用户的使用诉求。

5. **[Subagents can't use 'todowrite' tool](https://github.com/anomalyco/opencode/issues/12938)**（#12938，已关闭）
   子代理无法使用 todowrite，直接影响多代理工作流的任务管理能力。

6. **[Evaluate upstreaming native A2A support](https://github.com/anomalyco/opencode/issues/18021)**（#18021，已关闭）
   社区已有 A2A（Agent-to-Agent）协议可运行原型，请求上游合入，值得追踪后续 PR 动向。

7. **[Self-signed TLS certificate no longer working with 1.17.12+](https://github.com/anomalyco/opencode/issues/35365)**（#35365，已关闭）
   回归类 bug：1.17.12 起自签证书连接本地 LLM 静默失败，对本地模型用户影响大。

8. **[opencode.exe on Windows fails with EUNKNOWN 'B:\~BUN'](https://github.com/anomalyco/opencode/issues/36124)**（#36124，已关闭）
   构建临时路径泄漏进生产二进制的严重 Windows 启动故障，值得关注打包流程修复。

9. **[Native infinite agent mode (auto-continue until done)](https://github.com/anomalyco/opencode/issues/47019)**（#47019，仍开放）
   长任务迁移中代理频繁停下等待 "continue"，社区希望原生支持带限额的自动续跑——今日已有对应 PR（见下）。

10. **[TUI question dialog keyboard trapped](https://github.com/anomalyco/opencode/issues/47624)**（#47624，仍开放）
    多标签问题对话框切换后键盘完全卡死，仅能靠外部恢复，属可用性硬伤，9 月新报，待修复。

> 另注：今日大量 3-7 月的旧 issue 被批量关闭（如 #27071 TUI 空白页、#35469 Linux 桌面卡死），疑似一轮 issue 清理，部分功能可能已在后续版本落地。

---

## 🔧 重要 PR 进展（Top 10）

1. **[feat(ai): add Alibaba inference provider](https://github.com/anomalyco/opencode/pull/47874)**（#47874，新增）
   新增阿里云 Model Studio 推理支持，含区域/workspace 专属 host，对国内用户意义重大。

2. **[feat(ai): add Z.AI language models](https://github.com/anomalyco/opencode/pull/47866)**（#47866，已关闭）
   Z.AI 标准模型 + 独立 `ZAICodingPlan` facade，覆盖 Chat/Messages/Responses 端点。

3. **[fix(opencode): prioritize execution in default prompt](https://github.com/anomalyco/opencode/pull/47869)**（#47869，新增）
   对应 #47019：在默认 prompt 中强化“执行优先”，减少代理中途停下头脑风暴的行为。

4. **[feat(core): repair malformed tool arguments before validation](https://github.com/anomalyco/opencode/pull/45002)**（#45002）
   在 Zod/JSON Schema 校验前自动修复常见畸形工具参数。注意：**作者自标暂缓合并**，独立审计复现了问题，需谨慎观察。

5. **[feat(core): support native Snowflake Cortex authentication](https://github.com/anomalyco/opencode/pull/47156)**（#47156）
   整合三个早期 PR，为 Snowflake Cortex 提供原生认证，企业数据栈集成方向。

6. **[feat(app): configure initial servers and add QR pairing](https://github.com/anomalyco/opencode/pull/47799)**（#47799）
   引入 `VITE_OPENCODE_SERVER_MODE`，beta 版零服务器起步 + QR 配对，改善 Web 端首次体验。

7. **[feat(opencode): Allow per-MCP-server trust configuration](https://github.com/anomalyco/opencode/pull/46920)**（#46920）
   通过证书指纹 pinning 实现按 MCP server 信任配置，替代全局 `insecure: true`，安全模型的重要改进。

8. **[fix(core): use local time for log timestamps](https://github.com/anomalyco/opencode/pull/47867)**（#47867）
   日志时间戳改用本地时区（关闭 #21330），小改动高频痛点。

9. **[feat(tui): navigate projects and worktrees](https://github.com/anomalyco/opencode/pull/45029)**（#45029，已关闭）
   Picker 中支持项目/worktree 导航与创建，由核心成员提交，多仓库工作流的体验升级。

10. **[fix(client): back off reconnects when the stream never connects](https://github.com/anomalyco/opencode/pull/47204)**（#47204）
    事件流固定 1 秒重试改为退避策略，未认证会话不再疯狂重连。

> 其他亮点：[#47873](https://github.com/anomalyco/opencode/pull/47873) 修复 LongCat thinking 变体映射、[#47864](https://github.com/anomalyco/opencode/pull/47864) 修复 Vertex AI 空 Gemini 消息回放、[#47607](https://github.com/anomalyco/opencode/pull/47607) 优化 levenshtein 算法降低内存分配。

---

## 📈 功能需求趋势

- **AI 提供商快速扩张**：Alibaba、Z.AI、Moonshot、Snowflake Cortex、LongCat 等 PR 密集出现，多提供商生态是当前最活跃的开发主线。
- **企业/团队化部署**：多用户认证（#20067）、Keycloak MCP 认证（#34733）、per-MCP-server 信任配置（PR #46920）反映企业落地需求上升。
- **代理自主性**：“无限代理模式”（#47019）、A2A 协议（#18021）表明社区希望代理能长时自主运行和互操作。
- **本地/自托管场景**：自签 TLS（#35365）、容器内 LSP（#36162）、自定义模型 ID 自动拉取（#35855）持续受关注。
- **桌面端与 TUI 稳定性**：桌面版卡死、TUI 空白页、键盘卡死等 UI 稳定性问题仍是反馈重灾区。

---

## ⚠️ 开发者关注点（痛点总结）

1. **撤销/回滚不可靠**：`/undo` 不回退文件（#4704）、回滚污染未变更文件（#36080，换行符被改动），是最高频的信任类痛点。
2. **构建产物质量问题**：Windows 二进制泄漏构建路径（#36124）导致普通用户无法启动，打包流程需加强验证。
3. **回归频发**：自签 TLS 在 1.17.12 静默失效（#35365）、强制 GitHub OAuth 弹窗（#35859），升级路径缺乏平滑保障。
4. **本地模型集成摩擦**：Ollama reasoning 字段导致会话挂起（#34798）、Copilot 上 Opus 不显示思考（#36120）。
5. **企业凭据与认证灵活性不足**：全局凭据、缺少 Keycloak/OAuth 复用是共享部署的主要阻碍。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-08

## 📌 今日速览

Qwen Code 发布 **v0.23.1-preview.2** 预览版及 nightly 构建，核心更新集中在 Web Shell 动态工作流的可视化管理。Issue 侧最值得关注的是 **#11119（P1）**：daemon 会话运行时回收后后台 shell 输出静默丢失，导致会话卡死——这是后台自动化路线图上的关键阻塞问题。Windows 平台 ConPTY 进程泄漏（#11303）也达到 P1 级别。

---

## 🚀 版本发布

### [v0.23.1-preview.2](https://github.com/QwenLM/qwen-code/releases)
- **feat(web-shell)**: 动态工作流运行的可视化管理（[#10594](https://github.com/QwenLM/qwen-code/pull/10594) by @qqqys）
- **perf(web-shell)**: 派生会话工作流项目（优化渲染投影重复计算）

### [v0.23.0-nightly.20260907](https://github.com/QwenLM/qwen-code/releases)
- 与 preview.2 内容一致的 nightly 构建

### [cua-driver-rs v0.20.4](https://github.com/QwenLM/qwen-code/releases)
- 预编译二进制更新：macOS 签名+公证的通用二进制（含 `QwenCuaDriver.app`）；Linux x86_64/arm64（glibc 2.31+）；Windows UIAccess worker + 原生 SDK 载荷

---

## 🔥 社区热点 Issues

1. **[#8662](https://github.com/QwenLM/qwen-code/issues/8662) — TUI 渲染层从 ink 迁移到 OpenTUI（追踪）** · 33 评论
   ink 7 + React 19 带有约 1037 行补丁的重度魔改渲染器，闪烁等问题难以根治。这是终端 UX 路线图的核心重构，社区讨论热烈。

2. **[#11119](https://github.com/QwenLM/qwen-code/issues/11119) — [P1] serve 模式后台 shell 输出与唤醒通知被静默丢弃** · 10 评论
   `qwen serve` 会话运行时回收后，后台 CI 轮询任务的输出全部丢失并卡死会话。后台自动化（daemon 路线图）的关键缺陷。

3. **[#11303](https://github.com/QwenLM/qwen-code/issues/11303) — [P1] Windows VS Code 扩展泄漏 conhost.exe 进程**
   12 小时运行后单个 qwen-cli 累积 347 个 ConPTY 子进程、占用约 2.8 GB 内存。Windows 用户重度痛点，已 ready-for-human。

4. **[#8586](https://github.com/QwenLM/qwen-code/issues/8586) — 后台 Agent 的 activeWork 跟踪与恢复机制** · 9 评论
   提议为 daemon 深度健康检查增加显式 `activeWork` 状态，并构建存活超过前台提示的后台 Agent 恢复路径。

5. **[#10530](https://github.com/QwenLM/qwen-code/issues/10530) / [#10435](https://github.com/QwenLM/qwen-code/issues/10435) — 0.22.3 起 llama-server 报 "400 Failed to initialize samplers"**
   本地推理（Qwen 3.8/3.6 系列）被 grammar 解析错误打断，其他工具无此问题。本地部署用户的阻塞性回归。

6. **[#11205](https://github.com/QwenLM/qwen-code/issues/11205) — 内容过滤筛选器在 main 上丢失六项安全加固**
   并行开发导致 EACCES、U+FFFD、spawn 超时等安全加固被覆盖丢失，值得关注的工程流程问题。

7. **[#10865](https://github.com/QwenLM/qwen-code/issues/10865) — Web Shell 会话工作流投影每次渲染重复计算三次**
   性能问题，索引本应只建一次。已有对应的 release perf 修复，可验证闭环。

8. **[#11272](https://github.com/QwenLM/qwen-code/issues/11272) — 取消长时间 MCP 工具调用会杀死 MCP server 且无法恢复**
   来自钉钉 Channel 生产环境报告，stdio server 被杀后 Channel 模式下不可恢复。

9. **[#10684](https://github.com/QwenLM/qwen-code/issues/10684) — 一等公民的自托管语义记忆**
   请求内置本地 memory MCP server 或为 auto-memory 增加基于 embedding 的语义召回。记忆系统是社区长期呼声。

10. **[#11118](https://github.com/QwenLM/qwen-code/issues/11118) — [已关闭] 执行 cron/goal/monitor 工作的会话永远无法被回收**
    子进程对“忙”的定义存在两套不一致标准导致会话泄漏。已修复关闭，daemon 稳定性提升。

---

## 🔧 重要 PR 进展

1. **[#11152](https://github.com/QwenLM/qwen-code/pull/11152)** — OpenTUI 平价收尾：对话框、composer、shell mode 的最后行为差距补齐，配合 #8662 的迁移工作。
2. **[#11276](https://github.com/QwenLM/qwen-code/pull/11276)** — Web Shell 新增 Web 预览面板：支持桌面/移动宽度、刷新、外部打开，并保存交付历史。
3. **[#10999](https://github.com/QwenLM/qwen-code/pull/10999)** — 声明式模型推理能力配置，贯通 ACP、会话恢复、TUI effort 控件到 OpenAI 兼容请求。
4. **[#11282](https://github.com/QwenLM/qwen-code/pull/11282)** — customHeaders 支持 `${session_id}` 模板变量（直接响应 Issue #10995/#11227 需求）。
5. **[#11239](https://github.com/QwenLM/qwen-code/pull/11239)** — Goal 自治：连续 3 轮无进展自动暂停，避免空转消耗 token。
6. **[#11309](https://github.com/QwenLM/qwen-code/pull/11309)** — 删除 daemon 会话时安全回收其拥有的 worktree 与分支。
7. **[#11196](https://github.com/QwenLM/qwen-code/pull/11196)** — 工作流日志记录 agent 级失败，中断与失败可区分。
8. **[#11169](https://github.com/QwenLM/qwen-code/pull/11169)** — 修复本地文件桥接的信任门与旁观者缺口（合并时丢失的四项审查修复）。
9. **[#11259](https://github.com/QwenLM/qwen-code/pull/11259)** — 集成测试断言 `/compress` 的实际 token 缩减效果，含遥测读取器。
10. **[#10347](https://github.com/QwenLM/qwen-code/pull/10347)** — 将包装为 4xx 的底层网络错误（EOF）归类为可重试传输错误，Channel 模式下尤为重要。

---

## 📈 功能需求趋势

- **Web Shell / daemon 后台自动化**是绝对主线：会话回收、后台 Agent 恢复、工作流可视化、turn 导航、Web 预览等 Issue/PR 密集出现。
- **终端渲染层迁移（ink → OpenTUI）**持续推进，涉及闪烁、VP 对齐、性能等多方面。
- **本地推理与 OpenAI 兼容后端**兼容性需求旺盛：grammar 错误、`/effort` 透传、customHeaders 模板化。
- **记忆系统升级**：从关键词召回走向语义/embedding 召回的诉求明确。
- **CI/自动化工程质量**：大量 bot 驱动的 CI 失败追踪与 autofix 工作流显示项目自动化程度很高，但也暴露 main 分支稳定性压力。

---

## ⚠️ 开发者关注点

1. **Windows 资源泄漏**（#11303）：长期挂机的 VS Code 用户需警惕内存膨胀，升级前建议监控 conhost 进程数。
2. **本地 llama-server 用户**：0.22.3 引入的 sampler/grammar 错误尚未修复，可考虑回退版本。
3. **daemon/serve 用户**：后台任务输出丢失（#11119）和 MCP server 不可恢复（#11272）是生产环境风险点。
4. **Channel/IM 集成**（钉钉等）：错误重试与取消语义仍需打磨。
5. **main 分支 CI 抖动**：macOS E2E shard 出现偶发全绿死亡（#11134 正在加重试机制），社区贡献者可能会遇到与自身改动无关的失败。

---
*数据来源：GitHub QwenLM/qwen-code · 统计窗口：过去 24 小时（47 Issues / 50 PRs 更新）*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报
**日期：2026-09-08 | 数据来源：Hmbown/Codewhale**

---

## 📌 今日速览

项目正处于 **v0.9.13 发布冲刺期**：过去 24 小时内合入了大量修复 PR（ACP schema、多行粘贴回归、队列数据丢失、截断工具调用等），release 准备 PR #6000 已关闭，0.9.13 集成 PR #6002 正在推进。同时创始人发起了新一轮 founder live-report（#5974–#5977），集中反馈 TUI 交互层面的性能与体验问题，成为社区关注焦点。

---

## 🚀 版本发布

过去 24 小时无正式 Release，但 **v0.9.13 处于发布准备阶段**：
- [PR #6000](https://github.com/Hmbown/Codewhale/pull/6000)（已关闭）：全工作区版本号升至 0.9.13，CHANGELOG 补齐 #5989 的修复 receipts（ACP schema、队列数据丢失、metrics、goal-loop）等。
- [PR #6002](https://github.com/Hmbown/Codewhale/pull/6002)（开放中）：集成 #5982（redaction opt-out）、#5973（底栏 chrome 预设）、#5996（配置文档）、#5990（snapshot-prune 测试 fixture），并推迟 ShannonNet 执行。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#5316](https://github.com/Hmbown/Codewhale/issues/5316) EPIC-005: TUI Crate 拆分（Umbrella）** — 长期跟踪 Issue，22 条评论，是当前最大的架构重构主线，所有子 EPIC/FEAT/PR 均汇报至此。
2. **[#5981](https://github.com/Hmbown/Codewhale/issues/5981)（已修复）多行粘贴被拆成多条消息** — v9.12 的 Y-7 修复引入的回归，日常使用高频痛点，已由 PR #5993 修复。
3. **[#5969](https://github.com/Hmbown/Codewhale/issues/5969)（已修复）ACP `sessionCapabilities.list` 类型违反 schema** — 严格客户端（JetBrains IDEA）完全无法连接，属互操作性 P0 问题。
4. **[#5991](https://github.com/Hmbown/Codewhale/issues/5991)（已修复）`allow_insecure_http` 配置键失效** — 0.9.12 起内网/LAN HTTP provider 被迫改用环境变量，影响私有部署用户（含 FreeBSD 报告）。
5. **[#5975](https://github.com/Hmbown/Codewhale/issues/5975) Model picker 严重卡顿** — founder live-report 头条：真实 catalog 下 `route · configured` 选择器明显迟滞，且该页面鼠标不可用、无列排序。
6. **[#5976](https://github.com/Hmbown/Codewhale/issues/5976) Cost 显示 "unknown"** — provider 计费/定价数据覆盖不全且无守卫机制，Concentrate 等已编目路由仍无成本数据。
7. **[#5977](https://github.com/Hmbown/Codewhale/issues/5977) tok/s 指标疑似不准** — 需审计分母与 token 来源，直接影响用户对成本/性能的判断。
8. **[#5860](https://github.com/Hmbown/Codewhale/issues/5860) 从对话中持续自学习（技能自动进化）** — 社区高关注度增强需求：让 agent 自动从重复问题中提取模式并更新 SKILL.md。
9. **[#5950](https://github.com/Hmbown/Codewhale/issues/5950) 0.9.12 底栏 chrome 不可配置** — posture bar + metrics 行硬编码，`/statusline` 形同虚设，用户自定义能力受损。
10. **[#5986](https://github.com/Hmbown/Codewhale/issues/5986)（已修复）截断的工具调用被修复成合法 JSON 并执行** — 安全级别问题：`write` 工具可能用半截内容覆盖用户文件，已由 PR #5983 修复。

---

## 🛠 重要 PR 进展（Top 10）

1. **[PR #5989](https://github.com/Hmbown/Codewhale/pull/5989)（已合）五项缺陷批量修复** — 含 P0：并发会话互相覆盖未发送文本（队列数据丢失）；每项均有 file:line 证据并经对抗性审计。
2. **[PR #5993](https://github.com/Hmbown/Codewhale/pull/5993)（已合）重新启用粘贴突发启发式检测** — 修复多行粘贴回归（#5981），在 bracketed paste 未经终端验证前兜底。
3. **[PR #5987](https://github.com/Hmbown/Codewhale/pull/5987)（已合）VS Code 扩展 send 通路修复 + 安全漏洞关闭** — 此前扩展从未成功启动过一次 turn（`startTurn` 只认 200/202，而运行时返回 201）。
4. **[PR #5983](https://github.com/Hmbown/Codewhale/pull/5983)（已合）拒绝分发参数被截断的工具调用** — 关闭高危的静默 JSON 修复执行问题（#5986）。
5. **[PR #5978](https://github.com/Hmbown/Codewhale/pull/5978)（已合）ACP session list 改为对象类型** — 修复 JetBrains 严格客户端握手失败（#5969）。
6. **[PR #5995](https://github.com/Hmbown/Codewhale/pull/5995)（已合）恢复 per-provider `allow_insecure_http`** — 内网 HTTP provider 用户不再需要全局环境变量。
7. **[PR #5998](https://github.com/Hmbown/Codewhale/pull/5998)（已合）Computer-use bundle 升级至 plugin 0.2.0** — 含 macOS a11y 原生后端、桌面 socket 传输、SSH + HarmonyOS HDC 远程控制。
8. **[PR #5982](https://github.com/Hmbown/Codewhale/pull/5982)（开放）模型绑定密钥脱敏的确认式 opt-out** — 解决强制 redaction 对开发调试（如粘贴自生成 API key）的干扰，需回执确认。
9. **[PR #5870](https://github.com/Hmbown/Codewhale/pull/5870)（已合）原子化 commit 拆分** — 外部贡献者 @goransh-walia 实现 #3999：按依赖排序无关变更、拒绝环，改善 review 与 bisect 体验。
10. **[PR #5946](https://github.com/Hmbown/Codewhale/pull/5946)（开放）Fleet worker 交付物可见化** — 完成的 Fleet 任务不再返回无意义 receipt，摘要经脱敏后随会话保存。

---

## 📈 功能需求趋势

1. **TUI 交互体验与性能**（#5975、#5950、#6006）：模型选择器卡顿、底栏可配置性、命令历史召回等，是 founder live-report 集中爆发的方向。
2. **可观测性与指标准确性**（#5976、#5977）：成本显示、tok/s 计算的审计需求，指向计价/遥测数据覆盖不足的系统性问题。
3. **上下文管理进化**（#6008）：`/purge` 增加 offload/swap 虚拟内存式驱逐，长会话场景需求强烈。
4. **自动化与自治**（#5860、#5994、#6003）：技能自学习、goal-scoped 步数预算、用户输入超时可配置，均指向长时间自主运行场景。
5. **IDE / 客户端生态集成**（#5834 已完成、#5969 已修复、#6007）：VS Code Runtime API 客户端、ACP 兼容性、OpenRouter vendor 原生选择。
6. **Hook 与可扩展性**（#6004）：新增 session 状态级 hook 事件（idle / fatal-error / waiting-for-user）。

---

## ⚠️ 开发者关注点

- **回归质量**：0.9.12 引入至少两处回归（多行粘贴 #5981、`allow_insecure_http` #5991），均在 0.9.13 修复，升级 0.9.12 的用户建议直接等待 0.9.13。
- **测试基础设施脆弱**：Windows CI flake（#5980、#5990）、libtest 栈溢出被 nextest 隔离掩盖（#5988）、Buildkite PTY flake（#5979）——测试稳定性是当前维护成本热点。
- **内网/自托管场景**：HTTP provider 安全门（#5991）、OpenRouter vendor 固定（#6007）显示私有部署与精细路由需求持续增长。
- **会话管理与多会话歧义**：`run --continue` 在多会话工作区下指向不明（#6001）、离线队列可卡死输入（#5999）。
- **配置迁移友好性**：配置键静默失效（#5991）、文档滞后（#5996），社区呼吁配置参考文档与版本变更保持同步。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-09-08

## 📌 今日速览

今日无新版本发布，但社区活跃度很高（64 条 Issue 更新、27 条 PR 更新）。最突出的动态是 **OpenCode Go 强制要求 `x-opencode-session` 头**引发的连锁问题（#9230/#9290/#9237）已快速修复关闭；GitHub Copilot `gpt-6-astra` 路由错误（#9209/#9277）也已通过 #9253 修复。此外 mitsuhiko 的「mid-conversation system messages」两层 PR（#9116/#9117）持续推进，是架构层面的重要演进。

---

## 🔥 社区热点 Issues（Top 10）

1. **#4945 openai-codex 连接可靠性问题**（77 评论，33 👍）
   TUI 卡在 `Working...` 无流式输出、无报错，只能 Esc 中止。已标记 inprogress，是近期最痛的稳定性问题。
   [Issue #4945](https://github.com/earendil-works/pi/issues/4945)

2. **#7547 Windows 使用方式征集帖**（61 评论）
   官方发起的 sink-thread，征集 Windows 用户的使用方式与痛点，用于决定核心投入方向（bug 修复、文档、开箱即用 vs 外置扩展）。
   [Issue #7547](https://github.com/earendil-works/pi/issues/7547)

3. **#5886 AgentSession 结算/续跑与 assistant-tail 生命周期 bug 元问题**（mitsuhiko）
   汇总“运行后逻辑试图从已失效 transcript 继续会话”这一类系统性 bug，是 agent 核心的深水区修复。
   [Issue #5886](https://github.com/earendil-works/pi/issues/5886)

4. **#6996 Gemini 3.x 工具调用因缺失 `thought_signature` 失败**（已关闭）
   提交工具结果时因历史记录缺少 thought_signature 被拒，已修复。
   [Issue #6996](https://github.com/earendil-works/pi/issues/6996)

5. **#8823 流式期间按 Esc 无法可靠取消请求**
   abort 已注册但 HTTP 请求仍等 provider 自然结束，与 #8635 PR 相关。
   [Issue #8823](https://github.com/earendil-works/pi/issues/8823)

6. **#8684 `PI_OFFLINE` 静默禁用所有模型发现**
   文档说只关 housekeeping，实际连整个会话的模型目录网络发现也被禁用，文档与行为不符。
   [Issue #8684](https://github.com/earendil-works/pi/issues/8684)

7. **#8760 OpenRouter `:free` 模型因 `max_tokens` 超限全部 400**
   Pi 直接发送 catalog 的 `maxOutputTokens`，超过免费档硬限制，影响多个模型。
   [Issue #8760](https://github.com/earendil-works/pi/issues/8760)

8. **#8928 并行启动时 "No API key found" 误报约 48 秒**
   auth.json 中存在其他 provider 的过期 OAuth 凭证时，多进程场景下可确定性复现，错误指向了错误的 provider，排障成本高。
   [Issue #8928](https://github.com/earendil-works/pi/issues/8928)

9. **#9230 / #9290 OpenCode Go 强制 `x-opencode-session` 头**（均已关闭）
   opencode.ai 于 09-06 起强制要求稳定会话 ID 头，核心与扩展 API 均受影响，已快速修复，体现社区响应速度。
   [Issue #9230](https://github.com/earendil-works/pi/issues/9230) | [Issue #9290](https://github.com/earendil-works/pi/issues/9290)

10. **#8643 Bedrock: OpenAI 模型拒绝 toolResult.content 内嵌图片**
    作者已备好“提升图片到 sibling user block”的修复与回归测试，等待贡献门槛通过。
    [Issue #8643](https://github.com/earendil-works/pi/issues/8643)

---

## 🛠 重要 PR 进展（Top 10）

1. **#9116 mid-conversation system messages（pi-ai 层）** — mitsuhiko
   支持会话中途插入 system 消息，为 prompt/工具集变更不再重写顶层 prompt 打基础。
   [PR #9116](https://github.com/earendil-works/pi/pull/9116)

2. **#9117 coding-agent 以 system 消息增量传递 prompt/工具变更** — mitsuhiko
   #8998 拆分的第二层，改善 prompt-cache 命中与上下文稳定性。
   [PR #9117](https://github.com/earendil-works/pi/pull/9117)

3. **#9253 Copilot GPT 模型改走 Responses API**（已关闭，修复 astra）
   修复 #9209/#9277，并将 Copilot 侧 GPT 路由统一到 Responses。
   [PR #9253](https://github.com/earendil-works/pi/pull/9253)

4. **#8635 abort 信号穿透 lazy stream setup**（修复 #8409）
   请求 abort 时 setup 失败正确上报为 aborted，附带回归测试；与 #8823 呼应。
   [PR #8635](https://github.com/earendil-works/pi/pull/8635)

5. **#9297 移除无效的 Fable 5 fallback 目标** — petrroll
   统一 Claude Fable 5 回退到 Opus 5，并推动 models.dev 在 API 层建模 fallback。
   [PR #9297](https://github.com/earendil-works/pi/pull/9297)

6. **#9301 device-code 登录自动开浏览器并复制验证码**（修复 #9282）
   在“不强制”的前提下优化企业环境反复登录体验。
   [PR #9301](https://github.com/earendil-works/pi/pull/9301)

7. **#9292 手动重试 API/命令** — jwueller
   补足自动重试覆盖不到的场景，用户可在 agent 放弃后手动恢复。
   [PR #9292](https://github.com/earendil-works/pi/pull/9292)

8. **#7742 Ollama Cloud 支持**
   新增 Ollama Cloud provider（`OLLAMA_API_KEY`），遵循现有 provider 模式。
   [PR #7742](https://github.com/earendil-works/pi/pull/7742)

9. **#9280 基于实现审计的文档评测**
   为每篇文档页生成实现审计，确定性校验目录覆盖，文档质量工程化的重要一步。
   [PR #9280](https://github.com/earendil-works/pi/pull/9280)

10. **#8615 保留交错的用户内容顺序**（已关闭）
    修复 sendUserMessage 中文本/图片块顺序被打乱的问题，覆盖流式 steer/follow-up 场景。
    [PR #8615](https://github.com/earendil-works/pi/pull/8615)

其他值得一看：#9152（DRAFT: forks streaming，流式分叉实验）、#9303（resume 会话前不提前关闭选择器）、#9307（识别 Orca 终端能力）。

---

## 📈 功能需求趋势

- **Provider 兼容性与适配**：本周绝对主线——OpenCode 会话头、Copilot Responses 路由、OpenRouter free 档限制、Bedrock 图片、Gemini thought_signature、Ollama Cloud、LongCat（#9308 提案）。上游 provider 一有变动社区立即跟进。
- **取消/重试/生命周期健壮性**：Esc 取消（#8823）、abort 穿透（#8635）、重试退避上限（#8826）、手动重试（#9292）、AgentSession 结算（#5886）。
- **性能与启动延迟**：启动预算对标 jcode（#7739）、EventStream 二次方复杂度（#9055）、fuzzy 搜索优化（#9267）。
- **Windows 体验**：官方征集帖显示正在系统性规划 Windows 支持路径。
- **登录与认证体验**：device-code 流程优化、多 provider 凭证冲突（#8928）。
- **文档与贡献工程化**：文档评测（#9280）、Docker Sandboxes 文档（#9077）、XDG 规范（#256）。

## ⚠️ 开发者关注点（痛点总结）

1. **流式卡死与取消不可靠**是最影响日常使用的痛点（#4945、#8823），期待 #8635 合并后缓解。
2. **错误信息误导**：Grok 403 被报成 OpenAI 错误（#9298）、API key 误报（#8928）——排障成本被错误信息放大。
3. **隐性行为与文档不符**：`PI_OFFLINE` 范围超文档（#8684），削弱信任。
4. **多进程/服务端嵌入场景**暴露核心性能与并发问题（#9055、#8928、#9073），说明 Pi 正被越来越多用于长驻服务。
5. **贡献流程门槛**：多个贡献者提到 PR 被贡献门禁自动关闭（#8643、#7973），需先有 maintainer `lgtm` 才能提交。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-09-08

---

## 📌 今日速览

oh-my-pi 发布 **v18.1.14**，修复了 GitHub Copilot `gpt-6-astra` 等关闭 reasoning 的请求返回 400 的问题。Issue 活跃度维持高位（56 条更新），新报告中 `/tan` 分叉会话和 provider 兼容性问题集中出现；PR 方面异步进度投递系列（#9369/#9371/#9372）持续推进，多个 P0/P1 级修复进入评审。

---

## 🚀 版本发布

### v18.1.14 ([Release](https://github.com/can1357/oh-my-pi/releases))
- **@oh-my-pi/pi-ai**：修复 reasoning-off 请求（如 GitHub Copilot `gpt-6-astra`）直接报 `400 Unsupported value: 'none'` 而非降级重试的问题——reasoning-effort 回退逻辑现在能识别 `Supported values` 措辞并自动以最低允许档位重试（[#11128](https://github.com/can1357/oh-my-pi/issues/11128)）。

---

## 🔥 社区热点 Issues（Top 10）

1. **#9780 · TUI 长流式回复渲染残留**（18 评论）— [#9780](https://github.com/can1357/oh-my-pi/issues/9780)
   #9723 落地后仍有用户可见症状：流式输出时文字在 composer/工具卡片下“漂移”，turn 结束时才归位。TUI 渲染的老大难问题，已标记 wontfix 但讨论持续。

2. **#6122 · 全局注入 OMP session id 出站头**（14 评论，👍5）— [#6122](https://github.com/can1357/oh-my-pi/issues/6122)
   请求 opt-in 机制：在所有 provider 请求上注入统一 session id HTTP 头，便于网关侧做配额/审计归因。企业用户呼声高。

3. **#2407 · 扩展 API 暴露独立模型补全原语 `ctx.models.complete`**（10 评论）— [#2407](https://github.com/can1357/oh-my-pi/issues/2407)
   扩展目前只能通过注入会话消息调用模型，缺少“一次性、指定模型、不污染会话”的补全接口。SDK 生态的关键能力缺口。

4. **#10537 · Windows 上孤儿 worker 进程堆积导致资源耗尽**（8 评论，已关闭）— [#10537](https://github.com/can1357/oh-my-pi/issues/10537)
   父进程退出后 `__omp_worker_js_eval_process` 不被回收，最终触发 Resource-Exhaustion-Detector 强杀。P1 级平台稳定性问题。

5. **#11014 · Zhipu 429 重置时间被解析为 UTC，唤醒晚 8 小时**（5 评论）— [#11014](https://github.com/can1357/oh-my-pi/issues/11014)
   中文“将在 … 重置”时间戳是北京时间但无时区标记，解析器错误追加 `Z`。对应修复 PR #11015 已在评审中。

6. **#11118 / #11119 · `/tan` 分叉 mid-turn 会话两连报**（各 5/4 评论）— [#11118](https://github.com/can1357/oh-my-pi/issues/11118) | [#11119](https://github.com/can1357/oh-my-pi/issues/11119)
   分叉未检查 `session.isStreaming` 导致卡在继承的压缩/未完成工具调用上；且压缩后 fork 通知被重复注入尾部，模型误以为有未完成请求。同一作者当日连发，`/tan` 边界场景问题集中暴露。

7. **#11106 · Antigravity 生图硬编码 `gemini-3-pro-image`，404 被静默吞掉**（5 评论）— [#11106](https://github.com/can1357/oh-my-pi/issues/11106)
   部分账户只服务 `gemini-3.1-flash-image`，工具失败后悄悄切到其他 provider 并谎报成功——静默降级比失败更危险。

8. **#10549 · macOS shell 子系统卡死后 tokio 线程 1100%+ CPU 自旋**（4 评论）— [#10549](https://github.com/can1357/oh-my-pi/issues/10549)
   18 个 tokio worker 陷入 fcntl/close 热循环长达 40 分钟，与 #10308 的 parked-await 卡死是不同故障。Apple Silicon 高频稳定性问题。

9. **#11129 · Thinking-loop 守卫误伤结构化列表答案**（3 评论）— [#11129](https://github.com/can1357/oh-my-pi/issues/11129)
   最终答案含长列表/同构 JSON 时被误判为循环，`--mode json` 消费者收到同一段报告重复 10 次；配置开关无效，只有环境变量能关。

10. **#11179 · 并行工具结果按完成序回传，位置读取型模型配对错乱**（3 评论）— [#11179](https://github.com/can1357/oh-my-pi/issues/11179)
    在 gpt-6-astra 上实测两个并行 bash 调用结果配对颠倒。涉及协议正确性，影响所有按位置读取结果的模型。

---

## 🔧 重要 PR 进展（Top 10）

1. **#11160 · fix(ai): 重试代理 Python HTTP 流中断**（review:p0）— [#11160](https://github.com/can1357/oh-my-pi/pull/11160)
   识别 HTTP/2 stream reset（INTERNAL_ERROR / REFUSED_STREAM）和 h11/httpx 不完整 chunked 响应为瞬态故障，openai-codex 通道稳定性关键修复。

2. **#9969 · fix(lsp): 惰性发现嵌套项目根**（review:p0）— [#9969](https://github.com/can1357/oh-my-pi/pull/9969)
   按文件就近定位 LSP 项目根，支持多嵌套项目独立实例，避免递归全扫描。

3. **#11180 · fix(import): 用 Claude 转录中的 cwd 做会话列表**（review:p0）— [#11180](https://github.com/can1357/oh-my-pi/pull/11180)
   解决 Claude 项目路径扁平化导致的迁移会话目录归位错误。

4. **#10286 · fix(snapcompact): 按 provider 图片字节预算限制出站图片**（review:p1）— [#10286](https://github.com/can1357/oh-my-pi/pull/10286)
   长视觉会话累积的小帧不再超出 provider 字节预算，补齐现有 count 上限之外的 byte 维度。

5. **#10222 · fix(mcp): 网关预热期空 tools/list 恢复**（review:p1）— [#10222](https://github.com/can1357/oh-my-pi/pull/10222)
   冷启动空列表不再被缓存为权威结果，新增 `/mcp refresh` 手动恢复。

6. **#10892 · fix(agent): eval 引导尊重 spawn 深度**（review:p1）— [#10892](https://github.com/can1357/oh-my-pi/pull/10892)
   达到 `task.maxRecursionDepth` 后 eval 工具不再宣传 `agent()` 能力。

7. **#9369 / #9371 / #9372 · 异步进度投递三件套**（review:p2）— [#9369](https://github.com/can1357/oh-my-pi/pull/9369) | [#9371](https://github.com/can1357/oh-my-pi/pull/9371) | [#9372](https://github.com/can1357/oh-my-pi/pull/9372)
   后台任务限流进度流（head/suppressed/tail 预览）、Hub 监控模式（wake/ambient/off）、Bash `async: "auto"` 自动转后台——异步执行体验的系统性重构。

8. **#11177 · feat: `--reapply-config` 在 resume 时采用最新配置**— [#11177](https://github.com/can1357/oh-my-pi/pull/11177)
   解决恢复旧会话时静默沿用旧 model/thinking/tier 的问题。

9. **#9525 · collab: 通过扩展 API 程序化托管房间**（review:p2）— [#9525](https://github.com/can1357/oh-my-pi/pull/9525)
   房间凭据目前只能靠注入 `/collab` 文本传递，本 PR 将 CollabHost 开放给扩展 API，消除安全隐患。

10. **#11015 · fix(utils): Zhipu 重置时间按 UTC+8 解释**— [#11015](https://github.com/can1357/oh-my-pi/pull/11015)
    直接修复热点 Issue #11014，附最小复现脚本。

---

## 📈 功能需求趋势

- **Provider 兼容性与容错**：本日 Issue 中 provider 相关占比最高——Zhipu 时区、Antigravity 生图、OpenAI Responses 自定义端点 `configuration_update` 不兼容（#11121）、Copilot reasoning 降级。社区对新 provider/新模型的即开即用期望强烈。
- **会话分叉与恢复**：`/tan` mid-turn 分叉、compaction 后上下文错乱、`/goal` resume（#11156）、`--reapply-config` 等围绕“会话状态正确性”的需求密集。
- **SDK/扩展能力开放**：`ctx.models.complete` 一次性补全、collab 程序化托管、right-editor 扩展组件（#4603）——扩展生态正在从“脚本注入”走向“一等公民 API”。
- **异步与可观测性**：后台任务进度、Prometheus metrics（#10290）、状态栏 git 分歧指示（#11049）等运营级体验诉求上升。
- **可配置性**：Mermaid 间距（#11124）、`tools.keepTopLevel`（#11140）等细粒度配置项持续被提出。

---

## ⚠️ 开发者关注点（痛点总结）

1. **静默失败/静默降级最伤信任**：#11106 生图 404 被吞、#10242 空闲压缩不生效无提示、#11151 插件 agent 静默不被发现——开发者反复强调“宁可报错，不要装作成功”。
2. **资源与进程生命周期管理**：孤儿 worker（#10537）、CPU 自旋（#10549）、`omp update` 覆盖外部 symlink（#11152）、卸载后残留 symlink 被下次安装静默采纳执行本地代码（#11172，供应链风险）——进程/文件清理是跨平台重灾区。
3. **模型行为正确性**：并行工具结果乱序（#11179）、subagent 不遵守指定模型（#11168）、thinking-loop 守卫误判（#11129）——提示词与传输层的正确性直接影响生产可用性。
4. **时间与时区处理**：Zhipu 429 重置（#11014）、per-turn 时间戳（#10519）——“agent 不知道现在几点”已成高频吐槽。

---

*数据来源：github.com/can1357/oh-my-pi · 统计窗口 2026-09-07 ~ 2026-09-08*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报

**日期：2026-09-08**
**仓库：github.com/deepseek-ai/deepseek-harness**

---

## 1. 今日速览

DeepSeek Harness 今日发布了 **v0.1.3-alpha.2** 版本，这是过去 24 小时内最重要的动态。本次更新聚焦于子代理交互体验增强（支持消息排队、编辑、Steer 等操作）、新模型支持以及 Web 端 Workspace 集成能力提升。今日无新增 Issue 和 PR 活动，社区讨论相对平静。

---

## 2. 版本发布

### dsh-v0.1.3-alpha.2 已发布

🔗 [Release 链接](https://github.com/deepseek-ai/deepseek-harness/releases)

**新增功能：**

| 功能 | 贡献者 | 说明 |
|------|--------|------|
| 升级 pi-ai 至 0.85.1 | @tianyicui | 支持新模型接入 |
| Web 顶栏“在应用中打开” | @yixiangihsiang | 可调用已安装的编辑器、IDE、终端或文件管理器打开 Workspace，显著增强本地工具链集成 |
| 子代理对话增强 | @Dudu-0223 | 可继续对话的子代理支持消息**排队、编辑、删除、单条或全部 Steer 及停止操作**，交互控制粒度大幅提升 |
| PTC 模式命令透明化 | — | 支持展开查看命令及其输出，提升可观测性 |

---

## 3. 社区热点 Issues

> 📌 过去 24 小时内无 Issue 更新，本节暂无可报道内容。

---

## 4. 重要 PR 进展

> 📌 过去 24 小时内无 PR 更新。本期版本的更新内容（见第 2 节）已随 v0.1.3-alpha.2 合入主线，可关注 [@tianyicui](https://github.com/tianyicui)、[@yixiangihsiang](https://github.com/yixiangihsiang)、[@Dudu-0223](https://github.com/Dudu-0223) 等贡献者的后续动态。

---

## 5. 功能需求趋势

基于本次 Release 内容，可观察到以下产品演进方向：

- **子代理（Sub-agent）精细化控制**：Steer、消息管理等能力表明团队在持续投资多代理编排体验，预计社区后续会围绕子代理协作模式提出更多需求。
- **本地工具链集成**：“在应用中打开”功能反映了对开发者本地工作流（IDE、终端、文件管理器）打通的重视。
- **模型生态扩展**：pi-ai 依赖升级意味着新模型支持的持续跟进。
- **可观测性**：PTC 模式命令展开显示，体现了对 Agent 执行过程透明度的关注。

---

## 6. 开发者关注点

从近期版本迭代可归纳的开发者核心诉求：

1. **Agent 执行的可控性与可追溯性**：停止、编辑、Steer 等操作是对“Agent 失控”痛点的直接回应，预计仍是后续反馈热点。
2. **与现有开发环境的无缝集成**：开发者希望 Harness 能深度嵌入既有 IDE / 终端工作流，而非独立孤岛。
3. **新模型支持的时效性**：pi-ai 依赖的快速升级说明社区对最新模型（如 DeepSeek 新版本）的接入有较强期待。

---

*数据来源：GitHub 公开数据，统计周期为过去 24 小时。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*