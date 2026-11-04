import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Icon, type IconName } from "./Icons";

type Key = "add" | "understand" | "decide";

interface Card {
  key: Key;
  icon: IconName;
  title: string;
  short: string;
  chips: string[];
  heading: string;
  lead: string;
  points: string[];
  note: string;
  scenes: [() => ReactNode, () => ReactNode];
  sceneLabels: [string, string];
}

/* ------------------------------------------------------------------ illustrations ------------------------------------------------------------------ */

const MARK = "M99,121 L400,121 L400,170 L296,170 L296,328 L400,328 L400,378 L200,378 L200,170 L99,170 Z";

function AddWays() {
  const rows: [number, string, string, ReactNode][] = [
    [52, "Reel posted", "Type it in", <path key="i" d="M9 6.5v11l9-5.5z" className="lc-accfill" />],
    [124, "DM: is this available?", "Enquiry, by hand", <path key="i" d="M5 6h14v9H9l-4 3z" className="lc-accstroke" />],
    [196, "ads-export.csv", "Import a file", <path key="i" d="M7 4h7l4 4v12H7zM14 4v4h4" className="lc-accstroke" />],
    [268, "Shopify", "Connected", <image key="i" href="/assets/logos/brands/shopify.svg" x="3" y="3" width="18" height="18" />],
  ];
  return (
    <svg viewBox="0 0 560 320" role="img" aria-label="Four ways in: typing a post, logging an enquiry, importing a CSV file and connecting a store, all flowing into one set of records" className="lc-svg">
      <defs>
        <linearGradient id="lc-glow" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="var(--accent-fill)" stopOpacity=".35" /><stop offset="1" stopColor="var(--accent-fill)" stopOpacity="0" /></linearGradient>
      </defs>
      <ellipse cx="431" cy="160" rx="120" ry="125" fill="url(#lc-glow)" />
      {rows.map(([cy], n) => (
        <path key={n} d={`M196 ${cy} C 262 ${cy}, 262 160, 326 160`} className="lc-flow" style={{ animationDelay: `${n * -0.6}s` }} />
      ))}
      {rows.map(([cy, a, b, icon], n) => (
        <g key={n} transform={`translate(24 ${cy - 26})`}>
          <rect width="172" height="52" rx="14" className="lc-card" />
          <g transform="translate(14 14)"><rect width="24" height="24" rx="8" className="lc-tile" />{icon}</g>
          <text x="48" y="22" className="lc-t1">{a}</text>
          <text x="48" y="39" className="lc-t2">{b}</text>
        </g>
      ))}
      <g transform="translate(326 52)">
        <rect width="210" height="216" rx="18" className="lc-card lc-hub" />
        <g transform="translate(16 16)"><svg viewBox="99 121 301 257" width="20" height="17"><path d={MARK} className="lc-accfill" /></svg></g>
        <text x="44" y="30" className="lc-t1">Your records</text>
        {[["Posts", 12, 62], ["Enquiries", 31, 104], ["Sales", 18, 78], ["Spend", 0, 92], ["Costs", 6, 36]].map(([name, , w], r) => (
          <g key={r} transform={`translate(16 ${54 + r * 30})`}>
            <text y="12" className="lc-t2">{name as string}</text>
            <rect x="74" y="2" width="120" height="12" rx="6" className="lc-track" />
            <rect x="74" y="2" width={(w as number) * 1.1} height="12" rx="6" className="lc-accfill lc-grow" style={{ animationDelay: `${r * 0.12}s` }} />
          </g>
        ))}
      </g>
    </svg>
  );
}

function AddMatch() {
  const map: [string, string, boolean][] = [["Amount spent", "Spend", true], ["Campaign", "Campaign", true], ["Results", "Orders", false]];
  return (
    <svg viewBox="0 0 360 320" role="img" aria-label="An Ads Manager export with its columns matched to your fields, one flagged for you to check" className="lc-svg">
      <g transform="translate(20 24)">
        <rect width="320" height="272" rx="18" className="lc-card" />
        <g transform="translate(18 18)"><rect width="28" height="28" rx="9" className="lc-tile" /><path d="M10 6h7l5 5v12H10zM17 6v5h5" transform="translate(-1 -1)" className="lc-accstroke" /></g>
        <text x="56" y="36" className="lc-t1">ads-manager-export.csv</text>
        <text x="56" y="52" className="lc-t2">3 columns found</text>
        {map.map(([from, to, ok], n) => (
          <g key={n} transform={`translate(18 ${82 + n * 56})`}>
            <rect width="118" height="38" rx="10" className="lc-chip" />
            <text x="12" y="24" className="lc-t2 lc-ink">{from}</text>
            <path d="M126 19h38m-7-6 7 6-7 6" className="lc-arrow" />
            <rect x="172" width="112" height="38" rx="10" className={ok ? "lc-chip lc-ok" : "lc-chip lc-warn"} />
            <text x="184" y="24" className="lc-t2 lc-ink">{to}</text>
            <circle cx="272" cy="19" r="5" className={ok ? "lc-dot-ok" : "lc-dot-warn lc-pulse"} />
          </g>
        ))}
        <text x="18" y="256" className="lc-t2">Columns are matched for you to check.</text>
      </g>
    </svg>
  );
}

