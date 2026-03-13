# AI CLI Tools Community Digest 2026-03-09

> Generated: 2026-03-09 00:07 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Comparison Report — 2026-03-09

## 1. Ecosystem Overview

The AI CLI tools landscape is maturing rapidly, with seven major tools now competing for developer mindshare. A clear divergence has emerged between **cloud-native, sandbox-heavy approaches** (Claude Code, Codex) and **flexible, multi-provider clients** (OpenCode, Gemini CLI, Qwen Code). All tools are grappling with **Windows/WSL reliability gaps**, **cost transparency demands**, and **production-readiness**—particularly around permission controls and agent orchestration. The community is increasingly vocal about **ecosystem lock-in risks**, driving demand for open protocols and portable configurations.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Notable Activity |
|------|-----------:|----------:|----------------|----------------|
| **Claude Code** | 10+ tracked | 4 open, 1 closed | No release | Cowork VM stability crisis; usage transparency plugin |
| **OpenAI Codex** | 10+ tracked | 10+ active | **v0.112.0 stable** | Plugin mentions (`@plugin`); 324-comment rate-limit thread |
| **Gemini CLI** | 10 tracked | 10+ active | No release | Voice mode scaffolding; parallelization work |
| **GitHub Copilot CLI** | 8 new + 3 spam | 1 (spam) | No release | CJK IME fix shipped; OpenTelemetry request |
| **Kimi Code CLI** | 4 new | 0 | No release | VSCode context awareness focus |
| **OpenCode** | 10 tracked | 15+ active | **v1.2.22** | Symlink fix crisis; @ariane-emory TUI polish surge |
| **Qwen Code** | 8+ tracked | 17 merged | **v0.12.0-preview.1** | Massive @echoVic batch; spacebar regression |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Community Needs |
|-------------|-------|-------------------------|
| **Ecosystem Integration / Cloud Sync** | Claude Code (#2511), Codex (#2153 ChatGPT), Gemini CLI | Claude.ai Projects sync most demanded (231 👍); unified OpenAI ecosystem; remote agents |
| **"Deny by Default" / Granular Permissions** | Gemini CLI (#19776), Claude Code, Codex (#13092, #13702) | Production deployment safety; policy scoping suggestions (#21650); dynamic permission elevation |
| **Windows/WSL Parity** | **All seven tools** | Claude Code: VM hangs, memory bloat; Codex: "Thinking" hangs, PTY bugs; Gemini CLI: arrow-key navigation; OpenCode: symlink/WSL; Qwen Code: CRLF parsing |
| **Cost Transparency & Controls** | Codex (#13568, #13733), Claude Code (#32142), Gemini CLI (#21643) | Rate-limit usage clarity; polling cost explosion; quota-aware routing |
| **Subagent/Worker Orchestration** | Claude Code (Cowork), Gemini CLI (#20302-20304), Codex (#13657, #14012), OpenCode (#13841) | Reliable VM boot; parent-child communication; task tree visualization |
| **IDE Native Integration** | Kimi Code CLI (#1270), Codex, Copilot CLI (#1868), Qwen Code (#2195) | Open files in `@` suggestions; `/ide` protocol documentation; dedicated sidebar panels |
| **Project-Level Configuration** | Kimi Code CLI (#1365), Claude Code, OpenCode | Portable `.kimi/config.yaml` or similar; reproducible team environments |

---

## 4. Differentiation Analysis

| Tool | Core Focus | Target Users | Technical Approach |
|------|-----------|--------------|------------------|
| **Claude Code** | **Sandboxed agent execution** (Cowork VM) | Security-conscious teams, enterprise | Seatbelt/bubblewrap sandboxing; tight MCP integration; proprietary cloud bridge |
| **OpenAI Codex** | **Token-efficient, plugin-native coding** | OpenAI ecosystem subscribers, automation engineers | In-process app-server architecture; `@plugin` mentions; aggressive server-side optimization |
| **Gemini CLI** | **Multimodal voice + performance** | Google Cloud users, accessibility-focused | Parallelized startup; speech-first UX; Gemini-native model routing |
| **GitHub Copilot CLI** | **IDE-integrated pair programming** | VSCode-centric developers, GitHub power users | `/ide` protocol; Copilot Chat continuity; GitHub-native workflows |
| **Kimi Code CLI** | **Lightweight, editor-aware** | VSCode users seeking alternatives | Minimal config; open-file context priority; Chinese-market optimized |
| **OpenCode** | **Multi-provider, highly customizable TUI** | Power users, Claude Code migrants | Claude Code compatibility layer; extensive theming/keybinding; KV-persisted settings |
| **Qwen Code** | **Open-weight model optimization** | Alibaba Cloud users, local/edge deployment | DashScope integration; `.agents/skills` discovery; thinking message persistence |

**Key Technical Divides:**
- **Sandbox philosophy**: Claude Code (mandatory VM) vs. others (optional/graduated)
- **Architecture**: Codex (unified in-process server) vs. Claude Code (separate Cowork VM) vs. OpenCode (flexible provider abstraction)
- **Voice/Multimodal**: Gemini CLI leading; others reactive

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|-----------|
| **🔥 Highest Momentum** | **OpenCode**, **Qwen Code** | OpenCode: 15+ PRs, rapid v1.2.22 iteration, dedicated contributor (@ariane-emory); Qwen Code: 17 merged PRs in 24h, @echoVic standardization surge |
| **⚡ Sustained Activity** | **Claude Code**, **OpenAI Codex**, **Gemini CLI** | Claude Code: critical bug volume + transparency plugin; Codex: 324-comment billing thread, architectural migration; Gemini CLI: structured epics, GSoC voice roadmap |
| **🐢 Maintenance Mode** | **GitHub Copilot CLI**, **Kimi Code CLI** | Copilot CLI: 1 spam PR, issue triage focus; Kimi Code CLI: zero PR activity, refinement-only issues |

**Maturity Signals:**
- **Claude Code**: Most enterprise-structured but Windows reliability crisis
- **Codex**: Billing transparency crisis testing community trust
- **OpenCode**: Most contributor-friendly, rapid merge velocity
- **Gemini CLI**: Most roadmap-transparent (public epics, GSoC ideas)

---

## 6. Trend Signals

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Production "Safety-First" Shift** | "Deny by default" (#19776) highest Gemini engagement; policy scoring (#21650); permission inheritance fixes (#13702) | CLI tools transitioning from experimentation to CI/CD deployment; liability concerns rising |
| **Cost Visibility as Competitive Differentiator** | Codex's 324-comment rate-limit thread; Claude Code's usage transparency plugin (#32142); Gemini's quota-aware routing (#21643) | Developers treating token economics as core UX; vendors must surface billing signals or lose trust |
| **Windows as Second-Class Platform** | 6+ active Windows issues in Claude Code alone; Codex "Windows IDE hangs" cluster; Gemini arrow-key bugs | Cross-platform parity remains unsolved; WSL complexity exceeding vendor investment; opportunity for Windows-native alternatives |
| **Subagent/Agent-Team Orchestration** | Cowork VM stability crisis; Gemini Remote Agents epics; Codex subagent inbox delivery (#13657) | Single-agent limits recognized; multi-agent workflows becoming baseline expectation |
| **IDE Context as Default Expectation** | Kimi's open-files priority (#1270); Copilot's `/ide` protocol docs request (#1868); Qwen's VSCode sidebar (#2195) | CLI tools must bridge terminal-IDE gap; pure-terminal experience becoming niche |
| **Configuration Portability** | Kimi's project-level MCP (#1365); Claude Code's Claude.ai Projects sync (#2511); OpenCode's KV-persisted settings | Team reproducibility and CI/CD integration driving demand for file-based, version-controlled configuration |

---

*Report compiled from 7 tool digests covering 50+ issues and 60+ PRs, 2026-03-08 to 2026-03-09.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-03-09*

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description |
|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment. Addresses universal document polish gaps. |
| 2 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for clarity and actionability; ensures every instruction is executable within a single conversation. |
| 3 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills for evaluating Claude Skills across five quality dimensions and security posture. |
| 4 | **System Documentation Suite** | [#95](https://github.com/anthropics/skills/pull/95) | 🟡 Open | Comprehensive evidence management documentation with architecture diagrams and flowcharts. |
| 5 | **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | 🟡 Open | 10-step workflow for identifying orphaned code, unused files, and documentation gaps. |
| 6 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | Integration with SAP's open-source tabular foundation model for enterprise predictive analytics. |
| 7 | **Shodh Memory** | [#154](https://github.com/anthropics/skills/pull/154) | 🟡 Open | Persistent memory system for AI agents maintaining context across conversations. |
| 8 | **Flutter Theme Factory** | [#368](https://github.com/anthropics/skills/pull/368) | 🟡 Open | 12 pre-built professional themes with full `ColorScheme`, Google Fonts, and light/dark support. |

---

## 2. Community Demand Trends

From high-engagement Issues, the community is prioritizing:

| Trend | Evidence | Key Request |
|:---|:---|:---|
| **Enterprise Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) (agent-governance proposal), [#532](https://github.com/anthropics/skills/issues/532) (SSO/API key friction) | Policy enforcement, threat detection, and audit trails for multi-agent systems |
| **MCP-Native Architecture** | [#16](https://github.com/anthropics/skills/issues/16), [#369](https://github.com/anthropics/skills/issues/369), [#273](https://github.com/anthropics/skills/issues/273) | Expose Skills as MCPs; support MCP Apps and task-specific SOPs |
| **Workflow Reliability** | [#363](https://github.com/anthropics/skills/pull/363) (TodoWrite bugfix), [#202](https://github.com/anthropics/skills/issues/202) | Bulletproof multi-phase workflows without state loss |
| **Third-Party Platform Integration** | [#29](https://github.com/anthropics/skills/issues/29) (AWS Bedrock), [#299](https://github.com/anthropics/skills/pull/299) (Google Workspace) | Cross-platform deployment and personal assistant capabilities |
| **Trust & Security Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) | Namespace integrity to prevent impersonation of official skills |

---

## 3. High-Potential Pending Skills

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Addresses universal pain point; zero thumbs but fresh (Mar 4) and highly specific |
| **AURELION Suite** (kernel, advisor, agent, memory) | [#444](https://github.com/anthropics/skills/pull/444) | Complete cognitive framework; structured professional knowledge management |
| **Masonry Image/Video Generation** | [#335](https://github.com/anthropics/skills/pull/335) | Media generation is high-demand; Imagen 3.0 / Veo 3.1 integration |
| **GOG Google Workspace Skills** | [#299](https://github.com/anthropics/skills/pull/299) | 6-skill personal assistant suite; fills major productivity gap |
| **Feature-Dev Workflow Fix** | [#363](https://github.com/anthropics/skills/pull/363) | Critical bugfix for existing skill; resolves Phase 6-7 skipping |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for production-grade agent infrastructure—persistent memory, governance guardrails, and MCP-native interoperability—reflecting a shift from experimental skills to enterprise-ready, multi-session AI systems.**

---

---

# Claude Code Community Digest — 2026-03-09

---

## 1. Today's Highlights

The community is heavily focused on **Cowork VM stability** and **cross-platform sandbox reliability**, with multiple critical bugs reported on Windows and WSL2. A long-standing feature request for **Claude.ai Projects integration** (#2511) continues to dominate community attention with 231 upvotes and 35 comments, while new PRs introduce **usage transparency tooling** and **iterative PR workflows** for feature development.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#2511](https://github.com/anthropics/claude-code/issues/2511) | **Connect Claude Code to Claude projects** — Feature request to integrate Claude.ai Projects Knowledge Bases | Bridges the gap between cloud and CLI workflows; would eliminate documentation duplication for teams | 🔥 **231 upvotes**, 35 comments — highest-engagement open issue |
| [#30021](https://github.com/anthropics/claude-code/issues/30021) | **"Create PR" button missing in Claude Code web UI after push** — iOS web UI regression | Breaks core Git workflow on mobile; affects developer productivity on iPad/iPhone | 46 upvotes, 27 comments — active discussion |
| [#23347](https://github.com/anthropics/claude-code/issues/23347) | **spinnerVerbs setting in ~/.claude/settings.json is ignored** — Customization regression | Small UX polish issue that signals broader settings system reliability concerns | 15 upvotes, 14 comments — has repro |
| [#24840](https://github.com/anthropics/claude-code/issues/24840) | **Extreme memory consumption on Windows (13GB RSS, 47GB commit)** with Bun Canary | Critical performance blocker; may indicate Bun runtime compatibility issues | 1 upvote, 12 comments — detailed telemetry provided |
| [#26259](https://github.com/anthropics/claude-code/issues/26259) | **Desktop Extension MCP servers not passed to Cowork VM** | Breaks expected Cowork functionality for macOS Desktop users; related to closed issue #20377 | 2 upvotes, 10 comments — persistence of "fixed" bug |
| [#31757](https://github.com/anthropics/claude-code/issues/31757) | **Sandbox UI: tab cycling not working on /sandbox screen** | Accessibility/navigation regression in sandbox configuration | 9 upvotes, 9 comments — fresh report |
| [#30457](https://github.com/anthropics/claude-code/issues/30457) | **Google Drive connector shows connected but tools not exposed in Cowork** | Enterprise integration failure; breaks expected Cowork-Google Workspace workflow | 8 upvotes, 6 comments |
| [#31708](https://github.com/anthropics/claude-code/issues/31708) | **Sandbox not activating on WSL2 despite enabled in settings** | Regression affecting Linux-on-Windows developers; blocks security sandboxing | 2 upvotes, 6 comments — has repro |
| [#32219](https://github.com/anthropics/claude-code/issues/32219) | **Cowork VM boot IPC hangs silently — VMCLIRunner blocks UI indefinitely** (Win11 25H2) | Critical Cowork failure on latest Windows; UI becomes unresponsive | 0 upvotes, 5 comments — detailed Win11 25H2 context |
| [#28783](https://github.com/anthropics/claude-code/issues/28783) | **Read tool truncation causes agents to silently lose guardrails from instruction files** | Security/reliability concern — agents may miss critical instructions without warning | 0 upvotes, 4 comments — has repro, marked regression |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#32142](https://github.com/anthropics/claude-code/pull/32142) | **Add usage transparency plugin for quota troubleshooting** | Diagnostic plugin to disambiguate rate limits, quota exhaustion, auth conflicts, and billing state failures | 🟢 Open |
| [#32250](https://github.com/anthropics/claude-code/pull/32250) | **feat(feature-dev): add iterative PR workflow to implementation phase** | Restructures Phase 5 into planning + iterative implementation with 2-5 reviewable increments and user confirmation gates | 🟢 Open |
| [#31974](https://github.com/anthropics/claude-code/pull/31974) | **feat(code-review): add pattern learning to auto-suggest CLAUDE.md rules** | Mines validated review issues across PRs to surface recurring gaps and auto-suggest CLAUDE.md rule additions | 🟢 Open |
| [#32136](https://github.com/anthropics/claude-code/pull/32136) | **Add BrewLab concept document for specialty coffee brewing app** | Product concept documentation (sample/illustrative PR for mobile app workflow) | 🟢 Open |
| [#32094](https://github.com/anthropics/claude-code/pull/32094) | **Add swarm-dev orchestration plugin** | `/swarm-dev` command with 5 specialized agents, bounded research→build→verify workflow with loop guardrails | 🔴 Closed |

---

## 5. Feature Request Trends

**Ecosystem Integration**
- **Claude.ai Projects sync** (#2511) remains the dominant request — developers want seamless cloud/CLI knowledge base sharing
- **VS Code "Next Edit Suggestions" support** (#29978) — IDE feature parity with Cursor/Copilot

**Cowork & Sandbox Hardening**
- Multiple requests for **reliable VM boot** and **MCP server passthrough** to Cowork environments
- **Cross-platform sandbox consistency** — Seatbelt (macOS) vs. bubblewrap/seccomp (Linux) UX alignment

**Agent Orchestration**
- **Per-project agent configuration** (#16836, closed) — scoped memory and behavior settings
- **Dynamic context injection** and **worker thread isolation** for subagents (#24175-24177, closed as stale)

---

## 6. Developer Pain Points

| Category | Pain Point | Frequency |
|----------|-----------|-----------|
| **Windows Reliability** | Cowork VM hangs, extreme memory usage, sandbox activation failures, LSP plugin silent failures | 🔴 **Critical** — 6+ active issues |
| **WSL2 Edge Cases** | Sandbox regression on WSL2 despite "all prerequisites met" — suggests detection logic gaps | 🟡 High |
| **Settings System** | User-level `settings.json` ignored (spinnerVerbs), custom keybindings not picked up on first run | 🟡 Moderate |
| **Mobile/Web UX** | Missing PR creation button, text input overlap in Remote Control | 🟡 Moderate |
| **MCP/Integration Reliability** | Desktop Extension MCPs not reaching Cowork VM, Google Drive connector "connected but non-functional" | 🟡 Moderate |
| **Silent Failures** | Read tool truncation losing guardrails, TypeScript LSP failing silently — **visibility gaps** | 🟡 Moderate |

**Emerging Theme:** Developers need **better diagnostics and transparency** when integrations fail silently — addressed by new usage transparency plugin (#32142).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-09

---

## 1. Today's Highlights

The **v0.112.0 stable release** brings plugin mentions (`@plugin`) and an updated model-selection TUI, while the team is actively merging architectural changes to migrate CLI surfaces to an in-process app-server. A **324-comment thread on rate-limit usage drops** dominates community discussion, signaling ongoing tension between aggressive token consumption and billing transparency.

---

## 2. Releases

| Version | Key Changes |
|--------|-------------|
| **[rust-v0.112.0](https://github.com/openai/codex/releases/tag/rust-v0.112.0)** | • `@plugin` mentions for direct plugin referencing in chat with auto-included MCP/app/skill context (#13510)<br>• Updated model-selection surface in TUI picker flow (#13617) |

*Alpha builds (0.112.0-alpha.12/13) contained no user-facing changes.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#13568](https://github.com/openai/codex/issues/13568) **Usage dropping too quickly** | 324 comments, 87 👍 — users report unexpected downgrades from 2X to 1X rate limits with credit consumption. Core trust/billing issue. | Intense, sustained demand for transparency; feedback thread referenced but details not surfaced to user |
| [#2109](https://github.com/openai/codex/issues/2109) **Event Hooks** | 58 comments, 475 👍 — long-standing request for pattern-matched event hooks to trigger scripts before/after Codex behaviors. Critical for automation workflows. | Extremely high engagement; oldest high-vote enhancement still open |
| [#6426](https://github.com/openai/codex/issues/6426) **Token-based tool output truncation** | Closed — replaced naive 256-line/10KiB truncation with token-aware limits. Fixes MCP tool response corruption. | 112 👍, resolved after months of pain |
| [#9634](https://github.com/openai/codex/issues/9634) **Refresh token reuse error** | Auth regression forcing re-login; affects Pro users on macOS | Frustration with session stability |
| [#12161](https://github.com/openai/codex/issues/12161) **Windows IDE "Thinking" hangs** | Persistent stuck states in VS Code/Cursor/Windsurf; 19 comments | Windows users report daily workflow disruption |
| [#2153](https://github.com/openai/codex/issues/2153) **ChatGPT integration** | 85 👍 — bidirectional session handoff between Codex CLI and ChatGPT web UI for research/brainstorming | Strong demand for unified OpenAI ecosystem |
| [#8648](https://github.com/openai/codex/issues/8648) **Replies to earlier messages** | Context regression where assistant responds to stale conversation history | Quality/consistency concern |
| [#13733](https://github.com/openai/codex/issues/13733) **Background polling wastes tokens** | Each `write_stdin` poll triggers full API round-trip with complete history — O(n²) cost growth | Power users alarmed at silent cost explosion |
| [#14008](https://github.com/openai/codex/issues/14008) **Model selection reverted by Statsig** | Server-side config overrides user choice in desktop app | Control/autonomy frustration |
| [#13715](https://github.com/openai/codex/issues/13715) **macOS hangs after prompts** | New in v0.111.0 — complete session freeze | Regression affecting core stability |

---

## 4. Key PR Progress

| PR | Feature/Fix | Significance |
|----|-------------|------------|
| [#14005](https://github.com/openai/codex/pull/14005) **In-process app server + exec wiring** | Core architectural migration; exec entry point now uses app-server | Foundation for unified CLI/App/IDE behavior |
| [#13092](https://github.com/openai/codex/pull/13092) **Request permissions tool** | Runtime permission elevation without static session policy | Enables dynamic security workflows |
| [#13636](https://github.com/openai/codex/pull/13636) **Migrate CLI surfaces to in-process app-server** | Eliminates duplicated handshake/init logic across TUI/exec | Reduces drift, improves maintainability |
| [#13986](https://github.com/openai/codex/pull/13986) **Native installer overhaul** | Proper dependency isolation under `CODEX_HOME/packages/`; replaces npm/bun launcher | Fixes path/env pollution issues |
| [#13678](https://github.com/openai/codex/pull/13678) **Watchdog runtime + prompts** | Lifecycle management for agent threads with model overrides | Reliability for long-running agents |
| [#13702](https://github.com/openai/codex/pull/13702) **Subagent execpolicy propagation** | Persisted approvals propagate to child agents by default | Fixes permission inheritance gap |
| [#14012](https://github.com/openai/codex/pull/14012) **Fix interleaved streaming item routing** | Prevents misrouted deltas when reasoning + assistant messages overlap | Critical correctness fix for streaming |
| [#13978](https://github.com/openai/codex/pull/13978) **Server-side compaction (flagged)** | Optional server-side context compaction via Responses API | Potential latency/cost improvement |
| [#13537](https://github.com/openai/codex/pull/13537) **`--fork <SESSION_ID>` for exec** | Non-interactive session forking for automation | Enables CI/CD and scripted workflows |
| [#13657](https://github.com/openai/codex/pull/13657) **Subagent inbox delivery** | Structured message delivery via injected response items | First-class parent/subagent communication |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Ecosystem integration** | #2153 (ChatGPT), #11415 (`codex inject`), #2109 (event hooks) | High — users want Codex as composable infrastructure |
| **Windows parity** | #12161, #13917, #13699, #13914, #13945, #13994 | Critical mass — sandbox, PTY, and path issues cluster |
| **Cost/efficiency controls** | #13733 (polling costs), #6426/#6544 (truncation), server-side compaction | Growing — power users hitting economic limits |
| **Permission/runtime governance** | #13092, #13702, #13991, #13897 | Active development — dynamic policies replacing static allowlists |
| **Model selection UX** | #13752, #14008, #13617 (release) | In flux — too many overlapping options, server overrides user |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Silent cost explosions** | #13568 (rate drops), #13733 (polling history), background token burn | Daily complaints, billing shock |
| **Stuck/zombie threads** | #12161, #12852, #13715, #13997 — "Thinking" hangs unrecoverable without kill | Across all platforms, especially Windows |
| **Auth/session fragility** | #9634 (refresh tokens), #8648 (context confusion) | Recurring, breaks flow |
| **Windows second-class status** | Sandbox path issues, PowerShell false positives (#13994), PTY bugs (#13945) | Clustered, blocking adoption |
| **Configuration override** | #14008 (Statsig overrides model choice), #13752 (bloated picker) | Control erosion frustration |
| **Tool output corruption** | #6426/#6544 (truncation), MCP response limits | Recently mitigated but scars remain |

---

*Digest compiled from github.com/openai/codex activity 2026-03-08 to 2026-03-09.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-09

---

## 1. Today's Highlights

The Gemini CLI team is heavily focused on **performance optimization and voice mode infrastructure**, with multiple PRs landing to parallelize network calls and scaffold multimodal voice capabilities. Community demand for **better approval controls** is intensifying, highlighted by a highly-discussed request for "Deny by default" mode. Meanwhile, **Remote Agents** and **subagent UX** remain active workstreams with several epics tracking toward default enablement.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| [#19776](https://github.com/google-gemini/gemini-cli/issues/19776) **"Deny by default" Approval mode** | Critical for production agent deployments; users running multiple agents lose time when non-standard commands block execution. | **14 comments** — highest engagement this period; marked `help wanted` |
| [#20716](https://github.com/google-gemini/gemini-cli/issues/20716) **Fix truncation of plans in approval dialog** | Plan mode UX broken for complex tasks; 15-line hard limit hides critical execution details. | 8 comments; `maintainer only` workstream-rollup |
| [#14484](https://github.com/google-gemini/gemini-cli/issues/14484) **Docker-compatible CLI support (`nerdctl`, `finch`)** | **CLOSED** — Expands sandbox portability for containerd/lima users; merged after 3+ months. | 5 comments; community contribution from @AkihiroSuda |
| [#21643](https://github.com/google-gemini/gemini-cli/issues/21643) **Quota-aware model routing** | Prevents gemma-based routing from exhausting single-model quotas; essential for cost-conscious users. | 3 comments; fresh request (March 8) |
| [#20594](https://github.com/google-gemini/gemini-cli/issues/20594) **`browser_agent` tool approvals broken** | Core agent functionality regression; blocks reliable web automation workflows. | 3 comments; tagged for maintainer attention |
| [#20302](https://github.com/google-gemini/gemini-cli/issues/20302) **[Epic] Remote Agents: Sprint 1** | Foundation for remote agent infrastructure — streaming, core UX. P0 priority. | 3 comments; locked to maintainers |
| [#21461](https://github.com/google-gemini/gemini-cli/issues/21461) **Shell command aliases not supported** | Breaks muscle memory for power users; `! baz hello` fails despite `.bash_profile` alias. | 2 comments; possible duplicate |
| [#20886](https://github.com/google-gemini/gemini-cli/issues/20886) **Refine subagents UX** | Expander for tool call history, updated mocks — subagents approaching GA. | 2 comments; workstream-rollup |
| [#20550](https://github.com/google-gemini/gemini-cli/issues/20550) **Ran out of JS heap** | Memory pressure in long-running sessions; GC logs show 4GB+ scavenges. | 2 comments; needs reproduction |
| [#21653](https://github.com/google-gemini/gemini-cli/issues/21653) **Hierarchical agent/skill directory detection** | Flat directory structure limits organization at scale; nested paths requested. | New (March 9); 0 comments |

---

## 4. Key PR Progress

| PR | Feature / Fix | Status |
|----|-------------|--------|
| [#20992](https://github.com/google-gemini/gemini-cli/pull/20992) **Preserve `registrationUrl` in OAuth config merges** | Fixes dynamic client registration (RFC 7591) for MCP servers; security-critical for enterprise auth. | Open; `area/security` |
| [#21647](https://github.com/google-gemini/gemini-cli/pull/21647) **Serialize object settings as JSON** | Eliminates `[object Object]` display bug; adds locale-agnostic number formatting. | Open; `area/core` |
| [#21601](https://github.com/google-gemini/gemini-cli/pull/21601) **Treat `SANDBOX=0/false` as not sandboxed** | Corrects boolean parsing bug where any non-empty value short-circuited setup. | Open |
| [#21458](https://github.com/google-gemini/gemini-cli/pull/21458) **Display objects as JSON in settings** | Community fix parallel to #21647; improves settings readability. | Open; `help wanted` |
| [#20256](https://github.com/google-gemini/gemini-cli/pull/20256) **Unify `/chat` and `/resume` UX** | **CLOSED** — Consolidates session management with grouped slash menus. | Merged |
| [#20680](https://github.com/google-gemini/gemini-cli/pull/20680) **Fix Windows arrow-key navigation in PTY shell** | Resolves `pnpm create vite` / `npm create` crashes on Windows 10. | Open; `priority/p2` |
| [#20989](https://github.com/google-gemini/gemini-cli/pull/20989) **Speech-friendly response formatter** | Voice mode foundation: converts markdown/ANSI to TTS-clean plain text. | Open; `priority/p3` |
| [#21651](https://github.com/google-gemini/gemini-cli/pull/21651) **Multimodal voice mode config schema** | GSoC 2026 Idea 11 foundation; persists voice preferences without breaking changes. | Open |
| [#21648](https://github.com/google-gemini/gemini-cli/pull/21648) **Parallelize quota/experiments fetching** | Cuts startup latency by concurrent `refreshUserQuota` + `getExperiments` calls. | Open; `maintainer only` |
| [#21650](https://github.com/google-gemini/gemini-cli/pull/21650) **LLM-suggested policy scoping** | Flash-powered policy recommendations on tool approvals; reduces over-permissioning. | Open; `area/security` |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Approval & Policy Control** | "Deny by default" mode (#19776), policy scoping suggestions (#21650), suspicious policy warnings (#21596), step-through mode (#21593) | **High** — Safety-critical for production |
| **Voice & Multimodal** | Speech formatter (#20989), waveform visualizer (#21115), voice config schema (#21651), GSoC Idea 11 | **Growing** — 2026 roadmap priority |
| **Performance & Latency** | Parallelized auth (#21648), cached I/O/network (#21518-21519), startup optimization (#21646), `await` reduction (#21528) | **Active** — Multiple maintainer PRs |
| **Verbosity & Output Control** | Milestone-driven prompting (#21450), accordion UI (#21453), auto-collapse task groups (#21454), headless mode cleanup (#21433) | **Moderate** — UX polish phase |
| **Remote Agents & Subagents** | Sprint 1-3 epics (#20302-20304), hierarchical directories (#21653), task tree visualization (#21595) | **Structured** — Workstream rollups |

---

## 6. Developer Pain Points

| Pain Point | Manifestation | Severity |
|------------|-------------|----------|
| **Approval fatigue & over-permissioning** | Users demand granular controls: deny-by-default (#19776), quota-aware routing (#21643), step-through execution (#21593). Current "allow all" defaults feel dangerous. | **Critical** |
| **Windows compatibility gaps** | Arrow-key navigation broken in PTY shells (#20680), UNC path validation failures (#21639). Cross-platform parity lagging. | **High** |
| **Memory pressure in long sessions** | JS heap exhaustion (#20550) with 4GB+ scavenges; no clear mitigation path. | **Medium-High** |
| **Sandbox rigidity** | Flat skill/agent directories (#21653), Docker-only container runtime (#14484 now resolved). Flexibility improving but slowly. | **Medium** |
| **Visibility into agent reasoning** | Plan truncation (#20716), excessive scrolling, poor subagent history (#20886). Verbosity initiative (#21449-21454) addresses this. | **Medium** |
| **Startup latency** | Sequential auth calls, uncached I/O. Being actively addressed (#21648, #21518-21519, #21646). | **Improving** |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-03-08 to 2026-03-09.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-09

---

## 1. Today's Highlights

The Copilot CLI team closed a long-standing CJK IME positioning bug (#1698) that had affected 51+ users, while the community filed 8 new feature requests in 24 hours—spanning OpenTelemetry observability, context persistence, and IDE integration improvements. A notable spike in "invalid" spam issues (3 closed) suggests moderation attention may be needed.

---

## 2. Releases

**No releases** in the past 24 hours. Latest stable remains prior build.

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| [#1698](https://github.com/github/copilot-cli/issues/1698) **CLOSED** — IME candidate window misplaced in CJK input | Critical accessibility fix for Japanese/Chinese/Korean users; resolves UI detachment that broke input flow | 51 👍, 6 comments; resolved after 10 days |
| [#1868](https://github.com/github/copilot-cli/issues/1868) — Document `/ide` support for non-VSCode IDEs | Community reverse-engineered VSCode protocol; formal docs would unlock Eclipse, JetBrains, Vim extensions | 6 comments, active discussion |
| [#1754](https://github.com/github/copilot-cli/issues/1754) — AssertionError + HTTP/2 GOAWAY during retrospective | Production reliability issue; undici pooling + 503 suggests infra stress under load | 9 👍, 5 comments, needs triage |
| [#970](https://github.com/github/copilot-cli/issues/970) — macOS Gatekeeper blocking under corporate policy | Enterprise deployment blocker; recurring post-Homebrew install friction | 16 👍, ongoing |
| [#1908](https://github.com/github/copilot-cli/issues/1908) — Model selection is case-sensitive | UX papercut: "GPT-5.4" rejected vs "gpt-5.4" accepted | 1 👍, trivial fix likely |
| [#1911](https://github.com/github/copilot-cli/issues/1911) — OpenTelemetry export for traces/metrics/events | Enterprise observability demand; aligns with industry OTel adoption | New, 0 👍 but high strategic value |
| [#1912](https://github.com/github/copilot-cli/issues/1912) — Context Manager for per-folder persistent sessions | Workflow efficiency: users lose context on every directory re-entry | New, builds on #248 model selection theme |
| [#1913](https://github.com/github/copilot-cli/issues/1913) — Permission deadlock switching to autopilot mid-activity | Safety/UX conflict: mode switch during pending approval stalls agent | New, edge case with security implications |
| [#1915](https://github.com/github/copilot-cli/issues/1915) — `/new` vs `/clear` semantic distinction | CLI ergonomics: users want archive-not-delete for conversation history | New, UX refinement |
| [#1885](https://github.com/github/copilot-cli/issues/1885) **CLOSED** — Plugin update fails for direct GitHub installs | Plugin ecosystem health; source metadata persistence fix | Duplicates #1290, now resolved |

---

## 4. Key PR Progress

Only **1 PR** updated in 24h:

| PR | Assessment |
|----|-----------|
| [#1916](https://github.com/github/copilot-cli/pull/1916) — Rename `install.sh` to `1install.sh` | **Spam/low-quality** — no description, unclear motivation ("77886"), likely to be closed. Not a genuine feature contribution. |

*No substantive PRs in this period. Core development appears focused on internal releases or issue triage.*

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Model flexibility** | #248 (multi-model selection), #1325 (model highlighting), #1908 (case-sensitivity fix) | Sustained—users want cost/performance control |
| **IDE ecosystem expansion** | #1868 (document `/ide` protocol), #1907 (IDE diff rendering issues) | Growing—beyond VSCode lock-in |
| **Observability & ops** | #1911 (OpenTelemetry), #1910 (event system bugs) | Emerging—enterprise/production readiness |
| **Session/context management** | #1912 (per-folder persistence), #1915 (`/new` semantics), #1914 (`-r` shorthand) | Active—workflow continuity pain |
| **Enterprise hardening** | #970 (Gatekeeper), #1913 (permission model) | Steady—security/policy compliance |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **CJK input brokenness** | Resolved | High | #1698 (closed) |
| **Plugin update fragility** | Recurring | Medium | #1885, #1290, #1631 (warnings) |
| **macOS security friction** | Chronic | Medium-High | #970 |
| **Model selection UX** | Active | Low-Medium | #248, #1325, #1908 |
| **HTTP/2 & connection reliability** | Sporadic | High | #1754 |
| **IDE integration gaps** | Growing | Medium | #1868, #1907 |
| **Spam/invalid issue noise** | New spike | Low (moderation) | #1904, #1905, #1906, #1916 |

---

*Digest compiled from 22 issues and 1 PR. Data: github.com/github/copilot-cli*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-09

## 1. Today's Highlights

The community is actively pushing for **project-level configuration management** and **smarter context awareness** in the VSCode extension. Four new issues emerged in the last 24 hours, with no releases or PR activity—suggesting a focus on refinement and workflow integration rather than core feature expansion.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|------------------|
| [#1365](https://github.com/MoonshotAI/kimi-cli/issues/1365) | Project-level MCP/subagents configuration | Critical for team workflows and reproducible dev environments; global-only config forces manual `--mcp-config-file` flags per session | 👍 1, fresh request with clear use case |
| [#1270](https://github.com/MoonshotAI/kimi-cli/issues/1270) | VSCode: prioritize open files in `@` suggestions | Reduces friction in the core chat-to-code workflow; leverages existing editor state for smarter context | 👍 0, but aligns with UX improvement trends |
| [#1364](https://github.com/MoonshotAI/kimi-cli/issues/1364) | Ubuntu connection error: illegal HTTP header value | Blocking bug on LTS platform; indicates potential networking/auth layer regression in v1.17.0 | 👍 0, needs triage |
| [#1363](https://github.com/MoonshotAI/kimi-cli/issues/1363) | `--agent-file` ignored in `kimi web` subcommand | Breaks documented workflow for custom agent deployment; affects power users automating setups | 👍 0, documentation/implementation gap |

---

## 4. Key PR Progress

*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Hierarchical configuration** | #1365 | Users expect `.kimi/config.yaml` or similar alongside global settings |
| **Editor-native context awareness** | #1270 | Deeper IDE integration (open files, cursor position, selection) becoming baseline expectation |
| **Consistent CLI/web parity** | #1363 | Subcommand behavior divergence (`kimi chat` vs `kimi web`) creating confusion |

---

## 6. Developer Pain Points

| Pain Point | Manifestation | Severity |
|------------|-------------|----------|
| **Configuration portability** | Manual flag passing for per-project MCP setups | High — affects CI/CD and team onboarding |
| **Platform-specific regressions** | Ubuntu 22.04 connection failures in latest release | High — LTS compatibility is table stakes |
| **Implicit vs. explicit context** | Unclear when Kimi "sees" open files vs. requiring `@` mentions | Medium — impacts trust in agent autonomy |
| **Documentation drift** | `--agent-file` works in CLI but not `web` subcommand | Medium — creates friction for advanced users |

---

*Digest compiled from [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) activity 2026-03-08 to 2026-03-09.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-09

## Today's Highlights

The OpenCode team shipped **v1.2.22** with critical fixes for symlink-related regressions that had been causing TUI freezes and duplicate server instances. Community contributor @jmylchreest landed a key fix for symlink resolution in the instance cache after a rapid iteration cycle (two PRs in 24h). Meanwhile, @ariane-emory continues to dominate the contribution pipeline with 15+ active PRs touching TUI polish, keybindings, and system toggles.

---

## Releases

### [v1.2.22](https://github.com/anomalyco/opencode/releases/tag/v1.2.22)

| Category | Changes |
|----------|---------|
| **TUI** | Canonicalize working directory after CD operations; fix broken MCP toggling |
| **Database** | Beta channel can now share database with stable; new `OPENCODE_SKIP_MIGRATIONS` flag for bypassing migrations |
| **Testing** | Updated database path tests for channel-based filenames |

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#11112](https://github.com/anomalyco/opencode/issues/11112) | "Preparing write..." infinite loop | **Critical workflow blocker** — affects core file writing functionality; 38 comments suggest widespread impact | 17 👍, active debugging; users report tool execution abort loops |
| [#12954](https://github.com/anomalyco/opencode/issues/12954) | Codex 5.3 support for GitHub Copilot provider | **High-demand model integration** — Codex 5.3 just went GA; community wants parity | 121 👍, 17 comments; clear priority signal |
| [#11439](https://github.com/anomalyco/opencode/issues/11439) | Parse `<think>`/`<thinking>` tags as reasoning blocks | **UX gap for custom providers** — regression from v1.1.45; users want visible reasoning for non-native thinking models | 8 👍, 11 comments; workaround discussions ongoing |
| [#16470](https://github.com/anomalyco/opencode/issues/16470) | Code unreadable in light mode | **Accessibility regression** — color scheme bug renders code invisible; affects default theme | Only 1 👍 but 11 comments; screenshot evidence provided |
| [#16647](https://github.com/anomalyco/opencode/issues/16647) | Symlinked directories break after 8a95be4 | **Root cause identified** — `realpathSync.native()` dereferences symlinks, breaking Windows/WSL workflows | 9 comments; linked to multiple related issues |
| [#12472](https://github.com/anomalyco/opencode/issues/12472) | Native Claude Code hooks compatibility | **Ecosystem parity** — PreToolUse/PostToolUse/Stop hooks missing despite strong CC compatibility elsewhere | 7 👍, 8 comments; power users want migration path |
| [#15482](https://github.com/anomalyco/opencode/issues/15482) | Two server instances with symlinked paths | **Stability issue** — causes TUI freeze on prompt; shadow instance handles requests invisibly | 6 comments; workaround: use real path |
| [#9132](https://github.com/anomalyco/opencode/issues/9132) | Official Docker Sandbox template | **Infrastructure request** — want `docker sandbox run opencode` parity with Claude Code | 31 👍, 6 comments; enterprise/security use case |
| [#16351](https://github.com/anomalyco/opencode/issues/16351) | TUI broken in tmux after 1.2.17 | **Terminal compatibility** — grey input box, broken keyboard/mouse; root cause identified | 9 👍, 3 comments; tmux users blocked |
| [#13841](https://github.com/anomalyco/opencode/issues/13841) | Explore subagent hangs with Claude Opus 4.6 | **Reliability concern** — indefinite hang, no timeout/recovery; affects agent-heavy workflows | 2 comments; needs reproduction |

---

## Key PR Progress

| # | PR | Author | Status | Description |
|---|-----|--------|--------|-------------|
| [#16651](https://github.com/anomalyco/opencode/pull/16651) | fix: resolve symlinks in Instance cache | @jmylchreest | **OPEN** | Replaces `path.resolve()` with proper symlink resolution; fixes #16647, #15482, #16522 |
| [#16241](https://github.com/anomalyco/opencode/pull/16241) | fix(lsp): ignore stderr on LSP spawn | @dimaosipa | OPEN | Prevents unbounded memory growth from buffered stderr pipes; closes #12687 |
| [#10713](https://github.com/anomalyco/opencode/pull/10713) | feat: move diff_style to kv.json + toggle menu | @ariane-emory | OPEN | Migrates diff styling from config to persisted KV; adds runtime toggle |
| [#5134](https://github.com/anomalyco/opencode/pull/5134) | feat: JSONC support in user theme files | @ariane-emory | OPEN | Parity with `opencode.jsonc`; resolves #4927 |
| [#5092](https://github.com/anomalyco/opencode/pull/5092) | feat: `{env:VAR}` in markdown frontmatter | @ariane-emory | OPEN | Dynamic model selection via env vars; resolves #5054, #5082 |
| [#5903](https://github.com/anomalyco/opencode/pull/5903) | feat(tui): keybinding for custom slash commands | @ariane-emory | OPEN | Bind `/command` to keystrokes; extends TUI customization |
| [#11710](https://github.com/anomalyco/opencode/pull/11710) | feat: include cleared prompts in history toggle | @ariane-emory | OPEN | KV-persisted setting for history behavior; resolves #11489 |
| [#12856](https://github.com/anomalyco/opencode/pull/12856) | feat: snapshot pruning bugfix + retention config | @ariane-emory | OPEN | Fixes directory pruning bug; adds day-based retention; closes 6 issues |
| [#11123](https://github.com/anomalyco/opencode/pull/11123) | fix: don't discover hidden agents/commands | @ariane-emory | OPEN | Removes dotfiles from discovery; resolves #11122 |
| [#15054](https://github.com/anomalyco/opencode/pull/15054) | fix: KaTeX-compatible math syntax instruction | @alberti42 | OPEN | Ensures `$...$` / `$$...$$` output for proper rendering; closes #15053 |

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Model provider expansion** | Codex 5.3 (#12954), GPT-5.4 visibility (#16265), custom provider reasoning params (#16154) | High — 121 👍 on Codex issue |
| **Claude Code ecosystem parity** | Hooks (#12472), Docker sandbox (#9132), skills/rules already supported | Medium — migration path demand |
| **TUI customization & accessibility** | Diff style toggles (#10713), theme JSONC (#5134), light mode fixes (#16470), keybindings (#5903) | High — @ariane-emory's focus area |
| **Agent/team features** | Agent-teams inquiry (#15035), subagent reliability (#13841) | Emerging — enterprise interest |
| **Sandbox/security hardening** | Docker template (#9132), /tmp access (#4743, #5386) | Medium — CI/CD use cases |

---

## Developer Pain Points

| Pain Point | Frequency | Impact | Tracking |
|------------|-----------|--------|----------|
| **Symlink handling regressions** | 🔥 Critical | TUI freezes, duplicate instances, broken WSL workflows | #16647, #15482, #16522, #16596, #16648 — **actively being fixed** |
| **Write operation hangs** | 🔥 Critical | "Preparing write..." loops block all file operations | #11112 — 38 comments, needs resolution |
| **Terminal environment compatibility** | High | tmux (#16351), WSL (#7297, #12408), Ghostty (#212) | Multiple open issues |
| **Permission friction** | Medium | Repeated prompts for multi-edit operations | #16637 — "Allow All for This Query" requested |
| **Model availability/visibility** | Medium | New models not appearing, custom provider incompatibilities | #16265, #16154, #12954 |
| **Session management** | Medium | Shared links stale (#9988), session picker limited (#13877), metadata loss (#5155) | UX polish needed |

---

*Digest compiled from github.com/anomalyco/opencode — 50 issues and 50 PRs processed.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-03-09

## Today's Highlights

The v0.12.0-preview.1 release landed with Windows CRLF/BOM parsing fixes and configurable tab width for code highlighting, while the VSCode IDE Companion release pipeline hit a snag. A massive batch of 17 merged PRs from @echoVic standardized tool naming across CLI and web UI, restored thinking message persistence, and added project skill discovery from `.agents/skills`. Meanwhile, critical input bugs—spacebar failure and read-tool looping—emerged as immediate blockers for users.

---

## Releases

| Version | Key Changes |
|--------|-------------|
| **v0.12.0-preview.1** | Fixed markdown frontmatter parsing on Windows CRLF/BOM ([#2078](https://github.com/QwenLM/qwen-code/pull/2078)); added `tabWidth` support in `CodeColorizer` to replace tabs with spaces ([#2077](https://github.com/QwenLM/qwen-code/pull/2077)) |
| **v0.12.0-nightly.20260308.0b7ad066** | Same changes as preview.1 above |

⚠️ **Note:** VSCode IDE Companion release failed for v0.12.0-preview.1 ([Issue #2199](https://github.com/QwenLM/qwen-code/issues/2199)).

---

## Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#311](https://github.com/QwenLM/qwen-code/issues/311) | Performance: qwen code slower than Gemini CLI | Long-standing performance gap vs. upstream; 18 comments, 5 👍, multi-machine reproduction | **High engagement**, needs profiling data |
| [#2105](https://github.com/QwenLM/qwen-code/issues/2105) | Error message persists after model switch | UX friction; fixed by [#2192](https://github.com/QwenLM/qwen-code/pull/2192) | Resolved, validation pending |
| [#2191](https://github.com/QwenLM/qwen-code/issues/2191) | DashScope 429 throttling on web search | 3+ days of API rate-limit pain for Russian-language users | **P1 candidate**, needs retry/backoff strategy |
| [#2198](https://github.com/QwenLM/qwen-code/issues/2198) | **Cannot type spacebar in CLI** | **Critical input regression**—completely blocks usage | **Zero-day blocker**, needs immediate triage |
| [#2201](https://github.com/QwenLM/qwen-code/issues/2201) | Read tool loops on file reads | Agent reliability issue; wastes tokens re-reading same lines | Fresh report, no comments yet |
| [#2200](https://github.com/QwenLM/qwen-code/issues/2200) | Context compression not reducing window | Core feature broken—users paying for unused context | Needs reproduction details |
| [#2196](https://github.com/QwenLM/qwen-code/issues/2196) | Global `~/.qwen/` settings ignored per session | Configuration drift; breaks workflow automation | Fresh, affects power users |
| [#2194](https://github.com/QwenLM/qwen-code/issues/2194) | Request: `--worktree` flag for parallel sessions | Enables safe multi-session workflows—competitive with Claude Code | Feature request, no comments |
| [#2012](https://github.com/QwenLM/qwen-code/issues/2012) | Frequent failed bash tool calls | Tool reliability concern across "completely different projects" | Needs structured reproduction |
| [#1809](https://github.com/QwenLM/qwen-code/issues/1809) | [CLOSED] Feature: `AskUser` for agent clarification | **Shipped in v0.12.0** via [#1828](https://github.com/QwenLM/qwen-code/pull/1828)—closes gap with Claude's `AskUserQuestion` | Resolved |

---

## Key PR Progress

| # | Author | Summary | Impact |
|---|--------|---------|--------|
| [#2192](https://github.com/QwenLM/qwen-code/pull/2192) | @hkc5 | Clear retry errors even without countdown timer | Fixes [#2105](https://github.com/QwenLM/qwen-code/issues/2105) model-switch UX bug |
| [#2195](https://github.com/QwenLM/qwen-code/pull/2195) | @buaoyezz | **VSCode sidebar chat view** | Major IDE integration milestone—dedicated Qwen Code panel |
| [#1828](https://github.com/QwenLM/qwen-code/pull/1828) | @DragonnZhang | `AskUserQuestionTool` for interactive queries | Enables mid-task clarification; closes [#1809](https://github.com/QwenLM/qwen-code/issues/1809) |
| [#2159](https://github.com/QwenLM/qwen-code/pull/2159) | @echoVic | Setting to suppress home directory warning | Polishes onboarding for home-dir launches |
| [#2160](https://github.com/QwenLM/qwen-code/pull/2160) | @echoVic | Clear static retry errors on new query | Complements [#2192](https://github.com/QwenLM/qwen-code/pull/2192) for cleaner error state |
| [#2162](https://github.com/QwenLM/qwen-code/pull/2162) | @echoVic | Preserve selected auth type on init failure | Fixes [#2049](https://github.com/QwenLM/qwen-code/issues/2049)—stops auth config loss |
| [#2163](https://github.com/QwenLM/qwen-code/pull/2163)–[#2168](https://github.com/QwenLM/qwen-code/pull/2168) | @echoVic | **Tool naming unification** (Shell, TodoWrite, Read, WebFetch, WebSearch, Think) | Resolves [#1367](https://github.com/QwenLM/qwen-code/issues/1367)—consistent CLI/web UI labels |
| [#2169](https://github.com/QwenLM/qwen-code/pull/2169)–[#2173](https://github.com/QwenLM/qwen-code/pull/2173) | @echoVic | **Thinking message persistence in VSCode** | Fixes [#2112](https://github.com/QwenLM/qwen-code/issues/2112)—restores agent reasoning visibility |
| [#2174](https://github.com/QwenLM/qwen-code/pull/2174) | @echoVic | Discover skills from `.agents/skills` | Extends [#2155](https://github.com/QwenLM/qwen-code/issues/2155)—broader skill ecosystem support |
| [#2175](https://github.com/QwenLM/qwen-code/pull/2175)–[#2176](https://github.com/QwenLM/qwen-code/pull/2176) | @echoVic | Deduplicate startup warnings, include home path | Polishes [#2136](https://github.com/QwenLM/qwen-code/issues/2136) UX |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Richer input modalities** | [#1664](https://github.com/QwenLM/qwen-code/issues/1664) (checkboxes, tabs vs. radio-only) | Closed without resolution—may resurface |
| **Agent interactivity** | [#1809](https://github.com/QwenLM/qwen-code/issues/1809) → shipped; `AskUser` now live | **Delivered** |
| **Session isolation** | [#2194](https://github.com/QwenLM/qwen-code/issues/2194) (`--worktree` flag) | Fresh, unstaffed |
| **Performance parity** | [#311](https://github.com/QwenLM/qwen-code/issues/311) (vs. Gemini CLI speed) | 6+ months old, needs profiling investment |
| **Configuration reliability** | [#2196](https://github.com/QwenLM/qwen-code/issues/2196) (global settings ignored) | Regression or design gap |

---

## Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Input/regression bugs** | 2 fresh reports (#2198 spacebar, #2201 read loop) | **Critical** | Needs immediate triage |
| **API rate limiting (DashScope)** | [#2191](https://github.com/QwenLM/qwen-code/issues/2191), 3+ days | High | Needs retry/backoff + user guidance |
| **Context compression failures** | [#2200](https://github.com/QwenLM/qwen-code/issues/2200) | High | Cost/UX impact |
| **Tool reliability (bash, read)** | [#2012](https://github.com/QwenLM/qwen-code/issues/2012), [#2201](https://github.com/QwenLM/qwen-code/issues/2201) | Medium-High | Pattern suggests agent loop robustness gaps |
| **Performance vs. competitors** | [#311](https://github.com/QwenLM/qwen-code/issues/311) | Chronic | Requires telemetry/profiling |
| **Configuration drift** | [#2196](https://github.com/QwenLM/qwen-code/issues/2196) | Medium | Affects automation workflows |

---

*Digest compiled from github.com/QwenLM/qwen-code activity 2026-03-08.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*