# OpenClaw Ecosystem Digest 2026-03-12

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-12 00:07 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-03-12

## 1. Today's Overview

OpenClaw shows **extremely high community activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature, actively maintained project with substantial user adoption. The project is currently in a **stabilization phase** following the 2026.3.8 release, with significant effort directed at fixing regressions and hardening existing features rather than shipping new capabilities. No new releases were published today. The contributor base appears responsive, with 162 PRs already merged/closed out of 500 total updates, though the large backlog of 338 open PRs and 398 open issues suggests the project may be approaching scaling challenges in review bandwidth.

---

## 2. Releases

**No new releases today.** The latest stable version remains **2026.3.8**, which itself has introduced several regressions now being actively patched (see Bugs & Stability section).

---

## 3. Project Progress

### Merged/Closed PRs (Selected Highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#43520](https://github.com/openclaw/openclaw/pull/43520) | Fix terminal JSON sanitization + Windows legacy fallback | Resolves malformed JSON output with ANSI escape sequences; fixes #27530 |
| [#42560](https://github.com/openclaw/openclaw/pull/42560) | Add fetch timeout to Matrix directory-live API | Prevents indefinite hangs on stalled homeservers |
| [#41535](https://github.com/openclaw/openclaw/pull/41535) | Add fetch timeout to Nextcloud Talk send/reaction calls | Hardens against server stalls (30s write timeout) |
| [#41534](https://github.com/openclaw/openclaw/pull/41534) | Add fetch timeout to Google Chat auth + Talk Voice API | Prevents hangs on JWKS/ElevenLabs endpoints |
| [#27557](https://github.com/openclaw/openclaw/pull/27557) | Strip ANSI codes from JSON skills output | Fixes automation-breaking JSON corruption |
| [#41015](https://github.com/openclaw/openclaw/pull/41015) | ASCII border fallback for legacy Windows consoles | UX improvement for Windows CMD/PowerShell users |
| [#41466](https://github.com/openclaw/openclaw/pull/41466) | ACP native thread-bound session placement fix | Resolves Telegram topics, Discord threads, Slack thread routing |

**Key Themes:** Defensive programming through timeout additions across all channel extensions; CLI robustness for Windows environments; ACP (Agent Communication Protocol) session routing reliability.

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | 👍 | Topic | Analysis |
|:---|:---:|:---:|:---|:---|
| [#32828](https://github.com/openclaw/openclaw/issues/32828) | 51 | 7 | False "API rate limit reached" errors | **Critical reliability issue**: Users see blocking warnings despite functional APIs. Suggests over-aggressive error classification or caching bug in provider response handling. |
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | 41 | 11 | DingTalk first-install channel option | **Enterprise onboarding gap**: Feature exists but not exposed in setup wizard. High 👍 count indicates real enterprise demand. |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 16 | 1 | Prebuilt Android APK releases | **Distribution friction**: Users want mobile companion without build toolchain. Low 👍 but persistent requests suggest niche but important use case. |
| [#9899](https://github.com/openclaw/openclaw/issues/9899) | 15 | 4 | Include day of week in system prompt | **Temporal awareness gap**: Agents frequently miscalculate scheduling. Simple fix, high user impact for calendar/scheduling workflows. |
| [#41445](https://github.com/openclaw/openclaw/issues/41445) | 15 | 1 | Kimi K2.5 config validation fails | **Provider integration fragility**: Zod schema too strict for evolving provider capabilities. Pattern seen across multiple Kimi-related issues. |
| [#39907](https://github.com/openclaw/openclaw/issues/39907) | 15 | 6 | Kimi K2.5 regression: literal exec() text | **Tool calling regression**: Model emits text instead of structured tool calls. High 👍 indicates widespread impact. |
| [#9157](https://github.com/openclaw/openclaw/issues/9157) | 12 | 12 | Workspace file injection wastes 93.5% token budget | **Performance crisis**: ~35K tokens injected per message. Highest 👍 in dataset = severe cost/latency pain point. |

**Underlying Needs:** Users need (1) **reliable provider error handling** without false positives, (2) **streamlined enterprise onboarding**, (3) **token-efficient context management**, and (4) **robust tool-calling across all supported models**.

---

## 5. Bugs & Stability

### Critical/High Severity (Active Regressions)

| Issue | Severity | Status | Fix PR? | Description |
|:---|:---:|:---|:---:|:---|
| [#42270](https://github.com/openclaw/openclaw/issues/42270) | **Critical** | Open | No | **2026.3.8 regression**: Empty agent payloads + WebSocket 1006 closures with LM Studio. Blocks local model usage. |
| [#42883](https://github.com/openclaw/openclaw/issues/42883) | **Critical** | Open | No | **2026.3.8 regression**: Cron jobs completely broken post-upgrade. Affects production automation. |
| [#42579](https://github.com/openclaw/openclaw/issues/42579) | **High** | Open | No | Cron lane self-deadlock: isolated `agentTurn` jobs never execute with default `maxConcurrentRuns=1`. |
| [#41690](https://github.com/openclaw/openclaw/issues/41690) | **High** | Closed | #41445 | Kimi config validation: `requiresOpenAiAnthropicToolPayload` unrecognized key. **Multiple duplicates closed.** |
| [#39907](https://github.com/openclaw/openclaw/issues/39907) | **High** | Closed | #41852 | Kimi K2.5 emits literal exec() text instead of tool calls. Root cause: forced OpenAI tool schema on Anthropic-native model. |
| [#40911](https://github.com/openclaw/openclaw/issues/40911) | **High** | Closed | #41445 | Same Kimi validation error, different report path. |

### Medium Severity

| Issue | Description | Fix PR? |
|:---|:---|:---:|
| [#40631](https://github.com/openclaw/openclaw/issues/40631) | Execution stall: assistant confirms but no actions performed | No |
| [#35220](https://github.com/openclaw/openclaw/issues/35220) | Codex Responses API `server_error` doesn't trigger fallback | No |
| [#41083](https://github.com/openclaw/openclaw/issues/41083) | XAI requests always timeout | No |
| [#40941](https://github.com/openclaw/openclaw/issues/40941) | Custom/local providers missing token/context display | No |

**Stability Assessment:** The 2026.3.8 release introduced **multiple critical regressions** affecting cron jobs, local model backends, and Kimi provider integration. The Kimi issues appear resolved through PR #41852 (closed today), but cron and WebSocket stability remain unaddressed.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | DingTalk first-install channel | **High** | Feature complete, just UI exposure needed |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | Prebuilt Android APK | Medium | CI/CD investment needed; niche vs. core |
| [#9899](https://github.com/openclaw/openclaw/issues/9899) | Day of week in system prompt | **High** | Trivial implementation, clear user value |
| [#28744](https://github.com/openclaw/openclaw/issues/28744) | Vision/image support for Feishu | Medium | PR #43536 adds MiniMax VLM timeout → foundation laid |
| [#28930](https://github.com/openclaw/openclaw/issues/28930) | Memory v2: associative traversal, salience, forgetting | Medium | Architectural; PR #41496 adds plugin hooks for media providers → extensibility pattern |
| [#25145](https://github.com/openclaw/openclaw/issues/25145) | Outbound message approval gate | Medium | Security-sensitive; PR #43422 adds `before_dispatch` hook → enables this pattern |
| [#39979](https://github.com/openclaw/openclaw/issues/39979) | Path-scoped RWX permissions | Medium | Security model change; needs design review |

**Emerging Pattern:** Several PRs today (#43422 `before_dispatch` hook, #43459/#43360 channel/thread isolation configs) suggest the project is investing in **multi-tenancy and security boundaries** for enterprise deployments.

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Category | Evidence | Severity |
|:---|:---|:---:|
| **Token/cost efficiency** | "93.5% of token budget wasted" on workspace file injection | 🔴 Critical |
| **Provider reliability** | False rate-limit errors, timeouts, validation failures | 🔴 Critical |
| **Release stability** | Multiple "worked before 2026.3.7/3.8" regressions | 🔴 Critical |
| **Enterprise onboarding** | DingTalk hidden, approval gates missing | 🟡 High |
| **Mobile accessibility** | No prebuilt APK; build-from-source required | 🟡 Medium |
| **Temporal awareness** | Agents "frequently getting the day of week wrong" | 🟡 Medium |

### Positive Signals

- Active maintainer response: Multiple Kimi issues closed same-day with fixes
- Defensive improvements: Systematic addition of fetch timeouts across extensions
- Plugin extensibility: New hooks (`before_dispatch`, `registerMediaProvider`) enable community extensions

---

## 8. Backlog Watch

### Stale Issues Needing Attention

| Issue | Age | Problem | Risk |
|:---|:---:|:---|:---|
| [#3092](https://github.com/openclaw/openclaw/issues/3092) | ~6 weeks | Session lock timeout → channel handler failures | Production reliability under load |
| [#9157](https://github.com/openclaw/openclaw/issues/9157) | ~5 weeks | 93.5% token waste on workspace injection | Cost/latency crisis for power users |
| [#18282](https://github.com/openclaw/openclaw/issues/18282) | ~3 weeks | GPT-5.2 reasoning items cause 400 errors | Breaking change from OpenAI API |
| [#8367](https://github.com/openclaw/openclaw/issues/8367) | ~5 weeks | GitHub Copilot Claude models fail | Provider integration gap |
| [#19795](https://github.com/openclaw/openclaw/issues/19795) | ~3 weeks | Cron isolated sessions can't access skills | Core feature broken for automation |

### PRs Awaiting Review

| PR | Description | Size | Age |
|:---|:---|:---:|:---:|
| [#43317](https://github.com/openclaw/openclaw/pull/43317) | Pluggable sandbox provider (Docker/gVisor) | XL | 1 day |
| [#41274](https://github.com/openclaw/openclaw/pull/41274) | Validated backup restore workflow | XL | 3 days |
| [#41496](https://github.com/openclaw/openclaw/pull/41496) | Plugin hooks for TTS/ASR/Embedding/Image/Video | XL | 3 days |
| [#41536](https://github.com/openclaw/openclaw/pull/41536) | Discord voice receive/restore | L | 3 days |

**Maintainer Attention Needed:** The XL-sized PRs represent significant architectural investments (sandboxing, backup/restore, media providers) that have been open for 1-3 days without merge. Given the 338 open PR backlog, review bandwidth appears constrained.

---

*Digest generated from OpenClaw GitHub activity on 2026-03-12. Data: 500 issues, 500 PRs updated; 0 new releases.*

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Report — 2026-03-12

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing **intense maturation pressure**, with 10+ active projects competing across multiple vectors: channel coverage (enterprise IM platforms), local LLM deployment, security hardening, and developer experience. Activity levels are exceptionally high—top projects process 50–500 PRs daily—indicating both vibrant innovation and significant fragmentation. A clear **bifurcation** is emerging between "batteries-included" monoliths (OpenClaw, Moltis) and modular/componentized architectures (TinyClaw, IronClaw). Enterprise adoption is accelerating, driving demand for China-market integrations (QQ, Feishu, DingTalk), container security, and observability features absent from earlier hobbyist-focused releases.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* | Trend |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | No release (stabilizing 2026.3.8) | 🟡 6/10 | Scaling challenges; review bandwidth constrained |
| **NanoBot** | 50 | 81 | No release (v0.1.4.post3 current) | 🟢 7/10 | High velocity; security debt emerging |
| **ZeroClaw** | 39 | 50 | v0.1.7-beta.30/28 | 🟢 7/10 | Active stabilization; GLIBC blocker |
| **PicoClaw** | 23 | 101 | **v0.2.2** + nightly | 🟢 8/10 | Strong release cadence; review backlog |
| **NanoClaw** | 9 | 39 | No release | 🟢 7/10 | Rapid feature delivery; growing pains |
| **IronClaw** | 34 | 50 | **v0.18.0** | 🟡 6/10 | High velocity; quality control gaps |
| **LobsterAI** | 12 | 11 | **v0.2.3** | 🟡 5/10 | Feature expansion outpacing stability |
| **TinyClaw** | 12 | 7 | **v0.0.10** | 🟢 8/10 | Architectural maturity; concentrated leadership |
| **Moltis** | 34 | 29 | No release | 🟢 8/10 | Exceptional closure rate; Docker focus |
| **CoPaw** | 50 | 50 | No release (v0.0.6.post1) | 🟡 5/10 | Stability regressions; compression broken |
| **ZeptoClaw** | 15 | 16 | **v0.7.6, v0.7.5** | 🟢 9/10 | Zero open bugs; security-first |
| **EasyClaw** | 1 | 0 | **v1.6.6** | 🔴 3/10 | Maintenance mode; critical auth failure |

*\*Health Score: Composite of velocity, issue resolution, release quality, and critical bug backlog*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw Position | Gap to Nearest Competitor |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily | 5–10× PicoClaw, Moltis; 50× EasyClaw |
| **Channel breadth** | 15+ platforms including legacy enterprise (Matrix, Nextcloud Talk) | NanoBot catching up on China IMs |
| **MCP ecosystem** | Native SKILL.toml + ACP protocol | ZeroClaw comparable; others fragmented |
| **Contributor base** | 162 PRs merged/day sustained | ZeptoClaw efficient but 1 maintainer |

### Technical Approach Differences
- **OpenClaw**: Monolithic Rust/TypeScript with ACP (Agent Communication Protocol) for session routing; emphasizes "one binary, all channels"
- **PicoClaw**: Go-based, "ultra-lightweight" philosophy; ~45MB RAM targets vs. OpenClaw's heavier footprint
- **TinyClaw**: npm workspace monorepo (5 packages); SQLite queue vs. OpenClaw's Redis/BullMQ heritage
- **IronClaw**: WASM-first toolchain with NEAR blockchain integration; crypto-native identity layer
- **ZeptoClaw**: Security-hardened Rust with TOCTOU-resistant filesystem operations; compliance-grade focus

### Community Size Comparison
OpenClaw operates at **ecosystem-defining scale**—its daily activity exceeds most competitors' weekly totals. However, this creates **review bottleneck risk** (338 open PRs) that smaller projects avoid. ZeptoClaw achieves comparable issue resolution *quality* with 1/30th the volume through concentrated ownership.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **China-market IM integration** | NanoBot, ZeroClaw, NanoClaw, LobsterAI, CoPaw | QQ, Feishu/Lark, DingTalk, WeChat; NapCat/OneBot 11 protocol support |
| **Local LLM deployment** | OpenClaw, NanoBot, PicoClaw, ZeroClaw, Moltis | Ollama native support, vLLM alternatives, MLX streaming sanitization, "no API key" flows |
| **Container security hardening** | NanoBot, NanoClaw, Moltis | Credential isolation, config file access controls, sandboxed execution, gVisor/Docker alternatives |
| **Token efficiency / context compression** | OpenClaw, CoPaw, LobsterAI | Workspace file injection waste (93.5% reported), memory compression failures, RAG optimization |
| **Observability & tracing** | TinyClaw, IronClaw, PicoClaw | "Mission control" UI, execution tracing, Merkle audit trails, cost tracking |
| **MCP (Model Context Protocol) maturity** | ZeroClaw, IronClaw, NanoClaw | Lazy loading, tool exposure controls, agent-mode support, stdio/unix transport compliance |
| **Provider diversification** | All projects | Escape OpenAI dependency; Groq, Gemini, Mistral, Zhipu AI, Kimi, MiniMax, Volcengine |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Reference implementation, ecosystem breadth | Power users, multi-channel operators | Monolithic, ACP protocol, extensive channel matrix |
| **PicoClaw** | Resource efficiency | Edge devices, low-RAM deployments | Go, minimal dependencies, ~45MB target |
| **TinyClaw** | Developer experience, team orchestration | Multi-agent teams, kanban workflows | npm monorepo, SQLite queue, TinyOffice UI |
| **ZeptoClaw** | Security-first, compliance-ready | Enterprise, regulated environments | Rust, TOCTOU-hardened, webhook auth, zero open bugs |
| **IronClaw** | Blockchain-native identity, WASM tools | Crypto/NEAR ecosystem, extensibility-focused | WASM toolchain, NEAR auth (controversial), MCP-native |
| **Moltis** | Docker-native, federated agent mesh | DevOps, container-first deployments | Apple Container sandboxing, node-advertised tools RFC |
| **NanoBot** | Rapid provider onboarding, China localization | China-market teams, local LLM experimenters | Python, plugin hook system, zero-npm Web UI |
| **LobsterAI** | NetEase backing, Chinese IM depth | Enterprise China, WeChat-centric workflows | Proprietary integration depth, stability tradeoffs |
| **CoPaw** | Multi-agent protocols, academic roots | Researchers, AgentScope ecosystem | Python, multi-agent coordination primitives |
| **ZeroClaw** | SKILL.toml skills, CI/CD maturity | Automation-heavy users, skill developers | Rust, test coverage focus, beta stabilization |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Architectural Transformation)
| Project | Signal | Risk |
|:---|:---|:---|
| **TinyClaw** | Monorepo refactor, rebrand to TinyAGI pending, CLI→TypeScript modernization | Rebrand execution, contributor onboarding post-restructure |
| **IronClaw** | 50 PRs/day, WASM toolchain evolution, automated CI security review | Quality control gaps, NEAR auth controversy, release engineering debt |

### Tier 2: Active Stabilization (Release Convergence)
| Project | Signal | Risk |
|:---|:---|:---|
| **OpenClaw** | Post-2026.3.8 regression patching, cron/WebSocket critical bugs | Review bandwidth collapse, contributor churn |
| **ZeroClaw** | v0.1.7 beta series, GLIBC compatibility crisis, branch model migration | Linux adoption blocker, contributor friction |
| **CoPaw** | v0.0.6.post1 compression system broken, memory regressions | Production deployment blocker, user defection |

### Tier 3: Quality-Focused Sustained Delivery
| Project | Signal | Risk |
|:---|:---|:---|
| **ZeptoClaw** | Zero open bugs, security sprint completion, predictable patch releases | Single-maintainer bottleneck, feature velocity ceiling |
| **PicoClaw** | v0.2.2 release, nightly builds, 101 PRs/day with 62 open | Review backlog accumulation |
| **Moltis** | 73% issue closure rate, Docker onboarding polish, node-advertised tools RFC | 20 open PRs risk contributor fatigue |

### Tier 4: Maintenance / At Risk
| Project | Signal | Risk |
|:---|:---|:---|
| **EasyClaw** | v1.6.6 documentation-only release, zero PR activity, unacknowledged critical bug | Project abandonment, user exodus |
| **LobsterAI** | Feature expansion (QQ/WeWork/DingTalk) with stability gaps, OpenClaw unfavorable comparisons | Competitive positioning erosion |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **Enterprise security is table stakes** | NanoBot #1873, NanoClaw #865, ZeptoClaw #324, Moltis hardening | Implement defense-in-depth: credential isolation, sandboxed execution, audit trails from day one |
| **China-market localization is competitive moat** | 6+ projects actively building QQ/Feishu/DingTalk; LobsterAI "急死了" urgency | Prioritize NapCat/OneBot 11, Lark OpenAPI, DingTalk AI Cards for TAM expansion |
| **Local LLM reliability gaps create opportunity** | OpenClaw LM Studio regression, NanoBot Ollama demand, PicoClaw "agent runs but produces no response" | Invest in provider-agnostic tool schemas, streaming output sanitization, clear local setup documentation |
| **Token efficiency is cost crisis** | OpenClaw #9157 (93.5% waste), CoPaw compression failures, LobsterAI "8961 tokens for 'hello'" | Build context window telemetry, smart truncation, file injection controls into core architecture |
| **Observability demand outpaces supply** | TinyClaw #66 (Mission Control), IronClaw audit trail request, PicoClaw event-driven loop | Embed OpenTelemetry/Phoenix-style tracing; agent execution visibility is emerging differentiator |
| **MCP is becoming interoperability standard** | ZeroClaw skill architecture, IronClaw WASM tools, NanoClaw GitHub MCP server | Adopt MCP for tool ecosystem; invest in lazy loading and security boundaries |
| **Release quality > feature velocity** | OpenClaw 2026.3.8 regressions, CoPaw v0.0.6 compression broken, IronClaw v0.18.0 registry 404s | Implement staged rollouts, canary channels, automated regression suites—users punish broken releases |

### Strategic Positioning Recommendation

**For new entrants**: ZeptoClaw's security-first, zero-bug approach and TinyClaw's architectural modularity represent viable differentiation vectors against OpenClaw's scale advantage. The "uninstall tool" ecosystem emergence (ByeByeClaw) signals user demand for clean lifecycle management often neglected.

**For existing maintainers**: The compression/token efficiency crisis and China-market integration rush are immediate priorities. Projects without answers to #9157-style waste or Feishu reliability will lose enterprise evaluations regardless of feature breadth.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-12

## 1. Today's Overview

NanoBot shows **exceptionally high development velocity** with 131 total updates in 24 hours (50 issues, 81 PRs), indicating an active, rapidly evolving codebase. The project maintains strong community engagement with 24 open issues and 32 open PRs currently under review. No new release was published today, suggesting the team is accumulating changes for a future version bump. The community is heavily focused on **provider ecosystem expansion** (Zhipu AI, Ollama, Groq, Mistral) and **channel integration stability** (Telegram, WhatsApp, Matrix, Feishu). Security concerns around configuration file access and multi-platform deployment friction represent the primary risk areas requiring maintainer attention.

---

## 2. Releases

**No new releases** (v0.1.4.post3 remains current).

---

## 3. Project Progress

### Merged/Closed PRs Today (49 total, key highlights):

| PR | Description | Impact |
|:---|:---|:---|
| [#1895](https://github.com/HKUDS/nanobot/pull/1895) | Enhanced filesystem & shell tools with pagination, fallback matching, smarter output | **Major UX improvement** — closes gaps vs. OpenCode |
| [#1891](https://github.com/HKUDS/nanobot/pull/1891) | Fixed Matrix missing from `channels status` display | Bug fix — completes Matrix integration |
| [#1874](https://github.com/HKUDS/nanobot/pull/1874) | Fixed Gemini `thought_signature` loss in tool-call replay | **Critical stability fix** for Gemini users |
| [#1845](https://github.com/HKUDS/nanobot/pull/1845) | Detect tilde paths in workspace shell guard | Security hardening |
| [#1827](https://github.com/HKUDS/nanobot/pull/1827) | Enforce workspace guard for home-expanded paths | Security fix for path traversal |
| [#1208](https://github.com/HKUDS/nanobot/pull/1208) | Made Codex OAuth dependency optional and lazy-loaded | Reduced install footprint |

**Features Advanced:**
- **Tool system modernization**: Pagination, line numbers, and smarter truncation in shell/filesystem tools
- **Provider reliability**: Gemini tool-calling stability improved
- **Security posture**: Workspace boundary enforcement strengthened

---

## 4. Community Hot Topics

### Most Active Issues (by engagement + underlying needs analysis):

| Issue | Comments | 👍 | Core Need |
|:---|:---:|:---:|:---|
| [#2](https://github.com/HKUDS/nanobot/issues/2) — Zhipu AI/GLM native support | 19 | 6 | **China-market LLM accessibility** — closed as completed, indicating rapid provider onboarding capability |
| [#193](https://github.com/HKUDS/nanobot/issues/193) — Ollama API support? | 13 | 0 | **Local-first deployment** — users want alternatives to vLLM for on-premise inference |
| [#855](https://github.com/HKUDS/nanobot/issues/855) — Local deployment experience sharing | 9 | 1 | **Community knowledge sharing** — LM Studio + consumer GPU workflows |
| [#25](https://github.com/HKUDS/nanobot/issues/25) — Groq/custom provider support | 9 | 0 | **OpenAI-compatible provider flexibility** — closed, custom provider pattern established |
| [#1617](https://github.com/HKUDS/nanobot/issues/1617) — Missing Chinese documentation | 8 | 1 | **Localization demand** — emotional/frustrated tone signals China market importance |
| [#1873](https://github.com/HKUDS/nanobot/issues/1873) — Config file security vulnerability | 7 | 0 | **Production security hardening** — container deployment blocker |

### Most Active PRs:

| PR | Focus | Significance |
|:---|:---|:---|
| [#361](https://github.com/HKUDS/nanobot/pull/361) | Kilo backend + Free Opencode models + Telegram plugins | **Architectural**: Hook/plugin system infrastructure — 40 lines core changes, UI logic externalized |
| [#1900](https://github.com/HKUDS/nanobot/pull/1900) | Telegram reply-to-message context | UX polish for conversational continuity |
| [#1707](https://github.com/HKUDS/nanobot/pull/1707) | Zero-npm Web UI channel (~45MB RAM) | **Strategic**: Lightweight web alternative to heavy Node.js frontends |

**Underlying Patterns:**
1. **Provider diversification urgency** — Users want escape from OpenAI dependency
2. **China market prioritization** — Feishu, WeChat, Zhipu AI, Chinese docs
3. **Deployment flexibility** — Local, containerized, low-resource environments

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---:|
| 🔴 **Critical** | [#1873](https://github.com/HKUDS/nanobot/issues/1873) — Agent can read own `config.json`, leak keys via `exec()` | **Open** — security architecture flaw | None |
| 🟡 **High** | [#1833](https://github.com/HKUDS/nanobot/issues/1833) — SIGTERM crashes without explanation after 30min | **Open** — stability/reliability | None |
| 🟡 **High** | [#1879](https://github.com/HKUDS/nanobot/issues/1879) — WhatsApp QR code generation failure | **Open** — channel blocker | None |
| 🟡 **High** | [#1300](https://github.com/HKUDS/nanobot/issues/1300) — Matrix channel non-functional | **Open** — [#1891](https://github.com/HKUDS/nanobot/pull/1891) fixes status display, underlying issue unclear | Partial |
| 🟡 **High** | [#1157](https://github.com/HKUDS/nanobot/issues/1157) — OpenRouter + StepFun 400 errors (v0.1.4.post2) | **Open** — provider compatibility | None |
| 🟡 **High** | [#842](https://github.com/HKUDS/nanobot/issues/842) — OpenRouter auth failures post-0.1.3→0.1.4 upgrade | **Open** — regression | None |
| 🟢 **Medium** | [#1630](https://github.com/HKUDS/nanobot/issues/1630) — Built-in skills (weather, skill-creator) unavailable | **Open** — packaging/deployment issue | None |
| 🟢 **Medium** | [#45](https://github.com/HKUDS/nanobot/issues/45) — local-vLLM "No API key configured" for Qwen models | **Open** — config validation | None |

**Regressions Fixed Today:**
- [#1577](https://github.com/HKUDS/nanobot/issues/1577) — `nanobot agent` CLI broken on Windows (signal.SIGHUP missing)
- [#1557](https://github.com/HKUDS/nanobot/issues/1557) — Feishu WebSocket "event loop already running"

---

## 6. Feature Requests & Roadmap Signals

### High-Probability Next-Version Features:

| Request | Signal Strength | Evidence |
|:---|:---:|:---|
| **Ollama native support** | ⭐⭐⭐⭐⭐ | [#193](https://github.com/HKUDS/nanobot/issues/193) (13 comments), local deployment trend |
| **WeChat (Weixin) channel** | ⭐⭐⭐⭐⭐ | [#1819](https://github.com/HKUDS/nanobot/issues/1819) — "very very important for most Chinese users" |
| **Plugin/hook system** | ⭐⭐⭐⭐⭐ | [#361](https://github.com/HKUDS/nanobot/pull/361) actively developed, architectural foundation laid |
| **Mistral provider** | ⭐⭐⭐⭐☆ | [#1680](https://github.com/HKUDS/nanobot/pull/1680) open, transcription + LLM |
| **Unified daemon gateway** | ⭐⭐⭐⭐☆ | [#1461](https://github.com/HKUDS/nanobot/issues/1461) — production deployment need |
| **Web UI (zero-npm)** | ⭐⭐⭐⭐☆ | [#1707](https://github.com/HKUDS/nanobot/pull/1707) — ~45MB RAM, FastAPI+WebSocket |
| **OpenAI-compatible endpoint channel** | ⭐⭐⭐☆☆ | [#1861](https://github.com/HKUDS/nanobot/pull/1861) — external integration pattern |
| **Configurable output truncation** | ⭐⭐⭐☆☆ | [#1871](https://github.com/HKUDS/nanobot/issues/1871) → [#1896](https://github.com/HKUDS/nanobot/pull/1896) PR already open |

**Emerging Patterns:**
- **"OpenCode parity"** — Multiple PRs reference closing gaps with OpenCode (tool behavior, heartbeat session handling)
- **Multi-modal readiness** — Vision model filtering ([#1892](https://github.com/HKUDS/nanobot/pull/1892)), image_url handling

---

## 7. User Feedback Summary

### Pain Points (😤 High Friction):

| Issue | User Quote / Evidence | Category |
|:---|:---|:---|
| Security architecture | "I don't see how nanobot can be secured in a container" — [#1873](https://github.com/HKUDS/nanobot/issues/1873) | **Production blocker** |
| Stability | "Tested for less than 30 minutes, crashed twice with SIGTERM, no reason given" — [#1833](https://github.com/HKUDS/nanobot/issues/1833) | **Reliability** |
| Provider fragility | Multiple OpenRouter regressions, StepFun 400 errors | **Integration quality** |
| Documentation gap | "Many foreign open-source projects have Chinese README, why don't you?" — [#1617](https://github.com/HKUDS/nanobot/issues/1617) | **Accessibility** |
| Missing core skills | "The weather tool is not available in my environment" — [#1630](https://github.com/HKUDS/nanobot/issues/1630) | **Packaging** |

### Positive Signals (😊 Satisfaction):

| Theme | Evidence |
|:---|:---|
| **Local deployment success** | [#855](https://github.com/HKUDS/nanobot/issues/855) detailed LM Studio + RTX 3050 guide — community self-support |
| **Rapid feature delivery** | Zhipu AI support closed in ~5 weeks, Discord channel implemented |
| **Extensibility appreciation** | Plugin system PR (#361) enthusiasm, hook_manager infrastructure |

### Use Case Clusters:
1. **Solo developers** — Local LLM + consumer GPU, cost control
2. **China-market teams** — Feishu/Lark/WeChat integration, domestic LLMs
3. **Enterprise self-hosters** — Container security, daemon mode, multi-platform gateways

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention (>7 days, high impact):

| Item | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#361](https://github.com/HKUDS/nanobot/pull/361) — Plugin system + Kilo backend | ~1 month | **Architecture divergence** — large PR, conflicts likely | Review/merge or request decomposition |
| [#126](https://github.com/HKUDS/nanobot/pull/126) — GitHub Actions Docker publishing | ~1 month | **Distribution** — community maintains fork at `birdxs/nanobot` | Adopt or officially reject |
| [#1680](https://github.com/HKUDS/nanobot/pull/1680) — Mistral provider | ~4 days | **Provider gap** — OpenRouter alternative | Review for v0.1.5 |
| [#1707](https://github.com/HKUDS/nanobot/pull/1707) — Zero-npm Web UI | ~4 days | **Strategic** — addresses frontend complexity | Evaluate vs. existing web plans |
| [#193](https://github.com/HKUDS/nanobot/issues/193) — Ollama support | ~1 month | **Local deployment** — 13 comments, no maintainer response | Triage: in-scope or document workaround |
| [#1873](https://github.com/HKUDS/nanobot/issues/1873) — Security vulnerability | **New, critical** | **Production adoption blocker** | Immediate security review |

### Recommendation:
The [#1873](https://github.com/HKUDS/nanobot/issues/1873) security issue requires **urgent architectural decision** — whether to implement user privilege separation or alternative sandboxing. Without resolution, enterprise container deployments remain high-risk.

---

*Digest generated from 50 issues and 81 PRs updated 2026-03-11. Data source: github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-12

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 50 PRs updated in 24 hours (48 merged/closed, 2 open) and 39 issues active (20 open, 19 closed). The project is in active beta stabilization for the v0.1.7 release series, with two new beta drops today focusing on CI/CD simplification and branch model migration. Community engagement is strong with multi-comment discussions on GLIBC compatibility, branch strategy clarity, and MCP tool architecture. Critical infrastructure work includes fixing encryption/decryption mismatches for channel credentials and resolving Docker build failures from Rust version bumps.

---

## 2. Releases

### [v0.1.7-beta.30](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.7-beta.30) & [v0.1.7-beta.28](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.7-beta.28)

| Aspect | Details |
|--------|---------|
| **Breaking Changes** | Migration to **single `master` branch model** — contributors using `main` or `dev` branches need to rebase |
| **Infrastructure** | Complete CI/CD pipeline replacement with simplified workflows |
| **Migration Notes** | Update local clones: `git fetch origin && git checkout master && git branch -d main` |
| **Fixes** | Partial fix references truncated in release notes (likely "fix: regex..." or "fix: release...") |

> ⚠️ **Action Required**: Contributors should verify their PR base branches target `master` not `main` or `dev`.

---

## 3. Project Progress

### Merged/Closed PRs Today (48 total, selected highlights)

| PR | Author | Impact |
|----|--------|--------|
| [#3047](https://github.com/zeroclaw-labs/zeroclaw/pull/3047) | @mark-linyb | **Windows build fix** — resolves `cargo build --release` failure via `cfg(unix)` gating for `sync_directory` |
| [#3054](https://github.com/zeroclaw-labs/zeroclaw/pull/3054) → [#3235](https://github.com/zeroclaw-labs/zeroclaw/pull/3235) | @jackieismpc / @theonlyhennygod | **CLI UX fix** — prevents raw `<tool_call>` payloads leaking to user output; superseded by cleaner implementation |
| [#3056](https://github.com/zeroclaw-labs/zeroclaw/pull/3056) → [#3236](https://github.com/zeroclaw-labs/zeroclaw/pull/3236) | @jokemanfire / @theonlyhennygod | **Gateway dev server fix** — adds `/health` and `/pair` proxy routes for Vite dev environment |
| [#867](https://github.com/zeroclaw-labs/zeroclaw/pull/867) | @willsarg | Community standards: Contributor Covenant Code of Conduct added |
| [#1506](https://github.com/zeroclaw-labs/zeroclaw/pull/1506), [#1517](https://github.com/zeroclaw-labs/zeroclaw/pull/1517) | @theonlyhennygod | Workflow automation: issue/PR enforcement + `dev`→`main` merge automation |
| [#1015](https://github.com/zeroclaw-labs/zeroclaw/pull/1015)-[#1018](https://github.com/zeroclaw-labs/zeroclaw/pull/1018), [#1186](https://github.com/zeroclaw-labs/zeroclaw/pull/1186) | @agorevski | **Test coverage expansion**: 81+ new tests for audit findings, provider factory, gateway idempotency, fuzz targets |

### Features Advanced
- **SKILL.toml-based skills** (PR [#2296](https://github.com/zeroclaw-labs/zeroclaw/pull/2296)) — native tool handler merged
- **OAuth UX improvements** for server environments (PR [#2295](https://github.com/zeroclaw-labs/zeroclaw/pull/2295))
- **Peripheral module testing** — addresses CRITICAL-1 audit finding

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count)

| Issue | Comments | Topic | Underlying Need |
|-------|----------|-------|---------------|
| [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) | **9** | `GLIBC_2.39` not found on Linux | **Binary portability crisis** — users on older distros (Ubuntu 22.04, Debian 12) cannot run prebuilt binaries; need musl/static builds or documented minimum requirements |
| [#2929](https://github.com/zeroclaw-labs/zeroclaw/issues/2929) | **6** | `master` vs `main` branch confusion | **Documentation/communication gap** — release workflow mentions `main`, GitHub default shows `master`; contributors uncertain where to target PRs |
| [#2355](https://github.com/zeroclaw-labs/zeroclaw/issues/2355) | **4** | Granular tool control / context-aware allowlist | **Security/enterprise need** — global `allowed_commands` insufficient; users want per-tool, per-context access rules (e.g., `curl` only to specific domains) |
| [#850](https://github.com/zeroclaw-labs/zeroclaw/issues/850) | **4** | Disable reasoning for Ollama | **Cost/latency control** — reasoning tokens increase expense and delay; parity with OpenClaw's reasoning toggle requested |

### Emerging Themes
- **MCP ecosystem maturation**: Multiple issues around tool exposure to subagents ([#3069](https://github.com/zeroclaw-labs/zeroclaw/issues/3069)), on-demand loading ([#3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095)), and agent-mode support ([#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153))
- **Channel reliability**: Feishu ([#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494)), Matrix ([#2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953)), Slack thread handling ([#3084](https://github.com/zeroclaw-labs/zeroclaw/issues/3084))

---

## 5. Bugs & Stability

### Critical/Severe (S0-S1)

| Issue | Severity | Status | Fix PR | Description |
|-------|----------|--------|--------|-------------|
| [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) | **S0** | 🔴 Open | None | GLIBC 2.39 dependency breaks runtime on older Linux systems |
| [#3207](https://github.com/zeroclaw-labs/zeroclaw/issues/3207) | S2 | ✅ Closed | Rolled back | Docker build failure from Rust 1.94 bump — **mitigated by rollback** |
| [#2930](https://github.com/zeroclaw-labs/zeroclaw/issues/2930) | S1 | 🔴 Open | None | `./bootstrap.sh --docker` fails on macOS with "Unbound variable" |
| [#2947](https://github.com/zeroclaw-labs/zeroclaw/issues/2947) | S1 | 🔴 Open | None | Web config save gives HTTP 500 in WSL Docker environment |
| [#3175](https://github.com/zeroclaw-labs/zeroclaw/issues/3175), [#3173](https://github.com/zeroclaw-labs/zeroclaw/issues/3173) | S2 | ✅ Closed | [#3175](https://github.com/zeroclaw-labs/zeroclaw/issues/3175) | **Encryption/decryption mismatch** — channel tokens and paired_tokens encrypted on save but not decrypted on load, causing silent failures after restart |

### Regressions from Recent Changes
- **Branch model migration** causing contributor friction ([#2929](https://github.com/zeroclaw-labs/zeroclaw/issues/2929))
- **Rust 1.94** Docker incompatibility (fixed via rollback)

---

## 6. Feature Requests & Roadmap Signals

### High-Likelihood for Next Version (v0.1.7 stable or v0.1.8)

| Feature | Issue | Signals | Confidence |
|---------|-------|---------|------------|
| **Azure OpenAI provider** | [#3176](https://github.com/zeroclaw-labs/zeroclaw/issues/3176) | Enterprise demand, clear scope, provider pattern exists | 🔥 High |
| **MCP tool lazy loading** | [#3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095) | Performance/cost impact, architectural alignment with existing MCP work | 🔥 High |
| **Granular tool permissions** | [#2355](https://github.com/zeroclaw-labs/zeroclaw/issues/2355) | Security-focused, enterprise blocker, detailed proposal | Medium-High |
| **Matrix channel in official builds** | [#2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953) | Simple build flag fix, community demand | Medium |
| **Dynamic Node Discovery** | [#3093](https://github.com/zeroclaw-labs/zeroclaw/issues/3093) | Ecosystem expansion, OpenClaw parity | Medium |

### Longer-Term Signals
- **i18n/Chinese localization** ([#3152](https://github.com/zeroclaw-labs/zeroclaw/issues/3152)) — WebUI internationalization
- **Message draft preservation** ([#3129](https://github.com/zeroclaw-labs/zeroclaw/issues/3129)) — UX polish for gateway

---

## 7. User Feedback Summary

### Pain Points 😤

| Issue | Frequency | Impact |
|-------|-----------|--------|
| Binary compatibility (GLIBC) | Recurring | Blocks Linux adoption on stable distros |
| Docker/WSL setup friction | Multiple reports | Onboarding barrier for Windows developers |
| Branch confusion post-migration | Active discussion | Contribution friction |
| Encryption credential bugs | Fixed but recent | Trust erosion in config reliability |
| Browser pairing not persisting | [#2960](https://github.com/zeroclaw-labs/zeroclaw/issues/2960) | Daily workflow interruption |

### Positive Signals 😊

- **MCP integration** actively used and extended by community
- **Test coverage expansion** addressing audit findings shows quality commitment
- **Community tooling**: Third-party uninstall tool [ByeByeClaw](https://github.com/wanikua/byebyeclaw) indicates ecosystem maturation
- **Gateway UX improvements** (paircode command, health routes) responsive to user needs

### Use Cases Emerging
- **Enterprise/team deployments**: Azure OpenAI, granular permissions, secret encryption
- **Multi-channel bots**: Feishu, Matrix, Slack thread handling
- **Local-first AI**: Ollama integration, reasoning control, low-resource hardware

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) GLIBC 2.39 | 3 days | 🔴 **Release blocker** | Define minimum glibc version or provide musl builds |
| [#2929](https://github.com/zeroclaw-labs/zeroclaw/issues/2929) Branch confusion | 6 days | 🟡 Contribution friction | Update docs, archive `main`, set GitHub default |
| [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) Feishu config | 10 days | 🟡 Channel reliability | Repro + fix verification from reporter |
| [#2960](https://github.com/zeroclaw-labs/zeroclaw/issues/2960) Browser pairing persistence | 5 days | 🟡 UX degradation | Token storage investigation |

### Open PRs Requiring Review

| PR | Status | Blocker |
|----|--------|---------|
| [#3236](https://github.com/zeroclaw-labs/zeroclaw/pull/3236) | 🟡 Open | Clean replacement for #3056 — needs final review |
| [#3235](https://github.com/zeroclaw-labs/zeroclaw/pull/3235) | 🟡 Open | Clean replacement for #3054 — needs final review |

---

## Health Assessment

| Metric | Status | Trend |
|--------|--------|-------|
| Merge velocity | ✅ Strong | 48 PRs/day |
| Issue resolution | ✅ Healthy | 49% close rate |
| Critical bugs | ⚠️ Watch | GLIBC blocker active |
| Community engagement | ✅ Strong | Multi-comment discussions |
| Documentation | ⚠️ Needs attention | Branch migration confusion |

**Overall**: ZeroClaw is in **active stabilization** with strong engineering momentum. The v0.1.7 release series is converging, but the GLIBC compatibility issue and branch model communication need immediate attention to prevent contributor churn.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-12

## 1. Today's Overview

PicoClaw shows **high development velocity** with 101 PRs updated in 24 hours (39 merged/closed, 62 open) and 23 active issues. The project released **v0.2.2** with security and voice features, alongside a nightly build. Community activity is robust with deep technical discussions on agent architecture refactoring. The codebase demonstrates maturity in handling provider compatibility (Groq, Gemini, OpenAI) while actively evolving core agent capabilities. Web UI polish and Docker deployment issues indicate growing user adoption beyond early developers.

---

## 2. Releases

### [v0.2.2](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2) — Latest Stable
| Change | Description |
|--------|-------------|
| Security | `exec allow_remote` config support in web settings ([#1363](https://github.com/sipeed/picoclaw/pull/1363)) |
| Voice | Echo voice audio transcription feature ([#1214](https://github.com/sipeed/picoclaw/pull/1214)) |

**Breaking Changes:** None reported.

### [v0.2.1-nightly.20260311.9cd2d218](https://github.com/sipeed/picoclaw/releases/tag/v0.2.1-nightly.20260311.9cd2d218)
- Debug mode without truncation ([#1207](https://github.com/sipeed/picoclaw/pull/1207))
- Telegram forum topics support ([#1291](https://github.com/sipeed/picoclaw/pull/1291))

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected)

| PR | Type | Impact |
|----|------|--------|
| [#1056](https://github.com/sipeed/picoclaw/pull/1056) | Bug fix | `read_file` tool safety guard |
| [#956](https://github.com/sipeed/picoclaw/pull/956) | Bug fix | `prompt_cache_key` restricted to OpenAI models |
| [#1355](https://github.com/sipeed/picoclaw/pull/1355) | Bug fix | `TOOLS.md` included in bootstrap files |
| [#1387](https://github.com/sipeed/picoclaw/pull/1387) | Bug fix | Improved `prompt_cache_key` host matching |
| [#1196](https://github.com/sipeed/picoclaw/pull/1196) | Bug fix | Skip `prompt_cache_key` for Groq endpoints |
| [#835](https://github.com/sipeed/picoclaw/pull/835) | Bug fix | Exclude Groq from prompt caching |
| [#796](https://github.com/sipeed/picoclaw/pull/796) | Bug fix | Skip `prompt_cache_key` for Gemini |
| [#943](https://github.com/sipeed/picoclaw/pull/943) | Bug fix | Thread-safe log file writing |
| [#1296](https://github.com/sipeed/picoclaw/pull/1296) | Bug fix | Removed duplicated timestamps in logs |
| [#555](https://github.com/sipeed/picoclaw/pull/555) | Feature | Vision/image support in agent pipeline |

**Key Advances:** Provider compatibility matrix solidified; vision pipeline production-ready; logging infrastructure hardened for concurrency.

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Issue/PR | Comments | Topic | Underlying Need |
|------|----------|----------|-------|---------------|
| 1 | [#1161](https://github.com/sipeed/picoclaw/issues/1161) | 14 | Ollama local model configuration | **Onboarding friction**: Users struggle with local LLM setup documentation |
| 2 | [#1218](https://github.com/sipeed/picoclaw/issues/1218) | 13 | Agent architecture refactor (`SOUL.md`/`AGENT.md`) | **Philosophy clarity**: Community wants explicit agent personality vs. behavior separation |
| 3 | [#1316](https://github.com/sipeed/picoclaw/issues/1316) | 7 | Event-driven agent loop | **Observability & control**: Production deployments need hooks, interrupts, steering |

**Analysis:** The community is maturing from "does it work?" to "how do we control it?" — signaling enterprise/adoption readiness concerns.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 High | [#1151](https://github.com/sipeed/picoclaw/issues/1151) | TUI config race condition; `HomePath` unescaped in shell | **Open** — architectural fix needed |
| 🔴 High | [#748](https://github.com/sipeed/picoclaw/issues/748) | Groq API tool call format error | **Mitigated** — multiple PRs merged, may need verification |
| 🟡 Medium | [#1350](https://github.com/sipeed/picoclaw/issues/1350) | Docker launcher manifest unavailable | **Open** — deployment blocker |
| 🟡 Medium | [#1375](https://github.com/sipeed/picoclaw/issues/1375) | SSL certificate problem for Volcengine | **Open** — provider-specific |
| 🟡 Medium | [#1369](https://github.com/sipeed/picoclaw/issues/1369) | Web JSON editor horizontal scroll broken | **PR [#1386](https://github.com/sipeed/picoclaw/pull/1386) open** |
| 🟡 Medium | [#1364](https://github.com/sipeed/picoclaw/issues/1364) | Firefox textarea height collapse | **Open** |
| 🟢 Low | [#1348](https://github.com/sipeed/picoclaw/issues/1348) | Windows source build failure | **Open** — Go module issue |

**Regression Risk:** Config race condition (#1151) affects TUI reliability; Docker manifest issue blocks new users.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in Next Version | Rationale |
|---------|-------|---------------------------|-----------|
| **Engram memory backend** | [#175](https://github.com/sipeed/picoclaw/issues/175) | Medium | Long-standing; aligns with agent scaling needs |
| **Android device automation** | [#292](https://github.com/sipeed/picoclaw/issues/292) | Medium | Roadmap item; "Botdrop-like" functionality |
| **Telegram streaming responses** | [#1098](https://github.com/sipeed/picoclaw/issues/1098) | High | Platform-native feature; Durov announcement |
| **iMessage channel** | [#1268](https://github.com/sipeed/picoclaw/pull/1268) | High | PR open with stop command, privacy sanitizer |
| **GitHub Device Code Auth** | [#1347](https://github.com/sipeed/picoclaw/issues/1347) | Medium | Copilot integration demand |
| **Request logging/statistics** | [#1383](https://github.com/sipeed/picoclaw/pull/1383) | High | PR open; operational necessity |
| **Per-agent SkillsFilter** | [#1389](https://github.com/sipeed/picoclaw/pull/1389) | High | PR open; config already exists, just wired |
| **OpenIM plugin** | [#1372](https://github.com/sipeed/picoclaw/issues/1372) | Low | Inquiry stage, no implementation |

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | Quote/Symptom |
|-------|-----------|---------------|
| Local model setup | Recurring | "agent runs but produces no response" ([#1161](https://github.com/sipeed/picoclaw/issues/1161)) |
| Docker deployment | New | "manifest for sipeed/picoclaw-launcher not found" ([#1350](https://github.com/sipeed/picoclaw/issues/1350)) |
| Web UI mobile experience | New | Cannot horizontally scroll JSON editor ([#1369](https://github.com/sipeed/picoclaw/issues/1369)) |
| Provider quirks | Ongoing | Groq, Gemini, Volcengine compatibility layers |

### Positive Signals
- **Voice/audio transcription** merged — multimedia expansion
- **Vision support** in production — multimodal capability
- **Debug mode improvements** — developer experience focus

### Satisfaction Gap
Users want **"it just works"** local deployment but hit configuration complexity. The project philosophy of "ultra-lightweight" may conflict with "batteries included" expectations.

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#175](https://github.com/sipeed/picoclaw/issues/175) Engram memory | ~4 weeks | Memory scaling ceiling | Maintainer decision on backend abstraction |
| [#292](https://github.com/sipeed/picoclaw/issues/292) Android automation | ~4 weeks | Competitive feature gap | Roadmap commitment or community contribution path |
| [#1139](https://github.com/sipeed/picoclaw/pull/1139) `PICOCLAW_LOG_LEVEL` env | ~6 days | Simple, unmerged | Review/merge — low risk |
| [#1179](https://github.com/sipeed/picoclaw/pull/1179) MessageBus graceful shutdown | ~5 days | Data loss risk | Review generics refactoring |

**Maintainer Attention:** 62 open PRs suggest review bandwidth constraint. Prioritize: (1) stability fixes, (2) small wins (#1139), (3) architectural PRs blocking other work.

---

*Digest generated from GitHub activity 2026-03-11. Data source: github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-12

## 1. Today's Overview

NanoClaw shows **high development velocity** with 39 PRs updated in 24 hours (31 open, 8 merged/closed) and 9 active issues, indicating a rapidly maturing AI agent platform. The project is experiencing **growing pains around container security, credential management, and setup complexity**—common challenges for infrastructure-heavy tools. No new releases were cut today, suggesting maintainers are accumulating changes before a version bump. Community contributions are robust across channels (QQ, Feishu/Lark, Discord), signaling strong international adoption, particularly in Asian markets.

---

## 2. Releases

**None** — No new releases published today.

---

## 3. Project Progress

### Merged/Closed PRs Today (8 total, notable items):

| PR | Description | Impact |
|:---|:---|:---|
| [#977](https://github.com/qwibitai/nanoclaw/pull/977) | **Semantic memory with LanceDB + Gemini embeddings** — Vector memory via 4 MCP tools (`memory_store`, `memory_search`, `memory_delete`, `memory_count`) | **Major feature**: Enables long-term agent memory; supports local or cloud LanceDB |
| [#975](https://github.com/qwibitai/nanoclaw/pull/975) | **GitHub MCP server for container agents** — Auto-injects `@modelcontextprotocol/server-github` when `GITHUB_PERSONAL_ACCESS_TOKEN` is set | Agents get structured GitHub tools without CLI exposure |
| [#955](https://github.com/qwibitai/nanoclaw/issues/955) | *Community tool*: ByeByeClaw — Clean uninstaller for NanoClaw/Claw-family tools | Indicates ecosystem maturation; addresses uninstall friction |

**Advanced Features:**
- **Multi-instance support** ([#970](https://github.com/qwibitai/nanoclaw/pull/970)): `NANOCLAW_INSTANCE` env var enables multiple deployments per machine
- **OpenAI Codex SDK alternative** ([#963](https://github.com/qwibitai/nanoclaw/pull/963)): `AGENT_ENGINE=codex` opt-in runtime
- **Discord vision + voice** ([#974](https://github.com/qwibitai/nanoclaw/pull/974)): Image analysis and audio transcription

---

## 4. Community Hot Topics

### Most Active Discussions (by engagement depth):

| Issue/PR | Activity | Underlying Need |
|:---|:---|:---|
| [#732](https://github.com/qwibitai/nanoclaw/issues/732) WhatsApp streaming flood | 3 comments, **High priority** | **UX polish**: Real-time messaging platforms need batched responses, not per-chunk streaming |
| [#865](https://github.com/qwibitai/nanoclaw/issues/865) Container security hardening | 2 comments, **High priority** | **Security architecture**: Users want defense-in-depth beyond "containers = safe" |
| [#853](https://github.com/qwibitai/nanoclaw/issues/853) `ANTHROPIC_AUTH_TOKEN` support | 1 comment, Medium priority | **Credential interoperability**: Align with official Claude Code auth methods |

**Analysis**: The security discussion ([#865](https://github.com/qwibitai/nanoclaw/issues/865)) reveals sophisticated users stress-testing the threat model—positive signal for enterprise viability. The WhatsApp flooding issue ([#732](https://github.com/qwibitai/nanoclaw/issues/732)) has an active fix PR ([#965](https://github.com/qwibitai/nanoclaw/pull/965)).

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available? |
|:---|:---|:---|:---|
| **🔴 High** | [#958](https://github.com/qwibitai/nanoclaw/issues/958) No response from NanoClaw after setup | Open, 1 comment | ❌ No — **Critical onboarding blocker** |
| **🔴 High** | [#960](https://github.com/qwibitai/nanoclaw/issues/960) MCP env vars not passed to containers post-migration | Open, 0 comments | ❌ No — Regression from #798 |
| **🔴 High** | [#732](https://github.com/qwibitai/nanoclaw/issues/732) WhatsApp message flooding during streaming | Open, 3 comments | ✅ **Yes** — PR [#965](https://github.com/qwibitai/nanoclaw/pull/965) |
| **🟡 Medium** | [#853](https://github.com/qwibitai/nanoclaw/issues/853) Missing `ANTHROPIC_AUTH_TOKEN` in setup verification | Open, 1 comment | ❌ No — Straightforward fix needed |
| **🟡 Medium** | [#973](https://github.com/qwibitai/nanoclaw/issues/973) Setup takes ages | Open, 0 comments | ❌ No — UX/performance complaint |

**Regression Alert**: [#960](https://github.com/qwibitai/nanoclaw/issues/960) is a **credential proxy migration regression** breaking third-party MCP servers—needs immediate attention.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release |
|:---|:---|:---|
| **Podman support** (Docker alternative) | [#957](https://github.com/qwibitai/nanoclaw/issues/957) | High — Documentation-only, low risk |
| **QQ Bot channel** | [#966](https://github.com/qwibitai/nanoclaw/pull/966), [#836](https://github.com/qwibitai/nanoclaw/pull/836) | **Very High** — Two competing PRs, clear demand |
| **Feishu/Lark channel** | [#964](https://github.com/qwibitai/nanoclaw/pull/964) | High — Enterprise China market |
| **Admin command interception** | [#971](https://github.com/qwibitai/nanoclaw/pull/971) | Medium — Governance feature |
| **Session file rotation** | [#928](https://github.com/qwibitai/nanoclaw/pull/928) | High — Reliability fix |

**Prediction**: Next release will likely include **QQ + Feishu channel support**, **semantic memory (#977)**, and **GitHub MCP integration** as headline features.

---

## 7. User Feedback Summary

### Pain Points 😤
| Issue | Quote/Detail | Category |
|:---|:---|:---|
| Setup complexity | *"Setup via claude code is incredibly slow, what is it so complex for setup that a plain .json file cannot handle?"* ([#973](https://github.com/qwibitai/nanoclaw/issues/973)) | Onboarding friction |
| Silent failures | *"I send message, and never get reply... I can't understand how this could happen"* ([#958](https://github.com/qwibitai/nanoclaw/issues/958)) | Debugging/observability |
| Security confusion | Container trust model unclear; scripts at wrong abstraction level ([#865](https://github.com/qwibitai/nanoclaw/issues/865)) | Documentation/architecture |

### Positive Signals ✅
- **Strong internationalization**: Active PRs for QQ, Feishu, Discord enhancements
- **Ecosystem tools**: Community-built uninstaller (ByeByeClaw) indicates sustained engagement
- **Enterprise readiness**: Security hardening discussions, multi-instance support

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#412](https://github.com/qwibitai/nanoclaw/pull/412) Host machine auth passthrough | 17 days | Stale skill PR | Maintainer review or close |
| [#921](https://github.com/qwibitai/nanoclaw/pull/921) Autonomous governance self-healing | 2 days, **Blocked** | Governance complexity | Unblock criteria unclear; needs maintainer guidance |
| [#836](https://github.com/qwibitai/nanoclaw/pull/836) QQ channel (older) | 4 days | Duplicate of #966 | Consolidate with #966 or close |
| [#527](https://github.com/qwibitai/nanoclaw/issues/527) CLAUDE.md permissions (fixed by #968) | Unknown | Docs debt | Verify #968 closure |

**Attention Required**: The **blocked governance PR (#921)** and **competing QQ implementations (#836 vs #966)** need maintainer decisions to prevent contributor friction.

---

*Digest generated from 48 total items (9 issues, 39 PRs) on 2026-03-12.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-12

---

## 1. Today's Overview

IronClaw shows **very high development velocity** with 84 total items updated in 24 hours (34 issues, 50 PRs) and a fresh v0.18.0 release. The project is actively stabilizing its WASM toolchain and MCP (Model Context Protocol) integrations while addressing critical security vulnerabilities identified by automated CI review. A notable community tension persists around mandatory NEAR AI authentication, with users actively forking to remove it. The staging-to-main promotion pipeline is operating at full capacity with 6 automated promotion PRs in progress, suggesting rapid iteration but also potential merge queue pressure.

---

## 2. Releases

### v0.18.0 — 2026-03-11
| Aspect | Details |
|--------|---------|
| **Type** | Minor release (staging promotion) |
| **Key Changes** | WASM arti update; staging branch promotion |
| **Breaking Changes** | None documented in release notes |
| **Migration Notes** | ⚠️ **Critical**: Registry artifact URLs use legacy unversioned names causing 404s for first-time installs (see [#958](https://github.com/nearai/ironclaw/issues/958)) |

**Known Issues in v0.18.0:**
- Versioning mismatch: `staging/Cargo.toml` remains at 0.17.0 while binaries report 0.18.0 ([#959](https://github.com/nearai/ironclaw/issues/959))
- Registry install fails for Google tools due to unversioned artifact URLs ([#958](https://github.com/nearai/ironclaw/issues/958))
- Stale default WASM tool artifacts incompatible with host WIT 0.3.0 ([#840](https://github.com/nearai/ironclaw/issues/840))

---

## 3. Project Progress

### Merged/Closed PRs Today (21 total, selected highlights)

| PR | Author | Scope | Summary | Impact |
|:---|:---|:---|:---|:---|
| [#964](https://github.com/nearai/ironclaw/pull/964) | @henrypark133 | CI/Build | Disambiguate WASM bundle filenames with kind-prefix (`tool-slack-` vs `channel-slack-`) | **Fixes registry collision bugs** |
| [#935](https://github.com/nearai/ironclaw/pull/935) | @reidliu41 | MCP/Transport | Fix stdio/unix transports skipping MCP `initialize` handshake | **Spec compliance fix** |
| [#760](https://github.com/nearai/ironclaw/pull/760) | @pikaxinge | Security | Block thread_id-based context pollution across users | **High-severity security fix** |
| [#735](https://github.com/nearai/ironclaw/pull/735) | @lighterEB | Tunneling | Drain tunnel pipes to prevent zombie ngrok processes | Fixes [#733](https://github.com/nearai/ironclaw/issues/733) |
| [#752](https://github.com/nearai/ironclaw/pull/752) | @reidliu41 | MCP | CRLF header validation + Authorization conflict fix | Security hardening |
| [#949](https://github.com/nearai/ironclaw/pull/949) | @reidliu41 | Setup | Fix double keypress registration in Windows onboard | Fixes [#937](https://github.com/nearai/ironclaw/issues/937) |
| [#684](https://github.com/nearai/ironclaw/pull/684) | @Protocol-zero-0 | Setup | Validate channel credentials during setup | Improves UX, prevents misconfiguration |
| [#851](https://github.com/nearai/ironclaw/pull/851) | @reidliu41 | UX | ASCII art banner during onboarding | Polish/feature |
| [#850](https://github.com/nearai/ironclaw/pull/850) | @Mffff4 | Docs | Russian README localization | Community expansion |
| [#472](https://github.com/nearai/ironclaw/pull/472) | @jwiklund | Systemd | Fix systemctl unit (CLI_ENABLED=false) | Deployment stability |

**Key Themes:** Security hardening (context isolation, header injection prevention), MCP protocol compliance, Windows onboarding fixes, and CI/build reliability.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Issue/PR | Comments | 👍 | Topic | Underlying Need |
|:---|:---|:---:|:---:|:---|:---|
| 1 | [#142](https://github.com/nearai/ironclaw/issues/142) — NEAR AI auth mandatory? | 9 | 1 | **Vendor lock-in frustration** | Users want **optional authentication**; perceive NEAR integration as forced, not value-add |
| 2 | [#733](https://github.com/nearai/ironclaw/issues/733) — ngrok zombie process | 5 | 0 | Tunnel reliability | Production-ready external connectivity without process management bugs |
| 3 | [#840](https://github.com/nearai/ironclaw/issues/840) — WASM WIT version mismatch | 4 | 0 | Tool compatibility | Seamless onboarding without manual WASM artifact management |
| 4 | [#299](https://github.com/nearai/ironclaw/issues/299) — MCP authentication help | 2 | 0 | Integration flexibility | Better docs/examples for third-party MCP servers (Browserbase) |

**Analysis:** The NEAR AI auth controversy (#142) represents a **fundamental product-market fit tension** — the project's crypto-native identity conflicts with users seeking a neutral AI agent framework. The high engagement despite closure suggests unresolved community sentiment. Technical issues cluster around WASM toolchain maturity and MCP ecosystem interoperability.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status | Reporter |
|:---|:---|:---|:---|:---|
| 🔴 **HIGH** | [#975](https://github.com/nearai/ironclaw/issues/975) | Unbounded recursion in `validate_tool_schema()` | **Open** — CI auto-detected | @ironclaw-ci[bot] |
| 🔴 **HIGH** | [#974](https://github.com/nearai/ironclaw/issues/974) | Unbounded recursion in `resolve_nested()` (95% confidence) | **Open** — CI auto-detected | @ironclaw-ci[bot] |
| 🔴 **HIGH** | [#977](https://github.com/nearai/ironclaw/issues/977) | Unbounded parameters schema JSON | **Open** — CI auto-detected | @ironclaw-ci[bot] |
| 🔴 **HIGH** | [#976](https://github.com/nearai/ironclaw/issues/976) | Unbounded description string in CapabilitiesFile | **Open** — CI auto-detected | @ironclaw-ci[bot] |
| 🔴 **HIGH** | [#963](https://github.com/nearai/ironclaw/issues/963) | Logical equivalence bug in workflow conditions | **Open** — CI auto-detected | @ironclaw-ci[bot] |
| 🟡 **MEDIUM** | [#980](https://github.com/nearai/ironclaw/issues/980) | Misleading warning condition for missing parameters | **Open** | @ironclaw-ci[bot] |
| 🟡 **MEDIUM** | [#979](https://github.com/nearai/ironclaw/issues/979) | No size limits on JSON files read | **Open** | @ironclaw-ci[bot] |
| 🟡 **MEDIUM** | [#978](https://github.com/nearai/ironclaw/issues/978) | Unnecessary clone of large JSON in hot path | **Open** | @ironclaw-ci[bot] |
| 🟡 **MEDIUM** | [#958](https://github.com/nearai/ironclaw/issues/958) | Registry install 404s on v0.18.0 (unversioned URLs) | **Open** — affects new users | @G7CNF |
| 🟡 **MEDIUM** | [#840](https://github.com/nearai/ironclaw/issues/840) | Stale WASM artifacts on fresh onboard | **Open** | @micsama |
| 🟡 **MEDIUM** | [#738](https://github.com/nearai/ironclaw/issues/738) | Managed tunnel binds to wrong port (3000 vs 8080) | **Open** | @lighterEB |
| 🟢 **LOW** | [#947](https://github.com/nearai/ironclaw/issues/947) | Test fails when run as root | **Open** | @Sanjeev-S |

**Stability Assessment:** The automated CI review system is aggressively surfacing **5 HIGH-severity issues** related to unbounded recursion and input validation — classic DoS vectors. These appear to originate from PR #972's WASM changes. The v0.18.0 release has **known regressions** in registry installation that impact first-time user experience.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Signals | Likelihood in v0.19+ |
|:---|:---|:---|:---:|
| [#914](https://github.com/nearai/ironclaw/issues/914) | Cortex-mem memory backend integration | Rust ecosystem alignment, performance focus | ⭐⭐⭐ High |
| [#913](https://github.com/nearai/ironclaw/issues/913) | Custom `base_url` for Anthropic-compatible providers (vLLM, SGLang, llama.cpp) | Self-hosted LLM trend, OpenAI-compat already exists | ⭐⭐⭐ High |
| [#946](https://github.com/nearai/ironclaw/issues/946) | Hover copy button for chat messages | Web UI polish, common UX pattern | ⭐⭐⭐ High |
| [#844](https://github.com/nearai/ironclaw/pull/844) | `ironclaw routine` CLI subcommand | Headless/CI use cases, already in PR | ⭐⭐⭐⭐ Very High |
| [#770](https://github.com/nearai/ironclaw/issues/770) | Share skills between agents | Enterprise/team use cases | ⭐⭐ Medium |
| [#943](https://github.com/nearai/ironclaw/issues/943) | OpenClaw eco-channel compatibility | Ecosystem expansion, interoperability | ⭐⭐ Medium |
| [#730](https://github.com/nearai/ironclaw/pull/730) | Tool access in lightweight routines | Agent capabilities expansion, PR open | ⭐⭐⭐⭐ Very High |

**v0.19.0 Preview:** PR [#973](https://github.com/nearai/ironclaw/pull/973) indicates breaking API changes with struct field additions. The routine CLI management (#844) and tool-enabled routines (#730) appear ready for merge.

---

## 7. User Feedback Summary

### Pain Points 😤

| Issue | Quote/Summary | Category |
|:---|:---|:---|
| #142 | *"Why is NEAR AI auth REQUIRED? ... being actively removed by EVERYONE"* | **Forced vendor integration** |
| #875, #939 | Checksum verification failures during tool install | **Supply chain trust** |
| #930 | Windows onboard skips API key prompt, then errors | **Platform-specific UX** |
| #840, #958 | Fresh installs broken due to version mismatches | **Release quality** |
| #299 | MCP server authentication documentation gaps | **Integration complexity** |

### Positive Signals 😊

| Aspect | Evidence |
|:---|:---|
| **Active maintenance** | 50 PRs in 24h, rapid bug fixes (zombie process fixed in 3 days) |
| **Security investment** | Automated CI review with Claude Code, context pollution fix |
| **Community contributions** | Russian localization, third-party uninstaller tool (ByeByeClaw) |
| **Ecosystem growth** | Cortex-mem integration request signals Rust community interest |

**Satisfaction Pattern:** Technical users appreciate the architecture and contribution velocity; casual users struggle with onboarding friction and mandatory auth. The "ByeByeClaw" uninstaller project (#919) is a notable signal of user tooling ecosystem emergence.

---

## 8. Backlog Watch

### Needs Maintainer Attention

| Issue | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#142](https://github.com/nearai/ironclaw/issues/142) | 23 days | **Reputational** | Community response on auth philosophy; consider opt-out path |
| [#730](https://github.com/nearai/ironclaw/pull/730) | 4 days | Feature delivery | Review for v0.19.0 inclusion — routines with tool access |
| [#844](https://github.com/nearai/ironclaw/pull/844) | 2 days | Feature delivery | CLI routine management — ready for review |
| [#958](https://github.com/nearai/ironclaw/issues/958) | 1 day | **New user churn** | Hotfix or v0.18.1 for registry URL regression |
| [#959](https://github.com/nearai/ironclaw/issues/959) | 1 day | Developer confusion | Version sync between staging and release tags |

### Automated CI Review Backlog

The bot-generated issues #974-#980 represent **7 security/quality findings** from a single PR (#972). These need human triage to determine if they're:
- True positives requiring fixes before v0.19.0
- False positives to close with explanation
- Patterns warranting broader codebase audit

---

**Digest compiled from:** 34 issues, 50 PRs, 1 release  
**Project Health:** 🟡 **Active but stressed** — high velocity with quality control gaps in release engineering and input validation security.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-12

## 1. Today's Overview

LobsterAI shows **moderate-to-high activity** with 23 total updates in 24 hours (12 issues, 11 PRs). The project released **v0.2.3** with UI and platform integration improvements. Community engagement is strong but **reactive**—many issues express frustration with core stability (memory, token handling, bash execution). The maintainer team (@liuzhq1986, @liugang519) is actively merging PRs, particularly around IM platform integrations, but **user-reported bugs are outpacing fixes**. The project appears to be in a **growth phase with growing pains**: rapid feature expansion (QQ, DingTalk, WeWork support) alongside unresolved core reliability issues.

---

## 2. Releases

### [v0.2.3](https://github.com/netease-youdao/LobsterAI/releases/tag/v0.2.3) — 2026-03-11

| Change | Author | PR |
|--------|--------|-----|
| QQ platform integration fixes | @liuzhq1986 | [#348](https://github.com/netease-youdao/LobsterAI/pull/348) |
| Chat interface paging | @liuzhq1986 | [#355](https://github.com/netease-youdao/LobsterAI/pull/355) |
| **Multi-file selection in main UI attachments** | @liuzhq1986 | [#371](https://github.com/netease-youdao/LobsterAI/pull/371) |

**Migration Notes**: No breaking changes identified. Users updating from earlier versions should note [#382](https://github.com/netease-youdao/LobsterAI/issues/382) — settings may reset on update (reported pain point).

---

## 3. Project Progress

### Merged/Closed PRs (7 items)

| PR | Description | Impact |
|----|-------------|--------|
| [#383](https://github.com/netease-youdao/LobsterAI/pull/383) | WeWork bot OpenClaw support | Enterprise IM expansion |
| [#381](https://github.com/netease-youdao/LobsterAI/pull/381) | QQ OpenClaw implementation | Platform parity |
| [#378](https://github.com/netease-youdao/LobsterAI/pull/378) | DingTalk OpenClaw support | **All major Chinese IMs now supported** |
| [#375](https://github.com/netease-youdao/LobsterAI/pull/375) | Fix macOS Node environment pollution | **Stability fix for Mac users** |
| [#373](https://github.com/netease-youdao/LobsterAI/pull/373), [#372](https://github.com/netease-youdao/LobsterAI/pull/372) | Async message handler for IM timeout | Duplicate/iterative fixes for timeout handling |
| [#371](https://github.com/netease-youdao/LobsterAI/pull/371) | Multi-file attachment selection | UX improvement |

**Key Advancement**: IM platform coverage is now **comprehensive** (QQ, WeWork, DingTalk all support OpenClaw). The async handler work (#373/#372) suggests active iteration on **timeout reliability** for enterprise use cases.

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Issue/PR | Comments | Analysis |
|------|----------|----------|----------|
| 1 | [#344](https://github.com/netease-youdao/LobsterAI/issues/344) Auto-inserted spaces in Chinese+number strings | **5 comments** | **Critical localization bug** — breaks code/data processing for Chinese users. User explicitly compares unfavorably to OpenClaw. High frustration ("急死了"). |
| 2 | [#350](https://github.com/netease-youdao/LobsterAI/issues/350) Bash execution too slow | 3 comments | Performance regression — commands that execute instantly hang for minutes. Blocks productivity workflows. |
| 3 | [#357](https://github.com/netease-youdao/LobsterAI/issues/357) Image reading causes freeze | 3 comments | **Crash-level stability issue** — complete UI hang on image processing. |

**Underlying Needs**: 
- **Localization quality** (#344) — Chinese market requires precise text handling
- **Performance transparency** (#350) — users need visibility into execution status
- **Media handling robustness** (#357) — image workflows are common but fragile

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **Critical** | [#344](https://github.com/netease-youdao/LobsterAI/issues/344) | Auto-space injection in CJK+numeric strings corrupts output | **No fix PR** — 5 days open, actively discussed |
| 🔴 **Critical** | [#357](https://github.com/netease-youdao/LobsterAI/issues/357) | Image processing causes complete UI freeze | **No fix PR** — 2 days old |
| 🟡 **High** | [#350](https://github.com/netease-youdao/LobsterAI/issues/350) | Bash execution hangs indefinitely | **No fix PR** — 3 days old, user-provided reproduction |
| 🟡 **High** | [#370](https://github.com/netease-youdao/LobsterAI/issues/370) | "Hello" triggers 8961 token count / API error | **No fix PR** — suggests context window management bug |
| 🟡 **High** | [#385](https://github.com/netease-youdao/LobsterAI/issues/385) | Xunfei codePlanning: tokens consumed, no output, exit code 1 | **No fix PR** — provider integration failure |
| 🟢 **Medium** | [#186](https://github.com/netease-youdao/LobsterAI/issues/186) | Poor memory vs. OpenClaw baseline | **No fix PR** — 12 days old, architectural concern |

**Regression Risk**: The async message handler PRs (#373/#372/#374) suggest **timeout handling is being actively reworked** — may indicate instability in production IM deployments.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Release | Rationale |
|---------|-------|---------------------------|-----------|
| **Docker deployment** | [#386](https://github.com/netease-youdao/LobsterAI/issues/386) | **High** | Zero comments but critical for enterprise adoption; aligns with existing platform expansion |
| **Environment variable configuration** | [#377](https://github.com/netease-youdao/LobsterAI/issues/377) | **High** | Blocks skill development (chart-visualization example); has 👍 support |
| **Agent teams / SDK update** | [#384](https://github.com/netease-youdao/LobsterAI/issues/384) | **Medium** | Strategic feature, but requires Claude SDK coordination |
| **"Open file location" in chat** | [#379](https://github.com/netease-youdao/LobsterAI/issues/379) | **Medium** | Small UX win, has 👍 support |
| **Ubuntu Linux version** | [#273](https://github.com/netease-youdao/LobsterAI/issues/273) | **Low-Medium** | Closed without resolution; may revisit if demand grows |

**Emerging Pattern**: Requests cluster around **deployment flexibility** (Docker, Linux) and **developer experience** (env vars, SDK features) — suggesting user base is expanding beyond early adopters to production teams.

---

## 7. User Feedback Summary

### Pain Points (Direct Quotes)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Update friction** | "更新的时候所有设置都要重新填写一遍，差劲" [#382](https://github.com/netease-youdao/LobsterAI/issues/382) | High — churn risk |
| **OpenClaw comparison** | "不如原版的openclaw" [#186](https://github.com/netease-youdao/LobsterAI/issues/186), [#344](https://github.com/netease-youdao/LobsterAI/issues/344) | **Critical** — competitive positioning |
| **Unpredictable behavior** | "就算是告诉他这是个错误，他还是会加空格" [#344](https://github.com/netease-youdao/LobsterAI/issues/344) | High — trust erosion |
| **Token/cost surprises** | "输入一个你好，怎么就超token数了？" [#370](https://github.com/netease-youdao/LobsterAI/issues/370) | High — API cost concern |

### Use Cases
- **Enterprise IM integration**: Heavy investment in QQ/WeWork/DingTalk suggests B2B focus
- **Code assistance**: Multiple issues reference code generation, bash execution, file handling
- **Multilingual workflows**: Chinese+English mixed content is primary use case

**Satisfaction Signal**: Users are **engaged but frustrated** — reporting bugs with detailed reproductions, comparing to competitors, expressing urgency ("急死了"). This indicates **product-market fit with execution gaps**.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#186](https://github.com/netease-youdao/LobsterAI/issues/186) Memory inferior to OpenClaw | 12 days | **Architectural** — may require RAG redesign | Response on roadmap |
| [#240](https://github.com/netease-youdao/LobsterAI/pull/240) Workflow enhancement (agent assignment) | 9 days | **Feature divergence** — community PR with complex scope | Review/merge decision |
| [#376](https://github.com/netease-youdao/LobsterAI/pull/376) Hourly scheduled tasks | 1 day | Low — new feature | Review for v0.2.4 |
| [#380](https://github.com/netease-youdao/LobsterAI/pull/380) Custom URI protocols | 1 day | Low — new feature | Review for v0.2.4 |

### Critical Gap
**No maintainer response** on [#344](https://github.com/netease-youdao/LobsterAI/issues/344) (CJK spacing bug) despite 5 comments and explicit user urgency. This is the **highest-impact open issue** and risks user defection to OpenClaw.

---

## Project Health Assessment

| Metric | Status |
|--------|--------|
| Release velocity | ✅ Strong (v0.2.3 with 3 features) |
| Platform coverage | ✅ Excellent (all major Chinese IMs) |
| Bug response time | ⚠️ **Concerning** (critical bugs 3-5 days unaddressed) |
| Community engagement | ✅ Active (detailed reports, comparisons) |
| Competitive position | ⚠️ **At risk** (repeated OpenClaw unfavorable comparisons) |

**Recommendation**: Prioritize [#344](https://github.com/netease-youdao/LobsterAI/issues/344) and [#350](https://github.com/netease-youdao/LobsterAI/issues/350) for hotfix release. Consider settings migration path to address [#382](https://github.com/netease-youdao/LobsterAI/issues/382) update friction.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-12

## 1. Today's Overview

TinyClaw shows **strong development velocity** with 12 issues and 7 PRs processed in the last 24 hours, yielding a 75% closure rate on issues and 86% on PRs. The project is undergoing a **major architectural transformation**: the codebase was restructured from a monolith into a 5-package npm workspace monorepo (PR #186), CLI prompts were modernized with TypeScript (PR #185), and a **complete rebrand to TinyAGI is pending** (PR #191). Community engagement is healthy with multi-comment discussions on observability and local model support. The v0.0.10 release indicates polish-focused iteration on deployment tooling rather than core features.

---

## 2. Releases

### v0.0.10 (2026-03-11)
| Aspect | Details |
|--------|---------|
| **Type** | Patch release — infrastructure/deployment polish |
| **Key Changes** | • Removed dedicated logs pane from tmux session (`daemon.sh`)<br>• Simplified `TINYCLAW_HOME` detection in `heartbeat-cron.sh`<br>• Increased Telegram polling watchdog timeout: 2m → 5m<br>• Localized Task/TaskStatus types |
| **Breaking Changes** | None identified |
| **Migration Notes** | Users with custom tmux layouts may need to adjust; watchdog timeout increase improves reliability for slower Telegram connections |

---

## 3. Project Progress

### Merged/Closed PRs (6 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#190](https://github.com/TinyAGI/tinyclaw/pull/190) | @jlia0 | **Team orchestration fix**: Stream agent responses in real-time; agents always route through team orchestration; default `TINYCLAW_HOME` fixed | **Critical fix** for multi-agent team workflows |
| [#186](https://github.com/TinyAGI/tinyclaw/pull/186) | @jlia0 | **Monorepo refactor**: Split into 5 npm workspaces (`@tinyclaw/core`, `teams`, `channels`, `server`, `visualizer`); SQLite queue replaces Redis/BullMQ | **Architectural milestone** — reduces deps, simplifies deployment |
| [#185](https://github.com/TinyAGI/tinyclaw/pull/185) | @jlia0 | **CLI modernization**: 1500+ lines of bash prompts → TypeScript with `@clack/prompts` | Major UX upgrade for setup flows |
| [#183](https://github.com/TinyAGI/tinyclaw/pull/183) | @jlia0 | Simplified office UI: removed redundant `message_received` event, cleaner message display | UI polish |
| [#182](https://github.com/TinyAGI/tinyclaw/pull/182) | @jlia0 | **Auto-trigger agents** when tasks dragged to "In Progress" on kanban | Eliminates friction in task workflow |
| [#143](https://github.com/TinyAGI/tinyclaw/pull/143) | @avianion | Added **Avian AI provider** (OpenAI-compatible API) | Expands model choice for enterprise users |

**Pattern**: @jlia0 authored 5/6 merged PRs — concentrated maintainer activity with clear focus on developer experience and architecture.

---

## 4. Community Hot Topics

### Most Active Discussions

| Issue/PR | Activity | Analysis |
|:---|:---|:---|
| [#66](https://github.com/TinyAGI/tinyclaw/issues/66) — Mission control UI with traceability | **6 comments**, closed | **Core user need**: Observable agent execution (comparisons to Claude Trace, Azure Phoenix). Closed without implementation — signals gap between user expectations and current TinyOffice capabilities. |
| [#111](https://github.com/TinyAGI/tinyclaw/issues/111) — Ollama/local model support | 3 comments, 👍1, closed | Privacy/cost-conscious users want local inference. Closed suggesting existing provider flexibility covers this. |
| [#191](https://github.com/TinyAGI/tinyclaw/pull/191) — Rebrand to TinyAGI | Open, high-stakes | **Strategic inflection point**: Complete rebrand PR pending. Suggests project scope expansion beyond "claw" metaphor toward general AGI tooling. |

**Underlying Needs**: Users want **observability** (tracing, debugging), **deployment flexibility** (local models, diverse providers), and **polished web UI** replacing CLI workflows. The rebrand PR indicates maintainers are positioning for broader market positioning.

---

## 5. Bugs & Stability

| Issue | Severity | Status | Details |
|:---|:---|:---|:---|
| [#91](https://github.com/TinyAGI/tinyclaw/issues/91) — Agent does not acknowledge messages | **Medium-High** | Closed | WhatsApp agents showed "typing" indicator then silence until status query. Suggests async message handling race condition or dropped callback. Fix likely in PR #190's real-time streaming improvements. |
| [#63](https://github.com/TinyAGI/tinyclaw/issues/63) — Clear interval on shutdown | Low | Closed | Cleanup hygiene in `queue-processor.ts` — preventive fix, no reported crashes. |

**Assessment**: No critical crashes reported. PR #190's team communication fixes address the most user-visible reliability issue (silent agents). The SQLite queue migration (PR #186) removes Redis dependency, reducing operational complexity.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| [#194](https://github.com/TinyAGI/tinyclaw/issues/194) — TinyOffice runtime control panel | Web-based daemon/queue/heartbeat management | **High** | Fills gap between CLI and current web UI; aligns with PR #185's CLI modernization trend |
| [#193](https://github.com/TinyAGI/tinyclaw/issues/193) — First-run web onboarding | Browser-based initial setup | **High** | Complements #194; reduces CLI dependency for new users |
| [#192](https://github.com/TinyAGI/tinyclaw/issues/192) — TinyOffice UX fixes (chat persistence, navigation) | **Medium-High** | Quick wins, same author as #193/#194 suggesting concentrated feedback |
| [#87](https://github.com/TinyAGI/tinyclaw/issues/87) — Zellij support (tmux alternative) | **Low-Medium** | Nice-to-have; tmux removal in v0.0.10 suggests simplification over expansion |
| [#66](https://github.com/TinyAGI/tinyclaw/issues/66) — Mission control / tracing UI | **Medium** | High user interest but complex; may depend on `@tinyclaw/visualizer` workspace maturation |

**Prediction**: Next release likely focuses on **TinyOffice control plane** (#194, #193) and rebrand completion (#191).

---

## 7. User Feedback Summary

### Pain Points
| Source | Issue | Severity |
|:---|:---|:---|
| @mczabca-boop (3 issues filed) | TinyOffice incomplete for operations — still needs CLI for basic controls | High |
| @charlesanim | Agent "ghosting" — silent failures in WhatsApp channel | Medium |
| @iamvince | Lack of execution tracing / observability compared to competitors | Medium |

### Use Cases Emerging
- **Multi-agent teams** with orchestrated handoffs (addressed in PR #190)
- **Local/privacy-first deployments** (Ollama, GLM 4.7 — partially addressed)
- **Non-technical user onboarding** (web-first setup, not CLI)

### Satisfaction Signals
- Active community tools emerging: [ByeByeClaw](https://github.com/wanikua/byebyeclaw) uninstaller (Issue #189) indicates ecosystem maturation
- Provider diversity requests being fulfilled (Avian, GLM 4.7, OpenAI-compatible endpoints)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#191](https://github.com/TinyAGI/tinyclaw/pull/191) Rebrand PR | 1 day | **High** — blocks release naming, documentation | Maintainer review for merge decision |
| [#194](https://github.com/TinyAGI/tinyclaw/issues/194), [#193](https://github.com/TinyAGI/tinyclaw/issues/193), [#192](https://github.com/TinyAGI/tinyclaw/issues/192) | 1 day | Medium — related UX cluster | Triage as group; assign to milestone |
| [#66](https://github.com/TinyAGI/tinyclaw/issues/66) Observability | 25 days | Medium — closed but unfulfilled | Consider reopening or creating roadmap item for visualizer workspace |

**Note**: No stale issues (>30 days) in active queue — healthy triage velocity.

---

*Digest generated from GitHub activity 2026-03-11. Project health: **Strong momentum, architectural maturation, UX gap closing**.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-12

## 1. Today's Overview

Moltis shows **exceptionally high development velocity** with 34 issues and 29 PRs updated in the last 24 hours—indicative of an active release cycle or major sprint. The maintainer team (primarily @penso) is aggressively clearing backlog: 25 issues closed versus 9 remaining open, and 9 PRs merged/closed against 20 open. Notably, **zero new releases** were cut despite this flurry, suggesting the team is stabilizing `main` before a versioned release. The activity pattern reveals a project in rapid maturation, with heavy focus on Docker/local-LLM stability and onboarding friction reduction.

---

## 2. Releases

**No new releases** (v0.x.x or otherwise) published in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs Today (9 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#397](https://github.com/moltis-org/moltis/pull/397) | @penso | Strip stop tokens (`<|im_end|>`, `<|eot_id|>`, etc.) from MLX streaming output | **Fixes #306** — eliminates raw special token leakage in local LLM responses |
| [#399](https://github.com/moltis-org/moltis/pull/399) | @penso | Fix auto-compact to target correct channel session | **Fixes #103** — Discord channels no longer compact wrong session |
| [#400](https://github.com/moltis-org/moltis/pull/400) | @penso | Support legacy `[memory]` embedding config keys with deprecation warnings | **Fixes #109** — backward compatibility for embedding configuration |
| [#401](https://github.com/moltis-org/moltis/pull/401) | @penso | Generic provider env bootstrap for Docker (`MOLTIS_PROVIDER`/`MOLTIS_API_KEY`) | **Fixes #125** — simplifies Docker-first setup experience |
| [#402](https://github.com/moltis-org/moltis/pull/402) | @penso | Correct QMD install docs (`@tobilu/qmd` not `@anthropic/qmd`) | Documentation fix — memory system setup accuracy |
| [#403](https://github.com/moltis-org/moltis/pull/403) | @penso | Align browserless timeout with Moltis lifecycle settings | Sandbox browser reliability improvement |
| [#404](https://github.com/moltis-org/moltis/pull/404) | @penso | Strip HTML tags from Telegram plain-text fallback | Message formatting robustness |
| [#405](https://github.com/moltis-org/moltis/pull/405) | @penso | Harden Apple Container bootstrap execs | **Fixes #159** — macOS sandbox provisioning stability |
| [#415](https://github.com/moltis-org/moltis/pull/415) | @penso | Keep onboarding accessible after auth reset | **Fixes #316** — recovery path for locked-out users |

**Key Advances:**
- **Local LLM reliability**: MLX streaming output sanitization merged
- **Docker onboarding**: Unified environment variable bootstrap reduces setup friction
- **Multi-platform sandboxing**: Apple Container and browserless timeout fixes
- **Configuration resilience**: Legacy key support prevents breaking changes for existing users

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Rank | Issue | Comments | 👍 | Status | Underlying Need |
|:---|:---|:---:|:---:|:---|:---|
| 1 | [#181](https://github.com/moltis-org/moltis/issues/181) Crons and heartbeat can't be setup and activate! | 8 | 0 | **CLOSED** | Core scheduling infrastructure reliability — **resolved** |
| 2 | [#129](https://github.com/moltis-org/moltis/issues/129) Unable to login with password after Docker setup | 4 | 0 | **CLOSED** | Docker authentication flow — **resolved** |
| 3 | [#102](https://github.com/moltis-org/moltis/issues/102) Docker-in-Docker sandbox mounts container-internal path | 3 | 4 | **CLOSED** | Volume mount correctness for nested Docker — **resolved** |
| 4 | [#391](https://github.com/moltis-org/moltis/issues/391) RFC: Node-Advertised Tools | 2 | 0 | **OPEN** | **Distributed agent capabilities** — remote nodes exposing tools beyond `exec` |
| 5 | [#414](https://github.com/moltis-org/moltis/issues/414) z.ai does not work out of the box | 2 | 0 | **OPEN** | Provider-specific integration friction (Z.ai) |
| 6 | [#272](https://github.com/moltis-org/moltis/issues/272) Need Webhook Function | 2 | 2 | **OPEN** | **Event-driven integrations** — external system callbacks |

### Analysis

- **Closed hot topics** centered on Docker/auth stability—signals the project has crossed a reliability threshold for containerized deployments
- **#391 (Node-Advertised Tools)** is the most significant *open* strategic item: it would transform Moltis from a centralized agent dispatcher to a **federated agent mesh**, where remote nodes advertise capabilities dynamically
- **#272 (Webhooks)** with 2 upvotes represents enterprise integration demand—users need Moltis to trigger external systems, not just receive commands

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **High** | [#414](https://github.com/moltis-org/moltis/issues/414) | z.ai provider fails with network errors out-of-the-box | **OPEN** — no linked PR |
| 🔴 **High** | [#407](https://github.com/moltis-org/moltis/issues/407) | Network-filter Proxy failing at startup; `web_search` broken | **OPEN** — no linked PR |
| 🟡 **Medium** | [#261](https://github.com/moltis-org/moltis/issues/261) | GitHub Copilot provider errors | **OPEN** — reported 2026-02-28, active |
| 🟡 **Medium** | [#344](https://github.com/moltis-org/moltis/issues/344) | UX for "vault is sealed" is poor | **OPEN** — usability, not functional |
| 🟢 **Low** | [#334](https://github.com/moltis-org/moltis/issues/334) | "Every model" — vague model behavior report | **OPEN** — needs reproduction details |

### Regressions Prevented Today
- [#418](https://github.com/moltis-org/moltis/pull/418): Persist aborted partial chat history (prevents data loss on interruption)
- [#412](https://github.com/moltis-org/moltis/pull/412): Per-chat browser session isolation (prevents cross-contamination)

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Signals | Likelihood in Next Release |
|:---|:---|:---|:---:|
| **Node-Advertised Tools** (federated capabilities) | [#391](https://github.com/moltis-org/moltis/issues/391) | RFC format, protocol extension, author is active contributor | ⭐⭐⭐⭐⭐ **High** |
| **Webhook/HTTP callback support** | [#272](https://github.com/moltis-org/moltis/issues/272) | 2 upvotes, enterprise integration pattern | ⭐⭐⭐⭐☆ |
| **Discord integration** | [#221](https://github.com/moltis-org/moltis/issues/221) — **CLOSED** | Merged PRs today show active Discord maintenance | ✅ **Shipped** |
| **WhatsApp support** | [#111](https://github.com/moltis-org/moltis/issues/111) — **CLOSED** | Infrastructure exists, may need re-activation | ⭐⭐⭐☆☆ |
| **OpenAI Responses API** | [#275](https://github.com/moltis-org/moltis/issues/275) — **CLOSED** | Modern OpenAI feature parity | ✅ **Shipped** |
| **Vulkan GGUF support** | [#408](https://github.com/moltis-org/moltis/pull/408) | **OPEN PR** — opt-in feature flag, cross-platform GPU | ⭐⭐⭐⭐⭐ **High** |
| **Agent-written sidecar skill files** | [#413](https://github.com/moltis-org/moltis/pull/413) | **OPEN PR** — safety-gated, audit-logged | ⭐⭐⭐⭐☆ |

**Prediction:** The next release will likely emphasize **distributed/agent-mesh capabilities** (#391) and **GPU inference flexibility** (#408), positioning Moltis for multi-node deployments and reduced cloud API dependency.

---

## 7. User Feedback Summary

### Pain Points (from closed issue resolutions)
| Issue | Pain Point | Resolution |
|:---|:---|:---|
| #181, #129, #102 | **Docker complexity**: Auth, cron setup, volume mounts failing in containerized environments | Multiple fixes merged; Docker bootstrap unified |
| #306 | **Local LLM polish**: Raw special tokens leaking to users | Fixed in #397 |
| #159 | **macOS sandbox brittleness**: Apple Container exec failures | Hardened in #405 |
| #316 | **Recovery dead-ends**: Auth reset locked users out of onboarding | Fixed in #415 |

### Satisfaction Signals
- **Rapid issue closure**: 25/34 issues closed in 24h demonstrates responsive maintenance
- **Backward compatibility**: #400 shows sensitivity to existing user configs
- **Documentation attention**: #402, #409 indicate investment in setup clarity

### Dissatisfaction Signals
- **Provider fragmentation**: #414 (z.ai), #261 (Copilot), #334 (generic "Every model") suggest LLM provider integration remains uneven
- **Network tooling instability**: #407 indicates `web_search` and proxy infrastructure needs hardening

---

## 8. Backlog Watch

| Issue/PR | Age | Status | Risk | Action Needed |
|:---|:---|:---|:---|:---|
| [#334](https://github.com/moltis-org/moltis/issues/334) "Every model" | 6 days | Open, vague | Low | Needs reproduction details or close |
| [#261](https://github.com/moltis-org/moltis/issues/261) GitHub Copilot errors | 12 days | Open, 2 👍 | Medium | Provider-specific debugging; may need Copilot API access |
| [#391](https://github.com/moltis-org/moltis/issues/391) Node-Advertised Tools RFC | 1 day | Open, strategic | — | Maintainer RFC review and timeline commitment |
| [#272](https://github.com/moltis-org/moltis/issues/272) Webhook Function | 11 days | Open, 2 👍 | Medium | Roadmap positioning: core feature or plugin? |

### Maintainer Attention Required
- **#391**: High-impact protocol RFC needs official response
- **#414 & #407**: Two high-severity provider/network bugs without linked fixes
- **20 open PRs**: Review backlog may be accumulating; risk of contributor fatigue if merge latency grows

---

*Digest generated from github.com/moltis-org/moltis data as of 2026-03-12. All links reference `moltis-org/moltis` repository.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-12

## 1. Today's Overview

CoPaw shows **high community activity** with 50 issues and 50 PRs updated in the last 24 hours, indicating an engaged but potentially overwhelmed development cycle. The project is experiencing **stability growing pains** following the v0.0.6 release, with multiple regression reports around memory compression, channel message handling, and tool execution. No new release was published today, suggesting maintainers are stabilizing current features before shipping. The PR merge rate of 48% (24/50) reflects active code review but also significant work-in-progress. First-time contributors are notably active, with 6 of 20 highlighted PRs from new contributors.

---

## 2. Releases

**No new releases** (v0.0.6.post1 remains current).

Notable context: Multiple users report confusion about upgrade pathways — `pip install --upgrade copaw` updates the package but the Web UI continues displaying the old version (see [#1195](https://github.com/agentscope-ai/CoPaw/issues/1195)), indicating frontend version detection issues.

---

## 3. Project Progress

### Merged/Closed PRs (24 total, selected highlights):

| PR | Description | Impact |
|:---|:---|:---|
| [#519](https://github.com/agentscope-ai/CoPaw/pull/519) | Web UI authentication with environment variables | **Security** — enables protected public deployments |
| [#1212](https://github.com/agentscope-ai/CoPaw/pull/1212) | Fix QQ image message sending reliability | **Stability** — resolves silent failures in media upload |
| [#1284](https://github.com/agentscope-ai/CoPaw/pull/1284) | Add `get_token_usage` to agent | **Observability** — cost tracking capability |
| [#1236](https://github.com/agentscope-ai/CoPaw/pull/1236) | Async session save/read | **Performance** — reduces I/O blocking |
| [#1260](https://github.com/agentscope-ai/CoPaw/pull/1260) | Fix `execute_shell_command` on Windows | **Cross-platform** — critical Windows compatibility |
| [#925](https://github.com/agentscope-ai/CoPaw/pull/925) | Auto PyPI mirror selection for China users | **UX** — installation reliability |
| [#563](https://github.com/agentscope-ai/CoPaw/pull/563) | Tool-call guard framework | **Security** — pre-execution safety checks |
| [#1282](https://github.com/agentscope-ai/CoPaw/pull/1282) | Windows performance boost + SSL fix in desktop | **Desktop stability** |
| [#1279](https://github.com/agentscope-ai/CoPaw/pull/1279) | Modify Himalaya skill | Skill maintenance |

### Active Development Areas:
- **Multi-agent protocols**: Documentation and examples added ([#1299](https://github.com/agentscope-ai/CoPaw/pull/1299), [#1285](https://github.com/agentscope-ai/CoPaw/pull/1285))
- **Channel expansion**: QQ (NapCat/OneBot 11) ([#1290](https://github.com/agentscope-ai/CoPaw/pull/1290)), DingTalk AI Cards ([#1118](https://github.com/agentscope-ai/CoPaw/pull/1118))
- **CLI improvements**: `copaw update` command proposed ([#1278](https://github.com/agentscope-ai/CoPaw/pull/1278))

---

## 4. Community Hot Topics

| Rank | Issue/PR | Comments | Analysis |
|:---|:---|:---:|:---|
| 1 | [#1195](https://github.com/agentscope-ai/CoPaw/issues/1195) — Version update not reflected in UI | 11 | **Core UX gap**: Users expect seamless upgrades; frontend/backend version sync broken |
| 2 | [#863](https://github.com/agentscope-ai/CoPaw/issues/863) — Terminal errors with `copaw app` | 9 | **Installation friction**: Deprecation warnings and venv confusion |
| 3 | [#779](https://github.com/agentscope-ai/CoPaw/issues/779) — DingTalk message formatting | 5 | **Enterprise channel polish** needed |
| 4 | [#1100](https://github.com/agentscope-ai/CoPaw/issues/1100) — Feishu duplicate messages in v0.0.6 | 5 | **Regression**: New release broke existing channel behavior |
| 5 | [#577](https://github.com/agentscope-ai/CoPaw/issues/577) — APITimeoutError with Alibaba coding plan | 5 | **Provider integration** reliability |

**Underlying needs identified:**
- **Reliable upgrade mechanisms** (version detection, migration paths)
- **Channel stability** — Feishu/DingTalk are production use-cases
- **Clearer error handling** — "Unknown agent error" appears frequently

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#1222](https://github.com/agentscope-ai/CoPaw/issues/1222) | Message compression causes API call failure (count mismatch 68→67) | **OPEN** — no PR |
| 🔴 **Critical** | [#1243](https://github.com/agentscope-ai/CoPaw/issues/1243) | All compression paths (`/compact`, `/compact/new`, auto) fail in Feishu | **OPEN** — v0.0.6.post1 regression |
| 🔴 **Critical** | [#1277](https://github.com/agentscope-ai/CoPaw/issues/1277) | Conversation crashes: "Exceeded limit on max bytes to request body : 6291456" | **OPEN** |
| 🟡 **High** | [#1100](https://github.com/agentscope-ai/CoPaw/issues/1100) | Feishu duplicate message responses | **OPEN** |
| 🟡 **High** | [#1293](https://github.com/agentscope-ai/CoPaw/issues/1293) | `write_file` and `execute_shell_command` fail (token limit related) | **OPEN** |
| 🟡 **High** | [#1248](https://github.com/agentscope-ai/CoPaw/issues/1248) | `ProviderManager` missing `get_default_provider` attribute | **OPEN** |
| 🟡 **High** | [#1254](https://github.com/agentscope-ai/CoPaw/issues/1254) | `RequestUserID` auto-overwritten to match `DispatchTargetUserID` | **OPEN** |
| 🟢 **Medium** | [#919](https://github.com/agentscope-ai/CoPaw/issues/919) | Image handling crashes bot (kimi-k2-turbo-preview) | **OPEN** |
| 🟢 **Medium** | [#1292](https://github.com/agentscope-ai/CoPaw/issues/1292) | Silicon Flow (硅基流动) model connection test fails | **OPEN** |

**Pattern**: Memory/context management regressions dominate — compression system appears fundamentally broken in v0.0.6.post1.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Version |
|:---|:---|:---:|
| [#1278](https://github.com/agentscope-ai/CoPaw/pull/1278) | `copaw update` CLI command | **High** — PR open, addresses #1188 |
| [#995](https://github.com/agentscope-ai/CoPaw/issues/995) | Built-in skills improvement (file readers) | **Medium** — foundational UX |
| [#1193](https://github.com/agentscope-ai/CoPaw/issues/1193) | Visual skill operation UI | **Medium** — referenced external project |
| [#1288](https://github.com/agentscope-ai/CoPaw/issues/1288) | Manual new conversation in Feishu | **Medium** — context management need |
| [#1283](https://github.com/agentscope-ai/CoPaw/issues/1283) | Plugin/hook system for pre-model processing | **Lower** — architectural |
| [#1268](https://github.com/agentscope-ai/CoPaw/issues/1268) | Cross-device memory sync | **Lower** — infrastructure heavy |

**Emerging theme**: Users want **more control over context lifecycle** (manual reset, compression that works, cross-device sync).

---

## 7. User Feedback Summary

### Pain Points
| Category | Evidence | Severity |
|:---|:---|:---:|
| **Upgrade confusion** | #1195, #1188, #1291 (macOS install script bug) | High |
| **Memory compression broken** | #1222, #1243, #1288 | **Critical** |
| **Windows environment issues** | #1244 (Python PATH), #1260 (shell execution) | High |
| **Channel-specific regressions** | #1100 (Feishu dupes), #779 (DingTalk format) | High |
| **Opaque errors** | "Unknown agent error" pattern in #1248, #919, #1218 | Medium |
| **Model provider friction** | #1292 (Silicon Flow), #1183 (Kimi Code), #1286 (MiniMax) | Medium |

### Positive Signals
- Active first-time contributor onboarding (6 PRs)
- Security enhancements landing (auth, tool guard)
- Multi-agent documentation filling gaps

### Use Cases Observed
- **Enterprise messaging**: DingTalk, Feishu, QQ integration for workplace automation
- **Local model deployment**: Ollama integration attempts (#1189)
- **Coding assistants**: Alibaba coding plan, Kimi Code, MiniMax integration

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#853](https://github.com/agentscope-ai/CoPaw/pull/853) — AI skill optimization with streaming | 5 days | **Stagnation** | Review for v0.0.7? |
| [#1209](https://github.com/agentscope-ai/CoPaw/pull/1209) — Chat routing selector | 1 day | Merge-ready? | Final review |
| [#1118](https://github.com/agentscope-ai/CoPaw/pull/1118) — DingTalk AI Cards | 2 days | Feature completeness | Testing feedback |
| [#1290](https://github.com/agentscope-ai/CoPaw/pull/1290) — QQ NapCat channel | 1 day | New contributor | Mentorship |
| [#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) — OpenRouter provider | 2 days | Provider expansion | Review |

**Maintainer attention recommended**: The compression system bugs (#1222, #1243) are blocking production use and need immediate triage. Consider a v0.0.6.post2 hotfix.

---

*Generated from GitHub data for agentscope-ai/CoPaw — 2026-03-12*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-12

## 1. Today's Overview

ZeptoClaw demonstrated **exceptional velocity** with 32 items closed in 24 hours (15 issues, 16 PRs) against only 2 open items. The project released two patch versions (v0.7.5, v0.7.6) featuring CLI improvements and security hardening. Activity was dominated by a **coordinated security sprint** addressing filesystem TOCTOU vulnerabilities, webhook authentication gaps, and Telegram identity risks. The single open issue (#221) represents an advanced audit-trail feature under consideration. Maintainer @qhkm drove 100% of non-dependency contributions, indicating concentrated but highly productive leadership.

---

## 2. Releases

### [v0.7.6](https://github.com/qhkm/zeptoclaw/releases/tag/v0.7.6) — 2026-03-11
| Change | Type | PR |
|--------|------|-----|
| Deduplicate Claude subscription token warning | Fix | [#320](https://github.com/qhkm/zeptoclaw/pull/320) |
| Slash command suggestions in CLI interactive mode | Feature | [#323](https://github.com/qhkm/zeptoclaw/pull/323) |
| Harden inbound auth and filesystem boundaries | Security | — |

**Security Note:** This release completes filesystem hardening with dirfd-relative operations (openat/mkdirat) and atomic file writes, closing ancestor-symlink TOCTOU windows.

### [v0.7.5](https://github.com/qhkm/zeptoclaw/releases/tag/v0.7.5) — 2026-03-10
| Change | Type | PR |
|--------|------|-----|
| Add `config reset` command | Feature | [#306](https://github.com/qhkm/zeptoclaw/pull/306) |
| Model-provider compatibility validation | Feature | [#311](https://github.com/qhkm/zeptoclaw/pull/311) |
| Add `zeptoclaw uninstall` command | Feature | [#315](https://github.com/qhkm/zeptoclaw/pull/315) |

---

## 3. Project Progress

### Security Hardening Sprint (Primary Focus)
- **[#324](https://github.com/qhkm/zeptoclaw/pull/324)** — Comprehensive security overhaul: webhook auth hardening, filesystem TOCTOU protection, Telegram username deprecation staging
- **[#329](https://github.com/qhkm/zeptoclaw/issues/329)** / **[#330](https://github.com/qhkm/zeptoclaw/issues/330)** — Dirfd-relative filesystem operations for writes and reads
- **[#318](https://github.com/qhkm/zeptoclaw/issues/318)** / **[#317](https://github.com/qhkm/zeptoclaw/issues/317)** — WhatsApp Cloud webhook signature verification (GHSA-j5hq-p423-c9vw)

### CLI Experience Improvements
- **[#323](https://github.com/qhkm/zeptoclaw/pull/323)** — Interactive slash commands: `/model`, `/persona`, `/tools`, `/memory`, `/history`, `/template`, `/clear`, `/quit`
- **[#315](https://github.com/qhkm/zeptoclaw/pull/315)** — Clean uninstall with `--yes` and `--remove-binary` flags
- **[#313](https://github.com/qhkm/zeptoclaw/pull/313)** — Reduced agent mode log verbosity (warn-level default)

### Provider & Configuration
- **[#316](https://github.com/qhkm/zeptoclaw/pull/316)** — Ollama cloud support without dummy API keys (keyless local auth)
- **[#314](https://github.com/qhkm/zeptoclaw/pull/314)** — Config validator sync for `tunnel`, `agents.defaults.timezone`, `agents.defaults.tool_timeout_secs`

### Maintenance
- 8 dependency updates (jsonwebtoken 10.3.0, rustls 0.23.37, chrono 0.4.44, etc.)

---

## 4. Community Hot Topics

| Item | Comments | Analysis |
|------|----------|----------|
| [#221](https://github.com/qhkm/zeptoclaw/issues/221) Merkle hash-chain audit trail | 1 | **Only open issue** — Advanced tamper-evident logging for enterprise/trust-sensitive deployments. Suggests demand for compliance-grade observability. |
| [#326](https://github.com/qhkm/zeptoclaw/issues/326) WhatsApp Bridge advisory re-triage | 1 | Security process rigor: maintainer actively triaging external GHSA claims against actual code paths. |
| [#327](https://github.com/qhkm/zeptoclaw/issues/327) / [#328](https://github.com/qhkm/zeptoclaw/issues/328) Channel setup gaps | 1 each | Rapid iteration on PR feedback — indicates responsive review culture. |

**Underlying Need:** The audit trail issue (#221) signals enterprise readiness as an emerging priority. Current security work (webhook verification, filesystem hardening) establishes foundation for this.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P1-Critical** | [#319](https://github.com/qhkm/zeptoclaw/issues/319) Filesystem path hardening | ✅ Closed | [#324](https://github.com/qhkm/zeptoclaw/pull/324) |
| **P1-Critical** | [#318](https://github.com/qhkm/zeptoclaw/issues/318) Inbound webhook auth paths | ✅ Closed | [#324](https://github.com/qhkm/zeptoclaw/pull/324) |
| **P1-Critical** | [#321](https://github.com/qhkm/zeptoclaw/issues/321) Telegram username allowlist risk | ✅ Closed | [#324](https://github.com/qhkm/zeptoclaw/pull/324) |
| **P1-Critical** | [#310](https://github.com/qhkm/zeptoclaw/issues/310) Config validator schema drift | ✅ Closed | [#314](https://github.com/qhkm/zeptoclaw/pull/314) |
| **P1-Critical** | [#317](https://github.com/qhkm/zeptoclaw/issues/317) WhatsApp Cloud webhook signatures | ✅ Closed | [#324](https://github.com/qhkm/zeptoclaw/pull/324) |
| **P2-High** | [#312](https://github.com/qhkm/zeptoclaw/issues/312) CLI agent mode log spam | ✅ Closed | [#313](https://github.com/qhkm/zeptoclaw/pull/313) |
| **P2-High** | [#327](https://github.com/qhkm/zeptoclaw/issues/327) / [#328](https://github.com/qhkm/zeptoclaw/issues/328) Channel setup clearing gaps | ✅ Closed | [#324](https://github.com/qhkm/zeptoclaw/pull/324) |

**Assessment:** Zero open bugs. All critical security findings from the past 48 hours have been resolved with comprehensive fixes.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in v0.8 |
|---------|--------|-------------------|
| **Merkle hash-chain audit trail** | [#221](https://github.com/qhkm/zeptoclaw/issues/221) | Medium — architecture defined, needs prioritization |
| **Dev environment standardization** | [#287](https://github.com/qhkm/zeptoclaw/pull/287) | High — contributor experience improvement, open PR exists |
| Extended slash commands | [#322](https://github.com/qhkm/zeptoclaw/issues/322) | Completed in v0.7.6 |

**Prediction:** v0.8.0 will likely focus on **observability** (audit trail #221) and **developer experience** (#287 dev tools), building on the security foundation established this week.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Resolution |
|------------|----------|------------|
| Verbose CLI output | [#312](https://github.com/qhkm/zeptoclaw/issues/312) | Fixed: warn-level default |
| Ollama cloud auth friction | [#284](https://github.com/qhkm/zeptoclaw/issues/284), [#316](https://github.com/qhkm/zeptoclaw/pull/316) | Fixed: keyless local auth |
| Config validation false positives | [#310](https://github.com/qhkm/zeptoclaw/issues/310) | Fixed: schema sync |
| Missing uninstall path | [#307](https://github.com/qhkm/zeptoclaw/issues/307) | Fixed: `zeptoclaw uninstall` |
| Security trust boundaries | [#318](https://github.com/qhkm/zeptoclaw/issues/318), [#319](https://github.com/qhkm/zeptoclaw/issues/319), [#321](https://github.com/qhkm/zeptoclaw/issues/321) | Fixed: comprehensive hardening |

**Satisfaction Indicators:** Rapid closure of user-reported issues (#284 Ollama support, #312 log noise) with same-day fixes. No open complaints.

---

## 8. Backlog Watch

| Item | Age | Status | Action Needed |
|------|-----|--------|---------------|
| [#287](https://github.com/qhkm/zeptoclaw/pull/287) Dev tools for consistent pre-PR state | 2 days | **Open** | Maintainer review — provides `cargo test`/`clippy` environment standardization |
| [#221](https://github.com/qhkm/zeptoclaw/issues/221) Merkle hash-chain audit trail | 8 days | **Open** | Decision: implement or defer to post-v0.8 |

**Risk Assessment:** Minimal. The single open PR (#287) is a quality-of-life improvement for contributors, not blocking. The audit trail issue (#221) is intentionally speculative.

---

**Project Health:** 🟢 **Excellent** — Zero open bugs, active security maintenance, responsive issue resolution, and clear release cadence.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-03-12

**Repository:** [gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

## 1. Today's Overview

EasyClaw shows minimal daily activity with **1 active issue** and **zero pull request movement**, indicating a maintenance-focused phase rather than active feature development. The project published **patch release v1.6.6**, suggesting ongoing stability improvements. Community engagement is low—only one user-reported authentication bug surfaced in the past 24 hours with no maintainer response yet. The absence of merged PRs or closed issues signals potential maintainer bandwidth constraints or a mature codebase with reduced iteration velocity. Overall project health appears **stable but stagnant**, with reliance on release automation rather than community-driven development.

---

## 2. Releases

### [v1.6.6](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.6) — Published 2026-03-12

| Aspect | Details |
|--------|---------|
| **Type** | Patch release |
| **Focus** | macOS distribution & installation experience |
| **Key Changes** | Added comprehensive documentation for macOS Gatekeeper bypass when unsigned app triggers "'EasyClaw' is damaged and can't be opened" error |
| **Breaking Changes** | None identified |
| **Migration Notes** | N/A — documentation-only improvement |

**Assessment:** This is a **user-experience polish release** addressing a common friction point for macOS users. No functional code changes detected in release notes.

---

## 3. Project Progress

**No merged or closed PRs in the last 24 hours.**

| Metric | Count | Trend |
|--------|-------|-------|
| PRs merged today | 0 | → Flat |
| PRs closed today | 0 | → Flat |
| Features advanced | 0 | — |

**Implication:** Development velocity has stalled. The project may be in a **maintenance-only mode** or awaiting larger architectural decisions before accepting contributions.

---

## 4. Community Hot Topics

### Most Active Discussion: OpenAI OAuth Authentication Failure

| | Details |
|--|---------|
| **Issue** | [#16 — OpenAI Oauth好像有问题](https://github.com/gaoyangz77/easyclaw/issues/16) |
| **Author** | @westisc |
| **Created** | 2026-03-11 |
| **Comments** | 1 |
| **Reactions** | 0 👍 |
| **Status** | 🔴 **OPEN — unassigned, no maintainer response** |

**Problem Summary:** Both portable and installer versions fail during OpenAI OAuth authentication flow (screenshot provided showing error dialog).

**Underlying Need Analysis:**
- **Critical dependency fragility:** OpenAI's OAuth implementation changes frequently; EasyClaw's integration appears unmaintained
- **Cross-version impact:** Bug affects **both distribution formats**, suggesting core authentication library issue rather than packaging problem
- **User expectation gap:** Users expect seamless LLM provider onboarding; authentication friction directly impacts product adoption

**Risk:** OAuth failures are **P0-severity** for AI assistant tools—this blocks core functionality for new and existing users.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **Critical** | [#16](https://github.com/gaoyangz77/easyclaw/issues/16) | OpenAI OAuth authentication completely broken | ❌ **No fix PR** |
| 🟡 Low | — | macOS Gatekeeper warnings (addressed via docs in v1.6.6) | ✅ **Mitigated** |

**Stability Assessment:** 
- **Single point of failure** identified: OpenAI integration
- No regression testing visible for third-party auth providers
- Release v1.6.6 addresses **installation friction** but not **runtime functionality**

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests filed in the last 24 hours.**

**Inferred Roadmap Signals from v1.6.6:**

| Signal | Interpretation | Likely Next Version Priority |
|--------|---------------|------------------------------|
| macOS documentation investment | User acquisition focus on Apple ecosystem | Code signing certificate for macOS (eliminate Gatekeeper workaround) |
| Patch version increment | Conservative release strategy | Stability over new features |
| No OAuth fix in release | Either complex fix required or deprioritized | **Urgent OAuth refactor** if maintainer bandwidth allows |

**Predicted v1.6.7/v1.7.0 Features:**
1. OpenAI OAuth flow repair (reactive, high priority)
2. Alternative authentication methods (API key fallback)
3. macOS notarization/code signing

---

## 7. User Feedback Summary

### Explicit Feedback (from Issue #16)

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| Authentication completely non-functional | "便携版和安装版都是报一样的错误" | Blocking |

### Implicit Feedback (from v1.6.6 release notes)

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| macOS installation confusion | Dedicated troubleshooting section | Moderate |

### User Profile Inference
- **Primary platform:** macOS (documentation prioritization suggests dominant user base)
- **Use case:** LLM-powered productivity/assistant workflows
- **Technical sophistication:** Mixed—needs GUI OAuth but struggles with Terminal Gatekeeper bypass

**Satisfaction Trend:** ⚠️ **At risk** — Core functionality broken, no visible maintainer engagement on critical issue.

---

## 8. Backlog Watch

| Issue/PR | Age | Status | Action Needed |
|----------|-----|--------|---------------|
| [#16 — OpenAI OAuth failure](https://github.com/gaoyangz77/easyclaw/issues/16) | 1 day | 🔴 **Unacknowledged** | Maintainer triage, authentication library audit |
| *No other aged items visible in dataset* | — | — | — |

**Maintainer Attention Required:**
- **Immediate:** Acknowledge #16 with timeline for OAuth fix
- **Strategic:** Evaluate OpenAI API migration vs. OAuth maintenance (API key auth as fallback)

---

## Summary Metrics

| Category | Score/Status |
|----------|--------------|
| Daily Activity | ⭐☆☆☆☆ Low |
| Release Health | ⭐⭐⭐☆☆ Maintenance mode |
| Issue Responsiveness | ⭐☆☆☆☆ **Critical gap** |
| Community Engagement | ⭐☆☆☆☆ Minimal |
| **Overall Health** | ⚠️ **Stable but fragile** — functional dependency risk |

---

*Digest generated from GitHub activity 2026-03-11 to 2026-03-12. Data source: github.com/gaoyangz77/easyclaw*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*