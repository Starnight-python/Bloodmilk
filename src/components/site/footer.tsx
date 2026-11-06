import { ArrowUp } from "lucide-react";
import { Reveal } from "./reveal";

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-border">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-8">
        <Reveal>
          {/* the signature line */}
          <p className="text-center font-mono text-sm tracking-[0.2em] text-bone md:text-base">
            made{" "}
            <a
              href="https://t.me/starnight_official"
              target="_blank"
              rel="noopener noreferrer"
              className="drip-line text-blood transition-colors hover:text-[#ff4b4b]"
              aria-label="starnight — Telegram-канал автора"
            >
              starnight
            </a>{" "}
            for{" "}
            <span className="font-bold text-milk">bloodmilk</span>
          </p>

          <p className="mt-3 text-center font-mono text-[10px] tracking-[0.3em] text-bone/50 uppercase">
            ★ secured · no trackers · no cookies ★
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <p className="font-mono text-[10px] tracking-[0.25em] text-bone/60 uppercase md:text-[11px]">
            © 2026 bloodmilk
          </p>
          <p className="font-mono text-[10px] tracking-[0.25em] text-bone/60 uppercase md:text-[11px]">
            nu-metal reincarnation
          </p>
          <a
            href="#top"
            className="inline-flex min-h-11 items-center gap-2 border border-border px-4 font-mono text-[10px] tracking-[0.25em] text-bone uppercase transition-all duration-300 hover:border-blood/60 hover:text-milk md:text-[11px]"
            aria-label="Наверх"
          >
            наверх <ArrowUp className="h-3.5 w-3.5 text-blood" />
          </a>
        </div>
      </div>

      {/* giant watermark */}
      <div
        aria-hidden
        className="pointer-events-none relative -mb-[2vw] flex justify-center overflow-hidden select-none"
      >
        <span className="text-stroke font-display text-[13.5vw] leading-[0.85] font-black tracking-tight whitespace-nowrap">
          BLOODMILK
        </span>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#060607] to-transparent" />
      </div>
    </footer>
  );
}
