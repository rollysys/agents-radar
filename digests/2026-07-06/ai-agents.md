# OpenClaw 生态日报 2026-07-06

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-07-06 03:48 UTC

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

# OpenClaw 项目动态日报 (2026-07-06)

## 1. 今日速览
OpenClaw 今日发布了 **v2026.7.1-beta.2**，核心亮点在于抢先支持 OpenAI GPT-5.6 模型家族及引入外部线束附件功能，显示出项目对前沿模型生态的快速响应能力。社区活跃度极高，过去 24 小时内 Issues 更新量达 500 条（新开/活跃占比超 80%），PR 更新亦达 500 条，项目处于快速迭代的高峰期。尽管新功能令人振奋，但大量反馈集中在跨平台客户端缺失（Linux/Windows）及内存泄漏、会话状态冲突等稳定性问题上。总体而言，项目技术创新活跃，但生态完善度与运行稳定性是当前用户的主要诉求。

## 2. 版本发布
- **[v2026.7.1-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.7.1-beta.2)**
  - **核心更新**：
    - **OpenAI GPT-5.6 支持**：OpenClaw 现已在目录、能力和运行时选择路径中全面识别 GPT-5.6 模型家族。(#98333)
    - **外部线束附件**：`openclaw attach` 命令现可针对现有 Gateway 会话启动外部线束。
  - **注意**：作为 Beta 版本，部分用户反馈近期发布的 v2026.6.11 存在发布包文件缺失问题，建议升级前检查版本完整性。

## 3. 项目进展
今日共有 271 个 PR 被合并或关闭，项目在稳定性修复与生态建设上取得显著进展：
- **修复关键缺陷**：
  - 修复了工具输出在非多模态模型上传图片后显示 "(see attached image)" 占位符的问题 ([#99881](https://github.com/openclaw/openclaw/issues/99881)，已关闭)。
  - 解决了浏览器工具在使用 CDP 连接时静默丢弃下载文件的问题 ([#48045](https://github.com/openclaw/openclaw/issues/48045)，已关闭)。
  - 修正了 `/pair qr` 命令可能意外更改 `gateway.bind` 并导致 Tailscale Serve 服务中断的严重 Bug ([#98239](https://github.com/openclaw/openclaw/issues/98239)，已关闭)。
- **自动化与工具链**：
  - 合并了 PR 自动修复流水线及 Windows 后台守护进程 ([#68936](https://github.com/openclaw/openclaw/pull/68936))，这将显著提升维护效率与 Windows 平台体验。
- **功能增强进行时**：
  - 正在推进 iOS 设置界面的品牌化改造 ([#100531](https://github.com/openclaw/openclaw/pull/100531))。
  - 正在实现自动检测提供商计划与账单功能 ([#100520](https://github.com/openclaw/openclaw/pull/100520))，有望解决用户无法监控配额的痛点。

## 4. 社区热点
今日社区讨论集中在平台支持与安全机制：
- **跨平台客户端缺失**：Issue [#75](https://github.com/openclaw/openclaw/issues/75) (Linux/Windows Clawdbot Apps) 评论数高达 **110 条**。用户强烈希望能补齐 Linux 和 Windows 平台的客户端支持，目前仅有 macOS/Android/iOS，这已成为阻碍项目普及的最大短板之一。
- **易用性需求**：Issue [#9443](https://github.com/openclaw/openclaw/issues/9443) (Prebuilt Android APK) 获 26 条评论，用户呼吁提供预编译的 Android APK 以简化安装流程，而非仅提供源码。
- **安全架构讨论**：Issue [#7707](https://github.com/openclaw/openclaw/issues/7707) 讨论了“基于来源的内存信任标签”，旨在防止恶意指令通过网页抓取或第三方技能污染 Agent 内存，反映了社区对 AI 自主性安全边界的深层关注。

## 5. Bug 与稳定性
今日报告了多个严重级别的 Bug，需重点关注：
- **严重性能问题 (P1)**：Issue [#54155](https://github.com/openclaw/openclaw/issues/54155) 报告 Gateway 进程存在严重内存泄漏，4 天内内存占用从 389MB 暴涨至 14.7GB，可能导致服务崩溃。
- **发布版本缺陷 (P1)**：Issue [#98416](https://github.com/openclaw/openclaw/issues/98416) 指出 v2026.6.11 发布包缺失重入守卫代码，导致回复会话初始化冲突。
- **功能性回归 (P1)**：Issue [#99586](https://github.com/openclaw/openclaw/issues/99586) 报告操作 Gateway 后运行时工具表面返回空白，需重启容器临时缓解。
- **安全隐患**：Issue [#45740](https://github.com/openclaw/openclaw/issues/45740) 揭示 `gh-issues` 技能存在注入漏洞，未清洗 GitHub Issue 内容直接传入子智能体提示词。

## 6. 功能请求与路线图信号
- **多智能体架构演进**：RFC [#35203](https://github.com/openclaw/openclaw/issues/35203) 提出增强多智能体协作（能力画像+共享黑板+分层内存），显示出社区对复杂智能体交互的强烈需求。
- **生态系统完善**：Issue [#50090](https://github.com/openclaw/openclaw/issues/50090) 关注社区技能开发与 ClawHub 生态，旨在弥合“编写即发布”承诺与实际体验之间的差距。
- **自动更新机制**：Issue [#12855](https://github.com/openclaw/openclaw/issues/12855) 提出内置自动更新功能，这对于快速迭代的 Beta 阶段产品至关重要。
- **即将到来的功能**：PR [#100520](https://github.com/openclaw/openclaw/pull/100520) 正在实现自动检测提供商计划与账单功能，有望在下个版本合并。

## 7. 用户反馈摘要
- **痛点**：
  - **配置与路径问题**：用户反馈工作路径硬编码导致目录错误 ([#51429](https://github.com/openclaw/openclaw/issues/51429))，以及向导未强制配置内存/嵌入提供者导致记忆功能不可用 ([#16670](https://github.com/openclaw/openclaw/issues/16670))。
  - **多模态兼容性**：非多模态模型上传图片后工具输出异常 ([#99881](https://github.com/openclaw/openclaw/issues/99881))，显示占位符而非文本。
  - **Cron 任务可靠性**：Cron 任务在 LLM API 故障时长时间超时而非快速失败 ([#45494](https://github.com/openclaw/openclaw/issues/45494))。
- **满意点**：
  - 新版本快速跟进 GPT-5.6 模型支持获得社区积极评价，体现了项目对新技术的响应速度。
  - 社区对 PR 自动修复流水线的合并表示欢迎，认为这有助于提升代码质量。

## 8. 待处理积压
- **长期未决 Issue**：
  - Issue [#75](https://github.com/openclaw/openclaw/issues/75) (Linux/Windows Apps) 自 2026-01-01 开启至今，尽管热度极高，仍处于 OPEN 状态，建议维护者评估跨平台客户端的开发优先级。
  - Issue [#10659](https://github.com/openclaw/openclaw/issues/10659) (Masked Secrets) 自 2026-02-06 提出后，至今未合并相关安全改进，作为防止 API Key 泄露的关键功能，应优先处理。
  - Issue [#29387](https://github.com/openclaw/openclaw/issues/29387) (Bootstrap files ignored) 影响配置加载逻辑，标记为 P1，但修复进度缓慢。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比日报 (2026-07-06)

## 1. 生态全景
今日 AI 智能体生态呈现**"功能竞速与架构偿债并存"**的态势。头部项目（OpenClaw, Hermes）正激烈争夺前沿模型（GPT-5.6）与性能极限（TTFT 优化）的制高点，而中坚力量则深陷于多渠道集成与稳定性的泥潭。**安全治理**已成为核心议题，多项目（ZeroClaw, NanoBot, PicoClaw）均曝出高危漏洞或启动大规模加密迁移，标志着生态正从"功能原型"向"生产级安全"硬着陆。多智能体编排（SOP, 外部调度）取代单一对话能力，成为架构演进的新焦点。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PRs 活跃度 | 版本发布情况 | 健康度评估 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 极高 (500+) | 极高 (500+, 271 merged) | **v2026.7.1-beta.2** | ⚠️ 活跃但动荡 | GPT-5.6, 内存泄漏, 跨平台缺失 |
| **Hermes Agent** | 高 (50) | 高 (50, 仅 2 merged) | 无 | 📈 高产出低合并 | 性能优化(TTFT), 本地模型适配 |
| **ZeroClaw** | 中 (24) | 高 (50, 6 merged) | 无 | ✅ 稳健重构 | SOP架构, 安全漏洞修复, Goal Mode |
| **CoPaw** | 中 (19) | 中 (16, 5 merged) | 无 (Beta测试中) | 🔧 快速修复 | 桌面端迁移, 渠道稳定性, V2.0 Beta |
| **IronClaw** | 低 | 高 (31, 27 open) | v0.29.1 (待发) | 🚧 架构重构期 | Slack集成, 权限控制, Agent死循环修复 |
| **NanoBot** | 低 | 中 (21, 18 open) | 无 | ⚠️ 审核瓶颈 | SSRF漏洞, 外部Agent调用, 文档脱节 |
| **NanoClaw** | 无 | 低 (5, 3 merged) | 无 | ✅ 静默推进 | 模板机制, 安全护栏, 易用性 |
| **LobsterAI** | 无 | 低 (4, 2 merged) | 无 | ✅ 平稳迭代 | 体验优化, 多账户支持 |
| **PicoClaw** | 低 | 低 (5, 1 closed) | 无 | ⚠️ 安全隐患 | 加密库迁移, 技术债清理 |
| **NullClaw** | 无 | 无 | 无 | 💤 静默 | - |
| **TinyClaw** | 无 | 无 | 无 | 💤 静默 | - |
| **Moltis** | 无 | 无 | 无 | 💤 静默 | - |

## 3. OpenClaw 在生态中的定位
**定位：前沿功能的"急先锋"与稳定性的"短板生"。**

*   **技术路线差异**：相比 ZeroClaw 专注 SOP（标准作业程序）的严谨架构，OpenClaw 更侧重于**模型生态的快速适配**（今日率先支持 GPT-5.6）和**功能尝鲜**。相比 Hermes 对底层性能（TTFT）的极致优化，OpenClaw 的痛点更多集中在运行时的稳定性（内存泄漏、会话冲突）。
*   **社区规模对比**：OpenClaw 的社区活跃度（500+ Issues/PRs）远超其他项目（通常在 50 以下），显示出极强的用户吸引力，但同时也面临巨大的维护压力。
*   **优劣势分析**：
    *   **优势**：模型支持速度快，社区反馈量大，功能迭代极快（如外部线束附件）。
    *   **劣势**：跨平台支持严重缺失（无 Linux/Windows 客户端），核心稳定性问题（内存泄漏 14.7GB）未解，导致其在生产环境可用性上落后于 IronClaw 和 ZeroClaw。

## 4. 共同关注的技术方向
**跨项目涌现的共性需求揭示了行业痛点：**

1.  **安全性与权限治理**
    *   **涉及项目**：ZeroClaw, IronClaw, NanoBot, PicoClaw, NanoClaw。
    *   **具体诉求**：ZeroClaw 修复了高危的 SOP 审批绕过漏洞；NanoBot 曝出 SSRF 漏洞；PicoClaw 急需迁移废弃的加密库；NanoClaw 新增了输入/输出确定性护栏；IronClaw 重构了 Slack 的最小权限模型。这表明**"裸奔"时代的结束，生产级安全已成刚需**。

2.  **多智能体协作与编排**
    *   **涉及项目**：OpenClaw, ZeroClaw, NanoBot。
    *   **具体诉求**：OpenClaw 提出 RFC 增强多智能体协作；ZeroClaw 深度重构 Goal Mode；NanoBot 讨论调用外部 Agent 框架。架构正从单点工具调用向复杂的分层编排演进。

3.  **渠道与模型兼容性**
    *   **涉及项目**：CoPaw, Hermes, NanoBot, ZeroClaw。
    *   **具体诉求**：CoPaw 修复飞书/微信渠道问题；Hermes 适配 Telegram/WhatsApp；ZeroClaw 讨论兼容 OpenAI API 格式。**"多端触达"和"模型中立"**是扩大用户基数的普遍选择。

## 5. 差异化定位分析

| 维度 | OpenClaw | ZeroClaw | Hermes Agent | IronClaw | NanoBot |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **核心侧重** | 模型尝鲜、功能广度 | 企业级流程 (SOP)、架构严谨性 | 性能极限、网关能力 | 企业级集成、权限控制 | 多智能体架构、外部调度 |
| **目标用户** | 极客、早期采用者 | 企业开发者、DevOps | 性能敏感型应用、本地模型用户 | 企业团队协作 (Slack重度用户) | 框架集成者、高级开发者 |
| **架构特征** | 快速迭代，Beta 特性多 | 目标驱动，状态机管理 | 优化首字延迟，多路复用 | 模块化权限，Stack 架构 | 插件化，强依赖社区审核 |
| **主要短板** | 稳定性差，跨平台缺失 | 功能上线较慢 | 文档与代码脱节，部分连接不稳定 | 移动端 UI 欠佳 | 审核瓶颈，PR 积压严重 |

## 6. 社区热度与成熟度
*   **快速迭代爆发期**：**OpenClaw**（Issues/PRs 爆发式增长，但质量参差不齐）、**CoPaw**（V2.0 Beta 带来的密集反馈与修复）。
*   **架构重构深水区**：**ZeroClaw**（Goal Mode 拆分，安全加固）、**IronClaw**（Slack 重构，权限细化）、**Hermes**（性能优化，底层协议适配）。这些项目处于功能完善向生产级过渡的关键阶段。
*   **维护与沉淀期**：**NanoClaw**、**LobsterAI**（静默推进，合并少但质量高，聚焦特定场景）、**PicoClaw**（主要处理技术债）。
*   **停滞预警**：**NanoBot**（PR 积压 18 个，审核瓶颈明显，需警惕社区贡献者流失）。

## 7. 值得关注的趋势信号
1.  **Agent 容错与自主性博弈**：IronClaw 引入"纠正性轻推"打破死循环，NanoClaw 引入"确定性护栏"，OpenClaw 讨论"基于来源的内存信任标签"。这反映出行业痛点正从"Agent 能不能动"转向"Agent 如何在不确定环境中安全、可控地运行"。
2.  **本地模型支持的断层**：Hermes 和 CoPaw 均报告了 Ollama/Gemini 等非 OpenAI 模型的兼容性问题（如上下文截断、格式报错）。随着开源模型能力提升，**完善对非主流 API 的适配将是下一阶段竞争的胜负手**。
3.  **客户端体验回归**：OpenClaw 因缺失 Linux/Windows 客户端遭大量投诉，CoPaw 推进 Tauri 桌面端重构，IronClaw 关注移动端布局。这表明纯 Web 端已无法满足重度用户，**跨平台原生客户端能力**重新成为评价助手类项目的关键指标。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-07-06)

## 1. 今日速览
今日 NanoBot 项目呈现“高开发投入、低合并产出”的态势，社区提交活跃度极高，但待合并 PR 积压严重（18个）。过去24小时内共有 21 个 PR 更新，却无新版本发布，仅有 3 个 PR 被合并或关闭，显示出审核瓶颈迹象。Issues 方面新增了一个关键的 Python SDK 异步上下文 Bug，值得开发者注意。整体来看，项目正处于功能快速迭代期，大量新功能（如 Mattermost 支持、子智能体增强）等待合并，但稳定性修复（如 SSRF、MCP 崩溃）仍是当前代码库的紧迫需求。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 3 个 PR 状态变更为已关闭/已合并，主要集中在内存管理与连接稳定性方面：

*   **[CLOSED] PR #4554**: 修复了 Dream 模块创建重复技能的问题。通过引入写入保护机制，防止 AI 在生成技能时覆盖已有内容，提升了 Agent 自主进化的稳定性。
    *   链接: [HKUDS/nanobot PR #4554](https://github.com/HKUDS/nanobot/pull/4554)
*   **[CLOSED] PR #4441**: 修复了 MCP (Model Context Protocol) 重连失败导致的网关崩溃问题。解决了 `streamable_http_client` 在任务组退出时的异常，显著改善了长时间运行下的连接可靠性。
    *   链接: [HKUDS/nanobot PR #4441](https://github.com/HKUDS/nanobot/pull/4441)

**分析**：虽然合并数量较少，但这两个修复对系统的健壮性至关重要，分别解决了“记忆混乱”和“连接崩溃”两个核心痛点。

## 4. 社区热点
今日讨论最具深度的议题集中在架构扩展与文档一致性上：

*   **Issue #3436 [enhancement] Call external agent**: 这是一个长期活跃的架构级功能请求。用户希望 NanoBot 能作为调度器调用外部框架（如 OpenCode/Codex）而非仅依赖内部 Agent 逻辑。这反映了社区希望 NanoBot 向“编排层”演进的强烈诉求。
    *   链接: [HKUDS/nanobot Issue #3436](https://github.com/HKUDS/nanobot/issues/3436)
*   **Issue #4765 [bug] Nanobot object does not support the asynchronous context manager protocol**: 今日新开，直接指出了官方文档中的 Python SDK 示例代码无法运行，严重影响开发者入门体验。
    *   链接: [HKUDS/nanobot Issue #4765](https://github.com/HKUDS/nanobot/issues/4765)
*   **PR #4694 [bug, webui] fix(webui)**: 针对 WebUI 在移动端窄视口下的显示异常进行了修复，解决了长内容导致页面横向滚动的问题，直接提升了移动端用户体验。
    *   链接: [HKUDS/nanobot PR #4694](https://github.com/HKUDS/nanobot/pull/4694)

## 5. Bug 与稳定性
今日报告了多个影响严重的 Bug，部分已有修复 PR 待合并：

*   **[P0 Critical] SSRF 安全漏洞 (PR #4671)**:
    *   问题：DNS 重绑定攻击风险。
    *   状态：**Fix 已提交 (PR #4671)**。通过固定 DNS 解析 IP 来防止 SSRF 攻击，涉及 MCP HTTP 探测及 Web 获取模块。
    *   链接: [HKUDS/nanobot PR #4671](https://github.com/HKUDS/nanobot/pull/4671)
*   **[P1 High] Python SDK 异步协议错误 (Issue #4765)**:
    *   问题：文档示例代码运行报错 `object does not support the asynchronous context manager protocol`。
    *   状态：**Open**，目前尚无修复 PR。
    *   链接: [HKUDS/nanobot Issue #4765](https://github.com/HKUDS/nanobot/issues/4765)
*   **[P1 High] MCP 网关重连环崩溃 (PR #4764)**:
    *   问题：MCP 服务器空闲超时后重连导致网关崩溃。
    *   状态：**Fix 已提交 (PR #4764)**。隔离了重连取消作用域。
    *   链接: [HKUDS/nanobot PR #4764](https://github.com/HKUDS/nanobot/pull/4764)
*   **[P1 High] Windows 命令执行兼容性 (PR #4545)**:
    *   问题：Windows 下单行命令默认使用 `cmd.exe` 导致跨盘符 `cd` 失败及变量解析错误。
    *   状态：**Fix 已提交 (PR #4545)**，提议默认使用 PowerShell。
    *   链接: [HKUDS/nanobot PR #4545](https://github.com/HKUDS/nanobot/pull/4545)

## 6. 功能请求与路线图信号
社区正在积极推动多渠道适配和子智能体能力的增强：

*   **渠道扩展**:
    *   **PR #4459**: 新增 **Mattermost** 渠道支持（WebSocket + REST API），目前处于 Open 状态。这表明项目正努力覆盖更多企业级通讯平台。
    *   链接: [HKUDS/nanobot PR #4459](https://github.com/HKUDS/nanobot/pull/4459)
    *   **Issue #4702**: 请求支持 Telegram 自定义 API Base URL，以解决复杂网络环境下的连接问题。
    *   链接: [HKUDS/nanobot Issue #4702](https://github.com/HKUDS/nanobot/issues/4702)
*   **子智能体 增强**:
    *   **PR #4697**: 提出允许子智能体继承主智能体的 MCP 服务器配置，解决子智能体需重复实现工具的问题。这是向复杂 Agent 协作迈进的重要信号。
    *   链接: [HKUDS/nanobot PR #4697](https://github.com/HKUDS/nanobot/pull/4697)
    *   **PR #4623**: 允许在运行时覆盖子智能体的模型配置，提供了更灵活的资源调度能力。
    *   链接: [HKUDS/nanobot PR #4623](https://github.com/HKUDS/nanobot/pull/4623)
*   **外部 Agent 集成 (Issue #3436)**: 用户强烈呼吁支持调用 OpenCode/Codex 等外部框架作为底层 Worker，而非仅使用内部实现。这可能成为项目下一阶段架构重构的方向。

## 7. 用户反馈摘要
*   **文档与代码脱节**: 用户 @The-Markitecht 报告官方文档提供的 Python SDK 代码示例无法运行（Issue #4765），指出 Web UI 正常但 API 异步上下文管理器报错，这表明项目可能在重构过程中遗漏了文档同步。
*   **网络环境痛点**: 针对 Telegram 和 MCP 连接的多项 Issue/PR（Issue #4702, PR #4671）显示，用户普遍面临复杂的网络环境（代理、防火墙），对自定义 Endpoint 和 DNS 安全绑定的需求强烈。
*   **Windows 兼容性**: PR #4545 反映了 Windows 用户的常见痛点——默认 Shell 行为不一致导致脚本执行失败，社区倾向于统一使用 PowerShell 以解决此问题。

## 8. 待处理积压
*   **PR 积压预警**: 目前有 **18 个待合并 PR**，其中包括 6 月中旬提交的 PR #4353（语音转录修复）和 PR #4459（Mattermost 支持）。大量功能性 PR 处于挂起状态，建议维护者尽快安排 Code Review 以避免分支冲突和功能延期。
    *   链接: [HKUDS/nanobot Pull Requests](https://github.com/HKUDS/nanobot/pulls)
*   **长期未关闭 Issue**: Issue #3436（外部 Agent 调用）自 4 月开启至今，虽经多次讨论但尚未有明确的实现路径，建议将其纳入 Roadmap 进行明确规划。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-07-06)

## 1. 今日速览
ZeroClaw 项目今日保持高度活跃，过去24小时内共有 24 条 Issue 更新与 50 条 PR 更新。项目正处于架构优化与功能扩充并行的关键阶段，核心开发重点集中在 **Goal Mode（目标模式）的实现拆分**与 **SOP（标准作业程序）控制平面的完善**。社区对架构精简与兼容性扩展（如 OpenAI API 适配）表现出强烈兴趣。值得注意的是，今日修复了多个高危安全与稳定性问题，显示出团队对代码质量的严格把控。目前有 44 个待合并 PR，预示着下一个版本将包含大量新特性与重构。

## 2. 版本发布
过去24小时内无新版本发布。

## 3. 项目进展
尽管今日无新版本发布，但代码库合并活动频繁（6个 PR 已合并/关闭），且待合并队列庞大，主要进展如下：

*   **安全修复推进**：针对 Issue #8678 的高危权限绕过漏洞，PR #8747 已提交修复，增加了 SOP 运行状态的守卫检查，防止非预期的审批步骤跳过，目前正处于审查阶段。
*   **架构重构与体验优化**：PR #8746 正在解决 Goal Mode 的自恢复循环问题，提升了系统的稳定性。
*   **新渠道集成**：PR #8384 正在引入原生 Inkbox 渠道（支持邮件/SMS/语音/iMessage），这将极大地扩展 Agent 的触达能力。
*   **上下文管理优化**：PR #8313 提议将 Skills 默认为紧凑注入模式，旨在解决上下文窗口膨胀问题，这对长对话场景有重大意义。

## 4. 社区热点
今日讨论最活跃、关注度最高的议题主要集中在架构设计与兼容性扩展：

*   **[Issue #8681] Goal Mode 实现拆分追踪**：作为核心架构升级，该 Tracker 协调将已实现的 Goal-mode 代码拆分为可审查的 PR。这是目前项目开发的主线，涉及运行时和代理核心逻辑的重构。
*   **[Issue #6165] RFC: 核心轻量化与外部集成**：该议题再次活跃，讨论如何将非核心集成（如长尾工具）迁移至 MCP 或插件，以保持 ZeroClaw 核心的精简。这反映了社区对"核心边界"定义的持续关注。
*   **[Issue #8603] RFC: OpenAI Chat Completions 兼容适配器**：提议增加对 OpenAI API 格式的兼容，以便 LobeChat 等客户端可直接接入。这显示了用户希望 ZeroClaw 能更便捷地融入现有 AI 生态工具链的强烈诉求。
*   **[Issue #8313] Skills 默认紧凑注入**：该 PR 引发了关于上下文管理策略的讨论，决定弃用"全量注入"模式，转向按需加载，这被视为提升大模型利用效率的关键一步。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，其中包含高危安全问题，部分已有修复方案：

*   **[P1 | 高危] SOP 审批门控绕过漏洞 (Issue #8678)**：
    *   **问题**：驱动程序可通过 `sop_advance` 绕过 `WaitingApproval` 状态直接推进运行。
    *   **状态**：已接受，**Fix PR #8747** 已提交，正在审查中。
*   **[P1 | 高危] MCP 僵尸进程问题 (Issue #8731)**：
    *   **问题**：基于 Stdio 的 MCP 服务器在执行结束或超时后未被正确回收，导致僵尸进程累积，可能导致系统资源耗尽。
    *   **状态**：已接受，暂无修复 PR。
*   **[P1 | 严重] Browser_open 挂起 (Issue #8560)**：
    *   **问题**：在无显示环境或启动器前台阻塞时，Agent 会无限挂起，导致工作流卡死。
    *   **状态**：已接受，暂无修复 PR。
*   **[P1 | 高危] 配置初始化错误 (Issue #8718)**：
    *   **问题**：`zeroclaw config init` 生成的模板会被守护进程拒绝，导致语音转录功能静默失效。
    *   **状态**：已接受。
*   **[P2 | 中危] Bedrock Nova 2 Lite 缓存报错 (Issue #8720)**：
    *   **问题**：特定模型配置不支持缓存点导致随机报错，用户请求通过配置禁用缓存。

## 6. 功能请求与路线图信号
结合 Issues 与活跃 PRs，以下功能信号强烈，极可能纳入下一版本：

*   **SOP 可视化编辑器 (Issue #8736)**：正在追踪 `feat/sop-authoring` 分支，计划引入节点图编辑器与无损往返编辑能力，标志着 ZeroClaw 正从纯代码编排向可视化编排演进。
*   **OpenAI API 兼容层 (Issue #8603)**：虽然目前仅为 RFC，但鉴于社区对多客户端接入的需求，预计将成为近期开发重点。
*   **模型上下文窗口监控 (PR #7946)**：将在 Gateway 和 TUI 中增加 Context Usage 进度条，完善可观测性体验。
*   **更严格的存储配置校验 (PR #8725)**：Webhook Channel 将强制要求配置 Secret 才能启动，提升了默认安全基线。

## 7. 用户反馈摘要
从 Issues 评论中提炼出以下真实痛点：

*   **部署与配置摩擦**：用户在 Android Termux (Issue #7911) 和特定云模型配置 (Issue #8720) 上遇到阻碍，反映出项目在跨平台兼容性和配置容错性上仍有改进空间。
*   **安全误报干扰**：高熵检测器误将生成的文件名识别为敏感信息进行涂黑 (Issue #8722)，影响了 Agent 生成代码或文件的可用性，用户希望有更智能的白名单机制。
*   **生态集成需求**：用户强烈希望能直接通过 OpenAI 协议对接现有 Chat UI (Issue #8603)，而不必等待官方开发专门的适配器。

## 8. 待处理积压
以下重要议题长期未获解决或近期停滞，建议维护者关注：

*   **[Issue #6165] 核心轻量化 RFC**：作为高影响力架构提案，讨论周期已超 2 个月，需尽快推进至决策阶段以指导后续开发。
*   **[Issue #6715] 清理无用分支**：仓库存在 200+ 个僵尸分支，影响仓库整洁度，目前处于 Blocked 状态，建议重新评估优先级。
*   **[Issue #7911] Android Termux 支持**：该支持请求已标记为 Blocked 且需要作者行动，但长期无更新，可能流失部分边缘场景用户。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-07-06)

## 1. 今日速览
Hermes Agent 项目今日保持**高热度开发状态**，社区互动频繁。过去 24 小时内共有 50 条 Issues 更新（其中 12 条已关闭）和 50 条 PR 更新，但仅有 2 条 PR 显示为合并/关闭状态，表明项目正处于**新功能集中开发与修复冲刺阶段**，存在一定的代码积压。今日亮点在于核心性能优化的突破（首 Token 延迟降低 80%），同时暴露出 Gateway 启动与 MCP 连接稳定性的若干关键问题。整体来看，项目在积极解决多平台适配（Telegram, WhatsApp, Feishu）与本地模型支持的痛点，但需关注 PR 合并速度以避免分支碎片化。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
尽管今日合并数较少，但提交的 PR 质量极高，主要集中在**稳定性修复**、**安全性增强**与**性能优化**三个方向，显示出项目正在为下一个版本进行大量铺垫工作：

*   **性能突破：** PR [#59332](https://github.com/NousResearch/hermes-agent/pull/59332) 提出了一项重大优化，通过优化初始化流程，将首 Token 时间（TTFT）降低了约 80%，显著改善用户体验。
*   **安全与配置修复：** 针对多路复用模式下的安全隔离问题，PR [#59330](https://github.com/NousResearch/hermes-agent/pull/59330) 修复了配对白名单的隔离缺陷；PR [#59338](https://github.com/NousResearch/hermes-agent/pull/59338) 修复了文件搜索中可能泄露敏感 `/proc` 路径的问题；PR [#59337](https://github.com/NousResearch/hermes-agent/pull/59337) 加固了安全配置变更的权限检查。
*   **关键 Bug 修复：** PR [#59310](https://github.com/NousResearch/hermes-agent/pull/59310) 修复了多路复用模式下响应路由错误的严重 Bug；PR [#58144](https://github.com/NousResearch/hermes-agent/pull/58144) 修复了视频分析工具在特定 Provider 下崩溃的问题；PR [#59346](https://github.com/NousResearch/hermes-agent/pull/59346) 解决了 MCP 工具探测超时逻辑不合理的问题。
*   **平台适配优化：** PR [#48819](https://github.com/NousResearch/hermes-agent/pull/48819) 增强了 Telegram 消息入站的处理逻辑，防止消息分片导致的处理错误；PR [#59336](https://github.com/NousResearch/hermes-agent/pull/59336) 为 Telegram webhook 启动增加了超时限制，防止启动挂起。

## 4. 社区热点
今日社区讨论焦点集中在本地模型支持与网络配置体验上：

*   **[Feature]: Claude Agent SDK model provider with subscription OAuth** ([#25267](https://github.com/NousResearch/hermes-agent/issues/25267))
    *   **热度：** 👍 41, 评论 9
    *   **分析：** 用户强烈希望 Hermes 能直接支持 Claude 的订阅制 OAuth 登录，而非仅支持按量付费的 API Key。这反映了用户“降本增效”的强烈诉求，避免为已订阅的服务二次付费。
*   **[Feature]: Expose model_switch as an agent-callable tool** ([#16525](https://github.com/NousResearch/hermes-agent/issues/16525))
    *   **热度：** 评论 9
    *   **分析：** 该已关闭 Issue 讨论了让 Agent 根据任务复杂度自主切换模型的功能。这表明用户对 Agent 的自主性和智能化调度有更高要求，不再满足于手动切换模型。
*   **[Feature] dashboard: add --allowed-hosts flag** ([#34390](https://github.com/NousResearch/hermes-agent/issues/34390))
    *   **热度：** 评论 9
    *   **分析：** 用户在使用反向代理（如 Tailscale, Nginx）访问 Dashboard 时遇到 Host Header 校验拦截，该需求呼声较高，涉及到生产环境部署的便利性。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，主要集中在会话连接与上下文处理：

*   **P1 - 严重:**
    *   **Telegram Gateway 启动挂起** ([#59202](https://github.com/NousResearch/hermes-agent/issues/59202))：容器启动时首次连接尝试可能无限挂起，未触发超时机制，导致服务不可用。
    *   **Google Chat 会话加载失败** ([#59322](https://github.com/NousResearch/hermes-agent/issues/59322))：v0.18.0 引入的安全路径检查误伤了 Google Chat 的会话键，导致所有会话无法加载。

*   **P2 - 高优先级:**
    *   **Ollama 上下文长度被强制限制** ([#43900](https://github.com/NousResearch/hermes-agent/issues/43900))：本地 Ollama 模型被强制限制在 4096 Token，导致长文本任务被截断或输出乱码，严重影响本地模型体验。
    *   **Session 陷入 Stream Stale 死循环** ([#58962](https://github.com/NousResearch/hermes-agent/issues/58962))：OpenAI 兼容 Provider 在流式传输超时后进入无限重试循环，无法自动恢复。
    *   **MCP 客户端永久放弃重连** ([#57129](https://github.com/NousResearch/hermes-agent/issues/57129))：MCP 服务端在短暂断连后，客户端重试 5 次失败便永久放弃，需重启进程。

*   **已有修复 PR 的 Bug:**
    *   针对 MCP 连接与重连机制问题，已有 PR [#59331](https://github.com/NousResearch/hermes-agent/pull/59331) 提交修复，等待合并。
    *   针对 Dashboard 反向代理问题，已有 Issue [#34390](https://github.com/NousResearch/hermes-agent/issues/34390) 讨论中。

## 6. 功能请求与路线图信号
*   **智能模型路由：** Issue [#16525](https://github.com/NousResearch/hermes-agent/issues/16525) 的讨论表明，基于任务复杂度的动态模型路由（自主切换模型）可能成为下一个版本的亮点功能。
*   **多模态视频分析增强：** PR [#58144](https://github.com/NousResearch/hermes-agent/pull/58144) 正在修复视频分析工具，暗示项目将加强对视频流 URL 的原生支持（通过 yt-dlp），扩展多模态能力。
*   **本地记忆增强：** Issue [#38552](https://github.com/NousResearch/hermes-agent/issues/38552) 提出的“自动工作区记忆”提案获得关注，旨在解决 Agent 跨会话记忆问题，是提升 Agent 实用性的关键方向。

## 7. 用户反馈摘要
*   **痛点：本地模型支持不完善。** 多个 Issue 反映 Ollama 本地模型存在上下文截断、连接不稳定等问题，显示用户对“私有化部署”的高期待与现实差距。
*   **痛点：多平台接入配置繁琐。** 反向代理设置、OAuth 认证超时、特定平台（QQ, Feishu）的适配问题频出，增加了运维成本。
*   **满意点：** 用户对 Hermes 的架构灵活性表示认可，尤其是对 MCP 协议的支持，但希望连接稳定性进一步提升。
*   **具体反馈：** 有用户报告桌面端粘贴图片时仅发送路径而非图片数据 ([#41556](https://github.com/NousResearch/hermes-agent/issues/41556))，影响了多模态交互体验。

## 8. 待处理积压
*   **长期未解决的关键 PR：** PR [#6234](https://github.com/NousResearch/hermes-agent/pull/6234)（Gateway 429 冷却优化）自 4 月创建至今未合并，可能影响生产环境下的高并发稳定性，建议维护者优先审视。
*   **MCP 连接健壮性：** Issue [#38488](https://github.com/NousResearch/hermes-agent/issues/38488) 指出的 MCP 服务端瞬断后永久失联问题虽有相关 PR，但此类连接池管理的缺陷对用户体验打击较大，需持续关注修复进度。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 (2026-07-06)

## 1. 今日速览
PicoClaw 项目在过去 24 小时内保持了平稳的开发维护节奏，主要集中在代码重构与依赖更新上。项目共处理了 5 个 Pull Requests，其中 1 个已关闭，4 个待合并，无新版本发布。社区活跃度适中，重点关注安全性议题，出现了一个标为 `priority: high` 的功能请求，要求替换不再维护的加密库。整体来看，项目正处于积极清理技术债务与优化工具链的阶段。

## 2. 版本发布
本统计周期内无新版本发布。

## 3. 项目进展
今日项目代码库主要有以下推进：
*   **代码清理与重构**：提交了针对 Delta Chat 模块的重构 PR ([#3222](sipeed/picoclaw PR #3222))，删除了 320 行遗留代码，优化了配置方式，提升了代码整洁度。
*   **依赖维护**：发起了 Docker 基础镜像版本升级 PR ([#3192](sipeed/picoclaw PR #3192))，旨在保持构建环境的一致性；同时清理了 `.gitignore` 中的重复项 ([#3191](sipeed/picoclaw PR #3191))。
*   **问题关闭**：关闭了一个关于 LINE channel 错误处理的 PR ([#3189](sipeed/picoclaw PR #3189))，该 PR 状态标记为 `[stale]`，可能因长期未更新或议题失效而被关闭。

## 4. 社区热点
今日最受关注的议题是 **[Feature] use vodozemac instead of libolm** ([#3088](sipeed/picoclaw Issue #3088))。
*   **状态**：Open
*   **热度**：评论 6 条，获赞 2 次。
*   **分析**：该 Issue 指出当前使用的 `libolm` 已不再维护且存在安全隐患，建议迁移至官方推荐的 `vodozemac`。由于涉及核心加密库的替换，且被标记为 `priority: high` 和 `help wanted`，这表明项目在安全性方面面临紧迫的升级需求，且目前缺乏足够的开发者力量来迅速推进，急需社区贡献者介入。

## 5. Bug 与稳定性
今日报告的问题主要集中在功能逻辑与安全性迁移上：
*   **严重/高危 (安全性)**：Issue [#3088](sipeed/picoclaw Issue #3088) 指出依赖库 `libolm` 不安全且无人维护，属于潜在的安全隐患，目前尚无修复 PR，属于积压的高优先级任务。
*   **中等 (工具行为)**：PR [#3226](sipeed/picoclaw PR #3226) 修复了 `write_file` 工具的一个逻辑缺陷。该工具之前的提示词逻辑会引导模型错误地覆盖文件（如 memory/MEMORY.md），存在破坏用户数据的风险。目前已有修复 PR 提交，等待合并。

## 6. 功能请求与路线图信号
*   **核心加密库迁移**：Issue [#3088](sipeed/picoclaw Issue #3088) 明确了将加密库从 `libolm` 迁移到 `vodozemac` 的需求，并建议在编译时将 libolm 设为可选。这是项目未来版本必须攻克的技术难点，直接影响项目的安全合规性。
*   **Delta Chat 功能优化**：PR [#3222](sipeed/picoclaw PR #3222) 显示项目正在重构 Delta Chat 的实现，移除了基于密码的邮件配置，转而要求使用 jsonrpc secrets，并修正了 `invite_link` 的命名。这预示着下一版本在配置安全性和 API 规范性上将有所提升。

## 7. 用户反馈摘要
从 Issue [#3088](sipeed/picoclaw Issue #3088) 的讨论中可以看出，用户对项目的**安全性**非常敏感，主动提出了依赖库过时的问题，显示出核心用户群体具备较高的技术素养。从 PR [#3226](sipeed/picoclaw PR #3226) 的描述中可以提炼出痛点：AI 智能体在使用文件写入工具时，现有的提示词逻辑容易诱导模型进行破坏性覆盖，这对用户的持久化记忆（Memory）造成了困扰，该修复反映了用户对**AI 行为可控性与数据安全性**的强烈诉求。

## 8. 待处理积压
*   **高优先级安全议题**：Issue [#3088](sipeed/picoclaw Issue #3088) 创建于 6 月 9 日，距今已近一个月，虽保持活跃但尚未解决。鉴于其 `priority: high` 标签，建议维护者尽快评估迁移方案或引导社区力量介入。
*   **待合并 PRs**：目前有 4 个 PR 处于 Open 状态，其中包括 2 个 Chore 类型的清理 PR ([#3191](sipeed/picoclaw PR #3191), [#3192](sipeed/picoclaw PR #3192)) 创建于 6 月 27 日，积压约一周，建议维护者及时合并以保持主分支清洁。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-07-06)

## 1. 今日速览
NanoClaw 项目今日呈现出“静默式推进”的态势，虽然 Issue 板块无新增动态，但代码提交端表现活跃。过去 24 小时内共有 5 个 PR 更新，其中 3 个关键特性 PR 已合并/关闭，主要集中在 **Agent 模板机制** 与 **安全护栏** 两个核心领域。这标志着项目在“易用性引导”和“生产级安全控制”两方面迈出了坚实一步。目前有 2 个功能性 PR 处于待合并状态，项目健康度良好，正处于功能迭代的关键上升期。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 3 个 PR 被合并或关闭，显著推进了以下功能模块：

*   **Agent 模板与初始化流程完善**：
    *   PR [#2908](https://github.com/nanocoai/nanoclaw/pull/2908) **[CLOSED]**：实现了 Codex provider 对 Agent Templates 的端到端支持，包括 Persona 前置注入和 Git 无关的技能发现机制。这使得模板代理功能在特定提供商下真正可用。
    *   PR [#2766](https://github.com/nanocoai/nanoclaw/pull/2766) **[CLOSED]**：添加了 `.format-lint-off` 配置，优化了通道配置的规范性与开发体验。

*   **安全性与治理能力升级**：
    *   PR [#2726](https://github.com/nanocoai/nanoclaw/pull/2726) **[CLOSED]**：新增 `/add-guardrails` 技能，引入了针对代理组的输入/输出确定性护栏。该功能支持正则规则拦截（如防 Prompt 注入、凭证泄露检测），并具备“故障关闭”安全机制。这是项目向企业级应用场景迈出的重要一步。

## 4. 社区热点
今日社区讨论主要集中在代码贡献层面，Issues 区无新增讨论。
*   **关注点**：PR 活动显示社区（特别是核心贡献者）正集中精力完善 **Setup Wizard（设置向导）** 和 **Provider 适配**。
*   **待观察 PR**：
    *   PR [#2949](https://github.com/nanocoai/nanoclaw/pull/2949) **[OPEN]**：由社区成员 @javexed 提交的 LiteLLM 模型路由器集成。该工具旨在无缝对接本地服务器与多模型，反响值得关注。
    *   PR [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) **[OPEN]**：模板设置流程的第二部分，涉及首个代理的“盖印”流程，是降低用户上手门槛的关键更新。

## 5. Bug 与稳定性
*   过去 24 小时内无新增 Bug 报告或崩溃反馈。
*   今日合并的代码中未提及破坏性变更，#2726 引入的护栏功能默认采用安全优先策略，有助于提升系统整体稳定性。

## 6. 功能请求与路线图信号
根据现有 PR 动态，可以推断出项目近期的路线图重点：
1.  **多模型路由支持**：PR [#2949](https://github.com/nanocoai/nanoclaw/pull/2949) 表明项目正在寻求更灵活的底层模型接入方案，特别是本地服务器支持。预计该功能将在近期合并。
2.  **新手引导体验优化**：PR [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) 持续推进 Setup Wizard，显示出项目方致力于解决“首次启动体验”痛点，目标是实现零代码/低代码的代理创建流程。

## 7. 用户反馈摘要
由于今日无 Issue 更新及 PR 新增评论，暂无直接的用户文字反馈可供提取。但从 PR 提交者的意图分析：
*   **痛点**：用户可能面临模型切换繁琐、本地环境配置困难的问题（由 #2949 提案推测）。
*   **痛点**：企业级用户对数据泄露和 Prompt 注入存在安全顾虑（由 #2726 解决方案推测）。

## 8. 待处理积压
建议维护者关注以下长期未决或刚提交的 PR，避免积压：

*   **PR [#2949](https://github.com/nanocoai/nanoclaw/pull/2949) [OPEN]**：LiteLLM 集成。这是一个高价值的 Utility Skill，建议尽快评审并推进合并，以丰富模型的连接能力。
*   **PR [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) [OPEN]**：模板设置流。作为“Agent Templates”系列的第二部分，依赖前置逻辑，建议尽快合并以打通完整的新手引导链路。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-07-06)

## 1. 今日速览
IronClaw 项目今日保持极高的开发活跃度，共更新 31 个 Pull Requests，其中 27 个处于待合并状态，显示出团队正在大力推进功能迭代。核心焦点集中在 **Slack 集成的重构与安全性增强**（Stack 系列更新）以及 **AI Agent 核心循环的稳定性修复**。虽然今日无正式版本发布，但已有 Release PR (#5598) 处于待合并状态，预示着包含破坏性变更的 v0.29.1 版本即将发布。社区层面，安全性与权限控制的讨论热度较高，且发现了移动端 UI 的严重布局问题。

## 2. 版本发布
今日无新版本正式发布，但存在关键版本更新动态：
*   **即将发布**: PR [#5580](https://github.com/nearai/ironclaw/pull/5580) 处于待合并状态，预计发布 `ironclaw v0.29.1`。
    *   **重要变更**: 包含多个 crate 的 API 破坏性变更（`ironclaw_common`, `ironclaw_skills`）。
    *   **迁移注意**: 用户需关注 API 兼容性调整，特别是 Skill 相关接口的变更。

## 3. 项目进展
今日项目在 **架构重构** 与 **稳定性修复** 两条主线上取得了显著进展：

*   **Slack 集成大重构**: 推进了 "Model-B" 重构计划，旨在将 Bot Channel 作为入口并引入可安装的用户令牌工具扩展。
    *   PR [#5670](https://github.com/nearai/ironclaw/pull/5670) (Stack 6/7) 实现了最小权限 Slack 工具范围，解决了只读用户也被授予 `chat:write` 权限的安全隐患。
    *   PR [#5668](https://github.com/nearai/ironclaw/pull/5668) (Stack 5/7) 重塑了 Slack 模型，移除了隐藏的 "companion" 机制。
    *   PR [#5645](https://github.com/nearai/ironclaw/pull/5645) (Stack 3/4) 用个人 OAuth 流程替换了配对码机制。
*   **Agent 智能体稳定性增强**: 修复了多个可能导致 Agent 陷入死循环或解析失败的关键问题。
    *   PR [#5666](https://github.com/nearai/ironclaw/pull/5666) 引入了“纠正性轻推”机制，打破 Agent 重复调用相同工具的死循环。
    *   PR [#5665](https://github.com/nearai/ironclaw/pull/5665) 修复了 LLM 提供商返回的损坏 JSON 工具调用参数，提高了跨模型兼容性。
*   **WebChat v2 体验优化**: 修复了多个影响使用的 UI 问题。
    *   PR [#5589](https://github.com/nearai/ironclaw/pull/5589) 修复了终端快捷键遮挡聊天输入框的问题。
    *   PR [#5593](https://github.com/nearai/ironclaw/pull/5593) 修复了自动化运行页面因等待线程附加而卡住的问题。
*   **已关闭/放弃的工作**:
    *   PR [#5667](https://github.com/nearai/ironclaw/pull/5667)（优化 Postgres 延迟）已被作者关闭，计划拆分为更小的 PR 进行提交。

## 4. 社区热点
今日讨论焦点围绕 **权限安全** 与 **Agent 行为控制** 展开：

*   **[Issue #5669](https://github.com/nearai/ironclaw/issues/5669) - Slack 最小权限请求**: 作者 @BenKurrek 指出当前 Slack OAuth 授予了过多的写权限，即便是只读用户也被迫授权 `chat:write`。这反映了项目对安全性和最小权限原则的重视，该 Issue 已直接催生了 PR #5670 的实现。
*   **[Issue #5647](https://github.com/nearai/ironclaw/issues/5647) - 桥接工具披露缺陷**: @henrypark133 发现当工具目录超过 32 个时，合成的能力 ID 未被正确包含在授权集中，导致潜在的权限逃逸风险。这是一个深层次的技术债问题，正在被积极追踪。
*   **[PR #5666](https://github.com/nearai/ironclaw/pull/5666) - Agent 循环打断机制**: 社区对解决 Agent "痴呆"（反复调用同一工具失败）的问题表现出高度关注，该 PR 提供了一种轻量级的干预方案。

## 5. Bug 与稳定性
今日报告了数个影响用户体验的 Bug，其中 UI 问题较为突出：

*   **严重 (P2)** - **移动端布局溢出**: [Issue #5554](https://github.com/nearai/ironclaw/issues/5554) 报告移动端聊天布局在长内容下出现横向滚动条，导致 UI 元素错位。目前暂无关联 Fix PR。
*   **中等 (P3)** - **Logs 页面深度链接失效**: [Issue #5557](https://github.com/nearai/ironclaw/issues/5557) 指出从 Routine Run 打开 Logs 链接需点击两次才能加载正确的对话。目前暂无关联 Fix PR。
*   **逻辑故障** - **工具调用参数损坏**: [PR #5665](https://github.com/nearai/ironclaw/pull/5665) 修复了 OpenAI 兼容提供商泄露原生 XML 格式导致 JSON 解析失败的问题。
*   **持续性问题** - **Nightly E2E 失败**: [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) 显示 E2E 测试再次失败，表明测试套件的不稳定性仍是亟待解决的维护难题。

## 6. 功能请求与路线图信号
*   **安全合规路线**: Issue #5669 和 Issue #5647 暗示项目正在进行全面的安全合规审查，特别是针对 OAuth 授权范围和工具能力边界的精细化控制。这将是下一阶段迭代的重点。
*   **内部测试基础设施**: PR #5580 添加了 IronLoop 配置，表明团队正在搭建内部 Dogfood 环境，以便进行小范围的手动测试，这通常预示着大规模功能发布前的最后稳定阶段。
*   **Agent 容错性**: PR #5666 和 PR #5663（Prompt context 增强）显示出路线图正从单纯的“功能开发”转向“生产级容错与稳定性”。

## 7. 用户反馈摘要
从 Issue 讨论中提炼出以下用户痛点：
*   **移动端体验不佳**: 用户在使用移动设备访问 WebChat v2 时，经常遇到内容溢出和排版错乱，影响了日常使用。
*   **权限焦虑**: 高级用户对 Slack 集成请求过多的 OAuth 权限表示担忧，希望实现更细粒度的权限控制（只读 vs 写入）。
*   **Agent 稳定性**: 在使用不同模型提供商（如通过 OpenRouter）时，偶尔会遇到工具调用解析失败或 Agent 陷入死循环的情况，需要人工干预。

## 8. 待处理积压
*   **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108) - Nightly E2E 失败**: 自 5 月底创建以来，该问题持续活跃但未得到根本解决，建议维护者优先排查 CI/CD 管道的稳定性。
*   **[Issue #5657](https://github.com/nearai/ironclaw/issues/5657) - 测试覆盖率统计**: 涉及 v1-only crates 的豁免逻辑，属于代码质量维护的技术债，需要跟进处理以避免未来覆盖率计算偏差。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-07-06)

## 1. 今日速览
今日 LobsterAI 项目整体活跃度适中，主要工作集中在功能增强与用户体验优化上。过去24小时内无新开 Issue，社区反馈通道较为平静；PR 活动显著，共有 4 条更新，其中 2 条已顺利合并，显示出核心开发团队正在稳步推进功能迭代。重点进展包括协作主页的交互优化、计划任务界面的重构以及邮件技能的多账户支持开发，整体项目健康度良好，处于积极演进阶段。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 2 个 PR 成功合并/关闭，显著提升了前端交互体验与功能完整度：

*   **协作主页体验升级**：PR [#2274](https://github.com/netease-youdao/LobsterAI/pull/2274) 已合并。该更新为 Cowork 主页引入了基于时间的智能问候语和“近期任务”快速入口，优化了快速操作按钮的悬停反馈。这标志着项目在人性化交互和用户粘性设计上迈出了实质性一步。
*   **计划任务 UI 重构**：PR [#2273](https://github.com/netease-youdao/LobsterAI/pull/2273) 已关闭。本次更新重新设计了任务列表卡片，新增状态标签、开关控件、搜索功能及乐观 UI 反馈机制。此举大幅优化了任务管理的可视化程度与操作流畅度。

此外，PR [#2275](https://github.com/netease-youdao/LobsterAI/pull/2275) 已开启，正在审查中，预计将带来内置邮件技能的多账户支持及完整的设置管理界面，是一个重要的功能性更新。

## 4. 社区热点
由于今日无新开 Issue，社区热点主要集中在待处理的 PR 上：

*   **[待合并] 邮件多账户支持**：PR [#2275](https://github.com/netease-youdao/LobsterAI/pull/2275) 提议为内置 `imap-smtp-email` 技能增加多账户支持。该功能迎合了用户同时管理多个邮箱的高频需求，包含连接性测试、预设配置等实用特性，且保留了对旧版单账户配置的兼容性，预计合并后将显著提升助手的实用性。
*   **[长期关注] POPO 连接验证修复**：PR [#1349](https://github.com/netease-youdao/LobsterAI/pull/1349) 在沉寂一段时间后于昨日更新。该 PR 旨在修复 POPO 连接测试的一个关键逻辑漏洞，引发了维护者的重新关注。

## 5. Bug 与稳定性
今日无新报告 Bug。但在历史 PR 中发现一处稳定性相关的修复正在推进：

*   **[中等] POPO 连接测试验证失效**：PR [#1349](https://github.com/netease-youdao/LobsterAI/pull/1349) 指出当前 POPO 连接测试存在逻辑缺陷，无论凭据是否正确均显示“验证通过”。该 PR 已提交真实 API 调用验证逻辑，目前状态为 Open，等待合并以修复此安全隐患。

## 6. 功能请求与路线图信号
*   **多账户管理能力**：从 PR [#2275](https://github.com/netease-youdao/LobsterAI/pull/2275) 可以看出，项目正致力于增强 AI 助手对多实例、多账户场景的支持能力，这可能是未来版本的重要方向。
*   **主动式 UI 反馈**：PR [#2273](https://github.com/netease-youdao/LobsterAI/pull/2273) 和 [#2274](https://github.com/netease-youdao/LobsterAI/pull/2274) 均涉及 UI 的即时反馈与智能展示，表明路线图正侧重于提升前端交互的细腻度与智能化水平。

## 7. 用户反馈摘要
今日无新增 Issue 评论或用户反馈。

## 8. 待处理积压
*   **长期未合并 PR 提醒**：PR [#1349](https://github.com/netease-youdao/LobsterAI/pull/1349)（fix(im): add real API validation for POPO connectivity test）创建于 2026 年 4 月，距今已逾 3 个月。该修复解决了 POPO 凭据校验形同虚设的问题，建议维护者优先 Review 并合并，以免影响企业内部通讯集成的稳定性。

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

# CoPaw 项目动态日报 (2026-07-06)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持高度活跃，社区反馈热烈。过去24小时内新增/活跃 Issue 19 条，PR 更新 16 条，显示 V2.0 Beta 版本正在经历密集的用户测试与迭代。项目重心目前明显向 **桌面端 迁移** 与 **多渠道集成稳定性** 倾斜。虽然无新版本发布，但多个关键 Bug 的修复 PR 已提交，特别是针对 Agent 挂起、API 路由冲突等阻断性问题的修复进展顺利，整体处于“快速修复与架构优化”阶段。

## 2. 版本发布
*   **无新版本发布**。
*   注：当前社区主要关注点集中在 `v2.0.0b2` Beta 版本的测试反馈，以及 `v1.1.12.post2` 稳定版的问题修复。

## 3. 项目进展
今日共有 5 个 PR 关闭/合并，显著提升了系统稳定性与架构现代化程度：

*   **[Merged] 修复 Agent 挂起顽疾**：PR #5749 通过引入消费者超时和 typing 指示器自动停止机制，彻底解决了 Issue #5748 中提到的 Agent 因工具调用异常导致无限挂起的问题，增强了多渠道（如微信）的鲁棒性。
    *   链接: [PR #5749](https://github.com/agentscope-ai/QwenPaw/pull/5749)
*   **[Merged] 插件系统增强**：PR #4804 引入了 Prompt Section Registry，允许插件在定义的锚点注入系统提示词，无需 Monkey-patch，为 V2.0 的插件生态奠定了基础。
    *   链接: [PR #4804](https://github.com/agentscope-ai/QwenPaw/pull/4804)
*   **[Merged] 文档更新**：PR #5752 补充了 V1 到 V2 的插件迁移指南，降低了开发者的升级门槛。
    *   链接: [PR #5752](https://github.com/agentscope-ai/QwenPaw/pull/5752)
*   **[Merged] 桌面端打包修复**：PR #5794 修复了桌面端打包缺少 ACP 模块的问题，确保 delegate_external_agent 功能正常。
    *   链接: [PR #5794](https://github.com/agentscope-ai/QwenPaw/pull/5794)

**待合并重点 PR：**
*   **[Open] 桌面端架构迁移**：PR #5734 正在将桌面发布流水线切换至 Tauri，预示着 CoPaw 将拥有更轻量、原生的桌面体验。
    *   链接: [PR #5734](https://github.com/agentscope-ai/QwenPaw/pull/5734)
*   **[Open] 上下文策略优化**：PR #5765 修复了 scroll 策略可能导致当前用户请求被错误逐出上下文的问题，正在审查中。
    *   链接: [PR #5765](https://github.com/agentscope-ai/QwenPaw/pull/5765)

## 4. 社区热点
今日讨论热度最高的问题集中在 **多渠道集成体验** 与 **UI 细节打磨**：

*   **[Issue #5757] 飞书消息不回复**：评论数 5 条。Docker 版与平台版均出现“首条回复后无响应”的现象，涉及飞书通道的连接保持问题，引发多位用户共鸣。
    *   链接: [Issue #5757](https://github.com/agentscope-ai/QwenPaw/issues/5757)
*   **[Issue #5779] Cron 任务时区问题**：评论数 3 条。API 返回 UTC 时间而非配置时区时间，PR #5783 已提出修复方案，讨论集中在时间格式的规范上。
    *   链接: [Issue #5779](https://github.com/agentscope-ai/QwenPaw/issues/5779)
*   **[Issue #5780] 团队多用户管理需求**：评论数 1 条。用户呼吁支持多账户权限管理，反映 CoPaw 正从个人工具向团队协作平台演进的强烈需求。
    *   链接: [Issue #5780](https://github.com/agentscope-ai/QwenPaw/issues/5780)
*   **[Issue #5767] 架构瓶颈讨论**：获得 1 个赞。指出当前 Console SDK 的“单会话 pull”模型阻碍了多 Agent/多工作空间的演进，属于深层次架构反馈。
    *   链接: [Issue #5767](https://github.com/agentscope-ai/QwenPaw/issues/5767)

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，主要集中在 V2.0 Beta 版本的前后端协同与渠道兼容性：

**高优先级 (影响核心功能):**
1.  **[Bug] 飞书通道中断 (#5757)**：机器人收到消息但无响应，阻塞生产环境使用。目前暂无修复 PR。
2.  **[Bug] Agent 无限挂起 (#5748)**：工具调用失败导致消费者线程卡死。**已修复 (PR #5749)**。
3.  **[Bug] API 路由 404 (#5769)**：V2.0.0b2 前端请求出现双重 `/api` 前缀，导致功能不可用。
    *   链接: [Issue #5769](https://github.com/agentscope-ai/QwenPaw/issues/5769)

**中等优先级 (UI/交互/特定场景):**
*   **[Bug] 前端压缩阈值显示错误 (#5784)**：同名模型跨 Provider 时 UI 取值错误。PR #5786 已包含修复。
    *   链接: [Issue #5784](https://github.com/agentscope-ai/QwenPaw/issues/5784)
*   **[Bug] 移动端 WebUI 底部截断 (#5787)**：所有页面底部内容被遮挡，严重影响移动端体验。
    *   链接: [Issue #5787](https://github.com/agentscope-ai/QwenPaw/issues/5787)
*   **[Bug] Google Gemini 兼容性问题 (#5774, #5782)**：涉及格式端点报错及 Embedding 返回值解析错误。
    *   链接: [Issue #5774](https://github.com/agentscope-ai/QwenPaw/issues/5774)
*   **[Bug] Cron 时区错误 (#5779)**：已提交修复 PR #5783。
    *   链接: [PR #5783](https://github.com/agentscope-ai/QwenPaw/pull/5783)

## 6. 功能请求与路线图信号
*   **团队协作功能**：Issue #5780 提出的多账户管理需求，表明用户开始尝试将 CoPaw 应用于团队场景。鉴于目前 PR #5734 正在重构桌面端，短期内可能侧重于单人体验，但中长期路线图应考虑多租户支持。
*   **用户体验精细控制**：Issue #5797 (定时任务弹窗开关) 和 #5793 (时间戳常驻显示) 反映了用户对 UI 交互细节的定制化需求。社区反馈“一刀切”的策略不够灵活，建议在控制台设置中增加更多开关。
*   **离线模式支持**：Issue #5781 指出 Coding 模式在离线环境下无法预览文件，提示开发者需要优化资源加载策略以支持内网/离线场景。

## 7. 用户反馈摘要
*   **V2.0 Beta 体验反馈**：用户对 V2.0 充满期待 (Issue #5770)，但目前的 Beta 版本存在明显的路由配置缺陷 (#5769)，导致前端报错，影响了尝鲜体验。
*   **移动端适配痛点**：移动端 WebUI 底部按钮不可见 (#5787)，触屏设备无法查看时间戳 (#5793)，说明移动端适配目前是短板。
*   **渠道稳定性**：飞书 (#5757) 和 Google Gemini (#5774) 的接入问题表明，非 OpenAI 标准渠道的兼容性仍需加强。
*   **正面评价**：用户对 Agent 挂起问题的修复 (#5749) 表示认可，认为这解决了长期存在的痛点。

## 8. 待处理积压
*   **[PR #5734] Tauri 桌面端迁移**：该 PR 已开启数日，涉及构建流水线重大变更，需维护者优先 Review 以推进桌面端发布。
    *   链接: [PR #5734](https://github.com/agentscope-ai/QwenPaw/pull/5734)
*   **[Issue #5757] 飞书不回复问题**：作为高热度且影响生产环境的问题，目前尚未见官方回复或修复 PR，建议优先排查。
    *   链接: [Issue #5757](https://github.com/agentscope-ai/QwenPaw/issues/5757)
*   **[Issue #5787] 移动端 UI 缺陷**：影响全平台移动端可用性，需前端团队关注。
    *   链接: [Issue #5787](https://github.com/agentscope-ai/QwenPaw/issues/5787)

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