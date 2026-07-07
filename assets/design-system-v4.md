# JMH Design System V4 — "Qvery Treatment"
**For:** `JMH_Website_V2.html` | **Derived from:** `assets/qvery-tokens.md` (extracted 2026-07-06)
+ existing JMH V3 tokens (audited from `JMH Website.html`) | **Owner:** Assaf

**Translation thesis:** Qvery's *structure* (one light canvas, one hero accent, vibrant color
confined to illustrations, ultra-contrasty type scale, 20px cards, pill CTAs, filled-path
illustration language) mapped onto JMH's *identity* (trustworthy blue, warm-leaning near-white,
DM Sans, sage/gold/coral role colors, "German lawyer who genuinely likes you" tone).

---

## 1. The `:root` block (canonical — paste into V2 verbatim)

```css
:root {
  /* ── CANVAS ──────────────────────────────────────────── */
  --bg:            oklch(0.980 0.007 240);  /* near-white canvas (kept from V3)   */
  --bg-tint:       oklch(0.962 0.011 240);  /* alternating section band           */
  --surface:       #ffffff;                 /* cards                              */
  --border:        oklch(0.910 0.012 240);
  --border-strong: oklch(0.820 0.020 240);
  --dark:          oklch(0.145 0.022 240);  /* dark inversion band (Problem)      */

  /* ── INK ─────────────────────────────────────────────── */
  --ink:           oklch(0.20 0.035 245);   /* primary text                       */
  --ink-2:         oklch(0.44 0.025 245);   /* secondary                          */
  --ink-muted:     oklch(0.62 0.018 245);   /* tertiary / captions                */
  --ink-on-dark:   oklch(0.96 0.006 240);
  --ink-on-blue:   oklch(0.98 0.004 240);

  /* ── BRAND / ACTION (Qvery's teal role → JMH blue) ───── */
  --blue:          oklch(0.54 0.14 240);    /* brand anchor, CTAs, links, active  */
  --blue-deep:     oklch(0.42 0.13 245);    /* hover / pressed                    */
  --blue-bright:   oklch(0.64 0.17 248);    /* ILLUSTRATION accent — the vivid
                                               "hero color" inside art & diagrams */
  --blue-20:       oklch(0.54 0.14 240 / 0.20);  /* illustration stage blocks     */
  --blue-10:       oklch(0.93 0.028 240);   /* soft fills, selected states        */
  --blue-05:       oklch(0.97 0.013 240);   /* faintest wash                      */

  /* ── ROLE COLORS (Qvery's secondary accents → JMH roles;
        illustrations + small UI moments ONLY, never decoration) */
  --sage:          oklch(0.60 0.09 148);    /* verified / trust                   */
  --sage-bg:       oklch(0.96 0.020 148);
  --gold:          oklch(0.72 0.10 88);     /* alert / proactive                  */
  --gold-bg:       oklch(0.97 0.020 88);
  --coral:         oklch(0.60 0.15 22);     /* problem / pain                     */
  --coral-bg:      oklch(0.97 0.022 22);

  /* ── ILLUSTRATION SHADING (Qvery #DBE2EA / #C6D1DB mapped) */
  --shade-1:       oklch(0.905 0.014 245);  /* passive shapes, light shading      */
  --shade-2:       oklch(0.845 0.018 245);  /* deeper shading step                */
  --outline:       oklch(0.185 0.020 250);  /* illustration "black" — filled paths */

  /* ── TYPE ────────────────────────────────────────────── */
  --font:          'DM Sans', system-ui, -apple-system, sans-serif;
  --font-mono:     'JetBrains Mono', ui-monospace, monospace;   /* citations, micro-labels */

  /* Display scale — Qvery's contrast, DM Sans's voice */
  --display:       clamp(46px, 6.5vw, 84px);  /* w700, ls -0.025em, lh 1.02       */
  --h2:            clamp(34px, 4.5vw, 56px);  /* w700, ls -0.02em,  lh 1.08       */
  --h3:            clamp(22px, 2.4vw, 28px);  /* w600, ls -0.01em                 */
  --body-lg:       19px;                      /* w400/300, lh 1.6 — section leads */
  --body:          17px;                      /* w400, lh 1.65                    */
  --caption:       13px;                      /* w400, lh 1.5                     */
  --label:         11px;                      /* w600, UPPERCASE, ls 0.12em       */

  /* ── SURFACE GEOMETRY (Qvery verbatim) ───────────────── */
  --r-card:        20px;     /* cards, illustration stages, phone screens-in-card */
  --r-md:          14px;     /* inner cards, chat bubbles                         */
  --r-sm:          8px;      /* chips, small boxes                                */
  --r-pill:        999px;    /* ALL CTAs & badges — pill everything interactive   */

  /* ── SHADOW (Qvery recipe, softened for warm canvas) ─── */
  --shadow-card:   0 1px 20px oklch(0.20 0.035 245 / 0.10);
  --shadow-lift:   0 4px 28px oklch(0.20 0.035 245 / 0.13);
  --shadow-phone:  0 24px 64px oklch(0.54 0.14 240 / 0.14), 0 8px 20px oklch(0.20 0.035 245 / 0.08);

  /* ── MOTION ──────────────────────────────────────────── */
  --ease-out:      cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring:   cubic-bezier(0.34, 1.4, 0.44, 1);   /* micro-interactions      */
  --dur-fast:      140ms;
  --dur-base:      240ms;
  --dur-reveal:    620ms;    /* section entries: opacity + 24px translateY        */
  --stagger:       70ms;     /* per-sibling reveal delay                          */
}
```

