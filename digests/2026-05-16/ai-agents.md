# OpenClaw 生态日报 2026-05-16

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-16 03:27 UTC

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

# OpenClaw 项目动态日报 (2026-05-16)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，社区交互频繁，单日 Issues 更新达 500 条，PR 更新同样达到 500 条，其中 69 个 PR 已合并/关闭。项目发布频率稳定，今日连发两个 Beta 版本，重点优化了 CLI 引导流程的本地化体验及 Agent 启动配置。核心开发者正集中精力修复多通道下的消息投递与稳定性问题，但也引入了一些新的回归问题（如 Discord 频道加载失败）。整体来看，项目处于快速迭代期，功能增强与缺陷修复并行推进，但代码稳定性面临一定挑战。

## 2. 版本发布
今日发布两个 Beta 版本，主要涉及维护者工具链优化与核心运行时功能增强。

*   **v2026.5.16-beta.1**
    *   **主要更新**：将 Crabbox 技能默认配置路由至代理的 AWS 配置，优化了维护者工具链；CLI/引导流程增加了对英语和简体中文的本地化支持。
    *   **影响**：显著提升了中文用户的上手体验，降低了非英语用户的使用门槛。
    *   **链接**：[openclaw 2026.5.16-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.1)

*   **v2026.5.14-beta.2**
    *   **主要更新**：在通道轮次构造中添加了标准化的命令轮次事实，并为插件上下文暴露了辅助接口；支持针对 `contextInjection`、`bootstrapMaxChars` 等参数进行单 Agent 级别的启动配置覆盖。
    *   **影响**：增强了 Agent 的上下文控制粒度，为复杂场景下的 Agent 调优提供了更灵活的配置能力。
    *   **链接**：[openclaw 2026.5.14-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.14-beta.2)

## 3. 项目进展
今日共关闭/合并 69 个 PR，主要集中在修复关键 Bug 和增强系统集成能力。

