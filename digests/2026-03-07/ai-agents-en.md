# OpenClaw Ecosystem Digest 2026-03-07

> Issues: 500 | PRs: 500 | Projects covered: 11 | Generated: 2026-03-07 00:07 UTC

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

# OpenClaw Project Digest — 2026-03-07

---

## 1. Today's Overview

OpenClaw shows **extremely high development velocity** with 500 issues and 500 PRs updated in the last 24 hours, though no new release was cut today. The project is in active **stabilization mode** (per [#5799](https://github.com/openclaw/openclaw/issues/5799)), with maintainers focusing on bug fixes over new features. The 354 merged/closed PRs versus 146 open suggests aggressive triage. Critical regressions in v2026.3.2 are dominating user reports, particularly around **tool availability failures** and **filesystem access loss**. The community remains highly engaged with 58 👍 on the long-standing Linux/Windows desktop apps request.

---

## 2. Releases

**No new releases today.**  
The latest available version remains **v2026.3.2** (released 2026-03-04), which has introduced significant regressions being actively patched.

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected Highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#38306](https://github.com/openclaw/openclaw/pull/38306) | @vincentkoc | Hardens Venice discovery limits and fixes tool support wiring | Fixes HTTP 400 errors on Venice models |
| [#34977](https://github.com/openclaw/openclaw/pull/34977) | @sp-hk2ldn | Prevents `totalTokens` crash when assistant usage is missing | Stability fix for agent JSON output |
| [#33065](https://github.com/openclaw/openclaw/pull/33065) | @openperf | Disables global model fallback when `heartbeat.model` is set | Cost optimization fix |
| [#26331](https://github.com/openclaw/openclaw/pull/26331) | @widingmarcus-cyber | Treats unconfigured-owner sessions as owner for `ownerOnly` tools | Fixes single-user setup auth issues |

### Active Development Areas
- **Signal integration**: Bidirectional quote-reply support ([#36630](https://github.com/openclaw/openclaw/pull/36630))
- **Sanitization hardening**: Multi-stage input validation pipeline ([#35427](https://github.com/openclaw/openclaw/pull/35427))
- **Web search expansion**: SearXNG ([#28519](https://github.com/openclaw/openclaw/pull/28519)) and Exa ([#32529](https://github.com/openclaw/openclaw/pull/32529)) providers
- **WhatsApp reliability**: QR login 100% failure fix for Baileys v7 ([#37801](https://github.com/openclaw/openclaw/pull/37801))

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | 👍 | Topic | Underlying Need |
|:---|:---:|:---:|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) — Linux/Windows Clawdbot Apps | 33 | 58 | **Cross-platform desktop parity** | Users want native desktop experiences beyond macOS; current gap forces workarounds |
| [#7631](https://github.com/openclaw/openclaw/issues/7631) — Windows plugin install `spawn EINVAL` | 22 | 2 | Windows Node.js spawn issues | Windows dev environment friction; path/quoting bugs in npm execution |
| [#34810](https://github.com/openclaw/openclaw/issues/34810) — Filesystem tools suddenly lost | 21 | 7 | **Critical tool availability regression** | Reliability of core agent capabilities; trust in production deployments |
| [#32245](https://github.com/openclaw/openclaw/issues/32245) — Vertex embedded runs fail | 18 | 2 | Google Vertex integration | Enterprise GCP users need stable model routing |
| [#36399](https://github.com/openclaw/openclaw/issues/36399) — 60s hangs with OAuth vs. 6x faster proxy | 17 | 0 | **Rate limit handling transparency** | Users need visibility into retry logic; hardcoded delays hurt UX |

### Key Insight
The [#75](https://github.com/openclaw/openclaw/issues/75) desktop apps request has remained open since 2026-01-01 with sustained engagement, indicating **platform expansion is the #1 user demand**. Meanwhile, v2026.3.2 regressions are causing acute frustration.

---

## 5. Bugs & Stability

### Critical/Severe (Production-Impacting)

| Issue | Severity | Status | Fix PR? | Description |
|:---|:---|:---|:---|:---|
| [#34810](https://github.com/openclaw/openclaw/issues/34810) | 🔴 **Critical** | Open | No | Agent suddenly loses all filesystem/exec tools; "no file-writing tools available" |
| [#32991](https://github.com/openclaw/openclaw/issues/32991) | 🔴 **Critical** | Open | No | All tools return "Tool not found" after 2026.3.2 update |
| [#33419](https://github.com/openclaw/openclaw/issues/33419) | 🔴 **Critical** | Open | No | Agent cannot access files — fresh installs broken |
| [#36994](https://github.com/openclaw/openclaw/issues/36994) | 🔴 **Critical** | Open | No | Exec and tools "keep breaking" after first run |
| [#33225](https://github.com/openclaw/openclaw/issues/33225) | 🟡 **High** | Open | No | Non-interactive onboarded agents lack file-writing tools |
| [#34052](https://github.com/openclaw/openclaw/issues/34052) | 🟡 **High** | Open | No | Health monitor restarts ALL channels with `stale-socket` |

### Pattern Analysis
**v2026.3.2 introduced systemic tool registration failures**. Multiple distinct symptoms (filesystem loss, "Tool not found", exec breaking) suggest a **shared root cause in tool schema injection or plugin loading**. The [#35077](https://github.com/openclaw/openclaw/issues/35077) closed rant ("You made openclaw a broken disaster") reflects user sentiment.

### Fixed Today
- [#38052](https://github.com/openclaw/openclaw/issues/38052) — `openclaw gateway install` Linux failure (systemd service check)
- [#34292](https://github.com/openclaw/openclaw/issues/34292) — SecretRef false positive for Telegram botToken

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Linux/Windows desktop apps** | [#75](https://github.com/openclaw/openclaw/issues/75) | Medium | High demand (58 👍), but stabilization mode may delay |
| **Prebuilt Android APK** | [#9443](https://github.com/openclaw/openclaw/issues/9443) | Medium | Companion app exists but requires manual build |
| **LLM input/output modifying hooks** | [#20416](https://github.com/openclaw/openclaw/issues/20416) | High | Foundation for PII redaction, guardrails; enterprise need |
| **Execution guardrails** | [#6823](https://github.com/openclaw/openclaw/issues/6823) | Medium | Safety-critical; human-in-the-loop escalation |
| **Memory v2: associative traversal** | [#28930](https://github.com/openclaw/openclaw/issues/28930) | Low | Complex architectural change; stabilization priority |
| **SearXNG/Exa search providers** | [#28519](https://github.com/openclaw/openclaw/pull/28519), [#32529](https://github.com/openclaw/openclaw/pull/32529) | **High** | PRs open, self-hosted focus aligns with project ethos |
| **OpenDiscuz skill** | [#37762](https://github.com/openclaw/openclaw/pull/37762) | High | Community skill, ready for merge |

---

## 7. User Feedback Summary

### Pain Points 😤

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **"Nothing works" regressions** | [#35077](https://github.com/openclaw/openclaw/issues/35077), [#34810](https://github.com/openclaw/openclaw/issues/34810), [#32991](https://github.com/openclaw/openclaw/issues/32991) | Critical |
| **Tool availability unreliable** | [#36994](https://github.com/openclaw/openclaw/issues/36994), [#33225](https://github.com/openclaw/openclaw/issues/33225), [#33419](https://github.com/openclaw/openclaw/issues/33419) | Critical |
| **Platform gaps (Linux/Windows)** | [#75](https://github.com/openclaw/openclaw/issues/75), [#7631](https://github.com/openclaw/openclaw/issues/7631) | High |
| **Rate limit opacity** | [#36399](https://github.com/openclaw/openclaw/issues/36399), [#32828](https://github.com/openclaw/openclaw/issues/32828) | Medium |
| **Telegram/Discord message duplication** | [#33453](https://github.com/openclaw/openclaw/issues/33453), [#30316](https://github.com/openclaw/openclaw/issues/30316), [#22780](https://github.com/openclaw/openclaw/issues/22780) | Medium |

### Use Cases & Satisfaction 😊

- **Raspberry Pi 5 continuous operation** ([#28930](https://github.com/openclaw/openclaw/issues/28930)) — AI agent "Brian" running 11 days, highlighting memory management needs
- **Multi-account enterprise setups** — Discord, Telegram, Slack orchestration (though health monitor issues in [#34052](https://github.com/openclaw/openclaw/issues/34052))
- **Self-hosted API proxy preference** — Users bypassing native OAuth for performance ([#36399](https://github.com/openclaw/openclaw/issues/36399))

---

## 8. Backlog Watch

### Stale Issues Needing Maintainer Attention

| Issue | Age | Comments | Risk |
|:---|:---|:---:|:---|
| [#2868](https://github.com/openclaw/openclaw/issues/2868) — Unexpected high token consumption (Claude) | ~5 weeks | 11 | Cost management; user confusion |
| [#4686](https://github.com/openclaw/openclaw/issues/4686) — WhatsApp linking stuck at "logging in" | ~5 weeks | 14 | **18 👍** — high user impact; may be fixed by [#37801](https://github.com/openclaw/openclaw/pull/37801) |
| [#16055](https://github.com/openclaw/openclaw/issues/16055) — Telegram multi-bot bottleneck | ~3 weeks | 6 | Scalability concern for power users |
| [#19193](https://github.com/openclaw/openclaw/issues/19193) — Telegram partial streaming text loss | ~2.5 weeks | 6 | UX degradation in streaming mode |
| [#20416](https://github.com/openclaw/openclaw/issues/20416) — LLM hook middleware pattern | ~2.5 weeks | 13 | **Blocked on architecture decision** — high enterprise value |

### PRs Ready for Review

| PR | Size | Description |
|:---|:---|:---|
| [#35427](https://github.com/openclaw/openclaw/pull/35427) | XL | Sanitization hardening — security-critical |
| [#36630](https://github.com/openclaw/openclaw/pull/36630) | XL | Signal bidirectional quote-reply |
| [#28519](https://github.com/openclaw/openclaw/pull/28519) | M | SearXNG search provider — community requested |

---

## Project Health Assessment

| Metric | Status | Notes |
|:---|:---|:---|
| **Velocity** | 🟢 Very High | 500 PRs/issues daily |
| **Stability** | 🔴 Concerning | v2026.3.2 regressions widespread |
| **Community Engagement** | 🟢 Strong | Sustained 👍 and detailed reports |
| **Maintainer Responsiveness** | 🟡 Moderate | Stabilization mode may slow feature PRs |
| **Release Cadence** | 🟡 Paused | No release today; likely hotfix needed |

**Recommendation**: Prioritize root-cause analysis for v2026.3.2 tool registration failures before additional feature releases. Consider emergency patch release (v2026.3.3) addressing [#34810](https://github.com/openclaw/openclaw/issues/34810), [#32991](https://github.com/openclaw/openclaw/issues/32991), [#33419](https://github.com/openclaw/openclaw/issues/33419) cluster.

---

## Cross-Ecosystem Comparison

# Cross-Project Analysis: Personal AI Agent Open-Source Ecosystem
*Report Date: 2026-03-07*

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source ecosystem is experiencing **intense development velocity** across 10+ active projects, with daily PR/issue counts frequently exceeding 50+ for leading projects. The landscape is bifurcating between **stabilization-focused mature projects** (OpenClaw, PicoClaw) addressing production reliability crises and **rapid feature expansion projects** (NanoBot, NanoClaw, IronClaw) aggressively pursuing multi-channel, multi-modal, and enterprise integration capabilities. A critical inflection point is emerging: **tool registration and session state management** have become the dominant failure modes, with multiple projects simultaneously experiencing systemic regressions in core agent functionality. The ecosystem shows strong regional diversification, with Chinese-market integrations (Feishu, DingTalk, ModelScope) and security-hardened deployments (ZeptoClaw) emerging as distinct competitive vectors.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Assessment |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | No release; v2026.3.2 regressed | 🔴 Concerning | Stabilization mode; critical tool failures |
| **NanoBot** | 26 | 61 | No release; v0.1.4.post3 | 🟡 B+ | Exceptional velocity; session fragility debt |
| **ZeroClaw** | 18 | 50 | v0.1.8 broken (missing binaries) | 🔴 Unstable | Release pipeline failure; 3 S0 issues |
| **PicoClaw** | 18 | 113 | No release; v0.2.0 (Feb 28) | 🟡 Stable | High PR backlog (74 open); review bottleneck |
| **NanoClaw** | 14 | 50 | No release | 🟢 Strong | Security focus; observability stack complete |
| **IronClaw** | 32 | 50 | **v0.16.1 hotfix** ✅ | 🟢 Recovering | Rapid regression response; WASM stabilization |
| **LobsterAI** | 15 new, 0 closed | 8 | **v0.2.0 released** | 🟡 Volatile | Data loss regression; Windows instability |
| **TinyClaw** | 1 | 4 | No release; v0.0.9 | 🟡 Stable | Feature-heavy queue; security PR pending |
| **CoPaw** | 50 | 50 | No release; v0.0.5 | 🟡 Stabilizing | Critical memory/context bugs; high contributor flow |
| **ZeptoClaw** | 6 | 11 | No release | 🟢 Strong | Security-hardening mode; responsive maintainers |
| **EasyClaw** | 3 | 0 | **v1.6.0/1.6.1** ✅ | 🟢 Maintenance | Documentation-only releases; low velocity |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw Position | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily | 2-10x higher volume than all peers |
| **Cross-platform parity** | macOS native; Linux/Windows demanded (#75, 58 👍) | NanoBot, LobsterAI stronger on Windows; IronClaw catching up |
| **Provider ecosystem** | Venice, SearXNG, Exa integrations | Broader than most; NanoBot matches on diversity |
| **Community engagement** | Sustained 2-month demand for desktop apps | Higher 👍/comment ratio than peers |

### Technical Approach Differences
| Aspect | OpenClaw | Peers |
|:---|:---|:---|
| **Core runtime** | Node.js/TypeScript with plugin architecture | Rust (ZeroClaw, ZeptoClaw), Go (PicoClaw), Python (NanoBot, IronClaw WASM) |
| **State management** | Session-based with tool registry | IronClaw: unified thread model; NanoClaw: per-thread isolation (PR #152) |
| **Security model** | Plugin sandboxing | ZeptoClaw: template capability sandbox (#222); IronClaw: WASM WIT versioning |
| **Distribution** | npm/gateway install | Binary releases (ZeroClaw broken), Docker (all), desktop apps (none except OpenClaw macOS) |

### Community Size Comparison
OpenClaw operates at **3-10x the issue/PR volume** of any peer, suggesting either: (a) largest user base, (b) highest friction/bug rate, or (c) most granular issue tracking. The sustained 58 👍 on #75 (desktop apps) over 2 months exceeds total engagement on most peer feature requests, indicating **genuine mass-market demand** rather than maintainer-driven development.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Tool registration reliability** | OpenClaw, NanoBot, CoPaw, LobsterAI | OpenClaw: "Tool not found" regressions; NanoBot: session corruption on tool call ID overflow; CoPaw: argument parsing failures; LobsterAI: MCP integration gaps |
| **Session state isolation** | NanoBot, NanoClaw, IronClaw, CoPaw, TinyClaw | NanoBot: 64-char limit overflow; NanoClaw: per-thread isolation PR; IronClaw: unified thread model; CoPaw: per-user memory isolation request; TinyClaw: session UUID architecture |
| **Multi-channel parity** | All 10 projects | Signal (OpenClaw #36630, NanoClaw #784), WhatsApp media (ZeroClaw #2918), Telegram streaming (PicoClaw #1101, NanoBot #1599), Feishu/DingTalk (CoPaw, ZeptoClaw, LobsterAI) |
| **Local/edge deployment** | NanoBot, PicoClaw, LobsterAI, ZeroClaw | Ollama configuration (#75 NanoBot, #1161 PicoClaw, #174 LobsterAI), Docker + local LLaMA (ZeroClaw #2924), llama.cpp timeout configurability |
| **Observability/ops** | NanoClaw, IronClaw, ZeptoClaw | NanoClaw: 4-part stack completed; IronClaw: E2E extension tests; ZeptoClaw: token tracking in containers |
| **Security hardening** | ZeptoClaw, NanoClaw, IronClaw, TinyClaw | SSRF protection (ZeptoClaw #260, #267, #271-274), capability sandbox (#222), secret scrubbing (NanoClaw #781, TinyClaw #154), WASM WIT versioning (IronClaw) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiation | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Reference implementation; ecosystem breadth | Developers, power users, macOS-first | Plugin-based Node.js; highest integration count |
| **NanoBot** | Rapid multi-modal expansion; Chinese market | International users, creative workflows | Python; Imagen 4, Gemini, voice synthesis |
| **ZeroClaw** | iMessage/BlueBubbles parity; Rust performance | Apple ecosystem, self-hosters | Rust; Baileys/WhatsApp Web investment |
| **PicoClaw** | Embedded/IoT focus; hardware integration | Edge deployers, Sipeed hardware users | Go; I2C/SPI tool optimization |
| **NanoClaw** | Security-first; container hardening | Enterprise, security-conscious ops | TypeScript; capability-based permissions |
| **IronClaw** | WASM extension ecosystem; NEAR integration | Web3-adjacent, extensibility-focused | Rust + WASM; declarative provider registry |
| **LobsterAI** | Skill Store marketplace; NetEase backing | Chinese developers, plugin consumers | Electron/Node.js; MCP protocol adoption |
| **TinyClaw** | Minimal footprint; Claude Code integration | Individual developers, fast setup | TypeScript; session isolation experiments |
| **CoPaw** | Multi-agent orchestration; DingTalk/Feishu | SMBs, team collaboration | Python; daemon mode, built-in skills debate |
| **ZeptoClaw** | Template sandbox security; Rust safety | Security researchers, multi-tenant deployers | Rust; per-template capability declarations |
| **EasyClaw** | Simplified configuration; Bailian integration | Alibaba Cloud users, low-friction seekers | TypeScript; config UI over code |

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|:---|:---|:---|
| **🔥 Hyper-velocity** | OpenClaw, NanoBot, PicoClaw | 50-500 daily PRs/issues; scaling challenges; review bottlenecks |
| **⚡ Rapid iteration** | IronClaw, CoPaw, NanoClaw, ZeroClaw | 30-50 daily; feature expansion with stability tradeoffs |
| **🚀 Feature accumulation** | TinyClaw, ZeptoClaw | 4-11 daily; architectural changes pending release |
| **🔧 Maintenance mode** | LobsterAI, EasyClaw | 3-8 daily; reactive hotfixing; lower contributor volume |

### Stabilization vs. Expansion Posture

| Stabilizing (Bug Fix Focus) | Expanding (Feature Focus) |
|:---|:---|
| OpenClaw (v2026.3.2 regression firefight) | NanoBot (multi-modal, MQTT, Mem0) |
| IronClaw (WASM hotfix, memory hygiene) | NanoClaw (Signal, PDF vision, iCloud) |
| LobsterAI (v0.2.0 damage control) | CoPaw (daemon mode, multi-model routing) |
| EasyClaw (macOS onboarding) | ZeptoClaw (template sandbox architecture) |
| | ZeroClaw (BlueBubbles parity despite S0 issues) |
| | PicoClaw (Swarm Mode, IRC, streaming) |
| | TinyClaw (multi-agent teams PR #163) |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **Session state is the new memory management** | 4+ projects with critical session bugs; IronClaw unified thread model, NanoClaw per-thread isolation, CoPaw context corruption | Design session architecture for provider-agnostic ID formats, size limits, and graceful degradation |
| **Tool registration fragility dominates reliability** | OpenClaw's "Tool not found" cluster; NanoBot's tool call ID overflow; CoPaw's argument parsing | Implement defensive tool schema validation with graceful fallbacks; avoid dynamic tool injection at runtime |
| **Security is shifting left to template/skill declarations** | ZeptoClaw #222 capability sandbox; NanoClaw #779 security manifests; IronClaw WASM WIT | Adopt declarative permission models before deployment; expect "security-as-code" to become standard |
| **Local-first deployment is non-negotiable** | Ollama issues in 4+ projects; ZeroClaw Docker+LLaMA; LobsterAI cost optimization focus | First-class local model support (not bolt-on); clear timeout/ resource configuration; edge hardware optimization |
| **Multi-channel parity is table stakes** | Signal, WhatsApp media, Telegram streaming all in active development | Abstract channel interface early; avoid channel-specific hacks that block parity |
| **Observability gaps block production** | NanoClaw's 4-part stack; IronClaw execution visibility requests; ZeptoClaw token tracking | Build metrics, status APIs, and cost tracking before users ask; treat as core feature |
| **Regional integration is competitive moat** | Feishu/DingTalk in 4 projects; Chinese provider support (SiliconFlow, ModelScope, Bailian) | Internationalization includes cloud provider and messaging platform diversity |
| **Release quality > release velocity** | ZeroClaw v0.1.8 broken; OpenClaw v2026.3.2 regressions; LobsterAI data loss | Invest in CI/CD artifact verification, migration testing, and staged rollbacks |

### Strategic Implication

The ecosystem is **transitioning from "demo-ready" to "production-required."** Projects winning in 2026 Q2 will prioritize: (1) **session/tool reliability over new features**, (2) **declarative security models**, (3) **first-class local/edge deployment**, and (4) **operational observability**. OpenClaw's scale advantage is currently offset by stability crises; smaller projects (IronClaw, ZeptoClaw, NanoClaw) demonstrating rapid regression response and architectural foresight are positioned to capture enterprise adoption.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-07

## 1. Today's Overview

NanoBot shows **exceptionally high development velocity** with 61 PRs and 26 issues updated in the last 24 hours, indicating an active, rapidly evolving codebase. The project is experiencing growing pains typical of fast-scaling AI agent platforms: provider fragmentation (Codex OAuth, OpenAI, Azure, Moonshot, Ollama), multi-channel complexity (Feishu, Discord, Telegram, WhatsApp, MQTT), and memory/session management edge cases. No new release was cut today despite significant merged features, suggesting maintainers may be accumulating changes for a larger version bump. The community is increasingly international, with substantial Chinese-language participation driving Feishu-related improvements and localization demands.

---

## 2. Releases

**None** — No new releases published today. Last known version: `v0.1.4.post3` (referenced in multiple issues).

---

## 3. Project Progress

### Merged/Closed PRs Today (21 total, selected highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#1602](https://github.com/HKUDS/nanobot/pull/1602) | **Multi-modal media generation, Discord enhancements, voice synthesis** — 68 commits from Duo-Keyboard-Koalition fork | Major feature infusion: Google Imagen 4, Gemini image generation, Discord role mentions, voice synthesis |
| [#1534](https://github.com/HKUDS/nanobot/pull/1534) | Discord role mentions feature | Channel-specific UX improvement |
| [#1616](https://github.com/HKUDS/nanobot/pull/1616) | Cron-scheduled skills via YAML frontmatter | Automation infrastructure for recurring tasks |
| [#1632](https://github.com/HKUDS/nanobot/pull/1632) | Mem0 memory integration | Third-party memory provider support |
| [#1573](https://github.com/HKUDS/nanobot/pull/1573) | Fix image MIME type detection from magic bytes | Fixes Feishu image handling reliability |
| [#805](https://github.com/HKUDS/nanobot/pull/805) | Web tool optional toggle, MCP SSE support | Infrastructure flexibility |
| [#615](https://github.com/HKUDS/nanobot/pull/615) | Fix Zhipu `z-ai/` prefix collision | Provider compatibility |
| [#612](https://github.com/HKUDS/nanobot/pull/612) | Command wrapper config for sandboxed execution | Security hardening |
| [#1076](https://github.com/HKUDS/nanobot/pull/1076) | Z.ai (GLM Global) support with coding plan | China/international market expansion |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | Core Need |
|:---|:---:|:---|
| [#75](https://github.com/HKUDS/nanobot/issues/75) — Ollama connection configuration | **18 comments** | **On-premise LLM deployment** — users want clear docs for local model integration; config schema confusion persists since Feb 4 |
| [#1481](https://github.com/HKUDS/nanobot/issues/1481) — GitHub Copilot tool_calls not working (CLOSED) | 8 comments | **Enterprise IDE integration** — multi-choice response parsing failure; fixed but pattern suggests fragile provider-specific handling |
| [#1519](https://github.com/HKUDS/nanobot/issues/1519) — WebSocket SSL cert failure in uv environments | 6 comments | **Deployment hygiene** — Python packaging/SSL cert inheritance in modern Python tooling (uv) |
| [#1459](https://github.com/HKUDS/nanobot/issues/1459) — Codex-5.3 "lazy" execution (claims to act, doesn't) | 5 comments | **Agent reliability** — LLM hallucination of tool execution vs. actual execution gap |

**Underlying Pattern:** Users are pushing NanoBot into production-like deployments (uv, systemd, enterprise auth) and hitting friction between "demo-ready" defaults and operational requirements.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **Critical** | [#1634](https://github.com/HKUDS/nanobot/issues/1634) | **Session corruption**: Codex OAuth tool call IDs exceed OpenAI Responses API 64-char limit, breaking all subsequent messages until `/new` | **No fix PR** — requires session isolation architecture change |
| **High** | [#1623](https://github.com/HKUDS/nanobot/issues/1623) (CLOSED) / [#1634](https://github.com/HKUDS/nanobot/issues/1634) | Same root cause: OpenAI API "string too long" errors | Closed as duplicate of systemic issue |
| **High** | [#1628](https://github.com/HKUDS/nanobot/issues/1628) | Moonshot/Kimi K2.5 cannot receive image/video — LiteLLM version dependency | **Upstream fix available** (LiteLLM PR #21595) — needs dependency bump |
| **Medium** | [#1633](https://github.com/HKUDS/nanobot/issues/1633) | CLI `nanobot gateway --workspace` flag non-functional | **Fix PR exists**: [#1635](https://github.com/HKUDS/nanobot/pull/1635) adds workspace/config flags to agent |
| **Medium** | [#1611](https://github.com/HKUDS/nanobot/issues/1611) (CLOSED) | Feishu message infinite loop | Fixed |
| **Medium** | [#1624](https://github.com/HKUDS/nanobot/issues/1624) (CLOSED) | Intermittent "Error calling Codex" via OpenAI OAuth | Closed, likely transient API issue |

**Stability Assessment:** Session state management is the **weakest architectural link** — tool call ID format incompatibility between providers causes hard failures requiring manual session reset.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **Task-specific model routing** (conversational vs. tool-use vs. browser) | [#912](https://github.com/HKUDS/nanobot/issues/912) | **High** | 3 comments, clear config schema proposed; aligns with multi-model trend |
| **Azure OpenAI first-class support** | [#1618](https://github.com/HKUDS/nanobot/pull/1618) | **High** | PR submitted today; enterprise demand evident |
| **MQTT channel for IoT** | [#1631](https://github.com/HKUDS/nanobot/pull/1631) | **Medium-High** | PR submitted; expands addressable use cases |
| **Real-time Telegram streaming** | [#1599](https://github.com/HKUDS/nanobot/pull/1599) | **Medium** | PR submitted; UX improvement for latency-sensitive channel |
| **Google Search Grounding native support** | [#1625](https://github.com/HKUDS/nanobot/issues/1625) | **Medium** | Reduces external API dependency; Gemini ecosystem play |
| **MCP retry/reconnection logic** | [#1536](https://github.com/HKUDS/nanobot/issues/1536) | **Medium** | Production reliability need; no PR yet |
| **Whisper v3-turbo for faster transcription** | [#1584](https://github.com/HKUDS/nanobot/issues/1584) | **Low-Medium** | Simple config change; Groq provider optimization |
| **Kilocode API gateway** | [#1636](https://github.com/HKUDS/nanobot/issues/1636) | **Low** | Niche provider; config workaround possible |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Configuration complexity** | [#75](https://github.com/HKUDS/nanobot/issues/75) (Ollama), [#1633](https://github.com/HKUDS/nanobot/issues/1633) (CLI flags), [#1549](https://github.com/HKUDS/nanobot/issues/1549) (OpenAI Codex config ignored) | High |
| **Silent failures / "lazy" agent behavior** | [#1459](https://github.com/HKUDS/nanobot/issues/1459), [#1022](https://github.com/HKUDS/nanobot/issues/1022) — agent claims action, doesn't execute | Critical |
| **Session fragility across provider switches** | [#1634](https://github.com/HKUDS/nanobot/issues/1634) | Critical |
| **Feishu/China market polish gaps** | [#1611](https://github.com/HKUDS/nanobot/issues/1611), [#1607](https://github.com/HKUDS/nanobot/issues/1607), [#1548](https://github.com/HKUDS/nanobot/issues/1548), [#1617](https://github.com/HKUDS/nanobot/issues/1617) | Medium |
| **Missing skills in environment** | [#1630](https://github.com/HKUDS/nanobot/issues/1630) — weather, skill-creator unavailable | Medium |

### Satisfaction Drivers
- **Multi-channel flexibility** (Telegram, Discord, Feishu, WhatsApp, now MQTT)
- **Creative media generation** (Imagen 4, Gemini, voice synthesis in #1602)
- **Memory extensibility** (Mem0 integration merged)

### Dissatisfaction Drivers
- Documentation gaps (Chinese README demanded in [#1617](https://github.com/HKUDS/nanobot/issues/1617))
- Inconsistent message formatting vs. competitors (OpenClaw comparison in [#1548](https://github.com/HKUDS/nanobot/issues/1548))

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#75](https://github.com/HKUDS/nanobot/issues/75) Ollama connection | **31 days** | Documentation debt blocking local LLM adoption | Dedicated docs PR or config wizard |
| [#1022](https://github.com/HKUDS/nanobot/issues/1022) Long-running task failures | **13 days** | Core reliability concern | Repro case + timeout/execution tracing |
| [#984](https://github.com/HKUDS/nanobot/issues/984) Media path outside workspace | **13 days** | Security/policy violation with `restrictToWorkspace` | Architecture decision on media handling |
| [#912](https://github.com/HKUDS/nanobot/issues/912) Task-specific model config | **15 days** | High-value feature with clear spec | Maintainer review/approval |
| [#1421](https://github.com/HKUDS/nanobot/pull/1421) WhatsApp inline images | **4 days** | Channel parity gap | Review/merge |
| [#1362](https://github.com/HKUDS/nanobot/pull/1362) OpenAI-compatible API | **6 days** | Integration ecosystem enablement | Security review of session isolation |

---

**Project Health Score: B+** — Exceptional development velocity and feature breadth, but accumulating technical debt in session management and configuration ergonomics that could impede enterprise adoption if not addressed in upcoming release.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-07

## 1. Today's Overview

ZeroClaw shows **high velocity but significant instability** following its v0.1.8 release. The project processed **50 PRs** (20 merged/closed, 30 open) and **18 issues** (16 still open) in 24 hours—exceptional activity indicating a large, engaged community. However, **critical infrastructure failures** dominate: the v0.1.8 release shipped without binaries, breaking official install scripts, while multiple S0/S1 severity bugs affect Discord websockets, Docker onboarding, and WebUI connectivity. A community apology post (#2922) suggests recent internal disruptions may be contributing to quality control issues. The maintainer team appears to be executing a **branch strategy simplification** (eliminating dev/main promotion model) while simultaneously firefighting release pipeline failures.

---

## 2. Releases

**No new releases** — v0.1.8 remains the latest tag, but with **critical defects**:

| Issue | Problem | Impact |
|-------|---------|--------|
| [#2885](https://github.com/zeroclaw-labs/zeroclaw/issues/2885) | Release artifacts missing pre-built binaries | Install scripts 404 |
| [#2921](https://github.com/zeroclaw-labs/zeroclaw/issues/2921) | Linux install script fails due to missing assets | New user onboarding blocked |

**Status**: Release pipeline requires immediate repair. No migration notes available—users advised to use v0.1.7 or build from source.

---

## 3. Project Progress

### Merged/Closed PRs (20 total — selected highlights)

| PR | Author | Impact |
|----|--------|--------|
| [#2787](https://github.com/zeroclaw-labs/zeroclaw/pull/2787) | @Miggleness | **Docker build fix**: Adds `skills/` folder to builder image—resolves compilation failure |
| [#2755](https://github.com/zeroclaw-labs/zeroclaw/pull/2755) | @Dragonchu | **Security fix**: UTF-8 safe credential scrubbing for CJK/non-ASCII API keys |
| [#2454](https://github.com/zeroclaw-labs/zeroclaw/pull/2454) | @maxtongwang | **Web fetch reliability**: Fixes redirect handling returning URL instead of content |
| [#2461](https://github.com/zeroclaw-labs/zeroclaw/pull/2461) | @maxtongwang | **BlueBubbles channel**: Audio transcription, REST downloads, tapback reactions |
| [#2482](https://github.com/zeroclaw-labs/zeroclaw/pull/2482) | @maxtongwang | **CI health**: Resolves strict clippy violations blocking PR velocity |
| [#2495](https://github.com/zeroclaw-labs/zeroclaw/pull/2495) | @maxtongwang | **BlueBubbles policy controls**: DM/group allowlists, read receipt settings |
| [#2532](https://github.com/zeroclaw-labs/zeroclaw/pull/2532) | @maxtongwang | **BlueBubbles group management**: Rename, add/remove participants, icon, leave |
| [#2582](https://github.com/zeroclaw-labs/zeroclaw/pull/2582) | @maxtongwang | **BlueBubbles media**: Send attachments (images, audio, documents) |
| [#2583](https://github.com/zeroclaw-labs/zeroclaw/pull/2583) | @maxtongwang | **BlueBubbles messaging**: Reply, edit, unsend message actions |
| [#2584](https://github.com/zeroclaw-labs/zeroclaw/pull/2584) | @maxtongwang | **BlueBubbles UX**: Configurable text chunking for long responses |
| [#2585](https://github.com/zeroclaw-labs/zeroclaw/pull/2585) | @maxtongwang | **BlueBubbles gating**: Require @mention in groups to reduce noise |

**Key advancement**: @maxtongwang delivered **8 major PRs** achieving BlueBubbles/iMessage feature parity with OpenClaw—representing the most substantial platform expansion this cycle.

---

## 4. Community Hot Topics

### Highest Engagement

| Issue/PR | 👍/Comments | Analysis |
|----------|-------------|----------|
| [#2922](https://github.com/zeroclaw-labs/zeroclaw/issues/2922) "Moving Forward Together" | 9 👍, 2 comments | **Community trust repair** — transparency post acknowledging "internal issue" that "temporarily affected momentum." Signals organizational stress; strong positive reaction suggests community appreciates honesty. |
| [#2885](https://github.com/zeroclaw-labs/zeroclaw/issues/2885) v0.1.8 missing binaries | 4 👍, 3 comments | **Critical blocker** — affects all new installations. Multiple duplicate reports indicate monitoring/alerting gaps. |
| [#2907](https://github.com/zeroclaw-labs/zeroclaw/issues/2907) Telegram Channel outbound messaging | 2 👍, 0 comments | **Feature gap** — user needs bidirectional IoT integration (Raspberry Pi sensor → Telegram alert). Represents embedded/edge use case growth. |

### Active PRs with Community Interest

| PR | Focus | Significance |
|----|-------|------------|
| [#2928](https://github.com/zeroclaw-labs/zeroclaw/pull/2928) | Branch model simplification (dev/main → master) | **Governance change** — reduces complexity but risks disrupting contributor workflows |
| [#2933](https://github.com/zeroclaw-labs/zeroclaw/pull/2933) | Docker-aware localhost → host.docker.internal | Fixes #2924's local LLaMA onboarding failure |

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **S0** | [#2896](https://github.com/zeroclaw-labs/zeroclaw/issues/2896) Discord websocket silent failure after first message | Open, 2 comments | None identified |
| **S0** | [#2910](https://github.com/zeroclaw-labs/zeroclaw/issues/2910) WebUI agent connection error (v0.1.8) | Open, 2 comments | None identified |
| **S0** | [#2924](https://github.com/zeroclaw-labs/zeroclaw/issues/2924) Docker + local LLaMA config corruption | Open, 0 comments | [#2933](https://github.com/zeroclaw-labs/zeroclaw/pull/2933) in review |
| **S1** | [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) `channel_ack_config` schema invalid — workflow blocked | Open, 3 comments | None identified |
| **S1** | [#2885](https://github.com/zeroclaw-labs/zeroclaw/issues/2885) / [#2921](https://github.com/zeroclaw-labs/zeroclaw/issues/2921) Release binaries missing | Open, 3+2 comments | None identified — **pipeline issue** |
| **S1** | [#2930](https://github.com/zeroclaw-labs/zeroclaw/issues/2930) Docker bootstrap `Unbound variable` on macOS | Open, 0 comments | None identified |
| **S1** | [#2905](https://github.com/zeroclaw-labs/zeroclaw/issues/2905) Build fails: `matrix-sdk` query overflow | Open, 0 comments | None identified — **Rust compiler recursion limit** |

**Assessment**: **3 S0-severity issues** indicate production instability. The v0.1.8 release appears **regressed** across multiple surface areas (Discord, WebUI, Docker). No hotfix release imminent.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Release |
|-------|---------|---------------------------|
| [#2916](https://github.com/zeroclaw-labs/zeroclaw/issues/2916) Matrix password login + E2EE recovery key | High — addresses token rotation pain | **Medium** — @Centauria authored, has context |
| [#2926](https://github.com/zeroclaw-labs/zeroclaw/issues/2926) Configurable provider HTTP timeout (120s → custom) | High — llama.cpp on constrained hardware | **High** — simple config change |
| [#2907](https://github.com/zeroclaw-labs/zeroclaw/issues/2907) Telegram Channel outbound messaging | Medium — IoT/embedded use case | **Medium** — channel symmetry expected |
| [#2918](https://github.com/zeroclaw-labs/zeroclaw/issues/2918) WhatsApp Web audio/media (voice, images, docs) | Medium — parity with BlueBubbles | **Low-Medium** — requires significant channel work |
| [#2927](https://github.com/zeroclaw-labs/zeroclaw/pull/2927) `--session-id` flag for stateful `-m` mode | In PR review | **High** — merges imminently |

**Emerging pattern**: Users want **bidirectional, media-rich messaging** across all channels (Telegram Channels, WhatsApp media, Matrix E2EE). The BlueBubbles investment suggests this is strategic.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Source | Issue | Core Need |
|--------|-------|-----------|
| @pgilad, @akkaneror | [#2885](https://github.com/zeroclaw-labs/zeroclaw/issues/2885), [#2921](https://github.com/zeroclaw-labs/zeroclaw/issues/2921) | **Reliable releases** — "breaks the official Linux install script" |
| @infinitewatts | [#2896](https://github.com/zeroclaw-labs/zeroclaw/issues/2896) | **Stable Discord runtime** — silent failures break trust |
| @toolsmanhehe | [#2910](https://github.com/zeroclaw-labs/zeroclaw/issues/2910) | **Working WebUI** — "Connection error. Attempting to reconnect..." |
| @Sp1ffyG33k | [#2924](https://github.com/zeroclaw-labs/zeroclaw/issues/2924) | **Docker + local AI "just works"** — config corruption on onboarding |
| @Centauria | [#2916](https://github.com/zeroclaw-labs/zeroclaw/issues/2916) | **Sustainable auth** — "tired of copying [access token] all the time" |
| @pliski | [#2926](https://github.com/zeroclaw-labs/zeroclaw/issues/2926) | **Hardware flexibility** — 120s timeout insufficient for edge deployments |
| @pragmaton | [#2929](https://github.com/zeroclaw-labs/zeroclaw/issues/2929) | **Clear contribution workflow** — "hard to tell what is going on" with branches |

### Satisfaction Signals
- Strong appreciation for transparency in [#2922](https://github.com/zeroclaw-labs/zeroclaw/issues/2922) (9 👍)
- @maxtongwang's BlueBubbles work represents **feature delivery at scale**

### Dissatisfaction Signals
- **Release quality**: Multiple S0/S1 issues from single release
- **Documentation drift**: CI docs reference 20+ deleted workflows ([#2931](https://github.com/zeroclaw-labs/zeroclaw/pull/2931))
- **Branch confusion**: Active migration causing contributor friction

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) `channel_ack_config` schema error | 4 days | **S1 workflow blocked** | Runtime/daemon maintainer review — no assignee |
| [#2901](https://github.com/zeroclaw-labs/zeroclaw/issues/2901) Z.AI provider `tool_stream` omission | 5 days | Model-specific degradation | Provider integration review — affects GLM-5 |
| [#1955](https://github.com/zeroclaw-labs/zeroclaw/issues/1955) Qwen coding-plan entrypoint | 9 days closed | Provider expansion | **Verify closure** — may need docs update |
| [#1381](https://github.com/zeroclaw-labs/zeroclaw/issues/1381) Discord image sending | 12 days closed | Parity with OpenClaw | **Verify closure** — regression risk given [#2896](https://github.com/zeroclaw-labs/zeroclaw/issues/2896) |

**Maintainer attention required**: 
- **CI/CD pipeline ownership** — release artifact generation
- **Runtime stability** — Discord/WebUI/Docker critical paths
- **Schema validation** — `channel_ack_config` function registration

---

*Digest compiled from 50 PRs and 18 issues updated 2026-03-06. Data source: github.com/zeroclaw-labs/zeroclaw*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-07

## 1. Today's Overview

PicoClaw shows **high development velocity** with 113 PRs and 18 issues updated in the last 24 hours, indicating an active open-source community. The project is in a **stabilization phase** with zero new releases, focusing on bug fixes and incremental improvements rather than major feature drops. Provider compatibility remains the dominant theme, with multiple fixes for Ollama, DeepSeek, Groq, and Cloudflare Workers AI integrations. The high PR-to-merge ratio (74 open vs. 39 merged/closed) suggests a potential bottleneck in code review capacity. Community interest in multi-instance collaboration ("Swarm Mode") and real-time streaming capabilities signals evolving user expectations for production deployments.

---

## 2. Releases

**No new releases** — Version 0.2.0 (commit `8207c1c`, built 2026-02-28) remains current.

---

## 3. Project Progress

### Merged/Closed PRs Today (39 total; key highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#1192](https://github.com/sipeed/picoclaw/pull/1192) | docs: update WeChat QR code | Community onboarding |
| [#1200](https://github.com/sipeed/picoclaw/pull/1200) | chore(deps): bump filippo.io/edwards25519 1.1.0→1.1.1 | Security/crypto maintenance |
| [#1199](https://github.com/sipeed/picoclaw/pull/1199) | chore(deps): bump MCP Go SDK 1.3.0→1.3.1 | Model Context Protocol compatibility |
| [#1126](https://github.com/sipeed/picoclaw/issues/1126) *(issue closed via fix)* | Cron jobs fixed: recurring tasks no longer silently become one-time | **Critical reliability fix** |
| [#267](https://github.com/sipeed/picoclaw/issues/267) *(closed)* | CLI logins for OpenAI and Gemini — **delivered** | Provider auth UX |

### Feature Advancement
- **Plugin system emerging**: [#1130](https://github.com/sipeed/picoclaw/pull/1130) introduces `~/.picoclaw/plugins/` routing for external commands
- **Memory optimization**: [#649](https://github.com/sipeed/picoclaw/pull/649) adds in-memory caching to reduce file I/O
- **Streaming infrastructure**: [#1101](https://github.com/sipeed/picoclaw/pull/1101) implements Telegram real-time streaming via `sendMessageDraft`

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Analysis |
|:---|:---|:---:|:---|
| 1 | [#1161](https://github.com/sipeed/picoclaw/issues/1161) Ollama local model configuration | **7** | **Onboarding friction**: Users struggle with "silent failure" pattern—agent runs but produces no output. Need: better provider validation and error surfacing |
| 2 | [#267](https://github.com/sipeed/picoclaw/issues/267) → closed | 4 | CLI auth was a repeated request; now resolved |
| 3 | [#1103](https://github.com/sipeed/picoclaw/issues/1103) → closed | 3 | ModelScope.cn integration failed due to namespace parsing (`deepseek-ai/DeepSeek-V3.2`) |

### Underlying Needs
- **Local-first AI**: Strong demand for Ollama/local model support with clear debugging paths
- **Provider diversity**: Users expect seamless integration with Chinese cloud providers (ModelScope, SiliconFlow) and edge deployments (Cloudflare Workers)

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| 🔴 **High** | [#1161](https://github.com/sipeed/picoclaw/issues/1161) Ollama: agent runs, no response | **OPEN** | None identified |
| 🔴 **High** | [#1102](https://github.com/sipeed/picoclaw/issues/1102) DeepSeek `max_tokens` validation error (valid range [1,8192]) | **OPEN** | None |
| 🔴 **High** | [#1148](https://github.com/sipeed/picoclaw/issues/1148) Commit `6c8866de` breaks local usecases/testing | **OPEN** | None |
| 🟡 **Medium** | [#1193](https://github.com/sipeed/picoclaw/issues/1193) `ExecTool` regex blocks valid URLs/paths | **OPEN** | [#1178](https://github.com/sipeed/picoclaw/pull/1178) |
| 🟡 **Medium** | [#1165](https://github.com/sipeed/picoclaw/issues/1165) Cloudflare model names with `@`/`/` not accepted | **OPEN** | [#1197](https://github.com/sipeed/picoclaw/pull/1197) |
| 🟡 **Medium** | [#1176](https://github.com/sipeed/picoclaw/issues/1176) "No skills loaded" in Docker | **OPEN** | None |
| 🟢 **Low** | [#1177](https://github.com/sipeed/picoclaw/issues/1177) Modal backdrop closes dialog unexpectedly | **CLOSED** | Fixed |

### Regressions
- **Cron reliability**: Fixed in [#1126](https://github.com/sipeed/picoclaw/issues/1126) — recurring jobs were becoming one-time due to Go zero-value type assertion bug
- **prompt_cache_key pollution**: Multiple PRs ([#1181](https://github.com/sipeed/picoclaw/pull/1181), [#1196](https://github.com/sipeed/picoclaw/pull/1196)) address 400 errors on non-OpenAI endpoints (NVIDIA NIM, Groq)

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **Swarm Mode** (multi-instance collaboration) | [#284](https://github.com/sipeed/picoclaw/issues/284) | Medium | Roadmap item with discussion #119; complex coordination needed |
| **Telegram streaming** | [#1098](https://github.com/sipeed/picoclaw/issues/1098) → [#1101](https://github.com/sipeed/picoclaw/pull/1101) | **High** | PR ready, leverages new Telegram API |
| **IRC channel** | [#1138](https://github.com/sipeed/picoclaw/pull/1138) | Medium | Complete implementation, needs review |
| **Pico Protocol client** (outbound WebSocket) | [#1198](https://github.com/sipeed/picoclaw/pull/1198) | Medium | Complements existing server mode; enables bridging |
| **Config hot-reload** | [#1187](https://github.com/sipeed/picoclaw/pull/1187) | Medium | Quality-of-life improvement for gateway |
| **JSONL session persistence** | [#1169](https://github.com/sipeed/picoclaw/issues/1169) | Medium | Infrastructure exists (#732), needs integration |
| **I2C/SPI on-demand registration** | [#1184](https://github.com/sipeed/picoclaw/issues/1184) | **High** | Merged — token optimization for embedded use |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Silent failures** | [#1161](https://github.com/sipeed/picoclaw/issues/1161) Ollama no-output, [#1176](https://github.com/sipeed/picoclaw/issues/1176) no skills loaded | High |
| **Provider-specific quirks** | Model name parsing ([#1165](https://github.com/sipeed/picoclaw/issues/1165)), `max_tokens` bounds ([#1102](https://github.com/sipeed/picoclaw/issues/1102)), `prompt_cache_key` compatibility | High |
| **Documentation gaps** | [#547](https://github.com/sipeed/picoclaw/issues/547) AGENT.md lacks task-solving patterns | Medium |
| **Workspace/tool boundary confusion** | [#1193](https://github.com/sipeed/picoclaw/issues/1193) path validation too aggressive | Medium |

### Positive Signals
- **Active embedded/IoT use**: I2C/SPI tool optimization ([#1184](https://github.com/sipeed/picoclaw/issues/1184)) suggests hardware integration users
- **Channel diversity demand**: Telegram, Discord, IRC, Line, WeChat all maintained — healthy multi-platform strategy
- **Self-hosting enthusiasm**: Local Ollama, Docker deployments indicate privacy-conscious user base

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#284](https://github.com/sipeed/picoclaw/issues/284) Swarm Mode | ~19 days | High interest, no code | Maintainer decision on architecture |
| [#500](https://github.com/sipeed/picoclaw/pull/500) Line Bot SDK refactor | ~16 days | Technical debt reduction | Review and merge |
| [#649](https://github.com/sipeed/picoclaw/pull/649) Memory/cache optimization | ~13 days | Performance critical | Review queue |
| [#586](https://github.com/sipeed/picoclaw/pull/586) Tool call extraction hardening | ~14 days | Reliability | Review queue |
| [#305](https://github.com/sipeed/picoclaw/pull/305) Gemini CLI auth | ~19 days | Provider parity | Review and merge (completes #267) |

**Review bottleneck risk**: 74 open PRs with ~20 days average age for feature PRs suggests need for maintainer capacity expansion or automated CI/CD acceleration.

---

*Digest generated from GitHub activity 2026-03-06 to 2026-03-07. Data source: github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-07

## 1. Today's Overview

NanoClaw saw **extremely high development velocity** on March 6, with **50 PRs updated** (37 open, 13 merged/closed) and **14 issues** actively worked. The project is in a **rapid feature expansion phase** with heavy focus on multi-channel messaging (Signal, WhatsApp, Telegram), container security hardening, and observability infrastructure. No new releases were cut, suggesting maintainers are accumulating changes for a significant version bump. The contributor base appears active and distributed, with @glifocat emerging as a dominant force across fixes and skills.

---

## 2. Releases

**No new releases** — version unchanged.

---

## 3. Project Progress

### Merged/Closed PRs Today (13 total)

| PR | Author | Description | Impact |
|:---|:---|:---|:---|
| [#549](https://github.com/qwibitai/nanoclaw/pull/549) | @avianion | Avian LLM provider skill | Multi-provider flexibility |
| [#772](https://github.com/qwibitai/nanoclaw/pull/772) | @glifocat | PDF reader skill for WhatsApp | Document processing capability |
| [#708](https://github.com/qwibitai/nanoclaw/pull/708) | @glifocat | `update_task` tool for in-place task modification | Closes [#707](https://github.com/qwibitai/nanoclaw/issues/707) — eliminates cancel/recreate friction |
| [#770](https://github.com/qwibitai/nanoclaw/pull/770) | @glifocat | Image vision skill for WhatsApp | Closes [#463](https://github.com/qwibitai/nanoclaw/issues/463) — visual understanding |
| [#745](https://github.com/qwibitai/nanoclaw/pull/745) | @glifocat | Pairing code file persistence | Fixes [#747](https://github.com/qwibitai/nanoclaw/issues/747) — auth reliability |
| [#735](https://github.com/qwibitai/nanoclaw/pull/735) | @gabi-simons | `LIMIT` clause for DB queries — **Critical fix** | Prevents OOM crashes from unbounded message history |
| [#691](https://github.com/qwibitai/nanoclaw/pull/691) | @gabi-simons | Timezone-aware context injection | Agent temporal awareness |
| [#503](https://github.com/qwibitai/nanoclaw/pull/503) | @bindoon | `ANTHROPIC_BASE_URL` container support | Custom endpoint flexibility |
| [#780](https://github.com/qwibitai/nanoclaw/pull/780) | @aaronleesmith | GitHub Actions for Claude | CI/CD infrastructure |

**Observability Stack Completed**: @jjcaine's four-part observability initiative ([#773](https://github.com/qwibitai/nanoclaw/issues/773), [#774](https://github.com/qwibitai/nanoclaw/issues/774), [#775](https://github.com/qwibitai/nanoclaw/issues/775), [#776](https://github.com/qwibitai/nanoclaw/issues/776)) all closed today — status API, metrics, alerting, and dashboard now implemented.

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|:---|:---|:---|
| [#784](https://github.com/qwibitai/nanoclaw/pull/784) Signal + reactions skill | **Needs Review** — major architectural PR | Community demand for **Signal parity with WhatsApp**; channel-agnostic reaction framework suggests platform abstraction maturing |
| [#781](https://github.com/qwibitai/nanoclaw/pull/781) Secret scrubbing fix | Addresses [#709](https://github.com/qwibitai/nanoclaw/issues/709) | Security-conscious contributors identifying **defense-in-depth gaps** in container secret handling |
| [#700](https://github.com/qwibitai/nanoclaw/pull/700) Session rotation for oversized JSONL | Prevents container timeouts | **Scale pain point** — long-running agents hitting resource limits |
| [#701](https://github.com/qwibitai/nanoclaw/pull/701) Date/time context injection | **Blocked** — timing/strategy question | Temporal awareness deemed critical but implementation approach contested |

**Underlying Needs**: 
- **Multi-platform messaging parity** (WhatsApp → Signal → Telegram)
- **Production hardening** at scale (sessions, memory, secrets)
- **Agent context richness** (time, vision, documents)

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| **Critical** | [#692](https://github.com/qwibitai/nanoclaw/issues/692) — Unbounded DB queries causing OOM | **CLOSED** | [#735](https://github.com/qwibitai/nanoclaw/pull/735) merged |
| **High** | [#709](https://github.com/qwibitai/nanoclaw/issues/709) — Secret env var divergence risk | **OPEN** | [#781](https://github.com/qwibitai/nanoclaw/pull/781) pending review |
| **High** | [#777](https://github.com/qwibitai/nanoclaw/issues/777) — Root user container EACCES/ENOENT | **OPEN** | No PR yet — **needs attention** |
| **Medium** | [#783](https://github.com/qwibitai/nanoclaw/issues/783) — `schedule_task` lacks idempotency | **OPEN** | No PR yet |
| **Medium** | [#747](https://github.com/qwibitai/nanoclaw/issues/747) — Pairing code expiration | **CLOSED** | [#745](https://github.com/qwibitai/nanoclaw/pull/745) merged |

**Stability Assessment**: Critical memory safety issue resolved. **Root-on-Linux deployment scenario** ([#777](https://github.com/qwibitai/nanoclaw/issues/777)) is an emerging production blocker requiring immediate maintainer attention.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release |
|:---|:---|:---|
| **Capability-based skill security** | [#779](https://github.com/qwibitai/nanoclaw/issues/779) | **High** — aligns with container security focus; manifest-based permissions are industry direction |
| **Signal messaging support** | [#784](https://github.com/qwibitai/nanoclaw/pull/784) | **Very High** — PR open, architectural foundation laid |
| **Telegram display enhancements** | [#769](https://github.com/qwibitai/nanoclaw/pull/769) | **Medium** — opt-in feature, lower priority than core channels |
| **iCloud integration** (CalDAV/CardDAV/IMAP) | [#706](https://github.com/qwibitai/nanoclaw/pull/706) | **Medium** — large skill surface, may need iteration |

**Predicted vNext themes**: Security manifest system, Signal GA, refined task scheduling with idempotency.

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Voice | Severity |
|:---|:---|:---|
| Claude Code dependency | [#782](https://github.com/qwibitai/nanoclaw/issues/782): *"I don't have claude subscription and I use other LLM provider"* | **Accessibility barrier** — onboarding friction for non-Anthropic users |
| Task management confusion | [#783](https://github.com/qwibitai/nanoclaw/issues/783) — duplicate scheduled tasks accumulating silently | **UX reliability** |
| Documentation gaps | [#782](https://github.com/qwibitai/nanoclaw/issues/782) — setup without Claude Code unclear | **Adoption blocker** |

### Positive Signals
- Rapid response to critical bugs (unbounded queries fixed same day)
- Rich skill ecosystem emerging (PDF, vision, reactions, iCloud)
- Strong observability investment signals production readiness intent

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#777](https://github.com/qwibitai/nanoclaw/issues/777) Root container permissions | 1 day | **High** — breaks VPS/systemd deployments | Maintainer assignment + root testing environment |
| [#701](https://github.com/qwibitai/nanoclaw/pull/701) Timezone injection — **BLOCKED** | 2 days | Medium | Resolution of blocking concern (implementation vs. design) |
| [#706](https://github.com/qwibitai/nanoclaw/pull/706) iCloud tools skill | 2 days | Low | Review for scope/merge decision |
| [#742](https://github.com/qwibitai/nanoclaw/pull/742) Container isolation hardening | 1 day | Medium | QA validation for `env -i` changes |

**Recommendation**: Prioritize [#777](https://github.com/qwibitai/nanoclaw/issues/777) for production deployment scenarios; clarify [#701](https://github.com/qwibitai/nanoclaw/pull/701) block to prevent temporal feature stall.

---

*Digest generated from 50 PRs and 14 issues updated 2026-03-06*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-07

## 1. Today's Overview

IronClaw shows **very high development velocity** with 50 PRs and 32 issues updated in 24 hours, including two rapid-fire releases (v0.16.0 and v0.16.1). The project is actively stabilizing its WASM extension system after a production-breaking regression, while simultaneously advancing major architectural changes including a unified thread model and declarative LLM provider registry. Community engagement remains strong with new contributors joining and active discussion on contributor onboarding. The maintainers demonstrate responsive crisis management, shipping a hotfix within 24 hours of identifying WASM checksum issues.

---

## 2. Releases

### v0.16.1 (2026-03-06) — Hotfix
- **Critical fix**: Reverted WASM artifact SHA256 checksums to `null` ([#627](https://github.com/nearai/ironclaw/pull/627))
- **Impact**: Resolved production breakage where WASM tools (`web-search`) and channels (`telegram`) failed with WIT version mismatch errors
- **Migration**: No action required; automatic on update

### v0.16.0 (2026-03-06) — Feature Release
- **Added**: E2E extensions tab tests with CI parallelization ([#584](https://github.com/nearai/ironclaw/pull/584))
- **Added**: WASM extension versioning with WIT compatibility checks ([#592](https://github.com/nearai/ironclaw/pull/592))
- **Added**: HMAC-SHA256 webhook signature validation for Slack (incomplete in notes)

**Breaking changes incoming**: PR [#633](https://github.com/nearai/ironclaw/pull/633) prepares v0.17.0 with API-breaking changes to struct construction.

---

## 3. Project Progress

### Major Merged PRs

| PR | Description | Impact |
|:---|:---|:---|
| [#627](https://github.com/nearai/ironclaw/pull/627) | Revert WASM SHA256 checksums to null | **Production stability restored** |
| [#624](https://github.com/nearai/ironclaw/pull/624) | Per-engine WASM cache dirs on Windows | Fixes `ERROR_LOCK_VIOLATION` for Windows users |
| [#534](https://github.com/nearai/ironclaw/pull/534) | Flexible embedding dimensions for libSQL | Resolves #494; enables any embedding model |
| [#629](https://github.com/nearai/ironclaw/pull/629) | Wire memory hygiene into heartbeat | Unbounded workspace growth finally addressed |
| [#509](https://github.com/nearai/ironclaw/pull/509) | Regression test for document_path in search | Quality assurance for RRF fusion pipeline |
| [#636](https://github.com/nearai/ironclaw/pull/636) | Show version in gateway status popover | UX improvement for debugging |

### Architecture Advances
- **Declarative LLM providers** ([#618](https://github.com/nearai/ironclaw/pull/618)): Zero-code provider addition via JSON registry; 14 providers pre-configured
- **Unified thread model** ([#607](https://github.com/nearai/ironclaw/pull/607)): Cross-channel thread visibility, fixes notification leaking

---

## 4. Community Hot Topics

### Most Active Discussions

| Issue/PR | Comments | Topic | Underlying Need |
|:---|:---:|:---|:---|
| [#16](https://github.com/nearai/ironclaw/issues/16) | 6 | Contributor onboarding | **Documentation gap**: New contributors seek roadmap visibility and NEAR AI account clarification |
| [#410](https://github.com/nearai/ironclaw/issues/410) | 2 | Tablet UI cropping | **Responsive design** needed for non-desktop workflows |
| [#439](https://github.com/nearai/ironclaw/issues/439) | 1 | Registry workflow failures | **CI/CD reliability** blocking WASM tool installation |

### Key Insight
The pinned contributor question ([#16](https://github.com/nearai/ironclaw/issues/16)) reveals **strategic communication gaps**—the project lacks public roadmap documentation despite active development. The NEAR AI account reference suggests confusion about organizational boundaries.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|:---|:---|:---|:---:|
| **Critical** | WASM tools/channels broken (WIT mismatch) | Fixed | ✅ [#627](https://github.com/nearai/ironclaw/pull/627) |
| **High** | Registry update workflow fails (branch protection) | Open | ⏳ [#439](https://github.com/nearai/ironclaw/issues/439) |
| **High** | Windows file lock errors | Fixed | ✅ [#624](https://github.com/nearai/ironclaw/pull/624) |
| **Medium** | Embedding dimension hardcoded to 1536 | Fixed | ✅ [#534](https://github.com/nearai/ironclaw/pull/534) |
| **Medium** | Telegram missing from default install | Open | ⏳ [#602](https://github.com/nearai/ironclaw/issues/602) |
| **Medium** | Model name not remembered on re-onboarding | Open | ⏳ [#600](https://github.com/nearai/ironclaw/issues/600) |
| **Low** | Cloudflare tunnel shows GitHub docs link | Open | ⏳ [#603](https://github.com/nearai/ironclaw/issues/603) |

### Stability Assessment
- **Regression response time**: Excellent (<24h for v0.16.1 hotfix)
- **Persistent issue**: Installation/packaging gaps (Telegram, URL display) suggest release pipeline needs attention

---

## 6. Feature Requests & Roadmap Signals

| Feature | Request | Likelihood in v0.17+ | Evidence |
|:---|:---|:---:|:---|
| **Custom MCP auth headers** | [#639](https://github.com/nearai/ironclaw/issues/639) | High | Small scope, clear use case (Browser-Use integration) |
| **Configurable LLM timeouts** | [#615](https://github.com/nearai/ironclaw/issues/615) | **Merged** | ✅ [#630](https://github.com/nearai/ironclaw/pull/630) already implements |
| **Image processing support** | [#549](https://github.com/nearai/ironclaw/issues/549) | Medium | Vision capabilities increasingly expected |
| **Dashboard/execution visibility** | [#601](https://github.com/nearai/ironclaw/issues/601) | Medium | UX gap vs. OpenClaw comparison |
| **Thread management (cherry-pick, move, delete)** | — | **In Progress** | 🔄 [#632](https://github.com/nearai/ironclaw/pull/632) active |

### Predicted v0.17.0 Contents
Based on open XL PRs: unified thread model, declarative providers, background sandbox reaper, and comprehensive Mintlify documentation site.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Issues | Quote/Example |
|:---|:---|:---|
| **Installation friction** | [#599](https://github.com/nearai/ironclaw/issues/599), [#602](https://github.com/nearai/ironclaw/issues/602), [#600](https://github.com/nearai/ironclaw/issues/600) | "No display of the UI URL and token" — binary install incomplete vs. source build |
| **Local LLM hostility** | [#615](https://github.com/nearai/ironclaw/issues/615), [#494](https://github.com/nearai/ironclaw/issues/494) | 15s timeout fails for Ollama/LM Studio; 768-dim embeddings rejected |
| **Observability gaps** | [#601](https://github.com/nearai/ironclaw/issues/601) | "don't know the current stage which agent executed" |

### Positive Signals
- Responsive maintainer team (rapid hotfix)
- Strong testing investment (multiple E2E coverage PRs)
- Windows compatibility improvements acknowledged

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#439](https://github.com/nearai/ironclaw/issues/439) Registry workflow failure | 6 days | **Blocks WASM ecosystem** | CI permission fix; maintainer assigned |
| [#16](https://github.com/nearai/ironclaw/issues/16) Contributor roadmap | 25 days | Community growth | Documentation PR or pinned response |
| [#611](https://github.com/nearai/ironclaw/issues/611) Claw Agent protection bypass | 1 day | Security clarification | Needs triage—unclear if feature or bug |
| [#598](https://github.com/nearai/ironclaw/issues/598) XML-escaping corruption | 1 day | **Data integrity** | Small scope, high risk—good first issue for core team |

### Maintainer Attention Required
- **CI infrastructure**: [#439](https://github.com/nearai/ironclaw/issues/439) is blocking automated registry updates
- **Release pipeline**: Multiple reports of incomplete binary distributions suggest build process audit needed

---

*Digest generated from 50 PRs and 32 issues updated 2026-03-06 to 2026-03-07*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-07

## 1. Today's Overview

LobsterAI shows **high development velocity** with v0.2.0 released today, marking a significant milestone with Skill Store and MCP support. The project processed **6 merged/closed PRs** against 2 open ones, indicating efficient code review. However, **15 new issues opened with zero closures** suggests a growing backlog and potential strain on issue triage. Windows platform stability remains a recurring pain point, with multiple critical bugs reported post-release. The community is actively testing new features but encountering migration and compatibility friction.

---

## 2. Releases

### v0.2.0 (2026-03-06)
**Major feature release** with two headline capabilities:

| Feature | Description | PRs |
|---------|-------------|-----|
| **Skill Store** | Plugin marketplace for agent capabilities | [#254](https://github.com/netease-youdao/LobsterAI/pull/254), [#267](https://github.com/netease-youdao/LobsterAI/pull/267), [#298](https://github.com/netease-youdao/LobsterAI/pull/298) |
| **MCP (Model Context Protocol)** | Standardized tool integration protocol | *partially linked* |

**⚠️ Breaking Changes & Migration Issues:**
- **Data loss on upgrade**: Issue [#317](https://github.com/netease-youdao/LobsterAI/issues/317) reports complete loss of conversation history when upgrading from v0.1.24 → v0.2.0
- **Windows Git Bash dependency**: New runtime requirement causing startup failures ([#307](https://github.com/netease-youdao/LobsterAI/issues/307))

---

## 3. Project Progress

### Merged/Closed PRs (6 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#315](https://github.com/netease-youdao/LobsterAI/pull/315) | @btc69m979y-dotcom | Pin OpenClaw to versioned releases with build cache | **Build reliability** — prevents latest-source breakage |
| [#309](https://github.com/netease-youdao/LobsterAI/pull/309) | @liuzhq1986 | Fix chat context loss + adjust model timeout | **Critical fix** — addresses [#312](https://github.com/netease-youdao/LobsterAI/issues/312) |
| [#311](https://github.com/netease-youdao/LobsterAI/pull/311) | @btc69m979y-dotcom | Diagnostics for browser tool snapshot timeout | **Observability** — debugging infrastructure |
| [#290](https://github.com/netease-youdao/LobsterAI/pull/290) | @btc69m979y-dotcom | Sync working directory to OpenClaw config | **Bug fix** — workspace path consistency |
| [#308](https://github.com/netease-youdao/LobsterAI/pull/308) | @fisherdaddy | Fix Windows bundled Node.js unavailable | **Platform fix** — Windows runtime |
| [#304](https://github.com/netease-youdao/LobsterAI/pull/304) | @fisherdaddy | Fix Windows sandbox + update sandbox image | **Platform fix** — Windows container support |

**Key advancement**: Context loss fix ([#309](https://github.com/netease-youdao/LobsterAI/pull/309)) directly addresses user-reported multi-turn conversation failures.

---

## 4. Community Hot Topics

### Most Active Discussions

| Issue | Comments | Topic | Underlying Need |
|:---|:---:|:---|:---|
| [#303](https://github.com/netease-youdao/LobsterAI/issues/303) | 2 | **Windows path spacing bug** — AI inserts spaces in filenames with symbols/numbers | Reliable file system operations on Windows; prompt engineering alone insufficient |
| [#313](https://github.com/netease-youdao/LobsterAI/issues/313) | 2 | **Image display in chat** — ComfyUI-generated images not rendering | Visual workflow integration; comparison with OpenClaw's working implementation |
| [#174](https://github.com/netease-youdao/LobsterAI/issues/174) | 2 | **Ollama support strengthening** | Local/edge deployment for cost control; timeout and stability issues persist since v0.1.17 |

**Pattern**: Users comparing LobsterAI against OpenClaw (same org, different project) — suggests internal competition or migration expectations.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#317](https://github.com/netease-youdao/LobsterAI/issues/317) | **Data loss**: Complete conversation history wiped on v0.2.0 upgrade | ❌ No fix PR |
| 🔴 **Critical** | [#307](https://github.com/netease-youdao/LobsterAI/issues/307) | Windows fails to start without healthy Git Bash runtime | ✅ Fixed by [#308](https://github.com/netease-youdao/LobsterAI/pull/308) |
| 🟡 **High** | [#312](https://github.com/netease-youdao/LobsterAI/issues/312) | Context loss in multi-turn conversations | ✅ Fixed by [#309](https://github.com/netease-youdao/LobsterAI/pull/309) |
| 🟡 **High** | [#310](https://github.com/netease-youdao/LobsterAI/issues/310) | Chinese character corruption in `workingDirectory` field | ❌ No fix PR |
| 🟡 **High** | [#319](https://github.com/netease-youdao/LobsterAI/issues/319) | Tavily MCP configuration non-functional | ❌ No fix PR |
| 🟡 **High** | [#303](https://github.com/netease-youdao/LobsterAI/issues/303) | Path manipulation inserting spurious spaces | ❌ No fix PR |
| 🟢 **Medium** | [#318](https://github.com/netease-youdao/LobsterAI/issues/318) | Scheduled task minute interval becomes `nan:nan` when manually edited | ❌ No fix PR |
| 🟢 **Medium** | [#302](https://github.com/netease-youdao/LobsterAI/issues/302) | QQ email certificate verification failure | ❌ No fix PR |

**Regression risk**: v0.2.0 release introduced more instability than it resolved on Windows platform.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| [#321](https://github.com/netease-youdao/LobsterAI/issues/321) | Per-task execution environment selector (Sandbox/Local/Auto) | **High** | Follows existing sandbox/local dichotomy; UI/UX addition |
| [#320](https://github.com/netease-youdao/LobsterAI/issues/320) | Multi-agent "Lobster Army" local deployment | **Medium** | Architecture question; may require orchestration layer |
| [#316](https://github.com/netease-youdao/LobsterAI/issues/316) | OpenRouter auto mode for token optimization | **Medium** | Provider expansion pattern exists (see [#237](https://github.com/netease-youdao/LobsterAI/pull/237) Stepfun) |
| [#306](https://github.com/netease-youdao/LobsterAI/issues/306) | Show full content in sensitive operation prompts | **High** | Security/correctness fix; low implementation cost |

**Emerging theme**: Cost optimization features (Ollama [#174](https://github.com/netease-youdao/LobsterAI/issues/174), OpenRouter auto [#316](https://github.com/netease-youdao/LobsterAI/issues/316)) indicate user base sensitivity to API expenses.

---

## 7. User Feedback Summary

### Pain Points
| Category | Evidence | Severity |
|:---|:---|:---:|
| **Data integrity** | "历史对话全部丢失" — complete history loss on upgrade | 🔴 Critical |
| **Windows compatibility** | Git Bash, sandbox, path handling, character encoding issues | 🔴 Critical |
| **Local model reliability** | Ollama timeouts since v0.1.17 through v0.1.22 | 🟡 High |
| **Visual workflow gaps** | ComfyUI images fail where OpenClaw succeeds | 🟡 High |
| **Transparency** | Sensitive operation prompts truncate critical details | 🟢 Medium |

### Satisfaction Signals
- Rapid release cadence acknowledged positively: "龙虾最近每天一个版本"
- Active feature development (Skill Store, MCP) shows project momentum

### Use Case Patterns
- **Developer tooling**: Docker, RocketMQ setup assistance
- **Content generation**: ComfyUI image workflows
- **Enterprise integration**: Feishu/Lark, QQ email, scheduled tasks
- **Cost-conscious local deployment**: Ollama, OpenRouter optimization

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#174](https://github.com/netease-youdao/LobsterAI/issues/174) | 7 days | **Stale local AI support** — longest-running unresolved feature gap | Maintainer response on Ollama roadmap |
| [#237](https://github.com/netease-youdao/LobsterAI/pull/237) | 4 days open | Stepfun provider PR — may conflict with v0.2.0 provider system changes | Review/merge decision post-MCP integration |
| [#317](https://github.com/netease-youdao/LobsterAI/issues/317) | 1 day | **Data loss without migration path** — reputational risk | Emergency patch or rollback guidance |

**Recommendation**: Prioritize [#317](https://github.com/netease-youdao/LobsterAI/issues/317) data loss investigation and publish migration guide before more users upgrade to v0.2.0.

---

*Digest generated from 15 issues, 8 PRs, and 1 release on 2026-03-07*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-07

## 1. Today's Overview

TinyClaw shows **moderate development velocity** with 4 PRs and 1 issue touched in the past 24 hours. The project is actively addressing infrastructure reliability (tag/version sync) while three significant feature PRs remain in review, suggesting a **feature-heavy development phase** with maintainer bandwidth potentially constrained. No new releases were cut, indicating the team is accumulating changes rather than shipping incrementally. The closed issue #160 and its corresponding PR #161 demonstrate responsive maintenance for developer-experience problems. Overall project health appears **stable but release-pending**.

---

## 2. Releases

**No new releases** (v0.0.9 remains latest).

---

## 3. Project Progress

### Merged/Closed Today

| PR | Description | Impact |
|:---|:---|:---|
| [#161](https://github.com/TinyAGI/tinyclaw/pull/161) | CI guard preventing tag/package.json version mismatches | **Infrastructure reliability** — eliminates false "update available" notifications, prevents release pipeline errors |

This fix directly resolved [Issue #160](https://github.com/TinyAGI/tinyclaw/issues/160), a developer-experience bug where version drift caused misleading update prompts.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#152](https://github.com/TinyAGI/tinyclaw/pull/152) — Per-thread session isolation | 5 days open, last updated today | **High architectural significance**: Enables true multi-tenancy for Claude/Codex agents. The shift from shared `-c` flag to explicit session UUIDs suggests enterprise/team use cases are driving design. Underlying need: **concurrent users without session leakage**. |
| [#163](https://github.com/TinyAGI/tinyclaw/pull/163) — Multi-agent teams | 1 day old, 28 commits, 35 files | **Most ambitious PR in flight**: Parallel processing + agent-to-agent communication represents a paradigm shift from "agent rotation" to "agent collaboration." Underlying need: **workflow automation requiring coordinated AI workers**. |
| [#154](https://github.com/TinyAGI/tinyclaw/pull/154) — Security/logging fixes | 3 days open, addresses #19 | **Compliance-driven**: Removes PII from logs, hardens WhatsApp sandbox defaults. Underlying need: **production deployment readiness**, likely blocking enterprise adoption. |

**Pattern**: All three open PRs converge on **multi-user, production-grade deployment** — suggesting TinyClaw is maturing from personal tool toward team/enterprise infrastructure.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix Available |
|:---|:---|:---|:---|
| **Medium** | [Issue #160](https://github.com/TinyAGI/tinyclaw/issues/160) — Tag/version mismatch causing false update alerts | **RESOLVED** | [PR #161](https://github.com/TinyAGI/tinyclaw/pull/161) merged |
| **Medium** (potential) | [PR #154](https://github.com/TinyAGI/tinyclaw/pull/154) — Security gaps in logging, sandbox configuration | **IN REVIEW** | PR open, addresses #19 |

No new crashes or regressions reported in the 24-hour window. The security PR #154 remains unmerged despite addressing documented issues — **risk of extended exposure** for users running production workloads.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Per-thread session isolation** | [PR #152](https://github.com/TinyAGI/tinyclaw/pull/152) | **High** — 5 days in review, foundational for other features |
| **Multi-agent team collaboration** | [PR #163](https://github.com/TinyAGI/tinyclaw/pull/163) | **Medium-High** — Large PR (28 commits), may target v0.1.0 given scope |
| **Security hardening (logging/sandbox)** | [PR #154](https://github.com/TinyAGI/tinyclaw/pull/154) | **High** — Blocking issue, likely fast-tracked |

**Prediction**: Next release (likely v0.1.0 given architectural changes) will bundle session isolation + security fixes. Multi-agent teams may follow in v0.2.0 or as experimental flag.

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|:---|:---|:---|
| **Version management friction** | Issue #160 — false update alerts caused operational confusion | 😐 **Neutral→Improving** (fixed rapidly) |
| **Security/production readiness** | PR #154 addresses "key security gaps" per author | 😟 **Concerned** — users need this merged |
| **Scalability demands** | PR #152, #163 both target multi-user/multi-agent scenarios | 🚀 **Ambitious** — community pushing beyond single-user tool |

**Key pain point**: Gap between "works for me" and "works for my team." Users are investing effort to productionize TinyClaw; maintainer merge velocity on security PRs will signal project maturity.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [PR #154](https://github.com/TinyAGI/tinyclaw/pull/154) — Security fixes | 3 days | **High** — Addresses documented security issues (#19), unmerged | Maintainer review; potential v0.0.10 hotfix candidate |
| [PR #152](https://github.com/TinyAGI/tinyclaw/pull/152) — Session isolation | 5 days | Medium — Large architectural change, needs thorough review | Maintainer decision: merge before or with #163? |

**Note**: PR #163's arrival may complicate review queue — maintainer should clarify sequencing (security first, then features?) to manage contributor expectations.

---

*Digest generated from GitHub activity 2026-03-06 to 2026-03-07*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-07

## 1. Today's Overview

CoPaw shows **high community velocity** with 50 issues and 50 PRs updated in the last 24 hours, indicating active development and substantial user engagement. The project is in a **bug-fixing and stabilization phase** with 37 active issues versus 13 closed, and 20 open PRs against 30 merged/closed. No new release was published today, suggesting the team is consolidating fixes before v0.0.6. The community is particularly focused on channel integrations (DingTalk, Feishu, Telegram), model provider expansions, and memory/context stability issues.

---

## 2. Releases

**None today.** The project remains at v0.0.5 (with v0.0.5.beta2 in some deployments). Several version-related bugs were reported (#818, #800), indicating potential confusion around release artifacts that may need clarification before the next release.

---

## 3. Project Progress

### Merged/Closed PRs Today (30 total, selected highlights):

| PR | Description | Significance |
|:---|:---|:---|
| [#847](https://github.com/agentscope-ai/CoPaw/pull/847) → closed | Custom provider API key handling and OpenRouter support | Superseded by #848; iterative refinement on provider auth |
| [#834](https://github.com/agentscope-ai/CoPaw/pull/834) | Remove outdated issue templates | Repository maintenance |
| [#829](https://github.com/agentscope-ai/CoPaw/pull/829) | Russian translation for console | Internationalization expansion |
| [#832](https://github.com/agentscope-ai/CoPaw/pull/832), [#825](https://github.com/agentscope-ai/CoPaw/pull/825) | Windows path compatibility for media files | **Critical Windows stability fix** |
| [#597](https://github.com/agentscope-ai/CoPaw/pull/597) | Daemon mode implementation | Major operational feature for production deployments |
| [#681](https://github.com/agentscope-ai/CoPaw/pull/681) | DingTalk QR code and Docker port documentation | User onboarding improvement |
| [#727](https://github.com/agentscope-ai/CoPaw/pull/727) | Prevent startup failure when MCP client init fails | **Critical reliability fix** — prevents total app crash |

**Key Advances:**
- **Daemon mode** (#597) enables production server deployments
- **Windows path fixes** resolve cross-platform media handling
- **MCP resilience** prevents cascading failures on server connection issues

---

## 4. Community Hot Topics

| Issue/PR | Comments | Analysis |
|:---|:---:|:---|
| [#280](https://github.com/agentscope-ai/CoPaw/issues/280) — Built-in Skills and MCPs Discussion | **14** | Core product strategy debate: balancing extensibility vs. out-of-box experience. Community wants curated defaults without bloat. |
| [#736](https://github.com/agentscope-ai/CoPaw/issues/736) — Information response confusion (信息回答错乱) | **7** | **Critical memory/context bug** — responses reference wrong conversation history after restart. Indicates session persistence failure. |
| [#767](https://github.com/agentscope-ai/CoPaw/issues/767) — Tool/script/Skill logic混乱, .copaw structure混乱 | **7** | Architecture critique: skill persistence and directory structure need redesign. Skills don't survive restart reliably. |
| [#352](https://github.com/agentscope-ai/CoPaw/issues/352) — User-dimensioned memory and skills isolation | **6** | Multi-tenancy request: enterprise users need per-user memory/skill boundaries. Currently global state creates privacy/confusion issues. |
| [#709](https://github.com/agentscope-ai/CoPaw/issues/709) — Docker MCP connectivity (closed) | **4** | Deployment configuration complexity; resolved but indicates documentation gaps. |

**Underlying Needs:**
- **Reliable persistence**: Session, memory, and skill state must survive restarts
- **Multi-user architecture**: Growing demand for isolation (enterprise readiness)
- **Sensible defaults**: Users want curated built-ins without configuration burden

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical** | [#736](https://github.com/agentscope-ai/CoPaw/issues/736) | Response context corruption — answers reference wrong historical queries | No fix PR identified |
| **🔴 Critical** | [#767](https://github.com/agentscope-ai/CoPaw/issues/767) | Skill persistence failure; .copaw directory structure chaotic | No fix PR identified |
| **🟡 High** | [#765](https://github.com/agentscope-ai/CoPaw/issues/765) | Windows installation dependency conflict (aliyun-python-sdk-core) | No fix PR identified |
| **🟡 High** | [#804](https://github.com/agentscope-ai/CoPaw/issues/804) | Feishu channel leaks thinking/execution process into messages | No fix PR identified |
| **🟡 High** | [#805](https://github.com/agentscope-ai/CoPaw/issues/805), [#828](https://github.com/agentscope-ai/CoPaw/issues/828) | `write_file` and tool use input parameters empty — argument parsing failure | [#828](https://github.com/agentscope-ai/CoPaw/issues/828) has workaround; root cause pending |
| **🟡 High** | [#811](https://github.com/agentscope-ai/CoPaw/issues/811) — closed | Feishu files/images fail when Show Tool Messages disabled | Fixed (closed) |
| **🟢 Medium** | [#831](https://github.com/agentscope-ai/CoPaw/issues/831) | Telegram channel missing in v0.0.5 | No fix PR identified |
| **🟢 Medium** | [#833](https://github.com/agentscope-ai/CoPaw/issues/833) | Telegram multimodality fails — path extension validation too strict | No fix PR identified |
| **🟢 Medium** | [#779](https://github.com/agentscope-ai/CoPaw/issues/779) | DingTalk message formatting errors | [#851](https://github.com/agentscope-ai/CoPaw/pull/851) addresses related parsing |
| **🟢 Medium** | [#818](https://github.com/agentscope-ai/CoPaw/issues/818) — closed | Version upgrade detection logic flawed (0.0.5 vs 0.0.5b3) | Closed |

**Stability Assessment**: Two critical memory/state management bugs (#736, #767) threaten core reliability. The tool argument parsing issues (#805, #828) suggest recent regression in function calling layer.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **SiliconFlow (硅基流动) provider** | [#812](https://github.com/agentscope-ai/CoPaw/issues/812) | High | Chinese cloud provider; strong user demand; pattern matches existing provider additions |
| **OpenRouter built-in provider** | [#759](https://github.com/agentscope-ai/CoPaw/pull/759) | **Very High** | PR already open, first-time contributor; aligns with #848 provider auth fixes |
| **Multi-model adaptive routing** | [#52](https://github.com/agentscope-ai/CoPaw/issues/52), [#849](https://github.com/agentscope-ai/CoPaw/pull/849) | Medium | PR #849 provides foundation; complex feature needing review cycle |
| **MQTT channel** | [#548](https://github.com/agentscope-ai/CoPaw/pull/548) | Medium | IoT use case; PR open but needs review bandwidth |
| **Web UI authentication** | [#519](https://github.com/agentscope-ai/CoPaw/pull/519) | Medium | Security feature for public deployments; PR open since Mar 3 |
| **Token usage tracking** | [#775](https://github.com/agentscope-ai/CoPaw/pull/775) | Medium | Operational feature; PR open with full implementation |
| **Azure OpenAI responses endpoint** | [#723](https://github.com/agentscope-ai/CoPaw/issues/723) | Medium | Enterprise request; contributor willing to PR |
| **Desktop packaging (Windows/macOS)** | [#843](https://github.com/agentscope-ai/CoPaw/pull/843) | Medium | Conda-pack based; broadens user base |
| **Per-user memory/skill isolation** | [#352](https://github.com/agentscope-ai/CoPaw/issues/352) | Low-Medium | Architectural change; needs design discussion |
| **Auto-execution of CLI skills** | [#806](https://github.com/agentscope-ai/CoPaw/issues/806) | Low | Security implications; design philosophy conflict |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Memory/Context Unreliability** | #736, #767, #352 | 🔴 Critical |
| **Installation & Dependencies** | #765, #800, #822 | 🟡 High |
| **Channel Integration Polish** | #804, #779, #811, #833, #831 | 🟡 High |
| **Tool Execution Failures** | #805, #828, #809 | 🟡 High |
| **Resource Consumption** | #796 (memory explosion on N100) | 🟢 Medium |
| **Rate Limiting** | #819 | 🟢 Medium |

### Use Cases Emerging
- **Small business/individual**: Docker deployment, one-line install, minimal resource footprint
- **Enterprise**: Multi-user isolation, Feishu/DingTalk integration, audit trails
- **Developer/IoT**: MQTT channel, local model support, MCP extensibility

### Satisfaction Signals
- Active contribution (multiple first-time contributors: #849, #759, #775, #829)
- Detailed bug reports with screenshots and reproduction steps
- Feature requests with implementation offers

### Dissatisfaction Signals
- Version confusion (#818, #800)
- "Chaotic" internal architecture criticism (#767)
- Memory leaks requiring periodic restart (#796)

---

## 8. Backlog Watch

| Issue/PR | Age | Description | Action Needed |
|:---|:---:|:---|:---|
| [#52](https://github.com/agentscope-ai/CoPaw/issues/52) Multi-model routing | 7 days | Core efficiency feature; #849 provides implementation | Maintainer review of #849 |
| [#430](https://github.com/agentscope-ai/CoPaw/issues/430) Official Roadmap | 4 days | Contribution onboarding; needs curation | Update task list, mentor contributors |
| [#578](https://github.com/agentscope-ai/CoPaw/issues/578) OpenClaw-inspired features | 3 days | Meta-issue for compounding value features | Architectural response |
| [#519](https://github.com/agentscope-ai/CoPaw/pull/519) Web UI auth | 4 days | Security feature; production blocker for some | Review or provide feedback |
| [#548](https://github.com/agentscope-ai/CoPaw/pull/548) MQTT channel | 3 days | IoT expansion; complete implementation | Review or identify blockers |
| [#736](https://github.com/agentscope-ai/CoPaw/issues/736) Context corruption | 2 days | **Critical reliability bug** | Priority investigation |
| [#767](https://github.com/agentscope-ai/CoPaw/issues/767) Skill persistence | 1 day | **Core architecture issue** | Design response, roadmap commitment |

---

**Project Health**: 🟡 **Active but Stabilizing** — High velocity with growing pains. Critical memory/state bugs need immediate attention to prevent user churn. Strong contributor pipeline and clear feature demand suggest healthy trajectory if stability issues are addressed.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-07

## 1. Today's Overview

ZeptoClaw shows **high-velocity security-focused development** with 11 PRs and 6 issues updated in 24 hours. The project is in active hardening mode: 8 PRs merged/closed, with security patches dominating the merge queue. Two competing PRs (#274, #272) address the same screenshot SSRF vulnerability, indicating rapid community response to security disclosures. No new releases were cut despite significant security fixes, suggesting maintainers may be batching for a larger release. Overall project health is **strong** with responsive maintainers and active security research participation.

---

## 2. Releases

**No new releases** (v0.x.x remains current).

---

## 3. Project Progress

### Merged/Closed PRs Today (8 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#270](https://github.com/qhkm/zeptoclaw/pull/270) | @qhkm | Feishu/Lark Markdown rendering via interactive cards | **UX improvement** — fixes long-standing formatting pain point for enterprise users |
| [#260](https://github.com/qhkm/zeptoclaw/pull/260) | @AshishDeveloperr | SSRF guardrails for skill installer downloads | **Security** — closes cloud metadata service attack vector |
| [#269](https://github.com/qhkm/zeptoclaw/pull/269) | @qhkm | Structured command parsing in `shell.rs` | **Security** — eliminates regex bypass vectors (GHSA-5wp8-q9mx-8jx8) |
| [#265](https://github.com/qhkm/zeptoclaw/pull/265) | @qhkm | Panic isolation across all channel handlers | **Reliability** — prevents silent task crashes in production |
| [#258](https://github.com/qhkm/zeptoclaw/pull/258) | @papatinga81 | Token usage tracking in containerized agents | **Observability** — cost/usage visibility for container deployments |
| [#262](https://github.com/qhkm/zeptoclaw/pull/262) | @starsy | HTTP CONNECT proxy support for Discord Gateway | **Enterprise compatibility** — corporate network deployments |
| [#261](https://github.com/qhkm/zeptoclaw/pull/261) | @zpbrent | Fix GHSA-5gqm-m96q-7h65 | **Security** — undisclosed vulnerability patch |
| [#267](https://github.com/qhkm/zeptoclaw/pull/267) | @qhkm | SSRF guardrails with DNS pinning for skill installer | **Security** — closes TOCTOU rebinding window |

**Key advancement**: Security architecture is being systematically hardened across shell execution, HTTP tooling, and skill installation — preparing foundation for the template sandbox system (#222).

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|:---|:---|:---|
| [#222](https://github.com/qhkm/zeptoclaw/issues/222) — Per-template capability sandbox | 2 comments, P3-normal | **Core architectural initiative** — enables "security-as-code" where templates self-declare permissions. Referenced by multiple security PRs as the target state. Underlying need: multi-tenant/agent marketplace safety |
| [#271](https://github.com/qhkm/zeptoclaw/issues/271) — Screenshot SSRF via redirects | 1 comment, security-critical | **Active vulnerability** — community researcher @zpbrent disclosed, maintainer @qhkm responded with competing fix PRs. Underlying need: consistent SSRF protection across all HTTP-adjacent tools |

**Tension point**: Two PRs (#274 preflight-based, #272 CDP-interception-based) propose different SSRF fixes for screenshots. Community evaluating tradeoffs between coverage (CDP catches browser-internal redirects) vs. simplicity (preflight reuse).

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|:---|:---|:---|:---|
| **P2-high** | [#259](https://github.com/qhkm/zeptoclaw/issues/259) — Spawned task crash isolation | **CLOSED** | ✅ [#265](https://github.com/qhkm/zeptoclaw/pull/265) merged |
| **P2-high** | [#268](https://github.com/qhkm/zeptoclaw/issues/268) — `shell.rs` enforcement bypass (GHSA-5wp8-q9mx-8jx8) | **CLOSED** | ✅ [#269](https://github.com/qhkm/zeptoclaw/pull/269) merged |
| **P2-high** | [#245](https://github.com/qhkm/zeptoclaw/issues/245) — Skill installer SSRF | **CLOSED** | ✅ [#260](https://github.com/qhkm/zeptoclaw/pull/260), [#267](https://github.com/qhkm/zeptoclaw/pull/267) merged |
| **Unranked** | [#271](https://github.com/qhkm/zeptoclaw/issues/271) — Screenshot SSRF via redirects | **OPEN** | 🔄 [#274](https://github.com/qhkm/zeptoclaw/pull/274), [#272](https://github.com/qhkm/zeptoclaw/pull/272) competing |

**Stability note**: All high-severity issues from past 48h are resolved. The open screenshot SSRF is the remaining active security gap with two candidate fixes under review.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version |
|:---|:---|:---|
| **Per-template capability sandbox** | [#222](https://github.com/qhkm/zeptoclaw/issues/222) | **High** — foundational for security model, actively referenced |
| **cargo-nextest adoption** | [#273](https://github.com/qhkm/zeptoclaw/pull/273) | **Moderate** — infrastructure improvement, maintainer-friendly |
| **Browser-native SSRF protection** | [#272](https://github.com/qhkm/zeptoclaw/pull/272) | **Pending evaluation** — may merge or supersede #274 |

**Prediction**: Template sandbox (#222) will likely ship in next minor release, given it's P3-normal priority but blocks broader security architecture. The shell.rs and SSRF hardening PRs this week appear to be prerequisite work.

---

## 7. User Feedback Summary

### Pain Points Addressed Today
- **Enterprise formatting**: Feishu/Lark users ([LIKE2000-ART](https://github.com/LIKE2000-ART)) frustrated by raw Markdown display — **resolved**
- **Corporate networking**: Discord deployments behind HTTP proxies failing silently — **resolved** ([#262](https://github.com/qhkm/zeptoclaw/pull/262))
- **Operational visibility**: Containerized agents lacked token usage tracking — **resolved** ([#258](https://github.com/qhkm/zeptoclaw/pull/258))

### Implied Satisfaction Pattern
Users report specific integration friction points (enterprise messaging, networking, observability) rather than core agent intelligence — suggests ZeptoClaw's agent capabilities are mature, operational polish is the remaining gap.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#222](https://github.com/qhkm/zeptoclaw/issues/222) Template sandbox | 4 days | Low (active) | Design review for declarative schema |
| [#273](https://github.com/qhkm/zeptoclaw/pull/273) cargo-nextest | 1 day | Low | CI infrastructure decision |
| [#274](https://github.com/qhkm/zeptoclaw/pull/274) vs [#272](https://github.com/qhkm/zeptoclaw/pull/272) | 1 day | **Medium** — security fix stall | Maintainer decision on approach |

**Attention required**: The competing screenshot SSRF PRs need maintainer @qhkm to select an approach to unblock security closure. Otherwise backlog is healthy with no stale critical items.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-03-07

## 1. Today's Overview

EasyClaw shows **moderate maintenance activity** with 2 patch releases (v1.6.0, v1.6.1) pushed to address installation friction on macOS, alongside 3 resolved/updated issues. No new PRs were submitted or merged in the last 24 hours. The project appears focused on **stability and onboarding experience** rather than feature development. The rapid-fire 1.6.x releases suggest reactive hotfixing for Gatekeeper-related user blockers. Overall health: **stable maintenance mode** with responsive issue resolution but limited community contribution velocity.

---

## 2. Releases

| Version | Date | Focus |
|---------|------|-------|
| [v1.6.1](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.1) | 2026-03-06 | macOS Gatekeeper documentation |
| [v1.6.0](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.0) | 2026-03-06 | macOS Gatekeeper documentation |

**Changes:** Both releases appear identical in content—expanded installation instructions for macOS users encountering `"EasyClaw is damaged and can't be opened"` errors. No functional code changes detected.

**Breaking Changes:** None.

**Migration Notes:** N/A (documentation-only release).

> **Analyst Note:** Dual same-day releases with identical content suggests either a tagging error or iterative README fixes. Recommend maintainer consolidate release notes for clarity.

---

## 3. Project Progress

**No PRs merged or closed today.**

Progress came through **issue resolution**:

| Issue | Status | Resolution |
|-------|--------|------------|
| [#9](https://github.com/gaoyangz77/easyclaw/issues/9) | ✅ Closed | Vision capability support for Bailian CodingPlan models (Qwen3.5, Kimi2.5) |
| [#10](https://github.com/gaoyangz77/easyclaw/issues/10) | ✅ Closed | Skills directory path inconsistency post-migration from `.openclaw` to `.easyclaw` |

**Features Advanced:** Multi-modal (vision) model integration; configuration path standardization.

---

## 4. Community Hot Topics

| Rank | Issue | Comments | Heat Analysis |
|------|-------|----------|---------------|
| 🔥 1 | [#9](https://github.com/gaoyangz77/easyclaw/issues/9) — Vision support for Bailian CodingPlan | 5 | **Core capability gap**: Users expect EasyClaw to expose full model capabilities (vision + text) when backend providers support it. Closed quickly → maintainer responsiveness high. |
| 2 | [#11](https://github.com/gaoyangz77/easyclaw/issues/11) — v1.5.16 update exception | 4 | **Active regression**: User-reported crash post-update with screenshot evidence. Currently **open** — needs attention. |
| 3 | [#10](https://github.com/gaoyangz77/easyclaw/issues/10) — Skills path migration bug | 3 | **Technical debt**: Incomplete migration logic between config versions. Resolved. |

**Underlying Needs:**
- **Capability parity**: Users want EasyClaw to transparently pass through all upstream model features (vision, function calling, etc.)
- **Zero-downtime updates**: Version upgrades breaking existing workflows (#10, #11)

---

## 5. Bugs & Stability

| Severity | Issue | Status | Evidence | Fix PR |
|----------|-------|--------|----------|--------|
| 🔴 **High** | [#11](https://github.com/gaoyangz77/easyclaw/issues/11): v1.5.16 update exception | **OPEN** | Screenshot shows error dialog; user reports post-update failure | ❌ None |
| 🟡 **Medium** | [#10](https://github.com/gaoyangz77/easyclaw/issues/10): Skills path inconsistency | ✅ Closed | Config/UI path drift after `.openclaw` → `.easyclaw` migration | N/A (direct fix) |

**Regression Pattern:** Two of three recent issues stem from **version upgrade fragility** — migration logic and update stability need hardening.

**Recommendation:** Prioritize #11; consider automated migration tests for future releases.

---

## 6. Feature Requests & Roadmap Signals

| Signal Source | Request | Likelihood in Next Version |
|-------------|---------|---------------------------|
| [#9](https://github.com/gaoyangz77/easyclaw/issues/9) | Native vision/multimodal support in config UI | **High** — already addressed in closed issue, may need UI exposure |
| Implicit (macOS releases) | Signed/notarized macOS builds | **Medium** — repeated Gatekeeper workarounds suggest demand |
| [#10](https://github.com/gaoyangz77/easyclaw/issues/10) | Robust config migration system | **High** — technical debt, affects upgrade UX |

**Predicted v1.7.0 themes:** Multimodal UI controls, automated migration tooling, potential Apple Developer signing.

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|-------|----------|-----------|
| **Onboarding friction** | macOS Gatekeeper blocks + duplicate release docs | 😤 Frustrated — "damaged app" error is alarming to users |
| **Upgrade anxiety** | #10, #11 both version-update related | 😰 Nervous — users fear breaking changes |
| **Capability expectations** | #9 vision support request | 😊 Satisfied with resolution speed |
| **Config transparency** | #10 path confusion | 😐 Confused — internal directory structure opaque |

**Real Use Cases:**
- Bailian (Alibaba Cloud) power users integrating Qwen/Kimi vision models
- Cross-platform developers needing reliable macOS distribution
- Automation users with cron-dependent skill workflows (affected by #10)

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#11](https://github.com/gaoyangz77/easyclaw/issues/11) | 1 day | 🔴 **Active crash** — may block other users from updating | Maintainer repro + patch release |
| — | — | — | No other stale critical items |

**Healthy backlog state:** Only one active item requiring attention. Closed issues #9 and #10 were resolved within 24-48 hours — **maintainer responsiveness is strong**.

---

*Digest generated 2026-03-07 | Data source: github.com/gaoyangz77/easyclaw*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*