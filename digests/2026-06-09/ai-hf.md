# Hugging Face 热门模型日报 2026-06-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-09 03:46 UTC

---

# Hugging Face 热门模型日报 (2026-06-09)

## 1. 今日速览
本周 Hugging Face 迎来了 **Google Gemma-4** 系列的正式发布，凭借 12B 和 26B 的参数量级及强大的多模态能力，迅速霸榜下载量前列，社区量化版本也随之爆发。**DeepSeek-V4-Pro** 以单周超 4700 点赞和 530 万下载的绝对优势，证明了其在开源 LLM 领域的统治地位。多模态领域亮点频出，**NVIDIA** 推出的 LocateAnything-3B 登顶点赞榜，显示出视觉定位任务的持续热度。此外，视频生成模型 **Sulphur-2** 和 **Ideogram-4** 的亮相，标志着开源社区在创意生成工具上的进一步成熟。

---

## 2. 热门模型

### 🧠 语言模型（LLM）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 点赞: 4,724 | 下载: 5,399,597
  - **说明**: 本周人气之王，作为 DeepSeek 系列的最新旗舰模型，凭借卓越的推理与对话能力，下载量突破 500 万，是当前开源社区的绝对主力。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 点赞: 1,449 | 下载: 3,262,529
  - **说明**: 侧重轻量化与速度的版本，兼顾性能与效率，下载量紧随 Pro 版之后，适合高频调用场景。

- **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)**
  - 作者: google | 点赞: 454 | 下载: 117,509
  - **说明**: Google 最新发布的基座模型，支持 any-to-any 任务，标志着 Gemma 系列正式进军多模态统一建模领域。

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  - 作者: sapientinc | 点赞: 728 | 下载: 163,953
  - **说明**: 仅有 1B 参数却获得高关注度，主打文本生成，展示了小模型在特定优化后的巨大潜力。

- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
  - 作者: LiquidAI | 点赞: 551 | 下载: 135,131
  - **说明**: LiquidAI 推出的 MoE 架构模型，以 8B 激活参数提供优异性能，受到企业级开发者关注。

- **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)**
  - 作者: nvidia | 点赞: 167 | 下载: 55,910
  - **说明**: NVIDIA 推出的巨型 MoE 模型，总参数 550B 但激活仅 55B，专为极端复杂推理任务设计。

### 🎨 多模态与生成

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 点赞: 1,633 | 下载: 121,594
  - **说明**: 本周点赞数第一，专注于图像-文本定位任务，小巧强悍，填补了视觉定位模型在 Hub 上的热门空缺。

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 点赞: 1,601 | 下载: 1,707,062
  - **说明**: 视频生成领域的黑马，下载量超 170 万，基于 LTX 架构优化，为开源视频生成提供了高质量基座。

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
  - 作者: ideogram-ai | 点赞: 397 | 下载: 5,495
  - **说明**: Ideogram 第四代文生图模型的 fp8 精简版，以更低的显存需求提供顶尖的文字渲染与图像生成能力。

- **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
  - 作者: stepfun-ai | 点赞: 352 | 下载: 45,535
  - **说明**: Step 系列最新视觉语言模型，主打极速响应，在图文理解任务上表现优异。

- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
  - 作者: ByteDance | 点赞: 186 | 下载: 278
  - **说明**: 字节跳动推出的图生视频渲染器，新颖的“image-text-to-video”任务设定引起了技术圈关注。

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
  - 作者: bosonai | 点赞: 252 | 下载: 15,005
  - **说明**: 高质量多模态 TTS 模型，结合了 Qwen3 架构，在语音合成自然度上取得了突破。

### 🔧 专用模型

- **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
  - 作者: JetBrains | 点赞: 260 | 下载: 17,448
  - **说明**: 专为代码开发设计的“思考型”模型，深度融合 IDE 场景，开发者体验极佳。

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - 作者: nvidia | 点赞: 296 | 下载: 3,957
  - **说明**: NVIDIA 推出的流式语音识别模型，体积仅 0.6B，适合低延迟实时转写场景。

- **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**
  - 作者: PaddlePaddle | 点赞: 278 | 下载: 9,924
  - **说明**: 结合视觉语言模型的 OCR 新版本，提升了复杂文档场景的理解能力。

### 📦 微调与量化

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 点赞: 1,557 | 下载: 3,036,465
  - **说明**: 社区微调杰作，去除审查并增强攻击性，MoE 架构结合 Unscensored 设定，下载量惊人，反映社区对模型自由的强烈需求。

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
  - 作者: unsloth | 点赞: 504 | 下载: 645,263
  - **说明**: Unsloth 第一时间推出的 Gemma-4 GGUF 版本，让普通用户能在消费级显卡上运行最新模型。

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 点赞: 697 | 下载: 1,186,648
  - **说明**: 针对 Qwen3.6 的优化量化版，兼顾了参数规模与运行速度，深受本地部署玩家喜爱。

- **[google/gemma-4-12B-it-qat-q4_0-gguf](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf)**
  - 作者: google | 点赞: 101 | 下载: 52,386
  - **说明**: 官方出品的 QAT 量化版，证明了厂商开始直接提供端侧部署方案，降低使用门槛。

---

## 3. 生态信号
**模型家族势头：** 本周属于 **Gemma-4** 与 **DeepSeek-V4** 的双雄争霸。Gemma-4 的发布带动了整个量化社区（Unsloth, GGUF）的狂欢，显示出“中杯”参数模型（12B-30B）在开源社区的最佳平衡点。**Qwen3.6** 依靠强大的社区微调生态（如 HauhauCS 版本）维持着极高的下载粘性。

**开源 vs 闭源：** NVIDIA 与 Google 等巨头正在加大开源力度，NVIDIA 从芯片厂商彻底转型为模型厂商，覆盖 ASR、视觉定位到超大参数 LLM。DeepSeek 继续以“开源闭源界限模糊”的策略（超高性能完全开源）压迫闭源模型生存空间。

**量化趋势：** 用户对“即插即用”的需求激增。GGUF 格式依然是本地部署的主流，同时厂商开始亲自下场提供 QAT（量化感知训练）模型，说明量化不再是社区的后处理步骤，正逐渐成为模型发布流程中的标准环节。

---

## 4. 值得探索
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：作为视觉定位领域的“小钢炮”，它在 Hugging Face 上填补了精细化视觉任务的空白，适合研究图文对齐和机器人视觉应用。
2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored...](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**：如果你关注模型的“无审查”能力或 MoE 架构的实际表现，这个拥有 300 万下载量的模型是观察社区偏好的最佳窗口。
3. **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**：专为代码设计的 Thinking 模型，对于开发者而言，这是探索代码 LLM 推理过程和辅助编程工具开发的绝佳素材。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*