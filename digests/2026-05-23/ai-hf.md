# Hugging Face 热门模型日报 2026-05-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-23 03:32 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-05-23

---

### 📰 今日速览

今日 Hugging Face 迎来了生成式 AI 的“超级星期三”，**DeepSeek-V4** 系列与 **Google Gemma-4** 正面交锋，占据了下载与点赞榜首，显示出开源权重模型在性能上的激烈竞争。多模态领域百花齐放，字节跳动的 **Lance** 和 **Sulphur-2** 在视频生成赛道表现抢眼，下载量激增。社区对 **Qwen3.6** 系列的 MoE 架构（A3B）热情高涨，相关的 GGUF 量化版本迅速填补了端侧推理的空白。总体来看，开源生态正快速向高质量视频生成和高效 MoE 架构迁移。

---

### 🔥 热门模型

#### 🧠 语言模型（LLM、对话模型）

1.  **deepseek-ai/DeepSeek-V4-Pro**
    -   **作者：** deepseek-ai | 👍 4,156 | ⬇️ 4,287,396
    -   **说明：** DeepSeek V4 系列的旗舰版本，拥有极高的下载量，代表了当前开源 LLM 的 SOTA 水平。
    -   **链接：** https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro

2.  **google/gemma-4-31B-it**
    -   **作者：** google | 👍 2,732 | ⬇️ 10,283,716
    -   **说明：** Google 最新发布的 Gemma-4 指令微调版，下载量破千万，兼顾性能与效率，社区反响热烈。
    -   **链接：** https://huggingface.co/google/gemma-4-31B-it

3.  **Qwen/Qwen3.6-35B-A3B**
    -   **作者：** Qwen | 👍 1,868 | ⬇️ 5,978,432
    -   **说明：** Qwen3.6 系列的 MoE 架构模型，以 35B 参数量实现高性能，是当前最受欢迎的高效架构之一。
    -   **链接：** https://huggingface.co/Qwen/Qwen3.6-35B-A3B

4.  **Qwen/Qwen3.6-27B**
    -   **作者：** Qwen | 👍 1,390 | ⬇️ 4,049,995
    -   **说明：** Qwen3.6 系列的稠密模型标杆，平衡了推理成本与能力，广受开发者青睐。
    -   **链接：** https://huggingface.co/Qwen/Qwen3.6-27B

5.  **deepseek-ai/DeepSeek-V4-Flash**
    -   **作者：** deepseek-ai | 👍 1,191 | ⬇️ 2,556,531
    -   **说明：** 专注于极速推理的 V4 轻量版，适合对延迟敏感的应用场景。
    -   **链接：** https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash

#### 🎨 多模态与生成（图像、视频、音频）

1.  **SulphurAI/Sulphur-2-base**
    -   **作者：** SulphurAI | 👍 1,271 | ⬇️ 1,249,582
    -   **说明：** 文生视频领域的新星，下载量超百万，可能作为新一代视频生成基座模型。
    -   **链接：** https://huggingface.co/SulphurAI/Sulphur-2-base

2.  **bytedance-research/Lance**
    -   **作者：** bytedance-research | 👍 651 | ⬇️ 1,001
    -   **说明：** 字节跳动推出的 Any-to-Any 多模态模型，支持图像与视频生成，热度飙升最快。
    -   **链接：** https://huggingface.co/bytedance-research/Lance

3.  **circlestone-labs/Anima**
    -   **作者：** circlestone-labs | 👍 1,499 | ⬇️ 602,483
    -   **说明：** 基于 Diffusion 的模型，兼容 ComfyUI，社区活跃度极高。
    -   **链接：** https://huggingface.co/circlestone-labs/Anima

4.  **Supertone/supertonic-3**
    -   **作者：** Supertone | 👍 582 | ⬇️ 37,545
    -   **说明：** 高质量 TTS 模型，支持语音合成，在音频领域表现突出。
    -   **链接：** https://huggingface.co/Supertone/supertonic-3

