# OpenClaw 生态日报 2026-05-08

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-08 03:24 UTC

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

# OpenClaw 项目动态日报 (2026-05-08)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，过去 24 小时内 Issues 与 PR 更新总数均达到 500 条，显示出社区与开发团队的高频互动。项目刚刚发布了 **v2026.5.7** 版本，主要针对插件发布流程进行了修复与优化。与此同时，团队正积极处理近期版本（v2026.5.4/5.5）引入的多个回归问题，今日关闭了大量与模型配置、网关稳定性及插件兼容性相关的 Bug。虽然 Issue 解决速度很快，但待合并 PR 数量达到 353 条，可能存在一定的审核积压。

## 2. 版本发布
**新版本：v2026.5.7**
*   **发布时间**：2026-05-07
*   **更新重点**：主要聚焦于发布流程与插件生态的稳定性。
    *   **Fixes**：
        *   修复了 ClawHub CLI 依赖安装时的瞬时失败问题，增加了重试机制。
        *   优化了插件发布流程：当预览检查 单元出现偶发性失败时，不再阻止已通过预览的插件发布。
        *   增强了发布后的版本验证机制，确保维护版本能更快恢复服务，减少发布中断风险。

## 3. 项目进展
今日项目在功能迭代与稳定性修复方面均有显著进展，共关闭 177 个 Issue，合并/关闭 147 个 PR。

