# AI CLI Tools Community Digest 2026-03-03

> Generated: 2026-03-03 07:39 UTC | Tools covered: 7

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

# Cross-Tool AI CLI Comparison Report — 2026-03-03

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a competitive, feature-dense market with seven major players actively vying for developer mindshare. All tools now support core agentic workflows—MCP integration, subagent delegation, and context management—but differentiation has shifted toward reliability engineering, extensibility architectures, and platform-specific optimizations. The community is increasingly vocal about production readiness: stability, observability, and cost transparency now dominate feature requests over raw capability. A convergence around `AGENTS.md` as a cross-tool standard for agent instructions signals emerging ecosystem coordination, while plugin/hook systems represent the next battleground for developer loyalty.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Notable Activity |
|------|:-----------:|:---------:|:--------------:|----------------|
| **Claude Code** | 10+ tracked | 10 open | — | Security plugin ecosystem surge; critical Cowork performance bug |
| **OpenAI Codex** | 10+ tracked | 10 open | **3** (v0.107.0 + 2 alphas) | Rapid iteration on thread forking; cybersecurity false-positive wave |
| **Gemini CLI** | 10 tracked | 10 open | — | Remote Agents infrastructure; voice mode PoC merged |
| **GitHub Copilot CLI** | 10 tracked | 1 closed | **2** (v0.0.421-x) | Stabilization focus; repo-level config shipped |
| **Kimi CLI** | 18 | 9 | — | Highest issue velocity; MCP stability crisis; session export PR |
| **OpenCode** | **50** | **50** | — | Exceptional activity; GPT-5 compatibility fixes; 70GB memory leak |
| **Qwen Code** | 35 | 27 | **3** (preview/nightly) | `AGENTS.md` standard adoption; hooks infrastructure; Xcode P1 bug |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **MCP Ecosystem Hardening** | Claude Code, Kimi CLI, OpenCode, Copilot CLI | Failure isolation (Kimi #1314), timeout handling, truncation fixes (Copilot #1732), protocol version updates |
| **Context/Session Management** | Kimi CLI, Claude Code, OpenCode, Codex | Export/import (Kimi #1317), compaction controls (Kimi #1305), branch-aware diffs (Claude #23626), `/compact` parity (Codex #11325) |
| **Subagent Observability** | Kimi CLI, Claude Code, Gemini CLI, Codex | Termination control (Kimi #1315), history expanders (Gemini #20886), message explosion fixes (Codex #13179) |
| **Accessibility & TUI Stability** | Claude Code, Copilot CLI, OpenCode | `--no-ansi` flag (Claude #15509), flickering fixes (Copilot #1348), clipboard failures (OpenCode #4283) |
| **Plugin/Hook Extensibility** | Claude Code, Codex, Qwen Code | PreToolUse security hooks (Claude #30261, #30245), lifecycle hooks (Qwen #1988), plugin marketplace (Codex #13333) |
| **Standardized Agent Instructions** | Qwen Code, Claude Code, OpenCode | `AGENTS.md` default support (Qwen shipped), `.agents` directory loading (Qwen #2042), skills portability |

---

## 4. Differentiation Analysis

| Tool | Core Focus | Target Users | Technical Approach |
|------|-----------|------------|------------------|
| **Claude Code** | Security-first plugin ecosystem, team collaboration | Enterprise teams, security-conscious orgs | Bun/JSC runtime; Cowork VM-based collaboration; 2-tier severity system |
| **OpenAI Codex** | Real-time voice, thread forking, rapid feature iteration | Prototypers, voice-interaction users | Rust CLI; subagent message explosion risk accepted for speed |
| **Gemini CLI** | Remote Agents infrastructure, Google ecosystem integration | GCP users, multi-agent orchestration needs | WebSocket streaming; LXC sandboxing; OAuth/Code Assist native |
| **GitHub Copilot CLI** | IDE parity, repo-level configuration, Markdown rendering | VS Code-centric developers, GitHub-native workflows | Tight ACP integration; `.github/copilot/config.json` convention |
| **Kimi CLI** | Session portability, subagent control, rapid bug response | Automation-heavy users, long-running workflows | Session export/import; aggressive MCP failure isolation fixes |
| **OpenCode** | Provider flexibility, GPT-5 ecosystem compatibility, undo/rollback | Multi-provider users, self-hosters, enterprise | Broad model support; `--dangerously-skip-permissions`; Electron desktop option |
| **Qwen Code** | Local LLM optimization, competitive agent arena, IDE parity | Local/edge deployers, model comparison researchers | `llama.cpp` integration; git worktree-based multi-model execution |

---

## 5. Community Momentum & Maturity

| Category | Assessment |
|----------|-----------|
| **Highest Velocity** | **OpenCode** — 50 issues and 50 PRs in 24h indicates exceptional community engagement and maintainer responsiveness; rapid GPT-5 adaptation |
| **Most Rapid Iteration** | **OpenAI Codex** — 3 releases in 24h (stable + 2 alphas) with major features (thread forking, voice device selection); Rust rewrite enabling speed |
| **Largest Established Base** | **Claude Code** — Mature plugin ecosystem, sustained high-quality community contributions (5+ security plugins in review), but accumulating technical debt (TUI instability since Oct 2025) |
| **Emerging Momentum** | **Qwen Code** — Strong 35/27 activity ratio, infrastructure investments (hooks, parallel tool calls), standards leadership (`AGENTS.md`) |
| **Stabilization Phase** | **GitHub Copilot CLI** — Low PR activity (1 closed), incremental releases; suggests feature-complete for current scope or private development |
| **Crisis-Driven Activity** | **Kimi CLI** — 18 issues driven by MCP crash severity; rapid fix-and-ship culture (#1314 closed same day) |

---

## 6. Trend Signals

| Trend | Evidence | Developer Value |
|-------|----------|---------------|
| **Safety Filter Calibration Crisis** | 8+ false-positive cybersecurity flags in Codex in 24h; GPT-5.3-Codex safety_identifier issues (OpenCode #15776) | Developers need transparent, appealable safety systems; over-blocking erodes trust in autonomous tools |
| **Context Compression as Critical Path** | Kimi #1924 (82k→816 tokens), Claude caching fixes (#28899 closed), Codex subagent explosion (#13179) | Long-context workflows require predictable, observable compression; silent degradation is unacceptable |
| **Terminal-Native UX Expectations** | Readline history search (Gemini #20142), Ctrl+Z suspend/resume (Gemini #20881), multiline input polish (Kimi #1320) | AI CLIs must match shell ergonomics; TUI innovation cannot sacrifice basic terminal conventions |
| **Cross-Tool Standard Convergence** | `AGENTS.md` adoption (Qwen shipped, Claude/OpenCode community demand), MCP as de facto protocol | Reduces vendor lock-in; enables portable agent configurations across teams and tools |
| **Production Observability Gap** | Agent hang detection (Claude #30018), token metering transparency (Codex #13186), subagent error propagation (Claude #24652) | Headless/CI usage requires structured logging, exit codes, and consumption metrics; "magic" opacity blocks adoption |
| **Platform Equity Pressure** | Intel Mac (Codex #10410), ARM64 Linux page sizes (Claude #25713), Windows keybindings (Gemini #20929), WSL2 freezes (OpenCode #5361) | Cross-platform is table stakes; neglected platforms drive competitive switching |

---

*Report compiled from 2026-03-03 community digests across seven active AI CLI tool repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of March 3, 2026 | Repository: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | Functionality | Discussion Highlights | Status |
|:---|:---|:---|:---|:---|
| 1 | **[skill-quality-analyzer](https://github.com/anthropics/skills/pull/83)** + **[skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Meta-analysis tools evaluating Skills across 5 quality dimensions (structure, documentation, examples, resources, testing) and security posture | First systematic approach to Skill quality assurance; addresses growing ecosystem complexity | 🟡 Open (Nov 2025–Jan 2026) |
| 2 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | Improved clarity and actionability for frontend design workflows, ensuring single-conversation executability | Focus on token efficiency and Claude-executable instructions vs. human-readable documentation | 🟡 Open (Jan–Feb 2026) |
| 3 | **[System Documentation Suite](https://github.com/anthropics/skills/pull/95)** | Comprehensive evidence management system docs: architecture, flowcharts, lifecycle workflows | Enterprise-grade documentation patterns for complex systems; addresses observability gaps | 🟡 Open (Nov 2025) |
| 4 | **[SAP-RPT-1-OSS Predictor](https://github.com/anthropics/skills/pull/181)** | Integration with SAP's open-source tabular foundation model for predictive analytics on SAP business data | Bridges enterprise ERP data with modern AI; Apache 2.0 alignment | 🟡 Open (Dec 2025–Mar 2026) |
| 5 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | 10-step systematic audit identifying orphaned code, unused files, documentation gaps, infrastructure bloat | Addresses technical debt at scale; generates CODEBASE-STATUS.md as single source of truth | 🟡 Open (Dec 2025–Feb 2026) |
| 6 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | Persistent memory system for AI agents with proactive context surfacing and rich memory structuring | Solves cross-conversation context loss; competing approaches emerging (see ShieldCortex #386) | 🟡 Open (Dec 2025–Mar 2026) |
| 7 | **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)** | Masonry CLI integration for Imagen 3.0/Veo 3.1 image and video generation with job management | Multimodal content generation workflow; addresses creative production pipelines | 🟡 Open (Feb 2026) |
| 8 | **[AURELION Suite](https://github.com/anthropics/skills/pull/444)** | Four-skill cognitive framework: structured thinking templates, advisor patterns, agent orchestration, memory management | Most ambitious architectural proposal; "5-floor cognitive framework" for professional knowledge management | 🟡 Open (Feb 2026) |

---

## 2. Community Demand Trends (From Issues Analysis)

| Trend | Evidence | Representative Issues |
|:---|:---|:---|
| **Agent Memory & Persistence** | 3+ competing implementations proposed | [#154](https://github.com/anthropics/skills/issues/154) (shodh-memory), [#386](https://github.com/anthropics/skills/issues/386) (ShieldCortex), [#444](https://github.com/anthropics/skills/issues/444) (AURELION memory) |
| **MCP Integration & Standardization** | Strong push for Skills-as-MCPs and package management | [#16](https://github.com/anthropics/skills/issues/16) (Expose Skills as MCPs), [#185](https://github.com/anthropics/skills/issues/185) (Skills MCP package manager), [#369](https://github.com/anthropics/skills/issues/369) (MCP Apps support) |
| **Enterprise Governance & Safety** | Gap identified in production agent systems | [#412](https://github.com/anthropics/skills/issues/412) (agent-governance proposal) — policy enforcement, threat detection, trust scoring, audit trails |
| **Skill Quality & Developer Experience** | Tooling for Skill creators, not just Skill users | [#202](https://github.com/anthropics/skills/issues/202) (skill-creator best practices), [#83](https://github.com/anthropics/skills/issues/83) (quality analyzer), [#356](https://github.com/anthropics/skills/issues/356) (case-sensitive filename fix) |
| **Multi-Platform Deployment** | AWS Bedrock, API stability, versioning | [#29](https://github.com/anthropics/skills/issues/29) (Bedrock usage), [#389](https://github.com/anthropics/skills/issues/389) (OPUS 4.5 API issues), [#403](https://github.com/anthropics/skills/issues/403), [#406](https://github.com/anthropics/skills/issues/406) (skill deletion/upload failures) |

---

## 3. High-Potential Pending Skills

These active PRs show sustained engagement and address clear ecosystem gaps—likely candidates for near-term merge:

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **skill-quality-analyzer + skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | Addresses critical ecosystem scaling need; meta-Skills enable quality at volume |
| **frontend-design (revised)** | [#210](https://github.com/anthropics/skills/pull/210) | Direct response to Anthropic blog post feedback; improves existing Skill rather than adding new surface area |
| **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | High enterprise value; fills "technical debt visibility" gap with concrete deliverable (CODEBASE-STATUS.md) |
| **ShieldCortex** | [#386](https://github.com/anthropics/skills/pull/386) | Established npm package (6,200+ downloads) with security differentiation vs. shodh-memory |
| **feature-dev workflow fix** | [#363](https://github.com/anthropics/skills/pull/363) | Bugfix for existing core workflow; low risk, high user impact (Phases 6-7 skipping) |
| **SKILL.md case-sensitivity fix** | [#356](https://github.com/anthropics/skills/pull/356) | Documentation-only; resolves silent failure mode costing users "hours debugging" |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for production-grade agent infrastructure—specifically persistent memory systems, governance frameworks, and quality tooling—indicating a maturation shift from "demonstration Skills" to "enterprise agent operating systems."**

---

*Report methodology: Analysis of 50 PRs and 50 Issues sorted by comment activity, with cross-reference to update recency and 👍 reactions. All GitHub links verified as of 2026-03-03.*

---

# Claude Code Community Digest — 2026-03-03

## Today's Highlights

The community is actively expanding Claude Code's plugin ecosystem with multiple security-focused contributions, while a critical performance regression in the Cowork feature—generating 10GB VM bundles—is drawing urgent attention from maintainers. Terminal UI instability and accessibility gaps remain persistent pain points across platforms.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [#22543: Cowork feature creates 10GB VM bundle causing severe performance degradation](https://github.com/anthropics/claude-code/issues/22543) | High-priority oncall bug; affects core collaboration feature with cascading slowdowns across sessions | 35 comments, 81 👍—most engaged issue; users reporting workarounds like manual bundle deletion |
| [#8618: CLI Terminal UI rendering corrupted and unusable](https://github.com/anthropics/claude-code/issues/8618) | Show-stopper regression affecting basic usability; scrolling and display corruption on Windows/macOS | 27 comments; persistent since Oct 2025, indicating deep TUI rendering issues |
| [#18192: Recursive skill discovery for subdirectories](https://github.com/anthropics/claude-code/issues/18192) | Limits skill organization scalability; forces flat structure in `~/.claude/skills/` | 16 comments, 22 👍; clear feature gap for power users with complex skill libraries |
| [#15509: Add --no-ansi flag for screen reader accessibility](https://github.com/anthropics/claude-code/issues/15509) | Critical a11y gap blocking blind developers from using Claude Code effectively | 8 comments; detailed use case from totally blind user with specific terminal requirements |
| [#24652: Team Agent Error: Sibling tool call errored](https://github.com/anthropics/claude-code/issues/24652) | Breaks multi-agent workflows; unclear error propagation between subagents | 7 comments; reproducible case provided, affecting production agent deployments |
| [#25713: Native binary aborts on ARM64 Linux with 64K page size kernels](https://github.com/anthropics/claude-code/issues/25713) | Platform compatibility blocker for ARM servers and embedded Linux (AWS Graviton, Raspberry Pi) | 7 comments; Bun/JSC runtime issue requiring upstream coordination |
| [#28899: Prompt Caching Not Working—rapid token depletion](https://github.com/anthropics/claude-code/issues/28899) | **CLOSED**—Cost-critical bug resolved; rapid token usage was breaking budget-conscious workflows | 7 comments, 3 👍; closure suggests fix deployed, validating user reports |
| [#24617: VS Codium ignores model configuration, defaults to Opus 4.1](https://github.com/anthropics/claude-code/issues/24617) | Configuration integrity issue; forces expensive model usage against user intent | 5 comments; affects VS Codium specifically, suggesting IDE-specific config path bug |
| [#28325: v2.1.52 Linux runs bun instead of claude](https://github.com/anthropics/claude-code/issues/28325) | Packaging regression breaking CLI entry point; users cannot launch application | 5 comments; regression tag indicates recent breakage in build pipeline |
| [#30216: AskUserQuestion regression with --dangerously-skip-permissions](https://github.com/anthropics/claude-code/issues/30216) | Permission bypass flag breaking interactive tools; affects automated/CI workflows | 4 comments; Windows-specific, tool interaction edge case |

---

## Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#30305: Severity system and security patterns for plugins](https://github.com/anthropics/claude-code/pull/30305) | Transitions security tools from binary "block-all" to 2-tier "Block/Warn" severity system; expands coverage with nuanced risk handling | Open |
| [#30299: VibeGuard prompt guard plugin](https://github.com/anthropics/claude-code/pull/30299) | Community plugin for secrets/PII protection with placeholder-redacted prompt output for safe resubmission | Open |
| [#30261: Destructive-command-guardrails plugin](https://github.com/anthropics/claude-code/pull/30261) | PreToolUse hook intercepting 23+ destructive patterns (`rm -rf`, `git reset --hard`, `DROP TABLE`) before execution | Open |
| [#30257: MCP-doctor plugin for config validation](https://github.com/anthropics/claude-code/pull/30257) | Works around `/doctor` false-positives with fresh JSON parsing; no LRU cache staleness | Open |
| [#30245: Bash security hook example](https://github.com/anthropics/claude-code/pull/30245) | Comprehensive PreToolUse hook detecting destructive ops, privilege escalation, and network exfiltration with user confirmation flows | Open |
| [#29759: Fix RTL text rendering regression in VSCode](https://github.com/anthropics/claude-code/pull/29759) | Fixes Persian/Arabic/Hebrew text direction bugs introduced in v2.1.63; affects 5+ linked issues | Open |
| [#30024: Quote plugin paths for Windows compatibility](https://github.com/anthropics/claude-code/pull/30024) | Fixes shell hook failures on Windows from unquoted backslash paths in `${CLAUDE_PLUGIN_ROOT}` | Open |
| [#30018: Agent hang and infinite loop troubleshooting guide](https://github.com/anthropics/claude-code/pull/30018) | Documents `MaxFileReadTokenExceededError` retry loops and token consumption patterns | Open |
| [#29985: Remote Control troubleshooting guide](https://github.com/anthropics/claude-code/pull/29985) | Addresses widespread "Remote Control not available" errors for Pro/Max users; consolidates 7+ duplicate issues | Open |
| [#29461: Constrain dedupe candidates to canonical open issues](https://github.com/anthropics/claude-code/pull/29461) | Improves duplicate-bot accuracy by requiring open, non-duplicate canonical targets; reduces noisy circular webs | Open |

---

## Feature Request Trends

1. **Skill System Scalability** — Multiple requests for hierarchical organization: recursive discovery ([#18192](https://github.com/anthropics/claude-code/issues/18192)), scoped per-subagent skills ([#30278](https://github.com/anthropics/claude-code/issues/30278)), and better skill management at scale.

2. **Accessibility Hardening** — `--no-ansi` flag ([#15509](https://github.com/anthropics/claude-code/issues/15509)) and RTL text fixes ([#29759](https://github.com/anthropics/claude-code/pull/29759)) indicate growing a11y investment needs.

3. **Session & Context Management** — Built-in history viewer ([#30300](https://github.com/anthropics/claude-code/issues/30300)), branch-aware diff comparisons ([#23626](https://github.com/anthropics/claude-code/issues/23626)), and large session resume stability ([#30302](https://github.com/anthropics/claude-code/issues/30302)).

4. **SDK Isolation Guarantees** — `settingSources: []` not fully isolating MCP/skills ([#30304](https://github.com/anthropics/claude-code/issues/30304)) reveals need for cleaner programmatic control.

---

## Developer Pain Points

| Category | Issue | Frequency/Impact |
|----------|-------|----------------|
| **Performance Degradation** | Cowork VM bundle bloat ([#22543](https://github.com/anthropics/claude-code/issues/22543)) | Critical; 10GB artifacts, session-long slowdowns |
| **TUI Instability** | Rendering corruption, scrolling bugs, input overflow ([#8618](https://github.com/anthropics/claude-code/issues/8618), [#30316](https://github.com/anthropics/claude-code/issues/30316)) | Chronic; cross-platform, affects basic usability |
| **Cost/Token Opacity** | Caching failures, double request sending, rapid limit depletion ([#28899](https://github.com/anthropics/claude-code/issues/28899), [#30193](https://github.com/anthropics/claude-code/issues/30193), [#30268](https://github.com/anthropics/claude-code/issues/30268)) | High; budget and trust erosion |
| **Configuration Precedence** | Model settings ignored, permission flags breaking tools ([#24617](https://github.com/anthropics/claude-code/issues/24617), [#30216](https://github.com/anthropics/claude-code/issues/30216)) | Moderate; automation reliability |
| **Platform Compatibility** | ARM64 Linux crashes, Windows path handling, VS Codium gaps ([#25713](https://github.com/anthropics/claude-code/issues/25713), [#30024](https://github.com/anthropics/claude-code/pull/30024), [#24617](https://github.com/anthropics/claude-code/issues/24617)) | Moderate; deployment friction |
| **Agent Observability** | Silent failures, hang detection, subagent error propagation ([#24652](https://github.com/anthropics/claude-code/issues/24652), [#30296](https://github.com/anthropics/claude-code/issues/30296), [#30018](https://github.com/anthropics/claude-code/pull/30018)) | Growing; production agent complexity |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-03

---

## 1. Today's Highlights

The Rust CLI saw two rapid alpha releases (v0.108.0-alpha.1/2) following the stable v0.107.0, which introduced **thread forking into sub-agents** and **realtime voice device selection**. Meanwhile, a wave of **cybersecurity false-positive flags** hit the community hard—at least 8 related issues were opened and closed in 24 hours as users on benign workflows (UX design, Python testing, git operations) were abruptly blocked from gpt-5.3-codex. The team is actively merging infrastructure PRs for plugin systems, hooks, and Windows install scripts.

---

## 2. Releases

| Version | Highlights |
|---------|-----------|
| **[rust-v0.107.0](https://github.com/openai/codex/releases/tag/rust-v0.107.0)** | **Thread forking**: Branch work into sub-agents without leaving the conversation ([#12499](https://github.com/openai/codex/issues/12499)). **Realtime voice improvements**: Selectable mic/speaker devices with persistence, improved audio format alignment for transcription. |
| **[rust-v0.108.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.108.0-alpha.1)** | Alpha pre-release (no detailed changelog). |
| **[rust-v0.108.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.108.0-alpha.2)** | Alpha pre-release (no detailed changelog). |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [#10410](https://github.com/openai/codex/issues/10410) — **macOS Intel (x86_64) support** | 93 comments, 114 👍. Largest open feature request; Intel Mac users are completely locked out of the desktop app. | Sustained pressure; users sharing workarounds like Rosetta with mixed success. |
| [#12764](https://github.com/openai/codex/issues/12764) — **401 Unauthorized errors** | 31 comments. Blocking CLI usage entirely; appears auth-related to `chatgpt.com/backend-api`. | Active troubleshooting; users reporting intermittent resolution then recurrence. |
| [#13186](https://github.com/openai/codex/issues/13186) — **Rate limit metering anomaly** | 23 comments. Plus users seeing 5h+ weekly quota drained by trivial tasks. | Frustration at opaque quota accounting; calls for detailed usage breakdowns. |
| [#11325](https://github.com/openai/codex/issues/11325) — **Manual `/compact` for Codex App** | 22 comments, 24 👍. CLI has it; desktop app lacks manual context compression. | Clear parity gap; power users hitting context limits. |
| [#8745](https://github.com/openai/codex/issues/8745) — **LSP integration (auto-detect + auto-install)** | 22 comments, 128 👍. Top-voted enhancement. Would give Codex semantic code intelligence without manual config. | Strong demand; comparisons to Claude's LSP support. |
| [#12088](https://github.com/openai/codex/issues/12088) — **False-positive "high-risk cyber activity" flag** | 20 comments, closed. Solo developer blocked from gpt-5.3 for normal Python debugging. | **Pattern**: benign workflows triggering safety filters. |
| [#13179](https://github.com/openai/codex/issues/13179) — **Subagents exponentially explode message usage** | 10 comments. New forking feature has cost/efficiency bug. | Early adopter pain; concern about quota impact. |
| [#8512](https://github.com/openai/codex/issues/8512) — **Codex Plugins (Claude-style)** | 8 comments, 56 👍. Team/project sharing of skills, rules, agents.md. | Ecosystem request; would enable reusable configurations. |
| [#12921](https://github.com/openai/codex/issues/12921) — **Remove `awaiter` role** | 8 comments. Architectural objection: `awaiter` adds tokens, latency, failure surface without unique capability. | Design debate; author argues for deterministic simplification. |
| [#12852](https://github.com/openai/codex/issues/12852) — **Desktop threads stuck "Thinking"** | 6 comments. Unkillable zombie threads requiring force-kill. | Reliability concern for long-running sessions. |

---

## 4. Key PR Progress

| PR | Feature / Fix | Status |
|----|-------------|--------|
| [#12868](https://github.com/openai/codex/pull/12868) — **Align pending steers with core acceptance** | Immediate `Enter` steer submission during active turns; visual pending state in footer. | Open |
| [#13333](https://github.com/openai/codex/pull/13333) — **Refactor plugin config and cache path** | Plugin system foundation: `<plugin>@<marketplace>` keys, cache structure, install plumbing. | Open |
| [#13096](https://github.com/openai/codex/pull/13096) — **Rollout store and in-memory source** | Renames `recorder.rs` → `store.rs`; centralized rollout persistence with process-local in-memory source. | Open |
| [#13177](https://github.com/openai/codex/pull/13177) — **Turn context refreshes between sampling** | Mid-turn nudges/settings apply without mutating `TurnContext`; compaction check moved to follow-up requests. | Open |
| [#13280](https://github.com/openai/codex/pull/13280) — **Thread metadata update endpoint** | v2 `thread/metadata/update` API; SQLite `gitInfo` patching without thread resume. | Open |
| [#13331](https://github.com/openai/codex/pull/13331) — **Controllable js_repl image output** | Stop auto-hoisting nested tool outputs; let JS code decide returns. Cleaner multimodal handling. | Open |
| [#13049](https://github.com/openai/codex/pull/13049) — **Enforce Responses API 50 MB image limit** | Hard limit compliance for image uploads. | Open |
| [#13276](https://github.com/openai/codex/pull/13276) — **Hooks engine MVP** | Experimental `SessionStart`/`Stop` hooks; synchronous execution blocking turn progression. Extensible foundation. | Open |
| [#12741](https://github.com/openai/codex/pull/12741) — **Windows direct install script** | `install.ps1` for Windows; publishes alongside `install.sh`; extracts from npm package. | Open |
| [#13212](https://github.com/openai/codex/pull/13212) — **Fast mode toggle** | Local `service_tier=priority` setting; `/fast` TUI command; feature-flagged. | **Closed** (merged) |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Platform parity** | [#10410](https://github.com/openai/codex/issues/10410) (Intel Mac), [#11325](https://github.com/openai/codex/issues/11325) (compact command), [#12741](https://github.com/openai/codex/pull/12741) (Windows install) | Desktop and CLI feature gaps are top friction; users expect uniform capabilities. |
| **Extensibility / ecosystem** | [#8745](https://github.com/openai/codex/issues/8745) (LSP), [#8512](https://github.com/openai/codex/issues/8512) (plugins), [#13333](https://github.com/openai/codex/pull/13333) (plugin infra) | Strong demand for Codex to integrate with existing dev tools and share configurations. |
| **Cost/efficiency transparency** | [#13186](https://github.com/openai/codex/issues/13186) (metering), [#13179](https://github.com/openai/codex/issues/13179) (subagent message explosion) | Users need visibility into quota consumption; new features need efficiency guardrails. |
| **Safety filter calibration** | 8 closed issues today on false-positive cyber flags | Current heuristics are over-blocking; reputation risk for developer trust. |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Details |
|------------|-----------|---------|
| **Cybersecurity false positives** | **Critical** — 8+ issues in 24h | Benign workflows (git, Python tests, UX design, network planning) triggering gpt-5.3 blocks. Users report no recourse beyond waiting or appealing. |
| **Opaque rate limiting & quota** | High — [#13186](https://github.com/openai/codex/issues/13186), [#11434](https://github.com/openai/codex/issues/11434), [#11785](https://github.com/openai/codex/issues/11785) | "5 hours consumed in minutes" with no granular breakdown. 2x limits not implemented for Teams. |
| **Auth instability** | Medium-High — [#12764](https://github.com/openai/codex/issues/12764) | 401 Unauthorized errors disrupting CLI sessions; unclear if token expiry or API issue. |
| **Desktop app reliability** | Medium — [#12852](https://github.com/openai/codex/issues/12852) | Zombie threads, missing `/compact`, general "app vs. CLI" lag in features. |
| **Context management costs** | Medium — [#13179](https://github.com/openai/codex/issues/13179), [#12921](https://github.com/openai/codex/issues/12921) | New forking feature explodes message counts; `awaiter` role debated as bloat. |

---

*Digest compiled from github.com/openai/codex on 2026-03-03.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-03

---

## 1. Today's Highlights

The Gemini CLI team is actively shipping infrastructure hardening and UX refinements ahead of broader Remote Agents rollout. Key community contributions include a voice mode proof-of-concept using the Live API and experimental LXC sandboxing for Linux workflows. Meanwhile, maintainers are prioritizing API response parsing resilience after recent production incidents involving proto definition changes.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| [#20142](https://github.com/google-gemini/gemini-cli/issues/20142) — AskUser open questions lack Ctrl+R history search | Power users frequently repeat similar prompts; missing readline-style search breaks flow in long sessions | 8 comments, `help wanted` label |
| [#20716](https://github.com/google-gemini/gemini-cli/issues/20716) — Truncated plan view hides critical context | 15-line limit in approval dialogs risks users approving incomplete plans; needs discoverable "view full" mechanism | 7 comments, documentation gap |
| [#20302](https://github.com/google-gemini/gemini-cli/issues/20302) — [Epic] Remote Agents Sprint 1 (P0) | Foundation for multi-agent workflows; streaming infrastructure and core UX patterns | 3 comments, maintainer workstream |
| [#20181](https://github.com/google-gemini/gemini-cli/issues/20181) — AskUser needs external editor support | Complex multi-line inputs (e.g., Conductor track descriptions) currently painful in inline prompt | 3 comments, UX friction |
| [#19514](https://github.com/google-gemini/gemini-cli/issues/19514) — Raw `<question>` tags leak in plan mode | Rendering bug breaks immersion in plan mode; suggests parser edge case | 3 comments, visual regression |
| [#18953](https://github.com/google-gemini/gemini-cli/issues/18953) — Shell "magic" commands cause 100x slowdown | Progress spinner UX conflicts with streaming; performance regression for build tools | 3 comments, P2 priority |
| [#20925](https://github.com/google-gemini/gemini-cli/issues/20925) — Repeated "high demand" errors blocking subscribers | Reliability concern for paid users; 10-retry exhaustion suggests capacity or routing issue | 2 comments, 3 👍, urgent tone |
| [#20929](https://github.com/google-gemini/gemini-cli/issues/20929) — Shift+Tab broken on Windows PowerShell/CMD | Platform parity gap; approval mode cycling fails on major Windows shells | 2 comments, fresh report |
| [#20886](https://github.com/google-gemini/gemini-cli/issues/20886) — Subagent UX refinement | Expander for tool call history, thinking cleanup; signals maturing agent architecture | 2 comments, design polish |
| [#20550](https://github.com/google-gemini/gemini-cli/issues/20550) — JS heap exhaustion in long sessions | Memory leak or unbounded context growth; blocks extended automation workflows | 2 comments, crash report with logs |

---

## 4. Key PR Progress

| PR | Feature / Fix | Status |
|----|-------------|--------|
| [#20923](https://github.com/google-gemini/gemini-cli/pull/20923) — Voice mode PoC with Live API | Bidirectional WebSocket streaming for hands-free interaction; GSoC 2025 groundwork | Closed (PoC merged) |
| [#20735](https://github.com/google-gemini/gemini-cli/pull/20735) — Experimental LXC sandbox support | Enables `systemd`/`snapd` workflows (Snapcraft, Rockcraft) impossible in Docker | Open |
| [#20913](https://github.com/google-gemini/gemini-cli/pull/20913) — Truncate long grep_search lines | Prevents token limit crashes from oversized tool outputs; centralized utility | Open |
| [#20881](https://github.com/google-gemini/gemini-cli/pull/20881) — Restore AskUser after Ctrl+Z suspend | Fixes state loss on job control; critical for Unix workflow integration | Open |
| [#20904](https://github.com/google-gemini/gemini-cli/pull/20904) — Wait for auto-update before relaunch | Race condition fix for Trusted Folders restart path | Open |
| [#20931](https://github.com/google-gemini/gemini-cli/pull/20931) — Shell fix (jacob314) | Addresses #20930, likely shell integration regression | Open |
| [#20927](https://github.com/google-gemini/gemini-cli/pull/20927) — Improved GEMINI_API_KEY error message | Actionable setup guidance with platform-specific commands | Open |
| [#20439](https://github.com/google-gemini/gemini-cli/pull/20439) — Fix AfterAgent hook infinite loop | `stopHookActive` propagation on retry path; stability fix | Open |
| [#20683](https://github.com/google-gemini/gemini-cli/pull/20683) — Show GCP project in /about | OAuth/Code Assist visibility gap closed | Open |
| [#20922](https://github.com/google-gemini/gemini-cli/pull/20922) — Compact header redesign | Mac Terminal logo fix, cross-terminal consistency | Open |

---

## 5. Feature Request Trends

1. **Agent Orchestration** — Remote Agents epic (#20302, #20303, #20304) and Local Subagents (#20195, #20312) dominate roadmap; community wants multi-agent delegation with clear UX boundaries.

2. **Input Experience** — Repeated AskUser enhancements: external editor (#20181), history search (#20142), and suspend/resume resilience (#20881) show demand for "terminal-native" interaction patterns.

3. **Observability & Control** — Plan mode visibility (#20716), subagent history expanders (#20886), and token-frugal extraction (#19561) reflect need for transparency in autonomous operations.

4. **Cross-Platform Parity** — Windows keyboard handling (#20929) and shell-specific behaviors indicate ongoing platform hardening.

---

## 6. Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Reliability at scale** | Heap exhaustion (#20550), API parsing crashes (#20193 epic), "high demand" errors (#20925) | High — blocking production use |
| **Plan mode friction** | Truncated approvals (#20716), raw tag leakage (#19514), YOLO mode confusion (#20650) | Medium — breaks trust in autonomous mode |
| **Shell/terminal integration** | Ctrl+Z state loss (#20881), slow shell magic (#18953), Windows keybindings (#20929) | Medium — daily workflow friction |
| **Configuration discoverability** | Missing API key guidance (addressed in #20927), plan directory settings (#20344) | Low-Medium — onboarding friction |

---

*Digest compiled from google-gemini/gemini-cli public activity. For real-time updates: https://github.com/google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-03

---

## 1. Today's Highlights

Two releases dropped in the last 24 hours, bringing native terminal color palette detection and long-awaited repo-level configuration support via `.github/copilot/config.json`. The community continues to grapple with rendering instability—multiple flickering and scrolling issues remain active—while reasoning effort configuration and Gemini 3 Flash access dominate feature requests.

---

## 2. Releases

| Version | Key Changes |
|--------|-------------|
| **v0.0.421-1** | `AUTO` theme now reads your terminal's ANSI color palette directly for seamless theme matching |
| **v0.0.421-0** | ACP clients can configure reasoning effort via session options; clickable terminal links; **repo-level config support** via `.github/copilot/config.json` for shared project settings (marketplaces, launch messages); improved Markdown rendering |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#1048](https://github.com/github/copilot-cli/issues/1048) | **Allow reasoning effort to be set through the CLI** | Partially addressed in v0.0.421-0 for ACP clients, but CLI flag support still missing; blocks automation workflows | 20 👍, active discussion on parity with interactive mode |
| [#821](https://github.com/github/copilot-cli/issues/821) | **Enable gemini-3-flash model in CLI** | Model availability gap between web and CLI creates feature fragmentation | 39 👍, oldest open request in this batch |
| [#1348](https://github.com/github/copilot-cli/issues/1348) | **[BUG] Screen flickering in iTerm2 during streaming output** | Accessibility and UX blocker; `clearScreenDown` redraw logic needs overhaul | 8 comments, 7 👍, recently closed |
| [#980](https://github.com/github/copilot-cli/issues/980) | **Model from agent.md isn't recognized** | Breaks agent configuration portability between VS Code and CLI | 7 comments, ongoing triage |
| [#1775](https://github.com/github/copilot-cli/issues/1775) | **Scroll position in Windows Terminal sometimes goes crazy** | Rendering regression affecting primary Windows terminal; no reliable repro yet | 3 👍, fresh report (Mar 2) |
| [#1615](https://github.com/github/copilot-cli/issues/1615) | **Effort level resets on close** | Persistence bug undermines new reasoning effort feature | 3 comments, affects v0.0.414 |
| [#1732](https://github.com/github/copilot-cli/issues/1732) | **MCP tool responses silently truncated to 10KB** | Data loss in MCP integrations; bypasses existing `yme()` large-output handler | Enterprise workflow blocker |
| [#1755](https://github.com/github/copilot-cli/issues/1755) | **Expose slash commands as tool calls for agent self-healing** | Would enable autonomous recovery from MCP auth expiration | 1 👍, sophisticated enterprise use case |
| [#1750](https://github.com/github/copilot-cli/issues/1750) | **XDG_CONFIG_HOME support uses .copilot subdirectory** | Spec violation creates hidden config in already-hidden paths | 3 👍, Linux/Unix hygiene issue |
| [#1490](https://github.com/github/copilot-cli/issues/1490) | **Support for MCP Protocol Version 2025-11-25** | Protocol version lag breaking new MCP server compatibility | Forward-compatibility concern |

---

## 4. Key PR Progress

Only **1 PR** updated in the last 24 hours:

| # | PR | Description | Impact |
|---|-----|-------------|--------|
| [#1699](https://github.com/github/copilot-cli/pull/1699) | **install: guide user to update PATH for current shell session** | Improves install script UX by helping users activate `copilot` immediately without restarting shell | Reduces onboarding friction; closed |

*Note: Low PR activity suggests development may be in a stabilization period or occurring in private branches.*

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Reasoning effort control** | #1048 (CLI flags), #1615 (persistence), shipped partially in v0.0.421-0 | 🔥 High — converging on CLI parity |
| **Gemini 3 Flash access** | #821 | 🔥 High — long-standing, high 👍 |
| **MCP ecosystem maturity** | #1732 (truncation), #1755 (self-healing), #1490 (protocol), #1795 (env inheritance), #1759 (timeouts) | 🔥 High — enterprise adoption pressure |
| **Session management** | #1467 (resume last), #1776 (user-defined names, closed), #1615 | Medium — workflow continuity |
| **Configuration flexibility** | v0.0.421-0 repo-level config, #1750 (XDG compliance) | Medium — team/enterprise scaling |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Terminal rendering instability** | Flickering (#1348, #1716), scroll jumping (#1775, #1712), garbled paste (#1733, #1768) | **Critical** — 5+ active issues, multiple terminals affected |
| **MCP reliability gaps** | Timeouts (#1759), silent truncation (#1732), auth expiration handling (#1755), env var inheritance (#1795) | **High** — blocking production MCP adoption |
| **Configuration drift** | Effort level not persisting (#1615), agent.md ignored (#980), skills discovery issues (#1773) | Medium — undermines new features |
| **Model availability parity** | Web vs. CLI feature gaps (#821) | Medium — perceived as neglect |
| **Windows-specific regressions** | Paste corruption, scroll issues, help message overlay (#1771) | Medium — platform equity concern |

---

*Digest compiled from github.com/github/copilot-cli activity through 2026-03-03.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-03

---

## 1. Today's Highlights

No new releases today, but the community is highly active with **18 issues** and **9 PRs** updated in 24 hours. **MCP stability** dominates bug reports—multiple users report complete CLI crashes when MCP servers fail or timeout—while **context management** and **subagent UX** emerge as the hottest feature directions. A major PR for **session export/import** landed, addressing long-requested workflow portability.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1314](https://github.com/MoonshotAI/kimi-cli/issues/1314) | **MCP server connection failure crashes entire CLI** | Critical reliability flaw: one misbehaving MCP server bricks the whole tool. Fixed and closed same day—rapid response. | 👍 1, closed quickly |
| [#1316](https://github.com/MoonshotAI/kimi-cli/issues/1316) | **MCP timeout causes kimi-cli to become unavailable** | Same root cause as #1314 but emphasizing timeout scenarios. Chinese user reports complete workflow interruption. | New, no votes yet |
| [#1266](https://github.com/MoonshotAI/kimi-cli/issues/1266) | **HTTP header validation error from trailing whitespace** | Deep platform bug: `platform.version()` pollution breaks connections on specific Linux kernels. Well-documented root cause. | 👍 1, pending fix |
| [#1285](https://github.com/MoonshotAI/kimi-cli/issues/1285) | **LLM provider connection error** | Generic but high-impact connectivity failure on Linux. 5 comments suggest active troubleshooting. | 5 comments |
| [#1315](https://github.com/MoonshotAI/kimi-cli/issues/1315) | **Subagents keep running after hitting ESC** | UX safety issue: users expect ESC to halt all execution, but background subagents continue. | New |
| [#1296](https://github.com/MoonshotAI/kimi-cli/issues/1296) | **Intermittent error from disconnected MCP** | Flaky MCP state handling causing sporadic failures. Harder to reproduce but degrades trust. | New |
| [#1301](https://github.com/MoonshotAI/kimi-cli/issues/1301) | **Ghostty light theme 'yolo' identifier hard to distinguish** | Accessibility/visual design issue in terminal theming. Niche but polished tools need polish. | 👍 1 |
| [#1302](https://github.com/MoonshotAI/kimi-cli/issues/1302) | **Web UI project path overlaps with diff file view** | Layout bug in web interface degrading code review experience. | New |
| [#778](https://github.com/MoonshotAI/kimi-cli/issues/778) | **API Error 400: Invalid request** | Persistent cryptic error from January still unresolved. Suggests validation edge cases in request construction. | Updated yesterday |
| [#1320](https://github.com/MoonshotAI/kimi-cli/issues/1320) | **Smart arrow key navigation for multiline input** | Common CLI UX papercut: history navigation vs. cursor movement in multiline text. | New feature request |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#1317](https://github.com/MoonshotAI/kimi-cli/pull/1317) | **Session context export/import slash commands** | 🟢 Open | Adds `/export` and `/import` with shell utilities—enables backup, sharing, and migration of conversation state. Major workflow enabler. |
| [#1318](https://github.com/MoonshotAI/kimi-cli/pull/1318) | **MCP loading status indicators** | 🔴 Closed | Surfaced MCP connection state in UI. Closed without merge—possibly superseded or needs revision. |
| [#1300](https://github.com/MoonshotAI/kimi-cli/pull/1300) | **Custom /compact instructions + ratio-based auto-compaction** | 🔴 Closed | Context compression with configurable triggers. Addresses memory pressure; closed—may need resubmission. |
| [#1305](https://github.com/MoonshotAI/kimi-cli/pull/1305) | **Configurable preserved messages in compaction** | 🟢 Open | Fine-grained control over what survives context compaction. Pairs with #1300 direction. |
| [#1306](https://github.com/MoonshotAI/kimi-cli/pull/1306) | **Support Trae editor** | 🟢 Open | Expands editor integration coverage to ByteDance's Trae IDE. |
| [#1303](https://github.com/MoonshotAI/kimi-cli/pull/1303) | **Fix scrollable file list overflow in ToolbarChangesPanel** | 🔴 Closed | UI layout fix for web interface—sticky footer overlap resolved. |
| [#1236](https://github.com/MoonshotAI/kimi-cli/pull/1236) | **Enable trust_env in aiohttp.ClientSession** | 🟢 Open | Respects environment proxy settings—critical for corporate/locked-down networks. |
| [#1223](https://github.com/MoonshotAI/kimi-cli/pull/1223) | **Allow default_query/custom_headers for Azure Kimi** | 🟢 Open | Enterprise Azure OpenAI compatibility—enables custom query params and headers. |
| [#1108](https://github.com/MoonshotAI/kimi-cli/pull/1108) | **Source uv env after installation** | 🟢 Open | Fixes install script PATH update for `uv` tool—smoother first-run experience. |

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Context lifecycle management** | [#1304](https://github.com/MoonshotAI/kimi-cli/issues/1304), [#1305](https://github.com/MoonshotAI/kimi-cli/pull/1305), [#1300](https://github.com/MoonshotAI/kimi-cli/pull/1300), [#1317](https://github.com/MoonshotAI/kimi-cli/pull/1317) | 🔥🔥🔥 High—export/import, compression, compaction controls all active |
| **Subagent control & visibility** | [#1312](https://github.com/MoonshotAI/kimi-cli/issues/1312), [#1315](https://github.com/MoonshotAI/kimi-cli/issues/1315), [#1313](https://github.com/MoonshotAI/kimi-cli/issues/1313) | 🔥🔥🔥 High—users want session switching, proper termination, hooks/notifications |
| **MCP robustness & observability** | [#1314](https://github.com/MoonshotAI/kimi-cli/issues/1314), [#1316](https://github.com/MoonshotAI/kimi-cli/issues/1316), [#1296](https://github.com/MoonshotAI/kimi-cli/issues/1296), [#1318](https://github.com/MoonshotAI/kimi-cli/pull/1318) | 🔥🔥🔥 High—failure isolation and status feedback urgently needed |
| **Local skills management** | [#1319](https://github.com/MoonshotAI/kimi-cli/issues/1319) | 🔥🔥 Medium—users want `skills list`, `skills rm` parity with `/mcp` |
| **Web UI parity with CLI** | [#1307](https://github.com/MoonshotAI/kimi-cli/issues/1307), [#1310](https://github.com/MoonshotAI/kimi-cli/issues/1310), [#1302](https://github.com/MoonshotAI/kimi-cli/issues/1302) | 🔥🔥 Medium—`--agent-file`, Mermaid diagrams, layout fixes |
| **Undo/rollback operations** | [#1311](https://github.com/MoonshotAI/kimi-cli/issues/1311) | 🔥🔥 Medium—explicitly compared to OpenCode's undo |
| **Long-running task automation** | [#1309](https://github.com/MoonshotAI/kimi-cli/issues/1309) | 🔥 Medium—heartbeat, cron, memories ("Openclaw-like") |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Tracking |
|------------|-----------|--------|----------|
| **MCP failures cascade to full CLI crash** | 4+ reports in 24h | 🔴 Critical—workflow termination | [#1314](https://github.com/MoonshotAI/kimi-cli/issues/1314), [#1316](https://github.com/MoonshotAI/kimi-cli/issues/1316), [#1296](https://github.com/MoonshotAI/kimi-cli/issues/1296) |
| **Context bloat without escape hatches** | 3+ requests | 🟡 High—productivity degradation | [#1304](https://github.com/MoonshotAI/kimi-cli/issues/1304), [#1305](https://github.com/MoonshotAI/kimi-cli/pull/1305), [#1317](https://github.com/MoonshotAI/kimi-cli/pull/1317) |
| **Subagent opacity—can't see, switch, or stop** | 3+ requests | 🟡 High—loss of control | [#1312](https://github.com/MoonshotAI/kimi-cli/issues/1312), [#1315](https://github.com/MoonshotAI/kimi-cli/issues/1315), [#1313](https://github.com/MoonshotAI/kimi-cli/issues/1313) |
| **Network/proxy configuration gaps** | 2+ PRs | 🟡 High—enterprise adoption blocker | [#1236](https://github.com/MoonshotAI/kimi-cli/pull/1236), [#1223](https://github.com/MoonshotAI/kimi-cli/pull/1223) |
| **Inconsistent skills management UX** | 1 report | 🟢 Medium—discoverability issue | [#1319](https://github.com/MoonshotAI/kimi-cli/issues/1319) |
| **Cryptic API error messages** | Long-standing | 🟢 Medium—debugging friction | [#778](https://github.com/MoonshotAI/kimi-cli/issues/778) |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity on 2026-03-03.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-03

---

## 1. Today's Highlights

No new releases today, but significant momentum continues in stability fixes and GPT-5 ecosystem support. Three critical PRs merged to fix exit codes, image handling in vision models, and Bedrock API compatibility. The community is actively pushing for better Windows/WSL2 reliability and expanded model provider support, with 50 issues updated in the last 24 hours.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#4283](https://github.com/anomalyco/opencode/issues/4283) Copy To Clipboard not working | Fundamental TUI functionality broken across terminals; affects daily workflow | 61 comments, 44 👍 — highest engagement; users providing detailed OS/terminal repros |
| [#5363](https://github.com/anomalyco/opencode/issues/5363) 70GB memory consumption | Severe resource leak in background tmux sessions; production blocker | 35 comments, 14 👍; users sharing `htop` screenshots and version bisects |
| [#5361](https://github.com/anomalyco/opencode/issues/5361) TUI freezes on WSL2 (v1.0.129 regression) | 2-10 second input freezes; regression identified | 28 comments, 11 👍; WSL2 users confirming pattern, seeking workarounds |
| [#4031](https://github.com/anomalyco/opencode/issues/4031) Python SDK availability | Blocks enterprise adoption; version ≥1.0.39 API access unclear | 24 comments; no official response on package distribution |
| [#5034](https://github.com/anomalyco/opencode/issues/5034) Ministral 3 support: system role error | New model support blocked by role validation | 18 comments, 9 👍; users proposing role mapping fixes |
| [#13807](https://github.com/anomalyco/opencode/issues/13807) Kimi K2.5 on Bedrock: premature end_turn | AWS Bedrock integration broken for multi-tool workflows | 18 comments; detailed API tracing provided by reporter |
| [#13546](https://github.com/anomalyco/opencode/issues/13546) GPT-5 reasoningSummary parameter error | Custom OpenAI-compatible providers fail with GPT-5 series | 13 comments, 10 👍; affects self-hosted and proxy deployments |
| [#15760](https://github.com/anomalyco/opencode/issues/15760) Mouse selection unreliable in VS Code terminal | Recent regression degrading basic TUI interaction | 7 comments; "drives me nuts" — user frustration evident |
| [#15776](https://github.com/anomalyco/opencode/issues/15776) GPT-5.3-Codex safety_identifier support | New OpenAI safety feature blocks legitimate coding tasks | 7 comments; enterprise/policy-critical |
| [#12570](https://github.com/anomalyco/opencode/issues/12570) GPT-5.3-Codex early termination | Model stops after 1-2 tool calls; regression from 5.2 | 10 comments; blocking Codex adoption |

---

## 4. Key PR Progress

| PR | Status | Feature/Fix |
|----|--------|-------------|
| [#13854](https://github.com/anomalyco/opencode/pull/13854) | OPEN | Fixes streaming markdown rendering — stops skipping final table rows in completed messages |
| [#12520](https://github.com/anomalyco/opencode/pull/12520) | OPEN | MCP search tool for lazy loading; rebase of #8771 with enhancements |
| [#15804](https://github.com/anomalyco/opencode/pull/15804) | OPEN | Critical fix for empty responses from custom OpenAI-compatible providers; applies Copilot's working streaming implementation broadly |
| [#15757](https://github.com/anomalyco/opencode/pull/15757) | OPEN | Robust child process exit detection; fixes bash tool hanging issues |
| [#7137](https://github.com/anomalyco/opencode/pull/7137) | OPEN | `--dangerously-skip-permissions` flag for fully automated workflows |
| [#13750](https://github.com/anomalyco/opencode/pull/13750) | OPEN | ACP question tool support for Zed and other ACP-compatible editors |
| [#15663](https://github.com/anomalyco/opencode/pull/15663) | OPEN | Electron-based desktop version (beta); alternative to Tauri |
| [#15787](https://github.com/anomalyco/opencode/pull/15787) | **CLOSED** | Fixed `opencode run` exit code 0 on session errors — now returns 1 |
| [#15788](https://github.com/anomalyco/opencode/pull/15788) | **CLOSED** | Fixed image re-injection from tool results for vision-capable OpenAI-compatible models |
| [#15777](https://github.com/anomalyco/opencode/pull/15777) | **CLOSED** | Filtered empty text blocks for AWS Bedrock compatibility |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **GPT-5 ecosystem parity** | 4+ issues on GPT-5.3-Codex, GPT-5 series compatibility | High — blocking enterprise adoption |
| **Provider flexibility** | Custom OpenAI-compatible endpoints, OpenRouter, Bedrock, NIM | High — fragmentation causing support burden |
| **IDE/workspace integration** | VS Code workspace detection, multi-root projects | Medium — embedded mode limitations |
| **Internationalization** | [#15800](https://github.com/anomalyco/opencode/issues/15800) three-tier i18n proposal | Early — community-driven proposal |
| **Skill/UX customization** | Hide full skill content, granular permission controls | Medium — power user workflow optimization |
| **Remote workspace abstraction** | [#15752](https://github.com/anomalyco/opencode/issues/15752) server discovery and switching | Emerging — distributed team use cases |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Representative Issues |
|------------|-----------|--------|----------------------|
| **Clipboard/TUI selection failures** | Very High | Daily workflow blocker | #4283, #7048, #15760 |
| **Memory/resource leaks** | High | Production instability | #5363, #14734 (Bun crashes) |
| **WSL2/Windows reliability** | High | Platform equity gap | #5361, #13546, #11288 |
| **Model provider fragmentation** | High | Integration maintenance burden | #5034, #13807, #13546, #14972 |
| **Permission/automation friction** | Medium | CI/CD and headless usage | #7137 (proposed fix), #15589 |
| **Python SDK availability** | Medium | Enterprise language ecosystem | #4031 |
| **Documentation/contributor clarity** | Low-Medium | Onboarding friction | #15792 (branch workflow) |

---

*Digest compiled from github.com/anomalyco/opencode — 50 issues, 50 PRs updated in last 24h.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-03-03

## Today's Highlights

The Qwen Code team shipped **v0.11.1-preview.1** with official support for `AGENTS.md` as a default context file, aligning with the emerging industry standard for agent instructions. A critical fix for subagent system prompts was also included to ensure consistent output language handling. Meanwhile, the community is actively stress-testing Xcode integration and local LLM deployments, surfacing edge cases around tool call validation and context compression.

---

## Releases

### v0.11.1-preview.1 / v0.11.1-nightly.20260303.407a66c9 / v0.11.1-preview.0
| Change | Description |
|--------|-------------|
| **feat** | Support `AGENTS.md` as default context file — enables project-level agent instructions following the [agents.md](https://agents.md) standard |
| **fix** | Append `output-language.md` to subagent system prompt — fixes language consistency in delegated tasks |

[Release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.11.1-preview.1)

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#643](https://github.com/QwenLM/qwen-code/issues/643) | Xcode integration fails with `[] is too short - 'tools'` | **P1 bug** blocking macOS/iOS developers from using qwen3-coder-plus in Xcode; appears to be a tool schema validation issue | 5 comments, active troubleshooting |
| [#1873](https://github.com/QwenLM/qwen-code/issues/1873) | LSP ignores `.lsp.json` configuration | Breaks C/C++ development workflows where custom LSP settings are essential; `documentSymbol` returns empty | 5 comments, needs triage |
| [#1924](https://github.com/QwenLM/qwen-code/issues/1924) | Context compression ineffective, `contextWindowSize` buggy | Local LLM users (llama.cpp) report compression degrades from 82k→25k to 816→25k, making long-context workflows unusable | 4 comments, performance-critical |
| [#1985](https://github.com/QwenLM/qwen-code/issues/1985) | VSCode Companion missing Plan Mode toggle | Feature parity gap with CLI; users want `Shift+Tab` cycling in the extension | 4 comments, UX friction |
| [#2044](https://github.com/QwenLM/qwen-code/issues/2044) | CLI crash with `stream-json` format: `Cannot read properties of undefined (reading 'themeError')` | SDK/headless usage blocked; regression in theme initialization | 3 comments, **closed** with fix pending |
| [#1785](https://github.com/QwenLM/qwen-code/issues/1785) | SDK v0.1.5-preview.1 CLI crash on Electron integration | Same `themeError` root cause as #2044; affects embedded SDK consumers | 3 comments, cross-referenced |
| [#773](https://github.com/QwenLM/qwen-code/issues/773) | Termux (Android) installation fails | Mobile/edge deployment use case; community patch exists but not merged | 2 comments, platform expansion |
| [#1514](https://github.com/QwenLM/qwen-code/issues/1514) | LSP support roadmap question | Competitive parity with OpenCode/Claude Code; agent accuracy depends on symbol navigation | 2 comments, strategic feature |
| [#2046](https://github.com/QwenLM/qwen-code/issues/2046) | macOS clipboard image paste uses wrong modifier key | `Cmd+V` vs `Ctrl+V` breaks muscle memory for Mac users | 1 comment, papercut UX |
| [#2055](https://github.com/QwenLM/qwen-code/issues/2055) | `@` file completion broken after custom commands | Scoped commands can't reference files; limits custom workflow power | 1 comment, new today |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|--------------|--------|
| [#1988](https://github.com/QwenLM/qwen-code/pull/1988) | **Hooks system infrastructure** | 12 lifecycle hooks (PreToolUse, PostToolUse, etc.) for custom command injection; enables extensibility without core forks | Open, infrastructure |
| [#2000](https://github.com/QwenLM/qwen-code/pull/2000) | **Parallel tool call execution** | `Promise.allSettled` replaces sequential loops; significant latency reduction for multi-tool batches | Open, performance |
| [#1912](https://github.com/QwenLM/qwen-code/pull/1912) | **Agent collaboration arena** | Multi-model competitive execution via git worktrees; compare qwen3 vs GPT-5 vs Claude side-by-side | Open, experimental |
| [#2056](https://github.com/QwenLM/qwen-code/pull/2056) | **Fix symlink handling in extension install** | Resolves `ENOTSUP` errors when installing skills from repos with directory symlinks | Open, bugfix |
| [#2048](https://github.com/QwenLM/qwen-code/pull/2048) | **File search OOM protection** | 100k file limit with warning; prevents `@` crashes in large monorepos | Open, stability |
| [#2047](https://github.com/QwenLM/qwen-code/pull/2047) | **Ignore `stream-json` in TTY mode** | Fixes #2044 hang; forces TEXT format for interactive sessions | Open, CLI reliability |
| [#1978](https://github.com/QwenLM/qwen-code/pull/1978) | **VSCode image paste support** | Clipboard image handling for Companion extension; closes UX gap with web clients | Open, IDE feature |
| [#2043](https://github.com/QwenLM/qwen-code/pull/2043) | **Sanitize Chinese-number spaces in tool args** | Fixes file read failures on paths like `测试 1 文件.txt` → `测试1文件.txt` | Open, i18n robustness |
| [#1817](https://github.com/QwenLM/qwen-code/pull/1817) | **Async DNS check for `host.docker.internal`** | Fixes IDE connection in containerized environments (code-server, WebIDE) | Open, devcontainer support |
| [#1830](https://github.com/QwenLM/qwen-code/pull/1830) | **JSON Schema for VS Code settings** | Auto-generated schema for `.qwen/settings.json` with IntelliSense | Open, v0.12.0, DX improvement |

---

## Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Standardized agent instructions** | `AGENTS.md` support shipped (#2006), `.agents` directory loading requested (#2042) | Community converging on shared conventions across tools (Claude Code, OpenCode, Qwen) |
| **Model-per-skill configuration** | #2052 requests skill-level model switching (like Claude Code) | Users want vision models for image tasks, coding models for implementation, without manual context switching |
| **IDE parity with CLI** | Plan Mode toggle (#1985), image paste (#1951, #1978), `@` completion (#2055) | VSCode Companion maturing but lagging core CLI capabilities |
| **Local/edge deployment polish** | Termux (#773), llama.cpp context issues (#1924), Ollama auth (#2049) | Self-hosted workflows need first-class support, not just cloud-optimized paths |

---

## Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Xcode/`tools` validation errors** | 2 issues (#643, #2054) | **High** — blocks macOS IDE adoption | Needs Apple-specific tool schema review |
| **Theme initialization crashes** | 2+ issues (#2044, #1785) | **High** — breaks SDK and headless usage | Fix in #2047, needs backport |
| **Context compression quality** | 1 issue (#1924) with detailed repro | **Medium-High** — silently degrades long-context performance | Local LLM optimization gap |
| **LSP configuration ignored** | 1 issue (#1873) | **Medium** — C/C++ workflows impaired | Config system refactor needed |
| **Windows line-ending handling** | #2053 (CRLF/BOM breaks frontmatter) | **Medium** — cross-platform friction | Parser robustness |
| **Extension install edge cases** | #2050 (symlinks), #2056 (fix pending) | **Medium** — skill ecosystem growth blocker | File system abstraction gaps |

---

*Digest compiled from 35 issues and 27 PRs updated in the last 24 hours.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*