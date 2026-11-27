# AGENT_HANDOFF: `7captur-site` (`7captur.com`)

## Active Status
- **Current State:** `IDLE`: Ready for Milestone `S6`. Visual layer restoration `V1` is complete.
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

## Site structure and design rules (2026-11-27, restoration S1R). READ BEFORE TOUCHING ANY PAGE
- The site is **multipage**. Never merge pages back into a long single-page homepage. The blueprint describes the homepage as seven vertical bands and its nav as anchors (`/#how-it-works`, `/#sample-memo`, `/#estimator`). Those were wrongly built as one scrolling page. They are now real routes: `/how-it-works/`, `/sample-memo/`, `/ad-budget-check/` (the Leak Estimator). Do not turn them back into anchors.
- Page map: `/` (hero, sample memo, three problem points, three step teaser, links to deeper pages, audit CTA), `/how-it-works/`, `/sample-memo/`, `/ad-budget-check/`, `/audit/`, `/pricing/`, `/security/`, `/about/` (contains the contact block at `#contact`), `/resources/` plus `/articles/*`, `/privacy-policy/`, `/terms-of-service/`, `/contact/` (legacy, see S6).
- **Design is the original site design.** Inter font, `site.css` + `site-v2` to `site-v5.css` tokens, original `Nav`, `Footer`, `PageHead` (brand orbs), `CtaBand`, `Faq`, `Reveal`, rounded cards, dark/light switcher, lime accent. The S1 "editorial desk" skin (`desk.css`, Inter Tight, IBM Plex Mono, `d-nav`, `d-footer`, `body.desk`) was removed on purpose. Do not bring it back. Do not add fonts.
- New content blocks (sample memo, ledger, estimator, audit form, pricing cards, matrix, tables) live in `site/public/assets/css/blocks.css`. Their `d-*` classes map onto the original tokens, so theming follows `site.css`. Build new pages from the original classes (`wrap`, `section`, `band`, `section-head`, `lede`, `kicker`, `btn`, `btn-primary`, `btn-ghost`, `hero`, `hero-sub`, `hero-actions`, `cta`) plus the `d-*` blocks. Use `PageHead` for page headers and `CtaBand` for the closing call to action.
- Navigation and footer links come only from `NAV` and `FOOTER_COLUMNS` in `siteConfig.ts`. No Log in or Sign up link in the top bar. The client portal link sits quietly in the footer bottom row.
- `/product/` and `/platform/` redirect to `/how-it-works/`. The old `/ad-budget-check/` email tool (five questions for small sellers) was replaced by the Leak Estimator.

## Visual layer (V1, 2026-11-27). Old feel on top of blueprint content
- Owner decision: blueprint content and layout stay; old motion and interactivity are layered on top. Pricing toggle switches Monthly vs 3-month prepay (20% off).
- `public/assets/css/motion.css` (loaded after `blocks.css`) gives `d-*` blocks the original spring lift, pointer light, press-down and staggered reveal. New block classes must be added to its selector list and to the pointer selector in `Layout.astro`.
- Old interactive components still in `src/components` and reusable with blueprint copy: `HeroWords`, `HeroCarousel`, `BeforeAfter`, `ProductTour`, `Tabs`, `Stories`, `Roadmap`, `ArticleArt`. Their CSS (`lc-*`, `tour-*`, `tab-*`, `rm-*`) is still in `site-v3.css` to `site-v5.css`.

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
| **S1R** | `DONE` | Restoration: original multipage design, fonts, nav and footer back; desk skin removed; homepage split into separate routes; content kept from the Site Blueprint |
| **S6** | `TODO` | Resources pruning (remove self-serve, social-seller, reseller, local-service and DM/WhatsApp articles), article CTA refresh to `/audit/`, fix article links to `/product/` and old persona copy, rework or redirect `/contact/` to `/about/#contact`, rewrite `public/llms.txt`, legacy redirects (`/signup`, `/trial`, `/get-started`, `/demo`) |
| **S7** | `TODO` | Metadata, privacy and terms copy (still describe the old self-serve product), sitemap/robots, contrast, mobile, link integrity, banned-copy sweep. Check every page in a real browser at 1280, 768 and 360 px in light and dark. S1R was verified by build, tests and HTML inspection only, with no browser screenshots |

---

## Completed Work Log

### V1 (part 1): Motion layer, pricing toggle, expandable cards
- **Agent / Date (UTC):** Claude / 2026-11-27
- **Files:** added `public/assets/css/motion.css`, `components/PricingPlans.tsx` (React island, Monthly vs 3-month prepay), `components/DeskCards.tsx` (Access, Reconcile, Memo cards that expand to a sheet with two animated illustrations each; adapted from `LayerCards`). Changed `layouts/Layout.astro` (motion.css link, pointer-light selectors), `pages/pricing/index.astro` (uses PricingPlans), `pages/index.astro` (three steps now DeskCards, reveal hooks, unused `steps` array removed).
- **Notes:** all illustration figures are illustrative. No new fonts. No em dashes.
- **Verification:** `tsc --noEmit` pass, `npm test` 10 pass, `astro build` pass (25 pages). Chromium: pricing toggle and the expanded Memo card checked in light mode at 1280 px, no page errors. Not checked: dark mode, 768 and 360 px, hover feel.
- **Still to do in V1:** animated illustrations on `/how-it-works/`, `/sample-memo/` and `/about/`, `ProductTour` style walkthrough of the memo, expandable cards on the pricing scope walls, then browser QA at 1280, 768 and 360 px in light and dark. Hero motion is done in part 2.

