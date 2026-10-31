const P: Record<string, string> = {
  leads: "M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM20 19v-1.5a3.5 3.5 0 0 0-2.6-3.4M15.5 5.2a3 3 0 0 1 0 5.6",
  sales: "M12 3v18M16.5 7.5c-.6-1.2-2.2-2-4.5-2-2.6 0-4 1.1-4 2.7 0 4 8.5 1.8 8.5 6 0 1.7-1.7 2.8-4.5 2.8-2.4 0-4.2-.9-4.8-2.4",
  spend: "M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5zM3 10h18M7 15h3",
  posts: "M4 13v-2a1 1 0 0 1 1-1h3l8-4.5v13L8 14H5a1 1 0 0 1-1-1zM8 14l1 5h2.5l-1-4.5M19 9.5a3.5 3.5 0 0 1 0 5",
  plug: "M9 3v5M15 3v5M6.5 8h11v3.5a5.5 5.5 0 0 1-11 0zM12 17v4",
  camera: "M4 8.5A1.5 1.5 0 0 1 5.5 7H8l1.5-2h5L16 7h2.5A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5zM12 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z",
  add: "M12 3v12m0 0-4-4m4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",
  understand: "M12 3 4.5 6v5.5c0 4.5 3.1 8 7.5 9.5 4.4-1.5 7.5-5 7.5-9.5V6zM8.5 12l2.5 2.5 4.5-5",
  decide: "M5 19V9m0 0 4-4m-4 4h9a5 5 0 0 1 5 5v5M16 16l3 3 3-3",
  chart: "M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2",
  coins: "M12 6c-4 0-7 1-7 2.5v7C5 17 8 18 12 18s7-1 7-2.5v-7C19 7 16 6 12 6zM5 8.5C5 10 8 11 12 11s7-1 7-2.5M5 12c0 1.5 3 2.5 7 2.5s7-1 7-2.5",
};
export type IconName = keyof typeof P;
export function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={P[name]} /></svg>
  );
}
