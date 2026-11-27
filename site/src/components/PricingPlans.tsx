import { useState } from "react";

type Plan = { id: string; name: string; tag: string; fit: string; monthly: number; prepay: number; scope: string[] };
const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export default function PricingPlans({ plans, commitmentDays, discountPct, href }: { plans: Plan[]; commitmentDays: number; discountPct: number; href: string }) {
  const [prepay, setPrepay] = useState(false);
  return (
    <>
      <div className="d-billing">
        <div className="bill-toggle" role="group" aria-label="Billing option">
          <button type="button" aria-pressed={!prepay} onClick={() => setPrepay(false)}>Monthly</button>
          <button type="button" aria-pressed={prepay} onClick={() => setPrepay(true)}>3-month prepay <span>Save {discountPct}%</span></button>
        </div>
      </div>
      <div className="d-plans">
        {plans.map((p) => {
          const saving = p.monthly * 3 - p.prepay;
          return (
            <article key={p.id} className={`d-plan is-${p.id}`}>
              <h2>{p.name}</h2>
              <p className="d-plan-sub">{p.tag}</p>
              <p className="d-price" key={String(prepay)}>
                <span className="pp-swap">{usd(prepay ? p.prepay : p.monthly)}<small>{prepay ? "for 3 months, paid up front" : "/ month"}</small></span>
              </p>
              <p className="d-fine">
                {prepay
                  ? `Works out to ${usd(Math.round(p.prepay / 3))} a month. Covers your ${commitmentDays}-day initial commitment, then month-to-month.`
                  : `Flat fee, never % of spend. ${commitmentDays}-day initial commitment (billed monthly), then month-to-month.`}
              </p>
              <p className={`d-prepay${prepay ? " is-on" : ""}`}>
                <strong>{prepay ? `You save ${usd(saving)} (${discountPct}% off)` : `3-month prepay: ${usd(p.prepay)} up front`}</strong>
                {prepay ? ` against ${usd(p.monthly * 3)} billed monthly.` : ` (${discountPct}% off, save ${usd(saving)})`}
              </p>
              <p><strong>Built for:</strong> {p.fit}</p>
              <ul className="d-ticks">{p.scope.map((s) => <li key={s}><span>{s}</span></li>)}</ul>
              <a className="btn btn-primary btn-block" href={href}>Start with the free audit</a>
            </article>
          );
        })}
      </div>
    </>
  );
}
