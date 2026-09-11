# AI 开源趋势日报 2026-09-11

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-11 03:38 UTC

---

# 📰 AI 开源趋势日报 · 2026-09-11

## 一、今日速览

今日 GitHub Trending 被“Agent Skills 生态”强势占领：从 ADHD 友好输出格式（+3882）、Vercel 官方 skills 工具，到 diagram-design、graphify 等配套资产，Claude Code / Codex 的技能层正在形成独立的开源赛道。**Token 压缩**成为新的刚需方向，caveman（省 65% token）、headroom、OmniRoute（RTK+Caveman 压缩）密集涌现。**AI 网关聚合**竞争白热化，OmniRoute 以 352 家供应商、1200+ 模型登榜。腾讯、清华等大厂/高校入场（teamai-cli、OpenMAIC），本地化运行（colibri、llmfit）持续升温。

---

## 二、Trending 榜单过滤结果

| 保留 ✅ | 排除 ❌ |
|---|---|
| i-have-adhd、superpowers、CloddsBot、teamai-cli、llmfit、diagram-design、awesome-gpt-image-2、OmniRoute、colibri、OpenMAIC、llm_wiki、vercel-labs/skills、PI-Desktop、gods-eye-view（空间智能，边缘保留） | ~~liquidslr/system-design-notes~~（纯面试笔记）、~~armory3d/armorpaint~~（3D 绘图工具，非 AI） |

---

## 三、各维度热门项目

### 🔧 AI 基础工具（框架、网关、推理、CLI）

