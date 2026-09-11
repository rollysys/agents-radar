# OpenClaw 生态日报 2026-09-11

> Issues: 435 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-11 03:38 UTC

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

# OpenClaw 项目动态日报 · 2026-09-11

---

## 1. 今日速览

OpenClaw 今日保持高活跃度：Issues 更新 435 条（新开/活跃 237，关闭 198），PR 更新 500 条（待合并 243，已合并/关闭 257），关闭率与合并率均接近或超过 50%，表明维护者响应节奏健康、清理能力强。项目发布了 **v2026.6.35**（6 月 Extended Stable/LTS 线的最终版本），主线工作重心已转向 2026.9.x 的稳定性修复。今日热点集中在：SQLite/事件循环阻塞类性能问题、Windows 平台 Gateway 生命周期可靠性、消息通道（Telegram/Teams/Discord）消息丢失与内部上下文泄漏，以及一个大规模的插件分类体系建设（涉及 152 个捆绑插件的 catalog 重构）。

---

## 2. 版本发布

### v2026.6.35 — [openclaw 2026.6.35](https://github.com/openclaw/openclaw/releases)

这是 **2026 年 6 月 Extended Stable (LTS) 线的最终版本**。

**亮点：**
- **更安全的 Provider 与通道边界**：捆绑的 providers 和 channel adapters 现在会对不受信任的响应体做边界限制（bound untrusted response bodies），在高开销处理前拒绝超大输入，并在转换中保留安全恢复路径。

**迁移注意：** 作为 LTS 线收尾版本，后续安全/关键修复将不再进入 2026.6.x，建议 LTS 用户关注升级路径。注意社区已有多个关于跨版本升级的 P0 报告（见第 5 节），升级前建议先跑 `openclaw doctor`。

---

## 3. 项目进展

今日 PR 活动呈现“大重构 + 密集修复”双线推进：

