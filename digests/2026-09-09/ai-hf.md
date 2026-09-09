# Hugging Face 热门模型日报 2026-09-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-09 03:43 UTC

---

# 📊 Hugging Face 热门模型日报
**日期：2026-09-09**

---

## 一、今日速览

今日榜单被 **Qwen3.8-27B** 强势主导——官方模型以 14,400 周点赞、671 万下载领跑全站，其衍生量化版、无审查版、社区融合版占据了近三分之一席位。视频生成领域 **MiniMax-H3** 与 **LTX-2.5** 双雄并立，下载量均破百万。Qwen3.8-Flash-Next 作为实验性前瞻版本获 5,010 点赞，显示社区对下一代架构的强烈兴趣。语音赛道出现新面孔：微软 VibeVoice 流式 ASR 与社区 Breeze-TTS-2。经典模型（MiniLM、BERT、GPT-2）依旧保持海量下载，印证生态基础设施地位。

---

## 二、热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,400 | 6,712,160 | 今日绝对王者，多模态旗舰 LLM，官方发布即引爆生态 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,010 | 503,263 | 前瞻实验版（qwen4_exp 架构），社区抢先尝鲜下一代技术 |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,768 | 474,141 | 智谱新一代 MoE 大模型（glm_moe_dsa 架构），国内开源主力 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,173 | 826,875 | GLM-5.3 轻量多模态版本，下载量已超旗舰版 |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 820 | 313,547 | DeepSeek V4 视觉实验版，延续其开源策略的技术预览 |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 861 | 10,661 | 新架构（spark2_5）4B 小模型，点赞/下载比异常，或为社区爆款新秀 |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 711 | 2,879 | 面壁智能第五代端侧小模型，2B 参数主打本地部署 |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 236 | 3,205 | 36B 总参/A4B 激活的新一代 MoVA 混合专家模型 |

### 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,051 | 4,994,268 | 国产视频生成旗舰，支持文/图/像到视频，近 500 万下载 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,187 | 1,644,796 | 轻量级图生视频模型，创作工具链友好，下载量破 160 万 |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 250 | 0 | 基于 MiniMax-H3 的社区微调文生视频版，刚上线下载未启动 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 175 | 58,060 | MiniMax-H3 社区风格化微调，"Singularity" 命名暗示能力融合 |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 488 | 7,243 | 社区语音合成新秀，以接近头部榜单的点赞显示口碑 |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 157 | 1,449 | 微软 7B 流式语音识别，大模型路线的实时转写方案 |

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入 / 时序）

| 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|---|---|---|---|
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,631 | 253,331,994 | 全站下载之王（2.5 亿+），嵌入领域事实标准 |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,042 | 50,396,517 | NLP 教科书级基线，5,000 万下载长盛不衰 |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,258 | 20,702,763 | 零样本图像分类与图文检索的经典底座 |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 642 | 444,052 | 谷歌时序预测基础模型 3.0，44 万下载显示企业时序需求旺盛 |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,199 | 7,138,152 | 轻量蒸馏模型，生产环境常青树 |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,758 | 14,748,356 | 研究与教学必备，下载持续破千万 |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 302 | 12,388 | Meta 多语言语音大规模预训练模型 |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 316 | 19,433 | GLM-5.3 网络安全领域微调 + 去审查处理，垂直场景产品 |

### 📦 微调与量化（社区微调 / GGUF / 量化）

| 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,709 | 10,675,683 | 官方之外下载最高的 Qwen 衍生版（1,067 万），本地部署首选 |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 840 | 935,568 | Flash-Next 的 GGUF 版，紧跟官方节奏发布 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GSQ-GGUF) | ISTA-DASLab | 664 | 479,597 | 学术量化实验室出品，GSQ+RCO 混合精度新量化方案 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,025 | 1,715,824 | 激进无审查 + MTP 版，171 万下载反映本地自由使用需求 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 363 | 348,753 | DavidAU 一贯的"融合怪"风格，多模型冷融合 + 编码强化 |
| [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 156 | 26,302 | NVIDIA 官方 NVFP4 量化，主打 Blackwell 硬件极致压缩 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 821 | 299,670 | Abliteration 去审查社区版 |
| [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 148 | 113,295 | Qwen3.8-27B + Flash-Next 的社区跨版本融合尝试 |

---

## 三、生态信号

**Qwen3.8 家族呈碾压之势**：30 个席位中占 9 席（官方 2 + 衍生 7），生态复用度远超 GLM-5.3（3 席）和 MiniMax-H3（3 席），说明 Qwen 已成为社区微调、量化、无审查化的默认底座。**开源权重持续统治榜单**，且中国厂商（Qwen、智谱、DeepSeek、MiniMax、面壁）贡献了全部头部新模型；闭源厂商（OpenAI、Google、Meta）仅以经典旧模型维持存在感。**量化活动活跃且多元化**：unsloth 的 GGUF 版下载破千万，ISTA-DASLab 的 GSQ/RCO 与 NVIDIA 的 NVFP4 代表学术和硬件两条量化路线并行演进。**"Uncensored/Abliterated"微调成稳定需求**，多个去审查版本下载破十万。视频生成（MiniMax-H3、LTX-2.5）已进入百万级下载的成熟期。

---

## 四、值得探索

1. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — 标签暴露了 `qwen4_exp` 新架构，是窥探下一代 Qwen 技术方向的窗口，适合提前做适配和评测。

2. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — GSQ+RCO 混合精度量化是当前 GGUF 生态中的前沿方案，47 万下载验证了实用性，量化研究者必看。

3. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 支持文/图/像多入口视频生成，已有两个社区微调版本出现，是当前开源视频生成生态中最活跃的底座。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*