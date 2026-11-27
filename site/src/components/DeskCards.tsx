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

/* Illustrations. Figures are illustrative. */

function AccessRoles() {
  const rows: [number, string, string][] = [
    [64, "Shopify", "Staff, Reports and Orders"],
    [160, "Meta Business Manager", "Ad Account Analyst"],
    [256, "Google Ads", "Read-only user"],
  ];
  return (
    <svg viewBox="0 0 560 320" role="img" aria-label="Three native view-only roles in Shopify, Meta and Google Ads flowing into one read-only workspace" className="lc-svg">
      {rows.map(([cy], n) => (
        <path key={n} d={`M226 ${cy} C 280 ${cy}, 280 160, 332 160`} className="lc-flow" style={{ animationDelay: `${n * -0.6}s` }} />
      ))}
      {rows.map(([cy, a, b], n) => (
        <g key={n} transform={`translate(24 ${cy - 28})`}>
          <rect width="202" height="56" rx="14" className="lc-card" />
          <text x="16" y="24" className="lc-t1">{a}</text>
          <text x="16" y="42" className="lc-t2">{b}</text>
          <circle cx="184" cy="28" r="5" className="lc-dot-ok" />
        </g>
      ))}
      <g transform="translate(332 52)">
        <rect width="204" height="216" rx="18" className="lc-card lc-hub" />
        <text x="18" y="34" className="lc-t1">Read-only workspace</text>
        {["Viewer roles only", "No OAuth app installs", "No pixel changes", "No billing access"].map((t, r) => (
          <g key={t} transform={`translate(18 ${60 + r * 36})`}>
            <circle cx="9" cy="9" r="9" className="lc-tile-fill" /><path d="M4.5 9.5l3 3 6-6.5" className="lc-check" />
            <text x="28" y="13" className="lc-t2 lc-ink">{t}</text>
          </g>
        ))}
        <rect x="18" y="196" width="168" height="8" rx="4" className="lc-track" />
        <rect x="18" y="196" width="168" height="8" rx="4" className="lc-accfill lc-grow" />
      </g>
    </svg>
  );
}

function AccessNever() {
  const rows = ["Ad-edit rights", "Billing access", "Storefront write access", "Third-party OAuth apps"];
  return (
    <svg viewBox="0 0 360 320" role="img" aria-label="Four permissions that are never requested" className="lc-svg">
      <g transform="translate(20 24)">
        <rect width="320" height="272" rx="18" className="lc-card" />
        <text x="24" y="40" className="lc-t1">What we never ask for</text>
        <path d="M24 56h272" className="lc-rule" />
        {rows.map((t, n) => (
          <g key={t} transform={`translate(24 ${76 + n * 42})`}>
            <rect width="272" height="32" rx="10" className="lc-chip" />
            <text x="14" y="21" className="lc-t2 lc-ink">{t}</text>
            <circle cx="248" cy="16" r="5" className="lc-dot-warn lc-pulse" style={{ animationDelay: `${n * 0.3}s` }} />
          </g>
        ))}
        <text x="24" y="256" className="lc-t2">Revoke any role in 30 seconds.</text>
      </g>
    </svg>
  );
}

function ReconcileBridge() {
  const rows: [string, number, boolean][] = [
    ["Platform revenue", 330, false],
    ["Product costs (COGS)", 92, true],
    ["Payment fees", 30, true],
    ["Shipping", 46, true],
    ["30-day refunds", 58, true],
    ["True net contribution", 104, false],
  ];
  return (
    <svg viewBox="0 0 560 320" role="img" aria-label="A bridge from platform revenue down to true net contribution after product costs, fees, shipping and refunds" className="lc-svg">
      <g transform="translate(24 20)">
        <rect width="512" height="280" rx="18" className="lc-card" />
        <text x="24" y="36" className="lc-t1">From platform ROAS to true margin</text>
        <path d="M24 50h464" className="lc-rule" />
        {rows.map(([label, w, minus], n) => (
          <g key={label} transform={`translate(24 ${68 + n * 34})`}>
            <text y="16" className={n === 5 ? "lc-t1" : "lc-t2 lc-ink"}>{label}</text>
            <rect x="176" y="2" width="290" height="16" rx="8" className="lc-track" />
            <rect x="176" y="2" width={(w / 330) * 290} height="16" rx="8" className={minus ? "lc-chip lc-warn lc-grow" : "lc-accfill lc-grow"} style={{ animationDelay: `${n * 0.12}s` }} />
          </g>
        ))}
        <text x="24" y="270" className="lc-t2">Illustrative bars. Your memo uses your real figures.</text>
      </g>
    </svg>
  );
}

