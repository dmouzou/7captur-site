import { useEffect, useRef, useState } from "react";
import { Icon, type IconName } from "./Icons";

const SCREENS: { icon: IconName; title: string; line: string; shot: string; alt: string }[] = [
  { icon: "camera", title: "Import", line: "Drop in a file or type a record. Columns are matched for you to check.", shot: "add", alt: "7Captur Add screen with import and one-tap record entry" },
  { icon: "decide", title: "Decide", line: "One clear action, with the reasons, the unknowns and what would change it.", shot: "decide", alt: "7Captur recommendation with action, reasons and unknowns" },
  { icon: "clock", title: "Review", line: "On Growth, a weekly summary of what changed and what is waiting for review.", shot: "weekly", alt: "7Captur weekly summary with decisions ready to review" },
];
const MS = 7000;

export default function ProductTour() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [auto, setAuto] = useState(true);
  const [seen, setSeen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches) setAuto(false);
    const el = root.current;
    if (!el || typeof IntersectionObserver === "undefined") { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => setSeen(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || paused || !seen) return;
    const t = setTimeout(() => setI((n) => (n + 1) % SCREENS.length), MS);
    return () => clearTimeout(t);
  }, [i, auto, paused, seen]);

  const pick = (n: number) => { setI(n); setAuto(false); };
  const running = auto && !paused && seen;

  return (
    <div className="tr" ref={root} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="tr-tabs" role="tablist" aria-label="Tour steps">
        {SCREENS.map((x, n) => (
          <button key={x.title} type="button" role="tab" id={`tr-t${n}`} aria-selected={n === i} aria-controls="tr-panel" className={n === i ? "on" : ""} onClick={() => pick(n)}>
            <span className="tr-top"><span className="tr-ic"><Icon name={x.icon} size={18} /></span><b>{x.title}</b><span className="tr-n">0{n + 1}</span></span>
            <em>{x.line}</em>
            <span className="tr-bar" aria-hidden="true"><i key={n === i ? `${i}-${running}` : "x"} style={n === i && auto ? { animationDuration: `${MS}ms`, animationPlayState: running ? "running" : "paused" } : undefined} className={n === i && auto ? "run" : n < i ? "done" : ""} /></span>
          </button>
        ))}
      </div>
      <div className="tr-stage" id="tr-panel" role="tabpanel" aria-labelledby={`tr-t${i}`}>
        <div className="shot tr-shot">
          <div className="shot-bar" aria-hidden="true"><i></i><i></i><i></i><span className="shot-url">app.7captur.com</span></div>
          <div className="tr-imgs">
            {SCREENS.map((x, n) => (
              <span key={x.shot} className={n === i ? "tr-img on" : "tr-img"} aria-hidden={n === i ? undefined : true}>
                <img className="lt" src={`/assets/app/${x.shot}-light.webp`} alt={n === i ? x.alt : ""} width="1800" height="1138" loading="lazy" decoding="async" />
                <img className="dk" src={`/assets/app/${x.shot}-dark.webp`} alt="" width="1800" height="1138" loading="lazy" decoding="async" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
