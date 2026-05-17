# Hugging Face 热门模型日报 2026-05-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-17 03:42 UTC

---

# Hugging Face 热门模型日报
**日期：2026-05-17**

---

### 1. 今日速览

今日 Hugging Face 榜单呈现出“三足鼎立”的态势：**DeepSeek-V4** 系列以极高的社区热度（点赞数领跑）强势霸榜，**Google Gemma-4** 凭借近千万下载量展现统治级的应用渗透力，而 **Qwen3.6** 家族则通过 MoE 架构和密集版本的双管齐下，成为开源权重模型中的技术焦点。多模态领域，端侧模型 MiniCPM-V-4.6 和视频生成模型 Sulphur-2 的崛起，标志着“端侧多模态”与“高保真视频生成”正成为新的增长极。此外，GGUF 量化格式依然是连接大模型与消费级硬件的绝对主流桥梁。

---

### 2. 热门模型

#### 🧠 语言模型（LLM、对话模型）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 3,997 | 📥 2,967,518
  - **说明**: DeepSeek V4 系列的旗舰版本，以近 4000 点赞数成为今日社区最热门模型，代表了国产大模型在文本生成与对话能力上的顶尖水平。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,113 | 📥 1,724,666
  - **说明**: DeepSeek V4 的轻量高效版本，兼顾速度与性能，下载量惊人，适合大规模部署场景。

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 👍 2,660 | 📥 9,851,216
  - **说明**: 今日下载量最高的模型，Google 开源生态的基石，31B 参数量在性能与推理成本之间取得了极佳平衡，广泛应用于各类生产环境。

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - 作者: Qwen | 👍 1,786 | 📥 5,255,567
  - **说明**: Qwen3.6 系列的 MoE（混合专家）架构模型，凭借激活参数少、性能强的特点，成为高效推理的首选。

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,306 | 📥 3,261,736
  - **说明**: 通义千问系列的最新稠密模型，性能稳健，是目前开源稠密模型中的标杆产品。

- **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**
  - 作者: Zyphra | 👍 514 | 📥 143,806
  - **说明**: 强调推理能力的小参数模型，基于特定的 reasoning-base 微调，显示出社区对小体积高性能模型的持续需求。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 1,034 | 📥 875,370
  - **说明**: 今日榜单中的视频生成黑马，下载量近百万，标志着高质量文生视频模型正在快速普及。

- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
  - 作者: openbmb | 👍 650 | 📥 28,627
  - **说明**: 专注于端侧部署的多模态模型，MiniCPM 系列在移动设备上的高效表现使其备受关注，点赞数高居榜首前列。

- **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)**
  - 作者: HiDream-ai | 👍 363 | 📥 13,587
  - **说明**: 基于 Qwen3_vL 的图文生图模型，结合了强大的视觉理解与生成能力，适合复杂的图像编辑与创作任务。

- **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**
  - 作者: k2-fsa | 👍 891 | 📥 2,087,606
  - **说明**: 零样本多语言语音克隆模型，下载量突破 200 万，是目前语音合成领域的热门选择。

- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**
  - 作者: SeeSee21 | 👍 386 | 📥 14,494
  - **说明**: 专注于动漫风格的文生图模型，反映了 ACG 创作工具在开源社区的旺盛生命力。

- **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)**
  - 作者: TencentARC | 👍 104 | 📥 0
  - **说明**: 腾讯 ARC 实验室推出的图生 3D 模型，虽下载量暂低，但在 3D 生成这一前沿领域具有很高关注度。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
  - 作者: unsloth | 👍 1,045 | 📥 2,965,505
  - **说明**: Unsloth 优化的 Qwen MoE 量化版，下载量近 300 万，证明了 GGUF 格式在本地部署中的统治地位。

- **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)**
  - 作者: Jiunsong | 👍 608 | 📥 273,759
  - **说明**: 基于 Gemma-4 的去审查化微调版本，满足了特定用户群体对无限制内容生成的需求。

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 👍 204 | 📥 133,815
  - **说明**: 针对 Qwen3.6 稠密模型的量化版本，由知名优化团队 Unsloth 提供，兼顾了精度与本地运行效率。

- **[antirez/deepseek-v4-gguf](https://huggingface.co/antirez/deepseek-v4-gguf)**
  - 作者: antirez | 👍 127 | 📥 264,757
  - **说明**: 社区开发者推出的 DeepSeek-V4 量化版，让顶级大模型能在个人电脑上流畅运行。

#### 🔧 专用模型（代码、隐私、医疗）

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  - 作者: openai | 👍 1,451 | 📥 239,384
  - **说明**: OpenAI 发布的隐私过滤工具，用于识别和分类文本中的敏感信息，企业级应用潜力巨大。

- **[jackxinning/Leanly_AI](https://huggingface.co/jackxinning/Leanly_AI)**
  - 作者: jackxinning | 👍 116 | 📥 10,961
  - **说明**: 专注于医疗领域的问答模型，支持中英双语，是垂直领域大模型应用的典型代表。

---

### 3. 生态信号

本周生态最显著的特征是**模型架构的分层化**与**端侧多模态的爆发**。
1.  **架构分层**：Qwen3.6 同时上榜 MoE 版（35B-A3B）和稠密版（27B），显示出用户在“推理成本”与“通用性能”之间的明确选择倾向，MoE 架构在高下载量模型中占比显著提升。
2.  **端侧趋势**：MiniCPM-V-4.6 和 Unsloth 的 GGUF 系列模型持续走红，表明“在本地运行大模型”已从极客玩具转向大众需求，尤其是针对手机端优化的多模态模型（On-Device Model）正成为新热点。
3.  **量化主导**：榜单中大量出现 GGUF 标签，说明尽管模型参数规模不断突破（如 DeepSeek-V4-Pro），但社区实际消费的主流形式仍是经过量化和优化的版本，Unsloth 等优化团队已成为生态链中不可或缺的一环。

---

### 4. 值得探索

1.  **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
    - **理由**：如果你关注如何在手机或笔记本上部署多模态模型，这是必试之选。它代表了开源模型在边缘设备上的最高水平，极具实用价值。

2.  **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    - **理由**：作为文生视频领域的后起之秀，其下载量惊人。对于视频创作者和研究者，尝试该模型能让你体验最新的开源视频生成质量。

3.  **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
    - **理由**：OpenAI 开源此类工具较为罕见，对于构建 RAG（检索增强生成）系统或企业数据处理管道的开发者，这是一个高质量的数据预处理工具。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*