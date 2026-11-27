/** One small flat illustration per article. Pure SVG, themed by CSS classes (aa-*), so it works in light and dark. */
const bar = (x: number, h: number, c = "aa-a", w = 18) => <rect key={x + c} x={x} y={100 - h} width={w} height={h} rx="4" className={c} />;
const coin = (cx: number, cy: number, r = 14) => <g key={`${cx}${cy}`}><circle cx={cx} cy={cy} r={r} className="aa-a" /><text x={cx} y={cy + r * 0.38} textAnchor="middle" className="aa-t" style={{ fontSize: r * 1.1 }}>$</text></g>;

const SCENES: Record<string, JSX.Element> = {
  "roas-vs-profit-break-even-roas": (<>
    {bar(34, 30, "aa-m", 28)}{bar(78, 54, "aa-m", 28)}{bar(122, 92, "aa-a", 28)}{bar(166, 70, "aa-a", 28)}
    <line x1="20" x2="250" y1="42" y2="42" className="aa-stroke" strokeDasharray="5 5" /><text x="258" y="46" className="aa-cap">break-even</text>
  </>),
  "advertising-budget-optimization": (<>
    {[0, 1, 2].map((i) => <g key={i}><rect x="40" y={26 + i * 30} width="230" height="8" rx="4" className="aa-l" /><rect x="40" y={26 + i * 30} width={[150, 90, 190][i]} height="8" rx="4" className="aa-a" /><circle cx={40 + [150, 90, 190][i]} cy={30 + i * 30} r="9" className="aa-s aa-ring" /></g>)}
  </>),
  "ad-spend-management": (<>
    {coin(60, 80, 14)}{coin(60, 56, 14)}{coin(60, 32, 14)}{coin(98, 80, 14)}{coin(98, 56, 14)}
    <line x1="30" x2="150" y1="22" y2="22" className="aa-stroke" strokeDasharray="5 5" />
    <rect x="186" y="26" width="84" height="64" rx="10" className="aa-s" /><rect x="196" y="38" width="64" height="8" rx="4" className="aa-l" /><rect x="196" y="38" width="44" height="8" rx="4" className="aa-a" /><rect x="196" y="56" width="40" height="5" rx="2.5" className="aa-m" /><rect x="196" y="68" width="52" height="5" rx="2.5" className="aa-l" />
  </>),
  "ecommerce-analytics-metrics-that-matter": (<>
    {[0, 1, 2].map((i) => <g key={i}><rect x={24 + i * 90} y="20" width="80" height="34" rx="8" className="aa-s" /><rect x={32 + i * 90} y="29" width="28" height="4" rx="2" className="aa-m" /><rect x={32 + i * 90} y="39" width="46" height="8" rx="3" className="aa-a" /></g>)}
    <polyline points="24,96 70,80 110,88 160,64 210,72 270,44" className="aa-stroke aa-thick" fill="none" />
  </>),
  "advertising-budget-allocation": (<>
    <circle cx="90" cy="62" r="40" className="aa-l" />
    <path d="M90 62 L90 22 A40 40 0 0 1 128.9 71.2 Z" className="aa-a" /><path d="M90 62 L128.9 71.2 A40 40 0 0 1 62 91 Z" className="aa-m" />
    <circle cx="90" cy="62" r="18" className="aa-bgfill" />
    {[0, 1, 2].map((i) => <g key={i}><rect x="170" y={32 + i * 22} width="14" height="14" rx="4" className={["aa-a", "aa-m", "aa-l"][i]} /><rect x="192" y={36 + i * 22} width={[70, 52, 40][i]} height="6" rx="3" className="aa-m" /></g>)}
  </>),
  "true-roas-explained": (<>
    <rect x="30" y="28" width="250" height="22" rx="6" className="aa-a" />
    <rect x="30" y="58" width="168" height="22" rx="6" className="aa-a" /><rect x="198" y="58" width="22" height="22" className="aa-m" /><rect x="220" y="58" width="30" height="22" className="aa-l" /><rect x="250" y="58" width="30" height="22" rx="0" className="aa-s" />
    <text x="30" y="98" className="aa-cap">revenue, then fees, returns, costs</text>
  </>),
  "ad-performance-tracking": (<>
    <polyline points="22,92 62,80 100,86 142,58 186,64 232,34 276,28" className="aa-stroke aa-thick" fill="none" />
    <circle cx="232" cy="34" r="7" className="aa-a" /><line x1="22" x2="276" y1="48" y2="48" className="aa-stroke" strokeDasharray="4 6" /><rect x="214" y="12" width="36" height="14" rx="5" className="aa-s" />
  </>),
};
const BY_TOPIC: Record<string, string> = {
  "Profit and ROAS": "true-roas-explained", "Budgeting": "advertising-budget-optimization", "Analytics": "ecommerce-analytics-metrics-that-matter",
};

export default function ArticleArt({ slug, topic }: { slug: string; topic?: string }) {
  const scene = SCENES[slug] ?? SCENES[BY_TOPIC[topic ?? ""] ?? "ad-performance-tracking"];
  return <div className="aa" aria-hidden="true"><svg viewBox="0 0 310 120" preserveAspectRatio="xMidYMid meet">{scene}</svg></div>;
}
