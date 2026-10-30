# 7captur.com (Astro)

Static site built with Astro. React is used only for interactive islands. Output is plain HTML, so search and speed are unchanged.

- `npm install && npm run dev` to work locally, `npm run build` to produce `dist/`.
- `src/layouts` + `src/components`: shared head, nav and footer. Edit navigation and CTAs in `src/data/site.ts`.
- `src/pages`: one file per URL (same URLs as before, trailing slash).
- `src/fragments`: page bodies carried over verbatim from the old HTML. They are being replaced by components page by page.
- `public/`: files copied as-is (CSS, images, videos, robots.txt, verification files, CNAME).
- Deploy: GitHub Actions (`.github/workflows/deploy.yml`). Pages source must be "GitHub Actions".
