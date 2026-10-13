# OpenClaw 生态日报 2026-10-13

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-13 05:59 UTC

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

# OpenClaw 项目动态日报 — 2026-10-13

## 1. 今日速览

OpenClaw 今日保持高度活跃：过去 24 小时 Issues 更新 500 条（新开/活跃 315，关闭 185），PR 更新 500 条（待合并 356，已合并/关闭 144），并发布了 beta 新版本 **v2026.10.5-beta.2**。核心维护者 @steipete 今日密集提交了十余个 Gateway 稳定性/性能修复 PR，重点围绕更新流程可靠性、SQLite 并发访问和大集群启动性能。社区关注焦点集中在 Gateway 内存泄漏（#91588，39 条评论）和 Windows 平台的更新 handoff 卡死问题（#146860）。总体健康度：修复吞吐量大、响应速度快，但 P0 级稳定性问题（OOM、SQLite 损坏、Windows 卡死）长期悬而未决，值得警惕。

---

## 2. 版本发布

### v2026.10.5-beta.2 ([Release](https://github.com/openclaw/openclaw/releases))

**核心更新：Updates finish and recover**
- `openclaw update` 现在能正确处理过期的 handoff 租约、已完成的回执以及遗留的 2026.9.8 恢复记录，不再卡死在 `update-recovery-pending`
- 更新过程中保留 service heap limit 和 webhook 监听器
- 处理 Windows 短路径问题（发布说明被截断，具体细节请查看完整 Release Notes）

**迁移注意：** 该版本主要针对更新机制本身的健壮性，建议受 #146860、#170331 等更新卡死问题困扰的用户在隔离环境先行验证。已有用户报告 beta.1→beta.2 升级中出现 candidate config reader 失败（#170331），说明更新链路仍有边角问题。

---

## 3. 项目进展

今日 @steipete 主导了一批高质量修复 PR，且多数围绕近期 Issue 中暴露的系统性问题：

