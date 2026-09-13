# AI 开源趋势日报 2026-09-13

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-13 03:50 UTC

---

# AI 开源趋势日报 · 2026-09-13

## 一、今日速览

今日 Trending 榜单上 AI 项目占比过半，**Agent 技能（Skills）生态成为最突出的热点**：从渗透测试技能库 Claude-Red 到数学建模 Agent，围绕 Claude Code 等编码 Agent 构建可复用技能的项目密集上榜。自主交易 Agent（CloddsBot）和 AI 销售 CRM（DeskcommCRM）表明 Agent 正加速渗透金融与垂直商业场景。主题搜索数据进一步印证：Agent 记忆/上下文管理（claude-mem、mem0、cognee）和**token 成本优化**（headroom、caveman）已成长为独立赛道，头部项目 stars 均达六位数。

## 二、过滤结果

**Trending 榜单排除项**（非 AI 相关）：gods-eye-view（空间情报可视化，非 AI）、iloader、zapret-discord-youtube、Sonarr、SmartTube、OpenFlux、armorpaint。

**保留 AI 相关项目 9 个**：DeskcommCRM、system_prompts_leaks、MathModelAgent、CloddsBot、awesome-llm-apps、Claude-Red、YuE、worktrunk、pentagi。

## 三、各维度热门项目

### 🔧 AI 基础工具

