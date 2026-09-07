# Hugging Face 热门模型日报 2026-09-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-07 03:33 UTC

---

# 📰 Hugging Face 热门模型日报（2026-09-07）

---

## 一、今日速览

本周 Hugging Face 趋势榜被 **Qwen3.8 家族**全面占据——从官方原版到 unsloth 量化版、各类 Uncensored/Abliterated 社区微调，衍生模型超过 7 个，堪称本周期最强开源生态。**DeepSeek-V4-Flash-Vision-Exp** 和 **GLM-5.3 系列**紧随其后，中外大厂在前沿开源权重上的竞争白热化。视频生成赛道迎来 **MiniMax-H3** 与 **LTX-2.5** 双雄争霸，下载量均破百万。此外，社区量化生态活跃，GSQ、NVFP4 等新量化格式开始崭露头角。

---

## 二、热门模型

### 🧠 语言模型（LLM / 对话模型）

| 模型 | 作者 | 👍 / ⬇️ | 一句话解读 |
|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,141 / 6.19M | 本周期绝对王者，多模态对话旗舰，点赞与下载双榜前列，衍生生态最繁荣 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,100 / 761K | GLM 最新轻量多模态版本，低成本部署的理想选择 |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,740 / 410K | 采用 glm_moe_dsa MoE 架构的全量版 GLM-5.3，文本生成能力对标一线闭源模型 |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 750 / 209K | DeepSeek V4 视觉实验版首次曝光，"Exp"标签暗示快速迭代中，值得持续关注 |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 621 / 5.5K | 4B 小模型新人入场，点赞/下载比亮眼，社区好奇心驱动上榜 |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 445 / 6.4K | 腾讯混元第四代预览版，传统大厂持续押注开源 |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 187 / 1.7K | 36B 总参/4B 激活的 MoVA 架构，稀疏激活路线的新尝试 |

### 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 👍 / ⬇️ | 一句话解读 |
|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,969 / 4.99M | 本周期最强视频生成模型，文生视频+图生视频全能，下载近 500 万 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,981 / 1.53M | 轻量级视频生成标杆，支持单文件 diffusion 部署，消费级显卡友好 |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 210 / 0 | MiniMax-H3 的社区微调版，刚发布已凭母模型热度上榜 |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 462 / 6.4K | 社区新锐 TTS 模型，小众但口碑上升 |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 121 / 889 | 微软流式语音识别新模型，实时转写场景刚需 |

### 🔧 专用模型（时序 / 嵌入 / 语音 / 视觉基础）

| 模型 | 作者 | 👍 / ⬇️ | 一句话解读 |
|---|---|---|---|
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 513 / 144K | 谷歌时序预测基础模型第三代，企业预测场景的少数开源选择 |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,569 / **253M** | 全站下载量之王，嵌入模型事实标准，RAG 生态基石 |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 263 / 12.5K | Meta 多语言语音预训练模型，覆盖千余语言 |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,211 / 20.6M | 零样本图像分类常青树，下载量持续坚挺 |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,989 / 52.3M | BERT 经典之作，教学与轻量 NLP 场景不可替代 |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,707 / 14.6M | 老将不死，研究基线与教学场景的永恒默认项 |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,156 / 7.05M | 蒸馏经典，CPU 友好的工业级文本理解方案 |

### 📦 微调与量化（社区微调 / GGUF / Abliterated）

| 模型 | 作者 | 👍 / ⬇️ | 一句话解读 |
|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,603 / **10.3M** | 官方量化的黄金标准，本周下载量最高的衍生模型 |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 814 / 824K | Flash-Next 轻量版的 GGUF 部署方案，本地玩家首选 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 469 / 348K | 学术机构带来的 GSQ+RCO 混合精度量化，前沿压缩研究落地 |
| [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 118 / 13.3K | 英伟达官方 NVFP4 量化版，面向 Blackwell 硬件优化 |
| [HauhauCS/Qwen3.8-27B-Uncensored-...-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 983 / 1.57M | 去审查+MTP 加持的社区激进微调，下载量惊人 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,108 / 995K | Abliteration 技术代表作，MLX/GGUF 双格式发布 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 754 / 288K | 又一去审查版本，印证 Qwen 生态微调需求的爆发 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 251 / 211K | 命名狂魔 DavidAU 的“融合怪”微调，创意写作+代码向 |
| [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 131 / 22.1K | 疑似 Qwen+Llama 融合实验，社区探索精神体现 |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 173 / 15.6K | 网络安全垂直领域 FP8 微调，去除拒绝机制的渗透测试向模型 |

---

## 三、生态信号

**Qwen3.8 已形成“超级家族生态”**：30 个上榜模型中约 1/3 与之相关，官方原版、unsloth 量化、去审查微调、NVFP4 硬件适配一应俱全——这种“一超多强”的衍生格局此前只在 Llama 家族身上出现过，标志 Qwen 已接棒成为全球开源社区的事实基座。

**量化格式多元化**：除传统 GGUF 外，GSQ-RCO（ISTA-DASLab 学术系）、NVFP4（英伟达官方）、FP8 等新格式同步上榜，低比特量化正从社区黑客行为走向官方标准化。

**开源权重持续强势**：DeepSeek、GLM、MiniMax、腾讯混元等中国厂商高频发布前沿权重，多模态（image-text-to-text 成为主流任务标签）与视频生成成为新战场；经典模型（BERT、GPT-2、MiniLM）凭借庞大存量下载量依然坚挺，形成“前沿迭代+经典长尾”的双层结构。

---

## 四、值得探索

1. **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** — V4 系列首个公开权重，实验性标签意味着快速迭代。趁早测试可抢占应用先机，也适合追踪 DeepSeek 的架构演进（deepseek_v4）。

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 点赞/下载双高的视频生成旗舰，支持文/图/视频多输入。若做视频内容生产管线，这是当前开源阵营的最强选项之一。

3. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — GSQ+RCO 混合精度量化代表下一代压缩方向，对边缘部署研究者和 llama.cpp 深度玩家极具实验价值，可与 unsloth 版本做同台对比。

---

*数据来源：Hugging Face Hub 周榜（2026-09-07）*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*