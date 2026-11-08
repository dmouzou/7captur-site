import { useRef, useState, type ReactNode } from "react";
import { Icon, type IconName } from "./Icons";

const STEPS: { icon: IconName; title: string; when: string; text: string; see: string[] }[] = [
  { icon: "chart", title: "Set a goal", when: "Once, in a minute", text: "Tell us what you want: more enquiries, more orders, better content, less wasted spend or more profit. Add your business type, currency and how customers buy.", see: ["A short setup form", "Goal, currency, how people buy"] },
  { icon: "add", title: "Add what you have", when: "Type, import or connect", text: "Enter posts, promotions, enquiries, sales and costs, import a CSV, or connect a supported source. Imports are shown for you to check before they are saved.", see: ["Record hub with one entry per type", "Import preview before saving"] },
  { icon: "understand", title: "Get a recommendation", when: "When you ask", text: "One concrete action, why it is suggested, what we do not know and what to measure next. It matches the evidence you have, and says so when that evidence is thin.", see: ["The action and the reasons", "What is unknown, what to record"] },
  { icon: "decide", title: "You choose", when: "Your call", text: "Mark it to try, dismiss it or come back later. 7Captur never changes your ads, budgets or posts. Any change happens in your own accounts, made by you.", see: ["Try it, dismiss it, or later", "Nothing changes in your accounts"] },
  { icon: "clock", title: "Review the result", when: "Optional", text: "Record what happened. On Growth, a weekly summary shows what changed, what you tried, what is missing and where to focus next.", see: ["Weekly summary", "A record of what worked"] },
];

/* Which screen of the real app shows each step. Steps 3 and 4 are the top and the bottom of the Decide screen. */
type Pane = { kind: "setup" } | { kind: "shot"; name: string; pos?: "top" | "bottom"; alt: string };
const PANES: Pane[] = [
  { kind: "setup" },
  { kind: "shot", name: "add", pos: "top", alt: "The Add your data screen: connect a platform, import a file or type it in." },
  { kind: "shot", name: "decide", pos: "top", alt: "A recommendation in 7Captur: one next move, the evidence level and a review date." },
  { kind: "shot", name: "decide", pos: "bottom", alt: "The choices under a recommendation: accept, accept with changes, reject, decide later or did not act." },
  { kind: "shot", name: "weekly", pos: "top", alt: "The weekly summary: what changed, what is missing and which decisions are ready to review." },
];

const Frame = ({ children, crop }: { children: ReactNode; crop?: string }) => (
  <div className={`shot tm-shot${crop ? ` crop crop-${crop}` : ""}`}>
    <div className="shot-bar" aria-hidden="true"><i></i><i></i><i></i><span className="shot-url">app.7captur.com</span></div>
    {children}
  </div>
);

function Pic({ p }: { p: Pane }) {
  if (p.kind === "setup") {
    const goals = ["More enquiries", "More orders", "Better content", "Less wasted spend", "More profit"];
    return (
      <Frame>
        <div className="tm-setup" aria-hidden="true">
          <b>What do you want most?</b>
          <div className="tm-chips">{goals.map((g, n) => <span key={g} className={n === 3 ? "on" : ""}>{g}</span>)}</div>
          <div className="tm-fields">
            <label><i>Business type</i><span>Online shop</span></label>
            <label><i>Currency</i><span>USD</span></label>
            <label><i>How customers buy</i><span>Website, DMs</span></label>
          </div>
        </div>
      </Frame>
    );
  }
  return (
    <Frame crop={p.pos}>
      <div className="tm-view">
        <img className="lt" src={`/assets/app/${p.name}-light.webp`} alt={p.alt} width="1800" height="1138" loading="lazy" decoding="async" />
        <img className="dk" src={`/assets/app/${p.name}-dark.webp`} alt={p.alt} width="1800" height="1138" loading="lazy" decoding="async" />
      </div>
    </Frame>
  );
}

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
  const [i, setI] = useState(0);
  const [seen, setSeen] = useState(0);
  const x0 = useRef<number | null>(null);
  const go = (n: number) => { const k = ((n % N) + N) % N; setI(k); setSeen((s) => Math.max(s, k)); };
  const s = STEPS[i];
  return (
    <div className="tm">
      <div className="tm-map"><div className="tm-stage">
        <svg viewBox={`${-PAD} ${-PAD} ${BOX} ${BOX}`} aria-hidden="true">
          <circle cx={C} cy={C} r={R + 44} className="tm-paper" />
          <circle cx={C} cy={C} r={R + 44} className="tm-edge" />
          {STEPS.map((st, n) => <path key={st.title} d={trail(n)} className={`tm-trail${n < seen || (seen === N - 1 && n === N - 1) ? " seen" : ""}`} />)}
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
            <button key={st.title} type="button" className={`tm-pin${n === i ? " now" : ""}${n <= seen ? " seen" : ""}${last ? " mark" : ""}`}
              data-side={SIDE[n]} style={{ left: `${((x + PAD) / BOX) * 100}%`, top: `${((y + PAD) / BOX) * 100}%` }} onClick={() => go(n)} aria-current={n === i ? "step" : undefined} aria-label={`Step ${n + 1}: ${st.title}`}>
              <span className="tm-node">{last ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg> : n + 1}</span>
              <span className="tm-label">{SHORT[n]}</span>
            </button>
          );
        })}
        </div>
        <p className="tm-loop">Then back to the start with a better goal.</p>
      </div>
      <div className="tm-detail" role="group" aria-live="polite" aria-label={`Step ${i + 1} of ${N}`}
        onTouchStart={(e) => { x0.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => { if (x0.current == null) return; const d = e.changedTouches[0].clientX - x0.current; if (Math.abs(d) > 50) go(i + (d < 0 ? 1 : -1)); x0.current = null; }}>
        <div className="tm-card" key={i}>
          <p className="rm-count">Step {i + 1} of {N} <span>{s.when}</span></p>
          <h3>{s.title}</h3>
          <p className="rm-text">{s.text}</p>
          <ul className="rm-see">{s.see.map((t) => <li key={t}>{t}</li>)}</ul>
          <Pic p={PANES[i]} />
        </div>
        <div className="rm-nav">
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => go(i - 1)}>Back</button>
          <span className="rm-dots" aria-hidden="true">{STEPS.map((st, n) => <i key={st.title} className={n === i ? "on" : ""} />)}</span>
          <button type="button" className="btn btn-primary btn-sm" onClick={() => go(i + 1)}>{i === N - 1 ? "Start over" : "Next step"}</button>
        </div>
      </div>
    </div>
  );
}
