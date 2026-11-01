import { useState } from "react";
import plans from "../data/plans.json";
const dur = (d: number) => (d < 365 ? `${Math.round(d / 30)} months` : `${Math.round(d / 365)} years`);

type Plan = { name: string; priceMonthly?: number; priceMonthlyFrom?: number; spendBandUsd?: { min: number; max: number }; maxConnections: number; maxBusinesses: number; importsPerMonth: number; historyDays: number; recommendations: { weekly: number } };
const P = plans.plans as Record<string, Plan>;
const BANDS = [
  { id: "pro_growth", label: "Under $15k", sub: "Under $15,000 a month in ad spend" },
  { id: "pro_scale", label: "$15k to $30k", sub: "$15,000 to $30,000 a month in ad spend" },
  { id: "pro_pro", label: "$30k to $50k", sub: "$30,000 to $50,000 a month in ad spend" },
] as const;

/** Pro price follows monthly ad spend. Prices come from the same plans.json the app uses. */
export default function ProPlan({ signupUrl }: { signupUrl: string }) {
  const [id, setId] = useState<(typeof BANDS)[number]["id"]>("pro_growth");
  const band = BANDS.find((b) => b.id === id)!;
  return (
    <div className="plan is-lit">
      <div className="plan-name">Pro <span className="plan-badge">By ad spend</span></div>
      <div className="bands-select" role="group" aria-label="Monthly ad spend">
        {BANDS.map((b) => (
          <button key={b.id} type="button" aria-pressed={b.id === id} onClick={() => setId(b.id)}>{b.label}</button>
        ))}
      </div>
      <div className="plan-price">${P[id].priceMonthly}<small>a month</small></div>
      <p className="plan-sub">{band.sub}</p>
      <p className="plan-note">Billed monthly. Cancel anytime.</p>
      <ul>
        <li>{P[id].recommendations.weekly} recommendations a week</li>
        <li>{P[id].importsPerMonth} imports a month</li>
        <li>{dur(P[id].historyDays)} of history</li>
        <li>Up to {P[id].maxConnections} connected platforms</li>
        <li>Up to {P[id].maxBusinesses} businesses</li>
        <li>Same recommendation engine as every plan</li>
      </ul>
      <a className="btn btn-primary btn-block" href={signupUrl}>Start free</a>
    </div>
  );
}
