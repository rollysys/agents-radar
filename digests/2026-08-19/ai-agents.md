# OpenClaw 生态日报 2026-08-19

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-08-19 01:21 UTC

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

**OpenClaw 项目日报 - 2026-08-19**

### 1. 今日速览
OpenClaw 项目今日呈现出极高的社区活跃度，Issue 与 PR 更新量均达到 500 条，显示出项目正处于密集开发与维护阶段。核心焦点集中在 **Session 状态管理与 SQLite 数据库的性能瓶颈** 上，多个 P1 级别的阻塞问题引发了热烈讨论。尽管今日无新版本发布，但团队合并了多个关键修复 PR，显著改善了网关重启恢复、OOM 崩溃循环及安装安全策略。整体来看，项目正在积极解决长期存在的稳定性问题，尤其是针对高负载场景下的数据一致性和资源泄漏进行了深度优化。

### 2. 版本发布
无新版本发布。

### 3. 项目进展
今日共有 98 个 PR 被合并或关闭，项目整体稳定性显著增强。重点进展如下：
*   **安全策略增强**：PR [#116489](https://github.com/openclaw/openclaw/pull/116489) 与 [#120900](https://github.com/openclaw/openclaw/pull/120900) 引入了对安装策略警告的确认机制，允许管理员在 Control UI 中审查并确认潜在风险的插件安装，提升了系统的安全性边界。
*   **稳定性修复**：PR [#123976](https://github.com/openclaw/openclaw/pull/123976) 修复了主机 `ps` 命令卡顿导致工作进程永久冻结的问题；PR [#126096](https://github.com/openclaw/openclaw/pull/126096) 修复了引导式认证过程中的原子性问题，防止了凭证孤岛的创建。
*   **用户体验优化**：PR [#125815](https://github.com/openclaw/openclaw/pull/125815) 解决了会话所有者分配后无法回复的问题；PR [#126074](https://github.com/openclaw/openclaw/pull/126074) 增加了侧边栏分类控制功能，提升了多会话管理效率。

### 4. 社区热点
今日讨论最活跃的 Issue 集中在实时语音与底层状态管理：
*   **[#116201](https://github.com/openclaw/openclaw/issues/116201) [评论: 60]**：实时语音会话在特定情况下保留了无界的 Provider 状态，导致资源泄漏。社区深入讨论了如何设置硬性所有权边界以防止资源耗尽。
*   **[#112423](https://github.com/openclaw/openclaw/issues/11223) [评论: 16]**：大型 SQLite 记录清理阻塞网关事件循环，导致系统假死。用户反馈这在长会话归档时尤为明显。
*   **[#77598](https://github.com/openclaw/openclaw/issues/77598) [评论: 23]**：这是一个长期运行的观察性 Issue，用于跟踪开发智能体的行为轨迹，记录了智能体在长时间运行下的异常表现。

### 5. Bug 与稳定性
今日报告了多个影响严重的 Bug，主要集中在数据损坏与进程阻塞：
*   **P0/严重**：
    *   **[#115424](https://github.com/openclaw/openclaw/issues/115424)**：网关 V8 堆内存溢出（OOM），导致主会话崩溃并在重启恢复时陷入 7 核心转储循环。**状态：Open，待修复。**
    *   **[#112395](https://github.com/openclaw/openclaw/issues/112395)**：从 6.11 升级到 7.1 后，启动迁移预检阻塞网关，导致服务无法启动。**状态：Open，已复现。**
*   **P1/高优先级**：
    *   **[#115908](https://github.com/openclaw/openclaw/issues/115908)**：会话记录投影协调在持续写入下发生死锁，阻塞主线程。
    *   **[#101290](https://github.com/openclaw/openclaw/issues/101290)** [已关闭]：CLI 启动预检在网关运行时损坏实时状态 DB。该问题已被标记为无法在主分支复现，可能与特定环境有关。
    *   **[#126087](https://github.com/openclaw/openclaw/pull/126087)** [Fix PR]：已提交修复，解决了重启恢复的轮次显示致命错误的问题。

### 6. 功能请求与路线图信号
*   **SQLite 接口增强**：Issue [#79902](https://github.com/openclaw/openclaw/issues/79902) 建议在数据库优先运行时之上增加面向同伴应用的 SQLite 接口，以便高级用户构建自定义逻辑。这表明项目正在向更深度的开发者生态演进。
*   **智能体自压缩**：Issue [#6757](https://github.com/openclaw/openclaw/issues/6757) 提出允许智能体主动触发上下文压缩（Self-compact tool），而非依赖用户干预。这反映了用户对长上下文自动化管理的强烈需求。
*   **UI 改进**：Issue [#75947](https://github.com/openclaw/openclaw/issues/75947) 提出基于 UX 评分优化 UI 质量，目前的配置界面被认为过于密集且难以导航。

### 7. 用户反馈摘要
*   **痛点**：用户普遍反映升级版本后的**迁移过程**存在较大风险，容易出现数据库损坏或配置丢失（如 #112395, #90378）。此外，**长会话的处理**（如 SQLite 阻塞、上下文压缩）是另一个主要痛点。
*   **场景**：多智能体协作、长时运行的开发任务、以及企业级集成（如 MS Teams, Feishu）是目前的主要使用场景。
*   **评价**：用户对项目的技术深度表示认可，但对 UI/UX 和版本迁移的平滑度表示不满，认为目前的配置界面“像 AI 生成的代码”（#75947）。

### 8. 待处理积压
*   **长期未解决的回归问题**：Issue [#38327](https://github.com/openclaw/openclaw/issues/38327)（Google Vertex Gemini 回归）自 3 月开启至今仍未修复，影响了部分特定模型用户的使用。
*   **需要决策的功能**：Issue [#96975](https://github.com/openclaw/openclaw/issues/96975) 关于子智能体完成上下文的隔离设计，已进入产品决策阶段，等待维护者最终定夺。

---

## 横向生态对比

# 2026-08-19 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于**从功能验证迈向生产可用**的关键转折期。各核心项目普遍聚焦于解决高负载下的**稳定性（OOM、数据库瓶颈）**与**架构解耦**，以应对长时运行和复杂任务的需求。同时，**用户体验（WebUI 重构）**与**安全隔离（沙箱、权限控制）**成为项目拉开差异化的重点方向，显示出生态正在从极客玩具向专业工具演进。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新量 | PRs 更新量 | 版本发布情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 (极高) | ~500 (极高) | 无 | **活跃/攻坚期**：核心问题集中爆发，社区讨论热烈，修复速度快，但存量 P1 问题较多。 |
| **Zeroclaw** | 50 | 50 | 无 | **高活跃/治理期**：架构重构落地，合并积压明显，安全修复及时，Windows 兼容性是短板。 |
| **CoPaw** | 45 | 50 | 无 | **高活跃/扩展期**：侧重插件生态与多渠道接入，安全与稳定性并重，社区反馈闭环较好。 |
| **IronClaw** | 21 | 40 | v1.3.0-rc.2 | **高活跃/冲刺期**：发布候选版本，重点解决升级崩溃与自动化稳定性，路线图清晰。 |
| **NanoBot** | 10 | 27 | 无 | **活跃/迭代期**：功能迭代迅速，集成能力强，核心逻辑健壮性正在修复中。 |
| **Hermes Agent** | 50 | 50 | v0.20.4 | **稳定期/新痛点涌现**：发布稳定版，Nix 支持亮眼，但 Desktop 性能问题引发大量关注。 |
| **NanoClaw** | - (较少) | 17 合并 | 无 | **高活跃/重构期**：底层架构大改，数据库与会话驱动解耦，为未来扩展铺路。 |
| **Moltis** | - (较少) | 5 合并 | 2个版本 | **快速上升期**：发布节奏快，补齐文件管理与容器支持，功能实用性强。 |
| **LobsterAI** | - (较少) | 16 合并 | v2026.8.18 | **迭代期**：新引擎集成，UI/UX 优化显著，历史积压清理中。 |
| **PicoClaw** | 6 | 4 | 无 | **维护模式/转型期**：活跃度低，正处于 WebUI 重构的关键节点。 |
| **NullClaw / TinyClaw / ZeptoClaw / EasyClaw** | 0 | 0 | 无 | **静默**：无可见活动。 |

## 3. OpenClaw 在生态中的定位

*   **核心参照与流量中心**：OpenClaw 以极高的 Issue/PR 更新量（500+）稳居生态流量中心，是社区讨论最密集的项目。其核心定位为**企业级/高负载场景下的基础设施**。
*   **技术路线差异**：
    *   相比 **NanoBot/Moltis** 的轻量级与快速集成，OpenClaw 更侧重于**底层状态的持久化与一致性**（如 Session 状态管理、SQLite 深度优化），但也因此背负了较重的性能包袱。
    *   相比 **Zeroclaw** 积极推动架构统一（Agent Turn 引擎），OpenClaw 目前正处于解决历史遗留问题（如网关 OOM、迁移阻塞）的**质量巩固阶段**。
*   **优势与挑战**：优势在于**技术深度**和**社区规模**，能够吸引开发者解决复杂问题；挑战在于**用户体验（UI/UX）**评价较低，且版本迁移风险较高，影响了从试用到生产的转化率。

## 4. 共同关注的技术方向

1.  **数据库与存储瓶颈**
    *   **涉及项目**：OpenClaw, NanoClaw, LobsterAI。
    *   **具体诉求**：随着会话增长，SQLite 在高并发或大数据量下成为性能瓶颈（阻塞主线程、OOM）。NanoClaw 正在进行异步化改造，OpenClaw 在优化清理机制，LobsterAI 修复了外键约束。这是当前智能体长时运行的最大拦路虎。

2.  **沙箱隔离与安全执行**
    *   **涉及项目**：Zeroclaw, IronClaw, Moltis, CoPaw, NanoBot。
    *   **具体诉求**：Agent 执行代码的安全性成为共识。Moltis 完善 Podman 支持，CoPaw 讨论 Shell 转义检查，IronClaw 规划端到端沙箱，NanoBot 修复子进程资源限制。生态正从“能跑代码”向“安全跑代码”进化。

3.  **会话持久化与记忆管理**
    *   **涉及项目**：Zeroclaw, IronClaw, OpenClaw。
    *   **具体诉求**：跨会话的目标保持与上下文压缩。Zeroclaw 推进 Goal Mode，IronClaw 重构内存系统，OpenClaw 讨论智能体自压缩。用户不再满足于单轮对话，而是追求 Agent 的“长期记忆”。

4.  **用户体验与 WebUI**
    *   **涉及项目**：PicoClaw, OpenClaw, LobsterAI, Hermes Agent。
    *   **具体诉求**：TUI（终端界面）门槛过高，WebUI 成为普及关键。PicoClaw 将其列为高优路线图，OpenClaw 也在优化侧边栏管理，Hermes Agent 则在 Desktop 端持续打磨。

## 5. 差异化定位分析

| 项目 | 核心定位 | 功能侧重 | 目标用户 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **企业级基础设施** | 状态管理、网关稳定性、安全策略 | 后端开发者、企业集成方 |
| **NanoBot** | **集成型智能体框架** | 多模态、多平台接入、元搜索 | 需要快速集成多渠道的开发者 |
| **Zeroclaw** | **架构先锋** | 引擎统一、硬件加速、目标模式 | 极客、边缘计算/私有化部署者 |
| **Hermes Agent** | **桌面个人助手** | Desktop 客户端体验、NixOS 原生支持 | 个人开发者、Linux 深度用户 |
| **PicoClaw** | **轻量级/嵌入式** | 资源占用低、WebUI 转型中 | 嵌入式设备、树莓派用户 |
| **IronClaw** | **自动化执行引擎** | 自动化任务稳定性、预算控制、沙箱 | 自动化工作流构建者 |
| **Moltis** | **实用主义工具** | 文件管理、IoT 集成、容器化 | 个人知识管理、IoT 爱好者 |

## 6. 社区热度与成熟度

*   **第一梯队（成熟度高/活跃度极高）**：**OpenClaw**。社区庞大，问题反馈丰富，正处于从“能用”到“好用”的深水区，需警惕稳定性口碑风险。
*   **第二梯队（快速迭代/上升期）**：**Zeroclaw, NanoBot, IronClaw, CoPaw**。架构调整频繁，功能更新快，社区响应积极，是技术创新的主力军。
*   **第三梯队（稳定发布/特定领域）**：**Hermes Agent, LobsterAI, Moltis**。已发布稳定版本或侧重特定场景（如 Desktop、IoT），用户反馈相对聚焦。
*   **第四梯队（维护/停滞）**：**PicoClaw**。处于转型阵痛期；**NullClaw/TinyClaw** 等基本处于停滞状态。

## 7. 值得关注的趋势信号

1.  **SQLite 成为“隐形杀手”**：多个头部项目（OpenClaw, NanoClaw）今日均报告了严重的 SQLite 阻塞或 OOM 问题。这表明智能体应用的数据模型已超出 SQLite 设计初衷，**下一代存储架构（如异步 IO、嵌入式 KV 或原生 Postgres 支持）可能成为核心竞争力**。
2.  **“目标驱动”成为架构分水岭**：Zeroclaw 的 Goal Mode RFC 和 IronClaw 的记忆系统重构表明，智能体正在从“被动响应”向“主动规划与执行”转变。能否在多轮对话中保持目标不丢失，是 Agent 与 Chatbot 的核心区别。
3.  **个人助手的“本地化”与“生态化”**：Hermes Agent 对 Nix Home Manager 的支持获得极高评价，Moltis 集成 Tesla API。这反映出用户对**数据隐私**和**个人数据主权**的重视，AI 助手正逐渐成为用户控制个人数字资产的接口，而非仅仅是聊天窗口。
4.  **跨平台一致性的短板暴露**：Zeroclaw 的 Windows 测试大面积失败提醒开发者，虽然 Linux 是服务器主流，但随着 AI 智能体进入个人桌面，**Windows/macOS 的兼容性测试**将成为用户体验的重要组成部分。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-08-19)

## 1. 今日速览
NanoBot 项目今日保持高强度的开发迭代态势，虽然无新版本发布，但代码库活跃度极高。过去 24 小时内共有 27 个 PR 更新，其中 6 个 PR 已合并或关闭，21 个处于待合并状态，显示出维护者正在积极审查大量社区贡献与核心重构。Issue 板块共有 10 条更新，主要涉及对近期更新的回归问题反馈及核心组件稳定性的讨论。整体来看，项目正处于功能增强与稳定性修复并行的关键阶段，重点关注 Agent 核心循环与多平台适配优化。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日共有 6 个 PR 完成合并或关闭，显著提升了 WebUI 的交互能力与 TUI 的稳定性：

*   **[MERGED] feat(webui): add lightweight cross-session messaging** (PR #5358): 重大功能更新，为持久化会话引入了服务端拥有的稳定 `@handle`，实现了跨会话消息传递功能，增强了多会话管理能力。
*   **[MERGED] fix(tui): refresh expired API credentials** (PR #5432): 修复了 TUI 中 API 凭证过期后的刷新逻辑，解决了 HTTP 401 错误导致的会话中断问题，提升了长时间运行时的稳定性。
*   **[MERGED] fix(tui): keep composer visible and focused** (PR #5427): 优化了 TUI 界面体验，修复了点击其他区域后输入框失去焦点的问题，并改进了占位符的对比度。
*   **[MERGED] test(exec): wait deterministically for truncation output** (PR #5433): 提升了测试套件的可靠性，替换了固定延时等待，解决了 Windows 平台上的测试不稳定问题。

项目整体向前迈进了重要一步，尤其是在多会话协同和 UI 响应性方面得到了显著增强。

## 4. 社区热点
今日社区讨论最活跃的话题集中在集成兼容性问题上：

*   **Issue #2493 [LANGSMITH is not working]**: 该 Issue 获得了 7 条评论和 1 个点赞，是今日互动最多的讨论。用户报告最新更新移除 `litellm_provider.py` 后导致 LangSmith 集成失效。这反映了用户对工作流依赖组件稳定性的高度关注。维护者 @ojassharma7 已迅速提交修复 PR #5436。
*   **Issue #5149 [no audio ?]**: 关于 WhatsApp 频道音频发送功能的缺陷引发了 6 条评论讨论，用户反馈能够接收音频但无法发送，涉及底层 ffmpeg 处理逻辑，是待解决的高关注度体验问题。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及回归错误和核心逻辑缺陷，部分已有关联修复：

*   **[P1 回归] LangSmith 集成失效 (Issue #2493)**: 严重程度高，影响现有用户工作流。已有修复 PR #5436 待合并。
*   **[P1 安全] Shell 子进程无资源限制 (Issue #4797)**: 报告指出 `ExecTool` 缺少 ulimit/cgroups 限制，存在被恶意利用耗尽系统资源的风险。关联的修复 PR #4880 已提交多日，今日仍有更新，亟待审核合并。
*   **[P2 核心逻辑] AgentLoop 异常处理缺失 (Issue #5429 & Issue #5428)**: 用户 @yu-xin-c 深入分析代码，指出 `AgentLoop` 在后台任务异常捕获和任务组清理方面存在缺陷，可能导致资源泄漏或错误被吞没。相关修复 PR #5431 和 PR #5430 已提交。
*   **[P2 代理配置] Socks 代理兼容性 (Issue #5425)**: 自定义 OpenAI 兼容提供商不支持 `socks://` 别名，导致请求失败。已有修复 PR #5435。

## 6. 功能请求与路线图信号
今日的功能动向显示出项目正在向更强大的生态集成和更智能的交互演进：

*   **元搜索集成 (PR #5234)**: 正在尝试集成 mst-python 作为新的元搜索提供商，通过 RRF 算法聚合多引擎结果，有望大幅提升 Agent 的信息获取能力，目前处于 Open 状态，是值得关注的 P1 级特性。
*   **MiniMax 音乐生成 (PR #5212)**: 正在为现有的音乐提供商栈增加 MiniMax 音乐生成引导，扩展了多模态能力。
*   **WebUI 后续建议 (PR #5408)**: 计划在 WebUI 成功回复后生成临时的后续建议，模仿 DeerFlow 交互模式，旨在提升用户粘性与交互效率。

## 7. 用户反馈摘要
从 Issue 评论中提炼出以下用户痛点：
*   **集成依赖痛点**: 用户对框架层文件的变动（如 litellm_provider 移除）极其敏感，期望官方提供更平滑的迁移路径或兼容方案。
*   **多模态稳定性**: 在 WhatsApp 等即时通讯平台接入场景下，音频处理仍是易错的环节，用户期望更完善的媒体文件支持。
*   **成本控制焦虑**: Issue #5409（已关闭）反映了商业化部署时用户对 LLM API 调用成本的担忧，期望框架层面提供更精细的预算防火墙机制。

## 8. 待处理积压
以下高优先级项目长期处于待处理状态，建议维护者重点关注：

*   **PR #4880 [P1 安全修复]**: 针对子进程资源限制的安全修复，创建于 7 月，今日再次活跃但仍未合并。鉴于其涉及核心安全，建议优先 Review 并合并。
*   **PR #5257 [P2 修复]**: 修复 Agent 在空闲状态下持续目标的边界问题，涉及核心调度逻辑，已提交多日，需关注潜在的逻辑冲突。

---
*数据来源：GitHub (HKUDS/nanobot)*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是 Zeroclaw 项目 2026-08-19 的动态日报：

### 1. 今日速览
Zeroclaw 今日保持着极高的社区活跃度，过去 24 小时内共有 50 个 Issue 和 50 个 PR 更新，显示出项目正处于密集开发与治理阶段。尽管没有发布新版本，但项目在架构治理上迈出了坚实一步，关闭了包括“统一 Agent Turn 引擎”在内的多个关键 RFC 和高优先级 Bug。目前共有 48 个 PR 处于待合并状态，表明代码审查队列存在一定积压，维护者需关注合并吞吐量。安全方面，今日修复了 Google STT API Key 泄露风险，并关闭了 CI 安全扫描告警，整体安全性得到加固。

### 2. 版本发布
无新版本发布。

### 3. 项目进展
今日共有 19 个 Issue 关闭和 2 个 PR 更新（主要为合并或关闭），显著推进了架构统一与稳定性修复：

*   **架构重构落地**：关键的架构 RFC **#7415**（统一三个 Agent Turn 引擎）已关闭。这标志着项目成功消除了历史遗留的冗余执行路径，将 `run_tool_call_loop`、`turn_streamed` 等逻辑合并为单一实现，大幅降低了核心 Runtime 的维护成本。
*   **Web 端功能修复**：解决了影响工作流的 S1 级 Bug **#8563**，修复了 Web Dashboard 无法加载 SOP（标准作业程序）的问题，确保了 Agent 能够正确读取共享目录下的技能文件。
*   **安全与合规清理**：关闭了 CI 顾问扫描失败的 Issue **#10097**，并合并了针对 Google STT API Key 泄露的修复 PR **#10107**（见下文 Bug 分析）。
*   **功能请求关闭**：关闭了关于 Webhook 支持 Agent 模式的请求 **#3542**，表明该功能可能已通过其他方式实现或暂不纳入路线图。

### 4. 社区热点
今日讨论最热烈的话题集中在架构设计与跨平台适配上：

*   **[#8303 RFC: Goal mode v1](https://github.com/zeroclaw-labs/zeroclaw/issue/8303)**（22 评论）：社区正在热议如何实现“目标模式”，即在多轮对话中持久化追踪用户目标。讨论涉及控制平面设计与异步子任务处理，这是实现 Agent 自主性的关键一步，风险等级为 High，已被接受状态。
*   **[#7462 [Bug]: 74 test failures on Windows](https://github.com/zeroclaw-labs/zeroclaw/issue/7462)**（17 评论）：该 Issue 反映了项目在 Windows 平台上的测试覆盖不足问题（Unix-only 命令、路径语义等）。由于 CI 仅运行 Linux 测试，导致了严重的退化行为，社区正积极讨论修复方案。
*   **[#7929 [Feature]: Unify slash-command registries](https://github.com/zeroclaw-labs/zeroclaw/issue/7929)**（8 评论）：针对 Web UI、TUI 和 Runtime 中 Slash 命令注册表不一致导致的“漂移”问题，社区提出了统一注册中心的方案，以解决命令别名和可用性不同步的痛点。

### 5. Bug 与稳定性
今日报告及处理的 Bug 主要涉及安全泄露、内存增长与跨平台兼容性：

*   **[S1 - 严重] Google STT API Key 泄露风险**：
    *   **状态**：PR **#10107** 已提交修复。
    *   **详情**：Google Speech-to-Text API Key 曾出现在请求 URL 中，可能被代理日志记录。PR 已将其移至 `x-goog-api-key` Header 中传输。
    *   **链接**：[PR #10107](https://github.com/zeroclaw-labs/zeroclaw/pull/10107)
*   **[S1 - 工作流阻塞] Web Dashboard 无法检测 SOP**：
    *   **状态**：已关闭（修复已合入）。
    *   **详情**：Agent 无法通过 Web 端加载 `/zeroclaw-data/.zeroclaw/shared/sops` 下的技能文件。
    *   **链接**：[Issue #8563](https://github.com/zeroclaw-labs/zeroclaw/issue/8563)
*   **[S2 - 性能退化] MCP/Tool-schema 导致 RSS 无限增长**：
    *   **状态**：Issue **#8642** 持续追踪中。
    *   **详情**：在 Agent Loop 中克隆 Schema 导致内存泄漏，尤其在高负载 WSL2 环境下易触发 OOM。
    *   **链接**：[Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issue/8642)
*   **[S2 - 跨平台] Windows 测试套件大面积失败**：
    *   **状态**：Issue **#7462** 活跃讨论中。
    *   **详情**：Windows 环境（Codepage 936）下 74 个测试失败，主要涉及路径语义和编码问题。
    *   **链接**：[Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issue/7462)

### 6. 功能请求与路线图信号
结合今日活跃的 RFC 与 PR，以下功能信号值得关注：

*   **原生硬件加速支持**：PR **#9109** 正在添加对 Hailo-Ollama 的原生支持。这将允许 Zeroclaw 直接通过 `/api/tags` 和 `/api/chat` 协议调用 Hailo 硬件加速，对于边缘端 AI 部署具有重要意义。
    *   **链接**：[PR #9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)
*   **会话持久化增强**：RFC **#9998** 提出了“Session-scoped persistent prompt attachments”，旨在解决长对话或历史截断后 Agent 丢失目标约束的问题，这可能是下一阶段 Agent 记忆管理的核心特性。
    *   **链接**：[Issue #9998](https://github.com/zeroclaw-labs/zeroclaw/issue/9998)
*   **安全传输层中继**：Issue **#8358** 正在推进 `zerorelay` 节点，用于解决 NAT/CGNAT 环境下的连接问题，这将极大改善个人助手的网络连通性。
    *   **链接**：[Issue #8358](https://github.com/zeroclaw-labs/zeroclaw/issue/8358)

### 7. 用户反馈摘要
从 Issue 评论中提炼出以下用户痛点：

*   **跨平台一致性差**：Windows 用户在进行开发与测试时频繁遇到兼容性问题（路径、编码），认为 CI 应当包含 Windows 流程以防止回归。
*   **配置复杂度高**：用户反馈 Slash 命令在不同终端（Web vs TUI）行为不一致，配置容易出错，强烈呼吁统一配置入口。
*   **Webhook 功能受限**：用户希望 Webhook 能触发完整的 Agent 工作流（Issue #3542），而不仅仅是简单的 Chat 模式，表明对自动化集成的需求强烈。

### 8. 待处理积压
当前项目存在较明显的代码审查积压，建议维护者优先处理以下高优先级/高影响的待合并 PR：

*   **[P1] PR #10003**：修复 Reliable Provider 拒绝尝试的计数逻辑，防止重试风暴。标签含 `do-not-merge`，需确认是否仍需修改。
    *   **链接**：[PR #10003](https://github.com/zeroclaw-labs/zeroclaw/pull/10003)
*   **[P1] PR #9402**：修复 Docker 沙箱嵌套问题，防止运行时环境冲突。
    *   **链接**：[PR #9402](https://github.com/zeroclaw-labs/zeroclaw/pull/9402)
*   **[P2] PR #9808**：Dependabot 提交的大规模依赖更新（46 个 Rust 包），需尽快审查以解决潜在安全漏洞。
    *   **链接**：[PR #9808](https://github.com/zeroclaw-labs/zeroclaw/pull/9808)

---
*数据截止：2026-08-19 00:00 UTC*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-08-19)

## 1. 今日速览
Hermes Agent 项目于今日发布了 **v0.20.4** 稳定版，该版本汇总了过去两周合并的 74 个 PR，标志着项目在经过密集开发后进入稳定发布期。社区活跃度保持高位，过去 24 小时内 Issues 和 PR 更新数均为 50 条，显示出良好的开发迭代节奏。然而，Desktop 客户端在 macOS 上的性能回归问题以及 Skills Index 的服务降级引发了大量用户反馈，成为当前稳定性建设的重点攻坚方向。

## 2. 版本发布
- **版本号：** [v0.20.4 (v2026.8.18)](https://github.com/nousresearch/hermes-agent/releases/tag/v2026.8.18)
- **更新类型：** 补丁发布
- **核心内容：** 这是一个针对下游消费者（Docker 镜像、托管部署、新安装）的稳定标签版本。该版本主要将自 v0.20.3 以来合并的约 74 个 PR 进行了打包封装。
- **重要变更：**
    - **稳定性提升：** 包含了大量针对 Desktop、Gateway 以及 Provider 兼容性的修复。
    - **功能集成：** 确认包含了备受期待的 Nix Home Manager 模块支持。
- **迁移建议：** 建议所有基于 v0.20.3 或更早版本运行的生产环境尽快更新至该标签，以获得最新的稳定性修复。

## 3. 项目进展
今日共有 13 个 PR 被合并或关闭，主要集中在部署生态支持与关键组件重构上：
- **[Nix 生态支持落地]** PR [#9087](https://github.com/NousResearch/hermes-agent/pull/9087) 与 [#84178](https://github.com/NousResearch/hermes-agent/pull/84178) 正式关闭，标志着 Hermes Agent 现已原生支持 NixOS Module 和 Home Manager Module，极大简化了 Linux 用户的声明式部署体验。
- **[Desktop 架构优化]** PR [#89611](https://github.com/NousResearch/hermes-agent/pull/89611) 开启了对 Desktop 端 "God files"（巨型文件）的重构，将核心代码拆解为原子模块，这将显著提升后续 UI 层的开发效率与可维护性。
- **[关键修复合并]** PR [#89532](https://github.com/NousResearch/hermes-agent/pull/89532) 修复了 TUI 模式下冷启动 Profile 无法正确加载密钥源的问题，提升了非 GUI 环境下的安全性。

## 4. 社区热点
今日社区讨论主要集中在自动化服务的稳定性和客户端性能问题上：
- **[服务降级] Skills Index 索引过期 (#66616)**：评论数高达 **54 条**。自动化探测显示索引已过期 29.8 小时，导致 Skills Hub 依赖的功能降级。社区成员正在积极讨论 `.github/workflows` 的构建失败原因，目前已有修复 PR [#89608](https://github.com/NousResearch/hermes-agent/pull/89608) 提交待合并。
- **[性能回退] macOS Intel 设备渲染进程 CPU 空转 (#88275)**：评论数 **9 条**。用户反馈 Desktop 客户端在空闲状态下仍占用 40-70% CPU，导致设备过热。此问题引发了关于 Electron 渲染循环和 GPU 功耗管理的深入技术探讨，目前尚未有官方定论。
- **[功能请求] Nix Home Manager 模块 (#9056)**：获得 **12 个点赞**。随着相关 PR 的合并，该 Issue 已关闭，社区对此次更新反响热烈，认为这是个人助手工具融入 Linux 工作流的关键一步。

## 5. Bug 与稳定性
今日新报 Bug 集中在 Desktop 客户端交互与平台兼容性方面，部分严重问题已有修复方案：

| 严重度 | Issue | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **P2** | [#89586](https://github.com/NousResearch/hermes-agent/issues/89586) | **Windows Desktop 切换 Profile 卡死**：点击侧边栏切换 Profile 无反应，无网络请求，UI 静默失败。 | Open |
| **P2** | [#89599](https://github.com/NousResearch/hermes-agent/issues/89599) | **Windows CLI 更新死锁**：`hermes update` 命令因进程锁定自身 exe 无法覆盖写入而失败。 | Open |
| **P2** | [#89576](https://github.com/NousResearch/hermes-agent/issues/89576) | **MCP 健康检查致 Slack 掉线**：Desktop 发起的健康探测会创建新会话，导致旧会话被踢下线。 | Open |
| **P3** | [#89600](https://github.com/NousResearch/hermes-agent/issues/89600) | **CI 环境插件启用挂起**：stdout 重定向时，`hermes plugins enable` 因缺少 TTY 检查而无限等待。 | **Fix in PR #89605** |

## 6. 功能请求与路线图信号
- **记忆增强与自主维护 (#18885)**：用户请求允许 Cron 任务调用 Memory Provider 工具，以实现记忆库的自主去重与信任评分校准。这符合 Agent 自主进化的技术趋势，目前处于需求讨论阶段，尚未见实现 PR。
- **多轮对话效率优化 (#89467)**：PR 提议增强 `clarify` 工具，支持一次调用询问多个独立问题。此举旨在减少 Agent 与 LLM 的交互轮次，降低延迟与成本，有望在下个版本纳入。

## 7. 用户反馈摘要
- **痛点集中：** Desktop 客户端在 macOS Intel 设备上的高 CPU 占用问题持续发酵，严重影响续航与发热控制，部分用户被迫回退版本或禁用 GPU。Windows 平台的更新与 Profile 切换死锁问题亦严重阻碍了生产环境的正常使用。
- **正向反馈：** 开发者用户对 Nix Home Manager 的支持表示高度认可，解决了长期以来个人助手工具难以在 NixOS 上声明式管理的痛点。
- **场景洞察：** 越来越多的用户使用 `--isolated` 标志运行 Dashboard 并通过 Desktop 连接，这暴露了跨进程数据库路径隔离 (#88897) 和会话状态同步的复杂性，提示架构层需加强 Profile 身份的绑定机制。

## 8. 待处理积压
- **[#66616 Skills Index Stale]**：该自动化流水线故障已导致文档站点功能受损超过 24 小时，虽已有修复 PR [#89608](https://github.com/NousResearch/hermes-agent/pull/89608)，但建议维护者优先合并以恢复服务。
- **[#88275 macOS CPU Idle]**：性能回退问题影响面广，且涉及底层渲染循环，需尽快定位是否为 Electron 版本升级引入的回归问题。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-08-19)

## 1. 今日速览
PicoClaw 项目今日整体活跃度中等，呈现出明显的“维护模式”特征。过去 24 小时内无新版本发布，核心活动集中在问题追踪与代码库清理。共更新 6 条 Issues（含 1 条关闭）和 4 条 PRs（含 2 条关闭），显示出维护者正在处理积压任务，但新功能合并节奏放缓。社区方面，关于 WebUI 的高优先级路线图讨论持续升温，表明降低用户门槛仍是下一步发展的核心诉求。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 2 个 PR 被关闭，无新增合并 PR，项目代码库无功能性向前推进，主要处于维护与整理阶段：

*   **清理 Anthropic API 支持 PR**：PR #1158 (`feat: add anthropic-messages protocol`) 于今日关闭。该 PR 旨在支持 Anthropic 原生 API 格式，自 3 月提交后一直未合并，最终关闭可能意味着方案被否决或需重新设计。
    *   链接: [sipeed/picoclaw PR #1158](https://github.com/sipeed/picoclaw/pull/1158)
*   **清理调试日志 PR**：PR #3317 (`feat(providers): log prompt cache tokens`) 关闭。该 PR 旨在优化 DeepSeek 等提供商的缓存 Token 日志输出，关闭可能是因为维护者拒绝或提交者放弃。
    *   链接: [sipeed/picoclaw PR #3317](https://github.com/sipeed/picoclaw/pull/3317)

## 4. 社区热点
今日社区关注度最高的话题围绕**易用性与新用户引导**：

*   **WebUI 支持呼声高涨**：Issue #806 ([Feature]: Add webUI support) 成为今日最热门讨论。该 Issue 创建于 2 月，今日再次活跃，获得 8 个点赞和 9 条评论。社区普遍认为，现有的 TUI（终端界面）对非技术用户门槛过高，Web UI 是 PicoClaw 普及化的关键一步。标签已标记为 `priority: high` 和 `roadmap`，值得持续关注。
    *   链接: [sipeed/picoclaw Issue #806](https://github.com/sipeed/picoclaw/issues/806)
*   **IRC 长消息支持**：Issue #3287 讨论了 IRC 协议下长消息分割的处理问题，用户希望 PicoClaw 能更智能地合并分割的消息，评论数达 6 条，反映了特定渠道用户的精细化需求。
    *   链接: [sipeed/picoclaw Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)

## 5. Bug 与稳定性
今日报告的新 Bug 集中在**特定渠道配置**与**第三方 API 集成**，总体稳定性未受核心影响：

*   **【高】Google Antigravity 接口 429 错误**：Issue #3339 报告称，尽管 OAuth 验证成功，但生成请求始终返回 429 (Resource Exhausted)。这可能涉及 API 配额或兼容性问题，目前暂无修复 PR。
    *   链接: [sipeed/picoclaw Issue #3339](https://github.com/sipeed/picoclaw/issues/3339)
*   **【中】LINE Channel 无效配置项**：Issue #3328 指出 `webhook_host` 和 `webhook_port` 配置项在代码中未被读取，导致用户配置无效。已有修复 PR #3329 提交，正在等待 Review。
    *   链接: [sipeed/picoclaw Issue #3328](https://github.com/sipeed/picoclaw/issues/3328)
    *   修复链接: [sipeed/picoclaw PR #3329](https://github.com/sipeed/picoclaw/pull/3329)
*   **【低】输入框聚焦 CPU 占用高**：Issue #3292 已关闭。该问题仅影响特定环境下的前端性能，随着 Issue 关闭，推测已通过非代码方式解决或无法复现。
    *   链接: [sipeed/picoclaw Issue #3292](https://github.com/sipeed/picoclaw/issues/3292)

## 6. 功能请求与路线图信号
*   **WebUI 重构进行中**：Issue #806 明确标注 "Refactoring now"，意味着 WebUI 不仅仅是一个提案，已进入实质性开发/重构阶段。这将是 PicoClaw 从极客工具转向大众产品的里程碑。
*   **Shell 权限控制修复**：PR #3314 试图修复 `customAllowPatterns` 无法生效的问题，这将增强 Agent 执行系统命令的安全性。虽然目前状态为 Stale，但属于必要修复，有望纳入下个版本。
    *   链接: [sipeed/picoclaw PR #3314](https://github.com/sipeed/picoclaw/pull/3314)

## 7. 用户反馈摘要
从评论中可以看出，用户痛点正从“核心功能缺失”转向“细节体验优化”：
*   **痛点**：新手入门难，WebUI 缺失导致部署和管理的第一公里受阻；IRC 等传统协议的兼容性细节处理不够完善。
*   **场景**：用户尝试将 PicoClaw 接入 Google Antigravity 等新型模型服务，遇到配额/兼容性阻碍；部分用户在树莓派等嵌入式设备上部署时关注 CPU 占用。

## 8. 待处理积压
以下重要 Issue/PR 处于 Stale 状态，长期未获响应或合并，需维护者重点关注：

*   **PR #3314**：修复 Agent 无法执行 Shell 命令白名单的 Bug，影响安全性配置，长期未合并。
    *   链接: [sipeed/picoclaw PR #3314](https://github.com/sipeed/picoclaw/pull/3314)
*   **Issue #3301**：Dispatch rules（分发规则）下的会话清除与压缩失效问题，涉及复杂路由逻辑，已被标记 Stale。
    *   链接: [sipeed/picoclaw Issue #3301](https://github.com/sipeed/picoclaw/issues/3301)

---
*分析师注：PicoClaw 目前处于关键的转型期，WebUI 的重构将决定其市场广度。建议维护者优先处理积压的稳定性 PR，为新版本发布扫清障碍。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-08-19)

## 1. 今日速览
NanoClaw 项目今日呈现“架构重构与稳定性修复并行”的态势。核心开发团队密集推送了 **17 个 PR 的合并/关闭**，重点聚焦于底层数据库架构的异步化改造与会话驱动层的解耦，显示出项目正在为支持更复杂的后端与运行时环境进行深度的底层铺垫。Issue 方面，虽然新增了一个关于 WebSocket 连接静默重试导致超时的体验问题，但也成功解决了两个长期存在的更新机制 Bug。整体来看，项目处于**高活跃度开发阶段**，代码质量与架构健壮性是当前的核心关注点。

## 2. 版本发布
**无新版本发布。** 鉴于当前大量破坏性重构（BREAKING）PR 处于待合并或刚合并状态，预计下一个版本将包含重大底层变更，建议关注后续 Release Notes。

## 3. 项目进展
今日项目进展主要集中在**后端架构解耦**与**运维稳定性提升**，具体包括：

*   **数据库架构重构（已合并/已关闭）：** 核心贡献者 @moshe-nanoco 完成了一系列关于 Central Database 的重构 PR（如 [#3323](https://github.com/nanocoai/nanoclaw/pull/3323)、[#3326](https://github.com/nanocoai/nanoclaw/pull/3326)），实现了数据库操作的异步化，修复了并发竞争条件，并统一了数据库路径管理。这为未来支持多后端驱动打下了坚实基础。
*   **会话运行时抽象（进行中）：** @gavrielc 提交了关键 PR [#3306](https://github.com/nanocoai/nanoclaw/pull/3306) 与 [#3307](https://github.com/nanocoai/nanoclaw/pull/3307)，引入 `SessionDriver` 接缝，将会话生命周期（spawn, stop 等）与具体的 Docker 实现解耦。此举标志着 NanoClaw 正式向支持多种容器运行时或沙箱环境迈进。
*   **重要 Bug 修复：** 修复了 Claude 适配器中错误的速率限制处理逻辑 ([#3077](https://github.com/nanocoai/nanoclaw/pull/3077))，该修复解决了“遥测信息被错误映射为终端配额错误”的问题，显著提升了 Claude 渠道的稳定性。同时，解决了 Slack 凭证签发与服务认证不匹配的问题 ([#3341](https://github.com/nanocoai/nanoclaw/pull/3341))。

## 4. 社区热点
今日社区关注度最高的动态主要集中在以下领域：

*   **WebSocket 响应延迟问题 ([#3338](https://github.com/nanocoai/nanoclaw/issues/3338))：** 这是一个新开的高优先级 Issue。用户反馈在 Codex WebSocket 卡顿时，系统内部的 5 分钟重试机制对用户不可见，导致 NanoClaw 必须等待 10 分钟超时。这暴露了后端重试机制与前端超时策略之间的信息同步缺失，引发了关于用户体验优化的讨论。
*   **新渠道适配器贡献 ([#3343](https://github.com/nanocoai/nanoclaw/pull/3343))：** 社区开发者 @sfakam 提交了支持 Cisco Webex 的 REST 轮询适配器，为企业内网环境无法使用 Webhook 的场景提供了解决方案，丰富了 NanoClaw 的渠道生态。

## 5. Bug 与稳定性
根据今日数据，Bug 修复是本次更新的重头戏：

*   **[已修复] 更新机制静默失败 ([#2868](https://github.com/nanocoai/nanoclaw/issues/2868))：** 修复了 `/update-skills` 在已安装频道上静默跳过代码更新的问题，避免了用户手动更新时的困惑。
*   **[已修复] 更新过程中断后的数据一致性风险 ([#3194](https://github.com/nanocoai/nanoclaw/issues/3194))：** 修复了 `/update-nanoclaw` 在验证失败前就修改运行环境的问题，增强了更新过程的原子性与回滚安全性。
*   **[待修复] WebSocket 空闲重试不可见 ([#3338](https://github.com/nanocoai/nanoclaw/issues/3338))：** 目前处于 Open 状态，属于 P1 级别的体验问题，可能导致用户误判系统死机，尚无关联 Fix PR。

## 6. 功能请求与路线图信号
*   **多运行时支持路线图：** PR [#3306](https://github.com/nanocoai/nanoclaw/pull/3306) 提及 "Docker as the built-in realization"，暗示未来 NanoClaw 可能支持 Podman 或其他容器技术，甚至本地进程模式，这为轻量化部署提供了信号。
*   **Slack 机器人体验优化：** PR [#3342](https://github.com/nanocoai/nanoclaw/pull/3342) 提议自动拒绝“无主”频道的邀请，避免了 Bot 潜水但无响应的尴尬局面，提升了企业级协作工具的治理规范性。

## 7. 用户反馈摘要
从 Issue 评论与描述中提炼出以下痛点：
*   **透明度缺失：** 用户对后端重试机制（如 Codex 的 5 分钟重试）无感知，导致在面对长时间无响应时感到焦虑，建议增加中间状态的反馈机制。
*   **更新可靠性焦虑：** 用户对系统更新可能导致的环境损坏（数据库未回滚、Git 配置丢失）表示担忧，今日的修复 (#3194) 直接回应了这一痛点。

## 8. 待处理积压
*   **Issue #3338 (Codex WebSocket Timeout):** 该问题直接影响用户等待体验，建议优先处理，需设计一种机制将后端重试状态透传至前端或调整超时阈值。
*   **PR #3307 (Session Driver Refactor):** 作为核心架构变更，目前处于 Open 状态且涉及大量逻辑修改，需要维护者进行严格的代码审查与测试验证，以免引入回归问题。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-08-19)

## 1. 今日速览
IronClaw 项目今日保持高强度迭代态势，正式发布了 `v1.3.0-rc.2` 候选版本，重点修复了 1.2 版本升级过程中的崩溃循环问题及运行时 SSH 支持。项目活跃度极高，共处理 21 条 Issue 和 40 条 PR，其中核心开发者正大力推进自动化运行稳定性与内存系统的重构。整体来看，项目正处于 v1.3.0 正式版发布前的收尾与稳定性攻坚阶段，同时为 v1.4.0 版本的架构演进（如设计系统、沙箱机制）铺设基础。

## 2. 版本发布
- **[ironclaw-v1.3.0-rc.2](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.3.0-rc.2)**
    - **关键修复**：解决了从 1.2 版本升级时因 `activation_state` 字段处理不当导致的启动崩溃循环，确保升级过程平滑且数据完整。
    - **功能恢复**：恢复了对 Reborn 运行时镜像中 Worker SSH（端口 2222）的 opt-in 支持。
    - **影响评估**：这是一个关键的稳定性修复版本，建议所有还在 1.2 版本的用户在正式版发布前进行预览测试。

## 3. 项目进展
今日共有 15 个 PR 合并或关闭，显著提升了代码质量与测试覆盖率：
- **代码重构与清理**：[PR #7734](https://github.com/nearai/ironclaw/pull/7734) 成功完成了测试模块的提取工作，将 317 个测试用例从巨型文件中分离，优化了构建结构。
- **基础设施稳定性**：[Issue #7714](https://github.com/nearai/ironclaw/issues/7714)（libSQL 写连接饥饿导致资源治理失效）已关闭，相关修复已合并，显著提升了高并发下的数据库稳定性。
- **用户体验优化**：[Issue #7638](https://github.com/nearai/ironclaw/issues/7638) 和 [Issue #7639](https://github.com/nearai/ironclaw/issues/7639) 均已关闭，WebUI 的线程删除提示与内联通知组件得到了统一优化，提升了界面交互一致性。

## 4. 社区热点
今日最受关注的讨论集中在自动化执行的可靠性与系统架构设计：
- **[Issue #6879](https://github.com/nearai/ironclaw/issues/6879) (Automation runs are hit-or-miss)**：自动化任务执行极不稳定，有时仅作为普通聊天轮次处理。这反映了 Agent 在无人值守场景下的核心痛点，社区强烈呼吁解决此结构性问题。
- **[PR #7491](https://github.com/nearai/ironclaw/pull/7491) (feat(coding): omp core-tool contract...)**：核心开发者 @serrrfirat 提议用标准化的 `omp` 工具链替换现有的编码工具，引发了关于工具链标准化与模型兼容性的深度技术讨论。

## 5. Bug 与稳定性
今日报告了若干关键 Bug，主要集中在计费与自动化逻辑：
- **[严重] [Issue #7673](https://github.com/nearai/ironclaw/issues/7673) (BudgetLedger accounting refinements)**：发现 `BudgetLedger` 存在重复计费和截断启动窗口的会计漏洞，可能导致资源预算误判。目前尚无针对性修复 PR，需密切关注。
- **[中等] [Issue #7727](https://github.com/nearai/ironclaw/issues/7727) (Catalog capabilities artifact mandatory but never read)**：目录中的 `capabilities` artifact 被强制要求但从未被读取，造成了不必要的下载与存储浪费。
- **[低] [Issue #7726](https://github.com/nearai/ironclaw/issues/7726) (IRONHUB_MANIFEST_URL hardcoded)**：配置项虽然在代码中存在，但实际被硬编码限制，阻碍了私有化部署场景。

## 6. 功能请求与路线图信号
v1.4.0 版本规划日益清晰，多个 Epic 今日有重要更新：
- **内存系统重构**：[Issue #7731](https://github.com/nearai/ironclaw/issues/7731) 提议集成 Mnesis 作为新的内存提供者，旨在解决跨会话记忆召回难题。
- **语音交互**：[PR #7724](https://github.com/nearai/ironclaw/pull/7724) 正在为 WebUI 引入基于 NEAR AI Whisper 的语音转文字功能，强调“仅转录不自动发送”的安全交互模式。
- **沙箱隔离**：[Issue #7732](https://github.com/nearai/ironclaw/issues/7732) 提出了端到端的 CLI 沙箱解决方案，预示着 Agent 的安全执行环境将大幅升级。
- **设计系统**：[Issue #7733](https://github.com/nearai/ironclaw/issues/7733) 与 [Issue #7038](https://github.com/nearai/ironclaw/issues/7038) 正推进设计文档治理与 Storybook 组件库建设，UI/UX 标准化进入实施阶段。

## 7. 用户反馈摘要
从 Issues 评论与摘要中提炼出以下核心反馈：
- **痛点：记忆丢失**：法律与测试领域的用户反馈，Agent 在不同会话间无法可靠召回已确立的上下文信息（[Issue #7185](https://github.com/nearai/ironclaw/issues/7185)），这直接影响了 Agent 作为长期助手的可用性。
- **痛点：自动化不可靠**：用户抱怨存储的 Prompt 执行结果随机性大，尤其是在小模型上，有时完全不产生有效输出（[Issue #6879](https://github.com/nearai/ironclaw/issues/6879)）。
- **痛点：Slack 集成隐私问题**：在公共频道中，未链接用户的连接提示消息对所有人可见，且流程繁琐，用户期望更私密的引导流程（[Issue #7681](https://github.com/nearai/ironclaw/issues/7681)）。

## 8. 待处理积压
- **[长期未响应] [PR #3676](https://github.com/nearai/ironclaw/pull/3676) (Security Docs Rework)**：该 PR 自 5 月开启至今未合并，虽经重构但长期处于 Open 状态。安全文档的完善对于企业级采纳至关重要，建议维护者优先审查合并。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-08-19)

## 1. 今日速览
LobsterAI 项目今日迎来重要版本更新，活跃度显著提升。团队正式发布了 **v2026.8.18** 版本，核心亮点在于引入了实验性的 **DSH (DeepSeek Harness) 引擎集成**，标志着项目在 AI 引擎多样化支持上迈出关键一步。今日代码合并活动频繁，共有 **16 个 PR 成功合并**，主要集中在功能特性迭代、UI/UX 优化及关键稳定性修复上。Issue 追踪区未见当日新增 Bug，活跃 Issue 均为历史遗留问题的重新激活，整体项目健康度良好，处于功能快速迭代期。

## 2. 版本发布
**[New Release] LobsterAI 2026.8.18**  
发布时间：2026-08-18  
链接：[Releases 2026.8.18](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.18)

**更新亮点：**
- **核心引擎集成**：引入 `dsh engine` 集成，并更新至 `rc.7` 版本，新增 `dsh process launcher`。这表明项目正在探索或集成 DeepSeek 相关的推理引擎/工具链，可能涉及模型推理性能优化或本地化部署方案。
- **功能迭代**：合入了大量 4 月份以来积压的功能 PR，包括用户头像设置、MCP 模版快速添加、技能使用统计、定时任务通知等。

**注意事项：**  
此次更新涉及底层引擎变动，建议用户升级后关注新引擎的兼容性与性能表现。

## 3. 项目进展
今日共有 16 个 PR 合并至主分支，项目进展显著，主要聚焦于以下三个方向：

- **功能增强与体验优化**：
  - [Merged] [PR #1629](https://github.com/netease-youdao/LobsterAI/pull/1629)：新增用户头像设置功能，支持预置头像选择与本地图片上传。
  - [Merged] [PR #1631](https://github.com/netease-youdao/LobsterAI/pull/1631)：MCP 支持快速添加模版，简化 File System、SQLite 等常用服务的配置流程。
  - [Merged] [PR #1621](https://github.com/netease-youdao/LobsterAI/pull/1621)：实现了定时任务完成后的系统级通知推送，提升了任务监控体验。
  - [Merged] [PR #1615](https://github.com/netease-youdao/LobsterAI/pull/1615)：优化会话导出质量，支持 Markdown 复制与元信息包含。

- **稳定性与性能修复**：
  - [Merged] [PR #1597](https://github.com/netease-youdao/LobsterAI/pull/1597)：修复 SQLite 外键约束缺失导致的数据残留问题，提升数据一致性。
  - [Merged] [PR #1626](https://github.com/netease-youdao/LobsterAI/pull/1626)：修复 OpenClaw 网关因配置字段不兼容导致的启动失败问题，解决了 P0 级别的崩溃故障。
  - [Merged] [PR #2508](https://github.com/netease-youdao/LobsterAI/pull/2508)：增强服务器模型加载的容错重试机制，避免网络波动影响使用。

- **UI/UX 重构**：
  - [Merged] [PR #2481](https://github.com/netease-youdao/LobsterAI/pull/2481) & [PR #2418](https://github.com/netease-youdao/LobsterAI/pull/2418)：侧边栏搜索体验升级，新增任务活动过滤器。

## 4. 社区热点
今日活跃的 Issues 均为历史积压问题（创建于 4 月），在今日被重新激活讨论：

- **[Issue #1620] 定时任务通知需求**  
  链接：[netease-youdao/LobsterAI Issue #1620](https://github.com/netease-youdao/LobsterAI/issues/1620)  
  热点分析：用户强烈希望能通过系统通知获知定时任务完成状态。该需求已通过 PR #1621 实现并合并，社区反馈闭环效率极高。

- **[Issue #1614] 集成 hermes-agent 引擎建议**  
  链接：[netease-youdao/LobsterAI Issue #1614](https://github.com/netease-youdao/LobsterAI/issues/1614)  
  热点分析：用户提议将 `hermes-agent` 作为可选引擎。鉴于今日发布的版本正好集成了 DSH 引擎，社区对引擎扩展性的关注度正在上升，此类架构层面的讨论将成为后续重点。

## 5. Bug 与稳定性
今日报告的 Issues 多为历史遗留 Bug，部分已在今日合并的代码中得到修复：

- **P0 级崩溃/启动失败 [已修复]**
  - [Issue #1587](https://github.com/netease-youdao/LobsterAI/issues/1587) & [Issue #1627](https://github.com/netease-youdao/LobsterAI/issues/1627)：报告了客户端启动崩溃、复杂任务崩溃及网关启动失败。  
  - **状态**：PR #1626 修复了网关启动失败的根本原因（配置字段校验），PR #1597 修复了数据库层面的稳定性问题。建议用户升级至 v2026.8.18 验证。

- **功能逻辑缺陷**
  - [Issue #1632](https://github.com/netease-youdao/LobsterAI/issues/1632)：切换本地模型后技能失效。目前尚无对应修复 PR 合并，需关注后续版本。
  - [Issue #1617](https://github.com/netease-youdao/LobsterAI/issues/1617)：技能删除后 UI 未同步。虽未在今日 Release Note 中提及，但属于体验痛点，建议关注。

## 6. 功能请求与路线图信号
- **多引擎架构演进**：今日 DSH 引擎的集成表明项目正在构建多引擎适配层。结合 Issue #1614 的讨论，未来 `hermes-agent` 或其他开源引擎（如 OpenClaw 的替代方案）极有可能被纳入官方支持路线图。
- **通知与交互增强**：PR #1621 的合并标志着项目在“后台任务感知”方面取得了突破，后续可能会进一步完善 Agent 在后台运行时的用户触达机制。

## 7. 用户反馈摘要
通过对活跃 Issues 的分析，用户痛点主要集中在以下方面：
- **本地模型适配门槛高**：用户在添加自定义模型和切换本地模型时遇到较多失败案例（#1622, #1632），反映出本地化部署的文档引导或容错机制仍有待加强。
- **客户端稳定性焦虑**：用户对“稍微复杂的任务就崩溃”（#1627）表示担忧，这在 AI Agent 应用中较为敏感。
- **国际化体验缺失**：用户反馈中英文切换不彻底（#1586），细节体验需打磨。

## 8. 待处理积压
以下重要 PR 长期未合并，建议维护者优先处理：

- **[PR #1277] chore(deps-dev): bump the electron group**  
  链接：[netease-youdao/LobsterAI PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)  
  状态：Open (创建于 2026-04-02)  
  风险：Electron 依赖版本跨度较大（40.2.1 -> 43.4.0），可能存在安全漏洞或兼容性隐患，建议尽快评估合并。

- **[PR #1628] feat(ui)：优化模型选择器 UI**  
  链接：[netease-youdao/LobsterAI PR #1628](https://github.com/netease-youdao/LobsterAI/pull/1628)  
  状态：Open (创建于 2026-04-10)  
  内容：重构模型选择器，增加供应商图标。此改进对用户体验有显著提升，且关联 Issue #1622（自定义模型添加），建议优先 Review。

- **[PR #1634] fix(cowork)：全局搜索修复**  
  链接：[netease-youdao/LobsterAI PR #1634](https://github.com/netease-youdao/LobsterAI/pull/1634)  
  状态：Open (创建于 2026-04-11)  
  内容：修复搜索范围受限的严重 Bug，直接影响多 Agent 场景下的数据检索效率，建议尽快合入。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-08-19)

## 1. 今日速览
Moltis 项目今日展现出极高的维护活跃度与迭代速度，过去24小时内不仅发布了 2 个新版本，还成功合并了 5 个 Pull Requests，并关闭了 2 个遗留 Bug。核心进展主要集中在基础设施增强与 AI 模型兼容性优化上，特别是文件管理系统的引入和 OpenAI 推理工具调用的重构。整体来看，项目处于快速迭代上升期，社区贡献与核心团队开发并行推进，健康度极佳。

## 2. 版本发布
今日连续发布了 **20260818.06** 与 **20260818.08** 两个版本。
- **更新内容推测**：基于合并的 PR 分析，这两个版本主要包含了对 Podman 沙箱逃逸机制的完整支持、Heartbeat 配置修补逻辑的修复，以及全新的托管文件库功能。
- **迁移注意事项**：使用 Podman 作为沙箱环境的用户建议尽快升级，以获得更稳定的 Socket 透传体验；Heartbeat 配置逻辑已修正为“补丁”模式，不再覆盖全量配置，用户需检查 `moltis.toml` 是否符合预期。

## 3. 项目进展
今日共合并/关闭 5 个 PR，项目在功能丰富度与稳定性上均有实质性迈进：
- **核心功能新增**：PR [#1206](https://github.com/moltis-org/moltis/pull/1206) 成功合并，引入了持久化的文件库与设置浏览器。这意味着 Moltis 现在具备了类似 Finder 的文件管理能力，并支持 Docker/Podman 挂载，极大地增强了 AI 智能体操作本地文件的能力。
- **关键架构重构**：PR [#1198](https://github.com/moltis-org/moltis/pull/1198) 重构了 OpenAI 推理工具调用的路由逻辑，将其统一接入 Responses API，这为后续支持更复杂的推理模型（如 o1 系列）铺平了道路。
- **长期遗留问题修复**：PR [#1106](https://github.com/moltis-org/moltis/pull/1106) 历经两个多月终于合并，正式支持 Podman 沙箱逃逸，解决了 Linux 环境下的容器隔离痛点。
- **稳定性修复**：PR [#1209](https://github.com/moltis-org/moltis/pull/1209) 修复了 Heartbeat 配置会被静默重置的严重逻辑错误。

## 4. 社区热点
今日社区关注点集中在**容器化部署**与**配置管理**体验上：
- **Issue [#1095](https://github.com/moltis-org/moltis/issues/1095)**（已关闭）：关于 Podman 无法正常工作的 Bug 终于得到解决。该 Issue 从 6 月初创建至今，引发了较多关注，反映出社区对本地容器化运行环境的强需求。
- **Issue [#1187](https://github.com/moltis-org/moltis/issues/1187)**（已关闭）：Heartbeat 设置 UI 的隐蔽 Bug 被快速修复（从创建到关闭仅 9 天），体现了维护者对用户体验反馈的高响应速度。

## 5. Bug 与稳定性
今日无新增活跃 Bug 报告，重点在于历史遗留 Bug 的清零：
- **[已修复] 配置重置问题**：Issue [#1187](https://github.com/moltis-org/moltis/issues/1187) 指出 Heartbeat UI 会静默重置未表单字段。此问题可能导致用户自定义配置丢失，严重程度中等，现已通过 PR [#1209](https://github.com/moltis-org/moltis/pull/1209) 修复。
- **[已修复] 容器兼容性**：Issue [#1095](https://github.com/moltis-org/moltis/issues/1095) 导致 Podman 环境无法使用，严重程度较高（阻碍性），现已通过 PR [#1106](https://github.com/moltis-org/moltis/pull/1106) 修复。

## 6. 功能请求与路线图信号
- **IoT 与车辆数据集成信号**：当前开放的 PR [#1210](https://github.com/moltis-org/moltis/pull/1210) 提议增加 Tesla Fleet API 连接器。这表明 Moltis 正试图突破单纯的“聊天助手”范畴，向“个人物联网数据中枢”演进，通过只读同步车辆数据，扩展智能体的感知边界。这极有可能成为下一版本的亮点功能。
- **文件系统增强**：已合并的 PR [#1206](https://github.com/moltis-org/moltis/pull/1206) 显示项目正在补齐智能体操作本地文件的短板，这是通往 AGI 类应用的关键一步。

## 7. 用户反馈摘要
- **痛点解决**：用户对 Podman 的支持呼声较高（Issue #1095 持续时间较长），说明 Moltis 的用户群中有相当一部分倾向于使用开源容器方案而非 Docker。
- **使用场景**：用户利用 Moltis 进行复杂的本地任务管理，因此对配置文件的精细化管理有较高要求，不希望 UI 操作破坏底层配置结构（Issue #1187）。
- **满意度**：README 中 Star History 图表的修复（PR #1211）虽然是小修小补，但反映了维护者对项目“门面”的在意，侧面展示了项目的精致度。

## 8. 待处理积压
- **待审查 PR**：[PR #1210](https://github.com/moltis-org/moltis/pull/1210)（Tesla Fleet API）目前处于 Open 状态，这是一个功能较大的 PR，建议维护者尽快进行代码审查与测试，以便合并入主分支。
- **长期维护**：随着文件库功能的加入，需留意未来可能出现的大文件上传/下载性能问题及权限管理反馈。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-08-19)

## 1. 今日速览
CoPaw (核心仓库 QwenPaw) 今日保持高活跃度开发状态，社区互动频繁。过去 24 小时内共有 50 个 PR 更新与 45 个 Issue 更新，其中新开 Issue 数量 (29) 显著高于关闭数量 (16)，表明社区在积极测试新版本的同时也带来了新的压力。项目重点目前明显向**安全性加固**、**多模态处理稳定性**以及**插件/扩展生态**倾斜。虽然今日无新版本发布，但多个涉及核心架构（如 OAuth2、沙箱策略、控制平面）的重要 PR 正在等待合并，预示着下一次版本更新将包含重大改进。

## 2. 版本发布
*   **无新版本发布**。截至 2026-08-19，项目未发布新的 Release 版本，社区主要聚焦于当前开发分支的代码合并与问题修复。

## 3. 项目进展
今日共有 **19 个 PR 已合并/关闭**，主要集中在基础设施稳定性、安全修复及用户体验优化：

*   **基础设施与 API 增强**：
    *   [PR #7072](https://github.com/agentscope-ai/QwenPaw/pull/7072) 已合并，引入了后台聊天任务列表 API，为多 Agent 协作提供了基础查询能力。
    *   [PR #6617](https://github.com/agentscope-ai/QwenPaw/pull/6617) 已合并，修复了流式传输路径下的速率限制重试逻辑，显著提升了高并发下的稳定性。

*   **关键 Bug 修复**：
    *   [PR #7069](https://github.com/agentscope-ai/QwenPaw/pull/7069) 修复了会话重载时历史消息中 data-URL 图片无法渲染的问题，提升了对话连续性体验。
    *   [PR #7064](https://github.com/agentscope-ai/QwenPaw/pull/7064) 修复了 CLI 更新 cron 任务时的文本同步问题。
    *   [PR #7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) 对应的修复已合入，解决了 Agent 执行工具调用时的崩溃问题（async for 遍历 coroutine 错误）。

*   **待合并重要 PR (Under Review)**：
    *   [PR #7112](https://github.com/agentscope-ai/QwenPaw/pull/7112) 提出“隔离本地 QwenPaw Pro 控制平面”，引入多租户与隔离运行时，这是一个重大的架构升级，目前处于 Open 状态。
    *   [PR #7087](https://github.com/agentscope-ai/QwenPaw/pull/7087) 修复了远程媒体 URL 在模型请求端的本地化问题，解决了防盗链导致的媒体加载失败。

## 4. 社区热点
今日社区讨论主要集中在**连接稳定性**与**任务执行流畅度**两个维度：

1.  **[Issue #6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) [热度: 10评论]**
    *   **诉求**：用户强烈建议增加频道的自动重试与健康检测机制。目前自建 Matrix 频道在服务启动快于 QwenPaw 时会导致连接失败，需手动干预。
    *   **分析**：这反映了用户将 QwenPaw 应用于生产环境时的可靠性痛点，对“无人值守”运行有强烈需求。

2.  **[Issue #6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) [热度: 8评论]**
    *   **诉求**：多步骤任务执行中，模型输出规划语句后经常无故停止，需用户手动输入“继续”才能恢复。
    *   **分析**：这是典型的 Agent 自主性中断问题，严重影响了“智能体”的体验流畅度，可能与上下文长度管理或模型输出解析逻辑有关。

3.  **[Issue #7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) [热度: 7评论]**
    *   **诉求**：使用特定模型（GLM 5.3）时出现超过 10 分钟的长时间卡顿/冻结。

4.  **[Issue #7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) [热度: 7评论]**
    *   **诉求**：多 UI 会话并发时，Console 的停止请求意外取消了活跃的 Feishu 会话，涉及会话 ID 交叉的严重 Bug。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在**会话管理**与**外部集成**方面，部分已有修复方案：

*   **严重**:
    *   **[Issue #7110](https://github.com/agentscope-ai/QwenPaw/issues/7110)**：对话上下文包含无法访问的图片链接会导致整个会话不可用（崩溃），需清空对话才能恢复。这是高脆弱性 Bug，需加强异常媒体链接的容错处理。
    *   **[Issue #7063](https://github.com/agentscope-ai/QwenPaw/issues/7063)**：Agent 执行工具调用时必现崩溃（TypeError）。**状态：已修复**，相关代码已合入主分支。

*   **中等**:
    *   **[Issue #7005](https://github.com/agentscope-ai/QwenPaw/issues/7005)**：启用 Shabox 沙箱后，UV 工具无法写入缓存目录，导致运行失败。已有相关 PR [PR #7116](https://github.com/agentscope-ai/QwenPaw/pull/7116) 提出修复挂载路径扩展问题，待合并。
    *   **[Issue #6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)**：MCP driver 忽略配置文件中的 `transport: streamable_http`，硬编码使用 SSE client，导致特定 MCP 服务器连接失败。该问题已存在近一个月，需官方关注。

*   **安全相关**:
    *   **[PR #7120](https://github.com/agentscope-ai/QwenPaw/pull/7120)**：社区提交了默认开启 Shell 转义检查的 PR，旨在防止命令注入风险，目前待审核。
    *   **[PR #7119](https://github.com/agentscope-ai/QwenPaw/pull/7119)**：修复主密钥文件权限问题，确保仅所有者可读。

## 6. 功能请求与路线图信号
结合用户反馈与活跃 PR，以下功能可能纳入近期路线图：

1.  **频道级重试机制**：源自 Issue #6684，针对 DingTalk/Feishu/Matrix 等 Channel 的连接保活与重试逻辑亟待增强。
2.  **插件权限隔离**：Issue #7052 请求为插件 API 增加 `system_prompt` 权限控制，防止敏感提示词泄露，这与当前正在审核的 PR #7112（Pro 控制平面/多租户）方向一致，显示项目正向更细粒度的权限管理演进。
3.  **技能管理优化**：Issue #7090 提出在技能池导入页面增加搜索/过滤功能，随着技能池规模扩大，UI 交互优化将成为必选项。

## 7. 用户反馈摘要
*   **痛点**：
    *   **稳定性依赖人工干预**：多步骤任务执行不连贯（需手动说“继续”）和频道连接需手动“重新保存”，让用户感觉“不够智能”。
    *   **沙箱限制过严**：启用沙箱后，常用的开发工具（如 UV）因路径权限问题无法运行，导致用户被迫关闭安全策略，存在矛盾。
*   **满意度**：
    *   用户对 2.1.0 版本的新特性（如公式显示修复）表示认可。
    *   社区对 OAuth2 持久化 ([PR #7066](https://github.com/agentscope-ai/QwenPaw/pull/7066)) 和远程浏览器支持 ([PR #7054](https://github.com/agentscope-ai/QwenPaw/pull/7054)) 等 PR 表现出高度期待，认为这些更新将解决长期存在的集成痛点。

## 8. 待处理积压
*   **[Issue #6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)**：MCP Transport 配置被忽略的问题已存在近一个月，影响了 Streamable HTTP 协议服务器的对接，建议维护者优先处理。
*   **[Issue #6775](https://github.com/agentscope-ai/QwenPaw/issues/6775)**：Windows 桌面版被杀毒软件误报为木马的问题虽有官方解释，但用户仍有疑虑，建议加强签名认证或白名单引导。

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