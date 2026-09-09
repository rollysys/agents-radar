# AI 开源趋势日报 2026-09-09

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-09 03:43 UTC

---

# 《AI 开源趋势日报》2026-09-09

## 一、今日速览

今日 Trending 榜单被 **AI 编程智能体“技能生态”** 强势占据——Claude Code / Codex 的 Skills 框架、上下文优化、行为调优类项目密集登榜，标志着 Agent Harness 已成为新的创业与开源焦点。OpenAI 官方下场发布 [openai/skills](https://github.com/openai/skills)，与社区技能生态形成正面竞争。[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)（HTML 转 Agent 视频渲染）单日 +2627 stars 为今日最高。同时“上下文压缩/记忆持久化”方向持续升温，[context-mode](https://github.com/mksglu/context-mode)、[headroom](https://github.com/headroomlabs-ai/headroom)、[claude-mem](https://github.com/thedotmack/claude-mem) 形成完整赛道。Agent 反爬虫浏览器（camofox）与自主量化交易（AutoHedge）代表 Agent 向基础设施和金融场景纵深渗透。

---

## 二、AI 相关性筛选说明

Trending 榜单 16 个项目中，**排除非 AI 项目 2 个**：
- ❌ [MoonTechLab/LunaTV](https://github.com/MoonTechLab/LunaTV) — 影视聚合站，非 AI
- ❌ [viarotel-org/escrcpy](https://github.com/viarotel-org/escrcpy) — Android 投屏工具，非 AI

主题搜索中排除边缘相关：`tensorflow`、`pytorch`、`scikit-learn`、`keras`、`Julia`、`airflow`、`cs-video-courses`、`prompts.chat`、`netdata`、`oceanbase` 等传统 ML 基建/课程类仅酌情保留于基础工具维度。

---

## 三、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars | 说明 |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐180,491 | 本地推理引擎事实标准，已支持 Kimi-K2.6、GLM-5.2、gpt-oss 等最新开源模型 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐151,391 | 最流行的自托管 LLM 前端界面 |
| [openai/skills](https://github.com/openai/skills) | +490 today | **OpenAI 官方 Codex Skills 目录**，官方入场 Agent 技能生态的标志性事件 |
| [openai/plugins](https://github.com/openai/plugins) | +105 today | OpenAI 插件体系，与 skills 呼应，官方 Agent 扩展双轨布局 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | +651 today | Agent 上下文窗口优化：工具输出沙箱化（token 减 98%），跨 17 平台 MCP+hooks 路由 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8,562 | Rust 生态模块化 LLM 应用框架 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐4,553 | Apple Silicon 上的迷你 vLLM，学习推理系统的优秀教材 |

### 🤖 AI 智能体/工作流

| 项目 | Stars | 说明 |
|---|---|---|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐254,419 / **+1427 today** | Agent Harness 性能优化系统，双榜霸榜，今日最热 Agent 工程 |
| [obra/superpowers](https://github.com/obra/superpowers) | +452 today | Agent 技能框架 + 可落地的软件开发方法论 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐243,502 | “与你一起成长的 Agent”，个人 Agent 长期演进方向代表 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐113,621 / +228 today | 浏览器操作 Agent 的事实标准库 |
| [jo-inc/camofox-browser](https://github.com/jo-inc/camofox-browser) | +871 today | 隐身无头浏览器，专为 Agent 绕过 Cloudflare/反爬设计，Puppeteer 即插替代 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐47,906 | 港大超轻量自托管个人 Agent 框架 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐37,260 | Agent 前端栈与 AG-UI 协议，Generative UI 方向代表 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | ⭐41,285 | 构建高鲁棒性 Agent 图工作流的主流引擎 |

### 📦 AI 应用（垂直场景）

| 项目 | Stars | 说明 |
|---|---|---|
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | **+2627 today（日增第一）** | “写 HTML 渲染视频”，HeyGen 出品的 Agent 原生视频生成管线 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | +2047 today | 微软文档转 Markdown 工具，LLM 数据预处理刚需 |
| [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | +656 today | 让编码 Agent 输出“ADHD 友好”直给答案，提示工程娱乐化出圈 |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | +710 today | 38 种编辑级图表技能包，供 Claude Code/Codex 使用的 HTML+SVG 资产 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | +666 today | 市场营销技能包（CRO/SEO/文案），Agent 技能向非技术职业扩张 |
| [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | +333 today | 单文件 CLAUDE.md，Karpathy 总结的 LLM 编码陷阱最佳实践 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐64,810 | LLM 驱动多市场股票分析 + 自动推送，零成本定时运行 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐53,131 | 文档/主题 → 原生 PowerPoint，含动画、图表、语音旁白 |
| [The-Swarm-Corporation/AutoHedge](https://github.com/The-Swarm-Corporation/AutoHedge) | +494 today | 群体智能 + Agent 的自主对冲基金，金融自动化新样本 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐46,842 | 原 chatgpt-on-wechat 升级为自进化超级助手，多渠道部署 |

### 🧠 大模型/训练

| 项目 | Stars | 说明 |
|---|---|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐60,009 | 2 小时从零训练 64M 参数 LLM，中文社区最佳入门项目 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐121,644 | 大模型自动生成短视频工作流 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐61,421 | YOLO26 已发布，CV 检测/分割/追踪全家桶 |
| [ridgerchu/matmulfreellm](https://github.com/ridgerchu/matmulfreellm) | ⭐3,090 | MatMul-free LM 实现，前沿架构复现 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,402 | 主流 LLM 评测平台，100+ 数据集 |
| [LiberCoders/FeatureBench](https://github.com/LiberCoders/FeatureBench) | ⭐91 | ICLR 2026：复杂特性开发的 Agentic Coding 基准 |

### 🔍 RAG/知识库

| 项目 | Stars | 说明 |
|---|---|---|
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐145,976 | 定位已迁移为“Agent 工程平台” |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐116,104 | 代码库 → 可查询知识图谱技能，AST 确定性解析、去向量库 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐93,517 | 跨会话持久记忆，覆盖 Claude Code/Codex/Gemini 等全部主流 Agent |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐70,833 | 工具输出/日志/RAG 分块压缩，JSON 省 60-95% token |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐90,336 | RAG + Agent 融合引擎的头部开源方案 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐64,942 | Agent 记忆层基础设施的标准候选 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐35,586 | 无向量、推理式 RAG 的新范式 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐12,924 | MLSys 2026 最佳论文：个人设备上省 97% 存储的隐私 RAG |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐30,603 | 自托管知识图谱 Agent 记忆平台 |

---

## 四、趋势信号分析

**1. Agent Skills 生态爆发，OpenAI 官方下场。** 今日 16 个 Trending 项目中约 8 个直接围绕 Claude Code / Codex 的技能包、行为调优（CLAUDE.md）、harness 优化展开。[openai/skills](https://github.com/openai/skills) 官方目录与社区技能包（marketing、diagram、Karpathy 规则）同日竞争，说明“Agent 人格与能力注入层”已成平台级争夺点。

**2. 上下文经济学成为独立赛道。** context-mode（+651）、headroom、claude-mem 同属“token 压缩 + 记忆持久化”方向，配合娱乐化的 caveman（省 65% token）与 ponytail，社区在用工程与幽默双线对抗上下文成本。

**3. Agent 基础设施补齐“对抗层”。** camofox-browser 专为 Agent 绕过反爬而生，预示网站与 Agent 的攻防将成为基建刚需。

**4. 与行业事件关联：** Ollama 描述中出现 Kimi-K2.6、GLM-5.2、MiniMax 等国产模型，DeepSeek-Reasonix（35k stars）围绕 DeepSeek 前缀缓存做原生 Agent——国产开源模型正在反向定义海外 Agent 工具链的设计。

---

## 五、社区关注热点

- **[openai/skills](https://github.com/openai/skills)** — 官方 Codex 技能目录，定义技能分发标准，值得跟踪其与 Claude Code 技能生态的兼容与分化。
- **[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)** — 日增 2627 stars，"Agent 原生视频生成”可能是 AIGC 视频的下一个交互范式。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — 25 万 stars 的 Agent Harness 优化集大成者，研究 Agent 工程 best practice 的首选。
- **[context-mode](https://github.com/mksglu/context-mode) + [claude-mem](https://github.com/thedotmack/claude-mem)** — 上下文压缩与记忆持久化组合，长会话 Agent 开发者刚需。
- **[PageIndex](https://github.com/VectifyAI/PageIndex) / [LEANN](https://github.com/StarTrail-org/LEANN)** — "无向量 RAG"学术新范式持续走高，可能重塑 RAG 技术栈选型。

*数据来源：GitHub Trending（2026-09-09）及 GitHub Search API，分析仅供参考。*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*