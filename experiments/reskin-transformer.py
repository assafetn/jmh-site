# -*- coding: utf-8 -*-
"""Reskin JMH dark deck -> relief.app light language. Deterministic transform."""
import re, json

raw = open("JMH Deck.html", encoding="utf-8").read()

# 1) Extract clean pre-rendered template
i = raw.find('<script type="__bundler/template">')
start = raw.find('>', i) + 1
end = raw.find('</script>', start)
html = json.loads(raw[start:end].strip())

# 2) Strip bundler runtime script tag
html = re.sub(r'<script src="ce022f4e[^"]*"></script>', '', html)

# 3) Remove broken @font-face <style> (UUID srcs) -> Google Fonts links
#    The first <style> block holds only @font-face with UUID url()s.
def drop_fontface(m):
    css = m.group(1)
    return '' if ('@font-face' in css and 'url("' in css and ':root' not in css) else m.group(0)
html = re.sub(r'<style>(.*?)</style>', drop_fontface, html, count=1, flags=re.S)

gfonts = ('<link rel="preconnect" href="https://fonts.googleapis.com">\n'
          '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
          '<link href="https://fonts.googleapis.com/css2?'
          'family=Plus+Jakarta+Sans:wght@400;500;600;700;800&'
          'family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">')
html = html.replace('</title>', '</title>\n' + gfonts, 1)

# 4) Color remap — replace each 'oklch(<triple>' prefix, preserving ' / a)' suffixes.
#    Slide chrome (hue 240) flips dark->light; hue-245 phone internals kept.
TRIPLES = [
    # backgrounds / surfaces / borders (dark -> warm light)
    ('0.13 0.020 240', '0.975 0.006 85'),
    ('0.17 0.025 240', '0.995 0.003 85'),
    ('0.21 0.028 240', '0.965 0.007 85'),
    ('0.24 0.030 240', '0.905 0.010 85'),
    ('0.28 0.030 240', '0.885 0.011 85'),
    ('0.30 0.035 240', '0.865 0.012 85'),
    ('0.30 0.025 240', '0.875 0.011 85'),
    ('0.14 0.018 240', '0.930 0.008 85'),   # phone bezel (also overridden)
    ('0.09 0.012 240', '0.300 0.010 260'),  # notch pill
    ('0.16 0.025 240', '0.972 0.007 85'),   # dark wash stop -> subtle warm
    ('0.10 0.018 240', '0.988 0.004 85'),   # dark wash stop -> subtle warm
    ('0.28 0.025 240', '0.885 0.011 85'),   # border
    # neutral text (light-on-dark -> dark-on-light) — tuned for >=4.5:1 on cream
    ('0.96 0.008 240', '0.230 0.020 262'),  # primary ink
    ('0.72 0.015 240', '0.420 0.020 262'),  # secondary
    ('0.50 0.015 240', '0.470 0.018 262'),  # muted
    ('0.34 0.012 240', '0.520 0.015 262'),  # faint (furniture / slide nums)
    ('0.52 0.018 240', '0.470 0.018 262'),
    ('0.40 0.015 240', '0.470 0.018 262'),
    ('0.82 0.020 240', '0.800 0.012 85'),   # light divider
    ('0.98 0.007 240', '0.995 0.003 85'),
    ('0.980 0.007 240', '0.995 0.003 85'),  # phone-screen bg (stay light)
    ('0.96 0.008 245', '0.230 0.020 262'),
    # phone muted (hue 245) -> darker for contrast (safe on light in both contexts)
    ('0.64 0.018 245', '0.480 0.020 260'),
    # accents -> relief palette (extracted from live assets)
    ('0.54 0.14 240', '0.640 0.190 252'),   # blue  #2E96FF
    ('0.65 0.14 280', '0.640 0.190 252'),   # violet -> blue (kill purple)
    ('0.60 0.09 148', '0.680 0.150 162'),   # green #00B573
    ('0.72 0.10 88',  '0.800 0.140 78'),    # gold  #FCAA21
    ('0.60 0.15 22',  '0.660 0.210 32'),    # orange #FF5707
    ('0.62 0.15 65',  '0.740 0.160 62'),    # warning -> gold-orange
]
for old, new in TRIPLES:
    html = html.replace('oklch(' + old, 'oklch(' + new)

# 5) font token -> relief-like display font (phone kept on DM Sans via override)
html = html.replace("--font: 'DM Sans', system-ui, -apple-system, sans-serif;",
                    "--font: 'Plus Jakarta Sans', 'DM Sans', system-ui, sans-serif;")

