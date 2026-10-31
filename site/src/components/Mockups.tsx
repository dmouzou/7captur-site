import { useEffect, useState, type ReactNode } from "react";
import { Icon, type IconName } from "./Icons";

/** Steps 0..total, advancing every `ms`, holding at the end, then restarting. Static when motion is reduced. */
function useLoop(total: number, ms = 1100, hold = 2600) {
  const [n, setN] = useState(total);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let alive = true, t: number;
    const run = (i: number) => {
      if (!alive) return;
      setN(i);
      t = window.setTimeout(() => run(i >= total ? 0 : i + 1), i >= total ? hold : ms);
    };
    run(0);
    return () => { alive = false; clearTimeout(t); };
  }, [total, ms, hold]);
  return n;
}

export function Win({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="win" role="group" aria-label={title}>
      <div className="win-bar"><i /><i /><i /><span className="win-title">{title}</span><span className="win-live" aria-hidden="true" /></div>
      <div className="win-body">{children}</div>
    </div>
  );
}

const SRC: Record<string, string> = { entered: "Entered by you", imported: "Imported", screenshot: "Screenshot, confirmed", connected: "Connected", unknown: "Unknown source" };
export function Src({ k }: { k: keyof typeof SRC }) {
  return <span className={`src src-${k}`}><b />{SRC[k]}</span>;
}

export function RecCard({ move, why, unknown, next, tags }: { move: string; why: string; unknown: string; next: string; tags: string[] }) {
  return (
    <Win title="Your next move">
      <div className="loop">
        <p className="mk-move l1">{move}</p>
        <dl className="mk-dl">
          <dt className="l2">Why</dt><dd className="l2">{why}</dd>
          <dt className="l3">What we do not know</dt><dd className="l3">{unknown}</dd>
          <dt className="l4">What to record next</dt><dd className="l4">{next}</dd>
        </dl>
        <div className="mk-tags l5">{tags.map((t) => <span key={t}>{t}</span>)}</div>
      </div>
    </Win>
  );
}

export function ProvTable() {
  const rows: [string, string, string, keyof typeof SRC][] = [
    ["Reel: studio tour", "$42.00", "31 enquiries", "entered"],
    ["Story promo, week 2", "$118.50", "64 clicks", "imported"],
    ["Carousel: new scents", "$30.00", "18 enquiries", "screenshot"],
    ["Orders via WhatsApp", "$264.00", "9 orders", "unknown"],
  ];
  const n = useLoop(rows.length + 1);
  return (
    <Win title="This week">
      <table className="mk-table">
        <thead><tr><th>Item</th><th>Spend or sales</th><th>Result</th><th>Where it came from</th></tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r[0]} className={`row ${i < n ? "in" : ""} ${i === n - 1 ? "fresh" : ""}`}><td>{r[0]}</td><td className="num">{r[1]}</td><td>{r[2]}</td><td><Src k={r[3]} /></td></tr>
          ))}
        </tbody>
      </table>
      <p className={`mk-note fade ${n > rows.length ? "in" : ""}`}>Sales with an unknown source still count toward your totals. They are never credited to a post by guesswork.</p>
    </Win>
  );
}

export function EvidenceMeter({ level }: { level?: 1 | 2 | 3 }) {
  const steps = [
    ["Attention", "Views, reach, likes"],
    ["Enquiries and orders", "Messages, bookings, orders"],
    ["Revenue and costs", "Sales, refunds, fees, spend"],
  ];
  const says = [
    "Suggests which content to test again. Will not claim sales.",
    "Compares cost per enquiry or order when the numbers line up.",
    "Can discuss return after your declared costs and cautious budget moves.",
  ];
  const t = useLoop(3, 1700, 2800);
  const lv = level ?? (Math.max(1, t) as 1 | 2 | 3);
  return (
    <Win title="What your data supports">
      <ol className="mk-ladder">
        {steps.map((s, i) => (
          <li key={s[0]} className={i + 1 <= lv ? "on" : ""}>
            <span className="mk-bar" />
            <div><b>{s[0]}</b><span>{s[1]}</span></div>
            <em>{i + 1 <= lv ? "Have it" : "Not yet"}</em>
          </li>
        ))}
      </ol>
      <p className="mk-note"><b>Right now:</b> {says[lv - 1]}</p>
    </Win>
  );
}

export function ImportPreview() {
  const cols: [string, string][] = [["Campaign name", "Item"], ["Amount spent (USD)", "Spend"], ["Results", "Enquiries"], ["Reporting starts", "Date"]];
  const n = useLoop(cols.length + 2, 800, 2800);
  return (
    <Win title="Import preview">
      <p className="mk-note" style={{ marginTop: 0 }}>We matched 4 of 5 columns from your Ads Manager export. Check them before anything is saved.</p>
      <ul className="mk-map">
        {cols.map((c, i) => (<li key={c[0]} className={i < n ? "ok" : ""}><span>{c[0]}</span><i aria-hidden="true">to</i><b>{c[1]}</b></li>))}
        <li className={`warn ${n > cols.length ? "ok" : ""}`}><span>Attribution setting</span><i aria-hidden="true">to</i><b>Not mapped</b></li>
      </ul>
      <div className="mk-actions"><span className={`mk-btn ${n > cols.length + 1 ? "on" : ""}`}>Save 38 rows</span><span className="mk-btn">Fix mapping</span></div>
    </Win>
  );
}

export function Digest() {
  const items = [
    ["What changed", "Enquiries per dollar of promotion rose on video posts. Static posts stayed flat."],
    ["What you tried", "One small test on the studio tour reel, 5 days."],
    ["What is missing", "Confirmed orders for 3 of 5 enquiries. Costs for two products."],
    ["Where to focus", "Record orders against the test before changing spend."],
  ];
  const n = useLoop(items.length - 1, 1500, 1500);
  return (
    <Win title="Weekly summary">
      <div className="mk-digest">
        {items.map((d, i) => (<div key={d[0]} className={i === n ? "hot" : ""}><b>{d[0]}</b><p>{d[1]}</p></div>))}
      </div>
    </Win>
  );
}

export function HubMock() {
  const items: [IconName, string, string][] = [
    ["leads", "Record Leads", "WhatsApp & DM enquiries"],
    ["sales", "Record Sales", "Track orders & gross revenue"],
    ["spend", "Record Ad Spend", "Daily campaign expenditures"],
    ["posts", "Record Posts", "Social media creatives & hooks"],
    ["plug", "Integrations", "Connect Shopify & Google Ads"],
    ["camera", "Screenshot OCR", "Auto-extract ads & metrics"],
  ];
  const n = useLoop(items.length - 1, 1100, 1100);
  return (
    <Win title="Commercial Record Hub">
      <p className="mk-note" style={{ marginTop: 0, marginBottom: 14 }}>Direct data management</p>
      <ul className="hub">
        {items.map((it, i) => (
          <li key={it[1]} className={i === n ? "hot" : ""}>
            <span className="hub-ic"><Icon name={it[0]} size={22} /></span>
            <span><b>{it[1]}</b><em>{it[2]}</em></span>
          </li>
        ))}
      </ul>
    </Win>
  );
}
