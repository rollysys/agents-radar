# Hugging Face 热门模型日报 2026-08-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-13 02:08 UTC

---

# Hugging Face 热门模型日报 (2026-08-13)

## 1. 今日速览
本周 Hugging Face 迎来生成式 AI 的双重风暴：**MiniMax-H3** 视频生成模型引爆社区，不仅原版模型热度飙升，其衍生的 ComfyUI 工作流和 LoRA 微调更是占据了榜单近三分之一的席位。与此同时，Meta 发布的 **Muse-Glimmer-30B** 以多模态对话能力成为今日最受关注的新秀，尽管下载量尚未起势，但社区期待值已拉满。语言模型方面，**DeepSeek-V4** 与 **Kimi-K3** 继续领跑下载榜，展现了大模型在应用端的持久统治力。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
  - 作者: deepseek-ai | 👍 3,240 | ⬇️ 1,048,685
  - **说明：** 本周下载量破百万的绝对主力，证明 DeepSeek V4 系列在文本生成任务上已成为社区首选的高效基座模型。

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
  - 作者: moonshotai | 👍 10,584 | ⬇️ 1,565,484
  - **说明：** 今日点赞数最高的模型，支持特征提取与压缩张量格式，Kimi 系列迭代至 K3 后依旧保持极高的社区活跃度与技术领先性。

- **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)**
  - 作者: Qwen | 👍 524 | ⬇️ 978
  - **说明：** 通义千问最新发布的混合专家模型，参数规模惊人，展示了在 MoE 架构上的持续探索。

- **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)**
  - 作者: LiquidAI | 👍 586 | ⬇️ 93,668
  - **说明：** 小参数大能力的代表，适合端侧部署，下载量稳健，是轻量级 LLM 的重要竞争者。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxai/MiniMax-H3)**
  - 作者: MiniMaxAI | 👍 3,717 | ⬇️ 83,484
  - **说明：** 本周最大的黑马，支持文生视频与图生视频，高性能与高质量使其成为视频生成领域的新晋霸主。

- **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)**
  - 作者: Comfy-Org | 👍 1,258 | ⬇️ 6,798,796
  - **说明：** 官方模型的 ComfyUI 适配版本，近 700 万的下载量表明视频生成工作流已全面融入节点式创作生态。

- **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)**
  - 作者: meta-models | 👍 1,298 | ⬇️ 0
  - **说明：** Meta 推出的新一代图文理解模型，刚发布即登顶热度榜，社区对其多模态对话能力抱有极高期待。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  - 作者: Lightricks | 👍 574 | ⬇️ 39
  - **说明：** 知名特效工具商 Lightricks 的视频生成模型迭代，支持多模态转视频，提供了差异化的生成风格。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
  - 作者: DavidAU | 👍 1,958 | ⬇️ 2,521,093
  - **说明：** 典型的“超长名字”社区爆款，基于 Qwen 深度微调的无审查创意写作模型，下载量惊人，反映了用户对个性化和无限制模型的刚需。

- **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)**
  - 作者: unsloth | 👍 666 | ⬇️ 207,990
  - **说明：** Unsloth 团队的高效量化版，让顶级大模型能在消费级显卡上流畅运行，是本地部署者的首选。

- **[larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)**
  - 作者: larryvrh | 👍 701 | ⬇️ 0
  - **说明：** 针对 MiniMax-H3 的加速 LoRA，通过轻量级微调提升生成速度，紧跟热点发布。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)**
  - 作者: nvidia | 👍 354 | ⬇️ 653
  - **说明：** 英伟达推出的语音聊天专用模型，结合了语音识别与对话能力，展示了软硬一体的垂直领域探索。

---

## 3. 生态信号
**视频生成生态全面爆发：** 本周榜单最显著的特征是 **MiniMax-H3 家族的强势崛起**。从原生模型到 ComfyUI 封装，再到各类 Turbo 加速版和 LoRA（如 Realism-People），形成了一条完整的上下游产业链。特别是 `Comfy-Org/MiniMax-H3` 突破 600 万下载量，标志着视频生成已从“尝鲜”正式进入“工业化生产”阶段，ComfyUI 正在成为事实上的生成式 AI 操作系统。

**开源与闭源的边界模糊：** Meta 和 MiniMax 等大厂通过发布如 `Muse-Glimmer` 和 `MiniMax-H3` 这样的开放权重模型，依然掌控着生态定义权。与此同时，以 `DavidAU` 为代表的社区微调者和 `unsloth` 为代表的量化团队，通过极快的响应速度，将大模型转化为用户真正可用的“消费级”产品，极大地延伸了模型的生命周期。

**MoE 架构主流化：** 榜单中 `DeepSeek-V4`、`Qwen3.8` 等多为 MoE（混合专家）架构，且多配合 FP8 等低精度量化发布，显示出模型设计正向“高参数量、低推理成本”的方向坚定演进。

---

## 4. 值得探索
1. **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)**：如果你是视频创作者或 AI 工作者，这是目前最值得尝试的生产力工具。高达近 700 万的下载量证明了其在工作流中的稳定性，配合丰富的 LoRA 资源，可以快速产出高质量视频。
2. **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)**：Meta 新晋发布的“当红炸子鸡”，虽然目前下载量为 0，但其 image-text-to-text 的定位预示着它可能是 LLaVA 系列的强力接班人，值得研究者密切关注其权重开放情况。
3. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：除了霸榜的 DeepSeek，Kimi-K3 凭借超高的点赞数和优秀的中文理解能力，是构建 RAG（检索增强生成）或长上下文应用的极佳选择。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*