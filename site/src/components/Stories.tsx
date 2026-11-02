import { useEffect, useRef, useState, type ReactNode } from "react";

const Mark = () => (
  <svg viewBox="99 121 301 257" aria-hidden="true"><path d="M99,121 L400,121 L400,170 L296,170 L296,328 L400,328 L400,378 L200,378 L200,170 L99,170 Z" fill="currentColor" /></svg>
);

/** Plays stages 0..total once, waits `gap` ms, then plays again. Pauses off-screen. Static final frame when motion is reduced. */
export function useStory(total: number, ms = 1000, gap = 1000) {
  const ref = useRef<HTMLDivElement>(null);
  const [s, setS] = useState(total);
  const [k, setK] = useState(0);
  const [vis, setVis] = useState(true);
  useEffect(() => {
    const el = ref.current; if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setVis(e.isIntersecting), { threshold: 0.2 });
    io.observe(el); return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !vis) return;
    let alive = true, t: number;
    const step = (i: number) => {
      if (!alive) return;
      setS(i);
      t = window.setTimeout(() => (i >= total ? (setS(-1), (t = window.setTimeout(() => step(0), 60 + gap))) : step(i + 1)), i >= total ? 2200 : ms);
    };
    step(0);
    return () => { alive = false; clearTimeout(t); };
  }, [vis, k, total, ms, gap]);
  return { ref, s, replay: () => setK((n) => n + 1) };
}

function Story({ title, total, children }: { title: string; total: number; children: (s: number) => ReactNode }) {
  const { ref, s } = useStory(total);
  return (
    <div className="an" ref={ref} role="group" aria-label={title}>
      {children(s)}
    </div>
  );
}
const Engine = ({ on, style }: { on: boolean; style?: React.CSSProperties }) => <span className={`an-logo${on ? " on" : ""}`} style={style}><Mark /></span>;

const Next = ({ on, text, ev, src }: { on: boolean; text: string; ev: string; src: string }) => (
  <div className={`an-next${on ? " in" : ""}`}>
    <b>Next move</b>
    <p>{text}</p>
    <div><em className="an-src">{src}</em><em className="an-ev">{ev}</em></div>
  </div>
);

/* 1. Social-first: scattered signals in, post scoreboard out */
const CHIPS: [string, string, string][] = [["DM: is this available?", "4%", "8%"], ["WhatsApp order", "62%", "4%"], ["Reel", "10%", "62%"], ["Story", "70%", "58%"], ["Which post sold it?", "34%", "80%"]];
export function SocialStory() {
  return (
    <Story title="Social-first seller" total={4}>
      {(s) => (
        <>
          {CHIPS.map((c, i) => <span key={c[0]} className={`an-chip${s >= 2 ? " gone" : ""}`} style={{ left: c[1], top: c[2], transitionDelay: `${s >= 2 ? i * 70 : i * 120}ms` }}>{c[0]}</span>)}
          <Engine on={s >= 1} style={s >= 3 ? { top: "6%", left: "92%", transform: "scale(.7)" } : undefined} />
          <div className={`an-board${s >= 3 ? " in" : ""}`}>
            <div className="an-row an-head"><span>Post</span><span>Likes</span><span>Sales</span></div>
            <div className="an-row"><span>Trend video {s >= 4 && <em className="an-tag grey">most likes</em>}</span><span>1,200</span><span>0</span></div>
            <div className="an-row"><span>How to choose a size {s >= 4 && <em className="an-tag lime">most sales</em>}</span><span>180</span><span>4</span></div>
            <div className="an-row"><span>Customer photo</span><span>310</span><span>2</span></div>
          </div>
          <Next on={s >= 4} text="Make more posts like the sizing post." src="Entered by you" ev="Evidence: partial" />
        </>
      )}
    </Story>
  );
}

