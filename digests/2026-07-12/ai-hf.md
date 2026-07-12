# Hugging Face 热门模型日报 2026-07-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-12 03:14 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-07-12

---

### 1. 今日速览
今日 Hugging Face 热门榜单呈现出“大厂基座模型与社区微调模型并驾齐驱”的态势。**Qwen3.5/3.6 系列**依然是社区微调的绝对核心，涌现出大量高下载量的 Uncensored（无审查）及 Agentic（智能体）版本。大厂方面，**zai-org/GLM-5.2** 和 **nvidia/LocateAnything-3B** 凭借强大的基座能力与多模态创新占据高点。端侧模型竞争加剧，**MiniCPM5** 与 **Gemma-4** 的轻量级微调版本备受关注。此外，GGUF 量化格式依旧是本地部署的首选，多款量化模型下载量突破百万。

---

### 2. 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者：zai-org | 👍 3,834 | ⬇️ 421,270
  - 说明：新一代 GLP-MoE 架构基座模型，点赞数位居前列，显示出强劲的对话与生成能力。

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
  - 作者：tencent | 👍 699 | ⬇️ 8,210
  - 说明：腾讯推出的混元系列新模型，作为大厂新作，引发了社区对其架构的好奇与尝鲜。

- **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
  - 作者：openbmb | 👍 911 | ⬇️ 366,106
  - 说明：极具性价比的端侧小模型，下载量极高，适合移动端或资源受限环境部署。

- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)**
  - 作者：SupraLabs | 👍 99 | ⬇️ 1,275
  - 说明：极小参数量的路由模型，反映了模型路由与 MoE 架构细化方向的探索。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者：nvidia | 👍 2,707 | ⬇️ 1,472,194
  - 说明：英伟达推出的视觉定位模型，下载量与点赞双高，解决了图像中物体精准定位的痛点。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者：baidu | 👍 1,931 | ⬇️ 1,380,690
  - 说明：百度推出的无限制 OCR 模型，满足了对高精度、长文本识别的巨大需求。

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
  - 作者：krea | 👍 588 | ⬇️ 168,154
  - 说明：图像生成领域的新锐，侧重于生成速度与质量的平衡，深受创作者青睐。

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
  - 作者：OpenMOSS-Team | 👍 110 | ⬇️ 12,817
  - 说明：语音转文本及说话人分离模型，填补了开源语音处理工具链的空白。

#### 🔧 专用模型（代码、数学、医疗、嵌入）
- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
  - 作者：google | 👍 349 | ⬇️ 20,110
  - 说明：Google 针对表格数据推出的基础模型，在结构化数据处理领域具有重要价值。

- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)**
  - 作者：mistralai | 👍 189 | ⬇️ 350
  - 说明：基于 Lean 的数学定理证明模型，参数量巨大，代表了 AI for Science 的前沿探索。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者：HauhauCS | 👍 2,653 | ⬇️ 2,641,936
  - 说明：基于 Qwen3.6 的无审查“激进”微调版，下载量突破 260 万，反映社区对内容自由的强烈需求。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  - 作者：empero-ai | 👍 2,016 | ⬇️ 1,944,961
  - 说明：融合 Claude 风格的 Qwen 微调版，兼具高性能与高易用性，GGUF 格式广受好评。

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者：unsloth | 👍 1,049 | ⬇️ 2,904,169
  - 说明：Unsloth 出品的量化版本，优化了推理速度，下载量近 300 万，是本地部署的爆款。

- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)**
  - 作者：unsloth | 👍 141 | ⬇️ 38,922
  - 说明：DeepSeek-V4 的轻量量化版，让普通用户也能在本地体验最新一代的推理模型。

---

### 3. 生态信号
**Qwen 家族统治力持续增强**：榜单中超过三分之一的强相关模型（如 Qwythos, Qwen3.6-27B, Ornith 等）均基于 Qwen 架构或微调而来，确立了其在开源权重领域的霸主地位。**MoE 架构常态化**：不仅基座模型（如 GLM-5.2, Agents-A1）采用 MoE，社区微调模型也大量应用了 MoE 结构（如 A3B 后缀），显示出对高性能推理成本的优化已成共识。**端侧智能体兴起**：出现了如 `yuxinlu1/gemma-4-12B-agentic...` 这样专为终端操作设计的模型，预示着 AI Agent 正从云端 API 走向本地化执行。此外，**Unsloth 和 GGUF** 格式已成为连接大模型与消费级硬件的关键桥梁。

---

### 4. 值得探索
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   - **理由**：仅 3B 参数却在视觉定位任务上表现卓越，极高的下载量证明其实用性，适合作为多模态 RAG 或机器人视觉模块的组件。

2. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   - **理由**：作为榜单中点赞数最高的基座模型，其 MoE 架构在对话和生成任务上的表现值得深入研究，是当前开源模型的标杆之一。

3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - **理由**：作为今日下载量最高的模型，它代表了社区对“无审查”和“高自由度”模型的巨大渴求，是测试模型边界能力的极佳案例。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*