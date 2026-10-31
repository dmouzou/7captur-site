import { useEffect, useRef, useState } from "react";
import { RecCard, ProvTable, EvidenceMeter, ImportPreview } from "./Mockups";

const TABS = [
  {
    id: "social", label: "Social-first sellers",
    title: "Sell through DMs? Start there.",
    text: "Type in your posts, promotions, enquiries and orders. Aggregate numbers are fine. You get a clear next step, and a plain note on what the data cannot tell you yet.",
    points: ["No website or ad account needed", "Sales from WhatsApp and DMs count as unknown source until you link them", "Small tests, not budget leaps"],
    mock: () => <RecCard move="Test the studio tour reel again for five days. Keep the budget where it is." why="It brought more enquiries per dollar than the comparison post in the data you entered." unknown="Enquiries are not yet tied to confirmed orders." next="Spend, enquiries and confirmed orders for the same five days." tags={["Evidence: partial", "Source: entered by you"]} />,
  },
  {
    id: "resellers", label: "Resellers",
    title: "Know what sells before you restock.",
    text: "Record what you spend and what moves. Compare content and promotions without store software.",
    points: ["Import a spreadsheet instead of retyping", "Mixed sources stay labelled", "Missing costs stay unknown, never zero"],
    mock: () => <ImportPreview />,
  },
  {
    id: "services", label: "Services and local",
    title: "Count calls, bookings and visits.",
    text: "Outcomes are not always orders. Log the enquiries that matter and see which posts and promotions bring them.",
    points: ["Calls, bookings and walk-ins as outcomes", "Cost per enquiry where spend is known", "A weekly summary you can read in a minute"],
    mock: () => <ProvTable />,
  },
  {
    id: "ecom", label: "E-commerce brands",
    title: "Go deeper when your data does.",
    text: "Connect your store and ads where available, add returns and costs, and see performance after the costs you declare. Deeper data unlocks deeper calculations.",
    points: ["Store and ad data labelled as connected", "Return after declared costs, not before", "Budget suggestions only when inputs are reliable"],
    mock: () => <EvidenceMeter level={3} />,
  },
];

export default function Tabs() {
  const [i, setI] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const t = TABS[i];
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);
  useEffect(() => {
    const place = () => { const b = refs.current[i]; if (b) setPill({ left: b.offsetLeft, width: b.offsetWidth }); };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [i]);
  const onKey = (e: React.KeyboardEvent) => {
    let n = i;
    if (e.key === "ArrowRight") n = (i + 1) % TABS.length;
    else if (e.key === "ArrowLeft") n = (i + TABS.length - 1) % TABS.length;
    else return;
    e.preventDefault(); setI(n); refs.current[n]?.focus();
  };
  return (
    <div className="tabs">
      <div className={`tab-list${pill ? " ready" : ""}`} role="tablist" aria-label="Who 7Captur is for" onKeyDown={onKey}>
        {pill && <span className="tab-pill" style={{ transform: `translateX(${pill.left}px)`, width: pill.width }} aria-hidden="true" />}
        {TABS.map((x, n) => (
          <button key={x.id} ref={(el) => { refs.current[n] = el; }} role="tab" id={`tab-${x.id}`} aria-selected={n === i} aria-controls="tab-panel" tabIndex={n === i ? 0 : -1} onClick={() => setI(n)}>{x.label}</button>
        ))}
      </div>
      <div className="tab-panel" id="tab-panel" role="tabpanel" aria-labelledby={`tab-${t.id}`} key={t.id}>
        <div className="tab-copy">
          <h3>{t.title}</h3>
          <p>{t.text}</p>
          <ul className="ticks">{t.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
        <div className="tab-mock">{t.mock()}</div>
      </div>
    </div>
  );
}
