# OpenClaw 生态日报 2026-03-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-26 02:37 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
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

⚠️ 摘要生成失败。

---

## 横向生态对比

# 开源 AI 智能体生态日报：横向对比分析 (2026-03-26)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从"单一模型对话"向"多模态、多渠道、多租户"架构演进的关键窗口期**。项目间竞争焦点已从早期的模型接入能力，全面转向**长短期记忆管理、工具调用稳定性、多平台（IM/Web/语音）无缝衔接**以及**企业级权限控制**。
社区呈现出明显的分层：以 **Zeroclaw、IronClaw** 为代表的"重型功能派"正在激进重构架构以支撑商业化需求；而 **TinyClaw、NanoClaw** 等"轻量极简派"则专注于剥离复杂依赖，追求极致的部署体验与安全性。

---

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | Release 情况 | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **Zeroclaw** | 39 | 50 | 无 | 🟡 **高压修复期**：v0.6.2 回归问题严重，积压多，社区痛点集中在内存与流式响应。 |
| **PicoClaw** | 185 (清理) | 272 (清理) | **v0.2.4 (Stable)** | 🟢 **极其活跃**：发布正式版，大力清理积压，重构语音与 Web 模块，节奏感极佳。 |
| **NanoClaw** | 36 | 50 | 无 | 🟢 **快速迭代**：核心重构中，修复严重安全漏洞，社区对本地模型支持反馈热烈。 |
| **IronClaw** | 36 | 50 | **v0.22.0** | 🟢 **架构升级**：引入多租户，向企业级 SaaS 转型，但新版本伴随配置兼容性挑战。 |
| **LobsterAI** | 36 | 50 | **v2026.3.25** | 🟡 **商业化阵痛**：引入付费与登录机制，但遭遇严重的 MCP 失效与网关崩溃 Bug。 |
| **CoPaw** | 50 | 50 | **v0.2.0.post1** | 🟡 **性能瓶颈**：功能丰富但受困于 CPU 占用高与内存效率低下，急需架构重构。 |
| **ZeptoClaw** | 11 | 29 | 无 | 🟢 **硬核冲刺**：单日合并 21 个 PR，聚焦浏览器工具与 Telegram 体验，响应极快。 |
| **TinyClaw** | - | 4 | 无 | 🟢 **技术偿债**：核心架构从 Shell 迁移至纯 Node.js，代码质量提升显著。 |
| **Moltis** | 2 | 3 | 无 | 🟢 **精简优化**：尝试用轻量级实现替换重型依赖，关注本地化隐私计算。 |
| **NullClaw** | - | 6 | 无 | 🟢 **稳健维护**：专注于修复合并，准备接入微信生态。 |
| **OpenClaw** | - | - | - | ⚪ **数据缺失**：作为核心参照物，今日缺乏有效数据。 |

---

## 3. OpenClaw 在生态中的定位 (基于历史数据与周边项目表现)

尽管 OpenClaw 本日数据缺失，但通过对比 Zeroclaw、LobsterAI 和 NullClaw 的动态，可以推断其生态定位：

*   **核心参照与基石**：OpenClaw 依然是生态中功能最全、架构最复杂的"标准实现"。Zeroclaw 的很多特性（如 Matrix 支持）是对 OpenClaw 的延伸，而 LobsterAI 则是其商业化落地的典型代表。
*   **优势与包袱**：
    *   **优势**：具备最成熟的渠道适配能力和社区基础。
    *   **包袱**：与 LobsterAI 类似，面临着**配置复杂度高**和**历史架构导致的内存/性能瓶颈**。Zeroclaw 遇到的 "Context 注入" 和 "Streaming 错误" 很可能也是 OpenClaw 需要面对的共性问题。
*   **竞争态势**：正在受到 **PicoClaw**（硬件结合/语音）和 **TinyClaw**（轻量化）的挑战。如果 OpenClaw 不能在 **MCP (Model Context Protocol)** 集成稳定性和 **Web 网关** 性能上快速迭代，部分轻量级用户可能会流向 NanoClaw 或 TinyClaw。

---

## 4. 共同关注的技术方向

1.  **MCP (Model Context Protocol) 的深度集成与痛点**
    *   **涉及项目**: LobsterAI (严重失效), IronClaw (响应截断), Moltis (别名配置)。
    *   **趋势**: MCP 已成为连接 Agent 与外部工具的标准，但目前的实现普遍存在**配置门槛高、响应体过大导致 Token 截断、以及打包路径错误**等工程问题。如何优雅地处理 MCP 返回的大数据流是当前技术攻关的重点。

2.  **记忆管理的效率革命**
    *   **涉及项目**: CoPaw (文本效率低), NanoClaw (引入 Vector/Graph DB), IronClaw (上下文溢出)。
    *   **趋势**: 简单的 `MEMORY.md` 或线性上下文管理已无法满足长周期任务。生态正在全面转向 **Vector Search (向量检索)** + **Structured Storage** 的混合记忆架构，以解决上下文窗口溢出和检索延迟问题。

3.  **从文本向多模态交互演进**
    *   **涉及项目**: PicoClaw (语音 STT/TTS), ZeptoClaw (浏览器视觉), NullClaw (图片 Base64)。
    *   **趋势**: Agent 正在从"对话框"走向"感官系统"。语音交互（PicoClaw）和视觉浏览（ZeptoClaw）成为新的核心竞争力，这要求底层架构必须支持高并发的非文本流处理。

---

## 5. 差异化定位分析

| 维度 | **轻量极简派** (TinyClaw, NanoClaw) | **全能架构派** (Zeroclaw, IronClaw, CoPaw) | **垂直场景派** (PicoClaw, ZeptoClaw) |
| :--- | :--- | :--- | :--- |
| **核心诉求** | 极致部署体验、低资源占用、安全性 | 功能大而全、多租户、企业级扩展 | 软硬结合、特定平台深度优化 |
| **技术栈** | Rust / Node.js (去 Docker 化) | Go / Python / TypeScript (微服务化) | 混合架构 (侧重 Driver/SDK) |
| **目标用户** | 个人开发者、嵌入式设备、极客 | 企业 IT、SaaS 创业者、社区运营 | 硬件发烧友、IM 重度用户 |
| **代表特征** | 单二进制文件、本地优先 | Dashboard、RBAC、多模型网关 | 原生语音支持、Web 自动化 |

---

## 6. 社区热度与成熟度

*   **成熟稳定期 ( Tier 1 )**:
    *   **PicoClaw**: 单日处理 200+ PR/Issue 的能力展现了极其成熟的自动化流程和社区管理能力。
    *   **ZeptoClaw**: 虽然规模较小，但极高的代码吞吐量和修复效率表明其核心团队执行力极强。

*   **快速迭代/动荡期 ( Tier 2 )**:
    *   **IronClaw & LobsterAI**: 处于商业化转型的阵痛期。发布新版本带来了流量，但也暴露了架构重组带来的不稳定性（如网关崩溃、配置失效）。
    *   **Zeroclaw**: 正在为 v0.6.2 的质量问题"灭火"，大量 Issue 积压需要尽快消化。

*   **重构/萌芽期 ( Tier 3 )**:
    *   **TinyClaw & Moltis**: 正在进行底层重构（Shell->Node, 重构 Provider），目前处于积累代码、暂未大规模推广的阶段。

---

## 7. 值得关注的趋势信号

1.  **Agent 的"自我反思"机制成为标配**:
    *   **信号**: IronClaw 提出的 "Anti-Drift Monitor" 和 "Thread per-tool reasoning"。
    *   **解读**: 开发者开始意识到 LLM 并非总是可靠的。未来的 Agent 架构将内置"元监控"模块，专门用于检测 Agent 是否陷入死循环、是否在产生幻觉，并自动进行纠偏。

2.  **部署形态的"反容器化"倾向**:
    *   **信号**: TinyClaw 移除 Shell 依赖转向纯 Node，NanoClaw 强调单文件/轻量镜像。
    *   **解读**: 虽然 Docker 仍是主流，但对于个人助手而言，用户越来越讨厌复杂的 Docker Compose 配置。提供**开箱即用的单一二进制文件**或**极简 Web UI** 正在成为新的用户体验护城河。

3.  **多租户与商业化的全面渗透**:
    *   **信号**: IronClaw 的 DB Auth，LobsterAI 的加油包系统。
    *   **解读**: 开源项目不再仅仅满足于做一个"好用的工具"，而是在架构设计之初就预留了 SaaS 化的接口（RBAC、计费钩子）。这意味着个人开发者如果想要基于这些项目二次开发，需要适应更加复杂的企业级代码结构。

4.  **Web 浏览能力回归**:
    *   **信号**: ZeptoClaw 合并 BrowserTool。
    *   **解读**: 随着轻量级浏览器引擎（如 Lightpanda）的出现，Agent 重新开始尝试直接"看网页"并操作 DOM，而不仅仅是调用 Search API。这可能会大幅提升 Agent 处理复杂互联网任务的能力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

根据 Zeroclaw 项目 2026-03-26 的 GitHub 数据，为您生成以下开源项目动态日报：

---

# 📊 Zeroclaw 项目动态日报 (2026-03-26)

## 1. 今日速览
Zeroclaw 项目今日保持**极高的活跃度**，社区提交了 39 条 Issue 更新和 50 条 PR 更新。虽然今日无新版本发布，但项目正处于密集的功能迭代与缺陷修复阶段。核心开发者和社区贡献者正集中精力解决 **Matrix 渠道** 和 **Web 网关** 的稳定性问题。值得注意的是，今日有大量针对 v0.6.2 版本的回归问题报告，显示出近期版本在渠道集成和内存管理方面存在一定压力。

## 2. 版本发布
**无新版本发布**。
目前项目似乎正在为下一个版本积累修复和功能，建议关注 `master` 分支的动态。

## 3. 项目进展
今日共有 **14 个 PR 被合并/关闭**，主要进展集中在稳定性修复和 Web 界面增强：

