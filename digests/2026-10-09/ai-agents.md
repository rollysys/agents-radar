# OpenClaw 生态日报 2026-10-09

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-09 05:10 UTC

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

# OpenClaw 项目动态日报 · 2026-10-09

---

## 1. 今日速览

OpenClaw 今日保持高活跃度：过去 24 小时 Issue 更新 500 条（新开/活跃 352，关闭 148），PR 更新 500 条（待合并 355，已合并/关闭 145），并发布了新版本 **v2026.9.9**（185 commits、112 PR、92 位贡献者）。社区讨论焦点集中在 **Gateway 事件循环阻塞、升级/更新链路失败、插件 source-capture 性能** 三大类问题上。总体看，项目处于快速迭代期，版本节奏稳定（约每 1-2 天一个 patch），但升级可靠性与 Windows 平台兼容性仍是用户反复踩坑的痛点，需要重点关注。

---

## 2. 版本发布

### v2026.9.9（2026-10-09）

- **规模**：185 commits · 112 PRs · 92 贡献者
- **Release Notes**: [docs.openclaw.ai/releases/2026.9.9](https://docs.openclaw.ai/releases/2026)
- **内容**：包含此前数日累积的性能优化、Gateway worker 化重构（如主线程 SQLite 迁移、plugin source-capture 复用）及多项 P0/P1 修复。

**⚠️ 升级注意事项**：
- 新版本发布当天即有用户报告 2026.9.8 → 2026.9.9 升级在 `package-swap` 阶段失败（恢复权限校验不通过），见 [#167376](https://github.com/openclaw/openclaw/issues/167376)。建议生产环境**暂缓自动升级**，待维护者确认后再操作。
- 从 2026.9.7/9.8 升级的用户如遇 Doctor 卡住或原生更新恢复停滞，参考 [#164074](https://github.com/openclaw/openclaw/issues/164074)、[#164113](https://github.com/openclaw/openclaw/issues/164113)。

---

## 3. 项目进展

今日活跃 PR 以核心维护者 **@steipete** 的密集提交为主，主线方向清晰：**将 Gateway 主线程的同步 SQLite/文件系统工作迁移到 worker，消除事件循环阻塞**——这正对应了社区最高频的稳定性投诉。

重点 PR：

| PR | 内容 | 状态 |
|---|---|---|
| [#167535](https://github.com/openclaw/openclaw/pull/167535) | Doctor 各阶段复用 plugin source captures，直接缓解 #160959/#162585 大插件捕获阻塞问题 | 已关闭（合并） |
| [#167578](https://github.com/openclaw/openclaw/pull/167578) | 会话条目写入迁移到 worker，消除主线程 SQLite | 待合并 |
| [#167547](https://github.com/openclaw/openclaw/pull/167547) | Agent/Claw 退役流程的 SQLite 工作移出主线程 | 待合并 |
| [#167566](https://github.com/openclaw/openclaw/pull/167566) | **P1** 取消回复时终止媒体预处理（含 fallback 模型请求），关闭 #127540 | 待合并 |
| [#166269](https://github.com/openclaw/openclaw/pull/166269) | 保留队列中的 abort 元数据，修复发布验证中发现两次的取消竞态 | automerge armed |
| [#166650](https://github.com/openclaw/openclaw/pull/166650) | **P0** 阻止内存保存期间运行无关工具（安全边界） | 待合并 |
| [#167516](https://github.com/openclaw/openclaw/pull/167516) | 插件捕获批量 guarded copies，降低重复文件系统开销 | 待合并 |
| [#167411](https://github.com/openclaw/openclaw/pull/167411) | 七天冷却期依赖全量刷新（超大规模 XL PR，覆盖几乎所有 extension） | 待合并 |
| [#167570](https://github.com/openclaw/openclaw/pull/167570) | 修复已提交写操作被误报失败的问题 | 待合并 |

另有一批工程效率改进：[#167601](https://github.com/openclaw/openclaw/pull/167601)、[#167605](https://github.com/openclaw/openclaw/pull/167605)、[#167541](https://github.com/openclaw/openclaw/pull/167541) 统一 worker-admission 测试探针；[#167612](https://github.com/openclaw/openclaw/pull/167612) 修复 `scripts/pr` 在 main 前进时中断落地的流程缺陷。

**评估**：今日进展实质性推进了“Gateway 去阻塞化”这一当前最核心的架构目标，若 #167578/#167547 落地，#119720、#162211 等长期 P1/P0 事件循环问题有望显著缓解。

---

## 4. 社区热点

1. **[#119720](https://github.com/openclaw/openclaw/issues/119720)**（24 评论，P1）— 同步 agent 持久化与 transcript 维护阻塞 Gateway 事件循环。长期追踪贴，部分修复已落地（#140231、#138984），用户持续跟进验证。诉求：大规模部署下的吞吐稳定性。
2. **[#142585](https://github.com/openclaw/openclaw/issues/142585)**（21 评论，P0，已关闭）— 2026.9.3 Doctor 拒绝迁移合法旧版 workspace/attestation。反映**老版本升级路径**仍有回归，是 stable 通道用户的迁移阻塞器。
3. **[#97616](https://github.com/openclaw/openclaw/issues/97616)**（18 评论，P1）— hook/工具子进程未回收导致僵尸进程累积，长时间运行后运行时劣化。多平台复现，尚无完整修复。
4. **[#157531](https://github.com/openclaw/openclaw/issues/157531)**（16 评论）— 2026.9.7 修复追踪贴，维护者与贡献者协调 P1 候选修复的主战场，体现社区协作的发布节奏。
5. **[#157325](https://github.com/openclaw/openclaw/issues/157325)**（16 评论，P0）— agent-DB 资源卡死后**所有 agent 回复失败**直至重启 Gateway（Windows + 飞书 + WhatsApp 多账号部署）。诉求：故障隔离与自恢复能力。
6. **[#154572](https://github.com/openclaw/openclaw/issues/154572)**（14 评论，P1）— `sessions_spawn` 到 claude-cli 子代理必然失败（SessionTranscriptWriterClaimReboundError），标记 queueable-fix，等待修复落地。

**趋势解读**：热点几乎全部指向“单点故障放大”（一个资源/一条 lane 卡死拖垮整个 Gateway）和“升级链路可靠性”，这两点是当前用户流失风险最高的领域。

---

## 5. Bug 与稳定性（按严重度）

### P0
- **[#167376](https://github.com/openclaw/openclaw/issues/167376)**（已关闭）：9.8→9.9 升级连续两次在 package-swap 失败，“恢复权限不安全”。⚠️ 直接影响今日新版本采用率。
- **[#162211](https://github.com/openclaw/openclaw/issues/162211)**：启动阻塞事件循环 40-200s，健康监控误判断连升级为重启循环。相关 worker 化 PR 进行中。
- **[#160959](https://github.com/openclaw/openclaw/issues/160959)**：大外部插件导致 Gateway 阻塞数分钟（9.6 回归）。→ **已有修复方向**：#167535（已合并）+ #167516。
- **[#164113](https://github.com/openclaw/openclaw/issues/164113)**（已关闭）：非特权 LXC 下 FICLONE EPERM 导致更新失败，已修复。

### P1
- **[#165686](https://github.com/openclaw/openclaw/issues/165686)**（已关闭）：Windows 升级 9.8 后 CPU 飙高、事件循环饥饿（Codex catalog 重建）。
- **[#145203](https://github.com/openclaw/openclaw/issues/145203)**：openai-completions SSE 流挂起 48 分钟不恢复，watchdog 被 stream_progress “喂活”。
- **[#112259](https://github.com/openclaw/openclaw/issues/112259)**：入站消息可被静默丢弃（零 payload、无重试、无死信）——**消息丢失类，优先级应上调**。
- **[#157617](https://github.com/openclaw/openclaw/issues/157617)**：大规模 SQLite（2.8GB）下 session writer 队列等待数分钟。
- **[#154572](https://github.com/openclaw/openclaw/issues/154572)**：claude-cli 子代理 spawn 失败，已标记 queueable-fix，修复排队中。

### P2
- **[#162585](https://github.com/openclaw/openclaw/issues/162585)**：Windows 插件捕获 staging 自我循环复制不收敛（290MB→612MB+/24min）。
- **[#166650](https://github.com/openclaw/openclaw/pull/166650)**（PR，P0）：内存保存期间无关工具可执行——安全边界问题，fix PR 已提交待审。

---

## 6. 功能请求与路线图信号

- **[#44309](https://github.com/openclaw/openclaw/issues/44309)**：A2A 单向 handoff 模式（无回执乒乓）。多 agent 编排的核心诉求，已挂 needs-product-decision，建议纳入下个 minor 版本讨论。
- **[#81960](https://github.com/openclaw/openclaw/issues/81960)**：onboarding 支持配置多 provider/多模型。降低上手门槛，与 #163242（HuggingFace OAuth 登录，PR 已提交）方向一致，**很可能近期落地**。
- **[#56781](https://github.com/openclaw/openclaw/issues/56781)**：compaction/摘要模型的 fallback 链。与 #97335（cron fallback 失效）同源，模型容错是系统性缺口。
- **[#88154](https://github.com/openclaw/openclaw/issues/88154)**：Slack Modal 交互式表单支持，社区期待较高。
- **[#41366](https://github.com/openclaw/openclaw/issues/41366)**：跨层自然语言规则学习与 @提及回复语义，产品层面的长期方向信号。
- **[#77700](https://github.com/openclaw/openclaw/issues/77700)**（maintainer 追踪贴）：Prepared Runtime Resolution 迁移——官方架构路线图，与本周 worker 化 PR 群相呼应。

**判断**：下一版本大概率继续聚焦稳定性（更新链路 + 事件循环），功能侧 HuggingFace OAuth 和多 provider onboarding 最接近落地。

---

## 7. 用户反馈摘要

**痛点（高频出现）**：
- **升级即事故**：多个 P0 均为升级路径问题（Doctor 拒绝迁移、package-swap 失败、更新挂起）。Windows / LXC / Podman 等非标准环境受影响最重。
- “一个组件卡死，整个 Gateway 不可用”：[#157325](https://github.com/openclaw/openclaw/issues/157325) 中用户 9 个飞书账号 + WhatsApp 全部失联直至手动重启，缺乏故障隔离。
- **静默失败**：消息丢失无重试/死信（#112259）、cron 任务静默超时（#45494）、fallback 模型在 cron 中不生效（#97335）。
- **大部署成本恶化**：大 SQLite 库、大插件依赖树下性能断崖（#157617、#160959、#162585）。

**满意点**：
- 发布节奏快、修复追踪贴（如 #157531）透明，AI 辅助分诊标签（clawsweeper、impact、issue-rating）体系受到社区认可。
- 维护者响应积极，多个 P0 当日或数日内关闭（#164113、#167376、#165686）。
- 多渠道（Telegram/WhatsApp/飞书/Slack/Discord/Matrix）覆盖广泛，用户愿意在复杂生产环境持续投入调试——反映较强的产品粘性。

---

## 8. 待处理积压（提醒维护者关注）

| Issue/PR | 状态 | 积压时长 | 关注理由 |
|---|---|---|---|
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | Open | **8 个月** | Webhook sessionKey 多轮文档与实现不符，涉及 data-loss/security 标签 |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | Open | 6.5 个月 | XDG_CONFIG_HOME 不生效，容器用户常见，linked PR 仍开放 |
| [#41201](https://github.com/openclaw/openclaw/issues/41201) | Open | 7 个月 | Control UI 头像损坏，涉及安全审查，用户可见度高 |
| [#41165](https://github.com/openclaw/openclaw/issues/41165) | Open | 7 个月 | Telegram DM 污染主会话，linked PR 开放中 |
| [#98790](https://github.com/openclaw/openclaw/issues/98790) | Closed | — | 会话树分叉永久污染 transcript（platinum 级），建议确认修复是否有回归测试 |
| [#149133](https://github.com/openclaw/openclaw/issues/149133) | Open (stale) | ~1 个月 | 后台唤醒可把 fallback 输出泄露到外部路由，**含 security 影响**，不应 stale |
| [#91144](https://github.com/openclaw/openclaw/issues/91144) | Open | 4 个月 | Windows 计划任务下 Gateway 不保活，Windows 用户长期痛点 |
| [#142957](https://github.com/openclaw/openclaw/pull/142957) | Open | 1 个月 | XL 级：配对操作员 HTTPS 连接，security-boundary，需维护者投入评审带宽 |

**健康度总评**：🟢 活跃度优秀、修复吞吐强；🟡 升级链路可靠性与主线程阻塞是当前两大系统性风险，worker 化改造若按计划落地，预计 1-2 个版本内稳定性将明显改善。

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告

**数据日期：2026-10-09**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**规模化竞争与差异化并存**的阶段：以 OpenClaw 为代表的头部项目保持日均 500+ Issue/PR 更新的超高频迭代，而大量中小项目（PicoClaw、NullClaw、IronClaw 等）处于功能孵化或低速维护状态。生态呈现三个显著共性：**多消息通道集成**（WhatsApp/Telegram/Slack/飞书/Discord/iMessage）成为标配能力，**上下文压缩与记忆持久化**是普遍技术攻坚点，**升级/安装链路可靠性**是各项目共同的流失风险源。同时，Provider 层碎片化（OpenAI Responses API、推理模型、国产模型兼容）催生了大量重复性修复工作，声明式路由与模型能力降级机制开始被多个项目探索。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 合并/关闭 | Release | 健康度 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（352 活跃/148 关闭） | 500（355 待合并） | 145 | ✅ v2026.9.9 | 🟢 优秀 |
| **Hermes Agent** | 50（48 活跃/仅 2 关闭） | 50 | 14 | ✅ v0.21.6 | 🟢 良好（triage 带宽承压） |
| **Zeroclaw** | 16（0 关闭） | 46 | 8 | ❌（v0.8.6 收口中） | 🟢 良好（贡献集中度高） |
| **CoPaw** | 28（15/13） | 33 | 11 | ❌（2.2.2-beta.4） | 🟢 良好偏优 |
| **NanoBot** | 5 | 22 | 11（50% 合并率） | ❌ | 🟢 良好 |
| **LobsterAI** | 0 | 20（多为 stale 清理） | 14 | ❌ | 🟡 中等（积压清理期） |
| **NanoClaw** | 0 | 5 | 2 | ❌ | 🟡 中等（Issue 静默） |
| **NullClaw** | 0 | 5 | 0 | ❌ | 🟡 中等（管道充足、合并为零） |
| **IronClaw** | 2 | 2 | 0 | ❌ | 🟡 孵化期 |
| **Moltis** | 2 | 0 | 0 | ❌ | 🟡 维护型 |
| **PicoClaw** | 0 | 2 | 0 | ❌ | 🔴 PR 审阅响应停滞 |
| **EasyClaw** | 0 | 0 | 0 | ✅ v1.9.28 | 🟡 单人交付型 |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 0 | ❌ | ⚪ 无活动 |

**分层结论**：OpenClaw 活跃度约为第二梯队（Hermes/Zeroclaw/CoPaw）的 10 倍量级；中腰部项目的共同短板是 **review 带宽不足**（NullClaw、PicoClaw、IronClaw 均出现功能完整的 PR 悬置 1 个月以上）。

---

## 3. OpenClaw 在生态中的定位

**优势**：
- **社区规模与修复吞吐断层领先**：92 位贡献者参与单版本、185 commits/1-2 天一版，多个 P0 当日或数日内闭环（#164113、#167376、#165686），其他项目无一能达到此响应速度。
- **渠道覆盖最广**：Telegram/WhatsApp/飞书/Slack/Discord/Matrix 全渠道，且用户已在多账号生产环境（9 个飞书账号 + WhatsApp）深度部署。
- **工程化体系成熟**：AI 辅助分诊标签、修复追踪贴、发布验证流程构成完整的工程治理体系。

**技术路线差异**：
- OpenClaw 正在实施 **Gateway worker 化架构改造**（主线程 SQLite/FS 迁移至 worker），将“单点故障放大”作为系统性架构问题解决；Zeroclaw 走 Rust + 沙箱安全（firejail/egress 拒绝）路线；Hermes 侧重网关消息通道与语音链路；CoPaw 聚焦前端体验与持久化。
- 差距点：OpenClaw 的**升级链路可靠性**（package-swap 失败、Doctor 拒绝迁移）和 **Windows 兼容性**是用户反复踩坑的痛点，中小项目反而在这些方面压力较小。

**相对风险**：规模带来的复杂度反噬——今日社区热点几乎全部指向“一个资源卡死拖垮整个 Gateway”和“升级即事故”，这是超大规模用户基数下的特有挑战。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **上下文压缩的成本与静默化** | NanoBot、Hermes、CoPaw、OpenClaw | 空会话压缩循环打爆 API（NanoBot #6106）、压缩通知刷屏（NanoBot #6084）、压缩期间假性报错（Hermes #132329）、专用压缩模型（NanoBot #6109、OpenClaw #56781） |
| **消息静默丢失** | OpenClaw、Zeroclaw、CoPaw | 入站消息无重试/死信（OpenClaw #112259）、SESSION_BUSY 队列丢弃（Zeroclaw #11618）、飞书图片静默丢弃、流错误后会话全丢（CoPaw #8109）——**多项目 P0/P1 级共性缺陷** |
| **Provider/Responses API 兼容** | NanoBot、NullClaw、CoPaw、Hermes、Zeroclaw | SSE 推理流事件、SDK 版本兼容、模型路由错误（Hermes #134844）、推理模型 `finish_reason=length`（NullClaw #1050） |
| **成本可观测性** | Zeroclaw、LobsterAI、CoPaw | OpenRouter 费用恒为 $0（Zeroclaw #11204）、隐藏 token 未计费（#11613）、LobsterAI Trace ID 贯通用量账本（#2814） |
| **升级/安装链路** | OpenClaw、Hermes、NanoClaw | 两项目均出现“发布当天升级失败”的 P0，是生态级系统性风险 |
| **iMessage/SMS 通道** | IronClaw、NanoBot | Sendblue 扩展几乎同步出现（IronClaw #8127、NanoBot #6081），用户主权凭证是共同设计关切 |
| **会话持久化保真** | Zeroclaw、CoPaw | SQLite 时间戳丢失（#11420）、聊天记录与上下文窗口解耦（CoPaw #8134，最热 Issue） |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | Zeroclaw | NanoBot | CoPaw | 其他 |
|---|---|---|---|---|---|---|
| **功能侧重** | 全渠道生产级 Gateway | 多通道 + 语音/TTS 桌面体验 | TUI + 沙箱安全 | Provider 兼容 + WebUI 轻量化 | Console 前端 + 评测体系 | — |
| **目标用户** | 企业/重度多账号部署 | 桌面个人用户 | 开发者/安全敏感用户 | 轻量自托管用户 | 中文/CJK 用户群明显 | IronClaw 偏评测研究 |
| **架构特点** | TS、worker 化改造中 | Python、插件化 runtime | Rust、RPC 化 + firejail 沙箱 | 多语言贡献、声明式 preset 方向 | Tauri2（正讨论迁 Electron #8142，麒麟 V10 兼容） | NullClaw 为单二进制边缘部署 |

**关键观察**：Zeroclaw 与 NullClaw 面向边缘/安全场景；EasyClaw 实为垂直电商运营工具，与“通用个人助手”定位偏离；Moltis 以 provider 分层架构获第三方网关主动对接（#1296），走生态集成路线。

---

## 6. 社区热度与成熟度

- **快速迭代期**：OpenClaw（1-2 天一版但稳定性欠账）、Hermes（“发布—回灌修复”循环）、Zeroclaw（v0.8.6 收口）、CoPaw（2.2.2 正式版临近，收敛迹象明显）
- **质量巩固期**：NanoBot（Provider 层系统性补课）、LobsterAI（stale 清理 + release 分支准备）、NanoClaw（CI 基础设施自主化）
- **孵化/维护期**：NullClaw、IronClaw、Moltis、EasyClaw；PicoClaw 存在贡献者流失风险
- **成熟度悖论**：活跃度最高的项目（OpenClaw、Hermes）反而承受最重的升级回归压力——用户基数放大了每条升级路径缺陷的爆炸半径。

---

## 7. 值得关注的趋势信号

1. **“后台自动化必须静默且可控”成为产品共识**：压缩/dream/cron 的通知刷屏、token 失控消耗（NanoBot 整夜打爆 API、Hermes tool_search 1523 次调用）反复出现。**对开发者的启示**：任何后台任务都需要预算上限、任务级迭代 cap 与用户可见的静默开关，这应作为架构级默认而非补丁。
2. **静默失败是智能体信任的头号杀手**：消息丢失、配置静默失效（Zeroclaw firejail_args）、插件依赖静默丢失（Hermes PM runtime）横跨所有项目。**死信队列 + 配置生效校验**应尽早内建。
3. **安全边界向子代理/工具层下沉**：NanoBot 子代理绕过工具限制（#6112）、OpenClaw 内存保存期间工具执行（#166650）、LobsterAI MCP 注入（#2590）——多 agent 编排下的权限继承模型是下一个必争之地，且多个安全 PR 长期悬置，评审带宽欠账明显。
4. **声明式 Provider 路由收敛碎片化**：NanoBot #5204、OpenClaw 多 provider onboarding 均指向同一方向，模型网关生态（A2Agent 主动对接 Moltis）正在加速这一进程。
5. **成本账本成为核心信任面**：Zeroclaw/LobsterAI/CoPaw 同时推进用量透明化，表明用户已从“能用”进入“算得清账”阶段。
6. **A2A/多 agent 互操作仍是远期**：OpenClaw #44309 与 Zeroclaw #11254 均处于 needs-decision/RFC 状态，尚无项目实质性落地，属生态空白机会。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-10-09）

**仓库**：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

今日 NanoBot 保持高活跃度：过去 24 小时共 **5 条 Issue 更新（新开/活跃 2、关闭 3）**、**22 条 PR 更新（待合并 11、已合并/关闭 11）**，合并/关闭比例达 50%，处理效率良好。**无新版本发布**，主分支处于功能快速迭代期。今日主线明显集中在三条脉络：**Providers/Responses API 兼容性修复**（多条已关闭）、**上下文压缩的静默化与通知体验优化**、以及 **WebUI 工作区/目录选择器重构**。社区贡献者多元（十余位不同作者提 PR），项目健康度较高。

---

## 2. 版本发布

今日无新 Release。注意：多条 PR/Issue 提到 `v0.3.5` 为当前最新发布版，而大量修复仅存在于 `main`（如 #5780 已合入但未发布），下个版本发布时值得期待。

---

## 3. 项目进展

今日关闭的 11 条 PR 主要落地了以下内容：

**Providers / Responses API 一批修复（重灾区清理）**
- [#5863](https://github.com/HKUDS/nanobot/pull/5863) / [#5834](https://github.com/HKUDS/nanobot/pull/5834)：SSE Responses 消费器支持 `response.reasoning_text.*` 事件（修复 #5833，Grok/Codex 推理内容流式输出）
- [#6051](https://github.com/HKUDS/nanobot/pull/6051)：按 `item_id` 路由 Responses 工具参数事件，修复并行工具调用错乱
- [#6020](https://github.com/HKUDS/nanobot/pull/6020)：OpenAI SDK 3.8.0 下用 API 别名序列化（修复 `async_` 字段问题）
- [#5935](https://github.com/HKUDS/nanobot/pull/5935)：Copilot GPT-6 路由至 Responses API
- [#6105](https://github.com/HKUDS/nanobot/pull/6105) / [#5906](https://github.com/HKUDS/nanobot/pull/5906)：OpenCode Go muse-spark 模型切换到 Responses（两组重复贡献，均已关闭）
- [#6107](https://github.com/HKUDS/nanobot/pull/6107)：内联图片批处理预备 + Codex 传输恢复

**WebUI / 通道**
- [#6089](https://github.com/HKUDS/nanobot/pull/6089)：应用内目录列选择器替换原生工作区选择器，composer 操作精简
- [#6108](https://github.com/HKUDS/nanobot/pull/6108)：普通聊天中保留 `/` 前缀路径（不再误判为命令）

**整体评价**：Provider 层完成了一轮系统性补课（推理流、工具调用、SDK 兼容、模型路由），配合 WebUI 改版 PR 的落地，项目在稳定性和体验两个方向均有实质推进。

---

## 4. 社区热点

- **[#6106](https://github.com/HKUDS/nanobot/issues/6106)（已关闭，4 评论）**：空会话上压缩循环整夜触发、API 被打爆——用户损失真实，是今日讨论最热的 Issue。
- **[#6084](https://github.com/HKUDS/nanobot/issues/6084)（OPEN，3 评论）**：Slack 每次压缩发两条系统消息刷屏，用户诉求是“系统内部维护操作不应打扰对话”。**已有对应 fix PR [#6110](https://github.com/HKUDS/nanobot/pull/6110)**（用 `chat.update` 原地替换通知）。
- **[#6029](https://github.com/HKUDS/nanobot/issues/6029)（已关闭）**：与 #6084 同源的诉求——后台 idle/dream 周期应静默压缩、不向频道广播。

**共性诉求**：后台自动化（compaction / dream / heartbeat）的可见性控制，是当前社区最集中的体验痛点，涉及安全（token 消耗）+ 体验（消息刷屏）双维度。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#6106](https://github.com/HKUDS/nanobot/issues/6106) 空会话压缩无限循环，整夜打爆 API（成本事故） | 已关闭 | 相关静默逻辑已由 #5780 合入 main |
| 🟠 中 | [#5781](https://github.com/HKUDS/nanobot/issues/5781) Dream 任务循环 1–2 小时重复读同一文件，`dream.maxIterations` 被弃用失效，仅受全局 200 次上限约束 | 已关闭 | 待观察，涉及任务级迭代上限设计 |
| 🟠 中 | [#6084](https://github.com/HKUDS/nanobot/issues/6084) Slack 压缩通知双消息刷屏 | OPEN | [#6110](https://github.com/HKUDS/nanobot/pull/6110) 待审 |
| 🟡 低 | [#6112](https://github.com/HKUDS/nanobot/pull/6112) 指出的**子代理绕过工具限制**（父会话禁 `write_file`，子代理可代写）——安全类缺陷 | PR 待审 | 即 #6112 本身 |

---

## 6. 功能请求与路线图信号

- **专用压缩模型**：[#6109](https://github.com/HKUDS/nanobot/pull/6109) `compactModelPreset`——为压缩/归档任务指定独立低价模型，直接回应 #6106 类成本痛点，**纳入下版本概率高**。
- **Windows 工作区选择器增强**：[#6111](https://github.com/HKUDS/nanobot/issues/6111) 要求盘符列表、文件夹创建、常用位置快捷方式——与刚合入的 #6089 目录选择器改版一脉相承，是自然的后续迭代。
- **WebUI 本地扩展面**：[#6032](https://github.com/HKUDS/nanobot/pull/6032) 可信浏览器端扩展机制——平台化信号，值得关注。
- **会话历史 FTS5 加速**：[#5826](https://github.com/HKUDS/nanobot/pull/5826) SQLite 全文索引——大数据量用户的性能刚需。
- **新通道**：[#6081](https://github.com/HKUDS/nanobot/pull/6081) Sendblue iMessage/SMS 通道、[#6007](https://github.com/HKUDS/nanobot/pull/6007) QQ 引用消息透传——通道生态持续扩张。

---

## 7. 用户反馈摘要

- **成本焦虑**：#6106 用户因后台压缩循环整夜消耗 API 配额，“一觉醒来 API 被异常大量调用”，反映默认配置（15 分钟 idle 压缩）对空闲用户不友好。
- **自动化失控感**：#5781 用户观察到 Dream 任务 25–111 分钟反复读同一文件，且配置项（`dream.maxIterations`）被静默弃用，产生“配置无效”的挫败感。
- **通知洁癖**：Slack/QQ 用户明确不希望“Compressing context…”这类系统维护消息出现在 DM 中（#6084、#6029）。
- **积极信号**：Windows 用户对重构后的工作区选择器评价“好看多了”（#6111），表明 WebUI 改版方向获得认可。

---

## 8. 待处理积压

- **[#5204](https://github.com/HKUDS/nanobot/pull/5204)（P1，8/1 开启，已挂 2 个月+）**：按 preset 声明请求 API——P1 优先级却长期未合并，且与 #5935（GPT-6 路由）功能重叠，建议尽快定案以避免后续重复修复。
- **[#5769](https://github.com/HKUDS/nanobot/pull/5769)（9/14 开启）**：NIM 超时 failover 修复，标记 conflict，需要 rebase 后推进。
- **[#5826](https://github.com/HKUDS/nanobot/pull/5826)、[#6032](https://github.com/HKUDS/nanobot/pull/6032)**：均为大体量功能 PR，挂起 5 天以上，建议维护者给出评审排期。
- **#6112（子代理工具限制绕过）**：安全相关，今日新开，建议优先评审。

---

**健康度小结**：贡献者活跃、Issue 关闭及时、无明显维护者缺位；主要风险在于 Provider 层修复类 PR 重复率高（多个 conflict/duplicate），建议通过 #5204 的声明式路由方案收敛长期方案。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 — 2026-10-09

## 1. 今日速览

过去 24 小时 Zeroclaw 保持高活跃度：16 条 Issue 活跃（全部为 OPEN，无关闭），46 条 PR 更新（38 条待合并、8 条已合并/关闭），无新版本发布。今日焦点集中在 **ZeroCode (TUI) 会话可靠性**、**成本统计准确性** 和 **沙箱安全配置** 三条线上，新增多个 S1 级 Bug（内存泄漏、消息丢失）。贡献者 @IftekharUddin 继续主导 plugins/RPC 大型 PR 链（XL 级堆叠），@Audacity88 则密集提交 ZeroCode 修复与新特性，形成“大架构 + 小修复合围”的健康节奏。

## 2. 版本发布

今日无新版本发布。多个 PR 标注 `release:v0.8.6`（如 [#11308](https://github.com/zeroclaw-labs/zeroclaw/pull/11308)、[#11629](https://github.com/zeroclaw-labs/zeroclaw/pull/11629)），表明 v0.8.6 正在 release-gate 阶段收口。

## 3. 项目进展

今日有 8 条 PR 合并/关闭，以测试稳定性与小修复为主：

- **[#11308](https://github.com/zeroclaw-labs/zeroclaw/pull/11308)（CLOSED）** — 类型化内置工具清单 + tier ratchet，是 v0.8.6 release-gate 的核心内容之一。
- **[#11349](https://github.com/zeroclaw-labs/zeroclaw/pull/11349)、[#11395](https://github.com/zeroclaw-labs/zeroclaw/pull/11395)、[#11396](https://github.com/zeroclaw-labs/zeroclaw/pull/11396)、[#11380](https://github.com/zeroclaw-labs/zeroclaw/pull/11380)（CLOSED）** — 一批测试去脆弱化修复：RPC drain 测试锁持有、500 重试跳过、硬件 pipe 测试计时、skills 缓存时间戳确定化。CI 可靠性显著提升。
- **进行中的主线**：[#11320](https://github.com/zeroclaw-labs/zeroclaw/pull/11320)（插件 webhook 走 core RPC，XL，依赖 #11319/#11165）、[#11265](https://github.com/zeroclaw-labs/zeroclaw/pull/11265)（CLI 用户密码生命周期）、[#11530](https://github.com/zeroclaw-labs/zeroclaw/pull/11530)（Tailscale 隧道发布 WSS/enrollment）持续推进。

整体看，项目正从 v0.8.6 的大特性（工具清单、插件 RPC 化）过渡到修复与测试硬化阶段。

## 4. 社区热点

- **[#8692](https://github.com/zeroclaw-labs/zeroclaw/pull/8692) Tracker：维护者决策队列**（15 评论，7 月至今持续活跃）— RFC/设计决策的集中审批面板，反映维护者带宽是当前瓶颈。
- **[#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) SQLite 会话后端丢失消息时间戳**（6 评论，今日仍活跃）— 用户对会话历史保真度的核心诉求，与 #11620/#11622 形成完整故事线。
- **[#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) 超大图片降级而非丢弃**（5 评论）— 多模态可用性诉求，已 accepted 但 blocked/parking-lot。
- **[#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) OpenRouter 费用恒为 $0**（3 评论，今日活跃）— 成本可观测性是付费 API 用户的强痛点，与 #11613、#11535 同属 cost ledger 问题簇。
- **[#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) A2A 协议 crate RFC**（2 评论）— 生态互操作性方向，needs-author-action。

## 5. Bug 与稳定性（按严重度）

**S1 — 工作流阻塞：**
1. **[#11614](https://github.com/zeroclaw-labs/zeroclaw/issues/11614)** `map_key_sections` 每次调用泄漏 schema 路径（`Box::leak`），daemon 内存持续增长。**尚无 fix PR**，⚠️ 建议优先处理。
2. **[#11615](https://github.com/zeroclaw-labs/zeroclaw/issues/11615)** Telegram 429 忽略 `retry_after` 立即重试，回复可能完全丢失。无 fix PR。
3. **[#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612)** 监督模式下重跑已批准 shell 命令触发重复调用保护，中止 agent 循环并终止 ACP 会话。无 fix PR。

**S2 — 行为退化：**
4. **[#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)** SQLite 每轮重写全部消息且时间戳统一覆盖。无直接 fix PR。
5. **[#11484](https://github.com/zeroclaw-labs/zeroclaw/issues/11484)** ZeroCode Agent turn 禁用了重复工具防护（与 #11612 根因可能相关），**status:in-progress**。
6. **[#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204)** OpenRouter usage.cost 未入库，全部记为 free tok。相关修复方向见 [#11535](https://github.com/zeroclaw-labs/zeroclaw/pull/11535)（AgentEnd 成本归因，部分覆盖）。
7. **[#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594)** `firejail_args` 配置项声明但从未实际生效——安全配置“静默失效”，风险标签 high。
8. **[#11618](https://github.com/zeroclaw-labs/zeroclaw/issues/11618)** ZeroCode 队列消息在 SESSION_BUSY 拒绝时静默丢失；相关重构 [#11494](https://github.com/zeroclaw-labs/zeroclaw/pull/11494)（消息队列所有权隔离）进行中。
9. **[#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613)** Gemini 隐藏推理 token 未计入成本账本。
10. **[#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623)** ZeroCode 丢弃待答 ask_user 提示，600s 超时且无记录。

## 6. 功能请求与路线图信号

- **[#11620](https://github.com/zeroclaw-labs/zeroclaw/issues/11620) 转录显示消息时间** → **已有实现 PR [#11622](https://github.com/zeroclaw-labs/zeroclaw/pull/11622)**（昨日开、今日活跃），大概率进入下个版本。
- **[#11626](https://github.com/zeroclaw-labs/zeroclaw/issues/11626)** 插件 egress 拒绝日志按 instance+host 去重 → 与已关闭的 [#11304](https://github.com/zeroclaw-labs/zeroclaw/pull/11304)（记录 socket/WebSocket egress 拒绝）直接衔接，很可能作为 follow-up 实施。
- **[#11598](https://github.com/zeroclaw-labs/zeroclaw/pull/11598)** 命令白名单支持 glob 匹配 → 提升 skills/plugins 易用性，体量小（S），合入概率高。
- **[#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) A2A crate RFC** → needs-author-action，是通往多 agent 互操作的关键路径，但短期合入概率低。
- **[#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887)** 图片降级 + `0` 禁用限制 → accepted 但 parking-lot，需关注是否进入 v0.8.7。

## 7. 用户反馈摘要

- **成本透明度是最大痛点**：#11204/#11613 显示重度 API 用户依赖 Dashboard 成本视图做预算，数据错误直接损害信任。
- **ZeroCode 会话可靠性**：用户消息静默丢失（#11618）、提问无回音（#11623）、命令重跑即崩（#11612）—— TUI 用户对“输入丢失”零容忍。
- **配置静默失效引发信任问题**：#11594 的 `firejail_args`、#11599 的 `native_tools` 被兼容厂商忽略，用户按文档配置却不生效，反映文档-实现一致性问题。
- **正面信号**：DefuzeX 等第三方安全团队（#11612）主动用 SDK 测试 Zeroclaw，说明项目在 agent 安全社区已获得关注度；外部贡献者（@jxxralf、@tidux、@JordanTheJet）持续提交高质量修复。

## 8. 待处理积压

| 条目 | 状态 | 说明 |
|---|---|---|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) 维护者决策队列 | OPEN，7/4 至今 | RFC 审批积压的元问题，建议维护者安排批量 triage |
| [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | accepted + blocked + parking-lot，8/10 至今 | 用户需求明确，长期悬置 |
| [#11265](https://github.com/zeroclaw-labs/zeroclaw/pull/11265) 密码生命周期 CLI | do-not-merge，依赖链 #11264/#11313 | 安全主题 XL PR，注意依赖链是否卡住 |
| [#11320](https://github.com/zeroclaw-labs/zeroclaw/pull/11320) 插件 webhook RPC | needs-author-action | 三层堆叠依赖（#11319→#11165），建议明确落地顺序 |
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) SQLite 时间戳 | p1，7 天未关 | 影响 API 消费者，建议与 #11622 一并排期数据层修复 |

**健康度总评**：贡献集中度偏高（@IftekharUddin 主导大型 PR、@Audacity88 主导 ZeroCode），今日新增 S1 内存泄漏与两个消息丢失 Bug 值得维护者优先响应；测试硬化工作扎实，v0.8.6 发布临近。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-10-09

---

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 48，关闭 2），PR 更新 50 条（待合并 36，合并/关闭 14），并发布了补丁版本 **v0.21.6**。项目焦点高度集中在两条主线上：一是 v0.21.6 发布后暴露的**安装/更新链路问题**（Desktop 更新 exit 2、solstice 插件缺 httpx 依赖），二是社区持续贡献的网关与 Provider 修复。整体节奏为“发布—回灌修复”模式，新 Issue 涌入量（48/24h）表明社区参与度极高，但关闭率偏低（2/50），需关注 triage 带宽。

---

## 2. 版本发布

### v0.21.6（2026-10-08）
- **性质**：Patch 补丁版本，将自 v0.21.5 以来合并的 **约 2,100 个 PR** 打成稳定 tag，供 Docker 与 Hermes Cloud 使用。
- **说明**：完整的精选 Release Notes 将随 **v0.22.0** 一并发布，本版本不含独立变更清单。
- **已知问题**：发布当天即有报告 [#135217](https://github.com/NousResearch/hermes-agent/issues/135217) 指出 `hermes --version` 和启动 banner 仍显示 v0.21.5 的日期（2026.9.24）——`hermes_cli.__release_date__` 未随 tag 更新，属低危 cosmetic 问题。
- **迁移注意**：暂无破坏性变更声明，但注意下方多个 area/install-update 回归，建议 Desktop 用户暂缓使用应用内更新按钮（见第 5 节）。

---

## 3. 项目进展

今日关闭/合并的 14 个 PR 中值得关注的：

| PR | 内容 | 意义 |
|---|---|---|
| [#132288](https://github.com/NousResearch/hermes-agent/pull/132288) (P0) | Discord：屏蔽 Hermes 自身的自动线程改名，保证第 2 轮 pinned prompt 命中 | 修复跨轮次 pin 缓存失效导致的 2 次上下文重建 |
| [#132283](https://github.com/NousResearch/hermes-agent/pull/132283) (P0) | Slack：slash 命令补齐 channel prompt 与 source names，稳定 pin key | 同上，属同一缓存稳定性系列修复 |
| [#91880](https://github.com/NousResearch/hermes-agent/pull/91880) | Photon TTS 12.8 "house bundle"（合并 #91215 spectrum 升级 + #91369 语音身份修复 + #91759 回执抑制） | 长期分支（8 月底起）最终落地，iMessage CAF 语音识别随 #91129 一并进入 |
| [#101805](https://github.com/NousResearch/hermes-agent/pull/101805) | TUI：checkpoint_required 配置热应用到已打开会话 | 消除压缩配置 fail-closed 的陈旧值问题 |
| [#121921](https://github.com/NousResearch/hermes-agent/pull/121921) | cron：serve 内嵌 ticker 视为调度器存活 | 修复 Desktop 拓扑下 `hermes cron status` 误报 |
| [#92623](https://github.com/NousResearch/hermes-agent/pull/92623) | web backend 手改 "auto" 值按自动探测处理 | 配置容错性改进 |
| [#49413](https://github.com/NousResearch/hermes-agent/pull/49413) | Desktop 无障碍语义系统性改进 | 自 6 月起的长尾 PR 落地，提升可访问性覆盖 |

**评估**：两个 P0 网关缓存修复 + Photon TTS 大版本升级同日合入，网关消息通道与语音链路显著向前推进。待合并的 36 个 PR 中包含安全修复（#128679 @引用展开边界）和多平台网关修复，管道充足。

---

## 4. 社区热点

1. **[#134107](https://github.com/NousResearch/hermes-agent/issues/134107)（39 评论）** — 打包运行时（stripped PM runtime）缺少顶层 `httpx` 导入，导致内置 solstice provider 加载失败，警告刷屏 TUI。与今日关闭的 [#135383](https://github.com/NousResearch/hermes-agent/issues/135383) 和 P1 级 [#135210](https://github.com/NousResearch/hermes-agent/issues/135210)（macOS 安装器在同一根因上直接失败）同源。**这是当前最强社区信号：PM runtime 的依赖裁剪策略与插件生态冲突。**

2. **[#133992](https://github.com/NousResearch/hermes-agent/issues/133992)（23 评论，👍3）** — Desktop 更新按钮 100% 失败，exit code 2，`hermes update` 拒绝自己 hand-off fork 出的 custodian 锁。相关联：[#134602](https://github.com/NousResearch/hermes-agent/issues/134602)、[#134268](https://github.com/NousResearch/hermes-agent/issues/134268)、[#135405](https://github.com/NousResearch/hermes-agent/issues/135405)。**同一缺陷三种表述，macOS Desktop 自动更新当前完全不可用。**

3. **[#131859](https://github.com/NousResearch/hermes-agent/issues/131859)（13 评论）** — 特定账号无法通过 API 向主仓库发 PR（`CreatePullRequest` 权限错误），已两次复现，疑似仓库权限/分支保护配置问题，值得维护者直接介入。

4. **[#103481](https://github.com/NousResearch/hermes-agent/issues/103481)（11 评论）** — 基于 Claude Code CLI 泄露源码的架构反馈：批量子代理跨会话缓存前缀 + 压缩调度优化，属高质量性能建议，标记 needs-decision。

5. **[#135255](https://github.com/NousResearch/hermes-agent/issues/135255)（7 评论）** — Microsoft Store 版 Hermes Desktop 的测试跟踪 issue，表明 Windows 分发渠道扩展正在推进中。

---

## 5. Bug 与稳定性（按严重度）

### P1（高危）
- **[#133856](https://github.com/NousResearch/hermes-agent/issues/133856)** — `sk-ant-usr-` 前缀的 Anthropic API key 被误判为 OAuth token（Claude Code 身份 + 按 token 计费的 key），影响计费与安全边界。⚠️ 暂无对应 fix PR。
- **[#132329](https://github.com/NousResearch/hermes-agent/issues/132329)** — Desktop 在上下文压缩期间误报 "The reply was cut off"（假性 stream_drop），后端实际空闲。⚠️ 暂无 fix PR。
- **[#135210](https://github.com/NousResearch/hermes-agent/issues/135210)** — macOS 官方安装器在"Install command and apps + Desktop"阶段失败（solstice 缺 httpx）。⚠️ 暂无 fix PR。

### P2
- **[#133992](https://github.com/NousResearch/hermes-agent/issues/133992) / [#134602](https://github.com/NousResearch/hermes-agent/issues/134602) / [#134268](https://github.com/NousResearch/hermes-agent/issues/134268) / [#135405](https://github.com/NousResearch/hermes-agent/issues/135405)** — Desktop 更新 exit 2 系列，#134268 已定位为一行 PID mismatch。⚠️ 暂无 fix PR 合入。
- **[#96247](https://github.com/NousResearch/hermes-agent/issues/96247)** — `tool_search` 失控循环：单会话 1,523 次调用耗尽 130k 上下文，advisory stub 无法生效。⚠️ 无 fix PR。
- **[#131859](https://github.com/NousResearch/hermes-agent/issues/131859)** — fork 侧无法向主仓库开 PR。
- **[#120051](https://github.com/NousResearch/hermes-agent/issues/120051)** — WhatsApp 群组静默标记被回显为警告消息。→ 相关 PR [#112000](https://github.com/NousResearch/hermes-agent/pull/112000) 提供 opt-in 静默方案（待合并，needs-decision）。
- **[#102725](https://github.com/NousResearch/hermes-agent/issues/102725)** — 同 base_url 同模型不同 api_mode 的 custom provider 身份恢复错乱。⚠️ 无 fix PR。
- **[#125040](https://github.com/NousResearch/hermes-agent/issues/125040)** — Terminal 工具 PATH 顺序错误导致 Python skill 脚本运行在无依赖的解释器上。⚠️ 无 fix PR。

### P3
- **[#135217](https://github.com/NousResearch/hermes-agent/issues/135217)** — v0.21.6 显示旧发布日期。
- **[#134844](https://github.com/NousRecommend/hermes-agent/issues/134844)** — opencode-go 将 Claude Haiku 5.5 错误路由到 /v1/chat/completions（HTTP 400）。
- **[#134469](https://github.com/NousResearch/hermes-agent/issues/134469)** — `hermes update` 重建 venv 时丢弃插件依赖，provider 插件静默失效（与 #134107 同属 install-update 风险面）。

---

## 6. 功能请求与路线图信号

- **记忆系统治理**：[#135039](https://github.com/NousResearch/hermes-agent/issues/135039)（MEMORY.md 写入预算与验收管线）与待合并 PR [#92118](https://github.com/NousResearch/hermes-agent/pull/92118)（记忆预取结构化观测通道）形成呼应——记忆子系统正在系统性重构，v0.22 有望纳入。
- **桌面体验**：[#81159](https://github.com/NousResearch/hermes-agent/issues/81159)（Office 文档预览）、[#133205](https://github.com/NousResearch/hermes-agent/issues/133205)（composer ghost-text 提示，对标 Claude Code）显示 Desktop 功能面持续扩展；#135255（MS Store）表明分发渠道是当前 Desktop 重点。
- **插件/Provider 灵活性**：[#90432](https://github.com/NousResearch/hermes-agent/issues/90432)（pre_api_request 升级为 Transform hook）、[#66543](https://github.com/NousResearch/hermes-agent/issues/66543)（自定义 provider 的 reasoning effort 映射）、[#112893](https://github.com/NousResearch/hermes-agent/issues/112893)（命名子代理允许异构模型审查）均在 needs-decision 队列中。
- **跨平台会话连续性**：[#79198](https://github.com/NousResearch/hermes-agent/issues/79198)（跨平台会话组/选择性 key 重映射）是长期呼声较高的 feature。
- **判断**：网关消息修复（#112000、#133978）和压缩/上下文管理（#103481）最可能进入下一版本。

---

## 7. 用户反馈摘要

**痛点集中区**：
- **安装/更新是最大雷区**：今日 50 条 Issue 中至少 9 条带 area/install-update 标签。用户反复描述"更新按钮转圈—失败—每 1–4 分钟重试"的死循环体验；安装器失败直接阻断新用户入门。
- **插件生态脆弱性**：staged runtime venv 策略切换后，插件依赖（httpx、mnemosyne 的原生依赖）静默丢失，"工具还在注册但 Python 依赖没了"（#134469），用户对静默降级尤为不满。
- **多平台聊天机器人的静默语义**：WhatsApp/Discord 用户希望 bot"该闭嘴时闭嘴"，而非回显警告（#120051）；Discord clarify 按钮超时窗口不一致（#97662）也属此类。

**正面信号**：
- Windows 用户主动硬化网关计划任务（#127977）并报告被 drift 检测回滚——反映高级用户的深度部署场景。
- Issue 报告质量普遍很高（复现步骤、日志、根因猜测齐全），社区技术素养强，是高质量贡献来源。

---

## 8. 待处理积压

- **[#29309](https://github.com/NousResearch/hermes-agent/issues/29309)（2026-05-20 起，P2）** — Bedrock Bearer Token 在辅助客户端（标题生成/压缩）不可用，CVE 钉死的 anthropic SDK 0.87.0 缺 api_key 参数。**积压近 5 个月，影响 AWS 用户核心工作流。**
- **[#96247](https://github.com/NousResearch/hermes-agent/issues/96247)（8-27 起，P2）** — tool_search 失控循环，成本/上下文双重爆炸，无 cap 可达，needs-repro 状态长期未推进。
- **[#103481](https://github.com/NousResearch/hermes-agent/issues/103481)（9-05 起）** — 高价值架构反馈，needs-decision 超 1 个月。
- **PR 积压**：[#127266](https://github.com/NousResearch/hermes-agent/pull/127266) / [#127264](https://github.com/NousResearch/hermes-agent/pull/127264)（AgentRouter 健壮性修复）、[#96507](https://github.com/NousResearch/hermes-agent/pull/96507)（SSE 断连与执行解耦）、[#128679](https://github.com/NousResearch/hermes-agent/pull/128679)（安全：@引用展开边界）均停留 10 天以上，建议优先 review 安全员 #128679。

**维护者提示**：建议优先处理 ① Desktop 更新 exit 2 系列（已有根因定位，fix 成本低）② PM runtime 插件依赖（#134107/#134469/#135210 同源）③ #131859 的仓库权限异常。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-10-09

## 1. 今日速览

过去 24 小时，PicoClaw 仓库整体活跃度处于**低位平稳**状态：无新 Issue、无 Release，仅 2 条既有 PR 出现更新（均为待合并状态，非新建）。值得关注的是，这两条 PR 分别涉及**新 provider 接入**（#3371）和 **Web UI 性能优化**（#3347），是当前社区贡献的两个主方向。项目无新 Bug 报告，稳定性暂无新增压力，但核心贡献的长期滞留合并值得维护者注意。

## 2. 版本发布

今日无新版本发布，无破坏性变更或迁移事项。（[Releases 页面](https://github.com/sipeed/picoclaw/releases)）

## 3. 项目进展

今日**无 PR 合并或关闭**，主线代码无增量。两条在途 PR 均处于 OPEN 状态且于 10-08 有更新活动：

- **#3371 新增 opencode-go provider**（[@EMTumariscal](https://github.com/sipeed/picoclaw/pull/3371)）：为接入 `https://opencode.ai/zen/go/v1` 端点新增专属 provider，按模型 ID 自动路由至正确的端点族，并在请求中携带 `x-opencode-session` 头以保持会话上下文。该 PR 已在途约一个月（创建于 09-08），若合入将扩大 PicoClaw 的模型服务兼容范围。
- **#3347 修复界面卡顿**（[@iMilnb](https://github.com/sipeed/picoclaw/pull/3347)）：解决聊天区文本量大时 Web UI 卡顿的问题，作者已在桌面端与移动端 Brave 浏览器上通过 `picoclaw-launcher` 验证。**注意：该 PR 已被标记 `[stale]`**，存在被自动关闭的风险。

整体而言，项目今日处于“等待维护者审阅”的停滞阶段，进展主要由社区贡献者推动。

## 4. 社区热点

今日无新开 Issue、无新增评论或 👍 反应，社区讨论热度为零。今日最活跃的条目仅为上述两条 PR 的例行更新：

- [PR #3371 — opencode-go provider](https://github.com/sipeed/picoclaw/pull/3371)：反映用户对 OpenCode Go 服务持续可用的诉求。
- [PR #3347 — 修复界面卡顿](https://github.com/sipeed/picoclaw/pull/3347)：反映重度使用场景（长对话）下的 UX 痛点。

## 5. Bug 与稳定性

- ⚠️ **中等：Web UI 长文本卡顿** — 已有 fix PR [#3347](https://github.com/sipeed/picoclaw/pull/3347)，但处于 stale 状态，**尚未合并**。作者自述非 TS/Node 开发者，代码可能需要维护者复核。
- 今日无新报告的崩溃或回归问题。

## 6. 功能请求与路线图信号

- **Provider 生态扩展**（[#3371](https://github.com/sipeed/picoclaw/pull/3347)）：新增 provider + 会话头支持的 PR 表明“多后端模型服务兼容”是明确的社区演进方向，若审阅通过，有望进入下一版本。
- 从 #3347 可推断长会话场景下的**前端渲染性能**也是用户实际需求点，同类优化未来可能形成系列改进。
- 今日无新功能请求 Issue，路线图信号有限。

## 7. 用户反馈摘要

今日无 Issue 评论可供提炼。基于在途 PR 的间接信号：

- 用户在**长对话/大文本量**场景下遭遇明显卡顿，且横跨桌面与移动浏览器，说明前端渲染是普遍痛点。
- 有用户依赖 **OpenCode Go** 作为模型后端，端点变更迫使其主动贡献 provider 适配，显示用户群中存在深度集成型使用者。
- 两条 PR 均来自外部贡献者且无 👍，提示社区参与存在但反馈回路较薄弱。

## 8. 待处理积压

| 条目 | 状态 | 积压时长 | 风险与建议 |
|---|---|---|---|
| [PR #3371](https://github.com/sipeed/picoclaw/pull/3371) | OPEN，0 评论 | ~31 天 | 功能完整的 provider 贡献长期无人审阅，建议维护者优先 review，避免贡献者流失 |
| [PR #3347](https://github.com/sipeed/picoclaw/pull/3347) | OPEN，已标 stale | ~43 天 | 用户体验类修复，stale 状态下面临自动关闭；即使不直接合入，也应吸收其修复思路 |

**健康度提示**：当前 2 条在途 PR 均超一个月未获维护者响应，且均无评论互动，审阅响应机制是当前项目最需改善的环节。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：** 2026-10-09
**数据来源：** github.com/qwibitai/nanoclaw

---

## 1. 今日速览

NanoClaw 今日呈现「PR 驱动、Issue 静默」的典型维护期特征：过去 24 小时无新 Issue、无新版本发布，但 PR 活动达 5 条（3 条待合并、2 条合并/关闭）。活动焦点集中在 **CI 基础设施迁移** 和 **WhatsApp 通道稳定性** 两大方向，其中 CI runner 全面切换到自托管基础设施（PR #4058）已落地，标志着项目在构建成本与可控性上做出重要调整。整体活跃度中等，无紧急稳定性事件。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日关闭 2 条 PR，均具实质意义：

- **[PR #4058](https://github.com/nanocoai/nanoclaw/pull/4058)（已关闭）** — `ci: move all jobs to namespace-profile-paradixe`。执行 2026-10-08 创始人批准的规则：所有 GitHub Actions 任务必须运行在 `namespace-profile-paradixe` 或自托管 s6 runner 上，彻底移除 `ubuntu-latest` 等 GitHub 托管标签。这是项目 CI 基础设施的一次全面迁移，涉及所有 workflow 文件，属于运维层面的重要里程碑。
- **[PR #2459](https://github.com/nanocoai/nanoclaw/pull/2459)（已关闭）** — `feat(skill): add /add-voice-transcription-chat-sdk`。为 Discord 及所有 Chat SDK 桥接通道（Slack、Teams、Webex、Google Chat 等）添加可选的本地语音转文字能力，基于 whisper.cpp 完全本地运行，无云 API 依赖。该 PR 自 2026-05-13 开放至 10-08，历时近 5 个月最终关闭（合并或终止需结合 commit 记录确认），与 #2317 形成语音功能组合拳。

**整体评估：** 项目在 CI 自主化与多通道能力扩展上均有推进，节奏稳但偏慢（长尾 PR 处理周期长）。

---

## 4. 社区热点

今日无新 Issue、无评论数据，社区讨论热度接近冰点。可关注的持续讨论点：

- **[PR #3751](https://github.com/nanocoai/nanoclaw/pull/3751) / [PR #3752](https://github.com/nanocoai/nanoclaw/pull/3752)**（均由 @horsehcj 于 09-09 提交，今日更新）— 两条 WhatsApp 修复 PR 开放一个月仍在待合并状态，反映 WhatsApp 通道是当前用户实际使用痛点较集中的区域。

---

## 5. Bug 与稳定性

今日无新 Bug 报告。待合并修复 PR 按影响排序：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中 | **[PR #4057](https://github.com/nanocoai/nanoclaw/pull/4057)** Docker driver 的 `stop()` 在容器带 `--rm` 时因自动清理竞态误报 teardown 失败 | Fix PR 待合并（10-08 提交） |
| 中 | **[PR #3752](https://github.com/nanocoai/nanoclaw/pull/3752)** WhatsApp 会话中多个待回答问题只剩最后一个可回答，其余问题失活 | Fix PR 待合并（已挂起 30 天） |
| 低 | **[PR #3751](https://github.com/nanocoai/nanoclaw/pull/3751)** WhatsApp `@newsletter` JID 未在入口边界过滤，干扰正常消息处理 | Fix PR 待合并（已挂起 30 天） |

---

## 6. 功能请求与路线图信号

- **本地语音转文字**：PR #2459 的落地（配合 #2317 的 whisper 免费方案）表明项目明确倾向「本地优先、无云依赖」的语音路线，后续版本可能整合语音输入能力到更多通道。
- **CI/基础设施自主化**：PR #4058 的强制 runner 规则释放信号——项目正降低对 GitHub 托管基础设施的依赖，预计后续所有 workflow PR 都将遵循该规范。
- **容器生命周期健壮性**：PR #4057 显示维护者正在打磨 agent 容器的启停细节，容器稳定性是持续投入方向。

---

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提取直接用户反馈。从 PR 间接信号看：

- WhatsApp 用户在实际会话中遇到多问题失活、newsletter 消息干扰等问题（社区贡献者持续提交修复，说明通道在真实使用中被重度使用）；
- Docker `--rm` 竞态导致的误报失败影响部署体验，属边缘但恼人的问题。

---

## 8. 待处理积压

提醒维护者关注：

1. **[PR #3751](https://github.com/nanocoai/nanoclaw/pull/3751)** 与 **[PR #3752](https://github.com/nanocoai/nanoclaw/pull/3752)** — 开放已 30 天（09-09 至今），无评论互动，建议 reviewer 介入评估合并。
2. **[PR #4057](https://github.com/nanocoai/nanoclaw/pull/4057)** — 昨日提交的 Docker 修复，尚无 review 动作，建议优先处理以改善容器稳定性。

---

**健康度小结：** 提交端活跃、审核端滞后是当前主要风险；Issue 零流量可能反映社区进入使用稳定期，也可能提示需要主动引导反馈。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-10-09

## 1. 今日速览

NullClaw 今日整体处于**活跃开发、静默社区**的状态：过去 24 小时无新 Issue、无版本发布，但 PR 活动集中且质量较高（5 条待合并，全部来自 10-08/10-09 的新增提交）。核心维护者 @vernonstinebaker 一人贡献了 3 条 PR，覆盖流式工具调用、推理模式配置和 Discord 连接稳定性；外部贡献者 @addadi 和 @georgeatparallel 分别带来了容器/移动端 HTTPS 兼容性修复与文档增强。Issue 侧零活跃，说明当前痛点收集渠道偏静默，需关注是否存在反馈渠道转移（如 Discord 社区）的情况。

## 2. 版本发布

今日无新版本发布。项目近期无 Release 记录，5 条 PR 处于待合并状态，推测维护者可能在攒批发布。

## 3. 项目进展

今日无 PR 被合并或关闭（合并数为 0），但待合并管道中有实质性进展：

- **[#971](https://github.com/nullclaw/nullclaw/pull/971) feat(streaming): SSE 流式传输期间的原生工具调用**（@vernonstinebaker，06-29 创建、10-08 更新）— 最重磅的功能 PR，已持续活跃超过 3 个月。将原生工具调用与流式路径解耦，此前 agent loop 在附加流式回调时会禁用原生工具、降级为提示注入格式，严重影响部分 Provider 的工具调用准确性与 token 消耗。该 PR 长期未合并，可能是流式工具调用协议尚未在多个 Provider 间统一。
- **[#1050](https://github.com/nullclaw/nullclaw/pull/1050) feat(config): 新增 `reasoning_mode`**（10-08）— 解决 Qwen3 推理变体、GLM、R1 等推理模型将全部补全预算耗在推理上、返回 `finish_reason=length` 且 `content:null` 的问题，使推理内容可被正确呈现。对国产/开源推理模型的兼容性是明显加分项。
- **[#1051](https://github.com/nullclaw/nullclaw/pull/1051) feat(http): `NULLCLAW_CA_BUNDLE` 环境变量覆盖**（@addadi，10-08）— 修复 `std.http` 在最小化根文件系统（Android 应用沙箱、distroless/scratch 容器）中因无系统 CA 路径导致 TLS 全量报错的问题，提供配置级逃生通道。对边缘部署场景价值高。
- **[#1049](https://github.com/nullclaw/nullclaw/pull/1049) fix(discord): 心跳改为墙钟调度**（10-08）— 修复后台守护进程因 OS 定时器合并导致心跳超时、连接断开的问题，稳定性修复。
- **[#1052](https://github.com/nullclaw/nullclaw/pull/1052) docs: 可选 Parallel Search MCP 示例**（@georgeatparallel，10-09）— 文档类贡献，展示通过原生 HTTP transport 免 API Key 接入 Parallel 搜索（有匿名限流）。

**整体评估**：待合并管道覆盖「流式工具调用 + 推理模型兼容 + 边缘部署 + IM 稳定性 + 生态集成」五个方向，若全部落地将是一次实质性的能力跃迁；但合并吞吐为零，需关注维护者审核带宽。

## 4. 社区热点

今日无 Issue 活动，PR 评论数据缺失（`undefined`），无法识别明确的热点讨论。从提交者构成看：

- 外部贡献者占比 2/5（#1051、#1052），且 #1051 针对的是相当具体的容器化部署痛点，暗示存在一批在**边缘/容器环境部署 NullClaw** 的用户群体。
- @georgeatparallel 的 Parallel Search 文档 PR 可能带有生态推广动机（Parallel 平台方引导用户接入）。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#1051](https://github.com/nullclaw/nullclaw/pull/1051) 最小化 rootfs 下所有 HTTPS 请求 TLS 层报错（Android 沙箱、distroless/scratch 容器完全不可用） | 已有 fix PR，待合并 |
| 🟡 中 | [#1049](https://github.com/nullclaw/nullclaw/pull/1049) Discord 心跳线程用 `sleep(100ms)` 计数推进 deadline，受 OS 定时器合并影响落后于真实时间，导致连接断开 | 已有 fix PR（改用墙钟），待合并 |
| 🟡 中 | [#1050](https://github.com/nullclaw/nullclaw/pull/1050) 推理模型返回 `content:null` + `finish_reason=length`，推理内容不可见 | 已有 fix PR，待合并 |

值得注意的是，今日**无用户通过 Issue 新报告的 Bug**，三条稳定性问题均由贡献者以 PR 形式直接提交。

## 6. 功能请求与路线图信号

- **流式原生工具调用（#971）**：跨季度持续更新的核心功能，几乎确定是下一个版本的主打特性。
- **推理模型支持（#1050）**：`reasoning_mode` 配置项表明项目正在系统性适配 Qwen3/GLM/R1 等推理型模型，这是国产模型生态兼容的路线图信号。
- **边缘部署（#1051）**：`NULLCLAW_CA_BUNDLE` 反映出向 Android 沙箱、无发行版容器等受限环境扩展的诉求。
- **MCP 生态（#1052）**：原生 HTTP transport + 免桥接接入，降低 MCP 服务器接入门槛，是生态扩张方向。

## 7. 用户反馈摘要

今日 Issue 为零，无法直接提炼用户反馈。间接信号：

- **痛点**：容器化/移动端部署的 TLS 兼容性（#1051 描述详尽，疑似真实踩坑）；Discord 集成在长期运行下掉线（#1049 明确提到"background daemon"场景，暗示有 7×24 部署用户）。
- **使用场景**：结合各 PR，典型场景包括 MCP 工具编排（含 Web 搜索）、Discord 机器人宿主、推理模型推理链呈现、边缘容器部署。

## 8. 待处理积压

- ⚠️ **[#971](https://github.com/nullclaw/nullclaw/pull/971)**：开放超过 **3 个月**（06-29 创建），期间多次更新仍未合并。作为核心流式能力，长期悬置会阻塞依赖方并增加合并冲突风险，建议维护者明确其阻塞点（协议设计？测试覆盖？）并公示时间表。
- ⚠️ **合并吞吐为零**：5 条待合并 PR（含 3 条有明确用户价值的修复）今日无一进入合并流程，建议社区关注维护者审核带宽，或引入更多协作者分担 review。

---
*数据来源：NullClaw GitHub 仓库，统计窗口 2026-10-08 ~ 2026-10-09。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-10-09

## 1. 今日速览

IronClaw 过去 24 小时整体活跃度处于**低位平稳**状态：新增 2 条 Issue、2 条 PR 更新，无版本发布，无合并/关闭动作。值得关注的是两条动态均围绕**消息通道扩展（Sendblue iMessage/SMS）**展开，Issue #8130 与 PR #8127 形成“提案 + 实现”配对，是当前最明确的功能演进方向。此外，每日自动化的失败分类报告（#8129）持续输出基准测试质量数据，显示项目的 CI/评测体系运转正常。

## 2. 版本发布

过去 24 小时无新版本发布，无破坏性变更或迁移事项。

## 3. 项目进展

今日**无 PR 合并或关闭**，待合并 PR 累计 2 条：

- [PR #8119](https://github.com/nearai/ironclaw/pull/8119) — `feat(loop-host): opt-in turn-start tool selection with a Jev classifier`（XL 规模、中等风险、新贡献者 @CjS77，9 月 29 日创建，10 月 8 日仍有更新）。在对话首轮模型调用前由分类器预选 deferred 工具，免去 `tool_search` 往返，可显著降低延迟。属于大型 docs + dependencies 范围改动，仍处于 review 阶段。
- [PR #8127](https://github.com/nearai/ironclaw/pull/8127) — `feat: add Sendblue iMessage and SMS extension`（10 月 6 日创建，10 月 8 日更新）。实现手机配对、认证 webhook 接收、终端回复与 DM 目标存储，凭证由 host 托管。

整体来看，项目处于**功能孵化期**而非交付期，两条 XL 级 PR 均待审。

## 4. 社区热点

今日两条 Issue 均为 0 评论、0 👍，暂无高热度讨论：

- [Issue #8130](https://github.com/nearai/ironclaw/issues/8130)（@lookevink）：Sendblue 扩展提案，诉求是让个人 AI 助手能直接通过 iMessage/SMS 与用户对话，且**凭证归用户所有**、号码白名单控制——反映了对隐私和消息通道原生化的强烈需求。
- [Issue #8129](https://github.com/nearai/ironclaw/issues/8129)：每日失败分类自动报告，officeqa 套件 25 个未通过任务主要归因于模型质量问题（DeepSeek-V4-Flash 导航类失败），而非框架 bug。

## 5. Bug 与稳定性

今日**无新增用户报告的 Bug、崩溃或回归**。

来自 [Issue #8129](https://github.com/nearai/ironclaw/issues/8129) 的自动化诊断提示：officeqa 基准中约 25 个非通过任务主要为底层模型（DeepSeek-V4-Flash）能力问题，非 IronClaw 框架缺陷，暂无对应 fix PR 需求。

## 6. 功能请求与路线图信号

| 功能请求 | 对应实现 | 纳入下版本可能性 |
|---|---|---|
| Sendblue iMessage/SMS 扩展、host 托管凭证（[#8130](https://github.com/nearai/ironclaw/issues/8130)） | [PR #8127](https://github.com/nearai/ironclaw/pull/8127) 已在途，提案与实现出自同一作者，动机清晰 | **高** |
| 回合起始智能工具预选（Jev 分类器）（[PR #8119](https://github.com/nearai/ironclaw/pull/8119)） | 由 PR 自身提出，opt-in 设计降低风险，但 XL 规模 + 新贡献者，review 周期可能较长 | **中** |

路线图信号明确指向**多通道消息接入**与**降低工具调用延迟**两条主线。

## 7. 用户反馈摘要

今日 Issue 评论数为 0，可直接提炼的真实用户反馈有限。从提案文本可间接看出：

- **痛点**：用户希望 AI 助手走出 Web/API 界面，直接住在 iMessage/SMS 这类日常消息流中；同时重视**凭证自主权**与**接收方白名单**，说明安全与隐私是采用门槛。
- **使用场景**：手机配对后通过原生短信/iMessage 与 IronClaw 对话，复用现有 conversation/reply 生命周期。

## 8. 待处理积压

- [PR #8119](https://github.com/nearai/ironclaw/pull/8119) — 已开启约 **10 天**（9/29 创建），XL 规模且来自新贡献者，评论数据缺失（undefined），疑似**缺乏 review 响应**，建议维护者优先介入，避免新贡献者流失。
- [PR #8127](https://github.com/nearai/ironclaw/pull/8127) — 开启 3 天，配套提案 #8130 同日提出，建议维护者尽快给出 review 意见以锁定设计方向。

---

*数据来源：GitHub API（过去 24 小时窗口）。总体评估：项目健康度良好，CI 自动化诊断机制成熟，但 review 响应速度是当前短板。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-10-09）

## 1. 今日速览

过去 24 小时项目整体活跃度**中等偏低**：无新开 Issue，无新版本发布，PR 更新 20 条中大部分为标记 `stale` 后批量关闭的历史 PR，属于机器人/维护者清理积压行为。真正有实质推进的活跃 PR 仅 3 条（#2813、#2814、#2815），集中于 Cowork 可观测性、Office 幻灯片编辑体验和 Library 目录监视稳定性。社区侧今日无新增讨论，处于功能迭代与积压清理并行阶段。

## 2. 版本发布

今日无新版本发布。值得注意的是 [PR #2814](https://github.com/netease-youdao/LobsterAI/pull/2814) 将 `feat/llm-turn-usage` 合入 `release/2026.9.24` 分支，暗示近期可能有版本迭代。

## 3. 项目进展

今日关闭/合并 PR 14 条，其中有效进展如下：

- **[PR #2814](https://github.com/netease-youdao/LobsterAI/pull/2814)**（已关闭，疑似合入 release 分支）：Cowork 每轮回复展示实际积分消耗，支持查看模型请求、Token、缓存命中率和 Trace ID 明细；通过 W3C Trace ID 贯通客户端日志、服务端请求日志和用量账本。这是**用量透明化与可观测性**的重要一步。
- **[PR #2813](https://github.com/netease-youdao/LobsterAI/pull/2813)**（已关闭）：PowerPoint 编辑器幻灯片缩略图面板改为默认可折叠紧凑布局，修复 184px 固定宽度挤压幻灯片画布、滚动条裁切缩略图右侧的问题，显著改善 Office 制品编辑体验。
- **[PR #2815](https://github.com/netease-youdao/LobsterAI/pull/2815)**（已关闭）：修复 Library 启动时对已删除目录重复报 `ENOENT` 监视错误（报告者机器上单次启动刷屏 53 次），增加跳过已删除目录及清理过期缺失项逻辑，提升日常使用稳定性。

其余 11 条关闭 PR（#566、#599、#603、#647、#649、#697、#749、#762、#768、#788、#790）均为 3 月创建、10-08 标记 `stale` 后关闭的**历史积压清理**，不代表功能合入。

## 4. 社区热点

今日无 Issue 更新、无新评论，社区讨论热度为零。可关注的近期活跃讨论点为 [PR #2590](https://github.com/netease-youdao/LobsterAI/pull/2590)（9 月创建，昨日仍有更新）：外部贡献者提出加固 MCP stdio 命令与外部 URL 边界的安全修复，涉及 shell 元字符注入与协议白名单校验——对于一个执行第三方工具的 Agent 应用而言是高价值安全议题，目前仍 Open 待合并。

## 5. Bug 与稳定性

今日无新增 Bug 报告（Issue 为 0）。已修复的稳定性问题：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中 | Library 对已删除目录反复报 ENOENT 监视错误（#2815） | ✅ 已有 fix PR 并关闭 |
| 中 | MCP stdio 命令未做 shell 元字符校验、`shell.openExternal` 无协议白名单（#2590） | ⏳ PR 待合并，属潜在安全风险 |

## 6. 功能请求与路线图信号

- **用量透明化**：#2814 合入 release 分支，表明积分消耗展示 + Trace 可观测性将进入下一版本，后续可能扩展更多 provider 的观测集成（此前 #768 的 Opik 集成已被 stale 关闭，方向或转向内置方案）。
- **Office 编辑体验**：#2813 显示团队持续打磨 artifact 面板中的 Office 编辑器，可预期更多幻灯片/文档编辑改进。
- **社区高票需求暂未收敛**：消息书签系统（[#725](https://github.com/netease-youdao/LobsterAI/pull/725)，Open）、输入框结构化重构（[#610](https://github.com/netease-youdao/LobsterAI/pull/610)，Open）仍处 stale 状态，是否纳入路线图尚无信号。

## 7. 用户反馈摘要

今日无 Issue 评论可提炼。从近期 PR 描述间接可见的痛点：

- **模型配置易出错**：非技术用户难以判断 Anthropic/OpenAI 兼容格式（#762 曾提出“自动检测”方案）；连接测试误报失败（GLM-4.7 的 SSE/429 处理，#599）。
- **长对话性能与回溯需求**：流式输出时历史消息重复解析（#736、#749）、消息回滚与编辑重生成（#697）、书签收藏（#725）反映重度 Cowork 用户对长会话体验的诉求。
- **日志噪音困扰**：#2815 的 53 次重复报错反映普通用户被无效错误刷屏的挫败感。

## 8. 待处理积压

建议维护者关注以下长期 Open 的 PR：

1. **[PR #2590](https://github.com/netease-youdao/LobsterAI/pull/2590)** — 安全加固（MCP 命令校验 + URL 协议白名单），已挂起 1 个月+，风险敞口性质，建议优先评审。
2. **[PR #725](https://github.com/netease-youdao/LobsterAI/pull/725)** — 消息书签系统，功能完整度高，挂起近 7 个月。
3. **[PR #610](https://github.com/netease-youdao/LobsterAI/pull/610)** — 输入框内核重构，影响后续 `@`/`/` 等交互演进方向。
4. **[PR #547](https://github.com/netease-youdao/LobsterAI/pull/547)** — 35 个单元测试用例，挂起超 6 个月，合入可提升测试覆盖。
5. **[PR #736](https://github.com/netease-youdao/LobsterAI/pull/736) / [#738](https://github.com/netease-youdao/LobsterAI/pull/738)** — 流式渲染性能优化与执行模式配置修复，均为小改动、低风险。

---
*数据来源：GitHub API（Issues / PR / Releases），统计窗口为过去 24 小时。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-10-09

## 1. 今日速览

Moltis 今日整体活跃度处于**低位平稳**状态：过去 24 小时仅有 2 条 Issue 更新（1 新开、1 关闭），无 PR 活动，无新版本发布。值得关注的是，安全漏洞类 Issue #1177 的关闭表明安全修复流程在推进；同时新 Issue #1296 来自第三方模型网关厂商（A2Agent），寻求与 Moltis 的 provider 生态集成，显示项目在 AI 工具生态中的可见度在提升。无代码合并意味着今日无功能性进展，项目处于维护节奏而非冲刺阶段。

## 2. 版本发布

今日无新版本发布。（无）

## 3. 项目进展

- 今日无 PR 合并或关闭，无直接代码层面的功能推进。
- **Issue #1177 关闭**（[链接](https://github.com/moltis-org/moltis/issues/1177)）：Vault Unlock/Recovery 端点缺少身份验证（CWE-306）的安全 Bug 于今日关闭。该 Issue 自 7 月 30 日提交，关闭可能意味着修复已落地或在相关发布中验证通过，属于**安全健壮性方面的实质性进展**。建议维护者确认关闭原因并在 Release Notes 中明示。

## 4. 社区热点

- **[#1296 — Test an A2Agent profile through Moltis provider setup](https://github.com/moltis-org/moltis/issues/1296)**（新开，0 评论）：A2Agent 团队（OpenAI/Anthropic 兼容的模型网关）主动寻求接入 Moltis。其核心诉求是确认最小集成路径——**自定义 endpoint 即可，还是需要 thin provider preset**。这是典型的生态合作信号，也侧面印证 Moltis 的 `moltis-providers` 抽象层被外部视为可扩展的集成点。及时、明确的技术回复将有助于吸引更多网关/模型厂商接入。
- 今日无其他高评论量讨论。

## 5. Bug 与稳定性

- **今日新报告 Bug：无**。
- **已关闭 Bug**：#1177（Vault 解锁/恢复端点缺失认证，CWE-306）— 属**高危安全类**问题，今日已关闭，无公开关联 fix PR 信息，建议在变更日志中补录。

## 6. 功能请求与路线图信号

- **#1296** 隐含一个生态需求信号：第三方模型网关希望以低成本方式接入 Moltis。如果自定义 endpoint 不足以支持 A2Agent 场景，可能催生对 **provider preset 机制或官方集成指南/文档**的需求。鉴于当前无相关 PR，短期内落地概率取决于维护者对该 Issue 的响应。

## 7. 用户反馈摘要

- 来自 #1296 的外部合作方反馈：Moltis 的 provider 分层架构（`moltis-providers`）和 onboarding 流程被认为是**独特且有辨识度的设计**，是外部厂商选择主动对接的原因。痛点在于：**最小集成路径不够清晰**，缺乏“自定义 endpoint 能力边界”的说明文档。
- #1177 反映了社区（安全测试者）对 **Vault 敏感端点认证机制**的关注，说明 Moltis 的本地凭据/密钥存储功能在安全敏感用户中已有实际使用。

## 8. 待处理积压

- **#1296**（新开）：厂商合作类 Issue，建议在 48 小时内首响，明确最小接入路径，避免错失生态合作窗口。
- 建议维护者关注长期安全类 Issue 的**闭环透明度**：#1177 关闭时评论数为 0，未附修复 PR 或说明，社区无法验证修复状态，建议补充关联信息。

---
*数据来源：Moltis GitHub 仓库 2026-10-09 快照。整体健康度：活动量偏低但无异常信号，安全响应闭环完成，生态合作机会出现。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-10-09）

> 数据来源：agentscope-ai/CoPaw（QwenPaw）过去 24 小时 GitHub 活动

---

## 1. 今日速览

- 项目今日保持**高活跃度**：28 条 Issue 更新（15 新开/活跃，13 关闭）、33 条 PR 更新（22 待合并，11 合并/关闭），无新版本发布，目前主线仍停留在 **v2.2.2-beta.4** 迭代阶段。
- 今日修复聚焦 **Console 前端稳定性**：HTTP 源下 `crypto.randomUUID` 崩溃（#8147/#8073）当天即完成“报告→修复→合并”闭环，响应速度值得肯定。
- 用户侧痛点集中爆发：**聊天记录丢失/压缩后无法加载**（#8134，10 条评论成为今日最热）持续发酵，对应的核心 PR #7931（持久化分页 transcript）仍在评审中。
- 社区贡献活跃：多位 first-time contributor 的运行时/Console 修复 PR（#7762、#7865、#7723 等）持续获得维护者评审推进。
- 整体健康度：**良好偏优**——Issue 关闭率约 46%，关键 Bug 响应迅速，但记忆/上下文管理类问题积压明显。

---

## 2. 版本发布

今日无新版本发布。当前最新版本仍为 v2.2.2-beta.4（预发布通道），大量修复 PR 正在汇聚，预计正式版 2.2.2 发布临近。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 内容 | 意义 |
|---|---|---|
| [#8146](https://github.com/agentscope-ai/QwenPaw/pull/8146) fix(console): support terminal UUIDs on HTTP origins | 修复非安全上下文（LAN/Tailscale HTTP）下 `crypto.randomUUID` 不可用导致的 Chat 页崩溃 | 同时修复 #8147 与 #8073 两个高影响 Bug，**今日最关键合并** |
| [#8144](https://github.com/agentscope-ai/QwenPaw/pull/8144) | 同一修复的早期版本，随 #8146 关闭 | 体现评审迭代过程 |
| [#8141](https://github.com/agentscope-ai/QwenPaw/pull/8141) fix(qwenpaw-data): keep UI host types package-local | 修复 QwenPaw-Data 发布构建因类型依赖无法解析 `react` 而失败的问题 | 保障插件生态发布流水线 |
| [#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869) fix(providers): carry session header on connection checks | 连接测试携带 `x-opencode-session` 头 | 彻底解决 #7599（OpenCode 套餐 MissingSessionID） |
| [#8083](https://github.com/agentscope-ai/QwenPaw/pull/8083) feat(tools): add view_audio tool | 补齐音频模态理解工具 | 社区（first-time contributor）功能贡献落地 |
| [#8054](https://github.com/agentscope-ai/QwenPaw/pull/8054) / [#8072](https://github.com/agentscope-ai/QwenPaw/pull/8072) / [#7380](https://github.com/agentscope-ai/QwenPaw/pull/7380) | E2E 测试加固、测试套件提速 41% | 工程质量投入显著，CI 可信度提升 |

### 关键在途 PR

- **[#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931)（size/XXXL）**：per-session SQLite 持久化 transcript + 分页历史加载——直接回应最大的用户痛点（聊天记录丢失），今日仍活跃更新，是最受期待的 PR。
- **[#8132](https://github.com/agentscope-ai/QwenPaw/pull/8132)（size/XXXL）**：发布评估工作流 + QwenPaw Index（GAIA / SWE-bench Verified 公开评测），是项目走向标准化 benchmark 的重要一步。
- **[#8137](https://github.com/agentscope-ai/QwenPaw/pull/8137)**：官方“减弱特效”外观档位（对应 #8135 GPU 占用问题），当日提 Issue 当日出 PR。

**小结**：项目本周在“前端稳定性 + 会话持久化 + 工程质量”三条线并行推进，今日净关闭 13 个 Issue，2.2.2 正式版的收敛迹象明显。

---

## 4. 社区热点

1. **[#8134](https://github.com/agentscope-ai/QwenPaw/issues/8134)（OPEN，10 评论）— 聊天记录与大模型上下文窗口关联**：@happieme 激烈反馈聊天记录“说没就没了”，并关联到已关闭的 #7884（压缩后前端无法全量加载历史）。诉求明确：**聊天记录存储不应受模型上下文窗口限制**。与在途 PR #7931 直接相关，建议维护者在该 Issue 下同步 PR 进度以安抚用户。
2. **[#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040)（OPEN，4 评论）— embedding reindex 静默丢批**：CJK 超长 chunk 触发供应商单条 token 上限，整批失败但日志声称成功（#5950 复发）。用户做了完整的实证复现，报告质量极高。
3. **[#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120)（OPEN，3 评论）— 频繁“页面加载失败”**：多台设备复现，与 #8073/#8147 属同一 HTTP 原点问题簇，今日修复 PR 已合并，可验证关闭。
4. **[#8139](https://github.com/agentscope-ai/QwenPaw/issues/8139) — You.com 作为免 Key web_search 后端**：You.com 员工按 CONTRIBUTING 流程先提案后写码，是健康的企业贡献模式信号。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#8134](https://github.com/agentscope-ai/QwenPaw/issues/8134) 聊天记录丢失/与上下文窗口强关联 | 待修复，关联 PR #7931 在途 |
| 🔴 高 | [#8109](https://github.com/agentscope-ai/QwenPaw/issues/8109)（已关闭）流错误导致 Agent 子会话 100% 全部丢失 | 已关闭，与 #7865（流中断自愈）相关，建议确认是否真正修复 |
| 🟠 中高 | [#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) embedding reindex 静默丢批（#5950 回归） | **无 fix PR**，需关注 |
| 🟠 中高 | [#8150](https://github.com/agentscope-ai/QwenPaw/issues/8150) 飞书入站图文混发图片被静默丢弃 | 今日新报，无 PR |
| 🟠 中 | [#8129](https://github.com/agentscope-ai/QwenPaw/issues/8129) 图片缩放丢失 EXIF 方向，模型看到“躺倒”的图 | 无 PR |
| 🟡 中 | [#8147](https://github.com/agentscope-ai/QwenPaw/issues/8147)（已关闭）切 Agent 后 Console 崩溃 `crypto.randomUUID` | ✅ #8146 已合并修复 |
| 🟡 中 | [#8123](https://github.com/agentscope-ai/QwenPaw/issues/8123) Daily Paper 因模型输出截断整体失败，无单篇重试 | 无 PR |
| 🟢 低 | [#8143](https://github.com/agentscope-ai/QwenPaw/issues/8143) SVG 尺寸属性报错刷屏；[#8046](https://github.com/agentscope-ai/QwenPaw/issues/8046)（已关闭）DST 时区偏移 | 前者无 PR |

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 落地可能性 |
|---|---|---|
| 会话历史持久化 + 分页加载 | 隐含于 #8134 | **高**，PR #7931 已在途（XXXL） |
| 减弱特效/低 GPU 档位 | [#8135](https://github.com/agentscope-ai/QwenPaw/issues/8135) | **高**，PR #8137 已提交 |
| Skill 下载后台化 + 可取消 | [#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126) | **高**，是 #8055 的自然后续 |
| 自托管 Skill/Plugin 市场源（离线部署） | [#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) | 中，企业内网场景需求明确，尚无 PR |
| You.com 免 Key 搜索后端 | [#8139](https://github.com/agentscope-ai/QwenPaw/issues/8139) | 中，官方贡献者已表态可提交代码 |
| Reasoning fold / 微压缩按实际 token 触发 | [#8148](https://github.com/agentscope-ai/QwenPaw/issues/8148) | 中，属记忆压缩体系演进 |
| Tauri2 → Electron（麒麟 V10 兼容） | [#8142](https://github.com/agentscope-ai/QwenPaw/issues/8142) | 低，架构级变更，需官方权衡 |

---

## 7. 用户反馈摘要

- **最大痛点：记忆与历史**。多位用户（@happieme 等）反映历史消息“翻不回去”、压缩后前端加载不全、流错误后会话全丢。用户明确区分“模型上下文窗口”与“应完整保留的聊天记录”，情绪较激烈，是当前满意度最大扣分项。
- **多模型兼容性摩擦**：DeepSeek 相关的 file content 块 400 错误（#8022/#8064/#7883）在 2.2.1 集中爆发后多数已关闭，但反映“未按模型能力降级 content”的系统性问题。
- **前端/桌面端体验**：beta4 出现设置界面错乱（#8122）、页面加载失败（#8120）、Console 崩溃（#8147）等，beta 质量引发一定抱怨，但官方修复节奏快。
- **正面信号**：Issue 报告质量普遍较高（多个含完整复现与实证数据）；first-time contributor 持续产出高质量修复；企业/内网部署（#8015）、国产 Linux 桌面（#8142）等进阶使用场景出现，说明用户群体在深化。

---

## 8. 待处理积压

- **[#8134](https://github.com/agentscope-ai/QwenPaw/issues/8134) / #7884**：聊天记录丢失问题用户已抱怨多日且语气升级，建议在 Issue 中明确同步 #7931 的时间表。
- **[#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040)**：#5950 的回归，实证充分，尚无修复排期，影响记忆系统数据完整性。
- **[#8116](https://github.com/agentscope-ai/QwenPaw/issues/8116)**：消息队列重复投递/错误归属问题，用户称“半年未解决”，被标记 need-info，需主动跟进引导。
- **PR 积压**：@Nobodyanonymou-s 的 5 个运行时/Console 修复 PR（#7762、#7865、#7723、#7807、#7868）最早可追溯至 9 月 12 日，其中多项直接影响稳定性（流中断自愈、静默失败），建议优先评审；超大 PR #7931、#8132、#8055 需拆分或加人评审以避免长期阻塞。
- **[#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015)**（自托管市场源）已有数日无响应，属企业用户关键路径，建议给出路线图表态。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报（2026-10-09）

## 1. 今日速览

今日 EasyClaw 仓库整体活跃度**较低但保持稳定迭代节奏**。过去 24 小时内无新增或活跃 Issue（0 条）、无 PR 更新（0 条），社区互动处于静默状态。但项目发布了新版本 **v1.9.28**，表明维护者仍在持续推进功能开发，只是贡献渠道以官方直接发布为主，社区参与度有待观察。综合判断：项目处于“低交互、稳交付”的维护型状态，健康度中等。

## 2. 版本发布

**v1.9.28: TK Copilot v1.9.28**（[Release 链接](https://github.com/gaoyangz77/easyclaw/releases)）

**What's New:**
- 达人（Creator）工作台支持**多店铺筛选**，并为商务拓展（BD）人员提供**个人与公共工作范围（own / public workbench scopes）**
- 支持**达人 Excel 导出导入**用于 BD 交接，并**明确差评跟进职责归属**

**评估：**
- 属于面向电商/达人运营场景的功能增强版本，无破坏性变更声明
- 迁移注意：涉及 BD 人员工作范围权限划分，升级后管理员需检查各 BD 账号的工作台 scope 配置是否符合预期
- 差评跟进职责的明确化可能影响现有工单流转规则，建议升级后复核内部责任分配

## 3. 项目进展

今日无合并或关闭的 PR（0 条）。项目进展完全体现在 v1.9.28 的直接发布上，主要推进了**达人工作台的多店铺管理能力**和**BD 交接流程（Excel 导入导出）**两条功能线，属于运营效率工具的持续完善。

## 4. 社区热点

今日无活跃 Issue 或 PR 讨论。社区互动为零，暂无可分析的热点话题。建议关注后续是否有用户对 v1.9.28 新功能（尤其工作台 scope 权限）的反馈。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。新版本发布后 24 小时是问题暴露的高峰期，建议持续监控 Issue 队列。

## 6. 功能请求与路线图信号

今日无新功能请求。从 v1.9.28 的发布内容可推断路线图方向：
- **多店铺/多租户运营能力**持续增强（多店铺筛选、工作范围划分）
- **数据导入导出与跨角色交接**（Excel 导入导出、BD handoff）是当前迭代重点
- 预计下一版本可能继续深化差评管理（bad-review follow-up）与团队协作流程

## 7. 用户反馈摘要

今日无 Issue 评论可提炼。缺乏用户反馈数据，无法评估满意度。

## 8. 待处理积压

今日无长期未响应的 Issue 或 PR 记录（当前周期 Issue/PR 活动均为 0）。不过“零 Issue”本身值得注意：可能是用户基数较小，或反馈渠道不在 GitHub（如微信群、邮件）。建议维护者在 README 中明确反馈渠道，提升社区参与度。

---

**健康度小结：** 交付活跃 ✅ ｜ 社区互动 ⚠️ 待提升 ｜ 稳定性 无异常信号 ｜ 版本节奏 稳定

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*