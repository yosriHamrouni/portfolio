# Yosri Hamrouni — Portfolio

Personal portfolio of Yosri Hamrouni, software engineer (ESPRIT, 2026).
Built with React 19, TypeScript, Vite and Tailwind CSS v4. The only runtime dependency beyond React is `react-router-dom`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run lint
```

## Where things live
- `src/i18n/locales/{fr,ar,en}/` — all written content, one folder per language: `ui.ts` (labels, buttons, accessibility text), `content.ts` (profile, About, experience, education, certifications, skills), `projects.ts` and `warda.ts` (case studies). Edit content here, not in components.
- `src/data/types.ts` — the shapes every language must fill; `src/data/profile.ts` — language-neutral links, email and CV files.
- `src/components/` — sections (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Education`, `Contact`), `Nav`, `LanguageSwitcher`, `Footer`, `ProjectDetail` (case-study page at `/project/:slug`).
- `src/index.css` — design tokens and utilities, including the Arabic typography block. See `DESIGN.md`.
- `PORTFOLIO_PROGRESS.md` — audit, decisions, open questions and testing log.

## Languages
French (default), Arabic (right-to-left) and English.
- The visitor's choice is saved in `localStorage` (`lang`). A link can force a language: `/?lang=ar`, `/project/warda?lang=en`.
- English's `ui.ts` defines the `Ui` type and `src/data/types.ts` the `Content` type, so a key missing in French or Arabic fails `npm run build`. When you add or change a fact, update all three languages.
- French ships in the main bundle; Arabic and English are separate chunks loaded when chosen.
- RTL: components use logical utilities (`ps-`, `pe-`, `start-`, `end-`, `text-start`, `border-s`) — never `pl-`/`left-`/`text-left`. Directional arrow icons mirror automatically; screenshots, logos and code do not.
- `font-mono` / `.meta` labels switch to IBM Plex Sans Arabic in Arabic. Use `font-code` for purely technical tokens (tech chips, timecodes, counters) that must stay monospace in every language.

## Enabling the CV download and email
CV files and `email` are set in `src/data/profile.ts` (PDFs live in `public/`). Each language's `index.ts` chooses which CV is offered first.

## Deploying
This is a single-page app with client-side routes. Configure the host to serve `index.html` for unknown paths (for example, a `_redirects` file on Netlify or `rewrites` in `vercel.json`).
