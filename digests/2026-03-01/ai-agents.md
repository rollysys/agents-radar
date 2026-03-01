# OpenClaw 生态日报 2026-03-01

> Issues: 500 | PRs: 500 | 覆盖项目: 10 个 | 生成时间: 2026-03-01 02:36 UTC

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

**日期：2026-03-01**

---

## 1. 今日速览

过去24小时项目保持高度活跃状态，共处理1000条 Issues 和 PR 更新。其中 Issues 新开/活跃374个、关闭126个；PR 待合并436个、已合并/关闭64个。项目整体呈现快速迭代态势，未发布新版本。社区讨论热度集中在认证授权、API 成本优化、跨平台兼容性三个方向，多个关键 Bug 已通过 PR 修复推进中。

---

## 2. 版本发布

**本期无新版本发布**

---

## 3. 项目进展

今日共合并/关闭 **64** 条 PR，以下为重点推进的功能与修复：

| PR | 描述 | 贡献者 |
|---|---|---|
| [#30235](https://github.com/openclaw/openclaw/pull/30235) | **fix: 使用 x-api-key header 替代 Bearer token 进行 Anthropic API 认证** — 修复 Anthropic 使用量获取接口的认证问题 | @echoVic |
| [#30236](https://github.com/openclaw/openclaw/pull/30236) | **fix: 处理 OpenRouter usage.cost 返回数字而非对象** — 修复成本跟踪失败导致所有 OpenRouter 请求显示 $0 的问题 | @kevinWangSheng |
| [#30231](https://github.com/openclaw/openclaw/pull/30231) | **feat(memory): 新增 Qdrant 向量存储驱动** — 支持 sqlite-vec 之外的向量搜索方案 | @thq6188-blip |
| [#26989](https://github.com/openclaw/openclaw/pull/26989) | **feat(models auth): 支持 --profile-id 参数进行 provider 登录** | @ecochran76 |
| [#30185](https://github.com/openclaw/openclaw/pull/30185) | **feat: 自适应模型路由与 token 节省计量器** — 本地/廉价模型不足时自动重试云模型 | @joelnishanth |
| [#27812](https://github.com/openclaw/openclaw/pull/27812) | **feat(effort): 为 Anthropic 4.6 模型添加独立 effort 控制** — 解耦 think 与 effort 开关 | @GodsBoy |
| [#29915](https://github.com/openclaw/openclaw/pull/29915) | **fix: 验证前清理无效 runtime config keys** — 修复旧版本遗留配置导致 gateway 崩溃循环 | @ningding97 |
| [#30233](https://github.com/openclaw/openclaw/pull/30233) | **fix: ownerAllowFrom 通配符应授予工具级 owner 访问权限** | @vicpon |
| [#29580](https://github.com/openclaw/openclaw/pull/29580) | **feat(secrets): 扩展 SecretRef 覆盖全量用户凭证** — 从 API Key 扩展到完整凭证实现在线解析 | @joshavant |
| [#30237](https://github.com/openclaw/openclaw/pull/30237) | **fix(telegram): 保留 external_reply 和批量处理中的回复上下文** | @echoVic |

**质量提升**：多个 channel（Discord、Telegram、WhatsApp、WebUI）相关的小型 bug 修复已合并，包括消息去重、WebSocket 重连、UI 滚动等体验优化。

---

## 4. 社区热点

以下 Issues 讨论最为活跃，反映用户核心诉求：

### 🔥 热度最高

1. **[#3460](https://github.com/openclaw/openclaw/issues/3460) [OPEN] Internationalization (i18n) & Localization Support**
   - 评论：**71** 条
   - 诉求：社区强烈要求多语言支持，但官方表示暂无足够带宽维护
   - 背景：长期悬而未决的功能请求，跨版本多次提及

2. **[#4531](https://github.com/openclaw/openclaw/issues/4531) [CLOSED] Bug: disconnected (1008) pairing required**
   - 评论：**36** 条
   - 问题：Docker 部署时出现配对错误
   - 状态：已关闭

3. **[#1818](https://github.com/openclaw/openclaw/issues/1818) [CLOSED] Bug: Onboarding wizard does not install Systemd service on Ubuntu 22.04**
   - 评论：**31** 条，👍 25
   - 问题：Ubuntu 22.04 上 Systemd 服务安装失败

### 💰 成本相关（高热度）

4. **[#23715](https://github.com/openclaw/openclaw/issues/23715) [CLOSED] Bug: 5x API costs due to ineffective prompt caching**
   - 评论：**11** 条
   - 根因：所有用户共享同一 system prompt 前缀导致缓存失效

5. **[#19989](https://github.com/openclaw/openclaw/issues/19989) [CLOSED] Bug: Prompt cache constantly invalidated — cacheWrite dominates**
   - 评论：**9** 条
   - 影响：每调用成本 $0.35-0.50 而非预期 $0.02-0.04

### 🔐 安全性（持续关注）

6. **[#11829](https://github.com/openclaw/openclaw/issues/11829) [OPEN] Security Roadmap: Protecting API Keys from Agent Access**
   - 评论：**12** 条
   - 诉求：多层防护防止 API keys 泄露给 LLM 或在聊天中暴露

7. **[#7916](](https://github.com/openclaw/openclaw/issues/7916) [OPEN] Enhancement: Support for encrypted API keys / secrets management**
   - 评论：**13** 条，👍 9
   - 诉求：配置文件中的 API keys 加密存储

---

## 5. Bug 与稳定性

按严重程度排列今日报告的关键 Bug：

### 🔴 严重（影响核心功能）

| Issue | 描述 | 状态 | 相关 PR |
|---|---|---|---|
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | **macOS v2026.2.26 仅 arm64，Intel Mac 无法运行** | OPEN | - |
| [#23538](https://github.com/openclaw/openclaw/issues/23538) | **Anthropic setup-token auth 返回 401 Invalid bearer token** | OPEN | - |
| [#26207](https://github.com/openclaw/openclaw/issues/26207) | **v2026.2.24 回归：setGlobalDispatcher 破坏 HTTP 代理** | OPEN | - |
| [#21571](https://github.com/openclaw/openclaw/issues/21571) | **Docker 安装时 EACCES: permission denied** | OPEN | - |

### 🟡 中等（影响部分用户/场景）

| Issue | 描述 | 状态 | 相关 PR |
|---|---|---|---|
| [#7631](https://github.com/openclaw/openclaw/issues/7631) | **Windows: openclaw plugins install 报 spawn EINVAL** | OPEN | - |
| [#5871](https://github.com/openclaw/openclaw/issues/5871) | **CLI 在树莓派 4B 上极慢（17秒+）** | OPEN | - |
| [#29420](https://github.com/openclaw/openclaw/issues/29420) | **Discord WebSocket 重连丢失事件，@mentions 丢失** | OPEN | - |
| [#29572](](https://github.com/openclaw/openclaw/issues/29572) | **TUI /model 命令静默失败，模型未实际切换** | OPEN | - |

### 🟢 轻微/已修复

- [#1818] Systemd 服务安装 — 已关闭
- [#24430] Browser Relay extension token 验证 — 已关闭
- [#21653] Custom API providers token 窗口默认值 — 已关闭

---

## 6. 功能请求与路线图信号

以下功能请求与近期 PR 方向吻合，可能纳入下一版本：

| Issue | 功能描述 | 匹配 PR |
|---|---|---|
| [#20416](https://github.com/openclaw/openclaw/issues/20416) | **llm_input/llm_output 修改型中间件钩子** — 支持 PII 重写、Guardrails、内容过滤 | 多个 hook 相关 PR |
| [#7916](https://github.com/openclaw/openclaw/issues/7916) | **API keys 加密存储** | [#29580](https://github.com/openclaw/openclaw/pull/29580) SecretRef 扩展已推进 |
| [#11829](https://github.com/openclaw/openclaw/issues/11829) | **API Key 访问保护路线图** | 安全相关 PR 持续推进 |
| [#20092](https://github.com/openclaw/openclaw/issues/20092) | **Cron jobs 新增 freshSession 选项控制会话复用** | 进行中 |
| [#16629](https://github.com/openclaw/openclaw/issues/16629) | **Brave Search API 不再免费，需替换** | 社区已在讨论替代方案 |
| [#30185](https://github.com/openclaw/openclaw/pull/30185) | **自适应模型路由** | 已合并 |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的核心痛点：

### 👍 用户满意点
- **功能丰富度**：多 channel 支持、memory 搜索、插件系统受肯定
- **响应速度**：多数 Bug 能在 1-2 天内得到官方回应
- **文档改进**：中文文档需求被响应（[#30211](https://github.com/openclaw/openclaw/pull/30211)）

### 👎 用户不满点
1. **成本失控**：多次出现 prompt caching 失效导致 5-10 倍费用
2. **回归问题**：新版本常引入之前不存在的 bug（如 v2026.2.24 HTTP 代理、v2026.2.26 macOS Intel）
3. **Windows/树莓派支持不足**：这两个平台的体验显著弱于 macOS/Linux
4. **认证复杂**：Anthropic、Google 多处认证失败，缺乏清晰错误指引

---

## 8. 待处理积压

以下 Issue 长期未得到实质性响应，需维护者关注：

| Issue | 存在时间 | 评论数 | 风险 |
|---|---|---|---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n 支持 | 2026-01-28 | 71 | 社区期望高 |
| [#5871](https://github.com/openclaw/openclaw/issues/5871) 树莓派 CLI 慢 | 2026-02-01 | 11 | 硬件用户流失风险 |
| [#7631](https://github.com/openclaw/openclaw/issues/7631) Windows 插件安装 | 2026-02-03 | 18 | Windows 用户流失 |
| [#16629](https://github.com/openclaw/openclaw/issues/16629) Brave Search 替代 | 2026-02-14 | 11 | 功能缺失 |

---

*报告生成时间：2026-03-01 | 数据来源：GitHub OpenClaw/OpenClaw*

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**报告周期：2026-03-01 | 分析师：AI 开源项目分析助手**

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现**多极分化、快速迭代**的格局。以 OpenClaw 为首的“核心参照”项目拥有最大社区规模（1000+ Issue/PR 动态），而 NanoBot、PicoClaw、Zeroclaw 等项目在特定垂直领域（硬件集成、多通道架构、心跳机制）形成差异化竞争力。整体生态活跃度较高，但**质量巩固与功能扩展并存**：多数项目处于快速迭代期，跨平台兼容性、成本控制、多模态交互是共同的核心挑战。生态尚未出现绝对垄断者，技术路线与社区治理模式呈多样化特征。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新增/活跃 / 关闭) | PRs (待合并 / 已合闭) | Release | 活跃度评估 |
|------|---------------------------|----------------------|---------|------------|
| **OpenClaw** | 374 / 126 | 436 / 64 | ❌ 无 | 🟢 高度活跃 |
| **Zeroclaw** | 12 / 38 | 16 / 34 | ❌ 无 | 🟢 高度活跃 |
| **NanoBot** | 20 / 4 | 54 / 25 | ✅ v0.1.4.post3 | 🟢 高度活跃 |
| **PicoClaw** | 76 / 9 | 85 / 19 | ✅ v0.2.0 | 🟢 高度活跃 |
| **LobsterAI** | 19 / 2 | 2 / 1 | ❌ 无 | 🟡 活跃 |
| **ZeptoClaw** | 8 / 0 | 2 / 1 | ❌ 无 | 🟡 活跃 |
| **NanoClaw** | 4 / 8 | 23 / 10 | ❌ 无 | 🟡 活跃 |
| **IronClaw** | 9 / 0 | 24 / 2 | ❌ 无 | 🟡 活跃 |
| **TinyClaw** | 1 / 1 | 1 / 0 | ✅ v0.0.7 | 🟡 低活跃 |
| **EasyClaw** | 0 / 0 | 0 / 0 | ✅ v1.5.12 | 🔴 静默 |

**关键数据洞察：**

- **第一梯队（>50 PRs/日）**：OpenClaw、NanoBot、PicoClaw — 贡献了生态 70% 以上的代码变更
- **第二梯队（10-50 PRs/日）**：Zeroclaw、NanoClaw、IronClaw — 功能开发与稳定性修复并重
- **第三梯队（<10 PRs/日）**：LobsterAI、ZeptoClaw、TinyClaw — 功能补充阶段
- **维护型项目**：EasyClaw — 零增量，仅做版本发布

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模对比

| 维度 | OpenClaw | 生态均值 | 生态最大值 |
|------|----------|----------|------------|
| 今日 Issue 动态 | 500 | ~30 | 85 (PicoClaw) |
| 今日 PR 动态 | 500 | ~40 | 104 (PicoClaw) |
| 累计评论 Issue 热度 | 71 (#3460) | <10 | 71 |
| 待合并 PR 积压 | 436 | ~25 | 85 (PicoClaw) |

### 3.2 差异化定位

**OpenClaw 的核心优势：**

1. **社区规模最大**：Issue/PR 总量是第二名 PicoClaw 的 5 倍，具备最强的社区反馈飞轮
2. **功能覆盖面最广**：从认证授权（Anthropic、OpenRouter）、memory（Qdrant、sqlite-vec）、多 channel（Discord、Telegram、WebUI）到安全沙箱，形成全栈能力
3. **响应效率较高**：多数 Bug 在 1-2 天内得到官方回应

**技术路线差异：**

| 方向 | OpenClaw | 典型差异化项目 |
|------|----------|----------------|
| 架构 | 单体应用 + 插件系统 | PicoClaw (Phase 2/3 插件架构)、NanoClaw (多通道重构) |
| 硬件集成 | 暂无 | Zeroclaw (RMN-1837 硬件栈)、PicoClaw (GPIO/Pico) |
| 安全路线 | API Key 保护、SecretRef 扩展 | IronClaw (TLS + Secret 规范化) |
| 记忆系统 | Qdrant 向量 + sqlite-vec | NanoBot (Qdrant-first 强化) |

---

## 4. 共同关注的技术方向

以下需求在**多个项目**中同时出现，反映行业共识：

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **多模态/图像输入** | ZeptoClaw (#202), PicoClaw (#639) | 全通道视觉理解、图像附件支持 |
| **本地 LLM 集成** | LobsterAI (#150, #174), PicoClaw (#109), NanoBot (#1201) | Ollama 稳定性、超时处理、token 优化 |
| **成本控制/Token 优化** | OpenClaw (#23715, #19989), NanoBot (#1332) | Prompt caching 失效修复、上下文精简 |
| **多通道架构** | NanoClaw (#500), Zeroclaw (#2079), PicoClaw (#28) | GitHub 原生通道、OneBot (QQ)、iMessage |
| **企业级功能** | IronClaw (TLS, 多租户), ZeptoClaw (#198, #200) | Azure/Bedrock 支持、配额管理 |
| **会话隔离** | TinyClaw (#144), NanoBot (#1302) | per-session/thread 工作目录隔离 |
| **安全加固** | IronClaw (#431), ZeptoClaw (#195), NanoClaw (#605) | Shell blocklist、凭证注入、命令注入防护 |

**生态信号**：上述方向中的前四项（多模态、本地 LLM、成本控制、多通道）覆盖了 60% 以上的活跃 Issue，是开发者应优先关注的技术演进方向。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|----------|----------|------------------|
| **OpenClaw** | 全栈通用 Agent 框架 | 开发者、运维团队 | 单体架构 + 插件生态，侧重 API 集成广度 |
| **Zeroclaw** | 硬件/IoT 集成 | 嵌入式开发者、硬件爱好者 | RMN-1837 设备注册表、串口传输、GPIO 控制 |
| **NanoBot** | 心跳机制、上下文管理 | 高可用部署场景 | 结构化决策 + 优先级上下文预算 (Phase 2) |
| **PicoClaw** | 多 Provider、插件系统 Phase 2/3 | 插件开发者、多模型用户 | 插件架构重构、LiteLLM/Kimi/MiniMax 多支持 |
| **IronClaw** | 企业安全、PostgreSQL 生态 | 企业用户、注重安全的团队 | TLS 支持、Secret 规范化、WASM 凭证注入 |
| **ZeptoClaw** | MCP 协议、多模态、IoT | 协议集成开发者、视觉应用 | MCP stdio transport、ContentPart 枚举 |
| **NanoClaw** | WhatsApp/多通道、安全加固 | 通讯平台用户 | Baileys socket 管理、Google Workspace MCP |
| **LobsterAI** | IM 机器人、飞书集成 | 企业 IM 用户 | 飞书 renderMode、IM 思考内容过滤 |
| **TinyClaw** | 轻量 Agent、插件集成 | 极简需求用户 | OpenViking 集成、per-thread 会话 |
| **EasyClaw** | 跨平台安装体验 | macOS/Windows 用户 | 聚焦安装体验优化 (v1.5.12 Gatekeeper) |

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

| 层级 | 项目 | 特征 |
|------|------|------|
| **快速迭代期** | OpenClaw, NanoBot, PicoClaw, Zeroclaw | 日均 50+ PR 更新、功能快速推进、Bug 与 Feature 并行 |
| **质量巩固期** | IronClaw, NanoClaw, ZeptoClaw | 侧重稳定性修复 (TLS、OOM、安全)、基础设施优化 |
| **功能补充期** | LobsterAI, TinyClaw | 特定功能完善 (IM 通道、OpenViking)、Issue 驱动开发 |
| **维护期** | EasyClaw | 零增量，仅做版本发布与文档维护 |

### 6.2 成熟度指标

| 项目 | Issue 响应速度 | Bug 修复率 | 版本发布频率 | 社区自助修复比例 |
|------|----------------|------------|--------------|------------------|
| **OpenClaw** | 🟢 1-2 天 | 🟢 高 | 🟡 低 (近期无) | 🟢 高 (用户主动提交 PR) |
| **NanoBot** | 🟢 1-3 天 | 🟢 高 | 🟢 频繁 (v0.1.4.post3) | 🟢 中 |
| **PicoClaw** | 🟢 1-2 天 | 🟢 高 | 🟢 稳定 (v0.2.0) | 🟡 中 |
| **Zeroclaw** | 🟢 1-2 天 | 🟢 高 | 🔴 无 | 🟡 低 |
| **IronClaw** | 🟡 3-5 天 | 🟡 中 | 🔴 无 | 🟢 中 (用户反馈积极) |
| **NanoClaw** | 🟢 1 天内 | 🟢 高 | 🔴 无 | 🟢 高 |
| **EasyClaw** | 🔴 无 | 🔴 N/A | 🟢 稳定 | 🔴 无 |

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势提炼

| 趋势 | 信号强度 | 证据 | 对开发者的价值 |
|------|----------|------|----------------|
| **多模态从边缘走向核心** | ⭐⭐⭐ | ZeptoClaw (#202) 图像输入、PicoClaw (#639) Discord 图片缺失反馈 | 视觉理解是下一阶段标配，建议预留架构扩展点 |
| **本地 LLM 需求爆发** | ⭐⭐⭐ | LobsterAI (Ollama issues ×3), PicoClaw (#109), NanoBot (#1201 fallback) | 本地部署成本优势明显，需优化 token 消耗与工具分发 |
| **成本控制成为痛点** | ⭐⭐⭐ | OpenClaw 5x API 费用、NanoBot "hello" 消耗 5k+ tokens | 上下文精简、prompt caching、模型路由是工程化关键 |
| **安全加固常态化** | ⭐⭐⭐ | IronClaw (TLS/Secret)、ZeptoClaw (git blocklist)、NanoClaw (命令注入) | 企业采纳前置条件，建议将安全纳入架构设计早期 |
| **硬件集成差异化** | ⭐⭐ | Zeroclaw (RMN-1837), PicoClaw (GPIO/Pico), ZeptoClaw (MQTT) | 硬件 Agent 是新兴细分市场，生态竞争壁垒较低 |
| **多通道架构重构** | ⭐⭐ | NanoClaw (#500), Zeroclaw (GitHub/OneBot 需求) | 消息通道标准化是提升可维护性的关键 |

### 7.2 开发者建议

1. **短期（1-3 个月）**：聚焦本地 LLM 集成稳定性、成本控制（token 优化、模型 fallback）、安全基础能力（API Key 保护、Shell blocklist）
2. **中期（3-6 个月）**：关注多模态架构预留、插件系统设计（参考 PicoClaw Phase 2/3）、多通道标准化
3. **长期（6-12 个月）**：硬件集成（MQTT/GPIO）、企业级能力（TLS、多租户、配额管理）是差异化竞争的重要方向

---

**报告结束**

*数据来源：GitHub 各项目 2026-03-01 动态*

---

## 同赛道项目详细报告

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 | 2026-03-01

## 1. 今日速览

Zeroclaw 项目在过去的 24 小时内保持高度活跃：共处理 **50 条 Issues**（12 条新开/活跃，38 条关闭）和 **50 条 PRs**（16 条待合并，34 条已合并/关闭）。无新版本发布。项目持续推进多项重要功能，包括硬件集成、工具增强和配置改进。社区讨论热度较高，尤其是关于 xlsx_read 工具和内存重索引功能的请求获得积极响应。

---

## 2. 版本发布

**无新版本发布**

过去 24 小时内无 Release 更新。

---

## 3. 项目进展

今日合并/关闭的重要 PRs 如下：

| PR | 状态 | 描述 | 链接 |
|---|---|---|---|
| #2315 | CLOSED | feat(hardware): 硬件 prompt 动态构建 + shorthand tool-call 解析 | [#2315](https://github.com/zeroclaw-labs/zeroclaw/pull/2315) |
| #2307 | CLOSED | feat(hardware): 设备注册表 + 串口传输核心 (RMN-1837) | [#2307](https://github.com/zeroclaw-labs/zeroclaw/pull/2307) |
| #2319 | CLOSED | feat(config): 添加 ProgressMode 枚举控制流式通道草稿更新 | [#2319](https://github.com/zeroclaw-labs/zeroclaw/pull/2319) |
| #2311 | CLOSED | feat(hardware): Pico flash 和代码工具链回放 | [#2311](https://github.com/zeroclaw-labs/zeroclaw/pull/2311) |
| #2310 | CLOSED | feat(hardware): GPIO 工具在注册表核心上的回放 | [#2310](https://github.com/zeroclaw-labs/zeroclaw/pull/2310) |
| #2290 | CLOSED | feat(memory): 添加 memory reindex 命令重建嵌入向量 [CDV-28] | [#2290](https://github.com/zeroclaw-labs/zeroclaw/pull/2290) |
| #2320 | CLOSED | docs: 描述从 "Operating System" 改回 "Framework" | [#2320](https://github.com/zeroclaw-labs/zeroclaw/pull/2320) |
| #2321 | CLOSED | feat(agent): 添加 ProgressTracker 原地工具进度更新 | [#2321](https://github.com/zeroclaw-labs/zeroclaw/pull/2321) |

**关键进展：**
- **硬件集成 (RMN-1837)**：多个大型 PR 成功合并，包括 Pico flash/runtime 工具链、prompt 动态构建、shorthand 解析，覆盖设备注册、串口传输、GPIO 工具等核心功能
- **内存功能增强**：新增 `memory reindex` 命令，支持切换嵌入模型后重建向量存储
- **配置改进**：ProgressMode 枚举完成，允许用户控制流式通道的进度输出详细程度

---

## 4. 社区热点

以下 Issues/PRs 讨论最为活跃：

| 类型 | Issue/PR | 评论数 | 热度分析 |
|---|---|---|---|
| Issue | [#2175](https://github.com/zeroclaw-labs/zeroclaw/issues/2175) compile error | 8 | 编译错误阻塞开发，需修复 ChannelRuntimeCommand 匹配 |
| Issue | [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) GitHub as native channel | 5 | 强烈需求：将 GitHub 提升为原生通道，支持 issues/PRs/comments 观察与操作 |
| Issue | [#2058](https://github.com/zeroclaw-labs/zeroclaw/issues/2058) OneBot support | 5 | QQ 生态用户请求 OneBot v11 协议支持 |
| Issue | [#2053](https://github.com/zeroclaw-labs/zeroclaw/issues/2053) config show/get/set | 5 | 运营者需要运行时配置检查与修改的 CLI 子命令 |
| Issue | [#2317](https://github.com/zeroclaw-labs/zeroclaw/issues/2317) xlsx_read tool | 1 | Office 文档工具链补全需求，PR #2318 已实现 |

**热点分析：**
- **通道扩展需求旺盛**：GitHub、OneBot、iMessage (BlueBubbles) 等多个通道请求，反映 Zeroclaw 作为多通道 agent 框架的生态扩张
- **配置运维友好化**：config 子命令、runtime 配置可视化是运维人员痛点
- **文档回归问题**：Issue #2275 指出 README 安装说明被误删，需关注文档完整性

---

## 5. Bug 与稳定性

按严重程度排列的 Bug：

| 严重度 | Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| **S0** | [#2175](https://github.com/zeroclaw-labs/zeroclaw/issues/2175) | 编译错误：ChannelRuntimeCommand 模式不完整 | CLOSED | - |
| **S0** | [#2206](https://github.com/zeroclaw-labs/zeroclaw/issues/2206) | v0.1.7 编译失败：缺少 match arm、runtime_perplexity_filter_snapshot、DocxReadTool | CLOSED | - |
| **S0** | [#2230](https://github.com/zeroclaw-labs/zeroclaw/issues/2230) | channel-lark 在 Windows 编译失败 | CLOSED | - |
| **S0** | [#2270](https://github.com/zeroclaw-labs/zeroclaw/issues/2270) | 硬编码 Anthropic fallback model ID 导致非 Anthropic provider 崩溃 | CLOSED | - |
| **S1** | [#2275](https://github.com/zeroclaw-labs/zeroclaw/issues/2275) | README.md 安装说明被移除 | CLOSED | - |
| **S2** | [#2223](https://github.com/zeroclaw-labs/zeroclaw/issues/2223) | WebSocket 聊天页面刷新后丢失所有历史记录 | CLOSED | - |
| **S2** | [#2220](https://github.com/zeroclaw-labs/zeroclaw/issues/2220) | Cron job 任务重复执行 | CLOSED | - |
| **S2** | [#2210](https://github.com/zeroclaw-labs/zeroclaw/issues/2210) | memory 仅存储用户消息，不存储 agent 回复 | CLOSED | - |
| **S2** | [#2224](https://github.com/zeroclaw-labs/zeroclaw/issues/2224) | Slack 通道显示原始用户 ID 而非显示名称 | CLOSED | - |
| **S2** | [#2264](](https://github.com/zeroclaw-labs/zeroclaw/issues/2264)) | 本地模型收到全部 33 个工具定义，token 浪费严重 | CLOSED | - |

**稳定性评估：**
- 今日 **S0 级别编译问题全部关闭**，说明构建流程已修复
- S2 级功能问题（memory 存储、Slack 名称、history 持久化）已修复
- CI 队列拥挤（Issue #2299）可能影响修复验证速度

---

## 6. 功能请求与路线图信号

**高可能性纳入下一版本的功能：**

| 功能 | Issue | 请求者 | 关联 PR | 评估 |
|---|---|---|---|---|
| **xlsx_read tool** | [#2317](https://github.com/zeroclaw-labs/zeroclaw/issues/2317) | @reidliu41 | [#2318](https://github.com/zeroclaw-labs/zeroclaw/pull/2318) | 已实现，PR 已打开，预计下版本合入 |
| **memory reindex** | [#2273](https://github.com/zeroclaw-labs/zeroclaw/issues/2273) | @ivostoykov | [#2290](https://github.com/zeroclaw-labs/zeroclaw/pull/2290) | 已合并，下版本可用 |
| **config show/get/set** | [#2053](https://github.com/zeroclaw-labs/zeroclaw/issues/2053) | @reidliu41 | - | 需求明确，已有讨论 |
| **default_model hint 支持** | [#2234](https://github.com/zeroclaw-labs/zeroclaw/issues/2234) | @creke | - | 配置增强需求 |
| **Agent 生命周期状态机** | [#2308](https://github.com/zeroclaw-labs/zeroclaw/issues/2308) | @gh-xj | - | RFI 阶段，架构改进方向 |
| **Stop-reason 状态机** | [#2309](https://github.com/zeroclaw-labs/zeroclaw/issues/2309) | @gh-xj | - | RFI 阶段，长响应截断问题 |

**路线图信号：**
- **M4-5 多 crate 工作区拆分** (#2263)：官方已立项，旨在解决编译时间痛点
- **Token 消耗与成本管理** (#2269)：产品化部署成本优化开始讨论 RFI

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的关键用户痛点：

| 场景 | 反馈 | 来源 |
|---|---|---|
| **本地模型使用** | 33 个工具全部发送导致本地 30B 模型 token 浪费严重 | #2264 |
| **Windows 开发** | 构建失败、README 缺失安装说明，开发环境配置不友好 | #2243, #2275 |
| **Web 聊天体验** | 刷新页面历史丢失，crontab 任务重复执行 | #2223, #2220 |
| **多通道需求** | GitHub、OneBot (QQ)、BlueBubbles (iMessage) 通道需求强烈 | #2079, #2058, #2268 |
| **运维便利性** | 需要 runtime 配置查看/修改命令，嵌入模型切换需重索引 | #2053, #2273 |
| **文档完整性** | 安装说明被移除，新用户上手困难 | #2275 |

**正面反馈：**
- 多个 contributor 参与硬件集成、工具增强，显示社区活跃
- ProgressTracker、ProgressMode 等 UX 改进获得积极响应

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或需要关注：

| 类型 | Issue/PR | 积压时间 | 描述 | 优先级 |
|---|---|---|---|---|
| Issue | [#2299](https://github.com/zeroclaw-labs/zeroclaw/issues/2299) CI 队列饱和 | 2 天 | 382 个任务排队，p99 等待 656 分钟 | 高 |
| Issue | [#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269) Token 成本管理 RFI | 2 天 | 产品化部署成本优化方向待定 | 中 |
| PR | [#1365](https://github.com/zeroclaw-labs/zeroclaw/pull/1365) WASM 运行时桥接 | 7 天 | 大型功能 (L)，高风险，待合并 | 中 |
| PR | [#1676](https://github.com/zeroclaw-labs/zeroclaw/pull/1676) TLS CA 证书支持 | 5 天 | 企业级需求，高风险 | 中 |
| Issue | [#2204](https://github.com/zeroclaw-labs/zeroclaw/issues/2204) subagents 支持 | 2 天 | 委托子任务需求 | 低 |

**提醒维护者关注：**
- CI 资源瓶颈可能导致修复验证延迟
- 大型 PR (#1365, #1676) 需尽快安排审查

---

*报告生成时间：2026-03-01 | 数据来源：GitHub Zeroclaw 项目 24 小时动态*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-01)

## 1. 今日速览

项目今日处于**低活跃度**状态。过去24小时内无新增Issue或PR，但发布了 **v1.5.12** 版本，主要针对macOS用户的安装痛点提供了明确的解决方案。当前版本更新属于**维护性发布**，聚焦于用户体验优化而非功能迭代。项目整体运行平稳，无重大功能性变更或稳定性问题报告。考虑到发布周期和社区活跃度，EasyClaw正处于稳定维护阶段。

---

## 2. 版本发布

### v1.5.12 发布说明

**发布状态**: ✅ 已发布 | [查看 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.5.12)

**更新内容**:

本次版本更新聚焦于**macOS安装体验优化**，主要包含以下内容：

| 更新类型 | 说明 |
|---------|------|
| 问题修复 | 解决 macOS Gatekeeper 导致的"已损坏无法打开"误报问题 |
| 文档补充 | 添加 macOS 手动信任设置的分步骤指南（Terminal 操作指引） |

**破坏性变更**: ❌ 无

**迁移注意事项**: ✅ 无需特殊迁移，现有用户升级无影响

**评估**: 这是一个**用户导向的体验修复版本**，反映了项目对跨平台兼容性的持续关注。Gatekeeper 误报是 macOS 未签名应用的常见问题，此次文档化解决方案有助于降低用户支持成本。

---

## 3. 项目进展

| 指标 | 数值 |
|------|------|
| 合并 PR | 0 |
| 关闭 Issue | 0 |
| 新增 Issue | 0 |
| 新增 PR | 0 |

**今日总结**: 无合并或关闭的 PR。版本发布 v1.5.12 已通过其他渠道完成，未产生新的 PR 记录。项目今日未产生可追踪的开发进展，主要工作集中于发布支持文档。

---

## 4. 社区热点

**今日热点**: 无

过去24小时内无新增讨论。社区处于相对静默期，未出现高评论量或高关注度的 Issue/PR。

**历史活跃参考** (建议关注):
- 建议维护者定期回顾近期高赞 Issue，识别持续性需求
- 关注跨平台兼容性相关话题（本次 macOS 安装问题即为典型）

---

## 5. Bug 与稳定性

**今日报告的 Bug**: 0

| 严重程度 | Bug 描述 | Fix PR 状态 |
|---------|---------|------------|
| - | 无新增Bug | - |

**稳定性评估**: ✅ 稳定

无新增崩溃、回归或严重问题报告。项目在功能层面保持稳定。

---

## 6. 功能请求与路线图信号

**今日功能请求**: 0

基于今日数据，无新增功能请求。考虑到 v1.5.12 为维护性版本，下一版本可能继续聚焦于：
- 跨平台兼容性改进
- 用户反馈驱动的体验优化

**建议**: 维护者可回顾历史 Issue 中未实现的 Feature Request，评估纳入路线图的可能性。

---

## 7. 用户反馈摘要

从今日 Issue 评论中**未提取到用户反馈**（今日无新增 Issue）。

**历史用户痛点参考** (基于 v1.5.12 发布内容):
- **核心痛点**: macOS 用户在安装未签名应用时遭遇 Gatekeeper 误报，导致无法正常启动
- **影响场景**: 新用户首次安装、重新安装后
- **用户情绪**: 困惑→误以为文件损坏→可能放弃使用
- **满意度**: v1.5.12 的解决方案有望显著改善此问题

---

## 8. 待处理积压

| 类型 | 标题 | 状态 | 积压时长 | 优先级 |
|------|------|------|----------|--------|
| Issue | - | - | - | - |
| PR | - | - | - | - |

**今日积压**: 无

无长期未响应的关键 Issue 或 PR。维护者当前无积压处理压力。

---

## 📊 关键指标汇总

| 维度 | 状态 | 备注 |
|------|------|------|
| 活跃度 | 🟡 低 | 零 Issue/PR 增量 |
| 版本发布 | ✅ 正常 | v1.5.12 已发布 |
| 稳定性 | ✅ 平稳 | 无 Bug 报告 |
| 社区互动 | 🔴 静默 | 无讨论 |
| 积压处理 | ✅ 无压力 | 无关键待办 |

---

**报告生成时间**: 2026-03-01  
**数据来源**: GitHub (gaoyangz77/easyclaw)  
**分析师**: AI 开源项目分析助手

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-03-01）

## 1. 今日速览

过去 24 小时内，LobsterAI 项目保持较高活跃度，共产生 21 条 Issues 更新（其中新开/活跃 19 条）和 3 条 PR 更新。社区反馈集中在本地模型集成（Ollama）、跨平台兼容性（Windows 11/Linux）以及 IM 机器人交互体验优化等方面。项目目前无新版本发布，但有 1 个 PR 处于待合并状态，整体开发节奏稳健。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 项目进展

| PR | 状态 | 说明 |
|---|---|---|
| [#83](https://github.com/netease-youdao/LobsterAI/pull/83) | CLOSED | fix：飞书 renderMode 默认为 card，支持 markdown；IM 返回过滤思考内容 |
| [#155](https://github.com/netease-youdao/LobsterAI/pull/155) | CLOSED | Liuzhq/app update |
| [#127](https://github.com/netease-youdao/LobsterAI/pull/127) | OPEN | Fix default model in settings - 合并后将查找第一个启用的供应商并设为主动供应商，避免使用旧配置中的 stale activeProvider |

**进展摘要**：昨日合并的 PR #83 解决了飞书消息渲染和 IM 机器人思考内容过滤的问题，直接回应了 Issue #28 中用户关于"连接 IM BOT 后思考过程不显示给通讯软件"的诉求。PR #127 当前待合并，将修复设置页面默认模型选择逻辑。

---

## 4. 社区热点

| Issue | 评论数 | 核心诉求 |
|---|---|---|
| [#150](https://github.com/netease-youdao/LobsterAI/issues/150) | 4 | 本地 Ollama 模型部署无法使用 |
| [#28](https://github.com/netease-youdao/LobsterAI/issues/28) | 3 | IM 机器人思考过程显示控制（已通过 PR #83 解决） |
| [#185](https://github.com/netease-youdao/LobsterAI/issues/185) | 2 | Custom 供应商支持 OpenAI 新 Responses API 格式 |
| [#144](https://github.com/netease-youdao/LobsterAI/issues/144) | 2 | Windows 11 报错及兼容性问题 |

**热点分析**：Issue #150 和 #174 均指向 Ollama 本地模型集成问题，反映出用户对低成本本地部署的强烈需求；Issue #185 关注 OpenAI 最新 API 迁移，体现出技术前瞻性；Issue #28 的高评论量说明 IM 机器人体验是用户关注焦点，相关修复（PR #83）已落地。

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 平台 | 状态 |
|---|---|---|---|
| [#144](https://github.com/netease-youdao/LobsterAI/issues/144) | **高** | Windows 11 | OPEN - Claude Agent SDK 404 错误 |
| [#139](https://github.com/netease-youdao/LobsterAI/issues/139) | **高** | 通用 | OPEN - Claude Code process exited with code 1，邮箱配置后持续报错 |
| [#188](https://github.com/netease-youdao/LobsterAI/issues/188) | **高** | Windows | OPEN - Skill 功能无法调用，疑似 cygpath 依赖问题 |
| [#141](https://github.com/netease-youdao/LobsterAI/issues/141) | **中** | 沙箱环境 | OPEN - 文件读取路径拼接错误 |
| [#180](https://github.com/netease-youdao/LobsterAI/issues/180) | **中** | Linux | CLOSED - Linux 下 read 权限问题 |

**稳定性评估**：昨日未产生新的 fix PR，积压 Bug 多集中于跨平台兼容性（Windows/Linux）和第三方集成（Ollama、Claude SDK），建议优先处理 #144 和 #139 以改善核心可用性。

---

## 6. 功能请求与路线图信号

| Issue | 功能描述 | 优先级信号 |
|---|---|---|
| [#185](https://github.com/netease-youdao/LobsterAI/issues/185) | Custom 供应商支持 OpenAI 新 Responses API | 高 - 涉及新模型兼容性 |
| [#174](https://github.com/netease-youdao/LobsterAI/issues/174) | 加强 Ollama 调用能力（超时、无响应问题） | 高 - 大量用户反馈 |
| [#189](https://github.com/netease-youdao/LobsterAI/issues/189) | 支持 OpenAI OAuth | 中 - 企业用户需求 |
| [#176](https://github.com/netease-youdao/LobsterAI/issues/176) | 任务记录分组、笔记功能、SKILL 内置编辑 | 中 - 体验增强 |
| [#186](https://github.com/netease-youdao/LobsterAI/issues/186) | 记忆能力优化 | 中 - 核心体验 |

**路线图信号**：基于 Issue #185 的具体技术指向和 #174 的高频反馈，预计下一版本重点可能包括：OpenAI Responses API 适配、Ollama 集成稳定性提升、IM 机器人交互优化（PR #83 已覆盖部分）。

---

## 7. 用户反馈摘要

- **本地部署诉求强烈**：多位用户（#150、#174、#187）反馈 Ollama 本地模型无法正常使用，期望降低 API 调用成本。
- **跨平台兼容性不足**：Windows 11 用户（#144、#184、#183）报告报错、无法使用、乱码等问题；Linux 用户（#180）反馈权限异常。
- **IM 机器人体验待优化**：TG 机器人群组回复逻辑（#181）、Discord 思考过程显示（#28 已部分解决）、IM 启动新会话机制（#179）等反馈集中。
- **资源消耗担忧**：#177 反馈内存占用过高，影响使用体验。
- **模型兼容性问题**：私有云部署模型（#175）报 Max_tokens 错误，非阿里模型（#187）大面积不可用。

---

## 8. 待处理积压

| Issue/PR | 积压时长 | 风险提示 |
|---|---|---|
| [#150](https://github.com/netease-youdao/LobsterAI/issues/150) | ~2 天 | 高优先级用户问题，Ollama 集成核心功能 |
| [#174](https://github.com/netease-youdao/LobsterAI/issues/174) | ~1 天 | 高频功能请求，建议纳入版本规划 |
| [#139](https://github.com/netease-youdao/LobsterAI/issues/139) | ~3 天 | 严重功能阻断，影响 Claude Code 正常使用 |
| [#127](https://github.com/netease-youdao/LobsterAI/pull/127) | ~3 天 | 待合并 PR，建议优先处理以改善设置逻辑 |

**提醒**：建议维护者关注 Issue #150、#174、#139 的处理进度，及时响应用户核心痛点；PR #127 建议优先合并以修复默认模型设置逻辑。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-03-01

---

## 1. 今日速览

ZeptoClaw 项目今日保持高度活跃状态。社区在 24 小时内提交了 **8 个新 Issue** 和 **2 个待合并 PR**，另有 **1 个 PR 已关闭**。功能开发集中在多模态交互（图像输入）、IoT 通信（MQTT）、企业级能力（Azure/Bedrock 支持、配额管理）三大方向。安全相关修复 PR (#195) 已进入审查阶段。项目整体向前推进，代码提交频率健康，无重大稳定性问题报告。

---

## 2. 版本发布

**本期无新版本发布**

---

## 3. 项目进展

### 已合并/关闭 PR

| PR | 状态 | 描述 | 链接 |
|---|---|---|---|
| #192 | **CLOSED** | feat(mcp): add stdio transport and MCP tool registration | [查看](https://github.com/qhkm/zeptoclaw/pull/192) |

**推进内容**：该 PR 完成了 MCP (Model Context Protocol) 的传输层抽象，引入 `McpTransport`、`HttpTransport` 和 `StdioTransport`，使 MCP 客户端支持 stdio 模式，拓展了项目的协议集成能力。

### 待合并 PR

| PR | 状态 | 描述 | 链接 |
|---|---|---|---|
| #202 | OPEN | feat: add multimodal vision/image input support | [查看](https://github.com/qhkm/zeptoclaw/pull/202) |
| #195 | OPEN | fix(safety): block destructive git operations in shell blocklist | [查看](https://github.com/qhkm/zeptoclaw/pull/195) |

**推进内容**：
- **#202**：为消息管道添加原生 `ContentPart` 枚举（Text/Image 变体），支持 Base64/文件路径/URL 三种图像源，并扩展 `InboundMessage.media` 为向量以支持单条消息多图附件。这是实现全通道视觉/图像输入支持的关键前置 PR。
- **#195**：通过 6 个正则表达式模式阻止通过 shell 执行破坏性 git 命令（`push --force`、`reset --hard`、`clean -f`、`checkout -- .`、`branch -D`），补齐 sub-agent 通过 shell 绕行 git 工具的安全漏洞。

---

## 4. 社区热点

| Issue/PR | 讨论热度 | 链接 |
|---|---|---|
| #193: LLM endpoint switching on the fly in telegram | 3 条评论 | [查看](https://github.com/qhkm/zeptoclaw/issues/193) |
| #197: vision/image input support across all channels | 新 Issue，暂无评论 | [查看](https://github.com/qhkm/zeptoclaw/issues/197) |

**#193 分析**：用户提出的动态切换 LLM 端点需求直指生产环境痛点——LLM 提供商的速率限制（rate limit）在多用户场景下极易触发。该需求与 OpenClaw 现有的 `/models` 和 `/model` 命令设计思路一致，社区关注度高（3 条评论），预计将纳入后续迭代。

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 描述 | Fix PR |
|---|---|---|---|
| #194 | **中** | git-dangerous patterns 未加入 shell blocklist，sub-agent 可通过 shell 执行破坏性 git 操作 | #195 (待合并) |

**说明**：该问题影响共享分支的多人协作场景，严重程度中等。修复 PR #195 已提交，预计近期合入。

---

## 6. 功能请求与路线图信号

以下 Issue 反映社区核心诉求，结合已有 PR (#202) 推测下一版本重点方向：

| Issue | 类别 | 描述 | 链接 |
|---|---|---|---|
| #197 | 多模态 | vision/image input support across all channels | [查看](https://github.com/qhkm/zeptoclaw/issues/197) |
| #199 | 通道扩展 | add MQTT channel for IoT device communication | [查看](https://github.com/qhkm/zeptoclaw/issues/199) |
| #201 | 工具扩展 | add DOCX text extraction tool | [查看](https://github.com/qhkm/zeptoclaw/issues/201) |
| #200 | 企业特性 | per-provider usage quota management | [查看](https://github.com/qhkm/zeptoclaw/issues/200) |
| #198 | 供应商扩展 | add Azure OpenAI and Amazon Bedrock provider presets | [查看](https://github.com/qhkm/zeptoclaw/issues/198) |
| #196 | 工具扩展 | web search using searxng | [查看](https://github.com/qhkm/zeptoclaw/issues/196) |

**路线图信号**：
- **多模态能力** (#197 + #202)：PR #202 已实现底层结构，全通道图像输入支持大概率在下一版本完成。
- **IoT 深化** (#199)：MQTT 通道补足了 ZeptoClaw 对 ESP32/RPi/Arduino 等硬件的无线通信能力，是差异化的重要方向。
- **企业级能力** (#198, #200)：Azure OpenAI 和 Bedrock 支持 + 按供应商配额管理，指向大规模商业部署场景。

---

## 7. 用户反馈摘要

从 Issue 讨论中提炼的核心诉求：

- **LLM 速率限制应对**（#193）：用户在实际生产中频繁遭遇速率瓶颈，期望在 Telegram 等渠道无缝切换端点。
- **多格式文档处理**（#201）：PDF 已支持，DOCX 是 business 场景高频需求，用户对“全通道文档理解”有明确期望。
- **自托管搜索**（#196）：用户倾向使用 Searxng 替代商业搜索 API以规避成本和隐私风险。
- **git 操作安全**（#194）：sub-agent 权限边界模糊已造成实际困扰，社区对安全加固呼声较高。

---

## 8. 待处理积压

| Issue/PR | 积压天数 | 描述 | 链接 |
|---|---|---|---|
| #193 | ~2 天 | LLM endpoint switching on the fly in telegram（待回应） | [查看](https://github.com/qhkm/zeptoclaw/issues/193) |
| #194 | ~1 天 | fix: add git-dangerous patterns to shell blocklist（待合并） | [查看](https://github.com/qhkm/zeptoclaw/issues/194) |

**提醒**：Issue #193 已有 3 条讨论，建议维护者尽快回应社区以确认实现方向。

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-01)

## 1. 今日速览

项目在过去24小时保持**高度活跃**状态：共处理 **24 条 Issues**（其中 20 条新开/活跃，4 条关闭）和 **79 条 PR 更新**（54 条待合并，25 条已合并/关闭）。新增 **1 个版本发布** (v0.1.4.post3)，合并了 33 个 PR，引入 16 位新贡献者。重点改进集中在**上下文清理、会话历史强化、减少幽灵消息**等方面，整体向**更智能、更稳定**的方向演进。项目当前处于功能快速迭代期，社区参与度较高。

---

## 2. 版本发布

### v0.1.4.post3 ✅

**发布说明：**
- **合并 PR 数：** 33 个
- **新贡献者：** 16 位
- **核心主题：** 让 Agent **"看得更少，变得更聪明"**（smarter by seeing less junk）

**主要改进：**
- 🔥 **更干净的上下文 (Cleaner context)**：减少无关信息输入，降低幻觉输出
- 🛡️ **强化会话历史 (Hardened session history)**：修复会话污染问题（如 `content: null` 导致的历史污染）
- 👻 **减少幽灵消息 (Fewer ghost messages)**：优化消息处理流程

**迁移注意事项：** 无重大破坏性变更，建议所有用户升级以获得更好的上下文管理体验。

**发布链接：** https://github.com/HKUDS/nanobot/releases

---

## 3. 项目进展

### 今日合并/关闭的重要 PRs

| PR # | 标题 | 状态 | 意义 |
|------|------|------|------|
| **#1359** | fix(heartbeat): preserve HEARTBEAT.md details in phase-2 execution | OPEN | 修复心跳阶段2丢失任务细节的问题（关联 #1310） |
| **#1360** | feat(heartbeat): structured decision + prioritized context budgeting | OPEN | 系统级改进，从摘要执行转向结构化决策+优先级上下文预算 |
| **#1348** | fix(lark): Remove non-existent stop() call | **CLOSED** | 修复 Lark 通道运行时崩溃问题 |
| **#1346** | fix(qq): disable botpy file log to fix read-only filesystem error | **CLOSED** | 修复 systemd 服务下的只读文件系统错误（#1343） |
| **#1330** | fix(providers): allow reasoning_content in message history | **CLOSED** | 修复 Moonshot Kimi 推理模型工具调用失败问题（#1313） |
| **#1351** | feat: add reasoning_effort config to enable LLM thinking mode | **CLOSED** | 新增 `reasoning_effort` 配置，支持 LLM 思考/推理模式 |
| **#1357** | feat(memory): add multi-provider embedding support for Qdrant | OPEN | 为 Qdrant 向量记忆新增多提供商嵌入支持 |
| **#1356** | feat(memory): harden Qdrant-first memory and block legacy paths | OPEN | 强化 Qdrant 优先策略，封禁废弃的文件记忆路径 |
| **#1340** | fix(provider): force gateway routing for LiteLLM calls | OPEN | 修复网关模式下模型名称关键字误检问题（如 `gemini`） |
| **#1341** | feat: web chat channel with SSE token streaming | OPEN | 新增自包含 Web 聊天界面，支持 SSE token 流式传输 |

**整体评估：** 项目在**心跳机制优化、多模态通道集成、记忆系统强化**三个方向取得显著进展多条 PR 聚焦于**稳定性修复**（ Lark、QQ、Telegram），体现了对生产环境可靠性的重视。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 状态 | 热度分析 |
|---------|------|--------|------|----------|
| **#215** | 飞书无法建立长连接 | 21 | OPEN | 🔥 飞书用户反馈长连接模式无法选择，配置正确但无法建立，是阻塞性问题 |
| **#1302** | per-session working directory isolation | 4 | OPEN | 多个会话共享工作目录导致文件混乱，用户对隔离需求强烈 |
| **#281** | Is It support Claude subscription or no? | 4 | OPEN | 社区对 Claude 订阅支持的功能请求，呼声较高 |
| **#1045** | [BUG] DingTalk group chat | 2 | 👍×2 | 钉钉群聊中 @机器人回复却发私聊，已修复待提交 PR |

**热点分析：**
- **飞书长连接问题**（#215）讨论最活跃（21条评论），是今日最热的阻塞性问题，多位用户在评论区提供排查线索
- **工作目录隔离**（#1302）反映多租户/多会话场景需求，是生产环境常用功能
- **钉钉群聊 bug**（#1045）已获 ⭐×2 认可，用户表示已修复并愿意提交 PR，社区互助氛围好

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）

| Issue # | 问题描述 | 严重程度 | 状态 | 关联 PR |
|---------|----------|----------|------|---------|
| **#1358** | Docker 环境下 OpenAI Codex 认证失败 | 🔴 高 | OPEN | - |
| **#1344** | QQ 机器人突然报错：messages.content 类型错误 | 🔴 高 | OPEN | - |
| **#1300** | Matrix 通道无法启动 | 🔴 高 | OPEN | - |
| **#1318** | 机器人重复回复消息 | 🟠 中 | OPEN | - |
| **#1353** | ClawHub rate limit 问题导致技能安装失败 | 🟠 中 | OPEN | - |
| **#1350** | gateway 模式下 send_progress/send_tool_hints 配置不生效 | 🟡 低 | OPEN | - |
| **#1328** | agent 和 gateway 不共享 skills | 🟡 低 | OPEN | - |
| **#1332** | Token 消耗过高（"hello" 消耗 5k+ tokens） | 🟡 低 | OPEN | - |

**已修复：**
- ✅ **#1343** (QQ 只读文件系统错误) → PR #1346 已关闭
- ✅ **#1303** (会话内容污染: null) → 已在 v0.1.4.post3 中修复

**稳定性评估：** 今日无大规模崩溃报告，但存在 **3 个高严重度 Bug** 需关注（Matrix 通道、Docker 认证、QQ 消息类型错误）。建议优先处理 Matrix 和 Docker 问题。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue # | 功能请求 | 合理性评估 | 可能的纳入方向 |
|---------|----------|------------|----------------|
| **#281** | 支持 Claude 订阅 | ⭐⭐⭐ 高 | 用户基数大，Claude API 广泛使用 |
| **#1334 / #1338** | Telegram Reaction 支持 | ⭐⭐⭐ 高 | 已有关注，PR 可能在审 |
| **#1302** | 会话级工作目录隔离 | ⭐⭐⭐ 高 | 生产环境刚需，已有讨论 |
| **#110** | 禁止输出 Markdown | ⭐⭐ 中 | 小众需求，但有明确场景 |
| **#1357** | Qdrant 多提供商嵌入 | ⭐⭐⭐ 高 | PR #1357 已在处理 |
| **#1201** | 多模型提供商 + fallback 支持 | ⭐⭐⭐ 高 | PR #1201 已在开发 |
| **#339** | Window Protocol 通道（iOS 原生 App） | ⭐⭐ 中 | 长期功能，路线图相关 |

**路线图信号：**
- ✅ **心跳机制重构**（#1360, #1359）：结构化决策 + 上下文预算 → 下一代核心架构
- ✅ **多模型 fallback**（#1201）：可靠性提升，下一版本可期
- ✅ **Web 聊天界面**（#1341）：自包含 UI，扩展使用场景
- ✅ **记忆系统强化**（#1356, #1357）：Qdrant-first 战略明确

---

## 7. 用户反馈摘要

### 从 Issues 评论中提炼的真实痛点

| 场景 | 用户痛点 | 频次 |
|------|----------|------|
| **飞书集成** | 长连接无法建立，配置正确但无法使用 | 高 |
| **Token 消耗** | 简单消息消耗 5k+ tokens，成本担忧 | 中 |
| **多会话管理** | 文件混乱、skills 不共享、上下文污染 | 中 |
| **通道稳定性** | Matrix/QQ/钉钉偶发崩溃或行为异常 | 中 |
| **Docker 部署** | 认证、权限、文件系统等问题 | 低 |
| **功能缺失** | Claude 订阅、Discord slash commands 支持 | 低 |

**用户满意度：**
- 👍 **正面**：新版本清理上下文、减少幻觉获得好评；社区修复积极性高（#1045 用户主动提交 PR）
- 👎 **负面**：Token 消耗高企令部分用户不满；飞书长连接问题长期未解决

---

## 8. 待处理积压

### 长期未响应的重要 Issue（>7 天无更新）

| Issue # | 标题 | 创建时间 | 状态 | 提醒 |
|---------|------|----------|------|------|
| **#215** | 飞书无法建立长连接 | 2026-02-06 | OPEN | 🔴 高优先级，21 条讨论仍未解决 |
| **#281** | Claude subscription 支持 | 2026-02-07 | OPEN | 🟠 社区明确需求 |
| **#110** | 禁止输出 Markdown | 2026-02-04 | OPEN | 🟡 长期需求 |
| **#1045** | DingTalk group chat bug | 2026-02-23 | OPEN | 🟢 用户已修复，待 PR |

### 长期未响应的 PR（>14 天无更新）

| PR # | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|----------|------|------|
| **#1201** | feat(providers): multi-model provider with fallback | 2026-02-25 | OPEN | 🟠 高价值功能，需评审 |
| **#339** | feat: add Window Protocol channel | 2026-02-08 | OPEN | 🟡 长期功能，可讨论方向 |

---

## 📊 关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 新增/活跃 | 20 | ↗️ 较昨日+5 |
| Issues 关闭 | 4 | ↘️ 较昨日-2 |
| PR 更新 | 79 | ↗️ 高度活跃 |
| PR 待合并 | 54 | ⚠️ 积压较多 |
| 版本发布 | 1 | ✅ 正常 |
| 合并 PR (v0.1.4.post3) | 33 | 📈 大版本 |

---

**报告生成时间：** 2026-03-01  
**数据来源：** GitHub HKUDS/nanobot

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-01)

## 1. 今日速览

PicoClaw 项目在过去 24 小时内保持高度活跃状态：共处理 **85 条 Issues**（新开/活跃 76，已关闭 9）和 **104 条 PRs**（待合并 85，已合并/关闭 19），并发布了 **v0.2.0** 新版本。项目呈现快速增长态势，插件系统 Phase 2/3 正在积极推进，同时多个 Provider 支持（Kimi、Exa、MiniMax、LiteLLM）已进入 PR 阶段，社区参与度显著提升。

---

## 2. 版本发布

### v0.2.0 发布

**发布说明**：本次更新主要聚焦于文档优化和微信生态集成。

| Commit | 变更内容 |
|--------|----------|
| a91a4e5 | 更新微信二维码并删除未使用的 mp4 文件 (#852) |
| 1b3da2c | 更新微信群二维码 |
| aea4f25 | 更新微信二维码；添加 CONTRIBUTING.md |
| 19c6890 | *(完整 Commit ID 未显示)* |

> 📎 Release 链接：https://github.com/sipeed/picoclaw/releases

---

## 3. 项目进展

### 合并/关闭的重要 PRs

| PR | 状态 | 说明 |
|----|------|------|
| **#625** | ✅ CLOSED | 修复 antigravity oauth scopes 刷新问题，改进 auth status 显示请求的 scopes |
| **#920** | ✅ OPEN | 修复 `gateway status` 启动额外工作进程的 bug，避免多个未管理的 gateway 并行运行 |
| **#935** | ✅ OPEN | Telegram 消息分块支持，解决超过 4096 字符限制导致发送失败 |
| **#931** | ✅ OPEN | 修复 onboarding 模板命名不匹配问题（AGENT.md → AGENTS.md），关闭 #921 |
| **#917** | ✅ OPEN | 修复 Slack 资源泄漏问题 |
| **#918** | ✅ OPEN | 修复企业微信上下文泄漏和 processedMsgs 数据竞争 |

### 重点功能推进

| 方向 | PRs | 进度 |
|------|-----|------|
| **插件系统 Phase 2/3** | #936, #937, #938, #939 | 4 个 PR 陆续提交，包含核心选择器、启动接线、lint CLI、roadmap |
| **新 Provider 支持** | #933 (Kimi), #934 (Exa), #630 (MiniMax), #930 (LiteLLM) | 多 Provider 集成进入 PR 阶段 |
| **MCP 工具集成** | #282 | 添加 Model Context Protocol 支持 + Docker 部署选项 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 标签 | 核心诉求 |
|-------|--------|------|----------|
| **#694** | 14 | help wanted, provider | 如何配置 OpenRouter API（详细配置结构问题） |
| **#4** | 11 | closed | 本地网络无法发现网关（Ubuntu 24.04 + AMD Ryzen 7） |
| **#901** | 10 | bug, help wanted | 无法添加 openrouter/free model |
| **#680** | 10 | bug, provider | 默认 api_base 总是被设置为 GLM provider |
| **#79** | 9 | domain: provider | Gemini 3 Flash Preview 函数调用缺少 thought_signature |
| **#28** | 8 | feature | 请求 LM Studio Easy Connect 集成 |
| **#148** | 8 | feature | 是否支持开箱即用的官方/第三方 SKILLs |
| **#639** | 7 | bug, channel | Discord 发送图片功能缺失（对比 OpenClaw） |
| **#109** | 7 | bug | 本地 Ollama (OpenAI 兼容端点) 提示 "no API key configured" |

### 热点分析

1. **Provider 配置问题集中**：多个 Issue 反映 OpenRouter、GLM、Ollama 等 Provider 配置复杂或默认值不合理，说明配置层需要优化。
2. **多平台兼容性需求**：Windows/Gemini、Ubuntu、Telegram、Discord 等多端问题并存，跨平台稳定性是痛点。
3. **新模型支持**：Kimi、MiniMax、LiteLLM 等新 Provider 呼声高，社区积极贡献 PR。

---

## 5. Bug 与稳定性

### 今日报告的关键 Bug（按严重程度）

| Issue | 严重度 | 状态 | 说明 |
|-------|--------|------|------|
| **#704** | 🔴 HIGH | OPEN | 会话历史竞态条件导致 tool_call_ids 缺失响应消息（HTTP 400） |
| **#680** | 🔴 HIGH | OPEN | 默认 api_base 错误设置为 GLM，导致其他 Provider 失效 |
| **#901** | 🔴 HIGH | OPEN | 无法添加 openrouter/free model |
| **#748** | 🟠 MEDIUM | OPEN | Groq API 工具调用格式不兼容（返回 400 错误） |
| **#667** | 🟠 MEDIUM | CLOSED | Telegram 频道多实例冲突（409 Conflict） |
| **#671** | 🟠 MEDIUM | OPEN | `gateway status` 启动额外工作进程（已有 fix: #920） |
| **#386** | 🟢 LOW | CLOSED | exec 工具误拦截含 URL 的命令（路径 guard 正则问题） |

> 🔧 **已有 Fix PR**: #920 (gateway status), #917 (Slack leak), #918 (Wecom leak)

---

## 6. 功能请求与路线图信号

### 高价值 Feature Requests

| Issue | 赞同 | 预计纳入 |
|-------|------|----------|
| **#28** LM Studio Easy Connect | 1 | 中期 |
| **#148** 开箱即用的 SKILLs 支持 | 2 | 中期 |
| **#260** Azure OpenAI 支持 | 0 | 近期（#633 MiniMax PR 已覆盖 OpenAI 兼容） |
| **#39** `picoclaw doctor` 命令 | 3 | 近期 |
| **#675** MiniMax Provider 支持 | 3 | **已在 #633 中实现** |
| **#669** 远程 Agent 通信 | 3 | 长期 |
| **#711** JSONL 会话持久化 | 4 | 长期 |

### 路线图信号

从 PR 来看，项目正在推进：
- **Phase 2/3 插件系统**（#936-939）
- **多 Provider 扩展**（Kimi、Exa、MiniMax、LiteLLM）
- **MCP 工具生态**（#282）

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 用户反馈 |
|------|----------|
| **本地部署** | “本地 Ollama 配置后仍提示 no API key”（#109） |
| **多平台** | “Ubuntu 24.04 上 gateway 启动后在 Telegram/Discord 无响应”（#36, #4） |
| **配置复杂性** | “OpenRouter 配置结构不清晰，官方文档没有明确说明”（#694） |
| **Provider 锁定** | “默认 provider 被 GLM 锁定，无法使用其他模型”（#680） |
| **功能缺失** | “Discord 发送图片功能对比 OpenClaw 缺失”（#639） |

### 满意度迹象

- MiniMax、LiteLLM、Kimi 等新 Provider 社区积极贡献 PR，说明对多模型支持认可
- 插件系统 Phase 2/3 吸引多名开发者参与（@gh-xj 主导系列 PR）
- v0.2.0 发布说明社区参与文档完善（CONTRIBUTING.md 新增）

---

## 8. 待处理积压

### 长期未响应的关键 Issue

| Issue | 创建时间 | 状态 | 提醒 |
|-------|----------|------|------|
| **#75** 支持本地 LLM/Ollama | 2026-02-12 | OPEN | 6 个赞同，社区高频需求 |
| **#79** Gemini 3 Flash Preview 函数调用失败 | 2026-02-12 | OPEN | 影响新版 Gemini 用户 |
| **#260** Azure OpenAI 支持 | 2026-02-16 | OPEN | 企业用户需求 |
| **#36** Telegram Gateway 挂起 | 2026-02-11 | OPEN | 阻塞 Telegram 频道使用 |

### 待合并的高优先级 PRs

| PR | 说明 | 建议 |
|----|------|------|
| **#930** LiteLLM 支持 | 重要企业功能 | 尽快 Review |
| **#282** MCP 工具支持 | 生态扩展亮点 | 长期重点 |
| **#633** MiniMax Provider | 社区贡献 | 尽快合并 |

---

**日报生成时间**：2026-03-01  
**数据来源**：GitHub PicoClaw (sipeed/picoclaw)  
**整体健康度评估**：🟢 活跃度高，功能推进快，建议关注长尾 Issue 响应时效。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-01)

## 1. 今日速览

过去24小时内，NanoClaw 项目保持较高活跃度：共处理 **12 条 Issues**（4 个新开，8 个关闭）和 **33 条 PR** 更新（23 个待合并，10 个已关闭）。所有 Issues 均已在新开当天获得响应并关闭，体现了维护团队的响应效率。值得注意的是，近期修复了大量底层稳定性问题（OOM、命令注入、路径遍历），项目安全性与健壮性明显提升。未发布新版本。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

过去24小时共关闭 **10 个 PR**，主要聚焦于功能增强、稳定性修复和基础设施改进：

| PR | 状态 | 类型 | 摘要 |
|---|---|---|---|
| [#605](https://github.com/qwibitai/nanoclaw/pull/605) | OPEN | Fix | 修复 `stopContainer()` 命令注入漏洞 + OOM 根因（幽灵 socket） |
| [#606](https://github.com/qwibitai/nanoclaw/pull/606) | OPEN | Fix | 使 `CLAUDE_MODEL` 环境变量端到端生效 |
| [#604](https://github.com/qwibitai/nanoclaw/pull/604) | OPEN | Docs | 新增贡献者架构概览文档 `WALKTHROUGH.md` |
| [#601](https://github.com/qwibitai/nanoclaw/pull/601) | OPEN | Fix | 防止任务执行时间超过轮询间隔时重复运行 |
| [#596](https://github.com/qwibitai/nanoclaw/pull/596) | OPEN | Fix | 重连时销毁旧 Baileys socket，防止 40 小时后 OOM 崩溃 |
| [#597](https://github.com/qwibitai/nanoclaw/pull/597) | OPEN | Feat | 新增 Google Workspace MCP 技能（支持 12 项服务） |
| [#500](https://github.com/qwibitai/nanoclaw/pull/500) | OPEN | Refactor | 实现可插拔多通道架构转型 |
| [#592](https://github.com/qwibitai/nanoclaw/pull/592) | OPEN | Feat | 第三方模型支持（ANTHROPIC_BASE_URL / AUTH_TOKEN） |
| [#385](https://github.com/qwibitai/nanoclaw/pull/385) | OPEN | Feat | WhatsApp @mention 支持 |
| [#466]( WhatsApp 重连指数退避) | OPEN | Fix | WhatsApp 重连添加指数退避 |

**已关闭 PR：**
- [#547](https://github.com/qwibitai/nanoclaw/pull/547) — 添加 Shabbat（安息日）模式 🕯️
- [#598](https://github.com/qwibitai/nanoclaw/pull/598) — 初始本地定制（Gmail/Slack 通道支持）
- [#600](https://github.com/qwibitai/nanoclaw/pull/600) — 求职个人化助手 + AI-Slop 简历审查
- [#594](https://github.com/qwibitai/nanoclaw/pull/594) — 实时交易跟踪、run 过滤、孤立清理
- [#470](https://github.com/qwibitai/nanoclaw/pull/470) — 关机时优雅停止 Docker 容器
- [#593](https://github.com/qwibitai/nanoclaw/pull/593) — 原子部署流水线 + 开发容器

---

## 4. 社区热点

**讨论活跃度较低** — 所有 Issues 均仅 1 条评论，无突出讨论热点。

**值得关注的新 PR：**
- [#605](https://github.com/qwibitai/nanoclaw/pull/605) — 同时修复命令注入（安全）和 OOM 根因（稳定性），预计将合并
- [#596](https://github.com/qwibitai/nanoclaw/pull/596) + [#605](https://github.com/qwibitai/nanoclaw/pull/605) — 双管齐下解决 40 小时 OOM 问题，社区关注度高

---

## 5. Bug 与稳定性

按严重程度排列：

| Issue | 严重性 | 状态 | 描述 | Fix PR |
|---|---|---|---|---|
| [#595](https://github.com/qwibitai/nanoclaw/issues/595) | **高** | OPEN | 40 小时后 OOM 崩溃，幽灵 socket 累积 | [#596](https://github.com/qwibitai/nanoclaw/pull/596), [#605](https://github.com/qwibitai/nanoclaw/pull/605) |
| [#585](https://github.com/qwibitai/nanoclaw/issues/585) | 中 | CLOSED | Test runner 因 rollup 依赖缺失损坏 | 已关闭 |
| [#584](https://github.com/qwibitai/nanoclaw/issues/584) | 中 | CLOSED | 挂载安全验证中的路径遍历边缘情况 | 已关闭 |
| [#583](https://github.com/qwibitai/nanoclaw/issues/583) | 中 | CLOSED | 重试逻辑不一致 | 已关闭 |
| [#582](https://github.com/qwibitai/nanoclaw/issues/582) | 中 | CLOSED | 容器输出缓冲区潜在内存保留 | 已关闭 |
| [#581](https://github.com/qwibitai/nanoclaw/issues/581) | 低 | CLOSED | MAX_CONCURRENT_CONTAINERS 缺少上限验证 | 已关闭 |
| [#580](https://github.com/qwibitai/nanoclaw/issues/580) | 中 | CLOSED | whatsapp-auth.ts 中静默吞掉错误 | 已关闭 |
| [#579](https://github.com/qwibitai/nanoclaw/issues/579) | 中 | CLOSED | JSON.parse 缺少错误处理 | 已关闭 |
| [#578](https://github.com/qwibitai/nanoclaw/issues/578) | 中 | CLOSED | GroupQueue 任务调度竞态条件 | 已关闭 |

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 描述 | 关联 PR |
|---|---|---|---|
| [#603](https://github.com/qwibitai/nanoclaw/issues/603) | Bug/Feat | 网站移动端布局修复 | — |
| [#574](https://github.com/qwibitai/nanoclaw/issues/574) | Feat | 容器内缺少 `jq` 工具 | — |
| [#571](https://github.com/qwibitai/nanoclaw/issues/571) | Feedback | 用户使用 Opencode（非 Windows）反馈 | — |

**路线图信号：**
- **多通道架构** (#500) 正在重构中，未来版本将支持更多消息通道
- **第三方模型支持** (#592) 已提出，支持自定义 API 端点
- **Google Workspace MCP** (#597) 整合中，扩展生产力工具集成

---

## 7. 用户反馈摘要

- **#595 (OOM)**：用户报告 40 小时后进程崩溃，`launchd` 静默重启，错误日志显示堆内存耗尽
- **#574 (jq)**：用户指出容器内缺少 `jq`，当前使用 `node -e` 解析存在安全风险（eval 攻击）
- **#571**：用户反馈在 Opencode 环境下（非 Windows）的使用情况

---

## 8. 待处理积压

| Issue/PR | 开启时间 | 状态 | 提醒 |
|---|---|---|---|
| [#595](https://github.com/qwibitai/nanoclaw/issues/595) OOM 崩溃 | 2026-02-28 | OPEN | 已有关联 Fix PR #596 #605，需优先合并 |
| [#574](https://github.com/qwibitai/nanoclaw/issues/574) 容器缺少 jq | 2026-02-28 | OPEN | 功能请求，安全相关，需评估 |
| [#500](https://github.com/qwibitai/nanoclaw/pull/500) 多通道架构重构 | 2026-02-25 | OPEN | 重大架构变更，长期进行中 |
| [#344](https://github.com/qwibitai/nanoclaw/pull/344) 代理团队仪表盘 | 2026-02-21 | OPEN | 长期未合并，需关注 |

---

*报告生成时间：2026-03-01 | 数据来源：GitHub NanoClaw (qwibitai/nanoclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-03-01)

## 1. 今日速览

过去 24 小时内，IronClaw 项目保持高度活跃：共处理 **9 条 Issues** 和 **26 条 PRs**，其中 24 个 PR 仍在待合并状态。项目当前聚焦于**基础设施稳定性**与**安全加固**两大主题——多个 PR 修复了 Setup Wizard 的前置检查缺失（如 PostgreSQL 版本验证、pgvector 可用性检测、cloudflared 二进制验证），同时新增了 TLS 支持、Secret 名称规范化等安全相关修复。值得注意的是，#408 (程序化工具调用) 和 #414 (Podman 支持) 两个大型功能 PR 正在积极推进中。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

| PR | 描述 | 状态 |
|---|---|---|
| [#425](https://github.com/nearai/ironclaw/pull/425) | feat: add CLI logs command with tail support | ✅ 已关闭 |
| [#427](https://github.com/nearai/ironclaw/pull/427) | fix: add TLS support for PostgreSQL connections | 🔄 进行中 (高风险) |
| [#426](https://github.com/nearai/ironclaw/pull/426) | fix(setup): persist model name to .env so dotted names survive restart | 🔄 进行中 (高风险) |
| [#423](https://github.com/nearai/ironclaw/pull/423) | fix(setup): validate PostgreSQL version and pgvector availability before migrations | 🔄 进行中 |
| [#422](https://github.com/nearai/ironclaw/pull/422) | fix: guard zsh compdef call to prevent error before compinit | 🔄 进行中 |
| [#421](https://github.com/nearai/ironclaw/pull/421) | fix(channels): add host-based credential injection to WASM channel wrapper | 🔄 进行中 |
| [#431](https://github.com/nearai/ironclaw/pull/431) | fix: normalize secret names for case-insensitive credential matching | 🔄 进行中 (高风险) |

**关键进展摘要：**
- **PostgreSQL TLS 支持** (#427): 修复了连接托管数据库 (AWS RDS, Neon, Supabase 等) 时硬编码 `NoTls` 的问题，引入 `tokio-postgres-rustls`
- **Secret 名称规范化** (#431): 修复 Slack 通道 "not_authed" 错误的根本原因——Secret 大小写不匹配
- **WASM 凭证注入** (#421): 为通道 WASM wrapper 添加主机端凭证注入，修复 Slack 通道 Authorization 头缺失问题

---

## 4. 社区热点

| 类型 | # | 标题 | 热度 |
|---|---|---|---|
| Issue | [#413](https://github.com/nearai/ironclaw/issues/413) | [Bug] Slack Channel fails with "not_authed" / Credential injection failure | 🔥 1 评论 |
| PR | [#408](https://github.com/nearai/ironclaw/pull/408) | feat(ptc): programmatic tool calling -- executor, SDK, and E2E tests | 关注 |
| PR | [#414](https://github.com/nearai/ironclaw/pull/414) | feat(sandbox): add Podman support alongside Docker | 关注 |
| PR | [#351](https://github.com/nearai/ironclaw/pull/351) | feat: multi-tenant auth with per-user workspace isolation | 关注 |

**分析：**
- **#413** 是唯一有评论的 Issue，用户报告 Slack 通道凭证注入失败，已在 #431 中修复
- **#408** (程序化工具调用) 是当前最大的 PR，引入 ToolExecutor、SDK 和 E2E 测试，代号 XL，涵盖 orchestrator、worker、sandbox 等多个模块
- **#414** 为 Docker 替代方案用户提供 Podman 支持，扩大了沙箱运行时兼容性

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 已有 Fix? |
|---|---|---|---|
| 🔴 高 | [#413](https://github.com/nearai/ironclaw/issues/413) | Slack 通道 "not_authed" 错误，凭证注入失败 | ✅ #431 |
| 🔴 高 | [#415](https://github.com/nearai/ironclaw/issues/415) | Setup Wizard 未验证 PostgreSQL 版本，允许 PG 14 而非所需 15+ | ✅ #423 |
| 🔴 高 | [#416](https://github.com/nearai/ironclaw/issues/416) | Setup Wizard 未检查 pgvector 即运行迁移 | ✅ #423 |
| 🟠 中 | [#418](https://github.com/nearai/ironclaw/issues/418) | Cloudflare 隧道设置未检查 cloudflared 二进制或验证 token | ✅ #424 |
| 🟠 中 | [#420](https://github.com/nearai/ironclaw/issues/420) | zsh 补全文件在 compinit 前调用 compdef 导致错误 | ✅ #422 |
| 🟠 中 | [#410](https://github.com/nearai/ironclaw/issues/410) | 平板 UI 被裁剪 | 待处理 |
| 🟢 低 | [#417](https://github.com/nearai/ironclaw/issues/417) | Setup Wizard 缺少 macOS Docker 自动启动指南 | ✅ #428 |

---

## 6. 功能请求与路线图信号

| Issue | 功能 | 分析 |
|---|---|---|
| [#412](https://github.com/nearai/ironclaw/issues/412) | WASM 扩展操作 Secret 的能力 | 用户希望扩展程序能获取并使用 Secret 签名消息，而不暴露给 Agent。当前 WASM 无法存储数据。该需求可能影响 SecretStore 设计。 |
| [#419](https://github.com/nearai/ironclaw/issues/419) | 检测冲突的 cloudflared 服务 (brew vs system) | Setup Wizard 缺乏对已安装 cloudflared 的感知，可能导致端口冲突。 |
| [#414](https://github.com/nearai/ironclaw/pull/414) | Podman 支持 | PR 正在进行中，完成后将扩大容器运行时兼容性。 |
| [#408](https://github.com/nearai/ironclaw/pull/408) | 程序化工具调用 (PTC) | 引入 ToolExecutor，允许工具调用工具，无需 LLM 往返。这是重大架构改进。 |

**路线图信号：** 项目正朝着 **安全性增强** (Secret 规范化、入站消息扫描) 和 **多运行时支持** (Podman、多租户) 方向发展。

---

## 7. 用户反馈摘要

从 Issue 评论和 PR 描述中提炼：

- **凭证管理痛点**：Slack 通道反复出现 "not_authed" 错误，用户发现 web UI 存储 `SLACK_BOT_TOKEN` 而 capabilities.json 期望 `slack_bot_token`（大小写不匹配）
- **Setup Wizard 体验**：用户在配置 PostgreSQL 时遇到 pgvector 缺失、版本过低等问题，错误信息不友好，缺乏前置检查
- **容器运行时**：Docker 用户在重启后发现 IronClaw 沙箱失效，因为 Docker 未配置自动启动；Podman 用户则直接报错 "Docker not installed"
- **模型配置**：用户配置 `llama3.2` 等带点号的模型名后重启丢失，被截断为 `llama3`

---

## 8. 待处理积压

| Issue | 等待时间 | 描述 | 优先级 |
|---|---|---|---|
| [#412](https://github.com/nearai/ironclaw/issues/412) | 1 天 | WASM 扩展操作 Secret 能力 | 中 |
| [#410](https://github.com/nearai/ironclaw/issues/410) | 1 天 | 平板 UI 被裁剪 | 低 |
| [#419](https://github.com/nearai/ironclaw/issues/419) | 1 天 | 检测冲突的 cloudflared 服务 | 低 |
| [#403](https://github.com/nearai/ironclaw/pull/403) | 2 天 | WhatsApp webhook 验证与可靠性 | 中 |

---

*报告生成时间：2026-03-01 | 数据来源：GitHub Issues & Pull Requests*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-01)

---

## 1. 今日速览

过去24小时内，TinyClaw 项目保持适度活跃。共处理 2 条 Issues（1 新开 + 1 已关闭），另有 1 个 PR 待合并，并发布了 v0.0.7 版本。项目整体呈现稳中有进的态势，功能迭代与社区反馈均在有序推进中。

---

## 2. 版本发布

### ✅ v0.0.7 发布

| 项目 | 内容 |
|------|------|
| **版本号** | v0.0.7 |
| **变更类型** | chore: bump version to 0.0.7 |
| **关联 PR** | [#148](https://github.com/TinyAGI/tinyclaw/pull/148) |
| **发布时间** | 2026-03-01 |

> **说明**：本次版本更新为版本号迭代，未包含功能变更或破坏性变更。

---

## 3. 项目进展

### PR 状态

| PR # | 标题 | 状态 | 作者 | 摘要 |
|------|------|------|------|------|
| #150 | feat(openviking): continuation after plugin hardening | **OPEN** (待合并) | @mczabca-boop | Follow-up to #149. 包含 OpenViking continuation stack rebased onto TinyAGI/main (without the PR1 hardening commit). |

> **评估**：PR #150 作为 #149 的后续工作，旨在推进 OpenViking 集成，表明项目在插件生态扩展方面持续发力。

---

## 4. 社区热点

### 🔥 Issue #151 — Windows 兼容性争议

| 项目 | 内容 |
|------|------|
| **标题** | this shit aint for Windows quit lying |
| **链接** | [#151](https://github.com/TinyAGI/tinyclaw/issues/151) |
| **状态** | CLOSED |
| **作者** | @SiN-Kiliko |
| **评论数** | 2 |
| **创建时间** | 2026-02-28 |
| **更新时间** | 2026-03-01 |

**摘要要点**：
- 用户强烈抱怨项目声称支持 Windows，但实际使用中困难重重
- 具体问题包括：package manager 问题、安装 jq、修复损坏的 settings.json、强制 PowerShell 执行 Linux 脚本等
- 用户指出脚本要求不存在的 "Linux windows manager"

**分析**：该 Issue 反映出项目在 Windows 平台兼容性方面存在较大改进空间，是跨平台体验的真实痛点反馈。

---

## 5. Bug 与稳定性

### 🐛 报告的 Bug / 问题

| Issue # | 标题 | 严重程度 | 状态 | 备注 |
|---------|------|----------|------|------|
| #151 | Windows 兼容性问题 | **高** | 已关闭 | 需长期关注跨平台支持 |

> **说明**：Issue #151 虽已关闭，但反映的 Windows 兼容性问题需要持续关注，建议建立跨平台 CI/CD 测试。

---

## 6. 功能请求与路线图信号

### ✨ 新功能请求

| Issue # | 标题 | 作者 | 状态 | 摘要 |
|---------|------|------|------|------|
| #144 | feat: per-thread session isolation via --session-id / --resume | @bchoor | **OPEN** | 希望实现 per-thread session isolation，解决不同 Telegram topic / Discord thread 共享同一 Claude session 导致的上下文泄露问题。 |

**评估**：该功能请求直击多平台协作场景的痛点，结合 PR #150（OpenViking 集成），推测下一版本可能重点关注会话管理与插件扩展能力。

---

## 7. 用户反馈摘要

### 核心痛点

1. **Windows 平台兼容性不足**（Issue #151）
   - 用户在 Windows 环境下遭遇多重障碍：环境配置复杂、跨平台脚本兼容性问题
   - 期望：开箱即用的 Windows 支持

2. **会话隔离需求**（Issue #144）
   - 多 channel/topic/thread 场景下上下文相互干扰
   - 期望：通过 --session-id / --resume 实现会话隔离

---

## 8. 待处理积压

### ⚠️ 需关注的重要 Issue / PR

| 类型 | # | 标题 | 状态 | 等待时间 | 建议 |
|------|---|------|------|----------|------|
| Issue | #144 | per-thread session isolation | OPEN | 2 天 | 优先评估，适时纳入路线图 |
| PR | #150 | OpenViking continuation | OPEN | 3 天 | 推进合并或给出审查反馈 |

---

**📅 日期**：2026-03-01  
**📊 数据来源**：GitHub TinyClaw Repository  
**🔗 链接**：https://github.com/TinyAGI/tinyclaw

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*