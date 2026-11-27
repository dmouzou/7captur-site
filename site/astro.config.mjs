import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// Output is plain static HTML; React is used only for interactive islands.
export default defineConfig({
  site: "https://7captur.com",
  trailingSlash: "always",
  // Static redirect pages (GitHub Pages cannot send a server 301).
  redirects: {
    "/product/": "/how-it-works/", "/platform/": "/how-it-works/",
    // Retired self-serve routes
    "/signup/": "/audit/", "/trial/": "/audit/", "/get-started/": "/audit/", "/demo/": "/audit/",
    "/blog/": "/resources/", "/articles/": "/resources/",
    // Retired guides
    "/articles/assisted-execution-vs-full-automation/": "/resources/",
    "/articles/track-sales-from-social-media-posts/": "/resources/",
    "/articles/cost-per-enquiry-how-to-calculate/": "/resources/",
    "/articles/likes-vs-sales-engagement-metrics/": "/resources/",
    "/articles/track-whatsapp-and-dm-sales/": "/resources/",
    "/articles/meta-vs-google-ads-first-500/": "/resources/",
    // Older guides that map to a live one
    "/articles/why-your-meta-roas-is-lying-to-you/": "/articles/roas-vs-profit-break-even-roas/",
    "/articles/the-30-day-return-lag-problem/": "/articles/roas-vs-profit-break-even-roas/",
    "/articles/cogs-adjusted-profitability/": "/articles/true-roas-explained/",
    "/articles/attribution-double-counting/": "/articles/ad-performance-tracking/",
    "/articles/real-time-vs-weekly-ad-optimization/": "/articles/ad-spend-management/",
  },
  build: { format: "directory" },
  integrations: [react()],
});
