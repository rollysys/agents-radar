# OpenClaw 生态日报 2026-09-29

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-29 04:51 UTC

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

# OpenClaw 项目动态日报 — 2026-09-29

---

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**：过去 24 小时 Issues 更新 500 条（新开/活跃 391，关闭 109），PR 更新 500 条（待合并 330，已合并/关闭 170），社区讨论热度与工程吞吐均处于一线开源项目水平。项目今日发布了 **v2026.8.33（extended-stable / LTS 等效通道）**，同时 2026.9.7 修复跟踪 Issue 显示 21 个 P1 候选中已有 18 个进入准备 PR。但需要警惕的是，**2026.9.5/9.6 的 prepared-model-catalog worker 内存泄漏**已成为今日最集中的 P0 报告源（至少 4 个独立 issue），叠加多起 managed update 失败，升级链路稳定性是当前最大风险点。总体判断：功能与修复节奏健康，但 9.x 近期版本存在系统性资源泄漏与升级回归压力。

---

## 2. 版本发布

### v2026.8.33（extended-stable 通道，LTS 等效）
🔗 Release: openclaw/openclaw

- **定位**：gateway-only 的 `extended-stable` 发布，基于 **2026 年 8 月底**的 OpenClaw 代码，叠加关键安全更新、可靠性与性能修复，以及新模型支持等特性。
- **适用人群**：追求稳定、不追新的部署方；当前最新主线版本为 **2026.9.6**。
- **迁移注意**：无明确破坏性变更声明；但由于主线 9.4→9.5/9.6 升级链路问题频发（见第 5 节），生产环境用户可能更应考虑留在该 extended-stable 通道。

---

## 3. 项目进展

今日 PR 活跃以 @steipete 的高产修复为主，重点推进方向：

