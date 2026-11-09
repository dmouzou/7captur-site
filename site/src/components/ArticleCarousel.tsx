import ArticleArt from "./ArticleArt";
import { useEffect, useRef, useState } from "react";

interface Item { slug: string; topic: string; title: string; description: string }

/** Horizontal, scroll-snapping article slider with previous and next buttons. Keyboard and touch work natively. */
export default function ArticleCarousel({ items }: { items: Item[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = () => {
    const el = track.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  };
  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".res");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 340) + 20), behavior: "smooth" });
  };

  return (
    <div className="res-carousel" aria-roledescription="carousel" aria-label="Articles">
      <div className="res-track" ref={track} onScroll={update} tabIndex={0}>
        {items.map((a) => (
          <a key={a.slug} className="res" href={`/articles/${a.slug}/`}>
            <ArticleArt slug={a.slug} topic={a.topic} />
            <span className="tag">{a.topic}</span>
            <h3>{a.title}</h3>
            <p>{a.description}</p>
            <span className="more">Read the article</span>
          </a>
        ))}
      </div>
      <div className="res-nav">
        <button type="button" onClick={() => go(-1)} disabled={edge.start} aria-label="Previous articles">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 6-6 6 6 6" /></svg>
        </button>
        <button type="button" onClick={() => go(1)} disabled={edge.end} aria-label="Next articles">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6" /></svg>
        </button>
      </div>
    </div>
  );
}