## 2. Typography rules

| Style | Spec | Use |
|---|---|---|
| Display | `--display` DM Sans 700, `-0.025em`, lh 1.02 | Hero + Closer headlines only |
| H2 | `--h2` 700, `-0.02em`, lh 1.08 | Section headlines (max 1 per section) |
| H3 | `--h3` 600 | Card / pillar titles |
| Lead | `--body-lg` 300–400 | One supporting line under each H2 |
| Body | `--body` 400, lh 1.65 | Max 2–3 sentences per visual element |
| Label | `--label` 600 uppercase | Section kickers, badge text |
| Mono | `--font-mono` 12px | Citations ("GOV · BAMF.de"), stat sources |

The Qvery move adopted: **massive display vs. calm body** — headline weight/size contrast does
the drama so illustrations can do the charm. No new fonts. No weight 900 (DM Sans caps at 700).

## 3. Color usage law

1. **Blue is the only interactive color.** CTAs, links, active nav, selected states, primary
   diagram flow. `--blue-bright` exists ONLY inside illustrations/diagrams for vibrancy.
2. **Role colors never decorate.** Sage = verified/cited moments. Gold = proactive alerts.
   Coral = problem/pain. Each appears where its meaning applies, nowhere else.
3. **Illustration stages:** every generated illustration sits on (or contains) a rounded
   `--r-card` block of accent-at-20% (`--blue-20` default; coral-20 in Problem, sage-20 in
   Trust Chat, gold-20 in Proactive) — Qvery's "colored stage" pattern.
4. **Dark band:** section 02 (Problem) may invert to `--dark` for contrast drama. White-alpha
   overlays (8–12%) for cards on dark, per Qvery.
5. Bans unchanged: no purple UI, no gradient text, no glassmorphism, no gradient backgrounds
   (hero/closer radial glow + dark-band wash remain the only exceptions), no `rounded-full` cards.

## 4. Icon system (replaces V3 thin-line icons)

- 24px grid, inline SVG, **2px rounded strokes** (`stroke-linecap/linejoin: round`) — thicker
  and friendlier than V3's thin lines.
- **Duotone option:** a `--blue-10` (or role-color `-bg`) filled shape behind/inside the stroke.
- Icon color follows role: blue default, sage/gold/coral only in their semantic homes.
- One vocabulary across nav chips, feature rows, diagram nodes, and in-phone UI.

## 5. Illustration language (the locked style)

Master style string (prepended to every Higgsfield prompt — see Phase 2):

> "Flat vector illustration in the style of modern SaaS editorial art: friendly characters
> with simple rounded faces and mitten-like hands, bold consistent dark charcoal outlines
> drawn as filled shapes (not thin strokes), flat color fills — vivid medium blue #4A90D9,
> soft blue-gray shading #DFE5EC and #C9D2DC, warm off-white background #FAFBFC, small
> accents of sage green #7BA88A, warm gold #D9B36A and coral #D97757 used sparingly —
> minimal shading, no gradients, generous negative space, rounded soft-cornered composition,
> playful but professional and composed."

(Hex values are sRGB approximations of the OKLCH tokens for the image model's benefit.)

Rules:
- **One cast:** "the Mover" recurs (hero → overwhelmed → guided → arrived). Variants: solo
  professional, student, family. Same construction in every scene.
- Emotion arc lives in the illustrations; copy stays sober.
- Illustrations **support**, phone mockups are the evidence — art never dominates a pillar section.
- Delivered as PNG 2x on transparent or `--bg` solid, stored in `assets/illustrations/`,
  lazy-loaded. Never hotlinked.

## 6. Surfaces & components

- **Cards:** `--surface`, 1px `--border`, `--r-card`, `--shadow-card`; hover = `--shadow-lift`
  + `translateY(-2px)` (`--dur-base`, `--ease-out`).
- **CTAs:** pill (`--r-pill`), blue fill, white text, hover `--blue-deep` + lift 1px. Secondary:
  1.5px blue border, transparent fill.
- **Stat cards:** count-up number (H2 size, blue), 4-word label, mono citation line.
- **Phone mockups:** HTML device shell — 292px wide, `--r-card`+12px outer radius, `--dark`
  bezel, `--shadow-phone`; in-phone UI styled with these same tokens (the product must look
  as premium as the site). No perspective tilt in V4 — flat, confident presentation.
- **Diagrams:** hand-coded SVG; nodes use card geometry (rounded rects, `--r-md`), connectors
  are 2px rounded paths, staged draw-in per node.

## 7. Motion system

- **Section entries:** IntersectionObserver adds `.in`; children reveal opacity 0→1 +
  translateY(24px→0), `--dur-reveal` `--ease-out`, `--stagger` per sibling. Headline first.
- **Hero life:** character float loop (±6px translateY, 6s ease-in-out infinite); phone
  onboarding step advances every 4s (crossfade).
- **Diagrams:** per-node draw-in tied to scroll progress (02, 03 showcase moments).
- **Counters:** count up on first view (300M+, 69%, 27%…), ~1.2s, ease-out, once.
- **Micro-interactions on view:** 06 task ticks complete + progress bar advances · 07 cited
  answer types in · 08 alert card slides in · 05 profile row updates.
- **Nav:** sticky, section-aware highlight, smooth-scroll anchors. (Sticky-header blur is the
  one allowed blur.)
- **Floor:** transform/opacity only; 60fps; lazy-load images;
  `@media (prefers-reduced-motion: reduce)` → all reveals become instant 200ms opacity fades,
  loops and scroll-scrubs disabled.
