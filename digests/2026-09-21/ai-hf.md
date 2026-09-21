# Hugging Face 热门模型日报 2026-09-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-21 03:57 UTC

---

# Hugging Face 热门模型日报
**日期：2026-09-21**

---

## 📰 今日速览

本周榜单由 **Qwen3.8-27B** 强势主导，原版及 unsloth 量化版合计下载量超 1,400 万，成为当之无愧的社区新基座。**极致量化**成为最热关键词：prism-ml 的三值（ternary）2-bit 模型登顶周点赞榜，ISTA-DASLab 的 GSQ-RCO 混合精度量化方案也获得百万级下载。多模态生成方面，**MiniMax-H3** 与 **LTX-2.5** 在视频生成领域持续爆发。此外，**DeepSeek-V4.1-Flash** 与 **GLM-5.3-Flash** 展现了国产开源模型在“轻量旗舰”赛道的激烈竞争。

---

## 🔥 热门模型

### 🧠 语言模型

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,869 / 7.33M | 本周绝对核心，多模态对话基座，衍生生态最活跃 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,503 / 761K | Qwen3.8 系轻量快速版（qwen4_exp 架构），高性价比推理 |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | Meta | 7,774 / 5.91M | 老牌常青树，下载量持续坚挺 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | 智谱 | 2,501 / 3.11M | GLM 新一代轻量旗舰，多模态对话，下载表现亮眼 |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | 面壁 | 1,628 / 421K | 端侧小模型代表，2B 参数兼顾性能与部署成本 |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | 星辰 AGI | 918 / 12.6K | 29B 总参 / 4B 激活 MoE，端到端对话新秀 |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,549 / 76.7K | 35B-A3B MoE，MLX 格式主打 Apple 端侧推理 |
| [TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 981 / 11.9K | 基于 Qwen3.5 的 9B agentic 专用模型 |

### 🎨 多模态与生成

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | DeepSeek | 3,446 / 497K | 图文多模态，V4.1 轻量版本周发布即上榜 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMax | 5,531 / 4.06M | 文生/图生视频旗舰，社区微调已快速跟进 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,566 / 1.61M | 单文件 diffusion 视频生成，覆盖 I2V/T2V/V2V 全链路 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 880 / 183 | 文生图 + 图像编辑新版本，ComfyUI 版同步发布 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | 源数科技 | 214 / 3.75K | 9B 视觉语言模型，主打空间推理 |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 922 / 17.4K | 3B 音乐生成，支持符号化规划与 agentic 编辑 |

### 🔧 专用模型

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 1,194 / 0 | "system-one" 校准决策分类器，发布即获千赞，热度大于使用 |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 325 / 0 | 基于 Qwen3.5 的 NLI 交叉编码器 |
| [internlm/Atria-Dawn-Preview](https://huggingface.co/internlm/Atria-Dawn-Preview) | 书生·InternLM | 210 / 895 | 挂载论文（arXiv:2609.15818）的预览版新架构探索 |

### 📦 微调与量化

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 1,530 / 1.91M | 周点赞榜首，三值 2-bit 极限压缩，27B 模型消费级可跑 |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,436 / 6.94M | 量化速度之王，官方发布后几乎同步跟进 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,487 / 1.22M | GSQ-RCO 混合精度量化，学术系量化新方案出圈 |
| [DavidAU/Qwen3.8-27B-TURBO-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,010 / 1.30M | 典型 DavidAU 风格“炼丹”融合微调，去审查 + 代码增强 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 193 / 43.0K | Flash-Next 的 GSQ-RCO 量化版 |
| [ukisai/Swift-Qwen3.8-27B(-GGUF)](https://huggingface.co/ukisai/Swift-Qwen3.8-27B) | ukisai | 512+334 / 148K 合计 | "efficient-thinking" 社区微调，GGUF 版下载远超原版 |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 325 / 34.7K | DeepSeek 新模型的去审查 FP8 版，反应速度极快 |
| [prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 286 / 30.0K | 三值模型 MLX 版，覆盖 Mac 端侧用户 |
| [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 482 / 0 | MLX 受限解码 / 并行解码实验模型 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 574 / 243K | MiniMax-H3 社区视频微调版本 |
| [Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4](https://huggingface.co/Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4) | Mothersuperior | 159 / 0 | YuE2 音频 tokenizer 的社区升级 LoRA |

---

## 📊 生态信号

**Qwen3.8 家族是本周绝对中心**：原版、Flash-Next、unsloth 量化、GSQ-RCO 量化、Swift 社区微调、三值衍生（Ternary-Bonsai）形成完整生态链，衍生模型数量占据榜单近三分之一。**量化技术进入“极限压缩”竞赛**——ternary 2-bit、GSQ-RCO 混合精度等方案下载量均达百万级，说明 27B 级模型在消费级硬件本地部署已是主流需求；MLX 生态同步繁荣，Apple 端侧用户群体不可忽视。**开源权重 vs 闭源**：榜单全部为开源权重模型，中国团队（Qwen、DeepSeek、智谱、MiniMax、面壁）在语言与视频生成两端持续领先，Llama 3.1 仍靠存量部署保住下载量但创新势能明显衰减。微调方面，“去审查”和"efficient-thinking"仍是社区最活跃的两大改造方向。

---

## 💎 值得探索

1. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 周点赞榜首 + 近 200 万下载。三值 2-bit 让 27B 模型在消费级 GPU 甚至 Mac 上流畅运行，是极限量化的最佳实践样本，有 MLX 版本配套。

2. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — 学术团队出圈的 GSQ-RCO 混合精度量化方案，对比传统 GGUF 量化研究其精度-体积权衡思路，量化方向值得关注的前沿。

3. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 405 万下载的视频生成旗舰，且社区微调（Singularity）已快速跟进，是当前开源视频生成生态最活跃的基座，适合视频创作者与研究者的第一选择。

---

*数据来源：Hugging Face Hub 周榜（2026-09-21）*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*