function ReconcileUnknown() {
  const rows: [string, string, string, string][] = [
    ["SKU 114", "$9.40", "Counted", "lc-src-imp"],
    ["SKU 162", "$14.10", "Counted", "lc-src-imp"],
    ["SKU 207", "?", "Unknown", "lc-src-unk"],
  ];
  return (
    <svg viewBox="0 0 360 320" role="img" aria-label="A cost table where a SKU with no cost is marked unknown and excluded from scale calls instead of counted as zero" className="lc-svg">
      <g transform="translate(20 24)">
        <rect width="320" height="272" rx="18" className="lc-card" />
        <text x="22" y="38" className="lc-t2">SKU</text>
        <text x="112" y="38" className="lc-t2">Unit cost</text>
        <text x="204" y="38" className="lc-t2">Status</text>
        <path d="M22 52h276" className="lc-rule" />
        {rows.map(([sku, cost, status, cls], n) => (
          <g key={sku} transform={`translate(0 ${64 + n * 44})`}>
            {n === 2 && <rect x="10" y="-6" width="300" height="44" rx="12" className="lc-ring lc-pulse" />}
            <text x="22" y="20" className="lc-t1">{sku}</text>
            <text x="112" y="20" className={n === 2 ? "lc-t1 lc-muted" : "lc-t1"}>{cost}</text>
            <rect x="204" y="2" width="94" height="26" rx="13" className={`lc-srcchip ${cls}`} />
            <text x="251" y="19" textAnchor="middle" className="lc-t2 lc-ink">{status}</text>
          </g>
        ))}
        <text x="22" y="214" className="lc-t2 lc-ink">Excluded from scale calls.</text>
        <text x="22" y="236" className="lc-t2">A missing cost is never treated as $0.</text>
      </g>
    </svg>
  );
}

function MemoPage() {
  return (
    <svg viewBox="0 0 560 320" role="img" aria-label="A one-page Monday memo with a cut call, a hold call, an evidence grade and what is not known" className="lc-svg">
      <g transform="translate(24 20)">
        <rect width="512" height="280" rx="18" className="lc-card" />
        <g transform="translate(18 18)"><circle r="4" cx="4" cy="4" className="lc-dotg" /><circle cx="18" cy="4" r="4" className="lc-dotg" /><circle cx="32" cy="4" r="4" className="lc-dotg" /></g>
        <text x="64" y="27" className="lc-t2 lc-ink">Monday decision memo</text>
        <rect x="372" y="12" width="120" height="24" rx="12" className="lc-ok lc-chip" />
        <text x="432" y="28" textAnchor="middle" className="lc-t2 lc-ink">Evidence: Moderate</text>
        <rect x="24" y="54" width="464" height="64" rx="12" className="lc-move" />
        <rect x="24" y="54" width="5" height="64" rx="2.5" className="lc-accfill" />
        <text x="44" y="82" className="lc-move-t">CUT: Meta Retargeting Catalogue by 40%.</text>
        <text x="44" y="104" className="lc-move-t">HOLD: Google PMax until refunds settle.</text>
        {[["Why", "Retargeting returns too many orders to stay profitable."], ["What we do not know", "Costs for new SKUs, so they are excluded."], ["Next Monday", "Refund window closes and the hold is reviewed."]].map(([k, v], n) => (
          <g key={k} transform={`translate(24 ${142 + n * 34})`}>
            <text className="lc-t2 lc-ink" y="0">{k}</text>
            <text className="lc-t2" y="17">{v}</text>
          </g>
        ))}
        <g transform="translate(24 246)">
          <rect width="150" height="24" rx="12" className="lc-chip" />
          <text x="75" y="16" textAnchor="middle" className="lc-t2 lc-ink">Analyst verified</text>
          <text x="164" y="16" className="lc-t2">You and your buyer act. We never edit ads.</text>
        </g>
      </g>
    </svg>
  );
}