function UnderstandSources() {
  const rows: [string, string, string, string][] = [
    ["Ad spend", "$1,240", "Imported", "lc-src-imp"],
    ["Orders", "86", "Connected", "lc-src-con"],
    ["Refunds", "7", "Entered by you", "lc-src-ent"],
    ["Ad platform fees", "?", "Unknown source", "lc-src-unk"],
  ];
  return (
    <svg viewBox="0 0 560 320" role="img" aria-label="A table where every number shows where it came from, and a missing cost marked unknown instead of zero" className="lc-svg">
      <g transform="translate(24 24)">
        <rect width="512" height="272" rx="18" className="lc-card" />
        <text x="24" y="38" className="lc-t2">Number</text>
        <text x="236" y="38" className="lc-t2">Value</text>
        <text x="332" y="38" className="lc-t2">Where it came from</text>
        <path d="M24 52h464" className="lc-rule" />
        {rows.map(([label, value, src, cls], n) => (
          <g key={n} transform={`translate(0 ${64 + n * 44})`}>
            {n === 3 && <rect x="10" y="-6" width="492" height="44" rx="12" className="lc-ring lc-pulse" />}
            <text x="24" y="20" className="lc-t1">{label}</text>
            <text x="236" y="20" className={n === 3 ? "lc-t1 lc-muted" : "lc-t1"}>{value}</text>
            <rect x="332" y="2" width="148" height="26" rx="13" className={`lc-srcchip ${cls}`} />
            <circle cx="348" cy="15" r="4" className={`lc-srcdot ${cls}`} />
            <text x="360" y="19" className="lc-t2 lc-ink">{src}</text>
          </g>
        ))}
        <g transform="translate(24 256)"><text className="lc-t2" y="0">A missing cost stays unknown. It never becomes zero.</text></g>
      </g>
    </svg>
  );
}

function UnderstandEvidence() {
  return (
    <svg viewBox="0 0 360 320" role="img" aria-label="An evidence meter with three levels: thin, partial and strong, set to partial" className="lc-svg">
      <g transform="translate(20 24)">
        <rect width="320" height="272" rx="18" className="lc-card" />
        <text x="24" y="40" className="lc-t1">How strong is the evidence?</text>
        <g transform="translate(24 70)">
          {["Thin", "Partial", "Strong"].map((t, n) => (
            <g key={t} transform={`translate(${n * 92} 0)`}>
              <rect width="84" height="14" rx="7" className={n <= 1 ? "lc-accfill" : "lc-track"} opacity={n === 1 ? 1 : n === 0 ? 0.45 : 1} />
              <text x="42" y="40" textAnchor="middle" className={n === 1 ? "lc-t1" : "lc-t2"}>{t}</text>
            </g>
          ))}
          <g transform="translate(134 -12)"><path d="M0 0h16l-8 10z" className="lc-accfill" /></g>
        </g>
        <path d="M24 156h272" className="lc-rule" />
        <g transform="translate(24 176)">
          <circle cx="10" cy="10" r="10" className="lc-tile-fill" /><path d="M5.5 10.5l3 3 6-6.5" className="lc-check" />
          <text x="30" y="14" className="lc-t2 lc-ink">Costs and refunds counted</text>
          <g transform="translate(0 30)"><circle cx="10" cy="10" r="10" className="lc-tile-fill" /><path d="M5.5 10.5l3 3 6-6.5" className="lc-check" /><text x="30" y="14" className="lc-t2 lc-ink">Sales matched to spend</text></g>
          <g transform="translate(0 60)"><circle cx="10" cy="10" r="10" className="lc-ring-sm" /><text x="10" y="14" textAnchor="middle" className="lc-t2">?</text><text x="30" y="14" className="lc-t2 lc-ink">Shipping cost not recorded</text></g>
        </g>
      </g>
    </svg>
  );
}

