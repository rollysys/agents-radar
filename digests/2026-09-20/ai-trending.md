# AI 开源趋势日报 2026-09-20

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-20 03:59 UTC

---

# 📰 AI 开源趋势日报 · 2026-09-20

---

## 一、今日速览

- **Agent Skills 生态全面爆发**：Cloudflare、Anthropic、Addy Osmani 同日有多款“Agent Skills”类项目冲上热榜，coding agent 的技能插件化正在成为新平台范式。
- **端侧小模型落地加速**：cactus-compute/needle（8-29MB、2-bit 自动化基础模型）登上 Trending，AI 向手机、可穿戴、MCU 渗透的趋势明确。
- **计算机使用规模化**：trycua/cua 提出开源驱动的 fleet + 训练评测基准，指向下一代 computer-use 智能体的数据闭环。
- **Token 成本优化成显学**：headroom（压缩上下文）、caveman（省 65% token）等“上下文经济学”项目星数高企。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理 / CLI）

| 项目 | Stars | 说明 |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐181,286 | 本地大模型运行事实标准，已覆盖 Kimi、GLM、DeepSeek、gpt-oss、Qwen 全系国产/开源模型 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8,679 | Rust 生态模块化 LLM 应用框架，填补 Rust Agent 栈空白 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐4,580 | 在 Apple Silicon 上手写 tiny vLLM + Qwen，系统工程师学习推理内核的绝佳路径 |
| [cactus-compute/needle](https://github.com/cactus-compute/needle) | +234 today | 2-bit、8-29MB 自动化基础模型，跑在手机/可穿戴/MCU 上，端侧 Agent 底座新物种 |
| [penberg/titania](https://github.com/penberg/titania) | ⭐109 | "从 transformer 到晶体管"的一人可读完整 LLM 系统，教育价值极高 |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | ⭐554 | 通用 LLM 网关，多供应商翻译 + 智能负载均衡 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐73,125 | 进 LLM 前先压缩工具输出/日志/JSON，编码 Agent 省 20%、JSON 省 60-95% token |

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 说明 |
|---|---|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐247,198 | "与你一起成长的 Agent"，开源 Agent 赛道星数天花板 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐263,030 | Agent Harness 性能优化系统：技能、本能、记忆、安全一体化，适配 Claude Code/Codex/Cursor |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | +3155 today 🔥 | 今日榜第一：多阶段安全审计 Agent Skill，输出机器可读、可独立验证的发现 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | +483 today | 终端 Agentic 编码工具官方仓库，生态持续活跃 |
| [trycua/cua](https://github.com/trycua/cua) | +859 today | Computer-use 2.0：开源驱动 + 跨 OS fleet + 训练/评测基准 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐83,522 | 给 Agent 装上"互联网之眼"，一个 CLI 读取 Twitter/Reddit/YouTube/B站/小红书，零 API 费 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐115,372 | 浏览器操作 Agent 头部方案，与 cua 的 computer-use 方向互相印证 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐47,043 | 原 chatgpt-on-wechat 升级为超级助手 + Agent Harness，带记忆与自进化 |

### 📦 AI 应用（垂直场景）

| 项目 | Stars | 说明 |
|---|---|---|
| [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | +281 today | Anthropic 官方为 Claude Cowork 知识工作者场景开源的插件库 |
| [higgsfield-ai/higgsfield](https://github.com/higgsfield-ai/higgsfield) | +196 today | 容错、高扩展 GPU 编排 + 亿到万亿参数训练框架 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐107,641 | 多 Agent LLM 金融交易框架，AI 金融赛道标杆 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐65,332 | LLM 驱动多市场股票分析，零成本定时运行（与热榜 OpenStock 呼应） |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐55,385 | 文档/主题 → 原生 PowerPoint（形状、动画、图表、语音旁白） |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐124,746 | 一键生成高清短视频的自动化 AI 工作流 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐52,004 | 300+ 助手的生产力工作室，统一接入主流大模型 |

### 🧠 大模型 / 训练

| 项目 | Stars | 说明 |
|---|---|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐61,725 | 2 小时从零训练 64M 参数 LLM，中文社区教育爆款 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐105,250 | PyTorch 从零实现 ChatGPT 级 LLM，全球经典教材 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐166,412 | 模型定义框架，多模态训练与推理基座 |
| [thinkwee/AgentsMeetRL](https://github.com/thinkwee/AgentsMeetRL) | ⭐1,844 | Agentic RL 精选列表——Agent 与 RL 融合是当前研究最热方向 |
| [thinkwee/AwesomeOPD](https://github.com/thinkwee/AwesomeOPD) | ⭐866 | On-Policy Distillation 列表，模型压缩新范式 |
| [Event-AHU/Medical_Image_Analysis](https://github.com/Event-AHU/Medical_Image_Analysis) | ⭐240 | 基础模型驱动的医学影像分析 |

### 🔍 RAG / 知识库

| 项目 | Stars | 说明 |
|---|---|---|
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐119,680 | 把代码库变成可查询知识图谱的 /graphify skill，无向量库、AST 确定性解析 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐94,282 | 跨会话持久上下文，AI 压缩 + 注入，兼容所有主流编码 Agent |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐91,013 | RAG + Agent 融合引擎，RAG 头部方案 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐35,763 | "无向量、推理式 RAG"，对向量检索范式发起挑战 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐12,946 | MLSys 2026 最佳论文：省 97% 存储的个人设备本地 RAG |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐65,671 | Agent 记忆层基础设施，生产级即插即用 |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | ⭐89,852 | 文档 → LLM 结构化数据的桥梁，支持 100+ 语言 |

> **已过滤的非 AI 项目**：cloudflare/quiche（QUIC 协议）、asciimoo/hister（搜索引擎）、OpenStock（行情平台，非 AI）、coder/coder（远程开发环境）、ruanyf/weekly、everyone-can-use-english、cs-video-courses、netdata、julia、meilisearch（通用搜索）、oceanbase 等。

---

## 三、趋势信号分析

**1. Agent Skills 成为新的“插件协议”级赛道。** 今日热榜前三中两个是 Skills 项目（cloudflare/security-audit-skill +3155、addyosmani/agent-skills +556），加上搜索结果中 graphify（/skill 形态）、ECC、caveman，说明编码 Agent 生态正从“框架之争”转向“技能分发之争”——谁定义 Skill 的格式与验证标准，谁就掌握了 Agent 应用商店的入口。值得注意的是 security-audit-skill 强调“机器可读、可独立验证的发现”，暗示 Skills 生态已开始重视可信度工程。

**2. Computer-Use 进入 2.0 阶段。** trycua/cua 明确把“fleet + 训练/评测基准 + 数据生成”打包开源，配合 browser-use 的高热度，显示社区重心正从“能操作浏览器”转向“规模化训练与评测 GUI Agent”。

**3. 端侧与成本是两条暗线。** needle（2-bit/29MB 端侧模型）代表模型小型化下沉至 MCU；headroom、caveman、LEANN 则从上下文压缩、token 削减、存储节省三面围攻推理成本。这与 Ollama 覆盖 gpt-oss/DeepSeek 等小模型动向一致——**成本敏感的本地化 Agent** 是当前产品共识。

---

## 四、社区关注热点

- **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** — 今日 +3155 领跑全榜，大厂背书 + 可验证安全审计 Skill，是 Skills 范式的标杆范本，值得拆解其 manifest 设计。
- **[trycua/cua](https://github.com/trycua/cua)** — computer-use 的训练/评测/数据闭环全套开源，做 GUI Agent 或数据合成的开发者必看。
- **[cactus-compute/needle](https://github.com/cactus-compute/needle)** — 端侧 Agent 基础模型的稀缺样本，工具调用 + 结构化抽取压缩到 29MB，IoT/可穿戴方向信号强烈。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 知识图谱 + AST 取代向量库做代码理解，可能与 PageIndex 共同预示“vectorless RAG”的范式迁移。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — 26 万星的 Agent Harness 优化体系，若你在深度使用 Claude Code/Codex，其技能与记忆组织方式可直接借鉴。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*