import { useState } from "react";
import { Icon, type IconName } from "./Icons";
import { HubMock, ImportPreview, ProvTable, RecCard, Digest } from "./Mockups";

const SCREENS: { icon: IconName; title: string; line: string; view: () => JSX.Element }[] = [
  { icon: "add", title: "Record", line: "Leads, sales, spend and posts, each in one tap.", view: () => <HubMock /> },
  { icon: "camera", title: "Import", line: "Drop in a file. Columns are matched for you to check.", view: () => <ImportPreview /> },
  { icon: "understand", title: "Label", line: "Every number shows where it came from.", view: () => <ProvTable /> },
  { icon: "decide", title: "Decide", line: "One clear action, with the reasons and the unknowns.", view: () => <RecCard move="Test the studio tour reel again for five days. Keep the budget where it is." why="It brought more enquiries per dollar than the comparison post in the data you entered." unknown="Enquiries are not yet tied to confirmed orders." next="Spend, enquiries and confirmed orders for the same five days." tags={["Evidence: partial", "Source: entered by you"]} /> },
  { icon: "clock", title: "Review", line: "A weekly summary of what changed and what to do next.", view: () => <Digest /> },
];

export default function ProductTour() {
  const [i, setI] = useState(0);
  const s = SCREENS[i];
  return (
    <div className="tour">
      <ol className="tour-nav" aria-label="Tour steps">
        {SCREENS.map((x, n) => (
          <li key={x.title}>
            <button type="button" className={n === i ? "on" : ""} onClick={() => setI(n)} aria-current={n === i ? "step" : undefined}>
              <span className="hub-ic"><Icon name={x.icon} size={20} /></span>
              <span><b>{x.title}</b><em>{x.line}</em></span>
            </button>
          </li>
        ))}
      </ol>
      <div className="tour-view">
        <div className="tour-screen" key={i}>{s.view()}</div>
        <div className="tour-foot">
          <span>{i + 1} of {SCREENS.length}</span>
          <button type="button" className="btn btn-primary btn-sm" onClick={() => setI((i + 1) % SCREENS.length)}>{i === SCREENS.length - 1 ? "Start over" : `Next: ${SCREENS[i + 1].title}`}</button>
        </div>
      </div>
    </div>
  );
}
