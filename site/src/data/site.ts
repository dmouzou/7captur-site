export const APP_URL = "https://app.7captur.com";
export const NAV = [
  { href: "/platform/", label: "Platform" },
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
  { label: "Platform", href: "/platform/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Resources", href: "/resources/" },
  { label: "About", href: "/about/" },
  { label: "Security", href: "/security/" },
  { label: "Contact", href: "/contact/" },
] as { label: string; href: string; items?: { href: string; title: string; text: string }[] }[];

// Second call to action. Replace href with your booking link (Calendly, Cal.com, etc.) when you have one.
export const BOOK = { label: "Book a call", href: "/contact/" };
// Newsletter form posts to this Mailchimp list (same list as the Resources page).
export const NEWSLETTER = { action: "https://7captur.us5.list-manage.com/subscribe/post?u=e666602be2ab1c85a17cb1b80&id=2691f979b1&f_id=0077c2e1f0", honeypot: "b_e666602be2ab1c85a17cb1b80_2691f979b1" };
