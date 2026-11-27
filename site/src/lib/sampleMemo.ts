// Illustrative figures for the public sample memo. Not a client account.
export const SAMPLE_ROWS = [
  { channel: "Meta · Broad Hero Bundle", spend: 18400, roas: 2.9, net: 5240, call: "HOLD & TEST +15%", note: "High confidence" },
  { channel: "Meta · Retargeting Catalogue", spend: 11200, roas: 3.8, net: -2890, call: "CUT 40%", note: "High refund SKU skew" },
  { channel: "Google · PMax Non-Brand", spend: 13200, roas: 2.8, net: 3770, call: "HOLD", note: "14 days of refund lag still open" },
];
export const CUT_SHARE = 0.4;

export function sampleTotals(rows = SAMPLE_ROWS) {
  const spend = rows.reduce((t, r) => t + r.spend, 0);
  const net = rows.reduce((t, r) => t + r.net, 0);
  const revenue = rows.reduce((t, r) => t + r.spend * r.roas, 0);
  return { spend, net, roas: revenue / spend };
}
export const money = (n: number) => `$${Math.abs(Math.round(n)).toLocaleString("en-US")}`;
export const signed = (n: number) => `${n < 0 ? "−" : "+"}${money(n)}`;