### V1 (part 2): Hero motion, before/after, memo excerpt
- **Agent / Date (UTC):** Claude / 2026-11-27
- **Files:** `HeroWords.tsx` now takes a `words` prop. `HeroCarousel.tsx` rotates four Monday memo calls (CUT, HOLD, HOLD & TEST, UNKNOWN) through `RecCard`, whose window title is now "This week's call". `BeforeAfter.tsx` scraps and "after" card rewritten for the desk offer. `pages/index.astro`: hero is the original centered layout with the rolling word and carousel under it, then Before/After, then a short memo excerpt that links to `/sample-memo/` (the full memo no longer sits on the home page, owner decision), then problems, steps cards, links, audit CTA.
- **Owner decisions this session:** home shows a short memo excerpt only. `/contact/` is left untouched, do not redirect it.
- **Verification:** `tsc` pass, `npm test` pass, `astro build` pass (25 pages). No browser available in this session, so motion, dark mode and mobile are unchecked.

### V1 (part 3): Illustrations, memo walkthrough, scope walls, browser QA
- **Agent / Date (UTC):** Claude Code / 2026-11-27
- **Files:** added `components/MemoTour.tsx` (four-part memo walkthrough, figures from `lib/sampleMemo.ts`), `components/Scenes.tsx` (About illustrations). Changed `pages/how-it-works` (step rows with the `DeskCards` illustrations, narrow variant on phones), `pages/about` (illustrated principles), `pages/sample-memo` (MemoTour replaces the static "How to read it" grid), `pages/pricing` (scope walls are `details` cards), `blocks.css`, `motion.css`, `Layout.astro`, `Icons.tsx`.
- **Fixes:** home overflowed sideways below 1280 px (carousel slides); rolling word screen-reader text still read the old words; home memo excerpt said "two prospecting campaigns" while the table has one losing retargeting row; footer bottom links wrapped with a stray indent; wide card illustrations hidden on phones.
- **Verification:** `tsc` pass, `npm test` 10 pass, `astro build` pass (25 pages). Chromium: 13 pages at 1280, 768 and 360 px in light and dark with no horizontal overflow, page errors or local 404s; 27 interaction checks pass (memo tabs and arrow keys, scope walls, pricing toggle, step card open and Escape, reduced motion). Screenshots were reviewed for a sample of those, not all. Not checked: Safari, Firefox, real touch devices, hover feel.
- **Next:** S6.

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

### S1R: Restore multipage structure and original design
- **Agent / Date (UTC):** Claude / 2026-11-27
- **Why:** S1 replaced the site design with a new "desk" skin, and S2 and S3 piled the blueprint's seven homepage bands into one long page. Owner wanted the old multipage structure, design and fonts back with only the content updated.
- **Restored from `f804f3b` (last commit before the handoff work):** `Layout.astro` (Inter, five original stylesheets), `Nav.astro`, `Footer.astro`, `Reveal.astro`, `Faq.astro`, `CtaBand.astro`. `PageHead.astro` kept, orbs changed to the e-commerce stack only (Shopify, Meta, Google Ads, WooCommerce, Stripe, PayPal).
- **Added:** `public/assets/css/blocks.css` (replaces `desk.css`), pages `how-it-works`, `sample-memo`, and the Leak Estimator at `ad-budget-check`. Rebuilt `index`, `audit`, `pricing`, `security`, `about` on the original classes. Removed `AuditBand.astro`, `pages/product`, `desk.css`.
- **Changed:** `siteConfig.ts` now holds `NAV` (How It Works, Sample Memo, Leak Estimator, Pricing, Resources, About) and `FOOTER_COLUMNS`. `Layout` JSON-LD describes the desk service. `astro.config.mjs` redirects `/product/` and `/platform/` to `/how-it-works/`. Sitemap priorities updated.
- **Content unchanged:** all Site Blueprint copy, prices (`PRICING`), memo figures, estimator math, audit form and tests carried over as built in S2 to S5.
- **Verification:** `tsc --noEmit` pass, `npm test` 10 pass, `astro build` pass (25 pages). Built HTML checked: original stylesheets load, only Inter loads, no `d-nav`/`d-footer` left, no broken internal links, no banned copy on the rebuilt pages. No browser was available, so no screenshots were taken.
- **Known leftovers:** articles, `/contact/`, privacy, terms and `llms.txt` still carry old self-serve and trial wording (S6, S7). Placeholders still unset: `schedulingUrl`, `auditWalkthroughVideoUrl`, `founder.photo`, `founder.bio`, `founder.linkedin`.
- **Next:** S6. Start at `site/src/pages/resources/index.astro` and `site/src/data/articles*.ts`.
