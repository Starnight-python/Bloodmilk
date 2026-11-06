const ITEMS = [
  "BLOODMILK",
  "NU-METAL REINCARNATION",
  "DARK WATER",
  "OUR SOULS",
  "SIGNAL",
  "TO PIECES",
  "2025/2026",
];

function Strip({ red = false }: { red?: boolean }) {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      className={`flex shrink-0 items-center gap-8 pr-8 ${
        red ? "text-blood" : "text-milk"
      }`}
    >
      {row.map((item, i) => (
        <span key={i} className="flex items-center gap-8 whitespace-nowrap">
          <span
            className={`font-display text-sm font-bold tracking-[0.2em] ${
              red ? "text-blood/90" : "text-milk/85"
            }`}
          >
            {item}
          </span>
          <span className={red ? "text-blood/60" : "text-blood"}>★</span>
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-hidden className="relative z-10 -my-3 select-none">
      <div className="-rotate-[1.2deg] scale-[1.02] border-y border-blood/35 bg-[#0a0505] py-3.5 shadow-[0_10px_50px_rgba(224,27,27,0.12)]">
        <div className="overflow-hidden">
          <div className="marquee-track">
            <Strip />
            <Strip />
          </div>
        </div>
      </div>
    </section>
  );
}

export function MarqueeSlow() {
  return (
    <section aria-hidden className="relative z-10 select-none">
      <div className="border-y border-border bg-[#080809] py-3">
        <div className="overflow-hidden opacity-60">
          <div className="marquee-track-slow">
            <Strip red />
            <Strip red />
          </div>
        </div>
      </div>
    </section>
  );
}
