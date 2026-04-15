# OpenClaw 生态日报 2026-04-15

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-15 02:46 UTC

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

# OpenClaw 项目动态日报 (2026-04-15)

## 1. 今日速览
OpenClaw 今日发布了 **v2026.4.14** 版本，重点优化了 GPT-5 系列模型的支持与核心代码库性能，但该版本引入了多处回归问题，导致社区反馈活跃度显著上升。过去 24 小时内 Issues 活跃度极高（新增/活跃 416 条），主要集中在配置崩溃、上下文引擎报错及 GPT-5 工具调用失效等问题。PR 端合并了 189 个请求，修复了 Gateway 进程残留、STT 私有网络拦截等关键问题，整体项目处于“高频迭代伴随阵痛”的阶段。

## 2. 版本发布
- **版本号**: v2026.4.14
- **更新重点**:
  - 针对 Model Provider 进行了广泛的质量改进，特别是 GPT-5 系列模型的对话轮次处理。
  - 修复了 Channel Provider 的多项问题。
  - 重构了底层核心代码库以提升整体性能。
- **潜在风险**: 
  - 该版本发布后，社区迅速反馈了严重的新 Bug（如 `openclaw configure` 崩溃、Context Engine 初始化失败等），建议部分用户暂缓升级或关注补丁发布。

## 3. 项目进展
今日共有 **189 个 PR 被合并或关闭**，主要进展如下：

