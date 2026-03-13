# OpenClaw Ecosystem Digest 2026-03-10

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-10 00:06 UTC

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

# OpenClaw Project Digest — 2026-03-10

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a rapidly evolving codebase with significant community engagement. The project released **v2026.3.8** (stable) and **v2026.3.8-beta.1**, both introducing critical backup CLI functionality. However, the volume of regressions and breaking changes—particularly around model compatibility (kimi-coding/k2p5), gateway stability, and filesystem isolation—suggests the project is in a **volatile release cycle** with quality assurance challenges. The 86.6% open issue rate (433/500) and 76.8% open PR rate (384/500) indicate a growing backlog requiring maintainer attention. Cross-platform stability issues (macOS LaunchAgent, Docker networking, Windows SIGUSR1) are emerging as systemic concerns.

---

## 2. Releases

### [v2026.3.8](https://github.com/openclaw/openclaw/releases/tag/v2026.3.8) (Stable)
| Attribute | Detail |
|-----------|--------|
| **Breaking Changes** | None explicitly noted |
| **Migration Notes** | Mac assets reuse beta artifact line from v2026.3.8-beta.1; no action required |

**Key Changes:**
- **CLI/backup**: New `openclaw backup create` and `openclaw backup verify` commands for local state archives
  - Options: `--only-config`, `--no-include-workspace`
  - Features: manifest/payload validation, backup guidance in destructive flows
- **macOS/onboarding**: Added remote gate

### [v2026.3.8-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.3.8-beta.1) (Beta)
| Attribute | Detail |
|-----------|--------|
| **Breaking Changes** | None |
| **Migration Notes** | Identical feature set to stable; beta channel users already have these features |

---

## 3. Project Progress

### Merged/Closed PRs (Selected High-Impact)

