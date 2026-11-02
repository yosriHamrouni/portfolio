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
- `src/data/` — all content: profile, experience, projects (case studies), skills, education. Edit content here, not in components.
- `src/components/` — sections (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Education`, `Contact`), `Nav`, `Footer`, `ProjectDetail` (case-study page at `/project/:slug`).
- `src/index.css` — design tokens and utilities. See `DESIGN.md`.
- `PORTFOLIO_PROGRESS.md` — audit, decisions, open questions and testing log.

## Enabling the CV download and email
Set `cvUrl` (put the PDF in `public/`) and `email` in `src/data/profile.ts`. The links appear automatically.

## Deploying
This is a single-page app with client-side routes. Configure the host to serve `index.html` for unknown paths (for example, a `_redirects` file on Netlify or `rewrites` in `vercel.json`).
