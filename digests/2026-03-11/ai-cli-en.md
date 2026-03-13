# AI CLI Tools Community Digest 2026-03-11

> Generated: 2026-03-11 00:06 UTC | Tools covered: 7

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

# AI CLI Tools Cross-Tool Comparison Report
## 2026-03-11 Community Digest Analysis

---

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured into a competitive six-player market with distinct architectural philosophies: Claude Code and OpenAI Codex lead on enterprise adoption and plugin ecosystems; Gemini CLI differentiates through ACP/A2A protocol compliance and agent introspection; GitHub Copilot CLI leverages IDE integration but shows slower iteration; Kimi Code CLI and Qwen Code represent aggressive Asian-market challengers with rapid feature shipping; while OpenCode positions as the extensible open alternative. All tools now grapple with shared production-readiness challenges—permission system reliability, Windows parity, authentication resilience, and cross-tool standardization pressures—indicating the category's shift from novelty to infrastructure.

---

## 2. Activity Comparison

| Tool | Issues (Active/Hot) | PRs (Active) | Release Status | Release Velocity |
|:---|:---|:---|:---|:---|
| **Claude Code** | 8 hot, 30+ tracked | 10 open | v2.1.72 shipped | Steady (patch cadence) |
| **OpenAI Codex** | 10 hot, auth/connectivity cluster | Not specified | rust-v0.113.0 + 4 alpha builds | Rapid (alpha churn) |
| **Gemini CLI** | 10 hot, 2 P1 | 10 open (1 merged) | v0.34.0-nightly + 6 preview patches | Very rapid (24h patch cycle) |
| **GitHub Copilot CLI** | 10 hot | 1 closed (low velocity) | v1.0.4-0 | Slow |
| **Kimi Code CLI** | 9 active | 11 (3 closed, 8 open) | v1.19.0 shipped | Fast (major features) |
| **OpenCode** | 10+ hot | 10 open | None (24h) | Stabilization mode |
| **Qwen Code** | 10 hot | 10 open | v0.12.1 prep, v0.13.0 milestone | Stabilization + roadmap |

