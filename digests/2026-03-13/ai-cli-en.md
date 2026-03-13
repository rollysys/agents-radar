# AI CLI Tools Community Digest 2026-03-13

> Generated: 2026-03-13 00:08 UTC | Tools covered: 7

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

# AI CLI Tools Ecosystem Report — March 13, 2026

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing rapid maturation with six major players actively competing for developer mindshare. All tools are converging on agentic workflows, MCP server ecosystems, and session continuity as core differentiators, while struggling with shared infrastructure challenges around rate limiting, cross-platform reliability, and context window management. The space shows clear signs of platform specialization: Claude Code leads in multi-agent orchestration, OpenAI Codex pursues a Rust-rewrite architecture migration, and Google/Gemini is investing heavily in "infinite session" memory research. Enterprise adoption friction—particularly around Windows support, cost controls, and observability—dominates community feedback across all tools.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Velocity Signal |
|------|-------------|-----------|----------------|---------------|
| **Claude Code** | 50 active | 7 open | v2.1.74 (stable) | Moderate; maintenance-focused |
| **OpenAI Codex** | ~15 tracked | 10+ active | 6 alpha builds (v0.115.0-alpha.7–14) | **Very high**; rapid Rust stabilization |
| **Gemini CLI** | 10+ significant | 10 open | 3 patches (v0.33.1, v0.34.0-preview.1/2) | High; reactive patching |
| **GitHub Copilot CLI** | ~10 tracked | 1 merged | v1.0.5-0 (stable) | **Low**; minimal external contribution |
| **Kimi Code CLI** | 6 updated | 10 active | v1.21.0 (stable) | Moderate; reliability focus |
| **OpenCode** | 50 analyzed | 50 active | v1.2.25 (stable) | **High**; memory/TUI hardening |
| **Qwen Code** | 47 issues | 21 PRs | v0.12.2 (stable) + previews | Moderate; Windows stress-testing |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Community Needs |
|-------------|-------|-------------------------|
| **Session continuity & memory** | Claude Code, Gemini CLI, OpenCode | Auto-memory directories (Claude #2.1.74), "infinite" sessions (Gemini #21792), context compression controls (Gemini #21888–21920), idle timeout disposal (OpenCode #16616) |
| **MCP server lifecycle** | Claude Code, Gemini CLI, OpenCode, Qwen Code | OAuth-native install (OpenCode #988), `/mcp remove` command (Gemini #19025), scheduled task access (Claude #33773), reconnect flows (Qwen #2316) |
| **Event/hook system** | OpenAI Codex, Qwen Code | Pattern-matching triggers (Codex #2109, 493 👍), 10 core hooks (Qwen #2203), stop hook mechanics (Codex #14532) |
| **Permission/automation governance** | Claude Code, OpenCode, Kimi Code, Copilot CLI | `deny-with-reason` plugin (Claude #33809), `--dangerously-skip-permissions` (OpenCode #8463), YOLO mode toggle (Kimi #1414), sandbox mode (Copilot #892) |
| **Cross-platform parity** | All except Claude Code | Windows ARM64 (OpenCode #4340 ✓, Codex #10410), Intel Mac (Codex #10410), CJK input (Gemini #22176, Qwen #2101), WSL path handling (Codex #13699, Claude #29583) |
| **Cost control transparency** | OpenAI Codex, OpenCode, Copilot CLI | Usage reset equity (Codex #14329), agent request billing misclassification (OpenCode #8030, 172 comments), MCP opt-out (Copilot #768) |
| **Keyboard/TUI customization** | Claude Code, Codex, Copilot CLI | Vim-style bindings (Claude #9177), theme control (Codex ✓), Tmux scroll (Copilot #1842) |

---

## 4. Differentiation Analysis

| Tool | Core Focus | Target User | Technical Approach |
|------|-----------|-------------|------------------|
| **Claude Code** | Multi-agent orchestration, Cowork collaboration | Teams, enterprise pair-programming | TypeScript/Node, plugin architecture, opinionated TUI |
| **OpenAI Codex** | Rust CLI performance, embedded app-server | Performance-sensitive developers, CI/CD | Rust rewrite in progress, v2 RPC protocol, sandboxed execution |
| **Gemini CLI** | Session continuity research, "infinite" context | Long-running research tasks, documentation | Aggressive memory architecture experiments, A2A protocol |
| **GitHub Copilot CLI** | IDE ecosystem integration, GitHub-native workflows | Existing Copilot subscribers, VS Code users | Electron-based, tight GitHub/Azure DevOps coupling |
| **Kimi Code CLI** | Real-time agent control, Web visualization | Interactive debugging, visual workflows | WebSocket-heavy, in-turn steering (#1422), browser bridge |
| **OpenCode** | Provider flexibility, cost control | Multi-LLM users, budget-conscious teams | Pluggable providers (Azure #1.2.25), branded type safety, serve-mode |
| **Qwen Code** | IDE companion parity, agent collaboration | VS Code-centric developers, Chinese market | Dual CLI/IDE architecture, competitive agent arenas (#1912) |

**Key technical divergence**: Codex and Gemini are investing in fundamental runtime rewrites (Rust, memory architecture), while Claude Code and OpenCode optimize existing Node.js foundations for extensibility. Kimi and Qwen prioritize real-time interactivity and IDE integration over CLI purity.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **Rapid iteration** | OpenAI Codex, OpenCode | 6 alpha releases/24h (Codex); 50 PRs active, memory leak fixes (OpenCode) |
| **Active maintenance** | Claude Code, Gemini CLI, Kimi Code, Qwen Code | Regular stable releases, responsive issue triage, architectural epics in progress |
| **Stagnation risk** | GitHub Copilot CLI | Single PR merged in 24h; #53 (restore `gh copilot` commands) at 72 👍 with 6 months silence; community fork (`shell-ai`) emerging |

**Maturity signals**: Claude Code has the longest-running unresolved issue (#826, 320 comments, scroll bug since 2025) indicating technical debt accumulation. OpenCode shows highest PR velocity relative to team size. Gemini CLI's "Session Continuity" epic (#21792) signals research-stage ambition vs. production hardening.

---

## 6. Trend Signals

| Trend | Evidence | Developer Value |
|-------|----------|---------------|
| **Agent billing transparency crisis** | OpenCode #8030 (172 comments), Codex #14329, #13568 (325 comments) | Enterprises demanding auditability of agent-initiated costs; expect vendor differentiation on cost attribution |
| **OAuth-native authentication** | OpenCode #988, Gemini #16991, Qwen #2327 | Movement beyond API keys toward secure, ephemeral credentials—reduces secret sprawl |
| **Context compression as first-class concern** | Gemini's 6+ memory issues, Codex #5957/#14346, Claude #2.1.74 diagnostics | Long-agent sessions becoming standard; compression quality directly impacts task completion rates |
| **Windows as enterprise gate** | 15+ issues across tools on Windows-specific failures | Linux-first development creating adoption friction; tools with robust Windows support (Kimi #1416, OpenCode #4340) gain enterprise advantage |
| **TUI reliability at scale** | Scroll position bugs (Claude #826, Gemini #22215/#22028), flicker (Copilot #1599), clipboard (OpenCode #4283) | Terminal UI sophistication outpacing terminal emulator compatibility; expect abstraction layers (like Codex's app-server) to proliferate |
| **Multi-agent governance** | Claude #33809 (deny-with-reason), Qwen #2337 (subagent budgets), OpenCode #12661 (Agent Teams) | Composition patterns maturing; resource isolation and permission delegation becoming critical for safe automation |

---

*Report compiled from 7 community digests covering 200+ issues and 100+ PRs, March 12–13, 2026.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of March 13, 2026 | Repository: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Functionality | Status | Key Highlights |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Typographic quality control—prevents orphans, widows, and numbering misalignment in AI-generated documents | 🟡 Open | Addresses universal pain point affecting every Claude document output; zero upvotes but high implicit demand |
| 2 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | Revised guidance for actionable, single-conversation frontend development workflows | 🟡 Open | Focus on token efficiency and executable instructions vs. verbose documentation |
| 3 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | Meta-skills for evaluating Skill structure, documentation, and security posture across 5 dimensions | 🟡 Open | First systematic approach to Skill validation; 20% weight on structure/docs |
| 4 | **Masonry Image/Video Generation** | [#335](https://github.com/anthropics/skills/pull/335) | CLI wrapper for Imagen 3.0 and Veo 3.1 generation with job management | 🟡 Open | Bridges Claude Code to Google's media generation APIs; actively updated (Mar 12) |
| 5 | **Shodh Memory** | [#154](https://github.com/anthropics/skills/pull/154) | Persistent memory system maintaining context across Claude Code sessions | 🟡 Open | Addresses core platform limitation; proactive context surfacing on every user message |
| 6 | **ODT Processing** | [#486](https://github.com/anthropics/skills/pull/486) | OpenDocument creation, template filling, and HTML parsing for LibreOffice/enterprise workflows | 🟡 Open | ISO 26300 standard support; targets Google Docs/Office interoperability |
| 7 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | Integration with SAP's open-source tabular foundation model for business analytics | 🟡 Open | Enterprise ERP focus; Apache 2.0 model from SAP TechEd 2025 |
| 8 | **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | 10-step workflow for identifying orphaned code, unused files, and documentation gaps | 🟡 Open | Produces CODEBASE-STATUS.md as single source of truth |

---

## 2. Community Demand Trends

Derived from top Issues by comment volume and thematic clustering:

| Trend | Evidence | Implied Skill Need |
|:---|:---|:---|
| **Skill Reliability & Persistence** | [#62](https://github.com/anthropics/skills/issues/62) (10 comments): Skills disappearing, file rename corruption | Backup/sync skills, version-controlled skill storage |
| **Skill-Creator Tooling** | [#202](https://github.com/anthropics/skills/issues/202) (8 comments): Token-inefficient, violates naming guidelines | `skill-creator-v2` with execution-first prompts |
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) (4 comments, closed): Policy enforcement, threat detection, audit trails | `agent-governance` for multi-agent system control |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments): Skills-as-MCPs for standardized APIs | Native MCP export from Skills |
| **Enterprise Auth & Deployment** | [#29](https://github.com/anthropics/skills/issues/29), [#532](https://github.com/anthropics/skills/issues/532): AWS Bedrock, SSO/API key conflicts | Enterprise gateway skills with delegated auth |
| **Evaluation & Testing** | [#556](https://github.com/anthropics/skills/issues/556) (3 comments): 0% skill trigger rate in `run_eval.py` | Automated skill efficacy validation |

---

## 3. High-Potential Pending Skills

Active PRs with recent momentum (updated within 14 days) likely to merge:

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **Buildr (Telegram Bridge)** | [#419](https://github.com/anthropics/skills/pull/419) | Mobile control surface for Claude Code; single-command setup; no comments but clean scope |
| **Google Workspace Integration** | [#299](https://github.com/anthropics/skills/issues/299) | 6-skill suite (email triage, calendar, tasks) using GOG CLI; personal assistant use case |
| **X402 Micropayments** | [#374](https://github.com/anthropics/skills/pull/374) | BSV-based AI service payments; natural language interface; updated Feb 17 |
| **Record Knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | Session persistence workaround; directly addresses [#62](https://github.com/anthropics/skills/issues/62) pain point; updated Mar 9 |
| **Feature-Dev Workflow Fix** | [#363](https://github.com/anthropics/skills/pull/363) | Critical bugfix for TodoWrite overwrite skipping phases 6-7; small, targeted change |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for session continuity and skill durability**—persistent memory across conversations, reliable skill storage, and governance tooling that prevents "disappearing skills"—while simultaneously pushing for enterprise-ready interoperability (MCPs, SSO, ERP connectors) that positions Claude Code as a production-grade agent platform rather than ephemeral chat interface.

---

---

# Claude Code Community Digest — 2026-03-13

---

## 1. Today's Highlights

Anthropic shipped **v2.1.74** with actionable context diagnostics and configurable auto-memory directories, addressing long-standing memory management concerns. Meanwhile, the community is actively stress-testing Cowork's rate limiting and Windows path handling, with two high-engagement issues drawing significant attention. The plugin ecosystem is expanding with a new `deny-with-reason` plugin PR that improves tool-call governance.

---

## 2. Releases

### [v2.1.74](https://github.com/anthropics/claude-code/releases/tag/v2.1.74) — Latest

| Change | Impact |
|--------|--------|
| **Actionable `/context` suggestions** | Identifies context-heavy tools, memory bloat, and capacity warnings with specific optimization tips |
| **`autoMemoryDirectory` setting** | Configure custom directory for auto-memory storage |
| **Memory leak fix** | Resolves stream-related memory leak (details truncated in release notes) |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#826](https://github.com/anthropics/claude-code/issues/826) | Console scrolls to top when Claude adds text (macOS) | **320 comments, 578 👍** — oldest active bug causing severe UX friction during long sessions; users lose scroll position constantly | Extremely high engagement; marked duplicate but no resolution path visible |
| [#33120](https://github.com/anthropics/claude-code/issues/33120) | Cowork rate limit errors (account-specific) | Isolated to Cowork product while Claude Chat/Code work fine; suggests server-side account flagging issue | 66 comments; users confirming cross-machine reproducibility |
| [#29583](https://github.com/anthropics/claude-code/issues/29583) | Cowork cannot use folders outside home directory on Windows | Blocks Windows users with projects on secondary drives; fundamental path handling bug | 45 comments, 35 👍; active reproduction attempts |
| [#6850](https://github.com/anthropics/claude-code/issues/6850) | `settings.local.json` allow list ignored | Persistent permission prompts despite configuration; breaks automation workflows | 38 comments, 38 👍; long-running issue since Aug 2025 |
| [#11447](https://github.com/anthropics/claude-code/issues/11447) | Cannot edit tab-indented files | Core editing functionality broken for legacy codebases; has reproduction | 32 comments, 31 👍; affects enterprise users |
| [#20508](https://github.com/anthropics/claude-code/issues/20508) | API Error 400: "tool_use ids must be unique" with `-p` flag | Breaks programmatic usage patterns; tool ID collision in non-interactive mode | 14 comments, 13 👍; blocking CI/CD integrations |
| [#9177](https://github.com/anthropics/claude-code/issues/9177) | User-configurable keyboard shortcuts | Long-standing TUI enhancement request; power users need vim-style bindings | 13 comments, 25 👍; stale but resurfacing |
| [#29110](https://github.com/anthropics/claude-code/issues/29110) | Spawned agents: `bypassPermissions` ineffective, worktree data loss, plan mode loop | **Data loss severity** — three related bugs in agent spawning with worktree isolation | 5 comments; critical for multi-agent workflows |
| [#32699](https://github.com/anthropics/claude-code/issues/32699) | OTEL telemetry stopped working after v2.1.72 | **Regression** — enterprise observability broken by auto-update; confirmed working in v2.1.71 | 5 comments; monitoring-dependent users affected |
| [#33758](https://github.com/anthropics/claude-code/issues/33758) | `--chrome` flag ignored on session resume | Chrome MCP silently disabled when resuming long sessions; friction for browser-automation workflows | 2 comments; emerging as session-management pattern issue |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#33809](https://github.com/anthropics/claude-code/pull/33809) | **feat: add deny-with-reason plugin** | New plugin architecture allowing pattern-based tool denial with explanatory feedback to Claude; uses `.claude/deny-reasons.yaml` config | 🟢 Open |
| [#32890](https://github.com/anthropics/claude-code/pull/32890) | **fix: Update stale Task tool references to Agent tool** | Documentation sync following v2.1.63 rename; replaces 10+ occurrences in plugin docs | 🟢 Open |
| [#33710](https://github.com/anthropics/claude-code/pull/33710) | **Add complete town simulator game** | Unexpected: full game engine PR (GameLoop, ECS, Canvas rendering) — likely test/demo or misdirected | 🟢 Open |
| [#30636](https://github.com/anthropics/claude-code/pull/30636) | **Update 25+ stale documentation URLs** | Mass URL migration to new canonical domains (`code.claude.com`, `platform.claude.com`) | 🟢 Open |
| [#33443](https://github.com/anthropics/claude-code/pull/33443) | **fix: Update Dockerfile to use native installer** | Modernizes devcontainer to Node 24.14 + native installer; deprecates npm install path | 🟢 Open |
| [#33472](https://github.com/anthropics/claude-code/pull/33472) | **feat(code-review): pass confirmed=true when posting inline comments** | Fixes subagent permission escalation on GitHub PR comments; security/production fix | 🔴 Closed |
| [#16215](https://github.com/anthropics/claude-code/pull/16215) | **fix(docs): fix broken CONTRIBUTING and LICENSE links** | Minor docs maintenance; CONTRIBUTING.md doesn't exist, LICENSE path corrected | 🔴 Closed |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Voice mode UX overhaul** | [#33025](https://github.com/anthropics/claude-code/issues/33025), [#30761](https://github.com/anthropics/claude-code/issues/30761), [#33805](https://github.com/anthropics/claude-code/issues/33805) | Push-to-toggle, continuous listening, and auto-start on session — accessibility and ergonomics driving demand |
| **MCP server lifecycle management** | [#33773](https://github.com/anthropics/claude-code/issues/33773), [#33758](https://github.com/anthropics/claude-code/issues/33758) | Scheduled tasks need MCP access; resume behavior inconsistent — orchestration gaps |
| **Keyboard customization** | [#9177](https://github.com/anthropics/claude-code/issues/9177) | Vim/emacs binding requests persistent; TUI flexibility vs. opinionated defaults tension |
| **Permission/automation governance** | [#6850](https://github.com/anthropics/claude-code/issues/6850), [#30148](https://github.com/anthropics/claude-code/issues/30148), [#33809](https://github.com/anthropics/claude-code/pull/33809) | Legal risk from autonomous LICENSE creation; local settings ignored; plugin-based enforcement emerging |

---

## 6. Developer Pain Points

| Category | Symptoms | Root Cause Indicators |
|----------|----------|----------------------|
| **Session state fragility** | Resume ignores flags (`--chrome`), scroll position lost, voice mode doesn't auto-start | Session serialization incomplete; flag state not persisted |
| **Cross-platform path handling** | Windows secondary drive failures, macOS `/Users/Shared/` collision, tab indentation bugs | Inconsistent path abstraction; platform testing gaps |
| **Permission system erosion** | `settings.local.json` ignored, `bypassPermissions` ineffective, autonomous file creation | Local vs. global config precedence unclear; agent spawning bypasses checks |
| **Cowork isolation failures** | Rate limits account-specific, VirtioFS mount edge cases, CSP errors post-OS update | Cowork appears to have separate infrastructure with divergent behavior |
| **Observability regressions** | OTEL broke in v2.1.72, stats cache reset | Auto-update pipeline lacking regression testing for telemetry |
| **Tool ID collisions** | `-p` flag generates duplicate tool_use IDs | Non-interactive mode uses different ID generation path |

---

*Digest compiled from 50 active issues, 7 PRs, and 1 release in the 24-hour window ending 2026-03-13.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-13

## 1. Today's Highlights

The Codex team is rapidly iterating on the v0.115.x Rust CLI with six alpha releases in 24 hours, while significant engineering effort is focused on migrating the TUI to an embedded app-server architecture. Rate limiting and usage accounting remain the most contentious topics in the community, with high-engagement issues from Team/Business account users alleging systematic exclusion from resets.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| `rust-v0.115.0-alpha.7` through `alpha.14` | Rapid-fire alpha releases (6 builds in 24h) suggest active stabilization of the Rust rewrite. No detailed changelogs provided in release notes. |

*No stable releases this period.*

---

## 3. Hot Issues

| # | Title | Status | Why It Matters | Community Reaction |
|---|-------|--------|--------------|------------------|
| [#13568](https://github.com/openai/codex/issues/13568) | Usage dropping too quickly | **CLOSED** | 325-comment thread on rate-limit degradation; user reported downgrade from 2X to 1X limits with rapid credit consumption | 87 👍; extensive feedback provided to OpenAI |
| [#10410](https://github.com/openai/codex/issues/10410) | macOS Intel (x86_64) support | **OPEN** | Desktop app currently ARM-only; blocks enterprise Intel Mac deployments | 151 👍, 115 comments; persistent demand since Feb 2026 |
| [#2109](https://github.com/openai/codex/issues/2109) | Event Hooks | **OPEN** | Request for pattern-matching hooks to trigger scripts around Codex behaviors | 493 👍, 67 comments; highest-voted enhancement |
| [#10450](https://github.com/openai/codex/issues/10450) | Remote Development in Desktop App | **OPEN** | Gap vs. VS Code remote workflows; critical for cloud/VM development | 325 👍, 49 comments |
| [#5957](https://github.com/openai/codex/issues/5957) | Auto compaction causes GPT-5-Codex to lose context | **OPEN** | Agent forgets mid-task state after compaction; breaks long-running workflows | 21 comments; reported on Enterprise tier |
| [#14331](https://github.com/openai/codex/issues/14331) | GPT-5.3-Codex model fails on paid accounts | **OPEN** | Auth/entitlement bug blocking model access for Plus subscribers | 18 comments; high severity |
| [#14346](https://github.com/openai/codex/issues/14346) | Context Compaction Hanging | **OPEN** | 20+ minute compaction stalls on Pro tier with GPT-5.4 | 13 👍, 11 comments |
| [#14329](https://github.com/openai/codex/issues/14329) | Team/Business accounts excluded from usage resets | **OPEN** | Alleged systematic exclusion of non-individual accounts from rate limit resets since March 5 | 5 👍, 6 comments; escalated as "every other channel failed" |
| [#13699](https://github.com/openai/codex/issues/13699) | Windows + WSL crash on config location | **OPEN** | WSL path handling causes crashes; blocks Windows enterprise adoption | 10 comments, 4 👍 |
| [#14345](https://github.com/openai/codex/issues/14345) | `--dangerously-bypass-approvals-and-sandbox` regression | **OPEN** | Directories no longer trusted by default even with bypass flag; breaks automation workflows | 8 comments |

---

## 4. Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [#14529](https://github.com/openai/codex/pull/14529) | Simplify permissions available in request permissions tool | Restricts `request_permissions` to filesystem and network scopes only; security hardening |
| [#14512](https://github.com/openai/codex/pull/14512) | Start TUI on embedded app server | Major architecture migration: TUI moving to app-server foundation; staged implementation |
| [#14533](https://github.com/openai/codex/pull/14533) | app-server: add filesystem watch support | v2 RPCs for file watching with `notify`-backed delivery; enables reactive tooling |
| [#14245](https://github.com/openai/codex/pull/14245) | app-server: add v2 filesystem APIs | Core fs surface (read/write/mkdir/metadata) for v2 protocol; reduces host-specific dependencies |
| [#14532](https://github.com/openai/codex/pull/14532) | [hooks] proper stop_hook_active mechanics | Enables stop hooks to loop indefinitely; fixes initial limitation of single blocking invocation |
| [#14531](https://github.com/openai/codex/pull/14531) | Add plugin usage telemetry | Metrics for plugin install/uninstall/enable/disable; observability foundation |
| [#14526](https://github.com/openai/codex/pull/14526) | code mode: single line tool declarations | UX improvement: inline TypeScript-style tool declarations in code mode |
| [#14527](https://github.com/openai/codex/pull/14527) | app-server: Add platform os and family to init response | Enables client-side OS-specific behavior (path separators, etc.) |
| [#14178](https://github.com/openai/codex/pull/14178) | login: add custom CA support for login flows | Enterprise TLS: custom certificate authority support for browser/device-code auth |
| [#14511](https://github.com/openai/codex/pull/14511) | code_mode: Move exec params from runtime declarations to @pragma | Configuration via `// @exec:` pragmas rather than runtime API calls; cleaner model-generated code |

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Event/Hook System** | [#2109](https://github.com/openai/codex/issues/2109) (493 👍) | Very high — longest-running top request |
| **Remote Development** | [#10450](https://github.com/openai/codex/issues/10450) (325 👍) | High — parity with VS Code expected |
| **Platform Parity (Intel Mac, Windows)** | [#10410](https://github.com/openai/codex/issues/10410), [#13699](https://github.com/openai/codex/issues/13699), [#13762](https://github.com/openai/codex/issues/13762) | High — blocking enterprise adoption |
| **Session Management** | [#14076](https://github.com/openai/codex/issues/14076) (`/archive` command) | Moderate — workflow organization |
| **TUI Customization** | [#1618](https://github.com/openai/codex/issues/1618) (closed, 104 👍) | Addressed; theme control now available |

---

## 6. Developer Pain Points

| Issue | Frequency | Impact |
|-------|-----------|--------|
| **Rate limit accounting & resets** | 3+ high-engagement issues (#13568, #14329, #14349) | Critical — paid users report unexplained drops, missing resets; trust erosion |
| **Context compaction failures** | 2+ issues (#5957, #14346) | High — breaks long agent sessions; "loses the plot" |
| **Windows/WSL path handling** | 4+ issues (#13699, #13762, #13965, #14079, #14423) | High — sandbox spawning, config location, file path rendering all broken |
| **Authentication edge cases** | Multiple (#5673, #10466, #14148, #14331) | High — device code vs. browser flows, token exchange 403s, paid tier entitlement bugs |
| **Sandbox/tool provisioning inconsistencies** | [#14140](https://github.com/openai/codex/issues/14140), [#14345](https://github.com/openai/codex/issues/14345) | Moderate-High — tools missing across sessions, bypass flags regressing |

---

*Digest compiled from github.com/openai/codex activity 2026-03-12 to 2026-03-13.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-13

## Today's Highlights

Google shipped three patch releases in 24 hours to stabilize the v0.33 and v0.34 preview branches, addressing cherry-pick conflicts and build pipeline issues. The community is actively surfacing UI/UX friction around scrolling behavior and terminal resizing, while the maintainers are driving an ambitious "Session Continuity" epic to solve long-running context degradation. A critical new regression emerged affecting Google One AI Ultra subscribers via OAuth authentication.

---

## Releases

| Version | Summary |
|---------|---------|
| **v0.34.0-preview.2** | Patch release resolving merge conflicts from cherry-picked commit `8432bce` onto the v0.34.0-preview.1 branch. [→ Release](https://github.com/google-gemini/gemini-cli/pull/22205) |
| **v0.34.0-preview.1** | Initial patch for v0.34.0-preview.0 with conflict resolution for commit `45faf4d`. [→ Release](https://github.com/google-gemini/gemini-cli/compare/v0.34.0-preview.0...v0.34.0-preview.1) |
| **v0.33.1** | Stable patch backporting `8432bce` to v0.33.0 for users not on preview channels. [→ Release](https://github.com/google-gemini/gemini-cli/compare/v0.33.0...v0.33.) |

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#21712](https://github.com/google-gemini/gemini-cli/issues/21712) | Broken documentation link in "Packaging as an extension" | Affects developer onboarding for extension authors; 17 comments indicate broad impact | High engagement, fix PR already opened |
| [#21925](https://github.com/google-gemini/gemini-cli/issues/21925) | False "action required" hand icon on long-running shell scripts | Core UX credibility issue—users learn to ignore real signals | 5 comments, maintainer-tagged |
| [#18030](https://github.com/google-gemini/gemini-cli/issues/18030) | API calls hang for 5 minutes without retry | P1 priority; fundamental reliability gap in network resilience | Long-running, 3 comments, +1 |
| [#22215](https://github.com/google-gemini/gemini-cli/issues/22215) | UI snaps to top of plan while reading | Plan Mode is a flagship feature; this breaks usability for review workflows | Fresh report, 2 comments |
| [#22028](https://github.com/google-gemini/gemini-cli/issues/22028) | CLI scrolls to top on any click in VS Code | Terminal integration friction affecting daily IDE workflows | 2 comments, video repro attached |
| [#21792](https://github.com/google-gemini/gemini-cli/issues/21792) | Epic: Session Continuity and Coherence | Strategic roadmap item for long-running agent sessions; addresses context window limits | Epic format, 2 comments, maintainer-authored |
| [#22241](https://github.com/google-gemini/gemini-cli/issues/22241) | **NEW:** Hangs on all API calls with Google One AI Ultra (OAuth) | **Critical regression**—complete service breakage for paid subscribers as of March 13 | Zero comments yet, needs immediate triage |
| [#21461](https://github.com/google-gemini/gemini-cli/issues/21461) | Shell command doesn't support aliases | Power user workflow blocker; shell fidelity gap | 2 comments, performance concerns noted |
| [#22191](https://github.com/google-gemini/gemini-cli/issues/22191) | Plan Mode broken with ACP | Agent-to-Agent Protocol integration gap; blocks automation use cases | Fresh, zero comments, +1 |
| [#22176](https://github.com/google-gemini/gemini-cli/issues/22176) | CJK (Korean) input failure on Windows | Internationalization blocker; Windows Terminal compatibility | Zero comments, help-wanted tagged |

---

## Key PR Progress

| # | PR | Feature/Fix | Status |
|---|-----|-------------|--------|
| [#22243](https://github.com/google-gemini/gemini-cli/pull/22243) | Fix broken link in "Packaging as an extension" | Community fix for #21712 documentation bug | Open |
| [#21212](https://github.com/google-gemini/gemini-cli/pull/21212) | Refreshed UX for Composer layout | Promotes modern 2-row status/footer to default; major UI modernization | Open, P1 |
| [#21179](https://github.com/google-gemini/gemini-cli/pull/21179) | Configure Windows PowerShell for UTF-8 output | Fixes encoding issues in Windows shell tool integration | Open, help-wanted |
| [#16131](https://github.com/google-gemini/gemini-cli/pull/16131) | Clear invalid preferredEditor instead of spamming | UX fix for unrecoverable error loops | Open, help-wanted |
| [#22060](https://github.com/google-gemini/gemini-cli/pull/22060) | Return TodoList display for tracker tools | Deepens task tracker integration with native UI rendering | Open |
| [#21935](https://github.com/google-gemini/gemini-cli/pull/21935) | Configuration-based tool isolation for subagents | Enables security/privacy boundaries between agent hierarchies | Open |
| [#22230](https://github.com/google-gemini/gemini-cli/pull/22230) | Adjust ToolGroupMessage filtering | Fixes duplicate rendering and cancel cascade for parallel tool calls | Open |
| [#16991](https://github.com/google-gemini/gemini-cli/pull/16991) | OSC-8 hyperlink support for OAuth URLs | Fixes mangled OAuth URLs in terminal selection/copying | Open, P1/P2 |
| [#21404](https://github.com/google-gemini/gemini-cli/pull/21404) | A2A secure acknowledgment and registry improvements | Trust validation and idempotent client management for agent discovery | Open |
| [#19025](https://github.com/google-gemini/gemini-cli/pull/19025) | `/mcp remove` slash command | Interactive MCP server management without session exit | Open, help-wanted |

---

## Feature Request Trends

1. **Context & Memory Architecture** — Dominant theme across 6+ issues: compression thresholds (#21888), guided compression (#21892), stale output elision (#21891), auto-distillation (#21889), checkpoint flexibility (#21920), and JIT memory loading (#22057). The team is building toward "infinite" session continuity.

2. **Agent Self-Awareness & Tooling** — Requests for accurate CLI flag knowledge (#21432), skill auto-creation (#21421), and tool isolation (#21901, #21935) show demand for more autonomous, configurable agent behavior.

3. **Terminal UI Polish** — Resize performance (#21924), full terminal height utilization (#22187), and startup optimization (#22116) indicate the TUX layer is maturing but needs hardening.

4. **Windows & Internationalization** — CJK input (#22176) and PowerShell encoding (#21179) signal growing non-Linux user base requiring first-class support.

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Scrolling/Focus Management** | Snap-to-top behavior in plans (#22215, #22028), click hijacking in VS Code | 3+ related issues in 24h |
| **Authentication & API Reliability** | OAuth hangs (#22241, #18030), 5-minute timeouts without retry | Critical regression + chronic issue |
| **Shell Fidelity Gaps** | No alias support (#21461), encoding issues (#22176, #21179) | Recurring platform-specific gaps |
| **Plan Mode Fragility** | Broken in ACP (#22191), UI truncation (#22215), missing hooks (resolved in #22197) | Core workflow under stress |
| **Documentation Accuracy** | Broken links (#21712, #22236), unclear tool configuration (#18813) | Onboarding friction |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-13

## Today's Highlights

GitHub shipped **v1.0.5-0** with built-in version checking, experimental embedding-based MCP retrieval, and syntax-highlighted diffs across 17 languages. Meanwhile, the community's longest-running grievance—[#53](https://github.com/github/copilot-cli/issues/53) demanding restoration of the original `gh copilot` CLI commands—hit 30 comments and 72 upvotes, with users now maintaining forks like `shell-ai` after six months of silence from GitHub.

---

## Releases

**[v1.0.5-0](https://github.com/github/copilot-cli/releases/tag/v1.0.5-0)** — *2026-03-12*

| Change | Impact |
|--------|--------|
| `/version` command | Check for updates without leaving your session |
| Experimental embedding-based MCP/skill retrieval | Per-turn dynamic context loading for agent workflows |
| Syntax highlighting in `/diff` | 17 languages supported, improving code review readability |
| `preCompact` hook | Custom preprocessing before context compaction |

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#53](https://github.com/github/copilot-cli/issues/53) | Bring back `gh copilot` CLI commands | **Workflow breakage** — the standalone CLI replaced the GitHub CLI extension, breaking CI/CD and muscle memory for thousands | 🔥 30 comments, 72 👍; community fork `shell-ai` emerging |
| [#1048](https://github.com/github/copilot-cli/issues/1048) | Allow `--reasoning-effort` via CLI | **Closed** — enables GPT-5.2 reasoning control in non-interactive mode; critical for automation | 9 comments, 30 👍; shipped |
| [#768](https://github.com/github/copilot-cli/issues/768) | Disable MCP servers by default | **Cost control** — MCP servers burn tokens; users want opt-in, not opt-out | 4 comments, 22 👍 |
| [#892](https://github.com/github/copilot-cli/issues/892) | Sandbox mode for file access | **Security** — prevents agents from escaping workspace boundaries; enterprise blocker | 3 comments, 18 👍; tagged `priority: medium, effort: large` |
| [#1599](https://github.com/github/copilot-cli/issues/1599) | UI flicker/stutter during streaming | **UX degradation** — rendering jitter makes real-time reading painful | 5 comments, 6 👍 |
| [#254](https://github.com/github/copilot-cli/issues/254) | Repeated re-authentication prompts | **Reliability** — session persistence broken for GitHub Business users | 5 comments; `unable-to-reproduce` needs data |
| [#1095](https://github.com/github/copilot-cli/issues/1095) | BYOK (Bring Your Own Key) model support | **Flexibility** — users want Grok 4.1, 1M token windows beyond Copilot's model set | 3 comments, 3 👍 |
| [#1723](https://github.com/github/copilot-cli/issues/1723) | `/ide` fails in VS Code | **Integration gap** — fresh macOS installs can't connect to IDE workspace | 3 comments, 1 👍 |
| [#1842](https://github.com/github/copilot-cli/issues/1842) | Tmux scrolling broken | **Terminal compatibility** — long responses unreadable in multiplexed sessions | 3 comments, 1 👍 |
| [#1999](https://github.com/github/copilot-cli/issues/1999) | German keyboard `@` input broken | **I18n regression** — Alt-Gr+Q produces nothing; CLI unusable for DE layout users | 1 comment; reported since v1.0.2 |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2004](https://github.com/github/copilot-cli/pull/2004) | Alter PATH for login shells, not interactive shells | Fixes `.bashrc` PATH pollution causing duplicate entries in nested shells; resolves [#2001](https://github.com/github/copilot-cli/issues/2001) | ✅ **Merged** |
| *(no other PRs active)* | — | — | — |

*Note: Only 1 PR updated in the last 24h. The repository shows low external contribution velocity relative to issue volume.*

---

## Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Model flexibility** | [#1048](https://github.com/github/copilot-cli/issues/1048) (reasoning effort), [#1095](https://github.com/github/copilot-cli/issues/1095) (BYOK), [#2006](https://github.com/github/copilot-cli/issues/2006) (default model preference) | Users want CLI parity with API control surfaces |
| **Cost & token management** | [#768](https://github.com/github/copilot-cli/issues/768) (disable MCP), [#1881](https://github.com/github/copilot-cli/issues/1881) (overage visibility), [#2008](https://github.com/github/copilot-cli/issues/2008) (preemptive compaction) | Enterprise users hitting budget walls |
| **Session portability** | [#1915](https://github.com/github/copilot-cli/issues/1915) (`/new` without clear), [#1978](https://github.com/github/copilot-cli/issues/1978) (config sync with IntelliJ), [#2011](https://github.com/github/copilot-cli/issues/2011) (multi-repo) | IDE↔CLI workflow continuity gaps |
| **Input & accessibility** | [#1276](https://github.com/github/copilot-cli/issues/1276) (image paste), [#1999](https://github.com/github/copilot-cli/issues/1999) (keyboard layouts), [#1989](https://github.com/github/copilot-cli/issues/1989) (paste targeting) | Rich media and internationalization lag |

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Terminal state corruption** | [#2009](https://github.com/github/copilot-cli/issues/2009) (broken shortcuts after quit), [#1599](https://github.com/github/copilot-cli/issues/1599)/[#1811](https://github.com/github/copilot-cli/issues/1811) (flicker), [#1842](https://github.com/github/copilot-cli/issues/1842) (Tmux scroll) | **High** — TUI reliability regressions across terminal emulators |
| **Authentication fragility** | [#254](https://github.com/github/copilot-cli/issues/254) (re-login loops), session file corruption ([#2012](https://github.com/github/copilot-cli/issues/2012), [#2000](https://github.com/github/copilot-cli/issues/2000)) | **High** — session persistence is brittle |
| **Breaking changes without migration** | [#53](https://github.com/github/copilot-cli/issues/53) (CLI replacement), VS Code crashes ([#1984](https://github.com/github/copilot-cli/issues/1984)) | **Chronic** — GitHub's communication gap fueling fork ecosystem |
| **Context window limits** | [#2008](https://github.com/github/copilot-cli/issues/2008) (CAPIError 400), [#2012](https://github.com/github/copilot-cli/issues/2012) (JSON parse failures on resume) | **Growing** — long-session users hitting architectural limits |

---

*Digest compiled from github.com/github/copilot-cli activity 2026-03-12.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-13

---

## 1. Today's Highlights

Version 1.21.0 shipped with enhanced platform setup including API key verification and improved onboarding UX. The team merged critical fixes for HTTP header sanitization that had been causing connection errors on Linux systems. Multiple PRs addressing WebSocket stability and in-turn agent steering landed, indicating active investment in reliability and interactive control.

---

## 2. Releases

### [v1.21.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.21.0) — 2026-03-12

| Change | Description |
|--------|-------------|
| **feat(setup)** | Enhanced platform setup with API key verification, loading spinner, and success summary showing platform/model/thinking mode selection |
| **feat(vis)** | Added session directory actions ("Open Dir", "Copy DIR") and Windows support for `open-in` command |
| **feat(shell)** | In-turn steer input allowing users to send follow-up guidance while agent turns are still running |

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters |
|---|-------|--------|--------------|
| [#1383](https://github.com/MoonshotAI/kimi-cli/issues/1383) | Multi-agent rate limiting despite membership | **OPEN** | User reports API rate limits when running concurrent agents, suggesting gap between marketed "multi-agent" benefits and actual quota enforcement. 5 comments, no maintainer response yet. |
| [#1420](https://github.com/MoonshotAI/kimi-cli/issues/1420) | Web mode fails to render inline formulas | **OPEN** | Math rendering regression affecting documentation workflows. Filed today, no engagement. |
| [#1414](https://github.com/MoonshotAI/kimi-cli/issues/1414) | Request: YOLO mode toggle in permission dialogs | **OPEN** | UX friction: users want one-click escalation to auto-approve mode instead of repeated confirmations. |
| [#1413](https://github.com/MoonshotAI/kimi-cli/issues/1413) | AskUserQuestion tool broken on last option | **CLOSED** | Terminal UI bug where final option became unselectable—fixed rapidly (same-day closure). |
| [#1412](https://github.com/MoonshotAI/kimi-cli/issues/1412) | Add kimi-code API key login support | **CLOSED** | Authentication gap closed; enables direct API key workflows without OAuth. |
| [#1227](https://github.com/MoonshotAI/kimi-cli/issues/1227) | LLM provider connection errors | **CLOSED** | Root-caused to header sanitization issues; fix merged via related PRs. |

*Note: Only 6 issues updated in 24h; table includes all significant items.*

---

## 4. Key PR Progress

| # | PR | Author | Status | Feature/Fix |
|---|-----|--------|--------|-------------|
| [#1422](https://github.com/MoonshotAI/kimi-cli/pull/1422) | Support steering running agent turns | @RealKai42 | **MERGED** | Adds `SteerInput` for real-time guidance during agent execution; persists as follow-up messages |
| [#1421](https://github.com/MoonshotAI/kimi-cli/pull/1421) | Treat dismissed questions as errors | @howardpen9 | **OPEN** | Prevents silent continuation when users dismiss plan mode prompts without answering |
| [#1419](https://github.com/MoonshotAI/kimi-cli/pull/1419) | Stabilize WebSocket connections | @howardpen9 | **OPEN** | Fixes reconnection storms caused by unstable callback dependencies in web mode |
| [#1417](https://github.com/MoonshotAI/kimi-cli/pull/1417) | Persist system prompt in context.jsonl | @RealKai42 | **MERGED** | Enables visualization tools to reconstruct full conversation context; preserves frozen prompts on restore |
| [#1416](https://github.com/MoonshotAI/kimi-cli/pull/1416) | Session dir actions + Windows open-in | @RealKai42 | **MERGED** | Cross-platform session directory management; closes UX gap for Windows users |
| [#1415](https://github.com/MoonshotAI/kimi-cli/pull/1415) | Enhanced setup with API key verification | @RealKai42 | **MERGED** | Addresses #1412; adds 401 hint for platform misconfiguration |
| [#1411](https://github.com/MoonshotAI/kimi-cli/pull/1411) | Fix inverted usage bar colors | @xbotter | **OPEN** | Corrects progress bar logic: now red at 90%+ usage, green at low usage |
| [#1410](https://github.com/MoonshotAI/kimi-cli/pull/1410) | Strip HTTP-unsafe characters from headers | @howardpen9 | **OPEN** | Extends header sanitization to handle `#` characters in kernel version strings |
| [#1384](https://github.com/MoonshotAI/kimi-cli/pull/1384) | Sanitize HTTP header newlines | @DRunkPiano114 | **OPEN** | Fixes `h11` rejection of trailing newlines in `platform.version()` on Ubuntu 22.04 HWE |
| [#1236](https://github.com/MoonshotAI/kimi-cli/pull/1236) | Enable trust_env in aiohttp | @CyCle1024 | **OPEN** | Respects proxy environment variables for enterprise/CI environments |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Frictionless authentication** | #1412 (merged), #1415 | ✅ Addressed |
| **YOLO/Auto-approve workflows** | #1414 | 🔄 Pending |
| **Real-time agent control** | #1422 (steering), #1421 (dismissal handling) | ✅ Active development |
| **Cross-platform parity** | #1416 (Windows), #1384 (Linux headers) | 🔄 In progress |
| **Web visualization robustness** | #1420 (math), #1419 (WebSocket), #1417 (context persistence) | 🔄 Mixed |

---

## 6. Developer Pain Points

| Issue | Frequency | Status |
|-------|-----------|--------|
| **HTTP header sanitization** | 4+ PRs (#1361, #1229, #1265, #1384, #1410) | 🔥 Critical mass; fixes landing but fragmented |
| **Connection instability** | #1227, #1419, #1236 | 🔄 Partially resolved |
| **Rate limit transparency** | #1383 | ⚠️ Unacknowledged |
| **Permission fatigue** | #1414 | 🔄 Feature request stage |
| **Platform/version detection edge cases** | Multiple Linux kernel string issues | 🔥 Root cause: `platform.version()` variability |

**Pattern**: Linux distribution diversity (kernel version formatting, trailing whitespace/newlines) is a recurring source of production incidents. Recommend centralized header sanitization utility with comprehensive test matrix.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-13

---

## 1. Today's Highlights

OpenCode shipped **v1.2.25** with critical type safety improvements and Azure model support, while the community grapples with a high-impact Copilot billing issue where agent-initiated requests are incorrectly consuming premium quotas. Memory management and TUI reliability dominate PR activity, with multiple fixes landing for serve-mode disposal, clipboard handling, and message ordering edge cases.

---

## 2. Releases

### [v1.2.25](https://github.com/anomalyco/opencode/releases/tag/v1.2.25)

| Category | Changes |
|----------|---------|
| **Providers** | Support for non-OpenAI Azure models using completions endpoints |
| **Type Safety** | Branded types for `ProviderID`, `ModelID`, `PermissionID`, `PtyID`, `Quest` to prevent mixing identifiers |
| **Build** | Removed external sourcemap generation to reduce artifact size |

The branding changes represent significant internal refactoring to harden the type system against runtime errors.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#8030](https://github.com/anomalyco/opencode/issues/8030) | Copilot auth misclassifies agent requests as "user" | **Critical billing impact**: Users report 60+ agent requests consuming half their monthly quota in minutes. Affects cost control for all Copilot users. | 172 comments, 58 👍 — highest engagement |
| [#4283](https://github.com/anomalyco/opencode/issues/4283) | Copy to clipboard broken in opentui | Fundamental UX breakage; text selection without copy breaks common workflows. Persists across versions. | 65 comments, 50 👍 |
| [#988](https://github.com/anomalyco/opencode/issues/988) | MCP remote via OAuth | **Closed** — enables secure, secret-free MCP server installation. Major DX improvement for enterprise adoption. | 35 comments, 78 👍 |
| [#4340](https://github.com/anomalyco/opencode/issues/4340) | Windows ARM64 support | **Closed** — unblocks Surface Pro X and Windows on ARM devices, expanding addressable market. | 28 comments, 23 👍 |
| [#6651](https://github.com/anomalyco/opencode/issues/6651) | Dynamic model selection for subagents | Allows Task tool to specify models per-subagent, enabling cost/performance optimization in agent hierarchies. | 18 comments, 24 👍 |
| [#12661](https://github.com/anomalyco/opencode/issues/12661) | Agent Teams equivalent | Community seeking Claude Code parity for multi-agent orchestration. High strategic value for complex workflows. | 16 comments, 86 👍 — strong demand signal |
| [#9674](https://github.com/anomalyco/opencode/issues/9674) | `<tool_call>` tag rendering fails | Breaks long conversation sessions with Oh My Open Code plugin; interrupts automation reliability. | 12 comments, 7 👍 |
| [#8463](https://github.com/anomalyco/opencode/issues/8463) | `--dangerously-skip-permissions` flag | "YOLO mode" for CI/trusted environments — eliminates interactive friction for automation use cases. | 4 comments, 18 👍 |
| [#17252](https://github.com/anomalyco/opencode/issues/17252) | Large files cause OOM in git tool | Memory safety issue: 200MB+ files balloon session memory when tracked; affects monorepo users. | 2 comments |
| [#7654](https://github.com/anomalyco/opencode/issues/7654) | Nested sub-agent questions invisible in TUI | UI/UX gap: deeply nested agents hang waiting for user input that never appears. Breaks complex agent trees. | 3 comments, 5 👍 |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#17263](https://github.com/anomalyco/opencode/pull/17263) | Increase CI e2e workers | Bumps Playwright to 5 workers in CI for faster feedback; preserves local behavior | Open |
| [#13004](https://github.com/anomalyco/opencode/pull/13004) | Custom session ID support | Allows `POST /session {"id": "ses_..."}` for external orchestration systems | Open |
| [#16616](https://github.com/anomalyco/opencode/pull/16616) | Idle timeout Instance disposal | Fixes serve-mode memory leaks from ~26 background tasks per workspace | Open |
| [#16544](https://github.com/anomalyco/opencode/pull/16544) | Harden disposal recovery | Prevents blank screens/infinite retries when backend Instance restarts | Open |
| [#17261](https://github.com/anomalyco/opencode/pull/17261) | Tool call newline formatting | Fixes [#17253](https://github.com/anomalyco/opencode/issues/17253): tool calls fail without leading newline | Open |
| [#17256](https://github.com/anomalyco/opencode/pull/17256) | Index-based message ordering | Eliminates clock-skew bugs in message sorting; hardens prompt loop exit logic | Open |
| [#17258](https://github.com/anomalyco/opencode/pull/17258) | Linux clipboard error handling | Surfaces clipboard failures instead of silent swallow; adds Nix dependencies | Open |
| [#17104](https://github.com/anomalyco/opencode/pull/17104) | `OPENCODE_WEB_URL` override | Enables local frontend development by overriding `app.opencode.ai` proxy | Open |
| [#16601](https://github.com/anomalyco/opencode/pull/16601) | Last-wins auth override | User plugins now override built-in auth; fixes plugin precedence bugs | Open |
| [#12520](https://github.com/anomalyco/opencode/pull/12520) | MCP search tool for lazy loading | On-demand MCP server discovery instead of eager loading; improves startup performance | Open |

---

## 5. Feature Request Trends

| Theme | Evidence | Implication |
|-------|----------|-------------|
| **OAuth-native authentication** | [#988](https://github.com/anomalyco/opencode/issues/988) (MCP), [#10279](https://github.com/anomalyco/opencode/issues/10279) (iFlow), [#12258](https://github.com/anomalyco/opencode/issues/12258) (Copilot token flow) | Movement away from API keys toward secure, ephemeral credentials |
| **Agent orchestration primitives** | [#12661](https://github.com/anomalyco/opencode/issues/12661) (Agent Teams), [#6651](https://github.com/anomalyco/opencode/issues/6651) (dynamic subagent models) | Users building complex multi-agent systems need first-class composition tools |
| **TUI/UX refinements** | [#17250](https://github.com/anomalyco/opencode/issues/17250) (per-tool output visibility), [#17209](https://github.com/anomalyco/opencode/issues/17209) (clickable file paths), [#17148](https://github.com/anomalyco/opencode/issues/17148) (theme fixes) | Desktop experience maturation; polish gaps becoming priority |
| **Automation/headless modes** | [#8463](https://github.com/anomalyco/opencode/issues/8463) (skip permissions), [#16805](https://github.com/anomalyco/opencode/issues/16805) (plan mode bash escape) | CI/CD integration driving need for non-interactive, deterministic behavior |

---

## 6. Developer Pain Points

| Pain Point | Manifestations | Severity |
|------------|---------------|----------|
| **Cost control opacity** | [#8030](https://github.com/anomalyco/opencode/issues/8030) (Copilot billing), [#12219](https://github.com/anomalyco/opencode/issues/12219) (OpenRouter credit errors) | **Critical** — directly impacts production usage economics |
| **Memory/performance at scale** | [#17252](https://github.com/anomalyco/opencode/issues/17252) (large file OOM), [#16616](https://github.com/anomalyco/opencode/issues/13041) (serve-mode leaks) | High — affects long-running sessions and monorepo workflows |
| **Clipboard/TUI reliability** | [#4283](https://github.com/anomalyco/opencode/issues/4283), [#909](https://github.com/anomalyco/opencode/issues/909), [#17257](https://github.com/anomalyco/opencode/issues/17257) | Medium-High — daily friction for all users |
| **Windows parity gaps** | [#4340](https://github.com/anomalyco/opencode/issues/4340) (ARM64), [#9674](https://github.com/anomalyco/opencode/issues/9674), [#16218](https://github.com/anomalyco/opencode/issues/16218) (rendering bugs) | Medium — platform-specific instability |
| **Permission system friction** | [#8463](https://github.com/anomalyco/opencode/issues/8463), [#17196](https://github.com/anomalyco/opencode/issues/17196) (sleep recovery), [#16805](https://github.com/anomalyco/opencode/issues/16805) (bash escapes) | Medium — security UX balance needs tuning |

---

*Digest compiled from github.com/anomalyco/opencode — 50 issues and 50 PRs analyzed.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-03-13

---

## 1. Today's Highlights

Qwen Code shipped **v0.12.2** with a critical fix for session export reliability and expanded code ownership for the VSCode companion and WebUI components. The community is actively stress-testing the new release, with multiple connectivity and Windows-specific issues surfacing in the past 24 hours. Meanwhile, significant architectural work is underway on event hooks, subagent runtime controls, and MCP UX improvements.

---

## 2. Releases

### [v0.12.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.12.2) (Stable)
| Change | Impact |
|--------|--------|
| `export` command now uses current session ID instead of `loadLastSession` | Fixes data loss risk when exporting active sessions |
| Added @yiliang114 as code owner for `vscode-ide-companion` and `webui` | Formalizes maintenance responsibility for IDE integration |

**Also released:** `v0.12.2-preview.0` and `v0.12.1-nightly.20260312.2a836639` with identical changes.

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#2101](https://github.com/QwenLM/qwen-code/issues/2101) Space button input failure (Windows) | Core input regression affecting basic usability; 10 comments show active debugging | 5 👍, resolved with retest tag |
| [#2261](https://github.com/QwenLM/qwen-code/issues/2261) `write_file` silent failure on Windows x64 | Data integrity risk—commands succeed but files don't persist | 8 comments, confirmed reproducible |
| [#2279](https://github.com/QwenLM/qwen-code/issues/2279) VSCode Companion 0.12.0 connection spinning | Blocks IDE integration entirely; "Preparing Qwen Code..." infinite loop | 3 comments, no resolution yet |
| [#2306](https://github.com/QwenLM/qwen-code/issues/2306) Crash on "always allow" command execution | Regression in v0.12.0 trust flow—immediate exit to terminal | 2 comments, severity unclear |
| [#2191](https://github.com/QwenLM/qwen-code/issues/2191) DashScope 429 rate limiting (3+ days) | External API dependency causing sustained service degradation | 7 comments, 2 👍, needs backend coordination |
| [#1985](https://github.com/QwenLM/qwen-code/issues/1985) Missing Plan Mode toggle in VSCode Companion | Feature parity gap between CLI and IDE; blocks workflow adoption | 4 comments, active discussion |
| [#2325](https://github.com/QwenLM/qwen-code/issues/2325) Enhanced `@` mention (folders, fuzzy search) | High-value UX improvement for context management | 2 comments, fresh request |
| [#2338](https://github.com/QwenLM/qwen-code/issues/2338) Skills auto-activation confusion | Documentation/UX gap—users expect automatic skill triggering | 2 comments, needs clarification |
| [#2254](https://github.com/QwenLM/qwen-code/issues/2254) QR code flickering in Windows PowerShell | Visual regression affecting OAuth flow | 1 comment, duplicate of fixed PR |
| [#2319](https://github.com/QwenLM/qwen-code/issues/2319) Unbounded file reads in large directories (10k+ files) | Context overflow/cost risk; no pagination on directory listing | 1 comment, performance concern |

---

## 4. Key PR Progress

| PR | Feature/Fix | Technical Significance |
|----|-------------|------------------------|
| [#2337](https://github.com/QwenLM/qwen-code/pull/2337) Subagent context & token budget controls | Runtime resource governance for agent hierarchies—enables safe delegation |
| [#2330](https://github.com/QwenLM/qwen-code/pull/2330) Browser-based CLI remote control | HTTP+WebSocket bridge with secure token auth; opens headless/CI use cases |
| [#2327](https://github.com/QwenLM/qwen-code/pull/2327) MCP OAuth UX overhaul | Post-auth feedback, i18n, clear-auth—reduces integration friction |
| [#2322](https://github.com/QwenLM/qwen-code/pull/2322) IDE connection fixes for cloud environments | Targets GitHub Codespaces and code-server compatibility gaps |
| [#2203](https://github.com/QwenLM/qwen-code/pull/2203) 10 core event hooks (v0.13.0) | Extensibility foundation: session lifecycle, tool execution, notifications |
| [#2328](https://github.com/QwenLM/qwen-code/pull/2328) Export metadata & statistics | Telemetry-ready output with token usage, git state, file operation counts |
| [#2320](https://github.com/QwenLM/qwen-code/pull/2320) DeepSeek API array-to-string conversion | Provider compatibility fix—resolves 400 deserialization errors |
| [#2324](https://github.com/QwenLM/qwen-code/pull/2324) LS tool output truncation | Prevents context explosion in large directories |
| [#2315](https://github.com/QwenLM/qwen-code/pull/2315) Remove QR code from OAuth UI | Eliminates Windows terminal flickering (merged) |
| [#1912](https://github.com/QwenLM/qwen-code/pull/1912) Agent collaboration arena (v0.13.0) | Multi-model competitive execution with git worktree isolation |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **IDE parity with CLI** | #1985 (Plan Mode), #2325 (@ mentions), #1934 (drag-drop files) | High—VSCode Companion is lagging core features |
| **Context management controls** | #2337 (subagent budgets), #2324 (LS truncation), #2319 (file read limits) | High—scaling to large codebases |
| **MCP ecosystem robustness** | #2327 (OAuth UX), #2316 (reconnect CLI), #1106 (Bailian integration) | Medium—stabilizing external tool integration |
| **Output/UX customization** | #2336 (disable loading animations), #281 (terminal color contrast) | Medium—power user polish |
| **Clipboard & media workflows** | #1951 (screenshot paste), #1934 (drag-drop) | Low but persistent |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Windows stability** | Input failures (#2101), file write silent failures (#2261), terminal rendering (#2254, #281), crashes on permission flows (#2306) | **Critical**—dominates recent issues |
| **VSCode Companion reliability** | Connection spinning (#2279, #2314), session creation failures (#2297), missing CLI parity features | **High**—blocks IDE-centric workflows |
| **External API fragility** | DashScope 429s (#2191, #2146, #2217), DeepSeek deserialization (#2318, #2158) | **Medium**—provider-specific but recurring |
| **Context/cost control** | Unbounded directory reads (#2319), lack of token visibility (#2336, #2328) | **Medium**—emerging at scale |
| **Skills system discoverability** | Auto-activation confusion (#2338), @-mention limitations (#2309, #2325) | **Low-Medium**—documentation and UX gaps |

---

*Digest compiled from 47 issues and 21 PRs updated 2026-03-12.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*