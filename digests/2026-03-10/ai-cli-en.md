# AI CLI Tools Community Digest 2026-03-10

> Generated: 2026-03-10 00:06 UTC | Tools covered: 7

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

# Cross-Tool AI CLI Ecosystem Report — 2026-03-10

## 1. Ecosystem Overview

The AI CLI tool landscape has matured into a competitive multi-vendor market with six actively maintained alternatives. All major tools now support MCP (Model Context Protocol) servers, multi-agent workflows, and desktop/TUI interfaces. Development velocity remains high across the board, with rapid iteration cycles driven by community pressure for Windows parity, cost transparency, and IDE integration. The space is consolidating around shared architectural patterns while differentiating on execution models (autonomous vs. approval-gated), pricing structures, and ecosystem openness.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases | Release Cadence | Notes |
|:---|:---:|:---:|:---:|:---|:---|
| **Claude Code** | 10 tracked | 9 merged/open | None | Stable | Plugin ecosystem thriving; critical data loss bug emerged |
| **OpenAI Codex** | 10 tracked | 10 merged/open | 2 alphas (v0.113.0-α.1/2) | Rapid (2/24h) | Rust CLI migration; P0 Windows hang regression |
| **Gemini CLI** | 10 tracked | 10 merged/open | 3 previews (v0.33.0-p.6/7/8) | Aggressive (3/24h) | Automated cherry-pick pipeline; merge conflicts emerging |
| **GitHub Copilot CLI** | 10 tracked | 0 updated | v1.0.3 (+3 patches) | Moderate | Extensions launch; terminal rendering crisis |
| **Kimi CLI** | 8 tracked | 9 merged/open | v1.18.0 | Moderate | ACP/Zed integration focus; regression triage mode |
| **OpenCode** | 10 tracked | 10 merged/open | v1.2.24, v1.2.23 | Steady | Memory leak fix coordinated; Cursor integration demand |
| **Qwen Code** | 11 tracked | 10 merged/open | v0.12.0 (+nightly) | Steady | Windows input bugs critical; release workflow failed |

