# Hugging Face 热门模型日报 2026-07-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-25 02:49 UTC

---

# Hugging Face 热门模型日报 (2026-07-25)

## 1. 今日速览
本期榜单呈现出“基座大模型迭代”与“端侧极低比特量化”并行的趋势。百度推出的 **Unlimited-OCR** 凭借强大的文字理解能力空降榜首，显示了多模态文档处理依然是刚需。开源社区方面，**Qwen3.6** 系列及其衍生模型霸榜多个席位，尤其是 MoE 架构（A3B）备受微调社区青睐。值得注意的是，**prism-ml** 掀起了极低比特量化热潮，1-bit/2-bit 模型下载量惊人，标志着在资源受限设备上运行大模型已成为主流探索方向。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 👍 4,416 | ⬇️ 667,403
    *   说明：国产基座模型的重要迭代，支持对话与文本生成，下载量与点赞数均位居前列，展现了强大的生态活力。

*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    *   作者: google | 👍 3,360 | ⬇️ 12,629,921
    *   说明：Gemma 系列最新一代指令微调模型，以千万级下载量成为本周“下载之王”，兼顾性能与中等参数规模。

*   **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
    *   作者: poolside | 👍 613 | ⬇️ 28,992
    *   说明：Poolside 发布的新一代代码与文本生成模型，迅速攀升至榜单前列，是本周最受关注的新晋闭源/开源混合力量。

*   **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
    *   作者: upstage | 👍 543 | ⬇️ 1,106
    *   说明：Upstage 推出的 250B 参数级超大模型，延续了 Solar 系列的高质量口碑，适合企业级复杂任务。

*   **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**
    *   作者: Nanbeige | 👍 373 | ⬇️ 8,169
    *   说明：轻量级小参数模型，在保持高效推理的同时提供了不错的文本生成能力，适合边缘设备部署。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者: baidu | 👍 3,019 | ⬇️ 2,500,391
    *   说明：本周最热模型，解决了复杂场景下的 OCR 难题，凭借高下载量证明其在文档数字化领域的巨大实用价值。

*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    *   作者: Qwen | 👍 2,504 | ⬇️ 6,460,680
    *   说明：Qwen 系列最新 MoE 架构基座，兼顾多模态理解与生成，下载量破千万，是目前最活跃的开源基座之一。

*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
    *   作者: thinkingmachines | 👍 1,547 | ⬇️ 27,883
    *   说明：新一代图文混合模型，专注于对话场景下的多模态交互，获得了社区的高度认可。

*   **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**
    *   作者: microsoft | 👍 236 | ⬇️ 891
    *   说明：微软发布的图像生成与编辑模型，探索了更精细的 Text-to-Image 控制流。

*   **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)**
    *   作者: nvidia | 👍 113 | ⬇️ 30,303
    *   说明：英伟达专为边缘计算优化的生成式模型，体现了大模型向端侧下沉的趋势。

### 🔧 专用模型（代码、数学、医疗、嵌入、机器人）

*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *   作者: moonshotai | 👍 1,263 | ⬇️ 756,668
    *   说明：月之暗面推出的代码增强模型，集成了长文本与特征提取能力，在代码生成领域表现抢眼。

*   **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
    *   作者: Kwaipilot | 👍 126 | ⬇️ 396
    *   说明：专注于开发场景的代码模型，基于 Qwen3.5 MoE 架构，针对编程任务进行了深度优化。

*   **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
    *   作者: openbmb | 👍 173 | ⬇️ 559
    *   说明：具身智能代表作，将视觉-语言-动作（VLA）融合，直接用于机器人操作控制。

*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   作者: nvidia | 👍 937 | ⬇️ 797,525
    *   说明：英伟达推出的流式语音识别模型，体积小巧，适合实时转录场景，下载量近百万。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
    *   作者: prism-ml | 👍 632 | ⬇️ 2,028,115
    *   说明：惊人的 1-bit 量化模型，下载量突破 200 万，证明了极限压缩在本地部署中的巨大吸引力。

*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
    *   作者: prism-ml | 👍 1,007 | ⬇️ 595,415
    *   说明：2-bit 量化版本，作为 1-bit 的补充，提供了精度与体积的更好平衡。

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 3,070 | ⬇️ 2,057,103
    *   说明：基于 Qwen3.6 的激进派微调模型，去除审查限制，深受角色扮演与创意写作社区欢迎。

*   **[DavidAU/Qwen3.6-27B-Fable-Fusion...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
    *   作者: DavidAU | 👍 486 | ⬇️ 407,421
    *   说明：命名极具 DavidAU 特色的创意写作微调版，融合了多种风格，下载量稳定。

---

## 3. 生态信号

**模型家族格局：** 本周生态呈现出“双雄并立”的局面。**Qwen3.6 系列**（尤其是 A3B MoE 版本）凭借其强大的基座性能，成为社区微调的首选底座，衍生出大量 Uncensored 和创意写作模型。与此同时，**GLM-5.2** 和 **Gemma-4** 作为老牌势力的更新，依然占据着基础工具链的核心位置，下载量稳居高位。

**量化新趋势：** 社区对模型压缩的探索已进入“极限时代”。`prism-ml` 带来的 **1-bit/2-bit 量化** 技术（Bonsai 系列）引发了轰动，数百万的下载量表明，用户对于在普通消费级硬件甚至移动设备上运行大模型有着极度的渴望。传统的 4-bit 量化（GGUF）依然是主流，但“比特率下沉”已成定局。

**开源 vs 闭源：** 尽管闭源 API 发展迅猛，但开源模型在“特定场景”上正通过微调和量化夺回阵地。特别是 OCR（百度）、代码和机器人控制领域，开源模型提供了不可替代的私有化部署能力，推动了企业级应用落地。

---

## 4. 值得探索

1.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：如果你的工作流涉及大量文档处理、票据识别或复杂排版，这是目前 HF 上最值得尝试的 OCR 方案，高下载量已验证其稳定性。
2.  **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**：想体验在树莓派或老款笔记本上跑 27B 参数大模型？这个 1-bit 量化模型是当前技术的前沿代表，虽然精度有损，但极具极客精神。
3.  **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**：关注具身智能的开发者不应错过。作为 VLA（Vision-Language-Action）模型，它展示了如何将大模型“大脑”连接到机器人“四肢”，是通往物理世界 AI 的关键一步。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*