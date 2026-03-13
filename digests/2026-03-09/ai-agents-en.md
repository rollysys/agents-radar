# OpenClaw Ecosystem Digest 2026-03-09

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-09 00:07 UTC

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

# OpenClaw Project Digest — 2026-03-09

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature, actively maintained project with substantial community engagement. The 83:417 closed-to-open issue ratio suggests ongoing triage pressure, while 135 merged/closed PRs against 365 open indicates a healthy but backlogged merge queue. Two releases dropped today (v2026.3.7 and v2026.3.7-beta.1), both centered on a major new `ContextEngine` plugin architecture. However, **critical regression reports are flooding in** post-release, particularly around tool execution failures across multiple model providers—suggesting the release may need immediate stabilization.

---

## 2. Releases

### [v2026.3.7](https://github.com/openclaw/openclaw/releases/tag/v2026.3.7) & [v2026.3.7-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.3.7-beta.1)

| Aspect | Details |
|--------|---------|
| **Headline Change** | New `ContextEngine` plugin slot with full lifecycle hooks |
| **Key Additions** | `bootstrap`, `ingest`, `assemble`, `compact`, `afterTurn`, `prepareSubagentSpawn`, `onSubagentEnded` hooks; slot-based registry with config-driven resolution; `LegacyContextEngine` wrapper for backward compatibility |
| **Breaking Changes** | None explicitly documented; wrapper suggests backward compatibility |
| **Migration Notes** | Existing configs should work via `LegacyContextEngine` wrapper; new plugin development can target the full hook interface |

