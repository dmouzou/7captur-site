import { useEffect, useRef, useState } from "react";

const RUNGS = [
  { have: "Likes, reach, views", says: "Suggests which content to test again.", wont: "Will not claim it sold anything.", tag: "Small test" },
  { have: "Plus enquiries and orders", says: "Compares cost per enquiry or order when the numbers line up.", wont: "Will not call a winner on a handful of orders.", tag: "Bounded change" },
  { have: "Plus revenue, costs and fees", says: "Judges return after your declared costs and may suggest a cautious budget move.", wont: "Will not change your ads. You do that.", tag: "Budget move" },
];
const LIKES = [18, 22, 30, 44, 61, 80, 96, 118];
const SALES = [31, 30, 32, 31, 30, 32, 31, 30];
const W = 360, H = 170, PX = 14, PY = 14;
const xy = (v: number[], max: number) => v.map((y, i) => `${(PX + (i * (W - PX * 2)) / (v.length - 1)).toFixed(1)},${(H - PY - (y / max) * (H - PY * 2)).toFixed(1)}`);

export default function EvidenceStory() {
  const root = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const [lv, setLv] = useState(0);
  useEffect(() => {
    const reduce = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setOn(true); setLv(2); return; }
    const el = root.current;
    if (!el) return;
    let t: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(([e]) => {
      if (t) clearInterval(t);
      if (e.isIntersecting) { setOn(true); t = setInterval(() => setLv((n) => (n + 1) % RUNGS.length), 3200); }
    }, { threshold: 0.35 });
    io.observe(el);
    return () => { io.disconnect(); if (t) clearInterval(t); };
  }, []);
  const likes = xy(LIKES, 130), sales = xy(SALES, 130);
  return (
    <div className="ev" ref={root}>
      <figure className={`ev-card ev-chart${on ? " on" : ""}`}>
        <figcaption><b>Likes tripled. Sales did not move.</b><span>Illustration: eight weeks of one account</span></figcaption>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Line chart: likes rise steadily over eight weeks while sales stay flat.">
          {[0.25, 0.5, 0.75].map((g) => <line key={g} x1={PX} x2={W - PX} y1={H - PY - g * (H - PY * 2)} y2={H - PY - g * (H - PY * 2)} className="ev-grid" />)}
          <polyline points={sales.join(" ")} className="ev-line ev-sales" pathLength={1} />
          <polyline points={likes.join(" ")} className="ev-line ev-likes" pathLength={1} />
          <circle cx={likes[likes.length - 1].split(",")[0]} cy={likes[likes.length - 1].split(",")[1]} r="4.5" className="ev-dot ev-likes-dot" />
          <circle cx={sales[sales.length - 1].split(",")[0]} cy={sales[sales.length - 1].split(",")[1]} r="4.5" className="ev-dot ev-sales-dot" />
        </svg>
        <ul className="ev-legend"><li><i className="l" />Likes</li><li><i className="s" />Sales</li></ul>
        <p>Attention is not demand. Without orders next to it, a rising line is a reason to test, not to spend.</p>
      </figure>
      <div className="ev-card ev-ladder">
        <p className="ev-eyebrow">What your data supports</p>
        <ol>
          {RUNGS.map((r, n) => (
            <li key={r.tag} className={n === lv ? "now" : n < lv ? "past" : ""}>
              <button type="button" onClick={() => setLv(n)} aria-pressed={n === lv}>
                <span className="ev-step">{n + 1}</span>
                <span className="ev-have"><b>{r.have}</b><em>{r.tag}</em></span>
              </button>
              <div className="ev-say" aria-hidden={n !== lv}>
                <p><span>7Captur can say</span>{r.says}</p>
                <p className="no"><span>7Captur will not</span>{r.wont}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
