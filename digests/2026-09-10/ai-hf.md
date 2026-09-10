# Hugging Face 热门模型日报 2026-09-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-10 03:41 UTC

---

# Hugging Face 热门模型日报（2026-09-10）

---

## 📰 今日速览

Qwen3.8 家族持续统治榜单，[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) 以 14,531 点赞、671 万下载领跑，其 GGUF 量化版下载量更是突破 1,067 万。视频生成领域迎来 [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) 和 [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) 双雄争霸，分别拿下 5,092 和 3,279 点赞。量化生态活跃，unsloth、ISTA-DASLab、nvidia 从不同角度切入 Qwen3.8 的压缩部署。社区微调方面，“去审查（Uncensored）”类 GGUF 模型热度显著。语音赛道上微软推出流式 ASR 新作 VibeVoice-7B。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** ｜ Qwen ｜ 👍 14,531 ｜ ⬇️ 6,712,160
  本期绝对王者，多模态旗舰 LLM，社区生态（量化、微调、衍生版）围绕它全面爆发。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** ｜ Qwen ｜ 👍 5,047 ｜ ⬇️ 503,263
  轻量高速版本，针对低延迟推理场景，上线即登榜，是部署侧的新宠。

- **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** ｜ zai-org ｜ 👍 2,208 ｜ ⬇️ 826,875
  智谱 GLM-5.3 系列的轻量多模态版本，下载增长迅速，性价比路线清晰。

- **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** ｜ zai-org ｜ 👍 1,790 ｜ ⬇️ 474,141
  GLM 旗舰 MoE 模型，开源权重中的对话强者，与 Qwen 形成正面竞争。

- **[XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B)** ｜ XHToken ｜ 👍 1,013 ｜ ⬇️ 10,661
  小参数量新秀，周点赞第一梯队，端侧 LLM 赛道再添选手。

- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)** ｜ openbmb ｜ 👍 952 ｜ ⬇️ 2,879
  面壁 2B 端侧模型新版本，主打设备端高效推理，社区关注度高。

- **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** ｜ deepseek-ai ｜ 👍 843 ｜ ⬇️ 313,547
  DeepSeek V4 Flash 的视觉实验版，多模态方向的前瞻性试水。

- **[IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B)** ｜ IFM ｜ 👍 263 ｜ ⬇️ 3,205
  36B 总参、4B 激活的 MoVA 架构，稀疏激活路线的新实验，值得架构研究者关注。