**关键修复与改进：**
*   **模型引用配置修复**：针对 [#78407](https://github.com/openclaw/openclaw/issues/78407) 中 `openclaw doctor --fix` 错误重写模型引用导致用户锁定的问题进行了修复。
*   **网关稳定性提升**：解决了 [#78402](https://github.com/openclaw/openclaw/issues/78402) 中因工具调用卡死导致的事件循环饥饿及网关连接频繁关闭（1000/1005/1006 错误）的问题。
*   **插件兼容性**：修复了微信插件在 v2026.5.4 版本中的 API 不兼容问题 ([#78232](https://github.com/openclaw/openclaw/issues/78232))。
*   **Gemini 推理泄露**：解决了 Gemini 模型将内部思维链 作为普通文本输出到 Telegram 等渠道的问题 ([#41494](https://github.com/openclaw/openclaw/issues/41494))。
*   **架构重构**：正在推进 `oc-path` 寻址底层架构 ([PR #78678](https://github.com/openclaw/openclaw/pull/78678)) 和通道入口集中化重构 ([PR #79092](https://github.com/openclaw/openclaw/pull/79092))，旨在提升配置文件的操作性和系统的安全性。

## 4. 社区热点
**最受关注的讨论（按评论数排序）：**

1.  **[OPEN] 预构建 Android APK 请求** ([#9443](https://github.com/openclaw/openclaw/issues/9443))
    *   **评论数**：24
    *   **诉求**：用户强烈希望官方提供预编译的 Android APK，以便直接运行 OpenClaw Android 伴侣应用，目前仅有源码无预编译包。
2.  **[CLOSED] 模型引用重写 Bug** ([#78407](https://github.com/openclaw/openclaw/issues/78407))
    *   **评论数**：16
    *   **热点原因**：这是一个严重影响使用的回归 Bug，`doctor --fix` 会错误地修改 `openai-codex/*` 配置，导致 ChatGPT-OAuth 用户无法登录，引发了用户对自动化迁移工具可靠性的担忧。
3.  **[Meta] 功能请求合集** ([#65824](https://github.com/openclaw/openclaw/issues/65824))
    *   **评论数**：15
    *   **内容**：资深用户 @smonett 提交的一份详尽的功能审计清单，涵盖了日常使用中的 11 个平台痛点，受到社区高度关注。
4.  **[OPEN] Slack Block Kit 支持** ([#12602](https://github.com/openclaw/openclaw/issues/12602))
    *   **评论数**：13
    *   **诉求**：用户希望 Agent 能在 Slack 中发送富媒体消息，而不仅仅是纯文本 Markdown，以提升 CRM 简报等场景的交互体验。

## 5. Bug 与稳定性
今日报告了多个影响系统稳定性的关键 Bug，部分已有修复方案：

*   **严重 [新 Bug]**：**Google Gemini 模型主会话挂起** ([#78502](https://github.com/openclaw/openclaw/issues/78502))
    *   **现象**：Gemini 3.1 Pro / 2.5 Pro 在主会话中频繁挂起或超时，但在直接 API 调用或子 Agent 中正常。
    *   **状态**：Open，等待定位。
*   **严重 [已修复]**：**网关连接不稳定与事件循环饥饿** ([#78402](https://github.com/openclaw/openclaw/issues/78402))
    *   **现象**：升级后网关无响应，WebSocket 连接频繁断开。
    *   **状态**：已关闭（已修复）。
*   **严重 [已修复]**：**微信插件不兼容** ([#78232](https://github.com/openclaw/openclaw/issues/78232))
    *   **现象**：v2.4.1 插件在 OpenClaw 2026.5.4 上无法处理入站消息。
    *   **状态**：已关闭（已修复）。
*   **中等 [已修复]**：**Mistral Thinking 输出 `[object Object]`** ([#78846](https://github.com/openclaw/openclaw/issues/78846))
    *   **现象**：使用 Mistral 模型时，回复和记忆中充斥大量 `[object Object]` 字符串。
    *   **状态**：已关闭（已修复）。
*   **中等 [OPEN]**：**高 CPU 与 RPC 延迟** ([#76562](https://github.com/openclaw/openclaw/issues/76562))
    *   **现象**：升级后网关 CPU 占用 100%，控制面 RPC 延迟极高。
    *   **状态**：Open，正在调查。

## 6. 功能请求与路线图信号
*   **安全与权限控制**：
    *   用户呼吁增加 **“掩码密钥”** 功能 ([#10659](https://github.com/openclaw/openclaw/issues/10659)），允许 Agent 使用 API Key 但无法查看明文，防止泄露。
    *   关于 **执行审批黑名单** 的需求 ([#6615](https://github.com/openclaw/openclaw/issues/6615)）获得较多支持，希望实现“允许所有命令，除个别危险命令外”的策略。
*   **MCP 与工具调用**：
    *   提出 **MCP 工具调用审批管道** ([#78308](https://github.com/openclaw/openclaw/issues/78308)），希望 MCP 服务器能复用现有的 `/approve` 审批流程，增强对状态变更操作（如发邮件、写库）的控制。
*   **部署与运维**：
    *   用户请求 **AWS 部署指南** ([#13597](https://github.com/openclaw/openclaw/issues/13597)），涵盖 EC2/ECS/Lambda，表明企业级部署需求增加。
    *   **会话快照与恢复** 功能 ([#13700](https://github.com/openclaw/openclaw/issues/13700)）被再次提及，用于长上下文的回滚与测试。

## 7. 用户反馈摘要
*   **升级痛点**：多位用户反馈最近几个版本（2026.5.4 -> 2026.5.5）的升级过程存在兼容性问题，特别是 `doctor --fix` 自动修改配置导致服务不可用，引发了用户对自动化迁移工具的不信任感。
*   **模型支持**：Gemini 和 Codex 的支持目前仍存在细节问题（如 Gemini 挂起、Codex 配置被覆盖），用户对多模型切换的稳定性要求较高。
*   **移动端需求**：Android 端应用的预编译包需求热度不减，说明用户希望在移动端有更便捷的使用体验。
*   **性能瓶颈**：部分重度用户报告了高负载下的 CPU 飙升和连接断开问题，表明系统在处理密集任务时仍有优化空间。

## 8. 待处理积压
*   **PR 审核积压**：目前有 **353 个 PR 处于待合并状态**。其中包含多个重要的重构 PR（如 `oc-path` 寻址 [#78678](https://github.com/openclaw/openclaw/pull/78678) 和通道入口重构 [#79092](https://github.com/openclaw/openclaw/pull/79092)），建议维护者优先关注审查，以避免功能分支过期。
*   **长期未解决 Issue**：
    *   **Discord 图片存储为 Base64** ([#1210](https://github.com/openclaw/openclaw/issues/1210)）：导致上下文溢出，该问题自 1 月提出至今未有根本性解决。
    *   **Feishu 插件权限过宽** ([#13751](https://github.com/openclaw/openclaw/issues/13751)）：因需要读取通讯录权限导致企业部署困难，长期未解决。

---

## 横向生态对比

# 2026-05-08 AI 智能体与个人助手开源生态横向分析报告

## 1. 生态全景
当前 AI 智能体生态正处于从"功能堆砌"向"稳定性与架构重构"转型的关键期。头部项目（OpenClaw, Hermes, IronClaw）纷纷致力于底层架构改造与核心 Bug 修复，以应对日益复杂的多模型与工具调用场景。多模态能力（语音、图像）与多端适配（Desktop、Mobile）已成为标配，而商业化落地（电商工作流、Token 成本监控）与隐私安全（沙箱、本地推理）成为新的竞争高地。

## 2. 各项目活跃度对比

| 项目名称 | Issue 更新数 | PR 更新数 | 今日发布版本 | 核心动态 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 | ~500 | v2026.5.7 | 插件发布流程修复，大量回归问题处理，PR 积压严重 (353) | ⭐⭐⭐⭐ (高活跃，需关注积压) |
| **Hermes Agent** | ~50 | ~50 | v0.13.0 | 发布重大里程碑版本，修复 282 个 Issue，架构重构 | ⭐⭐⭐⭐⭐ (极高质量迭代) |
| **IronClaw** | ~22 | ~50 | v0.28.0 | "Reborn"架构落地，WASM 支持，持久化存储重构 | ⭐⭐⭐⭐ (架构升级期) |
| **LobsterAI** | N/A | 39 | v2026.5.7 | 高强度迭代，分页机制落地，新手引导上线 | ⭐⭐⭐⭐ (快速功能交付) |
| **NanoClaw** | 9 | 35 | 无 | A2A 路由修复，pnpm v11 构建修复，主分支构建受阻 | ⭐⭐⭐ (开发活跃，CI 不稳定) |
| **CoPaw** | 50 | 32 | 无 | Windows 打包修复，微信渠道优化，社区讨论热烈 | ⭐⭐⭐⭐ (响应迅速) |
| **Moltis** | 4 | 9 | 2个 (04/05) | 身份验证协议升级，多模态支持增强 | ⭐⭐⭐⭐⭐ (高效敏捷) |
| **Zeroclaw** | 50 | 50 | 无 (受阻) | v0.7.5 发布阻塞，Desktop 端突破，WhatsApp 失效 | ⭐⭐⭐ (存在关键阻塞) |
| **PicoClaw** | ~35 | ~29 | Nightly | Go 安全升级，多账号支持落地，清理积压高效 | ⭐⭐⭐⭐ (维护健康) |
| **NanoBot** | 8 | 23 | 无 | 内存与状态管理修复，流式传输优化 | ⭐⭐⭐⭐ (稳健维护) |
| **NullClaw** | 5 | 9 | 无 | 原生 ACP 协议支持，文档完善 | ⭐⭐⭐ (基建完善中) |
| **EasyClaw** | 0 | 0 (私下合并) | v1.8.11/12 | 电商工作流落地，社区静默 | ⭐⭐ (开发主导，社区沉寂) |
| **TinyClaw** | 0 | 0 | 无 | 无活动 | ⭐ (休眠) |
| **ZeptoClaw** | 0 | 0 | 无 | 无活动 | ⭐ (休眠) |

## 3. OpenClaw 在生态中的定位
**定位：生态枢纽与行业标准制定者**
*   **优势**：OpenClaw 拥有生态中最高的社区互动量（Issues/PR 更新均达 500 条），表明其作为行业参照系的地位稳固。其插件生态与网关架构最为成熟，且具备极强的多模型适配能力（Gemini, Codex 等）。
*   **技术路线差异**：相比于 IronClaw 追求极致的 WASM 模块化架构，OpenClaw 更侧重于**插件流程的稳定性**与**网关高并发处理**。相比于 Hermes Agent 的全栈性能优化，OpenClaw 更强调作为"中枢"连接不同渠道（微信、Telegram、Slack）的能力。
*   **隐忧**：待合并 PR 高达 353 条，远超其他项目，显示出审核资源瓶颈。近期版本（v2026.5.4/5.5/5.7）频发的模型配置回归问题，反映出在快速迭代中自动化测试覆盖的不足。

## 4. 共同关注的技术方向

1.  **稳定性与容错机制**
    *   **现象**：多个项目集中修复了连接稳定性与重试机制。
    *   **具体诉求**：
        *   OpenClaw 解决网关连接频繁关闭（1000/1005/1006）问题。
        *   PicoClaw 社区呼吁增加 LLM 调用失败的重试机制。
        *   Hermes Agent 修复了 Approval Gate 死锁和多平台 WebSocket 连锁断连。
    *   **趋势**：随着 Agent 任务复杂度提升，"一次性成功"已无法满足需求，高可用的容错架构成为刚需。

2.  **移动端与桌面端体验**
    *   **现象**：脱离纯 Web/CLI 模式，向 OS 原生体验迁移。
    *   **具体诉求**：
        *   OpenClaw 用户强烈请求预构建 Android APK。
        *   Zeroclaw 在 Desktop (Tauri) 端取得权限管理突破。
        *   EasyClaw 优化 Windows 安装包与本地 CLI 启动。
        *   LobsterAI 引入新手引导，降低上手门槛。

3.  **模型兼容性与推理透明化**
    *   **现象**：对新模型特性的支持速度是竞争关键。
    *   **具体诉求**：
        *   OpenClaw, Hermes, CoPaw 均涉及 DeepSeek / Gemini 的思维链 解析问题。
        *   IronClaw 提出持久化并可视化 LLM 推理过程。
        *   NanoBot 增加了向后端发送自定义 LLM 参数的能力。

## 5. 差异化定位分析

*   **OpenClaw (连接中枢)**：核心在于"广度"。致力于连接一切模型与一切渠道，适合作为企业级 Agent 中台底座。
*   **Hermes Agent (性能怪兽)**：核心在于"深度"。极高的代码提交量与性能优化（并发工具调用），适合对执行效率与稳定性要求极高的极客与重度用户。
*   **IronClaw (架构先锋)**：核心在于"底层"。WASM 与 Reborn 架构探索，适合关注 Agent 运行时安全与可扩展性的开发者。
*   **Moltis (隐私卫士)**：核心在于"去中心化"。Ed25519 身份协议与本地推理优先，适合注重隐私与自建服务的高级用户。
*   **LobsterAI / EasyClaw (应用落地)**：核心在于"体验"。关注分页加载、新手引导、电商工作流，直接面向 C 端用户与特定商业场景。
*   **PicoClaw / CoPaw (敏捷助手)**：核心在于"响应"。快速修复安全漏洞与 Bug，关注多账号管理与特定渠道（微信/飞书）的优化，适合中小团队快速部署。

## 6. 社区热度与成熟度

*   **第一梯队 (成熟期/活跃期)**：OpenClaw, Hermes Agent, IronClaw。特征：Issue/PR 数量级大，社区讨论深入架构层面，有明确的版本规划与里程碑。但也面临代码债务（OpenClaw 的 PR 积压）或架构切换阵痛。
*   **第二梯队 (快速迭代期)**：LobsterAI, CoPaw, PicoClaw, Zeroclaw。特征：近期发布频率高，功能迭代快，社区反馈集中于具体功能与 Bug，响应速度快，但仍有明显短板（如 Zeroclaw 的构建阻塞）。
*   **第三梯队 (探索期/维护期)**：Moltis, NanoBot, NullClaw, NanoClaw, EasyClaw。特征：关注特定技术点（如协议支持、特定工作流），社区规模相对较小，维护者主导明显，处于功能验证或垂直场景深耕阶段。
*   **沉寂期**：TinyClaw, ZeptoClaw。24小时内无明显活动。

## 7. 值得关注的趋势信号

1.  **回归质量而非数量**：Hermes Agent 的 v0.13.0 版本以修复 282 个 Issue 为荣，OpenClaw 频繁修复回归 Bug。这标志着行业共识：**Agent 的自主性必须建立在稳固的确定性之上**。
2.  **身份与权限安全成为新焦点**：Moltis 引入 Ed25519 TOFU，OpenClaw 讨论掩码密钥与执行黑名单，PicoClaw 升级 Go 版本修复漏洞。随着 Agent 权限增大（发邮件、操作数据库），安全沙箱与权限管控将成为下一阶段的核心卖点。
3.  **商业化与变现尝试**：EasyClaw 的电商中继流、LobsterAI 的 Token 成本监控 UI。开源项目开始从"玩具"向"生产力工具"演进，主动探索商业化落地路径。
4.  **本地化与去网关化**：NullClaw 的 ACP 协议、Zeroclaw 的 Desktop 离线体验。用户对云端网关的不稳定性与隐私顾虑，正推动计算向本地端侧迁移，"Local First" 架构或将回潮。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-08)

## 1. 今日速览
NanoBot 项目今日保持了较高的维护活跃度， Issues 关闭率高达 **75%**（关闭 6/新增 2），显示出维护团队对社区反馈的快速响应能力。Pull Requests 方面更新频繁，共有 23 条动态，其中合并/关闭了 7 条，主要集中在**内存管理重构、连接稳定性修复及代码质量提升**。虽然今日无新版本发布，但多个核心功能的修复 PR 已合并，预示着下个版本的稳定性将显著增强。整体来看，项目处于健康的迭代维护期。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 **7 条 PR 合并或关闭**，重点解决了流式传输、内存状态恢复及代码规范问题：

*   **流式传输修复**：PR #3677 [CLOSED] 修复了 HTTP 压缩缓冲导致 SSE 流式响应失效的问题，移除了 `enable_compression`，恢复了实时数据推送体验。
*   **内存与状态管理**：PR #3660 [CLOSED] 修复了 Dream 模块在恢复内存时游标状态丢失的问题，确保回滚操作的完整性。
*   **LLM 参数支持**：PR #1835 [CLOSED] 终于合并，该 PR 历时两个月，增加了向后端 LLM 发送自定义参数的能力（如 Ollama 的 `stream: false`），增强了模型兼容性。
*   **代码质量提升**：PR #3672 [CLOSED] 和 #3678 [CLOSED] 分别启用了完整的 Ruff F 规则检查和规范化了日志异常记录，显著提升了代码库的可维护性和错误追踪能力。

## 4. 社区热点
今日社区关注点主要集中在**个性化配置**与**功能可控性**：

*   **Issue #3650 [OPEN] - 配置机器人名称与图标**：作者 @mraad 提出希望能自定义 Agent 模式下的显示名称和图标（替代默认的 "nanobot" 和猫图标）。这反映了用户在多场景部署下对品牌定制化的强烈需求。
    *   链接: [HKUDS/nanobot Issue #3650](https://github.com/HKUDS/nanobot/issues/3650)
*   **Issue #3652 [OPEN] - 禁用 Dream 功能**：作者 @skyline75489 询问能否通过配置文件完全禁用 Dream 功能。这表明部分用户希望对资源占用或后台行为有更精细的控制权。
    *   链接: [HKUDS/nanobot Issue #3652](https://github.com/HKUDS/nanobot/issues/3652)
*   **PR #3684 [OPEN] - 微信通道静默丢消息修复**：该 PR 修复了微信通道在异常、Token 过期等情况下的消息丢失问题，获得了较高的关注度，涉及核心的消息可靠性。
    *   链接: [HKUDS/nanobot PR #3684](https://github.com/HKUDS/nanobot/pull/3684)

## 5. Bug 与稳定性
今日报告并处理的 Bug 主要集中在连接与特定模型适配：

*   **WebSocket 连接故障 [已处理]**：
    *   Issue #3682 和 #3683 报告了 WebSocket 握手失败及跨平台访问报错问题。目前这两个 Issue 均已关闭，推测已在相关提交中修复或提供了配置指导。
    *   链接: [Issue #3682](https://github.com/HKUDS/nanobot/issues/3682), [Issue #3683](https://github.com/HKUDS/nanobot/issues/3683)
*   **DeepSeek V4 推理模式错误 [已处理]**：
    *   Issue #3665 报告使用 deepseek-v4-flash 时，因 `reasoning_content` 未正确回传 API 导致报错。该 Issue 已关闭，可能已通过提示词或参数调整解决。
    *   链接: [HKUDS/nanobot Issue #3665](https://github.com/HKUDS/nanobot/issues/3665)
*   **LLM 调用超时 [已处理]**：
    *   Issue #3681 报告 LLM 调用频繁出现 300s 超时。该 Issue 已关闭，可能与网络环境或提供商限制有关。
    *   链接: [HKUDS/nanobot Issue #3681](https://github.com/HKUDS/nanobot/issues/3681)
*   **待修复 PR**：
    *   PR #3680 [OPEN] 提出修复会话文件损坏导致 `last_consolidated` 越界的问题，防止历史记录丢失。
    *   链接: [HKUDS/nanobot PR #3680](https://github.com/HKUDS/nanobot/pull/3680)

## 6. 功能请求与路线图信号
结合 Issues 与活跃 PR，以下功能点极有可能在近期版本中落地：

*   **语音转录增强**：PR #3513 [OPEN] 正在统一转录提供商并支持本地 Whisper，这是一个高价值功能，将降低用户使用成本。
    *   链接: [HKUDS/nanobot PR #3513](https://github.com/HKUDS/nanobot/pull/3513)
*   **微信通道健壮性**：PR #3684 针对微信通道的静默消息丢失修复，一旦合并将显著提升国内用户体验。
*   **会话归档与记忆优化**：PR #3686 和 #3685 正在重构归档逻辑和 `_last_summary` 持久化机制，解决了长期记忆被意外覆盖或重启丢失的痛点。
*   **Reasoning 内容可视化**：PR #3655 提议在流式输出中展示模型的思考过程（Reasoning Content），契合 DeepSeek 等思维链模型的使用趋势。

## 7. 用户反馈摘要
*   **痛点**：用户对 WebSocket 的连接稳定性抱怨较多（Issue #3682, #3683），这可能与反向代理配置或库版本有关。此外，DeepSeek 等新模型对 API 参数的特殊要求（如 reasoning_content）导致了不少兼容性问题。
*   **场景**：用户倾向于将 NanoBot 部署为具体的“Agent”（如 "mybot"），因此对 UI 元素（名称、Logo）的定制化有明确需求。
*   **满意度**：尽管存在 Bug，但大部分 Issue 能在 24 小时内得到响应或关闭，显示出项目维护团队具有较高的专业度和响应速度，社区对修复速度表示认可。

## 8. 待处理积压
*   **PR #1219 [OPEN] (创建于 2026-02-26)**：关于股票市场分析等技能增强的 PR 已停滞超过两个月，建议维护者确认是否需要重新激活或关闭。
    *   链接: [HKUDS/nanobot PR #1219](https://github.com/HKUDS/nanobot/pull/1219)
*   **PR #1443 [OPEN] (创建于 2026-03-02)**：关于解耦心跳推理与通知的 PR 同样停滞较久，可能需要重新评估兼容性。
    *   链接: [HKUDS/nanobot PR #1443](https://github.com/HKUDS/nanobot/pull/1443)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-08)

## 1. 今日速览
Zeroclaw 项目今日保持极高的活跃度，Issue 与 PR 更新量均达到 50 条，显示出社区与开发团队紧密的互动节奏。虽然今日无新版本发布，但针对 v0.7.5 版本的发布阻塞问题已有具体的 CI 修复 PR 提交，发布指日可待。核心开发重心集中在 Desktop（Tauri）端的用户体验优化与多通道的稳定性修复上。然而，WhatsApp Web 的协议变更导致的失效问题以及部分 Provider 配置的兼容性 Bug 仍是当前社区关注的痛点。

## 2. 版本发布
**无新版本发布**。
*   **注意**：当前 `master` 分支已指向 v0.7.5，但因 CI 流水线错误导致发布失败。社区已提交 PR [#6502](https://github.com/zeroclaw-labs/zeroclaw/pull/6502) 试图修复构建流程并重新触发发布。

## 3. 项目进展
今日共有 2 个 PR 被关闭（推测已合并或终止），48 个 PR 处于活跃/待合并状态，主要进展如下：

*   **Desktop 端重大突破**：PR [#6506](https://github.com/zeroclaw-labs/zeroclaw/pull/6506)（macOS 首次运行向导与权限同步）与 PR [#6507](https://github.com/zeroclaw-labs/zeroclaw/pull/6507)（截图与 AppleScript 权限）已关闭。这标志着 Desktop 版本在本地化权限管理和引导流程上迈出了关键一步，减少了对 CLI 的依赖。
*   **发布流水线修复**：PR [#6502](https://github.com/zeroclaw-labs/zeroclaw/pull/6502) 解决了 Web 构建中 API 生成模块缺失的问题，这是解除 v0.7.5 发布阻塞的前置条件。
*   **通道与 Provider 增强**：
    *   PR [#6509](https://github.com/zeroclaw-labs/zeroclaw/pull/6509) 新增了对 Matrix 通道的心跳检测支持。
    *   PR [#6521](https://github.com/zeroclaw-labs/zeroclaw/pull/6521) 新增了钉钉作为 Cron 任务的投递通道，适应国内用户生态。
    *   PR [#6513](https://github.com/zeroclaw-labs/zeroclaw/pull/6513) 集成了 Atomic Chat 作为新的本地 Provider 选项。

## 4. 社区热点
今日讨论最热烈的问题集中在架构重构与严重 Bug 修复上：

*   **架构重构争议**：Issue [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)（评论数 8）提出了重构 Provider 架构与 Reqwest 客户端管理的计划。该议题旨在解决代码重复和配置碎片化问题，但因风险高被标记为 `blocked`，引发了核心贡献者对实施路径的深入讨论。
*   **WhatsApp 通道失效**：Issue [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246)（评论数 6）反映了 WhatsApp Web 通道在 4 月底服务器协议升级后停止工作，严重影响依赖该通道的用户，被标记为 P1 优先级。
*   **配置继承问题**：Issue [#6418](https://github.com/zeroclaw-labs/zeroclaw/issues/6418)（评论数 4）指出 Fallback Provider 无法继承主配置的凭证，导致 Failover 机制失效。该问题已被关闭（标记为 duplicate），表明开发团队已知晓并在处理中。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，部分影响严重：

*   **S1 - 工作流阻塞**:
    *   [Issue #6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246): WhatsApp Web 协议变更导致消息收发静默失败。
    *   [Issue #6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434): 在 `autonomy = "full"` 模式下，Shell 工具调用被错误拒绝，导致 Agent 无法执行命令。
    *   [Issue #6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399): 自定义远程 Provider 发送本地图片路径而非 Data URL，导致多模态请求在远程节点（如 RTX 5090 服务器）上失败。
    *   [Issue #6377](https://github.com/zeroclaw-labs/zeroclaw/issues/6377): Llama.cpp Provider 默认配置导致工具调用时报 500 错误。
    *   [Issue #6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410): Google Workspace 工具在 Windows 上因 CMD 调用方式失效。

*   **S2 - 运行时错误/降级**:
    *   [Issue #6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472): Gateway 使用 Postgres 时 Panic（Cannot start a runtime from within a runtime）。
    *   [Issue #6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431): SQLite 并发启动时 Schema 初始化失败（已有修复 PR [#6432](https://github.com/zeroclaw-labs/zeroclaw/pull/6432)）。

*   **Fix PR 动态**:
    *   PR [#6519](https://github.com/zeroclaw-labs/zeroclaw/pull/6519) 修复了 Gemini CLI Provider 的参数传递问题，解决了 Issue [#6520](https://github.com/zeroclaw-labs/zeroclaw/issues/6520) 中的崩溃。

## 6. 功能请求与路线图信号
*   **Web 端交互增强**：Issue [#6522](https://github.com/zeroclaw-labs/zeroclaw/issues/6522) 请求在 Web Chat 中增加工具审批 UI，以配合后端的监督模式。这是提升 Web 端安全控制体验的重要一环。
*   **Desktop 离线体验**：Issue [#6465](https://github.com/zeroclaw-labs/zeroclaw/issues/6465) 提议将 Chat-UI 打包进 Desktop 二进制文件，摆脱启动时对远程 Gateway 的强依赖。这呼应了近期 Desktop 端“去 CLI 化”的趋势。
*   **Cron 任务降噪**：Issue [#6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510) 建议为 Cron 任务增加仅发送最终结果的选项，避免中间推理过程刷屏。

## 7. 用户反馈摘要
*   **部署体验**：Docker 用户反馈文档中安装命令有误，导致新手部署困难（Issue [#6393](https://github.com/zeroclaw-labs/zeroclaw/issues/6393)）。
*   **模型兼容性**：使用本地模型（Llama.cpp, vLLM）的用户频繁遇到配置兼容性问题和工具调用失败（Issues [#6377](https://github.com/zeroclaw-labs/zeroclaw/issues/6377), [#6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474)），显示出 Zeroclaw 在适配开源/本地模型生态时仍需打磨细节。
*   **安全与控制**：用户对沙箱权限控制（Issue [#6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516)）和 Failover 时的凭证传递（Issue [#6418](https://github.com/zeroclaw-labs/zeroclaw/issues/6418)）表现出较高的敏感度，期望系统能“开箱即用”且“故障无感”。

## 8. 待处理积压
*   **高风险重构**：Issue [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)（Provider 架构重构）目前处于 `blocked` 状态，需尽快解除阻塞，否则后续代码债务将加重。
*   **大型 PR 待合并**：PR [#4944](https://github.com/zeroclaw-labs/zeroclaw/pull/4944) 涉及工具包装器的迁移重构，自 3 月底开启至今未合并，建议维护者Review 并推进。
*   **Windows 兼容性**：Issue [#6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410) 涉及 Windows 平台下的工具调用失败，需特别关注跨平台兼容性测试。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-08)

## 1. 今日速览
Hermes Agent 今日迎来了重大里程碑版本 **v0.13.0 "The Tenacity Release"**，该版本累计合并了 588 个 PR，修复了 282 个 Issue，显示出项目极高的迭代速度与代码质量管控能力。社区活跃度持续高涨，过去 24 小时内 Issues 交互量达 50 条，PR 更新量同样达 50 条，其中待合并 PR 数量（45 条）反映出社区贡献者正积极跟进新版本的适配工作。整体来看，项目处于健康且高速发展的阶段，但在多平台网关连接稳定性及配置系统方面仍存在待解决的痛点。

## 2. 版本发布
**新版本：v2026.5.7 - Hermes Agent v0.13.0 (The Tenacity Release)**
- **发布日期**：2026-05-07
- **规模**：自 v0.12.0 以来，包含 864 commits，合并 588 个 PR，变更文件 829 个，新增代码 128,366 行。
- **核心亮点**：
  - **稳定性飞跃**：关闭了 13 个 P0 级和 36 个 P1 级严重故障，标志着 "Tenacity（坚韧）" 主题的落地，显著增强了系统的抗压能力。
  - **社区贡献**：共有 295 位贡献者参与，社区协作规模庞大。
- **注意**：鉴于涉及大量底层变更（尤其是涉及 Kanban 迁移和 MCP 工具响应处理），建议用户在升级前备份数据，特别是 SQLite 数据库，以防迁移脚本异常。

## 3. 项目进展
尽管刚刚发布大版本，今日的开发重心已转向 v0.13.x 的后续修复与新特性开发，共有 5 个 PR 合并或关闭，另有大量 PR 处于活跃审查中：
- **关键合并/关闭**：
  - PR #21646 [CLOSED]: 修复了 TUI bundle artifact 识别问题，确保 Dashboard 正确检测当前构建版本。
  - Issues #12343 - #12350 系列 [CLOSED]: **Brain 控制平面**相关功能开发完成，实现了事件持久化、模式聚合、规则候选生命周期管理等核心机制，为多智能体循环提供了机器可读视图。
- **活跃推进中**：
  - PR #21638：正在审查中，旨在将 Agent 单轮对话中的多个工具调用从串行改为并发执行（`asyncio.gather`），预计将大幅提升 I/O 密集型任务的执行效率。
  - PR #21631：强化 Windows 平台的原生 CLI/TUI 依赖引导，解决跨平台安装兼容性问题。

## 4. 社区热点
今日社区讨论焦点集中在系统稳定性与配置管理：
- **Issue #7335 [CLOSED]**：关于 "Open Issues 超过 1000 条" 的讨论引发了社区对项目维护负荷的关注。维护者关闭了该 Issue，暗示已有相应的管理策略或治理方案出台。
- **Issue #20842 [CLOSED]**：Kanban 迁移失败导致的 SQLite schema 错误。该问题在更新后立即被修复并关闭，显示了维护团队对升级阻塞问题的快速响应能力。
- **Issue #21498 [OPEN]**：配置文件中的 `max_output_tokens` 被静默丢弃。该问题直接影响了模型输出长度，引发较多开发者讨论，目前尚未有修复 PR 合并。

## 5. Bug 与稳定性
今日报告的 Bug 集中在网关连接、配置解析及平台兼容性上：
- **严重/阻塞 (P1/P2)**：
  - **Issue #16623 [OPEN]**：显式配置的本地 OpenAI 兼容端点被错误重定向回 OpenRouter，导致本地模型调用失败，影响核心路由功能。
  - **Issue #21026 [OPEN]**：多平台（企微/飞书/QQ）WebSocket 共享单一 EventLoop 导致连锁断连，属于架构级隐患。
  - **Issue #21444 [OPEN]**：OpenAI Codex/GPT-5.5 模型调用在特定配置下会静默挂起直至超时（约 300s）。
- **平台特定问题**：
  - **macOS**：
    - Issue #21623：CLI 中输入 `@` 符号会导致 CPU 飙升并卡死。
    - Issue #21596：Telegram Gateway 在 macOS 上因 PID 重用检测失效导致永久启动失败。
- **已有修复方案**：
  - 针对 macOS CLI 卡死问题，已有 PR #21645 提出修复方案，通过跳过对裸 `@` 符号的文件扫描来规避性能问题。

## 6. 功能请求与路线图信号
社区提出了若干增强功能，部分已有对应 PR：
- **多模型路由**：Issue #21637 提议在 Gateway 层面实现按频道绑定特定人格和模型的功能，这对于多租户场景需求强烈。
- **并发执行**：PR #21638 正在推进并发工具调用功能，这可能是下一版本性能提升的关键。
- **Brain 控制平面**：随着 Issue #12343-12350 的关闭，项目已正式具备规则推导与灰度发布能力，标志着 Hermes 从单一 Agent 向具备自我优化能力的智能体框架演进。

## 7. 用户反馈摘要
从 Issue 评论中提炼出以下用户痛点：
- **配置体验不佳**：用户频繁遇到配置项被静默忽略或覆盖的情况（如 #21498, #16623），期望增加配置校验或 Warning 机制。
- **MCP 工具不稳定**：大文件下载超时（#21091）、图片内容丢失（#21559）等问题影响了工具链的可靠性。
- **升级维护成本**：自动更新后的数据库迁移失败（#20842）让用户感到焦虑，希望迁移脚本具备更强的幂等性和回滚机制。

## 8. 待处理积压
以下重要 Issue 或 PR 长期未得到有效解决或响应，建议维护者优先关注：
- **Issue #16623 [P1]**：本地 Provider 路由被强制解析为 OpenRouter 的问题已存在数日，属于核心路由逻辑 Bug，但目前仍未有明确修复进度。
- **Issue #21498 [P2]**：配置静默丢弃问题严重影响用户对配置系统的信任度，急需修复。
- **PR #18131 [P2]**：飞书工具客户端的环境凭证构建修复 PR 已提交一周，目前仍处于 Open 状态，依赖该功能的用户可能受阻。

---
*数据来源：GitHub Hermes Agent Repository (2026-05-08)*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-08)

## 1. 今日速览
PicoClaw 项目今日保持**高活跃度**与**健康的维护节奏**。过去24小时内，项目成功关闭了 22 个 Issue，显著多于新开的 13 个，显示出维护团队在清理积压和解决用户痛点方面的高效执行力。核心进展集中在**安全性修复**（Go 版本升级）、**稳定性增强**（LLM 调用重试机制探讨、Exec 工具安全沙箱）以及**功能完善**（新增 SMTP 频道、模型配置 UI 优化）。今日合并了 29 个 PR，其中包含关键的安全更新与用户体验改进，整体项目健康度呈上升趋势。

## 2. 版本发布
- **nightly: Nightly Build (v0.2.8-nightly.20260508.2834db13)**
  - **类型**: 自动化构建版本
  - **说明**: 这是一个每日构建版本，包含了最新的代码提交。虽然标记为可能不稳定，但它包含了今日修复的 Go 标准库安全漏洞（PR #2818），建议测试用户关注。

## 3. 项目进展
今日合并/关闭的 PR 主要推进了以下关键领域：

- **🛡️ 安全性升级**: 合并了将 Go 版本升级至 1.25.10 的 PR ([#2818](https://github.com/sipeed/picoclaw/pull/2818), [#2821](https://github.com/sipeed/picoclaw/pull/2821))，修复了 `net/http` 等标准库中的 3 个高危漏洞，保障了供应链安全。
- **🛠️ 工具与沙箱修复**:
    - 修复了 `exec` 工具在处理相对脚本路径时的误判问题，改进了沙箱路径扫描逻辑 ([#2814](https://github.com/sipeed/picoclaw/pull/2814))。
    - 解决了子代理工具反馈在同步完成后未正确消失的问题 ([#2822](https://github.com/sipeed/picoclaw/pull/2822))。
- **✨ 用户体验优化**:
    - 新增非破坏性的 `/reset` 命令，允许用户重置会话但保留历史记录（Seahorse），解决了误删历史痛点 ([#2819](https://github.com/sipeed/picoclaw/pull/2819))。
    - Telegram 频道增强了论坛主题上下文保留功能，修复了回复掉线问题 ([#2791](https://github.com/sipeed/picoclaw/pull/2791))。
- **🔄 依赖维护**: 合并了多项前端依赖更新，提升前端稳定性。

## 4. 社区热点
今日社区讨论最热烈的话题集中在**稳定性**与**多账号支持**：

1.  **[OPEN] LLM 调用失败缺乏重试机制** ([#629](https://github.com/sipeed/picoclaw/issues/629))
    - **热度**: 13 评论
    - **分析**: 这是一个 2 月份的老 Issue，用户反馈在长任务中遇到 HTTP 500 错误时任务直接挂起，缺乏自动重试。这反映了生产环境中对**高可用性**和**容错机制**的强烈需求。
2.  **[CLOSED] LLM 账号堆叠功能** ([#2408](https://github.com/sipeed/picoclaw/issues/2408))
    - **热度**: 11 评论
    - **分析**: 该功能请求（API Key 轮换/弹夹机制）已于今日关闭。这标志着项目正式支持多 API Key 负载均衡与限额应对，是**多租户/高频调用场景**下的重大利好。
3.  **[OPEN] OpenAI Responses API 重构** ([#2171](https://github.com/sipeed/picoclaw/issues/2171))
    - **热度**: 10 评论
    - **分析**: 技术深度较高的讨论，建议将底层 API 调用迁移至 OpenAI 最新的 Responses API，涉及核心架构调整，值得关注后续进展。

## 5. Bug 与稳定性
今日修复了多个影响使用的 Bug，未发现严重的新回归问题：

- **🔴 高危 - 标准库漏洞**: Go 1.25.9 版本存在 net/http 安全漏洞，已通过 PR [#2818](https://github.com/sipeed/picoclaw/pull/2818) 升级至 1.25.10 修复。
- **🟠 中危 - Exec 工具误拦截**: Issue [#1042](https://github.com/sipeed/picoclaw/issues/1042) 指出安全守卫对非路径命令（如 `curl`）的误判。PR [#2814](https://github.com/sipeed/picoclaw/pull/2814) 已提交修复，正待合并。
- **🟠 中危 - Windows 路径兼容性**: Issue [#2472](https://github.com/sipeed/picoclaw/issues/2472) 报告 `list_dir` 在 Windows 上因路径分隔符失败，现已修复并关闭。
- **🟡 低危 - 历史记录显示**: Issue [#2796](https://github.com/sipeed/picoclaw/issues/2796) 反映历史对话中只能看到最后一条消息，涉及消息压缩与展示逻辑，正在处理中。

## 6. 功能请求与路线图信号
- **模型配置工作流改进**: PR [#2752](https://github.com/sipeed/picoclaw/pull/2752) 正在进行中，旨在优化 Web UI 的模型配置体验，引入连通性测试。这表明项目正在降低用户的配置门槛。
- **通用附件支持**: Issue [#348](https://github.com/sipeed/picoclaw/issues/348) (高优先级) 持续受到关注，请求支持跨频道的文件、文档、媒体处理能力，是通往多模态 AI 助手的关键一步。
- **多飞书应用支持**: Issue [#2493](https://github.com/sipeed/picoclaw/issues/2493) 建议支持配置多个飞书应用实例，反映了用户在**多环境/多租户**场景下的需求。

## 7. 用户反馈摘要
- **痛点**: 用户在使用 `exec` 工具执行复杂命令时经常触发安全拦截（#1042），体验较为受挫；LLM 调用的稳定性（重试机制）仍是生产环境的主要顾虑（#629）。
- **场景**: 用户广泛使用 PicoClaw 进行周期性任务（Cron）并希望将结果通过邮件发送（#2465 已支持）；在 Telegram/Discord 等群组中使用时，对消息上下文和归属性识别有较高要求（#2702）。
- **认可**: 对于 API Key 堆叠功能（#2408）的关闭表示欢迎，认为这极大缓解了限流焦虑。

## 8. 待处理积压
- **Issue #629 (LLM 调用失败重试)**: 自 2 月提出至今未解决，且评论活跃，建议维护者优先关注或给出临时解决方案，这对 AI Agent 的自主性至关重要。
- **Issue #1042 (Exec Guard 过严)**: 虽已有 PR [#2814](https://github.com/sipeed/picoclaw/pull/2814) 修复，但尚未合并，需尽快合并以解决用户在工具执行层面的阻塞问题。
- **Issue #348 (通用附件支持)**: 标记为高优先级，目前尚未有明确进展，建议纳入近期迭代规划。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-08)

## 1. 今日速览
NanoClaw 项目今日呈现出极高的开发活跃度，共有 35 个 PR 更新和 9 个 Issue 更新，显示出社区与核心团队正在密集推进功能迭代与缺陷修复。过去 24 小时内，项目成功合并了 23 个 PR，主要集中在修复 Agent-to-Agent (A2A) 路由逻辑、解决 pnpm v11 构建故障以及丰富技能生态。尽管主分支目前存在 TypeScript 构建错误（已有待合并 PR 修复），但整体项目健康度良好，开发者对多通道场景下的稳定性问题响应迅速。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **23 个 PR 被合并**，显著提升了系统的稳定性与扩展性，主要集中在以下三个方向：

*   **关键路由逻辑修复**：合并了 [PR #2002](qwibitai/nanoclaw PR #2002) 和 [PR #2267](qwibitai/nanoclaw PR #2267)，彻底重构了 Agent-to-Agent (A2A) 的回复路由机制，解决了多会话场景下消息错发的严重问题。此外，[PR #2328](qwibitai/nanoclaw PR #2328) 修复了多目标组的默认回复目标，[PR #2277](qwibitai/nanoclaw PR #2277) 修正了查询中途路由上下文刷新的问题。
*   **构建与依赖修复**：针对 pnpm v11 导致的容器构建失败，项目迅速响应，合并了 [PR #2336](qwibitai/nanoclaw PR #2336) 和 [PR #2335](qwibitai/nanoclaw PR #2335)，修复了原生二进制文件丢失的问题，保障了开发环境的可用性。
*   **功能增强与技能扩展**：新增了 [PR #2319](qwibitai/nanoclaw PR #2319) AWS CLI 技能、[PR #2318](qwibitai/nanoclaw PR #2318) 记忆技能，优化了安装流程的退出体验 ([PR #2324](qwibitai/nanoclaw PR #2324), [PR #2316](qwibitai/nanoclaw PR #2316))，并修复了 SDK 压缩后上下文丢失的问题 ([PR #2327](qwibitai/nanoclaw PR #2327))。

## 4. 社区热点
今日社区讨论主要集中在以下高关注度话题：

*   **多租户凭证管理**：[Issue #869](qwibitai/nanoclaw Issue #869) 提出的“按组凭证管理”需求持续受到关注。当前所有组共享单一凭证的设计限制了多用户场景下的配额与身份隔离，社区期待更细粒度的权限控制。
*   **Web UI 文件上传**：[Issue #2334](qwibitai/nanoclaw Issue #2334) 提议在 Web UI 增加文件附件支持，反映了用户对更丰富交互形式的迫切需求，尤其是处理文档类任务的需求。
*   **安全漏洞披露**：[Issue #2341](qwibitai/nanoclaw Issue #2341) 指出 `/restart` 和 `/build` 命令缺乏所有者权限校验，任意群成员均可重启服务。该 Issue 已被关闭，表明问题可能已通过其他方式处理或确认，但社区对运维安全的敏感度可见一斑。

## 5. Bug 与稳定性
今日报告并处理的 Bug 对系统稳定性影响较大：

*   **[CRITICAL] A2A 消息路由错乱**：[Issue #2331](qwibitai/nanoclaw Issue #2331) 与 [Issue #2332](qwibitai/nanoclaw Issue #2332) 揭示了 `findSessionByAgentGroup` 在多通道环境下会将回复路由至错误的会话。相关修复 PR ([#2002](qwibitai/nanoclaw PR #2002), [#2267](qwibitai/nanoclaw PR #2267)) 已合并，但需关注是否完全覆盖边缘情况。
*   **[HIGH] 主分支构建失败**：[PR #2344](qwibitai/nanoclaw PR #2344) 指出由于类型定义变更未同步更新测试对象，导致 `main` 分支目前无法通过 TypeScript 构建。该 PR 正在等待合并。
*   **[HIGH] 容器启动失败**：pnpm v11 破坏了 `@anthropic-ai/claude-code` 的原生二进制依赖，导致 Agent 启动即报错。修复已通过 [PR #2336](qwibitai/nanoclaw PR #2336) 合并。
*   **[MEDIUM] 监控服务停摆**：[Issue #2342](qwibitai/nanoclaw Issue #2342) 报告连通性监控脚本自 5 月 1 日起已停止运行。Issue 已关闭，推测已修复或重启。

## 6. 功能请求与路线图信号
*   **凭证隔离**：结合 [Issue #869](qwibitai/nanoclaw Issue #869) 的活跃度，支持多凭证或多租户模式极有可能是下一阶段的开发重点。
*   **跨平台技能支持**：[PR #2337](qwibitai/nanoclaw PR #2337) 提议将 Claude Code 技能目录暴露给非 Claude 提供商，标志着项目正朝向“多模型统一接口”的方向演进。
*   **Web 端文件处理**：[Issue #2334](qwibitai/nanoclaw Issue #2334) 的 Web UI 文件上传功能若被采纳，将显著增强 NanoClaw 作为 Web 客户端的可用性。

## 7. 用户反馈摘要
*   **痛点：多通道路由混乱**：用户在多通道（如 Signal + Email）连接同一 Agent 时，经常遭遇消息“消失”或发错地方的情况 ([Issue #2332](qwibitai/nanoclaw Issue #2332))，这对用户体验造成了严重困扰。
*   **痛点：安装流程阻塞**：用户反馈在设置向导中，如果没有 Claude 凭证很难退出流程，[PR #2324](qwibitai/nanoclaw PR #2324) 提供的“稍后连接”选项极大改善了首体验。
*   **满意点：快速修复**：用户对 pnpm v11 导致的构建崩溃反应迅速表示赞赏，相关问题在报告后短时间内即得到修复。

## 8. 待处理积压
*   **[P0] 主分支构建修复**：[PR #2344](qwibitai/nanoclaw PR #2344) 和 [PR #2339](qwibitai/nanoclaw PR #2339) 均在修复 TypeScript 构建错误，建议维护者优先合并以恢复 CI 稳定性。
*   **[P1] 权限校验 PR 待处理**：针对 [Issue #2341](qwibitai/nanoclaw Issue #2341) 的安全风险，目前已有 [Issue #2340](qwibitai/nanoclaw Issue #2340) 开放状态，建议尽快提交并审查相关的权限校验 PR。
*   **[P2] 长期功能需求**：[Issue #869](qwibitai/nanoclaw Issue #869) 关于凭证管理的需求已开放近两个月，建议纳入里程碑规划。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-05-08)

## 1. 今日速览
NullClaw 项目今日保持高度活跃，过去 24 小时内 PR 更新达 9 条，Issue 更新 5 条，显示出强劲的开发势头。项目重点推进了 CI/CD 流程优化与核心协议适配，成功合并了原生 ACP (Agent Client Protocol) 适配器，显著增强了作为 AI 智能体基础设施的互操作性。同时，文档与构建系统的修复降低了新用户的准入门槛。整体来看，项目处于快速迭代期，基础设施日益稳固，社区对新功能（如 Lark 渠道定制）的关注度正在上升。

## 2. 版本发布
无。虽然无正式版本发布，但 PR #899 正在推进 Nightly 预发布版的自动化流程，预示着即将有新的构建产物供测试用户使用。

## 3. 项目进展
今日共有 **5 个 PR 被合并或关闭**，项目在协议支持、错误修复和文档完善方面取得实质性进展：

*   **[合并] 原生 ACP 适配器** ([PR #896](https://github.com/nullclaw/nullclaw/pull/896)):
    新增 `nullclaw acp` 命令，实现了 Agent Client Protocol 的原生 stdio JSON-RPC 适配器。此举意味着 NullClaw 现在能原生支持 ACP 协议的会话管理与消息交互，极大提升了作为 AI 客户端底层的通用性。
*   **[合并] 修复 OpenAI Responses API 兼容性** ([PR #790](https://github.com/nullclaw/nullclaw/pull/790)):
    修复了提供商层在 `api_mode=responses` 模式下的工具模式格式错误及空值处理问题，提升了与 OpenAI 新 API 规范的兼容稳定性。
*   **[合并] 文档增强：Zig 环境配置** ([PR #897](https://github.com/nullclaw/nullclaw/pull/897)):
    针对 Issue #820 的痛点，补充了 Debian 环境下 Zig 的安装指南。这直接降低了开发者的贡献门槛，解决了“环境配置难”的反馈。
*   **[合并] 工具链集成** ([PR #893](https://github.com/nullclaw/nullclaw/pull/893)):
    集成了 `zig-qm-toolkit`，引入了 hooks 和 agents 管理机制，丰富了项目的工具生态。
*   **[关闭] CI 构建** ([PR #898](https://github.com/nullclaw/nullclaw/pull/898)):
    虽已关闭，但结合 #899 的上下文，推测其为 CI 调度的尝试性修复，旨在解决 Nightly 构建的去重问题。

## 4. 社区热点
今日讨论最集中的话题围绕**部署与环境配置**，其次是**功能定制化需求**。

*   **安装痛点讨论** ([Issue #820](https://github.com/nullclaw/nullclaw/issues/820)):
    该 Issue 于今日关闭，累计 5 条评论。用户对是否必须使用 Docker 以及在 Debian 上安装 Zig 感到困惑。这反映出项目技术栈对新手存在一定门槛，文档的及时更新（PR #897）有效化解了这一社区疑虑。
*   **历史遗留问题解决** ([Issue #167](https://github.com/nullclaw/nullclaw/issues/167)):
    关于 `curl` 和 `wget` 命令使用的讨论（评论 10 条，点赞 1）于今日画上句号。该问题的关闭标志着项目对 Shell 命令调用的限制或规范已明确。
*   **飞书 集成需求** ([Issue #894](https://github.com/nullclaw/nullclaw/issues/894), [Issue #895](https://github.com/nullclaw/nullclaw/issues/895)):
    用户 @LiWeny16 连续提出两个针对 Lark 渠道的功能请求，希望机器人在群聊中能“非 @mention 也回复”以及控制“正在输入”的占位符行为。这显示项目在企业级 IM 集成场景下的使用正在深入，用户需要更细粒度的行为控制。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在构建兼容性与文档数据准确性，未发现严重的运行时崩溃问题。

*   **[中等] 构建兼容性问题** ([PR #887](https://github.com/nullclaw/nullclaw/pull/887)):
    社区成员提交了针对 Zig v0.16 版本的构建修复。目前该项目尚未合并，提醒维护者需关注编译器版本升级带来的破坏性变更，这可能影响下游用户的编译体验。
*   **[低] 文档数据陈旧** ([Issue #473](https://github.com/nullclaw/nullclaw/issues/473)):
    用户指出 README 中的 Benchmark 数据（二进制大小、内存占用）已过时。虽非代码 Bug，但可能误导用户对性能的预期。目前 Issue 处于 Open 状态，等待修复。

## 6. 功能请求与路线图信号
从今日的 Issue 和 PR 活动中可以捕捉到明确的路线图信号：

*   **企业级 IM 适配增强**: Issue #894 和 #895 表明用户不仅满足于“能用”，更追求“好用”，特别是在飞书等办公场景下的自动化流程控制。这很可能成为下一阶段开发的重点。
*   **数据治理与安全**: PR #885 提出的“NullClaw Data Governance Layer”正在 Hackathon 活动中推进，暗示项目正从单纯的 AI 客户端向具备数据权限管理的安全平台演进。
*   **任务调度能力**: PR #783 提出的 Cron 子智能体功能仍在待合并状态，显示项目正试图引入定时任务与历史记录功能，补全自动化闭环。

## 7. 用户反馈摘要
*   **痛点**: 环境搭建是最大的拦路虎，特别是 Zig 语言环境的配置让部分 Debian 用户感到棘手。
*   **场景**: 用户正尝试将 NullClaw 接入企业群聊，现有逻辑（仅 @ 回复、强制输入提示）限制了机器人的活跃度和交互体验。
*   **期待**: 用户希望文档中的性能数据能保持真实透明，避免争议。

## 8. 待处理积压
*   **PR #783 (Cron Subagent)**: 已开启一个月，提供任务调度功能，建议维护者优先 Review 或反馈，以免功能分支滞后过久。
*   **PR #887 (Zig v0.16 Fix)**: 解决未来编译器版本的兼容性，属于基础设施维护的关键 PR，建议尽快合并以减少构建失败风险。
*   **Issue #473 (README Update)**: 文档更新请求，虽优先级不高，但建议尽快处理以保持项目专业形象。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-08)

## 1. 今日速览
IronClaw 项目今日活跃度极高，呈现出架构重构与稳定性修复并行的态势。项目发布了 **v0.28.0** 版本，核心聚焦于 "Reborn" 架构集成基板的落地，引入了 Host 基础组件和 WASM 工具链。过去 24 小时内共有 **50 条 PR 更新**（其中 32 条已合并/关闭）和 **22 条 Issues 更新**，显示开发节奏紧凑。社区关注点集中在 Reborn 架构的测试覆盖、持久化存储实现以及 Telegram 等渠道的接入体验优化上。

## 2. 版本发布
### **ironclaw-v0.28.0**
- **发布日期**: 2026-05-07
- **核心变更**: 正式将 `reborn-integration` 基板合入主分支。
- **新增功能**:
  - 引入 Host 基础 Crates，包括 Capability Host、Runtime Dispatcher、进程生命周期管理、文件系统、密钥管理、网络及扩展清单注册边界。
  - 增加兼容 WIT 的 WASM 工具。
- **影响评估**: 这是一个重要的架构里程碑，标志着项目向模块化、WASM 化的运行时环境迈出关键一步，可能涉及 API 层面的调整，建议开发者关注相关 Host 接口变更。

## 3. 项目进展
今日共有 **32 个 PR 被合并或关闭**，主要集中在架构重构与关键 Bug 修复：

- **架构重构**:
  - [PR #3349](https://github.com/nearai/ironclaw/pull/3349), [PR #3368](https://github.com/nearai/ironclaw/pull/3368), [PR #3378](https://github.com/nearai/ironclaw/pull/3378): 实现了 Run-state、Capability Lease 和 Session Thread 的持久化存储，正在逐步替换内存实现，增强生产环境可靠性。
  - [PR #3377](https://github.com/nearai/ironclaw/pull/3377), [PR #3382](https://github.com/nearai/ironclaw/pull/3382): 重构 Agent Loop Host 外观模式，定义了更严格的驱动程序契约，解耦运行时与核心逻辑。

- **关键修复**:
  - [PR #3365](https://github.com/nearai/ironclaw/pull/3365): 修复了 Approval gates 导致 Agent Loop 阻塞的严重问题，通过绕过 `mpsc` 实现内联等待，解决了请求排队无响应的隐患。
  - [PR #3381](https://github.com/nearai/ironclaw/pull/3381): 修复了 Telegram 配对流程中的 OAuth 失败恢复问题，解决了跨渠道认证会话丢失的痛点。
  - [PR #3364](https://github.com/nearai/ironclaw/pull/3364): 修复了设置页面中“重启”模态框卡死及 HTTP 默认配置错误。

- **测试与基建**:
  - [PR #2806](https://github.com/nearai/ironclaw/pull/2806): 搭建了 v2 接受测试与回归测试套件脚手架，为后续引擎切换做准备。

## 4. 社区热点
今日讨论最活跃的 Issues 集中在架构验证与用户体验改进：

- **[Issue #3067](https://github.com/nearai/ironclaw/issues/3067) [28 评论]**: 关于 Reborn 集成测试套件的讨论。社区（主要是核心贡献者）正在敲定垂直切片测试计划，以确保新架构在公共入口点的正确性，显示出团队对重构质量的严格把控。
- **[Issue #3022](https://github.com/nearai/ironclaw/issues/3022) [9 评论]**: Reborn 事件基板集成测试，讨论如何在用户可见的切换前验证事件生产者的正确性。
- **[Issue #3327](https://github.com/nearai/ironclaw/issues/3327) [新提案]**: 提出**表面化并持久化 LLM 推理内容**（Thinking/Reasoning tokens）。用户希望看到模型的“思考过程”，并用于重放和调试。这不仅是 UI 需求，也涉及底层存储结构的改动，是极高价值的功能信号。

## 5. Bug 与稳定性
今日报告了多个重要 Bug，部分已修复，部分待处理：

- **[P0/已修复] Approval Gate 死锁**: [PR #3365](https://github.com/nearai/ironclaw/pull/3365) 修复了在审批关卡暂停执行时导致 Agent Loop 无限等待的问题。
- **[P1/已修复] Telegram 配对失败**: [Issue #3317](https://github.com/nearai/ironclaw/issues/3317) 反馈本地部署 Telegram 设置失败，通过 [PR #3381](https://github.com/nearai/ironclaw/pull/3381) 修复。
- **[P1/已修复] LLM Provider 配置被覆盖**: [Issue #3229](https://github.com/nearai/ironclaw/issues/3229) 指出 LLM 回退逻辑会在启动时永久覆盖用户配置，已关闭（推测已修复或通过配置调整解决）。
- **[P2/待确认] 升级后数据丢失**: [Issue #3274](https://github.com/nearai/ironclaw/issues/3274) 报告从 v0.26.0 升级到 v0.27.0 后 UI 显示异常，需手动刷新。Issue 已关闭，建议关注后续版本表现。
- **[P2/Open] Nightly E2E 失败**: [Issue #3323](https://github.com/nearai/ironclaw/issues/3323) 指出 Nightly E2E 测试失败，CI 流水线稳定性需关注。

## 6. 功能请求与路线图信号
- **LLM 推理过程可视化**: [Issue #3327](https://github.com/nearai/ironclaw/issues/3327) 提议在 UI 中展示模型的 `reasoning_content` 并持久化存储，符合当前 AI 可解释性趋势，预计将被高优先级纳入。
- **Slack 多工作区支持**: [Issue #3334](https://github.com/nearai/ironclaw/issues/3334) 提出单一 IronClaw 实例支持多 Slack 工作区的需求，这可能需要重构 channel-relay 服务，属于中大型功能扩展。
- **K8s 沙箱运行时**: [PR #2979](https://github.com/nearai/ironclaw/pull/2979) 正在推进支持 Kubernetes 作为沙箱运行时，目前处于 Open 状态，将极大方便云原生部署。

## 7. 用户反馈摘要
- **部署与配置痛点**: 用户反馈 LLM Provider 配置容易被意外重置（Issue #3229），以及 Telegram 集成配置复杂且容易失败（Issue #3317），表明初始化流程的健壮性有待提升。
- **UI/UX 细节**: [Issue #3385](https://github.com/nearai/ironclaw/issues/3385) 指出对话标题未自动生成，直接使用了第一条消息，影响侧边栏可读性。
- **模型支持**: Deepseek 工具调用失败（Issue #3201，已关闭）及 Gemini API Key 后端签名问题（Issue #3225，已关闭），显示出对新模型适配的持续维护压力。

## 8. 待处理积压
- **[Issue #3259] Crates.io 发布滞后**: 当前 GitHub 已发布至 v0.28.0，但 [Crates.io](https://crates.io/crates/ironclaw) 仍停留在 v0.24.0。由于 Wasmtime 28.x CVE 漏洞，下游依赖被锁定，无法获取最新修复，**建议维护者尽快同步发布流程**。
- **[Issue #3067] Reborn 测试覆盖**: 虽然已有大量 PR 合入，但针对 Reborn 架构的端到端集成测试仍在推进中，这是架构切换前的关键阻碍。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-08)

## 1. 今日速览
LobsterAI 项目今日处于**高强度迭代发布阶段**，过去 24 小时内共有 **39 个 PR 成功合并**，显示出开发团队正全力冲刺即将发布的 `2026.05.08` 版本。此次更新重点在于**架构优化与用户体验提升**，成功引入了会话分页加载机制与新手引导功能，显著增强了应用的大数据处理能力与易用性。虽然代码提交活跃度极高，但社区反馈的问题主要集中在 IM 机器人配置与会员登录稳定性上，需引起开发团队注意。整体来看，项目健康度良好，正向更稳定、更友好的版本快速推进。

## 2. 版本发布
今日发布了 **LobsterAI 2026.5.7** 版本。
- **更新内容**：
  - **Skills 优化**：改进了 Windows 环境下技能删除的可靠性，并优化了导入反馈机制 ([PR #1881](https://github.com/netease-youdao/LobsterAI/pull/1881))。
  - **功能升级**：有道笔记技能升级至 1.0.8 版本 ([PR #1882](https://github.com/netease-youdao/LobsterAI/pull/1882))。
  - **代码重构**：进行了部分重构工作。

## 3. 项目进展
今日合并了大量 PR，主要围绕性能优化、功能增强与稳定性修复三个维度推进：

- **核心性能优化 - 分页机制落地**：
  - 合并了会话列表与消息历史的分页加载功能 ([PR #1907](https://github.com/netease-youdao/LobsterAI/pull/1907), [PR #924](https://github.com/netease-youdao/LobsterAI/pull/924))，解决了长对话场景下的内存占用与渲染卡顿问题。
  - 合并了定时任务历史记录的分页与筛选功能 ([PR #1913](https://github.com/netease-youdao/LobsterAI/pull/1913), [PR #1564](https://github.com/netease-youdao/LobsterAI/pull/1564))，支持按状态和时间范围检索，提升了任务管理的便捷性。

- **用户体验增强**：
  - **新手引导**：新增基于 driver.js 的首次启动引导与模型配置引导 ([PR #1577](https://github.com/netease-youdao/LobsterAI/pull/1577))，大幅降低了新用户上手门槛。
  - **信息透明度**：在助手消息下方显示 Token 使用统计、上下文窗口占用率、模型名称等信息 ([PR #1912](https://github.com/netease-youdao/LobsterAI/pull/1912))，让用户对 AI 运行状态一目了然。
  - **Agent 隔离**：支持为每个 Agent 配置独立的工作目录 ([PR #1904](https://github.com/netease-youdao/LobsterAI/pull/1904))，提升了多任务并行处理的规范性。

- **稳定性与 Bug 修复**：
  - **流式输出修复**：解决了流式文本合并时重复字符被误吞的问题 ([PR #1908](https://github.com/netease-youdao/LobsterAI/pull/1908))，保证了内容生成的准确性。
  - **Windows 兼容性**：修复了 Windows 文件预览重复卡片及路径错误 ([PR #1909](https://github.com/netease-youdao/LobsterAI/pull/1909))，优化了启动超时逻辑以减少误报故障 ([PR #1910](https://github.com/netease-youdao/LobsterAI/pull/1910))。
  - **代码质量**：修复了全部 165 个 ESLint 错误 ([PR #1498](https://github.com/netease-youdao/LobsterAI/pull/1498))，提升了代码库的规范性与可维护性。

## 4. 社区热点
今日社区讨论主要集中在两个功能性阻碍问题上：

- **Issue #1878 [IM机器人 微信接口 配置扫码后无法输入验证码](https://github.com/netease-youdao/LobsterAI/issues/1878)**
  - **分析**：用户在使用微信接口配置 IM 机器人时，扫码后客户端未弹出验证码输入界面，导致配置流程中断。该问题涉及客户端 UI 交互逻辑，直接影响微信渠道的可用性。

- **Issue #1903 [会员登录频繁失败](https://github.com/netease-youdao/LobsterAI/issues/1903)**
  - **分析**：用户反馈会员登录功能不稳定，导致无法使用网易付费模型。鉴于付费用户对服务连续性的高敏感度，这是一个优先级较高的体验问题。

## 5. Bug 与稳定性
今日报告的新 Bug 主要集中在登录与集成模块，此前存在的部分稳定性问题已通过 PR 修复：

- **高危 (未解决)**：
  - **会员登录失败** ([Issue #1903](https://github.com/netease-youdao/LobsterAI/issues/1903))：影响付费功能使用，目前尚未有修复 PR 合并。
- **中危 (未解决)**：
  - **微信扫码配置阻塞** ([Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878))：IM 机器人配置受阻，影响多渠道接入体验。
- **已修复**：
  - **流式文本合并错误** ([PR #1908](https://github.com/netease-youdao/LobsterAI/pull/1908))：修复了特定边界条件下字符丢失的问题。
  - **Windows 平台文件预览与路径错误** ([PR #1909](https://github.com/netease-youdao/LobsterAI/pull/1909))：解决了路径解析导致的 ENOENT 错误。
  - **启动误报失败** ([PR #1910](https://github.com/netease-youdao/LobsterAI/pull/1910))：延长了超时阈值，增加了应用内重启功能。

## 6. 功能请求与路线图信号
- **分页与筛选已成标配**：从今日合并的 PR ([#1907](https://github.com/netease-youdao/LobsterAI/pull/1907), [#1913](https://github.com/netease-youdao/LobsterAI/pull/1913)) 可以看出，项目正致力于解决“数据量增长后的性能瓶颈”，预计未来版本将继续优化大列表渲染和数据库查询效率。
- **可视化监控需求**：PR #1912 引入了 Token 使用统计与上下文占比显示，预示着项目将更注重“AI 运行过程的可观测性”，未来可能会加入更详细的成本分析或性能监控面板。

## 7. 用户反馈摘要
- **痛点**：用户对**登录稳定性**和**第三方集成配置（如微信）的流畅度**敏感度极高。Issue #1903 表明，登录失败会直接切断用户对核心付费能力的访问，需作为优先级事项排查。
- **场景**：IM 机器人配置场景（Issue #1878）揭示了用户在实际生产环境中连接私域流量（微信）的强需求，目前的配置向导存在断层。
- **满意度**：开发团队在 Windows 兼容性（文件预览、路径处理）和基础体验（流式输出修复）上的快速响应，体现了对用户反馈的重视，有助于维持用户粘性。

## 8. 待处理积压
- **Issue #1878 与 #1903**：这两个 Issue 均处于 Open 状态且涉及核心流程（登录与 IM 配置），建议开发团队在下一版本迭代中优先介入排查，尤其是会员登录失败问题可能涉及后端接口或鉴权逻辑，需尽快确认原因。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-08)

## 1. 今日速览
Moltis 项目今日呈现出极高的开发活跃度与迭代速度，展现了成熟的自动化协作流程。过去24小时内，项目成功合并了 9 个 PR 并关闭了 4 个 Issue，实现了“零积压”的即时响应状态。核心进展集中在**身份验证架构升级**（Ed25519 TOFU）、**多模态能力扩展**（图像生成、电话呼叫）以及**运行环境兼容性修复**。同日发布两个新版本（20260507.04/05），表明项目正快速将新功能交付至用户手中，项目健康度极佳。

## 2. 版本发布
今日连续发布两个版本，建议用户关注以下核心变更：

- **[Release 20260507.05](https://github.com/moltis-org/moltis/releases/tag/20260507.05)**
- **[Release 20260507.04](https://github.com/moltis-org/moltis/releases/tag/20260507.04)**

**更新重点：**
1.  **身份验证重构**：引入 Ed25519 挑战-响应机制（TOFU 模型），替代旧的 Token 验证，增强了节点间通信的安全性。
2.  **媒体能力增强**：集成了 OpenAI Codex OAuth 的图像生成功能 (`gpt-image-2`)，并新增了 Twilio 电话呼叫支持。
3.  **语音与沙箱**：新增 `whisper-local` 本地语音转文字支持，修复了 Docker 环境下浏览器沙箱的挂载失败问题。

## 3. 项目进展
今日共合并/关闭 9 个 PR，显著推进了项目架构的成熟度：

- **跨节点身份协议落地**：PR [#979](https://github.com/moltis-org/moltis/pull/979) 与 PR [#976](https://github.com/moltis-org/moltis/pull/976) 合并，实现了基于 Ed25519 的去中心化身份验证与引导协议。这意味着 Moltis 节点间现在可以进行无需中心化权威的可信通信，解决了 Personal Agent 互联互通的核心痛点。
- **多模态交互闭环**：PR [#982](https://github.com/moltis-org/moltis/pull/982) 新增图像生成能力，PR [#920](https://github.com/moltis-org/moltis/pull/920) 引入 Twilio 电话支持。Moltis 正从纯文本/代码智能体向全双工多模态 Assistant 演进。
- **执行环境稳定性修复**：PR [#980](https://github.com/moltis-org/moltis/pull/980) 修复了 Docker 环境下浏览器沙箱的严重故障，PR [#942](https://github.com/moltis-org/moltis/pull/942) 引入了远程沙箱支持。项目现已在云原生部署和本地隐私运行之间取得了更好的平衡。

## 4. 社区热点
虽然今日 Issues 评论数为 0，但 Issues 的关闭速度与 PR 的对应关系显示了极高的社区需求响应效率：

- **Issue [#973](https://github.com/moltis-org/moltis/issues/973) (已关闭)**：关于“互操作个人代理服务器的身份协议”提案。该提案由社区提出，并在短时间内被实现并合并。这反映了开发团队高度重视 Agent 间协作的去中心化标准，响应极其迅速。
- **Issue [#956](https://github.com/moltis-org/moltis/issues/956) (已关闭)**：请求支持 `gpt-image-2` 图像生成。该功能请求直接导致了 PR #982 的诞生，表明项目正积极满足用户对生成式 AI 工具链的扩展需求。

## 5. Bug 与稳定性
今日修复了两个影响部署体验的关键 Bug：

- **🔴 严重：Docker 环境浏览器沙箱失效**
    - **Issue**: [#977](https://github.com/moltis-org/moltis/issues/977)
    - **现象**：在 Docker (LXC/Proxmox) 环境中，浏览器工具无法创建配置文件目录导致崩溃。
    - **状态**：已修复 (PR [#980](https://github.com/moltis-org/moltis/pull/980))。修复方案优化了主机数据目录的挂载解析逻辑。

- **🟠 中等：Tool Call 参数解析异常**
    - **Issue**: [#963](https://github.com/moltis-org/moltis/issues/963)
    - **现象**：模型生成的 Tool Call 参数若格式错误或为空，会被错误地坍缩为 `{}`，导致后端校验失败。
    - **状态**：已修复 (PR [#983](https://github.com/moltis-org/moltis/pull/983))。现在保留了参数诊断信息，增强了调试能力。

## 6. 功能请求与路线图信号
根据今日动态，Moltis 的下一阶段路线图信号十分明确：

1.  **隐私优先的本地推理**：PR [#981](https://github.com/moltis-org/moltis/pull/981) 引入 `whisper-local`，配合之前的本地 LLM 支持，项目正构建一个完全离线可用的 Privacy-First AI OS。
2.  **云边协同架构**：PR [#942](https://github.com/moltis-org/moltis/pull/942) 支持远程沙箱，解决了云部署时的权限与安全隔离问题，预示着 Moltis 将不仅限于本地运行，还将支持 Serverless 或云端托管模式。

## 7. 用户反馈摘要
从 Issue 详情中可以提炼出以下用户画像与痛点：

- **极客与自托管爱好者**：Issue #977 的报告者使用 Proxmox 和 LXC，表明核心用户群体具备较强的技术背景，倾向于在家庭实验室或私有云环境中部署 Moltis。
- **对“互操作性”的强需求**：Issue #973 提出“个人代理服务器需要发现彼此并验证身份”，说明用户不希望 Moltis 成为孤岛，而是希望构建一个去中心化的 Agent 网络。

## 8. 待处理积压
当前项目处于极佳的清理状态，旧有积压已基本清零。仅剩一个待合并 PR 需关注：

- **[PR #984](https://github.com/moltis-org/moltis/pull/984) [OPEN]**: `feat(voice): surface OpenAI realtime model guidance`
    - 该 PR 旨在优化语音模型的配置体验，建议维护者尽快 Review 以完善 20260507.05 版本后的语音功能文档。

---
*分析师注：Moltis 今日的表现展示了“Issue 即 Feature”的高效研发模式，尤其在身份认证与沙箱隔离这两个复杂技术点上取得了重大突破。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-05-08)

## 1. 今日速览
CoPaw 项目今日保持高活跃度，社区互动频繁，过去 24 小时内共有 50 条 Issue 更新与 32 条 PR 更新。项目重点聚焦于稳定性修复与用户体验优化，成功合并了 Windows 打包冲突修复、文件链接过期修复等关键补丁，显著提升了桌面端稳定性。社区讨论热度最高的话题集中在内置技能与 MCP 的拓展上，显示出用户对“开箱即用”能力的强烈需求。整体来看，项目处于快速迭代期，维护者对 Bug 响应迅速，多个功能性 PR 正在推进中。

## 2. 版本发布
*   **无新版本发布**：今日无新版本 Tag 发布，但已合并的修复补丁预计将包含在下一个 patch 版本中。

## 3. 项目进展
今日共有 **19 个 PR 被合并或关闭**，项目在跨平台兼容性、渠道集成和前端交互方面取得实质性进展：

*   **Windows 桌面端兼容性修复**：PR [#4093](https://github.com/agentscope-ai/QwenPaw/pull/4093) 解决了 Windows 打包时 `conda-pack` 与 `pip install` 的冲突问题，修复了长期困扰桌面用户的构建失败问题。
*   **渠道集成增强**：
    *   PR [#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) 重构了 WeChat/Weixin 的数据迁移逻辑，统一了工作区启动流程。
    *   PR [#4055](https://github.com/agentscope-ai/QwenPaw/pull/4055) 修复了飞书渠道无法识别用户昵称的问题，提升了 Agent 对用户的识别能力。
*   **前端体验优化**：
    *   PR [#4091](https://github.com/agentscope-ai/QwenPaw/pull/4091) 新增了技能板块的批量启用/禁用功能，解决了用户批量管理技能的需求。
    *   PR [#4089](https://github.com/agentscope-ai/QwenPaw/pull/4089) 修复了聊天记录中文件链接过期的路径处理问题。
    *   PR [#4073](https://github.com/agentscope-ai/QwenPaw/pull/4073) 修复了自定义 Agent 名称未生效的问题。

## 4. 社区热点
今日社区讨论最活跃的话题主要集中在功能拓展与模型适配：

*   **内置技能讨论**：Issue [#280](https://github.com/agentscope-ai/QwenPaw/issues/280) (评论 27 条) 持续引发热议，用户希望能预装常用的 Skills 和 MCPs 以减少配置成本，反映出社区对降低上手门槛的迫切需求。
*   **模型配置体验**：Issue [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) 指出添加新模型步骤过于繁琐，引发了关于 UI 流程优化的讨论。目前已有 PR [#3819](https://github.com/agentscope-ai/QwenPaw/pull/3819) 正在重构模型发现机制，试图解决此痛点。
*   **长上下文稳定性**：Issue [#4059](https://github.com/agentscope-ai/QwenPaw/issues/4059) 反映了长对话导致任务中断的问题，涉及上下文管理策略，已得到开发者的关注与回应。

## 5. Bug 与稳定性
今日报告了若干关键 Bug，部分已得到修复或正在处理中：

*   **严重**:
    *   [OPEN] **微信渠道消息丢失**：Issue [#4056](https://github.com/agentscope-ai/QwenPaw/issues/4056) 报告在正常网络下微信渠道偶发性停止响应。已有相关修复 PR [#4106](https://github.com/agentscope-ai/QwenPaw/pull/4106) 待合并。
    *   [OPEN] **DeepSeek 模型思考链解析异常**：Issue [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) 显示 DeepSeek v4 Flash 的 think 标签解析存在问题，导致回复中断。
    *   [OPEN] **Agent 名称硬编码 Bug**：Issue [#4099](https://github.com/agentscope-ai/QwenPaw/issues/4099) 指出会话初始化时强制将 agent name 设为 "Friday"，导致下游功能（如记忆）异常。

*   **已修复**:
    *   [CLOSED] **Windows 打包失败**：Issue [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) 报告的打包冲突已通过 PR [#4093](https://github.com/agentscope-ai/QwenPaw/pull/4093) 解决。
    *   [CLOSED] **文件链接过期**：Issue [#4047](https://github.com/agentscope-ai/QwenPaw/issues/4047) 报告的附件链接失效问题已通过 PR [#4089](https://github.com/agentscope-ai/QwenPaw/pull/4089) 修复。

## 6. 功能请求与路线图信号
用户提出的多项功能请求正在开发中或已提上日程：

*   **Vertex AI 支持**：Issue [#4030](https://github.com/agentscope-ai/QwenPaw/issues/4030) 请求支持 Google Vertex AI Gemini 模型，满足企业级部署需求。
*   **文件模块增强**：Issue [#4087](https://github.com/agentscope-ai/QwenPaw/issues/4087) 建议文件模块支持 Markdown 以外的格式预览，提升工作区实用性。
*   **Web 控制台升级**：Issue [#2235](https://github.com/agentscope-ai/QwenPaw/issues/2235) 提出的通过 Web 控制台进行版本升级的请求仍在 Open 状态，适合作为下一阶段运维能力的优化方向。
*   **待合并功能 PR**：
    *   PR [#3238](https://github.com/agentscope-ai/QwenPaw/pull/3238) 正在实验性支持 PlanNotebook，旨在提升 Agent 的复杂任务规划能力。
    *   PR [#4046](https://github.com/agentscope-ai/QwenPaw/pull/4046) 增加了安全规则自动拒绝功能，强化了 Tool Guard 的安全防护。

## 7. 用户反馈摘要
*   **痛点**：用户普遍反映模型添加流程繁琐（#4036），且在超长对话场景下页面卡顿及任务中断问题明显（#3350, #4059）。此外，Agent 切换导致的 Session 丢失（#3919）和文件名中文解析问题（#4104）影响了实际使用体验。
*   **场景**：用户正在尝试将 CoPaw 用于严肃的开发场景，如项目级代码迭代和多渠道（微信/飞书）接入，但对上下文一致性和文件管理的健壮性提出了更高要求。
*   **满意度**：社区对维护者快速响应 Bug（如打包问题）表示认可，同时对新加入的批量操作功能和渠道优化表现出积极期待。

## 8. 待处理积压
*   **长期未决功能请求**：Issue [#2235](https://github.com/agentscope-ai/QwenPaw/issues/2235)（Web 端远程升级）自 3 月提出至今未有关键进展，建议维护者关注该运维需求。
*   **架构优化讨论**：Issue [#280](https://github.com/agentscope-ai/QwenPaw/issues/280) 关于内置技能的讨论仍在进行中，需尽快确定方案以满足用户对“开箱即用”的期待。
*   **待合并 PR**：PR [#3819](https://github.com/agentscope-ai/QwenPaw/pull/3819)（模型发现重构）和 PR [#3238](https://github.com/agentscope-ai/QwenPaw/pull/3238)（任务规划）作为重要功能更新，目前处于 Review 状态，建议加快审查进度。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 (2026-05-08)

## 1. 今日速览
EasyClaw 项目今日呈现出“开发侧高度活跃、社区侧静默”的显著特征。在过去 24 小时内，项目连续发布了 v1.8.11 和 v1.8.12 两个重要版本，显示出维护者在“创作者商务”与“桌面端体验”方向上的快速迭代决心。尽管 GitHub Issues 与 Pull Requests 板块无新增动态，但连续的版本发布表明项目正处于功能密集交付期，开发重心明显向电商自动化与桌面端稳定性倾斜。整体来看，项目核心功能正在快速演进，但社区互动暂时处于低谷。

## 2. 版本发布
今日连续发布两个版本，功能迭代路径清晰，建议用户尽快升级以获得更好的桌面端体验。

### **v1.8.12: RivonClaw v1.8.12** ([Release Link](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.12))
本次更新重点强化了电商与服务流程的自动化能力，并显著提升了桌面端的稳定性。
*   **新功能**：
    *   新增云客服与电商中继流，支持在线服务移交、信号路由及创作者商务工作流，标志着 EasyClaw 正式向电商 SaaS 领域拓展。
*   **改进**：
    *   通过集中化 OpenClaw 配置写入与显式实例化 RivonClaw 插件工具，大幅提升了桌面端的稳定性。
*   **修复**：
    *   修复了多个聊天与账户相关问题，提升了用户交互的可靠性。

### **v1.8.11: RivonClaw v1.8.11** ([Release Link](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.11))
作为 v1.8.12 的奠基版本，主要奠定了电商与联盟营销的基础设施。
*   **新功能**：
    *   新增联盟入站与电商中继基础架构，为即将到来的创作者协作与电商自动化工作流铺平道路。
    *   Windows 安装包现已内置本地 CLI 启动支持，优化了启动与运行时依赖的暂存机制，让桌面端配置更加顺滑。
*   **改进**：
    *   改进了聊天交互体验（Changelog 截断，推测为性能或 UI 优化）。

## 3. 项目进展
尽管今日无公开的 PR 合并记录，但根据版本发布节奏分析，项目代码库经历了两次重大的内部提交与合并操作。
*   **电商生态闭环构建**：从 v1.8.11 的基础架构到 v1.8.12 的具体流实现，项目在 24 小时内完成了从“地基”到“功能落地”的跨越，成功打通了创作者经济与电商转化的关键链路。
*   **桌面端体验重构**：针对 Windows 平台的安装包与依赖管理进行了系统性优化，解决了以往可能存在的环境配置繁琐问题，提升了 C 端用户的上手体验。

## 4. 社区热点
过去 24 小时内，GitHub Issues 与 Pull Requests 板块均无新增或活跃记录。
*   **分析**：这可能意味着当前版本处于维护者主导的功能发布期，尚未引发大规模的用户反馈；或者社区正处于消化新功能的静默期。建议关注后续 1-2 天内的 Issue 涌入情况。

## 5. Bug 与稳定性
今日无用户提交的新 Bug 报告，但在 Release Notes 中官方主动修复了以下问题：
*   **[已修复] 桌面端稳定性问题**：通过重构配置写入逻辑，解决了潜在的配置冲突与插件加载问题。
*   **[已修复] 聊天与账户异常**：修复了多个已知的聊天功能与账户管理逻辑漏洞。虽然具体细节未完全披露，但涉及多账户管理的修复通常对严重程度较高，建议重度用户立即更新。

## 6. 功能请求与路线图信号
今日无用户提出的新功能请求，但 Release Notes 透露了明确的官方路线图信号：
*   **创作者经济**：新增的“Affiliate inbound”与“Creator-commerce workflows”表明项目正致力于成为创作者变现的辅助工具，未来可能会加强与主流电商平台（如 Shopify、TikTok Shop）的集成。
*   **本地化运维**：Windows 安装包集成 CLI 支持，暗示项目将增强对本地开发者与自动化运维场景的支持，不仅仅是作为 GUI 工具存在。

## 7. 用户反馈摘要
由于今日 Issues 无活跃数据，暂无可提炼的用户痛点或满意度反馈。建议关注后续版本发布后，用户在实际部署电商中继流时的具体反馈，这可能成为下一阶段优化的重点。

## 8. 待处理积压
目前数据源中未显示长期未响应的 Issue 或 PR。鉴于今日无活跃 Issue 产生，积压风险处于低位。建议维护者保持对现有功能的文档更新，以引导用户更好地使用新增的电商工作流功能。

---
**分析师结语**：EasyClaw 今日的表现是典型的“产研驱动”模式，连续两个版本的高质量交付展现了团队极强的执行力。虽然社区暂时安静，但核心功能的扩展（电商中继、桌面稳定性）精准切中了 AI 助手商业化落地的痛点。建议密切关注下一周期的用户采纳率。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*