**⚠️ Critical Note:** Despite the "stable" label, [multiple regression reports](#bugs--stability) indicate v2026.3.7 introduced severe tool execution bugs affecting Kimi, Anthropic-compatible providers, and general exec/tool availability.

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected High-Impact)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#40374](https://github.com/openclaw/openclaw/pull/40374) | @KimGLee | Fix outbound replay-loop risk by persisting recovery attempts before redelivery | **Reliability** — prevents message loss in recovery scenarios |
| [#39856](https://github.com/openclaw/openclaw/pull/39856) | @LarytheLord | Fix Control UI 404s for symlinked global installs and pnpm hardlinks | **Regression fix** — resolves dashboard "Not Found" errors |
| [#24695](https://github.com/openclaw/openclaw/pull/24695) | @frankekn | Escalate to direct PID kill after group kill in process management | **Robustness** — eliminates stale process edge cases |
| [#24293](https://github.com/openclaw/openclaw/pull/24293) | @frankekn | Treat degraded systemd user manager as available | **Platform support** — fixes systemd false negatives |
| [#24396](https://github.com/openclaw/openclaw/pull/24396) | @frankekn | Isolate WhatsApp creds save queue per authDir | **Performance** — eliminates cross-account blocking |
| [#24727](https://github.com/openclaw/openclaw/pull/24727) | @frankekn | Raise QMD busy_timeout to prevent read contention | **Stability** — fixes SQLite concurrency failures |
| [#24264](https://github.com/openclaw/openclaw/pull/24264) | @frankekn | Serialize QMD fallback initialization | **Race condition fix** |
| [#35978](https://github.com/openclaw/openclaw/pull/35978) | @KimGLee | Outbound recovery persistence (duplicate of #40374, likely backport) | |

### Active Development (Open PRs)

| PR | Author | Focus Area |
|----|--------|-----------|
| [#40377](https://github.com/openclaw/openclaw/pull/40377) | @KimGLee | **Continuity hardening**: Telegram reply threading, subagent delivery, queue behavior guards |
| [#40366](https://github.com/openclaw/openclaw/pull/40366) | @shaabans | Slack no-reply fallback delivery hardening |
| [#40367](https://github.com/openclaw/openclaw/pull/40367) | @Julbarth | CLI one-shot exit hang fix (memory manager teardown) |
| [#40372](https://github.com/openclaw/openclaw/pull/40372) | @dsantoreis | Configurable `contextInjection` modes for token optimization |
| [#30185](https://github.com/openclaw/openclaw/pull/30185) | @joelnishanth | **Adaptive Model Routing** with token savings meter — major cost-saving feature |

---

## 4. Community Hot Topics

### Most Active Issues (by Comments)

| Issue | Comments | 👍 | Core Need |
|-------|----------|-----|-----------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n & Localization Support | 87 | 1 | **Global accessibility** — maintainers acknowledge demand but cite bandwidth constraints; community willing to contribute |
| [#32828](https://github.com/openclaw/openclaw/issues/32828) False 'API rate limit reached' on all models | 40 | 6 | **Trust/debuggability** — users need accurate error attribution, not false alarms |
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 36 | 58 | **Platform parity** — 58 upvotes show strong demand for desktop apps beyond macOS |
| [#39651](https://github.com/openclaw/openclaw/issues/39651) "Only talks, doesn't work" (Ollama permission issues) | 29 | 0 | **Local model reliability** — permissions/execution path confusion with Ollama |
| [#7649](https://github.com/openclaw/openclaw/issues/7649) Matrix E2EE self-verification | 20 | 3 | **Enterprise/secure messaging** — bot identity management in encrypted rooms |

**Underlying Pattern:** Users want OpenClaw to "just work" across platforms and providers, with clear error messages when it doesn't. The high engagement on i18n and cross-platform apps suggests the project is hitting mainstream adoption barriers.

---

## 5. Bugs & Stability

### 🔴 Critical Regressions (v2026.3.7)

| Issue | Severity | Provider/Scope | Status |
|-------|----------|---------------|--------|
| [#39844](https://github.com/openclaw/openclaw/issues/39844) Multiple backend regressions: tool calls & session handling | **P0** | Kimi, multiple providers | Tracking issue, no fix yet |
| [#39691](https://github.com/openclaw/openclaw/issues/39691) Agents can't run commands after 2026.3.7 | **P0** | All (exec tool) | No PR linked |
| [#39907](https://github.com/openclaw/openclaw/issues/39907) kimi-coding/k2p5 emits literal exec(...) text | **P0** | Kimi-specific | No PR linked |
| [#40069](https://github.com/openclaw/openclaw/issues/40069) Tool execution fails silently | **P0** | General | No PR linked |
| [#37466](https://github.com/openclaw/openclaw/issues/37466) Unable to load exec tool | **P0** | General | No PR linked |
| [#36994](https://github.com/openclaw/openclaw/issues/36994) Exec and tools keep breaking | **P1** | General regression | No PR linked |

### 🟡 High-Priority Stability Issues

| Issue | Severity | Notes |
|-------|----------|-------|
| [#39621](https://github.com/openclaw/openclaw/issues/39621) Dashboard returns plain-text "Not Found" | **P1** | Fixed by [#39856](https://github.com/openclaw/openclaw/pull/39856) |
| [#39611](https://github.com/openclaw/openclaw/issues/39611) Control UI "device identity required" after navigation | **P1** | Session/auth state regression in 2026.3.7 |
| [#39889](https://github.com/openclaw/openclaw/issues/39889) Control UI hangs in Chromium/Vivaldi | **P1** | Frontend rendering, Firefox works |
| [#40089](https://github.com/openclaw/openclaw/issues/40089) Gateway restart leaves service dead (bootout without bootstrap) | **P1** | macOS LaunchAgent reliability |
| [#36822](https://github.com/openclaw/openclaw/issues/36822) Config-change restart fails via launchctl, gateway degraded | **P1** | Related to above |

### 🟢 Fixed Today

| Issue | Fix PR |
|-------|--------|
| [#28877](https://github.com/openclaw/openclaw/issues/28877) macOS arm64-only regression | Closed |
| [#13552](https://github.com/openclaw/openclaw/issues/13552) macOS gateway auth token over SSH | Closed |
| [#39081](https://github.com/openclaw/openclaw/issues/39081) Windows PATH inheritance | Closed |
| [#8714](https://github.com/openclaw/openclaw/issues/8714) Custom OpenAI provider undefined error | Closed |
| [#34972](https://github.com/openclaw/openclaw/issues/34972) Version output missing commit SHA | Closed |
| [#36817](https://github.com/openclaw/openclaw/issues/36817) gpt-5.4 tracking | Closed |
| [#39423](https://github.com/openclaw/openclaw/issues/39423) Anthropic token format change | Closed |
| [#39839](https://github.com/openclaw/openclaw/issues/39839) Tool calls broken with kimi-k2.5 | Closed (but [#39844](https://github.com/openclaw/openclaw/issues/39844) suggests broader issue remains) |
| [#32331](https://github.com/openclaw/openclaw/issues/32331) Chrome Extension Relay disconnects | Closed |
| [#11199](https://github.com/openclaw/openclaw/issues/11199) Discord multi-agent filtering | Closed |

---

## 6. Feature Requests & Roadmap Signals

### Likely Next-Version Candidates

| Feature | Signal Strength | Evidence |
|---------|-----------------|----------|
| **Adaptive Model Routing** | 🔥🔥🔥 Very High | [#30185](https://github.com/openclaw/openclaw/pull/30185) open PR with full implementation; solves cost/quality tradeoff automatically |
| **Context Injection Modes** | 🔥🔥🔥 Very High | [#40372](https://github.com/openclaw/openclaw/pull/40372) open PR; major token optimization for long sessions |
| **SearXNG Search Fallback** | 🔥🔥 High | [#2317](https://github.com/openclaw/openclaw/issues/2317) (15 👍); addresses Brave rate limits |
| **TTS Provider Unification** | 🔥🔥 High | [#26893](https://github.com/openclaw/openclaw/pull/26893) open PR; Edge/OpenAI/ElevenLabs support |
| **Post-Hook Actions / Session Control** | 🔥🔥 High | [#38161](https://github.com/openclaw/openclaw/pull/38161) open PR; `blockSessionSave`, `sessionSaveContent` for advanced workflows |
| **Linux/Windows Desktop Apps** | 🔥🔥 High | [#75](https://github.com/openclaw/openclaw/issues/75) (58 👍); maintainer-acknowledged gap |
| **i18n Framework** | 🔥🔥 High | [#3460](https://github.com/openclaw/openclaw/issues/3460) (87 comments); community ready to contribute |

### Longer-Term Signals

- **Voice wake/Brabble integration** ([#147](https://github.com/openclaw/openclaw/issues/147)): Star Trek-style "Hello Computer" activation — niche but visionary
- **Discriminator Layer middleware** ([#9030](https://github.com/openclaw/openclaw/issues/9030)): Architectural safety proposal for agent output validation

---

## 7. User Feedback Summary

### 😤 Top Pain Points

| Issue | Frequency | User Impact |
|-------|-----------|-------------|
| **Tool execution failures** | Critical spike | Core functionality broken in v2026.3.7; users cannot rely on agents to perform actions |
| **False error messages** | High | "API rate limit reached" when APIs are fine — erodes trust |
| **Platform gaps** | Persistent | No Linux/Windows desktop apps; macOS-only limits adoption |
| **Permission confusion with local models** | Moderate | Ollama users struggle with file system access |
| **Session/auth state fragility** | Moderate | Control UI disconnects, "device identity required" errors |

### 😊 Positive Signals

- **High engagement**: 500 issues/PRs in 24h shows strong community investment
- **Responsive maintainers**: Fast closure of clear bugs (macOS universal binary, Windows PATH)
- **Architectural investment**: ContextEngine plugin system shows long-term thinking
- **Cost-conscious features**: Adaptive routing PR addresses real user economics

### Use Case Evolution

Users are pushing OpenClaw beyond "chat with AI" into:
- **Multi-agent Discord/Slack teams** (bot-to-bot communication)
- **Local-first workflows** (Ollama, self-hosted SearXNG)
- **Enterprise integrations** (Matrix E2EE, SSO, audit trails)

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n framework | ~6 weeks | Community frustration | Define contribution guidelines, create i18n WG |
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows apps | ~10 weeks | Platform lock-in perception | Roadmap commitment or community bridge solution |
| [#9754](https://github.com/openclaw/openclaw/issues/9754) Config model.primary ignored | ~1 month | Configuration reliability | Root cause analysis |
| [#25692](https://github.com/openclaw/openclaw/issues/25692) Tools unavailable after restart | ~2 weeks | Operational fragility | Link to v2026.3.7 regressions? |
| [#12354](https://github.com/openclaw/openclaw/issues/12354) Gateway crashes on network loss | ~1 month | Resilience gap | Graceful degradation design |
| [#17444](https://github.com/openclaw/openclaw/issues/17444) PI embedded compaction blocking | ~3 weeks | Embedded reliability | Session lane timeout architecture |

### Stale PRs at Risk

| PR | Issue | Recommendation |
|----|-------|---------------|
| [#26893](https://github.com/openclaw/openclaw/pull/26893) TTS provider config | Open since Feb 25 | Merge or close; conflicts with [#40369](https://github.com/openclaw/openclaw/pull/40369)/[#39226](https://github.com/openclaw/openclaw/pull/39226) |

---

## Health Assessment

| Metric | Status | Notes |
|--------|--------|-------|
| **Velocity** | 🟢 Excellent | 500+ daily updates |
| **Release Quality** | 🔴 Concerning | v2026.3.7 introduced critical regressions |
| **Community Engagement** | 🟢 Strong | High comment counts, constructive feedback |
| **Issue Triage** | 🟡 Backlogged | 365 open PRs, 417 open issues |
| **Platform Coverage** | 🟡 Gaps | macOS-first, Linux/Windows lagging |
| **Architectural Direction** | 🟢 Sound | ContextEngine, adaptive routing show maturity |

**Immediate Recommendation:** Issue hotfix release (v2026.3.8) addressing tool execution regressions before promoting v2026.3.7 broadly.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
## 2026-03-09 Community Digest Analysis

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing **unprecedented velocity** with over 1,000 combined PR/issue updates across 11 tracked projects in a single 24-hour period. The landscape has bifurcated into two distinct tiers: **mature infrastructure projects** (OpenClaw, NanoBot, IronClaw, Moltis) handling enterprise-scale deployments with 50-500 daily updates, and **emerging specialized frameworks** (PicoClaw, ZeptoClaw, TinyClaw) iterating rapidly on specific use cases. A critical tension dominates the space: **feature expansion is outpacing stability**, with multiple projects (OpenClaw, NanoClaw, IronClaw) reporting critical regressions in recent releases while simultaneously shipping major architectural improvements. Chinese market integration (Feishu/Lark, QQ, WeCom, Zhipu AI, MiniMax) has emerged as a universal priority, reflecting global demand for localized, data-sovereign AI infrastructure.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* | Key Indicator |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.3.7 (hotfix needed) | ⚠️ 7/10 | Critical tool execution regressions; highest absolute velocity |
| **NanoBot** | 19 | 64 | v0.1.4.post4 | 🟢 8/10 | Strong multi-instance focus; 29 new contributors in release |
| **ZeroClaw** | 34 | 50 | None (staged) | ⚠️ 6/10 | Unicode panic + encryption leak unpatched; enterprise pivot |
| **PicoClaw** | 16 | 52 | None (nightly CI) | 🟢 7/10 | Task-plan tracking merged; agent architecture refactor in flight |
| **NanoClaw** | 19 | 50 | v1.2.6 (regressed) | 🔴 5/10 | Scheduler race conditions; 38 open PRs blocked |
| **IronClaw** | 29 | 50 | v0.17.0 staged | ⚠️ 6/10 | Silent failures + destructive ops unguarded; E2E test investment |
| **LobsterAI** | 7 | 6 | v0.2.2 (QQ regressions) | ⚠️ 6/10 | 3/7 new issues are QQ-related launch bugs |
| **TinyClaw** | 2 | 6 | None | 🟢 7/10 | Clean local model support path; AMD MI300X validated |
| **Moltis** | 4 | 41 | None (pre-release) | 🟢 8/10 | 40 open PRs = reviewer bottleneck risk; lazy tool registry milestone |
| **CoPaw** | 50 | 25 | v0.0.5.post1 | 🟢 7/10 | Strong first-time contributor flow; shell hangs blocking prod |
| **ZeptoClaw** | 3 | 2 | None | 🟢 6/10 | Low volume but clean; tool parity achieved |
| **EasyClaw** | 1 | 0 | None | 🟡 4/10 | Minimal activity; community-building request only |

*\*Health score combines velocity, stability, release quality, and maintainer responsiveness (10=excellent)*

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily | 10-25x higher absolute activity than nearest competitor |
| **Architectural maturity** | `ContextEngine` plugin system with 7 lifecycle hooks | NanoBot has basic plugin interface; Moltis building lazy registry; others lack comparable extensibility |
| **Provider diversity** | Kimi, Anthropic, OpenAI, Ollama, with `LegacyContextEngine` backward compat | IronClaw catching up (Bedrock, Codex); NanoClaw still Claude-locked per #782 |
| **Release cadence** | Multiple daily releases possible | Most peers: weekly/monthly or stalled (ZeroClaw: no release) |

### Technical Approach Differences

| Aspect | OpenClaw | Peer Pattern |
|:---|:---|:---|
| **State management** | Persistent recovery attempts + outbound replay-loop prevention (#40374) | NanoClaw: scheduler race conditions; IronClaw: silent job drops |
| **Multi-platform** | macOS-first, Linux/Windows lagging (#75: 58 👍) | CoPaw: cross-platform desktop packaging complete; PicoClaw: embedded focus |
| **Error handling** | "False API rate limit" attribution problems (#32828) | Moltis: cleaner error propagation; IronClaw: silent failure cluster |

### Community Size Comparison

OpenClaw's **83:417 closed-to-open issue ratio** indicates a **mature but triage-stressed community**—larger than NanoBot (16:3 open) or IronClaw (balanced), but with proportionally higher backlog pressure. Only Moltis shows comparable PR volume (41/day) with healthier open/closed balance.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Evidence |
|:---|:---|:---|
| **Chinese IM integration** | OpenClaw, NanoBot, ZeroClaw, PicoClaw, LobsterAI, CoPaw | Feishu/Lark: NanoBot #215 (23 comments), ZeroClaw #3012, PicoClaw #1210; QQ: LobsterAI v0.2.2, CoPaw #91; WeCom: LobsterAI #331 |
| **Local/self-hosted model support** | OpenClaw, NanoBot, TinyClaw, IronClaw, CoPaw, ZeptoClaw | Ollama: OpenClaw #39651, TinyClaw #111/#166, CoPaw #372, ZeptoClaw #284; vLLM/SGLang: TinyClaw #166 (AMD MI300X tested) |
| **Multi-instance/tenant isolation** | NanoBot, OpenClaw, ZeroClaw | NanoBot: v0.1.4.post4 headline feature; hardcoded path conflicts #1739; OpenClaw: workspace isolation in ContextEngine |
| **Tool execution reliability** | OpenClaw, NanoClaw, IronClaw, NanoBot | OpenClaw: P0 regressions #39844, #39691; NanoClaw: "faking tool calls" incident; IronClaw: #697 silent routine failures; NanoBot: MCP reliability focus |
| **Cost optimization / adaptive routing** | OpenClaw, Moltis, IronClaw | OpenClaw: #30185 "Adaptive Model Routing" with token savings meter; Moltis: #363 reasoning effort controls; IronClaw: #698 token budget concerns |
| **Voice/multimodal** | Moltis, ZeroClaw, PicoClaw | Moltis: #303 push-to-talk + VAD; ZeroClaw: #3029 Whisper global; PicoClaw: #1214 Groq Whisper |
| **Browser automation** | PicoClaw, NanoClaw, OpenClaw | PicoClaw: #293 (5 👍, 4 👍); NanoClaw: #832 Chrome CDP relay; OpenClaw: Chrome Extension Relay fixes |
| **MCP (Model Context Protocol) ecosystem** | IronClaw, Moltis, PicoClaw, ZeroClaw | IronClaw: #721 stdio/UDS transports; Moltis: #330 lazy tool registry; PicoClaw: #1243 lazy loading; ZeroClaw: #2894 hot reload |

---

## 5. Differentiation Analysis

| Project | Primary Differentiation | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Universal plugin architecture; highest velocity | Power users, multi-agent operators | `ContextEngine` lifecycle hooks; recovery persistence |
| **NanoBot** | Multi-instance production deployments; Chinese market depth | Enterprise SaaS, multi-tenant platforms | Instance isolation; 58-contributor community releases |
| **ZeroClaw** | Rust-based performance; enterprise compliance features | Security-conscious enterprises, IAM-heavy orgs | @rareba's 12-PR enterprise surge (backup, audit, IAM) |
| **PicoClaw** | Embedded/edge deployment; task-plan visualization | IoT, resource-constrained environments | `tasktool` with progress messages; SOUL.md agent identity |
| **NanoClaw** | Claude-native agent swarms; scheduler orchestration | Claude-dependent workflows, agent-to-agent systems | Host-worker task scheduler; model routing by task type |
| **IronClaw** | Async job orchestration; event-driven workflows | Background job processors, webhook integrators | E2E test harness; workflow event system (#743) |
| **LobsterAI** | Rapid IM platform expansion; NetEase ecosystem | Chinese enterprise notifications | WeCom + QQ same-day release |
| **TinyClaw** | Minimal-dependency local AI; AMD GPU validation | On-premise AI, cost-sensitive developers | Custom OpenAI-compatible provider; `TINYCLAW_INSTALL_DIR` |
| **Moltis** | Token efficiency at scale; multi-language SDKs | High-volume MCP users, platform builders | Lazy tool registry (-15K tokens/turn); TS/Python/Go SDK |
| **CoPaw** | First-time contributor accessibility; Windows focus | Windows + Ollama users, agent beginners | Desktop packaging; session interruption UX |
| **ZeptoClaw** | pi-rs tool parity; skill marketplace quality | Code-editing agent developers | Grep/find/diff toolset; SKILL.md deep scanning |

---

## 6. Community Momentum & Maturity

### Tier 1: Hyper-Velocity (500+ daily items)
- **OpenClaw**: Mature but stability-stressed; needs hotfix discipline

### Tier 2: Rapid Iteration (40-80 daily items)
| Project | Trajectory | Risk Signal |
|:---|:---|:---|
| **NanoBot** | Stabilizing multi-instance | 46:18 open:closed PR ratio = review bottleneck |
| **Moltis** | Pre-release consolidation | 40 open PRs without merge queue |
| **IronClaw** | Feature expansion over reliability | 7 critical/high bugs unassigned |
| **ZeroClaw** | Enterprise pivot before foundation | S1 unicode panic + encryption leak unpatched |
| **PicoClaw** | Architectural refactor phase | Agent identity system (#1218) unproven at scale |

### Tier 3: Controlled Growth (20-30 daily items)
- **CoPaw**: Healthy contributor onboarding; production blockers need attention
- **NanoClaw**: **Degraded** — scheduler incident requires stabilization sprint

### Tier 4: Early/Niche (2-7 daily items)
- **TinyClaw**, **ZeptoClaw**, **LobsterAI**: Feature-complete for scope; scaling challenges ahead
- **EasyClaw**: Maintenance mode or research project; community building needed

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **"Local-first" is default expectation** | TinyClaw #166 MI300X validation; OpenClaw Ollama pain; CoPaw #372 config fragility | Design for air-gapped deployment first; cloud as opt-in |
| **Chinese market = table stakes** | 6/11 projects with active Feishu/QQ/WeCom work; Zhipu AI demand (#2, #103) | Internationalization architecture must include zh-CN providers and IM platforms |
| **Tool cost explosion driving architecture** | Moltis #330 lazy registry (-15K tokens); OpenClaw #30185 adaptive routing | Token-aware tool selection is becoming core infrastructure, not optimization |
| **Scheduler reliability is the new bottleneck** | NanoClaw March 8 incident; OpenClaw race fixes; IronClaw silent failures | Agent orchestration needs distributed systems rigor (idempotency, exactly-once, circuit breakers) |
| **Voice as default interface** | Moltis #303 PTT/VAD; ZeroClaw #3029 Whisper; PicoClaw #1214 | Plan for audio I/O in core architecture, not as add-on |
| **MCP as de facto standard** | 4 projects with active MCP work; lazy loading, hot reload, stdio transports | Treat MCP server ecosystem as dependency graph; plan for 100+ tool contexts |
| **Contributor experience = competitive advantage** | CoPaw 8/11 first-time contributor PRs; NanoBot 29 new contributors | Automated testing, clear skill docs, and responsive review drive velocity |

### Strategic Implication

The ecosystem is **transitioning from "demo agents" to "production infrastructure"**—evidenced by multi-instance isolation, cost controls, audit trails, and systemd packaging appearing simultaneously across projects. Developers choosing a framework should prioritize **scheduler hardening** and **token efficiency** over feature breadth, as these are emerging as the primary production blockers.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-09

## 1. Today's Overview

NanoBot shows **exceptionally high activity** for a single day: 64 PRs updated (46 open, 18 merged/closed) and 19 issues with 16 still active. The project released **v0.1.4.post4**, a major community-driven milestone with 58 merged PRs and 29 new contributors. Development velocity indicates a healthy, rapidly maturing open-source ecosystem with strong focus on multi-instance deployments, platform integrations (Telegram, Feishu, QQ, DingTalk, Discord), and MCP/tool reliability. However, the high open-to-closed ratio on PRs (46:18) suggests potential review bottleneck risk.

---

## 2. Releases

### [v0.1.4.post4](https://github.com/HKUDS/nanobot/releases/tag/v0.1.4.post4)
**Major community release** — 58 PRs merged, 29 new contributors.

| Category | Improvements |
|----------|-------------|
| **Safety & Defaults** | Safer default configurations |
| **Multi-Instance** | Better support for running multiple NanoBot instances |
| **MCP/Tools** | Stronger reliability for Model Context Protocol and tool execution |
| **Platform Integrations** | Major polish for Telegram, Feishu (Lark), QQ, DingTalk, Discord |

**Migration Notes**: Users running multiple instances should verify port configurations and workspace isolation settings.

---

## 3. Project Progress

### Merged/Closed PRs Today (18 total, selected highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#1749](https://github.com/HKUDS/nanobot/pull/1749) | @VotorDev | Patches | Maintenance |
| [#111](https://github.com/HKUDS/nanobot/pull/111) | @ThomasZB | **Google Vertex AI provider support** | New cloud provider |
| [#1744](https://github.com/HKUDS/nanobot/pull/1744) | @andruum | **Configurable Whisper models for Groq** | Flexibility for transcription |
| [#1740](https://github.com/HKUDS/nanobot/pull/1740) | @akcode7 | Respect explicit provider config in model resolution | Fixes provider auto-detection bugs |
| [#1579](https://github.com/HKUDS/nanobot/pull/1579) | @VITOHJL | Refined platform policy and memory SKILL docs | Documentation quality |

**Key Advances**:
- **Cloud provider expansion**: Vertex AI joins the supported provider list
- **Transcription flexibility**: Groq Whisper models now configurable (addresses [#1584](https://github.com/HKUDS/nanobot/issues/1584))
- **Model resolution reliability**: Fixed cases where explicit provider settings were ignored

---

## 4. Community Hot Topics

### Most Active by Engagement

| Issue/PR | Comments | 👍 | Topic | Analysis |
|:---|:---:|:---:|:---|:---|
| [#215](https://github.com/HKUDS/nanobot/issues/215) | **23** | 0 | Feishu long connection failure | **Critical platform integration pain point** — Chinese enterprise users blocked on Lark/Feishu deployment |
| [#2](https://github.com/HKUDS/nanobot/issues/2) | **18** | **6** | Zhipu AI (Z.AI) native support | **Strong demand for Chinese LLM ecosystem** — GLM-4.x series integration requested |
| [#1719](https://github.com/HKUDS/nanobot/issues/1719) | 1 | **5** | Swappable web_search backend | **Architectural debt** — 15 failed PRs attempting alternate search providers; community needs plugin interface |

### Underlying Needs
- **China market readiness**: Feishu + Zhipu AI requests indicate strong Chinese enterprise/user demand
- **Search provider diversity**: Brave-only hardcoding creates friction; users want Tavily, SearXNG, Serper, DuckDuckGo
- **Enterprise deployment**: Long-running connections and multi-instance stability for production use

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---:|
| **🔴 High** | [#1698](https://github.com/HKUDS/nanobot/issues/1698) | Auto memory consolidation fails to persist `last_consolidated`, causing infinite retry storms | [#1691](https://github.com/HKUDS/nanobot/pull/1691) open |
| **🔴 High** | [#1739](https://github.com/HKUDS/nanobot/issues/1739) | `NANOBOT_HOME` ignored on Windows; multiple instances conflict on Telegram | ❌ No |
| **🟡 Medium** | [#1736](https://github.com/HKUDS/nanobot/issues/1736) | Gateway port ignores `config.gateway.port`, always uses CLI default 18790 | ❌ No |
| **🟡 Medium** | [#1692](https://github.com/HKUDS/nanobot/issues/1692) | Telegram bot answers twice (Markdown + plain text) | ❌ No |
| **🟡 Medium** | [#1699](https://github.com/HKUDS/nanobot/issues/1699) | Dockerfile build fails due to npm SSH dependency on private key | ❌ No |
| **🟢 Low** | [#1710](https://github.com/HKUDS/nanobot/issues/1710) | "No response to give" — empty answer handling needed | ❌ No |

**Critical Pattern**: Multi-instance deployment bugs are accumulating — hardcoded paths (logs, ports, config resolution) create conflicts when running multiple NanoBot instances on one machine.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **WebSocket channel** | [#1685](https://github.com/HKUDS/nanobot/issues/1685), [#1748](https://github.com/HKUDS/nanobot/pull/1748), [#1341](https://github.com/HKUDS/nanobot/pull/1341) | **High** | 2 competing PRs active; core maintainer interest for local/agentic use cases |
| **WebChat UI** | [#1748](https://github.com/HKUDS/nanobot/pull/1748), [#1341](https://github.com/HKUDS/nanobot/pull/1341) | **High** | SSE streaming, multi-session UI in progress |
| **Search provider plugin interface** | [#1719](https://github.com/HKUDS/nanobot/issues/1719) | Medium | Maintainer attention needed; 15 failed PRs indicate design decision required |
| **Zhipu AI/Z.AI support** | [#2](https://github.com/HKUDS/nanobot/issues/2) | Medium | Strong community demand (+6 👍), Chinese market priority |
| **Mistral provider** | [#1680](https://github.com/HKUDS/nanobot/pull/1680) | Medium | PR open, general transcription service architecture |
| **Security scanning for skills** | [#1721](https://github.com/HKUDS/nanobot/pull/1721) | Medium | VirusTotal integration for malicious skill detection |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Multi-instance fragility** | [#1739](https://github.com/HKUDS/nanobot/issues/1739), [#1695](https://github.com/HKUDS/nanobot/issues/1695), [#1694](https://github.com/HKUDS/nanobot/issues/1694), [#1736](https://github.com/HKUDS/nanobot/issues/1736) | 🔴 Critical |
| **Platform integration gaps** | [#215](https://github.com/HKUDS/nanobot/issues/215) Feishu, [#1692](https://github.com/HKUDS/nanobot/issues/1692) Telegram double-response | 🟡 High |
| **Silent failures / poor error messages** | [#1710](https://github.com/HKUDS/nanobot/issues/1710) empty responses, [#1697](https://github.com/HKUDS/nanobot/issues/1697) missing query results | 🟡 High |
| **Build/dependency issues** | [#1699](https://github.com/HKUDS/nanobot/issues/1699) npm SSH dependency | 🟢 Medium |

### Use Cases Emerging
- **Enterprise multi-tenant deployment**: Running isolated NanoBot instances per team/customer
- **Headless/agentic workflows**: WebSocket-only operation without messaging platforms ([#1685](https://github.com/HKUDS/nanobot/issues/1685))
- **Chinese market deployment**: Feishu/Lark + domestic LLMs (Zhipu)

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Status | Action Needed |
|:---|:---:|:---|:---|
| [#215](https://github.com/HKUDS/nanobot/issues/215) Feishu long connection | ~1 month | 23 comments, no resolution | Platform expertise needed; may require Lark SDK update |
| [#2](https://github.com/HKUDS/nanobot/issues/2) Zhipu AI support | ~1 month | 18 comments, 6 👍 | Provider integration decision; competing with [#111](https://github.com/HKUDS/nanobot/pull/111) Vertex pattern |
| [#1719](https://github.com/HKUDS/nanobot/issues/1719) Search provider interface | 1 day | 5 👍, 15 failed PRs referenced | **Architectural decision required** — define plugin seam |
| [#126](https://github.com/HKUDS/nanobot/pull/126) GitHub Actions Docker publishing | ~1 month | Open, working implementation | CI/CD infrastructure merge decision |
| [#1341](https://github.com/HKUDS/nanobot/pull/1341) vs [#1748](https://github.com/HKUDS/nanobot/pull/1748) WebChat | 9 days / 1 day | Two competing implementations | Consolidation or selection needed |

### Risk Assessment
- **Review bottleneck**: 46 open PRs vs 18 closed suggests maintainer capacity constraints
- **Duplicate effort**: Two WebChat PRs may waste contributor energy
- **Architecture debt**: Search provider extensibility needs explicit design before more PRs accumulate

---

*Digest generated from GitHub activity data for 2026-03-09. All links verified against github.com/HKUDS/nanobot.*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-09

## 1. Today's Overview

ZeroClaw shows **exceptionally high development velocity** with 50 PRs and 34 issues updated in the last 24 hours, indicating an active pre-release sprint. No new releases were cut, suggesting the project is accumulating changes toward a significant version bump. The contributor @rareba dominates today's activity with 12 substantial feature PRs spanning enterprise security, observability, and multi-modal capabilities. Critical stability issues remain unaddressed—particularly Chinese character handling (#3024) and encryption key leakage (#2992)—while the community actively debates architectural alignment with external frameworks (#3030). The project appears to be pivoting from core agent functionality toward enterprise features (compliance, IAM, backup/restore) before stabilizing foundational bugs.

---

## 2. Releases

**No new releases** — ZeroClaw remains at v0.2.0 (per environment notes in #3038) or v0.1.7 (per #2953). The accumulation of 44 open PRs without release suggests either: (a) a major v0.3.0 release is imminent, or (b) release cadence has stalled due to stability concerns.

---

## 3. Project Progress

### Merged/Closed Today (6 PRs)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3034](https://github.com/zeroclaw-labs/zeroclaw/pull/3034) | @rareba | Fix Windows compilation: make `sync_directory` async on all platforms | **Critical fix** — unblocks Windows builds |
| — | — | *Only 1 of 6 closed PRs visible in data* | — |

### Closed Issues (5 items)

| Issue | Author | Resolution |
|:---|:---|:---|
| [#1955](https://github.com/zeroclaw-labs/zeroclaw/issues/1955) | @turtleizzy | Qwen coding-plan entrypoint added as alternative provider URL |
| [#2208](https://github.com/zeroclaw-labs/zeroclaw/issues/2208) | @sopaco | Cortex-mem memory backend support implemented |
| [#1006](https://github.com/zeroclaw-labs/zeroclaw/issues/1006) | @MollyKlinteback | llama.cpp server provider documentation/implementation resolved |
| [#719](https://github.com/zeroclaw-labs/zeroclaw/issues/719) | @livemau5 | Rate limit disabling via config (`-1`/`unlimited`) now supported |
| [#2561](https://github.com/zeroclaw-labs/zeroclaw/issues/2561) | @Lemonawa | Telegram native streaming via `sendMessageDraft` implemented |

**Assessment:** Provider ecosystem expansion (Qwen, llama.cpp, Cortex-mem) and operational flexibility (rate limits, streaming) are advancing well.

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count)

| Rank | Issue/PR | Comments | Core Tension |
|:---|:---|:---:|:---|
| 1 | [#3012](https://github.com/zeroclaw-labs/zeroclaw/issues/3012) — channel-lark feature misnamed, undocumented, not default | 6 | **Branding confusion**: "Lark" vs "Feishu" naming alienates Chinese enterprise users; feature flag discoverability |
| 2 | [#1955](https://github.com/zeroclaw-labs/zeroclaw/issues/1955) — Qwen coding-plan entrypoint | 5 | Provider fragmentation: Alibaba Cloud's multiple endpoints require explicit configuration |
| 3 | [#2208](https://github.com/zeroclaw-labs/zeroclaw/issues/2208) — Cortex-mem backend | 4 | Rust ecosystem integration: community memory solutions vs. built-in |
| 4 | [#1006](https://github.com/zeroclaw-labs/zeroclaw/issues/1006) — llama.cpp HOWTO | 4 | Local AI onboarding friction: documentation gaps for self-hosted models |

### Underlying Needs Analysis

- **Enterprise China market**: [#3012](https://github.com/zeroclaw-labs/zeroclaw/issues/3012) and [#1955](https://github.com/zeroclaw-labs/zeroclaw/issues/1955) reveal Feishu/Lark and Qwen as critical for Chinese adoption, but treated as second-class integrations
- **Memory pluggability**: [#2208](https://github.com/zeroclaw-labs/zeroclaw/issues/2208) shows demand for swappable memory backends—users want to bring their own infrastructure
- **Local-first AI**: [#1006](https://github.com/zeroclaw-labs/zeroclaw/issues/1006) indicates llama.cpp users struggle with Jinja template configuration

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **S0** — Security risk | [#3008](https://github.com/zeroclaw-labs/zeroclaw/issues/3008) | Coding plans restricted to "code agent and openclaw" — request spoofing needed | No PR |
| **S1** — Workflow blocked | [#3024](https://github.com/zeroclaw-labs/zeroclaw/issues/3024) | **Panic in `loop_.rs`** with Chinese characters: byte index not char boundary | No PR — **critical** |
| **S1** — Workflow blocked | [#2961](https://github.com/zeroclaw-labs/zeroclaw/issues/2961) | Web agent对话失败 (web agent conversation fails) despite CLI working | No PR |
| **S1** — Workflow blocked | [#2992](https://github.com/zeroclaw-labs/zeroclaw/issues/2992) | **Encrypted secrets sent raw**: `enc2:` prefix leaked in Authorization header | No PR — **critical** |
| **S2** — Degraded | [#2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953) | `channel-matrix` flag missing from official builds | No PR |
| **S3** — Minor | [#3044](https://github.com/zeroclaw-labs/zeroclaw/issues/3044) | Onboarding command for custom model incorrect | No PR |
| **S3** — Minor | [#3033](https://github.com/zeroclaw-labs/zeroclaw/issues/3033) | `default_temperature` config ignored for `zeroclaw agent` | No PR |

### Critical Concerns

- **Unicode safety**: [#3024](https://github.com/zeroclaw-labs/zeroclaw/issues/3024) is a runtime panic affecting CJK users—indicates insufficient string handling testing
- **Security regression**: [#2992](https://github.com/zeroclaw-labs/zeroclaw/issues/2992) suggests encryption feature was shipped without integration testing of the decryption path

---

## 6. Feature Requests & Roadmap Signals

### High-Probability Near-Term Features (PRs in flight)

| Feature | PR | Evidence | Confidence |
|:---|:---|:---|:---:|
| Microsoft 365 integration | [#3042](https://github.com/zeroclaw-labs/zeroclaw/pull/3042) | Complete Graph API implementation with 10 operations | 95% |
| Global Whisper transcription | [#3029](https://github.com/zeroclaw-labs/zeroclaw/pull/3029) | `whisper-rs` + ffmpeg integration, fixes Telegram voice | 90% |
| MCP hot reload | [#2894](https://github.com/zeroclaw-labs/zeroclaw/pull/2894) | SIGHUP handling for zero-downtime config reload | 85% |
| Azure OpenAI provider | [#3007](https://github.com/zeroclaw-labs/zeroclaw/pull/3007) | API version 2024-10-21, managed identity auth | 80% |
| WhatsApp Web reconnect | [#3045](https://github.com/zeroclaw-labs/zeroclaw/pull/3045) | QR code on logout, session recovery | 80% |

### Strategic Signals (Issues without PRs)

| Request | Issue | Likelihood | Rationale |
|:---|:---|:---:|:---|
| Multi-model provider support | [#2998](https://github.com/zeroclaw-labs/zeroclaw/issues/2998) | High | Common pattern; config schema likely needs `[[providers]]` array |
| Raspberry Pi Model B binary | [#3043](https://github.com/zeroclaw-labs/zeroclaw/issues/3043) | Medium | ARMv6 vs ARMv7 architecture confusion; build matrix expansion |
| Claude Code/Gemini CLI/KiloCLI tools | [#2990](https://github.com/zeroclaw-labs/zeroclaw/issues/2990) | Medium | ToS concerns noted; may be blocked by vendor policies |
| Multi-provider TTS | [#2988](https://github.com/zeroclaw-labs/zeroclaw/issues/2988) | High | Matches existing STT pattern; enterprise demand |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Configuration fragility** | [#3013](https://github.com/zeroclaw-labs/zeroclaw/issues/3013) (`onboard` overwrites config), [#3044](https://github.com/zeroclaw-labs/zeroclaw/issues/3044) (wrong onboarding command) | High |
| **Web UI reliability** | [#3038](https://github.com/zeroclaw-labs/zeroclaw/issues/3038) (context loss), [#3010](https://github.com/zeroclaw-labs/zeroclaw/issues/3010) (WebSocket protocol mismatch), [#3009](https://github.com/zeroclaw-labs/zeroclaw/issues/3009) (API returns HTML) | Critical |
| **Gateway management** | [#3015](https://github.com/zeroclaw-labs/zeroclaw/issues/3015) (no `get-paircode` without restart), [#3014](https://github.com/zeroclaw-labs/zeroclaw/issues/3014) (no `restart` command) | Medium |
| **Platform build gaps** | [#2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953) (Matrix missing), [#3043](https://github.com/zeroclaw-labs/zeroclaw/issues/3043) (Pi Model B), [#3034](https://github.com/zeroclaw-labs/zeroclaw/pull/3034) (Windows compile) | Medium |

### Positive Signals

- **Enterprise readiness demand**: Compliance (#3018), IAM (#3019), audit (#3018), and workspace isolation (#3021) PRs suggest paid/enterprise user interest
- **Multi-modal enthusiasm**: STT/TTS expansion (#2988, #2989, #3029) indicates voice-first use cases
- **Architectural alignment outreach**: [#3030](https://github.com/zeroclaw-labs/zeroclaw/issues/3030) (Bloom framework) shows ecosystem interest in ZeroClaw's design patterns

---

## 8. Backlog Watch

### Issues Needing Maintainer Response

| Issue | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#3030](https://github.com/zeroclaw-labs/zeroclaw/issues/3030) — Bloom architectural alignment | 1 day | **Ecosystem partnership opportunity** | Maintainer response to collaboration inquiry |
| [#2991](https://github.com/zeroclaw-labs/zeroclaw/issues/2991) — Multi-machine node system | 1 day | Core distributed runtime | Design review; conflicts with @rareba's PR surge |
| [#2986](https://github.com/zeroclaw-labs/zeroclaw/issues/2986) — Google Workspace CLI | 1 day | Enterprise integration | Prioritization vs. Microsoft 365 (#3042) |

### PR Review Bottleneck

**44 open PRs** with 12 from single contributor @rareba suggests:
- Potential maintainer bandwidth constraint
- Risk of merge conflicts across @rareba's interdependent features (security, observability, tools)
- Need for feature flagging or merge queue to prevent main instability

**Recommended maintainer actions:**
1. **Immediate**: Triage S1 bugs [#3024](https://github.com/zeroclaw-labs/zeroclaw/issues/3024), [#2992](https://github.com/zeroclaw-labs/zeroclaw/issues/2992) — assign or create fix PRs
2. **This week**: Batch-review @rareba's enterprise features for v0.3.0 scope
3. **Strategic**: Respond to [#3030](https://github.com/zeroclaw-labs/zeroclaw/issues/3030) to cultivate ecosystem partnerships

---

*Digest generated from 50 PRs and 34 issues updated 2026-03-08 to 2026-03-09.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-09

## 1. Today's Overview

PicoClaw shows **very high development velocity** with 52 PRs and 16 issues updated in the last 24 hours, indicating an active pre-release sprint. The project is undergoing significant architectural evolution, particularly around **Agent refactoring** (#1216, #1218) and **channel stability fixes** (QQ, Telegram). No new releases were published, but the volume of merged fixes (9 PRs) suggests maintainers are prioritizing stability over feature shipping. The community is notably engaged with enterprise integration needs (WeChat Work, DingTalk) and multi-agent orchestration requests.

---

## 2. Releases

**No new releases** — Version remains at v0.2.0-284-g66e6fb6 (per #1247). The project appears to be in a "nightly build" phase with PR #1226 introducing automated nightly CI/CD.

---

## 3. Project Progress

### Merged/Closed PRs Today (9 total)

| PR | Type | Summary | Impact |
|:---|:---|:---|:---|
| [#992](https://github.com/sipeed/picoclaw/pull/992) | Bug fix | Reasoning content fallback for empty responses | Fixes #966 — improves DeepSeek/R1 compatibility |
| [#1171](https://github.com/sipeed/picoclaw/pull/1171) | Enhancement | Feishu random reaction emoji config | UX polish for enterprise users |
| [#1072](https://github.com/sipeed/picoclaw/pull/1072) | Enhancement | `picoclaw model <name>` CLI command | Duplicate of #1250, closed in favor of newer implementation |
| [#1248](https://github.com/sipeed/picoclaw/pull/1248) | Feature | Task-plan tracking with progress messages | **Major** — adds `tasktool` with persisted session state |
| [#746](https://github.com/sipeed/picoclaw/pull/746) | Docs | Fix broken GitHub Markdown callouts | Minor documentation fix |

**Key Advancements:**
- **Task execution visualization** (#1248) — Live progress plans with updatable messages, addressing a core UX gap in long-running agent operations
- **Model switching CLI** (#1250) — Runtime configuration changes without editing JSON files

---

## 4. Community Hot Topics

### Most Active Discussions (by engagement)

| Issue/PR | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#1210](https://github.com/sipeed/picoclaw/issues/1210) | 9 | WeChat Work (企业微信) AI Bot configuration | **Enterprise adoption** — users need clear documentation for corporate IM integration |
| [#1218](https://github.com/sipeed/picoclaw/issues/1218) | 8 | Agent architecture: `SOUL.md` + `AGENT.md` | **Personality/character definition** — users want agents with persistent identity beyond prompt engineering |
| [#675](https://github.com/sipeed/picoclaw/issues/675) | 6 | MiniMax LLM provider support | **Cost optimization** — demand for affordable Chinese LLM alternatives |
| [#293](https://github.com/sipeed/picoclaw/issues/293) | 5, 👍4 | Autonomous browser operations | **Web agent capabilities** — critical for real-world automation use cases |
| [#302](https://github.com/sipeed/picoclaw/issues/302) | 5, 👍2 | Public Docker image (ghcr.io) | **Deployment friction** — private registry blocks CI/CD adoption |

**Analysis:** The community is pulling PicoClaw toward **enterprise production readiness** (WeChat, DingTalk, Feishu, Docker) while the core team focuses on **agent architecture fundamentals**. There's tension between "make it work for my company today" and "make it architecturally correct for tomorrow."

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#1247](https://github.com/sipeed/picoclaw/issues/1247) | OpenRouter provider strips `openrouter/` prefix, breaking API calls | **No fix PR yet** — blocks OpenRouter users |
| **High** | [#1242](https://github.com/sipeed/picoclaw/issues/1242) | QQ channel ignores `bindings` for agent routing | [#1255](https://github.com/sipeed/picoclaw/pull/1255) open — wrong API endpoint used |
| **Medium** | [#1245](https://github.com/sipeed/picoclaw/issues/1245) | Skill installation incomplete | [#1252](https://github.com/sipeed/picoclaw/pull/1252) open — GitHub recursive download fix |
| **Medium** | [#1249](https://github.com/sipeed/picoclaw/issues/1249) | `SKILL.md` not auto-injected into LLM context | [#1253](https://github.com/sipeed/picoclaw/pull/1253) open — `LoadSkillsForContext()` wired up |
| **Medium** | [#1212](https://github.com/sipeed/picoclaw/issues/1212) | Telegram "typing..." indicator persists after response | **No fix PR yet** |
| **Low** | [#1235](https://github.com/sipeed/picoclaw/issues/1235) | Leaked thinking tags (`<think>`) in content | **No fix PR yet** — affects MiniMax-style providers |

**Regressions:** None identified as release-blocking. The OpenRouter prefix bug (#1247) appears to be a recent regression from provider refactoring.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Agent refactor (SOUL.md/AGENT.md)** | [#1216](https://github.com/sipeed/picoclaw/issues/1216), [#1218](https://github.com/sipeed/picoclaw/issues/1218) | **Very High** | Meta issue created; foundational for all future agent work |
| **Nightly builds / CI** | [#1226](https://github.com/sipeed/picoclaw/pull/1226) | **High** | PR open, infrastructure investment |
| **DingTalk card messaging** | [#1251](https://github.com/sipeed/picoclaw/pull/1251) | **High** | Enterprise demand, PR ready |
| **Audio transcription (Groq Whisper)** | [#977](https://github.com/sipeed/picoclaw/pull/977), [#1214](https://github.com/sipeed/picoclaw/pull/1214) | **Medium-High** | Two related PRs, Telegram integration ready |
| **MCP tool discovery/lazy loading** | [#1243](https://github.com/sipeed/picoclaw/pull/1243) | **Medium** | Solves real scaling problem for MCP servers |
| **Browser automation** | [#293](https://github.com/sipeed/picoclaw/issues/293) | **Medium** | High community demand, but architectural complexity |
| **Multi-agent node clustering** | [#1244](https://github.com/sipeed/picoclaw/issues/1244) | **Low-Medium** | Closed as duplicate/roadmap; likely post-agent-refactor |
| **eBPF command security** | [#1017](https://github.com/sipeed/picoclaw/issues/1017) | **Low** | Enterprise security need, but complex implementation |

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | User Quote (paraphrased) |
|:---|:---|:---|
| Configuration complexity | High | "How to configure WeChat Work AI Bot???" — [#1210](https://github.com/sipeed/picoclaw/issues/1210) |
| Deployment friction | Medium | "ghcr.io/sipeed/picoclaw is private" — [#302](https://github.com/sipeed/picoclaw/issues/302) |
| Channel-specific bugs | Medium | QQ bindings don't work, Telegram typing stuck — [#1242](https://github.com/sipeed/picoclaw/issues/1212) |
| Provider compatibility | Medium | OpenRouter prefix stripped, MiniMax tags leaked — [#1247](https://github.com/sipeed/picoclaw/issues/1247), [#1235](https://github.com/sipeed/picoclaw/issues/1235) |

### Positive Signals
- **Skill system engagement**: Users actively installing custom skills (#1245, #1249)
- **Enterprise readiness requests**: WeChat, DingTalk, Feishu integrations show B2B potential
- **Voice/UX polish**: Audio transcription feedback (#1214) indicates attention to interaction quality

### Satisfaction Gap
Users want **"it just works" deployment** but currently face: private Docker registry, sparse documentation for enterprise channels, and provider-specific quirks. The project is **feature-rich but polish-poor**.

---

## 8. Backlog Watch

| Issue/PR | Age | Problem | Action Needed |
|:---|:---|:---|:---|
| [#293](https://github.com/sipeed/picoclaw/issues/293) | 21 days | Browser automation roadmap — high priority, no implementation | Maintainer decision on Playwright vs. alternative |
| [#302](https://github.com/sipeed/picoclaw/issues/302) | 21 days | Private Docker registry blocks adoption | One-click settings change by org owner |
| [#675](https://github.com/sipeed/picoclaw/issues/675) | 14 days | MiniMax provider — community PR possible? | Label as "good first issue" or implement |
| [#664](https://github.com/sipeed/picoclaw/pull/664) | 14 days | Custom model protocol fix — open, needs review | Merge or request changes |
| [#820](https://github.com/sipeed/picoclaw/pull/820) | 11 days | Shell security bypass fixes — critical safety | Security review, merge priority |
| [#1017](https://github.com/sipeed/picoclaw/issues/1017) | 5 days | eBPF security component — enterprise feature | Roadmap placement decision |

**Critical Attention:** PR [#820](https://github.com/sipeed/picoclaw/pull/820) fixes 5 shell injection bypass vectors — should be prioritized for security release.

---

*Digest generated from 52 PRs and 16 issues updated 2026-03-08 to 2026-03-09.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-09

## 1. Today's Overview

NanoClaw shows **high-velocity development activity** with 50 PRs and 19 issues updated in the last 24 hours, though no new releases were cut. The project is experiencing significant **scheduler subsystem instability** following a March 8th production incident involving "faking tool calls" and race conditions in once-task execution. Multiple critical fixes are in flight from contributor @199-bio addressing fundamental orchestrator reliability issues. Community demand for multi-channel identity management, browser automation, and enhanced security hardening is driving feature development. However, **38 open PRs remain blocked or in review**, suggesting potential maintainer bandwidth constraints relative to submission volume.

---

## 2. Releases

**No new releases** — version 1.2.6 remains current. Notable: v1.2.6 introduced a regression on Apple Container (`.env` shadow mount crash, see #834).

---

## 3. Project Progress

### Merged/Closed PRs Today (4 items)

| PR | Description | Significance |
|:---|:---|:---|
| [#478](https://github.com/qwibitai/nanoclaw/pull/478) | Google Vertex AI authentication support | **Major platform expansion** — enables GCP-hosted Claude access |
| [#705](https://github.com/qwibitai/nanoclaw/pull/705) | Sender allowlist for per-chat access control | Core security feature: trigger vs. drop modes for access control |
| [#817](https://github.com/qwibitai/nanoclaw/pull/817) | `/compact` skill for manual context compaction | Addresses #322 "context rot" in long sessions |
| [#849](https://github.com/qwibitai/nanoclaw/pull/849) | Model routing + cross-agent communication + host-worker task scheduler | **Architecture milestone** — intelligent model selection (haiku/sonnet) by task type, agent-to-agent messaging |

### Notable Advances
- **Credential isolation architecture**: PR #798 (closed, superseded) established foundation for proxy-based secret management, with follow-up security work ongoing
- **Channel abstraction maturation**: Signal and Telegram attachment handling converging toward unified interfaces (#844, #850)

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Type | Engagement | Core Tension |
|:---|:---|:---|:---|
| [#832](https://github.com/qwibitai/nanoclaw/issues/832) | Enhancement | 👍 2 | **Browser automation vs. sandbox limits** — CDP relay to bypass reCAPTCHA using host Chrome |
| [#322](https://github.com/qwibitai/nanoclaw/issues/322) → [#817](https://github.com/qwibitai/nanoclaw/pull/817) | Enhancement | 👍 2, resolved | Context window management in long-running sessions |
| [#737](https://github.com/qwibitai/nanoclaw/issues/737) | Security (closed) | 👍 1, CVE pending | AI agent capability to bypass secret protection via environment inspection |

### Underlying Needs Analysis

| Theme | Evidence | Interpretation |
|:---|:---|:---|
| **Production reliability** | 5 scheduler-related bugs filed March 8 by @199-bio | Core orchestrator reached complexity threshold; needs systematic hardening |
| **Multi-channel identity** | [#841](https://github.com/qwibitai/nanoclaw/issues/841) | Users want persistent agent identity across WhatsApp/Telegram/Discord/Slack |
| **Non-Claude LLM support** | [#782](https://github.com/qwibitai/nanoclaw/issues/782) | Project perceived as Claude-locked; accessibility concerns |

---

## 5. Bugs & Stability

### Critical Severity

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#825](https://github.com/qwibitai/nanoclaw/issues/825) | **Race condition**: once-tasks marked complete before fire handler runs — root cause of March 8 incident | No PR yet; @199-bio filed with proposed fix |
| [#827](https://github.com/qwibitai/nanoclaw/issues/827) | `FinishReason::ToolUse` with 0 tool calls accepted as success (protocol violation) | No PR yet |
| [#830](https://github.com/qwibitai/nanoclaw/issues/830) | Scheduled tasks silently dropped when session busy | No PR yet; proposes deferred fire queue |
| [#834](https://github.com/qwibitai/nanoclaw/issues/834) | Apple Container: v1.2.6 `.env` shadow mount breaks startup (exit code 1) | No PR yet |

### High Severity

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#828](https://github.com/qwibitai/nanoclaw/issues/828) | `schedule_task` documentation/code mismatch: ISO8601 vs RFC3339 | No PR yet |
| [#842](https://github.com/qwibitai/nanoclaw/issues/842) | WebFetch/WebSearch vulnerable to Anthropic refusal string injection | **Fix PR available**: [#843](https://github.com/qwibitai/nanoclaw/pull/843) |
| [#783](https://github.com/qwibitai/nanoclaw/issues/783) | `schedule_task` lacks idempotency — duplicate tasks accumulate | No PR yet |

### Stability Assessment
**Degraded** — The March 8 incident exposed fundamental scheduler race conditions. Five related bugs filed within hours suggest either incident post-mortem findings or systematic code review. No releases should be cut until [#825](https://github.com/qwibitai/nanoclaw/issues/825), [#827](https://github.com/qwibitai/nanoclaw/issues/827), [#830](https://github.com/qwibitai/nanoclaw/issues/830) are resolved.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Request | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **User-entity layer / multi-channel identity** | [#841](https://github.com/qwibitai/nanoclaw/issues/841) | **High** — architectural foundation laid | Core limitation explicitly acknowledged; aligns with #832, #844 channel abstraction work |
| **Chrome CDP browser relay** | [#832](https://github.com/qwibitai/nanoclaw/issues/832) | Medium — implementation provided | Working implementation offered; needs security review for host exposure |
| **Gmail ingestion** | [#813](https://github.com/qwibitai/nanoclaw/issues/813) | Medium | Complements #812 fleeting notes pipeline (PR open) |
| **GitHub integration** | [#846](https://github.com/qwibitai/nanoclaw/pull/846) | **High** — PR ready | Complete skill package with safety guardrails |
| **JSON-RPC IPC replacement** | [#816](https://github.com/qwibitai/nanoclaw/pull/816) | Medium — architectural | Replaces filesystem polling; stdio-based, WebSocket-equivalent |
| **Status HTTP server** | [#831](https://github.com/qwibitai/nanoclaw/pull/831) | Medium | Zero-dependency observability; blocked status suggests review queue |

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Quote/Context | Severity |
|:---|:---|:---|
| Claude subscription lock-in | *"I don't have claude subscription and I use other LLM provider"* — [#782](https://github.com/qwibitai/nanoclaw/issues/782) | **Accessibility barrier** |
| Setup complexity (Windows) | Untranslated Chinese issue: "win11 opencode的如何配置" — [#833](https://github.com/qwibitai/nanoclaw/issues/833) | Internationalization gap |
| Silent failures | ISO8601/RFC3339 mismatch causes silent parse failures — [#828](https://github.com/qwibitai/nanoclaw/issues/828) | DX/ reliability |
| Container idle timeout | 30-minute hangs when agents use IPC-only messaging — [#839](https://github.com/qwibitai/nanoclaw/issues/839) (closed) | Resource efficiency |

### Positive Signals
- Strong engagement with **knowledge management workflows** (#812 fleeting notes, #813 Gmail)
- **Security-conscious community**: proactive reporting of injection vectors (#842, #737)
- **Platform expansion**: Vertex AI support merged (#478) indicates enterprise/GCP demand

---

## 8. Backlog Watch

### Blocked PRs Needing Maintainer Action

| PR | Blocked Since | Risk |
|:---|:---|:---|
| [#744](https://github.com/qwibitai/nanoclaw/pull/744) S3 storage skill | Mar 5 | Storage abstraction gap persists |
| [#799](https://github.com/qwibitai/nanoclaw/pull/799) Timezone-aware context | Mar 7 | Daily reliability issue for UTC servers |
| [#801](https://github.com/qwibitai/nanoclaw/pull/801) Andy review automation | Mar 7 | Governance/ops debt |
| [#812](https://github.com/qwibitai/nanoclaw/pull/812) Fleeting notes pipeline | Mar 8 | User workflow blocked |
| [#835](https://github.com/qwibitai/nanoclaw/pull/835) Telegram duplicate messages | Mar 8 | Production bug fix |
| [#831](https://github.com/qwibitai/nanoclaw/pull/831) Status HTTP server | Mar 8 | Observability gap |

### Long-Unanswered Issues
- [#553](https://github.com/qwibitai/nanoclaw/issues/553) Container execution fails after WhatsApp connection recovery (Feb 27, medium priority) — VPN/networking edge case

### Recommendation
**38 open PRs vs. 12 merged/closed** suggests **review bottleneck**. Consider:
1. Triage PRs blocking critical fixes (scheduler stability)
2. Delegate skill reviews to domain maintainers
3. Cut release only after #825, #827, #830, #834 resolved

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-09

## Today's Overview

IronClaw shows **exceptionally high development velocity** with 79 total items updated in 24 hours (29 issues, 50 PRs), split evenly between open and closed states. The project is in active feature expansion mode with major provider integrations (AWS Bedrock, OpenAI Codex) and infrastructure hardening landing simultaneously. However, **stability concerns are emerging**: multiple critical bugs around job execution, sandbox failures, and destructive agent actions were reported today. The v0.17.0 release is queued but not yet published, containing breaking API changes. Overall health is **growth-positive but stability-challenged**—new capabilities are outpacing reliability safeguards.

---

## Releases

**No new releases today.**  
Release v0.17.0 is staged in PR [#633](https://github.com/nearai/ironclaw/pull/633) with breaking API changes (externally-constructible struct adds field), but not yet published.

---

## Project Progress

### Merged/Closed PRs (25 total, selected highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#724](https://github.com/nearai/ironclaw/pull/724) | Fix: Skip `/quit` on EOF when stdin is not TTY (daemon mode) | **Critical fix** — enables `ironclaw service start` on macOS/Linux systems |
| [#687](https://github.com/nearai/ironclaw/pull/687) | Time tool: timezone conversion support | Feature parity — adds IANA timezone support, `convert`/`format` operations |
| [#683](https://github.com/nearai/ironclaw/pull/683) | Standardize libSQL timestamps as RFC 3339 UTC | Data integrity fix for embedded database users |
| [#726](https://github.com/nearai/ironclaw/pull/726) | Fix: `init_secrets` no longer overwrites entire config | **Critical fix** — prevents credential injection from wiping agent/tool configs |
| [#715](https://github.com/nearai/ironclaw/pull/715) | Prevent Enter key sending during IME composition | UX fix for CJK language users |
| [#686](https://github.com/nearai/ironclaw/pull/686) | Bind postgres to localhost only in Docker | Security hardening |
| [#690](https://github.com/nearai/ironclaw/pull/690) | Add items schema for array-type parameters | JSON Schema compliance for HTTP/Json tools |

**Infrastructure investments:** CI redesign ([#682](https://github.com/nearai/ironclaw/pull/682)) introduces staging branch with batched testing; E2E test harness ([#743](https://github.com/nearai/ironclaw/pull/743)) adds mock LLM + webhook infrastructure.

---

## Community Hot Topics

### Most Active by Engagement

| Item | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#324](https://github.com/nearai/ironclaw/issues/324) Telegram bot only manually polls | 7 comments | **Integration reliability** | Production Telegram deployments need webhook/polling automation; manual intervention is unsustainable |
| [#80](https://github.com/nearai/ironclaw/issues/80) Multi-provider LLM support | 2 comments | **Provider diversity** | Users want failover and local model support (Ollama) for cost control and privacy |
| [#697](https://github.com/nearai/ironclaw/issues/697) Routines fail silently without sandbox | 2 comments | **Observability** | Silent failures in job execution destroy trust; users need clear error propagation |

### Emerging Patterns
- **Provider fragmentation**: Users simultaneously requesting OpenAI Codex ([#742](https://github.com/nearai/ironclaw/issues/742)), Bedrock streaming ([#741](https://github.com/nearai/ironclaw/issues/741)), and Kimi K2.5 compatibility ([#728](https://github.com/nearai/ironclaw/issues/728)) — signaling demand for **universal model access**
- **Onboarding friction**: Linux keychain issues ([#727](https://github.com/nearai/ironclaw/issues/727)), model name not persisting (fixed in [#600](https://github.com/nearai/ironclaw/issues/600)) — setup wizard needs platform-aware defaults

---

## Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| **Critical** | [#701](https://github.com/nearai/ironclaw/issues/701) Agent destructive actions from ambiguous prompts | Open | None — needs confirmation flow design |
| **Critical** | [#698](https://github.com/nearai/ironclaw/issues/698) No token budget/iteration cap; cancel button broken | Open | None — cost exposure risk |
| **High** | [#697](https://github.com/nearai/ironclaw/issues/697) Routines fail silently without Docker | Open | None |
| **High** | [#699](https://github.com/nearai/ironclaw/issues/699) Chat API silently drops messages | Open | None |
| **High** | [#700](https://github.com/nearai/ironclaw/issues/700) CLI crashes on libSQL backend | Open | None |
| **High** | [#733](https://github.com/nearai/ironclaw/issues/733) ngrok zombie processes | Open | None |
| **High** | [#738](https://github.com/nearai/ironclaw/issues/738) Managed tunnel binds to wrong port | Open | None |
| **Medium** | [#732](https://github.com/nearai/ironclaw/issues/732) HTTP tool redirect handling | Open | None |
| **Medium** | [#728](https://github.com/nearai/ironclaw/issues/728) Kimi K2.5 temperature/reasoning_content issues | Open | None |

**Fixed today:** [#723](https://github.com/nearai/ironclaw/issues/723) (daemon exit), [#718](https://github.com/nearai/ironclaw/issues/718) (`-m` mode exit), [#354](https://github.com/nearai/ironclaw/issues/354) (heartbeat status), [#600](https://github.com/nearai/ironclaw/issues/600) (model persistence), [#666](https://github.com/nearai/ironclaw/issues/666) (API key save)

---

## Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in v0.18 | Rationale |
|:---|:---|:---|:---|
| OpenAI Codex (ChatGPT subscription) | [#742](https://github.com/nearai/ironclaw/issues/742) / [#744](https://github.com/nearai/ironclaw/pull/744) | **High** | PR already open, OAuth flow complete |
| AWS Bedrock native provider | [#713](https://github.com/nearai/ironclaw/pull/713) | **High** | XL PR in review, feature-gated |
| Bedrock streaming | [#741](https://github.com/nearai/ironclaw/issues/741) | **Medium** | Depends on #713 merge |
| Cognitive memory (engramai) | [#739](https://github.com/nearai/ironclaw/issues/739) | **Medium** | Research-stage, no PR yet |
| Full image support | [#725](https://github.com/nearai/ironclaw/pull/725) | **High** | XL PR in review, cross-channel |
| MCP stdio/UDS transports | [#721](https://github.com/nearai/ironclaw/pull/721) | **High** | PR open, unblocks local MCP servers |

**Architectural direction**: Event-driven workflow system ([#743](https://github.com/nearai/ironclaw/pull/743)) suggests v0.18+ will emphasize **async job orchestration** over synchronous request-response.

---

## User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Silent failures** | [#697](https://github.com/nearai/ironclaw/issues/697), [#699](https://github.com/nearai/ironclaw/issues/699) | Critical — destroys debugging confidence |
| **Destructive operations without guardrails** | [#701](https://github.com/nearai/ironclaw/issues/701) | Critical — data loss risk |
| **Cost/runaway job exposure** | [#698](https://github.com/nearai/ironclaw/issues/698) | Critical — financial risk |
| **Tunnel/webhook reliability** | [#733](https://github.com/nearai/ironclaw/issues/733), [#738](https://github.com/nearai/ironclaw/issues/738) | High — breaks external integrations |
| **Platform-native onboarding** | [#727](https://github.com/nearai/ironclaw/issues/727) | Medium — Linux friction |

### Positive Signals
- Active provider expansion meets diverse deployment needs
- Timezone awareness ([#661](https://github.com/nearai/ironclaw/issues/661), [#662](https://github.com/nearai/ironclaw/issues/662)) shows responsiveness to global user base
- MCP ecosystem investment ([#721](https://github.com/nearai/ironclaw/pull/721)) positions for tool interoperability

---

## Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#324](https://github.com/nearai/ironclaw/issues/324) Telegram polling | 13 days | **Production blocker** | Core maintainer decision on webhook architecture |
| [#80](https://github.com/nearai/ironclaw/issues/80) Multi-provider LLM | 23 days | Strategic | Partially addressed by #713, #744; needs Ollama prioritization |
| [#459](https://github.com/nearai/ironclaw/issues/459) Missing docker images | 6 days | Deployment friction | CI/CD fix for `ironclaw-worker:latest` publishing |
| [#702](https://github.com/nearai/ironclaw/issues/702) HTTP channel no hot-reload | New | Operational pain | Linked to #651; needs config system refactor |

**Maintainer attention recommended**: The cluster of job execution bugs ([#697](https://github.com/nearai/ironclaw/issues/697), [#698](https://github.com/nearai/ironclaw/issues/698), [#699](https://github.com/nearai/ironclaw/issues/699), [#701](https://github.com/nearai/ironclaw/issues/701)) suggests the agent scheduler/worker subsystem needs **dedicated reliability sprint** before v0.17.0 release.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-09

## 1. Today's Overview

LobsterAI shows **high development velocity** with 6 PRs processed (5 merged/closed, 1 open) and 7 new issues filed, all currently open. The project released **v0.2.2** today, marking significant IM platform expansion with WeCom and QQ support. However, **community health shows tension**: while core development is active, user-reported bugs are accumulating without resolution—particularly around newly shipped QQ integration and local LLM deployment. The 7:0 open-to-closed issue ratio suggests maintainer bandwidth may be stretched. Overall assessment: **strong feature delivery, emerging quality debt**.

---

## 2. Releases

### [v0.2.2](https://github.com/netease-youdao/LobsterAI/releases/tag/v0.2.2) — 2026-03-08

| Category | Details |
|----------|---------|
| **New Features** | • **WeCom (企业微信) support** — Enterprise WeChat IM integration ([#331](https://github.com/netease-youdao/LobsterAI/pull/331), [#335](https://github.com/netease-youdao/LobsterAI/pull/335)) by @fisherdaddy<br>• **QQ support** — QQ bot integration ([#333](https://github.com/netease-youdao/LobsterAI/pull/333)) by @liuzhq1986 |
| **Bug Fixes** | • Scheduled task creation page now includes new IM channels ([#332](https://github.com/netease-youdao/LobsterAI/pull/332)) |

**Migration Notes:** Users upgrading to v0.2.2 should verify scheduled task configurations—existing tasks may need re-selection of notification channels to use new WeCom/QQ options.

---

## 3. Project Progress

### Merged/Closed PRs (5 items)

| PR | Author | Summary | Significance |
|:---|:---|:---|:---|
| [#331](https://github.com/netease-youdao/LobsterAI/pull/331) | @fisherdaddy | WeCom IM integration | **Major feature** — expands enterprise adoption surface |
| [#333](https://github.com/netease-youdao/LobsterAI/pull/333) | @liuzhq1986 | QQ IM integration | **Major feature** — consumer messaging market |
| [#335](https://github.com/netease-youdao/LobsterAI/pull/335) | @fisherdaddy | Fix: scheduled tasks WeCom support bug | **Critical fix** — completes WeCom feature loop |
| [#332](https://github.com/netease-youdao/LobsterAI/pull/332) | @fisherdaddy | UI: add new IM channels to scheduled task page | **Polish** — prevents user confusion |
| [#327](https://github.com/netease-youdao/LobsterAI/pull/327) | @liuzhq1986 | Fix: blurry icons in skill dialogs, workspace, attachments | **UX improvement** — visual quality |

**Progress Assessment:** 100% merge rate on closed PRs. Focus area: **IM platform expansion** (WeCom + QQ) with immediate follow-up fixes for integration completeness.

---

## 4. Community Hot Topics

### Most Active Discussion

| Issue | Activity | Analysis |
|:---|:---|:---|
| [#150](https://github.com/netease-youdao/LobsterAI/issues/150) Ollama local deployment failure | **6 comments**, active since Feb 27 | **Highest engagement** — Local LLM deployment is a core use case; ongoing pain suggests documentation or compatibility gaps. User @wuyj6710 reports deployment failures with screenshot evidence. |
| [#61](https://github.com/netease-youdao/LobsterAI/pull/61) OpenAI API type selection | Open since Feb 23, updated today | **Long-running feature PR** — Adds `responses` vs `chat_completions` API type selection. Addresses OpenAI's evolving API landscape. Needs maintainer review. |

**Underlying Needs:**
- **Local/edge AI priority**: Ollama issues indicate strong demand for offline/private deployment
- **OpenAI compatibility**: Users need flexibility as OpenAI deprecates/redirects APIs

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **High** | [#339](https://github.com/netease-youdao/LobsterAI/issues/339) | QQ scheduled task notifications fail — falls back to local Lobster alerts | **Regression in v0.2.2** — new feature incomplete |
| 🔴 **High** | [#338](https://github.com/netease-youdao/LobsterAI/issues/338) | Task timeout errors: "处理消息时出错: 处理超时" for long-running tasks | No fix PR |
| 🟡 **Medium** | [#337](https://github.com/netease-youdao/LobsterAI/issues/337) | QQ message duplication — single message received twice | No fix PR |
| 🟡 **Medium** | [#334](https://github.com/netease-youdao/LobsterAI/issues/334) | Claude Sonnet 4.6 false "low balance" error | No fix PR — API/provider compatibility issue |
| 🟡 **Medium** | [#330](https://github.com/netease-youdao/LobsterAI/issues/330) | Skill invocation fails on Win11 + Intel Arc + IPEX-LLM + Ollama | No fix PR — hardware-specific local deployment |
| 🟢 **Low** | [#150](https://github.com/netease-youdao/LobsterAI/issues/150) | Ollama deployment (ongoing) | Community troubleshooting |

**Stability Assessment:** **3 of 7 new issues are QQ-related regressions** from today's release. The pattern suggests insufficient QA on new IM integrations. Timeout handling ([#338]) and message deduplication ([#337]) indicate architectural gaps in async processing.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version |
|:---|:---|:---|
| [#336](https://github.com/netease-youdao/LobsterAI/issues/336) | **Multiple custom provider keys/URLs** — support multiple LLM sources simultaneously | **High** — Simple config extension, high user value |
| [#61](https://github.com/netease-youdao/LobsterAI/pull/61) (PR) | **OpenAI API type selection** — `responses` vs `chat_completions` | **High** — PR exists, needs merge |
| — | **Improved timeout handling** for long tasks | **Medium** — Architectural change needed |
| — | **QQ message deduplication** | **Medium** — Bug fix priority |

**Predicted v0.2.3 focus:** QQ stability fixes + multi-provider configuration + OpenAI API flexibility.

---

## 7. User Feedback Summary

### Pain Points (Explicit)

| Theme | Evidence | Intensity |
|:---|:---|:---|
| **QQ integration fragility** | 3 issues (#337, #338, #339) on launch day | 🔴 Critical |
| **Local LLM deployment difficulty** | #150 (6 comments), #330 | 🟡 High — documentation/compat gaps |
| **Timeout handling for real work** | #338 — users expect async completion, not timeout errors | 🟡 High — breaks productivity use case |
| **Provider configuration limitations** | #336 — single key/URL restriction | 🟢 Moderate |

### Use Cases Emerging
- **Enterprise notifications**: WeCom adoption (successfully shipped)
- **Consumer automation**: QQ bots for personal task management (buggy launch)
- **Privacy-first local AI**: Ollama + Intel Arc/integrated GPU setups (unsupported edge cases)

### Satisfaction Signals
- ✅ Active feature delivery (WeCom/QQ as requested)
- ❌ **Quality perception risk**: "没法用" (unusable) in #150 title; immediate QQ bugs

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#150](https://github.com/netease-youdao/LobsterAI/issues/150) Ollama deployment | **10 days**, 6 comments | **Local AI user churn** | Maintainer response + repro guide |
| [#61](https://github.com/netease-youdao/LobsterAI/pull/61) OpenAI API selection | **14 days** open | **API compatibility drift** | Review/merge decision |
| — | — | — | Establish QQ integration QA checklist |

**Recommendation:** Prioritize [#150] response—local LLM users are a vocal, technically influential segment. Consider pinning or creating dedicated "Local Deployment" documentation issue.

---

*Digest generated from GitHub activity 2026-03-08 to 2026-03-09. All links: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-09

## 1. Today's Overview

TinyClaw shows **high development velocity** with 6 PRs updated in the last 24 hours (4 open, 2 closed) and 2 active issues, indicating an active contributor base pushing toward expanded model provider support and infrastructure hardening. The project is clearly in a **feature expansion phase**, with multiple concurrent efforts around local/self-hosted model support, multi-agent capabilities, and testing infrastructure. No releases were cut today, suggesting maintainers are accumulating changes before a version bump. The community is particularly vocal about wanting **local model support** (Ollama, vLLM, SGLang) and **Chinese model providers** (GLM 4.7, Kimi, Minimax), reflecting demand for vendor flexibility and data sovereignty.

---

## 2. Releases

**No new releases** — version unchanged.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Outcome | Significance |
|:---|:---|:---|:---|
| [#169](https://github.com/TinyAGI/tinyclaw/pull/169) | @dagelf | **CLOSED** | TUI channel + manifest-based channel registry — *implementation approach likely being revised* |
| [#167](https://github.com/TinyAGI/tinyclaw/pull/168) | @dpbmaverick98 | **CLOSED** | Duplicate of #168 (multi-agent + Kimi/Minimax) — *consolidated into #168* |

### Key Advances in Open PRs

- **Custom OpenAI-compatible provider** ([#166](https://github.com/TinyAGI/tinyclaw/pull/166)) — Enables SGLang, Ollama, vLLM, LM Studio, DeepSeek without external CLI dependencies; tested on AMD MI300X with Qwen3-32B. This directly addresses Issue #111.
- **CI/testing infrastructure** ([#170](https://github.com/TinyAGI/tinyclaw/pull/170)) — GitHub Actions workflow, smoke tests, fake provider for deterministic testing, install directory override via `TINYCLAW_INSTALL_DIR`.
- **Queue processor reliability** ([#171](https://github.com/TinyAGI/tinyclaw/pull/171)) — Fixes message draining logic; documents `heartbeat`, `web`, `cli` response channels.
- **Multi-agent + Chinese models** ([#168](https://github.com/TinyAGI/tinyclaw/pull/168)) — Kimi 2.5 and Minimax 2.5 integration via Claude Code.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#111 — Ollama and local model support](https://github.com/TinyAGI/tinyclaw/issues/111) | 3 comments, 1 👍 | **Highest community demand**. Users want local inference + Claude API key flexibility. Underlying need: **data privacy, cost control, vendor independence**. PR #166 directly addresses this. |
| [#103 — GLM 4.7 model support](https://github.com/TinyAGI/tinyclaw/issues/103) | 2 comments | Enterprise/users in China/Asia seeking **domestic model compliance** and routing flexibility. Suggests multi-region deployment needs. |
| [#166 — Custom OpenAI-compatible provider](https://github.com/TinyAGI/tinyclaw/pull/166) | New, high-impact | Community-contributed solution to #111; uses `custom` provider pattern. |

**Emerging pattern**: Users want TinyClaw to be **model-agnostic infrastructure**, not tied to any single provider. The "Crush CLI as one integration path" mention in #103 suggests frustration with external CLI dependencies.

---

## 5. Bugs & Stability

| Severity | Item | Status | Notes |
|:---|:---|:---|:---|
| **Medium** | Queue processor message draining | **Fix in PR #171** | Messages only advanced on new enqueue events; fix enables continuous draining. Affects reliability under load. |
| **Low** | Duplicate PRs #167/#168 | **Resolved** | Closed #167 as duplicate; indicates coordination overhead in multi-agent feature work. |

No crashes or regressions reported in issues today. Testing infrastructure PR (#170) proactively addresses stability gaps.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Local/self-hosted model support** | #111, #166 | **Very High** | PR #166 ready; tested on production hardware (AMD MI300X) |
| **GLM 4.7 support** | #103 | **Medium** | Awaiting implementation; may follow #166 pattern |
| **Kimi 2.5 / Minimax 2.5** | #168 | **High** | PR open; Claude Code-assisted implementation suggests rapid development |
| **TUI channel** | #169 (closed) | **Medium** | Closed but likely resurfacing; manifest registry pattern indicates architectural investment |
| **Multi-agent orchestration** | #168 | **High** | Core infrastructure change; significant PR in flight |

**Predicted v-next focus**: Provider extensibility (local + Chinese models) + testing maturity.

---

## 7. User Feedback Summary

### Pain Points
- **CLI dependency fatigue**: Users want native provider support, not wrapper scripts ("Crush CLI as one integration path")
- **Testing/debuggability**: Queue processor behavior was undocumented/non-obvious (addressed in #171)
- **Installation flexibility**: Hardcoded paths → `TINYCLAW_INSTALL_DIR` override added in #170

### Use Cases Emerging
- **On-premise AI**: AMD MI300X + SGLang + Qwen3-32B deployment (#166)
- **Multi-region compliance**: GLM 4.7 for China, Claude/OpenAI for Western markets
- **Agent swarms**: Multi-agent PRs suggest users building coordinated agent systems

### Satisfaction Signals
- Active PR contributions with detailed testing documentation
- Community providing hardware-specific validation (AMD MI300X)

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#103 — GLM 4.7 support](https://github.com/TinyAGI/tinyclaw/issues/103) | 21 days | **Medium** | Awaiting maintainer response; could be implemented via #166's `custom` provider pattern or promoted to first-class support |
| [#111 — Ollama/local support](https://github.com/TinyAGI/tinyclaw/issues/111) | 21 days | **Low** | Effectively resolved by #166; needs maintainer confirmation/closure |

**No critical stagnation** — both top issues have active technical paths forward. Maintainer attention should prioritize reviewing #166 (local models) and #168 (multi-agent/Chinese models) for merge readiness.

---

*Digest generated from GitHub activity 2026-03-08 → 2026-03-09*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-09

## 1. Today's Overview

Moltis shows **exceptionally high development velocity** with 41 PRs updated in 24 hours—40 still open and under active review, indicating a major feature push or pre-release consolidation phase. No new releases were cut, suggesting the team is accumulating changes rather than shipping incrementally. The issue tracker remains relatively quiet (4 issues), with 3 active bugs and 1 resolved compilation issue. The overwhelming PR volume relative to issues signals healthy contributor engagement but potential reviewer bottleneck risk.

---

## 2. Releases

**No new releases** (v0.10.x remains current).

---

## 3. Project Progress

### Closed Today
| PR | Description | Impact |
|:---|:---|:---|
| [#364](https://github.com/moltis-org/moltis/pull/364) | docs(security): add direct nginx websocket proxy example | Documentation improvement for self-hosters; closed without merge |

### Major Feature Advances (Open, Active)
| PR | Description | Strategic Value |
|:---|:---|:---|
| [#363](https://github.com/moltis-org/moltis/pull/363) | Reasoning effort support for extended thinking models | Enables Claude Opus 4.5 variants (low/medium/high reasoning) across all selectors—critical for agentic workflows |
| [#361](https://github.com/moltis-org/moltis/pull/361) | OpenAI Responses API SSE support | Future-proofs against Chat Completions deprecation; closes [#275](https://github.com/moltis-org/moltis/issues/275) |
| [#330](https://github.com/moltis-org/moltis/pull/330) | Lazy tool registry via `tool_search` | **Architectural milestone**: Solves 15K+ token overhead per turn with MCP servers—major efficiency win |
| [#303](https://github.com/moltis-org/moltis/pull/303) | Push-to-talk, VAD continuous listening, voice settings | Significant UX upgrade for voice interaction parity with commercial assistants |
| [#288](https://github.com/moltis-org/moltis/pull/288) | TypeScript/Python/Go SDK foundations with CI | **Ecosystem expansion**: Enables third-party integrations and enterprise adoption |

### Stability & Integration Fixes
| PR | Description | Closes |
|:---|:---|:---|
| [#362](https://github.com/moltis-org/moltis/pull/362) | Omit sandbox/node info from runtime prompt when disabled | [#360](https://github.com/moltis-org/moltis/issues/360) |
| [#359](https://github.com/moltis-org/moltis/pull/359) | Fix Codex model discovery (client_version reporting) | [#354](https://github.com/moltis-org/moltis/issues/354) |
| [#356](https://github.com/moltis-org/moltis/pull/356) | Break redirect loop via Tailscale Serve | [#350](https://github.com/moltis-org/moltis/issues/350) |
| [#358](https://github.com/moltis-org/moltis/pull/358) / [#355](https://github.com/moltis-org/moltis/pull/355) | Route Copilot enterprise tokens via proxy endpoint | Enterprise GitHub Copilot support |

---

## 4. Community Hot Topics

**No high-comment threads today**—all PRs show `undefined` or zero comments, indicating either:
- Rapid maintainer self-review workflow
- Discussion happening in Discord/Slack rather than GitHub
- PR batching before coordinated review

**Most technically significant open PRs by scope:**

| PR | Link | Underlying Need |
|:---|:---|:---|
| Lazy tool registry | [#330](https://github.com/moltis-org/moltis/pull/330) | Cost/token optimization for production MCP deployments—enterprise scalability concern |
| Multi-language SDKs | [#288](https://github.com/moltis-org/moltis/pull/288) | Platform ecosystem lock-in prevention; enterprise integration requirements |
| Matrix integration | [#331](https://github.com/moltis-org/moltis/pull/331) | Decentralized/federated messaging demand; privacy-conscious user base |
| Traditional Chinese i18n | [#339](https://github.com/moltis-org/moltis/pull/339) | APAC market expansion; accessibility for Taiwan/Hong Kong users |

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR | Status |
|:---|:---|:---|:---|
| **Medium** | [#366](https://github.com/moltis-org/moltis/issues/366): Cannot pair local node on macOS—`/ws` endpoint returns HTML instead of WebSocket upgrade | None identified | **Active, unassigned** |
| **Medium** | [#354](https://github.com/moltis-org/moltis/issues/354): OpenAI Codex model discovery incomplete (older models only) | [#359](https://github.com/moltis-org/moltis/pull/359) | **Fix pending review** |
| **Low** (resolved) | [#335](https://github.com/moltis-org/moltis/issues/335): `moltis-web` compilation failure | — | Closed 2026-03-08 |

**Regression risk**: High PR velocity (41/day) with single-digit merge rate suggests potential integration conflicts, especially across overlapping provider changes (#358/#355 Copilot routing, #363 reasoning effort, #361 Responses API).

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood Next Release |
|:---|:---|:---|
| Reasoning effort controls | PR [#363](https://github.com/moltis-org/moltis/pull/363) | **High** — Complete, addresses #347 |
| Lazy tool registry | PR [#330](https://github.com/moltis-org/moltis/pull/330) | **High** — Architectural priority, token cost driver |
| OpenAI Responses API | PR [#361](https://github.com/moltis-org/moltis/pull/361) | **Medium-High** — API migration necessity |
| Voice mode enhancements (PTT/VAD) | PR [#303](https://github.com/moltis-org/moltis/pull/303) | **Medium** — UX differentiator |
| SDK release (TS/Python/Go) | PR [#288](https://github.com/moltis-org/moltis/pull/288) | **Medium** — Foundation laid, may stabilize first |
| Send document tool | PR [#353](https://github.com/moltis-org/moltis/pull/353) | **Medium** — File handling expansion |
| Matrix channel support | PR [#331](https://github.com/moltis-org/moltis/pull/331) | **Lower** — Large surface area, needs soak time |

---

## 7. User Feedback Summary

### Pain Points
| Issue | Evidence | User Segment |
|:---|:---|:---|
| macOS local node pairing broken | [#366](https://github.com/moltis-org/moltis/issues/366) | Self-hosters, developers |
| Tailscale remote access redirect loops | [#350](https://github.com/moltis-org/moltis/issues/350) → [#356](https://github.com/moltis-org/moltis/pull/356) | Remote workers, homelab users |
| Codex model availability lag | [#354](https://github.com/moltis-org/moltis/issues/354) | OpenAI-dependent users |
| Sandbox hallucinations in prompts | [#360](https://github.com/moltis-org/moltis/issues/360) → [#362](https://github.com/moltis-org/moltis/pull/362) | Security-conscious deployments |

### Satisfaction Signals
- Active i18n contributions (zh-TW in [#339](https://github.com/moltis-org/moltis/pull/339)) indicate global adoption
- Enterprise Copilot fixes (#358/#355) suggest corporate deployment traction
- Voice feature investment (#303) shows responsiveness to accessibility/UX feedback

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#366](https://github.com/moltis-org/moltis/issues/366) macOS WebSocket pairing | 1 day | **High** — Blocks local development on macOS | Triage for platform-specific routing logic |
| [#331](https://github.com/moltis-org/moltis/pull/331) Matrix integration | 3 days | Medium — Large dependency (`matrix-sdk 0.16`) | Security review, integration testing |
| [#330](https://github.com/moltis-org/moltis/pull/330) Lazy tool registry | 4 days | Medium — Architectural change | Performance benchmarking validation |
| [#303](https://github.com/moltis-org/moltis/pull/303) Voice features | 5 days | Medium — Cross-browser compatibility | QA on non-Chrome browsers |
| [#296](https://github.com/moltis-org/moltis/pull/296) HTTP transport refactor | 6 days | **High** — Blocks SDK work | Merge dependency for [#288](https://github.com/moltis-org/moltis/pull/288) |
| [#285](https://github.com/moltis-org/moltis/pull/285) WhatsApp Sled persistence | 6 days | Medium — Data integrity | Review for race condition fixes |

**Reviewer bottleneck alert**: 40 open PRs with minimal comment activity suggests maintainers may need to prioritize merge queue or delegate review authority to prevent contributor fatigue.

---

*Digest generated from github.com/moltis-org/moltis data as of 2026-03-09*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-09

## 1. Today's Overview

CoPaw shows **high community momentum** with 50 issues and 25 PRs updated in the last 24 hours, indicating active daily engagement. The project released a hotfix version (0.0.5.post1) addressing console version sorting and UTC time handling. First-time contributors are driving significant innovation, with 8 of 11 open PRs coming from new contributors—including Matrix channel integration, session interruption mechanisms, and Linux systemd support. The issue backlog reveals persistent stability challenges around shell command execution, WebSocket message deduplication in Feishu, and configuration management. Overall project health appears **moderate-to-strong on growth** but **needs attention on reliability** for production deployments.

---

## 2. Releases

### [v0.0.5.post1](https://github.com/agentscope-ai/CoPaw/releases/tag/0.0.5.post1)

| Change | PR | Author |
|--------|-----|--------|
| feat(console): Optimize version sorting with update time priority | [#766](https://github.com/agentscope-ai/CoPaw/pull/766) | @zhaozhuang521 |
| fix(chats): Use UTC-Time | — | @zhijianma |
| chore(version): Bump version | [#782](https://github.com/agentscope-ai/CoPaw/pull/782) | @zhijianma |

**Breaking Changes:** None  
**Migration Notes:** Users experiencing timezone-related chat timestamp issues should see resolution. Console users will notice improved version ordering in the UI.

---

## 3. Project Progress

### Merged/Closed PRs (14 total, key highlights)

| PR | Description | Impact |
|-----|-------------|--------|
| [#956](https://github.com/agentscope-ai/CoPaw/pull/956) | Version bump to 0.0.5.post2 | Release pipeline |
| [#954](https://github.com/agentscope-ai/CoPaw/pull/954) | Console envs delete support | UX improvement |
| [#943](https://github.com/agentscope-ai/CoPaw/pull/943) | Unified allowlist access control for Feishu/Discord | Security & consistency |
| [#948](https://github.com/agentscope-ai/CoPaw/pull/948) | Russian language support for init_cmd | Internationalization |
| [#936](https://github.com/agentscope-ai/CoPaw/pull/936) | Fix table checkbox overlapping in sessions page | UI bugfix |
| [#840](https://github.com/agentscope-ai/CoPaw/pull/840) | Discord send_media implementation | Closes [#839](https://github.com/agentscope-ai/CoPaw/issues/839), [#286](https://github.com/agentscope-ai/CoPaw/issues/286) |
| [#242](https://github.com/agentscope-ai/CoPaw/pull/242) | Workspace nested markdown file support | Power user feature |
| [#843](https://github.com/agentscope-ai/CoPaw/pull/843) | Windows/macOS desktop packaging with conda-pack | Distribution milestone |
| [#849](https://github.com/agentscope-ai/CoPaw/pull/849) | Backend local/cloud LLM routing foundation | Architecture enhancement |

**Key Advancements:** Desktop packaging reaches cross-platform maturity; channel infrastructure (Discord media, unified allowlists) strengthens enterprise readiness; LLM routing foundation lays groundwork for hybrid local/cloud deployments.

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | 👍 | Topic | Underlying Need |
|-------|----------|-----|-------|---------------|
| [#230](https://github.com/agentscope-ai/CoPaw/issues/230) — Shell execution hangs frequently | 17 | 5 | **Critical reliability** | Windows users need robust subprocess handling with proper termination controls |
| [#941](https://github.com/agentscope-ai/CoPaw/issues/941) — Local Qwen models ignore PROFILE.md | 12 | 0 | Configuration parity | Local vs. cloud model behavior inconsistency frustrates self-hosters |
| [#91](https://github.com/agentscope-ai/CoPaw/issues/91) — QQ bot no reply (closed) | 9 | 2 | Channel callback | Debugging visibility for channel integrations |

### Most Active Open PRs

| PR | Description | Significance |
|-----|-------------|------------|
| [#969](https://github.com/agentscope-ai/CoPaw/pull/969) | Matrix channel integration | Expands federated/enterprise messaging support |
| [#967](https://github.com/agentscope-ai/CoPaw/pull/967) | Session interruption mechanism | Directly addresses [#957](https://github.com/agentscope-ai/CoPaw/issues/957) and user frustration with runaway agents |
| [#966](https://github.com/agentscope-ai/CoPaw/pull/966) | Linux systemd + auto-update | Production deployment readiness |

**Analysis:** The community is actively building **production infrastructure** (systemd, auth, packaging) while core team focuses on stability. The session interruption PR (#967) with 8 interrupt keywords and 16 unit tests shows mature contribution quality.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **🔴 Critical** | [#230](https://github.com/agentscope-ai/CoPaw/issues/230) | Shell commands hang indefinitely; stop button fails | No PR yet; 17 comments indicate widespread impact |
| **🔴 Critical** | [#372](https://github.com/agentscope-ai/CoPaw/issues/372) | Auto-rewritten config blocks LLM access | No PR; breaks local Ollama workflows |
| **🟡 High** | [#886](https://github.com/agentscope-ai/CoPaw/issues/886) | Feishu WebSocket duplicate messages → repeated replies | No PR; requires message deduplication logic |
| **🟡 High** | [#946](https://github.com/agentscope-ai/CoPaw/issues/946) | IndexError on empty messages list | No PR; simple null check needed |
| **🟡 High** | [#914](https://github.com/agentscope-ai/CoPaw/issues/914) | Time conversion crash kills service | No PR; Python 3.12.10 specific |
| **🟡 High** | [#892](https://github.com/agentscope-ai/CoPaw/issues/892) | Conversation-ending phrases break subsequent processing | No PR; NLP intent detection gap |
| **🟢 Medium** | [#497](https://github.com/agentscope-ai/CoPaw/issues/497) | Chat task state lost on navigation | No PR; SPA state management issue |
| **🟢 Medium** | [#833](https://github.com/agentscope-ai/CoPaw/issues/833) | Telegram multimodality fails with path extension check | No PR; regex/path handling bug |

**Regression Risk:** The shell hanging issue (#230) and config auto-rewrite (#372) represent **deployment blockers** for production users. No linked fix PRs indicate potential maintainer bandwidth constraints.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|---------|----------|---------------------------|-----------|
| **Session interruption commands** | [#967](https://github.com/agentscope-ai/CoPaw/pull/967), [#957](https://github.com/agentscope-ai/CoPaw/issues/957) | **High** | PR ready with tests; addresses critical UX pain |
| **Matrix channel support** | [#969](https://github.com/agentscope-ai/CoPaw/pull/969) | **High** | Clean implementation; expands enterprise reach |
| **Auto-update mechanism** | [#966](https://github.com/agentscope-ai/CoPaw/pull/966), [#569](https://github.com/agentscope-ai/CoPaw/issues/569) | **Medium-High** | PR ready; systemd integration signals production focus |
| **Web UI authentication** | [#519](https://github.com/agentscope-ai/CoPaw/pull/519) | **Medium** | Security-critical for public deployments; needs review |
| **Background process manager** | [#877](https://github.com/agentscope-ai/CoPaw/pull/877) | **Medium** | Solves real blocking issue; clean tool-based design |
| **OpenRouter native support** | [#759](https://github.com/agentscope-ai/CoPaw/pull/759) | **Medium** | Provider diversity; low risk |
| **Anthropic vision support** | [#868](https://github.com/agentscope-ai/CoPaw/pull/868) | **Medium** | Fixes reported breakage; multimodal trend |
| **Single-user multi-thread chat** | [#964](https://github.com/agentscope-ai/CoPaw/issues/964) | **Low-Medium** | Architectural complexity; no PR yet |

**Predicted v0.0.6 Themes:** Production readiness (systemd, auth, updates), channel expansion (Matrix, audio in DingTalk), and agent control improvements (interruption, background processes).

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Category | Evidence | Intensity |
|----------|----------|-----------|
| **Execution hangs** | "经常卡住" (frequently hangs), "无法继续输入" (cannot continue input) | 🔴 Severe |
| **State loss** | "切换页面后，正在进行的对话消失", "chat不能再点击查看执行情况" | 🟡 High |
| **Config fragility** | "CoPaw auto rewrites config", "UTF-8 BOM" corruption | 🟡 High |
| **Channel inconsistencies** | QQ callback errors, Feishu duplicates, Telegram multimodality failures | 🟡 High |
| **Local model gaps** | "本地Qwen 模型不会读取copaw的PROFILE.md", "非实时" time sync | 🟡 High |
| **Documentation UX** | "图片不支持放大" | 🟢 Moderate |

### Positive Signals

- Desktop packaging praised for accessibility
- Active first-time contributor community indicates healthy onboarding
- Rapid issue closure rate (20/50 closed in 24h) shows responsive maintenance

### Use Case Patterns

1. **Windows + local LLM (Ollama)** — most friction-prone combination
2. **Enterprise messaging (Feishu/DingTalk/QQ)** — high adoption, stability demands
3. **Shell/remote server automation** — core value proposition, reliability critical

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#230](https://github.com/agentscope-ai/CoPaw/issues/230) | 7 days | User attrition | Assign owner; subprocess timeout architecture |
| [#372](https://github.com/agentscope-ai/CoPaw/issues/372) | 6 days | Config corruption | Reproduce Ollama path; config immutability design |
| [#886](https://github.com/agentscope-ai/CoPaw/issues/886) | 1 day | Message spam | WebSocket message ID deduplication |
| [#569](https://github.com/agentscope-ai/CoPaw/issues/569) | 4 days | Superseded by PR | Close or link to [#966](https://github.com/agentscope-ai/CoPaw/pull/966) |

### PRs Ready for Review

| PR | Status | Blocker |
|-----|--------|---------|
| [#967](https://github.com/agentscope-ai/CoPaw/pull/967) | 16 tests passing | Maintainer review bandwidth |
| [#969](https://github.com/agentscope-ai/CoPaw/pull/969) | First-time contributor | Security review (Matrix token handling) |
| [#519](https://github.com/agentscope-ai/CoPaw/pull/519) | Auth system | Security audit priority |

**Recommendation:** Prioritize [#230](https://github.com/agentscope-ai/CoPaw/issues/230) and [#372](https://github.com/agentscope-ai/CoPaw/issues/372) as they block core workflows. Fast-track [#967](https://github.com/agentscope-ai/CoPaw/pull/967) for immediate user relief on agent control.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-09

## 1. Today's Overview

ZeptoClaw shows **moderate development velocity** with 3 issues and 2 PRs updated in the last 24 hours. The project is actively advancing its core tooling capabilities, with a major feature merge (grep/find/unified diff tools) demonstrating healthy code integration. Two new feature requests emerged around GitHub skill discovery and Ollama cloud model support, indicating growing user interest in extensibility and deployment flexibility. No releases were cut today, suggesting the project may be accumulating changes for a larger version bump. Overall project health appears stable with responsive maintainer engagement (5 comments on the closed tool PR).

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### ✅ Merged/Closed Today

| PR | Description | Impact |
|:---|:---|:---|
| [#283](https://github.com/qhkm/zeptoclaw/pull/283) | **feat: add grep, find, and unified diff edit tools** | Major tooling expansion — closes [#282](https://github.com/qhkm/zeptoclaw/issues/282) |

**Technical details:**
- **GrepTool** (`src/tools/grep.rs`): System `grep -rn` integration with regex, glob filtering, case-insensitive mode, result limiting
- **FindTool** (`src/tools/find.rs`): `glob` crate-based file discovery with configurable limits
- **Unified diff mode** for EditFileTool (`src/tools/diff.rs`): More reliable code editing workflows

This merge significantly closes the gap with pi-rs's coding toolset, positioning ZeptoClaw as a more complete code-editing agent framework.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#282](https://github.com/qhkm/zeptoclaw/issues/282) → [#283](https://github.com/qhkm/zeptoclaw/pull/283) | **5 comments**, closed | Most engaged discussion — reflects strong maintainer-user collaboration on tooling priorities |
| [#285](https://github.com/qhkm/zeptoclaw/issues/285) / [#286](https://github.com/qhkm/zeptoclaw/pull/286) | 0 comments, fresh | New contributor @taqtiqa-mark proposing quality improvements to skill discovery; PR already submitted suggests motivated, prepared contributor |
| [#284](https://github.com/qhkm/zeptoclaw/issues/284) | 0 comments, incomplete | Ollama cloud support request with unfilled scope estimate — indicates user friction but needs clarification |

**Underlying needs detected:**
- **Tool parity**: Users want ZeptoClaw to match/reference pi-rs capabilities
- **Skill ecosystem quality**: Demand for better curation/discovery mechanisms in the skills marketplace
- **Deployment flexibility**: Interest in cloud-hosted models beyond local Ollama

---

## 5. Bugs & Stability

| Severity | Item | Status | Notes |
|:---|:---|:---|:---|
| 🔶 **Medium** | [#284](https://github.com/qhkm/zeptoclaw/issues/284) Ollama cloud model support | Open, unassigned | Configuration issue — "setting doesn't work either from ollama official site or here" suggests possible documentation gap or auth/config bug; **no fix PR yet** |

**No critical crashes or regressions reported today.** The Ollama issue requires maintainer triage to determine if it's a bug, documentation issue, or unsupported feature.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **SKILL.md deep scanning** | [#285](https://github.com/qhkm/zeptoclaw/issues/285) / [#286](https://github.com/qhkm/zeptoclaw/pull/286) | **High** | PR already submitted; aligns with ecosystem quality goals; low risk additive feature |
| **Ollama cloud model support** | [#284](https://github.com/qhkm/zeptoclaw/issues/284) | **Medium** | Clear user demand, but scope undefined; may require auth/config subsystem work |
| **Additional pi-rs tool parity** | Implicit from [#282](https://github.com/qhkm/zeptoclaw/issues/282) | **Medium** | Pattern established; likely continued porting |

**Predicted next version focus:** Skill discovery improvements + cloud deployment flexibility.

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|:---|:---|:---|
| **Tool completeness** | [#282](https://github.com/qhkm/zeptoclaw/issues/282) | ✅ Satisfied — request fulfilled quickly |
| **Skill discovery friction** | [#285](https://github.com/qhkm/zeptoclaw/issues/285) | ⚠️ Frustrated — "improve skill search quality" implies current experience suboptimal |
| **Cloud deployment confusion** | [#284](https://github.com/qhkm/zeptoclaw/issues/284) | ❌ Dissatisfied — configuration failing across multiple contexts |

**Key pain point:** Users struggle to deploy ZeptoClaw with non-local models, suggesting documentation or configuration UX needs attention.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#284](https://github.com/qhkm/zeptoclaw/issues/284) Ollama cloud support | ~1 day | Low (fresh) | Maintainer response to clarify scope; requester to complete template |
| — | — | — | No stale items requiring urgent attention |

**Assessment:** Clean backlog. No long-unanswered critical issues. Project appears well-tended.

---

*Digest generated from GitHub activity 2026-03-08 to 2026-03-09*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-03-09

**Repository:** [gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

## 1. Today's Overview

EasyClaw shows minimal activity today with **1 new issue** and **zero pull requests or releases**. The project appears to be in a quiet maintenance phase with no code changes in the last 24 hours. The sole activity—a community-building request—suggests growing external interest in the project's architecture, though engagement remains nascent. With no open PRs and only one active issue, the maintainer's review queue is clear. Overall project health appears stable but low-velocity; the lack of releases since inception indicates this may be an early-stage or research-oriented project.

---

## 2. Releases

**No new releases.**  
The project has no published releases to date.

---

## 3. Project Progress

**No merged or closed PRs today.**  
No features advanced or bugs fixed in the last 24 hours.

---

## 4. Community Hot Topics

| Issue | Activity | Analysis |
|-------|----------|----------|
| [#12 社群交流 (Community Chat)](https://github.com/gaoyangz77/easyclaw/issues/12) | 0 comments, 0 👍 | **Underlying need:** User @Geekbruce seeks synchronous communication channel (WeChat/Discord/Slack) and validates the project's architectural direction. This signals: (1) genuine technical interest from potential contributors, (2) architectural alignment with at least one user's mental model, and (3) gap in community infrastructure. |

**Recommendation:** Maintainer should respond to gauge preferred platform and establish communication channel to convert passive interest into active contribution.

---

## 5. Bugs & Stability

**No bug reports today.**  
No crashes, regressions, or stability issues identified in the last 24 hours.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version |
|---------|--------|---------------------------|
| Community chat/forum | [#12](https://github.com/gaoyangz77/easyclaw/issues/12) | **High** — Low engineering cost, high community ROI |
| Documentation on architecture | Implied by #12 | **Medium** — Would validate user's "expected architecture" claim |

No explicit feature requests for core functionality today.

---

## 7. User Feedback Summary

| Aspect | Feedback |
|--------|----------|
| **Satisfaction** | Positive architectural validation: "架构非常符合我预期的架构" (architecture matches my expectations very well) |
| **Pain Point** | Lack of community infrastructure for technical exchange |
| **Use Case Signal** | User evaluating EasyClaw for potential adoption—likely comparing against alternatives |
| **Engagement Quality** | Drive-by interest without deep technical engagement yet |

**Risk:** Without rapid maintainer response, interested users may disengage or migrate to more active alternatives.

---

## 8. Backlog Watch

| Issue/PR | Age | Status | Risk |
|----------|-----|--------|------|
| [#12](https://github.com/gaoyangz77/easyclaw/issues/12) | 1 day | Unanswered | **Low (fresh)** — but watch for 7+ day silence |

**No critical stale items.** However, with only 12 total issues and low overall volume, maintainer responsiveness to #12 will set community tone.

---

*Digest generated from GitHub activity 2026-03-08 to 2026-03-09. Data source: github.com/gaoyangz77/easyclaw*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*