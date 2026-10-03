# OpenClaw 生态日报 2026-10-03

> Issues: 481 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-03 04:23 UTC

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

# OpenClaw 项目日报 · 2026-10-03

## 1. 今日速览

OpenClaw 今日保持高度活跃：24 小时内 Issues 更新 481 条（新开/活跃 323、关闭 158），PR 更新 500 条（待合并 303、合并/关闭 197），并发布 2 个新版本（v2026.9.8 与 extended-stable v2026.8.35）。项目主线明显聚焦于**大规模架构重构（"deslop" 系列）与把 SQLite/重负载操作移出 Gateway 主线程**，维护者 @steipete 今日密集提交十余个重构/性能 PR。与此同时，2026.9.6–9.7 版本引发的资源泄漏、崩溃循环与升级失败类 P0/P1 问题仍在消化中，稳定性是当前最大压力点。整体判断：开发节奏健康、迭代快速，但近两个版本引入的回归负担较重。

## 2. 版本发布

### v2026.9.8（openclaw 2026.9.8）
主题是**更安全的更新与 Doctor 恢复**：
- 保留插件设置、容忍瞬时 SQLite 竞争
- 阻止不安全的 Windows schema 升级
- 放行已验证为空的 Telegram 迁移
- 为深度修复与大规模 fleet 维修设置边界
- 关联修复：#160344、#160702、#160718、#161832

**迁移提示**：从 2026.9.4/9.6 升级的用户（尤其 Windows 与多 agent 部署）应优先关注此版本，它直接针对近期 update/doctor 失败类问题（见 #157818、#145252）。

### v2026.8.35（extended-stable / LTS 等价）
Gateway-only 稳定通道：2026 年 8 月底代码 + 关键安全更新、可靠性/性能修复及新模型支持。**生产环境若受 9.x 回归影响，extended-stable 是回退选择。**

## 3. 项目进展

今日 PR 活动以维护者 @steipete 的重构浪潮为主线：

