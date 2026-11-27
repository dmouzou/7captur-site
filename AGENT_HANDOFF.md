# AGENT_HANDOFF: `7captur-site` (`7captur.com`)

## Active Status
- **Current State:** `IDLE`: Ready for Milestone `S3`
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
| **S3** | `TODO` | Homepage body and interactive Ad Leak Estimator (`#estimator`) with query pass-through to `/audit/` |
| **S4** | `TODO` | Free 60-Day Ad Leak Audit page (`/audit/`) with booking path, qualification form, access explainer, video slot, reviewer block |
| **S5** | `TODO` | Pricing, Security and About pages |
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
