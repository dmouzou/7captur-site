// Ad Leak Estimator maths. Pure functions, shared by the homepage and /ad-budget-check/.
export const LIMITS = {
  spend: { min: 10000, max: 200000, step: 500, initial: 40000 },
  roas: { min: 1.5, max: 6, step: 0.1, initial: 3 },
  drag: { min: 40, max: 85, step: 1, initial: 68 },
  waste: { min: 5, max: 30, step: 1, initial: 15 },
};
export type Key = keyof typeof LIMITS;
export type Inputs = Record<Key, number>;

export const clamp = (key: Key, value: number) => {
  const l = LIMITS[key];
  return Number.isFinite(value) ? Math.min(l.max, Math.max(l.min, value)) : l.initial;
};

export function estimate(inputs: Inputs, deskFee: number) {
  const revenue = inputs.spend * inputs.roas;
  const afterCosts = revenue * (1 - inputs.drag / 100);
  const contribution = afterCosts - inputs.spend;
  const leak = inputs.spend * (inputs.waste / 100);
  return { revenue, afterCosts, contribution, leak, payback: leak / deskFee };
}

// Reads ?spend=40000 (used by /audit/). Returns null when absent or unusable.
export function spendFromQuery(search: string): number | null {
  const raw = new URLSearchParams(search).get("spend");
  if (raw === null || !/^\d{1,9}$/.test(raw)) return null;
  const n = Number(raw);
  return n > 0 ? n : null;
}

export const SPEND_BANDS = ["Under $20K", "$20K–$50K", "$50K–$100K", "$100K+"] as const;
export const spendBand = (spend: number) =>
  SPEND_BANDS[spend < 20000 ? 0 : spend < 50000 ? 1 : spend < 100000 ? 2 : 3];
