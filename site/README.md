# 7captur.com (Astro)

Static site built with Astro. React is used only for interactive islands. Output is plain HTML, so search and speed are unchanged.

- `npm install && npm run dev` to work locally, `npm run build` to produce `dist/`.
- `src/layouts` + `src/components`: shared head, nav and footer. Edit navigation and CTAs in `src/data/site.ts`.
- `src/pages`: one file per URL (same URLs as before, trailing slash).
- `src/fragments`: page bodies carried over verbatim from the old HTML. They are being replaced by components page by page.
- `public/`: files copied as-is (CSS, images, videos, robots.txt, verification files, CNAME).
- Deploy: GitHub Actions (`.github/workflows/deploy.yml`). Pages source must be "GitHub Actions".

## Keeping the site honest

- `src/data/plans.json` is a copy of `shared/plans.json` in the app repo. Prices on the site come from it. Copy it over whenever plans change. The site deliberately does not publish recommendation counts, import limits or history lengths (some are still provisional).
- `src/data/integrations.ts` is the single list of integration claims. Shopify and Google Ads show "Coming soon" until `verified: true` is set, which should happen only after the connection passes acceptance tests on a real account with production credentials.
- Removed on purpose: the 30-day trial, the $29 Maintenance Plan, the 30% cap and rollback claims, "approved changes pushed to Meta", annual billing, the ROI estimator, and the assisted-execution article (redirects to /articles/). The product does not execute ad changes.
- Legal pages (`privacy-policy`, `terms-of-service`) were rewritten to match how the app behaves. Have them reviewed by a lawyer before launch.
