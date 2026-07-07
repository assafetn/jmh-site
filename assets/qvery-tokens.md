# Qvery.ai — Extracted Design Tokens
**Source:** live fetch of https://qvery.ai/ raw HTML (Framer export, inline CSS) + 19 illustration SVGs
downloaded from `framerusercontent.com/images/*.svg`. Extracted 2026-07-06. All values verbatim
from source unless marked *derived*.

---

## 1. Palette (verbatim hex, ranked by frequency in the illustration SVGs)

| Hex | Role on qvery.ai | Frequency |
|---|---|---|
| `#000000` | Illustration "outlines" — drawn as **filled black paths**, not strokes | dominant (139 fills) |
| `#FFFFFF` | Bodies, faces, cards, surfaces inside illustrations | 50 |
| `#0AD0BC` | **Hero accent** — teal/mint. Brand color, CTAs, illustration highlights. Used at opacities 0.2 / 0.5 / 0.7 for tint layers | 42 |
| `#FF3131` | Secondary accent — red. Alert pops, small emphasis moments; often at opacity 0.2–0.4 inside illustrations | 20 |
| `#DBE2EA` | Cool blue-gray — illustration shading / passive shapes | 20 |
| `#C6D1DB` | Deeper blue-gray shading step | 3 |
| `#A3A9F5` | Periwinkle — rare tint accent (opacity 0.3–0.5) | 3 |
| `#002F60` | Deep navy — rare dark detail | 1 |

### Page / UI colors (from inline Framer CSS variables)
| Hex / value | Role |
|---|---|
| `#F6F8FF` | Page background — very light cool off-white (blue-tinted, NOT warm cream) |
| `#011C25` | Dark section background / deep ink (teal-black) |
| `#080808` | Near-black text |
| `#798283` | Muted gray text |
| `#E6E6E6` | Border / hairline |
| `#7E6F4A` | Rare warm olive token (minor) |
| `#FFFFFF14` / `#FFFFFF0D` / `#FFFFFF80` | White-alpha overlays on dark sections |

**Palette structure:** one light cool canvas + one deep-ink dark band + ONE hero accent (teal)
+ one hot secondary (red) + 2 quiet blue-gray shading tones + 1 rare periwinkle tint.
Vibrant colors live almost exclusively **inside illustrations** and tiny UI moments.

## 2. Typography

| Property | Value |
|---|---|
| Display font | **Fustat** — used at weight **900** (45 occurrences — the signature look: massive, ultra-black headlines) |
| Body font | **Lato** (400/300), fallback Georgia serif in places |
| Mono accent | **Fragment Mono** — small technical/labels moments |
| Display sizes | 72 / 56 / 55 / 44 / 40 / 35 px |
| Body sizes | 18 / 16 / 15 / 14 px; micro-labels 11 px |
| Letter-spacing | headlines `-0.01em` (tight); labels `+0.05–0.1em` (spread uppercase) |
| Weight contrast | 900 display vs 300–400 body — extreme contrast is the scale signature |

## 3. Radius / Shadow / Surface

| Token | Value |
|---|---|
| Card radius | **20px** (most common), 12–16px for small elements |
| Pills / CTAs | `border-radius: 99px` (full pill buttons) |
| Micro radius | 2px (tiny chips) |
| Card shadow | `0 1px 20px rgba(0,0,0,0.15)` — single soft wide shadow, no layering stacks |
| Alt shadow | `0 4px 20px #0000001A` |
| Whitespace | very generous; sections breathe; content column narrow relative to viewport |

## 4. Icon style
Rounded, chunky, friendly. Same construction as the illustrations: filled shapes with bold
black filled-path outlines, occasional duotone (teal fill + black detail). Not thin-line.

## 5. Character style guide (written from SVG source analysis)

Qvery's characters are flat-vector figures built from **filled paths, never stroked lines**:
the bold black "outline" look is achieved by drawing black shapes behind/around white and
colored fills. Faces are simple and rounded — dot-and-curve features, minimal detail; hands
are simplified mitten-like shapes; proportions are slightly stylized (larger heads, relaxed
gestural poses) but professional, not cartoon-childish. Color is layered flat with **no
gradients and no soft shading** — depth comes from 2 steps of cool blue-gray (`#DBE2EA`,
`#C6D1DB`) plus the accent colors dropped in at reduced opacity (teal at 0.2/0.5/0.7, red at
0.2/0.4) as tint panels behind or inside the figure. Backgrounds inside illustrations are big
rounded-corner blocks of accent-at-20%-opacity, giving each scene a soft colored "stage."
Overall effect: playful but composed — editorial SaaS art, one illustrator's hand throughout.

## 6. What JMH adopts vs. keeps (translation rules for Phase 1)

| Dimension | Qvery | JMH V4 decision |
|---|---|---|
| Hero accent | Teal `#0AD0BC` | **JMH blue stays** (brand anchor, ~oklch 0.54–0.64 / 240–252) — blue plays the teal's role |
| Canvas | Cool `#F6F8FF` | Adopt the *lightness*, keep JMH's warm-leaning near-white |
| Dark band | `#011C25` | Adopt structure — JMH dark band stays oklch(0.13 0.020 240) family |
| Secondary accents | Red / periwinkle | Map to JMH roles: sage=verified, gold=alert, coral=problem — illustration-only + tiny UI moments |
| Display type | Fustat 900 | **DM Sans stays**, push to 700 at oversized clamp sizes, tight tracking — adopt the *scale contrast*, not the font |
| Radius | 20px cards, 99px pills | Adopt: 20px cards, pill CTAs |
| Shadow | 0 1px 20px rgba(0,0,0,.15) | Adopt (soften alpha slightly for warm canvas) |
| Illustration construction | Filled-path black outlines, flat fills, opacity tint layers | Adopt wholesale — this is the "Qvery treatment" |
| Playfulness | In illustrations only | Same rule: copy/layout tone stays "German lawyer who genuinely likes you" |
