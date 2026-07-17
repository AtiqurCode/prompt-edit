# Design System Master — Prompt Edit

> Locked for this rebuild. Skill output suggested purple/cinema-red — **rejected**.
> Brand identity from PromptEdit logo + product world (editors, timelines, marketplaces).

**Project:** Prompt Edit sales page  
**Pattern:** Interactive Product Demo + Features  
**Style:** Creative Ops Deck (dark-first, high contrast, product-demo driven)  
**Anti-patterns:** purple SaaS, cream+serif, broadsheet, soft generic cards, emoji icons

---

## Design review (2026-07-17)

### Keep
- **Fonts:** Space Grotesk (display) + Archivo (body) — matches skill “Minimalist Portfolio” pairing; distinctive without Lexend Mega / Inter defaults
- **Brand colors:** navy `#000d22`, green CTA `#27ae60`, signal blue `#43aef6` — real PromptEdit identity, no purple
- **Rhythm:** dark / paper alternation with product-demo sections

### Fixed
- **CTA contrast:** white-on-green failed WCAG (~2.9:1) → **ink text on green** (~6.8:1)
- **Blue-deep:** `#0072ef` on paper failed small-text AA (~4.2:1) → `#0056c4` (~6.2:1)
- **Muted dark text:** bumped readable labels from `/35–/45` → `/50–/55` (4.5:1+)
- **Panel ink-soft:** slightly deeper `#121a27` for clearer separation from void

### Contrast rules
- Primary CTA: always `bg-brand-cta` + `text-brand-ink` (never white on green)
- Body/muted on dark: minimum ~`text-white/50`
- Eyebrows on paper: `text-brand-blue-deep` or `text-brand-slate`

---

## Color (brand-locked)

| Role | Hex | Token |
|------|-----|-------|
| Ink / void | `#000d22` | `--color-brand-ink` |
| Panel | `#121a27` | `--color-brand-ink-soft` |
| CTA | `#27ae60` | `--color-brand-cta` |
| CTA hover | `#2ecc71` | `--color-brand-cta-hover` |
| CTA label | `#000d22` | on CTA fill |
| Signal | `#43aef6` | `--color-brand-blue` |
| Signal deep | `#0056c4` | `--color-brand-blue-deep` |
| Slate | `#334155` | `--color-brand-slate` |
| Paper | `#f4f7fb` | `--color-brand-surface` |
| Amber mark | `#ffca3a` | `--color-brand-yellow` |
| Hot | `#ff5a5f` | `--color-brand-coral` |

No purple. No invented violet gradients.

## Typography

- **Display:** Space Grotesk (tight, technical, creative-tool energy)
- **Body:** Archivo (clean, readable, professional)
- Headlines: tight tracking, large clamp sizes
- Labels: uppercase, wide tracking, small
- Body size: ≥16px on mobile for long copy

## Signature

**The Signal Strip** — scroll progress, section markers, studio channel language. Product demos are first-class.

## Motion rules

- 1–2 key motions per viewport max
- Micro: 150–300ms ease-out
- Reveals: transform + opacity only
- Respect `prefers-reduced-motion`

## Components language

- Radius 8–16px (not mushy 24px everywhere)
- Borders as structure
- Interactive = cursor-pointer + hover + focus ring
- Lucide-style SVG icons only
- Green fills carry **dark ink text**
