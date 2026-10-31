import { useEffect, useState } from "react";
import { RecCard } from "./Mockups";

const SLIDES = [
  { tag: "Social seller", move: "Run a small, time-limited test on the video that brought more enquiries per dollar spent. Do not raise the budget yet.", why: "In the data entered, this video produced more enquiries for each dollar of promotion than the comparison post. That is an early signal for your goal of more enquiries.", unknown: "Enquiries are not yet linked to confirmed orders, so we cannot say which post earned more revenue or profit.", next: "Spend, enquiries and confirmed orders over the same test window.", tags: ["Evidence: partial", "Source: entered by you", "Sales attribution: unknown"] },
  { tag: "Reseller", move: "Restock the two scents that sold out first. Wait on the third until you see another week of orders.", why: "Both scents had more orders for each dollar of promotion than the rest, and the sales were entered with order dates.", unknown: "Product costs are not entered, so we cannot say which scent earned more profit.", next: "Cost per unit for each scent, then orders for the next two weeks.", tags: ["Evidence: partial", "Source: entered by you", "Costs: unknown"] },
  { tag: "Local service", move: "Keep the Saturday offer running for two more weeks and ask every new caller how they found you.", why: "Calls rose on the two days after the offer post, compared with the two weeks before, in the calls you logged.", unknown: "Some calls have no source recorded, so we cannot say the post caused them.", next: "A source for each new call or booking, logged the same day.", tags: ["Evidence: partial", "Source: entered by you", "Call sources: incomplete"] },
  { tag: "E-commerce brand", move: "Hold spend on the spring campaign for one more week. Review the lowest-return campaign once refunds settle.", why: "After refunds and your declared product costs, three campaigns sit close together on return. The gap is too small to justify a budget move.", unknown: "Refunds from the last 30 days are still arriving, so the newest numbers may shift.", next: "Re-check when the 30-day return window closes.", tags: ["Evidence: strong", "Source: imported and entered", "Costs: declared"] },
];

export default function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % SLIDES.length), 9000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="carousel" aria-roledescription="carousel" aria-label="Example recommendations">
      <div className="slides">
        {SLIDES.map((s, n) => (
          <div key={s.tag} className={`slide ${n === i ? "on" : n === (i + SLIDES.length - 1) % SLIDES.length ? "out" : ""}`} aria-hidden={n === i ? undefined : "true"}>
            <RecCard steps tag={s.tag} move={s.move} why={s.why} unknown={s.unknown} next={s.next} tags={s.tags} />
          </div>
        ))}
      </div>
      <div className="dots" aria-hidden="true">{SLIDES.map((s, n) => <i key={s.tag} className={n === i ? "on" : ""} />)}</div>
    </div>
  );
}