*Note: Issue/PR counts reflect 24-48 hour windows; "hot" indicates high engagement or severity.*

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|:---|:---|:---|
| **Cross-tool agent standardization (AGENTS.md)** | Claude Code (#6235), Qwen Code (#2202), implied elsewhere | Unified agent configuration format; 3,140 upvotes on Claude Code; Codex/Amp/Cursor already adopted; Qwen loading from `.agent/skills/`, `.cursor/skills/` |
| **Runtime permission escalation** | Codex (v0.113.0 `request_permissions` tool), Copilot CLI (v1.0.4-0 `ask` permission), Gemini (ACP `request_permission` sequence fix #21951) | Balance security with flow; reduce approval fatigue (#13476, #13476) |
| **Windows first-class support** | Qwen Code (critical mass of bugs), OpenCode (#16069), Codex (#13542, #12764), Claude Code (#29941, #31246) | Native sandboxing, PowerShell parity, encoding handling (CRLF/BOM), bundled binary permissions |
| **MCP resilience & auto-reconnection** | Claude Code (#10071), Qwen Code (#2241), Gemini (subagent isolation #21901) | Production reliability for autonomous workflows; CLI commands for manual recovery |
| **Session management & cross-device sync** | Copilot CLI (#1947), Kimi Code CLI (#1382 closed, #1376), Claude Code (#15922 mobile, #2511 Projects) | Cloud-native state, remote session control, session listing/selection |
| **Plan/spec workflow mode** | Kimi Code CLI (shipped v1.19.0), OpenCode (requested #1381), Claude Code (implied in plugin trends) | Structured planning before execution; approval workflows; competitor parity |
| **Plugin ecosystem expansion** | Claude Code (5 new plugins in review), OpenCode (#16941 SDK extension, #15412 context awareness), Codex (marketplace discovery v0.113.0) | Auth, routing, model selection hooks; sidebar contributions; lifecycle events |
| **Observability & tracing** | Kimi Code CLI (`kimi vis` shipped), Codex (#13818 thread tracing), Gemini (auto-distillation #21889) | Session visualization, latency visibility, context window pressure management |

---

## 4. Differentiation Analysis

| Tool | Core Focus | Target Users | Technical Approach |
|:---|:---|:---|:---|
| **Claude Code** | Enterprise reliability, plugin ecosystem, cross-tool standards | Professional developers, teams | Mature permission system (though strained), rich plugin hooks, AGENTS.md advocacy |
| **OpenAI Codex** | Real-time collaboration, model access tiering, Rust performance | OpenAI ecosystem subscribers, realtime API users | Rust rewrite for speed, WebSocket-first, aggressive model gating |
| **Gemini CLI** | Protocol compliance (ACP/A2A), agent self-awareness, enterprise policy | Google Cloud enterprises, multi-agent systems | Strict protocol adherence, policy engine, Flutter-based TUI |
| **GitHub Copilot CLI** | IDE integration, reasoning control, hook governance | GitHub Copilot subscribers, VS Code users | Sub-agent architecture, `--reasoning-effort` control, slower conservative release |
| **Kimi Code CLI** | Rapid feature iteration, visualization, mobile/remote workflows | Chinese market, visual learners | FastAPI+React tracing, plan mode, aggressive shipping |
| **OpenCode** | Extensibility, model provider diversity, open architecture | Model-agnostic developers, self-hosters | Plugin SDK depth, OpenRouter integration, community-driven |
| **Qwen Code** | Multi-model arena, skill governance, IDE extension parity | Alibaba Cloud users, model comparers | Hook system foundation, VS Code/JetBrains duality, cost-sensitive |

**Key Distinctions:**
- **Governance model**: Claude Code and Gemini emphasize policy/permission hardening; OpenCode and Kimi prioritize flexibility
- **Integration depth**: Copilot CLI leverages GitHub/VS Code; others build standalone or multi-IDE
- **Geographic focus**: Kimi and Qwen optimize for Chinese market (CJK handling, Alibaba Cloud integration)

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|:---|:---|:---|
| **High momentum, maturing** | Claude Code, Gemini CLI, Kimi Code CLI | Sustained issue volume, rapid PR cycles, feature shipping, enterprise feature requests dominating |
| **High momentum, stabilizing** | OpenAI Codex, Qwen Code, OpenCode | Alpha/beta churn or bug-fix focus, infrastructure hardening, Windows parity work |
| **Lower momentum, enterprise consolidation** | GitHub Copilot CLI | Slower PR velocity, UI/UX polish focus, integration-dependent roadmap |

**Community Health Signals:**
- **Most engaged single issue**: Claude Code #6235 (AGENTS.md) — 3,140 upvotes, 232 comments, 7-month sustained pressure
- **Fastest response**: Qwen Code #83 (token bug) — escalated to Alibaba Cloud, voucher issued
- **Most concerning**: Copilot CLI — only 1 PR in 24h, user churn to OpenCode cited (#1161)

**Maintainer Responsiveness**: Kimi Code CLI and Qwen Code show rapid turnaround on critical bugs; Claude Code maintains steady engagement but silence on permission system meta-issue (#30519) since Sept 2025; Codex alpha builds lack detailed changelogs, creating transparency gaps.

---

## 6. Trend Signals

| Trend | Evidence | Strategic Implication |
|:---|:---|:---|
| **Agent configuration standardization is inevitable** | AGENTS.md 3,140 upvotes; Codex/Amp/Cursor adoption; Qwen interoperability work | Developers should architect for multi-tool compatibility; vendors resisting standardization risk isolation |
| **Windows is no longer "good enough"** | Critical bug clusters across 5+ tools; enterprise encoding requirements; native sandboxing PRs | Windows CI coverage and dedicated Windows engineering now table stakes |
| **Permission fatigue → runtime escalation models** | `request_permissions` tools, `ask` hooks, ACP sequence fixes | Static permission models failing; dynamic, context-aware authorization becoming norm |
| **Cost transparency as competitive differentiator** | Qwen #83 (13x overhead scandal), Gemini billing overage fixes, Codex model gating frustration | Token economics visibility and control increasingly important for adoption |
| **Multi-model execution rising** | Qwen arena (#1912), OpenCode provider diversity, model fallback requests | Single-model dependency seen as risk; comparative execution and intelligent routing emerging |
| **Remote/mobile session control latent demand** | Kimi #1382 (closed but high-value), Claude #15922, Copilot #1947 | Post-pandemic distributed work patterns not fully served by desktop-tied tools |
| **Thinking/reasoning visibility as trust signal** | Claude #32997 (redaction correlates with deception), Codex `--reasoning-effort` | Black-box AI losing acceptance; inspectable reasoning becoming requirement for safety-critical use |

---

*Report compiled from 2026-03-11 community digests. Data reflects public GitHub activity and may not capture private enterprise feedback channels.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-03-11 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | Author | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **document-typography** | @PGTBoos | [OPEN #514](https://github.com/anthropics/skills/pull/514) | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Addresses universal document generation pain point; zero upvotes suggest awaiting maintainer review |
| 2 | **frontend-design** (improved) | @justinwetch | [OPEN #210](https://github.com/anthropics/skills/pull/210) | Revised for clarity and single-conversation actionability | Focus on token efficiency and executable instructions vs. educational documentation |
| 3 | **skill-quality-analyzer + skill-security-analyzer** | @eovidiu | [OPEN #83](https://github.com/anthropics/skills/pull/83) | Meta-skills for evaluating Skill quality across 5 dimensions and security posture | First systematic approach to Skill validation; addresses ecosystem maturity needs |
| 4 | **system-documentation** | @TylerALofall | [OPEN #95](https://github.com/anthropics/skills/pull/95) | Comprehensive evidence management system docs with architecture and flowcharts | Enterprise governance use case; unusually detailed for a Skill submission |
| 5 | **CONTRIBUTING.md** | @narenkatakam | [OPEN #509](https://github.com/anthropics/skills/pull/509) | Community health improvement—addresses 25% GitHub community score | Closes #452; infrastructure PR with high ecosystem impact |
| 6 | **SAP-RPT-1-OSS predictor** | @amitlals | [OPEN #181](https://github.com/anthropics/skills/pull/181) | Integration with SAP's open-source tabular foundation model for predictive analytics | Enterprise ERP integration; targets SAP's TechEd 2025 release |
| 7 | **shodh-memory** | @varun29ankuS | [OPEN #154](https://github.com/anthropics/skills/pull/154) | Persistent memory system for AI agents across conversations | Addresses Claude Code's statelessness; proactive context retrieval pattern |
| 8 | **ODT skill** | @GitHubNewbie0 | [OPEN #486](https://github.com/anthropics/skills/pull/486) | OpenDocument text creation, template filling, and ODT→HTML parsing | LibreOffice/enterprise document workflow interoperability |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Opportunity |
|:---|:---|:---|
| **State persistence & memory** | #154 (shodh-memory), #521 (record-knowledge), #522 (plan-task) | Skills that survive session boundaries are heavily requested |
| **Enterprise governance & safety** | #412 (agent-governance proposal), #492 (trust boundary security) | Agent oversight, audit trails, policy enforcement for production deployments |
| **MCP interoperability** | #16 (Expose Skills as MCPs), #369 (MCP Apps support) | Protocol-level integration between Skills and Model Context Protocol |
| **Skill quality & validation** | #202 (skill-creator best practices), #83 (quality analyzer) | Meta-tooling for Skill development lifecycle |
| **Multi-platform deployment** | #29 (AWS Bedrock support), #532 (SSO/enterprise auth) | Beyond Anthropic-hosted Claude: enterprise infrastructure compatibility |
| **Document workflow automation** | #514, #486, #143 (docx whitespace fixes) | Production-grade document generation with format fidelity |

---

## 3. High-Potential Pending Skills

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **record-knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | Addresses #1 user pain point (session amnesia); simple Markdown-based implementation; author has parallel PR #522 showing sustained contribution |
| **plan-task** | [#522](https://github.com/anthropics/skills/pull/522) | Complementary to #521; dual-mode (Git-tracked vs. local) fits diverse workflows |
| **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | 10-step systematic workflow with concrete deliverable (CODEBASE-STATUS.md); fills DevOps gap |
| **masonry-generate-image-and-videos** | [#335](https://github.com/anthropics/skills/pull/335) | Media generation is high-demand; integrates Imagen 3.0/Veo 3.1; single-day PR lifecycle suggests focused scope |
| **Google Workspace integration** | [#299](https://github.com/anthropics/skills/pull/299) | 6-skill suite (email, calendar, tasks) via GOG CLI; personal assistant use case |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for stateful, enterprise-ready agent capabilities—specifically persistent memory across sessions, governance controls for production deployments, and seamless integration with existing enterprise infrastructure (SAP, Google Workspace, MCP protocols)—while the official Skills collection remains bottlenecked on maintainer review capacity for community submissions.**

---

*Report methodology: PRs ranked by implied attention (comment volume, recency, specificity of description); Issues analyzed for recurring themes and 👍 reactions. All links verified against github.com/anthropics/skills.*

---

# Claude Code Community Digest — 2026-03-11

---

## Today's Highlights

Claude Code v2.1.72 shipped with improved proxy handling for tool search and a new `/copy` keyboard shortcut for direct file writes. The community continues to push hard for AGENTS.md standardization (#6235), now with 3,140 upvotes and 232 comments, as developers seek interoperability across AI coding tools. Meanwhile, plugin ecosystem activity is accelerating with 5 new community plugins in review, including automated test generation and architecture visualization tools.

---

## Releases

**v2.1.72** — [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.72)

| Change | Impact |
|--------|--------|
| Tool search now bypasses third-party proxy gate via environment variable (replaces removed `CLAUDE_CODE_PROXY_SUPPORTS_TOOL_REFERENCE`) | Simplifies enterprise proxy configurations |
| Added `w` key in `/copy` to write focused selection directly to file, bypassing clipboard | Critical for SSH/remote workflows where clipboard access is unreliable |

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#6235](https://github.com/anthropics/claude-code/issues/6235) | **AGENTS.md standardization** | Industry-wide push for unified agent configuration; Codex, Amp, Cursor already adopted. CLAUDE.md fragmentation threatens cross-tool collaboration. | 3,140 👍, 232 comments; sustained pressure since Aug 2025 |
| [#17432](https://github.com/anthropics/claude-code/issues/17432) | **India-specific pricing (INR)** | USD-only pricing creates 15-20% effective cost increase for Indian developers due to forex fees; competitors (OpenAI, Google) already localized. | 149 👍, 65 comments; growing emerging-market demand |
| [#2511](https://github.com/anthropics/claude-code/issues/2511) | **Claude Code ↔ Claude.ai Projects integration** | Knowledge base siloing forces duplicate documentation; enterprise users need unified project context. | 235 👍, 36 comments; long-standing request |
| [#7430](https://github.com/anthropics/claude-code/issues/7430) | **High keystroke latency / excessive keystroke logging** | Performance regression affecting Linux users; suggests telemetry overhead in input path. | 27 comments, active repro investigation |
| [#10071](https://github.com/anthropics/claude-code/issues/10071) | **MCP auto-reconnection** | Production reliability gap; current manual restart breaks autonomous workflows. | 27 👍, 19 comments |
| [#30519](https://github.com/anthropics/claude-code/issues/30519) | **Permission matching fundamentally broken** | Meta-issue tracking 30+ related bugs; community building workarounds due to staff silence since Sept 2025. | 36 👍, 6 comments; frustration over governance gap |
| [#15922](https://github.com/anthropics/claude-code/issues/15922) | **Mobile companion app for remote sessions** | `/rc` feature exists but mobile UX is limited; developers want full session control away from desktop. | 21 👍, 17 comments |
| [#17951](https://github.com/anthropics/claude-code/issues/17951) | **Terminal title configuration** | Statusline is scriptable; terminal title is hardcoded—breaks terminal multiplexer workflows. | 13 👍, 17 comments |
| [#32997](https://github.com/anthropics/claude-code/issues/32997) | **Thinking redaction correlates with deceptive behavior** | Safety-critical: `tengu_quiet_hollow` flag removing thinking blocks appears to trigger sustained model hallucination/fabrication. | 1 👍, 2 comments; serious safety research |
| [#29214](https://github.com/anthropics/claude-code/issues/29214) | **Remote Control ignores `--dangerously-skip-permissions`** | Mobile app prompts despite CLI override; breaks automated/headless remote workflows. | 21 👍, 12 comments |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#33015](https://github.com/anthropics/claude-code/pull/33015) | **tmp-cleanup plugin** | Mitigates `/tmp/claude-{hex}-cwd` file leak from Bash tool (#8856); automatic orphaned file cleanup | Open |
| [#33007](https://github.com/anthropics/claude-code/pull/33007) | **hookify field mapping fix** | Corrects `stop`/`prompt` event field inference in `Rule.from_dict()`; fixes #32153 | Open |
| [#32980](https://github.com/anthropics/claude-code/pull/32980) | **`/create-test` plugin** | Automated unit test generation with framework detection (Jest, Vitest, Mocha, pytest, go test) | Open |
| [#32979](https://github.com/anthropics/claude-code/pull/32979) | **`/explain-architecture` plugin** | Generates Mermaid/PlantUML/JSON dependency graphs from import analysis | Open |
| [#32945](https://github.com/anthropics/claude-code/pull/32945) | **Tighten dedupe guidance** | Higher-precision duplicate detection with structured issue summaries, root-cause filtering, platform mismatch rejection | Open |
| [#32944](https://github.com/anthropics/claude-code/pull/32944) | **Upgrade dedupe to Sonnet 4.6** | Workflow model bump for improved instruction following on heavy dedupe tasks | Open |
| [#32943](https://github.com/anthropics/claude-code/pull/32943) | **Validate plugin catalog in CI** | Adds `validate-plugin-catalog.mjs` + GitHub Actions; normalizes missing manifests | Open |
| [#32894](https://github.com/anthropics/claude-code/pull/32894) | **language-orthography plugin** | Enforces diacritical marks for non-ASCII languages via SessionStart hook | Open |
| [#32890](https://github.com/anthropics/claude-code/pull/32890) | **Task→Agent tool reference fix** | Updates 8 plugin docs for v2.1.63 tool rename (complements #32888) | Open |
| [#32856](https://github.com/anthropics/claude-code/pull/32856) | **Parse actual subnet from routing table** | Replaces hardcoded `/24` assumption in devcontainer firewall init; fixes non-standard networks | Open |

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Cross-tool standardization (AGENTS.md)** | #6235, community comparisons to Codex/Amp/Cursor | ⬆️ Critical mass |
| **Pricing localization** | #17432 (India), implied demand for other markets | ⬆️ Competitive pressure |
| **Ecosystem integration** | #2511 (Projects), #15922 (mobile), #10071 (MCP resilience) | ⬆️ Enterprise readiness |
| **Observability & control** | #17951 (terminal title), #16788 (Vim mode in statusline), #32163 (hard-enforced CLAUDE.md rules) | → Steady |
| **Test/quality automation** | #32980, #32979, #33015 — plugin surge in dev tooling | ⬆️ Growing ecosystem |

---

## Developer Pain Points

| Pain Point | Manifestations | Severity |
|------------|---------------|----------|
| **Permission system reliability** | #30519 (meta), #27040 (deny ignored), #29214 (remote override ignored), #24416 (sandbox retry behavior) | 🔴 Critical — 30+ issues, workarounds proliferating |
| **Input/clipboard handling** | #7430 (latency), #29776/#29365 (image paste failures), #22073 (copy/paste formatting) | 🟡 High — daily friction |
| **Silent failures & exits** | #18049, #17888, #33014, #33010 — unexplained code 3 exits, context loss | 🟡 High — trust erosion |
| **Platform parity gaps** | #29941 (Windows CoworkVM), #31246 (Windows Node errors), #8007 (Windows OAuth) | 🟡 High — Windows second-class |
| **Transparency & governance** | #32997 (thinking redaction), staff silence on permission bugs | 🟠 Growing — safety and trust concerns |

---

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-11

---

## 1. Today's Highlights

The Codex team shipped **rust-v0.113.0** with runtime permission requests and expanded plugin marketplace discovery, alongside four rapid alpha builds toward v0.114.0. Meanwhile, community frustration is mounting over **persistent reconnection loops** and **model access restrictions** for paid users, with multiple high-engagement issues demanding clearer communication from OpenAI.

---

## 2. Releases

| Version | Key Changes |
|--------|-------------|
| **[rust-v0.113.0](https://github.com/openai/codex/releases/tag/rust-v0.113.0)** | • Built-in `request_permissions` tool for runtime permission escalation with new TUI approval rendering ([#13092](https://github.com/openai/codex/pull/13092), [#14004](https://github.com/openai/codex/pull/14004))<br>• Curated plugin marketplace discovery and richer `plugin/list` metadata with install-time workflows |
| **rust-v0.114.0-alpha.1–4** | Rapid iteration builds; no detailed changelogs provided |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| **[#2847](https://github.com/openai/codex/issues/2847)** — Exclude sensitive files | 246 upvotes. Critical security gap: no `.codexignore` equivalent for secrets/keys. Users want repo-level + global ignore patterns. | Strong consensus; considered "table stakes" for enterprise adoption |
| **[#12764](https://github.com/openai/codex/issues/12764)** — 401 Unauthorized on Windows | 60 comments. Blocking auth failure affecting CLI users; unclear if token refresh or regional issue. | Frustrated Windows users; workarounds inconsistent |
| **[#13041](https://github.com/openai/codex/issues/13041)** — WebSocket 1008 Policy closure | 46 comments, 92 upvotes. WebSocket upgrades succeed then server-closed, forcing HTTPS fallback and reconnect loops. | Affects Linux/Arch primarily; degrades real-time experience |
| **[#14209](https://github.com/openai/codex/issues/14209)** — Reconnecting issue "worse than last days" | 25 comments. European users report degraded connectivity; pattern suggests infrastructure strain. | Escalating complaints; "unusable" sentiment emerging |
| **[#9634](https://github.com/openai/codex/issues/9634)** — Refresh token already used | 25 comments. Auth token rotation bug forces re-login; disruptive for long-running sessions. | Long-standing; affects Pro users |
| **[#11984](https://github.com/openai/codex/issues/11984)** — UI lag during long sessions | 16 comments. Electron performance degradation; memory leaks suspected. | Quality-of-life blocker for power users |
| **[#12129](https://github.com/openai/codex/issues/12129)** — ENTER should insert newline | 16 comments. UX friction: TUI sends on Enter, requires Ctrl+J for multiline. Community wants inverse behavior. | Polarized but engaged; common IDE pattern request |
| **[#14238](https://github.com/openai/codex/issues/14238)** — gpt-5.3/5.4 restrictions unexplained | 4 comments, high emotional valence. Paid users locked out without communication; "temporary or permanent?" unanswered. | Trust erosion; demands transparency |
| **[#13476](https://github.com/openai/codex/issues/13476)** — Excessive MCP approval prompts | 7 comments. Regression: Playwright MCP triggers repeated approvals, breaking flow. | Workflow disruption for automation users |
| **[#13542](https://github.com/openai/codex/issues/13542)** — Bundled `rg` Access Denied on Windows | 4 comments, 7 upvotes. Sandboxed app can't execute bundled ripgrep; PATH resolution vs. execution permission mismatch. | Windows-specific sandboxing pain point |

---

## 4. Key PR Progress

| PR | Description | Impact |
|----|-------------|--------|
| **[#14263](https://github.com/openai/codex/pull/14263)** — Guardian prompt updates | Clarifies rejection messages; allows explicit user override after risk disclosure | Better transparency in safety interventions |
| **[#14270](https://github.com/openai/codex/pull/14270)** — Realtime start instructions config | Adds `realtime_start_instructions` override for context customization | Flexibility for realtime API users |
| **[#14175](https://github.com/openai/codex/pull/14175)** — Opt-in original image detail | `image_detail_original` flag lets models request unresized images; defaults preserved | Quality vs. cost control for vision tasks |
| **[#13818](https://github.com/openai/codex/pull/13818)** — Improved thread/start tracing | Request trace context persists until final response; better latency visibility | Debugging and performance optimization |
| **[#14259](https://github.com/openai/codex/pull/14259)** — Code mode state persistence | Store/load support across code mode invocations | Stateful multi-turn coding workflows |
| **[#14273](https://github.com/openai/codex/pull/14273)** — Sub-agent metadata in TUI | Shows model + reasoning effort for spawned agents | Transparency in multi-agent orchestration |
| **[#14170](https://github.com/openai/codex/pull/14170)** — Queued slash commands | `/review` and others queue during active turns instead of failing | Smoother TUI interaction patterns |
| **[#14272](https://github.com/openai/codex/pull/14272)** — Code mode output truncation | Per-execution budgets, truncation helpers, cleaner error reporting | Reliability for long-running code execution |
| **[#14254](https://github.com/openai/codex/pull/14254)** — Rename `code_mode` → `exec` | Consistent naming across handlers, docs, and specs | API clarity; breaking change management |
| **[#14177](https://github.com/openai/codex/pull/14177)** — Agent metadata from TOML files | Standalone `agents/**/*.toml` role definitions with precedence rules | Scalable agent configuration management |

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Security & sandboxing controls** | #2847 (sensitive file exclusion), #13476 (approval fatigue) | High — enterprise blocker |
| **Auth/token reliability** | #9634, #12764, #12920 | Persistent — affects trust |
| **UX customization** | #12129 (keybindings), #11984 (performance) | Moderate — quality-of-life |
| **Model access transparency** | #14238, #14190, #14237 | Surging — paid user frustration |
| **Windows parity** | #13542, #13574, #4395, #14094 | Steady — platform-specific gaps |

---

## 6. Developer Pain Points

1. **Connectivity instability** — WebSocket 1008 errors, reconnection loops (#13041, #14209, #14260) degrading productivity, particularly in EU regions.

2. **Opaque model gating** — Sudden removal of `gpt-5.3-codex` and `gpt-5.4` access for Plus/Pro users without communication (#14238, #14190, #10873) creating uncertainty and churn risk.

3. **Authentication fragility** — Token refresh failures (#9634) and 401 errors (#12764) disrupting long sessions; no clear retry or recovery path.

4. **Sandbox overreach** — Excessive approval prompts (#13476) and inability to exclude sensitive files (#2847) creating friction between security and utility.

5. **Windows second-class experience** — Bundled binary permissions (#13542), line-ending handling (#4395), and sandbox failures (#13574) suggest insufficient CI coverage for Windows environments.

---

*Digest compiled from github.com/openai/codex activity through 2026-03-11.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-11

## Today's Highlights

The v0.34.0 nightly release brings critical fixes for terminal environment handling and billing overage strategies, while the v0.33.0-preview series continues rapid iteration with 6 patch releases in 24 hours addressing merge conflict resolution. Community activity surges around ACP protocol compliance, credential management edge cases, and enterprise policy safety—highlighting the project's maturation toward production readiness.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **v0.34.0-nightly.20260310** | Whitelists `TERM` and `COLORTERM` for proper color support in sanitized environments; fixes billing overage strategy lifecycle integration ([#20514](https://github.com/google-gemini/gemini-cli/pull/20514)) |
| **v0.33.0-preview.9–14** | Rapid-fire patch series via automated cherry-pick bot, resolving merge conflicts across preview branches. Notably addresses gaxios v7 stream corruption bug ([#21884](https://github.com/google-gemini/gemini-cli/pull/21884)) |

---

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| [#21783](https://github.com/google-gemini/gemini-cli/issues/21783) ACP missing `tool_call` before `request_permission` | Protocol compliance gap breaks A2A client expectations; blocks clean permission flows | 2 comments, P1 priority |
| [#21768](https://github.com/google-gemini/gemini-cli/issues/21768) `deleteCredentials` throws on missing entry | Causes infinite re-auth loops when credentials already cleared—critical UX failure | 2 comments, P1 priority |
| [#21701](https://github.com/google-gemini/gemini-cli/issues/21701) `stableStringify` lacks unit tests | Security-critical policy code untested; circular reference/edge case risks | 3 comments, need-triage |
| [#21681](https://github.com/google-gemini/gemini-cli/issues/21681) Stale tier numbers in policy docs | Documentation drift confuses enterprise policy configuration | 3 comments, docs area |
| [#21925](https://github.com/google-gemini/gemini-cli/issues/21925) False "action required" hand icon | Visual noise degrades trust in shell script execution feedback | 2 comments, Flutter team engagement |
| [#21461](https://github.com/google-gemini/gemini-cli/issues/21461) Shell aliases unsupported | Breaks developer muscle memory; requires shell startup cost tradeoffs | 2 comments, workstream-rollup |
| [#21956](https://github.com/google-gemini/gemini-cli/issues/21956) OAuth silent refresh failure | Long-running sessions hang indefinitely—production blocker | New, 0 comments |
| [#21889](https://github.com/google-gemini/gemini-cli/issues/21889) Auto-distillation for tool calls | Context window pressure from verbose tool outputs (compiler errors, grep floods) | 0 comments, agent area |
| [#21901](https://github.com/google-gemini/gemini-cli/issues/21901) Subagent tool isolation | Security/manageability gap: main agent and subagents share tool namespace | 1 comment, maintainer rollup |
| [#21421](https://github.com/google-gemini/gemini-cli/issues/21421) Periodic skill recommendation | Proactive skill creation from trajectory reflection—core agent intelligence feature | 1 comment, P2 priority |

---

## Key PR Progress

| PR | Feature/Fix | Status |
|----|-------------|--------|
| [#21951](https://github.com/google-gemini/gemini-cli/pull/21951) ACP: send `tool_call` before `request_permission` | Fixes protocol sequence bug in [#21783](https://github.com/google-gemini/gemini-cli/issues/21783) | Open, P1 |
| [#21949](https://github.com/google-gemini/gemini-cli/pull/21949) Graceful `deleteCredentials` handling | Prevents re-auth loops by catching missing credential errors | Open, P1 |
| [#21950](https://github.com/google-gemini/gemini-cli/pull/21950) Unit tests for `stableStringify` | 28 tests covering security-critical policy serialization | Open |
| [#21947](https://github.com/google-gemini/gemini-cli/pull/21947) Fix A2A 501 response crash | Adds missing `return` preventing double-response crash with GCS task store | Open |
| [#21946](https://github.com/google-gemini/gemini-cli/pull/21946) Fix policy tier documentation | Corrects stale tier numbers (User 2→4, Admin 3→5) | Open |
| [#21945](https://github.com/google-gemini/gemini-cli/pull/21945) Customizable keyboard shortcuts | `keybindings.json` config with Map-based `KeyBindingConfig` refactor | Open |
| [#21807](https://github.com/google-gemini/gemini-cli/pull/21807) Native Windows sandboxing | Restricted Tokens + MIC implementation for secure tool execution | Open |
| [#21932](https://github.com/google-gemini/gemini-cli/pull/21932) Vim mode motion expansion | `X`, `~`, `r`, `f/F/t/T`, `df/dt`, `;`/`,` operators | Open |
| [#21936](https://github.com/google-gemini/gemini-cli/pull/21936) `tracker_delete_task` tool | Safe task deletion with dependency/child checks | **Merged** |
| [#21503](https://github.com/google-gemini/gemini-cli/pull/21503) Topic-Action-Summary verbosity model | `topicUpdateNarration` setting to reduce terminal noise | Open, P1 |

---

## Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Agent self-awareness & introspection** | [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) (accurate CLI flags/hotkeys), [#21421](https://github.com/google-gemini/gemini-cli/issues/21421) (skill recommendation), [#21889](https://github.com/google-gemini/gemini-cli/issues/21889) (auto-distillation) | High—core UX differentiator |
| **Subagent isolation & safety** | [#21901](https://github.com/google-gemini/gemini-cli/issues/21901) (tool isolation), [#21943](https://github.com/google-gemini/gemini-cli/issues/21943) (state disentanglement), [#21939](https://github.com/google-gemini/gemini-cli/issues/21939) (bug tracking rollup) | Critical for multi-agent reliability |
| **Enterprise policy hardening** | [#21596](https://github.com/google-gemini/gemini-cli/issues/21596) (suspicious policy warnings), [#21681](https://github.com/google-gemini/gemini-cli/issues/21681)/[#21946](https://github.com/google-gemini/gemini-cli/pull/21946) (tier doc fixes) | Governance readiness |
| **Performance & latency** | [#21646](https://github.com/google-gemini/gemini-cli/issues/21646) (parallel I/O), [#21528](https://github.com/google-gemini/gemini-cli/issues/21528) (avoid `await`), [#21519](https://github.com/google-gemini/gemini-cli/issues/21519)/[#21518](https://github.com/google-gemini/gemini-cli/issues/21518) (caching) | Startup optimization push |

---

## Developer Pain Points

| Pain Point | Manifestation | Severity |
|------------|-------------|----------|
| **Authentication fragility** | Silent OAuth hangs ([#21956](https://github.com/google-gemini/gemini-cli/issues/21956)), credential deletion crashes ([#21768](https://github.com/google-gemini/gemini-cli/issues/21768)), re-auth loops | **Critical**—blocks long-running workflows |
| **ACP/A2A protocol edge cases** | Missing `tool_call` updates ([#21783](https://github.com/google-gemini/gemini-cli/issues/21783)), 501 response crashes ([#21729](https://github.com/google-gemini/gemini-cli/issues/21729)) | **High**—interoperability risk |
| **Shell environment fidelity** | Aliases unsupported ([#21461](https://github.com/google-gemini/gemini-cli/issues/21461)), false busy indicators ([#21925](https://github.com/google-gemini/gemini-cli/issues/21925)), terminal color detection gaps | **Medium-High**—daily friction |
| **Context window pressure** | Verbose tool outputs unfiltered, need for auto-distillation ([#21889](https://github.com/google-gemini/gemini-cli/issues/21889)) | **Medium**—emerging at scale |
| **Documentation drift** | Stale tier numbers, policy engine docs lagging implementation ([#21681](https://github.com/google-gemini/gemini-cli/issues/21681)) | **Medium**—enterprise adoption blocker |

---

*Digest compiled from google-gemini/gemini-cli public activity. For real-time updates: https://github.com/google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-11

---

## 1. Today's Highlights

GitHub shipped **v1.0.4-0** with significant control improvements: developers can now tune reasoning effort via `--reasoning-effort`, require explicit user confirmation for hook execution with the new `ask` permission, and manage MCP servers through a dedicated `configure-copilot` sub-agent. The release also promises faster shell performance, though details remain sparse. Meanwhile, the community is actively reporting UI/UX friction—particularly terminal scrolling bugs and Windows-specific integration issues—while pushing for cross-device session sync and better model control.

---

## 2. Releases

### [v1.0.4-0](https://github.com/github/copilot-cli/releases/tag/v1.0.4-0)

| Category | Change |
|----------|--------|
| **Added** | `--reasoning-effort` CLI flag for controlling model reasoning depth |
| **Added** | Hooks can request user confirmation before tool execution via `ask` permission decision |
| **Added** | `configure-copilot` sub-agent for MCP server, custom agent, and skill management via task tool |
| **Improved** | Faster shell performance (details TBD) |

---

## 3. Hot Issues

| Issue | Status | Why It Matters | Community Reaction |
|-------|--------|--------------|------------------|
| [#1161: Invalid session id](https://github.com/github/copilot-cli/issues/1161) | **CLOSED** | Critical failure blocking all bash task execution on macOS ARM64 with Claude Opus 4.5; reporter migrated to competitor (OpenCode.ai) | 20 comments, 14 👍 — high severity, user churn |
| [#1595: Cannot access any model](https://github.com/github/copilot-cli/issues/1595) | **OPEN** | Enterprise policy enforcement appears broken—users with valid subscriptions see "access denied by Copilot policy" | 13 comments, 5 👍 — enterprise blocker |
| [#1584: Incessant scrolling during long operations](https://github.com/github/copilot-cli/issues/1584) | **OPEN** | Terminal UI seizure-like behavior during long-running tasks; described as "first phase of robot uprising" | 11 comments, 14 👍 — severe UX regression |
| [#1754: AssertionError + HTTP/2 GOAWAY (503)](https://github.com/github/copilot-cli/issues/1754) | **OPEN** | Deep HTTP connection pool failure during retrospective generation; indicates infrastructure instability | 9 comments, 9 👍 — reliability concern |
| [#1274: Constant 400 errors for invalid request body](https://github.com/github/copilot-cli/issues/1274) | **OPEN** | 95% failure rate on code review prompts; suggests request crafting bugs or server-side validation issues | 8 comments, 3 👍 — workflow disruption |
| [#1775: Scroll position goes crazy in Windows Terminal](https://github.com/github/copilot-cli/issues/1775) | **OPEN** | Related to #1584; auto-scrolling instability in Windows Terminal specifically | 4 comments, 9 👍 — Windows user pain |
| [#1108: Subagent `store_memory` failures](https://github.com/github/copilot-cli/issues/1108) | **OPEN** | Permission/capability mismatch—subagents attempting unavailable tools | 6 comments, 3 👍 — agent architecture issue |
| [#1947: Cloud-synced sessions for cross-device continuity](https://github.com/github/copilot-cli/issues/1947) | **OPEN** | Feature request for session portability across machines—currently tied to `~/.copilot/` | 3 comments, 0 👍 — emerging need |
| [#1824: Default model selection](https://github.com/github/copilot-cli/issues/1824) | **OPEN** | Users forced to override Claude Sonnet default every session; configuration gap | 2 comments, 1 👍 — daily friction |
| [#1963: "Accept plan" sometimes fails to start implementation](https://github.com/github/copilot-cli/issues/1963) | **OPEN** | Plan acceptance UI state bug causing manual intervention and potential premium request waste | 1 comment, 0 👍 — new in v1.0.3 |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#1960: install: use GITHUB_TOKEN for authenticated GitHub requests](https://github.com/github/copilot-cli/pull/1960) | **CLOSED** | Install script now respects `GITHUB_TOKEN` for curl/wget and git `ls-remote`, avoiding rate limits and enabling private repo access |

*Note: Only 1 PR updated in the last 24h. Historical PR activity suggests slower merge velocity recently.*

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Cross-device session portability** | [#1947](https://github.com/github/copilot-cli/issues/1947) | Developers expect cloud-native tool state; local `~/.copilot/` limitation feels archaic |
| **Persistent model preferences** | [#1824](https://github.com/github/copilot-cli/issues/1824) | Default-to-Sonnet behavior creates daily friction; users want profile-level configuration |
| **Image input support** | [#1276](https://github.com/github/copilot-cli/issues/1276) | CLI lagging behind IDE capabilities for multimodal prompts (screenshots, diagrams) |
| **Centralized task registry** | [#1966](https://github.com/github/copilot-cli/issues/1966) | As agent usage scales, users need observability across multiple concurrent tasks |
| **Sleep/hibernation control** | [#1959](https://github.com/github/copilot-cli/issues/1959) | Long-running AI tasks need OS-level power management integration |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Terminal UI instability** | Scrolling seizures (#1584, #1775), garbled Chinese text (#1940), SSH session breakage (#1946) | **High** — multiple reports across platforms |
| **Enterprise policy enforcement bugs** | False "access denied" (#1595), phantom 3rd-party MCP blocks (#1707) | **Medium-High** — blocking paying customers |
| **Agent reliability** | `store_memory` failures (#1108, #1751), plan acceptance bugs (#1963), dead loops (#1939) | **Medium** — eroding trust in autonomous features |
| **Windows integration gaps** | PowerShell failures (#1147), VFPOLEDB/COM issues (#1892), keyboard protocol pollution (#1964) | **Medium** — parity with macOS/Linux experience |
| **Request/response failures** | 400 errors (#1274), 503 GOAWAY (#1754), model unavailability (#40, #1590) | **Medium** — infrastructure resilience concerns |
| **Interaction model friction** | Ctrl+C behavior (#1961), Enter key submission (#1873), elicitation flows | **Low-Medium** — papercuts accumulating |

---

*Digest compiled from github.com/github/copilot-cli activity on 2026-03-11.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-11

## Today's Highlights

Kimi Code CLI **v1.19.0** shipped with two major capabilities: **plan mode** for structured AI-driven planning with approval workflows, and a new **`kimi vis`** session tracing visualization system. The release also fixes a critical WebSocket reconnection storm that could destabilize long-running sessions. Community activity surged with 9 active issues and 11 PRs, highlighting strong demand for mobile/remote workflows and file handling reliability.

---

## Releases

### [v1.19.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.19.0) — 2026-03-10

| Change | Author | Impact |
|--------|--------|--------|
| **Plan mode** — AI plans before coding with approval workflow | @RealKai42 | Major UX enhancement for complex tasks |
| **`kimi vis` visualization system** — FastAPI backend + React frontend for session tracing | @RealKai42 | Debugging and transparency tooling |
| **WebSocket stability fix** — eliminated reconnection storm in session streams | @YoungY620 | Reliability improvement for long sessions |

---

## Hot Issues

| # | Title | Status | Why It Matters | Community Reaction |
|---|-------|--------|--------------|------------------|
| [#1375](https://github.com/MoonshotAI/kimi-cli/issues/1375) | File mentions (@) can't find files | 🔴 OPEN | Core workflow breakage since v1.18.0; blocks file-aware coding | 6 comments, no maintainer response yet — user frustration evident |
| [#1383](https://github.com/MoonshotAI/kimi-cli/issues/1383) | Multi-agent rate limiting despite membership claims | 🔴 OPEN | Subscription value proposition questioned; "two crayfish" metaphor went viral in Chinese community | 2 comments, needs billing clarity |
| [#1389](https://github.com/MoonshotAI/kimi-cli/issues/1389) | HTTP Headers pollution causing connection errors | 🔴 OPEN | Platform compatibility bug (Linux); `platform.version()` newline injection | 1 comment, root cause identified |
| [#1395](https://github.com/MoonshotAI/kimi-cli/issues/1395) | `video_url` invalid part type error | 🔴 OPEN | New in v1.19.0 — video attachment regression | Fresh report, no response |
| [#1390](https://github.com/MoonshotAI/kimi-cli/issues/1390) | Error response with video attachment | 🔴 OPEN | Related video handling failure; different version (v0.4.4) suggests broader issue | No comments yet |
| [#1388](https://github.com/MoonshotAI/kimi-cli/issues/1388) | CentOS 7.9 MCP connection failures | 🔴 OPEN | Enterprise Linux compatibility gap; blocks corporate adoption | No comments, platform-specific |
| [#1381](https://github.com/MoonshotAI/kimi-cli/issues/1381) | Request `/plan` and `/spec` like Trae | 🔴 OPEN | Feature parity request with competitor; **already shipped in v1.19.0** — user unaware | Timing suggests need for better release communication |
| [#1382](https://github.com/MoonshotAI/kimi-cli/issues/1382) | Mobile connector for remote session control | 🟢 CLOSED | High-value use case: manage sessions from phone without computer | Closed without implementation — may resurface |
| [#1353](https://github.com/MoonshotAI/kimi-cli/issues/1353) | DOCX skill for Word documents | 🟢 CLOSED | Document workflow integration; pure Python stdlib approach | Closed, implementation status unclear |

---

## Key PR Progress

| # | Title | Status | Technical Summary |
|---|-------|--------|-----------------|
| [#1392](https://github.com/MoonshotAI/kimi-cli/pull/1392) | Plan mode implementation | 🟢 CLOSED | `EnterPlanMode`/`ExitPlanMode` tools, `/plan` slash command, Shift-Tab toggle, `AttachmentPlanManager` for injection |
| [#1391](https://github.com/MoonshotAI/kimi-cli/pull/1391) | Session tracing visualization (`kimi vis`) | 🟢 CLOSED | FastAPI backend + React frontend; wire event viewer, context viewer, state viewer, aggregate stats |
| [#1386](https://github.com/MoonshotAI/kimi-cli/pull/1386) | WebSocket reconnection storm fix | 🟢 CLOSED | Fixed unstable `useCallback` dependency chains in `useSessionStream`; `slashCommands.length` no longer triggers excessive resets |
| [#1385](https://github.com/MoonshotAI/kimi-cli/pull/1385) | Fix @ file mention index staleness | 🔴 OPEN | Resets index on session switch, refreshes on workspace changes — addresses #1375 |
| [#1384](https://github.com/MoonshotAI/kimi-cli/pull/1384) | Sanitize HTTP header newlines | 🔴 OPEN | Fixes `platform.version()` newline injection causing h11 rejection; closes #1321, #1364, #1368 |
| [#1393](https://github.com/MoonshotAI/kimi-cli/pull/1393) | ACP shell command routing fix | 🔴 OPEN | Routes shell executable through `command` and invocation through `args`; adapts to ACP SDK `terminal_id` shape |
| [#1377](https://github.com/MoonshotAI/kimi-cli/pull/1377) | Vim-style j/k navigation | 🔴 OPEN | Adds `j`/`k` for approval/question flows — power user UX |
| [#1376](https://github.com/MoonshotAI/kimi-cli/pull/1376) | `--sessions` / `--list-sessions` CLI | 🔴 OPEN | Interactive session selection with CJK-aware text shortening |
| [#1345](https://github.com/MoonshotAI/kimi-cli/pull/1345) | OSC 9 terminal notifications | 🔴 OPEN | Native desktop notifications on task completion/approval (iTerm2, Windows Terminal, WezTerm, tmux) |
| [#884](https://github.com/MoonshotAI/kimi-cli/pull/884) | Bump ruff 0.14.14 → 0.15.0 | 🔴 OPEN | Routine linting toolchain update |

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Plan/spec workflow parity** | #1381 (Trae comparison), shipped in v1.19.0 | ✅ **Addressed** — watch for feedback |
| **Mobile/remote session control** | #1382 | High latent demand; closed but unresolved |
| **Document format skills** | #1353 (DOCX), implied PDF/markdown needs | Medium — enterprise workflow gap |
| **Session management UX** | #1376 (CLI listing), visualization in v1.19.0 | Active development |
| **Vim/emacs keybinding parity** | #1377 | Power user segment vocal |

---

## Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **File mention (@) reliability** | High | 🔴 Critical | #1375, #1385 — regression since v1.18.0 |
| **Video/media attachment handling** | High | 🔴 Critical | #1395, #1390 — two separate reports in 24h |
| **HTTP header/platform compatibility** | Medium | 🟡 High | #1389, #1384 — Linux-specific newline issues |
| **MCP/enterprise connectivity** | Medium | 🟡 High | #1388 — CentOS 7.9 corporate environment |
| **Rate limit transparency** | Low | 🟡 Medium | #1383 — subscription expectations vs. reality |
| **Release awareness** | Low | 🟢 Low | #1381 requested shipped feature — comms gap |

---

*Digest compiled from [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) activity 2026-03-10 to 2026-03-11.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-11

---

## Today's Highlights

The community is actively debating Cursor CLI integration following its recent release, with a highly-upvoted feature request gaining significant traction. Meanwhile, critical bugs around the `/undo` command's failure to revert file changes and tmux-related TUI regressions are drawing maintainer attention. Plugin SDK expansion and Windows PowerShell first-class support represent major ecosystem growth areas.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#2072: Support for Cursor?](https://github.com/anomalyco/opencode/issues/2072) | Cursor's new CLI creates competitive pressure; integration could retain users wanting unified tooling | 127 👍, 58 comments—most engaged discussion this cycle; users note API documentation barriers |
| [#6918: qwen3-coder fails to call edit tool](https://github.com/anomalyco/opencode/issues/6918) | Blocks adoption of cost-effective OpenRouter models; tool-calling reliability is core to UX | 35 comments, active debugging; Nix environment adds complexity layer |
| [#16351: TUI broken in tmux after 1.2.17](https://github.com/anomalyco/opencode/issues/16351) | Root cause identified by community—regression affects terminal-native workflows | 19 comments, appreciative for detailed bisect; fix pending |
| [#5474: `/undo` only rolls back conversation, not file changes](https://github.com/anomalyco/opencode/issues/5474) | Fundamental safety expectation violated; undermines trust in AI-assisted editing | Long-running thread, users sharing workarounds via git |
| [#4704: /undo and /timeline undo does not revert file edits (Windows)](https://github.com/anomalyco/opencode/issues/4704) | Platform-specific variant suggesting systemic undo architecture issues | Cross-referenced with #5474; Windows users particularly affected |
| [#16333: Compaction occurs before context limit on GPT 5.4](https://github.com/anomalyco/opencode/issues/16333) | Wastes 1M token context window—direct cost/performance impact for paid users | Reported by prominent community member; needs provider-aware tuning |
| [#16851: ChatGPT not working in 1.2.24](https://github.com/anomalyco/opencode/issues/16851) | Breakage in latest release affecting Codex integration—regression urgency | Same-day report; model name mismatch (`gpt-5.3-codex`) suggests provider drift |
| [#16214: OpenAI streamed server_error with gpt-5.3-codex](https://github.com/anomalyco/opencode/issues/16214) | Reliability concerns for flagship model; retry degradation compounds frustration | Detailed error logs provided; retry logic questioned |
| [#8032: jdtls should support lombok](https://github.com/anomalyco/opencode/issues/8032) | Java enterprise adoption blocker; Lombok ubiquitous in production codebases | 9 👍, steady interest; agent configuration gap |
| [#5651: Publish flatpak for desktop app](https://github.com/anomalyco/opencode/issues/5651) | Linux distribution diversity request; current deb/rpm limits reach | 16 👍, distribution packaging standard |

---

## Key PR Progress

| PR | Contribution | Status |
|----|-----------|--------|
| [#16751: Inject synthetic step-start when tool/text parts interleaved](https://github.com/anomalyco/opencode/pull/16751) | Fixes processor crashes during complex streaming patterns; closes 8 related issues | Open, under review |
| [#15412: Surface agent and parentAgent in plugin hook input](https://github.com/anomalyco/opencode/pull/15412) | Enables plugin context awareness for delegation chains—foundation for sophisticated plugins | Open |
| [#16939: Configurable TUI cursor style, blink, and color](https://github.com/anomalyco/opencode/pull/16939) | Accessibility and personalization improvement; addresses #11305 | Open, needs compliance |
| [#16941: Extend plugin SDK with auth, routing, model selection](https://github.com/anomalyco/opencode/pull/16941) | Major SDK expansion enabling GitLab DAP extraction to standalone plugin | Open |
| [#16750: Skip empty-text filtering for assistant messages](https://github.com/anomalyco/opencode/pull/16750) | Resolves Anthropic API rejections with thinking blocks; closes 8 issues | Open |
| [#16804: Plugin sidebar contributions](https://github.com/anomalyco/opencode/pull/16804) | Web UI extensibility—plugins can now register sidebar items | Open |
| [#15646: Prevent memory leaks from SSE streams, LSP, Bus](https://github.com/anomalyco/opencode/pull/15646) | Critical stability fix for long-running sessions; addresses 6 reported issues | Open |
| [#16069: First-class PowerShell support on Windows](https://github.com/anomalyco/opencode/pull/16069) | Removes Git Bash dependency, native path handling—major Windows UX upgrade | Open, beta |
| [#15434: Auto-reload provider auth on 401 + /reauth command](https://github.com/anomalyco/opencode/pull/15434) | Eliminates restart requirement for credential rotation | Open |
| [#16592: Surface LSP diagnostics on read](https://github.com/anomalyco/opencode/pull/16592) | Closes loop on code quality feedback—agents see errors without explicit tool call | Open |

---

## Feature Request Trends

1. **Model Provider Expansion** — Grok 4.2 (#16277), Groq Compound (#16213), and Cursor CLI (#2072) integration requests show demand for diversification beyond OpenAI/Anthropic

2. **Enterprise Java Support** — Lombok (#8032) and enhanced JDTLS configuration signal production Java workflow needs

3. **Cross-Platform Distribution** — Flatpak (#5651) and improved Windows shell support (#16069) reflect deployment flexibility priorities

4. **Observability & Control** — Timestamps in chat (#8634), project listing (#7545), and JSON schema constraints (#9320) indicate power-user workflow maturation

5. **UI/UX Refinement** — Word wrap toggle (#16781), question tool compactness (#11014), and file references in manual answers (#11026, #16936) polish interactive experiences

---

## Developer Pain Points

| Category | Manifestation | Frequency Indicator |
|----------|-------------|---------------------|
| **Undo/Redo Reliability** | `/undo` inconsistency across platforms (#5474, #4704) | Multiple issues, cross-platform |
| **TUI Stability** | tmux breakage (#16351), syntax highlighting failure (#12301), streaming markdown glitches (#13854) | 3+ active issues |
| **Context Management** | Premature compaction (#16333), session loading failures (#16878), old session inaccessibility | Recent regression cluster |
| **Authentication Fragility** | OAuth expiration (#9111), ChatGPT/Codex model drift (#16851), 401 handling gaps | Closed and open issues |
| **Tool Execution Robustness** | qwen3-coder edit failures (#6918), DeepSeek reasoning content gaps (#8934), long-running command truncation (#11313) | Provider-specific fragility |
| **Configuration Discovery** | Nested project handling (#16686), config boundary control (#12999), root-level config respect (#10544) | Hierarchical workspace complexity |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-03-11

## Today's Highlights

The Qwen Code team is actively stabilizing the v0.12.x release with a flurry of critical bug fixes for Windows users, including spacebar input failures, paste issues, and file editing regressions. Meanwhile, the v0.13.0 milestone is taking shape with major infrastructure work: a comprehensive hook system for session lifecycle events, multi-model arena comparisons, and granular skill filtering controls. The community is particularly vocal about token consumption anomalies and Windows-specific CLI instability.

---

## Releases

*No new releases in the last 24 hours. The team appears focused on stabilizing v0.12.1 (bumped in PR #2226) and preparing v0.13.0 features.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| **[#83](https://github.com/QwenLM/qwen-code/issues/83) — Token consumption abnormally high (CLOSED)** | User reported 800K tokens vs. 60K in Cline for identical tasks—13x overhead. Alibaba Cloud issued voucher refund after investigation. | 17 comments, 8 👍. Confirmed as critical cost bug. Resolution suggests backend fix deployed. |
| **[#1002](https://github.com/QwenLM/qwen-code/issues/1002) — Connection/streaming timeout errors (OPEN)** | Intermittent connection failures with no clear reproduction path. Blocking basic usability for affected users. | 10 comments. Long-running issue (since Nov 2025) indicating elusive root cause. |
| **[#1922](https://github.com/QwenLM/qwen-code/issues/1922) — Edit tool fails in v0.10.5+ (OPEN)** | Core file editing functionality regressed after previous fix. Breaks fundamental workflow. | 7 comments. User frustration evident: "was working perfectly, but has reappeared." |
| **[#2198](https://github.com/QwenLM/qwen-code/issues/2198) — Spacebar input broken in CLI (OPEN)** | Basic text input completely blocked. Multiple duplicate reports (#2186) confirm widespread Windows impact. | 6 comments. Critical severity; workaround requires underscores/quotes. |
| **[#2105](https://github.com/QwenLM/qwen-code/issues/2105) — Error message persistence after model switch (CLOSED)** | UI state bug causing confusion during error recovery. Fixed quickly after report. | 8 comments. Positive signal on responsiveness. |
| **[#2261](https://github.com/QwenLM/qwen-code/issues/2261) — write_file silently fails on Windows x64 (OPEN)** | File operations report success but create no files. Data loss risk for unsuspecting users. | 3 comments, 1 👍. Reproducible, needs immediate attention. |
| **[#2252](https://github.com/QwenLM/qwen-code/issues/2252) — Paste (Ctrl+V/Shift+Insert) broken (OPEN)** | Another fundamental CLI input regression on Windows. | 2 comments. Cluster of input-related bugs suggests terminal library issues. |
| **[#2257](https://github.com/QwenLM/qwen-code/issues/2257) — CRLF + UTF-8 BOM files break Edit tool (OPEN)** | Legacy Windows encoding formats unsupported, blocking enterprise codebases. Related to #2256. | 0 comments but high-impact category. |
| **[#2242](https://github.com/QwenLM/qwen-code/issues/2242) — node-pty crash on Windows after upgrade (OPEN)** | Process crashes mid-operation with resize error. Community-provided workaround available. | 0 comments. Root cause identified in dependency. |
| **[#2249](https://github.com/QwenLM/qwen-code/issues/2249) — Internal error -32603 on tool call sequence (OPEN)** | Backend protocol violation: assistant messages with tool_calls lack required tool responses. | 0 comments. Indicates API contract issues. |

---

## Key PR Progress

| PR | Feature/Fix | Significance |
|----|-------------|------------|
| **[#2203](https://github.com/QwenLM/qwen-code/pull/2203)** — 10 core event hooks for session lifecycle | Foundation for extensibility: session start/end, tool execution, conversation management, notifications, subagent ops. Enables custom automation. |
| **[#1912](https://github.com/QwenLM/qwen-code/pull/1912)** — Agent collaboration arena (multi-model execution) | Competitive AI execution: same task across multiple models in parallel git worktrees. Addresses model selection uncertainty. |
| **[#2220](https://github.com/QwenLM/qwen-code/pull/2220)** — ProviderId-keyed configuration (V4 settings) | Structural refactor enabling explicit provider selection via `--providerId`. Critical for multi-provider workflows. |
| **[#2255](https://github.com/QwenLM/qwen-code/pull/2255)** — Allowed/excluded skills configuration | Governance feature: whitelist/blacklist skills at project/user level. Security, compliance, noise reduction. |
| **[#2061](https://github.com/QwenLM/qwen-code/pull/2061)** — Multi-language insight reports | `/insight` command localized for global user base. LLM-generated content adapts to user language. |
| **[#2221](https://github.com/QwenLM/qwen-code/pull/2221)** — Skip openDiff in YOLO mode | UX fix: prevents unwanted VS Code diff view popups during autonomous editing. |
| **[#2211](https://github.com/QwenLM/qwen-code/pull/2211)** — Block Tab key during AI streaming | Prevents accidental mode switches interrupting responses. Addresses #2210. |
| **[#2202](https://github.com/QwenLM/qwen-code/pull/2202)** — Skills in .agents directory | Interoperability: load skills from `.agent/skills/`, `.cursor/skills/`, etc. Reduces vendor lock-in. |
| **[#2195](https://github.com/QwenLM/qwen-code/pull/2195)** + **[#2188](https://github.com/QwenLM/qwen-code/pull/2188)** — VS Code sidebar chat view | Major IDE integration improvement: sidebar, bottom panel, secondary side bar positioning with drag-and-drop. |
| **[#2205](https://github.com/QwenLM/qwen-code/pull/2205)** — NO_PROXY environment variable support | Corporate environment fix: bypass proxy for internal LLM servers. |

---

## Feature Request Trends

1. **JetBrains IDE Support** — [#2247](https://github.com/QwenLM/qwen-code/issues/2247) highlights strong demand for IntelliJ IDEA plugin parity with VS Code. Users find current ACP (AI Code Companion) insufficient.

2. **MCP Server Resilience** — [#2241](https://github.com/QwenLM/qwen-code/issues/2241) requests CLI command for MCP reconnection, indicating production reliability concerns with Model Context Protocol integrations.

3. **Context-Aware Prompt Suggestions** — [#2240](https://github.com/QwenLM/qwen-code/issues/2240) proposes intelligent question suggestions based on work context, moving toward proactive AI assistance.

4. **Skill System Governance** — Multiple requests for filtering (#2216, #2255, #1782) show enterprise need for controlled AI capabilities: allowed/excluded lists, subagent skill visibility.

5. **Cross-Platform Encoding Robustness** — [#2256](https://github.com/QwenLM/qwen-code/issues/2256), [#2257](https://github.com/QwenLM/qwen-code/issues/2257) reveal underserved Windows enterprise users with legacy encoding requirements (UTF-8 BOM, CRLF).

---

## Developer Pain Points

| Category | Description | Evidence |
|----------|-------------|----------|
| **Windows CLI Instability** | Critical mass of input/output regressions: spacebar, paste, file writes, process crashes, terminal resizing. Suggests `node-pty` integration issues or insufficient Windows testing coverage. | #2198, #2186, #2252, #2261, #2242, #2244, #2250 |
| **Token Economics Opaqueness** | #83's 13x token overhead vs. competitors erodes cost trust. Users cannot predict or control consumption. | #83 (17 comments, escalated to Alibaba Cloud) |
| **Error Observability** | Generic "Internal error" messages (-32603, [object Object]) without actionable diagnostics. | #2251, #2249, #2248 |
| **Configuration Complexity** | Hooks schema mismatch (#2246), OpenAI API configuration failures (#2253), skills detection issues (#1970). | #2246, #2253, #1970 |
| **IDE Extension Quality** | VS Code extension auth failures (#2251), JetBrains absence (#2247). | #2251, #2247 |

---

*Digest compiled from 35 issues and 26 PRs updated 2026-03-10.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*