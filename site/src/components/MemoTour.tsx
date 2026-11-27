import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Icon, type IconName } from "./Icons";
import { SAMPLE_ROWS, money, signed } from "../lib/sampleMemo";

/* Guided walkthrough of the sample memo. Every figure comes from lib/sampleMemo and is illustrative. */
const STEPS: { icon: IconName; title: string; line: string }[] = [
  { icon: "understand", title: "Evidence grade", line: "A single badge for how far the data can be trusted this week. Unsettled refund windows or missing costs lower it." },
  { icon: "chart", title: "Platform ROAS vs. true margin", line: "Each campaign group shows what the platform reported next to what was left after COGS, fees, shipping and settled refunds." },
  { icon: "decide", title: "One call per row", line: "Cut, hold or test, with a confidence note. Thin evidence earns a hold or a small test, never a push to scale." },
  { icon: "unknown", title: "Unknowns flagged", line: "Anything the desk could not verify is listed, and excluded from scale calls rather than treated as zero." },
];
const MS = 7000;
const peak = Math.max(...SAMPLE_ROWS.map((r) => Math.abs(r.net)));

function Grade() {
  return (
    <>
      <p className="mt-big"><span className="d-grade">MODERATE</span></p>
      <ul className="mt-rows">
        <li><span>Window</span><b>Trailing 30 days (settled)</b></li>
        <li><span>Google PMax refund lag</span><b className="mt-warn">14 days still open</b></li>
        <li><span>New SKUs without COGS</span><b className="mt-warn">3 flagged</b></li>
      </ul>
    </>
  );
}
function Margin() {
  return (
    <ul className="mt-bars">
      {SAMPLE_ROWS.map((r, n) => (
        <li key={r.channel}>
          <div className="mt-line"><b>{r.channel}</b><span>{r.roas.toFixed(1)}x reported</span></div>
          <div className="mt-track" aria-hidden="true"><i className={r.net < 0 ? "is-loss" : undefined} style={{ width: `${(Math.abs(r.net) / peak) * 100}%`, transitionDelay: `${n * 0.12}s` }} /></div>
          <div className="mt-line"><span>True net margin</span><b className={r.net < 0 ? "d-neg" : "d-pos"}>{signed(r.net)}</b></div>
        </li>
      ))}
    </ul>
  );
}
function Calls() {
  return (
    <ul className="mt-calls">
      {SAMPLE_ROWS.map((r) => (
        <li key={r.channel}>
          <span className={r.net < 0 ? "mt-pill is-loss" : "mt-pill"}>{r.call}</span>
          <div><b>{r.channel}</b><span>{r.note} · {money(r.spend)} spend</span></div>
        </li>
      ))}
    </ul>
  );
}
function Unknowns() {
  return (
    <>
      <ul className="mt-rows">
        {[1, 2, 3].map((n) => <li key={n}><span>New SKU {n}</span><b className="mt-warn">COGS unknown</b></li>)}
      </ul>
      <p className="mt-note">Excluded from scale calls rather than treated as $0 cost.</p>
    </>
  );
}
const VIEWS = [Grade, Margin, Calls, Unknowns];

export default function MemoTour() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [auto, setAuto] = useState(true);
  const [seen, setSeen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) setAuto(false);
    const el = root.current;
    if (!el || typeof IntersectionObserver === "undefined") { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => setSeen(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || paused || !seen) return;
    const t = setTimeout(() => setI((n) => (n + 1) % STEPS.length), MS);
    return () => clearTimeout(t);
  }, [i, auto, paused, seen]);

  const pick = (n: number) => { setI(n); setAuto(false); };
  const keys = (e: KeyboardEvent) => {
    const d = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const n = (i + d + STEPS.length) % STEPS.length;
    pick(n);
    root.current?.querySelector<HTMLElement>(`#mt-t${n}`)?.focus();
  };
  const running = auto && !paused && seen;

  return (
    <div className="tr mt" ref={root} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="tr-tabs mt-tabs" role="tablist" aria-label="Parts of the memo" onKeyDown={keys}>
        {STEPS.map((x, n) => (
          <button key={x.title} type="button" role="tab" id={`mt-t${n}`} aria-selected={n === i} aria-controls={`mt-p${n}`} tabIndex={n === i ? 0 : -1} className={n === i ? "on" : ""} onClick={() => pick(n)}>
            <span className="tr-top"><span className="tr-ic"><Icon name={x.icon} size={18} /></span><b>{x.title}</b></span>
            <em>{x.line}</em>
            <span className="tr-bar" aria-hidden="true"><i key={n === i ? `${i}-${running}` : "x"} style={n === i && auto ? { animationDuration: `${MS}ms`, animationPlayState: running ? "running" : "paused" } : undefined} className={n === i && auto ? "run" : n < i ? "done" : ""} /></span>
          </button>
        ))}
      </div>
      <div className="mt-stage">
        {VIEWS.map((View, n) => (
          <div key={STEPS[n].title} className={n === i ? "mt-panel on" : "mt-panel"} id={`mt-p${n}`} role="tabpanel" aria-labelledby={`mt-t${n}`}>
            <View />
          </div>
        ))}
        <p className="mt-stamp">Illustrative figures, not a client account</p>
      </div>
    </div>
  );
}
