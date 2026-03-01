# OpenClaw 生态日报 2026-03-01

> Issues: 500 | PRs: 500 | 覆盖项目: 10 个 | 生成时间: 2026-03-01 15:22 UTC

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

# OpenClaw 项目动态日报（2026-03-01）

## 今日速览

OpenClaw 项目在 2026-03-01 保持高度活跃，24 小时内共处理 500 条 Issues（227 新开/活跃，273 关闭）和 500 条 PRs（411 待合并，89 已合并/关闭）。无新版本发布。社区讨论热度集中在多平台兼容性、浏览器控制稳定性及渠道集成问题上，整体项目处于快速迭代状态。

---

## 社区热点

以下为今日讨论最活跃的 Issues（按评论数排序）：

| Issue | 作者 | 评论数 |  👍 | 状态 | 摘要 |
|-------|------|--------|-----|------|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | @steipete | 30 | 55 | OPEN | **[enhancement, help wanted]** Linux/Windows Clawdbot Apps — macOS、iOS、Android 有应用但 Linux 和 Windows 缺失 |
| [#16862](https://github.com/openclaw/openclaw/issues/16862) | @DUMPDUMPY | 29 | 11 | CLOSED | **[Bug]** Web UI Error: missing scope: operator.read — 升级到 2026.2.14 后 WebUI 部分菜单报错 |
| [#3741](https://github.com/openclaw/openclaw/issues/3741) | @JulienMartel | 21 | 0 | CLOSED | Telegram channel fails to start — auto-enable 逻辑错误地将 channel 写入 plugins.entries |
| [#7631](https://github.com/openclaw/openclaw/issues/7631) | @kuman62 | 19 | 1 | OPEN | Windows: openclaw plugins install fails with spawn EINVAL |
| [#5434](https://github.com/openclaw/openclaw/issues/5434) | @sausix | 17 | 0 | CLOSED | Error: EACCES: permission denied — Docker setup 未创建目录导致访问失败 |
| [#14215](https://github.com/openclaw/openclaw/issues/14215) | @Boss45120 | 15 | 2 | OPEN | Browser Control Broken — Chrome extension relay 和 OpenClaw 管理的浏览器 profile 无法维持稳定连接 |
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | @christian-lallo | 13 | 1 | OPEN | **[Bug]** macOS app v2026.2.26 is arm64-only — 回归问题，Intel Mac 无法使用 |
| [#29420](](https://github.com/openclaw/openclaw/issues/29420) | @KJT125 | 11 | 0 | OPEN | **[Bug]** Discord WebSocket reconnect drops events — 重连后丢失 seq gap 事件，@mentions 丢失 |

**分析**：用户对跨平台应用（Linux/Windows）的需求强烈，同时 macOS 最近的 arm64-only 回归引发广泛关注。浏览器控制稳定性问题也是高频痛点。

---

## Bug 与稳定性

以下为今日报告的重要 Bug，按严重程度排列：

| Issue | 作者 | 状态 | 严重程度 | 描述 | 是否有 Fix PR |
|-------|------|------|----------|------|---------------|
| [#28877](https://github.com/openclaw/openclaw/issues/28877) | @christian-lallo | OPEN | 🔴 高 | macOS app v2026.2.26 is arm64-only — regression vs v2026.2.25 (universal binary) | 无 |
| [#16862](https://github.com/openclaw/openclaw/issues/16862) | @DUMPDUMPY | CLOSED | 🔴 高 | Web UI Error: missing scope: operator.read | 无 |
| [#14215](https://github.com/openclaw/openclaw/issues/14215) | @Boss45120 | OPEN | 🔴 高 | Browser Control Broken — 连接不稳定 | 无 |
| [#29420](https://github.com/openclaw/openclaw/issues/29420) | @KJT125 | OPEN | 🟠 中 | Discord WebSocket reconnect drops events | 无 |
| [#21009](https://github.com/openclaw/openclaw/issues/21009) | @doomsday616 | OPEN | 🟠 中 | Mac App overwrites openclaw.json and strips gateway.auth | 无 |
| [#29462](https://github.com/openclaw/openclaw/issues/29462) | @Tommy00748 | CLOSED | 🟡 低 | Cron job: write tool returns error but file is actually written | 无 |
| [#30305](https://github.com/openclaw/openclaw/issues/30305) | @10067 | OPEN | 🟡 低 | LLM timeout received when chatting with remote ollama server | 无 |

**回归问题**：macOS app v2026.2.26 从 universal binary 变为 arm64-only 是一个关键回归，影响 Intel Mac 用户。

---

## 项目进展

今日合并/关闭的重要 PRs：

| PR | 作者 | 状态 | 类型 | 摘要 |
|----|------|------|------|------|
| [#30733](https://github.com/openclaw/openclaw/pull/30733) | @Takhoffman | CLOSED | maintainer | Issues: unify bug form and subtype auto-labeling — 统一 bug 表单和子类型自动标签 |

**待合并的高优先级 PRs**：

| PR | 作者 | 类型 | 摘要 |
|----|------|------|------|
| [#28761](https://github.com/openclaw/openclaw/pull/28761) | @amitmiran137 | feat(channels) | add suppressOutbound config for listen-only mode |
| [#30679](https://github.com/openclaw/openclaw/pull/30679) | @johnlanni | fix(matrix) | fix DM routing, MSC3916 media, m.mentions, message buffering, and hot-reload allowlist |
| [#30695](https://github.com/openclaw/openclaw/pull/30695) | @sfo2001 | feat(telegram) | inline buttons for exec approvals |
| [#30687](https://github.com/openclaw/openclaw/pull/30687) | @widingmarcus-cyber | fix(failover) | classify Anthropic Max 402 rate limits as rate_limit, not billing |
| [#30627](https://github.com/openclaw/openclaw/pull/30627) | @widingmarcus-cyber | fix(queue) | drain followup queue on run failure to prevent stuck messages |

---

## 功能请求与路线图信号

以下为用户提出的新功能需求，结合已有 PR 判断可能被纳入下一版本：

| Issue/PR | 作者 | 功能描述 | 关联 PR |
|----------|------|----------|---------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | @steipete | Linux/Windows Clawdbot Apps — 需与 macOS 类似功能集 | 无 |
| [#17700](https://github.com/openclaw/openclaw/issues/17700) | @aronchick | feat: atomic config management with validation and crash-loop rollback | 无 |
| [#28761](https://github.com/openclaw/openclaw/pull/28761) | @amitmiran137 | feat(channels): add suppressOutbound config for listen-only mode | **待合并** |
| [#30695](https://github.com/openclaw/openclaw/pull/30695) | @sfo2001 | feat(telegram): inline buttons for exec approvals | **待合并** |

**路线图信号**：
- **listen-only 模式**（#28761）已接近合并，预计下版本可用
- **原子配置管理**（#17700）用户呼声高，解决 gateway crash-loop 问题
- **跨平台应用**（#75）长期需求暂无明确计划

---

## 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点：

1. **多平台兼容性不足**
   - Linux/Windows 缺少官方 App
   - macOS 出现 arm64-only 回归，Intel Mac 用户无法使用
   - Windows 插件安装报错 `spawn EINVAL`

2. **浏览器控制不稳定**
   - Chrome extension relay 和 OpenClaw 管理的浏览器 profile 无法维持稳定连接（#14215）
   - 远程 CDP 被错误报告端口占用（#15582）

3. **渠道集成问题**
   - Telegram、Feishu、Discord 等多渠道存在问题
   - Discord WebSocket 重连丢失事件导致 @mentions 失效

4. **配置管理脆弱**
   - 配置文件修改无效后 gateway 进入 crash-loop，无回滚机制
   - Mac App 覆盖 openclaw.json 导致 gateway 崩溃

---

## 待处理积压

以下为长期未响应的高优先级 Issue，提醒维护者关注：

| Issue | 状态 | 创建时间 | 评论数 | 描述 |
|-------|------|----------|--------|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | OPEN | 2026-01-01 | 30 | Linux/Windows Clawdbot Apps 需求，长期未解决 |
| [#17700](https://github.com/openclaw/openclaw/issues/17700) | OPEN | 2026-02-16 | 5 | 原子配置管理 + crash-loop 回滚，重要功能缺失 |
| [#7631](https://github.com/openclaw/openclaw/issues/7631) | OPEN | 2026-02-03 | 19 | Windows 插件安装问题 |
| [#14215](https://github.com/openclaw/openclaw/issues/14215) | OPEN | 2026-02-11 | 15 | 浏览器控制损坏 |

---

*报告生成时间：2026-03-01 | 数据来源：GitHub OpenClaw/openclaw*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：2026-03-01**

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现**多极分化、加速演进**的格局。以 OpenClaw 为首的头部项目（500 Issues/PR 日更新）处于高速迭代期，持续主导技术路线探索；中间层项目（Zeroclaw、ZeptoClaw、NanoBot、PicoClaw）聚焦差异化功能深耕，在多渠道集成、成本控制、Agent 编排等垂直方向形成技术突破；边缘项目（EasyClaw、TinyClaw）则面临社区活跃度不足的挑战。整体生态正从单点工具向**全渠道、多租户、可扩展**的智能体平台演进，跨平台兼容性、Token 成本优化、多模态交互成为共识性技术方向。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | 版本发布 | 待合并 PR | 社区健康度 |
|------|--------------|------------|----------|-----------|------------|
| **OpenClaw** | 500 (227新开/活跃) | 500 (411待合并) | 无 | ~411 | 🟢 高度活跃 |
| **Zeroclaw** | 50 (33新开) | 50 (46待合并) | 无 | 46 | 🟢 高度活跃 |
| **EasyClaw** | 2 | 0 | 无 | 0 | 🔴 低活跃 |
| **LobsterAI** | 7 | 8 | v0.1.23 | - | 🟡 中等活跃 |
| **ZeptoClaw** | 9 | 10 (8已合并) | 无 | 2 | 🟢 高度活跃 |
| **NanoBot** | 20 (18新开) | 54 (17已合并) | v0.1.4.post3 | 37 | 🟢 高度活跃 |
| **PicoClaw** | 17 | 71 (19已合并) | 无 | 52 | 🟢 高度活跃 |
| **NanoClaw** | 11 | 33 (5已合并) | 无 | 28 | 🟡 中等活跃 |
| **IronClaw** | 19 | 34 (20已合并) | v0.13.0 准备中 | 14 | 🟢 高度活跃 |
| **TinyClaw** | 2 | 2 | 无 | 2 | 🔴 低活跃 |

> 注：健康度评估依据 Issues/PR 产出比、版本发布频率、社区讨论活跃度综合判定。

---

## 3. OpenClaw 在生态中的定位

作为核心参照项目，OpenClaw 在生态中占据**技术标杆与流量入口**的双重角色：

- **社区规模领先**：24 小时内处理 500 条 Issues 和 500 条 PRs，是第二梯队项目的 10 倍量级，形成显著的马太效应
- **功能覆盖面最广**：涵盖浏览器控制、多渠道集成（Telegram/Discord/Feishu）、跨平台应用（macOS/iOS/Android），但 Linux/Windows 桌面应用仍存缺口（Issue #75 积压 2 个月）
- **技术路线差异**：采用通用智能体架构，强调插件生态与渠道集成；相较于 PicoClaw（专注 Rust 高性能）、NanoClaw（专注 WhatsApp 场景）、ZeptoClaw（专注 IoT/MQTT），OpenClaw 更偏向**平台化**而非垂直场景深耕
- **挑战与隐患**：积压 Issue 较多（#75、#17700、#7631、#14215 超过 48 小时未解决），macOS arm64-only 回归（#28877）引发 Intel 用户不满

---

## 4. 共同关注的技术方向

以下需求在多个项目中**同时涌现**，反映行业共识性趋势：

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **多渠道消息统一处理** | Zeroclaw、PicoClaw、NanoClaw、IronClaw | 跨 Telegram/Discord/Feishu/WhatsApp 的统一会话管理与消息路由 |
| **Token/成本优化** | Zeroclaw (#2269)、PicoClaw (#295)、ZeptoClaw (#210)、NanoBot (#1332) | Provider 配额管理、智能模型路由、运行时成本监控 |
| **多模态交互** | ZeptoClaw (#202)、NanoBot (#1387)、LobsterAI (#193) | 图像输入、视觉理解、语音集成 |
| **外部 MCP 服务支持** | Zeroclaw (#1380) | 扩展工具生态，支持外部 MCP 服务器 |
| **Agent 编排/团队协作** | Zeroclaw (#2394)、NanoBot (#1377) | 多 Agent 协作、工作流编排、LangGraph 集成 |
| **Session/上下文管理** | PicoClaw (#950)、TinyClaw (#152)、NanoClaw (#595) | 跨会话持久化、per-thread/per-channel 隔离 |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术栈 | 关键差异点 |
|------|----------|----------|--------|------------|
| **OpenClaw** | 通用智能体平台 | 开发者、企业 | Python/JS | 插件生态最丰富，覆盖渠道最广 |
| **Zeroclaw** | Rust 高性能 Agent | 重视性能与安全 | Rust | 唯一全 Rust 实现，强调类型安全 |
| **PicoClaw** | 嵌入式/轻量 Agent | 边缘计算、物联网 | Rust | 最小化二进制体积，构建时裁剪 |
| **ZeptoClaw** | IoT 智能体 | 智能家居、自动化 | Python | 首个支持 MQTT 通道的智能体 |
| **NanoClaw** | WhatsApp 场景深耕 | 群聊机器人用户 | Node.js | WhatsApp 体验优化（已读、打字、输出拆分） |
| **NanoBot** | 学术/研究用途 | 研究者、多模态探索 | Python | 专注上下文管理、Anthropic 深度集成 |
| **IronClaw** | 企业级部署 | 需 TLS/多租户企业 | Rust | PostgreSQL TLS、多租户工作区、通道状态持久化 |
| **LobsterAI** | 个人 AI 助手 | C 端用户 | Electron | 桌面客户端内置 Python 运行时 |
| **EasyClaw** | 入门级用户 | 新手、非技术用户 | - | 定位模糊，功能严重缺失 |
| **TinyClaw** | 实验性项目 | 极客用户 | Python | 依赖复杂，Windows 兼容性差 |

---

## 6. 社区热度与成熟度

### 活跃度分层

| 层级 | 项目 | 特征 |
|------|------|------|
| **第一梯队（快速迭代）** | OpenClaw、Zeroclaw、ZeptoClaw、NanoBot、PicoClaw、IronClaw | 日均 10+ PR 合并，功能快速推进，有明确路线图 |
| **第二梯队（质量巩固）** | NanoClaw、LobsterAI | 功能框架已定，修复 Bug 为主，偶有新功能 |
| **第三梯队（边缘/起步）** | EasyClaw、TinyClaw | 需求收集阶段或长期停滞，社区参与度低 |

### 成熟度信号

- **版本发布频率**：LobsterAI (v0.1.23)、NanoBot (v0.1.4.post3)、IronClaw (v0.13.0) 保持稳定迭代节奏，发布周期约 2-4 周
- **Issue 响应率**：IronClaw 达到 89.5% 的当日关闭率；OpenClaw 部分高优先级 Issue 响应滞后
- **破坏性变更管理**：IronClaw v0.13.0 明确标注 API 破坏性变更；NanoBot v0.1.4.post3 强调无明显破坏性

---

## 7. 值得关注的趋势信号

### 行业趋势洞察

1. **全渠道智能体平台成为标配**
   - Telegram、Discord、Feishu、WhatsApp、Teams 多渠道统一接入是头部项目共识
   - 预计 2026 下半年将出现渠道治理框架标准化

2. **成本敏感度上升**
   - Zeroclaw (#2269)、PicoClaw (#295)、ZeptoClaw (#210) 同时提出 Token 配额管理需求
   - 反映 AI 智能体从“技术验证”迈向“产品化部署”的成本控制刚需

3. **Rust 在高性能场景加速渗透**
   - Zeroclaw、PicoClaw、IronClaw 三个 Rust 项目均保持高活跃度
   - 预计 Rust 将成为智能体运行时性能优化的首选语言

4. **多 Agent 协作从概念走向实现**
   - Zeroclaw (#2394)、NanoBot (#1377) 均在推进 Agent-Team 编排
   - 下一个技术爆点可能是“智能体工作流编排语言”

5. **边缘/IoT 场景开始升温**
   - ZeptoClaw MQTT 通道、Zeroclaw Teams 通道、PicoClaw 轻量化定位
   - 智能体正从云端向边缘设备延伸

### 对 AI 智能体开发者的建议

- **短期**：优先解决跨平台兼容性（尤其是 Windows/Linux 桌面应用）和 Token 成本控制，这些是用户最直接的痛点
- **中期**：关注多 Agent 编排框架（如 LangGraph 集成）和 MCP 外部工具生态，这将是差异化竞争的关键
- **长期**：布局边缘部署能力（MQTT、轻量化 Rust 运行时）和多模态交互，迎接智能体从“对话工具”向“自主执行体”的范式转变

---

*本报告基于 2026-03-01 各项目 GitHub 公开数据生成，供技术决策者与开源社区参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-01)

## 1. 今日速览

过去 24 小时，Zeroclaw 项目保持高度活跃：共产生 **50 条 Issues 更新**（新开/活跃 33 条，关闭 17 条）和 **50 条 PR 更新**（待合并 46 条，已合并/关闭 4 条）。无新版本发布。项目持续聚焦于功能增强与稳定性提升，核心方向包括外部 MCP 服务器支持、Agent 团队编排、内存管理优化以及多渠道集成（Teams、Feishu、Telegram 等）。社区参与度高，Issue 评论活跃度为近期较高水平。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日共有 **4 个 PR 被合并/关闭**，推进了多个关键功能：

| PR | 状态 | 说明 |
|---|---|---|
| [#2402](https://github.com/zeroclaw-labs/zeroclaw/pull/2402) | ✅ 已合并 | 添加 Microsoft Teams 通道（Bot Framework REST API），实现 `TeamsChannel` 并引入通用 reply-channel 概念 |
| [#2239](https://github.com/zeroclaw-labs/zeroclaw/pull/2239) | ✅ 已合并 | 将 `rust-version` 元数据从 1.87 对齐至 1.88，消除版本混淆 |
| [#2158](https://github.com/zeroclaw-labs/zeroclaw/pull/2158) | ✅ 已合并 | 新增会话作用域配置、通道级运行时命令治理、工具配置文件等核心功能 |
| [#1985](https://github.com/zeroclaw-labs/zeroclaw/pull/1985) | ✅ 已合并 | 修复 Telegram 机器人在群组中对非文本消息的错误回复行为 |

**其他重要待合并 PR：**

- [#1676](https://github.com/zeroclaw-labs/zeroclaw/pull/1676)：为自定义推理提供商添加 TLS CA 证书支持（企业级部署需求）
- [#2394](https://github.com/zeroclaw-labs/zeroclaw/pull/2394)：端到端 Agent 团队编排功能包（XL size，核心新功能）
- [#2374](https://github.com/zeroclaw-labs/zeroclaw/pull/2374)：为 Gemini provider 添加图像输入支持

---

## 4. 社区热点

以下 Issues/PRs 评论最活跃，反映了社区核心关注点：

| Issue/PR | 评论数 | 热度说明 |
|---|---|---|
| [#1380](https://github.com/zeroclaw-labs/zeroclaw/issues/1380) | 9 | **External MCP Server 支持**：社区强烈希望支持外部 MCP 服务器（npm 或远程 MCP），以扩展工具生态 |
| [#2269](Token 消耗 RFI) | 7 | **Token 消耗与成本管理 RFI**：探讨 Agent 工作负载在产品化部署中的成本控制方案，是产品路线图关键信号 |
| [#2388](https://github.com/zeroclaw-labs/zeroclaw/issues/2388) | 6 | **Agent-team 编排深度实现**：提出在仓库内直接实现团队编排评估能力，含 token 效率治理、拓扑基准测试等 |
| [#2263](https://github.com/zeroclaw-labs/zeroclaw/issues/2263) | 6 | **M4-5 多 Crate 工作区拆分**：已关闭，正式启动多 crate 工作区拆分倡议，解决编译时间痛点 |
| [#2291](https://github.com/zeroclaw-labs/zeroclaw/issues/2291) | 5 | **"zeroclaw gateway start" 命令不存在**：文档与实际命令不一致问题，已关闭 |

**分析**：社区讨论集中于三大主题：
1. **扩展性与集成**（MCP、Teams、Feishu）
2. **成本与性能优化**（Token 管理、编译时间、Agent 编排）
3. **文档与 DX**（命令不存在、配置复杂度）

---

## 5. Bug 与稳定性

按严重程度排列的 Bug 报告：

| Issue | 严重程度 | 状态 | 说明 |
|---|---|---|---|
| [#2325](https://github.com/zeroclaw-labs/zeroclaw/issues/2325) | **S1 - workflow blocked** | OPEN | Feishu/Lark 通道编译未包含 `channel-lark` feature，导致通道无法工作 |
| [#2301](https://github.com/zeroclaw-labs/zeroclaw/issues/2301) | **S2 - degraded behavior** | OPEN | Debian 13 Proxmox LXC 环境下 bootstrap.sh 安装失败（Permission denied） |
| [#2168](https://github.com/zeroclaw-labs/zeroclaw/issues/2168) | **S2 - degraded behavior** | OPEN | Web Dashboard Agent tab 因 WebSocket 认证变更导致连接失败，资源不匹配 |
| [#2230](https://github.com/zeroclaw-labs/zeroclaw/issues/2230) | **S0 - data loss/security risk** | CLOSED | Windows 上 `channel-lark` feature 编译失败，已关闭 |
| [#2327](https://github.com/zeroclaw-labs/zeroclaw/pull/2327) | 修复 PR | CLOSED | MCP stdio transport 读取服务器通知为工具响应问题（已合并修复） |
| [#1428](https://github.com/zeroclaw-labs/zeroclaw/issues/1428) | OPEN | 自定义 OpenAI 兼容提供商在 HTTP 516 时错误重试而非降级到原生工具 |

**稳定性总结**：当前有 2 个 S1/S2 级问题待解（Feishu 通道、Agent tab），建议优先处理。

---

## 6. 功能请求与路线图信号

**高价值功能请求**（结合已有 PR 判断可能被纳入下一版本）：

| 功能 | Issue/PR | 优先级信号 |
|---|---|---|
| 外部 MCP 服务器支持 | [#1380](https://github.com/zeroclaw-labs/zeroclaw/issues/1380) | 高（9 评论，7 赞，已有相关 PR #2313） |
| Agent-team 编排 | [#2388](https://github.com/zeroclaw-labs/zeroclaw/issues/2388) + #2394 | 高（PR 已打开，XL size） |
| Gemini 多模态图像输入 | [#2376](https://github.com/zeroclaw-labs/zeroclaw/issues/2376) + #2374 | 高（PR 已打开） |
| Token 消耗与成本管理 | [#2269](Token 消耗 RFI) | 中（产品化路线图信号） |
| xlsx_read 工具 | [#2317](https://github.com/zeroclaw-labs/zeroclaw/issues/2317) | 中（已合并） |
| 内存时间衰减评分 | [#2386](https://github.com/zeroclaw-labs/zeroclaw/issues/2386) | 中 |
| Core memory 类别提升 | [#2378](https://github.com/zeroclaw-labs/zeroclaw/issues/2378) | 中 |

**路线图观察**：
- 多 crate 工作区拆分（M4-5）已正式启动
- Agent 生命周期状态机、停止原因状态机等 RFI 正在讨论中

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的真实用户痛点与使用场景：

| 场景 | 反馈内容 |
|---|---|
| **产品化部署** | 用户反馈运行单个高端模型的 Agent 工作负载成本过高，寻求成本控制方案（#2269） |
| **Chat-based CRM** | 社区用户评估 ZeroClaw 用于 Chat CRM 产品，期望轻量级运行时、多租户支持（#2274） |
| **编译时间** | 开发者频繁抱怨主 crate 编译时间过长，影响迭代效率（#2263） |
| **文档问题** | 首次运行指引中的命令与实际不符（#2291），安装文档缺失（#2283） |
| **Windows 兼容性** | Windows 用户反馈 channel-lark feature 编译失败（#2230） |
| **内存模型** | 用户指出 embedding 模型变更后无法重索引，导致结果错误（#2273） |

**满意度观察**：社区对功能丰富度（如多渠道支持、工具生态）给予肯定，但对文档完整性、安装体验、产品化成本方面存在不满。

---

## 8. 待处理积压

以下 Issues 超过 48 小时未响应或长期停滞，建议维护者关注：

| Issue | 创建时间 | 状态 | 积压说明 |
|---|---|---|---|
| [#2168](https://github.com/zeroclaw-labs/zeroclaw/issues/2168) - Web Dashboard Agent tab 连接失败 | 2026-02-28 | OPEN | S2 级，影响用户体验 |
| [#2325](https://github.com/zeroclaw-labs/zeroclaw/issues/2325) - Feishu 通道 S1 级阻塞 | 2026-03-01 | OPEN | 今日新增 |
| [#1428](https://github.com/zeroclaw-labs/zeroclaw/issues/1428) - 自定义提供商 HTTP 516 处理 | 2026-02-22 | OPEN | 7 天未解决 |
| [#2299](https://github.com/zeroclaw-labs/zeroclaw/issues/2299) - CI 队列饱和多时 | 2026-02-28 | CLOSED | 已关闭但未解决底层问题 |

**PR 积压**：当前有 **46 个 PR 待合并**，队列较长，建议按优先级（安全 > 功能 > 修复 > 文档）排序处理。

---

*报告生成时间：2026-03-01 | 数据来源：GitHub Zeroclaw Labs*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-01)

## 1. 今日速览

今日 EasyClaw 项目保持**低活跃度**状态：无 PR 合并或关闭，亦无新版本发布。社区方面新增 **2 个 Issue**，均处于 Open 状态，主要聚焦于**功能缺失反馈**（多对话支持、任务计划）。Issue #3 附带 2 条讨论，#4 暂无评论。项目当前处于功能需求收集阶段，代码更新暂缓。整体健康度评估：**需求整理期**，建议维护者尽快响应用户诉求以维持社区热情。

---

## 2. 版本发布

本期无新版本发布。

---

## 3. 项目进展

本期无 PR 合并或关闭，项目代码层面暂无推进。

---

## 4. 社区热点

### 🔥 Issue #3：对话不能切换模型，而且不支持多对话同时进行

| 项目 | 内容 |
|------|------|
| **状态** | OPEN |
| **作者** | @gxlqssjf |
| **创建时间** | 2026-03-01 |
| **评论数** | 2 |
| **点赞数** | 0 |
| **链接** | [github.com/gaoyangz77/easyclaw/issues/3](https://github.com/gaoyangz77/easyclaw/issues/3) |

**摘要**：对话不能切换模型，而且不支持多对话同时进行，回复带有结构，不是直接回复内容。

**分析**：该 Issue 反映用户对**多会话管理**及**模型切换灵活性**的强需求，属于**核心交互体验**层面的缺陷。评论数达 2 条，说明可能有其他用户参与讨论或提供复现步骤。考虑到 EasyClaw 定位于个人 AI 助手，该功能缺失将直接影响日常使用场景的便利性。建议优先纳入下一版本开发计划。

---

### Issue #4：缺任务计划和对话记录

| 项目 | 内容 |
|------|------|
| **状态** | OPEN |
| **作者** | @leati |
| **创建时间** | 2026-03-01 |
| **评论数** | 0 |
| **点赞数** | 0 |
| **链接** | [github.com/gaoyangz77/easyclaw/issues/4](https://github.com/gaoyangz77/easyclaw/issues/4) |

**摘要**：用了好多个版本的龙虾，这个是最和我心意的。 就是差个任务计划和对话记录，希望能补上，明天我要给同事推。

**分析**：该 Issue 带有明确的**产品推广意图**（“明天我要给同事推”），表明用户认可当前版本整体体验，但因功能缺失而犹豫。任务计划与对话记录属于**生产力工具**范畴，补充后将提升用户向他人推荐的信心。

---

## 5. Bug 与稳定性

### ⚠️ 高优先级：对话模型切换与多会话支持缺失

- **Issue**: [#3](https://github.com/gaoyangz77/easyclaw/issues/3)
- **严重程度**: 中高（功能缺陷，非崩溃性 Bug）
- **状态**: OPEN，暂无 Fix PR
- **说明**：用户反馈对话无法切换 AI 模型，且不支持多对话并行，该问题影响核心使用流程。

---

## 6. 功能请求与路线图信号

基于今日 Issue 反馈，以下功能需求明确，建议纳入路线图：

| 功能 | 优先级 | 来源 Issue |
|------|--------|------------|
| **多对话并行支持** | 高 | #3 |
| **AI 模型切换能力** | 高 | #3 |
| **任务计划功能** | 中高 | #4 |
| **对话历史记录** | 中高 | #4 |

结合无 PR 推进的现状，判断项目当前处于**需求收集阶段**，建议维护者通过 Project Board 或 Milestone 明确下一版本迭代目标。

---

## 7. 用户反馈摘要

### 核心痛点
1. **功能完整性不足**：多对话、模型切换、任务计划、对话记录等生产力功能缺失。
2. **使用场景受限**：用户提及“给同事推”时犹豫，担忧功能短板影响团队推广。

### 积极信号
- **产品认可度高**：Issue #4 作者明确表示“用了好多个版本的龙虾，这个是最和我心意的”，表明 EasyClaw 在竞品中具备吸引力。
- **社区参与意愿强**：用户主动反馈并愿意推荐他人，具备口碑传播潜力。

### 改进方向
- 补齐生产力功能（任务计划、对话记录）
- 增强多会话管理能力
- 优化回复格式，支持直接内容输出

---

## 8. 待处理积压

| Issue | 描述 | 积压时长 | 建议 |
|-------|------|----------|------|
| [#3](https://github.com/gaoyangz77/easyclaw/issues/3) | 对话模型切换与多会话支持 | 当日新增 | 尽快回应，纳入迭代计划 |
| [#4](https://github.com/gaoyangz77/easyclaw/issues/4) | 任务计划和对话记录 | 当日新增 | 正面回应用户，展示路线图规划 |

**提醒**：两条 Issue 均为当日新增，暂无积压问题。但维护者**应在 24-48 小时内**给予初步响应，避免用户期待落空。

---

*本日报基于 2026-03-01 GitHub 公开数据生成，仅供参考。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期**: 2026-03-01

---

## 1. 今日速览

LobsterAI 项目在 2026-03-01 保持高度活跃，共计 7 条 Issues 更新和 8 条 PR 更新，并发布了 v0.1.23 新版本。社区重点关注多提供商模型选择歧义修复、Windows 捆绑 Python 运行时支持等核心功能。用户反馈主要集中在非阿里模型兼容性、OAuth 支持、Session 稳定性等方面，整体项目处于稳步迭代状态。

---

## 2. 版本发布

### v0.1.23 发布

**发布状态**: ✅ 已发布 | **发布日期**: 2026-03-01

#### New Features

| PR | 描述 | 作者 |
|---|---|---|
| [#192](https://github.com/netease-youdao/LobsterAI/pull/192) | 添加捆绑的 Windows Python 运行时支持 | @fisherdaddy |
| [#193](https://github.com/netease-youdao/LobsterAI/pull/193) | Skill 优化 | @liuzhq1986 |

**更新内容**: Windows 包现在内置了便携式 Python 解释器，用户无需手动安装 Python。运行时在启动时同步到 userData 并注入到 PATH，供协作会话、skills 和 skill 服务使用。

#### Bug Fixes

| PR | 描述 | 作者 |
|---|---|---|
| [#194](https://github.com/netease-youdao/LobsterAI/pull/194) | 通过 provider key 消除模型选择的歧义 | @fisherdaddy |

**迁移注意事项**: 无重大破坏性变更，建议用户更新以获得更好的模型选择体验。

---

## 3. 项目进展

以下 PR 已于今日合并/关闭，项目功能得到显著推进：

| PR # | 状态 | 类型 | 描述 | 影响 |
|------|------|------|------|------|
| [#192](https://github.com/netease-youdao/LobsterAI/pull/192) | ✅ Closed | Feature | 添加捆绑 Windows Python 运行时 | 降低 Windows 用户使用门槛 |
| [#194](https://github.com/netease-youdao/LobsterAI/pull/194) | ✅ Closed | Bug Fix | 通过 provider key 消除模型选择歧义 | 修复多提供商模型冲突 |
| [#193](https://github.com/netease-youdao/LobsterAI/pull/193) | ✅ Closed | Feature | Skill 优化 | 提升 Skill 能力 |
| [#167](https://github.com/netease-youdao/LobsterAI/pull/167) | ✅ Closed | Bug Fix | 解决自定义邮箱高级设置的 bug | 优化用户体验 |
| [#160](https://github.com/netease-youdao/LobsterAI/pull/160) | ✅ Closed | Bug Fix | 修复 websearch skills 中文乱码 | 提升中文用户使用体验 |
| [#129](https://github.com/netease-youdao/LobsterAI/pull/129) | ✅ Closed | Feature | 支持系统代理设置，默认关闭 | 增强网络配置灵活性 |
| [#123](https://github.com/netease-youdao/LobsterAI/pull/123) | ✅ Closed | Bug Fix | 修复 MiniMax OpenAI 无效参数错误 | 兼容更多模型提供商 |
| [#127](https://github.com/netease-youdao/LobsterAI/pull/127) | ✅ Closed | Bug Fix | 修复设置中的默认模型问题 | 改善配置持久化 |

**今日合并/关闭 PR 数量**: 8

---

## 4. 社区热点

以下 Issues 讨论活跃度较高：

| Issue # | 标题 | 评论数 | 状态 |
|---------|------|--------|------|
| [#187](https://github.com/netease-youdao/LobsterAI/issues/187) | 非阿里模型好像都不能用 | 2 | 🔴 OPEN |
| [#185](https://github.com/netease-youdao/LobsterAI/issues/185) | 建议custom供应商支持 openai 的新格式，目前 gpt-5.3-codex 用不了 | 2 | 🔴 OPEN |

### 热点分析

**#187 非阿里模型不能使用**: 多位用户反馈非阿里云提供的模型均无法使用，怀疑存在提供商兼容性问题。这可能影响用户使用其他 LLM 提供商（如 OpenAI、Claude 等）的体验。建议开发团队重点排查模型初始化逻辑。

**#185 OpenAI 新格式支持**: 用户明确提出需要支持 OpenAI 最新的 Responses API 格式，以适配 GPT-5.3-codex 等新模型。这是技术演进需求，有一定前瞻性。

---

## 5. Bug 与稳定性

### 今日报告的 Bug

| Issue # | 严重程度 | 描述 | 是否已有 Fix PR |
|---------|----------|------|-----------------|
| [#191](https://github.com/netease-youdao/LobsterAI/issues/191) | 🔴 High | 单个 session 多次对话后出现 API Error (tool_calls 缺失响应) | ❌ 无 |
| [#188](https://github.com/netease-youdao/LobsterAI/issues/188) | 🔴 High | Skill 默认全开但无法调用（cygpath 依赖问题） | ❌ 无 |
| [#195](https://github.com/netease-youdao/LobsterAI/issues/195) | 🟡 Medium | 邮箱 SKILL 搜不到发票类型的自动发信邮件 | ❌ 无 |

### 稳定性问题分析

**#191** 属于严重功能性 bug，用户在多轮对话后无法继续使用，且错误信息指向 tool_calls 响应机制缺失，影响核心聊天功能。**#188** 涉及 Windows 环境下的 cygpath 依赖，导致 skill 功能完全不可用。两个问题均需优先处理。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue # | 功能描述 | 需求来源 | 评估 |
|---------|----------|----------|------|
| [#185](https://github.com/netease-youdao/LobsterAI/issues/185) | Custom 提供商支持 OpenAI 新格式 (Responses API) | @lifang336 | ⭐⭐⭐ 有望纳入 |
| [#189](https://github.com/netease-youdao/LobsterAI/issues/189) | 支持 OpenAI OAuth 认证 | @yangwang2 | ⭐⭐ 规划中 |
| [#190](https://github.com/netease-youdao/LobsterAI/issues/190) | 最大对话数限制及历史会话恢复 | @jojogh | ⭐⭐ 需澄清需求 |

### 路线图信号分析

从 PR [#192](https://github.com/netease-youdao/LobsterAI/pull/192) 和 [#193](https://github.com/netease-youdao/LobsterAI/pull/193) 来看，下一版本可能继续围绕 **多提供商兼容**、**Skill 能力增强**、**Windows 体验优化** 三个方向迭代。OpenAI 新 API 格式支持需求明确，建议纳入近期路线图。

---

## 7. 用户反馈摘要

### 真实痛点与使用场景

| 类别 | 反馈内容 | 来源 Issue |
|------|----------|------------|
| **兼容性** | 非阿里模型全部无法使用 | #187 |
| **稳定性** | 多轮对话后出现 tool_calls 错误 | #191 |
| **配置** | Skill 全开但无法调用，cygpath 问题 | #188 |
| **数据** | 历史会话更新后丢失 | #190 |
| **功能** | 需要 OpenAI OAuth 支持 | #189 |

### 满意度分析

- **满意度提升**: Windows 捆绑 Python 运行时得到积极评价（PR #192）
- **不满集中点**: 多提供商支持、Session 稳定性、历史数据持久化

---

## 8. 待处理积压

以下 Issue 超过 24 小时未获响应，建议维护者关注：

| Issue # | 标题 | 创建时间 | 状态 |
|---------|------|----------|------|
| [#188](https://github.com/netease-youdao/LobsterAI/issues/188) | Skill 默认是全开的，但是啥都调用不了 | 2026-02-28 | 🔴 OPEN |
| [#195](https://github.com/netease-youdao/LobsterAI/issues/195) | 邮箱 SKILL 搜不到发票类型的自动发信邮件 | 2026-03-01 | 🔴 OPEN |
| [#190](https://github.com/netease-youdao/LobsterAI/issues/190) | LobsterAI可以支持的最大对话数是多少，如何恢复历史会话 | 2026-03-01 | 🔴 OPEN |
| [#189](https://github.com/netease-youdao/LobsterAI/issues/189) | 请问支持openai的OAuth 吗？ | 2026-03-01 | 🔴 OPEN |

**提醒**: Issue #188 涉及 Skill 核心功能不可用，建议优先响应。

---

*报告生成时间: 2026-03-01 | 数据来源: GitHub LobsterAI Repository*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-03-01

---

## 1. 今日速览

2026年3月1日，ZeptoClaw 项目保持高度活跃。过去24小时内，社区提交了 **9 条 Issues**（1 条新开、8 条关闭）和 **10 条 PRs**（2 条待合并、8 条已合并/关闭），且无新版本发布。值得关注的是，今日 **8 个 Issues 和 8 个 PRs 同时闭合**，呈现出一个高效的工作节奏。今日的合并涵盖了多项重要功能——包括 MQTT 物联网通道、DeepSeek/Kimi 模型支持、Provider 配额管理、OpenAI OAuth 认证以及多模态视觉输入——显示出项目在多维度功能扩展上的快速推进。整体健康度评估为 **良好**。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日项目闭合了 **8 个 Pull Requests**，推进了多个关键功能模块：

| PR | 标题 | 状态 | 关联 Issue | 进展说明 |
|---|---|---|---|---|
| [#210](https://github.com/qhkm/zeptoclaw/pull/210) | feat(quota): per-provider usage quota management | CLOSED | #200 | 实现每个 Provider 的使用配额管理，支持费用/Token 限制，可配置拒绝、降级或警告操作 |
| [#208](https://github.com/qhkm/zeptoclaw/pull/208) | feat(providers): add DeepSeek and Kimi support | CLOSED | #207 | 新增 DeepSeek 和 Kimi (Moonshot AI) 作为 OpenAI 兼容 Provider，支持 V3/R1 等模型 |
| [#209](https://github.com/qhkm/zeptoclaw/pull/209) | feat(channels): add MQTT channel for IoT device communication | CLOSED | #199 | 新增 MQTT 通道，支持 ESP32/RPi/Arduino 等物联网设备通过 WiFi/网络通信 |
| [#206](https://github.com/qhkm/zeptoclaw/pull/206) | feat(tools): add DOCX text extraction tool | CLOSED | #201 | 新增 `docx_read` 工具，补充现有的 PDF 读取能力 |
| [#205](https://github.com/qhkm/zeptoclaw/pull/205) | feat(auth): OpenAI OAuth / Codex CLI auth login | CLOSED | #203 | 支持从 Codex CLI 导入认证令牌，新增 `auth login openai` 命令 |
| [#202](https://github.com/qhkm/zeptoclaw/pull/202) | feat: add multimodal vision/image input support | CLOSED | #197 | 新增多模态视觉/图像输入支持，扩展消息附件为多图数组 |
| [#204](https://github.com/qhkm/zeptoclaw/pull/204) | docs: add disclaimer — no token, no crypto, no blockchain | CLOSED | — | README 新增免责声明，明确项目不涉及代币/加密货币/区块链 |
| [#195](https://github.com/qhkm/zeptoclaw/pull/195) | fix(safety): block destructive git operations in shell blocklist | CLOSED | #194 | 通过 shell 阻止破坏性 git 操作（push --force、reset --hard 等） |

---

## 4. 社区热点

今日最活跃的讨论集中于 **Issue #193**（LLM endpoint switching on the fly in telegram）：

- **标题**：[feat] LLM endpoint switching on the fly in telegram
- **链接**：https://github.com/qhkm/zeptoclaw/issues/193
- **作者**：@superhero75
- **状态**：OPEN
- **评论数**：3
- **摘要**：用户提议在 Telegram 中通过 `/models` 和 `/model` 命令动态切换 LLM 端点或模型，以应对大多数 LLM 端点的速率限制问题。

**分析**：该需求反映了多 Provider 环境下用户对灵活性的诉求。结合今日已合并的 #208（DeepSeek/Kimi 支持）和 #210（配额管理），项目正在构建多模型、多 Provider 的完整生态，此功能请求恰好契合路线图方向。

---

## 5. Bug 与稳定性

今日无新增 Bug 报告。已有一个安全相关修复合并：

| Issue | 标题 | 严重程度 | 状态 | 修复 PR |
|---|---|---|---|---|
| [#194](https://github.com/qhkm/zeptoclaw/issues/194) | [bug, area:safety] fix: add git-dangerous patterns to shell blocklist | **中** | CLOSED | [#195](https://github.com/qhkm/zeptoclaw/pull/195) |

**详情**：通过 DelegateTool 委托的子代理默认拥有 shell 工具访问权限，虽 git 工具本身安全（无 push/force-push），但子代理可通过 shell 执行破坏性 git 命令（如 `git push --force`、`git reset --hard`、`git rebase`）影响共享分支。修复已在 #195 中合入。

---

## 6. 功能请求与路线图信号

今日共提出 **1 个新功能请求**（Issue #193），同时多个功能已在今日通过 PR 合并得到实现：

### 新增功能请求
- **Issue #193**：在 Telegram 中动态切换 LLM 端点/模型 — 已有 3 条评论，社区反馈积极

### 已实现功能（今日合并 PR）
从 PR 列表判断，以下功能将在下一版本中可用：
- **多 Provider 配额管理**（#210 / #200）
- **DeepSeek & Kimi 模型支持**（#208 / #207）
- **MQTT 物联网通道**（#209 / #199）
- **DOCX 文本提取工具**（#206 / #201）
- **OpenAI OAuth / Codex CLI 认证**（#205 / #203）
- **多模态视觉/图像输入**（#202 / #197）
- **Shell 安全加固**（#195 / #194）

**路线图信号**：项目正朝着 **多模型灵活切换**、**多通道扩展**（MQTT）、**安全性强化** 和 **多模态交互** 方向发展。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的用户痛点与诉求：

1. **速率限制痛点**：Issue #193 中用户反馈多数 LLM 端点存在速率限制，迫切需要在运行时动态切换端点或模型的能力。
2. **文档澄清需求**：项目新增了 #204 文档更新，明确澄清与代币/加密货币无关，反映出社区对项目定位的关注。
3. **物联网通信需求**：Issue #199 显示用户希望物联网设备（ESP32、RPi 等）能通过 WiFi/网络而非仅通过串口与 Zeptoclaw 通信——该需求已通过 #209 MQTT 通道实现。
4. **文件格式支持**：Issue #201 指出 Zeptoclaw 能读取 PDF 但无法处理 DOCX，用户在商务场景中经常发送 Word 文档——该需求已通过 #206 DOCX 工具解决。

---

## 8. 待处理积压

以下为当前仍处于 **OPEN** 状态的重要 Issue/PR，值得维护者关注：

| 编号 | 类型 | 标题 | 创建时间 | 状态 | 备注 |
|---|---|---|---|---|---|
| [#193](https://github.com/qhkm/zeptoclaw/issues/193) | Issue | [feat] LLM endpoint switching on the fly in telegram | 2026-02-27 | OPEN | 社区活跃讨论中，涉及多模型切换需求 |
| [#211](https://github.com/qhkm/zeptoclaw/pull/211) | PR | feat(providers): add Azure OpenAI and Amazon Bedrock provider presets | 2026-03-01 | OPEN | 等待合并，新增 Azure OpenAI 和 Bedrock 预设 |
| [#183](https://github.com/qhkm/zeptoclaw/pull/183) | PR | chore: Update dependencies | 2026-02-26 | OPEN | 依赖更新，阻塞 reqwest 0.12 → 0.13 升级（见 Issue #184） |

**提醒**：
- **#193** 为社区高度关注的功能请求，建议评估是否纳入下一版本路线图
- **#183** 依赖更新 PR 已开放较长时间（4 天），建议尽快处理
- **#184**（reqwest 升级阻塞）已关闭，标记为等待上游 gogcli-rs 更新后处理

---

*本报告基于 2026-03-01 24:00 UTC 前的 GitHub 数据生成。*

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-01)

## 1. 今日速览

2026年3月1日，NanoBot 项目保持高度活跃状态。过去24小时内，共产生 **20 条 Issues 更新**（新开/活跃18条，关闭2条）和 **54 条 PR 更新**（待合并37条，已合并/关闭17条）。新版本 **v0.1.4.post3** 正式发布，包含33个PR合并和16位新贡献者，重点优化了上下文管理和会话历史处理。当前项目处于快速迭代期，功能增强与 Bug 修复并行推进，社区参与度较高。

---

## 2. 版本发布

### v0.1.4.post3 🆕

> 🐈 *nanobot v0.1.4.post3* just dropped — 33 PRs merged, 16 new contributors! You guys are unstoppable 🔥

**更新重点：**
- **更清晰的上下文**：减少了 Agent 视野中的"垃圾信息"，降低幻觉输出
- **强化的会话历史**：session history 机制更加健壮
- **减少 Ghost Messages**：优化了消息处理流程

**破坏性变更：** 无明显破坏性变更  
**迁移注意事项：** 建议阅读 CHANGELOG 确认具体配置项变更

📎 Release链接: https://github.com/HKUDS/nanobot/releases

---

## 3. 项目进展

今日合并/关闭的重要 PR 及推进的功能：

| PR # | 标题 | 状态 | 说明 |
|------|------|------|------|
| #1233 | feat: add async event injection mechanism for user interruption | ✅ CLOSED | 用户中断机制，支持异步事件注入 |
| #1331 | Heartbeat 工具参数解析不稳修复 | ✅ CLOSED | 增强参数解析健壮性，支持 JSON 字符串解析 |
| #1370 | feat(tool): add web search proxy | ✅ CLOSED | 新增 Web 搜索代理功能 |
| #1375 | feat(cron): improve cron job context handling | ✅ CLOSED | 定时任务上下文处理改进 |
| #1105 | Add Qwen OAuth support | ✅ CLOSED | 新增 Qwen OAuth 认证支持 |
| #1384 | fix(feishu): split card messages when content has multiple tables | ✅ OPEN | 修复飞书多表格消息被拒问题 |
| #1386 | fix(providers): strip thinking_blocks for non-Anthropic providers | ✅ OPEN | 修复跨模型 reasoning 内容兼容性问题 |
| #1385 | fix(providers): preserve reasoning_details for multi-turn tool calling | ✅ OPEN | 修复多轮工具调用中 reasoning 丢失问题 |
| #1376 | fix(agent): respect send_progress/send_tool_hints config in gateway mode | ✅ OPEN | 修复 gateway 模式下配置不生效问题 |

**推进的关键能力：**
- 🤖 **Agent 中断机制**：用户可异步中断正在执行的 Agent 任务
- 🔧 **Provider 兼容性**：Anthropic 扩展思考模式与其它模型的兼容处理
- 📅 **定时任务改进**：Cron 任务现在能正确识别系统驱动的提醒
- 🔍 **Web 搜索增强**：新增代理支持，优化搜索能力
- 💬 **多平台消息处理**：飞书多表格、企业微信认证等

---

## 4. 社区热点

今日讨论最活跃的 Issues/PRs：

### 🔥 Issues 热点

1. **#623** - Persistent "Tool Not Found" Errors for Custom Skills
   - 👥 评论: 5 | 👍: 1
   - 链接: https://github.com/HKUDS/nanobot/issues/623
   - **诉求**：自定义技能（如 google_calendar, ha-voice）持续报 "Tool Not Found" 错误

2. **#1265** - 【建议】在Windows上实测对比openclaw和nanobot的建议
   - 👥 评论: 5 | 👍: 0
   - 链接: https://github.com/HKUDS/nanobot/issues/1265
   - **诉求**：用户实测对比建议.nanobot 在 Windows 兼容性上有优势，建议加大推广

3. **#140** - Do you have any plans to support GitHub Copilot providers?
   - 👥 评论: 5 | 👍: 4
   - 链接: https://github.com/HKUDS/nanobot/issues/140
   - **诉求**：希望支持 GitHub Copilot 作为 Provider

4. **#1332** - 消耗的token好多啊，发个"hello"，输入token要5千多
   - 👥 评论: 2 | 👍: 0
   - 链接: https://github.com/HKUDS/nanobot/issues/1332
   - **诉求**：Token 消耗过高问题，用户反映简单消息消耗 5000+ tokens

5. **#1318** - About bot repeated reply messages
   - 👥 评论: 2 | 👍: 0
   - 链接: https://github.com/HKUDS/nanobot/issues/1318
   - **诉求**：安装 skill 后机器人重复回复消息

### 🔥 PRs 热点

1. **#1387** - feat: add Anthropic extended thinking support alongside reasoning_effort
   - 链接: https://github.com/HKUDS/nanobot/pull/1387
   - **亮点**：新增双模式思考支持，Anthropic 模型可使用 extended thinking

2. **#1341** - feat: web chat channel with SSE token streaming and multi-session UI
   - 链接: https://github.com/HKUDS/nanobot/pull/1341
   - **亮点**：新增自包含浏览器聊天界面，支持 SSE 流式输出

3. **#1377** - feat: Integrate deepagents framework as backend
   - 链接: https://github.com/HKUDS/nanobot/pull/1377
   - **亮点**：集成 deepagents 框架，支持 LangGraph-based agent

---

## 5. Bug 与稳定性

今日报告的 Bug，按严重程度排列：

### 🔴 高优先级

| Issue # | 问题描述 | 严重程度 | 状态 | Fix PR |
|---------|----------|----------|------|--------|
| #1380 | [Bug] Telegram: groupPolicy: "mention" is ignored in v0.1.4.post3 | 🔴 高 | OPEN | - |
| #1365 | [Bug] nanobot frequently "Terminated" when executing complex tasks on Linux | 🔴 高 | OPEN | - |
| #1344 | Invalid type for 'messages.[0].content' error (QQ robot) | 🔴 高 | OPEN | #1386 |
| #1363 | 子 Agent 对话历史完全丢失 - 没有 Session 存储 | 🔴 高 | OPEN | - |

### 🟡 中优先级

| Issue # | 问题描述 | 严重程度 | 状态 | Fix PR |
|---------|----------|----------|------|--------|
| #1382 | Feishu markdown table error: card table number over limit | 🟡 中 | OPEN | #1384 |
| #1353 | ClawHub rate limit issue | 🟡 中 | OPEN | - |
| #1358 | Authentication Error with OpenAI Codex in Docker | 🟡 中 | OPEN | - |
| #1350 | send_progress and send_tool_hints config not working in gateway mode | 🟡 中 | OPEN | #1376 |

### 🟢 低优先级

| Issue # | 问题描述 | 严重程度 | 状态 |
|---------|----------|----------|------|
| #1343 | QQ机器人只读文件系统错误 '/botpy.log' | 🟢 低 | CLOSED |
| #1373 | Nanobot channels login error | 🟢 低 | OPEN |

---

## 6. 功能请求与路线图信号

用户提出的新功能需求及纳入下一版本的可能性分析：

### 🚀 高可能性纳入

| Issue # | 功能请求 | 分析 |
|---------|----------|------|
| #1378 | Universal Tool Orchestrator: Parallel Execution & Dependency Injection | 有对应 PR 思路，支持复杂工作流 |
| #1334 | Telegram Reaction Support | 已有 OPEN issue，需实现消息反应接收 |
| #1302 | per-session working directory isolation | 提升多会话隔离性，用户刚需 |

### 🤔 值得讨论

| Issue # | 功能请求 | 分析 |
|---------|----------|------|
| #140 | GitHub Copilot providers 支持 | 长期需求，可作为 Provider 扩展 |
| #1366 | policy-driven retries and fallback model | PR #1366 已有实现，可期待 |
| #1367 | kimi-coding model mapping | PR #1367 已有实现 |
| #1387 | Anthropic extended thinking | PR #1387 已在处理 |

### 💡 长期路线图信号

- **多端同步**：agent 与 gateway 共享 skills (#1328)
- **Web UI 增强**：PR #1341 正在推进 Web Channel
- **深度框架集成**：PR #1377 集成 deepagents

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点与使用场景：

### 😤 痛点

1. **Token 消耗过高**
   - 用户反映发送 "hello" 消耗 5000+ tokens，安装 skill 消耗 30000+ tokens
   - 场景：成本敏感用户，关注运行成本

2. **自定义技能安装困难**
   - google_calendar, ha-voice 等技能报 "Tool Not Found"
   - 场景：技能开发者，希望平滑使用第三方技能

3. **Windows 兼容性**
   - openclaw 需在 WSL 运行，nanobot 无需 WSL 是优势
   - 场景：Windows 用户基数大，是获客机会点

4. **Gateway 与 Agent 技能不同步**
   - agent 创建的技能在 gateway 中不可见
   - 场景：开发者本地创建技能，用户远程使用

### 😃 正面反馈

- nanobot 在 Windows 上优于 openclaw
- 部署简单，无需 WSL
- 响应速度快
- 项目活跃度高，33 PRs 合并，16 位新贡献者

---

## 8. 待处理积压

提醒维护者关注的长期未响应重要 Issue：

| Issue # | 标题 | 创建时间 | 状态 | 关注原因 |
|---------|------|----------|------|----------|
| #140 | GitHub Copilot providers 支持计划 | 2026-02-05 | OPEN | 长期需求，4 人点赞 |
| #623 | Custom Skills "Tool Not Found" 错误 | 2026-02-14 | OPEN | 活跃讨论，5 条评论 |
| #1302 | per-session working directory isolation | 2026-02-27 | OPEN | 多会话隔离刚需 |
| #1353 | ClawHub rate limit issue | 2026-02-28 | OPEN | 影响技能安装 |

---

*📊 本报告基于 2026-03-01 GitHub 数据生成*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-01)

## 1. 今日速览

PicoClaw 项目在 2026-03-01 展现出极高的开发活跃度。过去 24 小时内共产生 88 条事件更新（17 条 Issues + 71 条 PRs），其中 52 个 PR 处于待合并状态，19 个已合并/关闭。新开 Issues 9 个，关闭 8 个。社区正在同时推进多个重大重构项目（Session 管理、Channel 系统、Agent 系统），代码合并节奏紧凑，整体项目处于快速迭代期。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 重点合并/关闭的 PR

| PR | 状态 | 描述 | 推进内容 |
|---|---|---|---|
| [#916](https://github.com/sipeed/picoclaw/pull/916) | CLOSED | docs: 同步 READMEs、示例和 channel 文档 | 更新配置示例、同步多语言文档、修正 Discord/LINE/WeCom 字段 |
| [#861](https://github.com/sipeed/picoclaw/pull/861) | CLOSED | refactor: 应用 safe modernize 修复 | 代码现代化重构，改进循环/标准库用法 |
| [#911](https://github.com/sipeed/picoclaw/pull/911) | CLOSED | fix: 预编译正则表达式替代运行时编译 | 性能优化，避免每次调用重复编译正则 |
| [#919](https://github.com/sipeed/picoclaw/pull/919) | CLOSED | fix: 改进 GitHub Copilot provider 错误处理 | 修复被忽略的错误返回值，改善错误信息 |
| [#950](https://github.com/sipeed/picoclaw/pull/950) | CLOSED | feat: Session 管理 | 完整实现跨通道命令注册基础架构 |

### 重点推进的功能 PR

| PR | 状态 | 描述 | 阶段 |
|---|---|---|---|
| [#959](https://github.com/sipeed/picoclaw/pull/959) | OPEN | Session 管理 Phase 1: 跨通道命令注册 | 第 1/3 阶段 |
| [#960](https://github.com/sipeed/picoclaw/pull/960) | OPEN | Session 管理 Phase 2: Scope 感知会话轮换 | 第 2/3 阶段 |
| [#961](https://github.com/sipeed/picoclaw/pull/961) | OPEN | Session 管理 Phase 3: 命令执行集中化 | 第 3/3 阶段 |
| [#954](https://github.com/sipeed/picoclaw/pull/954) | OPEN | fix: 将 'free' 模型映射到 openrouter/auto | 解决 #901 |
| [#944](https://github.com/sipeed/picoclaw/pull/944) | OPEN | feat: 为 exec 工具添加可配置超时 | 对应 #906 |
| [#953](https://github.com/sipeed/picoclaw/pull/953) | OPEN | feat: 构建配置支持 channel 包含/排除 | 对应 #923 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 主题 | 热度分析 |
|---|---|---|---|
| [#901](https://github.com/sipeed/picoclaw/issues/901) | 11 | [BUG] 无法添加 openrouter/free 模型 | **已修复** - 社区关注度高，已被 #954 修复 |
| [#4](https://github.com/sipeed/picoclaw/issues/4) | 11 | 网关未在局域网被发现 | 早期 Issue，已关闭，用户环境问题可能性大 |
| [#295](https://github.com/sipeed/picoclaw/issues/295) | 9 | 功能：智能模型路由 (成本与性能优化) | **路线图级** - 核心功能规划，引发成本优化讨论 |
| [#621](https://github.com/sipeed/picoclaw/issues/621) | 5 | [Refactor] Channel 系统重构 | 进度 83% (10/12 阶段)，高优先级重构 |
| [#671](https://github.com/sipeed/picoclaw/issues/671) | 4 | [BUG] gateway status 启动额外工作进程 | 稳定性 Bug，已关闭 |
| [#386](https://github.com/sipeed/picoclaw/issues/386) | 4 | [BUG] exec 工具误拦截 URL 命令 | 已关闭 |

### 热点分析

**#901 (openrouter/free 模型问题)** 是今日最热话题，评论数达 11 条。该问题影响用户使用免费模型层，已通过 PR #954 修复，将 "free" 别名自动映射到 "openrouter/auto"。

**#295 (智能模型路由)** 引发 9 条评论，这是路线图级别的功能需求，提出根据任务复杂度自动选择合适模型以优化成本，吸引社区对成本控制功能的关注。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度）

| Issue | 严重程度 | 描述 | Fix PR |
|---|---|---|---|
| [#958](https://github.com/sipeed/picoclaw/issues/958) | **高** | 模型 "llama3.2" 未找到于 model_list | 无 - 需用户检查配置 |
| [#945](https://github.com/sipeed/picoclaw/issues/945) | **高** | voice 包未使用，v0.2.0 语音功能损坏 | 无 |
| [#794](https://github.com/sipeed/picoclaw/issues/794) | **中** | Codex API gpt-5.3-codex 返回 400 错误 | 无 |
| [#671](https://github.com/sipeed/picoclaw/issues/671) | **中** | gateway status 启动额外工作进程 | 已关闭 |

### 稳定性问题信号

- **语音功能回归**：Issue #945 报告 v0.2.0 语音功能完全损坏，`voice.GroqTranscriber` 未被引用，暂无 Fix PR，**需重点关注**
- **模型配置问题**：Issue #958 集中出现，用户配置 ollama 模型时频繁遇到 model_list 错误

---

## 6. 功能请求与路线图信号

### 新功能请求（附 PR 状态）

| Issue | 功能 | 预期版本 | 关联 PR |
|---|---|---|---|
| [#295](https://github.com/sipeed/picoclaw/issues/295) | 智能模型路由 (自动选择最佳成本/性能模型) | 路线图 | 无 |
| [#880](https://github.com/sipeed/picoclaw/issues/880) | Telegram API 自定义基础 URL 支持 | 可能在下一版本 | 无 |
| [#906](https://github.com/sipeed/picoclaw/issues/906) | 工具执行可配置超时 | 下一版本 | [#944](https://github.com/sipeed/picoclaw/pull/944) |
| [#923](https://github.com/sipeed/picoclaw/issues/923) | 构建时跳过不需要的功能 | 可能在下一版本 | [#953](https://github.com/sipeed/picoclaw/pull/953) |
| [#948](https://github.com/sipeed/picoclaw/issues/948) | 通用文件附件支持（跨平台） | 路线图 | 无 |
| [#949](https://github.com/sipeed/picoclaw/pull/949) | Telegram 运行时模型切换 | 开发中 | [#949](https://github.com/sipeed/picoclaw/pull/949) |

### 路线图信号判断

1. **Session 管理** - 三个 Phase PR 均已打开，预计近期合并
2. **Channel 系统重构** - 进度 83%，接近完成
3. **构建配置化** - #953 添加 build.yaml 支持，满足轻量部署需求
4. **多渠道能力扩展** - Feishu (飞书)、XiaoYi (小一) 渠道支持持续添加

---

## 7. 用户反馈摘要

### 真实痛点与场景

| Issue | 用户痛点 | 场景 |
|---|---|---|
| [#901](https://github.com/sipeed/picoclaw/issues/901) | 无法使用 openrouter 的 "free" 模型 | 用户在 Ubuntu 上使用 picoclaw agent -m "hi" 时遇到模型配置问题 |
| [#4](https://github.com/sipeed/picoclaw/issues/4) | 局域网无法发现网关 | 用户在 Ubuntu 24.04 (AMD Ryzen 7) 运行 gateway start 后无法发现服务 |
| [#794](https://github.com/sipeed/picoclaw/issues/794) | Codex API 认证失败 (400 Bad Request) | 头戴设备使用 Device Code 认证模式调用 gpt-5.3-codex |
| [#880](https://github.com/sipeed/picoclaw/issues/880) | 伊朗等地区 Telegram API 被封锁 | 用户需要自定义 API 服务器/反向代理连接 Telegram |
| [#906](https://github.com/sipeed/picoclaw/issues/906) | exec 工具超时硬编码 60 秒不足 | 大文件处理、长时间编译等场景需要更长超时 |

### 用户满意度观察

- **不满点**：语音功能损坏 (#945)、模型配置复杂 (#958)、超时不够灵活 (#906)
- **期待点**：成本优化路由 (#295)、多渠道文件分享 (#948)、构建精简 (#923)

---

## 8. 待处理积压

### 需关注的重要未响应 Issue

| Issue | 创建时间 | 状态 | 风险 |
|---|---|---|---|
| [#794](https://github.com/sipeed/picoclaw/issues/794) | 2026-02-26 | OPEN | 中 - Codex API 兼容性问题，无 PR 响应 |
| [#880](https://github.com/sipeed/picoclaw/issues/880) | 2026-02-27 | OPEN | 中 - Telegram 自定义 API 需求，无 PR 响应 |
| [#948](https://github.com/sipeed/picoclaw/issues/948) | 2026-03-01 | OPEN | 高 - 核心功能缺失（文件分享），社区关注度高 |
| [#945](https://github.com/sipeed/picoclaw/issues/945) | 2026-03-01 | OPEN | **极高** - v0.2.0 语音功能完全损坏 |

### 长期未响应 PR 提醒

| PR | 创建时间 | 状态 | 风险 |
|---|---|---|---|
| [#536](https://github.com/sipeed/picoclaw/pull/536) | 2026-02-20 | OPEN (WIP) | 安全沙盒系统 (Docker)，WIP 状态，需关注进度 |

---

**日报生成时间**: 2026-03-01  
**数据来源**: github.com/sipeed/picoclaw

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：** 2026-03-01

---

## 1. 今日速览

过去 24 小时内，NanoClaw 项目保持高度活跃：共产生 **44 条事件**（11 条 Issues + 33 条 PRs），其中 5 个 Issues 和 5 个 PR 已关闭/合并，待处理 PR 积压 28 个。项目继续围绕 WhatsApp 消息体验优化（已读回执、打字指示、输出拆分）和多通道架构扩展（Telegram 支持）快速迭代，同时修复了 2 个安全性问题（命令注入 + OOM 根因）。暂无新版本发布。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日共有 **5 个 PR 合并/关闭**，推进了以下功能与修复：

| PR | 作者 | 状态 | 概述 |
|---|---|---|---|
| [#616](https://github.com/qwibitai/nanoclaw/pull/616) | @Kotivskyi | OPEN | fix: 修复 Node.js 24 上的群组同步脚本失败问题 |
| [#615](https://github.com/qwibitai/nanoclaw/pull/615) | @nowanti | OPEN | fix: 重新注册 macOS launchd 服务并停止孤儿进程 |
| [#614](https://github.com/qwibitai/nanoclaw/pull/614) | @rockychen7 | OPEN | feat: 新增 Telegram 通道支持（使用 Grammy 库） |
| [#612](https://github.com/qwibitai/nanoclaw/pull/612) | @Jehu | OPEN | fix: 始终同步 agent-runner 源文件到现有群组 |
| [#609](https://github.com/qwibitai/nanoclaw/pull/609) | @neocode24 | OPEN | fix: 为 Chromium 截图添加 CJK 字体支持 |
| [#608](https://github.com/qwibitai/nanoclaw/pull/608) | @neocode24 | OPEN | feat: 记录 agent-runner 中的 tool_use 调用用于调试 |
| [#607](https://github.com/qwibitai/nanoclaw/pull/607) | @neocode24 | OPEN | fix: 防止长时间运行任务的调度器重复执行 |
| [#605](https://github.com/qwibitai/nanoclaw/pull/605) | @MunemHashmi | OPEN | fix: 修复 stopContainer 命令注入 + OOM 幽灵套接字 |
| [#606](https://github.com/qwibitai/nanoclaw/pull/606) | @MunemHashmi | OPEN | fix: 使 CLAUDE_MODEL 环境变量端到端生效 |

**重点推进：**
- **多通道架构**：PR #500（pluggable multi-channel architecture）持续推进，Telegram 支持（#614）已进入可审查阶段
- **WhatsApp 体验优化**：已合并输出拆分（#619）、打字指示器（#621）、已读回执（#620）三项功能
- **安全性修复**：#605 同时修复了命令注入漏洞（#457）和 OOM 崩溃根因（#595）

---

## 4. 社区热点

以下 Issues/PRs 今日讨论最活跃：

### 🔥 Issue #80 — 增强请求：支持 Claude 以外的运行时
- **链接**：https://github.com/qwibitai/nanoclaw/issues/80
- **数据**：33 👍 | 15 💬 | 创建于 2026-02-04
- **核心诉求**：由于 Anthropic 正在关闭违规用户的订阅，希望 NanoClaw 支持其他运行时（OpenCode、Codex、Gemini 等），提高灵活性
- **分析**：这是社区长期关注的功能需求，点赞数远超其他 Issue，反映了用户对厂商锁定的不满和对开源替代方案的期待

### 📈 其他高热度议题
- **#595** (OOM 崩溃)：幽灵套接字累积导致 40 小时后崩溃，已关联 PR #605 修复
- **#613** (模型参数被忽略)：ANTHROPIC_MODEL 设置无效，影响高级用户配置

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 状态 | 说明 |
|---|---|---|---|
| [#595](https://github.com/qwibitai/nanoclaw/issues/595) | **高** | OPEN | 运行约 40 小时后 JavaScript heap OOM 崩溃，`launchd` 静默重启导致难以察觉 |
| [#613](https://github.com/qwibitai/nanoclaw/issues/613) | **中** | OPEN | `ANTHROPIC_MODEL=claude-sonnet-4-6` 环境变量被忽略，始终使用默认模型 |
| [#611](https://github.com/qwibitai/nanoclaw/issues/611) | **中** | OPEN | agent-runner 源文件仅在首次创建时复制，后续 MCP 工具更新无法推送到群组 |
| [#457](https://github.com/qwibitai/nanoclaw/issues/457) | **高** | 已修复于 #605 | `stopContainer()` 存在命令注入漏洞，已通过 `execFileSync()` 修复 |

**稳定性评估**：#605 已合并，解决了命令注入和 OOM 根因（幽灵套接字），但 #595 的完整修复（内存泄漏检测）仍在进行中。

---

## 6. 功能请求与路线图信号

今日新增功能请求集中在 **消息体验** 和 **多通道扩展**：

| Issue | 功能 | 预期版本 | 关联 PR |
|---|---|---|---|
| [#618](https://github.com/qwibitai/nanoclaw/issues/618) | 引用/回复支持（WhatsApp 消息线程） | 近期 | 无 |
| [#617](https://github.com/qwibitai/nanoclaw/issues/617) | 消息引导（在代理运行时注入新消息） | 近期 | 无 |
| [#614](https://github.com/qwibitai/nanoclaw/pull/614) | **Telegram 通道支持** | 待合并 | 已开放 |
| [#511](https://github.com/qwibitai/nanoclaw/pull/511) | 语音识别技能（PyAnnote 说话人识别） | 待合并 | 已开放 |
| [#547](https://github.com/qwibitai/nanoclaw/pull/547) | Shabbat 模式 | 待合并 | 已开放 |

**路线图信号**：多通道架构（#500）+ Telegram 支持（#614）表明项目正从 WhatsApp 单通道向全渠道助手演进；消息体验优化（#618/#617）将成为下一阶段重点。

---

## 7. 用户反馈摘要

从今日 Issue 评论中提炼：

### 痛点与不满
- **厂商锁定风险**（#80）：用户对 Anthropic 关闭订阅的担忧，希望支持开源竞品
- **模型配置失效**（#613）：高级用户无法自定义模型，限制了在特定场景下的使用
- **移动端体验差**：长响应无法阅读（#619）、无打字提示（#621）、无已读回执（#620）

### 正面反馈
- **#610**：用户询问 PI 是否仍被使用，表示"PI 很棒"，认可该项目
- **#603**：移动端网站布局问题已修复

### 使用场景
- 群聊机器人（WhatsApp/Telegram）
- 需要语音转文字 + 说话人识别的安全场景（#511）
- 需要遵守宗教时间规范的用户（#547 Shabbat 模式）

---

## 8. 待处理积压

以下 Issue 超过 48 小时未获响应，需要维护者关注：

| Issue | 标题 | 积压时间 | 优先级 |
|---|---|---|---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | 支持 Claude 以外的运行时 | 25 天 | 高（33 👍） |
| [#595](https://github.com/qwibitai/nanoclaw/issues/595) | OOM 崩溃（幽灵套接字） | 2 天 | 高（稳定性） |
| [#611](https://github.com/qwibitai/nanoclaw/issues/611) | agent-runner 源文件从未更新 | 1 天 | 中 |

**积压 PR**：28 个待合并，建议优先审查 #605（安全修复）、#606（环境变量修复）、#614（Telegram 支持）

---

*报告生成时间：2026-03-01 | 数据来源：GitHub NanoClaw 仓库*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-03-01)

## 1. 今日速览

过去 24 小时，IronClaw 项目保持高度活跃：共处理 **19 条 Issues**（2 个新开，17 个关闭）和 **34 条 PRs**（14 待合并，20 已合并/关闭）。项目进入 v0.13.0 发布周期，**批量修复工作成效显著**，涵盖 PostgreSQL TLS 支持、通道激活状态持久化、模型名称保留等多个关键稳定性问题。当前代码库正处于从 v0.12.0 向 v0.13.0 过渡的关键阶段。

---

## 2. 版本发布

### v0.13.0 即将发布

**PR #385** ([chore: release v0.13.0](https://github.com/nearai/ironclaw/pull/385)) 已进入合并流程，预计近期正式发布。

| 变更类型 | 说明 |
|---------|------|
| **版本号** | `0.12.0` → `0.13.0` |
| **破坏性变更** | ⚠️ 存在 API 破坏性变更（见下方详情） |
| 发布类型 | 常规迭代 |

#### ⚠️ 破坏性变更说明

```text
--- failure constructible_struct_adds_field: externally-constructible struct adds field ---
Description: A pub struct constructible with a struct literal has a new pub field.
```

> **迁移注意事项**：请关注 release notes 中关于 struct 字段变更的详细说明，确保外部调用点适配新结构。

---

## 3. 项目进展

以下 PR 已在本周期合并/关闭，显著推进了项目功能与稳定性：

| PR | 状态 | 贡献者 | 概述 |
|----|------|--------|------|
| [#427](https://github.com/nearai/ironclaw/pull/427) | ✅ CLOSED | @zmanian | **fix: add TLS support for PostgreSQL connections** — 修复 #363，解决 PostgreSQL 连接硬编码 NoTls 问题，支持 AWS RDS、Neon、Supabase 等托管数据库 |
| [#432](https://github.com/nearai/ironclaw/pull/432) | ✅ CLOSED | @zmanian | **fix: persist channel activation state across restarts** — 修复 #392，通道激活状态现已持久化，重启后自动恢复 |
| [#426](https://github.com/nearai/ironclaw/pull/426) | ✅ CLOSED | @zmanian | **fix: persist model name to .env so dotted names survive restart** — 修复 #400，解决模型名（如 llama3.2）被截断为 llama3 的问题 |
| [#431](https://github.com/nearai/ironclaw/pull/431) | ✅ CLOSED | @zmanian | **fix: normalize secret names for case-insensitive credential matching** — 修复 Slack not_authed 错误，统一 secret 名称大小写处理 |
| [#430](https://github.com/nearai/ironclaw/pull/430) | ✅ CLOSED | @zmanian | **fix: use tailscale funnel --bg for proper tunnel setup** — 修复 #394，Tailscale 隧道现以后台 daemon 模式运行 |
| [#424](https://github.com/nearai/ironclaw/pull/424) | ✅ CLOSED | @zmanian | **fix(setup): check cloudflared binary and validate tunnel token** — 修复 #418，新增 cloudflared 二进制检查和 token 格式验证 |
| [#423](https://github.com/nearai/ironclaw/pull/423) | ✅ CLOSED | @zmanian | **fix(setup): validate PostgreSQL version and pgvector availability before migrations** — 修复 #415/#416，添加 PG 版本检查（≥15）和 pgvector 可用性预检 |
| [#429](https://github.com/nearai/ironclaw/pull/429) | ✅ CLOSED | @zmanian | **fix: add missing build.sh for Discord and WhatsApp channels** — 修复 #406，补全缺失的构建脚本 |
| [#433](https://github.com/nearai/ironclaw/pull/433) | ✅ CLOSED | @zmanian | **fix: scan inbound messages for leaked secrets** — 修复 #393，防止 secrets 泄露导致无限重试循环 |
| [#422](https://github.com/nearai/ironclaw/pull/422) | ✅ CLOSED | @zmanian | **fix: guard zsh compdef call to prevent error before compinit** — 修复 #420，zsh 补全文件添加 compdef 守卫 |
| [#401](https://github.com/nearai/ironclaw/pull/401) | ✅ CLOSED | @serrrfirat | **fix: init WASM runtime eagerly regardless of tools directory existence** — 修复 WASM 运行时初始化逻辑 |
| [#428](https://github.com/nearai/ironclaw/pull/428) | ✅ CLOSED | @zmanian | **fix: batch of quick fixes** — 批量修复 6 个问题（#417, #338, #330, #358, #419, #344） |

---

## 4. 社区热点

以下 Issues/PRs 讨论活跃或关注度高：

### 🔥 热门 Issues

| Issue | 状态 | 评论 | 热度分析 |
|-------|------|------|----------|
| [#413](https://github.com/nearai/ironclaw/issues/413) Slack Channel fails with "not_authed" | ✅ CLOSED | 1 | **已修复** (#431) — 用户报告 Slack 机器人无法发送消息，根因是 credential 大小写不匹配；已通过统一 secret 名称规范化解决 |
| [#443](https://github.com/nearai/ironclaw/issues/443) Telegram channel accepts group messages from all users if owner_id is null | 🆕 OPEN | 0 | **新Bug** — 当 `owner_id` 为 null 时，机器人会响应群组中所有用户的消息（`respond_to_all_group_messages=false` 未生效）；存在安全风险 |
| [#439](https://github.com/nearai/ironclaw/issues/439) Registry update workflow fails | 🆕 OPEN | 0 | **CI/基础设施问题** — 仓库 checksum 校验工作流因 GitHub 分支保护规则失败，阻塞 WASM 通道/工具安装 |

### 📊 热点 PR

| PR | 状态 | 关注点 |
|----|------|--------|
| [#440](https://github.com/nearai/ironclaw/pull/440) add CLI Commands logs | 🟡 OPEN | 新增 CLI 日志功能，测试覆盖完整，待最终 review |
| [#442](https://github.com/nearai/ironclaw/pull/442) test: add 26 tests for multi-thread safety | 🟡 OPEN | **高价值测试补全** — 针对 #411 修复的 blocking_read panic，新增 26 个测试覆盖多线程安全、数据库 CRUD、并发、错误处理 |
| [#441](https://github.com/nearai/ironclaw/pull/441) Feature/atlas integration | 🟡 OPEN | 大型功能 PR，整合 Atlas 工具，scope 覆盖广泛 |
| [#349](https://github.com/nearai/ironclaw/pull/349) feat(workspace): multi-scope workspace reads | 🟡 OPEN | **长期进行中** — 多租户功能的第 2 部分（第 3 部分中的第 2 部分），依赖 #348 |

---

## 5. Bug 与稳定性

### 严重 Bug（已修复 ✅）

| Bug ID | 描述 | 严重程度 | 修复状态 |
|--------|------|----------|----------|
| [#394](https://github.com/nearai/ironclaw/issues/394) | Tailscale funnel 无法建立隧道 | 🔴 高 | ✅ 已修复 (#430) |
| [#363](https://github.com/nearai/ironclaw/issues/363) | PostgreSQL 连接硬编码 NoTls，所有托管 Postgres 不可用 | 🔴 高 | ✅ 已修复 (#427) |
| [#393](https://github.com/nearai/ironclaw/issues/393) | Telegram secrets filter 导致无限循环 | 🔴 高 | ✅ 已修复 (#433) |
| [#400](https://github.com/nearai/ironclaw/issues/400) | 模型名 llama3.2 被截断为 llama3 | 🔴 高 | ✅ 已修复 (#426) |
| [#392](https://github.com/nearai/ironclaw/issues/392) | Telegram 通道每次重启后需手动激活 | 🟠 中 | ✅ 已修复 (#432) |

### 活跃 Bug（待处理 ⚠️）

| Bug ID | 描述 | 严重程度 | 修复状态 |
|--------|------|----------|----------|
| [#443](https://github.com/nearai/ironclaw/issues/443) | Telegram 群组消息权限控制失效（owner_id 为 null 时响应所有用户） | 🔴 高 | 🆕 新报告，无 fix PR |
| [#439](https://github.com/nearai/ironclaw/issues/439) | Registry checksum 工作流失败，阻塞 WASM 工具安装 | 🟠 中 | 🆕 新报告，需要 CI 配置调整 |

### 稳定性改进

- **#411** ([fix: use std::sync::RwLock in MessageTool](https://github.com/nearai/ironclaw/pull/411)) — 修复运行时 panic（poisoned lock），已合并
- **#442** — 新增 26 个测试强化多线程安全、并发、错误处理覆盖

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue | 功能描述 | 背景/用例 | 纳入版本可能性 |
|-------|----------|-----------|----------------|
| [#443](https://github.com/nearai/ironclaw/issues/443) | 修复 Telegram 群组消息权限控制 | 当前 `owner_id` 为 null 时，`respond_to_all_group_messages=false` 未生效 | 🟢 预计 v0.13.x 修复 |

### 路线图信号（从 PR 推断）

| 领域 | 信号 | 相关 PR |
|------|------|---------|
| **多租户/工作区** | 持续推进多作用域读取功能 | #349 (Part 2 of 3) |
| **CLI 增强** | 新增 CLI 日志命令 | #440 |
| **测试覆盖** | 大幅强化单元/集成测试（26 个新测试） | #442 |
| **第三方集成** | Atlas 工具整合 | #441 |

---

## 7. 用户反馈摘要

### 真实痛点与使用场景

| 场景 | 用户反馈 | 解决情况 |
|------|----------|----------|
| **托管 PostgreSQL 不可用** | "Every PostgreSQL connection... passes `NoTls`... cannot connect to any Postgres server that requires TLS" | ✅ 已修复 (#427) |
| **Slack 机器人消息发送失败** | "The Slack WASM channel fails to send outbound messages, consistently returning a `Slack API error`" | ✅ 已修复 (#431) |
| **模型名称丢失** | "Setting `selected_model = "llama3.2"` results in `provider=llama3`" | ✅ 已修复 (#426) |
| **通道激活状态不持久** | "Every time I restart my instance, I need to click on activate in the dashboard" | ✅ 已修复 (#432) |
| **Tailscale 隧道不工作** | "no actual tunnel is established... I can launch one with `tailscale funnel -bg 8080`" | ✅ 已修复 (#430) |
| **Discord/WhatsApp 通道不可用** | "Discord and WhatsApp WASM channels have full source code... but are missing `build.sh` scripts" | ✅ 已修复 (#429) |
| **Secrets 泄露导致无限循环** | "I pasted an APi key... threw the bot in an endless loop of error and re-try" | ✅ 已修复 (#433) |
| **Docker 沙箱重启后失效** | "Users who reboot find Docker stopped and IronClaw's sandbox disabled" | ✅ 已修复 (#428) |

### 用户满意度指标

- **Issue 关闭率**: 17/19 = **89.5%**（高质量响应）
- **平均响应/修复周期**: 当日报告当日解决（大部分问题在 2-3 天内关闭）

---

## 8. 待处理积压

### 需关注的中长期 Issue

| Issue | 状态 | 积压时长 | 建议处理方案 |
|-------|------|----------|--------------|
| [#443](https://github.com/nearai/ironclaw/issues/443) Telegram 群组权限漏洞 | 🆕 新开 | 1 天 | 🔴 优先处理，安全相关 |
| [#439](https://github.com/nearai/ironclaw/issues/439) Registry checksum CI 失败 | 🆕 新开 | 1 天 | 🟡 需要 CI 配置调整 |
| [#349](https://github.com/nearai/ironclaw/pull/349) 多租户工作区功能 | 🟡 进行中 | ~5 天 | 持续跟进，等待 #348 合并后处理 |

### 建议行动项

1. 🔴 **紧急**: #443（Telegram 权限漏洞）— 影响群组安全，建议尽快评估修复
2. 🟡 **高优先级**: #439 — 阻塞 WASM 工具安装，需调整 CI 工作流
3. 🟢 **常规**: 跟进 #349 多租户功能进展

---

*报告生成时间: 2026-03-01 | 数据来源: GitHub IronClaw Repository*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-01)

---

## 1. 今日速览

过去24小时内，TinyClaw 项目保持适度活跃，共产生 2 条 Issues 更新和 2 条 Pull Requests。社区围绕 **跨平台兼容性** 和 **多线程会话隔离** 两大主题展开讨论：一位 Windows 用户激烈反馈兼容性问题（Issue #151 已关闭），而功能增强方向上则有两个 PR 分别推进 per-thread session 隔离和 OpenViking 插件的持续开发。整体项目处于功能迭代期，暂无新版本发布，代码合并节奏平稳。

---

## 2. 版本发布

**无新版本发布**。项目当前未发布任何版本更新。

---

## 3. 项目进展

过去24小时内 **未发生 PR 合并**，但有 2 个 PR 处于待合并状态：

| PR | 标题 | 状态 | 概述 |
|---|---|---|---|
| [#152](https://github.com/TinyAGI/tinyclaw/pull/152) | feat: per-thread session isolation for Claude and Codex agents | OPEN | 引入 `thread_sessions` 表实现 `(agent_id, thread_id) → session_id` 映射，Claude 端使用 `--session-id <uuid>` 和 `-r <uuid>` 替代共享的 `-c` 标志 |
| [#150](https://github.com/TinyAGI/tinyclaw/pull/150) | feat(openviking): continuation after plugin hardening | OPEN | 将 OpenViking 继续堆栈重新基于 TinyAGI/main（不含 PR1 硬化提交） |

**评估**：两个 PR 均指向核心功能增强，若合并将显著改善多平台会话管理能力和插件生态。

---

## 4. 社区热点

以下 Issues/PRs 讨论活跃度相对较高（按评论数/关注度排序）：

| 类型 | #151 | #144 |
|---|---|---|
| 标题 | this shit aint for Windows quit lying | feat: per-thread session isolation via --session-id / --resume |
| 状态 | CLOSED | OPEN |
| 作者 | @SiN-Kiliko | @bchoor |
| 评论 | 2 | 0 |
| 链接 | [Issue #151](https://github.com/TinyAGI/tinyclaw/issues/151) | [Issue #144](https://github.com/TinyAGI/tinyclaw/issues/144) |

**分析**：Issue #151 虽然标题激烈，但反映出真实的跨平台用户痛点——项目文档声称支持 Windows，但实际使用中用户在包管理器、依赖工具（如 jq）、配置文件损坏、脚本执行环境等方面遭遇障碍。该 Issue 已关闭，但问题可能未彻底解决，建议后续关注。Issue #144 作为功能请求尚未引发广泛讨论，但其提出的 per-thread session 隔离需求在 PR #152 中已被实现，预计将进入合并流程。

---

## 5. Bug 与稳定性

| Issue | 标题 | 严重程度 | 状态 | Fix PR |
|---|---|---|---|---|
| [#151](https://github.com/TinyAGI/tinyclaw/issues/151) | Windows 兼容性问题：包管理器依赖、jq 安装、settings.json 损坏、PowerShell 执行 Linux 脚本 | **高** | CLOSED | 无（用户自行关闭） |

**评估**：Issue #151 属于阻塞性体验问题，但维护者未提交 Fix PR，关闭原因不明确。长期来看 Windows 兼容性仍存在隐患。

---

## 6. 功能请求与路线图信号

**功能请求**：

- **per-thread session isolation**（Issue #144）：用户需要在 Telegram topic 和 Discord thread 等不同渠道间实现独立的 Claude 会话，避免上下文泄露。该需求已在 PR #152 中实现，预计将成为下一版本的亮点功能。

**路线图信号**：

- **OpenViking 插件延续**（PR #150）：表明插件生态正在持续维护和迭代。
- **跨平台支持**：Issue #151 间接呼吁官方加强 Windows 平台的开箱即用体验，可能纳入后续路线图。

---

## 7. 用户反馈摘要

从 Issue #151 评论中提炼的核心用户痛点：

1. **跨平台文档与实际不符**：项目声称支持 Windows，但用户在实际使用中发现大量兼容性障碍。
2. **依赖环境复杂**：用户被迫手动安装 jq、修复损坏的 settings.json、尝试用 PowerShell 执行 Linux 脚本。
3. **脚本要求不存在的工具**：脚本依赖 Windows 上不存在的 Linux window manager。
4. **用户情绪激烈**：Issue 标题和使用措辞反映出受挫的体验，但关闭后未留下解决方案。

**积极信号**：Issue #144 的提出表明核心用户（@bchoor）正在深入使用多平台集成场景，并提出结构化的功能需求，说明项目在多渠道集成方面存在真实需求。

---

## 8. 待处理积压

| Issue/PR | 标题 | 状态 | 等待时长 | 备注 |
|---|---|---|---|---|
| [#144](https://github.com/TinyAGI/tinyclaw/issues/144) | feat: per-thread session isolation via --session-id / --resume | OPEN | ~2 天 | 功能请求已通过 PR #152 实现，待合并 |
| [#150](https://github.com/TinyAGI/tinyclaw/pull/150) | feat(openviking): continuation after plugin hardening | OPEN | ~2 天 | 插件延续 PR，待合并 |

**提醒**：Issue #151 虽然已关闭，但用户核心问题（Windows 兼容性）未彻底解决，建议维护者评估是否需要跟进修复或更新文档。

---

*报告生成时间：2026-03-01 | 数据来源：GitHub TinyClaw 仓库*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*