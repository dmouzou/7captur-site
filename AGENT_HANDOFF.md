# AGENT_HANDOFF: `7captur-site` (`7captur.com`)

## Active Status
- **Current State:** `IDLE`: Ready for Milestone `S6`
- **Target Blueprint:** "7Captur Site Blueprint (7captur.com)", held in the claude.ai Project. It is deliberately not committed: this repository is public and the blueprint contains internal operating figures.
- **Branch Policy:** Commit directly to `main` (1 cohesive milestone per commit, build must pass). Every push deploys to the live site.
- **Theme Rule:** Preserve Dark/Light mode and lime green accent. Visual style is an editorial financial memo.

## Standing decisions (2026-11-27)
- Stay on **Astro + React islands on GitHub Pages**. The blueprint's Next.js wording does not apply. Redirects are static redirect pages (no server 301s). Forms post to Formspree.
- Central config lives at `site/src/config/siteConfig.ts`.
- Founder shown as Daniel Mouzou, daniel@7captur.com. Photo, bio, LinkedIn, booking link and video stay hidden until their placeholders are filled.
- The sample Monday memo uses illustrative figures and must say so.
- No em dashes in any copy, code comment or note.
- Never publish internal delivery caps, analyst client loads or private rates.

## Legacy Pages guard
`legacy-pages-guard.md` makes GitHub's old branch-based Jekyll build fail on purpose, so it cannot overwrite the Astro deployment. Once Settings > Pages > Source is "GitHub Actions", that job stops running and the file can be deleted.

---

## Sequential Milestone Queue (Execute Strictly in Order)

| ID | Status | Milestone Scope |
|---|---|---|
| **S1** | `DONE` | Codebase audit, config centralization, legacy cleanup, unified header and footer, removal of self-serve signup and trial references from the shell |
| **S2** | `DONE` | Homepage hero and readable sample Monday memo |
| **S3** | `DONE` | Homepage body and interactive Ad Leak Estimator (`#estimator`) with query pass-through to `/audit/` |
| **S4** | `DONE` | Free 60-Day Ad Leak Audit page (`/audit/`) with booking path, qualification form, access explainer, video slot, reviewer block |
| **S5** | `DONE` | Pricing, Security and About pages |
| **S6** | `TODO` | Resources pruning, article CTA refresh, redirects, ad budget check repurpose |
| **S7** | `TODO` | Metadata, legal copy, sitemap/robots, contrast, mobile, link integrity, banned-copy sweep |

---

## Completed Work Log

### S1: Audit, config, legacy cleanup, shell
- **Agent / Date (UTC):** Claude Code / 2026-11-27
- **Files:** added `site/src/config/siteConfig.ts`, `site/public/assets/css/desk.css`; rewrote `Nav.astro`, `Footer.astro`, `Layout.astro`; `data/site.ts` is now a transitional alias; removed `Reveal.astro` and the stale pre-Astro pages at repo root; moved `videos/` and `assets/data/media/` into `site/public/` (they were symlinks).
- **Notes:** root `CNAME` kept on purpose. Unrebuilt pages pass `legacy` to Layout and load the old CSS. `/audit/` temporarily redirects to `/contact/` (remove in S4).
- **Verification:** `tsc --noEmit` pass, `astro build` pass (23 pages). No lint script exists.
- **Next:** rebuild the top of `site/src/pages/index.astro`.

### S2: Homepage hero and sample Monday memo
- **Agent / Date (UTC):** Claude Code / 2026-11-27
- **Files:** `pages/index.astro` rebuilt (top half); added `components/SampleMemo.astro`, `lib/sampleMemo.ts`, `tests/sampleMemo.test.mjs`.
- **Notes:** the blueprint text said two prospecting campaigns lose cash, but its table has one losing row (retargeting). The memo follows the table. The cut is stated as $4,480 per 30 days (40% of $11,200) in place of "$1,120/wk". Em dashes replaced.
- **Verification:** typecheck, tests (2), build pass; screenshots at 1280 and 390 px, no horizontal overflow.
- **Next:** add homepage bands 3 to 7 below the memo, plus the estimator.

### S3: Homepage body and Ad Leak Estimator
- **Agent / Date (UTC):** Claude Code / 2026-11-27
- **Files:** `pages/index.astro` bands 3 to 7; added `components/LeakEstimator.tsx`, `components/AuditBand.astro`, `lib/estimator.ts`, `tests/estimator.test.mjs`.
- **Notes:** four controls (drag and waste are separate sliders). At the default inputs estimated true contribution is negative (−$1,600). That follows from the blueprint formula and defaults.
- **Verification:** typecheck, tests (7), build pass; typed input, clamping and `?spend=` link checked in Chromium.
- **Next:** `pages/audit/index.astro`. Remove the temporary `/audit/` redirect in `astro.config.mjs`. Use `spendFromQuery` and `spendBand` from `lib/estimator.ts`.

### S4: Free 60-Day Ad Leak Audit page
- **Agent / Date (UTC):** Claude Code / 2026-11-27
- **Files:** added `pages/audit/index.astro`, `components/AuditForm.astro`, `components/Reviewer.astro`, `lib/auditForm.ts`, `tests/auditForm.test.mjs`; removed the temporary `/audit/` redirect.
- **Notes:** form posts to Formspree (`siteConfig.formEndpoint`) and also works without JavaScript. Work email required (free mail providers rejected, as the old contact form did). Booking button and video render only when their config values are set.
- **Pending placeholders:** `schedulingUrl`, `auditWalkthroughVideoUrl`, `founder.photo`, `founder.bio`, `founder.linkedin`. Confirm in Formspree that notifications reach the founder email.
- **Verification:** typecheck, tests (10), build pass; prefill, validation, failure and success states checked in Chromium with Formspree mocked.
- **Next:** pricing, security, about. Prices come from `PRICING` in siteConfig.

### S5: Pricing, Security and About
- **Agent / Date (UTC):** Claude Code / 2026-11-27
- **Files:** rewrote `pages/pricing`, `pages/security`, `pages/about`, `components/Faq.astro`; removed `PricingCards.tsx` and `data/plans.json`.
- **Notes:** the capacity row is intentionally absent from the public matrix. The scope wall says "This is not a CFO service" so the banned phrase never appears on the site. Prices come from `PRICING` in siteConfig.
- **Verification:** typecheck, tests (10), build pass; screenshots in light, dark and 360 px, no horizontal overflow.
- **Next:** resources, articles, redirects, ad budget check.