- **主线程减负**：
  - [#163889](https://github.com/openclaw/openclaw/pull/163889)（XL）将 turn append+entry 操作移入 agent executor，直接回应 #117262（33s 事件循环阻塞）这类 SQLite 竞争问题
  - [#163815](https://github.com/openclaw/openclaw/pull/163815) 将 session 生命周期变更移出主线程
  - [#164020](https://github.com/openclaw/openclaw/pull/164020) 将 secret 设置元数据写入移入 workers
- **大规模 deslop 清理**：[#163969](https://github.com/openclaw/openclaw/pull/163969)（infra）、[#164022](https://github.com/openclaw/openclaw/pull/164022)（gateway）、[#163945](https://github.com/openclaw/openclaw/pull/163945)（state/memory 存储，清理 pre-July 内存表导入器）、[#164011](https://github.com/openclaw/openclaw/pull/164011)（UI core）、[#164030](https://github.com/openclaw/openclaw/pull/164030)（qa-lab）；已合并的第七轮 infra 清理 [#161513](https://github.com/openclaw/openclaw/pull/161513) 净删除 722 行
- **面向用户的功能**：
  - [#164013](https://github.com/openclaw/openclaw/pull/164013) macOS 原生侧栏多选/批量编辑/拖拽管理会话
  - [#160108](https://github.com/openclaw/openclaw/pull/160108)（XL）云 Worker 支持企业私有 GitHub 仓库
  - [#163995](https://github.com/openclaw/openclaw/pull/163995) Control UI 显示 worker 生命周期历史
- **可观测性与修复**：[#164028](https://github.com/openclaw/openclaw/pull/164028) Prometheus RPC 方法标签精确化；[#163991](https://github.com/openclaw/openclaw/pull/163991) `openclaw status` 区分历史升级失败与当前健康；[#162270](https://github.com/openclaw/openclaw/pull/162270)（已关闭）修复升级进度被误记为 error

**评估**：主线程 SQLite 减负系列若合并，将系统性解决一整类事件循环阻塞问题（#117262、#163566），是本周最有价值的架构进展。

## 4. 社区热点

| Issue | 评论 | 焦点 |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) Agent SQLite WAL 无限增长至 GB 级，阻塞 Windows Gateway 启动 | 104 | P0，9.2/9.3 起持续发酵，`wal_autocheckpoint=1000` 失效 |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) 实时语音会话保留无限 provider/consult 状态 | 59 | P2 资源泄漏，慢/突发 provider 行为下内存失控 |
| [#144911](https://github.com/openclaw/openclaw/issues/144911)（已关闭）MCP 初始化超时引发未处理 rejection 崩溃 Gateway | 31 | 已修复关闭 |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) prompt cache 跨边界失效 | 21 | 长会话成本/延迟问题，需安全+产品双重评审 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) google-vertex/gemini-3.1-pro-preview 回归 "Cannot convert undefined" | 17 | 3 月至今未修的 P0 发布阻塞项 |
| [#145252](https://github.com/openclaw/openclaw/issues/145252) 官方 9.3/9.4 升级可靠性追踪贴 | 12 | 维护者协调升级/恢复问题的中枢 |

**诉求分析**：社区最强烈的痛点集中在**资源泄漏（内存/磁盘/进程）**与**升级路径可靠性**，#143524 的 104 条评论表明单机用户对“跑几天磁盘/内存爆掉”零容忍。

## 5. Bug 与稳定性（按严重度）

**P0**
- [#143524](https://github.com/openclaw/openclaw/issues/143524) WAL 增长阻塞启动 — 无 fix PR，标记 no-new-fix-pr
- [#162031](https://github.com/openclaw/openclaw/issues/162031) 2026.9.7 运行时工具装配阶段崩溃循环（macOS）— 无 fix PR
- [#157818](https://github.com/openclaw/openclaw/issues/157818) 9.4→9.6 升级因旧 updater 300s canary 上限失败 — 9.8 或已缓解
- [#160521](https://github.com/openclaw/openclaw/issues/160521) state DB 读准入 seal → unhandled rejection 崩溃
- [#158390](https://github.com/openclaw/openclaw/issues/158390) plugin-captures 临时目录永不回收，磁盘无限增长

**P1**
- [#160548](https://github.com/openclaw/openclaw/issues/160548) prepared-model-catalog worker 每 5 分钟泄漏 ~1 GiB，且每次回收杀死所有等待中的 turn（9.6 回归，与已关闭的 [#159514](https://github.com/openclaw/openclaw/issues/159514) 同族）
- [#157989](https://github.com/openclaw/openclaw/issues/157989) 每次启动重写 GB 级插件源造成 SSD 磨损（9.5 回归）
- [#161953](https://github.com/openclaw/openclaw/issues/161953)（已关闭）Windows sessions.create 确定性失败 — 已修复
- [#154572](https://github.com/openclaw/openclaw/issues/154572) claude-cli 子代理 spawn 必现失败（9.5）
- [#163566](https://github.com/openclaw/openclaw/issues/163566) 修复后每 turn 烧 ~100s CPU（9.7）
- [#161379](https://github.com/openclaw/openclaw/issues/161379) catalog 刷新循环永久占满一个 CPU 核
- [#162119](https://github.com/openclaw/openclaw/issues/162119) Codex 模型切换后间歇 403

**模式判断**：9.5–9.7 引入的 catalog worker / plugin capture 相关回归（泄漏、SSD 写放大、CPU 自旋）是一族问题，尚缺系统性 fix PR，是下版本最应优先的方向。

## 6. 功能请求与路线图信号

- **Per-agent dreaming 配置** [#67413](https://github.com/openclaw/openclaw/issues/67413)（👍5）：所有 workspace 同时 dreaming 导致 OOM，与 #65374（dreaming 跨 agent 污染身份）、#150635（deep 阶段永不晋升）共同指向 memory/dreaming 子系统重构——与已提交的 [#163945](https://github.com/openclaw/openclaw/pull/163945)（deslop state/memory storage）方向吻合，**纳入概率高**
- **企业 GitHub 云 Worker** [#160108](https://github.com/openclaw/openclaw/pull/160108)：明确的商业化信号
- **cron 失败自动重试** [#49740](https://github.com/openclaw/openclaw/issues/49740)（已关闭 stale）：长期需求，[#117605](https://github.com/openclaw/openclaw/pull/117605)（任务取消 fail-closed）显示任务可靠性在被推进，重试可能随后跟进
- **Feishu/Teams/Mattermost 原生审批按钮** [#104521](https://github.com/openclaw/openclaw/issues/104521)（stale closed）：需要产品决策
- **Voice 确认自然语言应答** [#164031](https://github.com/openclaw/openclaw/pull/164031)：社区贡献，已有实现

## 7. 用户反馈摘要

- **痛点**：① 升级即出事——“每次升 9.x 都要跑 doctor，还可能失败”（#157818、#145252）；② 长期运行的资源失控——WAL/内存/僵尸进程/磁盘（#143524、#97616、#158390）；③ 静默消息丢失——WhatsApp 回复、子代理最终文本无失败记录（#161976、#154299）；④ Windows 一等公民体验差（#38327、#161953、#143524 均为 Windows）
- **满意点**：extended-stable 通道的存在被大规模部署用户视为救命稻草；issues 分诊体系（clawsweeper 标签、rating）透明度高；维护者对 source-repro 类问题响应较快（#144911、#161953 从报告到关闭周期短）
- **典型场景**：单机 7+ agent、Telegram/WhatsApp/Discord 多通道、systemd 长期运行的家庭服务器用户是报 bug 的主力画像

## 8. 待处理积压

| 条目 | 状态 | 说明 |
|---|---|---|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | P0，3 月至今 | gemini-3.1-pro 回归阻塞，no-new-fix-pr，**强烈建议维护者处理** |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | P1，6 月至今 | 僵尸进程泄漏，无 fix PR |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | P2，7 月至今 | prompt cache 失效，卡在安全+产品评审 |
| [#118839](https://github.com/openclaw/openclaw/issues/118839) | P1 | restart recovery 回归在含修复的 beta 上复现，需重开调查 |
| [#118885](https://github.com/openclaw/openclaw/issues/118885) | P1 | 大库启动重复 integrity_check |
| [#115424](https://github.com/openclaw/openclaw/issues/115424) | P0 | OOM 后恢复机制把一次崩溃放大为 7 次 core dump 循环 |
| [#121204](https://github.com/openclaw/openclaw/pull/121204) | P1 PR，8 月起 | Discord 恢复后旧消息饿死实时 mention，needs proof |

**健康度小结**：吞吐量与工程投入顶级，但 9.5–9.7 回归族（catalog/plugin-capture/升级路径）尚未闭环，建议关注 v2026.9.8 之后是否出现针对性修复 PR；长期 P0 #38327 已积压近 7 个月，是社区信任度的明显风险点。

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告（2026-10-03）

## 1. 生态全景

个人 AI 助手/自主智能体开源赛道已形成明显的梯队分化：以 OpenClaw 为首的头部项目单日 Issue/PR 更新量达数百条，已进入“高速迭代 + 承担企业级负载”的阶段，同时也开始为快速迭代付出回归代价。第二梯队（Hermes Agent、Zeroclaw、NanoBot、NanoClaw、CoPaw）日活跃量在 50 条上下，各自围绕可靠性、多渠道、桌面端体验形成差异化主线。尾部项目（IronClaw、LobsterAI、PicoClaw）活跃度低或明显放缓，多个项目（NullClaw、TinyClaw、Moltis、ZeptoClaw、EasyClaw）单日零活动，马太效应显著。值得注意的行业共性：**升级/更新链路可靠性与长驻资源泄漏是全生态共同的痛点**，而多渠道接入（Telegram/Slack/飞书/QQ）、网关架构拆分、GPT-6 新模型兼容是共同的功能主线。

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 481（新开/活跃 323，关闭 158） | 500（待合并 303，合并 197） | 2（v2026.9.8 + extended-stable） | ⭐⭐⭐⭐ 吞吐顶级，但 9.5–9.7 回归族未闭环 |
| **Hermes Agent** | 50（31 活跃，19 关闭） | 50（待合并 41，合并 9） | 0 | ⭐⭐⭐⭐ 快速关 bug，desktop 会话状态反复出问题 |
| **Zeroclaw** | 50（活跃 47，关闭仅 3） | 50（**全部待合并，合并 0**） | 0 | ⭐⭐⭐ 内容扎实但合并吞吐为零，v0.8.6 卡门禁 |
| **NanoClaw** | 50（33/17） | 30（24/6） | 0（更新通道规范化中） | ⭐⭐⭐⭐ 修复密集，更新器高危 Bug 是风险点 |
| **NanoBot** | 5（4/1） | 29（22/7） | 0 | ⭐⭐⭐⭐ 质量收敛好，PR 积压 22 个需关注 |
| **CoPaw** | 13（13/0） | 14（7/7） | 0 | ⭐⭐⭐⭐ 社区驱动活跃，bug→fix 响应快 |
| **LobsterAI** | 6（全部 stale 激活） | 3（0 合并） | 0 | ⭐⭐ 活跃度低，6 个月积压，安全 PR 去向不明 |
| **PicoClaw** | 3 | 4（2/2） | 0 | ⭐⭐ 维护响应滞后，核心体验 bug 拖 2 月+ |
| **IronClaw** | 1 | 0 | 0 | ⭐⭐ 平稳观察期，仅 1 条启动级 bug 无响应 |
| NullClaw / TinyClaw / Moltis / ZeptoClaw / EasyClaw | 0 | 0 | 0 | — 静默 |

## 3. OpenClaw 在生态中的定位

**优势**：
- **规模断层领先**：单日 Issue 更新 481 条、PR 500 条、双版本发布，活跃量是第二梯队项目的近 10 倍，社区画像（单机 7+ agent、多通道、systemd 长期运行的家庭服务器用户）表明已沉淀真实的大规模生产用户群。
- **发布工程成熟**：双通道发版（主线 + extended-stable LTS 等价物）在生态中独一无二，LobsterAI、CoPaw 等项目甚至连稳定 tag 都不规范；OpenClaw 的 extended-stable 被大规模部署用户“视为救命稻草”。
- **架构纵深**：主线程 SQLite 减负（#163889 等）、deslop 系列重构、云 Worker 企业私有仓库支持（#160108）显示其已进入系统级架构治理与企业商业化阶段，超出其他项目的“功能补齐”层次。

**风险**：9.5–9.7 引入的 catalog worker/plugin capture 回归族（泄漏、SSD 写放大、CPU 自旋）尚无系统性修复；P0 积压 #38327 已 7 个月未修，是社区信任度的最大风险点。

**对比结论**：OpenClaw 是生态的“事实参照系”——CoPaw 用户以“OpenClaw 已有飞书 agent 信息功能”作为诉求论据，Hermes 推进 Claude Code hooks 兼容（#132012）也意在承接同类生态迁移。其他项目整体处于 OpenClaw 一年前的阶段（渠道接入、网关拆分、更新器工程化），而 OpenClaw 在解决它们尚未遇到的问题（fleet 管理、federated worker、memory/dreaming 子系统）。

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **升级/更新链路可靠性** | OpenClaw、NanoClaw、Hermes、Zeroclaw | OpenClaw 9.x 升级失败族（#157818/#145252）+ v2026.9.8 专项修复；NanoClaw 今日新报数据丢失级 updater bug（#4003/#4004）并推进 stable/beta 更新通道（#3986）；Hermes `update` 卡 Git fetch（#131270） |
| **长驻资源泄漏（内存/磁盘/CPU）** | OpenClaw、NanoClaw、Zeroclaw、Hermes | OpenClaw WAL GB 级增长（#143524）、worker 泄漏 1 GiB/5min（#160548）；NanoClaw PreCompact 归档无上限致生产 OOM（#3716）；Zeroclaw daemon 140–177% CPU 自旋（#9799）+ 子进程内存看门狗 PR（#11456） |
| **网关/架构进程拆分** | OpenClaw、Zeroclaw、NanoClaw | OpenClaw 将 SQLite/重负载移出 Gateway 主线程；Zeroclaw v0.9.0 独立网关进程（#11002 系列 PR）；NanoClaw main→channels 463 commits 大合并 |
| **GPT-6 / 新模型兼容** | NanoBot、CoPaw | NanoBot GitHub Copilot 通道 GPT-6 失败（#5898）；CoPaw `gpt-5*` 前缀白名单漏掉 GPT-6（#8074→fix #8090） |
| **多渠道接入边缘 case** | NanoBot、NanoClaw、CoPaw、LobsterAI、OpenClaw | Telegram/Slack/QQ/飞书的消息截断、链接损坏、引用丢失、推送失败（NanoBot 5 个待合并渠道修复、CoPaw #8087、LobsterAI #910） |
| **静默失败可见性** | CoPaw、NanoClaw、NanoBot、OpenClaw | 截断无提示（CoPaw #8085）、agent 静默失联（NanoClaw #3568）、消息静默丢失（OpenClaw #161976）——用户共识：“宁可报错不要无声失败” |
| **上下文/压缩管理** | Zeroclaw、CoPaw、NanoClaw | Zeroclaw 首轮即超预算 3.3 倍（#5808）+ `/compact-context`；CoPaw 历史加载强诉求（#7884）；NanoClaw 压缩子系统成重灾区 |
| **安全加固** | LobsterAI、NanoBot、NanoClaw、OpenClaw | MCP 命令注入（LobsterAI #908）、代理凭据明文写入 systemd（NanoClaw #3985）、工具白名单绕过（NanoBot #5994）、企业私有仓库/TLS 代理（OpenClaw #160108、Zeroclaw #11443） |

## 5. 差异化定位分析

| 维度 | 代表项目差异 |
|---|---|
| **功能侧重** | OpenClaw：全栈自主智能体（dreaming/memory 子系统、fleet、云 Worker）；NanoBot：轻量多渠道 bot 框架，提供商注册表化（46 个 spec）；Zeroclaw：RPC/网关架构 + skill 学习循环差异化；Hermes：desktop/TUI/kanban 自动化调度；NanoClaw：容器化 Claude 代码执行 + 多渠道分支重构；CoPaw：桌面/Console 体验 + 多模态工具矩阵；LobsterAI：Electron 桌面记忆助手（网易有道）；PicoClaw：嵌入式轻量（Sipeed，Go 栈） |
| **目标用户** | OpenClaw/NanoClaw：家庭服务器自托管极客与商用部署延伸（医疗系统打包案例）；Hermes：desktop 用户 + Nous 付费档位生态；CoPaw/LobsterAI：桌面 GUI 用户（Mac 为主力反馈群体）；NanoBot：开发者自托管 + 渠道集成者 |
| **技术架构** | OpenClaw：TypeScript Gateway + SQLite，正做主线程减负；Zeroclaw：Rust crate 化倾向（A2A 协议 crate RFC）+ 独立网关进程；NanoBot：注册表式 provider/channel 插件架构；PicoClaw：Go 单二进制；LobsterAI/CoPaw：Electron/Tauri 桌面壳 |
| **商业模式信号** | OpenClaw（企业云 Worker #160108）与 Hermes（付费档位模型选择器、促销展示）商业化最明确；其余以社区/开源为主 |

## 6. 社区热度与成熟度分层

- **快速迭代期**：NanoClaw（维护者单日 10 PR 的冲刺式加固，正在规范化发版）、CoPaw（首次贡献者持续涌入，功能矩阵扩张）——增长动能强，但质量体系尚未跟上。
- **规模扩张与质量承压并存**：OpenClaw（吞吐顶级但回归负担重）、Hermes（快速关 bug 但 desktop 渲染反复出问题）。
- **质量巩固/架构重构期**：Zeroclaw（v0.9.0 网关拆分 + 50 PR 全待合并，处于大重构深水区）、NanoBot（P0/安全修复密集收敛，质量文化好但需清理 22 个 PR 积压）。
- **停滞/低活跃**：LobsterAI（6 个月积压、安全 PR 关闭去向不明，健康度最需警惕）、PicoClaw、IronClaw——维护带宽不足是共同特征。
- **静默**：NullClaw、TinyClaw、Moltis、ZeptoClaw、EasyClaw 单日零活动，可能已边缘化。

## 7. 值得关注的趋势信号

1. **“更新器”成为智能体项目的头号工程难题**：用户自托管意味着没有运维团队，一次失败更新即数据丢失（NanoClaw #4003）。OpenClaw 的 doctor/stable-beta 双通道、NanoClaw 的 tag 化更新通道均指向：**面向自托管的原子更新 + 回滚机制将成基础设施标配**。
2. **长驻进程的资源治理是 7×24 助手的生死线**：WAL/归档/僵尸进程/CPU 自旋类问题在 4+ 项目集中出现，且都发生在“跑几天后”——智能体运行时需要内建资源预算与看门狗（Zeroclaw `shell_max_memory_mb` 是方向样本）。
3. **生态迁移与互操作开始发生**：Hermes 兼容 Claude Code hooks、CoPaw 用户拿 OpenClaw 功能对标、A2A 协议 crate RFC——**智能体框架正从封闭走向 hooks/协议级互操作**，兼容层将成为争夺存量用户的杠杆。
4. **网关/执行分离是架构收敛方向**：OpenClaw 的主线程减负与 Zeroclaw 的独立网关进程殊途同归——多 agent、多渠道负载下，单体 Gateway 必然演进为 gateway + executor + worker 的分进程模型。
5. **静默失败零容忍**：截断、超限、消息丢失类“无报错失败”在所有项目引发最强烈用户情绪，**可观测性与显式失败上报应作为一等设计目标**，而非事后补丁。
6. **中文/企业场景用户群崛起**：飞书/QQ 渠道诉求、中文文件名处理、企业 TLS 代理/私有仓库需求多点涌现——**CJK 渠道深度适配与企业内网部署是明确的增量市场**。
7. **维护带宽决定生死**：同日对比下，LobsterAI/PicoClaw 的有效贡献因流程摩擦（CLA 检测、stale）流失，而 NanoBot/CoPaw 凭快速 review 留住高质量贡献者——小项目应优先保障分诊与 review 节奏，而非堆功能。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-10-03

## 1. 今日速览

NanoBot（[HKUDS/nanobot](https://github.com/HKUDS/nanobot)）今日保持高活跃度：过去 24 小时共有 **5 条 Issue 更新（4 新开/活跃，1 关闭）** 和 **29 条 PR 更新（22 待合并，7 已合并/关闭）**，无新版本发布。开发主线仍以密集的 bug 修复和回归修复为主，今日关闭的 7 个 PR 覆盖了 P0 级 cron 数据丢失、安全相关的 Linear 重授权漏洞、exec 超时、工具注册表绕过等多个关键方向。社区方面，围绕 `reasoningEffort` 全局影响 38 个 openai_compat 提供商的 Issue（#6002）和 `sendProgress` 语义问题（#6001）是今日最受关注的质量议题。整体健康度良好，但 22 个待合并 PR 的积压值得关注。

## 2. 版本发布

今日无新版本发布。最新版本仍为 v0.3.5（Issue #5898 中提及）。

## 3. 项目进展

今日共 **7 个 PR 合并/关闭**，含 1 个 P0 修复，项目在可靠性与安全性上取得实质推进：

| PR | 内容 | 优先级 |
|---|---|---|
| [#5933](https://github.com/HKUDS/nanobot/pull/5933) | **fix(cron): 保存 store 成功后再清除 pending actions**，修复 ENOSPC 等写入失败时定时任务静默丢失的数据丢失缺陷；配套 Issue #5932 同日关闭 | **P0** |
| [#5997](https://github.com/HKUDS/nanobot/pull/5997) | **fix(linear, security): 拒绝重授权后的过期成员权限更新**，防止旧请求重新启用已被禁用的成员 | P2 |
| [#5994](https://github.com/HKUDS/nanobot/pull/5994) | **fix(agent): 尊显式空工具注册表**，修复传入空注册表或策略禁用所有工具后默认工具被重新启用导致的越权 `write_file` | P2 |
| [#5995](https://github.com/HKUDS/nanobot/pull/5995) | **fix(agent, regression): 恢复 runner 迭代时清除陈旧失败状态**，避免成功恢复被上报为失败并吞掉最终 WebSocket 回复 | P2 |
| [#5957](https://github.com/HKUDS/nanobot/pull/5957) | **fix(exec): 不依赖轮询强制执行会话硬超时**，修复带 `yield_time_ms` 的命令可越过超时继续运行 | P2 |
| [#5918](https://github.com/HKUDS/nanobot/pull/5918) | **fix(tools): 保留合法的 JSON Schema union 参数**，`{"type": ["integer", "string"]}` 下不再错误转换/拒绝有效字符串 | P2 |
| [#5845 相关活跃](https://github.com/HKUDS/nanobot/pull/5845) | 新内置网关提供商 Opper 的 PR 今日仍有更新（待合并） | P2 |

**小结**：今日修复集中在「cron 数据持久化（P0）」「安全边界（Linear、工具白名单）」「Agent 运行循环正确性」三条线，配合相应回归测试，是一次质量向的整体收敛。数据丢失 + 两个安全相关修复同日落地，表明维护者对高严重度问题的响应速度较快。

## 4. 社区热点

- **[#6002](https://github.com/HKUDS/nanobot/issues/6002)（OPEN，评论 1）**：`reasoningEffort` 非 null 时对**全部 38 个 openai_compat 提供商**静默丢弃 `temperature`，而非仅针对 o1/o3/o4 推理模型。报告者 @GZY-SUPER-HACKER 做了注册表级的数据分析（46 个 ProviderSpec 中 38 个受影响）。诉求是：配置规则的作用域过宽，影响了大量非推理模型的采样参数控制。
- **[#5898](https://github.com/HKUDS/nanobot/issues/5898)（OPEN，评论 4，今日最活跃 Issue）**：v0.3.5 无法通过 GitHub Copilot 认证使用 OpenAI 6 系列模型，持续获得社区跟进讨论。这是新模型兼容性需求的信号。
- **[#6001](https://github.com/HKUDS/nanobot/pull/6001)（OPEN PR）**：同一位高活跃贡献者质疑 `channels.sendProgress` 默认开启但实际不产出任何文本，“开关名不副实”，提出应授权其投递的内容。属于 API 语义/设计层面的深度反馈。

## 5. Bug 与稳定性

按严重程度排列：

1. **P0（已修复）** — [#5932](https://github.com/HKUDS/nanobot/issues/5932)：CronService 在保存 store 失败（如磁盘满 ENOSPC）时丢失已接受的 pending actions。→ 已由 [PR #5933](https://github.com/HKUDS/nanobot/pull/5933) 修复并关闭。
2. **高影响·待修复** — [#6002](https://github.com/HKUDS/nanobot/issues/6002)：`reasoningEffort` 全局丢弃 `temperature`，波及 38 个提供商，影响所有依赖温度参数调优的用户。暂无关联 fix PR。
3. **高影响·待修复** — [#5898](https://github.com/HKUDS/nanobot/issues/5898)：GitHub Copilot 通道不支持 GPT-6 系列，请求直接失败。暂无关联 fix PR。
4. **中** — [#6008](https://github.com/HKUDS/nanobot/issues/6008)：WebUI 初始 `sidebar-state` 请求失败时静默回退默认值，后续用户的 pin/重命名/归档操作可能覆盖丢失已有侧边栏状态。无 fix PR。
5. **中** — [#6006](https://github.com/HKUDS/nanobot/issues/6006)：QQ 渠道引用消息内容永远不会传给 Agent，依赖上下文的追问无法回答。无 fix PR。
6. **待合并的渠道类修复 PR**（尚在 review）：Slack 按钮消息超 3000 字符截断（[#5961](https://github.com/HKUDS/nanobot/pull/5961)）、Telegram Markdown 链接 URL 损坏（[#5960](https://github.com/HKUDS/nanobot/pull/5960)）、Telegram 命令换行参数丢失（[#5931](https://github.com/HKUDS/nanobot/pull/5931)）、邮件未知字符集中断收件轮询（[#5928](https://github.com/HKUDS/nanobot/pull/5928)）。

## 6. 功能请求与路线图信号

- **新提供商**：[PR #5845](https://github.com/HKUDS/nanobot/pull/5845) 添加 Opper 作为内置网关提供商（镜像 Eden AI/OrcaRouter 模式），今日仍有更新，大概率进入下个版本——目前所有 PR 均为追加式注册表条目，风险低。
- **新模型支持**：[#5898](https://github.com/HKUDS/nanobot/issues/5898) 反映社区对 GPT-6 系列经由 GitHub Copilot 使用的需求，是模型兼容性方向的明确信号。
- **API 语义改进**：[#6001](https://github.com/HKUDS/nanobot/pull/6001) 重定义 `sendProgress` 语义，属于行为变更，需要维护者表态是否接受为破坏性调整。
- **健壮性硬化**（可能批量进入下版）：URL 大小写误判去重（[#5926](https://github.com/HKUDS/nanobot/pull/5926)）、null 类型/枚举校验（[#5965](https://github.com/HKUDS/nanobot/pull/5965)）、通知布尔校验（[#5927](https://github.com/HKUDS/nanobot/pull/5927)）、复合时长重试提示解析（[#5963](https://github.com/HKUDS/nanobot/pull/5963)）、cron 非正间隔拒绝（[#5962](https://github.com/HKUDS/nanobot/pull/5962)）等，均为小粒度、带测试的修复，符合近期合并风格。

## 7. 用户反馈摘要

- **模型通道可靠性是首要痛点**：GPT-6 + GitHub Copilot 组合失败（#5898，4 条评论）表明大量用户以 Copilot 作为付费模型入口，通道兼容性直接影响可用性。
- **配置作用域失控引发不信任**：#6002 的报告者通过源码级分析指出配置规则影响面远超文档描述（38/46 提供商），反映高级用户期待“最小作用域、可预期”的配置行为；同类地，#6001 指出默认开关名实不符。
- **多渠道消息完整性问题集中**：QQ 引用丢失（#6006）、Telegram 参数/链接损坏、Slack 截断、邮件字符集崩溃——说明渠道接入层的边缘 case 是用户日常使用中最常撞到的问题域。
- **正面信号**：修复 PR 普遍附带复现用例和回归测试，贡献者（@KailBug、@2gg-bit、@Bdysj 等）持续产出高质量补丁，社区工程文化健康。

## 8. 待处理积压

- **[#5898](https://github.com/HKUDS/nanobot/issues/5898)**：已持续 9 天、4 条评论，尚无官方修复方案或关联 PR，且直接影响新模型可用性，建议优先跟进。
- **[#6002](https://github.com/HKUDS/nanobot/issues/6002)** / **[#6006](https://github.com/HKUDS/nanobot/issues/6006)** / **[#6008](https://github.com/HKUDS/nanobot/issues/6008)**：均为昨日新开，尚无维护者回复，需关注避免演变为长期积压。
- **PR 积压总量 22 个**，其中存续较久者包括：[#5763](https://github.com/HKUDS/nanobot/pull/5763)（9-14 开启，多模态字段 400 响应）、[#5793](https://github.com/HKUDS/nanobot/pull/5793)（9-16 开启，`_IGNORE_DIRS` 作用域回归）、[#5926](https://github.com/HKUDS/nanobot/pull/5926) / [#5927](https://github.com/HKUDS/nanobot/pull/5927) / [#5928](https://github.com/HKUDS/nanobot/pull/5928) / [#5931](https://github.com/HKUDS/nanobot/pull/5931)（均已超一周）。建议维护者安排批量 review 节奏，防止贡献者流失。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-10-03

## 1. 今日速览

Zeroclaw 今日继续保持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 47，关闭仅 3），PR 更新 50 条（全部待合并，0 合并/关闭），无新版本发布。项目重心明显围绕 **v0.8.6 发布门禁（release-gate）修复** 与 **v0.9.0 网关拆分（gateway split）架构重构** 两条主线推进。主要贡献者 @JordanTheJet、@Audacity88、@IftekharUddin 持续产出大型 PR（多个 size:XL），但合并吞吐为零，积压的待合并 PR 数量值得关注。

## 2. 版本发布

今日无新版本发布。v0.8.6 尚在发布准备阶段，多个 release-gate 标记的 Issue（#11369、#11387、#11336、#11333）仍在修复中。

## 3. 项目进展

今日无 PR 合并（合并/关闭为 0），但待合并管道中包含多项重大推进：

- **[PR #11221](https://github.com/zeroclaw-labs/zeroclaw/pull/11221)** — 将 12 个 SaaS/编程 CLI 工具（Jira、Notion、LinkedIn、Composio、Google Workspace 等）改为 opt-in feature，缩小默认构建体积（size:XL，双版本目标）。
- **[PR #11381](https://github.com/zeroclaw-labs/zeroclaw/pull/11381) / [PR #11377](https://github.com/zeroclaw-labs/zeroclaw/pull/11377)** — v0.9.0 独立网关进程（#11002）持续推进：网关开始按行精确提供 session 消息/状态/删除，以及 `/ws/sops/runs`、`/api/version/check` 端点。
- **[PR #11182](https://github.com/zeroclaw-labs/zeroclaw/pull/11182)** — RPC 核心对齐：channels、system、tools、canvas、files、pairing 等方法迁移至 RPC，为网关客户端化铺路。
- **[PR #11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456)** — 子进程内存看门狗（`shell_max_memory_mb`），直接对应生产 OOM 问题 [Issue #6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916)。
- **[PR #11450](https://github.com/zeroclaw-labs/zeroclaw/pull/11450)** — delegate worker 异常退出后的结算恢复（supervisor 模式），修复后台委托任务丢失问题。
- **[PR #10905](https://github.com/zeroclaw-labs/zeroclaw/pull/10905)** — ZeroCode 新增 `/compact-context` / `/restore-context` 手动上下文压缩，回应用户对长会话上下文管理的需求。

**评估**：管道内容扎实，但 50 个 PR 全部待合并、连续无合并吞吐，可能是大型 stacked PR 链（fork-only parent chains）拖慢评审所致。

## 4. 社区热点

- **[Issue #9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)**（13 评论）— 并行运行时测试门禁下加固运行时写入的可执行测试 fixture。讨论热度最高，反映 CI 稳定性是团队当前投入重点。
- **[Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)**（10 评论）— 延迟内置工具 schema 以降低固定 prompt 底线。核心痛点：默认 `max_context_tokens = 32000` 下，新会话**首轮迭代即超预算约 3.3 倍**。已有配套文档 PR [#11472](https://github.com/zeroclaw-labs/zeroclaw/pull/11472)，说明实施在进行中。
- **[Issue #9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799)**（7 评论）— 长驻 ephemeral daemon 持续 140-177% CPU 自旋（疑似已关闭 Telegram socket 相关死循环），仍处 needs-repro，风险高。
- **[Issue #6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105)**（6 评论）— cron 触发的 agent 缺乏任务来源上下文，长期 in-progress。
- **[Issue #11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387)**（5 评论）— zerocode cwd 回归**第二次复发**（#10609 回归），新开即获多人响应，说明影响面广。

## 5. Bug 与稳定性

**S1 / P1（工作流阻断）：**
1. [Issue #11369](https://github.com/zeroclaw-labs/zeroclaw/issues/11369)（已关闭）— #10621 引入的回归：master 构建的 Docker 镜像启动即退出，中断升级可致数据库搁浅。P1 release-gate，已关闭（应已修复）。
2. [Issue #11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) — zerocode 忽略启动目录、强制 workspace 为 cwd，**#10609 的二次回归**，尚无 fix PR 链接。
3. [Issue #10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225) — RPC 会话无法通过 channel-backed tools 访问已配置频道；已有针对性修复 [PR #11452](https://github.com/zeroclaw-labs/zeroclaw/pull/11452)（注册 live channels 到全部 session 工具，size:XS）及更结构性的 [PR #10986](https://github.com/zeroclaw-labs/zeroclaw/pull/10986)。
4. [Issue #9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) — daemon 多核 CPU 自旋，needs-repro，无 fix。
5. [Issue #10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673) — ZeroCode Code pane 失败/取消的 ACP turn 不持久化，in-progress。

**S2 / P2：**
- [Issue #11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11333) / [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333) — skill 学习循环在 channel/webhook/web UI 路径完全不运行；skill_bundles 分配的技能对审查工具不可见。均为 v0.8.6 发布前新报告。
- [Issue #11336](https://github.com/zeroclaw-labs/zeroclaw/issues/11336) — `plugin info` / `plugin list --verify` 报告 `[loads]` 但运行时拒绝注册。
- [Issue #11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) — llama.cpp/自定义 provider URI 解析错误。
- [Issue #10741](https://github.com/zeroclaw-labs/zeroclaw/issues/10741) — ZeroCode 在看似正常完成的响应后静默暂停队列工作。

## 6. 功能请求与路线图信号

- **下一版本（v0.8.6）可能纳入**：子进程内存限制（#6916 → [PR #11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456)）、cron owner 迁移修复（[PR #10836](https://github.com/zeroclaw-labs/zeroclaw/pull/10836)）、工具 opt-in 化（#11221 部分切片）。
- **v0.9.0 信号明确**：独立网关进程（#11002，PR 链 #11381/#11377/#11182）、A2A 协议 crate RFC（[Issue #11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254)）、session 工具 per-agent 所有权（[PR #9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746)）。
- **活跃增强方向**：delegate 审批转发（#7743）、工具协作式取消（#5836 → 配套 delegate 恢复 PR #11450）、配置代际发布与 per-target 应用结果（#10892 → [PR #11466](https://github.com/zeroclaw-labs/zeroclaw/pull/11466)）、Windows 安全加固（#9460、#11324、#11325）。
- **TLS/企业环境**：两个 PR（[#11443](https://github.com/zeroclaw-labs/zeroclaw/pull/11443)、[#10712](https://github.com/zeroclaw-labs/zeroclaw/pull/10712)）均针对企业代理/TLS 检查场景的 WebSocket 证书信任，反映企业用户群增长。

## 7. 用户反馈摘要

- **上下文预算是最大痛点**：用户实际使用中 32k token 配置下首轮即爆，工具 schema 占用固定 prompt 空间（#5808）。
- **生产稳定性事故真实发生**：LLM 回退执行 shell 命令（如 wkhtmltopdf 生成 PDF）导致容器 OOM（#6916），说明内存看门狗需求来自真实生产案例。
- **ZeroCode（TUI）体验反复**：cwd 回归两次复发、静默暂停队列、skill 学习循环在部分通道失效——用户对 CLI/cron 路径与 channel 路径行为不一致感到困惑（#11332）。
- **长驻 daemon 可靠性存疑**：17 小时 140-177% CPU 的报告（#9799）对希望 7x24 运行的个人助手用户是重大顾虑。
- **正面信号**：社区对新功能响应迅速（新 Issue 一两天内即获标签与 in-progress 状态），学习循环（skill_creation/skill_improvement）等差异化功能被用户积极使用。

## 8. 待处理积压

- **[Issue #9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799)** — P1 CPU 自旋，8 月至今仍 needs-repro，建议维护者主动跟进复现。
- **[Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)** — 4 月开立、S1 级、影响所有新会话，虽有进展但仍未落地。
- **[Issue #6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105)** — 4 月开立的 cron 上下文缺失，in-progress 超过 5 个月。
- **[PR #10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412)** — 8 月开立，P1、do-not-merge + breaking-change 标签，needs-author-action。
- **[PR #9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) / [PR #10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)** — 均超一个月未合并且 needs-author-action，涉及 v0.9.0 安全关键路径。
- **[Issue #7468](https://github.com/zeroclaw-labs/zeroclaw/issues/7468)、[#8763](https://github.com/zeroclaw-labs/zeroclaw/issues/8763)** — icebox 状态的 TUI 易用性请求，建议在 v0.8.6 后排期。

---
*数据来源：Zeroclaw GitHub 仓库 2026-10-03 前 24 小时活动快照。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-03

## 1. 今日速览

今日 Hermes Agent 维持高活跃度：过去 24 小时内 Issues 更新 50 条（新开/活跃 31，关闭 19），PR 更新 50 条（待合并 41，已合并/关闭 9），无新版本发布。项目重心集中在 **Desktop 端会话渲染/稳定性**、**kanban 自动化调度**与 **Windows 平台兼容性**三大主题。社区贡献活跃，外部贡献者的修复 PR 持续被 rebase 落地（如 #132015），@yoyodine-industries 围绕 kanban 子系统形成了系统性的 PR 矩阵。整体看项目处于"高频迭代 + 快速关 bug"的健康状态，但 desktop 会话状态管理（sweeper:risk-session-state 标签）仍是反复出现的薄弱环节。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 共 9 条，代表性进展如下：

- **[PR #126605](https://github.com/NousResearch/hermes-agent/pull/126605)**（已关闭）：修复保存 legacy `custom_providers` 端点时丢失 `key_env` 导致 401 的问题，配套关闭 [Issue #126589](https://github.com/NousResearch/hermes-agent/issues/126589)。
- **[PR #121906](https://github.com/NousResearch/hermes-agent/pull/121906) → [PR #132015](https://github.com/NousResearch/hermes-agent/pull/132015)**：Nous 付费档位模型选择器现可展示促销（on-sale）模型；社区 PR 被 rebase 到最新 main 后以新 PR 形式落地，体现维护者对社区贡献的积极承接。
- **[PR #88504](https://github.com/NousResearch/hermes-agent/pull/88504)**：归档会话查询分页化，突破原 200 行上限，Settings 与侧边栏共享分页逻辑。
- **[PR #123837](https://github.com/NousResearch/hermes-agent/pull/123837) / [PR #99027](https://github.com/NousResearch/hermes-agent/pull/99027)**：Windows SSH 探测两条修复——保留类型化错误（不再把运维错误伪装成"不支持平台"）、抵御 PowerShell CLIXML 进度流污染。
- **[PR #88865](https://github.com/NousResearch/hermes-agent/pull/88865)**：`agent.disabled_toolsets` 现在在 desktop/TUI 会话中真正生效。
- **[PR #127939](https://github.com/NousResearch/hermes-agent/pull/127939)**（标记 invalid 关闭）：中断 turn 的流式 rehydrate 去重方案被拒绝，说明该路径的修复方案仍在讨论中。

整体推进幅度：单日关闭 19 个 Issue + 9 个 PR，以 P2/P3 修复为主，稳步收敛。

## 4. 社区热点

**最活跃 Issues：**

- **[Issue #68321](https://github.com/NousResearch/hermes-agent/issues/68321)**（14 评论，已关闭）：Desktop 切换会话后所有 assistant 消息消失（DB 完好）。高评论量反映这是大量 desktop 用户共同踩中的渲染层问题。
- **[Issue #129993](https://github.com/NousResearch/hermes-agent/issues/129993)**（10 评论，OPEN）：assistant 回复在同一 turn 中渲染两次（持久化只有一行）——与会话渲染问题同源，用户对 transcript 显示可靠性诉求强烈。
- **[Issue #123347](https://github.com/NousResearch/hermes-agent/issues/123347)**（10 评论，P1 OPEN）：Group Chat hosted-room worker 启动时 `_frozen_importlib._DeadlockError`。P1 级别的启动失败，影响 gateway 稳定性，尚无对应 fix PR，**需重点关注**。
- **[Issue #96731](https://github.com/NousResearch/hermes-agent/issues/96731)**（已关闭）：Windows 上 `browser_exec` 420 秒超时 vs 独立进程 7 秒完成，凸显 desktop 宿主进程环境差异问题。

**PR 热点：**

- **[PR #132012](https://github.com/NousResearch/hermes-agent/pull/132012)**（核心成员 @teknium1）：Claude Code hook 脚本无需修改即可在 Hermes 下运行，`import-agent` 迁移体验重大改进——释放生态迁移信号。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 状态 | Fix PR |
|---|---|---|---|
| **P1** | [#123347](https://github.com/NousResearch/hermes-agent/issues/123347) Group Chat worker 启动死锁崩溃 | OPEN | ❌ 无 |
| **P1** | [#131745](https://github.com/NousResearch/hermes-agent/issues/131745) Launcher 指向 e2e 临时 Python，重启后 gateway exit-127 崩溃循环 | OPEN | ❌ 无 |
| **P2** | [#131993](https://github.com/NousResearch/hermes-agent/issues/131993) Anthropic 仅作 fallback 时凭据池误报耗尽被跳过 | OPEN（今日新报） | ❌ |
| **P2** | [#129993](https://github.com/NousResearch/hermes-agent/issues/129993) 回复重复渲染 | OPEN | ⚠️ 相关方案 #127939 被拒 |
| **P2** | [#130244](https://github.com/NousResearch/hermes-agent/issues/130244) Windows profile 删除仍报 WinError 32（#112538 残留缺口） | OPEN | ❌ |
| **P2** | [#131270](https://github.com/NousResearch/hermes-agent/issues/131270) `hermes update` 卡在 Git fetch 无进度 | OPEN | ❌ |
| **P3** | [#132003](https://github.com/NousResearch/hermes-agent/issues/132003) Feishu 深层嵌套消息致 RecursionError（无递归深度限制，**存在潜在 DoS 面**） | OPEN（今日新报） | ❌ |
| **P3** | [#131956](https://github.com/NousResearch/hermes-agent/issues/131956) bare Node 下测试失败（CloseEvent 未定义） | OPEN（今日新报） | ❌ |

已关闭的重要修复：#68321（消息消失）、#96731（browser_exec 超时）、#128942（macOS PTY 句柄泄漏致全系统终端瘫痪）、#74535（应用更新失败）。

## 6. 功能请求与路线图信号

- **[Issue #112028](https://github.com/NousResearch/hermes-agent/issues/112028)**：多 surface 同时访问同一会话（desktop + mobile）——服务器拒绝第二 surface 提交。结合 #131657（Artifacts 丢弃 connection_id）看，**多端会话架构是明确的需求方向**，可能进入下一阶段规划。
- **[PR #132012](https://github.com/NousResearch/hermes-agent/pull/132012)**：Claude Code hooks 兼容 —— 生态迁移策略已由核心团队亲自推进，落地概率高。
- **kanban 系列 PR 矩阵**（@yoyodine-industries）：[#123481](https://github.com/NousResearch/hermes-agent/pull/123481)（ready 队列准入控制）、[#123429](https://github.com/NousResearch/hermes-agent/pull/123429)（完成需落地证据）、[#123822](https://github.com/NousResearch/hermes-agent/pull/123822)（三态 worker 存活判定）、[#121054](https://github.com/NousResearch/hermes-agent/pull/121054)（estop 白名单+暂停上限）——构成自动化调度可靠性的一揽子改进，量多待评审，可能分批合入。
- **[Issue #126412](https://github.com/NousResearch/hermes-agent/issues/126412)**：plugin catalog SHA bump 流程正常运转，插件生态维护机制成熟。

## 7. 用户反馈摘要

- **Desktop 渲染可靠性是最大痛点**：#68321（14 评论）与 #129993 表明用户对"显示与持久化不一致"零容忍——数据没丢但 UI 丢，仍被视为严重故障。
- **Windows 体验持续受阻**：更新失败（#128915 中国代理环境 schannel 错误、#131270 fetch 卡死）、文件锁（#130244）、browser 超时（#96731），Windows 用户占比高但兼容性欠账多。
- **macOS 深度用户遭遇系统级影响**：#128942 的 PTY 泄漏导致整机终端不可用，此类"殃及宿主系统"的 bug 对信任伤害最大。
- **国际化细节**：#131978（Artifacts 显示 percent-encoded 中文文件名）与 #67962（中文用户报告）显示中文用户群活跃，CJK 处理需加强。
- **正面信号**：社区贡献者愿意提交高质量、附复现证据的 issue（如 #123347 带 systemd 日志），说明用户群体技术素养高、参与意愿强。

## 8. 待处理积压

- **[#123347](https://github.com/NousResearch/hermes-agent/issues/123347)（P1，9/26 起）**：Group Chat worker 启动死锁，10 条评论仍无 fix PR，**建议优先排期**。
- **[#131745](https://github.com/NousResearch/hermes-agent/issues/131745)（P1）**：launcher 指向已清理的 e2e scratch Python，造成崩溃循环——疑似 CI/e2e 流程污染生产文件，需排查发布管线。
- **[#129993](https://github.com/NousResearch/hermes-agent/issues/129993)**：重复渲染修复方案（#127939）已被拒，需新的技术路径。
- **[#123343](https://github.com/NousResearch/hermes-agent/issues/123343)**：依赖 pin `httpx2==2.7.0` 命中 6 个 CVE，标记 duplicate 但状态待确认是否已有升级计划。
- **kanban PR 矩阵**（#123481/#123429/#123822/#124629/#125207/#123964/#128178 等，均出自 @yoyodine-industries，9/23–9/29 开启，全部待评审）：单人多 PR 堆积易造成评审瓶颈，建议维护者分批处理或指定评审负责人。

---
*数据来源：NousResearch/hermes-agent GitHub，统计窗口 2026-10-02 至 2026-10-03。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-10-03）

## 1. 今日速览

过去 24 小时 PicoClaw 保持中等活跃度：3 条 Issue 更新（全部仍为 OPEN）、4 条 PR 更新（2 合并/关闭、2 待合并）、无新版本发布。社区讨论焦点集中在 Web UI 输入卡顿（#3281）和反代路径挂载需求（#3415），多项贡献 PR 进入 stale 状态，显示维护者响应节奏偏慢，存在一定积压风险。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- **关闭 PR #1544**（[链接](https://github.com/sipeed/picoclaw/pull/1544)）：合并了 #1514/#1513/#1512/#1510/#1509 五个修复 PR 的整合 PR，自 3 月创建至今日关闭，属于清理历史积压，长尾 bug 修复正式落地。
- **关闭 PR #3368**（[链接](https://github.com/sipeed/picoclaw/pull/3368)）：Parallel Search MCP 配置文档示例被关闭（未合并），文档层面的第三方集成示例未获采纳。

今日无新代码合并进入主线，进展主要体现为历史 PR 的清理与收尾。

## 4. 社区热点

- **#3281 Web UI 聊天输入卡顿**（[链接](https://github.com/sipeed/picoclaw/issues/3281)）：17 条评论、2 👍，为今日讨论最热议题。用户 @xpader 反映会话历史稍长后输入框明显卡顿（v0.3.1 / Go 1.25.11），自 7 月底持续活跃至今，属于影响日常使用体验的核心痛点。
- **#3392 CLAassistant 无法检测签名**（[链接](https://github.com/sipeed/picoclaw/issues/3392)）：与 PR #3381 关联，外部贡献者因 CLA 签名未被识别而阻塞合并，反映 CI/流程自动化问题正在阻碍社区贡献进入。

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高（体验） | #3281 Web UI 输入框在长历史会话下严重卡顿 | OPEN，暂无 fix PR，已持续 2 个多月 |
| 中（流程） | #3392 CLAassistant 未检测到 CLA 签名，阻塞贡献 PR 合并 | OPEN，暂无 fix |

无崩溃或回归类报告。

## 6. 功能请求与路线图信号

- **#3415 Nginx 反向代理子路径挂载**（[链接](https://github.com/sipeed/picoclaw/issues/3415)）：希望增加可选启动参数支持将 Web Console 挂载到 `/pico/` 前缀下，覆盖页面、API、WebSocket 和附件请求。目前前后端硬编码根路径（`/api/...`、`/launcher-login`、`/pico/ws`），需前后端同时改造，属于自托管用户的强需求，暂无对应 PR。
- **PR #3393 新增 Cheaper Inference provider**（[链接](https://github.com/sipeed/picoclaw/pull/3393)）：OpenAI 兼容网关接入，成本可降 15–60%。此类低成本 provider 接入 PR 历史上较易被采纳，但已标 stale，需维护者跟进。
- **PR #3381 切换 OpenAI 至 Responses API**（[链接](https://github.com/sipeed/picoclaw/pull/3381)）：技术架构升级方向明确，但受 CLA 问题（#3392）阻塞，若解决有望进入下个版本。

## 7. 用户反馈摘要

- **痛点**：长会话下 Web UI 输入体验差（#3281 多人复现、持续讨论 2 个月+），是自托管用户最直接的不满；前端对根路径的依赖使企业内网/共享域名部署不便（#3415）。
- **使用场景**：用户通过 Web UI 长时间多轮会话使用 PicoClaw，并通过 Nginx 在自有域名下与其他服务共存部署，说明项目已有相当比例的自托管/进阶用户。
- **满意度信号**：外部贡献者持续提交 provider 接入与 API 升级 PR，社区贡献意愿良好，但对流程摩擦（CLA 检测）有挫败感。

## 8. 待处理积压

- **#3281**：开放 2 个多月、17 条评论、多人确认，无修复 PR，建议维护者优先排查前端渲染/输入事件性能问题。
- **PR #3381 / PR #3393**：均为有效功能贡献但已标 stale，且 #3381 被 #3392 的 CLA 问题阻塞——修复 CLAassistant 配置可一次性解锁多个贡献。
- **#3392**：虽仅 1 条评论，但属于流程性阻塞问题，修复成本低、收益高。
- **PR #1544**：已关闭，确认其包含的 5 个子修复是否已全部进入主线，避免遗漏。

**健康度小结**：社区贡献活跃、需求真实明确，但维护侧响应滞后（多个 PR 转 stale、核心性能 Bug 长期未修），建议关注维护带宽与 Issue/PR 分诊节奏。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-10-03）

## 1. 今日速览

NanoClaw 今日保持高度活跃：过去 24 小时共 50 条 Issue 更新（新开/活跃 33，关闭 17）、30 条 PR 更新（待合并 24，已合并/关闭 6），无新版本发布。核心维护者 [@glifocat](https://github.com/glifocat) 单日提交了约 10 个 fix/feature PR，聚焦 setup/update 链路的可靠性加固与安全修复，节奏非常密集。负面方面，今日新报两个**更新器（updater）高危 Bug**（#4003/#4004），涉及数据丢失与主机宕机，值得维护者优先处置。整体看项目处于“高频修复 + 渠道分支（channels）大整合”阶段，健康度良好但更新器稳定性是当前最大风险点。

## 2. 版本发布

无新版本发布。但 [#3986](https://github.com/nanocoai/nanoclaw/pull/3986)（update 默认跟随 release tag，引入 stable/beta 更新通道）表明项目正为规范化发版做准备，可预期近期会有带 tag 的版本发布。

## 3. 项目进展

今日合并/关闭的 PR 较少（6 个），重要项包括：

- [#3969](https://github.com/nanocoai/nanoclaw/pull/3969)（已关闭）：Iron Proxy 407 修复，前置代理现在发送 Basic challenge 使 git 能通过代理认证。
- [#2654](https://github.com/nanocoai/nanoclaw/pull/2654)（已关闭）：`namespacedPlatformId()` 信任已带前缀的 id，修复 adapter 注册 key 与 SDK 前缀不一致时的消息路由问题。
- [#3994](https://github.com/nanocoai/nanoclaw/pull/3994)（已关闭）：agent-runner 改为透传 Claude SDK 自身的失败提示，替代泛化的 "run failed" 消息。

**待合并的核心进展**（大量来自 @glifocat，构成一波系统性加固）：

- [#4000](https://github.com/nanocoai/nanoclaw/pull/4000) + [#3995](https://github.com/nanocoai/nanoclaw/pull/3995)：main → channels 分支同步合并（463 commits）及 channels 分支修复，是多渠道适配重构的关键一步。
- [#3999](https://github.com/nanocoai/nanoclaw/pull/3999)：将 `CLAUDE_CODE_AUTO_COMPACT_WINDOW` 从宿主机透传进容器，直接修复 [#3714](https://github.com/nanocoai/nanoclaw/issues/3714) 的文档与实现脱节。
- [#3985](https://github.com/nanocoai/nanoclaw/pull/3985)：setup 不再将代理凭据写入 0644 的 systemd unit 文件——重要的安全修复。
- [#3986](https://github.com/nanocoai/nanoclaw/pull/3986) / [#3997](https://github.com/nanocoai/nanoclaw/pull/3997) / [#3988](https://github.com/nanocoai/nanoclaw/pull/3988)：围绕 `/update-nanoclaw` 的更新通道、skill 文件提交、gateway payload 刷新三项改进，显著提升更新链路健壮性。
- [#4005](https://github.com/nanocoai/nanoclaw/pull/4005)：Iron approval bridge 的 grpc-js 升级修复两个安全公告。
- [#3978](https://github.com/nanocoai/nanoclaw/pull/3978) / [#4007](https://github.com/nanocoai/nanoclaw/pull/4007)：引入 Dependabot 管理 Actions 与 skill 内 pin 的 npm 依赖，替换从未运行过的 Renovate 配置。

## 4. 社区热点

- **[#1424 "Securing One's Fork?"](https://github.com/nanocoai/nanoclaw/issues/1424)**（7 评论，已关闭）：用户将 NanoClaw 打包进医疗系统分发，担心公共 fork 无法转私有带来的安全暴露。反映**生产/商用部署用户对安全基线的强烈诉求**。
- **[#3716 PreCompact 归档无上限导致生产 OOM 崩溃循环](https://github.com/nanocoai/nanoclaw/issues/3716)**（3 评论，仍 OPEN）：每次 PreCompact 都全量重写会话历史文件且无轮转/清理，被指为生产 OOM 根因。与 [#3732](https://github.com/nanocoai/nanoclaw/issues/3732)（transcript 轮转不执行）、[#3984](https://github.com/nanocoai/nanoclaw/issues/3984)（PreCompact hook 缺 mailbox 崩溃）共同指向**压缩/会话归档子系统是当前稳定性重灾区**。
- **[#2437 去除/改进 OneCLI 依赖](https://github.com/nanocoai/nanoclaw/issues/2437)**（7 👍，已关闭）：社区对 OneCLI 依赖削弱“轻量级”定位的共识性不满，高赞显示这不是个例；与已关闭的 [#2781](https://github.com/nanocoai/nanoclaw/issues/2781)（NANOCLAW_NATIVE_CREDENTIALS 绕过 OneCLI）同属凭证/网关架构讨论主线。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#4003](https://github.com/nanocoai/nanoclaw/issues/4003) | 更新回滚时 `data/` 目录权限错误（EACCES）导致**数据丢失一半 + 主机宕机** | 无 fix PR |
| 🔴 高 | [#4004](https://github.com/nanocoai/nanoclaw/issues/4004) | 更新 cutover 在升级 tsx/esbuild 时崩溃并触发回滚（#4003 的诱因） | 无 fix PR |
| 🔴 高 | [#3716](https://github.com/nanocoai/nanoclaw/issues/3716) | PreCompact 归档无限增长 → 生产 OOM 崩溃循环 | 无直接 fix |
| 🟠 中 | [#4002](https://github.com/nanocoai/nanoclaw/issues/4002) | Discord 拒绝复用带命名空间的消息 id 的 reaction/edit（400 50035） | 无 |
| 🟠 中 | [#3568](https://github.com/nanocoai/nanoclaw/issues/3568) | pending system 行饿死入站队列，agent 静默失联 | 无 |
| 🟠 中 | [#3714](https://github.com/nanocoai/nanoclaw/issues/3714) | 操作员 env 覆盖变量未透传进容器 | ✅ [#3999](https://github.com/nanocoai/nanoclaw/pull/3999) |
| 🟠 中 | [#3984](https://github.com/nanocoai/nanoclaw/issues/3984) | PreCompact hook 无 mailbox 直接报错退出 | 无 |
| 🟡 低 | [#3951](https://github.com/nanocoai/nanoclaw/issues/3951) | Linux 上删除任务残留 root 属主挂载点，日志每分钟刷 SqliteError | 无 |
| 🟡 低 | [#3705](https://github.com/nanocoai/nanoclaw/issues/3705) | `ncl tasks update --recurrence` 不重算下次触发时间 | 无 |
| 🟡 低 | [#3529](https://github.com/nanocoai/nanoclaw/issues/3529) | update skill refresh 覆盖本地 adapter 且无 opt-out | 部分：[#3988](https://github.com/nanocoai/nanoclaw/pull/3988) |

今日关闭的 Bug 中 #3785（channels 分支 Slack 引用未合入 main 的 API）、#3359（Node 26 下 better-sqlite3 编译失败）、#2638（WhatsApp engage_mode 误触发）均已解决，关闭速率健康。

## 6. 功能请求与路线图信号

- **[#3986 更新通道](https://github.com/nanocoai/nanoclaw/pull/3986)**（已提交）：stable/beta 默认按 tag 更新，配合 #3978/#3997/#3988 表明“**更新器工程化**”是下一阶段主线，很可能进入下一版本。
- **[#2653 单机多用户支持](https://github.com/nanocoai/nanoclaw/issues/2653)**（已关闭）：共享 Mac 上每用户独立 Telegram bot/agent 组，数据模型已支持，仅剩启动器阻塞——关闭状态暗示已有方案落地或在 channels 分支中处理。
- **[#3538 家用边缘 worker 集群提案](https://github.com/nanocoai/nanoclaw/issues/3538)**（OPEN，0 评论）：利用闲置 PC/NAS 分发 agent 容器，尚无维护者回应，属早期探索。
- **[#2437 OneCLI 依赖改进](https://github.com/nanocoai/nanoclaw/issues/2437)**（已关闭，高赞）：叠加 #2781，凭证架构解耦方向已获社区推动，值得在路线图中持续跟踪。

## 7. 用户反馈摘要

- **部署场景在向生产/商用延伸**：医疗系统打包（#1424）、下游 fork 生产延迟优化回传（#1955）说明用户已不满足于玩具用途，对安全、可观测性、稳定性要求升级。
- **更新器是最大痛点**：今日 #4003/#4004 两条新 Bug 加上历史 #3529，用户反复报告 `/update-nanoclaw` 流程破坏本地定制（adapter、gateway、未提交文件）。
- **环境兼容性抱怨持续**：Node 版本与 better-sqlite3 编译地狱（#3359、#2590）是新手第一道坎；llama.cpp 本地模型接入需求存在（#2234，已关闭）。
- **隐私敏感**：setup.sh 无 opt-in 的 PostHog 遥测曾被点名（#1819，已关闭），该类问题与 #1424 一起构成“自主可控”诉求主线。

## 8. 待处理积压

- **[#3716](https://github.com/nanocoai/nanoclaw/issues/3716)**（9-04 开，生产 OOM，3 评论无 fix）与 **[#3732](https://github.com/nanocoai/nanoclaw/issues/3732)**、**[#3984](https://github.com/nanocoai/nanoclaw/issues/3984)**：压缩/会话归档子系统三个 open bug，建议合并排查。
- **[#3568](https://github.com/nanocoai/nanoclaw/issues/3568)**（8-26 起）：静默失联类 bug，无维护者回复。
- **[#4002](https://github.com/nanocoai/nanoclaw/issues/4002)、[#4003](https://github.com/nanocoai/nanoclaw/issues/4003)、[#4004](https://github.com/nanocoai/nanoclaw/issues/4004)**：今日新开 0 评论，属 triage/unresolved，**建议维护者今日即响应**——尤其 #4003 涉及数据丢失。
- **社区 PR 长期挂起**：[@orgads](https://github.com/orgads) 的 [#3596](https://github.com/nanocoai/nanoclaw/pull/3596)（Teams 冒号 id 命名空间）与 [#3597](https://github.com/nanocoai/nanoclaw/pull/3597)（gateway 代理旁路 host-local 地址）自 8-28 起未合并，可能与 channels 分支重构相关，建议明确 retarget 或给出反馈以免贡献者流失。

---
*数据来源：NanoClaw GitHub Issues/PRs，统计窗口 2026-10-02 至 2026-10-03。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-10-03）

## 1. 今日速览

IronClaw 今日整体活跃度较低，仅新增 1 条 Issue，无 PR 更新、无版本发布。唯一的活动来自 macOS 用户报告的 `ironclaw serve` 启动失败问题（[#8122](https://github.com/nearai/ironclaw/issues/8122)），该问题复现环境完整、诊断信息充分，属于高质量 Bug 报告。当前无合并/关闭动作，项目处于平稳观察期，建议维护者关注新报问题的响应时效。

## 2. 版本发布

今日无新版本发布。当前最新版本仍为 **1.4.1**（官方安装脚本 `ironclaw-installer.sh` 分发）。

## 3. 项目进展

- 今日无 PR 合并或关闭，无功能/修复类进展。
- 项目代码线处于静默状态，可能处于版本迭代间隙或维护者聚焦线下开发。

## 4. 社区热点

- **[#8122](https://github.com/nearai/ironclaw/issues/8122)** — 今日唯一活跃讨论（0 评论，0 👍）：
  - 用户 @rahhbster 报告在 **macOS Apple Silicon（aarch64-apple-darwin）**、`local-dev` 启动配置下，`ironclaw serve` 失败，错误为 `credential read failed: BackendUnavailable`，且发生在 `web-app` 扩展加载时。
  - **诉求分析**：用户已通过 `ironclaw doctor`（8/8 通过）完成自检，并在 1.4.1 官方安装与 1.4.0 源码编译两个版本上复现，说明问题并非安装方式导致，更可能是 **macOS 凭据后端（如 Keychain 集成）与 `local-dev` profile 的兼容性缺陷**。报告质量高，但尚无维护者回应。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#8122](https://github.com/nearai/ironclaw/issues/8122) `serve` 启动失败：`web-app` 扩展凭据读取报 `BackendUnavailable`（macOS + local-dev） | OPEN，无回应 | ❌ 暂无 |

**说明**：`serve` 是核心命令，启动级失败属于阻断性 Bug，直接影响 macOS 本地开发用户可用性。鉴于可跨 1.4.0/1.4.1 稳定复现，建议优先分诊，排查平台特定凭据后端初始化路径。

## 6. 功能请求与路线图信号

- 今日无新功能请求，无可用路线图信号。

## 7. 用户反馈摘要

- 来自 #8122 的用户痛点：
  - macOS（Apple Silicon）+ `local-dev` 场景下**无法正常启动本地服务**，且 `ironclaw doctor` 全部通过却仍失败，反映**诊断工具未能覆盖凭据后端健康检查的盲区**。
  - 用户具备较强技术能力（自行源码编译验证），但报告提交后暂无社区互动，存在响应缺口。

## 8. 待处理积压

- ⚠️ **[#8122](https://github.com/nearai/ironclaw/issues/8122)**：今日新开、0 回应，虽暂不算“长期未响应”，但作为启动级阻断 Bug，建议维护者 24-48 小时内首次回应并确认复现，避免堆积。
- 数据窗口内无其他长期积压 Issue/PR；建议维护者另行排查窗口外的老 Issue 队列。

---
*数据来源：GitHub API（过去 24 小时窗口）| 生成日期：2026-10-03*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-10-03）

## 1. 今日速览

- 过去24小时内 Issues 活跃更新 6 条（全部为存量 Issue 被 stale 机制标记激活，无新开 Issue），PR 更新 3 条，**无新版本发布**。
- 值得关注的是，活跃内容高度集中在**安全与数据可靠性**方向：命令注入修复、token 加密存储、SQLite 写入安全等。
- 整体活跃度偏低，且无 Issue 被关闭，显示维护者响应节奏放缓，多项 Issue 已进入 stale 状态，**项目健康度需警惕**。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并，2 个安全相关 PR 被关闭：

| PR | 状态 | 说明 |
|---|---|---|
| [#911](https://github.com/netease-youdao/LobsterAI/pull/911) fix(auth): 使用 safeStorage 加密 auth tokens | 已关闭 | 将 accessToken/refreshToken 从 SQLite 明文存储改为 Electron safeStorage 加密（macOS Keychain / Windows DPAPI / Linux Secret Service）。**注意：未见对应 fix 替代 PR，需确认是被拒绝还是被 superseded。** |
| [#909](https://github.com/netease-youdao/LobsterAI/pull/909) fix(security): 技能安全扫描失败时要求用户确认 | 已关闭 | 修复了恶意技能包可构造扫描崩溃文件结构来绕过安全检查、实现静默安装的漏洞。同样需确认关闭原因。 |
| [#908](https://github.com/netease-youdao/LobsterAI/pull/908) fix(mcp): 校验 stdio command 防命令注入 | 待合并 | 修复 `mcp:create`/`mcp:update` 对 command 字段无校验导致的任意命令注入漏洞，并加固 MCP Bridge。 |

**评估**：待合并的 #908 是关键安全修复，建议优先 review。#909、#911 两个安全 PR 被关闭但去向不明，是今日最需维护者澄清的信号。

## 4. 社区热点

今日无高评论量新讨论，各 Issue 评论数均为 1。相对受关注的话题：

- **[#914] 支持记忆导入和导出**（[@pyf1999](https://github.com/netease-youdao/LobsterAI/issues/914)）：用户换机后无法迁移记忆、无法分享记忆——反映用户已将 LobsterAI 作为长期个人助手使用，数据可迁移性成为核心诉求。
- **[#910] IM 机器人定时任务无法推送飞书**（[@ShanShuiCode](https://github.com/netease-youdao/LobsterAI/issues/910)）：定时任务执行后消息未送达飞书，提示缺少 target chatId，反映 IM 集成与任务系统的打通存在缺口。

## 5. Bug 与稳定性（按严重程度排列）

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#906](https://github.com/netease-youdao/LobsterAI/issues/906) SQLite 数据丢失风险 | `save()` 使用 `fs.writeFileSync()` 无异常处理、无重试、无原子性保证，磁盘异常可致数据丢失甚至数据库损坏 | 无 |
| 🔴 高 | [#908](https://github.com/netease-youdao/LobsterAI/pull/908)（PR）MCP 命令注入 | stdio command 无校验，渲染进程被攻陷后可执行任意命令 | 本身即 fix PR，待合并 |
| 🟡 中 | [#900](https://github.com/netease-youdao/LobsterAI/issues/900) 定时任务间隔错乱 | 口头指令"调成每1小时”后实际变为每1分钟执行，附完整日志 | 无 |
| 🟡 中 | [#898](https://github.com/netease-youdao/LobsterAI/issues/898) 网关端口被 ban | cherry studio 更新重启导致 LobsterAI 网关 18789 端口断开 | 无 |
| 🟢 低 | [#886](https://github.com/netease-youdao/LobsterAI/issues/886) CopyButton 裸 setTimeout | 组件卸载后 timer 仍触发，产生 React warning 与潜在内存泄漏（CoworkSessionDetail.tsx:843） | 无 |

## 6. 功能请求与路线图信号

- **记忆导入/导出（#914）**：与 #906 的数据可靠性问题同属"数据主权"主题。若维护者着手 SQLite 存储层重构（#906），导入/导出功能很可能一并纳入。
- **飞书定时任务推送（#910）**：属现有 IM 集成的功能补全，修复成本低，有望优先处理。
- **安全加固方向（PR #908/#909/#911）**：三位贡献者集中提交安全修复，显示社区对 Electron 架构下的安全基线有共识，可能成为下个版本的隐性主题。

## 7. 用户反馈摘要

- **痛点集中在可靠性**：定时任务间隔错误（#900）、消息推送失败（#910）、网关断连（#898），用户核心场景"定时任务 + IM 通知"链路目前体验不稳定。
- **用户粘性已形成**：换机想迁移记忆（#914）说明部分用户已深度依赖记忆功能，数据安全（#906）的优先级随之上升。
- **环境信息**：Mac 用户为主力反馈群体，版本集中于 2026.3.24。

## 8. 待处理积压

以下 Issue 均创建于 2026-03-26，至今约 6 个月未关闭，且已被标记 stale，均无修复 PR，建议维护者优先处理：

1. **[#906] SQLite 数据丢失风险** — 数据安全问题，影响所有用户，最高优先级
2. **[#908] MCP 命令注入修复 PR** — 安全修复待合并
3. **[#900] 定时任务间隔错误** — 核心功能 Bug，已有复现日志
4. **[#898] 网关端口被 ban** — 影响与其他工具协同的用户
5. **[#910] 飞书定时推送失败**、**[#914] 记忆导入导出** — 功能补全类
6. **[#886] setTimeout 泄漏** — 低成本修复，适合 good first issue

另需澄清已关闭的 **#909、#911** 两个安全 PR 的去向（被拒或被替代），以避免社区安全贡献流失。

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

# CoPaw 项目动态日报 — 2026-10-03

## 1. 今日速览

CoPaw 今日保持高活跃度：过去 24 小时新增/活跃 Issue 13 条（关闭 0 条），PR 更新 14 条（7 待合并、7 已合并/关闭），无新版本发布。社区贡献活跃，多位首次贡献者（first-time-contributor）提交了功能完整的 PR，包括移动端适配和 `view_audio` 新工具。Bug 报告质量较高，多数附有复现步骤与源码级分析，部分已快速对应到修复 PR（如 #8074 → #8090）。整体呈现“社区驱动功能迭代 + 桌面/Console 体验打磨”的阶段特征，项目健康度良好。

## 2. 版本发布

无新版本发布。最近一个可确认的版本线为 2.2.x（社区报告中提及 2.2.1 / 2.2.2.beta4），建议关注 beta 渠道问题（见第 5 节）。

## 3. 项目进展

今日合并/关闭 7 个 PR，主要由 @AaronZ345 贡献，集中在桌面端与 Console 体验完善：

- **桌面端窗口记忆** [#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877)：基于 Tauri window-state 插件持久化窗口位置与尺寸。
- **聊天滚动锁定** [#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356)：流式生成时允许用户回读历史内容而不被强制滚动。
- **工具调用可见性开关** [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357)：减少正常聊天中工具调用卡片噪音。
- **富文本输入光标修复** [#7347](https://github.com/agentscope-ai/QwenPaw/pull/7347)。
- **Provider 级媒体内联上限** [#7359](https://github.com/agentscope-ai/QwenPaw/pull/7359)：分图片/视频/音频配置上限，修复 #7201。
- **MCP 工具调用超时可配** [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874)：新增 `tool_call_timeout`（默认 300s）。
- **游戏开发文件语法高亮** [#7344](https://github.com/agentscope-ai/QwenPaw/pull/7344)：Console 支持 C#/shader 等 Unity/Godot 文件。

总体看，Console/桌面端的可用性细节在快速收敛，MCP 与 Provider 层的可配置性增强，是向下一个稳定版本迈进的扎实一步。

## 4. 社区热点

- **历史消息加载问题** [#7884](https://github.com/agentscope-ai/QwenPaw/issue/7884)（8 条评论，持续活跃至今日）：用户对上下文压缩后前端无法全量加载历史记录表达强烈不满，情绪化措辞反映这是影响日常使用的核心痛点。
- **WebUI 消息撤回/编辑 + 工作区回滚** [#7997](https://github.com/agentscope-ai/QwenPaw/issue/7997)（8 条评论）：用户希望获得类似主流 AI 聊天产品的“编辑后重跑”能力，涉及对话截断与文件快照回滚，是较重量级的架构级功能诉求。
- **移动端 Web 控制台适配** [#6281](https://github.com/agentscope-ai/QwenPaw/issue/6281)（6 条评论，自 7 月活跃至今）：已有响应 PR #8086（移动端抽屉式设置导航），诉求即将落地。
- **跨实例 Agent 通信** [#8080](https://github.com/agentscope-ai/QwenPaw/issue/8080)：用户提出跨机器/去中心化的实例发现、任务委托与记忆共享，属于路线图级的宏大愿景，值得关注官方表态。

## 5. Bug 与稳定性（按严重程度）

1. **🔴 LAN 访问会话页无法打开** [#8073](https://github.com/agentscope-ai/QwenPaw/issue/8073)：V2.2.2.beta4 中局域网设备访问本地服务时 Chat 页报错。**已有 fix PR** [#8089](https://github.com/agentscope-ai/QwenPaw/pull/8089)（非安全上下文下 `crypto.randomUUID` 不可用，回退到 `getRandomValues` 生成 UUID v4）。响应速度值得肯定。
2. **🔴 GPT-6 系列模型连接测试 400** [#8074](https://github.com/agentscope-ai/QwenPaw/issue/8074)：`_uses_max_completion_tokens` 白名单仅匹配 `gpt-5*`/`o<digit>*`，确认 `main` 分支未修复。**已有 fix PR** [#8090](https://github.com/agentscope-ai/QwenPaw/pull/8090)（解析模型名版本号而非前缀匹配）。
3. **🟠 图片消息陷入 Bash+PIL 暴力裁剪循环后静默取消** [#8088](https://github.com/agentscope-ai/QwenPaw/issue/8088)：无视觉能力的默认 agent 转发给 `chat_with_image` 后行为异常，用户得不到任何回复。**暂无 fix PR**。
4. **🟠 Qoder 第三方 agent 三个缺陷**（自定义模型不可见/不可用 + 上下文用量表被隐藏）[#8077](https://github.com/agentscope-ai/QwenPaw/issue/8077)。**暂无 fix PR**。
5. **🟠 跨会话消息 `chat_with_agent` 分裂为多个 UI 页面** [#8078](https://github.com/agentscope-ai/QwenPaw/issue/8078)。**暂无 fix PR**。
6. **🟡 截断静默问题**：`finish_reason="length"` 被丢弃，用户无法区分完整回答与被截断 [#8085](https://github.com/agentscope-ai/QwenPaw/issue/8085)；超长 prompt 导致空回复无报错，相关修复见 PR [#8084](https://github.com/agentscope-ai/QwenPaw/pull/8084)（拒绝超限 prompt 并显式提示空回复）。
7. **🟡 reload 清理超时后静默 stop**，PR [#8079](https://github.com/agentscope-ai/QwenPaw/pull/8079)（修复 #8076）已提交。

## 6. 功能请求与路线图信号

- **`view_audio` 音频理解工具**：Issue [#8081](https://github.com/agentscope-ai/QwenPaw/issue/8081) + 同日 PR [#8083](https://github.com/agentscope-ai/QwenPaw/pull/8083)（首次贡献者）。与已有 `view_image`/`view_video` 形成完整多模态矩阵，**纳入下版本概率高**。
- **移动端 Console 适配**：#6281 + PR [#8086](https://github.com/agentscope-ai/QwenPaw/pull/8086)（≤768px 抽屉式导航，首次贡献者），落地在即。
- **飞书机器人回复附带 agent/模型信息** [#8087](https://github.com/agentscope-ai/QwenPaw/issue/8087)：实现成本低，竞品（OpenClaw）已有，可能性中等。
- **消息撤回/编辑 + 工作区回滚** #7997：讨论热烈但涉及快照架构，短期更可能部分实现（仅对话截断）。
- **跨实例 Agent 通信** #8080：架构级提案，预计仅停留在路线图讨论阶段。
- **Heartbeat 运行时语义文档补全** Issue [#8082](https://github.com/agentscope-ai/QwenPaw/issue/8082)：文档类，易纳入。

## 7. 用户反馈摘要

- **历史记录体验是最强痛点**：#7884 的措辞激烈，用户期望“聊天记录多存点、能翻回去看”，上下文压缩与前端展示的落差引发不满。
- **静默失败普遍引发困惑**：输出截断无提示（#8085）、超长 prompt 空回复（#8084）、图片循环后静默取消（#8088）——用户反复强调“宁可看到报错也不要无声失败”。
- **多设备/多机器使用场景真实存在**：LAN 访问（#8073）、移动端操作（#6281）、跨机器部署（#8080）均源于真实场景。
- **积极信号**：Issue #8078 由内置 AI 助手协助用户取证撰写，并附 AI 撰写声明，显示产品自身能力的自证式使用；多位首次贡献者提交了描述规范、可直接评审的 PR，社区贡献流程顺畅。

## 8. 待处理积压

- **#7884 历史信息加载**（9/19 提出，8 条评论，至今 OPEN）：影响核心聊天体验且用户情绪强烈，建议维护者尽快给出官方回应或里程碑标注。
- **#6281 移动端适配**（7/20 提出，跨季活跃）：PR #8086 已就绪，建议加速评审收编。
- **#8077 / #8078 / #8088** 三个今日新报 Bug 均无 fix PR，且涉及第三方 agent 集成与多 agent 会话管理，属较复杂模块，需维护者分诊。
- **PR #7936**（zh 语言 access-control 标签翻译，9/22 提交）为 size 极小的 i18n 修复，搁置已超 10 天，建议尽快合并以降低贡献者流失风险。

---
*数据来源：GitHub Issues/PR 更新（2026-10-03 前 24 小时）。所有链接指向 agentscope-ai/QwenPaw 仓库。*

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