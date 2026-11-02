# Portfolio Redesign Project — Goal & Outcome Document

## Project Overview

**Project Name**: Yosri Hamrouni — Software Engineer Portfolio Redesign  
**Duration**: Single-session redesign  
**Mode**: Experience (Portfolio/Gallery)  
**Target Audience**: Hiring managers, technical leads, recruiters at European tech companies  
**Primary Goal**: Transform a generic developer portfolio into a technical showcase that communicates engineering precision and production-grade capability

---

## Original Problem

The existing portfolio suffered from:
- **Visual identity crisis**: Green primary color conflicting with referenced Stitch design system's cyan
- **Zero visual proof**: All 5 projects used identical generic placeholder icons
- **No motion/feedback**: Static, lifeless interface with zero micro-interactions
- **Content disorganization**: Certifications cramped in 4-col grid, mixed presentation types
- **Junior aesthetic**: Light/minimalist default that read "entry-level" despite senior-grade technical content (PFE with AI/RAG, Spring Boot 3, multi-tenant architecture)

---

## Design Strategy

### Design Direction: **Dark-First, Cyan-Accented Bento Grid**

| Aspect | Before | After |
|--------|--------|-------|
| **Background** | Warm stone `#fafaf9` (light) | **Obsidian `#051424`** (dark-first) |
| **Primary Accent** | Green `#16a34a` | **Cyan `#22d3ee`** (Stitch electric cyan) |
| **Secondary** | Slate `#475569` | **Royal Cobalt `#1d4ed8`** |
| **Tertiary** | Teal `#0f766e` | **Sky Highlight `#60a5fa`** |
| **Layout** | Card grid | **Bento grid** (12-col fluid) |
| **Projects** | Identical placeholders | **Bento cards** with video frames |
| **Certifications** | Cramped 4-col grid | **Proper card grid** with Credly cards |
| **Motion** | None | **Scroll-reveal + hover states** |

### Design Philosophy
> "A portfolio that leads with technical depth, not minimalism. The dark-first obsidian canvas with electric cyan accents mirrors the production-grade systems this engineer builds: multi-tenant SaaS, RAG pipelines, Spring Boot 3 architectures."

---

## Technical Implementation

### Design System (Tailwind CSS v4)
- **Semantic color tokens** via `@theme` directive
- **Dark-first** with light mode override via `.light` class
- **System preference** detection + manual override via localStorage
- **Spacing scale**: 8px base, 1.5rem gutter, 3rem section margin
- **Container**: 1280px max (12-col grid)
- **Border radii**: Card 0.5rem, Button 0.75rem, Pill 1rem
- **Typography**: Geist (display) + Inter (body) + JetBrains Mono (code)

### Component Architecture
```
src/
├── index.css                 # Full design system tokens
├── components/
│   ├── FloatingNav.tsx       # Fixed pill nav, glassmorphism
│   ├── Hero.tsx              # Asymmetric 2-col, cyan glow
│   ├── About.tsx             # Philosophy + competencies
│   ├── Experience.tsx        # 4 positions, timeline
│   ├── Stats.tsx             # 4 metric cards
│   ├── TechStack.tsx         # 6 categorized groups
│   ├── Projects.tsx          # Bento grid + video frames
│   ├── Certifications.tsx    # Card grid + Credly badges
│   ├── Contact.tsx           # FAQ + CTA
│   ├── Footer.tsx            # Theme toggle + social
│   └── ThemeToggle.tsx       # Sun/moon icon, localStorage
└── App.tsx                   # Composition root
```

### Key Features Implemented

| Feature | Implementation |
|---------|----------------|
| **Dark/Light Toggle** | localStorage + system preference + manual override |
| **Scroll Reveal** | 400ms stagger, `cubic-bezier(0.16, 1, 0.3, 1)` |
| **Hover Micro-interactions** | Border glow, subtle scale, color shifts |
| **Focus Visible** | 2px cyan ring, offset 2px |
| **Reduced Motion** | Instant opacity, no transform, no stagger |
| **Project Images** | 8 frames extracted from `Demo finale.mp4` |
| **Certifications** | 9 credentials (Credly embeds + image + icons) |

---

## Content Integration

### Professional Profile
- **Name**: Yosri Hamrouni
- **Title**: Software Engineer | Full-Stack Developer | AI Enthusiast
- **Location**: Nabeul, Tunisia
- **Education**: ESPRIT Engineering Graduate (2026) + CESI France Exchange

### Projects Showcased (5)
| Project | Subtitle | Category | Key Features |
|---------|----------|----------|--------------|
| School Management SaaS | EduNova AI ERP | Full-Stack / AI | Explainable risk detection, RAG chatbot, Multi-tenant |
| Builderz | Enterprise Backend | Backend / Java | JWT auth, Swagger/OpenAPI, Keycloak, Docker |
| Gleam.io Clone | Contest Platform | Full-Stack | Social APIs, React UI, AI assistant |
| Field Service Mgmt | Enterprise Refactoring | ASP.NET Core | REST APIs, Agile/Scrum |
| Hotel Management | Web App | Early Project | Booking, DB design, Admin panel |

