# Hossam Salah — Personal Portfolio

Single-page portfolio site built with Vite, React, and Tailwind CSS.
Dark-mode-first, mobile-responsive, deployed free on Netlify.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually <http://localhost:5173>).

## Edit content

All copy — name, summary, skills, experience, projects, education —
lives in [src/data/content.js](src/data/content.js). Edit that one file
to update what the site shows. The layout/components in `src/components/`
stay unchanged.

To swap in the real CV, replace `public/Hossam_Salah_CV.pdf` with the
actual PDF (same filename).

To point a project card at its specific GitHub repo, edit the
corresponding entry in `src/data/content.js` and add a `repo` URL, or
update `identity.githubRepos` to a new default.

## Production build

```bash
npm run build
```

Outputs static files to `dist/`. Preview locally with `npm run preview`.

## Deploy

Pushed to GitHub → connected to Netlify with build command `npm run build`
and publish directory `dist`. Every push to `main` auto-deploys.
The `public/_redirects` file ensures SPA refreshes never 404.

## Stack

- Vite + React (JS)
- Tailwind CSS
- lucide-react (icons)
- framer-motion (subtle scroll animations)
