import type { APIRoute } from "astro";
import { ARTICLES } from "../data/articles";

const TODAY = "2026-11-01";
const PRIORITY: Record<string, [string, string]> = { "/": ["weekly", "1.0"], "/pricing/": ["monthly", "0.9"], "/platform/": ["monthly", "0.9"], "/resources/": ["weekly", "0.8"] };
export const GET: APIRoute = ({ site }) => {
  const files = Object.keys(import.meta.glob("./**/*.astro"));
  const paths = files
    .map((f) => f.replace("./", "/").replace(/index\.astro$/, "").replace(/\.astro$/, "/"))
    .filter((p) => !p.startsWith("/404") && !p.includes("["))
    .concat(ARTICLES.map((a) => `/articles/${a.slug}/`)).sort();
  const origin = (site ?? new URL("https://7captur.com")).origin;
  const body = paths.map((p) => {
    const art = ARTICLES.find((a) => `/articles/${a.slug}/` === p);
    const [freq, pri] = PRIORITY[p] ?? (art ? ["monthly", "0.7"] : ["monthly", "0.6"]);
    return `  <url>\n    <loc>${origin}${p}</loc>\n    <lastmod>${art ? art.modified : TODAY}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${pri}</priority>\n  </url>`;
  }).join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`, { headers: { "Content-Type": "application/xml" } });
};
