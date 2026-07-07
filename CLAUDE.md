# CLAUDE.md — JMH Site
# Version: 1.0 | Read this completely at the start of every session.

---

## 1. What This Project Is

The JMH public site. One page. Explains what JMH is, why it matters, how it works.

It is NOT the product app (`jmh-frontend`).
It is NOT the data backend (`jmh-berlin`).

**Audience:** anyone who wants to understand JMH — investors, recruits, partners, the curious.
The site does not segment. The story is the same for all.

**Owner:** Assaf | **Local path:** `C:\Projects\JMH SlideDeck` | **Stack:** Vite + React + Tailwind

---

## 2. Who You Are Working With

Assaf is a Senior Product Manager, not a developer. He vibe codes — he directs,
reviews, approves. Claude Code executes.

Rules:
- Explain in plain English before doing anything.
- Propose before executing. Wait for "go ahead."
- One section at a time. Build it, show it, get feedback, then move on.
- Read `/assets/blueprint.md` and `/assets/design-system.md` before any UI work.

---

## 3. The Golden Rule: Plan Before You Touch

NEVER write a section, restructure layout, or change routing without first:
1. A plain-English summary of what you're about to do
2. What will change, what could break
3. Wait for "go ahead"

Safe without approval: reading files, drafting in `/experiments/`, explaining code.

---

## 4. Skills Orchestration (Three Skills, Three Passes)

For every section, follow this three-pass build pattern:

**Pass 1 — Layout & UX (ui-ux-pro-max)**
Use the `ui-ux-pro-max` skill to propose section layout, hierarchy, spacing,
accessibility floor. Output: plain-English plan, no code.

**Pass 2 — Visual Design (impeccable)**
Use the `impeccable` skill to design the visual treatment. Reads `.impeccable.md`
for project context. Output: component design + tokens applied.

**Pass 3 — Implementation (frontend-design)**
Use the `frontend-design` skill to write production React. Tailwind, responsive,
clean code. Output: actual JSX files.

**Pass 4 — Review (ui-ux-pro-max again)**
Use `ui-ux-pro-max` pre-delivery checklist. Verify contrast, touch targets,
spacing rhythm, focus states. Output: pass/fail per item.

Never skip a pass. Never combine passes. One section, four passes, then move on.

---

## 5. The Narrative Spine (Do Not Reorder)

The site is ONE page, FIVE sections, in this exact order:

1. **Hero** — one-line thesis, sets tone
2. **The Problem** — relocation is broken (info chaos, untrustworthy AI, isolation, compliance traps)
3. **The Market Shift** — Lump Sum era, Prosumer Mobility Gap, why now
4. **The Product** — Relocation OS, four pillars (Living Profile, The Plan, Trust Chat, Proactive Engine)
5. **The Moat** — Trust Stack architecture + Vertical AI positioning

**Section labels in UI should not say "The Problem" / "The Market" literally.**
Use evocative language. Working drafts:
- "Ten tabs, no answer."
- "The lump-sum era."
- "A system, not a search bar."
- "Trust, by design."

Treat these as starting points. Iterate with Assaf.

---

## 6. Visual Principles (Non-Negotiable)

- **Visuals first, text second.** Assaf prefers infographics. Default to charts,
  diagrams, stat cards. Only prose when no visual works.
- **Numbers are referenced, not hammered.** Mention market size, hallucination
  rates, etc. — but don't lead with them. The site is not a pitch deck.
- **Every claim has a source.** Citations live next to stats, quietly.
- **No walls of text.** Max 2-3 sentences per visual element.
- **Generous whitespace.** Warm near-white background, lots of breathing room.
- **One blue accent does the interactive work.** Sage/gold/coral are role colors
  (verified / alert / problem) — used sparingly, not decoratively.
- **Be creative with section names and copy.** Don't quote the blueprint
  verbatim — extract meaning, write fresh.

## COPY RULES (Hard Limits — enforced on every section)

- Hero: max 8 words for the thesis line. Max 1 supporting sentence. Nothing else.
- Every other section: max 2 sentences of prose per visual element.
- Stat cards: number + 4-word label + one-line citation. That's it.
- Section titles: max 5 words, evocative (not descriptive).
- No bullet-point lists on the page. If content wants to be a list, make it a visual.
- If you are about to write a paragraph, stop. Make it a diagram instead.
---

## 7. Design System

Full tokens are in `/assets/design-system.md`. Quick reference:

### Tone
**Unhurried. Authoritative. Warm.** Like a German lawyer who genuinely likes you.
Not startup-cheerful. Not banking-formal.