- **[nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro)** / **[Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini)** ｜ nex-agi ｜ 👍 170 / 211
  Apache-2.0 开源新作，基于 qwen3_5_moe 架构，刚发布即上榜。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[MiniMaxai/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** ｜ MiniMaxAI ｜ 👍 5,092 ｜ ⬇️ 4,994,268
  顶流视频生成模型，支持文/图生视频，500 万下载证明其生态位稳固。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** ｜ Lightricks ｜ 👍 3,279 ｜ ⬇️ 1,644,796
  图生视频的强力竞争者，diffusion 单文件格式便于生态集成，增长迅猛。

- **[openai-community/gpt2](https://huggingface.co/openai-community/gpt2)** ｜ openai-community ｜ 👍 3,858 ｜ ⬇️ 14,770,863
  永恒的经典基线，教育与研究场景的常青树。

- **[openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32)** ｜ openai ｜ 👍 1,346 ｜ ⬇️ 20,778,503
  零样本图像分类标配，工业界使用量依然惊人。

- **[WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)** ｜ WarmBloodAban ｜ 👍 235 ｜ ⬇️ 58,060
  MiniMax-H3 社区微调版，借势母模型热度上榜。

- **[OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3)** ｜ OpenVDN ｜ 👍 277 ｜ ⬇️ 0
  MiniMax-H3 微调衍生版，刚发布尚无下载，热度先行。

- **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** ｜ BreezeBlue ｜ 👍 522 ｜ ⬇️ 7,243
  社区 TTS 新作，语音生成赛道的开源补充。

- **[microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B)** ｜ microsoft ｜ 👍 179 ｜ ⬇️ 1,449
  微软流式语音识别模型，7B 参数主打高精度实时转写，刚上线值得关注。

### 🔧 专用模型（代码、数学、医疗、嵌入、时序、语音）

- **[sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)** ｜ sentence-transformers ｜ 👍 5,723 ｜ ⬇️ 253,331,994
  全站下载之王（2.53 亿），嵌入模型的工业标准，RAG 时代的基石。

- **[google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)** ｜ google-bert ｜ 👍 3,124 ｜ ⬇️ 48,848,285
  NLP 教科书级模型，研究与教学的永恒底座。

- **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** ｜ google ｜ 👍 694 ｜ ⬇️ 444,052
  时序预测基础模型大版本更新，企业需求驱动的 44 万下载。

- **[distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased)** ｜ distilbert ｜ 👍 1,286 ｜ ⬇️ 7,178,154
  蒸馏经典，轻量 NLP 部署的可靠选择。

- **[facebook/mms-300m](https://huggingface.co/facebook/mms)** ｜ facebook ｜ 👍 366 ｜ ⬇️ 12,171
  Meta 多语种语音预训练模型，低资源语言场景利器。

- **[dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8)** ｜ dealignai ｜ 👍 358 ｜ ⬇️ 19,433
  网络安全领域专用化 GLM-5.3 的 FP8 版本，垂类微调的代表样本。

### 📦 微调与量化（社区微调、GGUF、FP8/FP4）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** ｜ unsloth ｜ 👍 3,785 ｜ ⬇️ 10,675,683
  全榜下载第一（1,067 万），本地部署 Qwen3.8 的事实标准入口。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** ｜ ISTA-DASLab ｜ 👍 741 ｜ ⬇️ 479,597
  学术前沿量化研究（GSQ+RCO 混合精度），近 48 万下载显示学术量化方案也有强需求。

- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** ｜ HauhauCS ｜ 👍 1,062 ｜ ⬇️ 1,715,824
  去审查版 Qwen3.8，MTP + GGUF 组合，社区“无限制”需求的典型产物。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-...-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** ｜ DavidAU ｜ 👍 416 ｜ ⬇️ 348,753
  著名“炼丹师”DavidAU 的融合微调风格之作，编码+叙事+去审查多目标混合。

- **[nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4)** ｜ nvidia ｜ 👍 180 ｜ ⬇️ 26,302
  NVIDIA 官方 NVFP4 量化，为 Blackwell 硬件铺路，厂商下场做量化的信号。

- **[Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF)** ｜ Jackrong ｜ 👍 173 ｜ ⬇️ 113,295
  社区视觉版 GGUF，llama.cpp 生态的活跃样本。

---

## 🌡️ 生态信号

**Qwen3.8 一家独大**：榜单 30 席中约 8 席直接关联 Qwen3.8，从官方原版、Flash 版到 unsloth 量化、学术量化（ISTA-DASLab GSQ）、NVFP4 硬件优化版、各类 Uncensored 微调，形成了“发布→量化→微调”的完整价值链。**GLM-5.3 和 MiniMax-H3 构成第二梯队**，前者在 LLM 端、后者在视频生成端各有生态。**开源权重持续强势**：下载量前十几乎全是开放权重模型，Qwen、GLM、DeepSeek 等中国厂商构成开源主力。量化活动呈现多元化——GGUF（本地端）依旧统治下载量，而 FP8/NVFP4（数据中心）由 dealignai、nvidia 等推动，学术量化方案（GSQ-RCO）也开始获得实际流量。去审查微调需求旺盛，多个 Uncensored GGUF 下载破百万，反映社区对模型行为边界的持续博弈。语音赛道（VibeVoice、Breeze-TTS、MMS）值得留意，或成下一波热点。

---

## 💎 值得探索

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) + [unsloth GGUF 版](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
   当前开源生态的绝对中心，无论评测对比还是本地部署（GGUF 超 1,000 万下载已验证），都是绕不开的基准选择。

2. **[MiniMaxai/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) vs [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
   视频生成双雄本周正面交锋，且均已有社区微调衍生版出现（vdn-minimax-h3、Minimax-h3_Singularity），适合做同题对比测试，观察开源视频生成的最新水位。

3. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
   学术前沿量化研究（GSQ 混合精度）获得近 48 万真实下载，是研究“更低比特、更少精度损失”的极佳样本；配合 [nvidia 的 NVFP4 版](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4)，可一览量化的两条技术路线。

---
*数据来源：Hugging Face Hub 周榜（2026-09-10）｜本报告由 AI 生成，仅供参考。*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*