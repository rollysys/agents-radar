# AI 开源趋势日报 2026-09-22

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-22 03:54 UTC

---

# AI 开源趋势日报 · 2026-09-22

---

## 一、今日速览

今日 Trending 榜单被 **Agent 基础设施** 强势占据：BuilderIO 的 [agent-native](https://github.com/BuilderIO/agent-native)（+607）和 trycua 的 [cua](https://github.com/trycua/cua)（+609）双双冲榜，标志着“Agentic 应用框架 + Computer Use 规模化”成为社区最热的双主线。开发者体验侧，Agent 记忆与多厂商切换工具（ai-memory、Codex-X）集中上榜，反映多 Agent CLI 并存时代的互操作性刚需。主题搜索数据则显示 **Agent Harness / 记忆层 / 上下文压缩** 三大赛道已沉淀出 6 万+ stars 量级的头部项目。整体来看，AI 开源正从“做应用”转向“做 Agent 底座”。

---

## 二、Trending 榜单筛选结果

| 保留（AI 相关） | 排除（非 AI） |
|---|---|
| agent-native、cua、ai-memory、autoclip、project-nomad（含本地 AI）、Codex-X、mvt（弱相关，边缘保留）、coder（Agent 开发环境，保留） | OpenStock（行情平台）、quiche（QUIC 协议）、ruanyf/weekly（科技周刊） |

---

## 三、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、CLI）

- **[BuilderIO/agent-native](https://github.com/BuilderIO/agent-native)** [TypeScript] +607 today
  构建 Agentic 应用的前端框架，今日新晋热榜第一梯队，Agent UX 标准化的重要信号。
- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐181k
  本地模型运行事实标准，已支持 Kimi、GLM、DeepSeek、gpt-oss、Qwen 等全系开源模型。
- **[huggingface/transformers](https://github.com/huggingface/transformers)** ⭐166k
  模型定义框架霸主，文本/视觉/多模态训练推理一体。
- **[coder/coder](https://github.com/coder/coder)** [Go] +460 today
  定位“开发者及其 Agent 的安全环境”，Agent 沙箱化开发基建的代表。
- **[Hmbown/Codewhale](https://github.com/Hmbown/Codewhale)** [Rust] ⭐41k
  Rust 终端编码 Agent，社区驱动迭代活跃。
- **[yynxxxxx/Codex-X](https://github.com/yynxxxxx/Codex-X)** [Rust] +50 today
  Codex 桌面/CLI 可视化管理，Provider 切换 + Skills/MCP 管理，多 CLI 时代的管理面板。

### 🤖 AI 智能体/工作流

- **[trycua/cua](https://github.com/trycua/cua)** [HTML] +609 today
  Computer Use 2.0：开源驱动 + 跨 OS 机群 + 训练评测基准，今日最热 AI 项目之一。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐264k
  Agent Harness 性能优化系统（Skills/本能/记忆/安全），Claude Code、Codex、Cursor 通用，全榜第一。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐247k
  “与你一起成长的 Agent"，开源社区 Agent 明星项目。
- **[langgenius/dify](https://github.com/langgenius/dify)** [TypeScript] ⭐156k
  Agentic 工作流 + RAG 一体化平台，生产级 Agent 编排首选之一。
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐115k
  让 Agent 操作浏览器，与今日 cua 上榜共同印证 GUI Agent 赛道升温。
- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** [Go] ⭐107k
  病毒式传播的“原始人说话”Token 压缩 Skill/代理，砍 65% Token。

### 📦 AI 应用

- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** [Python] ⭐65k
  LLM 多市场股票分析 + 自动推送，零成本定时运行，中文区量化爆款。
- **[anthropics/financial-services](https://github.com/anthropics/financial-services)** [Python] +424 today
  Anthropic 官方金融服务参考实现，厂商垂直场景方案库值得关注。
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐55k
  文档/主题一键生成原生 PPT，办公自动化标杆。
- **[zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip)** [Python] +250 today
  AI 视频高光提取与二创剪辑，中文内容创作工具上榜。
- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** [TypeScript] ⭐52k
  300+ 助手的 AI 生产力工作站，统一接入前沿模型。
- **[Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)** [TypeScript] +394 today
  离线优先知识/教育服务器，可选本地 AI——离线 AI 基建新样本。

### 🧠 大模型/训练

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** ⭐105k
  从零用 PyTorch 实现 LLM，教育界长青树。
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** [Python] ⭐62k
  2 小时训练 64M 参数 LLM，中文社区模型教学第一IP。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** ⭐103k / **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** ⭐200k
  深度学习双基石，稳定基本盘。
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** [Python] ⭐7.4k
  LLM 评测平台，覆盖 100+ 数据集，模型迭代必备。

### 🔍 RAG/知识库

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐94k
  跨会话持久记忆，兼容 Claude Code/Codex/Gemini 等全部主流 CLI。
- **[akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory)** [Rust] +167 today
  Agent CLI 长期记忆 + 跨厂商 handoff，今日上榜印证记忆赛道持续发热。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐65k
  生产级 Agent 记忆层基础设施。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐91k
  RAG + Agent 融合引擎，深度文档理解代表。
- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** [Python] ⭐35k
  “无向量、推理式 RAG”文档索引，挑战传统向量检索范式。
- **[topoteretes/cognee](https://github.com/topoteretes/cognee)** [Python] ⭐30k
  自托管知识图谱 Agent 记忆引擎。

---

## 四、趋势信号分析

**爆发性关注集中在 Agent 基建层**：今日榜上 agent-native（+607）与 cua（+609）几乎并列第一，加上 coder（+460）和 anthropics/financial-services（+424），前四名全部与“Agent 框架/运行环境/垂直落地”相关——社区热度已从调用模型转向构建 Agent 操作系统。**新兴方向首次密集登榜**：其一，Computer Use 2.0（cua 的跨 OS 机群 + 训练数据生成）预示 GUI Agent 从 demo 走向规模化训练；其二，Agent 记忆与跨厂商 handoff（ai-memory、claude-mem 94k stars）成为独立赛道，背后是开发者同时使用 Claude Code、Codex、Gemini CLI 的多工具现实。**Token 经济学意识觉醒**：caveman（107k stars，砍 65% Token）与 headroom（压缩工具输出，JSON 省 60-95%）显示“上下文成本优化”已从技巧演化为产品。**与大模型生态的联动**：Ollama 描述中 Kimi、GLM、DeepSeek、gpt-oss 排在前列，中国开源模型在本地推理生态中的默认地位进一步巩固。

---

## 五、社区关注热点

- **[cua](https://github.com/trycua/cua)** — GUI/Computer Use Agent 的规模化训练与评测基建，可能是下一个 browser-use 级别的赛道起点。
- **[agent-native](https://github.com/BuilderIO/agent-native)** — BuilderIO 出品，前端巨头进军 Agentic UX，值得前端开发者提前卡位。
- **[claude-mem](https://github.com/thedotmack/claude-mem) + [ai-memory](https://github.com/akitaonrails/ai-memory)** — Agent 记忆与多 CLI 互操作是当前最确定的增量需求。
- **[PageIndex](https://github.com/VectifyAI/PageIndex)** — “无向量推理式 RAG”范式，对向量数据库赛道构成理念性挑战。
- **[anthropics/financial-services](https://github.com/anthropics/financial-services)** — 厂商官方垂直方案库密集发布，预示“参考实现即获客”的新开源策略，值得企业 AI 团队跟踪。

---
*数据来源：GitHub Trending（2026-09-22）+ GitHub Search API 主题检索；stars 为当日快照。*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*