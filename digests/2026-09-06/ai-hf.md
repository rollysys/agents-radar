# Hugging Face 热门模型日报 2026-09-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-06 03:33 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-09-06**

---

## 📌 今日速览

Qwen3.8-27B 毫无悬念地统治本周榜单，其本体及衍生量化/微调版本（unsloth、DavidAU、OBLITERATUS 等多达 8 个）占据了热门模型近三分之一席位。视频生成领域竞争白热化，MiniMax-H3 与 LTX-2.5 双双爆发，下载量均破百万。DeepSeek-V4-Flash-Vision-Exp 以实验版姿态登顶周点赞增速榜（682 赞），值得持续追踪。“去审查化”微调生态持续活跃，围绕 Qwen3.8 与 GLM-5.3 的 Uncensored/Abliterated 版本形成明显社群效应。

---

## 🔥 热门模型

### 🧠 语言模型

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  作者：Qwen | 👍 14,044 | ⬇️ 6,024,467
  本周绝对王者，27B 多模态旗舰，点赞与下载双高，成为整个社区微调生态的基础底座。

- **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)**
  作者：zai-org | 👍 1,720 | ⬇️ 370,417
  智谱新一代 MoE（glm_moe_dsa 架构）文本旗舰，下载稳步攀升，是 Qwen 之外最受关注的中文大模型。

- **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)**
  作者：zai-org | 👍 2,081 | ⬇️ 727,610
  GLM-5.3 轻量多模态版，下载接近旗舰版两倍，“Flash = 高性价比”策略见效。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  作者：Qwen | 👍 4,919 | ⬇️ 401,327
  采用 qwen4_exp 实验架构的下一代 Flash 预览，暗示 Qwen4 技术路线，前瞻性极强。

- **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)**
  作者：deepseek-ai | 👍 682 | ⬇️ 184,542
  DeepSeek V4 视觉实验版，周点赞增速第一，社区对新架构的尝鲜热情高涨。

- **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)**
  作者：tencent | 👍 443 | ⬇️ 6,195
  腾讯混元第四代预览版，点赞/下载比高，说明关注度远超实际部署量。

- **[XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B)**
  作者：XHToken | 👍 549 | ⬇️ 4,755
  4B 小模型新玩家，走轻量本地化路线，社区好奇心驱动上榜。

- **[IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B)**
  作者：IFM | 👍 174 | ⬇️ 1,333
  36B 总参/4B 激活的 MoVA 混合专家模型，K2 血统延续，推理成本优势吸引眼球。

---

### 🎨 多模态与生成

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
  作者：MiniMaxAI | 👍 4,938 | ⬇️ 5,057,414
  本周视频生成最大赢家，文本/图像到视频双能力，500 万+下载领跑生成赛道。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  作者：Lightricks | 👍 2,894 | ⬇️ 1,484,329
  图生视频/视频转视频全能力覆盖，diffusion 单文件格式便于 ComfyUI 生态接入，点赞高居生成类第二。

- **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)**
  作者：BreezeBlue | 👍 449 | ⬇️ 5,962
  社区新 TTS 模型，上线即获高点赞，语音合成赛道持续有新鲜血液。

- **[facebook/mms-300m](https://huggingface.co/facebook/mms-300m)**
  作者：facebook | 👍 263 | ⬇️ 12,961
  Meta 多语种语音 wav2vec2 预训练模型，经典 IP 回归热度榜。

- **[OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3)**
  作者：OpenVDN | 👍 187 | ⬇️ 0
  MiniMax-H3 的社区微调版，刚发布零下载即上榜，反映 H3 微调生态正在起量。

---

### 🔧 专用模型

- **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)**
  作者：google | 👍 458 | ⬇️ 123,025
  Google 时序预测基础模型 3.0 版，企业级时间序列分析刚需，下载量扎实。

- **[sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)**
  作者：sentence-transformers | 👍 5,560 | ⬇️ 255,006,933
  嵌入界常青树，2.55 亿累计下载，RAG 时代的隐形基础设施。

