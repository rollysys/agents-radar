# Hugging Face 热门模型日报 2026-08-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-24 01:24 UTC

---

# Hugging Face 热门模型日报 (2026-08-24)

## 今日速览
本周 Hugging Face 迎来了 **Qwen3.8-27B** 的发布狂潮，该模型凭借强大的多模态能力霸榜首位，其社区微调版下载量更是突破 600 万，显示出极高的人气。与此同时，**MiniMax** 和 **Lightricks** 在视频与音乐生成领域表现抢眼，多模态生成模型竞争白热化。值得关注的是，“去审查化”微调成为本周热点，大量 Uncensored/Abliterated 版模型上榜，反映了社区对无限制模型输出的强烈需求。

---

## 🧠 语言模型

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
   - 作者: Qwen | 点赞: 12,316 | 下载: 2,358,347
   - 说明: 本周最热门的基础模型，支持图文生文本，以 27B 参数量实现了性能与效率的平衡，是社区微调的首选基座。

2. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
   - 作者: moonshotai | 点赞: 10,950 | 下载: 2,727,920
   - 说明: Moonshot 发布的最新一代模型，支持压缩张量，下载量惊人，展现了国产大模型强劲的竞争力。

3. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
   - 作者: deepseek-ai | 点赞: 3,652 | 下载: 3,089,709
   - 说明: DeepSeek V4 系列的轻量级版本，主打高并发与快速推理，下载量已超越多数老牌模型。

4. **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)**
   - 作者: ornith-ai | 点赞: 365 | 下载: 23,516
   - 说明: 采用 MoE (Mixture of Experts) 架构的 35B 模型，在保持推理成本较低的同时提供了大参数量的性能。

## 🎨 多模态与生成

1. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
   - 作者: MiniMaxAI | 点赞: 4,378 | 下载: 4,039,236
   - 说明: 备受期待的视频生成模型，支持文生视频与图生视频，下载量突破 400 万，是目前生成领域的明星。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
   - 作者: Lightricks | 点赞: 1,643 | 下载: 738,345
   - 说明: 高质量视频生成模型，支持多种视频转换任务，展现了 Lightricks 在生成式 AI 领域的技术实力。

3. **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)**
   - 作者: MiniMaxAI | 点赞: 1,205 | 下载: 17,421
   - 说明: 专注于文本到音乐的生成模型，为音频生成赛道提供了新的开源选择。

## 🔧 专用模型

1. **[superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)**
   - 作者: superwhisper | 点赞: 214 | 下载: 2,280
   - 说明: 专为自动语音识别 (ASR) 优化的紧凑型模型，适合端侧部署。

2. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
   - 作者: froggeric | 点赞: 1,421 | 下载: 0
   - 说明: 针对 Qwen 模型的对话模板修复工具，高点赞数反映了开发者在构建聊天应用时的刚需。

## 📦 微调与量化

1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
   - 作者: unsloth | 点赞: 2,738 | 下载: 6,674,515
   - 说明: 基座模型的 GGUF 量化版，下载量高达 660 万，是本地部署玩家最热衷的版本。

2. **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)**
   - 作者: OBLITERATUS | 点赞: 634 | 下载: 244,834
   - 说明: “抹除”了安全限制的版本，迎合了社区对无审查模型的需求，此类模型本周上榜极多。

3. **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)**
   - 作者: JonathanColetti | 点赞: 650 | 下载: 1,334,820
   - 说明: 另一款热门的去审查量化版本，下载量破百万，证明了“Uncensored”标签的流量号召力。

---

## 生态信号

本周模型生态呈现出**“Qwen 系统治、去审查流行、量化先行”**的三大特征。

首先，**Qwen3.8-27B** 已迅速确立了其作为新一代“平民王者”的地位。榜单前 30 名中有近 20 个模型基于 Qwen3.8 架构，这表明阿里 Qwen 团队在开源社区的号召力已超越 Llama 等老牌势力，形成了强大的上下游生态。

其次，**“去审查”微调**成为显学。大量带有 "abliterated" 或 "uncensored" 标签的模型占据榜单高位，这反映出开源社区对于模型安全护栏与自由度之间的博弈仍在加剧，社区对生成内容不受限的模型有着极大的刚需。

最后，**量化部署依然是流量入口**。Unsloth 发布的 GGUF 版下载量是原版的近 3 倍，说明绝大多数用户仍依赖消费级硬件进行本地推理，GGUF/MLX 等轻量化格式是连接模型与终端用户的关键桥梁。

---

## 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
   - **理由**: 作为本周绝对的焦点，它是目前多模态大模型在 30B 参数级别的新标杆，无论是性能评测还是后续微调潜力，都值得开发者第一时间上手测试。

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
   - **理由**: 视频生成领域的新秀，下载量惊人。如果你关注文生视频或图生视频技术，这是目前开源界最值得关注的模型之一，代表了生成质量的新高度。

3. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
   - **理由**: 国产大模型的又一力作，支持 `compressed-tensors` 特性意味着它在推理部署效率上有独到之处，适合探索长文本与高效率推理场景。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*