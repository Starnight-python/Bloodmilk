"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const BASE_DELAY = 2.1;

function GlitchWord({
  text,
  className,
  delay,
}: {
  text: string;
  className?: string;
  delay: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      initial={reduce ? false : { y: "112%" }}
      animate={reduce ? undefined : { y: 0 }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      className="block overflow-hidden"
    >
      <span
        data-text={text}
        className={`glitch inline-block ${className ?? ""}`}
      >
        {text}
      </span>
    </motion.span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/img/hero-bg.png"
          alt="Кровь и молоко — фирменный визуал BLOODMILK"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060607]/80 via-[#060607]/35 to-[#060607]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,transparent_0%,rgba(6,6,7,0.75)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#060607] to-transparent" />
      </div>

      {/* content */}
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-5 pt-24 pb-16 text-center">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: BASE_DELAY, duration: 0.7 }}
          className="mb-6 border border-blood/40 bg-blood/10 px-4 py-1.5 font-mono text-[11px] tracking-[0.4em] text-blood uppercase md:text-xs"
        >
          [ nu-metal reincarnation ]
        </motion.p>

        <h1 className="font-display font-black leading-[0.93] tracking-tight">
          <GlitchWord
            text="BLOOD"
            delay={BASE_DELAY + 0.12}
            className="text-[clamp(3.4rem,16vw,12rem)] text-milk drop-shadow-[0_0_40px_rgba(242,237,227,0.12)]"
          />
          <GlitchWord
            text="MILK"
            delay={BASE_DELAY + 0.26}
            className="text-[clamp(3.4rem,16vw,12rem)] text-blood drop-shadow-[0_0_56px_rgba(224,27,27,0.35)]"
          />
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: BASE_DELAY + 0.45, duration: 0.7 }}
          className="mt-7 max-w-xl text-balance text-sm leading-relaxed text-bone md:text-base"
        >
          Тяжёлый звук, чёрная сцена и свежая кровь русского нью-металла.
          Кровь и молоко — две стихии одного имени.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: BASE_DELAY + 0.6, duration: 0.7 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="https://music.yandex.ru/artist/21462579"
            target="_blank"
            rel="noopener noreferrer"
            className="blood-glow inline-flex min-h-12 items-center justify-center gap-2 bg-blood px-7 font-mono text-[13px] font-bold tracking-[0.18em] text-white transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            СЛУШАТЬ В ЯНДЕКС МУЗЫКЕ ↗
          </a>
          <a
            href="#links"
            className="drip-line inline-flex min-h-12 items-center justify-center border border-border px-7 font-mono text-[13px] tracking-[0.18em] text-milk transition-colors hover:border-blood/60"
          >
            ВСЕ ССЫЛКИ
          </a>
        </motion.div>
      </div>

      {/* bottom meta */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ delay: BASE_DELAY + 0.85, duration: 0.8 }}
        className="relative z-10 mx-auto flex w-full max-w-6xl items-end justify-between px-5 pb-7"
      >
        <p className="hidden font-mono text-[10px] tracking-[0.3em] text-bone/60 uppercase sm:block md:text-[11px]">
          est. 2025 // ru underground
        </p>
        <div className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-[0.3em] text-bone/60 uppercase">
            scroll
          </span>
          <div className="h-10 w-px overflow-hidden bg-border">
            <div className="scroll-hint-line h-full w-full bg-blood" />
          </div>
          <ChevronDown className="h-3.5 w-3.5 text-blood" />
        </div>
        <p className="hidden font-mono text-[10px] tracking-[0.3em] text-bone/60 uppercase sm:block md:text-[11px]">
          @blood_m1lk
        </p>
      </motion.div>
    </section>
  );
}
