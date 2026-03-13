# OpenClaw Ecosystem Digest 2026-03-13

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-13 00:08 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-03-13

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature, fast-moving project with active community engagement. The 82% open issue rate (410/500) and 72% open PR rate (361/500) suggest either aggressive triage practices or potential backlog pressure. Two security-focused releases shipped to address a critical WebSocket hijacking vulnerability. The project is experiencing **significant stability turbulence** with multiple regression reports tied to recent releases (2026.3.7–2026.3.11), particularly around cron jobs, sandbox file operations, and gateway lifecycle management.

---

## 2. Releases

### v2026.3.11 & v2026.3.11-beta.1
| | |
|:---|:---|
| **Type** | Security patch release |
| **Critical Fix** | [GHSA-5wcw-8](https://github.com/openclaw/openclaw/security/advisories) — Cross-site WebSocket hijacking in `trusted-proxy` mode |

**Details:** Enforces browser origin validation for **all** browser-originated connections regardless of proxy header presence. Previously, attackers could bypass origin checks in `trusted-proxy` configurations to gain `operator.admin` access.

**Breaking Changes:** None documented; however, deployments behind reverse proxies should verify `gateway.controlUi.allowedOrigins` is explicitly configured.

**Migration Notes:** Users in `trusted-proxy` mode must ensure their proxy correctly forwards `Origin` headers; see [#43561](https://github.com/openclaw/openclaw/issues/43561) for ongoing nginx compatibility issues.

---

## 3. Project Progress

### Merged/Closed PRs (Selected High-Impact)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#44386](https://github.com/openclaw/openclaw/pull/44386) | @zerolxf | Feishu thread-aware session routing | Fixes reply threading in group chats |
| [#43536](https://github.com/openclaw/openclaw/pull/43536) | @hclsys | MiniMax VLM fetch timeout (60s) | Prevents indefinite hangs on image analysis |
| [#42561](https://github.com/openclaw/openclaw/pull/42561) | @hclsys | OpenAI TTS fetch timeout (30s) | Voice call reliability |
| [#43537](https://github.com/openclaw/openclaw/pull/43537) | @hclsys | Anthropic/Gemini PDF analysis timeouts | Large PDF processing stability |
| [#28163](https://github.com/openclaw/openclaw/pull/28163) | @KimGLee | `memorySearch.chunking.strategy` schema alignment | Config validation fix |
| [#41901](https://github.com/openclaw/openclaw/pull/41901) | @best | Fix `maxConcurrent` config being ignored | Agent parallelism restored |

### Active Development Themes
- **Timeout hardening**: Systematic addition of `AbortSignal.timeout()` across external API calls (ElevenLabs, Discord, Feishu, Telegram, voice providers)
- **Memory/Context**: [PR #44421](https://github.com/openclaw/openclaw/pull/44421) introduces **Cortex local memory integration** — major feature for persistent agent context
- **Dashboard API**: [PR #43811](https://github.com/openclaw/openclaw/pull/43811) improves session visibility, kill endpoints, WebSocket subscriptions
- **Sandbox expansion**: [PR #42860](https://github.com/openclaw/openclaw/pull/42860) adds Alibaba OpenSandbox backend support

---

## 4. Community Hot Topics

| Rank | Issue/PR | Comments | 👍 | Analysis |
|:---|:---|:---:|:---:|:---|
| 1 | [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n & Localization Support | 98 | 2 | **Long-term strategic need** — maintainers explicitly declined due to bandwidth; community frustration evident in high comment count despite low reactions |
| 2 | [#26534](https://github.com/openclaw/openclaw/issues/26534) DingTalk first-install channel | 60 | 19 | **Enterprise onboarding friction** — feature exists but not exposed in setup wizard; clear product gap |
| 3 | [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 39 | 60 | **Platform parity demand** — 60 👍 signals strong user need; macOS-only desktop limits enterprise adoption |
| 4 | [#27009](https://github.com/openclaw/openclaw/issues/27009) OpenCode Go subscription support | 22 | 25 | Closed — provider integration completed quickly, showing responsive maintainer action on clear commercial value |
| 5 | [#28744](https://github.com/openclaw/openclaw/issues/28744) Vision capability for image recognition (中文) | 14 | 0 | **Chinese enterprise user need** — Feishu/MiniMax vision integration gap; blocked at platform layer not model layer |

**Underlying Needs:**
- **Enterprise deployment**: DingTalk, Linux/Windows clients, proxy support for China (#38503)
- **Multimodal**: Vision (#28744), voice (#7200) — users expect parity with underlying model capabilities
- **Global accessibility**: i18n is a recurring theme despite maintainer resistance

---

## 5. Bugs & Stability

### 🔴 Critical (Data Loss / Security / Complete Failure)

| Issue | Description | Version | Fix Status |
|:---|:---|:---|:---|
| [#43858](https://github.com/openclaw/openclaw/issues/43858) | **Edit tool wipes files to 0 bytes** — silent data destruction | 2026.3.x | **Active** — root cause identified in sandbox FS bridge v3.11 |
| [#44122](https://github.com/openclaw/openclaw/issues/44122) | **Sandbox FS Bridge v3.11 regression**: Write/Edit tools produce 0-byte files when `python3` present | 2026.3.11 | **Active** — pinned writes via Python fd-based atomic ops broken |
| [#43989](https://github.com/openclaw/openclaw/issues/43989) | **Exec approval socket not created on startup** — approval flow hangs | 2026.3.x | **No PR yet** |
| [#44303](https://github.com/openclaw/openclaw/issues/44303) | **Hard crash on model context downgrade** — no graceful truncation | Recent | **No PR yet** |

### 🟠 High (Regression / Major Feature Broken)

| Issue | Description | Version | Fix Status |
|:---|:---|:---|:---|
| [#42883](https://github.com/openclaw/openclaw/issues/42883) | **Cron jobs broken after 2026.3.8** | 2026.3.8 | **Partial** — isolated sessions still failing [#44257](https://github.com/openclaw/openclaw/issues/44257) |
| [#44257](https://github.com/openclaw/openclaw/issues/44257) | **Cron isolated sessions still failing in 2026.3.11** — enqueued but never execute | 2026.3.11 | **No PR yet** |
| [#44269](https://github.com/openclaw/openclaw/issues/44269) | **Isolated cron jobs with kimi-coding/k2p5 can't use tools** | 2026.3.2+ | **No PR yet** |
| [#40868](https://github.com/openclaw/openclaw/issues/40868) | **Cron isolated sessions timing out** | 2026.3.8 | **No PR yet** |
| [#40396](https://github.com/openclaw/openclaw/issues/40396) | **Infinite loop on tool calls after 2026.3.7** | 2026.3.7 | **No PR yet** |
| [#40941](https://github.com/openclaw/openclaw/issues/40941) | **Custom/Local Provider missing token counts** — regression | 2026.3.7 | **No PR yet** |
| [#44093](https://github.com/openclaw/openclaw/issues/44093) | **Gateway crash and removal after restart command** | Recent | **No PR yet** |

### 🟡 Medium (Workflow Disruption)

| Issue | Description | Notes |
|:---|:---|:---|
| [#34830](https://github.com/openclaw/openclaw/issues/34830) | 401 missing auth header with OpenRouter | Regression from 2026.3.2 |
| [#8366](https://github.com/openclaw/openclaw/issues/8366) | GitHub Copilot GPT-5+ models fail with 421 Misdirected Request | Routing to Chat API instead of Responses API |
| [#41885](https://github.com/openclaw/openclaw/issues/41885) | OpenAI Codex OAuth hangs in VPS/SSH flow | Remote installation blocker |
| [#32892](https://github.com/openclaw/openclaw/issues/32892) | `models auth login --provider openai-codex` fails with "No provider plugins found" | 2026.3.2 |

**Stability Assessment:** The project is experiencing **regression clustering** around the 2026.3.7–2026.3.11 release window. Cron job functionality, sandbox file operations, and gateway lifecycle management are particularly affected. The 0-byte file bug is especially severe — users may experience **silent data loss**.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Signals | Likelihood in Next Version |
|:---|:---|:---|:---:|
| **Cortex local memory** | [#44421](https://github.com/openclaw/openclaw/pull/44421) | PR open, XL size, active development | **High** — likely 2026.3.12 |
| **Real-time voice conversation** | [#7200](https://github.com/openclaw/openclaw/issues/7200) | 10 👍, clear use case (Twilio/WebRTC) | Medium — infrastructure exists, needs integration |
| **Vision/image recognition** | [#28744](https://github.com/openclaw/openclaw/issues/28744) | Active Chinese enterprise demand, MiniMax already supports | Medium — platform layer change needed |
| **Linux/Windows Clawdbot apps** | [#75](https://github.com/openclaw/openclaw/issues/75) | 60 👍, oldest open issue (Jan 1), "help wanted" label | Low — resource constraint explicit |
| **i18n/Localization** | [#3460](https://github.com/openclaw/openclaw/issues/3460) | 98 comments, maintainer declined | Low — blocked on maintainer bandwidth |
| **Backup/restore utility** | [#13616](https://github.com/openclaw/openclaw/issues/13616) | 6 comments, disaster recovery need | Medium — operational necessity |
| **Secrets providers (1Password, env, keyring)** | [#17311](https://github.com/openclaw/openclaw/issues/17311) | Builds on merged PR #16663 | Medium — infrastructure in place |

**Prediction:** Next release will likely focus on **stability fixes** (cron, sandbox, gateway) plus **Cortex memory integration**. Voice and vision features may follow in 2026.4.x.

---

## 7. User Feedback Summary

### Pain Points

| Category | Specific Issues | User Impact |
|:---|:---|:---|
| **Silent data loss** | [#43858](https://github.com/openclaw/openclaw/issues/43858), [#44122](https://github.com/openclaw/openclaw/issues/44122) | Destroyed work product, broken trust |
| **Cron reliability** | [#42883](https://github.com/openclaw/openclaw/issues/42883), [#44257](https://github.com/openclaw/openclaw/issues/44257), [#40868](https://github.com/openclaw/openclaw/issues/40868), [#44269](https://github.com/openclaw/openclaw/issues/44269) | Scheduled automation unusable for production |
| **Gateway instability** | [#44093](https://github.com/openclaw/openclaw/issues/44093), [#40905](https://github.com/openclaw/openclaw/issues/40905), [#14161](https://github.com/openclaw/openclaw/issues/14161) | Service availability issues, manual recovery needed |
| **Setup friction** | [#6156](https://github.com/openclaw/openclaw/issues/6156), [#41885](https://github.com/openclaw/openclaw/issues/41885), [#26534](https://github.com/openclaw/openclaw/issues/26534) | New user dropout, enterprise adoption blocked |
| **China connectivity** | [#38503](https://github.com/openclaw/openclaw/issues/38503), [#20870](https://github.com/openclaw/openclaw/issues/20870) | Memory Search, Telegram media fail without proxy support |

### Positive Signals
- **Responsive security patching**: Critical WebSocket vulnerability addressed within 24h of beta detection
- **Provider expansion**: OpenCode Go, Kimi K2.5, MiniMax integrations show active ecosystem growth
- **Community innovation**: [#42938](https://github.com/openclaw/openclaw/issues/42938) "虾缘" (AI dating platform) demonstrates creative OpenClaw applications

### Satisfaction/Dissatisfaction Ratio
- **Satisfied**: Users with working macOS/iOS setups, simple text-based automations
- **Dissatisfied**: Linux/Windows users, cron-dependent workflows, users behind corporate proxies, non-English speakers

---

## 8. Backlog Watch

### Long-Unanswered Critical Items

| Issue | Age | Last Activity | Risk |
|:---|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows apps | ~10 weeks | 2026-03-12 | **Platform lock-in risk** — enterprise buyers require cross-platform |
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n | ~6 weeks | 2026-03-12 | **Global growth ceiling** — 98 comments without maintainer commitment |
| [#7200](https://github.com/openclaw/openclaw/issues/7200) Real-time voice | ~5 weeks | 2026-03-12 | Competitive parity with Claude/ChatGPT voice |
| [#12768](https://github.com/openclaw/openclaw/issues/12768) Gateway restart notifications | ~5 weeks | 2026-03-12 | Operational visibility gap |
| [#15614](https://github.com/openclaw/openclaw/issues/15614) WhatsApp QR not recognized | ~4 weeks | 2026-03-12 | Channel onboarding failure |

### PRs Needing Maintainer Attention

| PR | Size | Status | Blocker |
|:---|:---:|:---|:---|
| [#42860](https://github.com/openclaw/openclaw/pull/42860) OpenSandbox backend | XL | Open | Review bandwidth — major cloud vendor integration |
| [#44421](https://github.com/openclaw/openclaw/pull/44421) Cortex memory | XL | Open | Final review for merge |
| [#44356](https://github.com/openclaw/openclaw/pull/44356) Agent lifecycle monitoring | XL | Open | Architecture review |
| [#43811](https://github.com/openclaw/openclaw/pull/43811) Dashboard API improvements | XL | Open | Testing/validation |

**Recommendation:** Project would benefit from a **stability-focused sprint** to address the regression cluster before shipping new features. The cron job and sandbox file system issues are damaging production user trust.

---

*Digest generated from GitHub data for openclaw/openclaw on 2026-03-13*

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Report — 2026-03-13

## 1. Ecosystem Overview

The personal AI assistant / agent open-source ecosystem is experiencing **intense development velocity** across 12 tracked projects, with aggregate activity exceeding 1,000 issues and PRs updated in 24 hours. The landscape is bifurcating between **mature, stability-challenged platforms** (OpenClaw, IronClaw) and **emerging, feature-hungry alternatives** (NanoBot, PicoClaw, NullClaw). A dominant architectural shift toward **MCP (Model Context Protocol) integration**, **multi-channel enterprise messaging** (Feishu, DingTalk, Telegram), and **local-first deployment** (Docker, Apple Container, Podman) is evident across all projects. Security hardening and token cost optimization have emerged as universal production blockers, while Chinese market penetration and cross-platform desktop support represent key competitive battlegrounds.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score* | Status |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.3.11 (security) | ⚠️ 6/10 | Stability crisis |
| **NanoBot** | 47 | 77 | None | ✅ 7/10 | Rapid maturation |
| **ZeroClaw** | 50 | 50 | v0.1.9a | ✅ 7/10 | CI stabilization |
| **PicoClaw** | 23 | 94 | 2 nightlies | ✅ 8/10 | Security-hardened |
| **NanoClaw** | 22 | 32 | None | ⚠️ 6/10 | Production gaps |
| **NullClaw** | 7 | 26 | v2026.3.11 | ✅ 8/10 | Enterprise-focused |
| **IronClaw** | 50 | 50 | None (v0.19.0 prep) | ⚠️ 6/10 | Pre-release crunch |
| **LobsterAI** | 4 | 10 | v0.2.4 | ✅ 7/10 | Gateway optimization |
| **TinyClaw** | 4 | 11 | 2 patches (v0.0.11-12) | ⚠️ 6/10 | Recovery mode |
| **Moltis** | 10 | 17 | None | ✅ 7/10 | MCP ecosystem |
| **CoPaw** | 50 | 50 | v0.0.7 | 🔴 5/10 | Upgrade crisis |
| **ZeptoClaw** | 11 | 6 | None | ✅ 6/10 | CLI polish |
| **EasyClaw** | 1 | 1 | v1.6.7 | ✅ 5/10 | Maintenance mode |

*\*Health Score: composite of merge rate, critical bug burden, release cadence, and community responsiveness*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw Position | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily = 10× median project | Largest by raw activity; NanoBot, ZeroClaw at ~10% volume |
| **Channel breadth** | 15+ integrations (Feishu, DingTalk, Telegram, WhatsApp, Discord, etc.) | Matched by PicoClaw; exceeded by none |
| **Security responsiveness** | 24h patch for WebSocket hijacking (GHSA-5wcw-8) | IronClaw similar; others untested at scale |
| **Memory architecture** | Cortex local memory integration (#44421) nearing merge | NanoBot Mem0-inspired system shipped; Moltis semantic memory via LanceDB |
| **Provider diversity** | MiniMax, Kimi K2.5, Anthropic, Gemini, OpenAI | NullClaw, PicoClaw aggressively expanding Chinese providers |

### Technical Approach Differences
- **OpenClaw**: Monolithic TypeScript/Node.js with gateway-centric architecture; heavy reliance on WebSocket for real-time features
- **NanoBot**: Python-based, skill/plugin-extensible; research-backed memory (Mem0)
- **ZeroClaw**: Rust-based, branch-consolidated for velocity; WebSocket agent loop parity with CLI
- **PicoClaw**: Rust-based, SOUL.md/AGENT.md identity abstraction; security-first (DoS patches in 24h)
- **NullClaw**: Zig-based, A2A protocol pioneer; daily release cadence
- **IronClaw**: WASM extension model; "no-panics" production mandate
- **Moltis**: Rust-based, Apple Container/Docker/Podman multi-sandbox; MCP-native

### Community Size Comparison
OpenClaw's **98-comment i18n thread (#3460)** and **60👍 Linux/Windows demand (#75)** indicate the largest engaged user base, but also the most frustrated—maintainer bandwidth constraints create "success disaster" dynamics. PicoClaw and NullClaw demonstrate higher satisfaction ratios with smaller communities.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **MCP (Model Context Protocol) ecosystem** | Moltis (#416), NanoClaw (#976), ZeroClaw (#3153), IronClaw (#299) | Authentication, header injection, timeout configurability, server discovery |
| **Enterprise China messaging** | OpenClaw, NanoBot, ZeroClaw, PicoClaw, NullClaw, CoPaw | Feishu/Lark thread-aware routing, DingTalk full-duplex, WeCom integration, proxy support for GFW |
| **Token cost optimization** | NanoClaw (#980-#991), NanoBot (#1944), OpenClaw | Reasoning token stripping, inline compaction, response length control, CLAUDE.md compression |
| **Multi-platform containerization** | Moltis, NanoClaw, OpenClaw, IronClaw | Apple Container vs. Docker vs. Podman parity, cross-arch builds, glibc compatibility |
| **Cron/task reliability** | OpenClaw (critical), NanoClaw (#830), CoPaw (#1262), ZeroClaw (#3300) | Isolated session execution, timezone handling, failure observability, queue durability |
| **Security sandboxing** | PicoClaw (DoS patches), NanoBot (#1940 bubblewrap), Moltis (trusted-network proxy), NanoClaw (#865 critique) | Container escape prevention, credential isolation, exec approval flows |
| **Local LLM deployment** | PicoClaw (#1161), Moltis (#408 Vulkan GGUF), NanoClaw, ZeroClaw | Ollama integration, timeout/pacing controls, silent failure debugging |

---

## 5. Differentiation Analysis

| Project | Core Differentiation | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Scale + ecosystem maturity | Power users, multi-channel operators | Gateway-centric, WebSocket-heavy, TypeScript monolith |
| **NanoBot** | Research-backed memory + Python extensibility | Developers, skill builders | Plugin architecture, Mem0 memory, rapid provider addition |
| **ZeroClaw** | Rust performance + CI reliability | Self-hosters, performance-sensitive | Branch-consolidated, thin LTO, WebSocket parity |
| **PicoClaw** | Security-first + agent identity abstraction | Security-conscious, customization seekers | SOUL.md/AGENT.md, DoS-hardened, Rust |
| **NanoClaw** | Claude Code-native + token economics | Claude power users, cost-optimizers | Container agent orchestration, credential proxy |
| **NullClaw** | A2A protocol + daily release velocity | Enterprise integrators, protocol early adopters | Zig, JSON-RPC 2.0 agent interop, ClickHouse backend |
| **IronClaw** | WASM extensions + "no-panics" reliability | Production operators, extension developers | WASM tool sandbox, staging promotion model |
| **LobsterAI** | Gateway performance + custom URI protocols | Desktop power users, IDE integrators | Electron, esbuild optimization, deep-linking |
| **TinyClaw** | TinyOffice project management + rapid UX iteration | Small teams, project-oriented users | SQLite persistence, chat rooms, kanban |
| **Moltis** | Multi-sandbox portability + MCP-native | Homelab, edge, containerized production | Rust, Apple/Docker/Podman unified, Symphony orchestration |
| **CoPaw** | Multi-agent/workspace + Tool Guard security | Enterprise teams, multi-tenant operators | Async Python, aggressive feature shipping |
| **ZeptoClaw** | CLI polish + clarification-driven UX | Terminal-native developers | Streaming-first, shimmer UX, research skills |
| **EasyClaw** | "Easy" packaging + bilingual support | Casual macOS users, China market | Consumer-grade distribution, minimal config |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Velocity > Quality)
| Project | Pattern | Risk |
|:---|:---|:---|
| **OpenClaw** | 500 items/day, regression clustering | Stability debt, user trust erosion |
| **CoPaw** | v0.0.7 breaking changes, data loss reports | Upgrade anxiety, production unsuitability |
| **IronClaw** | Staging promotions, bug bash mode | v0.19.0 release pressure, extension 404s |

### Tier 2: Maturation (Balanced Growth)
| Project | Pattern | Trajectory |
|:---|:---|:---|
| **PicoClaw** | Security patches in 24h, architectural refactor | Production-ready, v0.3.0 SOUL.md milestone |
| **NullClaw** | Daily releases, same-day feature implementation | Enterprise credibility building |
| **NanoBot** | 77 PRs, search abstraction bottleneck | Architectural decision pending |
| **Moltis** | MCP ecosystem completion, workflow daemon | v0.x milestone approaching |

### Tier 3: Stabilization / Niche
| Project | Pattern | Position |
|:---|:---|:---|
| **ZeroClaw** | CI fixes, branch consolidation post-disruption | Recovery to velocity |
| **LobsterAI** | Gateway optimization, patch releases | Desktop specialist |
| **TinyClaw** | Post-crisis recovery, Telegram reliability gap | Team coordination niche |
| **NanoClaw** | Token optimization stream, credential lifecycle gaps | Claude ecosystem dependency |
| **ZeptoClaw** | Maintainer-driven, low community engagement | Early stage, CLI focus |
| **EasyClaw** | Minimal activity, macOS maintenance | Consumer experiment |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **MCP as universal glue** | 6+ projects integrating; Moltis #416, NanoClaw #976 | Design tools as MCP servers first; expect standardization |
| **Chinese market as forcing function** | Feishu/DingTalk/WeCom across 8 projects; proxy/GFW issues | Implement proxy-aware HTTP clients; test behind GFW |
| **Token economics as competitive moat** | NanoClaw's 5-PR optimization cluster; reasoning token stripping | Instrument API costs per session; optimize context windows |
| **Container diversity beyond Docker** | Apple Container, Podman, distroless debates | Abstract container runtime; test multi-sandbox |
| **Agent identity/persona as first-class** | PicoClaw SOUL.md, OpenClaw memorySearch, NanoBot Mem0 | Separate "who" from "how" in configuration |
| **Silent failures as trust killers** | OpenClaw 0-byte files, NanoClaw Ollama silent fails, CoPaw data loss | Implement aggressive observability; never fail silently |
| **Cron/task reliability as production gate** | OpenClaw critical cron bugs, NanoClaw #830, CoPaw persistence | Design for at-least-once execution; durable queue state |
| **Voice/vision as emerging demand** | OpenClaw #7200, #28744; NanoBot #1106; persistent gaps | Platform layer changes needed; not just model access |

### Strategic Implications

1. **Build on MCP, not bespoke APIs** — The protocol is achieving critical mass; vendor lock-in risk for non-MCP integrations is rising.

2. **Plan for China deployment complexity** — Proxy support, provider diversity (MiniMax, VolcEngine, BytePlus), and messaging platform fragmentation are non-negotiable for global reach.

3. **Invest in observability over features** — The projects winning user trust (PicoClaw, NullClaw) prioritize debuggability and failure transparency.

4. **Container abstraction is infrastructure, not packaging** — Runtime diversity (Docker/Apple/Podman) requires architectural investment, not just CI matrix expansion.

5. **Memory architecture is the next battleground** — Short-context LLMs + long-horizon tasks demand persistent, queryable, compressible agent memory; Cortex, Mem0, and LanceDB represent divergent valid approaches.

---

*Report synthesized from 12 project digests covering 1,000+ development items, 50+ releases, and 500+ community interactions on 2026-03-13.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-13

## 1. Today's Overview

NanoBot shows **exceptionally high development velocity** with 47 issues and 77 pull requests updated in the last 24 hours—indicating a rapidly maturing AI agent framework with active community engagement. The project is experiencing a **channel integration boom**, with new connectors for XMPP, DingTalk file support, and continued stabilization of Telegram, Feishu, and WhatsApp integrations. Security hardening has emerged as a priority with PR #1940 addressing container sandboxing. No new releases were published today, though PyPI lag remains a concern (Issue #1059). The maintainer team appears responsive with 21 issue closures and 42 merged/closed PRs, suggesting healthy triage throughput despite growing backlog complexity.

---

## 2. Releases

**No new releases** (v0.1.4.post2 remains latest).

**Notable gap**: Issue [#1059](https://github.com/HKUDS/nanobot/issues/1059) flags that v0.1.4.post1 never reached PyPI, creating distribution channel friction.

---

## 3. Project Progress

### Merged/Closed PRs Today (42 total, selected highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#1944](https://github.com/HKUDS/nanobot/pull/1944) | Remove reasoning tokens from context | Reduces token waste from thinking models |
| [#1930](https://github.com/HKUDS/nanobot/pull/1930) | Fix CLI formatting corruption with async subagents | Resolves [#1904](https://github.com/HKUDS/nanobot/issues/1904) interactive terminal bugs |
| [#1608](https://github.com/HKUDS/nanobot/pull/1608) | Add VolcEngine + BytePlus provider support | Expands China cloud provider ecosystem |
| [#137](https://github.com/HKUDS/nanobot/pull/137) | Mem0-inspired adaptive long-term memory system | Major architectural enhancement for persistence |
| [#1933](https://github.com/HKUDS/nanobot/pull/1933) | Skill disabling via `enabled: false` | Better skill lifecycle management |

### Key Advances
- **Memory system**: Production-ready long-term memory inspired by Mem0 research paper and Karpathy's "LLM as OS" framework
- **Provider diversity**: VolcEngine, BytePlus, Vertex AI (PR [#1943](https://github.com/HKUDS/nanobot/pull/1943)), and Mistral transcription (PR [#1680](https://github.com/HKUDS/nanobot/pull/1680))
- **Security**: Bubblewrap sandboxing for exec calls (PR [#1940](https://github.com/HKUDS/nanobot/pull/1940))

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#176](https://github.com/HKUDS/nanobot/issues/176) Feishu configuration failure | 17 comments, closed | **Resolution pattern**: Configuration validation UX needs improvement; "No channels enabled" error is common onboarding friction |
| [#140](https://github.com/HKUDS/nanobot/issues/140) GitHub Copilot provider support | 11 comments, 👍4, closed | **Enterprise demand**: Users want IDE-integrated AI access; closed without implementation suggests prioritization gap |
| [#1617](https://github.com/HKUDS/nanobot/issues/1617) Missing Chinese documentation | 10 comments, 👍1, closed | **Localization tension**: Dismissive tone ("显得你了？") reflects community frustration; i18n remains unaddressed |
| [#1873](https://github.com/HKUDS/nanobot/issues/1873) Config file security / key leaking | 8 comments, open | **Critical security**: Container escape risk via exec(); PR [#1940](https://github.com/HKUDS/nanobot/pull/1940) provides partial fix |
| [#1922](https://github.com/HKUDS/nanobot/issues/1922) Community web UI (nanobot-webui) | 5 comments, 👍3, open | **Ecosystem growth**: @Good0007's third-party management panel signals demand for visual administration |

**Underlying needs**: Better onboarding/debugging tools, enterprise security compliance, official web UI, and comprehensive localization.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|:---|:---|:---|:---|
| 🔴 **High** | [#1873](https://github.com/HKUDS/nanobot/issues/1873) Config/key leakage via exec() | Open | PR [#1940](https://github.com/HKUDS/nanobot/pull/1940) (partial) |
| 🟡 **Medium** | [#1692](https://github.com/HKUDS/nanobot/issues/1692) Telegram double replies (markdown+plain) | Open | None identified |
| 🟡 **Medium** | [#1300](https://github.com/HKUDS/nanobot/issues/1300) Matrix channel startup failure | Open | None identified |
| 🟡 **Medium** | [#1157](https://github.com/HKUDS/nanobot/issues/1157) OpenRouter StepFun 400 errors | Open | None identified |
| 🟡 **Medium** | [#1936](https://github.com/HKUDS/nanobot/issues/1936) QQ markdown breaks legacy clients | Open | PR [#1941](https://github.com/HKUDS/nanobot/pull/1941) |
| 🟢 **Low** | [#1931](https://github.com/HKUDS/nanobot/issues/1931) Memory consolidation LLM skip | Open | None identified |
| 🟢 **Low** | [#1927](https://github.com/HKUDS/nanobot/issues/1927) DashScope `tool_choice="required"` incompatibility | Open | None identified |

**Regression watch**: QQ channel markdown change (commit `1421ac5`) introduced client compatibility breakage—PR [#1941](https://github.com/HKUDS/nanobot/pull/1941) reverts to plain text.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release |
|:---|:---|:---|
| **Web search backend abstraction** | [#1719](https://github.com/HKUDS/nanobot/issues/1719) | High — 15+ competing PRs blocked on architecture; maintainer attention needed |
| **Voice conversation support** | [#1106](https://github.com/HKUDS/nanobot/issues/1106) | Medium — infrastructure exists, integration complexity |
| **GitHub Copilot provider** | [#140](https://github.com/HKUDS/nanobot/issues/140) | Low — closed without action, legal/complexity barriers |
| **iMessage bridge** | [#90](https://github.com/HKUDS/nanobot/issues/90) | Low — platform restrictions |
| **Plugin system (OpenClaw-compatible)** | [#1881](https://github.com/HKUDS/nanobot/issues/1881) | Medium — explicit user demand for ecosystem expansion |
| **Tool/memory optional toggles** | [#1881](https://github.com/HKUDS/nanobot/issues/1881) | High — config-driven feature flags align with architecture |
| **Multi-agent council/orchestration** | [#1928](https://github.com/HKUDS/nanobot/issues/1928) | Medium — emerging pattern, needs design consensus |

**Predicted v0.1.5 themes**: Security hardening (sandboxing), search provider abstraction, skill lifecycle improvements, expanded channel coverage.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence |
|:---|:---|
| **Configuration complexity** | Feishu (#176), Matrix (#1300), WhatsApp (#92) setup failures; "No channels enabled" as recurring symptom |
| **Documentation gaps** | Chinese README (#1617), outdated config examples (#680), missing webhook guidance |
| **Token/ cost optimization** | Reasoning token waste (PR [#1944](https://github.com/HKUDS/nanobot/pull/1944)), heartbeat call elimination (PR [#1939](https://github.com/HKUDS/nanobot/pull/1939)) |
| **Model compatibility** | StepFun (#1157), DashScope (#1927), NVIDIA (#1822) provider issues |

### Positive Signals
- **Ecosystem enthusiasm**: Third-party web UI (#1922), WeChat community group (#1907)
- **Enterprise interest**: VolcEngine/BytePlus integration, Vertex AI support
- **Security consciousness**: Proactive sandboxing contributions

### Satisfaction Drivers
Working integrations (Telegram, DingTalk with new file support), skill extensibility, active maintainer response.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1719](https://github.com/HKUDS/nanobot/issues/1719) Web search abstraction | 4+ days | **Architecture bottleneck** — 15 PRs blocked | Maintainer decision on provider interface |
| [#1059](https://github.com/HKUDS/nanobot/issues/1059) PyPI release lag | 17+ days | Distribution credibility | CI/CD fix for automated publishing |
| [#126](https://github.com/HKUDS/nanobot/pull/126) GitHub Actions Docker build | 35+ days | Community contribution stagnation | Review/merge or provide feedback |
| [#121](https://github.com/HKUDS/nanobot/pull/121) Codespell CI integration | 37+ days | Code quality automation | Low-risk merge |
| [#100](https://github.com/HKUDS/nanobot/issues/100) Telegram "empty message" crash | 36+ days | Stability | Reproduction confirmation |

**Maintainer attention recommended**: Search provider abstraction (#1719) is the highest-impact architectural decision pending; PyPI automation (#1059) affects all users.

---

*Digest generated from HKUDS/nanobot GitHub activity 2026-03-12*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-13

## 1. Today's Overview

ZeroClaw shows **high-velocity development** with 100 items updated in 24 hours (50 issues, 50 PRs) and a fresh alpha release (v0.1.9a). The project is actively stabilizing after a major branch consolidation that reduced 574 branches to a single `master` default. Current focus areas: **CI/CD reliability** (multiple glibc/cache fixes), **channel expansion** (WeCom, Matrix, Feishu), and **provider ecosystem growth** (Azure OpenAI, Avian). The 35:15 open-to-merged PR ratio indicates healthy throughput but also a growing review backlog.

---

## 2. Releases

### [v0.1.9a](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.9a) — 2026-03-12

| Change | PR | Author |
|--------|-----|--------|
| **fix(memory)**: Resolve embedding `api_key` from `embedding_provider` env var, not `default_provider` key | [#3184](https://github.com/zeroclaw-labs/zeroclaw/pull/3184) | @zverozabr |
| **fix(ci)**: Downgrade `action-gh-release` to v2.4.2 to fix release finalization | — | @SimianAstronaut7 |

**Migration Note**: Users relying on embedding providers should verify their `api_key` resolution—previously misconfigured keys may now correctly resolve from `embedding_provider` instead of falling back to `default_provider`.

---

## 3. Project Progress

### Merged/Closed PRs (15 total, selected highlights)

| PR | Description | Impact |
|----|-------------|--------|
| [#3365](https://github.com/zeroclaw-labs/zeroclaw/pull/3365) | Pin release workflows to `ubuntu-latest` to fix glibc cache mismatch | **Critical CI fix** — resolves `GLIBC_2.39 not found` errors blocking releases |
| [#3363](https://github.com/zeroclaw-labs/zeroclaw/pull/3363) | Use thin LTO profile for faster CI builds | 40%+ faster CI builds, unchanged release binaries |
| [#3360](https://github.com/zeroclaw-labs/zeroclaw/pull/3360) | "Actualize" (branch sync) | Repository hygiene post-consolidation |
| [#3350](https://github.com/zeroclaw-labs/zeroclaw/pull/3350) | Switch remaining README locales to `install.sh` | Docs fix — 11 localized READMEs were pointing to removed `bootstrap.sh` |

### Feature Advancement
- **Cron observability**: [#3300](https://github.com/zeroclaw-labs/zeroclaw/pull/3300) adds run history API and dashboard view (open, near merge)
- **WebSocket agent loop**: [#3367](https://github.com/zeroclaw-labs/zeroclaw/pull/3367) wires full agent loop into `/ws/chat`, enabling tool use for WebSocket clients — **major platform gap closure**

---

## 4. Community Hot Topics

### Most Active by Engagement

| # | Topic | Comments | 👍 | Analysis |
|---|-------|----------|-----|----------|
| [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) | GLIBC_2.39 not found — **CLOSED** | 9 | 2 | **Runtime compatibility crisis** — Linux binary portability remains fragile; CI fixes in [#3365](https://github.com/zeroclaw-labs/zeroclaw/pull/3365) address root cause |
| [#1327](https://github.com/zeroclaw-labs/zeroclaw/issues/1327) | Kimi Code / Kimi 2.5 incompatibility — **CLOSED** | 6 | 0 | **Provider compatibility** — reasoning_content/thinking field mismatch with Chinese LLM providers; pattern likely to recur with other "thinking" models |
| [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) | Feishu channel cannot start — **OPEN** | 5 | 0 | **Enterprise China market** — Feishu (Lark) integration broken; fix PR [#3355](https://github.com/zeroclaw-labs/zeroclaw/pull/3355) in flight |
| [#2510](https://github.com/zeroclaw-labs/zeroclaw/issues/2510) | `initialized=false` + activation spam — **OPEN** | 4 | 0 | **UX regression** — config state machine bug; fix PR [#3356](https://github.com/zeroclaw-labs/zeroclaw/pull/3356) ready |
| [#2910](https://github.com/zeroclaw-labs/zeroclaw/issues/2910) | WebUI agent not working v0.1.8 — **OPEN** | 4 | 0 | **Web platform stability** — connection failures blocking non-CLI users; likely resolved by [#3367](https://github.com/zeroclaw-labs/zeroclaw/pull/3367) |
| [#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) | Agent subcommand should support MCP — **CLOSED** | 4 | 1 | **Extensibility** — MCP (Model Context Protocol) adoption accelerating; community wants parity between channels and agent CLI |
| [#3176](https://github.com/zeroclaw-labs/zeroclaw/issues/3176) | Add Azure OpenAI provider — **CLOSED** | 4 | 0 | **Enterprise cloud** — Azure OpenAI support merged; reduces friction for Microsoft-centric orgs |
| [#2922](https://github.com/zeroclaw-labs/zeroclaw/issues/2922) | Community Update: Moving Forward Together — **CLOSED** | 3 | 12 | **Governance** — transparency post about "internal disruption"; high engagement signals community investment in project health |

**Underlying Needs**: (1) **Reliable cross-platform binaries** (GLIBC issues), (2) **Chinese market/LLM compatibility**, (3) **Enterprise identity/provider integrations**, (4) **Web/WebSocket parity with CLI**.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|----------|-------|--------|--------|-------------|
| **S0** | [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) | CLOSED | [#3365](https://github.com/zeroclaw-labs/zeroclaw/pull/3365) | GLIBC_2.39 runtime failure — **resolved via CI runner alignment** |
| **S0** | [#2910](https://github.com/zeroclaw-labs/zeroclaw/issues/2910) | OPEN | [#3367](https://github.com/zeroclaw-labs/zeroclaw/pull/3367) | WebUI agent connection failures — **critical for web users** |
| **S0** | [#2896](https://github.com/zeroclaw-labs/zeroclaw/issues/2896) | CLOSED | — | Discord websocket silent stall after first message |
| **S1** | [#2510](https://github.com/zeroclaw-labs/zeroclaw/issues/2510) | OPEN | [#3356](https://github.com/zeroclaw-labs/zeroclaw/pull/3356) | Config initialized=false spam — **workflow blocked** |
| **S1** | [#2880](https://github.com/zeroclaw-labs/zeroclaw/issues/2880) | CLOSED | — | Tool calls blocked for workspace paths (security policy) |
| **S1** | [#2930](https://github.com/zeroclaw-labs/zeroclaw/issues/2930) | CLOSED | — | Docker bootstrap `Unbound variable` on macOS |
| **S2** | [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) | OPEN | [#3355](https://github.com/zeroclaw-labs/zeroclaw/pull/3355) | Feishu channel connection failure |
| **S2** | [#2403](https://github.com/zeroclaw-labs/zeroclaw/issues/2403) | CLOSED | — | Telegram photo duplication on first turn |

**Regressions**: [#3358](https://github.com/zeroclaw-labs/zeroclaw/pull/3358) fixes Slack `thread_ts` regression from [#3221](https://github.com/zeroclaw-labs/zeroclaw/pull/3221).

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood v0.2.0 | Signal Strength |
|---------|----------|-------------------|-----------------|
| **WeCom (WeChat Work) channel** | [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090), [#3305](https://github.com/zeroclaw-labs/zeroclaw/pull/3305) | **High** | PR open, enterprise demand |
| **Matrix E2EE + password login** | [#2916](https://github.com/zeroclaw-labs/zeroclaw/issues/2916), [#3141](https://github.com/zeroclaw-labs/zeroclaw/pull/3141), [#3361](https://github.com/zeroclaw-labs/zeroclaw/issues/3361), [#3357](https://github.com/zeroclaw-labs/zeroclaw/issues/3357) | **High** | 3 related issues, 1 PR, privacy-focused users |
| **MCP in agent subcommand** | [#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) | **Medium** | Closed but referenced; architectural debt |
| **Configurable LLM timeouts** | [#2926](https://github.com/zeroclaw-labs/zeroclaw/issues/2926) | **Merged** | Local LLM users (Ollama, etc.) |
| **Cron → channel delivery** (Matrix) | [#3361](https://github.com/zeroclaw-labs/zeroclaw/issues/3361) | **Medium** | Infrastructure automation use case |
| **Pacing controls for slow LLMs** | [#2963](https://github.com/zeroclaw-labs/zeroclaw/issues/2963) | **Medium** | Local LLM + browser automation |
| **Avian provider** | [#2017](https://github.com/zeroclaw-labs/zeroclaw/pull/2017) | **Medium** | Open PR, OpenAI-compatible endpoint |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Binary portability** | [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070), [#2914](https://github.com/zeroclaw-labs/zeroclaw/issues/2914) | High — Linux users on older distros blocked |
| **Docker usability** | [#2930](https://github.com/zeroclaw-labs/zeroclaw/issues/2930), [#3359](https://github.com/zeroclaw-labs/zeroclaw/issues/3359) | Medium — distroless image lacks shell for git/file ops |
| **Config state confusion** | [#2510](https://github.com/zeroclaw-labs/zeroclaw/issues/2510) | Medium — "not activated" spam erodes trust |
| **WebUI reliability** | [#2910](https://github.com/zeroclaw-labs/zeroclaw/issues/2910) | High — web users second-class to CLI |

### Positive Signals
- **Telegram bidirectional messaging** [#2907](https://github.com/zeroclaw-labs/zeroclaw/issues/2907) — IoT/automation use cases (3 👍)
- **Azure OpenAI support** [#3176](https://github.com/zeroclaw-labs/zeroclaw/issues/3176) — enterprise adoption
- **Community transparency** [#2922](https://github.com/zeroclaw-labs/zeroclaw/issues/2922) — 12 👍 on governance post

### Use Cases Emerging
- **Raspberry Pi/IoT sensors** → Telegram channels
- **Enterprise China** → Feishu, WeCom
- **Privacy-conscious teams** → Matrix E2EE
- **Local AI** → Ollama/llama.cpp with timeout/pacing controls

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|----------|-----|------|---------------|
| [#8](https://github.com/zeroclaw-labs/zeroclaw/issues/8) Gateway missing CORS/security headers | 27 days | **Security** — CWE-352 | Maintainer triage; MEDIUM severity but unaddressed |
| [#2442](https://github.com/zeroclaw-labs/zeroclaw/issues/2442) Formatting violations (cargo fmt) | 11 days | Release gate blocker | 1-comment issue, easy fix, needs assignment |
| [#2017](https://github.com/zeroclaw-labs/zeroclaw/pull/2017) Avian provider | 14 days | Provider diversity | Open PR, needs review |
| [#2963](https://github.com/zeroclaw-labs/zeroclaw/issues/2963) Pacing controls | 6 days | Local LLM UX | 1 comment, strong use case, needs prioritization |

**Review Bottleneck**: 35 open PRs vs. 15 merged suggests maintainer bandwidth constraint. The Alix-007 contributor cluster (5 PRs today: [#3351](https://github.com/zeroclaw-labs/zeroclaw/pull/3351)-[#3356](https://github.com/zeroclaw-labs/zeroclaw/pull/3356)) indicates strong community contribution but requires coordinated review.

---

*Digest generated from GitHub data for zeroclaw-labs/zeroclaw on 2026-03-13*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-13

## 1. Today's Overview

PicoClaw demonstrates **exceptional development velocity** with 94 PRs and 23 issues updated in 24 hours, indicating an active, rapidly maturing AI agent framework. The project released two nightly builds (v0.2.2-nightly.20260312.6612ca09) featuring Matrix rich-text support and LongCat provider integration. A **major architectural initiative**—the Agent Refactor (#1216)—is driving significant discussion around agent identity (SOUL.md/AGENT.md) and context management boundaries. Security hardening is a visible priority with multiple DoS vulnerabilities patched in channel handlers. The 66:28 open-to-closed PR ratio suggests healthy throughput, though backlog accumulation warrants monitoring.

---

## 2. Releases

### v0.2.2-nightly.20260312.6612ca09
| Aspect | Details |
|--------|---------|
| **Rich-text Matrix messages** | [#1370](https://github.com/sipeed/picoclaw/commit/39a451d31240a326d72d2f338d039166e7920b4d) — Enables formatted message rendering in Matrix channels |
| **LongCat provider support** | [#1317](https://github.com/sipeed/picoclaw/commit/9222351871994df738ef2a09559afb60e2ce138f) — New model provider integration |
| **MCP initialization fix** | [#9b0a48a](https://github.com/sipeed/picoclaw/commit/9b0a48ac6d0df8ad1862c6f88648cc4dbde4bd50) — Fixes agent direct-mode MCP startup |

### Nightly Build (automated)
- Build: `v0.2.2-nightly.20260312.6460a0a7`
- ⚠️ Marked unstable; use with caution
- [Full changelog](https://github.com/sipeed/picoclaw/compare/v0.2.2...main)

**Breaking Changes:** None documented. Migration: Standard nightly upgrade path.

---

## 3. Project Progress

### Merged/Closed PRs (28 total, selected highlights)

| PR | Author | Impact |
|:---|:---|:---|
| [#1420](https://github.com/sipeed/picoclaw/pull/1420) | @SebastianBoehler | **Fallback chain reliability** — retries transport resets, uses candidate providers |
| [#1436](https://github.com/sipeed/picoclaw/pull/1436) | @horsley | **Matrix security** — streaming download prevents memory exhaustion DoS |
| [#1413](https://github.com/sipeed/picoclaw/pull/1413) | @ex-takashima | **LINE security** — 1MB body limit prevents unauthenticated DoS |
| [#1443](https://github.com/sipeed/picoclaw/pull/1443) | @Alix-007 | **SVG MIME type fix** — `image/svg+xml` compliance |
| [#1445](https://github.com/sipeed/picoclaw/pull/1445) | @Alix-007 | **Provider env var loading** — fixes legacy config parsing |
| [#1446](https://github.com/sipeed/picoclaw/pull/1446) | @Alix-007 | **Spawn tool model resolution** — uses target agent's model, not caller's |
| [#1444](https://github.com/sipeed/picoclaw/pull/1444) | @Alix-007 | **Cron timezone honor** — `schedule.tz` now respected |

**Themes:** Security hardening (3 PRs), configuration reliability (3 PRs), agent execution correctness (2 PRs)

---

## 4. Community Hot Topics

| Rank | Issue/PR | Comments | Analysis |
|:---|:---|:---:|:---|
| 1 | [#1218](https://github.com/sipeed/picoclaw/issues/1218) Agent identity: SOUL.md & AGENT.md | **16** | **Foundational architecture discussion** — defining agent "personality" vs. "capability" configuration. High engagement signals community desire for agent customization without code changes. |
| 2 | [#1161](https://github.com/sipeed/picoclaw/issues/1161) Ollama local model configuration | **15** | **Onboarding friction** — users struggle with silent failures in local LLM setup. Documentation gap + error visibility problem. |
| 3 | [#1439](https://github.com/sipeed/picoclaw/issues/1439) Context management boundaries | **4** | **Technical deep-dive** — token budgeting, compression triggers, session persistence. Aligns with refactor roadmap. |
| 4 | [#440](https://github.com/sipeed/picoclaw/issues/440) Replace hard iteration limits | **4** | **Performance vs. safety tension** — `max_tool_iterations: 20` blocks legitimate workflows. Needs intelligent loop detection. |

**Underlying Needs:** 
- Clearer mental models for agent configuration (#1218, #1161)
- Production-grade observability (#1439, #440)
- Local-first deployment ergonomics (#1161)

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#1405](https://github.com/sipeed/picoclaw/issues/1405) | Matrix unbounded memory download (DoS) | ✅ Fixed [#1436](https://github.com/sipeed/picoclaw/pull/1436) |
| 🔴 **Critical** | [#1407](https://github.com/sipeed/picoclaw/issues/1407) | LINE webhook unbounded body read (DoS) | ✅ Fixed [#1413](https://github.com/sipeed/picoclaw/pull/1413) |
| 🟡 **High** | [#1419](https://github.com/sipeed/picoclaw/issues/1419) | Fallback aborts on OpenRouter transport resets | ✅ Fixed [#1420](https://github.com/sipeed/picoclaw/pull/1420) |
| 🟡 **High** | [#1161](https://github.com/sipeed/picoclaw/issues/1161) | Ollama silent failures / no response | 🔍 Open, needs investigation |
| 🟡 **High** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | `exec` tool over-blocks URL commands | 🔍 Open, PR [#1254](https://github.com/sipeed/picoclaw/pull/1254) pending |
| 🟢 **Medium** | [#1410](https://github.com/sipeed/picoclaw/issues/1410) | SVG MIME type incorrect | ✅ Fixed [#1443](https://github.com/sipeed/picoclaw/pull/1443) |
| 🟢 **Medium** | [#1437](https://github.com/sipeed/picoclaw/issues/1437) | Feishu message loss on mobile hotspot | 🔍 Open, network-specific |
| 🟢 **Medium** | [#1426](https://github.com/sipeed/picoclaw/issues/1426) | QQ channel malfunction | ✅ Closed (resolved in nightly) |

**Security Assessment:** Two critical DoS vectors patched within 24 hours of reporting. Response time excellent.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.2.3 | Rationale |
|:---|:---|:---:|:---|
| **Azure OpenAI provider** | [#1424](https://github.com/sipeed/picoclaw/issues/1424) / [#1422](https://github.com/sipeed/picoclaw/pull/1422) | **High** | PR ready, enterprise demand |
| **ModelScope (魔搭社区) provider** | [#1438](https://github.com/sipeed/picoclaw/issues/1438) / [#1447](https://github.com/sipeed/picoclaw/pull/1447) | **High** | PR ready, Chinese market focus |
| **Mattermost channel** | [#1288](https://github.com/sipeed/picoclaw/pull/1288) | **Medium** | PR open, enterprise chat demand |
| **Telegram reactions** | [#1328](https://github.com/sipeed/picoclaw/issues/1328) | **Medium** | UX polish, low priority tag |
| **OpenWrt support** | [#1132](https://github.com/sipeed/picoclaw/issues/1132) | **Low** | Niche hardware, no PR |
| **Discord channel name in context** | [#1451](https://github.com/sipeed/picoclaw/issues/1451) | **High** | Simple fix, improves UX |
| **Real-time tool feedback** | [#1332](https://github.com/sipeed/picoclaw/pull/1332) | **Medium** | Significant UX improvement, complexity moderate |

**Roadmap Signal:** The Agent Refactor (#1216) is the dominant theme. Expect v0.3.0 to feature SOUL.md/AGENT.md formalization and context management overhaul.

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | User Quote (paraphrased) |
|:---|:---|:---|
| Silent failures / poor error visibility | High | "agent runs but produces no response" [#1161](https://github.com/sipeed/picoclaw/issues/1161) |
| Configuration complexity | Medium | Environment variable loading broken [#1445](https://github.com/sipeed/picoclaw/pull/1445) |
| Safety guards too aggressive | Medium | "Command blocked by safety guard (path outside working dir)" for URLs [#1042](https://github.com/sipeed/picoclaw/issues/1042) |
| Mobile/network edge cases | Low | Feishu fails on phone hotspot [#1437](https://github.com/sipeed/picoclaw/issues/1437) |

### Positive Signals
- **Security responsiveness:** Rapid patching of DoS issues builds trust
- **Provider diversity:** Community actively contributing integrations (LongCat, Azure, ModelScope)
- **Architectural ambition:** SOUL.md concept resonates with customization desires

### Satisfaction Drivers
- Multi-channel support breadth (Telegram, Matrix, LINE, QQ, Feishu, WeCom, DingTalk)
- Local model support (Ollama) — when it works

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#440](https://github.com/sipeed/picoclaw/issues/440) Hard iteration limit | ~3 weeks | **Medium** | Design decision: intelligent loop detection vs. context-window bounding. Linked to #1216 refactor. |
| [#1132](https://github.com/sipeed/picoclaw/issues/1132) OpenWrt support | ~1 week | Low | Hardware niche; may need community champion |
| [#1254](https://github.com/sipeed/picoclaw/pull/1254) URL command blocking fix | ~5 days | **Medium** | Safety-critical regression in `exec` tool. Affects common workflows (curl, browser). Needs review. |
| [#1288](https://github.com/sipeed/picoclaw/pull/1288) Mattermost channel | ~4 days | Low | Feature-complete PR, pending review bandwidth |
| [#1332](https://github.com/sipeed/picoclaw/pull/1332) Real-time tool feedback | ~3 days | Low | UX enhancement, needs maintainer UX review |

**Maintainer Attention Recommended:**
- **#440 + #1216 coordination:** Ensure iteration limit redesign aligns with refactor
- **#1254:** Merge or iterate — blocking legitimate user workflows

---

*Digest generated from GitHub activity 2026-03-12. Project health: Strong velocity, improving security posture, architectural debt being addressed proactively.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-13

## 1. Today's Overview

NanoClaw shows **high development velocity** with 22 issues and 32 PRs updated in the last 24 hours, indicating an active contributor base and rapid iteration cycle. No new releases were cut today, suggesting the project is in a feature accumulation phase rather than stabilization. The community is heavily focused on **token cost optimization**, **multi-channel expansion** (WhatsApp, Telegram, Feishu/Lark, Gmail), and **security hardening** — with particular attention to credential isolation and container trust boundaries. Chinese-language issues and PRs indicate growing APAC adoption. The project appears healthy but faces growing pains around setup complexity and cross-platform compatibility (Docker vs. Apple Container vs. Podman).

---

## 2. Releases

**None today.** No version tags or release notes published in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (11 total)

| PR | Description | Significance |
|:---|:---|:---|
| [#976](https://github.com/qwibitai/nanoclaw/pull/976) | GitHub MCP server for container agents | Agents now have structured GitHub tools without CLI/token exposure |
| [#1013](https://github.com/qwibitai/nanoclaw/pull/1013) | Semantic memory with LanceDB + Gemini embeddings | Cross-session memory persistence — major UX improvement |
| [#1012](https://github.com/qwibitai/nanoclaw/pull/1012) | Discord file-sending skill | File attachment support for Discord channel |
| [#1007](https://github.com/qwibitai/nanoclaw/pull/1007) | Symphony MCP config injection, archive runs, Linear improvements | Better dispatched agent tooling and project management integration |
| [#1006](https://github.com/qwibitai/nanoclaw/pull/1006) | ContextLife Claw Hub channel | New pseudo-group-chat delegation pattern |
| [#1005](https://github.com/qwibitai/nanoclaw/pull/1005) | Suppress `[SILENT]` messages from chat channels | Privacy fix for internal action messages |
| [#1004](https://github.com/qwibitai/nanoclaw/pull/1004) | Dokploy and Docker Compose deployment support | Production deployment path; Docker-out-of-Docker for agent orchestration |
| [#1008](https://github.com/qwibitai/nanoclaw/pull/1008) | Documentation cleanup | Maintenance |

**Key Advances:**
- **Memory persistence** now possible via LanceDB (#1013)
- **GitHub-native agent workflows** without token leakage (#976)
- **Production deployment** story improving with Dokploy/Docker Compose (#1004)

---

## 4. Community Hot Topics

### Most Active by Engagement

| Issue/PR | Comments | Topic | Underlying Need |
|:---|:---:|:---|:---|
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) | 3 | OAuth token expiration in containers | **Unattended reliability**: Background services need credential refresh automation |
| [#865](https://github.com/qwibitai/nanoclaw/issues/865) | 3 | Container security model critique | **Zero-trust architecture**: Users want defense-in-depth, not container isolation theater |
| [#829](https://github.com/qwibitai/nanoclaw/issues/829) | 1 | SOUL.md anti-fabrication rules | **Observability/debuggability**: Users need to trust agent logs and tool execution claims |

### Analysis

The top discussions reveal a maturing user base moving past "does it work?" to "can I trust it in production?" The OAuth expiration issue (#730) is a **daily operational pain** for Claude Code CLI users. The security critique (#865) from @calebfaruki is particularly notable — it argues that NanoClaw's current architecture trusts the agent too much, suggesting scripts should live at the orchestrator level with containers receiving only validated, sanitized inputs.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---:|
| **High** | [#730](https://github.com/qwibitai/nanoclaw/issues/730) | `CLAUDE_CODE_OAUTH_TOKEN` expires overnight, containers fail with 401 | ❌ |
| **High** | [#341](https://github.com/qwibitai/nanoclaw/issues/341) | `add-discord` skill has outdated Apple Container code, breaks Docker users | ❌ |
| **High** | [#827](https://github.com/qwibitai/nanoclaw/issues/827) | `FinishReason::ToolUse` with 0 tool calls accepted as success | ✅ [#1003](https://github.com/qwibitai/nanoclaw/pull/1003) |
| **High** | [#830](https://github.com/qwibitai/nanoclaw/issues/830) | Scheduled tasks silently dropped when session busy | ❌ |
| **High** | [#989](https://github.com/qwibitai/nanoclaw/issues/989) | Gemini Pro container latency ~3.5min (123K input tokens/call) | ❌ |
| **High** | [#1009](https://github.com/qwibitai/nanoclaw/pull/1009) | Unicode surrogate sanitization for WhatsApp | 🔄 In Review |
| **High** | [#1010](https://github.com/qwibitai/nanoclaw/pull/1010) | Apple Container mount fixes | 🔄 In Review |
| **Medium** | [#973](https://github.com/qwibitai/nanoclaw/issues/973) | Setup via Claude Code "incredibly slow" | ❌ |
| **Medium** | [#993](https://github.com/qwibitai/nanoclaw/issues/993) | Podman SSH drops on macOS sleep/wake | ✅ Closed (workaround documented) |

**Stability Assessment:** Multiple high-severity bugs around **token handling**, **platform compatibility** (Apple Container vs. Docker), and **task reliability** suggest the project is pushing into production use cases faster than edge cases are being hardened. The silent task dropping (#830) is particularly concerning for automation use cases.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| [#878](https://github.com/qwibitai/nanoclaw/issues/878) / [#999](https://github.com/qwibitai/nanoclaw/pull/999) | Extend credential proxy to Groq/OpenAI | **High** | PR #999 already in review; follows established pattern |
| [#984](https://github.com/qwibitai/nanoclaw/issues/984) / [#980](https://github.com/qwibitai/nanoclaw/issues/980) | Inline compaction for token reduction | **High** | 5 related issues/PRs from @gm4leejun-stack; cost is user pain point |
| [#985](https://github.com/qwibitai/nanoclaw/issues/985) / [#981](https://github.com/qwibitai/nanoclaw/issues/981) | Response length control | **High** | Same contributor cluster, zero-token-cost implementation |
| [#986](https://github.com/qwibitai/nanoclaw/issues/986) / [#982](https://github.com/qwibitai/nanoclaw/issues/982) | CLAUDE.md auto-compression | **High** | Part of token optimization trilogy |
| [#957](https://github.com/qwibitai/nanoclaw/issues/957) | Podman as Docker alternative | **Medium** | Community demand, but requires testing matrix expansion |
| [#862](https://github.com/qwibitai/nanoclaw/pull/862) | WhatsApp file receive/send | **Medium** | PR in review, complex (Baileys integration) |
| [#920](https://github.com/qwibitai/nanoclaw/pull/920) | Feishu (Lark) channel | **Medium** | PR in review, enterprise APAC market |

**Emerging Theme:** A coordinated push around **token economics** — multiple mechanisms to reduce API costs without quality degradation. This suggests the maintainer team or a key contributor is optimizing for operational cost at scale.

---

## 7. User Feedback Summary

### Pain Points

| Issue | Quote/Signal | Category |
|:---|:---|:---|
| [#973](https://github.com/qwibitai/nanoclaw/issues/973) | *"Setup via claude code is incredibly slow, what is it so complex for setup that a plain .json file cannot handle?"* | **Onboarding friction** |
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) | Daily 401 failures requiring manual intervention | **Operational reliability** |
| [#989](https://github.com/qwibitai/nanoclaw/issues/989) | 3.5 minute latency for "simple tool tasks" | **Performance at scale** |
| [#833](https://github.com/qwibitai/nanoclaw/issues/833) | Chinese-language question about Win11 OpenCode config | **Documentation gaps for non-English users** |

### Positive Signals

- Strong skill ecosystem growth (Discord, Telegram, WhatsApp, Gmail, news briefing, memory)
- Security-conscious users engaging deeply with architecture (#865)
- Multiple deployment options emerging (Dokploy, Docker Compose, systemd/launchd)

### Use Case Evolution

Users are moving from **personal experimentation** → **team automation** → **production unattended operation**, exposing gaps in credential lifecycle management and observability.

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#341](https://github.com/qwibitai/nanoclaw/issues/341) | 19 days | **Breaking Docker users** | Maintainer review; affects `add-discord` skill core functionality |
| [#865](https://github.com/qwibitai/nanoclaw/issues/865) | 4 days | **Architectural** | Security design review; may require breaking changes to skill model |
| [#830](https://github.com/qwibitai/nanoclaw/issues/830) | 4 days | **Data loss** | Scheduled task reliability is core promise; needs priority |
| [#862](https://github.com/qwibitai/nanoclaw/pull/862) | 4 days | **Feature stagnation** | WhatsApp file support is highly requested; unclear blockers |
| [#917](https://github.com/qwibitai/nanoclaw/pull/917) | 3 days | **Large PR fatigue** | Mega-PR with 5+ features; may need decomposition for review |

**Recommendation:** The project would benefit from a **security architecture response** to #865 and a **platform compatibility matrix** to clarify Docker/Apple Container/Podman support tiers. The token optimization workstream (#980-#991) appears well-scoped but needs consolidation to avoid fragmenting the schema.

---

*Digest generated from GitHub activity 2026-03-12. All links: https://github.com/qwibitai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-03-13

## 1. Today's Overview

NullClaw demonstrates **exceptional development velocity** with 26 PRs updated in 24 hours (18 merged/closed, 8 open) and 7 active issues. The project released **v2026.3.11** with critical infrastructure fixes. Activity centers on **enterprise messaging channels** (DingTalk, Lark, Telegram) and **developer experience** (Docker, Windows support). The 69% merge rate indicates healthy code review throughput. Notable: rapid response to kernel compatibility issues and aggressive expansion of protocol support (A2A, email).

---

## 2. Releases

### [v2026.3.11](https://github.com/nullclaw/nullclaw/releases/tag/v2026.3.11)

| Category | Details |
|----------|---------|
| **CI/CD** | Release flow optimization by [@DonPrus](https://github.com/DonPrus) — faster, more reliable builds |
| **Memory Engine** | Hardened ClickHouse engine ordering and transport checks — prevents race conditions in distributed deployments |
| **Lark/Feishu** | Fixed websocket config endpoint URL truncation in release notes (completed in PR #445) |

**Migration Notes:** No breaking changes. Recommended for users running ClickHouse backend or Lark/websocket configurations.

---

## 3. Project Progress

### Major Features Landed

| PR | Author | Impact |
|:---|:---|:---|
| [#457](https://github.com/nullclaw/nullclaw/pull/457) | [@manelsen](https://github.com/manelsen) | **DingTalk full-duplex channel** — transforms send-only placeholder into production-ready bidirectional messaging with Stream Mode, reconnect logic, and card-based interactions |
| [#456](https://github.com/nullclaw/nullclaw/pull/456) | [@hfreire](https://github.com/hfreire) | **A2A (Agent-to-Agent) protocol** — JSON-RPC 2.0 endpoints enable cross-agent discovery and task delegation; positions NullClaw in emerging agent interoperability standards |
| [#451](https://github.com/nullclaw/nullclaw/pull/451) | [@sanderdewijs](https://github.com/sanderdewijs) | **Native email channel** — IMAP IDLE + polling, PII redaction, attachment handling; includes complete Python plugin example |
| [#446](https://github.com/nullclaw/nullclaw/pull/446) | [@juvenn](https://github.com/juvenn) | **YAML frontmatter skill metadata** — SKILL.md files now self-describe with version, author, dependencies |

### Critical Fixes

| PR | Author | Fixes |
|:---|:---|:---|
| [#445](https://github.com/nullclaw/nullclaw/pull/445) | [@Nauxscript](https://github.com/Nauxscript) | **Lark SIGBUS crash** on startup — websocket thread stack size increased to 2 MiB ([Issue #423](https://github.com/nullclaw/nullclaw/issues/423)) |
| [#450](https://github.com/nullclaw/nullclaw/pull/450) | [@vedmalex](https://github.com/vedmalex) | **Telegram topic-specific agent bindings** — enables true multi-agent isolation per forum topic ([Issue #434](https://github.com/nullclaw/nullclaw/issues/434)) |
| [#436](https://github.com/nullclaw/nullclaw/pull/436) + [#458](https://github.com/nullclaw/nullclaw/pull/458) | [@vedmalex](https://github.com/vedmalex), [@manelsen](https://github.com/manelsen) | **Telegram forum topic hardening** — routing fixes, task visibility, configurable command menus ([Issue #435](https://github.com/nullclaw/nullclaw/issues/435)) |
| [#395](https://github.com/nullclaw/nullclaw/pull/395) | [@gula00](https://github.com/gula00) | **QQ image reliability** — localizes attachments before vision processing |

### Developer Experience

| PR | Author | Contribution |
|:---|:---|:---|
| [#452](https://github.com/nullclaw/nullclaw/pull/452) | [@neoliuhua](https://github.com/neoliuhua) | **Windows installation guide** (EN/ZH) |
| [#454](https://github.com/nullclaw/nullclaw/pull/454) | [@telagod](https://github.com/telagod) | Stats refresh: 5,300+ tests, 249K LOC, 35+ tools, 10 memory engines; `history` CLI command documented |

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Item | Comments | Analysis |
|:---|:---|:---:|:---|
| 1 | [#423](https://github.com/nullclaw/nullclaw/issues/423) Lark websocket crash | **6** | **Resolved** — Feishu connection failures traced to stack overflow; fix deployed in hours. Pattern: rapid response to Chinese enterprise messaging issues. |
| 2 | [#435](https://github.com/nullclaw/nullclaw/issues/435) Telegram forum gaps | **2** | **Resolved** — Multi-faceted UX report spanning routing, task visibility, menus. Demonstrates NullClaw's production Telegram usage depth. |
| 3 | [#434](https://github.com/nullclaw/nullclaw/issues/434) Topic isolation request | **1** | **Resolved** — User expected multi-agent topic separation; confirmed as missing feature, implemented same day. |

### Underlying Needs Detected
- **Enterprise China market**: Lark/Feishu + DingTalk fixes show strategic focus
- **Multi-tenancy**: Forum topic isolation pattern recurring across channels
- **Operator ergonomics**: Command menus, task visibility = real deployment friction

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Impact |
|:---|:---|:---:|:---|:---|
| 🔴 **High** | [#448](https://github.com/nullclaw/nullclaw/issues/448) `statx` failure on Linux <4.11 | Open | [#462](https://github.com/nullclaw/nullclaw/pull/462) | Embedded/IoT deployments (RPi, NAS, TV boxes) blocked; affects Zig 0.15.2 file I/O |
| 🟡 **Medium** | [#447](https://github.com/nullclaw/nullclaw/issues/447) DingTalk "send-only" confusion | Open | [#457](https://github.com/nullclaw/nullclaw/pull/457) **merged** | User confusion until full-duplex PR lands; documentation gap |
| 🟢 **Low** | [#376](https://github.com/nullclaw/nullclaw/issues/376) DingTalk receive capability question | Open | — | Pre-dates #457; likely closable now |

**Stability Assessment:** No critical open crashes. Kernel compatibility issue has active fix PR. Release cadence (daily) suggests robust CI.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **Official Docker Hub image** | [#449](https://github.com/nullclaw/nullclaw/issues/449), [#463](https://github.com/nullclaw/nullclaw/pull/463) | **90%** | PR exists, docs updated; infrastructure ready |
| **Discord sender identity + reply detection** | [#460](https://github.com/nullclaw/nullclaw/pull/460) | **75%** | PR open, closes parity gap with Signal/Telegram |
| **Auto-detect system_prompt file paths** | [#459](https://github.com/nullclaw/nullclaw/pull/459) | **70%** | Clean DX improvement, low risk |
| **Email channel production** | [#451](https://github.com/nullclaw/nullclaw/pull/451) | **65%** | Feature-complete but needs review bandwidth |
| **Cron anchored step schedules** | [#464](https://github.com/nullclaw/nullclaw/pull/464) | **60%** | Niche fix, depends on maintainer priority |

**Emerging Patterns:** Configuration ergonomics (file auto-detection, Docker), protocol completeness (Discord parity), enterprise scheduling (cron fixes).

---

## 7. User Feedback Summary

### Pain Points
| Source | Issue | Severity |
|:---|:---|:---:|
| Embedded users | Old kernel incompatibility (#448) | Blocking |
| Docker users | No official image path (#449) | Friction |
| Feishu operators | Crash on startup (#423) | **Resolved** |
| Telegram multi-agent admins | Topic collision (#434) | **Resolved** |

### Use Cases Validated
- **Enterprise China**: DingTalk + Lark/Feishu production deployments
- **Community management**: Telegram forum topics with agent specialization
- **Cross-platform agents**: A2A protocol adoption beginning
- **Legacy infrastructure**: Email integration for workflow automation

### Satisfaction Signals
- 6-comment resolution on #423 shows responsive support
- Same-day implementation of #434 indicates user-driven prioritization
- Windows guide contribution (#452) = growing community documentation

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#376](https://github.com/nullclaw/nullclaw/issues/376) DingTalk receive question | 4 days | **Stale** | Close as resolved by #457 |
| [#449](https://github.com/nullclaw/nullclaw/issues/449) Docker Hub request | 1 day | Low | Merge #463, close |
| [#448](https://github.com/nullclaw/nullclaw/issues/448) Kernel compatibility | 1 day | Medium | Review #462 |
| [#455](https://github.com/nullclaw/nullclaw/pull/455) "openclaw trader daemon" | 1 day | **Unclear** | Spam/abandoned? No description, numeric title |

**Maintainer Attention:** PR #455 requires triage — possible spam or incomplete submission. Otherwise backlog is healthy with active resolution.

---

*Digest generated from 26 PRs, 7 issues, 1 release on 2026-03-13*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-13

## 1. Today's Overview

IronClaw shows **high-velocity development** with 50 issues and 50 PRs updated in the last 24 hours, indicating active bug-bash and stabilization efforts. The project is in a **critical stabilization phase** with two staging-to-main promotions merged (#1065, #1032) and a major CI enforcement PR (#1087) targeting production code safety. No new releases were cut today, though v0.19.0 release preparation is underway (#973). The dominant theme is **post-bug-bash cleanup**: 14 issues were closed, but 36 remain open with P1-critical items concentrated in Google OAuth, Telegram channel reliability, and routine engine correctness. The maintainers appear focused on hardening core infrastructure before the v0.19.0 release.

---

## 2. Releases

**No new releases today.** 

Release v0.19.0 is in preparation ([PR #973](https://github.com/nearai/ironclaw/pull/973)), marked with ⚠️ **API breaking changes** due to externally-constructible struct field additions. Users depending on struct literal construction should review before upgrading.

---

## 3. Project Progress

### Merged/Closed PRs (26 total, selected highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#1065](https://github.com/nearai/ironclaw/pull/1065) | Staging promotion (2026-03-12 18:17 UTC) | Deploys batch to main |
| [#1032](https://github.com/nearai/ironclaw/pull/1032) | Staging promotion (2026-03-12 11:12 UTC) | Earlier batch deployment |
| [#1070](https://github.com/nearai/ironclaw/pull/1070) | Extension lifecycle bug fixes + comprehensive E2E tests | **Critical stability** for WASM tools/channels |
| [#1086](https://github.com/nearai/ironclaw/pull/1086) | WASM tool schema discovery + prompt-size regression fix | Enables rich tool metadata without token bloat |
| [#1072](https://github.com/nearai/ironclaw/pull/1072) | Bug bash UX fixes: tool name formatting, timestamp logging, Telegram notifications | Polish items from user feedback |
| [#333](https://github.com/nearai/ironclaw/pull/333) | Slack Socket Mode support | **Major feature**: NAT-friendly Slack connectivity |
| [#257](https://github.com/nearai/ironclaw/pull/257) | Tool access in lightweight routines | Expands routine capabilities |
| [#952](https://github.com/nearai/ironclaw/pull/952) | Commit history in staging promotion PRs | Improved release transparency |

### Active Development (Open PRs)

- **Programmatic Tool Calling (PTC)** ([#625](https://github.com/nearai/ironclaw/pull/625)): Core infrastructure for tool-to-tool invocation without LLM round-trips
- **No-panics CI enforcement** ([#1087](https://github.com/nearai/ironclaw/pull/1087)): Aggressive production safety mandate across all scopes
- **Codex CLI OAuth reuse** ([#693](https://github.com/nearai/ironclaw/pull/693)): ChatGPT subscription integration

---

## 4. Community Hot Topics

### Most Active Issues (by comment engagement)

| Issue | Comments | Status | Core Concern |
|:---|:---:|:---|:---|
| [#1060](https://github.com/nearai/ironclaw/issues/1060) — Cannot install extensions | 3 | 🔴 OPEN | **Extension distribution broken**: 404 on WASM release downloads blocking new installs |
| [#299](https://github.com/nearai/ironclaw/issues/299) — MCP server authentication | 2 | ✅ CLOSED | MCP JSON configuration flexibility (resolved) |
| [#996](https://github.com/nearai/ironclaw/issues/996) — Tool approval modal requires reload | 1 | ✅ CLOSED | Real-time UI synchronization |

### Underlying Needs Analysis

- **Extension reliability** (#1060): Users cannot install new extensions due to broken release artifact URLs—this is a **distribution infrastructure failure**, not code
- **Cross-platform authentication**: Multiple OAuth-related issues suggest the auth flow abstraction leaks platform-specific details (Telegram vs. web)
- **Real-time UX expectations**: Users expect immediate feedback for approval flows; async notification gaps create confusion

---

## 5. Bugs & Stability

### Critical/High Severity (P1/CRITICAL)

| Issue | Severity | Status | Description | Fix PR |
|:---|:---|:---|:---|:---:|
| [#1033](https://github.com/nearai/ironclaw/issues/1033) | **CRITICAL:90** | ✅ CLOSED | Webhook auth bypass when secret unconfigured | [#1083](https://github.com/nearai/ironclaw/pull/1083) |
| [#823](https://github.com/nearai/ironclaw/issues/823) | **CRITICAL:88** | 🔴 OPEN | N+1 query in event trigger loop (performance) | — |
| [#813](https://github.com/nearai/ironclaw/issues/813) | **CRITICAL:50** | 🔴 OPEN | Non-transactional context updates (race condition) | — |
| [#992](https://github.com/nearai/ironclaw/issues/992) | P1 | 🔴 OPEN | Google OAuth URL malformed (`clientid` vs `client_id`) from Telegram | — |
| [#994](https://github.com/nearai/ironclaw/issues/994) | P1 | 🔴 OPEN | Routine broadcast fails: `Invalid chat_id 'default'` | — |
| [#995](https://github.com/nearai/ironclaw/issues/995) | P1 | 🔴 OPEN | Routines invisible cross-channel (web ↔ Telegram) | — |
| [#998](https://github.com/nearai/ironclaw/issues/998) | P1 | 🔴 OPEN | `routine_update` rejects schedule changes on non-cron routines | [#1078](https://github.com/nearai/ironclaw/issues/1078) related |
| [#999](https://github.com/nearai/ironclaw/issues/999) | P1 | 🔴 OPEN | Google Sheets 403 after OAuth (identity propagation) | — |
| [#1076](https://github.com/nearai/ironclaw/issues/1076) | P1 | 🔴 OPEN | Event trigger cache not invalidated on mutations | — |

### Pattern: Telegram + Google Integration Fragility

6 of 9 open P1 issues involve **Telegram channel** or **Google OAuth/Sheets** interactions, suggesting these are the least mature integration surfaces. The `chat_id="default"` bug (#994) and OAuth parameter mangling (#992) indicate insufficient platform-specific testing.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in v0.20+ |
|:---|:---|:---:|
| **E2E test automation with Claude Code + Chrome MCP** | [#1044](https://github.com/nearai/ironclaw/issues/1044) | High — explicit priority for 5 bug bash tests |
| **Configurable hybrid search weights (RRF k)** | [#169](https://github.com/nearai/ironclaw/issues/169) | Medium — architectural debt noted |
| **Self-repairing agents** (stuck job detection) | [#712](https://github.com/nearai/ironclaw/pull/712) | High — PR active, closes #647 |
| **Large message splitting (Telegram)** | [#1084](https://github.com/nearai/ironclaw/pull/1084) | High — PR open, user-facing limitation |
| **Programmatic Tool Calling (PTC)** | [#625](https://github.com/nearai/ironclaw/pull/625) | High — infrastructure PR in review |

### Architectural Direction

The **no-panics CI mandate** (#1087) signals a shift toward **production-hardened reliability** over feature velocity. Combined with PTC and self-repair capabilities, IronClaw is positioning for **autonomous agent operation** with reduced human intervention.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Issue | User Experience | Frequency |
|:---|:---|:---:|
| Extension installation | "Primary install failed: HTTP 404" — complete blocker | 🔴 High |
| OAuth flows | Multiple retry attempts needed; opaque failures | 🟡 Medium |
| Cross-channel state | "Your routine list is currently empty" (false negative) | 🟡 Medium |
| Tool approval UX | "Error: Waiting for approval" — alarming language | 🟢 Low (fixed) |
| Rate limiting | "retry after None" — unactionable error | 🟡 Medium |

### Satisfaction Indicators

- **Positive**: Bug bash responsiveness — 14 issues closed in 24h shows maintainer engagement
- **Negative**: Infrastructure reliability (release artifacts, OAuth endpoints) lagging code quality

---

## 8. Backlog Watch

### Needs Maintainer Attention

| Issue/PR | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#823](https://github.com/nearai/ironclaw/issues/823) — N+1 query | 2 days | Performance degradation at scale | Assign to database perf specialist |
| [#813](https://github.com/nearai/ironclaw/issues/813) — Non-transactional updates | 2 days | Data inconsistency under load | Design transaction boundary review |
| [#693](https://github.com/nearai/ironclaw/pull/693) — Codex CLI OAuth | 6 days | External dependency (OpenAI auth format) | Review security implications of token reuse |
| [#1060](https://github.com/nearai/ironclaw/issues/1060) — Extension 404s | 1 day | **New user onboarding broken** | **Urgent**: Fix release artifact publishing |

### Recommendation

The [#1060](https://github.com/nearai/ironclaw/issues/1060) extension installation failure should be **treated as P0** — it blocks the primary user journey for new adopters, undermining the v0.19.0 release readiness.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-13

## 1. Today's Overview

LobsterAI shows **strong development velocity** with 10 PRs processed in 24 hours (9 merged/closed, 1 open) and a fresh patch release (v0.2.4). The project is actively stabilizing its core infrastructure—gateway performance optimizations and critical bug fixes dominated today's activity. Community engagement is moderate with 4 new issues filed, primarily around configuration confusion and platform-specific quirks. The high merge rate (90%) indicates healthy code review throughput. However, the single open PR for MiniMax provider updates suggests ongoing provider ecosystem maintenance remains a priority.

---

## 2. Releases

### v0.2.4 (2026-03-12)
**[Full Changelog](https://github.com/netease-youdao/LobsterAI/compare/v0.2.3)**

| PR | Author | Description |
|:---|:---|:---|
| [#393](https://github.com/netease-youdao/LobsterAI/pull/393) | @fisherdaddy | **fix:** IM channel connectivity test bug |
| [#396](https://github.com/netease-youdao/LobsterAI/pull/396) | @fisherdaddy | **fix:** Application stuck in loading state on startup |

**Assessment:** Patch release addressing two critical stability issues. No breaking changes. Users experiencing startup hangs or IM integration failures should upgrade immediately.

---

## 3. Project Progress

### Major Infrastructure Improvements

| PR | Author | Impact |
|:---|:---|:---|
| [#395](https://github.com/netease-youdao/LobsterAI/pull/395) | @btc69m979y-dotcom | **Gateway startup optimization** — Reduced launch time from **180s+ timeout to ~85s (first run) / ~15s (cached)** via esbuild bundling, compile cache, and plugin precompilation |
| [#380](https://github.com/netease-youdao/LobsterAI/pull/380) | @mutjan | **Custom URI protocol support** — Enables deep links to Obsidian, VS Code, Figma, etc. from markdown |
| [#387](https://github.com/netease-youdao/LobsterAI/pull/387) | @Blxsseast | **macOS code signing fix** — Resolved `RangeError` and `ENOENT` errors in `@electron/osx-sign` |

### Bug Fixes (in v0.2.4)
- IM channel connectivity testing regression
- Infinite loading state on application startup

---

## 4. Community Hot Topics

| Issue/PR | Activity | Analysis |
|:---|:---|:---|
| [#366](https://github.com/netease-youdao/LobsterAI/issues/366) | 2 comments | **Gateway configuration confusion** — User unclear on default port (18789) and service loading. Indicates documentation gap around `openclaw gateway status` troubleshooting. |
| [#390](https://github.com/netease-youdao/LobsterAI/issues/390) | 1 comment | **Apple Silicon update detection failure** — v0.2.2 ARM64 builds fail to detect v0.2.3. Platform-specific release channel issue? |

**Underlying Needs:** Better observability for gateway service state and more robust cross-platform update mechanisms.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| 🔴 **High** | [#390](https://github.com/netease-youdao/LobsterAI/issues/390) — Apple Silicon update detection broken | **Open** | None |
| 🟡 **Medium** | [#366](https://github.com/netease-youdao/LobsterAI/issues/366) — Gateway service config/PATH issues | **Open** | None |
| 🟢 **Resolved** | Startup infinite loading | Fixed | [#396](https://github.com/netease-youdao/LobsterAI/pull/396) |
| 🟢 **Resolved** | IM connectivity test bug | Fixed | [#393](https://github.com/netease-youdao/LobsterAI/pull/393) |
| 🟢 **Resolved** | macOS code signing failures | Fixed | [#387](https://github.com/netease-youdao/LobsterAI/pull/387) |

**Risk:** Platform-specific update mechanism (#390) may affect user retention on ARM64 Macs if unaddressed.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Release |
|:---|:---|:---|
| [#391](https://github.com/netease-youdao/LobsterAI/issues/391) | **Prompt optimization button** for non-technical users | ⭐⭐⭐⭐ High — Low implementation cost, high UX impact |
| [#398](https://github.com/netease-youdao/LobsterAI/issues/398) | **Feishu plugin memory reset commands** (`/new`, `/reset`, `/clear`) | ⭐⭐⭐ Medium — IM plugin enhancement, aligns with active IM work |
| [#388](https://github.com/netease-youdao/LobsterAI/pull/388) | **MiniMax provider URL update** (overseas endpoint) | ⭐⭐⭐⭐⭐ Near-certain — PR open, provider maintenance critical |

**Emerging Pattern:** Strong focus on **accessibility for non-technical users** (prompt optimization) and **enterprise IM integration polish** (Feishu, connectivity testing).

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Segment | Core Frustration |
|:---|:---|:---|
| #366 | Power users / self-hosters | Gateway debugging is opaque; service management unclear |
| #390 | Apple Silicon Mac users | Update mechanism erodes trust in release channel |
| #398 | Feishu enterprise users | No control over conversation context/memory |

### Positive Signals
- Gateway performance fix (#395) addresses a **major deployment blocker** (180s → 15s)
- Custom URI support (#380) enables power-user workflows (Obsidian/VS Code integration)

### Satisfaction Gap
**Technical users** well-served (performance, protocols); **casual users** need more hand-holding (prompt optimization UI, clearer status indicators).

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#366](https://github.com/netease-youdao/LobsterAI/issues/366) | 3 days | Documentation/UX debt | Clarify gateway port defaults and `LaunchAgent` setup in docs |
| [#388](https://github.com/netease-youdao/LobsterAI/pull/388) | 1 day | Provider reliability | Review and merge MiniMax URL update for international users |

**No critical stale items** — maintainer responsiveness appears healthy (same-day merges for fixes).

---

*Digest generated from 10 PRs, 4 issues, and 1 release on 2026-03-13.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-13

---

## 1. Today's Overview

TinyClaw experienced **exceptionally high development velocity** in the past 24 hours, with 11 PRs processed (9 merged/closed) and 2 patch releases shipped. The project is in active stabilization mode following a critical v0.0.10 release that broke fresh installations due to missing shell script assets. Core contributor @jlia0 single-handedly addressed the installation crisis, modernized the CLI architecture (ESM migration), and delivered substantial TinyOffice enhancements including chat rooms, projects, and org-chart visualization. The rapid-fire releases (v0.0.11, v0.0.12) indicate mature CI/CD practices and responsive maintainership. Community engagement remains moderate with 4 active issues, though one persistent Telegram reliability bug continues awaiting resolution.

---

## 2. Releases

### [v0.0.12](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.12) — 2026-03-12
| Aspect | Details |
|--------|---------|
| **Type** | Feature release |
| **Breaking Changes** | None |
| **Migration** | Automatic — new `agent_messages` table created on startup |

**Key Changes:**
- **Agent Message Persistence & Event Stream** ([#202](https://github.com/TinyAGI/tinyclaw/pull/202)): New SQLite-backed chat history with simplified SSE events. Developers no longer need to parse complex `chain_step` lifecycles; single `agent_message` event fires per response.

### [v0.0.11](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.11) — 2026-03-12
| Aspect | Details |
|--------|---------|
| **Type** | Hotfix |
| **Breaking Changes** | None |
| **Migration** | Re-install recommended for affected users |

**Key Changes:**
- Fixed breaking imports from legacy `setup-wizard.sh` shell scripts (co-authored by Claude Opus 4.6)

---

## 3. Project Progress

### Merged/Closed PRs (9 items)

| PR | Author | Impact |
|:---|:---|:---|
| [#202](https://github.com/TinyAGI/tinyclaw/pull/202) feat(api): agent message persistence & SSE stream | @jlia0 | **Core infrastructure** — enables reliable chat history for all UI clients |
| [#206](https://github.com/TinyAGI/tinyclaw/pull/206) fix(cli): ESM conversion for @clack/prompts v1.x | @jlia0 | **Architecture modernization** — unblocks modern CLI dependencies |
| [#204](https://github.com/TinyAGI/tinyclaw/pull/204) feat(settings): interactive setup wizard | @jlia0 | **Onboarding** — replaces blank config page with guided first-run experience |
| [#201](https://github.com/TinyAGI/tinyclaw/pull/201) feat(office): organization chart visualization | @jlia0 | **TinyOffice UX** — hierarchical team/agent visualization |
| [#200](https://github.com/TinyAGI/tinyclaw/pull/200) fix(telegram): polling stall after network reconnect | @jlia0 | **Reliability** — partial fix for connection resilience (see open #126) |
| [#199](https://github.com/TinyAGI/tinyclaw/pull/199) feat: chat rooms & projects in TinyOffice | @jlia0 | **Major UX redesign** — Slack-style channels, kanban boards |
| [#203](https://github.com/TinyAGI/tinyclaw/pull/203) feat: projects & chat rooms management | @jlia0 | **Feature completion** — full CRUD for new abstractions |
| [#198](https://github.com/TinyAGI/tinyclaw/pull/198) fix: remove stale setup-wizard.sh references | @jlia0 | **Critical fix** — resolves #197 installation failure |
| [#195](https://github.com/TinyAGI/tinyclaw/pull/195) fix: convert send_message skill to plain Node.js | @jlia0 | **Stability** — eliminates ts-node dependency in runtime |

**Progress Assessment:** TinyOffice evolved from configuration dashboard to full project management platform. Core runtime gained persistence layer. CLI modernized to ESM.

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Item | Comments | Analysis |
|:---|:---|:---:|:---|
| 1 | [#126 Telegram Bot Auto-Reconnect Failure](https://github.com/TinyAGI/tinyclaw/issues/126) | 6 | **Long-running reliability issue**. Despite PR #200's partial fix, users report persistent reconnection failures. Underlying need: production-grade channel stability for 24/7 deployments. |
| 2 | [#197 Missing setup-wizard.sh (CLOSED)](https://github.com/TinyAGI/tinyclaw/issues/197) | 2 | Installation friction for new users — rapidly resolved but indicates release QA gap. |
| 3 | [#193 TinyOffice first-run web onboarding](https://github.com/TinyAGI/tinyclaw/issues/193) | 1 | Strategic direction alignment — PR #204 addresses this with interactive wizard, though web-native onboarding remains unfulfilled. |

**Community Signal:** Users want "it just works" deployment experience and resilient integrations. The gap between CLI wizard (#204) and requested web onboarding (#193) suggests opportunity for browser-based initialization flow.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available | Notes |
|:---|:---|:---:|:---:|:---|
| 🔴 **Critical** | [#197](https://github.com/TinyAGI/tinyclaw/issues/197) Install fails on v0.0.10 | **CLOSED** | ✅ [#198](https://github.com/TinyAGI/tinyclaw/pull/198) | Resolved in v0.0.11 |
| 🟡 **Medium** | [#126](https://github.com/TinyAGI/tinyclaw/issues/126) Telegram auto-reconnect failure | **OPEN** | ⚠️ Partial ([#200](https://github.com/TinyAGI/tinyclaw/pull/200)) | 30s timeout added; root cause may require upstream library changes |
| 🟡 **Medium** | [#205](https://github.com/TinyAGI/tinyclaw/issues/205) @clack/prompts import error | **CLOSED** | ✅ [#206](https://github.com/TinyAGI/tinyclaw/pull/206) | ESM migration complete |

**Stability Trend:** Positive — all critical/high severity issues from 2026-03-12 resolved within hours. Telegram reliability remains the outstanding operational concern.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **Complete TinyOffice web onboarding** | [#193](https://github.com/TinyAGI/tinyclaw/issues/193) | High | CLI wizard exists (#204); web port is natural extension |
| **Real-time agent execution streaming** | [#196](https://github.com/TinyAGI/tinyclaw/pull/196) | **In Progress** | Open PR with active development |
| **Project rebrand to TinyAGI** | [#191](https://github.com/TinyAGI/tinyclaw/pull/191) | Moderate | Large surface area change; may await major version |
| **Enhanced Telegram reliability** | [#126](https://github.com/TinyAGI/tinyclaw/issues/126) | Moderate | User pain point; may require architectural changes |

**Predicted v0.0.13 Focus:** Agent execution streaming (#196), continued TinyOffice polish, potential rebrand completion.

---

## 7. User Feedback Summary

### Pain Points
| Source | Issue | Impact |
|:---|:---|:---|
| @crisdias | First install completely broken | **Blocker for adoption** — fixed rapidly |
| @debamitro | CLI pairing commands fail at runtime | **Workflow interruption** — ESM fix deployed |
| @dpbmaverick98 | Telegram bot requires manual restart | **Operational burden** — ongoing |

### Positive Signals
- Rapid maintainer response (issues closed same day)
- Rich feature delivery (chat rooms, projects, org charts)
- Modern architecture adoption (ESM, SQLite persistence)

### Use Case Evolution
Users progressing from **personal experimentation** → **team coordination** → **24/7 production deployment**, exposing infrastructure gaps (Telegram reliability) that didn't manifest in casual use.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#126](https://github.com/TinyAGI/tinyclaw/issues/126) Telegram reconnect | 24 days | **User attrition** | Dedicated investigation; consider alternative Bot API libraries |
| [#191](https://github.com/TinyAGI/tinyclaw/pull/191) Rebrand PR | 2 days | Merge conflict accumulation | Decision: merge for v0.1.0 or close |
| [#196](https://github.com/TinyAGI/tinyclaw/pull/196) Execution streaming | 1 day | — | Code review, merge readiness |

**Maintainer Attention Required:** #126 represents the longest-standing user-visible defect and affects production deployments. Consider prioritizing over feature work.

---

*Digest generated from TinyClaw GitHub activity 2026-03-12 → 2026-03-13*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-13

## 1. Today's Overview

Moltis shows **strong development velocity** with 27 tracked items updated in the last 24 hours (10 issues, 17 PRs), indicating an active pre-release stabilization period. The project closed 6 issues and merged 5 PRs while maintaining 12 open PRs under active review. Notably, the team is aggressively addressing **platform compatibility gaps** (Apple Container, Docker, Android/Termux) and **MCP ecosystem integration** pain points. No new releases were cut, suggesting maintainers are accumulating fixes for a significant version bump. The high PR-to-issue ratio (1.7:1) signals healthy engineering throughput, though the 4 remaining open bugs indicate stabilization work remains.

---

## 2. Releases

**No new releases** — version hold pattern continues.

---

## 3. Project Progress

### Merged/Closed PRs Today (5 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#405](https://github.com/moltis-org/moltis/pull/405) | @penso | Harden Apple Container bootstrap execs — fixes WORKDIR chdir failures by running provisioning from `/tmp` and recreating `/home/sandbox` | **Critical fix** for macOS sandbox stability; closes [#159](https://github.com/moltis-org/moltis/issues/159) |
| [#401](https://github.com/moltis-org/moltis/pull/401) | @penso | Generic provider env bootstrap for Docker — adds `MOLTIS_PROVIDER`/`MOLTIS_API_KEY` env var support with short aliases | Enables containerized deployment flexibility; closes [#125](https://github.com/moltis-org/moltis/issues/125) |
| [#398](https://github.com/moltis-org/moltis/pull/398) | @penso | Installation feedback fixes — Tailscale onboarding field fix, better error messaging, UI polish | Improves first-run experience based on Discord user testing |
| [#416](https://github.com/moltis-org/moltis/pull/416) | @penso | Secret remote MCP URLs and headers — query-string key support, header config, OAuth sanitization | **Major MCP ecosystem unlock**; closes [#140](https://github.com/moltis-org/moltis/issues/140) and [#119](https://github.com/moltis-org/moltis/issues/119) |
| [#400](https://github.com/moltis-org/moltis/pull/400) | @penso | Legacy memory embedding key support — backward compatibility for deprecated config keys with migration warnings | Smooths upgrade path; closes [#109](https://github.com/moltis-org/moltis/issues/109) |

**Key advancement**: MCP (Model Context Protocol) support matured significantly with authentication and header flexibility, addressing the dominant integration pattern for external tools.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#176](https://github.com/moltis-org/moltis/issues/176) — Add datetime to system prompt context | **13 comments**, 👍 1, open since Feb 17 | **Most discussed open issue**. Debate centers on *how* to inject temporal awareness without bloating prompts. Underlying need: agents lacking time context produce stale or temporally confused outputs. Likely pending architectural decision on context injection strategy. |
| [#367](https://github.com/moltis-org/moltis/issues/367) — Trusted-network proxy shutdown (CLOSED) | 2 comments, fixed by PR | Revealed async Rust channel lifetime bug; fix validates sandbox networking reliability. |
| [#420](https://github.com/moltis-org/moltis/issues/420) — `web_fetch` panic on non-UTF8 pages | New, 0 comments | **Emerging severity**: UTF-8 boundary panic suggests unsafe string slicing. Affects legacy web content scraping reliability. |

**Community signal**: Users are pushing for **agent temporal awareness** and **robust web data ingestion** — core capabilities for autonomous operation.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| 🔴 **High** | [#420](https://github.com/moltis-org/moltis/issues/420) — `web_fetch` panics on legacy/non-UTF8 pages: "byte index is not a char boundary" | **Open**, reported 2026-03-12 | None yet — needs unsafe string handling audit |
| 🟡 **Medium** | [#423](https://github.com/moltis-org/moltis/issues/423) — Docker + Docker sandbox nested container issues | **Open**, reported 2026-03-12 | None yet — Docker-in-Docker complexity |
| 🟢 **Resolved** | [#367](https://github.com/moltis-org/moltis/issues/367) — Trusted-network proxy immediate shutdown | Closed 2026-03-12 | [#405](https://github.com/moltis-org/moltis/pull/405) related |
| 🟢 **Resolved** | [#159](https://github.com/moltis-org/moltis/issues/159) — Apple Container WORKDIR chdir error | Closed 2026-03-12 | [#405](https://github.com/moltis-org/moltis/pull/405) |

**Stability assessment**: Two fresh bugs from 2026-03-12 suggest edge case exposure in web scraping and container nesting. The UTF-8 panic is particularly concerning for production web agent deployments.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Prediction |
|:---|:---|:---|
| **Prebuilt Android/Termux binary** | [#424](https://github.com/moltis-org/moltis/issues/424) | **Likely near-term** — low friction, expands mobile/edge deployment; Rust cross-compilation infrastructure exists |
| **Datetime in system prompts** | [#176](https://github.com/moltis-org/moltis/issues/176) | **Pending design** — high demand but architectural debate; may land with broader "context enrichment" feature |
| **Configurable MCP timeouts** | [#419](https://github.com/moltis-org/moltis/pull/419) (PR open) | **Very likely next release** — addresses immediate `codex mcp-server` compatibility pain |
| **Vulkan GGUF support** | [#408](https://github.com/moltis-org/moltis/pull/408) (PR open) | **Opt-in feature** — enables AMD/Intel GPU local LLM inference; niche but strategically important for local-first users |
| **Workflow daemon foundation** | [#421](https://github.com/moltis-org/moltis/pull/421) (PR open) | **Major architectural addition** — `moltis-symphony` crate suggests orchestration layer; likely v0.x milestone feature |

---

## 7. User Feedback Summary

### Pain Points
- **Container sandbox brittleness**: Apple Container and Docker sandbox issues (#159, #423) indicate cross-platform container abstraction remains challenging
- **MCP integration friction**: Authentication and timeout limitations required urgent fixes (#416, #419) — users adopting MCP servers at scale
- **Web content handling**: UTF-8 assumptions break real-world scraping (#420)

### Positive Signals
- **Deployment flexibility**: Strong appreciation for "single binary, multi-provider" design (noted in [#125](https://github.com/moltis-org/moltis/issues/125))
- **Ecosystem adoption**: Added to Yantra homelab app store; Tailscale integration feedback loop active
- **Responsive maintenance**: 6/10 issues closed in 24h demonstrates healthy maintainer velocity

### Use Case Evolution
Users are deploying Moltis in **self-hosted homelab environments**, **containerized production setups**, and requesting **mobile/edge (Android)** support — indicating demand spectrum expansion beyond desktop development tools.

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#176](https://github.com/moltis-org/moltis/issues/176) — Datetime context | 24 days | Medium | Architectural decision on context injection API |
| [#424](https://github.com/moltis-org/moltis/issues/424) — Android/Termux | <1 day | Low | CI/CD pipeline extension for Android targets |
| [#420](https://github.com/moltis-org/moltis/issues/420) — UTF-8 panic | <1 day | **High** | Immediate string safety audit; regression test for legacy encodings |
| [#423](https://github.com/moltis-org/moltis/issues/423) — Docker nesting | <1 day | Medium | Reproduction case validation; potential documentation fix vs. code fix |

**Maintainer attention recommended**: [#176](https://github.com/moltis-org/moltis/issues/176) requires product decision to unblock; [#420](https://github.com/moltis-org/moltis/issues/420) is a fresh crash report needing triage.

---

*Digest generated from moltis-org/moltis GitHub activity 2026-03-12 to 2026-03-13.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-13

## 1. Today's Overview

CoPaw shows **high development velocity** with 100 items updated in 24 hours (50 issues, 50 PRs), indicating an active but potentially strained development cycle. The v0.0.7 release dropped today with a significant security feature (Tool Guard), yet the community is grappling with **upgrade friction** — multiple reports of version migration failures, configuration loss, and UI regressions. The project is at a critical inflection point: major architectural work (multi-agent/multi-workspace) is in progress while users struggle with basic stability. First-time contributors remain engaged (6 PRs), but maintainer bandwidth appears stretched given the volume of unresolved critical bugs.

---

## 2. Releases

### v0.0.7 (2026-03-12)
🔗 https://github.com/agentscope-ai/CoPaw/releases/tag/v0.0.7

| Aspect | Details |
|--------|---------|
| **Headline** | Tool Guard security layer |
| **Key Addition** | Pre-execution security scanning for tool parameters — blocks risky patterns (`rm`, `mv` in shell commands) pending user approval via `/approve` |
| **New UI** | Security settings page for managing approvals |
| **Migration Risk** | **HIGH** — Multiple reports of v0.0.7 breaking existing configurations, skill display duplication, and data loss on container restart |

**Breaking Changes Detected:**
- Skill display logic changed, causing duplication across `active`/`customized`/`venv` scopes ([#1370](https://github.com/agentscope-ai/CoPaw/issues/1370))
- Model configuration persistence broken in containerized deployments ([#1382](https://github.com/agentscope-ai/CoPaw/issues/1382), [#1384](https://github.com/agentscope-ai/CoPaw/issues/1384))

---

## 3. Project Progress

### Merged/Closed PRs (23 total, selected highlights)

| PR | Description | Impact |
|----|-------------|--------|
| [#1392](https://github.com/agentscope-ai/CoPaw/pull/1392) | Feishu channel session resolution tests | Reliability ↑ |
| [#1389](https://github.com/agentscope-ai/CoPaw/pull/1389) | Discord streaming responses + typing indicator | UX ↑ |
| [#1235](https://github.com/agentscope-ai/CoPaw/pull/1235) | Skill metadata descriptions in unified card layout | Discoverability ↑ |
| [#1262](https://github.com/agentscope-ai/CoPaw/pull/1262) | Fix cron request context preservation | Stability ↑ |
| [#1368](https://github.com/agentscope-ai/CoPaw/pull/1368) → superseded by [#1375](https://github.com/agentscope-ai/CoPaw/pull/1375) | Multi-agent/multi-workspace architecture (WIP) | **Major architectural shift** |
| [#1369](https://github.com/agentscope-ai/CoPaw/pull/1369) | Fix skill import failure with `/` in names | Bug fix |
| [#1373](https://github.com/agentscope-ai/CoPaw/pull/1373) | Fix page refresh redirect to chat | UX fix |

### Active Development (Open PRs)
- **QQ channel via NapCat/OneBot 11** ([#1290](https://github.com/agentscope-ai/CoPaw/pull/1290)) — major new channel
- **MiniMax provider** ([#1376](https://github.com/agentscope-ai/CoPaw/pull/1376)) — 204K context window
- **Multi-workspace architecture** ([#1375](https://github.com/agentscope-ai/CoPaw/pull/1375)) — foundational rewrite
- **CDP browser control** ([#1348](https://github.com/agentscope-ai/CoPaw/pull/1348)) — power-user automation

---

## 4. Community Hot Topics

| Rank | Issue/PR | Comments | Analysis |
|------|----------|----------|----------|
| 1 | [#280](https://github.com/agentscope-ai/CoPaw/issues/280) Built-in Skills/MCPs Discussion | 18 | **Strategic product question** — community wants opinionated defaults vs. minimal core. Tension between flexibility and onboarding friction. |
| 2 | [#1195](https://github.com/agentscope-ai/CoPaw/issues/1195) pip upgrade doesn't update frontend version | 14 | **Critical UX gap** — backend/frontend version mismatch breaks user trust in update mechanism. |
| 3 | [#981](https://github.com/agentscope-ai/CoPaw/issues/981) Feishu/QQ file sending broken | 11 | **Enterprise blocker** — file sharing is core to workplace chat workflows. |
| 4 | [#1346](https://github.com/agentscope-ai/CoPaw/issues/1346) Why no fixed local time in context? | 6 | **Design philosophy debate** — tool vs. prompt engineering tradeoff for weaker models. |
| 5 | [#338](https://github.com/agentscope-ai/CoPaw/issues/338) Webhook support request | 6 | **Integration demand** — users want bi-directional API, not just chat channels. |

**Underlying Needs:**
- **Reliable deployment/upgrade paths** (container persistence, version consistency)
- **Enterprise-ready channels** (file sharing, WeChat Work, stable Feishu)
- **Model flexibility** (local models, alternative APIs, vision handling)

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **Critical** | [#1382](https://github.com/agentscope-ai/CoPaw/issues/1382) | Container restart wipes all data/config | ❌ No PR |
| 🔴 **Critical** | [#1384](https://github.com/agentscope-ai/CoPaw/issues/1384) | Model configs lost after "deep restart" | ❌ No PR |
| 🔴 **Critical** | [#1383](https://github.com/agentscope-ai/CoPaw/issues/1383) | Feishu images crash non-vision models | ❌ No PR |
| 🟡 **High** | [#1370](https://github.com/agentscope-ai/CoPaw/issues/1370) | Skill duplication in v0.0.7 UI | ❌ No PR |
| 🟡 **High** | [#1374](https://github.com/agentscope-ai/CoPaw/issues/1374) | Workspace file refresh fails | ❌ No PR |
| 🟡 **High** | [#1222](https://github.com/agentscope-ai/CoPaw/issues/1222) | Message compression breaks API calls (GLM 1210) | ❌ No PR |
| 🟡 **High** | [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) | Feishu "delayed reply" — answers wrong question | ❌ No PR |
| 🟡 **High** | [#1381](https://github.com/agentscope-ai/CoPaw/issues/1381) | Model selector UI overflow | 🟡 [#1371](https://github.com/agentscope-ai/CoPaw/pull/1371) open |

**Regression Pattern:** v0.0.7 introduced multiple UI and data persistence regressions. The "deep restart" feature appears to be destructive rather than restorative.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|---------|----------|---------------------------|-----------|
| **Webhook/API integration** | [#338](https://github.com/agentscope-ai/CoPaw/issues/338) | Medium | High engagement, aligns with multi-workspace architecture |
| **Built-in popular skills/MCPs** | [#280](https://github.com/agentscope-ai/CoPaw/issues/280) | High | Active discussion, onboarding friction pain point |
| **CDP browser control** | [#1348](https://github.com/agentscope-ai/CoPaw/pull/1348) | High | PR exists, power-user feature |
| **MiniMax provider** | [#1376](https://github.com/agentscope-ai/CoPaw/pull/1376) | High | PR ready, 204K context differentiator |
| **QQ channel (NapCat)** | [#1290](https://github.com/agentscope-ai/CoPaw/pull/1290) | Medium | PR open, but channel stability concerns |
| **Multi-workspace** | [#1375](https://github.com/agentscope-ai/CoPaw/pull/1375) | Medium | Major architectural change, needs stabilization |
| **Fixed context timestamp** | [#1346](https://github.com/agentscope-ai/CoPaw/issues/1346) | Low | Design philosophy resistance |
| **WeChat Work support** | [#51](https://github.com/agentscope-ai/CoPaw/issues/51) | Low | Closed without resolution, enterprise demand unmet |

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

> *"咋bug这么多啊"* — [#1358](https://github.com/agentscope-ai/CoPaw/issues/1358)

> *"这个模型设置的设计是小学生设计的吗? ... 这么高的薪资做这么多问题的产品"* — [#1377](https://github.com/agentscope-ai/CoPaw/issues/1377)

> *"每次容器重启后，所有配置和数据都会丢失"* — [#1382](https://github.com/agentscope-ai/CoPaw/issues/1382)

> *"简单的错误提示无法定位错误"* — [#1377](https://github.com/agentscope-ai/CoPaw/issues/1377)

### Satisfaction Indicators
- ✅ Active maintainer response (most issues closed/updated same day)
- ✅ First-time contributor welcoming (6 PRs from new contributors)
- ✅ Rapid feature iteration (Tool Guard, streaming, multi-workspace)

### Dissatisfaction Indicators
- ❌ **Upgrade anxiety**: Multiple reports of broken migrations
- ❌ **Configuration fragility**: Model setups, cron jobs, skills lost unexpectedly
- ❌ **Error opacity**: "Unknown agent error", "connection failed" without diagnostics
- ❌ **Enterprise gaps**: File sharing, WeChat Work, stable Feishu

### Use Case Signals
- **1Panel/Docker users** want synchronized image releases ([#1362](https://github.com/agentscope-ai/CoPaw/issues/1362))
- **Local model users** (Ollama, vLLM) need better certificate/config handling
- **Multi-tenant deployments** need data persistence guarantees

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|----------|-----|------|---------------|
| [#2](https://github.com/agentscope-ai/CoPaw/pull/2) Telemetry | 13 days | Privacy concerns, stalled | Maintainer decision on scope |
| [#193](https://github.com/agentscope-ai/CoPaw/pull/193) Multi-workspace (original) | 11 days | Superseded by [#1375](https://github.com/agentscope-ai/CoPaw/pull/1375) | Close or consolidate |
| [#280](https://github.com/agentscope-ai/CoPaw/issues/280) Built-in skills | 10 days | Product direction | Maintainer roadmap input |
| [#944](https://github.com/agentscope-ai/CoPaw/issues/944) Responses API support | 4 days | Compatibility gap | Provider architecture review |
| [#1131](https://github.com/agentscope-ai/CoPaw/issues/1131) PowerShell error handling | 2 days | Windows UX gap | Platform-specific testing |

**Critical Attention Needed:**
- **Data persistence design** ([#1382](https://github.com/agentscope-ai/CoPaw/issues/1382)) — fundamental to production use
- **v0.0.7 stabilization** — consider hotfix release or rollback guidance

---

*Digest generated from 50 issues and 50 PRs updated 2026-03-12. Data source: agentscope-ai/CoPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-13

## 1. Today's Overview

ZeptoClaw shows **high development velocity** with 11 issues and 6 PRs updated in the last 24 hours, including 5 closed issues and 3 merged PRs. The project is actively shipping CLI UX improvements, new agent capabilities, and provider integrations. Notably, the maintainer (@qhkm) is driving most core development with rapid iteration on streaming interfaces, clarification tools, and research skills. Community contributions remain limited but present (3 open PRs from external contributors). No new releases were cut today despite significant feature merges.

---

## 2. Releases

**No new releases** — Version unchanged. Multiple features merged to main await release packaging.

---

## 3. Project Progress

### Merged/Closed PRs Today (3 items)

| PR | Description | Impact |
|:---|:---|:---|
| [#343](https://github.com/qhkm/zeptoclaw/pull/343) | `ask_clarification` tool with `pause_for_input` agent loop integration | **Major UX improvement** — agents can now pause execution to ask users for clarification instead of guessing, with full streaming/non-streaming path support |
| [#344](https://github.com/qhkm/zeptoclaw/pull/344) | `deep-research` skill with 4-phase methodology | **New capability** — bundled SKILL.md teaches systematic research (broad exploration → deep dive → diversity validation → synthesis); zero binary cost |
| [#337](https://github.com/qhkm/zeptoclaw/pull/337) | Shimmer spinner + enhanced CLI UX | **Polish** — gradient text animations, step numbering with checkmarks, tool argument hints, separator lines |

### Closed Issues Today (5 items)
- [#332](https://github.com/qhkm/zeptoclaw/issues/332) — Zhipu API key validation during onboarding (provider expansion)
- [#185](https://github.com/qhkm/zeptoclaw/issues/185) — jsonwebtoken 9→10 upgrade (security/dependency)
- [#339](https://github.com/qhkm/zeptoclaw/issues/339) — `ask_clarification` tool (feature complete)
- [#338](https://github.com/qhkm/zeptoclaw/issues/338) — `deep-research` skill (feature complete)
- [#336](https://github.com/qhkm/zeptoclaw/issues/336) — Shimmer/spinner CLI UX (feature complete)

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#345](https://github.com/qhkm/zeptoclaw/issues/345) — Coder template LLM writes own tests | **P2-high, 0 comments** | Critical agent reliability issue: LLM generates tests matching buggy behavior, creating false confidence. No fix PR yet. **Underlying need:** stronger test-grounding constraints in coder template |
| [#341](https://github.com/qhkm/zeptoclaw/issues/341) / [#342](https://github.com/qhkm/zeptoclaw/pull/342) — Streaming by default + metadata footer | **Open PR** | High-impact UX change; addresses #1 perceived performance complaint. Community validation needed before merge |
| [#333](https://github.com/qhkm/zeptoclaw/issues/333) — Dockerfile.dev podman cache mount error | **External report, 0 comments** | Blocks contributor workflow; needs maintainer response. Podman 5.7 compatibility gap |

**Engagement pattern:** All issues show **zero reactions/comments** except #332 (1 comment). Indicates either: (a) very early project stage with small user base, or (b) maintainer-driven development with limited community discussion.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| **P2-high** | [#345](https://github.com/qhkm/zeptoclaw/issues/345) — Coder template LLM writes own tests instead of using existing ones | **Open, unassigned** | None |
| **P2-high** | [#332](https://github.com/qhkm/zeptoclaw/issues/332) — Zhipu API key validation | ✅ Closed | [#335](https://github.com/qhkm/zeptoclaw/pull/335) (open, may need rebase) |
| **Unranked** | [#333](https://github.com/qhkm/zeptoclaw/issues/333) — Podman Dockerfile.dev build failure | Open | None |

**Stability assessment:** One active high-severity bug (#345) affecting core agent reliability. The coder template's test-generation behavior represents a **fundamental agent alignment issue** — the LLM optimizes for test passage over correctness verification.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Release |
|:---|:---|:---|
| Streaming by default + metadata footer | [#341](https://github.com/qhkm/zeptoclaw/issues/341) / [#342](https://github.com/qhkm/zeptoclaw/pull/342) | **High** — PR open, maintainer-authored |
| Coding benchmark fixture for agent comparisons | [#340](https://github.com/qhkm/zeptoclaw/issues/340) | **Medium** — infrastructure for evaluation, aligns with #345 fix needs |
| Telegram integration improvements | [#331](https://github.com/qhkm/zeptoclaw/issues/331) | **Medium** — user-facing polish, clear requirements |
| Shelldex directory listing | [#334](https://github.com/qhkm/zeptoclaw/issues/334) | **Low effort, high value** — marketing/discovery |

**Emerging themes:** CLI polish (streaming, shimmer, metadata), multi-platform deployment (Telegram, container fixes), and agent reliability (benchmarking, clarification tools).

---

## 7. User Feedback Summary

### Pain Points
| Issue | Source | Severity |
|:---|:---|:---|
| Telegram formatting broken, no typing indicator | @ilovethensa [#331](https://github.com/qhkm/zeptoclaw/issues/331) | UX friction |
| Podman build failures blocking contributions | @taqtiqa-mark [#333](https://github.com/qhkm/zeptoclaw/issues/333) | Contributor barrier |
| LLM-generated false-positive tests | @qhkm [#345](https://github.com/qhkm/zeptoclaw/issues/345) | **Trust erosion risk** |

### Satisfaction Drivers
- Rapid CLI UX iteration (streaming, shimmer, metadata)
- New agent capabilities (clarification, deep research)
- Provider expansion (Zhipu/GLM support)

**Gap:** No explicit user satisfaction metrics or testimonials in issues. Feedback is bug/feature-request driven rather than experiential.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#287](https://github.com/qhkm/zeptoclaw/pull/287) — Dev tools for consistent pre-PR state | 4 days | **Contributor friction** | Maintainer review; blocks standardized contributor workflow |
| [#335](https://github.com/qhkm/zeptoclaw/pull/335) — Zhipu validation | 1 day | Duplicate effort? | Verify if #332 closure makes this stale |
| [#333](https://github.com/qhkm/zeptoclaw/issues/333) — Podman fix | 1 day | **CI/CD blocker** | Acknowledge and assign or request more info |

**Recommendation:** Prioritize [#287](https://github.com/qhkm/zeptoclaw/pull/287) review to reduce future PR friction. The project would benefit from a `CONTRIBUTING.md` and issue templates to scale beyond maintainer-driven development.

---

*Digest generated from 11 issues and 6 PRs updated 2026-03-12*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-03-13

## 1. Today's Overview

EasyClaw shows **moderate maintenance activity** with one closed issue and one open PR in the past 24 hours. The project released v1.6.7, primarily addressing macOS distribution issues. Community engagement remains **low**—only one comment across all activity. The open PR for macOS UI polish suggests ongoing refinement of the desktop experience. Overall project health appears **stable but quiet**, with no critical bugs emerging and maintenance focused on platform-specific polish rather than core functionality.

---

## 2. Releases

### v1.6.7 — EasyClaw v1.6.7
🔗 [Release page](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.7)

| Aspect | Details |
|--------|---------|
| **Focus** | macOS distribution & installation experience |
| **Key Addition** | Documented Gatekeeper workaround for unsigned app blocking |
| **Breaking Changes** | None |
| **Migration Notes** | macOS users encountering "'EasyClaw' is damaged" errors should use Terminal: `xattr -cr /Applications/EasyClaw.app` (command inferred from truncated release notes) |

**Assessment**: Maintenance release addressing Apple ecosystem friction. No functional changes to AI agent capabilities.

---

## 3. Project Progress

**No merged or closed PRs today.**

| PR | Status | Impact |
|----|--------|--------|
| [#15 — fix: app icon in macOS dock and system tray](https://github.com/gaoyangz77/easyclaw/pull/15) | 🟡 Open, updated 2026-03-12 | Awaiting merge; improves native macOS integration |

**Progress Assessment**: Stalled—icon fix PR remains unmerged despite 2-day activity window. Suggests **maintainer bandwidth constraints** or review backlog.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#16 — OpenAI OAuth authentication failure](https://github.com/gaoyangz77/easyclaw/issues/16) | 1 comment, closed 2026-03-12 | **Resolved quickly** (1-day turnaround). Error affected both portable and installer versions—suggests upstream API or credential handling issue rather than packaging problem. User confirmation of fix absent in data. |

**Underlying Need**: Users depend on seamless third-party AI provider integration; OAuth fragility threatens core value proposition as "easy" AI assistant.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|----------|-------|--------|---------------|
| 🔴 **High** (Resolved) | OpenAI OAuth authentication failure — blocked login for all distribution methods | [Closed #16](https://github.com/gaoyangz77/easyclaw/issues/16) | ✅ Fixed (resolution details not in data) |
| 🟡 **Medium** | macOS Gatekeeper false-positive "damaged app" warning | Mitigated via v1.6.7 documentation | ⚠️ Workaround only; code signing needed for permanent fix |
| 🟢 **Low** | Missing/incorrect app icon in macOS dock and system tray | [PR #15](https://github.com/gaoyangz77/easyclaw/pull/15) pending | 🔄 Fix proposed, unmerged |

**Stability Assessment**: No active critical bugs. OAuth resolution demonstrates responsive maintenance. Persistent code signing gap indicates **infrastructure debt**.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests in today's data.**

**Inferred Signals from Activity:**

| Signal | Likely Priority | Rationale |
|--------|---------------|-----------|
| Native code signing for macOS | **High** | Recurring Gatekeeper issues damage user acquisition |
| Cross-platform icon/asset consistency | Medium | PR #15 in progress |
| OAuth provider diversity (Azure, Anthropic, local models) | Medium | Single-provider dependency risk exposed by #16 |

**Next Version Prediction**: v1.6.8 or v1.7.0 likely to include merged icon fix; code signing would warrant minor version bump.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **macOS trust/security friction** | Release notes dedicate significant space to Gatekeeper workaround | High — creates first-run abandonment risk |
| **OAuth reliability anxiety** | #16 report + rapid close suggests user urgency | Medium — core feature must "just work" |
| **Visual polish gaps** | PR #15 for dock/tray icons | Low — quality-of-life, not blocking |

**Use Case Signal**: Bilingual user base (Chinese/English) with desktop-first workflow; expects consumer-grade packaging for developer tool.

---

## 8. Backlog Watch

| Item | Age | Risk | Recommended Action |
|------|-----|------|------------------|
| [PR #15](https://github.com/gaoyangz77/easyclaw/pull/15) — macOS icon fix | 3 days open | Minor feature stagnation; contributor discouragement | Maintainer review & merge |
| *No stale issues identified* | — | — | — |

**Backlog Health**: **Manageable** — only one pending PR, no orphaned critical issues. Low open issue count (16 total) suggests either effective triage or limited adoption.

---

**Digest Confidence**: Medium — limited data volume (1 issue, 1 PR) restricts trend analysis. Recommend monitoring for 7-day rolling patterns.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*