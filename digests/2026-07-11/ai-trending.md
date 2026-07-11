# AI 开源趋势日报 2026-07-11

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-11 02:49 UTC

---

# AI 开源趋势日报 (2026-07-11)

## 1. 今日速览

今日 GitHub Trending 榜单几乎被 **AI Agent（智能体）开发工具链**霸榜，显示出社区焦点已从模型层全面转向应用层的“技能标准化”与“环境交互”。以 `agent-skills` 和 `DesktopCommanderMCP` 为代表的项目爆发式增长，标志着 AI Agent 正在从“对话者”向“操作者”进化，MCP（Model Context Protocol）协议生态正在迅速成熟。此外，**办公自动化**领域出现重磅项目 `OfficeCLI`，实现了 AI Agent 对 Office 三件套的无依赖读写。基础设施层面，腾讯开源的 `TencentDB-Agent-Memory` 解决了 Agent 长期记忆的痛点，进一步夯实了 Agent 落地的技术底座。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、工具链）

- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** [JavaScript] ⭐0 (**+1116 today**)
  **一句话说明**：定义了生产级 AI 编码 Agent 的工程技能标准，今日热度极高，为 Agent “如何写代码”树立了规范。

- **[wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP)** [TypeScript] ⭐0 (**+328 today**)
  **一句话说明**：让 Claude 通过 MCP 协议获得终端控制权和文件系统操作能力的必备工具，连接了 LLM 与本地系统环境。

- **[davila7/claude-code-templates](https://github.com/davila7/claude-code-templates)** [Python] ⭐0 (**+118 today**)
  **一句话说明**：针对 Claude Code 的配置与监控 CLI 工具，优化了开发者的 Agent 调试体验。

- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** [Python] ⭐85,933
  **一句话说明**：业界领先的高吞吐量 LLM 推理引擎，是当前部署大模型的事实标准之一。

- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐175,893
  **一句话说明**：最流行的本地大模型运行工具，支持 Kimi、DeepSeek 等最新模型，降低了本地部署门槛。

### 🤖 AI 智能体/工作流（Agent 框架、自动化）

- **[mattpocock/skills](https://github.com/mattpocock/skills)** [Shell] ⭐0 (**+1712 today**)
  **一句话说明**：由知名开发者 Matt Pocock 发布，提供了一套真实的工程师级 Agent 技能库，今日新增 Star 极高，引发社区热烈讨论。

- **[obra/superpowers](https://github.com/obra/superpowers)** [Shell] ⭐0 (**+1013 today**)
  **一句话说明**：一套 Agent 能力框架与软件开发方法论，旨在赋予 Agent “超能力”以解决复杂工程问题。

- **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** [TypeScript] ⭐0 (**+117 today**)
  **一句话说明**：Google Labs 推出的 Agent Skills 库，兼容多种编码 Agent（如 Gemini CLI, Claude Code），推动了跨平台的技能复用。

- **[langgenius/dify](https://github.com/langgenius/dify)** [TypeScript] ⭐148,443
  **一句话说明**：生产级 Agent 工作流开发平台，长期稳居热榜，是企业构建 AI 应用的首选开源方案。

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐212,812
  **一句话说明**：高人气通用 Agent 框架，强调 Agent 的自我进化与成长能力，总 Star 数突破 20 万。

### 📦 AI 应用（垂直场景解决方案）

- **[iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI)** [C#] ⭐0 (**+1224 today**)
  **一句话说明**：今日最亮眼的应用层项目，专为 AI Agent 设计的 Office 套件命令行工具，无需安装 Office 即可读写编辑 Word/Excel/PPT。

- **[santifer/career-ops](https://github.com/santifer/career-ops)** [JavaScript] ⭐59,569
  **一句话说明**：开源 AI 求职助手，能自动扫描职位、打分、定制简历，展示了 Agent 在个人生活场景的实际落地。

- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐38,259
  **一句话说明**：从任意文档生成可编辑 PPT 的 Agent 应用，解决了生成式 AI 输出格式不可编辑的痛点。

- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** [Python] ⭐56,518
  **一句话说明**：LLM 驱动的多市场股票分析系统，展示了 AI 在金融决策场景的自动化潜力。

### 🔍 RAG/知识库（记忆与检索）

- **[TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)** [TypeScript] ⭐0 (**+123 today**)
  **一句话说明**：腾讯云开源的 Agent 记忆层，通过 4 层渐进式管道实现完全本地化的长期记忆，解决了 Agent “金鱼记忆”难题。

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐84,781
  **一句话说明**：深度融合 RAG 与 Agent 能力的引擎，提供了卓越的上下文理解能力，是 RAG 领域的明星项目。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐60,578
  **一句话说明**：专为 AI Agent 设计的通用记忆层，易于集成的特性使其成为开发者构建持久化 Agent 的首选。

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐81,986
  **一句话说明**：将代码和文档转化为知识图谱的技能库，为 Agent 提供了深度的上下文推理能力。

### 🧠 大模型/训练（底层核心）

- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐162,460
  **一句话说明**：机器学习领域的基石框架，定义了最先进的模型架构标准。

- **[ultralytics/ultralytics](https://github.com/ultralytics/ultralytics)** [Python] ⭐59,337
  **一句话说明**：最新的 YOLO26 等视觉模型库，持续引领计算机视觉领域的工业应用。

- **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** [JavaScript] ⭐55,863
  **一句话说明**：持续更新的系统提示词泄露库，涵盖 Claude, GPT-5, Gemini 3.5 等主流模型，是研究大模型指令工程的重要资源。

---

## 3. 趋势信号分析

**“Agent Skills” 与 “MCP” 协议成为今日绝对核心**。
今日 Trending 榜单中，`mattpocock/skills`、`addyosmani/agent-skills`、`google-labs-code/stitch-skills` 同时上榜，且 Star 增长迅猛。这表明 AI 开源社区正在经历从“构建 Agent 框架”到“定义 Agent 能力标准”的转变。开发者们不再满足于简单的对话机器人，而是致力于定义一套标准化的技能体系，让 Agent 能够像人类工程师一样执行复杂任务。

**AI 办公自动化进入“无依赖”时代**。
`iOfficeAI/OfficeCLI` 的爆发（今日 +1.2k stars）极具信号意义。它标志着 AI Agent 开始真正进入传统的企业办公领域，且不再依赖沉重的 Office COM 接口或复杂的 GUI 自动化，而是通过 CLI 直接操作文档底层，这为 AI 驱动的企业级流程自动化（RPA）打开了新大门。

**Claude 生态开发者工具渗透率激增**。
榜单中大量项目（如 `DesktopCommanderMCP`, `claude-code-templates` 等）明确提及适配 Claude 或 Anthropic 标准。这反映出在代码生成与工具调用领域，Claude 系列模型及其 MCP 协议正在成为开发者构建 Agentic Workflow 的首选平台，甚至在开发体验上超越了早期的 LangChain 生态。

---

## 4. 社区关注热点

- **[mattpocock/skills](https://github.com/mattpocock/skills)**：知名技术大牛背书，定义了“工程师级” Agent 的技能基线，对于希望提升 Agent 实战能力的开发者极具参考价值。
- **[iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI)**：解决了 AI 操控 Office 文档的痛点，是目前最具商业化落地潜力的开源 AI 工具之一，值得企业开发者关注。
- **[TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)**：腾讯云开源的 Agent 记忆方案，提供了“完全本地化”的解决方案，在数据隐私敏感型企业场景下极具吸引力。
- **[wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP)**：MCP 协议的最佳实践案例，展示了如何安全地赋予 AI 本地系统级权限，是学习 MCP 开发的必看项目。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*