| PR | Status | Impact |
|----|--------|--------|
| [#14978](https://github.com/openclaw/openclaw/pull/14978) | **CLOSED** | Fixed node-role authorization for iOS/macOS chat methods (`chat.send`, `chat.history`, `chat.abort`) |
| [#14975](https://github.com/openclaw/openclaw/pull/14975) | **CLOSED** | Exempted `talk.apiKey` from config redaction for iOS/macOS clients |
| [#36853](https://github.com/openclaw/openclaw/pull/36853) | **CLOSED** | Dashboard-v2 structure refactor (base PR, sliced for review) |

### Active Development Areas (Open PRs)

| PR | Focus | Significance |
|----|-------|------------|
| [#41437](https://github.com/openclaw/openclaw/pull/41437) | **Pluggable sandbox provider** (Docker/gVisor/Firecracker) | Major security hardening; 3-tier isolation with browser automation |
| [#16565](https://github.com/openclaw/openclaw/pull/16565) | **A2A (agent-to-agent) communication tools** | `agent_call`, `debate_call` with response routing — foundational for multi-agent systems |
| [#41536](https://github.com/openclaw/openclaw/pull/41536) | **Discord voice restoration** | Fixes [#26108](https://github.com/openclaw/openclaw/issues/26108) — voice receive/reply path |
| [#41529](https://github.com/openclaw/openclaw/pull/41529) | **Ollama onboarding** | First-class auth flow for Ollama cloud models |
| [#25758](https://github.com/openclaw/openclaw/pull/25758) | **Azure AI Foundry provider** | Enterprise cloud expansion (GPT-4o, o3/o4-mini, DeepSeek-R1, etc.) |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Rank | Issue | Comments | Reactions | Underlying Need |
|------|-------|----------|-----------|---------------|
| 1 | [#3460](https://github.com/openclaw/openclaw/issues/3460) — **i18n & Localization Support** | 94 | 👍1 | **Global accessibility** — explicit maintainer acknowledgment of bandwidth constraints suggests community demand exceeds team capacity; likely candidate for community-led initiative |
| 2 | [#39062](https://github.com/openclaw/openclaw/issues/39062) — **Lost filesystem tools (exec/read/write)** | 16 | 0 | **Core functionality reliability** — regression in 2026.3.2 breaks agent's ability to interact with host system; critical for automation use cases |
| 3 | [#39907](https://github.com/openclaw/openclaw/issues/39907) — **kimi-coding/k2p5 emits literal exec(...) text** | 13 | 👍2 | **Model compatibility** — tool calling format regression; fixed in [#40552](https://github.com/openclaw/openclaw/pull/40552) |
| 4 | [#2317](https://github.com/openclaw/openclaw/issues/2317) — **SearXNG fallback provider** | 12 | 👍15 | **Cost/rate-limit resilience** — high vote count indicates strong demand for self-hosted search alternatives |
| 5 | [#40157](https://github.com/openclaw/openclaw/issues/40157) — **k2p5 sub-agent tool calls as plain text** | 10 | 0 | **Multi-agent reliability** — related to #39907, affects `sessions_spawn` |

### Analysis
The **kimi-coding/k2p5 model compatibility cluster** (#39907, #40157, #40552, #34945) represents the most urgent technical debt — multiple reports of tool calling format regressions since 2026.3.2 and commit 909f26a26. The [#40552](https://github.com/openclaw/openclaw/pull/40552) fix was merged today, suggesting rapid response but also indicating insufficient pre-release testing for model-specific behaviors.

---

## 5. Bugs & Stability

### Critical/Severe (Data Loss or Complete Failure)

| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| [#40295](https://github.com/openclaw/openclaw/issues/40295) | 🔴 **Critical** | Compaction deadlock blocks session recovery — `/new`, `/reset` queue behind timed-out compaction; requires `kill -9` | **OPEN** — no fix PR |
| [#37834](https://github.com/openclaw/openclaw/issues/37834) | 🔴 **Critical** | Session context corruption: orphaned `tool_use` ID causes permanent 400 loop after abort | **OPEN** |
| [#40806](https://github.com/openclaw/openclaw/issues/40806) | 🔴 **Critical** | Agent tool calls isolated — don't affect real filesystem (regression) | **OPEN** |
| [#40977](https://github.com/openclaw/openclaw/issues/40977) | 🔴 **Critical** | Control UI disconnected (4008): connect failed on Ubuntu 22.04 Docker | **OPEN** |

### High (Major Feature Broken)

| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| [#39062](https://github.com/openclaw/openclaw/issues/39062) | 🟠 **High** | Filesystem tools lost (exec/read/write) — 2026.3.2 regression | **OPEN** |
| [#40911](https://github.com/openclaw/openclaw/issues/40911) | 🟠 **High** | Config validation fails: `Unrecognized key: "requiresOpenAiAnthropicToolPayload"` | **OPEN** |
| [#40905](https://github.com/openclaw/openclaw/issues/40905) | 🟠 **High** | `openclaw gateway restart` fails to re-bootstrap LaunchAgent on macOS | **OPEN** — related to [#40932](https://github.com/openclaw/openclaw/issues/40932) |
| [#40818](https://github.com/openclaw/openclaw/issues/40818) | 🟠 **High** | `config.get` fails with `RangeError: Invalid string length` — Agents page breaks on 2026.3.8 | **OPEN** |
| [#41266](https://github.com/openclaw/openclaw/issues/41266) | 🟠 **High** | Manual cron run enqueues but never executes (isolated runner deadlock) | **FIX PR**: [#41532](https://github.com/openclaw/openclaw/pull/41532) |

### Medium (Workarounds Exist)

| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| [#29572](https://github.com/openclaw/openclaw/issues/29572) | 🟡 **Medium** | `/model` command in TUI silently fails — model doesn't change | **OPEN** |
| [#40069](https://github.com/openclaw/openclaw/issues/40069) | 🟡 **Medium** | Tool execution fails silently — claims to execute but no calls made | **OPEN** |
| [#40617](https://github.com/openclaw/openclaw/issues/40617) | 🟡 **Medium** | Aliyun DashScope (Bailian) API key configuration regression | **OPEN** |

### Stability Pattern Analysis
**Gateway lifecycle management** is the #1 stability risk: 5+ issues around `gateway restart`, SIGUSR1 handling, LaunchAgent bootstrap failures, and token churn. The macOS platform is particularly affected. **Filesystem/tool execution isolation** regressions suggest recent security hardening may have over-corrected, breaking legitimate use cases.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Feature | Likelihood in Next Version | Rationale |
|----------|---------|---------------------------|-----------|
| [#6823](https://github.com/openclaw/openclaw/issues/6823) | **Execution Guardrails** (human-in-the-loop for `exec`) | ⭐⭐⭐⭐ High | Safety-critical; aligns with sandbox work in [#41437](https://github.com/openclaw/openclaw/pull/41437) |
| [#7597](https://github.com/openclaw/openclaw/issues/7597) | **Tool execution hooks** (`tool:before`, `tool:after`) | ⭐⭐⭐⭐ High | Enables guardrails, audit logging; infrastructure PRs in flight |
| [#2317](https://github.com/openclaw/openclaw/issues/2317) | **SearXNG fallback** | ⭐⭐⭐⭐ High | 15 👍 votes; search provider resilience is operational necessity |
| [#8865](https://github.com/openclaw/openclaw/issues/8865) | **TUI Light Theme** | ⭐⭐⭐ Medium | Accessibility gap; lower priority than stability |
| [#41437](https://github.com/openclaw/openclaw/pull/41437) | **Pluggable sandbox (gVisor/Firecracker)** | ⭐⭐⭐⭐⭐ **Very High** | XL PR active; security differentiation for enterprise |
| [#16565](https://github.com/openclaw/openclaw/pull/16565) | **A2A agent communication** | ⭐⭐⭐⭐⭐ **Very High** | XL PR active; core architecture for multi-agent |

**Predicted v2026.3.9 themes**: Sandbox hardening, A2A multi-agent infrastructure, search provider resilience, and execution safety guardrails.

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **"Upgrade fatigue"** | Multiple "after upgrading to 2026.3.X" regression reports | 🔴 High |
| **Gateway reliability** | "restart fails," "disconnected," "token mismatch" — macOS users disproportionately affected | 🔴 High |
| **Model compatibility fragility** | kimi-coding/k2p5, Claude, Perplexity all showing format/behavior regressions | 🟠 Medium-High |
| **Configuration complexity** | API key validation errors, unrecognized keys, provider-specific quirks | 🟠 Medium |
| **Silent failures** | Tools claim success but don't execute; model changes don't apply | 🟠 Medium |

### Use Cases (Implicit from Issues)

| Pattern | Description |
|---------|-------------|
| **Multi-channel deployments** | Telegram, Discord, Feishu, WhatsApp, Google Chat — users running agents across business messaging platforms |
| **Local/self-hosted inference** | Ollama, llama.cpp, vLLM — strong demand for local AI without cloud dependencies |
| **Enterprise automation** | Cron jobs, filesystem operations, browser automation — production workflow integration |
| **Multi-agent orchestration** | `sessions_spawn`, ACP runtime — advanced users building agent systems |

### Satisfaction Signals
- **Strong**: Backup feature well-received (addresses data loss anxiety)
- **Mixed**: Rapid feature delivery appreciated, but stability trade-offs questioned
- **Weak**: macOS experience degraded; Docker networking configuration friction

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>30 days, high impact)

| Issue | Age | Problem | Risk |
|-------|-----|---------|------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | ~40 days | i18n — explicit "no bandwidth" statement | Community fragmentation; fork risk for non-English users |
| [#11890](https://github.com/openclaw/openclaw/issues/11890) | ~30 days | WebChat UI freezes on large sessions — sync markdown blocks main thread | UX degradation for power users |
| [#22487](https://github.com/openclaw/openclaw/issues/22487) | ~17 days | Signal attachment filenames lost (UUID instead) | Professional use case breakage |
| [#19569](https://github.com/openclaw/openclaw/issues/19569) | ~21 days | Document change tracking (git-backed history) | Data integrity for agent-modified files |

### PRs Stalled/Awaiting Review

| PR | Age | Blocker |
|----|-----|---------|
| [#25758](https://github.com/openclaw/openclaw/pull/25758) | ~14 days | Azure AI provider — enterprise feature; may need security review |
| [#16565](https://github.com/openclaw/openclaw/pull/16565) | ~24 days | A2A tools — large architectural change; needs coordination with runtime team |

### Recommended Actions
1. **Immediate**: Triage gateway lifecycle issues — potential for coordinated fix sprint
2. **Short-term**: Establish i18n community working group to offload from core team
3. **Medium-term**: Implement pre-release model compatibility test suite to prevent kimi-coding regressions

---

*Digest generated from 500 issues, 500 PRs, and 2 releases as of 2026-03-10.*

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Analysis — 2026-03-10

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing **explosive growth and fragmentation**, with 10+ active projects competing across multiple technical dimensions. The landscape is bifurcating between **"batteries-included" platforms** (OpenClaw, NanoBot, PicoClaw) optimizing for broad channel coverage and **specialized frameworks** (TinyClaw, IronClaw, NanoClaw) targeting specific deployment scenarios—enterprise orchestration, NEAR blockchain integration, or Claude-specific workflows. Common pain points across all projects reveal an industry still grappling with **vendor lock-in risks, multi-channel reliability, and the operational complexity of running AI agents in production**. The dominance of Chinese enterprise messaging platforms (Feishu, DingTalk, QQ) in issue backlogs signals a geographic shift in adoption patterns not yet matched by Western-focused documentation and support infrastructure.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score* | Status |
|:---|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.3.8 + beta | ⚠️ 65% | Volatile—high velocity, quality debt |
| **NanoBot** | 20 | 66 | — | ✅ 75% | Strong, pre-release stabilization |
| **ZeroClaw** | 24 | 50 | — | ⚠️ 55% | Feature sprint, review bottleneck |
| **PicoClaw** | 21 | 83 | v0.2.1 | ✅ 80% | Maturing, channel-focused |
| **NanoClaw** | 27 | 50 | — | 🔴 50% | Merge crisis—49:1 open/merged ratio |
| **IronClaw** | 36 | 50 | — | ✅ 78% | Production-hardening sprint |
| **LobsterAI** | 16 | 26 | — | ⚠️ 60% | High merge rate, user churn risk |
| **TinyClaw** | 2 | 25 | — | ✅ 85% | Architectural refactor, healthy |
| **Moltis** | 12 | 8 | v0.10.18 | ✅ 82% | Stable maintenance cycle |
| **CoPaw** | 50 | 50 | v0.0.6.post1 | ✅ 77% | Desktop release, responsive fixes |
| **ZeptoClaw** | 2 | 3 | — | ⚠️ 45% | Low activity, blocked features |
| **EasyClaw** | 4 | 0 | v1.6.3 | ⚠️ 55% | Maintenance mode, core-team only |

*\*Health Score combines merge velocity, issue resolution rate, release cadence, and backlog age (0-100%)*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Competitive Gap |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily | 10-20× higher than nearest peer (PicoClaw: 104 total) |
| **Feature breadth** | 15+ channels, pluggable sandbox, A2A multi-agent | NanoBot: 6 channels; IronClaw: 3 channels |
| **Enterprise readiness** | Azure AI Foundry, backup CLI, execution guardrails | LobsterAI: "speed gap" acknowledged; TinyClaw: refactor phase |
| **Release velocity** | Daily stable + beta channels | Moltis: ~weekly; CoPaw: sporadic major releases |

### Technical Approach Differences
| Aspect | OpenClaw | Peers |
|:---|:---|:---|
| **Architecture** | Monolithic with internal plugin system | TinyClaw: npm workspace monorepo; IronClaw: crate-splitting refactor |
| **Sandboxing** | Native Docker/gVisor/Firecracker (#41437) | NanoBot: basic containerization; PicoClaw: eBPF experimental |
| **State management** | Custom compaction + session recovery | TinyClaw: SQLite migration; IronClaw: libSQL backend |
| **Multi-agent** | A2A protocol with `agent_call`/`debate_call` (#16565) | CoPaw: "Lobster Army" requested; TinyClaw: team collaboration shipped |

### Community Size Comparison
OpenClaw's **86.6% open issue rate** (433/500) and **76.8% open PR rate** (384/500) indicate a **contributor base 5-10× larger than any peer**, but with proportionally higher triage debt. PicoClaw and TinyClaw achieve healthier open/closed ratios (40-50%) with smaller absolute volumes. NanoClaw shows warning signs: 49:1 open-to-merged PR ratio suggests **maintainer capacity collapse** despite comparable raw activity to OpenClaw.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **MCP (Model Context Protocol) support** | NanoBot (#359), PicoClaw (#233), LobsterAI (#233), IronClaw (#685) | HTTP/SSE transport completion; tool discovery at scale; server ecosystem interoperability |
| **Multi-LLM runtime resilience** | NanoClaw (#80—37 👍), OpenClaw (kimi-coding/k2p5 cluster), IronClaw (#728) | Vendor-agnostic abstraction; format normalization; fallback chains for account bans |
| **Enterprise messaging parity** | OpenClaw, NanoBot, PicoClaw, CoPaw, LobsterAI | Feishu/Lark naming unification; WeCom WebSocket mode; QQ group messaging fixes |
| **Sandboxed execution hardening** | OpenClaw (#41437), NanoClaw (#460), PicoClaw (#1017) | gVisor/Firecracker integration; eBPF optional hardening; filesystem isolation without breaking legitimate use |
| **Observability & cost control** | IronClaw (#765—22M logs/day), Moltis (#347), TinyClaw (#177 chatroom) | Langfuse integration; token tracking accuracy; real-time agent collaboration visibility |
| **Search provider resilience** | OpenClaw (#2317—15 👍), NanoBot (#1719—8 👍), Moltis (#345) | SearXNG self-hosted fallback; Brave/Tavily/DDG swappable backends |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Maximum feature velocity + enterprise channel coverage | Platform engineers, multi-agent builders | Rust/TypeScript hybrid; aggressive release cadence |
| **NanoBot** | Rapid provider integration + Chinese market optimization | Self-hosters, regional deployers | Python-first; OAuth-heavy; cron automation |
| **ZeroClaw** | Voice-first interface + Microsoft 365 integration | Business voice automation | Rust; TTS/STT multi-provider; node distribution |
| **PicoClaw** | Go-based simplicity + IRC/legacy protocol support | Infrastructure-minimalist self-hosters | Go single-binary; MCP lazy loading |
| **NanoClaw** | Claude-specific workflow optimization | Anthropic power users, AI researchers | TypeScript; skill branch ecosystem; container-native |
| **IronClaw** | NEAR blockchain integration + WASM tool ecosystem | Web3 developers, registry-based extensibility | Rust; libSQL; hot-reload sandbox |
| **LobsterAI** | NetEase Youdao ecosystem + scheduled task reliability | Chinese enterprise automation | Python; plugin marketplace foundation |
| **TinyClaw** | "AI team operating system" + voice channels | Multi-agent research teams, phone automation | TypeScript monorepo; SQLite queue; real-time chatroom |
| **Moltis** | Privacy-preserving personal infrastructure | Security-conscious individual users | Rust; Tailscale integration; reasoning controls |
| **CoPaw** | Desktop-native experience (Windows/macOS/Linux) | Non-technical end users | Python; conda-pack; visual workflow editor |
| **ZeptoClaw** | Minimal footprint + credential ergonomics | Claude CLI migrators | Rust; auto-credential import |
| **EasyClaw** | macOS-native desktop polish | Individual macOS developers | Electron/Tauri; Codex mode specialization |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Architectural Transformation)
| Project | Phase | Risk |
|:---|:---|:---|
| **TinyClaw** | Monorepo + SQLite migration (#186) | Regression potential; no release since refactor |
| **OpenClaw** | Pre-v2026.3.9 stabilization | Quality debt accumulation; gateway lifecycle crisis |
| **IronClaw** | v0.17.0 API-breaking release prep | Breaking change management |

### Tier 2: Feature Expansion (Healthy Growth)
| Project | Phase | Strength |
|:---|:---|:---|
| **PicoClaw** | Channel parity push (Mattermost, WeCom WebSocket) | 93% PR closure rate; disciplined release cadence |
| **CoPaw** | Desktop distribution (Windows/macOS/Linux AppImage) | Same-day regression fixes; first-time contributor friendly |
| **NanoBot** | MCP + search provider consolidation | High enterprise signal; configuration system overhaul |

### Tier 3: Stabilization / Maintenance
| Project | Phase | Concern |
|:---|:---|:---|
| **Moltis** | v0.10.x maintenance | Chrome sign-in regression (#370) threatens new user acquisition |
| **LobsterAI** | Post-major-feature consolidation | No release despite 25 merged PRs; user speed complaints unaddressed |

### Tier 4: At-Risk / Capacity Constrained
| Project | Phase | Critical Issue |
|:---|:---|:---|
| **NanoClaw** | Merge backlog crisis | 49:1 open/merged ratio; 6 skill branch merge failures; contributor attrition risk |
| **ZeroClaw** | Review bottleneck | 48:2 open/merged ratio; zero bug fix PRs despite 9 active issues |
| **ZeptoClaw** | Low activity | WhatsApp channel non-functional; dependency infrastructure missing |
| **EasyClaw** | Core-team isolation | Zero external PRs; multimodal regression unassigned |

---

## 7. Trend Signals

| Trend | Evidence | Implication for Developers |
|:---|:---|:---|
| **Vendor lock-in rebellion** | NanoClaw #80 (37 👍): "Anthropic account bans for OpenClaw usage"; multi-runtime demand across 4+ projects | Build runtime abstraction layers; assume API access revocation; implement graceful degradation |
| **Voice as primary interface** | ZeroClaw #3005 (voice loop), TinyClaw #39 (Telnyx), Moltis #373 (TTS deduplication) | Audio latency and cost optimization becoming competitive differentiators; STT/TTS provider diversity essential |
| **MCP as de facto standard** | 4 projects actively implementing; HTTP/SSE gaps blocking adoption (#351, #359) | Prioritize stdio transport stability; contribute to MCP spec for HTTP completion |
| **Chinese enterprise messaging as adoption driver** | Feishu/QQ/DingTalk issues dominate 3+ project backlogs; WeCom explicitly requested (#1032) | Localization beyond i18n—API behavior parity, cryptographic configuration docs, regional compliance |
| **Execution safety as enterprise gate** | OpenClaw #6823 (guardrails), #41437 (sandbox); LobsterAI #342 (HITL) | Human-in-the-loop and sandbox hardening moving from "nice-to-have" to procurement requirement |
| **Contributor experience as scalability limit** | NanoClaw 49:1 PR ratio; ZeroClaw 48:2; OpenClaw 384:116 | Automated testing, conventional commits, and CI/CD investment yielding higher community ROI than raw feature velocity |
| **Container-native deployment expectations** | Podman support shipped (Moltis #252, NanoClaw #332 blocked); Docker-in-Docker path mounting (#102) | Treat container runtime diversity as first-class; rootless/sandboxed container support emerging |

---

*Report compiled from 1,300+ GitHub items across 12 projects. Data current as of 2026-03-10.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-10

## 1. Today's Overview

NanoBot shows **extremely high development velocity** with 66 PRs and 20 issues updated in the last 24 hours, indicating an active pre-release stabilization period. The project is experiencing growing pains from rapid feature expansion—particularly around provider integrations, channel stability, and configuration management. No new releases were cut today, suggesting maintainers are consolidating fixes before tagging v0.1.4.post4. The community is heavily focused on enterprise/self-hosting use cases (OAuth, MCP, observability) and messaging platform reliability. Overall project health is **strong but strained**, with a 3.4:1 open-to-closed PR ratio indicating review backlog pressure.

---

## 2. Releases

**No new releases** (v0.1.4.post3 remains current).

Notable blocker: [#1765](https://github.com/HKUDS/nanobot/issues/1765) reports source-based upgrades from post3 to post4 failing via standard `pip install -e .` workflow, suggesting version pinning or caching issues in the build system.

---

## 3. Project Progress

### Merged/Closed Today

| PR/Issue | Description | Impact |
|----------|-------------|--------|
| [#1784](https://github.com/HKUDS/nanobot/pull/1784) | fix(slack): define `use_thread` in `send()` | **Critical fix** — Slack channel was completely broken due to undefined variable ([#1773](https://github.com/HKUDS/nanobot/issues/1773)) |
| [#1741](https://github.com/HKUDS/nanobot/pull/1741) | fix: Feishu audio `.opus` extension for Groq Whisper | Feishu voice message compatibility |
| [#1740](https://github.com/HKUDS/nanobot/issues/1740) | fix: respect explicit provider config in model resolution | Prevents Groq/OpenAI model routing conflicts |
| [#1518](https://github.com/HKUDS/nanobot/issues/1518) | [Closed] QQ Markdown rendering support | Native QQ client formatting enabled |
| [#682](https://github.com/HKUDS/nanobot/issues/682) | [Closed] `/restart` command from messengers | Remote management capability (PR #303) |

### Active Development (Open PRs)

- **Configuration system overhaul**: 3 PRs ([#1798](https://github.com/HKUDS/nanobot/pull/1798), [#1797](https://github.com/HKUDS/nanobot/pull/1797), [#1785](https://github.com/HKUDS/nanobot/pull/1785)) fixing env var precedence, gateway port handling
- **Codex provider hardening**: 3 PRs ([#1799](https://github.com/HKUDS/nanobot/pull/1799), [#1788](https://github.com/HKUDS/nanobot/pull/1788), [#1787](https://github.com/HKUDS/nanobot/pull/1787)) addressing OAuth, timeouts, retries, and tool call ID compatibility
- **Agent interruption**: [#1789](https://github.com/HKUDS/nanobot/pull/1789) implements mid-task cancellation on new messages

---

## 4. Community Hot Topics

| Rank | Topic | Engagement | Analysis |
|------|-------|-----------|----------|
| 1 | [#359](https://github.com/HKUDS/nanobot/issues/359) MCP Tool Support | 8 👍, 3 comments | **Highest demand feature** — users want standardized tool ecosystem beyond built-ins; blocks enterprise adoption |
| 2 | [#1719](https://github.com/HKUDS/nanobot/issues/1719) Swappable web_search backend | 8 👍, 2 comments | 15 failed PRs indicate architectural gap; users need Brave alternatives (Tavily, SearXNG, DDG) |
| 3 | [#140](https://github.com/HKUDS/nanobot/issues/140) GitHub Copilot provider | 4 👍, 9 comments | Corporate users want to leverage existing Copilot subscriptions; OAuth complexity blocker |
| 4 | [#397](https://github.com/HKUDS/nanobot/issues/397) Multi-model aggregation + OAuth | 6 comments | Chinese market focus (RouterWay, SiliconFlow); authentication standardization need |

**Underlying pattern**: Users are pushing NanoBot from "personal assistant" toward "enterprise AI infrastructure," requiring provider abstraction layers, observability, and compliance features.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **Critical** | [#1773](https://github.com/HKUDS/nanobot/issues/1773) Slack channel broken (`use_thread` undefined) | **Fixed** | [#1784](https://github.com/HKUDS/nanobot/pull/1784) merged |
| 🔴 **Critical** | [#1781](https://github.com/HKUDS/nanobot/issues/1781) Global lock `_processing_lock` blocks cron tasks | Open | None |
| 🟡 **High** | [#1783](https://github.com/HKUDS/nanobot/issues/1783) Codex 60s hardcoded timeout, no retry | Open | [#1788](https://github.com/HKUDS/nanobot/pull/1788) |
| 🟡 **High** | [#1692](https://github.com/HKUDS/nanobot/issues/1692) Telegram double message rendering | Open | None identified |
| 🟡 **High** | [#1792](https://github.com/HKUDS/nanobot/issues/1792) MCP image handling in `message` tool | Open | [#1793](https://github.com/HKUDS/nanobot/pull/1793) |
| 🟡 **High** | [#1765](https://github.com/HKUDS/nanobot/issues/1765) Source upgrade failure post3→post4 | Open | None |
| 🟢 **Medium** | [#1396](https://github.com/HKUDS/nanobot/issues/1396) QQ channel intermittent failures | Open | None |
| 🟢 **Medium** | [#1777](https://github.com/HKUDS/nanobot/issues/1777) 403 errors on Render-hosted endpoints (prompt-triggered) | Open | [#1790](https://github.com/HKUDS/nanobot/pull/1790) docs fix |
| 🟢 **Medium** | [#1791](https://github.com/HKUDS/nanobot/issues/1791) Env vars ignored when config.json exists | Open | [#1798](https://github.com/HKUDS/nanobot/pull/1798) |

**Regression risk**: Multiple configuration-loading bugs suggest the settings system needs architectural review.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Signals | Likelihood in Next Release |
|---------|---------|---------------------------|
| **MCP (Model Context Protocol) support** | [#359](https://github.com/HKUDS/nanobot/issues/359) (8 👍), [#1429](https://github.com/HKUDS/nanobot/pull/1429) (subagent MCP sharing) | **High** — PR exists, active development |
| **Configurable web search providers** | [#1719](https://github.com/HKUDS/nanobot/issues/1719) (8 👍), [#398](https://github.com/HKUDS/nanobot/pull/398) (4-provider PR) | **High** — community pressure, implementation ready |
| **Langfuse observability** | [#1490](https://github.com/HKUDS/nanobot/pull/1490) | **Medium** — enterprise need, PR open |
| **GitHub Copilot OAuth provider** | [#140](https://github.com/HKUDS/nanobot/issues/140), [#397](https://github.com/HKUDS/nanobot/issues/397) | **Medium** — complex OAuth flow, legal considerations |
| **WeChat Work (WeCom) channel** | [#1327](https://github.com/HKUDS/nanobot/pull/1327) | **Medium** — PR ready, China market |
| **Agent interruption/cancellation** | [#1762](https://github.com/HKUDS/nanobot/issues/1762), [#1789](https://github.com/HKUDS/nanobot/pull/1789) | **High** — PR open, UX critical |
| **Structured memory (SQLite)** | [#1774](https://github.com/HKUDS/nanobot/issues/1774) | **Low-Medium** — architectural discussion needed |

---

## 7. User Feedback Summary

### Pain Points
- **Configuration hell**: Env vars vs. config.json precedence confusion ([#1791](https://github.com/HKUDS/nanobot/issues/1791)), upgrade path fragility ([#1765](https://github.com/HKUDS/nanobot/issues/1765))
- **Provider lock-in**: Hardcoded Brave search, missing aggregation platforms ([#1719](https://github.com/HKUDS/nanobot/issues/1719), [#397](https://github.com/HKUDS/nanobot/issues/397))
- **Channel reliability**: Telegram double messages, QQ crashes, Slack breakage
- **Memory limitations**: Plain-text history causing "confusion" ([#1774](https://github.com/HKUDS/nanobot/issues/1774))

### Use Cases Emerging
- **Cron/automated workflows**: Timeout/retry needs ([#1783](https://github.com/HKUDS/nanobot/issues/1783)), global lock blocking ([#1781](https://github.com/HKUDS/nanobot/issues/1781))
- **Multi-tenant/team deployments**: OAuth, MCP tool servers, observability
- **China-market deployments**: QQ, WeCom, RouterWay, SiliconFlow integrations

### Satisfaction Indicators
- High engagement (86 updates/day) = strong product-market fit
- Frustration with "15 PRs trying to add search providers, none merged" = governance/process need

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|----------|-----|------|---------------|
| [#359](https://github.com/HKUDS/nanobot/issues/359) MCP support | 1 month | **High** — blocks enterprise | Maintainer review of [#1429](https://github.com/HKUDS/nanobot/pull/1429) |
| [#398](https://github.com/HKUDS/nanobot/pull/398) Web search providers | 1 month | **High** — 15 competing PRs | Architectural decision on plugin interface |
| [#140](https://github.com/HKUDS/nanobot/issues/140) Copilot provider | 1 month | Medium | OAuth scope clarification |
| [#581](https://github.com/HKUDS/nanobot/issues/581) Minimax provider | 3+ weeks | Low | Registry addition, straightforward |
| [#1680](https://github.com/HKUDS/nanobot/pull/1680) Mistral provider + transcription | 3 days | Medium | Review for provider pattern consistency |
| [#1035](https://github.com/HKUDS/nanobot/pull/1035) NanoGPT provider | 2+ weeks | Low | Privacy-focused alternative, community interest |

**Maintainer attention needed**: The web search provider fragmentation (#1719, #398) and MCP architecture (#359, #1429) are creating contributor friction that risks losing community momentum.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-10

## 1. Today's Overview

ZeroClaw shows **extremely high development velocity** with 50 PRs and 24 issues updated in the last 24 hours, indicating an active pre-release sprint. The project is in a **feature-expansion phase** with heavy contributor activity from @rareba (15+ PRs) covering enterprise integrations, voice/AI capabilities, and infrastructure hardening. However, **merge velocity lags significantly** with only 2 PRs merged/closed versus 48 open, suggesting potential code review bottlenecks. No new releases were cut today, leaving users on prior builds. The community is actively stress-testing edge cases around internationalization, deployment environments, and LLM provider integrations.

---

## 2. Releases

**No new releases** (v0.1.9 remains latest as of 2026-03-05).

---

## 3. Project Progress

### Merged/Closed Today (2 items)

| Item | Type | Summary |
|------|------|---------|
| [#1406](https://github.com/zeroclaw-labs/zeroclaw/issues/1406) | Issue closed | Security policy wildcard configuration — **fixed** |
| [#2964](https://github.com/zeroclaw-labs/zeroclaw/issues/2964) | Issue closed | Slack channel discovery `missing_scope` + thread replies regression — **fixed in v0.1.9** |

### Notable Advanced Features (Open PRs)

| PR | Feature Area | Status |
|----|-------------|--------|
| [#3089](https://github.com/zeroclaw-labs/zeroclaw/pull/3089) | OpenClaw node runner with auto-reconnect | Open, fresh (Mar 10) |
| [#3086](https://github.com/zeroclaw-labs/zeroclaw/pull/3086) | Slack file handling + Socket Mode hardening | Open |
| [#3087](https://github.com/zeroclaw-labs/zeroclaw/pull/3087) | 31-language README localization | Open |
| [#3042](https://github.com/zeroclaw-labs/zeroclaw/pull/3042) | Microsoft 365 Graph API integration | Open |
| [#2993](https://github.com/zeroclaw-labs/zeroclaw/pull/2993) | Claude Code, Gemini CLI, KiloCLI providers | Open |
| [#2994](https://github.com/zeroclaw-labs/zeroclaw/pull/2994) | Multi-provider TTS (OpenAI, ElevenLabs, Google, Edge) | Open |
| [#2995](https://github.com/zeroclaw-labs/zeroclaw/pull/2995) | Multi-provider STT (5 backends) | Open |
| [#3006](https://github.com/zeroclaw-labs/zeroclaw/pull/3006) | Multi-machine node system with HMAC-SHA256 transport | Open |

---

## 4. Community Hot Topics

| Rank | Issue/PR | Comments | 🔍 Analysis |
|------|----------|----------|-------------|
| 1 | [#3012](https://github.com/zeroclaw-labs/zeroclaw/issues/3012) — Feishu/Lark channel naming & defaults | 8 | **Enterprise China adoption blocker**: Confusion between "Lark" (international) and "Feishu" (China) branding is creating onboarding friction. Users expect this to work out-of-box for Chinese enterprise deployments. |
| 2 | [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) — GLIBC 2.39 runtime failure | 5 | **Deployment portability crisis**: Binary linked against newer glibc breaks on stable distros (Ubuntu 22.04, Debian 12). Suggests need for musl/static builds or older ABI targeting. |
| 3 | [#2929](https://github.com/zeroclaw-labs/zeroclaw/issues/2929) — `master` vs `main` branch confusion | 5 | **Contributor experience debt**: Migration to single-branch model incomplete; stale `main` branch still exists causing rebase failures. [#3061](https://github.com/zeroclaw-labs/zeroclaw/issues/3061) filed to delete it. |
| 4 | [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) — `channel_ack_config` schema error | 4 | **Runtime stability**: OpenAI function-calling schema validation failing in production agent loops. |
| 5 | [#2916](https://github.com/zeroclaw-labs/zeroclaw/issues/2916) — Matrix password login + E2EE recovery | 3 | **Privacy-conscious user need**: Current token-based auth expires too quickly; users want proper Matrix E2EE support. |

**Underlying pattern**: Strong demand for **enterprise deployment reliability** (auth, packaging, internationalization) alongside **consumer UX polish** (voice, streaming, mobile).

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **S0** | [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) | GLIBC 2.39 not found — binary won't run on common Linux distros | ❌ No fix PR |
| **S1** | [#2905](https://github.com/zeroclaw-labs/zeroclaw/issues/2905) | Build fails: `matrix-sdk` query overflow/depth limit | ❌ No fix PR |
| **S1** | [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) | `channel_ack_config` invalid schema breaks agent chat | ❌ No fix PR |
| **S1** | [#2930](https://github.com/zeroclaw-labs/zeroclaw/issues/2930) | Docker bootstrap fails on macOS: `Unbound variable` | ❌ No fix PR |
| **S1** | [#3024](https://github.com/zeroclaw-labs/zeroclaw/issues/3024) | Panic with Chinese characters: byte index not char boundary | ❌ No fix PR |
| **S2** | [#3079](https://github.com/zeroclaw-labs/zeroclaw/issues/3079) | Ollama+Qwen tool-calling regression: malformed `<tool_call>` | ❌ No fix PR |
| **S2** | [#3088](https://github.com/zeroclaw-labs/zeroclaw/issues/3088) | Token cost tracking $0.00 for all channel usage | ❌ No fix PR |
| **S2** | [#3083](https://github.com/zeroclaw-labs/zeroclaw/issues/3083) | Embedding provider uses wrong API key (Gemini→OpenAI) | ❌ No fix PR |
| — | [#3063](https://github.com/zeroclaw-labs/zeroclaw/issues/3063) | Docker build fails: missing `data/` COPY after security PR | ❌ No fix PR |
| — | [#3064](https://github.com/zeroclaw-labs/zeroclaw/issues/3064) | Output guardrail false-positive on URL paths | ❌ No fix PR |

**Critical gap**: **Zero fix PRs** for today's reported bugs despite 50 open PRs. Suggests either:
- Bugs are newly reported and fixes pending
- Contributor focus is on features over stability
- Review bandwidth constrained

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release | Rationale |
|---------|----------|---------------------------|-----------|
| **31-language i18n** | [#3087](https://github.com/zeroclaw-labs/zeroclaw/pull/3087) | ⭐⭐⭐⭐⭐ High | Docs-only, low risk, aligns with dashboard localization |
| **Voice loop / hands-free audio** | [#3005](https://github.com/zeroclaw-labs/zeroclaw/pull/3005) | ⭐⭐⭐⭐⭐ High | Core differentiator; Telegram/Slack/WhatsApp unified |
| **Microsoft 365 integration** | [#3042](https://github.com/zeroclaw-labs/zeroclaw/pull/3042) | ⭐⭐⭐⭐☆ High | Enterprise sales enabler; follows Google Workspace pattern |
| **Multi-provider TTS/STT** | [#2994](https://github.com/zeroclaw-labs/zeroclaw/pull/2994), [#2995](https://github.com/zeroclaw-labs/zeroclaw/pull/2995) | ⭐⭐⭐⭐☆ High | Infrastructure complete; provider diversity requested |
| **Matrix password auth** | [#2916](https://github.com/zeroclaw-labs/zeroclaw/issues/2916) | ⭐⭐⭐☆☆ Medium | UX pain point but requires protocol work |
| **Raspberry Pi binary** | [#3043](https://github.com/zeroclaw-labs/zeroclaw/issues/3043) | ⭐⭐⭐☆☆ Medium | ARM build pipeline expansion needed |
| **Feishu default enable** | [#3012](https://github.com/zeroclaw-labs/zeroclaw/issues/3012) | ⭐⭐⭐⭐☆ High | Config change + rename; unblocks China market |

---

## 7. User Feedback Summary

### 😤 Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Deployment fragility** | GLIBC issues, Docker failures, macOS bootstrap broken | Critical |
| **Configuration confusion** | Branch strategy, feature flags, security policy wildcards | High |
| **International text handling** | Chinese char panic, Feishu naming | Medium |
| **Cost transparency** | Token tracking broken for channels | Medium |
| **Build complexity** | `matrix-sdk` recursion limit, long compile times | Medium |

### 🎯 Use Cases Emerging
- **Enterprise assistant**: M365 + Google Workspace + corporate monitoring tools
- **Voice-first interface**: WhatsApp voice notes, hands-free Telegram/Slack
- **Multi-agent orchestration**: Node system for distributed workloads
- **China market**: Feishu integration, localized docs

### 📊 Satisfaction Signals
- High engagement (50 PRs/24 issues) = strong interest
- Feature breadth expanding rapidly
- **Risk**: Stability complaints may accumulate if unaddressed

---

## 8. Backlog Watch

| Issue | Age | Problem | Action Needed |
|-------|-----|---------|---------------|
| [#2929](https://github.com/zeroclaw-labs/zeroclaw/issues/2929) / [#3061](https://github.com/zeroclaw-labs/zeroclaw/issues/3061) | 4 days | Delete stale `main` branch | Maintainer branch cleanup |
| [#2905](https://github.com/zeroclaw-labs/zeroclaw/issues/2905) | 4 days | Build failure: matrix-sdk depth limit | Compiler/Rust expert review |
| [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) | 8 days | Runtime schema validation crash | Core runtime maintainer |
| [#2930](https://github.com/zeroclaw-labs/zeroclaw/issues/2930) | 4 days | macOS Docker bootstrap broken | DevOps/Docker maintainer |
| [#3043](https://github.com/zeroclaw-labs/zeroclaw/issues/3043) | 2 days | Raspberry Pi support | CI/CD build matrix expansion |

**Recommendation**: Prioritize S0/S1 bug fixes over new feature merges to prevent stability perception degradation. The 48:2 open-to-merged PR ratio warrants attention to review bandwidth.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-10

## 1. Today's Overview

PicoClaw shows **very high development velocity** with 83 PRs and 21 issues updated in 24 hours, indicating an active, rapidly maturing AI agent framework. The project released **v0.2.1** with UI improvements and new provider support. Channel integrations dominate activity—QQ, Feishu, IRC, and Telegram all seeing significant fixes and enhancements. The community is actively stress-testing enterprise features (WeCom, Feishu) while core infrastructure work advances on agent loops, MCP tooling, and session persistence. A notable pattern: many bugs stem from rapid channel expansion rather than architectural instability, suggesting healthy growing pains.

---

## 2. Releases

### [v0.2.1](https://github.com/sipeed/picoclaw/releases/tag/v0.2.1)

| Change | Description |
|--------|-------------|
| **UI** | New style banner for `picoclaw` and `picoclaw-launcher-tui` ([#1008](https://github.com/sipeed/picoclaw/commit/435223f500b56b81c2c238c36109401ef5f1ba99)) |
| **Provider** | Added MiniMax provider support ([#1273](https://github.com/sipeed/picoclaw/commit/abafa3c2aac12cd3483d9ccc345e6033f8a7f2d4)) |
| **Docs** | Updated `CONTRIBUTING.md` |

**Migration Notes:** No breaking changes reported. IRC users should note new configuration validation (see [Bug #1280](https://github.com/sipeed/picoclaw/issues/1280)).

---

## 3. Project Progress

### Merged/Closed PRs Today (40 total, selected highlights)

| PR | Type | Impact |
|----|------|--------|
| [#1255](https://github.com/sipeed/picoclaw/pull/1255) | **Bugfix** | Fixed QQ channel using wrong API (`PostC2CMessage` → `PostGroupMessage`) for group responses |
| [#1286](https://github.com/sipeed/picoclaw/pull/1286) | **Feature** | Reaction tool + typing/placeholder cleanup for Telegram |
| [#1243](https://github.com/sipeed/picoclaw/pull/1243) | **Feature** | MCP tool discovery (lazy loading) to prevent context window exhaustion |
| [#1285](https://github.com/sipeed/picoclaw/pull/1285) | **Infrastructure** | Nightly releases aligned with GoReleaser + auto-changelog |
| [#1107](https://github.com/sipeed/picoclaw/pull/1107) | **Bugfix** | Prevent `read_file` tool from loading huge/binary files (fixes [#1049](https://github.com/sipeed/picoclaw/issues/1049)) |
| [#1283](https://github.com/sipeed/picoclaw/pull/1283) | **Bugfix** | Feishu: preserve mention identity and sender `open_id` |
| [#1267](https://github.com/sipeed/picoclaw/pull/1267) | **Refactor** | Removed unnecessary `crypto/rand` in Feishu channel |

**Key Advances:**
- **MCP ecosystem maturing:** Tool discovery solves scaling problem for multi-server setups
- **Enterprise channels stabilizing:** QQ, Feishu receiving targeted fixes for production use
- **Developer experience:** Debug logging improvements (`--no-truncate` in [#1207](https://github.com/sipeed/picoclaw/pull/1207))

---

## 4. Community Hot Topics

### Most Active by Engagement

| Issue/PR | Comments | 🔥 Heat | Underlying Need |
|----------|----------|---------|---------------|
| [#1210](https://github.com/sipeed/picoclaw/issues/1210) WeCom AI Bot config | 10 | 🔥🔥🔥 | **Enterprise onboarding friction** — users struggle with cryptographic configuration (AES key, token setup) for WeCom integration; documentation gap for Chinese enterprise users |
| [#302](https://github.com/sipeed/picoclaw/issues/302) GHCR image private | 6, 👍2 | 🔥🔥 | **Container accessibility** — blocking self-hosted deployments; community wants official public images |
| [#1017](https://github.com/sipeed/picoclaw/issues/1017) eBPF command security | 3 | 🔥 | **Enterprise security requirements** — optional hardening for production deployments |
| [#1270](https://github.com/sipeed/picoclaw/issues/1270) Telegram Forum Topics | 2 | 🔥 | **Conversation organization** — parity with OpenClaw for multi-threaded support |

**Analysis:** Strong signal for **enterprise readiness** — users need better docs, security hardening, and container infrastructure. The WeCom issue's 10 comments suggest this is a critical adoption blocker for Chinese enterprises.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **High** | [#1287](https://github.com/sipeed/picoclaw/issues/1287) Tool calling fails — JSON unmarshal error on `tool_calls.function.arguments` | **Open, 0 comments** | ❌ None |
| 🟡 **Medium** | [#1262](https://github.com/sipeed/picoclaw/issues/1262) MCP initialization race — "request before initialization complete" | Open | ❌ None |
| 🟡 **Medium** | [#1281](https://github.com/sipeed/picoclaw/issues/1281) Feishu missing `user_id` in @ mentions and sender | Open | ✅ [#1283](https://github.com/sipeed/picoclaw/pull/1283) |
| 🟡 **Medium** | [#1242](https://github.com/sipeed/picoclaw/issues/1242) QQ channel `bindings` not distinguishing agents correctly | Open | ❌ None |
| 🟢 **Low** | [#1280](https://github.com/sipeed/picoclaw/issues/1280) IRC config uses Chinese commas | Open | ❌ None |
| 🟢 **Low** | [#1279](https://github.com/sipeed/picoclaw/issues/1279) IRC auto-join channels 400 Bad Request | Open | ❌ None |
| 🟢 **Low** | [#1269](https://github.com/sipeed/picoclaw/issues/1269) Weather skill returning incorrect data | Open | ❌ None |
| 🟢 **Low** | [#1256](https://github.com/sipeed/picoclaw/issues/1256) `spawn` doesn't propagate proxy settings to subagents | Open | ❌ None |

**Regressions in v0.2.1:** IRC feature (new in this release) has 2 configuration-related bugs ([#1279](https://github.com/sipeed/picoclaw/issues/1279), [#1280](https://github.com/sipeed/picoclaw/issues/1280)).

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood v0.3.0 | Signal Strength |
|---------|-------|-------------------|-----------------|
| **Mattermost channel** | [#1288](https://github.com/sipeed/picoclaw/pull/1288) PR open | ⭐⭐⭐⭐⭐ | **In progress** — PR submitted today |
| **Telegram Forum Topics** | [#1270](https://github.com/sipeed/picoclaw/issues/1270) | ⭐⭐⭐⭐ | High demand, parity feature |
| **WeCom long-connection/WebSocket mode** | [#1276](https://github.com/sipeed/picoclaw/issues/1276) | ⭐⭐⭐⭐ | Enterprise-critical, official API now available |
| **Signal channel** | [#41](https://github.com/sipeed/picoclaw/issues/41) | ⭐⭐⭐ | 👍5, privacy-focused users |
| **Subagent tool inheritance** | [#1278](https://github.com/sipeed/picoclaw/issues/1278) | ⭐⭐⭐⭐ | Architecture-critical for complex workflows |
| **Cronjob session management** | [#63](https://github.com/sipeed/picoclaw/issues/63) | ⭐⭐⭐ | User experience gap |
| **JSONL session persistence** | [#1169](https://github.com/sipeed/picoclaw/issues/1169) | ⭐⭐⭐⭐ | Performance optimization, PR #732 foundation exists |
| **eBPF security component** | [#1017](https://github.com/sipeed/picoclaw/issues/1017) | ⭐⭐ | Enterprise/security niche |

**Prediction:** v0.3.0 will likely focus on **channel parity** (Telegram Forum Topics, WeCom WebSocket, Mattermost) and **agent architecture** (subagent tools, session persistence).

---

## 7. User Feedback Summary

### Pain Points 😤
| Issue | Frequency | User Quote (paraphrased) |
|-------|-----------|--------------------------|
| Configuration complexity | High | "WeCom AI Bot setup unclear — AES key, token, webhook path?" |
| Container accessibility | Medium | "GHCR image is private, can't deploy" |
| Proxy/network issues | Medium | "Gemini API fails in subagents — proxy not inherited" |
| MCP reliability | Medium | "Tool calls fail randomly, initialization race" |

### Success Stories 😊
- IRC integration shipped (despite config bugs)
- QQ group messaging fixed — "finally works with @mentions"
- MCP lazy loading — "prevents context window exhaustion"

### Use Cases Emerging
- **Enterprise internal bots:** WeCom, Feishu, Lark deployments
- **Privacy-conscious self-hosting:** Signal requests, eBPF security
- **Multi-agent workflows:** Subagent spawning, task planning

---

## 8. Backlog Watch

### Stale but Important (needs maintainer triage)

| Issue/PR | Age | Risk | Action Needed |
|----------|-----|------|---------------|
| [#302](https://github.com/sipeed/picoclaw/issues/302) GHCR public access | 22 days | **Deployment blocker** | Decision: publish official image or document workaround |
| [#699](https://github.com/sipeed/picoclaw/pull/699) AgentLoop refactor | 14 days | **Code quality debt** | Review — large refactoring, conflicts likely |
| [#757](https://github.com/sipeed/picoclaw/pull/757) Cron agent response routing | 13 days | **Feature incomplete** | Review — fixes silent message drops |
| [#41](https://github.com/sipeed/picoclaw/issues/41) Signal channel | 27 days, 👍5 | **Community demand** | Triage: accept/reject, assign milestone |
| [#1101](https://github.com/sipeed/picoclaw/pull/1101) Telegram streaming | 5 days | **UX improvement** | Review — real-time response feature |

**Recommendation:** Prioritize [#302](https://github.com/sipeed/picoclaw/issues/302) (container accessibility) and [#699](https://github.com/sipeed/picoclaw/pull/699) (architectural debt) to prevent contributor friction.

---

*Digest generated from 83 PRs and 21 issues on 2026-03-10. Data source: github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-10

---

## 1. Today's Overview

NanoClaw shows **high velocity but concerning merge backlog**. With 27 issues and 50 PRs updated in 24 hours, the project demonstrates active community engagement, yet only 1 PR merged/closed against 49 open suggests a **significant review bottleneck**. The maintainer queue appears overwhelmed: 6 automated merge-forward failures indicate skill branches are diverging from main, and 20+ PRs marked "Blocked" await attention. Security and infrastructure hardening dominate recent activity, with critical fixes for credential exposure and OAuth token expiration closed today, while multi-runtime support and platform expansion (Windows, Podman, Signal, QQ) drive feature demand.

---

## 2. Releases

**No new releases** — version unchanged.

---

## 3. Project Progress

### Closed Today (3 Issues, 1 PR)

| Item | Type | Summary | Link |
|------|------|---------|------|
| #880 | Security Fix | **CRITICAL**: Agent credential leak in terminal/chat output — closed with fix | [Issue](https://github.com/qwibitai/nanoclaw/issues/880) |
| #891 | Security Enhancement | Gmail security pipeline with prompt injection filter + isolated inbox | [Issue](https://github.com/qwibitai/nanoclaw/issues/891) |
| #859 | Repo Maintenance | Deleted PRs #848, #849 per author request | [Issue](https://github.com/qwibitai/nanoclaw/issues/859) |

**Notable**: Two critical security items resolved same-day they were reported, indicating responsive security triage.

---

## 4. Community Hot Topics

| Rank | Issue/PR | Engagement | Analysis |
|------|----------|-----------|----------|
| 1 | [#80: Support runtimes other than Claude](https://github.com/qwibitai/nanoclaw/issues/80) | 21 comments, 37 👍 | **Highest community demand**. Driven by Anthropic account bans for OpenClaw usage; users seek OpenCode, Codex, Gemini as fallbacks. Signals vendor-lockin risk as core project vulnerability. |
| 2 | [#320: Signal containers on scheduled task enqueue](https://github.com/qwibitai/nanoclaw/pull/320) | Active discussion | Long-running architectural fix for container lifecycle management — blocked but conceptually approved. |
| 3 | [#363: /create-skill meta-skill](https://github.com/qwibitai/nanoclaw/pull/363) | Community interest | Addresses documentation gap and quality control for skill contributions — aligns with merge-forward failures suggesting skill ecosystem strain. |

**Underlying Need**: Community seeks **resilience against vendor action** (#80) and **lower contribution friction** (#363). The 37 👍 on multi-runtime support is exceptional for this repo size.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|----------|-------|--------|---------|---------|
| **Critical** | [#880](https://github.com/qwibitai/nanoclaw/issues/880) — Credential exposure in output | ✅ **CLOSED** | Yes, same-day | Agent printed secrets despite security rules; root cause in bash .env reading |
| **High** | [#730](https://github.com/qwibitai/nanoclaw/issues/730) — `CLAUDE_CODE_OAUTH_TOKEN` expires overnight | 🔴 Open | No | Containers fail 401 each morning; background service cannot refresh |
| **High** | [#889](https://github.com/qwibitai/nanoclaw/issues/889) — Unicode surrogates corrupt JSONL transcripts | 🔴 Open | No | Binary data in bash output → HTTP 400 on next API call |
| **High** | [#783](https://github.com/qwibitai/nanoclaw/issues/783) — `schedule_task` lacks idempotency | 🔴 Open | No | Duplicate tasks accumulate across sessions |
| **Medium** | [#897-898](https://github.com/qwibitai/nanoclaw/issues/897) — Merge-forward failures (6 issues) | 🔴 Open | Manual resolution | `skill/apple-container`, `skill/compact`, `skill/ollama-tool` branches diverging |

**Stability Assessment**: Infrastructure debt accumulating. Token expiration (#730) and transcript corruption (#889) are **daily operational blockers** for production users. Merge-forward automation failing suggests CI/CD scaling limits.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Priority | Next-Version Likelihood | Rationale |
|-------|---------|----------|------------------------|-----------|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | Multi-LLM runtime support | Low (tagged) | **High** | Existential user need; 37 👍; vendor risk |
| [#869](https://github.com/qwibitai/nanoclaw/issues/869) | Per-group credential management | High | High | Blocks multi-tenant deployments; security foundation |
| [#722](https://github.com/qwibitai/nanoclaw/issues/722) | Unified channel media support | High | Medium | Lazy download architecture specified; complex implementation |
| [#29](https://github.com/qwibitai/nanoclaw/issues/29) | Signal messaging channel | Low | Medium | Follows established pattern; privacy-conscious user demand |
| [#852](https://github.com/qwibitai/nanoclaw/issues/852) | QQBot channel | Low | Low | Regional (China) market; reference implementation exists |
| [#332](https://github.com/qwibitai/nanoclaw/pull/332), [#415](https://github.com/qwibitai/nanoclaw/pull/415), [#431](https://github.com/qwibitai/nanoclaw/pull/431) | Windows/Podman support | — | Medium | Multiple PRs blocked; platform expansion for enterprise adoption |

**Prediction**: Multi-runtime abstraction (#80) and per-group credentials (#869) likely form **v0.2.0 or v0.3.0 core**. Media support (#722) may slip due to architectural complexity.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Vendor lock-in / account bans** | #80, #730 | Critical |
| **Windows/WSL setup friction** | #375, #407, #415, #431, #445, #461 | High |
| **Security model trust gaps** | #865, #460, #878 | High |
| **Container credential lifecycle** | #730, #869, #878 | High |
| **Skill branch maintenance** | #897-898 (6 merge failures) | Medium |

### Use Cases Emerging
- **Multi-tenant SaaS**: #869 (per-group credentials) + #460 (network isolation) suggest enterprise hosting demand
- **Privacy-first messaging**: Signal (#29) + QQ (#852) requests indicate geographic diversification
- **AI team orchestration**: #881-885 (architect state, sprint management) show dev-team automation maturation

### Satisfaction Signals
- Same-day security fixes (#880, #891) demonstrate responsive maintainers
- Rich skill ecosystem (20+ skill branches) shows extensibility success

### Dissatisfaction Signals
- 49:1 open-to-merged PR ratio indicates **contributor frustration**
- "Blocked" status on 20+ PRs without clear unblocking path

---

## 8. Backlog Watch

### Critical Attention Needed

| Issue/PR | Age | Risk | Action Needed |
|----------|-----|------|---------------|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) Multi-runtime | 34 days | Project survival | Architecture decision; community has 37 👍 |
| [#320](https://github.com/qwibitai/nanoclaw/pull/320) Container signaling | 18 days | Stability fix | Review blocked PR; conceptually approved |
| [#332](https://github.com/qwibitai/nanoclaw/pull/332) Podman | 18 days | Platform expansion | Review blocked; enterprise relevance |
| [#363](https://github.com/qwibitai/nanoclaw/pull/363) /create-skill | 17 days | Contribution health | Review blocked; reduces maintainer load |
| [#460](https://github.com/qwibitai/nanoclaw/pull/460) Network isolation | 14 days | Security hardening | Review blocked; #865 criticizes current model |
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) OAuth expiration | 5 days | Daily breakage | No PR; affects all OAuth users |

### Merge-Forward Debt
Skill branches `apple-container`, `compact`, `ollama-tool` have **failed automatic merge 6+ times in 24 hours**. Recommend:
1. Pause new skill additions until backlog cleared
2. Assign dedicated maintainer to skill branch hygiene
3. Consider merging stable skills to main to reduce branch count

---

**Project Health**: ⚠️ **Active but strained**. Security responsiveness is excellent, but merge velocity and infrastructure automation require immediate investment to prevent contributor attrition.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-10

---

## 1. Today's Overview

IronClaw shows **very high development velocity** with 50 PRs and 36 issues updated in the last 24 hours, indicating an active sprint toward stability and feature completeness. The project is experiencing **significant architectural refactoring** (PR #778 reduces `main.rs` by 46%) while simultaneously addressing **critical production bugs** including infinite job loops, destructive unconfirmed actions, and session lock contention. No new releases were cut today, though v0.17.0 remains in release preparation (PR #633). The community is actively engaged with multi-comment issues around Telegram integration and model compatibility, while the core team is prioritizing reliability fixes over new features.

---

## 2. Releases

**No new releases today.**  
Release v0.17.0 remains in preparation ([PR #633](https://github.com/nearai/ironclaw/pull/633)) with **API-breaking changes** — specifically, externally-constructible structs adding new public fields. Users should prepare for migration when this lands.

---

## 3. Project Progress

### Merged/Closed PRs Today (11 total, key items):

| PR | Description | Impact |
|:---|:---|:---|
| [#787](https://github.com/nearai/ironclaw/pull/787) | Fix: GitHub Actions secrets in step conditions | CI stability |
| [#750](https://github.com/nearai/ironclaw/pull/750) | Restructure CLAUDE.md into modular rules + `/pr-shepherd` command | Developer experience |
| [#776](https://github.com/nearai/ironclaw/pull/776) | Chained promotion PRs with multi-agent Claude review | Release automation |
| [#685](https://github.com/nearai/ironclaw/pull/685) | MCP JSON-RPC spec compliance (flexible id, notification format) | Protocol correctness |
| [#767](https://github.com/nearai/ironclaw/pull/767) | Refactor: `src/llm/` self-contained for crate extraction | **Major architectural** — enables future crate splitting |
| [#784](https://github.com/nearai/ironclaw/pull/784) | Fix: lightweight action tool (superseded by #785) | Routine execution |
| [#230](https://github.com/nearai/ironclaw/issues/230) | Background sandbox reaper for orphaned Docker containers | **Production reliability** |

**Key advancements:** Infrastructure hardening (CI, release automation), MCP protocol compliance, and LLM module decoupling for future maintainability.

---

## 4. Community Hot Topics

| Rank | Issue/PR | Comments | Analysis |
|:---|:---|:---:|:---|
| 1 | [#602: No Telegram in default install](https://github.com/nearai/ironclaw/issues/602) | 4 | **Installation friction** — Telegram extension missing from binary releases, forcing source builds. Underlying need: streamlined first-run experience for non-technical users. |
| 2 | [#728: Compatibility with kimi-k2.5 model](https://github.com/nearai/ironclaw/issues/728) | 3 | **Model ecosystem expansion** — temperature constraints and missing `reasoning_content` block IronClaw from working with Moonshot's Kimi models. Signals demand for broader LLM provider support. |
| 3 | [#548: Add Search to Chat API](https://github.com/nearai/ironclaw/issues/548) | 2 | **Core capability gap** — web search as default agent tool; closed but indicates ongoing feature prioritization. |
| 4 | [#439: Registry update workflow fails](https://github.com/nearai/ironclaw/issues/439) | 2 | **Distribution infrastructure** — WASM tool installation blocked by GitHub branch protection. Affects extensibility. |

**Emerging theme:** Users want IronClaw to "just work" with popular channels (Telegram) and models (Kimi) without source compilation or configuration archaeology.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---:|
| 🔴 **Critical** | [#698](https://github.com/nearai/ironclaw/issues/698) | Jobs: no token budget/iteration cap; cancel button fails — **catastrophic cost exposure** | ✅ [#788](https://github.com/nearai/ironclaw/pull/788) |
| 🔴 **Critical** | [#701](https://github.com/nearai/ironclaw/issues/701) | Destructive actions from ambiguous prompts — e.g., "reset slack config" → permanent WASM deletion, no confirmation | ✅ [#782](https://github.com/nearai/ironclaw/pull/782) |
| 🔴 **Critical** | [#699](https://github.com/nearai/ironclaw/issues/699) | Chat API silently drops messages after container restart — session "stale state" | ✅ [#783](https://github.com/nearai/ironclaw/pull/783) |
| 🟡 **High** | [#738](https://github.com/nearai/ironclaw/issues/738) | Managed Tunnel binds to wrong port (3000 vs 8080) — all external webhooks 404 | ✅ [#768](https://github.com/nearai/ironclaw/pull/768) |
| 🟡 **High** | [#700](https://github.com/nearai/ironclaw/issues/700) | CLI crashes on libSQL backend — `tool setup`, `secret set` fail | ✅ [#786](https://github.com/nearai/ironclaw/pull/786) |
| 🟡 **High** | [#696](https://github.com/nearai/ironclaw/issues/696) | Routines: lightweight action outputs raw XML instead of executing tools | ✅ [#785](https://github.com/nearai/ironclaw/pull/785) |
| 🟡 **High** | [#753](https://github.com/nearai/ironclaw/issues/753) | Checksum verification fails for telegram-mtproto registry install | ❌ No PR yet |
| 🟡 **High** | [#763](https://github.com/nearai/ironclaw/issues/763) | NEAR AI "No user query found in messages" 400 error on routines | ❌ No PR yet |
| 🟢 **Medium** | [#751](https://github.com/nearai/ironclaw/issues/751) | Onboarding overwrites `.env`, deletes `HTTP_HOST=127.0.0.1` | ❌ No PR yet |
| 🟢 **Medium** | [#789](https://github.com/nearai/ironclaw/issues/789) | openai_compatible backend: forced-text response rejected when model includes `<tool_call>` XML | ❌ No PR yet |

**Assessment:** Excellent response velocity — 6 of 9 significant bugs have active PRs. The unaddressed items (#753, #763, #751, #789) represent installation and compatibility friction.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in v0.18+ |
|:---|:---|:---:|
| [#766](https://github.com/nearai/ironclaw/issues/766) | Image + text multimodal input to Chat API | High — foundational capability |
| [#770](https://github.com/nearai/ironclaw/issues/770) | Share skills between agents | Medium — requires auth/permissions design |
| [#761](https://github.com/nearai/ironclaw/issues/761) | Light theme for Web Gateway | Medium — UI debt, community PR likely |
| [#773](https://github.com/nearai/ironclaw/issues/773) | GCP app verification for G Suite | High — blocking enterprise adoption |
| [#764](https://github.com/nearai/ironclaw/issues/764) | Capacity alerts before machines saturate | Medium — ops infrastructure |
| [#765](https://github.com/nearai/ironclaw/issues/765) | Optimize agent logging (22M logs/day → DataDog) | High — cost pressure |

**Predicted v0.18 themes:** Multimodal support, enterprise identity (G Suite verification), operational cost controls, and agent collaboration features.

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Voice | Root Cause |
|:---|:---|:---|
| [#602](https://github.com/nearai/ironclaw/issues/602) | "No Telegram in default install... consistently fails to install any telegram extension" | Release packaging excludes extensions; registry checksum failures |
| [#728](https://github.com/nearai/ironclaw/issues/728) | Temperature must be exactly 1, reasoning_content missing | Hardcoded API assumptions incompatible with Kimi constraints |
| [#780](https://github.com/nearai/ironclaw/issues/780) | Pricing discrepancy: agent.near.ai shows $0.62, IronClaw UI shows $3.77 | Data synchronization or calculation error |
| [#781](https://github.com/nearai/ironclaw/issues/781) | Chat input hidden in mobile browser | Responsive CSS gap |

### Positive Signals
- Active enterprise use case: "operations leader... wants to share skill with employees" ([#770](https://github.com/nearai/ironclaw/issues/770))
- Community contribution quality: new contributor @TerminalsandCoffee submitted security hardening PR [#772](https://github.com/nearai/ironclaw/pull/772)

**Satisfaction assessment:** Users are **engaged but frustrated by rough edges** — installation, mobile experience, and billing transparency need attention to match the core agent capabilities.

---

## 8. Backlog Watch

| Issue | Age | Risk | Needs |
|:---|:---:|:---|:---|
| [#439](https://github.com/nearai/ironclaw/issues/439) | 9 days | 🔴 **Blocking extensibility** | Maintainer decision on GitHub branch protection bypass for registry CI |
| [#753](https://github.com/nearai/ironclaw/issues/753) | 1 day | 🟡 **Installation failure** | Registry checksum investigation — may relate to #439 |
| [#774](https://github.com/nearai/ironclaw/issues/774) | 1 day | 🟡 **Legal/attribution** | Maintainer response to citation request (Yang Yuan/Topos Technology Center) |
| [#702](https://github.com/nearai/ironclaw/issues/702) | 1 day | 🟡 **Reliability** | Hot-reload architecture review — PR #779 in progress |

**Recommendation:** #439 warrants immediate maintainer attention as it blocks the WASM extension ecosystem. The attribution issue (#774) should receive a documented response to maintain community trust.

---

*Digest generated from 50 PRs and 36 issues updated 2026-03-09 to 2026-03-10.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-10

## 1. Today's Overview

LobsterAI shows **exceptionally high development velocity** with 26 PRs processed in 24 hours (25 merged/closed, 1 open) against 16 active issues. The project demonstrates strong maintainer responsiveness with a 93.75% PR closure rate. However, **user-reported critical bugs are accumulating faster than fixes**, particularly around bash execution performance and Chinese text formatting. No new release was cut today despite substantial merged improvements. The community is actively stress-testing IM integrations and MCP capabilities, revealing edge cases in production environments.

---

## 2. Releases

**No new releases** (v0.x.x remains current).

Despite 25 merged PRs since late February covering enterprise WeChat support, MCP integration, and security fixes, maintainers have not published a release. Users must build from source to access critical fixes like [#335](https://github.com/netease-youdao/LobsterAI/pull/335) (enterprise WeChat scheduled tasks) and [#209](https://github.com/netease-youdao/LobsterAI/pull/209) (security hardening).

---

## 3. Project Progress

### Major Features Landed (Merged PRs)

| PR | Description | Impact |
|:---|:---|:---|
| [#348](https://github.com/netease-youdao/LobsterAI/pull/348) | QQ SDK debug logging fix + image/media message optimization | Critical IM stability |
| [#346](https://github.com/netease-youdao/LobsterAI/pull/346) | **OpenClaw plugin preinstall system** + DingTalk connector (v0.7.3) | **Architecture milestone**: plugin ecosystem foundation |
| [#331](https://github.com/netease-youdao/LobsterAI/pull/331) | Enterprise WeChat (企业微信) support | Major enterprise IM coverage |
| [#335](https://github.com/netease-youdao/LobsterAI/pull/335) | Fixed scheduled tasks for enterprise WeChat | Bugfix completion for above |
| [#233](https://github.com/netease-youdao/LobsterAI/pull/233) | **MCP (Model Context Protocol) support** | Core extensibility feature |
| [#209](https://github.com/netease-youdao/LobsterAI/pull/209) | OpenAI compat proxy bound to 127.0.0.1 | **Security fix** (prevented unauthenticated RCE) |
| [#147](https://github.com/netease-youdao/LobsterAI/pull/147) | Enhanced scheduled tasks: media support + notification target persistence | Reliability improvement |
| [#108](https://github.com/netease-youdao/LobsterAI/pull/108) | Media input support for DingTalk, Feishu, Telegram, Discord | Feature parity across IMs |

### Architecture Evolution
- **Plugin system genesis**: PR [#346](https://github.com/netease-youdao/LobsterAI/pull/346) establishes `package.json`-declared plugins with auto-download/packaging — signals shift toward marketplace model
- **MCP integration**: PR [#233](https://github.com/netease-youdao/LobsterAI/pull/233) positions LobsterAI as MCP host, though [#351](https://github.com/netease-youdao/LobsterAI/issues/351) reveals HTTP/SSE transport gaps

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Issue/PR | Comments | Core Tension |
|:---|:---|:---:|:---|
| 1 | [#344](https://github.com/netease-youdao/LobsterAI/issues/344) Auto-inserted spaces in Chinese+number strings | 4 | **Localization quality blocker** — breaks code generation, user calls it "severe BUG preventing OpenClaw replacement" |
| 2 | [#70](https://github.com/netease-youdao/LobsterAI/issues/70) + [#350](https://github.com/netease-youdao/LobsterAI/issues/350) Bash execution slowness | 2+2 | **Performance crisis** — "minutes vs. seconds" execution gap, `zsh:pwd:1: too many arguments` errors on Apple Silicon |
| 3 | [#320](https://github.com/netease-youdao/LobsterAI/issues/320) "Lobster Army" multi-agent configuration | 2 | Architecture question: local multi-Agent orchestration |

### Underlying Needs Analysis

- **#344**: Users need **deterministic, locale-aware string handling** — current LLM post-processing corrupts Chinese technical content
- **#70/#350**: Terminal integration requires **async execution with streaming output** + better shell environment detection (zsh compatibility)
- **#320**: Signal of **agent orchestration demand** — users want hierarchical/multi-Agent workflows beyond single-session cowork

---

## 5. Bugs & Stability

| Severity | Issue | Status | Details | Fix PR? |
|:---|:---|:---:|:---|:---:|
| **🔴 Critical** | [#344](https://github.com/netease-youdao/LobsterAI/issues/344) Chinese+number spacing corruption | Open | Corrupts code/data; user escalation ("急死了") | ❌ No |
| **🔴 Critical** | [#352](https://github.com/netease-youdao/LobsterAI/issues/352) Claude Code process exit (code 1) | Open | Complete task execution failure | ❌ No |
| **🟡 High** | [#70](https://github.com/netease-youdao/LobsterAI/issues/70) / [#350](https://github.com/netease-youdao/LobsterAI/issues/350) Bash execution latency | Open | Minutes-long hangs, Apple Silicon zsh errors | ❌ No |
| **🟡 High** | [#351](https://github.com/netease-youdao/LobsterAI/issues/351) Remote HTTP MCP (SSE) not loading | Open | 7 configured servers invisible in UI | ❌ No |
| **🟡 High** | [#347](https://github.com/netease-youdao/LobsterAI/issues/347) QQ adapter cannot reply with files/images | Open | Media message reply failure | Partial: [#348](https://github.com/netease-youdao/LobsterAI/pull/348) fixes inbound, outbound pending |
| **🟢 Medium** | [#341](https://github.com/netease-youdao/LobsterAI/issues/341) Git Bash runtime exception | Open | Windows shell compatibility | ❌ No |
| **🟢 Medium** | [#339](https://github.com/netease-youdao/LobsterAI/issues/339) QQ scheduled task notifications not routing | Open | Notification platform selection ignored | ❌ No |

**Regression Risk**: High velocity of IM feature additions (#331, #335, #348) without corresponding integration tests may destabilize notification routing.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| [#349](https://github.com/netease-youdao/LobsterAI/issues/349) Custom system prompts + SubAgent orchestration | **High** | Architecture aligns with plugin system (#346); "Lobster Army" demand (#320) |
| [#342](https://github.com/netease-youdao/LobsterAI/issues/342) HITL (Human-in-the-Loop) | Medium | Safety-critical enterprise feature; no competing requests yet |
| [#343](https://github.com/netease-youdao/LobsterAI/issues/343) Typewriter/streaming effect | Medium | UX polish; depends on terminal rendering refactor |
| [#345](https://github.com/netease-youdao/LobsterAI/issues/345) Offline dependency bundling | Medium | Enterprise air-gapped deployment need |
| [#260](https://github.com/netease-youdao/LobsterAI/issues/260) Specific IM dialog targeting for scheduled tasks | High | Natural extension of #147's notification target work |

**Predicted v0.8.0 themes**: SubAgent orchestration, HITL safety gates, streaming UX improvements.

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Category | Quote | Frequency |
|:---|:---|:---:|
| **Speed** | "套壳的openclaw执行起来比你快多了" / "速度即体验" | 🔥🔥🔥 |
| **Reliability** | "急死了，感觉应该挺好修复的啊" / "严重BUG，所以目前还无法替代openclaw" | 🔥🔥🔥 |
| **Bash integration** | "等好几分钟" / "天生没有返回字符串的，但是LobsterAI还要干等" | 🔥🔥🔥 |
| **Localization** | "中文+数字...一定会在中间加上空格" | 🔥🔥 |

### Competitive Positioning
Users explicitly compare to **OpenClaw** (wrapper) and **Claude Code**:
- LobsterAI wins on: MCP support, multi-IM integration, scheduled tasks
- LobsterAI loses on: execution speed, terminal stability, Chinese text handling

### Satisfaction Signals
- Positive: Rapid feature delivery (enterprise WeChat, QQ media)
- Negative: "虽然但是" — acknowledgment of effort despite frustration

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#70](https://github.com/netease-youdao/LobsterAI/issues/70) Bash slowness | 14 days | **User churn risk** — Apple Silicon users blocked | Profiling + shell environment detection |
| [#353](https://github.com/netease-youdao/LobsterAI/issues/353) Speed comparison feedback | New | Competitive positioning insight | Acknowledge + roadmap communication |
| [#346](https://github.com/netease-youdao/LobsterAI/pull/346) OpenClaw plugin system | Open | Architecture decision pending | Review for v0.8.0 inclusion |

**Maintainer Attention Required**: 
- **Performance working group**: #70, #350, #353 share root cause in terminal execution layer
- **MCP completeness**: #351 blocks HTTP/SSE adoption — transport layer gap vs. stdio

---

*Digest generated from 16 issues, 26 PRs, 0 releases on 2026-03-10. Data source: github.com/netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-10

## 1. Today's Overview

TinyClaw is experiencing **extremely high development velocity** with 25 PRs updated in the last 24 hours (19 merged/closed, 6 open). The project is undergoing a **major architectural transformation**: the core codebase is being restructured from a flat monolith into a 5-package npm workspace monorepo, accompanied by infrastructure simplification (SQLite replacing Redis/BullMQ). This suggests the project is maturing from prototype to production-ready architecture. Issue activity is minimal (2 closed, none open), indicating either effective triage or contributors shifting focus to PR-based collaboration.

---

## 2. Releases

**No new releases** (current version appears to be 0.0.9 with known install script issues per #164).

---

## 3. Project Progress

### Major Architectural Changes

| PR | Description | Impact |
|:---|:---|:---|
| [#186](https://github.com/TinyAGI/tinyclaw/pull/186) | **Monorepo refactor**: 5 npm workspaces (`@tinyclaw/core`, `@tinyclaw/teams`, `@tinyclaw/channels`, `@tinyclaw/server`, `@tinyclaw/visualizer`) | Structural foundation for scalability |
| [#186](https://github.com/TinyAGI/tinyclaw/pull/186) | **SQLite queue**: Replaces 427-line `db.ts` + BullMQ/Redis with ~160-line better-sqlite3 (WAL mode) | Removes Redis dependency, simplifies deployment |
| [#185](https://github.com/TinyAGI/tinyclaw/pull/185) | **CLI modernization**: 1500+ lines of bash prompts → TypeScript with `@clack/prompts` | Better UX, validation, maintainability |

### Provider & Integration Ecosystem

| PR | Description | Impact |
|:---|:---|:---|
| [#178](https://github.com/TinyAGI/tinyclaw/pull/178) | **Custom provider system** + built-in auth token storage | Any OpenAI/Anthropic-compatible endpoint (self-hosted, DeepSeek, etc.) |
| [#166](https://github.com/TinyAGI/tinyclaw/pull/166) | Custom OpenAI-compatible provider (SGLang, Ollama, vLLM, LM Studio) | Validated on AMD MI300X with Qwen3-32B |
| [#143](https://github.com/TinyAGI/tinyclaw/pull/143) | **Avian AI provider** | Native `fetch()` to `api.avian.io` |
| [#39](https://github.com/TinyAGI/tinyclaw/pull/39) | **Telnyx/ClawdTalk voice channel** | Inbound/outbound phone calls with programmable voice |

### Multi-Agent & Collaboration

| PR | Description | Impact |
|:---|:---|:---|
| [#163](https://github.com/TinyAGI/tinyclaw/pull/163) | **Multi-agent teams**: parallel processing, A2A communication, request tracking | "Multiple agents that take turns" → "team that actually collaborates" |
| [#182](https://github.com/TinyAGI/tinyclaw/pull/182) | Auto-trigger agent when task moves to "In Progress" | Eliminates manual "Send" button step |
| [#177](https://github.com/TinyAGI/tinyclaw/pull/177) | **Chatroom API + real-time CLI viewer** (`tinyclaw chatroom`) | User-facing team observability |
| [#183](https://github.com/TinyAGI/tinyclaw/pull/183) | Remove `message_received` event, simplify office UI | Cleaner message display |

### Infrastructure & Reliability

| PR | Description | Impact |
|:---|:---|:---|
| [#179](https://github.com/TinyAGI/tinyclaw/pull/179) | Fix: 2-second delay after tmux pane creation for shell init | Resolves zsh/conda/nvm race condition causing silent exits |
| [#155](https://github.com/TinyAGI/tinyclaw/pull/155) | Fix: Telegram auto-reconnect after transient failures (ECONNRESET/ETIMEDOUT) | Prevents indefinite disconnection |

### Developer Experience

| PR | Description |
|:---|:---|
| [#184](https://github.com/TinyAGI/tinyclaw/pull/184) | Conventional commits PR template |
| [#181](https://github.com/TinyAGI/tinyclaw/pull/181) | Issue templates with auto-triage labels |
| [#180](https://github.com/TinyAGI/tinyclaw/pull/180) | README updates for chatroom and custom providers |

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#186](https://github.com/TinyAGI/tinyclaw/pull/186) Monorepo + SQLite refactor | **Highest technical impact** | Core maintainer (@jlia0) driving architectural debt reduction. Community need: simpler deployment, better code organization. Open status suggests ongoing review. |
| [#185](https://github.com/TinyAGI/tinyclaw/pull/185) CLI migration to @clack/prompts | Major UX investment | 1500+ lines of bash eliminated. Signals project prioritizing polished CLI experience over raw functionality. |
| [#163](https://github.com/TinyAGI/tinyclaw/pull/163) Multi-agent teams | 28 commits, 35 files | Massive feature merge. Underlying need: users want autonomous agent collaboration, not just task delegation. |
| [#182](https://github.com/TinyAGI/tinyclaw/pull/182) Auto-trigger on kanban move | Workflow optimization | Friction reduction in daily usage patterns. |
| [#172](https://github.com/TinyAGI/tinyclaw/pull/172) Modularized channels + TUI example | Community contribution | @dagelf extending channel system. Signals healthy plugin ecosystem potential. |

**Underlying needs identified:**
- **Deployment simplicity** (SQLite over Redis, monorepo for clarity)
- **Vendor independence** (custom providers, self-hosted models)
- **Real-time observability** (chatroom viewer, simplified UI)
- **Voice/phone integration** for business use cases

---

## 5. Bugs & Stability

| Issue/PR | Severity | Status | Details |
|:---|:---|:---|:---|
| [#156](https://github.com/TinyAGI/tinyclaw/issues/156) | **High** | ✅ Fixed by [#179](https://github.com/TinyAGI/tinyclaw/pull/179) | macOS zsh shell init race caused immediate process exit. Root cause: `node` commands sent before shell ready. Fix: 2s delay. |
| [#164](https://github.com/TinyAGI/tinyclaw/issues/164) | **Medium** | Closed (unclear if fixed) | Install/update scripts installing wrong version (0.0.8 instead of 0.0.9). No linked fix PR—may need verification. |
| [#155](https://github.com/TinyAGI/tinyclaw/pull/155) | Medium | ✅ Merged | Telegram polling recovery after network failures. |

**Stability assessment:** Rapid refactoring introduces risk, but active bug fixes show responsiveness. The SQLite migration (#186) is a potential regression vector—monitor for queue reliability issues.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Likelihood in Next Release | Evidence |
|:---|:---|:---|
| **Official monorepo release** | Very High | #186 open, #147 closed as precursor |
| **SQLite as default queue** | Very High | #186 replaces Redis/BullMQ entirely |
| **Custom provider CLI commands** | High | #178 merged, #180 documented |
| **Voice channel GA** | Medium | #39 merged, needs real-world validation |
| **TUI channel plugins** | Medium | #172 open, modular architecture enables this |
| **Windows/PowerShell support** | Low-Medium | All fixes target macOS/zsh; Windows shell race conditions unaddressed |

**Emerging pattern:** Project is pivoting from "AI agent framework" to "AI team operating system" with emphasis on multi-modal channels (chat, voice, web) and observable collaboration.

---

## 7. User Feedback Summary

### Pain Points
| Issue | User | Context |
|:---|:---|:---|
| Silent process crashes on startup | @1of13 | Heavy zsh/conda/nvm shell configs break tmux initialization |
| Version mismatch in install scripts | @SpongGreen | Update path unreliable for early adopters |
| Manual "Send" button friction | Implied by #182 | Kanban workflow interruption |

### Use Cases Demonstrated
- **Self-hosted enterprise**: AMD MI300X + SGLang + Qwen3-32B (#166)
- **Voice-enabled operations**: Telnyx programmable voice for phone-based agents (#39)
- **Multi-agent research teams**: Parallel A2A communication (#163)

### Satisfaction Indicators
- High contributor retention (@jlia0: 10+ PRs in 24h)
- Rapid bug fix turnaround (#156 reported 2026-03-03, fixed 2026-03-09)
- Community extending channels (#172 TUI example)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#172](https://github.com/TinyAGI/tinyclaw/pull/172) Modular channels + TUI | 1 day | Low | Review for merge; aligns with #186 monorepo structure |
| [#186](https://github.com/TinyAGI/tinyclaw/pull/186) Monorepo refactor | 1 day | **High** | Critical path—blocks other structural work; needs thorough review |
| [#182](https://github.com/TinyAGI/tinyclaw/pull/182) Auto-trigger agent | 1 day | Low | UX polish, ready for merge |
| [#183](https://github.com/TinyAGI/tinyclaw/pull/183) Simplify office UI | 1 day | Low | Cleanup PR, low risk |

**No stale items**—all open PRs are <24h old. Project velocity may exceed review capacity; consider CI/CD automation to reduce maintainer bottleneck.

---

**Digest compiled:** 2026-03-10  
**Data source:** github.com/TinyAGI/tinyclaw

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-10

## 1. Today's Overview

Moltis shows **strong development velocity** with 7 of 8 PRs merged and 7 of 12 issues closed in the last 24 hours. The project released **v0.10.18**, indicating an active maintenance cycle. Community engagement is healthy with diverse contributions spanning container runtime support, OAuth improvements, and model provider integrations. The maintainer team (primarily @penso) demonstrates rapid response times, with most fixes shipping same-day. However, **three new bugs emerged** including a Chrome sign-in failure and a networking proxy crash, suggesting ongoing stability challenges at the infrastructure edge.

---

## 2. Releases

### v0.10.18
**Released:** 2026-03-09

No detailed changelog provided in release notes. Based on merged PRs, this release likely includes:
- OAuth callback URL fallback support for manual provider setup
- Reasoning effort configuration for Claude extended thinking models
- Codex model discovery fixes for newer GPT models
- Tailscale redirect loop resolution
- Telegram voice message duplicate reply fix

**Migration Notes:** No breaking changes identified in merged PRs. Users on Tailscale or relying on Codex models should upgrade promptly.

---

## 3. Project Progress

| PR | Status | Summary | Impact |
|:---|:---|:---|:---|
| [#356](https://github.com/moltis-org/moltis/pull/356) | ✅ Merged | Fix Tailscale redirect loop (#350) | **Infrastructure** — Resolves access issues for remote users |
| [#373](https://github.com/moltis-org/moltis/pull/373) | ✅ Merged | Skip duplicate text fallback when TTS disabled (#371) | **UX** — Eliminates double replies on Telegram voice messages |
| [#357](https://github.com/moltis-org/moltis/pull/357) | ✅ Merged | Allow deleting cron sessions from UI (#342) | **UX** — Fixes orphaned cron session management |
| [#363](https://github.com/moltis-org/moltis/pull/363) | ✅ Merged | Reasoning effort support for extended thinking models (#347) | **Feature** — Enables Claude Opus 4.5 reasoning variants |
| [#362](https://github.com/moltis-org/moltis/pull/362) | ✅ Merged | Omit sandbox/node info when disabled (#360) | **Reliability** — Reduces LLM hallucinations about sandbox state |
| [#365](https://github.com/moltis-org/moltis/pull/365) | ✅ Merged | OAuth pasted callback URL fallback | **Auth** — Improves manual OAuth provider setup flow |
| [#359](https://github.com/moltis-org/moltis/pull/359) | ✅ Merged | Codex model discovery version fix (#354) | **Providers** — Restores access to newer GPT-5.x Codex models |

**Key Advancement:** Multi-provider model support maturing with reasoning variants and Codex compatibility fixes.

---

## 4. Community Hot Topics

| Issue/PR | Activity | Analysis |
|:---|:---|:---|
| [#102](https://github.com/moltis-org/moltis/issues/102) | 4 👍, 2 comments, open since Feb 13 | **Highest community priority** — Docker-in-Docker path mounting breaks sandbox workspaces. Affects containerized deployments. Root cause identified in `crates/tools/src/san...` — needs maintainer assignment. |
| [#371](https://github.com/moltis-org/moltis/issues/371) → [#373](https://github.com/moltis-org/moltis/pull/373) | 1 comment, rapid fix | Telegram voice/TTS interaction edge case — demonstrates responsive maintainer workflow. |
| [#252](https://github.com/moltis-org/moltis/issues/252) | 5 comments, closed | Podman runtime support — container ecosystem expansion completed. |

**Underlying Need:** Users are deploying Moltis in complex containerized environments (Docker-in-Docker, Podman, Tailscale) requiring robust path handling and network proxy stability.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| 🔴 **High** | [#370](https://github.com/moltis-org/moltis/issues/370) Sign-in failed on Chrome | **Open**, reported today | None |
| 🔴 **High** | [#367](https://github.com/moltis-org/moltis/issues/367) Trusted-network proxy immediate shutdown | **Open**, fix in review | [#368](https://github.com/moltis-org/moltis/pull/368) |
| 🟡 **Medium** | [#375](https://github.com/moltis-org/moltis/issues/375) Missing `thought_signature` in Google model function calls | **Open**, reported today | None |
| 🟡 **Medium** | [#102](https://github.com/moltis-org/moltis/issues/102) Docker-in-Docker path mounting | **Open**, 26 days | None |

**Regression Risk:** Chrome sign-in failure (#370) and Google model function calling (#375) suggest browser compatibility and multi-provider integration remain fragile. The proxy shutdown bug (#367) has an active fix PR ready for merge.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version |
|:---|:---|:---|
| **SearXNG web search integration** | [#345](https://github.com/moltis-org/moltis/issues/345) | **High** — Aligns with existing web search architecture, privacy-focused alternative |
| **Podman runtime support** | [#252](https://github.com/moltis-org/moltis/issues/252) | ✅ **Shipped** in v0.10.18 |
| **Reasoning effort controls** | [#347](https://github.com/moltis-org/moltis/issues/347) | ✅ **Shipped** in v0.10.18 |

**Emerging Pattern:** Privacy-preserving and self-hosted integrations (SearXNG, Podman, Tailscale) dominate user requests — Moltis positioning as deployable personal AI infrastructure.

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|:---|:---|:---|
| **Container deployment complexity** | #102, #367, #252 | 😤 Frustrated — path mounting and networking issues recur |
| **Multi-model provider friction** | #354, #375, #347 | 😐 Mixed — rapid fixes but ongoing edge cases |
| **Telegram UX polish** | #371, #373 | 😊 Satisfied — quick resolution |
| **OAuth/setup flow** | #370, #365 | 😤 Blocked — Chrome sign-in currently broken |

**Critical Pain Point:** Chrome browser authentication failure (#370) is a **new user blocker** requiring immediate attention.

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#102](https://github.com/moltis-org/moltis/issues/102) Docker-in-Docker path mounting | 26 days | **High** — 4 upvotes, affects containerized deployments | Maintainer assignment for `crates/tools` fix |
| [#368](https://github.com/moltis-org/moltis/pull/368) Proxy shutdown fix | 1 day | Medium | Merge pending — addresses #367 |
| [#345](https://github.com/moltis-org/moltis/issues/345) SearXNG integration | 4 days | Low | Community interest, good first issue candidate |

**Recommendation:** Prioritize #102 (longest-running active bug with clear technical root cause) and #370 (new user-facing blocker).

---

*Digest generated from GitHub activity 2026-03-09 to 2026-03-10*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-10

---

## 1. Today's Overview

CoPaw demonstrates **high development velocity** with 100 items updated in 24 hours (50 issues, 50 PRs) and a **54% merge/close rate** on PRs (27/50). The project released two versions including a hotfix post-release, indicating active stabilization efforts. Community engagement is strong with **first-time contributors submitting 6 PRs** for new channels and features. However, **channel integration bugs dominate issue volume**—Feishu, QQ, and DingTalk problems account for ~30% of active issues. The maintainers are responsive with same-day fixes for critical regressions like the missing QQ channel in v0.0.6.

---

## 2. Releases

### [v0.0.6](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.0.6) — Major Desktop Release
| Aspect | Details |
|--------|---------|
| **Headline** | Native Desktop Installers for Windows & macOS |
| **Key Addition** | One-click Windows installer + standalone `.app` bundle for macOS using conda-pack for portable Python environments |
| **Infrastructure** | Automated GitHub Actions release workflow ([#843](https://github.com/agentscope-ai/CoPaw/pull/843)) |
| **Breaking Changes** | None reported |
| **Migration Notes** | Docker users unaffected; desktop users can now run without Docker |

### [v0.0.6.post1](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.0.6.post1) — Hotfix
- Version bump with documentation updates and CI improvements
- [PR #1067](https://github.com/agentscope-ai/CoPaw/pull/1067), [PR #1062](https://github.com/agentscope-ai/CoPaw/pull/1062), [PR #1069](https://github.com/agentscope-ai/CoPaw/pull/1069)

---

## 3. Project Progress

### Merged/Closed PRs Today (27 total)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#1069](https://github.com/agentscope-ai/CoPaw/pull/1069) | @rayrayraykk | **Docker CI fix**: Correct `latest` tag handling for post-releases | Prevents deployment confusion |
| [#1062](https://github.com/agentscope-ai/CoPaw/pull/1062) | @cuiyuebing | Documentation: Roadmap & OpenClaw comparison update | Clarifies positioning |
| [#1075](https://github.com/agentscope-ai/CoPaw/pull/1075) | @zhijianma | Container type handling improvement | Reliability |
| [#1074](https://github.com/agentscope-ai/CoPaw/pull/1074) | @xieyxclack | Dependency addition | Build stability |
| [#1028](https://github.com/agentscope-ai/CoPaw/pull/1028) | @rayrayraykk | ModelScope documentation | User onboarding |
| [#1087](https://github.com/agentscope-ai/CoPaw/pull/1087) | — | Mac M4 chat fix | **Critical regression fixed** |
| [#1083](https://github.com/agentscope-ai/CoPaw/pull/1083)-[#1080](https://github.com/agentscope-ai/CoPaw/pull/1080) | @seoeaa | Linux AppImage support (multiple iterations, finally merged) | **New platform support** |

### Active Development (Open PRs)
- **Linux AppImage**: [PR #1084](https://github.com/agentscope-ai/CoPaw/pull/1084) — completing cross-platform desktop coverage
- **Matrix channel**: [PR #969](https://github.com/agentscope-ai/CoPaw/pull/969) — new messaging platform integration
- **Mattermost channel**: [PR #1071](https://github.com/agentscope-ai/CoPaw/pull/1071) — enterprise chat support
- **Media reading tools**: [PR #1063](https://github.com/agentscope-ai/CoPaw/pull/1063) — multimodal capabilities
- **OpenAI-compatible improvements**: [PR #419](https://github.com/agentscope-ai/CoPaw/pull/419) — custom headers + wire API

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Rank | Issue | Comments | Category | Underlying Need |
|:---|:---|:---:|:---|:---|
| 1 | [#981](https://github.com/agentscope-ai/CoPaw/issues/981) Feishu/QQ file sending failure | 10 | **Channel parity** | Users expect consistent file sharing across all messaging platforms |
| 2 | [#510](https://github.com/agentscope-ai/CoPaw/issues/510) DingTalk context length crash | 10 | **Reliability** | Production deployments hitting LLM token limits need graceful handling |
| 3 | [#863](https://github.com/agentscope-ai/CoPaw/issues/863) `copaw app` terminal warnings | 9 | **Developer experience** | Clean CLI output expected for professional tool |
| 4 | [#1022](https://github.com/agentscope-ai/CoPaw/issues/1022) OpenAI-compatible JSON deserialization error | 7 | **Integration** | Content format mismatch between CoPaw and OpenAI-compatible APIs |
| 5 | [#682](https://github.com/agentscope-ai/CoPaw/issues/682) `skill-creator` `execute` function missing | 6 | **Skill system** | Skill execution lifecycle unclear to users |

**Pattern**: Chinese enterprise messaging platforms (Feishu, DingTalk, QQ) generate disproportionate support load—suggests need for dedicated channel QA or integration testing framework.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---:|:---|:---|
| 🔴 **Critical** | [#1072](https://github.com/agentscope-ai/CoPaw/issues/1072) QQ missing in v0.0.6 | **CLOSED** | Merged | WebUI missing QQ Bot config—regression in desktop release |
| 🔴 **Critical** | [#1087](https://github.com/agentscope-ai/CoPaw/issues/1087) Mac M4 "Answers have stopped" | **CLOSED** | Merged | Desktop app completely non-functional on Apple Silicon |
| 🟡 **High** | [#981](https://github.com/agentscope-ai/CoPaw/issues/981) Feishu/QQ file sending | OPEN | None | File attachment API inconsistency across channels |
| 🟡 **High** | [#510](https://github.com/agentscope-ai/CoPaw/issues/510) DingTalk token overflow | CLOSED | Unknown | Context length handling needs architectural fix |
| 🟡 **High** | [#892](https://github.com/agentscope-ai/CoPaw/issues/892) Conversation termination phrases | OPEN | None | "我知道了" triggers premature session end—NLP intent detection issue |
| 🟡 **High** | [#982](https://github.com/agentscope-ai/CoPaw/issues/982) Dialog state loss on navigation | OPEN | None | UX: leaving settings during generation corrupts conversation |
| 🟢 **Medium** | [#372](https://github.com/agentscope-ai/CoPaw/issues/372) Config auto-rewrite blocking LLM | OPEN | None | Configuration persistence bug with local models |
| 🟢 **Medium** | [#282](https://github.com/agentscope-ai/CoPaw/issues/282) pptxgenjs RemoteProtocolError | OPEN | None | External tool HTTP handling fragility |
| 🟢 **Medium** | [#619](https://github.com/agentscope-ai/CoPaw/issues/619) Feishu paste-as-post image bug | OPEN | None | Rich content parsing inconsistency |

**Stability Assessment**: Desktop release introduced platform-specific regressions (Mac M4, QQ channel) now patched. Core channel integrations remain fragile—file handling and context management are recurring themes.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **Enterprise WeChat (企业微信) channel** | [#1032](https://github.com/agentscope-ai/CoPaw/issues/1032) | **High** | Explicit user demand + API availability mentioned; follows pattern of recent channel additions |
| **Model completion system feedback** | [#978](https://github.com/agentscope-ai/CoPaw/issues/978) | **High** | Simple UX improvement with clear use case (async channel visibility) |
| **Vector-based ReMe memory** | [#418](https://github.com/agentscope-ai/CoPaw/issues/418) | Medium | Academic interest; may align with roadmap memory improvements |
| **Plugin system (OpenClaw-style)** | [#731](https://github.com/agentscope-ai/CoPaw/issues/731) | Medium | Explicitly on [roadmap #430](https://github.com/agentscope-ai/CoPaw/issues/430) as "Seeking Contributors" |
| **Docker image size reduction** | [#1041](https://github.com/agentscope-ai/CoPaw/issues/1041) | Medium | Technical debt; competitor comparison (OpenClaw: 2.36GB vs CoPaw: 3GB) |
| **Linux AppImage** | — | **Shipped** | [PR #1084](https://github.com/agentscope-ai/CoPaw/pull/1084) active |

**Roadmap Reference**: [Official Roadmap #430](https://github.com/agentscope-ai/CoPaw/issues/430) highlights memory system, multi-agent orchestration, and plugin marketplace as active areas.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Intensity |
|:---|:---|:---:|
| **Channel-specific quirks** | Feishu file sending, DingTalk token limits, QQ config missing | 🔴 High |
| **Configuration fragility** | Docker restarts wipe config [#990](https://github.com/agentscope-ai/CoPaw/issues/990), auto-rewrite bugs [#372](https://github.com/agentscope-ai/CoPaw/issues/372) | 🟡 Medium |
| **Desktop app polish** | Mac M4 crash, copy button broken [#965](https://github.com/agentscope-ai/CoPaw/issues/965), IME handling [#974](https://github.com/agentscope-ai/CoPaw/issues/974) | 🟡 Medium |
| **Model integration edge cases** | OpenAI-compatible JSON format [#1022](https://github.com/agentscope-ai/CoPaw/issues/1022), local GGUF support [#1011](https://github.com/agentscope-ai/CoPaw/issues/1011) | 🟡 Medium |

### Positive Signals
- **Desktop installers** well-received for eliminating Docker dependency
- **First-time contributor experience** healthy (6 new contributors in 24h)
- **Responsive maintainers**: Same-day fixes for v0.0.6 regressions

### Use Cases Emerging
- **Enterprise automation**: Cron jobs, system monitoring queries (#1034 overthinking simple queries)
- **Multi-channel deployment**: Users running same agent across Feishu/DingTalk/QQ simultaneously
- **Local model preference**: Ollama, LM Studio, Qwen GGUF integrations

---

## 8. Backlog Watch

| Issue/PR | Age | Status | Risk | Action Needed |
|:---|:---:|:---|:---|:---|
| [#419](https://github.com/agentscope-ai/CoPaw/pull/419) OpenAI wire_api + custom headers | 7 days | OPEN, review fixes pending | **Staleness** | Final maintainer review |
| [#430](https://github.com/agentscope-ai/CoPaw/issues/430) Official Roadmap | 7 days | OPEN | — | Community coordination hub |
| [#372](https://github.com/agentscope-ai/CoPaw/issues/372) Config auto-rewrite | 8 days | OPEN, 6 comments | **User blocking** | Reproduction + fix assignment |
| [#282](https://github.com/agentscope-ai/CoPaw/issues/282) pptxgenjs crash | 8 days | OPEN, 5 comments | **Tool reliability** | External dependency handling |
| [#809](https://github.com/agentscope-ai/CoPaw/issues/809) News skill failure | 4 days | OPEN, 2 comments | Skill system | Logs provided, needs triage |

**Maintainer Attention Recommended**: Config auto-rewrite bug [#372](https://github.com/agentscope-ai/CoPaw/issues/372) blocks local LLM users—high-impact fix opportunity.

---

*Digest generated from 100 GitHub items (50 issues, 50 PRs) on 2026-03-10. All links verified against github.com/agentscope-ai/CoPaw.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-10

## 1. Today's Overview

ZeptoClaw shows **moderate development activity** with 2 new issues and 3 open PRs in the last 24 hours, though no releases or merged contributions. The project appears to be in an **active development phase with unmerged feature work** — notably around credential management automation and developer tooling. No community engagement (comments, reactions) on any items suggests either a small contributor base or recently opened items awaiting review. The maintainer (@qhkm) is actively authoring features while community PRs from @taqtiqa-mark focus on code quality and skill system improvements.

---

## 2. Releases

**No new releases.** Latest release status unchanged.

---

## 3. Project Progress

**No PRs merged or closed today.** All 3 PRs remain open:

| PR | Author | Status | Description |
|:---|:---|:---|:---|
| [#290](https://github.com/qhkm/zeptoclaw/pull/290) | @qhkm | Open | Claude CLI credential auto-import implementation |
| [#287](https://github.com/qhkm/zeptoclaw/pull/287) | @taqtiqa-mark | Open | Dev environment standardization (pre-PR checks) |
| [#286](https://github.com/qhkm/zeptoclaw/pull/286) | @taqtiqa-mark | Open | SKILL.md presence check for GitHub skill search quality |

**Blocked progress:** The WhatsApp Web feature remains stalled due to a missing external dependency (see [#288](https://github.com/qhkm/zeptoclaw/issues/288)).

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#288](https://github.com/qhkm/zeptoclaw/issues/288) — Native WhatsApp Web support | 0 👍, 0 comments | **Critical infrastructure gap.** The `whatsmeow-bridge` binary is referenced but unreleased; `src/deps/fetcher.rs` explicitly returns `"Binary download not yet implemented"`. This blocks a documented channel integration. |
| [#289](https://github.com/qhkm/zeptoclaw/issues/289) / [#290](https://github.com/qhkm/zeptoclaw/pull/290) — Claude CLI credential import | 0 👍, 0 comments | **Developer experience priority.** Zero-config credential fallback reduces friction for Anthropic API users, though ToS warning requirement suggests legal caution. |

**Underlying needs:** 
- **Dependency management reliability** — external binary distribution must be solved
- **Onboarding friction reduction** — credential automation indicates target users expect "it just works" setup

---

## 5. Bugs & Stability

| Severity | Item | Details | Fix Status |
|:---|:---|:---|:---|
| **High** | [#288](https://github.com/qhkm/zeptoclaw/issues/288) | WhatsApp Web channel **non-functional** — dependency fetcher unimplemented | No fix PR; requires `qhkm/whatsmeow-rs` release infrastructure |
| **Medium** | — | No runtime crashes or regressions reported today | — |

**Stability assessment:** Core functionality appears stable; issue is **missing feature completion** rather than broken existing code.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| Claude CLI credential auto-import | [#290](https://github.com/qhkm/zeptoclaw/pull/290) | **High** | PR open by maintainer; complete implementation with tests |
| Dev tooling standardization | [#287](https://github.com/qhkm/zeptoclaw/pull/287) | **Medium** | Quality-of-life for contributors; non-blocking |
| SKILL.md quality scoring | [#286](https://github.com/qhkm/zeptoclaw/pull/286) | **Medium** | Enhances skill marketplace reliability |
| Native WhatsApp Web | [#288](https://github.com/qhkm/zeptoclaw/issues/288) | **Low** | Blocked by external release infrastructure |

**Emerging pattern:** Focus on **credential ergonomics** and **skill ecosystem quality** — positioning ZeptoClaw as a polished multi-channel AI agent platform.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Segment |
|:---|:---|:---|
| **Setup friction** | Credential import automation requested | Anthropic/Claude CLI users |
| **Broken/outdated integrations** | WhatsApp stub non-functional | Multi-channel deployment users |
| **Contributor experience gaps** | Dev tooling PR addresses inconsistent local checks | Open-source contributors |

**Satisfaction signals:** Proactive credential handling suggests thoughtful UX design.
**Dissatisfaction signals:** Unimplemented dependency fetcher indicates **documentation ahead of implementation** — risk of user trust erosion.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#288](https://github.com/qhkm/zeptoclaw/issues/288) — WhatsApp Web | 1 day | **Escalating** | Maintainer decision: either implement `whatsmeow-rs` releases or remove stub |
| All PRs | 1-2 days | Low | Standard review queue |

**No long-unanswered items** — project appears responsive. Watch [#288](https://github.com/qhkm/zeptoclaw/issues/288) for scope decision (implement vs. deprecate WhatsApp channel).

---

*Digest generated from GitHub activity 2026-03-09 to 2026-03-10*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-03-10

## 1. Today's Overview

EasyClaw shows **moderate community activity** with 4 issues processed in the last 24 hours and one patch release (v1.6.3). The project appears to be a **desktop AI assistant application** with macOS distribution, actively addressing platform-specific installation barriers. No code contributions via PRs were recorded today, suggesting maintenance mode or core-team-only development. The single open issue involves **multimodal input (image) functionality**, indicating ongoing refinement of vision capabilities. Overall project health appears stable with responsive issue closure (3/4 resolved) but limited external contributor engagement.

---

## 2. Releases

### v1.6.3 — EasyClaw v1.6.3
| Attribute | Detail |
|-----------|--------|
| **Type** | Patch release |
| **Focus** | macOS distribution & installation experience |
| **Key Addition** | Documented Gatekeeper bypass instructions for unsigned app warnings |

**Notable**: The release notes are truncated but reveal the project distributes **unsigned macOS binaries**, requiring users to run `xattr -cr` or similar workarounds. No breaking changes or migration notes identified. This suggests the project lacks Apple Developer signing, which may limit mainstream adoption.

---

## 3. Project Progress

**No PR activity today** — 0 merged, 0 closed, 0 new.

Progress appears driven through **direct commits** rather than community PRs. Three issues were closed without associated PR references, indicating maintainer-direct fixes or documentation responses.

---

## 4. Community Hot Topics

| Rank | Issue | Activity | Analysis |
|:---:|---|:---:|---|
| 1 | [#14 — "这个跟复盛那个easyclaw那个官网有关系吗"](https://github.com/gaoyangz77/easyclaw/issues/14) | 2 comments, CLOSED | **Branding confusion**: User inquired about relationship to "复盛" (Fusheng) company's EasyClaw website. Closed with clarification. Signals potential trademark/brand collision risk. |
| 2 | [#12 — "社群交流"](https://github.com/gaoyangz77/easyclaw/issues/12) | 2 comments, CLOSED | **Community building request**: User praised architecture alignment with expectations and requested technical discussion group. Closed with WeChat QR code response. Indicates strong user affinity but fragmented community infrastructure. |
| 3 | [#13 — "在对话chat选择图片，但是模型并没有接受到图片"](https://github.com/gaoyangz77/easyclaw/issues/13) | 2 comments, **OPEN** | **Active multimodal bug**: Vision input failing in chat interface despite working in Codex mode. User provided screenshots. Critical functionality gap. |

**Underlying Needs**: Users seek (a) reliable multimodal AI interaction, (b) community/technical support channels, and (c) clear project identity differentiation from commercial同名 products.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Details |
|:---:|---|:---:|---|
| **High** | [#13 — Image upload not reaching model](https://github.com/gaoyangz77/easyclaw/issues/13) | **OPEN, unassigned** | Vision-in-chat broken; works in Codex. Regression or implementation gap. **No fix PR.** |
| Medium | [#8 — macOS 26.3 in-app update failure](https://github.com/gaoyangz77/easyclaw/issues/8) | CLOSED | Auto-updater broken on macOS; closed 2026-03-09. Fix unknown. |
| Low | Gatekeeper warnings | Mitigated | v1.6.3 adds documentation, not code fix. |

**Stability Assessment**: Core multimodal functionality has active regression. macOS distribution pipeline remains fragile.

---

## 6. Feature Requests & Roadmap Signals

**Explicit Requests:**
- Community chat/technical exchange platform ([#12](https://github.com/gaoyangz77/easyclaw/issues/12)) — *fulfilled via external WeChat group*

**Inferred from Issues:**
- **Signed macOS binaries** — recurring pain point, likely next infrastructure priority
- **Robust vision pipeline** — [#13](https://github.com/gaoyangz77/easyclaw/issues/13) suggests chat vs. Codex implementation divergence needs unification
- **In-app updater reliability** — [#8](https://github.com/gaoyangz77/easyclaw/issues/8) indicates electron-builder or similar framework issues

**Next Version Prediction**: v1.6.4 likely to address vision input bug; v1.7.0 may introduce code signing or updater overhaul.

---

## 7. User Feedback Summary

| Dimension | Evidence | Sentiment |
|-----------|----------|-----------|
| **Architecture praise** | "项目架构非常符合我预期的架构" ([#12](https://github.com/gaoyangz77/easyclaw/issues/12)) | ✅ Strong positive |
| **Platform friction** | Gatekeeper blocks, update failures ([#8](https://github.com/gaoyangz77/easyclaw/issues/8), release notes) | ❌ Frustrated |
| **Feature expectation gap** | Vision broken in primary chat flow ([#13](https://github.com/gaoyangz77/easyclaw/issues/13)) | ❌ Disappointed |
| **Identity confusion** | Commercial brand collision ([#14](https://github.com/gaoyangz77/easyclaw/issues/14)) | ⚠️ Confused |

**Core Use Case**: Developers seeking Claude/Codex-like AI assistant with local desktop experience, particularly on macOS.

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|-------|:---:|------|-------------|
| [#13 — Vision input failure](https://github.com/gaoyangz77/easyclaw/issues/13) | 1 day | **High** — blocks multimodal workflow | Maintainer acknowledgment + reproduction |
| *None older* | — | — | Project maintains <5 day response time |

**Assessment**: No chronic backlog. Healthy issue triage velocity. Risk concentrated in single unassigned high-severity bug.

---

*Digest generated from github.com/gaoyangz77/easyclaw data as of 2026-03-10*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*