# OpenClaw 生态日报 2026-09-25

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-25 04:00 UTC

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

# OpenClaw 项目动态日报 — 2026-09-25

---

## 1. 今日速览

今日 OpenClaw 仓库保持高度活跃：过去 24 小时内 Issues 更新 500 条（新开/活跃 377，关闭 123），PR 更新 500 条（待合并 380，已合并/关闭 120），关闭率约 25%，消化能力健康。无新版本发布，社区正围绕 **2026.9.7 Fixes Tracker（#157531）** 紧锣密鼓地准备下一个修复版本。今日讨论焦点集中在 **SQLite 数据库锁定/性能问题、自升级失败、模型目录 CPU 空转** 三大稳定性主题，且多个 P0 问题已有对应修复 PR 在途。整体看，项目处于"高吞吐修复循环"阶段，贡献者响应及时，但 P0 积压的发布阻塞项仍需关注。

---

## 2. 版本发布

今日无新版本发布。当前版本为 2026.9.6，社区正在通过 [#157531 (2026.9.7 Fixes Tracker)](https://github.com/openclaw/openclaw/issues/157531) 追踪 2026.9.6 → 2026.9.7 的修复清单，涉及 1,058 个主线 commit 的审计账本，下个版本预计为集中修复版本。

---

## 3. 项目进展

今日 120 个 PR 合并/关闭，380 个待合并，多个重要修复推进：

- **通道 Webhook 架构重构**：[PR #157555](https://github.com/openclaw/openclaw/pull/157555) 将 Telegram/Teams/飞书/Nextcloud Talk 等通道的接收 Webhook 统一迁移到 Gateway HTTP 端口，属 XL 级安全敏感变更，已修复三处 CI 分类失败，等待维护者审查。
- **发布质量加固**：[PR #157864](https://github.com/openclaw/openclaw/pull/157864) 恢复阻塞性发布验证、移除发布豁免——确保所有选定验证 lane 必须通过才能稳定发布，直接回应了近期版本质量问题。
- **MCP 工具稳定性**：[PR #157855](https://github.com/openclaw/openclaw/pull/157855)（P1）修复 MCP 服务器 `tools/list` 超过 1.5s 时工具全部消失的问题，对慢速远程 MCP 服务器是关键修复。
- **消息可靠性**：[PR #157127](https://github.com/openclaw/openclaw/pull/157127)（P1）修复 Gateway 重启后发送方退役导致的最终回复丢失。
- **子代理调度**：[PR #157878](https://github.com/openclaw/openclaw/pull/157878) 修复任务归属另一 runtime 时 requester-settle 唤醒无限重试（关闭 [#137332](https://github.com/openclaw/openclaw/issues/137332)）。
- **Anthropic 缓存修复**：[PR #157650](https://github.com/openclaw/openclaw/pull/157650) 跨多 provider 修复 tool loop 中缓存前缀丢失，显著降低 token 成本。
- **其他进展**：Control UI 团队侧边栏排序（[#155139](https://github.com/openclaw/openclaw/pull/155139)）、cron 消息格式规则（[#157877](https://github.com/openclaw/openclaw/pull/157877)）、memory-core 防自摄入（[#157879](https://github.com/openclaw/openclaw/pull/157879)）等均进入待审查状态。

整体判断：项目向 2026.9.7 的发布推进顺利，消息投递可靠性与 MCP/模型目录两大薄弱面均有实质性修复落地。

---

## 4. 社区热点

1. **[#155753](https://github.com/openclaw/openclaw/issues/155753)（23 评论）— 模型目录过期/重建死循环烧满一个 CPU 核**：`readFullModelCatalog()` 每次读取都触发 `refreshExpiredCatalog()`，叠加 ~60s TTL 造成持续 CPU 消耗。与 #154276/#153422 同源，是近期性能投诉的核心。
2. **[#142585](https://github.com/openclaw/openclaw/issues/142585)（17 评论，P0）— Doctor 拒绝迁移合法旧版工作区/证明状态**：2026.7.1 → 2026.9.3 升级被阻断，属 UX 发布阻塞项的迁移类回归。
3. **[#97616](https://github.com/openclaw/openclaw/issues/97616)（16 评论，P1）— hook/工具子进程泄漏产生僵尸进程**：长期运行下运行时退化，自 6 月底持续活跃。
4. **[#137332](https://github.com/openclaw/openclaw/issues/137332)（16 评论，P1）— 混合终端 settle 批次无限重试**：✅ 已有修复 PR [#157878](https://github.com/openclaw/openclaw/pull/157878)。
5. **[#148963](https://github.com/openclaw/openclaw/issues/148963)（13 评论）— 会话列表扫描保留分页外的归档元数据**：维护者机器人提交的系统性持久化/饥饿问题入口。

诉求分析：社区高频反馈集中在**长期运行稳定性（CPU/内存/进程泄漏）**与**升级路径可靠性**，用户多为生产部署者，对资源占用和迁移阻断极其敏感。

---

## 5. Bug 与稳定性（按严重度）

### P0 / 发布阻塞
| Issue | 问题 | Fix PR |
|---|---|---|
| [#152804](https://github.com/openclaw/openclaw/issues/152804) | 2026.9.5 升级后 minimax-portal 模型目录丢失，主 lane 全挂 | ❌ 无 |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | Gateway 启动时间随插件数量线性增长，discord/codex/weixin 占满 120s 预算 | ❌ 无 |
| [#151467](https://github.com/openclaw/openclaw/issues/151467) | 自升级死锁 + 回滚 cron 失败（v6.33→v9.4） | ❌ 无（相关 [#147584](https://github.com/openclaw/openclaw/pull/147584) 在途） |
| [#148307](https://github.com/openclaw/openclaw/issues/148307) | 会话回收超过 5s busy timeout 导致 `database is locked` | ❌ 无 |
| [#157234](https://github.com/openclaw/openclaw/issues/157234) ✅已关闭 | 更新恢复因 agent 数据库 lease 活跃而失败 | 近期关闭 |
| [#117742](https://github.com/openclaw/openclaw/issues/117742) | 多文件 apply_patch 部分失败时早期删除已提交（数据丢失） | ❌ 无 |
| [#137177](https://github.com/openclaw/openclaw/issues/137177) | 内置 wecom 插件无法安装 | ❌ 无 |

### P1 重要
- [#145309](https://github.com/openclaw/openclaw/issues/145309)：claude-cli 后端忽略 `CLAUDE_CONFIG_DIR` 导致 transcript 重置（✅ 有 linked PR）。
- [#157617](https://github.com/openclaw/openclaw/issues/157617)：2026.9.6 上会话写入队列因 DB 完整性维护等待数分钟（2.8GB 库）。
- [#121661](https://github.com/openclaw/openclaw/issues/121661)：CLI 子代理 announce-wake 无工具运行，模型**伪造工具调用及其输出**。
- [#135117](https://github.com/openclaw/openclaw/issues/135117)：心跳将异步结果重放到错误 Discord 频道（跨频道信息泄漏）。
- [#157067](https://github.com/openclaw/openclaw/issues/157067)：Windows 隔离 cron 向 worker 传递不可克隆 Proxy（✅ 有 linked PR）。
- [#151962](https://github.com/openclaw/openclaw/issues/151962)：长会话中出现用户从未发送的"幽灵消息"。

### P2 性能类
- [#153067](https://github.com/openclaw/openclaw/issues/153067) ✅已关闭：稳态下每实例每 ~5s 复制整个状态 DB（~5.9TB/天写入）。
- [#118885](https://github.com/openclaw/openclaw/issues/118885)：单次启动对同一多 GB 库重复执行完整 `PRAGMA integrity_check`。
- [#143640](https://github.com/openclaw/openclaw/issues/143640)：memory-core 全量索引发布用单个 IMMEDIATE 事务，耗尽并发写 5s 超时。

**结构性信号**：SQLite busy timeout（5s）与日益增长的库体量之间的矛盾已引发一族问题（#148307/#143640/#157617/#118885），建议作为专项治理。

---

## 6. 功能请求与路线图信号

- **动态模型发现**：[#10687](https://github.com/openclaw/openclaw/issues/10687)（4 👍，10 评论）呼吁 OpenRouter 等快速变化目录的全动态发现——当前静态目录正是 #155753/#152804 一族目录问题的根源，结合 #157531 修复追踪器，很可能在 2026.9.x 纳入。相关 UX 修复 [#157869](https://github.com/openclaw/openclaw/pull/157869)（大型选择器保持当前模型置顶）已在途。
- **Skill Capability Manifests RFC**：[#74594](https://github.com/openclaw/openclaw/issues/74594)（已关闭）技能能力清单，与安全审查相关，方向仍在演进。
- **Agent 迭代上限**：[#9912](https://github.com/openclaw/openclaw/issues/9912) `maxTurns/maxToolCalls` 配置，需求长期存在。
- **会话智能自动命名**：[#99583](https://github.com/openclaw/openclaw/issues/99583)（2 👍），代码库已有 slug 生成器，实现成本低。
- **ACP 会话技能注入**：[#43564](https://github.com/openclaw/openclaw/issues/43564)（已关闭），配合 [PR #154208](https://github.com/openclaw/openclaw/pull/154208) Agents API 工具支持，多 runtime 融合是明显路线方向。
- **观测性**：[#50291](https://github.com/openclaw/openclaw/issues/50291) 插件钩子缺少 trace 上下文，对构建分布式追踪的企业用户是刚需。

---

## 7. 用户反馈摘要

**痛点（高频出现）**：
- **升级即翻车**：多个用户报告手动 `npm install -g` 升级后模型目录丢失、Doctor 拒绝迁移、自升级死锁（#152804/#142585/#151467），自动更新器本身不可用迫使用户手动操作，放大了风险。
- **长期运行资源退化**：CPU 空转（#155753）、3GB+ RSS 内存压力（#156191）、僵尸进程累积（#97616）、OOM（#99659）——生产部署用户最受影响。
- **大库性能悬崖**：数据库超过几百 MB 后锁定、启动完整性检查、队列等待显著恶化。
- **消息可靠性**：幽灵消息（#151962）、错频道投递（#135117）、重启丢回复（#157127 已修）损害对助手的信任。
- **模型伪造工具输出**（#121661/#87051）是用户反复提到的质量隐患。

**满意点**：
- 贡献者响应速度快，多数新报 issue 当天获得标签分类与 source-repro 验证。
- 报告模板完善（bug type/impact/rating 分级），社区报告质量高，含完整复现与源码级定位。
- WeChat/Telegram/Discord 等多通道生态活跃，第三方通道开发者参与度高。

---

## 8. 待处理积压（维护者请关注）

| 项目 | 状态 | 说明 |
|---|---|---|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 开放近 3 个月，P1 | 僵尸进程泄漏，无 fix PR，长期运行稳定性核心项 |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | 开放近 3 个月，P1 | MCP loopback 网关重启后不自动重连，`recovered=1` 误导用户 |
| [#118839](https://github.com/openclaw/openclaw/issues/118839) | 开放近 2 个月 | "restart recovery claim changed" 回归在含修复的 beta.7 上复现，此前修复可能无效 |
| [#118885](https://github.com/openclaw/openclaw/issues/118885) | 开放近 2 个月 | 重复完整性检查，bulk-filed，需产品决策 |
| [#129314](https://github.com/openclaw/openclaw/issues/129314) | 开放 1 个月 | 内部 runtime context 泄漏为可见消息 |
| [#152804](https://github.com/openclaw/openclaw/issues/152804) / [#155859](https://github.com/openclaw/openclaw/issues/155859) | P0 发布阻塞 | 均无 fix PR，阻塞 2026.9.7 |
| [PR #127775](https://github.com/openclaw/openclaw/pull/127775) | 开放 1 个月，stale | request 作用域内存修复，已 ready for review 久候 |
| [PR #154208](https://github.com/openclaw/openclaw/pull/154208) | waiting on author | Agents API 工具支持（XL），阻塞多 runtime 融合进展 |

**建议**：优先解决 5 个无 fix PR 的 P0 阻塞项（尤其模型目录与升级路径），并将 SQLite busy-timeout 族问题立项专项治理，这是当前影响面最广的系统性风险。

---
*数据来源：GitHub API（Issues/PR 近 24 小时快照）。链接均为 openclaw/openclaw 仓库内条目。*

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告
**数据基准日：2026-09-25**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源赛道已进入**多项目并行、分化明显**的成熟竞争期：从 OpenClaw 这类超大型枢纽项目（单日 500 Issue + 500 PR 更新）到轻量嵌入式方案（NullClaw、PicoClaw）形成完整谱系。生态的共性战场已从“能不能跑”转移到**长期运行稳定性、上下文/压缩管理、多 IM 渠道接入、升级路径可靠性**四大主题。同时各项目均在向“无人值守自动化”演进——审批机制、后台任务、cron/heartbeat 场景的可靠性成为新的竞争焦点。今日 12 个跟踪项目中 9 个有活动、3 个静默，头部项目（OpenClaw、NanoBot、CoPaw）呈高吞吐修复循环，尾部项目（TinyClaw、ZeptoClaw、EasyClaw、Moltis）接近休眠。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新（新开/关闭） | PR 更新（待合并/合并） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（377/123），关闭率 ~25% | 500（380/120） | ❌（筹备 2026.9.7） | 🟢 高吞吐但有 5 个无 fix PR 的 P0 阻塞 |
| **NanoBot** | 14（8/6） | 37（13/24） | ❌（v0.3.5 迭代中） | 🟢 良性循环，积压清理节奏健康 |
| **Zeroclaw** | 24（20/4） | 50（42/8） | ❌（v0.8.6/v0.9.0 推进） | 🟡 活跃，但 2 个 S0 安全问题无修复 |
| **Hermes Agent** | 50（18/32），关闭 > 新开 | 50（46/4） | ✅ v0.21.5 | 🟢 积压清理高效，Windows 体验短板 |
| **PicoClaw** | 2（1/1） | 8（8/0） | ❌ | 🟡 合并吞吐是瓶颈，2 PR 已 stale |
| **NanoClaw** | 2（2/0） | 13（10/3） | ❌（2.4.0 收尾期） | 🟡 响应极快但贡献者单点风险 |
| **NullClaw** | 12（2/10） | 25（17/8） | ❌（临近发布） | 🟢 集中清偿技术债，当日修复闭环 |
| **IronClaw** | 1 | 1（1/0） | ✅ v1.4.1-rc.2 | 🟡 RC 迭代期，人工 review 吞吐低 |
| **LobsterAI** | 16（0/16，多为 stale 关闭） | 7（4 待合并/3 关闭） | ❌ | 🟠 社区讨论降温，5 个安全 Issue 被机器人关闭 |
| **CoPaw** | 20（16/4） | 17（15/2） | ❌（v2.2.2-beta） | 🟢 社区活跃，但上下文管理 Bug 密度偏高 |
| TinyClaw / Moltis / ZeptoClaw / EasyClaw | 0 | 0 | ❌ | ⚪ 静默 |

---

## 3. OpenClaw 在生态中的定位

**社区规模：断崖式领先。** OpenClaw 单日 Issue/PR 更新量（各 500 条）约为第二名 Hermes Agent 的 10 倍，为 NanoBot 的约 30 倍（Issue 侧），是生态中唯一进入“平台级规模”的项目。其 issue 编号已达六位数，1,058 个主线 commit 构成单个版本增量，体量远超同类。

**技术路线差异：**
- **通道生态最全**：Telegram/Teams/飞书/微信/Discord/Nextcloud Talk 统一 Webhook 架构（PR #157555），第三方通道开发者参与度高，这是 NanoBot（渠道修复闭环但规模较小）、PicoClaw（多 IM 但吞吐不足）难以匹敌的护城河。
- **Gateway + 多 runtime 融合路线**：子代理跨 runtime 调度、Agents API（PR #154208）、ACP 会话技能注入，走的是“运行时编排平台”路线；Zeroclaw 同方向（gateway 分离 + ZeroRelay + 插件化）但尚在 v0.9.0 铺设期；CoPaw 走多租户 Hub 团队化路线；NullClaw/PicoClaw 则是单机轻量路线。
- **规模化的代价**：大库 SQLite 锁定族问题（#148307/#143640/#157617/#118885）、自升级死锁、模型目录 CPU 空转——这类“规模化病”是小型项目尚未遇到的结构性风险，也是 OpenClaw 当前最大软肋。

**优势总结**：贡献者响应速度（当天分类+验证）、报告模板质量、通道生态广度。**风险**：5 个 P0 无 fix PR 且阻塞 2026.9.7 发布，升级路径可靠性问题（#152804/#142585/#151467）直接损害生产部署用户信任。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **上下文压缩/管理** | CoPaw（#7628/#7836/#5856/#7979 四个 Issue 簇）、NanoBot（#5849 压缩死锁、#5900 静默压缩）、Hermes（#88988 /compress 超时）、LobsterAI（#2765 压缩持久化）、NanoBot（#5865 上下文预算被 fallback 削减） | **生态内最密集的共性痛点**：长会话下压缩触发误判、tool_call 结构丢失、预算计算错误、压缩体验（通知/超时） |
| **升级/安装路径可靠性** | OpenClaw（自升级死锁、Doctor 拒绝迁移）、Hermes（“假成功”、Windows 签名拦截）、NanoBot（0.3.5 破坏性目录校验）、CoPaw（beta 回归连环踩坑）、NanoClaw（安装状态残留）、IronClaw（OAuth 激活修复连发两 RC） | 自动更新器不可用迫使手动升级、破坏性变更缺迁移说明、“假成功”最伤信任 |
| **无人值守/后台任务可靠性** | Zeroclaw（#10968 S0 审批静默失效）、OpenClaw（cron/子代理调度、hook 进程泄漏）、NanoBot（schedule_background 异常吞没）、NanoClaw（heartbeat 误杀长流式输出）、LobsterAI（任务连续性诉求） | “派任务后离开”是主流使用方式，任何依赖交互存在的机制都是隐患 |
| **多 IM 渠道正确性** | OpenClaw（跨频道泄漏 #135117）、NanoBot（飞书泄漏内部标记、Discord/Matrix 修复）、CoPaw（飞书 consumer 卡死）、PicoClaw（DeltaChat 启动失败）、NullClaw（Telegram 栈溢出） | 渠道是核心交付面，消息错投/丢失/内部标记泄漏是信任红线 |
| **ARM/边缘/本地部署** | NanoClaw（arm64 安装失败）、NullClaw（aarch64 SIGSEGV、Termux）、CoPaw/Hermes（本地 llama.cpp provider 配置缺失） | 边缘设备与本地模型用户群体真实且增长 |
| **成本/Token 优化** | OpenClaw（Anthropic 缓存前缀修复）、Zeroclaw（prompt-cache TTL）、LobsterAI（Token 消耗 60M vs 同类 67K）、CoPaw（ReMeLight 记忆写入独立模型） | 缓存计费细节与 token 效率成重度用户核心关切 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键特征 |
|---|---|---|---|
| **OpenClaw** | 全通道个人助手枢纽 + 多 runtime 编排 | 生产部署者、重度自动化用户 | Gateway 中心化、SQLite 状态库、通道插件生态 |
| **Zeroclaw** | 安全与身份（OIDC）+ 插件化（"Everything is a plugin"） | 对安全合规敏感的部署者 | Rust、WASM 运行时插件、SOP 控制面、ZeroRelay |
| **Hermes Agent** | 多前端一致性（TUI/Desktop/Telegram）+ 插件生命周期 | 桌面优先用户 | 共享 state.db 多前端架构、Electron Desktop |
| **CoPaw** | 团队协作/多租户 Hub | 从个人向团队场景演进的用户 | Hub 多租户、ReMe 记忆系统、Console |
| **NanoBot** | 渠道正确性 + WebUI 体验 | IM 渠道日常使用者 | Python/asyncio、多渠道适配层 |
| **NanoClaw** | 安全代理（Iron Proxy 审批）+ CLI | 高自动化、本地基础设施用户 | 容器化代理、per-host 审批模型 |
| **NullClaw** | 弱设备本地运行 | 嵌入式/低成本设备用户 | 小栈线程、SQLite 单文件、低资源设计 |
| **PicoClaw** | 移动端 TUI + 多 IM | 移动终端用户 | Go、轻量渠道框架 |
| **IronClaw** | 办公场景扩展（Gmail/Calendar）+ 评测 | 自部署运营者 | 自动化失败分类、代码库知识图谱 |
| **LobsterAI** | OpenClaw 深度集成 + Cowork UI | 网易有道生态用户 | Desktop（Windows 短板）+ OpenClaw runtime |

---

## 6. 社区热度与成熟度分层

- **平台级高速迭代**：OpenClaw——体量最大但正为规模化病买单，处于“高吞吐修复循环”，2026.9.7 发布质量是关键节点。
- **快速成长期**：NanoBot（社区报障+快速修复良性循环、首捐贡献者活跃）、CoPaw（Hub 路线图讨论 32 评论、功能储备丰富）、Zeroclaw（v0.9.0 四条主线并行，安全基建领先）。
- **质量巩固/收尾期**：Hermes Agent（发版后清积压，关闭 32 > 新开 18）、NullClaw（集中清偿技术债、文档重建）、NanoClaw（2.4.0 收尾）、IronClaw（RC 迭代，节奏稳定但社区冷淡）。
- **动能衰减警示**：LobsterAI（真实社区讨论趋零、安全 Issue 被机器人批量关闭、高严重度 Bug 无跟进）；PicoClaw（合并吞吐停滞，含安全相关的依赖升级悬置）。
- **休眠**：TinyClaw、Moltis、ZeptoClaw、EasyClaw。

---

## 7. 值得关注的趋势信号

1. **“长期运行稳定性”取代功能成为第一竞争维度。** OpenClaw 的 CPU 空转/僵尸进程/5.9TB/天状态复制、CoPaw 的静默卡死、多项目的进程泄漏——用户已按“7×24 服务”标准要求这些项目。SQLite busy-timeout 与库体量的矛盾（OpenClaw 已成问题族）预示头部项目将被迫引入更成熟存储方案（WAL 调优、分库或迁移）。

2. **无人值守自动化倒逼“安全默认”重构。** Zeroclaw S0 级“无人值守审批静默失效”（#10968）与 NanoClaw 的“审批疲劳”诉求（#3881 per-host 自动审批）是同一枚硬币两面：既要有可靠的静默审批链路，又要提供可配置信任级别。审批/权限模型设计将成为 2026 下半年差异化焦点。

3. **上下文压缩从特性变为“生死攸关子系统”。** 至少 5 个项目同日出现压缩相关 Issue，且集中于三类根因：预算计算错误、结构（tool_call）丢失、触发条件误判。可预测的架构演进：压缩前平滑交接与预警（CoPaw #7733）、分块摘要（NanoBot 手动路径已验证）、压缩状态持久化（LobsterAI #2765）。

4. **模型目录静态化全面溃败。** OpenClaw 目录死循环/#152804 主 lane 全挂、CoPaw 本地模型被误配 1M 窗口、LobsterAI 目录扫描漏第三方 provider——动态模型发现（OpenClaw #10687）+ 本地模型探测（Hermes #62213）是明确且紧迫的路线方向。

5. **多前端会话一致性是信任放大器。** Hermes（Desktop/TUI/Telegram 共享 state.db 被认可为正确方向但 bug 反复）、OpenClaw 幽灵消息——消息层的任何错误（错频道、丢失、伪造工具输出）对用户信任的杀伤远大于性能问题。

6. **对开发者的实操建议**：① 选型看生产信号而非 star 数——关注 issue 关闭率与 S0/P0 响应时延；② 依赖 OpenClaw 类枢纽时，锁定版本、回避自动升级直到 2026.9.7 验证；③ ARM/本地模型部署需求增长（NanoClaw/NullClaw/Hermes 信号一致），provider 可插拔与多架构镜像是未来 6 个月的选型硬指标。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-09-25

## 1. 今日速览

NanoBot（HKUDS/nanobot）今日保持高活跃度：过去 24 小时共 51 条动态更新，其中 Issues 14 条（8 新开/活跃、6 关闭），PR 37 条（24 条已合并/关闭、13 条待合并）。项目呈现“社区报障 + 快速修复”的良性循环，多个月度前提出的 Issue（如 #5366、#5429、#5274）在近期 PR 推动下集中关闭，显示维护团队正在系统性消化积压。无新版本发布，但从 0.3.5 版本相关的回归反馈看，项目处于密集迭代期。整体健康度良好，贡献者参与度高（单日 10+ 位独立贡献者提交 PR）。

## 2. 版本发布

今日无新版本发布。近期版本为 v0.3.5，其引入的运行时目录校验规则引发了回归问题（见 #5881），建议关注后续修复版本的发布。

## 3. 项目进展

今日共合并/关闭 24 条 PR，重点进展集中在三个方向：

**Agent 核心稳定性**
- [PR #5431](https://github.com/HKUDS/nanobot/pull/5431) & [PR #5724](https://github.com/HKUDS/nanobot/pull/5724)：修复 `AgentLoop.schedule_background` 不检索后台任务异常的问题，配套 Issue #5429 一并关闭。后台任务失败（会话归档、WebUI 标题生成等）此前只抛出 asyncio 通用警告，现在会带任务名与 traceback 记录日志。
- [PR #5865](https://github.com/HKUDS/nanobot/pull/5865)（待合并）：修复较小 fallback 上下文窗口意外压缩主窗口预算的问题，256K 主配置不再被 200K fallback 削减。

**渠道（Channels）修复闭环**
- [PR #5807](https://github.com/HKUDS/nanobot/pull/5807) & [PR #5864](https://github.com/HKUDS/nanobot/pull/5864)：修复 Discord 运行时停止后 reaction 任务残留（Issue #5806），包含延迟 emoji 任务取消与 pending reactions 清理。
- [PR #5292](https://github.com/HKUDS/nanobot/pull/5292)：Matrix 渠道回复现在正确链接到触发 turn 的用户事件（Issue #5274，8 月初提出，今日闭环）。
- [PR #5367](https://github.com/HKUDS/nanobot/pull/5367)：WebUI Agent 活动文案在全部 10 种支持语言中本地化（Issue #5366 闭环）。

**WebUI 性能与体验**
- [PR #5904](https://github.com/HKUDS/nanobot/pull/5904)：聊天刷新不再整页 loading，改用有界本地缓存 + 后台重校验，优化移动端交互。
- [PR #5905](https://github.com/HKUDS/nanobot/pull/5905)：全局页面 URL 保持干净、聊天挂载延迟化，设置页不再触发不必要的会话拉取。
- [PR #5907](https://github.com/HKUDS/nanobot/pull/5907)（待合并）：测试套件整合，34 个文件去重净减 703 行，生产代码零改动，将缩短 CI 时间。

整体看，项目在“渠道正确性 + 后台任务可靠性 + WebUI 性能”三条线上均有实质推进，积压清理节奏健康。

## 4. 社区热点

- **[Issue #5849](https://github.com/HKUDS/nanobot/issues/5849) — 自动压缩死锁**：`summarize_transcript` 将全部历史 + 系统提示发给摘要模型且无 token 预算保护，一旦历史超出输入预算，压缩永远无法完成；而手动路径 `archive_session` 已正确分块。这是长会话用户的核心痛点，尚无对应 fix PR，**建议优先处理**。
- **[Issue #5881](https://github.com/HKUDS/nanobot/issues/5881)（已关闭）— 0.3.5 破坏性目录校验**：`_nanobot/sessions` 落在 workspace 内即拒绝启动，多实例用户被迫迁移目录。作为 regression + p2 已关闭，推测有修复合入，建议用户关注变更说明。
- **[Issue #5898](https://github.com/HKUDS/nanobot/issues/5898) — GitHub Copilot 渠道不支持 GPT-6 系列**：v0.3.5 下 provider 请求直接失败，模型兼容性诉求明确。
- **[PR #1387](https://github.com/HKUDS/nanobot/pull/1387)（已关闭）— Anthropic extended thinking**：3 月提出的老 PR 今日关闭，与 `reasoning_effort` 的双模式思考支持，可能已被其他实现取代。

## 5. Bug 与稳定性

按严重程度排序：

| 级别 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#5849](https://github.com/HKUDS/nanobot/issues/5849) 自动压缩死锁，历史超预算后不可恢复 | **无 fix PR，待处理** |
| 🔴 高 | [#5903](https://github.com/HKUDS/nanobot/issues/5903) 飞书渠道将隐藏的 session-checkpoint 标记消息（"Continue the active task..."）作为普通消息发送给用户 | 待处理 |
| 🟠 中 | [#5881](https://github.com/HKUDS/nanobot/issues/5881) 0.3.5 回归：`_nanobot` 目录校验拒绝启动（regression, p2） | 已关闭 |
| 🟠 中 | [#5898](https://github.com/HKUDS/nanobot/issues/5898) Copilot 渠道 GPT-6 系列不可用 | 待处理 |
| 🟠 中 | [PR #5911](https://github.com/HKUDS/nanobot/pull/5911) Telegram 渲染：`~~~` 围栏与超长代码块被当正文格式化 | fix PR 待合并 |
| 🟠 中 | [PR #5838](https://github.com/HKUDS/nanobot/pull/5838) API 所有 session_id 均路由到 `api:default` 聊天，turn 路由/cron 绑定全错位 | fix PR 待合并（有冲突） |
| 🟡 低 | [#5806](https://github.com/HKUDS/nanobot/issues/5806) Discord reaction 任务残留 | ✅ 已修复（#5807/#5864） |
| 🟡 低 | [PR #5834](https://github.com/HKUDS/nanobot/pull/5834) SSE Responses 消费者静默丢弃 `response.reasoning_text.*` 事件（影响 xAI Grok / Codex） | fix PR 待合并 |

## 6. 功能请求与路线图信号

今日新开功能请求密集，且部分已有配套 PR，落地概率较高：

- **OpenCode Go Responses API 路由**：[#5896](https://github.com/HKUDS/nanobot/issues/5896)（good first issue, p2）+ 配套 [PR #5906](https://github.com/HKUDS/nanobot/pull/5906) 已提交，muse-spark contributor 模型当前在 `/chat/completions` 上返回 500，**很可能进入下一版本**。
- **静默上下文压缩**：[#5900](https://github.com/HKUDS/nanobot/issues/5900) + [PR #5780](https://github.com/HKUDS/nanobot/pull/5780)（保留 `/compact` 通知、自动压缩静默）诉求一致，合并意向明确。
- **WebUI 三连请求**：会话级 composer 草稿持久化（[#5910](https://github.com/HKUDS/nanobot/issues/5910)）、流式回复实时 tokens/sec 指示（[#5908](https://github.com/HKUDS/nanobot/issues/5908)）均为轻量 UX 增强，符合 WebUI 近期迭代方向（#5904/#5905），采纳概率高。
- **服务端消息排队（"waiting room"）**：[#5909](https://github.com/HKUDS/nanobot/issues/5909) 让 agent 忙时可排队后续消息，架构改动较大，属中期路线图信号。
- **Telegram 话题自动改名**：[PR #5902](https://github.com/HKUDS/nanobot/pull/5902) 将会话标题生成模块化并同步到 TG forum topic，功能完整度较高。

## 7. 用户反馈摘要

- **长任务等待体验是普遍痛点**：通知铃声（#5524）、tokens/sec 指示（#5908）、消息排队（#5909）三个独立请求都源于“agent 执行长任务时用户只能干等”的场景。
- **多渠道真实生产使用**：飞书、微信、Discord、Matrix、Telegram 用户均在报障，说明渠道生态是核心使用面；微信/WhatsApp 用户对压缩通知打扰（#5900）不满。
- **上下文管理是高级用户的核心关切**：#5849（压缩死锁）、#5900（压缩通知）、#5865（上下文预算被 fallback 削减）均围绕长会话下的上下文压缩行为。
- **升级体验有摩擦**：0.3.5 的目录校验直接阻断多实例用户启动（#5881），用户对破坏性变更缺少迁移说明表达不满。
- **正面信号**：good first issue 标签吸引了新贡献者（如 #5896），月度级 Issue 被持续闭环，社区对维护响应速度整体满意。

## 8. 待处理积压

提醒维护者关注：

1. **[#5849](https://github.com/HKUDS/nanobot/issues/5849)**：高严重度压缩死锁，无修复 PR，影响所有长会话用户，建议尽快排期。
2. **[#5903](https://github.com/HKUDS/nanobot/issues/5903)**：飞书泄漏内部标记消息，影响用户体验，今日新报无响应。
3. **[PR #5257](https://github.com/HKUDS/nanobot/pull/5257)**（8 月 5 日提交）：sustained-goal 空闲时无限“continue”循环的修复，挂起近 2 个月，涉及 agent 行为语义，建议评审。
4. **[PR #5260](https://github.com/HKUDS/nanobot/pull/5260)**（8 月 5 日提交）：workspace 内 memory 运行时文件污染 untracked 列表的修复，同样长期待审。
5. **[PR #5845](https://github.com/HKUDS/nanobot/pull/5845)**：Opper 内置 provider，改动小（registry 单条目），可快速裁决。
6. **[Issue #5898](https://github.com/HKUDS/nanobot/issues/5898)**：GPT-6 + Copilot 兼容性，模型新版本支持通常是高优先诉求，目前无响应。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 — 2026-09-25

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时共 24 条 Issue 更新（新开/活跃 20，关闭 4）、50 条 PR 更新（待合并 42，合并/关闭 8），无新版本发布。项目当前处于 v0.8.6 / v0.9.0 双里程碑推进期（[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)），多条主线并行：插件化能力目录（"Everything is a plugin"）、OIDC 身份认证、ZeroRelay 传输、SOP 控制面。值得注意的是今日新报了 2 个 S0 级安全问题（[#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968)、[#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797)），其中 #10968 尚无修复 PR，需维护者优先介入。社区贡献者结构多元（@JordanTheJet、@Audacity88 高频产出，外部贡献者持续提交 provider/channel 生态扩展），整体健康度良好。

## 2. 版本发布

今日无新版本发布。当前最近的版本工作围绕 [v0.8.6 / v0.9.0 里程碑](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 进行，发布效率改进由 [#10814](https://github.com/zeroclaw-labs/zeroclaw/issues/10814) 跟踪。

## 3. 项目进展

今日合并/关闭 8 个 PR，较重要的包括：

- **[#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259)（已关闭）** — OIDC 里程碑 Stage 3：RPC 认证主体强制校验（native + peercred）。这是 #8289 身份与访问里程碑的关键一环，其 Stage 2（#10248）和 OIDC 验证 provider（#10255）已 squash 合入 master，**身份认证主线取得实质性落地**。
- **[#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899)（已关闭）** — 移除 matrix-sdk → imbl 相关的 RUSTSEC advisory 豁免，安全 CI 阻塞解除。
- **[#9805](https://github.com/zeroclaw-labs/zeroclaw/issues/9805)（已关闭）** — SOP auto 模式从 channel/cron 触发后永久卡在 `running` 的问题（对应修复见 [#10522](https://github.com/zeroclaw-labs/zeroclaw/pull/10522)）。
- **[#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)（已关闭）** — Web dashboard 退出聊天窗口导致 Agent 中断的 S1 级 UX 阻塞问题，长期用户痛点得到解决。
- **[#10948](https://github.com/zeroclaw-labs/zeroclaw/issues/10948)（已关闭）** — interruption-scope key 跨组件边界冲突修复。

总体看，今日关闭项集中在**安全合规（cargo deny）与 SOP/网关稳定性**，v0.9.0 的 gateway 分离与 OIDC 主线稳步向前。

## 4. 社区热点

讨论最活跃的条目（按评论数）：

- **[#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)（8 评论）** — 统一能力目录与插件迁移 Tracker，"Everything is a plugin" 北极星方向，牵动整个产品形态，是多条 PR（如 #8850）的上游依赖。
- **[#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519)（7 评论）** — cargo-audit / cargo-deny 配置漂移与 wasmtime-wasi CVE 处置，社区对**供应链安全流程一致性**高度关注。
- **[#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)（5 评论）** — 编译期 feature flag 迁移到运行时 WASM 插件，诉求是**免重编译扩展 channel/tool**、缩小默认二进制。
- **[#10315](https://github.com/zeroclaw-labs/zeroclaw/issues/10315)（5 评论）** — ZeroRelay 浏览器 enrollment 前门回归（不用手写 TLS），与 #11089/#11099 PR 栈联动，是远程节点配对体验的关键。
- **[#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)（5 评论）** — 今日关闭，Web 端“离开聊天即中断 Agent”是桌面/后台使用场景的核心痛点。

## 5. Bug 与稳定性（按严重度）

**S0 — 数据丢失/安全风险：**
- ⚠️ **[#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968)**（OPEN，needs-maintainer-review）：cron/heartbeat/headless SOP/spawn_subagent 等无人值守 Agent 回合不构建 ApprovalManager，风险等级工具审批**静默失效**。**尚无 fix PR，需优先处理。**
- **[#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797)**（accepted）：Markdown memory backend 并发 `store()` 静默丢数据。已 accepted，暂未见专门 fix PR（相关 memory 修复 PR：[#11035](https://github.com/zeroclaw-labs/zeroclaw/pull/11035)、[#10652](https://github.com/zeroclaw-labs/zeroclaw/pull/10652) 处理 Qdrant/PostgreSQL 路径）。

**S1 — 工作流阻塞：**
- **[#11087](https://github.com/zeroclaw-labs/zeroclaw/issues/11087)**（新开）：Windows 关窗后进程残留，无法重新打开也无法退出。无 fix PR。

**S2 — 行为退化：**
- [#11094](https://github.com/zeroclaw-labs/zeroclaw/issues/11094)：Apple preflight 测试因 sleep mock 拦截子进程轮询而偶发失败（CI 噪声）。
- [#11093](https://github.com/zeroclaw-labs/zeroclaw/issues/11093)：stable 文档晋升后根目录 llms.txt 与版本不同步。

**S3 — 轻微：**
- [#11097](https://github.com/zeroclaw-labs/zeroclaw/issues/11097)：插件 egress 补救命令未转义撇号，含撇号的已有 grant 会被截断。

**相关修复 PR（待合并）：** [#11061](https://github.com/zeroclaw-labs/zeroclaw/pull/11061)（阻止高风险 shell 命令即使已加白名单也执行，与 #10968 主题互补）、[#11106](https://github.com/zeroclaw-labs/zeroclaw/pull/11106)（AnySearch 响应校验）。

## 6. 功能请求与路线图信号

**今日新功能请求：**
- **[#11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103) / PR [#11104](https://github.com/zeroclaw-labs/zeroclaw/pull/11104)** — 新增 Cheaper Inference 作为 typed OpenAI-compatible provider，Issue + PR 同日提交，采纳概率高，符合既有 provider 扩展模式。
- **[#11100](https://github.com/zeroclaw-labs/zeroclaw/issues/11100)** — 成本费率目录预填时保留 provider 完整别名身份，属于 dashboard/ZeroCode 成本管理精细化。
- **[#11096](https://github.com/zeroclaw-labs/zeroclaw/issues/11096)（RFC）** — 基于风险的 merge-result 新鲜度检查，回应 #10525/#10815/#11066 的 CI 事故，属于工程流程改进。

**路线图信号：** 插件化（#6489、#8850）、OIDC（#8289，今日 Stage 3 落地）、ZeroRelay v0.9.0（#8358，PR 栈 #11089→#11099 推进中）、SOP 5/5（#8288，#10155 XL 级 PR 待合并）四条主线均在活跃推进，预计构成 v0.9.0 的核心内容。

## 7. 用户反馈摘要

- **后台/无人值守场景是最大痛点来源**：#8559（离开窗口即中断）和 #10968（无人值守审批失效）反映大量用户以“派任务后离开”的方式使用，任何依赖交互存在的机制都是隐患。
- **多存储后端用户遇到配置不生效**：#10652 反映配置了 PostgreSQL/Qdrant 后 CLI memory 命令仍被拒，说明别名/存储解析链路对普通用户不透明。
- **成本敏感**：#10960（Anthropic prompt-cache TTL 不可调）显示重度 API 用户对缓存计费细节（1.25x 写 / 0.1x 读）非常在意。
- **Windows 桌面体验短板**（#11087）与生态兼容诉求（Antigravity CLI 迁移，PR #11076）说明桌面用户与 coding-CLI 委托场景占比不低。
- 正面信号：docs 侧有用户主动贡献示例（#11039 You.com MCP），文档结构改进建议（#11088）质量较高，社区参与从代码扩展到文档。

## 8. 待处理积压

- **[#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968)**（S0，9-19 报告，needs-maintainer-review）：无人值守审批失效，**无修复 PR，强烈建议维护者认领**。
- **[#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797)**（S0，accepted，9-12 报告）：Markdown memory 并发写丢失，尚无直接 fix PR。
- **[#11087](https://github.com/zeroclaw-labs/zeroclaw/issues/11087)**（S1，新开）：Windows 关窗进程残留。
- **PR [#10502](https://github.com/zeroclaw-labs/zeroclaw/pull/10502)**（needs-author-action，8-31 开启，近一个月）：MCP 工具结果图片在 OpenAI 兼容端点 400 的问题。
- **PR [#10430](https://github.com/zeroclaw-labs/zeroclaw/pull/10430)**（needs-author-action + parking-lot，8-28 开）：Gemini 语音对话 broker channel PR1，体量大（XL），需要维护者排期评审。
- **PR [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)**（needs-author-action，8-27 开）：持久化会话 prompt attachments（XL），同样待推进。
- **PR [#10652](https://github.com/zeroclaw-labs/zeroclaw/pull/10652)**（stale-candidate）：CLI memory 工厂路由修复，存在过期风险，建议作者或维护者跟进。

---

*数据来源：zeroclaw-labs/zeroclaw 过去 24 小时 GitHub 活动快照。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-09-25）

## 1. 今日速览

项目处于高活跃度维护状态：过去 24 小时 Issue 更新 50 条（新开/活跃 18，关闭 32），PR 更新 50 条（待合并 46，已合并/关闭 4），并发布了 v2026.9.24（v0.21.5）稳定标签。Issue 关闭数（32）显著高于新开数，说明维护团队在高效清理积压，主要围绕 Desktop 端会话状态（session-state）与 Windows 平台兼容性两大风险域。今日新开 PR 几乎全部为 P2/P3 级 bug 修复，集中在插件管理、更新流程和凭据池等基础体验问题，整体节奏是“发版后快速跟进修复”。

## 2. 版本发布

**v2026.9.24 — Hermes Agent v0.21.5**（[Release](https://github.com/NousResearch/hermes-agent/releases)）

- 性质：**Patch 版本**，将自 v0.21.4 以来合并的 **约 460 个 PR** 打成稳定标签，供下游消费者（Docker 镜像、Hermes Cloud、托管部署）使用。
- 无破坏性变更说明；完整策划版 Release Notes 延后发布。
- **迁移提示**：Desktop 用户需注意，历史多个 issue（如 #42467）报告更新后 profile 的 `state.db` schema 滞后会导致会话静默丢失，建议更新后检查各 profile 会话列表是否正常。

## 3. 项目进展

今日合并/关闭的 PR 较少（4 条），但待合并队列庞大（46 条），主要修复方向：

- **[#122227](https://github.com/NousResearch/hermes-agent/pull/122227)**（已关闭）：修复 #122161 停用 in-tree venv 后主分支测试变红的问题，保障 CI 健康。
- **[#105871](https://github.com/NousResearch/hermes-agent/pull/105871)**（已关闭）：移除 publish-e2e-evidence 流水线——该流水线用浏览器会话令牌通过第三方 `gh-image` 扩展上传截图，存在供应链/凭据风险，清理后降低了 CI 安全面。
- 待合并队列中的高质量修复（详见第 5 节）覆盖更新可靠性、插件状态保持、凭据池健壮性等，预计将在下个版本窗口批量合入。

## 4. 社区热点

评论最多的 Issue（多数今日被关闭，与 v0.21.5 发版节奏吻合）：

1. **[#42962](https://github.com/NousResearch/hermes-agent/issues/42962)**（12 评论，已关闭）：Desktop 与 Telegram 网关共享会话时视图不刷新。**多前端会话同步**是高频痛点，同类问题反复出现（#106217、#103900）。
2. **[#44580](https://github.com/NousResearch/hermes-agent/issues/44580)**（10 评论，已关闭）：`hermes update` 在 desktop 重建静默失败时仍报成功——用户对**更新流程“假成功”**强烈不满，已有相关修复 PR 在途（#122234、#122235）。
3. **[#106217](https://github.com/NousResearch/hermes-agent/issues/106217)**（6 评论，**仍开放**）：Desktop 恢复 TUI 占用的会话时整窗死锁、无法输入。用户诉求：至少提供“只读附加”或明确的恢复路径。
4. **[#88988](https://github.com/NousResearch/hermes-agent/issues/88988)**（5 评论 3 👍，已关闭）：`/compress` 超时报错但实际成功（134s > 120s 超时）。反映长会话用户对压缩体验的依赖。
5. **[#62213](https://github.com/NousResearch/hermes-agent/issues/62213)**（仍开放）：Desktop 无法配置本地 OpenAI 兼容 provider（llama.cpp/llama-swap），**本地模型用户流失风险**信号明确。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 / Fix PR |
|---|---|---|
| **P1** | [#122232](https://github.com/NousResearch/hermes-agent/pull/122232)：`disk-cleanup` 可能**静默删除 git 追踪文件**（当 `HERMES_HOME` 本身是 checkout 时 guard 失效） | 今日新开 fix PR，待评审，应优先合入 |
| P2 | [#106217](https://github.com/NousResearch/hermes-agent/issues/106217)：Desktop 恢复 TUI 会话死锁 | 开放，暂无直接 fix |
| P2 | [#122234](https://github.com/NousResearch/hermes-agent/pull/122234)：Windows 更新后挂起不重启 + 安装器重复询问 | 今日 fix PR |
| P2 | [#122154](https://github.com/NousResearch/hermes-agent/pull/122154)：Windows release 构建 PowerShell ParserError | 今日 fix PR |
| P2 | [#122226](https://github.com/NousResearch/hermes-agent/pull/122226)：凭据池非 int priority 导致排序 TypeError | 今日 fix PR |
| P2 | [#72698](https://github.com/NousResearch/hermes-agent/issues/72698)：SSH 认证失败锁死 Settings 对话框 | 长期开放 |
| P3 | [#122230](https://github.com/NousResearch/hermes-agent/pull/122230)：禁用 Copilot 仍执行 `gh auth token` 种子化 | 今日 fix PR |
| P3 | [#122229](https://github.com/NousResearch/hermes-agent/pull/122229)：`hermes doctor` 对 vendor 前缀模型 slug 误报 | 今日 fix PR |

## 6. 功能请求与路线图信号

- **本地模型支持回归**：#62213（Desktop 配置本地 OpenAI 兼容 provider）呼声明确，结合 #122221（opt-in provider SDK 热装）可见 provider 可插拔是当前推进方向，本地 provider 配置 UI 有望跟进。
- **CLI 易用性**：#122201（`process_manage list` 运行中进程优先，借鉴 Copilot CLI）、#122233（kanban `--board` 后置解析）显示团队持续打磨 agent 自驱动 CLI 的容错性。
- **插件生态健壮性**：#122103（更新时禁用不兼容插件而非失败）、#122207（插件更新保留用户状态）成对出现，预示下版本将有完整的插件生命周期改进。

## 7. 用户反馈摘要

- **满意点**：Issue 关闭速度快（32/50），多前端（TUI/Desktop/Telegram）共享 `state.db` 的架构被用户认可为正确方向；#98682 显示团队有 weekly user-pain miner 主动聚类 Discord 痛点。
- **不满/痛点**：
  - 更新流程是最大抱怨源：Windows 上签名拦截（#70544）、Electron 下载被墙需镜像（#46939）、多进程机器扫描超时（#99358）、“假成功”（#44580）。
  - 多前端会话一致性（刷新、pin、恢复）反复出现。
  - 资源泄漏：MCP 孤儿进程 24h 累积 1.5GB RAM（#72070，已关闭）。

## 8. 待处理积压

- **[#106217](https://github.com/NousResearch/hermes-agent/issues/106217)**（开放，9/09 提出）：Desktop/TUI 会话冲突死锁，P2 且影响核心工作流，建议优先排期。
- **[#62213](https://github.com/NousResearch/hermes-agent/issues/62213)**（开放，7/10 提出，近 2.5 个月）：本地 provider 配置缺失，涉及本地模型用户群体。
- **[#72698](https://github.com/NousResearch/hermes-agent/issues/72698)**（开放，7/27 提出）：SSH 失败锁死 Settings，Windows 用户受阻。
- **[#81564](https://github.com/NousResearch/hermes-agent/issues/81564)**（开放，8/08 提出）：`serve --status`/`--stop` 不对称导致孤儿后端无法管理。
- **[#76954](https://github.com/NousResearch/hermes-agent/issues/76954)**（开放，8/02 提出）：新会话不加载新添 MCP server。
- **[#94837](https://github.com/NousResearch/hermes-agent/pull/94837)**（开放，8/25 提交，约 1 个月未合并）：TUI 网关中断标记按会话隔离的修复，建议维护者评审。
- **[#67476](https://github.com/NousResearch/hermes-agent/pull/67476)**（开放，7/19 提交，2 个月+）：`-w/--worktree` 在 one-shot 模式被静默忽略——**存在提交误落主分支风险**，建议尽快处理。

---
*数据来源：GitHub API（过去 24 小时窗口）。整体健康度评估：良好——关闭率高于新开率，修复 PR 供给充足，但 Windows 安装/更新体验与多前端会话同步是持续性短板。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-09-25）

## 1. 今日速览

PicoClaw 今日保持中等活跃度：过去 24 小时共 2 条 Issue 更新（1 新开、1 关闭）和 8 条 PR 更新（全部为待合并状态，无合并记录）。PR 动态以 Dependabot 依赖升级为主（5 条），叠加 3 个社区功能/修复 PR 活跃更新。无新版本发布，整体处于功能迭代与依赖维护并行阶段，社区贡献持续流入但维护者合并节奏偏慢。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 合并或关闭，待合并队列共 8 条：

- **[PR #3381](https://github.com/sipeed/picoclaw/pull/3381)**（stale）：将 OpenAI provider 切换至 Responses API，属功能性升级，需关注 API 兼容性验证。
- **[PR #3376](https://github.com/sipeed/picoclaw/pull/3376)**（stale）：修复 DeltaChat 渠道启动时配置校验报错（关联 [#3265](https://github.com/sipeed/picoclaw/issues/3265)），通过注册自定义 channel 解决。
- **[PR #3371](https://github.com/sipeed/picoclaw/pull/3371)**：新增 `opencode-go` provider，支持按模型 ID 自动路由端点并携带 `x-opencode-session` 会话头，扩展模型接入能力。
- **依赖升级 5 条**（均为 Dependabot，2026-09-24 创建）：
  - [#3389](https://github.com/sipeed/picoclaw/pull/3389) golang.org/x/crypto 0.53.0 → 0.57.0（含安全更新可能，建议优先处理）
  - [#3388](https://github.com/sipeed/picoclaw/pull/3388) MCP go-sdk 1.6.1 → 1.8.0（跨 2 个次版本，注意 MCP 协议兼容）
  - [#3387](https://github.com/sipeed/picoclaw/pull/3387) Anthropic SDK 1.55.1 → 1.74.0（跨度较大）
  - [#3386](https://github.com/sipeed/picoclaw/pull/3386) mautrix 0.27.0 → 0.31.0（Matrix 渠道）
  - [#3385](https://github.com/sipeed/picoclaw/pull/3385) LINE Bot SDK 8.20.1 → 8.22.0

## 4. 社区热点

- **[Issue #3390](https://github.com/sipeed/picoclaw/issues/3390)**（已关闭，1 评论）：Pico 客户端（移动端 TUI）将多行粘贴输入按换行拆分为多条消息，破坏消息结构。这是今日讨论焦点，且已快速关闭，疑似被修复或确认重复。
- 值得注意：[#3391](https://github.com/sipeed/picoclaw/issues/3391) 与 #3390 为同一作者提交的**完全相同的 Bug 报告**，一关一开，疑似重复提交，建议维护者确认 #3391 是否应作为跟踪 Issue 保留或关闭。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中 | [#3391](https://github.com/sipeed/picoclaw/issues/3391) Pico 渠道多行输入被拆分为多条消息（影响代码块、诗歌等结构化粘贴场景） | OPEN，暂无关联 fix PR |
| 中 | [#3265](https://github.com/sipeed/picoclaw/issues/3265)（关联）DeltaChat 渠道配置校验失败导致 Gateway 启动失败 | 已有修复 PR [#3376](https://github.com/sipeed/picoclaw/pull/3376)，待合并 |

## 6. 功能请求与路线图信号

- **OpenAI Responses API 迁移**（PR #3381）：反映项目向新一代 LLM API 体系靠拢的路线，若合并将是 provider 层的重要演进。
- **opencode-go provider**（PR #3371）：社区对多样化模型端点接入的持续需求。
- **多渠道健康度**：mautrix、LINE SDK、DeltaChat 相关 PR/Issue 显示多 IM 渠道支持是项目核心方向，依赖升级和渠道修复均围绕此展开。

## 7. 用户反馈摘要

- 用户主要在**移动端 TUI（pico 客户端）** 上实际使用，多行粘贴（代码块、诗歌）被拆分是明确的体验痛点。
- DeltaChat 用户遭遇 Gateway 完全无法启动的阻断性问题，说明部分非主流渠道的配置校验健壮性不足。
- 社区贡献者（XenonR、luisgdev、EMTumariscal）活跃于 provider 与渠道层面，反映高级用户对可扩展模型/渠道接入的强烈诉求。

## 8. 待处理积压

- **[PR #3381](https://github.com/sipeed/picoclaw/pull/3381)**：创建于 09-17，已被标记 stale，OpenAI Responses API 迁移需维护者评审，避免过期关闭。
- **[PR #3376](https://github.com/sipeed/picoclaw/pull/3376)**：创建于 09-10，已 stale，阻断性 Bug 修复长期未合并，影响 DeltaChat 用户。
- **[Issue #3391](https://github.com/sipeed/picoclaw/issues/3391)**：疑似与已关闭的 #3390 重复，需维护者裁定并跟进修复计划。

**健康度提示**：今日 8 个 PR 全部待合并、两个功能性 PR 已 stale，合并吞吐是当前瓶颈；5 个依赖升级（含 crypto 安全相关）建议尽快处理。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-25

## 1. 今日速览

过去 24 小时 NanoClaw 保持高活跃度：13 条 PR 更新（10 条待合并、3 条已合并/关闭），2 条新开 Issue，无新版本发布。今日活动以核心贡献者 @glifocat 为主导，贡献了 13 条 PR/Issue 中的 14 项（含 Issue），集中在 Iron Proxy 修复、安装流程健壮化、CI 加固与测试去 flake。整体节奏呈“2.4.0 发布后的收尾修补期”，无破坏性变更，项目健康度良好。

## 2. 版本发布

今日无新版本发布。值得注意的是 [PR #3886](https://github.com/nanocoai/nanoclaw/pull/3886) 透露：2.4.0 的 91 个合并 PR 中有 59 个缺少 release-note 块，导致变更日志需手工重建，维护者正在通过 CI 强制约束来杜绝此问题。

## 3. 项目进展

今日已合并/关闭 3 条 PR：

- **[PR #3890](https://github.com/nanocoai/nanoclaw/pull/3890)** (CLOSED, @Koshkoshinsk)：在聊天系统提示中解释入站消息块（`<message>`、`<dm-history>`、`<cross-session-context>` 等），提升多会话/兄弟 agent 场景下模型对上下文的理解能力。属体验优化类增强。
- **[PR #3885](https://github.com/nanocoai/nanoclaw/pull/3885)** (CLOSED)：修复 setup 在操作员尚未选择 agent runtime 前失败时，错误地提供 Claude CLI 安装的问题。已被后续更完善的 [#3884](https://github.com/nanocoai/nanoclaw/pull/3884) 接续（处理 Codex/OpenCode 安装同样场景）。
- **[PR #3882](https://github.com/nanocoai/nanoclaw/pull/3882)** (CLOSED)：让 `ncl approvals help` 与 `ncl dropped-messages help` 列出主机实际写入的所有状态和丢弃原因，纯 CLI 帮助文本修复。注意：其衍生问题由 [#3889](https://github.com/nanocoai/nanoclaw/pull/3889) 修正（移除从未写入的 `unknown_sender_public`）。

整体上项目在 CLI 可观测性、setup 流程正确性两个方向稳步推进，属于小步快跑的维护节奏。

## 4. 社区热点

今日互动数据偏低（所有 Issue/PR 均为 0 评论、0 👍），无真正意义上的讨论热点，但两条新 Issue 主题集中且信息量大：

- **[Issue #3888](https://github.com/nanocoai/nanoclaw/issues/3888)**：arm64 主机（NVIDIA DGX Spark + NanoClaw 2.4.0）上 Iron Proxy 安装失败，Iron Control 镜像仅有 linux/amd64，容器报 `exec format error`。用户诉求：在 ARM 服务器/边缘设备上部署 NanoClaw。
- **[Issue #3881](https://github.com/nanocoai/nanoclaw/issues/3881)**：请求 Iron Proxy 支持 per-host 自动审批规则，避免 tool skills 调用白名单主机时每次都要人工审批。诉求：减少审批疲劳，适配高自动化场景。

两条 Issue 均在同一天有对应 fix PR 提出（见下节），反馈-响应链路极快。

## 5. Bug 与稳定性

按严重程度排列（均为今日报告，均已有 fix PR）：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高（功能性阻断） | arm64 主机 Iron Proxy 安装失败，`exec format error`（[Issue #3888](https://github.com/nanocoai/nanoclaw/issues/3888)） | ✅ 已有 [PR #3891](https://github.com/nanocoai/nanoclaw/pull/3891)（构建 arm64 兼容方案） |
| 中（安装状态残留） | Iron Proxy 失败/中断安装后无法重装，孤儿数据库卷与 compose 容器残留 | ✅ [PR #3883](https://github.com/nanocoai/nanoclaw/pull/3883) |
| 中（生成中断） | Claude 长时间流式输出单个 content block 时 heartbeat 过期，容器被宿主清理任务误杀 | ✅ [PR #3893](https://github.com/nanocoai/nanoclaw/pull/3893) |
| 低（CLI 误导） | `ncl dropped-messages help` 列出从未写入的 `unknown_sender_public` 原因 | ✅ [PR #3889](https://github.com/nanocoai/nanoclaw/pull/3889) |
| 低（setup 逻辑） | Codex/OpenCode 安装失败时被错误推销 Claude CLI 安装器 | ✅ [PR #3884](https://github.com/nanocoai/nanoclaw/pull/3884) |
| 低（CI flake / 诊断 bug） | 高负载 CI 下 restart readiness 探测被 deadline 截断、portal 测试固定 sleep 导致 flake | ✅ [PR #3887](https://github.com/nanocoai/nanoclaw/pull/3887)、[PR #3892](https://github.com/nanocoai/nanoclaw/pull/3892) |

稳定性方面，值得肯定的是维护者主动清理 CI 时序 flake 并修复了其中隐藏的真实诊断 bug（#3887）。

## 6. 功能请求与路线图信号

- **[Issue #3881](https://github.com/nanocoai/nanoclaw/issues/3881)**：per-host 自动审批规则（读+写，而非现有只读 GET/HEAD 白名单）。目前**尚无对应 PR**，是与 Iron Proxy 安全模型相关的下一个明显演进方向，有望进入后续版本讨论。
- **[PR #3886](https://github.com/nanocoai/nanoclaw/pull/3886)**：CI 强制 PR 描述包含 release note 或勾选“无用户可见变更”，将系统性改善后续 changelog 质量——这本身是通往更规范发版流程的路标信号。
- 社区方向：多 agent 共享单一消息身份的标注需求（WhatsApp 相关 PR 组，见下）持续活跃，提示“多 agent 协作 + 统一消息入口”是社区重点使用场景。

## 7. 用户反馈摘要

今日 Issue 均为新开、无评论沉淀，可提炼的痛点包括：

- **ARM/边缘部署需求真实存在**：用户在 NVIDIA DGX Spark（aarch64）上部署，说明 NanoClaw 被用于本地化 AI 基础设施场景，而第三方依赖（`ironsh/iron-control`，最后构建于 2026-06-15，仅 amd64）成为瓶颈。
- **审批疲劳**：Iron Proxy 的安全默认（每请求人工审批）对高自动化 tool-skill 工作流过严，用户需要可配置的信任级别。
- 用户报告质量高（附复现环境、版本、根因定位），反映社区技术深度较强。

## 8. 待处理积压

- **[PR #3509](https://github.com/nanocoai/nanoclaw/pull/3509)** / **[PR #3510](https://github.com/nanocoai/nanoclaw/pull/3510)** (@eggersrj)：WhatsApp 共享模式下按 agent 标注发送者（`OutboundMessage.senderLabel` + 通道适配器改造）。**已 open 一个月**（2026-08-25 创建），今日仍有更新，是当前最老的待合并 PR，建议维护者优先评审。
- 今日新开的 10 条待合并 PR 中有 8 条由 core-team 标签（@glifocat），建议推进评审队列避免积压；其中 #3891（arm64 支持）与 #3893（heartbeat 修复）直接影响用户部署与生成稳定性，应优先合并。

---

**健康度小结**：响应速度快（Issue 当天出 fix PR）、单点贡献风险（@glifocat 占今日绝大多数提交）、CI 质量管控正在制度化（#3886）。建议关注：WhatsApp PR 组的长期挂起、#3881 功能请求的路线图回应，以及贡献者多元化。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-09-25

## 1. 今日速览

NullClaw 今日呈现**高活跃度、高产出**状态：24 小时内 Issues 更新 12 条（关闭 10 条，新开/活跃仅 2 条），PR 更新 25 条（待合并 17 条，合并/关闭 8 条）。核心贡献者 @vernonstinebaker 单日提交 8 个 PR（#1001–#1008），集中修复内存召回、流式输出、文档体系等多个方向。一批 3–4 月份的老 Issue 今日被批量关闭，结合修复类 PR 的推进，显示项目正在进行一轮**集中清偿技术债**。无新版本发布，但合并节奏表明版本发布可能临近。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

今日关闭/合并的关键 PR：

- **#996 [fix(mcp)](https://github.com/nullclaw/nullclaw/pull/996)** — 对 stdio MCP 响应读取应用 `timeout_ms`，超时后终止服务器进程组，初始化失败清理子进程。直接修复 #991 的死锁问题，全部 7,373 项测试通过。
- **#978 / #1002 [discord typing 线程修复](https://github.com/nullclaw/nullclaw/pull/1002)** — #978 因分支膨胀被关闭，#1002 提取了核心修复：`typingLoop` 从 512KB 栈迁移到 2MiB 重运行时栈，解决 TLS 大 memcpy 导致的栈溢出崩溃。
- **#979 / #1001 [内存召回配置](https://github.com/nullclaw/nullclaw/pull/1001)** — 新增 `memory.auto_recall`、`recall_limit`、`max_context_bytes` 三个配置项。原 PR 因 fork 被删无法重开，#1001 完整恢复该功能。
- **#986 [SQLite 数据库路径可配置](https://github.com/nullclaw/nullclaw/pull/986)** — 新增 `memory.database_path`，支持只读工作区的绝对路径部署。
- **#411 / #319 [社区 PR 关闭](https://github.com/nullclaw/nullclaw/pull/411)** — 工具自定义系统、钉钉消息撤回两个长期社区 PR 今日关闭，需关注是否因长期停滞或方案被替代。

**整体评估**：稳定性修复（MCP 超时、栈溢出）+ 内存子系统可配置化 + 文档大规模重建，项目在可靠性与易用性两条线上同时推进，步伐扎实。

## 4. 社区热点

- **[#871 web_search 在低资源设备上不可用](https://github.com/nullclaw/nullclaw/issues/871)**（9 条评论，今日关闭）— 讨论最热烈的 Issue。Brave API 需外部密钥、与 NullClaw“弱设备本地运行”定位冲突。今日关闭，疑似已有解决方案落地，建议关注关联 PR。
- **[#867 提供完整可用的 config.json 示例](https://github.com/nullclaw/nullclaw/issues/867)**（👍 3，今日关闭）— 高赞需求，反映**新手上手门槛过高**是核心痛点，与今日 #1007/#1008 文档系列 PR 呼应。
- **[#886 显示推理/思考过程](https://github.com/nullclaw/nullclaw/issues/886)**（今日关闭）— 用户反馈长任务运行 30 分钟无任何输出，无法判断是否卡死，可观测性诉求强烈。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#976 aarch64 上 Telegram 每条入站消息 SIGSEGV](https://github.com/nullclaw/nullclaw/issues/976) — 512KB 线程栈溢出，systemd 崩溃循环、消息丢失 | 已关闭，修复思路与 #1002 一致（栈扩容） |
| 🔴 高 | [#870 WSL2 下 gateway accept4 忙循环，100% CPU](https://github.com/nullclaw/nullclaw/issues/870) | 已关闭 |
| 🟠 中 | [#991 stdio MCP 调用在 Proxmox 启动器锁后无限挂起](https://github.com/nullclaw/nullclaw/issues/991) | 已关闭，**修复 PR #996 已合并** |
| 🟡 低 | [#1000 Ollama 模型不支持 tools 时仅报无描述的 adapter error](https://github.com/nullclaw/nullclaw/issues/1000)（仍 OPEN） | **已有针对性 PR #1004**（记录脱敏后的 provider 错误体） |

亮点：今日上报的稳定性问题基本实现了“当日报告、当日修复链路可见”的闭环。

## 6. 功能请求与路线图信号

- **#995 Skills 符号链接支持** → **#1003 已实现**（`skills list` 跟随目录符号链接，拒绝归档内的符号链接以防攻击），合并概率极高，下版本可期。
- **#1000 错误提示增强** → #1004 覆盖 provider 侧，Ollama 适配层的友好提示可能随后跟进。
- **#1001 内存召回三配置项** — 已成型，属于下版本的确定性新特性。
- **#624 视觉管道（图片 base64 直传多模态 LLM）** 今日关闭，结合 picoclaw 的同类功能被点名，是社区明确的多模态诉求方向，值得跟踪后续实现。
- **#631 GET /status 监控端点** 今日关闭，若非重复请求则可能已在内部实现。

## 7. 用户反馈摘要

- **运行环境极度多样**：aarch64 Linux、WSL2、Android/Termux（#966）、Proxmox CT——用户群集中在低成本/嵌入式设备，与项目定位吻合，但也成为崩溃类 bug 的主要来源（栈大小、DNS 解析差异）。
- **可诊断性是普遍痛点**：用户需要 Wireshark 抓包才能定位 Ollama 报错（#1000）；长任务无进度输出（#886）；#1004、#1007 两个 PR 正面回应这一诉求。
- **文档与配置体验差评集中**：“默认 config.json 残缺到几乎无法跑通任何东西”（#867 原话），今日 8 个 PR 中 4 个是文档类，说明维护者已将其列为优先级。
- **正面信号**：9,373+ 项测试全绿的提交纪律、用户主动贡献功能 PR（memory 配置、MCP 超时、curl 固定路径），社区参与质量较高。

## 8. 待处理积压

- **[#774](https://github.com/nullclaw/nullclaw/pull/774) / [#775](https://github.com/nullclaw/nullclaw/pull/775) / [#776](https://github.com/nullclaw/nullclaw/pull/776) / [#777](https://github.com/nullclaw/nullclaw/pull/777)**（@telagod，4 月提交）— 文档清理系列，滞留 5 个月+，与今日 #1007/#1008 内容有重叠风险，**建议尽快合并或明确关闭**以避免冲突。
- **[#966 Android curl 回退](https://github.com/nullclaw/nullclaw/pull/966)**（6 月提交）— 与 #983（pinned curl 路径）功能交叉，需协调方案后合并。
- **[#983](https://github.com/nullclaw/nullclaw/pull/983)**（8 月提交）— 凭据安全相关的 provider 修复，停滞约 2 个月，涉及安全面，建议优先评审。
- **[Issue #1000](https://github.com/nullclaw/nullclaw/issues/1000)** — 今日仅 2 个开放 Issue 之一，#1004 部分覆盖，建议维护者在 issue 上给出明确的解决路径回复。

---
*数据来源：GitHub API（Issues/PR，截至 2026-09-25）*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-09-25

> 数据来源：GitHub nearai/ironclaw | 统计窗口：过去 24 小时

---

## 1. 今日速览

IronClaw 今日整体活跃度偏低但节奏稳定：过去 24 小时仅 1 条 Issue 更新、1 条 PR 更新，无合并/关闭动作。项目于昨日（9-24）发布了 **v1.4.1-rc.2** 补丁候选版本，持续推进 1.4.1 的稳定化进程。自动化基础设施保持健康运转——每日失败分类报告（Issue #8111）和夜间代码库知识图谱刷新（PR #7988）均按计划产出。总体判断：项目处于**发布候选迭代期，社区互动平淡，维护工作以自动化流程为主**。

---

## 2. 版本发布

### ironclaw-v1.4.1-rc.2（发布于 2026-09-24）

- **定位**：1.4.0 之上的第二个补丁候选版本（Second patch candidate），与 RC1 携带相同修复。
- **修复内容**：
  - **Google 扩展（Gmail、Google Calendar）激活修复**：此前当部署方运营者通过 **Web UI 提供 Google OAuth client**（而非环境变量）时，Google 扩展无法被激活。本版本修复了该授权流程问题。
- **破坏性变更**：无（补丁级修复）。
- **迁移注意事项**：对于使用 Web UI 配置 OAuth 的自部署用户，升级至 rc.2 即可正常启用 Gmail / Google Calendar 扩展；环境变量配置方式不受影响。生产环境可待 1.4.1 正式版发布后再升级。
- **链接**：[nearai/ironclaw Releases](https://github.com/nearai/ironclaw/releases)

---

## 3. 项目进展

今日**无 PR 合并或关闭**，无已关闭 Issue。待合并 PR 方面：

- **PR #7988** [size: XS, risk: low, contributor: core] `chore(agents): refresh codebase knowledge graph` — 由夜间 `Codebase Graph Refresh` 工作流自动生成的代码库记忆快照刷新，自 8-29 创建以来持续更新（最近更新于今日）。属于常规维护性质，等待例行 review 合并。
  - 链接：[nearai/ironclaw PR #7988](https://github.com/nearai/ironclaw/pull/7988)

整体而言，项目进展今日主要体现为 **v1.4.1-rc.2 的发布**，代码主干无功能性推进。

---

## 4. 社区热点

今日无高热度讨论。唯一活跃 Issue 为自动化报告：

- **Issue #8111** [OPEN] 《Daily ironclaw failure taxonomy — 2026-09-24》，作者 @pranavraja99
  - 链接：[nearai/ironclaw Issue #8111](https://github.com/nearai/ironclaw/issues/8111)
  - 内容：对 `officeqa` 测试套件的失败分类——38 个未通过任务均为 **deepseek-v4-flash 在 OCR 数字化 Treasury 文档上的真实模型质量失败**，而非工具链/基础设施问题。
  - **诉求分析**：该报告将失败根因明确归到模型侧而非 Agent 框架侧，说明 IronClaw 框架本身在 officeqa 场景下表现稳定，同时为评估底层模型（deepseek-v4-flash）在文档理解任务上的能力边界提供了数据支撑。0 评论 0 点赞，社区暂无响应。

---

## 5. Bug 与稳定性

今日**无新增用户报告的 Bug 或崩溃问题**。与稳定性相关的两条信号：

| 严重程度 | 事项 | 状态 | Fix PR |
|---|---|---|---|
| 中 | Google 扩展（Gmail/Calendar）在 Web UI OAuth 配置下无法激活 | 已在 [v1.4.1-rc.2](https://github.com/nearai/ironclaw/releases) 修复 | 已随版本发布 |
| 低（模型侧） | officeqa 套件 38 项任务失败，根因为 deepseek-v4-flash 模型质量（OCR 文档理解） | 开放观察中（[Issue #8111](https://github.com/nearai/ironclaw/issues/8111)） | 非框架问题，暂无 fix |

---

## 6. 功能请求与路线图信号

今日**无新增功能请求**。从现有信号推断的近期路线图方向：

1. **1.4.1 正式版发布在即**：rc.2 与 rc.1 修复内容相同，若无新增问题，1.4.1 稳定版应很快发布。
2. **Google 集成体验优化**：连续两个 RC 聚焦 Web UI OAuth 流程，表明维护团队正优先改善自部署用户启用 Gmail/Google Calendar 扩展的易用性。
3. **代码库知识图谱基础设施**：PR #7988 显示 nightly 自动刷新机制已常态化，代码库记忆（codebase-memory）能力可能服务于 Agent 上下文能力演进，值得关注后续用途。

---

## 7. 用户反馈摘要

今日数据中**缺少真实用户评论**（Issue #8111 评论数为 0，PR #7988 无用户评论），无法提炼用户痛点。间接信号：

- 来自失败分类报告的间接反馈：officeqa 场景下用户若使用 deepseek-v4-flash 处理 OCR 数字化政府文档（Treasury 类），任务成功率可能不理想——**选择更强文档理解模型是关键**。
- rc.2 修复对象（Web UI OAuth 部署）暗示存在一批**自部署运营者**，其配置体验是维护团队关注的重点。

---

## 8. 待处理积压

- **PR #7988**（代码库知识图谱刷新）：自 **2026-08-29 创建至今已近 1 个月**未合并，虽为 XS/low-risk 的 CI 例行变更，但长期悬置可能导致快照与默认分支持续脱节、合并冲突累积。**建议维护者尽快例行 review 合并。**
  - 链接：[nearai/ironclaw PR #7988](https://github.com/nearai/ironclaw/pull/7988)
- **Issue #8111**（每日失败分类）：刚于昨日创建，暂不构成积压，但此类日报型 Issue 通常需要模型/评测团队认领跟进，建议明确责任人。

---

**健康度小结**：✅ 发布节奏正常（1.4.1-rc.2）｜✅ 自动化运维健康｜⚠️ 人工 review 吞吐偏低（PR #7988 积压近月）｜➖ 社区互动冷淡（24h 内零评论、零合并）。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-09-25）

## 1. 今日速览

今日 LobsterAI 仓库活跃度**中等偏低**，核心开发者（@fisherdaddy、@alison-xx）仍在持续产出：过去 24 小时新增 4 个 PR（#2761–#2765），聚焦 OpenClaw 运行时稳定性与 UI 打磨。Issues 侧以机器人批量清理为主——16 个长期未活跃的 Issue 被标记 stale 后关闭（含多个安全报告），新增活跃 Issue 为 0，真实社区讨论热度降温。无新版本发布。PR 合并节奏正常，项目处于**稳定迭代、清理积压**阶段。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

### 今日关闭/合并的 PR（6 个）

| PR | 内容 | 意义 |
|---|---|---|
| [#2761](https://github.com/netease-youdao/LobsterAI/pull/2761) | fix(openclaw): 修复模型输出被截断 | **重要修复**：模型目录扫描遗漏 `third-party-extensions` 下的预装第三方 provider（volcengine/zai/deepseek），导致 GLM-5.3 等模型 max_tokens 默认过低、任务中途被截断 |
| [#2759](https://github.com/netease-youdao/LobsterAI/pull/2759) | fix(openclaw): 修复并续写畸形的 OpenAI 兼容工具调用 | Backport 上游字符串字面量修复，避免含控制字符的 tool call 参数被整体丢弃（工具已执行副作用后被丢 turn） |
| [#2762](https://github.com/netease-youdao/LobsterAI/pull/2762) / [#2760](https://github.com/netease-youdao/LobsterAI/pull/2760) | feat(ui): 统一配色与布局 | 主题 token 改为中性灰阶、侧边栏 pill 按钮、内容区贴边布局 |
| [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | fix(cowork): 会话重命名失败时给出反馈 | 社区 PR（stale 关闭），修复 #670 |

### 今日新开的待合并 PR（4 个）

- [#2765](https://github.com/netease-youdao/LobsterAI/pull/2765)：在压缩（compaction）和网关重启间保留已接受的工作成果，降低 pinned-runtime 启动开销
- [#2764](https://github.com/netease-youdao/LobsterAI/pull/2764)：`gateway.tools`/`trustedProxies`/`allowRealIpFallback` 改为热加载，策略更新不再需要重启 Gateway
- [#2763](https://github.com/netease-youdao/LobsterAI/pull/2763)：模型调用已开始后不再整轮回放，修复 "LLM request failed." 掩盖真实错误的问题
- 另有 3 个社区长期 PR 保持开放（见第 8 节）

**整体评估**：今日修复集中在 OpenClaw 集成的可靠性链路（输出截断 → 工具调用修复 → 失败回放策略 → 压缩持久化），形成一套连贯的稳定性改进，项目工程健康度良好。

## 4. 社区热点

今日无高热度新讨论。值得注意的动态：

- **安全研究者的 5 个安全 Issue 被批量关闭**（均标记 stale）：[#2176](https://github.com/netease-youdao/LobsterAI/issues/2176)（artifact 自动加载致任意本地文件读取）、[#2181](https://github.com/netease-youdao/LobsterAI/issues/2181)（SSRF 防护弱化）、[#2286](https://github.com/netease-youdao/LobsterAI/issues/2286)（本地 token 代理无鉴权可重放）、[#2287](https://github.com/netease-youdao/LobsterAI/issues/2287)（NIM 出站媒体流可外泄本地文件）、[#2288](https://github.com/netease-youdao/LobsterAI/issues/2288)（HTML 预览服务器跟随 symlink 泄露文件）。这些均由 @YLChen-007 提交，因无后续维护者响应被 stale 机器人关闭——**建议核实这些报告是否已在内部修复**，否则存在风险敞口。

## 5. Bug 与稳定性

今日无新报 Bug。已关闭的存量 Bug（多为 stale 关闭，未见对应 fix PR）：

1. **高**：[#2214](https://github.com/netease-youdao/LobsterAI/issues/2214) 桌面端“数据备份”100% 复现导致主进程卡死（未响应）——无 fix PR ⚠️
2. **高**：[#2215](https://github.com/netease-youdao/LobsterAI/issues/2215) NSIS 安装 "Resource extraction failed" 反复出现——无 fix PR ⚠️
3. **中**：[#2216](https://github.com/netease-youdao/LobsterAI/issues/2216) Memory Search 无法切换 local embedding，索引重建被 DB 锁阻塞（EBUSY）——无 fix PR
4. **中**：[#2230](https://github.com/netease-youdao/LobsterAI/issues/2230) 同任务比 CodeBuddy 慢 10 倍、Token 消耗 60M vs 67K——性能问题突出，无 fix PR ⚠️
5. **中**：[#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) 执行结果窗口滚动到顶端假死
6. **仍在开放**：[#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) 切换模型后图片附件处理方式不同步（社区 PR [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373) 曾尝试修复该问题但已被 stale 关闭）

## 6. 功能请求与路线图信号

- **进度卡片可视化**（[#2758](https://github.com/netease-youdao/LobsterAI/pull/2758)）：Cowork 输入框上方展示 OpenClaw 原生进度卡片，待合并——说明团队正在深化 Cowork 与 OpenClaw 的 UI 融合，很可能进入下一版本。
- **任务连续性与长任务支持**（[#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)，已 stale 关闭）：任务预输入、延长单次任务时长、2560×1600 下技能页改三列——用户对**批量/长时自动化**诉求明显。
- **跨模型编排**（[#2180](https://github.com/netease-youdao/LobsterAI/issues/2180)）：自然语言命令栏 + 任务分发控制台 + 项目级记忆，方向宏大但已被 stale 关闭。
- **生态联动信号**（[#2239](https://github.com/netease-youdao/LobsterAI/issues/2239)）：通过 MCP 打通 OpenCode/CodeBuddy 编程工具链——与现有 OpenClaw 深度集成路线一致。
- 社区 PR [#2504](https://github.com/netease-youdao/LobsterAI/pull/2504)（OrcaRouter provider）若被接受将扩充模型网关生态。

## 7. 用户反馈摘要

- **痛点集中在性能与资源消耗**：技能库 174 个时监听扫描拖慢启动（[#2243](https://github.com/netease-youdao/LobsterAI/issues/2243)）；同任务 Token 消耗远超同类工具（[#2230](https://github.com/netease-youdao/LobsterAI/issues/2230)）；重复输出疑似浪费 token（[#2121](https://github.com/netease-youdao/LobsterAI/issues/2121)）。
- **Windows 桌面体验问题**：备份卡死、安装失败、DB 锁（EBUSY）均为 Win11 环境报告，Windows 数据层稳定性是短板。
- **使用场景**：用户在用 LobsterAI 做数据获取脚本监控、数据库客户端（DBX）联动等**本地自动化**场景，期待任务连续运行与文件夹级附件（[#2385](https://github.com/netease-youdao/LobsterAI/issues/2385)）。
- **正面信号**：用户主动提交长篇生态建议与详细排障报告（[#2215](https://github.com/netease-youdao/LobsterAI/issues/2215)），核心用户粘性较高，但对维护响应速度（大量 stale 关闭）存在隐忧。

## 8. 待处理积压

维护者需关注的长期未响应项：

- **安全类（优先级最高，已被 stale 关闭但需确认修复状态）**：[#2176](https://github.com/netease-youdao/LobsterAI/issues/2176)、[#2181](https://github.com/netease-youdao/LobsterAI/issues/2181)、[#2286](https://github.com/netease-youdao/LobsterAI/issues/2286)、[#2287](https://github.com/netease-youdao/LobsterAI/issues/2287)、[#2288](https://github.com/netease-youdao/LobsterAI/issues/2288)
- **开放 Issue**：[#1861](https://github.com/netease-youdao/LobsterAI/issues/1861)（图片附件同步，已有对应社区修复思路）、[#2385](https://github.com/netease-youdao/LobsterAI/issues/2385)（不支持添加文件夹/@文件）
- **社区 PR 长期未审**：[#2374](https://github.com/netease-youdao/LobsterAI/pull/2374)（永久隐藏侧边栏广告，关联 #2342，用户诉求明确）、[#2452](https://github.com/netease-youdao/LobsterAI/pull/2452)（带斜杠的 model id 丢失 provider 前缀）、[#2504](https://github.com/netease-youdao/LobsterAI/pull/2504)（OrcaRouter 集成）
- **高严重度 Bug 无修复跟进**：[#2214](https://github.com/netease-youdao/LobsterAI/issues/2214)（备份卡死）、[#2230](https://github.com/netease-youdao/LobsterAI/issues/2230)（性能/Token 消耗差距）

---
*数据来源：GitHub API，统计窗口 2026-09-24 至 2026-09-25。*

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

# CoPaw 项目动态日报 — 2026-09-25

> 数据来源：github.com/agentscope-ai/CoPaw | 统计窗口：过去 24 小时

---

## 1. 今日速览

今日项目活跃度**中高**：共 20 条 Issue 更新（16 新开/活跃、4 关闭）、17 条 PR 更新（15 待合并、2 合并/关闭），无新版本发布。社区热度最高的是 [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)（QwenPaw Hub 多租户版方向讨论，32 条评论），显示团队正在从个人助手向团队协作场景演进。同时，**上下文管理（compaction/eviction）相关 Bug 密集出现**（#7628、#5856、#7836、#7979），已成为当前最集中的稳定性短板。首捐贡献者 [@lihongyuan99](https://github.com/lihongyuan99) 单日提交 5 个修复 PR，社区贡献管道健康。

---

## 2. 版本发布

过去 24 小时**无新版本发布**。当前社区反馈主要基于 v2.2.0 正式版与 v2.2.2-beta 系列（Desktop 2.2.2b2/b3）。

---

## 3. 项目进展

今日 2 个 PR 合并/关闭，均来自核心维护者 [@zhijianma](https://github.com/agentscope-ai/QwenPaw/pulls?q=author:zhijianma)，聚焦 Console 侧栏重构的收尾修复：

- **[#7972](https://github.com/agentscope-ai/QwenPaw/pull/7972)**（CLOSED）— 会话列表默认分组从 `date` 改为 `source`，是对 #7968 侧栏重构回归的后续修正。
- **[#7971](https://github.com/agentscope-ai/QwenPaw/pull/7971)**（CLOSED）— 工具调用生命周期轮询改为在执行开始后才触发，修复了参数生成完成即开始轮询导致的时序错误。

**整体判断**：合并量偏小，但待合并队列达 15 个，其中 [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785)（实时语音聊天）、[#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931)（持久化分页转录历史）、[#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861)（多标签终端）等功能型 PR 均在活跃推进，为下一版本积累了可观的功能增量。项目处于 **beta 收敛 + 功能储备并行** 阶段。

---

## 4. 社区热点

| 热度 | 条目 | 要点 |
|---|---|---|
| 🔥🔥🔥 | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)（32 评论 / 4 👍） | 多租户版 Hub 已随 2.2.0 发布，官方发起"下一步做什么"路线图讨论，回应了 #2324 等多用户/管理员技能管理的长期诉求。**这是当前最重要的方向性讨论帖**，建议关注团队侧结论。 |
| 🔥 | [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576)（CLOSED，6 评论） | RetryChatModel 硬编码 32768 context fallback 导致所有模型 CONTEXT_UNFIT，官方确认 v2.1.0–v2.2.0 全部已发布版本受影响，今日关闭（应已有修复）。 |
| 🔥 | [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534)（4 评论） | 飞书会话 queue consumer 卡死后静默无响应且无法重建消费者——生产环境长会话稳定性的典型痛点。 |
| 🔥 | [#7976](https://github.com/agentscope-ai/QwenPaw/issues/7976) | 官方移动端呼声：用户已自建非官方安卓客户端应急，反映移动场景需求真实且紧迫。 |

**诉求主线**：① 团队/多租户场景扩展；② 长会话与多渠道（飞书/微信）运行可靠性；③ 移动端覆盖。

---

## 5. Bug 与稳定性（按严重程度排列）

**🔴 严重（功能性中断）**

1. **[#7966](https://github.com/agentscope-ai/QwenPaw/issues/7966)**（NEW）— 切换 provider 后会话永久损坏：历史中 `file://` 媒体 URL 被 OpenAI 兼容端点以 invalid_parameter_error 拒绝，2.2.2b3 下每轮必失败。→ **已有 fix PR [#7973](https://github.com/agentscope-ai/QwenPaw/pull/7973)**（从被拒媒体 URL 中恢复）。
2. **[#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534)** — 飞书会话 consumer 卡死，会话静默失效。暂无对应 fix PR。
3. **[#7968](https://github.com/agentscope-ai/QwenPaw/issues/7968)**（CLOSED）— 2.2.2b3 侧栏重构导致会话分组功能整体丢失；已由 #7972 跟进修复。

**🟠 高（上下文管理集群问题）**

4. **[#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)** — compaction 触发与预算基于可见上下文而非完整请求，可导致活跃轮次失败。与已修复的 #7576 同源（context size 误判）。
5. **[#7979](https://github.com/agentscope-ai/QwenPaw/issues/7979)**（NEW）— 本地 llama.cpp 提供商被云端静态 catalog 匹配为 1M 窗口（实际 32k），compaction 永不触发 → 必然溢出。与 #7576/#7628 构成同一根因簇，建议统一治理。
6. **[#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836)** — scroll 逐出把工具密集区间两侧的用户请求一并丢弃，活窗口丢失关键指令。→ 相关缓解 PR [#7965](https://github.com/agentscope-ai/QwenPaw/pull/7965)（回收历史媒体 + 对齐 thinking 计数）。
7. **[#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856)**（长期未决，7 月至今）— compaction 中 tool_call 结构丢失导致 400 错误。

**🟡 中（局部/边界场景）**

8. [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856)（CLOSED）— qwenpaw-pet 0.1.1 插件丢 `actor` 参数破坏工具审批。
9. [#7850](https://github.com/agentscope-ai/QwenPaw/issues/7850) — 后台 reload_driver 读改写竞态覆盖并发策略写入。
10. [#7857](https://github.com/agentscope-ai/QwenPaw/issues/7857) — ACP 关闭 fallback 跳过 session 清理并泄漏 event loop。
11. [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) — Daily Paper 因 arxiv 不可达静默失败，无代理配置且错误信息掩盖真因。
12. [#7767](https://github.com/agentscope-ai/QwenPaw/issues/7767) — Console 附件 stale blob、cron 误丢、on_acting 不触发等 4 合 1 报告。
13. [#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377) — Agent Loop 模式配置不跨任务持久化。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 落地信号 |
|---|---|---|
| 跨 Agent "最近会话"侧栏面板（含实时状态/未读标记） | [#7978](https://github.com/agentscope-ai/QwenPaw/issues/7978)（NEW） | 与 #7972/#7931 的侧栏与转录重构同向，**纳入概率高** |
| Agent 自主上下文管理（逐出前的平滑交接与预警） | [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | 直击上下文 Bug 簇根因，与 #7965/#7931 相关，方向契合 |
| 手动停用/禁用预制模型与渠道 | [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) | 轻量 UI 改动，易纳入 |
| 官方移动端（Android 优先） | [#7976](https://github.com/agentscope-ai/QwenPaw/issues/7976) | 社区已有自建客户端证明可行性，长期路线图候选 |
| 多租户 Hub 后续方向 | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 官方主导讨论中，将直接决定 2.3.x 主题 |

PR 侧信号：[#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785)（实时语音）、[#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719)（ReMeLight 记忆写入独立模型，降本诉求）均为已成形的功能实现，预计随下一版本发布。

---

## 7. 用户反馈摘要

- **痛点 1：上下文管理是最大信心杀手。** 多位用户在长任务/工具密集场景下遇到丢消息、结构丢失、窗口误判（#7836 用户明确指出"活窗口丢了请求但 history.db 还在"），且 #5856 悬置近 3 个月未修复，情绪偏失望。
- **痛点 2：多渠道生产可靠性不足。** 飞书（#7534）、微信+Console（#7767）用户报告长时运行后静默卡死，无日志可查，排障成本高。
- **痛点 3：beta 迭代引入回归。** 2.2.2b3 侧栏重构破坏分组（#7968）、provider 切换破坏会话（#7966），升级 beta 的用户接连踩坑，但官方响应迅速（当日修复）。
- **正面信号**：Hub 多租户讨论参与度高；移动端有用户自行开发客户端，生态热情充足；首捐者单日 5 PR，贡献门槛友好。
- **典型使用场景画像**：长时运行的 IM 机器人（飞书/微信）、本地 llama.cpp 部署、带记忆（ReMe）的桌面个人助理。

---

## 8. 待处理积压

| 条目 | 悬置时长 | 建议 |
|---|---|---|
| [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) tool_call 结构在 compaction 中丢失 | **~2.5 个月**，仅 4 评论 | ⚠️ 上下文 Bug 簇的一部分，建议与 #7628/#7979 统一排期 |
| [#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377) Loop 模式不持久化 | ~4 周，v2.1.0 报告 | 影响日常操作体验，修复成本低 |
| [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) 飞书会话卡死 | ~3 周 | 生产环境静默故障，需维护者定级 |
| [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) Daily Paper 静默失败 + 无代理配置 | ~2 周 | 中国大陆用户 arxiv 可达性是普遍问题，建议优先 |
| PR [#7500](https://github.com/agentscope-ai/QwenPaw/pull/7500) extra_headers 转发 | **~3 周未合并** | 企业自定义端点刚需，建议维护者 review |

---

**健康度小结**：CoPaw 当前社区活跃、贡献管道通畅、官方响应迅速（beta 回归当日修复），但**上下文管理模块的 Bug 密度显著偏高**（24 小时内 4+ 相关 Issue），是下一版本前最需收敛的技术债。

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