import { useEffect, useState } from "react";
import { RecCard } from "./Mockups";

const SLIDES = [
  { tag: "CUT", move: "Cut Meta Retargeting Catalogue by 40% ($4,480 less spend per 30 days). Reported ROAS looks fine, but the true margin is negative.", why: "Platform ROAS counts revenue before refunds, COGS, shipping and fees. After settled refunds, this group lost cash, with an 18.4% return rate on Bundle B.", unknown: "Nothing about this call is unknown. The refund window is settled and COGS is declared for every SKU in the group.", next: "Re-check the true margin on next Monday's memo.", tags: ["Evidence: high", "Source: Shopify, Meta, COGS sheet", "Refunds: settled"] },
  { tag: "HOLD", move: "Hold Google PMax Non-Brand. Do not scale it until the open refund window settles.", why: "It looks profitable now, but 14 days of the 30-day refund window are still open. Today's margin may shrink as refunds arrive.", unknown: "Refunds from the last 14 days have not landed yet, so the newest numbers can still move.", next: "Re-grade next Monday once the window closes.", tags: ["Evidence: moderate", "Source: Google Ads, Shopify", "Refunds: 14 days open"] },
  { tag: "HOLD & TEST", move: "Hold Meta Broad Hero Bundle and test a 15% budget increase on it.", why: "It leads on true net margin, with a healthy return after COGS, fees and settled refunds. A small capped test limits the downside.", unknown: "Whether the margin holds at a higher spend level. One test window will tell.", next: "Spend, orders and refunds for the test window, read on the Monday memo.", tags: ["Evidence: high", "Source: Meta, Shopify, COGS sheet", "Test: capped at +15%"] },
  { tag: "UNKNOWN", move: "Make no scale call on the 3 new SKUs until their costs are entered.", why: "They are missing from the COGS sheet. A missing cost is flagged as unknown. It is never treated as $0, which would make them look far too profitable.", unknown: "The true margin of those SKUs, and of any campaign that sells mostly them.", next: "Add unit cost for the 3 SKUs to your COGS template.", tags: ["Evidence: low", "Source: COGS sheet", "Costs: unknown"] },
];

export default function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % SLIDES.length), 9000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="carousel" aria-roledescription="carousel" aria-label="Example calls from a Monday memo">
      <div className="slides">
        {SLIDES.map((s, n) => (
          <div key={s.tag} className={`slide ${n === i ? "on" : n === (i + SLIDES.length - 1) % SLIDES.length ? "out" : ""}`} aria-hidden={n === i ? undefined : "true"}>
            <RecCard steps tag={s.tag} move={s.move} why={s.why} unknown={s.unknown} next={s.next} tags={s.tags} />
          </div>
        ))}
      </div>
    </div>
  );
}