- **[diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute)** — +626 today · MIT 免费网关聚合 352 家供应商 / 1200+ 模型，内置配额感知降级与 token 压缩（省 15-95%），兼容 Claude Code / Cursor 等主流 CLI，550+ 贡献者共建。
- **[vercel-labs/skills](https://github.com/vercel-labs/skills)** — +122 today · Vercel 官方出手做开放 Agent Skills 标准（`npx skills`），是 Skills 生态走向标准化的标志事件。
- **[JustVugg/colibri](https://github.com/JustVugg/colibri)** — +98 today · 纯 C、零依赖的 MoE 推理引擎，expert 从磁盘流式加载，让消费级硬件跑前沿 MoE 模型。
- **[AlexsJones/llmfit](https://github.com/AlexsJones/llmfit)** — +258 today · Rust 实现的一条命令检测硬件适配哪些模型，解决本地部署选型痛点。
- **[vastsa/PI-Desktop](https://github.com/vastsa/PI-Desktop)** — +624 today · 本地优先的 AI 编码 Agent 桌面端：Electron + Rust 核心 + 用户可装插件。
- **[cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)** — +1294 today · 面向 Claude Code / Codex 的 38 种编辑级 SVG 图表 Skills，反“Mermaid 垃圾”的精致化生产力资产。

### 🤖 AI 智能体/工作流

- **[ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd)** — **+3882 today（今日第一）** · 让编码 Agent 输出“结论先行”的 ADHD 友好 Skill——以极小成本解决 Agent 输出可读性痛点，是 Skills 轻量化的极致范例。
- **[obra/superpowers](https://github.com/obra/superpowers)** — +732 today · Agent Skills 框架 + 软件开发方法论，方法论与工程实践结合的代表作。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — ⭐255,962 · Agent Harness 性能优化系统（skills/instincts/memory/安全），跨 Claude Code、Codex、Cursor。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — ⭐244,260 · “与你共同成长的 Agent”，开源个人 Agent 长期赛道头部项目。
- **[Tencent/teamai-cli](https://github.com/Tencent/teamai-cli)** — +841 today · 腾讯官方“让团队 AI 原生化”的 CLI，大厂正式下场团队级 Agent 工具。

### 📦 AI 应用（垂直场景）

- **[alsk1992/CloddsBot](https://github.com/alsk1992/CloddsBot)** — +277 today · 基于 Claude 的自主交易 Agent，覆盖 1000+ 市场，含机器间支付协议（Agent Commerce），代表 Agent × DeFi 前沿。
- **[THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC)** — +837 today · 清华多智能体交互课堂，一键沉浸式多 Agent 学习体验，AI 教育落地代表。
- **[nashsu/llm_wiki](https://github.com/nashsu/llm_wiki)** — +142 today · 桌面端文档→增量维护的持久化 Wiki，跳过传统 RAG 的“每次重答”范式。
- **[freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2)** — +962 today · GPT Image 2/2.5 提示词案例库（530+ 案例 + 2.5 对比专区），暗示图像模型 2.5 版本近期发布。
- **[bilawalsidwu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view)** — +1762 today · 浏览器内真实数据的光照级 3D 卫星模拟，开源空间智能可视化标杆。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** — ⭐64,909 · LLM 驱动的多市场股票分析 + 自动推送，零成本定时运行。

### 🧠 大模型/训练

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — ⭐60,576 · 2 小时从零训练 64M 参数 LLM，中文社区最火的 LLM 教学项目。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** — ⭐104,726 · PyTorch 逐步实现 ChatGPT 级 LLM 的经典教程。
- **[JustVugg/colibri](https://github.com/JustVugg/colibri)**（同上，推理侧）— MoE 本地推理的引擎级突破。
- **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)** — ⭐4,558 · Apple Silicon 上手写 mini-vLLM，面向系统工程师的推理系统教学。

### 🔍 RAG/知识库

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — ⭐116,780 · 把代码库/文档变成可查询知识图谱，“无向量库”路线，RAG 范式之争的新变量。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — ⭐71,398 · LLM 输入压缩层：编码 Agent 省 20% token、JSON 省 60-95%，与今日压缩热趋势直接呼应。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — ⭐93,650 · 跨会话持久 Agent 记忆，支持主流编码 CLI。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — ⭐65,088 · Agent 记忆基础设施的事实标准。
- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** — ⭐12,933 · MLSys2026 最佳论文，存储省 97% 的个人设备端 RAG。

---

## 四、趋势信号分析

**① Agent Skills 生态全面爆发。** 今日热榜 16 席中约 6 个项目直接服务 Claude Code / Codex 的 Skills 层（i-have-adhd、superpowers、vercel-labs/skills、diagram-design、graphify、ECC），且 Vercel 官方入场推出标准工具——Skills 正从“Claude Code 特性”演变为**跨 CLI 的通用资产格式**，2026 年上半年最确定的生态位。

**② Token 经济学成为核心工程议题。** caveman（-65%）、headroom（JSON -95%）、OmniRoute 内置 RTK 压缩——在 Agent 长会话常态化的背景下，上下文压缩已从技巧升级为基础设施层。

**③ 与行业事件强关联。** ollama 描述中并列 Kimi-K2.6、GLM-5.2 等新模型，叠加 awesome-gpt-image-2 出现“2.5 对比专区”，表明近期有多家国产模型与 OpenAI 图像模型更新落地，直接拉动网关聚合（OmniRoute +626）与本地推理（colibri、llmfit）需求。腾讯、清华入场则预示 Agent 工具正从个人开发者玩具转向团队/教育级产品。

---

## 五、社区关注热点

- **[vercel-labs/skills](https://github.com/vercel-labs/skills)** — 官方背景的 Skills 标准化工具，早期参与可卡位生态入口。
- **[JustVugg/colibri](https://github.com/JustVugg/colibri)** — 纯 C 零依赖跑 MoE，本地推理平民化的技术风向标，值得关注 expert-offload 设计。
- **[diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute)** — 免费多供应商网关 + 压缩，多模型时代的刚需中间件，适合作为 CLI 工具默认接入层。
- **[headroom](https://github.com/headroomlabs-ai/headroom) 与 [caveman](https://github.com/JuliusBrussee/caveman)** — 压缩赛道的库/代理/技能三种形态齐备，可组合使用，直接降低 Agent 运行成本。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — “知识图谱替代向量检索”路线的代表作，RAG 架构选型前必看。

---
*数据来源：GitHub Trending（2026-09-11）+ GitHub Search API 主题搜索；Trending 榜单 stars 总量显示异常，以今日新增为准。*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*