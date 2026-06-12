# Hugging Face 热门模型日报 2026-06-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-12 04:14 UTC

---

# Hugging Face 热门模型日报
**日期：2026-06-12**

---

### 1. 今日速览
本周 Hugging Face 迎来了 **Google Gemma-4** 系列的全面爆发，凭借“任意到任意”的多模态能力和高效量化版本，迅速占据了下载与热度榜首。**DeepSeek-V4-Pro** 以超高的下载量持续领跑开源大模型榜单，展现了极强的生态统治力。多模态领域亮点颇多，NVIDIA 推出的 **LocateAnything-3B** 将视觉定位能力推向新高度，而 Google 的 **DiffusionGemma** 则尝试融合扩散模型与 LLM 架构。社区方面，**Uncensored（无审查）** 和 **Abliterated（权重抹除）** 类微调模型需求激增，显示出用户对模型输出控制权的强烈诉求。

---

### 2. 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 点赞: 4,783 | 下载: 4,061,006
  - **说明**：当前榜单下载量最高的模型，DeepSeek V4 系列的旗舰版，代表了当前开源大模型的最强性能基准。

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
  - 作者: google | 点赞: 943 | 下载: 675,936
  - **说明**：Google 最新发布的指令微调模型，支持多模态输入输出，凭借出色的性能与适中的参数量，成为本周最热门的基础模型之一。

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  - 作者: sapientinc | 点赞: 750 | 下载: 134,752
  - **说明**：一款主打文本生成的小型模型（1B），虽然体量小但下载量惊人，可能具备极高的推理效率或特定任务优化。

- **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)**
  - 作者: nvidia | 点赞: 198 | 下载: 59,066
  - **说明**：NVIDIA 推出的巨型 MoE 模型，拥有 550B 总参数但激活量仅 55B，面向企业级高性能应用场景。

- **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
  - 作者: stepfun-ai | 点赞: 368 | 下载: 50,187
  - **说明**：阶跃星辰的快速版本模型，主打视觉语言能力与生成速度的平衡。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 点赞: 1,878 | 下载: 131,794
  - **说明**：今日点赞数最高的模型，专注于图像特征提取与定位，显示出视觉 grounding 任务在当前生态中的极高热度。

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
  - 作者: google | 点赞: 512 | 下载: 0
  - **说明**：Google 探索扩散模型与 LLM 结合的新作，虽然下载量为 0（可能刚发布或体积较大），但高点赞数反映了社区对其架构的好奇。

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
  - 作者: ideogram-ai | 点赞: 487 | 下载: 7,170
  - **说明**：Ideogram 4.0 的 FP8 量化版，以更低的显存需求提供顶尖的文字渲染与图像生成能力。

- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
  - 作者: ByteDance | 点赞: 222 | 下载: 305
  - **说明**：字节跳动推出的图像/文本到视频生成模型，专注于角色动画与姿态驱动。

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
  - 作者: bosonai | 点赞: 364 | 下载: 19,948
  - **说明**：高性能的文本转语音模型，基于 Qwen3 架构，提供了高质量的语音合成方案。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
  - 作者: CohereLabs | 点赞: 309 | 下载: 1,859
  - **说明**：Cohere 实验室推出的轻量级代码生成模型，基于 MoE 架构，适合端侧编程辅助。

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - 作者: nvidia | 点赞: 372 | 下载: 4,965
  - **说明**：NVIDIA 专为流式语音识别设计的超小型模型，强调低延迟与实时转录能力。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 点赞: 1,683 | 下载: 3,057,541
  - **说明**：下载量惊人的社区微调版，去除了审查机制并采用激进微调策略，反映了开源社区对无限制模型的巨大需求。

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
  - 作者: unsloth | 点赞: 563 | 下载: 711,706
  - **说明**：Unsloth 出品的 Gemma-4 高效量化版，极大地推动了 Gemma-4 在消费级显卡上的普及。

- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.com/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
  - 作者: OBLITERATUS | 点赞: 236 | 下载: 14,838
  - **说明**：典型的“权重抹除”类微调模型，旨在消除模型的安全拒绝机制，是社区对抗安全审查的产物。

- **[google/gemma-4-12B-it-qat-q4_0-gguf](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf)**
  - 作者: google | 点赞: 130 | 下载: 96,749
  - **说明**：Google 官方提供的 QAT（量化感知训练）版本，相比普通训练后量化，精度保持更佳。

---

### 3. 生态信号

**模型家族趋势**：
本周呈现出“新旧交替”的鲜明特征。一方面，**Gemma-4** 系列全面铺开，Google 不仅发布了基础和指令版，还引入了 *DiffusionGemma* 这种融合扩散的新架构，显示出其试图统一生成式 AI 生态的野心。另一方面，**DeepSeek-V4** 和 **Qwen3.6** 的微调版本依然占据下载量的半壁江山，证明了中国开源模型在社区中的统治力。

**开源 vs 闭源与量化**：
开源权重的“可获取性”仍是下载量的核心驱动力。榜单前列几乎全为开源模型，且量化版（尤其是 GGUF 和 QAT）通常比原版拥有更高的下载量，说明本地部署和消费级硬件适配是当前主流需求。此外，**Unsloth** 再次证明了其作为顶级量化推手的地位，紧跟 Google 官方发布节奏。

**微调活动**：
“Uncensored/Abliterated”标签频繁出现（如 *HauhauCS* 和 *OBLITERATUS* 的作品），这表明社区对于大模型安全护栏的不满与反抗正在升级，用户更倾向于获取未被干预的原始生成能力。

---

### 4. 值得探索

1.  **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    **理由**：这是架构创新的代表。将 Diffusion（扩散模型）的生成能力与 Gemma 的 LLM 架构结合，可能解决传统 LLM 在生成图像或连续数据时的离散化瓶颈，是研究“Any-to-Any”生成的重要风向标。

2.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    **理由**：视觉定位是连接语言与现实世界的桥梁。该模型仅有 3B 参数却获得了极高的关注，说明其在自动驾驶、机器人视觉或 UI 自动化测试等实际应用场景中具有极高的实用价值，是一个“小而美”的标杆。

3.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored)**
    **理由**：作为榜单下载量第二的模型，其“Aggressive”的微调策略和 MoE 架构的结合，代表了社区在打破模型限制方面的最新尝试，适合需要无限制文本生成的进阶用户研究。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*