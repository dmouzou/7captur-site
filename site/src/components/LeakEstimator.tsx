import { useState } from "react";
import { LIMITS, clamp, estimate, type Key, type Inputs } from "../lib/estimator";
import { PRICING, usd } from "../config/siteConfig";

const FIELDS: { key: Key; label: string; prefix?: string; suffix?: string; ends: [string, string] }[] = [
  { key: "spend", label: "Monthly ad spend", prefix: "$", ends: ["$10,000", "$200,000"] },
  { key: "roas", label: "Reported blended platform ROAS", suffix: "x", ends: ["1.5x", "6.0x"] },
  { key: "drag", label: "COGS, fees and refund drag (share of gross revenue)", suffix: "%", ends: ["40%", "85%"] },
  { key: "waste", label: "Estimated unprofitable campaign waste", suffix: "%", ends: ["5%", "30%"] },
];

const initial: Inputs = { spend: LIMITS.spend.initial, roas: LIMITS.roas.initial, drag: LIMITS.drag.initial, waste: LIMITS.waste.initial };
const money = (n: number) => `${n < 0 ? "−" : ""}$${Math.abs(Math.round(n)).toLocaleString("en-US")}`;

export default function LeakEstimator() {
  const [values, setValues] = useState<Inputs>(initial);
  // Text typed into a number box, kept until the field is left so partial entries are not rewritten.
  const [draft, setDraft] = useState<Partial<Record<Key, string>>>({});
  const r = estimate(values, PRICING.core.monthly);
  const fee = PRICING.core.monthly;

  const type = (key: Key, text: string) => {
    setDraft((d) => ({ ...d, [key]: text }));
    const n = Number(text);
    if (text !== "" && n >= LIMITS[key].min && n <= LIMITS[key].max) setValues((v) => ({ ...v, [key]: n }));
  };
  const commit = (key: Key) => {
    const text = draft[key];
    if (text !== undefined && text !== "") setValues((v) => ({ ...v, [key]: clamp(key, Number(text)) }));
    setDraft((d) => ({ ...d, [key]: undefined }));
  };

  return (
    <div className="d-est">
      <div className="d-est-inputs">
        {FIELDS.map((f) => {
          const l = LIMITS[f.key];
          return (
            <div key={f.key}>
              <div className="d-field-head">
                <label htmlFor={`est-${f.key}`}>{f.label}</label>
                <span className="d-numbox">
                  {f.prefix}
                  <input
                    id={`est-${f.key}`} type="number" inputMode="decimal" min={l.min} max={l.max} step="any"
                    value={draft[f.key] ?? (f.key === "roas" ? values.roas.toFixed(1) : String(values[f.key]))}
                    onChange={(e) => type(f.key, e.target.value)}
                    onBlur={() => commit(f.key)}
                    onKeyDown={(e) => { if (e.key === "Enter") commit(f.key); }}
                  />
                  {f.suffix}
                </span>
              </div>
              <input
                className="d-range" type="range" min={l.min} max={l.max} step={l.step} value={values[f.key]}
                aria-label={`${f.label} slider`}
                onChange={(e) => { setDraft((d) => ({ ...d, [f.key]: undefined })); setValues((v) => ({ ...v, [f.key]: Number(e.target.value) })); }}
              />
              <div className="d-range-ends" aria-hidden="true"><span>{f.ends[0]}</span><span>{f.ends[1]}</span></div>
            </div>
          );
        })}
      </div>

      <div className="d-est-output">
        <div className="d-out-block">
          <h3>Platform view vs. estimated reality, per month</h3>
          <dl className="d-lines">
            <div><dt>Platform-reported gross revenue</dt><dd>{money(r.revenue)}</dd></div>
            <div><dt>Left after COGS, fees and refunds</dt><dd>{money(r.afterCosts)}</dd></div>
            <div><dt>Less ad spend</dt><dd>{money(-values.spend)}</dd></div>
            <div className="total"><dt><strong>Estimated true contribution</strong></dt><dd className={r.contribution < 0 ? "d-neg" : "d-pos"}>{money(r.contribution)}</dd></div>
          </dl>
        </div>
        <div className="d-out-block">
          <h3>Estimated capital leaking into negative-margin campaigns</h3>
          <span className="d-big" aria-live="polite">{money(r.leak)}<span className="d-sr"> per month</span></span>
          <p className="d-fine">{money(values.spend)} monthly spend × {values.waste}% waste</p>
        </div>
        <div className="d-out-block">
          <h3>Payback against the flat Core Desk fee</h3>
          <dl className="d-lines">
            <div><dt>Core Desk, per month</dt><dd>{usd(fee)}</dd></div>
            <div><dt>Estimated leak as a multiple of the fee</dt><dd>{r.payback.toFixed(1)}x</dd></div>
          </dl>
          <p className="d-fine">
            {r.payback >= 1
              ? `Recovering ${Math.ceil(100 / r.payback)}% of the estimated leak would cover the fee.`
              : "The estimated leak is smaller than the fee at these inputs."}
            {values.spend < 20000 && " The desk is built for brands spending $20K–$150K a month."}
            {values.spend > 60000 && values.spend <= 150000 && ` Above $60K a month, Scale Desk (${usd(PRICING.scale.monthly)}) is usually the closer fit.`}
            {values.spend > 150000 && ` Above $150K a month, scopes are bespoke, from ${usd(PRICING.overflowFrom)}.`}
          </p>
        </div>
        <p className="d-fine">Illustrative estimate only, calculated from the numbers you enter. It does not measure your account and it is not a guarantee of savings.</p>
        <a className="d-btn d-btn-primary d-btn-block" href={`/audit/?spend=${Math.round(values.spend)}`}>Audit My Actual Past 60 Days Free →</a>
      </div>
    </div>
  );
}
