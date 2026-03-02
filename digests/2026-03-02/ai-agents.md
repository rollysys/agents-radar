# OpenClaw 生态日报 2026-03-02

> Issues: 500 | PRs: 500 | 覆盖项目: 10 个 | 生成时间: 2026-03-02 02:26 UTC

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

# OpenClaw 项目动态日报 - 2026-03-02

## 1. 今日速览

2026年3月2日，OpenClaw 项目保持高度活跃状态。过去24小时内共产生 **500条 Issues 更新**（新开/活跃357条，关闭143条）以及 **500条 PR 更新**（待合并329条，已合并/关闭171条）。项目整体向前推进明显，但未发布新版本。社区讨论热度较高，主要集中在 bug 修复（尤其是 Windows 平台和 Discord/Telegram 频道集成）以及功能增强请求（如国际化支持、Agent Teams 并行协调）。值得注意的是，部分长期积累的稳定性问题（如 CLI 性能、权限错误）仍是用户痛点。

---

## 2. 版本发布

**本期无新版本发布。**

---

## 3. 项目进展

过去24小时内，项目合并/关闭了多个重要 PR，推进了以下功能或修复：

| PR | 状态 | 描述 | 领域 |
|---|---|---|---|
| [#30661](https://github.com/openclaw/openclaw/pull/30661) | CLOSED | fix(feishu): 修复 cron announce 无法识别 oc_ 群聊 ID 的问题 | 飞书 |
| [#31147](https://github.com/openclaw/openclaw/pull/31147) | CLOSED | Fix/windows install plugin: 修复 Windows 下 `openclaw plugins install` 报 spawn EINVAL 错误 | Windows |
| [#30886](https://github.com/openclaw/openclaw/pull/30886) | CLOSED | fix(discord): 延长事件队列监听器超时，防止长耗时 handler 导致重复投递 | Discord |
| [#30684](https://github.com/openclaw/openclaw/pull/30684) | CLOSED | fix: 修复 Telegram 多账户场景下 channel-level groups 配置被错误继承的问题 | Telegram |
| [#30632](https://github.com/openclaw/openclaw/pull/30632) | CLOSED | fix: 修复 Telegram 群组策略中 chat allowlist 检查顺序错误导致的静默丢消息问题 | Telegram |
| [#30362](https://github.com/openclaw/openclaw/pull/30362) | CLOSED | fix(telegram): 保留代理调度器，避免网络 workaround 覆盖 HTTPS_PROXY 配置 | Telegram |
| [#30406](https://github.com/openclaw/openclaw/pull/30406) | CLOSED | fix(telegram): 避免在设置代理环境变量时覆盖 undici dispatcher | Telegram |
| [#31045](https://github.com/openclaw/openclaw/pull/31045) | CLOSED | fix: 处理 Telegram sendVoice  caption 超长问题，改为无 caption 发送并单独发送文本 | Telegram |
| [#31163](https://github.com/openclaw/openclaw/pull/31163) | CLOSED | fix: Telegram polling 会话停止后排空，防止 409 冲突导致消息路由错误 | Telegram |
| [#29823](https://github.com/openclaw/openclaw/pull/29823) | OPEN | Security: 停止在配置保存时写入明文 openclaw.json.bak | 安全 |

**进展解读**：项目在多渠道集成（Telegram/Discord/飞书）方面的 bug 修复最为密集，反映出用户对多平台稳定性的强烈需求。Windows 平台插件安装问题也得到了官方关注。此外，安全加固（配置备份明文化）正在推进中。

---

## 4. 社区热点

以下 Issues 和 PRs 引发了最激烈的社区讨论（按评论数排序）：

### Issues 热点

| Issue | 评论 | 状态 | 主题 |
|---|---|---|---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | 72 | OPEN | **国际化 (i18n) & 本地化支持** - 社区强烈呼吁多语言支持，但官方表示暂无带宽 |
| [#16862](https://github.com/openclaw/openclaw/issues/16862) | 29 | CLOSED | Web UI 报错 `missing scope: operator.read` |
| [#1749](https://github.com/openclaw/openclaw/issues/1749) | 21 | OPEN | Web UI Nodes/Accounts 页面报错 "Unsupported schema node" |
| [#7631](https://github.com/openclaw/openclaw/issues/7631) | 19 | OPEN | Windows 平台 `openclaw plugins install` 报 spawn EINVAL 错误 |
| [#5434](https://github.com/openclaw/openclaw/issues/5434) | 17 | CLOSED | 权限错误：Docker 运行时未创建目录即访问 |
| [#5871](https://github.com/openclaw/openclaw/issues/5871) | 16 | OPEN | **CLI 在树莓派 4B 上极慢** - 执行简单命令需 17+ 秒 |
| [#14215](https://github.com/openclaw/openclaw/issues/14215) | 15 | OPEN | 浏览器控制连接不稳定 |
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | 14 | OPEN | macOS v2026.2.26 仅支持 arm64，导致 Intel Mac 无法使用 |

### PRs 热点

| PR | 状态 | 主题 |
|---|---|---|
| [#31083](https://github.com/openclaw/openclaw/pull/31083) | OPEN | fix(agents): 解除 gpt-5.3-codex API-key 路由阻塞并强化 replay |
| [#31180](https://github.com/openclaw/openclaw/pull/31180) | OPEN | Docs(Docker): 澄清官方 GHCR 镜像使用和设置流程 |
| [#31181](https://github.com/openclaw/openclaw/pull/31181) | OPEN | fix(voice-call): 接受外部发起的 Twilio outbound-api 调用 |
| [#31178](https://github.com/openclaw/openclaw/pull/31178) | OPEN | fix(config): 验证配置写入并自动回滚无效启动 |
| [#28691](https://github.com/openclaw/openclaw/pull/28691) | OPEN | Add Terminal and FileExplore to gateway dashboard |
| [#27275](https://github.com/openclaw/openclaw/pull/27275) | OPEN | feat: agent-blind TOTP 门控 secrets 和权限提升管理 |

**热点分析**：国际化（#3460，72评论）是社区最迫切的需求，尽管官方尚未支持。Windows/Telegram/Discord 集成问题持续热门。macOS arm64 回归问题（#28877）引发Intel用户强烈不满。此外，CLI 性能问题（#5871）在树莓派等低功耗设备上尤为突出。

---

## 5. Bug 与稳定性

以下 Bug 按严重程度排列，部分已有 fix PR：

### 严重（高优先级）

| Issue | 状态 | 描述 | 已有 Fix? |
|---|---|---|---|
| [#16862](https://github.com/openclaw/openclaw/issues/16862) | CLOSED | Web UI 报错 `missing scope: operator.read` | ✅ 已关闭 |
| [#14215](https://github.com/openclaw/openclaw/issues/14215) | OPEN | 浏览器控制连接不稳定，Chrome extension relay 和 profile 均失效 | ❌ |
| [#20714](https://github.com/openclaw/openclaw/issues/20714) | CLOSED | Discord close code 4014（缺少特权 Gateway Intents）导致整个 gateway 进程崩溃 | ❌ |
| [#30723](https://github.com/openclaw/openclaw/issues/30723) | CLOSED | Telegram DM 中会话 I/O 工具丢失，提示 "Tool not found" | ❌ |
| [#26207](https://github.com/openclaw/openclaw/issues/26207) | CLOSED | v2026.2.24 回归：setGlobalDispatcher 破坏 HTTP 代理，导致所有出站请求失败 | ❌ |

### 中等

| Issue | 状态 | 描述 | 已有 Fix? |
|---|---|---|---|
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | OPEN | macOS v2026.2.26 仅 arm64，Intel Mac 崩溃 | ❌ |
| [#5871](https://github.com/openclaw/openclaw/issues/5871) | OPEN | CLI 在树莓派 4B 上极慢（>17秒） | ❌ |
| [#7631](https://github.com/openclaw/openclaw/issues/7631) | OPEN | Windows 插件安装失败 spawn EINVAL | ✅ #31147 |
| [#22562](https://github.com/openclaw/openclaw/issues/22562) | OPEN | Docker build 失败：zod-schema.session.ts 缺少 ownerDisplay 属性 | ❌ |
| [#29420](https://github.com/openclaw/openclaw/issues/29420) | CLOSED | Discord WebSocket 重连丢失事件 seq gap，@mention 丢失 | ❌ |

### 较低

| Issue | 状态 | 描述 |
|---|---|---|
| [#4947](https://github.com/openclaw/openclaw/issues/4947) | OPEN | macOS 上 gateway.bind "lan"/"auto" 仍只绑定 localhost |
| [#27921](https://github.com/openclaw/openclaw/issues/27921) | OPEN | Cron jobs mode:announce 发送重复消息 |
| [#29525](https://github.com/openclaw/openclaw/issues/29525) | OPEN | Dashboard UI 在 v2026.2.26 访问显示 404 |

---

## 6. 功能请求与路线图信号

以下功能请求获得较多关注，可能被纳入下一版本：

| Issue/PR | 状态 | 功能描述 | 纳入可能性 |
|---|---|---|---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | OPEN | **国际化 (i18n) & 本地化支持** - 社区高度关注（72评论），但官方暂无带宽 | 中期 |
| [#10010](https://github.com/openclaw/openclaw/issues/10010) | OPEN | **Agent Teams - 并行 Agent 协调** - 受 Claude Code 启发，支持多 Agent 通信 | 较高 |
| [#17700](https://github.com/openclaw/openclaw/issues/17700) | OPEN | **原子化配置管理** - 带验证和崩溃回滚 | 中期 |
| [#29544](https://github.com/openclaw/openclaw/pull/29544) | OPEN | **Session reset mode "off"** - 仅手动 /new 触发重置，无自动轮换 | 较高（已有 PR） |
| [#27275](https://github.com/openclaw/openclaw/pull/27275) | OPEN | **agent-blind TOTP 门控 secrets** - 敏感凭据管理和审批流程 | 较高（已有 PR） |
| [#29985](https://github.com/openclaw/openclaw/pull/29985) | OPEN | **api.resetSession()** - 插件可编程重置会话 | 较高（已有 PR） |
| [#31174](https://github.com/openclaw/openclaw/pull/31174) | OPEN | **OpenClaw App 支持 HarmonyOS 平台** | 长期 |
| [#31172](https://github.com/openclaw/openclaw/pull/31172) | OPEN | **飞书 streamingThrottleMs 配置参数** | 较高（已有 PR） |

**路线图信号**：国际化是长期需求但暂无官方支持。Agent Teams 并行协调是热门方向。配置安全和插件能力增强正在积极开发中。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点和场景：

### 痛点

1. **权限与目录问题** - Docker 运行时未预先创建 `/home/node/.openclaw/` 目录即尝试访问，导致 EACCES 权限错误（#5434, #21571, #21489）
2. **Windows 平台兼容性差** - 插件安装失败（spawn EINVAL）、gateway.bind "lan" 不生效
3. **macOS 版本回归** - v2026.2.26 仅支持 arm64，Intel Mac 用户无法使用
4. **CLI 性能问题** - 树莓派 4B 上执行任何命令需 17+ 秒，几乎不可用
5. **配置安全风险** - 配置保存时写入明文 backup 文件（#29823 已修复中）

### 满意之处

1. **多渠道集成稳定** - Telegram/Discord/飞书 整体可用，社区活跃
2. **Web UI 功能增强** - Terminal 和 FileExplore 即将加入 dashboard（#28691）
3. **配置验证增强** - 配置写入验证和自动回滚即将上线（#31178）

### 典型场景

- 用户在 Docker 环境中部署 OpenClaw，期望开箱即用，但频繁遇到目录权限问题
- macOS Intel 用户升级后应用崩溃
- 开发者需要在低功耗硬件（如树莓派）上运行 CLI，但性能瓶颈明显

---

## 8. 待处理积压

以下 Issue 长期未响应或重要 PR 等待合并，提醒维护者关注：

### 长期未解决 Issue

| Issue | 状态 | 持续时间 | 描述 |
|---|---|---|---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | OPEN | ~1个月 | 国际化支持 - 72评论，社区高度关注 |
| [#5871](https://github.com/openclaw/openclaw/issues/5871) | OPEN | ~1个月 | CLI 树莓派性能极差 - 16评论 |
| [#1749](https://github.com/openclaw/openclaw/issues/1749) | OPEN | ~1个月 | Web UI "Unsupported schema node" 错误 |
| [#4947](https://github.com/openclaw/openclaw/issues/4947) | OPEN | ~1个月 | macOS gateway.bind lan/auto 绑定失败 |
| [#10010](https://github.com/openclaw/openclaw/issues/10010) | OPEN | ~3周 | Agent Teams 功能请求 |

### 等待合并的重要 PR

| PR | 状态 | 描述 |
|---|---|---|
| [#31178](https://github.com/openclaw/openclaw/pull/31178) | OPEN | fix(config): 验证配置写入并自动回滚无效启动 |
| [#28691](https://github.com/openclaw/openclaw/pull/28691) | OPEN | Add Terminal and FileExplore to gateway dashboard |
| [#27275](https://github.com/openclaw/openclaw/pull/27275) | OPEN | feat: agent-blind TOTP gated secrets and elevation management |
| [#29985](https://github.com/openclaw/openclaw/pull/29985) | OPEN | feat(plugin-sdk): add api.resetSession() |
| [#31174](https://github.com/openclaw/openclaw/pull/31174) | OPEN | support openclaw app on HarmonyOS platform |
| [#29544](https://github.com/openclaw/openclaw/pull/29544) | OPEN | Session: add reset mode "off" |

---

**报告生成时间**：2026-03-02  
**数据来源**：GitHub OpenClaw/OpenClaw 项目动态

---

## 横向生态对比

# 2026-03-02 AI 智能体开源生态横向对比分析报告

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现**多极分化、垂直深耕**的格局。头部项目（OpenClaw、IronClaw、Zeroclaw）保持高强度迭代，社区规模显著领先；细分项目（EasyClaw、TinyClaw）聚焦单点功能，活跃度较低。**跨平台多渠道集成**（WhatsApp/Telegram/飞书/Discord）与**多 Provider 支持**成为通用需求，企业级特性（多租户、配额管理、安全加固）开始在头部项目落地。值得关注的是，同质化竞争中已出现差异化定位：部分项目专注低功耗硬件（NanoBot、PicoClaw），部分面向企业部署（ZeptoClaw、IronClaw），整体生态正从“可用性验证”向“生产就绪”阶段过渡。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新增/活跃 → 关闭） | PRs（待合并 → 已合闭） | Releases | 核心领域 | 整体健康度 |
|------|---------------------------|----------------------|----------|---------|-----------|
| **OpenClaw** | 500 (357 → 143) | 500 (329 → 171) | 无 | 多平台集成、安全加固 | 🟢 高度活跃 |
| **Zeroclaw** | 50 (22 → 28) | 50 (24 → 26) | 无 | MCP 扩展、Agent 编排 | 🟢 活跃 |
| **EasyClaw** | 3 (3 → 0) | 0 | **v1.5.13** | 飞书集成、对话模型 | 🔴 低活跃 |
| **LobsterAI** | 11 | 8 | **v0.1.23** | Windows 兼容、多模型 | 🟡 中等活跃 |
| **ZeptoClaw** | 9 (9 → 0) | 9 | 无 | 企业 Provider、IoT、工具链 | 🔥 极高活跃 |
| **NanoBot** | 19 | 44 (34 待) | 无 | 多平台集成、Agent 能力 | 🟢 高度活跃 |
| **PicoClaw** | 23 | 71 | 无 | Channel 重构、沙箱安全 | 🟢 高活跃 |
| **NanoClaw** | 13 (7 → 6) | 43 (21 待) | 无 | 多渠道、调度、API 端点 | 🟢 活跃 |
| **IronClaw** | 24 (6 → 18) | 50 (33 待) | **v0.13.0** | 多租户、Bedrock、PTC | 🟢 高度活跃 |
| **TinyClaw** | 0 | 1 | 无 | 会话隔离 | 🔴 低活跃 |

**活跃度分级标准**：🟢高（Issues+PRs≥50 或持续增长）、🟡中（20-50）、🔴低（<20）。ZeptoClaw 以9个 PR 合并量入选“极高活跃”，因全部为关键功能（Azure/Bedrock、MQTT、Vision）。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 典型竞品（Zeroclaw/NanoBot） |
|------|----------|------------------------------|
| **社区规模** | 🔴 **500 Issues/PRs** 日活，远超其他项目 | Zeroclaw 50、NanoBot 63 |
| **技术路线** | CLI 优先 + 多平台集成（Windows/Telegram/Discord/飞书） | Zeroclaw 偏 MCP 扩展，NanoBot 偏渠道 |
| **迭代节奏** | Bug 修复驱动（本期 10+ 个 Fix PR） | Zeroclaw 功能驱动，NanoBot 稳定驱动 |
| **功能重心** | 多渠道集成稳定性、配置安全（明文备份修复） | Zeroclaw Agent 编排，MCP 生态 |
| **成熟度** | 成熟期（大量长期积压 Issue） | 快速迭代期 |

**结论**：OpenClaw 是生态中**社区规模最大、迭代最密集**的项目，但面临大量长期积压问题（国际化、CLI 性能、macOS 兼容），处于“功能丰富但质量打磨期”。 Zeroclaw 和 NanoBot 在特定垂直方向（Agent 编排、多平台）更具聚焦优势。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---------|---------|---------|
| **多 Provider 支持** | ZeptoClaw、OpenClaw、IronClaw、LobsterAI | Azure OpenAI、Amazon Bedrock、DeepSeek、Kimi、Claude/OpenAI 兼容（ZeptoClaw #211/#208、IronClaw #345、LobsterAI #194） |
| **多渠道集成** | OpenClaw、NanoBot、NanoClaw、PicoClaw | WhatsApp、Telegram、飞书、Discord、Matrix（OpenClaw #30661/#30886、NanoBot #1263、NanoClaw #614/#590） |
| **安全与权限加固** | OpenClaw、Zeroclaw、NanoClaw、PicoClaw | 明文配置泄露（OpenClaw #29823）、RFC 1918 地址识别（Zeroclaw #2475）、凭证文件权限（NanoClaw #635）、沙箱限制（PicoClaw #967） |
| **配置管理与回滚** | OpenClaw、Zeroclaw、IronClaw | 配置写入验证 + 自动回滚（OpenClaw #31178、Zeroclaw #2475）、原子化配置（OpenClaw #17700） |
| **多租户/会话隔离** | IronClaw、NanoClaw、TinyClaw | per-user 工作区隔离（IronClaw #351）、per-thread 会话（TinyClaw #152）、多会话安全（NanoBot #1362） |
| **国际化 (i18n)** | OpenClaw | 72 评论最高热度，但官方暂无带宽（#3460） |
| **企业级特性** | ZeptoClaw、IronClaw | 配额管理（ZeptoClaw #210）、多租户认证（IronClaw #351）、Structured Collections（IronClaw #449） |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 架构特点 |
|------|---------|---------|---------|
| **OpenClaw** | 通用 CLI 智能体，多平台集成 | 开发者、自托管用户 | Node.js，CLI 优先，插件化 |
| **Zeroclaw** | MCP 生态扩展 + Agent 编排 | 高级开发者、集成商 | MCP Server 外部化、Provider 无关 |
| **ZeptoClaw** | 企业级部署 + IoT | 企业用户、硬件开发者 | Rust，MQTT 通道、配额管理、多模态 |
| **NanoBot** | 多平台消息机器人 | 社交平台运营者 | 轻量，多渠道（WhatsApp/Telegram/QQ/飞书） |
| **PicoClaw** | 低功耗硬件 + 安全沙箱 | 树莓派、嵌入式开发者 | 沙箱安全、Channel 重构、launcher UI |
| **IronClaw** | 企业级多租户安全 | 大型企业、团队协作 | Rust + Wasm，多租户、PTC、Structured Collections |
| **EasyClaw** | 基础对话助手 | 小白用户 | 轻量，聚焦飞书集成 |
| **TinyClaw** | 极简会话管理 | 极客、实验用户 | 极简架构，per-thread 隔离 |

**关键差异**：OpenClaw 追求“大而全”，ZeptoClaw/IronClaw 追求“企业级”，NanoBot/PicoClaw 追求“垂直场景”，EasyClaw/TinyClaw 追求“小而美”。

---

## 6. 社区热度与成熟度分层

| 分层 | 项目 | 特征 |
|------|------|------|
| **🚀 快速迭代期** | ZeptoClaw、PicoClaw | PR 产出密集（9+ 合并），功能快速叠加，企业特性涌现（ZeptoClaw 9 PRs 全部功能型） |
| **⚙️ 质量巩固期** | OpenClaw、IronClaw、Zeroclaw | Issue/PR 量大但聚焦 Bug 修复与稳定性（OpenClaw 500 条），部分长期积压（国际化、性能） |
| **📦 功能完善期** | NanoBot、NanoClaw、LobsterAI | 多渠道/多模型支持基本具备，重点优化用户体验与稳定性 |
| **🌱 早期探索期** | EasyClaw、TinyClaw | Issue/PR 量极低，功能单一，依赖创始人维护 |

**成熟度信号**：OpenClaw/IronClaw 高 Issue 量伴随高合并量，属于“成长中的成熟项目”；EasyClaw/TinyClaw 需警惕维护者倦怠风险。

---

## 7. 值得关注的趋势信号

### 趋势 1：多 Provider 从“可选”转向“必备”

- **信号**：ZeptoClaw 快速集成 Azure/Bedrock/DeepSeek/Kimi，IronClaw 推进 Bedrock，OpenClaw 修复多 Provider 路由（#31083）
- **影响**：单一 OpenAI 兼容层已不足，用户需要统一入口管理多个 LLM 提供商

### 趋势 2：企业级特性从“概念”走向“代码”

- **信号**：IronClaw 多租户认证（#351）、ZeptoClaw 配额管理（#210）、安全响应头（#2476）
- **影响**：AI 智能体正从“个人工具”向“团队/企业协作平台”演进

### 趋势 3：安全从“事后修补”转向“默认加固”

- **信号**：OpenClaw 明文配置泄露修复（#29823）、NanoClaw 凭证文件权限（#635）、PicoClaw 沙箱重定向修复（#967）
- **影响**：随着生产部署增加，安全将成为采购决策的关键因素

### 趋势 4：硬件/边缘部署成为差异化赛道

- **信号**：PicoClaw 专注低功耗硬件 + 沙箱，ZeptoClaw 集成 MQTT（IoT 场景）
- **影响**：云端大模型 + 边缘小终端的混合架构正在形成

### 趋势 5：渠道集成标准化但同质化严重

- **信号**：OpenClaw/NanoBot/NanoClaw 全部在修 Telegram/Discord/飞书，修复逻辑高度重叠
- **影响**：渠道层正趋于 commoditized，核心竞争力将转向 Agent 能力（如规划、记忆、多代理协作）

---

**报告生成时间**：2026-03-02  
**分析对象**：OpenClaw, Zeroclaw, EasyClaw, LobsterAI, ZeptoClaw, NanoBot, PicoClaw, NanoClaw, IronClaw, TinyClaw

---

## 同赛道项目详细报告

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 | 2026-03-02

## 1. 今日速览

过去 24 小时内，Zeroclaw 项目保持高度活跃：共处理 **50 条 Issues**（新开/活跃 22 个，已关闭 28 个）和 **50 条 PRs**（待合并 24 个，已合并/关闭 26 个）。未发布新版本。社区对 **External MCP Server 支持**（#1380）和 **Agent-team 编排**（#2388）表现出浓厚兴趣，多项功能增强和 Bug 修复并行推进，项目整体处于稳健迭代状态。

---

## 2. 版本发布

**本期无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR | 标题 | 贡献者 | 状态 |
|---|------|--------|------|
| [#2427](https://github.com/zeroclaw-labs/zeroclaw/pull/2427) | fix(service): escape systemd env values in generated unit | @dongowu | ✅ Closed |
| [#2468](https://github.com/zeroclaw-labs/zeroclaw/pull/2468) | refactor(plugins): add validation profiles with strict runtime defaults | @gh-xj | ✅ Closed |
| [#2469](https://github.com/zeroclaw-labs/zeroclaw/pull/2469) | fix(plugins): harden approval provenance and dedupe crash path | @gh-xj | ✅ Closed |
| [#2464](https://github.com/zeroclaw-labs/zeroclaw/pull/2464) | fix(web-fetch): wire html2md feature dependency | @gh-xj | ✅ Closed |

### 待合并的重点 PRs

| PR | 标题 | 风险等级 | 说明 |
|---|------|----------|------|
| [#2479](https://github.com/zeroclaw-labs/zeroclaw/pull/2479) | ci(runners): unblock main and add runner incident diagnostics | High | 修复 CI 阻塞问题，切换至 ubuntu-22.04 |
| [#2373](https://github.com/zeroclaw-labs/zeroclaw/pull/2373) | feat(agent): add provider-agnostic max-token continuation policy | High | 实现 provider 无关的 max-token 续接策略 |
| [#2477](https://github.com/zeroclaw-labs/zeroclaw/pull/2477) | ci: add CodeQL/repro latency telemetry | High | 添加 CodeQL 延迟遥测 |
| [#2476](https://github.com/zeroclaw-labs/zeroclaw/pull/2476) | feat(gateway): add security response headers | High | 为 Gateway 添加安全响应头 |
| [#2475](https://github.com/zeroclaw-labs/zeroclaw/pull/2475) | fix(security): treat RFC 1918 addresses as non-public | High | 修复 RFC 1918 私有地址识别问题 |
| [#1987](https://github.com/zeroclaw-labs/zeroclaw/pull/1987) | feat(tools): add SearXNG web search provider | Medium | 新增 SearXNG 搜索 provider |
| [#2473](https://github.com/zeroclaw-labs/zeroclaw/pull/2473) | feat(memory): add multi-query keyword expansion | Medium | 内存检索多查询关键词扩展 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 标题 | 评论数 | 👍 | 状态 |
|-------|------|--------|-----|------|
| [#1380](https://github.com/zeroclaw-labs/zeroclaw/issues/1380) | [Feature] External MCP Server Support | **11** | **8** | Closed |
| [#2388](https://github.com/zeroclaw-labs/zeroclaw/issues/2388) | Feature: Agent-team orchestration deep implementation | 6 | 0 | Closed |
| [#1865](https://github.com/zeroclaw-labs/zeroclaw/issues/1865) | [Feature] Extend HITL interactive approval to Telegram via Inline Buttons | 5 | 0 | Closed |
| [#2325](https://github.com/zeroclaw-labs/zeroclaw/issues/2325) | [Bug] Feishu channel still not work | 5 | 0 | Closed |

**分析**：**External MCP Server 支持**（#1380）是社区呼声最高的功能，11 条评论和 8 个赞表明用户对扩展 MCP 生态的强烈需求。该功能将支持通过 npm 或远程 MCP 服务器配置外部工具，显著提升 ZeroClaw 的工具生态兼容性。

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

| Issue | 标题 | 严重程度 | 状态 | 关联 PR |
|-------|------|----------|------|---------|
| [#2474](https://github.com/zeroclaw-labs/zeroclaw/issues/2474) | [Bug] it fails to use OpenAI Codex OAuth | **S1 - workflow blocked** | Open | - |
| [#2405](https://github.com/zeroclaw-labs/zeroclaw/issues/2405) | [Bug] 400 Bad Request on NVIDIA NIM (minimax-m2.5) | **S1 - workflow blocked** | Closed | - |
| [#2325](https://github.com/zeroclaw-labs/zeroclaw/issues/2325) | [Bug] Feishu channel still not work | **S1 - workflow blocked** | Closed | - |
| [#2411](https://github.com/zeroclaw-labs/zeroclaw/issues/2411) | [Bug] Anthropic provider returns empty string for whitespace text | S2 - degraded | Closed | - |
| [#2168](https://github.com/zeroclaw-labs/zeroclaw/issues/2168) | bug: web dashboard Agent tab broken (stale assets) | S2 - degraded | Closed | - |
| [#2465](https://github.com/zeroclaw-labs/zeroclaw/issues/2465) | [Bug] Change wording when exposing on local network | S3 - minor | Open | [#2475](https://github.com/zeroclaw-labs/zeroclaw/pull/2475) 已修复 |

**关键问题**：
- **OpenAI Codex OAuth 问题**（#2474）为最新 S1 级阻塞问题，用户无法按文档完成 OAuth 配置
- **NVIDIA NIM 400 错误**（#2405）和 **Feishu 通道问题**（#2325）已关闭，需验证修复是否有效

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue | 标题 | 状态 | 预估纳入版本 |
|-------|------|------|--------------|
| [#1380](https://github.com/zeroclaw-labs/zeroclaw/issues/1380) | External MCP Server Support | Closed | 可能在下一 minor 版本 |
| [#2388](https://github.com/zeroclaw-labs/zeroclaw/issues/2388) | Agent-team orchestration deep implementation | Closed | 需跟踪相关 PR |
| [#2472](https://github.com/zerocclaw-labs/zeroclaw/issues/2472) | Multi-query keyword expansion for memory retrieval | Open | [#2473](https://github.com/zeroclaw-labs/zeroclaw/pull/2473) 已实现 |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | Webhook transforms | Open | 长期特性 |
| [#2355](https://github.com/zeroclaw-labs/zeroclaw/issues/2355) | Granular tool control context-aware allow list | Closed | 可能在下一版本 |
| [#2376](https://github.com/zeroclaw-labs/zeroclaw/issues/2376) | Gemini provider missing image/multimodal input support | Closed | 需关注 |

### 内存管理增强（Core Memory 优化系列）

| Issue | 标题 | 状态 |
|-------|------|------|
| [#2381](https://github.com/zeroclaw-labs/zeroclaw/issues/2381) | Pre-compaction memory flush to preserve durable facts | Closed |
| [#2378](https://github.com/zeroclaw-labs/zeroclaw/issues/2378) | Core memory category boost in context retrieval | Closed |
| [#2386](https://github.com/zeroclaw-labs/zeroclaw/issues/2386) | Time-decay scoring with evergreen exemption | Closed |

**路线图信号**：内存管理优化和 MCP 生态扩展是近期重点方向。

---

## 7. 用户反馈摘要

### 真实痛点与使用场景

| Issue | 用户反馈 | 痛点类型 |
|-------|----------|----------|
| [#2474](https://github.com/zeroclaw-labs/zeroclaw/issues/2474) | 文档缺少 OpenAI Codex OAuth 详细配置步骤，无法完成集成 | 文档/集成困难 |
| [#2325](https://github.com/zeroclaw-labs/zeroclaw/issues/2325) | 飞书通道配置后编译未包含 `channel-lark`，健康检查被跳过 | 功能不可用 |
| [#2168](https://github.com/zeroclaw-labs/zeroclaw/issues/2168) | Web Dashboard Agent Tab 显示连接错误，WebSocket 认证失败 | UI 故障 |
| [#2360](https://github.com/zeroclaw-labs/zeroclaw/issues/2360) | ZeroClaw 在 Docker 容器内限制过严，模型无法正常使用自然语言 | 过于严格/可用性 |
| [#2465](https://github.com/zeroclaw-labs/zeroclaw/issues/2465) | 本地网络暴露时的提示文案存在误导性（纯 cosmetic） | UI 体验 |

**满意度方面**：社区对 **Human-in-the-Loop (HITL) 交互式审批**（#1865）、**Telegram Inline Buttons**（#1865）、**Discord 审批按钮**（#2365）等用户体验优化反馈积极。

---

## 8. 待处理积压

### 需关注的重要 Open Issues

| Issue | 标题 | 创建时间 | 评论数 | 状态 |
|-------|------|----------|--------|------|
| [#2474](https://github.com/zeroclaw-labs/zeroclaw/issues/2474) | [Bug] it fails to use OpenAI Codex OAuth | 2026-03-02 | 1 | Open |
| [#2472](https://github.com/zeroclaw-labs/zeroclaw/issues/2472) | [Feature] Multi-query keyword expansion for memory retrieval | 2026-03-02 | 1 | Open |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | [Feature] Webhook transforms | 2026-03-02 | 1 | Open |
| [#2465](https://github.com/zeroclaw-labs/zeroclaw/issues/2465) | [Bug] Change wording when exposing on local network | 2026-03-02 | 1 | Open |
| [#2460](https://github.com/zeroclaw-labs/zeroclaw/issues/2460) | Group chat messages missing sender identity in LLM request | 2026-03-01 | 2 | Open |
| [#2309](https://github.com/zeroclaw-labs/zeroclaw/issues/2309) | RFI: Q0-3 Stop-reason state machine + max-tokens continuation | 2026-03-01 | 3 | Open |

### 建议优先级

1. **高优先级**：修复 #2474（OpenAI Codex OAuth S1 阻塞）
2. **中优先级**：推进 #2373（max-token continuation）合并，解决 #2460（群聊 sender 缺失）
3. **长期关注**：#2467（Webhook transforms）需设计评审

---

*报告生成时间：2026-03-02 | 数据来源：GitHub zeroclaw-labs/zeroclaw*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-02)

## 1. 今日速览

2026年3月2日，EasyClaw 项目整体保持活跃更新态势。过去24小时内共产生 3 条 Issue 讨论，均为用户新提交的功能需求与问题反馈；PR 层面无合并活动。社区关注度集中在新版本 v1.5.13 的发布说明（主要涉及 macOS 签名问题的用户指引）以及飞书集成、对话模型切换等核心功能体验问题上。当前项目处于功能完善期，用户积极反馈使用痛点，但 Issue 解决进度有待加速。

---

## 2. 版本发布

### v1.5.13 发布说明

**发布概述**：本次版本为问题修复与用户指引类更新，未包含功能性变更。

**主要更新内容**：

- **macOS Gatekeeper 问题说明**：针对用户反馈的 `"EasyClaw" 已损坏，无法打开` 提示，官方提供了详细的技术说明与解决步骤
- 该问题系 macOS 安全机制拦截未签名应用所致，非文件实际损坏
- 提供 Terminal 命令行修复方案：`xattr -cr /path/to/EasyClaw.app`

**破坏性变更**：无

**迁移注意事项**：无

**相关链接**：[Release v1.5.13](https://github.com/gaoyangz77/easyclaw/releases)

---

## 3. 项目进展

过去24小时内，项目未产生任何 Pull Request 合并或关闭动作。

- **待合并 PR**：0
- **已合并/关闭 PR**：0

**评估**：项目当前处于功能迭代的社区反馈收集阶段，代码交付节奏暂缓。建议维护者关注积压的 Issue 列表，及时通过 PR 回应用户需求。

---

## 4. 社区热点

以下 Issue 在过去24小时内获得最多关注（按评论数排序）：

| 排名 | Issue | 评论数 | 链接 |
|:---:|-------|:---:|------|
| 1 | [#5 连接飞书不成功](https://github.com/gaoyangz77/easyclaw/issues/5) | 2 | [查看](https://github.com/gaoyangz77/easyclaw/issues/5) |
| 2 | [#3 对话不能切换模型,而且不支持多对话同时进行](https://github.com/gaoyangz77/easyclaw/issues/3) | 2 | [查看](https://github.com/gaoyangz77/easyclaw/issues/3) |
| 3 | [#4 缺任务计划和对话记录](https://github.com/gaoyangz77/easyclaw/issues/4) | 0 | [查看](https://github.com/gaoyangz77/easyclaw/issues/4) |

**热点分析**：

- **飞书集成问题**（#5）讨论热度最高，涉及第三方平台连接失败，社区期待快速修复
- **多对话/模型切换**（#3）反映用户对高级对话功能的强烈需求，属于核心体验优化
- **任务计划与对话记录**（#4）虽评论为0，但获得1个点赞，表明该需求具有一定普适性

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 链接 |
|:---:|-------|:---:|------|
| **高** | #5 连接飞书不成功 | OPEN | [查看](https://github.com/gaoyangz77/easyclaw/issues/5) |
| **中** | #3 对话不能切换模型,且不支持多对话同时进行 | OPEN | [查看](https://github.com/gaoyangz77/easyclaw/issues/3) |

**说明**：

- 当前无 Fix PR 关联上述 Bug
- 飞书集成问题可能导致用户无法正常使用核心功能，需优先处理
- 模型切换与多对话问题影响用户交互体验，属于中等优先级

---

## 6. 功能请求与路线图信号

基于今日社区反馈，以下功能需求值得关注：

| 功能点 | 相关 Issue | 优先级信号 | 链接 |
|-------|-----------|-----------|------|
| **飞书连接支持** | #5 | 高（用户明确反馈连接失败） | [查看](https://github.com/gaoyangz77/easyclaw/issues/5) |
| **多模型切换** | #3 | 高（明确的功能体验需求） | [查看](https://github.com/gaoyangz77/easyclaw/issues/3) |
| **多对话并行** | #3 | 中 | [查看](https://github.com/gaoyangz77/easyclaw/issues/3) |
| **任务计划功能** | #4 | 中（用户 Tomorrow 要给同事推荐，需尽快支持） | [查看](https://github.com/gaoyangz77/easyclaw/issues/4) |
| **对话历史记录** | #4 | 中 | [查看](https://github.com/gaoyangz77/easyclaw/issues/4) |

**路线图建议**：建议下版本重点关注飞书集成稳定性修复（#5）与多对话能力（#3），同时将任务计划与对话记录（#4）纳入中短期规划。

---

## 7. 用户反馈摘要

从 Issue 评论与内容中提炼的核心用户痛点：

1. **飞书集成不畅**：用户反馈在飞书发送消息时反复提示需添加白名单，即使添加后仍无法正常使用。这表明飞书 Webhook 或 API 集成存在配置兼容性问题或白名单机制理解偏差。
2. **对话功能局限**：
   - 无法切换 AI 模型（限制用户体验灵活性）
   - 不支持多对话并行（影响工作效率）
   - 回复内容带有结构化包装，非直接内容输出
3. **功能缺失**：
   - 缺少任务计划功能（用户提到"给同事推荐"场景，说明有协作分享需求）
   - 缺少对话历史记录（影响上下文连贯性与使用便捷性）

**用户画像洞察**：现有用户对 EasyClaw 基础能力较为认可（Issue #4 中用户表示"这个是最和我心意的"），但对高级功能（多对话、任务计划）有明确诉求，期待项目持续迭代。

---

## 8. 待处理积压

以下 Issue 需维护者重点关注：

| Issue | 创建时间 | 状态 | 积压天数 | 链接 |
|-------|---------|:---:|:---:|------|
| #4 缺任务计划和对话记录 | 2026-03-01 | OPEN | 1 | [查看](https://github.com/gaoyangz77/easyclaw/issues/4) |
| #3 对话不能切换模型... | 2026-03-01 | OPEN | 1 | [查看](https://github.com/gaoyangz77/easyclaw/issues/3) |
| #5 连接飞书不成功 | 2026-03-02 | OPEN | 0 | [查看](https://github.com/gaoyangz77/easyclaw/issues/5) |

**提醒**：当前所有 Issue 均为 OPEN 状态，暂无任何 Issue 被标记为 "已解决" 或 "wontfix"。建议维护者尽快对 #5（飞书连接）进行问题定位与响应，避免影响新用户留存。

---

*报告生成时间：2026-03-02 | 数据来源：GitHub EasyClaw Repository*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期**: 2026-03-02 | **项目**: netease-youdao/LobsterAI

---

## 1. 今日速览

LobsterAI 今日保持较高的开发活跃度。版本 **v0.1.23** 正式发布，带来 Windows 捆绑 Python 运行时和技能优化两项重要功能。过去 24 小时内共处理 **11 条 Issues** 和 **8 条 PRs**，项目整体向前推进明显。当前版本聚焦于提升 Windows 平台兼容性和多模型选择体验，社区反馈积极。

---

## 2. 版本发布

### 🎉 v0.1.23 发布

**发布详情**: https://github.com/netease-youdao/LobsterAI/releases/tag/v0.1.23

#### 新增功能
- **Windows 捆绑 Python 运行时支持** ([#192](https://github.com/netease-youdao/LobsterAI/pull/192)): 将便携式 Python 解释器集成到 Windows 安装包中，用户无需手动安装 Python。运行时在启动时同步到 userData 并注入 PATH，供协作会话、技能和技能服务使用。
- **技能优化** ([#193](https://github.com/netease-youdao/LobsterAI/pull/193)): 改进技能执行效率和稳定性。

#### Bug 修复
- **消除模型选择的歧义** ([#194](https://github.com/netease-youdao/LobsterAI/pull/194)): 修复当同一模型 ID 存在于多个 provider 时，app 无法正确识别和保存用户选择的问题。

> ⚠️ **迁移注意**: 无破坏性变更，已无缝升级。

---

## 3. 项目进展

今日共有 **8 条 PRs** 合并/关闭，项目持续快速迭代：

| PR | 作者 | 状态 | 摘要 |
|---|---|---|---|
| [#192](https://github.com/netease-youdao/LobsterAI/pull/192) | @fisherdaddy | ✅ Merged | feature: add bundled Windows Python runtime support |
| [#194](https://github.com/netease-youdao/LobsterAI/pull/194) | @fisherdaddy | ✅ Merged | fix: disambiguate model selection by provider key |
| [#193](https://github.com/netease-youdao/LobsterAI/pull/193) | @liuzhq1986 | ✅ Merged | Liuzhq/skill optimize |
| [#167](https://github.com/netease-youdao/LobsterAI/pull/167) | @fisherdaddy | ✅ Merged | fix: 解决自定义邮箱的高级设置的 bug & 优化体验 |
| [#160](https://github.com/netease-youdao/LobsterAI/pull/160) | @fisherdaddy | ✅ Merged | fix: 修复 websearch skills 中文乱码的问题 |
| [#129](https://github.com/netease-youdao/LobsterAI/pull/129) | @fisherdaddy | ✅ Merged | feat: 支持系统代理设置，默认关闭 |
| [#123](https://github.com/netease-youdao/LobsterAI/pull/123) | @mammut001 | ✅ Merged | Fix-MiniMax OpenAI Invalid Params |
| [#127](https://github.com/netease-youdao/LobsterAI/pull/127) | @mammut001 | ✅ Merged | Fix default model in settings |

**推进重点**:
- Windows 平台兼容性大幅提升（Python 运行时内置）
- 多 provider 模型选择逻辑优化
- 中文编码问题持续修复（websearch skills）
- 邮箱功能体验改进

---

## 4. 社区热点

以下 Issues 讨论最活跃（按评论数排序）：

### 🔥 Issue #164 - Windows 系统 bash 命令编码问题
**链接**: https://github.com/netease-youdao/LobsterAI/issues/164  
**作者**: @zhahongan-ctrl | **评论**: 2 | **状态**: OPEN

**问题描述**: Windows 系统下使用 agent 命令行的 bash 命令时，由于 Windows 中文采用 GBK 编码而 bash 仅支持 UTF-8，导致返回大量乱码，AI 模型无法正常工作。用户建议考虑在 Windows 下使用 PowerShell 命令行。

**诉求分析**: 这是典型的跨平台兼容性痛点，涉及编码处理和终端仿真器选择。

---

### 🔥 Issue #187 - 非阿里模型都不能用
**链接**: https://github.com/netease-youdao/LobsterAI/issues/187  
**作者**: @JoJocoder | **评论**: 2 | **状态**: OPEN

**问题描述**: 用户反馈除阿里模型外，其他提供商的模型均无法使用，并附上错误截图。

**诉求分析**: 可能与近期 [#194](https://github.com/netease-youdao/LobsterAI/pull/194) 修复的模型选择歧义问题相关，需进一步排查多 provider 场景。

---

### 🔥 Issue #191 - 单个 session 多次对话后 API Error
**链接**: https://github.com/netease-youdao/LobsterAI/issues/191  
**作者**: @dolag233 | **评论**: 1 | **状态**: OPEN

**问题描述**: 单个 session 多次对话后出现 `API Error: 400` 错误，提示 tool_calls 响应缺失。

**诉求分析**: 这是一个较严重的功能性 bug，影响对话连续性，需优先处理。

---

## 5. Bug 与稳定性

### 🔴 高优先级

| Issue | 描述 | 状态 |
|---|---|---|
| [#191](https://github.com/netease-youdao/LobsterAI/issues/191) | 单个 session 多次对话后出现 API Error 400 (tool_calls 响应缺失) | OPEN |
| [#187](https://github.com/netease-youdao/LobsterAI/issues/187) | 非阿里模型都不能用 | OPEN |
| [#200](https://github.com/netease-youdao/LobsterAI/issues/200) | 安装不了（安装/卸载重装均失败） | OPEN |

### 🟡 中优先级

| Issue | 描述 | 状态 |
|---|---|---|
| [#164](https://github.com/netease-youdao/LobsterAI/issues/164) | Windows 系统 bash 命令中文乱码 | OPEN |
| [#196](https://github.com/netease-youdao/LobsterAI/issues/196) | 不支持 find-skills (导入 vercel skills 后报错) | OPEN |
| [#197](https://github.com/netease-youdao/LobsterAI/issues/197) | 钉钉 IM 配额限制/突然接不通 | OPEN |
| [#190](https://github.com/netease-youdao/LobsterAI/issues/190) | 更新到 0.1.22 后历史会话全部丢失 | OPEN |

### 🟢 已修复（相关 PR 已合并）

- [#194](https://github.com/netease-youdao/LobsterAI/pull/194): 修复多 provider 模型选择歧义
- [#160](https://github.com/netease-youdao/LobsterAI/pull/160): 修复 websearch skills 中文乱码
- [#167](https://github.com/netease-youdao/LobsterAI/pull/167): 修复自定义邮箱高级设置 bug

---

## 6. 功能请求与路线图信号

以下功能需求获得用户关注，可能进入未来版本路线图：

### ✨ Issue #199 - 定时任务指定模型 & 多 Agent 能力
**链接**: https://github.com/netease-youdao/LobsterAI/issues/199  
**作者**: @fuxuan928 | **状态**: OPEN

**需求**:
1. 定时任务支持单独指定使用的模型（简单任务用轻量模型降低成本，复杂任务用高性能模型）
2. 支持多 Agent 分工协作

**纳入可能性**: ⭐⭐⭐ 中高。结合 v0.1.23 已有的定时任务功能扩展，模型选择能力已在 [#194](https://github.com/netease-youdao/LobsterAI/pull/194) 中改进，多 Agent 可能是下一阶段方向。

---

### ✨ Issue #198 - MCP 设置界面 & 多模型切换路由 & 手机版
**链接**: https://github.com/netease-youdao/LobsterAI/issues/198  
**作者**: @LiZhiyu-HZ | **状态**: OPEN

**需求**:
1. 增加 MCP (Model Context Protocol) 的设置界面
2. 多模型切换路由功能
3. 手机版 App

**纳入可能性**: ⭐⭐ 中。MCP 设置界面有一定合理性；多模型路由与现有功能有一定重叠；手机版为长期愿景。

---

### ✨ Issue #189 - 支持 OpenAI OAuth
**链接**: https://github.com/netease-youdao/LobsterAI/issues/189  
**作者**: @yangwang2 | **状态**: OPEN

**需求**: 计划支持 OpenAI OAuth 认证方式。

**纳入可能性**: ⭐⭐⭐ 中。OAuth 是主流认证方式，用户有一定需求。

---

## 7. 用户反馈摘要

### 满意度较高的点
- ✅ 定时任务功能受到好评（#199 反馈"非常实用"）
- ✅ Windows Python 运行时内置解决安装门槛
- ✅ 中文编码问题持续修复（websearch skills）

### 主要痛点
- ❌ **跨平台兼容性**: Windows 下的编码和终端问题仍是最大痛点
- ❌ **多模型支持不稳定**: 非阿里模型无法使用的问题影响广泛
- ❌ **会话连续性**: 多次对话后的 API 错误影响使用体验
- ❌ **历史数据丢失**: 版本更新后会话丢失（#190）

### 使用场景
- 定时自动化任务（数据抓取、报告生成等）
- 邮箱智能处理（发票搜索等）
- 代码开发辅助

---

## 8. 待处理积压

以下 Issues 超过 24 小时未获官方回应，需关注：

| Issue | 描述 | 创建时间 | 状态 |
|---|---|---|---|
| [#200](https://github.com/netease-youdao/LobsterAI/issues/200) | 安装不了 | 2026-03-02 | 0 评论 |
| [#199](https://github.com/netease-youdao/LobsterAI/issues/199) | 定时任务指定模型 & 多 Agent | 2026-03-02 | 0 评论 |
| [#197](https://github.com/netease-youdao/LobsterAI/issues/197) | 钉钉 IM 配额问题 | 2026-03-01 | 0 评论 |
| [#196](https://github.com/netease-youdao/LobsterAI/issues/196) | 不支持 find-skills | 2026-03-01 | 0 评论 |
| [#195](https://github.com/netease-youdao/LobsterAI/issues/195) | 邮箱 SKILL 搜不到发票类型 | 2026-03-01 | 0 评论 |
| [#190](https://github.com/netease-youdao/LobsterAI/issues/190) | 历史会话丢失 | 2026-03-01 | 0 评论 |

> ⚠️ **维护建议**: 建议优先响应 #200（阻塞性问题）和 #190（数据丢失问题），避免用户流失。

---

**日报编制**: AI 开源项目分析助手  
**数据来源**: GitHub LobsterAI (2026-03-02)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-02)

## 1. 今日速览

2026年3月1日是 ZeptoClaw 项目的高产之日。项目在过去24小时内合并/关闭了 **9 个 Pull Requests**，同时处理完 **9 个 Issues**，暂无新增 Issues。代码层面实现了大量关键功能：新增 Azure OpenAI/Amazon Bedrock/DeepSeek/Kimi 四个 provider 预设、MQTT 物联网通道、DOCX 文本提取工具、多模态视觉支持以及企业级配额管理功能。整体活跃度评估为 **极高 (🔥)**，项目在企业部署、IoT、工具链扩展方向快速推进。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日合并/关闭了 **9 个重要 PR**，项目功能版图显著扩展：

| PR | 标题 | 状态 | 关联 Issue |
|---|---|---|---|
| [#211](https://github.com/qhkm/zeptoclaw/pull/211) | 添加 Azure OpenAI 和 Amazon Bedrock provider 预设 | ✅ 已合并 | #198 |
| [#195](https://github.com/qhkm/zeptoclaw/pull/195) | 阻止 shell 中的破坏性 git 操作 | ✅ 已合并 | #194 |
| [#210](https://github.com/qhkm/zeptoclaw/pull/210) | per-provider 使用配额管理 | ✅ 已合并 | #200 |
| [#208](https://github.com/qhkm/zeptoclaw/pull/208) | 添加 DeepSeek 和 Kimi 支持 | ✅ 已合并 | #207 |
| [#209](https://github.com/qhkm/zeptoclaw/pull/209) | 添加 MQTT 通道用于 IoT 设备通信 | ✅ 已合并 | #199 |
| [#206](https://github.com/qhkm/zeptoclaw/pull/206) | 添加 DOCX 文本提取工具 | ✅ 已合并 | #201 |
| [#205](https://github.com/qhkm/zeptoclaw/pull/205) | OpenAI OAuth / Codex CLI auth 登录 | ✅ 已合并 | #203 |
| [#202](https://github.com/qhkm/zeptoclaw/pull/202) | 添加多模态视觉/图像输入支持 | ✅ 已合并 | #197 |
| [#204](https://github.com/qhkm/zeptoclaw/pull/204) | 添加免责声明 (无 token/区块链) | ✅ 已合并 | - |

**关键推进点**：
- **Provider 生态**：从仅支持 OpenRouter/Ollama/vLLM/NVIDIA NIM，扩展到 Azure、AWS Bedrock、DeepSeek、Kimi 四大厂商
- **IoT 能力**：新增 MQTT 通道，填补 Serial (UART) 之外的无线通信场景
- **企业级特性**：配额管理 + OAuth 认证 + 安全性加固 (git blocklist)
- **工具链**：DOCX 读取工具补齐 PDF 能力，形成文档处理闭环

---

## 4. 社区热点

今日所有 Issues 均由维护者创建并关闭，**无社区新增热点 Issue**。

唯一由外部贡献者创建的 Issue **[#207](https://github.com/qhkm/zeptoclaw/issues/207)** (`support deepseek and kimi`) 已由维护者 **@qhkm** 在 PR #208 中实现并关闭。

**热点 PR 分析**：已合并的 PR 中，**#211** (Azure/Bedrock) 和 **#202** (视觉支持) 预计获得最多关注——前者解锁企业部署场景，后者是 2026 年 messaging bot 平台的标配能力。

---

## 5. Bug 与稳定性

| Issue | 描述 | 严重程度 | 状态 |
|---|---|---|---|
| [#194](https://github.com/qhkm/zeptoclaw/issues/194) | sub-agent 可通过 shell 绕过 git 工具执行破坏性命令 (push --force, reset --hard 等) | 🔴 高 | ✅ 已修复 (PR #195) |

**说明**：这是一个 **安全漏洞**，已通过在 shell blocklist 中添加 6 个正则表达式模式修复。所有危险 git 命令现已被阻止。

---

## 6. 功能请求与路线图信号

基于今日数据，以下功能请求已实现并有望进入下一版本：

| Issue | 功能 | 预计版本 | 优先度 |
|---|---|---|---|
| #198 | Azure OpenAI + Amazon Bedrock 预设 | 下一 minor | P1 |
| #200 | per-provider 配额管理 | 下一 minor | P1 |
| #199 | MQTT 通道 | 下一 minor | P2 |
| #201 | DOCX 文本提取 | 下一 minor | P2 |
| #203 | OpenAI OAuth / Codex CLI auth | 下一 minor | P2 |
| #197 | 视觉/图像输入支持 | 下一 minor | P1 |

**路线图信号**：项目正从 **"可用"** 向 **"企业就绪"** 演进——配额管理、OAuth、多 provider 支持是典型标志。IoT (MQTT) 和多模态 (Vision) 拓展了场景边界。

---

## 7. 用户反馈摘要

从 Issues 讨论中提炼：

- **企业部署诉求强**：Issue #198 (Azure/Bedrock) 明确提到 "unlock enterprise deployments without new provider code"，反映用户希望在已有 OpenAI 兼容层基础上快速接入企业云
- **成本控制需求**：Issue #200 (配额管理) 指出多用户 gateway 部署场景下，需要 "don't spend more than $50/month on Claude" 这类细粒度控制
- **IoT 场景缺口**：Issue #199 提到 "Zeptoclaw targets hardware (ESP32, RPI, Arduino, Nucleo) but currently only supports serial (UART)"，MQTT 是社区期待已久的无线方案
- **文档处理一致期望**：PDF 已支持，用户自然期待 DOCX 也能读取 (Issue #201)

---

## 8. 待处理积压

| 项目 | 描述 | 状态 | 提醒 |
|---|---|---|---|
| [#183](https://github.com/qhkm/zeptoclaw/pull/183) | Update dependencies (cargo, npm, Docker, GitHub Actions) | 🟡 OPEN (待合并) | 由 @reneleonhardt 贡献，包含 reqwest 升级讨论 (被 #184 阻塞)，建议合并前确认 gogcli-rs 依赖兼容性 |

**说明**：这是唯一待合并的 PR，贡献者来自社区。合并后需关注：
- clippy warnings 修复状态
- `sandbox-landlock` feature 限制是否影响现有部署

---

*📊 数据来源: GitHub API | 统计周期: 2026-03-01 00:00 UTC - 2026-03-02 00:00 UTC*

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-02)

## 1. 今日速览

过去 24 小时，NanoBot 项目保持高度活跃状态：共产生 **63 条** 更新（19 条 Issues + 44 条 PRs），其中 **34 个 PR 待合并**，显示开发推进力度强劲。社区围绕多平台集成（WhatsApp、Telegram、QQ、飞书）和 Agent 能力增强展开大量讨论，未发布新版本但功能 PR 持续涌现，项目整体处于健康迭代状态。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

以下 PR 已在过去 24 小时内合并/关闭，代表项目关键进展：

| PR | 标题 | 状态 | 推进内容 |
|---|---|---|---|
| [#1365](https://github.com/HKUDS/nanobot/issues/1365) | [Bug] nanobot frequently "Terminated" when executing complex tasks on Linux | **CLOSED** | 修复 Linux 环境下复杂任务执行时进程意外终止问题 |
| [#1338](https://github.com/HKUDS/nanobot/issues/1338) | Feature: Telegram Reaction Support | **CLOSED** | Telegram 消息反应功能（与 #1334 重复，已关闭） |
| [#420](https://github.com/HKUDS/nanobot/pull/420) | feat: add Matrix (Element) chat channel support | **CLOSED** (3月2日更新) | 新增 Matrix/Element 聊天协议支持 |

**重点合并方向解读：**
- **平台扩展**：Matrix 渠道支持进入关闭列表，标记该功能趋于完成
- **稳定性修复**：Linux 复杂任务崩溃问题已关闭，表明该 Bug 可能已修复或定位

---

## 4. 社区热点

以下 Issues/PRs 评论数最多，反映核心用户诉求：

### 🔥 Issues 讨论热度

| Issue | 评论数 | 主题 | 热度来源 |
|---|---|---|---|
| [#92](https://github.com/HKUDS/nanobot/issues/92) | 5 | WhatsApp bridge connection error | 渠道连接问题 |
| [#623](https://github.com/HKUDS/nanobot/issues/623) | 5 | Custom Skills "Tool Not Found" 错误 | 技能开发痛点 |
| [#1265](https://github.com/HKUDS/nanobot/issues/1265) | 5 | Windows vs openclaw 体验对比 | 竞品对比建议 |
| [#140](https://github.com/HKUDS/nanobot/issues/140) | 5 | GitHub Copilot providers 支持计划 | 功能路线图询问 |
| [#1353](https://github.com/HKUDS/nanobot/issues/1353) | 4 | ClawHub rate limit issue | 技能安装限制 |

### 🔥 PRs 关注度

| PR | 更新日期 | 主题 |
|---|---|---|
| [#1362](https://github.com/HKUDS/nanobot/pull/1362) | 3月2日 | OpenAI 兼容 API + x-session-key 隔离（多会话安全强化） |
| [#1263](https://github.com/HKUDS/nanobot/pull/1263) | 3月2日 | 修复钉钉机器人群消息回复 |
| [#239](https://github.com/HKUDS/nanobot/pull/239) | 3月2日 | 上下文窗口加固 & 智能工具结果截断 |

**热点分析：**
- **渠道集成是持久热点**：WhatsApp、钉钉、QQ、Telegram、飞书均有用户报告问题，社区对多平台支持期待高
- **Token 消耗焦虑**：[#1332](https://github.com/HKUDS/nanobot/issues/1332) 用户反馈单条 "hello" 消耗 5000+ token，提示需优化提示词压缩或成本控制
- **技能系统不完善**：#623 和 #1353 指向 ClawHub 技能安装生态存在问题

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

### 🔴 高优先级

| Issue | 严重程度 | 描述 | Fix PR |
|---|---|---|---|
| [#1365](https://github.com/HKUDS/nanobot/issues/1365) | 高 | Linux 下执行复杂任务（如配置钉钉机器人）时进程频繁被 "Terminated"，无错误日志 | 已关闭（可能已修复） |
| [#1380](https://github.com/HKUDS/nanobot/issues/1380) | 高 | Telegram 群组 `groupPolicy: "mention"` 配置被忽略，机器人在 0.1.4.post3 版本对所有消息回复 | [#1389](https://github.com/HKUDS/nanobot/pull/1389) 已提交修复 |

### 🟡 中优先级

| Issue | 严重程度 | 描述 |
|---|---|---|
| [#1394](https://github.com/HKUDS/nanobot/issues/1394) | 中 | QQ 通道报错"消息被去重，请检查请求msgseq"（0.1.4@post3 版本） |
| [#1382](https://github.com/HKUDS/nanobot/issues/1382) | 中 | 飞书 Markdown 表格超出限制导致消息发送失败 |
| [#1318](https://github.com/HKUDS/nanobot/issues/1318) | 中 | 安装 skill 后机器人重复回复消息 |

### 🟢 低优先级 / 已修复

| Issue | 状态 | 描述 |
|---|---|---|
| [#1365](https://github.com/HKUDS/nanobot/issues/1365) | **CLOSED** | Linux 复杂任务终止问题（已关闭） |
| [#1338](https://github.com/HKUDS/nanobot/issues/1338) | **CLOSED** | Telegram Reaction 功能（重复 Issue） |

---

## 6. 功能请求与路线图信号

以下 Feature Requests 反映社区明确需求，结合已有 PR 判断纳入可能性：

| Issue | 功能描述 | 已有相关 PR | 纳入可能性 |
|---|---|---|---|
| [#1392](https://github.com/HKUDS/nanobot/issues/1392) | **显式任务分解与规划机制**：当前 ReAct 循环处理复杂任务时容易"迷失"，需引入规划层 | 暂无 | ⭐⭐⭐ 中高 |
| [#1378](https://github.com/HKUDS/nanobot/issues/1378) | **通用工具编排器**：并行执行 + 依赖注入，支持单轮复杂工作流 | 暂无 | ⭐⭐ 中 |
| [#140](https://github.com/HKUDS/nanobot/issues/140) | **GitHub Copilot Provider 支持** | 暂无 | ⭐⭐ 中 |
| [#1334](https://github.com/HKUDS/nanobot/issues/1334) | **Telegram 消息反应支持** | 重复 Issue 已关闭 | ⭐ 已关闭 |
| [#1391](https://github.com/HKUDS/nanobot/pull/1391) | **consolidation_model**：内存整合使用更便宜的模型 | **OPEN** | ⭐⭐⭐ 极高（PR 已出） |
| [#1390](https://github.com/HKUDS/nanobot/pull/1390) | **Mistral Provider + Voxtral Audio** | **OPEN** | ⭐⭐⭐ 极高 |

**路线图信号解读：**
- **成本优化**：`consolidation_model` PR 已出，下一版本很可能支持内存整合分层计费
- **多模态扩展**：Mistral + Voxtral Audio 加入，音频转录能力在即
- **复杂任务能力**：#1392 和 #1378 均指向 Agent 推理/规划层升级，可能成为下一迭代重点

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的核心痛点与满意点：

### 😤 痛点

1. **技能安装生态糟糕**（#623, #1353, #1265）
   - ClawHub 频繁报 rate limit
   - 自定义技能持续报 "Tool Not Found"
   - 用户对比 openclaw 认为 nanobot "偶尔出问题"

2. **Token 消耗惊人**（#1332）
   - 用户报告：发 "hello" 消耗 5000+ token
   - 安装 skill 消耗 30000+ token
   - 成本焦虑明显

3. **多平台配置复杂**（#92, #1373, #1263）
   - WhatsApp 连接被blocked
   - 钉钉群消息无法回复
   - 渠道登录错误排查困难

### 👍 满意点

- **Windows 部署优势**（#1265）：用户认为 nanobot 不需要 WSL，比 openclaw 更易用
- **响应速度**（#1265）：nanobot 速度优于竞品

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或停滞，提醒维护者关注：

| Issue/PR | 积压时长 | 状态 | 风险 |
|---|---|---|---|
| [#140](https://github.com/HKUDS/nanobot/issues/140) GitHub Copilot Provider | 25天 | OPEN | 功能路线图缺失，用户持续追问 |
| [#126](https://github.com/HKUDS/nanobot/pull/126) GitHub Actions 编译 Docker 镜像 | 25天 | OPEN | 文档/CI 完善类，长期无评审 |
| [#93](https://github.com/HKUDS/nanobot/pull/93) add Tavily web search | 26天 | OPEN | 小功能，长期停滞 |
| [#1328](https://github.com/HKUDS/nanobot/issues/1328) agent 与 gateway 技能共享 | 2天 | OPEN | 核心架构问题，需明确设计 |

---

*报告生成时间：2026-03-02 | 数据来源：GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-02)

## 1. 今日速览

PicoClaw 项目今日保持高度活跃，共计 23 条 Issues 更新和 71 条 PR 更新。社区重点关注 Provider 集成（OpenRouter free model、MiniMax）、Channel 系统重构进度已达 83%，以及安全沙箱机制的优化（/dev/null 重定向问题）。暂无新版本发布，但多项功能修复已进入待合并状态。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

| PR | 状态 | 描述 | 贡献者 |
|---|---|---|---|
| [#954](https://github.com/sipeed/picoclaw/pull/954) | **OPEN** | fix(provider): 将 'free' 模型映射到 openrouter/auto，解决 #901 | @HRronaldo |
| [#967](https://github.com/sipeed/picoclaw/pull/967) | **OPEN** | fix(tools): 允许 /dev/null 重定向，添加读写沙箱分离 | @vowstar |
| [#924](https://github.com/sipeed/picoclaw/pull/924) | **OPEN** | feat(launcher-ui): 使用 Bulma + 离线 CodeMirror 重构配置 UI | @sky5454 |
| [#892](https://github.com/sipeed/picoclaw/pull/892) | **OPEN** | Fix/inbound dedup messageid: 修复 Telegram 重复回复问题 | @mosir |
| [#898](https://github.com/sipeed/picoclaw/pull/898) | **OPEN** | Fix anthropic: 修复 400 Bad Request 错误 | @qiangmzsx |
| [#561](https://github.com/sipeed/picoclaw/pull/561) | **CLOSED** | fix: 检查 api_base 字段避免默认值污染 | @zenixls2 |
| [#969](https://github.com/sipeed/picoclaw/pull/969) | **CLOSED** | merge upstream/main: channel refactor, launcher, modernizations | @dj-oyu |

**进展亮点：**
- Channel 系统重构（#621）已完成 **83%**（10/12 阶段）
- 多项 Provider 相关修复正在推进，OpenRouter 集成趋于完善
- Launcher UI 现代化改造启动，配置体验将得到改善

---

## 4. 社区热点

### 热门 Issues 讨论

| Issue | 评论 | 热度分析 |
|---|---|---|
| [#901](https://github.com/sipeed/picoclaw/issues/901) | 11 | **已修复在 PR#954** - OpenRouter free model 添加失败，用户反馈强烈 |
| [#295](https://github.com/sipeed/picoclaw/issues/295) | 9 | **路线图重点** - 智能模型路由功能，平衡成本与性能的核心需求 |
| [#621](https://github.com/sipeed/picoclaw/issues/621) | 5 | 通道系统重构接近尾声，预计近期合并 |
| [#675](https://github.com/sipeed/picoclaw/issues/675) | 4 | MiniMax LLM Provider 支持请求，中国开发者社区需求明显 |
| [#671](https://github.com/sipeed/picoclaw/issues/671) | 4 | gateway status 启动额外 worker 进程，影响 Discord 响应 |
| [#386](https://github.com/sipeed/picoclaw/issues/386) | 4 | exec tool 误拦截 URL 命令（curl），已在 PR#967 修复 |

**热点分析：** 
- **Provider 集成**是当前最热话题，OpenRouter、MiniMax、Anthropic 多处问题并行处理
- **安全沙箱机制**讨论活跃，URL 识别、/dev/null 重定向、设备写入限制等边界情况陆续浮现
- **Agent/Channel 重构**进入收尾阶段，社区对架构升级保持关注

---

## 5. Bug 与稳定性

### 严重 Bug（Critical）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#972](https://github.com/sipeed/picoclaw/issues/972) | Subagent 配置不匹配导致凭证泄漏到工具输出 | **OPEN** | - |
| [#966](https://github.com/sipeed/picoclaw/issues/966) | Qwen 3.5 reasoning 模型耗尽 token 后返回空内容 | **OPEN** | - |

### 高优先级 Bug

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#671](https://github.com/sipeed/picoclaw/issues/671) | gateway status 启动额外 worker 进程 | **CLOSED** | - |
| [#794](https://github.com/sipeed/picoclaw/issues/794) | Codex API gpt-5.3-codex 400 Bad Request | **OPEN** | #898 |
| [#386](https://github.com/sipeed/picoclaw/issues/386) | exec tool 误拦截 URL 命令 | **CLOSED** | #967 |
| [#964](https://github.com/sipeed/picoclaw/issues/964) | Safety guard 阻止 /dev/null 重定向 | **OPEN** | #967 |

### 一般 Bug

| Issue | 描述 | 状态 |
|---|---|---|
| [#965](https://github.com/sipeed/picoclaw/issues/965) | 未阻止写入 /dev/mmcblk* 和 /dev/nvme* 设备 |
| [#958](https://github.com/sipeed/picoclaw/issues/958) | Ollama llama3.2 模型未找到 |
| [#945](https://github.com/sipeed/picoclaw/issues/945) | voice package 在 v0.2.0 中未使用 |
| [#928](https://github.com/sipeed/picoclaw/issues/928) | skills search 返回 HTTP 404（ClawHub 端点不匹配）|

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue | 类型 | 描述 | 预计版本 |
|---|---|---|---|
| [#295](https://github.com/sipeed/picoclaw/issues/295) | **Roadmap** | 智能模型路由（成本与性能优化） | 可能在下一大版本 |
| [#675](https://github.com/sipeed/picoclaw/issues/675) | **Provider** | MiniMax LLM Provider 支持 | 待确认 |
| [#618](https://github.com/sipeed/picoclaw/issues/618) | **Enhancement** | self-upgrade 支持（跨平台包管理） | 规划中 |
| [#906](https://github.com/sipeed/picoclaw/issues/906) | **Feature** | 工具执行超时可配置 | 近期可能合并 |
| [#880](https://github.com/sipeed/picoclaw/issues/880) | **Feature** | Telegram API 自定义基础 URL（支持代理） | 近期可能合并 |
| [#782](https://github.com/sipeed/picoclaw/issues/782) | **Security** | 综合安全框架（API Key、Token 保护）| 规划中 |
| [#948](https://github.com/sipeed/picoclaw/issues/948) | **Feature** | 跨平台文件附件支持 | 长期需求 |

**趋势观察：**
- Provider 多元化（MiniMax、OpenRouter）需求强劲
- 安全与沙箱机制持续完善
- 跨平台部署（self-upgrade、代理支持）是用户关注焦点

---

## 7. 用户反馈摘要

### 痛点汇总

1. **Provider 集成问题**
   - OpenRouter free model 无法添加（#901）- 已修复中
   - Anthropic API 400 错误（#898）- 修复中
   - Codex API 设备认证失败（#794）

2. **安全机制误伤**
   - `guardCommand` 误拦截 curl URL 命令（#386, #797, #964）
   - /dev/null 重定向被阻止导致某些模型不可用（#964）
   - 设备写入限制不完整（#965）

3. **功能缺失**
   - 语音消息在 v0.2.0 损坏（#945）- 修复中
   - 工具执行超时不可配置（#906）
   - skills 搜索 404 错误（#928）

### 积极反馈

- Channel 系统重构进展顺利（83% 完成）
- 社区对 Agent 系统重构（#772）保持期待

---

## 8. 待处理积压

### 长期未响应 Issue

| Issue | 创建时间 | 描述 | 提醒 |
|---|---|---|---|
| [#266](https://github.com/sipeed/picoclaw/issues/266) | 2026-02-16 | Baidu 浏览器集成请求（标记 wontfix但用户仍有需求）| 建议明确立场或提供替代方案 |
| [#958](https://github.com/sipeed/picoclaw/issues/958) | 2026-03-01 | Ollama 模型未找到 - 配置问题 | 需要明确配置指导 |

### 待合并重要 PR

| PR | 描述 | 建议 |
|---|---|---|
| [#954](https://github.com/sipeed/picoclaw/pull/954) | OpenRouter free model 修复 | 建议尽快合并 |
| [#967](https://github.com/sipeed/picoclaw/pull/967) | /dev/null 重定向修复 | 建议尽快合并 |
| [#947](https://github.com/sipeed/picoclaw/pull/947) | 语音转录修复 | 关联 #945，严重影响用户体验 |

---

**日报生成时间：** 2026-03-02  
**数据来源：** GitHub PicoClaw Repository (github.com/sipeed/picoclaw)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-02)

---

## 1. 今日速览

过去 24 小时内，NanoClaw 项目保持高度活跃状态：**13 条 Issues 更新**（7 新开/活跃，6 已关闭），**43 条 PR 更新**（21 待合并，22 已合并/关闭）。项目持续快速迭代，重点推进多渠道消息支持（WhatsApp、Telegram、飞书）、调度任务稳定性修复、以及自定义 API 端点能力。社区参与度高，一项安全漏洞已报告待修复。

---

## 2. 版本发布

**本期无新版本发布**

---

## 3. 项目进展

以下 PR 已合并/关闭，标志着项目重要功能推进：

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#614](https://github.com/qwibitai/nanoclaw/pull/614) | feat: add Telegram channel support | ✅ CLOSED | 新增 Telegram 消息渠道支持，可与 WhatsApp 并行或独立运行 |
| [#634](https://github.com/qwibitai/nanoclaw/pull/634) | Fix auto deploy and host audio | ✅ CLOSED | 修复自动部署静默失败 bug，添加音频支持依赖检查 |
| [#575](https://github.com/qwibitai/nanoclaw/pull/575) | feat: add update_project IPC host command | ✅ CLOSED | 容器可主动请求上游更新，支持跨平台热重启与冲突回滚 |
| [#609](https://github.com/qwibitai/nanoclaw/pull/609) | fix: add CJK font support for Chromium screenshots | ✅ CLOSED | 解决中文/日文/韩文字符在截图和 PDF 导出时显示为方块的问题 |
| [#628](https://github.com/qwibitai/nanoclaw/pull/628) | fix: normalize wrapped WhatsApp messages | ✅ CLOSED | 修复一次性消息、阅后即焚、编辑消息的内容读取问题 |
| [#503](https://github.com/qwibitai/nanoclaw/pull/503) | fix: support ANTHROPIC_BASE_URL in containers | ✅ CLOSED | 支持将自定义 API 端点传递到容器环境 |
| [#572](https://github.com/qwibitai/nanoclaw/pull/572) | feat: add Codex provider skill | 🔵 OPEN | 新增 Codex 作为模型提供商 |
| [#590](https://github.com/qwibitai/nanoclaw/pull/590) | feat(skill): add Feishu/Lark channel support | 🔵 OPEN | 新增飞书/ Lark 渠道技能 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 标题 | 评论 | 👍 | 热度分析 |
|---|---|---|---|---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | [enhancement] Support runtime(s) other than Claude | 15 | **33** | **最高热度** — 用户强烈呼吁支持 OpenCode、Codex、Gemini 等替代运行时，担忧 Anthropic 账户被封禁风险 |
| [#181](https://github.com/qwibitai/nanoclaw/issues/181) | [enhancement] Upgrade Skill | 3 | 0 | 讨论 `/upgrade` 技能设计，主分支稳定后是时候推进 |
| [#619](https://github.com/qwibitai/nanoclaw/issues/619) | feat: output splitting | 1 | 0 | 已关闭 — 长消息分片发送，避免手机端显示"文本墙" |
| [#621](https://github.com/qwibitai/nanoclaw/issues/621) | feat: typing indicators | 1 | 0 | 已关闭 — WhatsApp 输入状态指示 |
| [#620](https://github.com/qwibitai/nanoclaw/issues/620) | feat: immediate read receipts | 1 | 0 | 已关闭 — 消息送达即显示已读蓝勾 |

**核心诉求分析**：Issue #80 获得 33 票赞成，是目前社区最强烈的功能诉求。用户对厂商锁定（vendor lock-in）表示担忧，OpenCode 作为开源 Claude Code CLI 替代品受到关注。

---

## 5. Bug 与稳定性

### 严重问题

| Issue | 严重程度 | 描述 | 状态 |
|---|---|---|---|
| [#635](https://github.com/qwibitai/nanoclaw/issues/635) | 🔴 **高 (Security)** | WhatsApp 认证文件权限设置为 644（全局可读）而非 600，泄露敏感会话凭据 | 🔵 OPEN |
| [#613](https://github.com/qwibitai/nanoclaw/issues/613) | 🟠 中 | `ANTHROPIC_MODEL=claude-sonnet-4-6` 环境变量被忽略，CLI 强制映射到 `claude-sonnet-4-20250514` | 🔵 OPEN |
| [#611](https://github.com/qwibitai/nanoclaw/issues/611) | 🟠 中 | Agent-runner 源码副本在首次创建后永不更新，导致容器内代码与宿主机脱节 | 🔵 OPEN |

### 已修复的 Bug

- **PR #607 / #636**: 修复调度器长任务重复执行问题（任务运行时长超过 60s 轮询间隔导致重复入队）
- **PR #550**: 修复 IPC 活跃容器中后续消息被静默吞掉的 bug
- **PR #628**: 修复 WhatsApp 包装消息（viewOnceMessage、ephemeralMessage、editedMessage）内容读取失败

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

| Issue | 请求内容 | 关联 PR | 纳入可能性 |
|---|---|---|---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | 支持 OpenCode、Codex、Gemini 等多运行时 | [#572](https://github.com/qwibitai/nanoclaw/pull/572) (Codex) | ⭐⭐⭐ 高 — 已有 Codex PR，OpenCode/Gemini 呼声高 |
| [#618](https://github.com/qwibitai/nanoclaw/issues/618) | WhatsApp 引用/回复支持 — 上下文消息线程 | — | ⭐⭐⭐ 高 — 基础设施已就绪 |
| [#617](https://github.com/qwibitai/nanoclaw/issues/617) | 消息 steering — 将新用户消息注入正在运行的 agent | — | ⭐⭐ 中 — 需较大架构调整 |
| [#633](https://github.com/qwibitai/nanoclaw/issues/633) | Spec kit 完善 | — | ⭐⭐ 中 — 内部工具链完善 |

### 路线图信号

- **多渠道消息平台**：Telegram (#614) 已合并，Feishu/Lark (#590) 进行中，WhatsApp 功能持续增强（输入状态、已读回执、分片输出）
- **自定义模型支持**：ANTHROPIC_BASE_URL (#503, #573) 已支持，第三方模型文档 (#592) 已合并
- **调度系统稳定性**：长任务重复执行问题 (#607, #636) 已修复

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的核心用户痛点与场景：

| 场景 | 痛点 | 来源 |
|---|---|---|
| **多运行时需求** | 用户担心 Anthropic 账户因使用 OpenClaw 被封禁，呼吁支持开源替代品（如 OpenCode） | [#80](https://github.com/qwibitai/nanoclaw/issues/80) |
| **移动端体验** | WhatsApp 长响应显示为"文本墙"，难以阅读 | [#619](https://github.com/qwibitai/nanoclaw/issues/619) |
| **等待反馈缺失** | Agent 推理时用户看不到任何响应（无输入指示），以为服务卡死 | [#621](https://github.com/qwibitai/nanoclaw/issues/621) |
| **企业/代理场景** | 需要通过企业代理或自定义端点访问 Anthropic API | [#503](https://github.com/qwibitai/nanoclaw/pull/503) |
| **截图中文显示** | 容器内截图/导出 PDF 时中文字符显示为方块 | [#609](https://github.com/qwibitai/nanoclaw/pull/609) |
| **手动更新困难** | 有定制安装的用户手动合并上游修复成本高（$15 API 费用） | [#217](https://github.com/qwibitai/nanoclaw/pull/217) |

---

## 8. 待处理积压

### 需关注的高价值积压 Issue

| Issue | 积压时长 | 描述 | 建议 |
|---|---|---|---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | ~26 天 | 多运行时支持 | 已有 Codex PR (#572)，建议优先评估 OpenCode 集成方案 |
| [#611](https://github.com/qwibitai/nanoclaw/issues/611) | 1 天 | Agent-runner 源码不更新 | 需设计增量同步机制或强制重建触发器 |
| [#635](https://github.com/qwibitai/nanoclaw/issues/635) | **当天** | 安全漏洞：文件权限 | 🔴 **需立即处理** — 建议修复后发安全版本 |
| [#613](https://github.com/qwibitai/nanoclaw/issues/613) | 1 天 | 模型版本环境变量被忽略 | 排查 CLI 参数映射逻辑 |

---

**报告生成时间**：2026-03-02  
**数据来源**：GitHub NanoClaw (qwibitai/nanoclaw)  
**分析师**：AI 开源项目分析助手

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-03-02)

## 1. 今日速览

IronClaw 社区在 24 小时内保持高度活跃：共处理 **24 条 Issues**（其中 6 条新开/活跃，18 条已关闭）和 **50 条 PR**（33 条待合并，17 条已合并/关闭）。项目发布了 v0.13.0 重要版本，带来破坏性变更；多个大型功能 PR（多租户认证、AWS Bedrock 支持、Programmatic Tool Calling）持续推进，整体开发势头强劲。稳定性方面存在若干用户报告的渠道集成问题，但多数已有修复进展。

---

## 2. 版本发布

### ✅ v0.13.0 已发布

**链接**: https://github.com/nearai/ironclaw/pull/385

| 项目 | 变更 |
|------|------|
| ironclaw | 0.12.0 → **0.13.0** |
| 类型 | ⚠️ **API 破坏性变更** |

**主要破坏性变更**:
- 外部可构造的 Struct 新增了公共字段 (`constructible_struct_adds_field`)
- 建议用户查阅完整的破坏性变更文档进行迁移

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 描述 | 状态 |
|----|------|------|
| [#445](https://github.com/nearai/ironclaw/pull/445) | 重命名 `WasmBuildable::repo_url` → `source_dir`，修正字段语义 | ✅ 已关闭 |
| [#446](https://github.com/nearai/ironclaw/pull/446) | **修复**: 设置向导预验证 Cloudflare tunnel token，捕获坏令牌于安装时 | ✅ 已关闭 |
| [#440](https://github.com/nearai/ironclaw/pull/440) | 新增 CLI 命令日志功能 | ✅ 已关闭 |
| [#447](https://github.com/nearai/ironclaw/pull/447) | **修复**: 防止 Telegram webhook 重新注册时的 409 冲突 | ✅ 已关闭 |

### 正在推进的大型功能 PR

| PR | 规模 | 描述 |
|----|------|------|
| [#449](https://github.com/nearai/ironclaw/pull/449) | XL | **RFC**: Structured Collections — 类型化、可查询记录 + schema 驱动工具生成 |
| [#345](https://github.com/nearai/ironclaw/pull/345) | XL | **新增**: AWS Bedrock LLM provider (Converse API) |
| [#351](https://github.com/nearai/ironclaw/pull/351) | XL | 多租户认证 + per-user 工作区隔离 (Part 3/3) |
| [#349](https://github.com/nearai/ironclaw/pull/349) | XL | 多作用域工作区读取 (Part 2/3) |
| [#348](https://github.com/nearai/ironclaw/pull/348) | XL | 基于敏感度的分层内存 + 隐私重定向 (Part 1/3) |
| [#408](https://github.com/nearai/ironclaw/pull/408) | XL | **新增**: Programmatic Tool Calling (PTC) — 执行器、SDK、E2E 测试 |
| [#388](https://github.com/nearai/ironclaw/pull/388) | XL | **新增**: `ironclaw import openclaw` CLI 命令，支持从 OpenClaw 迁移数据 |
| [#384](https://github.com/nearai/ironclaw/pull/384) | XL | Anthropic OAuth  onboarding + setup-token 支持 |
| [#357](https://github.com/nearai/ironclaw/pull/357) | XL | 工具级重试 + 指数退避 |
| [#368](https://github.com/nearai/ironclaw/pull/368) | L | Shell 工具风险分级 (Low/Medium/High) |

---

## 4. 社区热点

### 🔥 活跃讨论的 Issues

| Issue | 标题 | 评论数 | 热度分析 |
|-------|------|--------|----------|
| [#387](https://github.com/nearai/ironclaw/issues/387) | Google Calendar WASM 工具认证失败 | **7** | 用户无法完成 google-calendar 工具的身份验证，是核心集成问题 |
| [#394](https://github.com/nearai/ironclaw/issues/394) | Tailscale funnel 不工作 | 2 | 隧道未自动建立，需手动启动 |
| [#352](https://github.com/nearai/ironclaw/issues/352) | 自动化 QA: schema 验证、集成测试、计算机使用 E2E、混沌测试 | 1 | 路线图级讨论，提议四层测试体系 |
| [#268](https://github.com/nearai/ironclaw/issues/268) | OpenAI 兼容模型的工具 schema 规范化问题 | 1 | 影响 web-channel 与 gpt-4o/5.1 的兼容性 |
| [#413](https://github.com/nearai/ironclaw/issues/413) | [Bug] Slack 通道 "not_authed" + CLI 配置健忘症 | 1 | v0.12.0 凭证注入失败 |

### 🔥 活跃讨论的 PRs

| PR | 标题 | 评论数 |
|----|------|--------|
| [#449](https://github.com/nearai/ironclaw/pull/449) | RFC: Structured Collections | RFC 引发设计讨论 |
| [#313](https://github.com/nearai/ironclaw/pull/313) | Fix bug with MCP auth | 解决 MCP 认证始终失败问题 |

**热点分析**: 
- **Google Calendar 认证** 是最高热度问题，用户反馈 `ironclaw tool auth google-calendar` 命令无法工作
- 多租户系列 PR (#348/#349/#351) 持续吸引关注，是 IronClaw 向企业级安全架构演进的关键
- AWS Bedrock 支持 (#345) 和 PTC (#408) 代表下一代 LLM 提供商和工具调用能力的布局

---

## 5. Bug 与稳定性

### 🔴 高优先级 (已有 Fix PR)

| Issue | 描述 | 严重程度 | Fix PR |
|-------|------|----------|--------|
| [#413](https://github.com/nearai/ironclaw/issues/413) | Slack 通道 "not_authed" + v0.12.0 CLI 配置健忘症 | **高** | 已有修复 |
| [#447](https://github.com/nearai/ironclaw/pull/447) | Telegram webhook 409 冲突 | **高** | ✅ 已关闭 |
| [#446](https://github.com/nearai/ironclaw/pull/446) | Cloudflare tunnel token 预验证 | **高** | ✅ 已关闭 |
| [#363](https://github.com/nearai/ironclaw/issues/363) | PostgreSQL 硬编码 NoTls，破坏所有托管 Postgres 提供商 | **高** | 已关闭 |
| [#393](https://github.com/nearai/ironclaw/issues/393) | Telegram secrets 过滤器导致无限循环 | **高** | 已关闭 |

### 🟡 中优先级 (待处理)

| Issue | 描述 | 严重程度 |
|-------|------|----------|
| [#387](https://github.com/nearai/ironclaw/issues/387) | Google Calendar WASM 工具认证失败 | 中 |
| [#394](https://github.com/nearai/ironclaw/issues/394) | Tailscale funnel 不工作 | 中 |
| [#400](https://github.com/nearai/ironclaw/issues/400) | openai_compatible 后端在点号处截断模型名 (llama3.2 → llama3) | 中 |
| [#419](https://github.com/nearai/ironclaw/issues/419) | 未检测冲突的 cloudflared 服务 (brew vs system) | 中 |

### 🔧 已修复的 Bug (本周期)

- ✅ Tailscale 隧道不工作 (#394)
- ✅ Slack "not_authed" (#413)
- ✅ Telegram webhook 409 冲突 (#447)
- ✅ Discord/WhatsApp 通道缺少 build.sh (#406)
- ✅ Cloudflare tunnel token 验证 (#418)
- ✅ PostgreSQL 版本验证缺失 (#415)
- ✅ zsh completions compdef guard 缺失 (#420)

---

## 6. 功能请求与路线图信号

### 📌 高价值功能请求

| Issue/PR | 功能 | 关联 PR | 纳入可能性 |
|----------|------|---------|------------|
| [#352](https://github.com/nearai/ironclaw/issues/352) | 自动化 QA 框架 (schema 验证 → E2E) | — | ⭐⭐⭐ 高 |
| [#268](https://github.com/nearai/ironclaw/issues/268) | OpenAI 兼容模型的工具 schema 规范化 | — | ⭐⭐⭐ 高 |
| [#338](https://github.com/nearai/ironclaw/issues/338) | 添加 clippy 复杂度 lint 提升 AI 开发质量 | — | ⭐⭐ 中 |
| [#449](https://github.com/nearai/ironclaw/pull/449) | **RFC**: Structured Collections | — | ⭐⭐⭐ 高 (RFC 阶段) |
| [#378](https://github.com/nearai/ironclaw/pull/378) | EMBEDDING_BASE_URL 支持 OpenAI 兼容嵌入 | — | ⭐⭐⭐ 高 (已 PR) |

### 路线图信号分析

基于当前 PR 队列，下一版本的核心方向可能包括：
1. **多租户安全架构** — #348/#349/#351 三连发
2. **Programmatic Tool Calling (PTC)** — #408 提供无 LLM 轮询的工具调用
3. **AWS Bedrock 支持** — #345 扩展 LLM 提供商版图
4. **Structured Collections** — #449 引入类型化数据层
5. **Anthropic OAuth** — #384 改善身份验证体验

---

## 7. 用户反馈摘要

### 用户痛点

| 场景 | 反馈 |
|------|------|
| **集成困惑** | "I have a credentials.json file, no idea how to use it." — Google Calendar 认证文档不足 |
| **配置不持久** | "Every time I restart my instance, I need to click on activate in the dashboard" — Telegram 通道状态未持久化 |
| **错误信息不透明** | PostgreSQL 迁移失败时无 pgvector 安装指引，Docker 未运行时无自动启动建议 |
| **安全隐患** | Telegram secrets 过滤器触发无限循环，用户必须手动禁用通道 |
| **兼容性** | openai_compatible 后端截断模型名导致 Ollama 调用 404 |

### 用户诉求

- **开箱即用的集成**: 用户期望 `ironclaw tool auth <service>` 能直接工作，无需阅读大量文档
- **透明的错误诊断**: PostgreSQL 版本、pgvector 状态、cloudflared 存在性等应预先检查
- **稳定的通道状态**: 通道配置应在重启后保持活跃
- **安全防护**: 凭证注入失败不应导致通道崩溃

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issue

| Issue | 状态 | 关注原因 |
|-------|------|----------|
| [#268](https://github.com/nearai/ironclaw/issues/268) | OPEN | OpenAI 兼容模型 schema 规范化，影响 web-channel 稳定性 |
| [#352](https://github.com/nearai/ironclaw/issues/352) | OPEN | 自动化 QA 路线图，提及率高但无明确里程碑 |
| [#387](https://github.com/nearai/ironclaw/issues/387) | OPEN | 7 条评论，高热度但未解决 |
| [#439](https://github.com/nearai/ironclaw/issues/439) | OPEN | Registry 更新工作流失败，阻止 WASM 通道/工具安装 |

### 建议关注

1. **#387 Google Calendar 认证** — 高热度用户痛点，建议优先排查
2. **#268 Schema 规范化** — 底层架构问题，影响多个 LLM 后端
3. **#439 Registry 更新** — CI/CD 阻塞问题，影响社区贡献流程

---

*本日报由 AI 助手生成 | 数据来源: GitHub IronClaw (nearai/ironclaw) | 统计周期: 2026-03-01 ~ 2026-03-02*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-02)

## 1. 今日速览

过去24小时内，TinyClaw 项目保持低活跃状态。无新增 Issues，新增 1 个待合并的 PR (#152)，聚焦于为 Claude 和 Codex 代理实现**每线程会话隔离**功能。当前无版本发布，核心开发工作集中在会话管理机制的增强上。项目整体处于功能迭代期，社区参与度较低。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

| PR | 状态 | 描述 |
|---|---|---|
| [#152](https://github.com/TinyAGI/tinyclaw/pull/152) | OPEN (待合并) | **feat: per-thread session isolation for Claude and Codex agents**<br>• 新增 `thread_sessions` 表，追踪 `(agent_id, thread_id) → session_id` 映射<br>• **Claude**: 使用 `--session-id <uuid>` 开启新会话，`-r <uuid>` 恢复会话<br>• **Codex**: 使用类似机制实现会话隔离<br>• 推进了多代理会话管理能力，为多租户场景奠定基础 |

> 该 PR 如合并，将显著提升 TinyClaw 在多用户、多线程场景下的会话管理灵活性，是近期最重要的功能演进。

---

## 4. 社区热点

**无活跃 Issues 或高热度讨论**

---

## 5. Bug 与稳定性

**过去24小时无 Bug 报告**

---

## 6. 功能请求与路线图信号

| 类别 | 内容 | 关联 |
|---|---|---|
| **会话隔离** | 每线程/用户独立会话管理 | PR #152 |

> **路线图信号**：PR #152 的提出表明项目正在强化多代理并发支持，预计后续版本将围绕多租户隔离、会话持久化等方向演进。

---

## 7. 用户反馈摘要

**无新用户反馈记录**

---

## 8. 待处理积压

| 类别 | 内容 | 状态 |
|---|---|---|
| 待合并 PR | #152 - per-thread session isolation | OPEN (2026-03-01) |

> 提醒维护者关注 PR #152 的代码审查与测试，尽早合并以推进项目功能迭代。

---

*数据来源：GitHub TinyClaw 仓库 | 统计周期：2026-03-01 00:00 - 2026-03-02 00:00 (UTC)*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*