### Certifications (9)
1. Meta Front-End Developer (Coursera)
2. Google UX Design (Coursera)
3. AI For Everyone (DeepLearning.AI)
4. The Unix Workbench (Johns Hopkins)
5. Google Cloud Fundamentals ×2 (Credly)
6. Version Control (Meta/Coursera, Sep 2023)
7. UX BOOTCAMP (Space Academy, Jan 2023)
8. TOEIC B2 (ETS Global, May 2025)

### Experience (4)
1. **Maison du Web** — PFE (6mo): Multi-tenant School SaaS + AI/RAG
2. **Krenova Consulting** (2mo): Gleam.io Clone + OpenAI
3. **L-Mobile** (2mo): Field Service + ASP.NET Core
4. **VioreDigital** (2mo): Hotel Management + Laravel

---

## Video Frame Extraction

**Source**: `C:\Users\yosri\Downloads\Demo finale.mp4` (75MB)  
**Tool**: FFmpeg (`fps=1/2`, 2 frames/second)  
**Output**: 81 frames → 8 key frames selected (01, 05, 10, 20, 40, 60, 70, 81)  
**Destination**: `public/project-imgs/project-demo-{01,05,10,20,40,60,70,81}.png`  
**Integration**: Referenced in Projects component `image` prop

---

## Quality Verification

### Build & Lint
| Check | Result |
|-------|--------|
| `npm run build` | ✅ SUCCESS (876ms) |
| `npm run lint` | ✅ PASSES (1 pre-existing Date warning) |

### Responsive Breakpoints
| Breakpoint | Columns | Gutter |
|------------|---------|--------|
| Mobile (<640px) | 4 | 1rem |
| Tablet (640-1023px) | 8 | 1.25rem |
| Desktop (≥1024px) | 12 | 1.5rem |

### Accessibility
- WCAG AA contrast (both modes)
- Focus visible on all interactive elements
- Semantic HTML (section, article, nav, footer)
- ARIA labels on icon-only buttons
- Reduced motion respected

---

## Anti-Goals Achieved (Explicitly Avoided)

| Anti-Goal | How Avoided |
|-----------|-------------|
| ❌ Light/minimalist default | Dark-first obsidian default |
| ❌ Green primary | Cyan primary (Stitch identity) |
| ❌ Generic placeholders | Video frames + bento grid |
| ❌ Cramped certifications | Proper card grid |
| ❌ Zero motion | Scroll-reveal + hover states |
| ❌ Glassmorphism overload | Subtle nav only |
| ❌ Generic template feel | Bento grid + dark-first |

---

## Files Modified/Created

### Modified
- `src/index.css` — Complete design system overhaul
- `src/components/Hero.tsx` — Asymmetric layout, cyan glow
- `src/components/Projects.tsx` — Bento grid + video frames
- `src/components/Certifications.tsx` — Card grid + Credly + image
- `src/components/FloatingNav.tsx` — Fixed top nav
- `src/components/About.tsx` — Philosophy + competencies
- `src/components/Experience.tsx` — Timeline with metrics
- `src/components/Stats.tsx` — Metrics grid
- `src/components/TechStack.tsx` — Categorized skills
- `src/components/Contact.tsx` — FAQ + CTA
- `src/components/Footer.tsx` — Theme toggle
- `src/components/FloatingNav.tsx` — Theme toggle import
- `src/App.tsx` — All components wired

### Created
- `DESIGN.md` — Full design specification
- `src/components/ThemeToggle.tsx` — Theme toggle component
- `public/project-imgs/` — 8 extracted frames
- `src/assets/project-imgs/` — Source frames (81 total)

---

## Outcome

The portfolio now:
1. **Leads with technical depth** — Dark-first, cyan-accented design matches PFE project sophistication
2. **Shows, doesn't tell** — Bento grid with actual video frames from demo
3. **Feels alive** — Scroll-reveal, hover states, focus rings
4. **Adapts to user** — Dark/light toggle with system preference + manual override
3. **Builds confidence** — 9 verifiable certs, 5 real projects, 4 real experiences
4. **Ships clean** — Zero lint errors, 876ms build, responsive 320px-1440px+

---

## How to Run

```bash
# Install dependencies
npm install

# Development server
npm run dev -- --port 5173

# Production build
npm run build

# Lint check
npm run lint
```

---

## Future Enhancements (Optional)

- [ ] Add project thumbnails as proper screenshots (not video frames)
- [ ] Implement Calendly integration in Contact
- [ ] Add blog/technical writing section
- [ ] Implement i18n (French/English/Arabic)
- [ ] Add unit tests for theme logic
- [ ] Set up CI/CD pipeline

---

*Generated: 2025-10-30*  
*Project: Yosri Hamrouni — Software Engineer Portfolio*  
*Redesign: Hybrid Minimalism + Stitch Design System*