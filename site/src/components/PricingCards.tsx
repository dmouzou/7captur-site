import { useState } from "react";
import plans from "../data/plans.json";

const S = plans.plans.starter, G = plans.plans.growth;
const check = (n: number) => `${n} connected platform${n === 1 ? "" : "s"}`;
const ws = (n: number) => `${n} business workspace${n === 1 ? "" : "s"}`;

export default function PricingCards({ signupUrl }: { signupUrl: string }) {
  const [annual, setAnnual] = useState(true);
  const price = (p: typeof S) => (annual ? p.priceAnnualMonthly : p.priceMonthly);
  const bill = (p: typeof S) => (annual ? `Billed $${(p.priceAnnualMonthly * 12).toLocaleString("en-US")} a year` : "Billed monthly");
  return (
    <>
      <div className="bill-toggle" role="group" aria-label="Billing period">
        <button type="button" aria-pressed={!annual} onClick={() => setAnnual(false)}>Monthly</button>
        <button type="button" aria-pressed={annual} onClick={() => setAnnual(true)}>Annual <span>Save {plans.annualDiscountPercent}%</span></button>
      </div>
      <div className="plans-grid">
        <div className="plan">
          <div className="plan-name">Starter</div>
          <div className="plan-price">${price(S)}<small>a month</small></div>
          <p className="plan-sub">{bill(S)}. For regular marketing.</p>
          <ul>
            <li>Manual entry for posts, promotions, enquiries, sales and costs</li>
            <li>CSV import</li>
            <li>{S.aiFollowUps} AI follow-up credits a month</li>
            <li>{check(S.maxConnections)}</li>
            <li>{ws(S.maxBusinesses)}</li>
          </ul>
          <a className="btn btn-primary btn-block" href={signupUrl}>Start 14-day free trial</a>
        </div>
        <div className="plan is-lit">
          <div className="plan-name">Growth <span className="plan-badge">Most capacity</span></div>
          <div className="plan-price">${price(G)}<small>a month</small></div>
          <p className="plan-sub">{bill(G)}. For growing businesses.</p>
          <ul>
            <li>Everything in Starter</li>
            <li>Weekly summary with decision reviews</li>
            <li>10x Starter's weekly recommendations and imports</li>
            <li>{G.aiFollowUps} AI follow-up credits a month (10x Starter)</li>
            <li>{check(G.maxConnections)}</li>
            <li>{ws(G.maxBusinesses)}</li>
            <li>Priority support</li>
          </ul>
          <a className="btn btn-ghost btn-block" href={signupUrl}>Get Growth</a>
        </div>
        <div className="plan">
          <div className="plan-name">Custom</div>
          <div className="plan-price">Let's talk</div>
          <p className="plan-sub">For tailored setups and higher volume.</p>
          <ul>
            <li>Everything in Growth</li>
            <li>Platforms and business workspaces to fit you</li>
            <li>Tailored inputs and agreed workflows</li>
            <li>Priority support</li>
            <li>Monthly strategy call</li>
          </ul>
          <a className="btn btn-ghost btn-block" href="/contact/">Talk to us</a>
        </div>
      </div>
    </>
  );
}
