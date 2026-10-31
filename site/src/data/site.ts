export const APP_URL = "https://app.7captur.com";
export const NAV = [
  { href: "/platform/", label: "Platform" },
  { href: "/#audiences", label: "Solutions" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/resources/", label: "Resources" },
  { href: "/security/", label: "Security" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];
export const CTA = { label: "Start free", href: `${APP_URL}/signup` };
export const LOGIN = { label: "Log in", href: `${APP_URL}/login` };

// Top bar. Every label is a link; items with `items` also open a panel on hover or focus. No new pages.
export const MEGA = [
  { label: "Platform", href: "/platform/", items: [
    { href: "/platform/", title: "How the platform works", text: "From the data you have to a clear next step." },
    { href: "/platform/#engine", title: "The engine and Claude", text: "Rules decide. Claude explains." },
    { href: "/#evidence", title: "Evidence first", text: "Advice that matches what your data supports." },
    { href: "/#connections", title: "Connections", text: "What connects, what imports, what you type." },
  ] },
  { label: "Solutions", href: "/#audiences", items: [
    { href: "/#audiences", title: "Social-first sellers", text: "Instagram, TikTok, WhatsApp and DMs." },
    { href: "/#audiences", title: "Resellers", text: "Know what sells before you restock." },
    { href: "/#audiences", title: "Services and local", text: "Calls, bookings and visits as outcomes." },
    { href: "/#audiences", title: "E-commerce brands", text: "Store and ads, after your declared costs." },
  ] },
  { label: "Pricing", href: "/pricing/" },
  { label: "Resources", href: "/resources/" },
  { label: "Company", href: "/about/", items: [
    { href: "/about/", title: "About", text: "Why 7Captur exists." },
    { href: "/security/", title: "Security", text: "How we handle your data." },
    { href: "/contact/", title: "Contact", text: "Ask us a question directly." },
  ] },
] as { label: string; href: string; items?: { href: string; title: string; text: string }[] }[];

// Second call to action. Replace href with your booking link (Calendly, Cal.com, etc.) when you have one.
export const BOOK = { label: "Book a call", href: "/contact/" };
// Newsletter form posts to this Mailchimp list (same list as the Resources page).
export const NEWSLETTER = { action: "https://7captur.us5.list-manage.com/subscribe/post?u=e666602be2ab1c85a17cb1b80&id=2691f979b1&f_id=0077c2e1f0", honeypot: "b_e666602be2ab1c85a17cb1b80_2691f979b1" };
