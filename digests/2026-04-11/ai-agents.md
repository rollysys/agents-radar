# OpenClaw 生态日报 2026-04-11

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-11 02:32 UTC

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

以下是 OpenClaw 项目 2026-04-11 的动态日报：

# OpenClaw 项目日报 (2026-04-11)

## 1. 今日速览
OpenClaw 项目今日保持极高的社区活跃度，Issues 与 PR 更新量均达到 500 条，显示出项目正处于快速迭代期。社区焦点集中在 GPT-5.4/Codex 的模型对齐工作以及多渠道（Matrix, WhatsApp）的连接稳定性修复上。虽然今日无新版本发布，但核心功能如 Cron 任务引擎、QA 基准测试框架以及模型故障转移逻辑均有重要更新提交。整体来看，项目在修复高频回归问题的同时，正积极拓展对新模型和底层架构（如 Agent 身份验证）的支持。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 207 个 PR 合并/关闭，主要集中在修复关键回归问题和扩展底层架构：

*   **核心架构优化**：
    *   **Cron 任务增强**：PR [#62789](https://github.com/openclaw/openclaw/pull/62789) 与 [#64598](https://github.com/openclaw/openclaw/pull/64598) 引入了 Command Payload 执行引擎及 CLI 支持，允许 Cron 任务直接执行本地脚本，无需经过 Agent 转发，显著提升了自动化能力。
    *   **故障转移修复**：PR [#64579](https://github.com/openclaw/openclaw/pull/64579) 修复了模型自动故障转移后的“粘滞”问题，确保后续会话能正确恢复使用配置的主模型，而非一直停留在备用模型上。
    *   **QA 测试框架重构**：PR [#64562](https://github.com/openclaw/openclaw/pull/64562) 重构了共享 E2E QA Runner，解耦了 `qa-lab` 与 `qa-channel`，为后续的自动化测试奠定了基础。

*   **功能与集成**：
    *   **Benchmark 体系**：PR [#64441](https://github.com/openclaw/openclaw/pull/64441) 添加了 GPT-5.4 与 Opus 4.6 的性能对齐基准测试工具，响应了 Issue [#64227](https://github.com/openclaw/openclaw/issues/64227) 的对齐计划。
    *   **新增提供商**：PR [#64587](https://github.com/openclaw/openclaw/pull/64587) 集成了 Z.AI Web Search API；PR [#64600](https://github.com/openclaw/openclaw/pull/64600) 添加了 Servepath 作为新的模型网关提供商。

*   **渠道修复**：
    *   **Matrix**：PR [#64451](https://github.com/openclaw/openclaw/pull/64451) 改进了启动后解密失败事件的检测，减少了误报。
    *   **Feishu**：PR [#52666](https://github.com/openclaw/openclaw/pull/52666) 修复了 WebSocket 重试耗尽后无法重连的问题。
    *   **Slack**：PR [#64578](https://github.com/openclaw/openclaw/pull/64578) 允许插件在支持原生命令的渠道中注册命令。

## 4. 社区热点
今日社区讨论热烈，主要集中在以下几个方向：

*   **Agent 身份与信任验证 (RFC)**：Issue [#49971](https://github.com/openclaw/openclaw/issues/49971) 以 79 条评论高居榜首。社区正在热议如何为 OpenClaw 引入原生的 Agent 身份验证（参考 W3C DID 标准），以解决 Agent 间交互的可信度问题。这标志着项目正在向更安全的多智能体协作架构演进。
*   **实时语音支持诉求**：Issue [#7200](https://github.com/openclaw/openclaw/issues/7200) 持续获得关注（👍 18），用户强烈呼吁原生支持 WebRTC/Twilio 双向流式语音通话，以实现类似电话的交互体验。
*   **GPT-5.4 模型对齐**：Issue [#64227](https://github.com/openclaw/openclaw/issues/64227) 作为模型对齐的总 Tracker，吸引了大量开发者关注 OpenClaw 对最新 SOTA 模型的适配进度。
*   **Matrix 渠道失联问题**：Issue [#61773](https://github.com/openclaw/openclaw/issues/61773) 反映了 Matrix 渠道同步显示成功但无法接收消息的严重回归问题，引发了受影响用户的积极讨论。

## 5. Bug 与稳定性
今日报告了大量严重程度较高的回归问题，主要集中在模型调用和渠道连接：

*   **严重/回归问题**：
    *   **Matrix 渠道失效**：[#61773](https://github.com/openclaw/openclaw/issues/61773) - 连接显示正常但无法接收消息，严重影响 Matrix 用户。
    *   **GPT-5.3-codex 工具失效**：[#53959](https://github.com/openclaw/openclaw/issues/53959) - 更新后模型停止执行工具调用，导致 Agent 功能性瘫痪。
    *   **WhatsApp 媒体发送失败**：[#61726](https://github.com/openclaw/openclaw/issues/61726) (Closed), [#62214](https://github.com/openclaw/openclaw/issues/62214) - 媒体文件发送静默失败，仅发送文本，修复工作正在进行中。
    *   **CLI 崩溃**：[#63510](https://github.com/openclaw/openclaw/issues/63510) - `openclaw completion` 命令因缺失 QA 场景文件导致崩溃，已有修复 PR [#64594](https://github.com/openclaw/openclaw/pull/64594)。

*   **配置与运行时错误**：
    *   **GPT-5.4 配置幻觉**：[#37623](https://github.com/openclaw/openclaw/issues/37623) - 模型在配置中可选但运行时报错，用户体验极差。
    *   **LLM 请求超时**：[#62278](https://github.com/openclaw/openclaw/issues/62278) (Closed) - 所有 Agent 在执行长任务时统一 60 秒超时问题。
    *   **Compaction 失败**：[#60390](https://github.com/openclaw/openclaw/issues/60390) - LosslessClaw 压缩机制在处理认证请求时报错。

## 6. 功能请求与路线图信号
*   **敏感数据脱敏**：Issue [#64046](https://github.com/openclaw/openclaw/issues/64046) 提出对配置文件中的 API Key 及日志中的敏感信息进行脱敏处理。鉴于安全和合规需求，这极有可能被纳入近期路线图。
*   **实时语音交互**：Issue [#7200](https://github.com/openclaw/openclaw/issues/7200) 呼声较高，结合现有的 `voice-call` 插件动态，实时语音支持将是提升用户体验的关键一环。
*   **Databricks 插件**：PR [#59899](https://github.com/openclaw/openclaw/pull/59899) 正在将 Databricks 以外部插件形式集成，显示出项目正通过插件化生态扩展数据平台能力。

## 7. 用户反馈摘要
*   **新模型适配滞后**：用户反馈 GPT-5.4 等最新模型配置存在但无法使用，或出现工具调用失效（Codex 系列），反映出项目对前沿模型的兼容性测试和适配存在滞后，需要加强版本发布前的回归测试。
*   **连接稳定性痛点**：Matrix 和 WhatsApp 是近期反馈的重灾区，连接断开、消息同步失败等问题频发，严重影响了作为消息网关的核心体验。
*   **安全性与合规担忧**：用户明确指出敏感信息明文存储和展示带来的风险，希望官方尽快提供解决方案。

## 8. 待处理积压
*   **RFC #49971 (Native Agent Identity)**：此议题涉及核心架构变更，讨论已非常充分，建议维护团队尽快给出立项决策或 Milestone 安排。
*   **Issue #12590 (memoryFlush 不可靠)**：该 Bug 涉及记忆管理核心逻辑，长期未解决可能导致 Agent 上下文处理异常，建议优先排期修复。
*   **Issue #33086 (SSRF 防护误杀)**：代理环境下的 CDN 资源访问受阻问题，已有修复 PR [#55176](https://github.com/openclaw/openclaw/pull/55176) 待合并，建议尽快 Review 以改善特定网络环境下的用户体验。

---

## 横向生态对比

# 2026-04-11 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**功能大爆发与架构重构并存**的激烈竞争期。头部项目正致力于打破单体架构限制，向微内核、插件化演进；腰部项目则通过深耕特定渠道（微信、飞书、Discord）或特定能力（Cron、编程工具）建立差异化优势。模型适配方面，社区对 GPT-5.4/Codex 等新模型的跟进速度极快，但回归问题频发，稳定性成为制约落地的最大瓶颈。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新/新增 | PRs 更新/合并 | Release | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500+ / - | 500+ / 207 | 无 | ⚠️ 高迭代/高回归：活跃度极高，但严重 Bug 较多，处于快速修补期。 |
| **NanoBot** | 29 / 17 | 48 / 19 | 无 | 🟢 健康：活跃度高，稳定性获好评，正通过 WebUI 和自主进化能力补齐短板。 |
| **Hermes Agent** | 40+ / - | - / 8 | 无 | 🟡 扩张期/阵痛：新功能（微信支持）推进快，但构建与网关错误暴露了工程化短板。 |
| **IronClaw** | 38 / - | 50 / 43 | **v0.25.0** | 🔴 危机/发布期：发布大版本但 QA 暴露严重问题（OOM、无限重试），需紧急修复。 |
| **ZeroClaw** | 30+ / - | 30+ / - | 无 | 🟡 重构期：核心架构转向微内核，质量受挑战（Web UI 不可用），处于深度调整阶段。 |
| **Moltis** | 11 / 7 | 16 / 12 | **v20260410** | 🟢 健康：高频修复，响应迅速，聚焦 Hook 和多媒体渠道，稳定性较好。 |
| **CoPaw** | - / - | 17 / 6 | 无 | 🟢 活跃：社区贡献活跃，聚焦桌面端体验优化和多智能体架构探索。 |
| **PicoClaw** | 16 / - | 21 / 11 | Nightly | 🟡 修复期：v0.2.6 冲刺中，WebSocket 稳定性问题亟待解决。 |
| **NanoClaw** | - / - | 20 / 7 | 无 | 🟢 架构完善：专注 MCP 集成与容器运行时，解决宿主机交互痛点。 |
| **LobsterAI** | - / - | 16 / 8 | 无 | 🔴 不稳定：架构重构引发严重启动崩溃与模型失效，需关注后续修复。 |
| **NullClaw** | 3 / 3 | 6 / 2 | 无 | 🟡 迭代期：新版本引入回归问题，正在推进 Cron 与 Telegram 功能。 |
| **TinyClaw** | 0 / 0 | 1 / 0 | 无 | ⚪ 静默：仅维护性修复，社区无互动。 |
| **EasyClaw** | 0 / 0 | 0 / 0 | v1.7.10 | ⚪ 维护：发布 macOS 体验修复版，无代码互动。 |
| **ZeptoClaw** | 0 / 0 | 0 / 0 | 无 | ⚪ 沉寂：无活动。 |

## 3. OpenClaw 在生态中的定位

*   **核心参照与生态枢纽**：OpenClaw 依然是该生态中体量最大、功能覆盖最全的标杆项目，其动态直接反映了行业热点（如 GPT-5.4 对齐、Agent 身份验证 RFC）。
*   **对比优势**：相比 NanoBot 和 Hermes，OpenClaw 在 Cron 任务引擎、QA 基准测试框架等企业级/自动化功能上更为成熟，且社区对底层架构（如故障转移）的讨论更深入。
*   **当前隐忧**：作为参照系，其回归问题也最为典型（Matrix 渠道失效、Codex 工具失效）。相比之下，NanoBot 在 Windows 稳定性上获得了社区“完爆 OpenClaw”的评价，显示出新晋竞争者在特定场景下的超越潜力。

## 4. 共同关注的技术方向

*   **架构解耦与插件化**：
    *   **涉及项目**：**ZeroClaw**（拆分 16 Crate 微内核）、**Hermes Agent**（上下文引擎插件化）、**OpenClaw**（Agent 身份验证 RFC）、**IronClaw**（架构简化提案）。
    *   **诉求**：随着功能膨胀，单体架构维护困难，各项目均在探索通过微内核或插件机制解耦，以支持更灵活的扩展。

*   **多模态与多渠道集成**：
    *   **涉及项目**：**OpenClaw**（Matrix/WhatsApp）、**Hermes Agent**（微信/飞书）、**Moltis**（Discord/Telegram 语音）、**CoPaw**（QQ/钉钉）、**PicoClaw**（iMessage）。
    *   **诉求**：用户不再满足于 Web 端交互，AI Agent 正迅速渗透至主流 IM 平台，且对语音、图片等多模态消息的处理要求提高。

*   **本地模型与 Ollama 适配**：
    *   **涉及项目**：**NanoClaw**（Ollama 凭证注入）、**ZeroClaw**（Ollama 工具调用失效）、**NullClaw**（Ollama 兼容性）、**Hermes Agent**（Ollama Cloud 支持）。
    *   **诉求**：出于成本与隐私考虑，本地模型部署需求旺盛，各项目均在强化对 Ollama 等本地推理框架的适配，尤其是工具调用能力的对齐。

*   **宿主机/沙箱交互能力**：
    *   **涉及项目**：**NanoClaw**（Native Runner Mode）、**ZeroClaw**（Landlock 沙箱权限）、**OpenClaw**（CLI 本地脚本执行）。
    *   **诉求**：Docker 隔离限制了 Agent 调用宿主机 GUI 或系统级工具的能力，社区强烈要求突破容器限制，实现更深度的系统级自动化。

## 5. 差异化定位分析

*   **OpenClaw**：全能型“巨无霸”，覆盖渠道最广，核心架构最深，适合追求大而全解决方案的用户，但需容忍较高的 Bug 风险。
*   **NanoBot & Hermes Agent**：轻量级与自主进化，更侧重 Agent 的自主性和进化能力（如自动技能发现），且 Hermes 对国内 IM（微信）支持更激进，适合个人开发者与 AI 爱好者。
*   **ZeroClaw**：技术激进派，押注 Rust 微内核架构，追求极致性能与安全性，适合愿意尝鲜且具备较强排错能力的技术极客。
*   **Moltis & CoPaw**：务实派与渠道深耕。Moltis 专注于 Hook 系统与特定渠道体验；CoPaw 关注多智能体协作与桌面端易用性，适合特定场景的落地应用。
*   **LobsterAI**：聚焦企业级 GUI 客户端，重在解决客户端打包与安装体验，适合非技术背景的企业用户。

## 6. 社区热度与成熟度

*   **第一梯队（快速迭代/激进期）**：**OpenClaw, NanoBot, Hermes Agent, ZeroClaw**。这些项目 Issues 和 PRs 活跃，功能迭代极快，但同时也伴随着架构调整的阵痛和较高的回归 Bug 率。
*   **第二梯队（质量巩固期）**：**Moltis, CoPaw, NanoClaw**。活跃度适中，维护者对 Bug 响应迅速，PR 合并质量较高，正处于功能完善与稳定性提升的良性循环中。
*   **第三梯队（发布修复期）**：**IronClaw, LobsterAI, PicoClaw**。近期发布了新版本或处于版本冲刺阶段，正集中精力解决大量新引入的 Bug，社区反馈多为负面或问题报告。
*   **长尾项目**：**TinyClaw, EasyClaw**。处于低频维护状态，社区沉寂。

## 7. 值得关注的趋势信号

1.  **SOTA 模型适配滞后风险**：OpenClaw 和 Hermes 等项目均出现 GPT-5.4 配置存在但运行报错或工具调用失效的问题。这表明开源项目对闭源 SOTA 模型的适配存在明显的滞后性和测试盲区，建议开发者在新模型发布初期持谨慎升级态度。
2.  **Docker 隔离 vs 宿主机交互的博弈**：NanoClaw 社区对“Native Runner Mode”的强烈呼声揭示了当前 AI Agent 的核心痛点——容器化隔离了环境，阻碍了 Agent 真正“操作电脑”。预计未来会有更多项目推出混合模式或更精细的权限控制方案（如 ZeroClaw 的沙箱改进）。
3.  **WebUI 成为普及关键**：NanoBot 社区对 WebUI 的呼声极高。随着 Agent 功能复杂化，CLI 已无法满足非专业用户的管理需求，具备可视化编排能力的项目将更具竞争力。
4.  **安全与身份验证提上日程**：OpenClaw 的 Agent 身份 RFC 和 Hermes 的敏感信息泄露问题表明，随着 Agent 从“玩具”转向“生产力工具”，身份认证、敏感数据脱敏和权限隔离将成为下一阶段架构设计的重点。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-11)

## 1. 今日速览
NanoBot 项目今日保持着极高的活跃度，社区讨论热烈，代码迭代迅速。过去24小时内共有 **29 条 Issues 更新**（其中 17 条为新开/活跃）和 **48 条 PR 更新**，显示出项目正处于功能快速扩展与架构优化并行的阶段。虽然没有发布新版本，但合并的 PR 涵盖了安全修复、核心配置重构和新渠道支持，项目整体健康度良好，社区对 WebUI 和自主进化能力的关注度持续升温。

## 2. 版本发布
无新版本发布。项目仍在积极开发迭代中，尚未发布正式 Release。

## 3. 项目进展
今日共有 **19 条 PR 被合并或关闭**，主要推进了以下关键进展：

*   **安全增强**：PR [#2831](https://github.com/HKUDS/nanobot/pull/2831) 修复了 Exec Tool 泄露进程环境变量（如 API Keys）的安全漏洞，防止 LLM 生成的恶意命令窃取密钥，显著提升了生产环境的安全性。
*   **交互体验优化**：PR [#2985](https://github.com/HKUDS/nanobot/pull/2985) 引入了“中间轮次消息注入”机制，允许用户在 Agent 思考过程中发送消息，这些消息会被注入到当前 LLM 上下文中，解决了交互中断或等待过长的问题。
*   **架构重构与配置**：PR [#3025](https://github.com/HKUDS/nanobot/pull/3025) 重构了 Provider 配置，支持列表格式和多端点选择，增强了系统的灵活性和向后兼容性。PR [#3022](https://github.com/HKUDS/nanobot/pull/3022) 允许用户配置自定义 Provider 名称，不再受限于注册表定义。
*   **渠道扩展**：PR [#2946](https://github.com/HKUDS/nanobot/pull/2946) 和 [#2911](https://github.com/HKUDS/nanobot/pull/2911) 增加了 WebSocket Server Channel 及调试工具，为后续 WebUI 的开发奠定了基础。

## 4. 社区热点
今日社区讨论聚焦于可视化界面与智能增强：

*   **WebUI 功能讨论** ([#2949](https://github.com/HKUDS/nanobot/issues/2949))：该 Issue 获得了 6 个赞和 9 条评论。用户强烈希望能拥有一个功能完整的 WebUI，目前的 CLI 和聊天通道交互方式在复杂场景下略显不足。这是目前社区关注度最高的功能请求。
*   **自动技能发现** ([#2927](https://github.com/HKUDS/nanobot/issues/2927))：引发了关于 AI Agent 自主进化能力的探讨。用户希望 NanoBot 能从重复行为中自动识别并生成技能（Skills），而不仅仅是被动接收手动创建的技能，这标志着用户对 Agent 自主性的期待提高。
*   **竞品对比实测** ([#2774](https://github.com/HKUDS/nanobot/issues/2774))：用户 @bigsinger 分享了在 Windows 环境下对比 OpenClaw 的实测体验，称赞 NanoBot "非常稳定，完爆 openclaw"，引发了关于 Windows 兼容性和稳定性的讨论。

## 5. Bug 与稳定性
今日报告了若干影响使用的 Bug，部分已有修复方案：

*   **[已修复] 消息截断误判** ([#3004](https://github.com/HKUDS/nanobot/issues/3004))：`strip_think()` 函数中的正则表达式存在假阳性问题，导致消息在包含特定标签描述时被意外截断。PR [#3020](https://github.com/HKUDS/nanobot/pull/3020) 已提交修复，锚定了正则匹配规则。
*   **[已修复] 飞书渠道启动失败** ([#2970](https://github.com/HKUDS/nanobot/issues/2970))：升级到 v0.1.5 后，飞书渠道因模块导入错误无法启动。
*   **[待修复] 升级后 Python 找不到** ([#2917](https://github.com/HKUDS/nanobot/issues/2917))：用户反馈升级到 0.1.5 版本后技能执行失败，系统提示找不到 Python，可能是环境变量处理或路径依赖问题。
*   **[待修复] 心跳机制重复创建任务** ([#3028](https://github.com/HKUDS/nanobot/issues/3028))：心跳触发时会重复创建定时任务，导致重复发送问候语，且未按预期分析上下文。
*   **[待修复] MCP Server 连接冲突** ([#3018](https://github.com/HKUDS/nanobot/issues/3018))：配置混合类型（streamableHttp 和 Stdio）的 MCP Server 时会导致连接失败。

## 6. 功能请求与路线图信号
社区提出了多项旨在提升易用性和容错性的功能请求：

*   **检查点与恢复机制** ([#3027](https://github.com/HKUDS/nanobot/issues/3027))：针对长耗时任务，用户希望引入 Agent 执行状态的 Checkpoint 功能，允许在执行偏差时回滚或干预，而非全盘丢弃。
*   **智能并发控制** ([#3008](https://github.com/HKUDS/nanobot/issues/3008))：建议将硬编码的并发请求限制改为动态配置，甚至根据负载智能调整。
*   **上下文压缩管道** ([#2937](https://github.com/HKUDS/nanobot/issues/2937))：建议引入基于 Embedding 的上下文压缩机制，以替代简单的 Token 截断或昂贵的 LLM 总结，兼顾细节保留与成本控制。
*   **模型切换命令** ([#2975](https://github.com/HKUDS/nanobot/issues/2975))：请求支持 `/model` 命令，允许用户在对话中动态切换 LLM 模型。

## 7. 用户反馈摘要
*   **稳定性获赞**：多位长期用户在 Issues 中表示，NanoBot 在 Windows 环境下的稳定性远超竞品 OpenClaw，安装调教后非常可靠 ([#1265](https://github.com/HKUDS/nanobot/issues/1265), [#2774](https://github.com/HKUDS/nanobot/issues/2774))。
*   **痛点：API 欠费提示缺失**：用户指出当 API Key 欠费时，Bot 无响应且无报错，排查困难 ([#3006](https://github.com/HKUDS/nanobot/issues/3006))。
*   **痛点：隐私隔离**：有用户指出 WhatsApp 渠道目前共用同一工作空间，导致不同用户间的隐私信息泄露风险 ([#2836](https://github.com/HKUDS/nanobot/issues/2836))。
*   **期待：易用性**：用户对 WebUI 的呼声很高，目前纯 CLI 的操作门槛对非技术用户仍具挑战 ([#2949](https://github.com/HKUDS/nanobot/issues/2949))。

## 8. 待处理积压
*   **文档本地化**：PR [#1164](https://github.com/HKUDS/nanobot/pull/1164) 提议添加越南语 README，自 2 月创建以来长期未合并，建议维护者审核并合入，以扩大国际影响力。
*   **Exec 工具权限控制**：PR [#2475](https://github.com/HKUDS/nanobot/pull/2475) 关于允许用户配置 Exec 工具的允许/拒绝模式，已开启 10 天，涉及安全策略，需尽快审查。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-04-11)

## 1. 今日速览
ZeroClaw 项目今日呈现极高的开发活跃度，正处于**架构重构的关键转折点**。过去 24 小时内，Issues 与 PRs 更新均超过 30 条，核心焦点集中在 **"微内核架构迁移"** 上，旨在将单体应用拆分为 16 个独立 Crate。社区方面，Web Dashboard 不可用的严重 Bug 持续发酵，用户反馈强烈。整体来看，项目在向 v0.7.0 迈进的过程中，正在经历代码重构的阵痛期，虽然架构设计积极向前，但稳定性问题（如 OOM、文件写入失败）仍需维护者高度重视。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目核心推进了架构拆分与文档重构，部分修复已合并。

*   **架构重构核心突破**：PR [#5559](https://github.com/zeroclaw-labs/zeroclaw/pull/5559) 提出了重大变更，将原本 28.9 万行代码的单体 Rust Crate 拆分为 16 个独立 Crate，引入 Feature-gated subsystems。此举旨在解决编译时间长、模块耦合度高的问题，是迈向 v0.7.0 微内核架构的关键一步。
*   **文档体系重组**：PR [#5589](https://github.com/zeroclaw-labs/zeroclaw/pull/5589) 启动了文档归档工作，将旧文档移至 `docs/legacy/`，配合 RFC #5576 重新定义知识架构。
*   **已关闭/合并的修复**：
    *   PR [#5596](https://github.com/zeroclaw-labs/zeroclaw/pull/5596) 修复了 Daemon 模式下的 Gateway 复用问题，避免端口冲突。
    *   PR [#5594](https://github.com/zeroclaw-labs/zeroclaw/pull/5594) 改进了 OpenAI Codex 的账户 ID 解析逻辑。
    *   PR [#5611](https://github.com/zeroclaw-labs/zeroclaw/pull/5611)（包含主动消息、Gemma 4 迁移等 110 个提交的大型 PR）已被关闭，可能意味着该开发线的合并受阻或需重新规划。

## 4. 社区热点
今日讨论热度最高的问题集中在可用性阻塞与架构规划上：

1.  **Web Dashboard 持续不可用**：Issue [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) 再次成为焦点，评论数达 9 条。该问题导致 Web UI 和 Tauri 桌面端均无法使用，且跨越多个版本未解决，用户对此表示强烈不满。
2.  **微内核架构 RFC 讨论**：Issue [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) 提出了 v0.7.0 到 v1.0.0 的微内核转型路线图，引发核心贡献者对代码结构、解耦策略的深入探讨（5 条评论）。
3.  **Ollama 工具调用失效**：Issue [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) 指出 Ollama provider 强制 `tool_count=0`，导致原生工具调用完全失效，获得了 2 个点赞，反映了本地模型用户的核心诉求。

## 5. Bug 与稳定性
今日报告了多个严重影响使用的 Bug，部分已提交修复 PR，部分仍待解决。

*   **S0 级（数据丢失/安全风险）**：
    *   [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627)：`file_write` 工具静默失败，写入文件在主机不可见。
    *   [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)：WSL2 环境下连续发生 OOM（内存溢出）导致进程被杀。
    *   [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605)：多实例部署下配置路径冲突，存在安全风险。
*   **S1 级（工作流阻塞）**：
    *   [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)：Web Dashboard 无法构建，影响所有桌面端用户。
    *   [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)：Kimi-code provider 在流式工具调用时报错 400。
    *   [#5153](https://github.com/zeroclaw-labs/zeroclaw/issues/5153)：Landlock 沙箱破坏工作区访问权限。
    *   [#5583](https://github.com/zeroclaw-labs/zeroclaw/issues/5583)：Docker.debian 构建失败（已有修复 PR [#5592](https://github.com/zeroclaw-labs/zeroclaw/pull/5592)）。
    *   [#5613](https://github.com/zeroclaw-labs/zeroclaw/issues/5613)：Jira 模块认证失败（403/401）。

## 6. 功能请求与路线图信号
社区与开发团队正在积极规划下一阶段功能，RFC 文档集中发布。

*   **核心架构演进**：RFC #5574 确立了微内核转型方向；Issue #5586 提议引入 WIT 接口文件定义插件契约，预示着插件系统将更加标准化。
*   **Provider 增强**：
    *   Issue [#5619](https://github.com/zeroclaw-labs/zeroclaw/issues/5619) 请求支持 OpenRouter 原生路由。
    *   Issue [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) 提议为 Ollama Cloud、Kimi 等增加订阅级 OAuth 支持。
*   **运维与自动化**：
    *   Issue [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) 建议为 Cron 任务增加 pre-hook 前置检查，以便灵活跳过执行。
*   **Channel 扩展**：
    *   PR [#5602](https://github.com/zeroclaw-labs/zeroclaw/pull/5602) 正在将 Mattermost 从轮询改为 WebSocket 实时通信。

## 7. 用户反馈摘要
*   **痛点**：用户对 Web Dashboard 的长期不可用感到沮丧（#4866），认为其阻塞了核心工作流。本地部署用户（Docker, WSL2）遇到了较多的兼容性问题（OOM、构建失败）。
*   **场景**：部分用户尝试在 WSL2 或 Docker 环境中运行高负载任务，触发了内存管理瓶颈（#5542）。Jira 集成用户在企业内网环境遭遇认证阻碍（#5613）。
*   **积极信号**：尽管存在 Bug，社区对微内核重构（#5574）和文档标准化（#5576）表现出积极的支持态度，认为这是项目走向成熟的必经之路。

## 8. 待处理积压
以下重要 Issue 长期未得到有效解决或响应，建议维护者优先关注：

1.  **[#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) [Bug]: Web dashboard is still not available**  
    *状态：Open | 创建于 2026-03-28*  
    该问题已持续两周，严重影响桌面端体验，需尽快排查 Web 构建流程。
2.  **[#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) [Bug]: file_write tool silently fails**  
    *状态：Open | 创建于 2026-03-25*  
    涉及数据丢失风险（S0），需确认文件系统隔离机制是否存在逻辑漏洞。
3.  **[#5153](https://github.com/zeroclaw-labs/zeroclaw/issues/5153) [Bug]: Landlock shell sandbox poisons caller process**  
    *状态：Open | 创建于 2026-03-29*  
    沙箱机制导致后续操作受阻，影响 Linux 平台的安全性功能使用。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-04-11)

## 1. 今日速览
今日 Hermes Agent 项目保持极高的社区活跃度，过去 24 小时内有 40 条新开 Issue 和大量 PR 更新，显示项目正处于快速迭代期。虽然今日无新版本 Release 发布，但核心开发团队合并了多项关键功能，包括**上下文引擎插件化**和**原生微信支持**，标志着项目架构扩展性和平台覆盖面取得重大突破。然而，随着用户量增长，飞书网关报错和 Docker 构建失败等稳定性问题凸显，社区反馈集中在网关集成体验和部署配置上。整体来看，项目功能扩展迅速，但需警惕激增的 Bug 报告带来的维护压力。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 8 个 PR 被合并或关闭，推进了以下关键功能：
*   **架构重构 - 插件化上下文引擎**：PR [#7464](https://github.com/NousResearch/hermes-agent/pull/7464) 已合并，引入了可插拔的上下文引擎插槽，允许第三方实现自定义的上下文压缩/管理逻辑。这是对核心 Agent 架构的重要解耦，为后续更高级的记忆管理机制铺平了道路。
*   **新平台支持 - 微信**：PR [#7166](https://github.com/NousResearch/hermes-agent/pull/7166) 已合并，正式通过 iLink Bot API 实现了对个人微信的原生支持，解决了大量中文用户的核心需求。
*   **稳定性修复 - 空响应回退**：PR [#7505](https://github.com/NousResearch/hermes-agent/pull/7505) 已合并，修复了当模型（如 GLM-4.5-Air）返回空响应时 Agent 陷入无限等待的问题，现在会正确触发回退机制，显著改善了用户体验。

## 4. 社区热点
今日讨论最热烈的问题集中在企业级集成和模型支持上：
*   **飞书网关报错严重**：Issue [#6893](https://github.com/NousResearch/hermes-agent/issues/6893) 以 15 条评论位居热度榜首。用户反馈在飞书网关审批命令时频繁出现 `Error code 200340`，导致工作流中断。这反映出 Hermes 在国内企业协同工具集成上的兼容性仍有待加强。
*   **Ollama Cloud 支持呼声高**：Issue [#3926](https://github.com/NousResearch/hermes-agent/issues/3926) 获得 19 个点赞。用户希望将 Ollama Cloud 纳入内置 Provider，目前的 `custom_providers` 配置方式在辅助模型设置上存在诸多限制。
*   **安全风险集中曝光**：用户 @DataAdvisory 今日集中提交了 4 个安全相关 Issue（如 [#7487](https://github.com/NousResearch/hermes-agent/issues/7487) 缺少安全头，[#7486](https://github.com/NousResearch/hermes-agent/issues/7486) 会话明文存储），引发了社区对项目安全性的关注。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，部分严重影响使用：
*   **P0 - 构建与启动失败**：
    *   Issue [#6352](https://github.com/NousResearch/hermes-agent/issues/6352)：Docker 构建在 `main` 分支持续失败，因 pip 依赖解析过深导致，阻碍了容器化部署。
    *   Issue [#6393](https://github.com/NousResearch/hermes-agent/issues/6393)：安装后启动失败，安全扫描器配置异常。
*   **P1 - 核心功能异常**：
    *   Issue [#7180](https://github.com/NousResearch/hermes-agent/issues/7180)：Agent 在执行过程中无限卡死，根因分析指向 GLM 模型空响应，该问题虽已通过 PR [#7505](https://github.com/NousResearch/hermes-agent/pull/7505) 修复，但影响面较广。
    *   Issue [#6893](https://github.com/NousResearch/hermes-agent/issues/6893)：飞书网关命令审批失败（Error 200340）。
*   **P2 - 运行环境问题**：
    *   Issue [#7458](https://github.com/NousResearch/hermes-agent/issues/7458) & [#7511](https://github.com/NousResearch/hermes-agent/issues/7511)：路径解析未正确处理 `~` 符号，导致 Checkpoint 功能在特定路径下报错。

## 6. 功能请求与路线图信号
用户对功能完善的诉求主要集中在兼容性和细粒度控制上：
*   **结构化记忆系统**：Issue [#346](https://github.com/NousResearch/hermes-agent/issues/346) 提议引入 Typed Nodes 和 Graph Edges 替代现有的扁平文本记忆。结合今日合并的“插件化上下文引擎”，该功能极有可能在下一阶段通过插件形式实现。
*   **主动限流**：Issue [#7489](https://github.com/NousResearch/hermes-agent/issues/7489) 建议利用 API 返回的 `x-ratelimit` 头进行预判式节流，避免触发 HTTP 429 错误。随着多模型切换逻辑的完善，这可能成为标配功能。
*   **细粒度委派控制**：Issue [#7481](https://github.com/NousResearch/hermes-agent/issues/7481) 请求为子代理任务提供独立的回退 Provider 链，这是对当前 Agent 编排能力的精细化增强。

## 7. 用户反馈摘要
从 Issues 评论中提炼出以下典型用户体验：
*   **部署痛点**：NixOS 用户反馈配置繁琐，存在依赖缺失（`hermes_logging`）和路径解析问题，DIY 部署体验不及 Docker 顺滑。
*   **模型切换困惑**：用户在使用自定义 Provider 或新模型（如 GPT-5.4, Gemma 4）时，经常遇到模型列表不刷新或配置无法识别的问题，说明配置系统的易用性有待优化。
*   **平台差异**：Discord/Telegram 网关功能相对稳定，而飞书和微信等国内平台网关问题较多，用户期待更稳定的企业级适配。

## 8. 待处理积压
以下重要 Issue 长期未获解决或长期处于 Open 状态，需维护者关注：
*   **Issue [#3926](https://github.com/NousResearch/hermes-agent/issues/3926) (Ollama Cloud 支持)**：自 3 月 30 日创建以来，尽管点赞数高（19 个），但仍未得到官方明确排期回应。
*   **Issue [#6893](https://github.com/NousResearch/hermes-agent/issues/6893) (飞书网关错误)**：作为今日最活跃的 Issue，目前尚未有官方回复或修复方案，严重影响了国内飞书用户的使用。
*   **Security Series (Issues #7483 - #7487)**：今日集中提交的一系列安全漏洞报告目前均处于 Open 状态，建议安全团队尽快介入评估。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-11)

## 1. 今日速览
PicoClaw 项目今日保持高活跃度，核心开发重心集中在 **v0.2.6** 版本发布前的稳定性修复与功能完善。过去 24 小时内共有 16 条 Issue 更新与 21 条 PR 更新，社区反馈热烈。项目发布了 `v0.2.6-nightly` 自动构建版本，标志着新版本迭代进入冲刺阶段。核心亮点包括 Gemini 原生支持的重构、WebSocket 连接问题的持续排查以及定时任务机制的优化。值得注意的是，社区对官方响应速度与跨平台支持（如 Signal）的关注度较高。

## 2. 版本发布
- **版本号**: `nightly` (Nightly Build)
- **Tag**: `v0.2.6-nightly.20260411.748ac58d`
- **说明**: 这是一个自动化发布的构建版本，主要包含最新的代码提交。官方提示该版本可能不稳定，建议谨慎使用。
- **变更日志**: [查看完整变更](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

## 3. 项目进展
今日共有 **11 条 PR 合并/关闭**，主要集中在 Bug 修复与用户体验优化，显著提升了系统健壮性。

- **核心功能重构**: PR [#2475](https://github.com/sipeed/picoclaw/pull/2475) 提交了重要更新，分离了思维链与普通回复，并引入了原生 Gemini Provider，解决了 WebUI 显示混乱的问题，是对 AI 模型兼容性的重要增强。
- **关键 Bug 修复**: 
    - 修复了 WebUI 中 Content 与 Tool_call 无法同时显示的问题 ([#2449](https://github.com/sipeed/picoclaw/pull/2449)，关闭 Issue [#2427](https://github.com/sipeed/picoclaw/issues/2427))。
    - 修复了 SQLite 全文搜索（FTS5）中的特殊字符注入问题 ([#2436](https://github.com/sipeed/picoclaw/pull/2436))，提升了安全性。
    - 解决了 Launcher 端 React 版本不匹配导致的崩溃问题 ([#2467](https://github.com/sipeed/picoclaw/pull/2467))。
    - 修复了 Google Antigravity Token 刷新时的权限范围丢失问题 ([#2163](https://github.com/sipeed/picoclaw/pull/2163))。
- **功能支持**: 新增了 iMessage 频道支持 ([#2224](https://github.com/sipeed/picoclaw/pull/2224))，扩展了用户接入场景。

## 4. 社区热点
今日社区讨论焦点主要集中在功能增强与社区治理方面：

1.  **LLM 账号堆叠功能请求** ([#2408](https://github.com/sipeed/picoclaw/issues/2408))：评论数达 8 条。用户建议增加类似“弹夹”的 API Key 轮换机制，以应对单一 Key 的速率限制。这反映了重度用户对服务高可用性的迫切需求。
2.  **WebSocket 连接故障持续发酵** ([#2319](https://github.com/sipeed/picoclaw/issues/2319))：评论数 7 条。自 v0.2.5 起 WebSocket 连接失败问题仍未解决，影响了部分用户的正常使用，社区正积极提供环境信息辅助排查。
3.  **官方社区治理争议** ([#2433](https://github.com/sipeed/picoclaw/issues/2433))：用户指出官方 Discord 频道缺乏维护和响应，质疑官方对开源社区的支持力度。该 Issue 已被关闭，引发了对项目运营策略的关注。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，部分已有修复方案：

- **严重**:
    - **WebSocket 连接失败** ([#2463](https://github.com/sipeed/picoclaw/issues/2463), [#2319](https://github.com/sipeed/picoclaw/issues/2319)): v0.2.5~v0.2.6 版本存在连接问题，目前尚未有明确的修复 PR 合并，需持续关注。
    - **WebUI 推理与回复混淆** ([#2448](https://github.com/sipeed/picoclaw/issues/2448)): 现已由 PR [#2475](https://github.com/sipeed/picoclaw/pull/2475) 修复。
- **中等**:
    - **Windows 路径分隔符错误** ([#2472](https://github.com/sipeed/picoclaw/issues/2472)): `list_dir` 工具在 Windows 下因路径分隔符不兼容报错。
    - **飞书频道响应遗漏** ([#2464](https://github.com/sipeed/picoclaw/issues/2464)): 连续发送消息时仅响应最后一条。
    - **Cron 任务执行失败** ([#2468](https://github.com/sipeed/picoclaw/issues/2468)): 提示权限限制错误，目前有 PR [#2474](https://github.com/sipeed/picoclaw/pull/2474) 正在尝试修复会话隔离问题。
- **安全**:
    - **终端控制字符安全隐患** ([#2377](https://github.com/sipeed/picoclaw/issues/2377)): exec 工具输出可能包含恶意 ANSI 控制字符。

## 6. 功能请求与路线图信号
- **API Key 轮换机制** ([#2408](https://github.com/sipeed/picoclaw/issues/2408)): 社区强烈建议支持多 API Key 负载均衡，适合作为下一阶段的重点功能。
- **SMTP 频道支持** ([#2465](https://github.com/sipeed/picoclaw/issues/2465)): 建议增加邮件发送能力，结合定时任务实现周期性报告，属于高价值的功能扩展。
- **Signal 频道集成** ([#41](https://github.com/sipeed/picoclaw/issues/41)): 该 Issue 已关闭，可能意味着功能已排期或通过其他方式解决，需关注后续更新说明。

## 7. 用户反馈摘要
- **痛点**: 用户对 v0.2.5 之后的 WebSocket 稳定性表示不满；Discord 社区缺乏官方互动引发了用户对项目维护态度的质疑；Windows 平台兼容性仍有待提高。
- **场景**: 用户正在尝试将 PicoClaw 应用于更复杂的自动化场景（如定时任务、邮件通知）以及多模型切换（Gemini, OpenRouter），对 Agent 的“思考过程”与“最终回复”的区分展示有明确需求。
- **正面反馈**: 用户认为 PicoClaw 相比同类产品潜力十足，尤其看重其作为 Sipeed 生态一部分的硬件结合潜力。

## 8. 待处理积压
- **PR [#2313](https://github.com/sipeed/picoclaw/pull/2313) (Multi-User Support & Security Hardening)**: 这是一个大型重构 PR，涉及多用户支持和安全加固，自 4 月 3 日开启至今未合并，建议维护者尽快 Review 或反馈进度，以免阻塞后续开发。
- **PR [#2229](https://github.com/sipeed/picoclaw/pull/2229) (CLI UI 重构)**: 旨在提升终端界面的可读性，自 3 月 31 日开启，处于待定状态。
- **Issue [#2319](https://github.com/sipeed/picoclaw/issues/2319) (WebSocket 故障)**: 作为高优先级 Bug，尚未有确定的修复版本发布，建议列为最高优先级处理。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-11)

## 1. 今日速览
NanoClaw 项目今日呈现出极高的开发活跃度，过去24小时内 PR 更新高达 20 条，其中 7 条已完成合并，显示出维护团队正在高强度推进功能迭代与缺陷修复。核心进展集中在 **MCP（Model Context Protocol）生态集成** 与 **容器运行时增强** 两个方面，大幅扩展了作为 AI 智能体底座的兼容性。社区端对 **"Native Runner Mode"（本地运行模式）** 的呼声日益高涨，反映出用户希望突破 Docker 隔离限制以调用宿主机 GUI/系统级工具的迫切需求。整体来看，项目正处于架构完善期，从单一 Claude 客户端向多模型、多平台、持久化记忆的通用智能体平台演进。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 7 个 PR 合并至主分支，显著提升了系统的稳定性与扩展性：

*   **模型生态扩展**：合并 [PR #1733](qwibitai/nanoclaw PR #1733) (Ollama 凭证注入) 与 [PR #1607](qwibitai/nanoclaw PR #1607) (LiteLLM MCP 技能)，正式打通了对本地大模型（Ollama）及多模型代理的官方支持通道，降低了对 Anthropic API 的单一依赖。
*   **智能体记忆增强**：[PR #1729](qwibitai/nanoclaw PR #1729) 合并，引入 Supermemory 集成与会话软删除功能，解决了 Agent 跨会话记忆缺失的痛点，实现了持久化记忆能力。
*   **关键稳定性修复**：[PR #1724](qwibitai/nanoclaw PR #1724) 修复了 OAuth Token 刷新失败导致容器认证失效的问题；[PR #719](qwibitai/nanoclaw PR #719) 修复了流式输出异常导致的进程挂起问题。这两项修复对生产环境至关重要。
*   **网络与安全**：[PR #1258](qwibitai/nanoclaw PR #1258) 增加了 Tailscale 网络变量的透传，[PR #721](qwibitai/nanoclaw PR #721) 补充了关键的挂载安全模块测试。

此外，仍有 13 个 PR 处于待合并状态，其中包括引入 SQLite 数据库层的架构重构 [PR #1723](qwibitai/nanoclaw PR #1723)，预示着项目数据存储方式将发生重大变革。

## 4. 社区热点
今日讨论最活跃的话题集中在突破容器化限制与多模型支持：

*   **[Issue #1732](qwibitai/nanoclaw Issue #1732) Native Runner Mode（Host 模式支持）**
    *   **热度**：新开 Issue，立即引发关注。
    *   **分析**：用户明确指出 Docker 隔离是阻碍 Agent 调用 `tmux`、 headed browsers（有头浏览器）及 macOS API 的硬性障碍。目前只能通过挂载宿主机目录这种 "Hack" 方式解决，社区急需官方提供的非容器化运行方案。
*   **[Issue #1163](qwibitai/nanoclaw Issue #1163) OpenCode 与多 Provider 支持**
    *   **热度**：👍 3, 评论 2。
    *   **分析**：企业用户因合规或成本原因，强烈希望 NanoClaw 能原生支持 Claude 之外的其他 AI 提供商（如 OpenAI, OpenCode 等）。这表明项目正面临从"Claude 专属工具"向"通用 Agent 框架"转型的压力。

## 5. Bug 与稳定性
今日修复了两个高风险问题，并发现了一个环境配置相关的新问题：

*   **[已修复] OAuth 认证失效** ([PR #1724](qwibitai/nanoclaw PR #1724))：严重程度高。长时间闲置后容器会因 Token 过期且刷新失败而返回 401 错误，导致 Agent 失控。
*   **[已修复] 流式输出挂起** ([PR #719](qwibitai/nanoclaw PR #719))：中等严重程度。网络波动导致回调异常时，整个输出链会无响应，现已增加错误捕获机制。
*   **[已修复] Host 模式 IPC 路径错误** ([Issue #1730](qwibitai/nanoclaw Issue #1730))：在宿主机直接运行时，硬编码的 `/workspace/ipc` 路径导致 MCP 工具失效。该 Issue 已关闭，推测已通过相关重构解决。
*   **[待处理] macOS Apple Container 配置问题** ([PR #1735](qwibitai/nanoclaw PR #1735))：涉及 macOS 新容器技术的环境变量与代理配置错误，影响 macOS 用户的部署体验，已有 PR 等待合并。

## 6. 功能请求与路线图信号
结合 Issue 与活跃 PR，以下功能极有可能纳入下一阶段路线图：

1.  **原生/宿主运行模式**：针对 [Issue #1732](qwibitai/nanoclaw Issue #1732) 的诉求，虽然尚未有官方 PR，但 [PR #1726](qwibitai/nanoclaw PR #1726)（额外挂载支持）和 [PR #1728](qwibitai/nanoclaw PR #1728)（环境变量透传）正在逐步填补容器隔离带来的鸿沟。
2.  **架构持久化层重构**：[PR #1723](qwibitai/nanoclaw PR #1723) 提议引入 SQLite 适配层，这意味着项目可能正在准备抛弃纯文件存储，向更健壮的数据库驱动架构迁移，以支持更复杂的查询和会话管理。
3.  **上下文压缩技术**：[Issue #1493](qwibitai/nanoclaw Issue #1493) 提到的 Headroom 代理技术，显示社区正在探索 API 层面的上下文压缩方案，旨在降低 Token 消耗成本。

## 7. 用户反馈摘要
*   **痛点：Docker 隔离限制**：用户反馈在进行自动化开发（如使用 tmux）或桌面自动化时，Docker 环境配置极其繁琐，无法顺畅使用宿主机工具。
*   **痛点：配置文件冲突**：[Issue #1665](qwibitai/nanoclaw Issue #1665) 指出 `.claude/settings.local.json` 常被误提交，影响团队协作，已有 [PR #1734](qwibitai/nanoclaw PR #1734) 快速响应。
*   **期待：多模型支持**：用户对 Ollama 集成反响积极，希望进一步解耦对 Claude Code 的强绑定。

## 8. 待处理积压
以下重要 PR 长期未合并，建议维护者优先关注：

*   **[PR #1624](qwibitai/nanoclaw PR #1624) Matrix 频道集成**：开放已有一周，实现了 E2EE 加密支持，是扩展通讯渠道的重要功能，需尽快 Review。
*   **[PR #1562](qwibitai/nanoclaw PR #1562) 无损上下文管理 (LCM)**：涉及核心上下文处理逻辑，功能复杂度高，需仔细评估对现有架构的影响。
*   **[PR #1188](qwibitai/nanoclaw PR #1188) Unraid 集成** & **[PR #1327](qwibitai/nanoclaw PR #1327) Home Assistant 集成**：这两项 MCP 技能积压多日，合并后将显著增强 Agent 在 NAS 和智能家居场景的实用性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-11)

## 1. 今日速览
NullClaw 项目今日保持较高的开发活跃度，过去 24 小时内共有 6 个 PR 更新与 3 个新 Issue 产生。项目核心团队与社区贡献者正致力于扩展功能边界（如 Telegram 交互与 Cron 定时任务），同时推进 CI/CD 流程的安全性加固（Nix 构建与 Action 锁定）。然而，近期发布的 `v2026.4.9` 版本似乎引入了若干回归问题，导致 Otel 集成与 Docker 沙箱环境出现异常，需维护者重点关注。整体来看，项目处于"快速迭代伴随阵痛"的阶段，功能增强与稳定性修复并行。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **2 个 PR 合并/关闭**，显著提升了系统的健壮性与兼容性：
*   **修复关键崩溃问题**：PR [#781](https://github.com/nullclaw/nullclaw/pull/781) 已合并，修复了 GLM-5 模型返回 `null` JSON 值导致的 Panic/SIGSEGV 崩溃问题，这对使用 infiniai 提供商的用户至关重要。
*   **Ollama 兼容性优化**：PR [#744](https://github.com/nullclaw/nullclaw/pull/744) 已合并，规范化了 Ollama 调度工具的别名识别，解决了工具调用时的命名不一致问题。

目前仍有 **4 个功能性 PR 处于待合并状态**，展示了项目下一阶段的发展方向：
*   **CI 安全与构建**：PR [#798](https://github.com/nullclaw/nullclaw/pull/798) 提出锁定 CI Action 版本以增强供应链安全；PR [#796](https://github.com/nullclaw/nullclaw/pull/796) 引入了 Nix flake 构建工作流。
*   **核心功能扩展**：PR [#783](https://github.com/nullclaw/nullclaw/pull/783) 正在重构 Cron 子智能体引擎，增加了历史记录与安全加固；PR [#782](https://github.com/nullclaw/nullclaw/pull/782) 为 Telegram 机器人添加了交互式技能菜单。

## 4. 社区热点
今日虽无评论数极高的议题，但以下内容反映了用户的核心关注点：
*   **Issue [#800](https://github.com/nullclaw/nullclaw/issues/800)**：用户报告最新的 `v2026.4.9` 版本强制 HTTPS 端点导致 Otel 可观测性链路中断。这直接影响了生产环境的监控能力，是今日最紧急的反馈。
*   **Issue [#799](https://github.com/nullclaw/nullclaw/issues/799)**：Docker 沙箱后端的初始化问题导致卷挂载失败。这影响了在容器化环境中使用沙箱隔离功能的用户，涉及底层执行逻辑的健壮性。

## 5. Bug 与稳定性
今日报告的 Bug 集中在最新版本的功能变更与特定后端初始化上，按严重程度排列如下：

*   **🔴 严重 - 破坏性变更**
    *   **Issue [#800](https://github.com/nullclaw/nullclaw/issues/800)**：`v2026.4.9` 引入的 HTTPS 约束导致非 TLS 的 Otel 内部通信失败，导致服务不可用。
    *   **Issue [#799](https://github.com/nullclaw/nullclaw/issues/799)**：Docker 沙箱后端因未初始化挂载参数，导致命令执行失败。目前尚无对应 Fix PR。

*   **🟡 中等 - 数据持久化**
    *   **Issue [#797](https://github.com/nullclaw/nullclaw/issues/797)**：SQLite 后端下，Agent 对话成功但历史记录为空。影响用户回溯上下文，但不妨碍即时交互。

*   **✅ 已修复**
    *   **PR [#781](https://github.com/nullclaw/nullclaw/pull/781)**：针对特定模型 JSON 解析导致的崩溃已修复并合并。

## 6. 功能请求与路线图信号
*   **Telegram 交互增强**：PR [#782](https://github.com/nullclaw/nullclaw/pull/782) 暗示项目正致力于提升 IM 平台（Telegram）的交互体验，不仅仅是消息推送，还包括交互式菜单，这表明 NullClaw 正向更易用的 ChatBot 形态演进。
*   **定时任务与自动化**：PR [#783](https://github.com/nullclaw/nullclaw/pull/783) 提出的 Cron 子智能体引擎显示项目在向"自主代理"方向发力，支持定时任务、重试机制及历史记录，是迈向 Agent 自动化的重要一步。
*   **基础设施标准化**：PR [#796](https://github.com/nullclaw/nullclaw/pull/796) (Nix) 和 [#798](https://github.com/nullclaw/nullclaw/pull/798) (CI Hardening) 表明项目正在完善工程化基建，为更多贡献者参与和更稳定的发布流程做准备。

## 7. 用户反馈摘要
从 Issues 描述中可以看出：
*   **部署环境多样化**：用户广泛使用 Podman 和 Docker 进行部署，且常在容器环境中运行 Otel 监控和沙箱隔离，对网络配置和存储挂载的细节要求较高。
*   **对版本升级敏感**：用户能够迅速发现小版本迭代（如 v2026.4.9）引入的破坏性变更（如 HTTPS 强制约束），说明生产环境对该项目稳定性关注度极高。
*   **数据库后端依赖**：有用户依赖 SQLite 作为记忆后端，该功能的稳定性对单机/轻量级部署场景至关重要。

## 8. 待处理积压
*   **Issue [#800](https://github.com/nullclaw/nullclaw/issues/800) & [#799](https://github.com/nullclaw/nullclaw/issues/799)**：这两个是新产生的阻塞性问题，涉及核心网络配置和沙箱执行，建议维护者优先排查并回滚或修复相关 Commit。
*   **Issue [#797](https://github.com/nullclaw/nullclaw/issues/797)**：SQLite 历史记录问题需要验证是否为通用 Bug，影响用户信任度。
*   **PR [#783](https://github.com/nullclaw/nullclaw/pull/783) & [#782](https://github.com/nullclaw/nullclaw/pull/782)**：这两个大型功能 PR 尚处于 Open 状态，建议社区进行充分的代码审查以尽早合入主分支。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-11)

## 1. 今日速览
IronClaw 今日迎来了重要的版本里程碑 **v0.25.0** 正式发布，项目活跃度显著提升，过去 24 小时内 PR 更新高达 50 条（其中 43 条已合并/关闭），显示出团队正在高频推进功能迭代与缺陷修复。尽管发布了新版本，但 QA 团队在 Staging 环境进行了大规模“Bug Bash”，暴露出 V2 引擎与多渠道集成中存在的稳定性问题，导致今日新增/活跃 Issue 达 38 条。总体来看，项目处于“功能扩展与架构重构并行，但稳定性亟待加固”的阶段。

## 2. 版本发布
**新版本：[ironclaw-v0.25.0](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.25.0)**

本次更新包含重要的功能增强与架构调整：
- **核心功能**：
  - 引入 **生产级编程工具**、文件历史记录及技能系统，标志着 IronClaw 在代码生成与上下文记忆能力上的重大升级 ([PR #2025](https://github.com/nearai/ironclaw/pull/2025))。
  - 新增 **可扩展部署配置文件**，支持通过 `IRONCLAW_PROFILE` 环境变量进行环境定制 ([PR #2203](https://github.com/nearai/ironclaw/pull/2203))。
- **破坏性变更**：
  - 根据 [PR #2075](https://github.com/nearai/ironclaw/pull/2075) 的发布说明，`ironclaw_common` (0.1.0 -> 0.2.0) 和 `ironclaw` (0.24.0 -> 0.25.0) 均包含 API 级别的破坏性变更。开发者升级时需注意 `ironclaw_common` 中枚举变体判别式的变化。

## 3. 项目进展
今日项目进展主要集中在发布流程疏通、CI 修复以及关键 Bug 的紧急回滚处理：

- **发布障碍清除**：为了确保 v0.25.0 顺利发布，团队合并了多个 CI 修复 PR，包括修正 Tag 过滤器逻辑 ([PR #2306](https://github.com/nearai/ironclaw/pull/2306)) 和修复发布配置 ([PR #2305](https://github.com/nearai/ironclaw/pull/2305))。
- **紧急回滚与修复**：团队处理了 Telegram UTF-16 消息分割与 DB Migration 相关的冲突，为确保 Staging 环境稳定，先回滚了部分主分支提交，随后重新应用修复 ([PR #2297](https://github.com/nearai/ironclaw/pull/2297), [PR #2303](https://github.com/nearai/ironclaw/pull/2303))。
- **支付演示集成**：合并了 Abound 演示的修复 PR，移除了汇款审批流程，引入了可直接返回 JSON 的 `terminal_tools`，优化了支付意图分析流程 ([PR #2241](https://github.com/nearai/ironclaw/pull/2241))。
- **依赖与构建**：更新了 WASM 制品校验和及版本固定 URL，确保扩展分发的正确性 ([PR #2308](https://github.com/nearai/ironclaw/pull/2308))。

## 4. 社区热点
今日讨论最活跃的话题集中在 **架构简化** 与 **扩展模型重构**：

1.  **架构简化提案** ([Issue #2192](https://github.com/nearai/ironclaw/issues/2192))：作者 @serrrfirat 提出将现有 7 个顶层概念（Tools, Channels, Skills 等）精简为 3 个，以降低开发者的认知负荷。该议题引发了关于“抽象层级合理性”的深入讨论，反映出社区对当前代码复杂度的担忧。
2.  **扩展模型统一** ([Issue #2246](https://github.com/nearai/ironclaw/issues/2246))：针对 MCP 服务器与 WASM 扩展表现不一致以及服务提供商去重问题，提出了统一扩展模型的方案，试图解决工具列表泛滥的问题。
3.  **安全性审查反馈** ([Issue #2252](https://github.com/nearai/ironclaw/issues/2252))：针对 PR #2025 的审查发现了一个高危问题——文件历史快照可能导致无界内存占用，进而引发 OOM/DoS 风险。该讨论表明团队对新引入的编码工具持严谨态度。

## 5. Bug 与稳定性
今日 QA 团队 进行了全面测试，暴露了大量 **高严重度** 问题，主要集中在 V2 引擎、Web UI 和并发处理上：

- **严重**：
    - **无限重试循环** ([Issue #2240](https://github.com/nearai/ironclaw/issues/2240))：Agent 在工具调用失败时会无限制重试（高达 50 次），缺乏去重机制，导致资源浪费和用户体验极差。
    - **OOM 崩溃** ([Issue #2276](https://github.com/nearai/ironclaw/issues/2276))：Orchestrator 在处理大型 Payload 时返回 HTTP 413 错误，导致崩溃。
- **高**：
    - **并发阻塞** ([Issue #2231](https://github.com/nearai/ironclaw/issues/2231))：多聊天线程无法并行运行，请求在队列中阻塞。
    - **状态丢失** ([Issue #2285](https://github.com/nearai/ironclaw/issues/2285))：页面刷新后聊天消息消失，但后台仍在处理，严重破坏用户信任。
    - **工具路由错误** ([Issue #2287](https://github.com/nearai/ironclaw/issues/2287))：Bot 在处理发票时错误调用了 `convertkit.com/subscribe` API，显示出工具选择逻辑存在幻觉。
    - **OAuth 阻塞** ([Issue #2229](https://github.com/nearai/ironclaw/issues/2229))：Google Sheets OAuth 流程因 `invalid_request` 错误无法完成。
- **中**：
    - **Telegram 安装失败** ([Issue #2233](https://github.com/nearai/ironclaw/issues/2233))：WASM 制品缺失导致安装失败。
    - **Web UI 文件上传缺失** ([Issue #2283](https://github.com/nearai/ironclaw/issues/2283))：Web 端目前无法向 Bot 发送文件。

## 6. 功能请求与路线图信号
- **Headless/服务端部署支持** ([Issue #2307](https://github.com/nearai/ironclaw/issues/2307))：请求支持公开的 Generative Language API，以便在没有浏览器 OAuth 的服务器环境中运行 Gemini 模型。这反映了用户将 IronClaw 集成到后端服务中的强烈需求。
- **V2 引擎技能生命周期** ([Issue #2250](https://github.com/nearai/ironclaw/issues/2250))：提出了“工具感知的技能生命周期”概念，包括适应、退役和重新评估。这表明 V2 引擎将更加智能化，能够根据工具变化自动调整技能。
- **工具调用流式传输** ([Issue #2274](https://github.com/nearai/ironclaw/issues/2274))：希望在 Responses API 中流式传输工具调用状态，以提升用户对 Agent 行为的可观测性。

## 7. 用户反馈摘要
- **Bot 行为不可控**：用户反馈 Bot 会覆盖用户指令 ([Issue #2282](https://github.com/nearai/ironclaw/issues/2282)) 或在不满足条件时擅自执行任务 ([Issue #2286](https://github.com/nearai/ironclaw/issues/2286))，甚至向 Telegram 发送未经请求的消息 ([Issue #2280](https://github.com/nearai/ironclaw/issues/2280))。
- **审批逻辑误判**：当用户仅回复 "yes" 时，Bot 错误地将其视为审批通过，即使当时并无待审批项目 ([Issue #2248](https://github.com/nearai/ironclaw/issues/2248))。
- **配置体验割裂**：用户在 CLI 配置了 Memory 和 Tools，但在 Telegram 端无法访问 ([Issue #2259](https://github.com/nearai/ironclaw/issues/2259))，反映出多端同步或权限配置的痛点。

## 8. 待处理积压
- **阿里云编码计划支持** ([PR #1446](https://github.com/nearai/ironclaw/pull/1446))：该大型功能 PR 自 3 月 20 日创建以来尚未合并，需关注其对 LLM Provider 架构的影响。
- **Routines UX 编辑功能** ([Issue #1325](https://github.com/nearai/ironclaw/issues/1325))：长期未解决的用户体验问题，Web 端缺乏对 Routines 的可视化创建/编辑能力。
- **V2 Engine Cron 调度失效** ([Issue #1944](https://github.com/nearai/ironclaw/issues/1944))：虽然已关闭，但作为曾导致核心调度功能完全失效的 Bug，需确认是否在 v0.25.0 中彻底修复。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-11)

## 1. 今日速览
LobsterAI 今日保持高频开发态势，过去24小时内 PR 更新达 16 条，其中 8 条已合并关闭，显示项目处于活跃迭代期。重点投入在底层架构重构（移除旧引擎）与构建稳定性修复（Windows 打包、依赖管理）。然而，社区反馈的严重问题显著增加，多名用户报告客户端崩溃、模型配置失败及文件上传识别异常，稳定性面临挑战。开发团队正积极修复网关启动阻塞问题，并推进新手引导与系统通知等体验优化功能。

## 2. 版本发布
过去24小时无新版本发布。

## 3. 项目进展
今日共有 8 个 PR 合并，重点集中在架构重构与构建修复，显著提升了代码健壮性：

*   **架构重构与兼容性修复**：[PR #1611](https://github.com/netease-youdao/LobsterAI/pull/1611) 移除了旧的 `yd-cowork` 引擎链路，统一收拢至 `openclaw`，并修复了网关配置不兼容导致的启动循环问题，极大降低了维护成本。
*   **P0 级网关启动修复**：[PR #1626](https://github.com/netease-youdao/LobsterAI/pull/1611)（待合并）已提交修复方案，针对 OpenClaw 新版本配置字段校验变严格导致的网关启动失败问题进行了适配，解决了所有用户无法启动 App 的阻塞风险。
*   **构建系统大修**：连续合并 [PR #1623](https://github.com/netease-youdao/LobsterAI/pull/1623)、[PR #1624](https://github.com/netease-youdao/LobsterAI/pull/1624)、[PR #1625](https://github.com/netease-youdao/LobsterAI/pull/1625)，彻底解决了 Windows 平台 Node 24/npm v11 的兼容性问题，并移除了重复的 SDK 依赖，将安装包体积缩减约 226MB。
*   **功能增强**：[PR #1610](https://github.com/netease-youdao/LobsterAI/pull/1610) 新增了 OpenClaw 会话保持时长配置，默认延长至 30 天，优化了多时区下的定时任务执行。

## 4. 社区热点
今日社区讨论主要集中在应用稳定性与功能性 Bug 上：

*   **[Issue #1627](https://github.com/netease-youdao/LobsterAI/issues/1627) - 客户端执行复杂任务崩溃**：用户反馈执行稍微复杂的任务时客户端直接崩溃，日志显示与 OpenClaw 的 WebSocket 通信有关。作为 P0 级严重问题，目前尚无官方回复，引发关注。
*   **[Issue #1622](https://github.com/netease-youdao/LobsterAI/issues/1622) - 无法添加自定义模型**：用户反馈添加自定义模型后测试失败，阻碍了用户接入私有模型的核心场景。
*   **[Issue #1614](https://github.com/netease-youdao/LobsterAI/issues/1614) - 集成 Hermes Agent 引擎**：社区提议引入新的 AI 引擎 `hermes-agent`，显示出用户对多样化后端引擎的诉求。

## 5. Bug 与稳定性
今日报告的 Bug 较为严重，且多与近期架构调整有关：

*   **严重 [P0] - 网关无法启动与弹窗闪烁**：
    *   问题：[PR #1626](https://github.com/netease-youdao/LobsterAI/pull/1626) 描述了升级后 100% 复现的网关启动失败问题。
    *   状态：**已有修复 PR**，待合并。
*   **严重 - 客户端崩溃**：
    *   问题：[Issue #1627](https://github.com/netease-youdao/LobsterAI/issues/1627) 报告复杂任务导致客户端崩溃。
    *   状态：**待确认/修复**。
*   **严重 - 模型功能异常**：
    *   问题：[Issue #1566](https://github.com/netease-youdao/LobsterAI/issues/1566) 无论输入什么均回复相同内容；[Issue #1622](https://github.com/netease-youdao/LobsterAI/issues/1622) 自定义模型添加失败。
    *   状态：**待确认**，疑似新版本引入的回归。
*   **一般 - 前端状态同步**：
    *   问题：[Issue #1617](https://github.com/netease-youdao/LobsterAI/issues/1617) 删除技能后 UI 未刷新。
    *   状态：**待确认**。

## 6. 功能请求与路线图信号
*   **系统通知功能（高优先级）**：
    *   需求：[Issue #1620](https://github.com/netease-youdao/LobsterAI/issues/1620) 请求定时任务完成后推送系统通知。
    *   进展：[PR #1621](https://github.com/netease-youdao/LobsterAI/pull/1621) 已提交实现代码，支持 macOS/Windows/Linux 三端，预计近期合入。
*   **新手引导优化**：
    *   进展：[PR #1577](https://github.com/netease-youdao/LobsterAI/pull/1577) 正在开发基于 driver.js 的首次启动引导功能，旨在降低新用户上手门槛，目前处于活跃开发状态。
*   **UI/UX 重构**：
    *   进展：[PR #1628](https://github.com/netease-youdao/LobsterAI/pull/1628) 重构了模型选择器，新增供应商图标与视觉优化，提升专业度。

## 7. 用户反馈摘要
*   **痛点：稳定性倒退**：多位用户反馈新版本（v2026.4.3）存在严重的功能性阻塞，如文件上传后模型无感知（[Issue #1561](https://github.com/netease-youdao/LobsterAI/issues/1561)）、模型回复死循环（[Issue #1566](https://github.com/netease-youdao/LobsterAI/issues/1566)），表明近期架构重构可能引入了回归缺陷。
*   **痛点：构建与安装**：Windows 构建失败和包体积过大问题在社区反馈强烈，今日的系列修复 PR 直接回应了这一痛点。
*   **场景：自动化与通知**：用户希望将 LobsterAI 作为后台自动化工具使用，因此对定时任务完成后的系统级通知有强烈需求。

## 8. 待处理积压
以下长期未处理的 Issue/PR 需维护者关注：

*   **[PR #5](https://github.com/netease-youdao/LobsterAI/pull/5) - ESLint 规则配置**：自 2 月提交以来处于 Stale 状态，发现 269 个 Lint 问题。建议尽快合以提升代码规范。
*   **[PR #367](https://github.com/netease-youdao/LobsterAI/pull/367) - MCP JSON 导入修复**：自 3 月提交，修复了 MCP 配置导入问题，目前处于 Stale 状态，可能影响外部工具集成体验。
*   **[PR #374](https://github.com/netease-youdao/LobsterAI/pull/374) - IM 平台超时处理**：优化了 IM 消息处理机制，防止长任务导致超时，对机器人场景至关重要，亟待审查。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-04-11)

## 1. 今日速览
项目今日整体活跃度处于低位，社区互动趋于静默。过去 24 小时内未监测到新的 Issue 提交或版本发布，仅有一个针对配置逻辑修复的 Pull Request 提交。虽然代码提交量不大，但提交内容聚焦于核心初始化逻辑的修正，显示出项目正在精细化处理配置层面的边缘情况。整体来看，项目处于平稳维护期。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日无已合并或已关闭的 Pull Request。

项目当前有 **1 个待合并的 PR**，具体进展如下：
- **[OPEN] fix(heartbeat): honor top-level heartbeat.enabled=false setting** ([PR #276](https://github.com/TinyAGI/tinyclaw/pull/276))
  - **内容**：修复了 `settings.json` 中顶层 `heartbeat.enabled` 配置项被忽略的问题。原逻辑中，心跳机制仅在 `AgentConfig` 级别生效，导致即使顶层设置为 `false`，`packages/main/src/index.ts` 中的 `startHeartbeat()` 仍会被无条件调用。
  - **意义**：该修复完善了配置系统的优先级逻辑，确保了用户对心跳功能的全局控制权，属于重要的体验修正。

## 4. 社区热点
过去 24 小时内无活跃的 Issues 或评论互动。社区讨论热度为 0。

## 5. Bug 与稳定性
今日监测到 **1 个** 通过 PR 提交修复的 Bug，暂无新的 Bug 报告：
- **[中等] 心跳全局配置失效**
  - **描述**：用户在 `settings.json` 顶层设置 `heartbeat.enabled=false` 时，系统未能正确读取并生效该配置，导致心跳进程依然启动。此问题源于 `packages/main/src/index.ts:272` 处缺乏对顶层配置的判断。
  - **状态**：已有修复提交 [PR #276](https://github.com/TinyAGI/tinyclaw/pull/276)，待审核合并。

## 6. 功能请求与路线图信号
本日未监测到新的功能请求或路线图相关讨论。

## 7. 用户反馈摘要
由于过去 24 小时无 Issue 更新及 PR 评论，暂无用户反馈摘要。

## 8. 待处理积压
当前积压工作量较低，主要关注点如下：
- **Pull Request**: [PR #276](https://github.com/TinyAGI/tinyclaw/pull/276) 仍处于 OPEN 状态。建议维护者优先审查该 PR，因其涉及核心初始化流程中的配置读取逻辑，修正后有助于提升配置管理的健壮性。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-11)

## 1. 今日速览
Moltis 项目今日迎来了高强度的维护与迭代，呈现出极高的开发活跃度。过去24小时内，项目处理了 **16 条 PR**（合并/关闭 12 条）和 **11 条 Issue**（关闭 7 条），并发布了新版本 `20260410.01`。此次更新重点修复了 Hook 系统的核心逻辑缺陷，并显著增强了 Discord 和 Telegram 渠道的多媒体处理能力。项目整体健康度极佳，维护者对社区反馈响应迅速，核心功能稳定性得到进一步提升。

## 2. 版本发布
- **版本号**: `20260410.01`
- **更新概要**: 此次版本是一次重要的修复与功能增强更新，主要集中在多渠道适配、Hook 机制修复以及配置加载逻辑的修正。
- **主要变更**:
    - **渠道增强**: Discord 渠道现支持接收语音和图片附件；修复了 Telegram 语音消息回退逻辑，避免将占位符发送给 LLM。
    - **Hook 修复**: 修正了 `MessageReceived` 被误标记为只读的问题，现已支持 Block/ModifyPayload；修复了 `ToolResultPersist` 事件未分发的问题。
    - **配置修复**: 修复了 Whisper STT 忽略 `model` 和 `language` 配置的问题；修正了 MCP OAuth 在 localhost 环境下的重定向 URI 协议错误。
    - **逻辑优化**: 修复了 Auto-continue 逻辑可能覆盖长回复的问题；优化了 `dcg-guard` 在 systemd 环境下的 PATH 检测。

## 3. 项目进展
今日共有 **12 个 PR** 成功合并或关闭，项目在稳定性和功能完整性上迈出坚实一步：

- **多媒体处理能力增强**: PR #649 实现了 Discord 语音和图片附件的入站处理，补齐了与其他渠道的功能差距；PR #648 修复了 Telegram 语音转录失败时的处理逻辑。
- **Hook 机制核心修复**: PR #651 解决了 `MessageReceived` 钩子无法阻断或修改消息的问题；PR #647 补全了 `ToolResultPersist` 钩子的分发逻辑，使其真正可用。
- **模型与工具链修复**: PR #643 修复了 Whisper STT 配置被忽略的 Bug；PR #650 修复了 Z.AI 模型的工具调用解析错误。
- **安全与合规**: PR #636 修正了 OAuth 重定向 URI 协议问题，解决了部分客户端注册失败的情况。

## 4. 社区热点
今日社区关注点集中在 **Hook 扩展性** 和 **远程部署** 问题：

- **[Feature] Hook Payload 增强** ([Issue #640](https://github.com/moltis-org/moltis/issues/640)): 社区呼吁在 Hook 载荷中包含渠道/发送者元数据，以便开发者无需维护外部映射表即可实现基于来源的逻辑判断。目前已有 PR #645 正在处理此需求。
- **远程部署登录失败** ([Issue #646](https://github.com/moltis-org/moltis/issues/646)): 用户报告无法登录远程部署实例，这是一个可能阻塞生产环境使用的严重问题，目前尚未有修复 PR 提交，需重点关注。

## 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，稳定性显著提升：

- **已修复 (Critical/High)**:
    - **Whisper STT 配置失效** ([Issue #631](https://github.com/moltis-org/moltis/issues/631)): 配置文件中的模型和语言设置被硬编码覆盖，已在 PR #643 修复。
    - **Hook 逻辑失效** ([Issue #639](https://github.com/moltis-org/moltis/issues/639), [Issue #638](https://github.com/moltis-org/moltis/issues/638)): `MessageReceived` 无法阻断消息，`ToolResultPersist` 未被触发，均已修复。
    - **OAuth 注册失败** ([Issue #629](https://github.com/moltis-org/moltis/issues/629)): 使用 `https://localhost` 导致部分服务器拒绝，已修正为 `http`。
    - **Sandbox 安全绕过** ([Issue #626](https://github.com/moltis-org/moltis/issues/626)): `dcg-guard` 在特定环境下失效，已修复 PATH 解析逻辑。

- **待处理 (High)**:
    - **远程部署登录问题** ([Issue #646](https://github.com/moltis-org/moltis/issues/646)): 无法登录远程部署，尚在排查中。
    - **空语音转录占位符问题** ([Issue #632](https://github.com/moltis-org/moltis/issues/632)): 空转录文本被发送给 LLM 导致回复异常，Issue 状态仍为 Open，需确认是否已彻底解决。

## 6. 功能请求与路线图信号
- **确定性上下文压缩** ([PR #653](https://github.com/moltis-org/moltis/issues/653)): 提议用确定性算法替代 LLM 总结，以降低延迟和成本。这符合系统优化的长期方向，目前 PR 处于 Open 状态。
- **Hook 元数据扩展** ([PR #645](https://github.com/moltis-org/moltis/issues/645)): 响应 Issue #640，增加渠道来源信息。该功能将极大提升 Hook 的灵活性，预计将在近期合并。

## 7. 用户反馈摘要
- **痛点**: 用户在使用 Discord 和 Telegram 进行语音交互时遇到障碍（语音无法识别或报错），配置文件不生效（Whisper）导致困惑。
- **场景**: 用户正在尝试通过 Hook 机制实现复杂的权限控制和消息路由，目前的只读限制和元数据缺失限制了高级用法的实现。
- **满意度**: 尽管存在 Bug，但维护者迅速关闭了大部分报告的 Issue 并提供修复，社区对响应速度表示认可。

## 8. 待处理积压
- **关键 Bug**: [Issue #646](https://github.com/moltis-org/moltis/issues/646) (远程部署登录失败) 需要立即关注，可能影响新用户部署体验。
- **大型 PRs**: [PR #653](https://github.com/moltis-org/moltis/issues/653) (确定性压缩重构) 和 [PR #645](https://github.com/moltis-org/moltis/issues/645) (Hook 元数据) 是两个重要的功能性 PR，建议维护者优先进行 Code Review 以尽快合并。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 (2026-04-10)

## 1. 今日速览
CoPaw 项目今日保持高度活跃，共计处理 17 个 PR，社区贡献热情显著提升，涌现出多位首次贡献者。核心进展方面，**会话级 Token 使用统计功能已成功合入**，为监控与成本分析打下基础；Windows 桌面端的稳定性修复与 QQ/钉钉等渠道的体验优化成为今日重点。项目整体处于功能细化与稳定性提升阶段，对边缘场景的处理能力进一步增强。

## 2. 版本发布
*今日无新版本发布记录。*

## 3. 项目进展
今日共有 **6 个 PR 合并/关闭**，主要集中在功能增强与代码维护：

*   **[Feature] 会话级 Token 统计**：PR #3214 已合并。引入了 `TokenRecordingModelWrapper` 和会话上下文追踪机制，支持在流式响应中注入 Token 数据，完善了资源消耗监控体系。
    *   链接: [agentscope-ai/CoPaw PR #3214](https://github.com/agentscope-ai/CoPaw/pull/3214)
*   **[Refactor] 代码清理**：PR #3243 移除了冗余的静态文件路由处理器，优化了 Web 服务结构。
    *   链接: [agentscope-ai/CoPaw PR #3243](https://github.com/agentscope-ai/CoPaw/pull/3243)
*   **[Chore/Docs] 视觉资源更新**：合并了 PR #3253, #3249, #3240 等多个 PR，更新了官网 Demo 图、Logo 及欢迎动画，提升了品牌形象与文档展示效果。

## 4. 社区热点
今日讨论与开发重心集中在以下领域：

*   **多智能体架构重构 (PR #3215)**：提出了针对 Tools、Skills 和 CLI 的多智能体协作重构方案，预计将对项目核心架构产生较大影响，目前正在开放讨论中。
    *   链接: [agentscope-ai/CoPaw PR #3215](https://github.com/agentscope-ai/CoPaw/pull/3215)
*   **首次贡献者集中涌现**：今日有多达 5 位首次贡献者提交 PR，涵盖 Token 统计、Windows 安装器、QQ 频道修复等模块，显示出项目对新开发者的友好度较高，社区活力强劲。

## 5. Bug 与稳定性
今日修复及报告了几个影响用户体验的关键 Bug：

*   **[High] Windows 桌面端白屏/无响应 (PR #3119, #3120)**
    *   **问题**：部分 Windows 设备因缺少 WebView2 运行时导致白屏。
    *   **进展**：#3119 增加了快速报错机制；#3120 进一步提议在 NSIS 安装器中自动安装 WebView2，从源头解决环境缺失问题。
    *   链接: [PR #3119](https://github.com/agentscope-ai/CoPaw/pull/3119) | [PR #3120](https://github.com/agentscope-ai/CoPaw/pull/3120)
*   **[Medium] Runner 持久化阻塞 (PR #3252)**
    *   **问题**：工具返回超大结果（如 3MB+ 日志）导致 Session 保存失败或卡顿。
    *   **进展**：提出在持久化前截断过大的 `tool_result`，防止存储溢出。
    *   链接: [agentscope-ai/CoPaw PR #3252](https://github.com/agentscope-ai/CoPaw/pull/3252)
*   **[Medium] QQ 频道纯媒体消息处理缺陷 (PR #3242)**
    *   **问题**：用户发送纯图片/文件时，系统无限等待文本消息导致无响应。
    *   **进展**：修复了缓冲逻辑，支持立即处理纯媒体消息。
    *   链接: [agentscope-ai/CoPaw PR #3242](https://github.com/agentscope-ai/CoPaw/pull/3242)

## 6. 功能请求与路线图信号
*   **UI 交互增强 (PR #3257)**：计划将 Web Console 中的工具确认命令转化为可视化按钮，降低用户操作门槛，提升安全交互体验。
    *   链接: [agentscope-ai/CoPaw PR #3257](https://github.com/agentscope-ai/CoPaw/pull/3257)
*   **定时任务隔离 (PR #3255)**：建议 Cron 任务每次运行使用全新的 Session，同时保持输出投递到配置的目标会话，以隔离聊天状态。
    *   链接: [agentscope-ai/CoPaw PR #3255](https://github.com/agentscope-ai/CoPaw/pull/3255)
*   **钉钉 SDK 迁移 (PR #3236)**：正在将手动 HTTP 调用迁移至官方 SDK，并增加表情反馈功能，预示着钉钉渠道的稳定性和功能支持将得到加强。
    *   链接: [agentscope-ai/CoPaw PR #3236](https://github.com/agentscope-ai/CoPaw/pull/3236)

## 7. 用户反馈摘要
*   **桌面端体验痛点**：部分 Windows 用户在精简系统或旧版本上遭遇白屏，且无明确错误提示，反馈显示对环境依赖的检测与自动修复需求迫切。
*   **即时反馈需求**：QQ 等渠道用户反馈在处理耗时任务时缺乏“正在输入”等状态提示，导致用户不确定是否触发成功，引出了对即时确认消息功能的开发（PR #3246）。
*   **大文件/日志处理**：部分用户使用日志类工具时触发了性能瓶颈，反映出系统在处理超长上下文或结果时的截断与压缩策略尚需优化。

## 8. 待处理积压
*   **架构重构 (PR #3215)**：涉及多智能体协作的重大重构，目前处于 Open 状态，建议维护者尽快进行架构评审以确保方向一致性。
*   **关键稳定性修复 (PR #3119, #3120)**：Windows WebView2 相关修复 PR 对桌面端用户至关重要，建议优先合并以提升安装成功率。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 (2026-04-11)

**数据来源周期**：过去 24 小时
**项目地址**：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. 今日速览
EasyClaw 项目今日整体呈现“低交互、稳发布”的态势。过去 24 小时内，项目未产生新的 Issue 或 Pull Request，社区互动暂时处于静默期。尽管代码协作层面无显性活动，但维护者发布了 `v1.7.10` 版本，重点解决了 macOS 平台的部署痛点。项目整体健康度保持稳定，处于维护迭代阶段，暂无紧急风险。

### 2. 版本发布
项目今日发布了新版本 **v1.7.10 (RivonClaw v1.7.10)**。

*   **更新重点**：本次更新主要聚焦于 **macOS 平台的安装体验优化**。
*   **核心内容**：
    *   针对 macOS 用户常见的 **"'RivonClaw' is damaged and can't be opened"** 错误提供了官方解释与解决方案。
    *   明确指出该问题源于 macOS Gatekeeper 安全机制对未签名应用的拦截，而非文件本身的损坏。
    *   提供了修复指引，引导用户通过终端（Terminal）执行命令移除隔离属性。
*   **影响评估**：此更新虽未涉及核心功能代码的大幅变更，但显著降低了 macOS 用户的入门门槛，属于体验修复类的关键更新。
*   **链接**：[v1.7.10 Release Notes](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.10)

### 3. 项目进展
*   **代码合并**：今日无已合并或关闭的 PR。
*   **进展评估**：项目代码库在过去 24 小时内未发生实质性变更。当前的迭代动力主要来源于维护者的定向修复与发布策略，而非社区驱动的代码贡献。

### 4. 社区热点
*   **讨论热度**：过去 24 小时内无新开 Issue 或评论产生。
*   **分析**：社区活跃度暂时处于低谷期，缺乏显性的讨论热点。这可能意味着当前版本在核心功能上满足了现有用户需求，或项目正处于用户积累期。建议关注后续几日的 Issue 走势以判断是否为周期性波动。

### 5. Bug 与稳定性
*   **新增 Bug**：今日无新增 Bug 报告。
*   **已知问题修复**：虽然未通过 Issue 报告，但 v1.7.10 版本说明中隐式确认了一个高频“软 Bug”——**macOS 应用签名缺失导致的启动失败**。
    *   **严重程度**：中（阻断新用户首次使用）。
    *   **状态**：已通过文档/Release 说明提供规避方案，无需代码回滚即可解决。

### 6. 功能请求与路线图信号
*   **新功能需求**：今日无新增 Feature Request。
*   **路线图判断**：由于缺乏社区提出的 Issue，暂无法从数据层面推断下一阶段的路线图。结合本次发布针对 macOS 的说明文档补全，推测近期重点在于提升跨平台兼容性与安装成功率，而非激进的功能扩展。

### 7. 用户反馈摘要
*   **痛点提取**：虽然今日无互动数据，但从 v1.7.10 的发布说明可反推用户画像与痛点——**macOS 用户对“应用已损坏”的报错感到困惑**。
*   **解决方案**：维护者已意识到该问题并提供了标准的 `xattr` 终端修复方案指引。这表明项目在 macOS 上的分发可能受限于签名证书成本，采用了提供手动修复指引的替代方案，用户满意度将取决于该文档的清晰度。

### 8. 待处理积压
*   **积压情况**：过去 24 小时无新增或活跃的积压项。
*   **建议**：目前未见明显的长期未响应 Issue。建议维护者在静默期主动排查 `good first issue` 或过时的文档，为潜在的社区贡献者提供切入点。

---
*分析师注：今日的数据主要受 Release 驱动，社区互动暂缺。建议关注 Release 发布后的 24-48 小时内是否有用户反馈回流。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*