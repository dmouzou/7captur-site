import type { ReactNode } from "react";

export function Win({ title, children, label = "Illustrative sample data" }: { title: string; children: ReactNode; label?: string }) {
  return (
    <div className="win" role="group" aria-label={`${title} (illustrative)`}>
      <div className="win-bar">
        <i /><i /><i />
        <span className="win-title">{title}</span>
        <span className="badge badge-sample">{label}</span>
      </div>
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
      <p className="mk-move">{move}</p>
      <dl className="mk-dl">
        <dt>Why</dt><dd>{why}</dd>
        <dt>What we do not know</dt><dd>{unknown}</dd>
        <dt>What to record next</dt><dd>{next}</dd>
      </dl>
      <div className="mk-tags">{tags.map((t) => <span key={t}>{t}</span>)}</div>
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
  return (
    <Win title="This week">
      <table className="mk-table">
        <thead><tr><th>Item</th><th>Spend or sales</th><th>Result</th><th>Where it came from</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}><td>{r[0]}</td><td className="num">{r[1]}</td><td>{r[2]}</td><td><Src k={r[3]} /></td></tr>
          ))}
        </tbody>
      </table>
      <p className="mk-note">Sales with an unknown source still count toward your totals. They are never credited to a post by guesswork.</p>
    </Win>
  );
}

export function EvidenceMeter({ level = 2 }: { level?: 1 | 2 | 3 }) {
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
  return (
    <Win title="What your data supports">
      <ol className="mk-ladder">
        {steps.map((s, i) => (
          <li key={s[0]} className={i + 1 <= level ? "on" : ""}>
            <span className="mk-bar" />
            <div><b>{s[0]}</b><span>{s[1]}</span></div>
            <em>{i + 1 <= level ? "Have it" : "Not yet"}</em>
          </li>
        ))}
      </ol>
      <p className="mk-note"><b>Right now:</b> {says[level - 1]}</p>
    </Win>
  );
}

export function ImportPreview() {
  const cols: [string, string][] = [["Campaign name", "Item"], ["Amount spent (USD)", "Spend"], ["Results", "Enquiries"], ["Reporting starts", "Date"]];
  return (
    <Win title="Import preview">
      <p className="mk-note" style={{ marginTop: 0 }}>We matched 4 of 5 columns from your Ads Manager export. Check them before anything is saved.</p>
      <ul className="mk-map">
        {cols.map((c) => (<li key={c[0]}><span>{c[0]}</span><i aria-hidden="true">to</i><b>{c[1]}</b></li>))}
        <li className="warn"><span>Attribution setting</span><i aria-hidden="true">to</i><b>Not mapped</b></li>
      </ul>
      <div className="mk-actions"><span className="mk-btn on">Save 38 rows</span><span className="mk-btn">Fix mapping</span></div>
    </Win>
  );
}

export function Digest() {
  return (
    <Win title="Weekly summary">
      <div className="mk-digest">
        <div><b>What changed</b><p>Enquiries per dollar of promotion rose on video posts. Static posts stayed flat.</p></div>
        <div><b>What you tried</b><p>One small test on the studio tour reel, 5 days.</p></div>
        <div><b>What is missing</b><p>Confirmed orders for 3 of 5 enquiries. Costs for two products.</p></div>
        <div><b>Where to focus</b><p>Record orders against the test before changing spend.</p></div>
      </div>
    </Win>
  );
}
