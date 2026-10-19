# OpenClaw 生态日报 2026-10-19

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-19 03:47 UTC

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

# OpenClaw 项目动态日报 — 2026-10-19

---

## 1. 今日速览

OpenClaw 今日继续保持高活跃度：过去 24 小时内 Issues 更新达 **500 条**（新开/活跃 424，关闭 76），PR 更新 **500 条**（待合并 254，已合并/关闭 246），并发布了新版本 **v2026.10.5**。核心贡献者 @steipete 单日提交了十余个 PR，覆盖性能优化、安全加固与测试清理三大方向。社区关注度最高的仍是**消息丢失、会话状态、Gateway 稳定性**三类长期痛点，多个 P0 级 Issue 仍处于"无修复 PR"状态，值得维护者警惕。

---

## 2. 版本发布

### v2026.10.5 ([Release](https://github.com/openclaw/openclaw/releases))

**核心亮点：更新流程自愈能力大幅增强**

- **`openclaw update` 可跨设备/文件系统自主完成并恢复**：覆盖 pnpm 12、Windows 提权（elevation）、macOS 登录 shell 等多种安装环境；
- 更新过程会自动清理 **过期的 handoff lease 与包激活 journal**，不再让安装卡死在中间状态；
- 对繁忙或不可达（unhealthy）状态的组件有自动恢复处理（release notes 被截断，完整内容见原页面）。

**迁移提示**：本版本主要针对近期多个更新失败的 Issue（如 #153521、#144447、#171446），建议受更新卡死困扰的用户尽快升级。暂未见明确破坏性变更说明，但涉及 handoff lease 语义调整，多实例部署建议错峰更新。

---

## 3. 项目进展

今日 PR 吞吐量极大（合并/关闭 246 条），主要进展方向：