### Fonts
- All type → **DM Sans** (Google Fonts, weights 300-700). Hierarchy via size + weight.
  - H1 clamp(44px, 6vw, 72px) w700 ls-0.03em · H2 clamp(32px, 4vw, 48px) w700
  - body 17–18px lh1.65 · labels 11px uppercase ls0.12em w600

### Color (OKLCH — light-brand, from the deck)
- `--bg: oklch(0.980 0.007 240)` — near-white, cool-warm canvas
- `--bg-tint: oklch(0.965 0.010 240)` — alternating section band
- `--surface: #ffffff` — card
- `--border: oklch(0.91 0.012 240)`
- `--ink: oklch(0.20 0.035 245)` — primary text
- `--ink-2: oklch(0.42 0.025 245)` — secondary
- `--ink-muted: oklch(0.64 0.018 245)` — tertiary
- `--blue: oklch(0.54 0.14 240)` — **primary brand / action**
- `--sage: oklch(0.60 0.09 148)` — trust / verified
- `--gold: oklch(0.72 0.10 88)` — alerts / proactive
- `--coral: oklch(0.60 0.15 22)` — problem / pain
- Dark inversion band (Problem section): `--dark: oklch(0.13 0.020 240)`

### Bans (enforced — never violate)
- No purple
- No gradient text (`background-clip: text`)
- No emoji as structural icons (use custom SVG)
- No glassmorphism, no decorative `backdrop-blur` (sticky-header blur is the one allowed use)
- No `rounded-full` on cards
- No gradient backgrounds (Hero radial glow + dark-band wash are the only exceptions)
- No stock imagery — every visual is custom SVG/CSS from the deck's component vocabulary

---

## 8. Tech Stack

The public site is a **single, self-contained `index.html`** — vanilla HTML/CSS/JS,
no framework, no build step. (The earlier Vite + React scaffold in `/src` is set
aside, not deleted; the React entry `index.html` is backed up in `/experiments`.)

- **Markup/styling:** one `index.html`, inline `<style>` with `:root` OKLCH tokens. No Tailwind.
- **Icons:** inline custom SVG (line style). No icon library.
- **Animations:** vanilla JS IntersectionObserver scroll-reveals + CSS keyframes only. Respect `prefers-reduced-motion`.
- **Fonts:** Google Fonts DM Sans only.
- **Hosting:** Vercel (static).
- **Language:** JavaScript (vanilla).

---

## 9. Folder Structure

```
JMH SlideDeck/
├── CLAUDE.md                  ← This file
├── .impeccable.md             ← Design system reference for impeccable skill
├── assets/
│   ├── blueprint.md           ← Project_Blueprint_JMH_2_0.md (source of truth)
│   ├── design-system.md       ← Full design tokens
│   ├── infographic.pdf        ← Style reference
│   └── product-screenshots/   ← App mockups for Section 4
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css              ← Tailwind + @theme tokens
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Problem.jsx
│   │   ├── MarketShift.jsx
│   │   ├── Product.jsx
│   │   └── Moat.jsx
│   └── components/            ← StatCard, SectionShell, Citation, ArchDiagram, etc.
└── experiments/
```

---

## 10. Build Order

| Phase | What | Done when |
|-------|------|-----------|
| 0 | Vite + React + Tailwind setup + OKLCH tokens + Gloock/Literata | Cream bg renders, fonts load |
| 1 | Shared primitives (SectionShell, StatCard, Citation, DeviceFrame) | Reusable, themed |
| 2 | Hero | Renders on load, thesis clear in 5s |
| 3 | The Problem | Visual metaphor + 3-4 quiet stat references |
| 4 | The Market Shift | Two-column narrative + before/after diagram |
| 5 | The Product (4 pillars) | Mockups in device frames |
| 6 | **The Moat (architecture diagram)** ← hero visual | Trust Stack diagram + Vertical AI positioning |
| 7 | Polish: scroll reveals, responsive, a11y | Lighthouse > 95 |

---

## 11. Copy Source of Truth

ALL factual content derives from `/assets/blueprint.md`. Do not invent stats or features.
But — be creative with language. The blueprint is source material, not a script.
Extract the meaning, write it fresh.

If a claim or feature is unclear, ask Assaf. Don't fill gaps with generic SaaS language.

---

## 12. How to Start Every Session

1. Confirm you've read this CLAUDE.md fully.
2. State the current phase (0-7).
3. Ask: "Which section are we working on today, Assaf?"
4. Do not start until the goal is confirmed.

---

*Last updated: 2026-05 | Owner: Assaf | v1.0*
