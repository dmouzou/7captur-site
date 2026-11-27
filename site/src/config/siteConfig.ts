// Single source of truth for editable business details.
// A value left as its [PLACEHOLDER] counts as unset and stays hidden on the public site.
// Fill a value in here and every page picks it up.

export const siteConfig = {
  name: "7Captur",
  url: "https://7captur.com",
  thesis: "One honest weekly budget decision, built on true margin.",

  // Cal.com or Calendly link. Shows the booking button on /audit/ once set.
  schedulingUrl: "[SCHEDULING_LINK_URL]",
  // 90-second walkthrough embed URL. The video slot on /audit/ is not rendered while unset.
  auditWalkthroughVideoUrl: "[AUDIT_WALKTHROUGH_VIDEO_URL]",

  // Default contact address for the whole site. Privacy requests use privacyEmail.
  contactEmail: "hello@7captur.com",
  privacyEmail: "privacy@7captur.com",

  // The founder address is shown only inside the founder details on /about/.
  founder: {
    name: "Daniel Mouzou",
    role: "Founder, 7Captur",
    email: "daniel@7captur.com",
    photo: "[FOUNDER_PHOTO]", // path under /public, for example "/assets/founder.webp"
    bio: "[FOUNDER_BIO_SHORT]",
    linkedin: "[FOUNDER_LINKEDIN_URL]",
  },

  // Invite-only client portal. Linked quietly in the footer.
  clientPortalUrl: "https://app.7captur.com/login",

  // Formspree form that receives audit requests. Set the notification address inside Formspree.
  formEndpoint: "https://formspree.io/f/xkoqapnn",

  newsletter: {
    action: "https://7captur.us5.list-manage.com/subscribe/post?u=e666602be2ab1c85a17cb1b80&id=2691f979b1&f_id=0077c2e1f0",
    honeypot: "b_e666602be2ab1c85a17cb1b80_2691f979b1",
  },
};

export const isSet = (value?: string): value is string => !!value && !/^\[[A-Z0-9_]+\]$/.test(value.trim());

// Public pricing in US dollars. Only publishable figures belong in this file.
export const PRICING = {
  commitmentDays: 90,
  prepayDiscountPct: 20,
  overflowFrom: 5000,
  core: { name: "Core Desk", monthly: 2500, prepay: 6000 },
  scale: { name: "Scale Desk", monthly: 3500, prepay: 8400 },
};
export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
export const prepaySaving = (plan: { monthly: number; prepay: number }) => plan.monthly * 3 - plan.prepay;

export const AUDIT_CTA = { label: "Free 60-Day Audit", href: "/audit/" };

export const NAV = [
  { href: "/how-it-works/", label: "How It Works" },
  { href: "/sample-memo/", label: "Sample Memo" },
  { href: "/ad-budget-check/", label: "Leak Estimator" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/resources/", label: "Resources" },
  { href: "/about/", label: "About" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { href: "/how-it-works/", label: "How It Works" },
      { href: "/sample-memo/", label: "Sample Memo" },
      { href: "/ad-budget-check/", label: "Leak Estimator" },
      { href: "/pricing/", label: "Pricing" },
      { href: "/security/", label: "Security" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about/", label: "About" },
      { href: "/resources/", label: "Resources" },
      { href: "/audit/", label: "Free 60-Day Audit" },
      { href: "/about/#contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy/", label: "Privacy" },
      { href: "/terms-of-service/", label: "Terms" },
    ],
  },
];
