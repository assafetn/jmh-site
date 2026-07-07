# JMH Design System
# Version: 3.0 | Owner: Assaf
# Standalone reference. Read fully before any UI work.

> **v3.0 — brand reset.** The public site is now a single vanilla `index.html`
> (no framework, no Tailwind) using the deck's **light theme: DM Sans + blue**.
> This replaces the v2.0 Gloock/Literata + verdigris system. Tokens below are the
> source of truth and match `index.html`'s `:root`.

---

## Tone

**Unhurried. Authoritative. Warm.** Like a German lawyer who genuinely likes you.
Not startup-cheerful. Not banking-formal.

---

## Fonts

| Role | Family | Notes |
|------|--------|-------|
| All type | **DM Sans** (Google Fonts) | Weights 300–700. Hierarchy via size **and** weight. |

- Headings → DM Sans, `font-weight: 700`, tight tracking (`ls -0.02em`, H1 `-0.03em`)
- Body → DM Sans, `font-weight: 400`, `line-height: 1.65`
- Labels / eyebrows → DM Sans, `font-weight: 600`, 11px, uppercase, `ls 0.12em`

### Google Fonts import
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

---

## Color Palette (OKLCH)

Light-brand, carried from the deck. Neutrals tinted toward hue **240–245** (cool-warm).

### Surfaces & Text
| Token | Value | Role |
|-------|-------|------|
| `--bg` | `oklch(0.980 0.007 240)` | Near-white canvas |
| `--bg-tint` | `oklch(0.965 0.010 240)` | Alternating section band |
| `--surface` | `#ffffff` | Card surface |
| `--border` | `oklch(0.91 0.012 240)` | Standard border |
| `--ink` | `oklch(0.20 0.035 245)` | Primary text |
| `--ink-2` | `oklch(0.42 0.025 245)` | Secondary text |
| `--ink-muted` | `oklch(0.64 0.018 245)` | Tertiary / hints |

### Brand & Role Colors
| Token | Value | Role |
|-------|-------|------|
| `--blue` | `oklch(0.54 0.14 240)` | **Primary brand / action** |
| `--blue-strong` | `oklch(0.48 0.15 245)` | Hover state |
| `--blue-fill` | `oklch(0.54 0.14 240 / 0.08)` | Tinted fill (pills, chips, CTA band) |
| `--blue-ring` | `oklch(0.54 0.14 240 / 0.22)` | Focus ring / soft shadow |
| `--sage` | `oklch(0.60 0.09 148)` | Trust / verified |
| `--gold` | `oklch(0.72 0.10 88)` | Alerts / proactive |
| `--coral` | `oklch(0.60 0.15 22)` | Problem / pain |

### Dark Inversion Band (Problem section only)
| Token | Value | Role |
|-------|-------|------|
| `--dark` | `oklch(0.13 0.020 240)` | Dark band background |
| `--dark-2` | `oklch(0.18 0.022 240)` | Node / surface on dark |
| `--dark-ink` | `oklch(0.96 0.010 240)` | Text on dark |
| `--dark-muted` | `oklch(0.68 0.020 240)` | Secondary text on dark |
| `--dark-border` | `oklch(0.30 0.020 240)` | Border on dark |

**Blue does the interactive work. Sage / gold / coral are role colors** — verified /
alert / problem — used sparingly to signal meaning, never decoratively.

---

## `:root` Token Block

Vanilla CSS — no Tailwind. Paste into `index.html`'s inline `<style>`:

```css
:root{
  /* Canvas */
  --bg:        oklch(0.980 0.007 240);
  --bg-tint:   oklch(0.965 0.010 240);
  --surface:   #ffffff;
  --border:    oklch(0.91 0.012 240);
  /* Text */
  --ink:       oklch(0.20 0.035 245);
  --ink-2:     oklch(0.42 0.025 245);
  --ink-muted: oklch(0.64 0.018 245);
  /* Brand */
  --blue:      oklch(0.54 0.14 240);
  --blue-strong: oklch(0.48 0.15 245);
  --blue-fill: oklch(0.54 0.14 240 / 0.08);
  --blue-ring: oklch(0.54 0.14 240 / 0.22);
  --sage:      oklch(0.60 0.09 148);
  --gold:      oklch(0.72 0.10 88);
  --coral:     oklch(0.60 0.15 22);
  /* Dark band */
  --dark:      oklch(0.13 0.020 240);

  --font: 'DM Sans', system-ui, sans-serif;
  --radius-card: 20px;
  --radius-sm: 12px;
  --radius-pill: 999px;
}

body{
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font);
  font-size: 17px;
  line-height: 1.65;
}

h1,h2,h3,h4{ font-weight: 700; letter-spacing: -0.02em; }
```

---

## Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `--radius-sm` | 12px | Inputs, small chips, task rows, phone list items |
| `--radius-card` | 20px | Cards, panels, feature surfaces |
| `--radius-pill` | 999px | Pill buttons, badges, chips |

Phone frames use ~34–42px; the CTA band uses ~32px. Cards feel calm and rounded,
but **never `rounded-full` on a card**.

---

## Design Bans (Enforced — Never Violate)

- ❌ No purple
- ❌ No gradient text (`background-clip: text`) — absolute ban
- ❌ No emoji as structural icons — use custom inline SVG (line style)
- ❌ No glassmorphism / decorative `backdrop-blur` — the sticky-header blur is the one allowed use
- ❌ No `rounded-full` on cards or non-pill elements
- ❌ No gradient backgrounds — Hero radial glow + dark-band wash are the only exceptions
- ❌ No stock imagery — every visual is custom SVG/CSS from the deck's component vocabulary

> Note: a **thin left-accent stripe** (2–3px) is permitted on the Proactive Engine
> notification cards as a role-color signal (gold/blue/coral). This is intentional
> and scoped to that component.

---

## Spacing Rhythm

Use a 4/8px grid: **4, 8, 12, 16, 24, 32, 48, 64, 96**.

- Section vertical spacing (`.band`): `clamp(72px, 11vw, 150px)` desktop, ~64px mobile.
- Card internal padding: 24–34px.
- Inline element gap: 8–16px.
- Generous whitespace between sections is a core brand signal — don't crowd.

---

## Typography Scale

| Level | Size | Family | Weight | Tracking |
|-------|------|--------|--------|----------|
| h1 / Hero display | `clamp(44px, 6vw, 72px)` | DM Sans | 700 | -0.03em |
| h2 / Section title | `clamp(32px, 4vw, 48px)` | DM Sans | 700 | -0.02em |
| h3 / Card title | 20–24px | DM Sans | 700 | -0.02em |
| Body large / lead | `clamp(17px, 1.4vw, 19px)` | DM Sans | 400 | — |
| Body | 17–18px | DM Sans | 400 | — |
| Body small | 13–15px | DM Sans | 400/500 | — |
| Label / eyebrow | 11px uppercase | DM Sans | 600 | 0.12em |
| Caption / citation | 12px | DM Sans | 500 | — |

Line-height: 1.6–1.65 for body, ~1.1 for display.

---

## Accessibility Floor

- Text contrast: ≥4.5:1 (body), ≥3:1 (large text 18px+)
- Touch targets: min 44×44px
- Focus rings: visible, 3px, `--blue-ring`, `outline-offset: 3px`
- All meaningful images/SVGs have alt text or `role="img"` + `aria-label`
- Color is never the only signal — pair with icon or text
- Respect `prefers-reduced-motion` (scroll-reveals, float, marquee all disable)

---

*Last updated: 2026-07 | v3.0 brand reset — DM Sans + blue, vanilla single-file build*
