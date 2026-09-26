# OpenClaw 生态日报 2026-09-26

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-26 04:05 UTC

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

# OpenClaw 项目日报 — 2026-09-26

## 1. 今日速览

OpenClaw 今日保持高度活跃：过去 24 小时 Issues 更新 500 条（新开/活跃 405，关闭 95），PR 更新 500 条（待合并 408，合并/关闭 92），无新版本发布。社区核心关注点高度集中：**2026.9.5 → 2026.9.6 升级引入的 prepared-model-catalog worker 系列问题**（内存泄漏、CPU 空转、启动挂起）持续发酵，多个 P0 issue 待修。与此同时，核心维护者 @steipete 今日提交了大量高质量 PR，覆盖网关性能、目录 worker 内存修复（#158323）、并发会话稳定性等方向，修复节奏明显加快。整体判断：项目处于**高活跃 + 高压力**状态，9.7 修复版本（#157531 tracker）正在密集准备中。

---

## 2. 版本发布

今日无新版本发布。**2026.9.7 Fixes Tracker**（[#157531](https://github.com/openclaw/openclaw/issues/157531)）显示准备源已包含 18/21 个既定 P1 修复候选，涵盖隐私/安全等方向，下个版本发布在即。

---

## 3. 项目进展

今日 PR 活动以 @steipete 为主力，多个关键修复已进入 "ready for maintainer look" 状态：

- **[#158323](https://github.com/openclaw/openclaw/pull/158323)** `fix(catalog): release per-turn worker state and attribute worker memory`（P0）— 直接修复 #157842 报告的 catalog worker 每轮 ~77MB 内存泄漏问题，并增强内存压力诊断。**这是 9.7 最关键的修复之一。**
- **[#158467](https://github.com/openclaw/openclaw/pull/158467)** — worker 失败/Gateway 重启恢复后允许继续对话，修复会话不可用问题。
- **[#158570](https://github.com/openclaw/openclaw/pull/158570)** `perf(gateway): avoid chat stalls during WAL maintenance` — WAL 检查点不再阻塞 Control UI。
- **[#158489](https://github.com/openclaw/openclaw/pull/158489)**（已关闭）— 长流式回复不再拖垮其他会话。
- **[#158567](https://github.com/openclaw/openclaw/pull/158567)** — 新增 `gateway.uploads.enabled` 开关，允许运营商禁用客户端文件/图片上传。
- **[#158582](https://github.com/openclaw/openclaw/pull/158582)** — Android 端供应商配置与模型浏览体验重构。
- **[#158120](https://github.com/openclaw/openclaw/pull/158120)** / **[#158142](https://github.com/openclaw/openclaw/pull/158142)**（@obviyus）— 所有者可在聊天中直接让 agent 修改密钥/配置/技能；权限变更强制人工审批。
- 大量 deslop 重构（#158514、#158598、#158628）与性能优化（#158589、#158591、#158630）持续推进代码质量。

**评估：** 今日进展实质性较强，尤其 catalog worker 内存修复和多项 Gateway 并发性能改进，为 9.7 发布铺平道路。

---

## 4. 社区热点

1. **[#153257](https://github.com/openclaw/openclaw/issues/153257)**（35 评论）— 用户详述 2026.9.5 将稳定环境变成“8 小时故障恢复会话”，情绪强烈（"genuinely regret upgrading"）。诉求：**升级路径的可靠性已严重损害用户信任**。
2. **[#155753](https://github.com/openclaw/openclaw/issues/155753)**（30 评论，已关闭）— catalog worker 单核 CPU 空转问题被定位并确认主分支不可复现，是社区协作定位的典型案例（关联 #154276 / #153422）。
3. **[#157842](https://github.com/openclaw/openclaw/issues/157842)**（15 评论）— 9.6 catalog worker 每轮泄漏 ~77MB，已有修复 PR #158323。
4. **[#69208](https://github.com/openclaw/openclaw/issues/69208)**（16 评论，maintainer umbrella）— 跨渠道的转录重复/重放/上下文组装 bug 汇总，长期结构性问题。
5. **[#157531](https://github.com/openclaw/openclaw/issues/157531)**（13 评论）— 9.7 修复追踪器，社区围绕哪些 P1 应纳入下版展开讨论。

---

## 5. Bug 与稳定性（按严重度）

**P0 / 紧急：**

| Issue | 问题 | Fix PR |
|---|---|---|
| [#157842](https://github.com/openclaw/openclaw/issues/157842) | 9.6 catalog worker 内存泄漏 ~77MB/轮，超 512MB 限制 | ✅ #158323 |
| [#157107](https://github.com/openclaw/openclaw/issues/157107)（已关闭） | 9.6 每 ~6s 重建 plugin generation，agent run 永不被接纳 | 已处理 |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | Gateway 启动挂起 ~17 分钟后超时失败 | ❌ 无 fix PR |
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 9.5 升级后崩溃循环 + 会话状态损坏 | ❌ 需人工复现 |
| [#156712](https://github.com/openclaw/openclaw/issues/156712) | `openclaw triage` 子进程不退出，持有 gateway-lifecycle 锁 | ❌ |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) / [#157812](https://github.com/openclaw/openclaw/issues/157812) / [#158231](https://github.com/openclaw/openclaw/issues/158231) | 自动更新多模式失败（global install swap / Windows managed-service-preflight） | ❌ |
| [#152804](https://github.com/openclaw/openclaw/issues/152804) | 9.5 回归：minimax-portal 丢失模型目录 | ❌ |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | Gateway 启动时间随插件数量线性增长 | ❌ |

**P1 / 重要：**
- [#144809](https://github.com/openclaw/openclaw/issues/144809) — 长回合完整回复丢失（claude-cli），无 fix PR。
- [#137332](https://github.com/openclaw/openclaw/issues/137332) — 混合终端 settle 批次永久重试，无 fix PR。
- [#144291](https://github.com/openclaw/openclaw/issues/144291) — 配置热重载中止所有进行中的 agent 回合，无 fix PR。
- [#137177](https://github.com/openclaw/openclaw/issues/137177) — 内置 WeCom 插件无法安装。

**P2 / 性能回归：**
- [#154104](https://github.com/openclaw/openclaw/issues/154104) — Matrix E2EE 空闲时 ~50% CPU + 52MB/min 磁盘写入。
- [#140129](https://github.com/openclaw/openclaw/issues/140129) — Anthropic 缓存失效，长会话每轮重写 377k+ token。

**观察：** P0 中仍有 6+ 个无修复 PR，且多个被标记 `clawsweeper:manual-only`，维护者带宽是瓶颈。

---

## 6. 功能请求与路线图信号

- **安全/权限方向已落地中：** #158120、#158142 显示"聊天内配置/密钥管理 + 人工审批"已在实现，预计进入 9.7。
- **[#50093](https://github.com/openclaw/openclaw/issues/50093) WhatsApp 断线消息回补** / **[#55792](https://github.com/openclaw/openclaw/issues/55792) 重启后消息补齐** — 长期高需求，均卡在 needs-product-decision。
- **[#72591](https://github.com/openclaw/openclaw/issues/72591) 每 agent MCP server 作用域隔离** — 多 agent 部署痛点（12 agents × 10 servers = 120 进程）。
- **[#67413](https://github.com/openclaw/openclaw/issues/67413) 按 agent 的 dreaming 配置**（5 👍）— 防止 OOM。
- **[#45508](https://github.com/openclaw/openclaw/issues/45508) webchat 自托管 STT/TTS**、[#66252](https://github.com/openclaw/openclaw/issues/66252) 每 agent TTS 覆盖。
- **[#14785](https://github.com/openclaw/openclaw/issues/14785) 工具 schema token 开销优化**（~3500 tok/session）— 有 source-repro 标签，可能优先。

多数功能请求停留在 needs-product-decision 状态，路线图信号主要来自 #157531 tracker 的 P1 列表而非公开 roadmap。

---

## 7. 用户反馈摘要

- **升级即风险：** 大量用户明确表达“升级恐惧”，升级失败（#156112、#157812）与升级后回归（#153257、#152804）交织，部分用户被迫手动 npm install 并 pin 旧版本。
- **生产可用性受损：** Windows 用户、多 agent（28-agent）部署、插件重度用户是受影响最重的群体；watchdog 重启、OOM、启动 17 分钟挂起等描述表明不少用户在准生产环境运行。
- **认可点：** 社区 bug 报告质量极高（含完整 heap 分析、CPU profile），说明核心用户群技术能力强、参与意愿高；9.6 引入的 worker 架构问题在 24 小时内被社区精确定位。
- **痛点主题词：** 消息丢失（message-loss 标签高频）、会话状态损坏、长回合回复被丢弃、token/内存成本。

---

## 8. 待处理积压

- **[#69208](https://github.com/openclaw/openclaw/issues/69208)**（4 月开，maintainer umbrella）— 跨渠道转录重复类 bug 汇总，仍待产品决策。
- **[#50093](https://github.com/openclaw/openclaw/issues/50093)**（3 月开，stale）— WhatsApp 消息回补，14 评论，长期无进展。
- **[#144291](https://github.com/openclaw/openclaw/issues/144291)** / **[#144809](https://github.com/openclaw/openclaw/issues/144809)**（9 月初）— 热重载中止回合、长回合回复丢失，均无 fix PR，P1 级别。
- **[#140129](https://github.com/openclaw/openclaw/issues/140129)** — Anthropic 缓存失效直接推高用户 API 成本，应提级处理。
- **[#118748](https://github.com/openclaw/openclaw/pull/118748)**（8 月开，stale）— Google Live PCM 采样率防 OOM，等待 proof 近两月。

**建议：** 维护者优先闭环 9.7 tracker 中剩余 3 个 P1 候选，并集中处理更新器（updater）失败系列问题——这是当前用户信任流失最快的环节。

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告
**数据日期：2026-09-26**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**“架构深化期”**：头部项目（OpenClaw、Zeroclaw、Hermes、NanoClaw）普遍从功能堆叠转向稳定性、安全性与运维能力建设。三个共性矛盾突出：**升级/更新链路可靠性**（几乎所有高活跃项目都在修 updater）、**上下文压缩可感知性**（用户要求“无感压缩但历史可回溯”）、**多 agent 部署的资源治理**。同时，社区自愈能力普遍较强——大量 issue 由报告者当天提交 fix PR，但**维护者评审带宽是全生态最普遍的瓶颈**（多个项目待合并 PR 达 40+）。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 待合并 PR | Release | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（+405/-95） | 500（+408/-92） | 408 | ❌ | ⚠️ 高活跃高压力：9.6 worker 架构回归发酵，P0 有 6+ 无 fix PR |
| **Zeroclaw** | 50（+37/-13） | 50（+42/-8） | 42 | ❌ | ✅ 良好：v0.9.0 冲刺，安全栈（OIDC）主线清晰；S0 安全 issue 待修 |
| **Hermes Agent** | 50（+49/-1） | 50（+46/-4） | 46 | ❌ | ⚠️ 回归密集：Windows PM 迁移问题簇，issue 关闭率仅 2% |
| **NanoClaw** | 5 | 50（+47/-3） | 47 | ❌ | ⚠️ 产出强合并弱：单日 10+ 修复 PR vs 合并 3 |
| **NanoBot** | 4 | 14（+12/-2） | 12 | ❌（v0.3.5, 9/16） | ✅ 健康：中等节奏，社区 PR 闭环快，积压可控 |
| **CoPaw** | 10（关闭 0） | 13（+13/-0） | 13 | ❌ | ⚠️ 势头好但合并吞吐为零；6 个首贡 PR 显示社区吸引力强 |
| **LobsterAI** | 0 | 7（+6/-1） | 6 | ❌ | ⚠️ 低位：5 个 PR 积压 6 个月标记 stale，评审停滞 |
| **PicoClaw** | 2 | 4（+4/-0） | 4 | ❌ | ⚠️ 维护者响应是短板：CLA 流程阻塞 PR，DeltaChat PR 滞留 3 个月 |
| **NullClaw** | 0 | 1 | 1 | ❌ | ➖ 平稳维护期：单一安全审批修复 PR |
| **IronClaw** | 0 | 2 | 2 | ❌ | ➖ 低活跃：零合并零讨论，XL 新贡献者 PR 待审 |
| **EasyClaw** | 0 | 0 | 0 | ✅ v1.9.23 | ➖ 单人驱动：持续交付但社区互动为零 |
| TinyClaw / Moltis / ZeptoClaw | 0 | 0 | 0 | ❌ | 🔴 无活动 |

---

## 3. OpenClaw 在生态中的定位

**规模领先**：单日 500 issue + 500 PR 更新，是第二梯队（Zeroclaw/Hermes，各 50）的 **10 倍量级**，社区规模和参与深度（高质量 heap 分析、CPU profile 级 bug 报告）全生态最强。

**优势**：
- 修复速度：9.6 worker 泄漏（~77MB/轮）24 小时内被社区精确定位并有修复 PR（#158323）
- 核心维护者 @steipete 单日多条高质量 PR，方向覆盖性能、内存、并发
- 9.7 tracker（18/21 P1 就绪）显示发布管理已流程化

**劣势/风险**：
- **升级信任危机**是全生态最严重的——#153257（"genuinely regret upgrading"）情绪强度超过任何同类项目；updater 失败系列（#156112/#157812/#158231）均无 fix PR
- P0 积压（启动挂起 17 分钟、会话状态损坏）显示大架构变更（prepared-model-catalog worker）的回归治理跟不上迭代速度

**技术路线差异**：OpenClaw 走 Gateway + worker 架构的“全功能个人助理”路线；Zeroclaw 是 Rust + WASM 插件化 + OIDC 身份安全栈的“企业级安全基座”路线；Hermes 侧重 Desktop/PM 托管运行时；NanoClaw 聚焦轻量 agent 组（groups/containers）。OpenClaw 在功能广度和社区规模上领先，但在架构安全性（对比 Zeroclaw 的 S0 级安全治理）和轻量化（对比 NanoClaw）上无优势。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **升级/更新链路可靠性** | OpenClaw、Hermes、NanoClaw、LobsterAI | updater 中断、更新后无法启动、更新杀死活跃会话（Hermes #122656、OpenClaw #153257、NanoClaw #3906）——跨项目最大共性痛点 |
| **上下文压缩体验** | NanoBot、CoPaw、OpenClaw | 压缩应无感（NanoBot #5903 “幽灵消息”）、预算计算不可靠（CoPaw #7628）、压缩后历史必须可回溯（CoPaw #7884） |
| **Provider 生态扩展与降本** | PicoClaw、NanoBot、Zeroclaw、LobsterAI、CoPaw | Cheaper Inference 网关在 **3 个项目**同日出现 PR；Requesty/OpenRouter 类聚合网关持续接入；prompt cache 失效修复（NanoClaw #3917、OpenClaw #140129）反映真实成本敏感 |
| **MCP 工具集成可靠性** | NanoBot、OpenClaw、CoPaw、PicoClaw | tools/list 分页丢失（NanoBot #5916）、MCP server 进程爆炸（OpenClaw #72591 每 agent 作用域隔离）、工具结果精简（Zeroclaw #10397） |
| **多 agent 资源治理** | Zeroclaw、OpenClaw | 主机级准入控制 RFC（Zeroclaw #10970）、per-agent dreaming 防OOM（OpenClaw #67413）、agent 组容器生命周期（NanoClaw #3909） |
| **权限与审批安全** | NullClaw、Zeroclaw、OpenClaw、Hermes | 高风险命令人工审批失效（NullClaw #900）、聊天内密钥管理+强制审批（OpenClaw #158120）、RPC 认证主体（Zeroclaw） |

---

## 5. 差异化定位分析

| 维度 | 分层 |
|---|---|
| **功能侧重** | 全功能个人助理（OpenClaw：多渠道+gateway+技能体系）；安全基座/SOP 控制面（Zeroclaw）；桌面常驻+PM 运行时（Hermes）；轻量 agent 组编排（NanoClaw）；渠道/协议覆盖广度（NanoBot：Feishu/QQ/Email/WhatsApp）；垂直业务工具（EasyClaw：联盟营销数据分析） |
| **目标用户** | 准生产自托管运维者（OpenClaw、Zeroclaw）；桌面个人用户（Hermes）；企业邮箱/IM 部署（NanoBot 的 Email OAuth 系列）；本地模型用户（NanoClaw #3646、CoPaw #7986 的 llama.cpp/vLLM 适配）；中文生态用户（CoPaw 的 QQ/飞书、NanoBot 的 Feishu/Napcat） |
| **技术架构** | Node 系 gateway+worker（OpenClaw、NanoClaw）；Python（Hermes 的 venv/ABI 问题即源于此）；Rust+WASM 插件（Zeroclaw，“Everything is a plugin"）；沙箱化 AI 代码框架（IronClaw 的知识图谱）；浏览器 SDK（CoPaw 的 Playwright 集成） |

---

## 6. 社区热度与成熟度分层

- **快速迭代/高压修复层**：OpenClaw（9.7 冲刺）、Hermes（PM 迁移回归密集期）、NanoClaw（2.4.0 后收口）——特征：issue 输入远超关闭吞吐
- **健康迭代层**：Zeroclaw（v0.9.0 里程碑有序推进）、NanoBot（v0.3.5 后功能积累）——合并/决策节奏与输入基本匹配
- **成长上升层**：CoPaw（首贡 PR 单日 6 个，社区吸引力强但零合并是隐患）
- **质量巩固/低活跃层**：LobsterAI、PicoClaw（stale 积压暴露治理松懈）、NullClaw、IronClaw、EasyClaw（单人驱动）
- **静默层**：TinyClaw、Moltis、ZeptoClaw

---

## 7. 值得关注的趋势信号

1. **“升级恐惧”成为行业级信任问题**：用户被迫 pin 旧版本、手动安装，说明 agent 常驻化（gateway 长期运行+会话状态）使 updater 从“便利功能”变为“生产关键路径”。**建议：agent 项目应将更新器纳入核心测试范围，支持原子回滚。**

2. **多模型路由/智能调度是下一个竞争点**：Hermes 的逐轮模型路由（#123388）、动态 profile 路由（#72942）与全生态的 provider 聚合接入潮同向。**成本敏感（Cheaper Inference 三项目同日提交、prompt cache 修复高频）+ 多订阅凭据池（Hermes #118379 计费回滚 bug）表明重度用户已在多 provider 生产环境运行。**

3. **安全与权限模型从可选变必选**：聊天内配置修改+人工审批（OpenClaw）、OIDC 认证主体（Zeroclaw）、命令分级审批（NullClaw）、agent 权限语义（NanoClaw #3911 重启错组）。**监督式自主（supervised autonomy）是人机协同的标准形态。**

4. **上下文压缩成为用户信任的分水岭**：三个项目独立出现“压缩后历史不可见/幽灵消息”抱怨。**正确设计：压缩对用户透明，但历史必须可完整回溯（分页/回滚），这是低成本高回报的差异化机会。**

5. **评审带宽普遍成为生态瓶颈**：OpenClaw 408、NanoClaw 47、Hermes 46 条待合并 PR，多个项目出现贡献者 PR 滞留数月（LobsterAI 6 个月、PicoClaw 3 个月）。**对开发者的启示：选择贡献项目时，“维护者响应速度”比 star 数更能预测贡献体验；对维护者的启示：自动化 triage（NanoClaw 的 release-note 强制化 CI 值得借鉴）。**

6. **中文/IM 渠道生态独立成势**：CoPaw（QQ/fnOS）、NanoBot（Feishu/Napcat/Email）、PicoClaw（飞书）形成区别于欧美项目的渠道矩阵，QQ 重投、飞书配置迁移等本土化问题是独特需求来源。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-09-26

## 1. 今日速览

NanoBot 今日整体保持中等偏上的活跃度：过去 24 小时共 18 条更新（Issues 4 条、PRs 14 条），其中新开/活跃 Issue 2 条、待合并 PR 12 条、已合并/关闭 PR 2 条。社区贡献热度持续，多个外部贡献者（@tilladam、@Lesereingrape、@KailBug、@aiapienthusiast 等）提交了覆盖 Channel、MCP、Provider、WebUI 等模块的 PR，生态扩展迹象明显。今日无新版本发布，但近期 v0.3.5 刚发布（9 月 16 日），当前处于版本后的修复与功能积累期。整体看，项目处于健康的迭代节奏中，但待合并 PR 积压较多（12 条），需维护者加大审阅力度。

## 2. 版本发布

今日无新版本发布。最新版本仍为 [v0.3.5](https://github.com/HKUDS/nanobot/releases/tag/v0.3.5)（发布公告 Issue [#5788](https://github.com/HKUDS/nanobot/issues/5788) 已关闭）。

## 3. 项目进展

今日关闭/合并的 PR 共 2 条：

- **[#5912](https://github.com/HKUDS/nanobot/pull/5912)** fix(webui): 保留 composer 草稿（已关闭）— 切换会话或刷新页面不再丢失未发送的输入内容，草稿（含 @mentions、引用上下文）从 localStorage 恢复。对应的 Issue [#5910](https://github.com/HKUDS/nanobot/issues/5910) 同日关闭，形成完整的“需求 → 实现 → 关闭”闭环，响应速度值得肯定。
- **[#5907](https://github.com/HKUDS/nanobot/pull/5907)** test: 合并冗余测试覆盖（已关闭）— 跨 34 个文件整合 Python 与 WebUI 测试，净删除 703 行，参数化 46 个测试组并保留全部 171 个原始断言，生产行为零改动。这是一次有价值的测试套件瘦身，将缩短 CI 时长。

整体进展：WebUI 易用性（草稿保留）与工程质量（测试精简）两个方向均有实质性推进。

## 4. 社区热点

- **[#5903](https://github.com/HKUDS/nanobot/issues/5903)**（OPEN，2 条评论）— Feishu 渠道在空闲自动压缩（idle compaction）后，将内部会话检查点标记 `"Continue the active task..."` 以普通消息形式发送给用户。这是今日讨论最多的 Issue，涉及内部消息被持久化时 `_hidden` 标记失效的问题，直接影响终端用户体验。值得注意的是，PR [#5780](https://github.com/HKUDS/nanobot/pull/5780)（停止发送上下文压缩通知）与此高度相关，可能形成联动修复。
- **[#5908](https://github.com/HKODS/nanobot/issues/5908)**（OPEN，2 条评论）— 请求 WebUI 在流式回复时显示实时 tokens/sec 指标，反映用户对推理性能可观测性的诉求，属于典型的高级用户需求。
- **[#5204](https://github.com/HKUDS/nanobot/pull/5204)**（P1，今日更新）— Responses provider 能力声明式重构，涉及 OpenAI/Copilot/DeepSeek 路由行为，是长期在审的重要架构级 PR。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 中 | [#5903](https://github.com/HKUDS/nanobot/issues/5903) Feishu 内部 checkpoint 标记泄露给用户 | 无直接 fix PR，[#5780](https://github.com/HKUDS/nanobot/pull/5780) 可能相关（待合并） |
| 中 | [#5916](https://github.com/HKUDS/nanobot/pull/5916) MCP `tools/list` 分页时仅注册第一页工具，后续页工具不可用 | ✅ 已有 fix PR（今日提交，待合并） |
| 中 | [#5914](https://github.com/HKUDS/nanobot/pull/5914) Napcat 渠道因 `file_size` 非数值直接丢弃图片消息 | ✅ 已有 fix PR（待合并） |
| 低 | [#5913](https://github.com/HKUDS/nanobot/pull/5913) `NANOBOT_MAX_CONCURRENT_REQUESTS` 为空/非法值时启动崩溃 | ✅ 已有 fix PR（降级为默认值） |
| 低 | [#5605](https://github.com/HKUDS/nanobot/pull/5605) Email 渠道在消息实际投递前就标记 `\Seen`，被过滤的消息也可能被误标 | ✅ 已有 fix PR（长期待审） |

值得肯定的是，今日新报告的问题基本都有配套 fix PR，社区自愈能力较强。无崩溃级或安全级新问题（P1 安全相关 PR [#5005](https://github.com/HKUDS/nanobot/pull/5005) 为存量，非今日新增）。

## 6. 功能请求与路线图信号

新功能需求与信号：

- **[#5908](https://github.com/HKUDS/nanobot/issues/5908)** WebUI 流式回复实时 tokens/sec 指标 — 尚无 PR，属独立小功能，实现成本低，有望被社区快速认领。
- **[#5915](https://github.com/HKUDS/nanobot/pull/5915)** 新增 Cheaper Inference 网关 Provider（OpenAI 兼容）— PR 已提交，延续了项目持续扩展 Provider 生态的策略，大概率随下个版本合入。
- **[#5609](https://github.com/HKUDS/nanobot/pull/5609)** Email 渠道支持 Microsoft delegated OAuth（Office365/Outlook）— 顺应微软强制 OAuth2 的趋势，属必要适配，建议优先审阅。
- **[#5606](https://github.com/HKUDS/nanobot/pull/5606)** Email 按收件别名过滤 — 与 #5609 同作者（@tilladam），构成 Email 渠道增强组合。
- **[#5825](https://github.com/HKUDS/nanobot/pull/5825)** 可复用 OpenRouter JEV 客户端 — 为后续 heartbeat、shell policy 等功能铺路，暗示路线图上有更多决策类能力规划。

下一版本可能纳入：Email OAuth（#5609）、MCP 分页修复（#5916）、Cheaper Inference Provider（#5915）、WebUI 草稿保留（已完成的 #5912 后续版本）。

## 7. 用户反馈摘要

- **Feishu 用户体验受损**：自动压缩后的“幽灵消息”让用户困惑（#5903），社区在 PR #5780 中也反馈压缩通知“quite annoying”，说明**上下文压缩的可感知性**是当前高频痛点，用户倾向于完全无感的后台压缩。
- **WebUI 多会话工作流**：草稿丢失问题（#5910）反映用户已将 NanoBot WebUI 用于多会话并行的严肃工作场景，对细节体验有较高期待。
- **性能可观测性需求**：tokens/sec 请求（#5908）表明用户希望区分“模型在慢速生成”与“系统卡死”，说明流式稳定性仍偶有不确定感。
- **MCP 生态深度使用**：分页 tools/list 问题（#5916）和 `enabledTools` 显式选择的使用方式，表明存在重度 MCP 用户，工具发现可靠性是刚需。
- **Email 生产部署**：@tilladam 的三个 Email PR（OAuth、别名过滤、\Seen 修复）显示有用户在真实企业邮箱环境中部署，对投递可靠性要求高。

## 8. 待处理积压

⚠️ 维护者需关注的长期未合并 PR：

- **[#5005](https://github.com/HKUDS/nanobot/pull/5005)**（P1，7 月 20 日创建，已 2 个月+，标记 conflict）— exec 模块 tmp 清理命令的安全护栏重构。**存在合并冲突且属安全相关，建议优先处理。**
- **[#5204](https://github.com/HKUDS/nanobot/pull/5204)**（P1，8 月 1 日创建）— Responses 能力声明式重构，架构级变更，长期在审可能引发后续冲突。
- **[#5386](https://github.com/HKUDS/nanobot/pull/5386)**（8 月 13 日，标记 conflict）— MCP Apps 结果元数据保留，需解决冲突。
- **[#5605](https://github.com/HKUDS/nanobot/pull/5605) / [#5606](https://github.com/HKUDS/nanobot/pull/5606) / [#5609](https://github.com/HKUDS/nanobot/pull/5609)**（8 月 30 日，近一个月）— Email 渠道三连 PR，涉及微软 OAuth 强制迁移的外部时间压力。
- **[#5780](https://github.com/HKUDS/nanobot/pull/5780)**（9 月 15 日）— 压缩通知修复，与今日热点 Issue #5903 关联，尽快合并可一并缓解用户抱怨。

**积压风险提示**：当前 12 条待合并 PR 中有 2 条冲突、2 条 P1，建议维护者优先排期 #5005（安全）与 #5780（用户感知强烈的 bug），并对 Email 系列 PR 做批量评审以降低外部贡献者流失风险。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 · 2026-09-26

> 数据来源：zeroclaw-labs/zeroclaw 过去 24 小时 GitHub 活动

---

## 1. 今日速览

Zeroclaw 今日保持**高度活跃**：过去 24 小时内 Issues 更新 50 条（新开/活跃 37、关闭 13），PR 更新 50 条（待合并 42、合并/关闭 8），无新版本发布。项目当前处于 **v0.9.0 里程碑冲刺 + #8289 OIDC 安全栈大整合**阶段，多个 size:XL 超大 PR（如 #11082）正在推进架构级安全能力落地。社区讨论焦点集中在**资源准入控制 RFC（#10970）**和多项安全漏洞修复上，维护者响应及时（多数新 Issue 当天即有 label 与状态流转），项目健康度良好。待合并 PR 积压达 42 个，其中 XL 级占比不低，评审带宽是当前主要瓶颈。

---

## 2. 版本发布

过去 24 小时**无新版本发布**。v0.9.0 里程碑相关工作仍在推进中（参见 ZeroRelay 就绪 Tracker [#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358)）。

---

## 3. 项目进展

今日合并/关闭的重要 PR（8 个）：

| PR | 内容 | 意义 |
|---|---|---|
| [#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259) | feat(security): RPC 认证主体 + native/peercred（#8289 stage 3） | OIDC 安全栈关键阶段合入，RPC 面向“认证主体”迈进 |
| [#10263](https://github.com/zeroclaw-labs/zeroclaw/pull/10263) | feat(security): 主体工具选择器组合进 agent 会话 | 权限模型可按主体组合，身份访问控制继续深化 |
| [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) | feat(agents): agent 可移植 bundle 导出 | `zeroclaw agents export` 落地，跨安装迁移 agent 成为可能 |
| [#11046](https://github.com/zeroclaw-labs/zeroclaw/pull/11046) | fix(tools): 截图结果不再内联 base64 | 小修但消除冗余数据注入模型上下文 |
| [#10397](https://github.com/zeroclaw-labs/zeroclaw/pull/10397) | fix(mcp): 仅发送工具结果文本块 | MCP 集成输出更精简、无损 |

同时关闭的 Issues 中有多项架构工作收敛：网关 webhook 统一分发重构（#8586）、crate 依赖倒置与编排器迁移（#6864）、SOP `sops.run` 幽灵执行修复（#10513）等。

**整体判断**：安全/身份（#8289 多阶段）与 SOP 控制面（#8288 tracker）是当前主线，今日合并工作使 OIDC 栈在 master 上的占比显著提升，v0.9.0 的安全基线基本成形。

---

## 4. 社区热点

1. **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)（15 评论）** — 维护者 RFC/设计议题决策队列 Tracker。高讨论量反映**治理流程负载**：RFC 数量增长快于决策吞吐，社区对决策透明度与节奏高度关注。
2. **[#8586](https://github.com/zeroclaw-labs/zeroclaw/issues/8586)（10 评论）** — 网关 webhook→channel 统一 ingress 重构，今日关闭。诉求是消除各 webhook 通道重复实现消息生命周期（autosave、dispatch、回复/错误投递）。
3. **[#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)（9 评论）** — "Everything is a plugin" 统一能力目录路线图。北极星产品方向：内置、安装包、已配置实例、运行时观测统一为一个真实能力目录。
4. **[#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970)（8 评论）** — **RFC：主机级准入控制与 per-agent 资源上限**。多 agent 单机部署场景下希望“延迟降级而非稳定性崩溃”，标记 needs-author-action，正在打磨中。这是今日最值得关注的架构讨论。
5. **[#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)（8 评论）** — CI Rust 缓存与关键路径优化。当前 PR CI 普遍 15-20 分钟，开发者对 CI 时长痛点明显。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| **S0** | [#11110](https://github.com/zeroclaw-labs/zeroclaw/issues/11110) | RPC workspace 限制保留可重定向的 cwd 符号链接，授权检查后可被重定向 → **逃逸/数据风险** | status:in-progress |
| **P1** | [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) | daemon 未注册 channel-map factory，webhook/cron/SOP 回合无可用通道 | needs-maintainer-review |
| **P1** | [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) | wasmtime-wasi CVE 治理与 audit.toml/deny.toml 漂移 | accepted，跟踪中 |
| S2 | [#11108](https://github.com/zeroclaw-labs/zeroclaw/issues/11108) | `browser_open`/`web_search` 被错误别名到 `shell` 工具 | needs-maintainer-review |
| S2 | [#11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059) | WhatsApp Web 忽略 `force_voice`，无法路由语音回合 | needs-maintainer-review |
| S2 | [#11093](https://github.com/zeroclaw-labs/zeroclaw/issues/11093) | stable 文档晋升后根目录 llms.txt 不同步 | in-progress |
| S3 | [#11097](https://github.com/zeroclaw-labs/zeroclaw/issues/11097) | 插件 egress 补救命令未转义单引号 | in-progress |
| S3 | [#10805](https://github.com/zeroclaw-labs/zeroclaw/issues/10805) | Windows control_plane 存活测试竞态（Advisory，已关闭） | 已关闭 |

**新增 PR 修复**：[#11133](https://github.com/zeroclaw-labs/zeroclaw/pull/11133)（会话复用时重校验转发环境权限，安全 follow-up）当日即有对应修复 PR，响应迅速。

⚠️ **#11110（S0）需最高优先级处理**。

---

## 6. 功能请求与路线图信号

- **[#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970)** 主机级资源准入控制 RFC（high risk，讨论中）→ 与 #11131/#11132 等 runtime 观测/回合能力 PR 同向，很可能进入 v0.9.0 后续或 v0.10。
- **[#11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103)** 新增 Cheaper Inference 作为类型化 OpenAI 兼容 provider（in-progress）→ 已有实现推进，大概率近期合入。
- **[#11100](https://github.com/zeroclaw-labs/zeroclaw/issues/11100)** 成本费率目录预填保留 provider 别名 → dashboard/Zerocode 体验改进，follow-up 属性强。
- **今日新 PR 释放的信号**：
  - [#11134](https://github.com/zeroclaw-labs/zeroclaw/pull/11134)：SOP 条件步骤（`- decide:`）由决策模型回答 → SOP 控制面（#8288）5/5 目标的又一能力点；
  - [#11132](https://github.com/zeroclaw-labs/zeroclaw/pull/11132)：RPC 回合对齐（steering、session ops）→ runtime 嵌入边界（#10993）持续收敛；
  - [#11131](https://github.com/zeroclaw-labs/zeroclaw/pull/11131)：daemon 拥有 observer 事件总线。
- **[#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) / #6489 插件化路线**持续推进，编译期 feature → 运行时 WASM 插件是明确的下一版本方向。

---

## 7. 用户反馈摘要

- **多 agent 部署运维者**：核心痛点是单机跑多 agent 时无资源边界（#10970），以及 daemon 部署下 webhook/cron/SOP 通道不可用（#11055）——"channel-addressed tools are unusable outside two entry points"。
- **通道用户**：WhatsApp 语音路由失效（#11059）、agent 误报“消息已发送”（#10600 背景）直接损害对 agent 的信任——“agent 会告诉人类它已通知，实际没有”。
- **集成开发者**：WASM 插件 WIT 版本偏差时报错 `registered: 0` 极难排查（#10505）；工具别名把 browser/search 重写到 shell 导致行为异常（#11108）。
- **贡献者/CI 侧**：PR CI 15-20 分钟（#7108）、merge-result 新鲜度问题（#11096，已关闭）、Windows advisory 测试竞态（#10805）影响日常贡献体验。
- **正面信号**：agent bundle 导出（#9986）、文档结构修正建议（#11088，good first issue）等表明社区参与面在扩大，外部贡献者（@RustLangLatam、@Xscaperrr、@aiapienthusiast 等）持续提交高质量 Issue/PR。

---

## 8. 待处理积压

**需维护者关注的 Open 且 needs-maintainer-review 项目**：

- [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055)（P1，daemon 通道 factory 未注册）— 无修复 PR，**建议优先**
- [#11108](https://github.com/zeroclaw-labs/zeroclaw/issues/11108)（工具别名语义破坏）
- [#11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059)（WhatsApp force_voice）
- [#11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103)（Cheaper Inference provider）

**长期大型 PR（XL，评审带宽压力）**：

- [#11082](https://github.com/zeroclaw-labs/zeroclaw/pull/11082) — OIDC 全栈单 PR 合并（八合一），覆盖面极大，评审风险高
- [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) — agent 生命周期变更统一协调（9/4 开启，至今未合）
- [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) — ACP 中断回合持久化（8/20 开启）
- [#10596](https://github.com/zeroclaw-labs/zeroclaw/pull/10596) — ACP transcript 分页（9/3 开启）
- [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) — 图片请求 400 恢复（8/30 开启）

**其他提醒**：#10970 RFC 处于 needs-author-action，若长期停滞将阻塞多 agent 资源治理方向；S0 安全 Issue #11110 应确保在下次 release 前修复。

---

*本报告基于过去 24 小时 GitHub 公开数据自动汇总，链接均指向 zeroclaw-labs/zeroclaw。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-09-26

## 1. 今日速览

Hermes Agent 今日保持高度活跃：过去 24 小时 Issues 更新 50 条（49 新开/活跃，仅 1 条关闭），PR 更新 50 条（46 待合并，4 合并/关闭），无新版本发布。**Windows 平台的 PM（托管运行时）迁移与更新链路是当前最集中的痛点**，围绕 pydantic_core ABI 崩溃、gateway PID 管理、uv lockfile 校验等产生了大量高优 P1/P2 issue。社区贡献热情高涨（多个 issue 由用户当天提交配套 fix PR，如 #123281→#123285、#123436→#123442），但维护者关闭/合并吞吐明显跟不上输入，积压风险持续上升。

## 2. 版本发布

今日无新 Release。版本参考：issue 报告显示当前代码约在 `v0.21.5+2451` 一线，Desktop 稳定版为 0.21.4。

## 3. 项目进展

今日 4 条 PR 合并/关闭，体量偏小，主要是清理性质：

- **#123427 / #123419（CLOSED，duplicate）**：社区插件目录提交 `smartmoney-cub` 的两个重复 PR 被关闭，合并收敛到 [#123396](https://github.com/NousResearch/hermes-agent/pull/123396)（仍待合并）。
- **#123423（CLOSED）**：bot 自动格式化 PR（`npm run fix`），由 CI workflow 自动关闭，属日常维护。

整体看，**今日主线代码无实质合并落地**。值得注意的是待合并队列中有大量高质量修复（cron P1 修复 ×3、gateway 修复 ×4、OAuth 凭据池修复），合并节奏成为当前瓶颈。

## 4. 社区热点

**🔥 讨论最活跃：**

- **[#122183](https://github.com/NousResearch/hermes-agent/issues/122183)（18 评论，P1）**：Windows PM 运行时升级后，旧的 pre-PM venv（Py 3.11）被前置注入 `sys.path`，导致 gateway 的 `hosted_room_worker` 崩溃（`No module named 'pydantic_core._pydantic_core'`）。这是 PM 迁移 ABI 混用问题的主 issue，与 #122324、#123185、#122161 形成问题簇。
- **[#122495](https://github.com/NousResearch/hermes-agent/issues/122495)（11 评论，P2）**：`hermes update` 在"暂停 gateway"阶段因身份分类器误判（`-c` shim 形式启动的 gateway 无法映射 PID）而中止。
- **[#122656](https://github.com/NousResearch/hermes-agent/issues/122656)（9 评论，P3，标记 duplicate）**：源码安装下 Desktop 每次后端启动都触发空跑更新交接，反复重建应用并重启 gateway，杀死进行中的会话——典型的"更新循环"体验灾难。
- **[#122425](https://github.com/NousResearch/hermes-agent/issues/122425)（4 评论，P2）**：托管环境 workspace 副本不随 `hermes update` 同步，两个运行时执行不同代码；且缺 install metadata 导致 `pm doctor` 崩溃。

**诉求分析**：热点几乎全部指向**安装/更新子系统的兼容性**。PM 迁移引入的 Python 3.11↔3.14 双 venv 共存、PID/lock 文件生命周期管理是共性根因，社区在等待一个系统性的收口方案（PR #122161 已合并但被 #123185 证明不充分）。

## 5. Bug 与稳定性（按严重度）

**P1**

| Issue | 问题 | Fix PR |
|---|---|---|
| [#122183](https://github.com/NousResearch/hermes-agent/issues/122183) | Windows pre-PM venv 污染 sys.path → pydantic_core 崩溃 | 部分（#122161 已合并但未根治，见 #123185） |
| [#122324](https://github.com/NousResearch/hermes-agent/issues/122324) | gateway venv site-packages 注入混合 Py3.11/3.14 → ImportError 循环 | 未见 |
| [#123185](https://github.com/NousResearch/hermes-agent/issues/123185) | PATH 竞态使 gateway 启动于系统新版 Python → ABI 崩溃循环 | 未见 |
| [#123281](https://github.com/NousResearch/hermes-agent/issues/123281) | jobs.json 一条非对象条目使全部 cron 任务停摆 | ✅ [#123285](https://github.com/NousResearch/hermes-agent/pull/123285) 待合并 |
| [#122063](https://github.com/NousResearch/hermes-agent/issues/122063) | Desktop 0.21.4 回归：profile 控制通道停滞后所有 bot 显示同一会话 | 未见 |

**P2 精选**

- [#123401→#123433/#123432]：cron 外部 worker 调度失败无 incident 记录、无通知（两个 fix PR 待合并）。
- [#123109](https://github.com/NousResearch/hermes-agent/issues/123109)：#121635 引入的回归——bootstrap 启动的 gateway 被误分类，状态轮询会删除其 `gateway.pid`/`gateway.lock`。
- [#123430](https://github.com/NousResearch/hermes-agent/issues/123430)：更新器 `--replace` 重启后丢失 `gateway.pid`，后续更新中止、CLI 失联。
- [#122740](https://github.com/NousResearch/hermes-agent/issues/122740)：Windows 安装器在 python-deps 阶段 `uv sync --locked` 误报 lockfile 需更新（配合 #122112 镜像源问题，安装成功率受损）。
- [#123327](https://github.com/NousResearch/hermes-agent/issues/123327)：macOS webhook 服务器 `SO_KEEPALIVE errno 22` 拒绝所有连接，阻断 Tincan relay 唤醒。
- [#118862](https://github.com/NousResearch/hermes-agent/issues/118862)：多路复用 gateway 的死会话检查读错 profile store，缓存 agent 持续写入已结束会话。
- [#118379](https://github.com/NousResearch/hermes-agent/issues/118379)：Anthropic 按请求刷新凭据会回滚凭据池轮换——两个订阅按一个计费（配 [PR #123434](https://github.com/NousResearch/hermes-agent/pull/123434) 同类 Codex 修复）。
- [#123357](https://github.com/NousResearch/hermes-agent/issues/123357)：语音聊天 barge-in 语句静默丢失，用户无任何反馈。

**P3**：[#123436](https://github.com/NousResearch/hermes-agent/issues/123436)（max-iterations 总结崩溃，✅ 有 PR #123442）、#123337（会话重命名 UI 不刷新）、#123362（压缩回退状态锁死无恢复路径）、#123368（图片附件显示原始 Markdown）。

**稳定性结论**：安装/更新子系统处于明显的**回归密集期**，至少 3 个独立回归（#123109、#122063、#122656）由近期改动引入，建议维护者优先冻结并加固 update 链路。

## 6. 功能请求与路线图信号

- **[#123388](https://github.com/NousResearch/hermes-agent/issues/123388)（needs-decision）**：可插拔逐轮模型路由器（按任务复杂度智能选模型）。与 [#72942](https://github.com/NousResearch/hermes-agent/issues/72942)（`pre_gateway_dispatch` 动态 profile 路由）共同构成"多 provider 智能调度"需求簇——用户已在多模型/多订阅场景中重度使用 Hermes，路由能力是明确的演进方向。
- **#123429**：kanban 完成卡需落地证据（completion_contract）+ 孤儿卡路由给 owner——项目自治工作流方向的自我增强。
- **#122426**：安全加固建议集（迭代预算默认无上限、插件签名、`ssl_verify=false` 警示、`shell=True` 审计）——已被标记 needs-decision，可能进入安全专项。
- **#105503**：捷克语 i18n，延续已支持 13 种语言的模式，纳入概率高。

## 7. 用户反馈摘要

- **最大痛点是更新可靠性**：Windows 用户反复遭遇"更新后无法启动 / 修复安装救不回来"（#96409），以及更新杀死活跃会话（#122656）——对把 Hermes 当常驻助理的用户而言，gateway 意外重启等于丢失上下文，情绪反应强烈。
- **企业/重度用户的计费敏感**：#118379（两订阅按一计费）显示有用户在凭据池多订阅场景下运行，对轮换正确性要求高。
- **积极信号**：报告质量普遍很高（带复现版本、根因定位、甚至直接提交 PR），说明核心用户群技术能力强、参与意愿高；社区插件目录持续收到提交（smartmoney-cub）。
- **桌面端细节体验**（语音打断丢话、重命名不刷新、图片显示 Markdown）是小但影响日常观感的一类反馈。

## 8. 待处理积压

以下高优 issue 长期活跃但缺少维护者响应或系统性修复，建议关注：

| Issue | 优先级 | 状态 |
|---|---|---|
| [#96409](https://github.com/NousResearch/hermes-agent/issues/96409) | P2 | 开始于 8/27，近一个月，needs-repro，Desktop 更新半途损坏且无法修复 |
| [#118862](https://github.com/NousResearch/hermes-agent/issues/118862) | P2 | 开始于 9/22，多路复用会话状态污染，影响数据完整性 |
| [#118379](https://github.com/NousResearch/hermes-agent/issues/118379) | P2 | 开始于 9/21，涉及真实计费损失 |
| [#94881](https://github.com/NousResearch/hermes-agent/issues/94881) | P2 | 8/25 起，Copilot provider api_mode 误写配置，锁定一批模型不可用 |
| [#72942](https://github.com/NousResearch/hermes-agent/issues/72942) | P3 | 7/27 起，needs-decision 近两个月 |
| PR [#110967](https://github.com/NousResearch/hermes-agent/pull/110967) / [#108699](https://github.com/NousResearch/hermes-agent/pull/108699) | P2/P3 | 分别滞留 12 天与 2 周未审，且 #110967 已出现社区 salvage 版本 #123438 |

**健康度提示**：今日 issue 关闭率仅 2%（1/50），PR 合并率 8%（4/50）。Windows 更新链问题簇（#122183/#122324/#123185/#122495/#123430/#123109）建议由维护者统一归因收口，避免分散修复各自为战；同时待审 PR 队列（46 个）中的多个 P1/P2 修复（cron ×3、OAuth 凭据）值得优先评审合并。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-09-26）

## 📌 今日速览

PicoClaw 今日整体活跃度**中等偏低**，无新版本发布。过去 24 小时共 2 条 Issue 更新（1 新开 / 1 关闭）、4 条 PR 更新（均为待合并状态，无合并/关闭动作）。社区贡献仍以外部 PR 为主，包括新的 LLM provider 接入和文档补充，但维护者合并节奏明显放缓，4 个待合并 PR 积压值得警惕。

## 🚀 版本发布

今日无新版本发布。参考 Issue 中提及的版本号为 nightly 构建（`nightly-50-gbbf6893c`），项目仍处于滚动开发阶段。

## 🔨 项目进展

今日**无 PR 被合并或关闭**，主线代码无向前推进。处于活跃更新状态的 PR：

- **[PR #3381](https://github.com/sipeed/picoclaw/pull/3381)** — 将 OpenAI provider 切换至 Responses API（新功能）。已开放 9 天，今日仍有活动，但因 CLA 签署检测问题受阻（见 Issue #3392）。
- **[PR #3393](https://github.com/sipeed/picoclaw/pull/3393)** — 新增 Cheaper Inference 作为 OpenAI 兼容 provider（今日新开），声称可降低 15–60% 模型调用成本，是今日唯一的新增贡献。
- **[PR #3222](https://github.com/sipeed/picoclaw/deltachat)**（正确链接：[PR #3222](https://github.com/sipeed/picoclaw/pull/3222)）— DeltaChat 渠道重构（-200 LOC），开放已近 3 个月，今日有活动但仍未合并，长期滞留。

## 🔥 社区热点

- **[Issue #3392](https://github.com/sipeed/picoclaw/issues/3392)**（今日新开，0 评论）— 贡献者 @XenonR 报告 **CLAassistant 无法检测到 CLA 签署**，直接阻塞了 PR #3381（OpenAI Responses API 切换）的合并。这是典型的“流程性阻塞”问题，影响贡献者体验，建议维护者优先处理。
- **[Issue #3355](https://github.com/sipeed/picoclaw/issues/3355)**（已关闭）— 飞书渠道配置报错 `channel_list.feishu.app_id` 为未知字段，作者附带了**解决方案**。该 Issue 被 stale 机制关闭，但说明部分用户仍在使用旧版配置结构，文档/迁移指引或需加强。

## 🐛 Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中 | [Issue #3392](https://github.com/sipeed/picoclaw/issues/3392)：CLAassistant 无法检测 CLA 签署，阻塞 PR 合并 | 新开，无 fix PR |
| 中 | [Issue #3355](https://github.com/sipeed/picoclaw/issues/3355)：飞书渠道配置字段不识别（用户已自附解法） | 已关闭（stale） |

今日无崩溃或回归类报告，稳定性面整体平稳。

## 💡 功能请求与路线图信号

- **模型网关降本**：[PR #3393](https://github.com/sipeed/picoclaw/pull/3393)（Cheaper Inference）与 [PR #3381](https://github.com/sipeed/picoclaw/pull/3381)（OpenAI Responses API）均指向 **LLM 接入层现代化与成本优化**，这是当前最清晰的方向信号。若合并，下一版本将显著增强 provider 生态。
- **MCP 生态扩展**：[PR #3368](https://github.com/sipeed/picoclaw/pull/3368) 补充 Parallel Search MCP 的开箱即用示例（免账号/API key），反映项目对 MCP 集成易用性的持续投入，但该 PR 已被标记 stale，存在被放弃风险。

## 🗣️ 用户反馈摘要

- **渠道配置易踩坑**：飞书用户（#3355）因配置字段结构变化遭遇报错，提示 nightly 版本与文档之间的配置格式存在不同步。
- **贡献流程摩擦**：外部贡献者对 CLA 签署流程体验不满（#3392），自动化工具误判导致正常贡献被卡。
- **成本敏感**：社区主动提交降本类 provider PR，说明个人部署用户对 LLM 调用费用较为敏感。

## ⏳ 待处理积压

以下长期未合并/未响应项目建议维护者关注：

1. **[PR #3222](https://github.com/sipeed/picoclaw/pull/3222)** — DeltaChat 重构，开放约 **3 个月**（2026-07-03），由 @trufae 提交，今日有更新但始终未进入 review/合并流程。
2. **[PR #3368](https://github.com/sipeed/picoclaw/pull/3368)** — Parallel Search MCP 文档，已被标记 **stale**（开放 21 天），若无维护者回应将自动关闭，社区文档贡献可能流失。
3. **[PR #3381](https://github.com/sipeed/picoclaw/pull/3381)** — OpenAI Responses API 切换，功能价值高但被 CLA 流程阻塞，需人工介入解除。

---

**健康度小结**：项目开发仍在滚动进行，但**维护者响应与合并吞吐是当前短板**——4 个活跃 PR 全部待合并且部分已 stale/受阻。建议优先解决 CLA 流程问题以解锁 #3381，并尽快 review #3222 避免核心贡献者流失。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-26

## 1. 今日速览

NanoClaw 今日维持高活跃度：过去 24 小时新增/活跃 Issue 5 条、PR 更新 50 条（47 条待合并、3 条合并/关闭），无新版本发布。核心开发者 @glifocat 极为高产，一日内同时提交多个 bug 报告与对应修复 PR，覆盖安装/更新流程、agent-runner、Iron Proxy 等关键模块。整体节奏呈现出 2.4.0 发布后的密集修复期特征：合并速度（3 条）远低于产出速度（47 条待合并），修复积压明显但方向清晰。项目处于“收口修 bug、为下个补丁版本做准备”的阶段。

## 2. 版本发布

今日无新版本发布。上一个大版本 v2.4.0（c313d061）的相关回归问题仍在集中修复中。

## 3. 项目进展

今日关闭/合并的 PR 共 3 条，重要者如下：

- **PR #3917（已关闭）** [fix: seed Claude's default output style, not Concise, which defeated prompt caching](nanocoai/nanoclaw PR #3917)
  修复 2.4 引入的回归：默认 `outputStyle: "Concise"` 导致 Claude 对话无法命中 prompt cache，恢复默认输出样式，直接降低使用成本。这是今日含金量最高的修复。
- **PR #226（已关闭）** [skill: add /add-model-identity](nanocoai/nanoclaw PR #226)
  存续 7 个月的旧 PR 被清理关闭，属于积压维护动作。

其余为社区修复 PR 的持续更新（评论互动），如 #3185（Discord webhook 审批按钮错乱修复）、#3446（自动丢弃 bot 发送者的 unknown-sender 门槛修复）均有新活动，等待核心团队评审。

## 4. 社区热点

讨论/活跃度最高的话题集中在**更新与安装流程可靠性**：

- **Issue #3906** [update-nanoclaw: controller archive misses setup/ since #3816](nanocoai/nanoclaw Issue #3906)（1 条评论）—— 2.4.0 后 `/update-nanoclaw` 流程两处失败，控制器归档缺 `setup/`，且 stage 阶段命令在依赖就位前运行。已有对应修复 PR #3913。
- **Issue #3916** [Host logs never rotate and carry no date](nanocoai/nanoclaw Issue #3916) —— macOS launchd 安装下日志无日期、无轮转，10 MB/29 MB 的多周日志被误读为“正在发生的故障”。诉求明确：可观测性基础能力缺失。
- **Issue #3907** [Gateway detection fails when nested pnpm prints workspace warning](nanocoai/nanoclaw Issue #3907) —— 健康安装被误报“未检测到 gateway”，根因是以 stdout 精确匹配做探测；修复见 PR #3910。

值得注意：今日 5 条 Issue 中 4 条由 @glifocat 报告，且每条基本都有其本人提交的 fix PR，“报修 + 修复”闭环速度极快，是项目自愈能力的体现。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | **#3911** `ncl groups restart --id <其他组>` 实际重启的是调用者自身，目标组未被重启（agent 权限语义错误，涉及安全边界）| OPEN，暂无 fix PR |
| 高 | **#3906** /update-nanoclaw 更新流程完全中断（controller 无法加载）| 有 fix PR [#3913](nanocoai/nanoclaw PR #3913) |
| 中 | **#3909** agent 组在 spawn 中途被删除后，host 仍为其启动 session 容器（资源泄漏/悬空容器）| OPEN，暂无 fix PR |
| 中 | **#3907** pnpm 警告污染 stdout 导致 gateway 检测失败 | 有 fix PR [#3910](nanocoai/nanoclaw PR #3910) |
| 低 | **#3916** 日志无日期、无轮转 | OPEN，暂无 fix PR |

PR 侧还有多项待合并稳定性修复：**#3893**（Claude 长流式输出期间心跳中断导致容器被误杀）、**#3908**（agent 间唤醒失败时失败通知发给自己形成循环）、**#3878**（ping agent 清理时容器残留）。

## 6. 功能请求与路线图信号

- **可配置化诉求**：PR [#3646](nanocoai/nanoclaw PR #3646) 提出 `ABSOLUTE_CEILING_MS` / `CLAIM_STUCK_MS` 环境变量覆盖，解决慢速本地模型被 sweep 误杀的问题——本地模型用户群正在增长，该需求很可能进入下个版本。
- **可观测性**：#3916 的日志轮转/时间戳是基础运维需求，预计会有对应 PR。
- **工程流程自动化**：PR [#3886](nanocoai/nanoclaw PR #3886)（强制 release note，2.4.0 中 91 个合并 PR 有 59 个缺 release-note）、[#3912](nanocoai/nanoclaw PR #3912)（labeler 互相覆盖标签）、[#3914](nanocoai/nanoclaw PR #3914)（PR 模板合规检查）显示团队正在系统性补 CI/流程债，为后续更快发版铺路。
- **安全加固**：PR [#3920](nanocoai/nanoclaw PR #3920) 限制 setup 故障辅助 agent 对 live 安装的破坏权限，属 hardening 方向持续推进。

## 7. 用户反馈摘要

- **升级体验差**：多个问题（#3906、#3907、#3302）都指向 2.4.0 的 gateway 架构抽取（#3816）造成安装/更新链路断裂，用户在升级后遭遇“健康安装被误判”“更新中途失败”。
- **长会话运维痛点**：#3916 用户四个月 10 MB 日志无法定位实时事件，反映长驻部署（launchd）场景下缺乏日志治理。
- **本地模型用户体验**：#3646、#3919、#3915 显示本地模型（如 Ollama/11434 端口）用户遭遇误杀、误报、误配置的问题集中出现。
- **正面信号**：问题普遍被快速响应并附修复 PR，issue 报告质量高（含版本、平台、复现路径），社区参与度健康。

## 8. 待处理积压

- **PR #3185**（2026-08-04 开启）：Discord 审批按钮全部解析为拒绝的高影响 bug 修复，挂起近 2 个月未合并，建议优先评审。
- **PR #3446**（08-22）：bot 发送者触发审批死锁的修复，等待 review。
- **PR #3302**（08-17）：OneCLI gateway 绑定地址修复（#2903），积压超 1 个月。
- **PR #3646**（08-29）：sweep 计时器全局覆盖，社区呼声高。
- **Issue #3911、#3909、#3916**：今日新报且暂无修复 PR，建议维护者分配跟进人。

**健康度小结**：产出能力强（单日 10+ 新修复 PR），但合并吞吐不足（47 条待合并 vs 单日合并 3 条），评审带宽是当前瓶颈；无未响应超过数周的新 Issue，社区互动及时。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-09-26

## 1. 今日速览

NullClaw 项目今日整体活跃度较低，无新开 Issues、无版本发布。唯一的动态是一条新增的待合并 PR #1009，针对监督式自主模式（supervised autonomy）下中高风险命令审批流程的关键行为缺陷提交修复。该 PR 与 Issue #900 形成闭环，是今日最受关注的技术进展。总体来看，项目处于平稳维护期，提交节奏稳定但社区讨论热度偏低。

## 2. 版本发布

今日无新版本发布。（最新 Releases：无）

## 3. 项目进展

- **[PR #1009](https://github.com/nullclaw/nullclaw/pull/1009) [OPEN]** — `fix(exec): pause for /approve on medium/high-risk commands instead of failing`
  - 作者：@serhiy-bzhezytskyy（创建/更新：2026-09-25）
  - 内容：修复监督式自主执行模式下，中/高风险 shell 命令本应暂停等待用户 `/approve` 审批，实际却直接失败的问题。核心缺陷在于代码从未到达 `approval_request` 状态，且该问题在 `/bash`、`/exec` 及 LLM 发起的命令等多个入口路径中均复现。
  - 修复关联 Issue：[#900](https://github.com/nullclaw/nullclaw/issues/900)
  - 影响：属于安全与可用性双重修复——审批机制形同虚设意味着高风险命令无法被有效人工把关。该 PR 目前待审核合并，合并后将显著提升自主执行模式的可靠性。

## 4. 社区热点

- 今日无新开或活跃讨论的 Issues，评论与 Reaction 数据均为零。
- 唯一热点是 PR #1009（0 👍），其背后反映的诉求：用户依赖「暂停-审批」机制在 AI 自主执行 shell 命令时进行人机协同风控，直接失败（而非等待审批）破坏了这一核心工作流。

## 5. Bug 与稳定性

今日无新增 Bug 报告，但有一条正在修复中的已知缺陷：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| **高**（安全相关） | 中/高风险命令审批流程失效：`approval_request` 状态不可达，命令直接失败，无法触发 `/approve` 人工审批（Issue #900） | ✅ 已有修复 PR [#1009](https://github.com/nullclaw/nullclaw/pull/1009)，待合并 |

## 6. 功能请求与路线图信号

- 今日无新功能请求。
- 从 PR #1009 可推断的路线图信号：团队正在持续打磨**监督式自主执行（supervised autonomy）**能力，审批流程的正确性是当前优先级，后续可预期围绕风险分级与审批体验的进一步迭代。

## 7. 用户反馈摘要

- 今日无 Issue 评论数据，无法提炼新增用户反馈。
- 间接信号：Issue #900 的存在表明有用户实际在运行中依赖审批暂停机制（supervised autonomy + `/bash`/`/exec` 场景），痛点是「该暂停的没暂停、直接报错」，属于自动化工作流被打断的体验问题。

## 8. 待处理积压

- **[PR #1009](https://github.com/nullclaw/nullclaw/pull/1009)**：今日唯一活跃 PR，涉及安全审批机制修复，建议维护者优先评审合并。
- **Issue #900**：待 PR #1009 合并后验证关闭。
- 提示：今日 Issues 动态为零，建议关注是否有长期未响应的历史 Issue 积压（本日数据未显示相关条目）。

---

*数据来源：NullClaw GitHub 仓库过去 24 小时活动快照。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-09-26

## 1. 今日速览

IronClaw（github.com/nearai/ironclaw）今日整体活跃度偏低，处于平稳维护状态。过去 24 小时内无新 Issue、无已合并/关闭的 PR、无新版本发布；仅有 2 个处于 OPEN 状态的 PR 出现更新。社区讨论热度今日接近冰点，无新增评论和反应数据。综合来看，项目运行稳定，但需要关注外部贡献者的 PR 评审节奏。

## 2. 版本发布

今日无新版本发布，最新 Releases 列表为空。项目仍处于持续主干开发阶段。

## 3. 项目进展

今日无 PR 被合并或关闭，两个活跃 PR 均为待合并状态：

- **[PR #7988](https://github.com/nearai/ironclaw/pull/7988)** `[OPEN]` `chore(agents): refresh codebase knowledge graph`
  - 作者：@ironclaw-ci[bot]（size: XS, risk: low, core CI 自动产出）
  - 由每夜定时任务 `Codebase Graph Refresh` 生成的代码库知识图谱快照刷新，属例行基础设施维护，等待例行合并即可。创建于 08-29，至今近一个月未合并，节奏略显滞后。

- **[PR #8108](https://github.com/nearai/ironclaw/pull/8108)** `[OPEN]` `fix(host-runtime): add builtin.time shift and typed input issues`
  - 作者：@Bortlesboat（size: XL, risk: low, docs 范围，新贡献者）
  - 为 `builtin.time` 增加 `operation: "shift"`，支持基于显式时间戳或当前时间的带符号秒/分/时/天/周偏移，天数与周为固定时长，并处理了宽累加器下的带符号抵消语义。这是今日信息量最大的变更，一旦合并将增强宿主运行时的内建时间操作能力。但 XL 体量 + 新贡献者身份，建议维护者优先安排评审。

**整体评估**：今日项目推进量为零（无合并），但 #8108 若落地将是 host-runtime 能力层面的一次实质扩展。

## 4. 社区热点

今日无任何 Issue 活跃，PR 亦无新增评论或 👍 反应，社区热度数据为空白。唯一值得注意的“人声”来自新贡献者 @Bortlesboat 的 #8108，表明外部开发者对 host-runtime 时间处理与类型化输入有实际使用诉求。

## 5. Bug 与稳定性

- 今日**无新报告 Bug**、崩溃或回归问题。
- 间接信号：[PR #8108](https://github.com/nearai/ironclaw/pull/8108) 标题中的 "typed input issues" 暗示 `builtin.time` 此前可能存在输入类型处理方面的缺陷，该 PR 即为潜在修复，建议维护者确认是否关联未显式链接的 Issue。

## 6. 功能请求与路线图信号

- **时间偏移能力（builtin.time shift）**：#8108 引入的带符号时间平移操作属于明确的功能增强信号，且已被实现为完整 PR，纳入下一版本概率较高——前提是获得及时评审。
- **知识图谱自动化维护**：#7988 体现了项目对 AI 代码库记忆/知识图谱的持续投入，是 IronClaw 作为 AI 智能体基础设施项目的路线图方向之一。
- 今日无用户新提出的功能请求，缺乏更多路线图输入。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼直接用户反馈。可用的间接信号：

- 外部贡献者愿意投入 XL 级别的工作量完善 `builtin.time`，说明社区对 host-runtime 内建能力的正确性与表达力有较高要求（如时区/固定时长语义、带符号偏移的数学一致性）。

## 8. 待处理积压

| PR | 状态 | 等待时长 | 建议 |
|---|---|---|---|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) 知识图谱刷新 | OPEN | 创建至今约 4 周 | CI 例行 PR，建议尽快合并避免快照过期 |
| [#8108](https://github.com/nearai/ironclaw/pull/8108) builtin.time shift | OPEN | 创建至今约 4 天 | XL 体量新贡献者 PR，建议维护者优先分派评审，避免贡献者流失 |

**健康度小结**：今日数据量小，无负面信号（无 Bug、无冲突），但“零合并 + 零讨论”提示评审响应可能是当前瓶颈，建议维护者关注上述两个 PR 的流转。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-09-26）

## 1. 今日速览

LobsterAI 今日整体活跃度处于**低位平稳**状态：过去 24 小时无新 Issue、无新版本发布，PR 更新 7 条（其中 1 条已关闭，6 条待合并）。值得注意的是，本日 PR 活动以旧 PR 的批量触碰更新为主（多个 4 月份的 PR 标记为 stale 并在同日更新），疑似为机器人/维护者的 stale 清理动作，而非真实开发进展。今日唯一的实质性新增贡献是社区成员提交的 Requesty 供应商集成 PR（#2766），显示项目对第三方贡献者仍具吸引力。

## 2. 版本发布

无新版本发布。最新 Releases 列表为空。

## 3. 项目进展

### 今日关闭：关键稳定性修复落地

- **[PR #2763](https://github.com/netease-youdao/LobsterAI/pull/2763)** `[CLOSED]` — `fix(openclaw): stop whole-turn replay after a model call started`
  修复了核心执行链路的重要 Bug：当模型调用已启动后再失败，整轮重放（whole-turn replay）会与已提交的 keyed user message 冲突，导致用户看到误导性的 "LLM request failed." 错误而非真实供应商错误。方案是在 `OverloadRetryState` 中新增 `modelCallStarted` 标志，并门控 `agent-runner-error-handler.ts` 中的两处外层重放逻辑。这是今日对**错误恢复机制可靠性**最有价值的改进。

### 待合并：新增供应商支持

- **[PR #2766](https://github.com/netease-youdao/LobsterAI/pull/2766)** `[OPEN]` — `feat(providers): add Requesty as a model provider`
  由社区贡献者 @Thibaultjaigu 提交，将 [Requesty](https://requesty.ai)（一个聚合多模型的 LLM 网关）作为内置模型供应商，实现方式与 OpenRouter 对齐（共享 provider registry、OpenClaw descriptor、供应商图标），默认禁用，不影响默认行为。若合并，将进一步扩大 LobsterAI 的模型接入生态。

**整体判断**：项目今日净进展有限（1 个合并/关闭 + 1 个新功能 PR），主要向前推进的是错误处理的健壮性。

## 4. 社区热点

今日无新增 Issue，无评论数据（评论数均为 undefined/0），**无明确讨论热点**。相对值得关注的是：

- **[PR #2766](https://github.com/netease-youdao/LobsterAI/pull/2766)**（Requesty 集成）— 今日唯一的新提交，反映社区对**更丰富的模型网关选择**的诉求（与 OpenRouter 类似的“一个 API 访问多模型”场景）。

## 5. Bug 与稳定性

今日无新报告的 Bug。基于 PR 数据回顾的稳定性问题：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | 模型调用启动后重放导致错误信息掩盖真实故障（#2763） | ✅ 已有 fix，PR 已关闭 |
| 🟡 中 | 会话创建的定时任务在“不通知”模式下触发运行时网关校验报错 "Channel is required"（[PR #1550](https://github.com/netease-youdao/LobsterAI/pull/1550)） | ⚠️ fix PR 存在但已 stale，未合并 |
| 🟡 中 | 定时任务通知渠道无法改回“不通知"的 UI 状态回显 Bug（[PR #1547](https://github.com/netease-youdao/LobsterAI/pull/1547)） | ⚠️ fix PR 存在但已 stale，未合并 |
| 🟢 低 | 全局搜索被当前 Agent 隐式限制，只能搜到当前 Agent 的任务（[PR #1634](https://github.com/netease-youdao/LobsterAI/pull/1634)） | ⚠️ fix PR 存在但已 stale，未合并 |

## 6. 功能请求与路线图信号

从待合并 PR 可推断的功能方向：

- **模型供应商生态扩展**：Requesty PR（#2766）延续 OpenRouter 模式，表明“低成本接入更多模型”是持续方向，下一版本有望纳入。
- **UI/UX 打磨**：模型选择器重构 + 供应商图标 + 下拉面板 Portal 定位优化（[PR #1628](https://github.com/netease-youdao/LobsterAI/pull/1628)），以及非 main agent 首页个性化欢迎（[PR #1660](https://github.com/netease-youdao/LobsterAI/pull/1660)），均指向多 Agent 体验的视觉统一。
- **定时任务（scheduledTask）健壮化**：#1547、#1550 两个修复等待合并，说明定时任务通知链路仍欠完善。

## 7. 用户反馈摘要

今日无 Issue 评论可提取。基于存量 PR 描述归纳的用户痛点：

- **错误信息不可诊断**：用户在模型调用失败时看到的是笼统的 "LLM request failed."，难以定位是哪家供应商的问题（#2763 已修复此路径）。
- **定时任务通知行为不一致**：UI 创建与会话/IM 创建的定时任务在“不通知”模式下行为不同，运行时触发网关校验报错，影响自动化任务的可信度（#1550）。
- **搜索不符合预期**：用户预期全局搜索可跨 Agent 检索，实际被限制在当前 Agent 范围（#1634）。

## 8. 待处理积压 ⚠️

以下 PR 均创建于 2026 年 4 月，更新停滞近 6 个月且已标记 `stale`，建议维护者**优先审查或明确关闭**：

1. [PR #1547](https://github.com/netease-youdao/LobsterAI/pull/1547) — 定时任务通知渠道回显修复（+2 行小改动，审查成本低）
2. [PR #1550](https://github.com/netease-youdao/LobsterAI/pull/1550) — “不通知”模式投递字段清理
3. [PR #1628](https://github.com/netease-youdao/LobsterAI/pull/1628) — 模型选择器 UI 重构（含多个 UX 修复，价值较高但可能与主线冲突）
4. [PR #1634](https://github.com/netease-youdao/LobsterAI/pull/1634) — 全局搜索 Bug 修复 + 搜索体验升级
5. [PR #1660](https://github.com/netease-youdao/LobsterAI/pull/1660) — 非 main agent 首页个性化

**健康度提示**：5 个 stale PR 均为内部成员（@gongzhi-netease）贡献且描述完善，长期积压可能反映代码审查吞吐不足或分支基线已大幅漂移，建议尽快逐一 triage（rebase / 合并 / 关闭），避免社区贡献者（如 #2766 的外部作者）因响应缓慢而流失。

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

# CoPaw 项目动态日报（2026-09-26）

## 1. 今日速览

CoPaw（[agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)）今日保持高活跃度：过去 24 小时新增/活跃 Issue 10 条（关闭 0 条），PR 更新 13 条（全部待合并，无合并/关闭记录），无新版本发布。社区贡献势头强劲——13 个活跃 PR 中有 6 个来自首次贡献者（first-time-contributor），且多个 PR 与近期 Issue 形成明确的“报告→修复”闭环（如 Markdown 表格滚动、grep 二进制过滤、Playwright 扩展参数）。整体呈现“Bug 集中暴露于会话上下文与渠道集成，社区修复响应迅速”的态势，但维护侧合并吞吐为零，积压风险正在累积。

## 2. 版本发布

无新版本发布，无 Releases 记录。

## 3. 项目进展

今日**无 PR 被合并、无 Issue 被关闭**。但待合并队列中修复类 PR 质量较高，形成多个 Issue↔PR 配对，一旦合并将显著改善稳定性：

- **#7989**（first-time-contributor）修复 Console 中 Markdown 表格超宽、横向滚动条沉底问题，表格限宽至 `min(60vh, 32rem)`，直接对应 Issue [#7924](https://github.com/agentscope-ai/QwenPaw/issues/7924)
- **#7988** 修复 `grep_search` 缺少二进制过滤导致读取内部 `history.db-wal`、污染会话状态的问题，对应 Issue [#7980](https://github.com/agentscope-ai/QwenPaw/issues/7980)
- **#7987** 为 Browser SDK 增加 `browser.ignore_default_args` 配置，可移除 Playwright 注入的 `--disable-extensions`，对应 Issue [#7984](https://github.com/agentscope-ai/QwenPaw/issues/7984)
- **#7983** 修复 QQ 官方 Bot 网关会话恢复后事件重投导致的重复消息处理，对应 Issue [#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946)
- **#7986** 修复自定义 OpenAI 兼容端点被静态上下文窗口表误匹配的问题（llama.cpp/vLLM 用户受益）
- **#7982** 修复原生 Gemini provider + thinking 模型第二轮 tool calling 报 `thought_signature` 缺失的 400 错误
- **#7985** 补齐 i18n 复数后缀 key，修复非英文语言下代码片段 chip 标签缺失

功能类 PR：**#7357**（聊天界面工具调用卡片可见性开关）、**#7359**（provider 级媒体内联上限）、**#7923**（tool_result blocks 保留期策略）、**#7542**（压缩后历史消息回滚分页）均有更新，持续推进中。

## 4. 社区热点

- **[#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)**（7 评论）：上下文压缩（context compaction）预算计算仅基于可见对话上下文而非完整 provider 请求，仍可能超出请求预算导致活跃回合失败。已持续讨论近 3 周（09-08 创建），是当前最活跃的 Issue，反映核心压缩机制的可靠性诉求。
- **[#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884)**（5 评论）：中文用户反馈压缩后刷新前端历史无法全量加载，情绪较激烈（“聊天记录多存点，做不到么？”），与 PR #7542 的滚动分页方案直接相关，是用户体验层面的强诉求。
- **[#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957)**（3 评论）：请求可手动停用/禁用预制模型和频道，反映用户对控制台“可裁剪性”的期待。
- **[#7948](https://github.com/agentscope-ai/QwenPaw/issues/7948)**（3 评论）：Web Console 设计缺陷破坏用户输入。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 状态 |
|---|---|---|
| 🔴 高 | [#7980](https://github.com/agentscope-ai/QwenPaw/issues/7980) `grep_search` 无二进制过滤，匹配内部 `history.db-wal`，导致会话状态污染与不可恢复的 doom loop | ✅ 已有 fix PR #7988 |
| 🔴 高 | [#7981](https://github.com/agentscope-ai/QwenPaw/issues/7981) `chat_with_agent` 前台超时后向调用方谎报“被用户中断”，父回合无最终答案 | ❌ 暂无 fix PR |
| 🟠 中 | [#7984](https://github.com/agentscope-ai/QwenPaw/issues/7984) Browser SDK 持久 profile 无法加载扩展（Playwright 注入 `--disable-extensions`） | ✅ 已有 fix PR #7987 |
| 🟠 中 | [#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946) QQ 官方 Bot 网关重连重投事件导致重复消息处理 | ✅ 已有 fix PR #7983 |
| 🟠 中 | [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) 上下文压缩仍可超出完整 provider 请求预算 | ❌ 暂无 fix PR |
| 🟡 低 | [#7924](https://github.com/agentscope-ai/QwenPaw/issues/7924) Console Markdown 表格超宽、滚动条不可达 | ✅ 已有 fix PR #7989 |
| 🟡 低 | [#7948](https://github.com/agentscope-ai/QwenPaw/issues/7948) Web Console 输入交互被破坏 | ❌ 暂无 fix PR |

另注意 PR #7982 揭示的 Gemini thinking 模型多轮 tool calling 必败问题，属上游协议适配缺陷，修复价值高。

## 6. 功能请求与路线图信号

- **历史记录回看/分页**：#7884（诉求）+ PR #7542（压缩消息回滚分页）+ PR #7923（存储保留策略）形成完整链条，很可能进入下一版本——这是当前用户痛点最集中的方向。
- **Console 可控性**：#7957（禁用预制模型/频道）+ PR #7357（工具调用卡片开关）+ PR #7956（设置流程与侧栏交互优化）共同指向“让界面更干净、更可定制”的路线。
- **Provider 灵活性**：PR #7359（媒体内联上限）、#7986（自定义端点上下文推断）、#7982（Gemini thought_signature）、Issue #7990（Aliyun Token Plan 缺 `thinking_param_style` 声明）表明模型接入层是持续投入方向。
- **Browser SDK 增强**：#7987 引入的 `ignore_default_args` 是首个针对浏览器指纹/扩展场景的配置化方案，暗示后续可能开放更多 Playwright 参数透传。

## 7. 用户反馈摘要

- **痛点 1：历史消息“消失”**（#7884）：压缩策略默认激进，普通用户感知为“聊天记录丢失”，对信任感伤害大。核心用户并非要求无限上下文，而是要求“翻回去能看到”。
- **痛点 2：会话状态被工具污染**（#7980）：agent 工具反噬自身状态（读取内部 DB 文件）且无法自愈，是自托管用户最担心的可靠性问题。
- **痛点 3：渠道集成的边缘场景**（#7946 QQ 重投、#7984 浏览器扩展）：将 CoPaw 作为长期运行的个人助手（fnOS 原生部署、持久浏览器 profile）的重度用户占比上升，对断线重连、会话持久化要求高。
- **痛点 4：界面噪音**（#7357、#7957、#7924）：日常聊天用户希望隐藏调试性信息（工具调用卡片、未使用的预制模型），实用主义倾向明显。
- **正面信号**：首次贡献者单日 6 个 PR 且多为高质量针对性修复，说明项目代码库可读性和贡献引导做得较好，社区健康度高。

## 8. 待处理积压

- **[#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)**（09-08 创建，18 天未关闭，7 评论）：上下文压缩预算问题影响活跃回合成败，属核心机制缺陷，建议优先排期修复方案。
- **PR 合并积压**：13 个 PR 全部处于待合并状态，包括 #7542（已提交 22 天）、#7357/#7359（已提交 30 天）、#7825（cron DOW 修复，已 9 天）。合并吞吐为零会导致贡献者流失风险，建议维护者集中 review。
- **[#7981](https://github.com/agentscope-ai/QwenPaw/issues/7981)**：`chat_with_agent` 超时误报问题尚无对应 PR，多 agent 编排场景下影响调用链可信度。
- **[#7948](https://github.com/agentscope-ai/QwenPaw/issues/7948)**：Console 输入交互被破坏，直接影响基础使用体验，暂无修复迹象，建议确认复现范围。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 —— 2026-09-26

## 1. 今日速览

今日 EasyClaw 仓库整体活跃度处于**低位平稳**状态。过去 24 小时内 Issues 与 PR 均无任何新增或更新（新开/活跃/关闭均为 0，PR 合并/关闭为 0），社区互动趋于静默。但项目并未停滞——今日发布了新版本 **v1.9.23（TK Copilot v1.9.23）**，围绕达人联盟样品明细下钻与滚动面板内边距修复进行了迭代，表明维护者仍以稳定的节奏推送功能优化与体验修复。综合来看，项目处于“低社区互动、持续交付”的健康区间，需关注社区参与度的长期走势。

## 2. 版本发布

### v1.9.23: TK Copilot v1.9.23
🔗 https://github.com/gaoyangz77/easyclaw/releases

**更新内容：**

- **功能增强**：新增达人联盟（Affiliate）样品明细下钻能力
  - 分页体验更清晰
  - 新增达人表现（creator performance）数据列
  - 导出功能更可靠
- **Bug 修复**：修复可滚动面板的内边距问题，确保内容留白（content insets）保持在滚动区域内部，避免视觉溢出

**破坏性变更**：Release Notes 未标注任何破坏性变更（Breaking Changes）。

**迁移注意事项**：属于常规小版本迭代（1.9.x 系列），预计可直接平滑升级，无需额外迁移操作。

## 3. 项目进展

- 今日无 PR 合并或关闭记录（待合并 0，已合并/关闭 0）。
- 尽管无 PR 流水数据，v1.9.23 的发布本身即是项目进展的体现：联盟样品分析维度的细化与 UI 细节修复持续推进，项目在数据分析功能深度上小幅前进。

## 4. 社区热点

- 今日无活跃 Issue 或 PR 讨论（0 条更新），**无社区热点**。
- 值得注意的是，新版本发布后 24 小时内尚无用户反馈涌入，建议观察未来 2-3 天是否有升级相关反馈出现。

## 5. Bug 与稳定性

- 今日**无新增 Bug 报告**（新开 Issue 为 0）。
- v1.9.23 中修复的滚动面板内边距问题为此前已知问题的闭环，且已随版本发布落地，无需跟踪 fix PR。

## 6. 功能请求与路线图信号

- 今日无新的功能请求提交。
- 从版本迭代方向推断：维护者当前聚焦于**联盟营销数据分析**（样品明细、达人表现指标、导出可靠性）这一主线，后续版本可能继续深化该方向的报表与下钻能力。此判断基于发布历史，今日无直接数据支撑。

## 7. 用户反馈摘要

- 今日 Issues 评论为 0 条，**无可用用户反馈数据**。
- 建议维护者在新版本发布后主动在相关渠道（如 Release 讨论区）征集升级反馈，弥补当前反馈通道的静默状态。

## 8. 待处理积压

- 今日数据显示 Issues 与 PR 更新均为 0，暂无法从当日数据识别长期未响应的积压项。
- **提醒**：若仓库存在历史遗留的开放 Issue/PR，建议维护者借 v1.9.23 发布契机进行一次 triage，避免社区互动持续走低影响项目健康度。

---

**健康度小结**：交付活跃（✅ 今日发版），社区活跃（⚠️ 互动为零），稳定性（✅ 无新增 Bug 报告）。总体判断：项目处于维护者单轮驱动阶段，建议加强社区运营以提升外部参与度。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*