**体系建设（长期架构）：**
- [#142760](https://github.com/openclaw/openclaw/pull/142760) — 为全部 **152 个捆绑插件分配单一用途分类**（涉及 88 个 manifest 变更），与 [#142759](https://github.com/openclaw/openclaw/pull/142759)（22 个产品分类 + 图标体系，对齐 ClawHub）构成插件市场 taxonomy 的两层落地。这是迈向插件市场/生态治理的基础设施。
- [#143313](https://github.com/openclaw/openclaw/pull/144313) — 八个 PR 组成的 **update-recovery 技术栈第 1 层**（worker 元数据与编译分离），呼应 #143752 打包激活中断问题，表明更新可靠性正在系统性重构。
- [#144626](https://github.com/openclaw/openclaw/pull/144626) — 引入**真实运维配置形态的测试语料库**（回应 #144599：缺自定义 model 行的 provider 崩掉 Gateway 的事故），测试策略明显加强。

**关键修复：**
- [#143501](https://github.com/openclaw/openclaw/pull/143501) (P0) — 沙箱修复：在 pinned fs 变更前授权规范化目标路径，堵住通过祖先符号链接修改 `.git` 等受保护路径的漏洞。**安全边界修复，优先级最高。**
- [#120979](https://github.com/openclaw/openclaw/pull/120979) (P1) — 断连 hook 准入取消，防止孤立请求占用 admission。
- [#144619](https://github.com/openclaw/openclaw/pull/144619)（已关闭）— 修复 embedding 配额错误被截断误判为临时限流的问题。
- [#142626](https://github.com/openclaw/openclaw/pull/142626)（automerge 已武装）— iMessage 桥恢复后打字指示/已读回执永久丢失的修复。
- [#142798](https://github.com/openclaw/openclaw/pull/142798) — 修复 Control UI `/plugins` 及插件详情路由 404（线上演练中发现）。
- [#142383](https://github.com/openclaw/openclaw/pull/142383) — Control UI 冷启动骨架屏统一协调，消除级联占位符闪烁，UI 打磨持续。

**整体评估：** 今日方向明确——插件生态 taxonomy、更新可靠性、沙箱安全三条主线均有实质性推进，属于“还债 + 建基”并重的健康迭代。

---

## 4. 社区热点

| Issue | 热度 | 核心诉求 |
|---|---|---|
| [#125626](https://github.com/openclaw/openclaw/issues/125626) OpenClaw 2026.8.1 beta feedback（24 评论，已关闭） | 🔥 最高 | 维护者组织的 beta 验收流程收尾，体现发布前社区众测机制运转良好 |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex PreToolUse hook relay 打满 CPU 阻塞 Gateway RPC（22 评论，P0） | 高 | Codex 集成在高频工具调用下 spawn 大量短命 `openclaw-hooks` 进程，各自占满 CPU |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) hook/tool 子进程泄漏产生僵尸进程（15 评论，P1） | 高 | 长时运行退化，与 #91009 同属进程生命周期管理缺陷族 |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) memory-core SQLite 表无保留策略、无限增长（13 评论） | 高 | 生产实例磁盘告警，`memory_index_chunks`/`memory_embedding_cache` 缺 eviction |
| [#49876](https://github.com/openclaw/openclaw/issues/49876) Cron 会话工具失败时输出幻觉内容（12 评论，已关闭） | 高 | **信任与安全问题**：用户收到编造的“成功”结果而非干净的失败 |
| [#141747](https://github.com/openclaw/openclaw/issues/141747) `<system-reminder>` 每轮注入 ~686 tokens 且无开关（10 评论） | 中高 | 成本敏感用户对不可关闭的运行时脚手架开销不满 |

**背后信号：** 社区最关心的三件事——进程/资源生命周期（CPU、僵尸、SQLite 增长）、消息可靠性（丢失/幻觉/泄漏）、以及 token 成本可控性。

---

## 5. Bug 与稳定性

### P0 / 发布阻塞级
1. **[#142585](https://github.com/openclaw/openclaw/issues/142585)** 2026.9.3 Doctor 拒绝迁移合法 legacy workspace/attestation 状态 — **升级迁移阻塞**，需 maintainer 关注。
2. **[#135776](https://github.com/openclaw/openclaw/issues/135776)** `openclaw update` 后精确锁版本的官方插件停留在旧版，导致 core/plugin 版本偏斜、Discord 加载失败 — 升级链路系统性问题。
3. **[#140162](https://github.com/openclaw/openclaw/issues/140162)** Windows：gateway restart 在 181s 超时后杀掉正在启动（甚至已就绪）的 gateway，且找不到手动前台实例 — **可造成完整停机**。
4. **[#91009](https://github.com/openclaw/openclaw/issues/91009)** Codex hook relay CPU 打满阻塞 RPC（见上）。**暂无对应 fix PR。**

### P1 / 严重
- **[#142476](https://github.com/openclaw/openclaw/issues/142476)** 2026.9.3 cron reaper 对 632-agent 网关的每个 agent 库做**同步 PRAGMA integrity_check**，每几分钟阻塞事件循环 14–76s。无 fix PR。
- **[#117262](https://github.com/openclaw/openclaw/issues/117262)** 3 个并发写句柄导致 ~33s 事件循环停顿（DEF-61），SQLite 锁竞争根因已定位。无 fix PR。
- **[#143640](https://github.com/openclaw/openclaw/openclaw/issues/143640)** memory-core 全量索引用单一 IMMEDIATE 事务发布，耗尽并发写 5s busy_timeout（今日新报）。无 fix PR。
- **[#136183](https://github.com/openclaw/openclaw/issues/136183)** 命令执行器 spawn ssh 卡在 banner 交换（2026.8.1 回归）。无 fix PR。
- **[#139847](https://github.com/openclaw/openclaw/issues/139847)** 回复运行期间到达的消息被丢弃（2026.9.2 回归）— 消息丢失类。
- **[#136360](https://github.com/openclaw/openclaw/issues/136360)** 内部运行时上下文载体 `<<<BEGIN_OPENCLAW_INTERNAL_CONTEXT>>>` 在 **Microsoft Teams** 通道泄漏为可见 user 回合 — 与 Slack/Telegram/Feishu/Discord 同类缺陷第 5 次复发，提示需要统一修复而非逐通道补丁。
- **[#143752](https://github.com/openclaw/openclaw/issues/143752)** 打包激活被中断可搁浅 canonical CLI — 已有 [#144313](https://github.com/openclaw/openclaw/pull/144313) 等八 PR 修复栈推进中 ✅。
- **[#143757](https://github.com/openclaw/openclaw/issues/143757)** Windows 计划任务默认配置（InteractiveToken + wscript）无法无人值守运行 gateway，与 #140162 构成 Windows 服务器场景的可靠性黑洞。

**模式总结：** SQLite 同步操作阻塞事件循环、进程泄漏、Windows 服务化，是当前三大稳定性主题，多数尚无 fix PR，值得维护者排期。

---

## 6. 功能请求与路线图信号

| 需求 | 状态 | 纳入可能性 |
|---|---|---|
| [#109657](https://github.com/openclaw/openclaw/issues/109657) 核心持久化 ingress drain 推广到 WhatsApp/Discord/Slack/Signal/iMessage（已关闭） | 已完成/推进 | ✅ 通道可靠性是明确路线图方向 |
| [#142740](https://github.com/openclaw/openclaw/pull/142740) 独立 OpenAI 兼容 STT 听写插件（faster-whisper/whisper.cpp/vLLM 自托管） | PR 进行中 | 高 — 已从大 PR 拆分提取，等 proof |
| [#107930](https://github.com/openclaw/openclaw/issues/107930) Node.js 版本要求变化时的升级体验改进（P0，ux-release-blocker） | 需产品决策 | 高 — 与 #135776/#140162 共同指向“升级体验”是下版本重点 |
| [#63550](https://github.com/openclaw/openclaw/issues/63550) memory-lancedb 多用户/分区隔离 | 长期开放 | 中 — 多租户场景需求持续存在 |
| [#79168](https://github.com/openclaw/openclaw/issues/79168) 工具输出内容级提示注入扫描 | 需安全评审 | 中 — 与 #143501 沙箱修复同属安全线，关注度高 |
| [#12855](https://github.com/openclaw/openclaw/issues/12855) 内置可配置自动更新 | 长期开放 | 中 — 与升级体验主题共振 |
| [#40786](https://github.com/openclaw/openclaw/issues/40786) backup CLI 支持 .gitignore 式排除 | 有 linked PR | 较高 |

**信号：** 插件市场 taxonomy（#142759/#142760）+ 升级可靠性八 PR 栈 + STT 插件化，勾勒出下一版本的主题轮廓：**生态可发现性与运维可靠性**。

---

## 7. 用户反馈摘要

**痛点（按提及频率）：**
- **长时运行退化**：僵尸进程累积（#97616）、SQLite 无限增长（#114612）、事件循环周期性阻塞（#142476）——重度自托管用户（数百 agent 规模）受影响最重。
- **消息可靠性**：Telegram 终态回复静默丢失（[#128971](https://github.com/openclaw/openclaw/issues/128971)）、回复运行中消息被丢弃（#139847）、内部上下文泄漏到 Teams（#136360）。
- **升级焦虑**：多个 P0 升级阻塞（#142585/#135776/#140162），Windows 服务器用户尤为煎熬。
- **成本不满**：每轮 ~686 token 的不可关闭 `<system-reminder>`（#141747）；web_search maxResults 硬编码为 5（#79384）。
- **信任问题**：cron 会话失败时输出幻觉内容（#49876）被明确称为 trust & safety 问题。

**满意点：**
- 维护者主导的 beta 验收流程（#125626）获得 24 条高质量反馈，社区参与度极高。
- 大量 PR 带 `status: 👀 ready for maintainer look` + `proof: sufficient` 标签，贡献流程规范化、机器人（clawsweeper/mantis/barnacle）自动化分流运转成熟。
- 632-agent 生产部署的存在本身说明有重度企业级用户在依赖该项目。

---

## 8. 待处理积压

以下高优先级 Issue 长期处于 `needs-maintainer-review` / `needs-product-decision`，且**无 fix PR**，建议维护者关注：

1. [#91009](https://github.com/openclaw/openclaw/issues/91009)（P0，6 月报，22 评论）— Codex hook CPU 风暴
2. [#97616](https://github.com/openclaw/openclaw/issues/97616)（P1，6 月报）— 僵尸进程泄漏
3. [#117262](https://github.com/openclaw/openclaw/issues/117262)（P1，8 月报）— SQLite 33s 停顿，根因已定位
4. [#114612](https://github.com/openclaw/openclaw/issues/114612)（P2，7 月报）— memory 表无限增长
5. [#95866](https://github.com/openclaw/openclaw/issues/95866)（P1，6 月报）— 强制重启丢弃 12 条在途回复（drain timeout 0ms）
6. [#121617](https://github.com/openclaw/openclaw/issues/121617)（P1）— 二次压缩被误判为终态失败，有 linked PR 但未合并
7. [#118839](https://github.com/openclaw/openclaw/issues/118839)（P1）— restart-recovery 回归在含修复的 beta 上复发

**PR 侧积压：** [#82950](https://github.com/openclaw/openclaw/pull/82950)（正则灾难性回溯挂起授权，5 月提交，P1）、[#116176](https://github.com/openclaw/openclaw/pull/116176)（Signal 端口不对齐，7 月提交，P1）长期 `needs proof`，存在修复价值与审查带宽错配。

---

**健康度小结：** 活跃度高、闭环率高、流程自动化成熟；主要风险在于 SQLite/进程生命周期类技术债的积压速度略快于修复速度，以及 Windows 与升级路径的可靠性欠账。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**数据基准日：2026-09-11**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**“深度使用驱动的工程化还债期”**：核心项目（OpenClaw、CoPaw、Hermes）日均 Issue/PR 更新量达数百条，用户已将其部署为 632-agent 生产网关、20+ profile 常驻系统等重度场景，暴露出的问题从功能缺失全面转向**可靠性、安全边界与成本可控性**。生态呈现明显的“1+N”格局：OpenClaw 作为事实上的引擎基座（EasyClaw、LobsterAI 等下游发行版直接锚定其版本），周边项目围绕多渠道接入（Telegram/飞书/微信/QQ/Discord）、记忆系统、插件市场做差异化。同时，**评审吞吐不足**成为多个项目（Zeroclaw、Hermes、NanoBot）的共同瓶颈，社区治理流程本身开始成为被改革的对象。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 合并/关闭 | Release | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 435（关 198） | 500（合/关 257） | 闭环率 ~50% | v2026.6.35 (LTS 收尾) | 🟢 优：高吞吐+高闭环，技术债积压略快于修复 |
| **CoPaw (QwenPaw)** | 22（关 7） | 41（合/关 16） | 闭环率 ~39% | v2.2.1-beta.2 | 🟢 良：Beta 密集迭代，发布当天修复回归 |
| **Hermes Agent** | 50（关 8） | 50（合/关 5） | 闭环率 ~10% | 无 | 🟡 中：输入端极健康，合并吞吐偏低，Desktop 回归频发 |
| **NanoBot** | 3（关 1） | 22（合/关 9） | 闭环率 ~41% | 无 | 🟢 良：响应链高效，待合并 13 条+多冲突需消化 |
| **Zeroclaw** | 50 | 50 | **零合并零关闭** | 无 | 🔴 风险：50 PR 积压、S0 安全无排期、治理流程阻塞交付 |
| **LobsterAI** | 0 | 13（合/关 10） | 高 | 无 | 🟢 良：单核心开发者高强度推进，贡献者集中度风险 |
| **EasyClaw** | 0 | 0 | — | **4 版本/日** (v1.9.11–14) | 🟢 良：维护者驱动快迭代，社区侧静默 |
| **Moltis** | 0 新开（关 2） | 3 合并 | 高 | 无 | 🟢 稳：Bug 清理闭环完整，互动偏低 |
| **ZeptoClaw** | 3 关闭 | ~19 | 高 | 无 | 🟢 良：安全报告 10 天全闭环，响应典范 |
| **NanoClaw** | 3（关 2） | 6（合/关 3） | 高 | 无 | 🟢 良：安装体验打磨期，当日修复 |
| **IronClaw** | 1 | 8（0 合并） | 低 | 无 | 🟡 中：自动化为主，review 周期偏长（PR 挂 5 天+） |
| **PicoClaw** | 2（关 1） | 7（0 合并） | 零 | 无 | 🟡 中低：5 个 Dependabot PR 挂起+stale，维护响应不足 |
| NullClaw / TinyClaw | 0 | 0 | — | — | ⚪ 无活动 |

---

## 3. OpenClaw 在生态中的定位

**优势：**
- **规模断层领先**：日均 900+ 条 Issue/PR 更新，是第二梯队项目的 10–20 倍；632-agent 级生产部署证明企业级可用性。
- **生态基座地位**：EasyClaw（升级至 v2026.9.3）、LobsterAI（适配 v2026.8.1，今日 10 个 PR 全部为上游适配）将其作为引擎栈，形成“内核+发行版”的类 Linux 发行模式。
- **流程自动化成熟**：clawsweeper/mantis/barnacle 机器人分流、`proof: sufficient` 标签体系、beta 众测机制（#125626 收 24 条高质量反馈）。
- **前瞻布局**：152 插件分类 taxonomy（#142760/#142759）、update-recovery 八 PR 修复栈、运维配置测试语料库（#144626），在“建基础设施”而非仅“修 bug”。

**技术路线差异**：OpenClaw 走“广度优先”——152 个捆绑插件、全通道适配（Telegram/Teams/Discord/Slack/iMessage/WhatsApp/Signal/飞书）；NanoBot/CoPaw 走“开箱即用集成体验”；Zeroclaw 走重治理/安全契约路线（RFC Rev 8、canonical principals）但执行受阻；Moltis 聚焦外部智能体互联（AGY 流式接入）。

**短板**：SQLite 事件循环阻塞（#142476：632-agent 下每几分钟阻塞 14–76s）、进程泄漏（#97616）、Windows 服务化（#140162/#143757）、升级迁移 P0（#142585/#135776）——重度自托管与 Windows 用户欠账明显。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **消息/任务可靠性（防静默失败）** | OpenClaw、Zeroclaw、Hermes、CoPaw、NanoBot | cron 失败输出幻觉内容（OpenClaw #49876，被定性 trust & safety）、后台任务异常被吞（NanoBot #5429）、不完整终态误报成功（Zeroclaw #9421）、斜杠命令静默丢 prompt（Hermes #107387）——**“出错要报错，不要悄悄换行为”是跨项目最强共识** |
| **多渠道消息完整性** | OpenClaw、Zeroclaw、Hermes、CoPaw、PicoClaw、EasyClaw | Telegram/Teams 消息丢失与上下文泄漏（OpenClaw #136360 第 5 次复发）、回复期间消息被丢弃、飞书会话卡死（CoPaw #7534）、QQ 401 鉴权失败（PicoClaw #3349） |
| **记忆系统可控性与成本** | OpenClaw、NanoBot、CoPaw、LobsterAI | memory 表无限增长（OpenClaw #114612）、SOUL.md 无上限膨胀（NanoBot #5630 回归）、为记忆/摘要指定轻量模型（CoPaw #7664）、压缩前记忆保存 opt-in（LobsterAI #2643）、不可关闭的 ~686 token system-reminder（OpenClaw #141747） |
| **沙箱与凭证安全** | OpenClaw、Zeroclaw、CoPaw、ZeptoClaw、Hermes | symlink 逃逸（OpenClaw #143501 已修、Zeroclaw #9247 未修）、delegate 绕过白名单（Zeroclaw #8279）、Windows 沙箱突破（CoPaw #7672）、WebSocket token 泄露（ZeptoClaw #653–656） |
| **Windows / 升级路径质量** | OpenClaw、Zeroclaw、CoPaw、Hermes、LobsterAI | Zeroclaw 74 个 Windows 测试失败+CI 仅 Linux、CoPaw Windows subAgent 全超时、Hermes Desktop 打包回归、OpenClaw 升级迁移 P0 |
| **长驻/生命周期管理** | NanoClaw、Hermes、Zeroclaw、OpenClaw | 硬编码 30 分钟容器上限冷杀本地慢模型（NanoClaw #3643）、Telegram 轮询 2 天耗尽端口（Hermes #107880）、Web 退出即中断任务（Zeroclaw #8559） |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | CoPaw | Hermes | Zeroclaw | 其他 |
|---|---|---|---|---|---|---|
| **功能侧重** | 全通道+插件市场+LTS 线 | 多渠道+Dream 记忆+WebUI | Console 体验+记忆（ReMe）+Hub 多租户 | Desktop+Skills 生态+多 profile | Eval 体系+安全契约治理 | Moltis：外部智能体互联；ZeptoClaw：面板安全；NanoClaw：安装链路 |
| **目标用户** | 重度自托管/企业（数百 agent） | 个人助手自托管者 | 个人→团队过渡（阿里系生态） | 桌面端重度用户（20+ profile） | 工程治理导向团队 | LobsterAI/EasyClaw：OpenClaw 下游发行版用户 |
| **架构** | TS、多进程 Gateway、SQLite、152 插件 | Python、AgentLoop、多渠道桥 | 阿里 QwenPaw 底座、OpenCode API 适配 | 桌面打包+gateway+profile 复用 | Rust 倾向（签名/审计）、RFC 治理 | ZeptoClaw：Rust+React 19 |

关键结构性差异：**下游发行版（LobsterAI/EasyClaw）承担了 OpenClaw 的桌面化/本地化最后一公里**，其全部工作（今日 10+4 个发布）都是上游适配，说明 OpenClaw 的升级节奏直接影响整个子生态的稳定性。

---

## 6. 社区热度与成熟度分层

- **第一梯队·规模成熟（OpenClaw）**：社区自治程度最高，但进入“技术债偿还期”——SQLite/进程生命周期类 P0/P1 多数无 fix PR。
- **第二梯队·快速迭代（CoPaw、Hermes、NanoBot）**：功能与修复并行，Beta 节奏密集；CoPaw 的 subAgent 故障簇、Hermes 的 Desktop 回归是各自的质量软肋。
- **第三梯队·投入充足但交付受阻（Zeroclaw）**：50 活跃 PR + 零合并，治理流程摩擦（RFC #10549 改革诉求）与交付管道停滞互为因果，S0 安全无排期是最大风险。
- **稳定巩固层（Moltis、ZeptoClaw、NanoClaw、IronClaw）**：Bug 闭环质量高（ZeptoClaw 安全报告 10 天全闭环为典范），但社区互动面窄、贡献者单一化风险（LobsterAI 尤甚）。
- **低活跃/观望层（PicoClaw、NullClaw、TinyClaw）**：PicoClaw 的 stale 标签+零合并信号值得贡献者警惕。

---

## 7. 值得关注的趋势信号

1. **“可靠性 > 功能”成为用户投票方向**：跨项目最热 Issue 几乎全是静默失败、消息丢失、幻觉式成功报告——智能体产品下一个竞争维度是**失败语义的可信度**，而非能力堆叠。
2. **Token 成本政治化**：不可关闭的 system-reminder、默认开启的记忆写入、fallback 静默换付费 provider（Hermes #107874）表明：**每一笔隐性 token 消耗都必须可审计、可关闭**。opt-in 设计（LobsterAI #2643）正成为默认范式。
3. **本地/慢模型用户成为被忽视的大市场**：NanoClaw 30 分钟硬上限、Hermes Dream 超时、CoPaw Hub 无法连本地模型（#7445）——生命周期与超时参数**必须为本地推理场景可配置**。
4. **安全从“响应式”走向“默认安全”**：symlink 逃逸、delegate 越权、token 明文比较在多个项目同期爆发；ZeptoClaw 的票据化认证和 OpenClaw 的响应体边界限制代表正确方向——**沙箱边界需要统一修复而非逐通道/逐工具补丁**。
5. **“内核+发行版”生态结构成形**：OpenClaw 的升级可靠性问题会级联传导至下游发行版，上游的迁移稳定性（#142585 类 P0）实质上是生态级公共品。
6. **治理流程本身成为瓶颈与改革对象**：Zeroclaw 的 RFC 简化提案、OpenClaw 的 automerge/proof 标签体系对比表明，**评审吞吐量将像 CI 一样成为需要工程化管理的资源**。

**对开发者的行动建议**：优先建设失败可观测性（无静默吞错）、生命周期参数全量可配置、安全边界集中式设计、token 消耗仪表盘——这四项是当前社区反馈中投入产出比最高的差异化机会。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-09-11

## 1. 今日速览

今日 NanoBot 处于高度活跃的迭代状态：过去 24 小时内有 **22 条 PR 更新**（13 条待合并、9 条已合并/关闭）和 **3 条 Issue 更新**（2 新开、1 关闭），无新版本发布。开发主线集中在 WebUI 打磨、后台任务可靠性（AgentLoop 异常处理）、Dream 记忆系统稳定性以及多渠道（Discord/Telegram/微信）体验修复。多个 fix 与 Issue 形成闭环（如 #5719→#5720、#5429→#5724），显示问题响应链条运转高效。整体健康度良好，但待合并 PR 数量偏多，评审压力值得注意。

## 2. 版本发布

无新版本发布。当前大量修复与功能持续向 main 分支合入，预计将汇聚为下一个小版本。

## 3. 项目进展

今日关闭/合并的 9 条 PR 中，重点包括：

- **fix(discord): 压缩通知原地更新**（[PR #5720](https://github.com/HKUDS/nanobot/pull/5720)，关闭 [Issue #5719](https://github.com/HKUDS/nanobot/issues/5719)）— 自动上下文压缩不再发送两条独立消息打扰用户，改为单条消息原地更新。
- **fix(mcp): OAuth token 过期自动刷新**（[PR #5573](https://github.com/HKUDS/nanobot/pull/5573)）— 持久化 token 过期时间与授权服务器元数据，刷新可跨网关重启存活，显著提升 MCP 长连接稳定性。
- **fix(tui): 展示实测请求上下文**（[PR #5469](https://github.com/HKUDS/nanobot/pull/5469)）— TUI 底栏显示真实的 prompt 上下文、缓存命中率与生成速率，而非累计估算值。
- **fix(telegram): 渠道内命令拼写适配**（[PR #5711](https://github.com/HKUDS/nanobot/pull/5711)）— 解决下划线/连字符命令名不一致问题，且不污染核心命令命名。
- **WebUI 一批体验优化**：侧边栏层级与选中反馈重构（[PR #5722](https://github.com/HKUDS/nanobot/pull/5722)）、聊天元素对齐与压缩通知分组修复（[PR #5725](https://github.com/HKUDS/nanobot/pull/5725)）、独立页面宽度统一（[PR #5723](https://github.com/HKUDS/nanobot/pull/5723)）。

总体看，今日合入内容以**多渠道体验 + WebUI 视觉一致性 + 长时运行可靠性**为主，属于稳定积累型进展。

## 4. 社区热点

- **[Issue #5726](https://github.com/HKUDS/nanobot/issues/5726)（新开，bug）**：无头服务器上 WebUI 初始密码不明确。用户在无 JS 终端启动后被登录密码困住，暴露出 headless 部署引导文档/日志输出的缺失。**已有快速响应**：[PR #5727](https://github.com/HKUDS/nanobot/pull/5727) 补充了 `channels.websocket.tokenIssueSecret` 的文档说明。
- **[Issue #5429](https://github.com/HKUDS/nanobot/issues/5429)（持续活跃，8/18 至今）**：`AgentLoop.schedule_background()` 回调仅 `set.discard`，从不调用 `task.result()`，后台任务异常被静默吞掉。这是可靠性核心痛点，今日出现对应修复 [PR #5724](https://github.com/HKUDS/nanobot/pull/5724)，实现异常检索与日志记录。

## 5. Bug 与稳定性

按严重程度排列：

1. **后台任务异常静默丢失**（[Issue #5429](https://github.com/HKUDS/nanobot/issues/5429)）— 影响会话归档、标题生成等关键路径，且难以排查。✅ 已有 fix：[PR #5724](https://github.com/HKUDS/nanobot/pull/5724)（待合并）。
2. **内部模型调用超时导致 Dream 记忆循环失败**（[PR #5730](https://github.com/HKUDS/nanobot/pull/5730)，待合并）— 非流式请求超过 120s HTTP 超时并耗尽 300s 总限制。含回归性质，建议优先评审。
3. **Dream 记忆文件无限增长**（[PR #5630](https://github.com/HKUDS/nanobot/pull/5630)，标记 regression，待合并）— #5622 的副作用移除了 8000 字符大小上限，SOUL.md / MEMORY.md 可无限膨胀并注入每次请求。回归类，需尽快合入。
4. **微信/企微媒体文件名不确定性**（[PR #5729](https://github.com/HKUDS/nanobot/pull/5729)）— 使用 Python 内置 `hash()`（跨进程 PYTHONHASHSEED 随机），改用 SHA1 摘要。中等严重性。
5. **Headless 初始密码不清**（[Issue #5726](https://github.com/HKUDS/nanobot/issues/5726)）— 文档问题，[PR #5727](https://github.com/HKUDS/nanobot/pull/5727) 已补文档。

## 6. 功能请求与路线图信号

待合并 PR 中透出的下一版本可能特性：

- **WebUI 渠道配置流程重设计**（[PR #5356](https://github.com/HKUDS/nanobot/pull/5356)，NAN-112）— 分组目录、安装与激活解耦，属于较大的 UX 投入，有官方规划编号，纳入概率高。
- **模型 Provider 删除控件**（[PR #5352](https://github.com/HKUDS/nanobot/pull/5352)）— 含被引用保护与本地化反馈。
- **Cron 任务增强**（[PR #5620](https://github.com/HKUDS/nanobot/pull/5620)）— 可配置投递目标 + 批量归档生命周期。
- **完成提示音**（[PR #5602](https://github.com/HKUDS/nanobot/pull/5602)，关闭 #5524）— opt-in 本地偏好。
- **Archive 提示词工作区覆盖**（[PR #5702](https://github.com/HKUDS/nanobot/pull/5702)）— 与 Dream 提示词定制机制对齐，属记忆系统可配置化方向。
- **流式性能优化**（[PR #5728](https://github.com/HKUDS/nanobot/pull/5728)）— 降低长回复的 CPU 增长，本地部署用户受益明显。

信号：项目正朝“开箱即用的多渠道个人 AI 助手 + 可调记忆系统”方向持续演进。

## 7. 用户反馈摘要

- **Headless/服务器部署用户**（#5726）默认以无 JS 链接启动、密码指引缺失，部署首体验受阻——反映自托管用户对清晰引导的强烈需求。
- **Discord 用户**（#5719）对内部维护消息打断聊天不满，即使已关闭进度消息；讨论结论保留了压缩生命周期提示但改为单条原地更新，体现了“控制权归用户、关键状态保留”的折中。
- **长任务/慢模型用户**（#5730 背景）在 Dream 记忆循环中遭遇反复超时，说明社区存在使用大上下文慢模型的实际场景。
- **深度集成开发者**（#5429）依赖后台任务行为做扩展，对异常静默丢失的工程化细节提出高质量反馈。

## 8. 待处理积压

- **[Issue #5429](https://github.com/HKUDS/nanobot/issues/5429)**：开放近一个月，今日才有 fix PR（#5724），建议加速评审合入。
- **多个标 `conflict` 的待合并 PR**：[#5352](https://github.com/HKUDS/nanobot/pull/5352)、[#5641](https://github.com/HKUDS/nanobot/pull/5641)、[#5620](https://github.com/HKUDS/nanobot/pull/5620)、[#5702](https://github.com/HKUDS/nanobot/pull/5702)、[#5698](https://github.com/HKUDS/nanobot/pull/5698)、[#5630](https://github.com/HKUDS/nanobot/pull/5630)、[#5602](https://github.com/HKUDS/nanobot/pull/5602) — 均存在合并冲突，其中 #5630 涉及回归（记忆文件无上限），建议优先 rebase。
- **大 PR #5356**（渠道配置重构，8/12 开放近一个月）体量大且持续更新，需维护者投入评审带宽，避免长期悬置。

---
*数据来源：GitHub API（过去 24 小时窗口）。链接以 `HKUDS/nanobot#编号` 形式指向对应 Issue/PR。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 — 2026-09-11

## 1. 今日速览

Zeroclaw 今日整体活跃度处于**高位但推进受阻**状态：过去 24 小时 Issues 更新 50 条、PR 更新 50 条，社区讨论热度不减，但**零关闭、零合并、零版本发布**，交付管道基本停滞。待合并 PR 累计 50 个（含多个 size:XL 核心重构），评审瓶颈明显，大量 PR 处于 `needs-author-action` 状态长期悬置。安全类问题（S0/S1 级）持续堆积且多数仍处 OPEN 状态，是当前项目健康度的主要风险点。

## 2. 版本发布

今日无新版本发布。上一版本 v0.8.3 的遗留问题（三套并行签名机制冗余）仍在讨论中，见 [Issue #9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101)。

## 3. 项目进展

**今日无任何 PR 被合并、无 Issue 被关闭**，项目代码层面零推进。但从活跃讨论的 PR 可以看出当前工作主线：

- **Eval 体系建设**（堆叠 PR 链）：[#9214](https://github.com/zeroclaw-labs/zeroclaw/pull/9214) live 执行模式 → [#9217](https://github.com/zeroclaw-labs/zeroclaw/pull/9217) 异步 Grader → [#9219](https://github.com/zeroclaw-labs/zeroclaw/pull/9219) workspace/预算 grader → [#9220](https://github.com/zeroclaw-labs/zeroclaw/pull/9220) 可比 run receipt → [#9244](https://github.com/zeroclaw-labs/zeroclaw/pull/9244) 隔离内存种子评测。这是一条完整的测试基础设施重构栈，但全部待合并。
- **安全主线**：[#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) 插件 egress 授权、[#10248](https://github.com/zeroclaw-labs/zeroclaw/pull/10248) canonical principals 身份契约（RFC #7141 Rev 8）、[#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745)/[#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) 知识图谱与会话工具的 per-agent 归属隔离。
- **关键修复待审**：[#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) cron 任务 wall-clock 超时（对应 #9191）、[#8955](https://github.com/zeroclaw-labs/zeroclaw/pull/8955) Telegram 媒体组合并（对应 #5514）、[#10262](https://github.com/zeroclaw-labs/zeroclaw/pull/10262) daemon reload RPC 连接修复。

**评估：评审吞吐量严重不足，交付进度明显滞后于开发进度。**

## 4. 社区热点

1. **[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)（19 评论）Windows 74 个测试失败**：Unix-only 测试命令、路径语义、控制台编码（cp936）问题，CI 仅跑 Linux 导致未被捕获。配套请求 [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) 要求三平台测试矩阵。诉求：Windows 用户被系统性忽视，希望 CI 覆盖公平化。
2. **[#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101)（9 评论）发布签名机制整合**：v0.8.3 中 cosign / GitHub attestation / slsa-github-generator 三套机制因两个 PR 相隔 26 小时各自落地而并存，浪费 CI 时间。诉求：工程治理与发布流程收敛。
3. **[#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549)（8 评论）RFC 流程简化提案**：取消强制讨论窗口、REVISE 即停止当前快照。配合 [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366)（7 评论）的 PR 评审证据规则修订，反映社区对**治理流程本身摩擦过大**的集中不满——这可能与今日零合并直接相关。
4. **[#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)（8 评论）Telegram 多图消息拆分成多个回合**：用户体验痛点，已有 fix PR #8955 待合并。

## 5. Bug 与稳定性（按严重程度排列）

**S0 — 安全/数据风险：**
- [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) `delegate` 工具绕过父级工具白名单，子代理可调用被策略排除的工具。**尚无 fix PR。**
- [#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) Shell 工具可通过 symlink 逃逸 workspace 边界。**尚无 fix PR。**

**S1 — 工作流阻断：**
- [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) Web 端退出聊天窗口即中断 agent 任务（in-progress）
- [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) `web_fetch` 对 gzip/brotli 压缩响应返回乱码（in-progress）
- [#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) ACP 失败回合在切换会话后消失（in-progress）
- [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) 不完整的终态响应被上报为成功（in-progress）
- [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) Cron agent 任务无超时，锁仅在进程启动时清理 —— **已有 fix PR [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320)**

**安全审计系列（@belumume，p1）：**
- [#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393) Bluesky/Reddit 渠道无发送者鉴权
- [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) 紧急停止是 CLI 专属状态文件，runtime 不读取——即 e-stop 实际失效
- [#9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391) 命令审计日志默认启用但什么都不写

**S2 及其他：** [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) 高熵检测器误杀 Solana 钱包地址且配置开关在渠道路径无效；[#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) config flush 可覆盖并发写入；[#8800](https://github.com/zeroclaw-labs/zeroclaw/issues/8800) Windows 僵尸进程导致端口占用、新 daemon 启动失败。

## 6. 功能请求与路线图信号

- **CI 平台矩阵**（[#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)）：与 #7462 强关联，被接受（accepted），很可能进入下一版本 CI 配置。
- **RFC 流程改革**（[#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549)）：若通过将显著加快合并节奏，与当前 50 PR 积压形成呼应，属高优先治理项。
- **音频标记支持**（[#9089](https://github.com/zeroclaw-labs/zeroclaw/issues/9089)）：`[IMAGE:]` 已有、`[AUDIO:]` 缺失，是低成本高价值的多模态补全项。
- **Eval 体系 PR 链**（#9214–#9244）：体量最大的在建特性，一旦评审解冻将成为下版本主体。
- **Signal Note to Self 支持**（PR [#9326](https://github.com/zeroclaw-labs/zeroclaw/pull/9326)）：新渠道能力扩展信号。

## 7. 用户反馈摘要

- **多任务/后台运行是核心痛点**：Web 用户反复报告“退出聊天窗口 agent 就停”（#8559）、“中途停止导致上下文丢失”（#8794），说明用户期望的是**长时驻留的助手**而非会话式 chat。
- **Windows 支持质量差**：74 个测试失败（#7462）、端口僵尸（#8800）等，Windows 用户社区（中文环境）贡献了大量高质量报告但缺乏响应。
- **加密/Web3 场景被安全机制误伤**：Solana 用户无法获取钱包地址（#9486），高熵脱敏需要更智能的白名单。
- **自托管 LLM 用户**遇到 JIT 加载失败（#9177，Qwen3.6）、context meter 计量失真（#9332）等问题。
- **正面信号**：外部审计式 Issue（@belumume 系列）引用行号逐一核对 HEAD，显示社区对代码质量的深度投入和信任基础。

## 8. 待处理积压（维护者关注建议）

| 条目 | 状态 | 关注理由 |
|---|---|---|
| [Issue #6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | **blocked，2026-04-27 起 4.5 个月** | Nextcloud Talk bot API 修复被阻塞，最长期未解 Issue 之一 |
| [Issue #5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | in-progress，5 个月 | fix PR #8955 自 7 月起待合并 |
| [PR #9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) | **do-not-merge + needs-author-action** | 凭证轮换修复，涉及多 provider 安全行为，需裁决方向 |
| [PR #9220 / #9219 / #9217](https://github.com/zeroclaw-labs/zeroclaw/pull/9220) | 堆叠依赖待审 | 长链堆叠 PR 底部不合并会阻塞整条 eval 主线 |
| [Issue #8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) / [#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) | accepted，无 fix PR | 两个 S0 安全问题，建议优先排期 |
| [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | in-progress，3 个月 | Windows 测试质量，社区参与度最高的 Issue |

**健康度小结**：开发投入充足（50+ 活跃 PR）、社区热情高，但**评审与合并吞吐接近零**，且 S0 安全问题无修复排期，建议维护者优先解决 RFC #10549 提出的流程摩擦，释放积压的交付管道。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-09-11）

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去 24 小时共 50 条 Issue 更新（新开/活跃 42，关闭 8）和 50 条 PR 更新（待合并 45，合并/关闭仅 5），社区贡献 pipeline 充裕但合并吞吐偏低，积压值得关注。无新版本发布。今日焦点集中在 **Desktop 端稳定性**（插件加载崩溃、UI 变砖）、**Telegram 长连接端口耗尽**（一日内出现两个竞争性修复 PR）以及 **Skills 体验增强**（skill picker、/skills 开关命令）。多个安全/成本相关 bug（fallback_model 静默吸收凭证错误、profiled webhook 串配置）已关闭，显示维护团队在系统性清障。

## 2. 版本发布

今日无新 Release。近期版本 0.21.x 仍是当前基线，多个 Issue 针对 0.21.0 升级后的回归（如 #103363 schema 迁移问题）。

## 3. 项目进展

今日合并/关闭的 PR 数量较少（5 条），但方向明确：

- **Profiled webhook 越权回复修复关闭**（Issue [#65939](https://github.com/NousResearch/hermes-agent/issues/65939) CLOSED）：修复了 `/p/<profile>/` webhook 回复可能走错 profile 适配器的问题，属于安全边界（sweeper:risk-security-boundary）类修复落地。
- **`/model --global` 跨 profile 覆盖默认配置修复**（Issue [#107860](https://github.com/NousResearch/hermes-agent/issues/107860) CLOSED）：当日报告、当日修复，响应速度快。
- **Bedrock 区域推理配置切换失败修复**（Issue [#41296](https://github.com/NousResearch/hermes-agent/issues/41296) CLOSED）：`_bedrock_region` 未设置导致 jp.*/eu.*/apac.* 模型不可用的问题解决。
- **多 profile 密钥作用域丢失修复**（Issue [#102041](https://github.com/NousResearch/hermes-agent/issues/102041) CLOSED）：multiplex 模式下 cron 运行后 secret 全进程失效——高危害 bug 关闭。
- **浅克隆更新检查 573MB 传输问题修复**（Issue [#105666](https://github.com/NousResearch/hermes-agent/issues/105666) CLOSED）。

总体看：待合并 45 个 PR 中高质量修复密度高（见第 5 节），合并节奏是当前瓶颈。

## 4. 社区热点

- **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index watchdog（193 评论）**：自动化巡检显示 Skills Hub 索引陈旧（29.8h，超 26h 限值），`skills-index.yml` cron 重建链路疑似持续异常。长期高讨论量说明 Skills 文档站可靠性是社区核心关切，且该问题反复出现。
- **[#103375](https://github.com/NousResearch/hermes-agent/issues/103375) Bot tiles 无限重连（7 评论）**：20+ profile 场景下后台后端池被饿死，甚至为已隐藏的 bot 反复拉起后端。反映重度多 profile 用户的资源管理诉求。
- **[#107387](https://github.com/NousResearch/hermes-agent/issues/107387) Skill 斜杠命令静默丢 prompt（6 评论）**：`/grilling` 等命令打印 Loading 后无任何动作、无报错——静默失败类 bug 一贯引发高讨论。
- **[#106009](https://github.com/NousResearch/hermes-agent/issues/106009) / [#107876](https://github.com/NousResearch/hermes-agent/issues/107876) Desktop UI 导航失效**：侧边栏零宽、顶栏按钮重叠导致应用“变砖”，情绪化措辞（"BRICKED"）反映用户挫败感强。
- **PR 竞争现象**：Issue [#107880](https://github.com/NousResearch/hermes-agent/issues/107880)（Telegram TIME_WAIT 端口耗尽）一天内吸引两个独立修复 PR（[#107892](https://github.com/NousResearch/hermes-agent/pull/107892) Darwin-only vs [#107897](https://github.com/NousResearch/hermes-agent/pull/107897) non-Windows），后者明确按 claim 流程操作——社区贡献协作机制在运转但需维护者裁决。

## 5. Bug 与稳定性（按严重度）

**P1**
- [#107721](https://github.com/NousResearch/hermes-agent/issues/107721) Desktop 更新后所有运行时插件加载失败（"Cannot convert undefined or null to object"），连续两个 build 复现，Windows 打包版全插件不可用。⚠️ 暂无针对性 fix PR。
- [#103375](https://github.com/NousResearch/hermes-agent/issues/103375) 多 profile 桌面端后端池无限重连饿死。⚠️ 暂无 fix PR。
- [#79859](https://github.com/NousResearch/hermes-agent/issues/79859) Desktop 语音对话 OpenAI TTS 仍为整文件延迟播放，无低延迟流式/barge-in。⚠️ 暂无 fix PR。
- [#103363](https://github.com/NousResearch/hermes-agent/issues/103363) 0.21.0 升级后 Telegram topic-rename 静默失效（schema v2→v3 迁移未触发）。⚠️ 暂无 fix PR。

**P2**
- [#107874](https://github.com/NousResearch/hermes-agent/issues/107874) `fallback_model` 静默吸收 `missing_api_key`，把请求路由到其他付费 provider——成本风险。今日新报，暂无 fix。
- [#107880](https://github.com/NousResearch/hermes-agent/issues/107880) Telegram 轮询 ~2 天耗尽 macOS 临时端口。✅ 已有两个竞争 fix PR（#107892 / #107897）。
- [#107894](https://github.com/NousResearch/hermes-agent/pull/107894) 插件 hook 槽超时后永久锁死。✅ 有 fix PR。
- [#107731](https://github.com/NousResearch/hermes-agent/pull/107731) 大窗口陈旧 tool results 随每请求重发（性能）。✅ 有 perf PR。
- [#80625](https://github.com/NousResearch/hermes-agent/issues/80625) SSH 远程后端在 Fish shell 下失败。仍开放。
- [#106009](https://github.com/NousResearch/hermes-agent/issues/106009) / [#107876](https://github.com/NousResearch/hermes-agent/issues/107876) Desktop UI 布局损坏。⚠️ 暂无 fix PR。

**P3 值得关注**
- [#90782](https://github.com/NousResearch/hermes-agent/issues/90782) delegate 后环境快照泄漏 `HERMES_DELEGATED_CHILD_CONTEXT`，破坏父会话 kanban CLI。
- [#103355](https://github.com/NousResearch/hermes-agent/issues/103355) 插件上下文引擎下压缩预算不复位，长轮次死于 max_attempts。
- [#107854](https://github.com/NousResearch/hermes-agent/issues/107854) Win11 25H2 默认浏览器检测读取过时的 `UserChoice` 注册表键。

## 6. 功能请求与路线图信号

- **Skill picker / launcher**：Issue [#107890](https://github.com/NousResearch/hermes-agent/issues/107890) 提出当日，PR [#107896](https://github.com/NousResearch/hermes-agent/pull/107896) 同日实现——issue→PR 闭环极快，大概率近期合入。
- **Skills 开关命令**：PR [#107891](https://github.com/NousResearch/hermes-agent/pull/107891)（核心成员 @teknium1 提交，salvage #36691）+ 长期 PR [#36691](https://github.com/NousResearch/hermes-agent/pull/36691)，核心团队亲自推动，纳入下版本可能性高。
- **Gateway 配置热重载**：Issue [#48693](https://github.com/NousResearch/hermes-agent/issues/48693)（6 月提出，持续活跃）——用户反复要求的运维级功能，尚无 PR，建议排期。
- **IM bot 一键引导**：Issue [#105683](https://github.com/NousResearch/hermes-agent/issues/105683) 降低 Feishu/Telegram 接入门槛，与平台扩张方向一致。
- **Secret 体系契约澄清**：Issue [#107700](https://github.com/NousResearch/hermes-agent/issues/107700) 指出双 secret 系统文档混淆，配套安全/认证类修复密集，可能是近期重构方向。

## 7. 用户反馈摘要

- **痛点集中在 Desktop**：更新后插件全挂（#107721）、UI 变砖（#107876）、侧边栏消失（#106009）、SSH+Fish 不可用（#80625）——桌面端打包质量与回归测试是最大不满来源。
- **静默失败是反复出现的投诉模式**：斜杠命令无响应（#107387）、topic rename 停摆（#103363）、fallback 换 provider（#107874）——用户要求“出错要报错，不要悄悄换行为”。
- **重度用户场景暴露设计边界**：20+ profile（#103375）、1M token 窗口（#107731）、两天长驻 Telegram（#107880）显示核心用户已将 Hermes 用作生产级常驻系统。
- **成本敏感**：多个 bug 涉及隐性付费消耗（#87739 /hatch 重试烧图、#107874、#105666 573MB 更新流量）。
- **正面信号**：issue 模板执行良好、PR 描述规范、claim 协作机制被遵守，社区工程素养高。

## 8. 待处理积压

| 条目 | 说明 | 建议 |
|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills 索引 watchdog 自 7-18 持续 degraded，193 评论 | 优先修复 CI 重建链路 |
| [#94266](https://github.com/NousResearch/hermes-agent/pull/94266) | Collective Wisdom Agent V1，8-24 开启，needs-decision | 需维护者决策 |
| [#36691](https://github.com/NousResearch/hermes-agent/pull/36691) | 6-01 开启，已被 #107891 salvage | 建议关闭并指向新 PR |
| [#48693](https://github.com/NousResearch/hermes-agent/issues/48693) | Gateway 热重载，6-18 提出，长期无响应 | 排期或标记 roadmap |
| [#18990](https://github.com/NousResearch/hermes-agent/issues/18990) | Kimi vision 能力恢复，5-02 提出，依赖上游验证 | 跟进上游状态 |
| [#79859](https://github.com/NousResearch/hermes-agent/issues/79859) | TTS 流式播放，8-06 提出的 P1 仍无 fix | 语音用户体验阻塞项 |

**健康度小结**：社区输入端（issue/PR 数量与质量）非常健康，今日新报 bug 当日修复的案例（#107860）值得肯定；主要风险在于 PR 合并吞吐低（45 待合 vs 5 合并）与 Desktop 端回归频发，建议加强桌面端发布前回归清单。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-09-11）

## 1. 今日速览

项目今日保持中等活跃度：过去 24 小时新增/活跃 Issue 1 条、关闭 1 条，PR 侧共 7 条更新但**无任何合并/关闭**，整体呈现“社区贡献持续输入、维护者侧消化放缓”的态势。值得关注的是，社区开发者提交了针对 Issue #3265（deltachat 启动报错）的修复 PR #3376，形成问题闭环信号。另有 5 个 Dependabot 依赖升级 PR 挂起，标注 stale，反映 CI/维护节奏需要关注。今日无版本发布。

## 2. 版本发布

今日无新版本发布，省略。

## 3. 项目进展

今日无 PR 合并或关闭。但从待合并 PR 内容看，功能面在持续扩展：

- **PR #3376**（[链接](https://github.com/sipeed/picoclaw/pull/3376)）：将 deltachat 注册为自定义 channel，修复配置校验报错，直接对应已关闭的 Issue #3265，一旦合并将解决 gateway 启动失败问题。
- **PR #3371**（[链接](https://github.com/sipeed/picoclaw/pull/3371)）：新增 `opencode-go` provider，支持按模型 ID 自动路由端点并携带 `x-opencode-session` 会话头，扩展了 LLM 后端生态。

整体而言，项目功能演进仍在推进，但合并吞吐量为零，进展依赖维护者审阅节奏。

## 4. 社区热点

- **Issue #3265**（[链接](https://github.com/sipeed/picoclaw/issues/3265)，已关闭，6 评论，👍1）：未配置 deltachat 却导致 gateway 启动失败。该 Issue 今日关闭，且配套修复 PR #3376 已提交，说明问题得到社区响应闭环。诉求：配置校验逻辑不应强制校验未启用的 channel 类型。
- **Issue #3349**（[链接](https://github.com/sipeed/picoclaw/issues/3349)，OPEN，4 评论）：QQ 频道 WebSocket 连接失败，返回 401（Authorization 格式错误，错误码 11241），Docker 与 Linux x86 均可复现。反映国内 QQ 渠道用户的核心可用性诉求，目前尚无修复 PR。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 高 | [Issue #3349](https://github.com/sipeed/picoclaw/issues/3349) QQ 频道 401 鉴权失败，渠道完全不可用，多平台复现，被标 stale | ❌ 暂无 fix PR |
| 中 | [Issue #3265](https://github.com/sipeed/picoclaw/issues/3265) deltachat 未知类型导致 gateway 启动失败 | ✅ 已关闭，fix PR #3376 待合并 |

## 6. 功能请求与路线图信号

- **opencode-go provider**（PR #3371）：第三方模型后端接入需求明确，若合并将纳入下一版本，属于低成本高价值扩展。
- 从 5 个依赖升级 PR 看（AWS SDK、irc-go、protobuf、larksuite SDK、golang.org/x/term），下一版本可能包含一轮依赖整备，尤其 larksuite 3.9.4→3.11.0 跨度较大，需注意飞书渠道兼容性回归。

## 7. 用户反馈摘要

- **痛点 1（渠道可用性）**：QQ 频道用户（#3349）在 Docker 与原生 Linux 环境均遇到鉴权失败，说明 QQ 官方 API 鉴权格式可能已变更而项目未跟进，是当前最影响国内用户体验的问题。
- **痛点 2（配置健壮性）**：用户（#3265）期望“未配置的 channel 不应阻断启动”，反映对配置校验宽容度的需求，社区已自行修复。
- **整体印象**：社区开发者参与修复积极性高（2 个功能/修复 PR 来自外部贡献者），但用户对部分渠道（QQ、deltachat）的稳定性反馈偏负面。

## 8. 待处理积压

- **7 个待合并 PR 全部挂起**，其中 5 个 Dependabot PR（#3360–#3364）已被标 stale，建议维护者集中处理一轮依赖升级，避免安全补丁滞后。
- **Issue #3349 被标 stale 且无 fix**，QQ 频道在国内用户中使用场景重要，建议优先排查 Authorization 头格式与 QQ 官方接口最新规范的对齐。
- Issue #3349 和部分 PR 的 stale 标签叠加“零合并”信号，提示项目维护响应可能不足，需关注贡献者流失风险。

---
*数据来源：GitHub 公开数据，统计窗口为过去 24 小时。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-09-11）

## 1. 今日速览

NanoClaw 今日维持中等活跃度：过去 24 小时共 3 条 Issue 更新（1 新开/活跃、2 关闭）和 6 条 PR 更新（3 待合并、3 已合并/关闭），无新版本发布。活跃焦点集中在 **setup/verify 安装链路的 bug 修复**——多个独立贡献者（@glifocat、@Koshkoshinsk、@javexed）针对安装验证与首次使用体验提交了针对性修复，显示项目正处于安装体验打磨期。同时，#3643（硬编码 30 分钟容器存活上限）这一 high 优先级 bug 持续活跃但尚无修复 PR，是当前最值得关注的稳定性风险。

## 2. 版本发布

今日无新版本发布。（主分支最新版本为 2.3.0，commit `2c754a2`）

## 3. 项目进展

今日关闭的 3 个 PR 推进了以下进展：

- **PR #3760**（已关闭/核心团队，by @glifocat）：修复 `verify` 在 systemd 无用户实例、host 由 nohup 启动时误报 `SERVICE: not_found` 的问题，并同步关闭了 Issue #3759。这直接改善了 Linux 无 systemd user session 环境下的安装验证可靠性。
  链接：nanocoai/nanoclaw PR #3760
- **PR #3708**（已关闭，by @davekim917）：调整 SQLite `busy_timeout` 在 `journal_mode` 之前设置的顺序，避免 `journal_mode` 获取排他锁时因无等待超时导致失败，提升了 agent-runner mailbox 的并发健壮性。
  链接：nanocoai/nanoclaw PR #3708
- **PR #3707**（已关闭，by @davekim917）：新增 `registerAdmissionGate` 准入闸门机制并接入 poll 循环，为消息处理前置校验提供了扩展点（架构级 seam）。
  链接：nanocoai/nanoclaw PR #3707

另有 Issue #3761 为权限探针测试帖（probe），已正常关闭，无实质内容。

**整体评估**：今日合并方向覆盖“安装验证 + 数据库并发 + 运行时可扩展性”三个层面，setup 安装链路的修复节奏（issue 当天提出、当天修复关闭）显示核心团队响应迅速，项目处于健康的迭代状态。

## 4. 社区热点

- **Issue #3643**（OPEN，high 优先级）：今日仍有更新，是当前讨论热度最高的 issue。本地模型用户报告硬编码的 `ABSOLUTE_CEILING_MS=1800000`（30 分钟）导致长时间 agent 回合被宿主 sweep 强杀，且无任何配置接口可调整。这反映了**本地大模型（慢推理/长回合）用户**与默认为云端 API 设计的容器生命周期策略之间的冲突，诉求是暴露可配置的上限参数。尚无关联修复 PR。
  链接：nanocoai/nanoclaw Issue #3643

## 5. Bug 与稳定性（按严重程度）

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 High | **#3643** 硬编码 30 分钟 `ABSOLUTE_CEILING_MS` 冷杀本地模型长回合，无配置接口（area/containers） | OPEN，**尚无 fix PR**，今日活跃 |
| 🟡 Medium | **#3759** nohup 启动的 host 在 systemd 无用户实例时 `verify` 误报 not_found | 已修复（PR #3760 关闭） |

待合并的 bug 修复 PR（尚未进入主干）：
- **PR #3758**（OPEN）：setup 不再重复询问 operator 已回答过的 portal 提醒问题。
- **PR #3757**（OPEN）：`verify.ts` 中环境变量残留的凭证不再“凭空发明”一个 channel，避免验证误报。
- **PR #3689**（OPEN，8/31 提出）：快照符号链接根路径时改为快照目标内容，修复 #3684。

## 6. 功能请求与路线图信号

- **可配置容器存活上限**（源自 #3643）：用户明确需要 config seam 调整 `ABSOLUTE_CEILING_MS`。结合 PR #3707 刚合入的 `registerAdmissionGate` 扩展点，可看出项目正在为运行时生命周期策略引入更多可配置/可插拔机制，该需求有望在下一版本以配置项形式落地。
- **本地模型后端支持优化**：#3643 的场景（OpenCode provider → OpenAI 兼容本地服务器）表明本地部署是真实用户群，生命周期参数本地化适配可能进入路线图。
- **安装体验**：#3758、#3757 两个 setup 相关 PR 均遵循贡献规范并快速推进，setup/installation 是当前维护重点方向。

## 7. 用户反馈摘要

- **本地模型用户痛点**（#3643）：长时间推理回合被硬性 30 分钟上限中断，日志中可见心跳超时后被强制杀容器，用户无法绕过——这是本地慢模型场景下的核心阻断点。
- **Linux 多样化环境痛点**（#3759）：systemd PID 1 存在但用户 bus 不可达的服务器（常见于某些 VPS/容器化环境）上，`verify` 误判服务失败，尽管服务实际正常运行，造成新用户安装困惑。
- **首次安装体验**（#3758/#3757）：operator 反复被问相同问题、环境残留变量干扰验证结果，均属“新手第一次跑通”路径上的摩擦点。
- 整体看，用户反馈集中在**安装与首次运行的成功率**上，核心运行时（agent 执行、消息处理）方面的负面反馈较少。

## 8. 待处理积压

- **Issue #3643**（8/28 提出，high 优先级，今日仍活跃）：已挂起约 2 周无修复 PR，且被评为 priority/high。鉴于影响本地模型用户的核心使用场景，建议维护者优先排期或提供临时 workaround。
- **PR #3689**（8/31 提出，至今约 11 天仍 OPEN）：symlink 根路径快照修复（关联 #3684），社区贡献，建议维护者 review，避免长期积压挫伤贡献者。
- **PR #3758、#3757**（9/10 提出）：均标记 follows-guidelines，建议尽快 review 合入以纳入下一次版本。

---
*数据来源：NanoClaw GitHub 仓库过去 24 小时 Issue/PR 活动。链接均为 nanocoai/nanoclaw 仓库相对链接。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-09-11

## 1. 今日速览

IronClaw 今日整体活跃度**中等偏日常**：过去 24 小时共 9 条 Issue/PR 更新（1 个 Issue、8 个 PR），无新版本发布。活动以 Dependabot 自动化依赖升级（5 条）为主，人工贡献包括 2 个有实质内容的 bugfix PR 和 1 个每日基准测试失败分类报告。社区有外部贡献者（@be-student、@huiq777、@thisisjoshford）持续提交修复，显示项目吸引了一定的外部参与，但 Issue 侧讨论量偏低（今日新 Issue 评论数为 0），社区互动热度有待提升。

## 2. 版本发布

今日无新版本发布，省略。

## 3. 项目进展

今日无已合并 PR；2 条 PR 被关闭：

- **[PR #8080](https://github.com/nearai/ironclaw/pull/8080)（CLOSED）**：Dependabot 的 Rust 依赖批量升级（21 项）被关闭，随后由更新版本 [#8097](https://github.com/nearai/ironclaw/pull/8097)（24 项更新，含 uuid 1.24→1.26、base64 0.22→0.23 等）替代。属正常的自动化维护节奏。
- **[PR #8072](https://github.com/nearai/ironclaw/pull/8072)（CLOSED，docs/dependencies 范围，低风险）**：@thisisjoshford 的 Telegram Bot API 命令菜单注册功能（激活时通过 `setMyCommands` 注册 `/model`、`/status`、`/new`、`/stop`、`/interrupt`，注销时清理）被关闭。状态为关闭而非合并，可能需要重提交或被搁置，建议关注后续。

**待合并的实质性进展（6 条 OPEN PR）**：

- **[PR #8076](https://github.com/nearai/ironclaw/pull/8076)**：修复 assistant 共享频道问题——区分“已配对用户但频道断开”与“未配对账号”两种状态，并在产品层、adapter 层、OpenAI 兼容层保持一致的拒绝分类，更新 Slack 能力描述。这是对多渠道接入体验的重要细化，今日有更新活动。
- **[PR #8092](https://github.com/nearai/ironclaw/pull/8092)**：修复 WebUI 聊天输入框的 IME 组合输入问题（中日韩用户核心痛点），正确处理 Safari 中 `isComposing` 误报及 keyCode 229 的确认回车。外部贡献者 @huiq777 提交并附回归测试。
- 另有 3 条小范围 JS 依赖升级：[#8096](https://github.com/nearai/ironclaw/pull/8096)（vitest 4.1.9→4.1.11）、[#8094](https://github.com/nearai/ironclaw/pull/8094)（js-yaml 4.3.1→4.3.2）、[#8095](https://github.com/nearai/ironclaw/pull/8095)（baseline-browser-mapping）。

**整体评估**：项目处于稳定迭代阶段，方向集中在渠道适配打磨（Slack/Telegram）、国际化输入体验和依赖健康维护。

## 4. 社区热点

今日无高评论量/高反应的讨论帖。相对值得关注的是：

- **[Issue #8093](https://github.com/nearai/ironclaw/issues/8093)**：@pranavraja99 发布的每日失败分类报告（2026-09-10）。该系列 Issue 反映了项目方对基准测试质量的系统性追踪诉求——officeqa 套件 42 个未通过任务中绝大多数被归因为真实的模型错误（如 DeepSeek-V4-Flash 的导航问题）。这类自动化诊断有助于区分“产品 Bug”与“模型能力缺陷”，指导优化方向，但本身评论互动为零。

## 5. Bug 与稳定性

| 问题 | 严重程度 | 状态 |
|---|---|---|
| 共享频道断开后被误判为未配对账号，拒绝提示不准确（[PR #8076](https://github.com/nearai/ironclaw/pull/8076)） | 中 | ✅ 已有 fix PR，待合并 |
| IME 输入法组合期间 Enter 误触发送/命令菜单，影响中日韩用户（[PR #8092](https://github.com/nearai/ironclaw/pull/8092)） | 中 | ✅ 已有 fix PR + 回归测试，待合并 |
| vitest 4.1.9 存在 bug（升级至 4.1.11 修复，[PR #8096](https://github.com/nearai/ironclaw/pull/8096)） | 低（开发依赖） | ✅ 升级 PR 待合并 |

今日无崩溃或高危回归报告。

## 6. 功能请求与路线图信号

- **多渠道命令菜单标准化**：[PR #8072](https://github.com/nearai/ironclaw/pull/8072)（Telegram 命令菜单注册）虽被关闭，但与 #8076 的 Slack 能力更新共同表明，**渠道级 UX 一致性**（命令发现、错误提示）是当前明确的投入方向，预期该方向工作会以其他形式继续推进。
- **国际化输入支持**：#8092 表明 WebUI 对 CJK 用户的输入体验正在补齐，属于体验完善型改进，合并概率较高。
- **质量基准持续监控**：#8093 系列日报显示团队将模型能力边界量化作为长期机制，可能驱动后续 prompt/工具调用层面的优化。

## 7. 用户反馈摘要

今日 Issue/PR 评论数据缺失或为零，可提炼的直接用户反馈有限。从 PR 内容间接可见：

- **痛点**：CJK 用户在 WebUI 使用输入法时 Enter 确认被误判为发送（#8092）；共享频道断开后用户收到的错误指引具有误导性（#8076）。
- **积极信号**：多位外部贡献者（@be-student、@huiq777、@thisisjoshford）主动提交针对性修复，说明真实使用场景中这些问题被实际遇到且社区愿意参与解决。

## 8. 待处理积压

- **[PR #8076](https://github.com/nearai/ironclaw/pull/8076)**：创建于 09-06，今日（09-11）仍有更新，已活跃 5 天，建议维护者尽快 review 推进合并。
- **[PR #8072](https://github.com/nearai/ironclaw/pull/8072)**：09-04 创建、09-10 被关闭且未合并。若因实现问题被拒，建议维护者在 PR 中说明原因或指引后续方案，避免贡献者流失。
- 6 条待合并 PR 中 3 条为 Dependabot 升级，属低风险快速通道，建议批量处理以降低积压。

---

**健康度小结**：✅ 维护活跃（每日更新不间断）、依赖管理自动化成熟、外部贡献持续流入；⚠️ 需关注 PR review 周期（#8076 已 5 天未合并）和 Issue 侧社区讨论的冷清。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-09-11

## 1. 今日速览

- 过去 24 小时项目无新开/活跃 Issue（0 条），也无新版本发布，但 PR 活动非常集中：13 条 PR 更新，其中 10 条已合并/关闭、3 条待处理（均为 dependabot 依赖升级，处于 stale 状态）。
- 核心工作全部围绕 **OpenClaw v2026.8.1 升级适配**，包括 Gateway 启动迁移、旧会话/工作区恢复、记忆索引冲突等一连串启动阻断问题修复。
- 全部主要 PR 均由 @btc69m979y-dotcom 提交并在当天或次日快速合入，显示单核心开发者高强度推进、维护响应迅速。
- 整体判断：项目处于**活跃修复期**，功能迭代（#2643 新增记忆保存设置）与稳定性修复并进，健康度良好，但贡献者集中度较高。

## 2. 版本发布

今日无新版本发布。连续多日的 OpenClaw 适配修复已密集合入，推测正在为一个累积性版本做准备，建议关注近期 Release 动态。

## 3. 项目进展

今日合入/关闭的 10 条 PR 构成一条完整的 **OpenClaw v2026.8.1 升级修复链**：

**启动阻断类修复（高优先级）**
- [#2642](https://github.com/netease-youdao/LobsterAI/pull/2642) 修复旧会话迁移阻断：transcript 中重复 session header 导致 SQLite 存储与归档校验计数不一致，阻塞归档。
- [#2647](https://github.com/netease-youdao/LobsterAI/pull/2647) 隔离损坏的工作区 attestation 文件（Windows 上观测到 59 字节全 NUL 文件），避免每次 Gateway 启动失败。
- [#2649](https://github.com/netease-youdao/LobsterAI/pull/2649) 补全 Gateway 启动状态迁移：设备身份仍留在 JSON 中导致 preflight 跳过自动迁移。
- [#2650](https://github.com/netease-youdao/LobsterAI/pull/2650) 修复 memory sidecar 归档名称冲突，避免遗留 `.migrated` 备份与活跃索引并存导致致命启动失败。

**恢复与体验修复**
- [#2651](https://github.com/netease-youdao/LobsterAI/pull/2651) 防止过期 `running` 状态的桌面会话被 OpenClaw 孤儿扫描误判为中断并自动重跑，要求存在明确中断标记。
- [#2644](https://github.com/netease-youdao/LobsterAI/pull/2644) 消除配置同步时因就绪探针短暂超时而反复弹出引擎启动页的问题。
- [#2648](https://github.com/netease-youdao/LobsterAI/pull/2648) 去重 IM 重启逻辑，MCP 配置改用 OpenClaw 原生热重载（源自 QA 反馈：编辑 IM 开关时 gateway 重启两次）。

**前端与功能**
- [#2646](https://github.com/netease-youdao/LobsterAI/pull/2646) 定时任务历史日期筛选改为本地过滤，兼容现有 gateway API（不传不支持的 `startMs`/`endMs`）。
- [#2645](https://github.com/netease-youdao/LobsterAI/pull/2645) 修复 Windows 上引擎启动失败浮层折叠后按钮被拖拽区吞掉点击的问题。
- [#2643](https://github.com/netease-youdao/LobsterAI/pull/2643) **新增功能**：设置 → Agent 引擎 → 后台运行中增加「启用压缩前记忆保存」开关（默认关闭），让用户自主控制额外 token 消耗。

整体而言，今日推进解决了升级 OpenClaw v2026.8.1 后几乎所有已知启动阻断路径，向稳定完成上游适配迈出关键一步。

## 4. 社区热点

- 今日无 Issue 活动，PR 也基本无评论互动；热点实际来自 **QA 内部反馈**（多个 PR 描述中注明「2026-09-10 QA 反馈，无单独关联 issue」）。
- 值得关注的隐性讨论点：压缩前记忆保存的 token 成本问题（#2643 的动机），说明长对话场景下模型调用开销已成为用户/QA 关心的实际问题，团队选择了 opt-in 方案而非默认开启。
- 外部社区（dependabot 之外的贡献者）今日无参与，社区活跃度与开发活跃度存在明显落差。

## 5. Bug 与稳定性

按严重程度排列（均已修复）：

| 严重程度 | 问题 | 修复 PR |
|---|---|---|
| 🔴 高 | 升级 v2026.8.1 后 Gateway 持续启动失败（memory 索引归档冲突） | [#2650](https://github.com/netease-youdao/LobsterAI/pull/2650) |
| 🔴 高 | 损坏的工作区 attestation 阻断所有 Gateway 启动 | [#2647](https://github.com/netease-youdao/LobsterAI/pull/2647) |
| 🟠 中高 | 重复 session header 阻塞旧会话归档迁移 | [#2642](https://github.com/netease-youdao/LobsterAI/pull/2642) |
| 🟠 中高 | 设备身份未迁移导致 Gateway preflight 异常退出 | [#2649](https://github.com/netease-youdao/LobsterAI/pull/2649) |
| 🟡 中 | 过期桌面会话被误判中断后自动重跑（潜在数据/行为风险） | [#2651](https://github.com/netease-youdao/LobsterAI/pull/2651) |
| 🟡 中 | IM/MCP 配置变更引发重复 gateway 重启 | [#2648](https://github.com/netease-youdao/LobsterAI/pull/2648) |
| 🟡 中 | 配置同步时误显示引擎启动页 | [#2644](https://github.com/netease-youdao/LobsterAI/pull/2644) |
| 🟢 低 | 定时任务历史日期筛选报错；Windows 失败浮层按钮点击失效 | [#2646](https://github.com/netease-youdao/LobsterAI/pull/2646) / [#2645](https://github.com/netease-youdao/LobsterAI/pull/2645) |

无未修复的开放 Bug 报告。

## 6. 功能请求与路线图信号

- **记忆保存成本控制**（[#2643](https://github.com/netease-youdao/LobsterAI/pull/2643)）：opt-in 开关已合入，是今日唯一的净新增功能，表明团队正在为长对话/后台运行场景优化 token 经济性，后续可能出现相关用量统计或提示功能。
- **OpenClaw 深度集成**：多 PR 涉及 `agents.defaults.sessionStore`、迁移检查点、gateway 热重载，显示路线图核心是将 LobsterAI 完全锚定在 OpenClaw v2026.8.1 引擎栈上；下一个版本预计会打包这一整批适配修复。

## 7. 用户反馈摘要

今日无 Issue 评论数据可供提炼。间接信号：

- QA 团队反馈聚焦于**配置变更引发的 gateway 多次重启**（#2648）和**误显示引擎启动页**（#2644），反映对状态切换可见性与平滑性的不满。
- 记忆保存带来的额外 token 消耗（#2643）说明后台记忆功能有真实使用需求，但默认行为成本偏高，用户需要选择权。
- Windows 平台多次出现专属问题（NUL attestation 文件、拖拽区点击冲突），提示该平台稳定性是薄弱环节。

## 8. 待处理积压

3 条待合并 PR 均为 dependabot 依赖升级，创建于 2026-08-10，已滞留约一个月并标记 stale：

- [#2459](https://github.com/netease-youdao/LobsterAI/pull/2459) `@nodesecure/js-x-ray` 14.3.0 → 16.0.0（跨两个主版本，可能有 API 破坏性变更）
- [#2461](https://github.com/netease-youdao/LobsterAI/pull/2461) `eslint-plugin-react-hooks` 5.2.0 → 7.1.1（dev 依赖，风险较低）
- [#2464](https://github.com/netease-youdao/LobsterAI/pull/2464) `react-dom` 18.3.1 → 19.2.8（**重大升级**，涉及 React 19 迁移，建议优先评估）

**建议**：维护者在 OpenClaw 适配修复收尾后，优先处理 react-dom 19 升级评估（#2464）；同时鉴于核心开发高度集中于单一贡献者，建议扩充 reviewer/维护者梯队以保障项目可持续性。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-09-11

## 1. 今日速览

Moltis 今日保持稳定的中等活跃度：过去 24 小时共有 9 项 Issue/PR 更新，其中 **2 条 Bug Issue 被关闭、3 条 PR 完成合并/关闭**，无新开 Issue，也无新版本发布。值得注意的是，两条被关闭的 Issue（#293、#279）均有对应修复 PR 于今日落地（#1252、#1260），形成完整的“报告—修复—文档”闭环，显示维护者对积压 Bug 的清理力度较强。当前仍有 **4 条 PR 待合并**，涵盖外部智能体流式传输、推理强度等级等核心功能开发。

---

## 2. 版本发布

今日无新版本发布。建议关注 #1258、#1253 等功能 PR 合并后的下一个版本节点。

---

## 3. 项目进展

今日完成 3 条 PR 的合并/关闭，整体进展聚焦于**部署体验修复与错误信息质量提升**：

- **PR #1252（已关闭）** [docs(docker): 记录新部署 bind-mount 权限修复](https://github.com/moltis-org/moltis/pull/1252)
  通过文档补充说明 Docker Compose 新部署时的 bind-mount 权限问题，关闭了存活 6 个多月的 Issue #293（新部署无 db 文件导致 panic）。这解决的是**新用户首次部署最常见的阻断性问题**。

- **PR #1260（已关闭）** [fix(exec): 准确报告 shell 缺失](https://github.com/moltis-org/moltis/pull/1260)
  修复 exec 工具在 `sh` 不在 PATH 时误报“工作目录不存在”的误导性错误，通过分类 spawn `NotFound` 错误解决，关闭 Issue #279。测试基本通过（915/916，1 个 workspace 相关用例待确认）。

- **PR #1256（已关闭）** [chore(deps): browserslist 4.28.2 → 4.28.8](https://github.com/moltis-org/moltis/pull/1256)
  前端构建依赖例行升级。

**评估**：今日推进以**修复与文档为主**，显著改善了新用户的部署成功率和调试体验，属于稳健的工程质量提升日。

---

## 4. 社区热点

今日活跃更新但未新增评论，社区互动热度偏低，以下为更新最频繁的开发中 PR：

- **PR #1258** [feat(external-agents): AGY 直接流式传输](https://github.com/moltis-org/moltis/pull/1258)（@GTanger，9-04 开发至今持续更新）
  为官方 `agy` CLI 增加一等流式传输通道，复用其 Google OAuth 会话，将 AGY 的 `stream-json` 输出翻译为 Moltis 的文本/推理/工具调用/子智能体/可恢复会话事件。**这是对外部智能体生态互联能力的实质性扩展**，免除用户配置 Gemini CLI 或 API key 的负担。

- **PR #1253** [feat(reasoning): 新增 max 推理强度档位](https://github.com/moltis-org/moltis/pull/1253)（@GTanger）
  在共享 `ReasoningEffort` schema 中新增 `max` 档位及 `@reasoning-max` 模型后缀解析，OpenAI Codex Responses API 原样透传，不支持该档位的 provider 自动收敛，反映用户对**更深推理能力分层控制**的诉求。

- **PR #1262** [fix(cron): "24:00" 应视为当日结束](https://github.com/moltis-org/moltis/pull/1262)（@atirna）
  修复 chrono 拒绝解析小时 24 导致默认配置 `end="24:00"` 解析失败、fail-open 使定时任务全天活跃的问题。

---

## 5. Bug 与稳定性

今日**无新报告 Bug**，反而关闭了 2 条存量 Bug，按严重程度回顾：

| 严重程度 | Issue | 状态 | 修复 |
|---|---|---|---|
| 🔴 高（阻断新用户部署） | [#293 Docker Compose 新部署无 db 文件](https://github.com/moltis-org/moltis/issues/293) | ✅ 已关闭 | PR #1252 |
| 🟡 中（错误信息误导排障） | [#279 exec 工具误导性报错](https://github.com/moltis-org/moltis/issues/279) | ✅ 已关闭 | PR #1260 |

另有一条**待合并的潜在稳定性修复**：PR #1262（cron active_hours 配置解析失败导致 fail-open 全天运行），虽未关 Issue，但影响定时任务的调度正确性，建议优先评审。

---

## 6. 功能请求与路线图信号

从活跃 PR 可推断下一版本可能包含：

1. **外部智能体直接接入**（PR #1258）：AGY CLI 流式传输，降低外部智能体接入门槛，已完成一周开发，接近成熟。
2. **推理强度精细化**（PR #1253）：`max` 档位贯穿 schema、模型后缀解析、UI 选择器与翻译，属于跨层特性，合并后将是面向用户的重要能力更新。
3. **依赖安全例行维护**（PR #1263）：npm_and_yarn 组合升级（babel-core、astro、js-yaml 等，含 2 个目录 4 项更新），可能含安全修复。

若上述 PR 在近期合并，下一版本预计以**“外部智能体互联 + 推理控制增强 + 稳定性修复”**为主线。

---

## 7. 用户反馈摘要

今日关闭的 Issue 反映的典型用户痛点：

- **部署门槛**：#293 表明 Docker Compose 一键部署在新环境上仍存在 db 初始化/bind-mount 权限陷阱，属于新用户流失的高危点，现已有文档缓解。
- **错误诊断困难**：#279 暴露的错误信息误导问题（实际缺 `sh`，却报工作目录不存在）说明用户在容器化/受限 PATH 环境下使用 exec 工具时排障成本高，修复后可准确归因。
- **配置默认值健壮性**：#1262 的 cron `24:00` 问题暗示用户依赖文档默认配置，fail-open 行为虽保证了可用性但牺牲了调度精确性。

整体来看，用户场景集中在**自托管容器化部署与工具执行环境受限**的场景。

---

## 8. 待处理积压

- **PR #1258**（AGY 流式传输）与 **PR #1253**（max 推理档位）均开发多日且持续更新，建议维护者尽快评审合并，避免长期分支漂移。
- **PR #1262**（cron 24:00 修复）：影响默认配置下定时任务语义，且修复逻辑简单（调整解析顺序），建议提升评审优先级。
- **PR #1263**（依赖批量升级）：涉及 astro、js-yaml 等依赖，可能含安全修复，建议验证 CI 后尽快处理。
- Issue #293、#279 均无社区评论（👍=0、评论=0），提示**用户反馈闭环依赖维护者主动跟进**，可考虑在修复 PR 合并后发布版本通知报告者验证。

---
*数据来源：GitHub（moltis-org/moltis），统计窗口为 2026-09-10 至 2026-09-11。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-09-11

---

## 1. 今日速览

CoPaw（内部仓库名 QwenPaw）今日保持高活跃度：过去 24 小时内 Issues 更新 22 条（新开/活跃 15，关闭 7），PR 更新 41 条（待合并 25，已合并/关闭 16），并发布了 **v2.2.1-beta.2** Beta 版本。项目当前处于 2.2.1 Beta 迭代密集期，团队（@zhaozhuang521、@cuiyuebing、@rayrayraykk 等核心成员）高频合入 Console 交互与记忆系统相关修复，同时社区涌现多位 first-time contributor。值得关注的是：2.2.1-beta.2 发布后数小时内即出现一处 Console 回归（#7687），且多租户版 Hub 的方向性讨论（#7318）持续升温，显示社区规模扩大带来的质量与功能诉求双重压力。

---

## 2. 版本发布

### v2.2.1-beta.2（Beta）

**更新内容：**
- [PR #7623] `feat(console)`: 改进移动端 Agent 选择器（@zhaozhuang521）
- [PR #7643] `chore`: 版本号提升至 2.2.1b2（@cuiyuebing）
- `fix(console)`: 对齐 QwenPaw CSS 选择器（@zhaozh…）

**破坏性变更：** 无明显破坏性变更，属 Beta 修复性迭代。

**迁移注意事项：**
- Release Duty 安装验证 Issue [#7674](https://github.com/agentscope-ai/QwenPaw/issues/7674) 已关闭，表示多平台安装验证已完成，可较放心地试用。
- ⚠️ 但发布当天即有用户报告 Console 回归问题 #7687（见第 5 节），生产环境用户建议继续停留在 2.2.0 稳定版，观望 beta.3。

---

## 3. 项目进展

今日合并/关闭的重要 PR 推进了以下方向：

**Console / 前端体验**
- [PR #7665](https://github.com/agentscope-ai/QwenPaw/pull/7665)（已关闭）：分组聊天历史改进——组内分页默认 10 条，"Load more" 逐次加载并保证日期表头不孤立。
- [PR #7686](https://github.com/agentscope-ai/QwenPaw/pull/7686)（已关闭）：分组会话分页后续，移除"Collapse List"改为统一的"Load More"，并保留翻页状态。
- [PR #7688](https://github.com/agentscope-ai/QwenPaw/pull/7688)（进行中）：进一步简化分组会话分页逻辑。

**核心 Bug 修复**
- [PR #7536](https://github.com/agentscope-ai/QwenPaw/pull/7536)（已关闭）：适配 OpenCode API 新增的 `x-opencode-session` 请求头，含回归测试覆盖。
- [PR #7562](https://github.com/agentscope-ai/QwenPaw/pull/7562)（已关闭）：修复 Loop 模式（Goal/Mission）从 Composer 菜单选择后未传到后端的 Bug——根因是 `beforeSubmit` 在 SDK 已捕获 textarea 值之后才更新。
- [PR #7629](https://github.com/agentscope-ai/QwenPaw/pull/7629)（已关闭，DO NOT MERGE 标记）：修复 Gemini 在后台工具完成后返回 400 的问题——将运行时通知改为 `role="user"` 以避免尾随 model turn。

**记忆系统**
- [PR #7444](https://github.com/agentscope-ai/QwenPaw/pull/7444)（已关闭）：统一 ReMe slash 命令，完成 chat 侧记忆命令收敛。

**测试基建**
- [PR #7645](https://github.com/agentscope-ai/QwenPaw/pull/7645)（已关闭）：为统一环境变量页重建 Environments E2E 测试套件，修复 11 个失败用例。

**整体评估：** 今日修复覆盖前端交互、多模型兼容（OpenCode/Gemini）、记忆架构三大板块，Console 分页体验经过 3 轮迭代收敛，工程节奏健康。

---

## 4. 社区热点

**🔥 [#7318 — QwenPaw Hub 多租户版方向讨论](https://github.com/agentscope-ai/QwenPaw/issues/7318)**（25 条评论，4 👍，今日仍在更新）

官方发起的方向性讨论：QwenPaw 起初定位为个人 AI 助手，但社区反复要求更好的团队使用方式，Hub 是官方首个回应。该 Issue 是当前活跃度最高的讨论帖，官方主动收集“接下来该建什么”的反馈，是判断 2.2.x 之后路线图的最重要信号源。

**[#7177 — 部署首页（platform.agentscope.io/deploy）移动端操作优化](https://github.com/agentscope-ai/QwenPaw/issues/7177)**（9 条评论，今日更新）

用户痛点集中在移动端：操作入口位置过低、停止按钮易误触（位于“打开”之前）。反映网页版移动体验是高频使用场景。

**[#7579 — 模型回复从上下文中丢失（已关闭）](https://github.com/agentscope-ai/QwenPaw/issues/7579)**（10 条评论）

“助手看不到自己刚说的话”的空响应问题，涉及 2.2.0 Desktop 打包后端，今日关闭，或已随近期 runtime 修复落地。

---

## 5. Bug 与稳定性（按严重程度排列）

| 级别 | Issue | 说明 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#7687](https://github.com/agentscope-ai/QwenPaw/issues/7687)（已关闭） | **2.2.1-beta.2 Console 回归**：切换智能体后发消息被静默切到新对话。用户通过对比 2026-09-10 与 2026-08-31 构建的 chunk hash 精确定位回归点 | 已关闭（发布当天快速响应） |
| 🔴 高 | [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | Windows 2.2.0 下 spawn subAgent **全部超时失败**，用户调大 timeout 无效 | 无明确 fix PR |
| 🔴 高 | [#7672](https://github.com/agentscope-ai/QwenPaw/issues/7672) | **安全研究**：Windows 上安全沙箱被突破（1/4 系列，附知乎分析链接） | 无 fix PR，需安全团队响应 |
| 🟠 中 | [#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689) | 多模态模型经 `/chat/completions` 仍收到 `{"type":"file"}` PDF block 被 HTTP 拒绝——#7621 只修了非多模态路径 | 无 fix PR |
| 🟠 中 | [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | 飞书会话 queue consumer 卡死后会话静默无响应，新消息无法新建消费者 | 无明确 fix PR |
| 🟠 中 | [#7676](https://github.com/agentscope-ai/QwenPaw/issues/7676) | `subagent_model` 配置无效，子代理始终继承父级 `active_model`（beta.1/beta.2 均可复现） | ✅ [PR #7680](https://github.com/agentscope-ai/QwenPaw/pull/7680) 已提交（回归测试 + 诊断日志） |
| 🟡 中低 | [#7668](https://github.com/agentscope-ai/QwenPaw/issues/7668) | mail monitor 的 `last_uid=0` 绕过首次运行保护，重复处理整个收件箱 | ✅ [PR #7690](https://github.com/agentscope-ai/QwenPaw/pull/7690) 已提交（批量>50 需确认、连续 3 次失败暂停） |
| 🟡 中低 | [#7642](https://github.com/agentscope-ai/QwenPaw/issues/7642)（已关闭） | Chrome 下 Console 流式渲染不显示直到回合完成（Safari 正常） | 已关闭 |

**趋势判断：** subAgent 相关（#7678、#7676、#7680）已成为本周期最集中的故障簇，值得专项排查。

---

## 6. 功能请求与路线图信号

结合 Issue 需求与进行中的 PR，判断纳入下一版本（2.2.1 正式版或 2.2.2）的可能性：

**可能性高（已有 PR 在途）：**
- **飞书推理卡片自动折叠**：需求源自 [#7570](https://github.com/agentscope-ai/QwenPaw/issues/7570) / #7591，[PR #7685](https://github.com/agentscope-ai/QwenPaw/pull/7685) 今日新开，实现可折叠推理面板 + opt-in 自动折叠，明显在冲刺合入。
- **Telegram 中间消息清理**：[PR #7592](https://github.com/agentscope-ai/QwenPaw/pull/7592)（first-time contributor），默认关闭、行为向后兼容，合入阻力小。

**可能性中等：**
- **Loop 模式 /compact 上下文压缩命令**（[#7679](https://github.com/agentscope-ai/QwenPaw/issues/7679)）：长任务 token 消耗巨量是强诉求，且 #7562 刚修复 Loop 模式传参链路，说明该模块在积极维护。
- **超限图片自动降采样**（[#7671](https://github.com/agentscope-ai/QwenPaw/issues/7671)）与 **Files 面板代码语法高亮**（[#7670](https://github.com/agentscope-ai/QwenPaw/issues/7670)）：同一贡献者连续提出，均为低成本高体验收益的改进。
- **RemeLight 独立记忆模型配置**（[#7664](https://github.com/agentscope-ai/QwenPaw/issues/7664)）：为 summarize/dream 指定轻量模型以省 token，与 #7444 记忆命令统一形成组合拳，方向吻合。

**路线图层面：** Hub 多租户讨论（#7318）+ 今日新增的 Hub 审计日志 PR [#7683](https://github.com/agentscope-ai/QwenPaw/pull/7683)（登录尝试与拒绝创建 runtime 的审计）表明团队化/安全审计是下阶段主线。

---

## 7. 用户反馈摘要

**主要痛点：**
- **Token 成本焦虑**：多个 Issue（#7679、#7664）指向同一核心诉求——长任务上下文与后台记忆写入消耗过贵，希望可精细控制使用的模型。
- **移动端/Web Console 体验**：入口布局、误触停止按钮（#7177）、流式渲染差异（#7642）、会话切换回归（#7687）。
- **subAgent 可靠性**：Windows 用户报告子代理任务全部超时（#7678），且模型配置被静默忽略（#7676）——用户"技术不懂但结果失败"的表达显示该问题已超出普通用户自救能力。
- **通道（Channel）质量参差**：飞书会话卡死（#7534）、企业微信逐字符慢速流式（#7507）、base64 图片发送失败（#7516、#7370，均已关闭，改善中）。

**满意点：**
- 官方对 Beta 回归响应迅速（#7687 当天关闭）。
- Release Duty 机器人（#7674）自动执行多平台安装验证，发布质量流程化。
- 社区贡献者画像多元：有做安全研究的（#7672）、有做详细构建对比的深度用户（#7687）、也有 first-time contributor 顺利提 PR（#7591、#7592、#7680），生态健康度良好。

---

## 8. 待处理积压

以下重要 Issue 长期开放且近期维护者响应不足，建议关注：

- **[#3113](https://github.com/agentscope-ai/QwenPaw/issues/3113)**（2026-04-08 创建，5 个月未决）：团队协作模式首次请求不触发多智能体协作，需中断重试才生效——与近期 subAgent 故障簇可能相关，建议合并排查。
- **[#7445](https://github.com/agentscope-ai/QwenPaw/issues/7445)**（8/31 创建）：Hub 无法连接本地/局域网模型服务（如 `http://127.0.0.1:8088/v1`），Hub 推广的关键阻碍。
- **[#7672](https://github.com/agentscope-ai/QwenPaw/issues/7672)**：Windows 沙箱逃逸安全研究，建议安全团队尽快评估并公开回应。
- **[#7507](https://github.com/agentscope-ai/QwenPaw/issues/7507)**（9/2 创建）：企业微信 150ms 节流导致流式观感迟滞，仅 2 条评论。
- **PR 侧**：[#7592](https://github.com/agentscope-ai/QwenPaw/pull/7592)、[#7655](https://github.com/agentscope-ai/QwenPaw/pull/7655)（FTS 损坏修复）、[#7639](https://github.com/agentscope-ai/QwenPaw/pull/7639)（history 完整性扫描性能优化）等待 review，均为质量/性能向改进，建议优先处理。

---

**健康度总评：** 🟢 良好。发布节奏稳定、回归响应快、社区贡献活跃；主要风险点为 subAgent 可靠性故障簇、Windows 沙箱安全报告、以及 Hub 本地模型连接问题。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-09-11）

## 1. 今日速览

过去 24 小时 ZeptoClaw 处于**安全加固集中收敛期**：3 个由 @morler 报告的凭证泄露类安全问题（#653/#655/#656）全部关闭，对应修复 PR #674（WebSocket 一次性票据认证）也已落地。维护者 @qhkm 今日新开 CI 权限修复 Issue #676 并提交 PR #677，响应迅速。此外 18 个 Dependabot 依赖更新 PR 被批量关闭，依赖积压得到集中清理。今日无新版本发布，整体活跃度中高、健康度良好。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

**核心修复（已关闭）：**
- [PR #674](https://github.com/qhkm/zeptoclaw/pull/674) `fix(panel): replace websocket bearer URLs with tickets` —— 面板 WebSocket 连接弃用 `?auth=` 传参，改为通过带 CSRF 保护的认证端点获取 **30 秒单次使用票据**，杜绝凭证进入访问日志与浏览器历史。这是今日最有价值的变更，直接修复了 #653，并部分缓解 #655/#656 提出的攻击面。

**依赖批量清理：** 17 个 Dependabot PR 集中关闭，覆盖：
- Rust：tokio 1.52.3、tower-http 0.6.11、serde_json 1.0.150、scraper 0.27.0、rpassword 7.5.x（#623/#617/#627/#620/#625）
- 前端：React 19.2.6、Tailwind 4.3、Astro 6.3.7、@types/node 25.9.1（#616/#619/#615/#621）
- 基础设施：Rust 基镜像 1.98-slim-trixie、Debian trixie-slim、多个 GitHub Actions（#658/#630/#628 等）

**待合并：** [PR #677](https://github.com/qhkm/zeptoclaw/pull/677) 为 rustsec audit job 授予最小化 `checks: write` 权限，修复安全审计结果无法上报的问题（对应 Issue #676）。

## 4. 社区热点

- [Issue #676](https://github.com/qhkm/zeptoclaw/issues/676)（OPEN）：维护者自查发现的 CI 权限缺陷——`rustsec/audit-check` 审计通过但无法创建 check run（`Resource not accessible by integration`），已有同日修复 PR #677，体现维护者对 CI 安全链路的关注。
- [Issue #656](https://github.com/qhkm/zeptoclaw/issues/656)（已关闭）：`panel start` 每次将完整 API token 打印到 stdout，落入终端回滚、CI 日志和截图。诉求是安全默认行为，不依赖用户自律。
- [Issue #655](https://github.com/qhkm/zeptoclaw/issues/655)（已关闭）：3 处 bearer token 用 `==` 明文比较，且 `verify_bearer_token` 的文档注释虚假声称“constant-time-like”，文档与实现不一致本身也是信任问题。

今日讨论量整体偏低（各条目 0 评论），属“报告即修复”的高效模式。

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | Fix |
|---|---|---|---|
| 高 | [#653](https://github.com/qhkm/zeptoclaw/issues/653) WS token 走 `?auth=` 查询参数，泄露至代理日志/浏览器历史 | ✅ 已关闭 | [PR #674](https://github.com/qhkm/zeptoclaw/pull/674) |
| 高 | [#655](https://github.com/qhkm/zeptoclaw/issues/655) token 非常量时间比较（3 处） | ✅ 已关闭 | 伴随安全批次修复 |
| 中高 | [#656](https://github.com/qhkm/zeptoclaw/issues/656) panel start 明文打印 API token | ✅ 已关闭 | 伴随安全批次修复 |
| 低 | [#676](https://github.com/qhkm/zeptoclaw/issues/676) CI audit job 缺 `checks: write` | 🔄 Open | [PR #677](https://github.com/qhkm/zeptoclaw/pull/677) 待合并 |

无崩溃/回归类报告，今日问题全部集中在凭证安全与 CI 可观测性。

## 6. 功能请求与路线图信号

今日无显式功能请求。但从 #656 提到的 “token 持久化于 `~/.zeptoclaw/panel.token`（perms issue）” 可推断**文件权限加固**是下一个可能的安全议题。依赖清理（Astro/React/Tailwind/Rust 1.98）全部落地，预示项目正为下一次发版做稳定化准备，短期路线以安全与可维护性为主。

## 7. 用户反馈摘要

- **痛点集中在凭证安全默认值**：外部贡献者 @morler 连续报告 3 个 token 泄露路径（查询参数、stdout 打印、非常量时间比较），反映对“开箱即安全”的强烈期望，尤其关注自部署/面板场景下的日志与截图泄露风险。
- **满意度信号**：三条安全 Issue 从报告（08-31）到全部关闭仅 10 天，且修复方案（30 秒单次票据 + CSRF 保护）超出最低修复标准，社区对维护者的响应速度与修复质量应有正面感知。

## 8. 待处理积压

- [PR #677](https://github.com/qhkm/zeptoclaw/pull/677)：今日新开、唯一待合并 PR，建议尽快 review 合并以恢复 audit check 上报。
- 值得注意：17 个 Dependabot PR（多数 6 月初创建）拖至近 3 个月后才集中处理，建议调高 Dependabot 自动合并/分组策略，避免再次形成积压。
- 建议 #656 中提及的 token 文件权限问题若尚未立案，及时跟踪收尾。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 — 2026-09-11

## 1. 今日速览

- 今日项目社区侧（Issues/PR）**零活跃**：无新开、无评论、无合并，社区讨论进入静默期。
- 但发布侧**高度活跃**：24 小时内连续发布 **4 个版本（v1.9.11 → v1.9.14）**，节奏密集，表明维护者正处于集中修复与打包优化冲刺阶段。
- 版本主线聚焦三件事：**桌面端启动稳定性、安装包体积优化、飞书中断会话恢复**。
- 综合评估：项目处于「维护者驱动快速迭代」阶段，健康度良好，但社区参与度数据今日无法体现（无互动样本）。

## 2. 版本发布

### v1.9.14 — TK Copilot（最新）
🔗 https://github.com/gaoyangz77/easyclaw/releases/tag/v1.9.14
- 修复飞书中断会话在客户端启动后仍被阻塞、仅表情回应无回复的问题
- 启动时恢复中断会话状态，同时保留聊天历史与模型选择
- 迁移建议：飞书渠道用户建议尽快升级

### v1.9.13 — 安装包瘦身
🔗 https://github.com/gaoyangz77/easyclaw/releases/tag/v1.9.13
- 移除仅开发用文件及其他平台 SQLite 二进制，显著缩小安装包
- 对相同内置依赖去重，保留插件加载与已有会话启动能力
- 注意：属打包结构变更，插件开发者建议升级后验证插件加载是否正常

### v1.9.12 — 启动稳定性
🔗 https://github.com/gaoyangz77/easyclaw/releases/tag/v1.9.12
- 将 vendor SQLite 状态迁移隔离到 Node 子进程，降低启动失败风险
- 加强 Windows 与 Intel Mac 打包校验，确保签名发布携带必要运行时依赖

### v1.9.11 — 依赖升级
🔗 https://github.com/gaoyangz77/easyclaw/releases/tag/v1.9.11
- 升级 OpenClaw 至 v2026.9.3
- Gateway 正常重启不再过早触发频道保护；等待 Gateway 认证完成后再发送聊天请求
- 改进启动诊断，修复 Windows 构建依赖加载

**破坏性变更**：4 个版本均未见明确 breaking change 声明，以修复与优化为主。

## 3. 项目进展

今日无 PR 合并记录（可能在发布分支直接操作）。但从版本内容推断，项目在一天内推进了：飞书渠道可靠性（v1.9.14）→ 分发体积（v1.9.13）→ 桌面启动健壮性（v1.9.12）→ 核心依赖升级（v1.9.11），迭代速度较快。

## 4. 社区热点

今日无活跃 Issues/PRs，无社区讨论数据可分析。

## 5. Bug 与稳定性

- 今日**无用户报告的新 Bug**（0 条 Issue）。
- 维护者自驱修复的稳定性问题：飞书中断会话阻塞（已在 v1.9.14 修复）、桌面启动失败（v1.9.12 修复）、Windows 构建依赖加载（v1.9.11 修复）。

## 6. 功能请求与路线图信号

今日无新功能请求。从发布节奏可推测近期优先级为：**多渠道（飞书）可靠性 → 桌面端分发质量 → 核心依赖跟进（OpenClaw）**。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户反馈。建议结合 Release 反应数（本次数据未提供）补充观测。

## 8. 待处理积压

今日数据中无开放 Issue/PR，暂无积压提醒。建议持续跟踪 Issue 响应时长指标，以确保社区静默不掩盖未响应的用户诉求。

---
*数据来源：GitHub API 快照（2026-09-11）。本期社区互动为零，日报重点反映发布侧动态。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*