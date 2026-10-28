# OpenClaw 生态日报 2026-10-28

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-28 04:40 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 — 2026-10-28

---

## 1. 今日速览

- 项目处于**高度活跃状态**：过去 24 小时 Issue 更新 500 条（新开/活跃 390，关闭 110），PR 更新 500 条（待合并 303，已合并/关闭 197），单日吞吐量在开源 AI 助手项目中属于第一梯队。
- 今日发布 **2 个新版本**（v2026.10.8 稳定版与 v2026.10.10-beta.4），节奏保持周更 + beta 快速迭代。
- 社区焦点集中在 **Gateway 稳定性与资源占用**：事件循环阻塞、内存回归（300 MB → 1.9 GB）、Windows 更新链路不可靠是当前三大痛点主线。
- PR 侧贡献者 @vincentkoc、@obviyus、@Alix-007 今日密集提交十余个修复/重构，覆盖 CI、内存子系统、终端转义安全清理等方向。
- 整体健康度：**中上**——功能迭代快、社区响应活跃，但 P0 级稳定性问题（含多个 ux-release-blocker）积压明显，值得维护团队优先处置。

---

## 2. 版本发布

### v2026.10.8（稳定版）
- **亮点：更新可完成并可恢复** —— 升级后 Doctor 失败现在会重启 Gateway 而非留下停止状态；孤立的 maintenance worker 不再阻塞所有 CLI 命令与 Gateway 启动；更新不再在 ACL 文件系统与 Windows 上中断。
- 直接缓解了 #161921、#164800、#184720 等一批“更新后死锁”类问题的部分症状。

### v2026.10.10-beta.4
- **修复**：Automations —— 为显式同会话的定时跟进保留已认证 operator 权限，包括一次性 `next_check` 重臂，同时保留角色/会话/取消/目标/工具策略的撤销边界。
- 属权限模型的精细修正，无破坏性变更，beta 用户建议跟进升级。

---

## 3. 项目进展

今日合并/关闭的代表性 PR（共 197 个 PR 合并/关闭）：