*Issue/PR counts reflect items with significant activity in digest period, not totals.*

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Community Needs |
|:---|:---|:---|
| **MCP Ecosystem Maturity** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Kimi CLI, Qwen Code | OAuth server support (#33 Copilot), namespace isolation (#1766 Copilot), tool access in sub-agents (#24841 Claude), Google GenAI compatibility (#739 Kimi) |
| **Windows/WSL Parity** | *All seven tools* | WSL2 detection (#10567 Claude), PowerShell 7 default (#21710 Gemini), Unicode paths (#13575 Codex), CRLF/BOM parsing (#2204 Qwen), terminal rendering (#1584 Copilot), spacebar input (#2101 Qwen) |
| **Cost/Usage Transparency** | Claude Code, OpenAI Codex, GitHub Copilot CLI | Billing limit disputes (#16157 Claude), usage drain spikes (#14116 Codex), MCP token consumption controls (#768 Copilot), silent plan changes (#28927 Claude) |
| **Multi-agent/Sub-agent Orchestration** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Qwen Code | MCP access in sub-agents (#32514 Claude), agent identity context (#26252 Claude), Task Group accordion UI (#21451-21454 Gemini), hierarchical delegation (#7756 OpenCode), Agent Team collaboration (#1815 Qwen) |
| **IDE Integration & Editor Ecosystem** | Claude Code, Kimi CLI, OpenCode, Qwen Code | Zed ACP stability (#1375 Kimi), Cursor CLI support (#2072 OpenCode), VS Code sidebar (#2188 Qwen), LSP connectivity (#15619 Claude), Sublime/Emacs (#21090 Gemini) |
| **Session/Workspace Management** | Claude Code, Gemini CLI, Kimi CLI, OpenCode | History session selection (#1366 Kimi), workspace auth (#15487 OpenCode), project config precedence (#13025 Codex), session resume reliability (#14125 Codex) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi CLI | OpenCode | Qwen Code |
|:---|:---|:---|:---|:---|:---|:---|:---|
| **Core Execution Model** | Approval-gated with Cowork VM | Auto-approval with Guardian review | Plan-mode with accordion UI | GitHub-native, permission hooks | ACP protocol for editors | Universal backend, multi-provider | YOLO mode + Arena competition |
| **Target User** | Enterprise teams, safety-conscious | Pro developers, speed-oriented | Google ecosystem, research workflows | GitHub-centric developers | Zed/IDE-integrated developers | Multi-tool power users, teams | VS Code users, competitive evaluators |
| **Pricing Model** | Max subscription ($200/mo) with disputes | Pro tier + API usage | Google One AI Premium | Copilot Pro/Enterprise | Usage-based via Moonshot API | Multi-provider (BYO key) | DashScope + local models |
| **Extensibility** | Rich plugin ecosystem (9+ plugins) | Hooks engine MVP (#13276), Extensions alpha | Extension marketplace with migration | Extensions SDK (@github/copilot-sdk) | MCP tool ecosystem | Plugin sidebar, MCP Apps iframes | Skills in `.agents/`, 10 event hooks |
| **Technical Architecture** | TypeScript, Cowork isolated VMs | Rust CLI migration in progress | Go, automated release pipeline | TypeScript, alt-screen TUI | Python, ACP protocol | TypeScript, Hono runtime | TypeScript, VS Code extension priority |
| **Key Differentiator** | Plugin ecosystem maturity | Guardian safety system | Self-reflection/agent awareness | GitHub-native integration | Editor protocol (ACP) specialization | Universal model router | Multi-agent Arena competition |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|:---|:---|:---|
| **Highest Velocity** | Gemini CLI, OpenAI Codex | 3 releases/24h (Gemini), 2 alphas/24h (Codex); aggressive automation; rapid regression response |
| **Active & Stable** | Claude Code, OpenCode | Sustained plugin/PR activity; coordinated memory leak response (#16695); mature governance |
| **Integration-Focused** | Kimi CLI, Qwen Code | ACP protocol hardening; Windows bug triage; editor ecosystem expansion |
| **Enterprise Caution** | GitHub Copilot CLI | v1.0.3 Extensions launch significant, but 0 PRs in 24h and terminal rendering crisis (#1584, #373, #1937) suggests resource strain |

**Maturity Signals:**
- **Claude Code**: Most mature plugin ecosystem; chronic billing disputes indicate scale challenges
- **OpenCode**: Strongest multi-provider abstraction; community-driven Cursor integration demand signals positioning success
- **Gemini CLI**: Most aggressive release engineering; "agent self-awareness" workstream (#21432, #21780) indicates architectural ambition
- **Qwen Code**: Fastest feature experimentation (Arena, YOLO) but Windows stability debt accumulating

---

## 6. Trend Signals

| Trend | Evidence | Implication for Developers |
|:---|:---|:---|
| **MCP as Lingua Franca** | Universal adoption; OAuth RFC 9728 compliance (#2212 Qwen); namespace isolation demands | Invest in MCP server development; expect standardization of authentication and permission scopes |
| **Windows as Second-Class Platform** | Critical bugs across all tools; disproportionate issue volume | Linux/macOS remain primary development targets; Windows users should expect friction or use WSL2 |
| **Cost Control as Core Feature** | Usage transparency plugins (#32142 Claude), billing dispute volume, token consumption anxiety | Tool selection increasingly driven by predictable pricing; "bring your own API key" models (OpenCode, Kimi) gain appeal |
| **Agent Orchestration Complexity** | Sub-agent MCP access gaps, session isolation bugs, hierarchical delegation PRs | Multi-agent workflows still immature; expect 6-12 months of architectural iteration before reliability |
| **Terminal UX as Battleground** | Accordion UIs (Gemini), spinner customization (Claude), scroll jitter fixes (OpenCode), rendering crises (Copilot) | TUI polish becoming differentiator; accessibility and terminal compatibility rising in priority |
| **IDE Protocol Competition** | ACP (Kimi), LSP tool gaps (Claude), Extensions SDK (Copilot), Cursor integration (OpenCode) | Editor-agnostic tools gaining advantage; vendor lock-in through protocol specialization emerging risk |

---

*Report compiled from community digest data dated 2026-03-10. For real-time updates, consult individual project repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-03-10 | github.com/anthropics/skills*

---

## 1. Top Skills Ranking

| Rank | Skill | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | 🟡 Open | Typographic quality control preventing orphans, widows, and numbering misalignment in AI-generated documents | Addresses universal pain point in document generation; zero comments suggests awaiting review |
| 2 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | 🟡 Open | Revised guidance for actionable, single-conversation frontend design workflows | Iterative refinement for clarity and token efficiency; 2+ months in review |
| 3 | **[skill-quality-analyzer](https://github.com/anthropics/skills/pull/83)** + **[skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | 🟡 Open | Meta-skills for evaluating Skill quality across 5 dimensions and security posture | First meta-Skills in marketplace; 4+ months pending |
| 4 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | 🟡 Open | Persistent memory system maintaining context across Claude Code sessions | Addresses core platform limitation (statelessness); 3+ months in review |
| 5 | **[ODT](https://github.com/anthropics/skills/pull/486)** | 🟡 Open | OpenDocument creation, template filling, and HTML parsing | Enterprise document workflow integration; active updates through 2026-03-09 |
| 6 | **[record-knowledge](https://github.com/anthropics/skills/pull/521)** + **[plan-task](https://github.com/anthropics/skills/pull/522)** | 🟡 Open | Companion session-persistence Skills: tagged knowledge base and task planning with Git-tracked progress | Recently submitted (2026-03-05); directly tackles Claude Code's cold-start problem |
| 7 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | 🟡 Open | 10-step systematic audit for orphaned code, documentation gaps, and infrastructure bloat | Technical debt management at scale; 3 months pending |

---

## 2. Community Demand Trends

From **Issues with 2+ comments**, the most-anticipated Skill directions are:

| Trend | Evidence | Representative Issues |
|:---|:---|:---|
| **Session Persistence & Memory** | 3+ Skills proposed, highest emotional urgency | [#62](https://github.com/anthropics/skills/issues/62) (skills disappearing), [#154](https://github.com/anthropics/skills/pull/154), [#521](https://github.com/anthropics/skills/pull/521), [#522](https://github.com/anthropics/skills/pull/522) |
| **Enterprise/SSO Integration** | Authentication gaps blocking adoption | [#532](https://github.com/anthropics/skills/issues/532) (API key requirement excludes SSO users), [#29](https://github.com/anthropics/skills/issues/29) (AWS Bedrock support) |
| **Agent Governance & Safety** | Closed but notable: policy enforcement, trust scoring, audit trails | [#412](https://github.com/anthropics/skills/issues/412) |
| **MCP Interoperability** | Skills↔MCP bridge requests; protocol standardization | [#16](https://github.com/anthropics/skills/issues/16) (Expose Skills as MCPs), [#369](https://github.com/anthropics/skills/issues/369), [#273](https://github.com/anthropics/skills/issues/273) |
| **Skill Quality Tooling** | Meta-automation for creating better Skills | [#202](https://github.com/anthropics/skills/issues/202) (skill-creator best practices), [#83](https://github.com/anthropics/skills/pull/83) |

---

## 3. High-Potential Pending Skills

Active PRs with recent momentum likely to merge:

| Skill | PR | Last Activity | Why It May Land Soon |
|:---|:---|:---|:---|
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | 2026-03-09 | Active iteration; fills enterprise document gap |
| **record-knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | 2026-03-09 | Fresh submission addressing #1 user pain point |
| **plan-task** | [#522](https://github.com/anthropics/skills/pull/522) | 2026-03-09 | Complements #521 as session-persistence suite |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 2026-03-05 | Universal applicability; low complexity |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | 2026-03-04 | Community health infrastructure; closes [#452](https://github.com/anthropics/skills/issues/452) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for stateful session management** — Skills that persist memory, task progress, and accumulated knowledge across Claude Code's otherwise stateless sessions, reflecting a fundamental platform gap that users are urgently trying to solve through the Skills system itself.

---

---

# Claude Code Community Digest — 2026-03-10

## Today's Highlights

A critical data loss bug in Claude Cowork involving iCloud-offloaded files has emerged, while the community continues to press for resolution on billing transparency issues with Max subscriptions. Plugin ecosystem activity remains robust with new autonomous task execution and internationalization contributions.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#16157](https://github.com/anthropics/claude-code/issues/16157) | **Max subscription usage limits hit instantly** | 541 upvotes, 1227 comments—longest-running billing dispute; users report paying $200/month for effectively no access | Sustained pressure for official response; marked `oncall` |
| [#23377](https://github.com/anthropics/claude-code/issues/23377) | **GitHub Issue Prompt Too Long (Windows)** | Memory-related context window exhaustion when processing large issues; has reproduction | 25 comments, active debugging |
| [#26224](https://github.com/anthropics/claude-code/issues/26224) | **Claude Code hanging/freezing 5-20+ minutes** | Critical reliability issue affecting daily workflows; urgent tag | 33 upvotes, escalating complaints |
| [#17087](https://github.com/anthropics/claude-code/issues/17087) | **Empty read-only dotfiles created during Bash execution** | Pollutes working directories; now closed but pattern of tool side-effects concerns users | 69 upvotes, resolved |
| [#10567](https://github.com/anthropics/claude-code/issues/10567) | **`/sandbox` unsupported in WSL2 Linux** | Platform detection failure blocks containerized workflows on Windows | 21 upvotes, long-standing |
| [#28927](https://github.com/anthropics/claude-code/issues/28927) | **Silent billing change: 1M context moved to extra-usage** | JSONL evidence shows identical workloads billed differently post-v2.1.51; trust erosion | 12 upvotes, demands transparency |
| [#32637](https://github.com/anthropics/claude-code/issues/32637) | **Cowork destroys iCloud-offloaded files** | `cp` + `rm -rf` on 0-byte stubs causes permanent data loss; critical severity | Just reported, needs immediate attention |
| [#19649](https://github.com/anthropics/claude-code/issues/19649) | **Over-reliance on Bash tools vs. built-ins** | Model behavior issue: uses `sed/grep` when `Read`/`Grep` tools suffice; efficiency concern | 31 upvotes, Bedrock-specific |
| [#23134](https://github.com/anthropics/claude-code/issues/23134) | **Disable paste text collapse in input** | UX friction: collapsed pasted blocks hide content for review | 29 upvotes, clear use-case |
| [#15619](https://github.com/anthropics/claude-code/issues/15619) | **LSP tool cannot connect to installed language servers** | Limits IDE-like functionality despite global LSP availability | 17 upvotes, power-user feature |

---

## Key PR Progress

| # | Pull Request | Description |
|---|--------------|-------------|
| [#32629](https://github.com/anthropics/claude-code/pull/32629) | **cc-taskrunner plugin** | Autonomous task queue with branch isolation, safety timeouts, and CI integration—enables unattended overnight execution |
| [#32625](https://github.com/anthropics/claude-code/pull/32625) | **CLAUDE.md documentation** | Comprehensive developer guide for repository structure, automation, and plugin architecture |
| [#32430](https://github.com/anthropics/claude-code/pull/32430) | **Clarify plugin examples vs. built-ins** | Documentation fix reducing confusion about plugin scope vs. core features |
| [#32488](https://github.com/anthropics/claude-code/pull/32488) | **Improve dedupe workflow** | Hardens duplicate-comment tooling and aligns metadata with repository state |
| [#32142](https://github.com/anthropics/claude-code/pull/32142) | **Usage transparency plugin** | Quota troubleshooting tool distinguishing rate limits, auth conflicts, and billing state |
| [#32408](https://github.com/anthropics/claude-code/pull/32408) | **Paper Writing Plugin** | 6-phase academic workflow with specialized agents for argument development |
| [#32278](https://github.com/anthropics/claude-code/pull/32278) | **i18n-spinner-tips plugin** | Bilingual dev tips in 8 languages (CN/JP/KR/FR/ES/DE/PT/RU) during thinking states |
| [#17776](https://github.com/anthropics/claude-code/pull/17776) | **security-guidance plugin README** | Final plugin documentation gap filled—9 security patterns documented |
| [#28850](https://github.com/anthropics/claude-code/pull/28850) | **Windows PowerShell install clarification** | Prevents `'irm' is not recognized` errors from cmd.exe misuse |
| [#31543](https://github.com/anthropics/claude-code/pull/31543) | **Piped commands permission documentation** | Explains that each piped segment needs separate `allow` entries |

---

## Feature Request Trends

1. **MCP & Sub-agent Expansion** — Multiple requests for MCP tool access in Task sub-agents ([#24841](https://github.com/anthropics/claude-code/issues/24841), [#26252](https://github.com/anthropics/claude-code/issues/26252), [#32514](https://github.com/anthropics/claude-code/issues/32514)) and agent identity context for resource isolation

2. **Desktop Multi-window & Detachment** — Strong demand for multi-window support ([#30154](https://github.com/anthropics/claude-code/issues/30154)) and OS-level detachable windows for split-screen workflows ([#27725](https://github.com/anthropics/claude-code/issues/27725))

3. **Terminal Integration Standards** — OSC 133 semantic prompt sequences for modern terminal navigation ([#26235](https://github.com/anthropics/claude-code/issues/26235), [#32635](https://github.com/anthropics/claude-code/issues/32635))

4. **LSP & IDE Parity** — Connecting to existing language servers ([#15619](https://github.com/anthropics/claude-code/issues/15619)) and broader IDE feature coverage

---

## Developer Pain Points

| Category | Issue | Frequency |
|----------|-------|-----------|
| **Billing Transparency** | Usage limits, silent plan changes, and quota accounting | *Chronic* — #16157 and #28927 dominate discourse |
| **Windows Reliability** | WSL2 detection failures, cowork VM errors (HCS 0x800707de), and platform-specific hangs | *High* — disproportionate Windows bug volume |
| **Cowork Stability** | Session visibility, reconnection failures, and now **data loss with iCloud files** | *Escalating* — #32637 is critical |
| **Context/Performance** | Hanging on prompts, memory exhaustion with large inputs, and model tool selection inefficiency | *Persistent* |
| **TUI Customization** | Settings ignored (spinnerVerbs), paste collapse behavior, and visual feedback gaps | *Moderate* |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-10

---

## 1. Today's Highlights

The Codex team shipped two rapid-fire Rust CLI alphas (v0.113.0-alpha.1/2) while the community grapples with a critical regression causing indefinite hangs across all models on Windows/WSL (#14048, 97 comments). Meanwhile, major infrastructure work lands for Windows sandbox IPC, server-side compaction, and TUI hardening against stuck threads.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| **rust-v0.113.0-alpha.2** | Second alpha in 24h; release notes minimal—appears to be iterative fixes on alpha.1 |
| **rust-v0.113.0-alpha.1** | First alpha of 0.113 line |

*No detailed changelogs provided for either release.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [#14048](https://github.com/openai/codex/issues/14048) — CLI hangs indefinitely on all prompts (Windows/WSL, all models) | **P0 regression** affecting v0.111.0–0.112.0; blocks all usage for affected users | 97 comments, 76 👍; rapid triage underway, users confirming cross-model impact |
| [#2847](https://github.com/openai/codex/issues/2847) — Exclude sensitive files (.codexignore) | Long-standing security gap; enterprise users need repo-level + global ignore lists | 60 comments, 246 👍; highest-voted open issue, design discussion ongoing |
| [#12764](https://github.com/openai/codex/issues/12764) — 401 Unauthorized on Windows CLI | Auth failures blocking Windows adoption; cf-ray IDs suggest edge routing issues | 51 comments; workarounds ineffective for most |
| [#12661](https://github.com/openai/codex/issues/12661) — Markdown file:// links open in Edge not VS Code | Breaks IDE-native workflow for Windows extension users | 19 comments, 21 👍; UX friction for documentation navigation |
| [#13747](https://github.com/openai/codex/issues/13747) — Codex App bundles broken alpha CLI while standalone works | Version skew between App and CLI channels confusing users | 13 comments; signals release process gaps |
| [#2880](https://github.com/openai/codex/issues/2880) — Copy/Export message as Markdown | Documentation/export workflow gap for technical writers | 11 comments, 33 👍; TUI limitation vs. web |
| [#12852](https://github.com/openai/codex/issues/12852) — Desktop threads stuck "Thinking", unkillable without force-quit | Reliability issue for long-running sessions; data loss risk | 10 comments; macOS Business tier affected |
| [#13025](https://github.com/openai/codex/issues/13025) — Desktop ignores project `.codex/config.toml`, only loads global | Breaks per-project MCP server configuration | 9 comments, 7 👍; Serena MCP users blocked |
| [#12129](https://github.com/openai/codex/issues/12129) — ENTER sends, Ctrl+Enter newlines (inverted from chat norms) | Muscle-memory conflict for multiline input | 9 comments, 7 👍; configurability requested |
| [#14116](https://github.com/openai/codex/issues/14116) — Usage drain spikes with Fast mode + aggressive multi-agent | Cost regression since ~0.111.0; impacts Pro users financially | 2 comments; fresh report, needs validation |

---

## 4. Key PR Progress

| PR | Feature / Fix | Significance |
|----|-------------|------------|
| [#13860](https://github.com/openai/codex/pull/13860) — Guardian assessment thread items | Surfaces auto-approval review state in thread history; security transparency | App-server + TUI integration |
| [#13276](https://github.com/openai/codex/pull/13276) — Hooks engine MVP (SessionStart/Stop) | Foundational lifecycle hooks for external integrations | Synchronous, blocking design for reliability |
| [#14139](https://github.com/openai/codex/pull/14139) — Windows sandbox runner IPC foundation | Enables future `unified_exec` on Windows; ConPTY + elevation plumbing | Infrastructure-only, no active sandbox yet |
| [#13825](https://github.com/openai/codex/pull/13825) — Custom model aliases in config.toml | User-defined model mappings with context window overrides | Supersedes #13665; power-user flexibility |
| [#13978](https://github.com/openai/codex/pull/13978) — Server-side compaction (feature-flagged) | Moves compaction to `/responses` inline vs. legacy `/compact` path | Reduces round-trips; default-off for safety |
| [#14018](https://github.com/openai/codex/pull/14018) — TUI → in-process app-server migration | Eliminates direct `CodexThread` handle; enables protocol-layer features | Architectural hardening |
| [#14125](https://github.com/openai/codex/pull/14125) — Mark incomplete resumed turns interrupted | Fixes "stuck thread" on app restart after crash | Reliability fix for #12852 class of bugs |
| [#14122](https://github.com/openai/codex/pull/14122) — `request_permissions` "always allow" persistence | Remembers approval decisions in permissions profile | Reduces repetitive prompts |
| [#13923](https://github.com/openai/codex/pull/13923) — Keyboard agent switching in TUI | `Cmd/Ctrl+Shift+[/]` for rapid multi-agent navigation | Power-user TUX improvement |
| [#14017](https://github.com/openai/codex/pull/14017) — Stabilize websocket `response.failed` delivery | Drops failed connections immediately vs. awaiting close handshake | Fixes flaky error propagation |

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Configuration & Ignores** | #2847 (.codexignore), #13025 (project config), #14133 (context window ignored) | High—enterprise adoption blocker |
| **Windows-native experience** | #13993 (standalone installer), #13762 (WSL path handling), #13575 (Unicode paths) | Rising—MS Store friction driving demand |
| **Export & Documentation** | #2880 (Markdown export), #14073 (thread version control) | Moderate—technical writing workflows |
| **Input ergonomics** | #12129 (Enter/Ctrl+Enter swap), #13923 (agent switching) | Active—TUI polish phase |
| **Cost controls** | #14116 (usage drain), #14109 (API/subscription compatibility) | Emerging—Pro tier sensitivity |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Windows/WSL reliability** | Hangs (#14048), auth failures (#12764), path/Unicode issues (#13575, #13762), installer restrictions (#13993) | **Critical** — dominates top issues |
| **Thread lifecycle fragility** | Stuck "Thinking" states (#12852, #14094, #14127), orphaned threads (#14137), resume failures (#14125) | High — affects all platforms |
| **Configuration discoverability** | Project vs. global config precedence (#13025, #14133), ignore mechanisms (#2847) | Moderate-High |
| **Version/channel confusion** | Bundled CLI broken while standalone works (#13747), alpha stability | Moderate |
| **Cost/usage transparency** | Fast mode drain (#14116), subscription tier mismatches (#14109) | Rising |

---

*Digest compiled from github.com/openai/codex public activity. For corrections or additions, open an issue or discussion.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-10

---

## 1. Today's Highlights

The team is aggressively iterating on the v0.33.0 preview channel with three patch releases in 24 hours targeting symlink recursion fixes and billing overage strategy bugs. Meanwhile, a major UX initiative for "Task Group" accordion UI is unfolding across multiple workstream issues to combat terminal scrollback noise. The community is also pushing hard on editor integrations and Windows PowerShell 7 support.

---

## 2. Releases

| Version | Summary |
|---------|---------|
| **v0.33.0-preview.6** | Cherry-pick patch for release branch stability ([changelog](https://github.com/google-gemini/gemini-cli/compare/v0.33.0-preview.5...v0.33.0-preview.6)) |
| **v0.33.0-preview.7** | Incremental preview release ([changelog](https://github.com/google-gemini/gemini-cli/compare/v0.33.0-preview.6...v0.33.0-preview.7)) |
| **v0.33.0-preview.8** | Cherry-pick patch addressing symlink resolution ([changelog](https://github.com/google-gemini/gemini-cli/compare/v0.33.0-preview.7...v0.33.0-preview.8)) |

All three releases are automated cherry-picks via `@gemini-cli-robot`, indicating a stabilized release pipeline for rapid iteration.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#20716](https://github.com/google-gemini/gemini-cli/issues/20716) | Plan truncation in approval dialog (15-line limit) | Blocks visibility into complex multi-step plans; users can't fully review before approving | 8 comments, maintainer-tagged for triage |
| [#20549](https://github.com/google-gemini/gemini-cli/issues/20549) | Cannot exit plan mode due to wrong plans path | Critical workflow breakage—users stuck in plan mode indefinitely | P1 priority, 7 comments |
| [#21718](https://github.com/google-gemini/gemini-cli/issues/21718) | CONTRIBUTING.md needs higher community expectations | Meta-concern about issue assignment gamification; signals governance friction | 5 comments, "help wanted" |
| [#21461](https://github.com/google-gemini/gemini-cli/issues/21461) | Shell command aliases not supported | Power user friction—breaks muscle memory from `.bashrc`/`.zshrc` configurations | Maintainer-only, workstream-rollup |
| [#20886](https://github.com/google-gemini/gemini-cli/issues/20886) | Refine subagents UX | Core agent experience polish; expanders and thinking cleanup for subagent visibility | P2 priority, active design iteration |
| [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) | Agent "self-awareness": accurate flags, hotkeys, self-execution | Fundamental capability gap—agent cannot reliably document its own CLI interface | Workstream-rollup, long-term architecture |
| [#21421](https://github.com/google-gemini/gemini-cli/issues/21421) | Periodic reflection for skill creation | Enables autonomous skill evolution; bridges to memory systems | 1 comment, 👍 1 |
| [#20331](https://github.com/google-gemini/gemini-cli/issues/20331) | Safe tools should run during agent execution | UX papercut—`/settings`, `/vim` blocked unnecessarily during agent runs | Workstream-rollup |
| [#21596](https://github.com/google-gemini/gemini-cli/issues/21596) | Warn users about suspicious policies | Safety gap—auto-approve rules for `rm` can silently destroy data | Zero comments but critical security surface |
| [#21789](https://github.com/google-gemini/gemini-cli/issues/21789) | "Lies over Lies" — agent hallucination report | Trust erosion in agent outputs; includes exported chat history for debugging | Filed today, needs triage |

---

## 4. Key PR Progress

| # | PR | Feature/Fix | Status |
|---|-----|-------------|--------|
| [#21788](https://github.com/google-gemini/gemini-cli/pull/21788) | Cherry-pick for v0.33.0-preview.9 | Automated patch pipeline; **merge conflicts detected** requiring manual resolution | Open, blocked |
| [#21780](https://github.com/google-gemini/gemini-cli/pull/21780) | Prototype self-reflection | Core agent capability—enables trajectory analysis and skill recommendations | Open, P1 |
| [#21784](https://github.com/google-gemini/gemini-cli/pull/21784) | Improve API response error logging | Better telemetry for retry failures; fixes underreporting of network errors | Open |
| [#21236](https://github.com/google-gemini/gemini-cli/pull/21236) | Fix billing overage strategy lifecycle | **Merged**—resets `ask` strategy per turn instead of mutating to `always` | Closed |
| [#21786](https://github.com/google-gemini/gemini-cli/pull/21786) | Add setting to hide git branch from footer | UI noise reduction; parity with existing `hideModelInfo` settings | Open |
| [#21715](https://github.com/google-gemini/gemini-cli/pull/21715) | Extension migration support | Seamless repo/name changes for extensions via `migratedTo` field | Closed |
| [#21750](https://github.com/google-gemini/gemini-cli/pull/21750) | Prevent infinite recursion in symlink resolution | **Merged**—stability fix for malicious/circular symlinks | Closed, cherry-picked to preview.8 |
| [#21710](https://github.com/google-gemini/gemini-cli/pull/21710) | Prefer PowerShell 7 on Windows | Modern shell default; falls back to Windows PowerShell | Open, "need-issue" |
| [#21090](https://github.com/google-gemini/gemini-cli/pull/21090) | Add Sublime Text, Emacs Client support | Editor ecosystem expansion with better error messages | Open, "help wanted" |
| [#20738](https://github.com/google-gemini/gemini-cli/pull/20738) | Configurable `maxFileCount` for file search | Exposes 20K hard limit as user setting with truncation warnings | Open, "help wanted" |

---

## 5. Feature Request Trends

| Theme | Evidence | Direction |
|-------|----------|-----------|
| **Verbosity & UI Density** | #21451–21454 (Task Group accordion), #20716 (plan truncation), #21785 (hide git branch) | Aggressive push toward collapsible, contextual UI that respects terminal real estate |
| **Agent Self-Awareness** | #21432 (CLI flags/hotkeys), #21780 (self-reflection), #21421 (skill creation) | Agent must become its own expert system—documenting, optimizing, and extending itself |
| **Safety & Policy Guardrails** | #21596 (suspicious policy warnings), #21580 (workspace policies), #20331 (safe tools) | Enterprise-grade policy enforcement with user-visible safety nets |
| **Editor/Shell Ecosystem** | #21710 (pwsh), #21090 (Sublime/Emacs), #20376 (GUI editor exit codes), #16131 (invalid editor handling) | Treating developer environment diversity as first-class |
| **Performance & Latency** | #21646 (parallelize startup), #21528 (avoid await), #21518–21519 (network/IO caching) | Systematic latency reduction across cold start and runtime paths |

---

## 6. Developer Pain Points

| Pain Point | Manifestation | Frequency Signal |
|------------|-------------|----------------|
| **Plan mode fragility** | Exit failures (#20549), truncation (#20716), double footers (#21743) | 3+ related issues, P1/P2 mix |
| **Agent blocking UX** | Safe tools unavailable during runs (#20331), shell aliases ignored (#21461) | Workflow interruption complaints |
| **Configuration discoverability** | `/clear` docs omit context clearing (#19239), policy loading unclear (#21580) | Documentation gaps with "help wanted" tags |
| **Windows/PowerShell second-class** | Default to legacy PowerShell, no pwsh preference | Active PR (#21710) suggests pent-up demand |
| **Cherry-pick pipeline friction** | Merge conflicts in automated releases (#21788) | Release engineering toil visible in PR queue |

---

*Digest compiled from github.com/google-gemini/gemini-cli activity 2026-03-09 to 2026-03-10.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-10

## Today's Highlights

GitHub Copilot CLI v1.0.3 shipped with **Extensions as an experimental feature**, enabling developers to write custom tools and hooks using `@github/copilot-sdk`. The release also introduces MCP server configuration support via `.devc` files and improved environment variable documentation. Terminal rendering issues remain the top community pain point, with multiple scrolling and display corruption reports surfacing in the last 24 hours.

---

## Releases

### v1.0.3 (2026-03-09)
[Full changelog](https://github.com/github/copilot-cli/releases/tag/v1.0.3)

| Feature | Description |
|---------|-------------|
| **Extensions (Experimental)** | Ask Copilot to write custom tools and hooks for itself using `@github/copilot-sdk` |
| **MCP Server Config** | Read MCP server configuration from `.devc` files |
| **Environment Docs** | Document `GH_HOST`, `HTTP_PROXY`, `HTTPS_PROXY`, `NO_COLOR`, `NO_PROXY` in help |
| **Alt-Screen Buffer** | Enabled by default for staff users |
| **Binary Version Flag** | `--binary-version` queries CLI version without launching |
| **Background Tasks** | Task notifications display in timeline with expandable detail |
| **Exit Command** | Type `quit` to exit the CLI |

*Patch releases v1.0.3-0 through v1.0.3-2 iterated on these features with minor fixes.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#33](https://github.com/github/copilot-cli/issues/33) | **Support OAuth HTTP MCP servers** — *CLOSED* | Unlocks enterprise integrations with Figma, Atlassian, and other OAuth-protected MCP servers | 29 comments, 103 👍 — highest engagement this cycle; long-awaited for design/PM workflows |
| [#1595](https://github.com/github/copilot-cli/issues/1595) | **Cannot access any model** — *OPEN, triage* | Enterprise users blocked despite valid subscriptions and available premium requests | 12 comments, 5 👍; policy/config bug affecting production users |
| [#1584](https://github.com/github/copilot-cli/issues/1584) | **Incessant scrolling during long operations** — *OPEN* | Severe UX degradation — terminal "seizure" effect during extended tasks | 10 comments, 14 👍; humor masks serious accessibility concern |
| [#373](https://github.com/github/copilot-cli/issues/373) | **CLI stutters and scrolls up/down** — *OPEN, triage* | Related rendering bug causing rapid terminal oscillation | 9 comments, 9 👍; workaround requires manual scrollbar intervention |
| [#1754](https://github.com/github/copilot-cli/issues/1754) | **AssertionError + HTTP/2 GOAWAY during retrospective** — *OPEN, triage* | Deep HTTP connection pool failure with 503 errors | 6 comments, 9 👍; infrastructure stability concern |
| [#1928](https://github.com/github/copilot-cli/issues/1928) | **Allow pausing copilot work** — *OPEN, triage* | No mid-task intervention mechanism when execution diverges | 4 comments, 1 👍; workflow control gap vs. competitors |
| [#768](https://github.com/github/copilot-cli/issues/768) | **Option to disable MCP servers by default** — *OPEN, triage* | Token cost control — users want opt-in, not opt-out | 3 comments, 18 👍; strong cost-management demand |
| [#1326](https://github.com/github/copilot-cli/issues/1326) | **Option to disable all animations** — *OPEN, triage* | Accessibility and distraction reduction | 3 comments, 13 👍; accessibility/community health priority |
| [#1585](https://github.com/github/copilot-cli/issues/1585) | **macOS Cmd+C broken after alt-screen default** — *OPEN, triage* | Copy-paste regression from v0.0.413 experimental flag change | 2 comments, 5 👍; daily workflow blocker for Mac users |
| [#1937](https://github.com/github/copilot-cli/issues/1937) | **MSBuild floods terminal with VT mouse tracking** — *OPEN, triage* | Raw escape sequence spam, potential host crashes | 1 comment, 0 👍; severe Windows/.NET developer blocker |

---

## Key PR Progress

*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **MCP Ecosystem Maturity** | #33 (OAuth), #768 (disable by default), #1766 (namespacing), #1207 (skills check) | Community scaling MCP adoption needs enterprise-grade controls |
| **Terminal UX Hardening** | #1584, #373, #1326, #1585, #1937, #1842 (tmux scrolling) | Rendering stack needs architectural attention; accessibility gaps |
| **Workflow Control** | #1928 (pause), #1651 (permission hooks), #1654 (plan mode respect) | Users need finer-grained intervention and observability |
| **Cross-Platform Polish** | #1685 (Windows paste), #1918 (WSL Unicode), #1585 (macOS copy) | Platform-native behavior inconsistencies accumulating |
| **Agent/Skill System Evolution** | #1374 (nested subagents), #1766 (namespacing), #978 (skill auto-trigger) | Complex agent orchestration demands more sophisticated runtime |

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Terminal Rendering Instability** | Scrolling seizures, stuttering, mouse tracking corruption, tmux incompatibility | **Critical** — 5+ related issues in 24h; alt-screen changes likely culprit |
| **Enterprise Policy/Auth Gaps** | "Access denied" errors despite valid subscriptions; OAuth MCP friction | **High** — #1595, #1897, #33 cluster around entitlement/config issues |
| **Token Cost Anxiety** | MCP servers consuming premium requests unpredictably; no disable-by-default | **High** — #768 (18 👍) represents latent demand for cost controls |
| **Copy-Paste Regressions** | macOS Cmd+C, Windows Ctrl+V, WSL Unicode all broken in recent builds | **Medium-High** — platform fundamentals degrading |
| **Agent Runtime Limitations** | Plan mode ignored, skills not auto-invoked, no pause/intervention hooks | **Medium** — power users hitting orchestration ceiling |

---

*Digest compiled from github.com/github/copilot-cli — 46 active issues tracked*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-10

## 1. Today's Highlights

Version 1.18.0 shipped with critical ACP improvements for Zed editor integration, including embedded resource support for `@` file references. The community is actively triaging regressions in file mention functionality and ACP terminal tool stability that emerged post-release. Session management and keyboard navigation enhancements are gaining momentum through new community PRs.

---

## 2. Releases

**[kimi-cli 1.18.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.18.0)** — *Released 2026-03-09*

| Change | Description |
|--------|-------------|
| `feat(llm)` | Pass session `user_id` to Anthropic via metadata for improved tracking |
| `fix` | Support embedded context in ACP mode for Zed `@` file references |
| `chore` | Documentation typo fix ("published to public" → "published publicly") |

The ACP embedded context fix resolves a long-standing gap where Zed's file reference syntax failed to transmit content to the model.

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters |
|---|-------|--------|--------------|
| [#1375](https://github.com/MoonshotAI/kimi-cli/issues/1375) | File mentions (@) can't find the files | 🔴 **OPEN** | **Regression in 1.18.0** — Core workflow broken for macOS users; 3 comments indicate rapid community triage |
| [#1380](https://github.com/MoonshotAI/kimi-cli/issues/1380) | ACP terminal tool fails with `module acp has no attribute TerminalHandle` | 🔴 **OPEN** | **New in 1.17-1.18** — Blocks terminal automation workflows; zero comments suggests fresh report needing attention |
| [#1234](https://github.com/MoonshotAI/kimi-cli/issues/1234) | Environment variable proxy not working due to aiohttp defaults | 🔴 **OPEN** | Enterprise/Linux deployment blocker; 10 comments show sustained community debugging effort |
| [#1378](https://github.com/MoonshotAI/kimi-cli/issues/1378) | JSON parsing error when tool call arguments contain control characters | 🔴 **OPEN** | Edge case breaking MCP tool reliability; affects automation pipelines |
| [#1366](https://github.com/MoonshotAI/kimi-cli/issues/1366) | Add arguments for CLI to select history session | 🔴 **OPEN** | High-utility UX gap; 3 comments with active PR response |
| [#1371](https://github.com/MoonshotAI/kimi-cli/issues/1371) | LLM provider error: Connection error | 🔴 **OPEN** | IPv6-related connectivity regression on Linux |
| [#1368](https://github.com/MoonshotAI/kimi-cli/issues/1368) | Connection error when `platform.version()` contains `#` in HTTP header | 🔴 **OPEN** | Header sanitization bug affecting specific Linux distros |
| [#1054](https://github.com/MoonshotAI/kimi-cli/issues/1054) | Zed ACP unable to recognize currently handled files | 🟢 **CLOSED** | Resolved by 1.18.0 ACP embedded context fix; validates release priority |

---

## 4. Key PR Progress

| # | PR | Status | Feature/Fix |
|---|-----|--------|-------------|
| [#1379](https://github.com/MoonshotAI/kimi-cli/pull/1379) | Fix: Tool call arguments with control characters | 🔴 **OPEN** | Direct response to #1378; sanitizes JSON parsing for robust MCP tool execution |
| [#1376](https://github.com/MoonshotAI/kimi-cli/pull/1376) | feat: Add `--sessions`/`--list-sessions` CLI options | 🔴 **OPEN** | Implements #1366; interactive session picker with CJK-aware text shortening |
| [#1377](https://github.com/MoonshotAI/kimi-cli/pull/1377) | feat: Vim-style j/k keyboard navigation | 🔴 **OPEN** | Power-user UX enhancement for approval/question flows |
| [#1223](https://github.com/MoonshotAI/kimi-cli/pull/1223) | fix(llm): Allow `default_query`/`custom_headers` for Azure Kimi | 🔴 **OPEN** | Enterprise Azure OpenAI compatibility; enables Kimi K2.5 on Azure |
| [#1358](https://github.com/MoonshotAI/kimi-cli/pull/1358) | fix(llm): Avoid implicit reasoning-off for responses | 🔴 **OPEN** | Preserves model reasoning capabilities unless explicitly disabled |
| [#739](https://github.com/MoonshotAI/kimi-cli/pull/739) | fix(kosong): Strip JSON Schema metadata from Google GenAI tool params | 🔴 **OPEN** | Unblocks Google GenAI + MCP tool compatibility (Exa MCP, etc.) |
| [#1277](https://github.com/MoonshotAI/kimi-cli/pull/1277) | fix: Lazy-load CHANGELOG.md for PyInstaller binaries | 🔴 **OPEN** | Fixes startup crash in packaged distributions |
| [#1372](https://github.com/MoonshotAI/kimi-cli/pull/1372) | fix(web): Platform-specific modifier key for search | 🟢 **CLOSED** | Corrects Cmd+F/Ctrl+F behavior per OS conventions |
| [#1369](https://github.com/MoonshotAI/kimi-cli/pull/1369) | feat: Paste video files from clipboard | 🟢 **CLOSED** | Extends Ctrl-V support beyond images to mp4/mov/mkv |
| [#1264](https://github.com/MoonshotAI/kimi-cli/pull/1264) | fix: Support embedded context in ACP mode for Zed | 🟢 **CLOSED** | Core fix enabling #1054 resolution; merged into 1.18.0 |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Session management UX** | #1366 + PR #1376 | 🔥 Active — CLI flags for listing/resuming specific sessions |
| **Keyboard navigation parity** | PR #1377 | 🔥 Active — Vim bindings expanding beyond editor to approval flows |
| **Enterprise connectivity** | #1223, #1234, #1371, #1368 | ⚠️ Sustained — Proxy, IPv6, header sanitization, Azure compatibility |
| **Media handling expansion** | PR #1369 (closed) | ✅ Delivered — Video clipboard support sets precedent for multimodal |
| **ACP ecosystem hardening** | #1375, #1380, #1054, #1264 | ⚠️ Critical — Zed integration stability post-1.18.0 |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Tracking |
|------------|-----------|--------|----------|
| **ACP/Editor integration fragility** | High | Workflow-breaking | #1375, #1380, #1054 — 1.18.0 fixes introduced regressions requiring rapid stabilization |
| **Network/proxy configuration edge cases** | High | Deployment-blocking | #1234 (aiohttp proxy), #1371 (IPv6), #1368 (header sanitization) — Linux enterprise environments disproportionately affected |
| **Session state discoverability** | Medium | Daily friction | #1366 — Users cannot easily enumerate or resume specific historical sessions |
| **Tool call reliability** | Medium | Automation risk | #1378, #1379 — Control characters in JSON arguments break MCP tool execution |
| **Packaging/distribution robustness** | Low-Medium | First-run failures | #1277 — PyInstaller binaries crash on missing CHANGELOG.md |

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-10

## Today's Highlights

OpenCode shipped v1.2.24 with workspace support in the TUI and expanded model access including Copilot GPT-5.4 xhigh. A major memory leak investigation culminated in PR #16695 addressing unbounded RAM growth from multiple sources. The community is actively debating third-party IDE integrations, with Cursor CLI support emerging as the most upvoted open issue.

---

## Releases

### v1.2.24
- **Core:** Initial workspace support in TUI; GitLab 1M context window beta header; Copilot GPT-5.4 xhigh support
- **Desktop:** Scroll jitter fixes, corrected session title spinner, theme cleanup (removed `oc-1`)

### v1.2.23
- **Core:** Disabled fallback to free nano for small model requests
- **TUI:** Fixed missing auth headers in `run --attach`
- **Desktop:** Sidebar workspace container sizing fixes, removed review panel animations

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [#2072 Support for Cursor?](https://github.com/anomalyco/opencode/issues/2072) | Most-discussed integration request as Cursor launches its own CLI; tests OpenCode's positioning as universal AI dev tool | 57 comments, 127 👍 — sustained demand since Aug 2025 |
| [#13768 Copilot Opus 4.6 prefill error](https://github.com/anomalyco/opencode/issues/13768) | Breaks workflow with premium model; "assistant message prefill" error blocks completion | 24 comments, active debugging |
| [#12338 1M tokens for Opus 4.6 not working](https://github.com/anomalyco/opencode/issues/12338) | Context window expansion not functional despite UI claims; users hitting 200K hard limit | 24 comments, cost/efficiency concerns |
| [#16470 Code unreadable in light mode](https://github.com/anomalyco/opencode/issues/16470) | Accessibility regression — formatted code invisible in light themes | 13 comments, screenshot evidence provided |
| [#8832 Permission system not respected](https://github.com/anomalyco/opencode/issues/8832) | Security-critical: configured allowlists ignored, breaking trust model | 12 comments, config examples documented |
| [#16351 TUI broken in tmux after 1.2.17](https://github.com/anomalyco/opencode/issues/16351) | Terminal multiplexor compatibility regression with root cause identified | 11 comments, community-verified fix pending |
| [#16697 Multiple memory leaks](https://github.com/anomalyco/opencode/issues/16697) | Performance degradation during extended sessions; 20+ contributors involved | 6 comments, massive coordinated response |
| [#16281 ChatGPT Pro browser login 403](https://github.com/anomalyco/opencode/issues/16281) | OAuth flow failure blocking OpenAI authentication path | 7 comments, macOS-specific |
| [#6792 Windows Task Tool timeouts](https://github.com/anomalyco/opencode/issues/6792) | Multi-agent orchestration pattern broken on Windows platform | 9 comments, enterprise use case |
| [#1168 Clickable links in TUI](https://github.com/anomalyco/opencode/issues/1168) | Long-standing UX polish request for terminal hyperlink support | 5 comments, 49 👍 |

---

## Key PR Progress

| PR | Description | Impact |
|----|-------------|--------|
| [#15487 Multi-account workspace auth](https://github.com/anomalyco/opencode/pull/15487) | Device-flow sign-in, CLI credential management, workspace-aware account switching | Eliminates config file hand-editing for teams |
| [#16695 Resolve multiple memory leaks](https://github.com/anomalyco/opencode/pull/16695) | Fixes unbounded RAM growth across TUI, core, and server components | Critical stability for long-running sessions |
| [#16814 Fix migrateFromGlobal timing](https://github.com/anomalyco/opencode/pull/16814) | Ensures project migration runs correctly on every startup | Fixes session isolation bugs |
| [#16803 Hono node adapters](https://github.com/anomalyco/opencode/pull/16803) | Replaces Bun serve with Hono for HTTP/WebSocket runtime | Platform portability, PTY stream stability |
| [#7756 Subagent delegation with budgets](https://github.com/anomalyco/opencode/pull/7756) | Hierarchical subagent spawning, persistent sessions, budget controls | Enables complex multi-agent workflows |
| [#15926 MCP Apps iframe UIs](https://github.com/anomalyco/opencode/pull/15926) | Rich interactive UIs from MCP servers in sandboxed iframes | Extends plugin ecosystem capabilities |
| [#16811 Mention popup quick-open](https://github.com/anomalyco/opencode/pull/16811) | Ctrl+Enter to open files/directories from `@` autocomplete | Streamlines file navigation workflow |
| [#16802 Favorite model cycling keybinds](https://github.com/anomalyco/opencode/pull/16802) | Exposes `Alt+C`/`Alt+X` for model switching, visible in help | Discovers hidden power-user feature |
| [#16804 Plugin sidebar contributions](https://github.com/anomalyco/opencode/pull/16804) | API for plugins to add sidebar items in web app | Foundation for extensible UI |
| [#16706 Workspace/VCS extension points](https://github.com/anomalyco/opencode/pull/16706) | Exposes adaptor system to plugins for custom workspace backends | Enterprise integration flexibility |

---

## Feature Request Trends

1. **Third-party IDE integration** — Cursor CLI support dominates; Augment Code (#10216) also requested. Users want OpenCode as universal backend regardless of frontend.

2. **Native scheduling/cron** — Request for built-in `opencode schedule` (#11232) to eliminate OS-level dependencies for recurring automation.

3. **TUI polish & accessibility** — Clickable links (#1168), light mode fixes (#16470), tmux compatibility (#16351). Terminal experience maturation.

4. **Model context & routing** — 1M token support verification (#12338), favorite model cycling (#16801/#16802), better model switching UX.

5. **Plugin ecosystem expansion** — MCP Apps (#15926), sidebar contributions (#16804), workspace adaptors (#16706). Platform extensibility accelerating.

---

## Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Authentication fragility** | OAuth 403s (#16281), token exchange failures, provider-specific breakages | High — multiple providers affected |
| **Permission system gaps** | Configured allowlists ignored (#8832), security model not enforced | Moderate — trust erosion concern |
| **Windows platform parity** | Task timeouts (#6792), paste issues (#13798), path handling (#16342) | Persistent — secondary platform treatment |
| **Context window reality gap** | UI claims vs. actual token limits (#12338), model-specific routing bugs | Recurring with new model releases |
| **Memory/performance** | Unbounded growth (#16697), snapshot disk exhaustion (#8577) | Critical for power users |
| **Session/workspace isolation** | Cross-worktree leakage (#16806), global project pollution | Architectural debt emerging |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-03-10

## 1. Today's Highlights

Qwen Code v0.12.0 shipped with critical Windows compatibility fixes for CRLF/BOM parsing and improved code formatting controls. The release pipeline hit a snag with a failed release workflow, but the stable build is available. Meanwhile, the community is actively addressing YOLO mode UX issues and laying groundwork for multi-agent collaboration features.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.12.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.12.0)** | Windows CRLF/BOM frontmatter parsing fix; `tabWidth` support in `CodeColorizer` with automatic tab-to-space conversion |
| **[v0.12.0-nightly.20260309](https://github.com/QwenLM/qwen-code/releases/tag/v0.12.0-nightly.20260309.d63798cc)** | Same changes as stable; nightly build for early adopters |

**Note:** The [release workflow failed](https://github.com/QwenLM/qwen-code/issues/2204) for v0.12.0 on 2026-03-09, though artifacts appear to have been published successfully.

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|------------------|
| [#2101](https://github.com/QwenLM/qwen-code/issues/2101) Space button typing failure | **P0-level UX blocker** — users cannot type spaces in CLI input on Windows; 5 upvotes and 9 comments indicate widespread impact | Active troubleshooting; likely related to [#2198](https://github.com/QwenLM/qwen-code/issues/2198) |
| [#2198](https://github.com/QwenLM/qwen-code/issues/2198) Cannot type spacebar in CLI | Duplicate/related to #2101; confirms spacebar issue across Windows environments | 4 comments, cross-referenced |
| [#1922](https://github.com/QwenLM/qwen-code/issues/1922) Edit tool unable to edit files | **Regression in v0.10.5** — previously fixed bug resurfaced, breaking core file editing functionality | 6 comments; user notes "was working perfectly" before |
| [#2191](https://github.com/QwenLM/qwen-code/issues/2191) DashScope 429 rate limiting | Persistent 3+ day API throttling affecting web search; indicates infrastructure strain or quota issues | 5 comments, 2 upvotes; Russian-language report suggests global user base |
| [#2206](https://github.com/QwenLM/qwen-code/issues/2206) YOLO mode still opens VS Code diff | **UX inconsistency** — auto-accept mode should suppress diff editor per design intent | Reported by active contributor @yiliang114 |
| [#2222](https://github.com/QwenLM/qwen-code/issues/2222) Shell fails with quoted text | Windows-specific command parsing bug breaking `!` shell execution with quoted arguments | Fresh report, needs triage |
| [#2223](https://github.com/QwenLM/qwen-code/issues/2223) High memory usage: 7.83 GB | Memory leak or unbounded context growth; crash warning triggered | No comments yet — early signal |
| [#2210](https://github.com/QwenLM/qwen-code/issues/2210) Tab key interrupts YOLO mode | Accidental mode switch during AI streaming cancels ongoing edits | Filed by @Drakaniia who also submitted fix PR |
| [#2209](https://github.com/QwenLM/qwen-code/issues/2209) Internal error -32603 "terminated" | Session auto-termination after idle period; affects long-running workflows | Windows 11 + VS Code environment |
| [#1815](https://github.com/QwenLM/qwen-code/issues/1815) Feature: Agent Team multi-agent collaboration | **High-demand feature** (7 upvotes) — coordinated multi-agent execution with team lead pattern | Long-running request, aligns with PR #1912 Arena work |

---

## 4. Key PR Progress

| PR | Contribution | Status |
|----|--------------|--------|
| [#2221](https://github.com/QwenLM/qwen-code/pull/2221) Skip `openDiff` in YOLO mode | Fixes #2206 — suppresses VS Code diff editor when auto-accept is enabled | Open |
| [#2211](https://github.com/QwenLM/qwen-code/pull/2211) Block Tab key during AI streaming | Fixes #2210 — prevents accidental mode switch interrupting responses | Open |
| [#2220](https://github.com/QwenLM/qwen-code/pull/2220) Refactor model provider config to V4 | **Breaking settings change** — providerId-keyed objects, `--providerId` CLI flag, V3→V4 migration | Open |
| [#1912](https://github.com/QwenLM/qwen-code/pull/1912) Agent collaboration Arena | Multi-model competitive execution via git worktrees; enables side-by-side comparison | Open, active development |
| [#2203](https://github.com/QwenLM/qwen-code/pull/2203) 10 core event hooks | Session lifecycle, tool execution, conversation hooks for extensibility | Open |
| [#2202](https://github.com/QwenLM/qwen-code/pull/2202) Skills in `.agents` directory | Cross-editor skill portability (`.cursor/`, `.codex/`, `.claude/` directories) | Open |
| [#2205](https://github.com/QwenLM/qwen-code/pull/2205) `NO_PROXY` environment support | Corporate proxy bypass for internal LLM servers | Open |
| [#2188](https://github.com/QwenLM/qwen-code/pull/2188) VS Code sidebar + multi-position chat | Activity Bar entry, draggable sidebar view, bottom panel, Secondary Side Bar | Open |
| [#2212](https://github.com/QwenLM/qwen-code/pull/2212) MCP OAuth scopes from RFC 9728 | Standards-compliant OAuth scope discovery for MCP servers | Open |
| [#2219](https://github.com/QwenLM/qwen-code/pull/2219) MCP cleanup + CONCAT merge strategy | Removes redundant `scope` field, adds list merging for allowed/excluded skills | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Multi-agent / Team collaboration** | #1815 (7👍), PR #1912 Arena, #268 hooks for multi-agent workflows | High — core differentiator vs. Claude Code |
| **Structured output / API integration** | #795 JSON/stream-JSON output format (closed, likely implemented) | Moderate — enterprise/CI use cases |
| **IDE companion enhancements** | #1935 "Improve Prompt" button, PR #2188/#2195 sidebar views, #2206 YOLO fixes | Active — VS Code integration is priority surface |
| **Skill portability & filtering** | PR #2202 multi-directory skills, #2216 allowed/excluded skill lists | Emerging — ecosystem interoperability |
| **Memory & context management** | #2200 compress not working (fixed), #2223 high memory warning | Technical debt area |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Windows CLI input bugs** | 3+ issues (#2101, #2198, #2222) | **Critical** — basic typing broken |
| **YOLO mode UX gaps** | #2206, #2210, PR #2221, #2211 | High — auto-accept promises not fully realized |
| **API rate limiting / reliability** | #2191, #2217 DashScope 429s | Moderate-High — affects core web search |
| **Settings migration complexity** | PR #2220 V4 refactor, #1506 auth config precedence | Moderate — recurring breaking changes |
| **Memory/performance at scale** | #2223 7.83GB warning, #2200 compression issues | Growing concern — Node.js heap limits |
| **Release pipeline stability** | #2204 failed release workflow | Operational risk |

---

*Digest compiled from 28 issues and 19 PRs updated 2026-03-09. Data source: [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*