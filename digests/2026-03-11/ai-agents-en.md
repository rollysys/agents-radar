# OpenClaw Ecosystem Digest 2026-03-11

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-11 00:06 UTC

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

# OpenClaw Project Digest — 2026-03-11

## 1. Today's Overview

OpenClaw shows **extremely high community activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a rapidly evolving codebase with significant user engagement. The project is experiencing **stability challenges** following the 2026.3.8 release, with multiple critical regressions reported around cron job execution, gateway connectivity, and tool dispatching. No new releases were published today, suggesting the team is focused on stabilization rather than feature delivery. The 72% open rate for issues (361/500) and 73% for PRs (365/500) indicates a substantial backlog requiring maintainer attention. Overall project health is **stressed but active** — strong community participation paired with post-release quality issues typical of a fast-moving AI infrastructure project.

---

## 2. Releases

**No new releases today.**

The most recent release appears to be **2026.3.8**, which has introduced multiple regressions (see Bugs & Stability). Users are reporting that 2026.3.7 was the last stable version for several critical workflows.

---

## 3. Project Progress

### Merged/Closed PRs (Selected Significant Items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#42554](https://github.com/openclaw/openclaw/pull/42554) | @joshavant | SecretRef hardening for custom/provider credentials — prevents plaintext persistence | **Security fix** for credential leakage |
| [#42426](https://github.com/openclaw/openclaw/pull/42426) | @uninhibite-scholar | Mark env-ref providers as SecretRef-managed | Security fix (closed: too-many-prs) |
| [#39898](https://github.com/openclaw/openclaw/pull/39898) | @HeMuling | Reject SecretRef placeholders from runtime auth fallbacks | Security hardening |
| [#24901](https://github.com/openclaw/openclaw/pull/24901) | @soumikbhatta | Fix `doctor` false positives for Nix store symlinks | Developer experience |
| [#16957](https://github.com/openclaw/openclaw/pull/16957) | @soumikbhatta | Same Nix fix (duplicate/parallel PR) | Developer experience |
| [#11425](https://github.com/openclaw/openclaw/pull/11425) | @soumikbhatta | Same Nix fix (third iteration) | Developer experience |
| [#25315](https://github.com/openclaw/openclaw/pull/25315) | @soumikbhatta | Strip unknown channel-level keys from config | Config validation |
| [#11409](https://github.com/openclaw/openclaw/pull/11409) | @soumikbhatta | Default cron to user timezone | Reliability |
| [#13293](https://github.com/openclaw/openclaw/pull/13293) | @soumikbhatta | Block tainted sink calls from untrusted tool outputs | **Security** |
| [#13290](https://github.com/openclaw/openclaw/pull/13290) | @soumikbhatta | Warn against secrets in workspace files | Documentation/security |

**Notable contributor pattern:** @soumikbhatta has been extremely active with multiple merged PRs focused on security hardening, config validation, and developer experience improvements.

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Rank | Issue | Comments | 👍 | Topic | Analysis |
|:---|:---|:---:|:---:|:---|:---|
| 1 | [#3460](https://github.com/openclaw/openclaw/issues/3460) Internationalization (i18n) & Localization Support | 97 | 1 | **Long-running feature request** | 5+ weeks old, maintainer bandwidth constraint explicitly stated. Strong community demand but blocked on team resources. |
| 2 | [#27009](https://github.com/openclaw/openclaw/issues/27009) OpenCode Go subscription support | 21 | 24 | **Provider integration** | High vote count indicates strong user demand for cost-effective model access. Commercial partnership opportunity. |
| 3 | [#39062](https://github.com/openclaw/openclaw/issues/39062) Filesystem tools lost after 2026.3.2 | 18 | 0 | **Critical regression** | Tools (exec/read/write) disappearing post-update. Fixed by restart but indicates state management issues. |
| 4 | [#35220](https://github.com/openclaw/openclaw/issues/35220) Codex streaming server_error no fallback | 13 | 0 | **Reliability** | Variant of #24378. Streaming errors bypass failover logic. Fix PR [#42562](https://github.com/openclaw/openclaw/pull/42562) exists. |
| 5 | [#41690](https://github.com/openclaw/openclaw/issues/41690) Kimi config validation regression | 12 | 0 | **Config regression** | `requiresOpenAiAnthropicToolPayload` key rejected. Duplicate of #41445. |

### Underlying Community Needs

1. **Multi-language support** — Global accessibility demand outpacing maintainer capacity
2. **Cost-efficient model access** — Strong interest in budget-tier providers (OpenCode Go, local models)
3. **Post-update stability** — Recurring theme: upgrades break existing configurations
4. **Resilient failover** — Users expect graceful degradation when upstream APIs fail

---

## 5. Bugs & Stability

### Critical Regressions (2026.3.8)

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **CRITICAL** | [#41266](https://github.com/openclaw/openclaw/issues/41266) | Manual cron run enqueues but never executes | Open, no fix PR |
| **CRITICAL** | [#41405](https://github.com/openclaw/openclaw/issues/41405) | Cron jobs silently broken — no execution, no errors | Open, no fix PR |
| **CRITICAL** | [#41798](https://github.com/openclaw/openclaw/issues/41798) | Cron isolated session not executing | Open, no fix PR |
| **CRITICAL** | [#42152](https://github.com/openclaw/openclaw/issues/42152) | `cron run` returns enqueued but never executes | Open, no fix PR |
| **HIGH** | [#40977](https://github.com/openclaw/openclaw/issues/40977) | Control UI disconnected (4008) | Open, no fix PR |
| **HIGH** | [#42270](https://github.com/openclaw/openclaw/issues/42270) | Empty agent payloads + websocket 1006 closures | Open, no fix PR |
| **HIGH** | [#41462](https://github.com/openclaw/openclaw/issues/41462) | Tool dispatching regression 2026.3.1→3.2 | Open, no fix PR |
| **HIGH** | [#40396](https://github.com/openclaw/openclaw/issues/40396) | Infinite loop after 2026.3.7 upgrade | Open, no fix PR |

### Additional High-Impact Bugs

| Issue | Description | Notes |
|:---|:---|:---|
| [#37834](https://github.com/openclaw/openclaw/issues/37834) | Session context corruption: orphaned tool_use ID causes permanent 400 loop | Complex state management issue |
| [#39792](https://github.com/openclaw/openclaw/issues/39792) | OpenAI Codex OAuth 400 'Authorization header badly formatted' | Auth regression |
| [#34830](https://github.com/openclaw/openclaw/issues/34830) | 401 missing authentication header with OpenRouter | Regression from 2026.3.2 |
| [#9157](https://github.com/openclaw/openclaw/issues/9157) | Workspace file injection wastes 93.5% of token budget | Performance, not regression |

### Stability Assessment

**Cron subsystem** is severely compromised in 2026.3.8 with **4+ confirmed independent reports** of complete execution failure. This appears to be the most urgent issue requiring hotfix.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Predicted Priority | Rationale |
|:---|:---:|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n/Localization | 1 | Medium-High | 97 comments show sustained demand; blocked on resources |
| [#27009](https://github.com/openclaw/openclaw/issues/27009) OpenCode Go support | 24 | **High** | Highest vote count, commercial partnership potential |
| [#6872](https://github.com/openclaw/openclaw/issues/6872) xAI native tools | 10 | Medium | Competitive parity with Grok ecosystem |
| [#10010](https://github.com/openclaw/openclaw/issues/10010) Agent Teams | 2 | Medium | Architectural direction, matches Claude Code feature |
| [#28930](https://github.com/openclaw/openclaw/issues/28930) Memory v2 improvements | 0 | Medium | Technical debt, long-running agent support |
| [#18237](https://github.com/openclaw/openclaw/issues/18237) Async exec callback | 5 | Medium | Developer productivity |

**Likely next-version candidates:**
- OpenCode Go integration (commercial pressure + high votes)
- Cron stability fixes (quality imperative)
- xAI tool support (ecosystem expansion)

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Upgrade fragility** | Multiple "worked before, now fails" regressions | Critical |
| **Cron reliability** | 4+ reports of complete job execution failure | Critical |
| **Configuration complexity** | Validation errors, SecretRef confusion | High |
| **Gateway stability** | Disconnect loops, auth token churn | High |
| **Token efficiency** | 93.5% waste on workspace injection | Medium |
| **Documentation gaps** | i18n "bandwidth" constraint, unclear feature status | Medium |

### Positive Signals

- Strong community engagement (500 issues/PRs in 24h)
- Active security hardening (@soumikbhatta's contributions)
- Responsive to provider ecosystem changes (OpenCode, xAI, Kimi)

### Use Case Patterns

- **Multi-agent deployments** (3-10+ agents, dockerized) — hitting session store contention
- **VPS/remote development** — OAuth flows, SSH-based workflows
- **Enterprise integrations** — Feishu, Slack, Teams, Mattermost channels
- **Cost-conscious users** — seeking budget model providers, local LLM support

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Problem | Action Needed |
|:---|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | 6+ weeks | i18n blocked on "bandwidth" | Resource allocation decision or community contribution path |
| [#9157](https://github.com/openclaw/openclaw/issues/9157) | 5+ weeks | 93.5% token waste | Architecture review for context management |
| [#15622](https://github.com/openclaw/openclaw/issues/15622) | 4+ weeks | Teams extension deps wiped | Dependency management fix |
| [#26044](https://github.com/openclaw/openclaw/issues/26044) | 2+ weeks | Gateway start/stop failures | LaunchAgent reliability |
| [#28147](https://github.com/openclaw/openclaw/issues/28147) | 2+ weeks | Gateway restart fails with launchd | Service management robustness |

### PRs At Risk

| PR | Status | Risk |
|:---|:---|:---|
| [#42524](https://github.com/openclaw/openclaw/pull/42524) | Open, XL size | Directory-per-session store — significant architecture change, needs review |
| [#41466](https://github.com/openclaw/openclaw/pull/41466) | Open, L size | ACP thread-bound session placement — complex channel integration |
| [#41529](https://github.com/openclaw/openclaw/pull/41529) | Open, XL size | Ollama onboarding — large feature, may conflict with stability focus |

### Maintainer Recommendation

Given the **critical cron regressions** in 2026.3.8, prioritizing a **hotfix release (2026.3.9)** with cron subsystem fixes would address the most acute user pain. The 4 duplicate/semi-duplicate cron issues suggest fragmented reporting of a single root cause that should be identifiable and fixable quickly.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
*Analysis Date: 2026-03-11*

---

## 1. Ecosystem Overview

The open-source AI agent ecosystem is experiencing **unprecedented velocity** with 10 active projects averaging 45+ daily PRs/Issues combined, indicating rapid maturation beyond experimental prototypes into production infrastructure. A clear **bifurcation** has emerged: established projects (OpenClaw, IronClaw, NanoBot) grapple with post-release stabilization and enterprise reliability demands, while newer entrants (ZeptoClaw, EasyClaw, TinyClaw) prioritize onboarding friction and multi-channel deployment. **Configuration system debt** is the dominant technical challenge across maturity levels—validation drift, SecretRef complexity, and cron subsystem failures appear in 7 of 10 projects. The ecosystem is simultaneously consolidating around MCP (Model Context Protocol) as a interoperability standard while fragmenting on security models (ZeroClaw's paternalistic sandboxing vs. PicoClaw's permissive subagent hierarchies).

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Status |
|:---|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 | 500 | None (stabilization) | 🔴 Stressed | Post-release crisis: cron/gateway critical regressions |
| **NanoBot** | 34 | 65 | None | 🔴 Degraded | Security vulnerability + Docker lockouts + silent feature removal |
| **ZeroClaw** | 34 | 50 | None | 🟡 Active | Pre-release stabilization, security-vs-usability tension |
| **PicoClaw** | 31 | 81 | 2 nightlies | 🟡 Building | High velocity, enterprise channel expansion, critical bug backlog |
| **NanoClaw** | 23 | 50 | None | 🟡 High Velocity | Learning system epic, production stability debt |
| **IronClaw** | 50 | 50 | v0.17.0 + v0.18.0 pending | 🟡 Intensive Care | AI CI generating bugs faster than fixes, vendor lock-in friction |
| **LobsterAI** | 12 | 8 | None | 🟡 Improving | IM channel consolidation, stability gaps, zero issue closure |
| **TinyClaw** | 0 | 9 | None | 🟢 Healthy | Monorepo refactor complete, narrow contributor base |
| **Moltis** | 13 | 12 | None | 🟢 Improving | 67% closure rate, onboarding focus, distributed deployment |
| **CoPaw** | 50 | 50 | None | 🔴 Concerning | v0.0.6 desktop/regression crisis, enterprise push |
| **ZeptoClaw** | 11 | 18 | v0.7.2–v0.7.4 | 🟢 Active | Mature CI/CD, config system debt emerging |
| **EasyClaw** | ~1 | ~1 | v1.6.3–v1.6.5 | 🟡 Steady | Maintenance mode, macOS signing issues |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw Position | Peer Comparison |
|:---|:---|:---|
| **Scale** | 1000 items/day | 2–10× higher volume than all peers |
| **Security investment** | @soumikbhatta's 6+ merged security PRs | ZeroClaw focuses on sandboxing; IronClaw has token budget bypasses |
| **Provider ecosystem** | 15+ providers, OpenCode Go demand (#27009, 24 votes) | NanoBot catching up (Vertex AI, Deepseek); ZeptoClaw has Claude CLI import |
| **Reference architecture** | "OpenClaw parity" explicit demand in ZeroClaw (#3120, #3119) | PicoClaw, LobsterAI treat as compatibility target |

### Technical Approach Differences
| Aspect | OpenClaw | Key Peers |
|:---|:---|:---|
| **Core runtime** | Go-based, gateway-centric | IronClaw (Rust/WASM), NanoClaw (TypeScript/containers), PicoClaw (Go, event-driven refactor) |
| **State management** | Session store with directory-per-session PR (#42524) | NanoClaw (SQLite + IPC), IronClaw (PostgreSQL + job queue) |
| **Security model** | SecretRef hardening, tainted sink blocking | ZeroClaw (aggressive sandboxing, user frustration #1478), PicoClaw (SSRF fixes incoming) |
| **Cron system** | **Critically compromised** (4+ execution failures) | Moltis (`delay_ms` added #377), ZeptoClaw (batch commands), NanoBot (removed in patch) |

### Community Size
OpenClaw operates at **ecosystem-defining scale**: 500 issues/PRs daily exceeds the *combined* activity of NanoBot (99), ZeroClaw (84), and PicoClaw (112). However, this scale creates **maintainer bandwidth collapse**—72% open issue rate vs. Moltis's 67% closure rate.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Evidence |
|:---|:---|:---|
| **Cron/job scheduling reliability** | OpenClaw, NanoBot, Moltis, ZeptoClaw, NanoClaw | OpenClaw: 4 critical regressions (#41266, #41405, #41798, #42152); NanoBot: silent removal (#1816); Moltis: `delay_ms` fix (#377) |
| **Configuration validation drift** | OpenClaw, ZeptoClaw, ZeroClaw, NanoClaw | OpenClaw: Kimi validation regression (#41690); ZeptoClaw: validator rejects valid fields (#310); ZeroClaw: schema failures (#2487) |
| **Multi-channel enterprise messaging** | PicoClaw, LobsterAI, Moltis, CoPaw, NanoBot | PicoClaw: Mattermost (#1288), Feishu; LobsterAI: Feishu/Discord/Telegram merged; Moltis: WhatsApp fixed (#387); CoPaw: Matrix/DingTalk AI Cards |
| **MCP (Model Context Protocol) integration** | IronClaw, NanoBot, ZeroClaw | IronClaw: auth friction (#299, #313); NanoBot: ModelScope server (#1230); ZeroClaw: on-demand loading (#3095) |
| **Local model / Ollama reliability** | ZeroClaw, PicoClaw, LobsterAI, CoPaw | ZeroClaw: Qwen tool-calling (#3079, #3116); PicoClaw: spawn ignores target model (#1322); LobsterAI: Qwen3-235B 502 errors (#360) |
| **Token/cost efficiency** | OpenClaw, IronClaw | OpenClaw: 93.5% waste on workspace injection (#9157); IronClaw: budget bypasses (#814–#816) |
| **Subagent/hierarchical agent orchestration** | PicoClaw, NanoClaw, OpenClaw | PicoClaw: tool inheritance (#1278); NanoClaw: learning system epic (#907); OpenClaw: Agent Teams (#10010) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiation | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Reference implementation, provider breadth, enterprise gateway | Platform builders, multi-agent operators | Gateway-centric Go, cron-driven automation |
| **NanoBot** | Clean architecture (<4k lines), Chinese market focus, MCP-first | Solo developers, China-deployed teams | Python, lightweight, channel abstraction |
| **ZeroClaw** | Security-first sandboxing, "OpenClaw parity"追赶 | Security-conscious self-hosters | Rust/Go hybrid, aggressive safety defaults |
| **PicoClaw** | Agent philosophy (SOUL.md/AGENT.md), event-driven orchestration | Autonomous agent researchers, multi-agent teams | Go, subagent hierarchies, real-time feedback |
| **NanoClaw** | Container-native, learning system (self-improving agents) | DevOps-heavy deployments, autonomous systems | TypeScript, Docker-first, IPC-based skills |
| **IronClaw** | NEAR ecosystem integration, Rust/WASM tools, sophisticated CI | Crypto-adjacent builders, WASM enthusiasts | Rust, PostgreSQL, job queue, staging CI |
| **LobsterAI** | NetEase backing, OpenClaw plugin framework, "Lobster Army" multi-agent | Enterprise China, packaged desktop users | Electron, plugin architecture, IM preinstalls |
| **TinyClaw** | Minimal infrastructure (SQLite), monorepo modularity | Lightweight deployers, team chat use cases | TypeScript, npm workspaces, no Redis |
| **Moltis** | Distributed node deployment, WhatsApp reliability, onboarding polish | Multi-node self-hosters, SMB automation | Rust, WebSocket mesh, sled persistence |
| **CoPaw** | AgentScope lineage, multi-model routing, desktop + server dual mode | Enterprise China, hybrid local/cloud | Python, desktop (Tauri/Electron), LLM routing |
| **ZeptoClaw** | Mature CLI lifecycle, Claude CLI credential import, rapid releases | CLI-first developers, Claude migrants | Rust, native WhatsApp, credential bridging |
| **EasyClaw** | Accessibility wrapper, macOS focus, minimal configuration | Non-technical macOS users | Swift/native, simplified onboarding |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Velocity Risk)
| Project | Velocity Indicator | Risk Pattern |
|:---|:---|:---|
| **OpenClaw** | 1000 items/day | Post-release stabilization crisis; 72% open backlog |
| **IronClaw** | 100 items/day, 4 promotions | AI CI generating 20+ critical bugs; discovery > resolution |
| **PicoClaw** | 112 items/day, 81 PRs | 4 unassigned critical bugs; enterprise features vs. stability tension |
| **CoPaw** | 100 items/day | v0.0.6 regression cluster; desktop + server complexity |

### Tier 2: Active Growth (Feature Expansion)
| Project | Momentum Signal | Maturation Need |
|:---|:---|:---|
| **NanoBot** | 99 items/day, global contributions | Security fix + cron revert needed before v0.1.5 |
| **NanoClaw** | 73 items/day, learning system epic | Critical scheduler race (#825) exceeds 3-day SLA |
| **ZeroClaw** | 84 items/day, security tension | "Nothing works" user backlash (#1478) vs. safety goals |

### Tier 3: Stabilization/Consolidation
| Project | Status | Next Phase |
|:---|:---|:---|
| **Moltis** | 67% closure rate, onboarding focus | Enterprise auth (Copilot #358), i18n (zh-TW #339) |
| **ZeptoClaw** | 3 releases/day, config debt emerging | v0.8.0 with uninstall + dev tools |
| **TinyClaw** | Clean monorepo, zero issues | Platform expansion (Discord #141), contributor retention |
| **LobsterAI** | IM consolidation complete | Stability patch for vision/UI regressions |
| **EasyClaw** | Maintenance mode, macOS fixes | Code signing resolution, feature stagnation risk |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Strategic Implication |
|:---|:---|:---|
| **Configuration as critical path** | 7 projects with validation/runtime drift | Invest in schema-first config with automated conformance testing; avoid OpenClaw's SecretRef complexity |
| **Cron/scheduling subsystem fragility** | 5 projects with job execution failures | Prefer external schedulers (systemd, Kubernetes CronJob) over embedded cron; Moltis's `delay_ms` approach (#377) is pragmatic |
| **MCP server proliferation → tool management crisis** | ZeroClaw #3095, IronClaw auth friction | Design for deferred/on-demand tool loading; anticipate 100+ tool context window pressure |
| **"OpenClaw parity" as compatibility standard** | ZeroClaw #3120/#3119, PicoClaw #1270 | Treat OpenClaw's channel/protocol implementations as de facto specs; expect user migration demand |
| **Chinese market as forcing function** | NanoBot, LobsterAI, CoPaw, PicoClaw WeChat/Feishu pressure | WeChat integration requires unofficial bridge acceptance; Feishu/Lark has viable official APIs |
| **Security model user revolt** | ZeroClaw #1478 ("nothing works"), IronClaw #67 (lock-in) | Offer explicit "unsafe mode" for local/trusted environments; paternalistic defaults alienate power users |
| **Subagent hierarchies → distributed systems complexity** | PicoClaw #1278, NanoClaw #907, OpenClaw #10010 | Plan for consensus, failure propagation, and observability in agent teams; not just "call another agent" |
| **Container-native as default assumption** | NanoClaw, TinyClaw (SQLite), IronClaw (WASM) | Design for stateless horizontal scaling; shared-nothing process model with IPC/message passing |

### Emerging Capability Gaps
| Gap | Projects Attempting | Opportunity |
|:---|:---|:---|
| **True multimodal (vision/audio) reliability** | LobsterAI #357 (freeze), PicoClaw #1214 (voice) | Streaming media pipeline with backpressure, not bolt-on |
| **Agent memory/learning at scale** | NanoClaw #907 (structured), IronClaw (persistent jobs) | FTS5 + vector hybrid with forgetting/retention policies |
| **Cross-project migration tooling** | IronClaw #903 (OpenClaw import) | Standardized agent state export/import format |

---

*Report generated from 12 project digests covering 1,500+ GitHub items. Confidence: High for quantitative metrics; Medium for qualitative trend projections.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-11

## 1. Today's Overview

NanoBot shows **exceptionally high community activity** with 99 total updates in 24 hours (34 issues, 65 PRs), indicating a rapidly maturing open-source AI agent framework. The project is experiencing **intense development velocity** with 54 open PRs actively competing for merge, though this suggests potential bottlenecks in code review. No new releases were published, but the volume of bug fixes and feature implementations signals a significant release may be imminent. The community is **globally diverse** with strong demand for Chinese market integrations (WeChat, Xiaohongshu, Feishu). Critical stability issues have emerged including Docker SSH lockouts, SIGTERM crashes, and security vulnerabilities requiring immediate attention.

---

## 2. Releases

**No new releases** (v0.1.4.post4 remains current).

Notable regression identified: `nanobot cron` CLI commands were **removed in v0.1.4.post4** after existing in v0.1.4.post3 — [Issue #1816](https://github.com/HKUDS/nanobot/issues/1816)

---

## 3. Project Progress

### Merged/Closed Today (11 items)

| PR/Issue | Description | Impact |
|----------|-------------|--------|
| [PR #111](https://github.com/HKUDS/nanobot/pull/111) | Google Vertex AI provider support | **Major**: Enterprise GCP integration |
| [PR #212](https://github.com/HKUDS/nanobot/pull/212) | ZAI_API_KEY environment fix for zai/glm-xxx models | Chinese model ecosystem support |
| [Issue #1633](https://github.com/HKUDS/nanobot/issues/1633) | `nanobot gateway --workspace` command fix | CLI reliability |
| [Issue #1230](https://github.com/HKUDS/nanobot/issues/1230) | ModelScope MCP server connection resolved | MCP ecosystem compatibility |
| [Issue #1762](https://github.com/HKUDS/nanobot/issues/1762) | Bot interruption workflow (closed) | UX improvement |

### Active Development Signals

**Multimodal architecture advancement**: [PR #1690](https://github.com/HKUDS/nanobot/pull/1690) introduces `providers_manager` for automatic LLM selection based on task type — foundational for v0.2.0.

**Deepseek Reasoner compatibility**: Multiple PRs ([PR #1848](https://github.com/HKUDS/nanobot/pull/1848), [PR #1846](https://github.com/HKUDS/nanobot/pull/1846)) fixing `reasoning_content` field handling — critical for Chinese market leader adoption.

---

## 4. Community Hot Topics

| Rank | Item | Engagement | Analysis |
|------|------|-----------|----------|
| 1 | [Issue #1617](https://github.com/HKUDS/nanobot/issues/1617) — Chinese documentation request | 7 comments, 1 👍 | **Localization friction**: Aggressive tone ("显得你了？") signals frustrated Chinese-speaking users; project perceived as Western-centric despite HKUDS affiliation |
| 2 | [Issue #123](https://github.com/HKUDS/nanobot/issues/123) — Discord channel support | 6 comments | **Implementation complete but untested** — [Issue #1804](https://github.com/HKUDS/nanobot/issues/1804) reveals zero test coverage for merged PR #24 |
| 3 | [Issue #1692](https://github.com/HKUDS/nanobot/issues/1692) — Telegram double response | 4 comments, 3 👍 | **High-priority UX bug**: Markdown rendering duplication affects all Telegram users |
| 4 | [Issue #1819](https://github.com/HKUDS/nanobot/issues/1819) — WeChat support | 4 comments | **Market expansion blocker**: "对大部分中国人而言非常非常重要" — WeChat = 1.3B users, no viable API pathway identified |
| 5 | [Issue #1815](https://github.com/HKUDS/nanobot/issues/1815) — Feishu/Lark ecosystem | 4 comments | Enterprise China market demand; OpenClaw migration attempt failed |

**Underlying pattern**: Chinese platform integration requests (WeChat, Feishu, Xiaohongshu, ZhipuAI) dominate feature requests, but architectural decisions (MCP-first, channel abstraction) create friction for platforms without clean bot APIs.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **Critical** | [Issue #1817](https://github.com/HKUDS/nanobot/issues/1817) | `restrictToWorkspace` bypass via `~` paths — **security sandbox escape** | [PR #1845](https://github.com/HKUDS/nanobot/pull/1845) open |
| 🔴 **Critical** | [Issue #1826](https://github.com/HKUDS/nanobot/issues/1826) | Docker compose SSH lockout — **production deployment blocker** | No fix |
| 🔴 **Critical** | [Issue #1833](https://github.com/HKUDS/nanobot/issues/1833) | SIGTERM crashes within 30 min — "你们确定这个版本能正常工作吗？" | No fix |
| 🟡 **High** | [Issue #1692](https://github.com/HKUDS/nanobot/issues/1692) | Telegram double response | No fix |
| 🟡 **High** | [Issue #1816](https://github.com/HKUDS/nanobot/issues/1816) | `nanobot cron` commands removed in patch release — **breaking change** | No fix, needs revert |
| 🟡 **High** | [Issue #1783](https://github.com/HKUDS/nanobot/issues/1783) | Codex provider 60s hardcoded timeout, silent failures | No fix |
| 🟡 **High** | [Issue #1834](https://github.com/HKUDS/nanobot/issues/1834) | Deepseek Reasoner `spawn` tool failure | [PR #1848](https://github.com/HKUDS/nanobot/pull/1848) open |
| 🟡 **High** | [Issue #1823](https://github.com/HKUDS/nanobot/issues/1823) | Memory consolidation ignores agent config | [PR #1825](https://github.com/HKUDS/nanobot/pull/1825), [PR #1847](https://github.com/HKUDS/nanobot/pull/1847) open |
| 🟡 **High** | [Issue #1821](https://github.com/HKUDS/nanobot/issues/1821) | SubagentManager ignores per-agent model config | No fix |
| 🟡 **High** | [Issue #1851](https://github.com/HKUDS/nanobot/issues/1851) | Matrix auth error spam | No fix |

**Stability assessment**: ⚠️ **Degraded** — Multiple production blockers, security vulnerability, and silent feature removals suggest release process needs hardening.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Request Source | Likelihood in Next Release | Rationale |
|---------|---------------|---------------------------|-----------|
| **Provider endpoint rotation/failover** | [PR #1849](https://github.com/HKUDS/nanobot/pull/1849) | ⭐⭐⭐⭐⭐ High | Production reliability; clean implementation ready |
| **Multimodal + image skills** | [PR #1690](https://github.com/HKUDS/nanobot/pull/1690) | ⭐⭐⭐⭐⭐ High | Architecture foundation; 4 days active refinement |
| **Slack completion reactions** | [PR #1852](https://github.com/HKUDS/nanobot/pull/1852) | ⭐⭐⭐⭐ High | Polish feature; low risk |
| **Telegram /models command** | [PR #1653](https://github.com/HKUDS/nanobot/pull/1653) | ⭐⭐⭐⭐ High | User-facing; inline keyboard pattern established |
| **Cron run history tracking** | [Issue #1837](https://github.com/HKUDS/nanobot/issues/1837) | ⭐⭐⭐ Medium | Observability need; depends on cron system stabilization |
| **WeChat integration** | [Issue #1819](https://github.com/HKUDS/nanobot/issues/1819) | ⭐⭐ Low | No official API; would require unofficial bridge (itchat/uiautomator) — architectural tension with clean channel abstraction |
| **Feishu/Lark docs + knowledge base** | [Issue #1815](https://github.com/HKUDS/nanobot/issues/1815) | ⭐⭐⭐ Medium | Enterprise demand; MCP server likely path |
| **Xiaohongshu skill** | [PR #1842](https://github.com/HKUDS/nanobot/pull/1842) | ⭐⭐⭐⭐ High | Content marketing use case; skill system extensible |
| **SimpleMem integration** | [Issue #1818](https://github.com/HKUDS/nanobot/issues/1818) | ⭐⭐⭐ Medium | Memory system criticism mounting; external validation |
| **Smart speaker (Xiaomi)** | [Issue #1411](https://github.com/HKUDS/nanobot/issues/1411) | ⭐⭐ Low | Hardware integration complexity |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Memory system confusion** | [Issue #1774](https://github.com/HKUDS/nanobot/issues/1774), [Issue #1831](https://github.com/HKUDS/nanobot/issues/1831), [Issue #1818](https://github.com/HKUDS/nanobot/issues/1818) | High — "纯文本是不是很容易造成记忆混乱", Automem conflicts |
| **Cron/reliability opacity** | [Issue #1828](https://github.com/HKUDS/nanobot/issues/1828) | High — "how does cron work, and how to receive the notification?" |
| **Documentation gaps** | [Issue #1617](https://github.com/HKUDS/nanobot/issues/1617) | Medium — Localization + onboarding friction |
| **Configuration inheritance bugs** | [Issue #1823](https://github.com/HKUDS/nanobot/issues/1823), [Issue #1821](https://github.com/HKUDS/nanobot/issues/1821) | High — Silent failures from ignored settings |
| **Docker/production stability** | [Issue #1826](https://github.com/HKUDS/nanobot/issues/1826), [Issue #1833](https://github.com/HKUDS/nanobot/issues/1833) | Critical |

### Satisfaction Signals

- **Architecture praise**: [Issue #97](https://github.com/HKUDS/nanobot/issues/97) — "huge props for the clean and lightweight architecture... kept under 4k lines"
- **Active contribution**: Vietnamese README ([PR #1164](https://github.com/HKUDS/nanobot/pull/1164)), multiple provider extensions
- **Ecosystem enthusiasm**: Xiaohongshu, Feishu, SimpleMem integration attempts

### Use Case Evolution

| Segment | Emerging Pattern |
|---------|---------------|
| **Solo developers** | CLI-first, cron-based automation, local memory |
| **Teams** | Slack/Telegram channels, shared workspace, provider rotation |
| **China market** | WeChat desperation, Feishu enterprise, Deepseek adoption |
| **Content creators** | Xiaohongshu skill, multimodal image generation |

---

## 8. Backlog Watch

| Item | Age | Issue | Risk |
|------|-----|-------|------|
| **Core architecture RFC** | 35 days | [Issue #97](https://github.com/HKUDS/nanobot/issues/97) — Memory, Security, Testing improvements | **Strategic drift** — No maintainer response; community energy may fragment |
| **Discord channel (untested)** | 35 days | [Issue #123](https://github.com/HKUDS/nanobot/issues/123) + [Issue #1804](https://github.com/HKUDS/nanobot/issues/1804) | **Technical debt** — Merged code, zero tests, user reports of issues |
| **Matrix channel broken** | 12 days | [Issue #1300](https://github.com/HKUDS/nanobot/issues/1300) | **Platform commitment** — Multiple Matrix issues, no maintainer assignment |
| **Aliyun coding plan** | 6 days | [Issue #1556](https://github.com/HKUDS/nanobot/issues/1556) | **China cloud compatibility** — Growing enterprise need |
| **Nvidia model support regression** | 1 day | [Issue #1822](https://github.com/HKUDS/nanobot/issues/1822) | **Multi-provider promise** — "no longer supports" suggests breaking change undocumented |

---

## Health Assessment

| Dimension | Score | Trend |
|-----------|-------|-------|
| Community Activity | ⭐⭐⭐⭐⭐ | ↑ Surging |
| Code Quality/Review | ⭐⭐⭐ | ↓ Bottlenecked (54 open PRs) |
| Stability | ⭐⭐ | ↓ Critical issues emerging |
| Documentation | ⭐⭐ | → Localization gap |
| Security | ⭐⭐ | ↓ Sandbox escape reported |
| Release Discipline | ⭐⭐ | ↓ Silent feature removal |

**Recommendation**: Immediate triage needed for security fix ([PR #1845](https://github.com/HKUDS/nanobot/pull/1845)), Docker stability ([Issue #1826](https://github.com/HKUDS/nanobot/issues/1826)), and cron regression revert. Consider feature freeze to stabilize v0.1.5.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-11

---

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 50 PRs and 34 issues updated in the last 24 hours, indicating an active pre-release stabilization period. The project is experiencing **intense community engagement** around core usability gaps—particularly security configuration friction, provider compatibility, and web UI polish. Notably, no new releases were cut today despite significant merge activity, suggesting maintainers are accumulating changes for a larger release. The issue-to-PR ratio (24 open issues vs. 37 open PRs) indicates aggressive feature development outpacing issue resolution, with several critical bugs still awaiting fixes.

---

## 2. Releases

**No new releases today.**

The project remains without a tagged release, with the last activity focused on merging fixes and features into `master`/`main` branches.

---

## 3. Project Progress

### Merged/Closed PRs Today (13 total, selected highlights):

| PR | Description | Impact |
|:---|:---|:---|
| [#3142](https://github.com/zeroclaw-labs/zeroclaw/pull/3142) | API key prefix pre-flight validation | Prevents cryptic 401 errors by catching provider/key mismatches early |
| [#3140](https://github.com/zeroclaw-labs/zeroclaw/pull/3140) | Dynamic contributor badge + grid | Community recognition, docs polish |
| [#3099](https://github.com/zeroclaw-labs/zeroclaw/pull/3099) | CI hardening: SHA-pinned Actions, scoped permissions, gate jobs | Supply-chain security, branch protection |
| [#3139](https://github.com/zeroclaw-labs/zeroclaw/pull/3139) | Ensure `web/dist` exists at compile time | Fixes fresh clone build failures |
| [#3138](https://github.com/zeroclaw-labs/zeroclaw/pull/3138) | Consolidate extension examples into contributing guide | Developer experience |
| [#3133](https://github.com/zeroclaw-labs/zeroclaw/pull/3133) | Auto-expand multiline chat composer | OpenClaw parity, UX improvement |
| [#3121](https://github.com/zeroclaw-labs/zeroclaw/pull/3121) | Hover-to-copy for chat messages | OpenClaw parity, debugging/sharing workflow |
| [#3134](https://github.com/zeroclaw-labs/zeroclaw/pull/3134) | Explicit `Content-Type: application/json` for all providers | Fixes proxy/gateway compatibility |
| [#3116](https://github.com/zeroclaw-labs/zeroclaw/pull/3116) | Normalize typed scalar tool args for Ollama | Fixes tool-call failures with Qwen models |
| [#3124](https://github.com/zeroclaw-labs/zeroclaw/pull/3124) | Fix `/ws/chat` tool execution + malformed tool-call recovery | Critical WebSocket functionality |
| [#3023](https://github.com/zeroclaw-labs/zeroclaw/pull/3023) | Echo `Sec-WebSocket-Protocol` for `/ws/chat` | WebSocket handshake compliance |
| [#3022](https://github.com/zeroclaw-labs/zeroclaw/pull/3022) | Fix `/api/integrations/settings` JSON response | API correctness |
| [#3136](https://github.com/zeroclaw-labs/zeroclaw/pull/3136) | Correct OpenRouter onboarding command examples | Docs accuracy |

**Key advancement:** Web UI achieved **OpenClaw parity** on two major UX features (auto-expanding composer, message copy). Tool-calling reliability improved across Ollama and WebSocket paths.

---

## 4. Community Hot Topics

### Most Active Issues by Engagement:

| Issue | Comments | 👍 | Core Concern |
|:---|:---:|:---:|:---|
| [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) — "除了安全,什么功能也没有" (Closed) | 33 | 3 | **Security vs. usability tension**: User enabled all safety configs, yet ZeroClaw still blocked FFmpeg installation and all actions—reduced to "chatbot only" |
| [#1575](https://github.com/zeroclaw-labs/zeroclaw/issues/1575) — Gateway dashboard agent access error (Closed) | 7 | 0 | `crypto.randomUUID` browser compatibility |
| [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) — GLIBC_2.39 not found (Open) | 7 | 0 | **Runtime portability**: Binary linked against newer glibc breaks on older Linux distros |
| [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) — Invalid schema for `channel_ack_config` (Open) | 5 | 0 | Function schema validation blocking agent chat |
| [#3079](https://github.com/zeroclaw-labs/zeroclaw/issues/3079) — Ollama+Qwen tool-calling regression (Open) | 3 | 0 | Thinking-only output, malformed `<tool_call>`, dropped actions |

### Underlying Needs Analysis:

- **#1478** reveals a fundamental product tension: ZeroClaw's security-first design is alienating power users who want "unsafe mode" for local/personal use. The 33-comment thread suggests this isn't isolated frustration.
- **#3070** and **#3079** indicate **platform compatibility and local model reliability** are becoming adoption blockers as users try to self-host.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Description |
|:---|:---|:---|:---:|:---|
| **S0** — Data loss/security risk | [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) GLIBC_2.39 not found | **Open** | ❌ | Binary runtime failure on older Linux systems |
| **S1** — Workflow blocked | [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) Invalid schema for `channel_ack_config` | **Open** | ❌ | Agent chat completely non-functional for affected users |
| **S1** — Workflow blocked | [#3079](https://github.com/zeroclaw-labs/zeroclaw/issues/3079) Ollama+Qwen tool-calling regression | **Open** | Partial | #3116 merged for typed args, but thinking-only output persists |
| **S1** — Workflow blocked | [#3098](https://github.com/zeroclaw-labs/zeroclaw/issues/3098) Build errors for channel-lark | **Closed** | ✅ #3098 | Fixed same day |
| **S1** — Workflow blocked | [#2961](https://github.com/zeroclaw-labs/zeroclaw/issues/2961) Web agent chat broken | **Closed** | ✅ #2961 | Fixed |
| **S1** — Credential exposure | [#3126](https://github.com/zeroclaw-labs/zeroclaw/issues/3126) `secrets.encrypt` doesn't protect Telegram `bot_token` | **Open** | ❌ | Plaintext secret leakage risk in repo snapshots |
| **S2** — Degraded | [#3088](https://github.com/zeroclaw-labs/zeroclaw/issues/3088) Token cost not working for channels | **Closed** | ✅ #3088 | Fixed |
| **S3** — Minor | [#3033](https://github.com/zeroclaw-labs/zeroclaw/issues/3033) `default_temperature` ignored for `zeroclaw agent` | **Open** | ❌ | Hardcoded 0.7 fallback |

**Critical stability gaps:** Two S0/S1 bugs remain open without linked fixes, including a runtime portability issue and schema validation failure. The secrets encryption gap (#3126) is particularly concerning for a security-focused project.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| [#3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095) | On-demand MCP tool loading via `tool_search` | **High** | Performance/cost optimization; aligns with MCP server proliferation trend |
| [#3129](https://github.com/zeroclaw-labs/zeroclaw/issues/3129) | Preserve message draft on navigation | **Medium** | Common UX pattern; low implementation complexity |
| [#3125](https://github.com/zeroclaw-labs/zeroclaw/issues/3125) | Custom API path suffix for `custom:` providers | **Medium** | Provider ecosystem expansion need |
| [#3146](https://github.com/zeroclaw-labs/zeroclaw/issues/3146) | Ease tool usage approval on mobile channels | **Medium** | PR #3143 (Telegram inline buttons) addresses similar need |
| [#3120](https://github.com/zeroclaw-labs/zeroclaw/issues/3120) / [#3119](https://github.com/zeroclaw-labs/zeroclaw/issues/3119) | Web chat copy button + auto-expand composer | **Shipped** | ✅ Merged via #3121, #3133, #3144 |
| [#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059) | Alibaba Cloud Bailian coding plan support | **Low-Medium** | Provider-specific; may require partnership |

**Emerging theme:** "OpenClaw parity" is an explicit user demand pattern—three issues explicitly reference OpenClaw features. This competitive pressure is driving rapid web UI improvements.

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes):

> *"你们是注重安全,但却什么功能都不能用了"* — [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)
> 
> **Translation**: "You focus on security, but nothing works anymore." This 33-comment thread captures **configuration complexity fatigue**: users want a "fully permissive" toggle for personal use.

> *"zeroclaw依然拒绝执行安装ffmage,拒绝一切"* — [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)
> 
> Security sandboxing is **over-triggering** even with explicit user override attempts.

### Use Case Gaps:

| User Segment | Unmet Need | Evidence |
|:---|:---|:---|
| **Local/self-hosting enthusiasts** | Run on older Linux without containerization | #3070 (GLIBC_2.39) |
| **Ollama + Qwen users** | Reliable local tool-calling | #3079, #3116 partial fix |
| **Mobile-first users** | Streamlined tool approval on small screens | #3146 |
| **Multi-tenant/channel operators** | Per-channel cost tracking | #3088 (fixed), but pattern suggests broader observability needs |
| **MCP power users** | Scalable tool management | #3095 (deferred loading), #3069 (subagent tool exposure) |

### Satisfaction Signals:

- Rapid fix turnaround for web UI issues (#2961, #3088 closed same day as reported)
- Active "OpenClaw parity" responsiveness indicates competitive awareness

### Dissatisfaction Signals:

- Security model perceived as paternalistic (#1478)
- Build fragility on Windows (#3135) and fresh clones (#3139, now fixed)
- Branch policy confusion (#3131) — "master/main/dev/main-fix divergence"

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention:

| Issue | Age | Risk | Why It Matters |
|:---|:---:|:---|:---|
| [#3131](https://github.com/zeroclaw-labs/zeroclaw/issues/3131) Branch policy clarification | 1 day | **Process debt** | Contributors confused about `master`/`main`/`dev`/`main-fix` divergence; blocks clean contribution flow |
| [#3145](https://github.com/zeroclaw-labs/zeroclaw/issues/3145) "OpenClaw agent → coordinates from GRAVITY" | 1 day | **Noise/Spam?** | Unusual technical content (Riemannian space, Koopman operator) with no clear action; may need triage/close |
| [#2017](https://github.com/zeroclaw-labs/zeroclaw/pull/2017) Add Avian provider | 12 days | **Stalled feature** | Provider expansion; conflicts with `dev` branch target (project appears to have moved to `master`) |
| [#3045](https://github.com/zeroclaw-labs/zeroclaw/pull/3045) WhatsApp Web reconnect + QR | 3 days | **Reliability** | Production channel stability; needs review |
| [#3141](https://github.com/zeroclaw-labs/zeroclaw/pull/3141) Matrix media + E2EE verification | 1 day | **Security/Compliance** | End-to-end encryption for Matrix; significant undertaking |

### Recommended Actions:

1. **Resolve branch policy** (#3131) with explicit README update and branch cleanup
2. **Triage or close** #3145 if non-actionable
3. **Rebase or close** #2017 given branch target drift
4. **Prioritize S0/S1 bug fixes** (#3070, #2487) over new features to stabilize for release

---

*Digest generated from 50 PRs and 34 issues updated 2026-03-10.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-11

## 1. Today's Overview

PicoClaw shows **exceptionally high development velocity** with 81 PRs and 31 issues updated in 24 hours, indicating an active pre-release stabilization period for v0.2.1. The project is experiencing significant community growth with enterprise-focused contributions (Feishu, WeChat Work, Mattermost integrations) alongside core agent architecture refactoring. Two nightly builds were released, suggesting iterative bug-fixing. The 45:36 open-to-merged PR ratio indicates healthy throughput but also substantial pending review backlog. Critical stability concerns persist in channel integrations (Telegram, Feishu, IRC) and tool execution security.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **[v0.2.1-nightly.20260310.b89f6445](https://github.com/sipeed/picoclaw/releases/tag/v0.2.1-nightly.20260310.b89f6445)** | Nightly | Release automation alignment with GoReleaser (#1285), binary file access fix (#1107) |
| **[nightly](https://github.com/sipeed/picoclaw/releases/tag/nightly)** | Automated | Standard nightly build — **marked unstable** |

**Migration Notes:** No breaking changes documented. Nightly builds recommended only for testing.

---

## 3. Project Progress

### Merged/Closed Today (4 issues, 36 PRs merged/closed)

| PR/Issue | Description | Impact |
|----------|-------------|--------|
| [#62](https://github.com/sipeed/picoclaw/issues/62) | **CLOSED**: Telegram `allow_from` numeric ID fix | Channel security |
| [#1169](https://github.com/sipeed/picoclaw/issues/1169) | **CLOSED**: JSONL session persistence integration | Performance & crash safety |
| [#1329](https://github.com/sipeed/picoclaw/issues/1329) | **CLOSED**: Repository automation gaps | Infrastructure |

### Significant Open PRs Advancing Features

| PR | Author | Feature | Status |
|----|--------|---------|--------|
| [#1214](https://github.com/sipeed/picoclaw/pull/1214) | @afjcjsbx | Voice transcription feedback echo | UX enhancement |
| [#1332](https://github.com/sipeed/picoclaw/pull/1332) | @afjcjsbx | Real-time tool execution feedback | Transparency improvement |
| [#1253](https://github.com/sipeed/picoclaw/pull/1253) | @anugotta | Auto-inject SKILL.md into context | Skill system completion |
| [#949](https://github.com/sipeed/picoclaw/pull/949) | @niuguy | Runtime model switching via Telegram | Operational flexibility |
| [#1288](https://github.com/sipeed/picoclaw/pull/1288) | @lmorchard | **Mattermost channel support** | Enterprise expansion |

---

## 4. Community Hot Topics

### Most Active Discussions (by engagement)

| Rank | Issue | Comments | 👍 | Core Need |
|------|-------|----------|-----|-----------|
| 1 | [#1218](https://github.com/sipeed/picoclaw/issues/1218) Agent refactor: "What is an Agent" | 12 | 0 | **Philosophical & architectural clarity** — defining `SOUL.md` (personality) vs `AGENT.md` (behavior) separation |
| 2 | [#1270](https://github.com/sipeed/picoclaw/issues/1270) Telegram Forum Topics Support | 7 | 0 | **Conversation organization at scale** — parity with OpenClaw's threading |
| 3 | [#1278](https://github.com/sipeed/picoclaw/issues/1278) Subagent tool access & inheritance | 6 | 0 | **Autonomous agent hierarchies** — code analysis, testing, maintenance workflows |
| 4 | [#1316](https://github.com/sipeed/picoclaw/issues/1316) Event-driven agent loop with hooks | 3 | 1 | **Observability & control** — interruptible, steerable agent execution |

### Underlying Pattern
Community is pushing PicoClaw toward **production multi-agent orchestration** — from personality definition (SOUL.md) to hierarchical tool delegation (subagents) to execution observability (event-driven loops). This signals maturity beyond single-chatbot use cases.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **🔴 Critical** | [#1287](https://github.com/sipeed/picoclaw/issues/1287) | Tool calling fails — JSON unmarshal error on `tool_calls.function.arguments` | ❌ No |
| **🔴 Critical** | [#1299](https://github.com/sipeed/picoclaw/issues/1299) | MCP tools ignored in `picoclaw agent` mode | ❌ No |
| **🟡 High** | [#1298](https://github.com/sipeed/picoclaw/issues/1298) | Telegram slash commands broken (`/help`, `/model`) | ❌ No |
| **🟡 High** | [#1322](https://github.com/sipeed/picoclaw/issues/1322) | `spawn` ignores target agent model, uses caller model | ❌ No |
| **🟡 High** | [#1323](https://github.com/sipeed/picoclaw/issues/1323) | Endless "typing" indicator in Telegram | ❌ No |
| **🟡 High** | [#1307](https://github.com/sipeed/picoclaw/issues/1307) | Feishu auth expires after 12h | [#1318](https://github.com/sipeed/picoclaw/pull/1318) ✅ |
| **🟡 High** | [#1280](https://github.com/sipeed/picoclaw/issues/1280) | IRC `allow_from` uses Chinese commas | [#1301](https://github.com/sipeed/picoclaw/pull/1301) ✅ |
| **🟢 Medium** | [#1310](https://github.com/sipeed/picoclaw/issues/1310) | Wide character handling breaks terminal UI | ❌ No |
| **🟢 Medium** | [#1305](https://github.com/sipeed/picoclaw/issues/1305) | Banner prints to STDOUT breaking shell completion | ❌ No |
| **🟢 Medium** | [#1320](https://github.com/sipeed/picoclaw/issues/1320) | MiniMax official endpoint unsupported | ❌ No |

### Security Fixes In Flight
| PR | Issue | Description |
|----|-------|-------------|
| [#1012](https://github.com/sipeed/picoclaw/pull/1012) | SSRF in WebFetchTool | IP validation for resolved addresses |
| [#1217](https://github.com/sipeed/picoclaw/pull/1217) | Safety guard URL handling | Remote URL vs local path confusion |
| [#1261](https://github.com/sipeed/picoclaw/pull/1261) | Environment sanitization | Secrets leakage to LLM/exec tool |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Likelihood in v0.3.0 | Rationale |
|-------|---------|----------------------|-----------|
| [#1270](https://github.com/sipeed/picoclaw/issues/1270) Telegram Forum Topics | **High** | Active discussion, enterprise need, PR #1330 addresses session key sanitization prerequisite |
| [#1278](https://github.com/sipeed/picoclaw/issues/1278) Subagent tool inheritance | **High** | Critical for autonomous workflows; aligns with agent refactor (#1218, #1316) |
| [#1316](https://github.com/sipeed/picoclaw/issues/1316) Event-driven agent loop | **Medium-High** | Architectural foundation; @alexhoshina driving both this and #1218 |
| [#1328](https://github.com/sipeed/picoclaw/issues/1328) Telegram reactions | **Medium** | Low-noise UX; low implementation cost |
| [#1276](https://github.com/sipeed/picoclaw/issues/1276) WeChat Work long-link mode | **Medium** | Chinese enterprise demand; documentation exists |
| [#906](https://github.com/sipeed/picoclaw/issues/906) Configurable tool timeouts | **Medium** | Affects reliability; infrastructure-level |
| [#657](https://github.com/sipeed/picoclaw/issues/657) Separate directory for generated files | **Low-Medium** | Quality-of-life; breaking change risk |

### Roadmap Alignment
Issue [#988](https://github.com/sipeed/picoclaw/issues/988) (March 2026 Week 2 roadmap) shows **WebUI optimization** and **security interface** as maintainer priorities, but community energy is concentrated on **agent architecture** and **enterprise channels**. Potential tension between usability and power-user features.

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Issue | User | Scenario | Emotion |
|-------|------|----------|---------|
| [#1280](https://github.com/sipeed/picoclaw/issues/1280) | @KISSKISSCAT | IRC config fails with Chinese punctuation | Frustration (localization gap) |
| [#1281](https://github.com/sipeed/picoclaw/issues/1281) | @Vast-Stars | Feishu @mentions don't show user IDs | Confusion (incomplete integration) |
| [#1298](https://github.com/sipeed/picoclaw/issues/1298) | @Iiiiiiigor | Telegram commands silently fail | Broken expectation |
| [#1323](https://github.com/sipeed/picoclaw/issues/1323) | @urtaevS | Endless typing indicator | Perceived unresponsiveness |

### Satisfaction Signals
- **4 👍 on #988** (roadmap) — users appreciate transparency
- Active skill documentation contributions (#1302) — community investing in onboarding
- Enterprise channel contributions (Mattermost #1288, WeChat #1276) — organizational adoption

### Use Case Evolution
| Early Adopter | Current Demand |
|-------------|--------------|
| Personal Telegram bot | Multi-channel enterprise deployment |
| Single agent | Hierarchical subagent teams |
| Simple tool calls | Long-running autonomous workflows |

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>7 days, high impact)

| Issue | Age | Problem | Risk |
|-------|-----|---------|------|
| [#1011](https://github.com/sipeed/picoclaw/issues/1011) | 7 days | Proxy support for region-locked models | **Accessibility barrier** for international users |
| [#906](https://github.com/sipeed/picoclaw/issues/906) | 11 days | Hardcoded 60s tool timeout | Production reliability |
| [#657](https://github.com/sipeed/picoclaw/issues/657) | 16 days | Generated files polluting workspace | Data organization |

### PRs Stalled Despite Value

| PR | Age | Value | Blocker |
|----|-----|-------|---------|
| [#949](https://github.com/sipeed/picoclaw/pull/949) | 9 days | Runtime model switching | Review bandwidth |
| [#1018](https://github.com/sipeed/picoclaw/pull/1018) | 7 days | MarkdownV2 for Telegram | Review bandwidth |
| [#1012](https://github.com/sipeed/picoclaw/pull/1012) | 7 days | **SSRF security fix** | Security review priority? |

---

## Project Health Assessment

| Metric | Status | Trend |
|--------|--------|-------|
| Development velocity | 🟢 Excellent | ↑ 81 PRs/24h |
| Issue resolution | 🟡 Moderate | 4/31 closed (13%) |
| Critical bug backlog | 🔴 Concerning | 4 unassigned criticals |
| Community engagement | 🟢 Strong | 12-comment architectural discussions |
| Security posture | 🟡 Improving | 3 security PRs active |
| Enterprise readiness | 🟡 Building | Channel integrations maturing |

**Recommendation:** Prioritize critical bug triage (#1287, #1299, #1298, #1322) before v0.2.1 stable release. Consider dedicated review sprint for security PRs.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-11

## 1. Today's Overview

NanoClaw shows **exceptionally high development velocity** with 73 tracked items updated in 24 hours (23 issues, 50 PRs), indicating an active, rapidly evolving codebase. The project is currently focused on **three major parallel workstreams**: a comprehensive learning system epic (#907), multi-channel expansion (Telegram, WhatsApp, Gmail), and critical stability fixes for production deployments. Notably, 17 PRs were merged/closed, suggesting effective maintainer throughput despite high volume. However, a **critical scheduler race condition** (#825) remains open from March 8, and performance degradation reports (#941) signal growing pains as the architecture scales.

---

## 2. Releases

**No new releases** — Version remains unchanged. The high PR velocity without releases suggests either:
- Accumulation for a significant version bump (likely v1.3.0 given the learning system epic)
- Release pipeline friction worth monitoring

---

## 3. Project Progress

### Merged/Closed Today (17 items)

| PR/Issue | Description | Impact |
|----------|-------------|--------|
| [#947](https://github.com/qwibitai/nanoclaw/pull/947) | Added OpenAI Codex support | Expands LLM provider options |
| [#945](https://github.com/qwibitai/nanoclaw/pull/945) | Integrated `@onecli-sh/sdk` for container proxy configuration | Infrastructure hardening |
| [#939](https://github.com/qwibitai/nanoclaw/pull/939), [#940](https://github.com/qwibitai/nanoclaw/pull/940) | PID lockfile to prevent duplicate instances | **Critical reliability fix** for systemd/distobox deployments |
| [#929](https://github.com/qwibitai/nanoclaw/pull/929) | Skip `.env` shadow mount on Apple Container | Apple Silicon compatibility |
| [#936](https://github.com/qwibitai/nanoclaw/pull/936) → superseded | Container permission fixes for root hosts | Linux VPS deployment stability |
| [#931](https://github.com/qwibitai/nanoclaw/pull/931) | Telegram channel with bot pool for agent swarm | Multi-agent messaging infrastructure |
| [#898](https://github.com/qwibitai/nanoclaw/issues/898), [#897](https://github.com/qwibitai/nanoclaw/issues/897), [#896](https://github.com/qwibitai/nanoclaw/issues/896), [#895](https://github.com/qwibitai/nanoclaw/issues/895), [#893](https://github.com/qwibitai/nanoclaw/issues/893), [#892](https://github.com/qwibitai/nanoclaw/issues/892) | Resolved merge-forward failures for skill branches | Skill branch maintenance automation |

**Key advancement**: The `nanoclaw-learning-system` epic (#907) was formally established, structuring four major capabilities into trackable sub-issues.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#907](https://github.com/qwibitai/nanoclaw/issues/907) **Epic: nanoclaw-learning-system** | Created today, 4 linked sub-issues | **Strategic inflection point** — community coalescing around agent self-improvement. Sub-issues cover: FTS5 search (#908), structured memory (#910), skill self-creation (#911), and session search IPC (#909). Represents shift from "tool" to "autonomous learning agent." |
| [#917](https://github.com/qwibitai/nanoclaw/pull/917) **WhatsApp/Gmail/voice/vision mega-PR** | Open, needs review | **Highest community interest** — unifies four major channel/feature requests. Risk: review bottleneck given scope. |
| [#926](https://github.com/qwibitai/nanoclaw/issues/926) **Admin mode with `/capabilities`** | High priority, active discussion | Operational necessity emerging — users need visibility into agent capabilities without code inspection. |
| [#865](https://github.com/qwibitai/nanoclaw/issues/865) **"Containers alone don't make you secure"** | Security hardening discussion | **Philosophical tension** — community pushing back on implicit trust model. Suggests need for formal threat model documentation. |

**Underlying need**: Users want NanoClaw to be **deployable, observable, and secure** in production multi-user environments — moving beyond personal automation to team/enterprise infrastructure.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **Critical** | [#825](https://github.com/qwibitai/nanoclaw/issues/825) Scheduler race condition: once-tasks marked complete before fire handler | **OPEN since 2026-03-08** | None linked; root cause of "faking tool calls" incident |
| 🟠 **High** | [#941](https://github.com/qwibitai/nanoclaw/issues/941) Unnecessary TypeScript recompilations degrade performance | Open | None; 13s+ startup delays on Mac native containers |
| 🟠 **High** | [#905](https://github.com/qwibitai/nanoclaw/issues/905) Agent runner source mount never updated after initial copy | Open | None; stale code in long-running sessions |
| 🟡 **Medium** | [#889](https://github.com/qwibitai/nanoclaw/issues/889) Unicode surrogates in Bash output corrupt JSONL → HTTP 400 | **CLOSED** | Fixed in today's merge |
| 🟡 **Medium** | Merge-forward automation failures (#898-#892) | **CLOSED** | Skill branch maintenance resolved |

**Stability assessment**: Two **production-blocking issues** remain unaddressed (#825, #941). The scheduler race condition is particularly concerning given it caused a live incident.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in Next Version | Rationale |
|---------|-------|---------------------------|-----------|
| **FTS5 conversation search** | [#908](https://github.com/qwibitai/nanoclaw/issues/908), [#909](https://github.com/qwibitai/nanoclaw/issues/909) | **Very High** | Core to learning epic; IPC/MCP infrastructure exists |
| **Structured memory (USER.md/MEMORY.md)** | [#910](https://github.com/qwibitai/nanoclaw/issues/910) | **Very High** | Well-specified, additive change |
| **Skill self-creation via IPC** | [#911](https://github.com/qwibitai/nanoclaw/issues/911), [#912](https://github.com/qwibitai/nanoclaw/issues/912) | **High** | Security scanning requirement adds complexity |
| **Admin mode /capabilities** | [#926](https://github.com/qwibitai/nanoclaw/issues/926) | **High** | Immediate operational utility |
| **WhatsApp/Gmail channels** | [#917](https://github.com/qwibitai/nanoclaw/pull/917) | **Medium-High** | Large PR needs review; may split |
| **Per-group credential management** | [#868](https://github.com/qwibitai/nanoclaw/pull/868) | **Medium** | Blocked on review; security-critical |

**Prediction**: v1.3.0 will ship the learning system as "beta" features behind flags, with WhatsApp/Gmail following in v1.3.1.

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Context | Severity |
|-------|-----------|----------|
| [#941](https://github.com/qwibitai/nanoclaw/issues/941) 13+ second response times | Mac native containers, development workflow | Workflow-breaking |
| [#825](https://github.com/qwibitai/nanoclaw/issues/825) Scheduler reliability | Production automation, "faking tool calls" incident | Trust erosion |
| [#865](https://github.com/qwibitai/nanoclaw/issues/865) Security model clarity | Security-conscious adopters, multi-user scenarios | Adoption blocker |
| [#905](https://github.com/qwibitai/nanoclaw/issues/905) Stale container code | Long-running group sessions | Maintenance burden |

### Positive Signals
- **Trust validation**: [#924](https://github.com/qwibitai/nanoclaw/issues/924) — 92.1/100 (A+) on Nerq Trust Index, top 5 of 204K+ agents
- **Platform expansion**: Active work on Telegram, WhatsApp, Gmail indicates user demand beyond Discord/Slack

### Use Case Evolution
Early adopters (personal automation) → **Production deployers** (systemd VPS, team coordination) → **Enterprise evaluators** (security hardening, credential isolation)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#825](https://github.com/qwibitai/nanoclaw/issues/825) Critical scheduler race | 3 days | **Incident recurrence** | Maintainer assignment, hotfix branch |
| [#301](https://github.com/qwibitai/nanoclaw/pull/301) Telegram skill enhancement | 21 days | Feature duplication | Close or merge before #931 conflicts |
| [#868](https://github.com/qwibitai/nanoclaw/pull/868) Per-group credentials | 2 days | Security PR stagnation | Review prioritization |
| [#917](https://github.com/qwibitai/nanoclaw/pull/917) Mega-channel PR | 1 day | Review bottleneck | Split or assign dedicated reviewer |

**Recommendation**: The 3-day-old critical bug (#825) exceeds acceptable SLA for a production race condition. Suggest maintainer escalation and potential v1.2.7 hotfix release ahead of feature development.

---

*Digest generated from 73 GitHub items. Project health: **Active/High Velocity** with **Critical Stability Debt** requiring attention.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-11

## 1. Today's Overview

IronClaw shows **extremely high velocity** with 100 items updated in 24 hours (50 issues, 50 PRs) and aggressive staging-to-main promotion activity (4 promotion batches). The project is in a **critical stabilization phase**: v0.17.0 released yesterday while v0.18.0 is already queued with breaking API changes. A sophisticated AI-powered CI review system (`staging-ci-review`) is actively surfacing 20+ critical/high-severity bugs, creating tension between rapid feature landing and quality gates. The maintainer team is prioritizing automated safety checks over manual review, with 18 issues closed versus 32 remaining open.

---

## 2. Releases

### v0.17.0 — 2026-03-10
| Aspect | Details |
|--------|---------|
| **Key Additions** | Per-provider LLM parameter filtering ([#809](https://github.com/nearai/ironclaw/pull/809)); persistent `user_id` in job saves with exposed `job_id` on routine runs ([#709](https://github.com/nearai/ironclaw/pull/709)); chained promotion PRs for CI |
| **Breaking Changes** | None documented in release notes |
| **Migration Notes** | N/A — additive changes only |

### v0.18.0 — Pending (PR [#885](https://github.com/nearai/ironclaw/pull/885))
| Aspect | Details |
|--------|---------|
| **Breaking Changes** | ⚠️ **API breaking**: `constructible_struct_adds_field` — externally-constructible structs gain new pub fields, breaking struct literal construction |
| **Status** | Release PR open, awaiting merge |

---

## 3. Project Progress

### Major Merged/Closed PRs Today

| PR | Author | Scope | Impact |
|----|--------|-------|--------|
| [#790](https://github.com/nearai/ironclaw/pull/790) | @PierreLeGuen | **Slack Relay Integration** | Production-ready channel-relay service via SSE with OAuth flow; closes enterprise connectivity gap |
| [#800](https://github.com/nearai/ironclaw/pull/800) | @qbit-glitch | **Agentic Loop Unification** | Eliminates 3 copy-pasted loops → single `AgenticLoop` engine via `LoopDelegate` trait; major maintainability win |
| [#830](https://github.com/nearai/ironclaw/pull/830), [#865](https://github.com/nearai/ironclaw/pull/865), [#901](https://github.com/nearai/ironclaw/pull/901), [#904](https://github.com/nearai/ironclaw/pull/904) | @ironclaw-ci[bot] | **Staging Promotions** | 4 automated mainline promotions; indicates high-confidence CI pipeline |
| [#883](https://github.com/nearai/ironclaw/pull/883) | @henrypark133 | **CI Review Fixes (Batch 1)** | Addresses 5 critical/high issues: unreachable error handling, non-transactional updates, TOCTOU races |

### Active Development (Open PRs)

| PR | Author | Scope | Significance |
|----|--------|-------|------------|
| [#905](https://github.com/nearai/ironclaw/pull/905) | @qbit-glitch | **Critical Lock Fix** | Fixes [#869](https://github.com/nearai/ironclaw/issues/869) — `RwLock` held across async I/O blocking webhooks; 10 call sites patched |
| [#796](https://github.com/nearai/ironclaw/pull/796) | @PierreLeGuen | **Slack Approval UX** | Interactive Block Kit buttons for tool approval in DMs; security hardening for relay channels |
| [#903](https://github.com/nearai/ironclaw/pull/903) | @nickpismenkov | **OpenClaw Migration** | Import memory/history/settings from predecessor project — **ecosystem consolidation signal** |
| [#757](https://github.com/nearai/ironclaw/pull/757) | @ilblackdragon | **Generic Webhook Ingress** | Host-verified `/webhook/tools/{tool}` endpoint; removes GitHub-specific hardcoding |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | 👍 | Analysis |
|------|------|----------|-----|----------|
| 1 | [#67](https://github.com/nearai/ironclaw/issues/67) — "near.ai account is shoehorned in" | 4 | 8 | **Philosophical tension**: Community pushback against NEAR ecosystem lock-in. Closed but unresolved sentiment — project perceived as vendor-captive despite open source. *Underlying need*: Pluggable auth backends, identity provider abstraction |
| 2 | [#868](https://github.com/nearai/ironclaw/issues/868), [#867](https://github.com/nearai/ironclaw/issues/867), [#439](https://github.com/nearai/ironclaw/issues/439) | 2 each | 0-1 | CI-generated critical bugs dominate discussion; automated review *creating* work faster than humans resolve it |

### Emerging Patterns
- **Slack integration** is the dominant user-facing theme (3 PRs: relay, socket mode, approval UX)
- **MCP (Model Context Protocol)** auth friction ([#299](https://github.com/nearai/ironclaw/issues/299), [#313](https://github.com/nearai/ironclaw/pull/313)) — browser automation use case blocked; @FrenchMajesty driving fix

---

## 5. Bugs & Stability

### Critical Severity (Fix PRs Identified)

| Issue | Description | Fix PR | Risk |
|-------|-------------|--------|------|
| [#869](https://github.com/nearai/ironclaw/issues/869) | Lock held across async I/O blocks webhook processing | [#905](https://github.com/nearai/ironclaw/pull/905) | Deadlock under load |
| [#868](https://github.com/nearai/ironclaw/issues/868) | Unsafe env var mutation during SIGHUP + race condition | *Closed, fix merged* | Memory corruption |
| [#867](https://github.com/nearai/ironclaw/issues/867) | Invalid default model `gpt-5-mini` doesn't exist | *Closed, fix merged* | Startup failure |
| [#823](https://github.com/nearai/ironclaw/issues/823) | N+1 query in event trigger loop | **OPEN** | DB overload |
| [#813](https://github.com/nearai/ironclaw/issues/813) | Non-transactional multi-step context updates | [#883](https://github.com/nearai/ironclaw/pull/883) | Data inconsistency |
| [#812](https://github.com/nearai/ironclaw/issues/812) | TOCTOU race in job status update | [#883](https://github.com/nearai/ironclaw/pull/883) | Job state corruption |

### High Severity (Open, No Fix Yet)

| Issue | Description | Impact |
|-------|-------------|--------|
| [#858](https://github.com/nearai/ironclaw/issues/858) | N+1 query in secrets credential injection | WASM tool startup latency |
| [#827](https://github.com/nearai/ironclaw/issues/827) | Full message Vec clone per iteration (5×/routine) | Memory pressure, GC churn |
| [#826](https://github.com/nearai/ironclaw/issues/826) | Unbounded message Vec growth in tool loop | OOM risk in long routines |
| [#825](https://github.com/nearai/ironclaw/issues/825) | ReDoS risk in event trigger regexes | DoS via malicious pattern |
| [#816](https://github.com/nearai/ironclaw/issues/816) | Token budget bypass in `select_tools()` | Cost/security violation |
| [#815](https://github.com/nearai/ironclaw/issues/815) | User metadata bypasses token budget | Cost injection attack |
| [#814](https://github.com/nearai/ironclaw/issues/814) | Token budget not persisted to DB | Budget enforcement lost on restart |

### Stability Assessment
**Concerning**: 6 critical + 12 high severity issues surfaced in 24h by automated review. Fix velocity is high (batch fixes landing) but discovery rate exceeds resolution. The `staging-ci-review` bot is effectively a **denial-of-service attack on maintainer attention** — valuable but overwhelming.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in v0.18+ |
|--------|--------|----------------------|
| **Multimodal/vision support** | [#766](https://github.com/nearai/ironclaw/issues/766) | **High** — Cloud API already supports, just needs wiring |
| **OpenClaw migration tooling** | [#903](https://github.com/nearai/ironclaw/pull/903) | **In Progress** — ecosystem consolidation priority |
| **Slack Socket Mode** | [#333](https://github.com/nearai/ironclaw/pull/333) | **Medium** — NAT-friendly deployment, enterprise need |
| **Pluggable auth/identity** | [#67](https://github.com/nearai/ironclaw/issues/67) backlash | **Medium-term** — community pressure building |
| **Generic webhook infrastructure** | [#757](https://github.com/nearai/ironclaw/pull/757) | **High** — merged soon, enables third-party integrations |
| **Enhanced diagnostics** | [#822](https://github.com/nearai/ironclaw/pull/822) | **High** — 7→16 health checks, reduces support burden |

---

## 7. User Feedback Summary

### Pain Points

| Issue | User | Core Problem |
|-------|------|--------------|
| [#299](https://github.com/nearai/ironclaw/issues/299) | @FrenchMajesty | **MCP auth opacity** — can't modify `mcpServers` JSON directly; blocked on Browserbase integration |
| [#840](https://github.com/nearai/ironclaw/issues/840) | @micsama | **WIT version drift** — fresh install ships stale WASM artifacts incompatible with host 0.3.0 |
| [#697](https://github.com/nearai/ironclaw/issues/697) | @sergeiest | **Silent routine failures** — Docker/sandbox unavailability gives zero feedback, debugging nightmare |
| [#67](https://github.com/nearai/ironclaw/issues/67) | @lee-b | **Vendor lock-in perception** — NEAR account requirement alienates non-crypto users |

### Satisfaction Signals
- Active contribution from new contributors (@FrenchMajesty, @KonstantinMirin, @NYX-privacy-ai) — onboarding friction low enough
- Rapid CI promotion cycle indicates confidence in test coverage

### Dissatisfaction Signals
- "Shoehorned" framing in #67 suggests **brand/positioning risk**
- WASM tool compatibility issues (#840) indicate **release engineering gaps**

---

## 8. Backlog Watch

### Long-Standing Items Needing Attention

| Item | Age | Status | Risk |
|------|-----|--------|------|
| [#313](https://github.com/nearai/ironclaw/pull/313) — MCP auth fix | ~17 days | **Open, unmerged** | Blocks browser automation use case; @FrenchMajesty has working fix, needs maintainer review |
| [#333](https://github.com/nearai/ironclaw/pull/333) — Slack Socket Mode | ~16 days | **Open, unmerged** | Enterprise deployment blocker (NAT/firewall friendly); significant engineering effort, may need rebase |
| [#677](https://github.com/nearai/ironclaw/pull/677) — Unified auth/configure | ~4 days | **Open** | Core architecture refactor; touches 15+ scopes, high review burden |
| [#635](https://github.com/nearai/ironclaw/pull/635) — Worker tool result fixes | ~5 days | **Open** | Anthropic API compatibility; affects production workloads |

### Maintainer Attention Needed
- **PR #313**: Community fix for auth pain point — low risk, high user impact, should fast-track
- **Token budget issues #814-#816**: Design-level flaw (budget not persisted, bypassable) — needs architectural decision before implementation
- **Routine engine performance #826-#827**: Memory/CPU optimization — may conflict with #800 refactoring, coordinate with @qbit-glitch

---

## Project Health Score

| Dimension | Rating | Notes |
|-----------|--------|-------|
| Velocity | ⭐⭐⭐⭐⭐ | 100 items/day, 4 promotions |
| Quality Gates | ⭐⭐⭐⭐☆ | Sophisticated AI CI, but generating backlog faster than clearing |
| Community | ⭐⭐⭐⭐☆ | Active contributors, some lock-in friction |
| Stability | ⭐⭐⭐☆☆ | Many critical bugs surfacing; fix rate promising but catch-up needed |
| Documentation/UX | ⭐⭐⭐☆☆ | Silent failures, stale artifacts, auth opacity hurt first-run experience |

**Overall**: High-potential project in **intensive care mode** — engineering discipline is strong (CI, refactoring, unification), but operational debt from rapid feature growth requires sustained stabilization sprint before v0.18.0 should ship.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-11

## 1. Today's Overview

LobsterAI shows **high community activity** with 12 active issues and 8 PRs updated in the last 24 hours, indicating strong user engagement post-recent releases. The project is actively merging IM channel integrations (6 closed PRs vs. 2 open), suggesting a strategic push toward multi-platform deployment. No new releases were published today. Notably, all 12 issues remain open with zero closures, signaling potential maintainer bandwidth constraints or complex problem backlog. The issue mix reveals stability concerns (crashes, UI rendering failures) alongside feature expansion requests (LM Studio, Tencent CodePal, enterprise WeChat).

---

## 2. Releases

**None** — No new releases published today. Latest release status unchanged.

---

## 3. Project Progress

### Merged/Closed PRs (6 items)

| PR | Author | Summary | Significance |
|:---|:---|:---|:---|
| [#364](https://github.com/netease-youdao/LobsterAI/pull/364) | @liugang519 | Feishu IM OpenClaw support | **Major**: Enterprise IM expansion |
| [#363](https://github.com/netease-youdao/LobsterAI/pull/363) | @liugang519 | Discord OpenClaw implementation | **Major**: Community platform coverage |
| [#359](https://github.com/netease-youdao/LobsterAI/pull/359) | @liugang519 | Telegram OpenClaw bugfixes | Stability improvement |
| [#356](https://github.com/netease-youdao/LobsterAI/pull/356) | @liugang519 | Telegram IM feature (OpenClaw) | Feature completion |
| [#346](https://github.com/netease-youdao/LobsterAI/pull/346) | @btc69m979y-dotcom | OpenClaw plugin preinstall system + IM config sync | **Infrastructure**: Auto-packaging for 4 official IM plugins (DingTalk, Feishu, QQ, WeCom) |
| [#355](https://github.com/netease-youdao/LobsterAI/pull/355) | @liuzhq1986 | Chat pagination (conversation turn navigation) | UX enhancement |

**Key Advancement**: @liugang519 emerged as the primary IM integration contributor, delivering 4 merged PRs for Feishu, Discord, and Telegram channels—establishing OpenClaw as the unified integration framework.

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Issue/PR | Comments | Analysis |
|:---|:---|:---:|:---|
| 1 | [#320](https://github.com/netease-youdao/LobsterAI/issues/320) "配置龙虾军团" (Lobster Army configuration) | 3 | **Multi-agent orchestration demand** — Users want to run multiple local agents simultaneously. Suggests need for agent pool management, load balancing, or hierarchical agent architectures. |
| 2 | [#368](https://github.com/netease-youdao/LobsterAI/issues/368) Ubuntu 24.04 deb install blank screen | 2 | **Critical deployment blocker** — Node24/npm11 compatibility issue with packaged builds. Likely Electron/renderer process failure. |
| 2 | [#357](https://github.com/netease-youdao/LobsterAI/issues/357) AI image reading causes freeze | 2 | **Stability regression** — Vision/multimodal feature failure, possibly memory leak or blocking I/O in image processing pipeline. |

### Underlying Needs
- **Scalability**: Multi-agent deployment (#320) signals power-user adoption beyond single-agent use cases
- **Reliability**: Ubuntu LTS compatibility (#368) and vision stability (#357) are adoption barriers for enterprise Linux deployments

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---:|
| **Critical** | [#368](https://github.com/netease-youdao/LobsterAI/issues/368) | Ubuntu 24.04.4 LTS + Node24/npm11: deb package installs but renders blank UI | ❌ No |
| **High** | [#357](https://github.com/netease-youdao/LobsterAI/issues/357) | Image analysis causes complete application freeze/crash | ❌ No |
| **High** | [#360](https://github.com/netease-youdao/LobsterAI/issues/360) | Local Qwen3-235B deployment: 502 ERR_EMPTY_RESPONSE via OpenAI-compatible API | ❌ No |
| **Medium** | [#361](https://github.com/netease-youdao/LobsterAI/issues/361) | Chat UI fails to render images (claims display success when failed) | ❌ No |
| **Medium** | [#358](https://github.com/netease-youdao/LobsterAI/issues/358) | Tasks prematurely marked complete before execution finishes | ❌ No |
| **Medium** | [#354](https://github.com/netease-youdao/LobsterAI/issues/354) | Infinite loop in task execution with no memory clear mechanism | ❌ No |
| **Low** | [#366](https://github.com/netease-youdao/LobsterAI/issues/366) | `openclaw gateway status` fails despite service on port 18789 | ❌ No |

**Stability Assessment**: **Concerning** — 7 open bugs with no linked fixes, including 2 critical/high severity UI/runtime failures. The concentration of "freeze," "blank screen," and "premature completion" issues suggests potential event loop or async handling regressions.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| [#365](https://github.com/netease-youdao/LobsterAI/issues/365) | LM Studio local model support | **High** | Complements existing local model focus; @AndersHsueh already contributed PR #5 (ESLint), showing active involvement |
| [#120](https://github.com/netease-youdao/LobsterAI/issues/120) | Enterprise WeChat (WeCom) robot channel | **High** | PR #346 already preinstalls WeCom plugin; likely pending final integration |
| [#362](https://github.com/netease-youdao/LobsterAI/issues/362) | Tencent CodePal API integration | **Medium** | Cloud IDE integration aligns with coding assistant positioning; requires API adapter |
| [#320](https://github.com/netease-youdao/LobsterAI/issues/320) | Multi-agent "Lobster Army" configuration | **Medium** | Architecture-level change; may require orchestration layer redesign |

**Predicted Next Release Focus**: IM channel completion (WeCom), local model ecosystem expansion (LM Studio), and stability hardening for vision/multimodal features.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Installation fragility** | #368 (Ubuntu deb failure), #366 (gateway service config) | High |
| **Multimodal instability** | #357 (image freeze), #361 (image display failure) | High |
| **Task execution reliability** | #358 (premature completion), #354 (infinite loops) | Medium-High |
| **Local model integration gaps** | #360 (Qwen3 502 errors), #365 (LM Studio request) | Medium |
| **Notification system regressions** | #369 (DingTalk scheduled task alerts broken) | Medium |

### Use Cases Emerging
- **Enterprise deployment**: Ubuntu LTS, deb packaging, enterprise IM (WeCom/Feishu)
- **Local-first AI**: Self-hosted Qwen3-235B, LM Studio integration
- **Multi-agent workflows**: "Lobster Army" concept for distributed task processing

### Satisfaction Signals
- Active IM channel expansion (Feishu/Discord/Telegram merged) shows responsive platform coverage
- Chat pagination (#355) demonstrates UX attention

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#320](https://github.com/netease-youdao/LobsterAI/issues/320) | 5 days | **Architectural** | Maintainer response on multi-agent roadmap; 3 comments suggest community interest |
| [#5](https://github.com/netease-youdao/LobsterAI/pull/5) | 20 days | **Code quality** | ESLint configuration PR stalled; 269 lint errors blocking CI quality gates |
| [#120](https://github.com/netease-youdao/LobsterAI/issues/120) | 13 days | **Feature parity** | Enterprise WeChat requested; infrastructure ready per #346 but needs final hook |

**Maintainer Attention Recommended**: 
- **#5**: Merge or request changes to unblock code quality improvements
- **#320**: Clarify multi-agent architecture stance to guide community expectations
- **Critical bug triage**: #368, #357, #360 need reproduction confirmation and assignment

---

*Digest generated from GitHub activity 2026-03-10 to 2026-03-11. All links: https://github.com/netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-11

## 1. Today's Overview

TinyClaw shows **strong development velocity** with 9 PRs updated in the last 24 hours and 4 successful merges/closures. The project is undergoing significant architectural transformation: a major monorepo refactoring landed today, replacing Redis/BullMQ with SQLite and establishing npm workspaces. No open issues indicates either excellent code health or early-stage issue tracking practices. The contributor base appears concentrated among a few active developers (@jliao leading with 6 PRs, @dagelf and @0x177630b6 contributing).

---

## 2. Releases

**No new releases** — version remains unchanged.

---

## 3. Project Progress

### Merged/Closed PRs Today (4 items)

| PR | Description | Impact |
|:---|:---|:---|
| [#186](https://github.com/TinyAGI/tinyclaw/pull/186) | **Major**: Monorepo restructure + SQLite queue migration | Eliminates Redis dependency, reduces queue code 62% (427→160 lines), enables WAL mode for better concurrency |
| [#187](https://github.com/TinyAGI/tinyclaw/pull/187) | Build fix: `tsc --build` for monorepo dependency order | Unblocks development after #186; ensures `@tinyclaw/core` builds before dependents |
| [#188](https://github.com/TinyAGI/tinyclaw/pull/188) | Gitignore `*.tsbuildinfo` files | Developer experience cleanup |
| [#177](https://github.com/TinyAGI/tinyclaw/pull/177) | Chatroom API + real-time CLI viewer | New user-facing feature: REST endpoints for team chat with live CLI interface |

**Key Technical Shifts:**
- **Infrastructure**: Redis/BullMQ → SQLite (`better-sqlite3` with WAL)
- **Architecture**: Flat `src/` → 5 npm workspaces (`@tinyclaw/core`, `@tinyclaw/teams`, `@tinyclaw/channels`, `@tinyclaw/server`, `@tinyclaw/visualizer`)
- **Build**: Parallel workspace builds → ordered TypeScript project references

---

## 4. Community Hot Topics

| PR | Status | Activity | Analysis |
|:---|:---|:---|:---|
| [#141](https://github.com/TinyAGI/tinyclaw/pull/141) | OPEN (13 days) | Longest-running PR | **Platform integration demand**: Discord guild channels, slash commands, agent handoff. Signals need for multi-platform deployment beyond web UI. The 13-day age suggests complexity in testing Discord's async event model against TinyClaw's new SQLite queue. |
| [#172](https://github.com/TinyAGI/tinyclaw/pull/172) | OPEN | TUI channel example | **Extensibility interest**: Modular channel system enabling terminal-based interaction. Complements #177's CLI viewer—suggests community wants lightweight, non-browser interfaces. |
| [#185](https://github.com/TinyAGI/tinyclaw/pull/185) | OPEN | 1500+ lines replaced | **Developer experience priority**: Bash→TypeScript migration using `@clack/prompts`. Large refactor indicates CLI is becoming primary interaction surface. |

**Underlying Needs:**
1. **Deployment flexibility**: Web, Discord, TUI, CLI—users want TinyClaw everywhere
2. **Operational simplicity**: SQLite over Redis reduces infrastructure burden
3. **Modern tooling**: TypeScript-native CLI with validation and color output

---

## 5. Bugs & Stability

| Severity | Issue/PR | Status | Details |
|:---|:---|:---|:---|
| 🔴 **High** | Build failures in monorepo | **FIXED** in [#187](https://github.com/TinyAGI/tinyclaw/pull/187) | Race condition: dependent packages built before `@tinyclaw/core` completed. Fixed via `tsc --build` with project references. |
| 🟡 **Medium** | `tsbuildinfo` cache pollution | **FIXED** in [#188](https://github.com/TinyAGI/tinyclaw/pull/188) | Incremental build files committed to git; now ignored. |

**Stability Assessment**: No production bugs reported. The rapid fix cycle (PR #186 merged, #187 same-day fix) indicates responsive maintenance. Risk: Large architectural changes (#186) may surface integration issues in coming days.

---

## 6. Feature Requests & Roadmap Signals

| PR | Feature | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| [#182](https://github.com/TinyAGI/tinyclaw/pull/182) | Auto-trigger agents on kanban "In Progress" | **High** | Small UX polish, aligns with workflow automation theme; ready to merge |
| [#183](https://github.com/TinyAGI/tinyclaw/pull/183) | Simplify office UI, remove `message_received` | **High** | Code cleanup PR, reduces event complexity; low risk |
| [#185](https://github.com/TinyAGI/tinyclaw/pull/185) | `@clack/prompts` CLI migration | **Medium-High** | Large but complete; blocked only by review bandwidth |
| [#172](https://github.com/TinyAGI/tinyclaw/pull/172) | TUI channel module | **Medium** | Example implementation; may need refinement for general use |
| [#141](https://github.com/TinyAGI/tinyclaw/pull/141) | Discord integration | **Medium** | Feature-complete but long review cycle suggests complexity concerns |

**Predicted vNext Focus**: Workflow automation (#182), UI simplification (#183), and polished CLI experience (#185).

---

## 7. User Feedback Summary

**No direct user feedback available** — zero open issues, zero comments on PRs.

**Inferred Pain Points from PR Descriptions:**
- **Infrastructure complexity**: "Eliminates Redis dependency" (#186) suggests deployment friction was a known issue
- **CLI usability**: 1500 lines of bash prompts replaced indicates previous UX was brittle/unmaintainable
- **Kanban workflow friction**: "Previously, users had to click 'Send' after moving the task" (#182) — extra steps in agent triggering

**Satisfaction Signals**: Rapid merge of quality-of-life improvements suggests maintainers prioritize smooth UX.

---

## 8. Backlog Watch

| PR | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#141](https://github.com/TinyAGI/tinyclaw/pull/141) | 13 days | **Platform strategy** | Discord integration is largest external platform PR; delay risks contributor fatigue (@0x177630b6). Recommend: explicit timeline or merge with follow-up issues. |
| [#172](https://github.com/TinyAGI/tinyclaw/pull/172) | 2 days | **Architecture alignment** | TUI channel may need updates to match post-#186 monorepo structure. Verify compatibility with new `@tinyclaw/channels` workspace. |

**Maintainer Attention**: No critical unattended issues. Suggest prioritizing #141 review to retain platform contributor engagement.

---

## Project Health Score: 🟢 **Healthy**

| Metric | Assessment |
|:---|:---|
| Velocity | High (9 PRs/24h) |
| Quality | Good (4/4 merges clean, rapid bugfix) |
| Community | Narrow (3 active contributors) |
| Risk | Moderate (large refactor #186 needs burn-in) |

**Recommendation**: Monitor for regressions from monorepo migration; prioritize #141 review to diversify platform support.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-11

## 1. Today's Overview

Moltis shows **high development velocity** with 25 items updated in 24 hours (13 issues, 12 PRs) and an impressive **67% closure rate** on touched items. The project is in active stabilization mode: 8 PRs merged/closed versus 4 remaining open, with core maintainers (particularly @penso and @lijunle) rapidly addressing onboarding friction, authentication edge cases, and WebSocket connectivity issues. No new release was cut, suggesting the team is accumulating fixes for a larger point release. The focus areas indicate Moltis is prioritizing **first-time user experience** and **distributed/node deployment reliability** over new features.

---

## 2. Releases

**No new releases** — version unchanged.

---

## 3. Project Progress

### Merged/Closed PRs (8 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#368](https://github.com/moltis-org/moltis/pull/368) | @SimoMay | **Fixed trusted-network proxy immediate shutdown** — retained `watch::Sender` to prevent scope-drop shutdown signal | Critical fix for sandboxed tool execution |
| [#377](https://github.com/moltis-org/moltis/pull/377) | @Devansh-bit | **Added `delay_ms` to cron scheduling** — LLMs no longer need to compute absolute timestamps | Eliminates "scheduled in past" job failures |
| [#387](https://github.com/moltis-org/moltis/pull/387) | @penso | **WhatsApp sled persistence + graceful shutdown** — merged #285 with race condition fixes | Resolves #274 (WhatsApp restart failures) |
| [#386](https://github.com/moltis-org/moltis/pull/386) | @penso | **Auth bypass for onboarding API calls** — STT test button now works during first-time setup | Fixes #378 (401 during onboarding) |
| [#384](https://github.com/moltis-org/moltis/pull/384) | @penso | **Fixed IDENTITY.md/SOUL.md write location** — now writes to `agents/main/` not root | Fixes #376 (settings ignored at runtime) |
| [#388](https://github.com/moltis-org/moltis/pull/388) | @penso | **Documentation: clarified Docker socket fallback** | Closes #351 |
| [#379](https://github.com/moltis-org/moltis/pull/379) | @gonzfe05 | **Alternative auth fix for onboarding** (superseded by #386) | — |
| [#382](https://github.com/moltis-org/moltis/pull/382) | @lijunle | **Node WebSocket route + connection string fixes** — added `/ws` route, fixed `location.host` usage | Fixes #380, #381 (remote node deployment) |

**Key Advancements:**
- **Onboarding reliability**: 3 PRs directly address first-time setup failures (STT 401s, auth middleware, file paths)
- **Distributed deployment**: Node WebSocket connectivity unblocked for reverse proxy/tunnel scenarios
- **WhatsApp stability**: Long-standing sled deserialization issue resolved with proper lifecycle management

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments/Reactions | Analysis |
|:---|:---|:---|
| [#261](https://github.com/moltis-org/moltis/issues/261) GitHub Copilot provider errors | 1 comment, 👍×2 | **Enterprise authentication pain** — 2 upvotes suggest corporate users blocked; PR #358 offers fix but remains open |
| [#319](https://github.com/moltis-org/moltis/issues/319) LLM doesn't see tool call outputs | 2 comments, 👍×1 | **Core agent loop bug** — directly addressed by open PR #389; affects reasoning reliability |
| [#385](https://github.com/moltis-org/moltis/issues/385) Webapp Won't Connect | 2 comments | **Fresh connectivity issue** — unclear if related to #380/#381 fixes; needs triage |

**Underlying Needs:**
- **Enterprise-ready auth**: Copilot enterprise tokens (#261, #358) indicate B2B user segment growth
- **Observable agent reasoning**: Tool output visibility (#319) is fundamental to trust in agent systems

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|:---|:---|:---|:---|
| 🔴 **High** | [#319](https://github.com/moltis-org/moltis/issues/319) LLM misses tool outputs — causes hallucinations, repeated calls | Open | **PR #389** under review |
| 🟡 **Medium** | [#385](https://github.com/moltis-org/moltis/issues/385) Webapp connection failure | Open | Unknown — needs reproduction |
| 🟡 **Medium** | [#261](https://github.com/moltis-org/moltis/issues/261) Copilot provider errors (HTTP 421) | Open | **PR #358** pending |
| 🟡 **Medium** | [#381](https://github.com/moltis-org/moltis/issues/381) Node WebSocket auth blocked | **Fixed today** | PR #382 merged |
| 🟢 **Low** | [#375](https://github.com/moltis-org/moltis/issues/375) Google models missing `thought_signature` | Open | None |

**Regressions Prevented:** Today's merges fixed 4 crash/onboarding failures before they could affect more users.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Release |
|:---|:---|:---|
| **Lark/Feishu support** | [#383](https://github.com/moltis-org/moltis/issues/383) | Medium — enterprise messaging, fits existing channel pattern |
| **zh-TW Traditional Chinese** | PR [#339](https://github.com/moltis-org/moltis/pull/339) | **High** — complete i18n PR ready, just needs merge |
| **GitHub Copilot enterprise** | PR [#358](https://github.com/moltis-org/moltis/pull/358) | High — fixes live user-blocking bug |

**Prediction:** Next release (likely 0.x.0) will include i18n (zh-TW), Copilot enterprise support, and the tool output fix (#389).

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Onboarding friction** | #378, #376, #380, #381, #386, #384 | Critical — multiple auth/path/connectivity failures in first 10 minutes |
| **Distributed deployment complexity** | #380, #381 — reverse proxy/tunnel setups fail | High — blocks self-hosting users |
| **LLM reasoning opacity** | #319 — "LLM consistently doesn't see its tool call outputs" | High — undermines core value proposition |

### Positive Signals
- Rapid maintainer response times (same-day fixes for #376, #378, #380, #381)
- Active community contributions (@SimoMay, @Devansh-bit, @gonzfe05 delivering production fixes)

### Use Case Evolution
Users are pushing Moltis beyond single-machine deployment into **multi-node infrastructure** and **enterprise SSO environments** — architecture stress-testing the original design assumptions.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| PR [#339](https://github.com/moltis-org/moltis/pull/339) zh-TW i18n | 6 days | Stale — complete but unmerged | Maintainer review/merge |
| PR [#285](https://github.com/moltis-org/moltis/pull/285) WhatsApp fix | 9 days | **Superseded** — #387 merged instead | Close as duplicate |
| PR [#358](https://github.com/moltis-org/moltis/pull/358) Copilot enterprise | 3 days | Active user pain (👍×2 on #261) | Priority review |
| Issue [#261](https://github.com/moltis-org/moltis/issues/261) Copilot errors | 11 days | Longest-open active bug | Merge #358 or provide alternative |
| PR [#389](https://github.com/moltis-org/moltis/pull/389) Tool output fix | 1 day | Critical core bug | Expedited review |

**Maintainer Attention Recommended:** PR #339 (ready to ship), PR #358 (enterprise users waiting), PR #389 (core reliability).

---

*Digest generated from 25 GitHub items (2026-03-10 to 2026-03-11). Project velocity: high. Health indicator: improving (rapid bug closure, responsive maintainers).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-11

## 1. Today's Overview

CoPaw demonstrates **high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, indicating an active, rapidly evolving codebase. The project is experiencing **significant stability challenges** with v0.0.6, as evidenced by multiple critical bugs around desktop startup failures, memory compaction errors, and channel-specific regressions. Community engagement is strong with diverse contributions spanning Linux AppImage support, new provider integrations (OpenRouter, LM Studio), and channel enhancements (Matrix, DingTalk AI Cards). The maintainer team is responsive, closing 28 PRs and 15 issues, though the high volume of new bug reports suggests v0.0.6 may need a patch release. Model configuration and deployment documentation remain friction points for new users.

---

## 2. Releases

**No new releases** — v0.0.6 (released prior to this period) remains current. Given the volume of critical bugs reported, a v0.0.6.post2 or v0.0.7 patch release may be warranted.

---

## 3. Project Progress

### Merged/Closed PRs (28 total, key highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#969](https://github.com/agentscope-ai/CoPaw/pull/969) | **Matrix channel integration** — New `MatrixChannel` using matrix-nio library | Expands channel ecosystem to decentralized/federated messaging |
| [#1084](https://github.com/agentscope-ai/CoPaw/pull/1084) | **Linux AppImage build support** — Portable desktop distribution for Linux | Critical for Linux desktop adoption; first-time contributor |
| [#1089](https://github.com/agentscope-ai/CoPaw/pull/1089) | **LLM routing configuration** — Web UI + CLI for `agents.llm_routing` | Enables task-based model switching (cost/performance optimization) |
| [#1150](https://github.com/agentscope-ai/CoPaw/pull/1150) | **Model retry mechanism** — `RetryChatModel` wrapper with automatic retries | Improves reliability against transient API failures |
| [#1158](https://github.com/agentscope-ai/CoPaw/pull/1158) | **Feishu emoji completion indicator** — Visual feedback when model finishes | Addresses [#978](https://github.com/agentscope-ai/CoPaw/issues/978) UX gap |
| [#1159](https://github.com/agentscope-ai/CoPaw/pull/1159) | **Feishu rich text media parsing** — Correct handling of uploaded media files | Fixes file upload workflows in enterprise messaging |
| [#1168](https://github.com/agentscope-ai/CoPaw/pull/1168) | **Magic commands session state fix** — Prevents silent state corruption | Stability improvement for interactive sessions |
| [#1001](https://github.com/agentscope-ai/CoPaw/pull/1001) | **Discord message splitting** — Handles >2000 character responses | Fixes API rejection for long outputs |
| [#1050](https://github.com/agentscope-ai/CoPaw/pull/1050) | **Docker secrets path fix** — Adds `working.secret` to Docker volume | Fixes [#990](https://github.com/agentscope-ai/CoPaw/issues/990) credential persistence |

**Infrastructure**: CI for tests added ([#1152](https://github.com/agentscope-ai/CoPaw/pull/1152)), Ollama error handling improved ([#256](https://github.com/agentscope-ai/CoPaw/pull/256)), CLI provider alias resolution fixed ([#260](https://github.com/agentscope-ai/CoPaw/pull/260)).

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | Topic | Underlying Need |
|:---|:---:|:---|:---|
| [#282](https://github.com/agentscope-ai/CoPaw/issues/282) | 7 | `pptxgenjs` tool crashes with `RemoteProtocolError` | **Tool reliability** — HTTP streaming resilience for external integrations |
| [#1125](https://github.com/agentscope-ai/CoPaw/issues/1125) | 6 | Aliyun Coding Plan `AGENT_UNKNOWN_ERROR` | **Enterprise model onboarding** — Better error diagnostics for cloud provider configs |
| [#275](https://github.com/agentscope-ai/CoPaw/issues/275) | 6 | QQ channel IP whitelist documentation unclear | **Documentation clarity** — Self-hosting network configuration guidance |
| [#1145](https://github.com/agentscope-ai/CoPaw/issues/1145) | 5 | Missing support for `dashscope-intl` / `coding-intl` subdomains | **Internationalization** — Global enterprise deployment readiness |
| [#1094](https://github.com/agentscope-ai/CoPaw/issues/1094) | 5 | Ollama connection fails (Docker ↔ physical host networking) | **Container networking documentation** — Common deployment pattern gaps |

### Active PR Discussions

| PR | Focus | Strategic Signal |
|:---|:---|:---|
| [#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) | OpenRouter provider with model filtering | **Aggregator provider support** — Community demand for cost-optimized model routing |
| [#1134](https://github.com/agentscope-ai/CoPaw/pull/1134) | LM Studio local model provider | **Local-first AI** — Privacy-conscious and offline-capable deployments |
| [#1118](https://github.com/agentscope-ai/CoPaw/pull/1118) | DingTalk AI Card replies | **Enterprise UX** — Rich, interactive messaging formats for business users |

---

## 5. Bugs & Stability

### Critical (Data Loss / Complete Failure)

| Issue | Severity | Description | Fix Status |
|:---|:---:|:---|:---|
| [#1144](https://github.com/agentscope-ai/CoPaw/issues/1144) | 🔴 Critical | **v0.0.6 Desktop fails to open on Windows 11** — no UI appears | Closed (resolution unclear; may need verification) |
| [#1139](https://github.com/agentscope-ai/CoPaw/issues/1139) | 🔴 Critical | **Memory compaction crash**: `too many values to unpack (expected 3)` in `pre_reasoning` hook | **OPEN — needs immediate fix** |
| [#1136](https://github.com/agentscope-ai/CoPaw/issues/1136) | 🔴 Critical | **`execute_shell_command` hangs indefinitely on Windows**, freezing entire session | **OPEN — reproducible, needs fix** |

### High (Feature Broken / Workaround Required)

| Issue | Severity | Description | Fix Status |
|:---|:---:|:---|:---|
| [#1100](https://github.com/agentscope-ai/CoPaw/issues/1100) | 🟠 High | **Feishu duplicate messages** in v0.0.6 | **OPEN — regression** |
| [#1162](https://github.com/agentscope-ai/CoPaw/issues/1162) | 🟠 High | **Feishu images not displaying** | **OPEN — media handling regression** |
| [#1164](https://github.com/agentscope-ai/CoPaw/issues/1164) | 🟠 High | **Desktop uses random port**, breaking DingTalk Stream callbacks | **OPEN — configuration/architecture issue** |
| [#1176](https://github.com/agentscope-ai/CoPaw/issues/1176) | 🟠 High | **Qwen3.5-plus thinking process regex parsing fails** | **OPEN — frontend formatting bug** |
| [#1175](https://github.com/agentscope-ai/CoPaw/issues/1175) | 🟠 High | **MiniMax model configuration broken in Desktop** (works via config file, but functions fail) | **OPEN — provider integration issue** |

### Medium (Workarounds Exist)

| Issue | Severity | Description |
|:---|:---:|:---|
| [#1029](https://github.com/agentscope-ai/CoPaw/issues/1029) | 🟡 Medium | Kimi-k2.5 custom provider fails — base_url `/v1` handling inconsistent |
| [#1146](https://github.com/agentscope-ai/CoPaw/issues/1146) | 🟡 Medium | Workspace panel empty in Docker deployment (files invisible but functional) |

**Mitigation PRs in flight**: 
- [#1127](https://github.com/agentscope-ai/CoPaw/pull/1127): Exponential backoff retry for transient network errors
- [#1182](https://github.com/agentscope-ai/CoPaw/pull/1182): Fuzzy JSON repair for malformed tool-call inputs

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **Multi-model adaptive routing** | [#52](https://github.com/agentscope-ai/CoPaw/issues/52) (4 comments), [#1089](https://github.com/agentscope-ai/CoPaw/pull/1089) merged | **High** | Core infrastructure merged; UI/CLI exposed |
| **OpenRouter native provider** | [#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) active | **High** | Second iteration after [#1109](https://github.com/agentscope-ai/CoPaw/pull/1109); model filtering added |
| **LM Studio local model support** | [#1134](https://github.com/agentscope-ai/CoPaw/pull/1134) open | **Medium-High** | Straightforward OpenAI-compatible local provider |
| **DingTalk AI Cards** | [#1118](https://github.com/agentscope-ai/CoPaw/pull/1118) open | **Medium** | Enterprise feature; PR in review |
| **Linux AppImage distribution** | [#1084](https://github.com/agentscope-ai/CoPaw/pull/1084) merged | **Shipped** | Build infrastructure complete |
| **Weibo/Lobster Assistant channel** | [#1161](https://github.com/agentscope-ai/CoPaw/issues/1161) closed | **Low** | Closed without implementation; niche China social platform |
| **Model completion system feedback** | [#978](https://github.com/agentscope-ai/CoPaw/issues/978) closed via [#1158](https://github.com/agentscope-ai/CoPaw/pull/1158) | **Shipped** | Feishu emoji indicator implemented |

**Emerging pattern**: Strong push toward **enterprise readiness** (DingTalk/Feishu enhancements, international subdomain support, retry resilience) and **deployment flexibility** (Docker fixes, Linux desktop, local models).

---

## 7. User Feedback Summary

### Pain Points (Frustration Drivers)

| Category | Specific Issues | Severity |
|:---|:---|:---:|
| **Desktop stability** | v0.0.6 startup failures, random ports, unresponsive UI | 🔴 Critical |
| **Model configuration** | Inconsistent base_url handling, provider-specific quirks, poor error messages | 🟠 High |
| **Docker deployment** | Networking (Ollama), persistence, workspace visibility | 🟠 High |
| **Windows-specific issues** | Shell command hangs, startup problems | 🟠 High |
| **Channel reliability** | Feishu regressions (duplicates, images), message formatting | 🟡 Medium |

### Positive Signals

- **Responsive maintainers**: Fast PR turnaround, active issue triage
- **Extensibility appreciated**: Users actively building custom skills, requesting new channels
- **Enterprise adoption**: DingTalk, Feishu, Aliyun integrations indicate B2B traction

### Use Case Patterns

1. **Multi-modal enterprise assistants** (Feishu/DingTalk + document generation)
2. **Local/edge deployment** (Ollama, LM Studio, llama.cpp)
3. **Multi-tenant model routing** (cost optimization across providers)

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>7 days old, high impact)

| Issue | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#52](https://github.com/agentscope-ai/CoPaw/issues/52) Multi-model adaptive routing | 11 days | **Core feature request** | Close loop with [#1089](https://github.com/agentscope-ai/CoPaw/pull/1089) merge — document, solicit feedback |
| [#282](https://github.com/agentscope-ai/CoPaw/issues/282) pptxgenjs RemoteProtocolError | 9 days | **Tool ecosystem reliability** | Assign owner; evaluate [#1127](https://github.com/agentscope-ai/CoPaw/pull/1127) retry logic applicability |

### PRs Stalled/Awaiting Review

| PR | Status | Blocker |
|:---|:---|:---|
| [#1084](https://github.com/agentscope-ai/CoPaw/pull/1084) Linux AppImage | Merged but verify | Needs testing confirmation from Linux users |
| [#1134](https://github.com/agentscope-ai/CoPaw/pull/1134) LM Studio provider | Open | Review bandwidth; straightforward merge |
| [#1118](https://github.com/agentscope-ai/CoPaw/pull/1118) DingTalk AI Cards | Open | Enterprise feature review, documentation completeness |

### Documentation Debt

| Issue | Gap |
|:---|:---|
| [#275](https://github.com/agentscope-ai/CoPaw/issues/275) | QQ IP whitelist configuration |
| [#1156](https://github.com/agentscope-ai/CoPaw/issues/1156) | Docker deployment persistence |
| [#1094](https://github.com/agentscope-ai/CoPaw/issues/1094) | Container-to-host networking for Ollama |

---

## Health Assessment

| Metric | Status | Trend |
|:---|:---:|:---:|
| Code velocity | 🟢 Strong | ↑ 50 PRs/day |
| Issue resolution | 🟢 Responsive | 30% close rate |
| Stability | 🔴 Concerning | ↓ v0.0.6 regressions |
| Community growth | 🟢 Healthy | Diverse first-time contributors |
| Enterprise readiness | 🟡 Improving | ↑ Channel/provider expansion |

**Recommendation**: Prioritize stability patch release addressing [#1139](https://github.com/agentscope-ai/CoPaw/issues/1139), [#1136](https://github.com/agentscope-ai/CoPaw/issues/1136), [#1100](https://github.com/agentscope-ai/CoPaw/issues/1100), [#1162](https://github.com/agentscope-ai/CoPaw/issues/1162) before feature expansion.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-11

## 1. Today's Overview

ZeptoClaw shows **high-velocity development** with 18 PRs and 11 issues updated in 24 hours, including 3 patch releases (v0.7.2–v0.7.4). The project is in active feature delivery mode with strong maintainer throughput—8 of 11 issues closed and 5 of 18 PRs merged. However, **configuration system debt is emerging**: two critical bugs (#310, #312) around config validation and CLI logging were opened and remain unmerged, suggesting rapid feature addition is outpacing config system robustness. The release cadence indicates mature CI/CD, though 13 open PRs (72% of daily activity) signals a potential review bottleneck.

---

## 2. Releases

### v0.7.4 (Latest)
- **Native WhatsApp Web channel** via `wa-rs` crate ([PR #294](https://github.com/qhkm/zeptoclaw/pull/294))
- Replaces non-functional `whatsmeow-bridge` stub that had no released binary
- Feature-gated behind `--features whatsapp-web`

### v0.7.3
- **Auto-import Claude CLI credentials** as Anthropic API fallback ([PR #290](https://github.com/qhkm/zeptoclaw/pull/290))
- Reads OAuth tokens from macOS Keychain (`Claude Code-credentials`, `Claude Cowork-credentials`, `Claude-credentials`) or `~/.claude.json`
- Prints ToS warning on each use

### v0.7.2
- **New tools**: `grep`, `find`, unified diff edit tools ([PR #283](https://github.com/qhkm/zeptoclaw/pull/283))
- **Bugfix**: HTTP 429 rate-limit treated as valid during API key validation in onboarding ([PR #293](https://github.com/qhkm/zeptoclaw/pull/293))

**Migration notes**: No breaking changes. WhatsApp users should migrate from `whatsmeow-bridge` to native `wa-rs` channel.

---

## 3. Project Progress

### Merged/Closed PRs Today (5)

| PR | Description | Impact |
|:---|:---|:---|
| [#294](https://github.com/qhkm/zeptoclaw/pull/294) | Native WhatsApp Web via wa-rs | **Major** — fixes broken WhatsApp integration |
| [#290](https://github.com/qhkm/zeptoclaw/pull/290) | Claude CLI credential auto-import | **Major** — zero-config onboarding for Claude users |
| [#293](https://github.com/qhkm/zeptoclaw/pull/293) | Fix 429 handling in onboarding | **Medium** — reduces new-user friction |
| [#306](https://github.com/qhkm/zeptoclaw/pull/306) | `zeptoclaw config reset` command | **Medium** — config recovery UX |
| [#311](https://github.com/qhkm/zeptoclaw/pull/311) | Model-provider compatibility validation | **Medium** — fails fast on misconfig |

**Feature advancement**: Core messaging (WhatsApp), authentication (Claude import), and developer experience (config reset, validation) all advanced. The project is prioritizing **onboarding smoothness** and **multi-channel reliability**.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#288](https://github.com/qhkm/zeptoclaw/issues/288) — Native WhatsApp Web support | 2 comments, closed | **High demand for working WhatsApp** — reporter identified the `whatsmeow-bridge` as unreleased/dead code; rapid maintainer response with native replacement |
| [#308](https://github.com/qhkm/zeptoclaw/issues/308) / [#307](https://github.com/qhkm/zeptoclaw/issues/307) — Uninstall command | 1 comment, 1 open duplicate | **User lifecycle management** — two issues filed same day for same feature suggests organic demand; [#315](https://github.com/qhkm/zeptoclaw/pull/315) open to address |
| [#287](https://github.com/qhkm/zeptoclaw/pull/287) — Dev tools for consistent pre-PR state | External contributor (@taqtiqa-mark) | **Contributor experience gap** — PR aims to standardize `cargo test/clippy/fmt` across environments; unmerged since Mar 9 suggests maintainer bandwidth constraints |

**Underlying needs**: 
- **Reliable messaging channels** (WhatsApp specifically)
- **Clean install/uninstall lifecycle** (currently missing)
- **Standardized development environment** (contributor onboarding friction)

---

## 5. Bugs & Stability

| Issue | Severity | Status | Fix PR |
|:---|:---|:---|:---|
| [#310](https://github.com/qhkm/zeptoclaw/issues/310) — Config validator rejects valid fields (`tunnel`, `timezone`, `tool_timeout_secs`) | **P1-Critical** | Open | [#314](https://github.com/qhkm/zeptoclaw/pull/314) open |
| [#312](https://github.com/qhkm/zeptoclaw/issues/312) — CLI agent mode shows too many logs | **P2-High** | Open | [#313](https://github.com/qhkm/zeptoclaw/pull/313) open |
| [#291](https://github.com/qhkm/zeptoclaw/issues/291) — Missing regression coverage for rate-limited API validation | **P2-High** | Closed | Fixed in [#293](https://github.com/qhkm/zeptoclaw/pull/293) |

**Stability assessment**: Two critical/high bugs remain unmerged despite same-day PRs. Both relate to **configuration system consistency**—validator drift from runtime and logging level defaults. These suggest the config system needs architectural attention to prevent validation/runtime divergence.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in v0.8.0 |
|:---|:---|:---|
| `zeptoclaw uninstall` command | [#307](https://github.com/qhkm/zeptoclaw/issues/307), [#308](https://github.com/qhkm/zeptoclaw/issues/308), [#315](https://github.com/qhkm/zeptoclaw/pull/315) | **High** — PR open, duplicate issues show demand |
| Config reset with backup | [#305](https://github.com/qhkm/zeptoclaw/issues/305) | **Shipped** in v0.7.x via [#306](https://github.com/qhkm/zeptoclaw/pull/306) |
| Model-provider compatibility validation | [#309](https://github.com/qhkm/zeptoclaw/issues/309) | **Shipped** in v0.7.x via [#311](https://github.com/qhkm/zeptoclaw/pull/311) |
| Threads publishing skill | [#295](https://github.com/qhkm/zeptoclaw/issues/295) | **Medium** — skill template defined, may need runtime support |
| Dev environment standardization | [#287](https://github.com/qhkm/zeptoclaw/pull/287) | **Medium** — external contributor PR, maintainer review pending |

**Roadmap signal**: Strong focus on **CLI lifecycle commands** (install → configure → reset → uninstall) suggests positioning for package manager distribution (Homebrew, etc.).

---

## 7. User Feedback Summary

### Pain Points
| Issue | Evidence |
|:---|:---|
| Broken WhatsApp integration | [#288](https://github.com/qhkm/zeptoclaw/issues/288) — "Binary download not yet implemented" |
| Confusing onboarding failures | [#292](https://github.com/qhkm/zeptoclaw/issues/292) — rate limits show as "failed" |
| Config validation vs. runtime mismatch | [#310](https://github.com/qhkm/zeptoclaw/issues/310) — valid configs rejected |
| No clean uninstall path | [#307](https://github.com/qhkm/zeptoclaw/issues/307), [#308](https://github.com/qhkm/zeptoclaw/issues/308) |

### Satisfaction Indicators
- **Rapid issue resolution**: 8/11 issues closed same day
- **Responsive maintainer**: @qhkm authored 16 of 18 PRs, directly addressing reported issues
- **Credential convenience**: Claude CLI import reduces friction for existing Anthropic users

### Use Cases Emerging
- **Multi-channel agents**: WhatsApp Web + CLI agent mode
- **Zero-config setup**: Claude CLI credential reuse
- **Scheduled/batch operations**: `agent` and `batch` commands with clean output

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#287](https://github.com/qhkm/zeptoclaw/pull/287) — Dev tools for consistent pre-PR state | 2 days | **Contributor attrition** | Maintainer review; external contributor awaiting response |
| [#301](https://github.com/qhkm/zeptoclaw/pull/301), [#298](https://github.com/qhkm/zeptoclaw/pull/298), [#304](https://github.com/qhkm/zeptoclaw/pull/304), [#296](https://github.com/qhkm/zeptoclaw/pull/296), [#297](https://github.com/qhkm/zeptoclaw/pull/297) — Dependabot Rust deps | 1 day | **Security/technical debt** | Bulk review/merge; includes `rustls`, `jsonwebtoken` |
| [#303](https://github.com/qhkm/zeptoclaw/pull/303), [#302](https://github.com/qhkm/zeptoclaw/pull/302), [#300](https://github.com/qhkm/zeptoclaw/pull/300) — Dependabot GitHub Actions | 1 day | **CI stability** | Low risk, can batch |

**Critical attention**: [#287](https://github.com/qhkm/zeptoclaw/pull/287) risks discouraging external contribution if unaddressed. The 8 open dependency PRs suggest either automated merging policy gap or intentional hold for release timing.

---

*Digest generated from 11 issues, 18 PRs, and 3 releases on 2026-03-11.*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-03-11

**Repository:** [gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

## 1. Today's Overview

EasyClaw shows **moderate maintenance activity** with three rapid-fire patch releases (v1.6.3–v1.6.5) within a short window, suggesting iterative hotfixing rather than planned feature releases. The project closed one image-handling bug while a new macOS UI polish PR awaits review. Overall velocity is steady but narrow—focused on installation friction and visual polish rather than core AI agent capabilities. Community engagement remains light with minimal comment activity. The release notes truncation indicates possible documentation or signing issues persist across versions.

---

## 2. Releases

| Version | Date | Notes |
|---------|------|-------|
| [v1.6.5](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.5) | 2026-03-10 | macOS Gatekeeper workaround documentation (unchanged from v1.6.4) |
| [v1.6.4](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.4) | ~2026-03-10 | Identical macOS installation guidance |
| [v1.6.3](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.3) | ~2026-03-10 | Initial unsigned app bypass instructions |

**Analysis:** Three consecutive patches with **identical release notes** strongly suggests:
- Code signing certificate issues on macOS (unsigned app distribution)
- Possible CI/CD pipeline retries or version bump automation
- No functional changes detectable from release metadata

**Breaking Changes:** None apparent  
**Migration:** Not applicable (patch-level increments)

---

## 3. Project Progress

**No merged PRs today.** Active development:

| PR | Status | Impact |
|----|--------|--------|
| [#15: fix: app icon in macOS dock and system tray](https://github.com/gaoyangz77/easyclaw/pull/15) | 🟡 Open | Visual polish for macOS native experience |

**Assessment:** Single contributor PR addressing platform-specific UI consistency. No core functionality advancement.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#13: 在对话chat选择图片，但是模型并没有接受到图片](https://github.com/gaoyangz77/easyclaw/issues/13) | 3 comments, **CLOSED** | **Vision/multimodal input failure**—critical for AI assistant utility |

**Underlying Need:** Users expect EasyClaw to handle image-to-model pipelines (comparison made to OpenAI Codex's working implementation). The fix suggests this was a **regression or configuration gap** rather than missing feature. Closed status indicates responsive maintainer action.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|----------|-------|--------|---------------|
| 🔴 **High** | Image upload not reaching model ([#13](https://github.com/gaoyangz77/easyclaw/issues/13)) | ✅ **Fixed/Closed** | Yes—resolved between 2026-03-09 and 2026-03-10 |
| 🟡 **Medium** | macOS "damaged app" Gatekeeper warnings | ⚠️ **Mitigated** | Workaround documented; root cause (unsigned binary) persists |

**Stability Signal:** Quick turnaround on vision input bug is positive. However, **unsigned macOS releases** indicate ongoing distribution risk and potential user trust erosion.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests opened today.** Inferred priorities from activity:

| Predicted Next Features | Confidence | Rationale |
|------------------------|------------|-----------|
| Proper macOS code signing | High | 3 releases addressing same issue |
| Enhanced multimodal (vision) reliability | Medium | #13 fix suggests active investment |
| Cross-platform icon/asset consistency | Medium | PR #15 in flight |

---

## 7. User Feedback Summary

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Vision/multimodal unreliability** | #13 report + Codex comparison | High—core feature expectation |
| **macOS installation friction** | 3 release notes dedicated to workaround | Medium—onboarding barrier |
| **App polish gaps** | PR #15 for dock/tray icons | Low—aesthetic/UX |

**Use Case Signal:** User comparing to Codex indicates EasyClaw positioned as **local/accessible alternative to cloud AI agents**, with expectation parity on multimodal capabilities.

---

## 8. Backlog Watch

| Risk Indicator | Details |
|----------------|---------|
| **Stale PR risk** | [#15](https://github.com/gaoyangz77/easyclaw/pull/15) — single open PR, no maintainer response yet |
| **Documentation debt** | Release notes truncated/incomplete (all three versions) |
| **No open issues** | Zero active issues may indicate low adoption or over-aggressive closure |

**Recommendation:** Monitor whether PR #15 receives review within 48h; silence may indicate maintainer bandwidth constraints.

---

## Project Health Score: 🟡 **Steady**

| Dimension | Rating |
|-----------|--------|
| Responsiveness | ✅ Good (24h bug fix) |
| Release Quality | ⚠️ Concerning (unsigned binaries, rapid patches) |
| Community Engagement | ⚠️ Low (minimal comments/reactions) |
| Feature Velocity | ⚠️ Stagnant (polish over capability) |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*