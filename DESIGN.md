# Design System — Yosri Hamrouni Portfolio

Direction: **Minimalism & Swiss Style.** Light theme, editorial typography, one green accent.
The tokens live in `src/index.css` (`@theme`). Components use the semantic utilities only.
(This replaces the earlier dark/cyan "Stitch" direction.)

## Color
| Token | Value | Use | Contrast on paper |
|---|---|---|---|
| `paper` | `#f7f6f2` | Page background (warm off-white) | — |
| `surface` | `#ffffff` | Raised bands (pillars) | — |
| `muted` | `#efeee9` | Image placeholders | — |
| `ink` | `#1c1c1a` | Headings, primary text | 15.8 : 1 |
| `ink-muted` | `#5e5d58` | Body copy, secondary text | 6.1 : 1 |
| `ink-subtle` | `#6c6b65` | Metadata, labels | 4.9 : 1 |
| `line` / `line-strong` | `#e2e0d9` / `#c9c7be` | Hairline rules | — |
| `accent` | `#1e6b47` | Links, active nav, markers, primary button | 6.0 : 1 |
| `accent-strong` | `#154f34` | Primary button hover | — |

Use the accent sparingly: at most one accented element per visual group.

## Typography
- **Geist** for everything. **Geist Mono** only for small uppercase metadata (`.meta`).
- Fluid scale: `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-lead`, `text-body`, `text-small`, `text-meta`.
- Large headings use negative tracking (−0.035 → −0.015em) and `text-balance`.

## Layout
- `container-page`: max 1200px. Gutter is 16px on mobile, 24px from 640px and 32px from 1024px.
- 12-column grid. Each home section has a **label column** (3 cols: index + name) and a **content column** (9 cols).
- Sections are separated by full-width hairlines. Lists use a strong top rule (`border-ink`) and light row rules.
- Cards are avoided. Structure comes from rules, alignment and whitespace.

## Shape & depth
- Radius 2–4px. No shadows. The sticky nav only shows a bottom hairline once scrolled.

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
