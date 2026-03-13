# AI CLI Tools Community Digest 2026-03-07

> Generated: 2026-03-07 00:07 UTC | Tools covered: 7

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

# AI CLI Tools Cross-Analysis Report — March 7, 2026

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured into a competitive, multi-polar market with seven actively maintained players. Open standards pressure is intensifying—AGENTS.md/CLAUDE.md fragmentation dominates Claude Code's agenda while Qwen Code and others rush to adopt interoperable conventions. Memory management and deterministic automation have emerged as universal architectural challenges, with every major tool reporting long-session instability or resource exhaustion issues. The Rust-rewrite trend (Codex) and Bun-to-Node migration (OpenCode) signal infrastructure hardening priorities. Enterprise readiness—security controls, proxy support, and auditability—now separates production-viable tools from experimental offerings.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases | Release Velocity | Notable Activity |
|------|:-----------:|:---------:|:--------:|:----------------:|----------------|
| **Claude Code** | 10+ tracked | 10 open | v2.1.70 hotfix | Steady | Highest-ever voted issue (3,055 👍) on AGENTS.md standard |
| **OpenAI Codex** | 10+ tracked | 10 active | 7 alphas (v0.112.0) | **Extreme** | Rapid-fire stabilization push; 10-PR sandbox policy rebuild |
| **Gemini CLI** | 10 tracked | 10 open | v0.34.0 nightly, v0.33.0-preview.4 | Active | P1 verbosity reduction epic (6 issues) |
| **GitHub Copilot CLI** | 10 tracked | 0 visible | v1.0.2 GA, v0.0.423 | Post-GA stabilization | 1.0 milestone reached; security patches same-day |
| **Kimi CLI** | 7 tracked | 3 open | None | Quiet | Focused bugfix mode; auth/WebSocket reliability |
| **OpenCode** | 50 tracked | 50 active | v1.2.19–v1.2.20 | **Very High** | Bun→Node migration; memory leak fixes |
| **Qwen Code** | 10 tracked | 10 open | v0.12.0-preview.0, nightly | Active | Windows CRLF fixes; @echoVic polish sprint |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Open agent configuration standards** | Claude Code, Qwen Code, Kimi CLI | AGENTS.md adoption (#6235, #2155, #1356); escape vendor lock-in; skill portability across Claude/Cursor/Windsurf |
| **Deterministic/non-interactive modes** | Claude Code, Gemini CLI, OpenCode | CI/CD pipeline support (#30435, #21433, #8089); suppress safety prompts; headless verbosity control |
| **Memory/session management** | All seven tools | Long-running task continuity (#13354, #2128, #5363, #2036); conditional compaction; unbounded history growth |
| **MCP ecosystem maturity** | Claude Code, Copilot CLI, OpenCode, Gemini CLI | Server lifecycle stability (#20412, #13898); OAuth support (#33); configuration portability; deduplication (#13041) |
| **Enterprise network/proxy support** | Codex, Qwen Code, Kimi CLI | `no_proxy` handling (#756); corporate proxy traversal; SSH/headless DNS resolution (#1293) |
| **Fine-grained security controls** | Codex, OpenCode, Claude Code | `.codexignore`/`.env` exclusion (#2847); permission system hardening (#16331, #6527); mTLS (#14696) |
| **Cross-platform parity** | Codex, Copilot CLI, Qwen Code, OpenCode | Windows/WSL stability (#1164, #13148); Intel macOS support (#10410); CRLF/BOM handling |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach | Distinctive Characteristics |
|------|-------------|-------------|-------------------|----------------------------|
| **Claude Code** | Agent orchestration, multi-turn workflows | Power users, multi-agent builders | Subagent architecture, project-scoped MCP | Deepest agent composition; proprietary CLAUDE.md vs. open standard tension |
| **OpenAI Codex** | Rust-rewrite performance, sandbox security | Enterprise, security-conscious teams | Rust core, split filesystem/network policies, bubblewrap/seatbelt | Most aggressive sandbox hardening; rapid alpha iteration |
| **Gemini CLI** | Verbosity reduction, remote agents | Automation engineers, distributed systems | Milestone-driven prompting, collapsible UI | "Quiet by default" philosophy; 1.0 release gating on headless reliability |
| **GitHub Copilot CLI** | IDE parity, MCP hosting | VS Code extension migrants, enterprise | Tight GitHub ecosystem integration | 1.0 GA maturity; custom slash commands from `.github/prompts` |
| **Kimi CLI** | API stability, reasoning control | Anthropic API polyglots | WebSocket resilience, OpenAI Responses API compatibility | Fast auth bug resolution; reasoning parameter preservation |
| **OpenCode** | TUI richness, extensibility | Keyboard-native developers, plugin builders | Bun→Node migration, MCP Apps (iframe UIs), animation-heavy UI | Highest TUI polish ambition; memory architecture debt from rapid feature growth |
| **Qwen Code** | Local model optimization, standards compliance | Qwen3 local model users, Chinese market | `.agents/skills` adoption, ACP protocol migration | Strongest local model integration; Windows compatibility focus |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|-----------|
| **Highest momentum** | OpenCode, OpenAI Codex | 50 PRs/24h (OpenCode); 7 alphas/24h (Codex); active architectural migrations |
| **Strong sustained** | Claude Code, Gemini CLI, Qwen Code | Organized epics (verbosity reduction, remote agents); maintainer sprint patterns |
| **Maturation/consolidation** | GitHub Copilot CLI | 1.0 GA reached; post-release patch mode; reduced PR visibility |
| **Focused maintenance** | Kimi CLI | Selective high-impact fixes; lower volume but responsive resolution |

**Maturity signals**: Copilot CLI's 1.0 release represents ecosystem maturation; Claude Code's 3,000+ vote issue demonstrates community scale; OpenCode's 50-issue daily volume indicates stress-testing under growth.

---

## 6. Trend Signals

| Trend | Evidence | Developer Value |
|-------|----------|---------------|
| **Open standards > vendor formats** | AGENTS.md 3,055 👍; Qwen/Kimi rapid adoption; `.agents/skills` plural convention | Reduce configuration lock-in; enable polyglot AI workflows |
| **Infrastructure language shifts** | Codex Rust rewrite; OpenCode Bun→Node migration | Performance and cross-platform stability over development velocity |
| **Deterministic automation as first-class** | CI/CD pipeline support requests across all tools; headless mode hardening | AI CLI tools graduating from interactive assistants to scriptable infrastructure |
| **Memory architecture as competitive moat** | Unbounded growth issues universally reported; compaction strategies diverging | Long-session reliability becoming key differentiator for power users |
| **MCP as de facto extension standard** | OAuth, lifecycle management, deduplication needs universal | Interoperable tool ecosystem; reduced per-tool integration burden |
| **Enterprise readiness gap closing** | Proxy support, audit logging, permission granularity across roadmaps | Regulated industries gaining viable options beyond self-hosted |

---

*Analysis compiled from 2026-03-07 community digests across seven active AI CLI tools.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-03-07**

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Addresses universal pain point in Claude's document output; fresh submission (Mar 4) |
| 2 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating Skills across 5 dimensions (structure, security, performance, UX, maintainability) | Long-running PR (Nov 2025); positions Skills as auditable software artifacts |
| 3 | **Frontend Design** (improved) | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for single-conversation actionability—tighter, more executable guidance | Addresses core critique: many Skills are too verbose for token-efficient execution |
| 4 | **System Documentation Suite** | [#95](https://github.com/anthropics/skills/pull/95) | 🟡 Open | Evidence management system docs with architecture diagrams and flowcharts | Enterprise governance use case; comprehensive but niche |
| 5 | **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | 🟡 Open | 10-step workflow identifying orphaned code, unused files, documentation gaps | Technical debt automation—high developer utility |
| 6 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | Integration with SAP's open-source tabular foundation model for business analytics | Bridges enterprise ERP data with Claude; recently updated (Mar 4) |
| 7 | **Shodh Memory** | [#154](https://github.com/anthropics/skills/pull/154) | 🟡 Open | Persistent memory system for AI agents across conversations | Addresses Claude's statelessness; active development through Mar 3 |
| 8 | **Flutter Theme Factory** | [#368](https://github.com/anthropics/skills/pull/368) | 🟡 Open | 12 pre-built themes with ColorScheme, Google Fonts, light/dark mode | Mobile developer tooling; polished UX focus |

---

## 2. Community Demand Trends

From **Issues with highest engagement**, the community is prioritizing:

| Trend | Evidence | Implication |
|:---|:---|:---|
| **Skill reliability & infrastructure** | [#62](https://github.com/anthropics/skills/issues/62) (10 comments), [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) | Skills disappearing, upload failures, API 500s—platform stability is critical blocker |
| **Skill authoring best practices** | [#202](https://github.com/anthropics/skills/issues/202) (8 comments) | Demand for token-efficient, execution-focused Skills vs. verbose documentation |
| **MCP integration & interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments), [#185](https://github.com/anthropics/skills/issues/185) | Skills-as-MCPs; package manager concepts emerging |
| **Enterprise/team governance** | [#412](https://github.com/anthropics/skills/issues/412) (3 comments) | Agent governance, audit trails, policy enforcement for multi-agent systems |
| **Multi-platform deployment** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) | AWS Bedrock compatibility requests |

---

## 3. High-Potential Pending Skills

Active PRs with sustained momentum, likely to merge:

| Skill | PR | Why It Matters | Last Activity |
|:---|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Solves universal output quality problem; author responsive | Mar 5, 2026 |
| **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | Enterprise analytics bridge; recently refreshed | Mar 4, 2026 |
| **Skill Quality Analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | Meta-Skill enabling Skill ecosystem quality | Jan 7, 2026 |
| **Shodh Memory** | [#154](https://github.com/anthropics/skills/pull/154) | Persistent state—most requested architectural capability | Mar 3, 2026 |
| **AURELION Suite** | [#444](https://github.com/anthropics/skills/pull/444) | 4-Skill cognitive framework (kernel, advisor, agent, memory) | Feb 21, 2026 |
| **Masonry Image/Video Generation** | [#335](https://github.com/anthropics/skills/pull/335) | Media generation workflow automation | Feb 4, 2026 |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for production-grade reliability infrastructure**—Skills that audit, persist, and govern other Skills, paired with urgent platform stability fixes to prevent skill loss and API failures.

---

*Report generated from github.com/anthropics/skills community data. All links verified as of 2026-03-07.*

---

# Claude Code Community Digest — 2026-03-07

## Today's Highlights

The v2.1.70 hotfix addresses critical API compatibility issues with third-party gateways and Bedrock inference profiles. Meanwhile, the community is rallying around **AGENTS.md** as a potential open standard for AI coding assistants, with the highest-voted issue in the project's history (3,055 👍) pushing for adoption over the proprietary CLAUDE.md format.

---

## Releases

### v2.1.70
| Item | Description |
|------|-------------|
| **API Gateway Fix** | Resolves 400 errors when using `ANTHROPIC_BASE_URL` with third-party proxies—tool search now auto-detects proxy endpoints and disables `tool_reference` blocks |
| **Bedrock Effort Fix** | Eliminates "This model does not support the effort parameter" errors when using custom Bedrock inference profiles |

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#6235](https://github.com/anthropics/claude-code/issues/6235) | **Support AGENTS.md standard** | Industry-wide interoperability push—Codex, Cursor, and Amp already adopting; CLAUDE.md fragmentation risks vendor lock-in | **229 comments, 3,055 👍** — overwhelming consensus for open standard adoption |
| [#20412](https://github.com/anthropics/claude-code/issues/20412) | **Claude.ai MCP servers auto-injected without opt-in** | Silent sync causes OOM crashes on resource-constrained systems; privacy/consent concerns | 23 comments, 62 👍; users demand explicit opt-in controls |
| [#13354](https://github.com/anthropics/claude-code/issues/13354) | **Continue when session limit reached** | Workflow continuity for long-running tasks—currently forces manual restart | 17 comments, 30 👍; productivity pain point for power users |
| [#6527](https://github.com/anthropics/claude-code/issues/6527) | **ask list ignored when Bash in allow list** | Security policy bypass—permissions system has logic flaw mixing allow/ask modes | 16 comments, 14 👍; security-conscious users concerned |
| [#13898](https://github.com/anthropics/claude-code/issues/13898) | **Custom subagents cannot access project-scoped MCP servers** | Subagents hallucinate instead of calling tools—breaks multi-agent workflows | 12 comments, 8 👍; enterprise users blocked on agent orchestration |
| [#16550](https://github.com/anthropics/claude-code/issues/16550) | **Allow Claude to write/update project files** | Self-modifying codebase capability—enables autonomous iteration | 9 comments, 15 👍; polarizing—some want it, others fear safety issues |
| [#31027](https://github.com/anthropics/claude-code/issues/31027) | **Agent tool missing 'model' parameter** | Cannot specify model for team agents—forces suboptimal cost/performance tradeoffs | 7 comments, 19 👍; power users need fine-grained control |
| [#30435](https://github.com/anthropics/claude-code/issues/30435) | **Suppress bash safety heuristic prompts via settings** | Safety prompts interrupt automated workflows—need deterministic execution | 6 comments, 4 👍; CI/automation use cases affected |
| [#30613](https://github.com/anthropics/claude-code/issues/30613) | **HTTP hooks with JSON don't work** | Breaks webhook integrations—regression in hook system | 6 comments, 1 👍; integration developers blocked |
| [#19877](https://github.com/anthropics/claude-code/issues/19877) | **Claude-invocable conditional /compact** | Memory management for long sessions—needs programmatic trigger | 6 comments, 5 👍; reliability concern for extended use |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#31633](https://github.com/anthropics/claude-code/pull/31633) | **safe-edit-guard plugin** | Blocks Edit/Write on unread files—prevents blind overwrites that cause regressions | Open |
| [#31608](https://github.com/anthropics/claude-code/pull/31608) | **Contribution workflow guide** | Adds CONTRIBUTING.md with fork-and-PR workflow documentation | Open |
| [#31544](https://github.com/anthropics/claude-code/pull/31544) | **Update 25+ stale documentation URLs** | Migrates docs links to canonical `code.claude.com` and `platform.claude.com` domains | Open |
| [#31543](https://github.com/anthropics/claude-code/pull/31543) | **Clarify piped commands need separate permissions** | Documents that each pipe segment requires individual `allow` entries | Open |
| [#31529](https://github.com/anthropics/claude-code/pull/31529) | **/remote-control-diagnose command** | Debug tool for widespread "Remote Control environments not available" errors | Open |
| [#31291](https://github.com/anthropics/claude-code/pull/31291) | **uuddlrlrba plugin** | Konami code easter egg—renders 21-frame Clawd GIF in terminal | Open |
| [#31501](https://github.com/anthropics/claude-code/pull/31501) | **Fix TodoWrite overwriting phase-level todos** | Resolves `/feature-dev` workflow skipping Phases 6-7 | Open |
| [#31484](https://github.com/anthropics/claude-code/pull/31484) | **Deterministic stale label removal** | Replaces non-deterministic Claude-based triage with reliable automation | Open |
| [#28714](https://github.com/anthropics/claude-code/pull/28714) | **Automated issue triage + weekly digest** | Haiku 4.5 per-issue triage (~$0.001/issue), Sonnet 4.6 weekly digest (~$0.05/week) | Open |
| [#31356](https://github.com/anthropics/claude-code/pull/31356) | **security-guidance plugin README** | Comprehensive documentation for security pattern detection plugin | Open |

---

## Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Open standards adoption** | AGENTS.md (#6235) dominating votes | Community rejecting vendor-specific formats; interoperability is priority |
| **Deterministic automation** | Conditional /compact (#19877), suppress bash prompts (#30435), safe-edit-guard (#31633) | Users building CI/CD pipelines need predictable, non-interactive behavior |
| **Fine-grained agent control** | Model parameter for agents (#31027), deferred tool loading (#31623), subagent MCP access (#13898, #25200) | Multi-agent orchestration maturing—users need composable, configurable systems |
| **Memory & session management** | Continue on limit (#13354), conditional compact (#19877) | Long-running tasks expose architectural limits; stateful session handling needed |

---

## Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **MCP server lifecycle chaos** | 5+ issues (#20412, #13898, #25200, #31646, #31618) | Auto-injection, OOM crashes, clean shutdown false positives, OAuth spam—MCP integration is brittle at scale |
| **Permission system edge cases** | 4+ issues (#6527, #30435, #31543, #29187) | Bash allowlists bypass ask lists, piped commands need manual decomposition, wildcard suggestions too broad—security UX is unpredictable |
| **Bedrock/AWS inference gaps** | 3+ issues (v2.1.70 release, #26767) | Effort parameter incompatibility, Application Inference Profiles broken—enterprise AWS users face regressions |
| **Shell/terminal integration bugs** | 4+ issues (#31437, #31641, #25438, #18115) | 8-second Bash delays from shell snapshots, terminal title clearing, Docker bind mount breaks, cross-filesystem plugin installs—POSIX edge cases accumulate |
| **Hook system reliability** | 3+ issues (#30613, #31592, #24920) | JSON HTTP hooks fail, denial vs. error indistinguishable, prompt fields stripped—automation infrastructure needs hardening |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-07

---

## 1. Today's Highlights

The Codex team is aggressively iterating on the Rust core with **seven alpha releases** of `v0.112.0` in 24 hours, suggesting a major stabilization push. Meanwhile, **sandbox policy architecture is being fundamentally rebuilt** through a coordinated 10-PR effort splitting filesystem and network policies for finer-grained security. Community frustration is mounting over **rate limit calculation bugs** and **Windows/WSL environment handling**, with multiple high-engagement issues surfacing this week.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| `rust-v0.112.0-alpha.1` through `alpha.7` | Rapid-fire alpha sequence indicates active stabilization of the Rust rewrite; no detailed changelogs provided in release notes. Users on the Rust track should expect breaking changes and are encouraged to pin versions for stability. |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [#13568](https://github.com/openai/codex/issues/13568) **Usage dropping too quickly** | Pro users report aggressive downgrades from 2X to 1X rate limits with rapid credit consumption—suggests metering bug affecting paid workflows. | 🔥 116 comments, 35 👍—highest engagement this period; users sharing detailed feedback threads |
| [#10410](https://github.com/openai/codex/issues/10410) **macOS Intel (x86_64) support** | Desktop app remains Apple Silicon-only, blocking significant enterprise/legacy Mac user base. | 99 comments, 124 👍—long-running request with sustained pressure |
| [#2847](https://github.com/openai/codex/issues/2847) **Exclude sensitive files (.codexignore)** | Security-critical: no built-in way to prevent `.env`, secrets, or proprietary files from being sent to model. Blocks adoption in regulated environments. | 59 comments, 238 👍—top-voted enhancement; community workarounds insufficient |
| [#3962](https://github.com/openai/codex/issues/3962) **Completion sound notification** | UX polish for long-running tasks; standard in competitor tools. | 31 comments, 103 👍—broad appeal, low implementation cost |
| [#12764](https://github.com/openai/codex/issues/12764) **401 Unauthorized errors** | Auth failures blocking Windows CLI users entirely; unclear if key rotation or regional API issue. | 48 comments—active troubleshooting, no resolution pattern |
| [#13717](https://github.com/openai/codex/issues/13717) **Runaway rg processes + high CPU/RAM** | Extension update causing resource exhaustion on Linux; affects VS Code integration stability. | 5 comments—emerging issue, needs reproduction confirmation |
| [#13733](https://github.com/openai/codex/issues/13733) **Background polling wastes tokens** | `cargo build` etc. trigger expensive API round-trips with full history; silently burns credits. | 4 comments, 3 👍—economic impact significant for heavy users |
| [#13148](https://github.com/openai/codex/issues/13148) **Windows EOL corruption** | Codex replaces CRLF with LF despite explicit instructions; breaks PowerShell workflows and causes "flailing" behavior. | 5 comments, 5 👍—frustration evident in tone |
| [#13773](https://github.com/openai/codex/issues/13773) **gpt-5.4 edit/patch failures** | Regression in newest model: built-in editing unreliable vs. gpt-5.3-codex; blocks model upgrade path. | 3 comments, 2 👍—quality gate concern |
| [#13566](https://github.com/openai/codex/issues/13566) **WSL: non-interactive shell missing NVM/node** | Environment initialization failures in Windows App's WSL mode; breaks Node.js workflows. | 4 comments, 1 👍—ecosystem compatibility gap |

---

## 4. Key PR Progress

| PR | Feature/Fix | Significance |
|----|-------------|--------------|
| [#13593](https://github.com/openai/codex/pull/13593) **Stabilize flaky tests** | Deterministic waits, serialized Windows tests, root-cause fixes for `codex-rs` suite | CI reliability blocker for Rust migration |
| [#13276](https://github.com/openai/codex/pull/13276) **Hooks engine (MVP)** | SessionStart/Stop hooks with synchronous execution, opt-in via config | Foundation for extensibility; enterprise automation use cases |
| [#13439](https://github.com/openai/codex/pull/13439) **Split sandbox policies through runtime** | Separates `FileSystemSandboxPolicy` from `NetworkSandboxPolicy` in execution path | Security architecture modernization; unblocks granular permissions |
| [#13640](https://github.com/openai/codex/pull/13640) **Streaming + TTY/PTY for `command/exec`** | Stdin/stdout/stderr streaming with byte caps, env override, process termination | Critical for long-running build/test workflows in app |
| [#13675](https://github.com/openai/codex/pull/13675) **Full web search tool config** | Exposes filters, location, and all Responses API search parameters | Feature parity with ChatGPT; local search customization |
| [#13451](https://github.com/openai/codex/pull/13451) **Preserve denied paths when widening** | Fixes policy escalation bug that erased explicit deny entries | Security hardening—prevents accidental over-permissioning |
| [#13453](https://github.com/openai/codex/pull/13453) **Honor split filesystem policies in bwrap** | Bubblewrap mount builder respects unreadable carveouts | Linux sandbox correctness; defense in depth |
| [#13448](https://github.com/openai/codex/pull/13448) **Seatbelt: honor split filesystem policies** | macOS sandbox policy generation uses split policies, not legacy projection | macOS security parity with Linux improvements |
| [#13445](https://github.com/openai/codex/pull/13445) **Safety: honor carveouts in apply_patch** | Prevents auto-approval of writes to explicitly denied paths | Closes security gap in file modification approval flow |
| [#13255](https://github.com/openai/codex/pull/13255) **TUI: render file links from relative targets** | Restores terminal click-to-open by printing actual paths vs. labels | UX regression fix for terminal emulator integration |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Cross-platform desktop parity** | Linux app (#11023), macOS Intel (#10410), Windows stability | High—platform gaps are adoption blockers |
| **Security/visibility controls** | `.codexignore` (#2847), read-only approval mode (#11915), `.env` access concerns (#13778) | Critical—enterprise readiness depends on data leakage prevention |
| **Cost/usage transparency** | Rate limit bugs (#13568, #13567), token waste from polling (#13733) | Urgent—economic trust erosion in paid tiers |
| **Windows/WSL polish** | EOL handling, SSH permissions, environment variables, non-ASCII paths | Sustained—platform-native experience gaps |
| **Observability/completion signals** | Sound notifications (#3962), progress indicators for background tasks | Moderate—quality-of-life differentiators |

---

## 6. Developer Pain Points

**Rate Limit & Billing Opacity**
Multiple reports of "usage dropped too quickly" (#13568), incorrect week boundary calculations (#13567), and silent token burn from polling loops (#13733). Developers lack visibility into *why* limits trigger, eroding trust in Pro/Organization tiers.

**Windows as Second-Class Citizen**
WSL integration failures (#13566, #13556), EOL corruption (#13148, #9914), path encoding issues (#13553, #13743), and SSH permission conflicts (#12226) create friction disproportionate to platform market share. The "it works on macOS" pattern is pronounced.

**Sandbox Security vs. Utility Tension**
Users need fine-grained file exclusion (#2847) and environment variable handling, but the new split-policy system (10 active PRs) is still landing. The gap between "secure by default" and "functional for real projects" remains unresolved.

**Model Version Reliability Variance**
gpt-5.4 exhibiting regression in core editing capabilities (#13773) vs. gpt-5.3-codex creates upgrade hesitation. Users cannot confidently adopt latest models for production workflows.

**Extension/Resource Management**
Runaway processes (#13717), high CPU/RAM consumption, and TUI rendering bugs (#13686) indicate resource lifecycle management gaps in the VS Code extension and desktop app.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-07

## Today's Highlights

The v0.34.0 nightly build brings critical policy engine fixes for non-interactive tool exclusions and UI polish, while a major push on **verbosity reduction** landed with 6 new P1 issues targeting milestone-driven prompting and collapsible task groups. Shell interactivity saw urgent attention with fixes for incorrect terminal sizing that broke Vim in embedded shells.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.34.0-nightly.20260306.a8f507352](https://github.com/google-gemini/gemini-cli/releases/tag/v0.34.0-nightly.20260306.a8f507352)** | Policy engine fix for deferred tool exclusions in non-interactive mode; removed double padding on rendered content |
| **[v0.33.0-preview.4](https://github.com/google-gemini/gemini-cli/releases/tag/v0.33.0-preview.4)** | Cherry-picked patch for release branch stabilization |

---

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| **[#20716](https://github.com/google-gemini/gemini-cli/issues/20716)** — Plan truncation in approval dialog | Blocks visibility into multi-step plans; 15-line limit cuts off critical context | 8 comments, maintainer-triaged |
| **[#19468](https://github.com/google-gemini/gemini-cli/issues/19468)** — Scroll position jumping | Persistent UX regression affecting all sessions regardless of message flow | 3 comments, ongoing reports |
| **[#21491](https://github.com/google-gemini/gemini-cli/issues/21491)** — Replace `console.error` with injectable `AgentLogger` | SDK extensibility blocker; prevents log interception for production integrations | 3 comments, architecture-focused |
| **[#20302](https://github.com/google-gemini/gemini-cli/issues/20302)** — Remote Agents Sprint 1 (P0) | Foundation for distributed agent execution; gates 1.0 release capabilities | 3 comments, epic-tracked |
| **[#21461](https://github.com/google-gemini/gemini-cli/issues/21461)** — Shell aliases unsupported | Breaks developer workflow expectations; `!baz` fails despite shell configuration | 2 comments, marked possible-duplicate |
| **[#20550](https://github.com/google-gemini/gemini-cli/issues/20550)** — JS heap exhaustion | Production stability risk; 4GB+ memory pressure on long sessions | 2 comments, needs reproduction |
| **[#21432](https://github.com/google-gemini/gemini-cli/issues/21432)** — Agent "self-awareness" for CLI flags | Meta-capability gap: agent cannot accurately document its own interface | 1 comment, documentation-adjacent |
| **[#21494](https://github.com/google-gemini/gemini-cli/issues/21494)** — Interactive shells sized incorrectly | **Critical**: Vim unusable in embedded shells due to height misalignment; fresh report | 0 comments, high-impact regression |
| **[#21484](https://github.com/google-gemini/gemini-cli/issues/21484)** — Interactive progress visualization | Long-requested UX for hierarchical task visibility; addresses "black box" criticism | 0 comments, design proposal |
| **[#21433](https://github.com/google-gemini/gemini-cli/issues/21433)** — Headless mode verbosity levels | 1.0 release blocker for scripting/automation use cases | 0 comments, priority-flagged |

---

## Key PR Progress

| PR | Feature / Fix | Status |
|----|-------------|--------|
| **[#21495](https://github.com/google-gemini/gemini-cli/pull/21495)** — Refined focus highlight for selection lists | 2-character gutter system, breakout logic to prevent border overlap | Open, fresh |
| **[#21492](https://github.com/google-gemini/gemini-cli/pull/21492)** — Fix shell height reporting | Corrects node-pty dimensions; unblocks Vim in embedded shells | Open, P1 |
| **[#21485](https://github.com/google-gemini/gemini-cli/pull/21485)** — Disallow underspecified types | New ESLint rule banning `typeof obj['prop'] == 'string'` patterns | Open, code quality |
| **[#21458](https://github.com/google-gemini/gemini-cli/pull/21458)** — Fix `[object Object]` in settings display | JSON stringification for object-type settings values | Open, help-wanted |
| **[#21488](https://github.com/google-gemini/gemini-cli/pull/21488)** — Integration tests for deprecated package spew | Guards against `DeprecationWarning` pollution in stderr | Open, platform health |
| **[#21487](https://github.com/google-gemini/gemini-cli/pull/21487)** — Resolve symlinks for non-existent paths | Fixes "Path not in workspace" errors with symlinked `.gemini` directories | Open (supersedes closed #21486) |
| **[#20514](https://github.com/google-gemini/gemini-cli/pull/20514)** — Whitelist `TERM`/`COLORTERM` in env sanitization | Unblocks terminal editors (vim, emacs) in sandboxed environments | Open, P1, help-wanted |
| **[#20873](https://github.com/google-gemini/gemini-cli/pull/20873)** — Preserve `AskUser` state on Ctrl+Z | Module-level draft store prevents input loss on terminal suspend | Open, P2 |
| **[#21480](https://github.com/google-gemini/gemini-cli/pull/21480)** — Fix test suite with custom `GEMINI_SYSTEM_MD` | Eliminates spurious failures from local env configuration | Open, platform |
| **[#21481](https://github.com/google-gemini/gemini-cli/pull/21481)** — Configurable window title length | `ui.terminalTitleMaxLen` and `ui.padWindowTitle` options | Open, customization |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Verbosity reduction & "quiet by default"** | #21449–#21454 (6 issues), #21450 milestone-driven prompting, #21453 collapsible accordion UI | **High** — P1-tagged epic with behavioral evals planned |
| **Remote/distributed agents** | #20302, #20303, #20304 (3-sprint epic structure) | **High** — P0 foundation in active development |
| **Shell interactivity improvements** | #21461 alias support, #21494/#21492 sizing fixes, #20514 env sanitization | **Medium-High** — blocking daily workflows |
| **Agent self-documentation** | #21432 accurate flags/hotkeys, #20310 subagent documentation | **Medium** — documentation gaps before 1.0 |
| **Headless/automation hardening** | #21433 clean invocation, #21484 progress visualization | **Medium** — scripting reliability for CI/CD |

---

## Developer Pain Points

| Pain Point | Manifestation | Frequency |
|------------|-------------|-----------|
| **Terminal rendering glitches** | Scroll jumping (#19468), flickering on path input (#20217), shell sizing (#21494), focus highlight inconsistencies (#21493, #21495) | **Persistent** — daily UX friction |
| **Memory/performance instability** | JS heap exhaustion (#20550), long-session degradation | **Spike** — production risk |
| **Plan visibility limitations** | 15-line truncation (#20716), "black box" execution (#21484) | **High** — trust and debuggability |
| **Environment/sandbox friction** | Missing `TERM`/`COLORTERM` (#20514), symlink path resolution (#21487), alias support (#21461) | **High** — power-user blockers |
| **Non-interactive reliability** | Unclean headless output (#21433), tool exclusion timing (#20639 in nightly) | **Critical path** — 1.0 release gating |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-07

---

## 1. Today's Highlights

GitHub Copilot CLI celebrates its **1.0 GA milestone** with a major version bump and polished UX improvements, including intuitive `exit` command support and streamlined form submissions. The release cadence remains aggressive with same-day patches addressing security guardrails for shell command execution. Meanwhile, the community is actively stress-testing the CLI's boundaries—reporting critical issues around Windows compatibility, IME input for CJK languages, and persistent model selection.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.2** | 2026-03-06 | GA commemoration release: bare `exit` command closes CLI; `ask_user` forms now submit with Enter key; `command` field supported as CRO |
| **v0.0.423** | 2026-03-06 | Security hardening: prompts for dangerous shell expansion/substitution; blocks `/share gist` for EMU/GHE Cloud users; elicitation fields require Enter to confirm |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#618](https://github.com/github/copilot-cli/issues/618) | Custom slash commands from `.github/prompts` directory | Parity with VS Code extension; enables team-standardized workflows | **90 👍, 26 comments** — long-running request finally getting traction |
| [#33](https://github.com/github/copilot-cli/issues/33) | OAuth HTTP MCP servers | Unlocks enterprise integrations (Figma, Atlassian); critical for remote MCP adoption | **103 👍, 25 comments** — one of highest-voted issues ever |
| [#1081](https://github.com/github/copilot-cli/issues/1081) | `AggregateError: Failed to list models` | Blocks enterprise users entirely; authentication vs. model availability mismatch | 21 comments, ongoing triage — severity flagged by multiple orgs |
| [#1161](https://github.com/github/copilot-cli/issues/1161) | Invalid session ID with Opus 4.5 | Breaks core bash execution; user churn to competitor (`opencode.ai`) | 19 comments, 13 👍 — caused real user defection |
| [#1481](https://github.com/github/copilot-cli/issues/1481) | SHIFT+ENTER executes instead of line break | Violates universal chat UX conventions; muscle memory disruption | 9 comments, 8 👍 — "mildly annoying" understatement |
| [#1164](https://github.com/github/copilot-cli/issues/1164) | Windows 11 immediate exit | Silent failure on major platform; regression from 0.0.368 | 8 comments — blocking Windows enterprise rollout |
| [#1698](https://github.com/github/copilot-cli/issues/1698) | CJK IME candidate window misplaced | Accessibility barrier for ~1.5B users; rendering engine bug | **50 👍**, 5 comments — internationalization gap |
| [#307](https://github.com/github/copilot-cli/issues/307) | Comprehensive permissions system improvements | Meta-issue consolidating 16+ related problems; architectural debt | 6 comments, 4 👍 — needs PM attention |
| [#686](https://github.com/github/copilot-cli/issues/686) | Stuck forever, no feedback | Autonomy without guardrails; 2-hour hangs with no intervention | 5 comments, 8 👍 — reliability concern |
| [#1477](https://github.com/github/copilot-cli/issues/1477) | "Continuing autonomously (3 premium requests)" loop | Billing/UX confusion; premium request counting feels arbitrary | 5 comments, 6 👍 — monetization friction |

---

## 4. Key PR Progress

**No pull requests updated in the last 24 hours.**

*Note: The v1.0.2 and v0.0.423 releases suggest active development, but PR visibility is currently limited in the dataset. Community engagement is primarily flowing through Issues.*

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **MCP ecosystem maturity** | #33 (OAuth), #1232 (env vars in config), #1620 (progress indicators), #1655 (nested agents.md) | Users treating CLI as production MCP host, not just chat interface |
| **VS Code parity** | #618 (custom slash commands), #1655 (nested agents.md flag), #1481/#1871 (keybindings) | Extension users expect seamless CLI migration |
| **Session management** | #1697 (session forking), #1425 (hook session IDs), #755 (session ID errors), #1161 | Long-running tasks need better state isolation and observability |
| **Input/output richness** | #443 (PDF support), #1241 (image paste), #1698 (CJK IME), #1857 (cancel enqueued messages) | CLI must match GUI capabilities for document-heavy workflows |
| **Model control** | #1824, #1869 (default model persistence), #1477 (premium request transparency) | Users want predictable, configurable AI behavior |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Platform instability** | Windows silent exits (#1164), Ubuntu login hangs (#1866), macOS session failures (#1161) | High — cross-platform reliability gaps |
| **Input handling inconsistencies** | SHIFT+ENTER vs. CTRL+ENTER (#1481, #1871), IME breakage (#1698), multi-line regression (#1854) | High — daily UX friction |
| **Opaque session/state management** | Invalid session IDs (#755, #1161), infinite refresh loops (#1874), unresponsive hangs (#686, #1681) | Medium-High — erodes trust in autonomy |
| **Enterprise/policy gaps** | Model listing failures (#1081), authorization errors (#1878), EMU/GHE blocks (#0.0.423 release notes) | Medium — blocking org adoption |
| **Billing transparency** | Premium request counting confusion (#1477) | Emerging — monetization UX debt |

---

*Digest compiled from github.com/github/copilot-cli activity 2026-03-06*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-07

---

## 1. Today's Highlights

Community activity centers on **API stability concerns** and **workflow control enhancements**. A high-engagement authentication bug was resolved, while developers are actively pushing fixes for WebSocket reconnection reliability and reasoning parameter handling. The ecosystem shows growing demand for **planning-mode workflows** and **MCP configuration portability** across AI CLI tools.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1074](https://github.com/MoonshotAI/kimi-cli/issues/1074) | **CLOSED** — 401 Unauthorized on model fetch | Critical auth regression affecting all API calls; rapid 20-comment resolution demonstrates responsive maintainer action | 5 👍, 20 comments — resolved with token refresh fix |
| [#1344](https://github.com/MoonshotAI/kimi-cli/issues/1344) | **OPEN** — 400 Invalid request Error | Blocks core functionality on latest stable (v1.14.0); 19 comments suggest widespread impact on Darwin ARM64 | Active debugging, no 👍 yet indicates frustration vs. engagement |
| [#640](https://github.com/MoonshotAI/kimi-cli/issues/640) | **OPEN** — Infinite file read loop | Long-standing bug (since v0.76) with custom Anthropic endpoints; affects resource efficiency and trust | 4 comments, minimal traction — may need prioritization |
| [#1293](https://github.com/MoonshotAI/kimi-cli/issues/1293) | **OPEN** — SSH server communication failure | Enterprise/remote dev blocker; DNS constraints in headless environments are common infrastructure reality | 1 👍, 1 comment — niche but high-severity for affected users |
| [#1354](https://github.com/MoonshotAI/kimi-cli/issues/1354) | **OPEN** — Request for Plan Mode | Direct competitor to Claude Code's `/plan`; skills-based workaround insufficient due to premature execution | 2 👍, bilingual engagement — clear product-market fit signal |
| [#1356](https://github.com/MoonshotAI/kimi-cli/issues/1356) | **OPEN** — MCP skill migration from other CLIs | Ecosystem lock-in reduction; addresses friction for polyglot AI tool users (Claude, Cursor, Windsurf, Continue) | New, no reactions yet — strategic feature for adoption |
| [#1355](https://github.com/MoonshotAI/kimi-cli/issues/1355) | **OPEN** — ACP session init crash (`list.index(x): x not in list`) | Hard crash on Windows IDEA plugin integration; blocks IDE workflow entirely | Fresh report, needs triage |

---

## 4. Key PR Progress

| # | PR | Description | Technical Impact |
|---|-----|-------------|----------------|
| [#1359](https://github.com/MoonshotAI/kimi-cli/pull/1359) | **fix(web): preserve slash commands on reconnect + init retry** | WebSocket `resetState()` no longer wipes slash commands; adds resilient reconnection logic | Eliminates UX disruption during network instability |
| [#1358](https://github.com/MoonshotAI/kimi-cli/pull/1358) | **fix(llm): avoid implicit reasoning-off for responses** | Prevents `thinking=False` from force-disabling reasoning; respects explicit `reasoning_effort` only | Fixes regression in OpenAI Responses API behavior; includes snapshot test coverage |
| [#1345](https://github.com/MoonshotAI/kimi-cli/pull/1345) | **feat(soul): OSC 9 terminal notifications** | Native desktop notifications via terminal escape sequences (iTerm2, Windows Terminal, WezTerm, tmux) | Closes [#1342](https://github.com/MoonshotAI/kimi-cli/issues/1342); enables async workflow awareness |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Explicit planning workflows** | [#1354](https://github.com/MoonshotAI/kimi-cli/issues/1354) | Users want structured "think first, act second" modes; current autonomous execution too eager |
| **MCP ecosystem interoperability** | [#1356](https://github.com/MoonshotAI/kimi-cli/issues/1356) | Configuration portability becoming table stakes; barrier to adoption for multi-tool developers |
| **Headless/remote environment support** | [#1293](https://github.com/MoonshotAI/kimi-cli/issues/1293) | SSH, container, and CI/CD use cases need first-class DNS and connectivity handling |
| **IDE integration hardening** | [#1355](https://github.com/MoonshotAI/kimi-cli/issues/1355) | JetBrains plugin stability requires dedicated attention |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency Signal |
|----------|----------|----------------|
| **Authentication fragility** | Token expiration, 401 errors, session drops | High — [#1074](https://github.com/MoonshotAI/kimi-cli/issues/1074) resolution shows systemic issue |
| **Silent/autonomous execution** | Agent proceeds without confirmation, plan interruption | Medium-High — [#1354](https://github.com/MoonshotAI/kimi-cli/issues/1354) + skills workaround failure |
| **Network resilience gaps** | WebSocket drops, SSH DNS failures, reconnection data loss | Medium — [#1359](https://github.com/MoonshotAI/kimi-cli/pull/1359) fix in progress, [#1293](https://github.com/MoonshotAI/kimi-cli/issues/1293) unresolved |
| **Cross-tool configuration friction** | Manual MCP re-setup per tool | Emerging — [#1356](https://github.com/MoonshotAI/kimi-cli/issues/1356) early indicator |
| **Platform-specific crashes** | Windows IDEA plugin, Darwin ARM64 request errors | Medium — [#1355](https://github.com/MoonshotAI/kimi-cli/issues/1355), [#1344](https://github.com/MoonshotAI/kimi-cli/issues/1344) |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli — 2026-03-07*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-07

---

## 1. Today's Highlights

Two patch releases (v1.2.19–v1.2.20) landed with critical Bun-to-Node.js compatibility fixes and GPT-5.4 support, while the issue tracker remains dominated by memory management concerns and TUI friction points. Community activity is heavy around clipboard functionality, permission system edge cases, and subagent navigation regressions.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v1.2.20** | Fixed fsmonitor daemon memory leak (60GB+ committed memory); replaced Bun.which with npm which; restored Bun stdin reads for TUI prompts |
| **v1.2.19** | Added GPT-5.4 to Codex allowed models; continued Bun→Node.js migration (stderr, color, connect, hash functions) |

The migration away from Bun-specific APIs appears to be a strategic priority for cross-platform stability.

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#4283](https://github.com/anomalyco/opencode/issues/4283) — Copy to clipboard broken in TUI | Fundamental UX breakage; affects all platforms | 63 comments, 46 👍 — highest engagement; users reporting workarounds via external tools |
| [#5363](https://github.com/anomalyco/opencode/issues/5363) — 70GB memory consumption | Extreme resource leak in idle tmux sessions | 37 comments; tied to fsmonitor fixes in v1.2.20 — users awaiting verification |
| [#8089](https://github.com/anomalyco/opencode/issues/8089) — Auto-compaction failing on agent workflows | Documentation claims vs. reality gap for context management | 27 comments; users confused by silent failures vs. explicit errors |
| [#1764](https://github.com/anomalyco/opencode/issues/1764) — Vim motions in input box | Competitive parity request (ClaudeCode has this) | 25 comments, 109 👍 — highest voted open issue; clear product gap |
| [#14982](https://github.com/anomalyco/opencode/issues/14982) — Unexpected iCloud/Photos access requests | Privacy/security concern on macOS | 20 comments; no clear root cause identified; affects user trust |
| [#16331](https://github.com/anomalyco/opencode/issues/16331) — Permission config ignored | Security model breakdown; `.env` files readable despite deny rules | 13 comments; critical for enterprise adoption |
| [#16333](https://github.com/anomalyco/opencode/issues/16333) — GPT 5.4 compaction premature | New model support incomplete; wastes 1M context window | 7 comments; filed same day as v1.2.20 release — fast follow needed |
| [#15972](https://github.com/anomalyco/opencode/issues/15972) — Subagent navigation broken | Regression from #15607 UI refactor; breaks multi-agent workflows | 4 comments; affects power users heavily |
| [#16321](https://github.com/anomalyco/opencode/issues/16321) — Windows Defender Trojan false positive | Distribution/installation blocker | 8 comments; reputation risk for project |
| [#13041](https://github.com/anomalyco/opencode/issues/13041) — Per-session MCP/LSP duplication | Architectural memory inefficiency | 2 comments but high severity; compounds existing memory issues |

---

## 4. Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#16413](https://github.com/anomalyco/opencode/pull/16413) | Browser tab favicon updated to new Vibe V logo | Merged |
| [#16412](https://github.com/anomalyco/opencode/pull/16412) | Aligned empty states across session feed, review panel, file tree | Open — TUI polish |
| [#16409](https://github.com/anomalyco/opencode/pull/16409) | Added `opencode-homeassistant` and `opencode-terminal-progress` to ecosystem docs | Open — community plugins |
| [#16408](https://github.com/anomalyco/opencode/pull/16408) | Fixed sticky accordion scroll behavior | Open — UI fix |
| [#13854](https://github.com/anomalyco/opencode/pull/13854) | Stopped streaming markdown after message completion (fixes table rendering) | Open — long-running TUI fix |
| [#16393](https://github.com/anomalyco/opencode/pull/16393) | Guard against invalid Drizzle migration entries at startup | Merged — stability fix |
| [#15926](https://github.com/anomalyco/opencode/pull/15926) | Experimental MCP Apps support for rich iframe UIs | Open — major feature behind flag |
| [#16402](https://github.com/anomalyco/opencode/pull/16402) | Stabilized locale routing (fixes 5+ reported issues) | Open — i18n infrastructure |
| [#14969](https://github.com/anomalyco/opencode/pull/14969) | Bedrock IAM credentials flow + env var auth | Open — AWS enterprise support |
| [#15863](https://github.com/anomalyco/opencode/pull/15863) | Major animation/timeline UI refactor ("ANIMATION RETRIBUTION II") | Open — vouched beta work |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Vim/keyboard-native TUI** | #1764 (109 👍), related TUI navigation issues | Very high — parity with ClaudeCode expected |
| **Enterprise security hardening** | mTLS support (#14696), permission system fixes (#16331), Bedrock IAM (#14969) | Growing — compliance requirements |
| **Memory/resource controls** | Multiple memory leaks reported, MCP/LSP deduplication (#13041), compaction tuning (#16333, #8089) | Critical — blocking production use |
| **Observability/debugging** | Failed connection URL display (#5945), stack trace logging (#16401) | Moderate — operational needs |
| **MCP ecosystem expansion** | MCP Apps experimental (#15926), plugin ecosystem docs updates | Active — strategic bet on extensibility |

---

## 6. Developer Pain Points

| Category | Symptoms | Root Patterns |
|----------|----------|---------------|
| **Memory management** | 60–318GB leaks, unbounded cache growth, LSP/MCP duplication | Bun→Node migration incomplete; per-process architecture lacks resource pooling |
| **TUI reliability** | Clipboard failures, JetBrains terminal incompatibility, scroll/animation bugs | Complex terminal emulation matrix; insufficient integration testing |
| **Permission model trust** | Config ignored, unexpected macOS sandbox prompts | Configuration parsing vs. enforcement gap; platform security integration opaque |
| **Model provider friction** | Azure OpenAI versioning, Gemini+Copilot auth, GPT-5.4 context underutilization | Provider API drift; new model onboarding lag |
| **Session/state durability** | Bricked sessions on cancel, unanswered questions disappearing | Message persistence logic fragile; error recovery missing |
| **Windows distribution** | Defender false positives, platform-specific bugs | Code signing/reputation building; CI coverage gaps |

---

*Digest compiled from github.com/anomalyco/opencode — 50 issues and 50 PRs active in last 24h.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-03-07

## Today's Highlights

The v0.12.0 preview channel landed with Windows CRLF/BOM parsing fixes and configurable tab width for code highlighting, addressing long-standing cross-platform compatibility gaps. Meanwhile, a burst of UI/UX PRs from @echoVic targets startup warning noise and session restoration reliability, signaling a focused polish sprint before stable release. The community continues pushing for `.agents/skills` standardization and memory efficiency in long-running sessions.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **v0.12.0-preview.0** | Fixed CLI markdown frontmatter parsing on Windows CRLF/BOM ([#2078](https://github.com/QwenLM/qwen-code/pull/2078)); added `tabWidth` support in `CodeColorizer` with tab-to-space conversion ([#2077](https://github.com/QwenLM/qwen-code/pull/2077)) |
| **v0.12.0-nightly.20260306.ff264038** | Same changes as preview.0 above |

---

## Hot Issues

| # | Title | Status | Why It Matters |
|---|-------|--------|--------------|
| [#2040](https://github.com/QwenLM/qwen-code/issues/2040) | Supports project-level Insight | 🔴 Open | Machine-level Insight forces context switching across projects; 13 comments show strong demand for scoped analytics. Authored by @wenshao (project maintainer). |
| [#535](https://github.com/QwenLM/qwen-code/issues/535) | Tool calls with edits/write fail when using Qwen3 30b | 🔴 Open | P1 bug breaking core file operations with popular local model; 10 comments, 2 👍. Regression from parameter validation changes. |
| [#966](https://github.com/QwenLM/qwen-code/issues/966) | Error: connect ECONNREFUSED 0.0.0.0:443 | 🟢 Closed | Network layer misconfiguration affecting proxy users; resolution patterns will help similar reports. |
| [#756](https://github.com/QwenLM/qwen-code/issues/756) | Qwen code does not use 'no_proxy' environment variable | 🔴 Open | Enterprise blocker—internal LLM servers unreachable behind corporate proxies; 6 comments. |
| [#2086](https://github.com/QwenLM/qwen-code/issues/2086) | 支持 .agents 目录存放的skills | 🔴 Open | Feature request to match Claude Code's `.agents` convention; 5 comments, 1 👍. Standards alignment pressure. |
| [#2131](https://github.com/QwenLM/qwen-code/issues/2131) | vscode + qwen空格键数字键无法使用 | 🟢 Closed | Critical input regression in VS Code remote environments; 4 comments. Duplicates [#2100](https://github.com/QwenLM/qwen-code/issues/2100), [#2123](https://github.com/QwenLM/qwen-code/issues/2123). |
| [#2074](https://github.com/QwenLM/qwen-code/issues/2074) | 询问之后，结果出来之前，中间的俏皮话可以去掉吗 | 🟢 Closed | UX complaint about unprofessional "quirky" loading phrases; 4 comments. Spurred [#2181](https://github.com/QwenLM/qwen-code/pull/2181) minimal phrase setting. |
| [#2128](https://github.com/QwenLM/qwen-code/issues/2128) | Memory grows unboundedly during long sessions | 🔴 Open | Root cause identified: unbounded `useHistoryManager.history` array; memory pressure affects multi-hour workflows. |
| [#2036](https://github.com/QwenLM/qwen-code/issues/2036) | Reduce memory usage of long-running tasks | 🔴 Open | Related to above; 4-8GB memory consumption reported, session resumption painfully slow. |
| [#2155](https://github.com/QwenLM/qwen-code/issues/2155) | feat: add support for reading skills from `.agents/skills` | 🔴 Open | Follow-up to [#1695](https://github.com/QwenLM/qwen-code/issues/1695); requests plural `.agents` (vs `.agent`) for ecosystem compatibility. |

---

## Key PR Progress

| # | Author | Summary | Impact |
|---|--------|---------|--------|
| [#2174](https://github.com/QwenLM/qwen-code/pull/2174) | @echoVic | Discover project skills from `.agents/skills` | Closes [#2155](https://github.com/QwenLM/qwen-code/issues/2155); enables Claude Code skill portability |
| [#2181](https://github.com/QwenLM/qwen-code/pull/2181) | @echoVic | Add `ui.loadingPhraseSet: minimal` setting | Addresses [#2074](https://github.com/QwenLM/qwen-code/issues/2074) UX complaints; neutral loading phrases |
| [#2180](https://github.com/QwenLM/qwen-code/pull/2180) | @echoVic | Setting to suppress root directory warning | Reduces startup noise for container/CI workflows |
| [#2176](https://github.com/QwenLM/qwen-code/pull/2176) | @echoVic | Include home path in startup warning | Improves debuggability of [#2136](https://github.com/QwenLM/qwen-code/issues/2136) class of issues |
| [#2170](https://github.com/QwenLM/qwen-code/pull/2170) | @echoVic | Restore thinking messages from JSONL sessions | Fixes [#2112](https://github.com/QwenLM/qwen-code/issues/2112); session replay fidelity |
| [#2162](https://github.com/QwenLM/qwen-code/pull/2162) | @echoVic | Preserve selected auth type when init auth fails | Closes [#2049](https://github.com/QwenLM/qwen-code/issues/2049); smoother auth retry flows |
| [#2171](https://github.com/QwenLM/qwen-code/pull/2171) | @echoVic | Derive search labels from tool title prefixes | Closes [#1367](https://github.com/QwenLM/qwen-code/issues/1367); better ACP tool call visualization |
| [#2063](https://github.com/QwenLM/qwen-code/pull/2063) | @Mingholy | Migrate ACP to `@agentclientprotocol/sdk` | v0.12.0 foundation; removes legacy custom implementation |
| [#1954](https://github.com/QwenLM/qwen-code/pull/1954) | @buaoyezz | VS Code auxiliary sidebar support | Major IDE integration enhancement; multi-panel workflows |
| [#2156](https://github.com/QwenLM/qwen-code/pull/2156) | @DennisYu07 | Move `enable` to `hookConfig`, add max turns | Hooks system refactoring; testability improvements |

---

## Feature Request Trends

1. **Skill Directory Standardization** — Strong push to support both `.agent/skills` and `.agents/skills` (plural) for interoperability with Claude Code and emerging conventions. Three related issues/PRs in 24h.

2. **Memory & Session Management** — Long-running session efficiency is emerging as a top theme: unbounded history growth ([#2128](https://github.com/QwenLM/qwen-code/issues/2128)), 4-8GB memory footprints ([#2036](https://github.com/QwenLM/qwen-code/issues/2036)), and slow model switching.

3. **Enterprise Proxy/Network** — `no_proxy` support ([#756](https://github.com/QwenLM/qwen-code/issues/756)) and certificate handling ([#1926](https://github.com/QwenLM/qwen-code/issues/1926)) indicate corporate deployment friction.

4. **Project-Level Scoping** — Insight analytics ([#2040](https://github.com/QwenLM/qwen-code/issues/2040)) and skill discovery need per-project granularity rather than machine-global.

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Input/Keyboard Handling** | Spacebar dead in VS Code remote, Codespaces, terminal ([#2131](https://github.com/QwenLM/qwen-code/issues/2131), [#2100](https://github.com/QwenLM/qwen-code/issues/2100), [#2123](https://github.com/QwenLM/qwen-code/issues/2123)) | 🔴 Critical cluster |
| **Encoding/Internationalization** | GBK→UTF-8 corruption ([#2069](https://github.com/QwenLM/qwen-code/issues/2069)), run_shell_command Unicode box-drawing mangling ([#2129](https://github.com/QwenLM/qwen-code/issues/2129)) | 🟡 Recurring |
| **Startup Warning Fatigue** | Home/root directory warnings, duplicate errors ([#2136](https://github.com/QwenLM/qwen-code/issues/2136) cluster) | 🟡 Addressed in PR sprint |
| **Tool Call Reliability** | Parameter validation failures with local models ([#535](https://github.com/QwenLM/qwen-code/issues/535)), intermittent empty streams ([#2064](https://github.com/QwenLM/qwen-code/issues/2064)) | 🔴 Blocking |
| **Session Portability** | Thought message loss ([#2112](https://github.com/QwenLM/qwen-code/issues/2112)), JSONL restoration gaps | 🟢 Active fix in progress |

---

*Digest compiled from github.com/QwenLM/qwen-code activity 2026-03-06 to 2026-03-07.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*