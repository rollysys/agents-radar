# AI 开源趋势日报 2026-09-10

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-10 03:41 UTC

---

# AI 开源趋势日报 · 2026-09-10

## 一、今日速览

今日 Trending 榜单几乎被「Agent Skills / Agent Harness」生态霸榜——围绕 Claude Code、Codex、Cursor 等编码智能体的技能框架、性能优化和输出治理项目集体爆发（i-have-adhd +4650、ECC +1133、diagram-design +2249）。AI 编码智能体已从“能用”进入“调优与工程化”阶段，token 压缩、记忆持久化、技能库成为新战场。同时，垂直领域的 Agent Skills（CAD、建筑设计）首次集中登榜，标志着 agentic 能力正向传统工程行业渗透。金融交易 Agent 与中文提示词工程资源也保持高热度。

---

## 二、筛选与分类说明

**Trending 榜单剔除项**：`liquidslr/system-design-notes`（纯系统设计面试笔记，与 AI 无关）。

其余 12 个 Trending 项目均与 AI 相关，结合主题搜索结果分类如下。

---

## 三、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 说明 |
|---|---|---|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 255,273（+1133 today） | Agent Harness 性能优化系统，为 Claude Code/Codex/Cursor 提供技能、直觉、记忆与安全机制，今日爆发式登榜 |
| [vastsa/PI-Desktop](https://github.com/vastsa/PI-Desktop) | +417 today | 本地优先的 AI 编码智能体桌面端（Electron + Rust + pi Agent Harness + 插件体系） |
| [openai/plugins](https://github.com/openai/plugins) | +498 today | OpenAI 官方插件仓库，平台级动态值得关注 |
| [ollama/ollama](https://github.com/ollama/ollama) | 180,541 | 本地推理事实标准，已支持 Kimi-K2.6、GLM-5.2、gpt-oss 等新模型 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 151,488 | 最流行的自托管 AI 界面 |
| [MirrowelL/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | 549 | 多厂商 LLM 统一网关与负载均衡 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | 317 | 端侧 X-Bit 量化 LLM 推理 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,464 | DeepSeek 原生终端编码 Agent，主打 prefix-cache 稳定性 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 说明 |
|---|---|---|
| [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | +4650 today（今日第一） | 让编码 Agent 输出“人类友好”而非信息轰炸的 Skill，精准击中 Agent 可用性痛点 |
| [obra/superpowers](https://github.com/obra/superpowers) | +688 today | Agentic Skills 框架 + 软件开发方法论，Skills 生态的代表作 |
| [Tencent/teamai-cli](https://github.com/Tencent/teamai-cli) | +556 today | 腾讯出品，目标“让每个团队 AI 原生化”，大厂入场团队级 Agent 工具 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 243,904 | “与你一起成长”的个人 Agent，累计 stars 极高 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 187,235 | 自主 Agent 老牌旗舰 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 113,981 | 浏览器操作 Agent 标准方案 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 47,957 | 港大超轻量自托管个人 Agent 框架 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 104,585 | “原始人说话”式 token 压缩 Skill，Agent 成本优化的趣味代表 |

### 📦 AI 应用（垂直场景产品）

| 项目 | Stars | 说明 |
|---|---|---|
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | +2249 today | 38 种编辑级图表模板，供 Claude Code/Codex 直接调用，编辑设计质量的 Skill 库 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | +367 today | 多 Agent LLM 金融交易框架，金融 Agent 持续走热 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 64,855 | LLM 多市场股票分析 + 自动推送，零成本运行 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 33,145 | 个人交易 Agent |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 53,380 | 文档/主题 → 原生 PPT 生成 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | +705 today | GPT-Image2 提示词逆向工程库，与 OpenAI 图像模型迭代直接相关 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 51,617 | 多模型统一生产力工作台 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 122,025 | AI 短视频自动生成 |

### 🧠 大模型/训练

| 项目 | Stars | 说明 |
|---|---|---|
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 53,784（+343 today） | 从零学 AI 工程，教育与实战结合 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 60,345 | 2 小时从零训练 64M 参数 LLM，中文社区现象级教学项目 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,555 | Apple Silicon 上手写 mini-vLLM，面向系统工程师 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,404 | 主流 LLM 评测平台 |
| [LiberCoders/FeatureBench](https://github.com/LiberCoders/FeatureBench) | 92 | ICLR 2026：面向复杂功能开发的 Agentic Coding 基准，学术前沿信号 |

### 🔍 RAG/知识库（向量库、检索增强、记忆）

| 项目 | Stars | 说明 |
|---|---|---|
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 71,126 | Agent 上下文压缩层（JSON 省 60-95% token），与今日 Skill 热潮同源 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 116,432 | 把代码库转为可查询知识图谱的 Claude Code/Cursor Skill，去向量化的新路线 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 93,582 | 跨会话持久记忆，支持几乎所有主流编码 Agent |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 65,014 | Agent 记忆基础设施的头部方案 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 35,604 | 无向量、推理式 RAG 的文档索引 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 12,926 | MLSys 2026 最佳论文：97% 存储节省的端侧 RAG |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 90,410 | RAG + Agent 融合引擎头部项目 |

---

## 四、趋势信号分析

今日最强的信号是 **Agent Skills / Agent Harness 生态的集体爆发**：Trending 13 席中约 8 个项目（ECC、superpowers、i-have-adhd、diagram-design、text-to-cad、pascalorg/editor 等）都围绕 Claude Code、Codex、Cursor 等编码智能体做“外围增强”——技能框架、输出治理、token 压缩、记忆持久化。这表明编码 Agent 竞争重心已从模型本身转移到** harness 层的工程化**：谁能更好地管理上下文、技能与行为，谁就赢。第二，**Agent Skills 正在垂直行业落地**——CAD/CAE/CAM 技能库（text-to-cad）、3D 建筑编辑器 MCP 工具首次登榜，传统工程软件成为 agentic 化的下一站。第三，与近期模型事件关联明显：openai/plugins 登榜与 awesome-gpt-image-2 走热指向 OpenAI 插件与图像模型的迭代；Ollama 描述中出现 Kimi-K2.6、GLM-5.2，显示国产开源模型在端侧生态的渗透加深。金融交易 Agent（TradingAgents、Vibe-Trading）与中文社区资源继续保持高活跃。

---

## 五、社区关注热点

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)**（25.5 万 stars，+1133）：Agent Harness 优化的系统性方法论，编码 Agent 用户必看
- **[ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd)**（+4650 今日第一）：Agent 输出可读性问题的小切口大爆发，代表“Agent UX”新细分方向
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)**：上下文压缩库/代理/MCP 三形态，token 成本优化的基础设施级机会
- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** + **[pascalorg/editor](https://github.com/pascalorg/editor)**：Agent Skills 进军 CAD 与建筑设计的早期信号，垂直赛道窗口期
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** / **[PageIndex](https://github.com/VectifyAI/PageIndex)**：无向量、确定性/推理式检索路线崛起，值得关注是否动摇传统向量库范式

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*