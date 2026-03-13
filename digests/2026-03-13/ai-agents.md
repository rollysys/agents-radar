# OpenClaw 生态日报 2026-03-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-13 00:08 UTC

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

# OpenClaw 项目动态日报 | 2026-03-13

---

## 1. 今日速览

OpenClaw 今日呈现**高活跃度、高压力**态势：24小时内产生 **500 条 Issues 更新**（410 活跃/新开，90 关闭）与 **500 条 PR 更新**（361 待合并，139 已合并/关闭），双通道均达日常处理上限。项目紧急发布 **v2026.3.11 稳定版及 beta 版**，修复关键安全漏洞（CVE 级 WebSocket 劫持风险）。社区焦点集中在 **国际化支持诉求**（#3460，98 评论）、**钉钉渠道集成**（#26534，60 评论）及 **桌面端应用缺口**（#75，39 评论）。技术债务方面，**v2026.3.8 引入的 Cron 任务回归问题**仍在持续发酵，多个关联 Issue 显示隔离会话模式大面积失效，成为当前稳定性最大威胁。

---

## 2. 版本发布

### v2026.3.11 / v2026.3.11-beta.1
| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-03-12 |
| **紧急程度** | 🔴 **安全修复 - 建议立即升级** |
| **GitHub 链接** | [v2026.3.11](https://github.com/openclaw/openclaw/releases/tag/v2026.3.11) · [v2026.3.11-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.3.11-beta.1) |

#### 安全修复（GHSA-5wcw-8）
| 项目 | 说明 |
|:---|:---|
| **漏洞类型** | Cross-Site WebSocket Hijacking (CSWSH) |
| **影响模式** | `trusted-proxy` 配置下的网关部署 |
| **攻击向量** | 浏览器发起的 WebSocket 连接绕过来源验证 |
| **风险后果** | 不可信来源可能获取 `operator.admin` 权限 |
| **修复措施** | 强制对所有浏览器来源连接执行来源验证，无论是否存在代理头 |

#### 迁移注意事项
- **破坏性变更**：无（向后兼容）
- **必需操作**：使用 `trusted-proxy` 模式的部署建议立即验证 `gateway.controlUi.allowedOrigins` 配置
- **验证命令**：`openclaw gateway config validate --strict`

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（139 条中的代表性进展）

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#44386](https://github.com/openclaw/openclaw/pull/44386) | @zerolxf | **飞书线程感知会话路由修复** - 解决群聊回复串流问题 | ✅ 已合并 |
| [#43536](https://github.com/openclaw/openclaw/pull/43536) | @hclsys | MiniMax VLM 图像分析请求添加 60s 超时防护 | ✅ 已合并 |
| [#43537](https://github.com/openclaw/openclaw/pull/43537) | @hclsys | Anthropic/Gemini PDF 分析添加 120s/60s 超时 | ✅ 已合并 |
| [#42561](https://github.com/openclaw/openclaw/pull/42561) | @hclsys | OpenAI TTS 请求添加 30s 超时 | ✅ 已合并 |
| [#28163](https://github.com/openclaw/openclaw/pull/28163) | @KimGLee | 修复 `memorySearch.chunking.strategy` 配置类型漂移 | ✅ 已合并 |
| [#41901](https://github.com/openclaw/openclaw/pull/41901) | @best | 修复命令队列模块状态重复导致的 `maxConcurrent` 配置失效 | ✅ 已合并 |

### 整体推进评估
- **可靠性工程**：系统性解决无超时 fetch 调用问题（今日合并 4+ 相关 PR）
- **企业集成**：飞书生态修复进入收尾阶段（线程路由、卡片内容、Docx 操作）
- **技术债务**：配置验证层逐步强化（Zod schema 对齐）

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求分析 |
|:---|:---|:---:|:---:|:---|
| 1 | [#3460 - 国际化 (i18n) 支持](https://github.com/openclaw/openclaw/issues/3460) | 98 | 2 | **全球化扩张瓶颈**：社区强烈需求多语言支持，但维护团队明确声明"当前无带宽支持"。诉求背后是非英语市场用户的准入壁垒，以及企业部署的合规要求（部分地区强制本地化） |
| 2 | [#26534 - 钉钉首次安装渠道选项](https://github.com/openclaw/openclaw/issues/26534) | 60 | 19 | **中国企业市场渗透**：钉钉已实现但隐藏在配置中，用户要求向导式首次配置。高 👍 数显示这是规模化部署的关键路径 |
| 3 | [#75 - Linux/Windows 桌面应用](https://github.com/openclaw/openclaw/issues/75) | 39 | 60 | **开发者生态完整性**：macOS 独占桌面端导致跨平台团队采用受阻，60 👍 为今日最高，反映核心用户群体的设备多样性 |
| 4 | [#27009 - OpenCode Go 订阅接入](https://github.com/openclaw/openclaw/issues/27009) | 22 | 25 | **模型提供商多样化**：已关闭，显示团队对新兴模型服务商的快速响应能力 |
| 5 | [#41445 - Kimi K2.5 配置验证失败](https://github.com/openclaw/openclaw/issues/41445) | 16 | 2 | **国产模型适配摩擦**：配置字段 `requiresOpenAiAnthropicToolPayload` 未被识别，反映国产模型适配的 schema 滞后 |

### 现象级社区事件
- **[#42938 - 虾缘 AI 相亲平台](https://github.com/openclaw/openclaw/issues/42938)**：社区成员基于 OpenClaw 构建的 AI Agent 婚恋交友实验项目，10 评论，展示生态创新活力

---

## 5. Bug 与稳定性

### 🔴 严重（数据丢失/服务中断）

| Issue | 现象 | 版本 | Fix PR | 状态 |
|:---|:---|:---:|:---|:---|
| [#43858](https://github.com/openclaw/openclaw/issues/43858) | **Edit 工具静默清空文件至 0 字节** | 2026.3.11 | [#44122](https://github.com/openclaw/openclaw/issues/44122) 已定位 | 🟡 根因确认 |
| [#44122](https://github.com/openclaw/openclaw/issues/44122) | **Sandbox FS Bridge v3.11 回归**：含 python3 的镜像中 Write/Edit 必产 0 字节文件 | 2026.3.11 | - | 🔴 无 PR |
| [#42883](https://github.com/openclaw/openclaw/issues/42883) | **Cron 任务在 2026.3.8 后完全失效** | 2026.3.8 | - | 🔴 无 PR |
| [#40868](https://github.com/openclaw/openclaw/issues/40868) | **Cron 隔离会话超时** | 2026.3.8 | - | 🔴 无 PR |
| [#44257](https://github.com/openclaw/openclaw/issues/44257) | **Cron 隔离会话任务入队但永不执行**（2026.3.11 仍未修复） | 2026.3.11 | - | 🔴 无 PR |

### 🟡 高优先级（功能阻塞）

| Issue | 现象 | 版本 | Fix PR | 状态 |
|:---|:---|:---:|:---|:---|
| [#43989](https://github.com/openclaw/openclaw/issues/43989) | **Exec 审批 socket 未创建导致审批流挂起** | 2026.3.11 | - | 🟡 无 PR |
| [#44093](https://github.com/openclaw/openclaw/issues/44093) | **网关重启命令导致崩溃并移除服务** | 2026.3.11 | - | 🟡 无 PR |
| [#34830](https://github.com/openclaw/openclaw/issues/34830) | **OpenRouter 401 缺失认证头（回归）** | 2026.3.2 | - | 🟡 无 PR |
| [#8366](https://github.com/openclaw/openclaw/issues/8366) | **GitHub Copilot GPT-5+ 模型 421 错误（错误路由至 Chat API）** | - | - | 🟡 无 PR |
| [#40941](https://github.com/openclaw/openclaw/issues/40941) | **自定义/本地提供商不显示上下文长度和 token 数** | 2026.3.7 | - | 🟡 无 PR |

### 稳定性评估
> **Cron 子系统处于危机状态**：v2026.3.8 引入的隔离会话模式存在架构级缺陷，连续三个版本未修复，影响所有依赖定时任务的自动化工作流。建议维护者暂停新功能开发，专项攻关。

---

## 6. 功能请求与路线图信号

### 高潜力需求（已有 PR 或技术可行性明确）

| 需求 | Issue | 信号强度 | 纳入可能性 |
|:---|:---|:---:|:---|
| **钉钉首次安装向导** | [#26534](https://github.com/openclaw/openclaw/issues/26534) | ⭐⭐⭐⭐⭐ | **高** - 功能已实现，仅缺 UI 暴露 |
| **实时语音对话** | [#7200](https://github.com/openclaw/openclaw/issues/7200) | ⭐⭐⭐⭐☆ | 中高 - 10 👍，Twilio/WebRTC 路径清晰 |
| **视觉能力/图片识别** | [#28744](https://github.com/openclaw/openclaw/issues/28744) | ⭐⭐⭐⭐☆ | 中高 - MiniMax 已支持，平台层需传递数据 |
| **Cortex 本地内存集成** | PR [#44421](https://github.com/openclaw/openclaw/pull/44421) | ⭐⭐⭐⭐⭐ | **已提交 XL 级 PR**，审查中 |
| **OpenSandbox 后端支持** | PR [#42860](https://github.com/openclaw/openclaw/pull/42860) | ⭐⭐⭐⭐☆ | XL 级 PR 待合并，阿里云生态扩展 |

### 长期战略需求（需重大架构投入）

| 需求 | Issue | 障碍 | 建议 |
|:---|:---|:---|:---|
| 国际化 (i18n) | [#3460](https://github.com/openclaw/openclaw/issues/3460) | 维护带宽不足 | 建立社区翻译众包流程，非阻塞核心团队 |
| Linux/Windows 桌面应用 | [#75](https://github.com/openclaw/openclaw/issues/75) | 跨平台 UI 框架选型 | 评估 Tauri/Electron 与现有 Swift 代码复用度 |
| 备份/恢复工具 | [#13616](https://github.com/openclaw/openclaw/issues/13616) | 状态管理复杂性 | 优先实现配置+ cron 的导出/导入 MVP |

---

## 7. 用户反馈摘要

### 痛点聚类

| 类别 | 典型反馈 | 来源 Issue |
|:---|:---|:---|
| **配置漂移噩梦** | "升级后 token 使用显示归零"、"OpenRouter 认证突然失效" | [#40941](https://github.com/openclaw/openclaw/issues/40941), [#34830](https://github.com/openclaw/openclaw/issues/34830) |
| **Cron 可靠性崩塌** | "自动化工作流完全停摆，业务受影响" | [#42883](https://github.com/openclaw/openclaw/issues/42883), [#44257](https://github.com/openclaw/openclaw/issues/44257) |
| **国产模型适配摩擦** | "Kimi 配置字段不被识别"、"MiniMax token 统计归零" | [#41445](https://github.com/openclaw/openclaw/issues/41445), [#43490](https://github.com/openclaw/openclaw/issues/43490) |
| **飞书生态不完整** | "图片只能发附件不能预览"、"线程回复串流" | [#22608](https://github.com/openclaw/openclaw/issues/22608), [#44386](https://github.com/openclaw/openclaw/pull/44386) |
| **中国大陆网络环境** | "Memory Search 无代理支持无法使用" | [#38503](https://github.com/openclaw/openclaw/issues/38503) |

### 满意点
- **快速安全响应**：v2026.3.11 当日修复 WebSocket 劫持漏洞
- **模型提供商扩展**：OpenCode Go 等新兴服务商接入迅速
- **社区创新活力**：虾缘等第三方项目展示生态潜力

---

## 8. 待处理积压

### 长期未响应的高价值 Issue（>30 天，高互动）

| Issue | 天数 | 最后活动 | 风险 | 建议行动 |
|:---|:---:|:---|:---|:---|
| [#3460 i18n 支持](https://github.com/openclaw/openclaw/issues/3460) | 44 天 | 2026-03-12 | 非英语市场流失 | 发布社区翻译贡献指南，设立 i18n 工作组 |
| [#75 桌面端缺口](https://github.com/openclaw/openclaw/issues/75) | 71 天 | 2026-03-12 | 开发者采用受阻 | 技术调研 RFC，评估 Electron/Tauri 路径 |
| [#6156 macOS 网关就绪失败](https://github.com/openclaw/openclaw/issues/6156) | 40 天 | 2026-03-12 | 新用户流失 | 优先级提升至 P1，分配专职排查 |
| [#7200 实时语音](https://github.com/openclaw/openclaw/issues/7200) | 39 天 | 2026-03-12 | 竞品差异化缺失 | 纳入 Q2 路线图公开承诺 |
| [#15614 WhatsApp QR 无法识别](https://github.com/openclaw/openclaw/issues/15614) | 28 天 | 2026-03-12 | 渠道稳定性质疑 | 与 whatsapp-web.js 上游同步修复状态 |

### 维护者提醒
> **Cron 子系统需专项攻关**：当前 4 个关联 Issue 显示隔离会话模式存在系统性缺陷，建议：
> 1. 设立 **Cron 稳定性专项**（类似安全响应流程）
> 2. 考虑 **v2026.3.8-3.11 回滚建议** 或 **热修复通道**
> 3. 增强自动化测试覆盖：会话生命周期 + 定时任务集成场景

---

*日报生成时间：2026-03-13 | 数据来源：GitHub API 快照*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-03-13

---

## 1. 生态全景

个人 AI 助手开源生态正经历**从功能验证向生产就绪的集体跃迁**：头部项目（OpenClaw、NanoBot、PicoClaw）日均处理 50+ Issues/PR，安全响应与稳定性修复成为共同优先级；企业 IM 集成（飞书/钉钉/企业微信）和 MCP 生态扩展成为差异化主战场；容器化部署、Token 成本优化、实时可观测性构成下一代基础设施标准。社区创新呈现"核心收敛、边缘发散"特征——底层架构趋于共识，上层场景（物联网、婚恋、代码修复）快速裂变。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布 | 健康度评估 | 关键信号 |
|:---|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 500 (410活跃/90关闭) | 500 (361待合/139已合) | v2026.3.11 安全热修 | 🔴 **高压运行** | Cron 子系统危机，WebSocket 安全漏洞当日修复 |
| **NanoBot** | 47 (26活跃/21关闭) | 77 (35待合/42已合) | 无 | 🟢 **健康活跃** | 搜索后端可插拔债务待解，安全 PR #1940 待审 |
| **ZeroClaw** | 50 (24活跃/26关闭) | 50 (35待合/15已合) | v0.1.9a 热修 | 🟡 **修复冲刺** | GLIBC 2.39 兼容性危机，35 PR 积压审阅瓶颈 |
| **PicoClaw** | 23 (14活跃/9关闭) | 94 (66待合/28已合) | v0.2.2-nightly | 🟡 **高积压** | Agent 架构重构 (#1218) 社区共识强，PR 审阅带宽不足 |
| **NanoClaw** | 22 (15活跃/7关闭) | 32 (21待合/11已合) | 无 | 🟡 **快速扩张** | Token 优化系列 7 项 Issue/PR 推进，OAuth 令牌过期未解 |
| **NullClaw** | 7 (4活跃/3关闭) | 26 (8待合/18已合) | v2026.3.11 | 🟢 **企业就绪** | 钉钉全双工/Email 通道落地，A2A 协议支持 |
| **IronClaw** | 50 (36活跃/14关闭) | 50 (待合/已合未明) | 无 (v0.19.0 RC) | 🔴 **Bug Bash 冲刺** | 3 个 CRITICAL 安全漏洞，Routine 引擎稳定性危机 |
| **LobsterAI** | 4 (3活跃/1关闭) | 10 (1待合/9已合) | v0.2.4 紧急热修 | 🟢 **性能突破** | Gateway 启动 180s→15s 架构级优化，ARM64 分发问题 |
| **TinyClaw** | 4 (2活跃/2关闭) | 11 (2待合/9已合) | v0.0.12 + v0.0.11 热修 | 🟡 **集中冲刺** | 单维护者驱动，ESM 迁移 + 消息持久化交付 |
| **Moltis** | 6 (4活跃/2关闭) | 17 (12待合/5已合) | 无 | 🟡 **生产过渡** | MCP 安全增强 + Apple/Docker 双端修复，12 PR 积压 |
| **CoPaw** | 50 (31活跃/19关闭) | 50 (27待合/23已合) | v0.0.7 安全更新 | 🟡 **版本回归** | Tool Guard 亮点，但技能重复/文件刷新故障伴生 |
| **ZeptoClaw** | 11 (6活跃/5关闭) | 5 (1待合/4已合) | 无 | 🟢 **体验打磨** | 流式响应默认化 + 深度研究技能，社区驱动有限 |
| **EasyClaw** | 1 (0活跃/1关闭) | 1 (1待合/0已合) | v1.6.7 | 🟢 **稳定维护** | macOS 体验专项，低活跃但响应及时 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 特征 | 生态对比 |
|:---|:---|:---|
| **规模地位** | 绝对头部：500 Issues/PR 日处理量 = NanoBot + ZeroClaw + PicoClaw 总和 | 社区体量超第二名 10 倍，参照系地位明确 |
| **技术路线** | **网关优先架构**：`trusted-proxy` 模式、WebSocket 劫持防护、Cron 隔离会话 | 对比 NanoBot/Moltis 的"单二进制"极简路线，更重企业部署场景 |
| **安全响应** | CVE 级漏洞当日热修（v2026.3.11） | IronClaw 同期 3 个 CRITICAL 漏洞待处理，NullClaw 钉钉/飞书修复 24h 闭环，OpenClaw 速度匹配 |
| **核心债务** | **Cron 子系统架构缺陷**：v2026.3.8 引入的隔离会话模式连续 3 版本未修复 | ZeroClaw GLIBC 兼容性、IronClaw Routine 引擎为同类技术债务 |
| **差异化缺口** | 国际化(i18n)、桌面端(Linux/Windows)、钉钉向导化 | NullClaw 钉钉全双工已落地，PicoClaw Azure/魔搭企业集成更快，LobsterAI 性能优化领先 |

**定位结论**：OpenClaw 是**企业级部署的事实标准**，但正面临"创新者窘境"——规模优势伴随技术债务累积，需警惕中型项目（NullClaw、LobsterAI）在特定场景（中国企业市场、启动性能）的侧翼突破。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 | 成熟度 |
|:---|:---|:---|:---:|
| **MCP 生态扩展** | OpenClaw、NanoClaw、Moltis、IronClaw | 远程认证/Header 支持/可配置超时/工具发现 | 🟡 快速标准化中 |
| **企业 IM 深度集成** | OpenClaw、NanoBot、ZeroClaw、PicoClaw、NullClaw、CoPaw | 飞书线程路由、钉钉 Stream 模式、富媒体消息、话题隔离 | 🟢 多家已落地 |
| **Token 成本优化** | NanoClaw（7 项 Issue/PR）、OpenClaw、PicoClaw | Inline 压缩、响应长度控制、CLAUDE.md 自动压缩、上下文预算 API | 🟡 NanoClaw 设计文档阶段 |
| **容器/边缘部署** | ZeroClaw、Moltis、CoPaw、NanoClaw | Docker 官方镜像、Podman 支持、K8s 持久化、旧内核兼容 | 🔴 CoPaw #1382 数据丢失为 blocker |
| **实时可观测性** | PicoClaw、TinyClaw、ZeptoClaw、CoPaw | 工具执行进度流、SSE 事件简化、shimmer 加载动画 | 🟡 体验层竞争 |
| **安全执行层** | OpenClaw、Moltis、CoPaw、NanoBot | Tool Guard、沙箱逃逸防护、凭证代理、secret 管理 | 🟢 CoPaw v0.0.7、Moltis #416 已落地 |

---

## 5. 差异化定位分析

| 项目 | 核心侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 企业网关 + 多通道中枢 | 中大型团队、DevOps 工程师 | Rust/Go 混合，网关-控制平面分离，Cron 引擎独立 |
| **NanoBot** | 极简部署 + 技能生态 | 个人开发者、小型团队 | Python 单二进制，LiteLLM 统一适配，Brave 搜索硬编码（债务） |
| **ZeroClaw** | 中国企业 IM 生态 | 国内开发者、微信生态集成 | Rust 全栈，企业微信/钉钉优先，GLIBC 兼容性挣扎 |
| **PicoClaw** | 边缘设备 + 国产模型 | 物联网、信创场景 | Agent 架构重构（SOUL.md），魔搭/长猫/ Azure 原生支持 |
| **NullClaw** | 企业级多 Agent 协作 | 平台型产品、SaaS 集成 | Zig 语言，A2A 协议原生，Email/IMAP 异步通道 |
| **IronClaw** | WASM 扩展 + 企业合规 | 金融、医疗等强监管行业 | Rust + WASM 沙箱，程序化工具调用(PTC)，E2E 测试框架 |
| **LobsterAI** | 极致启动性能 + 插件生态 | 桌面端重度用户 | esbuild 单文件 bundle，1100+ 文件 → 1 文件架构 |
| **Moltis** | 本地 LLM 优先 + 安全沙箱 | 隐私敏感用户、离线场景 | Apple Container + Docker 双沙箱，Vulkan GGUF 加速 |
| **CoPaw** | 低代码智能体构建 | 业务人员、非技术用户 | Python 全栈，Tool Guard 安全层，多工作区架构预览 |
| **ZeptoClaw** | 开发者 CLI 体验 | 工程师、研究者 | 流式响应默认，交互式澄清工具，深度研究技能 |

---

## 6. 社区热度与成熟度分层

| 层级 | 项目 | 特征 | 关键指标 |
|:---|:---|:---|:---|
| **🔥 超高速迭代** | OpenClaw | 规模效应显著，技术债务同步累积 | 500+ 日活，Cron 危机待专项攻关 |
| **⚡ 快速扩张** | NanoClaw、IronClaw | 功能密集交付，稳定性承压 | NanoClaw OAuth 过期 7 天未解；IronClaw 50 P1 Bug 集中爆发 |
| **🚀 功能冲刺** | ZeroClaw、TinyClaw、CoPaw | 单/双维护者驱动，交付集中 | ZeroClaw 35 PR 审阅瓶颈；TinyClaw 品牌重构决策待共识 |
| **🛠️ 质量巩固** | NanoBot、Moltis、NullClaw | 响应健康，向生产就绪过渡 | NanoBot 搜索债务；Moltis 12 PR 积压；NullClaw 企业功能闭环 |
| **🎯 体验打磨** | PicoClaw、ZeptoClaw、LobsterAI | 架构级优化，社区深度有限 | PicoClaw 66 PR 积压；ZeptoClaw 外部贡献少；LobsterAI ARM64 问题 |
| **💤 稳定维护** | EasyClaw | 低活跃，问题驱动响应 | 1 Issue/1 PR 日处理，macOS 专项 |

---

## 7. 值得关注的趋势信号

| 趋势 | 证据来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **"安全执行层"成为标配** | CoPaw Tool Guard、Moltis Agent 侧写、OpenClaw CVE 热修 | 智能体工具调用需从"功能可用"升级为"可审计、可回滚、最小权限"，安全设计应前置而非补丁 |
| **IM 集成从"通道覆盖"转向"场景深度"** | NullClaw 钉钉 Stream 全双工、PicoClaw 飞书富文本、OpenClaw 线程路由 | 企业部署评估标准：是否支持话题隔离、富媒体、审批流、错误重试，而非仅消息收发 |
| **Token 优化从"边缘优化"走向"架构设计"** | NanoClaw 7 项系统性工程、OpenClaw 配置漂移噩梦 | 长会话场景需内置上下文预算 API、自动压缩机制，而非依赖用户手动管理 |
| **"单二进制" vs "网关架构"路线分化** | Moltis/NanoBot 极简部署 vs OpenClaw/NullClaw 分布式 | 个人/小团队选前者，企业/多租户场景选后者；中间态（LobsterAI 单文件 bundle）或成新共识 |
| **国产模型适配从"兼容性"到"原生优化"** | PicoClaw 魔搭/长猫、ZeroClaw Kimi 2.5、NanoClaw 火山引擎 | 国际项目需预留 schema 扩展点，国产模型字段差异（`reasoning_content`、工具调用格式）需专门处理 |
| **实时可观测性成为 UX 竞争焦点** | ZeptoClaw shimmer、TinyClaw SSE 简化、PicoClaw 实时工具反馈 | 用户容忍"慢"，不容忍"盲等"；进度指示、工具参数预览、流式响应为基线体验 |

---

*分析基于 2026-03-13 各项目 GitHub 动态快照 | 适合技术决策者评估选型、开发者识别贡献机会*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-03-13

## 1. 今日速览

NanoBot 今日保持**高活跃度**，24小时内产生 **47 条 Issues 更新**（26 新开/活跃，21 关闭）和 **77 条 PR 更新**（35 待合并，42 已合并/关闭），无新版本发布。社区围绕**安全性加固**、**渠道生态扩展**（XMPP、钉钉富媒体）和**开发者体验优化**展开密集协作，PR 合并率约 55%，Issue 关闭率 45%，整体健康度良好。值得关注的是，安全相关 Issue #1873 已有关键 PR #1940 响应，社区第三方工具生态开始出现（nanobot-webui）。

---

## 2. 版本发布

**无新版本发布**

> 注：Issue #1059 指出 PyPI 最新版本 0.1.4.post1 尚未发布，版本发布节奏存在滞后。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 进展说明 |
|:---|:---|:---|
| [#1944](https://github.com/HKUDS/nanobot/pull/1944) | @timhok | **推理优化**：自动移除 `reasoning_content` 和 `thinking_blocks` 减少 token 消耗 |
| [#1930](https://github.com/HKUDS/nanobot/pull/1930) | @ducheng121 | **CLI 稳定性**：修复子代理异步输出导致的交互式终端乱码问题（Fix #1904） |
| [#1608](https://github.com/HKUDS/nanobot/pull/1608) | @Maaannnn | **供应商扩展**：新增火山引擎（VolcEngine）和 BytePlus 双计费模式支持 |
| [#1933](https://github.com/HKUDS/nanobot/pull/1933) | @lailoo | **技能管理**：支持通过 `enabled: false` 禁用技能而非删除 |
| [#137](https://github.com/HKUDS/nanobot/pull/137) | @shaun0927 | **记忆系统**：Mem0 启发的自适应长期记忆系统（重大架构升级） |

**整体推进**：今日合并集中在**性能优化**（推理剪枝）、**稳定性**（CLI 修复）、**云厂商适配**（字节跳动生态）和**架构升级**（长期记忆）四个维度，项目正从功能扩展期进入**工程化打磨期**。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---|:---|
| [#176](https://github.com/HKUDS/nanobot/issues/176) | 17 | 飞书配置故障排查（`No channels enabled`） | ✅ 已关闭 |
| [#140](https://github.com/HKUDS/nanobot/issues/140) | 11 | 请求支持 GitHub Copilot Provider | ✅ 已关闭 |
| [#1617](https://github.com/HKUDS/nanobot/issues/1617) | 10 | **中文文档缺失**（语气尖锐） | ✅ 已关闭 |

### 🔥 高反应 Issues（👍 数）

| Issue | 👍 | 诉求 |
|:---|:---|:---|
| [#1719](https://github.com/HKUDS/nanobot/issues/1719) | 10 | **搜索后端可插拔**（Brave 硬编码问题，15+ PR 未合并） |
| [#83](https://github.com/HKUDS/nanobot/issues/83) | 8 | 自定义 API 接口 + 网络代理配置 |
| [#1692](https://github.com/HKUDS/nanobot/issues/1692) | 4 | Telegram 重复回复问题（Markdown/纯文本双发） |

### 🔥 社区生态亮点

| Issue | 说明 |
|:---|:---|
| [#1922](https://github.com/HKUDS/nanobot/issues/1922) | 第三方 **nanobot-webui** 发布——自托管 Web 管理面板，支持多用户、实时聊天、MCP/技能/Cron 可视化配置 |

**诉求分析**：社区核心痛点集中在**渠道稳定性**（飞书、Telegram、Matrix）、**供应商灵活性**（搜索后端、自定义 API）和**治理体验**（中文文档、Web UI）。#1719 反映架构扩展性债务，需维护者确立插件接口规范。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **高** | [#1873](https://github.com/HKUDS/nanobot/issues/1873) | **安全漏洞**：Agent 可通过 `exec()` 访问 `config.json` 泄露密钥 | [#1940](https://github.com/HKUDS/nanobot/pull/1940)（待审） |
| 🔴 **高** | [#1927](https://github.com/HKUDS/nanobot/issues/1927) | DashScope 不支持 `tool_choice="required"` 导致记忆归档失败 | 无 |
| 🟡 **中** | [#1692](https://github.com/HKUDS/nanobot/issues/1692) | Telegram 双回复（Markdown + 纯文本） | 无 |
| 🟡 **中** | [#1300](https://github.com/HKUDS/nanobot/issues/1300) | Matrix 渠道启动失败 | 无 |
| 🟡 **中** | [#1936](https://github.com/HKUDS/nanobot/issues/1936) | QQ Markdown 破坏老版本客户端 | [#1941](https://github.com/HKUDS/nanobot/pull/1941)（待审） |
| 🟡 **中** | [#1931](https://github.com/HKUDS/nanobot/issues/1931) | 记忆合并：LLM 未调用 `save_memory` 跳过 | 无 |
| 🟢 **低** | [#1904](https://github.com/HKUDS/nanobot/issues/1904) | CLI 子代理返回乱码 | ✅ [#1930](https://github.com/HKUDS/nanobot/pull/1930) |

**安全警报**：#1873 是今日最严重的安全问题，PR #1940 采用 bubblewrap 沙箱 + 非 root 容器运行，建议优先审阅合并。

---

## 6. 功能请求与路线图信号

| Issue/PR | 功能 | 纳入可能性 | 关键障碍 |
|:---|:---|:---|:---|
| [#1719](https://github.com/HKUDS/nanobot/issues/1719) | 搜索后端可插拔架构 | ⭐⭐⭐⭐⭐ | 需维护者定义 `SearchBackend` 接口规范 |
| [#1945](https://github.com/HKUDS/nanobot/pull/1945) | **XMPP 渠道支持** | ⭐⭐⭐⭐☆ | 社区 PR 待审，作者声明"无保证" |
| [#1925](https://github.com/HKUDS/nanobot/pull/1925) | 钉钉富媒体消息（文件/图片/富文本） | ⭐⭐⭐⭐☆ | PR 已提交，企业场景刚需 |
| [#1680](https://github.com/HKUDS/nanobot/pull/1680) | Mistral Provider + 通用转录服务 | ⭐⭐⭐⭐☆ | LiteLLM 适配层扩展 |
| [#1943](https://github.com/HKUDS/nanobot/pull/1943) | Google Vertex AI 支持 | ⭐⭐⭐⭐☆ | 云厂商覆盖完整性 |
| [#1881](https://github.com/HKUDS/nanobot/issues/1881) | Tool/Memory 可选开关 | ⭐⭐⭐☆☆ | 架构解耦成本 |
| [#1106](https://github.com/HKUDS/nanobot/issues/1106) | 语音对话（TTS/STT） | ⭐⭐⭐☆☆ | 需渠道层 + 模型层协同 |
| [#1928](https://github.com/HKUDS/nanobot/issues/1928) | Nanobot Council（多 Agent 编排） | ⭐⭐☆☆☆ | 架构复杂度，参考 Counselors 项目 |

**信号判断**：搜索后端可插拔（#1719）是社区呼声最高且技术债务最重的需求，建议维护者在下一版本确立接口契约。XMPP、钉钉富媒体、Vertex AI 的 PR 已就绪，可快速纳入。

---

## 7. 用户反馈摘要

### 😊 满意点
- **部署灵活性**：Docker 支持、多渠道（Telegram/飞书/WhatsApp）覆盖受认可
- **技能系统**：用户赞赏可扩展性，但希望有更优雅的禁用/管理方式（#1058 → 已部分解决）
- **第三方生态**：nanobot-webui 的出现验证项目可扩展性设计

### 😤 痛点
| 痛点 | 典型反馈 | 来源 |
|:---|:---|:---|
| **文档门槛** | "很多国外开源项目都有中文 README，你为什么没有"（#1617，语气激烈） | 中文用户 |
| **配置复杂** | 飞书配置反复失败，错误信息不清晰（#176） | 企业用户 |
| **渠道稳定性** | WhatsApp Bridge 连接后阻塞、Matrix 无法启动 | 多平台用户 |
| **供应商锁定** | Brave 搜索硬编码、OpenRouter 模型 ID 被错误解析（#1938） | 进阶用户 |
| **安全焦虑** | "无法安全部署，Agent 能读取自己的密钥"（#1873） | 企业/安全敏感用户 |

### 💡 使用场景洞察
- **企业 IM 集成**：飞书、钉钉、企业微信需求密集，富媒体消息是刚需
- **多模型路由**：OpenRouter、火山引擎、Vertex AI 等"模型聚合层"使用增加
- **长期记忆焦虑**：用户既需要记忆连续性，又担心记忆膨胀和不可控更新

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要事项

| Issue/PR | 创建时间 | 问题 | 建议行动 |
|:---|:---|:---|:---|
| [#1719](https://github.com/HKUDS/nanobot/issues/1719) | 2026-03-08 | 搜索后端可插拔（15+ PR 未合并的根因） | **维护者需发布架构 RFC** |
| [#1300](https://github.com/HKUDS/nanobot/issues/1300) | 2026-02-27 | Matrix 渠道完全不可用 | 标记 `priority/high`，分配渠道维护者 |
| [#1059](https://github.com/HKUDS/nanobot/issues/1059) | 2026-02-23 | PyPI 版本滞后 | 建立自动化发布流水线（参考 #126） |
| [#126](https://github.com/HKUDS/nanobot/pull/126) | 2026-02-05 | GitHub Actions 自动构建 Docker 镜像 | 与 #1059 协同，完善 CI/CD |
| [#1157](https://github.com/HKUDS/nanobot/issues/1157) | 2026-02-25 | OpenRouter + StepFun 400 错误（0.1.4.post2 未解决） | 验证 #1938 是否修复 |

### 📋 维护者行动清单
1. **紧急**：审阅安全 PR [#1940](https://github.com/HKUDS/nanobot/pull/1940)
2. **本周**：发布搜索后端接口 RFC，解封 #1719 相关 PR
3. **本月**：建立 PyPI 自动发布机制，响应 #1059/#126

---

*日报生成时间：2026-03-13 | 数据来源：HKUDS/nanobot GitHub*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-03-13

## 1. 今日速览

ZeroClaw 今日呈现**高活跃度修复冲刺**态势：24小时内50个Issues更新（26关闭/24活跃）、50个PR流转（15已合并关闭/35待审），并紧急发布 **v0.1.9a** 补丁版本。核心团队正集中火力解决 **GLIBC 2.39 兼容性危机**（影响Linux部署）和 **配置系统初始化状态异常** 两大阻塞性问题。Matrix、飞书、企业微信等企业级通道的稳定性修复成为今日PR主线，同时WebSocket全功能代理循环的重构标志着平台化能力的关键跃进。

---

## 2. 版本发布

### [v0.1.9a](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.9a) — 紧急补丁

| 维度 | 内容 |
|:---|:---|
| **发布类型** | 热修复 (hotfix) |
| **核心修复** | 内存嵌入API密钥解析 + CI发布流程 |
| **破坏性变更** | 无 |
| **迁移注意** | 使用自定义嵌入提供者的用户需确认 `embedding_provider` 环境变量已正确配置，不再回退到 `default_provider` |

**详细变更：**
- **fix(memory)**: 修复嵌入API密钥从 `embedding_provider` 环境变量解析，而非错误地使用 `default_provider` 的密钥 —— 解决多提供商配置场景下的认证失败 ([#3184](https://github.com/zeroclaw-labs/zeroclaw/pull/3184))
- **fix(ci)**: 降级 `action-gh-release` 至 v2.4.2，修复发布流程最终化失败 ([#SimianAstronaut7](https://github.com/SimianAstronaut7))

---

## 3. 项目进展

### 今日已合并/关闭的关键PR（15条中的核心项）

| PR | 作者 | 贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#3365](https://github.com/zeroclaw-labs/zeroclaw/pull/3365) | @SimianAstronaut7 | **CI: 固定发布工作流到 ubuntu-latest 修复 glibc 缓存不匹配** | 根治 [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) GLIBC 2.39 崩溃问题，恢复Linux用户部署能力 |
| [#3363](https://github.com/zeroclaw-labs/zeroclaw/pull/3363) | @SimianAstronaut7 | **CI: 使用 thin LTO 加速构建** | CI构建时间优化，提升开发迭代效率 |
| [#3350](https://github.com/zeroclaw-labs/zeroclaw/pull/3350) | @Alix-007 | **文档: 切换剩余README本地化文件到 install.sh** | 修复11个语言版本README的失效安装链接 |
| [#3360](https://github.com/zeroclaw-labs/zeroclaw/pull/3360) | @ovg288 | 仓库同步 | 保持fork同步 |

**整体进展评估**: 今日合并PR以**基础设施稳定性**为主，尚未涉及功能代码主干。35个待审PR中积压大量通道修复和配置系统改进，明日合并吞吐量将是健康度关键指标。

---

## 4. 社区热点

### 🔥 讨论最活跃的Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 状态 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) GLIBC_2.39 not found | 9 | 2 | **Linux二进制兼容性** — 用户无法在Debian 12/Ubuntu 22.04等稳定发行版运行预编译二进制 | ✅ 已关闭，CI修复已合并 |
| 2 | [#1327](https://github.com/zeroclaw-labs/zeroclaw/issues/1327) Kimi Code 2.5 不兼容 | 6 | 0 | **国产大模型适配** — `reasoning_content` 字段缺失导致400错误，反映国内用户增长 | ✅ 已关闭 |
| 3 | [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) 飞书通道无法启动 | 5 | 0 | **企业IM集成稳定性** — 配置解析错误导致WebSocket连接失败 | 🔄 开放，PR [#3355](https://github.com/zeroclaw-labs/zeroclaw/pull/3355) 待审 |
| 4 | [#2510](https://github.com/zeroclaw-labs/zeroclaw/issues/2510) 配置初始化状态误报未激活 | 4 | 0 | **配置系统可靠性** — `initialized=false` 误报干扰用户体验 | 🔄 开放，PR [#3356](https://github.com/zeroclaw-labs/zeroclaw/pull/3356) 待审 |
| 5 | [#2910](https://github.com/zeroclaw-labs/zeroclaw/issues/2910) WebUI Agent v0.1.8 不工作 | 4 | 0 | **WebUI核心功能** — 连接错误阻断非CLI用户使用 | 🔄 开放 |

**社区情绪分析**: 
- **焦虑点**: Linux部署阻断问题引发密集反馈，显示生产环境用户比例上升
- **期待点**: 企业微信/飞书/钉钉等国内生态集成需求激增，[#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) 企业微信功能请求今日获PR [#3305](https://github.com/zeroclaw-labs/zeroclaw/pull/3305) 响应

---

## 5. Bug 与稳定性

### 按严重程度排列的活跃Bug

| 严重度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| **S0 - 数据丢失/安全风险** | [#2910](https://github.com/zeroclaw-labs/zeroclaw/issues/2910) | WebUI Agent连接错误，功能完全不可用 | [#3367](https://github.com/zeroclaw-labs/zeroclaw/pull/3367) WebSocket全功能代理循环 | 🔄 待审 |
| **S0** | [#8](https://github.com/zeroclaw-labs/zeroclaw/issues/8) | Gateway HTTP响应缺失CORS和安全头（CSRF风险） | 无 | 🔄 长期开放 |
| **S1 - 工作流阻断** | [#2510](https://github.com/zeroclaw-labs/zeroclaw/issues/2510) | 配置初始化状态误报"系统未激活" | [#3356](https://github.com/zeroclaw-labs/zeroclaw/pull/3356) | 🔄 待审 |
| **S1** | [#3359](https://github.com/zeroclaw-labs/zeroclaw/issues/3359) | 官方Docker容器无shell，命令行工具无法使用 | 无 | 🔄 新报告 |
| **S2 - 降级行为** | [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) | 飞书通道配置解析错误 | [#3355](https://github.com/zeroclaw-labs/zeroclaw/pull/3355) | 🔄 待审 |
| **S2** | [#3024](https://github.com/zeroclaw-labs/zeroclaw/issues/3024) | 中文字符边界处理Panic（已关闭，需验证） | 已合并 | ✅ 修复 |

**回归警报**: PR [#3221](https://github.com/zeroclaw-labs/zeroclaw/pull/3221) 引入Slack `thread_ts` 处理回归，PR [#3358](https://github.com/zeroclaw-labs/zeroclaw/pull/3358) 待审修复。

---

## 6. 功能请求与路线图信号

### 高价值功能请求及实现概率评估

| 功能请求 | Issue | 相关PR | 纳入概率 | 信号强度 |
|:---|:---|:---|:---:|:---|
| **企业微信通道** | [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) | [#3305](https://github.com/zeroclaw-labs/zeroclaw/pull/3305) | **高** | 🟢 代码已提交，待审 |
| **Azure OpenAI提供商** | [#3176](https://github.com/zeroclaw-labs/zeroclaw/issues/3176) | 已关闭 | **中** | 🟡 需求确认，待实现 |
| **Matrix密码登录+E2EE** | [#2916](https://github.com/zeroclaw-labs/zeroclaw/issues/2916) | [#3141](https://github.com/zeroclaw-labs/zeroclaw/pull/3141) | **高** | 🟢 媒体/E2EE验证PR待审 |
| **Cron任务Matrix投递** | [#3361](https://github.com/zeroclaw-labs/zeroclaw/issues/3361) | 无 | **中** | 🟡 架构依赖 [#3141](https://github.com/zeroclaw-labs/zeroclaw/pull/3141) |
| **慢速LLM可配置 pacing** | [#2963](https://github.com/zeroclaw-labs/zeroclaw/issues/2963) | 无 | **中** | 🟡 本地LLM用户痛点明确 |
| **Agent子命令MCP支持** | [#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) | 已关闭 | **低** | 🔴 架构冲突，需重新设计 |

**路线图信号**: 企业IM集成（微信生态、飞书、钉钉）构成明确的**B2B商业化路径**，与社区版OpenClaw形成差异化。

---

## 7. 用户反馈摘要

### 真实痛点提炼

> *"Element的access token短时间自动更换，复制到厌倦"* — @Centauria [#2916](https://github.com/zeroclaw-labs/zeroclaw/issues/2916)
> 
> **洞察**: Matrix企业用户需要OAuth-style长期凭证，而非手动token搬运

> *"使用本地LLM时，浏览器工具的多步骤任务因120秒超时失败"* — @otherippo [#2963](https://github.com/zeroclaw-labs/zeroclaw/issues/2963)
> 
> **洞察**: 边缘AI场景需要与云API不同的超时策略，硬编码参数造成体验断裂

> *"Docker容器没有shell，git操作完全无法进行"* — @MexHigh [#3359](https://github.com/zeroclaw-labs/zeroclaw/issues/3359)
> 
> **洞察**: distroless安全策略与开发者体验存在张力，需提供调试/开发镜像变体

> *"Raspberry Pi上的距离传感器检测到人体后，无法主动发消息到Telegram频道"* — @daniel-sarosi-gwc [#2907](https://github.com/zeroclaw-labs/zeroclaw/issues/2907)
> 
> **洞察**: 物联网场景需要**双向通道能力**（当前仅支持接收消息），[#2907](https://github.com/zeroclaw-labs/zeroclaw/issues/2907) 已关闭但未明确解决方案

### 满意度亮点
- 社区透明度获认可：[#2922](https://github.com/zeroclaw-labs/zeroclaw/issues/2922) 团队沟通帖获12👍，为今日最高

---

## 8. 待处理积压

### 需维护者关注的高价值积压项

| 类型 | 项目 | 创建时间 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|:---|
| **安全Issue** | [#8](https://github.com/zeroclaw-labs/zeroclaw/issues/8) Gateway CORS/安全头缺失 | 2026-02-14 | 标记MEDIUM但无响应 | 评估是否需在v0.2.0前修复 |
| **代码质量** | [#2442](https://github.com/zeroclaw-labs/zeroclaw/issues/2442) `cargo fmt` 格式化违规 | 2026-03-01 | 阻塞质量门禁 | 快速格式化修复，解除CI噪音 |
| **PR积压** | [#2017](https://github.com/zeroclaw-labs/zeroclaw/pull/2017) Avian提供商支持 | 2026-02-27 | 目标分支为`dev`，但`master`为主分支 | 明确分支策略，或重新指向`master` |
| **PR积压** | [#3300](https://github.com/zeroclaw-labs/zeroclaw/pull/3300) Cron运行历史API | 2026-03-12 | 新提交，需评审 | 运营可观测性关键功能，优先评审 |

**健康度警示**: 35个待审PR中，@Alix-007 单日提交6个配置/通道修复PR，存在**评审瓶颈风险**。建议维护者建立PR优先级标签体系，区分热修复与功能改进。

---

*日报生成时间: 2026-03-13 | 数据来源: github.com/zeroclaw-labs/zeroclaw*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-03-13

---

## 1. 今日速览

PicoClaw 今日保持**高活跃度**，24小时内处理 **94 个 PR**（28 个已合并/关闭，66 个待审阅）和 **23 个 Issues**（9 个已关闭）。项目发布 **v0.2.2-nightly.20260312** 双版本，重点推进 **Agent 架构重构**、**安全加固**与**多平台渠道扩展**。社区贡献显著，新增西班牙语文档、Azure OpenAI/魔搭社区/长猫模型等 Provider 支持，同时紧急修复 Matrix/LINE 渠道的 DoS 安全漏洞。整体健康度良好，但 PR 积压量较大，需关注审阅效率。

---

## 2. 版本发布

### v0.2.2-nightly.20260312.6612ca09
| 属性 | 详情 |
|:---|:---|
| 发布类型 | Nightly 构建（自动化） |
| 提交哈希 | `6612ca09` |

**更新内容：**
- **Matrix 富文本支持** (`#1370`)：启用 Matrix 频道的富文本消息渲染
- **LongCat 模型 Provider** (`#1317`)：新增长猫模型提供商支持
- **MCP 初始化修复** (`#9b0a48a`)：修复 Direct Agent 模式下 MCP 初始化问题

**⚠️ 注意事项：** Nightly 构建标记为不稳定，生产环境建议等待稳定版。

### nightly (v0.2.2-nightly.20260312.6460a0a7)
| 属性 | 详情 |
|:---|:---|
| 发布类型 | 自动化夜间构建 |
| 对比基准 | [v0.2.2...main](https://github.com/sipeed/picoclaw/compare/v0.2.2...main) |

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR

| PR | 作者 | 进展说明 | 关联 Issue |
|:---|:---|:---|:---|
| [#1420](https://github.com/sipeed/picoclaw/pull/1420) | @SebastianBoehler | **Fallback 链可靠性修复**：将 OpenRouter 传输重置错误分类为可重试，避免 fallback 过早中止 | [#1419](https://github.com/sipeed/picoclaw/issues/1419) |
| [#1413](https://github.com/sipeed/picoclaw/pull/1413) | @ex-takashima | **LINE 渠道安全加固**：限制 webhook 请求体大小至 1MB，阻断 DoS 攻击向量 | [#1407](https://github.com/sipeed/picoclaw/issues/1407) |
| [#1436](https://github.com/sipeed/picoclaw/pull/1436) | @horsley | **Matrix 渠道流式下载**：非加密媒体改用流式传输，防止内存耗尽攻击 | [#1405](https://github.com/sipeed/picoclaw/issues/1405) |
| [#1422](https://github.com/sipeed/picoclaw/pull/1422) | @kunalk16 | **Azure OpenAI Provider**：新增企业级 Azure OpenAI 支持（待审阅） | [#1424](https://github.com/sipeed/picoclaw/issues/1424) |
| [#1447](https://github.com/sipeed/picoclaw/pull/1447) | @KKparpar | **魔搭社区 Provider**：前后端完整支持国产模型平台 ModelScope | [#1438](https://github.com/sipeed/picoclaw/issues/1438) |
| [#1448](https://github.com/sipeed/picoclaw/pull/1448) | @InlitX | **国际化**：新增西班牙语 README 翻译 | - |

**整体推进评估：** 今日核心进展集中在**安全加固**（2个高危漏洞修复）、**企业级集成**（Azure/魔搭）、**Agent 架构演进**（fallback 可靠性）。项目向 v0.3.0 的稳定性目标稳步迈进。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 热度分析 |
|:---|:---|:---:|:---|
| 🥇 | [#1218](https://github.com/sipeed/picoclaw/issues/1218) Agent 定义重构：`SOUL.md` 与 `AGENT.md` | **16** | **架构级讨论**：社区深度参与 Agent 人格定义方案，涉及自然语言配置 vs 结构化配置的哲学分歧 |
| 🥈 | [#1161](https://github.com/sipeed/picoclaw/issues/1161) Ollama 本地模型配置困惑 | **15** | **新手痛点**：文档缺失导致本地部署门槛高，急需配置指南与错误诊断工具 |
| 🥉 | [#1439](https://github.com/sipeed/picoclaw/issues/1439) 上下文管理：边界、压缩与 Token 预算 | **4** | **性能优化**：开发者主动贡献 session persistence 经验，推动长期记忆机制设计 |

**诉求洞察：**
- **#1218**：社区渴望**可解释、可版本控制的 Agent 人格系统**，而非黑盒 prompt 工程
- **#1161**：本地/边缘部署场景激增，需**零配置本地模型发现机制**
- **#1439**：长会话场景下，**显式上下文预算 API** 成为刚需

---

## 5. Bug 与稳定性

### 按严重程度排序

| 级别 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---:|
| 🔴 **Critical** | [#1405](https://github.com/sipeed/picoclaw/issues/1405) / [#1407](https://github.com/sipeed/picoclaw/issues/1407) | Matrix/LINE 渠道无限制内存读取 → 远程 DoS | **已修复** ✅ |
| 🟡 **High** | [#1419](https://github.com/sipeed/picoclaw/issues/1419) | Fallback 链遇传输错误过早中止 | **PR 待合并** [#1420](https://github.com/sipeed/picoclaw/pull/1420) |
| 🟡 **High** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | `exec` 工具安全守卫误杀合法 URL 命令 | **PR 待合并** [#1254](https://github.com/sipeed/picoclaw/pull/1254) |
| 🟢 **Medium** | [#1410](https://github.com/sipeed/picoclaw/issues/1410) | SVG MIME 类型错误导致 CSS mask 失效 | **PR 待合并** [#1443](https://github.com/sipeed/picoclaw/pull/1443) |
| 🟢 **Medium** | [#1437](https://github.com/sipeed/picoclaw/issues/1437) | 手机热点环境下飞书消息间歇性丢失 | **待调查** |
| 🟢 **Medium** | [#1426](https://github.com/sipeed/picoclaw/issues/1426) | QQ 渠道无法正常使用 | **已关闭**（版本问题） |

**安全态势：** 今日修复 2 个高危 DoS 漏洞，响应速度优秀。建议关注 [#1437](https://github.com/sipeed/picoclaw/issues/1437) 的网络层稳定性问题。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 信号强度 | 纳入可能性评估 |
|:---|:---|:---:|:---|
| **Agent 架构重构**（SOUL/AGENT.md 定义） | [#1218](https://github.com/sipeed/picoclaw/issues/1218) | ⭐⭐⭐⭐⭐ | **高** - 已列入官方路线图 [#1216](https://github.com/sipeed/picoclaw/issues/1216)，社区共识强 |
| **上下文管理机制**（压缩/预算/边界） | [#1439](https://github.com/sipeed/picoclaw/issues/1439) | ⭐⭐⭐⭐⭐ | **高** - 与 Agent 重构直接关联，有活跃贡献者 |
| **Azure OpenAI 企业支持** | [#1424](https://github.com/sipeed/picoclaw/issues/1424) / [#1422](https://github.com/sipeed/picoclaw/pull/1422) | ⭐⭐⭐⭐⭐ | **极高** - PR 已提交，企业需求明确 |
| **魔搭社区/国产模型** | [#1438](https://github.com/sipeed/picoclaw/issues/1438) / [#1447](https://github.com/sipeed/picoclaw/pull/1447) | ⭐⭐⭐⭐⭐ | **极高** - PR 已提交，地缘政治驱动 |
| **Telegram 表情回应**（低噪声交互） | [#1328](https://github.com/sipeed/picoclaw/issues/1328) | ⭐⭐⭐⭐ | **中** - UX 优化，实现成本低 |
| **Discord 频道名上下文** | [#1451](https://github.com/sipeed/picoclaw/issues/1451) | ⭐⭐⭐⭐ | **中** - 小改进，社区贡献友好 |
| **OpenWrt 路由器支持** | [#1132](https://github.com/sipeed/picoclaw/issues/1132) | ⭐⭐⭐ | **低** - 边缘场景，资源受限 |
| **实时工具反馈（调试透明化）** | [#1332](https://github.com/sipeed/picoclaw/pull/1332) | ⭐⭐⭐⭐⭐ | **高** - PR 已提交，可观测性刚需 |

**下一版本预测：** v0.3.0 大概率包含 Agent 重构核心、Azure/魔搭/长猫 Provider、实时工具反馈，以及 Mattermost/DingTalk 渠道扩展。

---

## 7. 用户反馈摘要

### 😊 满意点
- **多平台覆盖**："终于有 Matrix 富文本了"（#1370）
- **企业友好**：Azure OpenAI PR 快速响应企业合规需求
- **安全响应**：DoS 漏洞 24 小时内修复获社区认可

### 😤 痛点与场景
| 痛点 | 典型场景 | 来源 Issue |
|:---|:---|:---|
| **本地模型配置黑箱** | "Agent 运行但无响应，完全不知道错在哪" | [#1161](https://github.com/sipeed/picoclaw/issues/1161) |
| **迭代限制僵化** | 复杂任务 20 次迭代强制中断， legitimate workflow 失败 | [#440](https://github.com/sipeed/picoclaw/issues/440) |
| **网络环境敏感** | 手机热点/企业代理下渠道不稳定 | [#1437](https://github.com/sipeed/picoclaw/issues/1437) |
| **调试不可见** | 长工具调用时用户处于"盲等"状态 | [#1332](https://github.com/sipeed/picoclaw/pull/1332) |

### 💡 深层需求
> "我们需要的不只是配置文档，而是**配置即代码**的可验证、可回滚系统" —— 隐含于 #1218 讨论

---

## 8. 待处理积压

### 需维护者关注的高价值项

| 时长 | Issue/PR | 风险 | 建议动作 |
|:---|:---|:---|:---|
| 24天 | [#440](https://github.com/sipeed/picoclaw/issues/440) 硬迭代限制 → 上下文窗口绑定 | 阻碍复杂任务场景，用户流失风险 | 纳入 Agent 重构里程碑 |
| 24天 | [#1254](https://github.com/sipeed/picoclaw/pull/1254) exec 安全守卫误杀修复 | 影响浏览器/URL 类工具可用性 | 优先审阅合并 |
| 7天 | [#1288](https://github.com/sipeed/picoclaw/pull/1288) Mattermost 渠道支持 | 企业协作平台覆盖缺口 | 代码审查 |
| 3天 | [#1332](https://github.com/sipeed/picoclaw/pull/1332) 实时工具反馈 | 可观测性核心功能，用户呼声高 | 设计评审 |
| 66个待审 | PR 积压总量 | 贡献者体验下降，社区动力损耗 | 建立分级审阅机制 |

---

**日报生成时间：** 2026-03-13  
**数据来源：** [sipeed/picoclaw](https://github.com/sipeed/picoclaw) GitHub API

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-03-13

## 1. 今日速览

NanoClaw 今日呈现**高活跃度开发态势**：24小时内产生22条Issue更新（15条活跃/新开，7条关闭）和32条PR更新（21条待审，11条已合并/关闭）。核心看点包括：Token优化系列Issue密集推进（5条相关Issue/PR）、凭证代理安全架构扩展至Groq/OpenAI、以及WhatsApp/Telegram等渠道的功能增强。项目当前处于**功能快速扩张期**，但需关注高优先级Bug的修复进度——特别是OAuth令牌过期、容器安全边界和Gemini Pro性能瓶颈三大问题。

---

## 2. 版本发布

**无新版本发布**（v0.x.x 待定）

---

## 3. 项目进展

### 今日已合并/关闭的PR（11条）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#976](https://github.com/qwibitai/nanoclaw/pull/976) | @5queezer | GitHub MCP服务器集成 | 容器Agent获得结构化GitHub工具能力，告别裸CLI操作 |
| [#1013](https://github.com/qwibitai/nanoclaw/pull/1013) | @5queezer | LanceDB语义记忆Skill | 解决跨会话长期记忆缺失痛点，向量存储+Gemini嵌入 |
| [#1012](https://github.com/qwibitai/nanoclaw/pull/1012) | @mariozig | Discord文件发送Skill定义 | 完善文件传输能力矩阵 |
| [#1007](https://github.com/qwibitai/nanoclaw/pull/1007) | @ingpoc | Symphony MCP配置注入+Linear状态改进 | 多Agent编排系统基础设施升级 |
| [#1006](https://github.com/qwibitai/nanoclaw/pull/1006) | @Chenhzjs | ContextLife Claw Hub渠道 | 新增伪群聊场景，支持@mention委派任务 |
| [#1005](https://github.com/qwibitai/nanoclaw/pull/1005) | @gorillahub | [SILENT]消息泄漏修复 | 修复内部动作消息误发到用户频道的bug |
| [#1004](https://github.com/qwibitai/nanoclaw/pull/1004) | @maruise237 | Dokploy+Docker Compose部署支持 | 生产部署方案扩展，支持DooD架构 |
| [#1008](https://github.com/qwibitai/nanoclaw/pull/1008) | @wcronk3 | 文档清理 | 维护性改进 |

**整体推进评估**：今日合并集中在**基础设施扩展**（部署、记忆、MCP生态）和**渠道覆盖**（Discord、ContextLife Hub），项目向生产就绪和生态集成迈出实质性步伐。

---

## 4. 社区热点

### 讨论最活跃的Issues

| Issue | 评论 | 核心诉求 | 深层分析 |
|:---|:---|:---|:---|
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) | 3条 | OAuth令牌隔夜过期导致401错误 | **架构设计缺陷**：后台服务无法刷新令牌，暴露Claude Code CLI与长期运行服务的身份验证断层 |
| [#865](https://github.com/qwibitai/nanoclaw/issues/865) | 3条 | 容器安全边界不信任问题 | **安全范式争议**：用户质疑"容器=安全"的假设，要求脚本级权限隔离而非仅容器隔离 |
| [#829](https://github.com/qwibitai/nanoclaw/issues/829) | 1条 | SOUL.md需禁止伪造工具执行声明 | 3月8日事故后续：Agent曾虚假声称"伪造工具调用"，实际为工具执行失败 |

### 高优先级PR待审

| PR | 状态 | 价值 |
|:---|:---|:---|
| [#862](https://github.com/qwibitai/nanoclaw/pull/862) WhatsApp文件收发 | Needs Review | 补齐WhatsApp核心能力缺口 |
| [#886](https://github.com/qwibitai/nanoclaw/pull/886) AI新闻简报Swarm | Needs Review | 多Agent协作场景标杆案例 |
| [#917](https://github.com/qwibitai/nanoclaw/pull/917) WhatsApp/Gmail/视觉/语音综合大包 | Needs Review | **超级PR**——单PR覆盖4大功能域，审查负荷重 |

---

## 5. Bug 与稳定性

### 🔴 High Priority Bugs（需立即关注）

| Issue | 问题 | 影响 | Fix PR状态 |
|:---|:---|:---|:---|
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) | `CLAUDE_CODE_OAUTH_TOKEN`隔夜过期，容器每日早晨401失败 | 所有使用Claude Code CLI初始化的生产部署 | ❌ **无PR** |
| [#341](https://github.com/qwibitai/nanoclaw/issues/341) | add-discord Skill含过时Apple Container代码，Docker用户崩溃 | macOS Docker/Colima用户无法使用Discord功能 | ❌ **无PR** |
| [#827](https://github.com/qwibitai/nanoclaw/issues/827) | `FinishReason::ToolUse`但0工具调用被错误接受为成功 | 协议违规导致Agent行为不可预测 | ✅ [#1003](https://github.com/qwibitai/nanoclaw/pull/1003) 待审 |
| [#830](https://github.com/qwibitai/nanoclaw/issues/830) | 会话忙碌时定时任务静默丢弃 | 关键任务丢失，无重试机制 | ❌ **无PR** |
| [#989](https://github.com/qwibitai/nanoclaw/issues/989) | Gemini Pro容器延迟3.5分钟（123K输入token） | 简单工具任务成本过高 | ❌ **无PR** |

### 🟡 Medium Priority

| Issue | 问题 | Fix PR状态 |
|:---|:---|:---|
| [#829](https://github.com/qwibitai/nanoclaw/issues/829) | SOUL.md缺乏反伪造规则 | ❌ 无PR |
| [#973](https://github.com/qwibitai/nanoclaw/issues/973) | 通过claude code设置极慢 | ❌ 无PR |

---

## 6. 功能请求与路线图信号

### Token优化系列（高置信度纳入路线图）

由@gm4leejun-stack发起的系统性优化工程，今日产生**7条关联Issue/PR**：

| 编号 | 机制 | 状态 | 核心创新 |
|:---|:---|:---|:---|
| [#983](https://github.com/qwibitai/nanoclaw/issues/983) | 总览Tracking | Closed | 零额外token成本原则 |
| [#980](https://github.com/qwibitai/nanoclaw/issues/980) → [#984](https://github.com/qwibitai/nanoclaw/issues/984) | Inline Compaction | Closed→Open | 在正常API调用中顺带压缩历史，避免单独/compact调用 |
| [#981](https://github.com/qwibitai/nanoclaw/issues/981) → [#985](https://github.com/qwibitai/nanoclaw/issues/985) | 响应长度控制 | Closed→Open | 软约束指令减少output token浪费（5x成本） |
| [#982](https://github.com/qwibitai/nanoclaw/issues/982) → [#986](https://github.com/qwibitai/nanoclaw/issues/986) | CLAUDE.md自动压缩 | Closed→Open | 文件大小检查触发，零token成本 |
| [#990](https://github.com/qwibitai/nanoclaw/issues/990) | usage.db模式扩展 | Open | 为优化指标提供数据基础 |
| [#991](https://github.com/qwibitai/nanoclaw/issues/991) | 记录token优化快照 | Closed | 依赖#990 |

**路线图信号**：该系列已完成设计文档（`docs/TOKEN-OPTIMIZATION.md`推测存在），从Tracking Issue快速推进到具体实现Issue，**极可能在下个版本中完整落地**。

### 凭证代理扩展（安全架构升级）

| Issue/PR | 内容 | 状态 |
|:---|:---|:---|
| [#878](https://github.com/qwibitai/nanoclaw/issues/878) | 扩展凭证代理至GROQ_API_KEY和OPENAI_API_KEY | Open |
| [#999](https://github.com/qwibitai/nanoclaw/pull/999) | 实现PR | 待审 |

**判断**：上游#798的安全模型复用，技术路径清晰，**高概率合并**。

### 渠道扩展请求

| Issue | 诉求 | 评估 |
|:---|:---|:---|
| [#957](https://github.com/qwibitai/nanoclaw/issues/957) | 官方支持Podman替代Docker | 社区呼声高，与现有Docker代码路径冲突待评估 |
| [#920](https://github.com/qwibitai/nanoclaw/pull/920) | 飞书(Lark)渠道 | PR已提交待审，中国企业市场关键功能 |

---

## 7. 用户反馈摘要

### 🔴 核心痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) @RobotKaln | "每天早上容器都401失败，必须手动重启" | 后台服务长期运行 vs OAuth短期令牌的设计冲突 |
| [#865](https://github.com/qwibitai/nanoclaw/issues/865) @calebfaruki | "花数天做安全加固，发现容器信任边界不对" | 企业级部署的安全审计需求 |
| [#973](https://github.com/qwibitai/nanoclaw/issues/973) @rhighs | "设置极慢，为什么不能简单JSON配置" | 新用户 onboarding 摩擦 |
| [#989](https://github.com/qwibitai/nanoclaw/issues/989) @chryst-monode | "简单工具任务3.5分钟，123K token" | 成本敏感用户的性能焦虑 |

### 🟡 体验反馈

- **WhatsApp场景**：文件接收/发送、语音转文字、图片视觉能力需求集中爆发（[#862](https://github.com/qwibitai/nanoclaw/pull/862), [#917](https://github.com/qwibitai/nanoclaw/pull/917)）
- **记忆能力**：跨会话遗忘是普遍痛点，[#1013](https://github.com/qwibitai/nanoclaw/pull/1013) LanceDB方案获积极期待

### 🟢 满意点

- MCP生态扩展（GitHub、Notion）降低Agent能力边界
- 多渠道覆盖（Telegram、Discord、Slack、飞书）满足差异化部署需求

---

## 8. 待处理积压

### 长期未响应的高优先级Issue

| Issue | 创建日期 | 问题 | 风险 |
|:---|:---|:---|:---|
| [#341](https://github.com/qwibitai/nanoclaw/issues/341) | 2026-02-21（20天） | add-discord Skill Apple Container硬编码 | **Docker用户完全无法使用**，与项目"容器优先"定位冲突 |
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) | 2026-03-05（7天） | OAuth令牌过期 | 影响所有Claude Code CLI初始化用户，生产阻断 |

### 待审PR堆积风险

| PR | 提交日期 | 规模 | 风险 |
|:---|:---|:---|:---|
| [#917](https://github.com/qwibitai/nanoclaw/pull/917) | 2026-03-10 | 超大（WhatsApp+Gmail+视觉+语音+多Skills） | 审查瓶颈，可能延迟其他功能合并 |
| [#862](https://github.com/qwibitai/nanoclaw/pull/862) | 2026-03-09 | 中等 | 与#917功能重叠，需协调合并策略 |

### 维护者行动建议

1. **立即**：为#730设计令牌刷新机制或文档化API Key迁移路径
2. **本周**：拆分或优先审查#917，避免超大PR阻塞
3. **本月**：评估#865的安全架构重构提案，回应社区安全焦虑

---

*日报生成时间：2026-03-13 | 数据来源：GitHub API | 项目地址：[qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-03-13

## 1. 今日速览

NullClaw 今日展现**极高活跃度**，24小时内26个PR流转（18个已合并/关闭，8个待审），7个Issues更新（3个关闭）。核心里程碑是 **v2026.3.11 版本发布**，包含飞书连接修复与ClickHouse引擎加固。社区焦点集中在**钉钉全双工通信**（PR #457 已合并）、**Telegram话题隔离**（PR #450/#436 已合并）两大企业级功能落地，同时暴露旧Linux内核兼容性（Issue #448）和Docker官方镜像需求（Issue #449）等基础设施缺口。

---

## 2. 版本发布

### v2026.3.11（2026-03-12）
**发布者**: @DonPrus | [PR #443](https://github.com/nullclaw/nullclaw/pull/443)

| 类别 | 内容 |
|:---|:---|
| **CI/CD优化** | 发布流程优化（@DonPrus, [#421](https://github.com/nullclaw/nullclaw/pull/421)） |
| **关键修复** | ClickHouse引擎排序与传输检查加固（[#432](https://github.com/nullclaw/nullclaw/pull/432)）——解决内存后端稳定性问题 |
| **飞书修复** | WebSocket配置端点URL修正——解决启动时`LarkApiError`崩溃 |

**迁移注意**: 使用ClickHouse内存后端的用户建议升级，旧版本可能存在排序竞争条件。

---

## 3. 项目进展

### 已合并/关闭的核心PR（按影响力排序）

| PR | 作者 | 核心贡献 | 解决的问题 |
|:---|:---|:---|:---|
| [#457](https://github.com/nullclaw/nullclaw/pull/457) | @manelsen | **钉钉全双工Stream模式** | Issue #376/#447 — 钉钉从"仅发送"变为完整双向通道，支持企业Webhook回调 |
| [#450](https://github.com/nullclaw/nullclaw/pull/450) | @vedmalex | Telegram话题级Agent绑定 | Issue #434 — 多Agent场景下论坛话题隔离，企业群聊场景关键能力 |
| [#436](https://github.com/nullclaw/nullclaw/pull/436) | @vedmalex | Telegram论坛话题加固+可配置命令菜单 | Issue #435 — 任务状态可见性、操作员体验优化 |
| [#456](https://github.com/nullclaw/nullclaw/pull/456) | @hfreire | **A2A协议支持** | 新增Agent-to-Agent协议服务器，JSON-RPC 2.0端点，支持技能发现与远程调用 |
| [#458](https://github.com/nullclaw/nullclaw/pull/458) | @manelsen | 富通道端口结构化回复 | 架构升级：助手回复从纯文本转向结构化payload，为多渠道富媒体铺路 |
| [#444](https://github.com/nullclaw/nullclaw/pull/444) | @manelsen | **Hashline v3精准编辑协议** | 代码编辑工具"Harness问题"的军工级解决方案，上下文感知+位移弹性 |
| [#445](https://github.com/nullclaw/nullclaw/pull/445) | @Nauxscript | 飞书WebSocket栈大小修复 | Issue #423 — 修复启动时SIGBUS崩溃（2MiB堆栈） |
| [#451](https://github.com/nullclaw/nullclaw/pull/451) | @sanderdewijs | **Email通道（IMAP IDLE）** | 原生邮件通道+社区Python插件示例，支持PII脱敏、附件处理 |

**整体进展评估**: 今日合并PR覆盖**企业IM生态完整性**（钉钉/飞书/Email）、**多Agent架构**（A2A协议、话题隔离）、**开发者体验**（Hashline v3、YAML技能元数据）三大战略方向，项目向生产级企业部署迈进显著一步。

---

## 4. 社区热点

### 讨论最活跃的Issue

| Issue | 评论 | 热度分析 |
|:---|:---|:---|
| [#423](https://github.com/nullclaw/nullclaw/issues/423) **飞书WebSocket崩溃** | 6条 | **高优先级生产问题** — 企业用户飞书部署受阻，社区快速响应（PR #445当日修复），反映飞书渠道用户基数增长 |
| [#435](https://github.com/nullclaw/nullclaw/issues/435) Telegram论坛话题缺陷 | 2条 | **UX痛点聚合** — 路由Bug+缺失功能混合报告，实际是企业Telegram部署的"最后一公里"问题 |
| [#449](https://github.com/nullclaw/nullclaw/issues/449) Docker Hub官方镜像 | 1条 | **基础设施期望** — 用户明确要求容器化部署路径，PR #463已响应文档需求 |

**诉求洞察**: 企业用户正将NullClaw推向生产环境，**稳定性（飞书崩溃）**、**部署便利性（Docker）**、**平台特性完整性（Telegram话题）**成为 adoption 瓶颈。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复PR |
|:---|:---|:---|:---|
| 🔴 **高** | 飞书WebSocket启动SIGBUS崩溃（内核栈溢出） | **已修复** | [#445](https://github.com/nullclaw/nullclaw/pull/445) |
| 🔴 **高** | Linux内核<4.11上`readFileAlloc`失败（statx不支持） | **PR待审** | [#462](https://github.com/nullclaw/nullclaw/pull/462) |
| 🟡 **中** | ClickHouse引擎排序竞争条件 | **已修复**（v2026.3.11） | [#432](https://github.com/nullclaw/nullclaw/pull/432) |
| 🟡 **中** | Telegram论坛话题消息丢失话题隔离 | **已修复** | [#450](https://github.com/nullclaw/nullclaw/pull/450), [#436](https://github.com/nullclaw/nullclaw/pull/436) |
| 🟢 **低** | 钉钉仅发送模式（设计局限） | **已解决**（架构升级） | [#457](https://github.com/nullclaw/nullclaw/pull/457) |

**风险评估**: 旧Linux内核兼容性（Issue #448）可能影响边缘设备部署（树莓派/NAS），PR #462 采用降级路径策略，需优先审查合并。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **Docker Hub官方镜像+compose** | [#449](https://github.com/nullclaw/nullclaw/issues/449) | ⭐⭐⭐⭐⭐ 高 | PR [#463](https://github.com/nullclaw/nullclaw/pull/463) 已提交文档修复，镜像已存在需曝光 |
| **钉钉双向通信** | [#376](https://github.com/nullclaw/nullclaw/issues/376), [#447](https://github.com/nullclaw/nullclaw/issues/447) | ✅ **已完成** | PR [#457](https://github.com/nullclaw/nullclaw/pull/457) 已合并 |
| **Telegram话题Agent隔离** | [#434](https://github.com/nullclaw/nullclaw/issues/434) | ✅ **已完成** | PR [#450](https://github.com/nullclaw/nullclaw/pull/450) 已合并 |
| **Cron锚定步进调度**（如`8/25`） | PR [#464](https://github.com/nullclaw/nullclaw/pull/464) | ⭐⭐⭐⭐☆ 高 | 待审PR，定时任务精度修复 |
| **Discord发送者身份+回复检测** | PR [#460](https://github.com/nullclaw/nullclaw/pull/460) | ⭐⭐⭐☆☆ 中 | 待审，补齐Discord与Signal/Telegram的功能 parity |
| **Agent system_prompt外部文件引用** | PR [#459](https://github.com/nullclaw/nullclaw/pull/459) | ⭐⭐⭐☆☆ 中 | 配置管理便利性，待审 |
| **Email IMAP通道** | PR [#451](https://github.com/nullclaw/nullclaw/pull/451) | ⭐⭐⭐⭐☆ 高 | 已合并，扩展异步通信场景 |

**路线图信号**: 项目正从"功能覆盖"转向"企业就绪"——部署体验（Docker）、平台深度集成（钉钉Stream/飞书WS/Email）、多Agent协作（A2A协议）成为明确优先级。

---

## 7. 用户反馈摘要

### 痛点
- **部署摩擦**: "没有官方Docker镜像，自己构建配置复杂"（[#449](https://github.com/nullclaw/nullclaw/issues/449)）
- **平台功能不完整**: "钉钉显示send-only，无法接收消息"（[#376](https://github.com/nullclaw/nullclaw/issues/376), [#447](https://github.com/nullclaw/nullclaw/issues/447)）
- **边缘设备兼容性**: "树莓派旧内核上文件读取失败"（[#448](https://github.com/nullclaw/nullclaw/issues/448)）
- **飞书生产稳定性**: "WebSocket循环失败导致服务不可用"（[#423](https://github.com/nullclaw/nullclaw/issues/423)）

### 满意点
- **快速响应**: 飞书崩溃Issue 6条评论内24小时修复
- **架构演进**: Telegram话题隔离满足"多Agent企业群聊"场景
- **协议开放**: A2A支持获得Agent互操作性社区认可

### 使用场景
- 企业IM统一接入（飞书/钉钉/QQ/Telegram混合环境）
- 边缘设备轻量部署（NAS/树莓派——受内核兼容性制约）
- 多Agent协作工作流（论坛话题隔离、A2A协议发现）

---

## 8. 待处理积压

| 项目 | 创建时间 | 状态 | 提醒 |
|:---|:---|:---|:---|
| [#462](https://github.com/nullclaw/nullclaw/pull/462) Linux<4.11兼容性修复 | 2026-03-12 | **待审** | 边缘设备部署 blocker，建议优先合并 |
| [#464](https://github.com/nullclaw/nullclaw/pull/464) Cron锚定步进调度 | 2026-03-13 | **待审** | 定时任务精度修复，测试覆盖充分 |
| [#460](https://github.com/nullclaw/nullclaw/pull/460) Discord功能补齐 | 2026-03-12 | **待审** | 渠道功能 parity 收尾 |
| [#459](https://github.com/nullclaw/nullclaw/pull/459) 外部文件system_prompt | 2026-03-12 | **待审** | 配置管理体验优化 |
| [#455](https://github.com/nullclaw/nullclaw/pull/455) openclaw trader daemon | 2026-03-12 | **待审** | 描述为"New"，需作者补充详细信息 |
| [#376](https://github.com/nullclaw/nullclaw/issues/376) 钉钉接收问题 | 2026-03-08 | **待关闭** | PR [#457](https://github.com/nullclaw/nullclaw/pull/457) 已合并，建议维护者确认后关闭 |

---

**报告生成**: 2026-03-13 | **数据源**: GitHub API / 项目仓库活动流

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-03-13

## 1. 今日速览

IronClaw 今日呈现**高强度开发态势**，24小时内产生50条Issues更新（36条新开/活跃）和50条PR更新，无新版本发布。项目正处于**Bug Bash冲刺阶段**——大量P1/P2优先级问题被集中曝光，核心团队同步推进修复与合并。值得关注的是，CI系统检测到3个CRITICAL级别安全问题（包括Webhook认证绕过、N+1查询、非事务性上下文更新），同时Routine引擎和Telegram通道的稳定性成为今日修复焦点。整体活跃度评级：**🔥 极高**。

---

## 2. 版本发布

**无新版本发布**

v0.19.0 发布候选 PR #973 仍处于开放状态，包含API破坏性变更（`ironclaw` 0.18.0 → 0.19.0），预计将在关键Bug修复完成后合并。

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR | 作者 | 核心贡献 | 关联Issue |
|:---|:---|:---|:---|
| [#1070](https://github.com/nearai/ironclaw/pull/1070) | @henrypark133 | **扩展生命周期全面修复**：统一OAuth/Token认证UX，修复WASM工具和通道的安装/激活/移除/重装Bug，保留跨更新密钥 | 多个扩展相关Issue |
| [#1086](https://github.com/nearai/ironclaw/pull/1086) | @henrypark133 | **WASM工具Schema发现**：分离`tools`数组与`tool_info`的schema，解决提示词大小回归问题 | 工具调用优化 |
| [#1072](https://github.com/nearai/ironclaw/pull/1072) | @G7CNF | **UX打磨三件套**：工具名称人性化显示、日志去重、Telegram连接成功通知 | #1054 #1055 #1058 |
| [#1065](https://github.com/nearai/ironclaw/pull/1065) | @ironclaw-ci[bot] | **Staging→Main自动晋升**（第二批） | CI流水线 |
| [#952](https://github.com/nearai/ironclaw/pull/952) | @henrypark133 | **CI增强**：晋升PR包含完整提交历史 | 可追溯性改进 |
| [#1090](https://github.com/nearai/ironclaw/pull/1090) | @henrypark133 | **紧急修复**：staging-ci.yml解析失败 | 流水线稳定性 |
| [#1085](https://github.com/nearai/ironclaw/pull/1085) | @zmanian | **代码清理**：移除重复测试模块 | 编译修复 |
| [#333](https://github.com/nearai/ironclaw/pull/333) | @KonstantinMirin | **Slack Socket Mode**：NAT友好连接，WASM零改动 | 企业集成 |
| [#257](https://github.com/nearai/ironclaw/pull/257) | @turian | **轻量级Routine工具调用**：启用`llm.complete()`中的工具访问 | 功能扩展 |
| [#946](https://github.com/nearai/ironclaw/pull/946) | @G7CNF | **消息复制按钮**：悬停复制用户/助手消息 | UX增强 |

**整体推进评估**：今日合并聚焦**扩展系统稳定性**（#1070）、**工具架构优化**（#1086）和**用户体验打磨**（#1072），为v0.19.0发布清除关键障碍。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---|:---|
| [#1060](https://github.com/nearai/ironclaw/issues/1060) | **3** | 扩展安装失败：HTTP 404下载gmail-wasm3 | 🔴 **OPEN** - 阻塞用户 |
| [#299](https://github.com/nearai/ironclaw/issues/299) | 2 | MCP服务器认证配置灵活性不足 | ✅ CLOSED |
| [#996](https://github.com/nearai/ironclaw/issues/996) | 1 | 工具审批模态框需刷新才显示 | ✅ CLOSED |

**热点分析**：#1060 成为今日最高优先级用户阻塞问题——扩展下载URL构造错误（`releases/latest/download/`路径问题），直接影响新用户上手体验。该Issue与已合并的#1070（扩展生命周期修复）形成呼应，但下载404可能是独立的基础设施/发布流程问题。

---

## 5. Bug 与稳定性

### CRITICAL 级别（需立即关注）

| Issue | 描述 | 检测来源 | Fix PR |
|:---|:---|:---|:---|
| [#1033](https://github.com/nearai/ironclaw/issues/1033) | Webhook认证绕过：secret未配置时跳过验证 | staging-ci (置信度90%) | [#1083](https://github.com/nearai/ironclaw/pull/1083) |
| [#823](https://github.com/nearai/ironclaw/issues/823) | Routine引擎N+1查询模式 | staging-ci (置信度88%) | 待处理 |
| [#813](https://github.com/nearai/ironclaw/issues/813) | 非事务性多步上下文更新 | staging-ci (置信度50%) | 待处理 |

### P1 优先级 Bug Bash 问题（用户报告）

| Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|
| [#992](https://github.com/nearai/ironclaw/issues/992) | Telegram内Google OAuth URL参数错误（`clientid`→`client_id`） | 🔴 OPEN | 待处理 |
| [#995](https://github.com/nearai/ironclaw/issues/995) | Web创建的Routine在Telegram不可见 | 🔴 OPEN | 待处理 |
| [#999](https://github.com/nearai/ironclaw/issues/999) | Google Sheets OAuth后403 PERMISSION_DENIED | 🔴 OPEN | 待处理 |
| [#998](https://github.com/nearai/ironclaw/issues/998) | `routine_update`拒绝非cron例程的schedule变更 | 🔴 OPEN | 待处理 |
| [#994](https://github.com/nearai/ironclaw/issues/994) | Routine广播使用`chat_id="default"`导致失败 | 🔴 OPEN | 待处理 |
| [#993](https://github.com/nearai/ironclaw/issues/993) | `values`参数JSON序列化错误（字符串vs数组） | 🔴 OPEN | 待处理 |
| [#991](https://github.com/nearai/ironclaw/issues/991) | Telegram bot token验证间歇性404 | 🔴 OPEN | 待处理 |
| [#1076](https://github.com/nearai/ironclaw/issues/1076) | Web/CLI例程变更未刷新事件触发器缓存 | 🔴 OPEN | 待处理 |

### 已修复P1问题
- #996（工具审批模态框）→ #1072 修复
- #1053（Cron例程不可靠触发）→ 已CLOSED
- #1077（Web例程切换未重新计算next_fire_at）→ 已CLOSED

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 信号强度 | 分析 |
|:---|:---|:---|:---|
| [#1044](https://github.com/nearai/ironclaw/issues/1044) | E2E测试基础设施 | ⭐⭐⭐⭐⭐ | **高优先级**：要求用Claude Code+Chrome MCP实现5个Bug Bash测试的自动化，QA成熟度提升信号 |
| [#625](https://github.com/nearai/ironclaw/pull/625) | 程序化工具调用(PTC) | ⭐⭐⭐⭐⭐ | **核心架构**：工具无LLM往返调用，已开放多日，接近合并 |
| [#693](https://github.com/nearai/ironclaw/pull/693) | Codex CLI OAuth复用 | ⭐⭐⭐⭐☆ | 降低OpenAI用户门槛，"new contributor"标签，社区扩展意愿强 |
| [#1013](https://github.com/nearai/ironclaw/pull/1013) | musl目标支持 | ⭐⭐⭐⭐☆ | Linux安装器兼容性，解决旧glibc系统部署问题 |
| [#1084](https://github.com/nearai/ironclaw/pull/1084) | Telegram长消息自动分割 | ⭐⭐⭐☆☆ | 体验优化，避免"消息过长"错误 |
| [#712](https://github.com/nearai/ironclaw/pull/712) | 自愈系统(stuck_threshold) | ⭐⭐⭐⭐☆ | 可靠性工程，作业卡死检测与修复 |

**下一版本预测**：PTC (#625)、Codex OAuth (#693)、musl支持 (#1013) 极可能进入v0.20.0；E2E测试框架 (#1044) 是质量门禁关键。

---

## 7. 用户反馈摘要

### 🔴 核心痛点

| 场景 | 反馈来源 | 情绪 |
|:---|:---|:---|
| **扩展安装即失败** | #1060 | 😤 沮丧 — "Primary install failed: HTTP 404" |
| **Google生态集成脆弱** | #992, #999, #1002 | 😤 沮丧 — OAuth参数错误、权限拒绝、数据写入静默失败 |
| **Routine跨通道不一致** | #995, #994 | 😕 困惑 — Web创建Telegram不可见，广播失败无提示 |
| **审批体验断裂** | #996, #997 | 😕 困惑 — 需刷新才出现，"Error: Waiting for approval"措辞误导 |
| **Telegram配置摩擦** | #991, #1001 | 😤 沮丧 — Token验证间歇失败，配对流程缺乏引导 |

### 🟢 积极反馈

- 轻量级Routine支持工具调用 (#257合并) — 功能完整性认可
- 消息复制按钮 (#946合并) — "终于有这个了"类UX满足

### 💡 隐含需求

> *"I want to give my LLM the ability to use a browser"* — #299 用户寻求Browserbase集成，反映**浏览器自动化**是高级用户刚需，当前MCP配置门槛过高。

---

## 8. 待处理积压

### 长期未响应的高价值Issue

| Issue | 创建时间 | 状态 | 风险 |
|:---|:---|:---|:---|
| [#169](https://github.com/nearai/ironclaw/issues/169) | 2026-02-18 | 已CLOSED今日 | ~~混合搜索权重可配置~~ ✅ 今日关闭 |
| 无超过30天未响应的开放Issue | — | — | 项目响应健康 |

### 需维护者关注的开放PR

| PR | 状态 | 阻塞原因 |
|:---|:---|:---|
| [#1083](https://github.com/nearai/ironclaw/pull/1083) | OPEN | 5个关键Bug修复（含#1033认证绕过），需优先审查 |
| [#1032](https://github.com/nearai/ironclaw/pull/1032) | OPEN | Staging→Main晋升，含大量变更，需最终验证 |
| [#625](https://github.com/nearai/ironclaw/pull/625) | OPEN | PTC核心功能，XL规模，需架构审查 |
| [#693](https://github.com/nearai/ironclaw/pull/693) | OPEN | 新贡献者，Codex OAuth，需指导完善 |

---

**日报生成时间**：2026-03-13  
**数据覆盖**：过去24小时 GitHub 活动

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-03-13

> 网易有道开源 AI 智能体框架 | [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日活跃度**极高**，24小时内完成 **v0.2.4 紧急补丁版本**发布，同步处理 10 个 PR（合并率 90%）。核心团队聚焦**启动性能优化**与**稳定性修复**，PR #395 将 gateway 启动时间从 180s+ 压缩至 15s（后续启动），属于架构级突破。社区侧 4 个新增 Issues 中，3 个为功能咨询/建议，1 个为 Apple Silicon 更新检测 Bug，整体健康度良好，但需关注 ARM64 版本分发问题。

---

## 2. 版本发布

### v0.2.4 紧急补丁 | [Release 页面](https://github.com/netease-youdao/LobsterAI/releases/tag/v0.2.4)

| 维度 | 详情 |
|:---|:---|
| **发布类型** | 热修复版本（距 v0.2.3 仅 1 天） |
| **核心修复** | ① IM 渠道连接性测试引发的运行时 Bug ② 应用启动无限加载问题 |
| **破坏性变更** | 无 |
| **迁移注意** | 建议所有 v0.2.3 用户立即升级，特别是使用飞书/钉钉等 IM 集成的场景 |

**技术细节**：PR #393 修复了连接性测试中的竞态条件；PR #396 解决了启动流程中的状态机死锁。

---

## 3. 项目进展

### 今日合并关键 PR（9 条）

| PR | 作者 | 核心贡献 | 影响评级 |
|:---|:---|:---|:---|
| [#395](https://github.com/netease-youdao/LobsterAI/pull/395) | @btc69m979y-dotcom | **Gateway 启动性能革命**：esbuild 单文件 bundle + 编译缓存 + 插件预编译 | ⭐⭐⭐⭐⭐ |
| [#380](https://github.com/netease-youdao/LobsterAI/pull/380) | @mutjan | 自定义 URI 协议支持（obsidian://, vscode:// 等） | ⭐⭐⭐⭐ |
| [#387](https://github.com/netease-youdao/LobsterAI/pull/387) | @Blxsseast | 修复 macOS 代码签名失败（isbinaryfile 升级 + 符号链接清理） | ⭐⭐⭐⭐ |
| [#393](https://github.com/netease-youdao/LobsterAI/pull/393) | @fisherdaddy | 修复 IM 渠道连接性测试 Bug（已进 v0.2.4） | ⭐⭐⭐⭐ |
| [#396](https://github.com/netease-youdao/LobsterAI/pull/396) | @fisherdaddy | 修复启动加载状态死锁（已进 v0.2.4） | ⭐⭐⭐⭐ |

**里程碑意义**：PR #395 标志着 LobsterAI 从"功能优先"转向"性能优先"，1100+ 文件 → 单文件 bundle 的架构改造，为后续插件生态规模化奠定基础。

---

## 4. 社区热点

### 讨论最活跃议题

| 排名 | Issue/PR | 互动量 | 核心诉求分析 |
|:---|:---|:---|:---|
| 1 | [#366](https://github.com/netease-youdao/LobsterAI/issues/366) Gateway 端口配置困惑 | 2 评论 | **文档缺口**：用户对 `openclaw gateway status` 失败原因不明，Service PATH 未设置的提示过于技术化，需改善 CLI 错误引导 |
| 2 | [#390](https://github.com/netease-youdao/LobsterAI/issues/390) Apple Silicon 更新检测失效 | 1 评论 | **分发问题**：ARM64 版本更新通道疑似配置错误，v0.2.2 检测不到 v0.2.3，影响 Mac 用户升级体验 |
| 3 | [#391](https://github.com/netease-youdao/LobsterAI/issues/391) 提示词优化按钮建议 | 0 评论 | **UX 诉求**：小白用户希望内置"一键优化提示词"功能，降低 Prompt Engineering 门槛 |

**信号解读**：用户群体正在从早期开发者向普通用户扩展，对"开箱即用"体验需求上升。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 追踪链接 |
|:---|:---|:---|:---|
| 🔴 **高** | Apple Silicon 版本更新检测失效 | **待修复** | [#390](https://github.com/netease-youdao/LobsterAI/issues/390) |
| 🟡 **中** | Gateway 服务配置检测误报 | 待响应 | [#366](https://github.com/netease-youdao/LobsterAI/issues/366) |
| 🟢 **低** | 飞书机器人记忆清除指令缺失 | 待响应 | [#398](https://github.com/netease-youdao/LobsterAI/issues/398) |

**风险评估**：#390 可能指向 CI/CD 中 ARM64 版本的更新元数据生成错误，建议优先排查 `latest-mac.yml` 或类似自动更新配置。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 可行性评估 | 纳入概率 |
|:---|:---|:---|:---|
| 提示词优化按钮（AI 辅助 Prompt 优化） | [#391](https://github.com/netease-youdao/LobsterAI/issues/391) | 中 — 需集成 LLM 调用，与现有架构耦合度低 | **70%**（契合"降低使用门槛"产品方向） |
| 飞书机器人记忆清除指令 | [#398](https://github.com/netease-youdao/LobsterAI/issues/398) | 高 — IM 插件层功能扩展 | **85%**（基础功能补全） |
| MiniMax 海外 API 端点更新 | [PR #388](https://github.com/netease-youdao/LobsterAI/pull/388)（Open） | 已提交 PR，待合并 | **95%** |

---

## 7. 用户反馈摘要

> 从 Issues 评论提炼的真实声音

| 维度 | 反馈内容 | 来源 |
|:---|:---|:---|
| **痛点** | "Service config looks out of date or non-standard" 提示看不懂，不知道如何解决 | #366 |
| **场景** | 飞书群聊中需要 `/reset` 类指令管理多轮对话上下文 | #398 |
| **期待** | "小白能大幅提升 AI 回复效果" — 希望降低 Prompt 编写门槛 | #391 |
| **阻塞** | Mac 用户因更新检测问题滞留旧版本，无法获取最新修复 | #390 |

**产品洞察**：用户正在将 LobsterAI 从"个人工具"向"团队协作基础设施"迁移，对多租户管理、会话状态控制、低门槛配置的需求显著增长。

---

## 8. 待处理积压

### 需维护者关注

| 事项 | 创建时间 | 当前状态 | 建议动作 |
|:---|:---|:---|:---|
| [#366](https://github.com/netease-youdao/LobsterAI/issues/366) Gateway 配置文档/CLI 体验优化 | 2026-03-10（3天前） | 2 评论，无官方响应 | 分配 `documentation` + `good first issue` 标签，或提供 FAQ 链接 |
| [PR #388](https://github.com/netease-youdao/LobsterAI/pull/388) MiniMax 海外端点更新 | 2026-03-12 | **Open**（唯一待合并 PR） | 快速 review 合并，涉及国际用户可用性 |
| #390 Apple Silicon 更新问题 | 2026-03-12 | 无响应 | 优先复现，确认是否为自动更新服务配置错误 |

---

## 附录：数据仪表盘

```
今日指标          数值        环比
─────────────────────────────────
Issues 活跃       4           +100%
PR 处理量         10          +150%
版本发布          1           新增
合并率            90%         ↑
平均响应时间      <24h        优秀
```

---

*日报生成时间：2026-03-13 | 数据来源：GitHub API 与公开仓库活动*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 | 2026-03-13

---

## 1. 今日速览

TinyClaw 今日呈现**高强度迭代态势**：24小时内合并/关闭 **9 个 PR**，发布 **2 个版本**（含紧急热修）， Issues 处理率 50%（2 关/2 开）。核心贡献者 @jlia0 主导了 11 个 PR 中的 10 个，显示项目处于**集中冲刺阶段**。v0.0.11 紧急修复了 v0.0.10 的安装崩溃问题，v0.0.12 则交付了消息持久化等核心基础设施。整体健康度：**活跃但需关注 Telegram 稳定性与品牌重构决策**。

---

## 2. 版本发布

### [v0.0.12](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.12) — 功能版本
| 属性 | 详情 |
|:---|:---|
| **核心变更** | Agent 消息持久化 + SSE 事件流简化 |
| **破坏性变更** | `chain_step` 事件监听模式被 `agent_message` 替代（单事件/响应） |
| **迁移注意** | 下游集成需迁移 SSE 监听逻辑；自动创建 `agent_messages` SQLite 表 |

**技术价值**：将多步骤链式事件压缩为单事件，显著降低客户端复杂度，为实时聊天 UI 奠定基础。

---

### [v0.0.11](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.11) — 紧急热修
| 属性 | 详情 |
|:---|:---|
| **修复问题** | [#197](https://github.com/TinyAGI/tinyclaw/issues/197) 安装脚本引用已删除的 `setup-wizard.sh` |
| **影响范围** | 所有 v0.0.10 首次安装用户（Critical 级） |
| **修复方式** | 移除 stale 引用，迁移至 TypeScript 实现的 wizard |

> 注：修复由 Claude Opus 4.6 协助完成，体现 AI 辅助开发流程。

---

## 3. 项目进展

### 今日合并的关键 PR（9 项）

| PR | 作者 | 领域 | 进展意义 |
|:---|:---|:---|:---|
| [#202](https://github.com/TinyAGI/tinyclaw/pull/202) | @jlia0 | API 基础设施 | ✅ **核心数据层**：Agent 消息持久化，支持历史查询与简化事件流 |
| [#206](https://github.com/TinyAGI/tinyclaw/pull/206) | @jlia0 | CLI 架构 | ✅ **技术债务清理**：CJS → ESM 迁移，解锁 @clack/prompts v1.x |
| [#204](https://github.com/TinyAGI/tinyclaw/pull/204) | @jlia0 | 用户体验 | ✅ ** onboarding 改进**：交互式设置向导替代空白配置页 |
| [#201](https://github.com/TinyAGI/tinyclaw/pull/201) | @jlia0 | TinyOffice | 组织架构可视化（org-chart 页面） |
| [#200](https://github.com/TinyAGI/tinyclaw/pull/200) | @jlia0 | 稳定性 | Telegram 轮询超时与重连机制 |
| [#199](https://github.com/TinyAGI/tinyclaw/pull/199) | @jlia0 | TinyOffice | Chat Rooms + Projects 双核心功能上线 |
| [#203](https://github.com/TinyAGI/tinyclaw/pull/203) | @jlia0 | TinyOffice | Projects/Chat Rooms 管理后台 |
| [#198](https://github.com/TinyAGI/tinyclaw/pull/198) | @jlia0 | 安装修复 | 移除 stale setup-wizard.sh 引用（v0.0.11 基础） |
| [#195](https://github.com/TinyAGI/tinyclaw/pull/195) | @jlia0 | 技能系统 | `send_message` 技能去 TS 化，消除 ts-node 依赖 |

**整体推进评估**：今日交付覆盖**数据持久化、UI 范式升级（Slack 式聊天）、安装体验、架构现代化**四大战略方向，相当于完成了一次**小型里程碑冲刺**。

---

## 4. 社区热点

### 最活跃讨论：[#126 Telegram Bot Auto-Reconnect Failure](https://github.com/TinyAGI/tinyclaw/issues/126)
| 指标 | 数据 |
|:---|:---|
| 评论数 | 6（今日最高） |
| 持续时间 | 2026-02-19 至今（22 天） |
| 状态 | **仍 Open**，但 [#200](https://github.com/TinyAGI/tinyclaw/pull/200) 已尝试修复 |

**诉求分析**：用户需要生产级稳定的 Telegram 集成。今日合并的 #200 添加了 30 秒超时与 watchdog 改进，但 Issue 未关闭，**建议维护者验证修复效果并同步社区**。

### 品牌重构争议：[#191 Rebrand tinyclaw to tinyagi](https://github.com/TinyAGI/tinyclaw/pull/191)
- **状态**：Open，无评论
- **风险**：涉及全仓库命名空间变更（包名、CLI 命令、环境变量、配置目录）
- **信号**：GitHub 组织已提前更名为 `TinyAGI`，此 PR 为正式执行，**需社区共识确认**

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | Issue/PR | 状态 |
|:---|:---|:---|:---|
| 🔴 **Critical** | v0.0.10 安装崩溃（缺失 setup-wizard.sh） | [#197](https://github.com/TinyAGI/tinyclaw/issues/197) | ✅ **已修复**（v0.0.11 + #198） |
| 🟠 **High** | @clack/prompts 导入失败（CJS/ESM 冲突） | [#205](https://github.com/TinyAGI/tinyclaw/issues/205) | ✅ **已修复**（#206 ESM 迁移） |
| 🟡 **Medium** | Telegram 自动重连失败 | [#126](https://github.com/TinyAGI/tinyclaw/issues/126) | 🔄 **部分修复**（#200 已合并，待验证） |

**稳定性趋势**：今日修复了 2 个 Critical/High 级问题，但 Telegram 长期稳定性仍需观察。#200 的修复是否彻底，建议 48 小时内收集社区反馈。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 信号强度 | 纳入可能性 |
|:---|:---|:---|:---|
| TinyOffice 首次启动 Web 引导 | [#193](https://github.com/TinyAGI/tinyclaw/issues/193) | ⭐⭐⭐⭐⭐ | **高** — 与今日合并的 #204（CLI wizard）形成互补，Web 版是 natural next step |
| 实时 Agent 执行进度流 | [#196](https://github.com/TinyAGI/tinyclaw/pull/196) | ⭐⭐⭐⭐⭐ | **高** — PR 已 Open，与 #202 的 SSE 基础设施协同 |
| 品牌重构至 TinyAGI | [#191](https://github.com/TinyAGI/tinyclaw/pull/191) | ⭐⭐⭐⭐☆ | **中-高** — 组织名已改，代码层面需决策时机 |

**路线图推断**：下一版本（v0.0.13）可能聚焦：
1. **TinyOffice 体验闭环**（#193 Web onboarding + 已交付的 Chat Rooms/Projects）
2. **实时可观测性**（#196 进度流 + #202 消息持久化）
3. **品牌正式切换**（#191）

---

## 7. 用户反馈摘要

### 痛点提炼（来自 Issues 评论）

| 场景 | 反馈来源 | 核心不满 |
|:---|:---|:---|
| **首次安装** | @crisdias [#197](https://github.com/TinyAGI/tinyclaw/issues/197) | "chmod: cannot access 'lib/setup-wizard.sh': No such file" — 安装即崩溃，信任损耗 |
| **CLI 工具链** | @debamitro [#205](https://github.com/TinyAGI/tinyclaw/issues/205) | `tinyclaw pairing approve` 运行时模块加载失败，阻断核心工作流 |
| **长期运行** | @dpbmaverick98 [#126](https://github.com/TinyAGI/tinyclaw/issues/126) | Telegram 连接断开后无自动恢复，需人工重启服务 |
| **初始配置** | @mczabca-boop [#193](https://github.com/TinyAGI/tinyclaw/issues/193) | "still depends heavily on CLI flows and raw config editing" — 非技术用户门槛高 |

### 满意度信号
- **#204 交互式向导**、**#199/203 Chat Rooms & Projects** 直接回应了 #193 的诉求，显示**需求响应速度快**
- 今日 9 PR 合并表明**交付吞吐量大**，但需平衡速度与稳定性

---

## 8. 待处理积压

| 项目 | 链接 | 积压时长 | 风险/建议 |
|:---|:---|:---|:---|
| Telegram 重连验证 | [#126](https://github.com/TinyAGI/tinyclaw/issues/126) | 22 天 | #200 已合并，**需主动关闭或请求用户验证** |
| 品牌重构决策 | [#191](https://github.com/TinyAGI/tinyclaw/pull/191) | 2 天 | 影响面极大，**建议发布 RFC 或讨论帖收集社区意见** |
| 实时进度流 | [#196](https://github.com/TinyAGI/tinyclaw/pull/196) | 1 天 | 与 #202 有依赖关系，**建议优先 review 以完成 SSE 能力闭环** |

---

## 附录：快速链接

| 资源 | 链接 |
|:---|:---|
| 项目主页 | https://github.com/TinyAGI/tinyclaw |
| 最新 Release | [v0.0.12](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.12) |
| 待处理 PR 队列 | [2 Open PRs](https://github.com/TinyAGI/tinyclaw/pulls) |
| 活跃 Issues | [2 Open Issues](https://github.com/TinyAGI/tinyclaw/issues) |

---

*日报生成时间：2026-03-13 | 数据来源：GitHub API 与项目公开信息*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-03-13

---

## 1. 今日速览

Moltis 今日维持**高活跃度开发节奏**，24小时内处理 6 个 Issues 和 5 个 PR，同时新增 4 个活跃 Issues 和 12 个待合并 PR。核心进展集中在 **MCP 生态完善**（远程认证、Header 支持、可配置超时）、**本地 LLM 体验优化**（Vulkan 支持、GGUF 热加载）以及 **macOS 发布流程硬ening**（签名公证）。社区侧，Android/Termux 支持、系统提示词时间戳等新需求涌现，显示用户群体向移动端和精细化场景扩展。整体项目健康度良好，维护响应及时，但待审 PR 积压达 12 个，需关注审阅带宽。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR（5 项）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#405](https://github.com/moltis-org/moltis/pull/405) | @penso | **Apple Container 沙箱启动修复** — 重构 exec 命令构造，从 `/tmp` 运行并预创建 `/home/sandbox`，解决 WORKDIR chdir 失败 | [#159](https://github.com/moltis-org/moltis/issues/159) |
| [#401](https://github.com/moltis-org/moltis/pull/401) | @penso | **Docker 环境变量启动支持** — 支持 `MOLTIS_PROVIDER`/`MOLTIS_API_KEY` 及短别名，实现零配置容器启动 | [#125](https://github.com/moltis-org/moltis/issues/125) |
| [#416](https://github.com/moltis-org/moltis/pull/416) | @penso | **远程 MCP 安全增强** — 支持 URL 查询参数密钥和请求头作为 secret 配置，UI 脱敏处理，OAuth URL 隐藏 | [#140](https://github.com/moltis-org/moltis/issues/140), [#119](https://github.com/moltis-org/moltis/issues/119) |
| [#400](https://github.com/moltis-org/moltis/pull/400) | @penso | **配置兼容性修复** — 兼容旧版 `[memory]` 嵌入配置键，输出迁移警告而非报错 | [#109](https://github.com/moltis-org/moltis/issues/109) |
| [#398](https://github.com/moltis-org/moltis/pull/398) | @penso | **安装体验优化** — 修复 Tailscale 状态检测、添加设置链接，整合用户测试反馈 | — |

**里程碑意义**：今日合并的 5 个 PR 覆盖 **容器生态完整性**（Apple/Docker 双端修复）、**MCP 企业级安全**（secret 管理）、**配置向后兼容**三大主题，标志着 v0.x 向生产级部署的过渡加速。

---

## 4. 社区热点

### 讨论最活跃：系统提示词时间戳需求 [#176](https://github.com/moltis-org/moltis/issues/176)
- **13 条评论**，唯一超过 10 评论的议题
- **核心诉求**：用户希望 LLM 感知当前日期时间，用于时间敏感任务（日程安排、时效性信息判断）
- **争议点**：是否应默认注入 vs 可选开关；时区处理；与现有系统提示词模板的集成方式
- **信号**：该功能已被多个 AI 助手项目（如 Claude Code、Cursor）采用，用户期望对齐行业惯例

### 反应最多：嵌入端点自定义 Bug [#109](https://github.com/moltis-org/moltis/issues/109)
- 虽仅 0 评论，但获 1 👍，且**已有修复 PR 合并**（[#400](https://github.com/moltis-org/moltis/pull/400)）
- 反映社区对 **OpenAI 兼容端点** 的强需求，用户积极验证并反馈

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#420](https://github.com/moltis-org/moltis/issues/420) | `web_fetch` 在 legacy/非 UTF-8 页面崩溃：char boundary panic | **OPEN**，今日新建 | ❌ 无 |
| 🟡 **中** | [#423](https://github.com/moltis-org/moltis/issues/423) | Docker + Docker 沙箱组合问题（嵌套容器场景） | **OPEN**，今日新建 | ❌ 无 |
| 🟢 **已修复** | [#367](https://github.com/moltis-org/moltis/issues/367) | Trusted-network proxy 立即关闭（watch channel sender 作用域问题） | **CLOSED** | 已合 |
| 🟢 **已修复** | [#159](https://github.com/moltis-org/moltis/issues/159) | Apple Container WORKDIR chdir 失败 | **CLOSED** | [#405](https://github.com/moltis-org/moltis/pull/405) |
| 🟢 **已修复** | [#109](https://github.com/moltis-org/moltis/issues/109) | 自定义嵌入端点不生效 | **CLOSED** | [#400](https://github.com/moltis-org/moltis/pull/400) |

**风险评估**：[#420](https://github.com/moltis-org/moltis/issues/420) 的 UTF-8 处理 panic 属于典型 Rust 字符串安全漏洞，影响网页工具鲁棒性，建议优先分配修复资源。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 可行性评估 | 纳入概率 |
|:---|:---|:---|:---|
| **Android/Termux 预编译二进制** | [#424](https://github.com/moltis-org/moltis/issues/424) | 技术可行，需 CI 矩阵扩展；Termux 生态活跃 | ⭐⭐⭐⭐ 高 |
| **系统提示词注入日期时间** | [#176](https://github.com/moltis-org/moltis/issues/176) | 实现简单，争议在默认行为设计；13 评论显示社区共识形成中 | ⭐⭐⭐⭐ 高 |
| **MCP 请求超时可配置** | [#419](https://github.com/moltis-org/moltis/pull/419) | **已有 PR**，由社区贡献者 @zuisong 实现，动机明确（Codex MCP 超时） | ⭐⭐⭐⭐⭐ 极高 |
| **Agent 侧写技能文件** | [#413](https://github.com/moltis-org/moltis/pull/413) | **已有 PR**，安全沙箱设计完善，需维护者审阅 | ⭐⭐⭐⭐ 高 |
| **Symphony 工作流守护进程** | [#421](https://github.com/moltis-org/moltis/pull/421) | **已有 PR**，新 crate 架构，长期路线图功能 | ⭐⭐⭐ 中（需设计审阅） |
| **Vulkan GGUF 加速** | [#408](https://github.com/moltis-org/moltis/pull/408) | **已有 PR**，opt-in feature，AMD/Intel 核显用户受益 | ⭐⭐⭐⭐ 高 |

**路线图推断**：下一版本（v0.x+1）极可能包含 **MCP 可配置超时**、**Android 支持**、**本地 LLM Vulkan 加速** 三大用户-facing 功能。

---

## 7. 用户反馈摘要

### 痛点
- **配置迁移摩擦**：旧版 `memory.embedding_*` 键失效导致升级阻断（[#109](https://github.com/moltis-org/moltis/issues/109)），虽已修复但反映版本间兼容性需加强
- **容器场景复杂性**：Docker 内运行 Moltis + Docker 沙箱的嵌套场景出现问题（[#423](https://github.com/moltis-org/moltis/issues/423)），DinD 配置门槛高于预期
- **网页抓取鲁棒性**：非 UTF-8/legacy 页面导致崩溃（[#420](https://github.com/moltis-org/moltis/issues/420)），实际网页生态混乱

### 满意点
- **部署灵活性**：Docker 环境变量支持（[#125](https://github.com/moltis-org/moltis/issues/125)）获用户 @besoeasy 主动集成至 [Yantra](https://github.com/besoeasy/yantra) 应用商店，认可"单二进制、多提供商、沙箱执行、MCP 支持"的架构设计
- **安全响应速度**：Apple Container 修复（[#159](https://github.com/moltis-org/moltis/issues/159)）从报告到关闭仅 24 天，macOS 用户场景受重视

### 场景扩展
- **移动端**：Termux 需求（[#424](https://github.com/moltis-org/moltis/issues/424)）显示用户希望在 Android 设备本地运行（离线/隐私场景）
- **企业 MCP**：远程 MCP 认证（[#140](https://github.com/moltis-org/moltis/issues/140), [#119](https://github.com/moltis-org/moltis/issues/119)）推动 secret 管理功能落地

---

## 8. 待处理积压

### 高优先级待审 PR（12 个中需关注）

| PR | 风险/价值 | 建议行动 |
|:---|:---|:---|
| [#422](https://github.com/moltis-org/moltis/pull/422) | **macOS 签名公证** — 阻塞正式发布，安全关键 | 优先合并，验证 CI 证书流程 |
| [#420](https://github.com/moltis-org/moltis/issues/420) 关联修复 | 崩溃 Bug 无 PR，需分配 | 创建修复 PR 或标记 `good first issue` |
| [#419](https://github.com/moltis-org/moltis/pull/419) | 社区贡献，功能完整，用户动机明确 | 代码审阅，预计 1-2 轮可合并 |
| [#421](https://github.com/moltis-org/moltis/pull/421) | 新架构 crate，长期功能 | 设计审阅，可标记为 draft 或分阶段合并 |

### 长期未响应 Issue
- 无超过 30 天未响应的高优先级 Issue，维护响应健康

---

**数据来源**：GitHub API / moltis-org/moltis  
**报告生成**：2026-03-13

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 | 2026-03-13

## 1. 今日速览

CoPaw 项目今日保持**高活跃度**，24小时内产生 **50 条 Issues 更新**（31 新开/活跃，19 关闭）和 **50 条 PR 更新**（27 待合并，23 已合并/关闭），并发布了 **v0.0.7 安全更新版本**。社区讨论聚焦于**内置技能/MCP 生态规划**、**版本升级兼容性问题**以及**多通道稳定性**。值得注意的是，v0.0.7 引入的 **Tool Guard 安全机制**成为亮点，但新版本也伴随 UI 显示异常（技能重复）和工作区文件刷新故障等回归问题。多工作区/多智能体架构的大型 PR #1375 进入公开预览阶段，标志着项目架构可能迎来重大变革。

---

## 2. 版本发布

### v0.0.7 - 安全增强版本

| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-03-12 |
| **核心更新** | **Tool Guard 安全执行层** |
| **GitHub 链接** | https://github.com/agentscope-ai/CoPaw/releases/tag/v0.0.7 |

**主要变更：**

- **Tool Guard 预执行安全扫描**：自动检测工具参数中的风险模式（如 `rm`、`mv` 等 shell 命令），拦截高风险调用直至用户通过 `/approve` 显式批准
- 新增**安全设置页面**，统一管理工具执行策略
- 被拒绝的工具将永久列入黑名单

**⚠️ 已知问题与迁移注意：**
- Issue #1370：v0.0.7 技能列表出现大量重复显示（active/customized/venv 技能重复渲染）
- Issue #1374：工作区文件刷新按钮报错 "Failed to load file list"
- Issue #1384：魔搭平台深度重启后模型配置全部丢失（与持久化存储相关）

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 作者 | 贡献类型 | 进展说明 |
|:---|:---|:---|:---|
| [#1392](https://github.com/agentscope-ai/CoPaw/pull/1392) | @sehawq | 测试增强 | 飞书频道会话解析单元测试 |
| [#1389](https://github.com/agentscope-ai/CoPaw/pull/1389) | @Chiytako | 功能增强 | Discord 流式响应 + 输入状态指示器 |
| [#1235](https://github.com/agentscope-ai/CoPaw/pull/1235) | @lllcy | 体验优化 | 技能卡片统一布局，显示元数据描述 |
| [#1262](https://github.com/agentscope-ai/CoPaw/pull/1262) | @fancyboi999 | Bug 修复 | 定时任务上下文保留（修复 user_id/session_id 被覆盖问题） |
| [#1368](https://github.com/agentscope-ai/CoPaw/pull/1368) → 关闭 | @rayrayraykk | 架构重构 | 多智能体/多工作区架构预览版（被 #1375 替代） |
| [#1369](https://github.com/agentscope-ai/CoPaw/pull/1369) | @lalaliat | Bug 修复 | 技能名称含 `/` 时导入失败 |
| [#1373](https://github.com/agentscope-ai/CoPaw/pull/1373) | @garyzhang99 | Bug 修复 | 页面刷新后重定向到聊天页 |
| [#1377](https://github.com/agentscope-ai/CoPaw/pull/1377) | — | 社区反馈 | 模型配置体验吐槽（已关闭） |

**整体推进评估**：今日合并 PR 以**稳定性修复**和**开发者体验**为主，核心架构变革（多工作区）进入迭代预览阶段，预计将在后续版本正式落地。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| 1 | [#280](https://github.com/agentscope-ai/CoPaw/issues/280) 内置 Skills 和 MCPs 讨论 | **18** | 社区希望官方预装热门技能/MCP，降低上手门槛，平衡"开箱即用"与"精简安装" | 🔥 持续讨论 |
| 2 | [#1195](https://github.com/agentscope-ai/CoPaw/issues/1195) pip 升级后版本号未更新 | **14** | 前端版本显示与 pip 升级不同步，用户困惑于"是否升级成功" | 待修复 |
| 3 | [#981](https://github.com/agentscope-ai/CoPaw/issues/981) 飞书/QQ 频道无法发送文件 | **11** | 多通道文件传输能力缺失，影响办公场景实用性 | 待响应 |
| 4 | [#338](https://github.com/agentscope-ai/CoPaw/issues/338) 建议添加 Webhook 功能 | **6** | 用户希望外部系统能主动触发 CoPaw 并异步获取结果（API 集成场景） | `good first issue` |
| 5 | [#1346](https://github.com/agentscope-ai/CoPaw/issues/1346) 为何不在上下文中固定嵌入本地时间 | **6** | 弱模型不会主动调用 `get_current_time` 工具，导致时间相关任务失败 | 设计讨论 |

**诉求分析**：社区核心矛盾在于 **"易用性 vs 灵活性"** —— 新手希望开箱即用（预装技能、简化配置），进阶用户需要深度定制（Webhook、API 兼容）。时间上下文和文件传输是生产力场景的硬性需求。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重程度 | Issue | 描述 | 影响版本 | Fix PR |
|:---|:---|:---|:---|:---:|
| 🔴 **高** | [#1382](https://github.com/agentscope-ai/CoPaw/issues/1382) | **K8s 容器重启后所有配置和数据丢失** — 工作目录未持久化，AI 人设、渠道配置、记忆全部清空 | All | 无 |
| 🔴 **高** | [#1222](https://github.com/agentscope-ai/CoPaw/issues/1222) | 消息压缩后数量不匹配导致 API 调用失败（智谱 GLM 1210 错误） | — | 无 |
| 🔴 **高** | [#1383](https://github.com/agentscope-ai/CoPaw/issues/1383) | 飞书图片直接透传 LLM，不支持 vision 的模型 400 报错崩溃 | v0.0.7 | 无 |
| 🟡 **中** | [#1370](https://github.com/agentscope-ai/CoPaw/issues/1370) | v0.0.7 技能列表大量重复显示 | v0.0.7 | 无 |
| 🟡 **中** | [#1374](https://github.com/agentscope-ai/CoPaw/issues/1374) | 工作区文件刷新按钮报错 "Failed to load file list" | v0.0.7 | 无 |
| 🟡 **中** | [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) | 飞书频道"延迟回复"——Bot 回答上一个问题，当前问题被忽略 | — | 无 |
| 🟡 **中** | [#1195](https://github.com/agentscope-ai/CoPaw/issues/1195) | pip 升级后前端版本号未同步更新 | v0.0.5→0.0.6 | 无 |
| 🟢 **低** | [#1381](https://github.com/agentscope-ai/CoPaw/issues/1381) | 模型切换下拉列表显示不全，UI 交互困难 | v0.0.7 | [#1371](https://github.com/agentscope-ai/CoPaw/pull/1371) |
| 🟢 **低** | [#1358](https://github.com/agentscope-ai/CoPaw/issues/1358) | v0.0.6 无法填写 base_url | v0.0.6 | 已关闭 |

**稳定性评估**：v0.0.7 发布伴随**明显的回归问题**（技能重复、文件刷新失败），容器化部署的数据持久化缺陷 (#1382) 是架构级隐患，需优先处理。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue | 功能 | 场景 | 纳入可能性 |
|:---|:---|:---|:---:|
| [#338](https://github.com/agentscope-ai/CoPaw/issues/338) Webhook 支持 | 外部系统主动触发 CoPaw，异步获取结果 | 企业系统集成、低代码平台对接 | ⭐⭐⭐ 高（标记 `good first issue`） |
| [#944](https://github.com/agentscope-ai/CoPaw/issues/944) Responses API 兼容 | 支持仅兼容 OpenAI Responses API 的提供商 | 特定网关/代理兼容性 | ⭐⭐⭐ 高（架构相关） |
| [#1348](https://github.com/agentscope-ai/CoPaw/issues/1348) CDP 浏览器控制 | 复用已开启 debug 模式的浏览器实例 | 自动化测试、爬虫场景 | ⭐⭐ 中（有用户 PR 原型） |
| [#280](https://github.com/agentscope-ai/CoPaw/issues/280) 内置 Skills/MCPs | 预装热门技能，开箱即用 | 降低新手门槛 | ⭐⭐⭐ 高（官方主动发起讨论） |
| [#1346](https://github.com/agentscope-ai/CoPaw/issues/1346) 固定时间上下文 | 系统提示自动嵌入当前时间 | 弱模型兼容性 | ⭐⭐ 中（设计权衡中） |

### 相关进行中 PR

- [#1375](https://github.com/agentscope-ai/CoPaw/pull/1375) **多智能体/多工作区架构** — 重大架构变革，已进入公开预览
- [#1376](https://github.com/agentscope-ai/CoPaw/pull/1376) MiniMax 内置 LLM 提供商支持
- [#1290](https://github.com/agentscope-ai/CoPaw/pull/1290) NapCat QQ 机器人通道（OneBot 11 协议）

---

## 7. 用户反馈摘要

### 真实痛点

> *"pip install --upgrade copaw 后，页面左上角显示依旧是 0.0.5"* — @HZJprince [#1195](https://github.com/agentscope-ai/CoPaw/issues/1195)
> 
> **痛点**：版本升级体验不闭环，用户无法确认升级是否成功。

> *"这么多模型格式不支持，模型无法自动获取，手动填写后无法连通模型，简单的错误提示无法定位错误"* — @chxgzs [#1377](https://github.com/agentscope-ai/CoPaw/issues/1377)
> 
> **痛点**：模型配置流程复杂，错误诊断信息不足，挫败感强。

> *"飞书频道和 QQ 频道，机器人回复消息的时候不能发送任何文件给我"* — @wudao2fdm [#981](https://github.com/agentscope-ai/CoPaw/issues/981)
> 
> **痛点**：办公场景核心功能缺失，限制实际部署价值。

> *"每次容器重启后，所有配置和数据都会丢失"* — @devid007007 [#1382](https://github.com/agentscope-ai/CoPaw/issues/1382)
> 
> **痛点**：云原生部署场景的数据持久化未考虑，生产环境不可用。

### 正向反馈

- Tool Guard 安全机制获得认可，被视为"企业级必备功能"
- 社区对内置技能/MCP 的讨论热情高，期待官方生态建设

---

## 8. 待处理积压

### 需要维护者关注的重要事项

| Issue/PR | 创建时间 | 问题 | 风险 |
|:---|:---:|:---|:---|
| [#1382](https://github.com/agentscope-ai/CoPaw/issues/1382) 容器数据持久化 | 今日 | K8s 部署数据丢失 | 🔴 阻碍生产采用 |
| [#2](https://github.com/agentscope-ai/CoPaw/pull/2) Telemetry 功能 | 13天前 | 遥测数据收集 WIP | 长期未更新 |
| [#193](https://github.com/agentscope-ai/CoPaw/pull/193) 多工作区管理 | 11天前 | 与 #1375 功能重叠 | 需协调合并策略 |
| [#280](https://github.com/agentscope-ai/CoPaw/issues/280) 内置技能讨论 | 10天前 | 生态方向决策 | 影响 v0.1.0 规划 |
| [#981](https://github.com/agentscope-ai/CoPaw/issues/981) 多通道文件传输 | 3天前 | 办公场景核心需求 | 竞品已支持 |

---

**日报生成时间**：2026-03-13  
**数据来源**：GitHub API /agentscope-ai/CoPaw

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-03-13

---

## 1. 今日速览

ZeptoClaw 今日展现**极高开发活跃度**，核心维护者 @qhkm 单日推进 **5 项功能落地**（4 项已合并），Issues 处理率达 45%（5/11 关闭）。项目聚焦**CLI 体验升级**与**Agent 能力增强**两大主线：流式响应默认化、交互式澄清工具、深度研究技能等关键功能已进入主分支。社区贡献方面出现 Telegram 集成改进与 Shelldex 收录等新需求，但 Podman 构建兼容性问题暴露开发环境碎片化风险。整体健康度：**良好，处于功能密集交付期**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的核心 PR（4 项）

| PR | 功能 | 影响 |
|:---|:---|:---|
| [#343](https://github.com/qhkm/zeptoclaw/pull/343) | 新增 `ask_clarification` 工具 | **Agent 交互范式升级**：支持执行中暂停并请求用户澄清，打破"猜测-执行"黑箱模式 |
| [#344](https://github.com/qhkm/zeptoclaw/pull/344) | 新增 `deep-research` 技能 | **零成本能力扩展**：通过 SKILL.md 注入系统化 4 阶段研究方法论（探索→深挖→验证→综合） |
| [#337](https://github.com/qhkm/zeptoclaw/pull/337) |  shimmer + spinner CLI 加载动画 | **感知性能提升**：渐变文字 shimmer、步骤编号、工具参数预览，解决"裸等待"体验痛点 |
| [#335](https://github.com/qhkm/zeptoclaw/pull/335) | 智谱 API 密钥验证 | **国内生态适配**：Zhipu/GLM 提供商 onboarding 体验对齐 OpenAI 标准 |

**整体推进评估**：今日合并内容覆盖 **Agent 核心循环**（暂停输入）、**技能系统**（研究方法论）、**CLI 感知层**（动画反馈）、**国内模型生态** 四个战略维度，项目成熟度向生产级工具迈进显著一步。

---

## 4. 社区热点

| 热度指标 | Issue/PR | 分析 |
|:---|:---|:---|
| **技术债务暴露** | [#333](https://github.com/qhkm/zeptoclaw/issues/333) Podman 5.7 缓存挂载构建失败 | 社区贡献者 @taqtiqa-mark 的 CI 工作流被阻断，反映 **BuildKit 与传统 builder 的兼容性鸿沟**。诉求：明确容器构建规范，或提供多引擎支持 |
| **生态位拓展** | [#334](https://github.com/qhkm/zeptoclaw/issues/334) 申请收录 Shelldex | 第三方目录主动收录请求，验证项目在外部社区的认知度提升 |
| **集成深度需求** | [#331](https://github.com/qhkm/zeptoclaw/issues/331) Telegram 支持改进 | 用户 @ilovethensa 指出**富文本渲染缺失+无输入指示器**导致交互体验降级，属于 IM 集成的典型最后一公里问题 |

> 评论数均为 0，反映社区仍以核心维护者驱动为主，外部用户参与深度有限。

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 状态 | 风险 |
|:---|:---|:---|:---|
| **P2-High** | [#345](https://github.com/qhkm/zeptoclaw/issues/345) Coder 模板 LLM 自写测试验证自身 Bug | 🟡 **Open，无 PR** | **逻辑闭环缺陷**：LLM 生成与 Bug 行为一致的测试，导致"修复"通过虚假验证。核心 Agent 可靠性受质疑 |
| **P2-High** | [#333](https://github.com/qhkm/zeptoclaw/issues/333) Dockerfile.dev Podman 构建失败 | 🟡 **Open，关联 PR #287** | 开发者 onboarding 摩擦，影响外部贡献 |
| P3-Normal | [#185](https://github.com/qhkm/zeptoclaw/issues/185) jsonwebtoken 9→10 升级 | ✅ **已关闭** | 破坏性变更已完成迁移 |

**关键风险**：#345 的 Coder 模板自验证缺陷属于 **Agent 自我欺骗（self-deception）** 类问题，需引入外部验证源或测试覆盖率检查机制，当前仅标记为 bug 未分配修复资源。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **流式响应默认化 + 元数据页脚** | [#341](https://github.com/qhkm/zeptoclaw/issues/341) / [#342](https://github.com/qhkm/zeptoclaw/pull/342) | 🔥 **高，PR 已开** | 维护者自提自实现，配置项 `agents.defaults.streaming` 已翻转，待合并 |
| **编码基准测试固件** | [#340](https://github.com/qhkm/zeptoclaw/issues/340) | ⚡ 中高 | 与 #345 的测试验证问题形成呼应，可能作为配套解决方案 |
| **Telegram 富文本+输入指示器** | [#331](https://github.com/qhkm/zeptoclaw/issues/331) | ⚡ 中 | 明确的用户体验改进，需评估 IM 适配层架构 |
| **Shelldex 收录** | [#334](https://github.com/qhkm/zeptoclaw/issues/334) | ✅ 低摩擦 | 纯文档/元数据工作，无代码变更 |

**路线图信号**：今日密集出现的 CLI UX 改进（#336 shimmer、#341 流式、#339 澄清工具）表明项目正从 **"功能可用"向"体验精致"** 阶段过渡，下一版本可能以 **v0.x 体验打磨版** 为发布主题。

---

## 7. 用户反馈摘要

> 基于 Issues 描述提炼，因评论数有限，主要反映**需求提出者的原始痛点**

| 维度 | 反馈 |
|:---|:---|
| **满意/期待** | 深度研究技能（#338）的"零二进制成本"设计受认可；流式响应默认化被描述为"最大感知性能提升" |
| **不满/摩擦** | Telegram 消息"plain and somewhat messy"——格式化失效让专业工具显得业余；无输入指示器造成"不自然"的交互节奏 |
| **使用场景** | 代码修复验证（#345）、多阶段研究任务（#338）、国内模型接入（#332）构成三大高频场景 |
| **隐性诉求** | 开发者 @taqtiqa-mark 在 #287 和 #333 中反复出现的"consistent pre-PR state"诉求，反映**贡献者体验基础设施**仍是短板 |

---

## 8. 待处理积压

| 项 | 创建时间 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|
| [#287](https://github.com/qhkm/zeptoclaw/pull/287) Dev tools for consistent pre-PR state | 2026-03-09（4天前） | 与 #333 的 Podman 问题交织，需统一容器策略 | 维护者 review 并决策：合并 / 要求拆分 BuildKit 修复部分 |
| [#345](https://github.com/qhkm/zeptoclaw/issues/345) Coder 模板自验证缺陷 | 今日 | 高优先级但未分配 | 需设计外部验证机制，建议与 #340 基准测试固件联动解决 |

---

*日报生成时间：2026-03-13 | 数据来源：GitHub API*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 | 2026-03-13

> **项目**: [gaoyangz77/easyClaw](https://github.com/gaoyangz77/easyclaw)  
> **日期**: 2026-03-13  
> **项目定位**: AI 智能体与个人 AI 助手开源工具

---

## 1. 今日速览

EasyClaw 今日维持**低活跃但健康**的维护节奏。24小时内完成1个Issue关闭、1个PR待审、1个补丁版本发布，属于典型的**稳定维护期**状态。核心信号：v1.6.7紧急发布说明团队对macOS用户体验问题响应迅速；OpenAI OAuth问题已闭环解决；macOS图标显示问题有社区贡献者主动修复。整体健康度良好，无阻塞性风险。

---

## 2. 版本发布

### [v1.6.7](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.7) — macOS 签名与安装体验专项修复

| 维度 | 详情 |
|:---|:---|
| **发布类型** | 补丁版本（Patch Release） |
| **核心变更** | 新增 macOS Gatekeeper 绕过文档，解决"文件已损坏"误报 |
| **破坏性变更** | 无 |
| **迁移注意** | 无需代码变更；macOS用户若遇拦截，按Release说明执行 `xattr -cr` 命令即可 |

**关键洞察**：此版本为**文档/体验修复**，非代码变更，说明团队将"安装成功率"视为核心指标。未签名应用的信任成本是Electron/Tauri类桌面应用的典型痛点，EasyClaw选择文档先行而非立即购买Apple Developer证书，符合早期开源项目的资源优先级。

---

## 3. 项目进展

### 今日关闭
| PR/Issue | 状态 | 贡献 | 推进度 |
|:---|:---|:---|:---|
| [#16 OpenAI Oauth好像有问题](https://github.com/gaoyangz77/easyclaw/issues/16) | ✅ 已关闭 | 修复OAuth认证失败 | **高** — 核心功能稳定性 |

**进展分析**：Issue #16 的关闭标志着**第三方登录链路可靠性**得到提升。从截图报错推断为OpenAI OAuth回调或token交换环节的边界情况处理，修复后覆盖便携版与安装版双渠道，消除用户准入门槛。

### 待审贡献
| PR | 状态 | 功能 | 技术价值 |
|:---|:---|:---|:---|
| [#15 fix: app icon in macos dock and system tray](https://github.com/gaoyangz77/easyclaw/pull/15) | 🟡 待合并 | macOS Dock与系统托盘图标修复 | 提升品牌识别与专业感；可能涉及Tauri/ Electron的`nativeImage`或`setIcon` API调用 |

**整体迈进**：今日聚焦**macOS生态完善**（安装体验+视觉一致性），属于平台适配深水区的典型工作，为跨平台体验对齐奠定基础。

---

## 4. 社区热点

| 排名 | 条目 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 1 | [#16 OpenAI Oauth问题](https://github.com/gaoyangz77/easyclaw/issues/16) | 2天闭环，1条评论 | **准入焦虑**：用户遇到认证失败时无法区分是配置错误还是软件缺陷，需要更清晰的错误提示与诊断指引 |
| 2 | [#15 macOS图标修复](https://github.com/gaoyangz77/easyclaw/pull/15) | 社区贡献，2天活跃 | **品质敏感**：用户（或贡献者）在意原生平台的细节完成度，图标缺失会触发"半成品"感知 |

**趋势信号**：社区关注点从"功能可用"转向**体验精致度**，是项目成熟度提升的积极指标。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **高**（已解决） | OpenAI OAuth认证失败（便携版/安装版双渠道） | ✅ 已修复于v1.6.7前 | 内置修复，无独立PR |
| 🟡 **中**（待审） | macOS Dock/系统托盘图标不显示 | 🟡 PR #15 待合并 | [#15](https://github.com/gaoyangz77/easyclaw/pull/15) |

**稳定性评估**：今日无新增崩溃或数据丢失报告。OAuth问题快速闭环显示核心认证链路的监控与响应机制有效。

---

## 6. 功能请求与路线图信号

**今日无新增功能请求**（0条新开Issue）。

**从活跃PR推断下一版本方向**：
- **PR #15** 若合并，预计进入 **v1.6.8** 或 **v1.7.0**，继续完善macOS原生体验
- 潜在后续：基于v1.6.7的文档模式，可能补充Windows SmartScreen或Linux AppImage的类似安装指引

---

## 7. 用户反馈摘要

| 维度 | 提炼内容 |
|:---|:---|
| **痛点** | macOS安全机制误报导致"无法打开"的挫败感；OAuth失败时缺乏错误码或重试指引 |
| **使用场景** | 跨设备使用（便携版+安装版双需求）；依赖OpenAI账户体系的AI工作流集成 |
| **满意度** | 问题响应速度快（2天闭环），维护者主动提供终端命令解决方案 |
| **不满意** | 首次安装体验存在平台原生摩擦（Gatekeeper/SmartScreen类问题） |

**关键洞察**：用户愿意接受"运行命令解决"的技术方案，但期望**前置在文档中**而非事后搜索，说明安装引导的信息架构有优化空间。

---

## 8. 待处理积压

| 条目 | 创建时间 | 当前状态 | 提醒 |
|:---|:---|:---|:---|
| [#15 macOS图标修复](https://github.com/gaoyangz77/easyclaw/pull/15) | 2026-03-10 | 🟡 待合并（3天） | **建议优先审阅**：社区贡献者@mylinkedai的主动投入值得响应，避免贡献者流失；功能低风险、体验收益明确 |

**积压健康度**：整体良好。仅1个PR在审，无长期悬停Issue（>14天无响应）。

---

## 健康度评分

| 指标 | 评分 | 说明 |
|:---|:---|:---|
| 响应速度 | ⭐⭐⭐⭐⭐ | Issue 2天闭环 |
| 社区贡献 | ⭐⭐⭐⭐☆ | 有外部PR，待合并 |
| 发布节奏 | ⭐⭐⭐⭐⭐ | 问题驱动的小步快跑 |
| 文档完善 | ⭐⭐⭐⭐☆ | 平台适配文档及时补充 |
| **综合** | **A-** | 稳定维护期，建议加速PR #15合并以保持贡献者活跃度 |

---

*日报生成时间：2026-03-13*  
*数据来源：GitHub API 与公开仓库活动*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*