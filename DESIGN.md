# Design System — Yosri Hamrouni Portfolio

Direction: **dark-first "Stitch" look** — an obsidian canvas, electric cyan accent, glass cards with a cyan hover
glow, a floating pill nav and a bento project grid. The tokens live in `src/index.css`; components use
the semantic utilities only (`bg-paper`, `text-ink`, `border-line`, `text-accent`, `card`, `card-hover`, `glow-btn`…).
The Swiss direction is no longer used. The content follows the master brief (see `PORTFOLIO_PROGRESS.md`).

## Color
Tokens are CSS variables (`:root` = dark, `:root.light` = light), exposed to Tailwind with `@theme inline`.

| Token | Dark (default) | Light | Use |
|---|---|---|---|
| `paper` | `#051424` | `#f8fafc` | Canvas |
| `surface` | `#0b0f17` | `#ffffff` | Raised bands |
| `muted` | `#0e1d2e` | `#eef2f7` | Chips, placeholders |
| `ink` | `#d4e4fa` (14.4:1) | `#0f172a` (17.1:1) | Headings, primary text |
| `ink-muted` | `#bbc9cf` (10.9:1) | `#475569` (7.2:1) | Body copy |
| `ink-subtle` | `#859399` (5.9:1) | `#5b6b7f` (5.2:1) | Metadata |
| `line` / `line-strong` | `#1e2f40` / `#3c494e` | `#e2e8f0` / `#cbd5e1` | Borders |
| `accent` | `#22d3ee` (10.3:1) | `#0e7490` (5.1:1) | CTAs, links, highlights |
| `on-accent` | `#051424` | `#ffffff` | Text on accent fills |
| `accent-soft` | `#00566a` | `#cffafe` | Placeholder tint |
| `secondary` / `tertiary` | `#b4c5ff` / `#7bd0ff` | `#1d4ed8` / `#2563eb` | Gradient text, "exploring" label |

Contrast ratios are against `paper`. All pass WCAG AA.

## Elevation
| Level | Style |
|---|---|
| 0 Canvas | `paper` + `radial-gradient(ellipse at top, rgba(37,99,235,0.15), transparent 70%)` |
| 1 Card (`card`) | `rgba(11,15,23,0.75)` + `backdrop-filter: blur(16px)` + 1px `line` border, 12px radius |
| 2 Hover (`card-hover`) | border = accent at 40% + `box-shadow: 0 0 25px -5px rgba(0,210,255,0.12)` |
| Buttons (`glow-btn`) | hover `box-shadow: 0 0 25px rgba(0,210,255,0.45)` |

## Typography
- **Geist** for headings (`font-display`), **Inter** for body, **JetBrains Mono** for labels (`.meta`, chips).
- Scale: `text-display` (hero), `text-h1`, `text-h2`, `text-h3`, `text-lead`, `text-body`, `text-small`, `text-meta`.

## Layout & components
- `container-page`: max 1280px. Gutter is 16px on mobile, 24px from 640px and 32px from 1024px.
- **Floating nav:** a pill fixed at `top-4`, blurred background, active-section highlight, theme toggle, CV button.
- **Hero:** text on the left. On the right, the portrait card with cyan glow cones and a name plate. Pill CTAs, a pulsing availability badge, and three pillar cards.
- **Section header:** an eyebrow (line + mono label in accent), then the title and an intro.
- **Experience:** a vertical timeline rail (accent → transparent) with cards; the main project gets an accent border and a pulsing dot.
- **Stats band:** counts derived from the data (internships, case studies, certifications, languages). Never invented numbers.
- **Projects:** bento grid with a 7/5 then 5/7 rhythm. Cards show a real screenshot or a plain gradient cover labelled with the category (never a fake UI).
- **Skills:** bento cards. Core technologies are accent-tinted chips, secondary ones outlined, and "exploring" ones dashed.
- **Education:** education cards, a certification card grid, and activity cards.
- **Contact:** a glowing banner with a "Ready to collaborate" badge, channel cards and the CV button.

## Motion
| Interaction | Spec |
|---|---|
| Scroll reveal | opacity 0→1, translateY 20px→0, 400ms `cubic-bezier(0.16,1,0.3,1)`, 80ms stagger |
| Route change | 400ms fade on `<main>` |
| Hover | 200ms colour/border/glow; arrows rotate 45° or shift 4px; cover images scale 1.03 |
| Pulse dot | 2s ring pulse on availability badges |

`prefers-reduced-motion` disables all of it.
