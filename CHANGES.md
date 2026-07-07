# CHANGES.md — JMH Deck relief.app Reskin

**Deliverable:** `index.html` — the same **10-slide, 1280×720 pitch deck** as `JMH Deck.html`,
reskinned into relief.app's light/warm/rounded visual language. Copy, slide order,
`data-screen-label`s, diagrams, and phone-mockup content are **unchanged**.

**Method:** `JMH Deck.html` is a bundler export whose slides live as a pre-rendered
HTML string inside `<script type="__bundler/template">`. That clean static HTML was
extracted, the bundler runtime (`ce022f4e…`) and broken UUID `@font-face` were stripped,
and a deterministic color/type transform was applied (see `scratch_reskin.py`, kept for
reproducibility). `JMH Deck.html` itself was **not touched** (remains source of truth).
The prior website attempt was backed up to `experiments/index.website-v1.backup.html`.

---

## 1 · relief.app research (what was actually extracted)

relief.app's CSS is a compiled Webflow stylesheet whose URL/hash could not be resolved
via WebFetch (markdown conversion strips `<link>`s). **Accent colors and illustration
style were extracted directly from relief's live SVG assets** (logo + feature graphics):

| Source asset | Colors found (verbatim) |
|---|---|
| `main logo.svg` | `#2E96FF` (primary blue), `#13426F` (deep navy) |
| `moneybounce_visual.svg` | `#2E96FF`, `#97CCFF`, `#E32314`, `#FCAA21`, `#FF5707`, `#FFC800`, `#D29F08`, white |
| `calculator_Visual.svg` | `#00B573`, `#009763` (greens), `#D29F08`, `#FFC800`, white |

**Illustration style (observed):** filled / duotone with soft linear gradients + inner-shadow
depth, rounded organic shapes (corner radii ~3–10px), chunky strokes (~2–2.7px) — **not**
thin-line icons. Cool blues + warm yellows/oranges + greens on white/near-white. Big
rounded cards, pill CTAs, generous whitespace, single accent doing the interactive work.

**Extracted relief palette → deck role mapping:**

| Deck role | Relief target (hex) | Used as (oklch) |
|---|---|---|
| Primary / action (`--blue`) | `#2E96FF` | `oklch(0.640 0.190 252)` |
| Verified / success (`--sage`) | `#00B573` | `oklch(0.680 0.150 162)` |
| Proactive / warning (`--gold`) | `#FCAA21` | `oklch(0.800 0.140 78)` |
| Problem / pain (`--coral`) | `#FF5707` | `oklch(0.660 0.210 32)` |

Darker **ink variants** derived for small accent *text* on light (fills keep the bright hue):
`--blue-ink oklch(0.50 0.15 255)`, `--sage-ink oklch(0.50 0.13 162)`,
`--gold-ink oklch(0.56 0.13 66)`, `--coral-ink oklch(0.55 0.20 32)`.

---

## 2 · Canvas / text tokens  ⚠️ FALLBACK — verify

relief's exact background/ink/border values were not extractable, so these use the
documented relief identity (warm cream, deep ink) and should be **verified** against the
live site if pixel-fidelity matters:

| Token | Old (dark deck) | New (relief light) | Note |
|---|---|---|---|
| `--bg` | `oklch(0.13 0.020 240)` | `oklch(0.975 0.006 85)` warm cream | ⚠️ fallback |
| `--bg-tint` (new) | — | `oklch(0.955 0.010 85)` | alternating band |
| `--surface` | `oklch(0.17 0.025 240)` | `oklch(0.995 0.003 85)` ~white | ⚠️ fallback |
| `--border` | `oklch(0.24 0.030 240)` | `oklch(0.905 0.010 85)` | ⚠️ fallback |
| `--text-primary` | `oklch(0.96 0.008 240)` | `oklch(0.23 0.020 262)` deep ink | ⚠️ fallback |
| `--text-secondary` | `oklch(0.72 0.015 240)` | `oklch(0.42 0.020 262)` | |
| `--text-muted` | `oklch(0.50 0.015 240)` | `oklch(0.47 0.018 262)` | darkened for ≥4.5:1 |
| `--text-faint` | `oklch(0.34 0.012 240)` | `oklch(0.52 0.015 262)` | slide numbers |

