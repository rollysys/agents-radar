# AI 开源趋势日报 2026-03-15

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-15 02:41 UTC

---

你好！我是专注于 AI 开源生态的技术分析师。基于 2026-03-15 的 GitHub 数据，我为你整理了这份《AI 开源趋势日报》。

---

# 📰 AI 开源趋势日报 (2026-03-15)

## 1. 今日速览
今日 AI 开源社区呈现出**“Agent 基础设施化”与“工具链深度整合”**的双重趋势。
- **Agent 基建爆发**：以 **OpenViking**（上下文数据库）和 **InsForge**（Agent 后端）为代表的项目显示，社区正致力于解决 Agent 的“记忆管理”和“全栈开发能力”瓶颈，Agent 开发正从“写 Prompt”转向“搭建系统”。
- **Claude 生态崛起**：随着 **Claude Code** 的普及，其插件生态（`claude-plugins-official`, `claude-mem`）和优化框架（`everything-claude-code`）正在迅速抢占开发者心智，成为仅次于 OpenAI 的第二大开源工具生态。
- **RAG 进入深水区**：RAG 技术已从简单的检索演变为复杂的知识工程，**OpenRAG** 和 **LEANN** 等项目展示了更高效、更节省资源的下一代检索方案。

---

## 2. 各维度热门项目

### 🤖 AI 智能体/工作流
*Agent 框架、自动化、多智能体系统*

