# Design System — Yosri Hamrouni Portfolio

Direction: **Swiss editorial layout on the original "Stitch" dark palette** — obsidian canvas,
electric cyan accent. The tokens live in `src/index.css` (`@theme`), and components use the semantic utilities only.
(Palette taken from the original DESIGN.md, dark mode; layout and content follow the master brief.)

## Color
| Token | Value | Original role | Contrast on canvas |
|---|---|---|---|
| `paper` | `#051424` | Background (obsidian) | — |
| `surface` | `#0b0f17` | Surface (pillars band) | — |
| `muted` | `#0e1d2e` | Image placeholders | — |
| `ink` | `#d4e4fa` | On Surface — headings, primary text | 14.4 : 1 |
| `ink-muted` | `#bbc9cf` | On Surface Variant — body copy | 10.9 : 1 |
| `ink-subtle` | `#859399` | Outline — metadata, labels | 5.9 : 1 |
| `line` | `#1e3040` | Hairline rules | — |
| `line-strong` | `#3c494e` | Outline Variant — list top rules | — |
| `accent` | `#22d3ee` | Primary (electric cyan): links, active nav, primary button | 10.3 : 1 |
| `accent-strong` | `#67e8f9` | Primary button hover | — |
| `accent-soft` | `#00566a` | Primary Container | — |
| `secondary` / `tertiary` | `#b4c5ff` / `#7bd0ff` | Reserved | — |

The canvas has the original Level-0 glow: `radial-gradient(… rgba(37,99,235,0.15) …)` at the top of the page.
Buttons on cyan use `paper` (#051424) text (10.3 : 1). Use the accent sparingly.

## Typography
- **Geist** for everything. **Geist Mono** only for small uppercase metadata (`.meta`).
- Fluid scale: `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-lead`, `text-body`, `text-small`, `text-meta`.
- Large headings use negative tracking (−0.035 → −0.015em) and `text-balance`.

## Layout
- `container-page`: max 1200px. Gutter is 16px on mobile, 24px from 640px and 32px from 1024px.
- 12-column grid. Each home section has a **label column** (3 cols: index + name) and a **content column** (9 cols).
- Sections are separated by full-width hairlines. Lists use a stronger top rule (`border-line-strong`) and light row rules.
- Cards are avoided. Structure comes from rules, alignment and whitespace.

## Shape & depth
- Radius 2–4px. No shadows. The sticky nav only shows a bottom hairline once scrolled. Dark only (no theme toggle).

## Motion
| Interaction | Spec |
|---|---|
| Scroll reveal | opacity 0→1, translateY 12px→0, 600ms `cubic-bezier(0.22,1,0.36,1)`, 70ms stagger |
| Route change | 450ms fade/translate on `<main>` |
| Hover | colour 200ms; link underline draws in over 300ms; arrows shift 4px |
| Images | 1.5% scale on featured image hover (700ms) |

`prefers-reduced-motion` disables all of it.

## Anti-patterns (do not add)
Glassmorphism, glows, gradients, blobs, fake terminals, tech-icon clouds, skill percentages, artificial stats, testimonials, emojis.
