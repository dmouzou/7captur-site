// One place for what the public site claims about integrations (spec 4.1, AC-16).
// `verified: false` renders "Coming soon" instead of "Direct connection available".
// Flip to true only after the connection passes acceptance tests against a real account
// (OAuth, sync, error handling, disconnect) and credentials are configured in production.
export type IntegrationState = "direct" | "import" | "manual" | "planned";
export interface Integration { name: string; what: string; state: IntegrationState; verified: boolean }

export const INTEGRATIONS: Integration[] = [
  { name: "Shopify", what: "Orders and refunds, read-only", state: "direct", verified: false },
  { name: "Google Ads", what: "Campaign spend, clicks and impressions, read-only", state: "direct", verified: false },
  { name: "Meta Ads", what: "Spend and results from an Ads Manager CSV export", state: "import", verified: true },
  { name: "TikTok Ads", what: "Spend and results from a CSV export", state: "import", verified: true },
  { name: "Instagram, Facebook and TikTok posts", what: "Enter post metrics, import a file or upload a screenshot", state: "manual", verified: true },
  { name: "WhatsApp, DMs, phone and in-person", what: "Log enquiries and sales by hand", state: "manual", verified: true },
  { name: "WooCommerce", what: "Orders and refunds", state: "planned", verified: true },
];

export const stateLabel = (i: Integration): { text: string; cls: string } => {
  if (i.state === "direct") return i.verified ? { text: "Direct connection available", cls: "badge-live" } : { text: "Coming soon", cls: "badge-soon" };
  if (i.state === "import") return { text: "Import supported", cls: "badge-live" };
  if (i.state === "manual") return { text: "Manual tracking supported", cls: "badge-live" };
  return { text: "Planned", cls: "badge-soon" };
};
