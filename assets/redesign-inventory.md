# JMH Website V2 — Asset Inventory & Replacement Plan
**Source audited:** `JMH Website.html` (bundler export; page HTML extracted from its
`__bundler/template` block). 9 sections, each 100vh, deck-style navigation.
**Audit date:** 2026-07-06. Full token/section detail in the audit notes below the table.

## Current state, in one paragraph
The site already uses OKLCH tokens (`--jmh-blue oklch(0.54 0.14 240)` primary, sage/gold/coral
semantic colors, DM Sans + JetBrains Mono), HTML-coded iPhone mockups (280–288px, notch, bottom
nav) in sections 01/05/06/07/08, two large hand-coded SVG diagrams (02 chaos→JMH flow, 03
three-card market shift), thin-line stroke icons throughout, decorative concentric-circle SVGs
in every section, and a conservative reveal system (`data-reveal` staggers + `jmh-pulse` +
`data-tilt` phone perspective). There are **no illustrations and no characters** — that is the
core gap the Qvery treatment fills.

## Inventory table

| # | Section | Headline (locked copy) | Current visual assets | Replacement plan |
|---|---|---|---|---|
| 01 | Hero (`top`) | "Your move, without the chaos." | Radial glow bg, grid overlay, concentric circles, 3 line-icon chips, HTML iPhone (onboarding Q "How's your German?", BAMF badge), tilt transform | **+ Mover character** (mid-stride, suitcase, path ahead) beside phone; rebuild phone UI with V4 tokens; onboarding question auto-advances on ~4s loop; keep glow, drop tilt for flat premium look |
| 02 | Problem | "The cost of guessing your way through bureaucracy." | 560×500 SVG: 6 source cards → "You?" node → JMH node → 3 outcome cards, dashed converging lines; Stanford HAI 69% citation | **+ Overwhelmed Mover illustration** (drowning in tabs/PDFs/bubbles); redraw diagram in new icon language, rounded connectors, **node-by-node scroll draw-in** (chaos scatters in, JMH path resolves); 69% stat counts up |
| 03 | Market | "Expats, students, families — all navigating alone." | 3-card comparison (Employer Package / Lump Sum Era / JMH), "300M+" pill badge | **+ 3 mover archetypes illustration** (assignee, student, family); rebuild shift as horizontal scroll-driven era sequence; 300M+ stat card counts up, UN DESA citation added (stock "living abroad" framing) |
| 04 | Product | "Not a chatbot. A relocation OS." | 4 numbered list items + 2×2 card grid, thin-line icons | **+ Mover-on-path illustration** (4 milestone markers); pillar cards get new duotone icons; pinned intro feel for the 05–08 run |
| 05 | Living Profile | "Knows your situation. Always." | HTML iPhone (profile: Alex Johnson, 3 stat boxes, 5 profile rows), 3 feature boxes | **+ spot illustration** (profile-as-living-document); phone rebuilt with V4 tokens; micro-interaction: a profile row updates on scroll-into-view; features as icon rows |
| 06 | The Plan | "Your plan. No one else's." | HTML iPhone (task list, 27% progress, categories, locked/pulsing states), 3 feature boxes | **+ spot illustration** (plan-as-unfolding-map); phone rebuilt; micro-interaction: **a task ticks complete** + progress bar advances on view |
| 07 | Trust Chat | "Not just accurate. Accurate for you." | HTML iPhone (2-exchange chat, GOV·Berlin.de / §19 BMG citation badges), 3 feature boxes | **+ spot illustration** (chat-with-citation-seal); phone rebuilt; micro-interaction: **cited answer types in** on view |
| 08 | Proactive Engine | "JMH watches your timeline. So you don't have to." | HTML iPhone (gold alert card "Rental scam protection", €1,500–5,000 risk box, Berlin Senat citation), 3 feature boxes | **+ spot illustration** (radar/lighthouse); phone rebuilt; micro-interaction: **alert card slides in** on view |
| 09 | Closer | "Your move. Finally handled." | Radial glow, 4 pillar pills, footer tagline "JMH 2.0 — launching in Berlin. Expanding everywhere." | **+ arrived-Mover illustration** (keys, Berlin skyline silhouette, relaxed); pills restyled in V4; final beat kept verbatim |
| all | Global | — | Deck navigation (translateY slides, counter, prev/next), 100vh sections, `data-reveal`, duplicate `:root` blocks | Convert to **natural scroll page** with sticky section-aware nav + IntersectionObserver reveals; single consolidated `:root`; `prefers-reduced-motion` → instant fades |

## Citations in play (all trace to blueprint)
Stanford HAI 2024 (69% error rate) · BAMF.de · Berlin.de · Berlin Senat · §19 BMG ·
UN DESA (300M+ living abroad — to be added in 03) · $22B market (blueprint §2, available if needed).

## Structural notes for the rebuild
- Phone mockups are already live HTML — they get **restyled, not recreated from screenshots**.
- Both diagrams are already hand-coded SVG — they get **redrawn** (new icon vocabulary, rounded
  connectors) and instrumented for per-node animation.
- The current site is a click-through deck (100vh slides). V2 becomes a scroll experience —
  this is the biggest structural change and the main "could break" risk.
- Duplicate `<style>`/`:root` blocks in the bundler export are collapsed to one.
