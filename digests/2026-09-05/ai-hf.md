# Hugging Face 热门模型日报 2026-09-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-05 03:32 UTC

---

# Hugging Face 热门模型日报（2026-09-05）

## 📰 今日速览

Qwen3.8 系列全面爆发，27B 与 Flash-Next 双旗舰占据榜首，社区量化/去审查版本层出不穷，形成本日最强生态。DeepSeek 发布 V4-Flash-Vision 实验版进军轻量多模态，MiniMax-H3 与 LTX-2.5 在视频生成领域下载量均破百万。学术量化方案（ISTA-DASLab 的 GSQ-RCO）开始挑战 unsloth 的 GGUF 垄断地位。经典模型（MiniLM、BERT、GPT-2）依旧稳坐下载量头部，与新品形成“基础设施 vs 前沿探索”的双层格局。

---

## 🔥 热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 👍 13,963 | ⬇️ 5,739,341
  当之无愧的本周霸主，多模态对话旗舰，点赞与下载双高，是整个社区量化生态的母模型。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | 👍 4,880 | ⬇️ 351,374
  Qwen3.8 轻量分支，面向高效推理场景，下载爬升迅速，是端侧与高吞吐部署的新宠。

- **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** — zai-org | 👍 1,705 | ⬇️ 303,534
  智谱旗舰 MoE（glm_moe_dsa 架构），纯文本生成方向，与 Qwen 形成正面竞争。

- **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** — zai-org | 👍 2,053 | ⬇️ 654,957
  GLM 轻量多模态版，下载量超旗舰版一倍，Flash 定位市场需求旺盛。

- **[XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B)** — XHToken | 👍 478 | ⬇️ 3,524
  4B 小型文本模型，社区新秀，点赞/下载比高说明口碑传播早期。

- **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)** — tencent | 👍 437 | ⬇️ 5,684
  腾讯混元第四代预览版，刚上线即上榜，值得关注后续动态。

- **[IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B)** — IFM | 👍 155 | ⬇️ 433
  36B 总参数、A4B 激活的 MoVA 架构，K2 血统延续，探索新的稀疏激活路线。

### 🎨 多模态与生成（图像 / 视频 / 音频）

- **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** — deepseek-ai | 👍 608 | ⬇️ 133,024
  DeepSeek V4 视觉实验版，官方首次披露 V4 架构，信号意义大于实用性。

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI | 👍 4,911 | ⬇️ 5,118,457
  视频/图文生成大模型，下载破 500 万，是本周生成式领域最强选手。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 👍 2,794 | ⬇️ 1,399,511
  图生视频/文生视频/视频转视频全能选手，140 万下载证明其工程实用性。

- **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** — BreezeBlue | 👍 434 | ⬇️ 5,388
  社区语音合成模型，TTS 赛道持续有新玩家入场。

- **[FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)** — FastVideo | 👍 277 | ⬇️ 0
  针对 MiniMax-H3 的 4 步蒸馏加速版，DataFree 蒸馏路线引人注目。

- **[OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3)** — OpenVDN | 👍 175 | ⬇️ 0
  基于 MiniMax-H3 的社区微调，证明 H3 已成为视频微调新基座。

### 🔧 专用模型

- **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** — google | 👍 432 | ⬇️ 105,304
  时序预测专用模型，TimesFM 3.0 迭代，非 LLM 垂类模型的常青树。

- **[sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)** — sentence-transformers | 👍 5,519 | ⬇️ 253,789,790
  嵌入界“水电煤”，2.5 亿下载无人能及，RAG 生态的绝对基石。

- **[google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)** — google-bert | 👍 2,951 | ⬇️ 58,675,189
  经典中的经典，教学与轻量场景仍不可替代。

- **[distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased)** — distilbert | 👍 1,133 | ⬇️ 7,067,963
  蒸馏先驱，推理效率场景的长期选择。

- **[openai-community/gpt2](https://huggingface.co/openai-community/gpt2)** — openai-community | 👍 3,661 | ⬇️ 14,607,268
  时代符号，研究与教育场景下载量依旧惊人。

- **[openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32)** — openai | 👍 1,185 | ⬇️ 20,569,141
  图文对齐基础设施，零样本图像分类标配。

- **[facebook/mms-300m](https://huggingface.co/facebook/mms-300m)** — facebook | 👍 237 | ⬇️ 12,823
  Meta 多语种语音 wav2vec2 预训练模型，语音基础模型代表作。

### 📦 微调与量化

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 👍 3,513 | ⬇️ 9,951,693
  本日下载量冠军（近 1000 万），unsloth 量化版始终是官方模型流量的放大器。

- **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** — unsloth | 👍 788 | ⬇️ 702,251
  Flash-Next 的官方级 GGUF 量化，紧随母模型上线。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab | 👍 315 | ⬇️ 206,575
  学术界 GSQ-RCO 混合精度量化方案，20 万下载证明前沿量化研究有真实需求。

- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/Huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** — HauhauCS | 👍 949 | ⬇️ 1,463,966
  激进去审查 + MTP 加持，去审查类下载量榜首之一。

- **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** — JonathanColetti | 👍 971 | ⬇️ 2,395,758
  llama.cpp 生态去审查版，240 万下载显示本地化无审查需求旺盛。

- **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** — OBLITERATUS | 👍 1,090 | ⬇️ 928,393
  MLX + GGUF 双格式 abliterated 版本，兼顾 Apple 生态用户。

- **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** / **[Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** / **[GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8)** — orcarouter | 👍 717 / 232 / 183
  高产量化作坊，一天覆盖 Qwen 与 GLM 全系去审查版本。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 👍 184 | ⬇️ 95,226
  DavidAU 式“缝合怪”配方微调，融合 Heretic、MTP、Coder 等多种技巧，实验性极强。

---

## 📊 生态信号

**Qwen3.8 统治力显著**：榜单 30 席中 11 席与 Qwen3.8 相关，从官方双旗舰到 unsloth 量化再到 5+ 个去审查版本，形成完整“母模型 → 量化 → 社区魔改”漏斗，且 Flash-Next 补齐了轻量层。**中国厂商开源攻势持续**：DeepSeek、智谱 GLM-5.3、腾讯混元 Hy4、MiniMax 同日齐聚榜单，开源权重竞争中主场优势明显。**量化技术竞争升级**：unsloth GGUF 仍是流量之王，但 ISTA-DASLab 的 GSQ-RCO 学术量化（20 万下载）与 MTP 变体涌现，说明社区对更低比特、混合精度、投机解码的需求升温。**去审查生态规模化**：五个 Uncensored 版本合计下载近 500 万，abliteration 已成标准操作。视频生成进入“基座化”阶段，MiniMax-H3 与 LTX-2.5 均出现蒸馏/微调衍生品。

---

## 💎 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 点赞近 1.4 万的现象级模型，当前开源多模态对话的事实标杆，无论研究还是部署都不容错过；配合 unsloth GGUF 可快速本地化。

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 500 万下载的视频生成新基座，已出现蒸馏（FastVideo 4-step）和微调（OpenVDN）生态，是文生视频赛道当前最活跃的开源选项。

3. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — GSQ-RCO 混合精度量化代表前沿压缩研究落地，对关注低资源推理与量化技术的开发者极具参考价值。

---
*数据来源：Hugging Face Hub 热门榜（按周点赞排序），下载量为累计值。*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*