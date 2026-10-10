# OpenClaw 生态日报 2026-10-10

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-10 04:55 UTC

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

# OpenClaw 项目动态日报 — 2026-10-10

---

## 1. 今日速览

OpenClaw 今日保持**高度活跃**：过去 24 小时 Issues 更新 500 条（新开/活跃 364，关闭 136），PR 更新 500 条（待合并 329，已合并/关闭 171），关闭率约 27%（Issues）/34%（PR），社区消化能力较强。**无新版本发布**，但一个大型回移 PR（#168198）正为 2026.10.1 稳定版打包 22 个 P0/P1 修复，暗示近期将有补丁版本。今日核心贡献者 @steipete 单日提交约 9 个 PR，覆盖更新器、缓存、UI 等多个子系统。整体健康度：**活跃度高，但稳定性类 P0 积压值得关注**（更新器卡死、WAL 膨胀等长期未决）。

---

## 2. 版本发布

今日**无新 Release**。注意 [PR #168198](https://github.com/openclaw/openclaw/pull/168198) 正在将 22 个已修复的 P0/P1 缺陷（含 usage-refresh 死锁）回移到 2026.10.1，预计近期发布稳定补丁版。

---

## 3. 项目进展

今日新开高质量 PR 密集，主要集中在**更新器可靠性、本地模型缓存、内存子系统**三个方向：

| PR | 内容 | 意义 |
|---|---|---|
| [#168198](https://github.com/openclaw/openclaw/pull/168198) fix(release): 回移 22 个 P0/P1 修复至 2026.10.1 | 覆盖 agent tools、更新、Doctor、子代理投递、压缩、provider、Telegram、本地模型 | 稳定版质量的大规模修复批次 |
| [#168199](https://github.com/openclaw/openclaw/pull/168199) fix(agents): 删除 agent 前先排空运行中的 turn | 消除"半删除"状态，安全边界相关，XL 级改动 |
| [#168037](https://github.com/openclaw/openclaw/pull/168037) fix(cron): 手动自动化运行在起始 turn 结束后失去工具权限 | P1，已 ready for review |
| [#103201](https://github.com/openclaw/openclaw/pull/103201) fix(memory): 会话同步不再删除并重嵌入所有已索引 chunk | P1，重大性能修复，本地嵌入器不再重复烧 CPU/GPU |
| [#168177](https://github.com/openclaw/openclaw/pull/168177) fix(update): cleanup 支持回收 original-state 捕获（单次约 1GB，24 次更新累积 23GB） | 直击磁盘膨胀痛点 |
| [#168157](https://github.com/openclaw/openclaw/pull/168157) / [#168169](https://github.com/openclaw/openclaw/pull/168169) 本地模型 prompt-cache 在字节上限/跨午夜时失效修复 | 本地模型成本与延迟优化系列 |
| [#162798](https://github.com/openclaw/openclaw/pull/162798) fix(onboarding): OpenRouter 有效 API key 被误拒 | P0 修复，已 ready for review |
| [#167996](https://github.com/openclaw/openclaw/pull/167996) feat(skills): "Learned" 通知行 + 一键撤销 | UX 改进，功能向 |

**整体判断**：项目在更新器健壮性和本地模型体验上明显提速，@steipete 的连续产出显示核心维护者正集中清理升级路径类债务。

---

## 4. 社区热点

1. **[#143524](https://github.com/openclaw/openclaw/issues/143524)（115 评论，P0）**：Windows 上 agent SQLite WAL 数天内膨胀至 1.4–2.8GB，尽管 `wal_autocheckpoint=1000`，最终阻塞 Gateway 启动。评论量远超其他 issue，反映**长期运行单网关部署的存储可靠性焦虑**，标记 no-new-fix-pr，仍无修复。
2. **[#149538](https://github.com/openclaw/openclaw/issues/149538)（25 评论，P0）**：main 分支在 632-agent 舰队上 Gateway ready 后事件循环被饿死、`/health` 全部超时、RSS 持续增长。暴露**大规模部署的可扩展性诉求**。
3. **[#97616](https://github.com/openclaw/openclaw/issues/97616)（18 评论）**：hook/tool 子进程未回收导致 zombie 累积，回归类问题，影响长时间运行宿主。
4. **[#161976](https://github.com/openclaw/openclaw/issues/161976)（18 评论）**：WhatsApp DM 回复在重启后的 durable registry 交接处反复失败，消息丢失类。
5. **[#69208](https://github.com/openclaw/openclaw/issues/69208)（16 评论）**：跨渠道重复 transcript/回放/上下文组装的伞形 issue，说明消息一致性是系统性弱点。

---

## 5. Bug 与稳定性（按严重度）

**P0**
- [#143524](https://github.com/openclaw/openclaw/issues/143524) WAL 无限膨胀阻塞启动 — ❌ 无 fix PR
- [#167771](https://github.com/openclaw/openclaw/issues/167771) 更新被 update-recovery-pending 永久卡死、无修复路径（昨日新报）— ❌
- [#158231](https://github.com/openclaw/openclaw/issues/158231) managed-service-preflight 更新失败 — 相关 #168197/#168203 推进中
- [#115642](https://github.com/openclaw/openclaw/issues/115642) 计费冷却 5 小时 TTL 覆盖订阅恢复 — ❌
- [#158390](https://github.com/openclaw/openclaw/issues/158390) plugin-captures 临时目录无 GC、磁盘无限增长 — ❌
- [#48920](https://github.com/openclaw/openclaw/issues/48920) 文档领先于发布版本（3 月至今未决）

**P1**
- [#159499](https://github.com/openclaw/openclaw/issues/159499) Windows 启动 ready 需 ~220s，`sidecars.control-ui-assets` 阻塞事件循环
- [#154891](https://github.com/openclaw/openclaw/issues/154891) 失败且已回滚的热重载仍使无关插件永久不可用
- [#119411](https://github.com/openclaw/openclaw/issues/119411) memory 文件 watcher 不再重建索引、`Dirty: no` 与实际不一致
- [#118185](https://github.com/openclaw/openclaw/issues/118185) 同一 turn 被两个 writer 以不同规则写入 transcript 两次
- [#157691](https://github.com/openclaw/openclaw/issues/157691) 热重载后 Codex 策略交接间歇失败

---

## 6. 功能请求与路线图信号

- **可观测性/成本**：[#13219](https://github.com/openclaw/openclaw/issues/13219) 按模型用量日志（已有 linked PR，很可能落地）；[#125311](https://github.com/openclaw/openclaw/issues/125311) `sessions tail` 紧凑指标 + 轨迹记录器可撤销能力。
- **Token 开销**：[#14785](https://github.com/openclaw/openclaw/issues/14785) 工具 schema ~3,500 token 固定税；[#125314](https://github.com/openclaw/openclaw/issues/125314) message 工具全量 schema 序列化 — 与 #168157 等缓存 PR 同方向，属维护者优先级。
- **交互增强**：[#17840](https://github.com/openclaw/openclaw/issues/17840) 反应触发 agent turn；[#38714](https://github.com/openclaw/openclaw/issues/38714) Discord reaction hooks；[#16555](https://github.com/openclaw/openclaw/issues/16555) 投递队列 TTL（防重启洪泛，安全相关，优先级高）。
- **多语言**：[#66252](https://github.com/openclaw/openclaw/issues/66252) 每 agent TTS/STT 覆盖。
- 信号判断：Control UI 的 Solid 2 迁移（[#168194](https://github.com/openclaw/openclaw/pull/168194) 迁移手册）表明前端栈迁移已在推进。

---

## 7. 用户反馈摘要

- **痛点集中在“长期无人值守运行”**：磁盘/WAL/zombie/临时目录四类无限增长问题（#143524、#158390、#97616）是自托管用户最大抱怨。
- **升级路径信任受损**：多个 P0 更新卡死 issue（#167771、#158231、#162047 Doctor 35 分钟），用户反复表达“无法升级也无法回退”的挫败感。
- **消息丢失/重复**是渠道用户（WhatsApp、Telegram、MSTeams）的一致痛点（#69208 伞形 issue）。
- **正面信号**：社区提交的修复 PR 质量高、证据充分（截图、telegram-e2e 证明），机器人辅助 triage（clawsweeper 标签体系）运转成熟；memory 子系统的修复（#103201、#140932 EmbeddingGemma 前缀修复，召回 16/25→23/25）获得实际效果验证。

---

## 8. 待处理积压

| Issue | 年龄 | 状态 | 呼吁 |
|---|---|---|---|
| [#48920](https://github.com/openclaw/openclaw/issues/48920) 文档领先发布 | ~7 个月 | P0，4 👍 | 需发布对齐机制 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) 多 agent 并发编排不稳定 | ~7 个月 | linked PR open | 核心场景，需维护者评审 |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) 跨渠道重复消息伞形 | ~6 个月 | needs-info | 建议系统性方案而非逐渠道补丁 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) 工具 schema token 开销 | ~8 个月 | needs-product-decision | 成本敏感用户长期诉求 |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) Onboarding 缺 Memory/Embedding 配置步骤 | ~8 个月 | needs-product-decision | 新用户流失点 |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) WAL 膨胀（115 评论） | 1 个月 | no-new-fix-pr，需维护者评审 | **最高优先呼吁** |

**维护者建议**：优先处理更新器修复 PR 系列（#168197/#168203）与 2026.10.1 回移（#168198）的合并，以恢复升级路径信任；同时为 #143524 指定负责人。

---

## 横向生态对比

# 个人 AI 智能体开源生态横向对比分析报告（2026-10-10）

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**功能扩张与稳定性还债并行**的成熟竞争期：以 OpenClaw 为头部的项目日均 Issue/PR 更新量达数百条，而 Moltis、EasyClaw 等小体量项目仍在功能讨论阶段。生态呈现明显的“金字塔”结构，头部项目处理大规模部署与长期运行可靠性，腰部项目专注渠道适配与细分场景，尾部项目（NullClaw、IronClaw 等 5 个）处于静默状态。跨项目共同主题高度收敛：**更新器可靠性、消息投递一致性、成本可观测性、无人值守长期运行**是全生态的系统性痛点。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 健康度 |
|---|---|---|---|---|
| **OpenClaw** | 500（364 开/136 关，关率 27%） | 500（329 待合/171 已合） | ❌ | 活跃度最高，P0 积压（WAL 膨胀 115 评论）需警惕 |
| **CoPaw** | 16（9 开/7 关） | 21（10 待合/11 合） | ❌ | 优秀，当天修复闭环率高，但有未响应 root RCE |
| **Zeroclaw** | 25（18 开/7 关） | 50（45 待合/5 合） | ❌ | 良好，v0.8.6 发布准备期，5 个 P1 中 3 个无 fix |
| **Hermes Agent** | 50（44 开/6 关，净增 38） | 50（19 待合/31 合） | ❌（6 周无 release） | 中上，新增快于关闭，P0 数据丢失未决 |
| **NanoBot** | 9（3 开/6 关，净减） | 46（27 待合） | ❌ | 优秀，bug→fix PR 当日响应比最佳 |
| **NanoClaw** | 2 | 10（9 合） | ✅ v2026.10.0（首个 CalVer） | 良好，转向发布通道化治理 |
| **LobsterAI** | 0 | 12（10 合） | ❌ | 开发侧高强度，社区侧沉寂（修复源自工单渠道） |
| **PicoClaw** | 5（3 开/2 关） | 6（5 关全为 stale Dependabot） | ❌ | 偏弱，维护响应受质疑 |
| **Moltis** | 2（均功能请求） | 0 | ❌ | 平稳期，仅深度自托管用户讨论 |
| **EasyClaw** | 0 | 0 | ✅ v1.9.28 | 版本驱动型，零社区回流 |
| NullClaw / IronClaw / TinyClaw / ZeptoClaw | 0 | 0 | ❌ | 静默 |

---

## 3. OpenClaw 在生态中的定位

**规模断层级领先**：日均 500 Issue + 500 PR 更新约为第二名 Hermes/Zeroclaw 的 10 倍，拥有 @steipete 式全职化核心维护者和成熟的机器人 triage 体系（clawsweeper），社区贡献 PR 质量高（附截图、e2e 证明）。#143524 单 issue 115 评论的社区动员能力是其他项目不具备的。

**技术路线差异**：
- OpenClaw 走**多渠道接入 + 本地模型 + 子代理编排**的全功能平台路线，已进入 632-agent 舰队级规模化问题域（#149538），控制 UI 正迁移 Solid 2；
- NanoBot/Zeroclaw 走轻量网关 + 渠道正确性打磨路线；NanoClaw 刚完成 CalVer + 发布通道化（OpenClaw 的 2026.10.1 回移 PR 显示其也在向同等发布纪律收敛）；
- Hermes 强调自治 agent（cron/kanban/远程运维），LobsterAI 依附 OpenClaw 引擎做桌面封装。

**软肋**：OpenClaw 的 P0 积压（WAL 膨胀、更新器卡死、文档领先发布 7 个月）在生态中最严重——规模带来的是更高的用户期望与更深的信任透支，升级路径问题（#167771、#158231）正是 NanoClaw 今日改革更新机制要解决的同类问题。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **更新器可靠性** | OpenClaw、Hermes、NanoClaw、LobsterAI | 更新卡死/半安装态/无回退路径（OpenClaw #167771、Hermes #125437 五种失败机制 15 个 Discord 线程）；NanoClaw 以发布通道化根治 |
| **消息投递一致性/静默丢失** | OpenClaw、NanoClaw、Zeroclaw、CoPaw | Telegram/WhatsApp 消息永不投递或丢失（NanoClaw #3569、Zeroclaw #11618 SESSION_BUSY 静默丢弃、OpenClaw #69208 伞形 issue） |
| **成本/Token 可观测性** | OpenClaw、Zeroclaw | Zeroclaw 成本账本 $0.00（#11204/#11613）；OpenClaw 工具 schema 3,500 token 固定税（#14785）、prompt-cache 失效修复（#168157） |
| **长期无人值守运行的资源泄漏** | OpenClaw、Hermes、Zeroclaw | WAL/zombie/临时目录/内存四类无限增长（OpenClaw #143524、#158390；Hermes .git 180GiB；Zeroclaw #11614 schema 泄漏） |
| **前沿模型适配滞后** | NanoBot、Moltis、CoPaw | GPT-6 系列与 DeepSeek 兼容性（Moltis #1298 reasoning_effort 冲突、NanoBot #6085/#6122） |
| **安全加固** | CoPaw、NanoBot、Hermes、NanoClaw | CoPaw root RCE（#8153）、NanoBot 沙箱 fail-closed PR 悬置 7 周（#5536）、Hermes CVE 低垂果实未摘（#135795） |

---

## 5. 差异化定位分析

- **OpenClaw**：全功能个人 AI OS，目标为自托管进阶用户与舰队级部署者；架构最重（Gateway + 子代理 + memory + 多渠道 + Control UI）。
- **NanoBot / NanoClaw / Zeroclaw**：轻量多渠道 agent 网关，目标为消息平台重度用户；差异在 NanoBot 修复吞吐极快、NanoClaw 发布治理最规范、Zeroclaw 走 RFC 驱动的模块化路线（A2A crate、网关分离 v0.9.0）。
- **Hermes Agent**：自治优先（cron、kanban、远程 agent 运维），用户把多天工作托付给它，故数据丢失类问题杀伤力最大。
- **LobsterAI**：依托网易有道渠道，绑定 OpenClaw 引擎的桌面/办公场景产品（Univer 表格、剪贴板、防火墙），中国企业 Windows 环境优化是独特壁垒。
- **CoPaw**：多端客户端战略（RN、HarmonyOS ArkTS），中文生态（飞书、QwenPaw 本地模型推荐）。
- **PicoClaw / Moltis / EasyClaw**：细分场景——嵌入式/移动、自托管 WhatsApp power user、TikTok 达人 BD SaaS 化。

---

## 6. 社区热度与成熟度分层

- **规模化扩张期**：OpenClaw（问题域已进入舰队级可扩展性）、Hermes（净增 38 issue/天，6 周无 release 是风险信号）。
- **质量巩固/发布准备期**：Zeroclaw（v0.8.6 收尾）、NanoClaw（刚发稳定版 + 大重构清债）、CoPaw（2.2.2 打磨，当天修复闭环率佳）、NanoBot（疑似为 v0.3.6 攒变更）。
- **垂直深耕期**：LobsterAI（开发活跃但社区反馈外置于 GitHub）、EasyClaw（版本驱动无社区）。
- **观察/风险期**：PicoClaw（stale 机制误杀含 crypto 安全升级的 5 个 PR）、Moltis 及 4 个静默项目。

**成熟度信号**：RFC/决策队列（Zeroclaw #8692）、salvage 保留贡献者署名（Hermes #135975）、CalVer + RC 通道（NanoClaw）是治理成熟标志；而 stale 自动关闭未修 issue（PicoClaw）是治理退步信号。

---

## 7. 值得关注的趋势信号

1. **“发布纪律”成为竞争力分水岭**：NanoClaw 转向 CalVer + 稳定通道、OpenClaw 回移 22 个 P0/P1 至 2026.10.1，说明生态共识——内置更新路径的质量直接决定用户规模留存。
2. **静默失败是信任最大杀手**：消息丢失、embedding 丢批、SESSION_BUSY 丢弃、scratch 静默删除在 5+ 项目中被反复投诉——**可观测性（日志、隔离区、投递回执）比功能更影响留存**，建议开发者将“失败必须可见”作为架构第一原则。
3. **无人值守自治是下一战场**：Hermes 远程 agent 运维、OpenClaw 632-agent 舰队、Zeroclaw effort 路由（本地省钱），均指向“agent 管 agent”的长时程自治场景。
4. **安全债进入偿还窗口**：CoPaw root RCE 已有真实入侵（附挖矿 IOC），多项目安全 PR 积压——智能体作为“能执行命令的入口”，安全披露流程将从加分项变为门槛项。
5. **上游依赖锁定滞后是共性隐患**：NanoClaw 依赖锁死致全量 Telegram 用户受损、PicoClaw crypto 升级被 stale 关闭——建议建立上游关键修复自动跟踪机制。
6. **Windows/桌面端是稳定性洼地**：OpenClaw、LobsterAI、CoPaw、Hermes、NanoBot 今日均有 Windows 专项修复，桌面自托管人群是被低估的刚需市场。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-10-10）

## 1. 今日速览

NanoBot 今日保持高度活跃：过去 24 小时内共更新 **9 条 Issues**（3 新开 / 6 关闭）和 **46 条 PRs**（19 已合并/关闭，27 待合并），其中当日新提交的 PR 达 10+ 个，主贡献者 @Chaoqi31 与 @chengyongru 产出密集。关闭速度显著快于新增速度（Issues 净减 3 条），显示维护响应效率高。今日无新版本发布，但从合并内容看，多实例支持（`NANOBOT_HOME`/`--home`）、安全加固和多个渠道（WhatsApp/Slack/Telegram/Matrix）修复已进入主干，疑似在为下一版本积累变更。整体健康度：**优秀**。

## 2. 版本发布

今日无新版本发布。当前主线仍为 v0.3.5，大量修复尚未打 tag 发布。

## 3. 项目进展

今日合并/关闭的 PR 推进了多个方向：

**多实例支持（重要里程碑）**——Windows 下 `NANOBOT_HOME` 被忽略导致的实例冲突这一 3 月份老问题（#1739）今日彻底解决：
- [PR #6126](https://github.com/HKUDS/nanobot/pull/6126)：默认配置和工作区路径正确读取 `NANOBOT_HOME`，网关默认配置同步修复，并补充 Windows 文档
- [PR #1767](https://github.com/HKUDS/nanobot/pull/1767)：3 月的对应修复 PR 一并关闭（由 #6126 取代）
- [PR #6128](https://github.com/HKUDS/nanobot/pull/6128)：新增全局 `--home <directory>` CLI 选择器，简化多实例管理，与上述形成完整方案

**安全修复（P1）**：
- [PR #6069](https://github.com/HKUDS/nanobot/pull/6069)：修复 DNS 钉扎对 bytes 主机名的匹配失败，堵住可回退到原始解析器的潜在 TOCTOU/重定向风险

**渠道修复**：
- [PR #6127](https://github.com/HKUDS/nanobot/pull/6127)：WhatsApp 回放过滤时间戳毫秒/秒单位错误修复（关闭 [Issue #6120](https://github.com/HKUDS/nanobot/issues/6120)）
- [PR #4919](https://github.com/HKUDS/nanobot/pull/4919)：Telegram 自定义 Bot API base URL 支持（自托管/企业网关），历时 3 个月关闭

**文档与测试质量**：
- [PR #6131](https://github.com/HKUDS/nanobot/pull/6131)：清理 58 个文件中 2,282 处手动换行
- [PR #6129](https://github.com/HKUDS/nanobot/pull/6129)：刷新过时的运行时注释与 docstring
- [PR #6130](https://github.com/HKUDS/nanobot/pull/6130)：对齐测试命名与断言

整体来看，项目今日在**多实例、安全、渠道正确性**三条线上都有实质性前进，估计相当于一个小版本（v0.3.6 级别）的变更量已进入主干。

## 4. 社区热点

- **[Issue #1739](https://github.com/HKUDS/nanobot/issues/1739)（Windows 多实例冲突）**：3 月提出、今日关闭，配套两个 PR 同日落地，反映 Windows Server 用户长期痛点终获解决，社区对官方响应慢但最终闭环的反馈总体正面。
- **[PR #6110](https://github.com/HKUDS/nanobot/pull/6110)（Slack compaction 通知原地更新）**：作者特别在描述中标注"请勿作为 stale/duplicate 关闭”，说明此前有 PR 被误判的历史，折射出维护者与贡献者间沟通摩擦，值得维护者留意。
- **[Issue #6121](https://github.com/HKUDS/nanobot/issues/6121) / [#6123](https://github.com/HKUDS/nanobot/issues/6123)**：同一作者 @gianfrancodemarco 一天连提两个 Telegram 媒体处理改进（相册发送、URL 查询串媒体类型判断），是有真实场景（如 Scryfall 卡牌图片推送）的深度用户。
- **[PR #5797](https://github.com/HKUDS/nanobot/pull/5797)**：Parallel 官方员工提交 User-Agent 标识 PR，显示外部厂商开始主动接入 NanoBot 生态，是项目影响力的积极信号。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | 问题 | 状态 |
|---|---|---|
| P1 | [PR #5536](https://github.com/HKUDS/nanobot/pull/5536)：受限 shell 无沙箱时应 fail-closed（symlink/展开可绕过工作区边界） | **待合并**，存在 conflict，7 周未落地，安全敏感需优先处理 |
| P2 | [Issue #6122](https://github.com/HKUDS/nanobot/issues/6122)：DeepSeek `reasoning_effort="minimal"` 发送矛盾 thinking 控制 | 已有 fix PR [#6132](https://github.com/HKUDS/nanobot/pull/6132)，待合并 |
| P2 | [Issue #6085](https://github.com/HKUDS/nanobot/issues/6085)：DeepSeek websearch 导致 LLM 调用不可用（未知 `web_search` 工具类型） | 已关闭，fix 已入主线 |
| P2 | WhatsApp 回放过滤失效（#6120） | ✅ 已修复（#6127） |
| P2 | [PR #6135](https://github.com/HKUDS/nanobot/pull/6135)：SVG 被当作图片 base64 块发送 | fix PR 今日提交 |
| P2 | [PR #6134](https://github.com/HKUDS/nanobot/pull/6134)：Slack DM 中提及 bot 的消息被误丢弃 | fix PR 今日提交 |
| P2 | [PR #6133](https://github.com/HKUDS/nanobot/pull/6133)：`~` 路径媒体附件未展开导致发送失败 | fix PR 今日提交 |
| P2 | [PR #6138](https://github.com/HKUDS/nanobot/pull/6138)：Matrix 编辑消息丢失 HTML 格式 | fix PR 今日提交 |
| P2 | [PR #6136](https://github.com/HKUDS/nanobot/pull/6136)：Anthropic `redacted_thinking` 块跨工具轮丢失（可能触发 API 400） | fix PR 今日提交 |
| P2 | [Issue #6006](https://github.com/HKUDS/nanobot/issues/6006)：QQ 引用消息内容不传达 agent | 已关闭 |

亮点：过去 24 小时报告的 bug 几乎全部在当日就有对应 fix PR，修复响应比极佳。

## 6. 功能请求与路线图信号

- **[Issue #6121](https://github.com/HKUDS/nanobot/issues/6121) Telegram 相册发送**（`sendMediaGroup`，2-10 张分组）：需求明确、方案具体，与 #6123 媒体 URL 判断修复同源，很可能一并实现。
- **[Issue #6123](https://github.com/HKUDS/nanobot/issues/6123) 媒体 URL 按路径扩展名分类**：小改动高价值，纳入概率高。
- **[PR #4919](https://github.com/HKUDS/nanobot/pull/4919) Telegram 自定义 Bot API**：已关闭（可能已合入或以其他方式落地），自托管场景需求明确。
- **`--home` 多实例 CLI（#6128，已关闭）+ `NANOBOT_HOME`（#6126）**：完整的实例管理能力今日成型，是下一版本最确定的卖点。
- **[PR #6103](https://github.com/HKUDS/nanobot/pull/6103) CoreWeave Inference 接入文档**：厂商侧贡献，若合入将扩大 provider 生态。

下一版本（推测 v0.3.6）预计主打：多实例管理、DeepSeek 兼容性修复、多渠道媒体正确性。

## 7. 用户反馈摘要

- **Windows 用户**长期受多实例冲突困扰（#1739），在 Windows Server 上部署双实例直接 Telegram token 冲突，今日方案落地后此类用户受益最大。
- **DeepSeek 用户**是当前痛点最集中的群体：websearch 开关直接破坏所有 LLM 调用（#6085）、thinking 参数矛盾（#6122），说明 DeepSeek API 迭代快于项目适配。
- **模型前沿用户**尝试通过 GitHub Copilot 通道使用 GPT-6 系列失败（#5898），反映 provider 兼容性更新滞后于新模型发布。
- **消息渠道重度用户**（Telegram/WhatsApp/QQ/Slack）关注细节体验：相册、引用消息、媒体类型判断、通知刷屏等，均属真实日常使用场景的打磨需求。

## 8. 待处理积压

- ⚠️ **[PR #5536](https://github.com/HKUDS/nanobot/pull/5536)（P1 安全）**：8 月 25 日提交，标记 conflict，沙箱 fail-closed 修复悬置 6+ 周，**安全类 PR 不应长期积压**，建议维护者优先重审。
- **[PR #6110](https://github.com/HKUDS/nanobot/pull/6110)**：Slack compaction 通知优化，作者已主动澄清范围，等待审查。
- **[PR #5797](https://github.com/HKUDS/nanobot/pull/5797)**：Parallel 官方 User-Agent PR，9 月 17 日提交，涉及外部合作关系，建议尽快处理。
- **[PR #6103](https://github.com/HKUDS/nanobot/pull/6103)**：CoreWeave 文档 PR，标记 conflict 待更新。
- **积压面总览**：27 个待合并 PR 中当日新提交约占一半，真正的陈旧积压主要是上述 4 个，整体积压健康，但 P1 安全项应优先清零。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-10-10

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时 Issues 更新 25 条（新开/活跃 18，关闭 7），PR 更新 50 条（待合并 45，合并/关闭 5），无新版本发布。项目当前处于 v0.8.6 / v0.9.0 发布准备期（见 [Tracker #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)），大量 PR 挂有 `release:v0.8.6` 标签，进入收尾打磨阶段。今日新增 Bug 集中在 Telegram 通道、ZeroCode TUI 和成本计量三条线上，其中 5 个 P1 问题值得维护者优先关注。社区贡献者多元（@RO-mix、@doko89、@cwahn、@DefuzeX 等外部报告者活跃），生态健康度良好。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 数量较少（5 条），但多个带 release-gate 标签的 PR 持续推进：

- **[#11166](https://github.com/zeroclaw-labs/zeroclaw/issues/11166)（已关闭）** — 图片超限批量化逐出：会话超过 `max_images` 上限时按批逐出图片块，避免每张新图都重写 prompt cache，优化 Anthropic 系长会话成本。
- **[#11371](https://github.com/zeroclaw-labs/zeroclaw/issues/11371)（已关闭）** — MCP 嵌套对象参数被错误序列化为字符串的 Bug 已修复（v0.8.6 目标），恢复 MCP 服务器兼容性。
- **[#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700)（已关闭）** — CostTracker session_id 改为会话粒度，costs.jsonl 终于可按对话拆分消费统计。
- **[#10741](https://github.com/zeroclaw-labs/zeroclaw/issues/10741)（已关闭）** — ZeroCode 在收到正常完成响应后静默暂停队列任务的问题修复。
- **[#11640](https://github.com/zeroclaw-labs/zeroclaw/pull/11640)（已关闭）** — 为 #11607 的 live-session 刷新预过滤添加有界例外记录的文档 PR。

整体判断：v0.8.6 交付清单中的 MCP 修复、成本账本、测试确定性（[#11534](https://github.com/zeroclaw-labs/zeroclaw/pull/11534)）等项持续推进，发布窗口临近。

## 4. 社区热点

- **[#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)**（15 评论）— 并行运行时门控下运行时写入可执行测试夹具的加固任务，反映 CI 并行测试基础设施持续的不稳定投入。
- **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)**（15 评论）— 维护者 RFC/设计决策队列，是项目治理核心看板，10-09 仍有更新，说明 RFC 审批流转活跃。
- **[#11516](https://github.com/zeroclaw-labs/zeroclaw/pull/11516)** — effort-aware 本地/云端路由（XL 体量，needs-maintainer-review），是当前最重磅的功能 PR 之一，社区对“简单请求走本地模型省成本”诉求明确。
- **[#11556](https://github.com/zeroclaw-labs/zeroclaw/pull/11556)** — Signal 通道媒体附件支持（XL），外部贡献者 @GaijinSystems 交付，体现通道生态扩展动力。

## 5. Bug 与稳定性（按严重程度）

**P1（工作流受阻）：**
| Issue | 问题 | Fix 状态 |
|---|---|---|
| [#11608](https://github.com/zeroclaw-labs/zeroclaw/issues/11608) | Telegram 监听器遇黑洞请求永久卡死，无恢复机制 | 无 fix PR |
| [#11615](https://github.com/zeroclaw-labs/zeroclaw/issues/11615) | Telegram 忽略 429 retry_after，立即重试加剧限流，回复可能丢失 | 无 fix PR |
| [#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612) | 同轮次重跑已批准 shell 命令导致 agent loop 中止并结束 ACP 会话（DefuzeX 外部安全测试发现） | 无 fix PR |
| [#11614](https://github.com/zeroclaw-labs/zeroclaw/issues/11614) | `map_key_sections` 每次调用泄漏 schema 路径，daemon 内存持续增长 | 无 fix PR |
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | OpenRouter 消费显示 $0.00，usage.cost 从未入库 | 已接受，修复中 |
| [#11618](https://github.com/zeroclaw-labs/zeroclaw/issues/11618) | ZeroCode 在 SESSION_BUSY 拒绝时静默丢弃排队消息 | 相关 PR [#11607](https://github.com/zeroclaw-labs/zeroclaw/pull/11607)/[#11609](https://github.com/zeroclaw-labs/zeroclaw/pull/11609) 推进中 |

**P2：**
- [#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613) — 成本账本丢弃 provider total_tokens，Gemini 隐藏推理 token 少计（与 [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) 同域，属成本计量系统性问题）。
- [#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623) — ZeroCode 丢弃 pending ask_user 提示，600s 超时后工具失败且无记录。
- [#11632](https://github.com/zeroclaw-labs/zeroclaw/issues/11632) — Linux/Tauri 桌面端空闲时 WebKitWebProcess 持续重绘（~100% GPU）。
- [#11180](https://github.com/zeroclaw-labs/zeroclaw/issues/11180)（已关闭）— 并行门控下测试串扰 flaky 已修复。

## 6. 功能请求与路线图信号

- **RAG 知识库** [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235)（RFC，risk:high）— 为 agent 提供操作者文档检索能力，属新子系统级能力边界，需维护者决策。
- **A2A 协议 crate** [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254)（RFC，needs-maintainer-review）— 在已有 #9106/#7763 基础上整合跨智能体通信，与 v0.9.0 网关分离方向契合，落地概率较高。
- **search_routes** [#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) — web_search_tool 按提示路由到不同搜索 provider，镜像已有 model_routes 设计，实现成本低。
- **图片降采样** [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887)（status:blocked）— 超限图片降采样而非丢弃，目前被阻塞。
- **ZeroCode 时间戳** [#11620](https://github.com/zeroclaw-labs/zeroclaw/issues/11620)（P3）— 转写中显示消息时间，配合今日多条 ZeroCode Bug，TUI 体验打磨是近期重心。

## 7. 用户反馈摘要

- **成本可观测性是高频痛点**：#11204、#11613、#10700 三个 Issue 均指向“花了多少钱/多少 token 看不清”，用户（如 @alperyilmaz 90 次请求/210 万 token 后成本全为零）对 Dashboard 数据可信度不满。
- **Telegram 通道可靠性**：@RO-mix 一日连报两个 P1（#11608、#11615），反映网络异常与平台限流场景下通道韧性不足。
- **ZeroCode 消息可靠性**：三条 Issue（#11618、#11623、#10741）共同主题是“用户输入/交互静默丢失”，对 TUI 用户信任伤害大。
- **外部安全测试正向反馈**：DefuzeX 用 KUMA SDK 主动测试 ZeroClaw 行为安全（#11612），说明项目已进入安全研究社区视野。
- **正面信号**：贡献者对 RFC 流程（#8692 决策队列）和结构化 PR 模板遵守度高，项目治理成熟。

## 8. 待处理积压

- **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)** — v0.8.6/v0.9.0 交付 Tracker，需维护者持续更新剩余 gap 与排序。
- **[#11236](https://github.com/zeroclaw-labs/zeroclaw/pull/11236)** — 插件不完整安装恢复（XL，release-gate，v0.8.6），已开 11 天，阻塞发布清单。
- **[#11516](https://github.com/zeroclaw-labs/zeroclaw/pull/11516)** — effort 路由 XL PR，needs-maintainer-review，长期未审将阻塞后续 stacked 工作。
- **[#11541](https://github.com/zeroclaw-labs/zeroclaw/pull/11541)** — Anthropic extra_headers 修复，status:blocked，需解除阻塞。
- **[#11413](https://github.com/zeroclaw-labs/zeroclaw/pull/11413)** — filesystem channel 拒绝相对路径（breaking-change），依赖三层 stacked PR，合并顺序需维护者协调。
- **[#11638](https://github.com/zeroclaw-labs/zeroclaw/issues/11638)** — Discord 邀请失效，社区入口修复 Tracker，属低成本高影响项，建议尽快完成剩余勾选项。
- **提示**：今日 5 个 P1 Bug 中 3 个（#11608、#11615、#11614）尚无对应 fix PR，建议维护者认领或纳入 v0.8.6 后续 patch。

---
*数据来源：GitHub API（截至 2026-10-10）；链接均指向 zeroclaw-labs/zeroclaw。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 · 2026-10-10

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去 24 小时内 Issues 更新 50 条（新开/活跃 44、关闭 6），PR 更新 50 条（待合并 19、已合并/关闭 31），无新版本发布。社区讨论焦点集中在 **数据安全（scratch 目录静默删除 P0 Bug）**、**更新器可靠性（Windows 侧 .git 失控膨胀、递归进程树）** 以及 **安全扫描器误报系列问题**。PR 侧则有大量修复与功能提交涌入，包括子代理工具钩子、网关会话状态修复等，整体呈"社区报告密集、维护吞吐稳定"的健康态势。

---

## 2. 版本发布

今日无新版本发布。（注：Issue #99284 提及最新版本为 v0.20.6，2026-08-27 发布，距今已逾一个月，版本节奏偏慢。）

---

## 3. 项目进展

今日关闭的 PR 共 31 条，代表性进展包括：

- **模型能力预检**：#129978 [feat(agent): advisory model-capability pre-flight on the assembled request](https://github.com/NousResearch/hermes-agent/pull/129978) 关闭（属 #5437 长线改进的一部分），回合循环现在会对拼装后的请求做能力预检。
- **TUI 渲染指引**：#105707 [fix(tui): instruct model on markdown and inline math rendering support](https://github.com/NousResearch/hermes-agent/pull/105707) 关闭，模型现在知道 TUI 支持 LaTeX→Unicode 渲染，可生成合适格式的回复。
- **CLI 品牌修复**：#104258 [fix(banner): show provider org label](https://github.com/NousResearch/hermes-agent/pull/104258) 关闭，第三方 provider 不再被错误标注为 "Nous Research"。

**待合并的重要 PR（19 条）**：
- #135975 [子代理工具钩子溯源](https://github.com/NousResearch/hermes-agent/pull/135975)（salvage #112772，灵感来自 Cursor 3.22），保留原作者署名并加固。
- #106742 [单网关统一所有本地会话](https://github.com/NousResearch/hermes-agent/pull/106742) —— 架构级大 PR，CLI/TUI/Desktop/ACP/bots/cron 全部挂载同一活跃会话，持续更新中。
- #135970 [修复模型切换丢失用户回合](https://github.com/NousResearch/hermes-agent/pull/135970)、#135935 [busy 队列拒绝时不再假确认](https://github.com/NousResearch/hermes-agent/pull/135935)、#135976 [更新渠道认证修复](https://github.com/NousResearch/hermes-agent/pull/135976) 等当日新鲜修复。

---

## 4. 社区热点

**🔥 最热 Issue：scratch prune 静默销毁多日工作（P0，20 评论）**
[#132401](https://github.com/NousResearch/hermes-agent/issues/132401) — Hermes 将所有进程 TMPDIR 指向 `~/.hermes/cache/scratch`，24h 空闲清理**无日志、无隔离区、无保留标记**地删除了用户停放在此的多日 agent 工作成果。这是数据丢失级别问题，标记 `needs-decision`，社区高度关注处置方案（隔离区/keep-marker 机制）。

**#131859 API 无法创建 PR（19 评论）** — fork 账号 `kuehnberger` 对主仓 CreatePullRequest 权限报错，两次复现。外部贡献者被卡住，影响社区贡献通道。

**#125437 更新失败痛点集群（13 评论）** — 本周 15 个 Discord 线程反映：更新失败留下半安装状态、裸报错、无产品内恢复路径，5 种失败机制，每次修复都是手打配方。这是 Windows 桌面用户最集中的痛点。

**Plugin Catalog 活跃**：今日新增 3 个 Telegram 相关目录提交（#135956、#135957、#135380），显示第三方 Telegram 生态正在快速围绕 Hermes 生长。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | 问题 | 状态 |
|---|---|---|
| **P0** | [#132401](https://github.com/NousResearch/hermes-agent/issues/132401) scratch 24h 清理静默销毁多日工作 | OPEN，needs-decision，**无 fix PR** |
| **P1** | [#125437](https://github.com/NousResearch/hermes-agent/issues/125437) 更新失败留半安装态 + 无恢复路径（5 机制/15 Discord 线程） | OPEN，**无 fix PR** |
| **P2 安全** | [#135795](https://github.com/NousResearch/hermes-agent/issues/135795) uv.lock 锁定 multidict 6.7.1，CVE-2026-104874（远程内存增长） | OPEN，升级到 6.9.1 即可，**低垂果实** |
| **P2** | [#131444](https://github.com/NousResearch/hermes-agent/issues/131444) Windows 上 .git 失控写 332 packs/~180GiB/7h，无归属进程 | OPEN，needs-repro，与 #124794（tree:0 部分克隆 + git<2.44 递归进程树）同族 |
| **P2** | [#135942](https://github.com/NousResearch/hermes-agent/issues/135942)（今日新报）cronjob 不校验投递目标，坏目标到触发时才失败 | OPEN |
| **P2** | [#135973](https://github.com/NousResearch/hermes-agent/issues/135973) systemd 跨 profile 混合 unit 并自我延续 | CLOSED（误报，#93349 的重复，主 Issue 仍 OPEN） |
| **P2** | [#134890](https://github.com/NousResearch/hermes-agent/issues/134890) Desktop agent_init_failed RecursionError，traceback 完全不落日志 | OPEN |
| **P2** | [#132631](https://github.com/NousResearch/hermes-agent/issues/132631) musl/aarch64 上 nemo-relay 每次流式调用 SIGSEGV | CLOSED |
| 已修 | #43282（skills prompt 缓存不感知 SKILL.md 变更）、#60258（external_dirs 索引不刷新） | CLOSED |

**安全扫描误报家族**（影响插件生态信任度）：#37036、#84672、#111334、#132155 — 扫描器按"主题"而非"行为"判定，安全文档被当攻击拦截，且 base64 字节碰撞可触发 `aws_access_key_leaked` 且 `--force` 无法覆盖。

---

## 6. 功能请求与路线图信号

- **远程优先恢复**（[#135937](https://github.com/NousResearch/hermes-agent/issues/135937)，今日新开）：多 agent 部署在 Mac mini + Telegram 旅行的用户，希望无需主机终端即可由一个 agent 维护另一个。与 #106742 单网关架构方向契合，有被纳入路线图的可能。
- **Cron 投递包装定制**（[#135971](https://github.com/NousResearch/hermes-agent/pull/135971)，PR 已在）：`cron.wrap_footer` / `wrap_style` 选项，落地概率高。
- **子代理溯源钩子**（#135975）：salvage 机制 + Cursor 启发，维护者 @teknium1 亲自操刀，合并意愿明显。
- **Matrix 原生表情/贴纸**（#126375）：多 PR 组合栈持续推进，属于平台覆盖扩张主线。
- **信号判断**：#106742（单网关）+ 消息投递可靠性系列 PR 表明下一阶段主题是**会话一致性与投递可靠性**，与今日多个 cron/kanban 投递 Bug 形成呼应。

---

## 7. 用户反馈摘要

- **痛点最深的场景是"无人值守长期运行"**：scratch 自动清理毁掉多天工作（#132401）、kanban 卡因一次限流永久卡死且外部看不到原因（#119070、#123963）、cron 坏目标到触发时才爆（#135942）—— 用户依赖 Hermes 做自治 agent，但自治失败时**缺乏可观测性与恢复路径**。
- **Windows/桌面用户体验割裂**：更新失败 5 种机制 15 个 Discord 线程（#125437）、.git 静默膨胀 180GiB（#131444）—— 更新器是当前最集中的信任破坏点。
- **插件生态作者受阻**：安全扫描误报 + `--force` 无法覆盖（#132155），社区技能/插件作者提交意愿受挫；同时 Telegram 插件目录活跃说明生态需求旺盛。
- **正面信号**：外部贡献者持续高质量产出（如 @iainlane 的 Matrix 栈、@r266-tech 的安全修复）；维护者用 salvage 机制保留原作者署名（#135975），社区协作文化良好。

---

## 8. 待处理积压

- **#132401（P0 数据丢失）**：创建 7 天，20 评论，仍无 fix PR 和决策 —— **最需要维护者优先表态**。
- **#62169**：终端 CWD 被删后所有后续命令 exit 126，2026-07-10 开启，**已积压 3 个月**。
- **#79357**：gateway 模式下 idle 压缩永远不触发（watchdog 重置时间戳），2026-08-05 开启，影响长期会话内存。
- **#37036 / #84672**：安全扫描误报，6 月/8 月开启，多次修复浪潮后仍有残留类别（#111334 追踪）。
- **#131859（blocked）**：贡献者 API 权限问题 7 天未解，直接阻塞外部 PR 提交。
- **版本发布间隔偏长**：距 v0.20.6 已 6 周无 release，而 main 上积累了 #106742 等大改动，建议尽快发布 canary 降低回归风险面。

---

*数据来源：GitHub API（Issues/PR 最近 24 小时快照）。链接均为 NousResearch/hermes-agent 仓库。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-10-10

## 1. 今日速览

PicoClaw 今日整体活跃度中等偏低，共 5 条 Issue 更新（3 新开/活跃、2 关闭）和 6 条 PR 更新（1 待合并、5 已关闭）。值得注意的是，关闭的 5 条 PR 全部为被标记 stale 的 Dependabot 依赖升级（crypto、MCP SDK、Anthropic SDK、mautrix、LINE SDK），**无一实际合并**，表明依赖更新通道存在积压问题。新报告的 Android 构建 DNS 解析 Bug（#3420）是今日最值得关注的稳定性风险。无新版本发布，处于常规迭代维护期。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- **[PR #3385–#3389] Dependabot 依赖升级批量关闭**：5 个依赖升级 PR（含安全相关的 `golang.org/x/crypto` 0.53→0.57、MCP go-sdk 1.6.1→1.8.0、Anthropic SDK 1.55.1→1.74.0）均被标记 stale 后关闭而非合并。**净进展为零**，依赖债务持续累积，尤其 crypto 库升级涉及安全修复，建议维护者优先重开。
- **[PR #3414] 待合并**：`feat(agent): add wall-clock turn time budget`（@racso2609）为 Agent 每轮对话增加可选的墙钟时间预算（默认关闭），超时后 Agent 停止调度新工具并输出阶段总结，防止无限循环。这是当前唯一活跃的功能性 PR，等待维护者评审。
- **Issue 侧**：#3377（TLS 证书过期）与 #3391（多行消息被拆分）被关闭，暂无对应 fix PR 信息，需确认是已修复还是被 stale 机制自动关闭（两条均带 stale 标签，后者可能性较高）。

## 4. 社区热点

- **[#293 Feature: Autonomous Browser Operations](https://github.com/sipeed/picoclaw/issues/293)**（8 评论 / 8 👍，今日更新）：路线图级高优先级功能，社区持续热议浏览器自动化方案（两条技术路径待定）。这是当前最受欢迎的功能议题，反映用户希望 PicoClaw 具备直接操作网页（导航、抓取、执行操作）的能力。
- **[#3415 反向代理 / 子路径挂载支持](https://github.com/sipeed/picoclaw/issues/3415)**：用户希望 Web Console 可通过 Nginx 挂载到 `/pico/` 子路径。诉求来自自托管/多服务共存的部署场景，当前前端硬编码根路径（`/api`、`/launcher-login` 等）导致无法实现，需要 Launcher 支持路径前缀参数。
- **[#3420 Android DNS 解析失败](https://github.com/sipeed/picoclaw/issues/3420)**：官方 Android 构建中 pure-Go 二进制（CGO_ENABLED=0）无法解析 DNS（`127.0.0.1:53 refused`），网关连不上任何 API 端点——直接影响移动端可用性。

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#3420](https://github.com/sipeed/picoclaw/issues/3420) Android pure-Go 构建网关 DNS 解析失败，无法访问任何 API | 新开（今日） | ❌ 暂无 |
| 🟡 中 | [#3391](https://github.com/sipeed/picoclaw/issues/3391) Pico 客户端多行输入被按换行拆成多条消息，破坏消息结构 | 已关闭（stale） | ⚠️ 未见对应 PR，疑似未修复即关闭 |
| 🟡 中（历史） | [#3377](https://github.com/sipeed/picoclaw/issues/3377) picoclaw.io TLS 证书过期整站不可访问 | 已关闭（stale） | ⚠️ 需人工确认证书是否已续期 |

## 6. 功能请求与路线图信号

- **浏览器自动化（#293，官方 roadmap 标签）**：最可能进入下一版本的大功能，社区讨论充分，已有 8 👍 支持度。
- **子路径反向代理（#3415）**：诉求明确、方案清晰（Launcher 启动参数 + 路径前缀化），工程量可控，纳入优先级取决于维护者排期。
- **Turn 时间预算（PR #3414）**：已在评审中，默认关闭不影响兼容性，合并概率较高，可作为 Agent 稳定性增强进入下个版本。
- 依赖升级（crypto/MCP/Anthropic SDK）虽非功能项，但**安全层面应在下版本前完成**。

## 7. 用户反馈摘要

- **部署痛点**：自托管用户（#3415）希望在共享域名下子路径部署，被硬编码路径阻塞；Docker/Nginx 用户是核心运维人群。
- **移动端体验受损**：Android 用户（#3420）开箱即无法联网；移动 TUI 用户（#3391）粘贴多段文本/代码时消息结构被破坏。
- **社区呼声集中在能力扩展**：#293 的高互动显示用户期待 PicoClaw 从消息/工具型助手向可操作浏览器的通用 Agent 演进。
- **维护响应度受质疑**：多项 Issue/PR 被 stale 自动关闭而非实际解决（#3377、#3391、5 个依赖 PR），长期观望用户可能流失。

## 8. 待处理积压

| 条目 | 滞留时长 | 风险 |
|---|---|---|
| [#293 浏览器自动化](https://github.com/sipeed/picoclaw/issues/293) | 自 2026-02-16，近 8 个月 | 高优 roadmap 无落地 PR，方向悬而未决 |
| [#3415 子路径反向代理](https://github.com/sipeed/picoclaw/issues/3415) | 8 天，1 评论 | 自托管场景刚需，需维护者表态 |
| [PR #3414 turn time budget](https://github.com/sipeed/picoclaw/pull/3414) | 9 天待评审 | 社区贡献者积极性需保护 |
| 5 个 Dependabot PR（#3385–#3389） | 已 stale 关闭 | **含 crypto 安全升级**，建议重新生成并合并 |
| [#3420 Android DNS](https://github.com/sipeed/picoclaw/issues/3420) | 今日新开 | 官方构建不可用，需尽快响应 |

**健康度小结**：项目功能讨论仍有热度（#293），但近两周维护者响应偏弱——stale 机制批量关闭了含安全升级在内的 5 个 PR，且无版本发布。建议优先处理依赖安全升级与 Android 构建问题，并对 roadmap 项给出明确排期。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-10-10

## 1. 今日速览

NanoClaw 今日迎来重要里程碑：发布首个日历版本号稳定版 **v2026.10.0**，并切换到基于发布版的更新通道（`/update-nanoclaw` 不再直接追踪 `main` 分支尖端）。过去 24 小时 PR 活跃度较高（10 条更新，9 条已合并/关闭），且均由核心团队成员 @glifocat 推动，集中在 CLI 规范化、目录句柄安全加固和安装流程修复。Issues 侧新增 1 条能力请求（OneCLI 2.x 网关支持），另有 1 条影响 Telegram 用户的老 Bug 持续未解。整体健康度良好，但依赖锁定滞后问题开始成为社区关注焦点。

## 2. 版本发布

### [v2026.10.0](https://github.com/nanocoai/nanoclaw/releases)

- **首个 CalVer 版本**：项目自此采用日历版本号命名。
- **更新机制变更（重要）**：`/update-nanoclaw` 现在默认安装已发布的稳定版本，而非 `main` 分支最新提交。此前该版本已在 `beta` 通道以 `2026.10.0-rc.1` / `rc.2` 充分测试。
- **迁移注意**：依赖“尖端构建”行为的用户需注意，更新不再包含未发布的 `main` 改动；追求新功能的用户可继续使用 `beta` 通道。
- Release PR 见 [#4065](https://github.com/nanocoai/nanoclaw/pull/4065)。

## 3. 项目进展

今日合并 9 个 PR，核心方向为**代码路径收敛与安全加固**：

- **[#4063](https://github.com/nanocoai/nanoclaw/pull/4063)** 最重要的改动：新增 `src/anchored-dir.ts`，session/skill/run-log 目录均通过单一句柄打开与读写，涉及安全、容器、会话、调度任务等十余个模块，属于深层的文件系统访问规范化。
- **[#4062](https://github.com/nanocoai/nanoclaw/pull/4062)** 命令网关与 agent runner 共用同一 slash 命令解析器，`/name@botname` 归一化为 `/name`，消除双解析不一致隐患。
- **[#4061](https://github.com/nanocoai/nanoclaw/pull/4061)** `ncl` CLI 参数在 dispatch 入口一次性规范化（dash→underscore）。
- **[#4060](https://github.com/nanocoai/nanoclaw/pull/4060)** Mattermost setup 增加所有者 ID 校验，修复固定错误信息。
- **[#4059](https://github.com/nanocoai/nanoclaw/pull/4059)** OneCLI 安装器改用完整 URL 和显式 curl 协议选项，提升安装可审计性。
- **[#4052](https://github.com/nanocoai/nanoclaw/pull/4052)** `/add-dial-tool` 适配 OneCLI 网关 1.42.0 的 policy API（旧 rules API 返回 410）。
- **[#4064](https://github.com/nanocoai/nanoclaw/pull/4064)** 驱动测试 fs stub 补充 `fs.constants`，修复 #4063 引入的测试导入失败——当天即完成修复闭环。
- **[#4066](https://github.com/nanocoai/nanoclaw/pull/4066)** / **[#4067](https://github.com/nanocoai/nanoclaw/pull/4067)**（待合并）依赖例行升级。

**评估**：今日推进幅度显著，尤其 #4063 是一次横跨安全、容器、会话的基础设施级重构，配合 v2026.10.0 发布，属于“大版本前清债”的典型节奏。

## 4. 社区热点

- **[#3569](https://github.com/nanocoai/nanoclaw/issues/3569)**（2 条评论，最活跃）：Telegram 消息投递 Bug，所有安装被锁定在 `@chat-adapter/telegram@4.29.0`，当整条消息的未转义 MarkdownV2 标记（`_ * ~ \``）数量为**奇数**时永久投递失败。上游 4.32.0 已修复，但 NanoClaw 仍未跟进升级。用户诉求明确：尽快解除依赖锁定。
- **[#4068](https://github.com/nanocoai/nanoclaw/issues/4068)**（1 条评论）：请求支持 OneCLI 2.x 网关。当前锁定 1.42.0 导致 Google Docs 连接只请求 `drive.file`/`drive.readonly` scope，无法编辑文档。值得注意的是，今日合并的 #4052 恰恰是“适配网关 1.42 的临时方案”，说明短期内官方策略是停留在 1.42，2.x 升级可能不会很快。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#3569](https://github.com/nanocoai/nanoclaw/issues/3569) Telegram 含奇数个 MarkdownV2 标记的消息永不投递，影响**所有** Telegram 安装，自 2026-08-27 挂起至今 | ❌ 无 fix PR，上游已修，仅差升级 chat-adapter |
| 🟡 中 | [#4068](https://github.com/nanocoai/nanoclaw/issues/4068) OneCLI 1.42 锁定导致 Google Docs 编辑能力缺失 | ❌ 为能力请求，无修复 PR；#4052 反而加深 1.42 耦合 |
| 🟢 低 | 驱动测试 fs stub 导入失败 | ✅ #4064 已于当日修复合并 |

**观察**：今日合并的 PR 均为主动修复/重构，而非响应社区 Bug 报告；社区报告的两个问题都指向同一根因——**依赖版本锁定滞后**。

## 6. 功能请求与路线图信号

- **OneCLI 2.x 网关支持**（[#4068](https://github.com/nanocoai/nanoclaw/issues/4068)）：信号矛盾。#4052 明确向 1.42 policy API 迁移（描述中称旧 API 返回 410），短期内升级 2.x 概率低；但该 Issue 暴露的 Google Docs 编辑 scope 需求真实存在，建议纳入中期路线图。
- **CalVer + 发布通道化**（v2026.10.0）：暗示项目正走向更正式的发布节奏，未来版本内容将更聚合，`beta` 通道将承担 RC 测试职责。

## 7. 用户反馈摘要

- **Telegram 用户**对消息静默丢失感到沮丧——尤其是内容里带下划线/星号的场景（代码片段、强调文本），失败无任何报错，排查成本高（#3569）。
- **Google Workspace 重度用户**（#4068）将 NanoClaw 用作文档自动化助手，当前只能读不能写，是采用的主要阻碍。
- 正面信号：`/update-nanoclaw` 一键更新机制被广泛使用（Release Note 专门强调其行为变化），说明用户高度依赖内置更新路径，发布质量直接影响全体用户。

## 8. 待处理积压

- ⚠️ **[#3569](https://github.com/nanocoai/nanoclaw/issues/3569)**：开于 08-27，已挂起 6 周，影响全部 Telegram 用户且修复成本低（升级依赖版本）。**建议维护者优先处理**，尤其 v2026.10.0 刚发布，正是携带该修复进下一版本的窗口期。
- **[#4067](https://github.com/nanocoai/nanoclaw/pull/4067)**：vitest 4.1.4 → 4.1.11 例行升级，今日新开，等待 CI 通过后合并即可。
- **依赖锁定策略**：chat-adapter（落后 3 个版本）与 OneCLI gateway（锁定 1.42）两处滞后均已引发社区问题，建议建立上游安全/关键修复的自动跟踪机制。

---
*数据来源：GitHub API（过去 24 小时 Issues/PR/Releases）。链接基于 nanocoai/nanoclaw 仓库。*

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

# LobsterAI 项目动态日报 · 2026-10-10

## 1. 今日速览

今日 LobsterAI 仓库共更新 **12 条 PR**（新开 5 条，合并/关闭 10 条，其中含昨日延续合并），**无新版本发布，无 Issue 活动**。核心开发者 @fisherdaddy 单日连续提交并关闭了多个针对 OpenClaw 运行时（引擎启动、配置锁、steering 中断、剪贴板权限）的修复 PR，节奏密集、描述详尽，显示项目处于**高强度的稳定性打磨期**。社区侧由 @binyangzhu000-sudo 贡献了新增 Atlas Cloud Provider 的功能 PR，@btc69m979y-dotcom 完成了桌面伴随组件的翻译/朗读卡片功能。整体活跃度：**开发侧活跃，社区讨论侧沉寂（0 Issue）**。

## 2. 版本发布

今日无新版本发布。多个已合并修复（配置锁回收 #2819、防火墙放行 #2817、剪贴板 #2822 等）预计将打包进下一个版本，建议关注后续 Release 说明中的 Windows 平台启动相关变更。

## 3. 项目进展

### 已合并/关闭（10 条）

**OpenClaw 引擎与运行时稳定性（核心主线）**
- **#2819** [fix(openclaw)](https://github.com/netease-youdao/LobsterAI/pull/2819) — 回收孤立的配置锁文件（0 字节 `openclaw.json.lock`），终结无限配置恢复循环。此前 Windows 用户每次启动任务都会重启网关并卡在“AI 引擎启动中”。
- **#2817** [fix(openclaw)](https://github.com/netease-youdao/LobsterAI/pull/2817) — 为网关自动放行 Windows 防火墙环回连接，解决重启后 `/startupz` 探测全部失败导致 300 秒启动超时的问题。
- **#2821** [fix(openclaw)](https://github.com/netease-youdao/LobsterAI/pull/2821) — 配置变更待应用期间，不再一刀切拒绝任务准入，改为精确判定受影响范围。
- **#2825** [fix(openclaw)](https://github.com/netease-youdao/LobsterAI/pull/2825) — 网关启动等待改为只计算唤醒时间（awake time），修复系统休眠后误判超时。
- **#2826** [fix(openclaw)](https://github.com/netease-youdao/LobsterAI/pull/2826) — 运行停止前复查未完成的 progress-card 计划，修复进度卡卡死在“第 3/10 步 · 本轮已结束”。
- **#2827** [fix(cowork)](https://github.com/netease-youdao/LobsterAI/pull/2827) / **#2823** [fix(cowork)](https://github.com/netease-youdao/LobsterAI/pull/2823) — 用户中断运行时丢弃排队中的 steer 输入，避免其被错误重放为新回合；#2827 取代 #2823。
- **#2822** [fix(office)](https://github.com/netease-youdao/LobsterAI/pull/2822) — 修复主进程权限处理器冲突导致表格编辑器（Univer）无法访问剪贴板。
- **#2820** [feat(support)](https://github.com/netease-youdao/LobsterAI/pull/2820) — 新增 Windows 环回连接与网络过滤器诊断采集器，配合 #2817 的现场排查工具。

**功能贡献**
- **#2816** [feat(desktop-companion)](https://github.com/netease-youdao/LobsterAI/pull/2816) — 选中文本旁弹出紧凑卡片支持翻译与朗读，工具栏重构为 Translate / Read aloud / Copy / Ask + More 菜单。

### 待合并（2 条）
- **#2824** [fix(openclaw)](https://github.com/netease-youdao/LobsterAI/pull/2824) — 配置恢复停滞时不再广播为引擎错误，保持任务可继续运行（#2819 的后续）。
- **#2818** [feat: Atlas Cloud Provider](https://github.com/netease-youdao/LobsterAI/pull/2818) — 新增 Atlas Cloud 作为全局 Provider，改动小（5 文件 +38/-4），待维护者评审。

**评价**：今日主线非常清晰——连续围剿 Windows 环境下引擎启动/配置恢复的一整条故障链（锁文件 → 防火墙 → 休眠时钟 → 准入策略），修复颗粒度细且均有真实用户案例支撑，稳定性显著推进。

## 4. 社区热点

今日无 Issue 活动，PR 评论数据缺失，暂无明确热点讨论。从 PR 描述可反推最受关注的场景为：
- **Windows 用户无法启动引擎**（#2817、#2819、#2820 均源于真实工单/field case）
- **协作/steering 交互中断行为**（#2823、#2827 连续两轮迭代）

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | 配置锁残留导致无限重启网关、卡启动页（#2819） | ✅ 已修复 |
| 🔴 高 | Windows 防火墙阻断环回，引擎 300s 超时（#2817） | ✅ 已修复 |
| 🟠 中 | 系统休眠后网关启动被误判超时（#2825） | ✅ 已修复 |
| 🟠 中 | 停止回合时排队 steer 输入被重放为新任务（#2823/#2827） | ✅ 已修复 |
| 🟠 中 | 配置恢复停滞被广播为引擎错误、禁用编辑器（#2824） | 🟡 fix PR 待合并 |
| 🟡 低 | 进度卡停留在“第 3/10 步”（#2826） | ✅ 已修复 |
| 🟡 低 | Univer 表格剪贴板不可用（#2822） | ✅ 已修复 |

## 6. 功能请求与路线图信号

- **Atlas Cloud Provider**（[#2818](https://github.com/netease-youdao/LobsterAI/pull/2818)）：社区直接以 PR 形式表达需求，位于 Global 区与 OpenRouter 并列，改动小、风险低，**很可能随下版本合入**。
- **桌面伴随组件翻译/朗读卡片**（#2816 已合并）：显示团队在持续投入桌面端轻量交互体验，选中文本工具链（Explain/Summarize/Polish）仍有扩展空间。
- **诊断采集器**（#2820）：暗示支持工单自动化排查是投入方向，未来可能演化为内置自诊断面板。

## 7. 用户反馈摘要

今日无 Issue 评论数据，以下提炼自 PR 描述中的真实用户案例：
- **痛点集中在国内 Windows 桌面环境**：防火墙默认拦截、进程被杀导致残留锁文件、系统休眠——说明相当比例用户为企业/个人 Windows 桌面场景。
- **长时间自主任务的可观测性焦虑**：用户会紧盯进度卡（“第 3/10 步”），任务中途静默停止会引发困惑。
- **协作中断语义敏感**：用户 steer 后立即 stop，期望“我说停就彻底停”，不希望残留输入意外触发新任务。

## 8. 待处理积压

- **#2824**（配置恢复停滞修复）与 **#2818**（Atlas Cloud Provider）为当前仅有的 2 个待合并 PR，建议维护者 @fisherdaddy 优先评审 #2824——它是 #2819 修复链条的收尾，拖延会留下已知的用户体验断点。
- Issue 区今日零流量，但连续多日修复均源自工单渠道而非 GitHub Issue，建议关注是否有外部反馈渠道的积压未同步到仓库。

---
*数据来源：GitHub API（netease-youdao/LobsterAI），统计窗口 2026-10-09 至 2026-10-10。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-10-10）

## 1. 今日速览

今日 Moltis 项目整体活跃度处于**低位但有效讨论**状态：过去 24 小时无 PR 更新、无版本发布，但有 2 条新开 Issue（均来自同一用户 @texxronn），且各自已有 1 条评论互动。两条 Issue 均为功能请求，聚焦于 **OpenAI 新模型兼容性** 与 **消息触发机制（mention/trigger word）可配置化**，反映出用户正在将 Moltis 部署到更新的模型生态和多账号/共享群组场景中。从健康度看，项目无新增 Bug 报告、无回归问题，属于平稳期。

## 2. 版本发布

今日无新版本发布。最近亦无 Release 记录，维护节奏需持续观察。

## 3. 项目进展

今日无 PR 合并或关闭，无代码层面的实质推进。项目整体进度保持不变，当前处于功能讨论收集阶段（见下方两条 Feature Request）。

## 4. 社区热点

### 🔥 [#1298] Feature: native support for OpenAI gpt-6 models (reasoning + tools)](https://github.com/moltis-org/moltis/issues/1298)
- **作者**: @texxronn | 👍 0 | 💬 1 条评论
- **核心问题**：用户通过内置 `openai` provider 调用 `gpt-6-luna` 时，凡是包含工具调用的对话轮次均直接失败，返回：
  ```
  HTTP 400: Function tools with reasoning_effort are not supported for gpt-6-luna
  in /v1/chat/completions. To use function tools, use /v1/responses or set
  reasoning_effort to 'none'.
  ```
- **诉求分析**：这暴露出 Moltis 的 OpenAI 适配层尚未跟进新一代模型的 API 约束——`/v1/chat/completions` 端点对 gpt-6 系列的 `reasoning_effort + function tools` 组合做了限制，需要适配 `/v1/responses` 端点或提供参数降级策略。由于 OpenAI 新模型用户基数大，此 Issue 若确认将影响一批早期采用者。

### 🔥 [#1297] Feature: configurable mention/trigger word for a shared channel](https://github.com/moltis-org/moltis/issues/1297)
- **作者**: @texxronn | 👍 0 | 💬 1 条评论
- **核心场景**：用户在 WhatsApp 上以 linked device（关联设备）方式自托管 agent，希望在一个共享群组中通过固定的触发词（如消息以 `@Rio` 开头）唤醒，其余时间保持沉默。
- **诉求分析**：用户指出当前的 `mention_mode = "mention"` 在 linked-device 账号模式下无法满足此需求（摘要被截断，推测是关联设备无法可靠获取平台原生 mention 事件）。本质诉求是**触发词完全可配置、与应用层 mention 机制解耦**，这属于消息路由层的增强。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| ⚠️ 中高 | [#1298](https://github.com/moltis-org/moltis/issues/1298) `gpt-6-luna` + 工具调用时 HTTP 400，功能不可用 | OPEN，**暂无 fix PR** |

说明：#1298 虽以 Feature 形式提交，但实际表现为**硬性失败**（带 tools 的调用必然报错），对使用 gpt-6 系列模型的用户属于可用性阻断，建议按 Bug 优先级处理。无崩溃/回归类报告。

## 6. 功能请求与路线图信号

1. **OpenAI gpt-6 原生支持（#1298）**：目前无关联 PR，但考虑到模型生态更新的时效性，若维护者确认修复方案（迁移到 `/v1/responses` 端点，或自动降级 `reasoning_effort`），很可能进入下一个小版本。这是**最有可能被优先纳入**的项。
2. **可配置触发词（#1297）**：涉及消息接入层（WhatsApp linked device）的行为设计，改动面较广，预计进入讨论/设计阶段，短期落地概率中等偏低。

## 7. 用户反馈摘要

- **痛点 1（模型兼容性滞后）**：用户希望开箱即用支持最新前沿模型，当前 provider 对 OpenAI 新端点/新参数约束的适配存在滞后，遇到的是硬报错而非优雅降级。
- **痛点 2（多账号/群组场景下的唤醒控制）**：自托管用户希望在共享渠道中精确控制 agent 的激活条件，避免“全程在线”的干扰；现有 `mention_mode` 配置粒度不足以覆盖 linked-device 这类部署形态。
- **共性信号**：反馈均来自较深度的自托管用户（自建 WhatsApp 桥接、追新模型），说明 Moltis 的核心用户群偏向技术型 power user，对可配置性和前沿兼容性要求高。

## 8. 待处理积压

- [#1298](https://github.com/moltis-org/moltis/issues/1298) 与 [#1297](https://github.com/moltis-org/moltis/issues/1297) 均为今日新开，尚无维护者明确表态（各有 1 条评论，暂无法确认是否为官方回应）。建议维护者：
  1. 优先对 #1298 给出方案判断（`/v1/responses` 适配计划或临时 workaround 文档，如手动设置 `reasoning_effort: none`）；
  2. 对 #1297 明确 linked-device 场景下 mention 检测的技术边界，避免用户等待无期。
- 由于本次数据未包含历史积压 Issue 统计，无法列出更早期的长期未响应项，建议后续日报补充 issue age 分布数据以便追踪。

---
*数据来源：Moltis GitHub 仓库 2026-10-10 前 24 小时窗口。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-10-10

## 1. 今日速览
- 过去 24 小时共 16 条 Issue 更新（9 开 / 7 关）、21 条 PR 更新（10 待合并 / 11 已合并关闭），无新版本发布。
- 社区活跃度高：当日新开 Issue 覆盖安全漏洞（MCP root RCE）、Windows 长路径、流式解析等多个方向，且多数附带高质量复现报告。
- 修复管线运转顺畅：多个近期 Bug（#8009、#8129、#8143、#8158、#7995）当天即有对应 fix PR 合并，Issue 关闭节奏健康。
- 大型特性持续推进：HarmonyOS 原生客户端、插件热更新回滚机制、Creator 2.0.1 等三个 XXXL 级 PR 处于活跃评审中。

## 2. 版本发布
今日无新版本发布。Creator 插件的 [PR #8121](https://github.com/agentscope-ai/CoPaw/pull/8121)（1.3.0 → 2.0.1）正在合并流程中，预计近期发布。

## 3. 项目进展

**今日已合并/关闭的重要修复 PR：**
- [#8010](https://github.com/agentscope-ai/CoPaw/pull/8010)：修复超大媒体负载导致会话永久不可用的问题（对应 [#8009](https://github.com/agentscope-ai/CoPaw/issues/8009)），此前被拒 payload 会在上下文中重放并毁掉整个会话。
- [#8136](https://github.com/agentscope-ai/CoPaw/pull/8136)：图片缩放时保留 EXIF 方向信息（对应 [#8129](https://github.com/agentscope-ai/CoPaw/issues/8129)）。
- [#8157](https://github.com/agentscope-ai/CoPaw/pull/8157)：修复 Button size 传给 SVG 导致的 Console 报错刷屏（对应 [#8143](https://github.com/agentscope-ai/CoPaw/issues/8143)）。
- [#8159](https://github.com/agentscope-ai/CoPaw/pull/8159)：修复 Scroll 标题独立文本块导致最终回答渲染为空气泡（对应 [#8158](https://github.com/agentscope-ai/CoPaw/issues/8158)）。
- [#8149](https://github.com/agentscope-ai/CoPaw/pull/8149)：Files 面板刷新现在会重载所有已展开目录并保留分页（对应 [#7995](https://github.com/agentscope-ai/CoPaw/issues/7995)）。
- [#8055](https://github.com/agentscope-ai/CoPaw/pull/8055)：技能池大文件下载移出事件循环，避免阻塞（~13k 文件 / 80MB 场景）。
- [#8155](https://github.com/agentscope-ai/CoPaw/pull/8155)：更新本地模型推荐（QwenPaw-Flash 9B/27B/35B-A3B）。
- [#8089](https://github.com/agentscope-ai/CoPaw/pull/8089)：LAN HTTP 下支持终端身份（`crypto.randomUUID` 不可用时的降级）。

整体判断：今日合并集中在**稳定性与前端体验修复**，一天内闭环了 5+ 个用户可感知的 Bug，2.2.2 正式版前的打磨趋势明显。

## 4. 社区热点

- **[#8153](https://github.com/agentscope-ai/CoPaw/issues/8153) MCP Driver root RCE（最高优先级）**：用户提供完整入侵溯源证据链——攻击者通过 MCP Driver 配置接口以 root 执行任意命令，植入 SSH 公钥并部署挖矿木马。附 IOC 指标。建议维护者立即响应并评估是否走安全通告流程。
- **[#7678](https://github.com/agentscope-ai/CoPaw/issues/7678)（已关闭，10 条评论）**：Windows 下 spawn subAgent 全部超时失败，是本期评论最多的 Issue，反映 Windows 桌面端子代理链路的痛点。
- **[#8120](https://github.com/agentscope-ai/CoPaw/issues/8120) 频繁页面加载失败**：多台设备复现，已有修复中 PR [#8154](https://github.com/agentscope-ai/CoPaw/pull/8154)（改善 chunk 错误恢复、限制自动重试一次）。
- **[#8040](https://github.com/agentscope-ai/CoPaw/issues/8040) Embedding reindex 静默丢批**：CJK 长文本超过 provider 单项 token 限制导致整批失败，与 #5950 复发相关，社区对静默失败的容忍度低。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 状态 | Fix PR |
|---|---|---|---|
| 🔴 严重 | [#8153](https://github.com/agentscope-ai/CoPaw/issues/8153) MCP 配置接口 root RCE | 开放 | ❌ 暂无 |
| 🔴 严重 | [#8163](https://github.com/agentscope-ai/CoPaw/issues/8163) Windows 长路径导致 Creator Review journal 503，残留目录阻塞重试（409） | 开放 | ❌ 暂无 |
| 🟠 高 | [#8162](https://github.com/agentscope-ai/CoPaw/issues/8162) OpenAI Responses API 流式空响应导致会话 1-3 步后静默中断 | 开放 | ❌ 暂无 |
| 🟠 高 | [#8120](https://github.com/agentscope-ai/CoPaw/issues/8120) 页面加载失败 | 开放 | ✅ [#8154](https://github.com/agentscope-ai/CoPaw/pull/8154) 修复中 |
| 🟡 中 | [#8150](https://github.com/agentscope-ai/CoPaw/issues/8150) 飞书入站图文混发图片被静默丢弃 | 开放 | ❌ 暂无 |
| 🟢 已修复 | [#8009](https://github.com/agentscope-ai/CoPaw/issues/8009)、[#8129](https://github.com/agentscope-ai/CoPaw/issues/8129)、[#8143](https://github.com/agentscope-ai/CoPaw/issues/8143)、[#8158](https://github.com/agentscope-ai/CoPaw/issues/8158)、[#7995](https://github.com/agentscope-ai/CoPaw/issues/7995) | 已关闭 | ✅ 已合并 |

## 6. 功能请求与路线图信号

- **西班牙语完整 i18n**：[#8160](https://github.com/agentscope-ai/CoPaw/issues/8160) + 同作者 PR [#8161](https://github.com/agentscope-ai/CoPaw/pull/8161)（locale 平价补齐 + 抽取共享 locale 映射），issue/PR 同步推进，落地概率高。
- **HarmonyOS 原生客户端**：[#8164](https://github.com/agentscope-ai/CoPaw/pull/8164)（ArkTS 实现，复用 #7378 RN 客户端的后端契约）——多端覆盖战略的明确信号。
- **插件热更新与回滚**：[#7565](https://github.com/agentscope-ai/CoPaw/pull/7565) 持续活跃评审，将显著改善插件升级体验。
- **Tool Guard 审批卡 i18n**：[#7809](https://github.com/agentscope-ai/CoPaw/issues/7809) 与 #8161 的 i18n 基建呼应，可能随之解决。
- **Hub 账号备注**：[#8152](https://github.com/agentscope-ai/CoPaw/issues/8152)（小改进，易于纳入）。
- coding-cli 容器管理端点 [#8156](https://github.com/agentscope-ai/CoPaw/pull/8156)：多 agent 部署运维能力的补全。

## 7. 用户反馈摘要

- **痛点集中**：Windows 桌面端问题占比高（subAgent 超时 #7678、长路径 #8163、页面加载失败 #8120），桌面端是稳定性短板。
- **静默失败引发信任问题**：embedding 丢批 (#8040)、飞书图片丢弃 (#8150) 均为“表面成功、实际失败”，用户明确要求日志可见性。
- **积极信号**：报告质量普遍很高——#8040 附实证 replay，#8163 给出注册表配置细节，#8153 提供完整 IOC；新手贡献者（#8161、#8010、#8155）持续涌入，社区健康度良好。
- **多语言需求旺盛**：es 语言请求 + 5 种语言补齐 PR 说明国际用户基础在扩大。

## 8. 待处理积压

- 🔴 **[#8153](https://github.com/agentscope-ai/CoPaw/issues/8153) 安全 RCE**：今日新开，需维护者当日响应，建议走私下披露/安全通告流程。
- **[#8065](https://github.com/agentscope-ai/CoPaw/pull/8065)**：skill_name 路径穿越修复（CodeQL 已标记），自 10-01 待审 9 天，涉及安全，建议加速。
- **[#7613](https://github.com/agentscope-ai/CoPaw/pull/7613)**：OpenViking memory 插件，自 09-07 评审中已超一个月。
- **[#8121](https://github.com/agentscope-ai/CoPaw/pull/8121)**：Creator 2.0.1 发布 PR，发布链路卡在合并阶段，注意与 #8163（同插件 bug）联动评估。
- **[#8098](https://github.com/agentscope-ai/CoPaw/pull/8098)**：前台 chat 超时返回结果，小 PR 待合并，与 #7678 subAgent 超时问题可能相关，建议一并核查。

---
*数据来源：GitHub API，统计窗口 2026-10-09 ~ 2026-10-10。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报
**日期：2026-10-10 | 仓库：[gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)**

---

## 1. 今日速览

- 今日项目无 Issue 与 PR 活动（均为 0 条），社区互动处于静默状态。
- 核心动态为发布新版本 **v1.9.28**，持续围绕 TikTok 达人运营（Affiliate）场景迭代商务拓展（BD）功能。
- 项目呈现“**低社区活跃、稳定版本驱动**”的形态：更新由维护者主动推送，功能节奏保持每版本小步快跑。
- 整体健康度评估：版本发布节奏正常，但缺少社区反馈回流，需关注用户参与度。

---

## 2. 版本发布

### ✅ [v1.9.28: TK Copilot v1.9.28](https://github.com/gaoyangz77/easyclaw/releases)

**更新内容：**
- **多店铺达人工作台筛选**：达人工作台（Affiliate workbench）支持多店铺维度筛选。
- **BD 工作范围划分**：为商务拓展人员提供“个人工作台 / 公共工作台”两种范围，便于分工与协作。
- **达人 Excel 导出/导入**：支持达人数据 Excel 导出与导入，实现 BD 人员交接（handoff）流程。
- **差评跟进职责明确化**：在流程层面明确差评跟进的责任归属。

**破坏性变更：** Release Notes 未标注任何破坏性变更。
**迁移注意事项：** 属常规小版本升级（v1.9.x 系列内），预计可直接平滑升级；建议升级前确认工作台权限范围（个人/公共）配置是否符合团队预期。

---

## 3. 项目进展

- 今日无 PR 合并或关闭（0 条）。
- 但 v1.9.28 的发布隐含了近期已完成并合并的 PR 工作：多店铺筛选、Excel 导入导入、BD 交接与差评职责等功能均已落地进入发布版本。
- 项目在达人运营 BD 场景的功能闭环上持续推进，属于渐进式功能增强，无架构级变动信号。

---

## 4. 社区热点

- 今日无活跃 Issue / PR 讨论（0 条）。
- 近期无明显社区热点话题可追踪，建议关注 [Issues 列表](https://github.com/gaoyangz77/easyclaw/issues) 后续动态。

---

## 5. Bug 与稳定性

- 今日无新报告 Bug、崩溃或回归问题（严重程度排序：无）。
- v1.9.28 Release Notes 中亦未提及修复项，本版本为纯功能增强型发布。

---

## 6. 功能请求与路线图信号

- 今日无新增功能请求。
- **从版本轨迹推断的路线图信号：**
  - BD 协作流程（个人/公共工作台、交接机制）是当前迭代主线，后续版本可能继续深化团队协作与权限管理能力。
  - 数据互通能力（Excel 导入导出）已被纳入，可能向更系统化的数据管理（API/批量操作）方向演进。

---

## 7. 用户反馈摘要

- 今日无 Issue 评论可提炼（0 条）。
- 间接信号：本次更新针对 BD 人员的多店铺管理与交接痛点，说明维护者收到了实际运营团队的内部需求反馈——痛点集中在**多人协作分工**与**达人数据交接效率**上。

---

## 8. 待处理积压

- 今日数据范围内未发现长期未响应的 Issue 或 PR（更新数为 0）。
- **维护者提示：** 若存在历史积压 Issue，建议借 v1.9.28 发布之机在 [Issues 页面](https://github.com/gaoyangz77/easyclaw/issues) 做一轮 triage 与清理；同时可通过 Release 公告引导用户反馈，激活社区互动。

---

**总结：** EasyClaw 今日以功能版本发布为主旋律，BD 协作能力持续增强；社区侧零活跃，建议关注用户参与度与反馈渠道建设。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*