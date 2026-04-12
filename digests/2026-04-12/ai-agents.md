# OpenClaw 生态日报 2026-04-12

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-12 02:51 UTC

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

# OpenClaw 项目动态日报 (2026-04-12)

## 1. 今日速览
OpenClaw 项目今日活跃度极高，共处理了 **500 条 Issues** 和 **500 条 PRs** 更新，其中新开/活跃 Issues 达 444 条，显示出社区反馈极其热烈。项目发布了 **v2026.4.11** 正式版，重点增强了 "Dreaming" 记忆系统的 ChatGPT 数据导入能力。虽然新版本发布带来了功能迭代，但 PR 积压量较大（待合并 337 条），且出现多个关于 OAuth 认证和新模型支持的回归问题，项目正处于功能快速演进与稳定性维护的博弈期。

## 2. 版本发布
**版本号**: v2026.4.11  
**发布时间**: 2026-04-12  
**更新重点**:
- **Dreaming/memory-wiki 增强**: 新增 ChatGPT 对话记录导入功能，UI 界面新增 `Imported Insights` 和 `Memory Palace` 日记子标签，用户现可直接在 UI 中检查导入的源对话、编译的 Wiki 页面及完整源页面 ([#64505](https://github.com/openclaw/openclaw/pull/64505))。
- **Control UI/webchat**: 改进了助手媒体内容的渲染逻辑。

**Beta 版本**: v2026.4.11-beta.1 (内容同上)。

## 3. 项目进展
今日共有 **163 个 PR 被合并或关闭**，主要推进了以下关键修复与优化：
- **稳定性修复**: PR [#65114](https://github.com/openclaw/openclaw/pull/65114) 修复了上下文溢出时的零负载生成错误文本问题；PR [#32523](https://github.com/openclaw/openclaw/pull/32523) 清理了 ACP 启动时失败的会话身份协调，防止资源泄露。
- **渠道集成**: PR [#64641](https://github.com/openclaw/openclaw/pull/64641) 修复了 MSTeams SingleTenant 机器人的 JWT 验证失败问题（401 Unauthorized）；PR [#65077](https://github.com/openclaw/openclaw/pull/65077) 修复了 Slack 回复抑制逻辑在多线程场景下的异常。
- **插件架构**: PR [#65120](https://github.com/openclaw/openclaw/pull/65120) 优化了 CLI 插件加载机制，通过激活计划减少了不必要的插件加载。

## 4. 社区热点
- **多平台客户端需求** ([Issue #75](https://github.com/openclaw/openclaw/issues/75)): 尽管创建于年初，该 Issue 今日再次引发热烈讨论（累计评论 80+），用户强烈呼吁提供 Linux 和 Windows 原生客户端，目前项目仅支持 macOS, iOS 和 Android。
- **GPT-5.4 / Codex 适配** ([Issue #64227](https://github.com/openclaw/openclaw/issues/64227)): 社区高度关注 GPT-5.4 与 Codex 智能体运行时的对齐进度，讨论聚焦于工具契约和权限执行的正确性。
- **OAuth 认证回归问题** ([Issue #64687](https://github.com/openclaw/openclaw/issues/64687) & [Issue #64861](https://github.com/openclaw/openclaw/issues/64861)): OpenAI Codex 的 OAuth 登录流程出现 `invalid_scope` 错误，影响了用户的正常接入，虽然相关 Issue 已被关闭，但仍有用户报告类似问题。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，部分已有关联 PR：
- **OpenAI Codex OAuth 失效** ([Issue #64861](https://github.com/openclaw/openclaw/issues/64861)): 用户在 2026.4.10 版本进行 OAuth 认证时收到 `invalid_scope` 错误，导致无法登录。**状态**: 未解决。
- **Telegram 语音转录失败** ([Issue #62496](https://github.com/openclaw/openclaw/issues/62496)): 4.5 版本中 Telegram DM 语音消息静默失败，无转录尝试。**状态**: 待修复。
- **时间提醒功能异常** ([Issue #10841](https://github.com/openclaw/openclaw/issues/10841)): 智能体无法准确获知当前时间，导致 "30分钟后提醒" 等指令失败。**状态**: 待修复。
- **CLI 安装与补全崩溃** ([Issue #63510](https://github.com/openclaw/openclaw/issues/63510)): 更新后 CLI 在生成补全缓存时因缺失 `qa/scenarios/index.md` 文件而崩溃。**状态**: 有修复 PR [#65118](https://github.com/openclaw/openclaw/pull/65118) 待合并。
- **Session 上下文重置死循环** ([Issue #63216](https://github.com/openclaw/openclaw/issues/63216)): 即使设置了高保留阈值，仍频繁触发上下文重置。

## 6. 功能请求与路线图信号
- **全平台客户端支持**: Issue #75 的高热度表明跨平台支持（Linux/Windows）是用户最迫切的功能需求之一。
- **API 密钥加密管理** ([Issue #7916](https://github.com/openclaw/openclaw/issues/7916)): 用户希望改变当前明文存储 API Key 的方式，提升安全性。
- **TTS 引擎扩展**: PR [#10356](https://github.com/openclaw/openclaw/pull/10356) 提议增加 Typecast TTS 提供者，支持情感预设和多语种，可能在未来版本中纳入。
- **本地模型无缝切换**: PR [#63503](https://github.com/openclaw/openclaw/pull/63503) 正在开发模型切换插件，允许在单 GPU 工作站上无缝切换本地推理后端，响应了本地部署用户的需求。

## 7. 用户反馈摘要
- **渠道稳定性痛点**: 用户在使用 Discord、WhatsApp、Signal 等多种渠道接入时，遇到消息丢失、语音转录失败、回声循环等问题，反映出多渠道适配层的维护仍是难点。
- **新模型兼容性焦虑**: 针对 GPT-5.4 和 Codex 的适配问题频繁出现，用户对最新模型的支持非常敏感，期望官方能更快跟进适配。
- **配置与安装体验**: 多个 Issues 提及安装脚本缺失依赖（如 `@buape/carbon`）和配置向导错误，新用户的上手体验有待打磨。

## 8. 待处理积压
- **Linux/Windows 客户端** ([Issue #75](https://github.com/openclaw/openclaw/issues/75)): 自 2026-01-01 创建至今未解决，标记为 `help wanted`，需社区贡献或官方重新评估优先级。
- **Opus 模型思考泄露** ([Issue #33242](https://github.com/openclaw/openclaw/issues/33242)): 标记为 `stale`，Opus 4.6 模型的非结构化思考文本有时会直接发送给用户，隐私性受影响。
- **Google Chat 渠道问题** ([Issue #33256](https://github.com/openclaw/openclaw/issues/33256) & [Issue #58541](https://github.com/openclaw/openclaw/issues/58541)): 多个版本的回归问题导致 Google Chat 集成不稳定，长期未被彻底解决。

---

## 横向生态对比

# 2026-04-12 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
当前 AI 智能体开源生态正处于**从“功能堆砌”向“架构重构与稳定性攻坚”转型的关键期**。以 OpenClaw 为首的头部项目正在解决大规模应用带来的上下文记忆与多渠道适配难题，而 Zeroclaw、NanoBot 等项目则在微内核架构、自主进化能力上进行前沿探索。与此同时，**MCP（Model Context Protocol）协议集成、本地/边缘模型适配以及多智能体编排**成为各项目竞相追逐的技术高地，生态整体呈现出“记忆系统深化、工具链标准化、部署轻量化”的趋势。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | Release 情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **444+** (极高) | **500+** (极高) | v2026.4.11 (正式版) | ⚠️ 高负载，PR 积压严重 (337 pending)，回归问题频发 |
| **IronClaw** | 15 | 50 | 无 (V2 筹备中) | 🟢 活跃开发中，处于 QA 攻坚阶段，架构升级明显 |
| **NanoBot** | 14 | 47 | 无 | 🟢 良好，响应迅速，安全加固成效显著 |
| **CoPaw** | 23 | 13 | 无 | 🟡 稳定迭代，技能系统稳定性存疑，积压较多 |
| **Zeroclaw** | ~28 | ~28 | 无 (v0.7.0 RFC) | 🔴 风险，存在 S1 级 Memory OOM 未修复，架构动荡期 |
| **PicoClaw** | 12 | 8 | Nightly | 🟡 审查瓶颈，PR 均未合并，回归问题需关注 |
| **NanoClaw** | ~10 | 18 | 无 | 🟡 基础设施隐患 (SSL 过期)，功能扩展迅猛 |
| **NullClaw** | 1 | 8 | 无 | 🟢 扎实，聚焦安全与稳定性修复，待发布 |
| **Moltis** | 8 | 7 | 无 | 🟢 优秀，修复效率高，社区反馈闭环快 |
| **LobsterAI** | ~5 | 9 | 无 | 🟡 中等，本地模型兼容性是主要短板 |
| **Hermes Agent**| 0 | 1 | 无 | 🔵 维护模式，仅解决特定模型兼容性 |
| **TinyClaw** | 0 | 0 | 无 | ⚪ 无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | ⚪ 无活动 |

## 3. OpenClaw 在生态中的定位

*   **生态核心与参照系**：OpenClaw 以单日近千条的 Issue/PR 更新量（约为其他头部项目总和的 10 倍），确立了其作为**生态流量入口**的地位。其 v2026.4.11 版本引入的 "Dreaming" 记忆系统与 ChatGPT 数据导入功能，进一步巩固了其在**个人记忆管理**领域的护城河。
*   **技术路线差异**：相比 Zeroclaw 的“微内核架构”和 IronClaw 的“多智能体编排”，OpenClaw 更侧重于**全平台客户端覆盖**与**渠道适配层的广度**（Discord, Slack, Teams 等）。然而，这种广度带来了较高的维护成本，今日 OAuth 回归问题和 PR 积压即是佐证。
*   **社区规模**：OpenClaw 社区已进入“大企业级”阶段，用户对跨平台客户端和最新模型（GPT-5.4/Codex）的诉求极强，而其他项目（如 NanoBot, Moltis）社区则更关注底层架构的灵活性与私有化部署的稳定性。

## 4. 共同关注的技术方向

1.  **记忆系统的重构与优化**：
    *   **涉及项目**：OpenClaw, Zeroclaw, NanoBot, Moltis。
    *   **具体诉求**：OpenClaw 推出 "Dreaming" 系统处理长期记忆；Zeroclaw 遭遇 Memory 递归雪球导致的 OOM (Issue #4916)，急需重构；NanoBot 讨论 SQLite 替代 Git 存储记忆；Moltis 引入确定性上下文压缩。这表明**长上下文与记忆管理是当前智能体稳定的最大瓶颈**。

2.  **MCP (Model Context Protocol) 协议集成**：
    *   **涉及项目**：NanoClaw, LobsterAI, IronClaw。
    *   **具体诉求**：NanoClaw 密集提交 Todoist/Calendar 等 MCP 集成；LobsterAI 增加 MCP 快速配置模版；IronClaw 探讨 MCP 服务激活问题。**MCP 正成为智能体连接外部工具的事实标准**。

3.  **沙箱安全与隔离机制**：
    *   **涉及项目**：NanoBot, Zeroclaw, NullClaw。
    *   **具体诉求**：NanoBot 修复 exec 环境变量泄露；Zeroclaw 的 Landlock 沙箱权限问题；NullClaw 强化 Docker 沙箱参数。随着 Agent 权限扩大，**安全边界的界定成为刚需**。

4.  **本地模型与边缘部署**：
    *   **涉及项目**：LobsterAI, OpenClaw, CoPaw, PicoClaw。
    *   **具体诉求**：LobsterAI 的 Ollama 兼容性痛点；OpenClaw 社区对本地模型切换的呼声；CoPaw 对 Windows GPU 调用的需求。用户对**数据隐私与离线能力**的重视度持续上升。

## 5. 差异化定位分析

| 维度 | OpenClaw (平台级) | Zeroclaw/NanoBot (架构驱动) | LobsterAI/CoPaw (应用驱动) | IronClaw/NanoClaw (编排驱动) |
| :--- | :--- | :--- | :--- | :--- |
| **核心目标** | 打造全平台个人 AI 助手入口 | 探索 Agent 底层架构与自主进化 | 提供开箱即用的 GUI 客户端体验 | 实现多智能体协作与任务自动化 |
| **技术痛点** | 多渠道适配、PR 积压、OAuth 兼容 | 内存管理、架构重构风险 | 本地模型兼容性、UI 交互细节 | 外部服务集成、跨端状态同步 |
| **用户画像** | C 端普通用户、多平台重度使用者 | 开发者、极客、私有化部署者 | 个人用户、桌面端用户 | 企业级用户、自动化流程构建者 |

## 6. 社区热度与成熟度

*   **快速迭代期（活跃度高，风险并存）**：
    *   **OpenClaw**：功能演进极快，但稳定性维护压力巨大，积压问题需警惕。
    *   **Zeroclaw**：正处于架构剧变期（单体转微内核），S1 级 Bug 尚未解决，适合尝鲜但生产环境慎用。
    *   **NanoClaw**：功能扩展迅猛，但基础设施维护滞后，存在 SSL 证书过期等低级失误。

*   **质量巩固期（聚焦修复，体验提升）**：
    *   **IronClaw**：V2 版本发布前的 QA 攻坚期，重点修复死循环与权限问题，稳健性在提升。
    *   **Moltis**：修复效率极高，文档与工具链完善，适合追求稳定性的开发者。
    *   **NullClaw**：专注于安全与底层修复，尚未发布新版，处于蓄力阶段。

*   **维护/停滞期**：
    *   **Hermes Agent, TinyClaw, ZeptoClaw**：活跃度低，仅做维持性更新或无动态。

## 7. 值得关注的趋势信号

1.  **从“被动响应”到“自主进化”**：
    NanoBot 社区热议的“自动技能发现” (Issue #2927) 和 OpenClaw 的 "Dreaming" 系统，标志着开源智能体正尝试突破被动对话限制，转向**具备自我反思与技能迭代能力的自主智能体**。

2.  **混合部署成为主流架构**：
    NanoClaw 提出的 `RUNTIME_MODE=native` (Issue #1732) 和 NullClaw 的沙箱增强，显示出社区正在寻求一种平衡：**既保留容器的隔离安全性，又具备宿主机的交互能力（如操控 GUI）**，以解决自动化操作桌面的痛点。

3.  **技能调用的“确定性”焦虑**：
    CoPaw (Issue #2902) 和 CoPaw (Issue #3142) 反映出用户对 LLM 随机性的容忍度降低。生产环境用户强烈要求**显式的技能调用控制**（如强制调用特定 Skill），而非完全依赖模型决策，这对 Agent 的调度框架提出了新要求。

4.  **边缘计算与轻量化需求抬头**：
    OpenClaw 对 Linux/Windows 客户端的呼声、Zeroclaw 对树莓派的支持讨论，以及 LobsterAI 的本地模型适配困境，共同指向一个趋势：**智能体不仅要跑在云端，更要跑在本地 PC、嵌入式设备上**，且必须解决本地模型（Ollama 等）的兼容性与性能问题。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-12)

## 1. 今日速览
NanoBot 项目今日维持高活跃度，过去24小时内 PR 更新量达 47 条，Issue 更新 14 条，显示社区开发迭代正处于快车道。今日重点聚焦于**系统安全性加固**与**Agent 自主能力进化**，多个关键安全修复 PR 已合并，有效提升了外部部署环境下的防御能力。同时，关于“自动技能发现”的功能提案与实现 PR 引发了热烈讨论，标志着项目正从被动响应向主动学习迈进。整体项目健康度良好，核心问题响应迅速，但部分严重 Bug（如 DuckDuckGo 挂起）仍需警惕。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **26 个 PR 合并/关闭**，项目在安全性、通道兼容性和核心功能上取得显著进展：

*   **安全性加固**: 合并了 [PR #2831](HKUDS/nanobot PR #2831)，修复了 exec 工具可能泄露进程环境变量（含 API Keys）的高危漏洞；同时 [PR #3055](HKUDS/nanobot PR #3055) 提交了面向外部部署的综合安全加固方案，增加了工具确认流程和沙箱选项。
*   **通道与媒体支持**: [PR #3044](HKUDS/nanobot PR #3044) 成功合并，为 QQ 和企业微信通道补全了图片/文件收发能力；[PR #3046](HKUDS/nanobot PR #3046) 与 [PR #2674](HKUDS/nanobot PR #2674) 实现了飞书/Lark 全球版域名支持，解决了国际化用户接入痛点。
*   **核心机制优化**: [PR #2959](HKUDS/nanobot PR #2959) 合并，允许通过配置禁用内置技能，提升了定制灵活性；[PR #3045](HKUDS/nanobot PR #3045) 修复了致命错误导致工具调用结果丢失的 Bug，提升了会话连续性。
*   **可观测性**: [PR #2838](HKUDS/nanobot PR #2838) 合并，增加了 Token 使用量的 JSONL 日志记录，便于成本监控与审计。

## 4. 社区热点
今日社区讨论焦点集中在 Agent 的“进化”能力与系统稳定性：

*   **[Issue #2927](HKUDS/nanobot Issue #2927) - 自动技能发现**: 该 Issue 提出让 Agent 主动识别行为模式并自动生成技能，不再依赖手动创建。对应的实现 [PR #3039](HKUDS/nanobot PR #3039) 与集成方案 [PR #3048](HKUDS/nanobot PR #3048) 正在审阅中。这反映了用户希望 AI 具备更高阶的自我迭代能力。
*   **[Issue #3047](HKUDS/nanobot Issue #3047) - Dream 记忆机制瓶颈**: 用户指出当前 2 小时一次的 Dream 机制导致上下文溢出。这引发了关于记忆整理策略的讨论，相关 [PR #3015](HKUDS/nanobot PR #3015) 提议用 SQLite 替代 Git 进行版本控制，显示社区正在重构核心记忆存储架构。

## 5. Bug 与稳定性
今日报告了数个影响严重的稳定性问题，部分已有修复方案：

*   **严重**:
    *   **系统挂起**: [Issue #2828](HKUDS/nanobot Issue #2828) 报告使用 DuckDuckGo 进行网络搜索会导致整个系统死锁，甚至无法通过 Ctrl+C 终止，目前暂无修复 PR，需高度关注。
    *   **Cron 服务死循环**: [Issue #3037](HKUDS/nanobot Issue #3037) 指出 Cron 服务存在重入 bug 导致无限触发和 LLM 费用失控，目前已关闭（推测已修复或定位）。
*   **高**:
    *   **连接池耗尽**: [Issue #3050](HKUDS/nanobot Issue #3050) 反映 Telegram Bot 因连接池耗尽导致消息投递失败，[PR #3053](HKUDS/nanobot PR #3053) 已提交修复，正在处理跨通道的重试放大问题。
    *   **会话膨胀**: [Issue #3029](HKUDS/nanobot Issue #3029) 指出会话无自动裁剪机制，导致达到 Token 上限后 Agent 静默失败。
*   **已修复**:
    *   [Issue #2947](HKUDS/nanobot Issue #2947): 运行时上下文元数据误发给用户的问题已解决。
    *   [Issue #2943](HKUDS/nanobot Issue #2943): 工具调用结果解析错误已通过 [PR #3045](HKUDS/nanobot PR #3045) 修复。

## 6. 功能请求与路线图信号
*   **技能自动化**: 基于热度极高的 [Issue #2927](HKUDS/nanobot Issue #2927) 与已提交的 [PR #3039](HKUDS/nanobot PR #3039)，“自动技能发现”功能极有可能在下一版本作为实验性功能推出。
*   **记忆后端重构**: [PR #3015](HKUDS/nanobot PR #3015) 提出的 SQLite 替代 Git 方案若合并，将解决长期存在的版本控制冲突问题，优化本地部署体验。
*   **多模型容灾**: [PR #1201](HKUDS/nanobot PR #1201) 正在推进多模型 Provider 与 Fallback 支持，显示项目正致力于提升服务的高可用性。

## 7. 用户反馈摘要
*   **痛点**: 本地部署用户 ([Issue #2913](HKUDS/nanobot Issue #2913)) 反馈 Ollama (Llama) 集成存在配置障碍；部分用户对 Agent 占用过高内存和上下文管理表示担忧 ([Issue #3029](HKUDS/nanobot Issue #3029))。
*   **场景**: 多数活跃 Issue 涉及多渠道部署（Telegram, WhatsApp, Feishu, QQ），表明用户普遍将 NanoBot 作为跨平台统一智能体入口。
*   **满意度**: 对新功能（如禁用技能配置、Token 日志）的响应速度表示认可；国际化社区对 Lark 全球版的支持表示欢迎。

## 8. 待处理积压
*   **[Issue #2828](HKUDS/nanobot Issue #2828)**: DuckDuckGo 搜索导致系统完全挂起，严重程度高但至今未分配维护者处理，建议优先排查。
*   **[Issue #3029](HKUDS/nanobot Issue #3029)**: 会话无限增长导致静默失败，缺乏自动裁剪机制，影响长期运行稳定性。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-12)

## 1. 今日速览
Zeroclaw 项目今日呈现出**架构重构攻坚与功能快速迭代**并行的态势，社区活跃度极高。过去 24 小时内共有 56 条 Issues/PRs 更新，重点关注 v0.7.0 到 v1.0.0 的微内核架构转型，密集发布了多篇关于治理、文档和质量标准的 RFC。虽然功能层面新增了 LINE 频道和 Anthropic 原生思考支持，但核心 Memory 模块存在的严重 Bug（递归雪球导致内存耗尽）仍未修复，给生产环境的稳定性蒙上阴影。项目正处于从单体走向模块化的关键重构期，稳定性与扩展性的平衡是当前最大挑战。

## 2. 版本发布
无新版本发布。项目当前主要精力集中在 v0.7.0 的架构重构 RFC 审议与实施准备中。

## 3. 项目进展
今日关闭了多个重要的架构设计与功能增强 Issue/PR，标志着项目重构正在实质推进：

*   **架构转型路线确定**: 重大 RFC Issue #5574 (微内核架构转型) 已关闭，意味着从 v0.7.0 到 v1.0.0 的重构路线图已达成共识。配合 #5577 (治理)、#5576 (文档标准) 等一系列 RFC 的提出，项目正在建立成熟的开发规范。
*   **核心功能增强**:
    *   [PR #5174](https://github.com/zeroclaw-labs/zeroclaw/pull/5174) 合并：修复了心跳监测支持 Matrix 目标的问题，完善了通知渠道。
    *   [Issue #3043](https://github.com/zeroclaw-labs/zeroclaw/issues/3043) 关闭：关于树莓派 Model B 的支持请求，伴随 workspace split 可能带来的优化，标志着嵌入式支持的新进展。
    *   [PR #5637](https://github.com/zeroclaw-labs/zeroclaw/pull/5637) 提交：将 `props` 子命令重命名为 `config`，修正了 CLI 命名的不一致性。
*   **代码质量优化**:
    *   [Issue #5272](https://github.com/zeroclaw-labs/zeroclaw/issues/5272) 关闭：二进制体积与编译时间优化的研究已结束，相关改进已合并。
    *   [Issue #3468](https://github.com/zeroclaw-labs/zeroclaw/issues/3468) 关闭：解决了 Matrix SDK 在 Rust 1.94+ 上的编译失败问题。

## 4. 社区热点
今日社区讨论焦点集中在核心架构与严重 Bug 上：

*   **[Issue #4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916)**: **Memory 递归雪球 Bug**。
    *   **热度**: 11 条评论，3 个点赞。
    *   **分析**: 这是目前最亟待解决的问题。用户反馈 `auto_save` 配合 `memory_recall` 会导致上下文无限递归保存，最终耗尽内存。该问题直击 Agent 长期记忆的核心逻辑，直接关系到 Agent 能否长期稳定运行。
*   **[Issue #5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574)**: **微内核架构 RFC**。
    *   **热度**: 5 条评论。
    *   **分析**: 社区对项目从 "反应式增长" 转向 "意图式架构" 表现出高度关注，这是项目走向成熟的里程碑。
*   **[PR #5642](https://github.com/zeroclaw-labs/zeroclaw/pull/5642)**: **新增 LINE Messaging API 支持**。
    *   **分析**: 开发者积极贡献 LINE 频道支持，表明项目在东南亚和日本市场的用户吸引力正在上升。

## 5. Bug 与稳定性
今日报告了多个严重级别的 Bug，需维护者高度警惕：

*   **S1 - 严重**:
    *   **[Issue #4916] Memory 上下文递归导致 OOM**:
        *   现象：开启 `auto_save` 时，记忆检索结果会被再次保存，形成递归 "雪球"。
        *   状态：**Open**，尚无 Fix PR。
    *   **[Issue #5153] Landlock 沙箱污染进程**:
        *   现象：Linux 下使用 Landlock 后会破坏工作空间文件访问权限。
        *   状态：**Open**，尚无 Fix PR。
    *   **[Issue #5636] zai-cn Provider 返回 1214 错误**:
        *   现象：使用 `glm-5-turbo` 模型时上下文修剪导致 API 报错。
        *   状态：**Open**。
    *   **[Issue #5651] install.sh 阻塞发布**:
        *   现象：安装脚本未适配新的 workspace-split 结构，将导致源码安装失败。
        *   状态：**Open**，标记为 `risk: high`。
*   **S2 - 降级/功能受损**:
    *   [Issue #5560](https://github.com/zeroclaw-labs/zeroclaw/issues/5560): `sop` 子命令未注册 (已有 PR #5637 处理相关重命名问题)。
    *   [Issue #5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628): Systemd 服务自启动导致手动运行端口冲突。
    *   [Issue #5646](https://github.com/zeroclaw-labs/zeroclaw/issues/5646): Ollama provider 未能自动生成 embedding。
    *   [Issue #5634](https://github.com/zeroclaw-labs/zeroclaw/issues/5634): Web Dashboard 刷新后会话丢失。

## 6. 功能请求与路线图信号
*   **Anthropic 原生扩展思考 (Extended Thinking)**:
    *   [Issue #5630](https://github.com/zeroclaw-labs/zeroclaw/issues/5630) 与 [PR #5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) 显示，项目正在整合 Anthropic 最新的原生推理链 API，这将显著提升复杂任务的处理能力。预计近期合并。
*   **用户体验改进**:
    *   [Issue #5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649): 请求 Web UI 支持剪贴板粘贴和拖拽图片，这是目前主流 Chatbot 应用的标配功能，呼声较高。
    *   [Issue #5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570): 提议将 SQLite 向量搜索从 O(n) 优化为 ANN 索引，这对大规模记忆场景至关重要。
*   **架构微内核化**: 密集的 RFC Issues 表明项目将重点转向模块解耦、CI/CD 管道建设和生产级质量标准制定。

## 7. 用户反馈摘要
*   **记忆管理痛点**: 用户反馈当前的记忆管理逻辑存在严重缺陷，特别是 `auto_save` 默认行为会导致不可控的内存增长 (#4916)，这影响了用户对 Agent 长期运行的信心。
*   **安装与配置困惑**: 多个 Issue (#5628, #5629, #5651) 反映出用户在安装（树莓派、脚本适配）和配置（API Key 警告、端口冲突）过程中遇到阻碍，说明文档和工具链的健壮性有待提升。
*   **对多模态交互的期待**: 用户期待 Web UI 能支持更自然的图片交互方式 (#5649)，而不仅仅是文本输入。

## 8. 待处理积压
*   **[Issue #4916] Memory 递归雪球问题**: 创建于 3 月 28 日，活跃度极高，但至今仍未有明确的修复 PR。作为 S1 级别的严重 Bug，建议维护者优先处理，否则会影响所有依赖长期记忆的用户。
*   **[Issue #5153] Landlock 沙箱问题**: 创建于 3 月 29 日，S1 级别。影响 Linux 用户的文件系统访问，长期未解决将导致安全沙箱功能不可用。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**日期**: 2026-04-12  
**项目**: NousResearch/hermes-agent

---

### 1. 今日速览
今日 Hermes Agent 项目整体活跃度较低，仅有一个新的修复 PR 提交，无新版本发布。重点聚焦于解决特定模型提供商（Qwen）的兼容性问题。目前项目处于维护状态，社区讨论较为平静。整体健康度稳定，主要等待现有修复 PR 的合并。

### 2. 版本发布
*   无。

### 3. 项目进展
今日无已合并或关闭的 PR，项目主要推进工作集中在待处理的修复请求上：
*   **[待合并] 修复 Qwen OAuth 刷新兼容性**：提交了 PR #7782，旨在解决 Qwen 接口 OAuth token 刷新失败的问题。该修复通过添加特定的 `User-Agent` 头，解决了 API 返回空响应导致的 JSON 解析错误，这将显著提升使用 Qwen 模型用户的连接稳定性。

### 4. 社区热点
今日社区无明显热点讨论，活跃度处于低位。
*   **PR #7782 [链接](https://github.com/NousResearch/hermes-agent/pull/7782)**：作为今日唯一的活跃项，虽然目前评论数为 0，但其关联的 Issue (#7746) 涉及核心认证流程，是今日最受关注的动态。

### 5. Bug 与稳定性
今日报告/修复的关键 Bug 如下，按影响程度排序：

*   **[中等] Qwen OAuth Token 刷新失败**
    *   **描述**: 在与 Qwen 模型交互时，OAuth token 刷新请求可能返回空响应或非 JSON 格式，导致客户端抛出 `Expecting value: line 1 column 1` 错误。
    *   **根因**: Qwen 端点对请求头敏感，缺少特定的 `User-Agent` 会导致请求被拦截或异常返回。
    *   **状态**: **已有 Fix PR** ([#7782](https://github.com/NousResearch/hermes-agent/pull/7782))，等待审核合并。

### 6. 功能请求与路线图信号
*   无显著信号。今日动态均为 Bug 修复，未涉及新功能规划。

### 7. 用户反馈摘要
*   **痛点**: 用户在使用 Hermes Agent 对接 Qwen 模型时，遇到了隐蔽的认证失败问题。这反映出部分第三方 API 对 HTTP 请求头有隐式要求（如 `User-Agent`），而现有客户端实现未能覆盖此边界情况，导致用户体验受损（无法刷新 Token）。

### 8. 待处理积压
*   **PR #7782** [链接](https://github.com/NousResearch/hermes-agent/pull/7782)：已于昨日提交，目前处于 OPEN 状态。建议维护者尽快审核，以免影响 Qwen 用户的正常使用。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-12)

## 1. 今日速览
PicoClaw 项目今日保持高频迭代态势，发布了最新的 `v0.2.6-nightly` 自动构建版本，显示开发活跃度较高。社区互动热烈，过去24小时内共有 12 条 Issue 更新和 8 条 PR 更新，但需注意的是 **8 条 PR 均处于待合并状态，无合并记录**，可能存在集成测试或审查积压。Issues 方面关闭了 3 个问题，但新开/活跃问题达 9 个，主要集中在 WebSocket 连接稳定性、模型兼容性及配置逻辑上，显示出 v0.2.5+ 版本引入了一些回归问题。

## 2. 版本发布
- **版本号**: `nightly` (Nightly Build)
- **标签**: `v0.2.6-nightly.20260412.748ac58d`
- **说明**: 这是一个自动化构建版本，官方提示可能不稳定，建议谨慎用于生产环境。
- **变更范围**: 对比 `v0.2.6` 与 `main` 分支的完整变更日志已发布。
- [查看 Release 详情](https://github.com/sipeed/picoclaw/releases/tag/nightly)

## 3. 项目进展
今日虽无 PR 合并入主分支，但开发者提交了多个高质量的功能改进与修复 PR，主要集中在架构重构与稳定性修复：

- **架构重构与多实例支持**：PR #2481 提出重构 `config.Channel` 以支持多实例，这是向高可用架构迈进的重要一步。 [链接](https://github.com/sipeed/picoclaw/pull/2481)
- **Gemini 原生支持与思维链分离**：PR #2475 提出分离 thought messages 并增加原生 Gemini provider，旨在优化多模型兼容性与推理过程展示。 [链接](https://github.com/sipeed/picoclaw/pull/2475)
- **定时任务与监控集成**：PR #2474 修复了定时任务会话复用问题，PR #2251 增加了 Grafana Alertmanager webhook 频道，扩展了运维监控场景。 [链接](https://github.com/sipeed/picoclaw/pull/2474) | [链接](https://github.com/sipeed/picoclaw/pull/2251)
- **核心 Bug 修复**：PR #2270 修复了配置解析时的 Panic 问题，PR #2128 修复了工具参数 JSON Schema 校验失败的问题。 [链接](https://github.com/sipeed/picoclaw/pull/2270) | [链接](https://github.com/sipeed/picoclaw/pull/2128)

## 4. 社区热点
今日社区讨论焦点集中在连接稳定性与功能扩展上：

- **WebSocket 连接失败争议**：Issue #2319 关于 v0.2.5 WebSocket 连接失败的问题已关闭，但相关讨论热度极高（8条评论）。用户反馈 v0.2.3~v0.2.4 正常而新版本失败，引发了对回归测试的担忧。 [Issue #2319](https://github.com/sipeed/picoclaw/issues/2319)
- **Ollama Cloud 凭证支持**：Issue #2225 持续活跃，用户呼吁增加 Ollama cloud credentials 支持，反映出自托管 AI 向云端服务扩展的需求。 [Issue #2225](https://github.com/sipeed/picoclaw/issues/2225)
- **Signal 频道集成**：Issue #41 已关闭，该功能请求获得了 7 个点赞，显示社区对隐私通讯渠道集成的强烈需求。 [Issue #41](https://github.com/sipeed/picoclaw/issues/41)

## 5. Bug 与稳定性
今日报告了多个影响使用的 Bug，部分已提交修复 PR，部分仍待确认：

**🔴 严重/阻塞问题**
- **WebSocket 连接失败**：Issues #2319 与 #2463 均指向新版本 WebSocket 连接问题，目前 #2319 已关闭，需确认是否已彻底修复。 [Issue #2463](https://github.com/sipeed/picoclaw/issues/2463)
- **认证逻辑混淆**：Issue #2438 指出 `PICOCLAW_GATEWAY_TOKEN` 环境变量无法控制 Pico channel 认证，存在误导性配置逻辑。 [Issue #2438](https://github.com/sipeed/picoclaw/issues/2438)

**🟠 中等问题**
- **Tool Call 兼容性**：Issue #2482 报告使用 OpenAI backend 的开源权重模型（如 mlx-lm）无法正常进行 Tool calls。 [Issue #2482](https://github.com/sipeed/picoclaw/issues/2482)
- **Windows 路径不兼容**：Issue #2472 指出 `list_dir` 在 Windows 下因路径分隔符问题报错。 [Issue #2472](https://github.com/sipeed/picoclaw/issues/2472)
- **消息处理遗漏**：Issue #2447 报告多任务并发时仅处理最新消息，这在 Agent 场景下属于严重逻辑缺陷。 [Issue #2447](https://github.com/sipeed/picoclaw/issues/2447)

**已有关联修复 PR**
- PR #2270 (Fix panic in config) 和 PR #2128 (Fix tool schema) 正在等待合并，建议优先审查以解决部分稳定性问题。

## 6. 功能请求与路线图信号
- **邮件通知渠道**：Issue #2465 提议增加 SMTP 发送邮件功能，用于定时任务结果推送（如周报、监控），符合 RPA 自动化趋势。 [Issue #2465](https://github.com/sipeed/picoclaw/issues/2465)
- **多实例配置**：PR #2481 的提出表明项目正在重构底层配置以适应多实例部署，这可能预示着 PicoClaw 将向企业级高并发场景演进。
- **模型兼容性扩展**：结合 Issue #2225 (Ollama Cloud) 和 PR #2475 (Native Gemini)，项目正致力于消除模型提供商的接入壁垒。

## 7. 用户反馈摘要
- **痛点**：用户对版本升级导致的连接中断（WebSocket）感到沮丧；Windows 平台的路径兼容性问题影响了跨平台体验；配置项（如 Gateway Token）的行为不符合预期增加了调试难度。
- **场景**：用户尝试将 PicoClaw 用于周期性任务（周报、检查）并通过邮件通知；使用本地推理框架（mlx-lm）对接 Tool calls。
- **满意度**：社区对 Signal 频道和 Grafana 监控集成的积极反馈显示，用户对扩展通讯和监控渠道的需求强烈。

## 8. 待处理积压
- **PR 审查瓶颈**：目前有 8 个 PR 处于 Open 状态，其中包括关键 Bug 修复 (PR #2270, #2128) 和重要功能重构 (PR #2481)。建议维护者尽快进行 Code Review 并合并，特别是针对 v0.2.6 版本的回归问题修复。
- **Issue #2225**：Ollama cloud credentials 功能请求自 3 月底开启至今未解决，建议维护者给予明确回应或打上 Help Wanted 标签。
- **Issue #2438**：环境变量认证问题涉及安全性，需尽快确认是文档问题还是代码逻辑缺陷。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-12)

## 1. 今日速览
NanoClaw 项目今日保持高度活跃状态，社区贡献热情高涨。过去24小时内共有 18 个 PR 更新，其中 6 个已合并或关闭，显示维护者正在积极处理积压代码。项目目前处于功能快速扩展期，重点集中在 MCP 协议集成（Todoist、Google Calendar）和底层运行时架构的改进（Native Runner 模式）。值得注意的是，社区出现了关于项目重命名（Argus）及核心架构调整的提案。然而，`nanoclaw.dev` 官网 SSL 证书失效的问题持续发酵，成为当前最紧迫的稳定性隐患。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 6 个 PR 被合并或关闭，显著推进了安全加固与渠道集成能力：

*   **安全加固**：PR #1744 已关闭，该修复强制所有容器通过凭证代理转发流量，消除了绕过代理的安全漏洞。
*   **渠道扩展**：PR #25 (Telegram 渠道支持) 与 PR #76 (GFW 代理支持) 已关闭，标志着项目在通讯渠道兼容性和网络环境适应性上迈出重要一步。
*   **Bug 修复**：PR #1617 修复了计划任务中 JID 处理错误的逻辑，提升了任务调度的准确性。
*   **待定重大变更**：PR #1738 提议将项目从 NanoClaw 重命名为 Argus，目前状态为 Open，若合并将对项目品牌产生重大影响。

## 4. 社区热点
今日讨论最活跃的 Issue 是关于基础设施稳定性，其次是功能改进提案：

*   **[#1503 nanoclaw.dev has an invalid ssl cert right now](https://github.com/qwibitai/nanoclaw/issues/1503)**
    *   **热度**：17 条评论
    *   **分析**：官网 SSL 证书失效问题自 3 月 28 日持续至今，严重影响用户首次访问体验与信任度。大量评论反映用户对此基础设施问题的焦虑，需维护者紧急介入。
*   **[#1745 Slack UX improvements](https://github.com/qwibitai/nanoclaw/issues/1745)**
    *   **热度**：新开 Issue
    *   **分析**：用户 @rekon307 指出 Slack 集成存在 UX 短板（线程回复、思考指示器等），并提到现有 PR (#522, #653, #682) 因缺乏审查而受阻。这反映了社区对于核心通讯渠道体验优化的迫切需求，以及审查流程可能存在的瓶颈。

## 5. Bug 与稳定性
今日暴露的关键 Bug 主要集中在基础设施与网络请求处理：

*   **P0 - 基础设施故障**：[#1503](https://github.com/qwibitai/nanoclaw/issues/1503) 官网 SSL 证书无效，目前无修复 PR 链接，需运维介入。
*   **P1 - 凭证代理路径丢失**：[#1746](https://github.com/qwibitai/nanoclaw/pull/1746) 修复了凭证代理在转发请求时丢弃上游 URL 路径组件的 Bug，这会导致特定 Provider（如 `api.z.ai`）请求失败。目前已有 Open 的 Fix PR。
*   **P2 - 环境变量传递不全**：[#1740](https://github.com/qwibitai/nanoclaw/pull/1740) 指出 `ANTHROPIC_BASE_URL` 等变量未正确传递至容器，导致用户无法使用非 Anthropic 官方端点。Fix PR 已提交。

## 6. 功能请求与路线图信号
今日涌现大量功能性 PR，揭示了项目下一阶段的发展方向：

*   **MCP (Model Context Protocol) 生态集成**：PR [#1747](https://github.com/qwibitai/nanoclaw/pull/1747) (Todoist)、[#1737](https://github.com/qwibitai/nanoclaw/pull/1737) (Google Calendar)、[#1742](https://github.com/qwibitai/nanoclaw/pull/1742) (Vikunja) 密集提交。这表明 NanoClaw 正积极构建“工具调用”生态，将 AI 智能体与主流生产力工具打通。
*   **突破容器隔离限制**：Issue [#1732](https://github.com/qwibitai/nanoclaw/issues/1732) 与 PR [#1739](https://github.com/qwibitai/nanoclaw/pull/1739) 提出 `RUNTIME_MODE=native`。这是一个重大的架构变更信号，旨在解决 Docker 隔离环境下无法访问宿主机 GUI 工具（如 headed browsers, tmux）的痛点，将极大扩展 Agent 的适用场景。
*   **记忆增强**：PR [#1743](https://github.com/qwibitai/nanoclaw/pull/1743) 引入了基于 SQLite 的自改进记忆智能体，旨在提升 Agent 的长期记忆与上下文理解能力。

## 7. 用户反馈摘要
*   **生产环境依赖性强**：用户 @rekon307 反馈已在生产环境运行 NanoClaw，并自行 Fork 修复了 Slack 体验问题，表明项目已具备企业级应用价值，但也暴露了官方上游 PR 合并速度滞后于用户需求的问题。
*   **网络环境痛点**：PR #76 的关闭解决了中国大陆用户连接 WhatsApp 等服务的 GFW 穿透问题，社区对此类网络适应性功能有强烈需求。
*   **安全性与灵活性权衡**：关于 Issue #1732，用户 @stevengonsalvez 指出容器隔离虽然安全，但阻碍了需要与宿主机交互的 Agent 用例（如操控 tmux），这促使了 Native Runner 模式的提出。

## 8. 待处理积压
*   **PR 审查瓶颈**：多个功能性 PR 处于 Open 状态较久，如 PR [#1311](https://github.com/qwibitai/nanoclaw/pull/1311) (Feature create new session) 创建于 3 月 21 日仍未合并；PR [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) (Matrix channel) 创建于 4 月 4 日。建议维护者优先梳理此类积压代码，避免功能碎片化。
*   **基础设施维护**：Issue #1503 的 SSL 证书问题已持续半个月，严重影响项目专业形象，需立即处理。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-12)

## 1. 今日速览
NullClaw 项目今日呈现出极高的开发活跃度，虽然未发布新版本，但代码库迎来了密集的修复提交。过去 24 小时内共有 **8 个 PR** 活跃（全部为待合并状态），且无任何 PR 被合并或关闭，显示出维护者正在进行大规模的代码审查或集成测试准备。Issues 方面仅 1 个旧 Issue 更新，社区反馈主要集中在 Docker 环境下的部署稳定性。整体来看，项目正处于集中修复 Bug 与强化安全性的关键阶段，距离下一次版本发布可能仅一步之遥。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日虽无 PR 合并，但从 8 个待合并的 PR 来看，项目正在经历一次重要的**质量巩固与功能补全**：

*   **安全与稳定性强化**：核心贡献者 @manelsen 提交了多个关键修复，重点解决了 Docker 沙箱的挂载参数初始化问题 ([PR #801](https://github.com/nullclaw/nullclaw/pull/801)) 和 Linux 沙箱检测逻辑漏洞 ([PR #805](https://github.com/nullclaw/nullclaw/pull/805))，显著提升了安全性。
*   **功能完善**：新增了 CLI 会话持久化功能 ([PR #802](https://github.com/nullclaw/nullclaw/pull/802))，解决了命令行交互历史丢失的痛点；@yanggf8 提交的 Cron 子代理引擎 ([PR #783](https://github.com/nullclaw/nullclaw/pull/783)) 仍在推进，预示着自动化任务调度能力即将上线。
*   **兼容性修复**：针对 OpenAI 兼容 Provider 的 404 兼容性修复 ([PR #806](https://github.com/nullclaw/nullclaw/pull/806)) 和 OTEL 监控配置的回归修复 ([PR #803](https://github.com/nullclaw/nullclaw/pull/803)) 均已就绪。

这一系列修复覆盖了安全、路由、持久化和监控等多个层面，一旦合并，将显著提升项目的健壮性。

## 4. 社区热点
今日社区讨论相对集中在具体的部署与功能实现细节上，主要体现为以下两点：

*   **Docker 部署问题持续受关注**：Issue [#763](https://github.com/nullclaw/nullclaw/issues/763) 再次活跃，用户在 Docker Agent 入驻的第 8 步遭遇 `KeyWriteFailed` 错误。这反映了用户在容器化部署时对文件系统权限和卷挂载路径配置存在困惑，也侧面印证了今日 PR #801 修复挂载参数问题的紧迫性。
*   **自动化任务调度开发**：PR [#783](https://github.com/nullclaw/nullclaw/pull/783) 涉及的 Cron 功能引发了开发层面的关注。Cron 子代理的引入意味着 NullClaw 正从单纯的对话式助手向具备自主任务调度能力的智能体演进，这是社区非常期待的功能方向。

## 5. Bug 与稳定性
今日报告及修复的 Bug 较多，按严重程度排列如下：

*   **高危（安全/功能性）**：
    *   **Docker 沙箱挂载参数缺失**：检测逻辑跳过了工厂初始化，导致空 `-v` 参数传递，存在安全隐患且影响运行。目前已有修复 PR [#801](https://github.com/nullclaw/nullclaw/pull/801)。
    *   **沙箱检测误判**：Linux 下 `firejail` 和 `bubblewrap` 仅响应版本号但无法实际运行沙箱命令时被误判为可用。已有修复 PR [#805](https://github.com/nullclaw/nullclaw/pull/805)。

*   **中危（数据/路由）**：
    *   **CLI 会话历史丢失**：SQLite 历史记录未正确持久化 CLI 对话。已有修复 PR [#802](https://github.com/nullclaw/nullclaw/pull/802)。
    *   **会话路由错误**：未绑定会话错误地落到了列表首个 Agent 而非 Main Agent。已有修复 PR [#804](https://github.com/nullclaw/nullclaw/pull/804)。

*   **低危（配置/兼容）**：
    *   **OTEL 配置回归**：本地容器主机名被错误拒绝。已有修复 PR [#803](https://github.com/nullclaw/nullclaw/pull/803)。
    *   **用户部署受阻**：Issue [#763](https://github.com/nullclaw/nullclaw/issues/763) 报告的 Docker 交互式入驻写入失败，可能与上述沙箱挂载 Bug 相关。

## 6. 功能请求与路线图信号
*   **任务自动化**：PR [#783](https://github.com/nullclaw/nullclaw/pull/783) 提出的 Cron 子代理引擎和 JSON 输出支持，显示出项目正在增强 "Agent 编排" 能力，允许用户通过数据库调度运行历史和任务队列，这是通向自主智能体的关键一步。
*   **多模型兼容性**：PR [#806](https://github.com/nullclaw/nullclaw/pull/806) 增强了对非标准 OpenAI 兼容端点的容错（404 时回退），表明项目致力于支持更广泛的私有部署 LLM 模型。

## 7. 用户反馈摘要
根据 Issue #763 的反馈，用户在 Docker 环境下配置 Workspace 路径时面临具体的阻碍：
*   **痛点**：交互式配置流程在写入 `/tmp/workspace` 时报错 `KeyWriteFailed`。
*   **场景**：用户尝试通过 Docker Compose 部署并定义工作空间路径。
*   **期望**：期望默认配置能无缝写入，无需繁琐的手动权限调整。

## 8. 待处理积压
*   **Issue [#763](https://github.com/nullclaw/nullclaw/issues/763)**：该 Bug 报告已存在多日，今日虽有更新但尚未关闭。考虑到今日提交的 PR #801 修复了 Docker 挂载参数问题，建议维护者在合并 PR 后重点验证该 Issue 是否随之解决，并给予用户反馈。
*   **PR 积压**：目前有 8 个功能性/修复性 PR 处于 Open 状态，建议维护者尽快进行合并前的最终验证，避免分支逻辑冲突，推动新版本发布。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-12)

## 1. 今日速览
IronClaw 项目今日呈现高强度的开发与测试活跃度，重点集中在 **V2 版本架构升级** 与 **稳定性修复**。过去 24 小时内 PR 更新量达 50 条，Issue 活跃度显著提升（15 条更新），其中大量标记为 `[QA]` 和 `bug_bash`，显示出项目正处于发布前的深度质量攻关阶段。核心开发者 @zmanian、@serrrfirat 等提交了多项关于 Orchestrator（编排器）健壮性、工具调用死循环检测及权限安全的关键修复。尽管无新版本发布，但大量待合并的 XL（超大）规模 PR 表明一次重大版本迭代即将落地。

## 2. 版本发布
无。虽然无正式版本发布，但多项正在合并流程中的 PR 涉及 `staging` 与 `main` 分支的同步 (#2337)，预示新版本发布在即。

## 3. 项目进展
今日进展主要集中在提升智能体的**鲁棒性**与**用户体验**，推进了以下关键模块：

*   **智能体循环与编排优化**：
    *   PR #2338 引入了 `DuplicateToolCallTracker`，能够检测并自动升级连续失败的相同工具调用，防止 Agent 陷入死循环，显著提升了任务执行的稳定性。
    *   PR #2340 解决了 Orchestrator Python 执行循环中的错误计数盲区，增加了连续操作失败的熔断机制。
    *   PR #2339 优化了 LLM 错误处理，将 HTTP 413 错误映射为上下文超限错误，从而触发自动压缩机制，避免了任务直接失败。

*   **架构与安全增强**：
    *   PR #2347 修复了当 Thread 被删除但 Mission 仍活跃时产生的“孤儿审批门控”问题，解决了前后端状态不一致导致的后端阻塞。
    *   PR #1591 加固了审批流程的线程安全性（TOCTOU 漏洞修复），防止并发操作导致审批状态丢失。

*   **功能体验改进**：
    *   PR #2343 为 TUI（终端用户界面）增加了仪表盘面板和可展开模态框，提供了更强大的自省能力。
    *   PR #2348 修复了 Web 端侧边栏显示 Hex Hash ID 而非描述性标题的问题，提升了对话可读性。

## 4. 社区热点
今日讨论最活跃的话题集中在**外部服务集成**与**跨端数据一致性**：

*   **Issue #2230 [OPEN]**: **Twitter/X 连接问题**。用户反馈 MCP 服务需要手动提取浏览器 Cookie 才能连接 Twitter，导致 "Daily Twitter digest" 等用例无法开箱即用。这反映了 MCP 协议在处理 OAuth 复杂认证流程时的用户体验痛点。
*   **Issue #2259 [OPEN]**: **Telegram 端无法访问 Memory/Tools**。用户在 CLI/TUI 中配置的记忆和工具无法在 Telegram 机器人中调用，显示出多渠道（Channel）间的上下文隔离问题，引发了关于数据同步策略的讨论。
*   **PR #2338 [OPEN]**: **工具死循环修复**。该 PR 获得了较高关注，社区成员讨论了如何优雅地注入警告信息而不过度干扰 Agent 的自主决策。

## 5. Bug 与稳定性
今日报告了大量 QA 测试期间的 Bug，按严重程度排列如下：

**严重:**
*   **MCP 激活失败** (Issue #2234): 多个 MCP 服务（Twitter, Transcriptor 等）激活时报 "External service error"，阻断了核心功能的配置。
*   **实例升级失败** (Issue #2346): 从 0.24.0 升级至 0.25.0 时失败且无详细错误日志，严重影响运维体验。
*   **跨渠道隔离** (Issue #2259): 数据库层面的上下文隔离导致 Telegram 用户无法使用通过 CLI 配置的能力。

**中等:**
*   **OAuth 阻断** (Issue #2229): Google Sheets 扩展授权时报 400 错误。
*   **权限记忆失效** (Issue #2345): 工具安装权限请求循环弹出，无法记忆用户批准状态。
*   **Web UI 错误** (Issue #2344): Staging 环境页面加载时出现 TypeError 和 CSP 违规。
*   **飞书/Lark 渠道更新失败** (Issue #2135): WASM 实例化错误，涉及 WIT 版本不匹配问题。

**已有 Fix PR:**
*   Issue #2323 (孤儿审批门控) -> 修复于 PR #2347。
*   Issue #2325 (编排器错误计数) -> 修复于 PR #2340。

## 6. 功能请求与路线图信号
*   **ACP 架构扩展 (Issue #2277)**: 提议支持 ACP-backed 的子线程后端，允许 IronClaw 将任务委托给 Codex、Droid 等外部编码 Agent。这标志着 IronClaw 正从单一智能体向**多智能体协作编排平台**演进。
*   **工具流式传输 (Issue #2274)**: 用户希望在 Responses API 中实时流式传输工具调用过程，以提升 Agent 行为的可观测性。PR #2167 正在部分解决 Responses API 的流式与上下文问题。
*   **Slack Socket Mode (PR #1549)**: 即将合并的功能，支持无需公网 URL 的 WebSocket 连接，极大降低了 Slack 集成的部署门槛。

## 7. 用户反馈摘要
*   **多端同步痛点**: 用户 @gagdiez 在 Issue #2259 中明确表达了对“配置漫游”的期望。目前的架构中，Memory 和 Tools 似乎绑定于特定的 Channel（如 CLI），而非用户账户级别，这导致用户在 Telegram 上需要重新配置或无法使用已有数据，体验割裂。
*   **部署与升级焦虑**: Issue #2346 和 #2135 反映出用户在自托管环境下对版本兼容性（WASM/WIT）和升级路径稳定性的担忧。
*   **QA 反馈积极**: 大量带有 `[QA]` 标签的 Issue 显示测试团队正在高强度验证 V2 版本，虽然暴露了 Bug，但也侧面印证了项目正在快速迭代并积极修复。

## 8. 待处理积压
*   **Issue #1339**: **ARMv7 架构支持缺失**。该 Issue 创建于 3 月中旬，用户尝试在树莓派上编译失败，至今未得到有效解决。随着边缘计算需求的增加，建议维护者评估是否纳入官方支持路线图。
*   **Issue #2135**: **飞书渠道更新受阻**。涉及 WASM 组件模型的版本匹配问题，可能需要底层依赖的同步更新，目前尚未有明确的修复方案。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-12)

## 1. 今日速览
LobsterAI 项目今日保持较高的开发活跃度，主要集中在用户体验优化与平台稳定性建设。过去 24 小时内共有 9 次代码提交记录（基于 PR 活动推断），重点推进了聊天交互细节优化、MCP 模块易用性增强及 Windows 端安装性能提升。社区方面，用户反馈了关于本地模型（Ollama）兼容性的关键问题，表明在私有化部署场景下的稳定性仍需加强。目前暂无新版本发布。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 2 个 PR 合并/关闭，主要集中在构建与安装流程的优化，项目基础体验得到巩固：

*   **Windows 安装体验优化**：PR [#1633](https://github.com/netease-youdao/LobsterAI/pull/1633) 与 [#1630](https://github.com/netease-youdao/LobsterAI/pull/1630) 已关闭/合并。通过引入“重命名-异步删除”策略替代原有的同步删除目录操作，解决了 Windows 平台 NSIS 覆盖安装时因删除大量文件（如 node_modules）导致安装界面卡顿的问题，显著提升了安装流畅度。

**待合并的重要功能（Open PRs）：**
*   **交互体验升级**：PR [#1636](https://github.com/netease-youdao/LobsterAI/pull/1636) 提交了“滚动到底部”悬浮按钮功能，解决了长对话场景下用户查看历史后难以快速返回最新消息的痛点。
*   **全局搜索修复**：PR [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634) 修复了搜索范围被当前 Agent 隐式限制的 Bug，将搜索行为纠正为符合用户预期的“全局搜索”。
*   **MCP 快速配置**：PR [#1631](https://github.com/netease-youdao/LobsterAI/pull/1631) 新增了 MCP 服务的快速添加模版，降低了用户配置 File System、SQLite 等常用服务的门槛。

## 4. 社区热点
今日社区讨论主要围绕本地模型集成展开：

*   **Ollama 本地模型兼容性问题** ([#1635](https://github.com/netease-youdao/LobsterAI/issues/1635))：该 Issue 在今日引发关注。用户报告 Ollama 的 Qwen3 到 Gemma4 等主流模型均无法使用，并对比了 Cherry Studio 客户端表现正常。这反映了用户对 LobsterAI 作为 AI 客户端在底层模型协议适配层面的高期待，也暴露了当前版本在本地模型调用上的不稳定性。
*   **本地模型下的 Skill 生态割裂** ([#1632](https://github.com/netease-youdao/LobsterAI/issues/1632))：用户反馈切换至本地模型后原有 Skill 不可用。这揭示了项目在“模型-Skill”绑定机制上可能存在硬编码或强依赖云端特定架构的问题，社区期待更灵活的 Skill 迁移能力。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在本地模型支持层面，按严重程度排序：

1.  **[严重] Ollama 模型调用失败** ([#1635](https://github.com/netease-youdao/LobsterAI/issues/1635))
    *   **现象**：使用 Ollama 运行 Qwen3、Gemma4 等模型时报错，导致本地推理功能不可用。
    *   **状态**：Open，暂无 Fix PR。
2.  **[中等] Skill 兼容性缺失** ([#1632](https://github.com/netease-youdao/LobsterAI/issues/1632))
    *   **现象**：切换本地模型后 Skill 失效，提示无法使用。
    *   **状态**：Open，暂无 Fix PR。
3.  **[已修复] 搜索逻辑错误** ([#1634](https://github.com/netease-youdao/LobsterAI/pull/1634))
    *   **现象**：全局搜索被限制为当前 Agent 搜索，影响检索效率。
    *   **状态**：Fix PR 已提交，待合并。

## 6. 功能请求与路线图信号
结合 Issues 与 PRs 分析，项目近期的演进方向呈现以下信号：

*   **个性化与易用性**：PR [#1629](https://github.com/netease-youdao/LobsterAI/pull/1629)（头像设置）与 PR [#1631](https://github.com/netease-youdao/LobsterAI/pull/1631)（MCP 模版）显示项目正在向“个人助理”方向深耕，强调用户个性化配置与开箱即用体验。
*   **Agent 协作增强**：长期 PR [#240](https://github.com/netease-youdao/LobsterAI/pull/240)（Workflow 增强）今日有更新，提出基于职责的 Agent 任务流和 soul.md 概念。虽然处于 Stale 状态，但表明社区对多 Agent 协作有强烈需求，可能成为未来版本的重要路线图。
*   **预期纳入版本**：预计“滚动到底部”按钮 (#1636) 和“全局搜索修复” (#1634) 将很快合入主分支，解决基础交互痛点。

## 7. 用户反馈摘要
从今日 Issues 中提炼出的用户心声：

*   **痛点**：**本地模型支持不稳定**是核心槽点。用户期望 LobsterAI 能像其他主流客户端（如 Cherry Studio）一样稳定调用 Ollama，当前版本存在报错和兼容性断层。
*   **场景**：用户倾向于在本地模型环境下复用云端已有的 Skill 能力，目前的隔离状态造成了体验割裂。
*   **期待**：用户希望软件具备标准的聊天交互范式（如 #1636 提到的微信、Discord 式滚动交互），对非标准交互容忍度较低。

## 8. 待处理积压
*   **长期功能性 PR 待处理**：PR [#240](https://github.com/netease-youdao/LobsterAI/pull/240)（Feat/workflow enhancement）自 3 月初开启，今日虽有更新但仍处于 Stale/Open 状态。该 PR 涉及复杂的多 Agent 协作逻辑，建议维护者重点关注，明确是否将其纳入核心开发计划，避免社区贡献流失。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-12)

## 1. 今日速览
Moltis 项目今日呈现出极高的维护活跃度与迭代速度。过去 24 小时内，项目成功关闭了 8 个 Issues 并合并了 7 个 PRs，显示出核心团队对社区反馈的快速响应能力。重点修复了配置忽略、安全策略失效等关键 Bug，并引入了原生文件系统工具与确定性上下文压缩机制。整体来看，项目正从“功能扩展”向“稳定性增强与架构优化”阶段过渡，社区贡献活跃，健康度优秀。

## 2. 版本发布
- **无新版本发布**。尽管代码库有重大更新（如 PR #653, #663 等），今日未发布新的 Release 版本，预计相关变更将在近期打包发布。

## 3. 项目进展
今日共有 7 个 PR 合并，显著提升了系统的安全性与功能性：

*   **上下文管理优化**：PR [#653](https://github.com/moltis-org/moltis/pull/653) 引入了可插拔的四模式压缩系统，用确定性算法替代了昂贵的 LLM 摘要，大幅降低了长对话场景下的 Token 成本。
*   **安全性修复**：PR [#662](https://github.com/moltis-org/moltis/pull/662) 修复了 `approval_mode = "off"` 时 `exec` 白名单被绕过的严重漏洞；PR [#663](https://github.com/moltis-org/moltis/pull/663) 修复了 `[skills] enabled = false` 配置无效的问题。
*   **用户体验改进**：PR [#665](https://github.com/moltis-org/moltis/pull/665) 修复了远程部署初始化时的死锁页面，引导用户进入配置向导；PR [#644](https://github.com/moltis-org/moltis/pull/644) 在设置中增加了 Projects 导航。
*   **Hook 机制增强**：PR [#645](https://github.com/moltis-org/moltis/pull/645) 在 Hook 载荷中增加了通道元数据，解决了开发者需手动维护会话映射的痛点。

## 4. 社区热点
今日讨论热度最高的议题集中在功能扩展与架构改进：

*   **原生文件系统工具支持 ([#657](https://github.com/moltis-org/moltis/issues/657))**：获得 2 个 👍，用户强烈建议摆脱对 `exec("cat ...")` 的依赖，转向结构化的原生文件操作。已有相关 PR [#666](https://github.com/moltis-org/moltis/pull/666) 提交，显示社区与开发方向高度一致。
*   **Nostr 协议支持 ([#668](https://github.com/moltis-org/moltis/issues/668))**：用户新增 Feature Request，请求支持 Nostr DM（私信）作为新的通信通道，表明去中心化社交协议正成为用户关注的新方向。

## 5. Bug 与稳定性
今日修复了多个影响配置生效与运行稳定性的 Bug，部分已立即合并修复：

*   **[高危] 安全策略绕过 ([#654](https://github.com/moltis-org/moltis/issues/654))**：当关闭审批模式时，`exec` 工具的白名单被静默忽略。**状态：已修复 (PR #662)。**
*   **[中危] Agent 死循环 ([#658](https://github.com/moltis-org/moltis/issues/658))**：Runner 在遇到空参数工具调用时未进行校验，导致 25 次迭代死循环。**状态：已修复 (PR #664 待合并/修复中)。**
*   **[中危] 配置静默失效 ([#656](https://github.com/moltis-org/moltis/issues/656), [#655](https://github.com/moltis-org/moltis/issues/655))**：预设工具策略未应用于主会话，且 Skills 开关配置被忽略。**状态：均已修复 (PR #661, #663)。**
*   **[低危] 语音转录异常 ([#632](https://github.com/moltis-org/moltis/issues/632))**：空语音转录文本被错误发送给 LLM 导致回复异常。**状态：已关闭。**

## 6. 功能请求与路线图信号
*   **原生工具链强化**：Issue [#657](https://github.com/moltis-org/moltis/issues/657) 与 PR [#666](https://github.com/moltis-org/moltis/pull/666) 遥相呼应，项目正致力于移除对 Shell 环境的强依赖，预计下一版本将原生支持 `Read/Write/Edit/Glob` 等文件操作。
*   **记忆系统重构**：PR [#660](https://github.com/moltis-org/moltis/pull/660) 提出的记忆样式枚举显示，团队正计划让用户更细粒度地控制 Agent 记忆机制。
*   **多渠道接入**：Issue [#548](https://github.com/moltis-org/moltis/issues/548)（代理支持）与 Issue [#668](https://github.com/moltis-org/moltis/issues/668)（Nostr DM）表明用户对网络层与协议层的扩展需求日益增长。

## 7. 用户反馈摘要
用户反馈主要集中在**配置行为的一致性**与**工具调用的鲁棒性**上：
*   **配置痛点**：多位用户报告在 `moltis.toml` 中配置的策略（如 Skills enabled, Presets tools）未能按预期生效，这反映出文档描述与运行时行为存在偏差，目前团队已通过 PR 修复并增强了提示信息。
*   **初始化障碍**：远程部署的新手用户常因“Authentication Not Configured”页面陷入停滞，新合并的引导向导 PR 将显著改善初次部署体验。
*   **工具能力**：用户对 `exec` 工具的局限性（如无法处理复杂文件编辑）表示不满，期待原生文件工具的落地。

## 8. 待处理积压
*   **PR #666 (Native Filesystem Tools)**：作为高需求功能的实现，包含 12 个提交，目前处于 Open 状态，建议维护者优先 Review 以尽快合并。
*   **PR #664 (Loop Detection Fix)**：针对死循环 Bug 的修复，关键度高，建议尽快合以保障 Runner 稳定性。
*   **Issue #668 (Nostr Support)**：作为新渠道请求，目前尚无 Assignee，建议维护者确认是否纳入 Roadmap。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-12)

## 1. 今日速览
CoPaw 项目今日保持高热度活跃状态，社区反馈与贡献并行推进。过去24小时内，Issues 更新量达 23 条，主要集中在技能系统优化与稳定性问题上；PR 更新 13 条，其中 1 条文档更新已关闭，另有 12 条功能增强与修复 PR 处于待合并状态，显示出社区贡献活跃但审核压力尚存。项目当前核心关注点在于“技能调用的稳定性”以及“本地化部署体验（Windows/GPU）”，用户对生产环境可用性的诉求明显增强。整体来看，项目处于功能快速迭代与缺陷修复并行的关键阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日仅有 1 个 PR 被关闭/合并，但有多项关键 PR 正在积极推进中，主要集中在生态兼容、用户体验优化与架构增强：

- **[CLOSED] PR #3263**: 重构官网文档，更新贡献者列表与 FAQ。这是今日唯一落地的更新，属于维护性改进。
- **[OPEN] PR #3276**: 新增智谱 AI GLM-4V 系列视觉模型支持，修复了此前视觉模型被误判为纯文本模型的问题，扩展了多模态能力。
- **[OPEN] PR #3257**: 针对 Issue #2945，将 GUI 中的工具批准操作从文本输入改为按钮点击，显著提升交互体验，是解决用户“输入无效”痛点的关键优化。
- **[OPEN] PR #3117**: 引入语义化技能路由功能，旨在解决技能过多时的上下文 Token 消耗问题，提升智能体响应效率。
- **[OPEN] PR #3271**: 社区贡献者新增“头脑风暴”、“系统化调试”等 3 个实用技能，丰富了技能生态。

## 4. 社区热点
今日讨论热度最高的话题集中在**技能系统的交互与稳定性**，反映了用户从“能用”向“好用、稳定”转变的需求：

- **Issue #1403 (👍 0, 评论 5)**: 飞书消息去重问题。这是一个长期存在的问题，用户反馈消息被多次处理，严重影响生产环境集成，急需官方介入修复。
- **Issue #3011 (👍 0, 评论 5)**: 使用 Qwen3 Coder Plus 模型时长任务静默停止。用户反馈在代码迭代任务中模型无故停止，必须人工干预才能继续，严重阻碍自动化流程，是当前稳定性反馈的焦点。
- **Issue #2902 (👍 0, 评论 3)**: 呼吁增强技能调用的确定性。用户指出当前技能调用存在“随机性”和“遍历式”问题，建议增加强制调用选项以提升生产环境表现。

## 5. Bug 与稳定性
今日报告的 Bug 涵盖后端逻辑、UI 交互及模型连接，部分已有对应修复 PR：

**严重 - 影响核心流程：**
- **Issue #3011**: 长任务执行中途静默停止，前后端无报错。涉及特定模型 (qwen3 coder plus)，属于严重的稳定性隐患。暂无修复 PR。
- **Issue #3142**: 禁用的技能仍被智能体读取和使用。这是严重的权限/逻辑漏洞，破坏了用户对技能管理的信任。暂无修复 PR。
- **Issue #3275**: 后台任务在 Agent 重载时被意外取消，影响 `--background` 模式的可用性。

**中等 - 影响体验或特定功能：**
- **Issue #3262**: Telegram 机器人工具批准通知串台，且英文模式下出现中文文本。涉及多渠道隔离与国际化问题。
- **Issue #3272**: Gemini API 连接测试成功但实际使用报错。
- **Issue #1403**: 飞书渠道消息重复处理。

**轻微 - UI/UX：**
- **Issue #3265**: 暗黑模式下置顶按钮对比度过低。
  - **Fix PR #3267**: 已提交修复，调整了 CSS 变量以适配暗黑模式。

## 6. 功能请求与路线图信号
用户对“生产级”能力的呼声高涨，以下请求可能成为后续版本重点：

- **技能确定性调用 (Issue #2902, #2270)**: 用户强烈建议引入类似 `@skill` 或 `/skill` 的显式调用机制，而非完全依赖模型决策。
  - *信号*: PR #3117 正在通过语义路由优化技能选择，但尚未完全满足“用户指定”的需求。
- **一键工具批准 (Issue #2945 -> PR #3257)**: 用户希望 GUI 操作更便捷。
  - *信号*: PR #3257 已实现按钮化，有望在下个版本合并。
- **本地化与离线能力 (Issue #3269)**: Windows 下 GPU 调用失败及无网络无法启动的问题，是阻碍 CoPaw 成为“个人 AI 伙伴”的关键痛点。
- **平台扩展 (Issue #3266)**: 请求支持 Windows on ARM (Snapdragon X Elite)，顺应硬件发展趋势。
- **记忆增强 (Issue #3264)**: 建议接入阿里云记忆库实现长期记忆，反映出用户对长上下文管理的高阶需求。

## 7. 用户反馈摘要
从今日 Issues 中提炼的用户情绪与痛点如下：
- **技能管理痛点集中**: 用户对技能系统的“不可控”感到困扰，包括禁用无效 (#3142)、选择不持久 (#3088)、调用随机 (#2902)。这表明现有的技能调度逻辑亟需重构或增加用户可控选项。
- **本地部署体验不佳**: Windows 用户反馈无法调用 GPU (#3269)，且强制联网启动，这与“个人 AI 助手”的定位存在冲突。
- **自动化能力受质疑**: 用户反馈浏览器自动化容易触发反爬 (#3261)，长任务执行中断 (#3011)，对自动化能力的可靠性表示担忧。
- **交互细节改进**: 暗黑模式 UI 问题 (#3265)、批准操作繁琐 (#2945) 等细节问题影响了用户体验满意度。

## 8. 待处理积压
- **Issue #1403 (Mar 13)**: 飞书消息去重问题已持续一个月，评论数达 5 条，至今未关闭，建议优先修复以恢复渠道稳定性。
- **PR #1192 (Mar 10)**: OpenRouter 提供商支持 PR 已开启超过一个月，涉及模型过滤等高级功能，建议加快 Review 进度以丰富模型生态。
- **PR #2432 (Mar 27)**: 聊天历史发送者身份与时间戳显示功能 PR 已开启半个月，等待合并，该功能对对话追溯体验有显著提升。

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