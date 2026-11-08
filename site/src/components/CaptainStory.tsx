import { useStory } from "./Stories";

const Mark = () => (
  <svg viewBox="99 121 301 257" aria-hidden="true"><path d="M99,121 L400,121 L400,170 L296,170 L296,328 L400,328 L400,378 L200,378 L200,170 L99,170 Z" fill="currentColor" /></svg>
);

/** Captain answering two questions: one from fixed numbers (free), one written by AI and checked against the numbers (1 credit). */
export default function CaptainStory() {
  const total = 6;
  const { ref, s } = useStory(total, 1500, 800);
  const at = (n: number) => (s >= n ? " in" : "");
  return (
    <div className="cp" ref={ref} role="img" aria-label="Captain answers a question about a decision from your own numbers, then answers an open question, written by AI and checked against your numbers.">
      <div className="cp-win" aria-hidden="true">
        <div className="cp-head">
          <span className="cp-logo"><Mark /></span>
          <b>Captain</b>
          <span className="cp-sub">Knows your numbers. Never changes your accounts.</span>
        </div>
        <div className="cp-body">
          <div className="cp-msg cp-bot in">Hi, I am Captain. Ask me about your data, your evidence level or any decision.</div>
          <div className={`cp-msg cp-me${at(1)}`}>Why did you pick the studio tour video?</div>
          <div className={`cp-msg cp-bot cp-typing${s === 2 ? " in" : ""}${s > 2 ? " gone" : ""}`}><i></i><i></i><i></i></div>
          <div className={`cp-msg cp-bot${at(3)}`}>
            It brought 11 orders on 4 days of spend, the best of your three promotions. Break-even is 2.0x and its return is 3.1x.
            <span className="cp-tag cp-free">From your numbers · free</span>
          </div>
          <div className={`cp-msg cp-me${at(4)}`}>What would make you change your mind?</div>
          <div className={`cp-msg cp-bot cp-typing${s === 5 ? " in" : ""}${s > 5 ? " gone" : ""}`}><i></i><i></i><i></i></div>
          <div className={`cp-msg cp-bot${at(6)}`}>
            If its return slipped under 2.0x over the next week, I would stop the test. More orders linked to it would make the call firmer.
            <span className="cp-tag cp-ai"><svg viewBox="0 0 24 24" width="12" height="12"><path d="m5 12.5 4.2 4.2L19 7" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>Written by AI, checked against your numbers · 1 credit</span>
          </div>
        </div>
      </div>
    </div>
  );
}
