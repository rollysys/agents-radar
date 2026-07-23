# Hugging Face 热门模型日报 2026-07-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-23 02:55 UTC

---

# Hugging Face 热门模型日报 (2026-07-23)

## 1. 今日速览
今日 Hugging Face 榜单呈现出“双雄争霸”的局面：Google 发布的 **Gemma-4-31B** 以超千万下载量迅速霸榜，展现了闭源巨头开源模型的统治力；与此同时，**Qwen 3.6** 系列继续在社区微调榜上大放异彩，多款 Uncensored 和 MoE 变体模型霸榜。技术趋势方面，**极限量化（1-bit/2-bit）**技术取得突破，Prism-ML 的 Bonsai 系列证明了极低比特率模型在端侧部署的可行性。此外，**具身智能**与 **OCR** 领域也迎来了百度、NVIDIA 等大厂的重磅更新。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 点赞: 3,330 | 下载: 12,113,203
  - 一句话说明: Google 最新一代开源模型，支持多模态且体量适中，下载量断层领先，是目前最受关注的开源权重模型。

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 点赞: 4,342 | 下载: 545,109
  - 一句话说明: 今日点赞数最高的模型，采用 MoE 架构，在对话和文本生成任务上表现优异，社区活跃度极高。

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
  - 作者: poolside | 点赞: 402 | 下载: 3,056
  - 一句话说明: 知名 AI 编程公司 poolside 发布的新一代代码生成模型，引发了社区对代码模型新王的期待。

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
  - 作者: upstage | 点赞: 310 | 下载: 0
  - 一句话说明: Upstage 推出的 250B 参数超大模型，虽然下载量为零（可能刚发布或硬件门槛高），但其参数规模引起了极大关注。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
  - 作者: thinkingmachines | 点赞: 1,457 | 下载: 16,441
  - 一句话说明: 榜单首位模型，主打图像文本交互，作为新一代多模态模型引起了社区的浓厚兴趣。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 点赞: 2,734 | 下载: 2,237,351
  - 一句话说明: 百度推出的强力 OCR 模型，下载量突破 200 万，解决了长图、复杂排版识别的痛点，实用性极强。

- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**
  - 作者: microsoft | 点赞: 129 | 下载: 0
  - 一句话说明: 微软推出的文生图与编辑模型，展示了微软在生成式图像领域的最新探索。

- **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)**
  - 作者: nvidia | 点赞: 91 | 下载: 6,623
  - 一句话说明: NVIDIA 面向边缘设备推出的视频生成/世界模型，预示着视频生成正在向端侧落地。

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**
  - 作者: Alissonerdx | 点赞: 235 | 下载: 0
  - 一句话说明: 基于 LTX-Video 的 LoRA 模型，解决了视频生成中人脸 ID 保持的难题，是视频生成领域的热门工具。

### 🔧 专用模型（代码、数学、医疗、嵌入、机器人）

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  - 作者: moonshotai | 点赞: 1,226 | 下载: 722,058
  - 一句话说明: 月之暗面推出的代码专用模型，支持高压缩比推理，在编程任务上表现出色，下载量惊人。

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
  - 作者: openbmb | 点赞: 155 | 下载: 58
  - 一句话说明: 具身智能领域的突破，MiniCPM 的 VLA（视觉-语言-动作）版本，用于机器人操作任务。

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
  - 作者: OpenMOSS-Team | 点赞: 308 | 下载: 92,265
  - 一句话说明: 复旦 MOSS 团队的语音转文本模型，集成了说话人分离功能，是长音频处理的利器。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 点赞: 3,004 | 下载: 1,997,690
  - 一句话说明: 基于Qwen3.6的“激进”微调版，去除了审查并增强了对话能力，深受本地部署用户喜爱。

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
  - 作者: prism-ml | 点赞: 598 | 下载: 1,404,962
  - 一句话说明: 1-bit 极限量化模型，下载量超百万，证明了极低显存占用运行大模型的可行性。

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
  - 作者: prism-ml | 点赞: 948 | 下载: 432,196
  - 一句话说明: 采用 2-bit 三值化技术的模型，在模型压缩效率和性能保留上找到了新的平衡点。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  - 作者: empero-ai | 点赞: 2,418 | 下载: 2,133,420
  - 一句话说明: 结合了 Claude Mythos 风格的 Qwen 微调版，主打长上下文与推理能力，下载量极高。

---

## 3. 生态信号

**模型家族势头：** 今日榜单被 **Qwen 3.6** 和 **Gemma 4** 两大家族主导。Qwen 3.6 凭借开源协议和优秀的 MoE 架构，成为了社区微调者的首选底座，榜单中近三分之一为 Qwen 系微调或量化版；而 Gemma 4 则凭借 Google 的生态分发能力，在下载量上占据绝对优势。

**量化新趋势：** “极限量化”正在从论文走向应用。榜单中出现了多个 **1-bit** 和 **2-bit** 模型（如 Bonsai 系列），且下载量均不俗。这表明在边缘计算和低资源环境下，用户对“能跑起来”的大模型需求迫切，传统的 4-bit/8-bit 量化已不能满足极客们的胃口。

**开源与专用化：** 开源社区正从单纯的“追赶闭源模型性能”转向“差异化竞争”。榜单中出现了大量专用模型，如机器人操作、无限长 OCR、说话人分离等。这预示着开源生态正在进入“应用深水区”，通用大模型作为底座，通过微调和工具链赋能具体场景成为主流。

---

## 4. 值得探索

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**：
  理由：具身智能是通往 AGI 的关键路径，这是目前少有的开源 VLA（视觉-语言-动作）模型，对于研究机器人控制和多模态感知的研究者极具价值。

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**：
  理由：1-bit 量化技术极具颠覆性，如果你对大模型在消费级硬件（如手机或树莓派）上的本地部署感兴趣，这是必测的模型，它能让你直观感受模型压缩的最新边界。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：
  理由：OCR 是文档处理中最实用的功能之一，该模型“Unlimited”的命名暗示了其对长图或复杂场景的处理能力，且下载量已验证其稳定性，非常适合集成到文档工作流中。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*