- **核心修复**:
  - [PR #43961](https://github.com/openclaw/openclaw/pull/43961): 修复 Gateway 在优雅关闭超时后未执行 SIGKILL 的问题，解决了重启时的端口占用残留。
  - [PR #66692](https://github.com/openclaw/openclaw/pull/66692): 修复了 v2026.4.14 引入的 STT（语音转文字）请求被 SSRF Guard 拦截的回归问题。
  - [PR #66905](https://github.com/openclaw/openclaw/pull/66905): 修复了 OpenRouter/Qwen3 流解析错误导致的空响应问题。

- **功能增强**:
  - [PR #66857](https://github.com/openclaw/openclaw/pull/66857): BlueBubbles 渠道新增 Webhook 重放机制，确保 Gateway 重启期间丢失的消息能被恢复。
  - [PR #66933](https://github.com/openclaw/openclaw/pull/66933): 新增 `toolsBySender` 配置，支持按发送者级别剥离工具能力，实现细粒度权限控制。
  - [PR #10356](https://github.com/openclaw/openclaw/pull/10356): 集成 Typecast TTS 提供商，支持情感预设与音频调优。

- **安全性**:
  - [PR #66919](https://github.com/openclaw/openclaw/pull/66919): 增加配置文件的 HMAC 完整性校验与作用域强制执行，防止配置篡改。

## 4. 社区热点
今日讨论最热烈的话题集中在架构设计与版本稳定性上：

1.  **[RFC] 原生智能体身份与信任验证** ([Issue #49971](https://github.com/openclaw/openclaw/issues/49971))
    - **热度**: 86 条评论
    - **焦点**: 社区正在深入探讨为 OpenClaw 引入去中心化身份（DID）与信任验证机制，以解决 Agent 交互中的身份可信问题。该 RFC 涉及 W3C 标准与以太坊协议，显示出项目向企业级安全架构演进的意图。

2.  **内存泄漏导致基础命令 OOM** ([Issue #45064](https://github.com/openclaw/openclaw/issues/45064))
    - **热度**: 29 条评论
    - **痛点**: 用户报告升级后执行基础 CLI 命令（如 `doctor`, `status`）即触发 JavaScript heap out of memory 崩溃。该问题影响面广，亟需官方排查内存管理策略。

3.  **GPT-5.3-codex 工具执行失效** ([Issue #53959](https://github.com/openclaw/openclaw/issues/53959))
    - **热度**: 17 条评论
    - **痛点**: 更新后 GPT-5.3-codex 模型“只说不做”，承认指令但拒绝调用任何工具（exec/MCP/搜索）。反映出新版本对特定高级模型的工具调用链路存在回归。

## 5. Bug 与稳定性
今日报告了大量 Bug，按严重程度排序如下：

- **严重 - 系统不可用**
  - [Issue #66601](https://github.com/openclaw/openclaw/issues/66601): v2026.4.14 导致 Context Engine 反复报错，系统无法使用。已有修复 PR [PR #66930](https://github.com/openclaw/openclaw/pull/66930) 尝试降级处理。
  - [Issue #66718](https://github.com/openclaw/openclaw/issues/66718): `openclaw configure` 交互向导在 Channels 配置段崩溃。
  - [Issue #66693](https://github.com/openclaw/openclaw/issues/66693): 新用户 Onboarding 流程崩溃。

- **严重 - 功能回归**
  - [Issue #53959](https://github.com/openclaw/openclaw/issues/53959): GPT-5.3-codex 工具调用完全失效。
  - [Issue #66674](https://github.com/openclaw/openclaw/issues/66674): GPT-5.4 直接推理失败，错误信息被误报为 DNS 解析失败。
  - [Issue #66633](https://github.com/openclaw/openclaw/issues/66633): 升级后 OpenAI-Codex 提供商请求被 Cloudflare 403 拦截。

- **中等 - 功能受损**
  - [Issue #62496](https://github.com/openclaw/openclaw/issues/62496): Telegram 语音消息转录静默失败。
  - [Issue #18598](https://github.com/openclaw/openclaw/issues/18598): macOS Sequoia 隔离环境下 Chrome 无法下载文件。

## 6. 功能请求与路线图信号
- **敏感数据脱敏**: [Issue #64046](https://github.com/openclaw/openclaw/issues/64046) 要求对日志和 UI 中的 API Key/Token 进行脱敏处理，这符合企业级安全合规趋势，预计将被纳入近期规划。
- **Agent Discovery Protocol**: [Issue #66474](https://github.com/openclaw/openclaw/issues/66474) 提议支持标准化的 Agent 发现协议，以解决当前硬编码端点的问题。
- **内存搜索递归支持**: [Issue #34400](https://github.com/openclaw/openclaw/issues/34400) 请求 `memory_search` 支持子目录递归搜索，随着用户知识库规模增长，该需求日益迫切。

## 7. 用户反馈摘要
- **升级体验**: 多名用户反馈 v2026.4.14 为“破坏性更新”，导致 CLI 不可用或 Agent 逻辑异常，建议官方加强发布前的集成测试覆盖。
- **模型适配**: GPT-5 系列模型的适配目前是用户痛点，主要集中在工具调用和 Token 溢出处理上。
- **特定渠道**: Telegram 和 Feishu 渠道的流式传输和富媒体支持仍有较多 Bug，影响了非 Slack/Discord 用户的使用体验。

## 8. 待处理积压
- **高优先级**: 
  - [Issue #45064](https://github.com/openclaw/openclaw/issues/45064) (内存泄漏) 和 [Issue #32473](https://github.com/openclaw/openclaw/issues/32473) (Control UI 安全上下文错误) 长期未解决，影响了生产环境的稳定性。
  - [Issue #64068](https://github.com/openclaw/openclaw/issues/64068) Dreaming 机制中的 `recallCount` 始终为 0，导致记忆强化功能失效，需关注。

---

## 横向生态对比

# 2026-04-15 开源 AI 智能体生态横向对比分析报告

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于 **"功能爆发与稳定性博弈"** 的关键阶段。头部项目正加速整合 GPT-5 等前沿模型能力与多模态交互，但普遍面临架构重构带来的回归问题；中腰部项目则致力于差异化竞争，在本地部署、多渠道集成、垂直场景落地等方面寻求突破。**"模型中立化"、"长时记忆管理"与"并发非阻塞架构"** 成为技术演进的核心痛点，而国内生态对微信/钉钉等 IM 平台的集成需求持续高涨。

## 2. 各项目活跃度对比

| 项目名称 | Issues (日活/新增) | PRs (合并/更新) | 版本动态 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **416** (极高) | 189 (合并) | v2026.4.14 (回归严重) | ⚠️ **高风险**：核心功能崩溃频发，社区反馈积压，处于阵痛期。 |
| **CoPaw** | 94 (更新) | 23 (合并) | v1.1.1 | 🚀 **高活跃**：快速迭代，功能扩展迅猛，但存在品牌迁移混乱。 |
| **IronClaw** | 50 (更新) | 14 (合并) | 无 (Staging) | 🛡️ **攻坚期**：集中修复 P0 级 Bug，安全审计介入，质量优先。 |
| **NanoBot** | 15 (关闭) | 34 (合并) | v0.1.5.post1 | 🌟 **健康**：自我管理特性上线，响应迅速，新贡献者增加。 |
| **Zeroclaw** | 47 (新增) | 12 (合并) | 无 | 📈 **积压中**：Issue 堆积明显，核心重构中，需关注消化速度。 |
| **PicoClaw** | - | 21 (合并) | Nightly | ⚙️ **稳健**：嵌入式优化，架构重构推进中，无明显 Bug 爆发。 |
| **NanoClaw** | 0 (新增) | 15 (合并) | 无 | 🔧 **重构期**：代码库高密度清理，架构升级，Issue 沉寂。 |
| **Moltis** | 9 (关闭) | 8 (合并) | 20260414.02 | ✅ **良好**：修复高效，安全性增强，响应闭环快。 |
| **LobsterAI** | 1 (新增) | 14 (合并) | 无 | 🐎 **优化期**：性能优化为主，启动速度显著提升。 |
| **Hermes** | - | 4 (合并) | 无 | 🔄 **维护中**：跨平台修复，主要解决 CLI 与适配器问题。 |
| **NullClaw** | - | 0 (合并) | 无 | ⏳ **积攒期**：PR 未合，Issue 集中在部署困难。 |
| **ZeptoClaw** | - | 0 (合并) | 无 | 💤 **低活跃**：仅依赖更新，核心功能开发停滞。 |
| **EasyClaw** | 0 | 0 | v1.7.10 | 🔇 **静默**：仅发布修复版，无代码库活动。 |

## 3. OpenClaw 在生态中的定位

作为生态中的 **"核心参照系"**，OpenClaw 展现出鲜明的双刃剑特征：

*   **优势**：
    *   **前沿模型适配最快**：率先深度支持 GPT-5 系列（如 GPT-5.3-codex），在多轮对话与工具调用尝试上领先。
    *   **企业级架构探索**：RFC 讨论引入 DID（去中心化身份）与 HMAC 配置校验，显示出向高安全等级演进的意图。
    *   **社区规模最大**：单日 400+ Issue 的活跃度远超同类，证明其用户基数庞大。

*   **劣势与风险**：
    *   **稳定性失控**：v2026.4.14 引入的 Context Engine 崩溃、OOM 等致命 Bug，导致其成为今日生态中 **"最不稳定"** 的项目，与其"核心"地位严重不符。
    *   **技术负债累积**：高频迭代伴随的回归问题（如 STT 拦截、Gateway 残留）反映出 CI/CD 测试覆盖不足。

*   **对比结论**：相比 **NanoBot** 的"小而美、稳中进"和 **IronClaw** 的"安全攻坚"，OpenClaw 正经历大型开源项目常见的 **"架构重构阵痛期"**，亟需降速提质。

## 4. 共同关注的技术方向

尽管各项目进度不一，但以下技术诉求在多个项目中高频涌现，代表了行业共性趋势：

1.  **多模型支持与动态切换**
    *   **涉及项目**：Zeroclaw (`model_spawn`)、CoPaw (OpenRouter 集成)、NanoClaw (OpenAI 支持)、Hermes (LiteLLM)。
    *   **诉求**：打破单一模型锁定，支持本地模型（Ollama/LlamaCPP）与云端大模型动态调度，降低成本并提升容错。

2.  **智能体并发与异步架构**
    *   **涉及项目**：ZeptoClaw (强烈请求)、PicoClaw (并行重构)、IronClaw (并发消息处理)。
    *   **诉求**：解决当前 Agent "执行长任务时阻塞交互" 的痛点，向操作系统级的任务调度演进。

3.  **长时记忆与上下文管理**
    *   **涉及项目**：NanoBot (自动压缩)、Hermes (LanceDB 后端)、PicoClaw (外部记忆集成)。
    *   **诉求**：突破上下文窗口限制，实现自我管理的记忆检索与压缩，是 Agent 具备"长期智慧"的基础。

4.  **国内即时通讯平台深度集成**
    *   **涉及项目**：Hermes (钉钉/飞书)、NullClaw (微信)、CoPaw (微信)、Zeroclaw (飞书)。
    *   **诉求**：微信、钉钉、飞书的接入与稳定运行是国内开源项目的核心竞争力，但受限于平台政策，普遍存在适配困难。

## 5. 差异化定位分析

| 维度 | **OpenClaw** | **NanoBot / Zeroclaw** | **PicoClaw / LobsterAI** | **IronClaw / Moltis** |
| :--- | :--- | :--- | :--- | :--- |
| **核心场景** | 通用型 AI 网关与 Agent 框架 | 轻量级个人助手 / Web 端管理平台 | 嵌入式/端侧智能 (RISC-V, ARM) | 企业级安全与多渠道集成 |
| **技术栈** | TypeScript/Node (重配置) | Python/Rust (高性能/易扩展) | Go/Rust (原生跨平台) | Rust/Python (安全优先) |
| **目标用户** | 大模型尝鲜者、进阶开发者 | 个人用户、Web 端使用者 | 极客、边缘计算开发者 | 企业 IT、安全敏感型用户 |
| **关键差异** | 功能最全，但当前最不稳 | **模型适配性最好**，响应快 | **资源占用低**，硬件适配广 | **安全合规最强**，审计完善 |

## 6. 社区热度与成熟度

*   **快速迭代层**：OpenClaw、CoPaw。
    *   特征：版本发布频繁，Issue 量巨大。OpenClaw 处于"高频伴随阵痛"，CoPaw 处于"功能快速扩张期"。
*   **稳健成长层**：NanoBot、PicoClaw、Zeroclaw。
    *   特征：核心功能稳步推进，社区反馈处理及时，架构重构有序进行。
*   **质量攻坚层**：IronClaw、Moltis。
    *   特征：开发重心转向安全审计、Bug 修复和性能优化，为生产环境落地做准备。
*   **维护沉寂层**：ZeptoClaw、EasyClaw、TinyClaw。
    *   特征：核心开发停滞或仅进行依赖更新，社区活跃度低。

## 7. 值得关注的趋势信号

1.  **从"能用"到"好用"：并发架构成为新战场**
    ZeptoClaw 社区的强烈呼声和 PicoClaw、IronClaw 的代码重构表明，**"非阻塞交互"** 将成为下半年 Agent 架构的标准配置。用户不再容忍 Agent "思考时无法响应"。

2.  **安全边界的防御战升级**
    随着智能体权限扩大（Shell 执行、文件操作），Moltis 的 Docker 隔离、CoPaw 的 Shell 命令清洗、IronClaw 的安全审计显示，**沙箱逃逸与权限控制** 已成为核心关注点，安全漏洞可能导致项目失去企业用户信任。

3.  **端侧智能的崛起**
    PicoClaw 对 OpenWrt/ARM 的支持和 Windows 冷启动优化，预示着 AI Agent 正在从云端下沉到 **边缘设备**。低资源占用、离线运行能力将是下一个竞争高地。

4.  **回归质量的信号**
    OpenClaw 的"翻车"（v2026.4.14 回归）为整个生态敲响警钟：在大模型能力快速迭代的诱惑下，**工程质量的下限决定了项目的生存时间**。预计下阶段各项目将显著增加对自动化测试和发布流程的投入。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-15)

## 1. 今日速览
NanoBot 今日发布了重要更新 `v0.1.5.post1`，标志着项目从“构建功能”迈向“智能体自我管理”的新阶段，新版本引入了上下文自动压缩机制。项目活跃度极高，过去 24 小时内合并了 34 个 PR，关闭了 15 个 Issue，新增了 25 位贡献者。社区对模型兼容性（如 DeepSeek、Kimi、Qwen）和渠道稳定性（Telegram、DingTalk）的关注度持续上升，维护团队对用户反馈的响应速度极快，多项用户建议在提出后迅速得到代码实现。

## 2. 版本发布
- **[v0.1.5.post1](https://github.com/HKUDS/nanobot/releases/tag/v0.1.5.post1)**
  - **核心更新**：智能体现在能够在上下文过载前自动压缩上下文，实现了自我管理的雏形。官方形象地比喻：“如果 v0.1.5 是让大楼变得宜居，那么 v0.1.5.post1 就是让大楼学会自我照料。”
  - **规模**：合并了 80 个 PR，迎来 25 位新贡献者。
  - **影响**：显著提升了长时间对话的稳定性，降低了因上下文过长导致的崩溃风险。

## 3. 项目进展
今日共有 34 个 PR 被合并，项目在 API 增强、渠道修复和模型适配上取得显著进展：

- **API 与功能增强**
  - **文件上传支持**：PR [#2938](https://github.com/HKUDS/nanobot/pull/2938) 合并，OpenAI 兼容 API 现支持 JSON Base64 和 multipart/form-data 文件上传，为多模态应用打下基础。
  - **状态可视化**：PR [#3149](https://github.com/HKUDS/nanobot/pull/3149) 合并，`/status` 命令新增活跃任务计数，响应了用户关于“状态黑盒”的痛点。
  - **会话角色扮演**：PR [#3148](https://github.com/HKUDS/nanobot/pull/3148) 合并，引入了通道级会话角色管理基础设施。

- **模型兼容性修复**
  - **Kimi 思考模式**：PR [#3124](https://github.com/HKUDS/nanobot/pull/3124) 合并，显式支持 Kimi k2.5/k2.6 模型的思考链特性。
  - **参数规范化**：PR [#3154](https://github.com/HKUDS/nanobot/pull/3154) 合并，修复了 Qwen 等严格模型对 tool-call arguments 的格式校验错误，解决了常见的 `502` 错误。

- **渠道稳定性**
  - **钉钉超时修复**：PR [#3155](https://github.com/HKUDS/nanobot/pull/3155) 合并，为钉钉 HTTP 操作添加超时处理，防止令牌刷新或消息发送无限挂起。
  - **权限校验修复**：PR [#3153](https://github.com/HKUDS/nanobot/pull/3153) 合并，修复了配置为字典类型时 `is_allowed()` 总是拒绝访问的严重回归问题。

## 4. 社区热点
今日讨论最活跃的议题集中在功能请求与特定渠道问题上：

- **[Issue #3107 一些建议](https://github.com/HKUDS/nanobot/issues/3107)**：用户 @aiguozhi123456 提出了 7 条针对性极强的改进建议，包括任务数显示、重试终止提示等。维护者反应迅速，其中“状态显示任务数”和“重试通知”已在今日通过 PR [#3149](https://github.com/HKUDS/nanobot/pull/3149) 和 [#3150](https://github.com/HKUDS/nanobot/pull/3150) 实现。
- **[Issue #1300 Matrix channel does not work](https://github.com/HKUDS/nanobot/issues/1300)**：Matrix 渠道启动失败的老问题仍在活跃讨论中，评论数达 9 条，表明部分用户对非主流 IM 平台的支持有强需求。
- **[Issue #2714 Windows + DeepSeek 配置教程](https://github.com/HKUDS/nanobot/issues/2714)**：该 Issue 被关闭，标志着一篇高质量的中文社区教程被正式收录/确认，降低了国内新用户的上手门槛。

## 5. Bug 与稳定性
今日修复了多个影响系统稳定性的关键 Bug，但也暴露了新版本的一些问题：

- **[已修复] 严重权限回归**：Issue [#3152](https://github.com/HKUDS/nanobot/issues/3152) 指出配置为字典格式时权限校验全面失效，PR [#3153](https://github.com/HKUDS/nanobot/pull/3153) 已火速修复。
- **[已修复] 工具调用参数错误**：Issue [#3143](https://github.com/HKUDS/nanobot/issues/3143) 报告频繁出现 `messages parameter is illegal` 错误，PR [#3154](https://github.com/HKUDS/nanobot/pull/3154) 通过规范化参数格式解决了此兼容性问题。
- **[已关闭] 系统挂起**：Issue [#2828](https://github.com/HKUDS/nanobot/issues/2828) 报告 DuckDuckGo 搜索导致整个系统挂起，该 Issue 已关闭，推测已修复。
- **[新问题] 会话压缩卡死**：Issue [#3131](https://github.com/HKUDS/nanobot/issues/3131) 报告新引入的会话压缩功能可能卡死，需关注后续修复。

## 6. 功能请求与路线图信号
社区正在推动 NanoBot 向更自主、更易集成的方向发展：

- **智能体自我演化**：PR [#2521](https://github.com/HKUDS/nanobot/pull/2521)（待合并）提出了 SelfTool，允许智能体修改自身运行状态和配置。这呼应了 v0.1.5.post1 的“自我管理”主题，极有可能成为下个版本的核心特性。
- **官方客户端支持**：PR [#3030](https://github.com/HKUDS/nanobot/pull/3030)（待合并）正在开发 Web App 和 Mobile APIs，预示着 NanoBot 可能会推出官方的移动端或 Web 端界面。
- **自定义端点需求**：Issue [#3095](https://github.com/HKUDS/nanobot/issues/3095) 请求支持 Anthropic API 格式的自定义端点，反映了用户对接私有化部署模型的需求日益增长。

## 7. 用户反馈摘要
- **正面反馈**：用户对 v0.1.5.post1 的自我管理特性表示期待；Windows + DeepSeek 的教程大大降低了中文用户的上手难度。
- **痛点反馈**：
  - **重试机制**：用户希望 LLM 请求重试时有明确的通知和终止机制（Issue #3107），现已部分修复。
  - **模型兼容性**：在使用非 OpenAI 模型（如 Qwen, LongCat, DeepSeek）时，经常遇到参数校验或工具调用格式的兼容性问题。
  - **状态透明度**：用户难以判断 Agent 是否在工作中卡死，新增的 Task 计数功能将有效缓解此焦虑。

## 8. 待处理积压
- **[Issue #1300](https://github.com/HKUDS/nanobot/issues/1300)**：Matrix 渠道问题自 2 月至今未彻底解决，建议维护者优先排查底层依赖或配置问题。
- **[Issue #2599](https://github.com/HKUDS/nanobot/issues/2599)**：缺乏官方文档说明如何在 `config.json` 中配置 Subagents（子智能体），阻碍了多智能体协作功能的普及。
- **[Issue #2560](https://github.com/HKUDS/nanobot/issues/2560)**：Brave 搜索频繁触发限流，影响深度研究任务的执行。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-15)

## 1. 今日速览
Zeroclaw 项目今日呈现出极高的社区活跃度与开发强度，但也面临着明显的维护压力。过去 24 小时内新增/活跃 Issue 高达 47 条，而关闭仅 3 条，导致 Issue 积压显著增加；PR 方面虽有 12 个合并/关闭，但待合并数量仍维持在 38 个的高位。项目核心推进了配置系统版本化迁移（V1→V2）的重大更新，但在 Web Dashboard 可用性、本地模型兼容性以及多实例部署等关键稳定性问题上仍需重点关注。整体来看，项目处于快速迭代期，功能扩展与 Bug 修复并行，但亟待解决的社区反馈堆积较多。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目核心进展主要集中在底层架构重构与关键 Bug 修复，尤其是配置系统的现代化改造：

*   **[MERGED] 配置系统重大重构**：PR #5517 正式合并，引入了 `config.toml` 的前向兼容 Schema 版本控制，完成了 V1 到 V2 的迁移逻辑。这将解决长期以来的配置字段歧义问题，提升了系统的健壮性。
    *   链接: [zeroclaw-labs/zeroclaw PR #5517](https://github.com/zeroclaw-labs/zeroclaw/pull/5517)
*   **[OPEN] 动态模型切换工具**：PR #5751 提出了 `model_spawn` 工具，允许 Agent 在会话中动态切换模型或并行派生临时会话。这是一个极具前瞻性的功能增强，目前处于待合并状态。
    *   链接: [zeroclaw-labs/zeroclaw PR #5751](https://github.com/zeroclaw-labs/zeroclaw/pull/5751)
*   **[OPEN] 安全与沙箱机制修复**：PR #5750 修复了当用户设置 `runtime.kind = "native"` 时系统仍自动选择 Docker 沙箱的问题，修正了用户预期与实际行为的不一致。
    *   链接: [zeroclaw-labs/zeroclaw PR #5750](https://github.com/zeroclaw-labs/zeroclaw/pull/5750)
*   **[OPEN] 事件流去重修复**：PR #5746 修复了 `ToolCall` 事件在 SSE 流中被重复发送两次的低级错误，改善了客户端响应的准确性。
    *   链接: [zeroclaw-labs/zeroclaw PR #5746](https://github.com/zeroclaw-labs/zeroclaw/pull/5746)

## 4. 社区热点
今日社区讨论焦点集中在 Web 端可用性与本地模型支持上，反映了用户对基础体验的强烈诉求：

*   **Web Dashboard 不可用问题持续发酵**：Issue #4866 评论数达 11 条。用户反馈在 Tauri 桌面端和 Web 端均遇到 "Web dashboard not available" 错误，该问题跨越多个版本仍存在，严重阻碍了新用户的上手体验。
    *   链接: [zeroclaw-labs/zeroclaw Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)
*   **本地 LLM 支持痛点**：Issue #5459（Ollama 工具调用失效）和 #5578（无法连接本地 llama.cpp）获得了较高关注。这表明 Zeroclaw 的核心用户群中有大量本地部署需求，目前的 Provider 实现存在兼容性短板。
    *   链接: [zeroclaw-labs/zeroclaw Issue #5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459)
    *   链接: [zeroclaw-labs/zeroclaw Issue #5578](https://github.com/zeroclaw-labs/zeroclaw/issues/5578)
*   **品牌视觉优化**：Issue #4710 提出了重新设计 Logo 的建议，社区反响积极，显示出用户对项目品牌形象的重视。
    *   链接: [zeroclaw-labs/zeroclaw Issue #4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)

## 5. Bug 与稳定性
今日报告了多个严重程度较高的 Bug，涉及安全、性能及核心功能阻塞：

*   **[S0 - 严重] CPU 飙升与安全风险**：Issue #5125 报告在 Firefox 浏览器中输入文字会导致多核 CPU 飙升，严重影响使用；Issue #5528 指出邮件频道配置逻辑缺陷可能导致安全风险；Issue #5672 指出飞书机器人在 `mention_only` 开启时仍响应非提及消息。
    *   链接: [zeroclaw-labs/zeroclaw Issue #5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125)
*   **[S1 - 阻塞] Web 端构建失败**：Issue #4866 为长期遗留问题，导致 Web Dashboard 不可用。
    *   链接: [zeroclaw-labs/zeroclaw Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)
*   **[S1 - 阻塞] Ollama 工具调用失效**：Issue #5459 指出 Ollama provider 硬编码 `tool_count=0`，导致原生工具调用完全不可用。目前尚无修复 PR。
    *   链接: [zeroclaw-labs/zeroclaw Issue #5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459)
*   **[S2 - 降级] Provider 兼容性错误**：Issue #5670 和 #5600 分别报告了 Groq 和 Kimi-code provider 在流式调用工具时的 400 错误。
    *   链接: [zeroclaw-labs/zeroclaw Issue #5670](https://github.com/zeroclaw-labs/zeroclaw/issues/5670)

## 6. 功能请求与路线图信号
社区提出了多项旨在提升易用性与扩展性的功能请求，部分已有对应 PR：

*   **多模态交互支持**：Issue #5509 请求支持 Telegram 语音消息转录，Issue #5649 请求 Web UI 支持粘贴/拖拽图片。这显示出用户对 Agent 多模态能力的迫切需求。
    *   链接: [zeroclaw-labs/zeroclaw Issue #5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509)
*   **微内核架构演进**：Issue #5586 提出定义 WIT (WebAssembly Interface Types) 接口文件，这是迈向微内核架构的重要一步，将支持 Tool 和 Channel 插件化。
    *   链接: [zeroclaw-labs/zeroclaw Issue #5586](https://github.com/zeroclaw-labs/zeroclaw/issues/5586)
*   **性能优化**：Issue #5570 建议在 SQLite 内存向量搜索中引入 ANN 索引替代暴力搜索，Issue #5575 提出拆分 Crate 以解决编译缓慢问题。其中 Crate 拆分已在 Issue #5447 中讨论，PR #5447 相关讨论正在进行。
    *   链接: [zeroclaw-labs/zeroclaw Issue #5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570)

## 7. 用户反馈摘要
*   **开发体验痛点**：用户强烈反馈项目编译时间过长（Issue #5575），严重影响了二次开发和贡献效率。
*   **部署与配置困惑**：多个 Issue（#4866, #5605, #5517）反映出配置文件、路径管理及构建流程对用户不够友好，尤其是在多实例部署和 Web 构建方面。
*   **Provider 兼容性焦虑**：用户在使用 Ollama、Groq、Kimi-code 等本地或第三方模型时频繁遇到接口适配错误（#5459, #5670），表明非 OpenAI 标准模型的兼容性测试覆盖不足。

## 8. 待处理积压
*   **高优先级未修复 Bug**：Issue #4866 (Web Dashboard 构建) 和 Issue #5459 (Ollama 工具调用) 作为阻塞性问题，长期未得到解决，建议维护者优先排期。
*   **大量待合并 PR 积压**：目前有 38 个待合并 PR，其中包括重要的架构重构（如 PR #5751 model_spawn 工具）和关键修复（如 PR #5750 沙箱修复）。建议项目团队进行一次集中 Review，以缓解分支压力。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 (2026-04-15)

## 1. 今日速览
Hermes Agent 项目今日保持高度活跃，核心开发与社区贡献并进。重点解决了 CLI 稳定性问题（如 `@` 提及崩溃）和多平台适配器的兼容性 Bug（飞书、钉钉、Discord）。社区对本地模型支持、Token 开销优化以及国内平台（QQ、钉钉）的集成表现出强烈需求。整体项目健康度良好，关键 Bug 响应迅速，多个功能性 PR 正在等待合并，显示出项目正向更完善的跨平台 Agent 框架演进。

## 2. 版本发布
*   **无正式版本发布**：今日未发布新的 Release 版本。
*   **潜在变更**：多个已关闭的修复 PR（如 CLI 崩溃修复 #9683）预示着可能正在筹备 v0.9.1 补丁版本。

## 3. 项目进展
今日共有 **4 个 PR 合并/关闭**，显著提升了系统稳定性与用户体验：
*   **[CLI 稳定性] 修复 `@` 提及崩溃 ([PR #9683](https://github.com/NousResearch/hermes-agent/pull/9683))**：解决了 CLI 中输入 `@` 触发 `AttributeError` 的问题，恢复了用户提及功能的正常使用。
*   **[CLI 体验] 优化多行粘贴逻辑 ([PR #2607](https://github.com/NousResearch/hermes-agent/pull/2607))**：改进了粘贴行为，保留已有输入，将粘贴内容视为整体块处理，提升了交互流畅度。
*   **[Discord 集成] 重组 Slash 命令结构 ([PR #9909](https://github.com/NousResearch/hermes-agent/pull/9909))**：将技能命令归组到 `/skill` 下，解决了 Discord 100 条命令限制的问题，为后续扩展腾出空间。
*   **[模型支持] LiteLLM 上下文长度回填 ([PR #9952](https://github.com/NousResearch/hermes-agent/pull/9952))**：通过 `/model/info` 端点补全模型元数据，解决了自定义模型显示未知上下文长度的问题。

## 4. 社区热点
*   **[Feature] Lazy Tool Schema Loading ([Issue #6839](https://github.com/NousResearch/hermes-agent/issues/6839))** 👍3：社区强烈呼吁优化工具注入机制。当前全量 Schema 注入导致每次请求消耗 3500+ Token，对本地模型极不友好。提议的“两阶段注入”方案有望大幅降低成本。
*   **[Feature] QQ Bot Platform Integration ([Issue #9166](https://github.com/NousResearch/hermes-agent/issues/9166))**：作者声称已完成 QQ 适配器的开发与测试，这对中国用户是重大利好，目前等待维护者 Review 代码。
*   **[Feature] Auto-discover models ([Issue #10011](https://github.com/NousResearch/hermes-agent/issues/10011))**：用户希望在使用自定义 OpenAI 兼容网关时，系统能自动发现模型列表，而非手动配置 `config.yaml`，反映出对云原生集成的更高期待。

## 5. Bug 与稳定性
今日报告的关键 Bug 如下，按严重程度排序：

*   **P0 - 致命/崩溃**：
    *   **MCP 重连失败 ([Issue #9930](https://github.com/NousResearch/hermes-agent/issues/9930))**：Python 3.11+ 环境下，`asyncio.CancelledError` 继承变更导致异常未被捕获，Gateway 重启时服务崩溃。**目前无修复 PR**。
    *   **Dashboard NameError ([Issue #9936](https://github.com/NousResearch/hermes-agent/issues/9936))** [已关闭]：Web Server 缺少 `import os` 导致启动崩溃，随 PR #9683 等修复已解决。

*   **P1 - 功能受阻**：
    *   **Cloudflare 403 拦截 ([Issue #9721](https://github.com/NousResearch/hermes-agent/issues/9721))**：自定义 Provider 无法配置 HTTP Headers (如 User-Agent)，导致被 WAF 拦截。
    *   **飞书回复串台 ([Issue #9916](https://github.com/NousResearch/hermes-agent/issues/9916))**：P2P 聊天的话题模式下，机器人回复会错误地发送到主聊天区，破坏上下文。
    *   **macOS 安装失败 ([Issue #10010](https://github.com/NousResearch/hermes-agent/pull/10010))**：Python 路径包含空格时脚本执行错误，**已有修复 PR**。

*   **P2 - 体验受损**：
    *   **飞书 Markdown 转义错误 ([Issue #9816](https://github.com/NousResearch/hermes-agent/issues/9816))**：过度的转义导致加粗、代码块等格式失效。
    *   **钉钉 Stream 模式消息丢失 ([Issue #10003](https://github.com/NousResearch/hermes-agent/pull/10003))**：SDK 数据读取路径错误导致静默丢消息，**已有修复 PR**。

## 6. 功能请求与路线图信号
*   **本地记忆增强**：[PR #9646](https://github.com/NousResearch/hermes-agent/pull/9646) 提议增加 LanceDB 作为外部记忆后端，提供持久化的语义记忆支持，契合 Agent 长期记忆的需求。
*   **终端体验优化**：[PR #10013](https://github.com/NousResearch/hermes-agent/pull/10013) 提议自动设置终端标签页标题为 `<persona>: <session>`，增强多任务管理体验。
*   **灵活配置**：[Issue #9842](https://github.com/NousResearch/hermes-agent/issues/9842) 请求增加 `hermes gateway remove` 命令，完善网关生命周期管理。

## 7. 用户反馈摘要
*   **国内平台适配痛点**：飞书和钉钉用户反馈集中在消息格式、文件上传签名和话题线程处理上，显示这些平台的适配器仍需打磨。
*   **本地模型性能焦虑**：多位用户反馈 Token 消耗大、上下文长度识别错误（Ollama/LiteLLM），表明项目在本地模型生态的适配细节上仍有优化空间。
*   **配置繁琐**：用户期望“零配置”或“自动发现”体验，特别是在模型频繁更新的当下，手动维护 `config.yaml` 成为负担。

## 8. 待处理积压
*   **[P0] MCP Reconnect Crash ([Issue #9930](https://github.com/NousResearch/hermes-agent/issues/9930))**：影响网关稳定性，需尽快修复异常捕获逻辑。
*   **[Feature] QQ Bot 集成 ([Issue #9166](https://github.com/NousResearch/hermes-agent/issues/9166))**：社区贡献代码已就绪，建议维护者优先审查并合入，以满足中国用户需求。
*   **[Feature] Lazy Tool Loading ([Issue #6839](https://github.com/NousResearch/hermes-agent/issues/6839))**：高价值功能请求，建议纳入下一版本路线图。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-15)

**分析师摘要**：PicoClaw 项目今日保持高频迭代态势，PR 活跃度极高（38条更新，21条已合并），显示出核心团队正在为下一个稳定版本进行密集的代码修缮与功能重构。今日重心集中在 **WebUI 交互体验优化** 与 **跨平台稳定性增强**，特别是针对用户反馈的“操作无响应/按钮禁用”问题进行了专项修复。同时，Agent 并行处理能力的重构预示着项目向更高级的自主智能体形态演进。

---

### 1. 今日速览
PicoClaw 今日发布了一个新的 Nightly 版本 (`v0.2.6-nightly.20260415`)，开发活动主要集中在修复近期用户反馈的 WebUI 交互阻塞和底层进程管理稳定性问题。共有 **21 个 PR 被合并**，涉及前端状态管理、后端进程守护（PID）、跨平台兼容性以及构建流水线优化。社区对 **WebUI 重构** 及 **Agent 路线图** 保持高度关注，尽管新开 Issue 数量适中，但高质量的功能提议（如记忆系统增强）表明项目正处于功能扩展的关键期。

### 2. 版本发布
- **[nightly] Nightly Build (v0.2.6-nightly.20260415.c0fadc59)**
  - **类型**: 自动化构建版本
  - **更新范围**: 基于 `main` 分支的自动构建，包含了今日合并的所有 Bug 修复和功能增强。
  - **风险提示**: 官方标注 "automated build and may be unstable"，建议测试环境优先尝鲜，生产环境建议等待 Stable Release。
  - **链接**: [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

### 3. 项目进展
今日合并的 PR 极大地推进了系统的健壮性，主要集中在以下三个领域：

- **WebUI 交互与反馈优化**：
  - 合并了 [PR #2430](https://github.com/sipeed/picoclaw/pull/2430) 和 [PR #2523](https://github.com/sipeed/picoclaw/pull/2523)，解决了用户在界面按钮被禁用时缺乏提示的问题，现在会通过 Tooltip 明确告知原因（如未连接 Gateway、未选择模型等），显著降低了新用户的困惑。
  - [PR #2467](https://github.com/sipeed/picoclaw/pull/2467) 修复了前端依赖版本不一致导致的运行时崩溃，确保 React 生态版本对齐。

- **系统稳定性与进程管理**：
  - [PR #2403](https://github.com/sipeed/picoclaw/pull/2403) 和 [PR #2422](https://github.com/sipeed/picoclaw/pull/2422) 强化了 PID 文件管理和僵尸进程清理逻辑，修复了 Gateway 进程意外退出后状态残留的问题。
  - [PR #2501](https://github.com/sipeed/picoclaw/pull/2501) 重构了 Cron（定时任务）服务的可靠性机制，增加了重试和审计状态，减少了任务丢失的概率。

- **构建与平台兼容性**：
  - [PR #2497](https://github.com/sipeed/picoclaw/pull/2497) 将 Android 构建流程迁移至 GoReleaser，标准化了发布流水线。
  - [PR #2417](https://github.com/sipeed/picoclaw/pull/2417) 修复了 FreeBSD/ARM 平台的构建失败问题，扩大了硬件支持范围。

### 4. 社区热点
- **[Issue #806] [Feature]: Add webUI support (Refactoring now)**
  - **热度**: 👍 8 | 评论 8
  - **分析**: 这是一个长期的高优先级路线图 Issue。讨论显示 WebUI 的重构正在进行中，旨在降低非技术用户的使用门槛。这是目前社区最期待的功能，也是今日大量 WebUI 相关 PR 的源头。
  - **链接**: [sipeed/picoclaw Issue #806](https://github.com/sipeed/picoclaw/issues/806)

- **[Issue #2148] Phase 2 Implementation Plan: Agent Discovery → Delegation**
  - **热度**: 评论 3
  - **分析**: 核心开发者 @yinwm 发起的 Phase 2 路线图讨论，涉及智能体之间的发现与委托机制。这标志着项目正从单一工具链向多智能体协作网络演进，具有重要的战略意义。
  - **链接**: [sipeed/picoclaw Issue #2148](https://github.com/sipeed/picoclaw/issues/2148)

### 5. Bug 与稳定性
今日报告了若干影响核心功能的 Bug，部分已有修复方案：

1.  **[严重] Gateway 启动异常 ([Issue #2513](https://github.com/sipeed/picoclaw/issues/2513))**
    - 现象: Gateway 进程启动异常，影响正常服务。
    - 状态: **待处理**。需关注是否为 Nightly 版本回归问题。

2.  **[中等] 定时任务执行失败 ([Issue #2468](https://github.com/sipeed/picoclaw/issues/2468))**
    - 现象: Cron 任务报错 "scheduling command execution is restricted to internal channels"。
    - 状态: **已有修复 PR**。[PR #2474](https://github.com/sipeed/picoclaw/pull/2474) 和 [PR #2501](https://github.com/sipeed/picoclaw/pull/2501) 分别从会话隔离和重试机制角度进行了修复。

3.  **[中等] WebUI 聊天功能不可用 ([Issue #2354](https://github.com/sipeed/picoclaw/issues/2354))**
    - 现象: 输入框禁用，无法发送消息。
    - 状态: **已关闭**。推测由 [PR #2526](https://github.com/sipeed/picoclaw/pull/2526) 或前几日的状态修复 PR 解决。

4.  **[低] OpenWrt TCP 连接问题 ([Issue #2488](https://github.com/sipeed/picoclaw/issues/2488))**
    - 现象: 在 OpenWrt ARM64 设备上 TCP 连接无法 Accept。
    - 状态: **已关闭**。可能已被构建配置修复确认或无法复现。

### 6. 功能请求与路线图信号
- **记忆系统增强**: [Issue #2515](https://github.com/sipeed/picoclaw/issues/2515) 提议集成 mem0、Supermemory 等外部记忆服务商。考虑到目前的 Agent 架构正在向 Phase 2 迈进，外部记忆挂载是智能体持久化的关键一环，采纳可能性较高。
- **Web 搜索本地化**: [PR #2524](https://github.com/sipeed/picoclaw/pull/2524) 提议集成搜狗搜索作为国内用户的默认 Web 搜索后端。这是一个针对特定地区用户体验的实用功能，目前处于 Open 状态，有望近期合入。
- **Agent 并行重构**: [PR #2503](https://github.com/sipeed/picoclaw/pull/2503) 正在重构 Agent Loop 以支持并行处理用户消息。这是性能优化的重大改进，值得密切关注。

### 7. 用户反馈摘要
- **操作指引缺失**: 多位用户反馈 WebUI 按钮变灰（不可用）但无提示，导致误以为是 Bug。今日合并的 PR 已解决此痛点，增加了原因提示。
- **沙箱安全性担忧**: Issue #2519 反映系统频繁尝试访问 Workspace 以外的目录（如 `/tmp`），用户希望有强制限制工作目录的配置选项。这反映了用户对 AI 智能体权限管控的焦虑。
- **国产化适配**: 从 OpenWrt (ARM64) 的反馈和搜狗搜索的 PR 来看，PicoClaw 在国内嵌入式及边缘计算设备上的部署需求正在增长。

### 8. 待处理积压
- **[PR #2503] refactor: make agent loop support parallel**: 这是一个大型重构 PR，涉及核心 Agent 逻辑，目前处于 Open 状态，建议维护者尽快组织 Review 以避免阻塞后续功能开发。
- **[Issue #806] WebUI 重构**: 虽然一直在推进，但作为 High Priority 项，仍需持续投入资源直至 Beta 版发布。
- **[Issue #2488] OpenWrt 兼容性**: 虽然已关闭，但针对嵌入式环境的稳定性测试仍需加强，建议增加 CI 覆盖。

---
*以上内容基于 GitHub 数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-15)

## 1. 今日速览
NanoClaw 项目今日呈现出“高产出、强清理”的活跃状态。虽然过去 24 小时内无新发 Issue 和版本发布，但代码库迎来了高密度的更新：共处理了 **22 条 PR 更新**，其中 **15 条已关闭/合并**，成功清理了大量历史积压。项目重点明显偏向底层架构升级与生态兼容性扩展，社区贡献者提交了包括 OpenAI 模型支持、包管理器迁移及事件驱动架构重构等关键性 PR。这表明项目正处于从功能积累向架构优化的转型期，整体健康度良好，迭代速度极快。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日项目进展显著，主要体现在**历史遗留问题的清理**与**重大基础设施升级**两个方面，项目整体向前迈进了一大步：

*   **积压清理里程碑**：维护者今日集中合并/关闭了 15 个 PR，特别是解决了数个 3 月份遗留的功能与修复请求。
    *   **WhatsApp 功能增强**：合并了 PDF 阅读 ([#772](https://github.com/qwibitai/nanoclaw/pull/772))、图像视觉 ([#770](https://github.com/qwibitai/nanoclaw/pull/770)) 等关键技能，修复了注册流程中的 JID 错误 ([#751](https://github.com/qwibitai/nanoclaw/pull/751)) 和配对码写入问题 ([#745](https://github.com/qwibitai/nanoclaw/pull/745))。
    *   **核心调度修复**：合并了修复 IPC 消息传递导致容器关闭延迟的问题 ([#840](https://github.com/qwibitai/nanoclaw/pull/840))，优化了任务调度系统的稳定性。
*   **基础设施现代化**：发起了从 npm 迁移至 pnpm 的重大变更 ([#1771](https://github.com/qwibitai/nanoclaw/pull/1771))，旨在优化依赖管理与构建速度，标志着项目工程化水平的提升。

## 4. 社区热点
由于今日无活跃 Issue 讨论，热点主要集中在最具分量的新开 Pull Requests 上，反映了社区对扩展性的强烈诉求：

*   **[#1774 OpenAI 模型支持与 Token 追踪](https://github.com/qwibitai/nanoclaw/pull/1774)**：
    *   **分析**：这是今日最受关注的功能性 PR。它打破了单一模型限制，引入了对 OpenAI 兼容 API（包括 GPT-5.4 和本地 Ollama）的支持。这反映了用户对“降低成本”和“模型多样化”的迫切需求，解决了单一依赖 Claude 模型的痛点。
*   **[#1772 事件驱动架构重构](https://github.com/qwibitai/nanoclaw/pull/1772)**：
    *   **分析**：提出了将 NanoClaw 从单线程助手演变为多智能体运行时的宏大构想。该 PR 意图引入 EventBus 和执行池，显示了项目向更复杂、高并发系统演进的路线图信号。

## 5. Bug 与稳定性
今日无新报告的 Bug（Issue 为 0），但通过已合并的修复 PR，可以确认以下问题已得到解决：

*   **[已修复] IPC 通信导致的容器延迟关闭** (严重度：中)：修复了仅使用 IPC 消息时任务容器未能及时关闭的问题，优化了资源释放 ([#840](https://github.com/qwibitai/nanoclaw/pull/840))。
*   **[已修复] WhatsApp 注册与认证流程** (严重度：高)：修复了 DM 注册时 JID 错误 ([#751](https://github.com/qwibitai/nanoclaw/pull/751)) 及缓冲环境下配对码无法立即访问的问题 ([#745](https://github.com/qwibitai/nanoclaw/pull/745))，显著提升了移动端接入的稳定性。
*   **[已修复] MCP 环境变量传递** (严重度：中)：解决了容器无法读取 `.env` 中 MCP 配置的问题 ([#962](https://github.com/qwibitai/nanoclaw/pull/962))。

## 6. 功能请求与路线图信号
结合今日的 PR 动态，可以洞察项目下一阶段的路线图重心：

*   **模型中立化**：随着 [#1774](https://github.com/qwibitai/nanoclaw/pull/1774) 和 [#1776](https://github.com/qwibitai/nanoclaw/pull/1776) (OpenCode Provider) 的提出，NanoClaw 正快速演变为一个“模型无关”的 AI 智能体平台，未来可能支持更多第三方模型接入。
*   **记忆与持久化**：长期未合并的 PR [#1256](https://github.com/qwibitai/nanoclaw/pull/1256) 提出了基于 Mem0 的持久化记忆层，配合今日合并的 PDF/视觉技能，预示着项目正从“对话式工具”向“有记忆的智能体”转型。
*   **架构重构**：PR [#1772](https://github.com/qwibitai/nanoclaw/pull/1772) 提出的 Event-Driven 架构若被采纳，将是项目底层逻辑的重大升级。

## 7. 用户反馈摘要
虽然今日无 Issue 评论数据，但从已合并 PR 的功能侧写中可以提炼出真实用户场景：

*   **多模态需求强烈**：PDF 阅读 ([#772](https://github.com/qwibitai/nanoclaw/pull/772)) 和图像视觉 ([#770](https://github.com/qwibitai/nanoclaw/pull/770)) 的合并表明，用户不仅仅将 NanoClaw 用于文本对话，更将其作为处理文档、识别图片的办公助手。
*   **成本与灵活性考量**：OpenAI 支持 PR 的出现，侧面反映出部分用户希望引入比 Claude 更廉价或本地化的模型方案，显示了对 Token 成本的敏感性。
*   **即时通讯集成痛点**：多个 WhatsApp 相关修复的合并，说明在即时通讯平台的接入细节上，用户曾遇到注册失败、连接不稳定等摩擦，今日更新后体验应有大幅改善。

## 8. 待处理积压
以下重要 PR 长期未获合并或最终定论，建议维护者重点关注：

*   **[#886 AI 新闻简报技能](https://github.com/qwibitai/nanoclaw/pull/886)**：自 3 月 9 日开启，今日虽有更新但状态仍为 Open。该功能涉及 Web 搜索与多智能体协作，可能是由于测试复杂度较高导致积压。
*   **[#1256 Mem0 图记忆技能](https://github.com/qwibitai/nanoclaw/pull/1256)**：自 3 月 19 日开启，提供了关键的长期记忆能力。鉴于今日项目正在重构架构 (#1772)，建议评估该 PR 是否与新架构兼容，以免重复开发。
*   **[#1772 架构重构提案](https://github.com/qwibitai/nanoclaw/pull/1772)**：今日新开，涉及范围极广，建议尽早召集核心贡献者进行方案评审，以防后续 PR 方向冲突。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-15)

## 1. 今日速览
NullClaw 项目今日保持中度活跃，社区关注点集中在功能扩展与部署稳定性上。虽然今日无新版本发布且无 PR 合并，但有两个重要的功能特性 PR 正在活跃推进中，分别为定时任务引擎和微信扫码登录支持。Issues 板块显示用户对部署体验（Docker、Zig 安装）及核心功能稳定性（HTTP 请求、Shell 运行）存在较多疑问，暴露出新用户上手的痛点。整体来看，项目正处于功能积累期，但需警惕近期版本引入的回归问题对用户体验的影响。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日虽无合并代码，但有两个关键的开放式 PR 值得关注，预示了下个版本可能的重点方向：

*   **定时任务引擎开发中**：PR [#783](https://github.com/nullclaw/nullclaw/pull/783) 正在推进一个重大的功能更新，旨在引入基于数据库的 Cron 子智能体引擎。该 PR 包含运行历史记录、JSON 输出支持以及安全加固功能。这表明项目正试图从单纯的交互式助手向具备自动化调度能力的智能体演进。
*   **微信生态集成提案**：PR [#818](https://github.com/nullclaw/nullclaw/pull/818) 提议新增 `weixin` 频道集成，支持微信个人账号的二维码扫码登录与 Token 管理。这反映了项目在拓展即时通讯平台接入能力上的尝试。

## 4. 社区热点
今日讨论最活跃的 Issue 主要围绕功能故障与部署需求展开：

*   **网络搜索功能故障 [活跃度最高]**：Issue [#812](https://github.com/nullclaw/nullclaw/issues/812) 引发了较多讨论（4 条评论）。用户反馈从 Picoclaw 迁移后无法启用互联网搜索功能，这直接影响了核心体验。多位用户参与排查，显示出该功能的刚需属性。
*   **部署配置回退问题**：Issue [#800](https://github.com/nullclaw/nullclaw/issues/800) 报告 v2026.4.9 版本强制 HTTPS 端点导致 Otel 监控在容器网络环境下失效。该问题获得 1 个赞，表明其在容器化部署场景下的普遍性。
*   **官方 Docker 镜像请求**：Issue [#449](https://github.com/nullclaw/nullclaw/issues/449) 持续受到关注，用户呼吁提供官方 Docker Hub 镜像及 Docker Compose 编排文件，反映了社区对标准化部署方案的强烈需求。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及运行环境与版本管理，部分问题影响较严重：

1.  **[严重] Shell 环境兼容性问题**：Issue [#791](https://github.com/nullclaw/nullclaw/issues/791) 指出 Shell 工具在物理机 Linux 环境下无法运行，即使配置了允许所有命令。这限制了项目在原生服务器场景下的应用。目前尚无修复 PR。
2.  **[严重] HTTP/HTTPS 约束导致的崩溃**：Issue [#800](https://github.com/nullclaw/nullclaw/issues/800) 提到新版本强制 HTTPS 导致与本地 Otel 服务的通信中断，属于破坏性变更引起的回归问题。
3.  **[一般] 源码构建版本号缺失**：Issue [#821](https://github.com/nullclaw/nullclaw/issues/821) 指出从源码安装后，版本命令仅返回 `dev`，导致用户难以确认当前运行版本，增加了调试难度。
4.  **[待确认] 网络搜索失效**：Issue [#812](https://github.com/nullclaw/nullclaw/issues/812) 涉及 HTTP 请求功能，可能影响网络搜索能力。

## 6. 功能请求与路线图信号
*   **定时任务**：PR [#783](https://github.com/nullclaw/nullclaw/pull/783) 显示项目正在构建自动化的调度底座，这是迈向更高阶智能体的关键一步。
*   **多渠道登录**：PR [#818](https://github.com/nullclaw/nullclaw/pull/818) 与 Issue [#817](https://github.com/nullclaw/nullclaw/issues/817) 显示出用户对连接国内主流社交平台（微信）的迫切需求。虽然 Issue [#816](https://github.com/nullclaw/nullclaw/issues/816) 已关闭，但同名的 PR 仍在推进，表明该功能大概率会被纳入后续规划。
*   **容器化部署**：Issue [#449](https://github.com/nullclaw/nullclaw/issues/449) 请求 Docker Hub 镜像，结合今日关于 Zig 安装困难的反馈（Issue [#820](https://github.com/nullclaw/nullclaw/issues/820)），可以看出项目需要降低依赖安装门槛，容器化将是解决此问题的关键路径。

## 7. 用户反馈摘要
*   **上手门槛高**：用户在 Issue [#812](https://github.com/nullclaw/nullclaw/issues/812) 中提到“NullClaw seems very organized”但也坦言配置网络搜索困难；Issue [#820](https://github.com/nullclaw/nullclaw/issues/820) 询问 Zig 在 Debian 上的安装，均显示出新手在环境搭建阶段面临阻力。
*   **版本管理混乱**：Issue [#821](https://github.com/nullclaw/nullclaw/issues/821) 暴露了源码构建流程中版本信息注入缺失的问题，影响用户对构建产物的信心。
*   **架构设计受认可**：即便遇到 Bug，用户仍认可 NullClaw 的架构组织性（Issue #812），这为项目保留用户奠定了基础。

## 8. 待处理积压
*   **Linux 原生运行故障**：Issue [#791](https://github.com/nullclaw/nullclaw/issues/791) 已活跃数日，至今未解决，严重影响非 Docker 环境用户。
*   **官方 Docker 镜像缺失**：Issue [#449](https://github.com/nullclaw/nullclaw/issues/449) 自 3 月提出至今未关闭，随着安装难度的反馈增加，该需求优先级应提升。
*   **网络搜索配置失效**：Issue [#812](https://github.com/nullclaw/nullclaw/issues/812) 作为热门功能受阻，需维护者尽快确认是文档缺失还是代码缺陷。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 (2026-04-15)

## 1. 今日速览
IronClaw 项目今日保持**高活跃度**，过去24小时内共有 50 条 Issue 更新和 50 条 PR 更新，显示开发与测试团队正在密集推进。项目重心目前明显向**质量保障（QA）与 Bug 修复**倾斜，多个 P0 级别的严重问题被标记并处理，特别是 Web 端消息丢失和 OAuth 认证相关的修复已合并。同时，安全响应迅速，针对 FailSafe 审计发现的漏洞已提交修复 PR。整体来看，项目正处于**发布前的稳定性攻坚阶段**，虽然新功能开发依然并行（如并发消息处理），但稳定性修复占据了主导地位。

## 2. 版本发布
无新版本发布。目前主要聚焦于 `staging` 分支的稳定性验证与问题修复，暂未发布正式 Release。

## 3. 项目进展
今日共有 14 个 PR 被合并或关闭，重点解决了影响用户体验的关键缺陷：

*   **Web 端消息持久化修复**：PR [#2434](https://github.com/nearai/ironclaw/pull/2434) 修复了用户消息在切换线程后消失的问题（Issue [#2409](https://github.com/nearai/ironclaw/issues/2409)）。通过在发送时立即持久化消息而非异步等待，消除了竞态条件。
*   **Slack OAuth 修复**：PR [#2473](https://github.com/nearai/ironclaw/pull/2473) 修复了 Slack OAuth 回调一直报错的问题，原因是 Nonce 存储使用了错误的 User ID 字段。
*   **性能优化**：PR [#2425](https://github.com/nearai/ironclaw/pull/2425) 引入了用户级设置的缓存层，减少了数据库读取压力。
*   **容器化适配**：PR [#2467](https://github.com/nearai/ironclaw/pull/2467) 修复了 Docker 检测逻辑，使其在仅有 Socket 挂载（无 CLI 二进制）的环境下也能正常工作。
*   **安全修复提交**：针对安全审计发现的问题，社区贡献者提交了三个重要的安全修复 PR（[#2092](https://github.com/nearai/ironclaw/pull/2092) 间接提示注入、[#2093](https://github.com/nearai/ironclaw/pull/2093) Zip bomb DoS、[#2094](https://github.com/nearai/ironclaw/pull/2094) SSRF），目前等待合并。

## 4. 社区热点
今日讨论最活跃的话题集中在第三方集成与多渠道支持上，反映了用户对连接外部服务的强烈需求：

*   **Google Sheets OAuth 认证受阻**：Issue [#2229](https://github.com/nearai/ironclaw/issues/2229) 是今日评论数最高的 Issue。QA 测试发现 Google Sheets 授权时出现 `Error 400 invalid_request`，该问题直接阻碍了 AI 与 Google 生态的集成体验，目前状态为 OPEN，亟待解决。
*   **Twitter/X 连接困难**：Issue [#2230](https://github.com/nearai/ironclaw/issues/2230) 指出 Twitter/X MCP 连接需要手动提取浏览器 Cookie，用户体验极差，且处于不可用状态。
*   **Discord 频道集成**：Issue [#76](https://github.com/nearai/ironclaw/issues/76) 虽已关闭，但引发了关于多渠道支持的讨论。用户强烈希望支持 Discord、iMessage 等更多平台（见 Issue [#78](https://github.com/nearai/ironclaw/issues/78)）。

## 5. Bug 与稳定性
今日报告了大量 P0 级别的 Bug，主要集中在 Web UI、升级流程和集成接口：

*   **P0 - Web UI 崩溃/循环**：
    *   Issue [#2410](https://github.com/nearai/ironclaw/issues/2410)：Dashboard 页面陷入无限刷新循环。
    *   Issue [#2409](https://github.com/nearai/ironclaw/issues/2409)：用户输入的消息消失（**已修复** PR #2434）。
*   **P0 - 升级与部署故障**：
    *   Issue [#2346](https://github.com/nearai/ironclaw/issues/2346)：从 v0.24.0 升级至 v0.25.0 失败，且无报错详情。
    *   Issue [#2276](https://github.com/nearai/ironclaw/issues/2276)：Orchestrator 遇到大 Payload 直接 Crash (HTTP 413)。
*   **P0 - 集成与配置**：
    *   Issue [#2411](https://github.com/nearai/ironclaw/issues/2411)：Telegram Bot Token 保存操作无反应（**修复中** PR #2432）。
    *   Issue [#2281](https://github.com/nearai/ironclaw/issues/2281)：Bot 忽略时间条件，立即发送会议准备通知。
*   **安全漏洞**：
    *   Issue [#2470](https://github.com/nearai/ironclaw/issues/2470)：发现 `write_to_layer()` 绕过注入扫描，可能导致记忆投毒。

## 6. 功能请求与路线图信号
*   **并发与性能**：PR [#2429](https://github.com/nearai/ironclaw/pull/2429) 正在推进跨线程的并行消息处理，这将是性能提升的关键特性，可能随下一版本发布。
*   **凭证管理增强**：PR [#2168](https://github.com/nearai/ironclaw/pull/2168) 提议支持基于路径的凭证匹配，这将允许为同一主机的不同 API 端点配置不同的权限凭证，增强了企业级安全性。
*   **多模型支持**：Issue [#80](https://github.com/nearai/ironclaw/issues/80) 再次活跃，呼吁支持 Ollama、Bedrock 和 Gemini 等更多 LLM 后端。

## 7. 用户反馈摘要
从 Issue 详情中可以看出，早期测试用户主要面临“可用性”挑战：
*   **集成体验割裂**：用户在配置 Telegram、Slack 或 Google Sheets 时经常遇到流程中断或配置无效的情况，这表明**安装向导与配置持久化逻辑仍需打磨**。
*   **升级路径脆弱**：用户反馈升级版本时出现失败且无明确报错，说明迁移脚本的健壮性需要加强。
*   **信任与安全**：第三方安全审计已介入，用户和开发者对“记忆投毒”等新型攻击向量表现出高度关注，希望尽快修补漏洞。

## 8. 待处理积压
*   **关键待合并 PR**：
    *   PR [#2432](https://github.com/nearai/ironclaw/pull/2432)：修复 Telegram Token 配置流程，涉及大规模代码重构，需尽快 Review 合并以解决 P0 问题。
    *   PR [#2429](https://github.com/nearai/ironclaw/pull/2429)：并发消息处理，风险等级 Medium，需充分测试以防引入竞态条件。
*   **长期未解决的 P0 Issue**：
    *   Issue [#1997](https://github.com/nearai/ironclaw/issues/1997) 与 [#1998](https://github.com/nearai/ironclaw/issues/1998)：Slack App 的可用性与连接流程损坏问题自 4 月初报告至今仍未彻底解决，建议提升优先级。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-15)

## 1. 今日速览
LobsterAI 今日展现出极高的开发活跃度，虽然 Issue 增量较少，但代码提交与合并动作频繁。过去 24 小时内共有 24 个 PR 发生更新，其中 14 个已成功合并关闭，主要集中在性能优化、构建体积缩减及 UI 体验修复。值得注意的是，Windows 端冷启动速度优化取得了显著成效（约减少 16 秒）。整体项目处于功能迭代后的稳定性打磨与性能调优阶段，健康度良好。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日共有 **14 个 PR** 合并入主分支，显著提升了项目的稳定性与性能：

*   **性能优化重大突破**：PR [#1673](https://github.com/netease-youdao/LobsterAI/pull/1673) 通过移除遗留配置检查和优化补丁，成功将 Windows 冷启动时间从约 51 秒缩短至约 35 秒，极大改善了 Windows 用户的首次体验。
*   **构建与包体积优化**：PR [#1685](https://github.com/netease-youdao/LobsterAI/pull/1685) 和 [#1684](https://github.com/netease-youdao/LobsterAI/pull/1684) 分别通过移除重复网关负载和清理孤立原生二进制文件，显著减小了安装包体积，特别是解决了 macOS 包体积异常增大的问题。
*   **核心运行时升级**：PR [#1676](https://github.com/netease-youdao/LobsterAI/pull/1676) 完成了 OpenClaw 运行时及网关配置的升级（至 v2026.4.8），新增了会话保活策略，并修复了 Windows 网关启动的多个缺口。
*   **UI/UX 修复**：PR [#1674](https://github.com/netease-youdao/LobsterAI/pull/1674) 修复了 MCP 卡片描述 Tooltip 定位偏移问题；PR [#1672](https://github.com/netease-youdao/LobsterAI/pull/1672) 修复了颜色主题名称不随语言切换翻译的国际化问题。

## 4. 社区热点
由于今日 Issue 仅有 1 条新增，且 PR 评论数据未显示大量讨论，热点主要集中在**高影响力的代码提交**上：

*   **[性能热点] Windows 启动速度优化**：PR [#1673](https://github.com/netease-youdao/LobsterAI/pull/1673) 受到关注，直接解决了 Windows 平台启动慢的痛点，是今日最具分量的更新。
*   **[体验热点] 网关错误重试机制**：PR [#1681](https://github.com/netease-youdao/LobsterAI/pull/1681) 修复了 Provider 返回错误时网关重试导致 UI 重复报错的问题，直接提升了对话流程的稳定性。

## 5. Bug 与稳定性
今日报告并处理的关键问题如下：

*   **🚨 新增 Bug [高优先级]**：
    *   Issue [#1671](https://github.com/netease-youdao/LobsterAI/issues/1671)：用户在使用 Markdown 转 Word 功能时，中途遇到 `sse response finish reason: full` 错误导致任务中断。目前该 Issue 处于 Open 状态，尚无修复 PR，建议开发团队关注 SSE 流式响应处理的边界条件。
*   **✅ 已修复 Bug**：
    *   **重复错误弹窗**：PR [#1681](https://github.com/netease-youdao/LobsterAI/pull/1681) 修复了 Gateway 重试机制引发的 UI 重复报错。
    *   **UI 显示异常**：PR [#1680](https://github.com/netease-youdao/LobsterAI/pull/1680) 修复了千帆模型提供商图标未注册显示为通用图标的问题。
    *   **国际化遗漏**：PR [#1672](https://github.com/netease-youdao/LobsterAI/pull/1672) 修复了主题名称无法翻译的问题。

## 6. 功能请求与路线图信号
根据今日 Open 状态的 PR，可以看出项目下一步的演进方向：

*   **Agent 能力增强**：PR [#1668](https://github.com/netease-youdao/LobsterAI/pull/1668) 提出为每个 Agent 配置独立工作目录，这将极大增强多 Agent 场景下的文件管理灵活性，预计合并后将显著提升多任务并行能力。
*   **交互体验升级**：PR [#1682](https://github.com/netease-youdao/LobsterAI/pull/1682) 正在为 Cowork 会话增加 AI 回复朗读功能（TTS），PR [#1675](https://github.com/netease-youdao/LobsterAI/pull/1675) 则优化会话列表的时间分组显示。这些表明项目正在向更完善的桌面助手体验靠拢。
*   **数据洞察**：PR [#1679](https://github.com/netease-youdao/LobsterAI/pull/1679) 为定时任务增加了统计仪表盘，预示着项目将加强对任务执行情况的监控与数据分析能力。

## 7. 用户反馈摘要
从今日唯一的 Issue [#1671](https://github.com/netease-youdao/LobsterAI/issues/1671) 中可以看出：
*   **痛点**：文件转换（MD 转 Word）功能的稳定性仍有待提升，特别是在 SSE 连接处理上，用户遇到了任务中断的情况。
*   **场景**：用户倾向于使用 LobsterAI 进行长文档的格式转换与处理，对任务的完整性和稳定性要求较高。

## 8. 待处理积压
*   **待处理 Issue**：Issue [#1671](https://github.com/netease-youdao/LobsterAI/issues/1671) 报告的文件转换中断问题需要尽快确认原因，此类功能性 Bug 会直接影响用户对 AI 工具链的信任度。
*   **待合并 PR**：目前有 10 个 PR 处于 Open 状态，其中 [#1682](https://github.com/netease-youdao/LobsterAI/pull/1682) (朗读功能) 和 [#1668](https://github.com/netease-youdao/LobsterAI/pull/1668) (独立工作目录) 功能完整度较高，建议优先 Review 并推进测试。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-15)

## 1. 今日速览
Moltis 项目今日呈现极高的维护活跃度，呈现出"高频修复、快速迭代"的特征。过去 24 小时内，项目成功关闭了 9 个 Issues 并合并了 8 个 PRs，主要解决了 Docker 安全隔离、第三方 Provider 兼容性（Gemini/OpenRouter、Slack TLS）以及 GraphQL 接口规范性等关键问题。值得注意的还有社区贡献者对构建系统的完善和文档的补充。整体来看，项目健康度良好，响应速度极快，安全性得到了显著增强。

## 2. 版本发布
- **版本号**: `20260414.02`
- **更新推断**: 基于今日合并的 PR，该版本主要包含针对 Docker 沙箱的安全增强、Slack 客户端 TLS 支持修复以及 GraphQL 接口的破坏性更新（sessionKey 强制校验）。建议用户尽快升级以避免安全风险，并注意 GraphQL 接口的兼容性调整。

## 3. 项目进展
今日共有 8 个 PR 合并入主分支，显著提升了项目的稳定性与功能完善度：

*   **安全性与沙箱增强**: PR [#706](https://github.com/moltis-org/moltis/pull/706) 合并，修复了 Issue [#705](https://github.com/moltis-org/moltis/issues/705)。通过屏蔽 `/proc` 和 `/sys` 挂载点，防止容器泄露主机元数据（如 BIOS 序列号、磁盘 UUID），显著提升了 Docker/Podman 环境下的安全性。
*   **集成与通信修复**:
    *   PR [#707](https://github.com/moltis-org/moltis/pull/707) 合并，修复了 Slack Socket Mode 因 TLS 支持缺失导致的连接失败问题 (Issue [#543](https://github.com/moltis-org/moltis/issues/543))。
    *   PR [#715](https://github.com/moltis-org/moltis/pull/715) 合并，实现了 Telegram 消息中保留发送者用户名并传递给 LLM 的功能 (Issue [#713](https://github.com/moltis-org/moltis/issues/713))，增强了多渠道集成的上下文感知能力。
*   **API 规范化**: PR [#708](https://github.com/moltis-org/moltis/pull/708) 合并，强制要求 GraphQL 的 chat 操作必须携带 `sessionKey` 参数，修复了之前会话键被忽略的严重 Bug (Issue [#542](https://github.com/moltis-org/moltis/issues/542))。此变更为破坏性更新，客户端需同步调整。
*   **构建与生态**: 合并了 Nix flake 构建支持 ([#469](https://github.com/moltis-org/moltis/pull/469)) 及新增 OpenAI-oxide provider ([#521](https://github.com/moltis-org/moltis/pull/521))，丰富了部署选项与模型后端选择。

## 4. 社区热点
今日社区讨论最聚焦的问题在于 **UI 交互细节** 与 **Docker 安全配置**：

*   **Issue [#671](https://github.com/moltis-org/moltis/issues/671)** (评论数 4): 用户反馈主会话界面的 "Clear" 按钮被隐藏，导致无法清理主会话。该问题在当日被迅速修复并关闭，反映了维护团队对用户体验细节的高度关注。
*   **Issue [#705](https://github.com/moltis-org/moltis/issues/705)** (评论数 1): 关于 Docker 暴露主机 `/proc` 和 `/sys` 的安全隐患引发了讨论。该问题直接促成了关键安全补丁的合入。

## 5. Bug 与稳定性
今日共处理多个严重程度较高的 Bug，其中安全漏洞已修复，但仍有新的兼容性问题浮现：

*   **[已修复-严重] Docker 主机信息泄露**: Issue [#705](https://github.com/moltis-org/moltis/issues/705) 指出 Docker 容器可访问宿主机敏感路径。**状态**: 已通过 PR [#706](https://github.com/moltis-org/moltis/pull/706) 修复。
*   **[待修复-高] Google Gemini 兼容性故障**: Issue [#716](https://github.com/moltis-org/moltis/issues/716) 报告通过 OpenRouter 调用 Gemini 模型时失败，原因是 Tool Schema 中包含 Gemini 不支持的数组类型定义。**状态**: 已有 2 个修复 PR 提交 ([#717](https://github.com/moltis-org/moltis/pull/717), [#719](https://github.com/moltis-org/moltis/pull/719))，待合并。
*   **[待修复-中] MCP 工具调用异常**: Issue [#712](https://github.com/moltis-org/moltis/issues/712) 报告 MCP 无法正常工作。**状态**: 待处理。
*   **[已修复-中] 网络过滤代理失效**: Issue [#407](https://github.com/moltis-org/moltis/issues/407) 关于 web_search 功能失效的问题已于今日关闭。

## 6. 功能请求与路线图信号
*   **灵活的 Agent 指导方针**: PR [#714](https://github.com/moltis-org/moltis/pull/714)（待合并）提议允许通过 `GUIDELINES.md` 文件覆盖硬编码的工具指导方针。这显示了项目向"高度可定制化 Agent"方向发展的信号，允许用户更精细地控制 Agent 行为。
*   **Matrix OpenID 支持**: Issue [#711](https://github.com/moltis-org/moltis/issues/711) 请求为 Matrix 集成添加 OpenID 认证，反映了用户在企业级/去中心化通信平台集成的需求。

## 7. 用户反馈摘要
从 Issues 评论中可以看出，Moltis 的用户群体主要由开发者和高级用户组成，他们对以下方面较为敏感：
1.  **安全性**: 用户能够敏锐发现容器逃逸风险（如 `/proc` 暴露），并期望项目提供开箱即用的安全默认配置。
2.  **多模型兼容性**: 用户普遍尝试接入多种 LLM 后端（如 OpenRouter 连接 Gemini、OpenAI-oxide），对 Provider 层的协议适配要求极高。
3.  **部署便利性**: 对 Nix flake 的支持请求表明部分用户对可复现构建环境有强烈需求。

## 8. 待处理积压
以下重要 Issue 和 PR 需要维护者重点关注：

*   **PR [#717](https://github.com/moltis-org/moltis/pull/717) / [#719](https://github.com/moltis-org/moltis/pull/719)**: 针对 Gemini 模型调用的修复 PR 已提交但未合并，这是阻断部分用户使用的关键问题，建议尽快 Merge 其中一个方案。
*   **PR [#709](https://github.com/moltis-org/moltis/pull/709)**: WhatsApp 生态升级（0.2 -> 0.5）涉及大量底层 Store Trait 重构，PR 体积较大，建议优先 Review 以解决消息解析为空的问题。
*   **Issue [#712](https://github.com/moltis-org/moltis/issues/712)**: MCP 工具无法正常工作的 Bug 目前尚无回应，可能影响依赖 MCP 协议的用户使用。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-04-15)

## 1. 今日速览
CoPaw (仓库显示为 QwenPaw) 今日保持极高的开发活跃度，单日 Issues 与 PR 更新总数达 94 条，并发布了重要的 **v1.1.1 正式版**。项目重点集中在模型 Provider 的扩展（新增 OpenRouter/OpenCode）、前端 Console 的体验优化以及系统稳定性的修复。然而，随着版本迭代，用户关于应用重命名带来的路径混淆及升级兼容性问题反馈较多，社区正积极通过 PR 修复启动性能与安全漏洞。总体而言，项目处于功能快速演进与稳定性磨合期。

## 2. 版本发布
今日发布了 **v1.1.1** 及 **v1.1.1-beta.2** 两个版本，主要更新如下：

- **v1.1.1**
  - **✨ 新增功能**：
    - **OpenRouter Provider**: 内置支持，包含模型发现、系列浏览及按模态和价格筛选功能 ([#1192](https://github.com/agentscope-ai/QwenPaw/pull/1192))。
    - **OpenCode Provider**: 内置兼容 OpenAI 接口的 OpenCode 支持。
- **v1.1.1-beta.2**
  - **🔧 改进**：
    - 版本号升级至 1.1.1b2 ([#3343](https://github.com/agentscope-ai/QwenPaw/pull/3343))。
    - 优化控制台 Provider 模型管理弹窗，改进能力标签展示与模型搜索功能。

## 3. 项目进展
今日共有 23 个 PR 被合并，显著推进了功能完善与问题修复：

- **核心功能增强**：
  - **OpenRouter 集成** ([#1192](https://github.com/agentscope-ai/QwenPaw/pull/1192)): 合并了带有模型过滤功能的 OpenRouter 提供者，扩展了模型生态。
  - **控制台前端优化** ([#2996](https://github.com/agentscope-ai/QwenPaw/pull/2996)): 修复了 `git pull` 后前端资源未更新导致 UI 过期的问题，现已支持启动时自动检测构建。
  - **交互体验修复** ([#2987](https://github.com/agentscope-ai/QwenPaw/pull/2987)): 修复了控制台聊天中“取消”操作的竞态条件，解决了点击停止后新消息被忽略的严重 Bug。
- **重要待合并 PR (Under Review/Open)**：
  - **启动性能飞跃** ([#3386](https://github.com/agentscope-ai/QwenPaw/pull/3386)): 通过延迟加载和并行初始化，将服务启动时间从约 4.5 秒缩减至 0.05 秒。
  - **安全性增强** ([#3400](https://github.com/agentscope-ai/QwenPaw/pull/3400)): 提交了 `ShellEvasionGuardian`，用于检测 `execute_shell_command` 中的命令混淆/逃逸攻击，提升沙箱安全。
  - **插件系统雏形** ([#3357](https://github.com/agentscope-ai/QwenPaw/pull/3357)): 后端增加了插件注册与 UI 元数据映射能力，预示着更强的可扩展性。

## 4. 社区热点
- **贡献者招募** 🚀: Issue [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) "Help Wanted" 讨论热度最高（56 评论），项目方列出了详细的开源任务清单（P0-P2 优先级），吸引了大量开发者认领任务，显示出健康的开源社区互动。
- **技能生态讨论**: Issue [#280](https://github.com/agentscope-ai/QwenPaw/issues/280) 讨论了内置 Skills 与 MCPs 的规划（26 评论），用户希望能预装热门技能以提升开箱即用体验，并探讨了依赖管理的平衡。
- **升级与重命名困惑**: Issue [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) 反映了升级后 `WORKING_DIR` 指向旧目录的问题，引发了关于 CoPaw 向 QwenPaw 迁移期间路径管理策略的热议（12 评论）。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，部分已有修复方案：

- **⚠️ 高危 - 路径与兼容性问题**:
  - [Bug #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356): 升级后数据写入路径混乱（.copaw vs .qwenpaw），影响数据一致性。
  - [Bug #3312](https://github.com/agentscope-ai/QwenPaw/issues/3312): Mac 1.1.0 版本安装后新老版本均无法打开，属严重回归。
- **⚠️ 安全隐患**:
  - [Bug #3392](https://github.com/agentscope-ai/QwenPaw/issues/3392): 用户指出 Web UI 缺少 API 登录密码保护，存在安全风险。目前已有 PR [#3257](https://github.com/agentscope-ai/QwenPaw/pull/3257) 正在审核 Web 端的工具调用审批按钮，可能作为安全交互的一环。
- **🐛 一般 Bug**:
  - [Bug #3369](https://github.com/agentscope-ai/QwenPaw/issues/3369): 微信渠道消息截断问题。
  - [Bug #3395](https://github.com/agentscope-ai/QwenPaw/issues/3395): Kimi coding plan 无法使用。
  - [Bug #3379](https://github.com/agentscope-ai/QwenPaw/pull/3379) (已修复): 修复了控制台创建定时任务时的 422 错误。
  - [Bug #3391](https://github.com/agentscope-ai/QwenPaw/pull/3391) (待合并): 修复 Ollama Provider 连接测试失败问题。

## 6. 功能请求与路线图信号
- **自我进化机制**: Issue [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) 提出极具前瞻性的建议，包括“自动模型切换（天梯榜）”、“自我反思与经验总结”以及“跨设备无缝切换”，反映了用户对 AI 智能体自主性和连续性的高期待。
- **离线/局域网支持**: PR [#3388](https://github.com/agentscope-ai/QwenPaw/pull/3388) 提出将前端图标资源本地化，以解决离线部署时图标加载失败的问题，这对企业级私有化部署至关重要。
- **文件操作回滚**: Issue [#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) 正在推进文件操作回滚功能的实现，旨在防止智能体误删文件，增强可靠性。

## 7. 用户反馈摘要
- **安装体验痛点**: Windows 用户对安装包缺乏签名导致的告警感到困扰 ([#3314](https://github.com/agentscope-ai/QwenPaw/issues/3314))，且安装后 PATH 配置问题频发 ([#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309))。
- **功能易用性**: 用户期望 Skill 管理支持分类文件夹 ([#2961](https://github.com/agentscope-ai/QwenPaw/issues/2961)) 及可视化作用域配置（Public/Agent-Shared），现有的管理方式被认为较为混乱。
- **品牌认知割裂**: 用户对 CoPaw 和 QwenPaw 双应用共存及数据目录迁移表示困惑，建议加强引导或统一迁移工具。

## 8. 待处理积压
- **API 认证缺失**: Issue [#3392](https://github.com/agentscope-ai/QwenPaw/issues/3392) 提出的 API 密码认证需求尚未有明确指派的处理 PR，建议维护者尽快标记并纳入安全路线图。
- **模型连接测试强制接口**: Issue [#3377](https://github.com/agentscope-ai/QwenPaw/issues/3377) 建议允许跳过 `/model` 接口测试以适配部分算力一体机，该需求在本地部署场景下较为普遍，目前未见官方回应。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-04-15)

## 1. 今日速览
ZeptoClaw 项目今日整体呈现出**维护模式**的状态，核心开发活动暂停，无新代码合并。项目主要精力集中在依赖库的自动化维护上，Dependabot 一口气提交了 12 个依赖升级 PR，其中包含 Vite 8.0 和 Astro 6.0 等重大版本更新，显示出项目对技术栈现代化的积极跟进，但也给维护者带来了审查压力。社区方面，用户对“真并发/非阻塞架构”的诉求（Issue #486）持续受到关注，标志着项目正面临从单任务处理向多任务并发交互演进的关键节点。

## 2. 版本发布
无。

## 3. 项目进展
今日无合并代码，项目功能层面暂无实质性推进。主要动态集中在依赖更新队列的堆积：
*   **前端工具链大版本升级**：Dependabot 发起了多项核心工具的重大版本更新请求，包括 [Vite 7.3.1 -> 8.0.0](qhkm/zeptoclaw PR #512) 和 [Astro 5.18.1 -> 6.0.5](qhkm/zeptoclaw PR #508)。这些更新通常包含 Breaking Changes，需要维护者重点审查兼容性。
*   **后端核心库迭代**：Rust 核心依赖如 `uuid`、`sha2`、`google-cloud-auth` 等均收到了常规更新请求，确保了底层库的安全性与性能。

目前所有 PR 均处于 Open 状态，等待核心团队介入处理。

## 4. 社区热点
今日最活跃的讨论是 **[Issue #486 [feat] true concurrent/non blocking design](qhkm/zeptoclaw Issue #486)**。

*   **核心诉求**：用户 @superhero75 指出当前智能体在执行长时任务时无法响应用户交互，导致用户体验割裂。建议参考 `spacedriveapp/spacebot` 的设计，引入真正的并发/非阻塞架构。
*   **分析**：该 Issue 被标记为“Large”工作量，且涉及底层子系统重构。这反映了用户对 AI 智能体“主动性”和“交互性”的高期待，不再满足于简单的请求-响应模式。社区讨论聚焦于如何解耦任务执行与用户交互，这是下一代 AI Agent 产品的核心竞争力之一。

## 5. Bug 与稳定性
过去 24 小时内未收到新的 Bug 报告或崩溃反馈，项目当前版本运行稳定。

## 6. 功能请求与路线图信号
*   **架构级重构信号**：Issue #486 提出的并发设计若被采纳，将成为项目未来版本的重头戏。虽然目前尚无相关 PR 提交，但该需求直击 AI Agent 痛点，建议维护者将其纳入中长期路线图进行评估。
*   **依赖升级风险**：虽然不是功能请求，但 Vite 8.0 和 Astro 6.0 的升级 PR 暗示项目可能正在进行前端架构的现代化调整，这可能为未来的 UI 性能优化铺路。

## 7. 用户反馈摘要
用户对智能体的**任务处理机制**提出了更高要求。
*   **痛点**：长任务阻塞用户操作，无法在后台运行任务的同时进行其他交互。
*   **期望**：实现类似操作系统的多任务处理能力，让智能体在“干活”的同时也能“聊天”或接受新指令。

## 8. 待处理积压
*   **12 个待合并的依赖更新 PR**：由于所有 PR 均由 Dependabot 发起且尚未合并，积压数量较多。特别是 Vite 和 Astro 的大版本更新，建议维护者优先确认 CI 流水线是否通过，并尽快合并无风险的补丁更新，避免技术债累积。
    *   重点审查：[PR #512 (Vite 8.0)](qhkm/zeptoclaw PR #512), [PR #510 (Astro 6.0)](qhkm/zeptoclaw PR #510)。

---
*数据来源: GitHub (qhkm/zeptoclaw)*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-04-15)

> 数据来源：[EasyClaw GitHub](https://github.com/gaoyangz77/easyclaw)
> 分析周期：2026-04-14 至 2026-04-15

## 1. 今日速览
EasyClaw 项目今日整体呈现“低交互、高交付”的状态。过去 24 小时内，社区互动较为平静，未有新的 Issue 提交或 Pull Request 更新。然而，项目维护者在今日发布了 v1.7.10 版本，表明项目仍在持续进行维护与优化。当前的活跃度主要集中在版本发布与文档更新上，整体项目健康度稳定，处于维护迭代阶段。

## 2. 版本发布
今日发布了新版本 **v1.7.10 (RivonClaw v1.7.10)**。

- **更新重点**：
  本次更新重点解决了 macOS 平台的兼容性与安装体验问题。
- **详细说明**：
  针对 macOS 用户遇到的 **"'RivonClaw' is damaged and can't be opened"** 错误，新版本发布说明中详细解释了这是由 macOS Gatekeeper 安全机制拦截未签名应用导致的，并非文件损坏。
- **迁移/安装注意事项**：
  用户需注意，在 macOS 上安装后若提示损坏，需通过 **终端** 执行命令移除隔离属性。发布页面已提供具体的修复指引，建议 macOS 用户在遇到启动问题时优先查阅 Release Notes。

🔗 **链接**：[v1.7.10 Release Note](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.10)

## 3. 项目进展
本日无合并或关闭的 Pull Request。项目的主要推进体现在 v1.7.10 版本的发布上，主要工作可能集中在内部代码构建、签名问题调研或文档说明优化，而非代码库层面的合并请求处理。

## 4. 社区热点
过去 24 小时内，Issues 和 PRs 板块均无新增或活跃记录。社区目前处于静默观察期，暂无明显热点话题讨论。

## 5. Bug 与稳定性
- **新增 Bug 报告**：无。
- **已知问题解决**：虽然今日未收到新 Bug 报告，但 v1.7.10 版本的发布侧面解决了 macOS 平台长期存在的“应用已损坏”误报问题。这是一个影响用户体验的常见阻碍，通过文档指引已得到有效缓解。目前暂无严重级别的新 Bug。

## 6. 功能请求与路线图信号
本日无新功能请求或相关讨论。从版本迭代看，当前阶段重心倾向于应用的稳定性保障与多平台兼容性适配，而非激进的功能扩张。

## 7. 用户反馈摘要
由于今日无 Issue 更新，暂无直接的用户反馈文本。但从 Release Notes 针对 macOS 报错的详细解释可以看出，维护者关注到了 macOS 用户在安装环节的高频痛点，并采取了积极的文档引导措施，体现了对用户体验的细致关注。

## 8. 待处理积压
当前数据显示无新增积压，但也无历史积压清理记录。鉴于今日活跃度为零，建议维护者留意观察未来几日的社区反馈，特别是 v1.7.10 发布后可能涌来的用户咨询或 Bug 报告。

---

**分析师总结**：EasyClaw 今日以“静默发布”为主旋律，核心亮点在于解决 macOS 安装障碍。建议关注后续社区对新版本的反馈。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*