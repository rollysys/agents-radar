# AI 开源趋势日报 2026-10-29

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-10-29 04:53 UTC

---

# AI 开源趋势日报（2026-10-29）

## 1️⃣ 今日速览

今日 GitHub Trending 被 **"AI Skills / Agent 工程”** 强势占领：obra/superpowers、expo/skills、Nutlope/hallmark 等围绕 Claude Code / Codex 等 coding agent 的“技能框架”与“反 AI 味设计”项目集体爆发，表明社区关注点已从“能不能用 agent”转向“如何让 agent 干得好”。HKUDS/DeepTutor（+2371）登顶今日新增 stars，个性化 AI 辅导成为学术团队又一爆款方向。同时，本地优先的 AI 桌面工作区（openbot、thinkrail）与 agent 记忆/上下文基础设施（claude-mem、mem0、headroom）持续升温，AI 开源生态正从模型层向“工程化、个性化、去中心化”纵深演进。

---

## 2️⃣ 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具）

| 项目 | Stars | 说明 |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | 185,156 | 本地大模型推理事实标准，已支持 Kimi、GLM、DeepSeek、gpt-oss、Qwen 等主流开源模型 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 168,318 | 模型定义框架，文本/视觉/多模态训练与推理的基石 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 157,094 | 最流行的自托管 AI 界面，兼容 Ollama 与 OpenAI API |
| [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | +2110 today | "Anti-AI-slop" 设计 Skill，专治 Claude Code/Cursor/Codex 产出的 AI 味 UI，今日爆发 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | +1472 today | 给 coding agent 的“设计词汇表”，审计、批评、拦截 AI slop，与 hallmark 同题材双爆发 |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | +1068 today | JetBrains 官方轻量 vibe coding IDE，围绕开发者习惯自我定制，大厂正式入场 vibe coding |
| [expo/skills](https://github.com/expo/skills) | +90 today | Expo 官方出品的 AI agent skills 合集，大厂为 agent 生态提供官方技能包的信号 |

### 🤖 AI 智能体/工作流

| 项目 | Stars | 说明 |
|---|---|---|
| [morluto/rea](https://github.com/morluto/rea) | 403,600 | 用 agent 逆向工程一切——从应用行为到原生二进制，超高频新星 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 291,907 | Agent harness 性能优化系统：skills、instincts、记忆、安全一体化 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 258,226 | "与你共同成长的 agent"，长期个性化智能体方向 |
| [obra/superpowers](https://github.com/obra/superpowers) | +1095 today | Agentic skills 框架 + 软件开发方法论，今日 skills 浪潮的核心项目 |
| [nightly-labs/openbot](https://github.com/nightly-labs/openbot) | +1054 today | 本地优先桌面工作区，统一运行 Codex/Claude/Grok 并支持 agent 间协作 |
| [makecindy/cindy](https://github.com/makecindy/cindy) | +728 today | 开箱即用的开源 AI Agent，中英双语定位，主打“零配置可用” |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 105,753 | 给 agent 装上“看全互联网的眼睛”，一条 CLI 读遍 Twitter/Reddit/YouTube/B站，零 API 费 |

### 📦 AI 应用

| 项目 | Stars | 说明 |
|---|---|---|
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | 48,389 (+2371 today) | 终身个性化 AI 辅导，今日新增 stars 全场第一，港大 HKUDS 又一爆款 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 137,994 | 把代码库+文档+SQL 变成可查询知识图谱的 Skill，确定性 AST 解析、无向量库 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 78,437 | AI 求职 agent：扫岗位、按 CV 打分、定制简历，本地运行于 coding CLI |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 70,378 | 文档/主题 → 原生 PowerPoint（含动画、图表、语音旁白），办公自动化刚需 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 67,230 | LLM 驱动多市场股票分析：行情+新闻+决策看板+自动推送，零成本定时运行 |
| [JetBrains 之外] [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 53,059 | AI 生产力工作室，300+ 助手统一接入门户 |

### 🧠 大模型/训练

| 项目 | Stars | 说明 |
|---|---|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 64,571 | 2 小时从零训练 64M 参数 LLM，最佳教育向训练项目 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,556 | LLM 评测平台，覆盖 OpenAI/Anthropic/Qwen/GLM/DeepSeek 等 100+ 数据集 |
| [labmlai/annotated_deep_learning_paper_implementations](https://github.com/labmlai/annotated_deep_learning_paper_implementations) | 67,603 | 60+ 深度学习论文带注释实现，经典教学资源长青 |
| [datamllab/OpenEBFM](https://github.com/datamllab/OpenEBFM) | 187 | 能量基座模型（EBFM）开源训练代码，前沿学术方向值得关注 |

### 🔍 RAG/知识库

| 项目 | Stars | 说明 |
|---|---|---|
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 148,654 | "Agent engineering platform"，RAG/Agent 编排头号框架 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 104,087 | 跨会话持久上下文，AI 压缩+按需注入，兼容所有主流 coding agent |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 93,039 | 深度文档理解的 RAG 引擎，RAG+Agent 融合的 Context 层 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 78,172 | LLM 输入压缩：coding agent 省 20% token，JSON 省 60-95%，成本敏感时代刚需 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 68,017 | Agent 记忆层事实标准，生产级持久记忆基础设施 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 41,079 | 字节系自进化上下文数据库，统一 Agent 记忆、RAG 与 Skills |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 39,883 | 无向量、推理式 RAG，检索范式的新挑战者 |

---

## 3️⃣ 趋势信号分析

**① AI Skills 生态正在爆发。** 今日热榜中 superpowers、hallmark、impeccable、expo/skills、graphify 多个项目本质上都是“给 coding agent 用的 Skill 包”，且新增 stars 均破千。这说明 Claude Code / Codex / Cursor 等 agent harness 已形成统一插件标准，Skills 正成为 2026 年类似 “subcommand / MCP” 之后的新一代扩展形态，大厂（JetBrains、Expo）开始官方入场。

**② “反 AI 味（Anti-slop）”成为新话题。** hallmark 与 impeccable 同日爆红，社区从追求“AI 能写”转向“AI 写得像人、有设计感”，质量审美层工具是新兴空白地带。

**③ Agent 基础设施聚焦“上下文与记忆”。** claude-mem、mem0、headroom（token 压缩）、OpenViking 全部围绕“持久上下文 / 降低 token 成本”，且PageIndex 掀起“无向量 RAG”路线之争——向量数据库的垄断地位正被挑战。

**④ 应用层向个性化、本地化下沉。** DeepTutor（终身个性化辅导）、openbot（本地桌面 agent 队友）、cindy（开箱即用）反映隐私与本地优先成为用户侧主诉求，与开源模型（DeepSeek、gpt-oss、Qwen）端侧部署成熟密切相关。

---

## 4️⃣ 社区关注热点

- **[obra/superpowers](https://github.com/obra/superpowers)** — Skills + 方法论双轮驱动，是理解 "Agent Skills" 新范式的最佳入口，今天该方向的中心节点
- **[Nutlope/hallmark](https://github.com/Nutlope/hallmark) + [pbakaus/impeccable](https://github.com/pbakaus/impeccable)** — "AI slop" 治理双星，前端/设计开发者必看，代表 AI 生成代码质量管控新赛道
- **[HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor)** — 今日 +2371 stars 榜首，教育场景 + 终身个性化记忆，学术团队产品化的标杆案例
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — token 成本焦虑下的必答之题，库/代理/MCP 三形态接入，生产环境可直接落地
- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — “无向量、推理式 RAG”路线代表，若验证成功可能改写向量数据库市场格局，值得技术选型者跟踪

---
*数据说明：Trending 榜单今日新增 stars 为实时数据；主题搜索 stars 为总量。已过滤非 AI 项目（LinkSwift 网盘工具、the-craft-of-selfteaching 自学教程、cs-video-courses 课程列表等）。*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*