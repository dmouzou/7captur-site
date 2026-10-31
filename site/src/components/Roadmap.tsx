import { useRef, useState } from "react";
import { Icon, type IconName } from "./Icons";

const STEPS: { icon: IconName; title: string; when: string; text: string; see: string[] }[] = [
  { icon: "chart", title: "Set a goal", when: "Once, in a minute", text: "Tell us what you want: more enquiries, more orders, better content, less wasted spend or more profit. Add your business type, currency and how customers buy.", see: ["A short setup form", "Goal, currency, how people buy"] },
  { icon: "add", title: "Add what you have", when: "Type, import or connect", text: "Enter posts, promotions, enquiries, sales and costs, import a CSV, upload a screenshot, or connect a supported source. Screenshot values are shown for you to check before they are saved.", see: ["Record hub with one entry per type", "Import preview before saving"] },
  { icon: "understand", title: "Get a recommendation", when: "When you ask", text: "One concrete action, why it is suggested, what we do not know and what to measure next. It matches the evidence you have, and says so when that evidence is thin.", see: ["The action and the reasons", "What is unknown, what to record"] },
  { icon: "decide", title: "You choose", when: "Your call", text: "Mark it to try, dismiss it or come back later. 7Captur never changes your ads, budgets or posts. Any change happens in your own accounts, made by you.", see: ["Try it, dismiss it, or later", "Nothing changes in your accounts"] },
  { icon: "clock", title: "Learn from the result", when: "Optional", text: "Record what happened. A weekly summary shows what changed, what you tried, what is missing and where to focus next.", see: ["Weekly summary", "A sharper next recommendation"] },
];

export default function Roadmap() {
  const [i, setI] = useState(0);
  const [seen, setSeen] = useState(0);
  const x0 = useRef<number | null>(null);
  const go = (n: number) => { const k = Math.max(0, Math.min(STEPS.length - 1, n)); setI(k); setSeen((s) => Math.max(s, k)); };
  const s = STEPS[i];
  return (
    <div className="rm">
      <ol className="rm-track" aria-label="Steps">
        {STEPS.map((st, n) => (
          <li key={st.title} className={`${n === i ? "now" : ""} ${n <= seen ? "seen" : ""}`}>
            <button type="button" onClick={() => go(n)} aria-current={n === i ? "step" : undefined} aria-label={`Step ${n + 1}: ${st.title}`}>
              <span className="rm-node"><Icon name={st.icon} size={22} /></span>
              <span className="rm-label">{st.title}</span>
            </button>
            {n < STEPS.length - 1 && (
              <span className="rm-arrow" aria-hidden="true"><svg viewBox="0 0 64 16" preserveAspectRatio="none"><path className="rm-line" d="M2 8h54" /><path d="m50 2 8 6-8 6" fill="none" /></svg></span>
            )}
          </li>
        ))}
      </ol>
      <div className="rm-panel" role="group" aria-live="polite" aria-label={`Step ${i + 1} of ${STEPS.length}`}
        onTouchStart={(e) => { x0.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => { if (x0.current == null) return; const d = e.changedTouches[0].clientX - x0.current; if (Math.abs(d) > 50) go(i + (d < 0 ? 1 : -1)); x0.current = null; }}>
        <div className="rm-card" key={i}>
          <span className="tile"><Icon name={s.icon} size={26} /></span>
          <p className="rm-count">Step {i + 1} of {STEPS.length} <span>{s.when}</span></p>
          <h3>{s.title}</h3>
          <p className="rm-text">{s.text}</p>
          <ul className="rm-see">{s.see.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
        <div className="rm-nav">
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => go(i - 1)} disabled={i === 0}>Back</button>
          <span className="rm-dots" aria-hidden="true">{STEPS.map((st, n) => <i key={st.title} className={n === i ? "on" : ""} />)}</span>
          <button type="button" className="btn btn-primary btn-sm" onClick={() => go(i + 1)} disabled={i === STEPS.length - 1}>{i === STEPS.length - 2 ? "Last step" : "Next step"}</button>
        </div>
      </div>
    </div>
  );
}