function DecideCard() {
  return (
    <svg viewBox="0 0 560 320" role="img" aria-label="A recommendation card: one next move, why it is suggested, what is not known and what to record next" className="lc-svg">
      <g transform="translate(24 20)">
        <rect width="512" height="280" rx="18" className="lc-card" />
        <g transform="translate(18 18)"><circle r="4" cx="4" cy="4" className="lc-dotg" /><circle cx="18" cy="4" r="4" className="lc-dotg" /><circle cx="32" cy="4" r="4" className="lc-dotg" /></g>
        <text x="64" y="27" className="lc-t2 lc-ink">Your next move</text>
        <rect x="392" y="12" width="100" height="24" rx="12" className="lc-ok lc-chip" />
        <text x="442" y="28" textAnchor="middle" className="lc-t2 lc-ink">Social seller</text>
        <rect x="24" y="54" width="464" height="64" rx="12" className="lc-move" />
        <rect x="24" y="54" width="5" height="64" rx="2.5" className="lc-accfill" />
        <text x="44" y="82" className="lc-move-t">Test the studio tour reel again for five days.</text>
        <text x="44" y="104" className="lc-move-t">Keep the budget where it is.</text>
        {[["Why", "Most enquiries per dollar of your last four posts."], ["What we do not know", "Whether the enquiries turned into sales."], ["What to record next", "Sales from the next five days."]].map(([k, v], n) => (
          <g key={k} transform={`translate(24 ${142 + n * 34})`}>
            <text className="lc-t2 lc-ink" y="0">{k}</text>
            <text className="lc-t2" y="17">{v}</text>
          </g>
        ))}
        <g transform="translate(24 246)">
          <rect width="148" height="24" rx="12" className="lc-chip" />
          <circle cx="16" cy="12" r="6" className="lc-clock" /><path d="M16 8.5V12l2.4 1.4" className="lc-clock" />
          <text x="30" y="16" className="lc-t2 lc-ink">Review in 14 days</text>
          <text x="162" y="16" className="lc-t2">You choose. Nothing changes in your accounts.</text>
        </g>
      </g>
    </svg>
  );
}

function DecideLoop() {
  const nodes: [string, number][] = [["Decide", -90], ["Review", 30], ["Learn", 150]];
  const R = 86, cx = 180, cy = 150;
  return (
    <svg viewBox="0 0 360 320" role="img" aria-label="The loop: decide, review, learn, with a review date on every decision" className="lc-svg">
      <g transform="translate(20 24)">
        <rect width="320" height="272" rx="18" className="lc-card" />
      </g>
      <circle cx={cx} cy={cy} r={R} className="lc-orbit" />
      <circle cx={cx} cy={cy} r={R} className="lc-orbit-flow" />
      {nodes.map(([t, a]) => {
        const x = cx + R * Math.cos((a * Math.PI) / 180), y = cy + R * Math.sin((a * Math.PI) / 180);
        return (
          <g key={t} transform={`translate(${x} ${y})`}>
            <circle r="26" className="lc-node" />
            <text y="4" textAnchor="middle" className="lc-t1">{t}</text>
          </g>
        );
      })}
      <text x={cx} y={cy - 2} textAnchor="middle" className="lc-t2 lc-ink">Review date on</text>
      <text x={cx} y={cy + 14} textAnchor="middle" className="lc-t2 lc-ink">every decision</text>
      <g transform="translate(86 262)"><rect width="188" height="26" rx="13" className="lc-chip lc-ok" /><text x="94" y="17" textAnchor="middle" className="lc-t2 lc-ink">Weekly summary on Growth</text></g>
    </svg>
  );
}

/* ------------------------------------------------------------------ content ------------------------------------------------------------------ */