/* 2. Resellers: scan items, costs become margins, restock or pause */
const ITEMS = [["Linen shirt", 70, "42%", "Restock"], ["Canvas tote", 25, "18%", "Pause"], ["Wool scarf", 50, "", ""]] as const;
export function ResellerStory() {
  return (
    <Story title="Reseller" total={4}>
      {(s) => (
        <>
          <Engine on={s >= 1} style={s >= 3 ? { top: "6%", left: "92%", transform: "scale(.7)" } : { top: s >= 1 ? "70%" : "8%", left: "50%" }} />
          <div className="an-list">
            {ITEMS.map((it, i) => (
              <div key={it[0]} className="an-item">
                <b>{it[0]}</b>
                <span className="an-bar"><i style={{ width: s >= 2 ? `${it[1]}%` : "6%" }} /></span>
                <span className="an-val">{s >= 2 && it[2] ? <>{it[2]} margin</> : <u>cost unknown</u>}</span>
                <span className="an-slot">{s >= 3 && it[3] && <em className={`an-tag ${it[3] === "Restock" ? "lime" : "grey"}`}>{it[3]}</em>}{s >= 3 && !it[3] && <em className="an-tag ghost">add cost</em>}</span>
              </div>
            ))}
          </div>
          <Next on={s >= 4} text="Restock the shirt. Add the scarf cost for a margin." src="Imported" ev="Evidence: partial" />
        </>
      )}
    </Story>
  );
}

/* 3. Services and local: enquiries fall into the engine and come out as a funnel */
export function ServiceStory() {
  return (
    <Story title="Service business" total={4}>
      {(s) => (
        <>
          {Array.from({ length: 8 }).map((_, i) => <span key={i} className={`an-dot${s >= 1 ? " fall" : ""}`} style={{ left: `${14 + i * 10}%`, transitionDelay: `${i * 90}ms`, ["--dx" as string]: `${(3.5 - i) * 26}px` }} />)}
          <Engine on={s >= 1} style={{ top: "20%" }} />
          <div className={`an-funnel${s >= 2 ? " in" : ""}`}>
            <div><span style={{ width: "100%" }} className="an-fbar">24 enquiries</span></div>
            <div><span style={{ width: s >= 3 ? "62%" : "10%" }} className="an-fbar">{s >= 3 ? "9 calls booked" : ""}</span></div>
            <div><span style={{ width: s >= 4 ? "38%" : "10%" }} className="an-fbar">{s >= 4 ? "5 clients" : ""}</span></div>
          </div>
          <Next on={s >= 4} text="Put more into Reels. Referrals are flat." src="Entered by you" ev="Evidence: partial" />
        </>
      )}
    </Story>
  );
}

/* 4. E-commerce: reported ROAS peeled down to true ROAS */
export function EcomStory() {
  const val = s2v;
  return (
    <Story title="E-commerce brand" total={4}>
      {(s) => {
        const v = val(s);
        return (
          <>
            <Engine on={s >= 1} style={{ top: "14%", left: "88%" }} />
            <div className="an-roas">
              <div className="an-rlabel"><span>{s >= 4 ? "True ROAS" : "Reported ROAS"}</span><b>{v.toFixed(1)}</b></div>
              <div className="an-track"><i style={{ width: `${(v / 3.5) * 100}%` }} className={s >= 4 ? "low" : ""} /><span className="an-be" style={{ left: `${(2.5 / 3.5) * 100}%` }}><small>break-even 2.5</small></span></div>
              <div className="an-peels">
                <em className={`an-tag grey${s >= 2 ? " in" : ""}`}>Returns -0.3</em>
                <em className={`an-tag grey${s >= 3 ? " in" : ""}`}>Fees -0.2</em>
              </div>
            </div>
            <Next on={s >= 4} text="Hold the budget. Below break-even after returns and fees." src="Imported" ev="Evidence: sufficient" />
          </>
        );
      }}
    </Story>
  );
}
const s2v = (s: number) => (s >= 4 ? 2.3 : s === 3 ? 2.5 : s === 2 ? 2.8 : 2.8);
