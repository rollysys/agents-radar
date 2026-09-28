# OpenClaw 生态日报 2026-09-28

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-28 04:20 UTC

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

# OpenClaw 项目动态日报 — 2026-09-28

---

## 1. 今日速览

- 今日项目活跃度**极高**：过去 24 小时内 Issues 更新 500 条（新开/活跃 400，关闭 100），PR 更新 500 条（待合并 370，已合并/关闭 130），Issue 关闭率约 20%，消化速度健康但输入压力仍然巨大。
- **无新版本发布**。2026.9.7 修复周期仍在进行中（追踪 Issue [#157531](https://github.com/openclaw/openclaw/issues/157531) 显示已准备 18/21 个 P1 候选），预计近期发布。
- 今日关注焦点集中在**稳定性**：Gateway 内存泄漏、启动/关闭崩溃循环、Windows 更新失败、SQLite 锁竞争等多个 P0 问题持续发酵。
- @steipete 保持高产，今日提交了多个大体积重构（deslop 系列）与状态管理修复 PR；@vincentkoc、@chopin-op60 也有多项新贡献。
- 大量 Issue 仍卡在 `clawsweeper:needs-maintainer-review` 标签上，维护者带宽是当前项目的主要瓶颈。

---

## 2. 版本发布

今日无新版本发布。Release 渠道最新版本仍为 **2026.9.6**，**2026.9.7** 处于修复准备阶段（[#157531](https://github.com/openclaw/openclaw/issues/157531) 追踪，候选源码 `711db27`）。

---

## 3. 项目进展

今日合并/关闭 PR 共 130 个（数据未含明细），从活跃 PR 可见以下推进方向：

**状态管理与数据库可靠性（成体系的修复系列）**
- [PR #159834](https://github.com/openclaw/openclaw/pull/159834)：防止向已退役的 SQLite 路径写入 —— 直击今日多起数据库损坏报告的根因方向。
- [PR #159835](https://github.com/openclaw/openclaw/pull/159835)：修复数据库重定位后的迁移租约丢失。
- [PR #159965](https://github.com/openclaw/openclaw/pull/159965)：修复 Doctor 在迁移旧版状态目录（`~/.clawdbot` → `~/.openclaw`）时失败的问题。
- [PR #158251](https://github.com/openclaw/openclaw/pull/158251)：数据库竞争期间保持子代理注册响应性，缓解 `database is locked` 类问题。

**升级器可靠性**
- [PR #158447](https://github.com/openclaw/openclaw/pull/158447)（P0，待维护者审阅）：修复 Bun Gateway 下托管更新产生 **8,462 个 config-read 子进程** 的问题 —— 与今日多起 `openclaw update` 失败 P0 直接相关。

**诊断与可观测性**
- [PR #160040](https://github.com/openclaw/openclaw/pull/160040)：新增受保护的堆快照与保留差异对比，用于排查 [#154812](https://github.com/openclaw/openclaw/issues/154812) 等 RSS 失控问题。
- [PR #160091](https://github.com/openclaw/openclaw/pull/160091)：Dashboard 更新失败现可在宿主日志中如实显示。

**代码质量（deslop 系列）**
- [PR #159279](https://github.com/openclaw/openclaw/pull/159279)（XL）、[PR #159527](https://github.com/openclaw/openclaw/pull/159527)（XL）、[PR #159752](https://github.com/openclaw/openclaw/pull/159752)（XL）：@steipete 的共享包/auto-reply/Gateway 第四轮去冗余重构，无行为变更意图。

**功能**
- [PR #158742](https://github.com/openclaw/openclaw/pull/158742)：Control UI 会话可从 Discord/Slack 会话头一键返回来源对话。
- [PR #160092](https://github.com/openclaw/openclaw/pull/160092)：插件详情页展示 MCP 登录提示。
- [PR #160093](https://github.com/openclaw/openclaw/pull/160093)：Lobster Packs 与共享 LobsterDex 渲染（创作者自定义角色）。

**总体评估**：数据库/升级器两大系统性问题域正在成体系推进，2026.9.7 若能合并上述状态管理系列，将解决近期反馈中最集中的一批 P0。

---

## 4. 社区热点

| Issue | 评论 | 核心诉求 |
|---|---|---|
| [#58450](https://github.com/openclaw/openclaw/issues/58450)（已关闭/stale） | 17 | Agent 承诺“稍后跟进”但实际未启动任何后台动作 —— 用户对** agent 承诺可信度**的质疑，涉及产品决策 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616)（P1, OPEN） | 16 | hook/工具子进程未被 reap，僵尸进程累积导致运行时劣化（回归） |
| [#157531](https://github.com/openclaw/openclaw/issues/157531)（P0 Tracker） | 15 | 2026.9.7 发布修复追踪帖，社区高度关注发布进度 |
| [#140129](https://github.com/openclaw/openclaw/issues/140129)（P2, OPEN） | 14 | 长会话下 Anthropic 缓存卡在 ~46k 前缀，每轮重写全部历史 —— **成本直接受损**，`session:sanitized` 改写指纹是嫌疑 |
| [#156112](https://github.com/openclaw/openclaw/issues/156112)（P0, OPEN） | 14 | `openclaw update` 在 global install swap 阶段确定性失败，直接 npm install 却 13 秒成功 |
| [#156571](https://github.com/openclaw/openclaw/issues/156571)（P0, OPEN） | 13 | model-catalog worker 以 **1–3 GB/min** 速度填充磁盘 —— 生产网关级风险 |
| [#50093](https://github.com/openclaw/openclaw/issues/50093)（P1, OPEN） | 13 | WhatsApp 断线重连后**静默丢失离线期间消息**，消息型渠道的可靠性诉求 |

**分析**：讨论热度最高的问题集中在两个维度——(1) 资源泄漏（进程/磁盘/内存），(2) 消息可靠性与会话状态完整性。前者威胁生产部署，后者威胁最终用户信任。

---

## 5. Bug 与稳定性（按严重程度）

### P0
| Issue | 问题 | Fix PR |
|---|---|---|
| [#157531](https://github.com/openclaw/openclaw/issues/157531) | 2026.9.7 发布追踪（恢复卡住） | 发布流程内 |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | `openclaw update` 在 swap 阶段失败 | 相关 [#158447](https://github.com/openclaw/openclaw/pull/158447) |
| [#152992](https://github.com/openclaw/openclaw/issues/152992) | Windows 更新在含 `?` 的路径 mkdir ENOENT（`\\?\` 前缀被破坏） | 标记 not-repro-on-main |
| [#157227](https://github.com/openclaw/openclaw/issues/157227)（已关闭） | git→stable 更新后服务重验证失败，Gateway 停机 | — |
| [#156571](https://github.com/openclaw/openclaw/issues/156571) | catalog worker 磁盘泄漏 1–3 GB/min | 关联 [#159514](https://github.com/openclaw/openclaw/issues/159514) |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | Gateway RSS 失控（9.3 GiB）导致宿主 OOM | 诊断支持 [#160040](https://github.com/openclaw/openclaw/pull/160040) |
| [#159514](https://github.com/openclaw/openclaw/issues/159514)（已关闭） | catalog worker 每次请求重建注册表，~8 MB/请求 不可释放 | 关联 #157842 |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | Gateway 启动耗时随插件数线性增长，Discord/codex/weixin 占主导（120s 预算） | ❌ 无 |
| [#157160](https://github.com/openclaw/openclaw/issues/157160) | 迁移未干净完成后 Gateway 崩溃循环 | ❌ 无 |
| [#158126](https://github.com/openclaw/openclaw/issues/158126) | 关闭步骤 `gateway-server-close` 约 50% 概率失败，systemd unit 留在 failed | ❌ 无 |
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | SQLite 在重建后 15–24h 内再次损坏，含“瘫痪但不退出”模式 | 相关 [#159834](https://github.com/openclaw/openclaw/pull/159834) 系列 |
| [#148307](https://github.com/openclaw/openclaw/issues/148307) | 会话回收超 5s busy timeout 导致 `database is locked`（464 MB DB） | 相关 [#158251](https://github.com/openclaw/openclaw/pull/158251) |
| [#158095](https://github.com/openclaw/openclaw/issues/158095) | worker 状态生命周期获取永久失败直至重启 | ❌ 无 |
| [#158936](https://github.com/openclaw/openclaw/openclaw/issues/158936) | macOS 看门狗 SIGTERM 慢启动 Gateway → 重启循环 | ❌ 无 |
| [#160060](https://github.com/openclaw/openclaw/issues/160060) | **今日新报**：Windows 待机恢复后 ~54 分钟“假活”后 Gateway 无声消失，无日志无 dump | ❌ 无 |
| [#112475](https://github.com/openclaw/openclaw/issues/112475) | 设备解绑后配对恢复失败（安全相关） | ❌ 无 |

### P1
- [#97616](https://github.com/openclaw/openclaw/issues/97616)：未 reap 的 hook/工具子进程累积为僵尸（回归）— ❌ 无 fix PR
- [#157986](https://github.com/openclaw/openclaw/issues/157986)：Automations 所有 `agentTurn` 任务因 DataCloneError 失败（已有 linked PR）
- [#144291](https://github.com/openclaw/openclaw/issues/144291)：配置热重载中止所有进行中 agent turn — ❌ 无
- [#123799](https://github.com/openclaw/openclaw/issues/123799)：2026.5.12 生产部署受 Codex compact 404 影响，请求升级/回移植引 — 待响应
- [#157389](https://github.com/openclaw/openclaw/issues/157389)：飞书渠道多 lane 负载下回复丢失（三种失败模式）— ❌ 无

**结论**：P0 中约半数无在途修复，稳定性债务是当前最大风险，尤其**资源泄漏类问题（内存/磁盘/进程）已形成聚类**。

---

## 6. 功能请求与路线图信号

- **上下文压缩架构升级**：[#58398](https://github.com/openclaw/openclaw/issues/58398)（已关闭/stale）建议采纳 Claude Code 的多层压缩架构；结合 [#140129](https://github.com/openclaw/openclaw/issues/140129) 的缓存指纹问题，压缩/上下文管理很可能成为 2026.9.7 之后的重点方向。
- **消息渠道补齐（backfill）**：[#50093](https://github.com/openclaw/openclaw/issues/50093) WhatsApp 断线补回消息；同类 LINE 送达可靠性已有大 PR [#124517](https://github.com/openclaw/openclaw/pull/124517) 在途，渠道可靠性是明确的产品方向。
- **升级安全预检**：[#122019](https://github.com/openclaw/openclaw/issues/122019) 要求 `openclaw update status` 评估插件兼容性与不可逆迁移风险 —— 与本周一系列更新失败 P0 相互印证，**极可能被纳入下一版本**。
- **上下文引擎严格失败策略**：[#116716](https://github.com/openclaw/openclaw/issues/116716)（已关闭/stale），对可靠性敏感部署有需求。
- **MiniMax M3 思考模式分级**：[#89114](https://github.com/openclaw/openclaw/issues/89114)，provider profile 能力缺口。
- **UI/生态**：今日 [PR #160093](https://github.com/openclaw/openclaw/pull/160093)（Lobster Packs）与 [PR #160078](https://github.com/openclaw/openclaw/pull/160078)（SIWC beta 排序）显示 Control UI 与插件生态持续投入。

---

## 7. 用户反馈摘要

**真实痛点（按提及频率与情绪强度）**：
1. **更新即翻车**：多个用户报告 `openclaw update` 在不同平台确定性失败（npm swap、Windows 路径、git→stable 迁移），“直接 npm install 13 秒成功”的对比加重了不满。
2. **静默失败与“假活”**：Windows 待机后无声消失（[#160060](https://github.com/openclaw/openclaw/issues/160060)）、agent 承诺跟进但无动作（[#58450](https://github.com/openclaw/openclaw/issues/58450)）—— 用户最不能接受的是**缺乏可观测性**。
3. **成本异常**：Anthropic 缓存失效导致每轮重写 ~380k token（[#140129](https://github.com/openclaw/openclaw/issues/140129)）、Codex prompt 缓存命中率 93%→47%（[#84110](https://github.com/openclaw/openclaw/issues/84110)），重度用户账单直接受损。
4. **消息丢失**：WhatsApp/飞书/LINE 等渠道在断线、多 lane 负载、崩溃中断时的消息可靠性问题反复出现。
5. **工具死循环刷屏**：中文社区反馈（[#55694](https://github.com/openclaw/openclaw/issues/55694)）agent 工具失败后重试 20+ 次并对用户刷屏。

**满意点**：issue 模板与分级标签体系（P0–P3、impact 标签）完善，社区报告质量高；`clawsweeper` 自动化分诊在运转，多数问题能快速打上结构化标签。

---

## 8. 待处理积压（维护者关注提醒）

| 项目 | 状态 | 说明 |
|---|---|---|
| [#97616](https://github.com/openclaw/openclaw/issues/97616)（P1，6/29 提出） | needs-maintainer-review，3 个月 | 僵尸进程泄漏，16 条评论 |
| [#50093](https://github.com/openclaw/openclaw/issues/50093)（P1，3/19 提出） | needs-product-decision，6 个月 | WhatsApp 消息 backfill |
| [#144291](https://github.com/openclaw/openclaw/issues/144291)（P1） | needs-product-decision + needs-security-review | 配置热重载中止 agent turn |
| [#123799](https://github.com/openclaw/openclaw/issues/123799)（P0） | needs-info | **生产部署求升级/回植指引，运维被困** |
| [#112475](https://github.com/openclaw/openclaw/issues/112475)（P0，7/22 提出） | needs-security-review，2 个月 | 设备配对恢复失败，安全相关 |
| [#122019](https://github.com/openclaw/openclaw/issues/122019)（P2） | needs-product-decision | 升级安全预检 |
| [#84110](https://github.com/openclaw/openclaw/issues/84110)（P2，5/19 提出） | 4 个月 | Codex prompt 缓存 busted，成本影响 |
| [#127239](https://github.com/openclaw/openclaw/issues/127239)（P2） | queueable-fix | 上下文窗口静默回退 200k 硬编码默认 |
| PR [#124517](https://github.com/openclaw/openclaw/pull/124517)（P1，8/16 提交） | needs proof，>1 个月 | LINE 送达丢失/重复修复，XL 体量需尽早审阅 |

**结构性观察**：`clawsweeper:no-new-fix-pr` 标签几乎覆盖全部热点 Issue，配合 370 个待合并 PR，**维护者评审带宽是项目当前最紧的约束**。建议优先处理资源泄漏类 P0 聚类与 #123799 的生产运维求助。

---

*数据来源：GitHub API（Issues/PR 更新统计截至 2026-09-28）。本报告基于评论数 Top 50 Issues 与 Top 30 PRs，非全量分析。*

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告
**数据日期：2026-09-28**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入“功能趋同、可靠性分化”阶段：各项目普遍具备多渠道消息接入（WhatsApp/飞书/Teams/Discord/OneBot 等）、MCP 工具生态、审批监督模式等基础能力，竞争焦点正转向**稳定性、资源治理与安全边界**。生态呈明显头部效应——OpenClaw 以单日 1000 条 Issue/PR 更新的体量占据超级生态位，其余项目形成 2-3 个活跃度梯队。三大系统性痛点横跨几乎所有项目：**更新/安装链路可靠性**、**上下文与成本管理**、**授权与数据安全**。新模型（GPT-6、DeepSeek-V4.1-Flash、Tsubasa）发布后 1-3 天内即出现社区适配需求，模型兼容速度成为项目响应能力的直接试金石。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（关 100） | 500（合并/关 130） | 无（2026.9.7 筹备中，18/21 P1 就绪） | ⚠️ 输入压力巨大，关闭率 20%，维护者带宽是瓶颈；P0 约半数无在途修复 |
| **Hermes Agent** | 50（关 6） | 50（合并仅 1，49 待合并） | 无 | ⚠️ 修复管线厚实但合并吞吐极低；update 链路 bug 密度最高 |
| **Zeroclaw** | 40（关 9） | 50（合并 15） | 无 | ✅ 主线清晰（v0.9.0 网关拆分），stacked PR 管理规范；S0 安全问题集中暴露 |
| **CoPaw** | 9（关 2） | 7（关 4） | 无 | ✅ 高质量推进日：上下文核心修复落地，闭环率高 |
| **NanoBot** | 4（关 1） | 21（关 7） | 无 | ✅ 当日“报告→修复→关闭”闭环（#5939→#5940），响应周期最短 |
| **NullClaw** | 18（关 16） | 10（关 8） | 无 | ✅ 清库存+补安全，疑似发版前整理；安全修复 #1012 待合并 |
| **NanoClaw** | 1 | 38（关 9，29 待合并） | 无 | ✅ Bug 全部有 fix PR（闭环率 100%），但 29 条 PR 审查积压 |
| **IronClaw** | 2（新开） | 6（关 1） | 无 | ⚠️ 维护性迭代为主，无功能合入，人工审查吞吐偏低 |
| **Moltis** | 1 | 3（0 合并） | 无 | ✅ 社区响应快，但合并停滞约一周 |
| **PicoClaw** | 4（关 1） | 2（0 合并） | 无 | 🔴 维护者审合停滞，生产级 bug 被 stale 掩盖 |
| **LobsterAI** | 5（关 3） | 9（关 8） | 无 | ✅ 核心贡献者高频产出；⚠️ 安全 Issue 被 stale 批量关闭存疑 |
| **EasyClaw** | 0 | 0 | **v1.9.24** | 稳定小步快跑，社区沉寂 |
| TinyClaw / ZeptoClaw | 0 | 0 | 无 | 无活动 |

**观察**：今日全生态零发布（除 EasyClaw 小版本），与 OpenClaw 2026.9.7、Zeroclaw v0.8.6 的修复周期吻合——生态整体处于版本间歇期。

---

## 3. OpenClaw 在生态中的定位

**规模断层领先**：单日 1000 条 Issue/PR 更新约为第二名（Hermes/Zeroclaw，各 50+40~50）的 **10-20 倍**，社区讨论密度（单 Issue 13-17 条评论）也远超同类。

**优势**：
- **生态广度**：渠道（Discord/Slack/WhatsApp/飞书/LINE/weixin）、插件体系、Lobster Packs 创作者经济、Control UI，是唯一形成“平台化”特征的项目
- **基础设施成熟**：issue 分级体系（P0-P3）、`clawsweeper` 自动分诊、诊断工具链（#160040 堆快照）——下游项目（LobsterAI 直接基于 OpenClaw 网关机制开发锁修复）甚至以其为运行时底座
- **贡献者纵深**：@steipete 单日多个 XL 重构，核心团队产能稳定

**劣势与风险**：
- **稳定性债务最重**：17+ 个在册 P0，资源泄漏（内存 9.3 GiB / 磁盘 1-3 GB/min / 僵尸进程）已形成聚类，约半数无在途修复
- **维护者带宽**：370 个待合并 PR + 大量 `needs-maintainer-review`，对比 NanoBot 的当日闭环，响应延迟明显
- **成本可靠性**：缓存失效（#140129 每轮重写 ~380k token）直接损害重度用户

**技术路线差异**：OpenClaw 走 TypeScript/Bun Gateway + 插件式单体的“广度优先”路线；Zeroclaw 走 Rust 单二进制 + 类型化授权框架（#11205 `AuthorizedOp`）+ WASM 插件化的“正确性优先”路线；NanoBot/NanoClaw 走轻量嵌入式路线。Zeroclaw 的安全架构和 NanoBot 的响应速度恰是 OpenClaw 当前最弱的两项。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **① 更新/安装链路可靠性** | OpenClaw（#156112 等多平台 P0、8462 子进程）、Hermes（>10 条 update Issue：partial clone/镜像源/DACL）、NullClaw（#354 Homebrew）、NanoClaw（#3948/#3913） | 自更新是全生态最高密度的 bug 簇；“直接 npm install 13 秒成功”式对比反复出现 |
| **② 上下文管理与 token 成本** | OpenClaw（#140129 缓存失效、#58398 多层压缩）、CoPaw（#7853 媒体 base64 累积、#4525 自动 reset）、Hermes（#125366 节省 283 MB）、IronClaw（#8113 turn-0 工具预选择）、NanoBot（#5865 上下文预算） | 长会话/自动化任务下的上下文治理与缓存命中是共性最大痛点 |
| **③ 新模型/Provider 快速适配** | NanoBot（GPT-6 三连修）、Moltis（deepseek-flash 当日修复）、NanoClaw/PicoClaw/NullClaw/IronClaw（Tsubasa 五个项目同日接入！） | 硬编码模型 ID 启发式是共性架构脆弱点（Moltis #1286 根因） |
| **④ 授权/审批/安全边界** | Zeroclaw（7 个 S0 授权漏洞 + #11205 框架化）、NullClaw（#974 A2A 越权、#969/#1009 审批流）、CoPaw（#8002 COM 越权）、LobsterAI（#1041 P0 SSRF）、Hermes（#107356 依赖漏洞堆积） | 从“逐个打补丁”走向结构化审批与类型化授权 |
| **⑤ 持久化 SQLite 化** | OpenClaw（#159834 系列迁移修复）、NanoBot（#5943 JSONL→SQLite）、LobsterAI（#2771 基于 SQLite 事务的锁）、NanoClaw（SqliteError 修复） | JSONL/文件存储向事务性存储迁移是明确趋势 |
| **⑥ 多渠道消息可靠性** | OpenClaw（WhatsApp/LINE/飞书丢失）、NullClaw（Matrix/Teams/Email）、Hermes（企微/iMessage）、PicoClaw（DingTalk panic） | 断线 backfill、重连游标持久化（NullClaw #968 是范本） |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Zeroclaw | Hermes Agent | NanoBot / NanoClaw | CoPaw / LobsterAI | PicoClaw / NullClaw / Moltis |
|---|---|---|---|---|---|---|
| **定位** | 全能个人 AI 助手平台 | 安全优先的常驻网关 | 桌面+多渠道助手 | 轻量嵌入式 agent | 桌面生产力（办公文档/终端） | 渠道适配/垂直场景 |
| **架构** | TS/Bun Gateway + 插件单体 | Rust 单二进制 + RPC 拆分 + WASM 插件 | Python + 桌面端 | Python，SQLite 化中 | Electron 桌面 + artifacts | Go/Python 多实现 |
| **目标用户** | 重度自托管/生产部署 | 安全敏感长期运行 | 桌面个人用户 | 开发者快速集成 | 办公/编码用户 | 国内生态（QQ/钉钉/飞书）、特定社区 |
| **差异化亮点** | Lobster Packs 创作者经济、Control UI | 类型化授权框架、知识图谱记忆 RFC | 回合级时间上下文（#10421）、iMessage | ripgrep 原生搜索、远程实例连接 | Word 编辑、多标签终端、快照回滚 | OneBot reaction 开关、双向 Email |

---

## 6. 社区热度与成熟度分层

- **超级生态（快速扩张但债务累积）**：OpenClaw —— 输入量最大，处于“规模与稳定性的赛跑”阶段，2026.9.7 是关键节点
- **高质量工程期（架构巩固）**：Zeroclaw（安全审计框架化）、NanoBot（当日闭环）、CoPaw（核心修复落地）、NullClaw（发版前清理）—— 均在为下一版本做体系性铺垫
- **修复管线厚但吞吐不足**：Hermes（49 PR 待合并）、NanoClaw（29 PR 待合并）—— 社区贡献充足，瓶颈在维护者
- **维护放缓预警**：PicoClaw（生产 bug 被 stale）、LobsterAI（安全 Issue 被 stale 关闭）、IronClaw（依赖升级积压 5 周）—— stale 机器人正在掩盖真实问题
- **沉寂/无活动**：TinyClaw、ZeptoClaw、EasyClaw（后者为健康的稳定迭代）

**共性成熟度信号**：多数项目 Issue 报告质量高（含源码级根因分析），说明用户群已从尝鲜者转向深度开发者与半生产环境运维者。

---

## 7. 值得关注的趋势信号

1. **“自更新”是智能体软件的新分发难题**：至少 5 个项目今日有 update 链路 bug。智能体常驻运行 + 跨平台 + 插件生态的组合使传统包管理假设失效。OpenClaw #122019（升级安全预检）预示“升级预检/回滚”将成为标配能力。
2. **上下文治理成为第二战场**：从被动压缩转向主动生命周期管理——CoPaw 的自动 checkpoint/reset、IronClaw 的 turn-0 工具预选择、OpenClaw 的多层压缩架构，均在重新设计“上下文作为可运营资源”。对开发者：**缓存指纹稳定性与媒体内容回收**应作为一等工程问题。
3. **安全从功能走向架构**：Zeroclaw 用 `AuthorizedOp` 类型化授权根治 TOCTOU/越权类漏洞，NullClaw 落地结构化两轮审批流。AI 智能体的攻击面（A2A 越权、deep link 伪造、COM 越权、子代理权限继承）正在形成独立的安全工程子领域。
4. **模型能力协商将取代硬编码**：Tsubasa 同日五项目接入、GPT-6/deepseek-flash 适配潮，暴露基于模型 ID 启发式的脆弱性。provider profile 的**动态能力上报/协商机制**是明确的架构演进方向。
5. **JSONL → SQLite 持久化迁移潮**：三个项目同时进行事务化存储重构，会话状态完整性（防损坏、防锁竞争、崩溃恢复）被验证为个人助手的硬需求。
6. **维护者带宽是全生态第一约束**：从 OpenClaw 的 370 PR 到 PicoClaw 的 stale 危机，人工审查吞吐普遍跟不上社区输入。**AI 辅助代码审查/分诊**（如 clawsweeper 的进化）本身就是智能体技术最直接的落地场景——吃自己的狗粮可能是破局点。

---

*方法论说明：基于各项目 2026-09-28 单日 GitHub 活动快照，非全量统计；跨项目结论（如 Tsubasa 接入潮）以同日多仓库一致性交叉验证。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-09-28

## 1. 今日速览

过去 24 小时 NanoBot 保持高活跃度：21 条 PR 更新（14 个待合并、7 个已合并/关闭）、4 条 Issue 更新（3 新开/活跃、1 关闭），无新版本发布。当前开发重心集中在三条主线：**GPT-6 系列模型的 Provider 兼容性修复**、**会话持久化架构升级（SQLite 化）**、以及**运行时稳定性（cron 持久化、Responses 流解析）**。值得注意的是社区贡献者与核心开发者（@chengyongru、@Re-bin、@Shizoqua 等）协作紧密，多个 Issue 当天即有对应 fix PR，问题响应周期短，项目健康度良好。

## 2. 版本发布

今日无新版本发布。但已关闭的一批 P1/P2 修复（详见第 3 节）已具备进入下一个 patch 版本的条件。

## 3. 项目进展

今日共关闭/合并 7 个 PR，主要进展：

**模型 Provider 兼容性（GPT-6 支持基本闭环）**
- [#5940](https://github.com/HKUDS/nanobot/pull/5940)（CLOSED）：更新 Codex 目录请求的 `client_version` 至 0.158.0，使 GPT-6 Sol / Luna 出现在模型发现列表中，并补充测试。与 Issue [#5939](https://github.com/HKUDS/nanobot/issues/5939) 形成“报告→修复→关闭”闭环。
- [#5937](https://github.com/HKUDS/nanobot/pull/5937)（CLOSED，P1）：Responses API 流在 `response.completed`/`incomplete` 终止事件后立即停止解析，不再等待 EOF，修复流挂起问题。
- [#5938](https://github.com/HKUDS/nanobot/pull/5938)（CLOSED，P1，回归修复）：Responses 工具转换保留可选参数（如 `strict`），避免 MCP 可选过滤器被强制必填导致 Linear 等工具调用失败。
- [#5935](https://github.com/HKUDS/nanobot/pull/5935)（OPEN）：将 Copilot GPT-6 路由至 Responses API，直接对应 Issue [#5898](https://github.com/HKUDS/nanobot/issues/5898)。

**WebUI 与通道修复**
- [#5934](https://github.com/HKUDS/nanobot/pull/5934)（CLOSED）：修复更早历史分页在视口未填满时不可达的问题，并增加加载/失败反馈。
- [#5936](https://github.com/HKUDS/nanobot/pull/5936)（CLOSED）：抑制微信通道每 18 秒一次的 httpx INFO 轮询日志（对应 #5900）。
- [#5865](https://github.com/HKUDS/nanobot/pull/5865)（CLOSED）：修复较小的 fallback 上下文窗口错误地压缩主模型 context budget 的问题。

**待合并的高价值 PR（14 个 OPEN）**
- [#5943](https://github.com/HKUDS/nanobot/pull/5943)（P1）：会话状态权威存储从 JSONL 迁移到 SQLite 事务，是持久化架构的重大重构。
- [#5948](https://github.com/HKUDS/nanobot/pull/5948)：检测到系统已安装 ripgrep 时，用原生 `rg` 进程替代 `grep`/`find_files`，提升文件搜索性能。
- [#5946](https://github.com/HKUDS/nanobot/pull/5946)：在工具执行批次边界持久化已完成的工具结果，提升崩溃恢复能力。
- [#5941](https://github.com/HKUDS/nanobot/pull/5941)：本地 WebUI 直连远程服务器上已运行的 nanobot 实例（NAN-157）。

## 4. 社区热点

- **[#5939](https://github.com/HKUDS/nanobot/issues/5939)**（已关闭）：用户报告 WebUI 中 Codex 供应商缺少 GPT-6 Sol/Luna，根因是 `client_version` 版本固定过旧。该 Issue 从报告到 PR 合入仅 1 天，体现快速响应能力。
- **[#5898](https://github.com/HKUDS/nanobot/issues/5898)**：v0.3.5 通过 GitHub Copilot 使用 GPT-6 系列报“provider request failed”，反映 GPT-6 用户的升级痛点；修复 PR #5935 已提交待合并。
- **[#5924](https://github.com/HKUDS/nanobot/issues/5924)**：Agent 陷入 sudo 循环（sudo 授权只持续一轮），且达到最大迭代后仍“执念”于失败命令——涉及权限模型与迭代恢复机制两个产品层设计问题，尚无 fix PR，值得关注。
- **[#5780](https://github.com/HKUDS/nanobot/pull/5780)**：社区对后台上下文压缩通知被打扰的不满，作者质疑 #5656 的行为是否符合预期，属于产品体验层面的讨论。

## 5. Bug 与稳定性（按严重程度排列）

| 严重度 | 问题 | 状态 |
|---|---|---|
| **P0** | [#5932](https://github.com/HKUDS/nanobot/issues/5932) CronService 在 store 写失败（如 ENOSPC）时已清空 `action.jsonl`，导致待执行任务**永久丢失** | ✅ 已有 fix PR [#5933](https://github.com/HKUDS/nanobot/pull/5933)（先保存后清除，保留原子写入） |
| **P1** | [#5924](https://github.com/HKUDS/nanobot/issues/5924) Agent sudo 循环卡死，达到迭代上限后持续重试失败命令 | ❌ 尚无 fix PR |
| **P1** | Responses 流挂起（等待 EOF） | ✅ #5937 已关闭 |
| **P1** | Responses 工具可选参数被强制化（回归） | ✅ #5938 已关闭 |
| **P2** | [#5898](https://github.com/HKUDS/nanobot/issues/5898) Copilot 下 GPT-6 不可用 | 🔄 fix PR #5935 待合并 |
| **P2** | #5900 微信轮询日志刷屏 | ✅ #5936 已关闭 |

## 6. 功能请求与路线图信号

- **原生 ripgrep 搜索**（[#5948](https://github.com/HKUDS/nanobot/pull/5948)）：性能导向的功能增强，已含完整文档与测试，大概率进入下个版本。
- **新 Provider 接入**（[#5947](https://github.com/HKUDS/nanobot/pull/5947)）：Tsubasa provider（`tsubasa-fast`/`tsubasa-pro`），复用 OpenAI 兼容客户端，接入成本低。
- **Unbrowse 阅读后端**（[#5945](https://github.com/HKUDS/nanobot/pull/5945)）：由 @lekt9 提交，为 `web_fetch` 增加可选的 Unbrowse 优先级链（Unbrowse → Jina → 本地 readability），向后兼容。
- **远程实例连接**（[#5941](https://github.com/HKUDS/nanobot/pull/5941)，NAN-157）：官方 Linear 路线图条目，明确在计划内。
- **会话 SQLite 化 + 事件循环卸载**（#5943、#5580、#5861）：一组系统性架构升级，暗示下个 minor 版本将重点提升 WebUI 并发与性能。

## 7. 用户反馈摘要

- **GPT-6 升级潮**：多个 Issue（#5898、#5939）显示用户急于在新模型发布后立即在 NanoBot 中使用，模型兼容性滞后已成为主要不满来源。
- **可靠性敏感**：#5924（sudo 循环）与 #5932（cron 任务丢失）来自真实使用场景（服务器运维、定时任务），说明有用户将 NanoBot 用于半自动化生产环境，对权限处理与数据持久化要求高。
- **通知打扰**：#5780 反映用户对非必要通知（后台压缩提示）的低容忍，希望有配置开关。
- **正面信号**：Issue 报告质量高（含复现步骤与根因分析，如 #5939 用户自行定位到 `client_version`），社区用户技术能力强、参与修复意愿高。

## 8. 待处理积压

- **[#5924](https://github.com/HKUDS/nanobot/issues/5924)（sudo 循环）**：已开 2 天，仅 1 条评论，无 assign/fix PR，且涉及权限与迭代恢复的产品设计，建议维护者优先响应。
- **[#5861](https://github.com/HKUDS/nanobot/pull/5861)（tokenizer 后台预热，P1）**：已开 6 天，标记 conflict，需 rebase 后推进。
- **[#5580](https://github.com/HKUDS/nanobot/pull/5580)（会话持久化移出事件循环，P1）**：已开近 1 个月，与 #5943（SQLite 化）存在架构关联，建议二者协调合并顺序，避免重复返工。
- **[#5780](https://github.com/HKUDS/nanobot/pull/5780)（压缩通知）**：已开 13 天、标记 conflict，且涉及产品决策（是否加配置项），需维护者表态。

---
*数据来源：GitHub API，统计窗口 2026-09-27 至 2026-09-28。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 · 2026-09-28

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时 Issues 更新 40 条（新开/活跃 31，关闭 9），PR 更新 50 条（待合并 35，已合并/关闭 15），无新版本发布。项目当前有三条清晰主线并行推进：**v0.9.0 网关拆分（RPC/HTTP 核心对齐）**、**身份与访问控制安全加固**、**发布工程（crates.io 发布链路）修复**。值得注意的是，核心维护者 @Audacity88 在 9 月底密集报告了一批 S0 级安全审查发现（#11123–#11199），社区对安全边界的关注达到高峰。

---

## 2. 版本发布

今日无新版本发布。当前主线仍为 v0.8.5 之后的修复期，v0.8.6 / v0.9.0 的交付由 Tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 管理。

---

## 3. 项目进展

今日已合并/关闭的关键 PR（15 条中代表性条目）：

- **[#11206](https://github.com/zeroclaw-labs/zeroclaw/pull/11206)** `fix(gateway): recheck config-write authority under the lock, not at admission` —— 修复网关配置写入授权在 admission 时校验、锁内不复查的竞态漏洞（TOCTOU），是安全加固主线的重要一步。
- **[#11151](https://github.com/zeroclaw-labs/zeroclaw/pull/11151)** `fix(rpc): honour the agent parameter on memory methods` —— RPC memory 方法正确校验 `agent` 参数，同时保持 principal 私有内存平面，修复了内存越权访问面。
- **[#9846](https://github.com/zeroclaw-labs/zeroclaw/pull/9846)** `fix(runtime): preserve local socket ownership` —— 通过持久 `.lock` 文件序列化 Unix IPC 端点完整生命周期，修复本地 socket 所有权问题（P1）。
- **[#11071](https://github.com/zeroclaw-labs/zeroclaw/pull/11071)** `perf(ci): debounce master-push runs` —— CI 去抖优化，避免编译集群被突发 push 浪费性取消，属于发布效率 Tracker [#10814](https://github.com/zeroclaw-labs/zeroclaw/issues/10814) 的落地项。
- **[#10824](https://github.com/zeroclaw-labs/zeroclaw/pull/10824)** `fix(rpc): report denied batch entries and verify authorization` —— 批量 RPC 报告被拒条目并复核授权。

**待合并的大体量 PR（v0.9.0 前进信号）：**
- [#11172](https://github.com/zeroclaw-labs/zeroclaw/pull/11172)（XL）config 路由 RPC 对齐、[#11169](https://github.com/zeroclaw-labs/zeroclaw/pull/11169)（XL）SOP RPC 对齐、[#11176](https://github.com/zeroclaw-labs/zeroclaw/pull/11176)（L）cron/memory/skills RPC 对齐 —— 三条 PR 构成 v0.9.0 网关进程外拆分的"P4/P5 核心对齐"批次，节奏紧凑。
- [#11205](https://github.com/zeroclaw-labs/zeroclaw/pull/11205)（XL）`authority recheck foundation` —— 引入 `AuthorizedOp` / `Admitted` / `Effect` 类型化授权基础，是系统性解决近期 S0 授权漏洞的架构级铺垫，今日新开。
- [#11194](https://github.com/zeroclaw-labs/zeroclaw/pull/11194)（XL）**新增 Microsoft Teams (Bot Framework) 渠道**，社区贡献者 @wadeling 提交。
- 发布链路修复栈：[#11105](https://github.com/zeroclaw-labs/zeroclaw/pull/11105) → [#11095](https://github.com/zeroclaw-labs/zeroclaw/pull/11095) → [#11091](https://github.com/zeroclaw-labs/zeroclaw/pull/11091) 分层推进 crates.io 发布前验证，针对 v0.8.5 两次发布失败。

**评估：** 项目以每 1–2 天一个 XL PR 切片的速度推进 v0.9.0，工程节奏健康、review 栈管理规范（stacked PR 明确标注依赖）。

---

## 4. 社区热点

评论最多的讨论：

1. **[#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)**（6 评论）—— 将可选渠道/工具从编译期 Cargo feature 迁移到**运行时可安装的 WASM 插件**。这是架构方向性议题：让单二进制无需重编译即可扩展能力，直接关系分发体验与二进制体积。
2. **[#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816)**（5 评论，P1）—— Anthropic provider 全部记录 `cost_usd: 0.0`，导致**日/月预算上限永远不触发**。成本失控风险对个人 AI 助手用户是硬痛点，处于 in-progress。
3. **[#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381)**（5 评论）—— crates.io 发布/打包后续 Tracker，与 #11105/#11095/#11091 PR 栈呼应，Windows 无开发者模式 checkout 被软链破坏是对 Windows 用户的实际影响点。
4. **[#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523)**（5 评论，已关闭）—— bootstrap 文件 6000 字符静默截断、运维者不可见。已关闭，说明已有修复落地。
5. **[#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053)**（3 评论）—— RFC：知识图谱作为**一等公民记忆层**（当前仅是工具）。诉求是记忆自动捕获/浮现 vs 需 agent 主动调用的边界重划，属长期架构讨论。

**诉求分析：** 社区讨论集中在三个方向——插件化架构（可扩展性）、成本可观测性（真实花销控制）、记忆层级设计（agent 自主性），均指向"个人 AI 助手长期运行的可运营性"。

---

## 5. Bug 与稳定性（按严重度排列）

### S0 —— 数据丢失 / 安全风险
| Issue | 描述 | Fix 状态 |
|---|---|---|
| [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) (P0) | 会话恢复在 admin 授权被撤销后仍还原转发的环境变量 | 已接受，[#11205](https://github.com/zeroclaw-labs/zeroclaw/pull/11205) authority 基础铺垫中 |
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) (P0) | 委托 memory 工具丢失 principal 范围，子 agent 可越权访问 | 已接受，follow-up |
| [#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) (P1) | 排队会话操作保留已降级管理员的 ownership bypass | 无直接 fix PR |
| [#11127](https://github.com/zeroclaw-labs/zeroclaw/issues/11127) (P1) | session-data 工具绕过 principal 所有权检查（可读他人会话历史） | 无直接 fix PR |
| [#11123](https://github.com/zeroclaw-labs/zeroclaw/issues/11123) (P1) | SOP 执行接受通配工具选择器而无需 `tools:execute` | 无直接 fix PR |
| [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136) (P1) | 并发 `file_edit/file_write` 同路径静默丢编辑（数据丢失） | 无 fix PR，需关注 |

### S1 —— 工作流受阻
- [#11130](https://github.com/zeroclaw-labs/zeroclaw/issues/11130) (P1)：DeepSeek DSML 工具调用标记不被解析，裸标记泄漏到渠道且回合静默结束。in-progress。
- [#11180](https://github.com/zeroclaw-labs/zeroclaw/issues/11180)：并行 runtime 门控下 payload 捕获测试 flaky，间歇性阻塞 CI。

### S2 —— 降级行为
- [#10186](https://github.com/zeroclaw-labs/zeroclaw/issues/10186)：终端 fallback 文本绕过 live delivery 接缝。
- [#11129](https://github.com/zeroclaw-labs/zeroclaw/issues/11129)：记忆内容扫描 `send_to_url` 模式误杀含 URL 的普通 SOP 审计文本（过度拦截）。
- [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028)：Windows Ctrl+C 强制退出（exit code 1073741510），长期未解决。

**安全观察：** #11123/#11126/#11127 均来自对已合入 #10265 的源码复审，#11197/#11198/#11199 为同批发现——团队正在进行系统性的授权边界审计，#11205 PR 表明正在用类型化授权框架（而非逐个打补丁）根治此类问题。

---

## 6. 功能请求与路线图信号

**可能进入 v0.8.6 / v0.9.0：**
- **Microsoft Teams 渠道**（[PR #11194](https://github.com/zeroclaw-labs/zeroclaw/pull/11194)，XL 已开）——最接近落地的新能力。
- **RPC/HTTP 核心对齐批次**（#11172/#11169/#11176）——v0.9.0 网关拆分 (#7432) 的必经路径，合并节奏表明 v0.9.0 在稳步接近。
- **发布工程修复栈**（#11105/#11095/#11091）——为下一次 crates.io 发布铺路，暗示近期可能有发布尝试。
- **`relay claim` 自助注册**（[PR #10592](https://github.com/zeroclaw-labs/zeroclaw/pull/10592)）与 **`config/set-many` 原子批量配置**（[Issue #10822](https://github.com/zeroclaw-labs/zeroclaw/issues/10822)，已关闭）。

**长期/parking-lot（信号明确但排期靠后）：**
- WASM 运行时插件化（#8850，in-progress）
- 实时语音 host 渠道（[#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943)，Wyoming 对齐）
- Discord 角色授权（[#9970](https://github.com/zeroclaw-labs/zeroclaw/issues/9970)，已接受）与 Discord `/ask` 关闭开关（[#11150](https://github.com/zeroclaw-labs/zeroclaw/issues/11150)，in-progress）
- 知识图谱记忆层 RFC（#11053）

---

## 7. 用户反馈摘要

- **成本失控焦虑：** #9816 反映用户依赖预算上限控制 API 支出，成本恒为 $0 意味着"安全阀完全失效"——对个人用户是最直接的金钱痛点。
- **静默失败最伤信任：** #10523（截断不可见）、#11136（编辑静默丢弃）、#11130（回合静默结束）共同指向一个主题：**用户最不能接受的是无声的数据丢失和假成功**。#11203 PR（malformed tool-protocol 耗尽应报错而非返回成功）正是对此类问题的直接回应。
- **Windows 体验是短板：** #9028（Ctrl+C 强退）长期未修，#9381 中软链破坏无开发者模式的 checkout，Windows 用户持续付出额外成本。
- **渠道生态需求真实：** Teams（#11194）、Signal Note to Self（#9158）、Discord 细粒度控制（#9970/#11150）显示用户把 Zeroclaw 当作多平台常驻助手，渠道覆盖广度是选型关键。
- **免费/第三方端点兼容性：** #11036（OpenCode big-pickle 403，已关闭）和 DeepSeek DSML（#11130）说明 OpenAI-compatible 生态的长尾兼容仍是高频摩擦点。

---

## 8. 待处理积压

| 条目 | 状态 | 建议关注点 |
|---|---|---|
| [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136) 并发文件编辑丢数据 (P1/S0) | in-progress，但**无关联 fix PR** | 数据丢失级 bug，建议尽快指派修复 |
| [#11123](https://github.com/zeroclaw-labs/zeroclaw/issues/11123) / [#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) / [#11127](https://github.com/zeroclaw-labs/zeroclaw/issues/11127) 三个 S0 授权问题 | 接受/报告后无独立 fix PR | 均依赖 #11205 authority 框架，需明确排期 |
| [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028) Windows Ctrl+C 强退 | 2026-07-13 开，无 stale 标记但长期无修复 | Windows 用户可感知的老问题 |
| [#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) 知识图谱记忆 RFC | needs-author-action | 架构级讨论，避免搁置过久失去动力 |
| [#10652](https://github.com/zeroclaw-labs/zeroclaw/pull/10652) CLI memory 存储别名解析 | needs-author-action + needs-maintainer-review，9-06 开至今 | 社区贡献者 PR 滞留 3 周，注意贡献者留存 |
| [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) 图片请求 400 恢复（XL） | needs-maintainer-review，8-30 开 | 大体量修复长期待审，建议排期 |
| [#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) SessionBackend 所有权契约（XL） | 8-27 开，持续更新中 | 与当前安全主线高度相关，可优先 |

**健康度总评：** 活跃度高、主线清晰、安全审计主动且系统性（从逐个修补转向 #11205 框架化解决）。风险点在于 S0 级问题短期集中暴露且部分尚无 fix，以及 3 条 XL 社区 PR 待审积压——建议维护者优先消化安全 backlog 与 reviewer 队列。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-28

---

## 1. 今日速览

今日 Hermes Agent 保持高活跃度：过去 24 小时共 50 条 Issue 更新（44 新开/活跃、6 关闭）和 50 条 PR 更新（49 待合并、1 已合并/关闭），无新版本发布。Issue 侧焦点集中在 **`hermes update` 安装/更新链路的大量兼容性缺陷**（涵盖 Linux、Windows、partial clone、镜像源等多种环境）以及 **依赖安全漏洞持续堆积**；PR 侧则呈现社区贡献活跃的修复潮，覆盖 cron 调度器、桌面端、消息网关和性能优化。整体健康度：社区贡献充足，但 update 路径的 bug 密度和安全债需要维护者优先处理。

---

## 2. 版本发布

今日无新版本发布（Releases 为空）。桌面端版本号滞留问题依然未解（见 Issue #68783）。

---

## 3. 项目进展

今日仅 1 条 PR 合并/关闭，合并吞吐偏低，但**49 条待合并 PR 形成了厚实的修复管线**，主要方向包括：

- **Cron 调度器修复系列**（本周持续推进）：
  - [#125984](https://github.com/NousResearch/hermes-agent/pull/125984) — 为 PM 管理环境下的 worker 修复 `PYTHONPATH` 依赖定位
  - [#124872](https://github.com/NousResearch/hermes-agent/pull/124872) — 规范化手编 `jobs.json` 的 `repeat.times` 字段
  - [#125455](https://github.com/NousResearch/hermes-agent/pull/125455) — cron 独立发送失败时保留 adapter 重连通道
- **平台适配增强**：Mattermost 原生执行审批按钮 + ntfy 升级（[#124063](https://github.com/NousResearch/hermes-agent/pull/124063)）、飞书真实 @ 提及（[#124952](https://github.com/NousResearch/hermes-agent/pull/124952)）、Telegram 按钮回调转发给插件（[#125725](https://github.com/NousResearch/hermes-agent/pull/125725)）、iMessage 线程内回复（[#123615](https://github.com/NousResearch/hermes-agent/pull/123615)）
- **性能优化**：[#125366](https://github.com/NousResearch/hermes-agent/pull/125366) 修复 DeepSeek/Kimi 推理内容双重存储（实测节省 ~283 MB / 2.35 GB profile）
- **桌面端稳定性**：Linux GPU 子进程初始化失败的软件渲染回退（[#124898](https://github.com/NousResearch/hermes-agent/pull/124898)）、无 TTY 时 sudo 快速失败（[#124338](https://github.com/NousResearch/hermes-agent/pull/124338)）

---

## 4. 社区热点

| Issue | 评论 | 核心诉求 |
|---|---|---|
| [#10421](https://github.com/NousResearch/hermes-agent/issues/10421) Turn-level live time context | 22 | Agent 缺乏稳定的"当前时间"感知，需要回合级时间注入而非依赖工具调用，长期热议的功能设计讨论 |
| [#107356](https://github.com/NousResearch/hermes-agent/issues/107356) 安全漏洞堆积 | 13 | @eabase 持续追踪 npm 依赖漏洞，18 项中 12 项为 High，反映社区对安全债的不满 |
| [#122299](https://github.com/NousResearch/hermes-agent/issues/122299) kanban worker spawn argv 在 bare-interpreter 下崩溃 | 13 | 父进程可导入性检查对子进程不成立，与 #124694/#125984 系列 PR 直接相关，cron/kanban 外部 worker 启动是本周高频痛点 |
| [#122438](https://github.com/NousResearch/hermes-agent/issues/122438) Linux 桌面启动器自愈改写 Exec | 9 | `hermes update` 后 GNOME 图标启动失败，安装路径管理越权问题 |
| [#124794](https://github.com/NousResearch/hermes-agent/issues/124794) partial clone 递归 fetch 进程树失控 | 7 | 8 GB ARM 机器 swap 耗尽、负载 49，缺乏进程组隔离，影响较重 |
| [#124211](https://github.com/NousResearch/hermes-agent/issues/124211) Bot Chat 工具集永久漂移 | 7 | 工具集变更只在会话创建时生效 × Bot 会话永不 fork = 配置漂移无法收敛的设计缺陷 |

---

## 5. Bug 与稳定性（按严重度）

**P1**
- [#122438](https://github.com/NousResearch/hermes-agent/issues/122438) Linux 桌面启动器更新后失效（P1，暂无对应 fix PR）

**P2 — update/install 链路集中爆发**
- [#125952](https://github.com/NousResearch/hermes-agent/issues/125952) 空 `expected_sha` 导致 fleet 重启警告永久挂起
- [#125138](https://github.com/NousResearch/hermes-agent/issues/125138) 内部 git fetch 触发 git 内部 BUG 错误
- [#122112](https://github.com/NousResearch/hermes-agent/issues/122112) pip 镜像源主机上 uv provisioning 硬失败
- [#122935](https://github.com/NousResearch/hermes-agent/issues/122935) Windows 更新后 DACL 加硬导致非提权进程无法执行（已关闭的 #125112 为 narrow clone 分支解析问题）

**P2 — 运行时/会话**
- [#125969](https://github.com/NousResearch/hermes-agent/issues/125969) 桌面端 approval 模式读写越 profile（今日新报）
- [#125942](https://github.com/NousResearch/hermes-agent/issues/125942) 桌面恢复 gateway 会话时 provider 错配 → 404（今日新报）
- [#125950](https://github.com/NousResearch/hermes-agent/issues/125950) 企微审批投递失败仍等满超时（今日新报）
- [#106716](https://github.com/NousResearch/hermes-agent/issues/106716) Windows SSH 探测命令超 8191 字符限制

**安全（P3）**
- [#125940](https://github.com/NousResearch/hermes-agent/issues/125940) `pillow-heif` 1.7.0 含高危 RCE CVE-2026-81353（今日新报）

已关闭：#104413（cua-driver 越界安装）、#122410（Browser Use CLI 未配置）、#94345、#125112、#125971。

---

## 6. 功能请求与路线图信号

- **[#10421](https://github.com/NousResearch/hermes-agent/issues/10421) 回合级实时时间上下文**（22 评论、9 👍）：讨论最充分，标记 needs-decision，最可能进入下一版本
- **[#125723](https://github.com/NousResearch/hermes-agent/pull/125723) gateway `rotate-session` 控制动词**：已有 PR 在途，按需轮换渠道会话
- **[#124063](https://github.com/NousResearch/hermes-agent/pull/124063) Mattermost 审批按钮**：补齐最后一块主流平台拼图
- **[#30731](https://github.com/NousResearch/hermes-agent/issues/30731) codex_app_server 暴露 sandbox_mode 配置**（长期开放，今日再度活跃）
- **[#125489](https://github.com/NousResearch/hermes-agent/issues/125489) config.yaml 结构重组**：配置体系治理信号

---

## 7. 用户反馈摘要

- **更新链路是最痛的痛点**：今日 update 相关 Issue 超过 10 条，覆盖 partial clone、镜像源、Windows DACL、git 内部错误等场景，用户在异构环境下升级频繁失败
- **安全信任受损**：@eabase 等用户持续抱怨 npm 依赖漏洞无人处理、`~/.cua-driver` 静默安装到 Hermes 根目录之外侵犯信任边界
- **多 profile/多平台用户的配置漂移焦虑**：approval 模式越 profile、Bot Chat 工具集漂移、渠道目录为空等问题集中在进阶用户
- **正面信号**：社区 PR 质量高、修复方向明确（cron worker 系列已完成 3 连修），平台适配覆盖面持续扩大（iMessage/飞书/Mattermost/企微）

---

## 8. 待处理积压

| Issue/PR | 状态 | 提醒 |
|---|---|---|
| [#10421](https://github.com/NousResearch/hermes-agent/issues/10421) | 开放 5 个多月，22 评论 | 高需求功能，长期 needs-decision，建议尽快裁决 |
| [#107356](https://github.com/NousResearch/hermes-agent/issues/107356) | 开放 18 天 | 安全漏洞持续累积，需维护者公开回应 |
| [#68783](https://github.com/NousResearch/hermes-agent/issues/68783) | 开放 2 个多月 | 桌面端版本号 0.17.0 vs CLI 0.19.0，发布流程缺陷，影响用户报障定位 |
| [#106716](https://github.com/NousResearch/hermes-agent/issues/106716) | 开放 19 天 | Windows SSH 连接完全不可用 |
| [#74004](https://github.com/NousResearch/hermes-agent/issues/74004) | 开放 2 个月 | Telegram 长消息 Markdown 丢失，影响消息平台核心体验 |
| [#82424](https://github.com/NousResearch/hermes-agent/issues/82424) | 开放 ~50 天 | MCP 启动阻塞于全量工具发现，冷启动性能问题 |
| PR [#77986](https://github.com/NousResearch/hermes-agent/pull/77986) | 开放近 2 个月 | kanban service tier 覆盖，需维护者 review |

**维护者建议优先级**：① update/install 链路系统性重构（本周 bug 密度最高的簇）② npm/Python 依赖安全升级批次 ③ #10421 时间上下文设计决策。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-09-28

## 1. 今日速览

PicoClaw 今日整体活跃度处于**中低水平**：过去 24 小时共 4 条 Issue 更新（3 新开/活跃、1 关闭）、2 条 PR 更新（均为待合并），无新版本发布。社区反馈集中于 **OneBot（QQ）渠道的自动表情回应行为**（Issue + 配套 PR 同日提交，响应效率高），以及渠道适配层面的功能请求（新增 Tsubasa provider）。值得注意的是，多条 Issue/PR 已被标记 `stale`，包括一个**影响稳定性的 DingTalk Stream 模式 panic 回归问题**，项目维护节奏存在放缓迹象。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 合并、无 Issue 关闭修复类进展（唯一的关闭项 #3287 为 stale 机制自动关闭，非实质性修复）。当前推进中的工作：

- **PR #3353**（[链接](https://github.com/sipeed/picoclaw/pull/3353)）：限制工具反馈动画的生命周期（5 分钟上限、首次编辑错误即停止），防止生命周期清理遗漏导致频道消息被无限编辑。与 Telegram typing feedback 现有行为对齐，属于稳定性加固，但已 stale 近一个月，待维护者复核。
- **PR #3396**（[链接](https://github.com/sipeed/picoclaw/pull/3396)）：为 OneBot 渠道新增 `reaction_enabled` 开关（默认 `false`），将硬编码的自动表情回应改为 opt-in。与 Issue #3395 形成“报告 + 修复”完整闭环，质量较高，是最有望尽快合并的 PR。

整体来看，项目本周处于**社区贡献输入、维护者审合停滞**的阶段。

## 4. 社区热点

- **#3395 / PR #3396 — OneBot 自动表情回应应可配置**（[Issue](https://github.com/sipeed/picoclaw/issues/3395) | [PR](https://github.com/sipeed/picoclaw/pull/3396)）
  今日最热话题。用户 @ycsqwan 反映 OneBot 渠道（QQ via NapCat）对**每条群消息**无条件发送 emoji 289 回应（`set_msg_emoji_like`），在群聊场景下体验突兀，诉求是提供配置开关。作者本人已提交实现 PR，属“自报告自修复”型高质量贡献。
- **#3397 — 新增 Tsubasa 到 OpenAI 兼容 provider 目录**（[链接](https://github.com/sipeed/picoclaw/issues/3397)）
  用户目前只能通过手写 `openai` 模型条目 + 自定义 API base 接入 Tsubasa，诉求是在 provider 选择器中内置端点与公开模型别名，属于低成本、高频收益的生态扩展请求。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 状态 | 说明 |
|---|---|---|---|
| 🔴 高 | [#3382](https://github.com/sipeed/picoclaw/issues/3382) DingTalk Stream SDK 重连时 panic（`send on closed channel`, client.go:161） | OPEN（stale） | **已知回归**：#973 报告过的 panic 在 v0.3.1（commit 2cf030d2，上游 `dingtalk-stream-sdk-go` v0.9.1）仍可复现。Stream 模式下重连即崩溃，影响 DingTalk 渠道可用性。**尚无 fix PR**，且已被标 stale，存在被遗忘风险，建议优先处理。 |
| 🟡 中 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC 长消息被切分后处理异常 | CLOSED（stale） | IRC 512 字节限制导致客户端自动切分长消息，PicoClaw 未能将分段重组为单一连贯消息。今日被 stale 机制自动关闭，累计 14 条评论，需求真实存在，建议人工复核而非机械关闭。 |

## 6. 功能请求与路线图信号

- **OneBot `reaction_enabled` 开关**（#3395 + PR #3396）：PR 已就绪且改动小、默认行为更保守（默认关闭），**最可能进入下一版本**。
- **Tsubasa provider 内置目录条目**（#3397）：改动量小（一个 catalog entry + 模型别名），符合现有 OpenAI 兼容架构，纳入成本低，可能性较高。
- **IRC 长消息合并支持**（#3287）：需求讨论充分（14 评论）但实现涉及跨消息重组逻辑，复杂度较高，短期内需维护者表态是否纳入路线图。

## 7. 用户反馈摘要

- **QQ/OneBot 群聊用户**：对“每条消息都被机器人加表情回应”明显不满，认为污染群聊氛围、行为不可控——反映出**行为可配置性**是渠道用户体验的关键诉求。
- **多渠道部署用户**（DingTalk + Feishu）：Stream 模式重连即 panic 严重影响生产可用性，且同一问题跨版本重复出现，用户对修复进度感到失望。
- **模型接入用户**：希望减少手工配置成本，期望 provider 目录“开箱即用”，说明 PicoClaw 的模型生态兼容性是其核心吸引力之一。
- **IRC 用户**：期望机器人对长消息具备人类式的连贯理解能力，暴露了渠道协议差异带来的消息处理一致性问题。

## 8. 待处理积压

- 🔴 [#3382](https://github.com/sipeed/picoclaw/issues/3382)：DingTalk Stream panic 回归，1 条评论 + stale 状态，**生产稳定性问题不应被 stale 掩盖**，建议维护者确认根因（可能需 bump 上游 SDK 版本）并关联 fix PR。
- 🟡 PR [#3353](https://github.com/sipeed/picoclaw/pull/3353)：动画生命周期修复，创建近一个月无人审核，stale 中；此类防御性修复合并成本低，建议尽快 review。
- 🟡 [#3287](https://github.com/sipeed/picoclaw/issues/3287)：IRC 长消息支持，14 条评论的高讨论量 Issue 被 stale 自动关闭，建议恢复并明确路线图归属。

**健康度小结**：社区贡献意愿良好（Issue 报告规范、自带 PR），但维护者审合响应明显滞后，stale 标签覆盖了包括生产级 bug 在内的多个条目，是当前项目最大的风险信号。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-28

## 1. 今日速览

今日 NanoClaw 整体活跃度处于**中高水平**：过去 24 小时 PR 活动达 38 条（其中 29 条待合并、9 条已合并/关闭），但新开 Issue 仅 1 条，无新版本发布。开发重心明显集中在**容器挂载/清理链路、更新流程（`/update-nanoclaw`）与 setup 稳定性**等运维核心路径的修复上。社区贡献者 @IamAdamJowett 当天即对最新 Issue #3951 提交了修复 PR #3952，响应速度值得肯定。项目处于密集修复迭代期，核心团队（@glifocat、@barnuri 等）持续推进，健康度良好。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无合并记录中的大功能落地，但有 9 条 PR 合并/关闭，且待合并队列中包含多条核心修复，整体在**可靠性硬化**方向稳步推进：

- **#3571 [CLOSED]** [fix(container)](https://github.com/nanocoai/nanoclaw/pull/3571) — 防止系统行饿死 inbound 队列的修复已关闭（8月27日创建，今日归档）。
- **#3952 [OPEN]** [fix(container-runner)](https://github.com/nanocoai/nanoclaw/pull/3952) — 针对今日新报 Issue #3951 的即时修复：以宿主用户身份预创建会话挂载点，避免 rootful Docker 创建 root 属主的目录导致删除失败。
- **#3947** [fix(host)](https://github.com/nanocoai/nanoclaw/pull/3947) — 宿主扫描现在会停掉会话/agent 组已被删除的容器，修复“删除后容器仍在跑直到下次重启”。
- **#3948** [fix(update)](https://github.com/nanocoai/nanoclaw/pull/3948) — 修复 `/update-nanoclaw` 后 Iron Proxy 被误停导致所有 agent spawn 失败。
- **#3932 / #3931**（@barnuri）— 新增 `/add-lean-tasks` 技能及 `minimalContext` provider 选项，支持小模型/本地模型的低成本定时任务，是近期少见的**功能型贡献**。

## 4. 社区热点

- **[Issue #3951](https://github.com/nanocoai/nanoclaw/issues/3951)**（@businesslifers，今日新开）：Linux rootful Docker 下删除定时任务“半失败”——Docker 创建的 root 属主挂载点阻塞了会话目录 `rmSync`，遗留孤儿 `active` 会话，宿主每分钟刷 `SqliteError: unable to open database file` 日志。该 Issue 直接催生了同日修复 PR #3952，是今日唯一但高价值的社区反馈，诉求集中在**Linux 运维场景下文件属主/清理链路的健壮性**。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | **#3951** Linux 下删除任务遗留孤儿会话 + 无限刷 SqliteError 日志 | 已有 fix PR [#3952](https://github.com/nanocoai/nanoclaw/pull/3952) |
| 🔴 高 | **#3948** 更新切换时停掉 Iron Proxy → 更新后所有 agent spawn 失败 | 已有 fix PR |
| 🟠 中 | **#3947** 删除会话/agent 组后容器继续运行直至下次宿主重启 | 已有 fix PR |
| 🟠 中 | **#3908** agent 间失败通知形成无限失败循环 | 已有 fix PR |
| 🟠 中 | **#3878** setup 后 ping 容器未停止即删目录 | 已有 fix PR |
| 🟡 低 | **#3949** Mattermost 无 `MATTERMOST_CALLBACK_SECRET` 时验证失败 | 已有 fix PR |
| 🟡 低 | **#3946** skill 步骤失败显示通用错误而非具体原因 | 已有 fix PR |

值得肯定的是：**所有已知 Bug 均已有对应 fix PR**，修复闭环率高。

## 6. 功能请求与路线图信号

- **#3950** [feat(iron)](https://github.com/nanocoai/nanoclaw/pull/3950)：支持信任运维方自建 CA，使 `https://models.home.arpa/v1` 等私有名本地模型可经 Iron 代理访问 —— 信号：**私有化/自托管部署**是明确方向。
- **#3931 + #3932**：`minimalContext` + `/add-lean-tasks` —— 信号：**降低小模型/本地模型运行成本**，扩大模型兼容面，很可能进入下一版本。
- **#3919 / #3905**：OpenCode 本地端点校验前移与可观测性增强 —— 信号：持续打磨 **provider 接入体验**。

## 7. 用户反馈摘要

今日用户反馈样本量小（1 条 Issue），但信息密度高：

- **痛点**：Linux rootful Docker 部署下，Docker 自动创建的嵌套挂载点（`/workspace/agent`、`/workspace/global` 等）以 root 属主存在，普通用户进程无法删除，引发级联的孤儿会话与持续错误日志——反映出**多用户/受限权限 Linux 环境是真实生产使用场景**。
- **满意点**：问题报告结构清晰（含根因定位到 `buildMounts` 源码级分析），侧面说明社区用户对项目代码有较深参与度。

## 8. 待处理积压

- **29 条待合并 PR** 构成较大审查积压，其中多条为核心链路修复（#3947、#3948、#3913、#3910 等，多数标注 core-team），建议优先审查，避免修复相互冲突或长期滞留。
- **#3913**（`/update-nanoclaw` 控制器无法加载）自 9月25日 提出，属**更新流程完全失效级**问题，需尽快合并落地。
- Issue 队列本身干净（今日仅 1 条且已有 fix），无长期未响应 Issue，社区响应机制运转良好。

---
*数据来源：GitHub API（过去 24 小时窗口），统计截至 2026-09-28。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-09-28

## 1. 今日速览

NullClaw 今日整体处于「清库存 + 补安全」的高效运维状态：过去 24 小时处理了 18 条 Issue 更新（关闭 16 条，仅新开/活跃 2 条）和 10 条 PR 更新（8 条已合并/关闭）。最亮眼的是针对 A2A 共享 Bearer 越权漏洞（#974）的修复 PR #1012 和新增 Tsubasa Provider 的 PR #1013 仍在待合并状态。无新版本发布，但大量历史积压 Issue 被批量关闭，显示维护团队正在做版本发布前的整理工作。社区活跃度健康，反馈以渠道集成（WhatsApp、飞书、钉钉、Teams、Matrix）和易用性文档为主。

## 2. 版本发布

今日无新版本发布。考虑到大量 Issue/PR 被集中关闭，疑似在为下一个版本做准备，建议关注近期 Release 动态。

## 3. 项目进展

今日合并/关闭的重要 PR 共 8 条：

- **[PR #1009](https://github.com/nullclaw/nullclaw/pull/1009)** fix(exec): 中/高风险命令改为暂停等待 `/approve` 而非直接失败，关闭 [#900](https://github.com/nullclaw/nullclaw/issues/900)。监督模式的核心体验修复。
- **[PR #969](https://github.com/nullclaw/nullclaw/pull/969)** feat(agent): 实现结构化 `approval_request`/`approval_response` 两轮工具审批流，与 #1009 形成完整的审批链路闭环。
- **[PR #968](https://github.com/nullclaw/nullclaw/pull/968)** fix(matrix): 持久化 `next_batch` 同步游标跨重启，修复 Matrix 渠道每次重启触发全量 initial sync 的问题。
- **[PR #958](https://github.com/nullclaw/nullclaw/pull/958)** fix(teams): 接受小写 `serviceurl` JWT claim 并提高 JWKS 拉取上限，修复 MS Teams 入站消息 403 拒绝。
- **[PR #990](https://github.com/nullclaw/nullclaw/pull/990)** feat(providers): 新增 Eden AI 作为 OpenAI 兼容网关（EU 合规卖点）。
- **[PR #667](https://github.com/nullclaw/nullclaw/pull/667)** feat(email): IMAP IDLE 双向轮询邮件渠道，含网络韧性处理，邮件从「仅发送」升级为完整双向渠道。
- **[PR #956](https://github.com/nullclaw/nullclaw/pull/956)** dependabot: Docker 基础镜像 alpine 3.23 → 3.24。
- **[PR #527](https://github.com/nullclaw/nullclaw/pull/527)** feat: 自适应智能管线 + email/WhatsApp Web 渠道（大而全的社区贡献，已关闭——注意是关闭而非合并，可能被拆分处理）。

**待合并（2 条）：**
- **[PR #1013](https://github.com/nullclaw/nullclaw/pull/1013)** 新增 Tsubasa Provider（32K 上下文，今日新开）
- **[PR #1012](https://github.com/nullclaw/nullclaw/pull/1012)** 修复 A2A 越权漏洞（对应 #974）

整体看，审批/安全体系与多渠道稳定性是本周推进主线，进展显著。

## 4. 社区热点

- **[#861](https://github.com/nullclaw/nullclaw/issues/861)** 无头 VPS 上启用 Web UI（5 评论，今日关闭）：用户直言 README 的 Web UI/Browser Relay 部分看不懂 70%，诉求是「非术语的人类语言文档」。
- **[#183](https://github.com/nullclaw/nullclaw/issues/183)** 通过 Baileys 支持 WhatsApp Web（5 评论，2 👍，今日关闭）：现有 Meta Business Cloud API 门槛过高（需企业账户/token/webhook），用户希望 QR 码即用。结合已关闭的 PR #527，此方向已被社区代码推动。
- **[#613](https://github.com/nullclaw/nullclaw/issues/613)** 完善 config.json 配置项文档（4 👍，最高赞）：新用户上手痛点的集中体现，今日关闭，或已有改进落地。
- **[#764](https://github.com/nullclaw/nullclaw/issues/764)**（仍 OPEN）申请加入 agentskills.io 官方客户端列表：生态曝光机会，等待维护者决策。

## 5. Bug 与稳定性

今日关闭的 Bug（多数已有 fix）：

| 严重程度 | Issue | 问题 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#974](https://github.com/nullclaw/nullclaw/issues/974)（OPEN） | A2A 共享 Bearer 下跨调用方可复用任务与上下文（越权读取/上下文劫持） | fix PR [#1012](https://github.com/nullclaw/nullclaw/pull/1012) 待合并 |
| 🟠 中 | [#354](https://github.com/nullclaw/nullclaw/issues/354) | Homebrew 升级后守护进程静默失效（plist 硬编码 Cellar 版本路径） | 已关闭，推断已修复 |
| 🟠 中 | [#408](https://github.com/nullclaw/nullclaw/issues/408) | 工具调用 JSON 解析将冒号误判为工具名 | 已关闭 |
| 🟠 中 | [#477](https://github.com/nullclaw/nullclaw/issues/477) | 飞书 WebSocket 断连 | 已关闭 |
| 🟡 中低 | [#376](https://github.com/nullclaw/nullclaw/issues/376) | 钉钉只能发送不能接收 | 已关闭 |
| 🟡 中低 | [#665](https://github.com/nullclaw/nullclaw/issues/665) | `error.NoResponseContent`（llama 本地模型） | 已关闭 |
| 🟡 低 | [#957](https://github.com/nullclaw/nullclaw/issues/957) | config reader 速率限制不可配置 | 已关闭 |
| 🟡 低 | [#619](https://github.com/nullclaw/nullclaw/issues/619) | API 错误信息过于笼统 | 已关闭 |

重点关注：**#974 是真实安全漏洞且带完整复现（Bob 读取 Alice 任务历史并复用其上下文）**，建议尽快合并 #1012。

## 6. 功能请求与路线图信号

- **审批流（Supervised Autonomy）**：#900 + PR #969 + PR #1009 已形成完整实现，几乎必然进入下一版本。
- **Provider 生态扩张**：Eden AI（#990 已合并）、Tsubasa（#1013 待审），OpenAI 兼容网关接入模式已模板化，预计持续低门槛纳新。
- **渠道扩展**：WhatsApp Web/Baileys（#183）、双向邮件（PR #667）、JIRA 工具（[#914](https://github.com/nullclaw/nullclaw/issues/914)）——多渠道接入是社区最强需求信号。
- **Docker Hub 官方镜像 + docker-compose**（[#449](https://github.com/nullclaw/nullclaw/issues/449)，已关闭）：或暗示官方镜像方案已落地，值得在 Release Note 确认。
- **Agent Skills 标准接入**（#764）：若维护者响应，将提升项目在 Skills 生态的可见度。

## 7. 用户反馈摘要

**痛点：**
- 文档对新手不友好：Web UI 部署（#861）、配置项说明缺失（#613，4 👍）、错误信息不可读（#619）是三大高频抱怨。
- 部署/运维脆弱：Homebrew 升级即挂（#354）暴露包管理与服务安装的工程化短板。
- 国内生态（飞书、钉钉）支持质量参差，断连和单向问题反复出现。
- 本地开源模型（llama）体验不佳：JSON 工具调用解析（#408）、空响应（#665）。

**满意点：**
- 社区对多渠道（Matrix、Teams、Email、WhatsApp）和 Provider 灵活性的持续投入获得正向反馈。
- 监督模式审批流从「直接失败」到「暂停审批」的改进符合用户预期。

## 8. 待处理积压

- **[Issue #764](https://github.com/nullclaw/nullclaw/issues/764)**（OPEN，4 评论，4 月提出）：加入 agentskills.io 客户端列表的申请近半年未决，仅需维护者提交，建议尽快响应。
- **[Issue #974](https://github.com/nullclaw/nullclaw/issues/974)**（OPEN）：安全漏洞 + 修复 PR #1012 待合并，优先级最高。
- **[PR #1013](https://github.com/nullclaw/nullclaw/pull/1013)**：今日新开的 Tsubasa Provider，等待 review。
- **[PR #527](https://github.com/nullclaw/nullclaw/pull/527)**（6 月开启，今日关闭）：体量巨大的「自适应智能管线」贡献以关闭收场，若被拆分重构，建议维护者明确后续计划，避免贡献者流失。

---
*数据来源：GitHub API，统计窗口 2026-09-27 ~ 2026-09-28。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-09-28）

## 1. 今日速览

IronClaw 今日整体呈现**中等活跃度、以维护性工作为主**的状态：过去 24 小时共 2 条 Issue 更新（均为新开，无关闭）、6 条 PR 更新（5 待合并、1 已关闭），无新版本发布。新增的两条 Issue 均为高质量功能提案（Tsubasa 注册表条目、turn-0 工具预选择），显示社区对**提供商接入体验**和**智能工具调度**的关注。PR 队列以依赖批量升级为主（其中一单多达 31 个更新），叠加夜间 CI 自动刷新的知识图谱快照，项目处于稳定维护迭代期。

## 2. 版本发布

今日无新版本发布。最新依赖升级 PR（如 #8114）落地后，或为下个版本积累变更。

## 3. 项目进展

今日无 PR 被合并，但有 1 条 PR 关闭：

- **[#8104](https://github.com/nearai/ironclaw/pull/8104)（已关闭）**：dependabot 提交的 everything-else 组 29 项依赖升级。该 PR 被关闭后由 [#8114](https://github.com/nearai/ironclaw/pull/8114)（31 项更新）替代，属于**升级批次滚动刷新**，非功能回退。
- **[#7988](https://github.com/nearai/ironclaw/pull/7988)（活跃更新）**：夜间 `Codebase Graph Refresh` 工作流生成的代码库知识图谱快照刷新，今日有更新，说明基础设施自动化流水线运转正常，等待合并。

整体来看，今日项目主要在依赖与知识基线层面小幅推进，无功能性代码合入，**节奏平稳但缺乏功能进展**。

## 4. 社区热点

今日两条新开 Issue 即为讨论焦点（均 0 评论，尚处提案早期）：

- **[#8115](https://github.com/nearai/ironclaw/issues/8115)** — @cenab 提议为 Tsubasa 添加带显式 32K 上下文预算路径的命名注册表条目。诉求核心：目前用户须手动填写 OpenAI 兼容端点和模型名，**命名 Provider 可降低凭据配置与模型选择门槛**。作者同时强调了需先验证 32K 预算路径的可靠性，态度审慎。
- **[#8113](https://github.com/nearai/ironclaw/issues/8113)** — @CjS77 提出基于 **BM25F + embeddings 混合评分的 turn-0（首轮对话）工具预选择**机制：仅广播预测所需工具及四个发现桥（`tool_search` / `tool_describe` / `tool_call` / `result_read`），显著减少首轮 prompt 体积，属于**性能与成本优化方向的高价值提案**。

两条提案互补性强，均指向“更智能、更低门槛的 Agent 运行时”，值得维护者优先评估。

## 5. Bug 与稳定性

今日**未报告新的 Bug、崩溃或回归问题**。稳定性风险主要来自待合并的依赖升级：

- **中风险**：[#8114](https://github.com/nearai/ironclaw/pull/8114)（XL 体量，31 项 Rust 依赖更新，含 `uuid` 1.24→1.26、`base64` 0.22→0.23 等跨小版本变更）建议合并前完整跑过 CI 测试。
- **中风险**：[#7834](https://github.com/nearai/ironclaw/pull/7834)（wasmtimes / wit-* 4 项更新，标注 risk: medium）涉及 wasm 运行时，需关注工具沙箱行为是否回归。
- **低风险**：[#8103](https://github.com/nearai/ironclaw/pull/8103) 中 `actions/setup-node` 4.x→7.x 跨 3 个大版本，仅影响 CI，但也需留意 workflow 兼容性。

## 6. 功能请求与路线图信号

| 提案 | 可能性 | 依据 |
|---|---|---|
| Tsubasa 命名注册表条目（[#8115](https://github.com/nearai/ironclaw/issues/8115)） | **较高** | 已有 OpenAI 兼容后端打底，属于薄层封装，实现成本低、收益明确 |
| turn-0 工具预选择（[#8113](https://github.com/nearai/ironclaw/issues/8113)） | **中期观察** | 依赖检索基础设施（BM25F + embeddings），提案设计完备但工程量更大；若 #7988 的知识图谱基建稳定，可作为上层能力落地 |

## 7. 用户反馈摘要

- **配置门槛痛点**：用户（@cenab）反映手动配置 OpenAI 兼容端点 + 模型名的过程不够清晰，希望以命名 Provider + 显式上下文预算路径改善“开箱体验”。
- **上下文成本痛点**：@CjS77 的提案侧面反映**首轮工具广播体积过大**是真实使用中的 token 成本与延迟问题，opt-in 的混合检索方案是对该痛点的直接回应。
- 两条 Issue 均 0 评论、0 👍，说明**社区围观热度有限**，核心贡献仍集中在少数活跃贡献者与自动化机器人（dependabot、ironclaw-ci）。

## 8. 待处理积压

- **[#7834](https://github.com/nearai/ironclaw/pull/7834)**（8-23 创建，已挂起约 5 周）：wasm 组 4 项依赖升级，risk: medium，长期未合并，建议维护者评估阻塞原因（是否 CI 失败或需要人工验证 wasmtime 升级影响）。
- **[#8078](https://github.com/nearai/ironclaw/pull/8078)**（9-6 创建，约 3 周）：tokio-ecosystem 2 项更新（tower-http、tokio-tungstenite），低风险却积压较久，可快速审合并以减少队列噪音。
- **[#8103](https://github.com/nearai/ironclaw/pull/8103)**（9-20 创建）：actions 组 8 项更新，涉及 setup-node 大版本跳跃，建议尽快验证合并。
- 两条新 Issue（#8113、#8115）尚无维护者回复，建议 48 小时内给出 triage 标签与初步意见，避免新提案冷却。

---

**健康度小结**：今日无 Bug 报告、CI 自动化正常运转，项目稳定性良好；短板在于**人工审查吞吐偏低**（6 条活跃 PR 中 5 条待合并，多为批量依赖升级占据队列）以及新功能提案响应尚待启动。建议优先处理积压的低风险依赖 PR，并对 #8113 / #8115 给出路线图反馈。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-09-28）

## 1. 今日速览

LobsterAI 今日整体活跃度中等，共 5 条 Issue 更新（2 开放 / 3 关闭）和 9 条 PR 更新（1 待合并 / 8 已关闭），无新版本发布。核心贡献者 @fisherdaddy 保持高频产出，今日提交了 OpenClaw 网关锁回收修复（#2771）并关闭了 Word 文档编辑大特性 PR（#2770）。同时，机器人批量将 3 月份的陈旧 Issue/PR 标记为 stale 并关闭，表明维护团队正在进行 issue 队列清理。整体健康度良好，开发节奏持续推进。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- **[PR #2770](https://github.com/netease-youdao/LobsterAI/pull/2770) [已关闭]** — Word 文档编辑大特性，横跨 renderer、build、docs、main、openclaw、skills、artifacts 七个模块，是近期体量最大的功能 PR 之一，标志着 LobsterAI 向办公文档编辑场景迈出重要一步。
- **[PR #2771](https://github.com/netease-youdao/LobsterAI/pull/2771) [已关闭]** — 修复 OpenClaw 网关锁问题：Windows 非正常关机后 PID 被复用导致锁无法释放、网关启动与一键修复失败。基于 OpenClaw v2026.8.1 的独占 SQLite 事务机制重写锁判定。
- **[PR #2769](https://github.com/netease-youdao/LobsterAI/pull/2769) [已关闭]** — 修复 Vite watch 误排除 `src/renderer/components/artifacts/`，恢复 artifacts 面板与 Markdown 编辑器的热重载。
- **[PR #1042](https://github.com/netease-youdao/LobsterAI/pull/1042) [已关闭]** — 社区提交的 P0 安全修复（SSRF + 任意文件读取，关联 [#1041](https://github.com/netease-youdao/LobsterAI/issues/1041)），随 stale 清理一并关闭。
- **[PR #978](https://github.com/netease-youdao/LobsterAI/pull/978) [仍开放]** — 任务文件夹功能（12 文件改动、含 SQLite 迁移），为当前唯一待合并 PR。

综合来看，文档编辑、OpenClaw 稳定性、开发体验三条线均有实质推进。

## 4. 社区热点

- **[Issue #1041](https://github.com/netease-youdao/LobsterAI/issues/1041) [已关闭]** — 安全社区报告的两个 P0 漏洞（IPC SSRF、`readFileAsDataUrl` 任意文件读取，可窃取 IAM 凭证），配套修复 PR #1042 同日关闭，说明安全通道响应闭环已完成（可能是官方另行内部修复）。
- **[Issue #1046](https://github.com/netease-youdao/LobsterAI/issues/1046) [已关闭]** — 用户追问为何上下文窗口被硬编码限制为 200K 而非 Qwen3.5-Plus 官方的 1M，诉求是开放可配置项或补充文档。
- **[Issue #976](https://github.com/netease-youdao/LobsterAI/issues/976) [开放]** — 断网时问答重复弹出两个 timeout 提示，反映异常场景交互规范仍需打磨。

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 P0 | SSRF + 任意本地文件读取（[#1041](https://github.com/netease-youdao/LobsterAI/issues/1041)） | Issue/PR 已关闭，官方疑似已内部修复 |
| 🟠 高 | Deep Link URL 缺乏来源校验，可伪造 `lobsterai://auth/callback` 干扰认证（[#977](https://github.com/netease-youdao/LobsterAI/issues/977)，开放中） | 暂无 fix PR |
| 🟠 高 | 流式响应 ReadableStream reader 在异常路径泄漏（PR [#1038](https://github.com/netease-youdao/LobsterAI/pull/1038)，已关闭） | 社区 PR 已关闭，需确认是否已修 |
| 🟡 中 | 断网重复 timeout 提示（[#976](https://github.com/netease-youdao/LobsterAI/issues/976)） | 开放中，无 fix |
| 🟡 中 | 已清除技能在切换 Agent 后复活（[#1047](https://github.com/netease-youdao/LobsterAI/issues/1047)，已关闭） | 待确认修复状态 |

## 6. 功能请求与路线图信号

- **文档编辑能力**：PR #2770（Word 编辑）已合入主线方向明确，LobsterAI 正从纯对话助手向“Agent + 办公生产力”演进，artifacts/skills 模块联动频繁。
- **会话管理**：PR #978（任务文件夹）仍待合并，是社区呼声较高的组织性功能，有望进入下一版本。
- **配置灵活性**：Issue #1046 的上下文窗口可配置诉求 + PR #1045（未保存更改提示）显示用户对细粒度配置和防误操作 UI 的需求持续存在。

## 7. 用户反馈摘要

- **痛点**：上下文窗口被平台限制（#1046）、技能清除不生效（#1047）、切换 Agent 丢失未保存修改（#1045）、断网错误提示体验差（#976）。
- **使用场景**：用户以 Qwen3.5-Plus 等国产模型配合 LobsterAI 做编码问答，多 Agent 切换是高频操作。
- **正面信号**：社区贡献质量较高（安全审计、流式 reader 泄漏修复等均为深度分析），显示项目已吸引专业开发者参与。

## 8. 待处理积压

以下条目已被标记 stale 或长期未响应，请维护者关注：

- **[Issue #977](https://github.com/netease-youdao/LobsterAI/issues/977) [OPEN/stale]** — Deep Link 安全校验缺失，属安全隐患，建议优先处理而非任其 stale。
- **[Issue #976](https://github.com/netease-youdao/LobsterAI/issues/976) [OPEN/stale]** — 重复 timeout 提示，影响弱网用户体验。
- **[PR #978](https://github.com/netease-youdao/LobsterAI/pull/978) [OPEN/stale]** — 任务文件夹功能，改动完整（12 文件 + 数据库迁移），建议维护者评审避免社区贡献流失。
- **注意**：今日 stale bot 批量关闭了 3 月的安全 Issue #1041/PR #1042，若漏洞实际未修复，建议公开确认修复状态以安抚安全报告者。

---
*数据来源：GitHub API，统计窗口为过去 24 小时。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-09-28

## 1. 今日速览

Moltis 今日保持中度活跃：过去 24 小时内新增 1 条 Issue、3 条 PR 更新，无版本发布，无 PR 合并。社区贡献以 **Provider 兼容性修复与扩展** 为主线——DeepSeek 新旗舰模型 `deepseek-flash` 的推理能力识别缺陷（[#1286](https://github.com/moltis-org/moltis/issues/1286)）当日即获得配套修复 PR（[#1287](https://github.com/moltis-org/moltis/pull/1287)），社区响应速度快，健康度良好。同时新增 Tsubasa provider 接入 PR，显示项目 provider 生态持续扩张。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日无 PR 合并或关闭，3 条 PR 处于待合并状态：

- **[#1287](https://github.com/moltis-org/moltis/pull/1287) fix(providers): 识别 deepseek-flash 为 DeepSeek thinking 模型**（@gyje）— 修复两处硬编码启发式仅识别旧版 `deepseek-v4*` 命名的问题，使 `supports_reasoning_for_model()` 正确返回 true。与 Issue #1286 形成"报告—修复"闭环，当日响应。
- **[#1288](https://github.com/moltis-org/moltis/pull/1288) feat: 新增 Tsubasa provider**（@cenab）— 接入 OpenAI 兼容 registry，含 `TSUBASA_API_KEY` 环境变量、默认 endpoint `https://api.tsubasa.sh/v1`、`tsubasa-fast`/`tsubasa-pro` 两模型（32K 上下文），并更新模板与 README。
- **[#1280](https://github.com/moltis-org/moltis/pull/1280) fix(tools): 空 active_tools 保留预设工具**（@mikemikimike，修复 [#1277](https://github.com/moltis-org/moltis/issues/1277)）— 语义化空数组的工具控制行为，已挂起约一周，建议维护者评审。

## 4. 社区热点

- **[#1286](https://github.com/moltis-org/moltis/issues/1286)** [Bug] DeepSeek-V4.1-Flash 未被识别为推理模型 — 今日唯一活跃 Issue，虽评论数为 0，但配套 PR #1287 当日提交，实际关注度最高。
- 诉求分析：用户希望紧跟 DeepSeek 最新旗舰模型；暴露的核心问题是 `crates/providers/src/model_capabilities.rs` 中**基于模型 ID 硬编码判断推理能力**的架构脆弱——每次厂商改名/换代都会导致 UI 功能缺失，社区可能期待更健壮的能力上报机制。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中（功能性缺陷，非崩溃） | [#1286](https://github.com/moltis-org/moltis/issues/1286) `deepseek-flash` 未识别为推理模型，Web UI 缺失 Reasoning Effort 开关 | ✅ 已有 fix PR [#1287](https://github.com/moltis-org/moltis/pull/1287) |
| 低-中 | [#1277](https://github.com/moltis-org/moltis/issues/1277) 空 `active_tools` 数组意外清空预设工具配置 | ✅ 已有 fix PR [#1280](https://github.com/moltis-org/moltis/pull/1280)，待合并 |

无崩溃或回归报告。

## 6. 功能请求与路线图信号

- **Provider 扩展趋势**：[#1288](https://github.com/moltis-org/moltis/pull/1288)（Tsubasa）延续"OpenAI 兼容 provider 快速接入"模式，预计顺利合入下一版本。
- **架构改进信号**：#1286 的根因（硬编码模型 ID 启发式）可能推动维护者考虑基于 API 能力协商的动态检测机制，值得关注后续讨论。
- 空数组语义修复（#1280）属于工具系统的行为规范化，合并后将改善 preset 可预测性。

## 7. 用户反馈摘要

- 用户实际使用 **DeepSeek 最新旗舰模型**作为主力，说明 Moltis 用户群体紧跟前沿模型迭代，对"新模型即插即用"有较高期待。
- 用户依赖 **Reasoning Effort 控制**作为核心工作流功能，其缺失直接被视为 Bug 而非增强请求。
- 工具系统（preset / per-turn 覆盖）存在语义歧义痛点：空数组含义不明确导致配置被意外清空（#1277/#1280）。

## 8. 待处理积压

- **[#1280](https://github.com/moltis-org/moltis/pull/1280)**：9-21 提交至今约一周未合并，已有明确关联 Issue（#1277），建议维护者优先评审，避免工具系统修复长期搁置。
- **[#1287](https://github.com/moltis-org/moltis/pull/1287)** / **[#1288](https://github.com/moltis-org/moltis/pull/1288)**：均为今日/昨日新提交，暂无积压风险，但建议及时评审以维持社区响应速度。
- 暂无长期未响应的历史 Issue 数据可供分析。

---
*数据来源：Moltis GitHub 仓库过去 24 小时活动统计。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-09-28）

## 1. 今日速览

CoPaw 今日保持较高社区活跃度：过去 24 小时 Issues 更新 9 条（新开/活跃 7，关闭 2），PR 更新 7 条（待合并 3，已合并/关闭 4），无新版本发布。今天最值得关注的是上下文管理相关修复的落地——核心 Bug #7853（媒体 base64 无界累积撑爆上下文）已关闭，配套修复 PR #7965 同时关闭，标志着长期困扰图像密集会话的上下文泄漏问题得到解决。此外，Console 设置体验统一（#7956）和多标签终端（#7861）等多个功能 PR 也在今日完成关闭，项目整体向前推进明显。

## 2. 版本发布

无。今日无新 Release。

## 3. 项目进展

今日关闭 4 个 PR，质量与覆盖面均较高：

- **PR #7965** [fix(context): reclaim historical media in Scroll](https://github.com/agentscope-ai/QwenPaw/pull/7965)（@Leirunlin）：修复 #7853 的核心 PR。解决图像结果仅含短 caption 导致 Scroll 的 200 字符折叠阈值失效、旧媒体无法回收的问题，并对齐 thinking omission 与 token 计数逻辑。**上下文管理健壮性显著提升。**
- **PR #7956** [feat(console): unify settings UX](https://github.com/agentscope-ai/QwenPaw/pull/7956)（@rayrayraykk）：按 `design.md` 设计语言统一 Console 设置体验，含可复用控件、本地化标签、修复 workspace-picker 溢出与切换会话时的欢迎屏闪烁。
- **PR #7861** [feat(console): authenticated multi-tab chat terminal](https://github.com/agentscope-ai/QwenPaw/pull/7861)（@zhijianma）：在共享聊天与文件工作区下方新增懒加载 xterm 终端，支持独立标签、会话级工作目录、有界输出回放。桌面端能力明显增强。
- **PR #7953** [fix(portability): preserve actionable per-asset import failures](https://github.com/agentscope-ai/QwenPaw/pull/7953)（@Luohh5）：保留逐资产导入失败的可操作错误信息。

**整体评估**：今日进展覆盖上下文核心、Console UX、终端能力、可移植性四个方向，属于质量较高的一天。

## 4. 社区热点

- **Issue #7853** [ToolResultPruner 跳过媒体块导致 base64 无界累积](https://github.com/agentscope-ai/QwenPaw/issues/7853)（8 条评论，今日关闭）：今日讨论最热。与 PR #7965 一并关闭，形成完整的“报告—修复”闭环，是本日最大亮点。
- **Issue #4525** [Agent 自管理上下文生命周期：cron 任务自动 checkpoint & reset](https://github.com/agentscope-ai/QwenPaw/issues/4525)（今日再次活跃）：长期需求（5 月开帖），指出即使有自动压缩，50-60% 上下文利用率时指令遵循仍明显退化，诉求是自动化任务的周期性上下文重置。与今日合并的 #7965 属同一主题域，值得维护者联动评估。
- **Issue #7998** [上下文压缩触发时机疑问](https://github.com/agentscope-ai/QwenPaw/issues/7998)（已关闭）：用户观察到 Agent 自主连续请求时不触发压缩，只在人工提交时压缩——反映压缩触发策略的体验缺口，与 #4525 呼应。

## 5. Bug 与稳定性

按严重程度排列：

1. **🔴 #8002** [Windows auto mode + 沙箱关闭时，内联 Office COM Quit() 可关闭用户 PowerPoint](https://github.com/agentscope-ai/QwenPaw/issues/8002)（2.0.1 起）：**安全/稳定性风险最高**，Agent 生成的 COM 命令在 auto 审批下被直接执行。暂无对应 fix PR，建议优先处理。
2. **🟠 #7853** [媒体 base64 无界累积](https://github.com/agentscope-ai/QwenPaw/issues/7853)：已关闭，**修复 PR #7965 已落地**。
3. **🟡 #8000** [Windows 桌面端双击启动打开第二窗口并终止首实例后端](https://github.com/agentscope-ai/QwenPaw/issues/8000)（2.2.1）：缺少单实例守卫，可能导致用户丢失进行中的会话后端。暂无 fix PR。
4. **🟢 #7995** [Files 面板刷新不更新已展开文件夹](https://github.com/agentscope-ai/QwenPaw/issues/7995)（2.2.2b4）：UI 层小问题，需整页刷新才能看到 Agent 新建文件。

## 6. 功能请求与路线图信号

| 需求 | 状态 | 判断 |
|---|---|---|
| #4525 Agent 上下文自动 checkpoint & reset | 讨论中 | #7965 已解决媒体回收的一半问题，自动 reset 机制可能成为下一阶段方向 |
| #7997 WebUI 消息撤回/编辑 + 工作区快照回滚 | 新提 | 与 #7998 的压缩时机诉求同源（上下文可控性），社区呼声渐强 |
| #7999 桌面端 UI 字体大小可调节 | 新提，自标 `good first issue` | 实现成本低，无对应 PR，适合纳入近期小版本 |
| #7990 模型目录为 Aliyun Token Plan 声明 `thinking_param_style` | 新提 | 属于 `model_catalog.json` 数据补全，官方修复成本低，可能很快落地 |

相关待合并 PR：
- **PR #8001** [fix(runtime): timeout 工具结果可恢复](https://github.com/agentscope-ai/QwenPaw/pull/8001)（解决 #7981）：让超时工具返回可继续的成功结果而非中断。
- **PR #6874** [feat(mcp): 可配置 MCP 工具调用超时](https://github.com/agentscope-ai/QwenPaw/pull/6874)（8/10 开启，Under Review）：默认 300s，与 #8001 组合可显著改善工具调用的健壮性。

## 7. 用户反馈摘要

- **痛点：上下文管理不透明**——多位用户（#7998、#4525）反映长时间自主任务中上下文持续打满 131k、压缩只在人工提交时触发、50-60% 利用率时质量退化，说明**自动化任务场景的上下文治理是当前最大体验缺口**。
- **痛点：Windows 桌面端质量**——双开窗口杀掉后端（#8000）、附件路径显示为完整路径（PR #8003 修复中）、COM 命令越权（#8002），桌面端（尤其 Windows）是近期 Bug 集中区。
- **诉求：可控性与可回滚**——消息撤回/编辑 + 文件快照回滚（#7997）体现用户希望“重新来过”的能力。
- **满意点**：文件面板、多终端、模型管理等功能被高频使用；社区报告 Bug 质量普遍较高（含版本号、复现步骤），生态参与度健康。

## 8. 待处理积压

- **#4525**（5/19 开启，4 个月+，仅 2 评论）：Agent 上下文生命周期管理是高价值需求且今日重新活跃，建议维护者给出明确回应。
- **PR #6874**（8/10 开启，~7 周，Under Review）：MCP 工具超时配置，建议尽快完成评审，与 #8001 协同落地。
- **PR #8001、#8003**：均为高价值修复，处于 OPEN 待合并，建议加速。
- **#8002（安全相关）**：尚无任何修复动作，鉴于涉及无沙箱 + auto 审批下的系统级副作用，建议维护者尽快确认并分配优先级。

---
*数据来源：GitHub（agentscope-ai/QwenPaw），统计窗口为过去 24 小时。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报（2026-09-28）

## 1. 今日速览

今日 EasyClaw 项目社区互动活跃度较低：过去 24 小时无新增或活跃的 Issues、无 PR 更新。项目重心集中在版本迭代上，发布了新版本 **v1.9.24**，包含 2 项针对 SPS 分析与页面布局的改进。整体来看，项目处于“稳定维护 + 小步快跑”的阶段，代码合入节奏健康，但社区讨论面今日较为沉寂。

## 2. 版本发布

**[v1.9.24: TK Copilot v1.9.24](https://github.com/gaoyangz77/easyclaw/releases)**

更新内容：
- **SPS 分析范围收窄**：SPS 分析仅展示支持的店铺，并将店铺选择范围限定在分析视图内，避免跨页面状态串扰。
- **布局修复**：修复长页面底部留白问题，避免内容紧贴桌面窗口底部，改善桌面端阅读体验。

破坏性变更：无。本次为常规迭代，用户升级无迁移成本。

## 3. 项目进展

今日无 PR 合并/关闭记录。版本 v1.9.24 的发布表明此前合入的改动已进入发布通道，推进的是**分析功能的精准化（店铺范围限定）**与**桌面端 UI 细节打磨**，属于渐进式体验优化。

## 4. 社区热点

今日无活跃 Issue/PR 讨论，暂无热点话题。（链接：https://github.com/gaoyangz77/easyclaw/issues）

## 5. Bug 与稳定性

今日无新增 Bug 报告。值得注意的是，v1.9.24 中修复的长页面底部留白问题属于 UI 布局类缺陷，严重程度为低，且已在发布版本中修复。

## 6. 功能请求与路线图信号

今日无新增功能请求。从 v1.9.24 的迭代方向看，项目近期路线聚焦于：
- 电商数据分析（SPS）的适用范围与准确性
- 桌面端（Desktop Shell）体验细节

预计下一版本仍将延续此方向的打磨。

## 7. 用户反馈摘要

今日无 Issue 评论可提炼。从近期版本说明可间接推断用户关注点集中在“分析数据与店铺的匹配准确性”和“窗口化使用的视觉舒适度”上。

## 8. 待处理积压

今日无长期未响应的 Issue/PR 记录在案。建议维护者例行巡检 [Issues 列表](https://github.com/gaoyangz77/easyclaw/issues)与 [PR 列表](https://github.com/gaoyangz77/easyclaw/pulls)，确认无陈旧积压项。

---

*数据来源：GitHub API | 统计窗口：过去 24 小时*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*