**稳定性 / 升级链路**
- [#160718](https://github.com/openclaw/openclaw/pull/160718) `fix: refuse incompatible Windows 9.4 schema upgrades`（P0，待 maintainer 审查）——在候选 Doctor 阶段之前拒绝不兼容的 Windows schema 迁移，直击 #150153 系列 Windows 升级失败问题。
- [#158447](https://github.com/openclaw/openclaw/pull/158447) `fix(updater): identify the config-read child by env`（P0，ready for review）——修复 Bun 网关下托管更新 spawn **8462 个子进程**的失控问题。
- [#160946](https://github.com/openclaw/openclaw/pull/160946) `fix: retain shared-state snapshots through worker failures`（XL）——防止快照文件在读完成前被提前释放，对应 #144592。

**性能与架构**
- [#160858](https://github.com/openclaw/openclaw/pull/160858) `refactor(cron): move retention cleanup off the Gateway thread`（XL）——清理工作移出网关主线程，同时修复一个永久删除竞态。
- [#158251](https://github.com/openclaw/openclaw/pull/158251) `fix: keep subagent registration responsive during database contention`（XL，P1）——缓解 SQLite 写锁阻塞子代理注册的问题。
- [#155911](https://github.com/openclaw/openclaw/pull/155911) 优化插件模块 owner 扫描，与 catalog worker 泄漏问题同源，属正面信号。

**功能与体验**
- [#160884](https://github.com/openclaw/openclaw/pull/160884) UI 显示 utility model 实际运行时；[#160968](https://github.com/openclaw/openclaw/pull/160968) 支持按 agent 关闭 settled-turn 补充总结；[#158723](https://github.com/openclaw/openclaw/pull/158723) Doctor 支持外部托管运行时的安全修复；[#158392](https://github.com/openclaw/openclaw/pull/158392) FaceTime 视频通话桥接 OBS 实时画面（实验性）。

**合并/关闭情况**：170 条 PR 合并或关闭，包括社区修复如 Zhipu/Bailian embedding 分批限制修复 [#136868](https://github.com/openclaw/openclaw/pull/136868)。整体上 2026.9.7 的 18/21 P1 候选已就绪，**下一版本修复面较宽，节奏向好**。

---

## 4. 社区热点

1. **#143524（86 评论，P0）** [Agent SQLite WAL 无限增长至 1.4–2.8 GB，阻塞网关启动](https://github.com/openclaw/openclaw/issues/143524) — Windows 单网关环境，`wal_autocheckpoint=1000` 失效，手动 TRUNCATE 后数日内复发。标签已含 `ux-release-blocker`，尚无 fix PR。诉求：**数据层自动 checkpoint 机制失效**是长期运维痛点。

2. **#153257（39 评论，P0）** [2026.9.5 把稳定环境变成 8 小时故障恢复会话](https://github.com/openclaw/openclaw/issues/153257) — 用户明确表达“后悔升级”，涉及 crash-loop 与 session-state。反映 **9.5 升级体验严重滑坡**。

3. **#157531（15 评论，P0）** [2026.9.7 Fixes Tracker](https://github.com/openclaw/openclaw/issues/157531) — 官方修复跟踪帖，18/21 P1 候选已进入 prepared PR，包含隐私/安全等。社区据此判断 9.7 的修复范围。

4. **#159514（8 评论，已关闭）** [catalog worker 每次请求重建注册表，~8 MB/请求不可释放](https://github.com/openclaw/openclaw/issues/159514) — 今日关闭，可能已修复，是 catalog 泄漏家族的关键一环。

5. **PR 热点**：[#160962](https://github.com/openclaw/openclaw/pull/160962)（P1，修复公告期间已接受输入被误判为孤儿导致 turn 失败）今日新开，直击 message-delivery 语义，预计引发较多审查讨论。

---

## 5. Bug 与稳定性（按严重度）

### 🔴 P0 — 资源泄漏家族（prepared-model-catalog worker，2026.9.6）
| Issue | 现象 | Fix PR |
|---|---|---|
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | 4–5 GB/h 单调泄漏，provider 无关 | ❌ 暂无直接 fix（#159514 相关修复已关闭，待验证） |
| [#160548](https://github.com/openclaw/openclaw/pull/160548) → [Issue](https://github.com/openclaw/openclaw/issues/160548) | ~1 GiB/5min，内存回收时 supersede 发布并杀死所有等待 turn | ❌ 无 |
| [#160522](https://github.com/openclaw/openclaw/issues/160522) | isolate 达 1.15 GB，超出 `maxOldGenerationSizeMb: 512` 上限 | ❌ 无 |
| [#156571](https://github.com/openclaw/openclaw/issues/156571) | 9.5：tmp 中 plugin-build 捕获 1–3 GB/min 填满磁盘 | ❌ 无 |

**这是今日最严重的系统性问题，多用户独立复现，建议维护者优先归因。**

### 🔴 P0 — 升级/启动链路
- [#154114](https://github.com/openclaw/openclaw/issues/154114) `openclaw update` 候选演练失败（"No usable, authenticated, tool-capable inference route"）— ❌ 无 fix PR
- [#145192](https://github.com/openclaw/openclaw/issues/145192) 9.2→9.4 升级在 candidate-Doctor 失败并回滚到已迁移状态 — 对应 PR #160718 ✅ 进行中
- [#156986](https://github.com/openclaw/openclaw/issues/156986) 更新卡死 + worker respawn 循环，用户被困在 9.5 — ❌
- [#156917](https://github.com/openclaw/openclaw/issues/156917) state-lifecycle lease 无心跳/强制接管，一个挂起客户端阻塞网关启动 31 分钟 — ❌
- [#158239](https://github.com/openclaw/openclaw/issues/158239) 旧内核（<5.6）JS fs-safe 回退下网关无法启动 — ❌
- [#160521](https://github.com/openclaw/openclaw/issues/160521) 状态库 read-admission seal → reconcileActive 未处理 rejection 崩溃 — ❌（9.28 新报）
- [#156424](https://github.com/openclaw/openclaw/issues/156424) audit_events 索引腐化致网关瘫痪（2 起） — ❌

### 🟠 P1 — 会话/消息状态
- [#159612](https://github.com/openclaw/openclaw/issues/159612) 子代理结算无限重试 "owner changed before settlement"，每 turn 重注入结果 — ❌
- [#137710](https://github.com/openclaw/openclaw/issues/137710) Codex 完成已记录但不唤醒 yield 父会话 — 有 linked PR
- [#155396](https://github.com/openclaw/openclaw/issues/155396) Codex 普通 tool turn 在 final-answer 恢复期 `provenance_rejected` 丢答案 — ❌
- [#121661](https://github.com/openclaw/openclaw/issues/121661) CLI 子代理 announce-wake 无工具运行，模型**伪造工具调用及其输出** — ❌（对 AI 助手可信度影响大）
- [#97616](https://github.com/openclaw/openclaw/issues/97616) hook/tool 僵尸进程累积 — 长期未修，回归类

---

## 6. 功能请求与路线图信号

- **[#155633](https://github.com/openclaw/openclaw/issues/155633) Databricks Unity Gateway 作为官方 provider** — 已有实现 PR #155634，**大概率进入下版本**，面向企业合规流量路由。
- **[#16670](https://github.com/openclaw/openclaw/issues/16670) Onboarding 向导强制配置 Memory/Embedding** — 长期诉求（2 👍），memory 是 OpenClaw 核心卖点但 setup 完全不引导，属低成本高收益改进。
- **[#120244](https://github.com/openclaw/openclaw/issues/120244) RFC：cron 维护窗口 + 角色隔离** — 延后非轮换 cron 并 FIFO 重放，已有前序 PR #79192，属路线图延续。
- **[#122403](https://github.com/openclaw/openclaw/issues/122403)（已关闭）Control UI 模型选择器显示本地/云端来源** — 数据已有，只差展示层。
- **[#148298](https://github.com/openclaw/openclaw/issues/148298) 子代理生命端到端回归测试覆盖** — 直指近期大量 session-state bug 的根因（单测过、集成断），维护者已表态关注，是 9.7+ 质量投资信号。
- FaceTime 直播画面（PR #158392）、per-agent settled-turn 退出（PR #160968）已在 PR 阶段，功能面持续扩张。

---

## 7. 用户反馈摘要

**痛点（高频出现）**
- **升级即事故**：“升级 9.5 前环境稳定，升级后是 8 小时的故障恢复”（#153257）；多用户被困在 9.4/9.5 无法升级（#156986、#154924、#147160、#148681）。
- **内存/磁盘失控**：闲置网关数小时内吃掉 8–13 GB 内存或填满磁盘（catalog worker 家族），小内存主机（8 GB）直接 OOM。
- **消息丢失/子代理结果无法送达**：yield 父会话不被唤醒、结算无限重试、伪造工具输出——用户对**任务结果可靠性**的不满最集中。
- **Windows/边缘环境体验差**：计划任务冷启动挂 5–7 分钟（#140161）、WAL 阻塞启动（#143524）。
- **慢速/老内核主机**（Synology 等）被新版本抛弃感（#158239）。

**满意点**
- extended-stable（LTS）通道的推出受到稳定型用户欢迎，发布说明清晰。
- 官方 Fixes Tracker（#157531）透明度高，社区可实时看到 9.7 修复进度。
- 错误信息改进类 PR（#160869 "Gateway is draining" → 明确文案）显示团队在重视可诊断性。

---

## 8. 待处理积压（建议维护者关注）

| Issue/PR | 问题 | 状态 |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | WAL 无限增长（86 评论，9.9 提出，已 20 天） | P0，无 fix PR，**最高优先积压** |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 僵尸子进程累积（6.29 提出，3 个月） | P1，仅评审中 |
| [#84037](https://github.com/openclaw/openclaw/issues/84037) | Codex app-server 稳态 CPU 过高（5.19 提出，4 个月+） | P1，未解决 |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | prompt cache 跨边界失效（7.8 提出，近 3 个月，标记 stale） | P2，涉及安全审查，成本影响大 |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | Onboarding 缺 Memory 配置（2.15 提出，7 个月+） | P2，产品决策待定 |
| [#121187](https://github.com/openclaw/openclaw/issues/121187) | NO_REPLY 被错误重试 | P1，linked PR open，8 月至今 |
| PR [#136554](https://github.com/openclaw/openclaw/pull/136554) | 子代理 termination vs timeout 区分 | P1，waiting on author 近 1 个月 |
| PR [#147611](https://github.com/openclaw/openclaw/pull/147611) | 工具密集 turn 在拒绝后停止 | P1，ready for review 半月，**建议尽快审查** |

---

**健康度小结**：社区参与度与修复吞吐均为顶级水准（日处理 500 issue/PR 更新），2026.9.7 修复管道充实；但 9.5/9.6 引入的 catalog worker 泄漏族与升级链路回归尚未见系统性 fix PR，若 9.7 不能收敛这两类问题，extended-stable 通道将成为用户的实际避风港，值得维护层警惕。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**数据周期：2026-09-29**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**“架构深化 + 质量补强”并行阶段**：以 OpenClaw 为代表的头部项目日吞吐达数百条 Issue/PR，中型项目普遍围绕 gateway 拆分、subagent 架构、多渠道消息投递进行系统性重构。生态的共同特征是**功能扩张速度超过质量收敛速度**——资源泄漏（OpenClaw）、升级链路静默失败（NanoClaw）、撤销语义缺陷（Zeroclaw）等稳定性问题集中涌现，多个项目正为此建立 LTS 通道（OpenClaw extended-stable）或引入社区可靠性审计（Hermes）。消息渠道矩阵（Telegram/飞书/QQ/DingTalk/Slack）与多 Provider 接入仍是差异化竞争主战场，而治理风险开始显现（PicoClaw 出现社区接管 Fork）。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（开/关） | PR 更新（开/合） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（391/109） | 500（330/170） | ✅ v2026.8.33 (LTS) | 🟢 一线活跃，但 9.5/9.6 泄漏族 P0 未收敛 |
| **Zeroclaw** | 50（28/22） | 50（38/12） | ❌ | 🟢 快速推进 v0.9.0 网关拆分，PR 积压偏大 |
| **Hermes Agent** | 50（49/1） | 50（47/3） | ❌ | 🟡 高活跃但“关闭即回归”信号 + 审查瓶颈严重 |
| **NanoBot** | 7（6/1） | 27（17/10） | ❌ | 🟢 健康迭代，审查吞吐成瓶颈 |
| **NanoClaw** | 4（1/3） | 31（13/18） | ❌ | 🟢 密集加固期，响应闭环快（1-3 天） |
| **CoPaw** | 8（5/3） | 19（13/6） | ❌（2.2.2 beta） | 🟢 良性节奏，当日 bug 当日 fix |
| **NullClaw** | 17（1/16） | 6（0/6） | 🟡 v20260929（PR 已关） | 🟢 集中清偿积压，健康 |
| **LobsterAI** | 5（4/1） | 13（1/12） | ❌（release/9.24 打磨中） | 🟢 开发强、社区分诊滞后 |
| **PicoClaw** | 6（5/1） | 10（10/0） | ❌ | 🔴 官方维护缺位，出现活跃 Fork（#3398） |
| **IronClaw** | 1（1/0） | 5（4/1） | ❌ | 🟡 稳定维护，靠自动化流水线维持 |
| **ZeptoClaw** | 2 | 1 | ❌ | 🟢 个人自驱，节奏健康但规模小 |
| **EasyClaw** | 0 | 0 | ✅ v1.9.25 | 🟡 交付稳定，社区沉寂 |
| **TinyClaw / Moltis** | 0 | 0 | ❌ | ⚪ 无活动 |

**分层结论**：OpenClaw 独占第一梯队（吞吐量约为第二梯队的 10 倍）；Zeroclaw/Hermes 为架构重构型高活跃梯队；NanoBot/NanoClaw/CoPaw/NullClaw/LobsterAI 为健康迭代梯队；PicoClaw 为治理风险特例。

---

## 3. OpenClaw 在生态中的定位

**社区规模**：日 Issue/PR 更新各 500 条，是生态内无可争议的流量与贡献者中心；LobsterAI、NanoClaw 等项目直接围绕 OpenClaw 网关做集成/适配，形成事实上的“核心 + 卫星”结构。

**技术路线差异**：
- OpenClaw 主线为 **gateway-centric 单体架构**，以 managed update、Doctor 自修复、extended-stable 通道为特色——升级链路的复杂度既是卖点也是当前最大风险源（spawn 8462 子进程、WAL 无限增长、catalog worker 泄漏）；
- Zeroclaw 走 **网关拆分 + RPC core parity**（v0.9.0）路线，架构更激进但更早；
- NanoBot/CoPaw/NullClaw 偏轻量多渠道个人助手；NanoClaw 走容器化 + 凭据网关（Iron/OneCLI）隔离路线。

**相对优势**：修复管道充实（9.7 已就绪 18/21 P1）、Fixes Tracker 透明度高、LTS 通道覆盖稳定型用户。**相对劣势**：9.x 近期版本的资源泄漏族与升级回归在其规模下影响面最大——多个 issue 显示用户“后悔升级”，extended-stable 正成为实际避风港，对主线信任度构成压力。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **升级/更新链路可靠性** | OpenClaw（#153257 等 6+ P0）、NanoClaw（#3961 静默失败）、PicoClaw（#3400 配置迁移）、LobsterAI（#2772/2774） | “报 complete 但实际未升级”的静默失败是共性硬伤；多项目在补 liveness probe、回滚、schema 迁移保护 |
| **多渠道消息投递正确性** | NanoBot（Feishu/Slack/Telegram）、CoPaw（QQ 重投）、NullClaw（DingTalk/Email/飞书）、Zeroclaw（WeCom）、LobsterAI（NimGateway） | 重连去重、格式化渲染、内部标记不泄漏到用户侧 |
| **Subagent 架构与结果投递** | OpenClaw（#159612/#121661）、NanoBot（#5954/#5811）、Zeroclaw（委托子循环） | 子代理结算、唤醒父会话、权限继承是普遍短板 |
| **上下文/压缩治理** | Zeroclaw（缓存前缀失效）、ZeptoClaw（超限输出 spill 落盘）、Hermes（深度压缩 lineage）、OpenClaw（settled-turn 总结） | 压缩后恢复、缓存成本、输出溢出处理 |
| **资源泄漏/进程治理** | OpenClaw（catalog worker 泄漏、僵尸进程）、Hermes（插件加载失败、gateway 死亡）、NanoClaw（容器残留） | 闲置资源占用、僵尸子进程回收 |
| **企业/受限环境部署** | Zeroclaw（RBAC/OIDC）、CoPaw（air-gapped 市场源）、NanoClaw（HTTPS 代理、自建 CA）、OpenClaw（Databricks） | 身份体系、私有化部署是付费场景刚需 |
| **本地/边缘模型兼容** | NullClaw（LM Studio/llama）、Hermes（LM Studio 流式循环）、LobsterAI（QWEN）、NanoBot（Copilot/gpt-6） | 本地 LLM 解析、流式终止防御 |
| **Agent Skills 生态标准化** | Zeroclaw（.well-known 索引）、NullClaw（agentskills.io 收录） | 跨客户端技能互操作正在形成标准 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能网关 + managed update + 自修复（Doctor） | 生产部署方、稳定型 LTS 用户 | gateway 单体 + extended-stable 双通道 |
| **Zeroclaw** | 安全/身份（authority recheck、principal scope）、v0.9.0 网关拆分 | 企业/多租户用户 | RPC core parity、Schema V4、运行时插件化 |
| **Hermes Agent** | Desktop/TUI/Gateway 三端 + memory（Hindsight） | 多平台个人用户、本地模型用户 | 跨表面会话（CLI↔Telegram↔Desktop） |
| **NanoBot** | 多渠道 + 广接 Provider + TUI/WebUI | 多渠道多 Provider 部署者 | Python 生态，渠道适配层厚 |
| **NanoClaw** | 容器化升级流程 + 凭据网关 | 容器/企业内网/家庭实验室 | 网关无关化演进中（Iron/OneCLI 适配器剥离） |
| **CoPaw / NullClaw / LobsterAI** | 桌面端体验、办公文档（LobsterAI ppt/word/excel）、中文渠道矩阵（QQ/飞书/DingTalk） | 中文个人生产力用户 | 国内生态深度绑定，轻量单体 |
| **PicoClaw / ZeptoClaw / EasyClaw** | 嵌入式（32 位 ARM）/轻量 CLI/电商达人运营 | 细分场景用户 | 资源受限或垂直业务定制 |

**关键分野**：英文生态项目（Zeroclaw/Hermes/NanoClaw）重架构与企业能力；中文生态项目（CoPaw/NullClaw/LobsterAI/EasyClaw）重渠道覆盖与办公场景落地。

---

## 6. 社区热度与成熟度分层

- **快速迭代/架构演进期**：Zeroclaw（v0.9.0 拆分 + Schema V4）、LobsterAI（文档编辑大型功能）、NanoBot（subagent 重构）
- **质量巩固/密集加固期**：OpenClaw（9.7 修复管道 + LTS 通道）、NanoClaw（升级流程收敛）、CoPaw（2.2.2 beta 收尾）、NullClaw（积压清偿）
- **风险预警区**：
  - **Hermes**——49 开/1 关、47 待合并 vs 日合并 3 条，“过早关闭”审计回归 14 条，审查瓶颈与质量问题叠加；
  - **PicoClaw**——官方零 review + stale bot 误杀 + 社区 Fork 宣言，是生态内治理恶化的典型样本；
  - **IronClaw/EasyClaw**——自动化/单维护者驱动，社区互动近乎为零，可持续性依赖个体。

---

## 7. 值得关注的趋势信号

1. **“升级可靠性”成为新的信任分水岭**：OpenClaw“8 小时故障恢复”、NanoClaw“报 complete 实未升级”表明，在自更新型 agent 产品中，升级链路的事故代价已超过功能缺失——LTS 通道、liveness-gated cutover、回滚保证将是标配能力。

2. **静默失败比崩溃更伤信任**：Hermes 插件静默加载失败、PicoClaw 跨会话数据串扰、CoPaw“会话永久死亡”——用户对“没有可见错误”的容忍度最低，可观测性与自愈（Doctor/一键修复）是高杠杆投资。

3. **安全语义从“准入”转向“撤销后”**：Zeroclaw 集中涌现的 revocation/authority recheck Bug 族预示，agent 权限模型的下一战场是**权限撤销后的传播与隔离**（环境变量恢复、队列所有权、memory scope），而不仅是初始授权。

4. **Agent Skills 标准化互操作窗口开启**：.well-known 发现索引、agentskills.io 客户端收录，技能生态正在从各项目私有格式走向标准协议，早期对接者将获得生态红利。

5. **企业/受限环境需求集中爆发**：RBAC、air-gapped 部署、私有 CA、HTTPS-only 代理出口在 4+ 项目同时出现，说明个人 agent 正快速“组织化”，身份与合规能力将成商业化分水岭。

6. **本地模型与长上下文场景暴露客户端防御缺口**：LM Studio 无限流式循环、3×200k 并发通知失效、超限工具输出丢弃——agent 框架需要为“不受控端点”和“超大规模上下文”建立资源护栏。

7. **治理健康度 = 维护者响应带宽**：PicoClaw（Fork 分裂）与 Hermes（回归循环）对比 CoPaw（当日闭环）表明，在贡献供给充足的生态中，**review 吞吐而非代码产出**才是项目健康度的真正约束变量——stale bot 误杀有效贡献的做法值得各项目警惕。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-09-29）

## 1. 今日速览

NanoBot 今日保持高活跃度：过去 24 小时共更新 **7 条 Issues**（新开/活跃 6，关闭 1）和 **27 条 PR**（待合并 17，已合并/关闭 10），无新版本发布。社区贡献热情显著，今日新增多个来自 @Bdysj、@chengyongru 等活跃贡献者的修复与功能 PR，覆盖 Slack/Telegram 渠道、TUI、Provider 重试、Cron 等多个模块。同时暴露出若干值得关注的稳定性问题，包括 P1 级 sudo 死循环 Bug 和长期存在的并发文件写入数据损坏问题。总体看，项目处于“功能迭代 + 质量补强”并行的健康状态，但文件工具原子写入与并发安全是亟需补齐的短板。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭/合并 10 条 PR，要点如下：

- **[#5958](https://github.com/HKUDS/nanobot/pull/5958)（已关闭）fix(tui): keep unknown terminal themes readable** — 修复终端无法响应 OSC 10/11 探测时回退到深色主题 RGB 导致浅色终端文字不可见的问题，改用终端默认前景/背景色。其后续改进为今日新开的 [#5959](https://github.com/HKUDS/nanobot/pull/5959)（未知主题下状态动画），问题追踪关联 Linear NAN-201，显示维护者在快速迭代闭环。
- **[#5949](https://github.com/HKUDS/nanobot/pull/5949)（已关闭）fix(web): propagate web_fetch failures as structured tool errors** — 修复 `web_fetch` 失败被误报为成功工具执行的问题，使其遵循 harness 错误生命周期并提供恢复指引。涉及安全语义，是工具链可靠性的重要改进。
- **[#1355](https://github.com/HKUDS/nanobot/pull/1355) / [#1443](https://github.com/HKUDS/nanobot/pull/1443)（均已关闭，标记 conflict）** — 两条 2-3 月的老 PR（图像重复提及、heartbeat 推理解耦）因冲突关闭。其中 heartbeat 静默推理的需求由 [#4549](https://github.com/HKUDS/nanobot/pull/4549) 等新 PR 继续承接，属正常的新老交替。

**整体评估**：合并集中在 TUI 渲染与工具错误处理等用户体验层面，边际改进明显但无架构级变更；待合并队列中仍有 17 条 PR，合并吞吐稳定。

## 4. 社区热点

评论最多的讨论（按互动量排序）：

1. **[#5924](https://github.com/HKUDS/nanobot/issues/5924) Agent 卡死在 sudo 循环（5 评论，P1）** — 最热话题。sudo 授权仅单轮有效，agent 反复请求授权陷入死循环；且达到最大迭代后 agent 对失败命令“执念化”，即使继续会话也无法恢复。用户 @kkayam 反映该问题使 agent 完全不可用，属执行链路上权限管理的核心缺陷。
2. **[#5903](https://github.com/HKUDS/nanobot/issues/5903) Feishu 内部 checkpoint 标记泄露给用户（4 评论）** — 空闲自动压缩后，内部标记消息 "Continue the active task from the working-memory checkpoint above." 被当作普通聊天消息发送给用户，暴露了 `_hidden` 消息在 compaction 路径上的持久化/投递漏洞。
3. **[#5908](https://github.com/HKUDS/nanobot/issues/5908) WebUI 流式回复显示实时 tokens/sec（4 评论，P2）** — 功能请求，用户希望在流式输出时看到实时速度指标以判断模型是否卡顿，反映用户对可观测性的诉求。
4. **[#5898](https://github.com/HKUDS/nanobot/issues/5898) v0.3.5 不支持 GitHub Copilot 通道下的 gpt-6 系列（3 评论）** — Provider 兼容性问题，报 "Model provider request failed"。

**诉求分析**：热点集中在两类——多渠道（Feishu/Slack/Telegram）消息投递的正确性，以及模型接入的广泛兼容性（Copilot/Vertex/MiniMax），说明用户群以多渠道部署 + 多 Provider 场景为主。

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | 问题 | 状态 / Fix PR |
|---|---|---|
| **P1** | [#5924](https://github.com/HKUDS/nanobot/issues/5924) sudo 授权单轮失效导致 agent 死循环，完全不可用 | 暂无 fix PR |
| **P0（PR 侧）** | [#5953](https://github.com/HKUDS/nanobot/pull/5953) 文件工具原子写入，防止 torn content 与崩溃窗口数据丢失 | 已有 fix PR 待审 |
| 高 | [#4798](https://github.com/HKUDS/nanobot/issues/4798) 跨会话并发写文件无文件锁，导致数据损坏（7 月至今未修复） | 与 #5953 部分重叠，尚无完整锁方案 |
| 中 | [#5903](https://github.com/HKUDS/nanobot/issues/5903) Feishu 泄露内部 checkpoint 消息 | 暂无 fix PR |
| 中 | [#5956](https://github.com/HKUDS/nanobot/issues/5956) compaction started/succeeded 两阶段通知都发到源频道，且 Feishu 无法 in-place 编辑关闭 | 暂无 fix PR（同类 #5784） |
| 中 | [#5898](https://github.com/HKUDS/nanobot/issues/5898) Copilot 通道不支持 gpt-6 系列 | 暂无 |
| 低 | [#5961](https://github.com/HKUDS/nanobot/pull/5961) Slack 带按钮消息超 3000 字符静默截断 | 已有 fix PR |
| 低 | [#5960](https://github.com/HKUDS/nanobot/pull/5960) Telegram Markdown→HTML 渲染破坏含 `__`/`"` 的链接 URL | 已有 fix PR |
| 低 | [#5963](https://github.com/HKUDS/nanobot/pull/5963) 429 重试提示无法解析 `1m30s` 复合时长 | 已有 fix PR |
| 低 | [#5962](https://github.com/HKUDS/nanobot/pull/5962) cron 接受非正数间隔产生永不运行的任务 | 已有 fix PR |
| 低 | [#5957](https://github.com/HKUDS/nanobot/pull/5957) exec 会话硬超时不依赖轮询强制执行 | 已有 fix PR |

已关闭：[#5843](https://github.com/HKUDS/nanobot/issues/5843)（长会话 BUILD 阶段 10s+ 延迟）已关闭，0 评论，疑似自行解决或重复。

## 6. 功能请求与路线图信号

可能进入下一版本的功能：

- **WebUI 实时 tokens/sec 指标**（[#5908](https://github.com/HKUDS/nanobot/issues/5908)）— 社区讨论充分（4 评论）、实现路径清晰，配合近期 WebUI 持续投入，纳入概率高。
- **Claude on Vertex AI Provider**（[#5955](https://github.com/HKUDS/nanobot/pull/5955)）— 使用 `AsyncAnthropicVertex` + ADC 凭证，是典型的 Provider 扩展方向（同类还有 [#5945](https://github.com/HKUDS/nanobot/pull/5945) Unbrowse reader、[#5212](https://github.com/HKUDS/nanobot/pull/5212) MiniMax 音乐指引），符合项目“广接 Provider”的路线。
- **子代理并发结果聚合通知**（[#5954](https://github.com/HKUDS/nanobot/pull/5954)）与 **子代理会话持久化重构**（[#5811](https://github.com/HKUDS/nanobot/pull/5811)）— 表明 subagent 架构是当前演进重点。
- **Telegram topic 自动重命名为会话标题**（[#5902](https://github.com/HKUDS/nanobot/pull/5902)）— 抽出共享 `session.titles` 模块，同时惠及 WebUI，方向被认可但存在 conflict 待解决。
- **Heartbeat 便宜模型覆盖**（[#4549](https://github.com/HKUDS/nanobot/pull/4549)）— 承接已关闭 #1443 的需求，成本优化方向持续有需求。

## 7. 用户反馈摘要

- **痛点一：授权与执行循环**（#5924）：用户在需要 sudo 的任务中体验极差，agent 无法记住授权状态，达到迭代上限后行为退化，需手动干预甚至重启会话。
- **痛点二：内部机制“漏到用户面前”**（#5903、#5956）：Feishu 用户看到 compaction 的技术性提示文本，既影响观感也暴露实现细节；用户明确要求这类通知可关闭或合并为单条 in-place 更新。
- **痛点三：数据安全焦虑**（#4798）：多会话并发编辑同一文件的场景下出现内容交错/损坏，属用户对“把工作交给 agent”的信任底线问题。
- **痛点四：Provider 兼容滞后**（#5898）：希望通过 GitHub Copilot 通道用上新模型（gpt-6 系列）的用户受阻于版本兼容。
- **满意点**：从 PR 贡献面看，社区对多渠道（Slack/Telegram/Feishu）、TUI 体验、WebUI 可观测性等方向有强烈参与意愿，功能请求（如 tokens/sec）措辞建设性，整体社区氛围积极。

## 8. 待处理积压

- **[#4798](https://github.com/HKUDS/nanobot/issues/4798) 并发文件写入损坏**（7 月 6 日开，仅 2 评论）— 近 3 个月未实质响应。今日 [#5953](https://github.com/HKUDS/nanobot/pull/5953) 解决了原子写入，但跨会话文件锁仍无方案，建议维护者明确该 Issue 与 #5953 的覆盖关系并给出路线。
- **[#5924](https://github.com/HKUDS/nanobot/issues/5924) sudo 死循环（P1）** — 5 评论、影响可用性，尚无对应 fix PR，建议优先排期。
- **长期 open 的带 conflict 标记 PR**：[#5302](https://github.com/HKUDS/nanobot/pull/5302)（8 月，Dream 工具注册表不匹配）、[#5539](https://github.com/HKUDS/nanobot/pull/5539)（8 月，ToolLoader 日志占位符）、[#4549](https://github.com/HKUDS/nanobot/pull/4549)（6 月，heartbeat modelOverride）— 均为有效贡献但长期冲突未 rebase，存在贡献者流失风险，建议维护者主动协调。
- **待合并队列 17 条 PR** 中多条已完成测试（如 #5953、#5957、#5960-5963），审查吞吐是当前维护侧的主要瓶颈。

---
*数据来源：NanoBot GitHub Issues/PRs，统计窗口 2026-09-28 至 2026-09-29。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-09-29

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 28，关闭 22），PR 更新 50 条（待合并 38，合并/关闭 12），无新版本发布。项目主线明显聚焦于 **v0.9.0 网关拆分（gateway split）与 RPC 核心对等（core parity）**，多位核心贡献者（@JordanTheJet、@Audacity88 等）持续提交 XL 级大型 PR。同时，安全方向出现一批 S0 级身份/授权（identity-access）相关 Bug 集中披露，值得维护者优先跟进。整体健康度：开发节奏快、issue 响应及时（多数状态标签维护良好），但待合并 PR 积压（38 个）较大。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

**已关闭/合并的重要项：**

- **#11175（已关闭）feat(zerocode): 标准 composer 编辑能力** — 为 ZeroCode 聊天/代码 composer 增加 undo/redo、键盘选择、全选、剪切/复制、按词删除，连续输入合并为单一 undo 步，对应 Issue [#10909](https://github.com/zeroclaw-labs/zeroclaw/issues/10909)。注意该 PR 状态为 CLOSED 而非 merged，需确认是被拒绝还是被后续分支取代。
- **#10121（已关闭）Code/ACP 轮次中途退出导致部分对话丢失** — S0 数据丢失 Bug 关闭，ZeroCode 会话持久化可靠性提升。
- **#10778（已关闭）多模态图片上限驱逐改写历史消息并使缓存前缀失效** — Anthropic 提供商缓存正确性修复落地。
- **#10785（已关闭）ZeroCode 通知延迟误取消所有运行中 turn** — 高负载（3 个 ~200k token ACP 会话）场景下的稳定性修复。
- **#10164（已关闭）`block_high_risk_commands = false` 未被尊重** — 安全策略配置语义修复。
- **#10195（已关闭）manifest schema 校验器每次配置解析都重新编译** — 性能优化任务完成。
- **#10644 / #10645（已关闭）** 委托（delegate）子循环的成本追踪上下文与后台委托结果绑定 owner principal，agent-loop 安全闭环推进。

**进行中的大型主线（今日均有更新）：**

- **#11205 + #11223** — 权限撤销后的 authority recheck 基础设施（含对抗性评审修订 Rev 2 及测试 ratchet），直接回应 #11197/#11126 等撤销语义 Bug。
- **#11176（P4）/ #11182（P6）/ #11169（P5）** — v0.9.0 core-parity 车道持续推进：cron/memory/skills/personality、workspace/catalog/pairing/channels、SOP 等方法在 RPC 侧与 HTTP 路由对齐，为网关拆分铺路，其中 #11176 顺带关闭了 cron 预审批绕过。
- **#11218 / #11217** — 配置 Schema V4 迁移：迁移废弃键 + 修复缺失 `schema_version` 时被错误按 V1 处理的问题（继承自 #8754 的工作）。
- **#11224** — 让 `backup.encrypt/compress/destination_dir` 真正生效（此前 encrypt=true 仍写明文拷贝），现用 ChaCha20-Poly1305 STREAM 构造加密。
- **#11212** — WeCom WS 通道支持外发图片/文件（三步分块上传 mint media_id）。

整体评估：今日关闭 22 个 Issue + 12 个 PR，安全修复与 v0.9.0 架构改造双线快速推进，属于高产出的一天。

## 4. 社区热点

- **[#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549)（12 评论，已关闭）RFC: 简化 RFC 投票流程** — 移除强制讨论窗口（48/72 小时）、REVISE 中止当前快照。反映社区治理流程的元优化诉求：固定等待期未带来更多评审反而拖慢节奏。
- **[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)（10 评论）多租户部署的 per-sender RBAC** — 诉求明确：企业用户需要按消息发送者划分角色。9-28 更新明确采用收窄方案（基于既有 agent/risk-profile，放弃独立 RBAC 子系统），#11068 草稿已开。
- **[#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)（9 评论）插件自有 Kanban 看板** — 已在 #9496 下移出 RFC 队列，#11081 交付通用 per-instance 持久状态后，插件本体开发即将展开。
- **[#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)（8 评论，已关闭）.well-known agent-skills 发现索引安装技能** — 对接 Agent Skills 工作组标准化（Cloudflare 内部使用、Vercel 已支持），生态互操作性信号强烈。

## 5. Bug 与稳定性（按严重程度）

**S0 / P0（数据丢失 / 安全风险，今日活跃）：**

| Issue | 问题 | Fix 状态 |
|---|---|---|
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) P0 | 委托 memory 工具丢失 principal scope，子代理可能跨私有内存平面访问 | 已接受，尚无明确 fix PR |
| [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) P0 | 会话 resume 在 admin 权限被撤销后仍恢复已转发的环境变量 | 关联 #11205 recheck 基础设施进行中 |
| [#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) P1 | 队列中会话操作保留已撤销的管理员所有权绕过 | [#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) 为**部分**实现，Issue 明确警告不能视为完整修复 |
| [#11123](https://github.com/zeroclaw-labs/zeroclaw/issues/11123) P1 | SOP 执行接受通配符工具选择器而无需 tools:execute | 暂无 fix PR |

**已修复/关闭：**

- [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136) P1 **已关闭** — 并行 `file_edit/file_write` 同路径静默丢写（S0 数据丢失）。
- [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) **已关闭** — 图片驱逐破坏 Anthropic 缓存前缀。
- [#10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121) **已关闭** — ACP turn 中途退出丢对话。
- [#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785) **已关闭** — 通知延迟导致所有运行中 turn 被取消。
- [#9708](https://github.com/zeroclaw-labs/zeroclaw/issues/9708) **已关闭** — daemon 启动器 stdout/stderr 日志无上限。
- [#10887](https://github.com/zeroclaw-labs/zeroclaw/issues/10887) **已关闭** — 无视觉能力时因纯文本中形似图片标记导致整轮失败。

⚠️ 值得警惕：**撤销（revocation）语义类 Bug 正在集中涌现**（#11197/#11126/#11123/#11198 均属 identity-access），#11205 authority recheck 是系统性回应，建议加速评审。

## 6. 功能请求与路线图信号

- **v0.9.0 网关拆分**是最明确的版本主线：#11001 车道下 P4(#11176)/P5(#11169)/P6(#11182) 密集推进，#11185（session-owned turns）、#11187（应用层 DefaultCapabilities）为配套架构改造 — 预计构成下一版本核心。
- **Schema V4**：#11218（继承 #8754）落地废弃键迁移与 `schema_version` 缺失修复，破坏性配置变更在推进中，**用户需关注迁移公告**。
- **#8850 插件化改造 tracker**：编译期 feature flag → 运行时插件，已落地 host sockets/工具 egress grant/manifest provides 镜像准入，剩余通道构造与路由。
- **#10315 浏览器 enrollment frontdoor**：#10525/#11089 已合并，#11099（链接+QR 输出）待合并。
- **#4853 .well-known skills** 已关闭，可能进入技能生态优先项。
- **#7824 WeCom 主动消息**：配套 #11212（媒体外发）今日开 PR，落地概率高。

## 7. 用户反馈摘要

- **长上下文/多会话重度用户**痛点突出：#10785（3×200k 会话并发）反映通知同步在高负载下脆弱；#10778 反映缓存前缀失效直接推高 API 成本。
- **企业/多租户用户**持续推动 RBAC（#5982）、pairing token 绑定 roster 用户（#10573）、OIDC 收尾（#8289），身份体系是付费场景刚需。
- **配置语义一致性**是高频不满来源：#10164（开关不生效）、#11224（backup.encrypt 写明文）、#11217（缺 schema_version 被当 V1 迁移）——用户期望“配置写了就生效”。
- **正面信号**：ZeroCode composer 编辑（#10909）、agent 批量删除（#10244）等 UX 改进显示桌面端体验在补课；issue 状态快照（"Current status — 2026-09-28"）维护规范，社区透明度高。

## 8. 待处理积压

- **[#8754](https://github.com/zeroclaw-labs/zeroclaw/pull/8754)** — 7-06 开启的 Schema V4 大切割 PR，挂起近 3 个月，标注 `needs-author-action`；其有效部分正被 #11218 继承，建议明确关闭/归档以减少评审噪音。
- **[#10425](https://github.com/zeroclaw-labs/zeroclaw/pull/10425)** — RFC #6954 内部 principal 信封（cron），8-28 开启，`needs-maintainer-review`，涉及 cron 预审批安全语义，应优先处置。
- **[#11009](https://github.com/zeroclaw-labs/zeroclaw/issues/11009)** — agent 别名改名不级联权限配置选择器，P2 高风险，9-20 开启，需关注。
- **[#10592](https://github.com/zeroclaw-labs/zeroclaw/pull/10592) / [#11099](https://github.com/zeroclaw-labs/zeroclaw/pull/11099)** — relay 自助 enrollment 系列，长期 open，依赖已满足，可推进合并。
- **整体积压**：38 个待合并 PR 中 XL 级占比高且多存在 stacked/依赖关系（如 #11223→#11205、#11185→#11167），建议维护者按依赖拓扑梳理合并顺序，避免评审瓶颈。

---
*数据来源：Zeroclaw GitHub Issues/PRs（截至 2026-09-29）*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-09-29）

## 1. 今日速览

Hermes Agent 今日保持高度活跃：过去 24 小时内 Issues 更新 50 条（新开/活跃 49，关闭仅 1），PR 更新 50 条（待合并 47，已合并/关闭 3），无新版本发布。项目处于功能快速迭代与 Bug 修复并行阶段，桌面端（Desktop）、TUI、Gateway 三大组件均有大量活跃工作流。今日最突出的事件是社区可靠性审计（umbrella #127076）产出约 14 条“过早关闭”回归追踪 Issue，集中暴露了历史修复不彻底的问题；同时维护者 @kvnloo 密集提交约 10 个文档修正 PR，反映出文档债务清理正在系统化推进。整体健康度：活跃度高，但“关闭即回归”的质量信号值得维护团队警惕。

## 2. 版本发布

今日无新版本发布。（最新讨论中提及 v0.21.5 / v0.25.1 为用户环境版本，非今日发布。）

## 3. 项目进展

今日合并/关闭的 PR 仅 3 条，其中值得注意的：

- **PR #121720 [已关闭]** — Desktop 端 Skills & Tools 批量分类/工具组开关功能，解决 Capabilities 页面逐项点击的低效问题（一次启用 16 个 Creative skills 此前需逐个点击）。[链接](https://github.com/NousResearch/hermes-agent/pull/121720)

待合并管道（47 条）质量较高，重点包括：

- **PR #124787 (P0)**：规范化 workspace pin key 为解析后路径，修复 macOS `/private/var` 符号链接导致缓存不一致。[链接](https://github.com/NousResearch/hermes-agent/pull/124787)
- **PR #126749 (P1)**：插件加载失败重试机制，修复非正常重启后平台（如 Telegram）永久搁浅的问题，对应 #126356。[链接](https://github.com/NousResearch/hermes-agent/pull/126749)
- **PR #125054 (P2)**：修复深度压缩 lineage 中段 ID 恢复会话失败的问题。[链接](https://github.com/NousResearch/hermes-agent/pull/125054)
- **PR #127282**：修复 Desktop 助手回复重复渲染（与 Issue #126524/#127288 直接对应）。[链接](https://github.com/NousResearch/hermes-agent/pull/127282)
- **PR #127255**：Gateway WS 重连时 replay 序号单调性与截断回放，修复事件静默丢失。[链接](https://github.com/NousResearch/hermes-agent/pull/127255)

整体推进集中在**会话状态一致性**与**消息投递可靠性**两大主线，但待合并积压（47 条）显著，合并吞吐（3 条/日）偏低，建议维护者关注 review 瓶颈。

## 4. 社区热点

- **Issue #4335（评论 20，👍 6）** — 跨平台会话上下文共享（CLI ↔ Telegram）。自 3 月开至今仍是讨论最热话题：用户希望同一身份在多消息平台间共享 agent 会话记忆，而非各平台隔离的 session store。这是长期高需求的多平台体验诉求。[链接](https://github.com/NousResearch/hermes-agent/issues/4335)
- **Issue #123926（评论 11）** — 启动时插件随机静默加载失败（`_evict_modules` 遍历 `sys.modules` 时字典变更），"每次启动挂掉的是不同子集”是该 Bug 最棘手之处，与 PR #126749 的重试方案形成呼应。[链接](https://github.com/NousResearch/hermes-agent/issues/123926)
- **Issue #99773（评论 8）** — TUI 注意力预算设计讨论，作者 9-28 刷新了定位（“不再是让 Hermes 仿 OMP"），转向语义密度优先的界面设计原则，是一场高质量的设计哲学讨论。[链接](https://github.com/NousResearch/hermes-agent/issues/99773)
- **Issue #126524（评论 7）** — Desktop 助手回复双重渲染（DB 仅一行），已有对应 fix PR #127282。[链接](https://github.com/NousResearch/hermes-agent/issues/126524)

## 5. Bug 与稳定性（按严重程度）

**P1**
- **#127234** — 流式重复循环在无上限端点（LM Studio、custom 本地服务器）上永不终止：所有重复检测都等待流结束，而流不会结束。暂无 fix PR，属资源耗尽风险。[链接](https://github.com/NousResearch/hermes-agent/issues/127234)

**P2**
- **#126581** — 生产环境（v0.25.1 WhatsApp）`NO_REPLY` 静默标记经流式预览与失败 turn 终发两条路径泄漏到聊天中。[链接](https://github.com/NousResearch/hermes-agent/issues/126581)
- **#127284** — `source-completion-pending` 无 TTL/自愈，被杀掉的 tail 会使其永久搁浅，后续每次启动都进入该状态。[链接](https://github.com/NousResearch/hermes-agent/issues/127284)
- **#126524 / #127288** — Desktop 双重渲染（display-only），✅ 已有 fix PR #127282。
- **#127343** — Windows 上 main 分支测试套件红：4 个主机不可移植测试 + 1 个真实端口探测缺陷。[链接](https://github.com/NousResearch/hermes-agent/issues/127343)
- **#127096 等 14 条审计回归**（#127091–#127105，umbrella #127076）— 2026-09-28 可靠性审计发现多个“已关闭”问题在 baseline 上仍可复现，涉及 auth（PKCE cookie）、压缩（未截断工具输出持久化）、工具执行无总 deadline、MCP stdio Windows 路径等。均标 `needs-repro`，无 fix PR。[链接](https://github.com/NousResearch/hermes-agent/issues/127076)

**P3**
- **#125683** — `plugins.manage` 在 tree:0 部分克隆上阻塞 40–80s，超过 Desktop 30s 超时，致插件页面间歇报错。[链接](https://github.com/NousResearch/hermes-agent/issues/125683)
- **#126494** — `lazy_deps.install_specs` 已退化为旧 updater shim，插件调用方循环并致 hermes-gateway 死亡。[链接](https://github.com/NousResearch/hermes-agent/issues/126494)
- **#121692** — Windows 上 Hindsight 内存守护进程无法导入 `pywintypes`（运行时隔离问题）。[链接](https://github.com/NousResearch/hermes-agent/issues/121692)

## 6. 功能请求与路线图信号

- **跨平台会话共享（#4335，P2 + `needs-decision`）**：讨论 6 个月、评论最多，是纳入路线图呼声最高的功能，但维护方尚未给出决策。
- **TUI 交互优化**：#110124（裸 `/model` 快速切换，9-28 刷新定位）与 #99773（注意力预算）同作者（@kvnloo，疑似维护者），已有明确设计原则，短期落地概率高。
- **PR #117707**（模型选择器 roster 跨表面共享，替代 Desktop localStorage 单点存储）若合并，将支撑 #110124 的多端一致性。
- **PR #119675**（reduced_motion 冻结动画，移植自 openai/codex#46040）：无障碍支持方向明确，位于待合并管道中。
- **PR #121720**（Desktop 批量技能开关）已关闭，说明 Capabilities 批量操作已被接纳（合并或另行处理）。
- **#65308**（Ctrl+Home/End 跳转对话首尾）：小而明确的 UX 改进，实现成本低，适合社区贡献者认领。

## 7. 用户反馈摘要

- **多平台一致性是核心痛点**：用户在 CLI、Telegram、Desktop 间切换时会话割裂（#4335）、模型可见性设置不同步（PR #117707）、不同客户端看到不同 roster。
- **Windows 是第二质量洼地**：今日 6+ 条 Windows 专属问题（#127284、#127343、#121692、#127261/PR #127267），覆盖安装更新、测试、内存工具、终端环境。
- **静默失败最伤信任**：插件随机加载失败仅写 log（#123926）、`NO_REPLY` 泄漏到聊天（#126581）、gateway 死亡（#126494）——用户反复强调"没有可见错误"比崩溃更难排查。
- **本地模型用户**：无上限端点的流式循环（#127234）显示本地 LLM（LM Studio）场景下缺少客户端侧防御。
- **正面信号**：社区审计贡献者（@JoaoMarcos44）以精确 file:line + 运行时复现的方式系统性验证回归，体现社区工程成熟度；Desktop 复现报告（#126524）质量极高，附带环境、版本、DB 侧证据。

## 8. 待处理积压

- **#4335**（创建于 2026-03-31，评论 20）：跨平台会话共享，`needs-decision` 已挂 6 个月，建议维护方尽快给出方向性答复。
- **#123926**（创建于 09-26）：随机性插件加载失败，11 条评论仍 OPEN；PR #126749 提供重试方案但未合并，且未直接修复 `_evict_modules` 的迭代缺陷本身。
- **#121692**（09-24，Windows Hindsight）：5 条评论，无对应 fix PR，Windows 内存用户受阻。
- **#65308**（07-16）：简单的键盘导航请求，近 3 个月无实质进展，属低成本可收敛项。
- **#125683**（09-27）：插件目录 40–80s 阻塞直接影响 Desktop 可用性感知，尚无 fix PR。
- **审计回归群（#127091–#127105）**：14 条 `needs-repro` 追踪 Issue 若无人认领，将重演"过早关闭”循环——建议为 #127076 umbrella 指定 owner 并排期验证。

---
*数据来源：GitHub API（截至 2026-09-29）；Issues/PR 各展示评论最多的子集，链接均指向 NousResearch/hermes-agent。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-09-29）

## 1. 今日速览

PicoClaw 过去 24 小时社区活跃度中等偏高：6 条 Issue 更新（5 新开/活跃、1 关闭）、10 条 PR 更新（全部待合并，0 合并）。值得注意的是，**核心维护者响应明显缺位**：多数 PR/Issue 被标记 `[stale]`，多位外部贡献者（尤其是 @x1F916）集中提交了高质量的可靠性修复，甚至有社区成员宣布活跃 Fork 接管维护（[#3398](https://github.com/sipeed/picoclaw/issues/3398)）。项目处于“社区推动、官方静默”的临界状态，健康度需警惕。

## 2. 版本发布

过去 24 小时无新版本发布。当前最新版本仍为 v0.3.1（从 Issue 环境信息推断）。

## 3. 项目进展

**今日无任何 PR 被合并或关闭**，10 条 PR 均处于待合并状态，官方推进速度停滞。但社区侧贡献密集：

- [@x1F916](https://github.com/x1F916) 于 09-28 一天内提交 **6 个 PR + 2 个 Issue**（#3399–#3404），系统性覆盖 agent 循环、channels manager、config、updater 四大核心模块的可靠性修复，详见第 5 节。
- 早期 PR 持续积压：如 OAuth scope 修复 [#3378](https://github.com/sipeed/picoclaw/pull/3378)、Web UI 卡顿修复 [#3347](https://github.com/sipeed/picoclaw/pull/3347)、IRCv3 multiline 支持 [#3354](https://github.com/sipeed/picoclaw/pull/3354)、DeltaChat 重构（-200 LOC）[#3222](https://github.com/sipeed/picoclaw/pull/3222) 均已挂起数周至数月，部分被 stale bot 标记。

## 4. 社区热点

- **[#3398 活跃 Fork 宣言](https://github.com/sipeed/picoclaw/issues/3398)**：@afjcjsbx 公开宣布维护 [afjcjsbx/picoclaw](https://github.com/afjcjsbx/picoclaw)，理由是原仓库“疑似无人维护但社区需求旺盛”。这是项目治理层面的重大信号。
- **[#3404 可靠性修复集合（wave 1）](https://github.com/sipeed/picoclaw/issues/3404)**：@x1F916 指出多个既往 bug 报告/PR **在任何人响应前就被 stale bot 关闭**，因此一次性附带复现用例重新提交。反映社区对“stale 机制误杀有效贡献”的强烈不满。
- **[#3405 请求开启私密漏洞上报渠道](https://github.com/sipeed/picoclaw/issues/3405)**：安全研究者发现仓库既无 `SECURITY.md` 也未开启 GitHub private vulnerability reporting，无处私密报送安全问题。
- **[#3281 Web UI 输入卡顿](https://github.com/sipeed/picoclaw/issues/3281)**（15 评论、2 👍，今日讨论热度最高）：会话历史稍长后输入框严重卡顿，影响日常使用体验。

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | 问题 | 状态 |
|---|---|---|
| **高** | [#3401](https://github.com/sipeed/picoclaw/pull/3401) Channels `Reload` 对 nil channel 调 `Stop/Start` 导致 **panic、gateway 退出**（manager.go:1956） | ✅ 有 fix PR（待审） |
| **高** | [#3403](https://github.com/sipeed/picoclaw/pull/3403) 异步工具（spawn）结果被错误投递到**默认 agent 的主会话**，跨会话/跨用户数据串扰 | ✅ 有 fix PR（待审） |
| **高** | [#3400](https://github.com/sipeed/picoclaw/pull/3400) 多 key 模型配置每次保存丢失 `Enabled` 标志和多余 api_keys，**v0/v1/v2 配置迁移后自动触发** | ✅ 有 fix PR（待审） |
| **中** | [#3399](https://github.com/sipeed/picoclaw/pull/3399) 32 位 ARM 上 `picoclaw update` 误装 arm64 包（子串匹配缺陷） | ✅ 有 fix PR（待审） |
| **中** | [#3402](https://github.com/sipeed/picoclaw/pull/3402) 路由 agent 的会话在上下文管理器中被错误绑定默认 agent（#3316 的重提） | ✅ 有 fix PR（待审） |
| **中** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI 长历史下输入卡顿 | ✅ 社区 PR [#3347](https://github.com/sipeed/picoclaw/pull/3347) 已验证有效，待合并 |
| **历史遗留** | [#258 安全审计（已关闭）](https://github.com/sipeed/picoclaw/issues/258)：工具实现存在多个 CRITICAL 级漏洞 | ⚠️ 已关闭但修复情况不明，结合 #3405 判断安全流程仍不完善 |

## 6. 功能请求与路线图信号

- **OpenAI 兼容自定义 Provider**（[#3366](https://github.com/sipeed/picoclaw/issues/3366)）：支持自托管路由（如 9Router），实现成本低（可基于 OpenAI provider 改造），社区呼声明确——建议优先纳入。
- **Keenable Web 搜索 Provider**（PR [#3370](https://github.com/sipeed/picoclaw/pull/3370)）：零 API key 即可用，代码已就绪，只待 review。
- **IRCv3 multiline 消息支持**（PR [#3354](https://github.com/sipeed/picoclaw/pull/3354)）：改善 IRC 渠道长消息体验，代码完成度高。
- ⚠️ 当前最大瓶颈不在功能供给，而在**官方 review 能力缺失**；若无维护者回归，以上功能大概率流向活跃 Fork。

## 7. 用户反馈摘要

- **Web UI 性能是普遍痛点**：长会话历史导致输入卡顿在桌面/移动端均复现（#3281、#3347），直接影响日常使用。
- **部署体验存在硬伤**：32 位 ARM 用户自动更新会装错二进制（#3399）；Telegram 渠道 token 未配置时整个 gateway 崩溃（#3401）。
- **多 agent/多用户场景不可靠**：异步工具结果串会话（#3403）表明有用户在多 chat 多用户生产环境中使用，这类数据串扰风险高。
- **社区情绪**：贡献者普遍仍愿投入（有人重开被 stale 的 PR、有人建 fork、有安全研究者主动报漏洞），但对官方响应速度和 stale bot 机制不满。

## 8. 待处理积压

| 条目 | 等待时长 | 说明 |
|---|---|---|
| [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) DeltaChat 重构 | ~3 个月 | 高质量 -200 LOC 清理，被标记 stale |
| [PR #3378](https://github.com/sipeed/picoclaw/pull/3378) OAuth scope 修复 | ~2.5 周 | 影响 OAuth 认证正确性，被标记 stale |
| [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI 卡顿 | ~2 个月 | 15 条评论、已有可用修复 PR |
| [PR #3347](https://github.com/sipeed/picoclaw/pull/3347) 卡顿修复 | ~1 个月 | 经桌面/移动双端验证 |
| [Issue #3405](https://github.com/sipeed/picoclaw/issues/3405) 开启私密漏洞上报 | 1 天 | **仅需仓库设置操作，建议立即处理** |
| @x1F916 的 6 个 fix PR（#3399–#3403） | 1 天 | 附复现用例，建议尽快 review |

**建议**：官方维护者需尽快（1）开启 private vulnerability reporting 并添加 SECURITY.md；（2）审查 stale bot 策略避免误杀有效贡献；（3）批量 review @x1F916 的修复 PR；（4）就 fork 事件（#3398）公开表态，明确项目维护路线，避免社区分裂。

---
*数据来源：GitHub API（sipeed/picoclaw），统计窗口 2026-09-28 至 2026-09-29。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-29

## 1. 今日速览

NanoClaw 今日保持高活跃度：过去 24 小时内 PR 更新达 31 条（13 条待合并、18 条已合并/关闭），Issue 更新 4 条（1 新开/活跃、3 关闭），无新版本发布。开发主线高度集中在 `/update-nanoclaw` 升级流程的可靠性修复、容器生命周期管理和凭据网关（Iron / OneCLI）适配上。核心团队（@glifocat）贡献了绝大多数改动，社区贡献者 @tchopoorian、@barnuri 也有 PR 在推进。整体看，项目处于“密集加固阶段”——以 bug 修复和稳定性打磨为主，功能性新特性较少，CI 曾因 Bun 1.4.0 的 `spawnSync` 缺陷出现大面积挂起，但当日已由 #3959 解除阻塞。

## 2. 版本发布

今日无新版本发布。（当前主线仍在 v2.4.0 基础上持续修复，多个 PR 引用的 commit `63082563` 为 main 最新头。）

## 3. 项目进展

今日关闭/合并的重要 PR：

- **CI 解阻塞（关键）** — [PR #3959](https://github.com/nanocoai/nanoclaw/pull/3959)：agent-runner 测试改用异步 spawn 绕过 Bun 1.4.0 `spawnSync` 挂起缺陷（oven-sh/bun#34069）。当天 8 个 main CI 运行中 5 个变红，此 PR 恢复了主干健康。
- **升级流程安全加固系列**：
  - [PR #3957](https://github.com/nanocoai/nanoclaw/pull/3957)：pre-task 脚本超时后 kill 整个进程组，修复 bash fork 导致子进程（如 `bun flow.ts`）残留并延迟产生副作用的隐患。
  - [PR #3948](https://github.com/nanocoai/nanoclaw/pull/3948)：将 `gateway` 设为官方容器角色，升级 cutover 时保留 Iron Proxy 容器，修复升级后所有 agent spawn 失败的问题。
  - [PR #3946](https://github.com/nanocoai/nanoclaw/pull/3946)：skill 步骤失败时展示具体错误，而非通用 bounce 提示。
- **安全与清理**：
  - [PR #3920](https://github.com/nanocoai/nanoclaw/pull/3920)：setup 的 failure-assist agent 改用各 CLI 自身的安全权限基线，替代 allow-all，属重要权限收敛。
  - [PR #3883](https://github.com/nanocoai/nanoclaw/pull/3883)：卸载时清除 Iron Control 数据库，保证同目录重装从干净状态开始。
- **新能力**：[PR #3950](https://github.com/nanocoai/nanoclaw/pull/3950)：Iron 可信任运维方自建 CA，私有域名（如 `https://models.home.arpa/v1`）上的本地模型服务器现在可用。
- **渠道修复**：[PR #3949](https://github.com/nanocoai/nanoclaw/pull/3949)：Mattermost verify-runtime 在 `MATTERMOST_CALLBACK_SECRET` 未设置时自动派生，不再失败。

整体而言，今日关闭的 PR 主要清偿升级/回滚路径上的技术债，配合 13 个待合并 PR（见第 5 节），升级流程的端到端正确性正在系统性收敛。

## 4. 社区热点

- **[Issue #3906](https://github.com/nanocoai/nanoclaw/issues/3906)**（今日关闭，1 条评论）：`/update-nanoclaw` 控制器归档自 #3816 起缺失 `setup/`，且 stage 内命令在依赖就绪前执行——这是升级流程问题链的源头 issue，今日关闭说明相关修复已落地。
- **[PR #3654](https://github.com/nanocoai/nanoclaw/pull/3654)**（社区贡献者 @tchopoorian，8 月底提交、今日仍有更新，待合并）：凭据网关激活时代理变量污染导致 `host.docker.internal` 上的 plain-HTTP MCP 服务器不可达，提出通过 `NO_PROXY` 修复。这是存活最久的社区 PR，反映容器化部署 + 本地 MCP 场景的真实痛点。
- **[PR #3901](https://github.com/nanocoai/nanoclaw/pull/3901)**（社区贡献者 @barnuri，待合并）：仅能通过 HTTPS 代理上网的主机服务无法联网，需在进程启动前设置 `NODE_USE_ENV_PROXY`。反映受限网络环境（企业内网）用户的存在。

诉求共性：用户在**非标准环境**（代理、容器、自建 CA）下部署 NanoClaw 时遇到系统性摩擦，社区正通过 PR 主动补齐。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [Issue #3961](https://github.com/nanocoai/nanoclaw/issues/3961)：`/update-nanoclaw` 在 `systemctl --user` 无法触达 bus 时误报 `phase: complete`，旧 host 未停止/重启，实际未完成升级（静默失败） | **OPEN**，已有针对性 fix [PR #3962](https://github.com/nanocoai/nanoclaw/pull/3962)（liveness probe 失败时拒绝 cutover）和 [PR #3956](https://github.com/nanocoai/nanoclaw/pull/3956)（rollback 停止 nohup host 并排空 agent 容器） |
| 🔴 高 | main CI 大面积红/挂起（Bun 1.4.0 spawnSync 缺陷） | 已修复，[PR #3959](https://github.com/nanocoai/nanoclaw/pull/3959) |
| 🟠 中 | [PR #3953](https://github.com/nanocoai/nanoclaw/pull/3953)：arm64 Docker 引擎无法运行 amd64 Iron Control 镜像，报 `exec format error`，现提前失败并给出修复指引（替代 #3891） | fix PR OPEN |
| 🟠 中 | [PR #3958](https://github.com/nanocoai/nanoclaw/pull/3958)：日志记录遇循环引用/BigInt 直接抛异常，可致 host 崩溃 | fix PR OPEN |
| 🟡 中低 | [PR #3947](https://github.com/nanocoai/nanoclaw/pull/3947)：删除 session/agent group 后容器残留运行直到下次重启 | fix PR OPEN |
| 🟡 中低 | [Issue #3907](https://github.com/nanocoai/nanoclaw/issues/3907)：嵌套 pnpm 向 stdout 输出 workspace 警告导致网关检测失败（今日关闭） | 已修复 |

## 6. 功能请求与路线图信号

- **私有 CA 信任**（[PR #3950](https://github.com/nanocoai/nanoclaw/pull/3950)，已合并）：家庭实验室/私有 DNS 场景下的本地模型服务器支持，是今日唯一的 feature 类改动，预计进入下一版本。
- **网关适配器文档化边界**（[PR #3954](https://github.com/nanocoai/nanoclaw/pull/3954)）：明确记录 OneCLI/Iron 适配器无法检测并发值轮换——表明团队倾向于“文档化已知限制”而非立即修复，可作为路线图优先级信号。
- **网关无关化持续演进**（[PR #3955](https://github.com/nanocoai/nanoclaw/pull/3955)、[PR #3960](https://github.com/nanocoai/nanoclaw/pull/3960)）：核心代码持续剥离对具体网关（Iron/OneCLI）的直接引用，暗示多网关架构是长期方向。
- 今日无新增 feature request 类 Issue；社区需求主要以 bug-fix PR 形式表达（代理环境、arm64 支持）。

## 7. 用户反馈摘要

- **升级流程是最大痛点集中区**：@glifocat 连续报告的 #3906、#3961、#3907 均指向 `/update-nanoclaw` 在非 systemd 标准路径下的静默失败——用户对“报 complete 但实际没升级”这类误导性反馈尤为不满。
- **受限网络环境用户真实存在**：#3654（容器 + 本地 MCP）、#3901（仅 HTTPS 代理出口）说明企业/内网部署需求明确。
- **arm64 用户**：#3953 表明在树莓派/Apple Silicon 类环境安装 Iron Proxy 目前必失败，期待更早、更清晰的错误提示。
- 正面信号：issue 关闭速度快（多数 bug 在报告后 1–3 天内关闭），修复均配套测试，文档同步更新，社区贡献者参与度在提升。

## 8. 待处理积压

- **[PR #3654](https://github.com/nanocoai/nanoclaw/pull/3654)**（提交于 08-29，已挂起约 1 个月）：容器内代理变量/`NO_PROXY` 修复。建议维护者尽快评审——它阻塞凭据网关 + 本地 MCP 的组合场景，且与已合并的 #3950 存在主题关联。
- **[PR #3901](https://github.com/nanocoai/nanoclaw/pull/3901)**（提交于 09-25）：HTTPS 代理环境支持，待评审。
- **待合并核心修复群**（13 个 OPEN PR，多数为 09-28 新开，需尽快处理以免积压）：#3962、#3956、#3958、#3953、#3947、#3919、#3955、#3954、#3963。
- **[Issue #3961](https://github.com/nanocoai/nanoclaw/issues/3961)**：升级静默失败，虽有两个候选 fix PR（#3962/#3956），但在其合并并验证前应保持高优先级关注。

---
*数据来源：NanoClaw GitHub 仓库过去 24 小时 Issues/PR 活动。项目健康度评估：活跃度高、响应周期短、修复-测试-文档闭环良好；主要风险为待合并 PR 积压量与升级流程在边缘环境下的可靠性。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-09-29

## 1. 今日速览

NullClaw 今日呈现**高吞吐的维护节奏**：过去 24 小时内处理了 17 条 Issue 更新（仅 1 条新开，16 条关闭）和 6 条 PR 更新（6 条全部关闭/合并），显示维护者在集中清理积压、推进版本发布周期。今日最值得关注的是 **v20260929 版本 PR（#1014）已关闭**，包含 Web 搜索修复、QQ 渠道修复和版本号更新，意味着一个新 release 即将（或刚刚）落地。无新版本正式发布记录。社区方面，Web UI 部署、DingTalk 渠道能力、配置文档等长期议题集中收尾，项目健康度良好。

## 2. 版本发布

无正式 Release。但 **PR #1014 "v20260929"** 已关闭，内容为：
- 修复 Web 搜索固定到配置的 provider，并修复 Exa 拒绝重复 Content-Type 头的问题
- 官方 QQ 回复前剥离 Markdown 标记
- 版本号 bump 至 v20260929

预计 release 工作流即将构建该 tag，用户可关注 Releases 页面。

## 3. 项目进展

今日关闭的 6 条 PR：

- **[#1014](https://github.com/nullclaw/nullclaw/pull/1014) v20260929** — 例行版本发布 PR，含 Exa 搜索头修复、QQ Markdown 清理。当日创建当日关闭，发布节奏紧凑。
- **[#990](https://github.com/nullclaw/nullclaw/pull/990) Eden AI provider** — 通过 `OpenAiCompatibleProvider` 接入 Eden AI（欧盟聚合网关），延续 #922 的 provider 接入模式。
- **[#319](https://github.com/nullclaw/nullclaw/pull/319) DingTalk 发送与撤回修复** — 将 webhook-only 换为官方 DingTalk Bot API，实现完整撤回支持与 OAuth2 token 管理。积压半年后收尾。
- **[#667](https://github.com/nullclaw/nullclaw/pull/667) Email 双向 IMAP 通道** — 从 send-only 升级为 IMAP IDLE 推送 + 轮询降级的双向通道，含网络韧性处理。
- **[#527](https://github.com/nullclaw/nullclaw/pull/527) 自适应智能管线 + Email/WhatsApp Web 渠道** — 引入 Turn Scorer、Skill Router 等回合后质量闭环。
- **[#411](https://github.com/nullclaw/nullclaw/pull/411) 工具定制系统** — 触发关键词、优先级、预配置参数的工具管理体系。

**评估**：DingTalk（#319）+ Email（#667）双向化落地，显著扩展了 NullClaw 作为个人 AI 助手的消息渠道矩阵，是今日实质进展最大的方向。

## 4. 社区热点

- **[#861](https://github.com/nullclaw/nullclaw/issues/861)（5 评论）无头 VPS 上启用 Web UI** — 用户直言 README 的 Web UI/Browser Relay 说明“70% 看不懂”，请求通俗化文档。反映 Web UI 部署文档门槛过高，与 #473（README 基准数据过期）共同指向**文档质量是当前最大摩擦点**。
- **[#764](https://github.com/nullclaw/nullclaw/issues/764)（OPEN，5 评论）申请加入 agentskills.io 官方客户端列表** — Agent Skills 标准站新增 clients 页面，维护者可申请收录。这是低成本提升项目曝光度的机会，是今日唯一新开 Issue，建议尽快跟进。
- **[#613](https://github.com/nullclaw/nullclaw/issues/613)（👍4，全场最高）配置项文档改进** — 新手反馈 onboard 生成的 config.json 部分选项说明缺失、默认值不明，是最受共鸣的诉求。

## 5. Bug 与稳定性

今日关闭 16 条 Issue，多为历史 Bug 集中收尾（严重程度降序）：

| Issue | 问题 | 状态 |
|---|---|---|
| [#354](https://github.com/nullclaw/nullclaw/issues/354) | Homebrew 升级后 daemon 静默失效（plist 硬编码 Cellar 版本路径） | 已关闭 |
| [#408](https://github.com/nullclaw/nullclaw/issues/408) | 工具调用 JSON 解析错误（冒号被误判为工具名），影响 LM Studio 本地模型可用性 | 已关闭 |
| [#477](https://github.com/nullclaw/nullclaw/issues/477) | 飞书 WebSocket 断连 | 已关闭 |
| [#665](https://github.com/nullclaw/nullclaw/issues/665) | `error.NoResponseContent`（本地 llama 模型） | 已关闭 |
| [#427](https://github.com/nullclaw/nullclaw/issues/427) | 自定义 skill 无法作为工具调用 | 已关闭 |
| [#932](https://github.com/nullclaw/nullclaw/issues/932) | 文档 Zig 版本错误（应为 0.16.0） | 已关闭 |

Homebrew 升级静默失效（#354）属安装级高严重度问题，关闭意味着打包/服务路径问题已处理。今日无新增 Bug 报告，回归压力低。

## 6. 功能请求与路线图信号

今日关闭的功能请求，结合 PR 可见纳入/关联情况：

- **DingTalk 收消息**（[#376](https://github.com/nullclaw/nullclaw/issues/376)）→ 由 PR #319 落地 ✅
- **`GET /status` 监控端点**（[#631](https://github.com/nullclaw/nullclaw/issues/631)）→ 已关闭，配合 email/WhatsApp 等新渠道，监控能力是 gateway 演进方向
- **多模态视觉管线**（[#624](https://github.com/nullclaw/nullclaw/issues/624)）→ 已关闭，用户已用 skill 自行实现，官方支持值得期待
- **ddgs 元搜索**（[#623](https://github.com/nullclaw/nullclaw/issues/623)）→ 已关闭，与 v20260929 中 Web 搜索 provider 固定化修复方向一致，搜索可靠性是活跃开发线
- **Subagent 按 agent 指定 provider**（[#190](https://github.com/nullclaw/nullclaw/issues/190)）→ 已关闭，多 agent 架构信号
- **CloudFlare/Nginx 隧道访问 Web UI**（[#495](https://github.com/nullclaw/nullclaw/issues/495)）→ 已关闭，与 #861 共同表明远程访问是高频场景

## 7. 用户反馈摘要

- **部署门槛高**：无头服务器用户（#861）对 Browser Relay 文档感到困惑；CloudFlare 隧道（#495）说明大量用户在远程/VPS 场景下使用。
- **错误信息不友好**：#619 反馈 `error.ApiError` 製错误信息过于晦涩，非开发者用户排障困难。
- **本地模型体验差**：#408（LM Studio）、#665（llama）显示本地 LLM 用户遇到解析与空响应问题，是重要用户群体。
- **新手文档缺失**：#613（👍最高）和 #473 表明 config 说明和基准数据更新是社区最迫切诉求。
- **国内生态活跃**：DingTalk、飞书、QQ 相关 Issue/PR 占比高，中文用户是核心群体之一。

## 8. 待处理积压

- **[#764](https://github.com/nullclaw/nullclaw/issues/764)**（OPEN）— agentskills.io 客户端收录申请，仅需维护者响应提交，成本低收益高，**建议优先处理**。
- 今日集中关闭了大量 3-4 月创建的积压 Issue/PR（#319 积压近 7 个月），说明积压清理正在进行；但需注意确认这些关闭是“修复落地”还是“无响应关闭”，避免社区贡献者（如 @sanderdewijs 的 #527/#667 大型功能 PR）的付出被静默丢弃。
- 文档类诉求（#613、#861、#473、#932）虽已关闭，但应跟踪 README 和 getting-started 页面是否实际更新，否则痛点会复发。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-09-29

## 1. 今日速览

IronClaw 今日整体活跃度偏低但稳定，过去 24 小时共有 1 条 Issue 更新（新开 1 条）和 5 条 PR 更新（待合并 4 条，关闭 1 条），无新版本发布。值得注意的是，社区贡献者 @changeroa 一日内连提两个质量较高的修复 PR（CLI 配置报告与 WebUI 焦点恢复），显示外部贡献渠道保持畅通。同时项目坚持自动化运营节奏：每日失败分类报告（Issue #8116）与夜间知识图谱/OpenWiki 刷新 PR 均正常运转，CI 自动化体系健康。总体判断：项目处于**稳定维护 + 持续小步迭代**阶段。

## 2. 版本发布

今日无新版本发布。最新 Release 状态：无。

## 3. 项目进展

**今日关闭的 PR：**

- [#5132 fix(webui-v2): redirect invalid chat thread routes](https://github.com/nearai/ironclaw/pull/5132)（@flyagents，CLOSED）— 该 PR 修复了无效 `/chat/:threadId` 路由的重定向逻辑，包含等待线程列表加载、保留本地选中线程、补充回归测试等完善处理。历经约 3 个月（创建于 2026-06-22）后关闭，清退了长期积压。⚠️ 注意：状态为 CLOSED 而非 MERGED，其修复内容是否已通过其他途径落地需维护者确认。

**待合并 PR（更新活跃）：**

- [#8118 fix(cli): report effective config profile](https://github.com/nearai/ironclaw/pull/8118)（@changeroa，今日新开）— 使 `config path`、`doctor`、`status` 命令正确报告生效的 boot profile，复用 `runtime::effective_profile` 路径，避免逻辑重复。
- [#8117 fix(webui): restore focus after closing the command palette](https://github.com/nearai/ironclaw/pull/8117)（@changeroa，今日新开）— 修复 Cmd/Ctrl+K 命令面板关闭后焦点丢失在 `body` 上的体验问题。
- [#7988 chore(agents): refresh codebase knowledge graph](https://github.com/nearai/ironclaw/pull/7988)（CI bot，夜间自动刷新）— 例行的代码库知识图谱快照更新。
- [#6698 docs: update OpenWiki wiki](https://github.com/nearai/ironclaw/pull/6698)（CI bot，自动文档刷新，创建于 07-27，长期待人工审核合并）。

**进展评估：** 今日净推进幅度较小，主要是 UX/配置可观测性方向的两个小修 + 一个长期积压 PR 的清退。项目前进主要靠自动化流水线维持，人工合并节奏偏慢。

## 4. 社区热点

今日无高评论/高反应的讨论热点：

- 今日唯一新开 Issue [#8116](https://github.com/nearai/ironclaw/issues/8116) 为自动化日报，0 评论 0 👍。
- 所有 5 条 PR 均无显著评论互动，说明社区今日处于**低讨论、纯提交**状态。

建议关注 @changeroa 这位新贡献者——单日两个规范 PR（含变更类型标注、验证清单），是潜在的可持续贡献者，值得及时 review 以提升留存。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中 | [#8116 每日失败分类](https://github.com/nearai/ironclaw/issues/8116)：officeqa 测试套件 31 个非通过任务，除一例外均为真实模型质量问题（DeepSeek-V4-Flash 导航相关） | OPEN，属被测模型问题而非框架 Bug |
| 低 | 命令面板关闭后焦点丢失（WebUI UX 缺陷） | 已有 fix PR [#8117](https://github.com/nearai/ironclaw/pull/8117) |
| 低 | CLI 未报告生效的配置 profile | 已有 fix PR [#8118](https://github.com/nearai/ironclaw/pull/8118) |

无崩溃或回归类严重问题报告。

## 6. 功能请求与路线图信号

今日无新功能请求。可推断的信号：

- **配置可观测性**：#8118 表明社区关注 profile 解析的透明度，若合并将改善多 profile 场景的调试体验。
- **WebUI 交互打磨**：#8117 与已关闭的 #5132 均聚焦 WebUI 细节体验，暗示 v2 界面进入精细化阶段。
- **自动化文档/知识体系**：#6698（OpenWiki 叙事文档层）与 #7988（结构化图谱层）构成的双层知识架构是项目的长期投入方向。

## 7. 用户反馈摘要

今日 Issue/PR 评论数据缺失（评论数为 undefined/0），无法提炼有效用户反馈。间接信号：

- 外部贡献者的 PR 均围绕**真实使用中的摩擦点**（配置困惑、焦点丢失、无效路由），反映 IronClaw CLI + WebUI 已有日常活跃用户群。
- #8116 的模型失败分析显示 benchmarks 体系被认真用于追踪模型（如 DeepSeek-V4-Flash）的实际能力边界。

## 8. 待处理积压

- ⚠️ **[#6698 docs: update OpenWiki wiki](https://github.com/nearai/ironclaw/pull/6698)** — 创建于 2026-07-27，已积压 **约 2 个月**，且按策略明确需要人工审核合并。建议维护者优先处理，避免自动化文档 PR 堆积失效。
- ⚠️ **[#7988 知识图谱刷新](https://github.com/nearai/ironclaw/pull/7988)** — 创建于 2026-08-29，积压约 1 个月。若快照持续滞后于主干，可能影响 agent 记忆的准确性。
- **#5132 已关闭但未合并** — 建议确认其修复是否已由其他 PR 覆盖，否则无效路由问题可能仍然存在。
- 新 PR #8117、#8118 为新贡献者提交，建议 48 小时内响应首评，避免贡献者流失。

---
*数据来源：GitHub API，统计窗口 2026-09-28 至 2026-09-29（UTC）。链接格式请替换为完整 URL 访问。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-09-29

## 1. 今日速览

LobsterAI（网易有道开源的个人 AI 助手项目）今日保持较高活跃度：过去 24 小时 PR 更新 13 条（12 条已合并/关闭，1 条待处理），Issues 更新 5 条（4 活跃 / 1 关闭），无新版本发布。核心贡献者 @fisherdaddy 与 @btc69m979y-dotcom 密集提交了 OpenClaw 网关稳定性、Cowork 交互体验及文档编辑能力的多项改进，开发节奏明显集中在 `release/2026.9.24` 分支的打磨阶段。Issue 侧以历史遗留 stale issue 的批量处理为主，今日无新增高质量 bug 报告。总体判断：项目处于活跃迭代期，工程推进速度快于社区反馈消化速度。

## 2. 版本发布

今日无新版本发布。但从 PR 走向看，`release/2026.9.24` 分支正持续收尾（见 #2772、#2773），下一版本可能聚焦 OpenClaw 启动稳定性与文档编辑功能。

## 3. 项目进展

今日合并/关闭的 12 条 PR 主要推进三条主线：

**OpenClaw 网关稳定性（核心主线）**
- [#2775](https://github.com/netease-youdao/LobsterAI/pull/2775) fix(openclaw): 应用启动时网关只启动一次——修复此前启动三次（约 80 秒才稳定、三段不可用窗口）的问题，显著改善首次启动体验。
- [#2772](https://github.com/netease-youdao/LobsterAI/pull/2772) fix(openclaw): 统计旧会话库时跳过孤立的非 ASCII Agent 目录——修复纯中文 Agent 目录导致启动门控永久报“仍有遗留会话库”而死锁的问题，已合入 release 分支。
- [#2773](https://github.com/netease-youdao/LobsterAI/pull/2773) test(openclaw): 补齐旧会话目录恢复的数据保留回归测试与 Electron 验收记录。
- [#2774](https://github.com/netease-youdao/LobsterAI/pull/2774) fix(openclaw): 一键修复超时处理优化——基于输出活动的有界等待（最长 15 分钟），避免慢命令被 60 秒超时误杀。

**Cowork 交互体验**
- [#2778](https://github.com/netease-youdao/LobsterAI/pull/2778) feat(cowork): 在输入框上方展示 OpenClaw 进度卡片，Agent 计划首次对用户可见（改编自 #2758）。
- [#2777](https://github.com/netease-youdao/LobsterAI/pull/2777) feat(cowork): 长时运行回合只保留最近 5 个步骤——解决 DeepSeek 等模型长时间调用工具时刷屏问题（一个 7 分钟 PPT 任务曾渲染 94 行）。

**重大新能力**
- [#2776](https://github.com/netease-youdao/LobsterAI/pull/2776) feat: 支持 ppt/word/excel 文档编辑——覆盖 renderer/main/openclaw/skills/artifacts 多模块的大型功能 PR，是今日影响面最大的变更。

整体看，今日项目在稳定性（网关死锁、重复启动）与产品能力（文档编辑、进度可视化）两条腿走路，向前推进明显。

## 4. 社区热点

今日社区热度较低，无新增热门讨论。活跃条目以 stale 标记处理为主：

- [#1035](https://github.com/netease-youdao/LobsterAI/issues/1035)（2 条评论）NimGateway 重连后消息去重缓存未清空导致消息静默丢弃——今日被关闭，属于历史技术债清理。
- 待处理 PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)：dependabot 提议将 electron 从 43.5.0 升级到 44.4.5（含 electron-builder 共 2 项更新），自 4 月挂起至今，是当前唯一待合并 PR。

背后诉求信号：社区早期（3 月底）报的多个 UX/稳定性问题（见第 5 节）长期无人认领，最终以 stale 关闭，反映维护团队精力集中在主线开发而非社区分诊。

## 5. Bug 与稳定性

今日新报告 bug 为零；以下是随 stale 处理浮出的历史问题，按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | [#972](https://github.com/netease-youdao/LobsterAI/issues/972) QWEN 模型使用中途关闭后，重连成功仍卡死在“AI引擎正在启动网关”，反复弹窗 | OPEN，无 fix PR |
| 高 | [#971](https://github.com/netease-youdao/LobsterAI/issues/971) 内容输出错乱、答非所问（生成小说封面输出大量无关内容） | OPEN，无 fix PR |
| 中 | [#968](https://github.com/netease-youdao/LobsterAI/issues/968) Agent 查询杭州天气，浏览器数据显示非杭州且未自动关闭 | OPEN，无 fix PR |
| 中 | [#973](https://github.com/netease-youdao/LobsterAI/issues/973) macOS 快捷键面板显示 Ctrl 而非 Cmd，不符合平台惯例 | OPEN，无 fix PR |
| 中 | [#1035](https://github.com/netease-youdao/LobsterAI/issues/1035) IM 网关重连后去重缓存未清空，正常消息被静默丢弃 | 已关闭（stale） |

值得注意的是，#972 描述的“网关卡死”症状与今日合并的 #2775/#2772 修复方向吻合，可能已被间接解决，建议维护者在关闭 stale issue 时验证并关联。

## 6. 功能请求与路线图信号

- **文档编辑**：#2776（ppt/word/excel 编辑支持）表明办公文档处理是明确路线图方向，LobsterAI 正从“对话助手”向“可操作文件的助手”演进。
- **执行过程可视化**：#2778 进度卡片 + #2777 步骤收敛，显示团队重视长时 Agent 任务的透明度与可读性，DeepSeek 等长思考模型被明确纳入兼容目标。
- **OpenClaw 运维健壮性**：#2774 的修复超时诊断、#2773 的回归测试，表明“一键修复/Doctor”正在成为正式的自修复能力。
- **平台适配**：#973（macOS Cmd 键）和 #1037（Windows WSL/Git Bash 共存）提示跨平台细节仍是待补短板，短期内可能被纳入修复批次。

## 7. 用户反馈摘要

从 Issues 可提炼的真实用户画像与痛点：

- **本地模型用户**（#972）：使用 QWEN 等本地模型，中途启停模型导致网关状态机卡死，期望“关掉再开就能用”的基本可靠性。
- **创作场景用户**（#971）：用 AI 生成小说封面，遭遇输出内容错乱，说明生成类任务的质量控制不足。
- **Agent 工具链用户**（#968）：使用 skill-creator 构建 Agent，但浏览器自动化工具的定位准确性（天气查询城市错误）和资源清理（窗口未关闭）体验欠佳。
- **macOS 用户**（#973）：对平台规范细节敏感，期待原生级体验。

共性诉求：用户已将 LobsterAI 用于真实生产力场景（写作、查信息、本地模型），短板集中在**稳定性与输出可控性**，而非功能缺失。

## 8. 待处理积压

- [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) dependabot electron 43.5.0 → 44.4.5 升级 PR，挂起近 6 个月，是唯一待合并 PR；鉴于 #2776 大量 Electron 相关改动，建议尽快评估合并或关闭，避免升级冲突扩大。
- [#972](https://github.com/netease-youdao/LobsterAI/issues/972)、[#971](https://github.com/netease-youdao/LobsterAI/issues/971)、[#968](https://github.com/netease-youdao/LobsterAI/issues/968)、[#973](https://github.com/netease-youdao/LobsterAI/issues/973) 四个 3 月底的 OPEN issue 均已打上 stale 标签、仅 1 条评论，即将面临自动关闭。建议维护者：① 验证 #972/#968 是否已被近期 OpenClaw/网关修复覆盖并关联关闭；② #973 属低成本高感知修复，值得排期。

**健康度小结**：开发侧动能强劲（单日 12 PR 合并，含一项大型功能），但社区 issue 分诊明显滞后，stale 清理若无验证关联，存在真实用户反馈流失的风险。

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

# CoPaw 项目日报 — 2026-09-29

## 1. 今日速览

过去 24 小时 CoPaw 保持高活跃度：Issues 更新 8 条（新开/活跃 5，关闭 3），PR 更新 19 条（待合并 13，已合并/关闭 6），无新版本发布（当前 main 为 `2.2.2b4`）。今日主线集中在**消息通道可靠性**（QQ 事件重投、Telegram 格式化）、**桌面端 UI 可用性**（字体缩放、图标尺寸）以及**会话韧性**（超大媒体文件导致会话永久不可用）。值得注意的是多条关键修复 PR（#8005、#8006、#8016）在同一天合入，显示维护团队响应迅速，社区贡献者（含多名 first-time-contributor）参与度高，项目整体健康度良好。

## 2. 版本发布

今日无新 Release。`2.2.2` 仍处于 beta 迭代（Issue #8013 报告运行 `2.2.2b3`，PR #8012 提到 main 分支为 `2.2.2b4`），预计近期将发布正式版。

## 3. 项目进展

今日合并/关闭 6 个 PR，覆盖多个关键面：

- **QQ 事件重投修复**：[PR #8006](https://github.com/agentscope-ai/QwenPaw/pull/8006)（first-time-contributor）按事件 ID 与序列号丢弃网关重投事件，避免非幂等命令被重复执行、工具调用卡片被重复确认——与 [PR #7983](https://github.com/agentscope-ai/QwenPaw/pull/7983) 同主题、关联 [Issue #7946](https://github.com/agentscope-ai/QwenPaw/issues/7946) 已关闭，QQ 长连接重连的重复消息问题得到闭环。
- **桌面端字体缩放统一**：[PR #8005](https://github.com/agentscope-ai/QwenPaw/pull/8005) 新增 12–20px 字号设置与持久化，建立语义化 token 体系，覆盖侧栏、聊天区、文件工作区、MCP、技能等全模块；同步关闭 [Issue #7999](https://github.com/agentscope-ai/QwenPaw/issues/7999) 与旧 Issue #6252（Linux 桌面端缩放失效），无障碍体验显著提升。
- **模型发现诊断增强**：[PR #8014](https://github.com/agentscope-ai/QwenPaw/pull/8014) 在模型发现回退警告中加入 provider ID 与脱敏后的失败原因，含凭据脱敏与日志注入防护测试。
- **UI 稳定性**：[PR #8016](https://github.com/agentscope-ai/QwenPaw/pull/8016) 修复 Ant Design overlay/modal 过渡动画，消除关闭时的闪烁。
- **依赖升级**：[PR #8008](https://github.com/agentscope-ai/QwenPaw/pull/8008) 将 agentscope 升至 2.0.9。

## 4. 社区热点

- **[Issue #7946](https://github.com/agentscope-ai/QwenPaw/issues/7946)**（QQ 网关重投导致重复处理，今日关闭）+ 关联 PR #7983 / #8006：过去数日讨论最热烈的话题，反映生产环境长连接通道的可靠性诉求，今日已由 #8006 修复闭环。
- **[Issue #8013](https://github.com/agentscope-ai/QwenPaw/issues/8013)**：桌面端 2.2.2b3 下载大技能（ppt-master：12,994 文件、80.1 MB）时前端 30 秒 AbortController 硬超时导致失败，暴露前端超时、无进度反馈、复制机制三重问题，企业/重度用户痛点明显。
- **[Issue #8015](https://github.com/agentscope-ai/QwenPaw/issues/8015)**：请求支持自托管 Skill/Plugin 市场源（内网/离线部署），反映 QwenPaw 在企业级 air-gapped 场景的部署需求增长。

## 5. Bug 与稳定性

按严重程度排列：

1. **高：超大图片导致会话永久不可用** — [Issue #8009](https://github.com/agentscope-ai/QwenPaw/issues/8009)：被拒的媒体 payload 留在上下文中反复重放，后续所有消息（含纯文本）均返回 400。✅ 已有 fix PR [#8010](https://github.com/agentscope-ai/QwenPaw/pull/8010)（first-time-contributor，待审）。
2. **高：QQ 重复消息**（见上）✅ 已修复（PR #8006 合入）。
3. **中：TaskTracker 僵尸条目虚增运行任务数** — [Issue #7991](https://github.com/agentscope-ai/QwenPaw/issues/7991)：全局计数与 per-chat API 不一致。✅ 已有 fix PR [#8007](https://github.com/agentscope-ai/QwenPaw/pull/8007)（待人工审查）。
4. **中：大技能下载 30 秒超时失败** — [Issue #8013](https://github.com/agentscope-ai/QwenPaw/issues/8013)。❌ 暂无 fix PR。
5. **中：Telegram HTML 格式化缺陷** — [Issue #8011](https://github.com/agentscope-ai/QwenPaw/issues/8011)：`c++` 等带符号 info string、`~~~` 围栏、嵌套围栏渲染错误。✅ 已有 fix PR [#8012](https://github.com/agentscope-ai/QwenPaw/pull/8012)（当日报告当日提交，响应极快）。
6. **安全相关（待合并 PR）**：[PR #8018](https://github.com/agentscope-ai/QwenPaw/pull/8018)（Windows 卷根写入可继承 sandbox ACE 会向所有子目录传播）、[PR #7988](https://github.com/agentscope-ai/QwenPaw/pull/7988)（grep_search 读取 history.db-wal 等内部文件）。

## 6. 功能请求与路线图信号

- **自托管 Skill/Plugin 市场源**（[Issue #8015](https://github.com/agentscope-ai/QwenPaw/issues/8015)）：企业内网部署强需求，尚无对应 PR，建议纳入路线图。
- **持久化分页对话历史**（[PR #7931](https://github.com/agentscope-ai/QwenPaw/pull/7931)，进行中）：per-session SQLite 存储 + 稳定游标 + 用量持久化，是架构级改进，值得关注。
- **Playwright 默认参数排除**（[PR #7987](https://github.com/agentscope-ai/QwenPaw/pull/7987)）：增强浏览器工具配置灵活性。
- **CLI 启动性能**（[PR #8004](https://github.com/agentscope-ai/QwenPaw/pull/8004)）：懒加载 init_cmd，节省约 5 秒导入时间，改善首次使用体验。
- **Console 打磨**（[PR #8017](https://github.com/agentscope-ai/QwenPaw/pull/8017)、[#8019](https://github.com/agentscope-ai/QwenPaw/pull/8019)）：设置卡片、导航交互、图标基线持续迭代，配合 #8005 字体缩放，桌面端体验是 2.2.2 主打方向。

## 7. 用户反馈摘要

- **无障碍诉求真实存在**：#7999 反映视力较弱用户、高 DPI 显示器、投屏场景均需字体调节，#8005 合并后痛点解决，且被标记为 good first issue 吸引了新贡献者。
- **生产环境通道可靠性是刚需**：QQ 官方机器人用户（#7946）在 fnOS 原生部署下遭遇重连后重复回复，显示 QwenPaw 被用于真实生产 bot 场景。
- **重度/企业用户撞上规模上限**：#8013 的 80MB 技能下载失败，暴露产品在大技能、慢网络场景下的工程化不足。
- **会话韧性不足引发信任问题**：#8009 用户用“对话永久死亡”描述体验，一次图片失败即毁掉整个会话，是满意度的主要扣分项。
- **社区贡献氛围好**：今日多个 fix PR 由 issue 报告者本人或首次贡献者提交（#8006、#8007、#8010、#8012），且多为当日响应。

## 8. 待处理积压

- **[Issue #8013](https://github.com/agentscope-ai/QwenPaw/issues/8013)**（大技能下载超时）：今日新开，暂无修复 PR，涉及前端超时策略与后端复制机制重构，建议维护者优先排期。
- **[Issue #8015](https://github.com/agentscope-ai/QwenPaw/issues/8015)**（自托管市场源）：企业部署场景的长期需求，等待维护者表态。
- **[PR #7871](https://github.com/agentscope-ai/QwenPaw/pull/7871)**（工具输出截断绕过修复，9-18 开启至今 11 天未合并）：涉及安全语义，建议尽快审查。
- **[PR #7983](https://github.com/agentscope-ai/QwenPaw/pull/7983)** 与已合入的 #8006 功能重叠，已被关闭，无遗留风险。
- **安全相关待审 PR**：[PR #8018](https://github.com/agentscope-ai/QwenPaw/pull/8018)（Windows sandbox ACE）、[PR #7988](https://github.com/agentscope-ai/QwenPaw/pull/7988)（grep 读取内部文件）建议优先人工审查。

---

*总体评估：CoPaw 今日呈“高响应、快闭环”的良性节奏——当日报告的 Bug 当日有 fix PR，桌面端体验与通道可靠性两大方向均有实质进展。建议关注 2.2.2 正式版发布前的 PR 积压清理（13 个待合并）。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报

**日期：** 2026-09-29
**数据周期：** 过去 24 小时

---

## 1. 今日速览

ZeptoClaw 今日保持稳定的中低强度开发节奏，共 2 条 Issue 新开、1 条 PR 提交，无新版本发布。核心活动来自维护者 @qhkm 的自驱开发：针对“工具输出超限被直接丢弃”这一体验痛点，从 Issue（#707）到 PR（#708）在同一天内完成闭环立项，体现出较高的响应效率。社区侧有用户询问“goal mode”类持续执行能力（#709），反映用户对 Agent 自主性/长任务模式的需求在上升。整体来看项目处于健康的迭代期，但今日无任何 Issue 被关闭或 PR 被合并，需关注交付落地节奏。

---

## 2. 版本发布

今日无新版本发布。上一阶段变更（#708）尚在 PR 待合并状态，预计将在合并后随下个版本一起推出。

---

## 3. 项目进展

**今日无合并/关闭的 PR。**

但有一项重要进展处于待合并状态：

- **PR #708** [OPEN] `feat(tools): spill oversized tool output instead of discarding it`（作者：@qhkm）
  - **问题背景：** 此前工具输出超过 2,000 行 / 50KB 预算时会被截断并**永久丢弃**，模型仅被告知有内容被省略，却无法找回这些字节——这对长输出场景（大日志分析、批量 grep 结果等）是明显的功能缺陷。
  - **方案：** 超限输出现在会被落盘到 `~/.zeptoclaw/sessions/<key>/spill/<seq>-<tool>.txt`（目录权限 0700，文件权限 0600，权限设计规范），并在上下文中以“预览 + 文件路径 + 提示行”替代，模型可按需读取完整内容。
  - **评估：** 这是一个提升 Agent 长任务可靠性的基础设施级改进，配合 Issue #707 同日立项、同日提 PR，开发效率高。合并后建议关注对会话存储占用和 spill 文件清理策略的后续讨论。

---

## 4. 社区热点

今日两条 Issue 均为新开、0 评论，暂无高热度讨论：

- **Issue #709** — *is there a goal mode?*（@abda11ah）
  用户询问是否存在类似 ohmypi (omp) 中 `/goal` 的模式——即 Agent 持续工作直到满足指定条件才停止。这反映了用户对**条件驱动的自主循环执行**（agentic loop termination condition）的需求，是当前 Agent 产品竞争力的重要维度（对标 Claude Code 的“持续直到完成”、OpenAI 的 async tasks 等）。目前无人回复，建议维护者尽快响应，即使暂无计划也应给出路线图态度。

- **Issue #707** — *[feat, area:tools, P2-high] spill oversized tool output*（@qhkm）
  维护者自建的规划 Issue，标签规范（feat / area:tools / P2-high），定位精确到 `src/tools/output.rs::truncate_tool_output` 及 `shell`、`grep`、`filesystem`、`find` 四个调用方，工程化程度高。

---

## 5. Bug 与稳定性

今日**无用户报告的 Bug、崩溃或回归问题**。

- Issue #707 虽以 feat 立项，但“超限输出不可恢复地被丢弃”本质上属于**数据丢失类缺陷**（P2-high 定级合理），已有对应 fix PR #708 待合并，闭环状态良好。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 状态 | 纳入下版本可能性 |
|---|---|---|---|
| 工具超限输出落盘（spill to disk） | Issue #707 → PR #708 | PR 待合并 | **高** — 维护者亲自开发，同日交付 |
| Goal mode（条件驱动持续执行） | Issue #709 | 待响应 | **待定** — 尚无维护者回复，需先确认是否有规划 |

**路线图信号：** 工具层输出治理（#707/#708）显示维护者正在系统性打磨 Agent 的上下文管理基础设施，这类改进通常会优先进入下一版本。

---

## 7. 用户反馈摘要

今日可提取的用户反馈样本有限（0 条评论），核心信号：

- **痛点：** 超大工具输出被截断后不可恢复（#707），影响长日志/大文件分析场景下的任务连续性——模型“知道丢了数据却拿不回来”。
- **诉求：** 用户（@abda11ah）希望 Agent 支持 goal/条件终止的持续工作模式，说明 ZeptoClaw 已被用于较长周期的自动化任务场景，而非仅限单轮问答。
- **生态参照：** 用户以 ohmypi (omp) 作为对标提出需求，表明用户群体存在多 Agent CLI 工具的使用经验，功能对比意识强。

---

## 8. 待处理积压

- **Issue #709**（goal mode 询问）：新开且 0 回复，属于低成本的社区沟通项，建议维护者 48 小时内回应，避免给社区留下响应迟缓的印象。
- **PR #708**：今日提交即待合并，短期不算积压；但若 3–5 天内无 review/合并动作，应自查交付节奏（今日 0 合并、0 关闭，需防止“立项快、落地慢”）。

---

**健康度小结：** 活跃度 ★★★☆☆｜响应速度 ★★★★☆（自驱开发）｜社区互动 ★★☆☆☆｜交付节奏 ★★★☆☆

*数据来源：qhkm/zeptoclaw GitHub 仓库，统计周期 2026-09-28 至 2026-09-29。*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报
**日期：2026-09-29 | 项目地址：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)**

---

## 1. 今日速览

- 今日 EasyClaw 处于**低交互、高交付**状态：过去 24 小时无 Issue 与 PR 活动，但发布了新版本 **v1.9.25**。
- 版本迭代节奏稳定，本次更新聚焦于 **达人联盟（Affiliate）业务流深化**与**飞书集成稳定性**两个方向。
- 社区讨论热度为零，可能是工作日发布节奏所致，暂无证据表明用户流失；需持续观察后续几日数据。
- 整体判断：项目处于**功能持续打磨期**，健康度良好，但社区互动层面偏沉寂。

---

## 2. 版本发布

### v1.9.25: TK Copilot v1.9.25
🔗 [Release 链接](https://github.com/gaoyangz77/easyclaw/releases)

**What's New：**
1. **达人联盟审核流程改进**：优化 Affiliate review 工作流，提升审核效率与体验。
2. **分析页展示已忽略样品申请**：被忽略的 sample applications 现可在 analytics 中查看，避免数据盲区。
3. **达人表现数据更完整**：Affiliate 明细表展示更全面的达人表现数据，辅助选品与达人运营决策。
4. **飞书媒体上传重试机制**：针对瞬时性（transient）上传错误增加自动重试，提升集成可靠性。

**破坏性变更 / 迁移注意事项：**
- Release Notes 未声明任何 breaking change，预计可平滑升级。
- 建议：使用飞书媒体上传链路的用户升级后关注上传成功率变化，验证重试机制生效情况。

---

## 3. 项目进展

- 今日无 PR 合并/关闭记录（0 条）。
- 从 v1.9.25 内容推断，近期开发重心为：
  - **Affiliate 模块的数据透明度提升**（忽略样品可见、达人表现明细）；
  - **第三方集成（飞书）容错能力增强**。
- 项目整体呈小步快跑的迭代模式，版本号 v1.9.25 显示发布频率较高，工程交付节奏稳定。

---

## 4. 社区热点

- 今日无活跃 Issue/PR 讨论，无社区热点可分析。
- 建议关注后续新版本发布后 48 小时内的反馈窗口期。

---

## 5. Bug 与稳定性

- 今日无新报告 Bug、崩溃或回归问题（0 条）。
- 值得注意：v1.9.25 的飞书上传重试修复暗示此前可能存在**媒体上传偶发失败**的隐性痛点，已随本版本修复。

---

## 6. 功能请求与路线图信号

- 今日无新增功能请求。
- 从版本演进可推断的路线图信号：
  - **达人联盟（Affiliate）模块持续加码**，连续版本均围绕其优化，预计仍是下一版本核心；
  - **飞书生态集成**的健壮性是持续投入方向，未来可能扩展更多容错与对账能力。

---

## 7. 用户反馈摘要

- 今日无 Issue 评论数据，无法提炼用户反馈。
- 间接信号：飞书上传重试功能的出现表明部分用户在**飞书媒体传输稳定性**上遇到过困扰，本次更新应能改善其体验。

---

## 8. 待处理积压

- 今日无新增未响应 Issue/PR；因过去 24 小时整体无活动，暂无从判断长期积压情况。
- **给维护者的提醒**：建议在 v1.9.25 发布后主动巡检历史 Issue 积压，并在 Release 渠道同步更新说明，以激活社区反馈循环。

---

**数据说明**：本日报基于 2026-09-29 过去 24 小时 GitHub 数据生成。Issue/PR 均为 0 条，核心信息来自 v1.9.25 版本发布。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*