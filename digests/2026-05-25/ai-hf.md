# Hugging Face 热门模型日报 2026-05-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-25 04:05 UTC

---

# Hugging Face 热门模型日报 (2026-05-25)

## 1. 今日速览

本期榜单最引人注目的是 **DeepSeek-V4-Pro** 以超 400 万下载量和 4000+ 点赞的绝对优势霸榜，确立了其在开源大模型领域的领先地位。多模态与生成领域百花齐放，字节跳动的 **Lance** 和 **Sulphur-2-base** 分别在 Any-to-Any 生成和文本生成视频领域引发热潮。**Qwen3.6** 系列持续展现强大的生态统治力，不仅官方模型下载量巨大，社区基于其架构的微调、量化及“Uncensored”版本更是占据了榜单的半壁江山。此外，腾讯发布的 **Hy-MT2** 翻译模型系列和 Supertone 的语音合成模型也表现亮眼，显示出垂直领域模型的强劲需求。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,231 | ⬇️ 4,666,078
  - **说明：** 本周绝对的明星模型，作为 DeepSeek V4 系列的 Pro 版本，以千万级下载量展示了其强大的性能与社区影响力，是当前开源文本生成的标杆。

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,425 | ⬇️ 4,242,555
  - **说明：** 通义千问 3.6 版本 27B 参数模型，兼顾性能与效率，下载量惊人，是开源社区中小参数高性能模型的首选基座。

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  - 作者: sapientinc | 👍 272 | ⬇️ 84,346
  - **说明：** 仅 1B 参数的文本生成模型，主打轻量化与高效率，适合端侧部署，下载量显示出市场对小而美模型的持续需求。

- **[nvidia/Nemotron-Labs-Diffusion-14B](https://huggingface.co/nvidia/Nemotron-Labs-Diffusion-14B)**
  - 作者: nvidia | 👍 91 | ⬇️ 4,071
  - **说明：** NVIDIA 推出的 14B 扩散语言模型，结合了扩散模型与文本生成能力，展示了大模型架构创新的新方向。

### 🎨 多模态与生成（图像、视频、音频）

- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  - 作者: bytedance-research | 👍 770 | ⬇️ 1,474
  - **说明：** 字节跳动推出的 Any-to-Any 多模态生成模型，支持图像与视频生成，技术前沿，位列点赞榜首位，备受开发者关注。

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 1,326 | ⬇️ 1,331,058
  - **说明：** 文本生成视频模型，下载量突破百万，显示出 AI 视频生成领域的高热度，是近期生成类模型的黑马。

- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
  - 作者: openbmb | 👍 920 | ⬇️ 269,589
  - **说明：** MiniCPM-V 系列最新版，主打端侧多模态理解，在手机等移动设备上表现出色，深受边缘计算开发者喜爱。

- **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
  - 作者: circlestone-labs | 👍 1,532 | ⬇️ 637,329
  - **说明：** 标签为 ComfyUI 兼容的 Diffusion 模型，高点赞与高下载量表明其在图像生成工作流中极具实用价值。

- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
  - 作者: Supertone | 👍 647 | ⬇️ 43,119
  - **说明：** 高质量文本转语音（TTS）模型，下载量稳健，语音合成质量达到工业级标准。

### 🔧 专用模型（翻译、提取、3D）

- **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)**
  - 作者: tencent | 👍 634 | ⬇️ 4,534
  - **说明：** 腾讯混元翻译模型，专攻翻译任务，小参数带来极高推理速度，是垂直任务模型的典范。

- **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
  - 作者: numind | 👍 108 | ⬇️ 10,998
  - **说明：** 专注于结构化信息提取的视觉语言模型，在文档处理场景中具有很高的实用价值。

- **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)**
  - 作者: TencentARC | 👍 202 | ⬇️ 0
  - **说明：** 图像转 3D 模型，MIT 协议开源，为 3D 生成领域提供了新的工具，虽下载量未起但关注度较高。

### 📦 微调与量化（社区微调、GGUF）

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 👍 458 | ⬇️ 660,321
  - **说明：** Unsloth 出品的 Qwen3.6 量化版，支持 MTP（多标记预测），兼顾速度与效果，是本地部署的热门选择。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 781 | ⬇️ 1,220,114
  - **说明：** 社区激进的“去审查”微调版本，下载量极高，反映了社区对模型回答无限制、真实性的强烈需求。

- **[Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)**
  - 作者: Jackrong | 👍 181 | ⬇️ 38,937
  - **说明：** 基于 Qwen 优化的编程专用模型，兼顾代码能力与 GGUF 格式的易用性。

---

## 3. 生态信号

本周生态呈现出**“双雄并立，社区活跃”**的态势。**DeepSeek** 与 **Qwen** 构成了开源模型的“双子星”，DeepSeek 凭借 V4 Pro 的极致性能占据高端生态位，而 Qwen3.6 则通过丰富的参数规模（9B/27B/35B）和强大的多模态能力渗透到社区的每一个角落。

值得注意的是，社区微调呈现出两个明显趋势：一是**“去审查化”**（Uncensored/Obliterated）模型需求激增，HauhauCS 和 OBLITERATUS 的模型下载量证明了用户对模型输出自由度的重视；二是**量化技术的普及**，Unsloth 等团队几乎同步推出了高质量的 GGUF 版本，极大降低了本地部署门槛。

此外，**多模态生成**正在从“尝鲜”走向“实用”，视频生成模型 Sulphur-2-base 的百万下载量标志着视频生成已成为继图像生成后的下一个爆发点。

---

## 4. 值得探索

1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   - **理由：** 作为当前开源界的性能天花板，无论是用于基准测试还是构建高水平应用，都是必测的基座模型。

2. **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
   - **理由：** Any-to-Any 的多模态架构代表了未来的统一模型方向，对于研究多模态交互和跨模态生成的开发者极具参考价值。

3. **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
   - **理由：** 视频生成领域的现象级模型，高下载量意味着良好的社区反馈和兼容性，适合作为视频生成工作流的起点。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*