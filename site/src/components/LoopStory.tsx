import type { ReactNode } from "react";
import { useStory } from "./Stories";

const Mark = () => (
  <svg viewBox="99 121 301 257" aria-hidden="true"><path d="M99,121 L400,121 L400,170 L296,170 L296,328 L400,328 L400,378 L200,378 L200,170 L99,170 Z" fill="currentColor" /></svg>
);
const Engine = ({ on, off }: { on: boolean; off?: boolean }) => <span className={`lp-logo${on ? " on" : ""}${off ? " off" : ""}`}><Mark /></span>;

function Panel({ tag, total, scene, why, most, ours }: { tag: string; total: number; scene: (s: number) => ReactNode; why: string; most: string; ours: string }) {
  const { ref, s } = useStory(total);
  return (
    <div className="lp-card">
      <div className="lp-tag">{tag}</div>
      <div className="lp-scene" ref={ref} aria-hidden="true">{scene(s)}</div>
      <p className="lp-why">{why}</p>
      <p className="lp-vs"><span><b>Most tools</b>{most}</span><span className="us"><b>7Captur</b>{ours}</span></p>
    </div>
  );
}

const METRICS: [string, string, string][] = [["ROAS 3.1", "4%", "6%"], ["CTR 2.4%", "58%", "4%"], ["Reach 12k", "8%", "40%"], ["CPC $0.80", "62%", "42%"], ["Returns 14%", "14%", "74%"], ["Sessions 3.2k", "56%", "76%"]];

export default function LoopStory() {
  return (
    <div className="lp-grid">
      <Panel tag="1. Decide" total={4}
        why="A growing online shop has ten metrics and one budget decision. Charts don't make it."
        most=" Charts and reports. You work out the next step yourself."
        ours=" One clear next move, and what we can't tell yet."
        scene={(s) => (
          <>
            {METRICS.map((m, i) => <span key={m[0]} className={`lp-chip${s >= 2 ? " gone" : ""}`} style={{ left: m[1], top: m[2], transitionDelay: `${i * 60}ms` }}>{m[0]}</span>)}
            <Engine on={s >= 1 && s <= 2} off={s >= 3} />
            <div className={`lp-rec${s >= 3 ? " in" : ""}`}>
              <b>Next move</b>
              <p>Raise the spring-sale ad budget by $50 a day.</p>
              <div className={`lp-meta${s >= 4 ? " in" : ""}`}><em>Evidence: partial</em><em className="dim">Unknown: shipping cost</em></div>
            </div>
          </>
        )} />
      <Panel tag="2. Review" total={5}
        why="A growing reseller restocks often. Advice nobody checks is just an opinion."
        most=" Report and move on. You never hear about it again."
        ours=" Every decision gets a review date, and a prompt when it is due."
        scene={(s) => (
          <>
            <div className="lp-dec"><span>Restock 40 linen shirts</span><em className={`lp-date${s >= 1 ? " in" : ""}`}>Review in 14 days</em></div>
            <div className="lp-days">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <i key={i} className={`${s >= 1 && i < Math.min(7, (s - 1) * 3 + 1) ? "fill" : ""}${s >= 3 && i === 6 ? " due" : ""}`}>{d}</i>)}
            </div>
            <div className={`lp-ask${s >= 4 ? " in" : ""}`}>
              <b>How did it go?</b>
              <div className="lp-opts">{["Better", "As expected", "Worse", "Too early"].map((o) => <span key={o} className={s >= 5 && o === "Better" ? "pick" : ""}>{o}</span>)}</div>
            </div>
            <Engine on={s === 3} off={s >= 4} />
          </>
        )} />
      <Panel tag="3. Learn" total={4}
        why="A growing studio tries many things. You find out what really worked, not what felt busy."
        most=" Tell you what happened. Never check the advice."
        ours=" Record how each decision went, including an honest 'too early'."
        scene={(s) => {
          const kinds = ["b", "b", "e", "b", "w", "b", "e", "b", "b", "w", "e", "b"];
          return (
            <>
              <div className="lp-dots">
                {kinds.map((k, i) => <i key={i} className={`k-${k}${s >= 1 + Math.floor(i / 4) ? " in" : ""}`} style={{ transitionDelay: `${(i % 4) * 90}ms` }} />)}
              </div>
              <div className={`lp-legend${s >= 3 ? " in" : ""}`}><span><i className="k-b" />7 better</span><span><i className="k-e" />3 as expected</span><span><i className="k-w" />2 worse</span></div>
              <p className={`lp-line${s >= 4 ? " in" : ""}`}>Studio log: 12 decisions. 7 brought more booked calls.</p>
              <Engine on={s >= 1 && s <= 3} />
            </>
          );
        }} />
    </div>
  );
}