- **[openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32)**
  作者：openai | 👍 1,210 | ⬇️ 20,755,211
  零样本图像分类经典之作，下载稳定破 2000 万。

- **[google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)** / **[distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased)** / **[openai-community/gpt2](https://huggingface.co/openai-community/gpt2)**
  👍 2,986 / 1,156 / 3,702 | ⬇️ 56M / 7.1M / 14.7M
  三大教科书级模型，教学与研究场景的永久底座，下载量依旧碾压多数新模型。

---

### 📦 微调与量化

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  作者：unsloth | 👍 3,547 | ⬇️ 10,157,510
  榜单下载冠军（超 1000 万），unsloth 量化速度快人一步，本地部署首选。

- **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)**
  作者：unsloth | 👍 801 | ⬇️ 780,823
  实验版 Flash 的 GGUF，体现 unsloth 对新架构的快速响应。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab | 👍 415 | ⬇️ 297,493
  学术团队带来的 GSQ+RCO 混合精度量化研究，压榨极限显存的新方案。

- **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)**
  作者：JonathanColetti | 👍 987 | ⬇️ 2,453,361
  去审查版下载量在同类中最高，含 MTP 支持是亮点。

- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)**
  作者：HauhauCS | 👍 966 | ⬇️ 1,527,627
  多模态视觉能力保留的去审查版，差异化定位成功。

- **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)**
  作者：OBLITERATUS | 👍 1,096 | ⬇️ 968,936
  Abliteration 技术代表作，同时提供 MLX/GGUF/Safetensors 三格式，苹果生态友好。

- **[orcarouter](https://huggingface.co/orcarouter) 系列三连**：
  [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)（👍 728 | ⬇️ 283,774）、[Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)（👍 240 | ⬇️ 106,845）、[GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8)（👍 186 | ⬇️ 8,338）
  高产去审查量化专业户，已形成覆盖 Qwen + GLM 全系的产品线。

- **[DavidAU/Qwen3.8-27B-TURBO-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  作者：DavidAU | 👍 225 | ⬇️ 174,405
  命名狂魔的创意混合微调，融合代码增强与无审查人格，社区下载意外坚挺。

- **[Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF)**
  作者：Jackrong | 👍 119 | ⬇️ 10,680
  Qwen + Opus 风格混合微调实验，小众但思路有趣。

---

## 📊 生态信号

**Qwen3.8 已成为绝对生态中心**：榜单 30 席中 8 席为 Qwen3.8 系衍生品，unsloth 量化版下载破千万，说明其 27B 规模恰好落在消费级硬件可运行的甜蜜点上。**GLM-5.3 与 DeepSeek V4** 构成第二梯队，GLM 的 MoE-DSA 架构和 DeepSeek 的 V4 实验版都显示中国厂商在架构创新上的持续输出。**开源权重全面胜利**：本周上榜的新一代模型（Qwen、GLM、DeepSeek、MiniMax、混元）全部开放权重，闭源厂商在趋势榜上几近缺席。量化技术也在进化——从传统 GGUF 走向 GSQ-RCO 混合精度、FP8、MTP 等精细方案。**视频生成是第二战场**：MiniMax-H3 与 LTX-2.5 合计超 650 万下载，且 H3 微调版已开始出现，视频模型正重演 LLM 的开源生态路径。

---

## 💎 值得探索

1. **[Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — 采用 qwen4_exp 实验性架构，是窥探 Qwen4 技术方向的最早窗口，研究者和早期采用者不应错过。

2. **[DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** — 周点赞增速第一的新架构实验版，DeepSeek 历来以架构创新（MoE、MLA）引领行业，V4 的动向值得关注。

3. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — 学术团队的 GSQ+RCO 量化研究，若想在低显存设备上跑满血 27B 多模态模型，这是目前最前沿的方案之一。

---

*数据来源：Hugging Face Hub 周榜（2026-09-06）*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*