/** One small flat illustration per article. Pure SVG, themed by CSS classes (aa-*), so it works in light and dark. */
const bar = (x: number, h: number, c = "aa-a", w = 18) => <rect key={x + c} x={x} y={100 - h} width={w} height={h} rx="4" className={c} />;
const bubble = (x: number, y: number, w = 56, c = "aa-s") => (
  <g key={`${x}${y}`}><rect x={x} y={y} width={w} height="26" rx="9" className={c} /><path d={`M${x + 10} ${y + 25} l-5 8 l13 -8z`} className={c} /><rect x={x + 9} y={y + 9} width={w - 22} height="3" rx="1.5" className="aa-l" /><rect x={x + 9} y={y + 15} width={(w - 22) * 0.6} height="3" rx="1.5" className="aa-l" /></g>
);
const coin = (cx: number, cy: number, r = 14) => <g key={`${cx}${cy}`}><circle cx={cx} cy={cy} r={r} className="aa-a" /><text x={cx} y={cy + r * 0.38} textAnchor="middle" className="aa-t" style={{ fontSize: r * 1.1 }}>$</text></g>;
const heart = (x: number, y: number, s = 1) => <path key={`h${x}${y}`} transform={`translate(${x} ${y}) scale(${s})`} d="M0 -3 C-4 -12 -18 -8 -10 3 L0 13 L10 3 C18 -8 4 -12 0 -3z" className="aa-a" />;

const SCENES: Record<string, JSX.Element> = {
  "track-sales-from-social-media-posts": (<>
    <rect x="22" y="22" width="78" height="82" rx="10" className="aa-s" /><rect x="30" y="30" width="62" height="38" rx="6" className="aa-l" />{heart(61, 52, 0.9)}
    <rect x="30" y="76" width="44" height="5" rx="2.5" className="aa-m" /><rect x="30" y="86" width="30" height="5" rx="2.5" className="aa-m" />
    <path d="M112 62 H176" className="aa-stroke" strokeDasharray="2 7" /><path d="M170 54 L180 62 L170 70" className="aa-stroke" fill="none" />
    <rect x="194" y="26" width="76" height="78" rx="8" className="aa-s" /><rect x="204" y="38" width="40" height="5" rx="2.5" className="aa-m" /><rect x="204" y="50" width="56" height="4" rx="2" className="aa-l" /><rect x="204" y="60" width="56" height="4" rx="2" className="aa-l" />{coin(246, 88, 11)}
  </>),
  "cost-per-enquiry-how-to-calculate": (<>
    {coin(52, 62, 26)}
    <text x="100" y="72" className="aa-big">÷</text>
    {bubble(128, 30, 52)}{bubble(188, 30, 52)}{bubble(128, 70, 52)}
    <text x="262" y="72" className="aa-big">=</text>
  </>),
  "likes-vs-sales-engagement-metrics": (<>
    {[18, 30, 46, 64, 84].map((h, i) => bar(30 + i * 26, h, "aa-a", 16))}
    {[16, 15, 16, 15, 16].map((h, i) => bar(176 + i * 24, h, "aa-m", 14))}
    <line x1="14" x2="296" y1="100" y2="100" className="aa-stroke" />{heart(80, 14, 0.7)}
    <path d="M226 28 h30 l-3 22 h-24z" className="aa-s" /><path d="M233 28 v-5 a8 8 0 0 1 16 0 v5" className="aa-stroke" fill="none" />
  </>),
  "track-whatsapp-and-dm-sales": (<>
    {bubble(30, 22, 92)}{bubble(150, 52, 92, "aa-a")}
    <circle cx="258" cy="80" r="16" className="aa-a" /><path d="M250 80 l6 6 l11 -12" className="aa-check" fill="none" />
    <rect x="30" y="86" width="60" height="5" rx="2.5" className="aa-m" /><rect x="30" y="96" width="38" height="5" rx="2.5" className="aa-l" />
  </>),
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
  "meta-vs-google-ads-first-500": (<>
    <line x1="155" x2="155" y1="40" y2="100" className="aa-stroke" /><line x1="70" x2="240" y1="40" y2="40" className="aa-stroke aa-thick" />
    <rect x="42" y="56" width="52" height="40" rx="8" className="aa-a" /><rect x="216" y="56" width="52" height="40" rx="8" className="aa-m" />
    <path d="M56 40 v16 M80 40 v16 M230 40 v16 M254 40 v16" className="aa-stroke" />{coin(155, 26, 12)}
  </>),
};
const BY_TOPIC: Record<string, string> = {
  "Attribution": "track-sales-from-social-media-posts", "Ads and Spend": "cost-per-enquiry-how-to-calculate", "Metrics": "likes-vs-sales-engagement-metrics",
  "Profit and ROAS": "true-roas-explained", "Budgeting": "advertising-budget-optimization", "Analytics": "ecommerce-analytics-metrics-that-matter",
};

export default function ArticleArt({ slug, topic }: { slug: string; topic?: string }) {
  const scene = SCENES[slug] ?? SCENES[BY_TOPIC[topic ?? ""] ?? "ad-performance-tracking"];
  return <div className="aa" aria-hidden="true"><svg viewBox="0 0 310 120" preserveAspectRatio="xMidYMid meet">{scene}</svg></div>;
}