const CARDS: Card[] = [
  {
    key: "add",
    icon: "add",
    title: "Add",
    short: "Type it in, import a CSV file or an Ads Manager export, or connect a store or ad account where available.",
    chips: ["Posts", "Promotions", "Enquiries", "Sales", "Costs"],
    heading: "Start with the data you already have.",
    lead: "No clean spreadsheet needed. Type it in, drop in a file or connect a store or ad account, in any mix your week allows.",
    points: [
      "Record posts, promotions, enquiries, sales and costs, each in a few taps.",
      "Import a CSV file or an Ads Manager export. Columns are matched for you to check.",
      "Connect a store or ad account where available. Connections are read-only.",
      "Add more as you grow. Your earlier records stay and keep counting.",
    ],
    note: "7Captur never changes your ads, budgets or posts.",
    scenes: [AddWays, AddMatch],
    sceneLabels: ["Four ways in, one set of records", "Import with a column check"],
  },
  {
    key: "understand",
    icon: "understand",
    title: "Understand",
    short: "Every number is labelled by where it came from. Gaps and mismatches are flagged, and missing costs stay unknown instead of becoming zero.",
    chips: ["Evidence labels", "Gap checks", "Currency safe"],
    heading: "See where every number came from.",
    lead: "Likes do not prove sales. 7Captur labels each figure by its source and shows what is missing, so a guess never passes as a fact.",
    points: [
      "Each number is marked entered by you, imported, connected or unknown.",
      "Gaps and mismatches are flagged before they shape a decision.",
      "A missing cost stays unknown. It never quietly becomes zero.",
      "Thin evidence gets a small test, not a confident guess.",
    ],
    note: "Records in a different currency are left out of comparisons with a warning, never silently mixed.",
    scenes: [UnderstandSources, UnderstandEvidence],
    sceneLabels: ["Every number shows its source", "Evidence strength, stated plainly"],
  },
  {
    key: "decide",
    icon: "decide",
    title: "Decide",
    short: "One clear action, why it is suggested, what the data cannot tell us and what to record next. You choose. Nothing changes in your accounts.",
    chips: ["Recommendations", "Weekly summary"],
    heading: "One clear next move, with the reasons.",
    lead: "Instead of a wall of charts, you get one recommended action, the reasoning behind it and the gaps that could change it.",
    points: [
      "One action, why it is suggested and what the data cannot tell us.",
      "A short list of what to record next to firm it up.",
      "A review date on every decision, and on Growth a weekly summary of what is waiting.",
      "Ask a follow-up question about a saved decision. The recommendation itself comes from fixed rules, not from AI.",
    ],
    note: "You make the call. Nothing changes in your accounts.",
    scenes: [DecideCard, DecideLoop],
    sceneLabels: ["A recommendation you can act on", "The review loop"],
  },
];

/* ------------------------------------------------------------------ component ------------------------------------------------------------------ */

const ExpandIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 2h4v4M6 14H2v-4M14 2 9.5 6.5M2 14l4.5-4.5" /></svg>
);

export default function LayerCards({ ctaHref, ctaLabel }: { ctaHref: string; ctaLabel: string }) {
  const [open, setOpen] = useState<Key | null>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const sheet = useRef<HTMLDivElement>(null);
  const card = CARDS.find((c) => c.key === open) ?? null;

  const close = () => {
    setOpen(null);
    trigger.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    sheet.current?.querySelector<HTMLElement>(".lc-close")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); close(); return; }
      if (e.key !== "Tab" || !sheet.current) return;
      const f = [...sheet.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")];
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <>
      <div className="layers lc-layers">
        {CARDS.map((c) => (
          <div
            key={c.key}
            className="layer lc-card-open"
            onClick={(e) => { trigger.current = e.currentTarget.querySelector<HTMLElement>(".lc-expand"); setOpen(c.key); }}
          >
            <button
              type="button"
              className="lc-expand"
              aria-label={`Expand ${c.title}`}
              aria-haspopup="dialog"
              onClick={(e) => { e.stopPropagation(); trigger.current = e.currentTarget; setOpen(c.key); }}
            >
              <ExpandIcon />
            </button>
            <span className="tile"><Icon name={c.icon} size={26} /></span>
            <h3>{c.title}</h3>
            <p>{c.short}</p>
            <ul>{c.chips.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        ))}
      </div>

      {card && createPortal(
        <div className="lc-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
          <div className={`lc-sheet lc-${card.key}`} role="dialog" aria-modal="true" aria-labelledby="lc-title" ref={sheet}>
            <button type="button" className="lc-close" onClick={close} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="m3 3 10 10M13 3 3 13" /></svg>
            </button>
            <div className="lc-top">
              <div>
                <span className="lc-kicker">{card.title}</span>
                <h2 id="lc-title">{card.heading}</h2>
                <p className="lc-lead">{card.lead}</p>
                <div className="lc-actions">
                  <a className="btn btn-primary" href={ctaHref}>{ctaLabel}</a>
                  <a className="btn btn-ghost" href="/product/">See how it works</a>
                </div>
                <p className="lc-note">{card.note}</p>
              </div>
              <ul className="lc-points">
                {card.points.map((p) => (
                  <li key={p}><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><circle cx="9" cy="9" r="9" className="lc-pt-bg" /><path d="m5 9.3 2.6 2.6L13 6.4" className="lc-pt-ck" /></svg><span>{p}</span></li>
                ))}
              </ul>
            </div>
            <div className="lc-scenes">
              <figure className="lc-scene lc-scene-a">{card.scenes[0]()}<figcaption>{card.sceneLabels[0]}</figcaption></figure>
              <figure className="lc-scene lc-scene-b">{card.scenes[1]()}<figcaption>{card.sceneLabels[1]}</figcaption></figure>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
