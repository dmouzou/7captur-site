import { useEffect, useRef, useState } from "react";

const STEPS: { title: string; when: string; text: string }[] = [
  { title: "Set a goal", when: "Once, in a minute", text: "Tell us what you want: more enquiries, more orders, better content, less wasted spend or more profit. Add your business type, currency and how customers buy." },
  { title: "Add what you have", when: "Type, import or connect", text: "Enter posts, promotions, enquiries, sales and costs, import a CSV, or connect a supported source. Imports are shown for you to check before they are saved." },
  { title: "Get a recommendation", when: "When you ask", text: "One concrete action, why it is suggested, what we do not know and what to measure next. It matches the evidence you have, and says so when that evidence is thin." },
  { title: "You choose", when: "Your call", text: "Mark it to try, dismiss it or come back later. 7Captur never changes your ads, budgets or posts. Any change happens in your own accounts, made by you." },
  { title: "Review the result", when: "Optional", text: "Record what happened. On Growth, a weekly summary shows what changed, what you tried, what is missing and where to focus next." },
];

/* The trail: a hand-drawn looking ring. Wobble is fixed, not random, so it renders the same on server and client. */
const C = 200, R = 142, N = STEPS.length, PAD = 56, BOX = 400 + PAD * 2;
const SHORT = ["Set a goal", "Add data", "Get advice", "You choose", "Review"];
const SIDE = ["top", "right", "bottom", "bottom", "left"];
const ang = (n: number) => (-90 + (360 / N) * n) * (Math.PI / 180);
const pt = (n: number, r = R) => [C + r * Math.cos(ang(n)), C + r * Math.sin(ang(n))] as const;
function trail(from: number): string {
  const steps = 14, a0 = ang(from), a1 = ang(from) + (2 * Math.PI) / N;
  const out: string[] = [];
  for (let k = 0; k <= steps; k++) {
    const t = k / steps, a = a0 + (a1 - a0) * t;
    const r = R + Math.sin((from * 5 + k) * 1.7) * 4.5 * Math.sin(Math.PI * t);
    out.push(`${k === 0 ? "M" : "L"}${(C + r * Math.cos(a)).toFixed(1)} ${(C + r * Math.sin(a)).toFixed(1)}`);
  }
  return out.join(" ");
}
const chevron = (n: number) => { // mid-way along the trail from step n to n+1, pointing clockwise
  const a = ang(n) + Math.PI / N;
  const cx = C + R * Math.cos(a), cy = C + R * Math.sin(a), deg = (a * 180) / Math.PI + 90;
  return `translate(${cx.toFixed(1)} ${cy.toFixed(1)}) rotate(${deg.toFixed(1)})`;
};

export default function Roadmap() {
  const [hot, setHot] = useState<number | null>(null); // pin the visitor is pointing at
  const [lit, setLit] = useState(0); // how far the trail has been walked
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduce = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setLit(N - 1); return; }
    const el = root.current;
    let t: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(([e]) => {
      if (t) clearInterval(t);
      if (e.isIntersecting) t = setInterval(() => setLit((n) => (n + 1) % N), 1800);
    }, { threshold: 0.4 });
    if (el) io.observe(el);
    return () => { io.disconnect(); if (t) clearInterval(t); };
  }, []);
  const shown = hot ?? null;
  return (
    <div className="tm tm-solo" ref={root}>
      <div className="tm-map">
        <div className="tm-stage">
          <svg viewBox={`${-PAD} ${-PAD} ${BOX} ${BOX}`} aria-hidden="true">
            <circle cx={C} cy={C} r={R + 44} className="tm-paper" />
            <circle cx={C} cy={C} r={R + 44} className="tm-edge" />
            {STEPS.map((st, n) => <path key={st.title} d={trail(n)} className={`tm-trail${n < lit ? " seen" : ""}`} />)}
            {STEPS.map((st, n) => <path key={`c${n}`} d="M-5 -4 L2 0 L-5 4" className="tm-chev" transform={chevron(n)} />)}
            <g className="tm-compass" transform={`translate(${C} ${C})`}>
              <circle r="40" className="tm-ring" />
              <path d="M0 -36 L6 0 L0 36 L-6 0 Z" className="tm-needle" />
              <path d="M-36 0 L0 -6 L36 0 L0 6 Z" className="tm-needle tm-needle2" />
              <text y="-44" textAnchor="middle">N</text>
            </g>
          </svg>
          {STEPS.map((st, n) => {
            const [x, y] = pt(n);
            const last = n === N - 1;
            return (
              <button key={st.title} type="button" className={`tm-pin${n === lit ? " now" : ""}${n <= lit ? " seen" : ""}${last ? " mark" : ""}${shown === n ? " hot" : ""}`}
                data-side={SIDE[n]} style={{ left: `${((x + PAD) / BOX) * 100}%`, top: `${((y + PAD) / BOX) * 100}%` }}
                onMouseEnter={() => setHot(n)} onMouseLeave={() => setHot(null)} onFocus={() => setHot(n)} onBlur={() => setHot(null)}
                onClick={() => setHot(hot === n ? null : n)} aria-expanded={shown === n} aria-label={`Step ${n + 1}: ${st.title}. ${st.text}`}>
                <span className="tm-node">{last ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg> : n + 1}</span>
                <span className="tm-label">{SHORT[n]}</span>
                <span className="tm-tip" role="tooltip"><b>{st.title}</b><em>{st.when}</em>{st.text}</span>
              </button>
            );
          })}
        </div>
        <p className="tm-loop">Then back to the start with a better goal.</p>
      </div>
    </div>
  );
}