*   **Web 网关与安全性修复**：
    *   [PR #4641](https://github.com/zeroclaw-labs/zeroclaw/pull/4641): 修复了 Gateway 中 Prometheus 指标无法暴露的问题，确保监控数据的可用性。
    *   [PR #4601](https://github.com/zeroclaw-labs/zeroclaw/pull/4601): 修复了 Windows 平台下 ACL 用户身份识别导致 SID 损坏的严重安全问题，提升了跨平台兼容性。
    *   [PR #4605](https://github.com/zeroclaw-labs/zeroclaw/pull/4605): 修正了安全检测中的误报，防止媒体文件路径被错误地视为高熵令牌泄露。

*   **核心功能与体验优化**：
    *   [PR #4640](https://github.com/zeroclaw-labs/zeroclaw/pull/4640): 修复了内存上下文注入缺少结束标签的问题，显著提升了模型对上下文的理解能力。
    *   [PR #3060](https://github.com/zeroclaw-labs/zeroclaw/pull/3060): 解决了 Onboarding 过程中获取模型列表时的运行时 Panic 问题。

## 4. 社区热点
今日讨论最热烈的 Issue 集中在配置与部署体验上：

*   **[Issue #1304](https://github.com/zeroclaw-labs/zeroclaw/issues/1304) [Bug]: Ollama provider 忽略 api_url 配置**
    *   **热度**: 👍 1 | 💬 7
    *   **分析**: 这是一个长期存在的痛点，用户在配置远程 Ollama 服务器时受阻。这反映了本地模型用户对自定义 API 端点的强烈需求，特别是针对私有化部署场景。

*   **[Issue #3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059) [Feature]: 支持阿里云百炼 编码计划**
    *   **热度**: 👍 1 | 💬 6
    *   **分析**: 国内用户对集成阿里云 LLM 服务的呼声很高，这表明 Zeroclaw 在中文开发者社区的关注度正在提升，拓展 Provider 生态是当前的重要方向。

*   **[Issue #4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657): Matrix 渠道摩擦问题追踪**
    *   **热度**: 💬 2
    *   **分析**: 这是一个汇总性质的 Issue，详细列出了 Matrix 渠道的 E2EE 加密重试循环和消息流式传输延迟等关键问题，是 v0.6.2 版本优化的重点对象。

## 5. Bug 与稳定性
今日报告了多个影响核心流程的 Bug，部分已有修复方案：

*   **S0 - 严重安全/数据风险**:
    *   [Issue #4672](https://github.com/zeroclaw-labs/zeroclaw/issues/4672): **Groq API Key 在 UI 中未被掩码处理**，存在密钥泄露风险。
    *   [Issue #4478](https://github.com/zeroclaw-labs/zeroclaw/issues/4478): 工具执行失败，仅显示 "Used tools" 但不执行任务，导致智能体完全不可用。

*   **S1 - 阻塞工作流**:
    *   [Issue #4644](https://github.com/zeroclaw-labs/zeroclaw/issues/4644): Web Chat 出现“健忘症”，仅两轮对话后即丢失上下文。(**已有关联修复 PR #4640**)
    *   [Issue #4655](https://github.com/zeroclaw-labs/zeroclaw/issues/4655): `zeroclaw onboard --channels-only` 命令会覆盖所有现有配置， destructive behavior。

*   **S2 - 功能降级**:
    *   [Issue #4670](https://github.com/zeroclaw-labs/zeroclaw/issues/4670) & [Issue #4523](https://github.com/zeroclaw-labs/zeroclaw/issues/4523): 升级到 v0.6.1+ 后，WebSocket 接口返回 "unknown does not support streaming" 错误。
    *   [Issue #4716](https://github.com/zeroclaw-labs/zeroclaw/issues/4716): MCP (Model Context Protocol) 工具调用成功连接但无法实际触发。

## 6. 功能请求与路线图信号
*   **全功能 Docker 镜像**: [Issue #3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) 请求提供开启所有特性（如 WhatsApp）的 Docker 镜像。目前 [PR #4693](https://github.com/zeroclaw-labs/zeroclaw-labs/zeroclaw/pull/4693) 正在尝试通过环境变量支持自定义 Feature 编译，这可能是官方对“按需构建”的一种折中方案。
*   **Web UI 增强**: [PR #4603](https://github.com/zeroclaw-labs/zeroclaw/pull/4603) 正在开发可折叠的思维链展示和 Markdown 渲染，这表明项目正致力于提升 Chat 界面的专业度和可用性。
*   **多房间支持**: Matrix 频道关于 `allowed_rooms` 的修复 ([PR #4700](https://github.com/zeroclaw-labs/zeroclaw/pull/4700)) 表明官方正在努力修复多房间监听的回归问题。

## 7. 用户反馈摘要
*   **配置门槛高**: 多个 Issue ([#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642), [#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704)) 提到，在 Raspberry Pi 等受限环境或 Docker 中启用可选功能（如 WhatsApp, Matrix）需要手动编译，门槛过高。
*   **流式响应故障**: v0.6.x 版本引入的流式响应错误严重影响了 Web 和 API 用户的体验。
*   **日志干扰**: [Issue #4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721) 指出 Zeroclaw 将日志输出到 stdout 而非 stderr，干扰了脚本管道处理，资深用户对此表示不满。

## 8. 待处理积压
*   **急需关注**: [Issue #4655](https://github.com/zeroclaw-labs/zeroclaw/issues/4655) (Onboarding 覆盖配置) 和 [Issue #4670](https://github.com/zeroclaw-labs/zeroclaw/issues/4670) (Streaming 错误) 影响面广，需优先处理。
*   **长期需求**: [Issue #3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) (Full Docker Image) 虽未关闭，但已有相关 PR 动向，建议合并相关改动以降低部署难度。

---
*以上数据截止至 2026-03-26，由 AI 项目分析师基于 GitHub 公开数据生成。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

基于 2026-03-26 的 GitHub 数据，以下是 PicoClaw 项目的每日动态分析报告。

# PicoClaw 项目日报 (2026-03-26)

## 1. 今日速览
PicoClaw 项目今日保持**极高活跃度**，呈现出强烈的"大扫除"与功能迭代并行的态势。过去 24 小时内，社区和核心团队共处理了 **185 个 Issues**（其中关闭了 170 个）和 **272 个 PRs**（合并/关闭了 238 个），显示出维护者正在大力清理积压问题并为新版本铺路。随着 **v0.2.4 正式版**与 **v0.2.5-nightly** 的发布，项目引入了多项关键优化，包括配置热重载、错误处理增强以及针对 Web/语音模块的重构。

## 2. 版本发布

### ✨ v0.2.4 (Stable Release)
**核心更新**：
*   **配置热重载** (`docs`): 明确了 Workspace 配置文件支持热加载，无需重启即可生效 ([Commit 14a28ae](https://github.com/sipeed/picoclaw/commit/14a28ae93e08ab7f08c577af30e61e1cc218f3c5))。
*   **Agent 鲁棒性** (`refactor`): 改进了 `SubTurn` 的错误处理与日志记录机制，提升了子任务执行的稳定性。
*   **可观测性**: 增加了可配置的日志记录器，方便调试与监控。

### 🚧 Nightly Build (v0.2.4-nightly.20260326)
*   **性质**: 自动化构建版本，包含最新的代码变动，可能不稳定，仅供测试尝鲜。
*   **变更范围**: 涵盖从 v0.2.4 到 main 分支的所有提交。

## 3. 项目进展

今日共有 **238 个 PR 被合并或关闭**，主要集中在稳定性修复、Web 端体验优化及多模态能力扩展：

*   **Web 端重构与优化**:
    *   [PR #1949](https://github.com/sipeed/picoclaw/pull/1949): 为 Pico Web Chat 增加了 **SSE (Server-Sent Events)** 降级方案，解决了部分网络环境下 WebSocket 连接失败导致无法聊天的问题。
    *   [PR #1953](https://github.com/sipeed/picoclaw/pull/1953): 强化了 Launcher Dashboard 的安全性，增加了基于 Token 的登录认证，防止未授权访问。
    *   [PR #2026](https://github.com/sipeed/picoclaw/pull/2026) (已合并): 修复了 Web 聊天中默认开启 "Tool Feedback" 导致消息噪音过大的问题，现默认关闭。

*   **多模态与语音能力**:
    *   [PR #2028](https://github.com/sipeed/picoclaw/pull/2028): 新增 **Parakeet 本地 STT (语音转文字)** 支持，减少对外部 API 的依赖。
    *   [PR #1939](https://github.com/sipeed/picoclaw/pull/1939): 重构了 ASR/TTS 架构，支持语音消息的收发，并在飞书等渠道实现了文件下载的去重与索引优化 ([PR #2031](https://github.com/sipeed/picoclaw/pull/2031))。

*   **Provider 兼容性修复**:
    *   [PR #2016](https://github.com/sipeed/picoclaw/pull/2016) (已合并): 增强了对 **Anthropic、智谱 AI (GLM)** 上下文溢出错误的检测与分类，提升了 Agent 自动恢复的能力。
    *   [PR #2019](https://github.com/sipeed/picoclaw/pull/2019): 修复了 **Mistral** 模型因 `reasoning_content` 字段导致的 422 报错，提升了兼容性。

*   **Docker 体验**:
    *   [PR #2023](https://github.com/sipeed/picoclaw/pull/2023) (已合并): 在 Docker 镜像中增加了 `bootstrap init` 脚本，允许 Agent 在容器重启间持久化安装工具。

## 4. 社区热点

尽管今日关闭了大量 Issue，但仍有几个话题引发了较多讨论，反映了用户的关注点：

*   **OpenRouter 配置困惑** ([Issue #694](https://github.com/sipeed/picoclaw/issues/694) - 已关闭): 即使在关闭后，该 Issue 仍有 15 条评论。用户主要困惑于如何正确配置 `model_list` 与 `defaults`。这表明配置文档或 Schema 验证仍有优化空间。
*   **企业微信机器人支持** ([Issue #1210](https://github.com/sipeed/picoclaw/issues/1210) - 已关闭): 11 条评论。用户强烈需要配置企业微信机器人的详细指南，官方已提供示例并关闭该贴。
*   **本地 Ollama 对接问题** ([Issue #75](https://github.com/sipeed/picoclaw/issues/75), [Issue #109](https://github.com/sipeed/picoclaw/issues/109)): 评论数较多。主要痛点在于 PicoClaw 对本地模型（尤其是无需 API Key 的情况）的识别逻辑曾存在误判（如必须填写 API Key），相关 Bug 已在近期修复。

## 5. Bug 与稳定性

今日修复了多个影响用户体验的关键 Bug：

*   **[已修复] 上下文溢出检测失效** ([PR #2016](https://github.com/sipeed/picoclaw/pull/2016)): 此前 GLM 和 Anthropic 的错误码（带下划线）未能被正确识别，导致 Agent 无法自动裁剪上下文，现已修复。
*   **[已修复] Web 聊天 Tool Feedback 噪音** ([Issue #2007](https://github.com/sipeed/picoclaw/issues/2007) -> [PR #2026](https://github.com/sipeed/picoclaw/pull/2026)): 修复了升级后 Web 端默认显示大量工具反馈日志的问题。
*   **[已修复] Mistral API 422 错误** ([PR #2019](https://github.com/sipeed/picoclaw/pull/2019)): 解决了 Mistral 模型无法正常调用的问题。
*   **[已修复] Gemini 3 强制思维链签名** ([Issue #161](https://github.com/sipeed/picoclaw/issues/161)): 此前导致 Gemini 3 Pro/Flash 工具调用失败的问题已得到解决（Issue 已关闭）。

## 6. 功能请求与路线图信号

从待处理的 PR 和新提出的 Issue 来看，未来的路线图可能包含：

*   **Web 端降级方案**: SSE 降级支持 ([PR #1949](https://github.com/sipeed/picoclaw/pull/1949)) 显示出团队致力于提升 Web 端在不同网络环境下的可用性。
*   **本地化语音方案**: Parakeet STT 的引入 ([PR #2028](https://github.com/sipeed/picoclaw/pull/2028)) 标志着项目正在向完全本地化、隐私友好的多模态 Agent 演进。
*   **Subagent 权限控制** ([Issue #1278](https://github.com/sipeed/picoclaw/issues/1278)): 用户希望子代理能继承或独立配置工具权限（如 `read_file`, `exec`），这对自动化工作流至关重要。虽然 Issue 已关闭，但相关的 PR ([PR #2020](https://github.com/sipeed/picoclaw/pull/2020)) 正在处理子代理的工具注册表继承逻辑。

## 7. 用户反馈摘要

综合今日的 Issue 评论与 PR 描述，提炼出以下用户画像与痛点：

*   **配置门槛**: 尽管功能强大，但 `config.json` 的结构（尤其是 Provider 和 Channel 的映射）对新手仍有挑战，用户容易混淆 `model` 字符串与 `provider` 类型。
*   **模型兼容性**: 用户非常倾向于使用本地模型和第三方 API（Mistral, Gemini, MiniMax）。任何微小的 API 格式差异（如 `reasoning_content` 字段）都会直接导致阻断性错误，用户对这方面的稳定性非常敏感。
*   **部署环境**: Docker 是主流部署方式，用户强烈依赖容器内的持久化配置和自启动脚本（Bootstrap）。

## 8. 待处理积压

虽然今日关闭了大量 Issue，但仍有值得关注的待合并 PR：

*   **[OPEN] PR #1949 (SSE Fallback)**: 这是一个较大的功能变更，目前处于 Open 状态，急需社区测试以确保 WebSocket 降级逻辑无误。
*   **[OPEN] PR #1953 (Dashboard Auth)**: 涉及安全性的变更，建议优先 Review 并合并，防止用户在生产环境中暴露无保护的 Dashboard。
*   **[OPEN] PR #2024 (Discord Token Persist)**: 修复了 Discord 配置无法保存的回归问题，影响 Discord Bot 用户，建议尽快合并。

---
**分析师点评**: PicoClaw 在 2026-03-26 展现了成熟开源项目的节奏感——在发布 Stable 版本的同时，通过 Nightly 版本激进地重构语音和 Web 模块。238 个 PR 的合并量非常惊人，说明 Core Team 正在积极回应社区反馈，尤其是在 Provider 兼容性和 Docker 体验上。建议用户在升级 v0.2.4 时留意 Mistral 和 GLM 的相关修复。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-26)

## 1. 今日速览
NanoClaw 今日保持**高强度的开发与维护活跃度**，项目处于快速迭代期。过去 24 小时内共有 **86 次代码更新**（36 个 Issues + 50 个 PRs），其中 26 个 Issue 被关闭，30 个 PR 被合并或处理，解决积压问题的速度非常快。项目重点目前集中在**安全性加固**（命令注入修复）和**核心稳定性修复**（Sidecar 退出、任务调度幂等性）。社区贡献方面，Ollama 工具集成、CLI 重构和持久化记忆等高级功能的 PR 正在活跃推进，显示出良好的生态扩展势头。

## 2. 版本发布
**无新版本发布**。虽然关闭了大量 Issue，但官方尚未 tag 新的 Release 版本，预计正在积累变更以准备下一次里程碑更新。

## 3. 项目进展
今日共有 **30 个 PR 更新**（含合并/关闭），重点推进了以下方面：

*   **安全性修复**：合并了针对 `exec()` 命令注入和竞态条件的关键修复 ([Issue #1431](https://github.com/qwibitai/nanoclaw/issues/1431))。
*   **容器与部署**：合并了将 Docker 镜像发布到 GHCR 的工作流 ([PR #1373](https://github.com/qwibitai/nanoclaw/pull/1373))，简化了私有化部署流程。
*   **稳定性修复**：修复了 WhatsApp 登出导致进程崩溃的问题 ([PR #1050](https://github.com/qwibitai/nanoclaw/pull/1050))，以及注册新群组时未创建 `CLAUDE.md` 的一系例相关问题 ([Issue #1390](https://github.com/qwibitai/nanoclaw/issues/1390), [Issue #1391](https://github.com/qwibitai/nanoclaw/issues/1391))。
*   **生态集成**：Ollama MCP 技能 ([PR #1331](https://github.com/qwibitai/nanoclaw/pull/1331)) 已关闭，相关模型管理工具扩展已在新 PR 中跟进 ([PR #1456](https://github.com/qwibitai/nanoclaw/pull/1456))。

整体来看，项目今日主要在**还技术债和修补边界条件**，为后续功能扩展打基础。

## 4. 社区热点
今日讨论最多、关注度最高的话题如下：

*   **[CLOSED] Security Audit 2026-03-25: Command injection and race conditions** ([Issue #1431](https://github.com/qwibitai/nanoclaw/issues/1431))
    *   **评论数**: 1 | **严重等级**: Critical
    *   **分析**: 这是今日最重要的 Issue。安全审计发现 `src/container-runner.ts` 中存在命令注入漏洞。这表明项目正在接受严格的安全审查，维护者对安全问题的响应非常迅速（已关闭）。
*   **[CLOSED] schedule_task has no idempotency key** ([Issue #783](https://github.com/qwibitai/nanoclaw/issues/783))
    *   **评论数**: 4
    *   **分析**: 这是一个影响核心调度功能的老问题。如果不解决，定时任务会在重启后重复创建。高评论数反映了核心用户对任务调度可靠性的强烈需求。
*   **[CLOSED] Mismatch in Linux Support Documentation** ([Issue #1075](https://github.com/qwibitai/nanoclaw/issues/1075))
    *   **评论数**: 4
    *   **分析**: 文档与官网关于 Linux 支持的不一致引发了用户困惑。这表明 Linux 用户群体正在增长，且对部署一致性要求较高。
*   **[OPEN] Feature Request: Add /new command to reset session context** ([Issue #1211](https://github.com/qwibitai/nanoclaw/issues/1211))
    *   **评论数**: 3 | **点赞**: 2
    *   **分析**: 用户强烈希望能快速重置会话以节省 Token 并清理上下文。这是一个典型的“高频使用”痛点，预计会被优先纳入开发计划。

## 5. Bug 与稳定性
今日报告了多个影响生产环境的关键 Bug，部分已有修复：

1.  **[Critical] Command injection via exec()** ([Issue #1431](https://github.com/qwibitai/nanoclaw/issues/1431))
    *   **状态**: CLOSED (Fixed)
    *   **描述**: 存在命令注入漏洞，允许通过特定输入执行任意命令。
    *   **修复**: 漏洞已修补。
2.  **[Critical] Sidecar exits immediately when env vars unset** ([Issue #1454](https://github.com/qwibitai/nanoclaw/issues/1454))
    *   **状态**: OPEN
    *   **描述**: 如果未设置 `WATCH_CONTAINER`，Sidecar 进程会立即退出，导致监控失效。
    *   **严重性**: 高，影响容器化部署的稳定性。
3.  **[High] Linux setup: silent message drops, firewall blocking** ([Issue #1445](https://github.com/qwibitai/nanoclaw/issues/1445))
    *   **状态**: OPEN
    *   **描述**: Linux 首次部署时，WhatsApp 消息静默丢失（LID JID 转换问题）。
    *   **严重性**: 高，阻碍新用户在 Linux 上的入门体验。
4.  **[Medium] Telegram reply-to metadata not passed to agent** ([Issue #1439](https://github.com/qwibitai/nanoclaw/issues/1439))
    *   **状态**: OPEN
    *   **描述**: Agent 无法获取“回复”消息的元数据，导致无法进行线程化对话。
5.  **[Medium] No intermediate feedback during long-running sessions** ([Issue #1440](https://github.com/qwibitai/nanoclaw/issues/1440))
    *   **状态**: OPEN
    *   **描述**: 长时间运行的任务无中间反馈，用户误以为死机。

## 6. 功能请求与路线图信号
从 Open 的 PR 和 Issues 中可以看出明确的演进方向：

*   **多模型管理**: [PR #1456](https://github.com/qwibitai/nanoclaw/pull/1456) 正在为 Ollama 集成添加模型拉取、删除和显示工具，表明项目正强化作为**本地 AI 中枢**的能力。
*   **CLI 增强**: [PR #1408](https://github.com/qwibitai/nanoclaw/pull/1408) 提议重构 CLI，增加 `claw ps` 等子命令，显示出提升**开发者体验 (DX)** 的意图。
*   **持久化记忆**: [PR #1256](https://github.com/qwibitai/nanoclaw/pull/1256) 提议集成 mem0 + Qdrant + Neo4j，赋予 Agent 跨会话记忆能力。这是一个高级特性，可能标志着项目从“工具”向“智能体”的转型。
*   **用户交互优化**: [Issue #1211](https://github.com/qwibitai/nanoclaw/issues/1211) 的 /new 命令请求，结合 CLI 优化，预示着项目将更加注重交互的流畅性和上下文管理。

## 7. 用户反馈摘要
通过今日 Issues 提炼出的用户画像与痛点：

*   **部署痛点**: 用户 (@JachinShen, @lazer-sketch) 在 K8s (Sealos) 和 Linux (Ubuntu/Hetzner) 环境中部署受阻，主要涉及权限、防火墙和文件系统只读挂载问题。**结论**: NanoClaw 目前对受限生产环境的兼容性尚需打磨。
*   **Token 焦虑**: 用户对 Token 消耗非常敏感 ([Issue #1211](https://github.com/qwibitai/nanoclaw/issues/1211))，希望能随时重置上下文以避免账单失控。
*   **“假死”困惑**: 长时间无反馈 ([Issue #1440](https://github.com/qwibitai/nanoclaw/issues/1440)) 严重损害用户信任，用户无法区分是 Agent 在思考还是程序崩溃。
*   **赞赏**: 有用户 (@JachinShen) 特别提到欣赏项目的极简主义哲学，认为相比其他臃肿的框架，NanoClaw 提供了一个轻量、安全的替代方案。

## 8. 待处理积压
以下重要 Issue/PR 长期未被合并或响应，可能成为瓶颈：

*   **[OPEN] Mattermost channel skill** ([PR #546](https://github.com/qwibitai/nanoclaw/pull/546))
    *   创建于 2026-02-26，已停滞一个月。该 PR 添加了企业级聊天软件 Mattermost 的支持，对于 B 端用户价值极高，建议维护者优先 Review。
*   **[OPEN] Signal channel + reactions** ([PR #784](https://github.com/qwibitai/nanoclaw/pull/784))
    *   创建于 2026-03-06，状态标记为 "Pending Closure"。这是一个高质量的集成 PR（包含 Emoji 反应功能），如果被放弃将是社区的损失。
*   **[OPEN] Agent-runner source cache never refreshes** ([Issue #1361](https://github.com/qwibitai/nanoclaw/issues/1361))
    *   这是一个严重的开发体验问题，代码更新后缓存不刷新，导致开发调试困难。已有 2 个点赞，建议尽快排查。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目日报 - 2026年03月26日**

## 1. 今日速览

今日 NullClaw 项目整体活跃度**中等偏高**，主要集中在渠道适配优化与生态集成上。虽然今日无新版本发布，但社区提交了 **6 个 PR（4 个待合并）**，核心贡献者 @manelsen 集中修复了 Lark 与 Discord 渠道的交互体验问题。同时，社区对 **WeChat 插件集成**及**多模态视觉能力**表现出强烈需求。项目当前处于功能迭代与稳定性打磨并重的阶段，多项关键修复已提交等待合并。

---

## 2. 版本发布

*   **无新版本发布** (Last Updated: 2026-03-26)

---

## 3. 项目进展

今日共有 2 个 PR 被关闭（非合并），主要涉及文档澄清与底层调度修复的落地。同时有 4 个活跃 PR 正在推进，显示出开发者在**多渠道体验优化**和**工具链扩展**上的持续投入。

*   **[CLOSED] docs: clarify workspace_path and system_prompt behavior** (PR #620)
    *   **内容**：澄清了 `workspace_path` 与 `system_prompt` 的优先级逻辑，并增加了回归测试。虽未合并（可能为单独关闭或已有替代），但解决了配置层的歧义。
    *   **价值**：降低了用户在自定义 Agent 时的配置错误率。
*   **[CLOSED] fix(cron): scheduler/worker race, memory leak, mutex lifetime** (PR #689)
    *   **内容**：修复了调度器中的竞态条件、内存泄漏及互斥锁生命周期问题。
    *   **价值**：显著提升了长时间运行时的系统稳定性。

*   **[OPEN] 修复与体验优化 (Core Contributor @manelsen)**
    *   **PR #720**: 修复 Lark（飞书）渠道在模型思考期间无反馈的问题，增加了“处理中”的占位消息，极大提升交互友好度。
    *   **PR #719**: 修复 Discord 定时私聊（Scheduled DM）可能因目标标识符无效而发送失败的问题。
    *   **PR #718**: 补充了内置 WeChat（微信）渠道的配置文档，为即将到来的微信生态接入做准备。

*   **[OPEN] 工具扩展**
    *   **PR #716**: 新增计算器工具 (`calculator.zig`)，支持 20 种数学运算（如加减乘除、统计函数等），扩展了 Agent 的数值处理能力。

---

## 4. 社区热点

今日讨论焦点主要集中在**平台覆盖度**与**多模态能力**上。

*   **Issue #714 [enhancement] Support WeChat Plugin Integration**
    *   **热度**：🔥🔥
    *   **分析**：用户指出 OpenClaw 及其分支已支持微信官方插件，鉴于微信在大陆及东南亚的庞大用户群，社区强烈呼吁 NullClaw 跟进支持。目前的 PR #718（文档更新）暗示官方可能正在布局此功能。
*   **Issue #624 [enhancement] Vision Pipeline (Image/File support)**
    *   **热度**：🔥
    *   **分析**：用户希望能直接发送图片和文件给 Agent（自动转 Base64），以利用多模态 LLM 的能力。这反映了用户从纯文本交互向富媒体交互转型的迫切需求。

---

## 5. Bug 与稳定性

今日报告了 2 个涉及具体渠道的 Bug，且均已由核心开发者认领并提交修复 PR，响应速度极快。

| 严重程度 | Issue/PR | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **中等** | **Issue #715** / **PR #719** | **Discord 定时消息投递失败**。由于复用了错误的会话标识符，导致定时 DM 无法发送。 | **Fix PR 已提交 (#719)** |
| **低** | **Issue #717** / **PR #720** | **Lark 渠道交互体验缺失**。思考过程中无“正在输入”提示，用户不知道 Agent 是否在工作。 | **Fix PR 已提交 (#720)** |

---

## 6. 功能请求与路线图信号

通过分析 Issues 与 PRs，可以窥见项目近期的路线图重心：

1.  **多模态能力**:
    *   **信号**: Issue #624 请求视觉管道支持。
    *   **预测**: 虽然目前依赖用户自行编写 Skill，但随着多模态模型普及，官方可能会在核心层集成文件/图片预处理逻辑。

2.  **生态平台扩张**:
    *   **信号**: Issue #714 请求微信支持 -> PR #718 补充微信文档。
    *   **预测**: **内置 WeChat Channel 支持极有可能在近期版本中正式发布**，这将是 NullClaw 进军中文用户市场的关键一步。

3.  **工具链增强**:
    *   **信号**: PR #716 增加计算器。
    *   **预测**: 项目正在丰富内置 Tools 库，以减少用户编写基础工具的门槛。

---

## 7. 用户反馈摘要

*   **交互体验痛点**: 在 Lark 等即时通讯软件中，用户对“沉默式”处理（无输入状态提示）感到困惑，明确需要视觉上的“正在处理”反馈。
*   **场景化需求**: 用户不仅满足于文本对话，更希望将 NullClaw 作为多模态助手使用（如识别图片），并深度集成到日常办公软件（Lark, Discord, WeChat）中。
*   **迁移需求**: 有用户从 OpenClaw 或其他 Fork 迁移而来，对功能的对等性（如 WeChat 支持）有较高期待。

---

## 8. 待处理积压

目前暂无长期未响应的严重积压 Issue。今日报告的问题均已“当日响应、当日修复”，显示出项目维护者极高的活跃度与责任感。

**建议关注**:
*   **PR #716 (Calculator)**: 作为新功能 PR，等待核心团队 Review 合并。
*   **PR #718, #719, #720**: 这一组修复与文档 PR 建议尽快合并并发布 Patch 版本，以修复线上已知问题并发布 WeChat 配置指南。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是基于您提供的数据生成的 **IronClaw** 项目 2026年3月26日动态日报。

---

# IronClaw 项目日报 (2026-03-26)

## 1. 今日速览
IronClaw 项目今日活跃度极高，呈现出**发布迭代与架构重构并进**的态势。随着 **v0.22.0** 的正式发布，项目引入了备受期待的 **Multi-tenant (多租户)** 认证架构，标志着产品正式向企业级 SaaS 化能力拓展。今日 PR 更新量达 50 条（其中 37 条已合并/关闭），显示核心团队正在高强度推进 v2 架构的落地与缺陷修复。虽然发布了新版本，但社区反馈也随之活跃，特别是针对工具调用截断和沙箱环境的稳定性问题引发了较多讨论。

## 2. 版本发布
### **[ironclaw-v0.22.0](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.22.0)**
发布日期：2026-03-25

**核心更新：**
*   **架构升级**: 引入 **Multi-tenant auth (多租户认证)** 支持，允许通过数据库管理用户注册、Token 和 RBAC 权限，不再依赖静态环境变量。
*   **推理能力增强**: Agent 增加了 **Thread per-tool reasoning** 功能，提升了工具调用的上下文理解能力。
*   **用户体验**: CLI 增加了凭证认证状态显示。

**破坏性变更 & 迁移注意：**
*   根据关联 PR [#1601](https://github.com/nearai/ironclaw/pull/1601) 提示，`ironclaw` 核心结构体存在 API 变更（externally-constructible struct adds field）。
*   **依赖变更**: 发布了独立 Crate `ironclaw_safety` v0.2.0 和 `ironclaw_common`，之前的 v0.21.0 版本可能不再兼容旧的内部模块加载方式，开发者需关注 `Cargo.toml` 的依赖更新。

## 3. 项目进展
今日共有 **37 个 PR 被合并或关闭**，主要集中在多租户功能完善、发布阻塞修复和新执行引擎架构上。

*   **多租户隔离 完成**: 合并了 [PR #1614](https://github.com/nearai/ironclaw/pull/1614)，完成了数据库层面的用户隔离和编译期租户上下检查，为多用户环境提供了安全保障。
*   **发布流水线修复**: 快速合并了 [PR #1657](https://github.com/nearai/ironclaw/pull/1657) 和 [PR #1659](https://github.com/nearai/ironclaw/pull/1659)，解决了 `ironclaw_common` 和 `ironclaw_safety` 无法发布到 crates.io 的阻塞问题，确保了 v0.22.0 的顺利上线。
*   **Sandbox 循环问题**: 针对用户反馈的沙箱循环执行问题，相关修复可能已在 [PR #1650](https://github.com/nearai/ironclaw/pull/1650) (Routines 持久化) 中有所涉及，移除了沙箱门控限制。
*   **Web Gateway 增强**: 开启了 [PR #1656](https://github.com/nearai/ironclaw/pull/1656)，开始实现对 OpenAI Responses API 的兼容，允许前端直接调用 Agent Loop。

## 4. 社区热点
今日讨论最活跃、关注度最高的话题集中在 **Agent 稳定性** 和 **自定义能力** 上：

1.  **[PR #1557] Unified Thread-Capability-CodeAct execution engine (v2 architecture)**
    *   **分析**: 这是项目未来的核心重构，试图用 5 个原语替换现有的 10 种碎片化抽象。虽然目前处于 Open 状态，但作为 v2 架构的基石，吸引了大量关注，预示着 IronClaw 将在近期彻底重构其执行内核。
2.  **[Issue #1631] fix(agent): discard truncated tool calls when finish_reason == Length**
    *   **分析**: 由核心贡献者提出，揭示了当前 Agent 在处理大型 MCP 响应（如 145KB）时的硬伤（max_tokens 不足导致截断）。这反映了用户在接入复杂工具（如 Memory）时遇到的实际阻碍。
3.  **[PR #1446] feat: add Aliyun Coding Plan support**
    *   **分析**: 社区贡献的大型功能 PR，增加了对阿里云百炼的支持。这表明 IronClaw 正在扩展其对非 OpenAI 标准云厂商的兼容性，迎合了特定区域市场的需求。

## 5. Bug 与稳定性
今日报告了多个与上下文和配置相关的严重 Bug：

*   **🔴 严重 - 工具调用截断导致逻辑错误** ([Issue #1631](https://github.com/nearai/ironclaw/issues/1631))
    *   **现象**: 当 Tool Result 过大时，LLM 尝试原样回显数据，受限于 `max_tokens=1024` 导致响应被截断。
    *   **状态**: 已有 Fix PR [PR #1632](https://github.com/nearai/ironclaw/pull/1632)，建议丢弃截断的调用并尝试用更大 budget 重试。
*   **🔴 严重 - Cargo.toml 解析崩溃** ([Issue #1640](https://github.com/nearai/ironclaw/issues/1640))
    *   **现象**: 构建软件工具时，即使显式指定字符串依赖，内部构建器仍生成 inline table 导致 "invalid type: map" 错误，导致 WASM 工具构建死循环。
*   **🟡 中等 - 飞书通道配置缺失** ([Issue #1633](https://github.com/nearai/ironclaw/issues/1633))
    *   **现象**: 飞书通道响应时报错 `app_id not configured`，疑似多租户环境下的配置读取问题。
*   **🟡 中等 - Routine 缺少用户消息报错** ([Issue #763](https://github.com/nearai/ironclaw/issues/763))
    *   **状态**: 已 **CLOSED**，该问题导致 NEAR AI API 返回 400 错误，推测已在 v0.22.0 中修复。

## 6. 功能请求与路线图信号
*   **Anti-Drift 自检机制** ([Issue #1634](https://github.com/nearai/ironclaw/issues/1634)): 核心团队提议在 Agent Loop 中增加基于规则的 `DriftMonitor`，用于检测“故障螺旋”、“重复循环”等浪费 Token 的模式。这表明项目正在从“能动”向“稳定高效”进化，相关的 [PR #1662](https://github.com/nearai/ironclaw/pull/1662) 已经提交。
*   **Skills 递归发现** ([Issue #1664](https://github.com/nearai/ironclaw/issues/1664)): 请求支持嵌套的技能目录结构，以适应更复杂的项目组织形式。
*   **Web UI 自定义 LLM** ([PR #1340](https://github.com/nearai/ironclaw/pull/1340)): 允许通过 UI 配置自定义 LLM Provider，无需重启服务，这将极大地降低运维门槛。

## 7. 用户反馈摘要
从 Issue 评论中可以提炼出以下用户痛点：
*   **上下文窗口管理痛点**: 用户在使用大上下文工具（如读取大文件或数据库记录）时，经常触发 Token 限制导致非预期的截断或报错 ([#1631](https://github.com/nearai/ironclaw/issues/1631))。
*   **Sandbox 稳定性焦虑**: 用户在测试 Sandbox 环境时遇到了超过 50 次循环未响应的问题，表明在隔离执行命令方面仍有不稳定性 ([#1637](https://github.com/nearai/ironclaw/issues/1637))。
*   **对多租户架构的期待与阵痛**: 随着 v0.22.0 引入多租户，出现了诸如飞书通道配置读取失败等迁移初期的问题，说明用户正在积极尝试新架构。

## 8. 待处理积压
*   **⚠️ 架构回归风险**: Issue [#1660](https://github.com/nearai/ironclaw/issues/1660) 提出应将 `ironclaw_common` 和 `ironclaw_safety` 恢复为内部 Crate。目前的发布仅是为了绕过发布流程的权宜之计，维护者需尽快重构 Crate 布局以防未来维护混乱。
*   **⚠️ 测试覆盖率缺口**: Issue [#1653](https://github.com/nearai/ironclaw/issues/1653) 和 [#1652](https://github.com/nearai/ironclaw/issues/1652) 指出，虽然多租户代码已合并，但缺乏端到端的回归测试（如 User-scoped prompts 和 Workspace rebinding），这可能是潜在的隐患。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是基于 2026-03-26 GitHub 数据生成的 LobsterAI 项目动态日报。

---

# 📅 LobsterAI 项目动态日报 (2026-03-26)

## 1. 今日速览
LobsterAI 项目今日保持**极高的开发与社区活跃度**。过去 24 小时内，社区反馈了 **36 条 Issue**（绝大多数为 Bug 报告和功能优化建议），同时开发团队提交了 **50 条 PR**，显示出项目正处于快速迭代与重构期。项目刚刚发布了 **v2026.3.25** 版本，引入了账户登录、付费加油包及桌面端分级授权等商业化与安全特性。然而，新版本同时也暴露了包括 MCP 配置失效、OpenClaw 网关稳定性及 Windows 端斜杠命令失效等严重回归问题，亟待修复。

## 2. 版本发布
### ✨ Release: v2026.3.25
今日发布了 `2026.3.25` 版本，主要聚焦于商业化功能接入与安全性增强。
*   **核心更新**:
    *   **feat (登录/付费)**: 新增登录功能与“加油包”付费积分系统 ([#779](https://github.com/netease-youdao/LobsterAI/pull/779))。
    *   **feat (安全)**: 桌面端引入危险命令分级授权机制 ([#796](https://github.com/netease-youdao/LobsterAI/pull/796))。
    *   **fix**: 修复 IM 聊天同步权限问题 ([#780](https://github.com/netease-youdao/LobsterAI/pull/780))。
*   **⚠️ 迁移注意**: 用户升级后需关注账户体系的变化，部分高级功能可能现在需要积分或授权。

## 3. 项目进展
尽管新版本刚发布，主分支上已有大量针对稳定性与性能的修复 PR 正在推进（共 50 个 PR 更新，其中 6 个已合并）：
*   **性能优化**: PR [#888](https://github.com/netease-youdao/LobsterAI/pull/888) 优化了流式输出性能，修复了 Intel Mac 上的主进程阻塞问题（已合并）。
*   **架构重构**: 针对模型切换导致网关重启的痛点，社区提交了 [#855](https://github.com/netease-youdao/LobsterAI/pull/855) 和 [#893](https://github.com/netease-youdao/LobsterAI/pull/893)，试图通过解耦 API Key 环境变量来实现热重载。
*   **数据安全**: PR [#839](https://github.com/netease-youdao/LobsterAI/pull/839) 新增了日志脱敏功能，防止敏感信息在导出时泄露。
*   **数据库维护**: PR [#881](https://github.com/netease-youdao/LobsterAI/pull/881) 修复了 SQLite 外键约束未启用导致的数据库膨胀问题。

## 4. 社区热点
今日社区讨论主要集中在**新版本的兼容性**与**MCP 配置**问题上：
*   **[#728 MCP 配置失效](https://github.com/netease-youdao/LobsterAI/issue/728) [CLOSED]**: 用户反馈配置的 MCP 无法被调用。这是目前反馈最集中的问题，多位用户在评论中表示遇到相同情况（"0 tools"）。
*   **[#820 打包后 MCP 不可用](https://github.com/netease-youdao/LobsterAI/issue/820)**: 用户指出 Dev 环境正常，但打包后 MCP 服务失效，怀疑是生产环境构建路径或权限问题。
*   **[#884 关于商业化模式的咨询](https://github.com/netease-youdao/LobsterAI/issue/884)**: 用户对新增的“加油包”积分体系与自建模型的关系表示困惑，反映了用户对产品商业化后的使用成本敏感。

## 5. Bug 与稳定性
今日报告了大量 Bug，部分严重影响使用，已有部分对应 PR 提交：

### 🔴 严重 - 核心功能受阻
1.  **OpenClaw 网关无限崩溃重启**: 由无效配置触发，导致应用不可用 ([#859](https://github.com/netease-youdao/LobsterAI/issue/859))。👉 **已有修复 PR**: [#894](https://github.com/netease-youdao/LobsterAI/pull/894)
2.  **Windows 客户端斜杠命令全失效**: `/help`, `/status` 等命令在桌面端完全无响应 ([#883](https://github.com/netease-youdao/LobsterAI/issue/883))。
3.  **模型切换导致网关重启**: 切换模型会中断当前对话流 ([#844](https://github.com/netease-youdao/LobsterAI/issue/844))。👉 **已有修复 PR**: [#893](https://github.com/netease-youdao/LobsterAI/pull/893)

### 🟡 中等 - 功能缺陷
1.  **数据库持续膨胀**: 删除会话未级联删除消息 ([#879](https://github.com/netease-youdao/LobsterAI/issue/879))。👉 **已有修复 PR**: [#881](https://github.com/netease-youdao/LobsterAI/pull/881)
2.  **定时任务异常**: 关闭后仍触发，或触发异常后无法自恢复 ([#850](https://github.com/netease-youdao/LobsterAI/issue/850), [#837](https://github.com/netease-youdao/LobsterAI/issue/837))。
3.  **内存管理风险**: 输入校验缺失，存在恶意内容存储风险 ([#819](https://github.com/netease-youdao/LobsterAI/issue/819))。

### 🟢 轻微 - UI/渲染
*   **Markdown 渲染错乱** ([#824](https://github.com/netease-youdao/LobsterAI/issue/824))。
*   **POPO 消息换行显示异常** ([#882](https://github.com/netease-youdao/LobsterAI/pull/882))。

## 6. 功能请求与路线图信号
*   **模型差异化配置**: 用户希望不同任务可以使用不同模型，而非全局切换 ([#856](https://github.com/netease-youdao/LobsterAI/issue/856))。这表明当前的单一模型上下文机制已无法满足高级用户需求。
*   **第三方模型支持**: 有用户反馈最新版不支持 Custom Gemini 中转模型 ([#831](https://github.com/netease-youdao/LobsterAI/issue/831))，暗示项目需加强对非标准 OpenAI 接口模型的兼容性。
*   **研发工作流集成**: 建议增加 `git worktree` 等技能及 PRD 转化规范 ([#873](https://github.com/netease-youdao/LobsterAI/issue/873))。

## 7. 用户反馈摘要
*   **痛点 - MCP 配置门槛高**: 多名用户抱怨配置 MCP 后显示 "0 tools"，认为文档或错误提示不够清晰。
*   **痛点 - 稳定性担忧**: 频繁的网关重启和数据库膨胀问题让用户对长时间运行的稳定性产生顾虑。
*   **肯定 - 功能方向**: 尽管有 Bug，但用户对“记忆管理”、“Skill 下载”以及“定时任务”等高级功能表现出浓厚兴趣，并积极提交代码优化（如日志脱敏、IPC 安全性加固），显示出核心开发者社区对项目质量的高要求。

## 8. 待处理积压
*   **[#711 npm 源访问失败](https://github.com/netease-youdao/LobsterAI/issue/711)**: 涉及 `npm.nie.netease.com` 私有源导致的打包失败，这可能阻碍外部开发者参与贡献或构建。
*   **[#816 Git 分支名注入风险](https://github.com/netease-youdao/LobsterAI/issue/816)**: 这是一个潜在的安全漏洞，虽然利用难度较高，但建议尽快处理以避免供应链攻击风险。

---
*分析师注：项目目前处于功能扩展与稳定性打磨的博弈期，建议开发团队在推进商业化功能的同时，优先解决 OpenClaw 网关稳定性与 MCP 配置体验问题，以留住早期核心用户。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

这里是为您生成的 **TinyClaw** 项目 2026-03-26 动态日报：

---

# 📊 TinyClaw 项目动态日报 (2026-03-26)

### 1. 今日速览
TinyClaw 项目今日保持了**极高的开发活跃度**，呈现出明显的“重构与整合”趋势。核心贡献者 @jlia0 集中关闭了 4 个重要的功能性 PR，成功将项目的核心架构从 Shell 脚本迁移至纯 Node.js 环境，并完成了 CLI 的 TypeScript 模块化拆分。目前项目处于**架构优化收尾阶段**，虽然社区 Issue 讨论较少，但代码层面正在快速向更健壮、更易维护的形态演进。

### 2. 版本发布
*   **无新版本发布**：虽然今日无 Tag 或 Release 发布，但鉴于连续的重构合并，预计近期会有一个包含重大架构升级的正式版本。

### 3. 项目进展
今日共有 **4 个 PR 被合并/关闭**，1 个 PR 处于开启状态，标志着项目核心架构完成重大升级：

*   **🚀 核心架构重构 (Shell -> Node.js)**：PR [#260](https://github.com/TinyAGI/tinyagi/pull/260) 已关闭。项目成功移除了对 `bash`, `tmux`, `jq`, `curl` 的运行时依赖，转而使用纯 Node.js 模块。这不仅降低了部署门槛，还通过多阶段 Dockerfile 优化了容器化支持。
*   **🛠️ CLI 模块化拆分**：PR [#263](https://github.com/TinyAGI/tinyagi/pull/263) 已关闭。将原本 847 行的巨型入口文件 `tinyagi.mjs` 重构为 ~336 行的调度器，并将逻辑拆分至 `packages/cli/src/` 下的 TypeScript 模块中，大幅提升了代码的可维护性。
*   **🔧 生态与兼容性修复**：
    *   PR [#261](https://github.com/TinyAGI/tinyagi/pull/261) 统一了各 LLM 提供商的凭证字段（标准化为 `api_key` 和 `oauth_token`），优化了 Anthropic 的认证支持。
    *   PR [#262](https://github.com/TinyAGI/tinyagi/pull/262) 修复了 Docker 构建问题（通过 `PUPPETEER_SKIP_DOWNLOAD` 解决），并优化了 README 结构，使 Quick Start 更清晰。

### 4. 社区热点
*   **最受关注（待处理）**：PR [#249](https://github.com/TinyAGI/tinyagi/pull/249) 是目前唯一处于 Open 状态的更新。该 PR 旨在重构 "Office" 界面布局，将导航从侧边栏移至顶部，并优化路由结构。这表明项目在夯实后端架构的同时，也开始着手优化前端交互体验。

### 5. Bug 与稳定性
*   **🚫 Docker 构建失败 (已修复)**：通过 PR [#262](https://github.com/TinyAGI/tinyagi/pull/262) 解决了 Docker 构建过程中因 Puppeteer 下载导致的失败问题，目前容器构建流程已恢复稳定。
*   **⚠️ 潜在迁移风险**：PR [#261](https://github.com/TinyAGI/tinyagi/pull/261) 修改了认证字段名（如 `auth_token` -> `api_key`），虽然代码已合并，但现有用户升级时可能需要更新环境变量配置，需留意潜在的 Breaking Change（破坏性变更）。

### 6. 功能请求与路线图信号
*   **纯 Node.js 运行时**：通过 [#260](https://github.com/TinyAGI/tinyagi/pull/260) 的合并，项目释放了彻底摆脱 Shell 环境束缚的信号，未来可能在 Windows 原生支持及轻量级容器化上有更好表现。
*   **UI/UX 改进**：Open 状态的 PR [#249](https://github.com/TinyAGI/tinyagi/pull/249) 暗示了下一阶段的重点将涉及前端界面的交互优化（如顶部导航、详情面板改进）。

### 7. 用户反馈摘要
*   *注：过去 24 小时内未产生公开的 Issue 评论数据。*
*   从代码提交记录推断，目前主要的“反馈”来自构建环境（Docker）和认证流程，维护者正积极解决这些底层集成痛点，以确保用户能更流畅地部署和使用。

### 8. 待处理积压
*   **前端布局重构**：[PR #249](https://github.com/TinyAGI/tinyagi/pull/249) 仍处于 Open 状态，建议维护者尽快 Review 并测试该 UI 变更，以便完成全栈（后端架构+前端 UI）的现代化升级。

---
**分析师点评**：今日 TinyClaw 的更新质量极高，属于典型的**清偿技术债务**（Paying down technical debt）。从 Shell 脚本迁移到 TypeScript/Node.js 是迈向企业级稳定性的关键一步。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

这里是为您生成的 **Moltis** 项目 2026-03-26 动态日报。

---

# Moltis 项目动态日报 (2026-03-26)

## 1. 今日速览
Moltis 项目今日保持**高度活跃**，社区互动与技术迭代并行推进。过去 24 小时内，项目成功关闭了 2 个 Issue 并处理了 1 个 PR，同时发起了 2 个旨在优化底层架构的高质量 Pull Request。值得注意的是，核心贡献者 @fortunto2 正在推动重大依赖升级与 Provider 重构，这可能预示着项目正在为下一个大版本做准备。虽然 WhatsApp 集成问题已被标记为关闭，但关于“本地思考”功能的讨论仍然热度不减，显示出用户对隐私与本地化能力的强烈需求。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 1 个 PR 被关闭，项目在可定制性与代码维护性上取得小幅进展：

*   **[[CLOSED] feat(mcp): add custom display names for MCP servers (#439)](https://github.com/moltis-org/moltis/pull/439)**
    *   **内容**：为 MCP 服务器配置添加了可选的 `display_name` 字段。
    *   **意义**：允许用户在界面上使用友好的名称标识服务器，同时保持底层技术 ID 的稳定性。这提升了用户体验（UX），特别是对于管理多个 MCP 服务器的进阶用户而言，是一项实用的易用性改进。

## 4. 社区热点
今日社区关注点集中在功能请求与集成稳定性上：

*   **[[OPEN] [Feature]: Local thinking (#490)](https://github.com/moltis-org/moltis/issues/490)**
    *   **热度**：2 条评论。
    *   **分析**：这是今日新开且唯一的活跃 Issue。作者 @Wanderspool 提出了“本地思考”的需求。考虑到昨日（3月25日）也有同名的 Issue #489 被迅速关闭，推测该功能可能处于需求澄清阶段，或者是重复提交引发的讨论。社区对**本地处理能力**（Local Processing）的关注度正在上升，这通常与隐私保护和降低延迟有关。
*   **[[CLOSED] [Bug]: WhatsApp Integration is not working (#460)](https://github.com/moltis-org/moltis/issues/460)**
    *   **热度**：3 个 👍（点赞），1 条评论。
    *   **分析**：该 Bug 导致 WhatsApp 集成失效，获得了较高的用户共鸣（3 个赞）。目前该 Issue 已关闭，维护者可能已定位问题或认为已在开发版修复。需关注后续是否有补丁发布。

## 5. Bug 与稳定性
今日报告的 Bug 数量较少，主要集中在第三方集成层面：

*   **Sev-2 (已关闭): WhatsApp Integration is not working (#460)**
    *   **描述**：WhatsApp 集成功能失效。
    *   **状态**：Issue 已关闭。虽然目前未见明确的 Fix PR 合并记录，但可能通过其他提交或配置调整解决，建议受影响用户关注最新代码变动。

## 6. 功能请求与路线图信号
通过今日的 Issues 和 PRs，我们可以捕捉到明确的路线图信号：

*   **架构精简与替代方案**
    *   **信号**：PR [#487 (feat: add openai-oxide)](https://github.com/moltis-org/moltis/pull/487) 试图用 **888 行代码替换现有的 5300+ 行** OpenAI 实现。
    *   **分析**：这是一个强烈的**技术债务清理**信号。如果合并，Moltis 的 OpenAI 兼容层将变得更加轻量、易于维护。这表明项目正从“快速堆砌功能”转向“优化内核稳定性”。
    *   **预测**：该 PR 极有可能被合并，并可能成为未来版本的默认后端。

*   **本地化/隐私计算**
    *   **信号**：Issue [#490 (Local thinking)](https://github.com/moltis-org/moltis/issues/490) 的提出。
    *   **分析**：用户希望 AI 的部分推理过程能在本地进行。结合 Moltis 作为个人 AI 助手的定位，**Hybrid AI（混合 AI，云端+本地）** 可能是接下来的重点开发方向。

## 7. 依赖与重构风险
今日有两个待合并的 PR 涉及核心依赖更新，需重点关注：

*   **[[OPEN] chore: bump reqwest 0.12 → 0.13 (#488)](https://github.com/moltis-org/moltis/pull/488)**
    *   **内容**：将 `reqwest` 库升级到 0.13 稳定版。
    *   **风险**：这是一个阻塞性 PR，是 PR #487 的前置条件。虽然变更只有一行 `Cargo.toml`，但 `reqwest` 是核心 HTTP 客户端，升级可能导致某些边缘情况下的网络请求行为变化。
*   **[[OPEN] feat: add openai-oxide as alternative OpenAI provider (#487)](https://github.com/moltis-org/moltis/pull/487)**
    *   **内容**：引入 `openai-oxide` 作为替代提供商。
    *   **收益**：大幅减少代码体积（-85%），提升编译速度和可维护性。

## 8. 待处理积压
*   **无长期滞留积压**：今日数据显示 Issues 和 PRs 的流转速度较快。Issue #489 在创建当天即被关闭，说明维护者响应非常及时。

---
**分析师总结**：Moltis 目前处于**健康迭代期**。虽然 Bug #460 影响了部分特定用户，但整体来看，项目重心正明显向**Rust 原生架构优化**（引入 openai-oxide）和**用户体验微调**（MCP 命名）倾斜。建议关注 PR #487 的合并进度，这将是下一个版本的里程碑。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-26)

## 1. 今日速览
CoPaw 项目今日保持着**极高的活跃度**，社区互动频繁。过去24小时内，Issues 和 PR 的更新量均达到 **50 条**，显示出社区对 v0.2.0 版本发布后的强烈反响。项目组刚刚发布了 **v0.2.0.post1** 补丁版本，主要修复了文档和工具调用解析问题。目前的焦点集中在**多智能体配置**、**Memory（记忆）模块性能**以及**第三方渠道（微信/飞书/钉钉）的接入体验**上。尽管新功能（如微信接入）正在通过 PR 涌入，但 CPU 占用异常和版本升级后的兼容性问题仍是用户投诉的重点。

## 2. 版本发布
### ✨ v0.2.0.post1
- **链接**: [Release v0.2.0.post1](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.2.0.post1)
- **更新内容**:
    - **Docs**: 更新了 v0.2.0 的 Release Note ([PR #2212](https://github.com/agentscope-ai/CoPaw/pull/2212))。
    - **Feat(tool)**: 增强了工具调用解析能力，现在支持从 LLM 的 thinking（思维链）和 text content 中解析工具调用 ([PR #2192](https://github.com/agentscope-ai/CoPaw/pull/2192))。这对于兼容非标准输出格式的模型（尤其是本地模型）非常重要。
    - **Chore**: 版本号更新至 0.2.0.post1。

## 3. 项目进展
今日共有 **29 个 PR 被合并或关闭**，主要集中在修复 v0.2.0 引入的回归问题、提升系统稳定性以及扩充渠道接入能力。

- **🛠️ 核心修复与稳定性**:
    - **多智能体与多标签页隔离** ([PR #2283](https://github.com/agentscope-ai/CoPaw/pull/2283)): 修复了严重 Bug，该 Bug 导致不同浏览器标签页或不同智能体之间的模型配置互相覆盖。现已合并，极大提升了多任务场景下的可用性。
    - **Telegram 超时修复** ([PR #2280](https://github.com/agentscope-ai/CoPaw/pull/2280)): 修复了 Telegram 频道因长轮询超时导致的 CPU 占用过高问题。
    - **Memory 防覆盖** ([PR #2285](https://github.com/agentscope-ai/CoPaw/pull/2285)): 防止并发写入导致 MEMORY.md 文件损坏或覆盖。

- **🔌 渠道接入扩展**:
    - **微信 iLink Bot 支持** ([PR #2260](https://github.com/agentscope-ai/CoPaw/pull/2260)): 新增支持通过 iLink 协议接入微信，目前处于 Open 状态，是社区高度期待的功能。
    - **自定义 Channel 路由注册** ([PR #2140](https://github.com/agentscope-ai/CoPaw/pull/2140)): 允许非内置渠道（如 ClawBot）注册 HTTP 路由，提高了系统的可扩展性。

- **🚀 功能增强**:
    - **上下文管理重构** ([PR #2300](https://github.com/agentscope-ai/CoPaw/pull/2300)): 提出了 Context Management v2.0 重构方案，旨在解决 CPU 占用高和记忆检索效率低的问题。

## 4. 社区热点
今日讨论最热烈的问题集中在**华为小艺渠道的连通性**、**Memory 效率**以及**基础资源占用**上。

1.  **[channel] 小艺接入问题** ([Issue #1911](https://github.com/agentscope-ai/CoPaw/issues/1911))
    - **热度**: 18 评论
    - **分析**: 用户尝试接入华为小艺频道，虽然手机端能看到智能体，但对话时频繁报错“开小差”，且回复内容不连贯。这反映了用户对国产硬件生态（华为）集成的强烈需求，同时也暴露了当前非标准渠道接入的不稳定性。
2.  **[Bug] 飞书频道“延迟回复”顽疾** ([Issue #1345](https://github.com/agentscope-ai/CoPaw/issues/1345))
    - **热度**: 12 评论
    - **分析**: 这是一个长期存在的问题，Bot 在飞书上经常回答“上一个”问题，表现出明显的异步处理延迟。用户反馈非常具体，提供了详细的复现场景，表明飞书 Channel 的消息队列或状态管理存在深层 Bug。
3.  **[Feature] MEMORY.md 效率低下** ([Issue #2289](https://github.com/agentscope-ai/CoPaw/issues/2289))
    - **热度**: 9 评论
    - **分析**: 随着使用时间增长，基于纯文本文件（MEMORY.md）的记忆检索导致 Agent 响应变慢。用户迫切需要更高效的向量数据库或结构化存储方案。
4.  **[Bug] 空闲状态下 CPU 100% 占用** ([Issue #2218](https://github.com/agentscope-ai/CoPaw/issues/2218))
    - **热度**: 9 评论
    - **分析**: 涉及底层架构的 Busy-polling 问题，导致即便没有对话，CoPaw 也会跑满 CPU。这直接影响了本地部署的体验，急需架构层面的优化。

## 5. Bug 与稳定性
今日报告的 Bug 多数与 **v0.2.0 升级** 有关，部分已有修复方案。

- **🔴 严重**:
    - **CPU 100% 空闲占用**: ([Issue #2218](https://github.com/agentscope-ai/CoPaw/issues/2218)) - 原因推测为 Memory 压缩钩子或 Context 检查的死循环。**相关修复**: [PR #2300](https://github.com/agentscope-ai/CoPaw/pull/2300) 尝试重构上下文管理以降低 CPU 占用。
    - **升级后 Web 页面无法打开**: ([Issue #2254](https://github.com/agentscope-ai/CoPaw/issues/2254)) - Docker 升级到 0.2.0 后服务虽然运行但网页无法访问，可能与端口映射或启动脚本变更有关。
- **🟠 中等**:
    - **Context Window 超限报错**: ([Issue #1873](https://github.com/agentscope-ai/CoPaw/issues/1873)) - 升级后频繁报错 `context window exceeds limit`，需优化 Summarizer 逻辑。
    - **定时任务 Cron 503 错误**: ([Issue #2230](https://github.com/agentscope-ai/CoPaw/issues/2230)) - 升级后计划任务功能不可用。
    - **钉钉 Webhook 过期导致推送失败**: ([Issue #2153](https://github.com/agentscope-ai/CoPaw/issues/2153)) - 未正确保存 `sessionWebhookExpiredTime`。
    - **MiniMax Provider 连接检查失败**: ([Issue #2303](https://github.com/agentscope-ai/CoPaw/issues/2303)) - 由于调用了 MiniMax 不支持的 `/models` 端点导致 404。**已提 Fix**: [PR #2304](https://github.com/agentscope-ai/CoPaw/pull/2304) 建议将 404 视为连接成功。
- **🟢 轻微**:
    - **乱码输出**: ([Issue #2295](https://github.com/agentscope-ai/CoPaw/issues/2295)) - 偶发乱码，可能与特定模型输出有关。

## 6. 功能请求与路线图信号
用户对功能的请求正从“能用”转向“好用”和“多模态协作”。

- **记忆系统升级**: 多个 Issue (如 [#2289](https://github.com/agentscope-ai/CoPaw/issues/2289)) 提及文本记忆的低效。
    - **进展**: [PR #2308](https://github.com/agentscope-ai/CoPaw/pull/2308) 提出了基于 AnalyticDB for PostgreSQL 的长期记忆方案，这可能成为解决记忆瓶颈的关键路径。
- **智能体间异步通信**: ([Issue #2225](https://github.com/agentscope-ai/CoPaw/issues/2225)) 用户希望 Agent 之间能并发通信并回调汇总，用于股票盯盘等复杂场景。这是向 Multi-Agent 框架演进的重要信号。
- **更灵活的模型切换**: ([Issue #2301](https://github.com/agentscope-ai/CoPaw/issues/2301)) 用户希望有“模型天梯榜”和自动切换功能，以及一键更新按钮。
    - **进展**: [PR #2282](https://github.com/agentscope-ai/CoPaw/pull/2282) 正在引入全局 LLM 速率限制器和并发控制，为模型的高效调度打下基础。
- **微信与浏览器同步**: ([Issue #2301](https://github.com/agentscope-ai/CoPaw/issues/2301)) 跨设备会话接续（Web 端切到手机端）是高频需求。

## 7. 用户反馈摘要
- **痛点**:
    - **升级体验差**: 用户普遍反映 Docker 升级困难，常出现端口不通、配置丢失或 503 错误。
    - **文档缺失**: 特别是在对接 Ollama 等本地模型时，配置文档语焉不详 ([Issue #2298](https://github.com/agentscope-ai/CoPaw/issues/2298))。
    - **多智能体配置繁琐**: 目前通过配置文件修改模型参数不够直观，用户期待在 UI 上直接为不同 Agent 指定不同模型和温度 ([Issue #2288](https://github.com/agentscope-ai/CoPaw/issues/2288))。
- **满意点**:
    - **本地模型支持**: 尽管配置繁琐，但用户对 CoPaw 支持本地模型（如 Qwen, Llama.cpp）表现出了极大的热情和耐心，正在积极测试各种量化版本。
    - **可扩展性**: 社区正在积极贡献代码（如微信、ADB 记忆），证明 CoPaw 的架构对开发者具有吸引力。

## 8. 待处理积压
- **[Bug] 飞书图片透传导致非 Vision 模型崩溃** ([Issue #1383](https://github.com/agentscope-ai/CoPaw/issues/1383)): 虽已关闭，但需确认是否在 v0.2.0.post1 中完全解决，用户反馈该问题导致 Agent 直接报错 400。
- **[Help Wanted] 贡献任务列表** ([Issue #2291](https://github.com/agentscope-ai/CoPaw/issues/2291)): 官方发布了新的任务清单（S1），包含 P0-P2 优先级的开发任务，欢迎社区认领。
- **[Feature] 微信 ClawBot 接入** ([Issue #2101](https://github.com/agentscope-ai/CoPaw/issues/2101)): 社区高度关注微信个人号接入，已有相关 PR ([#2260](https://github.com/agentscope-ai/CoPaw/pull/2260), [#2140](https://github.com/agentscope-ai/CoPaw/pull/2140)) 提交，建议项目组优先 Review 以打通微信生态。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

以下是根据 ZeptoClaw 项目 2026-03-26 的 GitHub 数据生成的动态日报。

---

# ZeptoClaw 项目动态日报 (2026-03-26)

## 1. 今日速览
ZeptoClaw 项目今日呈现出极高的开发活跃度，呈现出典型的"冲刺"状态。过去24小时内共有 **29 个 PR 更新**（其中 21 个已合并/关闭）和 **11 个 Issue 更新**（9 个已关闭），显示出维护团队极快的响应速度和迭代效率。今日重心明显向 **Telegram 生态集成** 和 **浏览器自动化工具** 倾斜，多项关键功能已落地。此外，针对容器化环境的兼容性和安全性也进行了显著增强。

## 2. 版本发布
*   **状态**: 过去24小时内无新版本 Release 发布。
*   **趋势**: 虽然没有正式的 Release tag，但大量功能 PR（如 ACP 协议、浏览器工具、Telegram 增强）已合并至主分支，预示着距离下一个功能版本发布已不远。

## 3. 项目进展
今日共有 **21 个 PR 被合并**，项目整体功能完整度有显著提升，主要集中在以下三个领域：

*   **🤖 浏览器自动化与工具链 (重大更新)**
    *   **PR #436 [MERGED]**: 成功引入基于 `agent-browser` 的 **BrowserTool**，支持 Lightpanda 和 Chrome 的自动回退机制，赋予 Agent 真实的网页浏览与交互能力。
    *   **PR #438, #439 [MERGED]**: 修复了工具链底层的 NFC 字符偏移映射问题，并优化了 Web 搜索工具的输出体验（静默搜索模式），减少了对话中的噪音。

*   **💬 Telegram 体验全面重构**
    *   **PR #432, #429 [MERGED]**: 实现了消息的 **Reply-to Threading (回复嵌套)**，解决了群聊中消息乱序的痛点。
    *   **PR #431 [MERGED]**: 修复了 LLM 时间感知问题，通过使用全拼星期格式 (`%A`) 防止模型产生日期幻觉。
    *   **PR #430 [MERGED]**: 增加了 **Reaction Indicator (表情反馈)**，Bot 在处理和完成消息时会分别显示 👀 和 ✅。

*   **🔒 安全性与基础设施**
    *   **PR #440 [MERGED]**: 加固了 ACP HTTP 通道的安全性，修复了 CORS 配置并防止路径遍历攻击。
    *   **PR #426 [MERGED]**: 优化了 `lint-container.sh` 脚本，优先适配 Podman 环境，解决了混合环境下的构建报错。

## 4. 社区热点
尽管今日合并量巨大，但讨论热度最高的地方集中在未决的优化细节上：

*   **[讨论热点] Issue #435: 容器引擎检测逻辑优化**
    *   **链接**: [qhkm/zeptoclaw Issue #435](https://github.com/qhkm/zeptoclaw/issues/435)
    *   **分析**: 维护者 @qhkm 指出 PR #426 虽然修复了 Podman 的报错，但对同时安装了 Docker 和 Podman 的用户可能造成困惑（静默切换引擎）。社区正在讨论如何通过更智能的检测逻辑（如检查 `docker info` 输出）来平衡兼容性与用户预期。已有对应的修复 PR #441 提交。

*   **[反馈热点] Issue #434: ACP 安全加固**
    *   **链接**: [qhkm/zeptoclaw Issue #434](https://github.com/qhkm/zeptoclaw/issues/434)
    *   **分析**: 该 Issue 提出了针对 DNS Rebinding 攻击的防护需求，获得 👍 点赞。这表明用户对 ZeptoClaw 作为本地服务运行时的安全性高度关注，该问题已在 PR #440 中解决。

## 5. Bug 与稳定性
今日报告并处理的 Bug 数量较多，响应速度极快，大部分已修复：

1.  **[P1-Critical] Provider 模型发现逻辑回归** (Issue #416)
    *   **问题**: 之前的 PR #407 导致带前缀的模型 ID（如 `anthropic/`）路由失败。
    *   **状态**: **已修复并关闭**。维护者迅速跟进处理了这一核心路由逻辑问题。
2.  **[Bug] Telegram 图片消息静默丢弃** (Issue #419)
    *   **问题**: Bot 忽略了图片消息，因为 Handler 仅监听文本。
    *   **状态**: **已修复并关闭**。
3.  **[Bug] Telegram 输入指示器竞态条件** (Issue #415)
    *   **问题**: 并发消息导致输入状态显示混乱。
    *   **状态**: **已修复并关闭**。
4.  **[Bug] 容器脚本 Lint 报错** (Issue #424)
    *   **问题**: 使用 Podman 时 `lint-container.sh` 异常终止。
    *   **状态**: **已修复并关闭**。

## 6. 功能请求与路线图信号
通过分析未合并的 PR 和开放的 Issue，可以捕捉到下一阶段的开发重点：

*   **Telegram 体验持续优化**:
    *   **Issue #428 / PR #433**: 正在推进更完善的 "Reaction Indicator" 功能，目前 PR 处于 Open 状态，预计合并后将进一步提升交互体验。
    *   **Issue #331**: 寻求改进 Telegram 的 Markdown 渲染和格式支持，虽然 Issue 已关，但相关的 HTML 转义修复 (PR #443) 仍在 Open 状态，表明格式化渲染仍是重点。

*   **浏览器工具栈的精细化**:
    *   **PR #442, #443**: 目前 Open 状态，正在拆分和细化 BrowserTool 的依赖项，包括 HTML 转义和 XSS 防护。这表明项目对引入外部浏览器的安全性持谨慎态度。

*   **未来可能的路线图**:
    *   **Issue #285**: 深度扫描 GitHub 仓库中的 `SKILL.md`。虽然已关闭，但这暗示了 ZeptoClaw 未来可能在 "Agent Skills Market" 或自动化技能发现方面有动作。

## 7. 用户反馈摘要
从 Issues 和 PRs 的摘要中可以提炼出用户的核心痛点：

*   **群聊体验痛点**: 用户（特别是 @stuartbowness）非常关注 Bot 在 Telegram 群组中的可用性。之前的 "刷屏" 和 "对话不连贯" 是主要不满点，今日的 Threading 和 Quiet Output 更新直接回应了这些诉求。
*   **本地运行安全**: 用户对本地 HTTP 端点的暴露感到担忧（Issue #434），不希望运行 ZeptoClaw 导致本地服务被恶意网页跨域访问。
*   **多模态支持缺失**: Issue #419 暴露了用户确实会发送图片给 Bot，且期望得到处理而非沉默，这暗示多模态（视觉）能力的潜在需求。

## 8. 待处理积压
*   **PR 队列积压**: 目前有 **8 个 PR 处于 Open 状态**。其中 **PR #421** (文档规范) 和 **PR #441** (容器检测修复) 是低风险且高价值的功能，建议维护者优先 Review 并合并，以清理队列。
*   **长期 Issue**: 目前未发现长期未响应的严重阻塞 Issue，大部分提出的问题都在 24 小时内得到了 "Open -> Fix -> Close" 的快速处理，项目健康度极佳。

---

**总结**: ZeptoClaw 今日表现极其硬核，一天内完成了通常需要一周工作量的小版本迭代。重点在于将 Agent 能力从单纯的文本/API 交互扩展到了 **Web 浏览** 和 **富媒体通讯** 平台，且对安全性没有妥协。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*