import type { APIRoute } from "astro";
import { ARTICLES } from "../data/articles";
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
export const GET: APIRoute = () => {
  const items = ARTICLES.map((a) => `  <item><title>${esc(a.title)}</title><link>https://7captur.com/articles/${a.slug}/</link><guid>https://7captur.com/articles/${a.slug}/</guid><pubDate>${new Date(a.published + "T00:00:00Z").toUTCString()}</pubDate><description>${esc(a.description)}</description></item>`).join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>7Captur Resources</title><link>https://7captur.com/resources/</link><description>Guides on tracking sales, cost per enquiry and break-even ROAS.</description><language>en</language>\n${items}\n</channel></rss>\n`, { headers: { "Content-Type": "application/rss+xml" } });
};
