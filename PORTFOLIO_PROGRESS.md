# Portfolio Progress

Living document for resuming work. The master brief (the pasted "MASTER PROMPT") is the
source of truth for identity, content and design direction. It supersedes the dark/cyan
direction in `PROJECT_GOAL.md` and the old `DESIGN.md`.

---

## 1. Audit (2026-11-02)

### Architecture
- **Stack:** React 19 + TypeScript 7 + Vite 8, npm, Tailwind CSS v4 (PostCSS plugin), oxlint.
- **Routing:** `react-router-dom` v7, `BrowserRouter`. `/` (one-page sections) and `/project/:slug` (case studies).
- **Styling:** semantic tokens as CSS variables in `src/index.css`, exposed to Tailwind via `@theme inline`.
- **Data:** `src/data/projects.ts` and `src/data/certifications.ts`. Experience, skills and about copy are hard-coded in components.
- **Dependencies:** minimal — only `react`, `react-dom` and `react-router-dom` at runtime. Keep it that way.

### Implementation status (before this pass)
- Built: hero, about, experience timeline, stats band, tech stack, bento projects, certifications, FAQ/contact, footer, case-study pages, scroll reveal, theme toggle, mobile nav.
- Incomplete or missing compared with the brief: CV download, email, education section (ESPRIT + CESI), extracurriculars, accurate role titles, page-level SEO, favicon (it's the Vite default), robots.txt.

### Design audit
- **Keep:** the token architecture, the reveal-on-scroll mechanism (made subtler), shared project data, stretched-link cards, real screenshots of the SaaS.
- **Conflicts with the brief:** dark obsidian theme with cyan glow (brief: light theme with green accent); radial glows, gradient text, pulsing dots, glassmorphism nav; "blueprint" project previews with a fake `$ stack --list` terminal; a stats band (artificial statistics); a generic FAQ; rounded cards everywhere; hero headline using "intelligent systems" buzz phrasing.
- **Generic patterns:** similar card treatment in every section, tech-chip clouds, CTA banner ("Let's build something extraordinary").

### Content audit
- **Wrong or unverifiable:**
  - SaaS case study claimed "ML models" and listed Spring AI, Ollama and Docker. The repository README says it uses a rule-based engine, with an *experimental* ML service behind a fallback.
  - SaaS case study invented "real-time analytics", a "parent-teacher portal" and "scales from 1 school to 100+".
  - Builderz and Gleam-Clone GitHub links return **404** (private or missing).
  - Several years and durations were guessed.
  - Field Service listed SQL Server, which the brief doesn't mention.
- **Missing:** CESI Caen mobility as education, Dimouzika (guitar teacher) and Tunisian Red Crescent, Krenova's correct name and role titles, "practical vs exploring" split for AI skills, a three-pillar positioning (Build / Engineer / Integrate intelligence).
- **Hotel Management** was a project card. The brief keeps it only as an experience (VioreDigital).

### Technical issues
- Vite default favicon; Material Symbols and three font families loaded but mostly unused.
- 8 PNG screenshots totalling ~2.8 MB in `public/project-imgs`.
- Unused files: `App.css`, `Process.tsx`, `Projects.txt`, `assets/hero.png`, `react.svg`, `vite.svg`.
- No per-route `<title>`; SPA deep links need a host rewrite rule when deployed.

### Verified sources used for content
- `School-Management-SaaS` README (public).
- `ServiceField` README (public, .NET 8 + React; *not yet confirmed* to be the L-Mobile project).
- Latest CV: `Downloads/CV/Yosri_Hamrouni_CV.pdf` (2026-10-26, French). This CV is the only source for the Builderz details.

---

## 2. Roadmap
1. ✅ Design system: light Swiss tokens, single type family (Geist + Geist Mono), green accent.
2. ✅ Content layer: `src/data/*` for profile, experience, projects, skills, education.
3. ✅ Sections: nav, hero + three pillars, about, experience, projects index, skills, education, contact.
4. ✅ Case-study template following the 8-part structure (problem → outcome).
5. ✅ SEO basics, favicon, robots.txt, WebP screenshots.
6. ✅ CV download (`public/Yosri_Hamrouni_CV.pdf`, French, from `Downloads/CV`, 2026-10-26). ⏳ Email still waiting on Yosri.
7. ⏳ Real screenshots for Builderz, Gleam and L-Mobile if available.
8. ⏳ Deployment target, then sitemap + canonical URL + SPA rewrite rule.

## 3. Architectural decisions
- **Content lives in `src/data/`.** Components only render it. Profile links (CV, email) come from `profile.ts` and the UI hides them while they're `null`.
- **Dark-first with a light toggle.** The theme is saved in localStorage and applied before first paint by a script in `index.html`.
- **No animation library.** Scroll reveal uses one `IntersectionObserver`. Route changes use a CSS fade. Everything respects `prefers-reduced-motion`.
- **Projects without screenshots show no image.** I didn't make fake previews (the brief says not to invent screenshots).

## 4. Design decisions
- **Changed on 2026-11-02 at Yosri's request:** the visual direction is the original dark "Stitch" look again — obsidian canvas, cyan accent, glass cards with a hover glow, floating pill nav, bento projects, timeline, stats band, light/dark toggle. The brief's Swiss/minimal direction is dropped. Full spec is in `DESIGN.md`.
- **Kept from the brief:** all content rules (no invented metrics, links or screenshots), the case-study structure, Education, and the CV download.
- **Accuracy guards:**
  - The stats band only counts items listed on the page.
  - Projects without screenshots get a labelled gradient cover, not a fake UI.

## 5. Open questions for Yosri
1. ~~**CV**~~ — resolved: the latest French CV is published. Swap the file in `public/` when an English version exists (and change `cvNote` in `profile.ts`). Note that the PDF includes the phone number and email.
2. **Email:** which address should appear on the site?
3. **Builderz / Gleam repos:** both links 404. Should they be made public, or stay unlinked?
4. **ServiceField repo:** is it the L-Mobile project? If so, can it be linked?
5. **Certifications:** the brief lists 6. I removed the two Google Cloud Credly badges and "Version Control" because the brief doesn't list them. Should they come back?
6. **SaaS assistant:** the README says it uses "rule-based responses + optional local AI provider"; the CV says "RAG chatbot (embeddings, vector store, LLM)". The site describes it as a context-restricted assistant built with a RAG approach. Please confirm.
7. **Agentic AI Healthcare Workflow** (on the CV): should it be added as a project?
8. **Where will the site be hosted?** The answer decides the sitemap, canonical URL and SPA rewrites.

## 6. Known issues
- Two SaaS demo frames (admin dashboard, student assistant) contain a caption overlay from the screen recording. Real screenshots would be better.
- `/project/:slug` deep links need an SPA rewrite rule on the host.
- No sitemap or canonical URL yet; both need the final domain.

## 7. Testing status (2026-11-02)
- `npm run build`: passes. `npm run lint`: 0 warnings.
- Browser, desktop 1366px: every home section, nav active state, and all four case-study pages render. Gallery switching works.
- Browser, mobile 375px: no horizontal overflow; menu opens, navigates and closes; Escape closes it.
- Navigation from a case-study page to `/#section` lands on the section.
- Keyboard: skip link is the first tab stop; the focus ring is visible (accent, 2px).
- Fresh load: all requests return 200; screenshots are WebP, 360 KB total (were 2.8 MB PNG).
- Not tested: real devices, screen readers, Lighthouse.

### Log
- **2026-11-02** — Audit written. Swiss/light redesign implemented (see roadmap 1–5).
- **2026-11-02** — CV download enabled in the nav, hero and contact sections, labelled "PDF · French". Verified: all three links serve the PDF (200, application/pdf).
- **2026-11-02** — Switched to the original blue/cyan dark palette (tokens only; layout and content unchanged). Strong list rules now use `line-strong`. Favicon and theme-color recolored. Build and lint are clean; checked in the browser (home and case study).
- **2026-11-02** — Restyled to the original dark Stitch design: floating pill nav, glow hero, cards, timeline, stats band, bento projects and skills, contact banner, light toggle. Fonts are back to Geist + Inter + JetBrains Mono. Build and lint are clean. Checked: desktop sections, the light toggle (persists), mobile with no horizontal overflow on the home and case-study pages.
