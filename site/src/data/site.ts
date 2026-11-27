// Transitional aliases for pages not yet rebuilt. Delete once nothing imports this file.
import { AUDIT_CTA, siteConfig } from "../config/siteConfig";
export const CTA = AUDIT_CTA;
export const BOOK = { label: "Email us", href: `mailto:${siteConfig.founder.email}` };
export const LOGIN = { label: "Client Portal Login", href: siteConfig.clientPortalUrl };
export const NEWSLETTER = siteConfig.newsletter;
