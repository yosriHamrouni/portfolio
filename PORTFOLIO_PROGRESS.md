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
4. ~~**ServiceField repo**~~ — confirmed as the L-Mobile project (team repo `houyembn/ServiceField`, Yosri's fork `yosriHamrouni/ServiceField`). Link the fork after the hardening work in session "Harden ServiceField fork before showcasing" lands.
5. ~~**Certifications**~~ — resolved 2026-11-02 from the files on the PC (see log). Still unverified, with no file found: *AI For Everyone* and *Unix Tools and Scripting*. If you have the full *Meta Front-End Developer* / *Google UX Design* professional certificates, send them and the course entries can be upgraded.
6. **SaaS assistant:** the README says it uses "rule-based responses + optional local AI provider"; the CV says "RAG chatbot (embeddings, vector store, LLM)". The site describes it as a context-restricted assistant built with a RAG approach. Please confirm.
7. **Agentic AI Healthcare Workflow** (on the CV): should it be added as a project?
8. **Where will the site be hosted?** The answer decides the sitemap, canonical URL and SPA rewrites.

## 6. Known issues
- Two SaaS demo frames (admin dashboard, student assistant) contain a caption overlay from the screen recording. Real screenshots would be better.
- The demo video adds ~28 MB to the repo (`public/project-media/`). If the repo grows, move videos to a CDN or Git LFS.
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
- **2026-11-02** — Added the School SaaS demo video (source: `Downloads/Demo finale.mp4`, 2:41, 75 MB).
  - **Edit:** trimmed the 3.8s static intro and the outro glitch; six static pauses play at 2× (disclosed in the caption); 0.4s fade in/out; 50→30 fps; light unsharp for crisper UI text; silent audio track removed.
  - **Output:** 2:24, H.264, `+faststart`. 1080p is 18.2 MB and 720p is 10.2 MB; the 720p file is served on viewports ≤ 900px through `<source media>`. WebP poster.
  - **Player:** `DemoVideo.tsx` — native controls, six chapter buttons that seek and follow playback. The SaaS card shows a "Video demo · 2:24" badge.
  - **Verified:** metadata loads (144.5s); the Student chapter seeks to 1:51 and plays; 720p is chosen in the narrow pane, 1080p at 1366px.
  - **Tool:** ffmpeg 4.4.1 bundled with Stremio (not on PATH). Edit script: the filter graph in the session scratchpad.
- **2026-11-02** — Certifications rebuilt from the files on the PC (Downloads, OneDrive).
  - **Added:** AWS Academy Graduate – Cloud Foundations (Nov 2025, 20 h, Credly + badge image); Cisco CCNA: Switching, Routing & Wireless Essentials (Credly); TOEIC L&R 795/990 (May 2025; L 420 B2, R 375 B1); Meta courses on Coursera (Intro to Front-End Dev Apr 2023, Programming with JavaScript Sep 2023, Version Control Sep 2023); Google *Foundations of UX Design* (Feb 2023).
  - **Corrected:** the two Credly badges the old site called "Google Cloud Fundamentals" are actually AWS Cloud Foundations and Cisco CCNA SRWE. The Space Academy bootcamp completed 16 Sep 2023 (it was shown as Jan 2023).
  - **Replaced:** "Meta Front-End Developer" and "Google UX Design" were shown as full professional certificates, but only individual course certificates were found. They're now listed as courses ("… program").
  - **Not linked:** the TOEIC digital score report shows date of birth and ID number.
  - **Verified:** all Coursera and Credly links return 200 and point to the right badge or course.
- **2026-11-03** — Field Service case study rewritten from the team repo (`houyembn/ServiceField`).
  - **Facts used:** .NET 8 ASP.NET Core Web API, EF Core + SQL Server, Swagger, React 18 + Vite; team of 3 interns.
  - **Yosri's part (from his commits):** the Articles/Items module end to end, the app shell (NavBar/SideBar/HomePage), Users and sign-in/up, and the Articles + Service case merge; about 10 of 36 commits.
  - **Repo link:** none yet — the page shows "public link coming soon" through the new `repoNote` field. The Outcome section mentions the auth weaknesses and the hardening in progress.
  - **Experience entry:** the L-Mobile entry is aligned with the same facts.
  - **TODO:** once the fork is hardened, set `repo` to `https://github.com/yosriHamrouni/ServiceField`, remove `repoNote`, and add screenshots captured from a local run.
