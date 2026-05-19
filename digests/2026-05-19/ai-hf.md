# Hugging Face 热门模型日报 2026-05-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-19 03:51 UTC

---

# Hugging Face 热门模型日报 (2026-05-19)

## 1. 今日速览
今日 Hugging Face 迎来重量级更新，DeepSeek-V4 系列模型强势霸榜，Pro 与 Flash 版本凭借卓越性能与极高下载量成为社区焦点。多模态领域竞争白热化，MiniCPM-V 更新至 4.6 版本登顶点赞榜，视频生成模型 Sulphur-2-base 下载量突破百万，显示出内容创作工具的强劲需求。Google Gemma-4 与 Qwen3.6 系列持续迭代，MoE（混合专家）架构与端侧优化成为主流技术路线。此外，社区对 GGUF 量化格式的热情不减，Unsloth 等团队及时跟进，大幅降低了顶级模型的部署门槛。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 点赞: 4,042 | 下载: 3,435,748
  - 说明: DeepSeek V4 系列旗舰版，本周点赞数断层领先，性能强劲，是当前开源大模型的标杆之作。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 点赞: 1,146 | 下载: 1,904,105
  - 说明: V4 系列轻量版，兼顾速度与效果，下载量惊人，适合高频次、低延迟的推理场景。

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 点赞: 2,681 | 下载: 9,889,356
  - 说明: Google 最新一代 Gemma 模型，31B 参数平衡了性能与部署成本，下载量位居榜首，社区关注度极高。

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - 作者: Qwen | 点赞: 1,817 | 下载: 5,613,637
  - 说明: 通义千问最新 MoE 架构模型，以高效推理能力著称，原生支持多模态，下载量突破 500 万。

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 点赞: 1,329 | 下载: 3,550,893
  - 说明: Dense 架构的高性能版本，作为通用多模态大模型，在各项基准测试中表现稳健。

- **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**
  - 作者: Zyphra | 点赞: 532 | 下载: 145,609
  - 说明: 新晋开源模型，主打推理能力，作为 8B 小模型表现亮眼，值得开发者关注。

- **[inclusionAI/Ring-2.6-1T](https://huggingface.co/inclusionAI/Ring-2.6-1T)**
  - 作者: inclusionAI | 点赞: 77 | 下载: 2,406
  - 说明: 标注 1T 训练数据的新秀模型，定位为 Hybrid 架构，旨在探索规模化训练的边界。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
  - 作者: openbmb | 点赞: 776 | 下载: 80,586
  - 说明: 今日点赞榜第一，高效端侧多模态模型，非常适合移动端和边缘设备部署。

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 点赞: 1,127 | 下载: 1,049,229
  - 说明: 热门文生视频基础模型，下载量超百万，视频生成赛道的基础设施级模型。

- **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
  - 作者: circlestone-labs | 点赞: 1,412 | 下载: 545,205
  - 说明: ComfyUI 生态下的热门模型，可能涉及高质量风格化生成，社区热度极高。

- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  - 作者: bytedance-research | 点赞: 80 | 下载: 0
  - 说明: 字节跳动推出的 Any-to-Any 统一生成模型，支持图像与视频生成，技术前瞻性强。

- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**
  - 作者: SeeSee21 | 点赞: 410 | 下载: 15,495
  - 说明: 专注于动漫风格的文生图模型，在小众垂直领域表现出色。

- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
  - 作者: Supertone | 点赞: 425 | 下载: 24,031
  - 说明: 高质量 TTS（语音合成）模型，声音自然度极高，音频生成领域的佼佼者。

- **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)**
  - 作者: TencentARC | 点赞: 146 | 下载: 0
  - 说明: 腾讯 ARC 出品的图像转 3D 模型，刚发布即上榜，解决 3D 资产生成痛点。

- **[microsoft/Fara-7B](https://huggingface.co/microsoft/Fara-7B)**
  - 作者: microsoft | 点赞: 578 | 下载: 16,011
  - 说明: 微软推出的多模态模型，基于 Qwen2.5-VL 架构，轻量且功能全面。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[jackxinning/Leanly_AI](https://huggingface.co/jackxinning/Leanly_AI)**
  - 作者: jackxinning | 点赞: 119 | 下载: 9,432
  - 说明: 专注于医疗领域的问答模型，针对中英双语优化，行业落地价值高。

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
  - 作者: Cactus-Compute | 点赞: 83 | 下载: 241
  - 说明: 主打 Function Calling 与工具使用的专用模型，适合 Agent 开发场景。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 点赞: 292 | 下载: 268,305
  - 说明: Unsloth 出品的高效量化版本，大幅降低显存需求，让消费级显卡也能运行最新模型。

- **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
  - 作者: unsloth | 点赞: 250 | 下载: 237,613
  - 说明: 针对 MoE 架构的优化量化版，平衡了参数量与推理速度。

- **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)**
  - 作者: Jiunsong | 点赞: 626 | 下载: 267,449
  - 说明: Gemma-4 的去审查版微调模型，在社区因内容自由度较高而广受欢迎。

- **[antirez/deepseek-v4-gguf](https://huggingface.co/antirez/deepseek-v4-gguf)**
  - 作者: antirez | 点赞: 143 | 下载: 295,917
  - 说明: Redis 作者 antirez 提供的 DeepSeek-V4 量化版本，技术圈名人效应加持。

- **[Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)**
  - 作者: Jackrong | 点赞: 102 | 下载: 6,462
  - 说明: 基于 Qwen 优化的代码增强版微调模型，适合编程辅助任务。

## 3. 生态信号
本周生态呈现出**“巨头迭代，社区跟随”**的鲜明特征。DeepSeek-V4 与 Gemma-4 的双雄争霸，证明了开源模型在性能上已完全对标闭源一线水平，且下载量动辄百万级，显示企业级采用率极高。**MoE 架构** 已成为标配，Qwen3.6 与 DeepSeek 均在此发力，旨在降低推理成本。多模态方面，**视频生成** 正在复刻去年图像生成的爆发路径。值得注意的是，**Unsloth 等量化团队** 的响应速度极快，新模型发布即有高质量 GGUF 版本，显示开源社区的基础设施建设已非常成熟，极大降低了个人开发者的准入门槛。

## 4. 值得探索

1. **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
   - 理由: 作为一个 Any-to-Any 任务模型，它代表了多模态统一建模的前沿方向，且背靠字节跳动的技术实力，极有可能是下一个“刷榜”模型。

2. **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
   - 理由: 登顶今日点赞榜，且主打端侧部署。在模型越来越大、部署成本越来越高的当下，这种“小而美”且能直接在手机运行的高性能多模态模型极具实用价值。

3. **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**
   - 理由: 这是一个非常有趣的新面孔，不仅下载量不俗，而且明确标注了 reasoning（推理）能力。在 8B 参数量级尝试突破逻辑推理瓶颈，是值得技术深究的样本。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*