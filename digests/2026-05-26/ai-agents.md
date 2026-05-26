# OpenClaw 生态日报 2026-05-26

> Issues: 483 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-26 03:51 UTC

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

# OpenClaw 项目动态日报 (2026-05-26)

## 1. 今日速览
OpenClaw 项目今日保持极高的开发活跃度，Issue 闭环率极高（关闭 289 vs 新增/活跃 194），显示出维护团队在处理社区反馈方面的高效执行力。PR 活跃度同样强劲，共有 222 个 PR 被合并或关闭，主要聚焦于底层架构重构与运行时性能优化。虽然无新版本 Release 发布，但社区对架构变更（如移除 Pi 运行时依赖）的讨论热烈。整体项目健康度良好，但 Windows 平台的稳定性问题与内存管理隐患需引起重视。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 **222 个 PR 被合并或关闭**，重点推进了以下核心功能与重构：

*   **架构重构：** 最引人注目的是 [PR #85341](https://github.com/openclaw/openclaw/pull/85341)，该 PR 旨在移除旧的 Pi-shaped agent/runtime 架构，将其功能内化为 OpenClaw 核心代码。这将消除对外部 Pi 依赖，统一 Agent 执行层。
*   **Copilot 运行时支持：** [PR #86155](https://github.com/openclaw/openclaw/pull/86155) 新增了对 GitHub Copilot agent runtime 的支持，扩展了底层模型/代理的兼容范围，标志着项目向多运行时生态迈进。
*   **安全与性能修复：**
    *   [PR #82596](https://github.com/openclaw/openclaw/pull/82596) 引入了 `exec denylist` 功能，填补了权限管控在“全允许”与“逐条审批”之间的空白。
    *   [PR #86251](https://github.com/openclaw/openclaw/pull/86251) 修复了 Bun 运行时的可选导入缺失问题。
    *   [PR #86748](https://github.com/openclaw/openclaw/pull/86748) 优化了插件策略查找性能，优先从内存快照读取。

## 4. 社区热点
今日讨论最活跃的议题集中在跨平台支持与底层运行时行为争议：

*   **跨平台客户端需求：** [Issue #75](https://github.com/openclaw/openclaw/issues/75) 依然是社区最关注的话题（评论 109 条，👍 77）。社区对 Linux 和 Windows 客户端的需求强烈，希望其能达到与 macOS 客户端同等的功能水平。
*   **工具调用架构争议：** [Issue #80319](https://github.com/openclaw/openclaw/issues/80319) 激起了关于 Codex-native tools 与 OpenClaw 动态工具对等的讨论，涉及底层 Mock 与实际运行时的差异，反映了社区对架构透明度的关注。
*   **隐私与安全漏洞：** [Issue #85240](https://github.com/openclaw/openclaw/issues/85240) 曾引发高度关注，该问题涉及 `relevant-memories` 在跨用户语义检索时的隐私泄露风险（P0 安全级别），目前已关闭，推测已修复。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的严重 Bug，尤其集中在 Windows 平台与资源管理上：

*   **P0/P1 级严重问题：**
    *   **Windows 事件循环阻塞：** [Issue #86599](https://github.com/openclaw/openclaw/issues/86599) 报告在 Windows Beta 版本上，本地模型调用会阻塞 Gateway 事件循环长达数分钟，导致系统假死。
    *   **文件句柄泄漏：** [Issue #86613](https://github.com/openclaw/openclaw/issues/86613) 指出 Gateway 在进行内存搜索时会打开数千个只读文件句柄且不释放，可能导致系统资源耗尽。
    *   **子代理状态丢失：** [Issue #44925](https://github.com/openclaw/openclaw/issues/44925) 仍处于 Open 状态，涉及子代理任务完成后结果静默丢失，无重试或通知机制。

*   **回归问题：**
    *   [Issue #86047](https://github.com/openclaw/openclaw/issues/86047) 报告升级到 2026.5.22 后，Codex app-server 出现审批卡顿和工具执行超时。

## 6. 功能请求与路线图信号
*   **权限管控精细化：** 随着 [PR #82596](https://github.com/openclaw/openclaw/pull/82596) 的提交，社区对 Agent 执行权限的精细化管理需求得到响应，这将是下一阶段提升 Agent 安全性的关键功能。
*   **多运行时生态：** [PR #86155](https://github.com/openclaw/openclaw/pull/86155) 对 Copilot 的支持表明，OpenClaw 正致力于成为兼容多种底层执行引擎的“超级运行时”或网关，而非局限于单一模型提供商。
*   **用户体验改进：** [Issue #18160](https://github.com/openclaw/openclaw/issues/18160) 提出了针对 Cron 任务的“直接执行模式”，以避免不必要的 LLM 调用开销，这符合社区对轻量化、低延迟自动化的诉求。

## 7. 用户反馈摘要
*   **痛点：** Windows 用户目前面临严重的稳定性问题（卡顿、高 CPU 占用）；配置迁移工具（如 `doctor --fix`）存在破坏现有配置的风险（[Issue #84038](https://github.com/openclaw/openclaw/issues/84038)），导致用户对升级产生顾虑。
*   **场景：** 大量用户通过 Telegram 频道与 Gateway 交互，对消息投递的可靠性（如消息静默丢失 [Issue #80520](https://github.com/openclaw/openclaw/issues/80520)）非常敏感。
*   **满意度：** 社区对 Issue 的响应速度表示认可（大量 Issue 被迅速关闭），但对于长期存在的架构性问题（如 Linux 客户端缺失）仍有不满。

## 8. 待处理积压
*   **长期关注 Issue：** [Issue #75](https://github.com/openclaw/openclaw/issues/75) (Linux/Windows Apps) 自 2026-01-01 创建以来一直保持高度活跃，建议维护团队将其纳入近期路线图予以回应。
*   **关键 Bug 修复：** [Issue #44925](https://github.com/openclaw/openclaw/issues/44925) (Subagent completion lost) 已标记为 `source-repro`，但仍未彻底解决，这是影响任务编排可靠性的核心问题，需持续跟进。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-05-26)

## 1. 生态全景
当前 AI 智能体开源生态正处于**架构重构与能力深水区**。核心项目（如 OpenClaw, NanoBot）正积极剥离旧架构（如移除 Pi 运行时），转向更统一的执行层与多运行时兼容。**多智能体协作**（Multi-Agent Orchestration）与**长期记忆体系**成为差异化竞争焦点，而**安全沙箱**与**权限细粒度控制**则是企业级落地的前置条件。生态整体面临模型 API 快速迭代带来的兼容性挑战，国产新模型（DeepSeek-V4）与头部模型（Claude Opus/Sonnet 新版）的适配已成为各项目争夺用户的第一战场。

## 2. 各项目活跃度对比

| 项目名称 | Issues 变动 | PRs 变动 | 版本发布 | 健康度评估 | 核心特征 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 活跃 194 / 关闭 289 | 合并/关闭 222 | 无 | ⭐⭐⭐⭐⭐<br>极高执行力 | 架构大重构，Issue 闭环率极高，Windows 稳定性存疑 |
| **CoPaw** | 更新 38 / 关闭 22 | 更新 45 / 合并 30 | **v1.1.9-beta.1** | ⭐⭐⭐⭐<br>快速迭代 | 引入 Tauri 2.x 与 Coding Mode，UI 实时性问题突出 |
| **IronClaw** | 更新活跃 | 更新 50 / 合并 10 | 无 (发布滞后) | ⭐⭐⭐<br>高风险 | Attested-signing 大栈推进，但版本发布严重滞后 (CVE 风险) |
| **Zeroclaw** | 更新 29 | 合并 16 | 无 | ⭐⭐⭐⭐<br>安全加固 | 修复严重 XSS 漏洞，DeepSeek/Gemini 兼容性攻坚 |
| **NanoBot** | 变动 5 | 合并 9 | 无 | ⭐⭐⭐⭐⭐<br>架构演进 | 引入跨实例消息总线，向多智能体网络演进 |
| **Hermes Agent**| 更新 50 | 更新 50 / 合并 2 | 无 | ⭐⭐<br>积压严重 | Docker 权限痛点，PR 审查积压 (48个待定)，社区活跃但交付受阻 |
| **LobsterAI** | 活跃 | 合并 9 | 无 | ⭐⭐⭐⭐<br>生态集成 | 深度集成 OpenClaw，修复 Token 空耗，聚焦记忆体系 |
| **Moltis** | 活跃 | 合并 5 | **v20260525.01** | ⭐⭐⭐⭐<br>架构突破 | 实现非阻塞 spawn_agent，解决子智能体调度痛点 |
| **PicoClaw** | 更新 17 | 合并 0 (8 Active) | **v0.2.9-nightly** | ⭐⭐⭐<br>适配阵痛 | 新模型配置滞后，流式输出与调试工具推进中 |
| **NanoClaw** | 更新 4 | 合并 3 | 无 | ⭐⭐⭐<br>稳定性修复 | 消息去重逻辑修复，Slack 集成深化 |
| **NullClaw** | 低 | 合并 1 | 无 | ⭐⭐⭐⭐<br>稳健 | 引入媒体转录网关，文档版本滞后 |
| **EasyClaw** | 无活跃 | 无活跃 | **v1.8.15** | ⭐⭐⭐⭐<br>交付稳健 | 静默发布客服场景增强版，聚焦生命周期管理 |
| **TinyClaw** | 无活动 | 无活动 | 无 | N/A | 休眠状态 |

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照系与基础设施**，OpenClaw 展现出了碾压级的开发活跃度（单日合并 222 PR）。

*   **优势**：极强的架构整合能力与执行力。通过移除 Pi 运行时依赖并内化为核心代码，OpenClaw 正试图构建一个**统一的 Agent 执行标准层**，这与其他项目（如 Zeroclaw, LobsterAI）主要做适配层形成了鲜明对比。
*   **技术路线差异**：不同于 Hermes Agent 或 NanoBot 侧重于多智能体通信协议，OpenClaw 当前更专注于**单机运行时的性能极限与权限控制**（如 exec denylist），试图解决 Agent 在本地执行层面的“操作系统化”问题。
*   **社区规模**：社区体量最大，但痛点也最集中——跨平台客户端缺失与 Windows 平台稳定性成为制约其普及的瓶颈，这是其他轻量化项目（如 NullClaw, PicoClaw）的机会所在。

## 4. 共同关注的技术方向

*   **国产大模型 DeepSeek-V4 的全面适配战**（NanoBot, Zeroclaw, Hermes Agent, PicoClaw）：
    *   **现象**：DeepSeek-V4 API 格式变动（特别是 reasoning_content 和 thinking mode）导致多个项目出现 P1 级故障。
    *   **诉求**：生态急需构建一套灵活的 Provider 抽象层，以应对模型厂商 API 的非标准演进，单纯依赖 OpenAI 兼容协议已不足以应对新模型特性。

*   **多智能体协作与异步编排**（NanoBot, Moltis, OpenClaw）：
    *   **现象**：NanoBot 实现跨实例消息总线，Moltis 解决 spawn_agent 阻塞问题。
    *   **诉求**：Agent 正从“对话者”转变为“调度者”，需要非阻塞的任务调度机制和跨实例通信能力。

*   **细粒度安全沙箱与权限治理**（OpenClaw, Zeroclaw, Moltis）：
    *   **现象**：OpenClaw 引入 exec denylist，Zeroclaw 修复 XSS 并讨论插件权限，Moltis 关注 Landlock 调试。
    *   **诉求**：随着 Agent 具备执行代码和文件操作能力，“全允许”模式已无法满足生产安全需求，社区迫切需要介于“禁用”与“放行”之间的精细化权限管控。

## 5. 差异化定位分析

*   **OpenClaw & Zeroclaw (底座型)**：旨在成为 Agent 的操作系统。OpenClaw 重构核心运行时，Zeroclaw 侧重 Web 端安全与 Canvas 交互。
*   **NanoBot & Moltis (编排型)**：侧重于任务拆解与多 Agent 协作。NanoBot 关注 Agent 间通信，Moltis 关注异步调度与工具路由精准度。
*   **CoPaw & LobsterAI (应用型)**：产品化程度最高。CoPaw 集成 IDE (Coding Mode) 和桌面端，LobsterAI 聚焦记忆管理与 OpenClaw 生态集成，更接近最终用户产品。
*   **PicoClaw & NullClaw (轻量型)**：专注于特定语言或边缘场景，强调资源占用低与部署灵活。

## 6. 社区热度与成熟度

*   **快速迭代期**：**OpenClaw, CoPaw, Zeroclaw**。处于功能大爆发阶段，PR 合并频繁，版本更新快，但也伴随较多 P0/P1 级 Bug（如 Windows 卡死、XSS 漏洞）。
*   **架构调整期**：**NanoBot, Moltis, IronClaw**。社区讨论深度较深，涉及底层协议和重构，Issue 质量较高，处于为下一阶段性能爆发蓄力的阶段。
*   **维护与修复期**：**Hermes Agent, NanoClaw, EasyClaw**。Hermes 遭遇维护瓶颈（积压严重），NanoClaw 和 EasyClaw 则处于稳步修复现有功能缺陷、打磨细节的阶段。

## 7. 值得关注的趋势信号

1.  **“长期记忆”成为下一阶段核心竞争力**：LobsterAI 用户强烈要求 Session 持久化与跨会话记忆，CoPaw 也在探索记忆去重。这表明简单的 RAG 已无法满足需求，用户需要 Agent 具备“人生轨迹”般的连续记忆能力。
2.  **桌面端技术栈的范式转移**：CoPaw 全面转向 **Tauri 2.x**，直击 Electron 资源占用高、启动慢的痛点。这预示着未来的 AI 助手客户端将更倾向于 Rust 原生或轻量级 Webview 方案，以换取更好的原生体验。
3.  **Agent 执行模式的“去 LLM 化”倾向**：OpenClaw 中用户请求 Cron 任务“直接执行模式”，Moltis 强调非阻塞调度。这反映出社区对 Agent 效率的追求——对于确定性任务，不再盲目调用 LLM，而是通过代码逻辑直接执行，降低成本与延迟。
4.  **供应链安全风险凸显**：IronClaw 的 crates.io 发布滞后导致下游用户暴露于 CVE 漏洞之下。这为整个生态敲响警钟：随着 Agent 框架深入系统底层，依赖库的版本管理与发布流程的规范性将直接决定项目的生产可用性。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-26)

## 1. 今日速览
NanoBot 项目今日保持高活跃度，共处理了 **18 个 PR 更新**与 **5 个 Issue 变动**，合并了 9 个 PR，代码提交活跃。核心进展集中在**架构重构**与**稳定性修复**上：备受关注的“大模型死循环”问题通过通用工具级护栏得到解决，DeepSeek-V4 兼容性与 PowerShell 流式输出渲染异常等关键 Bug 已修复。同时，社区正在积极推动多智能体协作、Dream 单阶段整合等深层架构演进，项目整体健康度良好，正从单一智能体工具向多智能体协作平台过渡。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 9 个 PR 合并/关闭，显著提升了系统的稳定性与模型兼容性，具体进展如下：

- **🛡️ 稳定性增强：通用循环检测与熔断**
  合并 [PR #3985](https://github.com/HKUDS/nanobot/pull/3985)，引入了工具级循环检测与速率限制护栏。解决了大模型反复调用同一工具无结果、短时间内疯狂重复调用等导致的资源浪费和卡死问题，大幅提升了复杂任务下的鲁棒性。

- **🔧 关键 Bug 修复**
  - **DeepSeek-V4 兼容性**：修复了 DeepSeek-V4 在多轮思考模式下因 `reasoning_content` 未回传导致的 API 报错，相关 Issue [#3469](https://github.com/HKUDS/nanobot/issues/3469) 已关闭。
  - **长期任务异常退出**：合并 [PR #3999](https://github.com/HKUDS/nanobot/pull/3999)，修复了 Agent 在执行 `sustained goal`（长期目标）时，因 LLM 输出文本响应而误判为“完成”并退出的严重逻辑缺陷。
  - **配置传递失效**：修复了 `maxConcurrentSubagents` 配置项未正确透传至 SubagentManager 的问题 ([PR #3978](https://github.com/HKUDS/nanobot/pull/3978))。

- **🚀 功能迭代与架构优化**
  - **应用体验统一**：合并 [PR #3991](https://github.com/HKUDS/nanobot/pull/3991)，将 CLI Apps 与 MCP 预设整合为统一的 Apps 体验，优化了搜索与过滤逻辑。
  - **Provider 支持**：新增 Step Plan (StepFun) Provider 支持 ([PR #3988](https://github.com/HKUDS/nanobot/pull/3988))，并修复了 OpenRouter/MiMo 模型的思考控制逻辑 ([PR #3867](https://github.com/HKUDS/nanobot/pull/3867))。
  - **文档更新**：扩充了密钥配置文档示例，并修正了贡献指南中 `ruff format` 的误导性说明 ([PR #3866](https://github.com/HKUDS/nanobot/pull/3866), [PR #3850](https://github.com/HKUDS/nanobot/pull/3850))。

## 4. 社区热点
今日社区关注点集中在**多智能体协作**与**语音能力扩展**：

- **跨实例消息总线**：[PR #3992](https://github.com/HKUDS/nanobot/pull/3992) 提出并实现了跨 Agent 实例的消息通信机制。这标志着 NanoBot 正在突破单实例限制，向多智能体协同网络演进，是架构层面的一大步。
- **语音转录扩展**：[Issue #4000](https://github.com/HKUDS/nanobot/issues/4000) 请求增加 StepFun 原生 ASR Provider，反映出用户对语音交互场景的强烈需求，希望摆脱对 OpenAI/Groq 接口的单一依赖。
- **Dream 架构重构**：[PR #3990](https://github.com/HKUDS/nanobot/pull/3990) 正在推进将 Dream 内存整理由两阶段重构为单阶段，旨在提升 Agent 自我进化的效率与稳定性，属于核心技术债清理。

## 5. Bug 与稳定性
今日修复了多个影响用户体验的 Bug，目前未发现未解决的高危新 Bug：

- **🔴 [已修复] DeepSeek-V4 API 报错**：在多轮思考场景下报错 `reasoning_content must be passed back`。([Issue #3469](https://github.com/HKUDS/nanobot/issues/3469))
- **🟠 [已修复] PowerShell 终端刷屏**：流式输出在 PowerShell 中异常换行，导致界面严重闪烁。([Issue #3995](https://github.com/HKUDS/nanobot/issues/3995))
- **🟠 [已修复] 长期目标意外终止**：Agent 执行长任务时过早退出，现已通过逻辑修正确保持续运行。([PR #3999](https://github.com/HKUDS/nanobot/pull/3999))
- **🟡 [待合并] 空响应处理缺陷**：针对 Kimi 2.6 等模型偶尔返回空内容导致 fallback 失效的问题，修复方案已提交 [PR #4002](https://github.com/HKUDS/nanobot/pull/4002)。

## 6. 功能请求与路线图信号
- **多智能体协作**：[PR #3992](https://github.com/HKUDS/nanobot/pull/3992) 的提出表明项目正朝向 "Agent-to-Agent Communication" 方向发展，这可能成为下一阶段的核心特性。
- **生态集成**：[PR #4005](https://github.com/HKUDS/nanobot/pull/4005) 提议支持 GitAgent Protocol，表明社区希望 NanoBot 能接入更广泛的 Agent 生态标准。
- **技能管理优化**：[PR #4003](https://github.com/HKUDS/nanobot/pull/4003) 引入了技能所有权标记，防止 Dream 误修改用户自定义技能，预示着自动化技能管理的精细化。

## 7. 用户反馈摘要
- **循环死结痛点**：用户反馈模型在使用 `grep`、`list_dir` 等工具时极易陷入死循环，消耗 Token 且无法产出结果。今日合并的护栏功能 ([PR #3985](https://github.com/HKUDS/nanobot/pull/3985)) 直接回应了这一痛点。
- **终端体验差**：PowerShell 用户对控制台输出渲染异常表示不满，认为严重干扰视线，该问题已在今日修复中体现。
- **语音接口单一**：用户希望接入更多非标准 API 的语音服务（如 StepFun），表明默认的 OpenAI 兼容接口已无法满足多样化部署需求。

## 8. 待处理积压
- **[PR #1443](https://github.com/HKUDS/nanobot/pull/1443) - Heartbeat Reasoning 解耦**：该 PR 创建于 3 月，更新活跃但至今未合并。建议维护者评估是否存在架构冲突或测试覆盖不足的情况。
- **[Issue #3958](https://github.com/HKUDS/nanobot/issues/3958) - Weather Skill 迁移**：建议将天气技能从内置转为示例。虽然是一个简单的重构请求，但长期 Open 状态可能意味着核心维护者精力集中在更复杂的架构调整上，建议社区贡献者认领处理。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-26)

## 1. 今日速览
Zeroclaw 项目今日保持极高的开发活跃度，过去 24 小时内共有 29 条 Issue 更新和 50 条 PR 更新。社区关注焦点集中在**大模型兼容性**与**安全性加固**两方面，DeepSeek-V4 和 Gemini 的 API 适配问题引发了高频讨论。核心开发团队今日合并了关键的安全修复 PR，修复了 Canvas 组件的 XSS 漏洞，同时多个涉及架构重构的大型 PR（如 TUI 和 Memory 策略）正在等待审查，项目正处于功能迭代与稳定性优化的关键阶段。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日项目共关闭/合并了 16 个 PR，主要集中在安全修复、错误处理和平台兼容性优化上。

*   **[Security] 修复 Canvas iframe XSS 漏洞**：PR [#6942](https://github.com/zeroclaw-labs/zeroclaw/pull/6942) 已合并。该修复移除了 Canvas iframe 中的 `allow-same-origin` 属性，防止了恶意脚本窃取 Token 的风险（对应 GHSA-f385-f6h2-3gqj），显著提升了 Web 端的安全性。
*   **[Bug] Shell 沙箱配置问题修复**：Issue [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) 已关闭，解决了默认 Shell 沙箱配置阻止 Python Skill 运行的问题，确认了对 v0.6.9 版本问题的修正。
*   **[Bug] Provider 错误信息优化**：Issue [#6889](https://github.com/zeroclaw-labs/zeroclaw/issues/6889) 已关闭，修复了 reqwest 错误仅显示顶层信息而隐藏根因的问题，改善了调试体验。
*   **[Feature] Memory 策略解耦**：PR [#6907](https://github.com/zeroclaw-labs/zeroclaw/pull/6907) 提交了重要重构，引入 `MemoryStrategy` trait，旨在将高层内存生命周期策略与底层 CRUD 解耦，为后续更复杂的记忆管理机制打下基础。

## 4. 社区热点
今日社区讨论最热烈的议题主要集中在最新模型的支持与功能扩展上。

*   **[Issue #6059] DeepSeek-V4 API 兼容性问题**：(评论 12 条，👍 4)
    *   **链接**：[zeroclaw-labs/zeroclaw Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)
    *   **分析**：DeepSeek-V4-Pro/Flash 版本在调用时报错，涉及 "thinking mode" 的处理。作为高优先级（P1）问题，这反映了 Zeroclaw 作为 AI Agent 框架必须紧跟 LLM 厂商 API 变化的挑战，用户对新模型的尝鲜需求迫切。
*   **[Issue #4710] 新 LOGO 设计讨论**：(评论 10 条，👍 2)
    *   **链接**：[zeroclaw-labs/zeroclaw Issue #4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)
    *   **分析**：虽然是低优先级任务，但社区对品牌形象表现出较高热情，目前处于寻找设计师/方案的状态。
*   **[Issue #6909] Computer-Use 支持请求**：(评论 2 条)
    *   **链接**：[zeroclaw-labs/zeroclaw Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)
    *   **分析**：用户请求添加类似 Codex/Peekaboo 的屏幕交互能力，这是目前 AI Agent 领域的前沿热点，表明用户希望 Zeroclaw 具备更强的 OS 级别控制能力。

## 5. Bug 与稳定性
今日报告了多个高风险问题，主要集中在兼容性和安全边界。

*   **[P1/HIGH] DeepSeek-V4 不兼容 (#6059)**：新模型 API 格式导致服务不可用，标记为 `status:in-progress`，目前尚无修复 PR。
*   **[P1/HIGH] Gemini 400 历史序列化错误 (#6302)**：调用 Gemini 模型时因历史记录构造顺序问题导致 400 错误，正在处理中。
*   **[P1/HIGH] OpenAI Codex OAuth 回退问题 (#6923)**：配置了 OAuth 后运行时仍回退到 API Key 鉴权，导致认证失败。
*   **[P2/HIGH] Web_fetch 私有 IP 绕过风险 (#5122)**：DNS 解析到私有 IP 的域名未受 `allowed_private_hosts` 限制，存在 SSRF 风险，已接受但未修复。
*   **[P1/HIGH] Shell 子进程内存无限制 (#6916)**：Issue 指出当前 1MB 输出限制无法防止子进程 OOM，建议增加进程级内存限制，目前处于 Blocked 状态等待审查。

## 6. 功能请求与路线图信号
社区提出的功能请求显示出向**深度集成**和**细粒度控制**发展的趋势。

*   **插件系统重构 (#6489, #6943)**：社区正在讨论 "Everything is a plugin" 架构，并提议替换 Extism 为 wasmtime component model。这是一个高风险的底层架构变更，旨在解决当前插件系统的局限性。
*   **细粒度工具权限控制 (#6914, #6917)**：请求在 Agent 和 Skill 层面强制执行 `allowed_tools` 和 `action-scope` 限制。这表明用户对生产环境中的安全边界和权限最小化有强烈需求。PR [#6920](https://github.com/zeroclaw-labs/zeroclaw/pull/6920) 已经着手实现了部分执行期过滤。
*   **WebSocket 会话持久化 (#6932)**：请求将 Gateway WebSocket 会话持久化为完整对话记录，以支持断点续传和多轮对话恢复，PR [#6933](https://github.com/zeroclaw-labs/zeroclaw/pull/6933) 正在推进此功能。

## 7. 用户反馈摘要
*   **痛点：模型适配滞后**：DeepSeek-V4 和 Gemini 的用户反馈显示，当模型厂商更新 API（特别是增加 thinking mode 或调整 history 格式）时，Zeroclaw 往往需要快速跟进适配，否则会导致服务不可用。
*   **痛点：构建与部署复杂**：Issue #6836 (Windows 构建体积过大) 和 #6906 (Nix flake 不符合预期) 反映出非 Linux 平台用户的部署体验仍有优化空间。
*   **场景：金融与安全**：从 Issue #5722 (FINOS CDM 合规分析) 和多个安全相关 Issues 可以看出，部分用户正在尝试将 Zeroclaw 用于金融分析等严肃场景，对沙箱隔离、内存限制和工具权限有极高要求。

## 8. 待处理积压
*   **[Issue #6074] 代码审计需求**：需要追踪并恢复此前被批量回滚的 153 个提交，防止功能丢失。该 Issue 已存在一个月，标记为 `in-progress`，建议维护者尽快确认恢复进度。
*   **[PR #6848] Zerocode TUI 大型重构**：标记为 `size: XL`，涉及核心组件重构，目前处于 Draft/Review 阶段。由于改动量巨大，需要社区投入资源进行充分测试，以免引入回归问题。
*   **[Issue #6253] v0.7.6 Skills 支持**：作为下一版本的主题，该 Tracker 仍处于 Open 状态，建议关注其对 CLI、Loader 和沙箱环境的改进进度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-26)

## 1. 今日速览
Hermes Agent 今日社区活跃度极高，过去 24 小时内共有 50 条 Issue 更新和 50 条 PR 更新。虽然未发布新版本，但社区贡献主要集中在核心 Bug 修复与模型兼容性优化上。值得关注的是，**Docker 部署权限问题**成为用户反馈的重灾区，多条高热度 Issue 均与此相关。PR 合并/关闭数量仅为 2 条，显示出目前代码审查积压较严重（48 个 PR 待合并），项目整体处于高负载迭代状态，急需维护者处理积压代码。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
尽管合并数量较少，今日已关闭的 Issues 和活跃的 PRs 显示了项目在稳定性与兼容性方面的推进：

*   **安全性加固**：Issue [#32267](https://github.com/NousResearch/hermes-agent/issues/32267) 已关闭，针对 Dashboard 的安全渗透测试发现并修复了插件路由的鉴权漏洞，提升了本地部署的安全性。
*   **架构优化**：PR [#32382](https://github.com/NousResearch/hermes-agent/pull/32382)（AgentOps 工厂控制平面基础）已关闭，虽然合并状态未明，但显示了项目正在探索更复杂的 Agent 编排与管理架构。
*   **关键修复待合并**：针对 Linux 下的 CLI 崩溃问题，PR [#32387](https://github.com/NousResearch/hermes-agent/pull/32387) 提出了修复方案；针对 Gateway 在 `/stop` 后的空回复问题，PR [#32393](https://github.com/NousResearch/hermes-agent/pull/32393) 提供了修复。
*   **模型兼容性增强**：PR [#32380](https://github.com/NousResearch/hermes-agent/pull/32380) 修复了 DeepSeek V4 模型的严格校验问题，PR [#32378](https://github.com/NousResearch/hermes-agent/pull/32378) 修复了 Gemini 工具模式的 Schema 兼容性，这将显著改善多模型切换体验。

## 4. 社区热点
今日讨论最激烈的问题集中在部署体验与模型底层逻辑：

*   **[Bug] Docker 权限顽疾** ([#23402](https://github.com/NousResearch/hermes-agent/issues/23402))：评论数 8 条。用户在 Unraid 模板中配置 Docker 时遭遇 `HERMES_UID` 权限冲突，导致 Dashboard Chat 无法写入目录。此类权限问题在 [#18482](https://github.com/NousResearch/hermes-agent/issues/18482) 和 [#14448](https://github.com/NousResearch/hermes-agent/issues/14448) 中均有体现，反映出当前 Docker 化部署对非 root 用户的配置指引或自动处理机制尚不完善。
*   **[Feature] 本地模型工具调用适配** ([#13659](https://github.com/NousResearch/hermes-agent/issues/13659))：评论数 6 条。用户反馈即使配置了 `tool_use_enforcement: never`，Hermes 仍向本地 Ollama 模型发送 `tools` 参数，导致 400 错误。这反映了高级用户希望 Hermes 能更好地适配不具备 Function Calling 能力的本地模型。
*   **[Feature] Claude 账号体系支持** ([#32392](https://github.com/NousResearch/hermes-agent/issues/32392))：用户请求支持 Claude Code/Team 的登录凭证作为 Provider，而不仅仅是 API Key，显示用户对降低使用成本的强烈需求。

## 5. Bug 与稳定性
今日报告的 Bug 涵盖网关、工具调用和前端界面，部分已有修复 PR：

*   **P1 - 严重**
    *   **Dashboard 挂起** ([#32377](https://github.com/NousResearch/hermes-agent/issues/32377))：反向代理下 PTY Chat 断开导致子进程泄漏，最终拖垮服务。暂无修复 PR。
    *   **Codex/GPT-5.5 首字节延迟** ([#32373](https://github.com/NousResearch/hermes-agent/issues/32373))：修复补丁后仍存在超时问题。
*   **P2 - 高**
    *   **Gateway 空 Reply** ([#31884](https://github.com/NousResearch/hermes-agent/issues/31884))：已有修复 PR [#32393](https://github.com/NousResearch/hermes-agent/pull/32393)。
    *   **Signal API 不兼容** ([#32337](https://github.com/NousResearch/hermes-agent/issues/32337))：Hermes 与 `bbernhard/signal-cli-rest-api` 存在 API 冲突。已有修复 PR [#32379](https://github.com/NousResearch/hermes-agent/pull/32379)。
    *   **Plugin Tool 返回格式错误** ([#31435](https://github.com/NousResearch/hermes-agent/issues/31435))：插件返回 Dict 导致上游 400 错误。

## 6. 功能请求与路线图信号
*   **WebSocket 传输支持** ([#6057](https://github.com/NousResearch/hermes-agent/issues/6057))：针对 Agent 长循环任务，用户建议 OpenAI API 切换至 WebSocket 以减少 TLS 握手开销。目前 PR 列表中有类似的底层优化，建议纳入优先级。
*   **可配置备份排除** ([#16988](https://github.com/NousResearch/hermes-agent/issues/16988))：用户希望排除 `venv` 等目录以减少备份体积，Issue [#28970](https://github.com/NousResearch/hermes-agent/issues/28970) 与之重复且已关闭，暗示可能已有相关实现或计划。
*   **移动端适配** ([#28051](https://github.com/NousResearch/hermes-agent/issues/28051))：Dashboard 在移动端横向滚动缺失，严重影响手机端体验。

## 7. 用户反馈摘要
*   **部署痛点**：多用户反馈 Docker 镜像的权限管理设计反直觉（如强制创建 `/root`、UID 映射失效），认为生产环境配置体验“非常糟糕”。
*   **模型适配**：DeepSeek R1/V4 等国产或开源模型用户增加，这些模型对 API 参数校验较严（如 Tool Use），用户希望 Hermes 能做更好的兼容层处理。
*   **稳定性担忧**：网关层面的进程泄漏和会话丢失问题引发了对生产环境稳定性的讨论，部分用户建议暂时避免在关键任务中使用 Dashboard 的 PTY 模式。

## 8. 待处理积压
*   **PR 审查积压**：目前有 **48 个 PR 处于待合并状态**，涵盖从安全修复到新功能开发的各个方面。大量积压可能导致功能交付延迟，建议维护者优先处理 P1/P2 级别的修复类 PR（如 #32387, #32393）。
*   **长期未解决 Issue**：Issue [#14448](https://github.com/NousResearch/hermes-agent/issues/14448)（Docker 体验差）自 4 月开启至今未获实质性解决，且点赞数较多，建议作为用户体验优化的重点纳入近期迭代。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-26)

## 1. 今日速览
PicoClaw 项目今日保持高频迭代状态，发布了最新的 `nightly` 版本（v0.2.9），社区互动活跃。过去24小时内共有 17 项 Issues/PRs 更新，显示出开发者与用户社区的紧密互动。值得注意的是，今日虽有 8 个 PR 处于活跃状态，但 **0 个 PR 被合并**，且多个 Issue 集中在新增模型（如 Claude 系列）的兼容性配置上，反映出项目正处于适配新模型 API 变动的阵痛期。整体来看，项目活跃度高，但代码合并与 Bug 修复的流转效率值得关注。

## 2. 版本发布
- **nightly: Nightly Build v0.2.9-nightly.20260526.ab6d3946**
  - **类型**: 自动化构建版本
  - **说明**: 这是一个每日构建版本，可能包含不稳定因素，仅供测试用途。
  - **变更范围**: 对比 v0.2.9...main 分支，包含了最新的代码提交。
  - **风险提示**: 官方明确提示 "Use with caution"，建议生产环境谨慎使用。

## 3. 项目进展
今日 **无 PR 合并**，但有多达 8 个 PR 处于 Open/Active 状态，主要集中在功能增强与关键修复：

- **新功能开发**:
  - **[PR #2945](https://github.com/sipeed/picoclaw/pull/2945)**: 提交了 `picoclaw-tracer` 调试追踪器，这是一个独立的 Web UI，用于实时渲染 LLM 调用链路（System Prompt、消息数组、工具执行等），将极大提升 Debug 效率。
  - **[PR #2853](https://github.com/sipeed/picoclaw/pull/2853)**: 为 Pico channel 增加了 `ChatStream` 支持，推进实时流式输出功能，响应了社区对流畅交互的诉求。

- **关键修复**:
  - **[PR #2942](https://github.com/sipeed/picoclaw/pull/2942)** & **[PR #2940](https://github.com/sipeed/picoclaw/pull/2940)**: 针对 Anthropic Claude 新模型（claude-sonnet-4.6, claude-opus-4-7）的 API 兼容性修复，分别解决了模型 ID 格式错误和废弃参数导致的请求失败问题。

## 4. 社区热点
今日讨论最热烈的问题是 **[Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)**（👍 2, 评论 14）。

- **核心诉求**: 用户反馈 `exec` 工具的安全守卫机制过于简单粗暴。在启用 `restrict_to_workspace` 时，简单的正则匹配错误地将非文件路径参数（如查询天气的 URL 参数 `Beijing?T`）误判为非法路径遍历，导致合法命令被拦截。
- **分析**: 这反映了安全沙箱机制与工具灵活性之间的矛盾。用户希望在保障安全的前提下，提升命令解析的智能程度，避免“一刀切”式的拦截影响正常功能。该 Issue 自 3 月开启至今仍在活跃，说明此痛点持续存在。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，部分已有 PR 跟进：

- **🔴 严重 - 配置错误导致模型不可用**:
  - **[Issue #2941](https://github.com/sipeed/picoclaw/issues/2941)**: 默认配置中 Claude Sonnet 模型 ID 格式错误（使用了点号而非连字符），导致新安装用户直接报 404 错误。-> **[已有 Fix PR #2942](https://github.com/sipeed/picoclaw/pull/2942)**
  - **[Issue #2939](https://github.com/sipeed/picoclaw/issues/2939)**: Claude Opus 4.7 模型废弃了 `temperature` 参数，PicoClaw 仍默认发送该参数导致请求失败。-> **[已有 Fix PR #2940](https://github.com/sipeed/picoclaw/pull/2940)**

- **🟠 中等 - 平台兼容性问题**:
  - **[Issue #2887](https://github.com/sipeed/picoclaw/issues/2887)**: RISC-V 架构下的 .deb 版本无法使用 OpenAI 模型，影响特定硬件用户群体。
  - **[Issue #2944](https://github.com/sipeed/picoclaw/issues/2944)**: Termux 环境下 HTTPS 请求因证书路径问题失败，需手动设置环境变量。

- **🟡 一般 - 功能缺陷**:
  - **[Issue #2943](https://github.com/sipeed/picoclaw/issues/2943)**: 微信渠道发送图片调用智谱 GLM-5 API 时触发参数错误。
  - **[Issue #2796](https://github.com/sipeed/picoclaw/issues/2796)**: 历史记录显示逻辑问题，多次对话仅显示最后一条用户消息。

## 6. 功能请求与路线图信号
结合 Issues 与 PRs，项目演进方向明确指向 **流式输出** 与 **可观测性**：

1.  **流式输出**: 
    - **[Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)** 请求支持配置流式 HTTP 请求。
    - **[Issue #1950](https://github.com/sipeed/picoclaw/issues/1950)** 请求 Web Chat 支持流式输出（今日已关闭，可能已纳入其他实现或暂不处理）。
    - 结合 **[PR #2853](https://github.com/sipeed/picoclaw/pull/2853)** 的 ChatStream 支持，**流式体验显然是下一版本的重点优化方向**。

2.  **调试与可观测性**: 
    - **[PR #2945](https://github.com/sipeed/picoclaw/pull/2945)** 提出的 Trace Viewer 显示出项目正致力于提升 Agent 开发过程中的透明度，解决 LLM “黑盒”调试难的问题。

## 7. 用户反馈摘要
- **痛点**: 新版模型配置落后于 API 更新速度。用户反馈刚发布的模型（Claude Opus/Sonnet 新版）在 PicoClaw 中直接报错，影响“开箱即用”体验。
- **场景**: 开发者在 Termux/RISC-V 等非标准 Linux 环境下的部署需求明显，证书和环境变量配置是主要障碍。
- **满意度**: 社区对 `exec` 工具的安全策略颇有微词，认为目前的实现影响了工具调用的成功率，期待更精细化的权限控制。

## 8. 待处理积压
- **[Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)**: **Exec 工具安全守卫误判问题**（开启于 2026-03-04）。该问题长期未解决且影响工具链的可用性，建议维护者优先处理或引导社区贡献更优的正则匹配方案。
- **[PR #2893](https://github.com/sipeed/picoclaw/pull/2893)** & **[PR #2890](https://github.com/sipeed/picoclaw/pull/2890)**: 这两个功能/修复型 PR 已停滞近一周，建议维护者进行 Code Review 或反馈修改意见，以免阻塞相关功能的上线。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-26)

## 1. 今日速览
NanoClaw 项目今日保持高度活跃，过去24小时内 PR 更新达 15 条，Issue 更新 4 条。项目重点聚焦于 v2 版本的稳定性修复与功能回归，特别是针对 CLI 工具的数据库操作和消息传递核心逻辑的缺陷修正。社区贡献活跃，涌现出 Slack Socket Mode 支持、多模态功能回归等高质量 PR。整体来看，项目正处于积极填补 v2 版本功能缺口并提升系统健壮性的阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 3 个 PR 关闭/合并，显著提升了系统稳定性：
*   **[PR #2526](https://github.com/nanocoai/nanoclaw/pull/2526)** 已合并：修复了 CLI 中 `ncl groups delete` 命令因外键约束失败的问题，通过级联删除依赖行，解决了长期存在的数据库操作阻碍。
*   **[PR #2592](https://github.com/nanocoai/nanoclaw/pull/2592)** 已关闭：补充了 Teams CLI 作为自动凭证路径的文档，降低了集成门槛。
*   **[PR #2612](https://github.com/nanocoai/nanoclaw/pull/2612)** 已关闭：添加了 `debug-issue` 技能，增强了平台的事件排查能力。

目前仍有 12 个活跃 PR 待处理，涵盖：
*   **功能回归**：[PR #2618](https://github.com/nanocoai/nanoclaw/pull/2618) 恢复了 v1 版本的图片/语音/PDF 支持及聊天反应功能。
*   **Slack 增强**：[PR #2613](https://github.com/nanocoai/nanoclaw/pull/2613) 增加了 Slack Socket Mode 支持，[PR #2615](https://github.com/nanocoai/nanoclaw/pull/2615) 实现了线程上下文填充。

## 4. 社区热点
社区今日关注点主要集中在消息传递的可靠性上：
*   **[Issue #2404](https://github.com/nanocoai/nanoclaw/issues/2404)**：关于 Agent 在同一轮对话中使用 `send_message` MCP 工具和 `<message>` 块导致消息重复投递的问题，引发了关于 MCP 服务器子进程与轮询循环交互逻辑的深入讨论。
*   **[Issue #2506](https://github.com/nanocoai/nanoclaw/issues/2506)**：关于 `send_message` 去重机制在特定时序下（60秒内连续完成或流式传输期间）静默丢弃响应的问题，直接影响了用户体验，社区正在寻求解决方案。

## 5. Bug 与稳定性
今日暴露的核心 Bug 集中在消息路由与 CLI 工具链：
1.  **严重** - [Issue #2506](https://github.com/nanocoai/nanoclaw/issues/2506)：消息响应被静默丢弃，导致客户端超时，涉及核心去重逻辑缺陷。
2.  **严重** - [Issue #2404](https://github.com/nanocoai/nanoclaw/issues/2404)：消息重复投递，影响通信准确性。
3.  **已修复** - [Issue #2525](https://github.com/nanocoai/nanoclaw/issues/2525)：`ncl groups delete` 外键约束错误已通过 [PR #2526](https://github.com/nanocoai/nanoclaw/pull/2526) 修复。
4.  **待合并修复** - [PR #2541](https://github.com/nanocoai/nanoclaw/pull/2541)：修复了轮询循环将正文中的 `</message>` 误判为消息结束标签的解析 Bug。
5.  **待合并修复** - [PR #2610](https://github.com/nanocoai/nanoclaw/pull/2610)：修复了 `ncl groups create` 后未初始化文件系统导致容器生成失败的问题。

## 6. 功能请求与路线图信号
*   **Slack 集成深化**：[Issue #1804](https://github.com/nanocoai/nanoclaw/issues/1804) 提出了在单实例中支持多个并发 Slack 工作区的需求，结合今日的 [PR #2613](https://github.com/nanocoai/nanoclaw/pull/2613) (Socket Mode) 和 [PR #2615](https://github.com/nanocoai/nanoclaw/pull/2615) (线程上下文)，显示出项目正致力于将 Slack 集成打造为企业级特性。
*   **多模态回归**：[PR #2618](https://github.com/nanocoai/nanoclaw/pull/2618) 标志着 v1 版本中缺失的图像、语音和 PDF 处理能力将重返 v2，预计这将是下个版本的重要卖点。

## 7. 用户反馈摘要
用户反馈指出 v2 版本在引入 MCP 工具后，消息流转逻辑变得复杂，容易出现边缘情况下的消息丢失或重复（Issue #2404, #2506）。此外，CLI 工具在非简单场景下的可靠性仍需打磨，如创建组后的文件系统初始化（PR #2610）和删除时的级联清理（Issue #2525）。用户对 Slack 的高级用法（Socket Mode、多工作区）表现出强烈需求，推动项目适配更复杂的部署环境。

## 8. 待处理积压
*   **[Issue #1804](https://github.com/nanocoai/nanoclaw/issues/1804)**：关于多 Slack 工作区支持的需求自 4 月 16 日提出至今，虽然有相关路由改进 PR，但该核心 Issue 仍处于 Open 状态，建议维护者给予明确排期或反馈。
*   **[PR #2541](https://github.com/nanocoai/nanoclaw/pull/2541)**：针对消息解析的关键 Bug 修复 PR 自 5 月 18 日开启，至今仍 Open，建议尽快 Review 合并以解决稳定性问题。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-05-26)

## 1. 今日速览
NullClaw 项目今日保持稳健的开发节奏，整体活跃度中等。核心开发重心集中在**网关功能增强**与**Channel 集成修复**上，共有 2 个功能性 PR 待合并，显示出项目正在积极拓展 AI 智能体的通信与媒体处理能力。社区方面，有用户反馈了构建过程中的版本依赖问题，提示文档维护需跟进编译器的最新变动。依赖项更新已顺利完成，保障了容器环境的安全性。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日项目主要在基础设施与功能扩展两个层面取得了进展：

*   **基础设施维护**：PR [#931](https://github.com/nullclaw/nullclaw/pull/931) 已顺利关闭/合并，将 Docker 镜像中的 `busybox` 从 1.37 升级至 1.38，确保了容器基础环境的依赖安全与稳定性。
*   **网关能力扩展**：由 @DonPrus 提交的 PR [#933](https://github.com/nullclaw/nullclaw/pull/933) 处于 OPEN 状态，该 PR 显著增强了网关功能，新增了基于 STT 提供商的 `/media/transcribe` 接口，并优化了配置解析与令牌安全存储机制，标志着项目在 AI 智能体语音交互能力上迈出了关键一步。
*   **Channel 集成修复**：PR [#934](https://github.com/nullclaw/nullclaw/pull/934) 针对 LINE Channel 修复了消息路由问题，并引入了 `replyToken` 缓存机制，提升了消息交互的响应速度与准确性。

## 4. 社区热点
今日社区活跃度主要集中在问题反馈上，讨论最集中的是 Issue [#932](https://github.com/nullclaw/nullclaw/issues/932)。

*   **热点分析**：该 Issue 指出官方文档与实际构建要求存在偏差。文档声明的 Zig 版本（0.15.2）滞后于代码实际依赖（需 0.16.0），这直接影响了新贡献者和用户的首次构建体验。这反映了项目可能处于快速迭代期，代码与文档的同步机制稍显滞后。

## 5. Bug 与稳定性
今日新增 1 例构建类 Bug，暂无崩溃或严重安全漏洞报告。

*   **🟡 中等优先级**：[Bug] **Invalid Zig version in docs** [#932](https://github.com/nullclaw/nullclaw/issues/932)
    *   **现象**：用户按照文档指引使用 Zig 0.15.2 构建失败，报错缺少 `std.Io.Dir` 符号。
    *   **原因**：代码已依赖 Zig 0.16.0 引入的新特性，但文档未同步更新。
    *   **状态**：目前尚无修复 PR 关联，需维护者尽快确认并修正文档或代码兼容性，以降低入门门槛。

## 6. 功能请求与路线图信号
根据今日开放的 PR 分析，项目正在向以下方向演进：

1.  **多模态交互**：PR [#933](https://github.com/nullclaw/nullclaw/pull/933) 引入的媒体转录接口明确信号，NullClaw 正在整合语音输入能力，为 AI 智能体增加“听”的能力。
2.  **安全性与健壮性**：同 PR 中提到的网关令牌哈希存储与超时保护，显示出项目在面向生产环境部署时的安全性考量正在加强。
3.  **即时通讯平台集成**：PR [#934](https://github.com/nullclaw/nullclaw/pull/934) 对 LINE Channel 的优化表明，即时通讯平台仍是项目核心支持的交互渠道之一。

## 7. 用户反馈摘要
*   **痛点**：新用户在搭建开发环境时遇到阻碍，文档版本信息滞后导致构建失败（Issue [#932](https://github.com/nullclaw/nullclaw/issues/932)）。用户 @nulldoubt 反馈即便严格按照 "Getting Started" 操作也无法通过编译，这可能会挫伤潜在贡献者的积极性。
*   **建议**：建议维护者在 CI/CD 流程中增加对文档声明版本的校验，或在 README 中明确指出跟踪 Zig 最新的版本要求。

## 8. 待处理积压
*   **文档同步问题**：Issue [#932](https://github.com/nullclaw/nullclaw/issues/932) 涉及开发者入门体验，建议优先处理。虽然代码修复简单，但需确认项目对 Zig 版本的最低兼容性策略。
*   **代码审查积压**：PR [#933](https://github.com/nullclaw/nullclaw/pull/933) 和 PR [#934](https://github.com/nullclaw/nullclaw/pull/934) 均为功能性增强，目前处于待合并状态，建议维护者及时进行 Code Review 以推动版本迭代。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-26)

## 1. 今日速览
IronClaw 项目今日处于**极高活跃度**状态，核心开发团队正在推进名为 "Attested-signing" 的大型功能栈，涉及多达 12 个连续 PR 的提交与审查。过去 24 小时内共有 50 条 PR 更新，其中 10 条已合并或关闭，显示出迭代速度极快。然而，Issues 列表中显示存在严重的版本发布滞后问题（#3259），导致下游用户受限于旧版本的 CVE 漏洞，需引起维护者高度重视。此外，社区对 Reborn 架构下的 Slack 适配器及子智能体功能的讨论也热度不减。

## 2. 版本发布
**无新版本发布。**
⚠️ **注意**：虽然 GitHub 上已标记 `v0.27.0` 版本，但 `crates.io` 上最新版本仍停留在 `v0.24.0`。由于依赖库 `wasmtime` 28.x 存在 CVE 漏洞，下游用户目前面临安全风险且无法升级，详见 [Issue #3259](https://github.com/nearai/ironclaw/issue/3259)。

## 3. 项目进展
今日共有 10 条 PR 合并或关闭，标志着 "Attested-signing" 安全签名基础设施取得重大突破，同时 "Reborn" 架构的子智能体功能也完成了第一阶段落地。

*   **[已合并] PR #3961 - Attested Signing 基础设施 (PR2/10)**  
    奠定了安全签名的核心数据结构，引入了 `ironclaw_attestation` crate，实现了交易字节规范化与 `ApprovedTxHash` 绑定。这是整个签名安全栈的基石。
    [链接](https://github.com/nearai/ironclaw/pull/3961)
    
*   **[已关闭] PR #3868 - Subagent Spawn Phase 1 Contracts**  
    落地了子智能体生成的第一阶段合约与隔离单元，为后续的运行时机制对接做好了准备，标志着 Reborn 架构在多智能体协作方向迈出实质性一步。
    [链接](https://github.com/nearai/ironclaw/pull/3868)

*   **[进行中] Attested-signing 全栈推进 (PR #3960 - #4015 系列)**  
    目前仍有大量相关 PR 处于 Open 状态，包括 NEAR/WC 提供商注册、WalletConnect v2 后端、多链签名广播等核心模块。这些 PR 相互依赖，正在密集审查中。

## 4. 社区热点
今日讨论焦点集中在**版本发布阻塞**与**安全架构设计**上。

*   **Issue #3259 [OPEN] - Publish 0.25.0–0.27.0 to crates.io**  
    **热度最高**（9 条评论）。用户因 `wasmtime` CVE 漏洞被迫锁定版本，但 `crates.io` 缺失新版本导致升级受阻。该问题已持续多日，社区对何时发布表示担忧。
    [链接](https://github.com/nearai/ironclaw/issue/3259)

*   **Issue #4051 [OPEN] - Attested-signing 多租户运营模型**  
    由核心成员 @zmanian 发起的 Tracking Issue，讨论在多租户环境下的密钥生命周期管理与安全隔离设计。这是目前代码提交最活跃的功能线。
    [链接](https://github.com/nearai/ironclaw/issue/4051)

*   **PR #4035 [OPEN] - Slack ProductAdapter Core**  
    针对 Reborn 架构的首个 Slack 适配器实现，评论数较多，主要涉及架构边界注册与 Webhook 接入方式的讨论。
    [链接](https://github.com/nearai/ironclaw/pull/4035)

## 5. Bug 与稳定性
今日报告了多个影响用户体验的关键 Bug，尤其是资源占用与启动失败问题。

*   **严重**
    *   **Issue #4030** - Discord 频道无响应且 CPU 占用 100%。  
        现象：IronClaw 在运行 Discord WASM 通道时，Tokio 工作线程被占满导致服务假死。
        [链接](https://github.com/nearai/ironclaw/issue/4030)

*   **中等**
    *   **Issue #3701** - macOS 预编译版网关无法绑定端口。  
        现象：v0.28.2 版本在 macOS 上即便配置正确且 doctor 检查通过，网关仍无法绑定端口。
        [链接](https://github.com/nearai/ironclaw/issue/3701)

*   **体验问题**
    *   **Issue #4043** - 积分/速率限制透明度不足。  
        用户反馈请求失败时仍可能消耗 Token，且错误提示不明确，导致新手用户困惑。
        [链接](https://github.com/nearai/ironclaw/issue/4043)

## 6. 功能请求与路线图信号
*   **Issue #4034** - 支持自定义 Telegram API Host。  
    用户希望能对接自建的 Telegram Bot API 服务器，以满足隐私或特殊网络环境需求。目前 WASM 通道尚未支持该配置。
    [链接](https://github.com/nearai/ironclaw/issue/4034)

*   **PR #4029** - Reborn Approval Interaction Service。  
    正在引入一套新的审批交互服务，允许模型在执行高风险操作前请求用户批准，增强了 AI 智能体的安全性与可控性。
    [链接](https://github.com/nearai/ironclaw/pull/4029)

## 7. 用户反馈摘要
1.  **供应链安全焦虑**：用户对 `crates.io` 版本更新滞后表示强烈不满，特别是涉及底层依赖（wasmtime）的安全漏洞时，缺乏官方更新渠道让下游项目面临合规风险。
2.  **计费逻辑困惑**：新用户对失败请求是否计费存在疑虑，希望系统能提供更明确的积分扣除日志和限额反馈机制。
3.  **平台兼容性**：macOS 平台的网关绑定问题依然困扰部分用户，影响了本地开发体验。

## 8. 待处理积压
*   **Issue #3259 (Crates.io 发布滞后)**：已活跃多日，今日仍有更新但未解决。建议维护者优先发布新版本以修复安全漏洞。
    [链接](https://github.com/nearai/ironclaw/issue/3259)
*   **Issue #3447 (Nightly E2E 测试失败)**：自动化测试持续失败，可能预示着主分支存在未解决的集成问题，需关注。
    [链接](https://github.com/nearai/ironclaw/issue/3447)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-26)

## 1. 今日速览
LobsterAI 项目今日保持高强度的开发迭代，过去 24 小时内共有 18 个 PR 更新，其中 9 个已完成合并或关闭，显示出核心团队正在密集修复缺陷并推进与 OpenClaw 生态的深度融合。本次更新重点解决了 Agent 运行时的稳定性问题，包括严重的 Token 空耗和会话卡死现象，大幅提升了系统的健壮性。社区方面，用户提出了关于 Agent 长期记忆体系的高质量建议，反映出用户对 AI 智能体“记忆力”的强烈需求。整体来看，项目处于功能增强与稳定性打磨并重的阶段，健康度良好。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 9 个 PR 被合并或关闭，主要集中在 OpenClaw 集成与核心 Bug 修复，显著提升了项目的稳定性：

*   **OpenClaw 生态集成**：
    *   PR #2045 实现了从 OpenClaw 同步技能的功能，并增加了对插件技能的保护机制（防误删），完善了技能管理体系。
    *   PR #2042 支持从 OpenClaw 扩展目录自动发现并同步插件，解决了多端插件管理割裂的问题。
*   **关键稳定性修复**：
    *   PR #2049 修复了 OpenClaw 中止工具循环时持续消耗 Token 的问题，这是一个严重的资源浪费 Bug，现已修复。
    *   PR #2047 解决了会话冻结问题，直接提升了用户体验的流畅度。
    *   PR #2043 修复了 GitHub Copilot Token 刷新导致网关重启的问题，增强了连接稳定性。
*   **架构优化**：
    *   PR #1584 将 Agent ID 生成逻辑从“基于名称”改为“短 UUID”，彻底解决了删除重建同名 Agent 导致旧数据“复活”的数据冲突隐患。

## 4. 社区热点
今日最活跃的讨论来自新开设的 Issue：

*   **[Issue #2046] Agent 记忆体系产品建议**：作者 @X9-laser 详细阐述了当前 Agent 跨会话记忆缺失的痛点。用户指出，目前对话标题等元数据仅存储在浏览器端，Agent 无法感知，导致跨会话协作困难。建议将 Session 元数据持久化到文件系统，并构建长期记忆体系。该建议获得了社区关注，反映出用户对 AI Agent 具备“长期记忆”和“上下文感知”能力的迫切需求。

## 5. Bug 与稳定性
今日修复了多个影响体验的 Bug，按严重程度排列如下：

*   **[严重] Token 无故消耗**：Issue 隐含在 PR #2049 中，用户反馈在空闲时段 Token 持续消耗。根因是 Aborted 状态的工具循环未正确终止。
    *   **状态**：已由 PR #2049 修复并关闭。
*   **[严重] 会话卡死**：PR #2047 修复了导致会话冻结的问题，直接影响用户正常使用。
    *   **状态**：已由 PR #2047 修复并关闭。
*   **[中等] 数据冲突**：PR #1584 修复了重建同名 Agent 导致旧数据复活的问题，属于数据一致性隐患。
    *   **状态**：已由 PR #1584 修复并关闭。
*   **[中等] 网关重启**：PR #2043 修复了 Copilot Token 刷新引发的网关意外重启。
    *   **状态**：已由 PR #2043 修复并关闭。

## 6. 功能请求与路线图信号
*   **Agent 记忆增强**：基于 Issue #2046 的讨论，Agent 记忆体系（Session 持久化、历史对话检索）极有可能成为下一阶段的开发重点。
*   **插件与技能同步自动化**：随着 PR #2042 和 #2045 的合并，LobsterAI 正加速构建与 OpenClaw 的统一插件生态，预示着未来版本将更侧重于平台间的无缝协作。
*   **待合并功能 PR**：
    *   PR #1522（动态获取模型列表）：目前仍处于 Open 状态，若合并将极大简化用户配置新模型的流程。
    *   PR #1526（会话颜色标注）：待合并，旨在提升多会话管理的视觉效率。

## 7. 用户反馈摘要
根据 Issue #2046 的内容，用户反馈主要集中在以下痛点：
*   **信息孤岛效应**：用户在前端修改的对话标题对 Agent 不可见，导致 Agent “失忆”，无法进行跨会话的上下文关联。
*   **重复劳动**：由于缺乏长期记忆，用户需要在新会话中重复输入背景信息。
*   **迫切需求**：用户希望 Agent 能像人类一样拥有“记忆”，能够自动感知和关联历史对话，而不仅仅是基于当前 Session 的短期记忆。

## 8. 待处理积压
以下长期未合并的 PR 提示项目中存在的待解决需求，建议维护者关注：

*   **[Stale] PR #1277**：Electron 大版本升级（v40 -> v42），涉及底层依赖更新，需评估兼容性风险。
*   **[Stale] PR #1515**：修复导出日志超时问题，涉及压缩算法优化，影响大日志导出体验。
*   **[Stale] PR #1517**：修复 GitHub Copilot OAuth 认证流程中关闭面板导致 Token 丢失的问题，属于用户体验细节修复。
*   **[Stale] PR #1522**：动态获取模型列表功能，对于快速适配新发布的 LLM 模型（如 GLM-5.1）至关重要。

---
*数据来源：netease-youdao/LobsterAI GitHub Repository*
*分析时间：2026-05-26*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-26)

## 1. 今日速览
Moltis 项目今日发布了版本 `20260525.01`，开发活跃度极高，共有 5 个 PR 成功合并，显著增强了智能体编排能力与系统安全性。核心进展包括引入非阻塞式 `spawn_agent` 功能和细粒度的工具控制，解决了社区长期关注的子智能体阻塞与路由漂移问题。同时，项目快速修复了 Docker 构建失败与 WebSocket 连接中断等关键稳定性问题。目前仍有 1 个安全修复 PR 待合并，整体项目处于快速迭代上升期，健康度良好。

## 2. 版本发布
- **版本号**: `20260525.01`
- **更新概要**: 此版本集成了今日合并的多个重要功能与修复，建议用户尽快升级以获得非阻塞智能体编排能力及关键的安全更新。
- **迁移注意**: 引入了新的工具控制逻辑及非阻塞 API，涉及 `spawn_agent` 的调用方式变更，开发者在升级后需根据文档调整相关预设配置。

## 3. 项目进展
今日共有 **5 个 PR 合并/关闭**，项目在架构灵活性与用户体验上迈出了重要一步：

- **[feat] 非阻塞智能体编排**：PR [#1067](https://github.com/moltis-org/moltis/pull/1067) 实现了 `spawn_agent` 的非阻塞模式，允许父会话在子智能体运行期间保持响应。此举解决了 Issue [#1004](https://github.com/moltis-org/moltis/issues/1004) 提出的阻塞痛点，极大提升了复杂工作流的并发处理能力。
- **[feat] 细粒度工具控制**：PR [#1069](https://github.com/moltis-org/moltis/pull/1069) 新增了 `active_tools` 和 `tool_choice` 的单次轮次控制，解决了 Issue [#1011](https://github.com/moltis-org/moltis/issues/1011) 中小型 LLM 路由不可靠的问题，提升了低成本模型的智能体路由精准度。
- **[feat] 子智能体预设可编辑**：PR [#1070](https://github.com/moltis-org/moltis/pull/1070) 支持在 UI 中直接创建、编辑子智能体预设，并支持高级字段的往返序列化，降低了多智能体系统的配置门槛。
- **[fix] Docker 构建修复**：PR [#1073](https://github.com/moltis-org/moltis/pull/1073) 修复了导致 Docker 构建失败的编译错误，确保了容器化部署的可用性。
- **[feat] 版本信息注入**：PR [#1068](https://github.com/moltis-org/moltis/pull/1068) 将 Moltis 版本号暴露给提示词，便于工作流中的版本追踪。

## 4. 社区热点
- **Issue [#868](https://github.com/moltis-org/moltis/issues/868) [OPEN]**：关于增加 Landlock 文件系统访问拒绝的调试日志。
  - **分析**：该 Issue 获得了 1 次点赞并有持续更新。Landlock 作为 Linux 安全模块，其访问控制往往处于底层且难以观测。用户在沙箱环境下运行复杂应用时，遇到权限拒绝往往难以定位原因。社区的强烈关注反映了在生产环境中对**安全可观测性**与**故障排查能力**的迫切需求。

## 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，整体稳定性得到修复：

- **[已修复] Docker 构建失败**：PR [#1073](https://github.com/moltis-org/moltis/pull/1073) 解决了文档打包导致的编译恐慌，属破坏性构建问题，现已修复。
- **[已修复] WebSocket 断开连接**：Issue [#1022](https://github.com/moltis-org/moltis/issues/1022) 报告了 LLM 模式更新时的连接中断问题，已随今日更新关闭，提升了长连接场景的稳定性。
- **[待处理] Cron 沙箱权限混淆**：Issue [#1072](https://github.com/moltis-org/moltis/issues/1072) 指出标记为 "Host" 执行目标的 Cron 作业仍在沙箱中运行。这是一个**中高风险 Bug**，涉及安全策略的一致性，目前尚无对应修复 PR，需维护者关注。
- **[待合并] 代码安全扫描告警**：PR [#1071](https://github.com/moltis-org/moltis/pull/1071) 已提交修复方案，解决了 DOM 插入、密钥明文传输等安全隐患，建议尽快合并。

## 6. 功能请求与路线图信号
今日的开发动态明确指出了项目的下一步重点：

- **增强的智能体调度**：Issue [#1004](https://github.com/moltis-org/moltis/issues/1004) 和 [#1011](https://github.com/moltis-org/moltis/issues/1011) 的关闭表明，**异步多智能体协作**和**精确工具路由**已正式纳入路线图并落地。这标志着 Moltis 正从单一的对话助手向复杂的智能体编排平台演进。
- **安全与可观测性**：Issue [#868](https://github.com/moltis-org/moltis/issues/868) 的活跃提示项目需要进一步加强沙箱环境的日志系统能力，预计未来版本将增强 Landlock 相关的审计日志功能。

## 7. 用户反馈摘要
- **痛点：子智能体阻塞**：用户反馈在使用 `spawn_agent` 时，父会话无响应，严重影响了需要并行处理的用户体验（Issue [#1004]），今日发布的非阻塞模式直接回应了这一痛点。
- **痛点：低成本模型路由失效**：用户指出在使用 Haiku 等轻量级模型时，工具选择经常出现“漂移”，导致智能体行为不可控（Issue [#1011]），新的 `tool_choice` 特性解决了这一问题。
- **使用场景**：有用户在 Issue [#1068] 反馈需要在工作流中追踪版本更新，说明 Moltis 已被用于自动化运维或持续集成等对版本敏感的场景。

## 8. 待处理积压
- **Issue [#1072](https://github.com/moltis-org/moltis/issues/1072)**：新报告的 Cron 作业沙箱策略 Bug。由于涉及安全边界（Host vs Sandbox），可能引发安全风险，建议维护者高优先级处理。
- **PR [#1071](https://github.com/moltis-org/moltis/pull/1071)**：安全扫描告警修复 PR 仍处于 Open 状态，涉及 DOM XSS 和密钥泄露风险，建议尽快审查合并。
- **Issue [#868](https://github.com/moltis-org/moltis/issues/868)**：Landlock 调试日志功能请求仍有讨论，建议开发团队评估是否纳入下个迭代。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-05-26)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持**高活跃度**，社区互动频繁。过去24小时内共有 38 条 Issue 更新（关闭 22 条）和 45 条 PR 更新（合并/关闭 30 条），显示出团队高效的迭代节奏。今日发布了 **v1.1.9-beta.1** 版本，主要涉及版本号迭代与控制台插件安装体验优化。最引人注目的是 **Coding Mode (代码模式)** 和 **Tauri 2.x 桌面端支持** 两大核心功能 PR 已成功合并，标志着项目在开发体验和跨平台客户端支持上迈出了重要一步。社区关注焦点集中在 UI 实时刷新问题及特定模型（如 GLM-5.1）的兼容性上。

## 2. 版本发布
- **[v1.1.9-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.9-beta.1)**
  - **更新内容**：
    1. **版本号升级**：将版本迭代至 1.1.9 beta 1。
    2. **控制台优化**：修复了插件安装/卸载后页面未自动刷新的问题，现在操作完成后会自动重载页面，提升了用户体验。
  - **注意**：此为 Beta 版本，主要用于测试新功能稳定性。

## 3. 项目进展
今日项目进展显著，多个重量级功能开发完成并合并，显著提升了项目的技术底座：
- **Coding Mode 正式落地**：PR [#4578](https://github.com/agentscope-ai/QwenPaw/pull/4578) 已合并。该功能在聊天面板旁嵌入了一个类似 VS Code 的浏览器端 IDE，增强了 Agent 的文件管理与 Git 操作能力，是向“AI 辅助编程”迈进的关键一步。
- **桌面端架构升级**：PR [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) 已合并。项目正式引入 **Tauri 2.x** 框架支持，替代旧的桌面端封装方案，有望解决长期存在的 Windows 启动慢、图标显示异常等问题。配套的自动更新功能也在 PR [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) 中推进。
- **Provider 生态优化**：
  - PR [#4682](https://github.com/agentscope-ai/QwenPaw/pull/4682) 新增支持 Kimi K2.6 模型，并移除了已下线的 K2 系列。
  - PR [#4684](https://github.com/agentscope-ai/QwenPaw/pull/4684) 修复了 Anthropic API 与非 Claude 推理模型的兼容性问题。

## 4. 社区热点
今日讨论最活跃的 Issue 集中在 UI 交互异常和数据安全问题上：
- **[#4644 Console UI: tool calls often not displayed](https://github.com/agentscope-ai/QwenPaw/issues/4644)** (评论: 10)
  - **诉求**：用户反馈 Web 控制台中除 `read_file` 外的工具调用大概率不实时显示，需手动刷新页面，且无报错日志。这影响了用户对 Agent 运行状态的实时感知。
- **[#4680 修改技能名导致智能体消失](https://github.com/agentscope-ai/QwenPaw/issues/4680)** (评论: 5)
  - **诉求**：用户修改自定义技能名称后重启，发现 Agent 配置丢失。这是严重的数据持久化 Bug，引发了用户对配置安全性的担忧。
- **[#4653 定时任务与用户消息 Session 冲突](https://github.com/agentscope-ai/QwenPaw/issues/4653)** (评论: 4)
  - **诉求**：定时任务执行期间，用户发送新消息会抢占 Session 导致定时任务中断。社区正在讨论 Session 隔离机制的改进方案。

## 5. Bug 与稳定性
今日报告的关键 Bug 按严重程度排序如下：

- **P0 - 数据丢失风险**：
  - [OPEN] [#4680](https://github.com/agentscope-ai/QwenPaw/issues/4680)：修改技能名导致 Agent 消失。目前暂无 Fix PR，需紧急关注。
  
- **P1 - 核心功能受损**：
  - [OPEN] [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644)：Console UI 工具调用不实时显示，严重影响调试与使用体验。
  - [OPEN] [#4650](https://github.com/agentscope-ai/QwenPaw/issues/4650)：GLM-5.1 模型通过 OpenAI 兼容接口接入时，控制台不显示思维链，疑似前端解析问题。
  - [OPEN] [#4675](https://github.com/agentscope-ai/QwenPaw/issues/4675)：Assistant 消息包含 File block 时，导致 reasoning_content 注入永久失败。

- **P2 - 性能与体验**：
  - [OPEN] [#4678](https://github.com/agentscope-ai/QwenPaw/issues/4678)：全量备份在数据量较大（800MB+）时极慢，建议优化并行化处理。
  - [OPEN] [#4670](https://github.com/agentscope-ai/QwenPaw/issues/4670)：Files 页面下载按钮点击后无响应，延迟极高。
  - [FIXED] [#4683](https://github.com/agentscope-ai/QwenPaw/pull/4683)：修复 Tauri 桌面端外部链接无法打开的问题。

## 6. 功能请求与路线图信号
社区提出的新需求为产品迭代提供了明确方向：
- **记忆系统重构**：Issue [#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) 建议增强记忆的“总结-关联-提醒”机制，避免记忆库沦为“信息垃圾场”。这表明用户对 Agent 的长期记忆能力有更高要求。
- **UI 时间戳显示**：Issue [#4662](https://github.com/agentscope-ai/QwenPaw/issues/4662) 请求在对话界面增加消息发送时间戳，便于回溯和排查延迟，属于高频易用性需求。
- **DataPaw 插件**：PR [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) 正在审核中，该插件引入了 12 个 BI 分析技能，有望成为下一个版本的重要卖点。

## 7. 用户反馈摘要
从 Issues 评论中提炼出的真实痛点如下：
- **Windows 体验亟待改善**：多个 Issue（如 #4043, #4664）反复提及客户端启动慢（约 40 秒）、无启动界面、任务栏图标显示为 Python 默认图标等问题。Tauri 的合并（#3813）被寄予厚望解决此类顽疾。
- **实时性反馈缺失**：除了工具调用不刷新外，用户对“等待审批无限循环”（#4238）等缺乏状态反馈的场景感到困惑。
- **模型兼容性细节**：用户在使用 OpenAI 兼容接口接入第三方模型（如 GLM, DeepSeek）时，经常遇到思维链解析、工具调用展示等前端适配问题。

## 8. 待处理积压
- **长期未解决的 UI 刷新问题**：Issue #4644 涉及前端核心渲染逻辑，评论数已达 10 条，但目前仍未看到直接的修复 PR，建议前端团队优先排查 WebSocket 或 SSE 推送机制。
- **Session 管理机制**：Issue #4653 揭示了当前架构下任务并发处理的局限性，需要对 Session 管理层进行重构或隔离，属于架构层面的待办事项。
- **OpenCode Provider 模型列表**：PR #4660 提议精简模型列表以解决跨端点错误，处于 Open 状态，需尽快合并以减少用户 API 调用报错。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-05-26)

**数据来源周期**：过去 24 小时  
**项目地址**：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. 今日速览
EasyClaw 项目今日整体呈现“低交互、高交付”的状态。社区互动层面较为平静，过去 24 小时内无新增 Issues 或 Pull Requests，也未关闭任何现有任务。然而，项目维护者今日发布了重要的补丁版本 **v1.8.15 (RivonClaw)**，核心聚焦于客服智能体的会话生命周期管理与调度稳定性。整体来看，尽管社区讨论热度暂处低位，但核心功能的迭代仍在稳步推进，项目健康度良好。

### 2. 版本发布
今日项目发布了新版本 **v1.8.15**，这是针对客服场景的一次关键迭代。

- **版本号**：v1.8.15 (RivonClaw)
- **发布链接**：[github.com/gaoyangz77/easyclaw/releases/tag/v1.8.15](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.15)
- **核心更新内容**：
  1. **会话生命周期闭环**：引入了客服智能体显式结束会话的功能，确保任务完成后对话能“干净”地关闭，避免僵尸会话占用资源或产生混淆。
  2. **调度与升级逻辑增强**：优化了 Escalation（升级）和 Dispatch（调度）处理，提供了更清晰的对话快照，修复了 Hint 路由的安全性问题，并提升了会话状态更新的可靠性。
  3. **工作台体验优化**：对客服工作台界面进行了细节打磨。
- **迁移注意事项**：
  - 虽未提及破坏性变更，但建议开发者重点关注**会话结束逻辑**。如果你的业务流依赖于会话自动挂起或超时机制，需测试新的显式结束行为是否会影响现有流程。
  - 更新后建议重新审查 Hint 路由配置，以确保符合新的安全性要求。

### 3. 项目进展
过去 24 小时内，项目无合并或关闭的 PR。今日的进展主要体现在 **v1.8.15 版本的发布**上。这表明虽然代码仓库今日无可见的合并操作（可能是非工作日或发布前的静默期），但项目在客服工作流稳定性方面迈出了坚实的一步，解决了会话状态管理这一关键痛点。

### 4. 社区热点
今日无活跃的 Issues 或 Pull Requests，暂无社区热点讨论话题。

### 5. Bug 与稳定性
今日未收到新的 Bug 报告或崩溃反馈。
*值得注意的是*，今日发布的 v1.8.15 版本中提到的“更可靠的会话状态更新”和“更安全的 Hint 路由”暗示了旧版本可能存在状态同步不稳定或路由安全隐患。建议已升级用户重点关注这两个模块的运行表现。

### 6. 功能请求与路线图信号
今日无新增功能请求。
从 **v1.8.15** 的更新日志可以窥见项目路线图的信号：项目正致力于将 EasyClaw 打造成更专业的**生产级客服解决方案**。重点从单纯的“功能实现”转向了“流程规范”（如显式结束会话）和“系统健壮性”（如安全路由），这表明项目正逐步走向成熟期，未来可能会继续深化与企业级客服系统的集成能力。

### 7. 用户反馈摘要
今日无用户评论数据。
结合版本更新内容分析，用户（或开发者）对于**会话无法正常关闭**、**人工转接逻辑混乱**等问题可能有潜在痛点，本次更新直接回应了这些场景需求，预期将提升使用体验。

### 8. 待处理积压
今日无新增积压或长期未响应的 Issue 更新。鉴于今日社区活跃度为零，建议维护者在后续几日关注社区对新版本 v1.8.15 的反馈，及时处理可能出现的升级兼容性问题。

---
**分析师点评**：EasyClaw 今日表现平稳，"小步快跑"的版本发布策略显示出项目维护者对产品质量细节的把控。建议持续关注新版本发布后的社区反馈。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*