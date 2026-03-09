# OpenClaw 生态日报 2026-03-09

> Issues: 500 | PRs: 500 | 覆盖项目: 10 个 | 生成时间: 2026-03-09 02:28 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**日期**: 2026-03-09

---

## 1. 今日速览

过去 24 小时内，OpenClaw 项目保持极高活跃度：共处理 **500 条 Issues 更新**（412 条新开/活跃，88 条关闭）和 **500 条 PR 更新**（362 条待合并，138 条已合并/关闭）。项目于今日发布了 **v2026.3.7** 正式版及 beta 版本，引入了重要的 ContextEngine 插件架构升级。然而，伴随发布出现多个回归问题，尤其是工具调用（exec/read/write）在多个模型提供商处失效，引发社区广泛关注。整体项目处于高速迭代状态，合并活跃度高，但需关注版本稳定性。

---

## 2. 版本发布

### v2026.3.7 发布 ✅

**发布内容**:
- **ContextEngine 插件接口**：新增 `ContextEngine` 插件槽位，支持完整生命周期钩子（`bootstrap`、`ingest`、`assemble`、`compact`、`afterTurn`、`prepareSubagentSpawn`、`onSubagentEnded`），采用基于槽位的注册表和配置驱动解析
- **LegacyContextEngine 包装器**：提供向后兼容支持