Full dark→light neutral map is in `scratch_reskin.py` (`TRIPLES`). The transform replaces
each `oklch(L C H` triple prefix, preserving `/ alpha)` suffixes, so tinted fills follow
their base color automatically.

**Key insight that made this safe:** slide chrome uses hue **240**; the (already-light)
in-phone UI uses hue **245**. Dark hue-240 values were flipped to light; hue-245 phone
internals were left intact so the app screens stay unchanged.

---

## 3 · Substitutions & flagged decisions

- **⚠️ FONT — substitution, verify.** relief's heading/body font (compiled Webflow, not
  extractable) was replaced with **Plus Jakarta Sans** (Google Fonts) for slide type — a
  warmer, rounder friendly-grotesk in relief's family. Dense in-phone UI is kept on **DM
  Sans** for metric safety. Swap the `--font` token if you prefer a different match.
- **⚠️ SLIDE 09 — hidden architecture diagram.** The source deck's slide 9 contains a
  progressive-reveal layer (`display:none`) with the full INPUT→ENGINE→OUTPUT Trust Stack
  architecture (Tier 1/2 sources, Hybrid RAG). It was toggled by the deck's JS runtime
  (removed for a static file). The static default state shows the **3 summary cards**
  (3 tiers / Source transparency / Honest uncertainty), which is faithful to the deck's
  default frame. **If you want the architecture diagram shown**, say so — it needs
  positioning so it doesn't overlap the cards. Left as default to avoid an unrequested
  content/layout change.
- **White-on-blue in-phone UI (~3.3:1).** Chat bubbles, phone CTA buttons, "Learn more",
  and numbered circle chips are white on relief's bright blue — realistic product-app
  contrast (matches relief's own app screens). Treated as illustrative device UI, not
  slide reading text.

---

## 4 · What changed (reskin layers)

| Layer | Change |
|---|---|
| Canvas | Dark navy → warm cream; slides alternate `--bg` / `--bg-tint`; closing slide (10) gets a soft blue-tinted band |
| Text | Light-on-dark → deep ink on light; all non-white slide text verified **≥4.5:1** (≥3:1 for large) |
| Accents | Deck's blue/sage/gold/coral → relief's extracted `#2E96FF / #00B573 / #FCAA21 / #FF5707`; the deck's violet-blue (hue 280) folded into relief blue (no purple) |
| Typography | DM Sans → Plus Jakarta Sans (slides); DM Sans retained in phone UI |
| Icons | Square icon "wells" (11px radius) → soft **round blob** backplates (50%), chunkier strokes |
| Decoration | Concentric arcs, blue glow, dark radial washes **removed**; soft warm shadows added |
| Phone frames | Dark bezel + blue glow → **light white bezel + soft warm drop-shadow**; screen content unchanged; hero half-phone still bleeds off the slide edge |
| Buttons/pills | Kept pill shape; colored pill *text* darkened to ink variants; bright fills retained |

## 5 · Preserved (hard constraints met)

- ✅ 10 slides, same order, same `data-screen-label`s, 1280×720 each
- ✅ All V2 copy verbatim (no rewrites)
- ✅ IA of every visual: slide-02 chaos→JMH diagram, slide-03 3-card compare, slide-04 2×2 grid, all phone mockups
- ✅ Slide furniture: logo top-left, section label, slide number bottom-right
- ✅ Standalone HTML, no frameworks, Google Fonts only
- ✅ No slide added/removed; `JMH Deck.html` untouched

## 6 · QA results

- **Overflow:** all 10 slides fit within 1280×720 (0 elements past bounds). Slide 08 needed
  a scoped 6px reclaim after the font swap (tighter row gap / line-height on that slide only).
- **Contrast:** every non-white slide text element ≥4.5:1 (≥3:1 large-text), canvas-sampled.
- **Screenshots reviewed:** slides 01, 02, 03, 04, 07, 09, 10 — all read natively light,
  warm, rounded (not dark-mode-inverted).

## 7 · Note on the docs

`CLAUDE.md` and `design-system.md` were updated in the prior session to describe `index.html`
as the *website*. `index.html` is now the *reskinned deck*. Those docs are therefore stale
re: what `index.html` is — reconcile when the website-vs-deck direction is settled.