**Gateway 稳定性与性能**
- [#170696](https://github.com/openclaw/openclaw/pull/170696) fix(gateway): 更新在启动负载下保持响应——修复受管部署验收超时导致的回滚重复失败
- [#170612](https://github.com/openclaw/openclaw/pull/170612) fix(gateway): 减少大型 agent 集群就绪后的停顿（修复 #170226，关联 #168955 启动回归）
- [#170699](https://github.com/openclaw/openclaw/pull/170699) fix(gateway): 恢复在 recovery marker 写入前已完成 restart-abort 清理的会话
- [#170685](https://github.com/openclaw/openclaw/pull/170685) fix: 配置验证期间不再阻塞 SQLite 快照（#170230 后续）
- [#169580](https://github.com/openclaw/openclaw/pull/169580) fix(state): Gateway 状态消费者迁移至现有 worker（缓解主线程同步 SQLite 压力）

**认证与凭据安全**
- [#170632](https://github.com/openclaw/openclaw/pull/170632)（已关闭）fix(auth): 发布同步 SDK 凭据变更，封堵 Gateway 发布生命周期之外的写入路径
- [#170656](https://github.com/openclaw/openclaw/pull/170656) perf(codex): 在 fetch 边界使用 owner-held 凭据，消除主线程 SQLite 重读

**UX / 通道修复**
- [#170705](https://github.com/openclaw/openclaw/pull/170705) fix(ui): 为无回复结束的 run 显示 commentary 与 "Interrupted" 状态
- [#170690](https://github.com/openclaw/openclaw/pull/170690) fix(telegram): 文本跟进消息等待待下载的图片相册
- [#170675](https://github.com/openclaw/openclaw/pull/170675)（已关闭）fix: 防止回复重试后出现虚假失败警告

**工程效率**
- [#170702](https://github.com/openclaw/openclaw/pull/170702) ci: 为 2026.10.5-beta.3 的扩展包边界检查放宽托管 runner 的时间限制——暗示 beta.3 已在准备中
- [#170704](https://github.com/openclaw/openclaw/pull/170704) fix(release): closeout 时强制校验官网下载已是最新（2026.10.2 曾出现官网仍提供 2026.10.1 的情况）

**评估：** 今日 144 个 PR 合并/关闭，修复节奏与 Issue 涌入基本匹配；automations 大重构（[#167796](https://github.com/openclaw/openclaw/pull/167796)，退役旧 executor）持续推进，是架构层面最大的在建工程。

---

## 4. 社区热点

| Issue | 评论 | 主题 |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 39 | **Gateway 内存泄漏 P0**：RSS 从 350MB 数天内涨至 15.5GB，反复被 OOM killer 杀死，触发 launchd-handoff 重启循环。运行 4 个月未关闭，是全站最痛的问题 |
| [#159356](https://github.com/openclaw/openclaw/issues/159356) | 26 | llama.cpp manager 谎报 ready 但 embedding 子进程已退出，embedding 请求返回 HTTP 500；用户通过扩容 RAM 至 8GB 自行缓解，指向内存压力根因 |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | 20 | WhatsApp 断线重连后 backfill 缺失消息被静默丢弃——对生产监控场景是硬伤，P1 且开放 7 个月 |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 20 | 2026.9.6 回归：捕获大型外部插件时 Gateway 事件循环阻塞数分钟（P0） |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 18 | hook/tool 子进程泄漏产生僵尸进程，长期运行性能退化 |

**诉求分析：** 社区最强烈的三类诉求——(1) 长时间运行稳定性（内存泄漏、僵尸进程、SQLite 损坏）；(2) 消息不丢失（WhatsApp/Telegram/Slack 各通道均有 message-loss 标签 Issue）；(3) Windows/macOS 平台一等公民待遇（大量 Windows 专属 P0）。

---

## 5. Bug 与稳定性（按严重程度）

### P0 — 关键
- **#91588 Gateway 内存泄漏 → OOM 崩溃循环**（Open，39 评论，无 fix PR）⚠️ 最严重
- **#160959 大型插件捕获阻塞事件循环数分钟**（Open，2026.9.6 回归，无 fix PR）
- **#146860 Windows 更新 handoff 无法获取进程启动身份 → activating 永久卡死**（Open，ux-release-blocker）
- **#126821 SQLite 损坏在全新重建 DB 上 15–24 小时内复发**（Open，5 天 5 次事件，含"瘫痪但拒绝退出"模式）
- **#166894 Windows 多 agent 安装下 Gateway 重启挂起 30 分钟至 2 小时**（Open，2026.9.8）
- **#160060 Windows 待机恢复后 ~54 分钟 Gateway 静默死亡**（Open，无日志无 dump）
- **#153426 MEMORY.md/USER.md 被 provenance ratchet 静默永久排除出 bootstrap**（Open，安全+可用性双重影响）
- **#132303 claude-cli 后端不强制执行 tools.deny**（Open，安全影响：被禁工具始终可用）
- **#112475 设备移除后配对恢复失败**（Open，P0）

### 已修复/关闭的 P0（正面信号）
- ✅ [#158936](https://github.com/openclaw/openclaw/issues/158936) macOS readiness watchdog 误杀慢启动 Gateway 造成重启循环 — 已关闭
- ✅ [#168750](https://github.com/openclaw/openclaw/issues/168750) 更新激活 Doctor 失败 "cannot admit a nested effect" → state-migrated-no-rollback — 已关闭
- ✅ [#164214](https://github.com/openclaw/openclaw/issues/164214) 包发布恢复永久卡在 publishing — 已关闭

### P1 — 高
- **#168955** Windows 启动回归：ready 时间 410s → 1030s（2026.10.1），`sidecars.control-ui-assets` 阻塞 477s。可能的缓解已见于 PR #170612
- **#154891** 失败回滚的热重载仍使无关插件永久不可用直到重启
- **#99659** 伴随应用连接后 OOM
- **#77249** Slack 僵尸 WSS 连接导致重连监督器挂起
- **#125826** Discord 语音回复双重播放/双重写入

**Fix PR 状态：** 今日多数 P0 仍标记 `clawsweeper:no-new-fix-pr`，修复缺口明显；但维护者今日的 PR 批次（#170612/#170685/#169580）在系统性地收敛 SQLite/启动/内存相关根因。

---

## 6. 功能请求与路线图信号

**有明确 PR 支撑、可能进入下一版本：**
- **自定义模型别名解析** — PR [#170009](https://github.com/openclaw/openclaw/pull/170009) 已 "ready for maintainer look"，关闭 #170008
- **MCP 工具调用通道中介审批（consent envelope）** — [#78308](https://github.com/openclaw/openclaw/issues/78308)（18 评论）已有 source-repro 标签，等待产品决策
- **按通道可禁用 Archive 快捷键** — PR [#170343](https://github.com/openclaw/openclaw/pull/170343) 关联，正在推进
- **在配对设备已有文件夹中运行会话** — PR [#169722](https://github.com/openclaw/openclaw/pull/169722)（XL，waiting on author）

**维护者已批准的设计记录（路线图信号）：**
- [#169254](https://github.com/openclaw/openclaw/issues/169254) JSON filter/delete 字段提升为独立列（PostgreSQL 可移植性）——**@steipete 已 accept**，暗示数据库后端可移植性是中期方向

**呼声高但尚无 PR：**
- [#50093](https://github.com/openclaw/openclaw/issues/50093) WhatsApp 消息 backfill（20 评论）
- [#76493](https://github.com/openclaw/openclaw/issues/76493) mcp.servers[].env 支持 SecretRef（4 👍，安全最佳实践受阻）
- [#9986](https://github.com/openclaw/openclaw/issues/9986)（已关闭但关联 PR open）上下文超限时触发模型 fallback
- [#111143](https://github.com/openclaw/openclaw/pull/111143 相关）Control UI 侧栏固定插件标签页

---

## 7. 用户反馈摘要

**痛点（按频率与情绪强度）：**
1. **"静默失败"是反复出现的措辞**——消息丢失（#128916 三重静默失败路径）、boot-md hook 静默停止（#160470）、memory.search 静默降级为关键词（#168413）。用户最不满的不是故障本身，而是零诊断信号。
2. **内存/资源焦虑普遍**：#91588、#99659、#159356、#95746（memory dreaming 并行子代理耗尽本地模型上下文）显示低配主机用户（4–8GB RAM）体验持续受损。
3. **Windows 用户感觉像二等公民**：更新 handoff、待机恢复、多实例重启均出现 Windows 专属 P0。
4. **配置正确但不生效**：tools.deny 被忽略（#132303）、SecretRef 被拒（#76493）、上下文窗口回退硬编码 200k（#127239，已关闭）。

**满意点：**
- 更新恢复机制在 beta.2 中明显改善（Release Highlights 获积极反响）
- memory-wiki 的检测能力受好评（#105494），用户希望补上"解决"闭环
- #159356 用户主动撰写详尽的运维恢复报告并肯定社区支持

---

## 8. 待处理积压（提醒维护者关注）

| Issue | 开放时长 | 状态 | 风险 |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway 内存泄漏 | **4 个月+**（2026-06-09） | 无 fix PR，P0，39 评论 | 🔴 最高——影响所有长时运行部署 |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) WhatsApp 消息丢失 | 7 个月（2026-03-19） | needs-product-decision | 🔴 数据完整性 |
| [#48709](https://github.com/openclaw/openclaw/issues/48709) Gemini 2.5 Pro 会话膨胀 | 7 个月，已标 stale | 无响应 | 🟠 主流模型兼容性 |
| [#126821](https://github.com/openclaw/openclaw/issues/126821) SQLite 损坏复发 | 2 个月 | 无 fix PR | 🔴 数据丢失 |
| [#132303](https://github.com/openclaw/openclaw/issues/132303) tools.deny 不生效 | 1.5 个月 | needs-security-review | 🔴 安全边界 |
| [#71330](https://github.com/openclaw/openclaw/issues/71330) / [#105494](https://github.com/openclaw/openclaw/issues/105494) memory 系列功能请求 | 6 个月+，stale | needs-product-decision | 🟡 产品方向待定 |
| PR [#167796](https://github.com/openclaw/openclaw/pull/167796) automations 大重构 | 4 天 | XL 跨 9 通道+16 扩展 | 🟡 合并风险高（compatibility + security-boundary），需重点评审 |

**健康度结论：** 项目处于"高速修复+高速涌入"的平衡状态，维护者响应能力突出（185 Issue 关闭/144 PR 合并）。核心风险在于资源泄漏类 P0 的修复周期过长（#91588 已 4 个月），以及 Windows 平台质量债务的累积。建议优先投入内存泄漏根因分析与 SQLite 并发访问收敛——后者今日的 PR 批次（#169580、#170685）已显示正确方向。

---
*数据来源：OpenClaw GitHub 仓库（github.com/openclaw/openclaw），统计窗口 2026-10-12 至 2026-10-13 UTC。*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**统计窗口：2026-10-12 至 2026-10-13 UTC | 涵盖 14 个项目**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**“架构收敛 + 生态扩张”并行期**：头部项目（OpenClaw、CoPaw、Hermes Agent）不约而同地进行 Gateway 统一会话、渠道插件化、sub-agent 编排等架构级重构，说明行业已从功能堆砌转向运行时成熟度竞争。MCP 已成为事实性工具接入标准（至少 7 个项目今日动态涉及 MCP），SQLite 会话集中化、成本计量准确性、prompt cache 效率成为新的工程深水区。渠道生态从 Telegram/Slack 扩展至 WhatsApp、飞书、QQ/OneBot、WeCom，中文生产场景与自托管（Docker/NAS）用户群快速崛起。同时，**“静默失败无诊断信号”是跨项目第一大用户抱怨**，可观测性成为下一个竞争焦点。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（关 185） | 500（合/关 144） | v2026.10.5-beta.2 | 🟢 高吞吐修复，但 P0（内存泄漏 #91588 悬置 4 个月、SQLite 损坏、Windows 卡死）债务累积 |
| **CoPaw (QwenPaw)** | 16（关 2） | 34（合/关 8） | 无 | 🟢 良好——当日 Bug 当日 fix PR（#8206→#8210），架构重构（#8187 渠道插件化）推进中 |
| **Hermes Agent** | 50（关 6） | 50（合/关 6） | 无 | 🟢 响应快，但 Windows job-object 族问题与微信/QQ/WeCom 网关边缘场景债务重 |
| **Zeroclaw** | 37（关 4） | 50（合 3） | 无 | 🟡 评审吞吐不足——47 个待合并 PR 含 7+ XL 级，可能成 v0.8.6 发布瓶颈；issue 质量与治理纪律突出 |
| **NanoBot (HKUDS)** | 2（关 0） | 28（合 14） | 无（分链路成型中） | 🟡 PR 侧高吞吐、Issue 侧近乎零响应；Docker 开箱即用（#6165）是新用户转化风险 |
| **LobsterAI** | 2 | 11（合/关 9） | 无（Release/2026.9.24 分支已合） | 🟢 发布前密集打磨期，向 Agent 生态平台（Expert Plaza）演进 |
| **NanoClaw** | 0 | 6（合/关 2） | 无 | 🟢 稳定维护期，PR 质量高但评审周期偏长（#3674 悬置 6 周） |
| **PicoClaw** | 5（关 1） | 7（合/关 6） | 无 | 🟡 清理期特征；CLA 流程故障（#3392）抑制外部贡献 |
| **IronClaw** | 2 | 0 | 无 | 🟢 低活动但零负面信号；架构获外部认可，质量追踪管线健康 |
| **Moltis** | 1 | 2 | 无 | 🟢 小步快跑，sub-agent 权限治理方向清晰；#1303 策略绕过问题待响应 |
| NullClaw / TinyClaw / ZeptoClaw / EasyClaw | 0 | 0 | 无 | ⚪ 24 小时无活动，长尾项目 |

**分层结论**：OpenClaw 一档独大（活动量约为第二名 10 倍）；CoPaw、Hermes、Zeroclaw、NanoBot 构成活跃第二梯队；其余处于维护或观望期。

---

## 3. OpenClaw 在生态中的定位

**优势：**
- **规模与吞吐**：日 Issue/PR 更新各 500 条，关闭 185 Issue/合并 144 PR，维护者响应能力（以 @steipete 为核心）远超同类；核心维护者单日十余个高质量修复 PR 的产出模式在生态内独有。
- **发布节奏**：唯一今日发版的项目（v2026.10.5-beta.2），且 beta.3 CI 已在准备（#170702），beta 通道迭代速度领先。
- **议题广度**：覆盖 Gateway 内存管理、SQLite 并发、更新 handoff、9+ 消息通道、automations 大重构（#167796），是最接近“个人 agent 操作系统”形态的项目。

**技术路线差异：**
- 相比 Zeroclaw 的 **Wasm 插件沙箱 + 成本账本精细化**（JPEG 内存准入、token 计量），OpenClaw 更重“快速覆盖通道与功能面”，安全边界存在明确缺口（#132303 tools.deny 不生效）。
- 相比 Hermes 的 **gateway 统一架构推进**（#106742），OpenClaw 架构已成型但稳定性打磨滞后——资源泄漏类 P0 修复周期（#91588 已 4 个月）是其最大软肋。
- 相比 CoPaw/NanoBot 的“开箱即用”导向，OpenClaw 用户群更偏高级运维/生产部署。

**社区规模对比**：以评论热度和议题密度推断，OpenClaw 社区规模与生产用户深度均居首（单 Issue 39 评论、问题报告含详尽运维数据），Zeroclaw 用户技术含量最高（抓包级诊断），Hermes 中文/多平台社区最活跃。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **SQLite 会话后端可靠性** | OpenClaw（#126821 损坏复发、#169580/#170685 并发收敛）、NanoBot（#5943 会话集中化）、Zeroclaw（#11420 created_at 被覆盖） | SQLite 作为 agent 状态主存储的并发、迁移与数据保真问题集中爆发，是全生态最普遍的工程痛点 |
| **Gateway/运行时统一架构** | OpenClaw（gateway 会话/状态）、Hermes（#106742 单一 gateway 拥有全部会话）、Zeroclaw（v0.9.0 网关分离）、CoPaw（#8187 渠道插件化+子进程隔离） | 均在收敛为“单一常驻运行时 + 多通道/多客户端挂载”的架构共识 |
| **成本计量与 token 可观测** | Zeroclaw（#11204/#11613/#11670 token 少计、#11696 prompt cache 被 bust）、LobsterAI（#2842 积分不准主动下线）、OpenClaw（#127239 上下文回退） | 成本账本端到端可信度不足，重度用户对缓存效率与推理 token 计量高度敏感 |
| **内存泄漏/僵尸进程** | OpenClaw（#91588 OOM、#97616 僵尸进程）、LobsterAI（#2845 MCP 桥接僵尸进程）、Hermes（#99659 连接后 OOM） | 长时运行稳定性是所有常驻型 agent 的共同战场 |
| **Windows 平台质量债** | OpenClaw（#146860/#166894/#160060）、Hermes（#68128/#135179/#137645）、CoPaw（#8206/#8194） | WinError 5 句柄/job object/路径语义问题在 3 个头部项目同步累积，Windows CI 覆盖普遍不足 |
| **消息通道不丢不重** | OpenClaw（#50093 WhatsApp backfill）、PicoClaw（#3426 MarkdownV2 转义）、Hermes（#36750 微信误删）、NanoClaw（#4079 飞书卡片误撤回）、CoPaw（#8202 多端同步） | 各通道保真/幂等/降级行为是生产监控场景的硬需求 |
| **MCP 生态接入与治理** | OpenClaw（#78308 consent envelope、#76493 SecretRef）、IronClaw（#8136 托管 MCP 扩展）、Hermes（#137631 一键安装、#137500 http capabilities）、CoPaw（Tavily/Firecrawl provider）、Moltis（#1302 spawn 白名单） | 从“能接 MCP”进入“MCP 权限、凭据、审批治理”阶段 |
| **文档即产品/内置自助答疑** | NanoBot（#6176 nanobot-document 技能）、Zeroclaw（#11235 知识库 RAG RFC）、NanoBot（#6165 onboarding 抱怨） | 内置文档问答成为降低上手门槛的共同解法 |
| **Sub-agent 编排与治理** | Moltis（#1301/#1302）、Hermes（#133212 lifecycle v1.1）、Zeroclaw（#10391 bounded delegate）、OpenClaw（#95746） | coordinator/worker 拓扑的权限边界、预算、审计需求成型 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能个人 agent OS：多通道、automations、memory、配对设备 | 高级用户/生产部署 | Gateway 常驻 + 更新 handoff 机制，广度优先 |
| **Zeroclaw** | 安全隔离与成本治理 | 技术型重度用户（自建、抓包诊断） | Wasm 插件沙箱、精确成本账本、A2A 协议 crate（accepted） |
| **Hermes Agent** | 桌面+IM 多平台覆盖、混合部署（#18715，40 👍） | 企业内网/Windows 服务化、中文多平台用户 | 单 gateway 统一所有本地会话（#106742），CLI/TUI/Desktop/bots 同源 |
| **CoPaw (QwenPaw)** | 开箱即用 + Creator 插件生态 + 硬件探索（ESP32） | 自部署/NAS/Docker 用户、创作者 | Hub + Local runtime 分离，渠道插件化重构中 |
| **NanoBot** | 轻量可组合、自托管后端兼容（whisper.cpp、自建 Bot API） | 极客/私有化部署 | 运行时契约隔离 + 导入边界强制，模块化优先 |
| **LobsterAI** | 桌面伴侣 + Cowork 协作 + Expert Plaza Agent 市场 | 桌面端消费者/中文办公场景 | Electron 桌面形态 + CDN 内容目录化 |
| **PicoClaw** | 低功耗设备（Termux/嵌入式）轻量助手 | 移动端/边缘设备用户 | Go 单二进制，资源占用低 |
| **Moltis** | sub-agent 拓扑治理 | 组织化多 agent 部署 | preset 白名单 + coordinator/worker 一致性 |
| **IronClaw** | 模型质量评测与声明式扩展 | 模型/评测开发者 | declarative auth/egress 扩展接缝 |

---

## 6. 社区热度与成熟度

- **快速迭代/扩张期**：OpenClaw（版本滚动 + 大重构并行）、CoPaw（渠道插件化 XXXL 重构）、LobsterAI（发布前冲刺、生态平台化）、NanoBot（分发链路成型，下版本呼之欲出）。
- **质量巩固期**：Zeroclaw（v0.8.6 收敛、成本/缓存 bug 密集修复）、Hermes（架构统一 + 边缘场景偿还）、NanoClaw（稳定维护、PR 质量优先）。
- **观望/维护期**：IronClaw、Moltis、PicoClaw（清理期 + 流程堵点）；NullClaw/TinyClaw/ZeptoClaw/EasyClaw 处于停滞。
- **成熟度信号**：issue 模板纪律与最小复现质量（Zeroclaw、OpenClaw 最高）；当日反馈当日修复的闭环（Hermes、CoPaw）是社区活力的最强指标；而 CLA 故障（PicoClaw）、Issue 零响应（NanoBot）、长尾 PR 悬置（多个项目）是社区管理的共性短板。

---

## 7. 值得关注的趋势信号

1. **“运行时化”是生态共识**：单常驻 Gateway/daemon + 多客户端挂载 + 可恢复更新，正在从 OpenClaw 的特有架构变为行业标准形态。对开发者的启示：agent 框架的护城河正在从 prompt/工具编排转向**进程生命周期管理与状态持久化**。
2. **可观测性与“反静默失败”是下一个竞争高地**：跨项目用户最大抱怨均为零诊断信号的静默失败（消息丢失、cron 漏跑、模型未被调用）。Kanban 审计（Hermes #137600）、成本账本（Zeroclaw）、失败分类日报（IronClaw）显示“可审计的自主性”需求已进入生产验证期。
3. **成本工程成为一等公民**：prompt cache 保护、推理 token 计量、缓存段重写问题在重度用户中引发抓包级维权。任何 agent 项目若不提供可信成本归因，将失去重度付费用户。
4. **MCP 治理层正在成型**：从接入（一键安装）转向凭据安全（SecretRef）、审批中介（consent envelope）、沙箱隔离（Wasm）——MCP 安全中间件可能是 2026 下半年的创业/贡献机会点。
5. **Windows 与中文生态是被低估的市场**：Windows P0 债务在 3 个头部项目同步累积，而 QQ/微信/飞书/WeCom 渠道需求（Hermes、PicoClaw、LobsterAI、NanoClaw）真实且量大——这两个方向都是差异化切入的低竞争空间。
6. **自托管/低配设备用户群稳固**：NAS/Docker（CoPaw）、Termux（PicoClaw）、4–8GB RAM 主机（OpenClaw #91588 相关）、8GB 树莓派类场景持续活跃，资源效率是差异化卖点而非次要指标。
7. **评测与信任基建萌芽**：Nautilus 独立 harness 榜单（LobsterAI #2801）与 IronClaw 失败分类管线预示第三方评测将影响项目选型，项目方应尽早建立可复现的评测参与策略。

**给 OpenClaw 维护者的优先建议**（基于生态横向视角）：内存泄漏根因分析（#91588）与 SQLite 并发收敛应获得超越日常修复吞吐的战略优先级——这是它与 Zeroclaw（工程质量路线）竞争时长时运行可信度的分水岭；同时 tools.deny 安全缺口（#132303）在生态内无同类竞品敢长期悬置，应尽快闭环。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-10-13

## 1. 今日速览

NanoBot（HKUDS/nanobot）今日保持高活跃度，过去 24 小时 PR 更新达 28 条（其中 14 条已合并/关闭，14 条待合并），但 Issue 侧仅 2 条新开、无闭环。项目当前处于**功能密集开发与架构重构并行期**：核心贡献者 @chengyongru 持续推进会话状态、运行时边界等深层次重构，同时社区贡献涵盖新渠道（WhatsApp Agent Platform）、图像生成（OpenRouter/Codex）、MCP 预设等生态扩展。今日无新版本发布，但多个 PR（如 #6154 预构建候选版本、#6168 应用内更新流程）显示**发布工程链路正在成型**，下一次版本发布值得期待。

## 2. 版本发布

今日无新版本发布。值得注意的是 [PR #6154](https://github.com/HKUDS/nanobot/pull/6154)（预构建预览候选版本）与 [PR #6168](https://github.com/HKUDS/nanobot/pull/6168)（托管安装与可恢复的应用内更新）仍在推进中，二者构成完整的分发链路，是下个版本的前置工作。

## 3. 项目进展

今日有 14 条 PR 被合并或关闭，重点包括：

**已关闭（含合并）的重点 PR：**

- **#6166 — 重构：隔离运行时契约并强制导入边界**（@chengyongru）：拆分配置注入与运行时状态的所有者，客户端初始化双循环问题被解决。这是向模块化架构演进的又一关键步骤。[链接](https://github.com/HKUDS/nanobot/pull/6166)
- **#6176 — 新增内置 `nanobot-document` 技能**（@chengyongru）：让 nanobot 基于随版本分发的文档回答配置、诊断类问题，显著改善自助排障体验。[链接](https://github.com/HKUDS/nanobot/pull/6176)
- **#6160 — 图像设置复用命名连接**（@Re-bin）：图像生成可选用 Models 中已保存的连接及专属请求参数，减少重复配置。[链接](https://github.com/HKUDS/nanobot/pull/6160)
- **#6172 — 重构：图像工具在应用运行时组合**（@chengyongru）：将图像生成从 `AgentLoop` 构造器解耦，改为通过共享 `ToolRegistry` 注册，提升可组合性。[链接](https://github.com/HKUDS/nanobot/pull/6172)
- **#6180 — 添加 Sol AI 为开源合作伙伴**（社区文档类）。[链接](https://github.com/HKUDS/nanobot/pull/6180)
- **#3588 — 修复转写音频格式问题**（长期 PR 关闭）：非 WAV 音频上传前转换为 16kHz 单声道 WAV，兼容 whisper.cpp 等自托管后端；该 PR 存在 [conflict] 标记，关闭原因需关注是否被替代实现。[链接](https://github.com/HKUDS/nanobot/pull/3588)
- **#6178 — WebUI 扩展分支 PR 关闭**（疑与 #6032 主线合并）。[链接](https://github.com/HKUDS/nanobot/pull/6178)

**整体评估**：今日合并以架构重构（图像工具解耦、导入边界）和开发者体验（文档技能、命名连接）为主，配合此前的 SQLite 会话集中化（#5943 待合并），项目正在系统性偿还技术债，为后续多渠道/多 Provider 扩展打基础。

## 4. 社区热点

- **[Issue #6165] Docker 默认镜像无法开箱即用 + 引导文档质量差**（@jerkstorecaller，1 条评论）：用户按官方 `git clone → docker compose up` 流程操作后应用不可用，直指“Docker 的意义就是 Just Works”。这是今日最值得关注的新 Issue，涉及首因体验（onboarding），可能影响新用户留存。[链接](https://github.com/HKUDS/nanobot/issues/6165)
- **[PR #5943] 会话状态集中到 SQLite**（@chengyongru）：p1 优先级的长期重构，持续活跃更新，是当前最核心的待合并 PR。[链接](https://github.com/HKUDS/nanobot/pull/5943)
- **[PR #6168 / #6154 / #5817] 更新分发链路三方协调**：@Re-bin 明确说明需协调多个重叠 PR，归属清晰、协调透明，是社区协作的正面样本。[链接](https://github.com/HKUDS/nanobot/pull/6168)

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| **高（影响首次使用）** | [#6165](https://github.com/HKUDS/nanobot/issues/6165) Docker 默认镜像不可用 + onboarding 文档不足 | 无 fix PR，待维护者响应 |
| 中 | [#6181](https://github.com/HKUDS/nanobot/pull/6181) PPTX 表格提取丢弃空单元格，导致列错位（如 `Alice / 空 / 100` 变成 `Alice\t100`） | **已有 fix PR**（@maxazure，含真实 PPTX 回归测试） |
| 中 | [#6011](https://github.com/HKUDS/nanobot/pull/6011) Codex 图像生成使用缓冲 POST 处理 SSE，断连时已生成的图像可能被丢弃 | 已有 fix PR（改用流式），#4332 后续 |
| 低 | [#4145](https://github.com/HKUDS/nanobot/pull/4145) Weather Skill（解决 #3958） | 存在冲突，长期挂起 |

## 6. 功能请求与路线图信号

今日/近期新功能方向：

- **[#6182] Plazmi 世界追赶示例（受限 MCP 工具）**（@cairn-agent）：提议通过 `enabledTools` 展示 agent 跨会话重访持久世界的能力，属文档/示例类贡献，纳入门槛低，预计可被接受。[链接](https://github.com/HKUDS/nanobot/issues/6182)
- **[#6152] WhatsApp Agent Platform 官方渠道**：官方 API 的新增渠道，含安全与测试，方向契合项目“多渠道”主线，纳入可能性高。[链接](https://github.com/HKUDS/nanobot/pull/6152)
- **[#5718] OpenRouter 原生图像 API** + **[#6011] Codex 流式图像**：图像生成 Provider 生态持续扩充。[链接](https://github.com/HKUDS/nanobot/pull/5718)
- **[#6032] 本地可信 WebUI 扩展面**：manifest 校验 + 作用域路由，安全设计完备。[链接](https://github.com/HKUDS/nanobot/pull/6032)
- **[#6068] FXMacroData MCP 预设**、**[#6103] CoreWeave Inference Provider 文档**：生态扩展类。[链接](https://github.com/HKUDS/nanobot/pull/6068)

**路线图判断**：结合 #6154/#6168 的分发工作 + #6176 文档技能，下一版本主题大概率是“**开箱即用的安装/更新体验**”——这恰好是对今日 #6165 Docker onboarding 抱怨的直接回应，建议维护者将 Docker 镜像修复纳入同一版本。

## 7. 用户反馈摘要

- **新用户上手受阻**：Docker 官方流程不能直接工作，用户明确表达“不应该需要读文档才能跑起来”（#6165），反映 onboarding 是当前口碑短板。
- **自托管/自建后端用户群体活跃**：whisper.cpp 转写兼容（#3588）、自建 Telegram Bot API 服务器（#4919）、CoreWeave 等自建推理（#6103），显示相当比例用户在私有化部署场景使用 NanoBot，对可配置端点有强烈需求。
- **文档即产品的诉求**：#6176（内置文档技能）与 #6179（120 个组件示例的 WebUI Gallery）都指向“让用户在产品内自答疑”，与社区反馈的文档痛点一致。

## 8. 待处理积压

建议维护者优先关注：

1. **[#6165] Docker 镜像不可用** — 新开高影响 Issue，直接打击新用户转化，应尽快响应并关联修复。
2. **[#5943] SQLite 会话集中化（p1）** — 9-27 开启至今，是多个重构的依赖前置，宜尽快合入避免冲突面扩大。
3. **[#4145] Weather Skill PR** — 6-01 开启，带 [conflict] 标记 4 个多月，需决定重做或关闭。
4. **[#5718] OpenRouter 图像 / [#6011] Codex 流式图像** — 均带 [conflict]，图像 Provider 方向的重叠 PR 需要统一协调。
5. **[#4919] Telegram 自定义 Bot API（7-14 开启）** — 实现完整含测试，长期未合并，建议给出评审结论。

---
*数据来源：GitHub API，统计窗口 2026-10-12 至 2026-10-13。Issue 关闭数为 0，建议关注 Issue 侧响应速度与 PR 侧的高吞吐是否平衡。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-10-13

## 1. 今日速览

今日 Zeroclaw 持续保持高活跃度：过去 24 小时内 Issues 更新 37 条（新开/活跃 33，关闭 4），PR 更新 50 条（待合并 47，已合并/关闭 3），无新版本发布。社区焦点集中在**成本核算与 token 统计准确性**（OpenRouter 费用为零、隐藏推理 token 少计）、**SQLite 会话时间戳被覆盖**两个 P1 问题，以及 JPEG 内存准入优化、配对令牌绑定用户等一批高质量 PR 的推进。多位 "distinguished contributor"（@IftekharUddin、@Audacity88、@joalvaradon）持续贡献 XL 级别核心改动，项目维护节奏健康、评审流程严谨。

## 2. 版本发布

今日无新版本发布。下一个版本节点为 **v0.8.6 / v0.9.0**，由 [Tracker #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 跟踪（Phase 2 运行时 + Phase 3 网关分离）。

## 3. 项目进展

今日仅 3 条 PR 合并/关闭，多为 dependabot 依赖组更新（如 [#11537](https://github.com/zeroclaw-labs/zeroclaw/pull/11537) actions-all 5 项更新已关闭），核心功能 PR 仍处于评审阶段。值得注意的是多个待合并 PR 形成了清晰的推进梯队：

- **[#11670](https://github.com/zeroclaw-labs/zeroclaw/pull/11670)** fix(providers): 保留 provider 侧 total/reasoning token 计数，直接修复 [#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613) 的成本账本少计问题（覆盖全部 9 个 provider）。
- **[#11672](https://github.com/zeroclaw-labs/zeroclaw/pull/11672)** / **[#11637](https://github.com/zeroclaw-labs/zeroclaw/pull/11637)**: JPEG 准入投影无需复制输入、不再为 zune-jpeg 不会分配的系数平面计费——JPEG 内存准入问题域已接近收敛（伴随 follow-up issue #11654）。
- **[#11286](https://github.com/zeroclaw-labs/zeroclaw/pull/11286)** feat(security): 配对令牌绑定 roster 用户（XL，identity-access 主题），基础依赖 [#10248](https://github.com/zeroclaw-labs/zeroclaw/issues/10573) 已落地，正在收尾。
- **[#11402](https://github.com/zeroclaw-labs/zeroclaw/pull/11402)**: 修复 Wasmtime 48 陷阱后插件实例失效的问题，对插件生态（含 v0.8.6 的 Discord 插件发布门 [#10999](https://github.com/zeroclaw-labs/zeroclaw/issues/10999)）是关键解锁。
- **[#11589](https://github.com/zeroclaw-labs/zeroclaw/pull/11589)**: 实现 `cost.allow_override`，操作员可即时放行超额成本限制而无需重启 daemon。

整体看，项目处于**大版本冲刺前的功能收敛期**，待合并的 47 个 PR 中包含 7+ 个 XL 级改动。

## 4. 社区热点

- **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)**（15 评论）：维护者 RFC/设计决策队列 tracker，是项目治理中枢，持续吸收社区对架构决策的讨论。
- **[#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)**（11 评论）：持久化记忆子系统 parity 大型 tracker（curation / relevance / operability 三平面），反映社区对“成熟 Agent 运行时级记忆能力”的强烈诉求。
- **[#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254)**（9 评论）：`zeroclaw-a2a` 协议 crate RFC，已 accepted，表明项目正积极布局 Agent-to-Agent 互操作。
- **[#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)**（8 评论，P1）：SQLite 会话后端每轮重写全部消息的 `created_at`，导致逐条消息时间丢失——直接影响 ZeroCode 时间戳展示功能 [#11622](https://github.com/zeroclaw-labs/zeroclaw/pull/11622)，故讨论热烈。
- **[#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235)**（6 评论）：面向操作者文档的知识库 RAG 能力 RFC，代表用户对“基于自有文档回答”的期待。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| S1 / P1 | [#11648](https://github.com/zeroclaw-labs/zeroclaw/issues/11648) | Web 面板配对输入仍限 6 位数字，而默认策略已改为 32 位字母数字——**配对工作流被阻断** | 暂无 fix PR |
| S1 / P2 | [#11179](https://github.com/zeroclaw-labs/zeroclaw/issues/11179) | CI 必过门被秒边界跨越导致的 flaky test 阻塞 PR | 无 |
| S2 / P1 | [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite 会话重写覆盖逐条 `created_at` | 相关：[#11675](https://github.com/zeroclaw-labs/zeroclaw/issues/11675)（ACP store 同类问题） |
| S2 / P1 | [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | OpenRouter 费用恒为 $0.00，usage.cost 未入库 | 待查（与 #11613 同域） |
| S2 / P1 | [#10777](https://github.com/zeroclaw-labs/zeroclaw/issues/10777) | Anthropic thinking/effort 配置在轮次间翻转，重写整个缓存历史段，**成本影响大** | 无 |
| S2 / P1 | [#11606](https://github.com/zeroclaw-labs/zeroclaw/issues/11606) | `upsert_agent` 全量重写 config.toml，伪造 risk/runtime profile、丢弃字段 | in-progress |
| S2 / P2 | [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) | 默认无向量评分时 Core conflict supersede 误隐藏无关记忆 | 无 |
| S2 / P2 | [#11696](https://github.com/zeroclaw-labs/zeroclaw/issues/11696) | 系统提示每轮从磁盘重建，人格文件编辑即打爆全部会话的 prompt cache（成本） | 无（与 [#11703](https://github.com/zeroclaw-labs/zeroclaw/issues/11703) 同域） |
| S3 | [#11694](https://github.com/zeroclaw-labs/zeroclaw/issues/11694)、[#11654](https://github.com/zeroclaw-labs/zeroclaw/issues/11654) | Cost 页 UTC/本地日混淆；JPEG 解码在内存上限检查前即复制解析 | #11654 已有 [#11672](https://github.com/zeroclaw-labs/zeroclaw/pull/11672) |

**趋势判断**：成本可观测性（cost ledger / token 计量 / prompt cache）是当前 bug 密度最高的领域，#11670 合并后可缓解一部分。

## 6. 功能请求与路线图信号

- **A2A 协议 crate（[#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254)，accepted）**：多项前置（#9106、#7763/#8274）已落地，是 v0.9.x 最明确的新能力之一。
- **RAG 知识库（[#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235)）**：已 accepted、needs-author-action，属“新子系统边界”级 RFC，预计进入下一大版本规划。
- **search_routes 搜索路由（[#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074)，accepted）**：镜像 `[[model_routes]]` 的 hint 路由设计已定，实现成本低，可能较快落地。
- **配对令牌绑定用户（[#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573) + PR [#11286](https://github.com/zeroclaw-labs/zeroclaw/pull/11286)）**：基础依赖已合并，是 v0.9.0 网关分离阶段的安全交付项。
- **v0.8.6 收尾信号**：Discord 插件发布验证 [#10999](https://github.com/zeroclaw-labs/zeroclaw/issues/10999)、插件实例失败恢复 [#11402](https://github.com/zeroclaw-labs/zeroclaw/pull/11402)、channel 实例配置种子 [#10996](https://github.com/zeroclaw-labs/zeroclaw/issues/10996)（已关闭）均指向插件发布通道即将打通。

## 7. 用户反馈摘要

- **成本透明度是最大痛点**：用户（如 #11204 报告者 @alperyilmaz，90 次请求 / 210 万 token）依赖 Dashboard Cost 做预算，但费用全零、推理 token 少计（#11613）、UTC/本地日混淆（#11694）、`warn_at_percent` 无效（[#10950](https://github.com/zeroclaw-labs/zeroclaw/issues/10950)）反复出现——计量链路端到端可信度不足。
- **缓存效率受关注**：#10777（缓存段被重写）与 #11696（prompt cache 被 bust）表明重度用户对 token 成本敏感，且已具备抓包级（本地 capture proxy）的深度诊断能力，用户群体技术含量高。
- **ZeroCode 交互体验**：`ask_user` 询问被静默丢弃、600 秒超时无记录（[#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623)）影响交互式工作流信任。
- **正面信号**：报告问题均附最小复现、源码定位（如 #10950 直接给出 commit hash 和函数名），issue 模板纪律性好，维护者响应（accepted / in-progress 标签流转）及时，社区与维护方的协作质量高于同类项目平均水平。

## 8. 待处理积压

- **[#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391)**（8/26 起，XL，needs-author-action）：bounded delegate 工作区/工具上限/命令策略跨轮保持——P1 修复长时间滞留，master 已前进 13+ commits，需重新 rebase 评审。
- **[#10034](https://github.com/zeroclaw-labs/zeroclaw/pull/10034)**（8/16 起，XL）：模型路由更新后的 provider alias 探测——近两个月未合并。
- **[#11264](https://github.com/zeroclaw-labs/zeroclaw/pull/11264)**、[#11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456)、[#11473](https://github.com/zeroclaw-labs/zeroclaw/pull/11473)：多个 XL PR 处于 needs-author-action / needs-maintainer-review，评审吞吐可能成为 v0.8.6 发布瓶颈。
- **[#11108](https://github.com/zeroclaw-labs/zeroclaw/issues/11108)**（已关闭）遗留的 `map_tool_name_alias` 语义问题，需确认是否有 follow-up 记录。
- **[#10777](https://github.com/zeroclaw-labs/zeroclaw/issues/10777)**（9/11 起，P1，r:needs-repro）：Anthropic 缓存重写问题一个月未复现推进，建议维护者确认抓包数据是否足够定位。

---
*数据来源：GitHub API（zeroclaw-labs/zeroclaw），统计窗口 2026-10-12 至 2026-10-13。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-13

## 1. 今日速览

今日 Hermes Agent 呈现高度活跃状态：过去 24 小时共 50 条 Issue 更新（44 新开/活跃、6 关闭）、50 条 PR 更新（44 待合并、6 合并/关闭），无新版本发布。社区贡献以修复型 PR 为主，多位贡献者（@KoNit-K、@teknium1、@alt-glitch 等）集中提交了 Gateway 平台适配、Desktop 稳定性和工具链修复。Kanban/Cron 子系统今日集中暴露了一批流程审计类问题（@ahaone 连发三帖），值得维护者优先关注。整体健康度良好，但 Windows 平台兼容性问题（job object / WinError 5 家族）持续累积，已形成明显的风险聚集。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无已合并的显著 PR（合并仅 6 条且多为小修/关闭），但待合并队列中有多项重要推进：

- **架构级重构持续推进**：[PR #106742](https://github.com/NousResearch/hermes-agent/pull/106742)（@teknium1，"One gateway owns every local session"）将 CLI、TUI、Desktop、API、ACP、bots 与 cron 统一挂载到单一 gateway 拥有的活跃会话，是本月最重要的架构 PR，今日持续活跃。
- **Onboarding 体系换血**：[PR #137522](https://github.com/NousResearch/hermes-agent/pull/137522)（Desktop 首跑引导聊天 + `set_theme`）与 [PR #137420](https://github.com/NousResearch/hermes-agent/pull/137420)（删除旧 agentic setup 流程）形成 PR stack，新用户体验改造接近落地。
- **MCP 生态扩张**：[PR #137631](https://github.com/NousResearch/hermes-agent/pull/137631) 将 VirusTotal 官方 hosted MCP（OAuth 免 API key）纳入可选目录，一条命令即可安装。
- **关键 bugfix 队列**：#137158（P1，cron 执行 ledger 每事务重复建 schema）、#137641（Desktop 断线重连后 approval 误重放导致 4001）、#137632（Telegram observe 模式图片轮次污染会话并阻塞压缩）、#137628（工具内 SystemExit 不再杀死 Hermes）均已提交待审。

## 4. 社区热点

- **[#18715](https://github.com/NousResearch/hermes-agent/issues/18715)（27 评论 / 40 👍）**：远程 Hermes Agent + 本地工具执行的混合部署需求，是社区呼声最高的 feature（5 月提出至今持续讨论），与 PR #106742 的 gateway 统一架构直接相关——架构落地后此需求有望顺势解决。
- **[#68128](https://github.com/NousResearch/hermes-agent/issues/68128)（8 评论）**：WhatsApp bridge 在 no-breakaway job object 下 spawn 失败（WinError 5），与 #135179 同根因，Windows 服务化部署用户的核心痛点。
- **[#83904](https://github.com/NousResearch/hermes-agent/issues/83904)（6 评论）**：Desktop 调度的 cron 任务无回投路径，`deliver=origin` 无法解析到桌面聊天，反映 Desktop 一等公民化尚未完成。
- **[#133212](https://github.com/NousResearch/hermes-agent/issues/133212)（5 评论）**：插件编排者要求 `subagent_lifecycle` v1.1（steer、host 隔离传输等），插件生态进阶需求明确。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 说明 | Fix 状态 |
|---|---|---|---|
| P1 | [#137158](https://github.com/NousResearch/hermes-agent/pull/137158)（PR） | cron ledger 每事务重发 DDL，与 #135487 报告的锁竞争相关 | ✅ 已有 fix PR |
| P2 | [#135179](https://github.com/NousResearch/hermes-agent/issues/135179) | Windows `POST /api/hermes/update` 500（WinError 5），job object 无 breakaway | 相关：[PR #137638](https://github.com/NousResearch/hermes-agent/pull/137638)（Windows 更新提示超时） |
| P2 | [#137493](https://github.com/NousResearch/hermes-agent/issues/137493) | Docker `--storage-opt` 探测每个进程生成一个注定失败的容器，污染 dockerd 日志 | ❌ 暂无 |
| P2 | [#137627](https://github.com/NousResearch/hermes-agent/issues/137627) | Telegram observe 模式图片轮次包装层逐轮翻倍，阻塞上下文压缩 | ✅ [PR #137632](https://github.com/NousResearch/hermes-agent/pull/137632) 当日即出 |
| P2 | [#137294](https://github.com/NousResearch/hermes-agent/issues/137294) | SenseNova 端点多轮请求全 400（reasoning_content 回放策略反转向），v2026.9.24 升级即坏 | ❌ 暂无 |
| P2 | [#134028](https://github.com/NousResearch/hermes-agent/issues/134028) | 委托子代理的 reasoning-only 摘要无长度门控，14k 独白被当作完成摘要交付 | ✅ [PR #137595](https://github.com/NousResearch/hermes-agent/pull/137595)（schema 复验）方向相关 |
| P2 | [#137610](https://github.com/NousResearch/hermes-agent/issues/137610)（已关） | 无 header 首轮重试造成并行会话风暴 | 建议合流转正式 PR |
| P2 | [#137588](https://github.com/NousResearch/hermes-agent/issues/137588) | 官方 Slack connector 缺 `search:read` scope，搜索不可用 | ❌ 暂无 |
| P3 | [#133435](https://github.com/NousResearch/hermes-agent/issues/133435) | 提交在仓库的 package-lock.json 锁定 18 个高危 npm 漏洞，本地无法修复 | ❌ 需上游 lockfile 刷新 |
| P3 | [#137645](https://github.com/NousResearch/hermes-agent/issues/137645) | 域加入 Windows + 本地账户时 `gateway install` 失败（USERDOMAIN 污染） | ❌ 暂无 |

## 6. 功能请求与路线图信号

- **混合部署（#18715）**：与 #106742 架构高度耦合，gateway 统一会话落地后极可能纳入后续版本。
- **subagent_lifecycle v1.1（#133212）**：插件编排（steer / host 隔离传输）诉求清晰，标记 needs-decision，等待核心团队表态。
- **ACP mcpCapabilities.http（#137500）**：打通外部运行时挂载 HTTP MCP（qwen-audio-agent 集成被阻塞），属低成本高收益的协议补齐。
- **Kanban 治理三连（[#137596](https://github.com/NousResearch/hermes-agent/issues/137596) / [#137598](https://github.com/NousResearch/hermes-agent/issues/137598) / [#137600](https://github.com/NousResearch/hermes-agent/issues/137600)）**：worktree 分支冲突、完成记录不可审计（178 张 done 卡 0 集成证据）、预算耗尽无诊断路径——Kanban 从"能用"走向"可信"的路线图信号强烈。
- **Telegram 进度通知分离（#125887）**：首次确认与周期状态解耦，交互打磨类需求。

## 7. 用户反馈摘要

- **Windows 用户受挫明显**：job object / WinError 5 / 域账户安装失败 (#68128, #135179, #137645, #137644) 构成同族痛点，Windows 服务化场景（企业内网、杀软、域环境）是高频使用场景且最缺测试覆盖。
- **国产/地区平台网关稳定性差**：WeCom（#82858 语音并发误删、#135503 token 驱逐）、QQBot（#99144 长思考轮次丢响应、#137605 重启后路由错端点）、微信去重误杀（#36750）——中文社区用户的多平台生产部署需求真实且量大。
- **长程自动化不可信**：Kanban 用户 @ahaone 用 29 天生产数据量化了"done 无证据、成本无法归因"，说明 Kanban 已进入真实生产试用，但审计能力跟不上。
- **满意点**：Desktop onboarding 新体验、`hermes mcp install` 一键安装 MCP 目录、issue 响应速度（多个 issue 当日出 fix PR，如 #137627 → #137632）获得好评。

## 8. 待处理积压

- [#18715](https://github.com/NousResearch/hermes-agent/issues/18715)：5 月至今 40 👍，混合部署需求长期无决议，建议与 #106742 一并给出路线图说明。
- [#36750](https://github.com/NousResearch/hermes-agent/issues/36750)（6 月）：微信内容去重误删合法重复消息，影响生产消息投递。
- [#102494](https://github.com/NousResearch/hermes-agent/issues/102494)（9 月，P2）：vLLM 400 误判为超长导致会话自毁，标记 needs-repro 超一个月。
- [#52510](https://github.com/NousResearch/hermes-agent/issues/52510)（6 月）：Kanban worker 预算耗尽丢部分成果，与今日 #137600 同族，建议合并治理。
- [PR #85842](https://github.com/NousResearch/hermes-agent/pull/85842)（8 月）与 [PR #86018](https://github.com/NousResearch/hermes-agent/pull/86018)（8 月，Matrix SAS 验证）：开放超过两个月未合并，涉及 computer_use 元素状态与 Matrix E2E 可用性，建议维护者排期评审。

---
*数据来源：GitHub API（Issues/PRs 最近 24 小时快照）。整体评估：项目处于高强度迭代期，社区贡献管道健康（当日反馈当日修复的闭环多次出现），主要风险集中在 Windows 兼容性与网关平台（微信/QQ/WeCom）的边缘场景覆盖。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-10-13）

## 1. 今日速览

PicoClaw 今日保持中等活跃度：24小时内 Issues 更新 5 条（新开/活跃 4、关闭 1），PR 更新 7 条（待合并 1、合并/关闭 6），无新版本发布。社区方向上，通道（Channel）层的 bug 报告与功能定制仍是主要诉求，包括 Telegram MarkdownV2 转义缺陷和 OneBot 自动 reaction 可配置化。值得注意的是，多个长期挂起的 PR（如 #1500、#1397）在今日被集中关闭，或为维护者进行积压清理，项目开发节奏呈现“清理期”特征。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无确认合并记录，但 6 个 PR 被关闭，多为长期未推进的积压项：

- **PR #1500**（已关闭）：logger 时间格式可通过 config.json 配置，属于配置化增强。[链接](https://github.com/sipeed/picoclaw/pull/1500)
- **PR #1397**（已关闭）：修复 Android/Termux 下 `x509.SystemCertPool()` 返回空池导致所有 LLM provider TLS 握手失败的问题，对移动端用户价值较高。[链接](https://github.com/sipeed/picoclaw/pull/1397)
- **PR #1509**（已关闭）：修复 Google/Gemini 扩展思考产生的 `extra_content` 字段污染 OpenAI 兼容 API 请求的问题。[链接](https://github.com/sipeed/picoclaw/pull/1509)
- **PR #1676 / #1651**（已关闭）：分别为飞书话题隔离与 Telegram HTML 分块优化，均针对消息通道体验。[链接](https://github.com/sipeed/picoclaw/pull/1676) | [链接](https://github.com/sipeed/picoclaw/pull/1651)
- **PR #3396**（已关闭）：OneBot 自动 reaction 开关，对应 Issue #3395 同日关闭，功能诉求闭环。[链接](https://github.com/sipeed/picoclaw/pull/3396)

仍待处理的核心 PR 为 **#3381**（OpenAI 切换至 Responses API），已开启 26 天，因 CLA 签名检测问题（Issue #3392）受阻。

## 4. 社区热点

- **Issue #3394**（3 评论）：QQ 机器人接口已更新但 QQ 聊通通道接口未同步，QQ 生态用户核心诉求，处于 stale 状态。[链接](https://github.com/sipeed/picoclaw/issues/3394)
- **Issue #3392**（3 评论）：CLAassistant 无法识别 CLA 签名，直接阻塞外部贡献者 PR（如 #3381）合入，是当前社区协作流程的最大堵点。[链接](https://github.com/sipeed/picoclaw/issues/3392)
- **Issue #3395**（2 评论，已关闭）+ **PR #3396**：OneBot 每条群消息无条件发送 emoji 自动确认，用户希望默认关闭。今天议题与 PR 一并关闭，但注意 PR 是“关闭”而非“合并”，功能是否落地需确认。[链接](https://github.com/sipeed/picoclaw/issues/3395)

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 高 | **Issue #3394**：QQ 机器人接口未跟上上游更新，QQ 通道疑似不可用 | OPEN（stale），暂无 fix PR |
| 中 | **Issue #3426**（今日新报）：Telegram MarkdownV2 未转义链接标签与引用文本中的保留字符，导致整条回复降级为纯文本 | OPEN，暂无 fix PR |
| 中 | **Issue #3392**：CLA 签名检测失效，阻塞贡献流程 | OPEN（stale） |

## 6. 功能请求与路线图信号

- **Issue #3427**（今日新开）：提议在 PicoClaw 的 MCP CLI + 心跳能力上集成 Plazmi 持久世界示例（homes/gardens/UTC 时间交互）。方向与项目的 agent 持久会话能力契合，但依赖外部平台，采纳可能性中等偏低，可作为示例生态参考。[链接](https://github.com/sipeed/picoclaw/issues/3427)
- **Issue #3395 / PR #3396**：`reaction_enabled` 配置项。需求真实且实现已完成，但 PR 被关闭未合并，建议维护者确认是否以其他方式落地或重新提交。
- **PR #3381**：迁移至 OpenAI Responses API，属重要 provider 层升级，若 CLA 问题解决有望进入下一版本。

## 7. 用户反馈摘要

- **QQ/OneBot 用户**痛点集中：上游接口变化导致通道失效（#3394），以及自动 emoji reaction 对群聊体验的干扰（#3395）。
- **Telegram 用户**对消息格式保真度要求高，MarkdownV2 转义缺陷导致格式全部丢失引发不满（#3426）。
- **外部贡献者**对 CLA 流程挫败感明显——签了 CLA 却无法被识别，积极性受打击（#3392）。
- **移动端用户**（Termux）是重要使用群体，历史 PR（#1397）表明在低功耗设备上跑个人 AI 助手是典型场景。

## 8. 待处理积压

- **PR #3381**（开启 26 天）：OpenAI Responses API 迁移，受 CLA 问题阻塞，建议维护者优先打通流程。[链接](https://github.com/sipeed/picoclaw/pull/3381)
- **Issue #3394 / #3392**（均 17+ 天，stale）：QQ 通道修复与 CLA 检测，直接影响用户可用性与社区贡献，需官方回应。
- **PR #3396**：已实现但未合并即关闭，功能诉求未闭环，建议明确处置（重新开 PR 或说明拒绝原因）。

---

**健康度小结**：项目 issue/PR 流转正常，但 (1) CLA 流程故障抑制外部贡献、(2) 多个 stale 高价值议题缺乏官方回应、(3) 关闭未合并的 PR 处置不透明，是当前三个需要关注的信号。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-10-13** | 数据周期：过去 24 小时

---

## 1. 今日速览

NanoClaw 今日整体活跃度中等，无新版本发布。过去 24 小时无 Issue 新增或活跃，但 PR 活动较为集中：6 条 PR 更新（4 条待合并，2 条已关闭/合并），全部围绕 Bug 修复、测试稳定性与生态适配。社区贡献者构成多元（@TheSolai、@chiptoe-svg、@bmultini、@amit-shafnir、@orgads、@tier2tech-tian），显示外部贡献管道健康。今日无 Release，项目处于稳定维护与小步迭代阶段。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日无明确“已合并”记录，但 2 条 PR 已关闭，其余 4 条待合并：

- **#4080（已关闭）fix(approvals): approval card joins the requester's thread** — 修复审批卡片在审批者 DM 中未落入请求线程的问题。此前用户在线程内等待却看不到卡片，体验断裂。这是一个安全/权限流程相关修复，关闭意味着审批体验链路进一步完整。([链接](https://github.com/nanocoai/nanoclaw/pull/4080))
- **#4079（已关闭）fix(feishu): 进度卡片误撤回 + 语音摘要模型读 .env** — 修复飞书渠道中“跑过工具的进度卡片被误撤回”问题（`cleanupProgressCard` 改用 `allSteps` 判断可见性），并让 `VOICE_SUMMARY_MODEL` 改为调用时从 `.env` 读取。附带回归测试与缺陷注入验证，工程质量较高。([链接](https://github.com/nanocoai/nanoclaw/pull/4079))
- **#4082 fix(add-onecli): OneCLI agent grants + gateway pin 升至 1.45.0** — 解决 OneCLI 1.43+ 对旧 secrets API 返回 `410 Gone` 的问题，使安装摆脱 1.42.0 临时方案。([链接](https://github.com/nanocoai/nanoclaw/pull/4082))
- **#4081 test(update-skills): 隔离 registry-remote 环境变量** — 防止调用方环境中的 `NANOCLAW_REGISTRY_REMOTE` 覆盖破坏端到端刷新测试，提升 CI 稳定性。([链接](https://github.com/nanocoai/nanoclaw/pull/4081))

整体判断：项目今日推进了**多渠道体验（飞书）、审批流程、依赖适配（OneCLI）与测试健壮性**四个方向，属于稳定的维护型迭代。

---

## 4. 社区热点

今日无 Issue 活动，PR 评论数缺失，无法确定讨论热度最高的条目。值得关注：

- **#4079**（飞语/中文摘要，@tier2tech-tian）附带详细线上日志分析（“4 号群”生产环境排查），是真实生产场景驱动的贡献，代表飞书渠道活跃用户群的诉求。
- **#4083**（Sol AI 社区引用，@TheSolai）表明项目社区生态在扩展——有用户基于 OpenClaw/NanoClaw 运行生产级自主 Agent 并对外分享经验。([链接](https://github.com/nanocoai/nanoclaw/pull/4083))

---

## 5. Bug 与稳定性

按严重程度排列（今日报告/修复的均为 PR 形式，无新 Issue）：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | **#4079** 飞书进度卡片跑完工具后被误撤回，用户看不到执行过程 | ✅ 已关闭，含回归测试 |
| 高 | **#4082** OneCLI 1.43+ secrets API 返回 410 Gone，阻断新版安装 | 🔶 Fix PR 待合并 |
| 中 | **#4080** 审批卡片未进入请求线程，请求者在等待中无反馈 | ✅ 已关闭 |
| 中 | **#3674** 出站文件缺少 MIME type 导致 Teams 拒收附件 | 🔶 长期开放（8-30 创建），Fix 待合并 |
| 低 | **#4081** 环境变量覆盖导致 update-skills 测试不稳定 | 🔶 Fix PR 待合并 |

---

## 6. 功能请求与路线图信号

- 今日无新功能请求 Issue。
- #4083（社区展示）显示项目有意将 Community section 作为生态展示窗口，后续可能持续吸纳同类引用。
- #4082 的 gateway pin 升级到 1.45.0 表明项目紧跟 OneCLI 上游节奏，依赖管理是持续投入方向。
- #3674（Teams 文件 MIME 修复）若合并，将补齐 Teams 渠道的文件发送能力，是渠道兼容性路线上的明确一步。

---

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法直接提炼用户反馈。间接信号：

- **生产用户真实痛点**（来自 #4079）：飞书群聊场景中，用户依赖进度卡片观察 Agent 执行 Bash 等工具的过程；卡片被误撤回直接损害透明度与信任感——说明“执行过程可视化”是多渠道部署的核心需求。
- **审批等待体验**（来自 #4080）：管理员/审批者在 DM 线程中等待审批卡片，说明权限敏感操作（如 `ncl destinations-add`）的交互反馈位置很重要。
- **环境配置易错**（来自 #4081、#4082）：`.env` 读取时机、环境变量泄漏影响测试，反映配置管理是用户/开发者的常见摩擦点。

---

## 8. 待处理积压

- **#3674**（[链接](https://github.com/nanocoai/nanoclaw/pull/3674)）— 由 @orgads 于 2026-08-30 提交，至今约 **6 周未合并**，今日（10-12）有更新但状态仍为 OPEN。涉及 Teams 渠道文件传输核心兼容性，建议维护者优先评审，避免贡献者流失。
- **#4082、#4081、#4083** 均为昨日新建，尚在正常评审周期内，暂不算积压。

**健康度小结**：贡献管道通畅、修复质量高（普遍附测试与缺陷注入验证），主要风险点是少数社区 PR（如 #3674）评审周期偏长。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-10-13

## 1. 今日速览

IronClaw 今日整体活跃度偏低：过去 24 小时仅新增 2 条 Issue，无 PR 活动，无版本发布。两条 Issue 分别为一项第三方扩展提案（#8136）和一份日常失败分类报告（#8135），后者是项目持续性的质量追踪机制的一部分。无 Bug 报告、无崩溃反馈，社区处于平稳观望期。项目当前处于“维护+生态扩展讨论”阶段，而非高强度迭代期。

## 2. 版本发布

今日无新版本发布。（省略详细内容）

## 3. 项目进展

今日无 PR 合并或关闭，项目代码层面无向前推进。值得关注的是质量追踪流程仍在运转——每日失败分类报告持续产出（见 #8135），说明 CI 基准测试与质量分析管线健康，为后续模型质量改进提供了数据基础。

## 4. 社区热点

今日无高热度讨论，两条 Issue 均为 0 评论、0 👍：

- **[#8136] 可选的 Plazmi 托管 MCP 扩展提案**（@cairn-agent）：提案者希望利用 IronClaw 现有的声明式扩展接口（declarative auth / egress）构建一个独立安装的 [Plazmi](https://plazmi.gg) 托管 MCP 伴侣扩展，而非在宿主中添加厂商逻辑。这反映了社区对**通过插件生态而非核心侵入方式接入第三方服务**的诉求，是健康的外部扩展信号。链接：https://github.com/nearai/ironclaw/issues/8136
- **[#8135] 每日失败分类报告 2026-10-12**（@pranavraja99）：分析 officeqa 套件中 52 个未通过任务，结论为**全部属于模型质量问题**（涉及 DeepSeek-V4-Flash 等），而非基础设施或工具链故障。链接：https://github.com/nearai/ironclaw/issues/8135

## 5. Bug 与稳定性

今日**无新增 Bug、崩溃或回归报告**。#8135 的失败分类明确指出 52 个未通过用例均为模型能力错误，无框架层面缺陷，对稳定性而言是积极信号。

| 问题 | 严重程度 | Fix PR |
|---|---|---|
| 无 | — | — |

## 6. 功能请求与路线图信号

- **托管 MCP 扩展机制（#8136）**：提案验证了声明式扩展接口（auth + egress）已被外部开发者识别为可复用的扩展点。若维护者认可，可能推动官方进一步完善扩展规范文档或 auth 能力。由于今日无相关 PR，短期内纳入版本的可能性未知，需维护者回应。

## 7. 用户反馈摘要

- 外部开发者（@cairn-agent）对 IronClaw 的**声明式扩展设计表示认可**，认为“现有接缝（seam）”足以承载第三方集成，避免了厂商逻辑污染宿主——这是对架构设计的正面反馈。
- 质量追踪显示用户/维护者对底层模型（DeepSeek-V4-Flash）在 officeqa 任务上的表现不满，痛点集中在**模型推理质量**而非工具本身。

## 8. 待处理积压

- [#8136](https://github.com/nearai/ironclaw/issues/8136)：新提案，0 回应，建议维护者尽快表态（接受/拒绝/引导至 RFC 流程），避免扩展生态提案积压。
- [#8135](https://github.com/nearai/ironclaw/issues/8135)：每日失败分类为流程性 Issue，建议维护者确认模型质量问题是否有对应的模型升级或路由调整计划。

---

**健康度小结**：今日数据量小但无负面信号——无 Bug、无回归，架构获得外部开发者正向认可。建议关注 #8136 提案的响应速度，作为社区参与度健康度的先行指标。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-10-13）

## 1. 今日速览

LobsterAI（网易有道开源，约 6.1k★）今日保持高活跃开发节奏：过去 24 小时内 PR 更新达 11 条，其中 9 条已合并/关闭，2 条待处理，开发迭代速度稳定。今日工作聚焦于 **Cowork 协作体验**（专家广场、桌面伴侣、会话标题生成）、**Computer Use 跨平台支持**（Intel Mac runtime）及多项稳定性修复。无新版本发布，但 `Release/2026.9.24` 发布分支 PR 已于昨日合并，预示版本发布临近。Issues 侧更新 2 条，社区交互平稳。

## 2. 版本发布

今日无新版本发布。注意：[#2843 Release/2026.9.24](https://github.com/netease-youdao/LobsterAI/pull/2843) 发布分支 PR 已于 10-12 合并，建议关注后续 tag 发布动态。

## 3. 项目进展

今日合并/关闭的重要 PR：

**功能类**
- [#2849 专家广场与召唤流程](https://github.com/netease-youdao/LobsterAI/pull/2849)（OPEN）：新增可配置的 Expert Plaza，用于发现和召唤任务型 Agent；专家内容来自 Overmind 与版本化 CDN 目录，无需重建客户端即可更新内容；同时将 Kits 迁移至共享的 Kits/Skills/Connectors 目录。**待合并，为本周期最大功能增量**。
- [#2846 桌面会话自动生成标题](https://github.com/netease-youdao/LobsterAI/pull/2846)：新会话基于首条提问异步生成短标题，失败/超时静默保留原标题，且明确排除 IM、定时任务、分叉等场景，隐私设计考虑周全（仅发送 ≤1000 字符文本与文件名）。
- [#2847 桌面伴侣 Composer](https://github.com/netease-youdao/LobsterAI/pull/2847) / [#2848 Open With](https://github.com/netease-youdao/LobsterAI/pull/2848)：桌面端交互体验扩展。

**修复与稳定性**
- [#2845 Computer Use MCP 桥接退出修复](https://github.com/netease-youdao/LobsterAI/pull/2845)：修复 stdio 关闭时 MCP 桥接不退出导致的僵尸进程问题（POSIX 平台）。
- [#2844 支持 Intel Mac](https://github.com/netease-youdao/LobsterAI/pull/2844)：新增 mac-x64 runtime 0.2.2（交叉编译），补齐 Computer Use 平台覆盖。
- [#2841 预览缩放边缘平移修复](https://github.com/netease-youdao/LobsterAI/pull/2841)：修复图片/SVG/Mermaid 放大后无法平移到左边缘的问题。
- [#2842 暂时隐藏每轮积分显示](https://github.com/netease-youdao/LobsterAI/pull/2842)：因积分统计未涵盖图像生成成本，主动下线该 UI，体现对数据准确性的负责态度。
- [#2850 IM 累加器销毁安全化](https://github.com/netease-youdao/LobsterAI/pull/2850)：CLOSED，修复 `IMCoworkHandler.destroy()` 抛错，关联 #926。

**整体评估**：今日+昨日共关闭 9 个 PR，覆盖功能、平台、安全多个维度，项目处于发布前密集打磨阶段。

## 4. 社区热点

- **[#2801 Nautilus agent harness 榜单邀收录](https://github.com/netease-youdao/LobsterAI/issues/2801)**（OPEN，2 评论，今日更新）：第三方独立评测组织 Nautilus 邀请 LobsterAI 作为“国产代表”免费收录进 10/12 发布的 harness 榜单，承诺判据 sha 预注册、独立判分、可复现。诉求：希望项目方确认参与并提供实测环境。
- **[#2672 mermaid 10.9.8 → 12.1.0 依赖升级](https://github.com/netease-youdao/LobsterAI/pull/2672)**（OPEN，10-12 有更新）：Dependabot 自动升级，跨两个大版本，可能涉及 API 变更，需维护者评估。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#2793 Skill 元数据可控导致卸载时任意目录删除](https://github.com/netease-youdao/LobsterAI/issues/2793)（CLOSED）：仅影响 `main` 分支（引入 `openclawSourceDir` 后），最新 tag v0.2.4 不受影响。**路径遍历类安全隐患，已关闭**（评论 1 条），建议确认修复 PR 是否已合入并考虑在下一 tag 前验证 | 已关闭 |
| 🟡 中 | [#2850 IM 后台累加器销毁抛错](https://github.com/netease-youdao/LobsterAI/pull/2850)（Fixes #926） | Fix PR 已关闭（应已合入） |
| 🟡 中 | [#2845 MCP 桥接 stdio 关闭不退出](https://github.com/netease-youdao/LobsterAI/pull/2845)（POSIX 僵尸进程） | Fix PR 已合并 |
| 🟢 低 | [#2841 预览缩放无法平移至边缘](https://github.com/netease-youdao/LobsterAI/pull/2841) | 已修复 |

今日无新增崩溃/回归报告。

## 6. 功能请求与路线图信号

- **Expert Plaza / Agent 市场**（[#2849](https://github.com/netease-youdao/LobsterAI/pull/2849)）+ CDN 内容目录化，表明项目正向“Agent 生态平台”方向演进，极可能进入下一版本。
- **桌面伴侣 Composer**（#2847）与 **Open With**（#2848）暗示桌面端将成为差异化重点。
- **Computer Use 平台扩展**（Intel Mac #2844）显示持续投入跨平台 computer-use 能力。
- 积分体系重构（#2842 隐藏积分条）说明计费透明度在路线图上，待 breakdown 完善后回归。

## 7. 用户反馈摘要

- **#2793 报告者 @carfeii**：安全研究型用户，报告详尽（含受影响 commit hash 与版本对比），对供应链/卸载安全有较高要求——反映 skill 生态引入后的安全审视压力。
- **#2841 引发的用户报告**：用户实际使用预览面板放大图片时遇到内容不可达，说明 artifacts/预览功能有真实日常使用群体。
- **积分显示问题**（#2842 背后）：用户关注每轮消耗积分，但当前统计不含图像生成成本，存在准确性信任风险，维护者选择主动隐藏而非放任误导。

## 8. 待处理积压

- **[#2801 harness 榜单收录邀请](https://github.com/netease-youdao/LobsterAI/issues/2801)**：榜单 10/12 已上线，仍处 OPEN，建议尽快回应以获得独立评测曝光。
- **[#2849 Expert Plaza](https://github.com/netease-youdao/LobsterAI/pull/2849)**：大型功能 PR 待评审，涉及 renderer/main/cowork 多区域，需重点 review。
- **[#2672 mermaid 大版本升级](https://github.com/netease-youdao/LobsterAI/pull/2672)**：悬挂近一个月（09-14 创建），且 #2841 刚修复 Mermaid 预览问题，建议优先处理以避免修复与升级冲突。
- **安全提醒**：确认 #2793（卸载目录删除）的修复已合入 main，并在下个 tag 的 release note 中说明。

---
*数据来源：GitHub API，统计窗口为 2026-10-12 至 2026-10-13（UTC）。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# 📰 Moltis 项目动态日报 — 2026-10-13

## 1. 今日速览

Moltis 今日整体活跃度偏低但质量较高：过去 24 小时共 1 条 Issue 更新（新开 1）、2 条 PR 更新（均为待合并）、0 个新版本发布。核心贡献者 @ManuRakh 连续提交两个聚焦 **agent 编排能力**的 PR（#1301、#1302），显示项目正围绕 sub-agent 架构与权限治理方向持续演进。同时社区报告了一个涉及 **访问策略绕过** 的安全相关 Bug（#1303），值得关注。当前无合并/关闭事件，迭代节奏平稳。

## 2. 版本发布

今日无新版本发布。（最新 Releases：无）

## 3. 项目进展

今日无 PR 被合并或关闭，但两个待合并 PR 代表了明确的功能推进方向：

- **[#1301](https://github.com/moltis-org/moltis/pull/1301) Chat ↔ sub-agent 一致性**（@ManuRakh）：对齐直接对话与 `spawn_agent` 子运行的 preset 字段行为（persona、system_prompt_suffix、delegate_only、preset model），消除 coordinator/worker 架构下两条执行路径的行为分歧。
- **[#1302](https://github.com/moltis-org/moltis/pull/1302) Preset spawn.allow 白名单**（@ManuRakh）：新增 `agents.presets.<id>.spawn.allow` 配置，限制 `spawn_agent` 可调用的目标 preset，支持组织架构式/协调者式的 agent 拓扑治理。注意该 PR 存在依赖关系（"Depends on..."），合并顺序需遵循维护者安排。

**评估**：两个 PR 均围绕多 agent 编排的一致性与权限控制，合在一起可视为一次小步快跑的架构完善。

## 4. 社区热点

- **[#1303](https://github.com/moltis-org/moltis/issues/1303)**（0 评论 / 0 👍，今日新开）：虽暂无讨论热度，但内容最具影响力。用户 @texxronn 报告：当 web UI / cron / webhook / `sessions_send` 等非网关回合运行在 **channel-bound 会话** 上时，系统除按预期降级为公共上下文外，还会 **将回复投递到该 channel 聊天**，导致账户级 chat 访问策略被绕过，且 Web UI 无任何警告。这反映用户对 **跨渠道会话隔离与权限边界** 的核心诉求。

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 高（安全/策略类） | [#1303](https://github.com/moltis-org/moltis/issues/1303) | Channel-bound 会话的 web 回合绕过账户 chat 访问策略，向 channel 投递回复，且无 UI 警告 | ❌ 暂无关联 fix PR |

建议维护者优先评估 #1303，因其涉及访问控制而非单纯功能缺陷。

## 6. 功能请求与路线图信号

- **Preset 权限治理**：#1302 的 `spawn.allow` 白名单机制直接回应了组织化 agent 拓扑（org-chart / coordinator graphs）的管理需求，若合并，很可能与 #1301 一同出现在下一个小版本中。
- **路径一致性**：#1301 表明维护者重视“直接对话 agent”与“作为 sub-agent 调用”的行为统一，是 coordinator/worker 模式成熟化的信号。
- #1303 的修复方向（channel 投递策略 + Web UI 警告）可能催生新的配置项或警告机制。

## 7. 用户反馈摘要

- 来自 #1303 的痛点：使用 Web UI / cron / webhook 操作 channel-bound 会话时，**预期行为与实际投递不符** —— 用户以为只是上下文降级，实际却被发送到外部 channel，存在误投递与越权风险；且系统无警告提示，用户无从察觉。这表明实际部署中存在 **多渠道（Web + IM channel）混合使用** 的场景。

## 8. 待处理积压

- **[#1303](https://github.com/moltis-org/moltis/issues/1303)**：今日新开、0 评论、0 👍，尚无维护者回应。鉴于涉及访问策略绕过，建议尽快确认并标注优先级。
- **PR [#1301](https://github.com/moltis-org/moltis/pull/1301) / [#1302](https://github.com/moltis-org/moltis/pull/1302)**：均处于 OPEN 状态，#1302 存在依赖 PR，提醒维护者审查合并顺序，避免长期挂起。

---
*数据来源：Moltis GitHub 仓库（过去 24 小时） | 生成日期：2026-10-13*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 — 2026-10-13

## 1. 今日速览

CoPaw（QwenPaw）今日保持高活跃度：过去 24 小时内 Issues 更新 16 条（14 新开/活跃，2 关闭），PR 更新 34 条（26 待合并，8 已合并/关闭），无新版本发布。当日新增 Issue 集中在 Windows 平台兼容性、Hub 运行时管理、多端消息同步等核心稳定性问题，社区响应迅速——多个当日报告的 Bug（如 #8206）当天即出现对应修复 PR。多个超大尺寸 PR（#8187 渠道插件化、#8207 记忆重构）处于推进中，显示架构层面演进正在加速。整体项目健康度良好，Issue-PR 联动效率高。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的重要 PR（8 条），主要修复与 Creator 插件发布相关：

- **[PR #8121](https://github.com/agentscope-ai/QwenPaw/pull/8121)** (已关闭) — Creator 插件发布 2.0.1（1.3.0 → 2.0.1），携带受控媒体生产能力，是今日最大动作。
- **[PR #8193](https://github.com/agentscope-ai/QwenPaw/pull/8193)** (已关闭) — Scroll 上下文管理优化：提前回收已消费的活跃工具结果，验证溢出恢复路径。
- **[PR #8007](https://github.com/agentscope-ai/QwenPaw/pull/8007)** (已关闭) — TaskTracker 修复：仅在 producer task 存在后注册 run，消除占位 Future 残留。
- **[PR #7806](https://github.com/agentscope-ai/QwenPaw/pull/7806) / [PR #6701](https://github.com/agentscope-ai/QwenPaw/pull/6701) / [PR #6548](https://github.com/agentscope-ai/QwenPaw/pull/6548)** (已关闭) — 官网博客更新与 GA 埋点，多个长期滞留 PR 今日集中清理。
- **Issue #8105**（工具审批按钮失效）已关闭，审批链路修复落地。

整体看，今日进展以稳定性修复 + Creator 2.0.1 发布为主，渠道插件化（#8187）等大型重构仍在审阅中，未进入主干。

## 4. 社区热点

- **[Issue #8174](https://github.com/agentscope-ai/QwenPaw/issues/8174)**（4 评论）— 内置 Tavily provider 强制 keyless 模式，付费用户无法使用自有额度。热度最高，且已有响应：**[PR #8204](https://github.com/agentscope-ai/QwenPaw/pull/8204)**（首次贡献者）当日提交，通过 credential store 支持可选 API key，含 authed→keyless 降级。诉求：商业化搜索服务的可配置性。
- **[Issue #8172](https://github.com/agentscope-ai/QwenPaw/issues/8172)**（3 评论）— Console 聊天间歇性静默空完成，模型根本未被调用，是影响核心体验的高优先级 Bug，NAS/Docker 自部署用户报告。
- **[Issue #8073](https://github.com/agentscope-ai/QwenPaw/issues/8073)**（3 评论，已关闭）— V2.2.2.beta4 局域网设备无法打开会话页，已随 beta 迭代解决。
- **[Issue #8199](https://github.com/agentscope-ai/QwenPaw/issues/8199)** — Firecrawl 团队官方主动提出作为第三个 web_search provider 并承诺维护，是重要的生态合作信号。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#8213](https://github.com/agentscope-ai/QwenPaw/issues/8213) | Hub 重启后 desired-running 的 Local runtime 保持停止，cron 任务静默漏跑，直到有认证请求才恢复 | 无 fix PR |
| 🔴 高 | [#8172](https://github.com/agentscope-ai/QwenPaw/issues/8172) | Console 聊天空完成，模型未被调用，前端无反馈 | 无 fix PR |
| 🔴 高 | [#8194](https://github.com/agentscope-ai/QwenPaw/issues/8194) | creator 启动钩子因 stale pid 触发未捕获 SystemError，桌面端无法启动 | 无 fix PR |
| 🟠 中 | [#8206](https://github.com/agentscope-ai/QwenPaw/issues/8206) | Windows 下删除项目必失败（WinError 5，creator.log 句柄未释放） | ✅ [PR #8210](https://github.com/agentscope-ai/QwenPaw/pull/8210) 当日提交 |
| 🟠 中 | [#8179](https://github.com/agentscope-ai/QwenPaw/issues/8179) | GitHub 安装 skill 时二进制文件被 U+FFFD 替换损坏（图片/字体不可读） | ✅ [PR #8198](https://github.com/agentscope-ai/QwenPaw/pull/8198) 审阅中 |
| 🟠 中 | [#8202](https://github.com/agentscope-ai/QwenPaw/issues/8202) | 消息仅在 run 结束时持久化，多设备间回合进行中互相不可见 | 无 fix PR |
| 🟡 低 | [#8177](https://github.com/agentscope-ai/QwenPaw/issues/8177) | Console basename 硬编码 `/console`，反代子路径部署不可行 | ✅ [PR #8197](https://github.com/agentscope-ai/QwenPaw/pull/8197) 审阅中 |

## 6. 功能请求与路线图信号

- **Tavily API key 配置**（[#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174) + [PR #8204](https://github.com/agentscope-ai/QwenPaw/pull/8204)）：已进入审阅，大概率纳入下个版本。
- **Firecrawl web_search provider**（[#8199](https://github.com/agentscope-ai/QwenPaw/issues/8199)）：官方团队认领维护，纳入可能性高，将扩展搜索生态。
- **决策模型类型 + JEV provider**（[PR #8205](https://github.com/agentscope-ai/QwenPaw/pull/8205)）：引入 `model_type: decision`，为后续路由功能铺路，是明确的路线图信号。
- **渠道插件化 + 子进程隔离**（[PR #8187](https://github.com/agentscope-ai/QwenPaw/pull/8187)，XXXL）：架构级重构，落地后将显著提升扩展性与隔离安全性。
- **i18n 受保护执行契约 prompt**（[#8211](https://github.com/agentscope-ai/QwenPaw/issues/8211)）：复用现有 scroll prompt i18n 机制，实现成本低，易被采纳。
- **skill-pool 下载后台化 + 可取消**（[#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126)）：#8055 后续，方向明确。
- **模型池删除入口**（[#8195](https://github.com/agentscope-ai/QwenPaw/issues/8195)）、**ESP32 硬件接入类 Meta Muse**（[#8189](https://github.com/agentscope-ai/QwenPaw/issues/8189)）：后者属探索性需求。

## 7. 用户反馈摘要

- **自部署/Docker/NAS 用户**是报告主力（#8172、#8179、#8177），痛点集中在反代部署受限、console 交互异常、skill 安装静默损坏——“静默失败无提示”是反复出现的主题。
- **Windows 用户**体验明显落后（#8206、#8194 均为 Windows 特有），文件句柄与进程探测机制在 Windows 语义下失效，建议维护者加强 Windows CI 覆盖。
- **付费服务集成用户**（Tavily）对“强制 keyless”不满，希望开放自有额度配置（#8174），反映项目正从极客玩具走向生产可用场景。
- **多端用户**期望回合进行中的实时跨设备可见性（#8202），以及 iGPU 上 console 的 GPU 空载占用问题（#8135），UI 性能分级诉求明确。
- 正面信号：多个 Bug 当日即获得修复 PR（#8206→#8210、#8174→#8204），社区贡献者（含首次贡献者）响应积极，用户满意度体现在持续深入的反馈质量上。

## 8. 待处理积压

- **[Issue #8213](https://github.com/agentscope-ai/QwenPaw/issues/8213)**（Hub 重启后 runtime 不恢复 + cron 漏跑）— 今日新报，尚无响应与 fix，涉及可靠性核心，建议优先分派。
- **[Issue #8172](https://github.com/agentscope-ai/QwenPaw/issues/8172)**（console 空完成）— 3 评论仍在排查中，影响核心聊天路径，建议维护者跟进复现。
- **[Issue #8202](https://github.com/agentscope-ai/QwenPaw/issues/8202)**（多端消息不可见）— 需要消息持久化时机重构，无认领。
- **[PR #6384](https://github.com/agentscope-ai/QwenPaw/pull/6384)**（AskUserQuestion 结构化交互工具）— 2026-07-23 开启，Under Review 近 3 个月，建议推进人工审阅。
- **[PR #7964](https://github.com/agentscope-ai/QwenPaw/pull/7964)**（Langfuse 工具观测缺失 output）— 9 月 24 日开启，Under Review 状态持续近 3 周，可观测性用户在等待。

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