**相关链接**:
- Release: [v2026.3.7](https://github.com/openclaw/openclaw/releases/tag/v2026.3.7)
- Beta: [v2026.3.7-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.3.7-beta.1)

---

## 3. 项目进展

过去 24 小时合并/关闭的重要 PR：

| PR | 状态 | 描述 |
|---|---|---|
| [#40462](https://github.com/openclaw/openclaw/pull/40462) | CLOSED | **bodhi_vault**: 新增 vault 模块、多模态技能和 OpenClaw 集成（54 个 TDD 测试通过） |
| [#36960](https://github.com/openclaw/openclaw/pull/36960) | CLOSED | **Android**: 完成通知控制 v1 picker + 混合发现功能 |
| [#40457](https://github.com/openclaw/openclaw/pull/40457) | OPEN | **kimi**: 修复嵌入式运行器中文本/XML 工具调用降级问题 |
| [#39453](https://github.com/openclaw/openclaw/pull/39453) | OPEN | **Gateway**: 修复 Control UI 方法防护阻止插件 webhook POST 请求的问题 |
| [#40435](https://github.com/openclaw/openclaw/pull/40435) | OPEN | **Telegram**: 在双栈失败时使用粘性 IPv4 回退 |
| [#40463](https://github.com/openclaw/openclaw/pull/40463) | OPEN | **MS Teams**: 当 contentBytes 未内联时通过 /$value 获取 hostedContents |
| [#40443](https://github.com/openclaw/openclaw/pull/40443) | OPEN | **UI**: 显式重载时丢弃过时配置状态 |
| [#40464](https://github.com/openclaw/openclaw/pull/40464) | OPEN | **Config**: 序列化异步配置写入以防止启动时数据丢失 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 主题 |
|---|---|---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | **87** | **[enhancement] Internationalization (i18n) & Localization Support** |
| [#32828](https://github.com/openclaw/openclaw/issues/32828) | **40** | **[Bug]: False 'API rate limit reached' on all models** |
| [#75](https://github.com/openclaw/openclaw/issues/75) | **37** | **[enhancement, help wanted] Linux/Windows Clawdbot Apps** |
| [#39651](https://github.com/openclaw/openclaw/issues/39651) | **29** | **[bug, regression] 只会说话不会工作** (Ollama 本地模型权限问题) |
| [#7649](https://github.com/openclaw/openclaw/issues/7649) | **20** | **[bug, stale] Matrix: bot cannot verify its own account for E2EE** |

**热点分析**:
- **i18n 需求迫切**: Issue #3460 获得 87 条评论，表明国际化是多国用户核心诉求，项目方表示暂无带宽支持
- **API 误报率限**: Issue #32828 反映所有模型均报"API rate limit reached"错误，尽管底层 API 正常工作，影响广泛
- **跨平台需求**: Issue #75 (58 👍) 呼吁 Linux/Windows 桌面应用，与 macOS/iOS/Android 保持功能一致

---

## 5. Bug 与稳定性

### 严重回归问题（已报告，暂无 Fix PR）

| Issue | 严重程度 | 描述 |
|---|---|---|
| [#39907](https://github.com/openclaw/openclaw/issues/39907) | 🔴 **Critical** | **v2026.3.7 regression**: kimi-coding/k2p5 发出字面量 exec(...) 文本而非结构化工具调用 |
| [#40082](https://github.com/openclaw/openclaw/issues/40082) | 🔴 **Critical** | OpenClaw 接受任务但代理不执行，返回占位符回复 |
| [#40069](https://github.com/openclaw/openclaw/issues/40069) | 🔴 **Critical** | 工具调用静默失败——声称执行但无实际调用 |
| [#39691](https://github.com/openclaw/openclaw/issues/39691) | 🔴 **Critical** | v2026.3.7 后代理无法运行命令 |
| [#39844](https://github.com/openclaw/openclaw/issues/39844) | 🔴 **Critical** | v2026.3.7 后端回归：多个 provider 的 tool calls 和 session 处理问题 |
| [#37466](https://github.com/openclaw/openclaw/issues/37466) | 🟠 **High** | 无法加载 exec 工具 |
| [#39621](https://github.com/openclaw/openclaw/issues/39621) | 🟠 **High** | v2026.3.7 dashboard 升级后返回纯文本 "Not Found" |

### 已有 Fix PR 的问题

| Issue | Fix PR | 状态 |
|---|---|---|
| kimi 工具调用问题 | [#40457](https://github.com/openclaw/openclaw/pull/40457) | OPEN |
| Telegram 双栈问题 | [#40435](https://github.com/openclaw/openclaw/pull/40435) | OPEN |
| Control UI webhook 阻塞 | [#39453](https://github.com/openclaw/openclaw/pull/39453) | OPEN |

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue | 👍 | 描述 | 潜在纳入 |
|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | **58** | Linux/Windows Clawdbot 桌面应用 | ⭐⭐⭐ 长期需求 |
| [#2317](https://github.com/openclaw/openclaw/issues/2317) | **15** | web_search: 添加 SearXNG 作为回退提供商 | ⭐⭐ 有 PR #25420 |
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | 1 | Internationalization (i18n) 支持 | ⭐ 暂无资源 |
| [#8865](https://github.com/openclaw/openclaw/issues/8865) | 2 | TUI 浅色主题/颜色自定义支持 | ⭐ 长期需求 |
| [#147](https://github.com/openclaw/openclaw/issues/147) | 0 | Brabble 作为 Clawdis 节点实现分布式语音唤醒 | ⭐ 概念阶段 |

**路线图信号**:
- ContextEngine 插件架构的引入（v2026.3.7）表明项目正在向更模块化的可扩展性方向发展
- 多模态技能和 vault 模块（Bodhi）的合并显示知识管理/记忆功能是重点投入方向

---

## 7. 用户反馈摘要

### 核心痛点

1. **工具调用大规模失效**: 多名用户报告 v2026.3.7 升级后，exec/read/write/browser 工具不执行或返回占位符响应（#39907, #40082, #40069, #39691）
2. **macOS 兼容性回归**: v2026.2.26 从通用二进制降级为 arm64-only，导致 Intel Mac 用户无法使用（#28877）
3. **API 误报率限**: 所有模型均报错"API rate limit reached"，但 API 实际正常（#32828）
4. **Ollama 本地模型权限问题**: 使用本地 qwen3.5:2b 时提示无文件创建权限（#39651）
5. **配置数据丢失**: 配置文件在网关重启时被截断为约 10 行（#40464）

### 积极反馈

- 新版本 ContextEngine 插件架构获得技术社区积极评价
- 多平台移动端（iOS/Android）功能持续完善
- 社区贡献活跃，今日提交 PR 数量达 30+

---

## 8. 待处理积压

### 长期未响应的重要 Issues

| Issue | 状态 | 等待时间 | 描述 |
|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | OPEN | ~67 天 | Linux/Windows 桌面应用需求（37 评论, 58 👍） |
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | OPEN | ~40 天 | i18n 国际化支持（87 评论） |
| [#7649](https://github.com/openclaw/openclaw/issues/7649) | OPEN | ~34 天 | Matrix E2EE 账户验证问题 |
| [#25692](https://github.com/openclaw/openclaw/issues/25692) | OPEN | ~13 天 | 网关重启后所有工具不可用—"Tool not found" |

### 需关注的 Stale PRs

| PR | 状态 | 描述 |
|---|---|---|
| [#25420](https://github.com/openclaw/openclaw/pull/25420) | OPEN | feat(tools): 添加 Bocha provider 用于 web_search（24 天） |
| [#26314](https://github.com/openclaw/openclaw/pull/26314) | OPEN | docs: 添加 memory-lancedb-pro 到社区插件列表（12 天） |

---

**报告生成时间**: 2026-03-09  
**数据来源**: GitHub OpenClaw Repository (openclaw/openclaw)

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**报告日期**: 2026-03-09

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**多极分化**格局。头部项目（OpenClaw、NanoBot、Zeroclaw）保持高频迭代，日均 PR 处理量达 30-60 条，已形成较完整的通道集成、工具调用、多模型支持能力；腰部项目（PicoClaw、NanoClaw、IronClaw）聚焦特定场景深化，如安全沙箱、MCP 协议、容器化部署；尾部项目（EasyClaw、ZeptoClaw）活跃度较低，生态位边缘化。整体生态处于**功能快速扩展期**，但多数项目面临回归问题堆积、安全加固不足、跨平台兼容性挑战。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 合并/关闭 | 今日 Release | 核心状态 |
|------|--------------|-----------|-----------|--------------|----------|
| **OpenClaw** | 500 (412 新/活跃) | 500 (362 待合并) | 138 | ✅ v2026.3.7 | 高迭代 + 高回归风险 |
| **Zeroclaw** | 32 (27 新/活跃) | 50 (44 待合并) | 6 | ❌ | 高迭代，重量级功能推进中 |
| **NanoBot** | 20 | 68 | 58 合并 | ✅ v0.1.4.post4 | 高速迭代，多实例支持里程碑 |
| **PicoClaw** | - | 56 (待合并) | 0 | ❌ | 功能开发期，无合并 |
| **NanoClaw** | 18 | 50 | 13 合并 | ❌ | 高迭代，安全修复并进 |
| **IronClaw** | 24 (14 新/活跃) | 50 (25 待合并) | 25 | ❌ | 健康迭代，多 Provider 推进 |
| **LobsterAI** | 8 (7 新/活跃) | 27 | 26 合并 | ✅ v0.2.2 | 功能稳步推进 |
| **ZeptoClaw** | 2 | 2 | 1 合并 | ❌ | 低活跃，功能扩展期 |
| **TinyClaw** | 2 | 6 | 2 合并 | ❌ | 中等活跃 |
| **EasyClaw** | 1 新 | 0 | 1 关闭 | ❌ | 极低活跃 |

---

## 3. OpenClaw 在生态中的定位

### 定位概述

OpenClaw 是当前生态中**规模最大、迭代最快**的核心项目，定位为通用型自主智能体框架，侧重 ContextEngine 插件架构与多模型工具调用能力。

### 关键对比

| 维度 | OpenClaw | Zeroclaw | NanoBot | IronClaw |
|------|----------|----------|---------|----------|
| **PR 吞吐量** | 138/天 | 6/天 | 58/天 | 25/天 |
| **架构重心** | ContextEngine 插件生命周期 | MCP 热重载、合规审计 | 多实例隔离、安全沙箱 | 多 Provider、图像全链路 |
| **通道能力** | Telegram、Android、Gateway | WhatsApp、Web、MCP | Telegram、飞书、QQ、WebChat | Telegram、Slack、Webhook |
| **安全特性** | 工具调用回归严重 | 凭据代理、OAuth | 容器沙箱、OAuth | Docker 隔离、LanceDB |
| **Issue 积压** | 6+ Critical 回归 | 2 S1 安全问题 | 2 S1 多实例冲突 | 2 Critical ngrok 回归 |

**优势**: OpenClaw 在**社区规模**（500 条日更新）和**功能广度**（多通道、多模型、多技能）上领先，ContextEngine 架构具前瞻性。

**劣势**: v2026.3.7 发布后出现**大规模工具调用回归**（exec/read/write/browser 失效），导致核心功能可用性下降，社区信任度受损。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **多 Provider 支持** | OpenClaw, Zeroclaw, IronClaw, TinyClaw, NanoBot | 统一接入 Ollama、Azure OpenAI、Qwen、Bedrock、DeepSeek 等，需解决模型路由、超时配置、协议兼容问题 |
| **MCP 协议深化** | Zeroclaw, PicoClaw, IronClaw, NanoClaw | MCP 热重载 (#2894)、传输层抽象 (#721)、工具搜索懒加载 (#1243) |
| **安全与隔离** | NanoClaw, Zeroclaw, IronClaw | 凭据代理 (#798)、API Key 暴露防护 (#737)、容器沙箱加固 |
| **多通道统一** | NanoClaw, LobsterAI, NanoBot | 统一附件处理 (#850)、跨通道身份层 (#841)、消息去重 |
| **国际化和中文处理** | OpenClaw, Zeroclaw | 中文字符边界 panic (#3024)、i18n 需求 (#3460) |
| **WebSocket/实时通信** | Zeroclay, NanoBot | WebSocket 重连、协议参数传递、长连接稳定性 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特点 |
|------|----------|----------|--------------|
| **OpenClaw** | 通用框架、ContextEngine 插件生态 | 开发者、DIY爱好者 | 基于槽位的插件注册表、配置驱动解析 |
| **Zeroclaw** | 企业级集成、合规审计 | 企业用户 | MCP 热重载、Microsoft 365 集成、知识图谱、Rate Limiting |
| **NanoBot** | 多实例安全、生产部署 | 运维团队、多租户场景 | 多客户端工作空间隔离、安全沙箱、WebChat |
| **PicoClaw** | 边缘设备、硬件加速 | 嵌入式开发者 | Shell 安全 AST 检查、运行时模型切换 |
| **NanoClaw** | 容器化执行、会话管理 | 容器用户 | 凭据代理、会话压缩 /compact、定时任务 |
| **IronClaw** | 多云 Provider、向量搜索 | 云服务用户 | LanceDB 向量存储、Bedrock/Codex 接入、全链路图像 |
| **LobsterAI** | IM 渠道集成、定时任务 | 运营人员 | 企业微信、QQ、Telegram 白名单、媒体发送 |
| **TinyClaw** | 轻量化、自托管 | 个人开发者 | TUI 通道、自定义 Provider、烟雾测试 |

---

## 6. 社区热度与成熟度分层

### 快速迭代阶段（功能爆发期）

- **OpenClaw**: 日均 138 PR 合并，ContextEngine 新架构刚发布，处于"功能高速交付但质量承压"状态
- **Zeroclaw**: 44 个 PR 待合并，涵盖 MCP 热重载、Microsoft 365、知识图谱等重量级功能
- **NanoBot**: v0.1.4.post4 刚发布，58 PR 合并，多实例支持里程碑，活跃度最高
- **PicoClaw**: 56 个 PR 积压，全部为 OPEN 状态，无合并记录，代码审查瓶颈明显

### 质量巩固阶段（修复与稳定）

- **IronClaw**: 合并/关闭 25 PR，时区支持、Docker 绑定等基础问题修复中
- **NanoClaw**: 安全问题修复（OAuth、凭据代理）与功能开发并行，13 PR 合并
- **LobsterAI**: v0.2.2 发布后进入 Bug 修复期（QQ/企微频道问题）
- **TinyClaw**: 测试基础设施搭建（PR #170），逐步走向规范

### 低活跃/边缘项目

- **EasyClaw**: 仅 1 个 Issue，无 PR，社区需求不明确
- **ZeptoClaw**: 功能开发零散，缺乏持续贡献者

---

## 7. 值得关注的趋势信号

### 行业趋势

1. **MCP 协议成为事实标准**: 多个项目（Zeroclaw、PicoClaw、IronClaw）同步推进 MCP 热重载、传输层抽象、工具搜索懒加载，表明 Model Context Protocol 正在从"可选特性"演变为"基础设施层"

2. **安全从"可选"到"必须"**: NanoClaw 连续出现 Security 级别 Issue（#737 API Key 暴露、#842 内容注入），Zeroclaw 合规审计需求明确，反映生产环境部署对安全的硬性要求

3. **多实例/多租户成企业标配**: NanoBot v0.1.4.post4 将"多实例支持"作为核心卖点，Zeroclaw 多客户端工作空间隔离需求强烈，预示市场从"单 agent"向"agent 集群"演进

4. **国产模型支持加速**: GLM-4.7 (TinyClaw #103)、Kimi2.5 (TinyClaw #168)、Qwen (多项目) 需求集中出现，国产大模型生态接入成为差异化竞争点

### 开发者建议

- **短期**: 关注 OpenClaw 回归问题修复进展，若依赖工具调用能力建议暂缓升级或锁定版本；Zeroclaw 的 MCP 热重载 PR #2894 值得关注，可显著提升开发效率
- **中期**: 多 Provider 架构（IronClaw #80、TinyClaw #166）将在 1-2 个月内成熟，建议评估统一接入层设计以降低未来迁移成本
- **长期**: 安全沙箱（NanoClaw 容器凭据代理）和 MCP 协议深化是行业方向，提前布局可获技术先发优势

---

**报告生成时间**: 2026-03-09  
**数据来源**: GitHub 各项目公开动态

---

## 同赛道项目详细报告

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-09)

## 1. 今日速览

过去24小时，Zeroclaw 项目保持 **高度活跃** 状态：共产生 **32 条 Issue 更新**（27 条新开/活跃，5 条关闭）和 **50 条 PR 更新**（44 条待合并，6 条已合并/关闭）。项目持续快速迭代，今日有多项重量级功能 PR 待合并，涵盖 MCP 热重载、Microsoft 365 集成、知识图谱、Observability 等核心能力。同时，社区对 Feishu/Lark 频道支持、中文处理稳定性等问题关注度较高。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

| PR | 标题 | 状态 | 说明 |
|---|---|---|---|
| [#3034](https://github.com/zeroclaw-labs/zeroclaw/pull/3034) | fix(config): make sync_directory async on all platforms | **已关闭** ✅ | 修复 Windows 平台编译错误，使 `sync_directory` 在所有平台均为 async |
| [#2894](https://github.com/zeroclaw-labs/zeroclaw/pull/2894) | feat: MCP hot reload with SIGHUP support | 待合并 | 实现 MCP 配置热重载，用户可通过 SIGHUP 信号重载 MCP 服务器而无需重启 daemon |
| [#3045](https://github.com/zeroclaw-labs/zeroclaw/pull/3045) | fix(channel): reconnect WhatsApp Web session and show QR on logout | 待合并 | 修复 WhatsApp Web 会话被撤销后无法自动重连的问题，现在会自动展示 QR 码 |
| [#3029](https://github.com/zeroclaw-labs/zeroclaw/pull/3029) | feat: global whisper transcription provider and telegram voice fix | 待合并 | 集成 `whisper-rs` 作为全局转录选项，修复 Telegram 语音消息检测 bug |
| [#3042](https://github.com/zeroclaw-labs/zeroclaw/pull/3042) | feat(tools): add Microsoft 365 integration via Graph API | 待合并 | 新增 Microsoft 365 工具，支持邮件、Teams、Calendar、OneDrive、SharePoint 等 10+ 操作 |
| [#3018](https://github.com/zeroclaw-labs/zeroclaw/pull/3018) | feat(security): add compliance and audit automation | 待合并 | 添加合规框架分类（FINMA、DORA、GDPR、SOC2、ISO27001）及审计日志 |
| [#3035](https://github.com/zeroclaw-labs/zeroclaw/pull/3035) | feat(observability): health/readiness endpoints, atomic metrics | 待合并 | 新增 `/health` 和 `/ready` 端点，添加 Prometheus 格式指标导出 |
| [#3027](https://github.com/zeroclaw-labs/zeroclaw/pull/3027) | feat(security): add MCSS security operations tool | 待合并 | 新增安全运营工具，支持警报分诊、漏洞解析、报告生成等 |
| [#3017](https://github.com/zeroclaw-labs/zeroclaw/pull/3017) | feat(agent): add conversational AI agent builder | 待合并 | 添加会话状态管理、人力交接协议、会话分析等 |
| [#3021](https://github.com/zeroclaw-labs/zeroclaw/pull/3021) | feat(workspace): add multi-client workspace isolation | 待合并 | 添加多客户端工作空间隔离，隔离内存、审计日志、密钥作用域 |
| [#3036](https://github.com/zeroclaw-labs/zeroclaw/pull/3036) | feat(resilience): add rate limiting, circuit breaker, and backpressure | 待合并 | 添加令牌桶限流、熔断器、背压机制 |
| [#3020](https://github.com/zeroclaw-labs/zeroclaw/pull/3020) | feat(knowledge): add knowledge graph for expertise capture | 待合并 | 添加 SQLite 知识图谱，支持架构决策、模式捕获等 |
| [#3007](https://github.com/zeroclaw-labs/zeroclaw/pull/3007) | feat(provider): add support for azure openai provider | 待合并 | 新增 Azure OpenAI provider 支持 |

> 📈 过去24小时合并了 6 个 PR（PR #3034 及 5 个未在详情中列出的 PR），当前有 **44 个 PR 待合并**，项目推进力度强劲。

---

## 4. 社区热点

以下 Issues/PRs 评论数最多，反映社区当前最关注的话题：

| Issue/PR | 评论数 | 类型 | 标题与摘要 |
|---|---|---|---|
| [#3012](https://github.com/zeroclaw-labs/zeroclaw/issues/3012) | 6 | Issue | **[Bug]** channel-lark 功能命名混淆、未文档化、应默认启用：用户反映 Feishu/Lark 频道支持存在但未默认启用，名称也不直观（`channel-lark` 而非 `channel-feishu`） |
| [#1955](https://github.com/zeroclaw-labs/zeroclaw/issues/1955) | 5 | Issue | **[Feature]** 添加 Qwen coding-plan 入口点：阿里云 coding plan 使用不同的入口 URL，用户需要显式指定 |
| [#2208](https://github.com/zeroclaw-labs/zeroclaw/issues/2208) | 4 | Issue | **[Feature]** 支持 cortex-mem 作为可选内存后端：社区开发了高性能 Agent 内存模块，希望整合进 ZeroClaw |
| [#1006](https://github.com/zeroclaw-labs/zeroclaw/issues/1006) | 4 | Issue | **[Feature]** llamacpp server 作为 provider 的 HOWTO 和功能请求 |
| [#719](https://github.com/zeroclaw-labs/zeroclaw/issues/719) | 3 | Issue | **[Feature]** 支持通过配置禁用速率限制（如设置为 `-1` 或 `'unlimited'`） |
| [#2561](https://github.com/zeroclaw-labs/zeroclaw/issues/2561) | 2 | Issue | **[Feature]** 通过 Telegram sendMessageDraft 添加 StreamMode::On 实现原生流式响应 |

**分析**：社区热点集中在 **频道集成**（Feishu/Lark、Telegram）、**模型供应商扩展**（Qwen coding plan、llamacpp、Azure OpenAI）、**内存/存储后端**（cortex-mem）以及 **配置灵活性**（速率限制禁用）四个方向。Issue #3012 引发最多讨论（6 条评论），说明用户对 Feishu 官方支持的期待较高，且对当前命名和默认行为有不满。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

| Issue | 严重程度 | 标题 | 状态 | 备注 |
|---|---|---|---|---|
| [#2992](https://github.com/zeroclaw-labs/zeroclaw/issues/2992) | **S1** | **[Bug]** 加密 secret 直接以 `enc2:` 形式发送到 Authorization 头，导致 401 | OPEN | 安全相关，影响工作流阻塞，已有 PR #3032 修复 channel-lark 编译错误 |
| [#2961](https://github.com/zeroclaw-labs/zeroclaw/issues/2961) | **S1** | **[Bug]** 网页无法使用 agent 对话 | OPEN | 已获取 6 位数密钥，CLI 中的 agent 正常，但网页端无法使用 |
| [#3024](https://github.com/zeroclaw-labs/zeroclaw/issues/3024) | **S2** | **[Bug]** `loop_.rs` 中文字符边界 panic | OPEN | 中文字符串切片时 byte index 不是字符边界，导致 panic |
| [#3011](https://github.com/zeroclaw-labs/zeroclaw/issues/3011) | **S2** | **[Bug]** Dashboard WebSocket protocols 参数未传递，导致认证失败 | OPEN | WebSocket 构造函数缺少 protocols 参数 |
| [#3010](https://github.com/zeroclaw-labs/zeroclaw/issues/3010) | **S2** | **[Bug]** Web agent 重连循环：/ws/chat 升级缺少 Sec-WebSocket-Protocol 回显 | OPEN | 导致浏览器拒绝握手，陷入重连循环 |
| [#3009](https://github.com/zeroclaw-labs/zeroclaw/issues/3009) | **S2** | **[Bug]** /integrations 页面返回 HTML 而非 JSON | OPEN | 后端对 SPA 路由返回 index.html，前端期望 JSON 导致解析失败 |
| [#2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953) | **S2** | **[Bug]** 官方构建中缺少 `channel-matrix` 标志 | OPEN | Windows v0.1.7 构建无法设置 Matrix 通道 |
| [#3041](https://github.com/zeroclaw-labs/zeroclaw/issues/3041) | **S2** | **[Bug]** browser tool 点击操作无回退恢复，超时后阻塞工作流 | OPEN | agent_browser 后端的点击操作在元素被遮挡时超时且无恢复机制 |
| [#3033](https://github.com/zeroclaw-labs/zeroclaw/issues/3033) | **S3** | **[Bug]** default_temperature 配置对 zeroclaw agent 命令不生效 | OPEN | 无论配置何值，agent 命令始终使用 0.7 |
| [#3044](https://github.com/zeroclaw-labs/zeroclaw/issues/3044) | **S3** | **[Bug]** 自定义模型 onboarding 命令不正确 | OPEN | OpenRouter API 返回模型 ID 无效错误 |

**关键问题**：
- 🔴 **S0/S1 级别**：Issue #2992 涉及 secret 加密处理错误，可能导致安全风险，需优先处理
- 🟠 **S2 级别**：多个 Web/WebSocket 相关问题影响用户体验（#3010、#3009、#2961），中文处理 bug #3024 影响国际化使用场景

---

## 6. 功能请求与路线图信号

以下功能请求可能进入下一版本（结合已有 PR 进度判断）：

| Issue | 功能 | 相关 PR/进展 | 纳入版本可能性 |
|---|---|---|---|
| [#3015](https://github.com/zeroclaw-labs/zeroclaw/issues/3015) | 添加 `zeroclaw gateway get-paircode` 命令 | - | ⭐⭐⭐ 高 |
| [#3014](https://github.com/zeroclaw-labs/zeroclaw/issues/3014) | 添加 `zeroclaw gateway restart` 命令 | - | ⭐⭐⭐ 高 |
| [#3046](https://github.com/zeroclaw-labs/zeroclaw/issues/3046) | 丰富 delegate 子代理 system prompt，添加 skills_directory 配置 | - | ⭐⭐⭐ 高 |
| [#2998](https://github.com/zeroclaw-labs/zeroclaw/issues/2998) | 支持多模型供应商（配置多个本地模型） | - | ⭐⭐ 中 |
| [#2989](https://github.com/zeroclaw-labs/zeroclaw/issues/2989) | 多提供商 STT 系统（TranscriptionProvider trait） | PR #3029 已实现 Whisper | ⭐⭐⭐ 高（已在合并） |
| [#2988](https://github.com/zeroclaw-labs/zeroclaw/issues/2988) | 多提供商 TTS 系统（OpenAI, ElevenLabs, Google, Edge） | - | ⭐⭐ 中 |
| [#2990](https://github.com/zeroclaw-labs/zeroclaw/issues/2990) | 添加 Claude Code、Gemini CLI、KiloCLI 集成 | - | ⭐⭐ 中 |
| [#2991](https://github.com/zeroclaw-labs/zeroclaw/issues/2991) | 实现多机器节点系统（分布式运行时） | - | ⭐⭐ 中 |
| [#3043](https://github.com/zeroclaw-labs/zeroclaw/issues/3043) | 添加 Raspberry Pi Model B 支持 | - | ⭐⭐ 中 |

**路线图信号**：从今日 PR 合并趋势来看，**安全性与合规性**（审计日志、合规框架、Nevis IAM 集成）、**可观测性**（健康检查/就绪端点、指标）、**企业集成**（Microsoft 365、Multi-workspace）是近期重点方向。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点与场景：

| 场景 | 痛点 | 代表 Issue |
|---|---|---|
| **企业微信/飞书集成** | channel-lark 未默认启用，命名不直观 | #3012 |
| **本地模型部署** | Docker 环境下 onboarding 给出错误的 localhost URL | #2933 |
| **速率限制** | 无法禁用速率限制，无法设置"无限制" | #719 |
| **Web UI 稳定性** | WebSocket 重连丢失上下文、/integrations 页面报错 | #3010, #3009 |
| **中文处理** | 中文输入导致 panic | #3024 |
| **安全合规** | 加密 secret 发送失败导致认证错误 | #2992 |
| **多供应商** | 需要同时运行多个本地模型 | #2998 |
| **树莓派部署** | 现有 armv7 二进制不兼容 Raspberry Pi Model B | #3043 |

**满意度方面**：用户对 MCP 热重载（#2894）、Microsoft 365 集成（#3042）、知识图谱（#3020）等新功能 PR 表现出较高期待。

---

## 8. 待处理积压

以下 Issue 长期未响应或处于停滞状态，建议维护者关注：

| Issue | 状态 | 积压时间 | 标题 |
|---|---|---|---|
| [#1006](https://github.com/zeroclaw-labs/zeroclaw/issues/1006) | CLOSED | 2026-02-19 | llamacpp server as provider HOWTO |
| [#719](https://github.com/zeroclaw-labs/zeroclaw/issues/719) | CLOSED | 2026-02-18 | Support disabling rate limits via config |
| [#1955](https://github.com/zeroclaw-labs/zeroclaw/issues/1955) | CLOSED | 2026-02-26 | Add Qwen coding-plan entrypoint |
| [#2208](https://github.com/zeroclaw-labs/zeroclaw/issues/2208) | CLOSED | 2026-02-28 | Support cortex-mem as optional memory backend |
| [#2561](https://github.com/zeroclaw-labs/zeroclaw/issues/2561) | CLOSED | 2026-03-02 | Add StreamMode::On via Telegram sendMessageDraft |

> 📌 上述 Issue 已在今日关闭，说明维护者处理效率较高。

**仍需关注的 OPEN Issue**（创建于 3 月 7-8 日，暂无评论）：

- [#3046] 丰富 delegate 子代理 prompt
- [#3043] Raspberry Pi Model B 支持
- [#3041] browser tool 点击无回退
- [#3038] Web agent 断连后丢失上下文
- [#3030] 与 Bloom 框架的架构对齐探讨
- [#2991] 多机器节点系统
- [#2988] 多提供商 TTS 系统

---

*报告生成时间：2026-03-09 | 数据来源：GitHub zeroclaw-labs/zeroclaw*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-09)

## 1. 今日速览

过去24小时内，EasyClaw 项目整体保持低活跃状态。Issue 区有1个新开话题和1个已关闭的问题，但无任何 PR 合并或新版本发布。项目当前处于相对平稳的维护状态，社区交流意愿初现端倪。建议关注用户关于群组交流的需求，这可能反映项目正在吸引更多开发者关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

过去24小时内无 PR 合并或关闭，项目代码层面暂无推进。Issue #8 关于 macOS 26.3 应用内下载更新问题已关闭，但具体解决方案未在公开信息中体现。

---

## 4. 社区热点

| 类型 | 标题 | 链接 |
|------|------|------|
| 🔥 Issue #12 | **社群交流** | [查看](https://github.com/gaoyangz77/easyclaw/issues/12) |

**分析**：用户 @Geekbruce 在2026-03-08提出希望建立技术交流群，表明项目架构获得用户认可，开始吸引开发者关注。这是一种积极的社区增长信号，建议维护者考虑回应此需求。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 链接 |
|----------|-------|------|------|
| ⚠️ 中 | macOS 26.3 应用内下载更新后无法正常安装更新 | ✅ 已关闭 | [查看](https://github.com/gaoyangz77/easyclaw/issues/8) |

**说明**：Issue #8 报告了 macOS 26.3 系统下应用内下载更新后安装失败的问题，目前已被关闭（可能已修复或用户确认问题解决）。该问题影响 macOS 26.3 用户的更新体验。

---

## 6. 功能请求与路线图信号

| Issue | 请求内容 | 链接 |
|-------|----------|------|
| #12 | 建立技术交流群 | [查看](https://github.com/gaoyangz77/easyclaw/issues/12) |

**评估**：当前无功能性 PR 正在进行中。Issue #12 属于社区运营层面的需求，暂不直接构成功能开发路线图信号。

---

## 7. 用户反馈摘要

- **正面反馈**：项目架构设计符合用户预期（Issue #12 用户评价"非常符合我预期的架构"）
- **负面反馈**：macOS 26.3 版本存在应用内更新安装失败的问题
- **需求表达**：用户希望建立技术交流群以便持续沟通

---

## 8. 待处理积压

| Issue | 状态 | 积压时长 | 链接 |
|-------|------|----------|------|
| #12 社群交流 | 🆕 新开 | 1天 | [查看](https://github.com/gaoyangz77/easyclaw/issues/12) |

**提醒**：Issue #12 为新开话题，建议维护者尽快回应用户关于建立交流群的诉求，有助于提升社区活跃度和用户粘性。

---

*报告生成时间：2026-03-09 | 数据来源：GitHub EasyClaw 仓库*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**2026-03-09**

---

## 1. 今日速览

LobsterAI 项目今日保持高度活跃，共处理 8 条 Issues（7 新开/活跃，1 已关闭）和 27 条 PR 更新。发布 v0.2.2 版本，新增企业微信（WeCom）和 QQ 两大 IM 渠道支持，社区反馈积极。整体项目健康度良好，功能迭代稳步推进，但存在部分用户报告的兼容性和稳定性问题需关注。

---

## 2. 版本发布

### v0.2.2 发布 🚀

**发布时间**: 2026-03-09

#### New Features
| 功能 | 贡献者 | PR |
|------|--------|-----|
| IM 新增企业微信（WeCom）支持 | @fisherdaddy | #331, #335 |
| IM 新增 QQ 支持 | @liuzhq1986 | #333 |

#### Bug Fixes
| 修复内容 | 贡献者 | PR |
|----------|--------|-----|
| 定时任务创建页面中增加新增的 IM 渠道 | @fisher | #332 |

> **迁移提示**: 本次更新为功能增量添加，建议已配置定时任务的用户重新编辑任务以选择新增的 IM 渠道。

---

## 3. 项目进展

今日共合并/关闭 **26 条 PR**，以下为重点功能推进：

| PR # | 类型 | 描述 | 状态 |
|------|------|------|------|
| #331 | Feature | IM 新增企业微信支持 | ✅ Closed |
| #335 | Fix | 修复定时任务不支持企业微信的 bug | ✅ Closed |
| #332 | Fix | 定时任务创建页面增加新增 IM 渠道 | ✅ Closed |
| #333 | Feature | IM 新增 QQ 支持 | ✅ Closed |
| #90 | Feature | Telegram 机器人支持 User ID 白名单机制 | ✅ Closed |
| #108 | Feature | 钉钉、飞书、Telegram 和 Discord 支持媒体内容输入 | ✅ Closed |
| #147 | Feature | 增强定时任务 IM 通知，支持媒体发送和通知目标持久化 | ✅ Closed |
| #233 | Feature | 支持 MCP (Model Context Protocol) | ✅ Closed |
| #252 | Feature | Telegram 机器人群聊中只接收 @机器人的消息 | ✅ Closed |
| #249 | Fix | 修复钉钉网关不必要的重连并增加发送重试机制 | ✅ Closed |
| #209 | Security | 绑定 OpenAI 兼容代理到 127.0.0.1 防止远程未授权 RCE | ✅ Closed |

> **项目整体评估**: 本次更新极大丰富了 IM 渠道覆盖（企业微信、QQ），并提升了定时任务通知、媒体支持、安全加固等核心功能，项目功能完整性显著提升。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 作者 | 评论数 | 状态 |
|---------|------|------|--------|------|
| #150 | 没法用，用ollama本地部署模型 | @wuyj6710 | 6 | OPEN |
| #340 | 企微机器人配置完成后不回消息 | @xiaoqiang-jq | 1 | CLOSED |
| #339 | QQ还收不到定时任务提醒 | @Kevin001234567 | 1 | OPEN |

**热点分析**:
- **#150**: 用户反馈 Ollama 本地部署模型无法使用，评论数最多（6 条），可能是配置或兼容性问题是社区关注焦点
- **#339/#337**: QQ 渠道问题频繁出现（定时任务提醒不生效、消息重复接收），表明新功能可能存在 bug
- **#340**: 企业微信配置后不回消息问题已关闭，需验证修复效果

---

## 5. Bug 与稳定性

### 今日报告的 Bug

| 严重程度 | Issue # | 描述 | 状态 | Fix PR |
|----------|---------|------|------|--------|
| 🔴 高 | #339 | QQ 定时任务提醒不生效，仍在本地提醒 | OPEN | - |
| 🔴 高 | #337 | QQ 机器人消息重复接收（发一条收到两条） | OPEN | - |
| 🔴 高 | #338 | 任务处理超时后未返回结果，只返回错误信息 | OPEN | - |
| 🔴 高 | #340 | 企业微信机器人配置完成后不回消息 | CLOSED | - |
| 🟡 中 | #334 | Claude Sonnet 4.6 提示余额太低 | OPEN | - |
| 🟡 中 | #330 | Intel Core Ultra 5 + Ollama + IPEX-LLM 无法调用技能 | OPEN | - |

> **稳定性评估**: 高优先级 Bug 集中在新上线的 QQ/企业微信渠道，需优先排查消息路由和超时逻辑。

---

## 6. 功能请求与路线图信号

### 新功能需求

| Issue # | 功能请求 | 背景 | 预计可行性 |
|---------|----------|------|------------|
| #336 | Custom Provider Settings 支持多 key、base url | 用户需配置多个 API 来源 | 🔶 中（需评估 UI 复杂度） |
| #338 | 优化任务超时处理，返回最终结果而非错误 | 当前超时直接返回错误，用户无法获取长任务结果 | 🔶 中（需修改任务调度逻辑） |
| #150 | Ollama 本地模型支持优化 | 本地部署用户反馈无法使用 | 🔶 中（需排查连接/配置问题） |

**路线图信号**:
- 从 #147、#331、#333 的 PR 可见，IM 渠道扩展是近期重点方向
- #233 MCP 支持表明项目在向更开放的模型生态迈进

---

## 7. 用户反馈摘要

### 核心痛点

1. **IM 渠道不稳定**: 多名用户反馈 QQ、企业微信的定时任务提醒不生效或消息重复
2. **本地模型兼容性问题**: Ollama 本地部署用户遇到连接/技能调用问题
3. **长任务超时处理不佳**: 任务运行时间稍长即超时，用户收不到最终结果
4. **Claude API 集成异常**: 新注册账号在 LobsterAI 中提示余额不足，但官方平台正常

### 正面反馈

- v0.2.2 新增企业微信和 QQ 支持获得社区期待（见 PR 评论）
- 定时任务 IM 通知增强（媒体发送、持久化）功能实用性高

---

## 8. 待处理积压

### 需关注的重要 Open Issues

| Issue # | 标题 | 创建时间 | 状态 | 提醒 |
|---------|------|----------|------|------|
| #150 | 没法用，用ollama本地部署模型 | 2026-02-27 | OPEN | 长期未解决，影响本地部署用户 |
| #338 | 处理任务稍微长一点儿就反馈超时 | 2026-03-08 | OPEN | 需优化超时逻辑 |
| #337 | QQ机器人消息重复接收 | 2026-03-08 | OPEN | 需排查消息去重逻辑 |
| #334 | Claude Sonnet 4.6提示余额太低 | 2026-03-08 | OPEN | API 集成问题 |
| #330 | Intel + Ollama + IPEX-LLM 无法调用技能 | 2026-03-08 | OPEN | 硬件兼容性问题 |

> **建议**: 建议优先处理 #337（消息重复）和 #339（定时任务提醒）问题，涉及新上线功能的用户体验。

---

**报告生成时间**: 2026-03-09  
**数据来源**: GitHub LobsterAI Repository

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-09)

---

## 1. 今日速览

过去 24 小时，ZeptoClaw 项目保持**中等活跃度**。社区提交了 2 个新功能 Issue 和 1 个待合并 PR，同时完成了 1 个重要功能合并（grep/find/diff 工具集）。项目整体处于功能扩展期，暂无新版本发布。当前积压 2 个 Open Issue 和 1 个 Open PR，预计短期内将就 GitHub 技能搜索增强功能进行 Code Review。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 已合并/关闭 PR

| PR | 状态 | 摘要 | 链接 |
|---|---|---|---|
| **#283** | ✅ 已关闭 (已合并) | **新增 GrepTool、FindTool 及 EditFileTool 统一 diff 模式** - GrepTool: 通过系统 `grep -rn` 实现正则搜索，支持 glob 过滤、大小写不敏感及结果限制；FindTool: 使用 `glob` crate 实现文件发现；Unified diff mode: 为 EditFileTool 添加统一 diff 格式支持 | [PR #283](https://github.com/qhkm/zeptoclaw/pull/283) |

> **评估**：该 PR 完善了代码编辑工作流的核心工具链，填补了 pi-rs 迁移过程中的关键功能空白，项目向完整本地开发环境支持迈出重要一步。

### 📋 待合并 PR

| PR | 状态 | 摘要 | 链接 |
|---|---|---|---|
| **#286** | 🔄 Open | **GitHub 技能搜索新增 SKILL.md 深度扫描** - 为 SkillsConfig 添加 github_token 配置；实现 search_github 的 fast/deep 双模式；对包含 SKILL.md 的仓库提升质量评分 | [PR #286](https://github.com/qhkm/zeptoclaw/pull/286) |

> **评估**：PR 与 Issue #285 为同一功能（SKILL.md 检查），建议合并处理以避免重复工作。

---

## 4. 社区热点

### 🔥 关注度最高的 Issue

| Issue | 状态 | 讨论活跃度 | 摘要 |
|---|---|---|---|
| **#282** | ✅ 已关闭 | 5 条评论 | **新增 grep、find、统一 diff 编辑工具** - 从 pi-rs 移植编码工具，填补代码编辑工作流关键缺口 |

> **分析**：该 Issue 获得了最多的社区互动（5 条评论），反映出用户对本地代码编辑能力（尤其是差异化编辑）的强烈需求。功能已在 PR #283 中实现并合并。

---

## 5. Bug 与稳定性

**过去 24 小时无 Bug 报告**

---

## 6. 功能请求与路线图信号

### 📌 新功能请求

| Issue | 作者 | 摘要 | 链接 |
|---|---|---|---|
| **#285** | @taqtiqa-mark | **GitHub 技能搜索增加 SKILL.md 存在性检查** - 实现可选的深度扫描以提升技能搜索质量，PR #286 已对应实现 | [Issue #285](https://github.com/qhkm/zeptoclaw/issues/285) |
| **#284** | @rexzhang360 | **Ollama 云模型支持** - 支持云端模型接入（当前设置无法正常工作） | [Issue #284](https://github.com/qhkm/zeptoclaw/issues/284) |

> **路线图信号**：Issue #285/#286（SKILL.md 深度扫描）已提交 PR，预计纳入下一版本；Issue #284（Ollama 云模型）为新提出的功能需求，暂无实现计划，社区可关注其后续进展。

---

## 7. 用户反馈摘要

从 Issue 评论及 PR 描述中提炼：

- **核心诉求**：用户期望 ZeptoClaw 提供更完整的本地代码编辑工具链（grep、find、diff），减少对外部 CLI 依赖
- **使用场景**：开发者希望通过本地化工具实现高效代码搜索与批量编辑，尤其在离线或受限网络环境下
- **满意度**：已合并的 GrepTool/FindTool 功能获得社区认可（Issue #282 顺利关闭）

---

## 8. 待处理积压

### ⚠️ 需关注的长 pending 项目

| 项目 | 状态 | 距创建 | 建议 |
|---|---|---|---|
| **Issue #284** - Ollama 云模型支持 | Open | 1 天 | 维护者尚未回应，建议明确需求范围（Small/Medium/Large）后评估优先级 |

> **提醒**：Issue #284 为新功能请求，目前缺少维护者互动，建议尽快确认是否在近期路线图中。

---

*报告生成时间：2026-03-09 | 数据来源：GitHub (qhkm/zeptoclaw)*

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-09)

## 1. 今日速览

2026年3月9日，NanoBot 项目保持高度活跃状态。过去24小时内共产生 **88 次更新**（20条Issues + 68条PRs），新版本 **v0.1.4.post4** 正式发布，包含58个PR合并与29位新贡献者，标志着项目在多实例支持、MCP工具可靠性等方面取得重大进展。当前待合并PR仍有 **49条**，社区参与热情高涨，项目整体向前推进势头强劲。

---

## 2. 版本发布

### 🚀 v0.1.4.post4 已发布

**发布概述**：这是一个重要的里程碑版本，汇集了社区大量实际场景优化。

| 指标 | 数据 |
|------|------|
| 合并PR数 | 58 |
| 新贡献者 | 29 |
| 发布标签 | major |

**核心更新内容**：
- ✅ **更安全的默认值**（Safer defaults）
- ✅ **更强的多实例支持**（Better multi-instance support）
- ✅ **更强的MCP/Tool可靠性**（Stronger MCP/tool reliability）
- ✅ **主要平台重大改进**：Telegram、Feishu、QQ、DingTalk、Discord

**链接**：[Release v0.1.4.post4](https://github.com/HKUDS/nanobot/releases)

> 💡 **迁移提示**：多实例用户需注意本次更新对端口配置的优化，建议查阅配置文档确认 `gateway.port` 设置。

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR | 状态 | 说明 |
|----|------|------|
| [#303](https://github.com/HKUDS/nanobot/pull/303) | ✅ 已合并 | 添加 `/restart` 命令，支持从任意通道重启后端 |
| [#1751](https://github.com/HKUDS/nanobot/pull/1751) | ✅ 已合并 | 重启命令的最终实现版本 |
| [#1744](https://github.com/HKUDS/nanobot/pull/1744) | ✅ 已合并 | Groq Provider 支持配置 Whisper 模型 |
| [#1749](https://github.com/HKUDS/nanobot/pull/1749) | ✅ 已合并 | 补丁合入 |
| [#1742](https://github.com/HKUDS/nanobot/pull/1742) | ✅ 已合并 | 修复：模型解析时优先使用显式 provider 配置 |
| [#1691](https://github.com/HKUDS/nanobot/pull/1691) | ✅ 已合并 | 修复内存合并失败时 `last_consolidated` 未更新的问题 |

### 🔥 重点推进中的功能 PRs

| PR | 开发者 | 进展 | 摘要 |
|----|--------|------|------|
| [#1362](https://github.com/HKUDS/nanobot/pull/1362) | @goxofy | Open | **OpenAI 兼容 API** + x-session-key 隔离（多会话安全） |
| [#1667](https://github.com/HKUDS/nanobot/pull/1667) | @ddadaal | Open | QQ 通道支持发送本地图片和文件 |
| [#1429](https://github.com/HKUDS/nanobot/pull/1429) | @dmarkey | Open | 子代理共享 MCP Tools |
| [#1748](https://github.com/HKUDS/nanobot/pull/1748) | @dmahurin | Open | 新增 **WebChat 通道**（浏览器界面） |
| [#1341](https://github.com/HKUDS/nanobot/pull/1341) | @dmagyar | Open | Web 通道带 SSE token 流式传输 + 多会话 UI |
| [#1680](https://github.com/HKUDS/nanobot/pull/1680) | @rudy-of-the-corner | Open | **Mistral Provider** + 通用转录服务 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 点赞 | 状态 | 主题 |
|-------|------|------|------|------|
| [#215](https://github.com/HKUDS/nanobot/issues/215) | **23** | 0 | Open | **飞书无法建立长连接**（核心阻塞问题） |
| [#2](https://github.com/HKUDS/nanobot/issues/2) | **18** | **6** | Open | **功能请求：原生支持 Z.AI (智谱AI) API** |
| [#1719](https://github.com/HKUDS/nanobot/issues/1719) | 1 | **6** | Open | **web_search 后端应可替换**（Brave 硬编码问题） |

**热点分析**：

1. **飞书长连接问题 (#215)** — 23条评论表明这是当前社区最关注的阻塞性问题。用户反馈配置了 app id 和 app secret 后，事件推送仍无法选择长连接模式，大量用户在排查配置流程。

2. **Z.AI API 支持 (#2)** — 作为功能请求获得6票支持，社区对国产大模型（GLM-4.x 系列）有明确需求。

3. **Web Search 可替换 (#1719)** — 6票支持反映出用户对搜索后端灵活性的诉求，当前硬编码 Brave 导致社区已产生约15个 PR 尝试添加替代方案（SearXNG、Serper、DuckDuckGo等），亟需官方提供统一接口。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度）

| Issue | 严重度 | 描述 | Fix PR |
|-------|--------|------|--------|
| [#1739](https://github.com/HKUDS/nanobot/issues/1739) | 🔴 高 | **Windows 多实例冲突**：NANOBOT_HOME 环境变量被忽略，导致 Telegram 冲突 | — |
| [#1736](https://github.com/HKUDS/nanobot/issues/1736) | 🔴 高 | gateway 命令忽略 `config.gateway.port`，始终使用 CLI 默认值 18790 | — |
| [#1698](https://github.com/HKUDS/nanobot/issues/1698) | 🟠 中 | 自动内存合并未持久化 `last_consolidated`，导致重复合并 | [#1691](https://github.com/HKUDS/nanobot/pull/1691) ✅ |
| [#1692](https://github.com/HKUDS/nanobot/issues/1692) | 🟠 中 | Telegram 机器人重复回答（一次带 Markdown，一次不带） | — |
| [#1697](https://github.com/HKUDS/nanobot/issues/1697) | 🟡 低 | 查询结果不自动返回，需多次询问 | — |
| [#1695](https://github.com/HKUDS/nanobot/issues/1695) | 🟡 低 | 日志目录硬编码，多实例日志混合 | — |
| [#1740](https://github.com/HKUDS/nanobot/issues/1740) | ✅ | 已修复：模型解析忽略显式 provider 配置 | [#1742](https://github.com/HKUDS/nanobot/pull/1742) ✅ |

---

## 6. 功能请求与路线图信号

### 新功能需求（可能纳入下一版本）

| Issue | 需求描述 | 关联 PR | 纳入可能性 |
|-------|----------|---------|------------|
| [#2](https://github.com/HKUDS/nanobot/issues/2) | 原生支持 Z.AI (智谱AI) GLM-4.x 系列 | — | ⭐⭐⭐ 高 |
| [#1719](https://github.com/HKUDS/nanobot/issues/1719) | Web Search 后端可插拔设计 | — | ⭐⭐⭐ 高 |
| [#1685](https://github.com/HKUDS/nanobot/issues/1685) | **Websocket 通道支持**（本地运行无需 Telegram） | — | ⭐⭐ 中 |
| [#1735](https://github.com/HKUDS/nanobot/issues/1735 | 研究合作：Foveated context 轻量级代理 | — | ⭐⭐ 中 |
| [#1709](https://github.com/HKUDS/nanobot/issues/1709) | 对比 Claude-like 上下文模型 | [#1665](https://github.com/HKUDS/nanobot/pull/1665) | ⭐⭐ 中 |
| [#1708](https://github.com/HKUDS/nanobot/issues/1708) | 工作区安全模式下 config.json 路径解析问题 | — | ⭐⭐ 中 |
| [#1693](https://github.com/HKUDS/nanobot/issues/1693) | `restrictToWorkspace` 下允许额外目录 | — | ⭐ 中 |

**路线图信号**：
- **多模态/多通道**持续是重点：WebChat、WebSocket、QQ 文件发送
- **Provider 生态**扩展中：Mistral、Google Vertex AI 已有人在推进
- **多实例稳定性**是本版本核心主题，相关 Bug 需优先修复

---

## 7. 用户反馈摘要

### 真实用户痛点与场景

| 场景 | 痛点 | 来源 |
|------|------|------|
| **飞书集成** | 长连接模式无法建立，配置正确但事件推送失败 | [#215](https://github.com/HKUDS/nanobot/issues/215) |
| **Windows 多实例** | NANOBOT_HOME 环境变量无效，无法同时运行两个实例 | [#1739](https://github.com/HKUDS/nanobot/issues/1739) |
| **搜索功能** | 必须用 Brave，无替代方案，只能 fork | [#1719](https://github.com/HKUDS/nanobot/issues/1719) |
| **工作区安全** | jail 模式下无法访问 config.json，无法做自定义扩展 | [#1708](https://github.com/HKUDS/nanobot/issues/1708) |
| **日志管理** | 多实例日志写入同一文件，难以调试 | [#1695](https://github.com/HKUDS/nanobot/issues/1695) |
| **Telegram 体验** | 同一消息回复两次（Markdown + 纯文本） | [#1692](https://github.com/HKUDS/nanobot/issues/1692) |

### 正面反馈
- `/restart` 命令实用，社区多次请求后已合并
- v0.1.4.post4 的多实例支持改进受好评
- 29 位新贡献者加入，社区活跃度提升

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 创建时间 | 状态 | 提醒 |
|-------|----------|------|------|
| [#2](https://github.com_HKUDS/nanobot/issues/2) | 2026-02-01 | Open | **Z.AI API 支持** — 18条讨论，6票支持，37天未回应 |
| [#215](https://github.com/HKUDS/nanobot/issues/215) | 2026-02-06 | Open | **飞书长连接** — 23条讨论，核心阻塞问题，30天未解决 |
| [#126](https://github.com/HKUDS/nanobot/pull/126) | 2026-02-05 | Open | GitHub Actions 构建 Docker 镜像推送至 ghcr/dockerhub — 32天未合并 |

### 建议关注
- **飞书长连接问题** 已讨论超过3周，需官方介入排查
- **Z.AI 支持** 作为明确的功能请求，长期未得到官方态度（支持/拒绝/规划中）
- 15+ 个搜索相关 PR 因缺乏统一接口而无法合并，#1719 提议的 "seam" 设计需尽快讨论

---

*📊 本日报基于 2026-03-09 GitHub 公开数据生成*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**日期：2026-03-09**

---

## 1. 今日速览

PicoClaw 项目今日保持高度活跃，共有 **56 条 Pull Request** 待处理，今日新增/更新的 PR 集中在 agent、provider、tool 等核心模块。社区贡献者提交了多个重要增强功能，包括多代理团队架构、anthropic 工具缓存支持、音频转录等。所有列出的 PR 均为 OPEN 状态，今日暂无合并记录。项目整体处于功能迭代期，大量新特性正在排队审核中。

---

## 2. 版本发布

**无。** 今日暂无版本发布记录。

---

## 3. 项目进展

**暂无合并/关闭记录。** 今日所有列出的 PR 均为 OPEN 状态，无合并或关闭操作。

---

## 4. 社区热点

以下 PR 因其解决的问题覆盖面广或功能创新性强，值得重点关注：

| PR | 标题 | 领域 | 热度评估 |
|----|------|------|----------|
| [#1097](https://github.com/sipeed/picoclaw/pull/1097) | feat(tools): shell tool security hardening | tool, config | ⭐⭐⭐⭐⭐ |
| [#1257](https://github.com/sipeed/picoclaw/pull/1257) | feat: implement tool choice and tool caching support | provider, go | ⭐⭐⭐⭐ |
| [#1253](https://github.com/sipeed/picoclaw/pull/1253) | fix(agent): auto-inject SKILL.md into LLM context | agent | ⭐⭐⭐⭐ |
| [#1112](https://github.com/sipeed/picoclaw/pull/1112) | feat(provider): add deepseek-ai protocol support for modelscope.cn | provider | ⭐⭐⭐ |
| [#949](https://github.com/sipeed/picoclaw/pull/949) | feat(telegram): support runtime model switching | channel, agent | ⭐⭐⭐ |

**分析：** #1097 是今日最值得关注的安全增强 PR，用 AST 替代正则表达式进行 shell 命令安全检查，显著提升了系统安全性。#1257 和 #1253 解决了开发者体验问题（工具缓存、Skill 上下文注入），反映了社区对 Agent 效率优化的强烈需求。

---

## 5. Bug 与稳定性

| 严重程度 | PR | 问题描述 | 状态 |
|----------|-----|----------|------|
| 🔴 高 | [#1255](https://github.com/sipeed/picoclaw/pull/1255) | QQ 群聊错误使用私聊 API (PostC2CMessage)，导致群 @消息失败 | OPEN |
| 🔴 高 | [#1254](https://github.com/sipeed/picoclaw/pull/1254) | 安全防护错误拦截包含 URL 的命令（如 `agent-browser open https://...`） | OPEN |
| 🟡 中 | [#1095](https://github.com/sipeed/picoclaw/pull/1095) | 启动器未等待网关健康检查就报告 OK，导致 bot 卡死 | OPEN |
| 🟡 中 | [#1092](https://github.com/sipeed/picoclaw/pull/1092) | Cron 表达式忽略 schedule.TZ 字段，始终以 UTC 执行 | OPEN |
| 🟢 低 | [#1107](https://github.com/sipeed/picoclaw/pull/1107) | read_file 工具未防止读取二进制文件（如 PDF、图片） | OPEN |

**说明：** 所有 Bug 均有对应的 fix PR，等待审核中。建议优先处理 #1255 和 #1254，影响用户范围广。

---

## 6. 功能请求与路线图信号

以下功能需求有明确 PR 支撑，可能纳入下一版本：

| PR | 功能 | 类别 | 评估 |
|----|------|------|------|
| [#976](https://github.com/sipeed/picoclaw/pull/976) | **多代理 Teams 架构** - 支持协调器分解任务并发委托给子代理 | 增强 | 🔜 下一版本 |
| [#1257](https://github.com/sipeed/picoclaw/pull/1257) | ** Anthropic/OpenAI 工具选择与缓存** | 性能 | 🔜 下一版本 |
| [#1243](https://github.com/sipeed/picoclaw/pull/1243) | **MCP 工具搜索（懒加载）** - 解决工具过多耗尽上下文问题 | 增强 | 🔜 下一版本 |
| [#977](https://github.com/sipeed/picoclaw/pull/977) | **音频转录（Groq Whisper API）** | 新功能 | 🔜 下一版本 |
| [#1226](https://github.com/sipeed/picoclaw/pull/1226) | **CI/CD nightly build 工作流** | 基础设施 | ✅ 已实现 |
| [#1251](https://github.com/sipeed/picoclaw/pull/1251) | **DingTalk 卡片消息支持** | 通道增强 | 🔜 下一版本 |

**路线图信号：** 从 PR 分布来看，下一版本重点方向为：
1. **Agent 能力增强**（多代理、工具缓存、Skill 上下文）
2. **Provider 协议扩展**（deepseek-ai、自定义协议）
3. **通道能力丰富**（DingTalk 卡片、QQ 群、运行时模型切换）
4. **安全与稳定性**（shell 工具加固、健康检查、时区修复）

---

## 7. 用户反馈摘要

**无法提取。** 提供的 PR 列表中未包含 Issues 评论数据，无法从 Issues 评论中提炼用户痛点。建议后续在 Issues 板块补充反馈信息。

---

## 8. 待处理积压

以下 PR 提交时间较早或长期未处理，建议维护者关注：

| PR | 提交日期 | 领域 | 积压原因分析 |
|----|----------|------|--------------|
| [#664](https://github.com/sipeed/picoclaw/pull/664) | 2026-02-23 | provider | 自定义模型协议支持，提交已 14 天 |
| [#949](https://github.com/sipeed/picoclaw/pull/949) | 2026-03-01 | channel, agent | Telegram 运行时模型切换，提交已 8 天 |
| [#992](https://github.com/sipeed/picoclaw/pull/992) | 2026-03-02 | agent | reasoning content 后备机制，提交已 7 天 |

**风险提示：** #664 涉及用户报告的自定义模型问题（如 `zai-org/GLM-4.7`），积压时间最长，建议优先处理。

---

*报告生成时间：2026-03-09 | 数据来源：GitHub PicoClaw 仓库 Pull Requests*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-09)

## 1. 今日速览

项目在过去24小时内保持高度活跃，共处理 **18 条 Issues** 和 **50 条 PRs**。合并/关闭了 13 个 PR，其中包括安全增强（OAuth token 刷新、容器凭据代理）和功能增强（/compact 技能）。当前有 **37 个 PR 待合并**，主要集中在功能完善和安全修复上。社区对多通道身份管理、Web 内容安全、容器稳定性等问题关注度较高。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

| PR | 状态 | 描述 | 意义 |
|---|---|---|---|
| [#425](https://github.com/qwibitai/nanoclaw/pull/425) | ✅ 已合并 | fix: expiry-aware OAuth token refresh | 修复 token 过期导致的无限重试循环，新增过期检查逻辑 |
| [#798](https://github.com/qwibitai/nanoclaw/pull/798) | ✅ 已合并 | feat: enhance container environment isolation via credential proxy | 实现凭据代理架构，API keys 和 OAuth tokens 不再暴露到容器环境 |
| [#817](https://github.com/qwibitai/nanoclaw/pull/817) | ✅ 已合并 | Add /compact skill for manual context compaction | 解决 Issue #322，新增手动会话压缩技能，缓解上下文膨胀问题 |
| [#705](https://github.com/qwibitai/nanoclaw/pull/705) | ✅ 已合并 | add sender allowlist for per-chat access control | 实现基于发送者的访问控制，支持 Trigger 和 Drop 两种模式 |

---

## 4. 社区热点

| 类型 | Issue/PR | 热度 | 链接 |
|---|---|---|---|
| 🔥 Issue | [#842](https://github.com/qwibitai/nanoclaw/issues/842) | **Security** - WebFetch/WebSearch 结果未消毒，易受 Anthropic 拒绝字符串注入攻击，导致会话终止 | [链接](https://github.com/qwibitai/nanoclaw/issues/842) |
| 🔥 Issue | [#737](https://github.com/qwibitai/nanoclaw/issues/737) | **[Security] API Key Exposure via Process Environment Inspection** - 容器执行模式下 secret 保护机制可被 AI 代理绕过 | [链接](https://github.com/qwibitai/nanoclaw/issues/737) |
| 💬 PR | [#412](https://github.com/qwibitai/nanoclaw/pull/412) | feat(setup): add host machine authorization passthrough - 新增第三种认证选项 | [链接](https://github.com/qwibitai/nanoclaw/pull/412) |
| 💬 PR | [#850](https://github.com/qwibitai/nanoclaw/pull/850) | feat: channel-agnostic attachment interface and download pipeline - 建立统一附件处理架构 | [链接](https://github.com/qwibitai/nanoclaw/pull/850) |

**热点分析**：本周安全类 Issue 显著增加，两个 Security 级别问题（#842、#737）均涉及容器环境隔离和外部内容处理，反映出项目在生产环境中面临的安全挑战受到重点关注。

---

## 5. Bug 与稳定性

### 🔴 Critical / High

| Issue | 严重程度 | 状态 | 描述 | Fix PR |
|---|---|---|---|---|
| [#825](https://github.com/qwibitai/nanoclaw/issues/825) | **Critical** | Open | fix(scheduler): once-task race condition — 标记完成早于 fire handler 执行，是 2026-03-08 "faking tool calls" 事件的根因 | — |
| [#827](https://github.com/qwibitai/nanoclaw/issues/827) | **High** | Open | fix(agent): FinishReason::ToolUse 但包含 0 个 tool calls 被错误接受为成功 | — |
| [#830](https://github.com/qwibitai/nanoclaw/issues/830) | **High** | Open | fix: scheduled task fires silently dropped when session is busy — 会话忙时任务被静默丢弃 | — |
| [#834](https://github.com/qwibitai/nanoclaw/issues/834) | **High** | Open | Apple Container: .env shadow mount 在 v1.2.6 引入后导致容器启动失败，exit code 1 | — |
| [#842](https://github.com/qwibitai/nanoclaw/issues/842) | **High** | Open | Security: WebFetch/WebSearch results not sanitized — 易受拒绝字符串注入 | — |
| [#737](https://github.com/qwibitai/nanoclaw/issues/737) | **High** | Closed | [Security] API Key Exposure via Process Environment Inspection | — |

### 🟡 Medium

| Issue | 状态 | 描述 |
|---|---|---|
| [#553](https://github.com/qwibitai/nanoclaw/issues/553) | Open | Container execution fails after WhatsApp connection recovery |
| [#828](https://github.com/qwibitai/nanoclaw/issues/828) | Open | fix(tools): schedule_task says ISO8601 but code requires RFC3339 with timezone |
| [#839](https://github.com/qwibitai/nanoclaw/issues/839) | Open | Scheduled task containers idle for 30 minutes when agent uses IPC-only messaging |
| [#841](https://github.com/qwibitai/nanoclaw/issues/841) | Open | feat: user-entity layer for multi-channel identity |

---

## 6. 功能请求与路线图信号

| Issue | 优先级 | 功能描述 | 关联 PR |
|---|---|---|---|
| [#852](https://github.com/qwibitai/nanoclaw/issues/852) | Low | add QQBot channel - 用户请求添加 QQ 机器人通道支持 | — |
| [#832](https://github.com/qwibitai/nanoclaw/issues/832) | Medium | feat: Chrome CDP browser relay for real browser control - 实现 Chrome DevTools Protocol 中继，绕过 reCAPTCHA 和机器人检测 | — |
| [#841](https://github.com/qwibitai/nanoclaw/issues/841) | Medium | feat: user-entity layer for multi-channel identity - 跨通道统一身份层，解决多通道用户身份隔离问题 | — |
| [#831](https://github.com/qwibitai/nanoclaw/pull/831) | Feature | feat: add lightweight status HTTP server (health + identity) - 零依赖 HTTP 状态服务端 | [PR #831](https://github.com/qwibitai/nanoclaw/pull/831) |
| [#850](https://github.com/qwibitai/nanoclaw/pull/850) | Feature | feat: channel-agnostic attachment interface - 统一附件处理抽象层 | [PR #850](https://github.com/qwibitai/nanoclaw/pull/850) |

**路线图观察**：
- **多通道统一**是明确的方向（#841 统一身份层、#850 统一附件接口、#852 QQ 通道）
- **安全加固**持续进行（凭据代理 #798 已合并，#737/#842 需关注）
- **IPC 现代化**（#816 JSON-RPC 2.0 over stdio）反映架构演进

---

## 7. 用户反馈摘要

| Issue | 用户痛点 | 场景 |
|---|---|---|
| [#782](https://github.com/qwibitai/nanoclaw/issues/782) | **无 Claude 订阅** - 用户没有 Claude 订阅，希望使用其他 LLM 提供商 | 配置/使用门槛 |
| [#553](https://github.com/qwibitai/nanoclaw/issues/553) | **VPN 环境依赖** - 开启 VPN 后 WhatsApp 连接恢复，但容器执行失败 | 网络/连接恢复 |
| [#322](https://github.com/qwibitai/nanoclaw/issues/322) | **上下文膨胀** - 长期会话导致模型"变笨"，接近 context window 限制 | 会话管理 |
| [#750](https://github.com/qwibitai/nanoclaw/issues/750) | **DM 机器人配置复杂** - DM-with-bot 设置路径下 JID 注册错误且需要手动触发 | WhatsApp 配置 |

**用户满意度观察**：
- ✅ /compact 技能（#322）的合并获得 2 👍，直接回应了核心痛点
- ⚠️ 安全问题（#737/#842）引发社区对生产环境部署的担忧
- 💡 多通道用户（#841）希望打破通道隔离，需求明确

---

## 8. 待处理积压

### 长期未响应的 Issues（创建 > 7 天）

| Issue | 创建时间 | 状态 | 风险 |
|---|---|---|---|
| [#750](https://github.com/qwibitai/nanoclaw/issues/750) | 2026-03-05 | Open (4天前) | High - WhatsApp DM 配置问题 |
| [#737](https://github.com/qwibitai/nanoclaw/issues/737) | 2026-03-05 | Closed | ✅ 已处理 |

### 阻塞的 PRs（Status: Blocked）

| PR | 阻塞原因 |
|---|---|
| [#744](https://github.com/qwibitai/nanoclaw/pull/744) | Feat/add s3 storage skill |
| [#799](https://github.com/qwibitai/nanoclaw/pull/799) | fix: robust timezone-aware context |
| [#801](https://github.com/qwibitai/nanoclaw/pull/801) | fix(jarvis): automate Andy review ownership |
| [#812](https://github.com/qwibitai/nanoclaw/pull/812) | feat: fleeting notes pipeline |
| [#835](https://github.com/qwibitai/nanoclaw/pull/835) | fix: prevent duplicate Telegram messages |
| [#831](https://github.com/qwibitai/nanoclaw/pull/831) | feat: add lightweight status HTTP server |

---

**报告生成时间**: 2026-03-09  
**数据来源**: GitHub NanoClaw (qwibitai/nanoclaw)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-03-09)

## 1. 今日速览

过去 24 小时内，IronClaw 项目保持高度活跃：共产生 **24 条 Issue 更新**（14 新开/活跃，10 已关闭）和 **50 条 PR 更新**（25 待合并，25 已合并/关闭）。未发布新版本。社区继续围绕多 Provider LLM 支持、图像处理全链路、MCP 传输层抽象等大型功能特性推进开发，同时修复了多个影响服务稳定性和用户体验的 Bug。整体项目处于健康迭代状态。

---

## 2. 版本发布

**无新版本发布。** 近期发布记录显示 v0.17.0 于 2026-03-06 发布，当前代码库处于 v0.17.0 后的开发阶段。

---

## 3. 项目进展

以下 PR 已于近日合并/关闭，标志着项目在多个关键方向上取得进展：

| PR | 标题 | 贡献者类型 | 状态 |
|---|---|---|---|
| [#724](https://github.com/nearai/ironclaw/pull/724) | fix(repl): skip /quit on EOF when stdin is not a TTY (daemon mode) | new | ✅ merged |
| [#687](https://github.com/nearai/ironclaw/pull/687) | fix: add timezone conversion support to time tool | new | ✅ merged |
| [#686](https://github.com/nearai/ironclaw/pull/686) | fix(docker): bind postgres to localhost only | new | ✅ merged |
| [#683](https://github.com/nearai/ironclaw/pull/683) | fix: standardize libSQL timestamps as RFC 3339 UTC | new | ✅ merged |
| [#715](https://github.com/nearai/ironclaw/pull/715) | fix(web): prevent Enter key from sending message during IME composition | new | ✅ merged |
| [#690](https://github.com/nearai/ironclaw/pull/690) | fix(tools): add items schema for array-type parameters | regular | ✅ merged |
| [#181](https://github.com/nearai/ironclaw/pull/181) | feat: add LanceDB support for workspace semantic search | regular | ✅ merged |
| [#209](https://github.com/nearai/ironclaw/pull/209) | fix: CLI commands ignore runtime DATABASE_BACKEND when both features compiled | new | ✅ closed |

**重点进展解读：**

- **时区支持完善**：PR #687 和 #683 共同解决了 IronClaw 长期缺乏时区感知的问题，现在 `time` 工具支持 IANA 时区转换、格式化和解析，数据库时间戳也统一为 RFC 3339 UTC 标准。
- **服务模式修复**：PR #724 修复了 `ironclaw service start` 在 macOS/Linux 上作为 daemon 启动时立即退出的严重问题（根因是 stdin EOF 时 REPL 错误发送 /quit）。
- **数据库后端兼容性**：PR #209/#740 修复了 CLI 命令在同时启用 postgres 和 libsql 特性时忽略运行时 DATABASE_BACKEND 环境变量的问题。
- **LanceDB 向量搜索**：PR #181 引入 LanceDB 作为可选向量存储，为工作空间语义搜索提供了更灵活的 backend 选择。

---

## 4. 社区热点

以下 Issues 和 PRs 获得了较高的讨论度或社区关注：

| 类别 | 编号 | 标题 | 评论数 | 热度来源 |
|---|---|---|---|---|
| Issue | [#80](https://github.com/nearai/ironclaw/issues/80) | feat: Multi-provider LLM support (Ollama, Bedrock, Gemini, OpenRouter) | 2 | 核心功能路线图，P1-P3 多层次需求 |
| Issue | [#324](https://github.com/nearai/ironclaw/issues/324) | telegram bot only manually polls! | 7 | 用户频繁使用的通道方式，长期未解 |
| Issue | [#738](https://github.com/nearai/ironclaw/issues/738) | Bug: Managed Tunnel binds to Web Gateway port (3000) instead of Webhook Server port (8080) | 0 | 影响所有外部 webhook 通道 (Slack 等)，严重阻塞 |
| Issue | [#459](https://github.com/nearai/ironclaw/issues/459) | Missing docker images "ironclaw-worker:latest" | 2 | 阻塞用户 Job 执行 |
| PR | [#725](https://github.com/nearai/ironclaw/pull/725) | feat: full image support across all channels | - | XL 级全链路图像支持，正在开发中 |
| PR | [#721](https://github.com/nearai/ironclaw/pull/721) | feat(mcp): transport abstraction, stdio/UDS transports, and OAuth fixes | - | MCP 协议重大改进，支持本地 MCP 服务器 |
| PR | [#713](https://github.com/nearai/ironclaw/pull/713) | feat: add AWS Bedrock LLM provider via native Converse API | - | 社区呼声极高的 Provider，XL 级工作量 |

**热点分析：**

- **Telegram 轮询问题**（#324）评论数最多（7条），反映出 Telegram 通道是很多用户的日常使用方式，手动轮询的限制严重制约了实时性体验。该 Issue 长期处于 OPEN 状态，值得关注。
- **多 Provider LLM 支持**（#80）是路线图级别的核心需求，涵盖 Ollama、AWS Bedrock、Google Gemini、OpenRouter 等，目前部分已有 PR 推进（#713 Bedrock, #744 Codex），预计将在未来版本中逐步实现。
- **Managed Tunnel 端口绑定错误**（#738）虽然评论数为 0，但影响面广——所有使用 ngrok tunnel + webhook 通道的用户都会在 Slack 等平台验证时收到 404，属于高优先级回归 Bug。

---

## 5. Bug 与稳定性

以下 Bug 于近日报告或仍处于活跃状态，按严重程度排列：

| 严重程度 | 编号 | 标题 | 状态 | 备注 |
|---|---|---|---|---|
| 🔴 **Critical** | [#738](https://github.com/nearai/ironclaw/issues/738) | Managed Tunnel 绑定错误端口导致所有 webhook 通道返回 404 | OPEN | 影响生产环境 Slack/HTTP webhook |
| 🔴 **Critical** | [#733](https://github.com/nearai/ironclaw/issues/733) | ngrok 进程变为僵尸进程 (<defunct>)，tunnel 离线 | OPEN | ERR_NGROK_3200，需修复进程回收 |
| 🟠 **High** | [#723](https://github.com/nearai/ironclaw/issues/723) | service start 在 macOS/Linux 上立即退出 | **已修复** | PR #724 已合并 |
| 🟠 **High** | [#459](https://github.com/nearai/ironclaw/issues/459) | 缺失 ironclaw-worker Docker 镜像导致 Job 失败 | OPEN | PR #714 正在解决 |
| 🟠 **High** | [#324](https://github.com/nearai/ironclaw/issues/324) | Telegram bot 只能手动轮询 | OPEN | 7 条讨论，长期未解 |
| 🟡 **Medium** | [#745](https://github.com/nearai/ironclaw/issues/745) | GitHub WASM tool 暴露空 schema，无法正常使用 | OPEN (今日新报) | 阻塞 GitHub MCP 集成 |
| 🟡 **Medium** | [#746](https://github.com/nearai/ironclaw/issues/746) | Skill 安装失败：名称包含空格被拒绝 | OPEN (今日新报) | ClawHub Skill 命名验证问题 |
| 🟡 **Medium** | [#732](http://github.com/nearai/ironclaw/issues/732) | http tool 无法处理重定向 | OPEN | 第三方 Ollama 用户受影响 |
| 🟡 **Medium** | [#728](https://github.com/nearai/ironclaw/issues/728) | kimi-k2.5 模型兼容性问题：temperature 限制 & reasoning_content 缺失 | OPEN | 国内模型支持需求 |
| 🟡 **Medium** | [#722](https://github.com/nearai/ironclaw/issues/722) | HTTP webhook secret 传输在 body 而非 header，安全问题 | OPEN | 文档与实现不一致 |
| 🟢 **Low** | [#727](https://github.com/nearai/ironclaw/issues/727) | Linux 上 onboarding 显示无用的 OS Keychain 选项 | OPEN | UX 改进建议 |

**Critical Bug 应对建议：**

- #738 和 #733 两个 ngrok 相关 Bug 同时出现，说明 Managed Tunnel 模块近期可能有改动引入回归，建议优先排查 `start_tunnel()` 和子进程管理逻辑。
- #724 已修复 service 退出问题，但该修复仅覆盖 daemon 模式，REPL 交互模式不受影响，需确认测试覆盖。

---

## 6. 功能请求与路线图信号

以下功能请求反映了用户和开发者的长期诉求，结合已有 PR 可判断其纳入下一版本的可行性：

| 请求 | 编号 | 已有相关 PR | 预计纳入版本 | 分析 |
|---|---|---|---|---|
| **多 Provider LLM 支持** | [#80](https://github.com/nearai/ironclaw/issues/80) | #713 (Bedrock), #744 (Codex), #720 (LanceDB 向量) | v0.18+ | 路线图核心，Ollama 本地模型 (P2)、Bedrock (P3)、Gemini (P3) 正在逐步实现 |
| **全通道图像支持** | [#725](https://github.com/nearai/ironclaw/pull/725) | - | v0.18 | XL 级 PR，已在开发，涵盖 Web Gateway 图像上传、CLI 附件等 |
| **MCP 传输层抽象** | [#721](https://github.com/nearai/ironclaw/pull/721) | - | v0.18 | stdio/UDS 传输、OAuth 修复，重大改进 |
| **OpenAI Codex 支持** | [#742](https://github.com/nearai/ironclaw/issues/742) / #744 | - | v0.18 | 刚刚开启 PR，为 ChatGPT Pro/Plus 订阅用户提供无需 API Key 的接入方式 |
| **Bedrock 流式输出** | [#741](https://github.com/nearai/ironclaw/issues/741) | #713 (刚合并 Bedrock 基础) | v0.18.x | 依赖 #713 合并后继续开发 |
| **认知记忆层** | [#739](https://github.com/nearai/ironclaw/issues/739) | - | 远期 | 建议引入 engramai crate 实现更智能的记忆权重，暂无明确时间表 |
| **配置化请求超时** | [#615](https://github.com/nearai/ironclaw/issues/615) | - | 可能在 v0.18 | 为本地 LLM 用户解决 15s 硬编码超时问题，已关闭但需求存在 |

---

## 7. 用户反馈摘要

从 Issue 评论和描述中提炼的真实用户痛点与使用场景：

### 痛点与不满

1. **Telegram 实时性受限**：用户 @jamieduk 报告 telegram bot 只能手动轮询，无法实现实时消息响应，影响将其集成到生产工作流。
2. **Docker 镜像缺失导致 Job 失败**：@JeremyHutchings 在重启 Job 时遇到 `ironclaw-worker:latest` 镜像不存在，直接影响自动化任务执行。
3. **Webhook 通道全面瘫痪**：@lighterEB 报告 ngrok tunnel 错误绑定端口 3000 而非 8080，导致所有外部 webhook（包括 Slack）验证失败，业务通道不可用。
4. **本地 LLM 超时问题**：@Ridoc 指出 15s 硬编码超时对 Ollama/LM Studio/vLLM 用户极不友好，大模型推理本身耗时长，频繁超时严重影响可用性。
5. **Onboarding 体验不佳**：@sweihub 反映 Linux 用户在 onboarding 过程中被要求配置 OS Keychain（macOS 特有功能），造成困惑。

### 正面反馈与满意度

- **时区支持改进**：多个 Issue（#661, #662）涉及时区功能，用户对 UTC-only 造成的日志分割、时差换算问题有强烈诉求，PR #687/#683 的合并有望显著提升满意度。
- **多 Provider 路线图**：Issue #80 持续受到关注，用户对 Ollama、Bedrock、OpenRouter 等 Provider 的支持充满期待，已有实质性进展。

---

## 8. 待处理积压

以下 Issue 长期未响应或停滞，对应重要功能方向，值得维护者关注：

| 编号 | 标题 | 创建时间 | 状态 | 积压原因 |
|---|---|---|---|---|
| [#324](https://github.com/nearai/ironclaw/issues/324) | telegram bot only manually polls! | 2026-02-23 | OPEN | 15 天未解，7 条讨论，涉及 Telegram Bot API 深度集成 |
| [#80](https://github.com/nearai/ironclaw/issues/80) | Multi-provider LLM support | 2026-02-14 | OPEN | 23 天，路线图级需求，部分功能已在 PR 中实现 |
| [#459](https://github.com/nearai/ironclaw/issues/459) | Missing docker images | 2026-03-02 | OPEN | 7 天，PR #714 正在修复中 |
| [#738](https://github.com/nearai/ironclaw/issues/738) | Managed Tunnel 端口绑定错误 | 2026-03-08 | OPEN | 1 天，严重性高，需优先处理 |
| [#733](https://github.com/nearai/ironclaw/issues/733) | ngrok 僵尸进程 | 2026-03-08 | OPEN | 1 天，与 #738 同源，需并行排查 |

**建议行动：**

- **Telegram 轮询**（#324）：建议分配专人评估 Bot API Webhook 方案可行性，与现有 MCP 通道架构统一。
- **ngrok 回归**（#738/#733）：两个 Critical Bug 几乎同时出现，建议回溯近期 `start_tunnel()` 相关改动，确认是否单次变更引入双重问题。
- **Bedrock/Codex 后续**：PR #713 合并后，#741 流式输出和 #744 Codex 需持续跟进，避免功能半成品积压。

---

*本日报基于 2026-03-09 GitHub 公开数据生成，数据截取时间：2026-03-09 00:00 UTC - 2026-03-09 23:59 UTC*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-09)

## 1. 今日速览

过去24小时内，TinyClaw 项目保持高度活跃状态。共产生 2 条新开/活跃 Issues 和 6 条 PR 更新，其中 4 个 PR 待合并，2 个已关闭。社区对多模型支持、自托管模型集成以及测试基础设施建设的需求尤为突出，项目功能边界持续扩展。

---

## 2. 版本发布

**本期无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 状态 | 关键进展 |
|---|---|---|
| **#169** | CLOSED | Add TUI channel and manifest-based channel registry — 引入 TUI 通道及基于清单的通道注册机制 |
| **#167** | CLOSED | Multi-agent support + Kimi2.5/Minimax2.5 support via Claude Code — 已合并至 #168 继续迭代 |

### 待合并的重要 PR

| PR | 进展亮点 |
|---|---|
| **#171** | 统一 agent 日志记录，修复队列处理器使其持续耗尽pending消息而非仅在新消息入队时触发，新增 heartbeat/web/cli 三种非投递响应通道处理文档 |
| **#170** | 新增 GitHub CI 烟雾测试/集成测试工作流 (Node 20)，引入 tsx 测试套件及共享测试助手，新增内部 fake provider 及队列重试/死信事件发射机制，支持 `TINYCLAW_INSTALL_DIR` 安装目录覆盖 |
| **#166** | 新增自定义 OpenAI兼容 provider 支持 (SGLang/Ollama/vLLM/LM Studio/DeepSeek 等)，支持自托管模型无需 Codex/Claude CLI，已在 AMD MI300X GPU 上通过 Qwen3-32B (SGLang) 测试 |
| **#168** | 继承 #163 的多 agent 支持，新增 Kimi2.5 和 Minimax2.5 via Claude Code，代码清理 |

**整体评估**: 项目在多模型支持、自托管集成、测试基础设施三个方向同步推进，代码质量管控意识增强。

---

## 4. 社区热点

| Issue/PR | 活跃度 | 热点分析 |
|---|---|---|
| **#111** | 👎 1 / 💬 3 | **ollama and local model support** — 用户明确呼吁支持本地模型运行和添加 Claude API keys，反映出对自托管/离线场景的强烈需求，与 PR #166 的 custom provider 方向高度契合 |
| **#103** | 💬 2 | **Add GLM 4.7 model support** — 已有用户运行多 provider 路由架构，期望将 GLM 4.7 纳入原生配置，体现对国产大模型支持的产品路线需求 |

**趋势洞察**: 社区讨论集中在**模型多元化接入**（GLM 4.7）和**自托管能力**（Ollama/本地模型）两个主题，与当前 PR #166 的实现方向形成良好呼应。

---

## 5. Bug 与稳定性

**本期无新增明确 Bug 报告**

从 PR #171 的修复内容可推断此前存在 **队列处理器仅在新消息入队时才触发耗尽** 的逻辑缺陷，可能导致 pending 消息延迟处理。该问题已在 #171 中修复。

---

## 6. 功能请求与路线图信号

| Issue | 请求内容 | 与现有 PR 的关联 |
|---|---|---|
| **#111** | Ollama/本地模型支持 + Claude API keys | 🔗 PR #166 已实现 OpenAI兼容 provider，可覆盖 Ollama 场景；Claude API keys 需评估 |
| **#103** | GLM 4.7 模型支持 (Crush CLI) | 暂无对应 PR，符合下一版本功能扩展方向 |
| **#168/#170** | 多 agent 支持 + 集成测试 | 路线图核心方向明确，测试基础设施 PR #170 将提升后续功能迭代可靠性 |

**路线图信号**: 下一版本可能聚焦于 **多 provider 统一接入层**（GLM 4.7、Ollama） 和 **多 agent 编排能力** 的正式版发布。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的核心诉求：

- **自托管需求**: "It will be great if you can support local model" — 用户希望在不依赖云端 API 的情况下使用 TinyClaw
- **多 provider 架构**: "Users already run multi-provider setups and want to route specific agents to GLM 4.7" — 反映生产级用户的多模型路由实践
- **集成便利性**: PR #166 测试了 AMD MI300X + Qwen3-32B 的端到端场景，说明用户对高性能自托管推理的集成关注

---

## 8. 待处理积压

| Issue | 积压时长 | 优先级建议 |
|---|---|---|
| **#103** GLM 4.7 model support | 约 21 天 (2026-02-16 创建) | ⭐ 中高 — 已有明确用户需求，可结合 PR #166 自定义 provider 机制快速支持 |
| **#111** ollama and local model support | 约 21 天 (2026-02-16 创建) | ⭐ 高 — 与 PR #166 功能重叠度高，建议合并处理 |

**提醒维护者**: 两个积压 Issue 均与当前开发方向（PR #166）高度相关，建议统一评估后纳入近期里程碑。

---

*日报生成时间: 2026-03-09 | 数据来源: GitHub TinyClaw Repository*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*