**稳定性与恢复能力**
- [PR #176777](https://github.com/openclaw/openclaw/pull/176777)（P1）：修复 Gateway 在 worker provisioning 恢复期间关闭超时挂起的问题——直指 systemd 90 秒强杀场景；
- [PR #176697](https://github.com/openclaw/openclaw/pull/176697)（P1）：Gateway 重启后自动恢复被中断的 peer 协作任务；
- [PR #176675](https://github.com/openclaw/openclaw/pull/176675)（P1）：修复重启恢复将 Main 会话归档后无法显式 reset 的问题。

**性能优化**
- [PR #176857](https://github.com/openclaw/openclaw/pull/176857)：并发 socket 请求同一历史页时共享 transcript 读取，消除重复数据库读；
- [PR #176696](https://github.com/openclaw/openclaw/pull/176696)：Control UI 惰性加载非活跃子代理活动实现，缓解冷启动 JS 预算超标；
- [PR #176167](https://github.com/openclaw/openclaw/pull/176167)：跨 turn 固定会话工具面，修复 OpenAI 前缀缓存完全 miss（真实场景 0 cached tokens）——对成本敏感用户是重大利好。

**安全加固**
- [PR #176751](https://github.com/openclaw/openclaw/pull/176751)：防止 OpenClaw 自身的浏览器/输入自动化触达自己的人工审批界面（避免权限自授权路径）；
- [PR #120598](https://github.com/openclaw/openclaw/pull/120598)：私有 model-run prompt 文件，避免敏感 prompt 暴露在进程参数中。

**测试与代码健康**
- 多个低价值测试清理批（[#176856](https://github.com/openclaw/openclaw/pull/176856) 净删 4248 行、[#176823](https://github.com/openclaw/openclaw/pull/176823)、[#176735](https://github.com/openclaw/openclaw/pull/176735)），维护者主导的系统性测试瘦身持续推进。

**新生态**
- [PR #175509](https://github.com/openclaw/openclaw/pull/175509)：新增 **Bifrost provider** + 匿名自托管 Gateway 支持（标记兼容性/安全/认证三重合并风险，尚需 proof）。

---

## 4. 社区热点

| Issue | 评论 | 核心诉求 |
|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) 子代理完成结果静默丢失（P1，🦞 diamond lobster） | 31 | 3 月份报告至今，多失败模式下 subagent 结果无重试、无通知、无自动重启 |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) Gateway 捕获大型外部插件时阻塞数分钟（P0） | 26 | 2026.9.6 回归，事件循环被插件捕获阻塞，启动即触发 |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) 同会话新 turn 顶掉在途回复（P1） | 22 | "no active tool authority snapshot" 导致回复整体丢失，2026.9.4 回归 |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) 插件源捕获每次写 1.1–6.5 GB（P1） | 20 | 无缓存复用 + 捆绑原生二进制重复哈希，SSD 严重损耗 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) steer 模式不在 mid-turn 注入消息 | 20 | KeyedAsyncQueue 回归，排队模式与文档承诺不符 |

**分析**：热度榜前五全部与**消息/任务交付可靠性**相关。用户核心诉求不是新功能，而是"已经说好的行为要能兑现"——steer 模式、subagent 完成通知、回复不丢，这些都是编排层的根本承诺。多条 Issue 带有 `no-new-fix-pr` 标签，反映修复节奏跟不上问题发现速度。

---

## 5. Bug 与稳定性（按严重度）

**P0**
- [#160959](https://github.com/openclaw/openclaw/issues/160959) 大插件导致 Gateway 事件循环阻塞数分钟（2026.9.6 回归）— ❌ 无 fix PR
- [#40001](https://github.com/openclaw/openclaw/issues/40001) write 工具无 append 模式，隔离 cron 会话互相覆盖共享文件，**静默数据丢失** — ❌ 无 fix PR
- [#166894](https://github.com/openclaw/openclaw/issues/166894) Windows 多代理安装下 Gateway 重启挂起 30 分钟–2 小时 — ❌
- [#126821](https://github.com/openclaw/openclaw/issues/126821) WSL2 下 SQLite 15–24 小时内反复损坏，出现"瘫痪但不退出"模式 — ❌
- [#137085](https://github.com/openclaw/openclaw/issues/137085) macOS App 8.2 升级后设备身份卡在 native-importing — ❌
- [#132303](https://github.com/openclaw/openclaw/issues/132303) **安全**：`tools.deny` 对 claude-cli 后端不生效，被拒工具始终可用 — ❌

**P1**
- [#154812](https://github.com/openclaw/openclaw/issues/154812) Gateway V8 堆外 RSS 失控至 9.3 GB 引发 OOM — ❌
- [#159094](https://github.com/openclaw/openclaw/issues/159094) Gateway 与内部 worker 争夺 state-lifecycle lease — ❌
- [#164799](https://github.com/openclaw/openclaw/issues/164799) 版本变更后代理逐个准入数分钟，readyz 503 — ❌
- [#158147](https://github.com/openclaw/openclaw/issues/158147) Telegram 回复机器人自身消息时文本丢失 — ❌

**已有修复进展的**
- [PR #176777](https://github.com/openclaw/openclaw/pull/176777) → 关闭挂起（对应 #154812 关联场景）
- [PR #176871](https://github.com/openclaw/openclaw/pull/176871) → 插件超大系统上下文阻塞首轮 turn（fixes #176827）
- [PR #176852](https://github.com/openclaw/openclaw/pull/176852) → ACP 会话运行目录错误（closes #123557）
- [PR #176594](https://github.com/openclaw/openclaw/pull/176594) → completion 回复可发送照片/附件（fixes #176144）

---

## 6. 功能请求与路线图信号

- **多槽位记忆架构** [#60572](https://github.com/openclaw/openclaw/issues/60572)：单 memory 插件槽 → 多层记忆栈并行，呼声高（👍3），尚无 PR，属于中期路线图信号；
- **受保护配置的 owner-approved 流程** [#77886](https://github.com/openclaw/openclaw/issues/77886)（今日已关闭）：与 PR #176751 安全加固方向一致，可能已部分落地；
- **Bifrost provider** [PR #175509](https://github.com/openclaw/openclaw/pull/175509)：若通过 review，将成为下一个版本 provider 生态扩展；
- **私有上下文绑定的 MCP server 视图** [PR #176864](https://github.com/openclaw/openclaw/pull/176864)（XL）：为 #164690 的多租户 MCP 投影做铺垫，是架构级演进信号；
- **session-memory hook 扩展到 reset/prune** [#51572](https://github.com/openclaw/openclaw/issues/51572)、**compaction fallback 模型链** [#56781](https://github.com/openclaw/openclaw/issues/56781)：均标记 needs-product-decision，等待维护者拍板；
- **成本类**：[#158898](https://github.com/openclaw/openclaw/issues/158898)（runtime context 每次重建导致前缀缓存失效）、[#67419](https://github.com/openclaw/openclaw/issues/67419)（bootstrap 文件每 turn 重注入浪费 20–30% token）——与今日合并方向（缓存命中优化）契合度高，**最可能被优先纳入下一版本**。

---

## 7. 用户反馈摘要

**痛点**
- **可靠性是最大抱怨**："结果静默丢失、无重试、无通知"在 subagent、turn 顶替、cron 调度（[#139215](https://github.com/openclaw/openclaw/issues/139215)）、入站消息丢弃（[#112259](https://github.com/openclaw/openclaw/issues/112259)）多个层面反复出现；
- **资源损耗引发实质担忧**：#157989 用户量化了 SSD 写放大，#154812 用户给出完整 OOM 取证——用户群具备较强工程能力，报告质量高；
- **跨渠道一致性差**：WhatsApp TTS（#144502）、iMessage 重复投递（#143632）、Telegram 回复丢文本（#158147）、飞书 collect 模式失效（#54409），渠道插件质量参差；
- **升级体验脆弱**：多个更新失败 Issue 遍布 macOS/Windows/Linux，v2026.10.5 正面回应了这一痛点。

**满意/认可**
- Issue 报告模板与 clawsweeper 自动分类标签被用户积极使用（如 #164799 中 agent 代写报告的规范化流程）；
- @steipete 对 PR 的"What Problem / User Impact"结构化描述获得社区正面对照；
- 中英文用户社区并存，国际化程度高（#51429 中文报告迅速获得处理）。

---

## 8. 待处理积压（建议维护者关注）

| 项目 | 状态 | 风险 |
|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) 子代理结果静默丢失 | 开放 **7 个月**，31 评论，P1 | 编排核心信任问题 |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) write 无 append 模式 | 开放 7 个月，P0 数据丢失 | 静默破坏用户数据 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) steer 模式失效 | 有 linked PR 但 7 个月未落地 | 文档承诺与实现背离 |
| [#132303](https://github.com/openclaw/openclaw/issues/132303) tools.deny 不生效 | P0 安全，需安全审查 | 权限边界形同虚设 |
| [#158966](https://github.com/openclaw/openclaw/issues/158966) 带凭据 CDP URL 暴露给模型 | stale，安全相关 | 凭据泄露面 |
| [#120414](https://github.com/openclaw/openclaw/pull/120414) exec 背景任务证明语义文档 | 开放 2.5 个月的社区 PR | 贡献者流失风险 |
| [#118748](https://github.com/openclaw/openclaw/pull/118748) Google Live PCM 采样率 OOM | stale，8 月提交 | 一行级修复却积压 |
| [#145995](https://github.com/openclaw/openclaw/issues/145995) 插件检查 SQLite 不稳定 | 今日已关闭（P0） | ✅ 好信号，但 #126821 同类问题仍开放 |

---

**健康度小结**：OpenClaw 处于"高速迭代 + 高问题发现率"阶段。修复吞吐（246 PR 关闭/日）亮眼，但 P0 级"消息丢失/数据丢失"积压与修复速度的赛跑仍是项目当前最大风险；安全类 Issue（tools.deny、CDP 凭据）建议优先排期。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**数据日期：2026-10-19**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**爆发后分化期**：以 OpenClaw 为核心的头部项目维持日均数百条 Issue/PR 的超高吞吐，成为事实上的生态基座（LobsterAI 等项目直接复用其 transport 层）；第二梯队项目（ZeroClaw、Hermes Agent、NanoBot）在网关运行时、WASM 插件沙箱、MCP 兼容性等架构层密集投入。全生态的共同主题从“功能扩张”转向**交付可靠性（消息不丢、任务不静默失败）与安全边界（权限审批、凭据保护）**。消息渠道（iMessage/SMS、Matrix、QQ、Telegram）成为各项目竞相扩展的通用战场。Sendblue 同类 PR 同时出现在 4 个项目中，是本期最显著的跨项目共性信号。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 待合并 | 合并/关闭 | Release | 健康度评估 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 254 | 246 | v2026.10.5 | ⚠️ 高迭代+高积压，6 个 P0 无 fix PR |
| **Hermes Agent** | 50 | 50 | 40 | 10 | 无 | 良好，重构后修复消化期 |
| **ZeroClaw** | 25 | 50 | 42 | 8 | v0.8.6（573 commits/74 人） | 良好，发布窗口期+缺陷收割 |
| **NanoBot** | 38 | 34 | 7 | 27 | 无 | 优秀，合并率 79%，质量收敛期 |
| **CoPaw (QwenPaw)** | 15 | 17 | 16 | 0 | 无 | 良好，修复流水线活跃 |
| **NanoClaw** | 5 | 15 | 8 | 7 | 无 | 良好，模板化生态推进 |
| **LobsterAI** | 0 | 5 | 3 | 2 | 即将发布 2026.10.19 | 工程强 / 社区静默 |
| **Moltis** | 0 | 3 | 1 | 2 | 无 | 功能扩张期，社区零反馈 |
| **ZeptoClaw** | 2 | 2 | 1 | 1 | 无 | 良好，单维护者快速自迭代 |
| **IronClaw** | 0（1 关闭） | 8 | 6 | 2 | 无 | 维护日，依赖保鲜为主 |
| **PicoClaw** | 3 | 5 | 3 | 2 | 无 | 隐忧，stale 误伤贡献者 |
| **NullClaw / TinyClaw / EasyClaw** | 0 | 0 | — | — | — | 无活动 |

---

## 3. OpenClaw 在生态中的定位

**优势**：
- **规模断崖式领先**：日均 500 Issue/500 PR 更新，约为第二名（Hermes/ZeroClaw）的 10 倍，社区具备极强的自诊断能力（OOM 取证、SSD 写放大量化报告）；
- **基础设施化**：v2026.10.5 的更新自愈能力（handoff lease 清理、跨平台恢复）和前缀缓存优化（PR #176167 修复 0 cached tokens）直指生产级运维痛点，LobsterAI 已开始在其之上做减法（删除 3500 行自有代理层改用原生 transport）；
- **安全自我审视**：PR #176751 阻断“agent 自授权”路径，在生态中属超前。

**风险**：7 个月未修的 P0（#40001 append 模式静默丢数据、#44925 子代理结果丢失）、tools.deny 不生效（#132303）等安全/可靠性积压，与其“编排层核心承诺”的定位形成张力。

**技术路线差异**：OpenClaw 走 Gateway 中心化编排；ZeroClaw 走 Rust + WASM 插件沙箱（egress 授权仪式）；Hermes 正在完成统一网关运行时大重构；NanoBot/NanoClaw 轻量化路线，聚焦 MCP/Provider 兼容与模板化创建。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **iMessage/SMS 渠道** | NanoBot(#6081)、ZeroClaw(XMPP #11847 亦可归渠道扩张)、PicoClaw(#3416)、NanoClaw(#4043)、IronClaw(#8127) | Sendblue 等原生短信接入，“个人助手无处不在”是共性产品判断 |
| **消息/任务交付可靠性** | OpenClaw(#44925/#148707)、PicoClaw(#3422/#3423)、CoPaw(#8313)、Hermes(#140823) | 静默失败（cron 报 ok、群消息丢弃、消息不落库）是全生态第一信任痛点 |
| **凭据/权限安全** | OpenClaw(#132303/#158966)、Hermes(#141346/#59293)、ZeptoClaw(#713)、NanoBot(#6067)、NanoClaw(#4090) | 审批层可绕过、API 无鉴权、日志泄露凭据——agent 权限边界是普遍薄弱点 |
| **Prompt caching / token 成本** | OpenClaw(#176167/#158898/#67419)、ZeptoClaw(#711) | 缓存 token 计量与命中率优化，成本敏感用户刚需 |
| **多渠道语义精细化** | Moltis(Discord DM #1295)、NanoBot(Matrix listen #6288)、CoPaw(钉钉降级 #8278) | 群聊 vs DM 的上下文/格式策略 |
| **无人值守可观测性** | NanoBot、PicoClaw、CoPaw、ZeroClaw(#11820 热生效) | 配置变更通知 daemon、失败显式告警 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | ZeroClaw | Hermes Agent | NanoBot / NanoClaw | CoPaw | ZeptoClaw / Moltis / LobsterAI |
|---|---|---|---|---|---|---|
| **功能侧重** | 全栈编排+Gateway | WASM 插件安全/TUI(ZeroCode) | 统一网关+桌面端 | 轻量/MCP 兼容/模板生态 | 中文渠道(QQ/钉钉/飞书)+鸿蒙 | 细分：计量精度/桌面 gpui/OpenClaw 上层发行版 |
| **目标用户** | 重度生产用户、多实例运维 | 插件开发者、安全敏感者 | 桌面端+CLI 用户 | 自托管入门者 | 国内企业/IM 场景 | 各自小众社区 |
| **技术架构** | TS, 中心化 Gateway | Rust, WASM 沙箱+egress 授权 | 大重构后统一运行时 | Docker/Compose 优先 | Python 框架层 | Rust 单仓 / 复用上游 |

---

## 6. 社区热度与成熟度分层

- **规模引领期**：OpenClaw（活跃度断崖第一，但 P0 积压提示进入“发现快于修复”的临界状态）
- **快速迭代期**：ZeroClaw（74 人发布、v0.8.7 缺陷收割）、Hermes Agent（Package 12 系列密集修复）、NanoClaw（模板化生态落地）
- **质量巩固期**：NanoBot（27 PR 合并、79% 合并率，为下版本蓄力）、CoPaw（修复流水线覆盖 40% 本周 Bug）
- **观望/收缩期**：PicoClaw（stale 机制误伤高质量贡献）、IronClaw（依赖维护日）、LobsterAI/Moltis（工程推进但社区通道沉寂）
- **休眠**：NullClaw、TinyClaw、EasyClaw

---

## 7. 值得关注的趋势信号

1. **可靠性 > 功能**：热度榜普遍被“静默失败”类 Issue 占据（OpenClaw 前五热点全部与消息交付相关）。对开发者的启示：重试、显式错误信号、失败通知是 agent 编排层的护城河，不是加分项。
2. **审批/权限层成为新的安全主战场**：Hermes 的 smart approval 误放行致数据丢失、OpenClaw 的自授权阻断、NanoClaw 的审批卡片注入防护——agent 自主性越强，审批层的可预期性越关键。
3. **Prompt caching 是成本分水岭**：OpenClaw 修复“真实场景 0 cached tokens”、ZeptoClaw 补齐缓存 token 计量，说明缓存感知架构（固定工具面、稳定前缀）将成为 agent 框架标配。
4. **上游生态复用**：LobsterAI 删除 3500 行代理代码改用 OpenClaw 原生 transport——头部项目正在“基础设施化”，围绕其做发行版/上层产品是低风险路线。
5. **渠道长尾化与本地化**：Sendblue、XMPP+OMEMO、鸿蒙（CoPaw #8311，45k 行 ArkTS）表明渠道矩阵在向加密协议、国产平台延伸，中文/CJK 用户在全球多个项目中占比显著，国际化不应是事后补丁。
6. **贡献者留存风险普遍存在**：PicoClaw 关闭 7 个月 PR、NanoClaw 渠道 PR 积压 2 个月——小体量项目若 review 响应迟缓，高质量贡献（Issue+PR 闭环型）将迅速流失，这是第二梯队项目最廉价的健康度提升点。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-10-19

## 1. 今日速览

NanoBot 今日保持高活跃度：过去 24 小时共 38 条 Issue/PR 更新，其中 PR 活动显著（34 条，合并/关闭 27 条），显示核心团队正处于集中清理与合并周期。今日无新版本发布，但大量 P1/P2 级修复落地（cron 调度、MCP 发现、工具参数校验等），项目在稳定性与 MCP/Provider 兼容性方面明显推进。新开 Issue #6288（Matrix "listen" 策略）当日即有配套 PR #6289 响应，社区响应速度快。总体健康度良好，合并率高（约 79%），待合并 PR 仅 7 条。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的重要 PR（共 27 条），按主题归类：

**Cron 调度稳定性（重要修复群）**
- [#6071](https://github.com/HKUDS/nanobot/pull/6071) 修复执行期间编辑的调度被完成回调“吞掉”的问题（对应 Issue #6070，今日关闭）
- [#6167](https://github.com/HKUDS/nanobot/pull/6167) [P1] 修复 gateway 重启后 `every` 任务丢失待执行运行的问题
- [#6299](https://github.com/HKUDS/nanobot/pull/6299) 修复重启后已消费的 follow-up 被重复回放的问题

**MCP 生态兼容性**
- [#6018](https://github.com/HKUDS/nanobot/pull/6018) 支持资源/提示目录分页发现
- [#6019](https://github.com/HKUDS/nanobot/pull/6019) 兼容无 tools 能力的 MCP 服务器
- [#6067](https://github.com/HKUDS/nanobot/pull/6067) [安全] 修复发现错误日志中的凭据泄露

**Provider / 流式解析**
- [#6050](https://github.com/HKUDS/nanobot/pull/6050) 修复 SSE 首 UTF-8 BOM 导致首事件丢失
- [#6270](https://github.com/HKUDS/nanobot/pull/6270) 修复流式内联推理段落分隔符丢失
- [#6013](https://github.com/HKUDS/nanobot/pull/6013)、[#6254](https://github.com/HKUDS/nanobot/pull/6254) 修复 JSON Schema 枚举/整数参数校验

**渠道与 WebUI**
- [#6184](https://github.com/HKUDS/nanobot/pull/6184) 修复邮件同名附件互相覆盖
- [#6295](https://github.com/HKUDS/nanobot/pull/6295)、[#6298](https://github.com/HKUDS/nanobot/pull/6298) WebUI 无品牌标识可读性、设置齿轮动画修复
- [#6297](https://github.com/HKUDS/nanobot/pull/6297) 用户文档可用性改进

**整体评价**：今日合并以 P2 修复为主、含 1 个 P1，覆盖调度、MCP、Provider、渠道四个子系统，是一次系统性的质量收敛，为下个版本发布奠定基础。

## 4. 社区热点

- [Issue #6288](https://github.com/HKUDS/nanobot/issues/6288)（3 条评论，今日新开）：Matrix 用户希望群组中的 bot 能“静默观察全部对话、仅在被 @ 时回复”。当前 `mention` 策略直接丢弃未命中消息，导致 bot 缺乏上下文。当日即有 [PR #6289](https://github.com/HKUDS/nanobot/pull/6289) 提交 `listen` 第三种策略，属典型“Issue + PR 同日联动”，诉求明确、实现路径清晰，预计很快合入。
- [PR #6171](https://github.com/HKUDS/nanobot/pull/6171) [P1]：修复全新 `git clone && docker compose up` 下 nanobot-api 崩溃循环、所有端口不可达的问题。首跑体验损坏属高优先级，但该 PR 标记 `conflict` 且今日未合并，**建议维护者优先重rebase**。
- [Issue #5311](https://github.com/HKUDS/nanobot/issues/5311)：Agnes AI 自定义 provider 下嵌套对象工具参数被双重 JSON 编码的老问题（8 月开），今日再次活跃，说明第三方 OpenAI 兼容端点的兼容性仍是痛点。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| P1 | Docker Compose 首跑服务不可用、api 崩溃循环（[#6171](https://github.com/HKUDS/nanobot/pull/6171)） | fix PR 待合并（有冲突） |
| P2 | Cron：执行中改期被消费（#6070/#6071）、重启丢失 every 待运行（#6167）、重启回放已消费 follow-up（#6299） | ✅ 均已关闭/合并 |
| P2 | [Issue #5311](https://github.com/HKUDS/nanobot/issues/5311) Agnes AI 嵌套工具参数双重编码 | ⚠️ 仍 OPEN，暂无 fix PR |
| P2 | Gemini 兼容流式并行工具调用缺少 index 导致解析错乱（[PR #6296](https://github.com/HKUDS/nanobot/pull/6296)，今日新开） | fix PR 待评审 |
| P2 | DuckDuckGo 搜索瞬时拒绝不重试（[PR #6290](https://github.com/HKUDS/nanobot/pull/6290)） | fix PR 待评审 |
| 安全 | MCP 发现代码在 DEBUG 日志泄露凭据（#6067） | ✅ 已合并 |

## 6. 功能请求与路线图信号

- **Matrix `listen` 策略**（#6288 / PR #6289）：PR 已就绪，纳入下版本可能性极高，将增强群聊场景下的上下文感知能力。
- **Sendblue iMessage/SMS 渠道**（[PR #6081](https://github.com/HKUDS/nanobot/pull/6081)，10-05 开、今日仍活跃）：原生短信/iMessage 接入，文档和测试完备，是渠道扩展方向的重要信号。
- **WebUI bang 命令走网关**（[PR #6173](https://github.com/HKUDS/nanobot/pull/6173)，标记 conflict）：对齐 TUI 能力，待重rebase 后有望合入。
- 路线图信号：近期合并集中于 MCP 兼容性与多 provider 适配，暗示团队在为“任意模型 + 任意工具服务器”的生态兼容目标铺路。

## 7. 用户反馈摘要

- **群聊场景痛点**（#6288）：用户在繁忙 Matrix 群里需要 bot 具备完整对话记忆，只在被点名时响应——“听而不说”是真实需求。
- **自定义 provider 兼容性**（#5311）：用户通过 `providers.custom` 接入第三方 OpenAI 兼容端点，遇到嵌套参数编码 bug，反映社区对开放 provider 生态的依赖。
- **首跑体验敏感**（#6171）：新用户 clone 后无法启动会直接流失，此类 P1 问题的快速闭环（issue #6165 → PR）体现了较好的响应，但冲突未解拖慢了节奏。
- **细节体验关注**：用户对 WebUI 设置齿轮悬停“晃动”、无品牌磁贴对比度 1.09:1 等细微视觉问题提出反馈，说明 WebUI 用户基数和期待在提升。

## 8. 待处理积压

- [Issue #5311](https://github.com/HKUDS/nanobot/issues/5311)：8 月 10 日创建，悬置逾两个月，今日虽活跃但仍无认领修复，建议维护者分配 owner。
- [PR #6171](https://github.com/HKUDS/nanobot/pull/6171)：P1 Docker 首跑修复因冲突停滞约一周，影响新用户转化，应最优先处理。
- [PR #6173](https://github.com/HKUDS/nanobot/pull/6173)：同样标记 conflict 的功能 PR，需 rebase。
- [PR #6081](https://github.com/HKUDS/nanobot/pull/6081)：Sendblue 渠道 PR 已开两周，建议推进评审以免贡献者流失。
- 今日新开的 #6296、#6290 尚待评审，工作量小，可快速闭环。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-10-19

## 1. 今日速览

ZeroClaw 今日处于**高活跃度发布窗口期**：v0.8.6 刚刚发布（573 commits / 74 位贡献者），同时社区已密集进入 v0.8.7 的缺陷收割阶段。过去 24 小时 Issues 更新 25 条（新开/活跃 21，关闭 4），PR 更新 50 条（待合并 42，合并/关闭 8）。话题高度集中在 **WASM 插件体系（egress、签名、包管理）** 和 **CI/发布基础设施**（arm64 OOM、macos-14 brownout）上，多位核心贡献者（@JordanTheJet、@IftekharUddin、@Audacity88、@tidux）持续高产输出。整体健康度良好，但 v0.8.6 遗留了若干插件安全类 follow-up。

## 2. 版本发布

### v0.8.6（[Release](https://github.com/zeroclaw-labs/zeroclaw/releases)）

- **规模**：573 commits，74 位贡献者，定位为 **插件、身份与运行时所有权（runtime-ownership）** 版本。
- **核心内容**：七个 64 位 CLI 发布归档全部内置 **WebAssembly 插件宿主**；插件注册表已提供为本版本构建的 channel 与 tool 包。
- **迁移注意**：多项 issue 标注 `release:v0.8.6` 且状态为 `follow-up`，说明插件 egress、包锁权限（#11360）、`plugin remove` 路径（#11357）等缺陷随本版本引入或暴露，升级用户建议关注插件安全配置。
- **发布流程风险**：arm64 `dist` 镜像构建 OOM（#11828），v0.8.6 可能**缺失 dist 镜像**，需事后从 tag 重建；macos-14 runner 需在 10 月 19 日 brownout 前迁移至 macos-15（#11831）。

## 3. 项目进展

今日关闭的 8 个 PR 显著推进了 ZeroCode（TUI）体验与运行时可观测性：

- [#11692](https://github.com/zeroclaw-labs/zeroclaw/pull/11692) — `cost.warn_at_percent` 预算警告终于透传到 ZeroCode（配套关闭 issue #10950），预算管理闭环完成。
- [#11513](https://github.com/zeroclaw-labs/zeroclaw/pull/11513) — Dashboard 展示聚焦的运行时上下文（agent、provider/model、会话状态统计），关闭长线 issue #8383。
- [#11508](https://github.com/zeroclaw-labs/zeroclaw/pull/11508) — Config 空段落引导与别名设置说明（关闭 #11490），新手引导体验改善。
- [#11407](https://github.com/zeroclaw-labs/zeroclaw/pull/11407) — 修复高负载下 ZeroCode 会话流式更新渲染延迟。
- [#11688](https://github.com/zeroclaw-labs/zeroclaw/pull/11688)（测试修复）、[#11838](https://github.com/zeroclaw-labs/zeroclaw/pull/11838)（rustfmt 修复，master 上 `cargo fmt --check` 已破，尽快落地）。

**整体评估**：ZeroCode 方向一次落地 4-5 个功能/修复，是今日最大赢家；OpenRouter 余额展示旧 PR #11231 关闭后由 #11845/#11846 以更细粒度方案重启。

## 4. 社区热点

- **[#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)**（7 评论）— ZeroCode "Copy" 一键复制完全失效，S1 级别阻塞用户工作流，今日仍在跟进中，是最热讨论。
- **[#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296)**（5 评论）— llama.cpp/自定义 provider 的 URI 处理错误，反映自建/本地推理用户（router 场景）接入痛点。
- **[#11712](https://github.com/zeroclaw-labs/zeroclaw/pull/11712)** — 将 A2A 协议核心抽取为独立 `zeroclaw-a2a` crate，是 XL 级架构重构，与 v0.8.6 "所有权"主题一脉相承，值得 maintainer 重点评审。
- **[#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847)**（今日新开）— 全新 XMPP/Prosody channel + 可选 OOMEMO 端到端加密，社区渠道生态持续扩张（已有 Slack/Telegram/Discord/Matrix/Signal 等）。
- **[#11822](https://github.com/zeroclaw-labs/zeroclaw/pull/11822)** — shell 安全扫描器在 `$(...)` 替换/子 shell 边界的拆分缺陷修复（risk:high），安全边界持续加固。

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| P1 | [#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946) | agent-browser 子进程等待无上限，CLI 卡死可挂起整个 agent turn（与 #8560 同类缺陷） | in-progress |
| P1 | [#8800](https://github.com/zeroclaw-labs/zeroclaw/issues/8800) | Windows 上进程被杀后端口残留，新 daemon 无法启动 | accepted，未 fix |
| P1 | [#11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525) | Android/Termux quickstart 无法创建 agent（S1 阻塞） | 无 PR |
| P1 | [#11813](https://github.com/zeroclaw-labs/zeroclaw/issues/11813) | 插件 egress 首地址被黑洞时连接卡死，不尝试其余地址 | 无 PR（v0.8.6 遗留） |
| P1 | [#11552](https://github.com/zeroclaw-labs/zeroclaw/issues/11552) | egress 授权仪式忽略 `websocket_client`/`socket_client` 声明，安全模型存在缺口 | accepted |
| P2 | [#11336](https://github.com/zeroclaw-labs/zeroclaw/issues/11336) | `plugin info` 显示 `[loads]` 但运行时拒绝注册（缺 `config_schema`） | accepted |
| P2 | [#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623) | ZeroCode 丢弃 ask_user 提示无回复，600s 超时且无记录 | **有 fix PR** [#11624](https://github.com/zeroclaw-labs/zeroclaw/pull/11624) |
| P2 | [#11820](https://github.com/zeroclaw-labs/zeroclaw/issues/11820) | `config set` 插件实例配置只写盘不通知运行中 daemon | 无 PR |
| P2 | [#11357](https://github.com/zeroclaw-labs/zeroclaw/issues/11357) | `plugin remove` 删除目录路径错误，可能误删无关目录 | accepted |
| P2 | [#10199](https://github.com/zeroclaw-labs/zeroclaw/issues/10199) | egress connect-deadline 无法取消阻塞的 getaddrinfo DNS 解析 | accepted |
| P3 | [#11817](https://github.com/zeroclaw-labs/zeroclaw/issues/11817) / [#11834](https://github.com/zeroclaw-labs/zeroclaw/issues/11834) | strict 模式误报插件未安装 / Rust 1.99 clippy 18 个新告警 | 无 PR |

## 6. 功能请求与路线图信号

**v0.8.7 信号明确**——多个 issue/PR 已打 `release:v0.8.7` 标签：

- **#11820 / #11819 / #11817**（@JordanTheJet 集中提交）：插件配置热生效、quickstart 模型选择顺序、strict 签名模式 UX——预示 v0.8.7 聚焦**插件运维体验（operator-ux）打磨**。
- **#10407**（[PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)，XL）持久化会话提示附件、**#11456** 子进程内存看门狗（opt-in `shell_max_memory_mb`，可回应 #9946 类挂起问题）、**#11633** ZeroCode 转录本地文件路径打开——均待 maintainer review，属下一版本候选。
- **架构方向**：#11712 A2A crate 抽取、#10892 规范配置代际发布与 per-target 应用台账（#7897 的落地基础），表明项目在为多消费者 live-apply 配置架构铺路。

## 7. 用户反馈摘要

- **本地/自建推理用户**是抱怨主力：llama.cpp URI 错误（#11296）、OpenAI 兼容服务的 snake_case 错误码不被识别导致上下文溢出误判（[#11659](https://github.com/zeroclaw-labs/zeroclaw/pull/11659)）。
- **移动端/边缘用户**：Termux 上 quickstart 完全失败（#11525，且错误信息为中文），项目对非主流平台支持薄弱。
- **Windows 用户**长期受僵尸端口问题困扰（#8800，7 月至今仍 open）。
- **ZeroCode TUI 用户**满意点在于功能密集落地（运行时上下文、预算警告、文件 diff）；不满集中在基础交互（Copy 按钮失效 #11418、ask_user 丢提示 #11623）。
- **插件开发者**反馈 `plugin info` 与实际注册状态不一致（#11336、#11817），诊断工具可信度不足是核心诉求。

## 8. 待处理积压

- **[#8800](https://github.com/zeroclaw-labs/zeroclaw/issues/8800)**（P1，7 月开，Windows 端口僵尸）— 3 个多月无 fix PR，Windows 用户持续受影响，建议优先排期。
- **[#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946)**（P1，8 月开，browser 工具无限等待）— 与 #8560 同类缺陷再现，#11456 看门狗 PR 或为系统性解法，建议 maintainer 关联评审。
- **[#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447)**（7 月开，XL，Anthropic 不完整响应分类）— 长期 needs-maintainer-review，卡住 provider 可靠性主线。
- **[#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)**（8 月开，XL，会话提示附件）— 覆盖面极广但评审停滞，存在与近期 channel/config 改动冲突的风险。
- **#11831（macos-14 brownout 截止 10/19，即今日）与 #11828（arm64 dist 镜像缺失）** — 属当日紧急事项，直接影响 v0.8.6 完整性与后续 CI，需立即决策。

---
*数据来源：ZeroClaw GitHub Issues/PRs/Releases（截至 2026-10-19）*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-10-19）

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 46、关闭 4），PR 更新 50 条（待合并 40、已合并/关闭 10），无新版本发布。项目核心工作仍围绕 **#106742 统一网关运行时（unified-gateway-runtime）合并后的修复收尾**（跟踪 Issue [#134889](https://github.com/NousResearch/hermes-agent/issues/134889)），维护者 @teknium1 今日以"Package 12"系列 PR 密集推进多条修复车道。社区侧新开 Bug 数量较多（含 1 起数据丢失级安全问题），桌面端会话/转录渲染稳定性是当前最集中的痛点。整体看，项目处于“大重构落地后的修复消化期”，健康度良好但回归问题压力明显。

## 2. 版本发布

今日无新版本发布。（最新版本仍为 v0.22.2，2026-09-24）

## 3. 项目进展

今日关闭/合并 10 个 PR，主要由 @liuhao1024 与 @teknium1 贡献：

- **[#139553](https://github.com/NousResearch/hermes-agent/pull/139553)** — 修复规范网关上活动会话切换器的关闭操作永远失败的问题（session.close 不在 canonical 契约中，改走 owner verbs）。
- **[#139632](https://github.com/NousResearch/hermes-agent/pull/139632)** — `hermes sessions archive` 支持 `--include-open`，可归档桌面端从未结束的会话。
- **[#139676](https://github.com/NousResearch/hermes-agent/pull/139676)** — 修复 `hermes -z` 走网关时只打印空行并以退出码 1 结束、丢失终端回复的问题。
- **[#140137](https://github.com/NousResearch/hermes-agent/pull/140137)** — 修复双进程布局下侧栏操作（archive/delete/pin 等）被 409 拒绝的问题。
- **[#140514](https://github.com/NousResearch/hermes-agent/pull/140514)** — 修复独立插件 host 进程中 `_require_token` 拒绝 dashboard 转发请求的问题。
- **[#140612](https://github.com/NousResearch/hermes-agent/pull/140612)** — 修复 macOS 上 psutil 时钟偏移导致网关匹配 worker birth 失败。
- **[#140764](https://github.com/NousResearch/hermes-agent/pull/140764)** — 修复 docker per-session 隔离下 one-shot CLI 运行无 `/workspace` 挂载的问题。
- **[#141372](https://github.com/NousResearch/hermes-agent/pull/141372)** — REA 崩溃分类技能支持 stripped 二进制。

**评价**：今日关闭的 PR 几乎全部服务于 #134889 后合并修复，CLI/网关/桌面三条链路的一致性问题在系统性收敛。

## 4. 社区热点

- **[#134889](https://github.com/NousResearch/hermes-agent/issues/134889)（评论 186）** — 统一网关运行时合并后的总跟踪 Issue，涉及 17 个标签，覆盖 Windows、会话状态、消息投递等多个风险面。今日衍生出 Package 12 系列 PR（#141331/#141335/#141336/#141337/#141338/#141343/#141357 等），是全项目当前的事实主线。
- **[#131859](https://github.com/NousResearch/hermes-agent/issues/131859)（评论 45）** — 贡献者 @kuehnberger 反映无法通过 API 创建 PR（CreatePullRequest 权限错误），标记 `cause/upstream` 且 blocked，影响外部贡献链路，值得维护者跟进。
- **[#59293](https://github.com/NousResearch/hermes-agent/issues/59293)（评论 25）** — `hermes config set` 绕过系统配置写保护、可无门槛关闭审批层的安全问题，长期未决。
- **[#67347](https://github.com/NousResearch/hermes-agent/issues/67347)** — 子代理模型/提供商的引导式选择器需求，反映高级设置中自由文本输入易错的痛点。

## 5. Bug 与稳定性（按严重度）

**P0/P1 级**
- **安全/数据丢失** [#141346](https://github.com/NousResearch/hermes-agent/issues/141346)（今日新开，P3 标签但实际影响严重）：Smart approval 自动放行了 osascript 命令，关闭用户未保存的 PowerPoint 并删除导出文件，**造成不可恢复的数据丢失**。尚无 fix PR，建议维护者优先评估 approval 判定规则。
- [#134890](https://github.com/NousResearch/hermes-agent/issues/134890)（已关闭）：Desktop 延迟构建代理时 `RecursionError` 且 traceback 不落日志。

**P2 级**
- [#140858](https://github.com/NousResearch/hermes-agent/issues/140858)：cron 卡片 worker 被杀后所有 reclaim 路径均失效，永久占用 profile 的 kanban 并发槽位。暂无 fix PR。
- [#140823](https://github.com/NousResearch/hermes-agent/issues/140823)：**v0.22.1 回归** — 所有平台网关消息不再写入 state.db，桌面端显示 0 消息。暂无 fix PR，需关注。
- [#141014](https://github.com/NousContinue/hermes-agent/issues/141014) / [正确链接：#141014](https://github.com/NousResearch/hermes-agent/issues/141014)：CJK 房间提示在准入前超出请求上限，对中文用户不友好。
- [#141223](https://github.com/NousResearch/hermes-agent/issues/141223)：多路复用 profile 共享 MCP server park/revive 后只有 owner 恢复工具。
- [#141356](https://github.com/NousResearch/hermes-agent/issues/141356)：`_parse_session_key` 忽略 Slack scope_id，导致 Slack 异步委托结果永不送达。
- [#141348](https://github.com/NousResearch/hermes-agent/issues/141348)：cron 执行期间用户消息被不透明的 admission_conflict 卡片拒绝。
- [#140998](https://github.com/NousResearch/hermes-agent/issues/140998)：ANTHROPIC_API_KEY 环境变量在重试时覆盖 OAuth 凭证池选择，造成 400 循环。
- [#123103](https://github.com/NousResearch/hermes-agent/issues/123103)：Python 3.14 下 openai 模块导入死锁导致自动标题失败（upstream）。

**桌面端转录渲染（多发、体验影响大）**
- [#137287](https://github.com/NousResearch/hermes-agent/issues/137287)：转录随机重复/错序/丢失消息。
- [#141351](https://github.com/NousResearch/hermes-agent/issues/141351)（今日新开）：turn 中途的用户提示渲染在最终答案下方，需 Force Reload（持久层数据顺序正确，疑为渲染层问题）。

## 6. 功能请求与路线图信号

- **浏览器版 Desktop**：[#93508](https://github.com/NousResearch/hermes-agent/pull/93508) `hermes webapp` 在浏览器中托管真实 Desktop renderer，长期开放中，若合入将是重大分发形态扩展。
- **Telegram topic 自动迁移**：[#141347](https://github.com/NousResearch/hermes-agent/pull/141347)（今日新开，opt-in `dm_topic_auto_transfer`），有望进入下一版本。
- **子代理模型引导式选择器**（[#67347](https://github.com/NousResearch/hermes-agent/issues/67347)）与 **桌面状态栏显示会话成本**（[#67765](https://github.com/NousResearch/hermes-agent/issues/67765)）：均为长期 open 的 UX 需求，评论持续活跃，尚未见对应实现 PR。
- **视觉/图像路径重构提案**：[#140646](https://github.com/NousResearch/hermes-agent/issues/140646) 附带可复现测量数据，质量高，值得关注采纳。
- **A2A 长任务 park 机制**：[#134286](https://github.com/NousResearch/hermes-agent/pull/134286)（stacked on #130744），是协议层健壮性的重要一步。

## 7. 用户反馈摘要

- **痛点集中**：桌面端转录渲染异常（重复/错序/丢失）是近期最高频抱怨；多 profile/多路复用架构下的会话所有权与状态一致性问题（409、消息不落库、MCP 工具丢失）困扰重度用户。
- **信任与安全焦虑**：smart approval 自动放行导致数据丢失（#141346）和 `hermes config set` 绕过审批保护（#59293）表明用户对审批层的可预期性有强烈诉求。
- **国际化**：CJK 请求体积问题（#141014）说明中文/日韩用户占相当比例。
- **正面信号**：用户报告普遍附详细复现步骤与版本信息，社区参与质量高；修复 PR 响应（尤其 Package 12 系列）速度快，维护者与用户形成良好闭环。

## 8. 待处理积压

- **[#59293](https://github.com/NousResearch/hermes-agent/issues/59293)**（7 月开，25 评论，`needs-decision`）：审批层绕过安全问题，超过 3 个月未决，属高危积压。
- **[#131859](https://github.com/NousResearch/hermes-agent/issues/131859)**（blocked/upstream）：外部贡献者无法开 PR，阻塞社区贡献通道。
- **[#123452](https://github.com/NousResearch/hermes-agent/issues/123452)**：`delegate_task` 忽略 model pin，9 月下旬至今无修复进展，与 #67347 同属 delegation 体验欠账。
- **[#126392](https://github.com/NousResearch/hermes-agent/issues/126392)**：Matrix Megolm 密钥不请求导致消息永久丢失，影响加密房间可用性。
- **[#130875](https://github.com/NousResearch/hermes-agent/issues/130875)**：所有非 docker 远程后端（ssh/modal/daytona）的 MEDIA 投递失效，覆盖面广。
- **[#123103](https://github.com/NousResearch/hermes-agent/issues/123103)**：依赖上游 openai 库，建议在 README/issue 中明确临时缓解方案。
- **待合并 PR 积压 40 个**：其中 Package 12 系列（#141331–#141357）间存在相互依赖，建议维护者明确合并顺序（含 #134286 依赖 #130744 的 stacked 关系），避免 rebase 风险。

---
*数据来源：GitHub API，统计窗口 2026-10-18 至 2026-10-19。链接格式为 repo 内编号，可于 NousResearch/hermes-agent 检索。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-10-19 | 数据来源：github.com/sipeed/picoclaw**

---

## 1. 今日速览

过去 24 小时 PicoClaw 共有 8 条动态（Issues 3 条、PRs 5 条），社区活跃度处于**中等偏低**水平，无新版本发布。值得注意的是，贡献者 @sstpnk 于 10 月 11 日集中提交了两个高质量 Bug 报告（#3422、#3423）并各配对修复 PR（#3424、#3425），形成“报告+修复”的完整闭环，是本轮最主要的实质进展。同时，多个长期悬挂的 Issue/PR（如 #3281、#1556、#1040）在同日被标记/关闭，或为 stale 机器人清理所致，反映维护者响应节奏偏慢。整体健康度：**功能生态在扩展（新渠道 PR），但稳定性和维护吞吐存在隐忧**。

---

## 2. 版本发布

今日无新版本发布。当前最新版本仍为 v0.3.1（commit 2cf030d2）。

---

## 3. 项目进展

**今日关闭的 PR（2 条）：**

- [#1556 fix: merge PR #1378 #1376 #1356](https://github.com/sipeed/picoclaw/pull/1556)（@xuwei-xy，3 月创建）：合并三个历史修复 PR 的聚合修复被关闭，未合并入库。
- [#1040 feat: add opencode-zen provider with multi-endpoint support](https://github.com/sipeed/picoclaw/pull/1040)（@jackbravo，3 月创建）：OpenCode Zen 多端点 Provider 支持被关闭，该功能悬置 7 个月后未落地。

**待合并 PR（3 条）：**

- [#3416 feat(channels): add Sendblue iMessage and SMS transport](https://github.com/sipeed/picoclaw/pull/3416)：新增 Sendblue 渠道，用户可通过 iMessage/SMS 与 Agent 对话，覆盖账号注册、联系人验证、webhook 等完整流程。扩展多渠道接入能力的重要一步。
- [#3425 fix(cron): report failed jobs as errors](https://github.com/sipeed/picoclaw/pull/3425)：修复 cron 任务失败仍报 ok 的问题。
- [#3424 fix(telegram): bound hung long-poll requests with HTTP timeouts](https://github.com/sipeed/picoclaw/pull/3424)：为 Telegram 长轮询请求增加 HTTP 超时。

**评估**：今日关闭的均为陈旧 PR 且未合并，无净代码入库；实质进展集中在两个待合修复 PR 上，项目整体推进幅度**有限**。

---

## 4. 社区热点

**最活跃讨论：**

- [#3281 [BUG] Web UI chat input is very laggy when history has a little bit long](https://github.com/sipeed/picoclaw/issues/3281)（@xpader，19 条评论，2 👍）—— 今日关闭。作为评论最多的 Issue，反映 Web UI 在长会话历史下的输入性能是用户高频痛点，19 条评论说明复现面广、讨论深入。

**新提交的针对性报告（来自 @sstpnk）：**

- [#3423 [BUG] Cron jobs always report lastStatus=ok, even when the run failed](https://github.com/sipeed/picoclaw/issues/3423)
- [#3422 [BUG] Telegram channel stops receiving messages forever](https://github.com/sipeed/picoclaw/issues/3422)

这两条 Issue 均附带根因代码分析和对应修复 PR，属于高质量贡献。诉求核心是**可观测性与静默故障**：用户在自动化场景（定时任务、Telegram 机器人）中需要 Agent“确实在正常工作”的可靠保证，而当前失败被掩盖、通道静默挂死，直接损害信任。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 状态 | 修复 PR |
|---|---|---|---|
| 🔴 高 | [#3422](https://github.com/sipeed/picoclaw/issues/3422) Telegram 通道长轮询无超时，半开连接可致**永久停止收消息**，进程看似健康 | OPEN | ✅ [#3424](https://github.com/sipeed/picoclaw/pull/3424) |
| 🟠 中高 | [#3423](https://github.com/sipeed/picoclaw/issues/3423) Cron 任务失败仍记 `lastStatus: ok`，网关吞掉错误，掩盖所有定时任务故障 | OPEN | ✅ [#3425](https://github.com/sipeed/picoclaw/pull/3425) |
| 🟡 中 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI 长会话历史下输入框严重卡顿 | CLOSED（未经修复确认即关闭，疑似 stale 清理，**建议复核**） | ❌ 未见 |

---

## 6. 功能请求与路线图信号

- **多渠道扩展持续推进**：[#3416 Sendblue iMessage/SMS 渠道](https://github.com/sipeed/picoclaw/pull/3416) 表明社区对“通过个人即时通讯工具直接对话 Agent”需求旺盛。若合并，PicoClaw 渠道矩阵将覆盖 Web、Telegram、iMessage/SMS，符合个人 AI 助手“无处不在”的产品方向，**较可能进入下一版本**。
- **Provider 生态**：[#1040 opencode-zen provider](https://github.com/sipeed/picoclaw/pull/1040) 被关闭说明该需求暂未获维护者采纳，opencode 用户仍需自行适配。
- **稳定性方向**：两个修复 PR（#3424、#3425）若合并，将显著提升长时间无人值守运行的可靠性——这是 Agent 助手场景的关键路线图信号。

---

## 7. 用户反馈摘要

- **Web UI 性能是体验短板**：#3281 中多位用户确认长会话历史导致输入卡顿，说明前端状态管理/渲染存在性能瓶颈，影响日常重度使用者。
- **无人值守可靠性受质疑**：#3422、#3423 的报告者显然在生产/半生产环境运行 Telegram bot 与定时任务，对“静默失败零告警”强烈不满。
- **深度用户贡献意愿强**：@sstpnk 一次提交两条带代码级根因分析的 Issue + 修复 PR，@lookevink 提交完整渠道实现含文档，表明核心用户群技术能力强、参与度高——前提是维护者能及时合并，否则热情会流失（#1040、#1556 的关闭即为负面信号）。

---

## 8. 待处理积压

| 项目 | 悬置时长 | 风险 |
|---|---|---|
| [#3416 Sendblue 渠道 PR](https://github.com/sipeed/picoclaw/pull/3416) | ~2 周未合 | 贡献者积极性受挫，PR 体积大易冲突 |
| [#3425](https://github.com/sipeed/picoclaw/pull/3425) / [#3424](https://github.com/sipeed/picoclaw/pull/3424) 修复 PR | 1 周未合 | 高严重度 Bug 拖延修复影响生产用户 |
| [#3422](https://github.com/sipeed/picoclaw/issues/3422) / [#3423](https://github.com/sipeed/picoclaw/issues/3423) | 已标 stale | **仅 1 条评论即被标 stale 不合理**，建议维护者介入 review |
| #3281 被关闭 | — | 19 条评论的性能问题未确认修复即关闭，建议重开或确认修复情况 |

**给维护者的建议**：优先 review 合并 #3424/#3425（小而关键）；对 #3416 给出明确反馈；复核 #3281 的关闭合理性。当前 stale 机制正在误伤活跃但未获响应的贡献。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-10-19

## 1. 今日速览

NanoClaw 今日保持高度活跃：过去 24 小时新增 5 条 Issue（全部为 bug 报告，0 条关闭），PR 活动尤为密集，共 15 条更新（8 条待合并、7 条合并/关闭），无新版本发布。核心团队（@amit-shafnir 等）在 agent 模板创建、跨会话上下文、Docker 文件锁等核心区域连续合并多个修复，推进节奏快。社区侧问题集中在测试稳定性（flaky tests）、环境变量污染和大 transcript 内存处理上，整体处于“高吞吐修 bug + 打磨测试基础设施”阶段，项目健康度良好。

## 2. 版本发布

今日无新版本发布。（注：Issue #4126 提及 v2026.10.0，说明本月初已有版本，下一版本预计将吸纳近期合并的核心修复。）

## 3. 项目进展

今日合并/关闭 7 个 PR，主要进展：

- **模板化创建 Agent（重要功能）**：[#4112](https://github.com/nanocoai/nanoclaw/pull/4112) 允许在聊天中从本机或公共模板库创建 agent，覆盖 agent-runner、配置、CLI、setup 等多个区域；配套的 [#4113](https://github.com/nanocoai/nanoclaw/pull/4113) 让 setup 的模板库选择器改读 `index.json`，取代扫描 `plugin.json` 的旧实现。
- **跨会话上下文修复**：[#4092](https://github.com/nanocoai/nanoclaw/pull/4092) 修复 agent 在多线程 DM/channel 场景下把自己的旧回复误认为另一个 agent 的问题。
- **Docker Desktop 稳定性**：[#4118](https://github.com/nanocoai/nanoclaw/pull/4118) 解决 Docker 文件共享不传递 SQLite 锁导致 `inbound.db` 读取中断 agent 回合的问题。
- **command-gate 安全/隔离**：[#4119](https://github.com/nanocoai/nanoclaw/pull/4119) 阻止权限拒绝回复写入容器的 `outbound.db`。
- **模板创建边界情况**：[#4120](https://github.com/nanocoai/nanoclaw/pull/4120) 处理未启动 group 已占用文件夹名的冲突。
- 另有 lint 修复 [#4122](https://github.com/nanocoai/nanoclaw/pull/4122)（closed）。

整体看，模板化 agent 创建是本日最大功能推进，核心会话/文件一致性修复显著提升了 Docker 部署可靠性。

## 4. 社区热点

今日 5 条新 Issue 均为 0 评论、0 👍，暂无高热度讨论；热度更多体现在 PR 侧：

- [#4090](https://github.com/nanocoai/nanoclaw/pull/4090)（安全加固，approval 卡片以纯文本显示不可信内容，防止 agent CLI 参数注入 markup）——由 core-team 成员推进，反映项目对**权限审批链路注入风险**的持续关注，是多区域（channels/containers/core/ncl-cli）的重要 hardening。
- [#4043](https://github.com/nanocoai/nanoclaw/pull/4043)（Sendblue iMessage/SMS skill）持续更新，社区对**新增消息渠道**的需求明确。

## 5. Bug 与稳定性

今日新报 5 个 bug，按严重程度排列：

1. **高** — [#4127](https://github.com/nanocoai/nanoclaw/issues/4127)：transcript 超过 ~512 MB（Node 字符串上限）后 `/add-dashboard` 停止更新。**已有 fix PR [#4086](https://github.com/nanocoai/nanoclaw/pull/4086)**（流式读取，不整文件加载），待合并。
2. **中** — [#4125](https://github.com/nanocoai/nanoclaw/issues/4125)：Signal managed-daemon 启动失败未标记 `NetworkError`，导致 setup 重试逻辑永不触发（主机启动早于网络就绪时必现）。暂无 fix PR。
3. **中** — [#4124](https://github.com/nanocoai/nanoclaw/issues/4124)：`bash nanoclaw.sh` setup 时 AWS 报 "no basic auth credentials"，部分 Docker 镜像拉取失败。暂无 fix PR。
4. **低（测试）** — [#4126](https://github.com/nanocoai/nanoclaw/issues/4126)：宿主机环境变量 `NANOCLAW_CHANNELS_REMOTE` 污染导致 `slack-auto.test.ts` 失败。
5. **低（测试）** — [#4123](https://github.com/nanocoai/nanoclaw/issues/4123)：`selection.test.ts` 偶发 flaky（2 次全量 vitest 中 1 次失败）。

值得注意的是，5/5 均为 Linux 平台报告，且 2 个为测试基础设施问题，提示 CI 环境隔离需要系统性改进。

## 6. 功能请求与路线图信号

- **模板化 agent 生态**：#4112 + #4113 已合并，“公共模板库 + 聊天内创建 agent”成为明确方向，预计下一版本将重点发布。
- **渠道扩展**：[#4043](https://github.com/nanocoai/nanoclaw/pull/4043)（Sendblue iMessage/SMS）持续活跃；Telegram 修复 [#3449](https://github.com/nanocoai/nanoclaw/pull/3449) 和两个 WhatsApp 修复（[#3751](https://github.com/nanocoai/nanoclaw/pull/3751)、[#3752](https://github.com/nanocoai/nanoclaw/pull/3752)）仍在待合并状态，channels 是 PR 积压最重的区域。
- **安全加固路线**：#4090 表明审批链路的注入防护是 core-team 主动投入方向。

## 7. 用户反馈摘要

今日 Issue 均为单条报告、无后续评论，可提炼的痛点：

- **长时间运行/重负载场景**：用户（@NechuBM）实际运行中 transcript 增长到 512 MB 以上，说明存在重生产使用，且对大文件处理有真实需求。
- **首次安装体验脆弱**：AWS 认证错误（#4124）和网络未就绪即启动（#4125）都发生在 setup 阶段，提示新用户 onboarding 的容错性不足——重试逻辑存在但覆盖不全。
- **贡献者环境差异**：两条测试 bug（#4126、#4123）均来自外部贡献者的本地环境，测试对宿主机状态的隔离不充分。

## 8. 待处理积压

- **[#3449](https://github.com/nanocoai/nanoclaw/pull/3449)**（Telegram allowedUpdates 修复）：2026-08-22 开启，已近 **2 个月**未合并，今日有更新，建议维护者优先评审。
- **[#3751](https://github.com/nanocoai/nanoclaw/pull/3751) / [#3752](https://github.com/nanocoai/nanoclaw/pull/3752)**（WhatsApp 修复，@horsehcj）：9 月初开启，积压 **6 周+**，仍在待合并。
- 今日 5 条新 Issue 均无维护者回复，其中 #4125（Signal setup 重试失效）和 #4124（AWS 认证）影响新用户安装，建议尽快分派处理。

---

*数据来源：NanoClaw GitHub 仓库，统计窗口 2026-10-18 至 2026-10-19。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报（2026-10-19）

## 1. 今日速览

IronClaw 今日整体活跃度**中等偏低**，无新开 Issue，无新版本发布。过去 24 小时共 8 条 PR 更新（6 条待合并、2 条关闭）和 1 条 Issue 关闭。项目当前工作重心明显集中在**依赖维护**上——dependabot 生成的依赖升级 PR 占据了待合并队列的绝大多数。一个积压近两个月的用户 Bug（#8025）于昨日关闭，是今日最值得关注的进展。

## 2. 版本发布

今日无新版本发布。（可关注仓库 Releases 页面获取后续更新）

## 3. 项目进展

今日无新合并的 PR，但有以下关闭动作：

- **PR #8134 [CLOSED]**（[链接](https://github.com/nearai/ironclaw/pull/8134)）：上周的 everything-else 依赖组 34 项批量升级被关闭，由今日新开的更大范围 PR #8142（41 项更新，含 `thiserror 2.0.20→2.0.21`、`uuid 1.24.0→1.28.0`、`base64` 等）替代，属于依赖升级的滚动刷新策略。
- **PR #8132 [CLOSED]**（[链接](https://github.com/nearai/ironclaw/pull/8132)）：tokio 生态组 4 项升级被关闭，由 PR #8141（5 项更新，含 `tokio 1.53.1→1.53.3`、`tokio-test 0.4.5→0.4.6`、`tokio-util` 等）接替。
- **Issue #8025 关闭**（[链接](https://github.com/nearai/ironclaw/issues/8025)）：输入字段特殊字符处理 Bug 已关闭（详见第 5 节）。

**评估**：今日为典型的“维护日”，依赖链持续保鲜，但功能性进展有限。待合并队列中最具功能价值的是 **PR #8127 Sendblue iMessage/SMS 扩展**（见第 6 节）。

## 4. 社区热点

今日数据中无高评论、高 👍 的讨论帖。相对值得关注的是：

- **PR #8127**（[链接](https://github.com/nearai/ironclaw/pull/8127)）：Sendblue 扩展是唯一由真人贡献者（@lookevink）提交的功能性 PR，持续活跃至 10-18，涉及 iMessage/SMS 直连能力，属于 AI 助手触达渠道扩展的重要方向。
- **PR #8133**（[链接](https://github.com/nearai/ironclaw/pull/8133)）：GitHub Actions 组 10 项升级，其中 `anthropics/claude-code-action 1.0.183→1.0.247` 跨度较大（64 个次版本），暗示项目 CI 中已深度集成 AI 辅助工作流。

## 5. Bug 与稳定性

| 问题 | 严重程度 | 状态 |
|---|---|---|
| [#8025](https://github.com/nearai/ironclaw/issues/8025) 输入字段特殊字符导致字符被剥离或报错 | 中（影响输入正确性，用户猜测与上次 release 的编码变更相关的回归） | ✅ 已于 10-18 关闭，但公开数据中**未见对应 fix PR**，建议确认修复已随某次提交落地 |

无崩溃类、高严重度新 Bug 报告。

## 6. 功能请求与路线图信号

- **Sendblue iMessage/SMS 扩展**（[PR #8127](https://github.com/nearai/ironclaw/pull/8127)）：新增捆绑式 Sendblue 扩展，支持手机配对、鉴权接收 webhook、终端回复、DM 目标存储，复用现有 host 生命周期与对话路径；API 凭据由 host 托管。**信号**：项目正向“多消息渠道个人 AI 助手”方向扩展，若合入大概率出现在下一版本中。
- **wasm 组升级**（[PR #7834](https://github.com/nearai/ironclaw/pull/7834)）：wasmtime / WASI / wit-component 等 4 项升级，标注 `size: L, risk: medium`，表明 wasm 运行时是核心架构组件，项目对扩展沙箱化有长期投入。
- 今日无新的用户功能请求 Issue。

## 7. 用户反馈摘要

样本量较小（仅 #8025 一条）：

- **痛点**：用户在输入含特殊字符时遭遇输出错误（字符被剥离或报错），期望正确转义处理；用户自行定位怀疑与最近一次 release 的编码变更相关，说明**回归测试在编码/转义场景覆盖不足**。
- 该 Issue 从 2026-09-01 提交到 10-18 才关闭，**响应周期约 7 周**，对单人报告的边缘 Bug 响应偏慢。

## 8. 待处理积压

- **PR #7834**（[链接](https://github.com/nearai/ironclaw/pull/7834)）：wasm 组依赖升级，2026-08-23 创建，**已积压近 2 个月**，且标注 `size: L, risk: medium`。wasmtime 版本落后可能导致后续依赖合并冲突，建议维护者优先排期评审或明确关闭原因。
- **PR #8133**（[链接](https://github.com/nearai/ironclaw/pull/8133)）与 **PR #8127**（[链接](https://github.com/nearai/ironclaw/pull/8127)）：均自 10-06/10-11 起持续 open，功能 PR #8127 尤其需要维护者评审推进，避免贡献者流失。

---
*数据来源：GitHub API（统计窗口：过去 24 小时）。本报告由自动化数据分析生成，链接均为 nearai/ironclaw 仓库内条目。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-10-19** | 仓库：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

今日项目呈现“开发活跃、社区静默”的典型维护者主导态势：过去 24 小时无任何 Issue 更新，但 PR 活动达 5 条（3 条待合并、2 条已关闭）。核心贡献者 @fisherdaddy 一人推进了 4 条技术含量较高的 PR，覆盖配置持久化、多协议模型接入、架构清理（删除约 3500 行遗留代理代码）和磁盘占用治理等方向。整体来看，项目正处于 2026.10.19 版本发布前的密集重构与功能收敛期，工程推进节奏健康，但社区外部参与度偏低，值得引起关注。

---

## 2. 版本发布

今日无新版本发布。值得注意的是，[PR #2898](https://github.com/netease-youdao/LobsterAI/pull/2898) 明确提到将在 #2897 合并后切换 base 到 `release/2026.10.19` 分支，暗示**近期有一次版本发布计划**，可密切关注 Releases 页面。

---

## 3. 项目进展

今日已关闭 2 条 PR，均有实质性架构推进：

- **[PR #2898](https://github.com/netease-youdao/LobsterAI/pull/2898)（已关闭）** — 移除 Claude Agent SDK 时代的 OpenAI 兼容代理（`coworkOpenAICompatProxy.ts` 与 `coworkFormatTransform.ts`，约 3500 行）。此举建立在 #2897 直接复用 OpenClaw 原生 transport 的基础上，是一次**显著的架构减负**，降低了协议转换层的维护成本和出错面。属于破坏性内部变更，下版本需重点回归测试自定义模型接入场景。
- **[PR #2893](https://github.com/netease-youdao/LobsterAI/pull/2893)（已关闭）** — 修复长期运行安装目录膨胀至 ~17GB 的问题，从 LobsterAI 侧对 OpenClaw 修复备份和运行时缓存设置容量上限，无需 OpenClaw 补丁。这是对真实用户痛点（磁盘占满）的针对性修复，**稳定性价值较高**。

待合并的 3 条 PR（见第 6 节）延续了模型接入多元化和桌面体验增强两条主线。总体而言，项目今日在“多协议接入 + 代码瘦身 + 资源治理”三个方向均有实质进展。

---

## 4. 社区热点

今日无 Issue 活动，PR 评论数据缺失（undefined），**无法识别明确的社区热点讨论**。从 PR 议题可间接推断的用户诉求：

- 配置文件被覆盖导致手工修改丢失（#2896）
- 磁盘占用无限增长（#2893，源自真实长期使用场景）
- 桌面伙伴皮肤个性化（#2894）

建议维护者关注社区互动缺位的情况，可通过发布计划说明、issue 模板优化等方式激活外部参与。

---

## 5. Bug 与稳定性

今日无新报告的 Bug/崩溃 Issue。已关闭的修复类 PR：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 高（影响长期用户） | 磁盘占用无限增长至 ~17GB（#2893） | ✅ 已关闭，修复待随版本发布 |

待合并的 #2896 也可视为对“用户配置被静默覆盖”这一数据丢失类问题的修复，建议优先合入。

---

## 6. 功能请求与路线图信号

今日无用户侧功能请求 Issue，但 3 条待合并 PR 揭示了下版本路线图：

- **[PR #2896](https://github.com/netease-youdao/LobsterAI/pull/2896)**：`openclaw.user.json` 跨配置同步保留用户覆盖项，兼顾插件启用等手工定制与自动同步——体现“配置可定制性”方向。
- **[PR #2897](https://github.com/netease-youdao/LobsterAI/pull/2897)**：自定义模型提供商新增 **OpenAI Responses** 与 **Gemini 原生（generateContent）** 格式支持，全部复用 OpenClaw 原生 transport，不引入 LobsterAI 侧协议代码——是 #2898 大规模删除的前提，**建议作为合并优先级最高的 PR**。
- **[PR #2894](https://github.com/netease-youdao/LobsterAI/pull/2894)（@alison-xx）**：桌面伙伴自定义皮肤（含动态 GIF）、多皮肤管理与截图工具——面向 C 端体验的差异化功能。

**判断**：#2896、#2897（+ #2898 已关闭收尾）大概率进入 2026.10.19 版本；#2894 体量较大，合并节奏取决于 review 进度。

---

## 7. 用户反馈摘要

今日无 Issue 评论可供提炼。间接信号来自 PR 描述中的真实场景：

- **痛点**：长期安装后应用数据目录膨胀至 ~17GB（#2893）；每次重启配置被重新生成、手工定制丢失（#2896）——均指向**长期使用可靠性**而非新功能。
- **场景**：用户通过手改 `openclaw.json` 启用增强插件、接入自定义模型端点（OpenAI/Gemini 格式），说明存在一批高阶自托管用户群体。

---

## 8. 待处理积压

- 3 条待合并 PR（[#2896](https://github.com/netaise-youdao/LobsterAI/pull/2896)、[#2897](https://github.com/netease-youdao/LobsterAI/pull/2897)、[#2894](https://github.com/netease-youdao/LobsterAI/pull/2894)）评论数与 👍 均为 0，**缺乏 review 信号**。其中 #2897 是 #2898 的栈式依赖、且关联版本分支切换，建议维护者优先 review。
- Issue 区零活动持续，建议检查是否存在 issue 通道反馈不畅（如入口隐藏、模板门槛高）的问题。

---

**健康度小结**：工程推进 ⭐⭐⭐⭐ | 社区参与 ⭐⭐ | 稳定性修复 ⭐⭐⭐⭐。项目由核心维护者高效驱动，版本发布在即，当前最大风险在于外部反馈渠道的沉寂。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-10-19）

## 1. 今日速览

Moltis 今日整体活跃度**中等偏低**：过去 24 小时无新增 Issue、无新版本发布，但有 3 条 PR 更新（1 个待合并、2 个已关闭/合并）。值得注意的是，两个已关闭的 PR 均为重量级改动——一个是 Discord DM 分类修复，另一个是全新的原生 gpui 桌面客户端，表明项目正处于**功能扩张期**。今日无 Bug 报告流入，稳定性信号良好，但 Issue 渠道的沉寂也值得留意。

## 2. 版本发布

今日无新版本发布，最新 Releases 为空。考虑到桌面客户端（PR #1306）刚落地，下一个版本可能值得期待。

## 3. 项目进展

### ✅ 已合并/关闭

**① [PR #1306](https://github.com/moltis-org/moltis/pull/1306) — feat: native gpui desktop client (apps/desktop) and moltis-client crate**
- 作者：@penso | 创建于 10-17，10-18 关闭
- 这是本周最大进展：引入基于 Rust/gpui 的**原生桌面客户端**（`apps/desktop`）及 `moltis-client` crate。架构上采用“连接运行中的 moltis daemon”而非内嵌模式——退出应用时 daemon 保持运行，支持本地连接、HTTPS 远程连接及 SSH 隧道。这标志着 Moltis 从纯后端/服务形态向完整桌面产品形态迈出的重要一步。

**② [PR #1295](https://github.com/moltis-org/moltis/pull/1295) — fix(discord): classify direct messages as direct chats**
- 作者：@tomachianura | 创建于 10-05，10-18 关闭
- 修复 Discord 渠道的会话分类错误：此前所有 Discord 聊天被硬编码为共享会话（`ChannelType::Discord => true`），导致操作员与 bot 的 1:1 DM 也以共享模式运行。此修复提升了多渠道场景下的隐私语义正确性。

### 🔶 待合并

**③ [PR #1308](https://github.com/moltis-org/moltis/pull/1308) — fix(agents): bind New Chat to default_id, not previous session**
- 作者：@ManuRakh | 10-18 新开
- 修复一个体验层面的 Agent 逻辑缺陷：`agents.set_default` 虽正确持久化，但 **New Chat** 仍沿用上一会话的 agent（`sessions.switch` 对全新 key 也设置 `inherit_agent_from`）；另外 `resolve_prompt_agent_id` / `chat.send` 回退到硬编码的 `"main"`。等待 review 中。

**小结**：今日一进一出加一待审，桌面客户端落地 + Discord 修复，项目在产品化道路上前进明显。

## 4. 社区热点

今日无评论、无 👍 反应、无活跃 Issue 讨论（评论数均为 0/undefined）。@penso 的桌面客户端 PR（#1306）凭其体量与战略意义可视为本周事实上的焦点，但社区讨论热度暂时未跟上代码产出。

## 5. Bug 与稳定性

今日无新报告的 Bug。已知修复情况：

| 问题 | 严重程度 | 状态 |
|---|---|---|
| Discord DM 被误分类为共享会话（隐私语义错误） | 中 | ✅ 已修复（[PR #1295](https://github.com/moltis-org/moltis/pull/1295)） |
| New Chat 继承上一会话 agent 而非默认 agent | 中（核心交互逻辑） | 🔶 修复中（[PR #1308](https://github.com/moltis-org/moltis/pull/1308)，待合并） |

## 6. 功能请求与路线图信号

今日无新的功能请求，但从近期 PR 可推断路线图方向：

- **桌面端优先**：gpui 原生客户端（#1306）+ 独立 `moltis-client` crate 暗示官方正在构建客户端生态，未来可能出现更多客户端（移动端/CLI）复用该 crate。
- **多渠道深化**：Discord 分类修复（#1295）表明渠道语义精细化是持续投入方向。
- 建议关注 #1308 合并后 Agent 默认绑定行为是否进入下个 release 说明。

## 7. 用户反馈摘要

今日无 Issue 评论可供提炼。间接信号：PR 中描述的场景（如“操作员与 bot 的 1:1 DM”、“New Chat 期望使用默认 agent”）反映了真实使用痛点——**多渠道运营中的会话隔离**与 **Agent 切换的可预期性**。

## 8. 待处理积压

- [PR #1308](https://github.com/moltis-org/moltis/pull/1308)：今日新开、待合并，建议维护者尽快 review，避免与后续 agent/session 改动冲突。
- [PR #1295](https://github.com/moltis-org/moltis/pull/1295)：已关闭，需确认是已合并还是被拒（数据未区分），如是后者建议给出替代方案。
- Issue 通道连续 24 小时零活跃，建议维护者主动巡检旧 Issue，防止反馈流失。

---

*数据来源：GitHub API（过去 24 小时窗口）。本报告基于自动化数据生成，评论数缺失（undefined）项已如实标注。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 · 2026-10-19

## 1. 今日速览

- 过去 24 小时共 15 条 Issue 更新（新开/活跃 14，关闭 1）、17 条 PR 更新（待合并 16，关闭 1），**社区贡献流水线保持高度活跃**，但今日无 PR 合并、无版本发布。
- 老牌贡献者 **@hehuang139** 一人贡献 6 个修复 PR（ZIP 编码、QQ 群消息、Ollama 发现、Matrix 凭据、自定义通道配置、CLI），覆盖近期多个高热度 Issue，是本周最突出的修复主力。
- 问题焦点集中在 **2.2.2 版本的通道层**（QQ 群消息丢失、飞书代理 426、钉钉降级）和 **长上下文管理**（空响应不报错、context 超限中断）。
- 整体健康度良好：新 Bug 均有人跟进且多数已有对应 fix PR，但长尾老 Issue（如 #6601、#7827）响应偏慢。

## 2. 版本发布

今日无新版本发布。2.2.2 于 2026-10-15 发布后仍处于问题收敛期，多个修复 PR 正在排队等待合并，预计将进入下一个 patch 版本。

## 3. 项目进展

今日无 PR 合并，但有 1 个 PR 关闭、16 个待合并 PR 持续活跃，其中多个直接对应本周高优 Issue：

| PR | 内容 | 对应 Issue |
|---|---|---|
| [#8301](https://github.com/agentscope-ai/QwenPaw/pull/8301) (Under Review, M) | 修复中文 Windows ZIP 文件名 CP437 乱码，解码时尊重 UTF-8 与 CRC 校验 | #8270 |
| [#8319](https://github.com/agentscope-ai/QwenPaw/pull/8319) (S) | QQ 网关新增 `GROUP_MESSAGE_CREATE` 事件处理，修复群消息静默丢弃 | #8313 |
| [#8305](https://github.com/agentscope-ai/QwenPaw/pull/8305) (M) | 自定义通道配置中数组/对象字段以 JSON 编辑器渲染，修复 `[object Object]` | #1612 |
| [#8304](https://github.com/agentscope-ai/QwenPaw/pull/8304) (S) | Matrix 凭据粘贴去除首尾空格 | #2882 |
| [#8316](https://github.com/agentscope-ai/QwenPaw/pull/8316) (M) | Console 支持子路径部署（`VITE_CONSOLE_BASENAME`），修复反代空白屏 | — |
| [#8318](https://github.com/agentscope-ai/QwenPaw/pull/8318) (M) | 新增 `/steer` 命令，允许在 Agent 执行中途注入引导而不中断 | #1775 |

**评估**：修复流水线覆盖了本周 Bug 报告的约 40%，特别是 2.2.2 通道回归问题已有完整修复方案。大型功能 PR（#8240 模型管理重构 XXL、#8283 工具审批安全模式 XL、#7569 Advisor Mode XXXL）持续更新，显示核心功能演进仍在推进。

## 4. 社区热点

1. **[#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) QwenPaw 空响应不报错**（评论 6，7 月底提出，今日仍活跃）—— 长会话逼近窗口上限时模型返回空响应但框架层无任何报错，导致会话"彻底失联"。属于框架层健壮性问题，诉求是**为空响应增加显式错误信号**。
2. **[#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) 钉钉 >3500 字符静默降级纯文本**（评论 6）—— 数据报表/表格类长回复是重灾区，用户核心诉求不是"降级"本身，而是**降级必须可感知、且应复用已有 split_text 分片而非整条丢弃格式**。
3. **[#8313](https://github.com/agentscope-ai/QwenPaw/issues/8313) QQ 群消息静默丢弃**（评论 3，今日更新）—— 2.2.2 回归，网关已连接但群消息无人应答，诊断明确指向事件注册遗漏，已有 fix PR #8319 当日提交，社区响应速度值得肯定。
4. **[#8311](https://github.com/agentscope-ai/QwenPaw/issues/8311) 鸿蒙插件宿主契约标准化提案**—— 第三方维护者贡献 45k 行 ArkTS 原生 App，请求官方统一 `window.QwenPaw` 契约、数据面桥与分发验签，是**生态共建层面最重要的信号**，值得维护者优先回应。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue | 问题 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#8312](https://github.com/agentscope-ai/QwenPaw/issues/8312) | 上下文压缩失效，`codemode-flash` 请求 252565 > 251904 tokens，任务直接中断 | ❌ 暂无 PR |
| 🔴 高 | [#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) | 空响应不报错，长会话失联（框架层） | ❌ 暂无 PR，长期未解 |
| 🔴 高 | [#8313](https://github.com/agentscope-ai/QwenPaw/issues/8313) | 2.2.2 QQ 群消息静默丢弃 | ✅ PR [#8319](https://github.com/agentscope-ai/QwenPaw/pull/8319) 当日提交 |
| 🟠 中 | [#8315](https://github.com/agentscope-ai/QwenPaw/issues/8315) | 代理环境下飞书通道 426 Upgrade Required（NO_PROXY 未含 feishu.cn） | ❌ 暂无 PR |
| 🟠 中 | [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) | 钉钉长消息静默降级纯文本 | ❌ 暂无 PR |
| 🟠 中 | [#8270](https://github.com/agentscope-ai/QwenPaw/issues/8270) | Windows ZIP 中文乱码（store.py / hub.py 未传 encoding） | ✅ PR #8301 已 Under Review |
| 🟡 低 | [#8306](https://github.com/agentscope-ai/QwenPaw/issues/8306) | 原子写入临时文件名追加 22 字节导致合法长文件名写入失败 | ❌ 暂无 PR |

已关闭：[#8300](https://github.com/agentscope-ai/QwenPaw/issues/8300) Console 发送后输入框不清空（v2.2.2 队列分支问题）。

## 6. 功能请求与路线图信号

- **QQ Bot 流式消息**（[#8307](https://github.com/agentscope-ai/QwenPaw/issues/8307)）：官方 API 已支持，用户希望对齐飞书通道的流式设置。官方 API 已就绪 + 实现路径清晰，**较可能进入下一版本**。
- **模型切换体验优化 + 思考深度控制**（[#8310](https://github.com/agentscope-ai/QwenPaw/issues/8310)）：模型收藏夹、解锁思考深度。与进行中的 [#8240](https://github.com/agentscope-ai/QwenPaw/pull/8240)（模型管理体验重构 XXL）方向一致，**很可能被吸收进该 PR 范围**。
- **DeepSeek Search 搜索源**（PR [#8314](https://github.com/agentscope-ai/QwenPaw/pull/8314)，首次贡献者）：提供带发布日期与权威度分级的结构化结果，复用已有 DeepSeek API Key，评审通过概率高。
- **执行中途引导**（PR [#8318](https://github.com/agentscope-ai/QwenPaw/pull/8318) `/steer` 命令）：Agent 控制粒度的补强。
- **鸿蒙插件宿主标准化**（#8311）：战略级生态提案，短期未必落地，但应纳入路线图讨论。

## 7. 用户反馈摘要

- **长回复场景痛点集中**：钉钉/表格用户反映"最需要格式渲染的回复恰恰会掉进纯文本降级区"，静默降级让用户只能人肉记住 3000 字符限制。
- **企业代理环境用户**（#8315）反馈部署文档未覆盖 NO_PROXY 配置，WebSocket 长连接反复失败且报错不直观。
- **满意度方面**：2.2.2 的**每会话指定模型**功能获好评（"很好！"），但交互层级被批评过深；QQ 群消息问题因诊断信息清晰、fix PR 当日跟进，社区反馈积极。
- **数据报表/长任务用户**受上下文超限中断（#8312）影响最重，压缩机制在边界场景失效且恢复建议（减工具、开新会话）对长任务不可接受。

## 8. 待处理积压

| Issue/PR | 天数 | 说明 |
|---|---|---|
| [#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) 空响应不报错 | ~80 天 | 框架层健壮性核心问题，6 条评论仍在等官方回应，**最需优先表态** |
| [#1453](https://github.com/agentscope-ai/QwenPaw/issues/1453) 离线安装无法连接千问 3/3.5 | ~220 天 | 离线/私有化部署用户长期痛点，仅 4 条评论 |
| [#7827](https://github.com/agentscope-ai/QwenPaw/issues/7827) DashScope MCP streamable_http 驱动无法激活 | ~32 天 | 阻碍阿里云 MCP 生态接入，涉及协议探测逻辑修正 |
| [#1612](https://github.com/agentscope-ai/QwenPaw/issues/1612) 自定义通道 `[object Object]` | ~216 天 | 已有 PR #8305 提交，**建议尽快评审合并** |
| [#2882](https://github.com/agentscope-ai/QwenPaw/issues/2882) Matrix 凭据空格 | ~199 天 | 已有 PR #8304，同样待评审 |
| PR [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) Advisor Mode (XXXL) | ~44 天 | 大型功能 PR 长期在审，需要维护者给出明确节奏预期 |

**维护者提醒**：#8301、#8305、#8304、#8319 四个修复 PR 直接对应 3 个长期积压 + 1 个 2.2.2 回归 Issue，集中评审合并这批 PR 即可一次性清掉大量积压，建议作为本周优先事项。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-10-19）

> 数据来源：[qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw) GitHub 仓库，统计周期为过去 24 小时。

---

## 1. 今日速览

ZeptoClaw 今日保持单维护者高节奏推进的状态，共产生 2 条 Issue 更新（1 开 1 关）和 2 条 PR 更新（1 开 1 关），无新版本发布。核心动态集中在两个 **P2-high** 修复上：一是 `zeptoclaw serve` OpenAI 兼容 API 完全无鉴权的安全问题（[Issue #713](https://github.com/qhkm/zeptoclaw/issues/713) → [PR #714](https://github.com/qhkm/zeptoclaw/pull/714)），二是 Anthropic 缓存 token 未计入预算与成本的计量偏差（[Issue #711](https://github.com/qhkm/zeptoclaw/issues/711)，已由 [PR #712](https://github.com/qhkm/zeptoclaw/pull/712) 关闭修复）。从 Issue 提出到 PR 修复均在同日完成，问题响应闭环效率极高。今日无新增外部贡献者和社区讨论，活跃度全部来自维护者 @qhkm 本人，属于典型的“自驱式快速迭代”阶段。

---

## 2. 版本发布

今日无新版本发布。鉴于 #711/#712 和 #713/#714 两组修复均影响成本计量与 API 安全，建议关注后续是否会有集中打包的 patch 版本发布。

---

## 3. 项目进展

### ✅ 已合并/关闭

- **[PR #712](https://github.com/qhkm/zeptoclaw/pull/712) — fix(providers): 将 Anthropic 缓存 token 计入预算与成本**（关闭 [Issue #711](https://github.com/qhkm/zeptoclaw/issues/711)）
  - 背景：自 #710 启用 Anthropic prompt caching 后，Claude 响应将输入 token 拆分为三个计数器（`input_tokens` 仅含未命中缓存的尾部、`cache_read_input_tokens` 按 ~0.1x 计费、`cache_creation_input_tokens` 按 ~1.25x 计费），而 provider 层此前直接丢弃了后两者。
  - 影响：长上下文场景下 token 预算、metrics 和配额成本普遍被低估（大部分 prompt 可能来自缓存），此次修复使计量恢复准确，直接影响多租户/配额类使用场景的可信度。

### 🔄 待合并

- **[PR #714](https://github.com/qhkm/zeptoclaw/pull/714) — fix(serve): OpenAI 兼容 serve API 强制要求 API Key**
  - 在设置 `ZEPTOCLAW_SERVE_API_KEY` 或 `--api-key` 后，所有 `/v1/*` 请求均需携带凭证，堵住了非回环 `--bind` 场景下“任何能访问端口的人都能用任意模型消耗操作者 provider credits”的漏洞。

**整体评估**：项目一天内完成了一组计量正确性修复（已落地）+ 一组安全修复（已提 PR 待合并），与 #710 的 prompt caching 功能形成了完整的“功能引入 → 副作用发现 → 快速修复”迭代闭环，向前迈进了扎实的一步。

---

## 4. 社区热点

今日所有 Issue/PR 均为 0 评论、0 👍，无社区讨论热点。两个 P2-high 问题（[#713](https://github.com/qhkm/zeptoclaw/issues/713)、[#711](https://github.com/qhkm/zeptoclaw/issues/711)）均由维护者 @qhkm 自己发现并跟进，反映出项目尚处于早期自维护阶段，外部用户社区参与度有限。若要提升社区活跃度，可考虑在修复安全类问题时附上复现步骤与安全公告，吸引部署用户关注。

---

## 5. Bug 与稳定性（按严重程度排列）

| 级别 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🔴 P2-high（安全） | [#713](https://github.com/qhkm/zeptoclaw/issues/713) `zeptoclaw serve` 的 `POST /v1/chat/completions` 与 `GET /v1/models` 完全无鉴权；默认绑定 `127.0.0.1` 但不阻止 `--bind` 暴露到非受信网络，可被任意调用者消耗 provider credits | OPEN | ✅ 已有 [PR #714](https://github.com/qhkm/zeptoclaw/pull/714)，待合并 |
| 🔴 P2-high（计量） | [#711](https://github.com/qhkm/zeptoclaw/issues/711) Anthropic 缓存 token（`cache_read_input_tokens` / `cache_creation_input_tokens`）被丢弃，导致 token 预算、metrics、配额成本系统性低估 | ✅ CLOSED | ✅ [PR #712](https://github.com/qhkm/zeptoclaw/pull/712) 已关闭 |

今日无崩溃或回归类报告。两个 bug 均已有对应修复路径，风险可控。

---

## 6. 功能请求与路线图信号

今日无显式功能请求，但从动态可推断路线图方向：

- **Serve API 安全加固**：#713/#714 表明维护者正推动 `zeptoclaw serve` 从“本地/受信网络专用”向可对外部署演进。鉴权只是第一步，后续可能跟进 TLS、速率限制、多 Key 管理等。
- **成本计量精细化**：#711/#712 显示项目对 token 成本核算的准确性有明确要求（含缓存差异化费率 0.1x / 1.25x），预示后续可能对其他 provider 的缓存/批量计费字段做同样对齐。

---

## 7. 用户反馈摘要

今日 Issue/PR 评论数为 0，无直接用户反馈可提炼。从问题本身的写法可间接看出维护者视角的关切点：

- **部署安全诉求**：serve API 无鉴权被明确定位为安全问题并标注 `area:safety`，说明“暴露到非回环地址会被盗刷 provider credits”是被认真对待的现实风险。
- **成本可观测性**：缓存 token 计费问题说明存在依赖预算/配额做成本控制的真实使用场景，用户（即使是维护者自己）需要准确的 token 级计量。

---

## 8. 待处理积压

- **[PR #714](https://github.com/qhkm/zeptoclaw/pull/714)**：安全修复，当前 OPEN 待合并。鉴于其 P2-high 安全属性，建议优先 review 合并，并在合并后评估是否需要发布安全公告提醒已对外暴露 serve 端口的用户。
- **[Issue #713](https://github.com/qhkm/zeptoclaw/issues/713)**：将随 #714 合并关闭，建议保持关联以便追溯。

当前积压量极小（各 1 条，且均为今日新增），无长期未响应项目，项目健康度良好；主要风险在于单维护者模式下外部反馈缺位，建议关注社区渠道建设。

---

*本报告基于 GitHub 公开数据自动生成，如有出入请以仓库实际状态为准。*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*