5.  **openbmb/MiniCPM-V-4.6**
    -   **作者：** openbmb | 👍 905 | ⬇️ 221,612
    -   **说明：** 高效端侧多模态模型，迭代至 4.6 版本，下载量稳定，适合移动端部署。
    -   **链接：** https://huggingface.co/openbmb/MiniCPM-V-4.6

#### 🔧 专用模型（代码、翻译、医疗、工具）

1.  **tencent/Hy-MT2-1.8B**
    -   **作者：** tencent | 👍 281 | ⬇️ 564
    -   **说明：** 腾讯推出的翻译专用模型，轻量级设计，专注于高质量文本翻译。
    -   **链接：** https://huggingface.co/tencent/Hy-MT2-1.8B

2.  **numind/NuExtract3**
    -   **作者：** numind | 👍 77 | ⬇️ 7,576
    -   **说明：** 专注于从文档/图像中提取结构化信息，企业级应用潜力大。
    -   **链接：** https://huggingface.co/numind/NuExtract3

3.  **Cactus-Compute/needle**
    -   **作者：** Cactus-Compute | 👍 121 | ⬇️ 328
    -   **说明：** 支持函数调用和工具使用的 Encoder-Decoder 模型，专为 Agent 设计。
    -   **链接：** https://huggingface.co/Cactus-Compute/needle

#### 📦 微调与量化（社区微调、GGUF）

1.  **unsloth/Qwen3.6-27B-MTP-GGUF**
    -   **作者：** unsloth | 👍 416 | ⬇️ 532,255
    -   **说明：** Unsloth 出品的 Qwen3.6 量化版，优化了推理速度，社区下载量极高。
    -   **链接：** https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF

2.  **unsloth/Qwen3.6-35B-A3B-MTP-GGUF**
    -   **作者：** unsloth | 👍 335 | ⬇️ 466,060
    -   **说明：** 针对 Qwen MoE 架构的量化版本，让消费级显卡运行大模型成为可能。
    -   **链接：** https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF

3.  **Jackrong/Qwopus3.5-9B-Coder-GGUF**
    -   **作者：** Jackrong | 👍 164 | ⬇️ 28,599
    -   **说明：** 社区融合微调版，专注于代码能力，GGUF 格式方便本地部署。
    -   **链接：** https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF

---

### 📈 生态信号

当前模型生态呈现出**“双雄争霸，MoE 普及”**的态势。**DeepSeek** 与 **Qwen** 两大家族几乎占据了 LLM 半壁江山，DeepSeek-V4 以绝对优势领跑榜单，而 Qwen3.6 则通过多样化的参数规格和 MoE 架构（A3B）稳固了其在端侧和开发者社区的份额。

开源权重模型依旧是主力，Google Gemma-4 的千万级下载量证明了巨头开源策略的成功。值得注意的是，**视频生成模型** 正在经历从“玩具”到“工具”的转变，Sulphur-2 和 Lance 的高下载/点赞比显示出市场对高质量视频生成基座的迫切需求。此外，社区对 **GGUF 量化** 的依赖度依然极高，Unsloth 等团队几乎实现了与基座模型发布的“零时差”跟进。

---

### 💡 值得探索

1.  **bytedance-research/Lance**
    -   **理由：** 作为字节跳动最新的 Any-to-Any 模型，它不仅支持视频生成，还打通了多模态交互的边界，点赞数飙升，是探索下一代多模态交互的绝佳样本。

2.  **SulphurAI/Sulphur-2-base**
    -   **理由：** 下载量突破百万且排名前列，说明该文生视频模型极可能具有极高的实用价值或作为 LoRA 微调的优质底座，值得视频创作者关注。

3.  **deepseek-ai/DeepSeek-V4-Pro**
    -   **理由：** 作为当日点赞数最高的模型，它是目前开源届的“当红炸子鸡”，不论是学术研究还是应用开发，了解其架构与能力对把握 LLM 前沿动态至关重要。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*