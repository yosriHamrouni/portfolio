---
name: Yosri Hamrouni — Software Engineer Portfolio
mode: Experience
version: 2.0
date: 2025-10-30
---

# Visual World: Dark-First Cyan-Accented Bento Grid

## Thesis
A portfolio that leads with technical depth, not minimalism. The dark-first obsidian canvas with electric cyan accents mirrors the production-grade systems this engineer builds: multi-tenant SaaS, RAG pipelines, Spring Boot 3 architectures. The bento grid presents projects as architectural artifacts, not cards.

## Color System (Dark-First)

### Light Mode (System Preference / Manual Override)
| Role | Value | Usage |
|------|-------|-------|
| Background | `#fafaf9` (stone-50) | Page canvas |
| Surface | `#ffffff` | Cards, containers |
| Surface Dim | `#f5f5f4` | Subtle containers |
| Primary | `#22d3ee` (cyan-400) | **Main accent** — CTAs, links, highlights |
| Primary Container | `#cffafe` | Primary backgrounds |
| Secondary | `#1d4ed8` (blue-600) | Secondary actions, section headers |
| Tertiary | `#60a5fa` (blue-300) | Subtle accents, hover states |
| On Surface | `#1e293b` (slate-800) | Primary text |
| On Surface Variant | `#64748b` | Muted text, metadata |
| Outline | `#64748b` | Borders, dividers |
| Outline Variant | `#94a3b8` | Subtle borders |

### Dark Mode (Default / System Preference)
| Role | Value | Usage |
|------|-------|-------|
| Background | `#051424` | Page canvas — obsidian |
| Surface | `#0b0f17` | Cards, containers |
| Surface Dim | `#0b0f17` | Subtle containers |
| Primary | `#22d3ee` (cyan-400) | **Main accent** |
| Primary Container | `#00566a` | Primary backgrounds |
| Secondary | `#b4c5ff` | Secondary actions |
| Tertiary | `#7bd0ff` | Subtle accents |
| On Surface | `#d4e4fa` | Primary text |
| On Surface Variant | `#bbc9cf` | Muted text |
| Outline | `#859399` | Borders |
| Outline Variant | `#3c494e` | Subtle borders |

## Typography
| Role | Font | Size/Weight |
|------|------|-------------|
| Display | Geist | 4.5rem / 800 / -0.04em tracking |
| Headline XL | Geist | 3rem / 700 / -0.03em |
| Headline LG | Geist | 2.25rem / 600 / -0.02em |
| Headline MD | Geist | 1.5rem / 600 / -0.01em |
| Body LG | Inter | 1.125rem / 400 / 1.65 |
| Body MD | Inter | 1rem / 400 / 1.6 |
| Label Code | JetBrains Mono | 0.8125rem / 500 / 0.04em |
| Label Pill | Inter | 0.75rem / 600 / 0.05em |

**Responsive**: Display 4.5rem → 2.75rem at 768px; Headline XL 3rem → 2rem at 768px

## Spacing & Grid
- **Base**: 8px (0.5rem)
- **Gutter**: 1.5rem (24px) desktop / 1rem (16px) mobile
- **Section Margin**: 3rem (48px)
- **Container Max**: 1280px (80rem)
- **Grid**: 12-column fluid, 1.5rem gutters

## Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| Card | 0.5rem (8px) | Project cards, certification cards |
| Button | 0.75rem (12px) | Primary/secondary buttons |
| Pill | 1rem (16px) | Tags, badges, CTA buttons |

## Elevation & Depth (Dark Mode)
| Level | Style |
|-------|-------|
| Level 0 (Canvas) | `#051424` + radial glow `radial-gradient(ellipse at top, rgba(37,99,235,0.15), transparent 70%)` |
| Level 1 (Card) | `rgba(11,15,23,0.75)` + `backdrop-filter: blur(16px)` + `1px solid rgba(30,41,59,0.8)` |
| Level 2 (Hover) | Border `1px solid rgba(0,210,255,0.4)` + `box-shadow: 0 0 25px -5px rgba(0,210,255,0.12)` |

## Motion Grammar
| Interaction | Duration | Easing |
|-------------|----------|--------|
| Scroll Reveal | 400ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Hover Transition | 200ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Focus Ring | 150ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Stagger Delay | 80ms per item | — |

**Respects**: `prefers-reduced-motion` — disable all non-essential motion

## Component Patterns

### Floating Nav
- Fixed top, `top-4`, centered, pill-shaped
- `bg-background/80 backdrop-blur-xl border border-outline-variant/50`
- CTA: pill button, primary fill, `hover:shadow-[0_0_25px_rgba(0,210,255,0.45)]`

### Hero
- Asymmetric 2-col: content left, portrait right
- Cyan glow cones behind portrait
- Primary CTA: pill, cyan fill, glow shadow
- Micro-stats: icons in cyan, labels in muted

### Bento Project Grid
- 12-col grid: featured projects span 8, standard span 4
- Cards: `aspect-[16/9]` preview, gradient placeholder
- Hover: border cyan, subtle glow
- Metadata: category pill, title, description, feature dots, tech tags

### Certifications Grid
- 4-col desktop, 2-col tablet, 1-col mobile
- Cards: icon/image left, title/subtitle right
- Credly: proper card (not iframe embed in tiny box)
- Image certs: thumbnail with zoom on hover

### Motion Rules
- **Scroll Reveal**: `opacity: 0 → 1`, `translateY: 20px → 0`, stagger 80ms
- **Hover**: border color shift, subtle scale (1.01x) on cards
- **Focus**: 2px cyan ring, offset 2px
- **Reduced Motion**: instant opacity, no transform, no stagger

## Accessibility
- WCAG AA contrast (verified in both modes)
- Focus visible on all interactive elements
- Semantic HTML (section, article, nav, footer)
- ARIA labels on icon-only buttons
- Reduced motion respected

## Breakpoints
| Size | Width | Columns | Gutter |
|------|-------|---------|--------|
| Mobile | < 640px | 4 | 1rem |
| Tablet | 640-1023px | 8 | 1.25rem |
| Desktop | ≥ 1024px | 12 | 1.5rem |

## Anti-Goals (Explicit)
- ❌ Light/minimalist default (reads "junior")
- ❌ Green primary (conflicts with stitch cyan identity)
- ❌ Generic placeholders for projects
- ❌ Cramped certification grid
- ❌ Zero motion/micro-interactions
- ❌ Glassmorphism overload (subtle only on nav)
- ❌ Generic template feel

---

## Direction Contract

**THESIS**: Dark-first, cyan-accented bento grid that presents engineering artifacts as architectural proof — not a generic developer template.

**OWN-WORLD**: Obsidian canvas + electric cyan + royal cobalt + bento grid + Geist/Inter/JetBrains Mono. Recognizable with all content removed.

**STORY**: Visitor lands → Hero depth + cyan glow → "This engineer builds production systems with AI" → Scroll → Bento projects with visual proof → Certifications as verified artifacts → Contact with active CTA.

**FIRST VIEWPORT**: Hero (asymmetric, portrait + cyan glow) + Primary CTA "View Projects" (cyan pill, glow) + Micro-stats (ESPRIT, Nabeul, Full-Stack) + Scroll indicator.

**FORM**: Bento grid for projects, card grid for certifications, layered hero, floating pill nav. Seed: `seed: a3f2c1e4` (concept-seed reference).

**FINISH**: Unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.