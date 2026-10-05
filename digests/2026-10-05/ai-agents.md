# OpenClaw 生态日报 2026-10-05

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-05 04:41 UTC

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

# OpenClaw 项目动态日报 — 2026-10-05

## 1. 今日速览

OpenClaw 今日保持高活跃度：过去 24 小时 Issue 更新 500 条（新开/活跃 326，关闭 174），PR 更新 500 条（待合并 307，已合并/关闭 193），无新版本发布。核心维护者 @steipete 单日提交了十余个修复与重构 PR，覆盖 Gateway 恢复、X 频道流式集成、性能优化等方向。社区焦点集中在**更新/回滚链路（多个 P0）**、**进程/磁盘资源泄漏**、**claude-cli 多智能体协作缺陷**三大主题。整体修复产出速度健康，但 P0 级更新器问题的积压值得警惕。

## 2. 版本发布

今日无新版本发布。（注：社区正在消化 2026-10-03 发布的 2026.9.8，多个 Issue 报告其未包含 main 上的关键修复，见下文。）

## 3. 项目进展

今日 PR 活动以 @steipete 的密集提交为主，方向明确：

- **恢复与可用性**：[#165333](https://github.com/openclaw/openclaw/pull/165333) 让被 Gateway 重启中断的 Control UI 对话得以恢复；[#165335](https://github.com/openclaw/openclaw/pull/165335)（P1，待维护者审查）修复过期 subagent 传输记录阻塞重启恢复；[#165313](https://github.com/openclaw/openclaw/pull/165313) 修复排队消息误用 heartbeat 回复选项。
- **频道路由**：[#165337](https://github.com/openclaw/openclaw/pull/165337) 将 X mentions 改为 Activity API 流式订阅，取代最长 1 分钟延迟的轮询；[#165334](https://github.com/openclaw/openclaw/pull/165334) 按维护者要求回滚 Slack/Discord 返回按钮。
- **工具调用正确性**：[#165297](https://github.com/openclaw/openclaw/pull/165297)（P1，安全敏感）修复 OpenAI 兼容 provider 复用 tool call id 时 GitHub 发布、工具回复与客户端工具调用相互冲突的问题。
- **性能与重构**：[#165331](https://github.com/openclaw/openclaw/pull/165331) 将就绪后通知清理移出主线程；[#165293](https://github.com/openclaw/openclaw/pull/165293)、[#165230](https://github.com/openclaw/openclaw/pull/165230) 降低 worker 读写与调度开销；[#165288](https://github.com/openclaw/openclaw/pull/165288)、[#165330](https://github.com/openclaw/openclaw/pull/165330) 等系列 deslop 重构持续精简核心运行时。
- **Windows 无人值守**：[#165163](https://github.com/openclaw/openclaw/pull/165163)（XL，关闭 #143757）安装可无人值守运行的 Gateway 计划任务并放宽冷启动就绪窗口。
- **测试与文档**：[#165336](https://github.com/openclaw/openclaw/pull/165336) 完成维护者授权的低价值测试清理（batch d209）。

整体看，项目在“重启恢复正确性 + 主线程性能”两条主线上有实质推进。

## 4. 社区热点

- **[#42475](https://github.com/openclaw/openclaw/issues/42475)（25 评论）**：请求在 Gateway 层实现 per-agent 成本预算（日/月上限）。运维方希望在模型调用分发前拦截失控支出，目前只能依赖外部监控。属于产品决策待定状态，呼声持续。
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)（17 评论，P1）**：hook/工具子进程未被 reap，僵尸进程累积导致运行时劣化——回归类问题，生产影响明显。
- **[#150635](https://github.com/openclaw/openclaw/issues/150635)（17 评论）**：短时召回存储夜间驱逐被召回条目，导致 dreaming deep 阶段永远无法晋升记忆。memory-core 记忆生命周期设计缺陷的深入讨论。
- **[#114612](https://github.com/openclaw/openclaw/issues/114612)（16 评论，P1）**：`memory_index_chunks` / `memory_embedding_cache` 表无保留策略，SQLite 无界增长最终填满磁盘，附生产实例证据。
- **[#121661](https://github.com/openclaw/openclaw/issues/121661)（15 评论，P1）**：CLI-backed subagent announce-wake 回合禁用工具后，模型**捏造工具调用及其输出**——正确性与可信度双重风险，涉及安全审查。

## 5. Bug 与稳定性（按严重程度）

### P0（发布阻塞级）
- **[#152275](https://github.com/openclaw/openclaw/issues/152275)**：插件激活失败后模型目录与回复分发不可用直至重启。无 fix PR。
- **[#143334](https://github.com/openclaw/openclaw/issues/143334)**：subagent 完成投递丢失，请求方卡在 settle-yield，排队用户消息被饿死。无 fix PR。
- **更新器链路成灾**：[#144739](https://github.com/openclaw/openclaw/issues/144739)（npm 更新以旧版本运行 schema-17 候选态）、[#164074](https://github.com/openclaw/openclaw/issues/164074)（publication-complete 卡死）、[#164066](https://github.com/openclaw/openclaw/issues/164066)（已关闭：确认 2026.9.8 仍回滚，#160671/#163803 只在 main）、[#143752](https://github.com/openclaw/openclaw/issues/143752)（中断的包激活可搁浅 canonical CLI）、[#144447](https://github.com/openclaw/openclaw/issues/144447)、[#157415](https://github.com/openclaw/openclaw/issues/157415)。
- **[#158390](https://github.com/openclaw/openclaw/issues/158390)**：plugin-captures 临时目录从不 GC，磁盘无限增长。无 fix PR。

### P1（重要）
- **[#161379](https://github.com/openclaw/openclaw/issues/161379)**：模型目录刷新循环（TTL 60s < 刷新耗时）永久占满一个 CPU 核。
- **[#160959](https://github.com/openclaw/openclaw/issues/160959)**：捕获大型外部插件时 Gateway 主线程阻塞数分钟（2026.9.6 回归）。
- **[#144291](https://github.com/openclaw/openclaw/issues/144291)**：任何 config 热重载都会中止所有进行中的 agent 回合。
- **[#161976](https://github.com/openclaw/openclaw/issues/161976)**：WhatsApp DM 回复在重启后 durable registry 交接处反复失败。
- **[#164972](https://github.com/openclaw/openclaw/issues/164972)**（今日新开）：claude-cli 多智能体团队在 visibility tree/all 矩阵下上下文传递全面断裂，且**失败看起来像成功**——诊断成本极高。
- **安全相关**：[#88562](https://github.com/openclaw/openclaw/issues/88562)（models.json 明文写入 apiKey）、[#69110](https://github.com/openclaw/openclaw/issues/69110)（模型身份标签可伪造，已 stale）。

### P2
- [#143632](https://github.com/openclaw/openclaw/issues/143632)（iMessage 消息重投 2-3 次且泄漏内部信封）、[#138775](https://github.com/openclaw/openclaw/issues/138775)（memory search 活锁，已有 linked PR）、[#143278](https://github.com/openclaw/openclaw/issues/143278)（heartbeat 内部输出泄漏到 Telegram）、[#165047](https://github.com/openclaw/openclaw/issues/165047)（今日新开，Dashboard 图片附件 staging 失败）。

## 6. 功能请求与路线图信号

- **成本预算**（#42475）：与现有 `session-cost-usage.ts` 基础设施契合，实现门槛在 Gateway 分发层拦截，25 条评论热度高，建议优先纳入路线图，目前标记 needs-product-decision。
- **外部化 channel 插件信任机制**（[#92516](https://github.com/openclaw/openclaw/issues/92516)）：容器化部署的核心诉求，涉及安全模型设计，需产品决策。
- **按源目录共享向量索引**（[#95724](https://github.com/openclaw/openclaw/issues/95724)）：多 agent 同工作区重复构建索引，与 #114612 的存储增长问题同源，可一并设计。
- **per-agent 会话可见性作用域**（[#59149](https://github.com/openclaw/openclaw/issues/59149)，已有 linked PR）：层级化多 agent 部署需求，可能近期落地。
- 新 provider：[#132229](https://github.com/openclaw/openclaw/pull/132229)（muse-image 图像生成）待验证后可能进入下一版本。

## 7. 用户反馈摘要

- **部署运维痛点最集中**：更新器（npm/git/容器）回滚与卡死类 Issue 数量最多，多位用户（#164066、#144739、#164074）表示“升级比 bug 本身更可怕”，稳定的更新链路是自托管用户最大诉求。
- **消息可靠性**：多频道（Signal #143581、iMessage #143632、WhatsApp #161976、Telegram #51628）出现消息丢失/重复/延迟数小时，个人助理场景下这类故障用户感知最强。
- **资源占用**：CPU 核占满（#161379）、僵尸进程（#97616）、磁盘无限增长（#114612、#158390）在小主机/VPS 用户中影响突出。
- **正面信号**：issue 模板规范、clawsweeper 自动分类标签体系运转良好；社区贡献者（@vantang、@ericcaiwx-star、@0xalydev 等）持续提交针对性 fix PR；@steipete 对 Windows（#165163）等长尾平台问题的响应获得感谢。

## 8. 待处理积压

以下高影响 Issue 长期处于 `needs-maintainer-review` / `needs-product-decision` 且无 fix PR，建议维护者优先分诊：

| Issue | 优先级 | 状态信号 |
|---|---|---|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) 成本预算 | P2 | 3 月开至今，25 评论，产品决策悬置 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) 僵尸进程泄漏 | P1 | 6 月开至今无 fix PR |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) SQLite 无界增长 | P1 | 7 月开，生产证据充分 |
| [#84037](https://github.com/openclaw/openclaw/issues/84037) Codex 稳态 CPU | P1 | 5 月开，needs-live-repro |
| [#92516](https://github.com/openclaw/openclaw/issues/92516) 外部 channel 插件信任 | P2 | 6 月开，阻塞容器化部署场景 |
| [#69110](https://github.com/openclaw/openclaw/issues/69110) 模型标签伪造 | P2 | 已 stale，安全问题不宜 stale 处理 |

**健康度小结**：开发吞吐量优秀（单日 193 个 PR 合并/关闭），但 P0 更新器问题与资源泄漏类 Bug 的修复速度明显落后于报告速度，且多个已关闭 Issue（#164066）显示修复未及时进入 stable 发布——建议加强 main→stable 的 cherry-pick 节奏。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**数据日期：2026-10-05**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**功能深化与稳定性分化**阶段：以 OpenClaw 为代表的头部项目日 Issue/PR 活动量达数百条，呈现出"平台级"运营特征；第二梯队（NanoBot、Zeroclaw、Hermes Agent、CoPaw 等）在子智能体编排、MCP 工具治理、成本可观测性等垂直方向快速追赶。生态竞争焦点正从"功能有无"转向**可靠性工程**——更新链路、消息投递、资源泄漏、静默失败成为各项目共同的主战场。渠道层（Telegram/QQ/Discord/微信等 IM）与 Provider 层的兼容适配持续消耗维护带宽，反映出这类产品天然的多协议、多模型复杂度。同时，安全类问题（消息伪造漏洞、API key 明文、审批机制失效）开始受到各项目的严肃对待。

---

## 2. 各项目活跃度对比

| 项目 | Issue 活动 | PR 活动 | Release | 核心方向 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500 条（新开/活跃 326） | 500 条（合并/关闭 193） | 无 | 更新链路修复、Gateway 恢复、性能优化 | 🟢 吞吐量最高，但 P0 积压与 main→stable cherry-pick 滞后需警惕 |
| **NanoBot** | 7 条（4 活跃） | 52 条（合并 14） | 无 | Provider 正确性、子智能体、WebUI 打磨 | 🟢 Issue 响应极快（当天闭环），但 38 个待合并 PR 半数带冲突 |
| **Zeroclaw** | 24 条（23 活跃） | 50 条（合并 5） | 无（v0.8.6 收敛中） | 运行时组合边界、配置写入安全、本地小模型 | 🟡 活跃度高、P0 响应快，但 45 个待合并 PR 积压偏大 |
| **Hermes Agent** | 50 条（45 活跃） | 50 条（合并 14） | 无 | 插件加载竞态、gateway 多 profile 架构、代码质量棘轮 | 🟢 贡献管道通畅；插件 `sys.modules` 竞态（3+ 重复报告）无 fix 是最大风险 |
| **CoPaw (QwenPaw)** | 13 条（12 活跃） | 12 条（合并 2） | 无 | 2.2.2b4 beta 打磨、插件容器化、Provider 兼容 | 🟢 修复响应快；审批按钮失效（#8105）与内存耗尽（#7722）需优先处理 |
| **NanoClaw** | 8 条（全部活跃，0 关闭） | 22 条（合并 9） | **v2026.10.0-rc.1** ✅ | 发布工程、安全修复（Baileys 伪造漏洞）、更新渠道机制 | 🟢 发布成熟、安全响应快；高优 Issue #3643 零响应 40+ 天 |
| **PicoClaw** | 4 条 | 9 条（合并 7） | 无 | 通道修复、ARM 自更新、配置持久化 | 🟡 修复提速，但 stale 关闭未修复的 bug（DingTalk panic）伤社区信任 |
| **LobsterAI** | 5 条 | 6 条（合并 3） | 无 | MCP 工具治理、模型选择器、预设 Agent | 🟡 开发活跃但 6 个月老 Issue 无响应，stale 机器人代管社区 |
| **NullClaw** | 5 条 | 13 条（合并 7） | 无 | 通道稳定性（Discord/Zig TLS）、移动端、Docker | 🟢 修复密度高、社区互助好；规模较小 |
| **IronClaw** | 0 条 | 5 条（全部 dependabot） | 无 | 依赖例行维护 | 🔴 人工开发与社区互动为零，疑似停滞/闭源化开发 |
| **TinyClaw / Moltis / ZeptoClaw / EasyClaw** | 0 | 0 | 无 | — | ⚪ 24 小时无活动 |

---

## 3. OpenClaw 在生态中的定位

**规模与活跃度断层领先**：OpenClaw 单日 500 Issue + 500 PR 更新、193 个 PR 合并/关闭，量级是第二梯队项目的 5-10 倍，且拥有 @steipete 等高强度核心维护者与规范化的自动分诊体系（issue 模板、clawsweeper 标签），是事实上的生态参照系——多个项目（LobsterAI 等）的 MCP 配置直接面向 OpenClaw 格式做兼容。

**技术路线差异**：OpenClaw 走"全能 Gateway 常驻进程 + 多频道接入 + 记忆系统（memory-core/dreaming）"的重平台路线，功能面最广但复杂度代价明显——更新器回滚成灾、多智能体上下文断裂（#164972）等系统性问题正源于此。相比之下：Zeroclaw 专注运行时组合边界与 local-first；NanoClaw 深耕 Claude Code 容器化 + 发布工程；NanoBot 轻量、WebUI 体验优先；NullClaw 用 Zig 追求极致轻量与移动端。

**核心风险**：P0 更新器问题积压 + 修复未进入 stable 发布（#164066 确认 2026.9.8 缺失 main 关键修复），"升级比 bug 更可怕"的用户情绪是头部项目典型的规模病。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目与具体诉求 |
|---|---|
| **更新/安装链路可靠性** | OpenClaw（P0 更新器回滚链路成灾）、Hermes（#132089 update 崩溃遗留 lock）、NanoClaw（#4021 macOS 更新竞态，但回滚干净）、PicoClaw（#3399 ARM 装错包）。自托管用户第一痛点，也是建立信任的基础设施 |
| **成本可观测性与预算控制** | OpenClaw #42475（per-agent 成本预算，25 评论）、NanoBot #5266（2 小时烧百万 token 无日志）、Zeroclaw（#8539/#10700/#11515 三条 cost 分账问题）、Hermes #133106（用量统计 ×100）。无一项目完整解决 |
| **后台行为静默化** | NanoBot #5900/#6029（压缩通知打扰聊天渠道）、CoPaw #8103（模型静默回退无感知）、NanoBot #6031 + CoPaw 呼应（failover 透明性）。多项目一周内独立提出，信号极强 |
| **子智能体编排与多 Agent 协作** | OpenClaw（#164972 claude-cli 多智能体上下文断裂、#121661 模型捏造工具调用）、NanoBot（#5985 子智能体任务管理）、NanoClaw（#4027 协调者无法管理子 Agent）、Hermes（#132269 子代理不继承 /fast）。编排能力是下一轮竞争焦点，且正确性问题普遍 |
| **会话/配置数据完整性** | Zeroclaw（#10495 配置被清空为 702 字节，P0）、NanoBot（#5545/#5483 会话删除后被"复活"）、CoPaw（#8109 会话 100% 丢失） |
| **资源泄漏与移动/边缘端** | OpenClaw（僵尸进程 #97616、SQLite 无界增长 #114612）、NullClaw（Android 静默输出损坏 #1018）、Zeroclaw（Termux quickstart #11525）、PicoClaw（32 位 ARM）——移动端是真实且被低估的用户群 |
| **渠道协议适配滞后** | PicoClaw（QQ 上游变更 #3394、DingTalk panic）、NanoClaw（#3569 chat-adapter 落后 3 版本）、OpenClaw（多频道消息丢失/重复）。上游协议变更的响应速度是持续税负 |

---

## 5. 差异化定位分析

| 维度 | 分化情况 |
|---|---|
| **架构重量** | OpenClaw/CoPaw = 全功能平台（Gateway + Dashboard + 记忆 + 插件）；NanoBot/NanoClaw = 中等重量、聚焦核心链路；NullClaw（Zig）/PicoClaw（嵌入式/RISC-V）= 轻量路线；Zeroclaw 走 Rust 运行时组合边界 |
| **目标用户** | OpenClaw 面向自托管运维方（VPS/容器/Windows 无人值守）；NanoBot 面向桌面个人用户（移动端占比高）；Zeroclaw 明确服务 local-first/本地小模型用户（#5287）；PicoClaw 深耕国产 IM 生态（QQ/OneBot/DingTalk）+ 边缘硬件；NanoClaw 主打容器化 Claude Code + Telegram/WhatsApp；CoPaw 面向企业生产部署（provisioner 白名单、DevOps 场景） |
| **LLM 策略** | OpenClaw 多 Provider + claude-cli 双轨；Zeroclaw 定义 `local_small` profile 与 prompt 预算契约（本地小模型一等公民）；NanoClaw 强调本地长推理（30 分钟硬杀问题即因此爆发）；Hermes 出现 GGUF 本地模型支持诉求（#119194）——**本地/托管用户需求分化正在加剧** |
| **记忆系统** | OpenClaw 独有 dreaming/记忆晋升机制（但也暴露设计缺陷 #150635）；CoPaw 有 Dream 调度（#8112 请求小时级预设）；其余项目普遍未深度投入 |
| **治理风格** | OpenClaw 强流程（自动分诊、deslop 重构）；Hermes 引入代码健康棘轮（#132646）；Zeroclaw 走 Core Team 正式批准的 tracker 驱动开发；PicoClaw/LobsterAI 依赖 stale 机器人，治理偏弱 |

---

## 6. 社区热度与成熟度分层

- **快速迭代 / 规模化扩张期**：**OpenClaw**（功能广度 + 吞吐量双高，但质量债积累）、**Hermes Agent**（社区贡献管道通畅、架构演进活跃）
- **版本冲刺期**：**NanoClaw**（刚发布日历版本 rc.1，发布工程最成熟）、**Zeroclaw**（v0.8.6 密集收敛）、**CoPaw**（2.2.2 beta 密集打磨）
- **质量巩固 / 稳定打磨期**：**NanoBot**（响应快但需清理 PR 积压）、**NullClaw**（小而健康的修复期）、**PicoClaw**（修复提速中）
- **预警区**：**LobsterAI**（开发活跃但社区回应率低，6 个月老 Issue 濒临自动关闭）、**IronClaw**（纯机器人维护，疑似停滞）

**成熟度判据**：能对 P0/安全问题当天响应的项目（Zeroclaw #10495、NanoClaw Baileys 漏洞、OpenClaw #165297）明显优于依赖 stale 机制管理积压的项目（PicoClaw、LobsterAI）。

---

## 7. 值得关注的趋势信号

1. **“升级信任”成为新的护城河**：多个项目同时暴露更新链路问题，而 NanoClaw 的"更新渠道 + 干净回滚”获得用户认可——可预期的发布节奏（日历版本 + rc 渠道）正成为自托管产品的竞争力，OpenClaw 的 cherry-pick 滞后是反面教材。
2. **成本可观测性是全生态空白地带**：五+ 项目独立出现成本审计/分账/预算诉求且均未完整解决。率先实现 per-agent 预算拦截 + 细粒度 token 审计 + 降级通知的项目将获得运维用户的关键差异化——这是最明确的创业/贡献机会。
3. **静默失败是用户容忍度最低的缺陷类别**：插件随机丢失（Hermes）、审批误执行（CoPaw）、Android 输出损坏（NullClaw）、"失败看起来像成功”（OpenClaw #164972）——用户宁可显式崩溃也不要静默降级。可观测性投入的 ROI 高于新功能。
4. **多 Agent 编排进入正确性深水区**：各项目均在补编排能力，但暴露的是语义级 bug（上下文断裂、结果投递串会话、捏造工具调用），说明编排 infra 易做、正确性保证难——工具调用 id 复用、会话归属路由等基础语义值得专项投入。
5. **本地/边缘端是真实增长的细分市场**：Termux/ARM/树莓派/本地小模型用户在 6 个项目中均有明确反馈（Zeroclaw 的 local_small profile 是最系统的响应）。prompt 膨胀对本地小模型不可接受，"prompt 预算契约"可能成为 local-first 项目的标配设计。
6. **安全债务开始到期**：明文 API key、消息伪造漏洞、模型身份伪造、审批机制失效集中出现——安全类 Issue 不应被 stale 处理，建议各项目建立安全 Issue 免 stale 的显式政策（Hermes 的安全 PR 优先评审是正面信号）。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-10-05

---

## 1. 今日速览

NanoBot 今日保持高活跃度：过去 24 小时内共更新 **7 条 Issues**（4 新开/活跃、3 关闭）和 **52 条 PR**（38 待合并、14 已合并/关闭），无新版本发布。社区贡献持续聚焦于 **WebUI 交互细节修复**（移动端抽屉、侧边栏焦点管理）、**Provider 参数正确性**（temperature/reasoningEffort）以及**会话生命周期健壮性**。多个 Issue 当天提出即有对应 fix PR（如 #6031→#6062、#6008→#6009），体现出修复响应链路高效。但 38 条待合并 PR 中大量长期挂起并存在冲突标记，合并节奏值得关注。

---

## 2. 版本发布

今日无新版本发布。（最新已知版本仍为 nanobot-ai 0.3.5，见 Issue #6024 提及）

---

## 3. 项目进展

今日合并/关闭共 14 条 PR，代表性成果：

- **[PR #6005](https://github.com/HKUDS/nanobot/pull/6005)** fix(providers): 修复启用 `reasoningEffort` 后对所有 `openai_compat` provider 静默丢弃 `temperature` 的问题（对应 Issue #6002，涉及 38/46 个 ProviderSpec）。对 Mistral 等兼容模型恢复传参，属高影响修复。
- **[PR #5985](https://github.com/HKUDS/nanobot/pull/5985)** feat(subagent): 会话级子智能体任务消息与取消机制——单一 `subagent` 工具管理私有子任务，含实时任务观察，WebUI 保留进度与结果。子智能体编排能力显著增强。
- **[PR #6061](https://github.com/HKUDS/nanobot/pull/6061) / [PR #6058](https://github.com/HKUDS/nanobot/pull/6058) / [PR #6059](https://github.com/HKUDS/nanobot/pull/6059)**（@Re-bin）：移动端侧边栏点击当前话题不关闭、Escape 后焦点恢复系列修复，移动端可访问性打磨密集。
- **[PR #6054](https://github.com/HKUDS/nanobot/pull/6054)** docs(memory): 修正 memory Git 仓库目录布局描述及 JSONL 增量读取示例。
- 对应关闭的 Issues：#6002（temperature 丢弃）、#5900（静默上下文压缩）、#6024（Obsidian CLI XDG 环境变量）等。

**整体评估**：今日进展集中在「Provider 正确性 + 子智能体能力 + WebUI 体验」三条线，稳定性与可用性均有实质推进。

---

## 4. 社区热点

- **[Issue #5266](https://github.com/HKUDS/nanobot/issues/5266)**（13 条评论，8 月至今持续活跃）：用户报告无显著操作时 **2 小时烧掉上百万 token**，请求按调用粒度记录 token 消耗日志。反映自托管个人 AI 助手的成本可见性是核心痛点，值得维护者优先排期。
- **[Issue #6031](https://github.com/HKUDS/nanobot/issues/6031)**（10-04 提出，10-05 即有 PR）：模型 failover 触发时 QQ/Telegram/Discord/Slack 等聊天渠道完全无提示，仅 WebUI 有事件。诉求是「降级透明性」。已由 [PR #6062](https://github.com/HKUDS/nanobot/pull/6062) 响应。
- **静默上下文压缩双 Issue**：[#5900](https://github.com/HKUDS/nanobot/issues/5900)（已关闭）与 [#6029](https://github.com/HKUDS/nanobot/issues/6029)：后台 idle 压缩/dream 周期向微信等渠道广播"Compressing context…"打扰用户，说明**后台维护行为的静默化**是高频诉求（一周内两人独立提出）。

---

## 5. Bug 与稳定性（按严重程度）

| 级别 | 问题 | 状态 |
|---|---|---|
| **高（成本/资源）** | [#5266](https://github.com/HKUDS/nanobot/issues/5266) 无活动下 token 消耗异常，缺审计日志 | OPEN，暂无 fix PR |
| **高（正确性）** | [#6002](https://github.com/HKUDS/nanobot/issues/6002) reasoningEffort 导致 38 个 provider 丢 temperature | ✅ 已修复（PR #6005） |
| **中（数据完整性）** | [#5545](https://github.com/HKUDS/nanobot/pull/5545) 会话删除后被 stale Session 对象复活写入 | PR 待合并 |
| **中（数据完整性）** | [#5483](https://github.com/HKUDS/nanobot/pull/5483) 延迟消息重建已删除会话 | PR 待合并 |
| **中（数据丢失）** | [#6060](https://github.com/HKUDS/nanobot/pull/6060) XLSX 声明范围外的单元格被静默丢弃，影响 read_file/grep | PR 待合并 |
| **中（回归）** | [#5152](https://github.com/HKUDS/nanobot/pull/5152) 子智能体部分完成结果未标记（标记 regression） | PR 待合并 |
| **低（UX）** | [#6008](https://github.com/HKUDS/nanobot/issues/6008) 侧边栏初始 fetch 失败后状态被清空 | ✅ PR #6009 已提交 |
| **低（环境）** | [#6024](https://github.com/HKUDS/nanobot/issues/6024) Wayland 下 XDG_RUNTIME_DIR 未传递给 CLI | ✅ 已关闭 |

**模式观察**：会话删除后「复活」类数据完整性问题出现两条 PR，提示 session 生命周期管理是当前薄弱环节。

---

## 6. 功能请求与路线图信号

- **静默/可配置的后台压缩通知**（#5900 已关闭 + #6029 开放）：强烈信号，预计下版本纳入。
- **Failover 渠道通知**（#6031 + PR #6062）：PR 已就绪，合并概率高。
- **MCP schema 预算控制**（[PR #5388](https://github.com/HKUDS/nanobot/pull/5388)，8 月至今仍活跃）：opt-in 的 MCP schema 字节预算，与 token 成本议题（#5266）呼应，方向契合但冲突未解。
- **会话级 focus 持久化**（[PR #5537](https://github.com/HKUDS/nanobot/pull/5537)）：`my` 工具增加跨轮次/重启的连续性线索，解决 #3292。
- **本地可信 WebUI 扩展机制**（[PR #6032](https://github.com/HKUDS/nanobot/pull/6032)）：manifest 校验 + 网关作用域路由，若合并将打开浏览器端插件生态。
- **计划任务绑定聊天选择**（[PR #6057](https://github.com/HKUDS/nanobot/pull/6057)）：WebUI 生产级控制 + 网关操作，功能接近完成。

---

## 7. 用户反馈摘要

- **成本焦虑**：自托管用户对 token 消耗不可见、不可控感到不满（#5266 13 条评论），希望有细粒度审计。
- **多渠道打扰**：微信/QQ 用户反感后台维护（压缩、dream 周期）向聊天渠道广播状态消息（#5900、#6029），期望「静默后台」。
- **降级无感知**：多渠道用户希望知道回复来自降级模型，否则难以判断质量波动（#6031）。
- **积极面**：Issue 当天响应、当天出 fix PR 的速度获得社区正反馈；Obsidian CLI 集成等桌面场景被真实使用（#6024），说明用户已将其嵌入日常工作流。
- **移动端体验**：多条移动端侧边栏/抽屉焦点 PR 说明手机端使用占比不低。

---

## 8. 待处理积压（提醒维护者关注）

| 项目 | 挂起时长 | 风险/优先级 |
|---|---|---|
| [Issue #5266](https://github.com/HKUDS/nanobot/issues/5266) token 消耗日志 | 2 个月，13 评论 | 🔴 高，成本类核心诉求，无 PR 响应 |
| [PR #5204](https://github.com/HKUDS/nanobot/pull/5204) Responses 能力声明重构 | **p1**，8 月至今，有冲突 | 🔴 高，p1 级长期未合并 |
| [PR #5152](https://github.com/HKUDS/nanobot/pull/5152) 子智能体部分完成（regression） | 7 月至今 | 🟠 回归修复积压 |
| [PR #5388](https://github.com/HKUDS/nanobot/pull/5388) MCP schema 预算 | 8 月至今，有冲突 | 🟠 功能价值高 |
| [PR #5545](https://github.com/HKUDS/nanobot/pull/5545) / [#5483](https://github.com/HKUDS/nanobot/pull/5483) 会话删除竞态 | 8 月至今 | 🟠 数据完整性 |
| [Issue #6029](https://github.com/HKUDS/nanobot/issues/6029) 静默后台周期 | 新开 | 🟡 需与已关闭的 #5900 汇总统一方案 |

**健康度小结**：Issue 响应速度优秀（当天闭环多个），但 38 条待合并 PR 中约半数带有 `conflict` 标签且多来自 7–8 月，建议维护者优先清理冲突并推进 p1 级 PR #5204 的合并评审。

---

*数据来源：NanoBot GitHub 仓库，统计窗口 2026-10-04 至 2026-10-05（UTC）。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 · 2026-10-05

## 1. 今日速览

今日 Zeroclaw 呈现高度活跃状态：过去 24 小时共有 **24 条 Issue 更新**（23 开/活跃，1 关闭）和 **50 条 PR 更新**（45 待合并，5 合并/关闭），无新版本发布。开发重心集中在 **v0.8.6 运行时工作**上，包括测试确定性改进、运行时组合边界（composition boundary）和配置写入安全加固。社区最关注的问题仍是配置数据丢失风险（#10495）与本地小模型运行时模式（#5287），均有对应修复/实现 PR 在推进中。整体来看，项目处于功能收敛 + 稳定性打磨阶段，PR 积压量（45 个待合并）偏大，值得维护者关注合并节奏。

## 2. 版本发布

今日无新版本发布。从 tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 可见，**v0.8.6**（Phase 2 运行时收尾）是下一个目标版本，多个 PR 已打上 `release:v0.8.6` 标签。

## 3. 项目进展

今日合并/关闭的 PR 共 5 个，主要成果：

- **[#11518](https://github.com/zeroclaw-labs/zeroclaw/pull/11518)** fix(approval): CLI 审批提示在 stdin EOF/读取错误时保留失败来源，将 runtime 的 fail-closed 拒绝与“用户拒绝”区分开（审计语义修复，对应 Issue #11335）。
- **[#11521](https://github.com/zeroclaw-labs/zeroclaw/pull/11521)** docs(runtime): 记录 Core Team 对运行时组合例外的正式批准，为 #11526 铺路。
- 另有若干测试确定性修复合并落地（配合 tracker [#11426](https://github.com/zeroclaw-labs/zeroclaw/issues/11426) 的批次推进）。

**待合并中的重要推进**：
- [#11526](https://github.com/zeroclaw-labs/zeroclaw/pull/11526)：让外部注入的 capabilities 成为完整工具注册表，完成 #10993 的运行时组合边界 —— v0.8.6 架构目标的核心一步。
- [#11527](https://github.com/zeroclaw-labs/zeroclaw/pull/11527)：拒绝未经证实来源的全量配置覆盖写入，直击 S0 数据丢失 bug #10495。
- [#11529](https://github.com/zeroclaw-labs/zeroclaw/pull/11529)：Linux 本地剪贴板写入 + 复制结果反馈，修复 ZeroCode "Copy" 失效（#11418）。
- [#11530](https://github.com/zeroclaw-labs/zeroclaw/pull/11530) / [#11531](https://github.com/zeroclaw-labs/zeroclaw/pull/11531)：Tailscale 隧道完整发布 WSS/注册端点并修正对外 URL。

整体评估：v0.8.6 的测试加固与架构收尾正在密集推进，一天内 6+ 个 `release:v0.8.6` 相关 PR 活跃，距离版本收敛明显在加速。

## 4. 社区热点

- **[#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)**（10 条评论，👍 2）：定义紧凑的 `local_small` 运行时 profile 与 prompt 预算契约。讨论最热烈，反映 **local-first 用户**对 prompt 膨胀、宽松 fallback 解析、内部指令泄漏到用户输出的痛点。配套 PR [#11532](https://github.com/zeroclaw-labs/zeroclaw/pull/11532)（结构化 Agent system prompt 加上限）刚刚提交，说明该需求正被实际落地。
- **[#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495)**（6 条评论，P0/S0）：`Config::save()` 可将 109KB、25 个 agent 的配置覆盖为 702 字节近空文件。数据丢失级风险，社区高度关注。已有两个修复 PR 在途：[#10499](https://github.com/zeroclaw-labs/zeroclaw/pull/10499)（写入前验证）与 [#11527](https://github.com/zeroclaw-labs/zeroclaw/pull/11527)（拒绝未证实全量保存）。
- **[#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)**（4 条评论）：ZeroCode TUI "Copy" 一键复制完全失效，用户工作流受阻（S1），对应修复 PR #11529 已提交。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| **P0/S0** | [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | Config::save() 可能用近空文件覆盖完整配置（数据丢失） | ✅ #10499、#11527 |
| **P1/S1** | [#11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525) | Android/Termux quickstart 无法创建 agent | 部分（相关 PR #10205 在途，需作者行动） |
| **P1/S1** | [#11519](https://github.com/zeroclaw-labs/zeroclaw/issues/11519) | 恢复的 workspace split 导致已装插件对 recovery 不可见（in-progress） | 开发中 |
| **P1/S1** | [#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673) | ZeroCode Code 面板（daemon RPC 路径）失败 ACP turn 不持久化 | 未明确 |
| **P1** | [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite 会话后端每轮重写全部消息的 created_at，逐条时间丢失 | 未明确 |
| **P1** | [#8539](https://github.com/zeroclaw-labs/zeroclaw/issues/8539) | AgentEnd 事件缺 cost_usd，channel 路径不发射 AgentEnd | ✅ #11535（今日提交） |
| **P2** | [#11432](https://github.com/zeroclaw-labs/zeroclaw/issues/11432) | daemon 中途被杀后会话永久卡在 running 状态 | 未明确 |
| **P2** | [#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700) | cost 记录共用 daemon 生命周期 session id，无法按会话分账（in-progress） | 未明确 |
| **P2** | [#11515](https://github.com/zeroclaw-labs/zeroclaw/issues/11515) | cost ledger 静默丢弃 torn-write 记录，汇总看似完整实则缺失 | 未明确 |
| **P2** | [#11517](https://github.com/zeroclaw-labs/zeroclaw/issues/11517) | Web 聊天 mid-turn 刷新丢失用户 prompt（界面+localStorage） | 未明确 |
| **P2** | [#9190](https://github.com/zeroclaw-labs/zeroclaw/issues/9190) | Reliable provider API key 轮换选中备用 key 却无法应用 | 未明确 |
| 安全 | [#10728](https://github.com/zeroclaw-labs/zeroclaw/issues/10728) | npm audit 失败：js-yaml 高危漏洞（间接依赖） | 未明确 |

**今日关闭**：[#11335](https://github.com/zeroclaw-labs/zeroclaw/issues/11335) — CLI 无终端时审批失败误报"Denied by user"，由 PR #11518 修复关闭。

## 6. 功能请求与路线图信号

- **本地小模型模式**（[#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)，已 accepted + in-progress）：`local_small` profile + prompt 预算契约，PR #11532 已开始实现 —— 高概率进入下一版本。
- **运行时组合边界完成**（[#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993)，v0.8.6）：PR #11526 依赖链就绪，是 v0.8.6 的核心交付。
- **旧原生工具适配器退役**（[#11442](https://github.com/zeroclaw-labs/zeroclaw/issues/11442)）：SaaS 集成迁移到 skills/plugins/MCP，架构瘦身信号明确。
- **Windows 文件替换/路径处理批次**（[#11425](https://github.com/zeroclaw-labs/zeroclaw/issues/11425)）：10 个 PR 统一协调，Windows 支持将显著改善。
- **测试隔离批次**（[#11426](https://github.com/zeroclaw-labs/zeroclaw/issues/11426)）：11 个 PR，提升 CI 确定性。
- **渠道扩展**（[#10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768) Sendblue iMessage/SMS、[#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) Antigravity CLI 工具）：均在 parking-lot，方向契合路线图但短期合入概率低。

## 7. 用户反馈摘要

- **本地/轻量用户**：在小模型上使用 ZeroClaw 时 prompt 膨胀、系统指令泄漏，体验差（#5287）——这是本地优先用户的核心诉求。
- **多 agent 运维用户**：配置文件被意外清空（109KB/25 agents 变 702 字节）直接威胁生产环境（#10495），对 config 写入路径的不信任感强。
- **移动端用户**：Android/Termux 用户存在真实使用群体，但 quickstart 完全跑不通（#11525）。
- **日常使用摩擦**：Copy 按钮失效（#11418）、mid-turn 刷新丢 prompt（#11517）、会话卡 running（#11432）——多为 S1/S2 级“小而痛”的问题，说明核心功能可用但边缘体验粗糙。
- **成本可观测性**：用户关心按会话分账和准确的 cost_usd 上报（#10700、#8539、#11515），反映项目已有较认真的生产化使用。

## 8. 待处理积压

- **[#10698](https://github.com/zeroclaw-labs/zeroclaw/pull/10698)**（9/7 提交，needs-author-action + stale-candidate）：Web 引导式 cron 编辑器，长期无作者响应，面临关闭。
- **[#10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768)**（Sendblue 渠道，XL，stale-candidate）：体量大且停滞，建议维护者明确去留。
- **[#10504](https://github.com/zeroclaw-labs/zeroclaw/pull/10504)**（turn 中止类型化重构，8/31 起 needs-author-action）：架构价值高但停滞，值得跟进。
- **[#9190](https://github.com/zeroclaw-labs/zeroclaw/issues/9190)**（7/20 提交，provider key 轮换失效，P2）：近三个月未修复。
- **[#8539](https://github.com/zeroclaw-labs/zeroclaw/issues/8539)**（6/30 提交，no-stale）：cost 可观测性缺口，今日 PR #11535 提交修复，建议优先 review。
- **[#10728](https://github.com/zeroclaw-labs/zeroclaw/issues/10728)**：npm audit 高危漏洞自 9/9 挂起近一个月，安全类问题应加快处理。

---

**健康度小结**：贡献活跃度高（50 PR/日更新）、修复响应快（P0 bug 当天有 fix PR），但 45 个待合并 PR 的积压和多个 `stale-candidate` 大型 PR 需要维护者投入 review 带宽，以保障 v0.8.6 顺利收敛。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-05

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去 24 小时共 50 条 Issue 更新（新开/活跃 45，关闭 5）、50 条 PR 更新（待合并 36，已合并/关闭 14），无新版本发布。社区贡献持续活跃，多位外部贡献者（@deadczarvc、@Terrigible、@liuhao1024 等）持续提交修复与文档改进。今日焦点集中在插件加载稳定性（`dictionary changed size during iteration` 系列问题）、gateway 多 profile 架构边界问题，以及代码质量棘轮机制（#132646）的落地。整体健康度良好，但插件加载和 Windows 平台的若干 P2 Bug 值得维护者优先关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 14 个 PR 中，较重要的包括：

- **#132646（已关闭）Code health 棘轮机制**：由 @teknium1 提交，建立按函数/文件的圈复杂度与体积上限棘轮，确保“代码健康度只升不降”，并提供 `scripts/check` 在提交前运行与 CI 相同的阻断检查。这是对 #23972 重构追踪器的基础设施支撑，长期意义重大。
- **#114403（已关闭）TUI prompt.submit 并发准入修复**：修复两个并发 `prompt.submit` 同时观察到 session 空闲、各自认领 turn，导致重复 hook 执行与消息重复投递的竞态（P2）。直接改善了 session 状态管理可靠性。
- **#95627（已关闭）MCP add 参数吞噬修复**：`mcp add --args` 使用 `argparse.REMAINDER` 导致后续 `--env`、`--connect-timeout` 被误吞进子命令 argv，现可正确解析。
- **#114071（已关闭）共享指标 outbox 并发创建容错**：修复双后端同时启动时的 `FileExistsError` 竞态。
- **#133002 / #132980（已关闭）CI 稳定性**：update E2E 超时延长至 15 分钟、Bot Mode live-DM 测试消除固定 sleep，缓解慢 runner 上的 CI 假失败。
- **文档三连（#133100 / #133098 / #133104）**：worktree 助手改用 PM Python 选择、插件示例改用 profile 作用域凭证（安全相关）、修复 Docusaurus 链接。

整体看，今日推进以**工程质量与并发正确性**为主线，合并量中等，无重大功能落地，但棘轮机制的合入为后续大规模重构（#23972）铺平了道路。

## 4. 社区热点

**最热 Issue：**

- **#123926（17 评论）插件启动时随机静默丢弃**：`_evict_modules` 在迭代 `sys.modules` 时并发修改，导致每次启动**随机一部分插件加载失败**且无用户可见错误。这是今日最热话题，且已衍生出至少 3 个重复报告（#125746 6 评论、#132886、#132814 相关），说明影响面广、用户普遍踩坑。诉求：静默失败应显式报错 + 根治并发迭代。
- **#40239（13 评论，4 👍）桌面端 pt-BR 本地化**：后端/TUI 已有完整葡萄牙语翻译（357+ 行 pt.yaml），桌面端缺失，巴西用户社区推动强烈，属高价值低成本需求。
- **#23972（5 评论）ruff 复杂度重构追踪器**：与今日合入的 #132646 棘轮机制形成呼应，重构工作有组织推进。

**今日新开但讨论迅速升温的：**

- **#133086 / #133087（@aleck31 连发）**：围绕 v0.21.x “一个 HERMES_HOME 一个 gateway”架构边界，指出 host rendezvous 按 OS 用户 + profile 名键控导致第二个 HERMES_HOME 无法独立运行 gateway，并提出 gateway-only host 进程的架构建议——这是对核心拓扑的深度反馈，值得维护者决策。

## 5. Bug 与稳定性

按严重程度排列（P2 优先）：

| 级别 | Issue | 摘要 | Fix PR |
|---|---|---|---|
| P2（系统性） | [#123926](https://github.com/NousResearch/hermes-agent/issues/123926) / [#125746](https://github.com/NousResearch/hermes-agent/issues/125746) / [#132886](https://github.com/NousResearch/hermes-agent/issues/132886) | 插件加载时 `sys.modules` 并发迭代异常，插件随机静默丢失 | **暂无 fix PR，需优先处理** |
| P2 | [#133087](https://github.com/NousResearch/hermes-agent/issues/133087)（已关闭） | 第二个 HERMES_HOME 的 gateway 判定“已服务 default profile”并重启循环 | 已关闭（疑似修复或判定） |
| P2 | [#133090](https://github.com/NousResearch/hermes-agent/issues/133090)（已关闭） | Store 安装的 gateway 命令行为 inline bootstrap，`gateway list` 全部误报未运行 | 已关闭 |
| P2 | [#132089](https://github.com/NousResearch/hermes-agent/issues/132089) | `hermes update` 在 snapshot 后崩溃，receipt 无失败原因，遗留 `.git/index.lock` | 暂无 |
| P2 | [#131172](https://github.com/NousResearch/hermes-agent/issues/131172) | Dashboard "New chat" 遗留孤儿 PTY，返回原会话被拒 | 暂无 |
| P2 | [#131884](https://github.com/NousResearch/hermes-agent/issues/131884) | Windows 更装 ffmpeg/agent-browser 遇 WinError 5，flatten_single_dir 无重试 | 暂无 |
| P2 | [#131991](https://github.com/NousResearch/hermes-agent/issues/131991) | Windows 托盘最小化/恢复后窗口假死，"Object has been destroyed"（#119243 回归） | 暂无 |
| P2 | [#133096](https://github.com/NousResearch/hermes-agent/issues/133096) | checkpoint 在不可遍历工作目录（如 /root 0700）抛 PermissionError | ✅ [#133102](https://github.com/NousResearch/hermes-agent/pull/133102) |
| P2 | [#133106](https://github.com/NousResearch/hermes-agent/issues/133106) | Anthropic 用量 ≤1 被错误 ×100（1% 显示为 100%） | 暂无 |
| P2 | [#133107](https://github.com/NousResearch/hermes-agent/issues/133107) | tool_search 拒绝 `query` 单字符串，与 schema 描述矛盾 | 暂无 |
| P3 | [#132803](https://github.com/NousResearch/hermes-agent/issues/132803) | hermes-lcm 每 engine 独立 SQLite 连接，并发 compaction 损坏状态表 | 暂无 |
| P3 | [#130396](https://github.com/NousResearch/hermes-agent/issues/130396)（已关闭） | 桌面端 markdown 表格渲染两次（纯渲染层） | 已关闭 |

已关闭的重要修复：#120069（Claude Opus 5.5 拒绝 `thinking.type=disabled` 导致 400）、#128870（桌面流式气泡未替换导致重复回复，WebSocket 帧级取证）。

## 6. 功能请求与路线图信号

- **#133057 `hermes cron cancel`**：终止在途 cron 运行。已有相关 PR #133109（cron 信用/预算失败分类合并为单 incident）在推进，cron 可靠性是当前活跃开发方向，cancel 能力有望跟进。
- **#40239 pt-BR 桌面端本地化**：翻译资源已存在，纯移植工作，采纳概率高。
- **#133086 gateway-only host 进程**：与 v0.21.x 架构演进方向一致（`gateway.standalone` 已是临时 shim），`needs-decision` 标签下值得维护者表态。
- **#133013 sessions CLI 过滤值可见性**：22 个过滤条件中 15 个在结果行不可见，属体验债修复，配合 #133105（命令注册表与 en.yaml 强制对齐）显示 CLI 一致性是进行中的工作流。
- **#132269 子代理不继承 /fast**：多模型编排精细化，社区真实需求（省钱场景）。
- **#133097 cron 任务 git 分支钉扎**：多 profile fleet 运维场景，属进阶需求。

## 7. 用户反馈摘要

- **插件可靠性是最大痛点**：多名用户报告插件“有时加载有时不加载”、工具静默消失，且错误只藏在 `logs/errors.log`——用户明确表示宁可显式失败也不要静默降级（#123926、#125746）。
- **升级/安装链路脆弱**：macOS git 安装的 update 中途死亡无原因记录（#132089）、Windows 工具安装 WinError 5（#131884）——自动更新仍是信任敏感区。
- **桌面端 Windows 体验欠佳**：托盘假死（#131991）、重复渲染（#130396、#128870）等系列问题集中在 Windows 桌面端。
- **多 profile / 多 HERMES_HOME 高级用法撞墙**：资深用户（@aleck31、@mindstar-agents 等）在 fleet 场景下发现架构边界与文档承诺不符（#133087、#133097）。
- **正面信号**：Claude Opus 5.5 适配（#120069）、frame 级取证的重复渲染问题（#128870）均被快速关闭，社区对报告质量的投入（详细 receipt、WebSocket trace）说明用户参与度高、抱有期待。

## 8. 待处理积压

- **#88994（P2，8/18 开启）**：SSH 远程 profile 回归（30299efa3 引入），5 评论至今未修复，影响远程工作流用户，建议优先安排回归修复。
- **#73683（P2，7/28 开置）**：terminal `workdir=` 永久改变 session cwd，与文档不符，长期未动。
- **#102725（P2，9/4 开启）**：同 base_url 多 provider 身份恢复错误指向，显示与运行时脱节，数据安全相关。
- **#119194（P2，9/22 开启）**：GGUF planner 不识别 1.58-bit 三值张量类型，本地模型用户被阻断。
- **#37253（6/2 开启）**：硬编码 system prompt 注入无法禁用，长期社区诉求，建议给出官方立场。
- **PR 积压提醒**：#126680（todo_list 参数校验，P2，9/28）、#117827（审批视图代码隐藏，**安全相关**，9/21）、#72637（压缩失败错误归因，7/27）均待合并超过一周，其中安全类 PR #117827 建议优先评审。

---

*数据来源：GitHub API（过去 24 小时窗口）。整体评估：项目处于健康的高活跃状态，社区贡献管道通畅；主要风险点为插件加载竞态（多报告无 fix PR）与 Windows 桌面端稳定性。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-10-05）

## 1. 今日速览

过去 24 小时 PicoClaw 共有 **13 条动态**（Issues 4 条：3 新增/活跃、1 关闭；PR 9 条：2 待合并、7 合并/关闭），无新版本发布。今日最突出的亮点是维护者 [@x1F916](https://github.com/x1F916) 集中合入了 **6 个修复类 PR**（#3402、#3403、#3400、#3401、#3399 及相关），覆盖 agent 路由、配置持久化、自更新和多通道热重载等核心模块，项目在稳定化方向明显提速。与此同时，部分 Issue/PR 被 stale 标记关闭（#3382、#3353、#3233），暴露出少量社区贡献被搁置的迹象。整体健康度良好，但 QQ 通道接口失配类问题尚无明确修复计划。

## 2. 版本发布

今日无新版本发布。鉴于今日合入的 6 个修复 PR 均为用户可感知的 bug 修复，可预期下一个 patch 版本（推测 v0.3.2）即将发布，建议关注 Release 页面。

## 3. 项目进展

今日合入/关闭的 PR 集中在三个方向，整体推进力度较大：

**Agent 与会话机制修复**
- [PR #3402](https://github.com/sipeed/picoclaw/pull/3402)：修复 context manager 中归属 agent 解析错误——路由到非默认 agent 的会话此前被错误地用默认 agent 组装，系 #3316 的重提并 rebase，已合入。
- [PR #3403](https://github.com/sipeed/picoclaw/pull/3403)：修复异步工具（`spawn`）结果投递到错误会话的问题，此前不同聊天/用户的异步结果会累积到默认 agent 的主会话中，属于多会话场景的重要正确性修复。

**配置与生命周期修复**
- [PR #3400](https://github.com/sipeed/picoclaw/pull/3400)：修复 `expandMultiKeyModels` 导致多 key 模型配置在每次保存时被破坏（丢失 `Enabled` 标志、覆盖主 key），v0/v1/v2 配置自动迁移也会触发该问题。
- [PR #3401](https://github.com/sipeed/picoclaw/pull/3401)：将 `Manager.Reload` 改为同步且 nil-safe，修复启用但未就绪的 channel（如未填 token 的 Telegram）导致网关 panic 退出的崩溃问题（manager.go:1956）。

**分发与自更新修复**
- [PR #3399](https://github.com/sipeed/picoclaw/pull/3399)：修复 32 位 ARM 上 `picoclaw update` 误装 arm64 包的问题（子串匹配缺陷），对树莓派等嵌入式用户意义重大——这与 PicoClaw 的 RISC-V/嵌入式定位高度相关。

**清理与关闭**
- [PR #3353](https://github.com/sipeed/picoclaw/pull/3353)（工具反馈动画上限）、[PR #3233](https://github.com/sipeed/picoclaw/pull/3233)（向后兼容修复）均被 stale 关闭，未合入。

## 4. 社区热点

- [Issue #3394](https://github.com/sipeed/picoclaw/issues/3394)（2 条评论）：QQ 上游机器人接口已更新，但 PicoClaw 的 QQ 聊天通道未跟进适配，用户 @qinglt 呼吁修复。这反映 QQ 生态上游变更频繁、适配滞后的持续痛点，目前尚无对应 PR。
- [Issue #3392](https://github.com/sipeed/picoclaw/issues/3392)（2 条评论）：CLAassistant 无法检测到贡献者已签署 CLA，直接阻塞了 [PR #3381](https://github.com/sipeed/picoclaw/pull/3381)（OpenAI Responses API 切换）的合并，属于**贡献流程基础设施问题**，建议维护者优先排查。
- [PR #3396](https://github.com/sipeed/picoclaw/pull/3396) + [Issue #3395](https://github.com/sipeed/picoclaw/issues/3395)：OneBot 通道每条群消息无条件自动点赞 emoji 的行为引发讨论，配套 fix PR 已提交但仍处待合并状态。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [Issue #3394](https://github.com/sipeed/picoclaw/issues/3394) QQ 通道接口未随上游更新，通道可能不可用 | 无 fix PR |
| 🔴 高 | [Issue #3392](https://github.com/sipeed/picoclaw/issues/3392) CLA 签署检测失败，阻塞 PR 合并 | 无 fix PR |
| 🟠 中 | [Issue #3382](https://github.com/sipeed/picoclaw/issues/3382) DingTalk Stream SDK 重连时 `send on closed channel` panic（client.go:161），v0.3.1 仍复现 | **已被 stale 关闭，问题未解决**，建议维护者重新评估 |
| 🟡 低 | OneBot 无条件自动 reaction（[#3395](https://github.com/sipeed/picoclaw/issues/3395)） | 已有 [PR #3396](https://github.com/sipeed/picoclaw/pull/3396)，待合并 |

今日合入的 #3401（Reload panic）与 #3403（异步结果串会话）本身也是对已知崩溃/数据串扰问题的修复，稳定性显著提升。

## 6. 功能请求与路线图信号

- **OneBot reaction 可配置化**（[#3395](https://github.com/sipeed/picoclaw/issues/3395)）：配套 [PR #3396](https://github.com/sipeed/picoclaw/pull/3396) 已实现 `reaction_enabled`（默认关闭），实现完整度高，**最有可能进入下一版本**，只需维护者 review 合并。
- **OpenAI Responses API 迁移**（[PR #3381](https://github.com/sipeed/picoclaw/pull/3381)）：功能已开发完成，但被 CLA 检测问题（#3392）阻塞，是下一版本的重要功能候选。
- **QQ 通道接口适配**：呼声明确但尚无代码进展，需维护者排期。

## 7. 用户反馈摘要

- **嵌入式/边缘设备用户**：32 位 ARM 更新装错包的问题（#3399 已修复）表明存在树莓派/ARMv6/7 用户群，与项目硬件基因契合。
- **多平台通道用户**：QQ（#3394）、DingTalk（#3382）、OneBot/NapCat（#3395）均有反馈，说明**通道层是用户痛点最集中的区域**，尤其上游协议变更的适配速度。
- **多 agent/多会话用户**：#3402/#3403 反映路由 agent、异步工具等进阶功能已被真实使用，暴露的均为正确性 bug。
- **不满点**：stale 机制关闭了仍未修复的 DingTalk panic（#3382），用户视角等同于问题被无视；无模板填写的 bug 报告（如 #3394）降低了处理效率。

## 8. 待处理积压

- [Issue #3382](https://github.com/sipeed/picoclaw/issues/3382)：DingTalk 重连 panic，带完整复现信息，却被 stale 关闭且未修复——**建议维护者重新打开或给出 workaround**。
- [PR #3381](https://github.com/sipeed/picoclaw/pull/3381)：OpenAI Responses API 切换，已挂起 18 天，被 CLA 问题阻塞。
- [PR #3396](https://github.com/sipeed/picoclaw/pull/3396)：OneBot reaction 开关，已提交 8 天，等待 review。
- [Issue #3392](https://github.com/sipeed/picoclaw/issues/3392)：CLAassistant 失效影响所有外部贡献，建议优先处理。
- [PR #3233](https://github.com/sipeed/picoclaw/pull/3233)、[PR #3353](https://github.com/sipeed/picoclaw/pull/3353)：被 stale 关闭的社区贡献，若功能仍有价值建议明确拒绝或重启。

---
*数据来源：GitHub sipeed/picoclaw，统计窗口为 2026-10-04 至 2026-10-05。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-10-05

## 1. 今日速览

NanoClaw 今日处于**高活跃冲刺状态**：过去 24 小时内 Issues 更新 8 条（全部新开/活跃，0 关闭）、PR 更新 22 条（13 待合并、9 已合并/关闭），并发布了里程碑式版本 **v2026.10.0-rc.1**——首个采用日历版本号的候选版本，也是 `/update-nanoclaw` 默认安装的第一个版本。核心团队（@glifocat）贡献密集，围绕发布流程、安全修复和渠道稳定性完成多项合并。社区侧新 Bug 报告质量较高，多集中在新版更新机制和消息投递链路。

## 2. 版本发布

### v2026.10.0-rc.1 ([Release](https://github.com/qwibitai/nanoclaw/releases) / [PR #4025](https://github.com/nanocoai/nanoclaw/pull/4025))

- **版本号方案切换**：`package.json` 从 2.4.0 → `2026.10.0-rc.1`，转向日历版本（`YYYY.M.PATCH`），`RELEASING.md` 有相应说明。
- **更新机制变更**：`/update-nanoclaw` 现默认跟随已发布 Release 而非 `main` 分支顶端（[PR #3986](https://github.com/nanocoai/nanoclaw/pull/3986)）。通过 `NANOCLAW_UPDATE_CHANNEL` 选择 `stable`（最新正式 tag）或 `beta`（最新 rc）渠道。
- **⚠️ 迁移注意**：文档提示 2026.10.0 含 `[BREAKING]` 变更，OneCLI Linux 安装用户会被引导至升级指南，需按新指南检查网关（`ONECLI_URL`，Linux 上监听 Docker bridge 而非 127.0.0.1，见 [PR #4028](https://github.com/nanocoai/nanoclaw/pull/4028)）。

## 3. 项目进展

今日 9 个 PR 合并/关闭，推进显著：

| PR | 内容 |
|---|---|
| [#4025](https://github.com/nanocoai/nanoclaw/pull/4025) | 发布 v2026.10.0-rc.1（版本体系切换） |
| [#3986](https://github.com/nanocoai/nanoclaw/pull/3986) | 更新机制默认跟随 release tag + 更新渠道 |
| [#4024](https://github.com/nanocoai/nanoclaw/pull/4024) | **安全修复**：Baileys 升至 7.0.0-rc14，修复关键消息伪造漏洞（GHSA-qvv5-jq5g-4cgg） |
| [#4028](https://github.com/nanocoai/nanoclaw/pull/4028) | OneCLI 升级指南适配 Linux 网关地址 |
| [#3998](https://github.com/nanocoai/nanoclaw/pull/3998) | Agent 浏览器信任网关 CA（TLS 检查网关下 HTTPS 可用） |
| [#3999](https://github.com/nanocoai/nanoclaw/pull/3999) | `CLAUDE_CODE_AUTO_COMPACT_WINDOW` 正确传入容器 |
| [#3983](https://github.com/nanocoai/nanoclaw/pull/3983) | 日志嵌套 `toJSON` 脱敏在 BigInt/循环引用下保持生效 |
| [#3980](https://github.com/nanocoai/nanoclaw/pull/3980) | Setup 首次对话将失败通知计为失败而非成功 |
| [#4023](https://github.com/nanocoai/nanoclaw/pull/4023) | 关闭（疑似不合规提交，见社区热点） |

**整体评价**：发布工程 + 安全 + 渠道可靠性三条线同步推进，为 2026.10.0 正式版铺路。

## 4. 社区热点

- **[#3569](https://github.com/nanocoai/nanoclaw/issues/3569)** Telegram 含奇数下划线 URL 消息永久投递失败（chat-adapter 落后上游 3 个版本未升级）——已有竞速修复 PR [#4029](https://github.com/nanocoai/nanoclaw/pull/4029)（渲染为纯文本规避）。诉求核心是**依赖 pin 滞后导致社区可感知的回归**，与 [#4007](https://github.com/nanocoai/nanoclaw/pull/4007)（让 Dependabot 可见 skill 内 pin 的 npm 版本）呼应，暴露供应链可见性短板。
- **[#4027](https://github.com/nanocoai/nanoclaw/issues/4027) + [PR #4026](https://github.com/nanocoai/nanoclaw/pull/4026)** 多 Agent 协调场景：协调者 Agent 无法重启/清空自己创建的子 Agent。Issue 开出当天即有 fix PR，社区对 Agent 编排能力需求明显。
- **[#4023](https://github.com/nanocoai/nanoclaw/pull/4023) "Checklist shopping buttons"**——标题与模板严重不符、覆盖全 area 标签，当天即被关闭，疑似低质量/灌水提交，显示维护者审核响应迅速。

## 5. Bug 与稳定性（按严重程度）

1. **高** [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) `priority/high`：硬编码 30 分钟 `ABSOLUTE_CEILING_MS` 强杀本地长模型推理轮次，无配置入口。⚠️ 暂无 fix PR，**值得维护者优先处理**。
2. **高** [#4024 已合并] Baileys 7.0.0-rc.9 存在关键消息伪造漏洞（已修复并随 rc.1 发布）。
3. **中** [#3569](https://github.com/nanocoai/nanoclaw/issues/3569) Telegram 奇数下划线消息丢失 → 修复中 [#4029](https://github.com/nanocoai/nanoclaw/pull/4029)。
4. **中** [#4033](https://github.com/nanocoai/nanoclaw/issues/4033) poll-loop 回复错配 `in_reply_to`，无 fix PR。
5. **中** [#4020](https://github.com/nanocoai/nanoclaw/issues/4020) `escapeXml` 未反转，回复显示 `&amp;` 实体，无 fix PR。
6. **中** [#4021](https://github.com/nanocoai/nanoclaw/issues/4021) macOS 更新时 `stopService` 未等进程退出，快照竞态致回滚（已干净回滚但影响体验），无 fix PR。
7. **中** [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) 定时任务失败静默丢弃，运维无感知 → 相关修复 [#4032](https://github.com/nanocoai/nanoclaw/pull/4032)（投递失败通知 Agent）部分覆盖。
8. **中** [#3301](https://github.com/nanocoai/nanoclaw/issues/3301) one-door 任务投递在聊天会话中吞日志/回复，无 fix PR。
9. **低** Telegram getUpdates 长轮询无超时（网络切换后卡 15 分钟）→ [#4031](https://github.com/nanocoai/nanoclaw/pull/4031)。

## 6. 功能请求与路线图信号

- **[#4027](https://github.com/nanocoai/nanoclaw/issues/4027)** Agent 可重启并清理自己创建的子 Agent → fix 已在 [#4026](https://github.com/nanocoai/nanoclaw/pull/4026) 待合并，**大概率进入 2026.10.0 正式版**。
- **[#4030](https://github.com/nanocoai/nanoclaw/pull/4030)** 长 `ask_question` 选项列表分行显示（Telegram 8 按钮/Discord 5 按钮限制）——多渠道 UI 打磨方向。
- **CI/维护策略信号**：[#4009](https://github.com/nanocoai/nanoclaw/pull/4009)（agent-image pin 由人工合并）、[#4007](https://github.com/nanocoai/nanoclaw/pull/4007)（Dependabot 覆盖 skill pin 依赖）表明团队在收紧依赖供应链治理，回应了 #3569 一类的 pin 滞后问题。

## 7. 用户反馈摘要

- **本地模型用户**（#3643）：长推理被 30 分钟硬顶杀掉，痛点是“不可配置的天花板”——本地大模型/慢推理用户与托管用户需求分化明显。
- **多 Agent 用户**（#4027）：协调者-子 Agent 架构已成实际使用模式，但权限模型（`cli_scope: group`）限制了编排能力。
- **升级可靠性**（#4021）：macOS 用户遭遇更新竞态但认可“回滚干净”，说明回滚机制有效，但更新流程仍需等待进程退出的语义修复。
- **运维可观测性**（#3223、#3301）：定时任务静默失败是共同痛点——用户要的不是新功能，而是“失败时至少告诉我”。

## 8. 待处理积压

| 条目 | 状态 | 提醒 |
|---|---|---|
| [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) | 高优先级 Bug，8-28 开至今 0 评论 | **最需关注**，阻塞本地长推理用户 |
| [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) | 8-10 开，0 评论 | #4032 只部分覆盖，需明确关联 |
| [#3301](https://github.com/nanocoai/nanoclaw/issues/3301) | 8-17 开，0 评论 | 2.1.48 引入的行为回归，老任务数据受影响 |
| [#3642](https://github.com/nanocoai/nanoclaw/pull/3642) | 8-28 开的社区 PR | update-skills 状态报告，待评审 |
| [#3450](https://github.com/nanocoai/nanoclaw/pull/3450) | 8-22 开 | Telegram 广播频道身份门控修复，与 #4029 同区域，建议一并评审 |

**健康度小结**：合并吞吐高、安全响应快、发布工程成熟；短板在于高优先级 Issue（尤其 #3643）响应滞后与依赖 pin 治理正在补课。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报（2026-10-05）

## 1. 今日速览

NullClaw 今日保持较高活跃度：24 小时内 5 条 Issue 更新（3 新开 / 2 关闭）、13 条 PR 更新（6 待合并 / 7 已合并或关闭），无新版本发布。核心贡献者 @vernonstinebaker 持续高产，一口气修复了 Docker 镜像、WebSocket 连接、git hooks 等多个问题，并推动了 WebSocket 网络栈的可靠性增强（#953 / #1025）。社区侧出现新面孔 @Arthur031221（Docker 修复）和 @googio（Serply 搜索提供商），显示贡献者来源正在多元化。整体看，项目处于“稳定打磨期”——修复密度高、新功能以增量为主，健康度良好。

## 2. 版本发布

今日无新版本发布。近期多项修复已落入 main（#953、#1002、#1006、#966 等），建议关注下一次 tag 是否会包含 Docker 非root镜像（#1023）这一部署阻断性修复。

## 3. 项目进展

今日合并/关闭的 7 条 PR 中，重点包括：

- **[PR #953](https://github.com/nullclaw/nullclaw/pull/953)**（已关闭）：修复 Discord 网关连接卡死——在 join 心跳 worker 前关闭 socket、限制 pre-HELLO 健康检查、RESUME 失败退避，成功的 RESUMED 会重置重连计数。这是长期挂起的通道稳定性核心修复，且其审查意见直接催生了今日的 #1024/#1025 后续增强。
- **[PR #1010](https://github.com/nullclaw/nullclaw/pull/1010)**（已关闭）：修复 `allow_bots = true` 时 Discord 机器人回复自反馈死循环（回复触发下一轮回复）。属于影响实际部署的行为级 bug。
- **[PR #1002](https://github.com/nullclaw/nullclaw/pull/1002)**（已关闭）：为 Discord/Telegram/MAX 的 HTTPS typing worker 切换到 2 MiB 重栈，修复 Zig TLS 初始化溢出 512 KiB 栈导致网关崩溃的问题。保留了原作者 @Tetraslam 的署名。
- **[PR #1006](https://github.com/nullclaw/nullclaw/pull/1006)**（已关闭）：修复流式 CLI stdout 位置写入覆盖首字节的问题（macOS 上 `pong` 首行被损坏）。
- **[PR #966](https://github.com/nullclaw/nullclaw/pull/966)**（已关闭）：Android/Termux 上 Zig 0.16 stdlib DNS 失败时安全回退到 curl，完整保留 `std.http` 行为。
- **[PR #954](https://github.com/nullclaw/nullclaw/pull/954)**（已关闭）：出站投递分配失败时的所有权加固。
- **[PR #1007](https://github.com/nullclaw/nullclaw/pull/1007)**（已关闭）：中英文文档补充诊断日志开关说明，强调生产环境应关闭内容日志。

**小结**：今日主要推进了通道稳定性（Discord 重连、栈溢出、自反馈循环）和平台兼容性（Android/macOS），移动端与容器部署路径显著变稳。

## 4. 社区热点

- **[Issue #941](https://github.com/nullclaw/nullclaw/issues/941)**（7 条评论，今日关闭）：agent 型定时任务不启动子进程、Telegram 交付丢失。历时 4 个多月（5-31 创建，今日关闭），与 #954 的投递生命周期修复相关，是今日讨论最热条目。
- **[Issue #1017](https://github.com/nullclaw/nullclaw/issues/1017)** + **[PR #1023](https://github.com/nullclaw/nullclaw/pull/1023)**：官方 Docker 镜像 root 属主导致 `AccessDenied` 无法启动。24 小时内从报告到社区成员（@Arthur031221 基于 @O96a 在 issue 中的评论）提交修复，响应链路非常健康。
- **[PR #1025](https://github.com/nullclaw/nullclaw/pull/1025)** / **[Issue #1024](https://github.com/nullclaw/nullclaw/issues/1024)**：#953 评审中提出的非阻塞后续（DNS/TCP 建立无 deadline）当天即落地，体现维护者对审查意见的快速闭环。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高（部署阻断） | [#1017](https://github.com/nullclaw/nullclaw/issues/1017) 官方 Docker 镜像 `/nullclaw-data` root 属主，uid 65534 无法写入，网关启动即 `AccessDenied` | 已有 fix PR [#1023](https://github.com/nullclaw/nullclaw/pull/1023)，待合并 |
| 🔴 高（静默数据损坏） | [#1018](https://github.com/nullclaw/nullclaw/issues/1018) Termux/aarch64-android 上 agent 输出随机乱序/截断且 exit 0，无任何报错 | 相关传输层测试 PR [#1019](https://github.com/nullclaw/nullclaw/pull/1019) 在推进（覆盖 Android `fetchWithCurl`），间接关联 #966 |
| 🟡 中 | [#1020](https://github.com/nullclaw/nullclaw/issues/1020) worktree 推送时 `GIT_DIR` 泄漏进 git-spawning 测试，pre-push 必挂（影响开发者而非用户） | 已有 fix PR [#1021](https://github.com/nullclaw/nullclaw/pull/1021)，待合并 |
| 🟡 中 | [#1004](https://github.com/nullclaw/nullclaw/pull/1004) 非 2xx 响应体被释放，模型不支持 tools 等真实原因不可见 | fix PR 待评审 |

## 6. 功能请求与路线图信号

- **WebSocket DNS/TCP 建立超时**（[#1024](https://github.com/nullclaw/nullclaw/issues/1024) → [PR #1025](https://github.com/nullclaw/nullclaw/pull/1025)）：源自 #953 官方审查意见，issue+PR 同日提交，纳入下一版本概率极高。
- **Serply 搜索提供商**（[PR #1022](https://github.com/nullclaw/nullclaw/pull/1022)）：新贡献者按 `brave.zig` 模板实现，代码路径清晰，属于低风险增量，大概率合入。
- **传输层字节级完整性测试**（[PR #1019](https://github.com/nullclaw/nullclaw/pull/1019)）：针对 #1018 的回归防线，与稳定性路线一致。
- **provider 错误体脱敏日志**（[PR #1004](https://github.com/nullclaw/nullclaw/pull/1004)）：可诊断性改进方向明确。

## 7. 用户反馈摘要

- **移动端用户（Termux/Android）是明确痛点群体**：#1018 反映输出静默损坏、#966 反映 Zig stdlib DNS 失败，两条均指向在移动环境用 NullClaw 作为个人助手的场景，用户对“exit 0 但内容坏了”这类静默失败容忍度最低。
- **Docker 自托管用户**被 #1017 直接阻断，但评论区 @O96a 迅速给出 `RUN chown` workaround 并被 PR 采纳，社区互助氛围好。
- **Discord 集成用户**此前受机器人自反馈循环（#1010）和网关卡死（#953）困扰，两者均已修复，通道可靠性是用户最关心的维度之一。
- **诊断性诉求**（#1004、#1007）：用户希望非 2xx 错误、日志开关等有更好的可观测性，而非靠抓包排查。

## 8. 待处理积压

- **6 个待合并 PR** 中，[#1023](https://github.com/nullclaw/nullclaw/pull/1023)（Docker 修复）和 [#1021](https://github.com/nullclaw/nullclaw/pull/1021)（worktree hooks 修复）直接对应未关闭 bug，建议优先评审合并。
- [#1004](https://github.com/nullclaw/nullclaw/pull/1004) 自 9-24 开启已逾 10 天未合，涉及可观测性，建议推进。
- **Issue #1018**（Android 输出损坏）尚无直接 fix，#966 已缓解 DNS 问题但静默损坏根因仍待确认，需维护者关注。
- 老牌长周期条目 #953/#954/#966 已于近期收尾，显示积压清理节奏良好，当前积压主要集中在 9 月下旬提交的评审队列。

---
*数据来源：NullClaw GitHub（截至 2026-10-05）。链接均为对应 Issue/PR 编号，可在 github.com/nullclaw/nullclaw 下检索。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-10-05

**仓库**：[nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

- 过去 24 小时项目整体处于**低活跃度维护状态**：Issues 更新 0 条，PR 更新 5 条，无新版本发布。
- 全部 5 条 PR 活动均来自 `dependabot[bot]` 的自动化依赖更新，无人工提交的功能性代码变更。
- 唯一的关闭事件是 tokio-ecosystem 依赖更新 PR #8078 被关闭（未合并），推测被更新、更全的新版 PR #8123 取代。
- 无社区讨论、无 Bug 报告、无功能请求，项目处于依赖例行维护期。

## 2. 版本发布

今日无新版本发布。（省略详情）

## 3. 项目进展

- **[PR #8078 — CLOSED](https://github.com/nearai/ironclaw/pull/8078)**：tokio-ecosystem 依赖更新（tower-http、tokio-tungstenite）被关闭，其内容已由范围更大的 #8123 覆盖，属于依赖升级路径的整合而非功能回退。
- 待合并的 4 个依赖 PR 均于 10-04 有更新活动，说明 CI 在持续验证中：
  - [PR #8123](https://github.com/nearai/ironclaw/pull/8123)：tokio-ecosystem 3 项更新（tokio-test 0.4.5→0.4.6、tower-http、tokio-tungstenite）
  - [PR #8114](https://github.com/nearai/ironclaw/pull/8114)（XL / 低风险）：everything-else 组 **31 项**批量更新（thiserror、uuid 1.24→1.26、base64 等）
  - [PR #8103](https://github.com/nearai/ironclaw/pull/8103)：GitHub Actions 组 8 项更新（claude-code-action 1.0.183→1.0.228、setup-node 4.0.2→**7.0.0** 大版本）
  - [PR #7834](https://github.com/nearai/ironclaw/pull/7834)（L / 中风险）：wasm 组 4 项更新（wasmtime、wasmtime-wasi、wit-component、wit-parser）

**评估**：今日项目向前推进有限，主要为依赖健康度维护。值得注意的是 #7834 已挂起 **40+ 天**（2026-08-23 创建），wasmtime 升级长期未落地值得警惕。

## 4. 社区热点

今日无任何 Issue 讨论或人工评论。5 条 PR 的 👍 与评论均为 0，无社区互动信号。

## 5. Bug 与稳定性

过去 24 小时**无新报告的 Bug、崩溃或回归问题**。间接的稳定性信号：

- [PR #8114](https://github.com/nearai/ironclaw/pull/8114) 的 31 项依赖批量升级被标记为低风险，但体量大（XL），合并时需关注传递性依赖冲突。
- [PR #8103](https://github.com/nearai/ironclaw/pull/8103) 中 `actions/setup-node` 跨 3 个大版本（4.x→7.0.0），可能影响 CI 行为，建议维护者单独验证。

## 6. 功能请求与路线图信号

- 今日无新的功能请求。
- 从依赖维度可解读的技术方向信号：项目持续跟进 **wasmtime / WIT 工具链**（PR #7834）与 **tokio 异步生态**，表明 WASM 运行时与高性能异步通信（WebSocket via tokio-tungstenite）仍是核心投入方向；GitHub Actions 中引入 claude-code-action 的持续升级，暗示团队在探索 AI 辅助的开发流程。

## 7. 用户反馈摘要

今日 Issues 评论为空，**无法提炼用户反馈**。连续零 Issue 活动可能意味着：(a) 用户群体稳定、痛点较少；或 (b) 项目处于早期/低曝光阶段，社区反馈渠道尚未活跃。建议结合 Star/Clone/Fork 趋势交叉判断。

## 8. 待处理积压

| PR | 挂起时长 | 风险等级 | 建议 |
|---|---|---|---|
| [#7834 wasm 组升级](https://github.com/nearai/ironclaw/pull/7834) | **43 天**（08-23 创建） | 中 | ⚠️ 最需关注。wasmtime 系列落后多个版本可能积累安全补丁缺口，建议优先评审或拆分为小 PR |
| [#8103 Actions 升级](https://github.com/nearai/ironclaw/pull/8103) | 15 天 | — | 含 setup-node 跨大版本升级，建议验证 CI 兼容性后合并 |
| [#8114 everything-else 31 项](https://github.com/nearai/ironclaw/pull/8114) | 8 天 | 低 | 体量大但低风险，可择机批量合并 |

无长期未响应的 Issue 积压。

---

**健康度小结**：项目处于自动化维护驱动的平稳期，依赖管理纪律良好（分组、分级、机器人自动跟进），但人工开发活动与社区互动在观察窗口内为零， wasm 升级链路存在积压风险。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-10-05）

## 1. 今日速览

LobsterAI 今日整体活跃度中等偏活跃：过去 24 小时内共有 5 条 Issue 更新（3 开/活跃、2 关闭）和 6 条 PR 更新（3 待合并、3 已合并/关闭），无新版本发布。开发重心集中在**渲染层（renderer）、协作（cowork）、Artifacts 与 MCP/OpenClaw 集成**四个方向，贡献者 @alison-xx 一天内连发 3 个新 PR，推进节奏明显。值得注意的是，多个 Issue/PR 被标记为 stale（陈旧未响应），社区反馈侧存在一定积压，需维护者关注。

## 2. 版本发布

无新版本发布。建议关注近期已合并的 MCP 相关改动（见下节），可能酝酿下一次版本迭代。

## 3. 项目进展

今日 3 个 PR 被合并/关闭，集中在 **MCP 工具生态**：

- **[#2789 feat: mcp tool picker](https://github.com/netease-youdao/LobsterAI/pull/2789)**（@fisherdaddy）— MCP 工具选择器功能落地，用户可按需加载会话所需的 MCP 工具。这是对 Issue #856 类诉求（精细控制）的正面响应。
- **[#2710 feat(mcp): pass per-server toolFilter and parallel tool calls to OpenClaw](https://github.com/netease-youdao/LobsterAI/pull/2710)**（@alison-xx）— 配置同步扩展支持 `toolFilter`（含 `*` 通配符的 include/exclude）与 `supportsParallelToolCalls`，显著增强 MCP 工具的精细化管理能力。
- **[#1008 feat(preset-agents): add 6 new preset agent templates](https://github.com/netease-youdao/LobsterAI/pull/1008)**（@BucleLiu）— 新增 6 个预设 Agent 模板，扩展开箱即用场景覆盖。

**待合并（3 个新 PR，均由 @alison-xx 今日提交）：**

- **[#2792](https://github.com/netease-youdao/LobsterAI/pull/2792)** — 修复 cowork 中长问题提示与上下文 tooltip 的可读性/布局问题。
- **[#2791](https://github.com/netease-youdao/LobsterAI/pull/2791)** — 修复 artifacts 推断卡片误识别缩写路径（如 `…/demo.mp4`）的问题。
- **[#2790](https://github.com/netease-youdao/LobsterAI/pull/2790)** — 模型选择器分组折叠、重名模型显示原始路由、搜索优化，同时修复会话历史加载卡住的问题。

整体来看，今日项目在 **MCP 工具治理**方向迈出实质一步，UI/UX 打磨持续推进。

## 4. 社区热点

今日无高评论量新讨论，活跃度主要来自 stale 标记触发的自动更新：

- **[#1003 关于 Notion MCP 的问题](https://github.com/netease-youdao/LobsterAI/issues/1003)**（已关闭）— 用户深度分析 MCP Bridge 在 `child_process.spawn` 时未正确传递环境变量，导致 Notion MCP Server 收到无 Token 请求返回 401。这属于**架构级反馈**，指向 Bridge 层而非用户配置，值得维护者核实是否已随 #2710/#2789 的 MCP 重构修复。
- **[#856 模型切换及使用文档更新](https://github.com/netease-youdao/LobsterAI/issues/856)**（仍开放）— 双重诉求：任务级模型隔离、文档同步（特别提到 openclawd 功能无文档）。其中“模型分组选择”诉求与今日待合并的 #2790 高度呼应。

## 5. Bug 与稳定性

按严重程度排列（均为存量 Issue，今日被 stale 标记但仍未解决）：

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#837 定时任务触发异常后一直失败，重启才能恢复](https://github.com/netease-youdao/LobsterAI/issues/837) | 锁屏状态下定时任务触发异常后持续失败，需重启恢复 | 无对应 fix PR |
| 🔴 高 | [#850 定时任务关闭后仍触发执行](https://github.com/netease-youdao/LobsterAI/issues/850) | 定时任务开关失效，存在误执行风险 | 无对应 fix PR |
| 🟠 中 | [#1003 Notion MCP 环境变量传递失败](https://github.com/netease-youdao/LobsterAI/issues/1003) | MCP Bridge 未传 env，返回 401 | 已关闭，或与 MCP 重构相关，未确认 |
| 🟠 中 | [#1007 Agent Engine 无限重启](https://github.com/netease-youdao/LobsterAI/issues/1007)（已关闭） | Engine 循环重启，稳定性问题 | 已关闭，未确认修复方案 |

**警示信号**：两个定时任务相关 Bug（#837、#850）长期无响应，且该功能是个人 AI 助手的核心场景，建议优先排查是否为同一根因（如任务调度状态持久化问题）。

## 6. 功能请求与路线图信号

- **任务级模型选择**（#856）→ 待合并 PR #2790 已实现模型分组与路由选择，**很可能纳入下个版本**，但“不同任务不同模型”的完全隔离尚不明确。
- **MCP 工具按需加载** → 已通过 #2710、#2789 落地，方向明确，预计下版本重点宣传。
- **预设 Agent 扩展** → #1008 新增 6 个模板，显示团队在持续降低上手门槛。
- **文档同步**（#856 提到 openclawd 无文档）→ 尚无对应动作，是明显缺口。

## 7. 用户反馈摘要

- **核心痛点集中在定时任务可靠性**：锁屏触发失败后级联失效、关闭后仍执行——用户将其作为自动化助手的基础能力，失败体验影响信任。
- **MCP 集成的“最后一公里”问题**：Notion 等第三方 MCP Server 接入时环境变量丢失，用户排查成本高，且难以区分是配置问题还是产品 Bug。
- **文档滞后于功能迭代**：openclawd 等新功能用户“不知道怎么用”。
- **正面信号**：用户在积极提出建设性改进（模型按任务隔离、预设场景扩展），说明产品有真实留存用户在深度使用。

## 8. 待处理积压

以下 Issue/PR 均已 stale，且无维护者实质响应，建议关注：

- **[#837](https://github.com/netease-youdao/LobsterAI/issues/837)** 与 **[#850](https://github.com/netease-youdao/LobsterAI/issues/850)** — 定时任务两个 Bug，自 2026-03-25 开启至今约 6 个月，附有完整日志和复现步骤，属高价值报告，面临自动关闭风险。
- **[#856](https://github.com/netease-youdao/LobsterAI/issues/856)** — 文档更新诉求长期未回应。
- **今日 3 个待合并 PR（#2790-#2792）** — 均为 @alison-xx 昨日刚提交，属正常评审周期，建议及时 review 以保持贡献节奏。

**健康度小结**：开发侧活跃（MCP 生态快速演进），但社区维护侧存在约 6 个月的老 Issue 积压且依赖 stale 机器人自动清理，回应率是当前主要的健康度风险。

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

# CoPaw 项目动态日报 — 2026-10-05

## 1. 今日速览

今日 CoPaw（QwenPaw）仓库保持高活跃度：24 小时内 Issues 更新 13 条（新开/活跃 12、关闭 1），PR 更新 12 条（待合并 10、合并/关闭 2），无新版本发布。社区反馈焦点集中在 **2.2.2b4 测试版**的稳定性上——包括会话丢失、工具审批按钮失效、插件安装失败等一批新 Bug。同时贡献者响应迅速，多数新 Bug 当天或次日即有对应 fix PR 提交，显示维护节奏健康。整体看，项目处于 beta 版本密集打磨期，插件生态与 Provider 兼容性是当前两条主线。

## 2. 版本发布

今日无新版本发布。当前社区反馈主要基于 v2.2.0 ~ v2.2.2b4。

## 3. 项目进展

今日 PR 活动以 **close/清理** 和 **新 fix 快速跟进**为主：

- **[#8110](https://github.com/agentscope-ai/CoPaw/pull/8110)（已关闭）**：移动端 Settings 导航下拉框宽度修复，属小范围清理。
- **[#7299](https://github.com/agentscope-ai/CoPaw/pull/7299)（已关闭，Under Review 标签）**：拒绝冲突 chat payload 的修复被关闭，可能与冲突处理方案重构有关，值得维护者说明去向。
- **[#8111](https://github.com/agentscope-ai/CoPaw/pull/8111)**：直接响应 Issue #7731，为文件面板增加隐藏文件开关——**Issue 当天提需求、当天出 PR**，响应速度值得肯定。
- **[#8107](https://github.com/agentscope-ai/CoPaw/pull/8107)**：针对 #8106 插件安装环境问题（PIP_TARGET 泄漏 + PYTHONPATH 标准库遮蔽）的修复，首次贡献者提交，次日即更新活跃。
- **[#8102](https://github.com/agentscope-ai/CoPaw/pull/8102)**：Console 启动 watchdog，为启动失败提供错误展示与自动重载，直接解决 #8094。

仍在审查中的大项包括 [#7542](https://github.com/agentscope-ai/CoPaw/pull/7542)（消息回滚分页，XXXL 体量）与 [#7774](https://github.com/agentscope-ai/CoPaw/pull/7774)（provisioner 白名单派生）。整体推进：UI 稳定性与容器部署健壮性明显补强。

## 4. 社区热点

- **[#7722](https://github.com/agentscope-ai/CoPaw/issues/7722)（6 评论）**：内存耗尽三路径复合问题（无界流缓冲、keep-alive 实例堆叠、doom-loop 绕过限流），附可控复现与最小修复建议，是当前讨论最多的深度 Bug 报告，属架构级隐患。
- **[#7840](https://github.com/agentscope-ai/CoPaw/issues/7840)（5 评论）**：插件共享宿主事件循环，任一同步调用冻结整个实例（实测冻结约 40 秒）。诉求：插件需隔离契约与监控。
- **[#7026](https://github.com/agentscope-ai/CoPaw/issues/7026) / [#7599](https://github.com/agentscope-ai/CoPaw/issues/7599)（各 3 评论）**：Provider 兼容性问题——deepseek-v4-pro 的 `chat_template_kwargs` 注入导致 SDK TypeError；OpenCode 网关要求新 header `x-opencode-session`。后者已有修复 PR [#7869](https://github.com/agentscope-ai/CoPaw/pull/7869) 在审查中，且 [#8104](https://github.com/agentscope-ai/CoPaw/issues/8104) 今日再次追问，显示用户催促落地。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#8109](https://github.com/agentscope-ai/CoPaw/issues/8109)（已关闭） | 流错误导致 agent 间会话 100% 全部丢失（2.2.2b4） | 已关闭，疑似已修复/处理 |
| 🔴 高 | [#8105](https://github.com/agentscope-ai/CoPaw/issues/8105) | 工具审批「同意/拒绝」均执行拒绝，审批形同虚设 | 暂无对应 PR |
| 🔴 高 | [#7722](https://github.com/agentscope-ai/CoPaw/issues/7722) | 三路径复合内存耗尽 → OOM/挂起 | 报告含修复建议，无正式 PR |
| 🟠 中 | [#8106](https://github.com/agentscope-ai/CoPaw/issues/8106) | 容器内插件安装失败（pip 环境污染） | ✅ PR [#8107](https://github.com/agentscope-ai/CoPaw/pull/8107) |
| 🟠 中 | [#8094](https://github.com/agentscope-ai/CoPaw/issues/8094) | WebView2 陈旧缓存永久阻塞 Console 启动 | ✅ PR [#8102](https://github.com/agentscope-ai/CoPaw/pull/8102) |
| 🟠 中 | [#8092](https://github.com/agentscope-ai/CoPaw/issues/8092) | 网关内容审查误判被归类为 bad_request，无重试/回退，整轮对话被杀 | 暂无 PR |
| 🟡 低 | [#7840](https://github.com/agentscope-ai/CoPaw/issues/7840) | 插件同步调用冻结全实例（架构级） | 暂无 PR |

## 6. 功能请求与路线图信号

- **小时级 Dream 调度预设 + 错过补跑**（[#8112](https://github.com/agentscope-ai/CoPaw/issues/8112)）：记忆整理频率需求，改动小、易纳入下版本。
- **隐藏文件开关**（[#7731](https://github.com/agentscope-ai/CoPaw/issues/7731)）：已有 PR [#8111](https://github.com/agentscope-ai/CoPaw/pull/8111)，**基本确定进入下版本**。
- **模型静默回退通知**（[#8103](https://github.com/agentscope-ai/CoPaw/issues/8103)）：可观测性增强，与 #8092 的回退链问题同源，可能打包处理。
- 相关已在途功能 PR：消息回滚分页 [#7542](https://github.com/agentscope-ai/CoPaw/pull/7542)、finish_reason 截断元数据透出 [#8096](https://github.com/agentscope-ai/CoPaw/pull/8096)、懒加载路由重试 [#8108](https://github.com/agentscope-ai/CoPaw/pull/8108)。

## 7. 用户反馈摘要

- **痛点集中区**：① 多模型 fallback 链路的透明度——用户明确表示“不知道模型被换了”（#8103、#8092）；② 容器/生产部署的边角环境问题频发（#8106、#8094），自托管用户受影响最重；③ 审批等人机交互功能在 beta 版本上出现回归（#8105），直接削弱对安全机制的信任。
- **满意之处**：报告质量高，多位用户附复现步骤、日志和修复建议（#7722、#7840），说明核心用户群工程能力较强、参与意愿高；首个需求（#7731→#8111）当天闭环，获得正面体验。
- **使用场景信号**：Telegram/DingTalk 等 channel 接入、OpenCode/Moonshot 等第三方 Provider、DevOps 对话助手的实际生产使用均已被观察到。

## 8. 待处理积压（提醒维护者关注）

- **[#7722](https://github.com/agentscope-ai/CoPaw/issues/7722)**：自 09-12 开启，内存耗尽三路径复合问题，附完整复现与修复方案，6 评论持续活跃但无官方 PR——**优先处理**。
- **[#7840](https://github.com/agentscope-ai/CoPaw/issues/7840)**：插件事件循环隔离，09-17 起 5 评论，涉及插件生态架构契约，长期搁置将制约生态发展。
- **[#7599](https://github.com/agentscope-ai/CoPaw/issues/7599) / [#8104](https://github.com/agentscope-ai/CoPaw/issues/8104)**：OpenCode session header 问题用户已追问近一个月，PR [#7869](https://github.com/agentscope-ai/CoPaw/pull/7869) 审查中，建议加速合并。
- **PR [#7774](https://github.com/agentscope-ai/CoPaw/pull/7774)、[#7542](https://github.com/agentscope-ai/CoPaw/pull/7542)、[#7738](https://github.com/agentscope-ai/CoPaw/pull/7738)、[#7962](https://github.com/agentscope-ai/CoPaw/pull/7962)**：均挂 Under Review 超 10 天，其中 #7738（过滤未知 kwargs）直接关联 #7026 的 TypeError，建议优先审查。

---
*数据来源：GitHub API，统计窗口 2026-10-04 ~ 2026-10-05（UTC）。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*