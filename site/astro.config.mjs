import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// Output is plain static HTML; React is used only for interactive islands.
export default defineConfig({
  site: "https://7captur.com",
  trailingSlash: "always",
  // Removed because it described ad execution, which the product does not do.
  redirects: { "/articles/assisted-execution-vs-full-automation/": "/articles/" },
  build: { format: "directory" },
  integrations: [react()],
});
