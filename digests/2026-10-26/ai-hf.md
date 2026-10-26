# Hugging Face 热门模型日报 2026-10-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-26 03:48 UTC

---

# Hugging Face 热门模型日报（2026-10-26）

## 📰 今日速览

Qwen3.8-27B 以 18,405 点赞、776 万下载强势领跑，成为本周当之无愧的明星开源模型。视频生成领域 LTX-2.5 和图像分割领域的 facebook/sam3 双双突破 5 千点赞、180 万下载，生成式与视觉基础模型热度持续攀升。DeepSeek-V4.1-Flash 带动了一波“去审查/量化”社区改造热潮，衍生模型多达 4 款上榜。MOSS-Image 开源图像生成家族（Base + SFT + ComfyUI 封装）形成完整生态链，值得密切关注。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 👍 18,405 | ⬇️ 7,762,014
  本周霸榜的多模态对话旗舰，Qwen3.5 架构演进版，下载量断层领先，是当前开源生态的事实标杆。

- **[RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint)** | RecursiveSI | 👍 863 | ⬇️ 6,444
  新晋社区对话模型，凭借出色的 conversational 能力引发热议，已有 unsloth 官方 GGUF 跟进。

- **[XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B)** | XHToken | 👍 530 | ⬇️ 3,488
  轻量 4B 文本生成模型，小尺寸高性价比路线，适合本地部署。

- **[Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B)** | Nanbeige | 👍 401 | ⬇️ 0
  基于 Llama 架构的 33B 中型模型，刚发布即上榜，关注度先行于下载。

- **[KRAFTON/Raon-1-mini-preview](https://huggingface.co/KRAFTON/Raon-1-mini-preview)** | KRAFTON | 👍 188 | ⬇️ 1,177
  游戏大厂 KRAFTON 首个小型 LLM 预览版，跨界厂商入场值得关注。

- **[ornith-ai/Ornith-1.5-122B](https://huggingface.co/ornith-ai/Ornith-1.5-122B)** | ornith-ai | 👍 177 | ⬇️ 48,477
  基于 qwen3_5_moe 架构的 122B 大型 MoE 模型，新实验室的首发力作。

### 🎨 多模态与生成（图像、视频、音频）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 👍 9,348 | ⬇️ 2,107,108
  全能视频生成模型（文生/图生/视频转视频），本周点赞榜第二，生态工具链成熟的视频生成首选。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)** | facebook | 👍 5,112 | ⬇️ 1,849,059
  Meta 分割一切第三代，新增视频能力（sam3_video），视觉基础模型的重要更新。

- **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)** | abenzerps | 👍 5,043 | ⬇️ 2,235,846
  Qwen-Image 2.1 的去审查量化版，GGUF + ComfyUI 适配，社区需求驱动的爆款。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)** | black-forest-labs | 👍 1,612 | ⬇️ 660,874
  FLUX-3 小尺寸图像编辑模型的 ComfyUI 单文件版，66 万下载证明 Comfy 生态的装机量。

- **[OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT)** | OpenMOSS-Team | 👍 731 | ⬇️ 10,757
  MOSS-Image 的 SFT 对齐版本，与 Base 版配套发布的开源文生图新势力。

- **[fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3)** | fishaudio | 👍 1,016 | ⬇️ 21,375
  多说话人 TTS 模型，情感表现力强，语音生成赛道的持续迭代。

- **[MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)** | MiniMaxAI | 👍 354 | ⬇️ 7,355
  MiniMax 多模态 Flash 轻量版，多模态能力下放到低算力场景。

- **[orcarouter/OrcaCyber-Nano-1.0](https://huggingface.co/orcarouter/OrcaCyber-Nano-1.0)** | orcarouter | 👍 256 | ⬇️ 30,330
  网络安全专用视觉语言模型，逆向工程+安全分析小模型，细分赛道差异化。

### 🔧 专用模型（代码、数学、时序、嵌入、生物）

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** | google | 👍 2,923 | ⬇️ 212,769
  Google 嵌入模型第二代，RAG/检索场景刚需，2,923 点赞显示嵌入模型热度回升。

- **[mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M)** | mistralai | 👍 371 | ⬇️ 9,765
  Mistral 出品的时间序列预测基础模型，209M 小巧身材，开辟全新任务赛道。

- **[datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr)** | datalab-to | 👍 425 | ⬇️ 4,636
  CPU 友好（ONNX）的 OCR 模型，文档处理工具链的重要拼图。

- **[HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X)** | HuggingFaceBio | 👍 186 | ⬇️ 807
  DNA 语言模型，基因组学 + LLM 的前沿交叉探索。

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** | jialinyyzz | 👍 2,156 | ⬇️ 143,152
  基于 Gemma4 的多模态“人性化文风”模型，让 AI 输出更像人写，社区刚需驱动的黑马。

### 📦 微调与量化（社区改造）

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** | DavidAU | 👍 2,092 | ⬇️ 1,671,015
  典型 DavidAU 风格“融合怪”微调：去审查 + 代码强化 + MTP，167 万下载证明此类模型的庞大需求。

- **[Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image)** | Comfy-Org | 👍 454 | ⬇️ 2,161,961
  MOSS-Image 的 ComfyUI 官方封装，216 万下载为本周图像类第一，Apache-2.0 许可友好。

- **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** | ISTA-DASLab | 👍 289 | ⬇️ 412,392
  学术量化团队对 DeepSeek V4.1 Flash 的 GSQ/RCO 混合精度量化，前沿压缩技术实践。

- **[unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF)** | unsloth | 👍 251 | ⬇️ 103,369
  unsloth 第一时间跟进 flint 的 GGUF 版，“上新即量化”的社区速度标杆。

- **[dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8)** | dealignai | 👍 370 | ⬇️ 6,792
  DeepSeek V4.1 Flash 的 FP8 去审查版。

- **[orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF)** | orcarouter | 👍 221 | ⬇️ 7,293
  同一基座的 abliterated（消融对齐）GGUF 版，与上两者共同构成 V4.1 Flash 的“去审查三件套”。

---

## 📊 生态信号

**模型家族格局**：Qwen 系仍是最强势的生态中心——Qwen3.8-27B 领跑总榜，Qwen3.5 MoE 架构被 Sage-A1.5、Ornith-1.5 等第三方直接沿用，Qwen-Image 2.1 的社区改造版下载破 220 万。DeepSeek V4.1 Flash 是本周第二大“改造母体”，催生了量化、去审查、abliterated 等至少 4 款衍生品。**开源权重趋势**：头部厂商（Qwen、Meta、Google、Lightricks）持续以宽松许可开放旗舰能力，开源与闭源的差距在图像/视频生成侧明显收窄。**量化与微调活动**非常活跃：unsloth、DavidAU、ISTA-DASLab 形成“基座发布→GGUF/FP8/混合精度→风格化微调”的 48 小时快速跟进链；ComfyUI 单文件分发（diffusion-single-file）已成为图像/视频模型触达用户的主流渠道，MOSS-Image 和 FLUX-3 均以此斩获百万级下载。

---

## 💎 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周综合实力第一的多模态开源模型，无论做基座还是直接部署都是当前的最优起点，且量化生态已成熟。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 覆盖文生/图生/视频转视频全任务的视频生成模型，210 万下载验证了易用性，适合视频创作者和研究者第一时间上手。

3. **[mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M)** — 大厂正式押注时间序列预测基础模型，开辟了 LLM 之外的新赛道，209M 的体量让实验成本极低，可能是被低估的方向性信号。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*