*   **性能与稳定性修复**：成功修复了 Agent 启动耗时 3 分钟以上的严重性能问题 ([#77532](https://github.com/openclaw/openclaw/issues/77532))，以及 Telegram 隔离入口的死锁问题 ([#82274](https://github.com/openclaw/openclaw/issues/82274))。
*   **模型与后端兼容性**：解决了 OpenRouter 下 DeepSeek V4 模型在工具调用后的 500 错误 ([#82150](https://github.com/openclaw/openclaw/issues/82150))，以及小米 MiMo 提供商的会话重放失败问题 ([#82385](https://github.com/openclaw/openclaw/issues/82385))。
*   **功能增强**：新增手动 Cron 运行的等待模式 ([PR #81929](https://github.com/openclaw/openclaw/pull/81929))，支持容器化场景下的优雅停机；修复了 CLI 模式下 Ollama 丢失 Persona 的回归问题 ([#81955](https://github.com/openclaw/openclaw/issues/81955))。

## 4. 社区热点
今日社区讨论焦点集中在 MCP 工具安全性及多通道消息处理的可靠性上。

*   **[#78308 [Feature]: Channel-mediated approval for MCP tool calls](https://github.com/openclaw/openclaw/issues/78308)**
    *   **热度**：评论 10 条
    *   **分析**：用户提议为 MCP 服务器引入通道介导的批准流程（`/approve <id>`），以解决外部工具（如发送邮件、写入文件）调用时的安全性盲区。这反映了用户对 AI 智能体执行敏感操作的强烈管控需求，社区正在探讨具体的信封协议实现方案。

*   **[#78016 [Feature]: Voice messages to agent don't work on Matrix](https://github.com/openclaw/openclaw/issues/78016)**
    *   **热度**：评论 9 条
    *   **分析**：Matrix 通道的语音消息处理存在缺陷，智能体收到音频后未能正确转写而是直接回复。随着多模态交互需求的增加，用户对跨平台语音支持的关注度提升。

*   **[#77723 Bug: memory-core Dreaming cleanup still leaves narrative session trajectory residue](https://github.com/openclaw/openclaw/issues/77723)**
    *   **热度**：评论 3 条
    *   **分析**：长期运行中的内存清理机制未能完全清除会话残留，引发磁盘空间与健康状态的担忧。这涉及到 OpenClaw 核心的记忆管理架构，讨论较为深入。

## 5. Bug 与稳定性
今日报告了多个影响使用的回归问题，主要集中在特定版本升级后的兼容性。

*   **严重**：
    *   **[#81955 Ollama Agent 丢失 Persona](https://github.com/openclaw/openclaw/issues/81955)** (已关闭)：更新至 2026.5.12 后，使用 Ollama 后端的 Agent 无法加载 Identity/Soul 文件。现已修复。
    *   **[#77930 Discord 频道加载失败](https://github.com/openclaw/openclaw/issues/77930)**：2026.5.4 及后续 Beta 版本导致 Discord 频道无法加载，为严重的回归问题，目前仍在排查中。
    *   **[#81934 macOS 多重功能失效](https://github.com/openclaw/openclaw/issues/81934)**：更新后导致 Gmail 发送、Dropbox 访问及 PDF 生成失败。

*   **中等**：
    *   **[#81525 媒体理解静默失败](https://github.com/openclaw/openclaw/issues/81525)**：系统未校验用户声明的 Vision 模型能力即路由图片，导致无报错但处理失败。
    *   **[#77576 Telegram 群组消息路由错误](https://github.com/openclaw/openclaw/issues/77576)**：群组消息触发会话后，回复被错误发送至 Webchat Control UI，而非 Telegram 群组。

## 6. 功能请求与路线图信号
*   **MCP 安全网关**：基于 Issue #78308 的讨论，社区强烈希望在下一版本中实现对 MCP 工具调用的显式审批机制，这可能成为近期安全模块的重点。
*   **本地化文档支持**：Issue #71301 提议随版本发布匹配的离线文档包，以便 Agent 在无网环境下进行引导式学习。鉴于今日 CLI 本地化的进展，该功能有望被纳入后续版本。
*   **上传限制配置化**：Issue #71142 请求将 Control UI 的 5MB 上传限制改为可配置，以适应大文件分析场景。

## 7. 用户反馈摘要
*   **痛点**：
    *   **版本升级风险**：多位用户反馈升级到最新 Beta 版后遇到严重功能失效（如 Discord 断连、Ollama 失效），建议用户在非生产环境充分测试。
    *   **通道可靠性**：Telegram 和 Slack 的消息投递问题依然是投诉高发区，特别是流式传输截断和群组回复错乱。
    *   **引导流程**：新用户反馈 Agent 启动前的 Bootstrap 阶段耗时过长（已在新版本中修复），且语言支持不足（今日已支持中文）。

*   **亮点**：
    *   对新模型（如 DeepSeek V4, MiMo）的快速响应支持获得技术用户认可。
    *   CLI 引导流程支持中文后，国内开发者社区活跃度明显提升。

## 8. 待处理积压
以下高关注度 Issue 长期未获解决或进展缓慢，建议维护者关注：

*   **[#71412 stopChannel 僵尸任务](https://github.com/openclaw/openclaw/issues/71412)**：通道中止超时后遗留僵尸任务，导致健康监控失灵。该问题隐蔽性强，对长期运行的服务稳定性影响大。
*   **[#78461 插件元数据重扫性能问题](https://github.com/openclaw/openclaw/issues/78461)**：在模型归一化过程中重复扫描插件元数据，可能导致性能抖动，建议优化缓存策略。

---

## 横向生态对比

# AI 智能体开源生态横向对比分析日报 (2026-05-16)

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于从"功能爆发"向"治理与稳定"转型的关键期。**模型兼容性**（特别是 DeepSeek V4、MiMo 等推理模型）成为今日各项目的共同痛点，大量修复集中于 `reasoning_content` 的解析与适配。**安全性**需求显著升级，MCP 工具调用的权限管控与沙箱逃逸防护成为核心议题。同时，用户对**上下文精细控制**（Token 成本管理、会话清洗）的焦虑日益凸显，推动项目方加速重构记忆与会话管理模块。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PRs 活跃度 | 发布情况 | 健康度评估 | 核心动态摘要 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 更新 500 (极高) | 更新 500 / 合并 69 | 2 Beta (v2026.5.16) | ⚠️ 高迭代风险 | 中文本地化落地，但 Discord/Ollama 回归严重，稳定性告急。 |
| **NanoBot** | 关闭 52 (高效) | 合并 15 | 无 | ✅ 优秀 | 大规模文档注释完善，核心能力（LongTask/Plan）增强，安全修复及时。 |
| **Zeroclaw** | 更新 24 | 更新 50 / 合并 3 | 无 (v0.8.0 开发中) | ⚠️ 质量承压 | SOP 模块文档与实现严重不符引争议，Skills 安装现阻断性 Bug。 |
| **Hermes Agent**| 更新 50 | 更新 50 / 合并 13 | 无 | 🟡 中等偏上 | 架构重构中（LCM 记忆），DeepSeek 兼容性问题频发，数据安全漏洞需关注。 |
| **IronClaw** | 中等 | 更新 50 / 合并 28 | v0.28.2 | ✅ 高产 | "Reborn" 架构大规模合并，生产就绪度提升，但依赖发布滞后阻塞下游。 |
| **NanoClaw** | 关闭 45 (大扫除) | 关闭 43 (大扫除) | **v2.0.63** | ✅ 健康 | 确立规范化发布流程，清理积压，用户对模型锁定焦虑显著。 |
| **CoPaw** | 更新 24 / 关闭 10 | 更新 39 / 合并 23 | 无 | 🟡 活跃 | 修复身份混淆与明文配置漏洞，社区强烈呼吁 Token 消耗感知功能。 |
| **PicoClaw** | 更新 11 | 更新 24 / 合并 11 | Nightly | 🟡 迭代中 | 多模态（音频）与推理模型适配快，但 Android 端存在严重数据访问 Bug。 |
| **LobsterAI** | 低 | 更新 35 / 合并 32 | 无 | 🟡 清理期 | 聚焦 UI/UX 优化，清理历史 PR，但爆出配置强制覆盖引发用户不满。 |
| **Moltis** | 关闭 4 (清零) | 合并 6 | 无 | ✅ 极佳 | 维护效率极高，文档重构与安全加固并重，无积压 Bug。 |
| **NullClaw** | 新增 2 | 无活动 | 无 | 🔴 停滞 | 活跃度极低，核心调度功能现 Bug 无修复，社区响应迟缓。 |

## 3. OpenClaw 在生态中的定位

*   **生态规模参照系**：OpenClaw 是目前生态中**流量最大、迭代最快**的项目，其单日 Issues/PRs 更新量（500条）远超同类项目（通常在 50 条以内），是社区热度的核心风向标。
*   **技术路线特征**：走"快速迭代、激进发布"路线。今日连发两个 Beta 版本并支持中文 CLI，显示出其急于抢占市场份额和全球化用户（特别是非英语用户）的策略。相比之下，NanoBot 和 Moltis 更注重代码质量与文档建设，IronClaw 则专注于底层架构重构。
*   **优势与隐忧**：优势在于社区活跃度高、模型支持广（快速跟进 DeepSeek V4/MiMo）。隐忧在于**质量管控滞后**，频繁引入回归 Bug（如 Discord 频道加载失败、Ollama Persona 丢失），用户体验处于"痛并快乐着"的状态，需警惕"速度换质量"带来的信任透支。

## 4. 共同关注的技术方向

*   **推理模型适配危机** (OpenClaw, PicoClaw, Hermes, CoPaw)
    *   **现象**：DeepSeek V4 和小米 MiMo 等推理模型普及后，各项目普遍出现 `reasoning_content` 丢失、死循环或 Token 计费异常问题。
    *   **诉求**：社区急需建立统一的推理内容处理标准，避免模型"思考"内容在多轮对话中被丢弃或干扰上下文。
*   **工具调用的安全边界** (OpenClaw, Zeroclaw, CoPaw, IronClaw)
    *   **现象**：OpenClaw 讨论 MCP 工具审批流，Zeroclaw 修复路径扫描误杀，CoPaw 引入备份信任机制，IronClaw 修复工具安装漏洞。
    *   **诉求**：从"能跑工具"进阶到"安全跑工具"，防止 Agent 误操作文件系统或执行恶意命令，沙箱与权限审批成为标配。
*   **Token 焦虑与上下文管理** (NanoClaw, CoPaw, OpenClaw)
    *   **现象**：CoPaw 用户呼吁单轮会话删除与 Token 统计，OpenClaw 用户反馈 Bootstrap 耗时过长，NanoClaw 用户关注记忆残留。
    *   **诉求**：用户不再满足于无限上下文，而是迫切需要精细化控制上下文窗口，以平衡成本与性能。

## 5. 差异化定位分析

*   **OpenClaw vs NanoBot vs NanoClaw**：
    *   **OpenClaw** 像是生态中的 **"Chrome"**：功能最全、插件最多、更新最快，但也最吃资源，偶尔崩溃。
    *   **NanoBot** 像是 **"Firefox"**：稳健、注重代码质量与文档，适合开发者进行二次开发。
    *   **NanoClaw** 像是 **"Brave"**：主打极简与安全，强调防封禁与隐私，吸引对成本和账号安全敏感的极客用户。
*   **IronClaw vs Zeroclaw**：
    *   **IronClaw** 致力于 **"Reborn" 架构**，重构底层 Runtime 与安全模型，瞄准企业级生产环境，技术门槛高。
    *   **Zeroclaw** 在 v0.8.0 前夜聚焦 **SOP（标准作业程序）与 Skills**，试图通过流程标准化解决 Agent 可靠性问题，但目前受困于文档与实现的不一致。
*   **LobsterAI vs PicoClaw**：
    *   **LobsterAI** 垂直于 **办公场景**，强化 PPT 预览、多标签页与 IM 适配，甚至不惜牺牲配置灵活性（强制模型重定向），带有鲜明的商业化产品色彩。
    *   **PicoClaw** 侧重 **边缘与移动端**，主攻本地模型与多模态，填补了移动端 AI 助手的空白。

## 6. 社区热度与成熟度

*   **快速迭代期 (高风险)**：OpenClaw, Zeroclaw。流量巨大但质量波动剧烈，处于功能膨胀与 Bug 修复的拉锯战中。
*   **质量巩固期 (高健康)**：NanoBot, Moltis, NanoClaw。虽然热度不如 OpenClaw，但 Issues 关闭率高，发布规范，文档完善，适合作为生产底座。
*   **架构演进期**：IronClaw, Hermes Agent。处于底层重构的深水区，近期产出多为底层 PR，上层功能暂时让位。
*   **垂直探索期**：LobsterAI, PicoClaw。在特定场景（办公、移动端）寻找突破口，活跃度中等但方向明确。
*   **维护停滞期**：NullClaw, TinyClaw。需警惕其可持续性，不建议用于核心生产环境。

## 7. 值得关注的趋势信号

1.  **模型适配已成为"隐形杀手"**：今日多个项目（Hermes, PicoClaw, OpenClaw）均因新推理模型格式不兼容导致严重 Bug。**建议开发者**：在接入新模型 Provider 时，必须建立针对 `reasoning_content` 的专项兼容性测试，不能仅依赖 OpenAI 兼容层。
2.  **MCP 安全协议迫在眉睫**：OpenClaw 的 MCP 审批流讨论与 Zeroclaw 的路径安全修复表明，社区正从"能用"向"敢用"转变。**建议开发者**：优先实现 Tool Call 的沙箱隔离与用户显式授权机制，这将成为下半年 Agent 项目的标配。
3.  **用户的"成本敏感"觉醒**：CoPaw 与 NanoClaw 的反馈显示，用户对 Token 的消耗已从"无感"变为"焦虑"。**建议开发者**：在 UI 中增加 Token 计数器、会话裁剪与低成本低模型路由功能，这将是提升用户粘性的关键抓手。
4.  **文档与实现的"信任危机"**：Zeroclaw SOP 模块的"文档欺诈"问题警示所有项目，在版本发布前务必进行文档一致性审查。**建议决策者**：将文档验收纳入 PR 合并的 DOD（Definition of Done）标准，避免社区信任流失。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-16)

## 1. 今日速览
NanoBot 项目今日呈现出极高的维护活跃度与社区贡献热情。过去 24 小时内，项目成功关闭了 **52 个 Issues** 并合并了 **15 个 PRs**，显示出维护团队对社区反馈的高效响应。特别值得关注的是，今日有贡献者发起了大规模的文档与代码注释完善工作，显著提升了项目的可维护性。功能层面，Agent 的任务规划能力与安全性得到加强，多个关键 Bug 修复已合入主分支。虽然暂无新版本发布，但大量修复与功能积压预示着下一次版本更新将包含重要改进。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 15 个 PR 被合并，主要进展集中在 **Agent 核心能力增强**、**安全性修复** 及 **文档体系建设** 三个方面：

*   **Agent 能力跃升**：
    *   合并了 `LongTaskTool` ([PR #3460](https://github.com/HKUDS/nanobot/pull/3460)) 与 `/goal` 命令支持 ([PR #3788](https://github.com/HKUDS/nanobot/pull/3788))，增强了 Agent 处理长时序任务与目标导向任务的能力。
    *   合并了 Prompt 缓存键稳定性修复 ([PR #3793](https://github.com/HKUDS/nanobot/pull/3793))，优化了 Codex 提供商的缓存命中率，降低成本。
    *   新增 `plan` 工具的 PR ([PR #3791](https://github.com/HKUDS/nanobot/pull/3791)) 正在审查中，旨在引入任务分解能力。

*   **安全性与稳定性修复**：
    *   修复了本地媒体附件的路径限制漏洞 ([PR #3842](https://github.com/HKUDS/nanobot/pull/3842))，防止 LLM 控制下的路径遍历风险。
    *   修复了飞书通道媒体文件下载的文件名安全问题 ([PR #3789](https://github.com/HKUDS/nanobot/pull/3789))。
    *   解决了 WebUI 预加载 Markdown 导致的带宽浪费问题 ([PR #3782](https://github.com/HKUDS/nanobot/pull/3782))。

*   **文档与代码质量**：
    *   贡献者 @xianqiangfu 完成了近 20 个文档与注释相关的 Issue 任务 ([Issue #3818](https://github.com/HKUDS/nanobot/issues/3818) 至 [Issue #3839](https://github.com/HKUDS/nanobot/issues/3839))，涵盖架构图绘制、中文注释添加及开发指南编写，极大降低了新开发者的上手门槛。

## 4. 社区热点
*   **最热 Issue - WebUI 显示 Bug**：
    [Issue #3790](https://github.com/HKUDS/nanobot/issues/3790) 获得了 9 条评论。用户反馈升级最新源码后 WebUI 会话打印内容显示错乱，需刷新恢复。这反映出前端渲染层在最新提交中可能存在兼容性回归，是当前用户痛点最集中的问题。

*   **长期关注 - 密钥安全存储**：
    [Issue #2172](https://github.com/HKUDS/nanobot/issues/2172) 再次活跃，用户呼吁支持从文件或命令（如 1Password）读取密钥，而非明文存储在 `config.json`。这是社区长期关注的安全痛点，目前标记为 `good first issue`，等待社区贡献。

*   **新功能提案 - Signal 通道**：
    [PR #3852](https://github.com/HKUDS/nanobot/pull/3852) 提议增加 Signal 消息通道支持，支持 DM、群聊及 Markdown 转换，显示了项目生态集成能力的持续扩展。

## 5. Bug 与稳定性
*   **严重 (已修复)**：
    *   **路径遍历漏洞**：已通过 [PR #3842](https://github.com/HKUDS/nanobot/pull/3842) 修复，解决了在工作空间限制模式下可能越权访问本地文件的问题。
    *   **Brave 搜索限流**：已通过 [PR #3840](https://github.com/HKUDS/nanobot/pull/3840) 修复，增加了 HTTP 429 重试机制。

*   **高优先级 (待处理)**：
    *   **WebUI 渲染错乱**：[Issue #3790](https://github.com/HKUDS/nanobot/issues/3790) 仍处于 Open 状态，影响用户前端体验，需尽快排查是否与 [PR #3782](https://github.com/HKUDS/nanobot/pull/3782) 的改动相关。

*   **一般问题 (已修复)**：
    *   WebUI 渲染 Bug ([Issue #3848](https://github.com/HKUDS/nanobot/issues/3848)) 已关闭。
    *   Windows UNC 路径支持 ([Issue #3764](https://github.com/HKUDS/nanobot/issues/3764)) 已合并修复。

## 6. 功能请求与路线图信号
*   **任务规划与分解**：随着 [PR #3791](https://github.com/HKUDS/nanobot/pull/3791) (`plan` tool) 的提交，项目正朝着支持复杂任务规划的方向演进，可能成为下个版本的核心特性。
*   **生命周期管理**：Gateway 生命周期通知钩子 ([PR #3373](https://github.com/HKUDS/nanobot/pull/3373)) 已合入，增强了服务监控能力。
*   **技能持久化**：[PR #3847](https://github.com/HKUDS/nanobot/pull/3847) 提出了 `skill_load` 工具，旨在解决多轮对话中技能内容丢失的问题，进一步完善了 Agent 的记忆机制。

## 7. 用户反馈摘要
*   **痛点**：用户对 WebUI 的稳定性较为敏感，特别是打印功能异常 ([Issue #3790](https://github.com/HKUDS/nanobot/issues/3790)) 直接影响了使用体验。
*   **安全诉求**：开发者对密钥明文存储表示担忧 ([Issue #2172](https://github.com/HKUDS/nanobot/issues/2172))，希望集成更现代的密钥管理方案（如环境变量、外部命令获取）。
*   **积极反馈**：社区对 Gateway 的 `on_start/on_stop` 钩子功能表示欢迎，解决了后台服务状态感知难的问题。

## 8. 待处理积压
*   **WebUI 显示问题**：[Issue #3790](https://github.com/HKUDS/nanobot/issues/3790) 目前评论数最高且未解决，建议维护者优先排查是否为前端渲染回归问题。
*   **安全存储功能**：[Issue #2172](https://github.com/HKUDS/nanobot/issues/2172) 悬而未决，作为安全类功能请求，建议纳入近期迭代计划以提升项目安全性合规性。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-16)

## 1. 今日速览
Zeroclaw 项目今日呈现出极高的活跃度，共处理了 **24 条 Issue 更新** 和 **50 条 PR 更新**。开发重心明显向 **系统安全性** 和 **Skills 功能生态** 倾斜，成功关闭了多项关于路径安全策略和会话所有权的 P1/P2 级别问题。与此同时，社区针对即将发布的版本进行了深度测试，曝光了 SOP（标准作业程序）模块存在的多处“文档与实现不符”的严重缺陷，以及 Skills 安装流程中的阻断性 Bug。整体而言，项目正在 v0.8.0 大版本发布前进行密集的缺陷修复与功能收敛。

## 2. 版本发布
*   **无新版本发布**。
*   **注**：PR #6398 (v0.8.0: Multi-Agent Runtime and Schema V3) 正处于活跃开发与审查阶段，尚未合并。

## 3. 项目进展
今日共有 3 个 PR 合并/关闭，主要推进了安全策略修复与文档更新：

*   **[已合并] 安全策略修复 (PR #6236)**：修复了 `forbidden_path_argument` 扫描器错误拦截 `/dev/null` 等安全重定向目标的问题，解决了 Shell 工具执行中的高优先级阻碍 (Issue #5518)。
*   **[已合并] Matrix 通道修复 (PR #6525)**：修复了 Matrix 根时间线消息自动开启线程的问题，优化了消息编排逻辑。
*   **[已合并] CI 流程优化 (Issue #6679)**：修复了陈旧分支合并前未强制重跑 CI 检查的风险，保障了主分支代码质量。
*   **[待合并] 记忆系统增强 (PR #6693)**：提出了 "Dream Mode" 记忆整合机制，旨在通过空闲时段压缩记忆，解决上下文膨胀问题，这是一个重要的架构级特性提案。
*   **[待合并] 严格工具解析模式 (PR #6675)**：引入 `agent.strict_tool_parsing` 配置，强制要求原生 Provider Tool Calls，减少文本回退带来的不确定性，提升了 Agent 执行的严谨性。

## 4. 社区热点
今日讨论热度最高的问题集中在功能完整性与 API 兼容性上：

*   **[Issue #6695] Web UI Skills 管理功能请求**
    *   作者: @NiuBlibing
    *   热度: 新开 Issue
    *   分析: 用户呼吁在 Gateway Dashboard 中增加可视化的 Skills 管理（列表、启用/禁用、编辑）。这反映出随着 Skills 系统的完善，用户对 GUI 操作界面的需求日益迫切。
*   **[Issue #6678] Anthropic API 工具命名兼容性问题**
    *   作者: @KundKMC
    *   热度: 新开 Issue
    *   分析: 报告了自定义 Skill 工具生成的名称违反 Anthropic API 正则规范（含 `.` 符号），导致请求被拒。这显示了 Zeroclaw 在适配不同 LLM Provider 规范时的边缘情况处理不足。
*   **[Issue #6681] Skills 安装 Panic**
    *   作者: @NiuBlibing
    *   分析: 执行 `zeroclaw skills install clawhub:*` 时触发 Tokio 运行时 Panic。这是直接影响用户体验的阻断性问题。

## 5. Bug 与稳定性
今日报告了多个严重级别的 Bug，尤其是 SOP 模块被揭露存在系统性缺陷：

*   **[S1 - 阻断性] Skills 安装 Panic (Issue #6681)**
    *   详情: `zeroclaw skills install` 因在异步上下文中错误使用阻塞请求导致崩溃。
    *   状态: **待修复**。
*   **[S0/S1 - 核心功能缺失] SOP 模块“纸上谈兵”系列问题 (Issues #6685, #6686, #6687, #6689)**
    *   详情: 用户 @JordanTheJet 系列提交指出 SOP 功能存在严重的“文档欺诈”：HTTP Webhook、Cron 触发器、审计日志写入等核心功能虽然在文档中承诺，但实际代码未连线或未调用。
    *   状态: **待确认与修复**。
*   **[S0 - 数据/安全风险] Xiaomi 思考模型推理内容丢失 (Issue #6672)**
    *   详情: 使用 mimo-v2.5 等模型时，`reasoning_content` 未在循环中传递，导致模型“失忆”。
    *   状态: **待修复**。
*   **[已修复] 路径策略拦截安全设备 (Issue #5518)**
    *   详情: 修复了安全配置误杀 `/dev/null` 重定向的问题，现已合并至主分支。

## 6. 功能请求与路线图信号
*   **Skills 可视化管理 (Issue #6695)**: 鉴于 `zeroclaw skills` 已成为运行时一等公民，Web UI 支持极有可能被纳入近期路线图。
*   **SearXNG 搜索支持 (Issue #5316)**: 社区提议引入隐私友好的搜索引擎 SearXNG 替代 DuckDuckGo，以解决验证码问题，标签为 `help wanted`，属于高价值贡献点。
*   **Dream Mode 记忆机制 (PR #6693)**: 提出了周期性记忆蒸馏概念，若合并将显著提升 Agent 的长期记忆能力。

## 7. 用户反馈摘要
*   **痛点 - 配置陷阱**：多位用户反馈文档描述的功能（特别是 SOP 相关）在实际代码中不存在或无效，导致部署白费 (Issue #6689, #6685)。
*   **痛点 - 命名规范**：工具命名规范的不一致导致 Anthropic 等严格 API 直接报错 (Issue #6678)，用户希望 Zeroclaw 能自动处理各 Provider 的命名差异。
*   **积极反馈**：用户对 `allowed_path` 逻辑修复 (Issue #5533) 和安全重定向放行表示认可，认为这解决了阻碍 Shell 技能使用的实际问题。

## 8. 待处理积压
*   **[P0] PR #6398 (v0.8.0 大版本更新)**: 该 PR 包含多智能体运行时和 Schema V3 重构，代码量巨大，目前状态为 "DO NOT MERGE"，正处于增量审查阶段，需要持续关注其合并进度以判断下一版本发布时间。
*   **[P2] Issue #5316 (SearXNG 支持)**: 长期未处理的 Feature Request，标签为 `help wanted`，建议社区开发者认领。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-16)

## 1. 今日速览
Hermes Agent 今日保持了极高的开发与社区活跃度，共处理了 50 条 Issue 更新和 50 条 PR 更新，显示出项目迭代节奏紧凑。虽然今日无新版本发布，但合并了包括 Mistral/Nebius 等一级供应商支持在内的多个重要 PR，显著增强了生态兼容性。社区讨论焦点集中在 **Agent 自我改进的可追溯性**、**隐私通讯协议支持** 以及 **多角色路由** 等深层架构设计上。同时，针对 TUI 体验、Docker 部署稳定性及 DeepSeek 模型兼容性的修复工作正在稳步推进。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 13 个 PR 被合并或关闭，主要集中在功能扩展与关键 Bug 修复，项目整体向更健壮的架构迈进：

*   **提供商生态扩展**：PR [#4485](https://github.com/NousResearch/hermes-agent/pull/4485) 已关闭，成功添加了 **Mistral AI、Nebius AI 和 Scaleway** 作为一级提供商，大幅扩展了模型选择范围。
*   **关键 Bug 修复**：PR [#26715](https://github.com/NousResearch/hermes-agent/pull/26715) 修复了 xAI OAuth 凭据池在压缩任务中的调用失败问题；PR [#26724](https://github.com/NousResearch/hermes-agent/pull/26724) 引入了 YouTube 副本代理功能，增强了多媒体处理能力。
*   **架构优化进行时**：
    *   PR [#26720](https://github.com/NousResearch/hermes-agent/pull/26720) 提出了 **LCM 上下文引擎插件**，引入不可变存储与分层摘要 DAG，旨在重构现有的记忆系统。
    *   PR [#20059](https://github.com/NousResearch/hermes-agent/pull/20059) (Electron 桌面端应用) 仍在积极更新，展示了项目向桌面端延伸的明确路线图。

## 4. 社区热点
今日讨论最热烈的议题反映了用户对高级架构和企业级特性的渴望：

*   **[#11692 Agent 自我改进的“_receipts_”机制** (评论 10 条): 社区深度探讨了如何证明“哪个版本的技能产生了哪个输出”，旨在解决自我修改型 Agent 的治理与溯源难题。
    *   链接: [NousResearch/hermes-agent Issue #11692](https://github.com/NousResearch/hermes-agent/issues/11692)
*   **[#73 Matrix 协议支持** (评论 10 条, 👍 10): 该 Issue 今日关闭，反映了社区对隐私、去中心化通讯的强烈需求。
    *   链接: [NousResearch/hermes-agent Issue #73](https://github.com/NousResearch/hermes-agent/issues/73)
*   **[#5143 多角色自动路由** (评论 3 条, 👍 11): 用户希望 Agent 能根据任务领域（如健康、开发、财务）自动切换角色，而非单一通用助手。
    *   链接: [NousResearch/hermes-agent Issue #5143](https://github.com/NousResearch/hermes-agent/issues/5143)

## 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，部分已有修复方案：

*   **P1 - 严重数据丢失风险**:
    *   Issue [#8038](https://github.com/NousResearch/hermes-agent/issues/8038): `_flush_messages_to_session_db` 会静默吞掉所有持久化错误（如磁盘满、SQLite 锁），导致会话数据无声丢失。目前尚无修复 PR，需紧急关注。
    *   Issue [#6481](https://github.com/NousResearch/hermes-agent/issues/6481): 终端强制退出时内存中的消息丢失。
*   **P2 - 平台兼容性与崩溃**:
    *   Issue [#25666](https://github.com/NousResearch/hermes-agent/issues/25666): Telegram Gateway 在 Raspberry Pi aarch64 上频繁发生 SIGSEGV 崩溃。
    *   Issue [#14898](https://github.com/NousResearch/hermes-agent/issues/14898): Dashboard 在低内存 VPS (≤1GB) 上每次启动重构建导致 OOM Kill。
    *   **已修复**: PR [#26717](https://github.com/NousResearch/hermes-agent/pull/26717) 修复了 TUI 模式下光标漂移问题；PR [#26008](https://github.com/NousResearch/hermes-agent/pull/26008) 修复了 Discord/Slack 平台上 `clarify` 工具无限等待的问题。

## 6. 功能请求与路线图信号
*   **结构化记忆系统演进**: Issue [#346](https://github.com/NousResearch/hermes-agent/issues/346) (结构化记忆) 已关闭，结合正在进行的 PR [#26720](https://github.com/NousResearch/hermes-agent/pull/26720) (LCM 引擎)，预示项目正在从简单的文本记忆向图结构长期记忆转型。
*   **无障碍支持**: Issue [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) 提出了针对视障用户的 VoiceOver 改进需求，表明用户群体正在多样化。
*   **安全与沙箱**: Issue [#129](https://github.com/NousResearch/hermes-agent/issues/129) 讨论了应对“出站威胁”的沙箱机制，安全边界正在被重新审视。

## 7. 用户反馈摘要
*   **模型提供商兼容性痛点**: 多个 Issue (如 [#17212](https://github.com/NousResearch/hermes-agent/issues/17212), [#15700](https://github.com/NousResearch/hermes-agent/issues/15700)) 反映了 **DeepSeek API** 的兼容性问题（如 `reasoning_content` 必须回传、计费异常），显示出用户对该模型的高关注度与当前适配的粗糙。
*   **Docker 部署体验**: 用户反馈在 Unraid/NAS 等环境下，硬编码的超时时间（如 npm install 60s）导致部署失败，希望有更灵活的配置。
*   **CLI/TUI 体验**: 用户对 TUI 的渲染细节（如光标漂移、滚动后状态栏重叠）反馈较多，相关修复 PR 已提交，显示出开发团队对用户体验的快速响应。

## 8. 待处理积压
*   **高风险 Bug**: Issue [#8038](https://github.com/NousResearch/hermes-agent/issues/8038) (数据库静默错误) 被标记为 P1 但目前仍未有对应 Fix PR，建议维护者优先介入。
*   **长期功能请求**: Issue [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) (多角色路由) 获得了高票支持，目前状态为 Open，建议纳入中长期路线图。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目动态日报 (2026-05-16)**

### 1. 今日速览
PicoClaw 项目今日保持高活跃度，社区协作频繁，共有 24 个 PR 更新与 11 个 Issue 更新。项目重点聚焦于多模态能力的补齐与稳定版发布，发布了最新的 `nightly` 版本。核心开发精力集中在修复 DeepSeek/MiMo 等推理模型的兼容性问题以及 Android 端的稳定性修复。虽然仍存在一些长期未决的功能请求，但近期针对配置系统（V3 Config）的重构和多模态支持的合并显示出项目正在快速迭代演进。

### 2. 版本发布
- **nightly: v0.2.8-nightly.20260516.0df050ff**
  - **类型**: 自动化构建
  - **说明**: 这是一个每日构建版本，可能包含不稳定的更改，建议开发者和测试人员使用。
  - **变更日志**: [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

### 3. 项目进展
今日共有 11 个 PR 被合并/关闭，显著推进了以下领域：

- **多模态与推理模型支持**：
  - [PR #2626](https://github.com/sipeed/picoclaw/pull/2626) 合并，增加了对多模态 LLM（如 Gemini 1.5）原生音频输入的支持，完善了 Agent 的感知能力。
  - [PR #2741](https://github.com/sipeed/picoclaw/pull/2741) 与 [PR #2862](https://github.com/sipeed/picoclaw/pull/2862) 合并，修复了 OpenAI 兼容层对 `reasoning_content` 的处理，解决了 DeepSeek v4 和小米 MiMo 模型在多轮对话中的推理内容丢失问题。

- **架构与配置重构**：
  - [PR #2766](https://github.com/sipeed/picoclaw/pull/2766) 合并，全面同步文档至 V3 配置格式，简化了用户配置流程。
  - [PR #2811](https://github.com/sipeed/picoclaw/pull/2811) 合并，引入了 Docker 支持的集成测试框架并重构了 MCP 传输配置，提升了项目的可维护性与测试覆盖率。

- **关键 Bug 修复**：
  - [PR #2270](https://github.com/sipeed/picoclaw/pull/2270) 修复了配置解析中 `SecureString` 处理导致的 Panic 问题，提升了系统鲁棒性。
  - [PR #2874](https://github.com/sipeed/picoclaw/pull/2874) 修复了图片媒体附件在 Pico 客户端中的丢失问题。

### 4. 社区热点
- **[Issue #28](https://github.com/sipeed/picoclaw/Issue/28)** (评论: 19)
  用户长期请求支持 **LM Studio** 的便捷连接方式，特别是在 Android 端的部署场景。该 Issue 自 2 月创建至今仍保持活跃，反映出用户对本地模型部署和轻量化接入的强烈需求。
- **[Issue #1042](https://github.com/sipeed/picoclaw/Issue/1042)** (评论: 11)
  关于 `exec` 工具安全沙箱误拦截的讨论。用户指出安全策略过于简单粗暴，导致如 `curl` 等不含路径操作的命令被错误识别为路径越权。这反映了社区对工具执行安全性与灵活性平衡的关注。

### 5. Bug 与稳定性
今日报告的新 Bug 集中在配置工具、移动端稳定性及特定渠道兼容性上：

- **严重/高优先级**：
  - **[Issue #2744](https://github.com/sipeed/picoclaw/Issue/2744)**: Android v0.2.8 无法从任何标签页访问数据，可能导致移动端完全不可用。
  - **[Issue #2817](https://github.com/sipeed/picoclaw/Issue/2817)**: 语音转录成功但未传递给 LLM，模型仅收到 `[voice]` 占位符，导致多模态交互失效。
  - **[Issue #2878](https://github.com/sipeed/picoclaw/Issue/2878)**: `load_image` 工具无法通过配置文件启用。已有修复 PR [PR #2879](https://github.com/sipeed/picoclaw/pull/2879) 提交。

- **中等/低优先级**：
  - **[Issue #2815](https://github.com/sipeed/picoclaw/Issue/2815)**: Matrix 渠道的 `allow_from` 过滤器失效。已有修复 PR [PR #2827](https://github.com/sipeed/picoclaw/pull/2827) 待合并。
  - **[Issue #2816](https://github.com/sipeed/picoclaw/Issue/2816)**: Matrix 渠道未注入发送者身份信息。

### 6. 功能请求与路线图信号
- **安全增强**：[PR #2877](https://github.com/sipeed/picoclaw/pull/2877) 提议集成 **Tirith** 进行命令预扫描，显示出项目在 Tool Use 安全性上的进一步探索。
- **非破坏性会话管理**：[Issue #2820](https://github.com/sipeed/picoclaw/Issue/2820) 请求在不删除 Seahorse 历史记录的情况下重置会话，这对于长期记忆与调试场景非常重要，值得纳入路线图考量。
- **Powershell 安全**：[PR #2836](https://github.com/sipeed/picoclaw/pull/2836) 旨在修复 Windows 下的编码绕过漏洞，强化了跨平台安全性。

### 7. 用户反馈摘要
- **本地模型接入需求强烈**：除了 LM Studio，近期对 DeepSeek 和小米 MiMo 模型的兼容性修复（Issue #2706, #2859）表明，用户非常倾向于将 PicoClaw作为本地或私有模型的统一前端。
- **工具链安全性痛点**：用户对 `exec` 工具的误报（Issue #1042）反馈较多，现有的正则匹配策略被认为过于简单，急需更智能的沙箱策略（如 PR #2814 提出的相对路径修复）。
- **移动端体验有待提升**：Android 版本的数据访问问题（Issue #2744）影响了用户体验，需关注后续修复。

### 8. 待处理积压
- **长期未响应**：
  - **[Issue #28](https://github.com/sipeed/picoclaw/Issue/28)**: LM Studio 接入请求已停滞数月，建议维护者评估社区贡献或提供插件化支持。
  - **[Issue #1042](https://github.com/sipeed/picoclaw/Issue/1042)**: `exec` 工具的路径判断问题已有对应 PR [PR #2814](https://github.com/sipeed/picoclaw/pull/2814)，建议尽快 Review 以解决长期存在的沙箱误杀问题。
- **近期需关注**：
  - **[PR #2879](https://github.com/sipeed/picoclaw/pull/2879)**: 针对 `load_image` 配置失效的修复，建议快速合并以恢复功能完整性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-16)

## 1. 今日速览
NanoClaw 今日展现了极高的维护活跃度与项目治理决心，上演了一场“大扫除”。过去 24 小时内，项目关闭了 **45 个 Issues** 和 **43 个 PRs**，同时仅新开 5 个 Issue。这一数据表明团队正在进行深度的积压清理与版本里程碑整顿。伴随着 **v2.0.63** 的正式发布，项目确立了新的版本发布规范，标志着 NanoClaw 从快速迭代期进入了规范化交付阶段，项目健康度显著提升。

## 2. 版本发布
- **[v2.0.63](https://github.com/qwibitai/nanoclaw/releases/tag/v2.0.63)**
  > **首个正式发布的版本**
  - **核心变更**：确立了“每次 `package.json` 版本号更新合并至 `main` 分支即发布 GitHub Release”的严格发布策略。
  - **影响**：此前版本更新频繁但 Release 发布零散，用户难以追踪。此版本起，用户可通过 Releases 页面准确锁定稳定版本，解决了“版本落地但标签缺失”的历史痛点。

## 3. 项目进展
今日项目进展主要集中于核心架构的稳健性修复与历史遗留问题的解决：
- **核心修复合并**：成功合入针对 OpenRouter 非 Anthropic 模型路由修复 ([PR #954](https://github.com/nanocoai/nanoclaw/pull/954))，解决了 SDK 代理流中的关键兼容性问题；合入 LLM 凭证快速校验 ([PR #956](https://github.com/nanocoai/nanoclaw/pull/956))，避免了运行时静默失败。
- **架构对齐**：PR #2493 修复了服务命名规范，使其符合 v2 架构设计，解决了多实例部署时的命名冲突隐患。
- **积压清理**：大量历史 Issue（如 Signal 通道支持、Podman 兼容性建议）被关闭，显示出团队正在收敛功能边界，优先保障核心功能的稳定性。

## 4. 社区热点
尽管今日 Issue 关闭量大，但部分历史议题引发了深层讨论，反映出用户的核心诉求：
- **[Issue #80](https://github.com/nanocoai/nanoclaw/issues/80) [CLOSED]**: **多运行时支持 (Gemini/OpenCode等)** (👍 60, 评论 32)
  - **诉求分析**：Anthropic 对第三方客户端的封禁风险使用户感到恐慌。社区强烈呼吁 NanoClaw 提供除 Claude 以外的 LLM 后端支持，以规避账号风险。
- **[Issue #384](https://github.com/nanocoai/nanoclaw/issues/384) [CLOSED]**: **技能市场/注册表** (👍 16, 评论 9)
  - **诉求分析**：用户认可 NanoClaw “极小核心、按需安装”的安全模型，并希望通过官方 Registry 进一步降低安全审计门槛。
- **[Issue #439](https://github.com/nanocoai/nanoclaw/issues/439) [CLOSED]**: **安装流程简化** (👍 9, 评论 2)
  - **痛点**：现有“通过 Claude 进行安装”的方案虽具创新性，但被用户诟病为“慢且贵”，呼吁回归传统 Shell 脚本安装方式。

## 5. Bug 与稳定性
今日报告/修复的关键 Bug 集中在容器持久化与鉴权安全：
- **[已修复] [Critical] OOM 崩溃与幽灵 Socket ([Issue #595](https://github.com/nanocoai/nanoclaw/issues/595))**
  - **问题**：运行约 40 小时后因重连时的 Socket 堆积导致 OOM 崩溃。
  - **状态**：Issue 已关闭，推测已在今日的大规模修复合并中解决。
- **[已修复] [High] WhatsApp 鉴权文件权限泄露 ([Issue #635](https://github.com/nanocoai/nanoclaw/issues/635))**
  - **问题**：`store/auth/` 文件权限错误设为 644，存在多用户环境下的敏感信息泄露风险。
- **[待处理] [Medium] 数据库写入权限错误 ([PR #2496](https://github.com/nanocoai/nanoclaw/pull/2496))**
  - **现状**：`writeOutboundDirect` 以只读模式打开数据库，导致用户无法收到 Command Gate 的拦截反馈。

## 6. 功能请求与路线图信号
结合 Open 状态的 PR 与历史高票 Issue，未来版本的重点方向明确：
- **多模型支持 (高优先级)**：[Issue #80](https://github.com/nanocoai/nanoclaw/issues/80) 虽被关闭，但 [PR #2490 (LiteLLM Provider)](https://github.com/nanocoai/nanoclaw/pull/2490) 处于 Open 状态，表明社区正在通过插件化方式解决模型锁定问题。
- **高级 Agent 能力**：[PR #2497 (Agent Network)](https://github.com/nanocoai/nanoclaw/pull/2497) 与 [PR #2500 (Early Compact Nudge)](https://github.com/nanocoai/nanoclaw/pull/2500) 预示着项目正在探索多 Agent 协作与长上下文管理优化。
- **语音支持扩展**：[Issue #2396](https://github.com/nanocoai/nanoclaw/issues/2396) 建议增加 Groq Whisper 后端，显示项目正在向多模态能力扩展。

## 7. 用户反馈摘要
- **安全模型获赞**：用户高度认可“极小攻击面”设计，认为这比竞品 OpenClaw 更安全 (Issue #384)。
- **安装体验痛点**：用户对现有的“Claude 辅助安装”流程感到疲惫，认为其增加了不必要的经济和时间成本 (Issue #439)。
- **封禁焦虑**：用户普遍存在 Anthropic 账号封禁焦虑，强烈希望项目尽快支持第三方 API Provider (Issue #80)。

## 8. 待处理积压
以下关键 PR 处于 Open 状态，建议维护者优先关注：
- **[PR #2496](https://github.com/nanocoai/nanoclaw/pull/2496)**: 修复数据库只读导致的用户反馈丢失问题，影响核心交互体验。
- **[PR #2469](https://github.com/nanocoai/nanoclaw/pull/2469)**: WhatsApp 解密失败时的错误指引优化，提升运维友好度。
- **[Issue #2396](https://github.com/nanocoai/nanoclaw/issues/2396)**: Groq Whisper 后端支持请求，需社区进一步讨论实现方案。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-16)

## 1. 今日速览
过去 24 小时，NullClaw 项目整体活跃度较为平缓，主要表现为社区反馈的累积。项目今日无代码合并记录，也未发布新版本，开发端处于静默期。社区方面新增 2 条 Issue，分别涉及核心功能的体验优化与稳定性问题，显示用户对多模态交互上下文及本地化部署稳定性的关注度提升。目前无新晋 Bug 修复 PR，项目维护者需关注积压问题的分流与响应。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
*过去 24 小时无 PR 更新、合并或关闭，代码库无实质性推进。*

## 4. 社区热点
今日社区关注点主要集中在两个新开启的 Issue 上：

*   **Issue #916 [Telegram: include reply_to_message text in inbound context]**：(https://github.com/nullclaw/nullclaw/issues/916)
    该 Issue 由 @weissfl 提出，指出当前 Telegram 适配器在处理“回复”消息时存在逻辑短板。目前仅通过 `reply_to_message` 判断是否为回复 Bot 的消息，以决定群聊触发机制，但未提取原消息文本。这导致 AI 在回复时缺乏上下文语境，用户诉求是提升 AI 的多轮对话理解能力，使其能“读懂”被回复的内容。
*   **Issue #915 [[bug] Problem with scheduler unauthorized]**：(https://github.com/nullclaw/nullclaw/issues/915)
    该 Issue 由 @scabros 提交，涉及本地化部署场景下的权限/调度问题。用户在使用 Ollama + RTX 3090 进行本地推理时，遇到调度器无法正常工作的情况。这反映了高级用户在脱离云端 API、进行本地高性能模型部署时遇到的集成障碍。

## 5. Bug 与稳定性
今日报告关键 Bug 如下，目前均无修复 PR：

*   **[High] 调度器功能失效** (Issue #915)
    *   **表现**: 在 Ubuntu 环境下连接外部 Ollama 主机时，调度器功能不可用，报错提示涉及权限或连接问题。
    *   **影响范围**: 影响本地部署用户的自动化任务执行，导致核心调度功能瘫痪。
    *   **状态**: 待确认。

## 6. 功能请求与路线图信号
*   **增强对话上下文感知** (Issue #916)：建议提取 Telegram `reply_to_message` 中的文本内容作为上下文输入。这符合 AI Agent 提升长文本与多轮对话能力的行业趋势，若被采纳，将显著改善群聊场景下的交互体验。

## 7. 用户反馈摘要
根据今日 Issues 提炼的用户痛点：
*   **本地化部署门槛**：用户 @scabros 的反馈表明，NullClaw 在对接本地 LLM（如 Ollama）时，非核心功能（如 Scheduler）可能存在兼容性或权限配置盲点，用户期待“开箱即用”的本地化体验。
*   **交互细腻度需求**：用户 @weissfl 指出的 Telegram 回复语境缺失问题，反映出用户不再满足于简单的“问答”，而是追求更自然、更懂上下文的交互逻辑。

## 8. 待处理积压
以下为今日新增但尚未处理的 Issue，建议维护者优先关注：

1.  **Issue #915 [Bug]: Scheduler unauthorized** - 涉及核心组件不可用，可能阻碍本地部署用户的正常使用，建议优先排查是否为权限验证逻辑的回归问题。
    *   链接：https://github.com/nullclaw/nullclaw/issues/915
2.  **Issue #916 [Feature]: Telegram context enhancement** - 属于体验优化类建议，对功能完整性有重要意义，建议纳入后续版本规划。
    *   链接：https://github.com/nullclaw/nullclaw/issues/916

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-16)

## 1. 今日速览
IronClaw 项目今日保持极高的开发活跃度，呈现出强烈的架构重构与功能迭代特征。过去 24 小时内共有 50 条 PR 更新，其中 28 条已合并/关闭，显示团队正在高效地整合代码，推进里程碑。项目核心焦点集中在 **"Reborn" 架构的生产环境上线准备**，涉及 WebUI Beta、工作流编排及安全加固。同时，刚刚发布的 `v0.28.2` 版本修复了扩展工具安装中的关键安全漏洞。整体来看，项目正处于从内部架构重构向对外产品化（WebUI Beta）过渡的关键阶段，健康度极高。

## 2. 版本发布
### [ironclaw-v0.28.2](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.28.2) (2026-05-14)
本次更新主要聚焦于安全性与架构解耦：
- **关键修复**：修复了扩展安装中的 "auto-approve footgun"（自动批准易错点）问题，并解决了 `tool_install` 的双重调用问题。这是一个重要的安全更新，建议所有用户尽快升级。
- **架构变更**：将 Provider 特定的认证、模型获取和 Embeddings 配置隐藏到了 Facades（门面模式）之后，进一步解耦了核心逻辑与具体模型提供商的实现。

## 3. 项目进展
今日共有 **28 条 PR 合并/关闭**，标志着 "Reborn" 架构的多个核心组件已就绪，项目整体迈进了一大步：
- **架构集成**：合并了 [PR #3650](https://github.com/nearai/ironclaw/pull/3650)、[#3651](https://github.com/nearai/ironclaw/pull/3651) 和 [#3652](https://github.com/nearai/ironclaw/pull/3652)，成功集成了 Reborn 工作流的多个关键子模块（WS-9 至 WS-15），包括驱动注册、运行时组合和检查点支持。
- **引擎安全**：合并了 [PR #3665](https://github.com/nearai/ironclaw/pull/3665)，引入了 `IRONCLAW_DISABLE_CODEACT` 标志，允许在 v2 引擎中禁用 CodeAct 以切换到更安全的结构化工具模式。
- **稳定性修复**：合并了 [PR #3684](https://github.com/nearai/ironclaw/pull/3684)、[#3685](https://github.com/nearai/ironclaw/pull/3685) 和 [#3686](https://github.com/nearai/ironclaw/pull/3686)，彻底解决了 WS-13 工作流中的取消逻辑和输入确认问题，提升了生产环境的健壮性。

## 4. 社区热点
- **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259) [OPEN]**：**Crates.io 发布滞后问题**。下游用户因 Wasmtime CVE 漏洞被迫停留在 `0.24.0` 版本，而 GitHub 发布已至 `0.27.0`，导致依赖冲突。这是目前社区反馈最强烈的痛点。
- **[PR #3653](https://github.com/nearai/ironclaw/pull/3653) [OPEN]**：**产品级运行时切换验证**。该 PR 旨在证明 Reborn 运行时已具备处理生产流量的能力，是架构上线的“准考证”，备受关注。
- **[PR #3548](https://github.com/nearai/ironclaw/pull/3548) [OPEN]**：**工具禁用标志**。引入 `DISABLE_TOOLS_LIST` 以解决安全隐患，反映了社区/开发者对权限控制粒度的需求。

## 5. Bug 与稳定性
- **[严重] Nightly E2E 测试失败**：[Issue #3447](https://github.com/nearai/ironclaw/issues/3447) 报告 Nightly E2E 运行失败，目前尚无修复 PR 关联，需维护者优先排查 CI/CD 管道。
- **[中等] 模型网关工具调用拒收**：[Issue #3620](https://github.com/nearai/ironclaw/issues/3620) 指出 Reborn 生产路径目前错误地拒绝了包含 `ToolCall` 的响应，导致工具调用无法完成闭环。这是阻碍生产上线的功能性 Bug。
- **[中等] Hooks 递归 DoS 风险**：[Issue #3689](https://github.com/nearai/ironclaw/issues/3689) 揭示了事件钩子可能因递归失败导致无限循环。

## 6. 功能请求与路线图信号
结合 Issues 与活跃 PR，项目路线图清晰指向 **"Reborn Beta 上线"**：
- **WebUI Beta**：[Issue #3611](https://github.com/nearai/ironclaw/issues/3611) 和 [Issue #3625](https://github.com/nearai/ironclaw/issues/3625) 提出了 WebUI v2 的最小化路由和幂等性需求，表明项目正在为提供原生 Web 界面做准备。
- **安全与合规**：[Issue #3690](https://github.com/nearai/ironclaw/issues/3690) 提出限制钩子可见性，[Issue #3689](https://github.com/nearai/ironclaw/issues/3689) 提出预算控制，显示系统正在向企业级安全标准演进。
- **预测**：[PR #3695](https://github.com/nearai/ironclaw/pull/3695)（整合 Reborn 组合根）一旦合并，将标志着 v0.29.0 版本具备发布条件，WebUI Beta 随之开启。

## 7. 用户反馈摘要
- **依赖管理痛点**：用户反馈 [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) 中明确表达了对 `crates.io` 发布滞后的不满，这直接影响了下游项目的安全更新（Wasmtime CVE）。
- **生产就绪度担忧**：开发者在 Issues ([#3602](https://github.com/nearai/ironclaw/issues/3602), [#3622](https://github.com/nearai/ironclaw/issues/3622)) 中详细讨论了生产环境的“就绪门控”和“证据持久化”，反映出对系统可靠性的高要求。

## 8. 待处理积压
- **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259)**：**发布管道阻塞**。自 2026-05-05 开放至今，`crates.io` 仍未同步最新版本，严重阻塞下游依赖更新，**强烈建议维护者优先处理**。
- **[PR #1378](https://github.com/nearai/ironclaw/pull/1378)**：**多通道工具过滤**。该 PR 已开放超过两个月（创建于 03-18），涉及 Slack/Telegram/Web 多通道路由，是一个大型的功能增强，需关注是否因重构而被搁置或需要重新基进。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-16)

## 1. 今日速览
LobsterAI 今日维持高开发活跃度，过去 24 小时内 PR 更新量达 35 条，其中 32 条已合并或关闭，显示项目正在进行大规模的代码清理与功能迭代。项目重点聚焦于用户界面优化（PPT预览、多标签页）与多平台 IM 适配。然而，社区出现了关于模型调用强制重定向的关键 Issue，涉及用户配置权限问题，需引起维护者重视。整体来看，项目在积极修补技术债务的同时，需关注新版本引入的兼容性反馈。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目主要在 **前端交互优化**、**IM 平台适配** 和 **系统稳定性** 三个方向取得了实质性进展，同时进行了大量的历史遗留 PR 清理：

*   **UI/UX 增强**：合并了右侧预览多标签页模式 ([PR #1989](https://github.com/netease-youdao/LobsterAI/pull/1989)) 及 PPT 预览交互优化 ([PR #1990](https://github.com/netease-youdao/LobsterAI/pull/1990))，显著提升了文档处理与预览的用户体验。
*   **IM 功能补全**：修复了 Telegram、Discord、QQ、POPO 等平台在 dmPolicy 设置为 pairing 时缺少配对码输入框的问题 ([PR #1987](https://github.com/netease-youdao/LobsterAI/pull/1987))。
*   **稳定性修复**：解决了 managed session 会话同步时因网关检测逻辑导致字符丢失的严重 Bug ([PR #1986](https://github.com/netease-youdao/LobsterAI/pull/1986))。
*   **代码库维护**：今日关闭了超过 20 个标记为 `[stale]` 的历史 PR，涉及安全加固（URL 校验、路径遍历防护）、性能优化（SQLite 索引）及安装逻辑修复，表明项目组正在进行一次全面的代码仓库整理。

## 4. 社区热点
今日社区关注焦点集中在模型调用的自主权问题上：

*   **[Issue #1988](https://github.com/netease-youdao/LobsterAI/issues/1988)**：用户报告更新后无法正常调用第三方模型（阿里百炼 qwen3.6-plus），系统疑似强制重定向至网易自带模型并提示额度不足。该问题涉及用户对模型配置的自主控制权，且挫败感较强（"修改配置文件也没用"），是今日唯一的新增活跃 Issue。

此外，PR 区有多个关于底层架构优化的提交引发了自动化检查或合并操作，如安全监控插件的集成 ([PR #1962](https://github.com/netease-youdao/LobsterAI/pull/1962))。

## 5. Bug 与稳定性
今日报告的关键 Bug 主要涉及配置与同步问题：

*   **🔴 严重 - 配置强制覆盖**：[Issue #1988](https://github.com/netease-youdao/LobsterAI/issues/1988) 报告新版本会强制修改用户配置的模型提供商，导致非网易系模型无法正常调用。目前尚无修复 PR，建议优先排查配置持久化或网关拦截逻辑。
*   **🟡 已修复 - 会话同步丢字**：[PR #1986](https://github.com/netease-youdao/LobsterAI/pull/1986) 修复了 managed session 在同步时因 suffix-prefix overlap 检测错误导致文本损坏的问题（如 `file:///` 变为 `file://`）。

## 6. 功能请求与路线图信号
从今日的 PR 动态来看，项目正沿着以下路线演进：

*   **思维链控制**：[PR #1985](https://github.com/netease-youdao/LobsterAI/pull/1985) 正在开发会话级别的 "Thinking Level" 控制功能，支持从关闭到自适应多档调节，预示着 LobsterAI 将支持更深度的推理模型交互。
*   **安全合规能力**：[PR #1962](https://github.com/netease-youdao/LobsterAI/pull/1962) 集成了 `nsp-clawguard` 安全监控插件，并支持热切换，显示项目正在加强企业级安全特性。

## 7. 用户反馈摘要
*   **痛点反馈**：用户对配置文件的不可控感到沮丧。在 Issue #1988 中，用户指出系统强制更改其模型选择，且无法通过修改配置文件回退，这影响了高级用户自定义工作流的使用体验。
*   **场景需求**：用户使用场景涉及多模型切换（Coding Plan 配合特定模型），对模型的灵活接入有强依赖，任何阻断第三方模型接入的行为都会直接阻塞工作流。

## 8. 待处理积压
以下重要的历史遗留 PR 处于 Open 状态，且涉及核心性能与配置问题，建议维护者关注：

*   **[PR #806](https://github.com/netease-youdao/LobsterAI/pull/806) [OPEN]**：针对大量会话场景的 SQLite 性能瓶颈优化。该 PR 添加了关键索引以解决全表扫描导致的卡顿，对于重度用户至关重要。
*   **[PR #807](https://github.com/netease-youdao/LobsterAI/pull/807) [OPEN]**：修复 executionMode 配置不生效的问题，影响用户对代码执行环境的控制。
*   **[PR #1985](https://github.com/netease-youdao/LobsterAI/pull/1985) [OPEN]**：思维链级别控制功能，这是一个重要的体验增强特性，目前尚未合并。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-16)

## 1. 今日速览
Moltis 项目今日呈现出极高的维护效率与代码质量，过去 24 小时内成功关闭了全部 4 条活跃 Issue，并无新增 Issue，显示出项目当前版本稳定性较高。核心贡献者 @penso 推动了 6 个 PR 的合并，涵盖文档重构、安全认证增强及关键 UI 修复。目前仅有 1 个功能型 PR 处于待合并状态，项目整体处于快速迭代后的稳定整合期，健康度极佳。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目进展显著，主要集中在基础设施升级与 Bug 修复，具体合并/关闭情况如下：

*   **文档系统重构**：PR [#987](https://github.com/moltis-org/moltis/pull/987) 已合并，项目文档部署从 mdBook 迁移至 Astro 站点，新增了侧边导航、搜索功能及主题切换，极大提升了文档的可读性与用户体验。
*   **安全性增强**：PR [#1001](https://github.com/moltis-org/moltis/pull/1001) 合并，为 MCP OAuth 增加了客户端密钥（client_secret）支持，完善了身份认证流程。
*   **TLS 证书生成优化**：PR [#1000](https://github.com/moltis-org/moltis/pull/1000) 合并，解决了生成证书仅支持 localhost 的限制，现允许配置公网 IP 作为 SAN（Subject Alternative Name），修复了非本地部署的证书信任问题。
*   **UI 细节修复**：PR [#998](https://github.com/moltis-org/moltis/pull/998) 合并，修复了聊天输入框在长文本下的横向溢出问题，并增加了 Playwright 回归测试。
*   **安装脚本健壮性**：PR [#997](https://github.com/moltis-org/moltis/pull/997) 合并，修复了 Proxmox LXC 安装过程中因缺失 CA 证书导致的失败问题，提升了安装容错率。

## 4. 社区热点
今日社区焦点主要集中在远程访问能力的扩展讨论上。

*   **[功能扩展] 远程访问支持**：PR [#1002](https://github.com/moltis-org/moltis/pull/1002) 是目前唯一处于开启状态的 PR，计划引入 NetBird 私有网格和 Cloudflare Tunnel 支持。该 PR 今日有更新，社区对此功能的期待较高，旨在解决复杂网络环境下的连接问题。
*   **[需求关闭] 信任最小化中继**：Issue [#995](https://github.com/moltis-org/moltis/issues/995) 关于集成 `portal-tunnel` 作为无信任中继信道的提议已关闭。虽然具体关闭原因（已实现或方案变更）需查看详情，但结合 PR #1002 的推进，项目正通过集成成熟的隧道技术（如 Cloudflare Tunnel）来解决连接问题。

## 5. Bug 与稳定性
今日修复了 3 个影响用户体验与部署的关键 Bug，目前无未解决的严重 Bug。

*   **[已修复] TLS 证书限制**：Issue [#996](https://github.com/moltis-org/moltis/issues/996) 指出文档与代码行为不一致，生成的证书无法用于公网 IP。已在 PR #1000 中修复。
*   **[已修复] Proxmox 安装失败**：Issue [#993](https://github.com/moltis-org/moltis/issues/993) 报告在特定环境下 LXC 创建失败。已在 PR #997 中修复，通过增加对缺失 CA 证书的容错处理解决。
*   **[已修复] 聊天界面横向滚动**：Issue [#994](https://github.com/moltis-org/moltis/issues/994) 报告聊天窗口出现异常横向滚动条。已在 PR #998 中修复。

## 6. 功能请求与路线图信号
*   **远程访问架构演进**：从 Issue #995 的关闭与 PR #1002 的开启可以看出，项目在远程访问方案上倾向于集成标准化的第三方工具（NetBird, Cloudflare Tunnel），而非自研复杂的隧道协议，这符合“不重复造轮子”的开源最佳实践。
*   **MCP 协议生态完善**：OAuth 支持的合并表明 Moltis 正积极适配 AI 智能体互联互通的标准协议，为未来接入更多外部工具链铺平道路。

## 7. 用户反馈摘要
*   **部署痛点**：用户反馈 Proxmox 环境下的安装脚本较为敏感（Issue #993），这提示项目需要进一步加强对不同基础设施环境的兼容性测试。
*   **文档准确性**：TLS 证书问题（Issue #996）反映了用户在实际部署时对文档的高度依赖，文档与代码的同步更新至关重要，今日文档系统的重构将有助于改善这一情况。

## 8. 待处理积压
*   **待审查 PR**：PR [#1002](https://github.com/moltis-org/moltis/pull/1002)（远程访问支持）是当前唯一待处理的重大功能更新，建议维护者优先进行代码审查与测试，以便尽快合并，补齐网络连接能力的拼图。
*   **依赖更新**：PR [#999](https://github.com/moltis-org/moltis/pull/999) 为文档站点的依赖更新，建议尽快合并以消除潜在的安全风险。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-05-16)

## 1. 今日速览
CoPaw 项目今日保持高度活跃，社区互动频繁。过去24小时内，项目处理了 **39 个 PR 更新**（其中 23 个已合并/关闭）和 **24 个 Issue 更新**（10 个已关闭）。开发重心主要集中在提升系统稳定性与安全性，修复了包括 Agent 身份混淆、配置明文存储等关键 Bug，并合并了多项涉及 Backup 安全、Anthropic 适配及 Cron 任务改进的重要代码。社区方面，用户对会话上下文管理、Token 消耗感知以及多模型适配表现出强烈需求，多项功能请求已迅速转化为 PR 进入开发流程。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 **23 个 PR 被合并或关闭**，主要集中在安全性增强、模型兼容性修复和功能细化：

*   **安全性增强**：合并了 PR #4409，引入了对备份导入/恢复的信任控制机制，增加了 HMAC 签名验证，修复了备份恢复过程中的潜在安全漏洞。
*   **模型适配优化**：PR #4413 合并，支持在 Provider 设置中自定义 HTTP Headers 和 Anthropic Auth Token，解决了用户自定义 API 中转需求的痛点；PR #4387 合并，允许用户自定义 Anthropic Provider 的 Base URL。
*   **Channel 功能修复**：PR #4427 修复了企业微信快速发送消息时出现重复 "Thinking..." 占位符的问题；PR #4120 增强了 Matrix Channel 的 E2EE（端到端加密）验证流程。
*   **任务调度改进**：PR #4425 为 Agent 定时任务增加了超时设置，并优化了 run_id 的使用，提升了任务调度的健壮性。
*   **插件与工具修复**：PR #4423 修复了 CloudPaw 插件的模块导入错误，并增强了远程托管集成。
*   **Plan 模式加固**：PR #4198 修复了 Plan 模式下的网关绕过问题，防止 Agent 在用户确认计划前执行非计划工具。

## 4. 社区热点
今日讨论最活跃的 Issues 集中在多模型兼容性和核心功能缺陷上：

*   **[Issue #3957]**(agentscope-ai/QwenPaw Issue #3957) **Agent 身份混淆问题**：该 Issue 报告了主控 Agent 在接收频道消息时发生工作区切换，导致身份识别错误。该问题已引发 8 条评论并已关闭，表明严重 Bug 已修复。
*   **[Issue #4299]**(agentscope-ai/QwenPaw Issue #4299) **`write_file()` 死循环报错**：用户报告在长内容输出时触发参数缺失的死循环，严重影响使用体验，目前仍在处理中。
*   **[Issue #4051]**(agentscope-ai/QwenPaw Issue #4051) **DeepSeek 模型 Think 内容解析**：用户反馈 DeepSeek V4 Flash 模型的思考链内容解析异常，导致无法正常回复，该问题已关闭。
*   **[PR #4407]**(agentscope-ai/QwenPaw PR #4407) **新增世界杯助手 Skill**：首次贡献者提交了支持 2026 世界杯赛程、实时比分等功能的 Skill，社区正在 Review 该 PR，显示出良好的社区扩展性。

## 5. Bug 与稳定性
今日报告并处理的 Bug 按严重程度排列如下：

*   **严重 - 已修复**：
    *   [Issue #4421](agentscope-ai/QwenPaw Issue #4421)：Channel 配置明文写入 Agent 工作目录，存在严重安全隐患。目前已关闭，推测已在相关安全 PR 中修复。
    *   [Issue #3957](agentscope-ai/QwenPaw Issue #3957)：Agent 身份混淆，导致主控 Agent 误认为自己是其他 Agent。
*   **严重 - 待处理**：
    *   [Issue #4299](agentscope-ai/QwenPaw Issue #4299)：`write_file()` 函数在长输出时报错 "missing positional argument" 并陷入死循环，目前无对应 Fix PR。
*   **中等 - 已修复**：
    *   [Issue #4314](agentscope-ai/QwenPaw Issue #4314)：MiMo 模型开启思考模式后，多轮对话含工具调用时报 400 错误。已关闭。
    *   [Issue #4410](agentscope-ai/QwenPaw Issue #4410)：MCP Client 连接 `yuque-mcp` 失败，原因在于 TTY 检测机制。已关闭。
*   **中等 - 待处理**：
    *   [Issue #4367](agentscope-ai/QwenPaw Issue #4367)：Assistant 在工具调用后陷入仅显示 "Thinking" 状态，无可见文本回复。
    *   [Issue #4412](agentscope-ai/QwenPaw Issue #4412)：macOS 15 下应用图标大小显示异常。

## 6. 功能请求与路线图信号
用户对精细化控制和上下文管理的需求激增，部分需求已迅速得到响应：

*   **会话管理增强**：
    *   [Issue #4437](agentscope-ai/QwenPaw Issue #4437) 与 [Issue #4436](agentscope-ai/QwenPaw Issue #4436)：用户强烈请求支持删除单条对话或将部分对话转移至新会话，以降低 Token 成本。
    *   [Issue #4435](agentscope-ai/QwenPaw Issue #4435)：请求显示对话轮数和 Token 估算。**对应进展**：[PR #4433](agentscope-ai/QwenPaw PR #4433) 已提交，正在实现单轮/会话级别的 Token 使用统计。
*   **定时任务优化**：
    *   [Issue #4162](agentscope-ai/QwenPaw Issue #4162) 与 [Issue #4432](agentscope-ai/QwenPaw Issue #4432)：定时任务执行时上下文残留导致逻辑错误。**对应进展**：[PR #4434](agentscope-ai/QwenPaw PR #4434) 已提交，增加 "Clear Before Run" 开关以重置上下文。
*   **多 Agent 并行**：
    *   [Issue #4431](agentscope-ai/QwenPaw Issue #4431)：请求钉钉群聊中不同用户的消息并行处理，避免长任务阻塞其他人。

## 7. 用户反馈摘要
*   **痛点**：用户对 **上下文管理** 的焦虑明显，尤其是在定时任务可能会“污染”会话上下文（Issue #4162），以及无法精细控制对话历史导致 Token 浪费（Issue #4435, #4436）的问题上。
*   **兼容性**：接入第三方模型（DeepSeek, MiMo, Anthropic API）时的格式解析问题依然频发，显示项目在多模型适配层仍需打磨。
*   **满意度**：社区对 Bug 的响应速度较快，例如严重的身份混淆和明文配置问题迅速得到关注和处理，提升了用户信心。

## 8. 待处理积压
以下重要 Issue 长期未解决或需关注：

*   **[Issue #1516]**(agentscope-ai/QwenPaw Issue #1516)：Telegram Channel 不支持 AudioContent，导致语音消息无法处理（自 2026-03-15 开启）。
*   **[Issue #2751]**(agentscope-ai/QwenPaw Issue #2751)：Anthropic API 调用失败，因 `send_file_to_user` 返回的 `type: "file"` 不被支持（自 2026-04-01 开启）。
*   **[Issue #4299]**(agentscope-ai/QwenPaw Issue #4299)：`write_file()` 死循环问题严重影响长文本输出，急需修复。

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