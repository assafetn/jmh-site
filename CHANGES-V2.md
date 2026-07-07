# CHANGES-V2.md — JMH Website "Qvery Treatment" Redesign

**Deliverable:** `JMH_Website_V2.html` — a full illustration-driven scroll redesign of the
9-section JMH marketing site. Source of truth `JMH Website.html` is untouched; `index.html`
(the separate relief.app deck reskin) is untouched.

**Method:** reskin + visual upgrade, not a rebuild. The 9-section narrative and copy are locked;
the visual layer (palette, illustrations, phone mockups, diagrams, motion) is rebuilt on the
Qvery-derived V4 design system (`assets/design-system-v4.md`, tokens extracted in
`assets/qvery-tokens.md`).

---

## 1 · What changed structurally

| Area | V1 (`JMH Website.html`) | V2 (`JMH_Website_V2.html`) |
|---|---|---|
| Navigation model | Click-through 100vh slide deck | **Natural-scroll page** (approved) with sticky, section-aware blur nav + smooth-scroll anchors |
| Design tokens | Two duplicate `:root` blocks | Single consolidated `:root` (V4) |
| Illustrations | None | **9 custom illustrations** (Higgsfield, one locked style, recurring "Mover" character) |
| Phone mockups | Static-styled, perspective-tilted | Rebuilt live HTML with iOS chrome (status bar + dynamic island), flat premium presentation, per-pillar micro-interactions |
| Diagrams | Hand-coded SVG, static | Redrawn in new language, **node-by-node scroll-in** |
| Motion | `data-reveal` + tilt only | Full system: staggered reveals, count-ups, diagram draw-in, era sequence, 4 pillar micro-interactions, reduced-motion fallback |
| Images | — | WebP, 2× display-sized, lazy-loaded (7.2 MB PNG → **182 KB WebP**) |

## 2 · Illustrations (in `assets/illustrations/`, WebP; originals in `_originals/`)
`mover-hero` · `mover-overwhelmed` · `mover-archetypes` · `mover-product-path` · `mover-arrived`
· `spot-living-profile` · `spot-plan-map` · `spot-trust-chat` · `spot-proactive-lighthouse`.
Character consistency held via a locked reference image + style string (design-system-v4 §5).

## 3 · Copy changes (explicit — all else is verbatim from V1)

Page prose (headlines, leads, feature text, stat claims, citations) is **unchanged**. The
following are the only deviations, all flagged during the build:

1. **§01 Hero — in-phone onboarding loop:** added two questions to power the 4-second loop —
   "Who's moving with you?" (Just me / With my partner / Partner + kids / With a pet) and
   "When do you land?" (Within 3 months / 3–6 months / 6–12 months / Just exploring), plus
   their helper lines. Derived from the blueprint's Dynamic KYC concept (family, timelines, pets).
2. **§03 Market — stat card:** the V1 pill "300M+ relocators · students, families, professionals"
   became a stat card: number **300M+**, label **"living abroad today"**, citation **UN DESA ·
   International Migrant Stock**. "Relocators" dropped (implied flow; the 300M figure is stock).
3. **§04 Product:** removed the redundant left-column numbered pillar list (01–04). The pillar
   names still appear in the four cards and are previewed by the milestone-path illustration.
4. **§05 Living Profile — in-phone labels:** added screen title "Profile" and an "Auto-synced"
   chip. Micro-interaction shows a transient "Partner" before settling on the locked value
   "Partner + 1 child".
5. **§06 The Plan — micro-interaction end state:** the task-ticks-complete animation ends the
   in-phone counter at "4 of 11 · 36%" (V1 static: "3 of 11 · 27%"). This is the mandated
   Phase-4 interaction changing displayed numbers, not a copy edit to page prose.

§02, §07, §08, §09 have **no copy changes** (their micro-interactions are purely visual:
diagram scatter-in, chat typing indicator, alert drop-in, arrival illustration).

## 4 · Motion system
Section reveals (IntersectionObserver, headline-first stagger) · hero character float + 4s
onboarding loop · §02 diagram node-by-node scatter/resolve · §03 three-era left-to-right
sequence · count-ups (300M+, 69%, 0.2%) · §05 profile row self-updates · §06 task self-ticks +
progress bar advances · §07 answer types in after a live typing indicator · §08 alert card drops
in like a push notification · sticky section-aware nav. `prefers-reduced-motion` swaps all of it
for instant fades and disables loops/pulses.

## 5 · Phase 5 verification (headless — preview tab was not focusable for screenshots)
- **Structure/a11y:** 1×h1, 8×h2, 9 sections, `lang="en"`, descriptive `<title>`, all imgs have
  alt (4 decorative spots correctly empty-alt), 6 aria-labels, hero eager + 8 lazy.
- **Contrast (WCAG):** primary 17.1:1, secondary 7.8:1, muted 7.3:1, dark-band caption 8.0:1,
  nav 7.8:1 (all AAA); blue kicker 4.63:1 and citation chip 4.53:1 (AA). All pairs pass.
- **Responsive:** no horizontal overflow at 320 / 375 / 768 / 1000 / 1280px. Grids collapse
  correctly (pillars 4→2→1, pillar deep-dives 2→1, market eras 3→1, spot illustrations restack
  above phones). Diagram uses an intentional horizontal-scroll container on narrow screens.
- **Animation end-states:** all reveal/diagram/era/alert targets resolve to opacity 1; all four
  pillar micro-interactions verified in both trigger directions; counters wired (incl. decimals).
- **Performance:** images optimized 7.2 MB → 182 KB WebP (2× display size, lazy-loaded, only the
  ~22 KB hero eager). Zero console errors. No failed page requests (HEAD "ABORTED" entries in the
  network log are verification probes, not page loads).
- **Not run here:** an actual Lighthouse score (no Lighthouse runner is available through the
  preview tooling) and the 9 section screenshots (require the preview panel to be the focused
  view). Image weight — the dominant Lighthouse perf lever — has been addressed.
