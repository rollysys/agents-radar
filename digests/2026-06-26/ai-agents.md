# OpenClaw 生态日报 2026-06-26

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-26 03:58 UTC

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

# OpenClaw 项目动态日报 (2026-06-26)

## 1. 今日速览
OpenClaw 项目今日维持极高的社区活跃度，新增与活跃 Issue 总数达 500 条，显示出用户基数增长带来的反馈洪峰。然而，项目维护面临严峻挑战，Issue 关闭率极低（仅 5%），PR 待合并积压高达 415 条，表明维护者资源捉襟见肘，响应速度严重滞后于社区反馈。核心讨论集中在模型兼容性报错、内存泄漏导致的 OOM 崩溃以及生态建设方向，部分低级代码质量错误引发了用户强烈不满。整体来看，项目正处于功能迭代与稳定性修复的拉锯战，急需扩充审核力量以缓解积压。

## 2. 项目进展
今日虽无新版本发布，但代码库中有多个关键 PR 正在推进或已关闭，主要集中在安全加固与多渠道兼容性修复：

*   **安全与沙箱增强**：
    *   PR [#96926](https://github.com/openclaw/openclaw/pull/96926) 已合并，修复了后端沙箱工作目录审计问题，防止在错误路径下的回归风险。
    *   PR [#96917](https://github.com/openclaw/openclaw/pull/96917) 提出了对 Anthropic OAuth 回调地址的安全限制，防止 SSRF 攻击，目前已提交证明。
*   **多渠道字符处理修复**：
    *   贡献者 `@llagy009` 提交了一系列修复（如 [#96575](https://github.com/openclaw/openclaw/pull/96575), [#96580](https://github.com/openclaw/openclaw/pull/96580)），系统性地解决了 QQBot、WhatsApp、Slack 等渠道中 UTF-16 字符截断导致的乱码或 Lone Surrogate 问题，提升了国际化支持稳定性。
*   **资源消耗限制**：
    *   PR [#96907](https://github.com/openclaw/openclaw/pull/96907) 和 [#96905](https://github.com/openclaw/openclaw/pull/96905) 正在修复 Runway 和 OpenAI 视频生成接口未限制 JSON 响应大小的问题，防止因恶意或配置错误的端点导致 OOM。

## 3. 社区热点
今日社区讨论焦点集中在模型兼容性与代码质量问题上：

*   **OpenAI 模型参数兼容性问题** ([#63918](https://github.com/openclaw/openclaw/issues/63918))：
    该 Issue 以 17 条评论位居热度榜首。Cron 任务在调用 `gpt-5-nano` 等新模型时发送了不支持的 `thinking=none` 参数，导致任务全线失败。用户对这种破坏性变更反应强烈，呼吁尽快修复参数映射逻辑。
*   **硬编码工作路径的低级错误** ([#51429](https://github.com/openclaw/openclaw/issues/51429))：
    一位名为 "wangtao" 的开发者的工作路径被硬编码进代码并发布，导致所有用户安装后目录错乱。此 Issue 引发了 12 条评论的激烈讨论，社区对代码审查流程的疏漏表示担忧。
*   **ClawHub 生态建设困局** ([#50090](https://github.com/openclaw/openclaw/issues/50090))：
    社区核心贡献者指出当前 Skill 发布与 ClawHub 生态存在巨大落差，承诺的功能未兑现。该讨论揭示了项目在生态扩展性与核心功能稳定性之间的资源分配矛盾。

## 4. Bug 与稳定性
今日报告了大量严重的稳定性问题，主要集中在内存管理和上下文处理：

*   **[P1] Gateway 严重内存泄漏** ([#55334](https://github.com/openclaw/openclaw/issues/55334))：
    `sessions.json` 无限增长导致 Gateway 内存占用在数天内从 389MB 飙升至 14.7GB 并触发 OOM。目前尚无 Fix PR，严重影响生产环境稳定性。
*   **[P1] Chrome 扩展移除导致跨机器功能丢失** ([#53599](https://github.com/openclaw/openclaw/issues/53599))：
    v2026.3.22 移除了 Chrome 扩展驱动且未提供替代方案，导致托管服务提供商无法跨机器使用，属于严重的功能回归。社区已提交相关修复讨论，但官方暂未响应。
*   **[P2] 上下文无限注入导致 Token 浪费** ([#67419](https://github.com/openclaw/openclaw/issues/67419))：
    Bootstrap 文件在每轮对话中被重复注入，消耗 20-30% 的 Token。这是长期存在的性能痛点，影响用户成本。
*   **[P2] Cron 任务参数错误** ([#63918](https://github.com/openclaw/openclaw/issues/63918))：
    如前所述，导致自动化任务大规模失败，急需修复。

## 5. 功能请求与路线图信号
*   **可配置流式监控超时** ([#68596](https://github.com/openclaw/openclaw/issues/68596))：
    针对 DeepSeek-R1 等长推理模型，用户强烈请求可配置的 Watchdog 超时时间，避免因推理时间长于默认值而中断。这反映了项目对新一代推理模型的适配滞后。
*   **敏感数据脱敏支持** ([#64046](https://github.com/openclaw/openclaw/issues/64046))：
    用户指出配置文件与日志中敏感信息明文展示存在安全隐患，请求支持脱敏功能。这是企业级部署的刚需。
*   **多槽位记忆架构** ([#60572](https://github.com/openclaw/openclaw/issues/60572))：
    提议支持多个记忆提供者并行处理不同层级的记忆数据，标志着 OpenClaw 向更复杂智能体架构演进的信号。

## 6. 用户反馈摘要
*   **信任危机**：硬编码路径事件（#51429）导致用户质疑项目的代码审查与 CI 流程可靠性，甚至出现"谁是 wangtao"的讽刺性评论。
*   **生产环境焦虑**：内存泄漏与频繁的上下文重置让运维人员感到疲惫，多条评论提到"不得不每天重启服务"。
*   **对 AI 模型快速迭代的疲惫**：OpenAI 新模型参数变更导致的崩溃让用户感到维护负担加重，希望项目能提供更好的抽象层来应对上游变化。

## 7. 待处理积压
以下关键问题长期悬而未决，需维护者立即关注：

*   **[P1] CLI 路径绕过调度器安全漏洞** ([#57326](https://github.com/openclaw/openclaw/issues/57326))：自 3 月报告至今未修复，影响核心安全架构。
*   **[P1] 会话重置死循环** ([#63216](https://github.com/openclaw/openclaw/issues/63216))：特定会话 Key 触发无限重置，无 Fix PR。
*   **[P2] Webhook 多轮对话支持失效** ([#11665](https://github.com/openclaw/openclaw/issues/11665))：文档承诺的功能实际不存在，自 2 月积压至今。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-06-26)

## 1. 生态全景
当前 AI 智能体开源生态正处于从"功能堆砌"向"稳定性与安全合规"转型的阵痛期。头部项目普遍面临模型快速迭代带来的兼容性挑战（如 GPT-5 参数变更）及内存泄漏等资源管理难题，**工程化短板日益凸显**。安全边界划定与权限控制成为今日焦点，多项目集中修复沙箱逃逸、凭证泄露等高危漏洞，标志着生态正步入严肃的生产环境准备阶段。

## 2. 各项目活跃度对比

| 项目名称 | Issues (新增/活跃/关闭) | PRs (更新/待合并/已合并) | Release | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500+ (活跃极高) | 415 (积压严重) | 无 | 🚨 **过载**：Issue 关闭率极低 (5%)，维护力量严重不足，面临信任危机。 |
| **NanoBot** | 25 / 18 (关闭) | 42 / 27 / 15 | 无 | 🟢 **健康**：响应极其迅速，安全漏洞修复高效，社区与维护者互动良性。 |
| **Zeroclaw** | 35 / 22 / 13 | 46 (积压较大) | v0.8.2 (预备) | 🟡 **良好**：版本推进有序，但 PR 积压显示审核压力渐增，安全响应及时。 |
| **Hermes Agent**| 38 / 12 (关闭) | 47 (积压较大) | 无 | 🟡 **活跃**：功能迭代快，但桌面端稳定性问题较多，存在严重的隐私泄露修复。 |
| **IronClaw** | 50 / 50 | 50+ (活跃) | 无 | 🟢 **重构期**：处于架构重构核心期，Issue 量大但多为内部测试反馈，开发强度极高。 |
| **CoPaw** | 26 / 11 (关闭) | 50 / 20 (关闭) | 无 | 🟢 **迭代快**：修复模型兼容性问题迅速，前端与 Runtime 2.0 迁移是当前重心。 |
| **NanoClaw** | 1 / 0 | 16 / 11 (关闭) | 无 | 🟢 **稳健**：PR 合并率高，专注于运维体验与安全性，处于质量巩固阶段。 |
| **PicoClaw** | 3 / 2 (关闭) | 19 / 6 (关闭) | 无 | 🟢 **稳定**：关注边缘设备适配，依赖升级及时，资源消耗控制良好。 |
| **LobsterAI** | 1 (活跃) | 8 (关闭) | 无 | 🟡 **沉寂**：代码提交活跃但社区互动低迷，历史遗留 Bug 无人响应。 |
| **EasyClaw** | 0 | 0 | 2 (v1.8.45/46) | 🔵 **维护**：无社区互动，维护者独立快速修复回归问题。 |
| **Others** | - | - | - | ⚪ **静默**：NullClaw, TinyClaw 等无活动。 |

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照项目**，OpenClaw 展现出典型的"大而不强"特征：
*   **优势与地位**：拥有最庞大的用户基数和最广泛的渠道接入能力（QQBot, WhatsApp, Slack等），是生态中"全功能"集大成者，其国际化适配和渠道覆盖面远超同类。
*   **技术路线差异**：相比 NanoBot/Zeroclaw 的"安全优先"和 IronClaw 的"架构重构"，OpenClaw 更倾向于快速集成，但在底层稳定性（OOM 崩溃）和代码审查（硬编码路径事件）上欠账较多。
*   **社区规模对比**：虽然社区热度最高（500+ Issue），但维护效率远低于 NanoBot 和 CoPaw。**5% 的 Issue 关闭率**与其庞大的用户群形成巨大反差，显示出项目正处于维护崩溃的边缘，亟需扩充审核力量或重构治理模式。

## 4. 共同关注的技术方向

1.  **模型兼容性抽象层**
    *   **涉及项目**：OpenClaw, CoPaw, LobsterAI, Hermes Agent。
    *   **诉求**：OpenAI 新模型参数变更（如 `thinking=none`）导致全线崩溃，各项目均在修复 GLM、Qwen、DeepSeek 等特定模型的流式解析或参数映射问题。**构建抗上游变更的适配层**成为刚需。

2.  **资源管控与成本优化**
    *   **涉及项目**：OpenClaw, PicoClaw, Hermes Agent, Zeroclaw。
    *   **诉求**：
        *   **内存安全**：OpenClaw 的 Gateway OOM 和 Zeroclaw 的进程泄漏表明资源管理是最大短板。
        *   **Token 成本**：PicoClaw 修复心跳空耗，Hermes 讨论压缩工具输出，Zeroclaw 修复 Base64 图片 Token 爆炸，均反映用户对**运行成本极其敏感**。

3.  **安全沙箱与权限控制**
    *   **涉及项目**：NanoBot, Zeroclaw, NanoClaw, OpenClaw。
    *   **诉求**：从 NanoBot 的 `exec` 白名单绕过、Zeroclaw 的子代理权限逃逸，到 OpenClaw 的路径审计，**智能体工具调用的安全边界**正在经历新一轮加固。

## 5. 差异化定位分析

*   **OpenClaw**：**全能型平台**。侧重多渠道接入与生态扩展，适合快速部署，但需忍受较高的不稳定性。
*   **NanoBot / Zeroclaw**：**企业级安全型**。高度重视沙箱隔离、供应链安全和权限模型，适合对安全性有严苛要求的商业落地场景。
*   **IronClaw**：**架构创新型**。正进行 "Reborn" 重构，主攻记忆系统和多租户权限，代表下一代智能体架构演进方向。
*   **PicoClaw**：**边缘计算型**。关注资源受限设备（如树莓派）和低功耗场景，差异化优势在于轻量化。
*   **Hermes Agent / CoPaw**：**体验优化型**。侧重多模态交互体验（如 Slack UI、桌面端）和特定模型深度适配。

## 6. 社区热度与成熟度

*   **危机期**：**OpenClaw**。虽然热度最高，但积压严重，信任危机浮现，处于社区治理模式的转折点。
*   **快速迭代期**：**IronClaw, CoPaw, Hermes Agent**。Issue 和 PR 活跃，频繁修复 UI 和兼容性问题，处于功能密集开发阶段。
*   **质量巩固期**：**NanoBot, Zeroclaw, NanoClaw, PicoClaw**。PR 合并率高，关注点从"功能实现"转向"安全修复"和"性能优化"，显示出较高的项目成熟度。
*   **维护期/沉寂期**：**LobsterAI, EasyClaw**。LobsterAI 社区互动停滞，EasyClaw 仅靠维护者单向发布，缺乏社区共建活力。

## 7. 值得关注的趋势信号

1.  **安全成为核心生产力**：今日多项目集中修复高危漏洞（如 NanoBot 的 SSRF、Zeroclaw 的权限绕过、NanoClaw 的密钥泄露）。**"安全审计"已不再是可选项，而是智能体能否进入生产环境的一票否决项。** 建议开发者优先关注沙箱逃逸与权限模型设计。
2.  **"Bring Your Own Model" (BYOM) 的适配痛点**：随着开源模型（DeepSeek, Qwen, GLM）和新闭源模型（GPT-5 variants）的涌现，用户强烈要求项目支持自定义 Provider 和 Function Calling 协议转换（CoPaw, OpenClaw）。**兼容层中间件**可能成为独立的技术热点。
3.  **记忆与上下文管理的范式转移**：IronClaw 的 Memory 扩展、Hermes 的压缩集成、OpenClaw 的多槽位记忆请求，均指向一个共识——简单的 RAG 或无限 Context 注入已无法满足需求。**分层记忆架构**和**成本感知的上下文压缩**将成为下一阶段智能体的核心竞争力。
4.  **运维体验重要性提升**：Web 端升级、日志轮转、会话自动清理等功能频繁出现在各项目 PR 中。这表明用户已从单纯的"玩 Demo"转向"长期托管运行"，**可观测性与运维便利性**成为评估项目优劣的新维度。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-26)

## 1. 今日速览
今日 NanoBot 项目呈现**高度活跃**状态，社区与开发者在安全性和功能增强方面互动频繁。过去 24 小时内共有 42 个 PR 更新和 25 个 Issue 更新，其中已关闭 18 个 Issue，表明维护团队处理积压问题的效率极高。**安全性**是今日的绝对主题，多名安全研究员提交了关于 `exec` 工具白名单绕过和 MCP 配置作用域逃逸的漏洞报告，且大部分已得到修复或已有 PR 在审。此外，关于项目定位（"轻量级"）的讨论再次引发社区关注，WebUI 与 Agent 稳定性相关的功能性 PR 也在稳步推进。

## 2. 版本发布
今日**无**新版本发布。尽管有大量修复 PR 合并，尚未打包为新版本，建议用户关注主干分支的最新提交以获取关键安全修复。

## 3. 项目进展
今日共有 15 个 PR 合并/关闭，主要围绕**安全性加固**和**Agent 稳定性**展开：

*   **安全性修复 (关键)**：
    *   PR #4524 [CLOSED]: 修复了 MCP `enabledTools` 白名单过滤失效导致资源和提示词暴露的问题，解决了严重的权限逃逸风险。
    *   PR #4099 [CLOSED]: 修复了文件系统工具将 `extra_allowed_dirs` 错误视为可写根目录的问题，加强了文件系统隔离。
*   **Agent 逻辑与工具修复**：
    *   PR #4531, #4532, #4530: 集中修复了流式传输和非流式解析中的边界情况，包括流 ID 冲突、内容块类型校验以及工具调用 ID 去重，显著提升了 Agent 运行时的健壮性。
*   **功能改进**：
    *   PR #4492: 修复了 WebUI 中 Xiaomi MiMo ASR 的转录兼容性问题。

目前仍有 27 个 PR 待合并，其中包括备受期待的 `ask_clarification` 工具 (PR #4527) 和移除误导性 "ultra-lightweight" 描述的文档更新 (PR #4536)，预示着下一阶段将更注重用户体验与透明度。

## 4. 社区热点
今日讨论最热烈的话题集中在项目定义与安全性披露：

1.  **项目定位争议**：Issue #660 指出项目自称 "ultra-lightweight" 但依赖 Node.js 环境，引发用户对项目定义真实性的质疑。该 Issue 已引发 12 条评论讨论，PR #4536 随即提出修改 README 以移除该描述。
2.  **安全漏洞批量披露**：用户 @YLChen-007 集中提交了多个关于 `exec` 工具和 MCP 配置的安全漏洞（如 Issue #4514, #4515, #4519），详细分析了命令执行白名单的多种绕过方式。这些高质量的 Issue 促使维护者快速响应，提交了针对性的修复 PR（如 PR #4526）。

## 5. Bug 与稳定性
今日报告并处理了大量关键 Bug，尤其是安全类问题：

| 严重程度 | Issue/PR | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **Critical** | Issue #2439 | PyPI 包中捆绑的 `litellm_init.pth` 包含恶意数据窃取代码。 | CLOSED |
| **High** | Issue #4521, #4514 | `exec` 工具允许通过链式命令绕过 `allowPatterns` 执行任意 Shell。 | Fix PR #4526 OPEN |
| **High** | Issue #4519 | MCP `enabledTools` 配置无法限制资源和提示词包装器，导致权限逃逸。 | Fix PR #4524 CLOSED |
| **High** | Issue #4518 | Exec 工具默认使用 Login Shell，可能导致从启动文件中重新引入 Secrets。 | Fix PR #4525 OPEN |
| **Medium** | Issue #4511 | Windows 下 Gateway 后台运行模式重启逻辑异常。 | OPEN |
| **Medium** | Issue #4508 | Agent 在遇到模糊需求时缺少主动询问澄清的工具。 | Feature PR #4527 OPEN |

## 6. 功能请求与路线图信号
*   **主动澄清机制**：Issue #4508 提出增加 `ask_clarification` 工具，允许 Agent 在信息不足时主动询问而非盲目猜测。PR #4527 已实现该功能，有望近期合并。
*   **WebUI 移动端体验**：Issue #4479 请求支持 PWA 和侧边栏滑动手势。PR #4494 已提交实现代码，显示项目正向更好的移动端体验演进。
*   **Skill 组织结构优化**：PR #4504 提出支持 Skill 子目录分类，反映出用户配置的 Skill 数量增长带来的管理需求。

## 7. 用户反馈摘要
*   **痛点**：Windows 服务部署体验不佳（Issue #4511, #4513），重启机制存在端口占用或状态不同步问题。
*   **关注点**：用户对安全漏洞极其敏感，尤其是涉及命令执行和文件权限的部分。多名用户参与了安全类 Issue 的验证与讨论。
*   **满意度**：社区对 Bug 的响应速度表示认可，大量安全 Issue 在一天内被 Close 并有对应 Fix PR，显示出维护团队的高效。

## 8. 待处理积压
*   **Issue #660**：关于 "轻量级" 描述的误导性问题虽已提出数月，但今日才出现具体的修复 PR (#4536)，建议维护者尽快合并以消除歧义。
*   **Issue #4242**：关于禁用 Dream 功能后历史记录注入 System Prompt 的问题，虽已关闭，但需确认修复逻辑是否完善，避免上下文污染。
*   **长期未解决**：Issue #1710 关于 Qwen 模型经常无响应的问题虽已关闭，但需留意是否有实质性修复落地。

---
*以上数据来源于 GitHub 项目 NanoBot (HKUDS/nanobot) 截至 2026-06-26 的公开动态。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-26)

## 1. 今日速览
过去 24 小时，Zeroclaw 项目呈现**高活跃度与高维护吞吐量**状态。Issue 活跃度极高（35 条更新，22 条新开，13 条关闭），社区反馈迅速。核心开发重心集中在 **v0.8.2 版本的最终收尾**（版本号 Bump PR 已合并）及 **v0.8.3 的稳定性修复**。安全领域成为焦点，包含一项严重的委托权限绕过漏洞修复及供应链安全 RFC 的深入讨论。PR 积压量较大（46 条待合并），显示代码审查压力增加，但关键 Bug 修复响应迅速。

## 2. 版本发布
**无新版本发布**。
但值得注意的是，PR #8234 (Bump version to v0.8.2) 已关闭（合并），预示 **v0.8.2** 正式发布已进入倒计时阶段。该版本主要包含国际化文档同步及核心组件的稳定性修复。

## 3. 项目进展
今日共有 4 个 PR 合并/关闭，重点推进了以下领域：

*   **版本里程碑推进**：PR #8234 合并了 v0.8.2 的版本号更新与变更日志，标志着 v0.8.2 分支已准备就绪。
*   **关键安全修复**：针对严重的安全漏洞 **Issue #8279**（子代理绕过父级工具白名单），项目组迅速响应并关闭了该 Issue，表明修复代码已合入主分支，修复了 S0 级别的权限控制风险。
*   **多渠道体验优化**：修复了 Telegram 渠道长期存在的媒体组消息分片问题 (**Issue #7873**)，以及 Kimi Code 提供商的 API 地址错误 (**Issue #8154**)。
*   **依赖与构建维护**：PR #8265 补全了 Matrix 房间管理工具的多语言翻译，PR #8236 修复了全特性构建失败的问题。

## 4. 社区热点
今日讨论最活跃的议题集中在**治理架构**与**安全性**：

1.  **Issue #6808 [RFC: Work Lanes, Board Automation]** (11 评论)
    *   **链接**: [zeroclaw-labs/zeroclaw Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
    *   **分析**: 这是一个已被接受的治理层 RFC。社区正热议如何通过自动化看板和标签清理来优化工作流路由，减少维护者的手动管理负担。讨论重点在于实施细节和风险控制。
2.  **Issue #8177 [RFC: Supply chain signing]** (8 评论)
    *   **链接**: [zeroclaw-labs/zeroclaw/issues/8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)
    *   **分析**: 针对 SLSA 来源证明和硬件 PGP 签名的高风险 RFC。讨论反映了项目对供应链安全的高度重视，目前处于 "Blocked" 状态等待维护者深度审查，涉及复杂的 CI/CD 架构调整。
3.  **Issue #6165 [RFC: Lighter ZeroClaw core]** (5 评论)
    *   **链接**: [zeroclaw-labs/zeroclaw/issues/6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)
    *   **分析**: 关于移除代码库中硬编码工具，转向外部 Skill 集成的架构讨论。这符合 "轻内核" 的趋势，社区正在权衡解耦带来的维护成本与灵活性收益。

## 5. Bug 与稳定性
今日报告了多个严重程度较高的 Bug，部分已迅速修复：

*   **[S0 - Critical] 委托权限绕过 (已修复)**
    *   **Issue #8279**: 子代理可调用父级策略禁止的工具，存在严重安全隐患。目前 Issue 已关闭，修复已合入。
    *   **链接**: [zeroclaw-labs/zeroclaw/issues/8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)
*   **[S1 - Workflow Blocked] 原生工具调用 Token 爆炸**
    *   **Issue #8327**: 使用 OpenAI 兼容提供商时，图片数据被作为纯文本发送，导致 Token 消耗剧增。
    *   **进度**: 已有修复 PR #8339，待合并。
    *   **链接**: [zeroclaw-labs/zeroclaw/issues/8327](https://github.com/zeroclaw-labs/zeroclaw/issues/8327)
*   **[S1 - Workflow Blocked] MCP 子进程泄漏**
    *   **Issue #5903**: 守护进程在开启心跳时，每个 tick 会泄漏一个 MCP stdio 子进程，长期运行将产生大量孤儿进程。
    *   **进度**: Issue 状态为 Accepted，暂无修复 PR。
    *   **链接**: [zeroclaw-labs/zeroclaw/issues/5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)
*   **[S1 - Workflow Blocked] Skills 安装路径错误**
    *   **Issue #8334**: `skills install` 命令将数据写入多智能体运行时不加载的目录，导致核心流程不可用。
    *   **链接**: [zeroclaw-labs/zeroclaw/issues/8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334)

## 6. 功能请求与路线图信号
结合 Issue 与 PR 动态，项目正在向以下方向演进：

*   **Web 端全生命周期管理**：PR #8173 正在开发 "应用内升级" 功能，允许用户直接从 Web 仪表板检测、查看 Release Notes 并重启服务，这将极大简化运维流程。
*   **企业级日志审计**：PR #8307 提出增加 "rotating" 日志持久化模式，支持大小/日期/保留期轮转，填补了 `rolling`（丢弃旧日志）和 `full`（无限增长）之间的空白，信号强烈指向企业级运维需求。
*   **渠道会话管理**：PR #8139 引入基于 TTL 的会话自动清理机制，解决僵尸会话导致的无限历史记录增长问题，预计将在 v0.8.x 后期版本落地。

## 7. 用户反馈摘要
从 Issue 评论中提炼出以下痛点：

*   **多模态成本痛点**：用户对 Token 消耗非常敏感（Issue #8327），特别是当 Base64 图片数据被错误计费时，这直接影响部署成本。
*   **Telegram 体验不佳**：Issue #5514 和 #7873 显示，Telegram 作为重要入口，其多媒体消息处理逻辑一直是用户困扰的源头，今日的修复受到了社区关注。
*   **自定义模型接入门槛**：Issue #7439 和 #8219 反映了用户在使用本地模型（如 Groq, VLLM, Kimi）时遇到的配置和兼容性问题，表明 "Bring Your Own Model" 场景仍需更好的错误提示和文档支持。

## 8. 待处理积压
以下重要 Issue 长期未得到有效解决或目前处于阻塞状态，建议维护者优先关注：

*   **Issue #5903 (MCP 进程泄漏)**：高优先级 (P1) Bug，涉及系统稳定性，创建于 4 月，目前仍在活跃但无明确修复方案。
*   **Issue #8177 (供应链安全 RFC)**：高风险、高优先级的架构改进，目前状态为 "Blocked - needs-maintainer-review"，需要核心团队投入精力进行安全评估。
*   **PR #8173 (Web 端升级功能)**：大型功能 PR，涉及 Web、Gateway 等多模块，目前处于 Open 状态，需要集中 Review 以推进发布。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 (2026-06-26)

## 1. 今日速览
Hermes Agent 今日维持高热度开发与社区互动，Issue 活跃度显著（新增/活跃 38 条，关闭 12 条），PR 积压量较大（待合并 47 条），显示项目正处于功能密集迭代期。社区关注点集中在 **多平台适配（Telegram/Feishu/Slack）** 的细节打磨、**上下文压缩与内存管理** 的性能优化，以及 **桌面端稳定性**。虽然今日无新版本发布，但多个高优先级的 Bug 修复（如严重的会话历史泄露）已合入主干，显著提升了系统健壮性。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
尽管今日仅有 3 个 PR 显示为已合并/关闭状态，但多个关键修复已落地，显著解决了稳定性痛点：

*   **关键修复：修复 Web/WeChat 会话历史泄露** ([Issue #49106](https://github.com/NousResearch/hermes-agent/issues/49106) [CLOSED])
    *   解决了不同 Hermes 会话之间历史记录相互污染的严重隐私与数据安全问题，用户需重启应用生效。
*   **关键修复：Discord Gateway 心跳阻塞** ([Issue #52197](https://github.com/NousResearch/hermes-agent/issues/52197) [CLOSED])
    *   修复了跨进程缓存清理持有锁时间过长导致 Event Loop 阻塞、触发 Discord 心跳超时的问题。
*   **安全修复：OpenAI Codex 凭证轮换竞态** ([Issue #48415](https://github.com/NousResearch/hermes-agent/issues/48415) [CLOSED])
    *   修复了多配置文件场景下 refresh_token 轮换覆盖全局配置导致授权失效的竞态条件。
*   **PR 动态：** 大量高价值 PR 处于 Open 状态等待合并，包括 **Feishu 表格渲染** ([PR #27922](https://github.com/NousResearch/hermes-agent/pull/27922))、**Vertex AI 提供商支持** ([PR #8427](https://github.com/NousResearch/hermes-agent/pull/8427)) 及 **多语言支持** ([PR #38846](https://github.com/NousResearch/hermes-agent/pull/38846))。

## 4. 社区热点
今日讨论最热烈的话题集中在性能优化与平台适配体验：

*   **性能优化：工具输出压缩集成** ([Issue #39691](https://github.com/NousResearch/hermes-agent/issues/39691) 👍: 10)
    *   社区热议引入 `headroom-ai` 进行细粒度的工具输出压缩，以替代当前粗粒度的全量上下文压缩，获得高票赞同，反映出用户对 Token 成本和上下文效率的强烈关注。
*   **安全架构：零知识凭证代理** ([Issue #4656](https://github.com/NousResearch/hermes-agent/issues/4656))
    *   关于是否引入独立的凭证代理守护进程以彻底隔离沙箱环境中的密钥进行了深入技术探讨，涉及安全边界与架构复杂度的权衡。
*   **平台适配：Slack Block Kit 支持** ([Issue #8552](https://github.com/NousResearch/hermes-agent/issues/8552) 👍: 9)
    *   用户强烈要求放弃 Legacy `mrkdwn` 格式，转用 Block Kit 以支持表格等富文本，提升 Slack 中的阅读体验。

## 5. Bug 与稳定性
今日报告了多处影响体验的 Bug，部分已产生修复方案：

*   **[P1] 紧急：Dashboard 聊天功能崩溃** ([Issue #36658](https://github.com/NousResearch/hermes-agent/issues/36658))
    *   更新后 Dashboard 出现 React Error #301，导致聊天功能不可用。
    *   *状态：Open，暂无关联修复 PR。*
*   **[P2] 严重：Gateway 内存丢失** ([Issue #51646](https://github.com/NousResearch/hermes-agent/issues/51646))
    *   `hermes_state.py` 插入消息时遗漏 `active` 列，导致网关加载会话历史为空，Agent 无上下文。
    *   *状态：Open，暂无关联修复 PR。*
*   **[P2] 体验：Telegram 打字指示器卡死** ([Issue #28004](https://github.com/NousResearch/hermes-agent/issues/28004))
    *   存在竞态条件导致 "typing..." 状态无限期停留。
    *   *状态：Open。*
*   **[P2] 已有修复 PR：Windows 安装失败** ([Issue #46260](https://github.com/NousResearch/hermes-agent/issues/46260))
    *   Windows 10 桌面端安装程序在 npm install 阶段报错退出。
    *   *状态：Open，已有相关修复 PR 待合并。*

## 6. 功能请求与路线图信号
结合 Issue 与 PR，以下功能极有可能在近期落地：

*   **国际化 (i18n) 支持：** 桌面端多语言支持已提交 PR ([PR #38846](https://github.com/NousResearch/hermes-agent/pull/38846))，且有用户专门请求中文支持 ([Issue #52825](https://github.com/NousResearch/hermes-agent/issues/52825))，预计很快合入。
*   **Telegram 富文本支持：** 针对 Telegram Bot API 10.1 的适配 Issue ([Issue #44428](https://github.com/NousResearch/hermes-agent/issues/44428)) 显示了支持富媒体消息的需求，社区反馈积极。
*   **TUI 状态增强：** 用户希望在终端界面实时显示 Cron 调度状态 ([Issue #52815](https://github.com/NousResearch/hermes-agent/issues/52815))，已有对应 PR ([PR #52822](https://github.com/NousResearch/hermes-agent/pull/52822)) 提交，落地概率大。
*   **上下文优化：** 针对 `AGENTS.md` 占用过大 Token 的问题 ([Issue #52821](https://github.com/NousResearch/hermes-agent/issues/52821))，可能会促使项目优化系统提示词加载策略。

## 7. 用户反馈摘要
*   **桌面端体验：** Windows 用户面临安装失败和安装后控制台闪烁 ([Issue #46260](https://github.com/NousResearch/hermes-agent/issues/46260), [Issue #52832](https://github.com/NousResearch/hermes-agent/issues/52832))，WSL 用户遇到剪贴板粘贴图片失败问题，需针对性优化。
*   **平台适配痛点：** Feishu、Slack、Telegram 用户均对消息渲染质量（表格、Markdown）有高要求，当前转换逻辑存在降级或格式丢失问题。
*   **性能焦虑：** 用户对 70k 字符的 Agent 说明文档占用 Token 表示担忧，并积极寻求更优的上下文压缩方案。

## 8. 待处理积压
*   **长期 Issue 关注：**
    *   [Issue #38240](https://github.com/NousResearch/hermes-agent/issues/38240) (Skills Index 过期)：自动化监控持续报警，需关注索引构建流程的稳定性。
    *   [Issue #4656](https://github.com/NousResearch/hermes-agent/issues/4656) (凭证代理)：高价值安全架构讨论，长期未决，建议维护者尽快给出方向性意见。
*   **重要 PR 待合并：**
    *   [PR #27922](https://github.com/NousResearch/hermes-agent/pull/27922) (Feishu 表格修复)：已开启近 40 天，解决长期痛点，建议加速 Review。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-26)

## 1. 今日速览
PicoClaw 项目今日保持高度活跃，维持了稳健的开发节奏。过去24小时内，项目共处理了 19 个 PR（其中 6 个已合并/关闭）和 3 个 Issue（2 个已关闭），显示出维护者对社区反馈的快速响应能力。重点修复了 Evolution 模式下的 Token 无谓消耗问题，并合并了多项涉及错误处理和稳定性的代码改进。依赖项进行了大规模更新，特别是 GitHub Copilot SDK 的升级，表明项目正在积极跟进上游生态。目前无新版本发布，代码库处于持续优化阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 6 个 PR 被合并或关闭，显著提升了系统的稳定性与资源利用效率：

*   **资源消耗修复**：PR #3169 已合并，修复了开启 Evolution 模式后在心跳检测中持续消耗 Token 的问题，这对于长期运行的 Agent 实例至关重要。
    *   链接：[sipeed/picoclaw PR #3169](https://github.com/sipeed/picoclaw/pull/3169)
*   **构建与日志修复**：PR #3166 修复了 `openai_compat` 包中的构建失败问题（未定义 log），PR #3168 改进了模型错误响应的读取处理，增强了 Provider 层的健壮性。
    *   链接：[sipeed/picoclaw PR #3166](https://github.com/sipeed/picoclaw/pull/3166)
    *   链接：[sipeed/picoclaw PR #3168](https://github.com/sipeed/picoclaw/pull/3168)
*   **Matrix 协议适配**：PR #3045 已关闭，修复了 Matrix 用户 ID 格式解析错误导致消息被静默拒绝的问题。
    *   链接：[sipeed/picoclaw PR #3045](https://github.com/sipeed/picoclaw/pull/3045)
*   **依赖升级**：PR #3145 已关闭（被更新版本的 PR #3177 取代），正在将 `github.com/github/copilot-sdk/go` 从 0.2.0 升级至 1.0.4，这是一次跨越式的大版本升级。

## 4. 社区热点
今日讨论最活跃的 Issue 主要集中在功能请求和特定场景下的 Bug 修复：

*   **Issue #1757** (评论 10 条)：关于定时任务导致 Channel 错误的 Bug。该 Issue 涉及 Cron 场景，且用户在 Raspberry Pi Zero W 这种低性能设备上运行，引发了较多关于稳定性和资源占用的讨论。现已关闭。
    *   链接：[sipeed/picoclaw Issue #1757](https://github.com/sipeed/picoclaw/issues/1757)
*   **Issue #3088** (点赞 2 个)：关于替换核心加密库 `libolm` 为 `vodozemac` 的功能请求。鉴于 `libolm` 已不再维护且存在安全隐患，社区对该功能的呼声较高，被标记为 `priority: high` 和 `help wanted`，是值得关注的路线图信号。
    *   链接：[sipeed/picoclaw Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)

## 5. Bug 与稳定性
今日修复和暴露的问题主要集中在资源泄露和异常处理上：

*   **已修复 - 严重 (Token 消耗)**：Issue #3012 报告了 Evolution 模式开启后每分钟持续消耗 Token 的问题。PR #3169 已合并修复，通过跳过心跳检测的冷路径调度解决了这一痛点。
    *   链接：[sipeed/picoclaw Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)
*   **待合并修复 - 资源泄露**：PR #3170 提出修复 Agent 在 Base64 编码时 `io.Copy` 错误路径下的资源泄露问题。
    *   链接：[sipeed/picoclaw PR #3170](https://github.com/sipeed/picoclaw/pull/3170)
*   **待合并修复 - 潜在崩溃**：PR #3171 修复了 LINE Channel 中 `sync.Map` 类型断言可能引发的 Panic。
    *   链接：[sipeed/picoclaw PR #3171](https://github.com/sipeed/picoclaw/pull/3171)
*   **待合并修复 - 消息重复**：PR #3142 修复了 Spawn 子 Agent 完成时可能导致的重复消息推送问题。
    *   链接：[sipeed/picoclaw PR #3142](https://github.com/sipeed/picoclaw/pull/3142)

## 6. 功能请求与路线图信号
*   **安全性升级信号**：Issue #3088 建议使用 `vodozemac` 替换已停止维护的 `libolm`。这是 Matrix 协议端到端加密的重要更新，维护者已标记为高优先级，这极有可能成为下一阶段安全重构的重点。
*   **通信渠道扩展**：PR #3063 正在添加 Delta Chat 网关，这将进一步扩展 PicoClaw 作为个人 AI 助手的接入平台。
    *   链接：[sipeed/picoclaw PR #3063](https://github.com/sipeed/picoclaw/pull/3063)
*   **远程控制模式**：PR #3118 添加了远程 Pico WebSocket 模式，预示着项目正在增强分布式部署或远程控制能力。
    *   链接：[sipeed/picoclaw PR #3118](https://github.com/sipeed/picoclaw/pull/3118)

## 7. 用户反馈摘要
*   **边缘设备部署需求**：从 Issue #1757 可以看出，部分用户尝试在 Raspberry Pi Zero W (Raspbian 11) 等资源受限设备上运行 PicoClaw，这对项目的资源开销和兼容性提出了挑战。
*   **成本控制敏感**：Issue #3012 关于 Evolution 模式下的 Token 消耗问题表明，用户对运行成本非常敏感，期望 Agent 在空闲或心跳阶段不产生额外 API 调用费用。
*   **数据损坏担忧**：PR #3115 提及的修复反映了用户担心工具输出的 base64 数据可能污染会话历史，影响上下文理解，显示出用户对数据一致性的高要求。

## 8. 待处理积压
*   **Issue #3088 (高优先级)**：关于 `vodozemac` 替换 `libolm` 的功能请求。该 Issue 创建于 6 月 9 日，虽标记为高优，但目前仍处于 Open 状态。鉴于其涉及安全核心组件，建议维护者尽快排期或邀请社区贡献者协助。
    *   链接：[sipeed/picoclaw Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)
*   **PR #3063 (新功能)**：Delta Chat 网关的 PR 自 6 月 8 日开启至今未合并，积压时间较长，建议维护者关注审核进度。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-26)

## 1. 今日速览
NanoClaw 项目今日保持极高的开发活跃度，虽然仅有 1 个新 Issue 产生，但 PR 端表现强劲，共有 16 个更新，其中 11 个已合并/关闭。项目重点正在从核心功能开发转向**稳定性增强、安全性修复与运维体验优化**。今日合并的代码显著提升了 Slack 集成体验、容器资源管理能力及系统安全性，同时针对 v1 到 v2 的迁移路径进行了关键修复。整体项目健康度良好，社区贡献活跃，修复了多个影响生产环境的关键 Bug。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 11 个 PR 被合并或关闭，项目在功能完善与系统健壮性上取得了实质性进展：

*   **Slack 集成重构与优化**：合并了 [PR #2472](https://github.com/nanocoai/nanoclaw/pull/2472) 和 [PR #2471](https://github.com/nanocoai/nanoclaw/pull/2471)，彻底解决了 Slack DM（直接消息）在 `per-thread` 模式下会话混乱的问题。现在顶级 DM 会独立成为会话，机器人回复也能正确进入线程，极大改善了 Slack 平台的用户体验。
*   **安全性与沙箱机制加固**：[PR #2817](https://github.com/nanocoai/nanoclaw/pull/2817) 合并，修复了 `send_file` 读取路径的安全漏洞，通过规范化路径验证防止符号链接逃逸，确保文件操作严格限制在 `/workspace` 内。
*   **运维与资源管理增强**：[PR #2856](https://github.com/nanocoai/nanoclaw/pull/2856) 新增了容器级 CPU/内存限制配置，防止单个 Agent 耗尽宿主机资源，这对于多租户或多 Agent 并行场景至关重要。此外，[PR #2830](https://github.com/nanocoai/nanoclaw/pull/2830) 修复了卸载后残留服务注册导致的系统垃圾启动问题。
*   **交互体验优化**：[PR #2832](https://github.com/nanocoai/nanoclaw/pull/2832) 引入了“拒绝并说明原因”的功能，使 Agent 能够理解被拒绝的具体理由而非仅仅收到一个拒绝信号。
*   **认证机制升级**：[PR #2855](https://github.com/nanocoai/nanoclaw/pull/2855) 重构了认证逻辑，确立了“订阅(OAuth)优先，API Key 热备”的高可用策略。

## 4. 社区热点
今日社区最值得关注的讨论是新开启的 [Issue #2857](https://github.com/nanocoai/nanoclaw/issues/2857)。

*   **链接**：[nanocoai/nanoclaw Issue #2857](https://github.com/nanocoai/nanoclaw/issues/2857)
*   **核心诉求**：用户 @sirpy 指出当前的审批流程存在单点故障风险。目前审批请求仅发送给单一管理员，若该管理员不可用，流程即阻塞。
*   **分析**：用户建议支持多管理员轮询或指定管理员，并允许通过 CLI 进行本地紧急审批。这反映了 NanoClaw 正从个人实验性工具向团队生产环境转型，用户对**高可用性**和**运维灵活性**有了更高要求。

## 5. Bug 与稳定性
今日修复了多个严重程度较高的 Bug，且仍有重要修复待合并：

*   **[严重-已修复]** **v1 到 v2 迁移失败**：[PR #2859](https://github.com/nanocoai/nanoclaw/pull/2859)（待合并）修复了旧版 v1 数据库缺失 `is_main` 列导致迁移崩溃的问题。此问题会导致升级失败，影响面广。
*   **[高危-待合并]** **敏感信息泄露风险**：[PR #2860](https://github.com/nanocoai/nanoclaw/pull/2860) 提出修复 `libsignal` 依赖在日志中打印 Session 密钥材料的问题，属于严重的安全隐患，需尽快合并。
*   **[中等-已修复]** **macOS 容器连接失败**：[PR #2854](https://github.com/nanocoai/nanoclaw/pull/2854) 修复了 macOS 上因 TMPDIR 路径问题导致容器无法挂载网关 CA 证书的问题，解决了 macOS 用户的连接阻断。
*   **[低危-已修复]** **Socket 响应截断**：[PR #2813](https://github.com/nanocoai/nanoclaw/pull/2813) 修正了按字节计数而非字符计数处理响应上限的逻辑，避免了多字节字符（如中文）被异常截断。

## 6. 功能请求与路线图信号
*   **多管理员审批流程**：结合 [Issue #2857](https://github.com/nanocoai/nanoclaw/issues/2857) 的请求与今日合并的“拒绝原因”功能 ([PR #2832](https://github.com/nanocoai/nanoclaw/pull/2832))，可以看出项目正在构建一套完善的**人机协作审批工作流**。预计下一版本将重点支持多管理员策略和 CLI 审批接口。
*   **AI 技能自我进化**：今日合并的 [PR #2843](https://github.com/nanocoai/nanoclaw/pull/2843) 增加了 `/learn` 技能，允许 Agent 从任何来源提炼可复用技能。这标志着 NanoClaw 正在赋予 Agent **自我编程/自我扩展**的能力，是极具前瞻性的路线图信号。
*   **基础设施增强**：[PR #2856](https://github.com/nanocoai/nanoclaw/pull/2856) 引入的资源限制表明项目正在为更重型的多 Agent 负载场景做准备。

## 7. 用户反馈摘要
从 Issues 和 PR 描述中提炼出以下痛点：
*   **升级路径脆弱**：用户在从较早的 v1 版本升级到 v2 时遭遇数据库结构不兼容问题 ([PR #2859](https://github.com/nanocoai/nanoclaw/pull/2859))，反映了迁移脚本对旧版本兼容性测试不足。
*   **跨平台兼容性痛点**：macOS 用户在使用 Rancher Desktop 等工具时遇到证书挂载问题 ([PR #2854](https://github.com/nanocoai/nanoclaw/pull/2854))，表明项目在不同操作系统环境下的容器化适配仍有优化空间。
*   **安全顾虑**：开发者注意到了依赖库日志打印密钥材料的问题 ([PR #2860](https://github.com/nanocoai/nanoclaw/pull/2860))，显示出核心贡献者对安全细节的高度敏感。

## 8. 待处理积压
*   **[关键 PR]** [PR #2859](https://github.com/nanocoai/nanoclaw/pull/2859)：修复迁移数据库崩溃问题。建议维护者优先合并，以免阻碍用户升级。
*   **[关键 PR]** [PR #2860](https://github.com/nanocoai/nanoclaw/pull/2860)：涉及密钥泄露风险的安全修复，建议尽快审查并合并。
*   **[活跃 Issue]** [Issue #2857](https://github.com/nanocoai/nanoclaw/issues/2857)：关于多管理员审批的架构改进建议，需要维护者确认实施方向。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是 **IronClaw** 项目 2026-06-26 的动态日报。

---

### 1. 今日速览

IronClaw 项目今日保持极高的开发活跃度，Issues 与 PR 更新量均达到 50 条，显示出团队正在密集推进 "Reborn" 架构的迭代。核心重点集中在**记忆系统的重构**、**多用户权限体系的搭建**以及**UI 交互体验的打磨**。虽然无新版本发布，但多个关键修复 PR 已提交等待合并，项目整体处于从基础设施重构向功能完善过渡的阶段。Dogfooding（内部测试）活动持续进行，发现了大量 UI 层面的问题并迅速得到修复。

### 2. 版本发布

今日无新版本发布。

### 3. 项目进展

今日项目在核心功能与稳定性修复方面取得了显著进展，主要体现在以下几个方面：

*   **核心架构重构**：
    *   **记忆系统落地**：PR [#5205](https://github.com/nearai/ironclaw/pull/5205) 提交了将 Memory 建模为用户态扩展的实现，这是 Issue #3537 的核心部分，引入了原生存储支持与新的 Manifest 架构。
    *   **多用户权限基础**：PR [#5288](https://github.com/nearai/ironclaw/pull/5288) 与 [#5286](https://github.com/nearai/ironclaw/pull/5286) 正在搭建基于数据库的策略存储与本地多用户认证体系，为后续的企业级权限管理打下基础。
    *   **Trace Commons 集成**：PR [#5280](https://github.com/nearai/ironclaw/pull/5280) 引入了全实例范围的追踪注册与用户画像功能。

*   **稳定性与性能修复**：
    *   **修复无限挂起**：PR [#5250](https://github.com/nearai/ironclaw/pull/5250) 解决了运行状态等待逻辑中的缺陷，修复了 Agent 永久挂起的问题。
    *   **事件日志性能**：PR [#5257](https://github.com/nearai/ironclaw/pull/5257) 通过批量写入优化了事件日志追加性能，解决了高频写入瓶颈。
    *   **并发锁优化**：PR [#5234](https://github.com/nearai/ironclaw/pull/5234) 移除了文件系统更新中的每记录锁机制，解决了高并发下的性能阻滞。

*   **已合并的修复**：
    *   PR [#5278](https://github.com/nearai/ironclaw/pull/5278) 修复了日志页面无法滚动的问题。
    *   PR [#5255](https://github.com/nearai/ironclaw/pull/5255) 优化了文件系统 CAS 写入逻辑，将 3 次往返压缩为 1 次。

### 4. 社区热点

今日社区讨论与反馈主要集中在 **Dogfooding（内部测试）** 的体验反馈上，交互逻辑的缺失与错误是关注焦点：

*   **Dogfooding 追踪 ([#5119](https://github.com/nearai/ironclaw/issue/5119))**：这是今日的核心反馈池，聚合了 Reborn WebUI 在本地使用中的各类问题，涉及启动、配置及首次运行体验。
*   **自动化流程故障 ([#5276](https://github.com/nearai/ironclaw/issue/5276))**：有用户报告定时自动化任务失败，错误提示 "No thread attached"，导致 0% 成功率，引发了对调度与线程绑定机制的关注。
*   **工具权限交互问题 ([#5192](https://github.com/nearai/ironclaw/issue/5192))**：用户指出在拒绝工具授权后，系统仍可能重复请求授权，显示出权限状态机存在逻辑漏洞。
*   **UI 交互痛点**：Issues 如 [#5282](https://github.com/nearai/ironclaw/issue/5282)（运行时 Composer 区域出现日志入口）和 [#5211](https://github.com/nearai/ironclaw/issue/5211)（消息无法自动滚动）均反映了当前 WebUI 在用户体验细节上仍有较大提升空间。

### 5. Bug 与稳定性

今日报告的 Bug 数量较多，主要集中在 UI 交互与权限持久化，部分已有修复方案：

*   **严重**：
    *   [OPEN] [#5276](https://github.com/nearai/ironclaw/issue/5276)：计划任务启动失败，无线程绑定，导致任务完全不可用。
    *   [OPEN] [#5289](https://github.com/nearai/ironclaw/issue/5289)：工作流因 `builtin.json` 无效输入失败时，报错信息被隐藏，用户仅看到通用的 "driver protocol error"。

*   **中等**：
    *   [OPEN] [#5283](https://github.com/nearai/ironclaw/issue/5283)："Approve & always allow" 操作未能持久化权限设置，导致后续仍需重复审批。
    *   [OPEN] [#5196](https://github.com/nearai/ironclaw/issue/5196)："Ask each time" 权限模式可能导致授权错误并触发重复的审批流程。
    *   [FIX PR] PR [#5250](https://github.com/nearai/ironclaw/pull/5250) 修复了 Run 状态挂起导致的永久阻塞问题。

*   **低 (UI/UX)**：
    *   [OPEN] [#5282](https://github.com/nearai/ironclaw/issue/5282)：Agent 运行时，Composer 输入框内异常显示 "Logs" 入口。
    *   [FIX PR] PR [#5284](https://github.com/nearai/ironclaw/pull/5284) 正在修复将日志链接移出 Composer 区域的问题。
    *   [CLOSED] Issue [#5211](https://github.com/nearai/ironclaw/issue/5211) 与 [#5208](https://github.com/nearai/ironclaw/issue/5208) 报告的消息不自动滚动及输入框冻结问题已得到处理。

### 6. 功能请求与路线图信号

今日的功能开发信号非常强烈，主要集中在**个人记忆系统**与**多租户权限模型**：

*   **个人记忆与自学习**：Issue [#5260](https://github.com/nearai/ironclaw/issue/5260) 作为 North-star 追踪项，明确了 IronClaw 将具备自我管理、过期清理的记忆系统。相关的 PR [#5205](https://github.com/nearai/ironclaw/pull/5205) 已提交，预计下个版本将包含此核心功能。
*   **多用户权限体系**：Issue [#5261](https://github.com/nearai/ironclaw/issue/5261) 提出 Admin 共享工具与技能的需求，引发了系列 PR 如 #5286 (多用户本地认证) 和 #5288 (策略存储)。这标志着 IronClaw 正从单用户工具向多用户协作平台演进。
*   **自动化引导**：Issue [#4980](https://github.com/nearai/ironclaw/issue/4980) 指出当前 Automations 页面在空状态时缺乏引导，用户不知道如何创建自动化。这暗示未来版本可能会增加可视化的创建按钮或向导。

### 7. 用户反馈摘要

从 Dogfooding 及 Issue 评论中提炼的用户痛点如下：

*   **权限管理混乱**：用户对 "Ask each time"、"Always allow" 以及 Global 设置之间的交互感到困惑，且发现设置经常无法持久化（如 [#5243](https://github.com/nearai/ironclaw/issue/5243), [#5283](https://github.com/nearai/ironclaw/issue/5283)）。
*   **调试信息不透明**：当自动化或工作流失败时，前端往往只展示通用错误，难以排查根因（如 [#5276](https://github.com/nearai/ironclaw/issue/5276), [#5289](https://github.com/nearai/ironclaw/issue/5289)）。
*   **UI 细节体验差**：包括消息不自动滚动、输入框冻结、日志入口遮挡输入框等问题，严重影响了日常使用的流畅度。
*   **积极信号**：社区对 Reborn 架构的期待较高，尤其是 Memory 系统的落地，被认为是迈向个性化 AI 助手的关键一步。

### 8. 待处理积压

*   **大型 PR 待合并**：PR [#5205](https://github.com/nearai/ironclaw/pull/5205) (Memory 系统) 和 PR [#5280](https://github.com/nearai/ironclaw/pull/5280) (Trace Commons) 均为 XL 尺寸变更，目前处于 Open 状态，需要重点 Review 以确保合并质量。
*   **未响应的重要 Issue**：Issue [#5276](https://github.com/nearai/ironclaw/issue/5276) 关于自动化完全失败的问题，目前尚无关联 PR 或 Assignee，建议维护者尽快排查，这直接影响核心功能的可用性。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-26)

## 1. 今日速览
LobsterAI 项目今日在代码提交层面表现活跃，呈现"重研发、轻交互"的态势。过去 24 小时内，项目成功关闭了 **8 个 Pull Requests**，主要集中在修复多智能体协作底层逻辑与扩展框架稳定性。尽管没有发布新的版本，但高频的代码合并表明项目正处于密集的缺陷修复与架构优化阶段。相比之下，社区互动略显冷清，仅有一个历史遗留的 Bug Issue 出现活跃迹象。整体来看，项目核心功能正在向更健壮的多模型适配方向演进。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 8 个 PR 被关闭，主要围绕 **OpenClaw 扩展框架** 和 **Cowork 协作模式** 进行了深度修复，显著提升了系统的稳定性与兼容性。

*   **多模型协作适配优化**
    *   [PR #2204](netease-youdao/LobsterAI PR #2204): 修复了 GLM 模型在计划模式下的解析问题，优先识别块级标签，避免标签泄露到消息中，优化了多模型适配体验。
    *   [PR #2200](netease-youdao/LobsterAI PR #2200): 解决了 Qwen 模型在计划模式下因流抖动导致消息重复显示的问题，提升了特定模型响应的稳定性。

*   **OpenClaw 扩展架构加固**
    *   [PR #2203](netease-youdao/LobsterAI PR #2203): 修复了本地扩展条目的预编译加载问题，确保运行时能正确重写打包入口。
    *   [PR #2202](netease-youdao/LobsterAI PR #2202): 将捆绑的浏览器插件加入白名单，确保在严格限制策略下浏览器控制功能仍可用。
    *   [PR #2201](netease-youdao/LobsterAI PR #2201): 优化历史同步逻辑，复用助手片段，避免 GLM 模型出现重复回复，并修复了思考块重复的问题。

*   **系统交互与状态管理**
    *   [PR #2199](netease-youdao/LobsterAI PR #2199): 修复了父会话完成后子代理停止轮询的问题，增加了 5 分钟的轮询窗口期，确保子任务状态能被正确更新。
    *   [PR #2206](netease-youdao/LobsterAI PR #2206): 修复了“开机启动”设置与操作系统状态不同步的问题，增加了 Windows 历史参数清理与失败提示。
    *   [PR #2205](netease-youdao/LobsterAI PR #2205): 更新了计划模式图标，优化了视觉体验。

## 4. 社区热点
今日社区讨论主要集中在以下历史遗留问题，新开话题较少：

*   **[Issue #1392](netease-youdao/LobsterAI Issue #1392) - 定时任务开关失效**
    *   **状态**: [OPEN] [stale]
    *   **热度**: 近期活跃（更新于 2026-06-25）。
    *   **分析**: 该问题涉及 UI 交互层面的具体 Bug（部分定时任务开关无法点击）。虽然该 Issue 创建于两个月前且被打上 `stale` 标签，但用户近期的再次反馈表明该问题仍未得到有效解决，属于影响用户体验的具体痛点。

## 5. Bug 与稳定性
今日报告及修复的 Bug 主要集中在系统底层与多模型交互，暂无严重的崩溃报告，但存在功能性阻塞。

*   **【中等】UI 交互阻塞**
    *   [Issue #1392](netease-youdao/LobsterAI Issue #1392): 部分定时任务开关点击无反应，导致用户无法关闭任务。目前暂无关联的 Fix PR，且 Issue 处于 Stale 状态，需维护者关注。

*   **【已修复】多模型流式响应抖动**
    *   [PR #2200](netease-youdao/LobsterAI PR #2200): 修复了 Qwen 模型响应抖动导致的计划消息重复问题。
    *   [PR #2204](netease-youdao/LobsterAI PR #2204): 修复了 GLM 模型计划模式标签解析错误。

*   **【已修复】多智能体状态同步丢失**
    *   [PR #2199](netease-youdao/LobsterAI PR #2199): 修复了子代理在父任务结束后状态未更新的 Bug，防止任务假死。

## 6. 功能请求与路线图信号
*   **插件化生态增强**: 今日关于 OpenClaw 的 3 个 PR (#2201, #2202, #2203) 显示，项目正在积极构建更标准化的插件预编译与加载机制。这暗示 LobsterAI 可能正在为未来的第三方插件生态或更复杂的本地工具链集成做准备。
*   **多模型深度适配**: 针对 GLM 和 Qwen 模型的专门修复表明，项目路线图正致力于消除不同 LLM 后端在流式输出和标签处理上的差异，致力于提供统一的高质量体验。

## 7. 用户反馈摘要
*   **痛点**: 定时任务功能的 UI 响应问题（[Issue #1392](netease-youdao/LobsterAI Issue #1392)）是当前用户反馈最明确的痛点，用户指出虽然大部分功能正常，但特定场景下的“点不动”严重影响了操作流程。
*   **场景**: 用户主要使用定时任务功能进行自动化工作流配置，对开关状态的视觉反馈和交互灵敏度有较高要求。

## 8. 待处理积压
*   **[Issue #1392](netease-youdao/LobsterAI Issue #1392)**: 该 Issue 创建于 2026-04-03，至今未关闭且处于 Stale 状态。鉴于用户在过去 24 小时内再次活跃（更新评论），建议维护者重新评估该 Bug 的优先级，排查是否为前端事件绑定或样式遮挡导致的问题。

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

# CoPaw 项目日报 - 2026-06-26

## 1. 今日速览
CoPaw 项目今日保持高活跃度，社区互动频繁，共处理 **26 条 Issue 更新**（11 条已关闭）和 **50 条 PR 更新**（20 条已合并/关闭）。尽管无新版本发布，但开发重心明显集中在**修复模型兼容性**（如 GLM、MiniMax、自定义 OpenAI 提供商）和**提升前端稳定性**（如 Markdown 渲染、大文件加载）上。核心贡献者正在积极处理 Runtime 2.0 迁移后的回归问题，并推进 Windows 桌面自动化等新功能的落地。整体来看，项目处于快速迭代修整期，健康度良好。

## 2. 版本发布
*   **无新版本发布**。虽然合并了大量修复 PR，但今日未观察到新的 Tag 或 Release。

## 3. 项目进展
今日共有 20 个 PR 合并或关闭，主要集中在 Bug 修复与架构优化，显著提升了系统稳定性：

*   **前端体验修复**：合并了 [PR #5538](https://github.com/agentscope-ai/QwenPaw/pull/5538)，修复了 Console 长消息 Markdown 排版错乱的问题，提升了聊天界面的可读性。
*   **模型兼容性增强**：合并了 [PR #5496](https://github.com/agentscope-ai/QwenPaw/pull/5496)，解决了 GLM-5.x 模型在 OpenCode Go 套餐下的 Schema 转换失败问题；合并 [PR #5457](https://github.com/agentscope-ai/QwenPaw/pull/5457) 对 `send_file_to_user` 的文件大小进行了限制。
*   **架构重构**：合并了 [PR #5540](https://github.com/agentscope-ai/QwenPaw/pull/5540)，重构了自动记忆系统，将追踪机制从 `reply_id` 改为基于用户轮次的标记，优化了上下文管理逻辑。
*   **新功能推进**：[PR #5187](https://github.com/agentscope-ai/QwenPaw/pull/5187)（Windows 桌面 GUI 自动化）和 [PR #5525](https://github.com/agentscope-ai/QwenPaw/pull/5525)（Windows 原生沙箱）仍在审阅中，显示项目正在加强 Windows 平台的原生支持。

## 4. 社区热点
以下 Issue 引发了较多讨论，反映了用户的核心诉求：

*   **[Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) [CLOSED]**: **自定义 OpenAI 兼容提供商不支持 Function Calling**。
    *   *热度*：8 条评论。
    *   *分析*：用户期望通过自定义接口接入 OMLX 等提供商时能复用 Function Calling 能力。该问题的修复将极大扩展 CoPaw 对非官方模型生态的兼容性。
*   **[Issue #5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) [OPEN]**: **Windows 安装启动报错 Internal Server Error**。
    *   *热度*：6 条评论。
    *   *分析*：这是一个典型的环境配置问题，涉及 `get_remote_addr` 错误。这表明 Windows 本地部署的用户群体较大，且可能在网络配置或环境依赖上存在痛点。
*   **[Issue #5480](https://github.com/agentscope-ai/QwenPaw/issues/5480) [CLOSED]**: **Console 长消息排版错乱**。
    *   *热度*：5 条评论。
    *   *分析*：CSS 渲染问题直接影响用户体验，此类视觉层面的 Bug 往往是用户最直观的不满来源，目前已通过 PR #5538 修复。

## 5. Bug 与稳定性
今日报告的关键 Bug 按严重程度排序如下：

### 🔴 严重
*   **[Issue #5379](https://github.com/agentscope-ai/QwenPaw/issues/5379)**: Windows 环境启动即崩溃，报错 `Internal Server Error`。**暂无关联 Fix PR**，需优先关注。
*   **[Issue #5479](https://github.com/agentscope-ai/QwenPaw/issues/5479)**: 前端无法渲染超过 500KB 的大会话文件，导致页面崩溃。**暂无关联 Fix PR**，影响重度用户。
*   **[Issue #5520](https://github.com/agentscope-ai/QwenPaw/issues/5520)**: `browser_use` 进程残留导致内存泄漏，疑似 Issue #2733 的回归。

### 🟠 中等
*   **[Issue #5505](https://github.com/agentscope-ai/QwenPaw/issues/5505)**: MiniMax-M3 模型因图片审核错误被错误缓存为 `rejects_media=True`，导致后续视觉功能失效。**暂无关联 Fix PR**。
*   **[Issue #5543](https://github.com/agentscope-ai/QwenPaw/issues/5543)**: Function Declaration 中 `type: null` 导致第三方中转 API 报错。**已有 Fix PR #5545** 待合并。
*   **[Issue #5523](https://github.com/agentscope-ai/QwenPaw/issues/5523)**: Runtime 2.0 工具注册表丢失 `spawn_subagent` 功能，影响多智能体编排。

## 6. 功能请求与路线图信号
*   **动态模型切换**：[Issue #5527](https://github.com/agentscope-ai/QwenPaw/issues/5527) 呼吁支持 AgentScope 2.0 的模型动态切换，以解决模型限流导致任务中断的问题。这符合高可用架构趋势。
*   **工具结果大小限制**：[Issue #5342](https://github.com/agentscope-ai/QwenPaw/issues/5342) 建议在执行层硬性限制工具返回内容大小，作为防止上下文爆炸的深度防御手段。社区对此有明确需求。
*   **Windows 原生支持**：结合 PR #5187 和 PR #5525，项目正在补齐 Windows 平台的原生 GUI 自动化与沙箱能力，这可能是下一个版本的亮点。

## 7. 用户反馈摘要
*   **痛点**：
    *   **Windows 兼容性**：多位用户反馈 Windows 平台启动失败、文件路径 404（Issue #5508）及进程残留问题。
    *   **前端性能**：大会话文件加载崩溃（Issue #5479）反映出前端在处理长上下文时的性能瓶颈。
    *   **模型生态兼容**：自定义 Provider 的 Function Calling 支持不完善，以及特定模型（GLM, MiniMax）的适配 Bug 较多。
*   **满意点**：社区对 Bug 的响应速度较快，如排版错乱（#5480）和 GLM 报错（#5472）均在短时间内提供了修复方案。

## 8. 待处理积压
*   **[Issue #5162](https://github.com/agentscope-ai/QwenPaw/issues/5162)**: **对话思考逻辑死循环**。该问题自 6 月 12 日创建以来一直未解决，今日仍有活跃更新，严重影响 Agent 的任务完成率，建议核心开发者优先排查。
*   **[Issue #5523](https://github.com/agentscope-ai/QwenPaw/issues/5523)**: Runtime 2.0 缺失 `spawn_subagent` 功能，属于功能回归，阻碍了多智能体场景的使用。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-06-26)

**项目地址**：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. 今日速览
EasyClaw 项目今日在社区互动层面表现静默，无新增 Issues 或 Pull Requests，但在代码发布端呈现高频维护态势。过去 24 小时内，维护者连续发布了 **v1.8.45** 和 **v1.8.46** 两个版本，显示出项目正处于快速修复关键回归问题的周期中。整体来看，项目当前处于“强维护、弱互动”的状态，核心聚焦于解决 v1.8.44 引入的稳定性问题及插件兼容性。

### 2. 版本发布
今日连续发布两个补丁版本，主要针对 v1.8.44 版本引入的严重回归问题进行修复：

*   **v1.8.46: RivonClaw v1.8.46** [查看 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.46)
    *   **更新重点**：恢复飞书官方插件加载机制，确保桌面端客服渠道的稳定启动。
    *   **技术细节**：修复了启动时的插件配置补齐逻辑，并清理了过时的内置 OpenClaw 插件路径。此更新解决了特定平台下的渠道通信中断问题。

*   **v1.8.45: RivonClaw v1.8.45** [查看 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.45)
    *   **更新重点**：修复 macOS 平台的启动崩溃问题。
    *   **破坏性变更/回归修复**：针对 macOS 1.8.44 版本中因缺失内置 Node 模块导致的启动崩溃进行了修复，恢复了运行时依赖打包。此为关键的稳定性修复。

### 3. 项目进展
今日无公开合并或关闭的 Pull Requests。项目进展主要体现为维护者直接提交并发布的两个版本。从版本日志推断，项目已成功修复了 macOS 平台的阻断性启动故障以及飞书插件的加载路径问题，项目稳定性在短短一天内得到了显著恢复。

### 4. 社区热点
今日无活跃讨论的 Issues 或 PRs。社区的沉默可能与版本的快速修复有关，用户问题可能通过直接升级得到解决，尚未形成新的讨论沉淀。

### 5. Bug 与稳定性
今日虽无新增 Issue 报告，但根据发布日志反推，以下 Bug 刚刚被修复：

*   **[严重] macOS 启动崩溃 (已修复)**
    *   **描述**：v1.8.44 版本在 macOS 上因缺少内置 Node 模块导致应用启动即崩溃。
    *   **状态**：已在 v1.8.45 中通过恢复运行时依赖打包修复。
*   **[较高] 飞书桌面端客服渠道启动失败 (已修复)**
    *   **描述**：由于官方插件加载失败，导致飞书渠道无法正常建立连接。
    *   **状态**：已在 v1.8.46 中通过恢复插件加载逻辑和清理陈旧路径修复。

### 6. 功能请求与路线图信号
今日无新增功能请求。当前版本迭代完全聚焦于修复现有功能的回归问题，暗示项目近期可能经历了一次较大的底层重构（如依赖管理或插件系统调整），目前尚处于稳固阶段。

### 7. 用户反馈摘要
由于今日无 Issue 评论数据，无法提取直接的用户反馈。但从紧急修复 macOS 崩溃和飞书插件加载问题来看，用户对**桌面端跨平台兼容性**及**主流即时通讯软件（如飞书）的连接稳定性**极其敏感。这两个版本的发布侧面反映了用户对基础可用性的高标准要求。

### 8. 待处理积压
*   **无长期未响应的重要 Issue**：今日数据显示 Issues 更新为 0，暂无明显积压的公开工单。
*   **建议关注**：鉴于今日修复了严重的 macOS 启动崩溃，建议维护者关注后续是否有用户反馈其他平台的潜在副作用，或 v1.8.46 在复杂网络环境下的插件加载稳定性。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*