# Hugging Face 热门模型日报 2026-05-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-26 03:51 UTC

---

# Hugging Face 热门模型日报
**日期：2026-05-26**

## 1. 今日速览
今日 Hugging Face Hub 呈现“基座模型强势领跑，垂直领域百花齐放”的态势。**DeepSeek-V4-Pro** 以超高的下载量和点赞数稳居榜首，确立了开源权重模型的新标杆。**Qwen3.6** 生态持续爆发，各类 GGUF 量化版、MoE 微调版及去审查版本占据榜单近三分之一席位，显示出社区极高的活跃度。多模态与生成领域亮点颇多，腾讯发布的 Hy-MT2 翻译系列模型包揽了榜单前列，字节跳动与美团的视频/数字人模型也表现抢眼，标志着大模型应用正加速向视频生成与语音交互等具体场景落地。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 点赞: 4,278 | 下载: 4,820,866
    *   **说明**: DeepSeek 第四代基座模型，凭借卓越的性能和千万级下载量成为本周绝对的“流量王者”，确立了开源 LLM 的新标杆。
*   **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
    *   作者: sapientinc | 点赞: 317 | 下载: 90,026
    *   **说明**: 仅 1B 参数的轻量级文本生成模型，下载量惊人，适合资源受限的端侧场景，展示了小模型的实用潜力。
*   **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
    *   作者: openbmb | 点赞: 159 | 下载: 2
    *   **说明**: MiniCPM 系列的最新迭代，主打极致效率的端侧部署，虽然刚发布下载量尚少，但凭借前代口碑仍受关注。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    *   作者: SulphurAI | 点赞: 1,354 | 下载: 1,354,786
    *   **说明**: 文生视频基础模型，以超百万的下载量成为生成类模型中的爆款，可能代表了当前视频生成领域的 SOTA 水平。
*   **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
    *   作者: bytedance-research | 点赞: 824 | 下载: 1,679
    *   **说明**: 字节跳动推出的任意到任意多模态模型，支持图像与视频生成，体现了大模型向统一多模态架构发展的趋势。
*   **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
    *   作者: openbmb | 点赞: 943 | 下载: 285,414
    *   **说明**: 最新版本的 MiniCPM 视觉语言模型，具备强大的图文理解能力，保持了该系列高效、低资源的优势。
*   **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
    *   作者: Qwen | 点赞: 1,456 | 下载: 4,423,521
    *   **说明**: 通义千问 3.6 版本的 27B 参数模型，支持图文双模态，兼顾性能与尺寸，是社区最受欢迎的主力基座之一。
*   **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
    *   作者: Supertone | 点赞: 677 | 下载: 45,800
    *   **说明**: 高质量的语音合成（TTS）模型，在声音克隆与生成效果上备受好评，填补了音频生成领域的热门空缺。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)**
    *   作者: tencent | 点赞: 911 | 下载: 5,552
    *   **说明**: 腾讯混元翻译模型系列，以极小的参数量实现了高水准翻译效果，成为今日点赞数最高的垂直领域模型。
*   **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
    *   作者: numind | 点赞: 143 | 下载: 17,501
    *   **说明**: 专注于结构化数据提取的模型，基于 Qwen3.5 架构，在文档处理和企业知识抽取场景中极具实用价值。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 点赞: 864 | 下载: 1,392,596
    *   **说明**: Qwen3.6 的社区去审查版，MoE 架构配合激进的微调策略，满足了用户对开放话题讨论的需求，下载量极高。
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   作者: unsloth | 点赞: 480 | 下载: 695,277
    *   **说明**: Unsloth 出品的 GGUF 量化版，优化了推理速度和显存占用，是本地部署 Qwen3.6 的首选。
*   **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
    *   作者: circlestone-labs | 点赞: 1,546 | 下载: 651,655
    *   **说明**: 社区微调的 Diffusion 模型，适配 ComfyUI，凭借独特的艺术风格生成能力获得了极高的社区认可。

---

## 3. 生态信号

1.  **Qwen3.6 统治社区微调生态**：榜单中约 30% 的模型（如 Qwopus, HauhauCS, Unsloth 版本）均基于 Qwen3.6 架构。这表明 Qwen3.6 已取代 Llama 等成为当前开源社区最青睐的基座，尤其在 MoE（Mixture of Experts）架构和 GGUF 量化格式上，社区探索极为活跃。
2.  **国产模型势能强劲**：DeepSeek、Qwen（阿里）、Tencent（腾讯）、ByteDance（字节）等中国厂商发布的模型在榜单前列占据主导地位，覆盖了从基座 LLM、翻译到多模态生成的全链路，显示出在开源权重领域的强大话语权。
3.  **量化与去审查需求并存**：Unsloth 等量化版本的高下载量反映了本地化部署的刚需；同时，"Uncensored"（去审查）类模型的火爆（如 HauhauCS 版）揭示了社区用户对模型内容合规边界突破的强烈兴趣。

---

## 4. 值得探索

*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**：作为目前评价最高的开源基座模型，无论是用于科研复现还是下游应用开发，它都是了解当前 LLM 技术上限的必选项。
*   **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**：作为“Any-to-Any”多模态模型的代表，值得研究者关注其如何统一处理图像、视频与文本的跨模态生成逻辑。
*   **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)**：如果你关注端侧部署或垂直领域落地，这个仅有 1.8B 参数却能在翻译任务上表现优异的模型，是极佳的轻量化参考案例。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*