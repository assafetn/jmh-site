# CHANGES-MOTION.md — JMH "Scroll Choreography Pass"

**Deliverable:** motion-only overhaul of `JMH_Website_V2.html` (edited in place). Copy, structure,
layout, colors, illustrations, and phone mockups are unchanged. Every step is a separate git
commit off the `pre-motion-overhaul checkpoint` (`89d2542`) so any stage can be rolled back.

## Dependency added
- **GSAP 3.12.5** — `gsap.min.js` + `ScrollTrigger.min.js` + `CustomEase.min.js`, pinned via
  cdnjs (loaded at end of `<body>`, non-render-blocking). ~55 KB gzipped total. All three load
  200 on every reload. If the CDN fails or `prefers-reduced-motion` is set, `gsapOn` is false and
  the page silently falls back to the original CSS `[data-reveal]` + `.in` reveal system — nothing
  can be left invisible.

## Motion audit finding (Phase 0)
The suspected reveal-killing bug (`[data-reveal]{transform:none…}` leaking outside the
reduced-motion media query) was **not present** — the rule was correctly wrapped. The flatness was
under-tuned subtlety (24px travel, flat 70ms stagger, nothing scrubbed), which this pass replaces.

## Global system (Phase 1)
- Motion tokens in `:root`: `--ease-hero` (0.22,1,0.36,1), `--ease-smooth`, `--dur-entrance/scene`.
  Mirrored as CustomEase curves so all timelines share one "physics."
- Entrance choreography: per-section timeline — kicker → headline (44px rise + blur-to-sharp) →
  supporting elements (38px, 110ms stagger) → icons (0.88→1 back-ease pop). Plays once per load.
- Scroll progress bar (2.5px brand-blue, scrubbed to document progress).
- Nav: solidifies with shadow after 80px; active-link **sliding underline** replaces the jump pill.

## Per-section motion

| # | Section | Motion added |
|---|---|---|
| 01 | Hero | Load "wake-up" timeline: kicker → **word-by-word** headline rise → points → phone slides up 96px with −2.4° rotation settle → Mover soft drop (float loop suspended during intro, restored after). Depth parallax (stage +84px vs phone counter-drift on a separate channel). Scrubbed exit fade to scale 0.97. |
| 02 | Problem | **Showcase scrub #1** — diagram pins ~1.5 viewports: 6 sources scatter in → dashed connectors grow toward YOU (animated endpoints, dashes intact) → YOU pops → arrow draws → JMH pops → outcomes cascade → labels. Fully reversible. No pin <769px (staggered fallback). |
| 03 | Market | **Showcase scrub #2** — eras pin ~2 viewports (>920px only, where the grid is 3-across): Employer Package lands + checklist cascades → "The shift" arrow draws (dashoffset) → Lump Sum lands as Employer recedes (0.5 opacity, scale 0.93) → "JMH fills" draws → JMH lands strongest (back-ease) + **border-glow** flare-and-settle, as Lump Sum recedes. Stat card gets a scale-settle as the 300M+ counter fires. |
| 04 | Product | Head entrance; path illustration slow parallax (`yPercent −6`); four pillar cards rise with **alternating ∓1.2° tilt settle** + **icon stroke-draw** (dashoffset) with fills fading in. Transforms cleared after so `:hover` still works. |
| 05–08 | Pillars | **Directional entrance** — copy slides from its outer edge, phone from the opposite (flip-aware); feature **icons pop 80ms before their text**; spot illustrations **parallax at their own depth**; phone micro-interactions retimed to ~60% visibility (thresholds 0.55–0.6) and now **deepen the phone shadow** as each plays (profile update, task tick→36%, chat answer, alert drop-in). |
| 09 | Closer | **"The exhale"** — arrived-Mover rises slowly (1.1s, calmer than the rest) → headline → four chips **spring-cascade** → tagline fades **last** after a beat. |

## Section transitions (Phase 3)
- **Kicker handoff**: each section's kicker drifts up 40px + dims to 0.2 ahead of its content as
  the section exits the top — a "chapter turn" rhythm (hero/closer excluded, they own their exits).
- **Closer landing tint-shift** (approved flourish): a scrubbed wash deepens the closer's
  background from warm near-white toward a soft blue "landing" tone as it fills the viewport.
  Content stays above it (z-index) and fully legible.
- **Background morph (05–08) — deliberately skipped.** The `on-bg` (oklch 0.980) and `on-surface`
  (#fff) tones differ by ~2% lightness — a body-background crossfade between them is imperceptible,
  and `on-surface` sections already carry 1px borders that mark every boundary. Standalone dividers
  would duplicate those borders. Skipped rather than add invisible machinery; a higher-contrast
  boundary treatment can be designed if wanted.

## Phase 4 (Higgsfield ambient video) — not started
Parked pending an explicit go-ahead (my lean: static + parallax reads more premium with this flat
illustration style than looping video would).

## Phase 5 — verification results
- **Reduced-motion fallback:** forced the exact no-GSAP state (cleared GSAP inline styles, removed
  `gsap-on`, applied `.in`) → **118 animated elements scanned, 0 left invisible**; hero screenshot
  confirms full content. Micro-interactions run instant (`reduced?0:delay`); closer wash stays off.
- **Both pinned scrubs forward AND backward:** Problem diagram (progress 1 → all visible, 0 → all
  hidden) and Market eras (forward: era1 receded 0.5 / JMH 1; backward: all 0) — reversible.
- **Eras pin releases cleanly** into the market points / Product (verified, no jump/gap).
- **Mobile 375px:** 0 pins active (both showcases fall back), no horizontal overflow, diagram +
  eras reveal via staggered entrance.
- **60fps during scrub:** frame sampling over 90 frames of a driven scroll through the diagram pin
  → avg/median/p95 = 16.7 ms, **0 frames > 20 ms** (~60 fps, no jank).
- **Network:** all 3 GSAP scripts + all 9 WebP + fonts load 200; no failed requests. Zero console
  errors across the whole pass.
- **Lighthouse ≥90:** the preview tooling exposes no Lighthouse runner, so the literal score
  wasn't captured here — run DevTools → Lighthouse to confirm. Contributing factors are healthy:
  images already 182 KB WebP (lazy, hero eager), GSAP ~55 KB gzip non-render-blocking, transform/
  opacity-only animations, 60fps verified.

## Commits
`89d2542` checkpoint · `3d6081b` global · `66ba283` hero · `8a96463` problem · `44c8d0c` market ·
`4950b9b` product · `1b8c1b6` pillars · `0673bfe` closer · `7371469` phase-3 transitions.