- [affaan-m/ECC](https://github.com/affaan-m/ECC) ⭐257K — Agent harness 性能优化系统，覆盖 Claude Code/Codex/Cursor 的技能、记忆与安全，stars 已超 ollama，是当前最热的 Agent 基础设施项目
- [ollama/ollama](https://github.com/ollama/ollama) ⭐181K — 本地推理标杆，已支持 Kimi-K2.6、GLM-5.2、gpt-oss 等新一代开源模型
- [huggingface/transformers](https://github.com/huggingface/transformers) ⭐165K — 模型定义框架的事实标准
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) ⭐94K — Agent 跨会话持久记忆方案，支持 8+ 主流 CLI Agent
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) ⭐72K — 工具输出/RAG 分块压缩层，JSON 场景省 60-95% token，成本优化赛道代表
- [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) [Rust] ⭐ +54 today — 面向**并行 AI Agent 工作流**的 Git worktree 管理 CLI，专为多 Agent 同时编码设计
- [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) ⭐550 — 多供应商 LLM 统一网关与负载均衡

### 🤖 AI 智能体/工作流

- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) ⭐245K — “与你共同成长的 Agent”，增速惊人
- [langgenius/dify](https://github.com/langgenius/dify) ⭐156K — Agentic 工作流 + RAG 一体化平台
- [browser-use/browser-use](https://github.com/browser-use/browser-use) ⭐114K — 浏览器操作 Agent 标准方案
- [alsk1992/CloddsBot](https://github.com/alsk1992/CloddsBot) [TypeScript] ⭐ +376 today — 跨 1000+ 市场的自主交易 Agent，含机器间支付协议（Agent Commerce），今日热榜亮点
- [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) [Go] ⭐ +189 today — 全自主渗透测试 Agent 系统
- [HKUDS/nanobot](https://github.com/HKUDs/nanobot) ⭐48K — 轻量自托管个人 Agent 框架
- [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) ⭐47K — 多渠道、可自我进化的超级助手（原 chatgpt-on-wechat）

### 📦 AI 应用

- [melgarafael/DeskcommCRM](https://github.com/melgarafavel/DeskcommCRM) [TypeScript] ⭐ +504 today — 自托管 AI 销售 CRM（原生 Agent + WhatsApp），对标 Kommo/Intercom，MCP-ready
- [jihe520/MathModelAgent](https://github.com/jihe520/MathModelAgent) [Python] ⭐ +262 today — 数学建模全流程 Agent，自动产出可提交论文
- [multimodal-art-projection/YuE](https://github.com/multimodal-art-projection/YuE) [Python] ⭐ +210 today — YuE2 前沿音乐生成：符号规划 + 零样本翻唱 + Agent 式编辑
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) ⭐138K（+230 today）— 100+ Agent/RAG 应用合集，热榜常客
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) ⭐54K — 文档转原生 PPT，办公场景爆款
- [SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red) [Python] ⭐ +113 today — 攻防安全 SKILL.md 技能库，Claude Skills 生态的安全方向延伸
- [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) ⭐71K — 本地运行的 AI 求职全流程工具

### 🧠 大模型/训练

- [jingyaogong/minimind](https://github.com/jingyaogong/minimind) [Python] ⭐61K — 2 小时从零训练 64M 参数 LLM，中文社区教育标杆
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) ⭐105K — PyTorch 逐步实现 ChatGPT 式 LLM
- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) ⭐4.6K — Apple Silicon 上的推理系统教学实现
- [open-compass/opencompass](https://github.com/open-compass/opencompass) ⭐7.4K — LLM 评测平台，支持 100+ 数据集
- [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) ⭐62K — YOLO26 系列 CV 模型工具链

### 🔍 RAG/知识库

- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) ⭐116K — 代码库→知识图谱的 /skill，主打确定性 AST 解析、无需向量库
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐91K — RAG + Agent 引擎
- [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐65K — Agent 记忆层基础设施
- [run-llama/llama_index](https://github.com/run-llama/llama_index) ⭐52K — 文档处理平台
- [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) ⭐46K — 李博杰《深入理解 AI Agent》开源书 + 代码
- [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) ⭐36K — 无向量、推理式 RAG，路线之争值得关注
- [topoteretes/cognee](https://github.com/topoteretes/cognee) ⭐31K — 知识图谱引擎的 Agent 长期记忆

## 四、趋势信号分析

**Agent Skills 生态正在爆发**：今日热榜中 Claude-Red、MathModelAgent、Claude-Red 等均以“结构化技能文件”为核心形态，配合 theme 数据中 ECC、graphify、caveman 等“/skill for Claude Code”项目stars 迅速突破六位数，说明社区已从“造 Agent 框架”转向“为既有编码 Agent 供给垂直技能”，Skills 成为新的分发单元和护城河。**Agent 基础设施分层清晰化**：记忆（claude-mem/mem0/cognee）、上下文压缩、worktree 并行调度、多供应商网关各自形成独立赛道，其中 token 成本优化类项目增长最猛。**新登榜方向**：CloddsBot 的 Agent Commerce（机器间支付协议）首次进入视野，暗示“Agent 即经济主体”叙事升温；PageIndex 的 vectorless RAG 则对向量数据库路线构成挑战。**与大模型发布的关联**：system_prompts_leaks 收录 GPT-6-Astra、Gemini 3.8 等新模型提示词，ollama 描述中的 Kimi-K2.6/GLM-5.2，均反映近期中美新模型密集发布带动了配套工具与逆向研究的流量。

## 五、社区关注热点

- **[ECC](https://github.com/affaan-m/ECC)（⭐257K）**：Agent harness 优化的事实标准候选，跨 Claude Code/Codex/Cursor 通用，建议持续跟踪其 skills 规范演进
- **[Claude-Red](https://github.com/SnailSploit/Claude-Red) + [pentagi](https://github.com/vxcontrol/pentagi)**：AI 安全攻防两端的代表，安全从业者必看；同时提示企业侧需关注 Agent 权限治理
- **[CloddsBot](https://github.com/alsk1992/CloddsBot)**：自主交易 + Agent 间支付协议，是观察 Agent Commerce 落地的最佳样本（注意金融合规风险）
- **[headroom](https://github.com/headroomlabs-ai/headroom) / [caveman](https://github.com/JuliusBrussee/caveman)**：token 成本优化已验证商业价值（JSON 场景省 60-95%），构建 Agent 应用的团队应优先评估
- **[PageIndex](https://github.com/VectifyAI/PageIndex) vs 传统向量库**：推理式 RAG 对向量检索的路线之争正在形成，架构选型前值得对比测试

---
*数据来源：GitHub Trending（今日实时）+ GitHub Search API（7 天活跃）。stars 总量为搜索时点数据，Trending 今日新增为最可信增量指标。*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*