| 项目名 | Stars (今日增量) | 一句话亮点 |
| :--- | :--- | :--- |
| **[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)** | ⭐4,280 (+4280) | **今日最爆**。一套完整的 AI Agency 解决方案，包含从前端向导到社区管理的各类专家级 Agent。 |
| **[volcengine/OpenViking](https://github.com/volcengine/OpenViking)** | ⭐1,610 (+1610) | 专为 AI Agent 设计的开源上下文数据库，通过文件系统范式统一管理 Agent 的记忆、资源和技能。 |
| **[obra/superpowers](https://github.com/obra/superpowers)** | ⭐1,439 (+1439) | 一个旨在赋予 AI Agent “超能力”的技能框架及软件开发方法论。 |
| **[InsForge/InsForge](https://github.com/InsForge/InsForge)** | ⭐482 (+482) | **值得关注**。专为 Agentic Development 设计的后端，赋予 Agent 构建全栈应用所需的一切能力。 |
| **[anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)** | ⭐411 (+411) | Anthropic 官方管理的 Claude Code 插件目录，标志着 Claude Agent 生态的正规化。 |

### 🔧 AI 基础工具
*框架、SDK、推理引擎、开发工具*

| 项目名 | Stars (今日增量) | 一句话亮点 |
| :--- | :--- | :--- |
| **[affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code)** | ⭐76,008 | 针对 Claude Code 的性能优化系统，涵盖技能、本能、记忆和安全，支持多种代码生成工具。 |
| **[lightpanda-io/browser](https://github.com/lightpanda-io/browser)** | ⭐2,069 (+2069) | 专为 AI 和自动化设计的无头浏览器，解决了现有浏览器在 AI 数据抓取场景下的性能痛点。 |
| **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** | ⭐34,906 | Claude Code 的记忆插件，能自动压缩会话内容并注入上下文，解决长程编码记忆问题。 |
| **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** | ⭐27,069 | 教你从零构建一个类似 Claude Code 的 Agent，核心理念是 "Bash is all you need"。 |

### 🔍 RAG/知识库
*向量数据库、检索增强、知识管理*

| 项目名 | Stars (今日增量) | 一句话亮点 |
| :--- | :--- | :--- |
| **[langflow-ai/openrag](https://github.com/langflow-ai/openrag)** | ⭐564 (+564) | 基于 Langflow 构建的一站式 RAG 平台，集成了 Docling 和 Opensearch，简化 RAG 部署。 |
| **[yichuan-w/LEANN](https://github.com/yichuan-w/LEANN)** | ⭐10,311 | **技术创新**。号称享受 97% 的存储节省，能在个人设备上运行快速、准确且完全私有的 RAG。 |
| **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** | ⭐75,002 | 老牌 RAG 引擎，现已深度融合 Agent 能力，为 LLM 提供更优的上下文层。 |

### 📦 AI 应用
*具体应用产品、垂直场景解决方案*

| 项目名 | Stars (今日增量) | 一句话亮点 |
| :--- | :--- | :--- |
| **[fishaudio/fish-speech](https://github.com/fishaudio/fish-speech)** | ⭐381 (+381) | SOTA 级开源 TTS（语音合成）项目，持续引领开源语音生成质量。 |
| **[saturndec/waoowaoo](https://github.com/saturndec/waoowaoo)** | ⭐9,348 | 首家工业级全流程 AI 影视生产平台，展示了 Agent 在复杂创意工作流中的应用。 |
| **[p-e-w/heretic](https://github.com/p-e-w/heretic)** | ⭐694 (+694) | 针对 LLM 的全自动审查移除工具，反映了社区对模型输出控制权的重视。 |

### 🧠 大模型/训练
*模型权重、训练框架、微调工具*

| 项目名 | Stars (今日增量) | 一句话亮点 |
| :--- | :--- | :--- |
| **[unslothai/unsloth](https://github.com/unslothai/unsloth)** | ⭐53,988 | 支持 DeepSeek, Qwen, Llama 等主流模型的高效微调工具，显存占用降低 70%。 |
| **[ollama/ollama](https://github.com/ollama/ollama)** | ⭐165,072 | 本地大模型运行的事实标准，现已全面支持 Kimi-K2.5, GLM-5 等最新国产模型。 |

---

## 3. 趋势信号分析

**1. Agent "器官" 移植手术正在进行**
今日 Trending 榜单被 **Agent 基础设施**占据。`OpenViking` 解决了“大脑记忆（Context）”问题，`InsForge` 解决了“四肢（Backend Execution）”问题，而 `lightpanda` 解决了“眼睛”问题。这表明 2026 年的 AI 开发重点已从单纯的“模型智力”转向“Agent 的系统性构建”，开发者正在为 LLM 打造可插拔的“器官”以适应复杂环境。

**2. Claude 生态的开源反攻**
Claude 相关的开源项目（`claude-plugins`, `claude-mem`, `learn-claude-code`）在 Search 榜单中占据了显著位置，甚至有反超 OpenAI 生态之势。特别是 `claude-mem` 这类解决上下文窗口痛点的工具，显示了开发者对 Anthropic 模型在长文本编码场景下的高度依赖。

**3. "Browser Use" 的技术栈迭代**
`lightpanda-io/browser` 的蹿红标志着 AI 自动化对传统浏览器的抛弃。传统的 Selenium/Puppeteer 过于臃肿，专为 AI 设计的 Zig 语言无头浏览器提供了更高的吞吐量和更低的资源消耗，这将是接下来 AI 数据抓取和 Web Agent 的重要基建。

---

## 4. 社区关注热点
开发者今日应重点关注以下方向：

*   💡 **Agent Memory 的新范式**：关注 [volcengine/OpenViking](https://github.com/volcengine/OpenViking)。它提出的“通过文件系统管理上下文”可能成为解决 Agent 长期记忆和技能管理的标准解法。
*   🛠 **Claude Code 插件开发**：[anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) 意味着 Claude Code 正在形成 VS Code 般的插件生态，现在是入局开发工具类插件的好时机。
*   🚀 **轻量级 RAG 革命**：[yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) 承诺的“97% 存储节省”如果属实，将极大降低端侧设备运行 RAG 的门槛，值得技术深究。
*   🎬 **Agent 组织架构设计**：[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) 展示了如何构建一个“Agent 公司”，对于想要落地企业级 AI 自动化的团队具有极高的参考价值。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*