# OpenClaw Ecosystem Digest 2026-03-06

> Issues: 500 | PRs: 500 | Projects covered: 11 | Generated: 2026-03-06 00:13 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-03-06

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a rapidly evolving codebase with significant community engagement. The project is experiencing **no new releases today**, suggesting the team is in a consolidation phase focused on bug fixes and feature stabilization rather than shipping. With 421 open issues (84% of updated issues) and 351 open PRs (70% of updated PRs), the project faces a substantial backlog that may strain review capacity. The volume of regression reports and authentication-related bugs suggests recent changes have introduced instability, particularly around provider integrations and platform-specific deployments.

---

## 2. Releases

**No new releases** — Version 2026.3.2 remains the latest available build.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Impact |
|:---|:---|:---|
| [#36873](https://github.com/openclaw/openclaw/pull/36873) | Telegram ACP: Topic binding, pin binding message, fix spawn param parsing | **Closed** — Critical Telegram reliability fixes |
| [#36567](https://github.com/openclaw/openclaw/pull/36567) | Plugins: enforce prompt hook policy with runtime validation | **Closed** — Security hardening for plugin system |

### Active Development Areas

**Authentication & Core Reliability**
- [#36896](https://github.com/openclaw/openclaw/pull/36896): Exec tool now honors `host=node` in elevated mode — fixes sandbox routing regression
- [#36860](https://github.com/openclaw/openclaw/pull/36860): ACP dispatch abort signal propagation prevents stuck sessions

**Platform Integrations**
- [#36894](https://github.com/openclaw/openclaw/pull/36894): Voice call streaming race condition fix for ElevenLabs TTS
- [#36895](https://github.com/openclaw/openclaw/pull/36895): Telegram `mediaLocalRoots` support for outbound local files
- [#36898](https://github.com/openclaw/openclaw/pull/36898): LINE credential caching to reduce webhook latency

**UX & Observability**
- [#36899](https://github.com/openclaw/openclaw/pull/36899): Webchat heartbeat message suppression
- [#34417](https://github.com/openclaw/openclaw/pull/34417): Automatic 85%/95% context pressure warnings
- [#33905](https://github.com/openclaw/openclaw/pull/33905): Stale Control UI version badge fix

**Documentation & Onboarding**
- [#36900](https://github.com/openclaw/openclaw/pull/36900): Operator install safeguards (addresses 27% of support tickets)
- [#34009](https://github.com/openclaw/openclaw/pull/34009): Web search onboarding flow expansion

---

## 4. Community Hot Topics

| Issue/PR | Engagement | Analysis |
|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n & Localization | **77 comments** | **Top demand**: Global accessibility blocked by maintainer bandwidth. Community willing to contribute but needs official guidance/framework. |
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Desktop Apps | **58 👍, 33 comments** | **Platform parity gap**: macOS/iOS/Android supported; Linux/Windows users excluded from full feature set. High-value enterprise use case. |
| [#7631](https://github.com/openclaw/openclaw/issues/7631) Windows plugin install `spawn EINVAL` | **21 comments** | **Windows adoption blocker**: npm child process spawning fails. Node.js/Windows compatibility issue. |
| [#1749](https://github.com/openclaw/openclaw/issues/1749) Web UI schema error | **21 comments, CLOSED** | Recently resolved — indicates active UI stabilization. |
| [#32245](https://github.com/openclaw/openclaw/issues/32245) Vertex embedded runs regression | **18 comments** | **Production regression**: v2026.3.1 broke Telegram + cron workflows. |
| [#23538](https://github.com/openclaw/openclaw/issues/23538) Anthropic 401 auth failure | **18 comments** | **Isolated repro**: setup-token accepted but runtime fails. Suggests token scope or caching bug. |
| [#34810](https://github.com/openclaw/openclaw/issues/34810) Filesystem tools disappeared | **15 comments** | **Critical behavior regression**: Agent lost exec/read/write capabilities mid-session. Security policy change? |

**Underlying Needs**: 
- Cross-platform parity (Linux/Windows desktop)
- Authentication reliability across providers
- Stable tool execution guarantees
- Clear contribution pathways for internationalization

---

## 5. Bugs & Stability

### Critical Severity

| Issue | Description | Fix PR? |
|:---|:---|:---|
| [#34810](https://github.com/openclaw/openclaw/issues/34810) | Agent suddenly lost all filesystem tools (exec/read/write) | **None identified** |
| [#35077](https://github.com/openclaw/openclaw/issues/35077) | "You made openclaw a broken disaster" — v2026.3.2 complete failure | **None identified** |
| [#33961](https://github.com/openclaw/openclaw/issues/33961) | WhatsApp QR pairing 100% failure on Baileys v7 | **None identified** |
| [#32245](https://github.com/openclaw/openclaw/issues/32245) | Vertex embedded runs fail with "Cannot convert undefined or null to object" | **None identified** |

### High Severity

| Issue | Description | Fix PR? |
|:---|:---|:---|
| [#34830](https://github.com/openclaw/openclaw/issues/34830) | 401 missing authentication header (OpenRouter) — regression | **None identified** |
| [#23538](https://github.com/openclaw/openclaw/issues/23538) | Anthropic setup-token auth returns 401 at runtime | **None identified** |
| [#32828](https://github.com/openclaw/openclaw/issues/32828) | False 'API rate limit reached' on all models | **None identified** |
| [#32812](https://github.com/openclaw/openclaw/issues/32812) | Cannot save tool enablement in dashboard | **None identified** |
| [#35789](https://github.com/openclaw/openclaw/issues/35789) | TUI replies broadcast to Telegram incorrectly | **None identified** |
| [#27984](https://github.com/openclaw/openclaw/issues/27984) | Telegram file deadlock (5-20MB) — locks entire chat permanently | **None identified** |

### Medium Severity

| Issue | Description | Fix PR? |
|:---|:---|:---|
| [#7631](https://github.com/openclaw/openclaw/issues/7631) | Windows `spawn EINVAL` on plugin install | **None identified** |
| [#24496](https://github.com/openclaw/openclaw/issues/24496) | ByteString error on Windows 11 (character value >255) | **None identified** |
| [#33641](https://github.com/openclaw/openclaw/issues/33641) | Webchat previous message disappears during streaming | **None identified** |
| [#34741](https://github.com/openclaw/openclaw/issues/34741) | WhatsApp "No active listener" mid-session desync | **None identified** |

**Regression Pattern**: v2026.3.1/v2026.3.2 releases introduced multiple authentication and tool execution failures. Recommend stabilization release before new features.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Release |
|:---|:---|:---|
| **Linux/Windows Desktop Apps** | [#75](https://github.com/openclaw/openclaw/issues/75) | Medium — high demand, resource-intensive |
| **i18n/Localization Framework** | [#3460](https://github.com/openclaw/openclaw/issues/3460) | Low — maintainer bandwidth explicitly cited as blocker |
| **Azure Claude Service Support** | [#7249](https://github.com/openclaw/openclaw/issues/7249) | Medium — 8 👍, enterprise need |
| **Sub-agent Announce Routing (`announceTarget`)** | [#27445](https://github.com/openclaw/openclaw/issues/27445) | Medium — workflow orchestration use case |
| **Outbound Message Approval Gate** | [#25145](https://github.com/openclaw/openclaw/issues/25145) | Low — safety feature, complex UX |
| **Safe/Unsafe ClawdBot Modes** | [#6731](https://github.com/openclaw/openclaw/issues/6731) | Low — architectural proposal (Rust rewrite) |
| **Plugin Context Management Extension** | [#22201](https://github.com/openclaw/openclaw/pull/22201) | **High** — XL PR actively developed |

**Predicted v2026.3.3 Priorities**: Authentication stability fixes, sub-agent reliability, plugin system extensibility (PR #22201).

---

## 7. User Feedback Summary

### Pain Points

| Category | Evidence | Severity |
|:---|:---|:---|
| **Authentication Fragility** | Multiple 401 errors across providers (Anthropic, OpenRouter, OpenAI OAuth) | Critical |
| **Platform Inequality** | Linux/Windows users lack desktop apps; Windows-specific bugs unaddressed | High |
| **Regression Velocity** | "You friggin broke everything" — v2026.3.2 perceived as unstable | Critical |
| **Tool Execution Unreliability** | Filesystem tools disappearing, false rate limits, skill eligibility checks wrong container | High |
| **WhatsApp Reliability** | QR pairing, reactions, listener desync — multiple critical bugs | High |
| **Context/Token Management** | Ineffective prompt caching (5x cost increase), aggressive timeouts | Medium-High |

### Positive Signals
- Active maintainer response on high-engagement issues
- Rapid PR turnaround for critical fixes (heartbeat suppression, version badge)
- Strong community contribution volume (500 PRs/24h)

### Use Cases Emerging
- **Multi-agent orchestration**: Sub-agent workflow management (#27445)
- **Financial/trading automation**: AI trading assistant skills (#36893)
- **Enterprise deployment**: Docker, systemd, Azure integrations

---

## 8. Backlog Watch

### Long-Unanswered Critical Issues

| Issue | Age | Risk |
|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Desktop Apps | 65 days | Platform exclusion, enterprise deals |
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n Framework | 37 days | Global adoption ceiling |
| [#4349](https://github.com/openclaw/openclaw/issues/4349) TUI model picker shows 600+ models | 35 days | Daily UX friction |
| [#21297](https://github.com/openclaw/openclaw/issues/21297) Control UI Tool Access buttons disabled | 15 days (stale) | Core functionality broken |
| [#16151](https://github.com/openclaw/openclaw/issues/16151) Custom provider empty responses | 20 days | Self-hosted LLM support |
| [#17613](https://github.com/openclaw/openclaw/issues/17613) Local LLM timeout | 18 days | Privacy-first deployments |

### PRs Needing Maintainer Attention

| PR | Description | Size | Age |
|:---|:---|:---|:---|
| [#22201](https://github.com/openclaw/openclaw/pull/22201) | Plugin context management extension | **XL** | 14 days |
| [#35080](https://github.com/openclaw/openclaw/pull/35080) | Subagent deterministic announce delivery | **XL** | 1 day |
| [#36853](https://github.com/openclaw/openclaw/pull/36853) | Dashboard-v2 refactor | — | 1 day |
| [#16788](https://github.com/openclaw/openclaw/pull/16788) | Compaction lifecycle hooks | **L** | 19 days |

---

**Project Health Assessment**: ⚠️ **Stressed but Active**

- **Velocity**: Exceptionally high (1000 items/24h)
- **Quality**: Concerning regression pattern in recent releases
- **Community**: Engaged but experiencing friction
- **Recommendation**: Emergency stabilization release; pause feature work; address authentication and platform parity blockers.

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Report — 2026-03-06

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing **intense consolidation pressure** as projects race to establish dominance in multi-channel agent deployment. The landscape has fragmented into three tiers: **established leaders** (OpenClaw, ZeroClaw) with 500+ daily items and enterprise traction; **rapidly iterating challengers** (NanoBot, PicoClaw, ZeptoClaw, CoPaw) pushing 50-300 daily items with focused technical bets; and **emerging/specialized players** (TinyClaw, EasyClaw, LobsterAI, IronClaw, NanoClaw) navigating stability crunches or niche markets. A defining pattern is the **MCP (Model Context Protocol) convergence**—every major project is racing to position as either MCP client hub, server, or both, signaling industry recognition of protocol standardization as the next battleground for ecosystem lock-in.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Assessment |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | No release (consolidation) | ⚠️ Stressed | Exceptional volume, concerning regression pattern |
| **ZeroClaw** | 50 | 50 | v0.1.8 (2026-03-05) | 🟢 Strong | 74% closure rate, security-first culture |
| **PicoClaw** | 25 | 286 | No release | 🟡 Active | Extreme PR velocity, review bottleneck risk |
| **NanoBot** | 29 | 65 | No release (v0.1.4.post3) | 🟡 Concerning | Silent failure epidemic, Windows regressions |
| **CoPaw** | 50 | 50 | v0.0.5 + beta.3 | 🟢 Active | 74% closure, responsive maintainers |
| **ZeptoClaw** | 15 | 10 | No release | 🟢 Strong | 80% closure, security CVEs patched same-day |
| **IronClaw** | 22 | 30 | v0.15.0 (2026-03-04) | 🟡 Improving | 110 open issues, 96% unassigned |
| **LobsterAI** | 26 | 23 | No release (v0.1.23) | 🟢 Active | 96% PR merge rate, China-market focus |
| **NanoClaw** | 23 | 50 | No release (v1.1.3) | 🔴 Critical | WhatsApp systemic failure, 8 critical bugs |
| **TinyClaw** | 3 | 3 | No release (tag mismatch) | 🟡 Stalled | Zero merges, macOS blocker |
| **EasyClaw** | 3 | 0 | No release | 🔴 Stalled | Zero maintainer response, migration debt |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw Position | Peer Comparison |
|:---|:---|:---|
| **Scale** | 1000 items/day | 5-20x larger than nearest competitor (ZeroClaw: 100) |
| **Provider ecosystem** | 15+ native providers, OAuth gateway | ZeroClaw catching up; others 5-10 providers |
| **Channel breadth** | Telegram, WhatsApp, Discord, Slack, LINE, Web, TUI | Matched only by CoPaw; ZeroClaw lacks WhatsApp |
| **Enterprise features** | Sub-agent orchestration, audit logging | ZeptoClaw leads on security hardening; IronClaw on multi-tenant |

### Technical Approach Differences
- **vs. ZeroClaw**: OpenClaw prioritizes feature velocity over security rigor; ZeroClaw's explicit executable paths and TOTP/RBAC reflect "secure by default" philosophy OpenClaw lacks
- **vs. PicoClaw**: OpenClaw's Node.js/TypeScript vs. PicoClaw's Go/Rust—OpenClaw wins ecosystem familiarity, loses on resource efficiency for edge deployment
- **vs. ZeptoClaw**: OpenClaw's monolithic architecture vs. ZeptoClaw's kernel convergence pattern—ZeptoClaw's unified safety layer is technically superior for multi-tenant scenarios

### Community Size
OpenClaw operates at **ecosystem-defining scale**—its GitHub stars (implied by 500 PRs/day) likely exceed 50K, making it the de facto reference implementation. However, **engagement quality lags**: 84% open issue rate vs. ZeroClaw's 26%, suggesting maintainer bandwidth per contributor is strained.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **MCP ecosystem integration** | ZeroClaw, CoPaw, ZeptoClaw, LobsterAI, IronClaw | External server support, hot reload, client hub positioning |
| **Authentication reliability** | OpenClaw, NanoClaw, NanoBot, IronClaw | OAuth token refresh, 401 regression fixes, multi-tenant isolation |
| **WhatsApp stability** | OpenClaw, NanoClaw | Baileys v7 QR pairing, JID registration, message deduplication |
| **Windows platform parity** | OpenClaw, NanoBot, LobsterAI, TinyClaw | Signal handling, spawn EINVAL, ASAR path normalization |
| **Local/edge AI deployment** | PicoClaw, NanoClaw, CoPaw, NanoBot | Ollama integration, GGUF loading, Raspberry Pi/OpenWrt targets |
| **Cron/task reliability** | ZeptoClaw, CoPaw, PicoClaw | Duplicate delivery guards, wall-clock anchoring, crash recovery |
| **Reasoning model parsing** | IronClaw, NanoBot | DeepSeek R1, Qwen3, GLM-4/5 think tag handling |
| **Image/media handling** | CoPaw, LobsterAI, OpenClaw | Base64 conversion, local file URI sanitization, vision API parity |

---

## 5. Differentiation Analysis

| Project | Core Differentiation | Target User | Architecture Bet |
|:---|:---|:---|:---|
| **OpenClaw** | Reference implementation, maximum ecosystem | Power users, multi-channel operators | Velocity over stability |
| **ZeroClaw** | Security-first, OpenClaw compatibility layer | Enterprise, multi-tenant deployments | Rust + explicit sandboxing |
| **PicoClaw** | Edge/embedded efficiency, hardware roots | IoT, constrained environments | Go + minimal resource footprint |
| **NanoBot** | Gateway provider abstraction, streaming UX | Cost-conscious, provider-agnostic users | Python + rapid channel expansion |
| **ZeptoClaw** | Kernel-converged safety, production hardening | Security-critical deployments | Rust + unified taint tracking |
| **CoPaw** | Channel management UX, China enterprise IM | Feishu/DingTalk/QQ operators | TypeScript + polished UI |
| **IronClaw** | NEAR AI ecosystem integration, autonomous routines | Web3, crypto-native developers | Rust + on-chain identity |
| **LobsterAI** | NetEase Youdao integration, China localization | Chinese enterprise, education | Electron + domestic cloud providers |
| **NanoClaw** | Claude-native, skill-centric architecture | Anthropic ecosystem adopters | TypeScript + skills marketplace |
| **TinyClaw** | Minimal footprint, plugin simplicity | Hobbyists, rapid prototyping | Node.js + tmux process management |
| **EasyClaw** | OpenClaw fork, simplified Chinese UX | China-based OpenClaw migrants | Fork maintenance burden |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (High Velocity, High Risk)
| Project | Pattern | Risk |
|:---|:---|:---|
| **OpenClaw** | 1000 items/day, no release | Regression velocity exceeds fix capacity |
| **PicoClaw** | 286 PRs, 32 merged | Review bottleneck, 89% open PR rate |
| **NanoClaw** | 50 PRs, systemic WhatsApp bugs | Stability crisis despite activity |

### Tier 2: Stabilizing (Measured Velocity, Quality Focus)
| Project | Pattern | Trajectory |
|:---|:---|:---|
| **ZeroClaw** | v0.1.8 shipped, 74% closure | Production-hardening phase |
| **ZeptoClaw** | Security CVEs patched same-day | Enterprise readiness |
| **CoPaw** | v0.0.5 with channel management | Feature-complete for core use cases |
| **LobsterAI** | 96% PR merge rate | Infrastructure consolidation |

### Tier 3: Maintenance/Stalled (Low Velocity, Attention Needed)
| Project | Pattern | Intervention Needed |
|:---|:---|:---|
| **IronClaw** | 96% unassigned issues | Triage process, maintainer expansion |
| **NanoBot** | Silent failure epidemic | Observability architecture overhaul |
| **TinyClaw** | Zero merges, macOS blocker | Maintainer status update or fork |
| **EasyClaw** | Zero maintainer response | Community handoff or archive |

---

## 7. Trend Signals

| Trend | Evidence | Value for Developers |
|:---|:---|:---|
| **MCP as interoperability standard** | ZeroClaw #1380, CoPaw #754, IronClaw roadmap | Build MCP servers for maximum portability; avoid vendor-specific skill APIs |
| **Reasoning model fragmentation** | IronClaw #564, NanoBot #1562, ZeptoClaw patterns | Abstract think tag parsing; DeepSeek/Qwen/Claude formats diverging |
| **Cron/agentic reliability engineering** | ZeptoClaw #255, CoPaw cron fixes, PicoClaw #757 | Idempotency, deduplication, and crash recovery are table stakes for production |
| **Windows as second-class citizen** | OpenClaw #7631, NanoBot #1577, TinyClaw #156 | Linux-first development with Windows CI mandatory; signal handling, path separators |
| **Local AI cost pressure** | NanoClaw #442, PicoClaw Ollama skills, NanoBot #1547 | Hybrid cloud/local architectures; expect Ollama/llama.cpp integration demands |
| **Enterprise IM dominance (China)** | CoPaw Feishu/DingTalk, LobsterAI Youdao Zhiyun, ZeroClaw Feishu | Feishu/Lark APIs are enterprise onramp; QQ/DingTalk for mass market |
| **Security as competitive moat** | ZeroClaw TOTP/RBAC, ZeptoClaw SSRF CVEs, NanoClaw #737 | Credential isolation, sandbox escapes, and audit logging differentiate for B2B |
| **Sub-agent/multi-agent orchestration** | OpenClaw #27445, PicoClaw #423, IronClaw routines | Blackboard patterns, deterministic announce routing, agent handoff protocols emerging |

---

**Strategic Recommendation**: Developers seeking maximum ecosystem compatibility should target **OpenClaw's plugin API** with **MCP server implementations** as hedge. For production deployments, **ZeroClaw** and **ZeptoClaw** demonstrate superior security engineering. **CoPaw** offers the most polished China-market entry point. Avoid **NanoClaw** and **EasyClaw** until stability crises resolve.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-06

## 1. Today's Overview

NanoBot shows **high community activity** with 29 issues and 65 PRs updated in the last 24 hours, indicating a rapidly evolving codebase with active contributor engagement. The project is experiencing **growing pains around platform stability**, particularly with Feishu/Lark and Telegram integrations, while simultaneously expanding its provider ecosystem (Venice.ai, Kilo AI, Mistral). No new releases were cut today, suggesting maintainers are accumulating changes for a larger release. The high PR-to-merge ratio (42 open vs. 23 merged/closed) indicates a potential review bottleneck. Cross-platform compatibility issues (Windows signal handling, SSL certificates in uv environments) are emerging as deployment friction points.

---

## 2. Releases

**No new releases** — Version remains at `v0.1.4.post3` (per issue #1514).

---

## 3. Project Progress

### Merged/Closed PRs Today (23 total, key highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#995](https://github.com/HKUDS/nanobot/pull/995) | Streaming support for custom providers (Fireworks AI requirement) | **Foundation for long-context providers** — enables `stream=true` for models requiring it |
| [#996](https://github.com/HKUDS/nanobot/pull/996) | Fireworks AI as dedicated provider | Expands gateway provider ecosystem |
| [#1019](https://github.com/HKUDS/nanobot/pull/1019) | Venice.ai provider | Gateway provider expansion |
| [#1297](https://github.com/HKUDS/nanobot/pull/1297) | Simple web chat channel (Flask + HTML/JS) | **New channel modality** — enables browser-based interaction without Telegram/Discord |
| [#1384](https://github.com/HKUDS/nanobot/pull/1384) | Fix Feishu card message table limit (#1382) | **Critical fix** for enterprise users — splits multi-table messages |
| [#1400](https://github.com/HKUDS/nanobot/pull/1400) | SIGTERM/SIGHUP/SIGPIPE signal handling | **Stability improvement** for Linux production deployments |
| [#1522](https://github.com/HKUDS/nanobot/pull/1522) | Telegram streaming messages + reasoning extraction | **UX enhancement** — uses new Telegram feature; fixes reasoning display |
| [#1578](https://github.com/HKUDS/nanobot/pull/1578) | Telegram typing indicator only for allowed users | Privacy/security polish |

**Key advancement**: Streaming infrastructure is now in place across multiple layers (provider, Telegram channel), setting up for broader real-time UX improvements.

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | 👍 | Core Need |
|:---|:---:|:---:|:---|
| [#235](https://github.com/HKUDS/nanobot/issues/235) — "I've completed processing but have no response to give" | 8 | 6 | **Silent failure debugging** — users need observability when LLM returns empty responses |
| [#1481](https://github.com/HKUDS/nanobot/issues/1481) — GitHub Copilot tool_calls not working | 8 | 1 | **Enterprise IDE integration** — Copilot/Claude-Sonnet compatibility for coding workflows |
| [#1557](https://github.com/HKUDS/nanobot/issues/1557) — Feishu WebSocket "event loop already running" | 5 | 0 | **Enterprise IM stability** — async/event loop conflict in production |
| [#1562](https://github.com/HKUDS/nanobot/issues/1562) — Why no thinking/tool call process display? | 5 | 0 | **Transparency/observability** — users want to see agent reasoning |

### Underlying Pattern
**Observability gap**: Users consistently report confusion when the agent "works" but produces no visible output (#235, #1562, #1481). The project lacks a unified "agent thinking" visibility layer.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical** | [#1577](https://github.com/HKUDS/nanobot/issues/1577) | CLI `nanobot agent` broken on Windows — `signal.SIGHUP` doesn't exist on Windows | **No PR yet** — blocks Windows CLI usage |
| **🔴 Critical** | [#1557](https://github.com/HKUDS/nanobot/issues/1557) | Feishu WebSocket crash — `This event loop is already running` | **No PR yet** — breaks Feishu integration |
| **🟡 High** | [#1589](https://github.com/HKUDS/nanobot/issues/1589) | Telegram gateway errors, no agent communication | **No PR yet** — new report, needs triage |
| **🟡 High** | [#1519](https://github.com/HKUDS/nanobot/issues/1519) | SSL certificate verification in `uv` environments (Feishu) | **Workaround documented** — needs proper fix |
| **🟡 High** | [#845](https://github.com/HKUDS/nanobot/issues/845) | `restrictToWorkspace=true` doesn't sandbox shell commands | **No PR yet** — security expectation gap |
| **🟡 High** | [#1121](https://github.com/HKUDS/nanobot/issues/1121) | Fallback models not triggered on timeout/503 | **No PR yet** — reliability issue |
| **🟢 Medium** | [#1481](https://github.com/HKUDS/nanobot/issues/1481) | GitHub Copilot multi-choice response handling | **No PR yet** — provider-specific |
| **🟢 Medium** | [#1554](https://github.com/HKUDS/nanobot/issues/1554) | GitHub Copilot `call_id` length error | **No PR yet** — related to #1481 |

**Regression alert**: The signal handling fix in [#1400](https://github.com/HKUDS/nanobot/pull/1400) appears to have introduced [#1577](https://github.com/HKUDS/nanobot/issues/1577) — Windows compatibility was not considered.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **Multi-instance `--config` support** | [#1581](https://github.com/HKUDS/nanobot/pull/1581) (PR open), [#1587](https://github.com/HKUDS/nanobot/issues/1587) | **High** | PR already open, docs promised this feature |
| **Streaming CLI output** | [#1547](https://github.com/HKUDS/nanobot/issues/1547) | **Medium** | Infrastructure exists (#995, #1522), needs CLI adaptation |
| **Per-message model routing (@prefix)** | [#1530](https://github.com/HKUDS/nanobot/issues/1530) | **Medium** | Clear cost-management use case, Telegram-centric |
| **MCP retry/reconnection logic** | [#1536](https://github.com/HKUDS/nanobot/issues/1536) | **Medium** | Production resilience need, Kubernetes-aware |
| **ACIP security framework** | [#1588](https://github.com/HKUDS/nanobot/pull/1588) (PR open) | **Medium** | Security-focused, opt-in via config |
| **Python programmatic channel** | [#1582](https://github.com/HKUDS/nanobot/pull/1582) (PR open) | **Medium** | Enables library-style usage, testing |
| **Rate limit handling with retry** | [#1558](https://github.com/HKUDS/nanobot/issues/1558) | **Medium** | [#1580](https://github.com/HKUDS/nanobot/pull/1580) adds LLM retries — may extend |
| **Whisper turbo for Groq** | [#1584](https://github.com/HKUDS/nanobot/issues/1584) | **Low-Medium** | Simple provider config change |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Silent failures** | #235, #1562, #1481 — "no response", "nothing after colon", "I'm on it" loops | 🔴 High |
| **Platform-specific breakage** | Windows signals (#1577), uv SSL (#1519), Feishu async (#1557) | 🔴 High |
| **Configuration confusion** | `--config` missing (#1587), model routing unclear (#1530) | 🟡 Medium |
| **Sandboxing trust gap** | #845 — `restrictToWorkspace` doesn't actually restrict | 🟡 Medium |
| **MCP production fragility** | #1536 — no reconnection on server restart | 🟡 Medium |

### Positive Signals
- **Provider flexibility appreciated**: Users actively configuring diverse providers (DeepSeek, GitHub Copilot, Z.ai, Ollama, Aliyun)
- **Enterprise adoption**: Feishu/Lark, Discord group policies, multi-tenant needs emerging
- **Cost consciousness**: #1530 shows sophisticated users optimizing spend per query

### Use Case Evolution
From "personal Telegram bot" → **"team-deployable AI infrastructure"** with multi-tenancy, security policies, and observability requirements.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>2 weeks, high impact)

| Issue | Age | Problem | Risk |
|:---|:---:|:---|:---|
| [#235](https://github.com/HKUDS/nanobot/issues/235) | ~4 weeks | Silent "no response" failures with DeepSeek | **User attrition** — fundamental reliability |
| [#845](https://github.com/HKUDS/nanobot/issues/845) | ~2 weeks | Workspace sandboxing doesn't work | **Security credibility** — documentation vs. reality gap |
| [#1121](https://github.com/HKUDS/nanobot/issues/1121) | ~2 weeks | Fallback models not triggering | **Reliability** — defeats purpose of fallback config |
| [#549](https://github.com/HKUDS/nanobot/issues/549) | ~3 weeks | Discord group policy control | **Community management** — spam prevention |

### Stalled PRs

| PR | Age | Blocker |
|:---|:---:|:---|
| [#126](https://github.com/HKUDS/nanobot/pull/126) | ~4 weeks | GitHub Actions for Docker — needs maintainer review for official image |
| [#1390](https://github.com/HKUDS/nanobot/pull/1390) | ~5 days | Mistral + Voxtral audio — provider expansion, low conflict |

---

## Project Health Assessment

| Metric | Status | Note |
|:---|:---:|:---|
| **Activity** | 🟢 Healthy | 94 items updated/24h |
| **Merge velocity** | 🟡 Concerning | 35% PR closure rate, growing backlog |
| **Release cadence** | 🔴 Stalled | No release since ~v0.1.4.post3 |
| **Platform coverage** | 🟡 Fragile | Windows, Feishu regressions |
| **Security posture** | 🟡 Improving | ACIP framework incoming, but sandboxing gap persists |

**Recommendation**: Prioritize Windows signal fix (#1577) and Feishu stability (#1557) for immediate hotfix; consider cutting release after `--config` (#1581) and multi-instance support land to capture accumulated provider/channel improvements.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-03-06

---

## 1. Today's Overview

ZeroClaw shows **exceptionally high velocity** with 100 items updated in 24 hours (50 issues, 50 PRs) and a fresh v0.1.8 patch release. The project demonstrates mature engineering practices with rapid bug closure (74% issue resolution rate) and aggressive security hardening. Activity centers on three themes: **MCP ecosystem expansion** (external server support, hot reload), **enterprise security** (TOTP, audit logging, sandbox escapes), and **platform reliability** (Discord/Slack/Matrix channel fixes). The 37:13 open-to-merged PR ratio suggests a healthy review pipeline, though 74% open PRs indicates substantial in-flight work likely targeting v0.1.9.

---

## 2. Releases

### v0.1.8 (2026-03-05)
| Aspect | Details |
|--------|---------|
| **Security** | [Explicit executable paths in `allowed_commands`](https://github.com/zeroclaw-labs/zeroclaw/pull/1379) — prevents shell injection via path resolution attacks |
| **Reliability** | [Slack replay prevention](https://github.com/zeroclaw-labs/zeroclaw/pull/1378) — stops message duplication on daemon restart |
| **Config** | Config enforcement improvements (truncated in notes) |

**Migration Notes**: No breaking changes identified. Recommended for all Slack users and multi-tenant deployments using command restrictions.

---

## 3. Project Progress

### Merged/Closed Today (37 issues, 13 PRs)

| Category | Key Deliverables |
|----------|----------------|
| **MCP Infrastructure** | External MCP server support landed ([#1380](https://github.com/zeroclaw-labs/zeroclaw/issues/1380)) — npm/remote MCP servers now configurable via `mcpServers` JSON block |
| **Security Hardening** | Multi-user TOTP with RBAC ([#1856](https://github.com/zeroclaw-labs/zeroclaw/issues/1856)), audit log fixes ([#2679](https://github.com/zeroclaw-labs/zeroclaw/issues/2679)), process tool lifecycle hardening ([PR #2757](https://github.com/zeroclaw-labs/zeroclaw/pull/2757)) |
| **Channel Reliability** | Discord image sending parity ([#1381](https://github.com/zeroclaw-labs/zeroclaw/issues/1381)), Matrix E2EE OTK conflict resolution ([#2702](https://github.com/zeroclaw-labs/zeroclaw/issues/2702)), Telegram parse_mode formatting ([#2511](https://github.com/zeroclaw-labs/zeroclaw/issues/2511)) |
| **Provider Ecosystem** | LiteLLM registered as official provider alias ([#2602](https://github.com/zeroclaw-labs/zeroclaw/issues/2602)), Mistral 422 error fix ([#2693](https://github.com/zeroclaw-labs/zeroclaw/issues/2693)) |
| **Developer Experience** | Deterministic OpenClaw migration preview ([#2745](https://github.com/zeroclaw-labs/zeroclaw/issues/2745)), custom-home safe workspace persistence ([#2744](https://github.com/zeroclaw-labs/zeroclaw/issues/2744)) |

---

## 4. Community Hot Topics

| Rank | Topic | Engagement | Underlying Need |
|------|-------|-----------|-----------------|
| 1 | [External MCP Server Support](https://github.com/zeroclaw-labs/zeroclaw/issues/1380) | 12 comments, 8 👍 | **Ecosystem extensibility** — users want ZeroClaw as MCP client hub, not just server |
| 2 | [Multi-User TOTP + RBAC](https://github.com/zeroclaw-labs/zeroclaw/issues/1856) | 8 comments | **Enterprise multi-tenancy** — shared workspaces need identity isolation |
| 3 | [Discord Image Sending](https://github.com/zeroclaw-labs/zeroclaw/issues/1381) | 6 comments | **Feature parity with OpenClaw** — migration friction reduction |
| 4 | [Skill Mutual Invocation](https://github.com/zeroclaw-labs/zeroclaw/issues/2486) | 5 comments, S0 severity | **Complex agent architectures** — users building skill hierarchies hitting sandbox boundaries |
| 5 | [MCP Hot Reload](https://github.com/zeroclaw-labs/zeroclaw/pull/2894) | 2 open PRs | **Production uptime** — zero-downtime config changes |

**Signal**: Strong demand for **MCP as first-class platform** (3 of top 5 topics) and **enterprise governance features**.

---

## 5. Bugs & Stability

| Severity | Count | Key Issues | Fix Status |
|----------|-------|-----------|------------|
| **S0 — Data Loss/Security** | 4 | [#2486](https://github.com/zeroclaw-labs/zeroclaw/issues/2486) skill invocation warnings, [#2600](https://github.com/zeroclaw-labs/zeroclaw/issues/2600) Raspberry Pi sandbox escape, [#2679](https://github.com/zeroclaw-labs/zeroclaw/issues/2679) audit log failure, [#2782](https://github.com/zeroclaw-labs/zeroclaw/issues/2782) Discord file write failure | **All closed** — rapid response |
| **S1 — Workflow Blocked** | 5 | [#2702](https://github.com/zeroclaw-labs/zeroclaw/issues/2702) Matrix E2EE loop, [#2551](https://github.com/zeroclaw-labs/zeroclaw/issues/2551) Codex websocket fail, [#2784](https://github.com/zeroclaw-labs/zeroclaw/issues/2784) pairing bypass ignored, [#2693](https://github.com/zeroclaw-labs/zeroclaw/issues/2693) Mistral 422, [#2698](https://github.com/zeroclaw-labs/zeroclaw/issues/2698) Nextcloud webhook format | **4/5 closed** |
| **S2 — Degraded** | 3 | [#2682](https://github.com/zeroclaw-labs/zeroclaw/issues/2682) integrations JSON parse, [#2537](https://github.com/zeroclaw-labs/zeroclaw/issues/2537) model_routes ignored, [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) Feishu config broken | **2/3 closed** |
| **S3 — Minor** | 2 | [#1575](https://github.com/zeroclaw-labs/zeroclaw/issues/1575) dashboard crypto.randomUUID, [#2513](https://github.com/zeroclaw-labs/zeroclaw/issues/2513) HEARTBEAT_OK leakage | **All closed** |

**Critical Open**: 
- [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) — `channel_ack_config` schema error blocking agent chat (S1, 2 comments)
- [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) — Feishu channel completely non-functional (S2, 2 comments)

---

## 6. Feature Requests & Roadmap Signals

| Request | Likelihood v0.1.9 | Evidence |
|---------|-------------------|----------|
| **MCP Hot Reload (SIGHUP)** | 🔴 **High** | [PR #2894](https://github.com/zeroclaw-labs/zeroclaw/pull/2894) open, duplicate #2893/#2892 closed — iterative refinement in progress |
| **Multi-Agent Routing** | 🟡 **Medium** | [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) open, 3 👍, explicit OpenClaw parity request — architecture work likely needed |
| **On-Demand Skill Loading** | 🟡 **Medium** | [#2703](https://github.com/zeroclaw-labs/zeroclaw/issues/2703) closed as completed? — verify in release notes |
| **Provider-Neutral Onboarding** | 🔴 **Confirmed** | [PR #2890](https://github.com/zeroclaw-labs/zeroclaw/pull/2890) open — removes OpenRouter default, requires `--provider` flag |
| **Electric Blue Dashboard** | 🔴 **Confirmed** | [PR #2883](https://github.com/zeroclaw-labs/zeroclaw/pull/2883), [#2890](https://github.com/zeroclaw-labs/zeroclaw/pull/2890) — branding overhaul |
| **Copilot Vision Support** | 🟡 **Medium** | [PR #2608](https://github.com/zeroclaw-labs/zeroclaw/pull/2608) open — multi-part content messages |

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | User Context |
|-------|-----------|--------------|
| **Sandbox over-restriction** | High | Shell redirects blocked ([#2779](https://github.com/zeroclaw-labs/zeroclaw/issues/2779)), Raspberry Pi ARM failures ([#2600](https://github.com/zeroclaw-labs/zeroclaw/issues/2600)) — "LLM reflexive patterns" vs. security tension |
| **Channel parity gaps** | Medium | Discord images, Telegram formatting, Matrix E2EE — multi-platform users hit friction |
| **Configuration complexity** | Medium | Feishu, model_routes, fallback provider keys — "works on my machine" deployment issues |
| **Migration uncertainty** | Low | OpenClaw → ZeroClaw path unclear despite preview tools |

### Satisfaction Drivers
- **Responsive security fixes** (TOTP, audit logging)
- **MCP ecosystem openness** vs. walled-garden alternatives
- **Active maintainer presence** (fettpl, chumyin rapid turnaround)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) `channel_ack_config` schema error | 4 days | **Blocking new users** | Maintainer triage — schema validation fix |
| [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) Feishu channel broken | 4 days | **China market access** | Config schema review — likely quick fix |
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) Multi-Agent Routing | 2 days | **Competitive parity** | Architecture RFC — OpenClaw feature gap |
| [PR #2761](https://github.com/zeroclaw-labs/zeroclaw/pull/2761) Core refactor | 2 days | **Merge conflict accumulation** | Risk:high label, multi-area touch — needs priority review |
| [PR #2757](https://github.com/zeroclaw-labs/zeroclaw/pull/2757) Process security hardening | 2 days | **S0 prevention** | Principal contributor — likely ready for merge |

---

**Project Health**: 🟢 **Strong** — 74% issue closure, security-first culture, MCP ecosystem investment. Watch: S1 open bugs (#2487, #2494) and CI runner availability ([PR #2889](https://github.com/zeroclaw-labs/zeroclaw/pull/2889)).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-06

## 1. Today's Overview

PicoClaw shows **extremely high development velocity** with 286 PRs updated in 24 hours (254 open, 32 merged/closed) and 25 active issues. The project is in a rapid iteration phase with no new releases cut today. Activity is heavily concentrated on provider integrations, channel expansions, and configuration hardening. Notably, there's significant community demand for edge deployment (OpenWrt, Raspberry Pi Pico) and enterprise features like multi-agent collaboration. The high open-to-closed PR ratio suggests a potential review bottleneck.

---

## 2. Releases

**No new releases** (v0.2.0 remains latest).

---

## 3. Project Progress

### Merged/Closed PRs Today (6 items)

| PR | Type | Summary |
|:---|:---|:---|
| [#1145](https://github.com/sipeed/picoclaw/pull/1145) | Bug fix | `fix(agent): respect global skills toggle for skill tools` — fixes config where `tools.skills.enabled=false` was ignored |
| [#534](https://github.com/sipeed/picoclaw/pull/534) | Enhancement | `feat: Add SearXNG as web search provider` — third backend alongside DuckDuckGo/Brave, addressing IP blocks and API cost issues |
| [#1149](https://github.com/sipeed/picoclaw/issues/1149) | Bug fix | Telegram voice media processing fixed (closed as resolved) |

### Notable Advances

- **Shell security hardening**: [#1097](https://github.com/sipeed/picoclaw/pull/1097) replaces regex-based deny-lists with AST-based risk classification using `mvdan.cc/sh/v3`
- **Signal channel**: [#630](https://github.com/sipeed/picoclaw/pull/630) adds Signal messaging via signal-cli (rebased, pending final review)
- **IRC channel**: [#1138](https://github.com/sipeed/picoclaw/pull/1138) + [#1137](https://github.com/sipeed/picoclaw/issues/1137) implements IRC with SASL/NickServ, auto-reconnection
- **Runtime model switching**: [#1093](https://github.com/sipeed/picoclaw/pull/1093) adds `/switch model <name>` for Telegram/Discord without gateway restart

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#100](https://github.com/sipeed/picoclaw/issues/100) | 10 comments, 2 👍, **CLOSED** | "No response" bug — **root cause**: OpenRouter model configuration. Reveals UX gap: users can't distinguish provider errors from agent failures |
| [#39](https://github.com/sipeed/picoclaw/issues/39) | 4 comments | `picoclaw doctor` diagnostic command — **underlying need**: onboarding friction, configuration debugging at scale |
| [#329](https://github.com/sipeed/picoclaw/issues/329) | 4 comments | Remote-referenced Skill Model — **underlying need**: disk space management, skill versioning, team sharing |
| [#738](https://github.com/sipeed/picoclaw/issues/738) | 4 comments | User-configurable hooks (pre/post tool execution) — **underlying need**: enterprise observability, custom business logic injection |
| [#243](https://github.com/sipeed/picoclaw/issues/243) | 3 comments, 1 👍 | "Where are the skills?" — **documentation gap** in skill discovery and integration |

**Pattern**: Users want PicoClaw to behave more like a **production platform** (observability, diagnostics, remote config) than a personal tool.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| **P0 — Deadlock** | [#1150](https://github.com/sipeed/picoclaw/issues/1150): Pool factory panic orphans inflight entry, permanent deadlock | **OPEN**, 0 comments | None |
| **P1 — Data race** | [#1151](https://github.com/sipeed/picoclaw/issues/1151): TUI PHI tab config writes race with other tabs; unescaped HomePath | **OPEN**, 0 comments | None |
| **P1 — Regression** | [#1148](https://github.com/sipeed/picoclaw/issues/1148): Commit `6c8866de` breaks local usecases (no channel config) | **OPEN**, 0 comments | None |
| **P2 — Provider** | [#1154](https://github.com/sipeed/picoclaw/issues/1154): Anthropic streaming error via OpenRouter on RISC-V/256MB | **OPEN**, 2 comments | None |
| **P2 — Config** | [#1153](https://github.com/sipeed/picoclaw/issues/1153): Duplicate `model_name` entries don't fall back correctly | **OPEN**, 0 comments | None |
| **P2 — Provider** | [#1103](https://github.com/sipeed/picoclaw/issues/1103): ModelScope.cn API fails — "unknown protocol deepseek-ai" | **OPEN**, 2 comments | None |
| **P2 — Provider** | [#1102](https://github.com/sipeed/picoclaw/issues/1102): DeepSeek `max_tokens` validation error | **OPEN**, 1 comment | None |
| **P2 — Timeout** | [#1025](https://github.com/sipeed/picoclaw/issues/1025): Shell command timeout hardcoded at 1m0s | **OPEN**, 2 comments | None |

**Critical concern**: Three high-severity bugs filed today with **zero fix PRs**, suggesting potential maintainer bandwidth constraints.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Request | Likelihood v0.3.0 | Rationale |
|:---|:---|:---|:---|
| **Multi-agent framework** | [#423](https://github.com/sipeed/picoclaw/pull/423) WIP: Blackboard shared context, agent handoff | **High** | PR exists, builds on merged #213/#131 |
| **Edge/embedded deployment** | [#784](https://github.com/sipeed/picoclaw/issues/784) Raspberry Pi Pico+LAN8720; [#1132](https://github.com/sipeed/picoclaw/issues/1132) OpenWrt | **Medium** | Aligns with Sipeed hardware roots, marketing opportunity |
| **IRC channel** | [#1138](https://github.com/sipeed/picoclaw/pull/1138) | **High** | PR ready, fills enterprise/ops gap |
| **Remote skills** | [#329](https://github.com/sipeed/picoclaw/issues/329) | **Medium** | Strong community demand, architectural change |
| **Hooks system** | [#738](https://github.com/sipeed/picoclaw/issues/738) | **Medium** | Enables ecosystem (self-improving-agent cited) |
| **`picoclaw doctor`** | [#39](https://github.com/sipeed/picoclaw/issues/39) | **Medium** | Onboarding blocker, relatively scoped |
| **CLI logins** | [#267](https://github.com/sipeed/picoclaw/issues/267) OpenAI/Gemini | **Low-Medium** | Convenience feature, OAuth complexity |

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | Quote/Example |
|:---|:---|:---|
| **Configuration complexity** | High | "Where are the skills, how can we integrate skills?" [#243](https://github.com/sipeed/picoclaw/issues/243) |
| **Provider fragility** | High | ModelScope, DeepSeek, OpenRouter all failing with cryptic errors |
| **Timeout rigidity** | Medium | "Command timed out after 1m0s" — no config option [#1025](https://github.com/sipeed/picoclaw/issues/1025) |
| **Documentation drift** | Medium | RAM minimum still 8GB in HTML table after 6GB fix elsewhere [#1152](https://github.com/sipeed/picoclaw/issues/1152) |

### Positive Signals
- Active self-hosting on constrained hardware (LicheeRV Nano 256MB, Raspberry Pi 4)
- Strong demand for **team/enterprise features** (remote skills, hooks, multi-agent)
- Community building integrations (IRC, Signal) for operational use cases

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#423](https://github.com/sipeed/picoclaw/pull/423) Multi-agent framework | ~16 days | **Staleness** | Maintainer review/merge decision |
| [#649](https://github.com/sipeed/picoclaw/pull/649) Memory/cache optimization | ~12 days | Performance | Review for v0.3.0 resource constraints |
| [#757](https://github.com/sipeed/picoclaw/pull/757) Cron agent response routing | ~9 days | Reliability | Fixes silent message drops |
| [#714](https://github.com/sipeed/picoclaw/pull/714) Skills install/reinstall CLI | ~10 days | UX | Refactors critical skill management |
| [#899](https://github.com/sipeed/picoclaw/pull/899) Docker bootstrap fix | ~6 days | Onboarding | First-run experience blocker |

**Recommendation**: The 254:32 open-to-merged PR ratio warrants process attention — consider triage labels or automated stale PR handling.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-06

## 1. Today's Overview

NanoClaw shows **high development velocity** with 50 PRs and 23 issues updated in the last 24 hours, indicating an active but potentially chaotic development phase. The project is experiencing a **stability crunch** with 12 open issues, 8 of which are high-priority bugs reported today alone. WhatsApp integration appears to be the most fragile subsystem, accounting for 4 critical bugs involving authentication loops, JID registration errors, and service restart hammering. The community is actively contributing skills (Ollama, Telegram voice, Google Chat, Mattermost, S3 storage) while core maintainers scramble to fix foundational issues. No new releases were cut, suggesting the team is prioritizing stability over shipping.

---

## 2. Releases

**No new releases** — version 1.1.3 remains current. The absence of a release despite 8 merged/closed PRs and numerous critical fixes suggests either: (a) a pending stability milestone, or (b) release process friction. Users on 1.1.3 continue to experience the `ANTHROPIC_MODEL` env var bug and WhatsApp auth issues now being patched.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Type | Summary |
|:---|:---|:---|:---|
| [#749](https://github.com/qwibitai/nanoclaw/pull/749) | @ptheo16 | Docs | Added test/typecheck/format commands and channel implementation patterns to CLAUDE.md |
| [#718](https://github.com/qwibitai/nanoclaw/pull/718) | @vweaver | Skill | `/add-telegram-voice` skill for local whisper.cpp transcription — **channel-agnostic architecture** |
| [#712](https://github.com/qwibitai/nanoclaw/pull/712) | @daniviber | Skill | `/add-ollama` skill for local model inference — addresses cost concerns from [#442](https://github.com/qwibitai/nanoclaw/issues/442) |
| [#740](https://github.com/qwibitai/nanoclaw/pull/740) | @glifocat | Test | Workflow validation (closed immediately) |
| [#739](https://github.com/qwibitai/nanoclaw/pull/739) | @gabi-simons | Security | Container `/proc` credential isolation test for [#737](https://github.com/qwibitai/nanoclaw/issues/737) |
| [#468](https://github.com/qwibitai/nanoclaw/pull/468) | @ofalvai | Fix | `ANTHROPIC_MODEL` env var exposure (superseded by [#738](https://github.com/qwibitai/nanoclaw/pull/738)) |
| [#441](https://github.com/qwibitai/nanoclaw/pull/441) | @dongggcom | Simplification | TUI interaction via Ink (React for CLI) |

### Key Advances

- **Local AI momentum**: Two skills merged for local inference (Ollama, Whisper), reducing API dependency
- **Security hardening**: Container credential isolation being actively tested
- **Developer experience**: Better documentation for testing and channel development

---

## 4. Community Hot Topics

| Issue/PR | Activity | Underlying Need |
|:---|:---|:---|
| [#526](https://github.com/qwibitai/nanoclaw/issues/526) | 3 👍, 1 comment | **Timezone reliability** — users in non-UTC zones (Sydney, PST) experiencing scheduling failures; core datetime handling needs overhaul |
| [#442](https://github.com/qwibitai/nanoclaw/issues/442) | 3 comments | **Cost reduction** — $5 setup cost for Claude API is barrier; demand for local/open-source model alternatives |
| [#393](https://github.com/qwibitai/nanoclaw/issues/393) | 3 comments | **Documentation gaps** — update/upgrade process unclear for self-hosters |
| [#472](https://github.com/qwibitai/nanoclaw/issues/472) / [#613](https://github.com/qwibitai/nanoclaw/issues/613) | 2 comments each | **Model selection control** — power users want to specify exact Claude model versions |
| [#642](https://github.com/qwibitai/nanoclaw/issues/642) | 2 comments | **Claude Code integration** — request for file-based IPC channel for CLI workflows |

**Analysis**: The community is split between (a) early adopters hitting configuration/model control limitations, and (b) cost-conscious users seeking local alternatives. The timezone issues suggest insufficient testing outside US/EU timezones.

---

## 5. Bugs & Stability

### Critical (High Priority, Reported Today)

| Issue | Description | Fix PR |
|:---|:---|:---|
| [#748](https://github.com/qwibitai/nanoclaw/issues/748) | **Service restart hammering WhatsApp** — `Restart=always` + missing backoff causes tight reconnection loop, risks server soft-block | [#746](https://github.com/qwibitai/nanoclaw/pull/746) |
| [#750](https://github.com/qwibitai/nanoclaw/issues/750) | **Wrong JID + trigger requirement in DM setup** — bot registers own number instead of sender's | [#751](https://github.com/qwibitai/nanoclaw/pull/751) |
| [#755](https://github.com/qwibitai/nanoclaw/issues/755) | **Missing CLAUDE.md in new groups** — agent runs without persona | [#756](https://github.com/qwibitai/nanoclaw/pull/756) |
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) | **OAuth token expires overnight** — containers fail with 401 each morning | *No PR yet* |
| [#732](https://github.com/qwibitai/nanoclaw/issues/732) / [#733](https://github.com/qwibitai/nanoclaw/issues/733) | **Streaming message fragmentation** — each chunk sent as separate WhatsApp message | *No PR yet* |
| [#737](https://github.com/qwibitai/nanoclaw/issues/737) | **[Security] API key exposure via `/proc` inspection** — agents can bypass secret protection | [#739](https://github.com/qwibitai/nanoclaw/pull/739) (closed), [#742](https://github.com/qwibitai/nanoclaw/pull/742) |

### Medium Priority

| Issue | Description | Fix PR |
|:---|:---|:---|
| [#747](https://github.com/qwibitai/nanoclaw/issues/747) | **Pairing code expires before display** in buffered contexts (CI, Claude Code Bash) | [#745](https://github.com/qwibitai/nanoclaw/pull/745) |
| [#753](https://github.com/qwibitai/nanoclaw/issues/753) | **Assistant name not updated in `groups/main/`** | [#754](https://github.com/qwibitai/nanoclaw/pull/754) |
| [#731](https://github.com/qwibitai/nanoclaw/issues/731) | **Ephemeral fnm node path breaks after `npm rebuild`** | *No PR yet* |
| [#728](https://github.com/qwibitai/nanoclaw/issues/728) | **Contradictory `send_message` tool description** for scheduled tasks | *No PR yet* |

**Assessment**: WhatsApp subsystem has **systemic reliability issues** — 4 critical bugs in authentication, registration, and message delivery. The OAuth token expiration ([#730](https://github.com/qwibitai/nanoclaw/issues/730)) is a **daily operational blocker** for users without API keys.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version |
|:---|:---|:---|
| **Unified media support** (images, video, audio, documents, stickers) | [#722](https://github.com/qwibitai/nanoclaw/issues/722) | **High** — architecturally significant, actively discussed |
| **Google Chat channel** | [#752](https://github.com/qwibitai/nanoclaw/pull/752) | **Medium** — PR submitted, needs review |
| **Mattermost channel** | [#546](https://github.com/qwibitai/nanoclaw/pull/546) | **Medium** — PR open since Feb 26, may need rebase |
| **S3 storage skill** | [#744](https://github.com/qwibitai/nanoclaw/pull/744) | **Medium** — PR submitted, blocked on review |
| **CLI/IPC channel for Claude Code** | [#642](https://github.com/qwibitai/nanoclaw/issues/642) | **Medium** — RFC stage, original contribution |
| **TUI terminal interface** | [#441](https://github.com/qwibitai/nanoclaw/pull/441) | **Low** — closed, may resurface |
| **Open-source model default** | [#442](https://github.com/qwibitai/nanoclaw/issues/442) | **Low-Medium** — skills exist (Ollama), but Claude remains default |

**Prediction**: The next release (likely 1.2.0) will focus on **WhatsApp stability fixes** plus **media support** ([#722](https://github.com/qwibitai/nanoclaw/issues/722)) as the headline feature. Channel expansion (Google Chat, Mattermost) may follow in 1.3.0.

---

## 7. User Feedback Summary

### Pain Points

| Issue | Frequency | Severity |
|:---|:---|:---|
| **WhatsApp authentication fragility** | Repeated reports | Critical — blocks onboarding |
| **Unexpected API costs** | [#442](https://github.com/qwibitai/nanoclaw/issues/442) | High — $5 surprise during setup |
| **Timezone handling** | [#526](https://github.com/qwibitai/nanoclaw/issues/526), [#483](https://github.com/qwibitai/nanoclaw/issues/483) | High — scheduling unreliable |
| **OAuth token daily expiration** | [#730](https://github.com/qwibitai/nanoclaw/issues/730) | High — requires manual intervention |
| **Documentation gaps** | [#393](https://github.com/qwibitai/nanoclaw/issues/393) | Medium — update process unclear |
| **Model selection ignored** | [#472](https://github.com/qwibitai/nanoclaw/issues/472), [#613](https://github.com/qwibitai/nanoclaw/issues/613) | Medium — power user frustration |

### Positive Signals

- **Skills architecture praised** — users successfully extending without core changes
- **Local AI integration** — Ollama/Whisper skills address cost concerns
- **Multi-channel demand** — active PRs for Google Chat, Mattermost, Telegram voice

### Use Cases Emerging

1. **Cost-conscious self-hosting** — users want to minimize Claude API usage
2. **Enterprise messaging** — Google Workspace, Mattermost integrations
3. **CI/automation workflows** — need for non-interactive setup (pairing code timing)
4. **Multi-timezone teams** — scheduling reliability across regions

---

## 8. Backlog Watch

### Stale Items Needing Attention

| Item | Age | Risk |
|:---|:---|:---|
| [#546](https://github.com/qwibitai/nanoclaw/pull/546) Mattermost skill | 8 days | Bitrot — may need rebase; community contribution at risk |
| [#670](https://github.com/qwibitai/nanoclaw/pull/670) Auto-retry on rate limits | 3 days | **Critical reliability fix** — needs review |
| [#738](https://github.com/qwibitai/nanoclaw/pull/738) `ANTHROPIC_MODEL` fix (v2) | 1 day | Second attempt after [#468](https://github.com/qwibitai/nanoclaw/pull/468) closed — needs maintainer decision |

### Maintainer Attention Required

1. **WhatsApp subsystem ownership** — 4 critical bugs suggest need for dedicated maintainer or architectural review
2. **Security response** — [#737](https://github.com/qwibitai/nanoclaw/issues/737) API key exposure needs CVE coordination and patch release
3. **Release cadence** — 8 merged fixes without release creates user confusion

---

*Generated from GitHub data for qwibitai/nanoclaw on 2026-03-06*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-06

## 1. Today's Overview

IronClaw shows **very high development velocity** with 22 issues updated and 30 PRs active in the last 24 hours. The project is in an intensive stabilization phase: 6 new E2E testing issues were filed targeting critical coverage gaps (worker.rs at 29%, routine.rs at 0%), while 5 performance/bug-fix PRs landed for prompt handling, tool ordering, and reasoning model parsing. Release v0.15.0 shipped two days ago with OAuth gateway improvements and error visibility enhancements. The 110 open issues (per triage report) indicate a young, rapidly evolving codebase with 72% feature requests and significant unassigned backlog risk.

---

## 2. Releases

### v0.15.0 (2026-03-04)

| Change | Details |
|--------|---------|
| **OAuth Gateway Routing** | Callbacks now route through web gateway for hosted instances — enables secure multi-tenant OAuth flows ([#555](https://github.com/nearai/ironclaw/pull/555)) |
| **Tool Error Visibility** | Web UI now displays detailed error information for failed tool calls, improving debuggability ([#490](https://github.com/nearai/ironclaw/pull/490)) |
| **Extensions Auth UX** | Improved authentication experience for extensions (notes truncated in source) |

**Migration Notes:** Hosted instance operators should verify OAuth callback URLs point to the web gateway endpoint.

---

## 3. Project Progress

### Merged/Closed Today (2 PRs, 2 Issues)

| Item | Type | Summary | Link |
|------|------|---------|------|
| #562 | Closed Issue | Fixed broken lambda route handlers in E2E tests (unawaited coroutine bug) | [Issue](https://github.com/nearai/ironclaw/issues/562) |
| #544 | Closed Issue | Removed Okta tool (scope reduction) | [Issue](https://github.com/nearai/ironclaw/issues/544) |
| #529 | Closed PR | 13-dimension complexity scorer integration for smart routing | [PR](https://github.com/nearai/ironclaw/pull/529) |

### Active Development (Key Open PRs)

| PR | Focus | Status |
|----|-------|--------|
| [#580](https://github.com/nearai/ironclaw/pull/580) | Reasoning model parsing fixes (GLM-4/5, DeepSeek R1, Qwen3) | Ready for review |
| [#583](https://github.com/nearai/ironclaw/pull/583) | System prompt optimization (build once per turn, ~30% perf gain potential) | Ready for review |
| [#582](https://github.com/nearai/ironclaw/pull/582) | Deterministic tool ordering (fixes HashMap non-determinism) | Ready for review |
| [#584](https://github.com/nearai/ironclaw/pull/584) | 46 new E2E tests + 3 production bug fixes | Large PR, CI parallelization |
| [#578](https://github.com/nearai/ironclaw/pull/578) | HTTP/web_fetch tool merge + large response handling | XL scope, high risk |
| [#577](https://github.com/nearai/ironclaw/pull/577) | Routine approval context for autonomous execution | XL scope, medium risk |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Analysis |
|------|------|----------|----------|
| 1 | [#548](https://github.com/nearai/ironclaw/issues/548) Add Search to Chat API | 2 comments | **Core capability gap**: Users need web search as default agent tool — indicates expectation parity with ChatGPT/Claude |
| 2 | [#545](https://github.com/nearai/ironclaw/issues/545) Configure credentials via chat | 1 comment | **Onboarding friction**: Tool setup requires UI context switching; chat-native config improves retention |
| 3 | [#538](https://github.com/nearai/ironclaw/issues/538) Upgrade agent via UI | 1 comment | **Operational maturity**: Self-service upgrades critical for hosted deployment |

### Underlying Needs Analysis
- **Search (#548)**: Signals that IronClaw is being evaluated against consumer AI assistants; search is table stakes
- **Chat-based config (#545)**: Reveals target user base expects conversational UX throughout, not just for core interactions
- **Testing surge**: 6 new E2E testing issues (#571-#575) filed by @ilblackdragon indicates engineering priority shift toward reliability before scale

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| **High** | [#568](https://github.com/nearai/ironclaw/issues/568) | Thread hydration loses tool-call history → model re-attempts prior calls (data loss, infinite loops) | **No PR yet** |
| **High** | [#564](https://github.com/nearai/ironclaw/issues/564) | `reasoning_content` leaks into tool calls; unclosed think tags; parsing gaps | **PR #580 ready** |
| **Medium** | [#443](https://github.com/nearai/ironclaw/issues/443) | Telegram group message auth bypass when `owner_id` is null | **No PR yet** |
| **Medium** | [#492](https://github.com/nearai/ironclaw/issues/492) | Missing HMAC-SHA256 webhook validation for Slack | **PR #579 in progress** |
| **Low** | [#566](https://github.com/nearai/ironclaw/issues/566) | Non-deterministic tool ordering from HashMap iteration | **PR #582 ready** |

### Stability Assessment
- **Critical regression risk**: #568 (thread hydration) could corrupt long-running conversations; needs immediate attention
- **Reasoning model reliability**: Multiple parsing issues suggest fragility with emerging model formats (DeepSeek R1, Qwen3)

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in v0.16 | Rationale |
|---------|----------|---------------------|-----------|
| Web search in Chat API | [#548](https://github.com/nearai/ironclaw/issues/548) | **High** | Small scope, high user demand, fits existing architecture |
| Chat-based credential config | [#545](https://github.com/nearai/ironclaw/issues/545) | **Medium** | UX improvement, depends on modal/form system |
| Agent upgrade UI | [#538](https://github.com/nearai/ironclaw/issues/538) | **Medium** | Requires backend version management + frontend work |
| Webhook HMAC verification | [#579](https://github.com/nearai/ironclaw/pull/579) | **Very High** | PR exists, security-critical for integrations |
| NVIDIA NIM provider | [#576](https://github.com/nearai/ironclaw/pull/576) | **High** | Enterprise GPU demand, PR ready |
| Venice.ai provider | [#451](https://github.com/nearai/ironclaw/pull/451) | **Medium** | Niche provider, community contribution |
| Multi-tenant auth | [#351](https://github.com/nearai/ironclaw/pull/351) | **Planned** | Part 3 of 3, blocked on #348/#349 merge |

---

## 7. User Feedback Summary

### Pain Points (from issues/PRs)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Tool call reliability** | #568 (lost history), #564 (parsing failures), #563 (narration vs action) | High |
| **Context management** | #567 (truncation needs), #166 (unbounded workspace growth) | Medium-High |
| **Setup friction** | #545 (credential config), #538 (upgrade process) | Medium |
| **Security gaps** | #443 (Telegram auth bypass), #492 (missing Slack HMAC) | Medium |

### Positive Signals
- v0.15.0 OAuth improvements indicate responsive hosted-deployment needs
- Extensive E2E test investment (#584: 46 new tests) shows quality commitment
- Active LLM provider expansion (NVIDIA NIM, Venice.ai) demonstrates ecosystem growth

---

## 8. Backlog Watch

### Critical Unassigned Issues (106 unassigned total per #558)

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#230](https://github.com/nearai/ironclaw/issues/230) Background sandbox reaper | 15 days | **Resource leak, crash recovery** | Core infrastructure; needs @ilblackdragon or @henrypark133 |
| [#166](https://github.com/nearai/ironclaw/issues/166) Memory hygiene retention | 16 days | **Performance degradation** | `hygiene.rs` exists but unintegrated — assign or close |
| [#557](https://github.com/nearai/ironclaw/issues/557) Security model for multi-tenant | New | **Architecture decision** | Needs security review before #351 merge |
| [#558](https://github.com/nearai/ironclaw/issues/558) Triage report (110 open) | New | **Process health** | Automated but unactioned — needs owner |

### Blocked PRs Requiring Maintainer Action

| PR | Blocker | Recommendation |
|----|---------|----------------|
| [#348](https://github.com/nearai/ironclaw/pull/348), [#349](https://github.com/nearai/ironclaw/pull/349), [#351](https://github.com/nearai/ironclaw/pull/351) | Sequential dependency chain | Batch review session; 3,500+ lines total |
| [#442](https://github.com/nearai/ironclaw/pull/442) | Depends on #411 | Verify #411 merged, then fast-track (pure test additions) |

---

**Project Health Score: B+** — High velocity, strong testing investment, but critical bugs (#568) and unassigned backlog (96% of issues) require immediate triage attention.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-06

## 1. Today's Overview

LobsterAI shows **high development velocity** with 23 PRs processed in 24 hours (22 merged/closed, 1 open) and 26 issues updated (14 active, 12 closed). The team is aggressively fixing Windows compatibility issues, OpenClaw gateway stability, and macOS sandbox problems. No new release was published today, suggesting the project is in a rapid iteration phase stabilizing core infrastructure. Community engagement is moderate with focused technical discussions around VM sandboxing, model provider integrations, and cross-platform support.

---

## 2. Releases

**No new releases** — Version 0.1.23 remains the latest stable release.

---

## 3. Project Progress

### Major Fixes & Infrastructure (22 PRs merged)

| PR | Description | Impact |
|:---|:---|:---|
| [#301](https://github.com/netease-youdao/LobsterAI/pull/301) | Fix macOS sandbox issues | Critical stability fix |
| [#300](https://github.com/netease-youdao/LobsterAI/pull/300) | Fix conversation resume error after model switch | UX improvement |
| [#297](https://github.com/netease-youdao/LobsterAI/pull/297) | Fix Windows CMD popup during task responses | Windows polish |
| [#295](https://github.com/netease-youdao/LobsterAI/pull/295) | Fix Windows CC startup failure | Windows blocker resolved |
| [#294](https://github.com/netease-youdao/LobsterAI/pull/294) | Use Electron Helper runtime on macOS to prevent app relaunch | macOS stability |
| [#291](https://github.com/netease-youdao/LobsterAI/pull/291) | **NIM SDK migration to npm** — removed 53,000 lines of embedded SDK, added online message filtering & P2P read receipts | Major technical debt reduction |
| [#290](https://github.com/netease-youdao/LobsterAI/pull/290) | Sync working directory to OpenClaw config | Configuration fix |
| [#261](https://github.com/netease-youdao/LobsterAI/pull/261), [#279](https://github.com/netease-youdao/LobsterAI/pull/279), [#287](https://github.com/netease-youdao/LobsterAI/pull/287) | **Windows OpenClaw gateway startup fixes** — ASAR path normalization, ESM+ASAR compatibility, process.argv handling | Multi-PR effort for Windows reliability |
| [#289](https://github.com/netease-youdao/LobsterAI/pull/289) | MCP market dynamic configuration support | Extensibility |
| [#276](https://github.com/netease-youdao/LobsterAI/pull/276) | **Add Youdao Zhiyun provider channel** for private DeepSeek/Kimi deployment | Enterprise/China market feature |
| [#280](https://github.com/netease-youdao/LobsterAI/pull/280) | Fix cowork time defaulting to UTC | Timezone accuracy |
| [#274](https://github.com/netease-youdao/LobsterAI/pull/274) | Fix slow error reporting when LLM fails | Error handling UX |

**Key Themes:** Windows platform hardening, OpenClaw engine reliability, SDK modernization, and China-localized enterprise features.

---

## 4. Community Hot Topics

### Most Discussed Issues

| Issue | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#185](https://github.com/netease-youdao/LobsterAI/issues/185) | 3 | OpenAI Responses API format support for GPT-5.3-codex | **API standard compatibility** — users need cutting-edge model support |
| [#12](https://github.com/netease-youdao/LobsterAI/issues/12) | 3 | M2 Pro performance lag vs. competitors | **Performance parity** with rival products (StepFun, Cowork) |
| [#196](https://github.com/netease-youdao/LobsterAI/issues/196) | 2 | `find-skills` import failure | **Skill ecosystem interoperability** — Vercel AI SDK compatibility |
| [#275](https://github.com/netease-youdao/LobsterAI/issues/275) | 2 | VM sandbox unavailable on macOS 26.2 | **Secure execution environment** for untrusted code |
| [#230](https://github.com/netease-youdao/LobsterAI/issues/230) | 2 | Chinese path handling adds spaces | **CJK localization quality** |

**Analysis:** Users are pushing for enterprise-grade reliability (sandboxing), modern API standards, and competitive performance. The skill ecosystem's interoperability with external tools (Vercel, Playwright) is a growing concern.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **Critical** | [#275](https://github.com/netease-youdao/LobsterAI/issues/275) | VM sandbox fails on macOS 26.2 — QEMU PCI slot exhaustion | **Partially addressed** by #301 |
| **Critical** | [#284](https://github.com/netease-youdao/LobsterAI/issues/284) | Electron dev startup failure on Arch Linux + awesome WM | **Open** — Linux desktop environment compatibility gap |
| **High** | [#292](https://github.com/netease-youdao/LobsterAI/issues/292) | UI forced height stretch/white screen on long context | **Open** — Layout engine bug |
| **High** | [#293](https://github.com/netease-youdao/LobsterAI/issues/293) | Playwright MCP npx download failure | **Open** — Skill runtime dependency issue |
| **Medium** | [#230](https://github.com/netease-youdao/LobsterAI/issues/230) | Chinese filenames get spaces injected | **Open** — String processing bug |
| **Medium** | [#277](https://github.com/netease-youdao/LobsterAI/issues/277) | Email config invisible in VM sandbox mode | **Open** — Config isolation issue |
| **Medium** | [#286](https://github.com/netease-youdao/LobsterAI/issues/286) | Input link parsing breaks sentence segmentation | **Open** — Editor component bug |
| **Medium** | [#285](https://github.com/netease-youdao/LobsterAI/issues/285) | DingTalk robot notifications auto-expire | **Open** — Integration reliability |

**Regression Risk:** Multiple VM sandbox configuration propagation issues suggest the sandbox isolation layer needs systematic review.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Lark/Feishu bot group chat** | [#299](https://github.com/netease-youdao/LobsterAI/issues/299) | **High** | Enterprise China market; complements existing DingTalk support |
| **Discord typing indicators** | [#288](https://github.com/netease-youdao/LobsterAI/issues/288) | **Medium** | Low effort, proven pattern from OpenClaw |
| **Automatic context management** | [#282](https://github.com/netease-youdao/LobsterAI/issues/282) | **Medium** | Core UX gap; competitor standard feature |
| **Ubuntu Linux official build** | [#273](https://github.com/netease-youdao/LobsterAI/issues/273) | **Low-Medium** | Request closed but demand persists; #284 suggests Linux support expanding |
| **OpenAI Responses API format** | [#185](https://github.com/netease-youdao/LobsterAI/issues/185) | **High** | Blocks GPT-5.3-codex usage; active discussion |
| **Enhanced math skills** | [#168](https://github.com/netease-youdao/LobsterAI/issues/168) | **Medium** | Closed but represents recurring need for domain-specific skills |

**Emerging Pattern:** Workflow enhancement PR [#240](https://github.com/netease-youdao/LobsterAI/pull/240) (open) suggests multi-agent orchestration with role-specific souls — potential v0.3.0 flagship feature.

---

## 7. User Feedback Summary

### Pain Points
| Category | Evidence | Severity |
|:---|:---|:---|
| **Windows-first-class treatment** | Multiple Windows-specific fixes (#297, #295, #261, #279, #287) | Resolved but was blocker |
| **Update friction** | #53, #121, #235 — no in-app update button | **High** — repeatedly reported |
| **Sandbox complexity** | #275, #277 — config isolation confusing | **Medium** |
| **Skill ecosystem gaps** | #196, #293 — external tools break | **Medium** |

### Positive Signals
- Active maintainer response: Most issues closed same-day with fixes
- Enterprise localization: Youdao Zhiyun integration (#276) shows China-market commitment
- NIM SDK modernization (#291) demonstrates technical investment

### Competitive Positioning
Users explicitly compare to **StepFun client** and **Cowork** (#12) — performance and polish gaps are noticed.

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#105](https://github.com/netease-youdao/LobsterAI/issues/105) | 9 days | **Stale** — `max_completion_tokens` error with local models | Needs triage: local LLM config validation |
| [#145](https://github.com/netease-youdao/LobsterAI/issues/145) | 7 days | **Security** — API key exposure via memory entries | Needs secure credential storage design |
| [#240](https://github.com/netease-youdao/LobsterAI/pull/240) | 2 days | **Feature** — Workflow enhancement with agent roles | Needs maintainer review for v0.3.0 roadmap |
| [#185](https://github.com/netease-youdao/LobsterAI/issues/185) | 6 days | **Compatibility** — OpenAI Responses API | Needs priority assignment for model provider updates |

---

**Project Health Score: 🟢 Active** — High merge velocity, responsive maintainers, infrastructure-focused sprint. Risk: Linux support gaps and sandbox configuration complexity need sustained attention.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-06

## 1. Today's Overview

TinyClaw shows moderate community activity with **3 active issues and 3 open pull requests** updated in the last 24 hours, though no code has been merged to main. The project is experiencing growing pains typical of rapid adoption: a **version tagging mismatch** is causing user-facing update notifications to display incorrectly, and **macOS stability issues** are blocking some users from running the agent reliably. Community contributions remain healthy with two new AI provider integrations pending (Avian, OpenViking) and a proposal for CI/CD infrastructure improvements. No releases were cut today, suggesting maintainers are prioritizing stability fixes before shipping v0.0.9.

---

## 2. Releases

**No new releases** — v0.0.9 tag exists but has not been officially released. See Issue #160 for version synchronization problems.

---

## 3. Project Progress

**No PRs merged today.** Active development continues on:

| PR | Author | Status | Focus |
|:---|:---|:---|:---|
| [#161](https://github.com/TinyAGI/tinyclaw/pull/161) | @michaelerobertsjr | Open, ready for review | **CI/CD fix** — prevents future tag/package.json version mismatches |
| [#143](https://github.com/TinyAGI/tinyclaw/pull/143) | @avianion | Open, updated today | **New provider** — Avian AI integration (OpenAI-compatible API) |
| [#150](https://github.com/TinyAGI/tinyclaw/pull/150) | @mczabca-boop | Open, updated today | **Plugin system** — OpenViking continuation after security hardening |

**Assessment:** Infrastructure and ecosystem expansion are the current priorities. The Avian and OpenViking PRs represent third-party contributions expanding TinyClaw's AI provider ecosystem.

---

## 4. Community Hot Topics

### Most Active: Version Mismatch Confusion
- **[#160](https://github.com/TinyAGI/tinyclaw/issues/160)** — 2 comments, 1 👍
  - **Core problem:** Git tag v0.0.9 and package.json v0.0.8 are out of sync, causing false "Update Available" notifications
  - **User impact:** Confusion about whether updates are actually available
  - **Fix ready:** PR #161 addresses this at the CI level

### Stability Concern: macOS Process Management
- **[#156](https://github.com/TinyAGI/tinyclaw/issues/156)** — 2 comments, active debugging
  - **Core problem:** tmux-based process spawning fails on macOS (zsh shell race condition)
  - **User impact:** Complete inability to run TinyClaw on macOS for affected users
  - **Underlying need:** Better cross-platform process management, possibly moving away from tmux dependency

### Infrastructure Proposal
- **[#162](https://github.com/TinyAGI/tinyclaw/issues/162)** — New proposal for integration tests and multi-OS release safety
  - **Signals maintainer awareness** of reliability gaps as adoption scales

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#156](https://github.com/TinyAGI/tinyclaw/issues/156) | macOS: All channel/queue processes exit immediately — shell init race condition in tmux | **No fix PR** — needs investigation |
| **Medium** | [#160](https://github.com/TinyAGI/tinyclaw/issues/160) | False update notifications due to tag/package.json mismatch | **Fix PR ready:** [#161](https://github.com/TinyAGI/tinyclaw/pull/161) |

**Stability assessment:** The macOS process crash is the critical blocker preventing platform adoption. The version mismatch, while annoying, has a pending fix.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **Avian AI provider** | PR [#143](https://github.com/TinyAGI/tinyclaw/pull/143) | High — OpenAI-compatible, low integration risk |
| **OpenViking plugin continuation** | PR [#150](https://github.com/TinyAGI/tinyclaw/pull/150) | Medium — depends on security review from #149 |
| **Automated testing & multi-OS CI** | Issue [#162](https://github.com/TinyAGI/tinyclaw/issues/162) | Medium — infrastructure investment, may precede v0.1.0 |
| **Cross-platform process manager** (replacing tmux) | Implied by #156 | Lower — architectural change, but may be forced by macOS issues |

---

## 7. User Feedback Summary

**Pain Points:**
- **Reliability:** macOS users cannot reliably start the agent (#156)
- **Trust:** Version/checksum mismatches erode confidence in update mechanism (#160)
- **Platform parity:** Ubuntu-only CI suggests second-class macOS/Windows support

**Use Cases Emerging:**
- Multi-provider AI orchestration (Avian, OpenViking additions suggest users want flexibility)
- Production deployment readiness (Issue #162's call for integration tests indicates serious adoption)

**Satisfaction:** Contributors are engaged (3 quality PRs), but the lack of merged code and persistent platform issues suggest maintainer bandwidth may be constrained.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#143](https://github.com/TinyAGI/tinyclaw/pull/143) Avian provider | 7 days | Low — may conflict with other provider PRs | Review/merge or provide feedback |
| [#150](https://github.com/TinyAGI/tinyclaw/pull/150) OpenViking | 7 days | Medium — security-related (#149 dependency) | Security review, rebase verification |
| [#156](https://github.com/TinyAGI/tinyclaw/issues/156) macOS crash | 3 days | **High** — platform blocker | Maintainer reproduction, architecture decision |

**Recommendation:** Prioritize #156 investigation and #161 merge to restore release confidence. The two provider PRs (#143, #150) represent community goodwill that benefits from timely response.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-06

## 1. Today's Overview

CoPaw shows **very high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, alongside 2 new releases (v0.0.5 and v0.0.5-beta.3). The project is in active stabilization phase following the v0.0.5 milestone, with significant focus on **channel reliability** (iMessage, Feishu, Telegram, QQ), **image handling fixes**, and **provider compatibility** (Azure OpenAI GPT-5, Ollama, OpenRouter). Community engagement is strong with 13 open issues actively discussed. The rapid closure rate (37/50 issues, 34/50 PRs) indicates responsive maintainer attention.

---

## 2. Releases

### [v0.0.5](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.0.5) & [v0.0.5-beta.3](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.0.5-beta.3)

| Aspect | Details |
|--------|---------|
| **Headline Feature** | **Channel Management System** — comprehensive channel customization with filter tabs (All/Built-in/Custom), dynamic custom-field editor, and channel type badges |
| **Key PR** | [#615](https://github.com/agentscope-ai/CoPaw/pull/615) |
| **Breaking Changes** | None explicitly noted |
| **Migration Notes** | Users upgrading from v0.0.4 may need to reconfigure custom model parameters (see [#730](https://github.com/agentscope-ai/CoPaw/issues/730) — fixed in this release) |

---

## 3. Project Progress

### Merged/Closed PRs (34 total, key highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#753](https://github.com/agentscope-ai/CoPaw/pull/753) | @xieyxclack | Version bump to 0.0.5 + release notes | **Release milestone** |
| [#340](https://github.com/agentscope-ai/CoPaw/pull/340) | @fancyboi999 | Convert local image URLs to base64 blocks | Fixes critical image handling bug for OpenAI-compatible endpoints |
| [#616](https://github.com/agentscope-ai/CoPaw/pull/616) | @fancyboi999 | Avoid file URI for local image sources | Complementary fix to #340, prevents `file://` URL issues |
| [#255](https://github.com/agentscope-ai/CoPaw/pull/255) | @liuxiaopai-ai | Respect configured Ollama base URL for list/pull/delete | Fixes Ollama integration reliability |
| [#207](https://github.com/agentscope-ai/CoPaw/pull/207) | @liuxiaopai-ai | Add message-ID deduplication to BaseChannel | Eliminates duplicate replies across all channels |
| [#192](https://github.com/agentscope-ai/CoPaw/pull/192) | @dipeshbabu | Prevent deadlock on large stdout + regression tests | Stability improvement for skill execution |
| [#755](https://github.com/agentscope-ai/CoPaw/pull/755) | @rayrayraykk | Docker latest update CI | DevOps/infrastructure improvement |

**Themes:** Image processing reliability, channel stability, local model support, infrastructure hardening.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Rank | Issue | Comments | Status | Core Need |
|:---|:---|:---:|:---|:---|
| 1 | [#423](https://github.com/agentscope-ai/CoPaw/issues/423) GGUF model loading failure | 10 | **CLOSED** | Local model (llama.cpp/GGUF) support reliability |
| 2 | [#91](https://github.com/agentscope-ai/CoPaw/issues/91) QQ bot not responding | 9 | **OPEN** | QQ channel callback/webhook configuration clarity |
| 3 | [#660](https://github.com/agentscope-ai/CoPaw/issues/660) 401 error after installation | 8 | **CLOSED** | Authentication/setup documentation gaps |
| 4 | [#400](https://github.com/agentscope-ai/CoPaw/issues/400) DingTalk image crashes conversation | 5 | **CLOSED** | Image message format compatibility |
| 5 | [#318](https://github.com/agentscope-ai/CoPaw/issues/318) Local image → OpenAI API error | 5 | **CLOSED** | Image URL validation for vision models |

### Underlying Needs Analysis

- **Local model deployment** is a major adoption driver (GGUF, Ollama, llama.cpp issues highly engaged)
- **Channel-specific quirks** (QQ, DingTalk, Feishu) create friction — users need clearer debugging tools
- **Image handling** is fragile across multiple channels, indicating need for unified media processing layer

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#736](https://github.com/agentscope-ai/CoPaw/issues/736) Response hallucination/corruption | **OPEN** | None | Session state corruption causing wrong answers after restart |
| 🔴 **Critical** | [#745](https://github.com/agentscope-ai/CoPaw/issues/745) Bad Request errors | **OPEN** | None | Generic 400 errors, root cause unclear |
| 🟡 **High** | [#91](https://github.com/agentscope-ai/CoPaw/issues/91) QQ bot unresponsive | **OPEN** | None | Callback configuration issue — console shows messages but no reply |
| 🟡 **High** | [#682](https://github.com/agentscope-ai/CoPaw/issues/682) `FunctionNotFoundError: execute` in skill-creator | **OPEN** | None | Skill execution framework regression |
| 🟡 **High** | [#733](https://github.com/agentscope-ai/CoPaw/issues/733) Azure OpenAI GPT-5 series unusable | **OPEN** | [#756](https://github.com/agentscope-ai/CoPaw/pull/756) | `max_tokens` vs `max_completion_tokens` parameter mismatch |
| 🟢 **Medium** | [#619](https://github.com/agentscope-ai/CoPaw/issues/619) Feishu paste-as-post image misclassification | **OPEN** | None | UX issue with image handling |
| 🟢 **Medium** | [#502](https://github.com/agentscope-ai/CoPaw/issues/502) Console compact history & token monitoring | **OPEN** | None | Feature request with implementation hints |

**Fixed Today:** #423 (GGUF), #400 (DingTalk images), #318 (local images), #568 (custom provider CLI), #746 (Ollama library), #741 (script execution freeze), #730 (config loss on upgrade), #758 (Feishu cron persistence)

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Per-channel thinking content toggle** | [#631](https://github.com/agentscope-ai/CoPaw/issues/631), [#491](https://github.com/agentscope-ai/CoPaw/issues/491), [#24](https://github.com/agentscope-ai/CoPaw/issues/24) | **High** | 3 related issues, clear user pain, aligns with v0.0.5 channel management theme |
| **Plugin marketplace (OpenClaw-style)** | [#731](https://github.com/agentscope-ai/CoPaw/issues/731) | Medium | Strategic question — may require architecture decision |
| **Console compact history + token monitoring** | [#502](https://github.com/agentscope-ai/CoPaw/issues/502) | Medium | Well-specified, console-focused improvement |
| **iMessage documentation** | [#416](https://github.com/agentscope-ai/CoPaw/issues/416) | High | Documentation gap blocking adoption |
| **MCP hot-reload** | [#754](https://github.com/agentscope-ai/CoPaw/pull/754) | **In Progress** | Active PR open |

---

## 7. User Feedback Summary

### Pain Points 😤

| Issue | Frequency | User Quote (paraphrased) |
|:---|:---|:---|
| **Image handling breaks conversations** | High | "Sending image in DingTalk causes 400 error and poisons session history" |
| **Configuration lost on upgrade** | Medium | "Every update loses my custom LLM settings" — **Fixed in v0.0.5** |
| **Channel-specific quirks undocumented** | High | "iMessage docs completely missing, don't know how to configure" |
| **Thinking content overload** | Medium | "Feishu/QQ showing `<think>` tags is annoying" |
| **Session corruption after crashes** | Medium | "Restarted after freeze, now answers wrong questions" |

### Satisfaction Drivers 😊

- **Responsive fixes**: Multiple users reported issues closed same-day
- **Channel flexibility**: Strong appreciation for multi-platform support
- **Local model support**: Active community around GGUF/Ollama integration

### Use Case Patterns

1. **Enterprise IM integration** (Feishu, DingTalk, QQ) — needs polished UX
2. **Local/self-hosted AI** — llama.cpp, Ollama, custom providers
3. **Automation/cron jobs** — scheduled task execution

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#763](https://github.com/agentscope-ai/CoPaw/pull/763) iMessage error surfacing | 1 day | Low | Review ready — improves debugging for problematic channel |
| [#762](https://github.com/agentscope-ai/CoPaw/pull/762) First-time contributor welcome | 1 day | Low | Community building — quick win |
| [#759](https://github.com/agentscope-ai/CoPaw/pull/759) OpenRouter provider | 1 day | Medium | First-time contributor — needs review for provider architecture alignment |
| [#754](https://github.com/agentscope-ai/CoPaw/pull/754) MCP hot-reload | 1 day | Medium | Config system enhancement — partial roadmap item |
| [#502](https://github.com/agentscope-ai/CoPaw/issues/502) Console improvements | 2 days | Low | Well-scoped feature request, candidate for good-first-issue |

**No stale critical items** — maintainer responsiveness is excellent. Consider triaging [#736](https://github.com/agentscope-ai/CoPaw/issues/736) (response corruption) as highest priority open bug.

---

*Generated from GitHub activity 2026-03-05 to 2026-03-06*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-06

## 1. Today's Overview

ZeptoClaw shows **exceptionally high development velocity** with 15 issues and 10 PRs updated in 24 hours, demonstrating an active maintainer-led sprint. The project is in a **stability-hardening phase**, with heavy focus on SSRF protection, cron reliability, and async task crash isolation. Security receives particular attention with two CVE-class vulnerabilities patched today. No new releases were cut, suggesting the team is accumulating changes for a larger version bump. The 80% closure rate on issues (12/15) indicates efficient triage and execution.

---

## 2. Releases

**No new releases** — version accumulation phase continues.

---

## 3. Project Progress

### Merged/Closed PRs Today (5 items)

| PR | Description | Significance |
|:---|:---|:---|
| [#256](https://github.com/qhkm/zeptoclaw/pull/256) | **Kernel convergence**: safety scan rename, agent loop gate routing, provider status CLI | **Architectural milestone** — unifies all tool execution through kernel layer for consistent safety/taint tracking |
| [#255](https://github.com/qhkm/zeptoclaw/pull/255) | Cron scheduler reliability audit — duplicate delivery guard, wall-clock anchoring, per-job timeouts | Production-grade cron stability, ports OpenClaw's battle-tested patterns |
| [#247](https://github.com/qhkm/zeptoclaw/pull/247) | xAI (Grok) and Baidu Qianfan provider presets | Expands provider ecosystem with zero new backend code |
| [#216](https://github.com/qhkm/zeptoclaw/pull/216) | Show configured provider models in `/model list` | UX improvement for multi-model workflows |
| [#183](https://github.com/qhkm/zeptoclaw/pull/183) | Dependency updates with supply chain security hardening | Dependabot integration, pinned actions, clippy fixes |

### Key Architectural Advances

- **Unified kernel execution**: All tool calls now route through `kernel::execute_tool()`, ensuring taint tracking and safety policies apply consistently ([#249](https://github.com/qhkm/zeptoclaw/issues/249))
- **Safety API modernization**: `check_tool_output()` renamed to `scan()` with `CheckDirection` enum, eliminating semantic confusion ([#251](https://github.com/qhkm/zeptoclaw/issues/251))

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#193](https://github.com/qhkm/zeptoclaw/issues/193) — LLM endpoint switching in Telegram | 3 comments, closed | **User pain point resolved**: Rate limit mitigation via `/models` and `/model` commands. Shows demand for operational flexibility in production deployments. |
| [#222](https://github.com/qhkm/zeptoclaw/issues/222) — Per-template capability sandbox | 1 comment, **OPEN** | **Emerging security architecture**: Self-describing templates with tool allowlists and resource limits. Positions ZeptoClaw for multi-tenant/enterprise scenarios. |
| [#259](https://github.com/qhkm/zeptoclaw/issues/259) — Spawned task crash isolation | 1 comment, **OPEN** | **Critical reliability gap**: Panic propagation beyond Telegram channel. Fix PR [#265](https://github.com/qhkm/zeptoclaw/pull/265) already drafted. |

**Underlying needs identified**:
- **Operational resilience**: Users need graceful degradation when LLM endpoints fail or rate-limit
- **Security boundaries**: Template-level sandboxing suggests demand for isolated execution contexts
- **Observability**: Provider chain introspection CLI indicates debugging complexity in multi-provider setups

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| **P1-Critical** | [#249](https://github.com/qhkm/zeptoclaw/issues/249) — Agent loop bypasses kernel safety layer | **FIXED** via [#256](https://github.com/qhkm/zeptoclaw/pull/256) | ✅ Merged |
| **P2-High** | [#259](https://github.com/qhkm/zeptoclaw/issues/259) — Panic isolation gaps in channels/tools | **OPEN** | [#265](https://github.com/qhkm/zeptoclaw/pull/265) drafted |
| **P2-High** | [#244](https://github.com/qhkm/zeptoclaw/issues/244) — Context overflow from oversized tool results | **FIXED** | Two-layer recovery merged |
| **SECURITY** | [#264](https://github.com/qhkm/zeptoclaw/issues/264), [#263](https://github.com/qhkm/zeptoclaw/issues/263) — SSRF via redirect hops | **FIXED** via [#261](https://github.com/qhkm/zeptoclaw/pull/261) | ✅ Merged (GHSA-5gqm-m96q-7h65) |
| **P3-Normal** | [#253](https://github.com/qhkm/zeptoclaw/issues/253) — Cron timer drift | **FIXED** via [#255](https://github.com/qhkm/zeptoclaw/pull/255) | Wall-clock anchoring |
| **P3-Normal** | [#252](https://github.com/qhkm/zeptoclaw/issues/252) — Duplicate cron delivery on crash recovery | **FIXED** via [#255](https://github.com/qhkm/zeptoclaw/pull/255) | 60s deduplication guard |

**Stability assessment**: Excellent proactive hardening. The SSRF fixes address externally-reported vulnerabilities (GHSA advisory). Only [#259](https://github.com/qhkm/zeptoclaw/issues/259) remains open with a ready fix.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Per-template capability sandbox** | [#222](https://github.com/qhkm/zeptoclaw/issues/222) | **High** | Core maintainer authored, security-critical, aligns with enterprise positioning |
| **Harness engineering practices** | [#257](https://github.com/qhkm/zeptoclaw/issues/257) | **Medium** | Infrastructure investment; may be incremental adoption |
| **Discord HTTP CONNECT proxy** | [#262](https://github.com/qhkm/zeptoclaw/pull/262) | **Medium** | Enterprise deployment blocker; PR open needs review |
| **Containerized agent token tracking** | [#258](https://github.com/qhkm/zeptoclaw/pull/258) | **Medium** | Completes observability gap in container mode |
| **Skill installer SSRF guardrails** | [#260](https://github.com/qhkm/zeptoclaw/pull/260) | **High** | Security hardening, PR open |

**Version prediction**: The accumulation of kernel convergence, cron reliability, and security fixes suggests a **v0.9.x or v0.10.0** release focusing on production readiness.

---

## 7. User Feedback Summary

### Pain Points Addressed
| Issue | User Need | Resolution |
|:---|:---|:---|
| [#193](https://github.com/qhkm/zeptoclaw/issues/193) | Rate-limited endpoints break workflows | Telegram model switching implemented |
| [#250](https://github.com/qhkm/zeptoclaw/issues/250) | Opaque provider chain debugging | `zeptoclaw provider status` CLI added |
| [#216](https://github.com/qhkm/zeptoclaw/issues/216) | Custom models invisible in `/model list` | Configured models now surfaced |

### Satisfaction Indicators
- Rapid turnaround on security reports (SSRF issues same-day fix)
- OpenClaw compatibility audit shows ecosystem awareness
- Zero "stale" or frustrated comments in closed issues

### Dissatisfaction Signals
- None evident; all closed issues show clean resolution patterns

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#257](https://github.com/qhkm/zeptoclaw/issues/257) — Harness engineering RFC | 1 day | Low | Discussion phase; no blockers |
| [#222](https://github.com/qhkm/zeptoclaw/issues/222) — Template sandbox | 2 days | Medium | Awaiting implementation; no PR yet |
| [#265](https://github.com/qhkm/zeptoclaw/pull/265) — Crash isolation fix | 1 day | **High** | **Ready for merge** — blocks [#259](https://github.com/qhkm/zeptoclaw/issues/259) |

**Maintainer attention**: [#265](https://github.com/qhkm/zeptoclaw/pull/265) is the highest-priority open item — a complete fix for the last P2-high stability issue. The four other open PRs ([#261](https://github.com/qhkm/zeptoclaw/pull/261), [#262](https://github.com/qhkm/zeptoclaw/pull/262), [#258](https://github.com/qhkm/zeptoclaw/pull/258), [#260](https://github.com/qhkm/zeptoclaw/pull/260)) are all merge-ready features awaiting review.

---

*Digest generated from 15 issues and 10 PRs updated 2026-03-05 to 2026-03-06*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-03-06

---

## 1. Today's Overview

EasyClaw shows **minimal development activity** over the past 24 hours with **3 new issues opened** and **zero pull requests or releases**. The project appears to be in a maintenance phase with active user reporting but limited maintainer response. All three issues relate to **platform compatibility, model integration, and migration path completion** — suggesting the project is stabilizing post-rebranding (from "OpenClaw" to "EasyClaw"). No code contributions were merged, indicating potential maintainer bandwidth constraints. Community engagement exists but is currently one-directional (users reporting, maintainers not yet responding).

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

**No merged or closed PRs today.**

No features advanced or fixes deployed in the last 24 hours. Development appears stalled pending maintainer review.

---

## 4. Community Hot Topics

| Issue | Engagement | Analysis |
|-------|-----------|----------|
| [#8 macOS26.3 in-app update installation failure](https://github.com/gaoyangz77/easyclaw/issues/8) | 1 comment, 0 reactions | **Critical platform blocker** — macOS auto-updater broken, affecting user retention |
| [#9 BaiLian CodingPlan vision capabilities not supported](https://github.com/gaoyangz77/easyclaw/issues/9) | 1 comment, 0 reactions | **Model integration gap** — Users expect multimodal (vision) support for Qwen3.5/Kimi2.5 but EasyClaw defaults to text-only |
| [#10 Skills directory path inconsistency post-migration](https://github.com/gaoyangz77/easyclaw/issues/10) | 1 comment, 0 reactions | **Technical debt** — Incomplete migration from `.openclaw` to `.easyclaw` causing config/UI desync |

**Underlying needs identified:**
- **Reliable cross-platform distribution** (macOS code-signing/notarization for updates)
- **Full multimodal AI capability exposure** (vision, not just text)
- **Clean migration tooling** for legacy users

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 **High** | [#8](https://github.com/gaoyangz77/easyclaw/issues/8) | macOS in-app updater fails post-download — breaks update flow entirely | ❌ None |
| 🟡 **Medium** | [#10](https://github.com/gaoyangz77/easyclaw/issues/10) | Skills path split between `.openclaw` and `.easyclaw` — config drift risk | ❌ None |
| 🟢 **Low-Medium** | [#9](https://github.com/gaoyangz77/easyclaw/issues/9) | Vision capabilities not exposed (feature gap, not crash) | ❌ None |

**No fix PRs exist** for any reported issues. The macOS update failure is the most urgent stability risk.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version |
|---------|--------|---------------------------|
| **Vision/multimodal support for BaiLian models** | [#9](https://github.com/gaoyangz77/easyclaw/issues/9) | High — appears to be configuration-level fix (enabling existing model capabilities) |
| **Unified migration tool for path cleanup** | [#10](https://github.com/gaoyangz77/easyclaw/issues/10) | Medium — requires engineering effort for config reconciliation |
| **Robust macOS code-signed updates** | [#8](https://github.com/gaoyangz77/easyclaw/issues/8) | Medium — depends on CI/CD and Apple developer account setup |

**Prediction:** Vision support (#9) is the easiest lift and most likely to ship next, as it appears to be a configuration default issue rather than architectural work.

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|-------|----------|-----------|
| **Migration friction** | [#10](https://github.com/gaoyangz77/easyclaw/issues/10) — "迁移不完全" (incomplete migration) | 😤 Frustrated |
| **Expectation mismatch on AI capabilities** | [#9](https://github.com/gaoyangz77/easyclaw/issues/9) — models support vision but EasyClaw doesn't expose it | 😕 Confused/Disappointed |
| **macOS polish gaps** | [#8](https://github.com/gaoyangz77/easyclaw/issues/8) — update flow broken on latest macOS | 😤 Blocked |

**Use case pattern:** Users are integrating EasyClaw with Chinese cloud AI providers (BaiLian/Aliyun) for coding assistance, expecting parity with native model capabilities. The rebrand from OpenClaw→EasyClaw created technical debt that power users are hitting.

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| All 3 open issues | 1 day | Low (fresh) | Maintainer acknowledgment and triage labels |
| *No long-unanswered items yet* — but monitor [#8](https://github.com/gaoyangz77/easyclaw/issues/8) for macOS user churn if unaddressed >7 days | | | |

**Recommendation:** Given zero PR activity and 3 unacknowledged issues, the project would benefit from a maintainer status update or community contribution guidelines to prevent backlog accumulation.

---

*Digest generated from GitHub data as of 2026-03-06. All issues: https://github.com/gaoyangz77/easyclaw/issues*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*