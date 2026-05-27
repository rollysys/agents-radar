# Hugging Face 热门模型日报 2026-05-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-27 04:04 UTC

---

# Hugging Face 热门模型日报 (2026-05-27)

## 今日速览

本期榜单见证了 **Qwen3.6** 系列的全面爆发，不仅官方多模态模型备受瞩目，社区微调版（如 Uncensored 及 GGUF 版本）更是霸榜下载量与点赞前列，显示出极强的生态统治力。**DeepSeek-V4-Pro** 以超 500 万下载量稳居基座模型王者地位，而 **字节跳动** 的 Lance 和 **SulphurAI** 的视频生成模型则引领了多模态生成的最新风潮。此外，端侧模型竞争加剧，Openbmb 与 Sapientinc 在 1B 级别模型上展开激烈角逐，翻译与语音合成领域亦有高质量新秀登场。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   - 作者: deepseek-ai | 👍 4,316 | ⬇️ 5,019,884
   - **说明**: DeepSeek V4 版本的专业级模型，凭借超高的下载量证明了其在开源基座模型中不可撼动的领先地位。

2. **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
   - 作者: sapientinc | 👍 380 | ⬇️ 103,033
   - **说明**: 1B 参数量的文本生成模型，下载量惊人，显示了端侧小模型在特定应用场景下的巨大需求。

3. **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
   - 作者: openbmb | 👍 319 | ⬇️ 2,409
   - **说明**: MiniCPM 系列迭代至第五代，主打极致效率的端侧文本生成，是小参数模型的有力竞争者。

4. **[nvidia/Nemotron-Labs-Diffusion-14B](https://huggingface.co/nvidia/Nemotron-Labs-Diffusion-14B)**
   - 作者: nvidia | 👍 116 | ⬇️ 5,453
   - **说明**: NVIDIA 发布的 14B 模型，标签为文本生成，可能融合了扩散技术或架构创新，引发社区关注。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

1. **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
   - 作者: bytedance-research | 👍 876 | ⬇️ 1,908
   - **说明**: 字节跳动推出的 Any-to-Any 多模态模型，支持图像与视频生成，是目前多模态统一生成的热门探索方向。

2. **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
   - 作者: SulphurAI | 👍 1,376 | ⬇️ 1,376,847
   - **说明**: 文本到视频生成模型，下载量破百万，表明视频生成工具已成熟并广泛应用于各类创作场景。

3. **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
   - 作者: Qwen | 👍 1,478 | ⬇️ 4,577,271
   - **说明**: Qwen3.6 系列官方多模态基座模型，兼顾图像理解与文本交互，是目前开源社区最核心的骨干模型之一。

4. **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
   - 作者: openbmb | 👍 978 | ⬇️ 314,347
   - **说明**: MiniCPM 的多模态版本，以轻量化著称，适合移动端部署的视觉语言模型。

5. **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
   - 作者: Supertone | 👍 700 | ⬇️ 48,112
   - **说明**: 高质量语音合成（TTS）模型，声音自然度高，是语音生成领域的热门选择。

6. **[CohereLabs/command-a-plus-05-2026-w4a4](https://huggingface.co/CohereLabs/command-a-plus-05-2026-w4a4)** & **[CohereLabs/command-a-plus-05-2026-bf16](https://huggingface.co/CohereLabs/command-a-plus-05-2026-bf16)**
   - 作者: CohereLabs | 👍 206 / 126 | ⬇️ 7,769 / 13,869
   - **说明**: Cohere 最新发布的视觉语言模型，提供量化版与 BF16 版本，兼顾效率与精度。

7. **[microsoft/Lens-Turbo](https://huggingface.co/microsoft/Lens-Turbo)** & **[microsoft/Lens](https://huggingface.co/microsoft/Lens)**
   - 作者: microsoft | 👍 109 / 104 | ⬇️ 908 / 673
   - **说明**: 微软推出的文生图模型，配合论文发布，可能包含新的扩散模型架构优化。

### 🔧 专用模型（代码、数学、医疗、嵌入、翻译）

1. **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** & **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)**
   - 作者: tencent | 👍 1,048 / 398 | ⬇️ 7,471 / 2,091
   - **说明**: 腾讯混元系列最新翻译模型，提供 1.8B 轻量版和 30B MoE 大容量版，垂直领域表现优异。

2. **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
   - 作者: numind | 👍 162 | ⬇️ 20,350
   - **说明**: 专注于文档结构化信息提取的视觉语言模型，是企业自动化流程中的实用工具。

### 📦 微调与量化（社区微调、GGUF、AWQ）

1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - 作者: HauhauCS | 👍 919 | ⬇️ 1,598,473
   - **说明**: 基于Qwen3.6的去审查激进微调版，下载量极高，反映了社区对无限制对话模型的强烈需求。

2. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
   - 作者: unsloth | 👍 504 | ⬇️ 735,349
   - **说明**: Unsloth 出品的高效 GGUF 量化版，针对消费级显卡优化，让 27B 大模型在本地流畅运行。

3. **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
   - 作者: unsloth | 👍 392 | ⬇️ 627,535
   - **说明**: 针对 MoE 架构优化的 GGUF 版本，平衡了参数量与推理速度。

4. **[Jackrong/Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF)**
   - 作者: Jackrong | 👍 145 | ⬇️ 16,379
   - **说明**: 社区个人开发者对 Qwen 模型的创新微调版本，体现了开源社区的活跃度。

---

## 生态信号

**Qwen3.6 家族势头正旺**，本期榜单中 Qwen3.6 相关模型占据了半壁江山，涵盖了从基座、多模态到社区微调的全链路，显示出其已成为继 Llama 之后最具影响力的开源模型体系。**开源权重依然是主流**，DeepSeek 和 Qwen 的强势表现证明高质量开源模型正在缩小与闭源模型的差距，尤其是在多模态和端侧部署领域。值得注意的是，**量化与微调活动高度活跃**，"Uncensored"（去审查）和 "GGUF"（本地化部署）成为流量关键词，表明用户对模型可控性和本地私有化部署的需求正在爆发。

## 值得探索

1. **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
   - **理由**: 作为字节跳动在多模态统一生成领域的探索，Any-to-Any 的能力极具前瞻性，适合关注视频生成和多模态交互的研究者尝试。

2. **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)**
   - **理由**: 在通用大模型之外，腾讯推出的专用翻译模型提供了极具性价比的垂直领域解决方案，适合对多语言转换有高精度需求的开发者。

3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - **理由**: 作为社区微调的代表作，该模型拥有极高的下载量，适合想要探索模型“去审查”效果以及本地部署高参数 MoE 模型的极客用户。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*