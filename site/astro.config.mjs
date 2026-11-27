import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// Output is plain static HTML; React is used only for interactive islands.
export default defineConfig({
  site: "https://7captur.com",
  trailingSlash: "always",
  // Removed because it described ad execution, which the product does not do.
  redirects: { "/articles/assisted-execution-vs-full-automation/": "/resources/", "/how-it-works/": "/product/", "/platform/": "/product/", "/articles/": "/resources/",
    "/articles/why-your-meta-roas-is-lying-to-you/": "/articles/roas-vs-profit-break-even-roas/",
    "/articles/the-30-day-return-lag-problem/": "/articles/roas-vs-profit-break-even-roas/",
    "/articles/cogs-adjusted-profitability/": "/articles/roas-vs-profit-break-even-roas/",
    "/articles/attribution-double-counting/": "/articles/track-sales-from-social-media-posts/",
    "/articles/real-time-vs-weekly-ad-optimization/": "/articles/likes-vs-sales-engagement-metrics/",
  },
  build: { format: "directory" },
  integrations: [react()],
});
