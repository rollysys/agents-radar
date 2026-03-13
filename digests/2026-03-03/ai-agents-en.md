# OpenClaw Ecosystem Digest 2026-03-03

> Issues: 500 | PRs: 500 | Projects covered: 11 | Generated: 2026-03-03 07:39 UTC

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

# OpenClaw Project Digest — 2026-03-03

---

## 1. Today's Overview

OpenClaw shows **exceptionally high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature, fast-moving project with substantial community engagement. The 317 open PRs against 183 merged/closed suggests a potential backlog forming, though the 2 fresh releases (v2026.3.2 and beta) demonstrate active shipping. The project appears focused on **enterprise-grade reliability** with major work on secrets management, multi-channel stability, and gateway infrastructure. Security hardening and provider expansion (Alibaba Bailian, MiniMax TTS, OpenRouter) signal commercial adoption growth.

---

## 2. Releases

### v2026.3.2 (Stable)
| Attribute | Detail |
|-----------|--------|
| **Version** | [v2026.3.2](https://github.com/openclaw/openclaw/releases/tag/v2026.3.2) |
| **Type** | Stable release |
| **Key Change** | **Secrets/SecretRef coverage expansion** — 64 target surfaces now support `SecretRef` |

**Breaking Changes & Migration:**
- **Fail-fast behavior**: Unresolved `SecretRef` references now fail immediately rather than silently falling back
- Runtime collectors, `openclaw secrets` CLI flows (plan/apply/audit), and onboarding SecretInput UX all migrated
- Users with partial SecretRef configurations should audit with `openclaw secrets audit` before upgrading

### v2026.3.2-beta.1
Identical changelog to stable — beta channel for early adopters testing the SecretRef hardening.

---

## 3. Project Progress

### Merged/Closed PRs Today (183 total)

| PR | Focus Area | Impact |
|----|-----------|--------|
| [#32714](https://github.com/openclaw/openclaw/pull/32714) | **Critical fix**: `sendMedia` now truly optional for text-only channels | Unblocks 15+ channel plugins (Discord, Signal, Slack, etc.) that only implement `sendText` |
| [#32715](https://github.com/openclaw/openclaw/pull/32715) | Gateway health state preservation | Eliminates stale channel status in `openclaw health --json` |
| [#32655](https://github.com/openclaw/openclaw/pull/32655) | Gateway version accuracy fix | `Gateway self` version now sourced from runtime `VERSION` |
| [#32684](https://github.com/openclaw/openclaw/pull/32684) | Web panel version sync | Post-update version display fixed |
| [#31313](https://github.com/openclaw/openclaw/pull/31313) | **Major**: `message:sent` hooks for all major channels | Enables plugin ecosystem for delivery confirmation |

**Infrastructure Themes:**
- Gateway reliability (version reporting, health monitoring, hot-reload)
- Channel plugin API hardening
- Developer experience (plugin SDK exports in [#32497](https://github.com/openclaw/openclaw/pull/32497))

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | 👍 | Status | Analysis |
|-------|----------|-----|--------|----------|
| [#5030](https://github.com/openclaw/openclaw/issues/5030) "no output" | 39 | 9 | **CLOSED** | Classic onboarding failure — installation without proper auth setup leads to silent failures. **Need**: Better first-run diagnostics |
| [#26534](https://github.com/openclaw/openclaw/issues/26534) "Add DingTalk as first-install channel" | 26 | 10 | **OPEN** | Enterprise China market demand. DingTalk implemented but not exposed in onboarding wizard. **Need**: Channel discovery UX redesign |
| [#2280](https://github.com/openclaw/openclaw/issues/2280) "Azure OpenAI as model provider" | 23 | 23 | **CLOSED** | Enterprise Azure adoption requirement. High vote count shows cloud-provider parity is critical |
| [#11359](https://github.com/openclaw/openclaw/issues/11359) "Telegram billing error vs Web UI success" | 20 | 9 | **CLOSED** | Channel-specific error handling inconsistency. Claude Max subscription confusion |
| [#23538](https://github.com/openclaw/openclaw/issues/23538) "Anthropic 401 Invalid bearer token" | 17 | 0 | **OPEN** | **Active regression** — setup-token auth broken in 2026.2.21-2, reproducible in clean profile |

### Underlying Community Needs

1. **Enterprise onboarding**: Multiple issues around first-run configuration (DingTalk, Azure OpenAI, auth flows)
2. **Channel parity**: Web UI vs. Telegram/Slack behavior divergence
3. **Observability**: "No output" bugs indicate insufficient visibility into failure modes

---

## 5. Bugs & Stability

### Critical/High Severity

| Issue | Severity | Status | Fix PR | Description |
|-------|----------|--------|--------|-------------|
| [#23538](https://github.com/openclaw/openclaw/issues/23538) Anthropic 401 auth | **HIGH** | OPEN | None identified | Setup-token auth regression; blocks Anthropic usage |
| [#30484](https://github.com/openclaw/openclaw/issues/30484) Claude Max 402→false billing warning | **HIGH** | OPEN | None | Rate limits misclassified as billing errors |
| [#14593](https://github.com/openclaw/openclaw/issues/14593) Docker skill install fails (brew) | **MEDIUM** | OPEN | None | Container image missing brew; blocks skill installation |
| [#21001](https://github.com/openclaw/openclaw/issues/21001) Telegram DM reactions not surfaced | **MEDIUM** | OPEN | None | `reactionNotifications=own` broken for DMs |

### Fixed Today (in releases or PRs)

| Issue | Fix |
|-------|-----|
| [#5030](https://github.com/openclaw/openclaw/issues/5030) "no output" | Closed — likely resolved by SecretRef fail-fast improvements |
| [#11359](https://github.com/openclaw/openclaw/issues/11359) Telegram billing error | Closed |
| [#18974](https://github.com/openclaw/openclaw/issues/18974) Telegram DM topics | Closed — Telegram Bot API 9.3 compatibility |
| [#12502](https://github.com/openclaw/openclaw/issues/12502) Cron jobs not firing | Closed |
| [#16156](https://github.com/openclaw/openclaw/issues/16156) Recurring cron never executes | Closed |

### Regression Patterns
- **Telegram**: Multiple topic/routing fixes suggest API churn or recent refactoring instability
- **Anthropic auth**: OAuth vs. token auth confusion recurring theme

---

## 6. Feature Requests & Roadmap Signals

### In-Progress (PRs Open)

| Feature | PR | Likelihood in Next Version |
|---------|-----|---------------------------|
| **Alibaba Cloud Bailian provider** | [#32368](https://github.com/openclaw/openclaw/pull/32368) | HIGH — complete provider implementation |
| **MiniMax TTS provider** | [#27880](https://github.com/openclaw/openclaw/pull/27880) | HIGH — 300+ voices, multilingual |
| **OpenRouter audio/video/embedding** | [#32127](https://github.com/openclaw/openclaw/pull/32127) | HIGH — reduces API key fragmentation |
| **IMAP hook (non-Gmail email)** | [#32673](https://github.com/openclaw/openclaw/pull/32673) | MEDIUM — using `himalaya` Rust CLI |
| **Feishu document comment replies** | [#32709](https://github.com/openclaw/openclaw/pull/32709) | MEDIUM — WIP status |
| **Soul wizard Mini App integration** | [#25445](https://github.com/openclaw/openclaw/pull/25445) | MEDIUM — Telegram Mini App ecosystem |

### User-Requested (Issues)

| Request | Issue | Signal Strength |
|---------|-------|---------------|
| **Vision/multimodal support** | [#28744](https://github.com/openclaw/openclaw/issues/28744) | STRONG — Chinese enterprise demand, MiniMax-Vision mentioned |
| **DingTalk first-class onboarding** | [#26534](https://github.com/openclaw/openclaw/issues/26534) | STRONG — 10 👍, enterprise blocker |
| **GitHub Copilot Claude Sonnet 4.6** | [#20091](https://github.com/openclaw/openclaw/issues/20091) | MEDIUM — provider catalog maintenance |
| **QMD MCP server mode** | [#9581](https://github.com/openclaw/openclaw/issues/9581) | MEDIUM — performance optimization (2.1GB model cold load) |

**Prediction**: v2026.3.3 or v2026.4.0 will likely ship Bailian, MiniMax TTS, and OpenRouter expansions given PR maturity. Vision support may follow quickly given [#28744](https://github.com/openclaw/openclaw/issues/28744) activity.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Authentication fragility** | [#23538](https://github.com/openclaw/openclaw/issues/23538), [#19769](https://github.com/openclaw/openclaw/issues/19769), [#17328](https://github.com/openclaw/openclaw/issues/17328) | HIGH — multiple providers, token rotation, OAuth vs. API key confusion |
| **Silent failures / "no output"** | [#5030](https://github.com/openclaw/openclaw/issues/5030), [#21091](https://github.com/openclaw/openclaw/issues/21091) | HIGH — debugging difficulty |
| **Docker/container gaps** | [#14593](https://github.com/openclaw/openclaw/issues/14593), [#7139](https://github.com/openclaw/openclaw/issues/7139) | MEDIUM — skills assume host environment |
| **Security defaults too permissive** | [#7139](https://github.com/openclaw/openclaw/issues/7139) "zero isolation" | MEDIUM — sandboxing concerns |

### Positive Signals

- **Provider diversity investment**: Users actively requesting and implementing regional providers (Bailian, Z.ai, MiniMax)
- **Enterprise channel demand**: DingTalk, Feishu document comments, Slack enterprise features
- **Mobile investment**: iOS TestFlight requests ([#9121](https://github.com/openclaw/openclaw/issues/9121)), embedded chat fixes

### Use Case Evolution
- From personal assistant → **team/enterprise agent platform**
- From text-only → **multimodal (vision, voice, documents)**
- From single-channel → **omnichannel with unified context**

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Blocker | Action Needed |
|-------|-----|---------|---------------|
| [#23538](https://github.com/openclaw/openclaw/issues/23538) Anthropic 401 auth | 9 days | **ACTIVE REGRESSION** | Reproduce, identify 2026.2.21-2 regression cause |
| [#30484](https://github.com/openclaw/openclaw/issues/30484) Claude Max 402 handling | 2 days | User experience | Design rate-limit vs. billing-error distinction |
| [#28744](https://github.com/openclaw/openclaw/issues/28744) Vision support | 4 days | Feature gap | Architecture decision: base64 vs. URL, model capability detection |
| [#9581](https://github.com/openclaw/openclaw/issues/9581) QMD MCP server mode | 26 days | Performance | Evaluate PR feasibility vs. subprocess model |
| [#7139](https://github.com/openclaw/openclaw/issues/7139) Security hardening (zero isolation) | 29 days | **SECURITY** | RFC response, sandbox roadmap |

### PRs At Risk of Staleness

| PR | Age | Risk | Action |
|----|-----|------|--------|
| [#25445](https://github.com/openclaw/openclaw/pull/25445) Soul wizard Mini App | 7 days | Medium — "stale" label | Review Telegram Mini App strategy |
| [#27880](https://github.com/openclaw/openclaw/pull/27880) MiniMax TTS | 5 days | Low — active | Final review, merge |
| [#32673](https://github.com/openclaw/openclaw/pull/32673) IMAP hook | 0 days | Low — fresh | Architecture review (Rust dependency) |

---

**Digest compiled from:** 500 issues, 500 PRs, 2 releases  
**Project health indicators:** ⬆️ High velocity | ⚠️ Growing PR backlog | 🔒 Security attention needed | 🌏 Strong APAC enterprise demand

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Report — 2026-03-03

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape is experiencing **accelerated fragmentation and specialization**, with 10+ actively maintained projects targeting distinct use cases from lightweight personal assistants to enterprise-grade agent platforms. **OpenClaw remains the clear reference implementation** with 10x the activity of nearest competitors, while regional players (NanoBot, LobsterAI, CoPaw) capture China-specific enterprise demand. A **convergence around Model Context Protocol (MCP)** is underway across 6+ projects, signaling industry maturation. However, **reliability gaps persist**: every major project reports critical execution, memory, or configuration stability issues, indicating the ecosystem remains pre-production for mission-critical deployments.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Trend |
|:---|:---:|:---:|:---:|:---:|:---:|
| **OpenClaw** | 500 | 500 | v2026.3.2 + beta | ⬆️ 9/10 | High velocity, backlog forming |
| **PicoClaw** | 100 | 237 | None (CI prep) | 🟡 6.5/10 | Refactor risk, provider debt |
| **NanoBot** | 25 | 64 | None | 🟡 7/10 | Stable iteration, LiteLLM tension |
| **ZeroClaw** | 36 | 50 | None | 🟡 6/10 | Pre-1.0 instability, Windows focus |
| **NanoClaw** | 16 | 32 | None | 🟡 7/10 | Runtime flexibility push |
| **IronClaw** | 18 | 40 | v0.13.1 | 🟡 7/10 | WASM maturity, UX gaps |
| **LobsterAI** | 28 | 18 | **v0.1.24** | 🟡 6.5/10 | Windows debt, AI quality concerns |
| **CoPaw** | 50 | 50 | **v0.0.4** + 2 betas | 🟡 6/10 | Execution reliability crisis |
| **TinyClaw** | — | 9 | **v0.0.8** | 🟢 7.5/10 | Tight focus, cost sensitivity |
| **ZeptoClaw** | 9 | 3 | None | 🟢 7/10 | Safety-first architecture |
| **EasyClaw** | 4 | 0 | **v1.5.15** | 🟡 6/10 | Reactive maintenance |

*Health scores derived from: velocity/merge ratio, critical bug count, release cadence, community responsiveness*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Nearest Competitor |
|:---|:---|:---|
| **Scale** | 1000 events/day | PicoClaw: 337, NanoBot: 89 |
| **Enterprise features** | Secrets management (64 surfaces), multi-channel stability | IronClaw: WASM tools, CoPaw: Telegram |
| **Provider ecosystem** | 15+ providers including Alibaba Bailian, MiniMax TTS | NanoBot: LiteLLM abstraction |
| **Release engineering** | Daily stable/beta cadence | Most: irregular or none |
| **Security posture** | Fail-fast SecretRef, audit tooling | ZeptoClaw: aspirational (taint tracking) |

### Technical Approach Differences
- **OpenClaw**: Monolithic, batteries-included, gateway-centric architecture with enterprise hardening
- **IronClaw**: Rust/WASM-first, sandboxed tools, near.ai ecosystem integration
- **PicoClaw**: 3-phase runtime loop (Analyse→Execute→Reflect), self-learning CoT
- **ZeptoClaw**: Safety-by-design (taint tracking, Merkle audit trails, formal verification aspirations)
- **NanoBot/NanoClaw**: Claude Code wrapper/extension model vs. standalone agent

### Community Size
OpenClaw's 500 issues/PRs in 24 hours exceeds **the combined total of all other tracked projects** (~850 events). Its issue #5030 ("no output") alone (39 comments) rivals entire project engagement elsewhere. However, this scale creates **review bottleneck risk**: 317 open PRs vs. 183 merged suggests maintainer bandwidth constraints.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **MCP (Model Context Protocol)** | OpenClaw, IronClaw, LobsterAI, PicoClaw, ZeptoClaw, TinyClaw | Client + server mode; session lifecycle stability (#414 CoPaw, #999 PicoClaw); tool discovery |
| **Multi-modal/vision** | OpenClaw, PicoClaw, NanoClaw, LobsterAI | Base64 vs. URL handling; model capability detection; Gemini 3 compatibility (#79, #161 PicoClaw) |
| **Enterprise messaging** | **All projects** | DingTalk (OpenClaw #26534, CoPaw, ZeptoClaw), Feishu/Lark (6 projects), Telegram (universal), WhatsApp (4 projects) |
| **Local/edge deployment** | PicoClaw, ZeroClaw, NanoBot, LobsterAI | Ollama integration (#109 PicoClaw), LM Studio (#28), Android (#190), Raspberry Pi (#2600 ZeroClaw) |
| **Reasoning/thinking mode** | CoPaw, PicoClaw, OpenClaw | Kimi 2.5/Qwen 400 errors (#433, #388 CoPaw); `thought_signature` handling (#79 PicoClaw) |
| **Memory/persistence** | LobsterAI (#186), OpenClaw, IronClaw, TinyClaw | Context compression (#227 LobsterAI), RAG quality, Docker volume survival |
| **Sandboxing/security** | ZeptoClaw (aspirational), IronClaw (WASM), TinyClaw (#154), OpenClaw (#7139) | Zero isolation concerns, plugin hardening, audit trails |

---

## 5. Differentiation Analysis

| Project | Core Differentiation | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Enterprise reliability, omnichannel gateway | Platform teams, SaaS builders | TypeScript/Node, gateway pattern, SecretRef system |
| **IronClaw** | WASM sandboxed tools, Rust performance | Security-conscious developers, near.ai ecosystem | Rust, WIT bindgen, registry-based tools |
| **PicoClaw** | 3-phase reasoning, self-learning CoT, "small but complete" | Technical power users, edge deployers | Go, Analyse→Execute→Reflect loop |
| **ZeptoClaw** | Formal safety (taint tracking, audit trails), OpenAI compatibility | Regulated enterprises, compliance teams | Rust, type-system safety, Merkle proofs |
| **NanoBot** | Lightweight, LiteLLM abstraction, rapid setup | Individual developers, first-time users | Python, LiteLLM, minimal config |
| **NanoClaw** | Claude Code universalization, multi-runtime | Claude Code power users, multi-model teams | TypeScript, pluggable runtime architecture |
| **LobsterAI** | NetEase ecosystem, IM-first cowork | China enterprise, NetEase users | Electron, Bee/NIM integration |
| **CoPaw** | AgentScope heritage, rapid channel expansion | China SMB, multi-platform needs | Python, AgentScope lineage |
| **TinyClaw** | Team operations, cost optimization | Small teams, Claude quota-constrained users | TypeScript, team management primitives |
| **EasyClaw** | Simplicity, "most suitable" UX | Casual personal assistant users | Unknown (no PR transparency) |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Risk/Reward)
| Project | Velocity | Risk Factors |
|:---|:---|:---|
| **PicoClaw** | 237 PRs/day | 95% issue backlog, provider compatibility debt, refactor instability |
| **OpenClaw** | 1000 events/day | PR review bottleneck (63% open), growing technical debt |
| **CoPaw** | 100 items/day | Execution reliability crisis, "half-finished" perception |

### Tier 2: Stable Growth
| Project | Characteristics |
|:---|:---|
| **NanoBot** | Consistent ~90 events/day, LiteLLM dependency tension, cron reliability focus |
| **IronClaw** | Sustained @henrypark133 output, WASM maturation, UX gap closing |
| **ZeroClaw** | Pre-1.0 stabilization, Windows focus, 6 S0/S1 bugs blocking release |

### Tier 3: Controlled/Early Stage
| Project | Status |
|:---|:---|
| **TinyClaw** | Tight scope, responsive maintainer, provider expansion backlog (#124) |
| **ZeptoClaw** | Single-maintainer, ambitious safety architecture, needs community building |
| **NanoClaw** | Multi-runtime pivot, production reliability issues (OOM, scheduler race) |
| **LobsterAI** | Windows debt accumulation, AI quality below OpenClaw baseline |
| **EasyClaw** | Reactive maintenance, no PR transparency, configuration fragility |

---

## 7. Trend Signals for AI Agent Developers

### 1. **MCP as De Facto Standard**
Six projects implementing MCP client/server modes indicates **protocol consolidation**. Developers should prioritize MCP compatibility over custom tool interfaces. *Risk*: Session lifecycle stability remains unproven at scale (#414 CoPaw, #999 PicoClaw).

### 2. **Chinese Model Ecosystem Friction**
Universal reports of **Kimi/Qwen reasoning mode incompatibilities** (#433 CoPaw, #79 PicoClaw) signal API divergence from OpenAI/Anthropic patterns. Developers targeting China must abstract message format handling.

### 3. **Cost Sensitivity Driving Architecture**
- TinyClaw #124: Explicit Claude quota exhaustion → multi-provider demand
- NanoClaw #663: Strategic priority to reduce Claude dependency
- ZeptoClaw #218: OpenAI-compatible API for drop-in replacement

**Implication**: Single-provider dependency is now a **competitive liability**.

### 4. **Execution Reliability as Differentiator**
"Agent promises but doesn't execute" (#434 CoPaw, "lazy execution" NanoBot #1459) is the **dominant user complaint**. Projects solving this (PicoClaw's 3-phase loop, ZeptoClaw's outcome-aware blocking) may capture enterprise trust.

### 5. **Sandboxing: From Feature to Requirement**
- Security PRs open in 4 projects simultaneously
- Zero isolation concerns (#7139 OpenClaw, #1448 NanoBot)
- ZeptoClaw's taint tracking represents **next-generation positioning**

**Implication**: 2026 deployments will require verifiable sandbox guarantees.

### 6. **Platform Parity Debt**
Windows-specific bugs dominate LobsterAI, ZeroClaw, NanoClaw. **Linux-first development with Windows as second-class** is the implicit norm, creating opportunity for Windows-native solutions.

---

*Report compiled from 1,847 GitHub events across 10 projects. Data current as of 2026-03-03.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-03

---

## 1. Today's Overview

NanoBot shows **high community velocity** with 89 total updates in 24 hours (25 issues, 64 PRs), indicating an active development phase. The project is experiencing growing pains typical of rapid adoption: integration issues with Chinese platforms (QQ, DingTalk), LLM provider compatibility challenges, and architectural debates around the core dependency stack. No new release was cut today, suggesting maintainers are accumulating changes for a larger version bump. The contributor base appears to be expanding with multiple first-time PR authors and documentation improvements.

---

## 2. Releases

**No new releases** (v0.1.4.post3 remains current).

---

## 3. Project Progress

### Merged/Closed PRs Today (17 total, key items):

| PR | Description | Impact |
|:---|:---|:---|
| [#1458](https://github.com/HKUDS/nanobot/pull/1458) | **fix: prevent cron job from scheduling new jobs (feedback loop)** | Critical stability fix — blocks infinite recursion when cron jobs trigger themselves |
| [#1456](https://github.com/HKUDS/nanobot/pull/1456) | **fix: merge consecutive user messages to prevent API errors** | Resolves `invalid_type` errors with Minimax, DashScope, and other strict APIs |
| [#1452](https://github.com/HKUDS/nanobot/pull/1452) | docs: fix `allowFrom` description for post-v0.1.4.post3 behavior | Security documentation correction — empty `allowFrom` now = deny all |
| [#547](https://github.com/HKUDS/nanobot/pull/547) | feat: Add Tavily Search API Support | New search provider option (1,000 free searches/month, no CC required) |
| [#1307](https://github.com/HKUDS/nanobot/pull/1307) | fix: pass msg_id in QQ C2C reply | Fixes QQ bot permission errors for proactive messages |
| [#1464](https://github.com/HKUDS/nanobot/pull/1464) | Feature/gui input control + bailian provider | GUI enhancement + Alibaba Bailian provider registration |

**Notable advancement**: The cron feedback loop fix (#1458) and consecutive message merge (#1456) address two of the most reported user pain points from recent weeks.

---

## 4. Community Hot Topics

### Most Active Discussions (by engagement):

| Issue/PR | Comments | 👍 | Topic | Underlying Need |
|:---|:---:|:---:|:---|:---|
| [#430](https://github.com/HKUDS/nanobot/issues/430) How to use web_search? | 14 | 0 | **Documentation gap** | Users struggle with discoverability of built-in tools; need clearer onboarding |
| [#222](https://github.com/HKUDS/nanobot/issues/222) Multi agents setup - Supported? | 7 | 5 | **Architecture clarity** | Enterprise users want orchestration patterns; current "multi-agent" is config-only, not true coordination |
| [#161](https://github.com/HKUDS/nanobot/issues/161) Replace LiteLLM with native SDKs | 5 | 8 | **Dependency philosophy** | Power users want reduced bloat, better local model support, and code transparency |
| [#140](https://github.com/HKUDS/nanobot/issues/140) GitHub Copilot providers support | 6 | 4 | **Enterprise IDE integration** | Users want to leverage existing Copilot subscriptions within NanoBot workflow |
| [#1224](https://github.com/HKUDS/nanobot/pull/1224) feat: 引入可选的双层架构 | — | 0 | **Runtime architecture** | Chinese-language proposal for Steering Loop + AgentMessage layering; signals maintainer interest in interruption handling |

**Analysis**: The #161 proposal (8 👍) represents a significant architectural tension — LiteLLM's convenience vs. native SDK control. The high engagement on multi-agent (#222) suggests users are pushing NanoBot beyond its current single-agent design.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical** | [#1441](https://github.com/HKUDS/nanobot/issues/1441) | Cron notification feedback loop (infinite recursion) | **FIXED** by #1458 |
| **🔴 Critical** | [#1304](https://github.com/HKUDS/nanobot/issues/1304) | Can't use codex — execution failures | Open, multiple reports |
| **🟡 High** | [#1401](https://github.com/HKUDS/nanobot/issues/1401) | `TypeError: type 'Choice' is not subscriptable` — crash on agent startup | Open, no fix PR |
| **🟡 High** | [#1022](https://github.com/HKUDS/nanobot/issues/1022) | Long-running tasks stall at "Starting execution now" | Open, 3 👍 — reliability concern |
| **🟡 High** | [#1394](https://github.com/HKUDS/nanobot/issues/1394), [#1396](https://github.com/HKUDS/nanobot/issues/1396) | QQ channel message deduplication and timeout bugs | #1394 closed, #1396 open |
| **🟢 Medium** | [#1414](https://github.com/HKUDS/nanobot/issues/1414), [#1344](https://github.com/HKUDS/nanobot/issues/1344) | Minimax/DashScope API `invalid_type` errors | **FIXED** by #1456 |
| **🟢 Medium** | [#1462](https://github.com/HKUDS/nanobot/issues/1462) | Telegram proxy configuration fails | Closed (user config issue) |

**Regression watch**: The codex execution failures (#1304, #1459) appear related — NanoBot's "lazy" execution where it promises but doesn't complete actions. This may indicate a prompt engineering or tool-calling regression with newer OpenAI models.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **Unified daemon gateway** | [#1461](https://github.com/HKUDS/nanobot/issues/1461) | **High** | Fresh proposal with detailed architecture; aligns with #1224 PR |
| **HISTORY.md size limits & noise reduction** | [#1449](https://github.com/HKUDS/nanobot/issues/1449), [#1454](https://github.com/HKUDS/nanobot/pull/1454) | **High** | PR #1454 already implements; community pain point |
| **Secure sandboxing for skills** | [#1448](https://github.com/HKUDS/nanobot/issues/1448) | Medium | Security-conscious request; WASM/containers would be significant scope increase |
| **LangFuse tracing integration** | [#1442](https://github.com/HKUDS/nanobot/issues/1442) | Medium | Observability trend; LiteLLM native support makes this low-effort |
| **Xiaomi speaker integration** | [#1411](https://github.com/HKUDS/nanobot/issues/1411) | Low | IoT expansion; author volunteered to develop |
| **GitHub Copilot provider** | [#140](https://github.com/HKUDS/nanobot/issues/140) | Low | Requires reverse engineering unofficial APIs; legal concerns |

**Predicted v0.1.5 themes**: Daemon mode stabilization, memory/history management, and Telegram/WhatsApp channel polish based on active PR momentum.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes):
- **"Lazy" execution**: "nanobot: I’ll read that file... me: Did you read it? nanobot: I haven’t read it yet" — [#1459](https://github.com/HKUDS/nanobot/issues/1459)
- **Configuration complexity**: Web search, MCP tools, and proxy settings lack discoverability
- **Platform-specific fragility**: QQ, DingTalk, and Telegram each have unique edge cases
- **History noise**: "HISTORY.md grows quickly and contains a lot noisy information" — [#1449](https://github.com/HKUDS/nanobot/issues/1449)

### Positive Signals:
- Active self-help community (users answering each other's questions in #430)
- Willingness to contribute (skill development, channel extensions)
- Appreciation for lightweight design (#1448 cites this as core value)

### Use Case Evolution:
Users are pushing NanoBot from **personal assistant** toward **team automation** (cron jobs, multi-agent, shared workspaces), exposing gaps in session isolation and access control.

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#222](https://github.com/HKUDS/nanobot/issues/222) Multi-agent setup | 25 days | **High** | Maintainer response on roadmap; 5 👍 indicates demand |
| [#161](https://github.com/HKUDS/nanobot/issues/161) Replace LiteLLM | 26 days | Medium | Architectural decision pending; 8 👍 from power users |
| [#1224](https://github.com/HKUDS/nanobot/pull/1224) Steering Loop architecture | 5 days | Medium | Large PR (Chinese language) needs review for merge |
| [#1345](https://github.com/HKUDS/nanobot/pull/1345) Per-session working directory | 3 days | Medium | Session isolation improvement; conflicts with shared workspace model |
| [#1022](https://github.com/HKUDS/nanobot/issues/1022) Long-running task failures | 9 days | **High** | Reliability regression; 3 👍, no maintainer response |

**Maintainer attention recommended**: The multi-agent question (#222) has waited longest with significant engagement — a clear "yes/no/maybe" roadmap signal would reduce duplicate issues.

---

*Digest generated from 89 GitHub events on 2026-03-03. Data source: github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-03

## 1. Today's Overview

ZeroClaw shows **high-velocity development activity** with 86 total updates in 24 hours (36 issues, 50 PRs), indicating an active pre-release stabilization phase. The project is experiencing **significant quality control pressure**: 43 open PRs await review against 7 merged/closed, while 30 active issues suggest ongoing bug discovery. No new release was cut today, despite critical fixes landing for Windows stack overflow, CI infrastructure, and WebSocket connectivity. The maintainers appear focused on **platform stability** (Windows, macOS, container deployments) and **provider ecosystem expansion** (Azure OpenAI, custom endpoints, new channels). The high severity bug count (6 S0/S1 issues) signals this remains pre-1.0 software requiring cautious production deployment.

---

## 2. Releases

**No new releases** (v0.1.7 remains latest).

---

## 3. Project Progress

### Merged/Closed PRs Today (7 total)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2613](https://github.com/zeroclaw-labs/zeroclaw/pull/2613) | @gh-xj | Restored GitHub-hosted runner labels for macOS/Windows release builds | **Critical CI fix** — unblocked release pipeline |
| [#2591](https://github.com/zeroclaw-labs/zeroclaw/pull/2591) | @killf | Increased Windows stack size to resolve runtime overflow | **Fixes Windows startup crash** |
| [#2610](https://github.com/zeroclaw-labs/zeroclaw/pull/2610) | @gh-xj | Fixed CI toolchain regression (`cargo` unavailable under Rust 1.92.0) | Infrastructure stability |
| [#2604](https://github.com/zeroclaw-labs/zeroclaw/pull/2604) | @gh-xj | Added automated release safety gates | Release process hardening |
| [#2560](https://github.com/zeroclaw-labs/zeroclaw/pull/2560) | @mmyjona | Fixed Telegram voice message regression | Channel reliability |

**Key advancement**: Windows platform support stabilized through stack size fix (#2591) and CI runner restoration (#2613). Release engineering improved with safety gates.

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#2546](https://github.com/zeroclaw-labs/zeroclaw/issues/2546) — Code simplification sweep | 8 | Technical debt reduction | **Maintainability at scale** — 400-line test helpers indicate architectural strain |
| [#2595](https://github.com/zeroclaw-labs/zeroclaw/issues/2595) — Web agent connection error | 4 | WebSocket/daemon reliability | **Production-grade connectivity** — users need stable headless deployment |
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) — Napcat/OneBot channel missing | 4 | IM platform ecosystem | **QQ/Chinese market penetration** — Napcat is dominant QQ bot framework |
| [#2486](https://github.com/zeroclaw-labs/zeroclaw/issues/2486) — Skill mutual invocation warnings | 4 | Security model clarity | **Safe skill composition** — developers building complex agent workflows |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) — Webhook transforms | 3 | Integration flexibility | **Enterprise webhook handling** — generic payload inspection for CI/CD systems |

### Most Active PRs

| PR | Scope | Significance |
|:---|:---|:---|
| [#2609](https://github.com/zeroclaw-labs/zeroclaw/pull/2609) | Provider descriptor centralization | Reduces 600+ lines of duplication; prevents drift |
| [#2612](https://github.com/zeroclaw-labs/zeroclaw/pull/2612) | Synology Chat channel | NAS/enterprise messaging expansion |
| [#2607](https://github.com/zeroclaw-labs/zeroclaw/pull/2607) | Webhook transforms | Closes #2467; enables GitHub/enterprise integrations |

---

## 5. Bugs & Stability

### Critical Issues (S0 — Data Loss/Security Risk)

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#2486](https://github.com/zeroclaw-labs/zeroclaw/issues/2486) | Skill cross-folder calls trigger "insecure skill dir" warnings, blocking legitimate workflows | **No fix PR** — active discussion on security model |
| [#2499](https://github.com/zeroclaw-labs/zeroclaw/issues/2499) | Windows 11: `zeroclaw.exe` crashes on double-click | **Mitigated** by #2591 (stack size), needs verification |
| [#2600](https://github.com/zeroclaw-labs/zeroclaw/issues/2600) | Raspberry Pi 3B+: Tool execution fails (sandbox/security policy) | **No fix PR** — ARM platform gap |
| [#2588](https://github.com/zeroclaw-labs/zeroclaw/issues/2588) | Requests missing `tools` parameter — tool calling broken | **No fix PR** — fundamental regression |

### High Severity (S1 — Workflow Blocked)

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#2595](https://github.com/zeroclaw-labs/zeroclaw/issues/2595) | Web agent "Connection error. Attempting to reconnect..." | **PR #2586** in review — WebSocket subprotocol fix |
| [#2510](https://github.com/zeroclaw-labs/zeroclaw/issues/2510) | Activation system false negative (`initialized=false`) | **No fix PR** — licensing/telemetry bug |
| [#2562](https://github.com/zeroclaw-labs/zeroclaw/issues/2562) | `http_request` tool cannot access `credential_profile` env vars | **PR #2570** in review |
| [#2589](https://github.com/zeroclaw-labs/zeroclaw/issues/2589) | Custom OpenAI endpoint ignores default model | **No fix PR** |
| [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) | Invalid schema for `channel_ack_config` function | **No fix PR** — OpenAI function calling regression |
| [#2551](https://github.com/zeroclaw-labs/zeroclaw/issues/2551) | OpenAI Codex websocket fails without SSE fallback | **PR #2556** in review |

### Infrastructure/Deployment

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#2529](https://github.com/zeroclaw-labs/zeroclaw/issues/2529) | Daemon ignores SIGTERM — breaks Kubernetes | **No fix PR** — container orchestration blocker |

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term (Active PRs)

| Feature | PR/Issue | Confidence |
|:---|:---|:---|
| Azure OpenAI support | [#2555](https://github.com/zeroclaw-labs/zeroclaw/issues/2555) → [#2568](https://github.com/zeroclaw-labs/zeroclaw/pull/2568) | **High** — enterprise demand, PR ready |
| Per-fallback provider API keys | [#2517](https://github.com/zeroclaw-labs/zeroclaw/issues/2517) → [#2571](https://github.com/zeroclaw-labs/zeroclaw/pull/2571) | **High** — multi-tenant use case |
| Telegram native streaming (`sendMessageDraft`) | [#2561](https://github.com/zeroclaw-labs/zeroclaw/issues/2561) → [#2569](https://github.com/zeroclaw-labs/zeroclaw/pull/2569) | **High** — UX improvement |
| Webhook transforms | [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) → [#2607](https://github.com/zeroclaw-labs/zeroclaw/pull/2607) | **High** — closes enterprise gap |
| Synology Chat channel | [#2612](https://github.com/zeroclaw-labs/zeroclaw/pull/2612) | **Medium** — niche but complete |

### Medium-Term Signals

| Feature | Issue | Driver |
|:---|:---|:---|
| ACP (Agent Control Protocol) server mode | [#2456](https://github.com/zeroclaw-labs/zeroclaw/issues/2456) | IDE integration (Zed, etc.) — "coding agent" positioning |
| Napcat/OneBot11 channel | [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | Chinese market expansion |
| Multi-query memory retrieval | [#2472](https://github.com/zeroclaw-labs/zeroclaw/issues/2472) | RAG quality for long conversations |
| Granular shell command approval | [#2606](https://github.com/zeroclaw-labs/zeroclaw/issues/2606) | Security hardening (rm vs ls) |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Windows reliability** | #2499 (crash), #2591 (fix), PowerShell encoding (#2056) | Critical — blocking desktop adoption |
| **Connection stability** | #2595 (WebSocket), #2529 (SIGTERM), #2587 (dashboard crash) | High — production deployment risk |
| **Configuration complexity** | #2510 (activation), #2537 (model_routes), #2562 (credentials) | High — onboarding friction |
| **Platform coverage gaps** | #2600 (Raspberry Pi), #2503 (QQ/Napcat) | Medium — limits addressable market |

### Positive Signals

- **Active enterprise interest**: Azure OpenAI (#2555), webhook transforms (#2467), Synology (#2612)
- **Developer ecosystem**: Skill system usage exposing architectural needs (#2486)
- **Channel diversity**: Telegram streaming improvements (#2561, #2569, #2572, #2573)

### Satisfaction Indicators

- CLI agent "works well" (#2595) — core functionality solid
- Regression reports include version comparisons (#2560) — engaged user base

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2529](https://github.com/zeroclaw-labs/zeroclaw/issues/2529) — SIGTERM handling | 1 day | **Container deployment blocker** | Simple signal handler addition — high impact |
| [#2486](https://github.com/zeroclaw-labs/zeroclaw/issues/2486) — Skill security model | 1 day | Architecture decision | Clarify intended behavior vs. bug |
| [#2600](https://github.com/zeroclaw-labs/zeroclaw/issues/2600) — Raspberry Pi sandbox | New | ARM platform gap | Security policy review for constrained devices |
| [#2456](https://github.com/zeroclaw-labs/zeroclaw/issues/2456) — ACP server mode | 2 days | Strategic positioning | Roadmap confirmation or deferral |

### PRs At Risk of Staleness

| PR | Age | Risk | Blocker |
|:---|:---|:---|:---|
| [#2056](https://github.com/zeroclaw-labs/zeroclaw/pull/2056) — PowerShell/Chinese encoding | 4 days | Windows user experience | Large diff, needs security review |
| [#1869](https://github.com/zeroclaw-labs/zeroclaw/pull/1869) — Clippy + onboarding | 5 days | Code quality | Merge conflict potential |

---

## Health Assessment

| Metric | Status | Trend |
|:---|:---|:---|
| Issue velocity | 36/day | ⚠️ Elevated — bug discovery phase |
| PR velocity | 50/day, 14% merge rate | ⚠️ Review bottleneck |
| Critical bug count | 6 S0/S1 open | 🔴 Concerning for release readiness |
| Platform coverage | Windows stabilizing, ARM gaps | 🟡 Improving |
| Enterprise features | Strong pipeline | 🟢 Positive |

**Recommendation**: Prioritize S0/S1 bug fixes over new features; consider v0.1.8 hotfix release for Windows stack and WebSocket stability.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-03

## 1. Today's Overview

PicoClaw shows **extremely high development velocity** with 237 PRs and 100 issues updated in the last 24 hours—unusually active for a young open-source AI agent project. The community is rapidly iterating on core architecture, with three major refactor PRs submitted today introducing a **3-phase runtime loop (Analyse → Execute → Reflect)** with Chain-of-Thought reasoning. However, the project exhibits growing pains: 95% of updated issues remain open, and provider compatibility bugs (especially Gemini 3 and Ollama) dominate user reports. The maintainer team appears responsive with 26 PRs merged/closed, but the backlog suggests resource constraints.

---

## 2. Releases

**No new releases** (v0.1.0 remains latest). Notable: PR [#1013](https://github.com/sipeed/picoclaw/pull/1013) introduces a CI release-bundle workflow for cross-platform distribution, signaling preparation for v0.2.0.

---

## 3. Project Progress

### Merged/Closed PRs Today (26 total, key items):

| PR | Description | Impact |
|:---|:---|:---|
| [#999](https://github.com/sipeed/picoclaw/pull/999) | Fix TOCTOU race condition in MCP manager | **Critical stability** for Model Context Protocol |
| [#1002](https://github.com/sipeed/picoclaw/pull/1002) | MCP HTTP server documentation example | Developer experience |
| [#1009](https://github.com/sipeed/picoclaw/pull/1009) / [#1015](https://github.com/sipeed/picoclaw/pull/1015) | 3-phase runtime loop + CoT system + memory hierarchy | **Major architecture refactor** |
| [#1014](https://github.com/sipeed/picoclaw/pull/1014) | Wails v2 desktop launcher | GUI onboarding improvement |
| [#1013](https://github.com/sipeed/picoclaw/pull/1013) | Release bundle CI workflow | Distribution infrastructure |
| [#1016](https://github.com/sipeed/picoclaw/pull/1016) | "add something" (trivial, closed) | — |
| [#297](https://github.com/sipeed/picoclaw/issues/297) | Mantis Shrimp logo design (roadmap, closed) | Brand identity |

**Key advancement**: The 3-phase runtime refactor (Analyse → Execute → Reflect) with self-learning CoT templates represents a significant architectural evolution toward more interpretable agent reasoning.

---

## 4. Community Hot Topics

### Most Active Issues (by engagement):

| Issue | Comments | 👍 | Underlying Need |
|:---|:---:|:---:|:---|
| [#190](https://github.com/sipeed/picoclaw/issues/190) Android installation tutorial | 10 | 0 | **Mobile deployment**—users want pocket AI agents |
| [#79](https://github.com/sipeed/picoclaw/issues/79) Gemini 3 Flash `thought_signature` failure | 9 | 0 | **Provider compatibility** with Google's latest models |
| [#148](https://github.com/sipeed/picoclaw/issues/148) OpenClaw SKILL compatibility | 8 | 2 | **Ecosystem interoperability**—skill marketplace |
| [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio easy connect | 8 | 1 | **Local LLM accessibility** for non-technical users |
| [#109](https://github.com/sipeed/picoclaw/issues/109) Ollama "no API key" error | 7 | 0 | **Local-first deployment** without cloud dependencies |
| [#161](https://github.com/sipeed/picoclaw/issues/161) Gemini 3 Pro/Flash mandatory thought signatures | 6 | 1 | **Enterprise Google AI adoption** |

**Analysis**: The community is split between **local/edge deployment** (Android, Ollama, LM Studio) and **enterprise cloud provider integration** (Gemini 3, Azure). The "thought_signature" issues suggest PicoClaw's Google provider implementation lags behind Google's API evolution.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **P0** | [#79](https://github.com/sipeed/picoclaw/issues/79), [#161](https://github.com/sipeed/picoclaw/issues/161) | Gemini 3 models broken due to `thought_signature` requirement | **No fix PR**—blocks Google AI users |
| **P0** | [#127](https://github.com/sipeed/picoclaw/issues/127) | Windows + Gemini: 404 v1main endpoint + "No API Key" errors | **No fix PR** |
| **P0** | [#109](https://github.com/sipeed/picoclaw/issues/109), [#96](https://github.com/sipeed/picoclaw/issues/96) | Ollama/local providers fail with "no API key configured" | **No fix PR**—core config bug |
| **P1** | [#966](https://github.com/sipeed/picoclaw/issues/966) | Qwen 3.5 returns empty content when reasoning consumes all tokens | **No fix PR** |
| **P1** | [#288](https://github.com/sipeed/picoclaw/issues/288) | Docker identity changes (soul.md) not persisting | **No fix PR** |
| **P1** | [#66](https://github.com/sipeed/picoclaw/issues/66) | `PICOCLAW_PROVIDERS_*` env vars broken due to `{{.Name}}` template | **No fix PR** |
| **P2** | [#197](https://github.com/sipeed/picoclaw/issues/197) | Bot stuck on long-running services (Express server) | **No fix PR** |

**Critical pattern**: Provider configuration system has systemic issues—environment variable parsing, local provider detection, and Google API updates are all failing. PR [#444](https://github.com/sipeed/picoclaw/pull/444) (open) fixes Anthropic routing but similar fixes needed for Gemini/Ollama.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.2.0 | Signal Strength |
|:---|:---|:---:|:---|
| **MCP (Model Context Protocol) support** | [#290](https://github.com/sipeed/picoclaw/issues/290) (closed roadmap), [#999](https://github.com/sipeed/picoclaw/pull/999) | ⭐⭐⭐⭐⭐ | Core architecture; PR merged |
| **Multimodal/vision support** | [#981](https://github.com/sipeed/picoclaw/pull/981) | ⭐⭐⭐⭐⭐ | PR open, completes broken pipeline |
| **Agent Teams (multi-agent)** | [#976](https://github.com/sipeed/picoclaw/pull/976) | ⭐⭐⭐⭐☆ | Major PR open with goroutine orchestration |
| **Desktop GUI (Wails)** | [#1014](https://github.com/sipeed/picoclaw/pull/1014) | ⭐⭐⭐⭐☆ | PR open, lowers barrier to entry |
| **Intelligent model routing** | [#994](https://github.com/sipeed/picoclaw/pull/994) | ⭐⭐⭐☆☆ | Cost optimization feature |
| **Feishu/Lark enhancements** | [#974](https://github.com/sipeed/picoclaw/pull/974), [#873](https://github.com/sipeed/picoclaw/pull/873), [#894](https://github.com/sipeed/picoclaw/issues/894) | ⭐⭐⭐⭐☆ | Enterprise China market focus |
| **WhatsApp support** | [#248](https://github.com/sipeed/picoclaw/issues/248) | ⭐⭐☆☆☆ | Requested, no PR |
| **Azure OpenAI** | [#260](https://github.com/sipeed/picoclaw/issues/260) | ⭐⭐☆☆☆ | Enterprise request, no PR |
| **Binary size optimization** | [#171](https://github.com/sipeed/picoclaw/issues/171) | ⭐⭐☆☆☆ | Build tags for embedded use |

**Prediction**: v0.2.0 will center on **MCP ecosystem + multimodal + desktop GUI**, positioning PicoClaw as a "small but complete" alternative to OpenClaw.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes):

> *"I'm trying to get this installed on an android"* — [#28](https://github.com/sipeed/picoclaw/issues/28)

> *"i tried so many times to change the soul.md, identity.md... but when I try ask again in telegram the old response"* — [#288](https://github.com/sipeed/picoclaw/issues/288)

> *"The bot starts quite valueless initially"* — [#415](https://github.com/sipeed/picoclaw/issues/415)

> *"Memory threshold reached. Optimizing conversation history"* — vague, no progress indicator [#580](https://github.com/sipeed/picoclaw/issues/580)

### Satisfaction Drivers:
- **Speed/efficiency** (project philosophy: "small, fast, powerful")
- **Self-hosting capability** (Docker, local LLMs)
- **Active development** (responsive to PRs)

### Dissatisfaction Drivers:
- **Configuration complexity** (identity, providers, Docker volumes)
- **Broken local LLM workflows** (Ollama integration)
- **Missing onboarding** (no `picoclaw doctor`, unclear tutorials)

---

## 8. Backlog Watch

### Issues needing maintainer attention (>14 days old, high impact):

| Issue | Age | Risk |
|:---|:---|:---|
| [#75](https://github.com/sipeed/picoclaw/issues/75) Ollama support question | 19 days | **Local LLM adoption blocked** |
| [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio easy connect | 20 days | **Non-technical user barrier** |
| [#61](https://github.com/sipeed/picoclaw/issues/61) File send/receive in chat | 19 days | **Core messaging feature gap** |
| [#39](https://github.com/sipeed/picoclaw/issues/39) `picoclaw doctor` command | 20 days | **Support burden reduction** |
| [#116](https://github.com/sipeed/picoclaw/issues/116) Code quality audit (Chinese) | 18 days | **Technical debt visibility** |

### Stalled PRs:

| PR | Issue | Action Needed |
|:---|:---|:---|
| [#665](https://github.com/sipeed/picoclaw/pull/665) | History compression orphaning tool pairs | Review for Anthropic stability |
| [#467](https://github.com/sipeed/picoclaw/pull/467) | Docker build improvements | Security/reproducibility win |

---

**Project Health Score: 6.5/10** — High velocity and architectural ambition offset by provider compatibility debt and configuration UX gaps. The 3-phase runtime refactor suggests maturation, but Gemini 3 and Ollama bugs risk user churn.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-03

## 1. Today's Overview

NanoClaw shows **high development velocity** with 32 PRs and 16 issues updated in the last 24 hours, indicating an active pre-release stabilization period. The project is experiencing significant community-driven expansion with 3 new channel integrations (Signal, Feishu, Google Chat) and multi-modal capabilities landing today. However, **no new release was cut**, suggesting maintainers are accumulating changes before a version bump. The 20:12 open-to-merged PR ratio indicates healthy review throughput, though 13 open issues signal accumulating technical debt in areas like scheduling reliability and container lifecycle management.

---

## 2. Releases

**None** — No releases published today. The project remains at v1.1.3 (per issue #613).

---

## 3. Project Progress

### Merged/Closed PRs Today (12 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#667](https://github.com/qwibitai/nanoclaw/pull/667) | @echthesia | **Unix socket IPC** — replaces polling-based file IPC with NDJSON over Unix sockets | Major latency improvement; eliminates filesystem polling overhead |
| [#644](https://github.com/qwibitai/nanoclaw/pull/644) | @brandontan | **Multi-modal agent** — voice transcription, file/image sending, vision support | Core UX expansion; enables richer interactions |
| [#668](https://github.com/qwibitai/nanoclaw/pull/668) | @winterhuan | **Feishu channel** — Lark/Feishu enterprise messaging integration | China market expansion |
| [#660](https://github.com/qwibitai/nanoclaw/pull/660) | @raedur | K8s testing infrastructure | DevOps/infra improvement |
| [#500](https://github.com/qwibitai/nanoclaw/pull/500) | @gabi-simons | **Pluggable multi-channel architecture** | Major architectural refactor; enables rapid channel additions |
| [#419](https://github.com/qwibitai/nanoclaw/pull/419) | @roeeho-tr | **Security fix** — prevents `.env` secret leakage into containers | Critical security hardening |

**Key advancement**: The convergence of #500 (pluggable architecture) with #644 (multi-modal) and multiple channel PRs suggests NanoClaw is positioning as a **universal AI agent bridge**, not just a Claude-Code wrapper.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#664](https://github.com/qwibitai/nanoclaw/issues/664) "different between nanoclaw vs claude code" | Created today, 1 comment | **Positioning confusion** — users don't understand value-add over vanilla Claude Code; needs clearer differentiation messaging |
| [#633](https://github.com/qwibitai/nanoclaw/issues/633) "Spec kit" | Closed today | Governance/constitution framework being established; indicates project maturation |
| [#642](https://github.com/qwibitai/nanoclaw/issues/642) "RFC: CLI Channel for Claude Code Integration" | Created 2026-03-02 | **Ecosystem integration** — file-based IPC for Claude Code skills; could become standard interface |

**Underlying need**: Users want clarity on NanoClaw's unique value proposition (#664) and seamless integration with existing Claude Code workflows (#642). The project sits at a positioning inflection point.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#595](https://github.com/qwibitai/nanoclaw/issues/595) OOM crash after ~40h — ghost sockets accumulate | Open | None identified |
| 🔴 **Critical** | [#669](https://github.com/qwibitai/nanoclaw/issues/669) Scheduled tasks run twice (race condition) | Open | [#657](https://github.com/qwibitai/nanoclaw/pull/657) — atomic claim fix under review |
| 🟡 **High** | [#611](https://github.com/qwibitai/nanoclaw/issues/611) Agent-runner source copy never updated after initial creation | Open | None |
| 🟡 **High** | [#613](https://github.com/qwibitai/nanoclaw/issues/613) `ANTHROPIC_MODEL` env var ignored | Open | None |
| 🟡 **High** | [#635](https://github.com/qwibitai/nanoclaw/issues/635) WhatsApp auth files with insecure permissions (644) | Open | None |
| 🟢 **Medium** | [#574](https://github.com/qwibitai/nanoclaw/issues/574) Containers lack `jq` | Open | None |
| 🟢 **Medium** | [#662](https://github.com/qwibitai/nanoclaw/pull/662) Service PATH broken on Nix-managed systems | PR open | Self-fixing |

**Stability assessment**: Two critical production issues threaten long-running deployments. The OOM crash (#595) and scheduler race condition (#669) suggest **memory management and task queue reliability** are the highest-priority fixes before next release.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version |
|:---|:---|:---|
| **Web UI** | [#661](https://github.com/qwibitai/nanoclaw/issues/661) | High — external implementation already exists (WhosClaw/nanoclaw-webui), may be adopted |
| **Signal channel** | [#665](https://github.com/qwibitai/nanoclaw/pull/665) | High — PR open, follows pattern of merged channel PRs |
| **Discord proxy support** | [#666](https://github.com/qwibitai/nanoclaw/pull/666) | Medium — niche use case (China/restricted networks) |
| **Multi-runtime support** (Codex, Gemini, OpenCode) | [#663](https://github.com/qwibitai/nanoclaw/pull/663) | **Very High** — closes #80, strategic priority to reduce Claude dependency |
| **Message steering / real-time injection** | [#617](https://github.com/qwibitai/nanoclaw/issues/617) | Medium — complex queue architecture change |
| **Quote/reply threading** | [#618](https://github.com/qwibitai/nanoclaw/issues/618) | Medium — WhatsApp bridge ready, needs RustClaw adapter work |
| **Google Chat** | [#658](https://github.com/qwibitai/nanoclaw/pull/658) | High — PR open, enterprise demand |

**Prediction**: Next release (likely v1.2.0) will emphasize **runtime flexibility** (#663) and **channel breadth** (Signal, Google Chat, Feishu already merged), positioning NanoClaw as model-agnostic and platform-agnostic.

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Voice | Root Cause |
|:---|:---|:---|
| Windows support gaps | [#571](https://github.com/qwibitai/nanoclaw/issues/571) "not supper Windows Sys" | Platform-specific tooling assumptions |
| Model configuration ignored | [#613](https://github.com/qwibitai/nanoclaw/issues/613) | Hardcoded model mappings in CLI layer |
| Memory leaks in production | [#595](https://github.com/qwibitai/nanoclaw/issues/595) | Socket cleanup on reconnect failures |
| Credential security | [#635](https://github.com/qwibitai/nanoclaw/issues/635) | Default umask in WhatsApp auth file creation |

### Satisfaction Signals
- Active community contribution: 3 channel integrations in 24 hours
- Self-healing infrastructure: user built and published web UI independently (#661)
- Security consciousness: proactive secret leakage prevention (#419)

### Use Case Evolution
Users are deploying NanoClaw in **enterprise messaging environments** (Feishu, Google Workspace, Signal) and **long-running production scenarios** (40+ hour uptimes), moving beyond personal/development use.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#296](https://github.com/qwibitai/nanoclaw/pull/296) Preempt active container for scheduled tasks | 13 days | **Merge conflict with #657** | Coordinate with atomic claim fix; may be superseded |
| [#418](https://github.com/qwibitai/nanoclaw/pull/418) Setup mounts step fixes | 8 days | Silent config failures in production | Review for v1.1.4 patch |
| [#571](https://github.com/qwibitai/nanoclaw/issues/571) Windows/Opencode support | 3 days | Platform exclusion | Needs maintainer response on roadmap |
| [#617](https://github.com/qwibitai/nanoclaw/issues/617) + [#618](https://github.com/qwibitai/nanoclaw/issues/618) Message steering & threading | 2 days | UX gap vs. competitors | RFC response from core team |

**Maintainer attention recommended**: The scheduler race condition (#669/#657) and OOM crash (#595) should block next release without resolution. The growing backlog of open channel PRs suggests need for automated testing infrastructure to prevent integration debt.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-03

## 1. Today's Overview

IronClaw shows **high development velocity** with 40 PRs and 18 issues updated in the last 24 hours, though zero issue closures indicates potential backlog pressure. The project released v0.13.1 yesterday with Brave Web Search support and UI polish. Today's activity is dominated by **core contributor @henrypark133** pushing multiple XL-sized infrastructure PRs (WASM channel generalization, OAuth support, job system improvements) alongside a cluster of bug reports from @PierreLeGuen revealing UI/UX rough edges in routines, jobs, and memory features. The simultaneous emergence of testing architecture proposals and observability PRs suggests the project is maturing toward production hardening. Windows compatibility and Podman support are active community priorities.

---

## 2. Releases

### v0.13.1 — 2026-03-02
| Aspect | Details |
|--------|---------|
| **Changes** | Added Brave Web Search WASM tool; fixed web UI auto-scroll and Enter key completion for slash commands; corrected Telegram MTProto download URLs |
| **Breaking Changes** | None (patch release) |
| **Migration Notes** | No action required; registry update recommended for Brave Search tool availability |

**v0.14.0 release PR opened** ([#480](https://github.com/nearai/ironclaw/pull/480)) with **breaking API changes** — enum variant additions on previously exhaustive enums. Users integrating programmatically should review compatibility before upgrading.

---

## 3. Project Progress

### Merged/Closed Today (9 PRs)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#474](https://github.com/nearai/ironclaw/pull/474) | @henrypark133 | **Brave Web Search WASM tool** — new `tools-src/web-search/` with WIT bindgen, credential injection, registry manifest | Expands native search capabilities beyond Bing/Google |
| [#475](https://github.com/nearai/ironclaw/pull/475) | @henrypark133 | **Web UI polish**: auto-scroll for slash command dropdown, Enter completion | UX improvement for power users |
| [#470](https://github.com/nearai/ironclaw/pull/470) | @henrypark133 | **Fixed registry URLs**: `telegram-mtproto` and `slack-tool` pointed to wrong bundles | Unblocks WASM tool installation |
| [#477](https://github.com/nearai/ironclaw/pull/477) | @henrypark133 | **Workspace system files**: `TOOLS.md`, `BOOTSTRAP.md`, disk-to-DB import | Agent context management infrastructure |
| [#479](https://github.com/nearai/ironclaw/pull/479) | @henrypark133 | **Critical fix**: secrets store wiring for runtime WASM activation | Fixes 401 errors on dynamically activated tools |
| [#453](https://github.com/nearai/ironclaw/pull/453) | @github-actions[bot] | v0.13.1 release automation | — |
| [#473](https://github.com/nearai/ironclaw/pull/473) | @jwiklund | **Podman support** (partial) | Community-contributed container runtime flexibility |

### Major Open PRs in Progress

| PR | Scope | Significance |
|:---|:---|:---|
| [#493](https://github.com/nearai/ironclaw/pull/493) | Remove restart infrastructure, generalize WASM channels | **High-risk infrastructure refactor** — eliminates dead code, unifies channel treatment |
| [#491](https://github.com/nearai/ironclaw/pull/491) | Agent job UI parity, SSE events, restart via scheduler | Closes gap between sandbox and agent job UX |
| [#490](https://github.com/nearai/ironclaw/pull/490) | Failed tool call error display with sensitive param redaction | Addresses observability gap in tool execution |
| [#489](https://github.com/nearai/ironclaw/pull/489) | **OAuth for WASM tools in web gateway** | Enables Google Calendar, Gmail integration via browser flow |
| [#334](https://github.com/nearai/ironclaw/pull/334) | OpenTelemetry observability, quality hardening | Production readiness initiative |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Issue/PR | Comments | 👍 | Underlying Need |
|:---|:---:|:---:|:---|
| [#407](https://github.com/nearai/ironclaw/issues/407) — Hermes Agent ideas | 3 | 1 | **Cross-pollination from NousResearch's Python agent** — seeking architectural patterns for multi-channel, memory, skills |
| [#259](https://github.com/nearai/ironclaw/issues/259) — Debounce rapid messages | 2 | 1 | **Conversation coherence** — users send rapid-fire messages, agent processes separately, loses context |
| [#439](https://github.com/nearai/ironclaw/issues/439) — Registry workflow failure | 0 | 1 | **CI/CD reliability** — branch protection blocking automated registry updates, breaking WASM installs |

### Analysis

- **#407** signals community interest in converging with established patterns from Hermes Agent; IronClaw's Rust/WASM architecture is differentiated but feature gaps exist
- **#259** directly addressed by open PR [#465](https://github.com/nearai/ironclaw/pull/465) (conversation history loading + message batching)
- **#439** is a **blocker** for WASM tool distribution — maintainer attention needed

---

## 5. Bugs & Stability

### Critical/High Severity (Fix PRs Available or Urgent)

| Issue | Severity | Reporter | Status | Fix PR |
|:---|:---|:---|:---|:---|
| [#487](https://github.com/nearai/ironclaw/issues/487) — Raw "[Called tool...]" text on total failure | **High** | @PierreLeGuen | Open | None yet |
| [#486](https://github.com/nearai/ironclaw/issues/486) — WASM rejects numeric params as JSON strings | **High** | @PierreLeGuen | Open | None yet |
| [#485](https://github.com/nearai/ironclaw/issues/485) — Job restart failure: no UI error feedback | **Medium** | @PierreLeGuen | Open | [#491](https://github.com/nearai/ironclaw/pull/491) addresses |
| [#484](https://github.com/nearai/ironclaw/issues/484) — Manual routine output to wrong thread | **Medium** | @PierreLeGuen | Open | None yet |
| [#483](https://github.com/nearai/ironclaw/issues/483) — Routine "Run Now" no UI feedback | **Medium** | @PierreLeGuen | Open | None yet |
| [#482](https://github.com/nearai/ironclaw/issues/482) — Ghost DB record on skill download failure | **Medium** | @PierreLeGuen | Open | None yet |
| [#481](https://github.com/nearai/ironclaw/issues/481) — Memory search links to UUID not file path | **Medium** | @PierreLeGuen | Open | None yet |
| [#478](https://github.com/nearai/ironclaw/pull/478) — Windows file lock error (wasmtime cache) | **High** | @zmanian | **In PR** | [#478](https://github.com/nearai/ironclaw/pull/478) |

### Pattern Analysis

**@PierreLeGuen's bug cluster** reveals systemic UX gaps in:
- **Routines system** (3 issues): feedback, routing, thread assignment
- **Jobs system** (2 issues): error handling, restart behavior  
- **Memory system** (1 issue): navigation/linking
- **WASM tools** (2 issues): type coercion, failure presentation

These suggest the **web UI is lagging backend capabilities** — a common maturity gap.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood v0.14+ | Rationale |
|:---|:---|:---:|:---|
| **Slack HMAC-SHA256 webhook validation** | [#492](https://github.com/nearai/ironclaw/issues/492) | High | Security requirement for enterprise Slack; small scope |
| **Trajectory benchmark/LLM-as-judge** | [#467](https://github.com/nearai/ironclaw/issues/467) | Medium | Testing maturity push; aligns with #466 OpenClaw research |
| **OpenClaw testing strategy adoption** | [#466](https://github.com/nearai/ironclaw/issues/466) | Medium | Architectural debt reduction; referenced in active PRs |
| **Generic embedding endpoint** | [#97](https://github.com/nearai/ironclaw/issues/97) | Medium | Local/self-hosted demand; "minimal changes" per reporter |
| **Venice.ai provider** | [#451](https://github.com/nearai/ironclaw/pull/451), [#95](https://github.com/nearai/ironclaw/pull/95) | **High** | Two competing PRs indicate demand; privacy-focused users |
| **Podman full support** | [#462](https://github.com/nearai/ironclaw/issues/462), [#473](https://github.com/nearai/ironclaw/pull/473) | Medium | Partial fix merged; networking issues remain |
| **Gemini CLI OAuth** | [#476](https://github.com/nearai/ironclaw/pull/476) | Medium | Preview model access; depends on Google Cloud Code API stability |
| **Conversation debouncing** | [#259](https://github.com/nearai/ironclaw/issues/259) | **High** | Active PR [#465](https://github.com/nearai/ironclaw/pull/465) |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **WASM tool installation friction** | [#439](https://github.com/nearai/ironclaw/issues/439) registry CI failure, [#459](https://github.com/nearai/ironclaw/issues/459) missing Docker images, [#448](https://github.com/nearai/ironclaw/issues/448) Telegram setup errors | High |
| **Silent failures / poor error visibility** | [#485](https://github.com/nearai/ironclaw/issues/485), [#483](https://github.com/nearai/ironclaw/issues/483), [#487](https://github.com/nearai/ironclaw/issues/487) | High |
| **Cost transparency issues** | [#463](https://github.com/nearai/ironclaw/issues/463) OpenRouter free-tier shows paid pricing | Medium |
| **Windows compatibility** | [#478](https://github.com/nearai/ironclaw/pull/478) file locks | Medium |

### Positive Signals

- **Active core development**: @henrypark133's sustained output (7+ PRs in 24h)
- **Security consciousness**: HMAC validation requested, OAuth implementation in progress
- **Observability investment**: OpenTelemetry PR [#334](https://github.com/nearai/ironclaw/pull/334) shows production mindset

### Use Cases Emerging

- **Multi-channel business automation** (Slack, WhatsApp, Telegram) — registry/tool reliability critical
- **Local/self-hosted deployments** — Podman, generic embedding, Venice.ai demand
- **Agent quality assurance** — trajectory benchmarks, testing architecture

---

## 8. Backlog Watch

### Issues Needing Maintainer Response

| Issue | Age | Blocker? | Action Needed |
|:---|:---:|:---:|:---|
| [#439](https://github.com/nearai/ironclaw/issues/439) Registry workflow failure | 2 days | **YES** — WASM installs broken | Branch protection rule adjustment or workflow redesign |
| [#97](https://github.com/nearai/ironclaw/issues/97) Generic embedding endpoint | 17 days | No | Design decision on provider abstraction |
| [#407](https://github.com/nearai/ironclaw/issues/407) Hermes Agent ideas | 4 days | No | Architecture review, pattern adoption triage |

### PRs Stalled

| PR | Age | Blocker |
|:---|:---:|:---|
| [#334](https://github.com/nearai/ironclaw/pull/334) OpenTelemetry | 8 days | Large scope, review bandwidth; replaces original feature entirely |
| [#333](https://github.com/nearai/ironclaw/pull/333) Slack Socket Mode | 8 days | Architectural review of WebSocket bridge approach |
| [#95](https://github.com/nearai/ironclaw/pull/95) Venice.ai provider | 17 days | Superseded by [#451](https://github.com/nearai/ironclaw/pull/451)? Needs consolidation |

### Recommendation

**#439** requires immediate attention — it breaks the WASM extension ecosystem. Consider temporary manual registry updates while CI is fixed.

---

*Generated from GitHub data for nearai/ironclaw — 2026-03-03*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-03

## 1. Today's Overview

LobsterAI shows **high development velocity** with 18 PRs merged/closed and zero open PRs, indicating an efficient, well-managed codebase. The project released **v0.1.24** today with significant platform expansion (Linux support, vision model capabilities) and IM ecosystem growth (NetEase Bee integration). Community activity is substantial with 28 issues updated, though the **19:9 open-to-closed issue ratio** suggests incoming bug reports are outpacing resolutions. A notable pattern emerges: **Windows platform stability** and **Chinese localization quality** dominate user pain points, with multiple encoding, path handling, and sandbox issues surfacing simultaneously. The team demonstrates **responsive maintenance** with same-day fixes for critical Windows bugs and formula rendering.

---

## 2. Releases

### [v0.1.24](https://github.com/netease-youdao/LobsterAI/releases/tag/v0.1.24) — 2026-03-03

| Category | Details |
|----------|---------|
| **Vision Support** | Images can now be passed to vision models via base64 encoding ([#203](https://github.com/netease-youdao/LobsterAI/pull/203)) — enables multimodal cowork workflows |
| **Platform Expansion** | **Linux support** added (AppImage + .deb packages) ([#217](https://github.com/netease-youdao/LobsterAI/pull/217)) |
| **IM Ecosystem** | NetEase Bee (小蜜蜂) integration for personal digital assistant access ([#158](https://github.com/netease-youdao/LobsterAI/pull/158)) |

**Migration Notes:** Linux users should prefer .deb for Debian/Ubuntu systems; AppImage users need desktop entry metadata for proper integration. Vision model users: verify your provider supports image base64 input.

---

## 3. Project Progress

### Merged PRs Today (18 total)

| PR | Author | Impact |
|:---|:---|:---|
| [#233](https://github.com/netease-youdao/LobsterAI/pull/233) | @liugang519 | **MCP protocol support** — major architecture addition for model context protocol |
| [#222](https://github.com/netease-youdao/LobsterAI/pull/222) | @liuzhq1986 | **Math/science formula rendering** via KaTeX + remark-math |
| [#229](https://github.com/netease-youdao/LobsterAI/pull/229) | @fisherdaddy | IM config bugfix + Terms of Service + log export |
| [#228](https://github.com/netease-youdao/LobsterAI/pull/228) | @renhongchao | Xiaomifeng account real-time change support |
| [#225](https://github.com/netease-youdao/LobsterAI/pull/225) | @fisherdaddy | Windows git bash dependency fix |
| [#218](https://github.com/netease-youdao/LobsterAI/pull/218) | @liuzhq1986 | Browser persistence optimization (web-search skill) |
| [#217](https://github.com/netease-youdao/LobsterAI/pull/217) | @Mind-Hand | **Linux support** (AppImage metadata + .deb) |
| [#216](https://github.com/netease-youdao/LobsterAI/pull/216) | @btc69m979y-dotcom | Windows skill dependency install fix |
| [#214](https://github.com/netease-youdao/LobsterAI/pull/214) | @btc69m979y-dotcom | Windows email connectivity + cowork mailbox fix |
| [#211](https://github.com/netease-youdao/LobsterAI/pull/211) | @btc69m979y-dotcom | Windows asar packaging fix (dist directory) |
| [#210](https://github.com/netease-youdao/LobsterAI/pull/210) | @liuzhq1986 | Skill description optimization |
| [#207](https://github.com/netease-youdao/LobsterAI/pull/207) | @btc69m979y-dotcom | **Windows Chinese encoding fix** (GBK→UTF-8) |
| [#203](https://github.com/netease-youdao/LobsterAI/pull/203) | @btc69m979y-dotcom | **Vision model image input** |
| [#158](https://github.com/netease-youdao/LobsterAI/pull/158) | @renhongchao | **NetEase Bee IM integration** |

**Key Pattern:** @btc69m979y-dotcom and @liuzhq1986 are driving Windows stability and core features respectively.

---

## 4. Community Hot Topics

### Most Active Discussions

| Issue | Comments | Core Need |
|:---|:---:|:---|
| [#3](https://github.com/netease-youdao/LobsterAI/issues/3) — Sandbox auto-download wrong version (M4 Mac) | **7** | **Apple Silicon compatibility** — users receive x86_64 QEMU instead of ARM64, causing HVF acceleration failures |
| [#89](https://github.com/netease-youdao/LobsterAI/issues/89) — Email purpose & 163/QQ failures | **5** | **Clarity on email integration scope** — users expect IM-style chat via email, but it's skill-only; auth failures compound confusion |
| [#144](https://github.com/netease-youdao/LobsterAI/issues/144) — Win11 404 error | **4** | **Installation/endpoint reliability** — "Not found" error suggests CDN or API routing issues |

### Underlying Needs Analysis

- **Sandbox architecture transparency**: Users don't understand why x86_64 appears on ARM Macs
- **Email UX gap**: Feature discoverability problem — email is configured as "notification channel" but users expect conversational interface
- **Windows-first quality issues**: Path encoding, sandbox file access, and installation failures suggest insufficient CI coverage for Windows Chinese locales

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---:|
| 🔴 **Critical** | [#232](https://github.com/netease-youdao/LobsterAI/issues/232) — macOS v0.1.23 memory spike/crash (sandbox suspected) | **OPEN** | — |
| 🔴 **Critical** | [#219](https://github.com/netease-youdao/LobsterAI/issues/219) — Long conversations hang indefinitely ("Bash..." loop) | **OPEN** | — |
| 🟡 **High** | [#213](https://github.com/netease-youdao/LobsterAI/issues/213) — Sandbox file upload unreadable (Windows) | **OPEN** | — |
| 🟡 **High** | [#202](https://github.com/netease-youdao/LobsterAI/issues/202) — Windows bash scripts require Cygwin (forced dependency) | **OPEN** | [#225](https://github.com/netease-youdao/LobsterAI/pull/225) partial |
| 🟡 **High** | [#205](https://github.com/netease-youdao/LobsterAI/issues/205) / [#200](https://github.com/netease-youdao/LobsterAI/issues/200) — Installation failures (persistent) | **OPEN** | — |
| 🟢 **Medium** | [#224](https://github.com/netease-youdao/LobsterAI/issues/224) / [#230](https://github.com/netease-youdao/LobsterAI/issues/230) / [#215](https://github.com/netease-youdao/LobsterAI/issues/215) — Chinese path/filename handling bugs | **OPEN** | [#207](https://github.com/netease-youdao/LobsterAI/pull/207) partial |
| 🟢 **Medium** | [#186](https://github.com/netease-youdao/LobsterAI/issues/186) — Memory/persistence weaker than OpenClaw baseline | **OPEN** | — |
| 🟢 **Medium** | [#227](https://github.com/netease-youdao/LobsterAI/issues/227) — No context compression (hits token limits) | **OPEN** | — |

**Regression Alert:** v0.1.23 introduced [#232](https://github.com/netease-youdao/LobsterAI/issues/232) (macOS memory issues) — may be sandbox-related. Recommend hotfix or rollback guidance.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Release |
|:---|:---|:---:|
| **Context compression / sliding window** | [#227](https://github.com/netease-youdao/LobsterAI/issues/227) | ⭐⭐⭐ HIGH — infrastructure limitation affecting all users |
| **IM session management** (new conversation per message) | [#179](https://github.com/netease-youdao/LobsterAI/issues/179) | ⭐⭐⭐ HIGH — protocol-level, aligns with Bee/NIM expansion |
| **OpenAI OAuth support** | [#189](https://github.com/netease-youdao/LobsterAI/issues/189) (closed) | ⭐⭐ MEDIUM — enterprise SSO pattern |
| **AgentUnion.net integration** | [#226](https://github.com/netease-youdao/LobsterAI/issues/226) | ⭐⭐ MEDIUM — ecosystem partnership |
| **Persistent skill storage** (sandbox survival) | [#234](https://github.com/netease-youdao/LobsterAI/issues/234) | ⭐⭐⭐ HIGH — data loss bug, easy fix |

**Predicted v0.1.25 focus:** Context compression + Windows stability completion + sandbox persistence.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

> *"记忆能力很差，换了好几个模型都不行，不如原版的openclaw"* — [#186](https://github.com/netease-youdao/LobsterAI/issues/186)

> *"这么个问题能拖这么久还不能解决？"* — [#205](https://github.com/netease-youdao/LobsterAI/issues/205) (installation)

> *"对中文用户不友好呀"* — [#224](https://github.com/netease-youdao/LobsterAI/issues/224)

| Dimension | Assessment |
|:---|:---|
| **Core AI Quality** | Memory/persistence below OpenClaw baseline — **satisfaction risk** |
| **Platform Parity** | Windows significantly more fragile than macOS/Linux |
| **Localization** | Chinese path/encoding issues pervasive — **blocking for domestic users** |
| **Sandbox Value** | High potential but file access and architecture confusion eroding trust |
| **Release Quality** | v0.1.23 regression (memory) suggests need for staged rollout |

### Positive Signals
- Rapid fix turnaround for reported bugs (same-day merges)
- Active IM ecosystem expansion (Bee, NIM rich media)
- Vision model support addresses competitive gap

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#37](https://github.com/netease-youdao/LobsterAI/issues/37) — WebSearch/WebFetch disabled by app policy | 9 days | **Strategic** | Product decision: intentional limitation or bug? |
| [#186](https://github.com/netease-youdao/LobsterAI/issues/186) — Memory inferior to OpenClaw | 3 days | **Competitive** | Architecture review; may need RAG enhancement |
| [#195](https://github.com/netease-youdao/LobsterAI/issues/195) — Email invoice search failures | 2 days | **UX** | Fix merged [#236](https://github.com/netease-youdao/LobsterAI/pull/236), verify resolution |
| [#179](https://github.com/netease-youdao/LobsterAI/issues/179) — IM new session initiation | 3 days | **Feature gap** | Protocol design needed |

**Maintainer Attention:** [#37](https://github.com/netease-youdao/LobsterAI/issues/37) requires explicit policy communication — users perceive it as arbitrary restriction.

---

## Project Health Score: 🟡 6.5/10

| Factor | Score | Note |
|:---|:---:|:---|
| Development Velocity | ⭐⭐⭐⭐⭐ | 18 PRs/day, zero backlog |
| Issue Resolution | ⭐⭐⭐☆☆ | 9/28 closed, ratio needs improvement |
| Platform Stability | ⭐⭐⭐☆☆ | Windows technical debt accumulating |
| User Satisfaction | ⭐⭐⭐☆☆ | Core AI quality concerns emerging |
| Release Quality | ⭐⭐⭐☆☆ | v0.1.23 regression detected |

**Recommendation:** Prioritize Windows stability hotfix and context compression for v0.1.25 to address the two highest-impact user blockers.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-03

## 1. Today's Overview

TinyClaw shows **strong development velocity** with 9 PRs updated in the last 24 hours and 6 successfully merged/closed, indicating an active merge cycle. The v0.0.8 release delivers practical operational improvements, particularly around multi-channel administration. Security hardening is a clear priority with multiple PRs addressing plugin sandboxing, logging sanitization, and metadata safety. The project appears healthy with responsive maintainers—most closed items received same-day resolution. One concerning signal: the longest-open issue (#124) requesting additional LLM providers has been active for 13 days without maintainer response, suggesting potential bandwidth constraints on feature expansion.

---

## 2. Releases

### [v0.0.8](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.8) — 2026-03-03

| Aspect | Details |
|--------|---------|
| **Key Features** | Cross-platform `/restart` command; `tinyclaw-admin` self-administration skill |
| **Platforms** | Discord, Telegram, WhatsApp (with native Telegram bot menu registration) |
| **Breaking Changes** | None identified |
| **Migration Notes** | No action required; new commands are additive |

**Operational Impact**: The `/restart` command addresses a real pain point—previously users needed server access to restart agents. The `tinyclaw-admin` skill enables agents to self-manage TinyClaw instances, reducing human-in-the-loop requirements for routine maintenance.

---

## 3. Project Progress

### Merged/Closed PRs (6 items)

| PR | Author | Summary | Significance |
|:---|:---|:---|:---|
| [#153](https://github.com/TinyAGI/tinyclaw/pull/153) | @mokizzz | Team member management (`team add-agent`, `team remove-agent`) with automatic cleanup of stale references on agent removal | **Core team functionality** — fixes data integrity issues when removing agents |
| [#34](https://github.com/TinyAGI/tinyclaw/pull/34) | @mczabca-boop | QMD long-term memory retrieval (BM25 + VSearch) with Claude injection safety | **Memory system hardening** — production reliability improvements |
| [#105](https://github.com/TinyAGI/tinyclaw/pull/105) | @dagelf | qodercli integration with setup robustness fixes | Developer experience improvement |
| [#132](https://github.com/TinyAGI/tinyclaw/pull/132) | @mczabca-boop | OpenViking native flow integration (Session + Search + Memory architecture) | **Major integration upgrade** — moves from legacy markdown to native API |
| [#140](https://github.com/TinyAGI/tinyclaw/pull/140) | @noqcks | Respect tmux `base-index` and `pane-base-index` settings | **Stability fix** — prevents silent failures for non-default tmux configs |
| [#139](https://github.com/TinyAGI/tinyclaw/pull/139) | @axonstone | Propagate `model`/`provider` CLI changes to agents | **CLI reliability** — fixes no-op configuration commands |

**Theme**: Infrastructure hardening and operational reliability dominate today's merges.

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Item | Activity | Analysis |
|:---|:---|:---|:---|
| 1 | [#124](https://github.com/TinyAGI/tinyclaw/issues/124) — Provider expansion request | 4 comments, 0 👍, 13 days open | **High demand, maintainer silence**: Request for z.ai, Kimi, OpenCode.Zen, OpenRouter. User explicitly cites cost/quota concerns with Claude Code API. Signals: (a) cost sensitivity in agent workloads, (b) geographic/provider diversification needs, (c) potential enterprise adoption requiring fallback providers |
| 2 | [#22](https://github.com/TinyAGI/tinyclaw/issues/22) — Differentiation from OpenClaw | 1 comment, 2 👍, closed | Documentation/marketing gap; users confused by similar naming in ecosystem |
| 3 | [#58](https://github.com/TinyAGI/tinyclaw/issues/58) — API accessibility + MCP | 1 comment, 0 👍, closed | Home lab/self-hosting demand for network-exposed endpoints with security options |

**Underlying Needs**: Cost optimization, multi-provider resilience, and self-hosted API access are emerging as competitive requirements.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Status | Details |
|:---|:---|:---|:---|
| 🔴 **High** | [#154](https://github.com/TinyAGI/tinyclaw/pull/154) — Security gaps & logging discrepancies | **Open, fix pending** | Plaintext message content in logs (privacy leak); Chromium sandbox bypass risk. PR proposes: remove message snippets, sandbox-only default with explicit opt-out |
| 🟡 **Medium** | [#62](https://github.com/TinyAGI/tinyclaw/issues/62) — Multi-agent `model`/`reset`/`heartbeat` failures | **Closed** via [#139](https://github.com/TinyAGI/tinyclaw/pull/139) | Configuration propagation bug fixed |
| 🟡 **Medium** | [#140](https://github.com/TinyAGI/tinyclaw/pull/140) — tmux index hardcoding | **Closed** | Silent startup failures for customized tmux configs |

**Assessment**: No critical crashes reported today. The open security PR (#154) addresses significant privacy and sandboxing concerns—recommend prioritization for next release.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in v0.0.9 | Rationale |
|:---|:---|:---|:---|
| Additional LLM providers (z.ai, Kimi, OpenCode.Zen, OpenRouter) | [#124](https://github.com/TinyAGI/tinyclaw/issues/124) | **High** | Explicit user pain (cost/quotas); aligns with existing provider abstraction; 13 days of community discussion |
| Plugin hardening + hook timeouts | [#149](https://github.com/TinyAGI/tinyclaw/pull/149) | **Very High** | PR open, actively rebased; security-focused |
| OpenViking continuation | [#150](https://github.com/TinyAGI/tinyclaw/pull/150) | **High** | Stacked PR ready, depends on #149 merge |
| API endpoint + MCP support | [#58](https://github.com/TinyAGI/tinyclaw/issues/58) | **Medium** | Closed without merge—may need champion or external contribution |

---

## 7. User Feedback Summary

### Pain Points
| Issue | Evidence | Severity |
|:---|:---|:---|
| Claude API quota/cost exhaustion | [#124](https://github.com/TinyAGI/tinyclaw/issues/124) | High for power users |
| Need for remote restart capability | Addressed in v0.0.8 | Resolved |
| Multi-agent configuration drift | [#62](https://github.com/TinyAGI/tinyclaw/issues/62), [#139](https://github.com/TinyAGI/tinyclaw/pull/139) | Resolved |
| Privacy concerns (log content) | [#154](https://github.com/TinyAGI/tinyclaw/pull/154) | Pending fix |

### Use Cases Emerging
- **Home lab/self-hosting**: API exposure needs (#58)
- **Team-based agent operations**: Team management PR (#153) suggests organizational adoption
- **Cost-conscious scaling**: Multi-provider demand (#124)

### Satisfaction Signals
- Rapid PR turnaround (same-day merges)
- Responsive security patching

### Dissatisfaction Signals
- Unanswered provider expansion request (13 days)
- Initial confusion with OpenClaw branding (#22)

---

## 8. Backlog Watch

| Item | Age | Risk | Recommended Action |
|:---|:---|:---|:---|
| [#124](https://github.com/TinyAGI/tinyclaw/issues/124) — Provider support | 13 days | **User churn to competitors** | Maintainer acknowledgment or roadmap commitment needed |
| [#149](https://github.com/TinyAGI/tinyclaw/pull/149) — Plugin hardening | 4 days | Merge conflict accumulation | Prioritize review; blocks #150 |
| [#150](https://github.com/TinyAGI/tinyclaw/pull/150) — OpenViking continuation | 4 days | Stacked dependency | Review queue after #149 |

**Critical Gap**: No maintainer response on [#124](https://github.com/TinyAGI/tinyclaw/issues/124) despite clear user need and cost-justified rationale. Consider labeling as `help wanted` or `good first issue` to attract community contributions for provider adapters.

---

*Digest generated from TinyClaw GitHub activity 2026-03-03. All links verified against github.com/TinyAGI/tinyclaw.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-03

## 1. Today's Overview

CoPaw shows **high development velocity** with 100 items updated in 24 hours (50 issues, 50 PRs) and a balanced 1:1 merge ratio for PRs. The project released **v0.0.4 stable** alongside two beta versions, marking significant platform expansion with Telegram channel support and first-class OpenAI/Azure OpenAI integration. However, **stability concerns are emerging**: numerous reports of agent execution failures, reasoning mode incompatibilities with Chinese models (Kimi, Qwen), and configuration persistence bugs. The community is actively engaged with detailed bug reports, though frustration is visible around "agent promises but doesn't deliver" behaviors and Docker data loss issues.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **[v0.0.4](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.0.4)** | Stable | **Telegram Channel** ([#147](https://github.com/agentscope-ai/CoPaw/pull/147)), **OpenAI & Azure OpenAI Providers** ([#138](https://github.com/agentscope-ai/CoPaw/pull/138)) |
| [v0.0.4-beta.3](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.0.4-beta.3) | Beta | Model connection test feature ([#82](https://github.com/agentscope-ai/CoPaw/pull/82)), `tool_choice` normalization fix ([#369](https://github.com/agentscope-ai/CoPaw/pull/369)) |
| [v0.0.4-beta.2](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.0.4-beta.2) | Beta | Version bump, website updates, README anchor fixes |

**Migration Notes**: v0.0.4 introduced a **breaking change for custom model configurations** — multiple users report custom APIs disappearing after upgrade ([#398](https://github.com/agentscope-ai/CoPaw/issues/398)). Manual reconfiguration may be required.

---

## 3. Project Progress

### Merged/Closed PRs Today (25 total, selected highlights)

| PR | Description | Impact |
|----|-------------|--------|
| [#138](https://github.com/agentscope-ai/CoPaw/pull/138) | Add OpenAI/Azure OpenAI as built-in providers | Eliminates need for custom provider setup |
| [#147](https://github.com/agentscope-ai/CoPaw/pull/147) | Telegram channel support with Bot API polling | Major platform expansion |
| [#170](https://github.com/agentscope-ai/CoPaw/pull/170) | Support providers without API key (Ollama) | Fixes Ollama fallback to DashScope bug |
| [#382](https://github.com/agentscope-ai/CoPaw/pull/382) | Resolve Ollama provider config without saved credentials | Fixes "No active LLM configured" warning |
| [#438](https://github.com/agentscope-ai/CoPaw/pull/438) | Skip repeated tools | Prevents tool registration conflicts |
| [#442](https://github.com/agentscope-ai/CoPaw/pull/442) | Simplify provider status logic | Removes `has_api_key` redundancy, fixes #235 |
| [#446](https://github.com/agentscope-ai/CoPaw/pull/446) | Improve DingTalk handler robustness | Channel reliability |
| [#345](https://github.com/agentscope-ai/CoPaw/pull/345) | Bootstrap persisted envs safely at package init | Prevents env loading race conditions |

**Active Development Areas**: Provider system hardening, MCP session stability ([#431](https://github.com/agentscope-ai/CoPaw/pull/431)), message filtering per channel ([#449](https://github.com/agentscope-ai/CoPaw/pull/449)), browser use tool updates ([#451](https://github.com/agentscope-ai/CoPaw/pull/451)), and ReMe memory integration ([#450](https://github.com/agentscope-ai/CoPaw/pull/450)).

---

## 4. Community Hot Topics

| Rank | Issue/PR | Comments | Analysis |
|------|----------|----------|----------|
| 🔥 1 | [#398](https://github.com/agentscope-ai/CoPaw/issues/398) Custom model APIs disappear after v0.0.4 update | 13 | **Data loss regression** — highest engagement. Users need config file editing capability, migration path |
| 🔥 2 | [#434](https://github.com/agentscope-ai/CoPaw/issues/434) "Agent promises but doesn't execute" — "like a stubborn new grad" | 11 | **Core UX crisis** — agent acknowledges tasks but stalls in "executing..." loop. Suggests execution engine reliability issues |
| 🔥 3 | [#414](https://github.com/agentscope-ai/CoPaw/issues/414) `ClosedResourceError` in MCP registration | 10 | **Infrastructure stability** — MCP session lifecycle bugs, fix PR #431 in progress |
| 4 | [#302](https://github.com/agentscope-ai/CoPaw/issues/302) "Installed CoPaw but it's useless" — setup frustration | 8 | **Onboarding failure** — 163 email infinite loops, QQ channel confusion, documentation gaps |
| 5 | [#443](https://github.com/agentscope-ai/CoPaw/issues/443) "Please don't open-source half-finished products" | 7 | **Sentiment indicator** — plugin install failures, mysterious crashes, perception of instability |

**Underlying Needs**: 
- **Reliability**: Users expect agents to *actually execute* tasks, not just acknowledge them
- **Transparency**: Config file access, better logging/export for debugging
- **Documentation**: Step-by-step channel setup guides, not just reference docs

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **Critical** | [#434](https://github.com/agentscope-ai/CoPaw/issues/434) | Agent execution loop — promises but doesn't deliver | No fix PR identified |
| 🔴 **Critical** | [#414](https://github.com/agentscope-ai/CoPaw/issues/414) | `ClosedResourceError` crashes queries | **Fix PR [#431](https://github.com/agentscope-ai/CoPaw/pull/431)** open |
| 🔴 **Critical** | [#433](https://github.com/agentscope-ai/CoPaw/issues/433), [#388](https://github.com/agentscope-ai/CoPaw/issues/388), [#155](https://github.com/agentscope-ai/CoPaw/issues/155) | Kimi 2.5/Qwen thinking mode → 400 error (`reasoning_content` missing) | No fix PR; affects multiple Chinese model users |
| 🟡 **High** | [#398](https://github.com/agentscope-ai/CoPaw/issues/398) | Custom model config loss on v0.0.4 upgrade | Closed but migration pain persists |
| 🟡 **High** | [#121](https://github.com/agentscope-ai/CoPaw/issues/121), [#236](https://github.com/agentscope-ai/CoPaw/issues/236) | Docker restart → model/env data loss | Partially addressed by #345 |
| 🟡 **High** | [#441](https://github.com/agentscope-ai/CoPaw/issues/441) | `InternalServerError` after first successful message | **Fix PR [#452](https://github.com/agentscope-ai/CoPaw/pull/452)** open |
| 🟡 **High** | [#420](https://github.com/agentscope-ai/CoPaw/issues/420) | DingTalk replies to wrong (previous) message | No fix PR |
| 🟡 **High** | [#375](https://github.com/agentscope-ai/CoPaw/issues/375) | Scheduled task messages not pushing to Feishu | No fix PR |
| 🟢 **Medium** | [#437](https://github.com/agentscope-ai/CoPaw/issues/437) | NumPy 1.x vs 2.x compatibility warning | No fix PR |
| 🟢 **Medium** | [#423](https://github.com/agentscope-ai/CoPaw/issues/423) | GGUF model loading failure (Qwen3-VL) | No fix PR |
| 🟢 **Medium** | [#445](https://github.com/agentscope-ai/CoPaw/issues/445) | qwen3-32b-awq tool call failures | No fix PR |

**Pattern**: **Reasoning/thinking mode incompatibility** is a systemic issue affecting Moonshot (Kimi) and Alibaba (Qwen) models — likely requires message format handling updates.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signal Strength | Likelihood in v0.0.5 |
|---------|-------|-----------------|----------------------|
| **Vector-based ReMe memory** | [#418](https://github.com/agentscope-ai/CoPaw/issues/418) | Strong — PR [#450](https://github.com/agentscope-ai/CoPaw/pull/450) in progress | High |
| **Per-user memory/skill isolation** | [#352](https://github.com/agentscope-ai/CoPaw/issues/352), [#296](https://github.com/agentscope-ai/CoPaw/issues/296) | Strong — multi-tenant SaaS need | Medium |
| **Multi-agent collaboration** | [#274](https://github.com/agentscope-ai/CoPaw/issues/274) | Moderate — compared to OpenClaw | Medium |
| **Built-in skills/MCPs** | [#280](https://github.com/agentscope-ai/CoPaw/issues/280) | Moderate — maintainer-initiated discussion | Medium |
| **Hide thinking process UI option** | [#101](https://github.com/agentscope-ai/CoPaw/issues/101) | Moderate — UX polish | Medium |
| **Task routing with tier-based model selection** | [#99](https://github.com/agentscope-ai/CoPaw/pull/99) | Strong — PR open since Feb 28 | High |
| **Anthropic provider support** | [#408](https://github.com/agentscope-ai/CoPaw/pull/408) | Strong — PR open | High |

**Official Roadmap**: Published via [#430](https://github.com/agentscope-ai/CoPaw/issues/430) and [#439](https://github.com/agentscope-ai/CoPaw/pull/439) — actively seeking contributors.

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Category | Quote | Frequency |
|----------|-------|-----------|
| **Execution reliability** | *"It promises readily, only replies 'received', but doesn't work"* | High |
| | *"Tasks stop halfway — 'let me try Baidu search' then silence"* | High |
| **Setup friction** | *"Installed CoPaw like a waste — 163 email infinite loop, QQ docs incomprehensible"* | Medium |
| **Data loss** | *"After Docker restart, custom models and env vars all lost"* | Medium |
| **Model compatibility** | *"Kimi 2.5 always errors — how to disable thinking mode?"* | Medium |
| **Documentation** | *"Are these docs written for users? Feels like..."* | Medium |

### Use Cases Attempted
- Email automation (163, QQ)
- Search + research workflows
- Multi-channel deployment (DingTalk, Feishu, Telegram)
- Local model deployment (Ollama, GGUF)

### Satisfaction Signals
- **Positive**: Active maintainer response, rapid releases, feature-rich channel support
- **Negative**: "Half-finished" perception, agent "lying flat" (躺平) behavior, configuration fragility

---

## 8. Backlog Watch

| Issue/PR | Age | Problem | Action Needed |
|----------|-----|---------|---------------|
| [#99](https://github.com/agentscope-ai/CoPaw/pull/99) Task routing | 3+ days | Significant feature PR unmerged | Review/merge decision |
| [#156](https://github.com/agentscope-ai/CoPaw/pull/156) Custom provider model management | 3+ days | Bug fix for provider registry | Review/merge |
| [#242](https://github.com/agentscope-ai/CoPaw/pull/242) Nested markdown workspace | 2+ days | UX improvement for workspace | Review |
| [#302](https://github.com/agentscope-ai/CoPaw/issues/302) Setup frustration | Active | Onboarding documentation | Dedicated guide needed |
| [#434](https://github.com/agentscope-ai/CoPaw/issues/434) Agent execution loop | Active | Core reliability — no assignee | Priority investigation |

---

**Project Health Assessment**: 🟡 **Moderate-High Activity, Moderate Stability Risk**

- ✅ Strong release cadence, expanding platform support
- ✅ Responsive maintainers, community contributions growing
- ⚠️ Critical execution reliability issues need immediate attention
- ⚠️ Chinese model ecosystem compatibility gaps (reasoning modes)
- ⚠️ Configuration/data persistence needs hardening

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-03

## 1. Today's Overview

ZeptoClaw shows **high development velocity** with 9 issues and 3 PRs updated in the last 24 hours, all driven by the core maintainer @qhkm. The project is in an active feature expansion phase with 6 new capability proposals filed simultaneously, spanning safety infrastructure (taint tracking, audit trails, loop detection), interoperability (OpenAI-compatible API, MCP server mode), and configuration sandboxing. No community comments or reactions suggest either early-stage development focus or limited external contributor engagement. The maintainer is systematically closing user-reported issues (SearXNG search, Feishu integration bug) while pushing ambitious architectural features. Project health appears strong technically but may benefit from community building.

---

## 2. Releases

**No new releases.** Latest release remains unspecified.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Impact |
|:---|:---|:---|
| [#214](https://github.com/qhkm/zeptoclaw/pull/214) | **SearXNG web search provider** — Adds third search provider with explicit `provider` field, `api_url` for self-hosting, auto-detection fallback | Closes [#196](https://github.com/qhkm/zeptoclaw/issues/196); enables privacy-focused, unlimited search without API keys |
| [#215](https://github.com/qhkm/zeptoclaw/pull/215) | **Feishu/Lark ID type fix** — Detects ID prefix (`oc_` → `chat_id`) instead of hardcoding `receive_id_type=open_id` | Fixes production Feishu integration failure [#213](https://github.com/qhkm/zeptoclaw/issues/213) |

### Open PR Awaiting Review

| PR | Description | Status |
|:---|:---|:---|
| [#216](https://github.com/qhkm/zeptoclaw/pull/216) | **Show configured provider models in `/model list`** — Surfaces user-configured models beyond hardcoded `KNOWN_MODELS` | Open; improves UX for custom model configurations |

---

## 4. Community Hot Topics

**No active community discussion detected.** All 9 issues show 0-1 comments, all from @qhkm. The "hottest" items by engagement:

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#212](https://github.com/qhkm/zeptoclaw/issues/212) | 1 comment (self-closed) | Fulfilled community request from @superhero75 for SearXNG |
| [#213](https://github.com/qhkm/zeptoclaw/issues/213) | 0 comments, rapid fix | Production bug report from @LIKE2000-ART, resolved in ~24h |

**Underlying need:** Users want **self-hosted, privacy-preserving alternatives** (SearXNG) and **enterprise messaging integrations** (Feishu/Lark). The maintainer's rapid response suggests commitment to production reliability.

---

## 5. Bugs & Stability

| Issue | Severity | Status | Fix PR |
|:---|:---|:---|:---|
| [#213](https://github.com/qhkm/zeptoclaw/issues/213) — Feishu `open_id cross app` error | **High** (production integration failure) | **Fixed** via [#215](https://github.com/qhkm/zeptoclaw/pull/215) | ✅ Merged |

**No new regressions or crashes reported today.** The Feishu fix addresses a critical mismatch between Lark's ID type system and ZeptoClaw's assumptions—suggests need for broader ID-type abstraction testing across channels.

---

## 6. Feature Requests & Roadmap Signals

**6 major features proposed by maintainer today**, indicating strategic direction:

| Issue | Priority | Area | Prediction for Next Release |
|:---|:---|:---|:---|
| [#218](https://github.com/qhkm/zeptoclaw/issues/218) OpenAI-compatible API | P2-high | Interoperability | **Likely v0.x** — Massive adoption unlock, relatively scoped endpoint implementation |
| [#217](https://github.com/qhkm/zeptoclaw/issues/217) MCP server mode | P2-high | Interoperability | **Likely v0.x** — Complements existing MCP client; dual-mode architecture strengthens ecosystem position |
| [#220](https://github.com/qhkm/zeptoclaw/issues/220) Upgraded loop guard | P2-high | Safety | **Medium-term** — Critical for UX, but complex multi-layer detection system |
| [#219](https://github.com/qhkm/zeptoclaw/issues/219) Taint tracking | P2-high | Safety | **Longer-term** — Sophisticated type-system feature, significant engineering investment |
| [#221](https://github.com/qhkm/zeptoclaw/issues/221) Merkle audit trail | P3-normal | Safety/Compliance | **Enterprise roadmap** — Differentiator for regulated environments |
| [#222](https://github.com/qhkm/zeptoclaw/issues/222) Per-template capability sandbox | P3-normal | Config/Security | **Medium-term** — Enables template marketplace, security guarantees |

**Strategic pattern:** ZeptoClaw is positioning as **"safe-by-default" agent infrastructure** with interoperability bridges to existing ecosystems (OpenAI SDK, MCP). The safety features (taint tracking, audit trails, sandboxing) suggest enterprise/compliance targeting.

---

## 7. User Feedback Summary

**Explicit user pain points addressed:**

| User | Issue | Need | Resolution |
|:---|:---|:---|:---|
| @superhero75 | [#196](https://github.com/qhkm/zeptoclaw/issues/196) | Free, unlimited, self-hosted search | ✅ SearXNG integration delivered |
| @LIKE2000-ART | [#213](https://github.com/qhkm/zeptoclaw/issues/213) | Working Feishu enterprise integration | ✅ Fixed in 24h |

**Inferred needs from maintainer proposals:**
- **Reliability:** Loop detection, outcome-aware blocking ([#220](https://github.com/qhkm/zeptoclaw/issues/220))
- **Trust/Verifiability:** Tamper-evident audit trails ([#221](https://github.com/qhkm/zeptoclaw/issues/221))
- **Security:** Data-flow-aware protection beyond pattern-matching ([#219](https://github.com/qhkm/zeptoclaw/issues/219))
- **Adoption friction:** Drop-in OpenAI replacement ([#218](https://github.com/qhkm/zeptoclaw/issues/218))

**Satisfaction signal:** Rapid issue closure (24-72h). **Dissatisfaction risk:** No community voting/commenting mechanism visible—unclear if proposals reflect user demand or maintainer vision.

---

## 8. Backlog Watch

**No stale critical items detected** — all recent activity is fresh. However, watch patterns:

| Pattern | Concern | Recommendation |
|:---|:---|:---|
| 100% maintainer-driven issues | Single point of failure, potential misalignment with user needs | Add "request for comments" labels, encourage community 👍 voting |
| Zero reactions on ambitious safety features | Unclear market validation for complex investments | Prototype #218 or #217 first to build user base, then advanced safety |
| No release in tracking period | Unclear stability commitment | Consider semantic versioning cadence, even for pre-1.0 |

**Items to monitor:** If [#216](https://github.com/qhkm/zeptoclaw/pull/216) remains open >7 days, it may indicate review bandwidth constraints or architectural uncertainty about provider registry design.

---

*Digest generated from GitHub activity 2026-03-02 to 2026-03-03. Data source: github.com/qhkm/zeptoclaw*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-03-03

## 1. Today's Overview

EasyClaw shows **moderate community activity** with 4 issues processed in the last 24 hours (3 closed, 1 active). The project released two consecutive patch versions (v1.5.14 and v1.5.15) within a short window, suggesting rapid iteration—possibly hotfixes. No pull request activity indicates either maintainer-driven development or a bottleneck in external contributions. The open issue regarding Feishu integration has accumulated 11 comments, signaling an unresolved blocker for enterprise users. Overall project health appears **stable but reactive**, with configuration persistence emerging as a friction point.

---

## 2. Releases

| Version | Date | Notes |
|---------|------|-------|
| **v1.5.15** | 2026-03-03 | Documentation update: macOS Gatekeeper troubleshooting guide (unsigned app workaround) |
| **v1.5.14** | 2026-03-02 | Same documentation addition as v1.5.15 |

**Analysis:** Both releases are **documentation-only patches** addressing macOS installation friction. No functional changes detected. The rapid successive releases (v1.5.14 → v1.5.15 within ~24h) suggest either a packaging correction or release pipeline adjustment. Notably, v1.5.14 introduced a **regression** (see Bugs & Stability).

**Migration Note:** Windows users upgrading from v1.5.13 → v1.5.14 via installer experienced **complete configuration reset** — see Issue #6 below.

---

## 3. Project Progress

**No PRs merged or closed today.**

Progress appears **issue-driven rather than PR-driven**. Three issues were closed:
- [#3](https://github.com/gaoyangz77/easyclaw/issues/3): Model switching and multi-conversation limitations (closed without clear resolution)
- [#4](https://github.com/gaoyangz77/easyclaw/issues/4): Task planning and chat history feature request (closed, status unclear)
- [#6](https://github.com/gaoyangz77/easyclaw/issues/6): Configuration reset regression (closed after maintainer response)

**Observation:** Closure pattern suggests maintainer may be batch-resolving issues without corresponding code transparency via PRs.

---

## 4. Community Hot Topics

| Issue | Activity | Analysis |
|-------|----------|----------|
| **[#5 — 连接飞书不成功](https://github.com/gaoyangz77/easyclaw/issues/5)** | 11 comments, OPEN | **Critical integration blocker**. User reports Feishu (Lark) whitelist configuration loop—adding whitelist doesn't resolve repeated prompts. |

**Underlying Need:** Enterprise/team deployment capability. Feishu is China's dominant workplace platform; this friction blocks B2B adoption. The 11-comment thread without resolution suggests either:
- Documentation gap in Feishu app configuration
- Actual bug in OAuth/webhook handling
- Need for clearer error messaging

**Signal:** Enterprise integration reliability is a **growth bottleneck**.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|----------|-------|--------|---------------|
| **HIGH** | [#6](https://github.com/gaoyangz77/easyclaw/issues/6): Configuration reset on Windows upgrade (1.5.13→1.5.14) | CLOSED | ⚠️ **Workaround only** — maintainer advised backup before upgrade; no code fix confirmed |
| MEDIUM | [#5](https://github.com/gaoyangz77/easyclaw/issues/5): Feishu connection failure | OPEN | ❌ No fix |
| LOW | [#3](https://github.com/gaoyangz77/easyclaw/issues/3): Model switching UI limitations | CLOSED | ❌ No fix (closed as feedback noted) |

**Regression Alert:** Issue #6 represents a **data loss event** for users — complete reset of "memory and configuration." This is a **trust-erosion bug** for a personal AI assistant where user history is core value.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version |
|---------|--------|---------------------------|
| **Task planning / scheduling** | [#4](https://github.com/gaoyangz77/easyclaw/issues/4) | MEDIUM — explicitly praised as "most suitable" version, user committed to team promotion |
| **Chat history/conversation records** | [#4](https://github.com/gaoyangz77/easyclaw/issues/4) | HIGH — foundational feature gap; competitor standard |
| **Multi-conversation support** | [#3](https://github.com/gaoyangz77/easyclaw/issues/3) | MEDIUM — architectural change |
| **In-conversation model switching** | [#3](https://github.com/gaoyangz77/easyclaw/issues/3) | MEDIUM — UI/UX enhancement |

**Prediction:** Chat history persistence is the strongest candidate for v1.6.0 given it's both requested and would mitigate the configuration reset pain point.

---

## 7. User Feedback Summary

| Aspect | Sentiment | Evidence |
|--------|-----------|----------|
| **Core UX** | ⭐ Positive | "最和我心意的" (most suitable version among many tried) — [#4](https://github.com/gaoyangz77/easyclaw/issues/4) |
| **Upgrade reliability** | ⭐⭐ Negative | Data loss on upgrade, breaking user trust — [#6](https://github.com/gaoyangz77/easyclaw/issues/6) |
| **Enterprise readiness** | ⭐⭐ Negative | Feishu integration blocker — [#5](https://github.com/gaoyangz77/easyclaw/issues/5) |
| **Feature completeness** | Mixed | Praise for current UX, but clear gaps in history/scheduling |

**Pain Point Cluster:** Users want EasyClaw as a **persistent, reliable daily assistant** — but upgrade fragility and missing history features undermine this positioning.

---

## 8. Backlog Watch

| Issue | Days Open | Risk | Action Needed |
|-------|-----------|------|---------------|
| [#5](https://github.com/gaoyangz77/easyclaw/issues/5) | 1 day (but 11 comments) | HIGH — blocks enterprise adoption | Maintainer deep-dive on Feishu webhook config; possible documentation + code fix |
| — | — | — | No other long-unanswered items detected |

**Note:** Project appears young (issues numbered 3-6). No chronic backlog yet, but rapid issue closure without PR linkage warrants monitoring for **technical debt accumulation**.

---

*Digest generated from GitHub data as of 2026-03-03. Project: [gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*