- [#185476](https://github.com/openclaw/openclaw/pull/185476)（已关闭）：后台命令完成后，agent 不再丢失 owner-only 工具，owner 无需再补发一条消息才能让任务收尾。
- [#185476 同期](https://github.com/openclaw/openclaw/pull/186431)（已关闭）：Control UI 中 `/followup` 队列确认不再伪装成 assistant 回复——直击“回复渲染两次”家族问题的一角。
- [#186451](https://github.com/openclaw/openclaw/pull/186451)（已关闭）：导入 PR 目标分支变更后可继续刷新，改善外部贡献者体验。
- [#186475](https://github.com/openclaw/openclaw/pull/186475)（已关闭）：`agents set-identity` 不再 trim 路径首尾空白，避免从相邻路径导入错误身份。
- [#157144](https://github.com/openclaw/openclaw/pull/157144)（已关闭）：其实现已被 #165432 吸收进 main，属于社区 PR 被官方采纳并致谢的正面案例。
- 测试基建批量收口：[#186492](https://github.com/openclaw/openclaw/pull/186492)、[#186498](https://github.com/openclaw/openclaw/pull/186498)、[#186513](https://github.com/openclaw/openclaw/pull/186513)。

**评估**：今日进展集中在权限边界、UI 渲染正确性、更新可靠性三条线；配合 2026.10.8 的发布，“更新即死”问题主线正被系统性清理，前进幅度可观。

---

## 4. 社区热点（按评论数）

| Issue | 评论 | 主题 |
|---|---|---|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) (P0) | 59 | 2026.9.6 回归：大型外部插件捕获时 Gateway 事件循环阻塞数分钟，启动与模型运行时重发布均触发。社区持续跟进中，尚无 fix PR。 |
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | 35 | 状态库 WAL auto-checkpoint 被进程内 reader 钉死，自启动以来从未完成（17091 帧积压）。 |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) (P1) | 25 | 同步持久化与 transcript 维护在规模场景阻塞事件循环——部分修复已落地，仍在追踪残余。 |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) (P0) | 22 | Windows 下慢启动 + 插件不洁关闭 + schtasks 权限错误，导致重启/更新经常失败。 |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) (P0) | 20 | 单个 agent-DB 资源卡死导致**所有** agent 回复失败，须重启 Gateway（Windows Server + 飞书/WhatsApp 多账号场景）。 |

**诉求分析**：讨论最热的前五个 Issue 全部指向同一主题——**Gateway 单点进程的阻塞与恢复能力**。用户多为多渠道（飞书/WhatsApp/Telegram/Matrix）、多账号、长期运行的生产部署方，他们要的不是新功能，而是“跑得久、挂了能自愈”。

---

## 5. Bug 与稳定性（按严重程度）

**P0 / Release Blocker**
1. [#160959](https://github.com/openclaw/openclaw/issues/160959) 插件捕获阻塞事件循环（crash-loop）— 无 fix PR ❌
2. [#161921](https://github.com/openclaw/openclaw/issues/161921) `doctor --fix` 与 `plugins update` 互相等待，插件卡旧版本 — 无 fix PR ❌（2026.10.8 部分缓解）
3. [#164800](https://github.com/openclaw/openclaw/issues/164800) 2026.9.7→9.8 托管更新后激活驱动死亡直到重启主机 — ❌
4. [#158912](https://github.com/openclaw/openclaw/issues/158912) 2026.9.6 起 MEMORY.md 不再注入 bootstrap，文档仍声称会加载 — ❌（行为回归+文档失真）
5. [#167406](https://github.com/openclaw/openclaw/issues/167406) Windows MSIX 启用 Codex 后主线程饥饿、readiness 超时 — ❌
6. [#185819](https://github.com/openclaw/openclaw/issues/185819) Windows 快速上手 Codex 激活失败（2026.10.7，昨日新报）— ❌

**P1 / 严重**
- [#181432](https://github.com/openclaw/openclaw/issues/181432)：2026.10.5 基线 RSS 从 ~300 MB 涨至 1.89 GB + SQLite 事务超时——**新版内存回归，影响面广** ❌
- [#169797](https://github.com/openclaw/openclaw/issues/169797)：单 CPU 主机内存 2.5×、启动慢 3–5×（9.9/10.1 vs 9.4）❌
- [#181078](https://github.com/openclaw/openclaw/issues/181078)：2026.10.5–10.8 会话续读失败 "Canonical session reader continuation is no longer current"，HTTP 200 后丢回复 ❌
- [#121953](https://github.com/openclaw/openclaw/issues/121953)：`[cron:]` 前缀导致 DeepSeek 降级服务，Cron 任务停滞数十秒至数分钟 ❌
- [#177656](https://github.com/openclaw/openclaw/issues/177656)：稳定版 2026.10.5 上原生 host exec 报 shared-state 完整性准入错误 ≥28 次 ❌

**P2 / 值得关注**
- [#166017](https://github.com/openclaw/openclaw/issues/166017)：MCP 会话运行时永不驱逐，spawn broker 顶满 256 子进程 — 标注 linked-PR-open，部分有修复在途 ⚠️
- [#166133](https://github.com/openclaw/openclaw/issues/166133)：MCP 整数参数被强制转字符串 ❌
- [#123354](https://github.com/openclaw/openclaw/issues/123354)：Matrix Megolm 轮换后 E2EE 停止解密 ❌

**总体判断**：当前 Bug 面的重心是 2026.9.6–2026.10.5 窗口引入的**性能与内存回归**，多数尚无 fix PR，是下个版本最需要清偿的债务。

---

## 6. 功能请求与路线图信号

- [#7722](https://github.com/openclaw/openclaw/issues/7722)：`tools.fileAccess` 文件系统沙箱配置（👍 4，安全向，needs-security-review）——与 [#186502](https://github.com/openclaw/openclaw/pull/186502) 终端转义/安全清扫同期出现，显示安全边界是活跃方向，**有望进入路线图**。
- [#13219](https://github.com/openclaw/openclaw/issues/13219)：按模型聚合的用量/成本日志 — 标注 linked-PR-open，可能被近期版本吸收。
- [#52732](https://github.com/openclaw/openclaw/issues/52732)：`agents.list` 中的 per-agent compaction/contextPruning 覆盖 — 多 agent 用户强需求。
- [#9637](https://github.com/openclaw/openclaw/issues/9637)：TUI 无障碍选项（禁用 emoji/Unicode），linked-PR-open。
- [#184600](https://github.com/openclaw/openclaw/issues/184600)（今日热议，7 评论）：Skill Workshop 未经审核自动改写技能、污染 agent 行为——**产品决策类**信号，可能催生“变更确认门”机制。
- PR 侧信号：[#185730](https://github.com/openclaw/openclaw/pull/185730)（优雅重启后恢复运行中会话）、[#186524](https://github.com/openclaw/openclaw/pull/186524)（Codex Goals 恢复）表明长时任务连续性是下一阶段工程重心。

---

## 7. 用户反馈摘要

**真实痛点**
- **生产可用性**：多渠道生产用户（飞书 9 账号 + WhatsApp、Telegram）反复报告“必须重启 Gateway 才恢复”，#157325 类问题的恢复成本被形容为不可接受。
- **Windows 是二等公民感**：更新、插件关闭、schtasks 权限、MSIX 启动（#170956、#184720、#185819）形成一条持续的负面体验链。
- **成本焦虑**：#143017（prompt-cache 前缀重写，实测 21.3M cache-write tokens）显示重度用户在精细核算 token 成本，对隐性浪费极敏感。
- **信任问题**：#184600 中用户用“瘟疫”形容 Skill Workshop 的无审核自我改写——agent 行为的可预期性是核心关切。

**正面反馈**
- 报告质量高：多名用户附带 wire 抓包、符号化采样、量化数据（如 #143017 的 949 条生产请求分析），说明核心用户群工程能力强、投入度高。
- 增量修复获认可：#119720、#120385 讨论中用户主动更新“已修复/仍残留”状态，社区与维护者协作模式健康。
- AI 代理代用户提 Issue（#185902）成为新常态，报告规范且声明清晰。

---

## 8. 待处理积压（提醒维护者关注）

| 条目 | 状态 | 建议 |
|---|---|---|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) P0 · 59 评论 · 9/29 至今 | 无 fix PR，needs-maintainer-review | 最高优先：影响所有使用外部插件的用户 |
| [#164294](https://github.com/openclaw/openclaw/issues/164294) · 35 评论 | 无负责人认领 | WAL 积压会随时间恶化，宜早诊断 |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) P1 · 8/5 至今 | 部分修复后停滞 | 规模化持久化问题，与多个热点 Issue 同根 |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) | memory-core 索引锁死 + 19 GB 孤儿临时库 | 用户实际磁盘损失，需止血方案 |
| [#115256](https://github.com/openclaw/openclaw/issues/115256) P1 · 7/28 至今 | Desktop app 引发 boot-loop，doctor 修复被立即回退 | 需要 app 与 gateway 团队联合处置 |
| [#122019](https://github.com/openclaw/openclaw/issues/122019) | `update status` 不评估插件兼容性/不可逆迁移风险 | 升级安全性的系统性缺口 |
| PR [#103845](https://github.com/openclaw/openclaw/pull/103845) · 7/10 开启 | 长期 "needs proof" | 老 PR 状态不明，建议明确收养或关闭 |

**积压画像**：多个 P0 稳定性 Issue 长期标注 `needs-maintainer-review` 且 `no-new-fix-pr`，与高活跃的贡献流形成反差——建议维护团队优先消化 Gateway 阻塞/内存回归主线，并明确长期挂起 PR 的归属。

---

*数据来源：GitHub Issues/PR/Releases，统计窗口为 2026-10-27 至 2026-10-28（UTC）。*

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告
**统计窗口：2026-10-27 ~ 2026-10-28（UTC）**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**高速分化期**：头部项目（OpenClaw、CoPaw、Hermes Agent）日均 Issue/PR 吞吐量达 500/50/36+ 条，呈平台化演进态势；中部项目（NanoBot、Zeroclaw）处于版本收敛或架构重构周期。生态共性痛点高度趋同——**Gateway 单点进程稳定性、长时运行内存/资源回归、Windows 平台二等公民问题、MCP 兼容性**几乎在每个活跃项目重复出现。与此同时，“AI 代用户提 Issue/自运维”（OpenClaw #185902、Hermes bot "buildmo"）开始成为新常态，多渠道接入（飞书/WhatsApp/Discord/Telegram/Matrix/邮件）已是标配能力而非差异化功能。生产化诉求（成本可观测、审计合规、凭据隔离）正取代功能丰富度，成为社区讨论的主战场。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 390，关闭 110） | 500（待合并 303，关闭 197） | v2026.10.8 + beta.4（双发） | 🟢 中上：吞吐量第一梯队，但 P0 积压明显（≥6 个无 fix PR） |
| **CoPaw** | 36（新开 16，关闭 20） | 50（待合并 36，关闭 14） | v2.3.0-beta.1 | 🟢 良好：净消化状态，但 36 条待合并含多个 XXXL 架构 PR，评审带宽承压 |
| **Hermes Agent** | 50（新开 42，关闭 8） | 50（待合并 40，关闭 10） | 无 | 🟡 中：方向聚焦（Webapp 收尾），但多路复用隔离问题集中爆发 |
| **Zeroclaw** | 50（**关闭 0**） | 39（待合并 38，关闭 1） | v0.8.7（安全版，81 commits/19 人） | 🟡 中：v0.9.0 收敛中，**评审带宽是最大瓶颈**，S0 安全问题挂起 6 周 |
| **NanoBot** | 3（全部关闭） | 23（关闭 15，待合并 8） | 无（0.4.0 准备中） | 🟢 良好：当日闭环速度生态最佳，版本收敛期 |
| **LobsterAI** | 2（1 开 1 关） | 3（1 开 2 关） | 无 | 🟢 中低但健康：桌面端稳步迭代 |
| **NanoClaw** | 0 | 1（Proton Mail 适配器） | 无 | 🟢 低噪声单线程推进，流程规范 |
| **EasyClaw** | 0 | 0 | v1.9.40 | 🟡 维护者主导，社区互动近零 |
| **PicoClaw** | 2 | 1 | 无 | 🔴 维护者缺位风险：活跃 fork 公告 22 天无官方回应 |
| NullClaw / IronClaw / TinyClaw / Moltis / ZeptoClaw | 0 | 0 | 无 | ⚪ 静默 |

**分层结论**：OpenClaw 独居第一梯队；CoPaw/Hermes/Zeroclaw 构成活跃第二梯队；NanoBot 以小体量实现最高闭环效率；尾部约半数项目停滞。

---

## 3. OpenClaw 在生态中的定位

**规模优势**：单日 Issue/PR 更新量（各 500 条）约为第二梯队项目（36-50 条）的 **10 倍以上**，合并 PR 数（197）超过其他所有活跃项目之和，社区规模与贡献者密度（单日 10+ 密集提交者）均为生态之最。

**技术路线差异**：
- **单进程 Gateway 中心化架构**：与 CoPaw 的“插件化 + 子进程隔离”（#8187/#8426）、Zeroclaw 的 append-only 事件历史（#11921）相比，OpenClaw 的 Gateway 单点进程承担了过多职责——这正是其五大热点 Issue 的共同根源（事件循环阻塞、WAL 钉死、单 agent-DB 卡死拖垮全部 agent）。竞品正走向进程隔离/事件溯源，OpenClaw 尚未展示对应架构动作。
- **迭代节奏最快但债务最重**：周更 + beta 快迭代带来功能领先，但 2026.9.6–10.5 窗口引入的内存回归（300MB→1.9GB）等 P1/P2 问题多数无 fix PR，形成“快发慢修”模式。
- **用户画像最偏生产**：飞书 9 账号 + WhatsApp/Telegram 的多渠道生产部署是讨论主体，用户自带 wire 抓包与符号化采样，工程素养极高——这既是资产，也放大了稳定性失分的信任成本。

**相对短板**：Zeroclaw 的安全治理（v0.8.7 安全响应、系统提示词预算 fail-closed 设计）更系统化；CoPaw 的无障碍设计与本地模型一等公民化更超前；NanoBot 的当日闭环响应速度值得借鉴。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **长时运行资源稳定性** | OpenClaw（#181432 内存 6×回归）、NanoBot（#6506 挂机 5GB）、CoPaw（#7935 超时后永不自愈）、Zeroclaw（#11585 成本上限需重启解除） | “跑得久、挂了能自愈”——常驻进程的内存泄漏与故障恢复是跨项目第一痛点 |
| **Windows 平台兼容** | OpenClaw（#170956/#185819 等 5+ 条主线）、NanoBot（内存泄漏 + CRLF 翻倍）、Hermes（#136988 启动循环）、LobsterAI（#2895 重复授权） | Windows 用户占比高但测试与打包链路系统性落后于 macOS/Linux |
| **上下文压缩/记忆治理** | OpenClaw（#136311 memory-core 锁死、MEMORY.md 回归）、CoPaw（#8312/#8417 压缩失败 cluster）、Zeroclaw（RO-mix 提示词预算系列 PR）、Hermes（#143379 DOC-CHAIN RFC） | 长会话下的 compaction 正确性、提示词预算硬约束、持久记忆溯源 |
| **MCP 兼容性与健壮性** | OpenClaw（#166017 子进程耗尽、#166133 类型强转）、CoPaw（#8424 legacy 协议回退失败）、Zeroclaw（#10807 会话投毒、#12055 陈旧 socket） | MCP 已是标配接入层，但兼容矩阵窄、故障恢复粗糙 |
| **多渠道消息保真度** | Zeroclaw（WhatsApp 图片丢弃、Slack 状态消失）、Hermes（Telegram topic 委派丢失）、NanoBot（Discord 通知轰炸）、NanoClaw（Proton Mail） | 多媒体消息保真、渠道行为一致性（CLI vs channel 入口不对等） |
| **安全与凭据治理** | Zeroclaw（#10968 审批静默失效）、Hermes（#145857 multiplex 凭据作用域、#118379 凭据池计费）、OpenClaw（#7722 文件沙箱）、LobsterAI（#2936 凭据误封） | 无人值守审批边界、多 profile 凭据隔离、文件系统沙箱 |
| **成本可观测性** | OpenClaw（#143017 21.3M token cache 浪费）、Zeroclaw（#11204 $0.00 显示） | 按模型聚合的用量/成本日志是重度用户刚需 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | CoPaw | Hermes Agent | Zeroclaw | NanoBot | 尾部长尾项目 |
|---|---|---|---|---|---|---|
| **功能侧重** | 生产级多渠道 Gateway + 插件生态 | Console/WebUI 体验 + 插件化架构 + 实时语音（in途） | 多路复用多 profile + Webapp/远程访问 | 安全加固 + v0.9.0 channel/插件体系 | WebUI 打磨 + 通道解耦 | 垂直场景（EasyClaw 电商客服） |
| **目标用户** | 多渠道生产部署方（企业/重度自托管） | 本地模型 + 桌面端用户 | 高级自助托管多 profile 用户 | 安全敏感的自托管运维者 | 桌面/WebUI 个人用户 | 细分人群（隐私邮件用户、旧硬件用户） |
| **技术架构** | 单进程中心化 Gateway（Rust/混合） | Python，走向插件化 + 子进程隔离 | gateway multiplex 多 profile 共进程 | Rust/Wasm 插件 runtime，append-only 事件历史 | 通道层解耦重构中 | 单体/轻量 |
| **语言/生态** | 国际化多渠道矩阵 | 阿里系模型兼容 + 国际 provider | NousResearch 研究背景，AI 自运维试点 | 社区驱动，19 人贡献安全版 | 港大实验室背景 | — |

**关键洞察**：架构路线上出现了明确分野——OpenClaw 的中心化 Gateway 与 CoPaw/Zeroclaw 的隔离化/事件溯源路线形成对照，未来 6-12 个月稳定性表现将检验两条路线的优劣。

---

## 6. 社区热度与成熟度

**活跃度分层**：
- **第一梯队（平台化运营）**：OpenClaw——社区规模、贡献者密度、版本节奏全面领先
- **第二梯队（快速迭代/架构跃迁期）**：CoPaw（v2.3.0-beta + XXXL 插件化 PR）、Zeroclaw（v0.9.0 收敛）、Hermes（Webapp 合并后收尾）
- **第三梯队（质量巩固/版本收敛期）**：NanoBot（0.4.0 前高强度收敛，闭环速度最佳）、LobsterAI（桌面端稳步打磨）
- **长尾（垂直到位或停滞）**：NanoClaw/EasyClaw 垂直深耕；PicoClaw 面临 fork 分裂——**这是全生态唯一的治理危机案例**，sipead 若两周内不回应，社区迁移概率显著上升

**成熟度判断**：成熟度与活跃度并不正相关。Zeroclaw/NanoBot 处于“小而精”的质量巩固期；OpenClaw 活跃度最高但 P0 债务也最重（6+ 个 release-blocker 无 fix PR）；Zeroclaw 的 Issue 零关闭与 38 条 PR 积压、CoPaw 的 XXXL PR 队列均指向**评审带宽是全生态共同的隐性瓶颈**。

---

## 7. 值得关注的趋势信号

1. **“稳定性 > 功能性”的诉求转向**：五大项目中讨论最热的 Issue 几乎全是稳定性问题。AI 智能体已跨过“能跑起来”阶段，进入“7×24 生产运行”验收期。开发者应优先投资：故障自愈、优雅重启后恢复会话（OpenClaw #185730、CoPaw 语音 PR 均有此信号）、资源泄漏防护。

2. **无人值守场景的安全边界成为新战场**：Zeroclaw #10968（cron 无审批）、OpenClaw Skill Workshop 无审核自我改写（#184600）、Hermes typed completion receipt（#143373）共同指向同一命题——**自主运行的 agent 需要显式的“变更确认门”与审批降级策略**，这将催生一类新的安全原语。

3. **进程隔离架构窗口期**：CoPaw 插件化子进程隔离、Zeroclaw append-only 事件历史、OpenClaw Gateway 阻塞系列问题——单进程单体架构在多 agent/多渠道场景下已现天花板，2027 年主流项目大概率完成向隔离/事件溯源架构的迁移，早投入者获稳定性红利。

4. **AI 自运维是新常态**：OpenClaw 的 AI 代理代提 Issue、Hermes 的 bot 自动归档取证，标志着 agent 参与自身缺陷管理的工作流已经落地，issue tracker 正在成为 agent 可编程接口。

5. **上下文压缩是下一个质量高地**：CoPaw 的压缩 bug cluster、Zeroclaw 的提示词预算 fail-closed 系列、Hermes 的 DOC-CHAIN RFC——长会话上下文治理（压缩正确性 + 预算硬约束 + 持久记忆溯源）是各项目共同的技术卡点，也是差异化的机会点。

6. **对开发者的直接参考**：若选生产级多渠道部署，OpenClaw 规模最大但需自担 P0 风险；重视安全治理选 Zeroclaw；本地模型/桌面体验选 CoPaw/NanoBot；多 profile 自托管选 Hermes（但需关注 multiplex 隔离问题）；PicoClaw 在官方表态前不建议新投入。

---

*本报告基于各项目 2026-10-27 ~ 2026-10-28 GitHub 公开动态自动聚合分析，观点仅供社区参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-10-28** | 仓库：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 今日保持高节奏开发态势：过去 24 小时内 23 条 PR 更新（15 条已合并/关闭，8 条待合并），3 条 Issue 全部关闭，问题闭环速度极快（多 Issue 当日提出、当日修复）。无新版本发布，但 0.4.0 发布准备工作已在进行中（[#6504](https://github.com/HKUDS/nanobot/pull/6504)）。今日工作重心集中在 **WebUI 稳定性打磨**、**Windows 平台内存泄漏修复** 和 **通道层解耦重构**，整体呈现“修 bug + 重构提质”的版本收敛期特征，健康度良好。

---

## 2. 版本发布

今日无新版本发布。值得注意的是 [#6504 chore(release): prepare 0.4.0](https://github.com/HKUDS/nanobot/pull/6504) 处于待合并状态，基于主干 `b07b3eac` 完成候选准备与验证，等待独立评审和发布批准。Dock 窗口复用（#6377）和重试机制重设计（#6367）将不进入 0.4.0。**预计近期发布 0.4.0。**

---

## 3. 项目进展

今日合并/关闭 15 条 PR，主要集中在三个方向：

**关键修复**
- **Windows 内存泄漏** [#6507](https://github.com/HKUDS/nanobot/pull/6507)：修复 Python < 3.14 下进程身份轮询导致 ctypes 指针缓存无限增长的问题，与 Issue #6506 对应，是最重要的稳定性修复。
- **流式回复持久化** [#6494](https://github.com/HKUDS/nanobot/pull/6494)：模型流失败前已送达的回复不再被错误占位符覆盖，用户已读内容可被后续请求看到。
- **Windows 换行符污染** [#6475](https://github.com/HKUDS/nanobot/pull/6475)：`atomic_write_text` 以 `newline=""` 打开临时流，修复 LF→CRLF→CRCRLF 翻倍问题（cron/trigger 持久化受影响），关闭 #6474。

**WebUI 体验修复（批量落地）**
- [#6502](https://github.com/HKUDS/nanobot/pull/6502) Dock 触摸拖拽后点击失效
- [#6501](https://github.com/HKUDS/nanobot/pull/6501) 带行号代码块中文折行错乱
- [#6500](https://github.com/HKUDS/nanobot/pull/6500) 历史下拉手势在消息节点替换时丢失
- [#6487](https://github.com/HKUDS/nanobot/pull/6487) 子任务详情可从内容区域打开
- [#6490](https://github.com/HKUDS/nanobot/pull/6490) 所有模型预设展示上下文长度与推理力度
- [#6496](https://github.com/HKUDS/nanobot/pull/6496) 10 个语言包统一移除发送标签省略号

**工程化与文档**
- [#6503](https://github.com/HKUDS/nanobot/pull/6503) 明确贡献政策（当前仅限 collaborator 提 PR）与 Issue 作者致谢机制
- [#6495](https://github.com/HKUDS/nanobot/pull/6495) 稳定 WebUI 交互测试、修复 tooltip 阻断 Escape

**待合并主线（8 条）**：包含 #6412（统一代码/diff 高亮，存在 conflict）、#6482（WebUI 出站投递集中化，NAN-365）、#6498（工具提示渲染移出核心）等重构，显示架构解耦仍在持续推进。

整体评估：**项目在 0.4.0 前进入高强度收敛阶段，移动端/触摸体验与 Windows 平台兼容性明显改善。**

---

## 4. 社区热点

- **[#6506 WebUI Windows 11 内存泄漏](https://github.com/HKUDS/nanobot/issues/6506)**（2 条评论，当日关闭）：用户挂机一夜后 Python 进程占用超 5 GB，直接推动 #6507 的根因修复（ctypes `FileTime` 结构缓存泄漏）。诉求：长期挂机场景下的资源稳定性。
- **[#6505 会话创建后无法更换项目目录](https://github.com/HKUDS/nanobot/issues/6505)**（2 条评论，当日关闭）：用户希望 WebUI 中已存在消息的会话能迁移到其他工作目录，目前只能绕道操作。诉求：更灵活的项目/会话管理。
- **PR 侧**：[#6497（p1）隔离内联命令异常](https://github.com/HKUDS/nanobot/pull/6497) 为最高优先级待合并项，`/status` 异常逃逸会终止消费者并取消所有活动任务，影响面大。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 P1 | [#6497](https://github.com/HKUDS/nanobot/pull/6497) `/status` 内联命令异常逃逸，导致会话循环终止、活动任务被取消 | 有 fix PR，待合并 |
| 🔴 高 | [#6507](https://github.com/HKUDS/nanobot/pull/6507) Windows 身份轮询内存泄漏（挂机 5GB+，对应 Issue #6506） | ✅ 已关闭 |
| 🟠 中 | [#6474](https://github.com/HKUDS/nanobot/issues/6474) / [#6475](https://github.com/HKUDS/nanobot/pull/6475) `atomic_write_text` CRLF 翻倍，影响 cron/trigger 持久化数据完整性 | ✅ 已修复 |
| 🟠 中 | [#6494](https://github.com/HKUDS/nanobot/pull/6494) 模型流失败导致已读回复未持久化 | ✅ 已修复 |
| 🟡 低 | #6502 / #6500 / #6501 等一批 WebUI 触摸与渲染问题 | ✅ 均已修复 |

今日无新报崩溃或回归，Bug 修复响应速度优秀（多数当日闭环）。

---

## 6. 功能请求与路线图信号

- **WebUI 会话目录可变更**（#6505，已关闭）：Issue 已关但未见对应 PR，需观察是否通过 #6412 预览布局重构顺带实现。
- **Discord 步骤更新免打扰**（[#6493](https://github.com/HKUDS/nanobot/pull/6493)，待合并）：流式输出一次问答触发 3-6 次通知，方案是抑制中间消息 ping。与 #6498（工具提示渲染下放至各通道）同属通道体验优化方向，**很可能进入下一版本**。
- **google-browser-scraper 搜索 Provider**（[#6499](https://github.com/HKUDS/nanobot/pull/6499)）：用户经自有代理用真实浏览器执行 Google 搜索、本地返回 SerpApi 风格 JSON，定位类似 SearXNG Provider。
- **list_sessions 分页**（[#6315](https://github.com/HKUDS/nanobot/pull/6315)，待合并）：agent 可请求有界会话句柄分页，已通过 29 项相关测试。
- **0.4.0 排除项信号**：#6377（Dock 窗口复用）、#6367（重试重设计）延后，或成 0.5.x 候选主题。

---

## 7. 用户反馈摘要

- **痛点：长期挂机资源占用**——Windows 用户实测挂机后内存超 5GB（#6506），反映存在桌面/WebUI 常驻使用场景。
- **痛点：通知轰炸**——Discord 用户反馈流式模式下进度消息每条都 ping，“真正的答案被淹没”（#6493）。
- **痛点：会话灵活性不足**——项目目录绑定会话、发消息后无法更改（#6505）；子任务内容区域不可点开详情（#6487）。
- **痛点：跨平台一致性**——Windows 下换行符、内存、UI 触摸等系列问题表明主力用户群中有相当比例 Windows 用户，平台兼容是持续战场。
- **满意点**：多条 Issue 当天提交、当天修复闭环；贡献政策透明化（#6503）也回应了社区对参与方式的困惑。

---

## 8. 待处理积压

| 项 | 状态 | 建议 |
|---|---|---|
| [#6497](https://github.com/HKUDS/nanobot/pull/6497) P1 内联命令异常隔离 | 待合并 | 唯一 P1，建议优先评审，避免会话循环被 `/status` 异常终止 |
| [#6412](https://github.com/HKUDS/nanobot/pull/6412) 统一高亮重构 | OPEN + conflict | 开放已 5 天且存在冲突，建议维护者介入 rebase，可能阻塞 0.4.0 WebUI 收尾 |
| [#6504](https://github.com/HKUDS/nanobot/pull/6504) 0.4.0 发布准备 | 待评审 | 等待独立评审与发布批准，建议推进 |
| [#6315](https://github.com/HKUDS/nanobot/pull/6315) sessions 分页 | 开放 9 天 | 测试齐全，建议纳入评审队列 |
| #6505（会话目录迁移） | Issue 已关但无跟踪 PR | 确认是否已在其他 PR 覆盖，避免需求丢失 |

---

**健康度小结**：⚡ 活跃度高 | 🐛 Bug 闭环速度快 | 📦 版本收敛期（0.4.0 在途）| ⚠️ 关注 P1 PR 评审与 #6412 冲突。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 — 2026-10-28

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时内有 **50 条 Issue 更新（全部为活跃/新开，0 关闭）** 和 **39 条 PR 更新（38 待合并，1 已关闭）**，并发布了 **v0.8.7 安全维护版本**。当前社区焦点集中在 **系统提示词预算治理**（RO-mix 连续提交 4 个相关 PR）、**MCP 会话健壮性**、以及 **插件系统安全加固** 三条主线。大量 Issue 挂有 `release:v0.9.0` 标签，表明 v0.9.0 的功能集合正在收敛中。Issue 零关闭、PR 合并率偏低，显示维护者评审带宽是当前瓶颈。

## 2. 版本发布

### [v0.8.7](https://github.com/zeroclaw-labs/zeroclaw/releases)
- **性质**：v0.8.6 的安全与维护跟进版本，包含 **81 个提交、19 位贡献者**。
- **核心内容**：
  - 升级到已修补的 **Wasmtime**、**Rustls**（证书验证）、**tokio** 与 **ctutils**，覆盖影响 v0.8.6 的安全公告；
  - 使用 C 重建容器镜像。
- **迁移注意**：无破坏性 API 变更的说明，属常规安全升级；建议所有 v0.8.6 用户尽快升级，尤其是部署 Wasm 插件 runtime 与容器的场景。
- 配套动作：[#12019](https://github.com/zeroclaw-labs/zeroclaw/pull/12019)（已关闭）将翻译目录钉扎到 v0.8.7，[#12079](https://github.com/zeroclaw-labs/zeroclaw/pull/12079) 正在将翻译 gitlink 推进到 v0.8.7 之后。

## 3. 项目进展

今日仅 1 个 PR 关闭（#12019，文档翻译钉扎，服务于 v0.8.7 发布），**无功能代码合并**。但待合并 PR 队列质量较高，方向明确：

- **系统提示词治理系列**（@RO-mix）：[#11910](https://github.com/zeroclaw-labs/zeroclaw/pull/11910)（强制预算、fail-closed）、[#12056](https://github.com/zeroclaw-labs/zeroclaw/pull/12056)（身份段落置顶）、[#12070](https://github.com/zeroclaw-labs/zeroclaw/pull/12070)（技能刷新后重设上限）、[#12044](https://github.com/zeroclaw-labs/zeroclaw/pull/12044)（延迟加载 bootstrap 段落）——一套完整的 context 治理方案。
- **MCP 健壮性**：[#11872](https://github.com/zeroclaw-labs/zeroclaw/pull/11872)（404 陈旧会话重放）、[#12061](https://github.com/zeroclaw-labs/zeroclaw/pull/12061)（修复 #10807 会话投毒）。
- **大型架构 PR 持续推进**：[#11921](https://github.com/zeroclaw-labs/zeroclaw/pull/11921)（append-only 会话事件历史，size:XL，触达全部子系统）、[#11880](https://github.com/zeroclaw-labs/zeroclaw/pull/11880)（Goal V1 提案 3/12，已合入 v0.8.7 上游）。

## 4. 社区热点

| Issue | 评论 | 焦点 |
|---|---|---|
| [#10999](https://github.com/zeroclaw-labs/zeroclaw/issues/10999) Discord 插件发布二进制验证 | 9 | v0.9.0 发布门禁测试任务，已在最终发布产物上验证真实 Discord 收发 |
| [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) 独立 channel 启动的 SOP 无工具句柄 | 8 | P1 架构问题：channel 工具仅在两个入口点可用 |
| [#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) Slack "is thinking…" 状态消失 | 5 | v0.8.5 回归，用户追问是否有意为之 |
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) OpenRouter 花费显示 $0.00 | 5 | P1：usage.cost 从未被采集，可观测性缺失 |

诉求主线：**channel 一致性**（各入口点行为不对等）与**成本可观测性**是用户抱怨最集中的两类问题。

## 5. Bug 与稳定性（按严重程度）

**S0 — 安全**
- [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968)（P1）：无人值守 turn（cron/heartbeat/headless SOP）无 ApprovalManager，风险配置文件审批静默失效。**尚无 fix PR**，需优先关注。

**S1 — 阻断工作流**
- [#12014](https://github.com/zeroclaw-labs/zeroclaw/issues/12014)：无 `context_window` 的自定义 OpenAI 兼容 provider 静默回退 32k 并本地拒绝合法 turn（10-24 新报，无 fix）。
- [#10807](https://github.com/zeroclaw-labs/zeroclaw/issues/10807)：一次失败的 MCP 恢复尝试永久投毒连接 → **有 fix PR** [#12061](https://github.com/zeroclaw-labs/zeroclaw/pull/12061)。
- [#11538](https://github.com/zeroclaw-labs/zeroclaw/issues/11538) / [#11539](https://github.com/zeroclaw-labs/zeroclaw/issues/11539)：Firejail 沙箱两类失败，日志不透明（无 fix）。
- [#11237](https://github.com/zeroclaw-labs/zeroclaw/issues/11237)：配置编辑器无法写入声明式 cron（in-progress）。

**S2 — 降级行为**
- [#11336](https://github.com/zeroclaw-labs/zeroclaw/issues/11336)：`plugin info` 报告 `[loads]` 但 runtime 拒绝注册。
- [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332)：技能审查/创建对 channel/webhook/gateway turn 不生效。
- [#11585](https://github.com/zeroclaw-labs/zeroclaw/issues/11585)：成本上限触发后只能重启 daemon 解除。
- [#12055](https://github.com/zeroclaw-labs/zeroclaw/issues/12055) / [#12072](https://github.com/zeroclaw-labs/zeroclaw/issues/12072)：MCP HTTP 连接池陈旧 socket、Codex 流重试被默认端点拒绝 → **均有对应 fix PR**（[#11872](https://github.com/zeroclaw-labs/zeroclaw/pull/11872)、[#12073](https://github.com/zeroclaw-labs/zeroclaw/pull/12073)）。

**S3**：[#11360](https://github.com/zeroclaw-labs/zeroclaw/issues/11360)（包锁文件权限可被其他本地账户持有）、[#11972](https://github.com/zeroclaw-labs/zeroclaw/issues/11972)（get-paircode 失败仍退出 0，→ fix [#12082](https://github.com/zeroclaw-labs/zeroclaw/pull/12082)）。

## 6. 功能请求与路线图信号

- **[/load-session](https://github.com/zeroclaw-labs/zeroclaw/issues/12069)**（10-27 提出）：按名称/UUID 恢复 Code 会话 → **PR [#12071](https://github.com/zeroclaw-labs/zeroclaw/pull/12071) 已同日提交**，落地概率高，可能进 v0.9.0。
- **[#11255](https://github.com/zeroclaw-labs/zeroclaw/issues/11255)**：WhatsApp 入站图片保存到 workspace（对齐 Telegram 行为，in-progress）。
- **[#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993)**：完成公共 runtime 组合边界（`release:v0.9.0` 架构重构）。
- **[#11414](https://github.com/zeroclaw-labs/zeroclaw/pull/11414)**：Focused 工作区（size:XL，operator UX）。
- 大量 `release:v0.9.0` 标签 Issue（#10999、#11055、#11332、#11336、#11360、#11562、#11580、#11830 等）显示 **v0.9.0 主线是插件体系 + channel 工具一致性 + 发布门禁**。

## 7. 用户反馈摘要

- **痛点一：Channel 行为不一致** —— 技能学习循环、工具句柄只在 CLI 入口生效，Matrix/webhook/Web UI 用户感到被差别对待（#11332、#11055）。
- **痛点二：成本与用量不可见** —— OpenRouter 用户跑了 210 万 token 后看到 $0.00，失去成本控制依据（#11204）。
- **痛点三：多媒体体验** —— WhatsApp 图片/视频标题被丢弃（#11257），说明消息渠道保真度影响日常使用。
- **正面信号**：#10999 中用户在最终发布二进制上完成真实 Discord 收发验证，发布门禁流程获得信任；外部安全团队（DefuzeX，#11233）主动进行行为安全测试，显示项目安全生态受关注。
- **运维侧**：`gateway get-paircode` 退出码错误（#11972）反映脚本化部署用户对 CLI 契约的敏感性。

## 8. 待处理积压

- **[#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968)（S0 安全，9-19 提出）**：无 ApprovalManager 问题挂起近 6 周，无 fix PR，**建议维护者最高优先**。
- **[#9900](https://github.com/zeroclaw-labs/zeroclaw/pull/9900)**（8-10 提出）：distinguished contributor 的 Codex 流修复挂起近 3 个月且标记 `needs-author-action`，与新 PR #12073/#12072 存在重叠，需协调避免重复工作。
- **[#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204)、[#10807](https://github.com/zeroclaw-labs/zeroclaw/issues/10807)、[#11538](https://github.com/zeroclaw-labs/zeroclaw/issues/11538)/[#11539](https://github.com/zeroclaw-labs/zeroclaw/issues/11539)**：多个 P1 问题挂起 3 周以上。
- **整体信号**：38 个 open PR 待评审、Issue 关闭数为 0，评审带宽不足是当前最大的健康度风险；建议优先消化 v0.9.0 标签项并批量响应 P1 bug。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-10-28）

## 1. 今日速览

项目今日保持高度活跃：过去 24 小时 Issues 更新 50 条（新开/活跃 42，关闭 8），PR 更新 50 条（待合并 40，已合并/关闭 10），无新版本发布。社区讨论重心集中在 **gateway 多路复用（multiplex）架构下的会话/凭据隔离问题** 与 **Webapp（浏览器版 Desktop）合并后的收尾工作**。PR 流转健康，今日关闭的 10 个 PR 中多为 Webapp 插件栈的连续推进，显示维护者对 #141864 合并后的跟进节奏很快。值得注意的是，出现了多个由自主运行的 Hermes Agent 实例（bot "buildmo"）自动提交的 Issue，表明项目在“AI 自我运维”方向已有真实落地场景。

## 2. 版本发布

今日无新 Release。当前讨论基线为 `v0.22.5`（stable）及 `main` 分支（约 commit `4d04303818b` / `9b904dcc22` 附近）。

## 3. 项目进展

今日无明确记录的合并 PR（10 条已合并/关闭中可见的关闭多为栈式 PR 的 salvage/rebase），但活跃 PR 呈现清晰的推进方向：

- **Webapp 插件栈**：[#145549](https://github.com/NousResearch/hermes-agent/pull/145549)（agent+desktop 包的 desktop 半部在服务端复制）已关闭，由维护者 teknium1 salvage 为 [#145853](https://github.com/NousResearch/hermes-agent/pull/145853)，配合 #145072 栈持续推进 Webapp 插件 UI 渲染（如 Meshy 卡片）。对应关闭 Issue #145540、#145466。
- **CI 修复**：[#145873](https://github.com/NousResearch/hermes-agent/pull/145873) 修复慢网络下 daemon-backed gateway 探测超时导致的 CI 红，保障主干可合性。
- **安全加固**：[#145787](https://github.com/NousResearch/hermes-agent/pull/145787) 全面移除凭据预览中的任何明文字符，覆盖 dashboard、messaging、CLI dump 等所有泄露面。

整体评估：主干处于“Webapp 上线后密集收尾 + gateway 稳定性打磨”阶段，单日推进幅度中等但方向聚焦。

## 4. 社区热点

- **[#143379](https://github.com/NousResearch/hermes-agent/issues/143379)**（评论 29）：RFC "DOC-CHAIN SUBSTRATE'S NETWORK"，讨论压缩后持久记录的溯源、治理与可重读性，是上下文压缩/记忆方向的核心架构设计讨论，吸引大量深度参与。
- **[#139818](https://github.com/NousResearch/hermes-agent/issues/139818)**（评论 25）：远程后端 desktop 会话无法从本地 resume（`session.resume` 返回 not_found）。会话可恢复性是远程部署用户的核心诉求，持续 12 天讨论未决，与今日新报的 [#145811](https://github.com/NousResearch/hermes-agent/issues/145811)（dashboard 会话选择器列出不可恢复的 desktop 行）互为印证，指向同一根源问题。
- **[#144648](https://github.com/NousResearch/hermes-agent/issues/144648)**（评论 10）：维护者发布的 Webapp 合并后跟踪 Issue，汇集各平台接入、安全面、设置同步等后续项。
- **[#143364](https://github.com/NousResearch/hermes-agent/issues/143364)**（评论 10）：多 profile 下，次要 profile 的流式进度经主 bot 送达——多路复用的消息路由串扰问题。

## 5. Bug 与稳定性

**P1**
- [#118379](https://github.com/NousResearch/hermes-agent/issues/118379)：Anthropic 凭据池轮换被 per-request refresh 回退，两个订阅按一个计费并意外 fallthrough 到其他 provider。涉及计费与安全边界，已开放 5 周余，暂无明确 fix PR。

**P2（按影响面排序）**
- [#145857](https://github.com/NousResearch/hermes-agent/issues/145857)：多路复用下 Approval transport 工作线程无 secret 作用域，读不到自身 profile 凭据。**今日新报，尚无 fix PR。**
- [#136204](https://github.com/NousResearch/hermes-agent/issues/136204)：Desktop 共享 tui_gateway 进程忽略 `HERMES_WRITE_SAFE_ROOT` 写路径限制，安全边界失效（P3 标签但属安全风险）。
- [#136988](https://github.com/NousResearch/hermes-agent/issues/136988)：Windows Desktop 后端就绪探针超时导致无限重启循环（MCP discovery 拖慢启动），已有 workaround `mcp_discovery_timeout=1.0`。
- [#145286](https://github.com/NousResearch/hermes-agent/issues/145286)：`session.create` 拒绝时 CLI 读错字段（`data.field` vs `data.fields`），策略拒绝被误报为“无法连接模型”。
- [#139347](https://github.com/NousResearch/hermes-agent/issues/139347)：bounded hosted-room 转录驱逐仍被 settlement 引用的用户，触发 `DiscussionValidationError`。
- [#145868](https://github.com/NousResearch/hermes-agent/issues/145868)：Telegram 命名 forum topic 的异步 delegation 唤醒永远无法 admit，48h 后终态丢弃。**已有 fix PR [#145869](https://github.com/NousResearch/hermes-agent/pull/145869)**（route-only identity admission）。
- Kanban 调度链三个问题：[#126190](https://github.com/NousResearch/hermes-agent/issues/126190)（stale 失败文本阻塞 respawn）、[#145820](https://github.com/NousResearch/hermes-agent/issues/145820)（rc=75 限速退出被计为失败）、[#128384](https://github.com/NousResearch/hermes-agent/issues/128384)（Windows 只杀 venv launcher，worker 残留）。
- Gateway 消息接续/恢复：[#145866](https://github.com/NousResearch/hermes-agent/pull/145866)（email 无时间戳重取被判 admission conflict，**fix PR 已开**）、[#145867](https://github.com/NousResearch/hermesResearch/hermes-agent/pull/145867)（启动时 drain marker 被忽略，**fix PR 已开**）、[#145825](https://github.com/NouResearch/hermes-agent/issues/145825)（崩溃恢复的后台进程 notify_on_complete 丢失通知）。

**P3**
- [#135872](https://github.com/NousResearch/hermes-agent/issues/135872)：cua-driver 0.34 元素点击报 `unknown argument element_index`，与 [#126587](https://github.com/NousResearch/hermes-agent/issues/126587)（cua-driver 上游全标 prerelease 导致 pin 永久卡在 0.21.0）构成 computer_use 生态的连锁卡点。
- [#145856](https://github.com/NousResearch/hermes-agent/issues/145856)：Matrix 适配器 mautrix 晚装后残留 stub EventType，重启前持续报错。

## 6. 功能请求与路线图信号

- **流式控制插件 API**：[#144657](https://github.com/NousResearch/hermes-agent/pull/144657) 允许 stream hook 请求核心切断响应（latch 机制），扩展插件对输出流的治理能力，PR 活跃中，有望进入下一版本。
- **Live Artifacts**：[#144461](https://github.com/NousResearch/hermes-agent/pull/144461) 类 Claude Artifacts 的交互式 HTML 页面（表单/看板/仪表盘）+ 回写会话，社区贡献的热门方向。
- **Tailscale serve 集成**：[#9269](https://github.com/NousResearch/hermes-agent/issues/9269)（👍 11，开放 6 个多月）零配置安全远程访问，与 Webapp 上线方向契合，可关注是否被重新激活。
- **语义分块检索**：[#76320](https://github.com/NousResearch/hermes-agent/issues/76320)（MRR@5 +23.8%，1600-query 评测）为记忆/检索方向提供量化证据，已获 Innovation tag。
- **Kanban 通知类型化**：[#143373](https://github.com/NouResearch/hermes-agent/pull/143373)（typed completion receipt，杜绝 worker prose 注入）安全向改进。
- **国际化**：波斯语 RTL + Vazirmatn [#97522](https://github.com/NouResearch/hermes-agent/pull/97522) 长期开放。

## 7. 用户反馈摘要

- **多路复用是重灾区**：多个 profile 共享一个 gateway 进程的用户（4–8 profile 配置常见）频繁遭遇凭据作用域、消息路由串扰、审批传输失效问题——这是高级自助托管用户的核心场景，也是当前信任度最大的损耗点。
- **远程访问/多端体验受期待但受挫**：Webapp 上线让用户兴奋，但 desktop 会话不可恢复（#139818、#145811）、Desktop 与 Webapp 房间存储分离（#145184）造成实际割裂感。
- **Windows 体验落后**：MCP discovery 启动循环、kanban 进程树清理等问题集中于 Windows，macOS/Linux 体验相对顺滑。
- **报告质量高**：大量 Issue 附带完整环境矩阵、日志取证甚至生产 forensic 分析（部分由 bot 自动归档），社区工程素养好，是项目健康度的正面信号。
- **满意度亮点**：Webapp 插件栈修复后（#145540）"checked live" 式验证获好评；impressum/报告闭环（fix PR → 验证 → 关闭）流程被认可。

## 8. 待处理积压

- [#118379](https://github.com/NouResearch/hermes-agent/issues/118379)（P1，Anthropic 计费凭据池，开放 37 天）：涉及真实账单损失，建议优先分派。
- [#9269](https://github.com/NouResearch/hermes-agent/issues/9269)（Tailscale 集成，开放 6.5 个月，👍 11）：与 Webapp 远程访问战略相关，建议维护者表态纳入或关闭。
- [#76320](https://github.com/NouResearch/hermes-agent/issues/76320)（语义分块，开放近 3 个月，带完整评测）：等待 needs-decision 决议。
- [#126190](https://github.com/NouResearch/hermes-agent/issues/126190) / [#128384](https://github.com/NouResearch/hermes-agent/issues/128384) / [#126587](https://github.com/NouResearch/hermes-agent/issues/126587)（均开放 30 天）：Kanban 调度与 cua-driver pin 卡死问题长期无响应。
- [#135872](https://github.com/NouResearch/hermes-agent/issues/135872)（computer_use 元素点击，开放 19 天）：依赖 #126587 的 pin 修复，两个 Issue 宜一并处理。
- 建议：今日新报的 multiplex 凭据作用域问题（#145857）与既有 #143364、#136204 同源，可考虑建立统一的 "multiplex isolation" 跟踪 Issue 集中治理。

---
*数据来源：NousResearch/hermes-agent GitHub，统计窗口 2026-10-27 ~ 2026-10-28。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-10-28）

## 1. 今日速览

- 过去 24 小时项目共产生 **3 条动态**（2 条 Issues + 1 条 PR），无新版本发布，无 PR 被合并。
- 今日最重要的信号是社区治理层面的：活跃分支（active fork）公告 Issue [#3417](https://github.com/sipeed/picoclaw/issues/3417) 持续获得讨论（累计 3 条评论），反映社区对官方仓库“疑似停止维护”的担忧正在发酵。
- 贡献者仍在提交功能性 PR：PR [#3452](https://github.com/sipeed/picoclaw/pull/3452) 修复 Discord 通道的严重死锁问题，但尚待合并。
- 整体活跃度处于**低位运行**状态：有零星社区贡献，但缺少官方维护者响应与代码合入，项目健康度呈现**维护者缺位风险**。

---

## 2. 版本发布

今日无新版本发布。且近期无任何 Release，与“仓库疑似无人维护”的社区感知相互印证。

---

## 3. 项目进展

今日**无 PR 合并、无 Issue 关闭**，主仓库代码无实质推进。

唯一进展信号是新增的待合并 PR：

- **PR [#3452](https://github.com/sipeed/picoclaw/pull/3452)** — `fix(discord): bump discordgo fork past the gateway handshake deadlock`（@axehomeyg）
  - 升级被锁定的 `discordgo` fork 依赖，越过 gateway 握手阶段的死锁提交（`yeongaori/discordgo-fork@e8e546f`）。详见第 5 节。

由于该 PR 尚未合并，Discord 死锁问题在主仓库上仍未修复；社区若需即时修复，需自行切换至活跃分支（见 Issue #3417）。

---

## 4. 社区热点

### 🔥 Issue [#3417](https://github.com/sipeed/picoclaw/issues/3417) — Active Fork & Continued Maintenance: afjcjsbx/picoclaw（3 条评论）

- @afjcjsbx 于 10-06 开设并公开宣布积极维护 fork `afjcjsbx/picoclaw`，10-27 仍有新评论，热度持续。
- **背后诉求**：项目仍有大量真实用户和需求，但官方仓库长期无维护动作，社区被迫自救。该 Issue 是对维护者（sipead）的公开信号——若官方不回归，社区重心可能迁移至 fork。
- **健康度提示**：这是判断项目走向的关键观察点。建议关注 fork 的 star/PR 增长是否加速。

### Issue [#3451](https://github.com/sipeed/picoclaw/issues/3451) — Android API 19 x86 支持（新开，0 评论）

- @teicoti 提议扩展 Android 4.4（API 19）在 x86_32/x86_64 架构上的兼容性，覆盖老旧电视盒、平板和 x86 单板机等场景。尚无讨论，属早期功能提案。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | **Discord 通道永久“失聪”**：bot 显示已连接但收发全无、无心跳、无日志。根因是锁定的 `discordgo` fork 存在 gateway 握手死锁（PR [#3452](https://github.com/sipeed/picoclaw/pull/3452)） | **已有 fix PR，待合并** |

该问题属于静默失败（silent failure）类缺陷，用户难以排查，实际影响面可能大于报告数量。今日无其他崩溃/回归报告。

---

## 6. 功能请求与路线图信号

- **Issue [#3451](https://github.com/sipeed/picoclaw/issues/3451)**：为旧设备（Android 4.4 电视盒、平板、x86 SBC/模拟器）提供 x86 架构支持。目前**无对应 PR**，且官方路线图缺位，短期内纳入主线的可能性低；此类兼容性扩展更适合观察活跃 fork 是否接手。
- PR #3452 的依赖升级虽为 bug fix，但也隐含对“依赖锁定策略过死”的技术债信号。

---

## 7. 用户反馈摘要

- **痛点一：项目疑似停更**。社区明确表达“仍有大量兴趣和需求”，用户不愿项目死亡（#3417），已催生自发维护的 fork。
- **痛点二：静默故障排查困难**。Discord bot “假在线”式死锁无任何日志，属于最令用户沮丧的故障模式（#3452）。
- **痛点三：老旧/低功耗硬件生态被忽视**。用户希望 PicoClaw 跑在老电视盒、平板、x86 单板机上（#3451），说明存在嵌入式/复古设备用户群。
- **正面信号**：尽管官方沉寂，外部贡献者仍愿意提交高质量 PR（含完整根因分析），说明项目技术价值仍被认可。

---

## 8. 待处理积压

| 条目 | 状态 | 提醒 |
|---|---|---|
| PR [#3452](https://github.com/sipeed/picoclaw/pull/3452)（Discord 死锁修复） | 开启 1 天，无评审 | ⚠️ 高优先级 bug fix，若长期无人合并，将加剧用户流向 fork |
| Issue [#3417](https://github.com/sipeed/picoclaw/issues/3417)（活跃 fork 公告） | 开启 22 天，官方无回应 | ⚠️ 维护者应尽快表态（回归维护 / 官方移交 / 认可 fork），避免社区分裂 |
| Issue [#3451](https://github.com/sipeed/picoclaw/issues/3451)（Android API 19 x86） | 新开，0 评论 | 早期提案，可先做可行性评估 |

**总体建议**：PicoClaw 当前最大风险不是代码质量，而是**维护者缺位**。建议密切跟踪 sipead 是否恢复合并/发布节奏；若两周内仍无响应，社区迁移至 `afjcjsbx/picoclaw` 的概率将显著上升。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-10-28）

## 1. 今日速览

NanoClaw 今日整体活跃度较低：过去 24 小时无新 Issue、无版本发布，仅 1 条 PR 处于活跃状态。项目焦点集中在 **Proton Mail 原生适配器**的拆分与合入流程上——相关 PR #4218 已按 review 要求迁移至 `channels` registry 分支，并于 10-27 更新，显示维护者与贡献者仍在积极推进邮件渠道集成。社区今日无新的 Bug 报告，稳定性面表现平稳，属于典型的“低噪声、单线程推进”日。

## 2. 版本发布

今日无新版本发布。近期亦无 Release 记录，项目可能处于持续集成迭代阶段，建议关注后续 tag 动态。

## 3. 项目进展

**今日无已合并/关闭的 PR**，但有 1 条待合并 PR 值得关注：

- **PR #4218** [OPEN] `feat(channels): add native Proton Mail adapter via Proton Mail Bridge`
  作者：@drsmk238 | 创建 2026-10-24，最近更新 2026-10-27
  链接：nanocoai/nanoclaw PR #4218
  内容：新增原生 IMAP/SMTP 适配器（`src/channels/proton-mail.ts`），通过本地 Proton Mail Bridge 连接 Proton 邮箱。该 PR 是 #3726 的适配器半部分，按 review 意见拆分至 `channels` registry 分支；原 #3726 保留 skill（`/add-proton-mail`）与 Bridge 容器配置于 `main` 分支。
  意义：这是 NanoClaw 在消息渠道（channels）生态上的实质性扩展，将使个人 AI 助手可通过 Proton Mail（注重隐私的邮件服务）收发消息，覆盖隐私敏感用户群体。PR 标签齐全（`follows-guidelines`、`kind/feature`、`area/channels`），表明贡献流程规范，处于等待维护者最终审查合并的阶段。

**整体判断**：项目向前推进幅度有限但方向明确——邮件渠道能力持续增强，架构上采用 adapter（channels registry）+ skill + 容器配置的解耦设计，工程实践健康。

## 4. 社区热点

今日无评论/反应数据，最活跃条目仍为：

- **PR #4218**（👍 0，评论数未记录）：Proton Mail 适配器，见上节。其背后的诉求是**隐私优先用户**希望在不牺牲端到端加密邮箱（Proton）的前提下，将邮件作为个人 AI 助手的交互渠道。与 #3726 的协同拆分说明贡献者与维护者之间存在多轮有效协作。

## 5. Bug 与稳定性

今日**无新增 Bug、崩溃或回归报告**。无已知问题被标记或修复。

## 6. 功能请求与路线图信号

- **Proton Mail 原生支持**（PR #4218 + #3726）：功能已基本成型，分两个 PR 有序推进。鉴于 #4218 已按 review 意见完成结构调整且最近仍有更新，**很可能在下一个合并窗口被纳入**，建议关注其合入后是否会随 `channels` registry 一起发布。
- 今日无新的功能请求 Issue，暂无其他路线图信号。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼新的用户反馈。从 PR #4218 的演进可间接看出：社区对**多样化邮件渠道（尤其是隐私保护型服务）**有真实需求，贡献者愿意投入较复杂的工程工作（本地 Bridge 容器 + IMAP/SMTP 适配）来满足这一场景。

## 8. 待处理积压

- **PR #4218**（nanocoai/nanoclaw PR #4218）：创建至今 4 天，10-27 有更新但尚未合并。建议维护者尽快完成最终 review，避免与 #3726 的拆分状态长期悬置导致 rebase 负担。
- 建议同步确认 **#3726**（skill 与 Bridge 容器部分）与 #4218 的合并顺序与依赖关系，明确发布计划。

---

**健康度小结**：今日数据量小，但信号积极——贡献者活跃、流程规范、无稳定性问题。核心关注点是 Proton Mail 双 PR 的合并落地节奏。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-10-28

## 1. 今日速览

LobsterAI 今日保持中低强度稳定活跃：过去 24 小时共有 2 条 Issue 更新（1 开 1 关）与 3 条 PR 更新（1 开 2 关），无新版本发布。维护团队持续推进桌面端体验优化，包括 macOS 打包架构修复与 cowork 大段粘贴交互改进。社区侧出现一例账号误封申诉，为今日讨论热度最高的议题。整体看项目处于“功能迭代 + 维护并行”的健康状态。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

**已关闭 PR：**

- **PR [#2948](https://github.com/netease-youdao/LobsterAI/pull/2948)**（已关闭，未合并）`fix(packaging): isolate Mac skill dependencies by target architecture`
  针对 macOS 打包流程，将 Mac skill 依赖按目标架构隔离，解决不同 CPU 架构（Intel/Apple Silicon）构建依赖混淆问题。该 PR 今日创建后即被关闭，可能是被替代方案取代或需要重新提交，建议关注后续是否有替代 PR。

- **PR [#2946](https://github.com/netease-youdao/LobsterAI/pull/2946)**（已关闭）`feat(cowork): collapse large pastes into pasted-text cards`
  本周期较重要的 UX 改进：输入框中大段粘贴内容自动转为可预览的「粘贴文本」卡片，提交时以带标签块嵌入 prompt；会话详情长消息折叠；搜索、导出、标题生成、steer 载荷全面适配，并补充了 Vitest 单测覆盖。该功能显著改善长文本输入的界面整洁度与上下文可读性。

**待合并 PR：**

- **PR [#2947](https://github.com/netease-youdao/LobsterAI/pull/2947)**（OPEN）`fix(computer-use): reuse approvals for Windows process paths`
  复用 Windows Computer Use 会话授权：当同一可执行文件先以路径方式启动、后以 `process:<path>` 方式操作窗口时，不再重复弹出授权提示。关联 [#2895](https://github.com/netease-youdao/LobsterAI/issues/2895)，属于 Agent 操作流畅度的体验修复。

**小结**：项目本周向前推进了 cowork 输入体验与 computer-use 授权机制两个方向，桌面端（尤其 macOS 构建）质量保障工作持续进行。

## 4. 社区热点

- **Issue [#2936](https://github.com/netease-youdao/LobsterAI/issues/2936)**（OPEN，5 条评论）——**今日热度第一**
  用户申诉两个账号被误封禁，声明未刷接口、未批量调用，并指出可能的误判来源：曾在本地第三方 DSH 插件（dsh-comprehensive-platform / our-free-model）中配置 LobsterAI 凭据调用有道模型服务。5 条评论说明官方或社区已有互动。该议题反映两类诉求：(1) 用户对封禁申诉渠道与透明度的需求；(2) 第三方插件生态与官方风控规则之间的灰色地带，值得官方在文档中明确“允许/禁止的凭据使用方式”。

- **Issue [#743](https://github.com/netease-youdao/LobsterAI/issues/743)**（今日关闭）
  断网恢复后发送按钮状态异常的 Bug 今日被关闭，详见下节。

## 5. Bug 与稳定性

| 级别 | 问题 | 状态 |
|---|---|---|
| 🟡 Minor | [#743](https://github.com/netease-youdao/LobsterAI/issues/743) 断网恢复后发送消息，AI 回复期间发送按钮未切换为停止按钮，用户无法中断回复（Windows 11 / v2026.3.24） | ✅ 今日已关闭（提交于 2026-03-24，历时约 7 个月修复/关闭） |
| 🟠 Medium | [#2895](https://github.com/netease-youdao/LobsterAI/issues/2895) Windows 下 Computer Use 同会话重复弹出授权提示 | 🔧 修复 PR [#2947](https://github.com/netease-youdao/LobsterAI/pull/2947) 待合并 |
| 🔴 服务侧 | [#2936](https://github.com/netease-youdao/LobsterAI/issues/2936) 账号疑似因第三方插件调用被误封 | 🕐 处理中，等待官方核实申诉 |

今日无新报告的崩溃或回归问题。

## 6. 功能请求与路线图信号

- **大段粘贴卡片化**（PR #2946 已落地）：长文本输入体验是用户明确痛点方向，折叠 + 卡片预览方案已实现，预计随下个版本发布。
- **Computer Use 授权复用**（PR #2947）：若合并，将减少 Windows Agent 操作的重复授权打断，与 #2895 一起构成 computer-use 稳定性路线的一部分。
- **隐含信号**：#2936 申诉可能推动官方明确第三方插件使用凭据的政策与更完善的申诉流程，建议纳入运营侧路线图。

## 7. 用户反馈摘要

- **痛点：账号风控误伤普通用户** —— #2936 用户强调“未恶意使用却被封”，且揭示了通过第三方插件正常调用模型服务即触发风控的场景，说明部分重度用户存在自定义工作流需求。
- **痛点：网络异常下的交互状态** —— #743 反映弱网场景下 UI 状态机不健壮，用户失去中断回复的控制权，属于长尾但影响信任感的细节。
- **痛点：重复授权打断 Agent 流程** —— #2895 相关反馈表明 Windows 用户在使用 computer-use 功能时授权弹窗过于频繁。
- **正面信号**：社区提交的 PR（#2946、#2947）质量较高、附带完整单测，说明项目吸引了深度参与的贡献者，cowork 功能持续演进。

## 8. 待处理积压

- **PR [#2947](https://github.com/netease-youdao/LobsterAI/pull/2947)**（OPEN）：computer-use 授权复用修复，今日创建，待维护者 review 合并，建议优先处理以配合 #2895 收敛。
- **Issue [#2936](https://github.com/netease-youdao/LobsterAI/issues/2936)**：账号申诉已累积 5 条评论且涉及风控公信力，建议官方尽快给出结论性回复，并考虑发布第三方插件使用凭据的官方政策说明。
- **PR [#2948](https://github.com/netease-youdao/LobsterAI/pull/2948)**：今日创建即关闭，需确认 macOS 打包依赖隔离问题是否已有替代方案，避免构建质量问题悬置。

---
*数据来源：GitHub API（netease-youdao/LobsterAI），统计窗口为 2026-10-27 至 2026-10-28。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-10-28）

> 数据来源：github.com/agentscope-ai/CoPaw（包名 QwenPaw） | 统计窗口：过去 24 小时

---

## 1. 今日速览

CoPaw 今日保持高度活跃：Issues 更新 36 条（新开/活跃 16、关闭 20），PR 更新 50 条（待合并 36、已合并/关闭 14），并发布了新版本 **v2.3.0-beta.1**。Issue 关闭数（20）超过新开数（16），表明维护团队处于“净消化”状态，历史积压持续清偿。当前 PR 队列中 36 条待合并，包含多条 XXXL 级架构重构（channels/agents 插件化、实时语音、社区集成），显示项目正经历一轮大规模架构演进。整体健康度：**良好，处于 beta 周期高强度迭代阶段**。

---

## 2. 版本发布

### v2.3.0-beta.1（今日发布）

已知变更：
- **fix(console)**: 恢复交互式 HTML 预览（[PR #8245](https://github.com/agentscope-ai/QwenPaw/pull/8245)）
- **feat(tools)**: Tavily API key 支持通过 credential store 可选配置（#8174 / [PR #8204](https://github.com/agentscope-ai/QwenPaw/pull/8204)）
- **fix(plugin)**: 对齐相关修复（release notes 截断）

⚠️ 迁移提示：这是 **beta 版本**，结合待合并的 channels/agents 插件化大 PR（#8187、#8426）判断，v2.3.0 正式版可能包含较大的架构性变更（插件化、子进程隔离）。生产环境建议停留在 2.2.2.post1，等待 beta 验证。

---

## 3. 项目进展

今日关闭/合并的重要 PR（14 条中精选）：

| PR | 内容 | 意义 |
|---|---|---|
| [#8124](https://github.com/agentscope-ai/QwenPaw/pull/8124) | 内容审查错误（`data_inspection_failed`）路由至 fallback 模型 | 提升 Ali 兼容网关下的容错连续性 |
| [#8452](https://github.com/agentscope-ai/QwenPaw/pull/8452) | Console 浏览器可用性修复（移动端模型入口、弹窗焦点/Escape、按钮点击区域） | 前端体验系统性打磨 |
| [#8451](https://github.com/agentscope-ai/QwenPaw/pull/8451) | 媒体预览错误卡片压缩展示（含无障碍/键盘导航/减少动效） | 无障碍设计加分项 |
| [#8448](https://github.com/agentscope-ai/QwenPaw/pull/8448) | Agent skill 选择限制在创建阶段 | 简化编辑流程，降低误操作 |
| [#8458](https://github.com/agentscope-ai/QwenPaw/pull/8458) | CSP 允许内嵌 data: 字体（KaTeX 数学字体） | 修复数学渲染 |

**整体判断**：今日合并以 Console/前端与 provider 容错为主，属打磨性进展；真正的架构跃迁（插件化、语音、社区功能）仍在 36 条待合并队列中，预计构成 v2.3.0 正式版主体。

---

## 4. 社区热点

1. **#1536（5 评论，已关闭）** [接入模型能否用 OAuth 登录 Codex](https://github.com/agentscope-ai/QwenPaw/issues/1536) —— 与已关闭的 [#4124](https://github.com/agentscope-ai/QwenPaw/issues/4124)（OAuth 登录 OpenAI/Codex 特性请求）同源。**OAuth 接入 Codex 是长期高频诉求**，两项均关闭暗示官方已有计划或已有实现路径。
2. **#8405（5 评论，已关闭）** [MCP 配置弹窗无法关闭](https://github.com/agentscope-ai/QwenPaw/issues/8405) —— http/sse 传输方式下弹窗卡死，前端交互 bug，已快速修复关闭，响应速度值得肯定。
3. **#2839（4 评论，已关闭）** [llama.cpp + qwen3.5 工具调用解析失败](https://github.com/agentscope-ai/QwenPaw/issues/2839) —— 本地模型兼容性诉求。注意今日 [PR #8463](https://github.com/agentscope-ai/QwenPaw/pull/8463) 正在集成本地 Blink 决策模型，本地模型一等公民化是明确方向。
4. **#7935（4 评论，已关闭）** [LLM 超时后进程永不自动恢复](https://github.com/agentscope-ai/QwenPaw/issues/7935) —— 长稳性问题（标记 Cannot Reproduce 后关闭），关注是否真正解决。
5. **Firecrawl 提供商合作** [#8199](https://github.com/agentscope-ai/QwenPaw/issues/8199) —— Firecrawl 团队官方主动提出维护 web_search provider 并已关闭，第三方生态共建信号积极。

---

## 5. Bug 与稳定性（按严重程度）

**🔴 高（会话中断/数据风险）**
- [#8312](https://github.com/agentscope-ai/QwenPaw/issues/8312) 上下文压缩失败导致任务中断（252565 > 251904 tokens）。与 [#8417](https://github.com/agentscope-ai/QwenPaw/issues/8417)（压缩摘要 400，thinking 参数兼容问题）同族 → **已有 fix PR：[#8436](https://github.com/agentscope-ai/QwenPaw/pull/8436)**（honor declared thinking disable wire，首次贡献者，Under Review）。
- [#7966](https://github.com/agentscope-ai/QwenPaw/issues/7966) 切换 provider 后历史中 file:// 媒体 URL 导致会话永久损坏（长期未解，自 9/24 开放至今）。
- [#8290](https://github.com/agentscope-ai/QwenPaw/issues/8290)（已关闭）媒体分类器漏判两种拒绝格式导致会话 wedge —— 与 [#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034)（请求级 inline media 上限，XL，Under Review）相关，**fix 在途未合并**。

**🟡 中（功能正确性）**
- [#8415](https://github.com/agentscope-ai/QwenPaw/issues/8415)（已关闭）edit_file 破坏 CRLF/编码 → **已有 fix PR：[#8433](https://github.com/agentscope-ai/QwenPaw/pull/8433)**（Open）。
- [#8361](https://github.com/agentscope-ai/QwenPaw/issues/8361) 自动记忆搜索重复调用后无法正常回复 → **已有 fix PR：[#8457](https://github.com/agentscope-ai/QwenPaw/pull/8457)**（将自动 recall 改为系统参考上下文）。
- [#8424](https://github.com/agentscope-ai/QwenPaw/issues/8424) MCP 404 + JSON-RPC -32601 未回退 legacy 握手，老协议服务器无法接入（Open，无 fix PR）。
- [#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412) governance/audit.db 按 agent 停止记录审计事件 —— 审计合规风险，无 fix PR。
- [#8413](https://github.com/agentscope-ai/QwenPaw/issues/8413) self-kill 误拦截用户自有进程的 `kill $PID`。

**🟢 低**
- [#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406) QQ channel enabled 标志被静默重置；[#8306](https://github.com/agentscope-ai/QwenPaw/issues/8306) 原子写拒绝合法长文件名；[#8265](https://github.com/agentscope-ai/QwenPaw/issues/8265) distro 补丁版 Python 上插件热装失败。

**模式观察**：上下文压缩（compaction）相关 bug 是当前最集中的稳定性 cluster（#8312、#8417、#5856 均涉及），是 v2.3.x 应优先攻克的领域。

---

## 6. 功能请求与路线图信号

| 诉求 | Issue | 对应在途 PR | 纳入可能性 |
|---|---|---|---|
| 待审批消息浏览器/OS 级推送 | [#8460](https://github.com/agentscope-ai/QwenPaw/issues/8460)、[#8459](https://github.com/agentscope-ai/QwenPaw/issues/8469)（BorisPolonsky 今日连发） | — | Console 持续投入中，大概率排期 |
| 本地模型支持决策工作流（工具审查/压缩） | 多个本地模型 issue | [#8463](https://github.com/agentscope-ai/QwenPaw/pull/8463)（Blink-27B，今日提交） | 高 |
| 实时语音对话 | — | [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785)（XXXL，活跃） | v2.3+ 重点特性 |
| Linux 桌面原生包（deb/AppImage） | 长期诉求 | [#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444)（今日活跃） | 高 |
| 模型页 Quick Add | #4036 | [#8434](https://github.com/agentscope-ai/QwenPaw/pull/8434) | 高 |
| Firecrawl 搜索 provider | [#8199](https://github.com/agentscope-ai/QwenPaw/issues/8199)（已关闭） | — | 已接受方向 |
| OAuth 登录 Codex | #4124 / #1536（均已关闭） | — | 状态不明，值得官方澄清 |

---

## 7. 用户反馈摘要

- **痛点集中在长会话/长期运行场景**：上下文压缩失败、超时后无法自愈、媒体块 wedge、AnyIO 线程耗尽（#8279）——重度用户（Docker 长驻部署）受影响最大。
- **多 provider 兼容性摩擦明显**：火山引擎 glm-5.3-flash、kimi-code、阿里网关、llama.cpp 各有兼容问题，compat 层“一刀切”下发参数是反复出现的批评点。
- **MCP 生态接入体验**：legacy 协议服务器回退失败（#8424）、DBX 422 识别失败（#8047）说明 MCP 兼容矩阵仍需加宽。
- **正面信号**：issue 响应快（#8405 从报告到关闭仅数天）；Windows 安装器（#8455）、桌面日志轮转（#8185）等桌面端问题被认真对待；社区出现首位贡献者 fix PR（#8436）并被置入 Review。

---

## 8. 待处理积压（提醒维护者关注）

- [#7966](https://github.com/agentscope-ai/QwenPaw/issues/7966)（9/24 开放）：provider 切换后 file:// 媒体 URL 永久损坏会话 —— 无任何在途修复。
- [#8312](https://github.com/agentscope-ai/QwenPaw/issues/8312)（10/18 开放）：上下文控制失效致任务中断 —— 关联 PR #8436 需加速 review。
- [#8424](https://github.com/agentscope-ai/QwenPaw/issues/8424)、[#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412)、[#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406)：均为近一周新开且无 fix PR。
- **大型 PR 队列风险**：#8187、#8426（XXXL 插件化）、#7785（语音）、#7903（社区）、#8034 长期 Open，review 带宽可能是当前最大瓶颈，建议明确里程碑归属避免积压变质。
- [#7935](https://github.com/agentscope-ai/QwenPaw/issues/7935) 以 Cannot Reproduce 关闭，若用户复现应引导重开并关联超时自愈议题。

---

*本报告基于过去 24 小时 GitHub 公开数据自动聚合，观点仅供社区参考。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报（2026-10-28）

## 1. 今日速览

今日 EasyClaw 仓库整体活跃度处于**低位平稳**状态：过去 24 小时内 Issues 更新 0 条、PR 更新 0 条，社区互动几乎为零。唯一的显著事件是发布了新版本 **v1.9.40（TK Copilot v1.9.40）**，表明项目仍处于持续迭代节奏中，由维护者主导的功能演进并未停歇。综合来看，项目呈现“低讨论、稳发布”的典型工具型项目特征，开发推进依赖核心维护者而非社区贡献。

## 2. 版本发布

### v1.9.40: TK Copilot v1.9.40
- **链接**：[github.com/gaoyangz77/easyclaw/releases](https://github.com/gaoyangz77/easyclaw/releases)

**What's New**
- **客服会话工作区支持按需查看买家订单**：面向电商客服场景的功能增强，客服人员在会话中可即时调取买家订单信息，减少切换成本，提升响应效率。
- **修复商务拓展设备的店铺上下文保留问题**：属于 Bug Fix，解决商务拓展（BD）设备上店铺上下文丢失/不保留的问题，保障多设备使用场景的一致性。

**破坏性变更**：本次 Release Notes 未声明任何破坏性变更或 API 变动，预计为常规迭代，升级风险低。
**迁移注意事项**：macOS 用户升级后若出现 **"'RivonClaw' is damaged and can't be opened"** 提示，需按官方安装说明处理（通常涉及移除 quarantine 属性），详见 Release 页完整说明。

## 3. 项目进展

- 今日无 PR 合并或关闭记录。结合 v1.9.40 的发布推断，相关功能（买家订单按需查看、店铺上下文修复）已在版本发布前完成合入。项目以小幅高频迭代（1.9.x 补丁级版本）方式推进，单次版本改动点少而聚焦，发布节奏健康。

## 4. 社区热点

- 今日无活跃 Issue 或 PR 讨论，无社区热点可分析。
- 值得关注的信号：连续的 Issue/PR 零活跃可能意味着用户反馈渠道不够畅通，或用户主要通过其他渠道（如用户群）反馈，建议维护者关注 GitHub 社区运营。

## 5. Bug 与稳定性

- 今日无新报告的 Bug、崩溃或回归问题。
- v1.9.40 中已修复的稳定性问题：商务拓展设备的店铺上下文保留（严重程度中等，影响 BD 用户工作流，已随本版本修复）。

## 6. 功能请求与路线图信号

- 今日无新功能请求。
- 从发布轨迹可推断的路线图信号：项目持续深耕**电商客服/商务场景**（买家订单集成、店铺上下文），下一版本可能继续围绕客服工作区的信息聚合能力（如物流、售后状态查看等方向）演进——此为基于版本内容的推测，无官方路线图佐证。

## 7. 用户反馈摘要

- 今日无 Issue 评论可提炼。间接信号：Release Notes 同时提供中英文说明并覆盖 macOS 安装故障排查，表明项目存在国际化用户群，且 macOS “应用已损坏” 是常见用户痛点（已在官方文档中置顶说明）。

## 8. 待处理积压

- 今日数据中无长期未响应的 Issue 或 PR（当前窗口内 Issue/PR 均为 0 条更新），无积压提醒事项。

---

**健康度小结**：发布节奏稳定 ✅ ｜ 社区互动低迷 ⚠️ ｜ 无积压问题 ✅ ｜ 无未修复 Bug ✅

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*