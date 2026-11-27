// Validation for the 60-Day Audit request form.
const FREE_MAIL = ["gmail.com", "googlemail.com", "outlook.com", "hotmail.com", "live.com", "msn.com", "yahoo.com", "yahoo.co.uk", "ymail.com", "icloud.com", "me.com", "mac.com", "aol.com", "proton.me", "protonmail.com", "gmx.com", "gmx.net", "mail.com", "yandex.com", "zoho.com", "hey.com", "fastmail.com", "tutanota.com", "tuta.io", "qq.com", "163.com", "126.com", "web.de"];

export interface AuditRequest {
  name: string; email: string; store_url: string; platform: string; spend: string; channels: string[];
}
export type AuditField = keyof AuditRequest;

// Returns the first problem per field, in form order. An empty object means valid.
export function validateAudit(r: AuditRequest): Partial<Record<AuditField, string>> {
  const errors: Partial<Record<AuditField, string>> = {};
  if (!r.name.trim()) errors.name = "Enter your full name.";
  const email = r.email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid work email, like you@yourstore.com.";
  else if (FREE_MAIL.includes(email.split("@")[1].toLowerCase())) errors.email = "Use your work email, like you@yourstore.com.";
  if (!/^(https?:\/\/)?[^\s/.]+(\.[^\s/.]+)+(\/\S*)?$/i.test(r.store_url.trim())) errors.store_url = "Enter your store address, like yourstore.com.";
  if (!r.platform) errors.platform = "Choose your store platform.";
  if (!r.spend) errors.spend = "Choose your monthly ad spend.";
  if (!r.channels.length) errors.channels = "Select at least one ad channel.";
  return errors;
}
