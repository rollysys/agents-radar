# OpenClaw 生态日报 2026-06-09

> Issues: 500 | PRs: 459 | 覆盖项目: 14 个 | 生成时间: 2026-06-09 03:46 UTC

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

# OpenClaw 项目动态日报 (2026-06-09)

## 1. 今日速览
OpenClaw 项目今日保持极高的开发活跃度，单日 Issues 更新量达到 500 条，PR 更新量达到 459 条，显示出社区互动与代码迭代的热烈程度。项目在今日连续发布了两个 Beta 版本（v2026.6.5-beta.3 和 v2026.6.5-beta.5），重点优化了 QQBot 与 MCP 工具链的兼容性。然而，Issue 增长速度（新开/活跃 426 条）显著快于关闭速度（74 条），积压问题有所增加，主要集中在多渠道接入的编码问题、GPT-5 系列模型适配以及 Session 状态管理等核心稳定性领域。

## 2. 版本发布

### v2026.6.5-beta.5 & v2026.6.5-beta.3
今日连续发布了两个 Beta 版本，表明项目正处于快速修复与迭代周期中。

**主要更新亮点：**
*   **QQBot 推理内容过滤**：QQBot 现在会在原生投递前剥离模型的推理/思考脚手架内容，防止原始 `<thinking>` 内容泄露到频道回复中，显著提升了用户体验与隐私保护。(#89913, #90132)
*   **MCP 工具结果强制转换**：MCP 工具结果现在强制转换 `resource_link`、`resource`、`audio`、畸形图像及未来类型，增强了工具调用的健壮性。

**迁移注意事项**：
目前处于 Beta 阶段，建议测试环境优先更新以验证 QQBot 的表现，生产环境请关注后续 Stable 版本。

## 3. 项目进展

今日共有 147 个 PR 合并或关闭，主要集中在修复关键 Bug、提升 UI 体验与优化底层架构。

*   **多平台消息投递修复**：PR #90212 修复了原生 `/compact` 指令回复丢失的问题，PR #89659 为飞书发送限频错误增加了重试机制，提升了消息投递的可靠性。
*   **移动端控制面优化**：PR #91557 大幅改进了 iPad 和 iPhone 的控制界面，引入了侧边栏导航模型，移动端体验向桌面端看齐。
*   **安全与权限控制**：PR #78441 实现了 `sessions_spawn` 时的 `toolsAllow` 转发，完善了子智能体的权限边界；PR #85264 优化了 Windows 路径缓存的 Scope，提升了安全性与性能。
*   **性能优化**：PR #91580 针对密集文本增量场景优化了快照存储，减少了内存与存储占用。

## 4. 社区热点

今日社区讨论焦点集中在架构改进、模型适配与生态建设上：

1.  **多编码文件名支持架构争议** ([#48788](https://github.com/openclaw/openclaw/issues/48788))
    评论数高达 18 条。社区针对如何构建集中式文件名编码工具以解决飞书、Shift-JIS 等多编码乱码问题进行了深入讨论，目前 PR #48578 仅解决了部分 UTF-8 问题，社区呼吁更具普适性的架构方案。
2.  **GPT-5.4/5.5 适配失败** ([#90083](https://github.com/openclaw/openclaw/issues/90083))
    评论 15 条。用户报告升级到 2026.6.1 后，OpenAI/ChatGPT Responses 推理在 `gpt-5.4` 和 `gpt-5.5` 上失败，错误为 `invalid_provider_content_type`。这是对新模型支持的高优先级反馈。
3.  **Skill 生态发展瓶颈** ([#50090](https://github.com/openclaw/openclaw/issues/50090))
    评论 15 条。讨论了当前 Skill 开发与 ClawHub 发布体验之间的差距，呼吁建立更活跃的社区 Skill 生态。
4.  **会话上下文混乱** ([#32296](https://github.com/openclaw/openclaw/issues/32296))
    评论 14 条。Agent 回复历史消息而非当前消息的问题引发了广泛关注，涉及 Session 状态管理的核心逻辑。

## 5. Bug 与稳定性

今日报告了多个严重影响使用的问题，部分已有修复 PR，部分尚在定位中：

*   **[P1] GPT-5 模型调用失败** ([#90083](https://github.com/openclaw/openclaw/issues/90083))：新版本导致 GPT-5.4/5.5 无法正常推理。
*   **[P1] Session 上下文错乱** ([#32296](https://github.com/openclaw/openclaw/issues/32296))：Agent 回复旧消息，导致对话脱节。
*   **[P1] Telegram 流式文本丢失** ([#87326](https://github.com/openclaw/openclaw/issues/87326))：工具调用中间产生的文本块被最终文本块覆盖，导致用户只能看到最后一部分内容。**已修复** (Closed)。
*   **[P2] 硬编码工作路径** ([#51429](https://github.com/openclaw/openclaw/issues/51429))：代码中发现硬编码的用户路径 (`/Users/wangtao`)，导致运行异常，属于低级但严重的代码质量回归。
*   **[Security] Prompt 注入漏洞** ([#45740](https://github.com/openclaw/openclaw/issues/45740))：`gh-issues` skill 将未经清洗的 Issue body 直接注入 sub-agent prompt，存在安全隐患。

## 6. 功能请求与路线图信号

*   **多编码架构支持** ([#48788](https://github.com/openclaw/openclaw/issues/48788))：针对多平台文件名乱码，社区强烈需要一个统一的编码处理层，预计将成为近期架构优化的重点。
*   **Agent 成本预算控制** ([#42475](https://github.com/openclaw/openclaw/issues/42475))：请求在网关层面增加按 Agent 维度的日/月预算上限功能，防止意外超支。目前 OpenClaw 仅有 Session 级别监控。
*   **Skill 优先级配置** ([#50199](https://github.com/openclaw/openclaw/issues/50199))：随着 Skill 增多，用户请求增加优先级配置以解决冲突，这表明 Skill 调度机制需要进一步智能化。
*   **MathJax/LaTeX 渲染支持** ([#42840](https://github.com/openclaw/openclaw/issues/42840))：用户强烈请求在 Control UI 中支持数学公式渲染，以满足学术/科研场景需求。

## 7. 用户反馈摘要

*   **痛点：Session 状态管理**：多位用户反馈 Session 状态管理不稳定，包括子智能体变成僵尸进程 ([#48573](https://github.com/openclaw/openclaw/issues/48573))、会话上下文混淆 ([#32296](https://github.com/openclaw/openclaw/issues/32296))，这已成为用户信任度的核心痛点。
*   **痛点：多渠道接入细节**：飞书、Telegram 等渠道的流式输出、文件名编码细节问题频发，用户期望在多模态/多平台场景下有更一致的表现。
*   **认可：移动端体验提升**：PR #91557 的合并（iPad/iPhone 控制面改进）受到了期待移动端体验改善的用户关注。
*   **不满：文档滞后**：Issue #48920 指出 Live Docs 内容领先于 Release 版本，导致用户配置 `IsolatedSessions` 时困惑。

## 8. 待处理积压

今日 Issue 积压量显著增加，以下高价值 Issue 长期未得到彻底解决，建议维护者优先关注：

1.  **[P1] 控制面板 UI 卡顿** ([#45698](https://github.com/openclaw/openclaw/issues/45698))：用户反馈控制面板在开启一段时间后逐渐卡死，严重影响操作体验，标签包含 `impact:crash-loop`。
2.  **[P1] Memory 管理混乱** ([#43747](https://github.com/openclaw/openclaw/issues/43747))：记忆存储路径不一致、向量化失败等问题长期困扰部分用户，核心功能亟需修复。
3.  **[P2] Docker 沙箱容器名称冲突** ([#51363](https://github.com/openclaw/openclaw/issues/51363))：在同一主机运行多实例时存在 Docker 容器名冲突，阻碍了多实例部署场景。
4.  **[P2] TTS 提供商切换失效** ([#52186](https://github.com/openclaw/openclaw/issues/52186))：配置 ElevenLabs 后仍播放 OpenAI 语音，影响功能使用。

---

## 横向生态对比

# 开源 AI 智能体生态横向对比分析日报 (2026-06-09)

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于从“单一对话”向“多模态、多渠道、自进化”跨越的关键期。**OpenClaw** 以压倒性的社区活跃度领跑，但面临快速迭代带来的稳定性挑战；**NanoBot** 与 **CoPaw** 在多模态输入与插件生态上发力显著，分别在语音交互和自进化架构上取得突破；**IronClaw** 与 **Zeroclaw** 则在底层架构重构与企业级安全隔离上深挖，显示出向生产环境迁移的趋势。整体来看，Session 状态管理、MCP 工具链兼容性以及跨平台部署体验成为今日各项目共同的攻坚焦点。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新/新开 | PRs 更新/合并 | 版本发布 | 核心动态 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 / 426 | 459 / 147 | 2 Beta | QQBot/MCP 适配，积压增加，P1 级 Bug 待解 | ⚠️ 高活跃/高风险 |
| **NanoBot** | - / - | 34 / 15 | 无 | STT 生态扩充，跨智能体通信落地，安全修复 | ✅ 健康/稳健 |
| **Zeroclaw** | 50 / - | 50 / 10 | 无 | Matrix 会话隔离修复，IoT 集成，MCP 过滤争议 | ✅ 健康/攻坚 |
| **Hermes Agent** | 50 / 44 | 50 / 7 | 无 | 平台兼容性修复，iMessage 重构，安全策略讨论 | ✅ 健康/活跃 |
| **IronClaw** | - / - | 50 / 24 | 准备中 | Reborn 架构迁移，生产环境升级故障频发 | ⚠️ 重构期/波动 |
| **CoPaw** | 39 / - | 43 / 22 | 无 | 插件市场扩展，TUI 集成，自进化 Agent 讨论 | ✅ 高增长/扩展 |
| **LobsterAI** | - / - | 18 / 17 | 无 | 桌面端体验优化，数据迁移体系构建 | ✅ 稳定/打磨 |
| **PicoClaw** | - / 3 | 20 / 9 | Nightly | 代码质量加固，Delta Chat 支持，RISC-V 适配痛点 | ✅ 稳健/边缘探索 |
| **NanoClaw** | - / - | 4 / 3 | 无 | 安全加固，容器网络隔离探索 | ⚠️ 低活跃/维护 |
| **TinyClaw** | 0 / 0 | 1 / 0 | 无 | 安装流程优化提案 | ⚠️ 低活跃/停滞 |
| **Moltis/Zepto/Easy** | 0 / 0 | 0 / 0 | 无 | 无活动 | 🔴 静默 |

## 3. OpenClaw 在生态中的定位
OpenClaw 目前是生态中**规模最大、迭代最快**的项目，具有明显的先发优势和社区规模效应。
*   **优势**：社区反馈极其活跃（单日 Issue 500+），对新兴模型（GPT-5 系列）和热门渠道（QQBot）的响应速度极快，功能覆盖面广（从移动端 UI 到 MCP 工具链）。
*   **技术路线差异**：相比 NanoBot 的学术研究导向和 PicoClaw 的边缘计算导向，OpenClaw 更偏向**应用层快速集成**，致力于成为多渠道聚合的“超级助手”。
*   **社区规模对比**：Issue 与 PR 数量是第二梯队（NanoBot, Hermes 等）的 10 倍以上，但也积累了大量未解决的 P1 级稳定性问题，处于“大而不强”的临界点，急需从功能堆砌转向架构稳固。

## 4. 共同关注的技术方向
各项目今日动态揭示了三个明确的技术趋同方向：

1.  **Session 状态与上下文管理**（涉及 OpenClaw, Zeroclaw, Hermes Agent）
    *   **诉求**：OpenClaw 的 Session 混乱 (#32296)、Zeroclaw 的 Matrix 会话冲突 (#6487)、Hermes 的上下文破坏 (#42449) 均表明，随着多轮对话和多智能体协作的深入，**状态一致性**是当前架构的最大痛点。

2.  **MCP 工具链标准化与安全**（涉及 OpenClaw, Zeroclaw, CoPaw）
    *   **诉求**：OpenClaw 在强制转换 MCP 结果，Zeroclaw 在讨论 MCP 工具过滤 (#6699)，CoPaw 在清洗 MCP 工具名。这反映了社区对**标准化工具调用接口**的迫切需求，以及在安全边界控制上的缺失。

3.  **多模态交互扩展**（涉及 NanoBot, OpenClaw, PicoClaw）
    *   **诉求**：NanoBot 集成大量 STT 引擎，OpenClaw 优化 QQBot 推理过滤，PicoClaw 支持 Telegram 定位。语音、图像、地理位置等多模态输入正在成为 AI 助手的标配能力。

## 5. 差异化定位分析

*   **功能侧重**：
    *   **OpenClaw & CoPaw**：侧重**生态连接与插件化**。OpenClaw 聚焦 IM 渠道（QQ/飞书/Telegram），CoPaw 聚焦插件市场与自进化能力。
    *   **NanoBot & IronClaw**：侧重**底层架构与协作**。NanoBot 发力多智能体通信总线，IronClaw 全力重构 Reborn 架构，均旨在解决 Agent 协作的基础设施问题。
    *   **PicoClaw & TinyClaw**：侧重**轻量化与边缘部署**。关注 RISC-V 架构和原生模块编译优化，意图在嵌入式设备落地。

*   **目标用户**：
    *   **OpenClaw**：大众用户及 IM 机器人开发者，追求“开箱即用”。
    *   **IronClaw & Zeroclaw**：企业级用户，关注安全隔离、多租户与可观测性。
    *   **NanoBot**：研究型开发者，关注多模态算法集成与跨智能体实验。

*   **技术架构**：
    *   **Desktop-heavy**：LobsterAI 和 Hermes Agent 重仓桌面端体验（登录、通知、Tauri/Electron 框架）。
    *   **Container-first**：NanoClaw 和 Zeroclaw 优先考虑 Docker 与网络安全隔离。

## 6. 社区热度与成熟度

*   **快速迭代期（活跃度高，稳定性波动）**：
    *   **OpenClaw**：功能爆发但 Bug 积压严重，需警惕社区信任危机。
    *   **IronClaw**：架构重构期，生产环境故障频发，属于“阵痛期”。
    *   **CoPaw**：功能扩展迅速，社区对“自进化”特性讨论热烈，处于上升期。

*   **质量巩固期（活跃度中，稳定性好）**：
    *   **NanoBot**：稳步推进多模态与协作功能，Bug 修复及时，代码质量高。
    *   **LobsterAI**：集中修复桌面端细节体验，打磨产品完成度。
    *   **Zeroclaw**：专注于解决高危 Bug（会话冲突、历史误删），项目走向成熟。

*   **维护/停滞期**：
    *   **TinyClaw, NanoClaw**：更新频率低，仅做基础维护或安全修补。
    *   **Moltis, ZeptoClaw, EasyClaw**：处于静默状态。

## 7. 值得关注的趋势信号

1.  **Agent “大脑”能力分化**：
    *   CoPaw 社区提出的“学习循环”（从行为中自动创建技能）(#5017) 和 IronClaw 引入 `planner` 子智能体，标志着 Agent 正从**被动工具调用者**向**主动规划与自我进化者**演进。这是继 Prompt Engineering 之后的核心竞争点。

2.  **安全边界成为企业级入场券**：
    *   NanoClaw 的网络隔离 PR、Hermes 的 Skill 安全策略讨论、Zeroclaw 的 MCP 过滤问题，均显示项目方正试图解决 Agent 在企业环境下的“越权”与“数据泄露”风险。**安全合规**将成为下一阶段区分玩具与生产级工具的分水岭。

3.  **端侧与边缘计算崛起**：
    *   PicoClaw 在 RISC-V 架构上的尝试和 TinyClaw 的原生模块优化，暗示着 AI 助手正在寻求摆脱云端依赖，向**隐私更强、延迟更低**的本地化/边缘化场景渗透。

4.  **Session 管理技术债爆发**：
    *   多个头部项目今日均暴露出严重的 Session/Context 管理问题（OpenClaw 上下文混乱、Zeroclaw 数据覆盖、Hermes 上下文破坏）。建议开发者在设计新系统时，将**有状态的流式会话管理**作为核心架构组件优先设计，而非简单的 KV 存储。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-09)

## 1. 今日速览
NanoBot 项目今日维持高活跃度，核心开发与社区贡献并驾齐驱。过去 24 小时内共有 34 个 PR 更新，其中 15 个已合并/关闭，显示项目正在快速迭代收敛。功能上，语音转文字（STT）生态大幅扩充，跨智能体通信与 WebUI 易用性得到显著增强。安全性方面，修复了符号链接逃逸等关键漏洞，整体项目健康度良好，正积极向多模态与协作化方向演进。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 15 个 PR 合并或关闭，主要推进了以下方面：

*   **多模态能力扩充**：合并了 [PR #4224](HKUDS/nanobot PR #4224) (AssemblyAI)、[PR #4175](HKUDS/nanobot PR #4175) (小米 MiMo ASR) 和 [PR #4113](HKUDS/nanobot PR #4113) (OpenRouter STT)，大幅增强了语音转录的供应商选择，特别是优化了中文语音识别支持。
*   **跨智能体协作**：[PR #3992](HKUDS/nanobot PR #3992) 已关闭，标志着跨实例消息总线功能正式落地，NanoBot 现已支持多智能体实例间的通信，这是迈向 Agent 协作网络的关键一步。
*   **兼容性与配置**：[PR #4217](HKUDS/nanobot PR #4217) 合并，为 OpenAI 兼容提供商增加了 `extra_query` 参数支持，解决了 Azure 风格网关的兼容性问题。
*   **稳定性修复**：[PR #4219](HKUDS/nanobot PR #4219) 修复了会话历史中孤立工具结果导致的上下文污染问题；[PR #4221](HKUDS/nanobot PR #4221) 修复了受限 Exec 环境下相对符号链接可能导致的工作区逃逸漏洞，提升了系统安全性。

## 4. 社区热点
今日社区关注点集中在易用性与多模态交互上：

*   **[Issue #4253](HKUDS/nanobot Issue #4253) [enhancement]**: 用户希望能按会话覆盖模型配置。这反映了用户在“高性能云端模型”与“隐私本地模型”间动态切换的强需求，目前的解决方案尚不完美，引发了关于配置优先级的讨论。
*   **[PR #4252](HKUDS/nanobot PR #4252) [webui]**: WebUI 端 TeX 数学公式渲染的支持。作为评论较多的 PR，表明技术型用户对数学排版有较高要求，该 PR 试图解决 `$...$` 等分隔符的解析冲突。
*   **[PR #4177](HKUDS/nanobot PR #4177) [docs]**: 针对新手的引导文档优化。说明项目正在降低入门门槛，积极吸纳新手反馈。

## 5. Bug 与稳定性
今日修复与报告的 Bug 主要涉及崩溃、逻辑错误与安全隐患：

*   **[严重] 安全漏洞修复**：[PR #4221](HKUDS/nanobot PR #4221) 修复了 `ExecTool` 中相对符号链接可能导致越权访问工作区外文件的问题，已合并。
*   **[中等] Telegram 消息分割 Bug**：[Issue #4250](HKUDS/nanobot Issue #4250) 报告 `split_message` 函数在分割长消息时会破坏代码块结构，导致渲染错误。[PR #4257](HKUDS/nanobot PR #4257) 已提交修复，待合并。
*   **[中等] 微信通道静默死循环**：[PR #4223](HKUDS/nanobot PR #4223) 指出微信 Session 过期后未重载状态导致永久静默的问题，目前 PR 待合并。
*   **[中等] 会话历史污染**：[PR #4219](HKUDS/nanobot PR #4219) 修复了修剪历史记录前未清理孤立工具结果的问题，已合并。

## 6. 功能请求与路线图信号
*   **多模型动态切换**：[Issue #4253](HKUDS/nanobot Issue #4253) 提出的按会话切换模型需求，可能促使开发团队重新设计配置层级的 Override 逻辑。
*   **多模态交互优化**：[Issue #4251](HKUDS/nanobot Issue #4251) 请求支持直接上传文件/图片并解析，虽已关闭，但结合今日大量 STT 功能的合并，多模态输入（语音、文件、图像）显然是下一阶段的重点。
*   **版本感知**：[Issue #4233](HKUDS/nanobot Issue #4233) 请求在 UI 显示版本号及更新提醒，表明用户对版本管理的关注度提升，属于体验优化的常规路线。

## 7. 用户反馈摘要
*   **痛点：配置灵活性**：用户希望在不同场景（如涉及隐私时）快速切换模型，而不必修改全局配置文件 ([Issue #4253](HKUDS/nanobot Issue #4253))。
*   **痛点：特定网关兼容**：企业级用户在使用 Azure 等非标准 OpenAI 网关时遇到参数缺失问题，今日已通过 `extra_query` 支持 ([Issue #4204](HKUDS/nanobot Issue #4204)) 得到解决。
*   **满意度**：社区对多 STT 提供商的支持反响积极，尤其是小米 MiMo 的接入被认为对中文语音场景非常有价值。

## 8. 待处理积压
*   **[PR #4170](HKUDS/nanobot PR #4170)**: 邮件 IMAP 后处理功能 PR，自 06-03 开启至今未合并，涉及 Agent 自动化管理邮件的核心逻辑，建议维护者尽快 Review。
*   **[PR #4119](HKUDS/nanobot PR #4119)**: 另一个关于符号链接逃逸的修复 PR，与已合并的 #4221 功能重叠，需确认是否需要关闭或作为补充方案。
*   **[PR #4053](HKUDS/nanobot PR #4053)**: 文件系统只读根目录保护 PR，涉及权限安全核心逻辑，自 05-29 开启，需关注合并进度。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-09)

## 1. 今日速览
Zeroclaw 项目今日维持高活跃度，Issue 与 PR 更新量均达到 50 条，显示社区开发迭代正处于密集期。虽然没有新版本发布，但多个关键修复 PR 已合并，显著提升了系统稳定性，特别是修复了 Matrix 会话冲突和消息历史误删等高危问题。讨论热点集中在 MCP 工具过滤失效和 Computer-use 功能的支持上，反映出社区对 Agent 工具链能力扩展的强烈需求。整体来看，项目正处于功能完善与架构重构并行的阶段，安全性与可观测性得到进一步加强。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 10 个 PR 被合并或关闭，重点修复了运行时稳定性、多实例路由和硬件集成支持：

*   **[MERGED] Matrix 多实例会话隔离修复 (PR #7388)**：修复了多别名 Matrix 实例共享同一会话存储导致互相覆盖的严重 Bug（Issue #6487）。这是一个**破坏性变更**，升级后需要手动迁移会话数据，运维需特别注意。
*   **[MERGED] 历史记录修剪保护 (PR #7403)**：修复了 `trim_history` 在孤儿级联删除时可能清空所有非系统消息的风险，防止对话上下文意外丢失。
*   **[MERGED] ESP32 硬件演示集成 (PR #6148)**：合并了 Hackathon 项目，支持通过 Telegram 机器人 + 模拟器控制 ESP32 智能房间，标志着项目在 IoT/硬件控制方向的探索已落地。
*   **[OPEN] 文档与架构重构 (PR #7365)**：大型文档重构 PR 正在推进，旨在从源码自动生成配置说明，提升文档准确性与可维护性。

## 4. 社区热点
今日讨论最活跃的议题集中在 Agent 工具链的安全性与扩展性：

*   **[Issue #6699] MCP 工具过滤配置失效 (👍 0, 评论 7)**
    *   **诉求**：用户报告 `tool_filter_groups` 对真实 MCP 工具无效，导致安全策略形同虚设。
    *   **分析**：这是一个高风险 Bug，涉及运行时调度层的逻辑错误。社区正激烈讨论修复方案，需关注其对 MCP 生态兼容性的影响。
*   **[Issue #6909] RFC: Computer-use 支持 (👍 0, 评论 6)**
    *   **诉求**：提议增加 GUI 控制能力（截屏、键鼠模拟），对标 OpenAI Codex。
    *   **分析**：这是 Agent 走向通用自动化的关键能力，评论中主要讨论了安全边界与跨平台实现方案，属于高优先级的 Roadmap 信号。
*   **[Issue #5844] 记忆权重过高影响 Prompt 响应 (👍 0, 评论 5)**
    *   **诉求**：用户反馈 Agent 过度依赖历史记忆，导致响应偏离当前指令。
    *   **分析**：反映了 RAG 与 Prompt 权重平衡的痛点，需调整系统提示词或记忆检索策略。

## 5. Bug 与稳定性
今日报告了多个高危 Bug，部分已有修复方案：

*   **[P0/S0] Matrix 会话冲突与数据丢失 (Issue #6487)**
    *   严重性：数据丢失风险。
    *   状态：**已修复** (PR #7388)。多实例共用 Session 导致账户互踢。
*   **[P1/S0] Shell 工具在 Full Autonomy 模式下被拒绝 (Issue #6434)**
    *   严重性：核心功能受阻。
    *   状态：In Progress。即使配置了完全自主，Shell 命令仍无法下发，严重影响自动化流程。
*   **[P1/S0] 文件写入静默失败 (Issue #4627)**
    *   严重性：数据丢失风险。
    *   状态：**修复中** (PR #7129)。PR 已提交，增加对临时工作区的检测与报错。
*   **[P1/S1] Gemini 模型工具调用顺序错误 (Issue #6302)**
    *   严重性：工作流阻断。
    *   状态：In Progress。Assistant 消息置于 User 之前导致 API 400 错误。

## 6. 功能请求与路线图信号
从 Issues 和 PRs 中识别出以下关键架构演进方向：

*   **安全架构重构**：Issue #7142 提议将安全执行层抽象为 Provider 接口，Issue #7155 请求对高风险 Shell 命令增加"单次执行确认"层级。这表明项目正在从简单的 Allow/Deny 列表转向更细粒度的动态安全策略。
*   **企业级认证支持**：Issue #7141 (OIDC 支持) 正在推进，目标是 v0.9.0 版本，显示项目正积极适配企业级 IAM 环境。
*   **本地优先模式**：Issue #5287 建议为小模型提供无工具、防泄露的紧凑模式，反映了边缘部署与隐私保护的需求上升趋势。

## 7. 用户反馈摘要
*   **痛点：安全策略误杀** (Issue #4832)：用户抱怨 `LeakDetector` 将哈希文件名误判为高熵 Token 并掩盖，导致正常文件操作受阻，呼吁增加配置开关。
*   **痛点：OAuth 流程易碎** (Issue #4879)：Gemini CLI OAuth 频繁失败，错误信息模糊，影响了多模型切换的体验。
*   **场景：CI/CD 集成** (Issue #6074)：有用户请求恢复之前因回滚丢失的 153 个提交内容，表明部分用户依赖的功能（如特定 Bug 修复）在历史版本中丢失，急需补回。

## 8. 待处理积压
*   **[Help Wanted] Issue #6074 (审计丢失提交)**：由于 3 个月前的一次批量回滚，导致大量已合并的修正是丢失。目前需要人力逐一检查并恢复，这对项目代码历史的完整性至关重要。
*   **[Stale] Issue #5542 (WSL2 OOM)**：WSL2 环境下频繁 OOM 的问题长期未解决（创建于 4 月），严重影响该平台用户的稳定性，建议优先排查内存泄漏点。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-09)

## 1. 今日速览
Hermes Agent 项目今日保持高活跃度，社区互动频繁，共产生 **50 条 Issue 更新**（其中 44 条为新开或活跃讨论）和 **50 条 PR 更新**。项目重心目前明显向 **平台兼容性修复**（特别是 macOS launchd 和 Windows 环境）与 **多平台适配增强**（iMessage、WeCom、SimpleX）倾斜。尽管无新版本发布，但针对 Desktop UI 交互和 Gateway 稳定性的修复补丁正在密集审查中，显示出维护者对当前用户反馈的快速响应能力。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **7 个 PR 被合并或关闭**，主要集中在用户体验优化和底层稳定性修复：

*   **Dashboard 注册体验优化**：PR #42455 已合并，实现了 `hermes dashboard register` 的幂等性，解决了重复注册产生重复记录的问题，降低了用户在 OAuth 配置时的困惑。
*   **文件路径处理修复**：针对 Issue #42556 提出的路径中空格转义问题，PR #42583 提交了修复方案，解决了 `write_file` 等工具在处理包含空格路径（如 `Obsidian\ Vault`）时创建错误目录的 Bug。
*   **Gateway 稳定性提升**：PR #42450 正在审查中，旨在修复 macOS 26+ 上 `launchd` 双重启动导致的死循环问题（关联 Issue #21549, #42446），这是今日社区关注的高优先级修复。

## 4. 社区热点
今日讨论最热烈的问题集中在核心功能的可靠性与跨平台一致性：

*   **[功能请求] Skill 安全策略一致性**：Issue #27997 引发了关于“声明式 Skill 保护策略”的深入讨论（7 条评论）。用户指出当前安全规则分散在多个文件中，且 `skill_manager_tool.py` 存在高危缺口，呼吁引入集中式策略管理。
*   **[Bug] Dashboard 聊天交互受阻**：Issue #24860 反馈 Dashboard 聊天界面的 Ctrl+V 粘贴功能失效且不支持图片粘贴（6 条评论），影响了核心交互体验。
*   **[Bug] Docker 容器日志死锁**：Issue #34457 报告了在多容器共享卷场景下 `s6-log` 锁冲突导致的无限崩溃循环（6 条评论），对 Docker 部署用户影响较大。

## 5. Bug 与稳定性
今日报告的 Bug 涵盖了 Gateway、Desktop 及底层工具链，部分已有修复方案：

*   **P1 - 严重稳定性问题**：
    *   **macOS Gateway 死循环**：Issue #21549 与 #42524 均指出 macOS 26+ 上 Gateway 因 `launchd` 或 `launchctl` 异常导致不断重启或启动失败。目前已有 PR #42450 尝试修复其中一部分。
    *   **Agent 上下文破坏**：Issue #42449 指出 `delegate_task` 会通过共享单例破坏父 Agent 的 `context_length`，属于核心逻辑缺陷。
*   **P2 - 功能受损**：
    *   **认证头缺失**：Issue #42130 报告 OpenRouter 配置正确但请求不带 Auth Header，导致 401 错误，该 Issue 已关闭（可能在 PR 中修复）。
    *   **计费逻辑错误**：Issue #42536 指出 Z.AI 提供商会错误优先扣费钱包余额而非订阅配额，涉及用户切身利益。
*   **已有修复方案的 Bug**：
    *   Issue #42556 (路径空格 Bug) -> PR #42583
    *   Issue #42479 (UI 停止状态未清除) -> PR #42579

## 6. 功能请求与路线图信号
社区正在推动 Hermes 向更完善的生态系统发展：

*   **平台适配深化**：
    *   WeCom (企业微信)：Issue #38641 请求支持流式输出与消息编辑；PR #41771 已提交相关代码，显示出对国内 IM 平台支持的加强。
    *   iMessage：PR #42507 和 #42584 正在通过 gRPC 重构 iMessage 通道，使其支持富媒体交互，有望在下一版本合入。
*   **记忆系统扩展**：Issue #42506 请求将 `usememos` 作为官方记忆后端插件，反映了用户对轻量级自托管记忆解决方案的需求。

## 7. 用户反馈摘要
从今日 Issues 中提炼出的用户真实声音：

*   **Windows 用户痛点**：Issue #41933 详细描述了 Windows 桌面版首次启动时核心工具（如 Node.js, ffmpeg）检测机制的僵化，即便安装了工具也无法识别，导致引导流程中断。
*   **Desktop UI 细节**：用户对 UI 细节敏感度提高，如侧边栏会话复制 ID 无效（Issue #42468）、停止按钮状态残留（Issue #42479）等，表明 Desktop 应用正进入精细化打磨阶段。
*   **开发者体验**：Issue #42536 关于计费优先级的反馈表明，用户在使用第三方 API 时非常关注成本控制的透明度与准确性。

## 8. 待处理积压
建议维护者优先关注以下高优先级且尚在讨论中的 Issue：

*   **Issue #27997**：Skill 安全策略分散问题，涉及核心安全架构，需尽快确立解决方案。
*   **Issue #42449**：`delegate_task` 上下文破坏问题，直接影响多 Agent 协作的稳定性，目前尚无关联修复 PR。
*   **Issue #21549 / #42524**：macOS 新版本下的 Gateway 启动问题日益突出，影响 Darwin 平台用户的基础使用。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 (2026-06-09)

## 1. 今日速览
PicoClaw 项目今日保持高度活跃，共有 **20 个 PR 更新** 和 **3 个 Issue 更新**。项目重心主要集中在 **代码质量提升与稳健性增强**，多位贡献者提交了大量针对错误处理、类型断言和日志规范的修复 PR。功能方面，社区迎来了 **Delta Chat 网关** 的新增支持，并修复了 Telegram 位置消息处理的遗漏问题。今日发布了 `v0.2.9-nightly` 自动构建版本，标志着项目正在向下一个稳定版本迭代。

## 2. 版本发布
- **[nightly: Nightly Build](https://github.com/sipeed/picoclaw/releases/tag/nightly)**
  - **版本号**: `v0.2.9-nightly.20260609.46b29a0a`
  - **说明**: 自动化构建版本，包含了最新的代码提交，可能存在不稳定性，仅供测试使用。
  - **变更范围**: 涵盖了今日合并的所有 Bug 修复与功能更新。

## 3. 项目进展
今日项目进展显著，主要集中在**防御性编程**和**渠道适配**优化，共有 9 个 PR 被合并/关闭。

### 🛠️ 代码质量与稳健性（核心进展）
贡献者 `@chengzhichao-xydt` 提交并合并了一系列 PR，系统性地修复了代码中的潜在崩溃风险和错误处理不规范问题：
- **错误处理规范化**: 在 [PR #3051](https://github.com/sipeed/picoclaw/pull/3051) 中将错误包装从 `%v` 修正为 `%w`，确保调用链可追溯；在 [PR #3066](https://github.com/sipeed/picoclaw/pull/3066) 等多处显式处理了 `Close()` 错误。
- **防御性编程**: 修复了多处未检查的类型断言，防止配置异常时的 Panic（如 [PR #3057](https://github.com/sipeed/picoclaw/pull/3057)、[PR #3064](https://github.com/sipeed/picoclaw/pull/3064)）。
- **日志优化**: [PR #3050](https://github.com/sipeed/picoclaw/pull/3050) 移除了散落的 `fmt.Printf`，统一接入结构化日志系统。

### ✨ 功能扩展与修复
- **新增 Delta Chat 支持**: [PR #3063](https://github.com/sipeed/picoclaw/pull/3063) 开启了对 Delta Chat 渠道的支持，扩展了项目的 IM 生态。
- **Telegram 功能完善**: [PR #3052](https://github.com/sipeed/picoclaw/pull/3052) 修复了 Telegram 频道无法处理位置消息的问题，现已合并。
- **Windows 体验优化**: [PR #3061](https://github.com/sipeed/picoclaw/pull/3061) 提交了修复 Windows 下子进程控制台闪烁的方案，待合并。

### 🐛 关键 Bug 修复
- [PR #3052](https://github.com/sipeed/picoclaw/pull/3052): 修复 Telegram 忽略位置消息（已合并）。
- [PR #3055](https://github.com/sipeed/picoclaw/pull/3055): 处理了构建上下文时的 `os.Getwd` 错误（已合并）。

## 4. 社区热点
今日讨论最为热烈的问题是 **RISC-V 架构的兼容性**。

- **[Issue #2887](https://github.com/sipeed/picoclaw/issues/2887) [RISC-V] .deb version not functional with OpenAI model**
  - **热度**: 9 条评论，近期持续活跃。
  - **诉求**: 用户在 RISC-V 设备上运行 PicoClaw 时遇到功能性障碍。这反映了 PicoClaw 在边缘计算设备（如开发板）上的用户需求正在增长，同时也暴露了跨架构编译/适配的短板。

## 5. Bug 与稳定性

### 🚨 高优先级 Bug (Open)
- **[Issue #2887](https://github.com/sipeed/picoclaw/issues/2887) [RISC-V] 功能性缺失**: 用户无法在 RISC-V 架构上使用 OpenAI 模型。目前尚未有明确的修复 PR，建议维护者优先关注。
- **[Issue #3015](https://github.com/sipeed/picoclaw/issues/3015) [Windows] QQ 频道连接失败**: Windows 版本在启动 QQ 频道网关时出现 Token 获取超时，影响国内用户在特定平台的部署。

### ✅ 已修复 Bug
- **[Issue #3049](https://github.com/sipeed/picoclaw/issues/3049) [Telegram] 位置消息被忽略**: 用户发送定位被系统无视。
  - **状态**: 已由 [PR #3052](https://github.com/sipeed/picoclaw/pull/3052) 修复并关闭，现在位置信息将被转化为文本传递给 Agent。

## 6. 功能请求与路线图信号
- **Delta Chat 集成 ([PR #3063](https://github.com/sipeed/picoclaw/pull/3063))**: 贡献者 `@trufae` 提交了 Delta Chat 网关的实现。这表明项目正在从传统的微信/QQ/Telegram 向去中心化或更隐私的通讯协议扩展，符合个人 AI 助手隐私化趋势。
- **配置持久化修复 ([PR #3067](https://github.com/sipeed/picoclaw/pull/3067))**: 修复了 UI 中 `dm_scope` 无法保存的问题。虽然这是个 Bug 修复，但反映了项目正在完善 WebUI 的配置管理体验，这对于无代码部署用户至关重要。

## 7. 用户反馈摘要
从 Issue 详情分析，用户痛点集中在以下方面：
1.  **跨平台一致性**: Windows 版本体验不如 Linux，存在控制台闪烁 ([PR #3061](https://github.com/sipeed/picoclaw/pull/3061)) 和特定渠道连接问题 ([Issue #3015](https://github.com/sipeed/picoclaw/issues/3015))。
2.  **多模态交互**: 用户期望 AI 能处理纯文本以外的信息，如地理位置 ([Issue #3049](https://github.com/sipeed/picoclaw/issues/3049))。
3.  **边缘设备支持**: RISC-V 用户的反馈表明 PicoClaw 正在被尝试部署在嵌入式或开发板环境中，对架构兼容性要求较高。

## 8. 待处理积压
- **[PR #2904](https://github.com/sipeed/picoclaw/pull/2904) Fix agent loop reload and panic**: 这是一个涉及 Agent 核心循环稳定性的重要修复，自 5 月 20 日开启至今未合并。该 PR 解决了重载时的 Goroutine 泄露和 Panic 问题，对长期运行稳定性至关重要，建议维护者尽快 Review。
- **[Issue #2887](https://github.com/sipeed/picoclaw/issues/2887) RISC-V 兼容性**: 此 Issue 已存在一段时间且近期有活跃评论，但目前无官方回应或 Assignee，建议项目方确认是否支持 RISC-V 架构。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-09)

## 1. 今日速览
NanoClaw 项目今日呈现出较高的维护活跃度，核心聚焦于系统安全性与容器化配置的优化。过去 24 小时内，项目处理了 4 个 Pull Requests，其中 3 个已关闭，1 个待合并的安全修复 PR 正处于审核阶段。虽然无新版本发布，但社区贡献者积极提交了针对认证机制和网络隔离的增强方案。新增的 Issue #2715 揭示了 WhatsApp 集成中文件挂载路径的关键缺陷，可能影响多模态数据的正常处理，需引起维护者重视。整体来看，项目正处于安全加固的关键迭代期。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日项目主要在安全加固和代码质量控制方面取得进展：
*   **安全防护增强**：PR #2714 目前处于 Open 状态，该 PR 修复了四处认证与安全问题，包括将 webhook-server 默认绑定至 `127.0.0.1` 以减少攻击面，以及使用 `crypto.randomUUID()` 替代 `Math.random()` 以防止 ID 预测攻击。这将显著提升 Agent 运行的安全基线。
*   **网络隔离探索**：PR #2713 提出了一种可选的“出口流量锁定”方案，试图通过 Docker 内部网络限制 Agent 的互联网访问，仅允许通过网关转发。该 PR 目前显示为 Closed 状态，可能意味着方案被驳回或需要重新设计，但反映了社区对企业级安全隔离的强烈需求。
*   **流程维护**：PR #2716 和 #2712 均已关闭，涉及测试验证与贡献指南遵循，表明项目对代码合并流程有严格把控。

## 4. 社区热点
今日社区关注点主要集中在以下议题：
*   **[Issue #2715](nanocoai/nanoclaw Issue #2715)**: 报告了 WhatsApp 入站媒体文件（图片/文档/音频）无法被 Agent 访问的问题。这是一个功能性阻断问题，直接影响了用户通过主流即时通讯软件与 Agent 交互的体验，反映了 Docker 挂载配置与代码逻辑之间的不一致。
*   **[PR #2714](nanocoai/nanoclaw PR #2714)**: 由社区提出的安全修复 PR，针对 webhook 绑定和 ID 生成机制进行了加固，体现了社区对系统底层安全性的关注。

## 5. Bug 与稳定性
今日报告的关键 Bug 主要涉及数据路径挂载问题，按严重程度排列如下：

*   **[严重] 文件挂载路径失效 (Issue #2715)**
    *   **描述**: WhatsApp 入站附件被下载到宿主机的 `DATA_DIR/attachments`，但该目录未挂载到 Agent 容器内。Agent 接收到的是容器内不存在的 `/workspace/attachments/...` 路径，导致无法读取用户发送的图片、文档或音频。
    *   **状态**: Open，暂无修复 PR。
    *   **影响**: 直接导致 WhatsApp 集成中的多模态交互功能失效。

*   **[中等] 安全隐患修复 (PR #2714)**
    *   **描述**: 包含 Webhook 绑定地址过于宽泛（`0.0.0.0`）以及随机数生成器不安全的问题。
    *   **状态**: 已提交修复 PR，待合并。

## 6. 功能请求与路线图信号
根据今日动态，项目路线图呈现以下信号：
*   **安全合规性提升**: 无论是 PR #2713（网络隔离）还是 PR #2714（认证加固），都释放出强烈信号——NanoClaw 正试图满足更高安全标准的企业级部署需求。预计未来版本将默认启用更严格的网络策略和加密标准。
*   **多渠道集成优化**: Issue #2715 暴露出在扩展现部渠道（如 WhatsApp）时，容器化环境下的文件系统抽象层仍存在短板。这提示项目需要审视现有的存储挂载架构，以支持更复杂的文件交互场景。

## 7. 用户反馈摘要
从 Issue #2715 的反馈来看，用户在部署 WhatsApp 等外部集成时，对 Docker 卷挂载与应用内部路径的对应关系存在困惑或遇到阻碍。用户期望 Agent 能“开箱即用”地处理各类媒体文件，而不需要深入排查底层文件系统挂载问题。这反映出在容器化部署场景下，应用层路径配置与基础设施层挂载配置的解耦仍需优化。

## 8. 待处理积压
*   **Issue #2715**: 作为一个阻断性的功能性 Bug，建议维护者优先确认是否为配置文档缺失或代码逻辑缺陷，并尽快给出 Workaround 或修复方案。
*   **PR #2714**: 包含多处安全修复，建议维护者在审核通过后尽快合并，以防止潜在的安全风险。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-09)

## 1. 今日速览
IronClaw 项目今日处于极高强度的开发迭代状态，过去24小时内 PR 更新量达 50 条，其中 24 条已合并/关闭，合并率接近 50%，显示出核心团队极高的代码审查与合并效率。项目重心依然聚焦于代号为 "Reborn" 的下一代架构迁移，涉及认证、存储、API 路由及子智能体等核心模块的重构。尽管工程产出强劲，但生产环境报告了数个值得关注的稳定性问题（如 Telegram 升级后会话丢失、OAuth 登录故障），提示当前版本处于功能快速演进与架构重构并行的波动期。

## 2. 版本发布
今日无正式版 Release 发布。但 PR #3708 显示正在筹备 `v0.29.1` 版本，涉及 `ironclaw_common` 和 `ironclaw_skills` 的破坏性 API 变更。

## 3. 项目进展
今日共有 24 个 PR 被合并，主要推进了 Reborn 架构的功能对等与稳定性建设：
*   **Reborn 架构迁移**：合并了 #4589 (出站目标权限状态)、#4581 (作用域出站投递默认值) 和 #4528 (Slack Host-beta 状态持久化)，进一步补全了 Reborn 在多渠道投递与状态管理上的能力。
*   **子智能体与规划能力**：PR #4572 合并，引入了 `planner` 子智能体风味，替代了原有的 `researcher`，标志着 Agent 自主规划能力迈上新台阶。
*   **UI 与自动化**：PR #4580 合并，新增了自动化运行历史 UI，提升了产品可观测性。
*   **Bug 修复**：PR #4578 修复了 Google Calendar 工具返回最旧事件而非即将到来事件的问题；PR #4523 修复了系统 ResourceScope 在 JSON 序列化/反序列化时的不一致问题。

## 4. 社区热点
今日社区讨论与反馈主要集中在多渠道集成与特定 Provider 配置上：
*   **WeCom (企业微信) 集成验证**：Issue #4191 详细列出了 v0.29.0 Staging 环境下的企业微信集成测试结果，指出了核心消息流稳定，但在特定场景下存在问题，吸引了大量关注。
*   **Minimax Provider 配置失败**：Issue #4587 报告了配置 Minimax 提供商后无法使用的问题，用户在尝试使用 Chat 功能时遇到密钥元数据读取错误。
*   **OAuth 登录阻断**：Issue #4536 反映 SSO 开启后 OAuth 用户无法正常聊天，该问题已被迅速修复并关闭，表明团队对阻塞性问题响应迅速。

## 5. Bug 与稳定性
今日报告的 Bug 暴露了升级迁移过程中的部分兼容性与稳定性风险：
*   **严重 [Production]**：Issue #4556 报告从 0.28.2 升级至 0.29.1 后，Telegram 消息未能接续原有会话，而是创建了新的 Web UI 会话，严重影响用户体验。
*   **严重 [Production]**：Issue #4557 报告部分托管的 Agent 返回 403 Forbidden，尽管实例状态显示为 RUNNING，这可能与权限或认证服务迁移有关。
*   **中等 [Provider]**：Issue #4548 指出在与 DeepSeek 交互时，请求体包含重复的 `model` 字段导致 API 报错 400；Issue #4564 指出 Codex (ChatGPT 订阅) 硬编码版本号导致无法发现 GPT-5.5 等新模型。
*   **已修复**：Issue #4536 (OAuth 登录后无法聊天) 已关闭；Issue #4577 (Google Calendar 时间排序错误) 已通过 PR #4578 修复。

## 6. 功能请求与路线图信号
*   **Reborn 认证与安全**：Issue #4175 和 #3957 正在推进 Reborn 认证后端对齐及第三方 Hook 激活的安全强化，这是 Reborn 上生产环境前的关键路径。
*   **自助密钥管理**：Issue #4545 提出了针对用户生成工具的自助密钥设置功能，旨在解决用户在 Slack/Web/CLI 端配置第三方服务凭证的安全痛点，目前已被标记为 Epic。
*   **轨迹观察**：PR #4588 (Draft) 提出增加 Reborn 运行时的轨迹观察钩子，以便下游调用者实时观察 Agent 步骤，这将增强 Agent 的可解释性与监控能力。

## 7. 用户反馈摘要
*   **升级体验受损**：用户反馈在版本升级后出现会话中断，特别是 Telegram 渠道，这对长期运行的 Agent 来说是致命打击，需重视版本迁移的数据兼容性。
*   **多租户/多用户模式**：OAuth 集成中的问题（#4536）反映了多用户场景下的权限隔离与路由逻辑仍是脆弱点，需加强此方面的 E2E 测试。
*   **国际化 (i18n)**：Issue #4554 指出 WebUI v2 尚有部分硬编码英文字符串，且存在翻译键缺失导致运行时崩溃的情况，说明国际化工作尚未完成。

## 8. 待处理积压
*   **Nightly E2E 测试持续失败**：Issue #4108 显示 Nightly E2E 测试已失败数日，尚未看到修复迹象，可能阻塞后续版本发布。
*   **OpenAI 兼容层迁移**：Issue #3283 及相关 PRs (#4495, #4552) 正在将 OpenAI 兼容 API 迁移至 Reborn 架构，这是目前的工程重点，目前仍处于 Open/Active 状态。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-09)

## 1. 今日速览
LobsterAI 项目今日呈现出极高的开发活跃度，虽然未发布新版本，但代码仓库经历了大规模的合并与清理。过去 24 小时内共有 18 个 PR 更新，其中 17 个已合并/关闭，显示出维护团队正在积极将积累的改进推向主线，为下一次版本发布做准备。今日重点聚焦于**桌面端用户体验优化**（登录流程、通知系统）和**数据安全性增强**（数据迁移与备份），同时也集中解决了一批存留已久的 Bug。社区方面，有用户发起了关于支持 Hermes Agent 框架的新讨论。

## 2. 版本发布
无新版本发布。鉴于今日大量 PR 的合并，预计近期可能会有一个包含众多功能更新和修复的版本发布。

## 3. 项目进展
今日合并/关闭的 PR 数量众多，主要集中在以下几个关键领域：

*   **数据安全与迁移体系构建**：
    *   [PR #2125](netease-youdao/LobsterAI PR #2125) 引入了用户数据备份与恢复服务，支持将数据打包为便携式 tar 包并通过计划任务重启进行恢复，具备回滚机制。
    *   [PR #2126](netease-youdao/LobsterAI PR #2126) 和 [PR #2128](netease-youdao/LobsterAI PR #2128) 进一步完善了迁移逻辑，修复了恢复时的运行时锁文件冲突问题，并优化了备份目录策略。

*   **桌面端认证体验优化**：
    *   [PR #2122](netease-youdao/LobsterAI PR #2122) 新增本地回调登录流程，避免了浏览器登录时的外部应用确认弹窗，提升登录流畅度。
    *   [PR #2127](netease-youdao/LobsterAI PR #2127) 修复了 Windows 平台登录回调后窗口焦点获取困难的问题。
    *   [PR #2129](netease-youdao/LobsterAI PR #2129) 增加了登录回调的诊断日志，便于排查 Windows 开发模式下的回退问题。

*   **Cowork 功能增强**：
    *   [PR #2130](netease-youdao/LobsterAI PR #2130) 为后台任务添加了任务完成通知，支持 macOS Dock 角标和 Windows 任务栏提醒，且注重隐私保护（不暴露任务标题）。
    *   [PR #1526](netease-youdao/LobsterAI PR #1526) 为会话列表增加了颜色标注功能，支持 7 种颜色快速区分不同类型的会话。

*   **模型配置灵活化**：
    *   [PR #1522](netease-youdao/LobsterAI PR #1522) 实现了从 Provider API 动态获取模型列表的功能，解决了新模型上线需手动配置的痛点。

*   **存量问题大扫除**：
    *   合并了一批标记为 `[stale]` 的 PR，修复了包括日志导出超时 ([PR #1515](netease-youdao/LobsterAI PR #1515))、QQ Bot 白名单 UI 缺失 ([PR #1514](netese-youdao/LobsterAI PR #1514))、GitHub Copilot 认证轮询未取消导致 Token 丢失 ([PR #1517](netease-youdao/LobsterAI PR #1517)) 等多个遗留问题。

## 4. 社区热点
今日最活跃的讨论为新增的 Issue：
*   **[Issue #2131](netease-youdao/LobsterAI Issue #2131) [OPEN] LobsterAI 支持 hermes agent有计划吗？**
    *   **分析**：用户 @wtgoku-create 询问项目是否有支持 Hermes Agent 的路线图。这反映了社区用户希望 LobsterAI 能够兼容或集成更多新兴的 Agent 框架，以扩展其作为 AI 智能体开发平台的能力。目前该 Issue 处于开放状态，尚无官方回复。

## 5. Bug 与稳定性
今日修复了多项影响用户体验的 Bug，按严重程度排列如下：

*   **严重**:
    *   **Token 静默丢失** ([PR #1517](netease-youdao/LobsterAI PR #1517))：修复了在设置面板关闭时 GitHub Copilot OAuth 轮询未取消，导致认证成功后 Token 丢失的问题。**[已修复]**
*   **中等**:
    *   **定时任务通知静默失败** ([PR #1510](netease-youdao/LobsterAI PR #1510))：修复了 IM 通知频道未选会话时允许提交，导致运行时通知失败的问题。**[已修复]**
    *   **日志导出超时** ([PR #1515](netease-youdao/LobsterAI PR #1515))：优化了日志压缩逻辑，解决了大日志文件导出超时问题。**[已修复]**
    *   **QQ Bot 白名单配置失效** ([PR #1514](netease-youdao/LobsterAI PR #1514))：修复了 UI 缺失导致无法配置群组白名单的问题。**[已修复]**
*   **轻微**:
    *   **连接测试错误信息模糊** ([PR #1524](netease-youdao/LobsterAI PR #1524))：增强了模型连接失败时的错误提示，帮助用户定位网络或配置问题。**[已修复]**

## 6. 功能请求与路线图信号
*   **新功能请求**：
    *   **Hermes Agent 支持** ([Issue #2131](netease-youdao/LobsterAI Issue #2131))：用户提出对 Hermes Agent 框架的集成需求。
*   **已实现的未来信号**：
    *   **动态模型列表** ([PR #1522](netease-youdao/LobsterAI PR #1522))：此功能的合并意味着下一版本中，LobsterAI 将能自动感知模型厂商的新模型，减少用户手动配置成本，提升了作为个人 AI 助手的灵活性。
    *   **OpenClaw 网关可视化** ([PR #2123](netease-youdao/LobsterAI PR #2123))：在设置中暴露网关地址和状态，暗示项目正在增强本地网关的可观测性和可控性，可能为后续更复杂的本地 Agent 功能铺路。

## 7. 用户反馈摘要
从今日合并的 PR 关联描述中可以提炼出以下用户痛点已被解决：
*   **操作便捷性**：用户此前在配置模型时，无法自动获取最新模型列表，需手动添加，体验繁琐；Windows 用户在浏览器登录后常遇到应用窗口无法自动置顶的问题。
*   **功能缺失**：QQ Bot 用户曾因 UI 缺陷无法使用群组白名单功能；导出日志时常因文件过大遭遇超时失败。
*   **隐私与后台体验**：用户希望在后台运行 Cowork 任务时能收到通知，但又担心隐私泄露（任务名暴露），最新的通知功能已平衡了这一需求。

## 8. 待处理积压
*   **依赖更新待处理**：
    *   [PR #1277](netease-youdao/LobsterAI PR #1277) `chore(deps-dev): bump the electron group`：该 PR 创建于 4 月，今日有更新但仍处于 OPEN 状态。建议维护者关注此次 Electron 及 Electron-builder 的版本升级（Electron 40.2.1 -> 42.3.3），防止依赖落后过多导致的安全隐患或兼容性问题。

---
**分析师结语**：LobsterAI 今日通过大规模的代码合并，显著提升了桌面端的稳定性与易用性，尤其是数据迁移和登录体验的改进直击桌面应用痛点。社区对新 Agent 框架的呼声值得关注。项目整体健康度良好，正处于功能迭代后的稳定期。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-06-09)

## 1. 今日速览
TinyClaw 项目今日整体活跃度较低，处于平稳迭代期，未观测到显著的社区讨论或版本发布活动。过去 24 小时内，项目无新增 Issue，唯一的动态来自一位开发者提交的 PR，旨在优化项目的安装部署体验。整体来看，项目运行平稳，无紧急 Bug 报告，维护重心目前倾向于改善开发者的“开箱即用”体验。

## 2. 版本发布
无。

## 3. 项目进展
今日无合并或关闭的 PR。项目进展主要体现在对新贡献的响应阶段：

*   **安装流程优化提案**：开发者 @dsy122 提交了一个待合并的 PR (#280)，旨在解决原生模块 `better-sqlite3` 的编译痛点。虽然尚未合并，但该 PR 显示项目正在尝试降低新用户的上手门槛，解决 Node.js 原生插件在不同环境下需手动重编译的常见问题。

## 4. 社区热点
今日社区唯一关注点集中在 **PR #280 [fix(install): add postinstall script to auto-rebuild better-sqlite3](https://github.com/TinyAGI/tinyagi/pull/280)**。

*   **分析**：该 PR 针对的是 `better-sqlite3` 这一 C++ 原生扩展包。此类包在执行 `npm install` 后经常因为 Node.js 版本或操作系统环境不同而无法直接运行，通常需要用户手动执行 `npm rebuild`。
*   **诉求**：作者提议通过 `postinstall` 脚本自动完成重编译。这反映了开发者对“零配置”部署的强烈需求，希望消除由于环境差异导致的 `APP_IMAGE` 或运行时错误，提升项目作为 AI 助手框架的易用性。

## 5. Bug 与稳定性
今日无新报告的运行时 Bug、崩溃或回归问题。

*   **预防性修复**：虽然无 Bug 报告，但 PR #280 实际上是针对一个典型的**环境配置类问题**。`better-sqlite3` 加载失败通常会导致应用启动崩溃，该 PR 属于预防性修复，旨在规避此类稳定性风险。目前该修复尚处于待合并状态。

## 6. 功能请求与路线图信号
今日无新增功能请求。

*   **信号解读**：结合 PR #280 可以看出，虽然用户未显式提出新功能，但项目维护方向正在向**开发者体验 (DX)** 倾斜。自动重编译脚本若被采纳，将标志着项目对安装便捷性的重视程度提升，这可能暗示下一阶段的维护重点在于降低部署门槛而非增加新特性。

## 7. 用户反馈摘要
今日无直接的用户评论反馈。

*   **痛点推断**：从 PR #280 的描述中可以推断出用户痛点：在执行全新安装时，用户经常遭遇 `better-sqlite3` 模块加载错误。这表明部分用户（尤其是 Windows 或特定 Node 版本用户）在初次尝试 TinyClaw 时可能会遇到阻碍，需要具备一定的 C++ 编译环境知识才能解决问题。

## 8. 待处理积压
过去 24 小时内，长期未响应的 Issue 或 PR 无活跃更新。鉴于今日整体活跃度较低，建议维护者关注当前唯一的待处理 PR。

*   **待处理建议**：请关注 **PR #280** 的审核进度，该 PR 涉及构建流程变更，建议维护者确认 `postinstall` 脚本在不同操作系统下的兼容性，以便尽快推进合并。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-06-09)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持**高活跃度**开发状态，社区互动频繁。过去 24 小时内共有 39 条 Issue 更新（关闭 21 条）和 43 条 PR 更新（合并/关闭 22 条），显示出维护团队高效的问题处理能力和活跃的功能迭代节奏。重点进展集中在**插件生态扩展**（插件市场、DataPaw 分析插件）和**多端体验优化**（终端 TUI 集成、桌面端自动更新）。虽然无新版本发布，但多个核心功能 PR 已进入待合并状态，预示着下个版本将有显著的功能增强。整体项目健康度良好，社区对“自进化 Agent”特性的讨论热度较高。

## 2. 项目进展
今日项目在**稳定性修复**和**架构扩展**方面取得了实质性进展，多项关键 PR 已合并或进入最后审核阶段：

*   **架构扩展：插件生态与 UI 增强**
    *   [PR #4997] `feat(console): Plugin extension infrastructure` 已合并：引入了统一的前端扩展点注册机制，支持插件注册菜单、路由和 UI 插槽，为后续插件生态繁荣奠定了基础。
    *   [PR #5032] `feat(tui): bundle the terminal chat UI` (Open): 提议将独立的终端聊天 UI (`paw`) 集成到主应用中，未来用户可直接通过命令行启动交互式 TUI 界面，提升开发者体验。
    *   [PR #5023] `feat(plugins): add Plugin Market tab` (Open): 新增插件市场 Tab，集成 AgentScope Platform，支持搜索和浏览社区插件，进一步完善插件分发渠道。

*   **稳定性与 Bug 修复**
    *   [PR #4932] `fix(dingtalk)` 已合并：修复了钉钉通道中不同用户消息因 conversation_id 后缀冲突而被错误合并的严重 Bug。
    *   [Issue #4477] 微信 iLink 推送失败问题已关闭，相关重试逻辑可能已在其他提交中修复。
    *   [PR #5028] `fix(security)` (Open): 提出隔离不同安装实例的 Keychain 主密钥，修复了同一机器多实例共享密钥的安全隐患。

*   **新功能贡献**
    *   [PR #5033] `feat(plugin/cloudpaw)` (Open, First-time contributor): 增强了 A2A（Agent-to-Agent）能力并添加了宿主斜杠命令支持，社区贡献开始活跃。

## 3. 社区热点
今日社区讨论焦点集中在 Agent 能力进阶与功能对标上：

*   **[Issue #5017] [Enhancement] 建议关注 Hermes Agent 的“学习循环”特性**
    *   **链接**: [agentscope-ai/QwenPaw Issue #5017](https://github.com/agentscope-ai/QwenPaw/issues/5017)
    *   **分析**: 该 Issue 获得了 7 条评论和 2 个点赞。用户在肯定 QwenPaw 本地化体验优秀的同时，强烈建议借鉴竞品 Hermes Agent 的核心创新——“从自身行为中自动创建并迭代技能”的学习循环。这反映出用户对 Agent 从“工具调用者”向“自我进化者”转变的迫切需求，是项目后续路线图的重要参考信号。

*   **[Issue #4477] [Bug] 微信 iLink 定时任务推送失败**
    *   **链接**: [agentscope-ai/QwenPaw Issue #4477](https://github.com/agentscope-ai/QwenPaw/issues/4477)
    *   **分析**: 该 Issue 评论数达 15 条，是今日讨论最多的话题。主要涉及企业微信通道的稳定性问题（Token 过期无重试、文件发送无日志）。虽然 Issue 已关闭，但高频讨论表明企业微信通道在生产环境中的稳定性仍是用户核心痛点。

*   **[Issue #5015] Windows 桌面端前端卡顿**
    *   **链接**: [agentscope-ai/QwenPaw Issue #5015](https://github.com/agentscope-ai/QwenPaw/issues/5015)
    *   **分析**: 用户反馈 Windows 桌面版在有任务执行时前端卡顿严重。随着桌面端用户增长，前端性能优化（特别是任务执行时的 UI 响应）成为影响用户体验的关键因素。

## 4. Bug 与稳定性
今日报告的 Bug 主要集中在性能、通道稳定性和兼容性方面：

*   **严重 - 无限循环与系统卡顿**
    *   [Issue #4895] **图片上传无限压缩循环**: 上传图片时陷入压缩死循环，导致产生“幻觉”内容。
        *   状态: Open
        *   链接: [agentscope-ai/QwenPaw Issue #4895](https://github.com/agentscope-ai/QwenPaw/issues/4895)
    *   [Issue #4792] **后台流式输出导致系统级卡顿**: 远程访问时，长流式输出导致客户端鼠标无法拖动。
        *   状态: Closed (可能已在最新版修复或待确认)
        *   链接: [agentscope-ai/QwenPaw Issue #4792](https://github.com/agentscope-ai/QwenPaw/issues/4792)

*   **中等 - 进程与内存泄漏**
    *   [Issue #4834] **MCP 服务进程累积**: 重启时未清理旧进程，导致控制台加载变慢。已有对应修复 PR #5014 提交。
        *   状态: Open
        *   修复 PR: [PR #5014](https://github.com/agentscope-ai/QwenPaw/pull/5014)
        *   链接: [agentscope-ai/QwenPaw Issue #4834](https://github.com/agentscope-ai/QwenPaw/issues/4834)
    *   [Issue #5015] **Windows 桌面端 UI 性能**: 任务执行时会话切换卡顿，CPU 激增。
        *   状态: Open
        *   链接: [agentscope-ai/QwenPaw Issue #5015](https://github.com/agentscope-ai/QwenPaw/issues/5015)

*   **兼容性问题**
    *   [Issue #5034] **MCP 工具名称非法字符**: MCP 工具名包含 `.` 导致 OpenAI API 报错 400。需增加字符清洗逻辑。
        *   状态: Closed (提及已在后续版本修复)
        *   链接: [agentscope-ai/QwenPaw Issue #5034](https://github.com/agentscope-ai/QwenPaw/issues/5034)

## 5. 功能请求与路线图信号
结合用户需求与 PR 动态，以下功能点极有可能被纳入近期版本：

*   **视觉模型降级支持**:
    *   [Issue #4992] 建议增加独立视觉模型配置，当主模型不支持多模态时自动切换视觉模型处理图片。
    *   链接: [agentscope-ai/QwenPaw Issue #4992](https://github.com/agentscope-ai/QwenPaw/issues/4992)
    *   **判断**: 该需求解决了纯文本大模型处理图像的痛点，社区认同度高 (+1)，且技术路径清晰，建议优先级较高。

*   **记忆系统自进化**:
    *   [Issue #4994] 建议引入分层记忆系统框架，支持记忆的自进化。
    *   链接: [agentscope-ai/QwenPaw Issue #4994](https://github.com/agentscope-ai/QwenPaw/issues/4994)
    *   **判断**: 与 Issue #5017（学习循环）相呼应，属于 Agent 高级能力，可能作为中长期路线图。

*   **Observability 集成**:
    *   [Issue #5009] 请求集成 Langfuse、OpenTelemetry 等 LLM 可观测性组件。
    *   链接: [agentscope-ai/QwenPaw Issue #5009](https://github.com/agentscope-ai/QwenPaw/issues/5009)
    *   **判断**: 企业级应用监控的基础需求，目前项目在此方面存在缺口，预计会有相关规划。

*   **桌面端自动更新**:
    *   [PR #4669] `feat(desktop): add tauri auto updater` 处于 Open 状态，开发进展顺利。这将极大改善桌面端分发体验。

## 6. 用户反馈摘要
*   **痛点**: 
    *   **稳定性**: 企业微信通道的连接稳定性（Token 过期处理）仍是生产环境最大痛点。
    *   **性能**: Windows 桌面端在处理复杂任务时的 UI 卡顿严重影响体验。
    *   **兼容性**: 第三方 MCP 工具命名不规范导致的调用失败，说明框架对生态工具的容错性需加强。
*   **满意度**: 用户对 QwenPaw 的本地化体验、开箱即用特性给予高度评价（参考 Issue #5017）。
*   **使用场景**: 用户倾向于在远程服务器部署并通过浏览器访问，因此流式输出性能（Issue #4792）和远程控制是重要场景。

## 7. 待处理积压
以下重要 Issue 长期未获解决或响应，建议维护者关注：

*   **[Issue #2777] GPT-5.x 模型调用失败**: 涉及 `max_tokens` 参数错误及硬编码模型列表问题，自 4 月初创建至今仍为 Open 状态，影响最新模型支持。
    *   链接: [agentscope-ai/QwenPaw Issue #2777](https://github.com/agentscope-ai/QwenPaw/issues/2777)
*   **[Issue #4895] 图片无限压缩循环**: 严重影响使用的 Bug，目前尚无官方回复确认修复排期。
    *   链接: [agentscope-ai/QwenPaw Issue #4895](https://github.com/agentscope-ai/QwenPaw/issues/4895)

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