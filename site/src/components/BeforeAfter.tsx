import { useState } from "react";

const MESS = [
  ["Ads Manager export (2).csv", "-8deg", "6%", "10%"], ["Shopify orders.csv", "6deg", "58%", "6%"], ["Spreadsheet v7 FINAL", "-3deg", "30%", "34%"],
  ["Refunds: how many?", "9deg", "64%", "40%"], ["Agency screenshot", "-6deg", "8%", "62%"], ["Which SKUs have COGS?", "4deg", "44%", "70%"], ["Costs: unknown", "-10deg", "70%", "74%"],
];

export default function BeforeAfter() {
  const [v, setV] = useState(50);
  return (
    <div className="ba3">
      <div className="ba3-stage" style={{ ["--cut" as string]: `${v}%` }}>
        <div className="ba3-layer ba3-before" aria-hidden="true">
          <span className="ba3-tag">Before</span>
          {MESS.map((m) => <span key={m[0]} className="scrap" style={{ transform: `rotate(${m[1]})`, left: m[2], top: m[3] }}>{m[0]}</span>)}
        </div>
        <div className="ba3-layer ba3-after">
          <span className="ba3-tag">After</span>
          <div className="ba3-clean" style={{ opacity: Math.max(0, Math.min(1, (78 - v) / 28)), transform: `translateX(${Math.max(0, v - 50) * 0.6}px)` }}>
            <b>This week's call</b>
            <p>Cut Meta Retargeting Catalogue by 40%. Reported ROAS looks fine, but the true margin is negative.</p>
            <ul><li>True margin after refunds</li><li>What we do not know</li><li>Evidence grade</li></ul>
          </div>
        </div>
        <span className="ba3-handle" aria-hidden="true"><i /></span>
        <input type="range" min={5} max={95} value={v} onChange={(e) => setV(Number(e.target.value))} aria-label="Drag to compare before and after" className="ba3-range" />
      </div>
      <p className="fine">Drag the handle.</p>
    </div>
  );
}
