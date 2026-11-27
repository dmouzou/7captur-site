/* Illustrations for the About page. Figures are illustrative. */

export function MarginSplit() {
  const rows: [string, number, boolean][] = [
    ["Product costs", 82, true],
    ["Fees and shipping", 48, true],
    ["Settled refunds", 40, true],
    ["What you keep", 62, false],
  ];
  return (
    <svg viewBox="0 0 360 320" role="img" aria-label="Platform revenue split into product costs, fees, shipping, refunds and the smaller share you keep" className="lc-svg">
      <g transform="translate(20 24)">
        <rect width="320" height="272" rx="18" className="lc-card" />
        <text x="22" y="36" className="lc-t1">Revenue the platform claims</text>
        <rect x="22" y="48" width="276" height="18" rx="9" className="lc-accfill lc-grow" />
        <path d="M22 84h276" className="lc-rule" />
        {rows.map(([label, w, minus], n) => (
          <g key={label} transform={`translate(22 ${102 + n * 36})`}>
            <text y="12" className={minus ? "lc-t2 lc-ink" : "lc-t1"}>{label}</text>
            <rect x="130" y="2" width="146" height="14" rx="7" className="lc-track" />
            <rect x="130" y="2" width={w} height="14" rx="7" className={minus ? "lc-chip lc-warn lc-grow" : "lc-accfill lc-grow"} style={{ animationDelay: `${0.2 + n * 0.15}s` }} />
          </g>
        ))}
        <text x="22" y="256" className="lc-t2">Illustrative bars.</text>
      </g>
    </svg>
  );
}

export function Independent() {
  const rows = ["Media buying", "Creative services", "A share of your spend"];
  return (
    <svg viewBox="0 0 360 320" role="img" aria-label="Media buying, creative services and a share of spend are not sold, so the answer can be to spend less" className="lc-svg">
      <g transform="translate(20 24)">
        <rect width="320" height="272" rx="18" className="lc-card" />
        <text x="22" y="38" className="lc-t1">What we do not sell</text>
        <path d="M22 52h276" className="lc-rule" />
        {rows.map((t, n) => (
          <g key={t} transform={`translate(22 ${68 + n * 42})`}>
            <rect width="276" height="32" rx="10" className="lc-chip" />
            <text x="14" y="21" className="lc-t2">{t}</text>
            <path d="M246 10l12 12M258 10l-12 12" className="lc-accstroke" />
          </g>
        ))}
        <g transform="translate(22 208)">
          <rect width="276" height="44" rx="14" className="lc-move" />
          <rect width="5" height="44" rx="2.5" className="lc-accfill lc-pulse" />
          <text x="20" y="27" className="lc-move-t">So the call can be: spend less.</text>
        </g>
      </g>
    </svg>
  );
}
