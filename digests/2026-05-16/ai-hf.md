# Hugging Face 热门模型日报 2026-05-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-16 03:27 UTC

---

# Hugging Face 热门模型日报 (2026-05-16)

## 1. 今日速览

本期榜单最引人注目的是 **DeepSeek-V4** 系列与 **Qwen3.6** 系列的强势霸榜，两者在语言模型与多模态领域均展现出统治级的下载量与关注度。**Google Gemma-4** 凭借近千万的周下载量，证明了其在轻量级开源模型中的中坚地位。生成式 AI 正向视频与音频深度拓展，**Sulphur-2** 和 **LTX2.3** 相关模型在视频生成领域热度飙升。此外，端侧多模态模型（如 MiniCPM-V）和隐私保护工具（OpenAI Privacy Filter）的上榜，反映了开发者对本地化与安全性的双重需求。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 点赞: 3,975 | 下载: 2,766,621
    *   **说明**: DeepSeek-V4 系列的旗舰版本，以超高下载量稳居本周 LLM 霸主地位，性能强劲。
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    *   作者: google | 点赞: 2,652 | 下载: 9,827,416
    *   **说明**: Google 最新开源力作，下载量惊人，兼顾了高性能与易用性，适合多种对话场景。
*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    *   作者: Qwen | 点赞: 1,781 | 下载: 4,938,568
    *   **说明**: 通义千问最新 MoE 架构模型，在保持高性能的同时大幅降低了推理成本，社区热度极高。
*   **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
    *   作者: Qwen | 点赞: 1,297 | 下载: 3,099,139
    *   **说明**: 稠密架构的旗舰模型，综合能力均衡，适合作为通用基座模型。
*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    *   作者: deepseek-ai | 点赞: 1,097 | 下载: 1,624,247
    *   **说明**: 轻量级版本，主打高效推理，是构建高并发应用的首选。
*   **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**
    *   作者: Zyphra | 点赞: 504 | 下载: 141,203
    *   **说明**: 新兴小参数模型，主打推理能力，背后有相关论文支持，潜力值得关注。
*   **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)**
    *   作者: google | 点赞: 239 | 下载: 125,005
    *   **说明**: 专为 Assistant 场景优化的版本，增强了工具调用与指令遵循能力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    *   作者: SulphurAI | 点赞: 989 | 下载: 783,564
    *   **说明**: 本周视频生成领域的黑马，点赞数极高，Text-to-Video 效果备受社区期待。
*   **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
    *   作者: circlestone-labs | 点赞: 1,329 | 下载: 465,511
    *   **说明**: 结合 ComfyUI 使用的 Diffusion 模型，在图像生成工作流中极受欢迎。
*   **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
    *   作者: openbmb | 点赞: 603 | 下载: 22,483
    *   **说明**: 强大的端侧多模态模型，主打移动端部署，兼顾视觉理解与文本生成。
*   **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**
    *   作者: SeeSee21 | 点赞: 381 | 下载: 13,998
    *   **说明**: 专注于动漫风格的图像生成模型，在二次元爱好者中反响热烈。
*   **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)**
    *   作者: HiDream-ai | 点赞: 344 | 下载: 11,725
    *   **说明**: 图文混合生成模型，基于 Qwen3 VL 架构，探索图像编辑与生成的新边界。
*   **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**
    *   作者: k2-fsa | 点赞: 890 | 下载: 2,189,655
    *   **说明**: 强大的多语言语音克隆与合成模型，下载量破百万，语音领域的新标杆。
*   **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
    *   作者: Supertone | 点赞: 242 | 下载: 12,832
    *   **说明**: 业界领先的 TTS 模型，声音合成自然度高，适合专业音频制作。
*   **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)**
    *   作者: TenStrip | 点赞: 265 | 下载: 100,636
    *   **说明**: LTX 视频生成系列的微调版本，在图像转视频任务上表现优异。