function MemoLoop() {
  const nodes: [string, number][] = [["Reconcile", -90], ["Memo", 30], ["Review", 150]];
  const R = 86, cx = 180, cy = 150;
  return (
    <svg viewBox="0 0 360 320" role="img" aria-label="The weekly loop: reconcile, memo, review, every Monday morning" className="lc-svg">
      <g transform="translate(20 24)"><rect width="320" height="272" rx="18" className="lc-card" /></g>
      <circle cx={cx} cy={cy} r={R} className="lc-orbit" />
      <circle cx={cx} cy={cy} r={R} className="lc-orbit-flow" />
      {nodes.map(([t, a]) => {
        const x = cx + R * Math.cos((a * Math.PI) / 180), y = cy + R * Math.sin((a * Math.PI) / 180);
        return (
          <g key={t} transform={`translate(${x} ${y})`}>
            <circle r="35" className="lc-node" />
            <text y="4" textAnchor="middle" className="lc-t1">{t}</text>
          </g>
        );
      })}
      <text x={cx} y={cy - 2} textAnchor="middle" className="lc-t2 lc-ink">Every Monday</text>
      <text x={cx} y={cy + 14} textAnchor="middle" className="lc-t2 lc-ink">morning</text>
      <g transform="translate(86 262)"><rect width="188" height="26" rx="13" className="lc-chip lc-ok" /><text x="94" y="17" textAnchor="middle" className="lc-t2 lc-ink">By email or Slack</text></g>
    </svg>
  );
}

/* Content */

const CARDS: Card[] = [
  {
    key: "add",
    icon: "add",
    title: "Access",
    short: "Native read-only roles in Shopify, Meta and Google Ads, plus your product cost sheet. Two minutes, no app installs, no write access.",
    chips: ["Shopify", "Meta", "Google Ads", "COGS sheet"],
    heading: "Two minutes, read-only, nothing to install.",
    lead: "You grant the viewer roles each platform already offers. We never ask for ad-edit, billing or storefront-write permissions.",
    points: [
      "Shopify staff account with Reports and Orders view-only.",
      "Meta Business Manager Ad Account Analyst, and a read-only Google Ads user.",
      "Your product costs arrive through a simple 3-column CSV template.",
      "No third-party OAuth apps, no pixel changes, no billing access.",
    ],
    note: "You can revoke any role in 30 seconds.",
    scenes: [AccessRoles, AccessNever],
    sceneLabels: ["Three view-only roles, one workspace", "What we never ask for"],
  },
  {
    key: "understand",
    icon: "understand",
    title: "Reconcile",
    short: "Spend, orders, fees, shipping and 30-day refunds reconciled against real COGS. Missing costs are flagged as unknown, never zero.",
    chips: ["COGS", "Fees", "Shipping", "30-day refunds"],
    heading: "True margin, not platform revenue.",
    lead: "Platforms count gross revenue before refunds, COGS and shipping. The engine rebuilds each campaign result from your real costs, then an analyst verifies it.",
    points: [
      "Platform ROAS sits next to true net margin, campaign by campaign.",
      "Refunds settle over 30 days, so open windows are labelled rather than guessed.",
      "A missing cost stays unknown and is left out of scale calls.",
      "A human analyst reviews every call before it reaches you.",
    ],
    note: "We never edit your ad accounts.",
    scenes: [ReconcileBridge, ReconcileUnknown],
    sceneLabels: ["From platform ROAS to true margin", "Missing costs stay unknown"],
  },
  {
    key: "decide",
    icon: "decide",
    title: "Memo",
    short: "One page every Monday morning: what to cut, hold or test, with an evidence grade and what we do not know.",
    chips: ["Cut", "Hold", "Test", "Evidence grade"],
    heading: "One decision page, every Monday.",
    lead: "No dashboard to open. The memo lands by email or Slack, with the reasoning and the gaps that could change it.",
    points: [
      "One to three actions, each marked Cut, Hold or Test.",
      "An evidence grade and a plain statement of what we do not know.",
      "Optional read-only portal for your CFO or media buyer, with the full archive.",
      "You and your media buyer act. Nothing changes in your accounts unless you change it.",
    ],
    note: "Flat monthly fee, never a percentage of spend.",
    scenes: [MemoPage, MemoLoop],
    sceneLabels: ["A one-page Monday memo", "The weekly loop"],
  },
];

const ExpandIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 2h4v4M6 14H2v-4M14 2 9.5 6.5M2 14l4.5-4.5" /></svg>
);

export default function DeskCards({ ctaHref, ctaLabel }: { ctaHref: string; ctaLabel: string }) {
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
                  <a className="btn btn-ghost" href="/how-it-works/">See how it works</a>
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