# 6) Override stylesheet (structure, decoration removal, phone/iwell reskin)
OVERRIDE = """
<style id="relief-reskin">
/* ═══ relief.app reskin overrides ═══ */
:root{ --bg-tint: oklch(0.955 0.010 85); --relief-shadow: 0 2px 8px rgba(28,32,44,.05), 0 22px 50px rgba(28,32,44,.10); }
html,body{ background: var(--bg); }
deck-stage{ display:block; }
deck-stage section{ position:relative; width:1280px; height:720px; margin:0 auto; display:block; }
deck-stage section + section{ margin-top:40px; }
deck-stage section:nth-of-type(even){ background: var(--bg-tint); }
/* closing slide: soft accent-tinted band */
deck-stage section:last-of-type{ background: oklch(0.640 0.190 252 / 0.06); }
/* dark-era decoration off */
.arc-deco, .phone-glow{ display:none !important; }
/* phone -> light device, soft warm shadow, screen content unchanged */
.phone{
  background:#fff !important;
  border:9px solid #ffffff !important;
  box-shadow:0 2px 8px rgba(28,32,44,.05), 0 26px 56px rgba(28,32,44,.16), 0 0 0 1px var(--border) !important;
}
.phone-notch-pill{ background: oklch(0.86 0.010 85) !important; }
.phone-screen{ box-shadow: inset 0 0 0 1px var(--border); }
/* keep dense phone UI on DM Sans for metric safety */
.phone, .phone *{ font-family:'DM Sans','Plus Jakarta Sans',system-ui,sans-serif; }
/* icon wells -> soft round blob backplate, chunkier duotone icons */
.iwell{ border-radius:50% !important; border:none !important; box-shadow: inset 0 0 0 1px rgba(46,150,255,.10); }
.iwell svg{ stroke-width:2 !important; }
/* accent TEXT -> darker ink variants for >=4.5:1 on light (fills use background:, unaffected) */
:root{
  --blue-ink: oklch(0.500 0.150 255);
  --gold-ink: oklch(0.560 0.130 66);
  --sage-ink: oklch(0.500 0.130 162);
  --coral-ink: oklch(0.550 0.200 32);
}
.section-lbl{ color: var(--blue-ink) !important; }
[style*="color:var(--blue)"], [style*="color: var(--blue)"]{ color: var(--blue-ink) !important; }
[style*="color:var(--gold)"], [style*="color: var(--gold)"]{ color: var(--gold-ink) !important; }
[style*="color:var(--sage)"], [style*="color: var(--sage)"]{ color: var(--sage-ink) !important; }
[style*="color:var(--coral)"],[style*="color: var(--coral)"]{ color: var(--coral-ink) !important; }
/* alpha-tolerant (no trailing paren): catches oklch(... / a) text too */
[style*="color:oklch(0.640 0.190 252"]{ color: var(--blue-ink) !important; }
[style*="color:oklch(0.680 0.150 162"]{ color: var(--sage-ink) !important; }
[style*="color:oklch(0.800 0.140 78"]{ color: var(--gold-ink) !important; }
[style*="color:oklch(0.660 0.210 32"]{ color: var(--coral-ink) !important; }
/* pill label text (class-based) -> ink; dots/fills stay bright */
.pill-blue{ color: var(--blue-ink) !important; }
.pill-sage{ color: var(--sage-ink) !important; }
.pill-gold{ color: var(--gold-ink) !important; }
/* SVG <text> in accent colors -> ink (shape fills stay bright: scoped to text only) */
text[style*="fill:oklch(0.640 0.190 252"]{ fill: var(--blue-ink) !important; }
text[style*="fill:oklch(0.680 0.150 162"]{ fill: var(--sage-ink) !important; }
text[style*="fill:oklch(0.800 0.140 78"]{ fill: var(--gold-ink) !important; }
text[style*="fill:oklch(0.660 0.210 32"]{ fill: var(--coral-ink) !important; }
/* JMH-node sublabel sits ON the blue node -> keep it light, not dark ink */
text[style*="fill:oklch(0.640 0.190 252 / 0.75"]{ fill:#ffffff !important; opacity:.9; }
/* metric safety after font swap: tighten tall icon-row stacks */
.icon-rows{ gap:14px !important; }
.irow-sub{ line-height:1.45 !important; }
deck-stage section:nth-of-type(8) [style*="gap:12px"]{ gap:6px !important; }
deck-stage section:nth-of-type(8) [style*="line-height:1.5"]{ line-height:1.38 !important; }
</style>
"""
html = html.replace('</body>', OVERRIDE + '\n</body>')

open("index.html", "w", encoding="utf-8").write(html)
print("wrote index.html:", len(html), "chars")
print("remaining dark oklch(0.1x 240):",
      len(re.findall(r'oklch\(0\.1[0-9]\s+[\d.]+\s+240', html)))
print("relief blue count:", html.count('0.640 0.190 252'))
print("sections:", html.count('data-screen-label'))
print("bundler script remaining:", 'ce022f4e' in html)
