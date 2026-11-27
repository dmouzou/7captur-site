# AGENT_HANDOFF: `7captur-site` (`7captur.com`)

## Active Status
- **Current State:** `IDLE`: Ready for Milestone `S1`
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
| **S1** | `TODO` | Codebase audit, config centralization, legacy cleanup, unified header and footer, removal of self-serve signup and trial references from the shell |
| **S2** | `TODO` | Homepage hero and readable sample Monday memo |
| **S3** | `TODO` | Homepage body and interactive Ad Leak Estimator (`#estimator`) with query pass-through to `/audit/` |
| **S4** | `TODO` | Free 60-Day Ad Leak Audit page (`/audit/`) with booking path, qualification form, access explainer, video slot, reviewer block |
| **S5** | `TODO` | Pricing, Security and About pages |
| **S6** | `TODO` | Resources pruning, article CTA refresh, redirects, ad budget check repurpose |
| **S7** | `TODO` | Metadata, legal copy, sitemap/robots, contrast, mobile, link integrity, banned-copy sweep |

---

## Completed Work Log
