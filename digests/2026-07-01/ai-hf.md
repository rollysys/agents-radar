# Hugging Face 热门模型日报 2026-07-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-01 04:08 UTC

---

# Hugging Face 热门模型日报
**日期：2026-07-01**

---

### 1. 今日速览

本期榜单呈现出“开源基座大爆发”与“端侧生态极速扩张”的双重态势。百度发布的 **Unlimited-OCR** 以超强的长图识别能力登顶下载与点赞双榜，显示出垂类多模态模型的极高实用性。**GLM-5.2** 与 **Qwen3.6** 系列不仅在基座模型上表现强劲，其社区微调版（如 Uncensored 和 Agentic 版本）更是霸榜下载量前列，证明了开源社区对高性能 MoE 架构的热情。此外，NVIDIA 推出的 **NVFP4** 量化格式多款上榜，标志着 4-bit 浮点量化已成为高端推理部署的新标准。

---

### 2. 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 👤 作者：zai-org | 👍 点赞：3,068 | 📥 下载：142,547
  - 💬 **点评**：本期点赞数最高的基座模型，基于 MoE 架构，在对话和生成任务上表现卓越，是开源 LLM 的新标杆。

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
  - 👤 作者：Qwen | 👍 点赞：466 | 📥 下载：28,480
  - 💬 **点评**：专注于 Agentic（智能体）任务的 35B 模型，显示出 Qwen 在 Agent 领域的布局，适合构建复杂决策系统。

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
  - 👤 作者：deepseek-ai | 👍 点赞：256 | 📥 下载：6,939
  - 💬 **点评**：DeepSeek V4 系列的高端版本，集成了最新的 DSpark 推理优化技术，虽下载量不高但技术关注度极高。

- **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**
  - 👤 作者：LiquidAI | 👍 点赞：169 | 📥 下载：17,839
  - 💬 **点评**：罕见的超小参数模型（230M），主打端侧极致轻量化，为资源受限设备提供了新选择。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 👤 作者：baidu | 👍 点赞：1,503 | 📥 下载：429,056
  - 💬 **点评**：榜单下载与点赞的“双冠王”，打破传统 OCR 限制，支持无限长图与复杂版面识别，实用性极强。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 👤 作者：nvidia | 👍 点赞：2,525 | 📥 下载：800,597
  - 💬 **点评**：NVIDIA 推出的轻量级视觉定位模型，下载量惊人，在图像特征提取和目标检测任务上极具竞争力。

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
  - 👤 作者：krea | 👍 点赞：423 | 📥 下载：45,668
  - 💬 **点评**：Krea 2.0 系列的快速生成版本，专注于高质量文生图，Turbo 版本大幅提升了生成速度。

- **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)**
  - 👤 作者：fal | 👍 点赞：128 | 📥 下载：0
  - 💬 **点评**：基于 LTX 视频模型的高质量 3D 风格 LoRA，展示了视频生成在 3D 真实感方向的新进展。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  - 👤 作者：yuxinlu1 | 👍 点赞：2,533 | 📥 下载：575,255
  - 💬 **点评**：基于 Gemma-4 的代码特化模型，点赞数极高，表明社区对中小尺寸高性能 Coding 模型的强烈需求。

- **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)**
  - 👤 作者：Chunjiang-Intelligence | 👍 点赞：134 | 📥 下载：1,519
  - 💬 **点评**：专注于网络安全领域的微调版本，拓展了 DeepSeek V4 在安全攻防场景下的应用边界。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 👤 作者：HauhauCS | 👍 点赞：2,365 | 📥 下载：3,017,678
  - 💬 **点评**：本期下载量之王，无审查版本的 Qwen3.6 MoE 模型，社区对“无限制”模型的渴求依然旺盛。

- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
  - 👤 作者：nvidia | 👍 点赞：391 | 📥 下载：5,495,402
  - 💬 **点评**：官方级 NVFP4 量化版，极高下载量证明该量化格式已成为 NVIDIA 显卡部署的主流选择。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  - 👤 作者：empero-ai | 👍 点赞：1,068 | 📥 下载：970,663
  - 💬 **点评**：融合了 Claude 风格的 Qwen 微调版，1M 上下文窗口使其在长文本处理上极具吸引力。

- **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)**
  - 👤 作者：deepreinforce-ai | 👍 点赞：182 | 📥 下载：2,564
  - 💬 **点评**：高达 397B 参数的巨型 MoE 模型，代表了开源社区向 400B+ 参数规模进军的尝试。

---

### 3. 生态信号

**模型家族格局重塑：** 本期榜单中，**Qwen** 系列展现出统治级表现，从基座到微调（Uncensored、Coder）、从量化到 Agent，形成了全栈式生态。**GLM-5.2** 的强势发布标志着国产基座模型进入了“MoE + 高效推理”的深水区。**DeepSeek V4** 的衍生模型开始出现细分领域（如 Cybersecurity），生态多样性正在增加。

**量化技术的代际更迭：** NVIDIA 的 **NVFP4** 格式伴随着 Qwen 和 GLM 模型的大量下载（如 #24 和 #15），显示出 FP4 精度正在逐步取代传统的 INT4/INT8，成为新一代 GPU 推理的精度首选。

**社区微调风向：** “Uncensored（无审查）”和“Agentic（智能体）”是社区微调的两个核心关键词。**HauhauCS** 的作品下载量突破 300 万，印证了用户对模型输出自由度及工具调用能力的极高关注。同时，GGUF 格式依然是本地部署的绝对主流。

---

### 4. 值得探索

1.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：如果你处理文档、票据或长图，这是目前最值得尝试的 SOTA 级工具，定义了 OCR 的新标准。
2.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**：作为点赞最高的基座模型，它代表了当前开源 MoE 架构的前沿水平，适合用于评测或作为新基座进行二次开发。
3.  **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**：对于追求高性能推理的开发者，这是体验 NVIDIA 最新 NVFP4 量化技术效果的最佳入口，兼具速度与精度。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*