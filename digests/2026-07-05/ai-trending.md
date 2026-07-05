# AI 开源趋势日报 2026-07-05

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-05 03:40 UTC

---

# AI 开源趋势日报 (2026-07-05)

## 1. 今日速览

今日 AI 开源生态呈现出明显的**“Agent 技能化与协议化”**趋势。社区焦点从单一的模型能力转向 Agent 的工具调用标准，**MCP（Model Context Protocol）** 相关工具与 **Agent Skills** 仓库迎来爆发，如 Chrome DevTools MCP 和各类 Claude/Codex Skills 项目集中登榜。同时，**Token 优化技术**受到极高关注，`caveman` 项目证明了通过提示词压缩能显著降低成本，反映出开发者对 LLM 运行效率的极致追求。此外，**AI 安全攻防**成为新热点，开源渗透测试工具的出现标志着 AI 伦理与安全正在工程化落地。

---

## 2. 各维度热门项目

### 🤖 AI 智能体/工作流

- **[alibaba/page-agent](https://github.com/alibaba/page-agent)** [TypeScript] ⭐Unknown (+742 today)
  - **说明**：阿里巴巴开源的 JavaScript 页面级 GUI Agent，支持通过自然语言控制网页界面，是 Web Agent 领域的重要尝试。
- **[alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)** [Python] ⭐Unknown (+136 today)
  - **说明**：包含 337 个 Claude Code/Codex 技能插件，覆盖工程、营销、合规等 8 大场景，是目前最全面的 Agent 技能库之一。
- **[mattpocock/skills](https://github.com/mattpocock/skills)** [Shell] ⭐Unknown (+973 today)
  - **说明**：TS 大神 Matt Pocock 发布的实用工程师技能集，展示了如何通过结构化 Skills 提升 Agent 在真实工程任务中的表现。
- **[ogulcancelik/herdr](https://github.com/ogulcancelik/herdr)** [Rust] ⭐Unknown (+707 today)
  - **说明**：终端多路复用 Agent 管理器，旨在解决多 Agent 协作时的进程管理痛点。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐209,259 (Total)
  - **说明**：来自 Search 榜单，高星项目，定位为“与你共同成长的 Agent”，体现了当前 Agent 追求长期记忆与自我进化的趋势。

### 🔧 AI 基础工具

- **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** [TypeScript] ⭐Unknown (+304 today)
  - **说明**：官方推出的 MCP 桥接工具，允许 AI Agent 直接控制 Chrome DevTools，是 Agent 接管浏览器基础设施的关键一步。
- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** [JavaScript] ⭐84,075 (+1089 today)
  - **说明**：极具创意的 Token 压缩技能，通过模拟“穴居人”语言风格将 Token 消耗减少 65%，在成本敏感的开发者社区引发热议。
- **[openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc)** [JavaScript] ⭐Unknown (+718 today)
  - **说明**：OpenAI 官方推出的 Codex 插件，打通了 Codex 与 Claude Code 的协作链路，标志着大模型工具链走向互联互通。
- **[CoplayDev/unity-mcp](https://github.com/CoplayDev/unity-mcp)** [C#] ⭐Unknown (+69 today)
  - **说明**：连接 Unity 编辑器与 AI 助手的 MCP 桥梁，让 LLM 具备了直接操作游戏引擎资产和场景的能力。
- **[crynta/terax-ai](https://github.com/crynta/terax-ai)** [TypeScript] ⭐Unknown (+62 today)
  - **说明**：仅 7MB 的终端优先 AI 开发环境，主打轻量级与本地化，迎合了开发者对隐私和速度的双重需求。

### 📦 AI 应用

- **[usestrix/strix](https://github.com/usestrix/strix)** [Python] ⭐Unknown (+1904 today)
  - **说明**：开源 AI 渗透测试工具，能自动发现并修复应用漏洞，代表了 AI 在网络安全（SecOps）领域的垂直落地。
- **[Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily)** [Rust] ⭐Unknown (+718 today)
  - **说明**：隐私优先的会议助手，支持本地离线转写与总结，解决了云端 AI 处理敏感会议记录的隐私担忧。
- **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** [JavaScript] ⭐Unknown (+471 today)
  - **说明**：持续更新的系统提示词泄露库，涵盖 GPT-5.5、Claude Opus 4.8 等最新模型，是逆向工程与提示词工程的重要资源。

### 🔍 RAG/知识库

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐77,717 (Total)
  - **说明**：将代码库转化为可查询知识图谱的 RAG 技能，显著增强了 Agent 对复杂代码结构的理解能力。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [JavaScript] ⭐85,855 (Total)
  - **说明**：为 Agent 提供跨会话的持久化记忆层，解决了 LLM 无状态导致的长任务执行痛点。

### 🧠 大模型/训练

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐226,068 (Total)
  - **说明**：Agent Harness 性能优化系统，专注于提升模型在复杂任务中的本能反应与安全性。

---

## 3. 趋势信号分析

**1. "Skills" 经济爆发，Agent 进入装备竞赛**
今日 Trending 榜单中至少有 4 个项目直接以 "Skills" 或 "Plugin" 命名（如 `claude-skills`, `dotnet/skills`, `mattpocock/skills`）。这表明 AI Agent 开发模式正从“Prompt Engineering”转向“Skills Engineering”。开发者不再满足于通用对话，而是致力于构建标准化的工具库，让 Agent 能像人类程序员一样调用各种专业工具。

**2. MCP 协议正在统一 Agent 与物理世界的接口**
`ChromeDevTools MCP` 和 `Unity MCP` 的出现验证了 MCP（Model Context Protocol）作为 Agent 标准接口的潜力。从浏览器自动化到游戏开发，MCP 正在迅速填补 LLM 与传统软件交互的鸿沟。这一趋势预示着未来 AI 将能无缝接管更多现有软件工具，而非仅仅停留在聊天窗口内。

**3. Token 效率优化成为显学**
`caveman` 项目通过幽默的“穴居人”语言压缩 Token 竟获得千余 Star，深刻反映了开发者对 Token 成本和延迟的焦虑。随着模型上下文长度增加，如何以低成本维持长程记忆和复杂任务处理，催生了“Token 压缩”这一细分技术赛道。

**4. AI 安全与隐私本地化需求激增**
`strix`（渗透测试）和 `meetily`（本地会议助手）的高增长，显示出企业级用户对 AI 的核心诉求正在分化：一方面需要 AI 具备攻击性测试能力以防御威胁，另一方面对敏感数据（如会议记录）的处理严守“本地化”底线，不依赖云端的纯端侧 AI 方案正逐渐成熟。

---

## 4. 社区关注热点

- **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)**：前端与自动化开发者重点关注。这标志着 AI Agent 控制浏览器的能力得到了官方基础设施层面的支持，Web 自动化测试与爬虫即将迎来革命性升级。
- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)**：成本敏感型项目必看。它提供了一种极简的思路来降低 API 调用成本，适合需要大规模处理文本的场景。
- **[usestrix/strix](https://github.com/usestrix/strix)**：安全从业者的新工具。开源 AI 渗透测试工具填补了安全领域 AI 应用的空白，值得 DevOps 团队集成到 CI/CD 流程中。
- **[alibaba/page-agent](https://github.com/alibaba/page-agent)**：国内大厂在 Web Agent 领域的开源尝试，技术架构值得关注，特别是其对自然语言控制 DOM 树的实现方案。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*