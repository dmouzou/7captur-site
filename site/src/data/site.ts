export const APP_URL = "https://app.7captur.com";
export const NAV = [
  { href: "/how-it-works/", label: "How it works" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/security/", label: "Security" },
  { href: "/articles/", label: "Articles" },
  { href: "/about/", label: "About" },
];
export const CTA = { label: "Start free", href: `${APP_URL}/signup` };
export const LOGIN = { label: "Log in", href: `${APP_URL}/login` };

// Mega-menu. Every link points at an existing page or home-page anchor. No new pages.
export const MEGA = [
  { label: "Product", items: [
    { href: "/how-it-works/", title: "How it works", text: "From the data you have to a clear next step." },
    { href: "/#evidence", title: "Evidence first", text: "Advice that matches what your data can support." },
    { href: "/#connections", title: "Connections", text: "What connects directly, what imports, what you type." },
    { href: "/security/", title: "Security", text: "Read-only access and encrypted credentials." },
  ] },
  { label: "Solutions", items: [
    { href: "/#audiences", title: "Social-first sellers", text: "Instagram, TikTok, WhatsApp and DMs." },
    { href: "/#audiences", title: "Resellers", text: "Know what sells before you restock." },
    { href: "/#audiences", title: "Services and local", text: "Calls, bookings and visits as outcomes." },
    { href: "/#audiences", title: "E-commerce brands", text: "Store and ads, after your declared costs." },
  ] },
  { label: "Pricing", href: "/pricing/" },
  { label: "Resources", items: [
    { href: "/articles/", title: "Articles", text: "Plain-language notes on measuring marketing." },
    { href: "/contact/", title: "Contact", text: "Ask us a question directly." },
  ] },
  { label: "Company", items: [
    { href: "/about/", title: "About", text: "Why 7Captur exists." },
    { href: "/security/", title: "Security", text: "How we handle your data." },
  ] },
] as { label: string; href?: string; items?: { href: string; title: string; text: string }[] }[];
