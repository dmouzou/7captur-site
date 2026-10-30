import type { APIRoute } from "astro";

// Every .astro page except 404 is listed. Priorities keep the existing sitemap's values.
const PRIORITY: Record<string, [string, string]> = { "/": ["weekly", "1.0"], "/pricing/": ["monthly", "0.9"], "/how-it-works/": ["monthly", "0.9"] };
export const GET: APIRoute = ({ site }) => {
  const files = Object.keys(import.meta.glob("./**/*.astro"));
  const paths = files
    .map((f) => f.replace("./", "/").replace(/index\.astro$/, "").replace(/\.astro$/, "/"))
    .filter((p) => !p.startsWith("/404")).sort();
  const origin = (site ?? new URL("https://7captur.com")).origin;
  const body = paths.map((p) => {
    const [freq, pri] = PRIORITY[p] ?? (p.startsWith("/articles/") && p !== "/articles/" ? ["yearly", "0.6"] : ["monthly", "0.7"]);
    return `  <url>\n    <loc>${origin}${p}</loc>\n    <changefreq>${freq}</changefreq>\n    <priority>${pri}</priority>\n  </url>`;
  }).join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`, { headers: { "Content-Type": "application/xml" } });
};
