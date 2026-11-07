import { useEffect, useRef, useState } from "react";

const WORDS = ["clear", "concise", "data-driven"];

/**
 * Rolling word in the hero headline. Words slide up one at a time inside a clipped slot whose width follows
 * the current word, so "decision" always sits right next to it. Pauses on hover and focus, and stays still
 * (showing "clear") for people who prefer reduced motion.
 */
export default function HeroWords() {
  const [i, setI] = useState(0);
  const [snap, setSnap] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [widths, setWidths] = useState<number[]>([]);
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const list = [...WORDS, WORDS[0]]; // the first word repeats at the end so the loop never jumps

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const measure = () => setWidths(refs.current.map((r) => r?.offsetWidth ?? 0));
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (reduced || paused) return;
    const t = window.setInterval(() => setI((n) => n + 1), 2300);
    return () => clearInterval(t);
  }, [reduced, paused]);

  // After rolling onto the repeated first word, jump back to the real first word with no animation.
  useEffect(() => {
    if (i !== WORDS.length) return;
    const t = window.setTimeout(() => { setSnap(true); setI(0); }, 620);
    return () => clearTimeout(t);
  }, [i]);
  useEffect(() => {
    if (!snap) return;
    const r = requestAnimationFrame(() => requestAnimationFrame(() => setSnap(false)));
    return () => cancelAnimationFrame(r);
  }, [snap]);

  // The repeated first word at the end shares the first word's width, so the slot never jumps to the widest word.
  const widthAt = (n: number) => widths[n % WORDS.length] ?? 0;
  const w = widthAt(i);
  const prev = widthAt(i === 0 ? WORDS.length - 1 : i - 1);
  const dir = w && prev && w < prev ? "shrink" : "grow";
  return (
    <span
      className="hero-words"
      data-dir={dir}
      style={w ? { width: w } : undefined}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span className="sr-only">clear, concise, data-driven</span>
      <span className="hero-words-track" aria-hidden="true" style={{ transform: `translateY(${-i * 1.2}em)`, transition: snap ? "none" : undefined }}>
        {list.map((word, n) => (
          <span key={n} className="hero-word"><span ref={(el) => { if (n < WORDS.length) refs.current[n] = el; }}>{word}</span></span>
        ))}
      </span>
    </span>
  );
}
