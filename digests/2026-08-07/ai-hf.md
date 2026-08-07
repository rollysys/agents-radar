# Hugging Face 热门模型日报 2026-08-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-07 02:46 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-08-07

## 1. 今日速览
本周 Hugging Face 迎来了视频生成领域的重磅更新，**MiniMax-H3** 凭借卓越的生成质量席卷榜单，引发了 ComfyUI 生态的适配热潮。语言模型方面，**DeepSeek-V4-Flash** 持续发力，下载量突破百万，显示出极高的社区采用率；而 **Kimi-K3** 以超过 1 万的点赞数成为本周口碑之王。此外，百度发布的 **Unlimited-OCR** 解决了长图识别痛点，迅速成为工具类模型的新宠。开源社区对 **Qwen3.6** 系列的微调热情依旧高涨，涌现出大量高性能的“Uncensored”版本。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
  - 作者：moonshotai | 👍 10,205 | ⬇️ 1,258,043
  - **说明：** 本周点赞数最高的模型，作为新一代多模态文本模型，其在特征提取和压缩张量技术上的表现引发了社区热烈讨论。

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
  - 作者：deepseek-ai | 👍 2,654 | ⬇️ 617,900
  - **说明：** DeepSeek V4 系列的最新迭代版，凭借极高的推理效率和对话能力，下载量稳居榜首，是当前最受开发者在生产环境中青睐的基座模型之一。

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者：zai-org | 👍 4,875 | ⬇️ 2,391,730
  - **说明：** GLM 系列的最新 MoE（混合专家）架构模型，兼顾了高性能与低推理成本，下载量突破 200 万，体现了国产大模型的强劲实力。

- **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)**
  - 作者：LiquidAI | 👍 336 | ⬇️ 73,573
  - **说明：** 轻量级文本生成模型，适合边缘设备部署，展示了小模型在特定任务下的生命力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
  - 作者：MiniMaxAI | 👍 2,765 | ⬇️ 12,102
  - **说明：** 本周最耀眼的视频生成新星，支持图像/文本到视频的转换，生成动态效果惊艳，开启了开源视频生成的新篇章。

- **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)**
  - 作者：Comfy-Org | 👍 854 | ⬇️ 2,295,377
  - **说明：** MiniMax-H3 的官方 ComfyUI 适配版本，下载量高达 200 万+，表明视频生成工作流已全面融入节点化设计生态。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者：baidu | 👍 3,934 | ⬇️ 2,791,862
  - **说明：** 百度推出的长图 OCR 模型，解决了传统模型对超长图片识别的痛点，下载量极高，成为本周最实用的工具类模型。

- **[black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev)**
  - 作者：black-forest-labs | 👍 14,014 | ⬇️ 523,234
  - **说明：** 图像生成领域的常青树，虽然新视频模型抢尽风头，但 Flux 依然以 1.4 万赞保持着图像生成领域的统治地位。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
  - 作者：Kwaipilot | 👍 522 | ⬇️ 16,961
  - **说明：** 基于 Qwen3.5 MoE 架构的代码专用模型，专攻代码生成与补全任务，是开发者的得力助手。

- **[nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)**
  - 作者：nvidia | 👍 184 | ⬇️ 206
  - **说明：** NVIDIA 推出的语音交互专用模型，针对实时语音聊天场景优化，提供了端到端的语音解决方案。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
  - 作者：DavidAU | 👍 1,654 | ⬇️ 2,087,189
  - **说明：** 基于Qwen3.6的深度微调版，主打“无审查”与创意写作，下载量惊人，反映了社区对去限制模型的巨大需求。

- **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)**
  - 作者：unsloth | 👍 552 | ⬇️ 145,105
  - **说明：** DeepSeek V4 Flash 的高效量化版，由 Unsloth 团队打造，让消费级显卡也能轻松运行最新旗舰模型。

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF)**
  - 作者：LuffyTheFox | 👍 411 | ⬇️ 309,149
  - **说明：** 另一款热门的 Qwen3.6 微调版本，结合了 Hermes 数据集的优势，在角色扮演和长文本生成上表现优异。

## 3. 生态信号
本周模型生态呈现出明显的**“视频生成爆发”**与**“微调社区活跃”**两大特征。
1.  **MiniMax-H3 效应：** 视频生成正经历类似去年图像生成的“开源爆发期”，ComfyUI 适配版高达 200 万的下载量证明了**工作流节点化**已成为多模态应用的主流形态。
2.  **Qwen3.6 微调盛世：** 社区对基座模型的微调热情高度集中在 Qwen3.6 上，特别是围绕“Uncensored（无审查）”和“Fable（创意/故事）”方向，显示出用户对模型**个性化和创造力**的重视远超通用能力。
3.  **效率优先：** DeepSeek-V4-Flash 和 Ling-3.0-flash 的上榜，以及大量 GGUF 量化模型的流行，预示着**轻量化、低延迟**仍是模型在边缘侧和大规模部署中胜出的关键。

## 4. 值得探索
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**：作为目前最火的开源视频模型，其生成质量和时长值得每一位 AIGC 创作者亲自测试，结合 ComfyUI 工作流潜力巨大。
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：获得本周最高点赞数，其多模态特征提取能力备受推崇，适合需要处理长文档和复杂图文信息的研究者尝试。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：如果你在开发文档处理或票据识别应用，这款模型解决了长图拼接识别的痛点，是极佳的工程化组件。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*