*   **[microsoft/Fara-7B](https://huggingface.co/microsoft/Fara-7B)**
    *   作者: microsoft | 点赞: 552 | 下载: 18,420
    *   **说明**: 微软开源的小参数多模态模型，基于 Qwen2.5 VL，适合轻量化视觉任务。

### 🔧 专用模型（代码、数学、医疗、嵌入、工具）

*   **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
    *   作者: openai | 点赞: 1,448 | 下载: 229,377
    *   **说明**: OpenAI 开源的隐私过滤工具，用于识别文本中的敏感信息，实用性与话题性兼备。
*   **[jackxinning/Leanly_AI](https://huggingface.co/jackxinning/Leanly_AI)**
    *   作者: jackxinning | 点赞: 113 | 下载: 10,822
    *   **说明**: 面向医疗领域的问答模型，针对中英文场景优化，体现了垂直领域的需求。
*   **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)**
    *   作者: TencentARC | 点赞: 84 | 下载: 0
    *   **说明**: 腾讯开源的图像转 3D 模型，虽然下载刚起步，但在 3D 生成领域备受关注。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
    *   作者: unsloth | 点赞: 1,041 | 下载: 3,075,105
    *   **说明**: Unsloth 出品的高质量 GGUF 量化版，让消费级显卡也能跑 MoE 大模型。
*   **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)**
    *   作者: Jiunsong | 点赞: 599 | 下载: 279,744
    *   **说明**: 去除审查限制的 Gemma4 微调版，迎合了社区对无限制模型的需求。
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   作者: unsloth | 点赞: 172 | 下载: 105,097
    *   **说明**: 针对 Qwen3.6 稠密版本的量化适配，优化了移动端或低显存环境的表现。
*   **[antirez/deepseek-v4-gguf](https://huggingface.co/antirez/deepseek-v4-gguf)**
    *   作者: antirez | 点赞: 111 | 下载: 230,548
    *   **说明**: 知名开发者 antirez 提供的 DeepSeek-V4 GGUF 版本，社区信赖度高。
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
    *   作者: froggeric | 点赞: 216 | 下载: 0
    *   **说明**: 修复了 Qwen 模型聊天模板的工具类资源，虽下载为 0 但点赞数高，说明解决了开发者的痛点。

---

## 3. 生态信号

**模型家族势头分析**：**Qwen (通义千问)** 和 **DeepSeek** 无疑是目前开源生态的双雄。Qwen3.6 系列通过 MoE 和稠密双架构策略，覆盖了从云端到端侧的广泛需求，下载量破千万；DeepSeek-V4 则延续了高性价比路线，Pro 和 Flash 版本均获大量部署。Google Gemma-4 也展现出极强的竞争力，尤其在模型体积与性能的平衡上。

**开源与量化趋势**：开源权重模型正以前所未有的速度被量化普及。榜单中大量出现 Unsloth 等团队的 GGUF 版本，说明消费级硬件（本地运行）仍是巨大的应用场景。此外，"Uncensored"（无审查）微调版本的持续上榜，反映了开源社区对模型可控性与自由度的强烈偏好。

**多模态爆发**：视频生成正成为继图像生成后的新热点。Sulphur-2 和 LTX2.3 系列的上榜，预示着 Text-to-Video 和 Image-to-Video 的技术成熟度正在加速，且社区对高质量视频生成工具的需求迫切。

---

## 4. 值得探索

1.  **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**：
    作为本期点赞数极高但相对陌生的视频生成模型，它代表了开源视频生成的最新尝试。对于关注 AIGC 视频制作的工作流开发者，该模型值得第一时间测试其生成质量与连贯性。

2.  **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**：
    OpenAI 鲜见地开源了实用型工具模型。对于构建 RAG 或处理用户数据的开发者，隐私过滤是合规的关键环节。该模型的开源为本地化、低延迟的隐私脱敏提供了可能，具有极高的工程价值。

3.  **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**：
    对于希望在手机或移动设备上部署多模态 AI 应用的开发者，MiniCPM-V 系列一直是端侧标杆。4.6 版本在图像理解与文本生成上的进一步优化，使其成为边缘计算 AI 应用的首选试验对象。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*