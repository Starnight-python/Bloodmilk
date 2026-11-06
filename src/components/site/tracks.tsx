import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const TRACKS = [
  {
    n: "01",
    title: "Dark Water",
    cover: "/img/track-dark-water.png",
    alt: "Обложка сингла Dark Water — тёмная вода и красные круги",
  },
  {
    n: "02",
    title: "Our Souls",
    cover: "/img/track-our-souls.png",
    alt: "Обложка сингла Our Souls — два духа из красного и белого дыма",
  },
  {
    n: "03",
    title: "Signal",
    cover: "/img/track-signal.png",
    alt: "Обложка сингла Signal — глитч-волна на чёрном фоне",
  },
  {
    n: "04",
    title: "To Pieces",
    cover: "/img/track-to-pieces.png",
    alt: "Обложка сингла To Pieces — разбитый фарфор с красными трещинами",
  },
];

const YM_URL = "https://music.yandex.ru/artist/21462579";

export function Tracks() {
  return (
    <section id="music" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs tracking-[0.4em] text-blood uppercase">
                {"//"} дискография
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-milk md:text-5xl">
                СИНГЛЫ <span className="text-stroke-red">2025</span>
              </h2>
            </div>
            <a
              href={YM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="drip-line font-mono text-xs tracking-[0.2em] text-bone transition-colors hover:text-milk"
            >
              ВСЯ ДИСКОГРАФИЯ ↗
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-16 xl:grid-cols-4">
          {TRACKS.map((t, i) => (
            <Reveal key={t.n} delay={i * 0.08}>
              <a
                href={YM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-border bg-[#0a0909] transition-all duration-500 hover:border-blood/60 hover:shadow-[0_0_44px_rgba(224,27,27,0.16)]"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={t.cover}
                    alt={t.alt}
                    width={1024}
                    height={1024}
                    quality={75}
                    className="h-full w-full object-cover saturate-[0.85] transition-all duration-700 group-hover:scale-105 group-hover:saturate-125"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#7a0f0f]/80 via-[#060607]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="flex min-h-11 items-center gap-2 border border-milk/40 bg-[#060607]/60 px-4 py-2 font-mono text-[11px] tracking-[0.25em] text-milk backdrop-blur-sm">
                      СЛУШАТЬ <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 font-mono text-xs text-blood">
                    /{t.n}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 p-4">
                  <div>
                    <h3 className="font-display text-base font-bold text-milk transition-colors group-hover:text-blood md:text-lg">
                      {t.title}
                    </h3>
                    <p className="mt-1 font-mono text-[10px] tracking-[0.3em] text-bone/70 uppercase">
                      single — 2025
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-bone/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blood" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* playlists strip */}
        <Reveal delay={0.1}>
          <div className="mt-14 border border-blood/25 bg-gradient-to-r from-[#1a0606] via-[#0d0505] to-[#1a0606] p-6 md:mt-16 md:p-8">
            <p className="font-mono text-[10px] tracking-[0.35em] text-bone/80 uppercase md:text-xs">
              в эдиториальных плейлистах яндекс музыки
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://music.yandex.ru/artist/21462579"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 border border-blood/50 px-4 py-2 font-display text-sm font-bold text-milk transition-all duration-300 hover:bg-blood hover:text-white"
              >
                <span className="text-blood transition-colors group-hover:text-white">
                  ★
                </span>
                Метал: открытия
              </a>
              <a
                href="https://music.yandex.ru/artist/21462579"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 border border-blood/50 px-4 py-2 font-display text-sm font-bold text-milk transition-all duration-300 hover:bg-blood hover:text-white"
              >
                <span className="text-blood transition-colors group-hover:text-white">
                  ★
                </span>
                Стихии метала
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
