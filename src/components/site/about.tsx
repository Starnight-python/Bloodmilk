import Image from "next/image";
import { Reveal } from "./reveal";

const STATS = [
  { value: "04", label: "сингла — 2025" },
  { value: "02", label: "эдиториала Яндекс Музыки" },
  { value: "NU", label: "metal reincarnation" },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.4em] text-blood uppercase">
            {"//"} кто он
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-milk md:text-5xl">
            ИЗ ЧЕРНОЙ ГЛУБИНЫ —
            <br />
            <span className="text-blood">НОВОЕ ИМЯ</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-[5fr_7fr] md:gap-14">
          {/* image */}
          <Reveal delay={0.1}>
            <div className="scanlines group relative mx-auto w-full max-w-sm overflow-hidden border border-border md:max-w-none">
              <div className="absolute top-0 left-0 z-10 h-5 w-5 border-t-2 border-l-2 border-blood" />
              <div className="absolute top-0 right-0 z-10 h-5 w-5 border-t-2 border-r-2 border-blood" />
              <div className="absolute bottom-0 left-0 z-10 h-5 w-5 border-b-2 border-l-2 border-blood" />
              <div className="absolute right-0 bottom-0 z-10 h-5 w-5 border-r-2 border-b-2 border-blood" />
              <Image
                src="/img/figure.png"
                alt="Загадочная фигура в дыму — визуальный образ BLOODMILK"
                width={768}
                height={1344}
                quality={75}
                className="h-auto w-full object-cover opacity-90 grayscale-[0.35] transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060607] via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.35em] text-bone uppercase">
                blxxd_m1lk — in the fog
              </p>
            </div>
          </Reveal>

          {/* text */}
          <div className="flex flex-col justify-center">
            <Reveal delay={0.15}>
              <p className="text-base leading-relaxed text-bone md:text-lg">
                <span className="font-semibold text-milk">BLOODMILK</span> —
                новое имя русской тяжёлой сцены, работающее на стыке нью-металла
                и современной тьмы. Грязные перегруженные гитары, давящий бит и
                вокал, в котором слышно и ярость, и пустоту — всё это и есть
                формула{" "}
                <span className="text-blood">nu-metal reincarnation</span>.
              </p>
              <p className="mt-5 text-base leading-relaxed text-bone md:text-lg">
                В 2025 году артист выдал серию синглов —{" "}
                <span className="text-milk">Dark Water</span>,{" "}
                <span className="text-milk">Our Souls</span>,{" "}
                <span className="text-milk">Signal</span> и{" "}
                <span className="text-milk">To Pieces</span> — и был замечен
                редакцией Яндекс Музыки: треки попали в плейлисты{" "}
                <span className="text-milk">«Метал: открытия»</span> и{" "}
                <span className="text-milk">«Стихии метала»</span>.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 grid grid-cols-3 gap-px border border-border bg-border">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center gap-1 bg-[#0a0909] px-2 py-6 text-center"
                  >
                    <span className="font-display text-2xl font-extrabold text-blood md:text-4xl">
                      {s.value}
                    </span>
                    <span className="font-mono text-[10px] leading-snug tracking-widest text-bone/80 uppercase md:text-[11px]">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
