"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const WORD = "BLOODMILK".split("");

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [gone, setGone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const duration = reduce ? 300 : 1400;
    const start = performance.now();
    let raf = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        timer = setTimeout(() => {
          setGone(true);
          document.body.style.overflow = "";
        }, 220);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      if (timer) clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#060607] select-none"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden
        >
          {/* rising blood */}
          <div
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#7a0f0f]/70 to-[#e01b1b]/20 transition-[height] duration-150 ease-out"
            style={{ height: `${progress}%` }}
          />

          {/* word */}
          <div className="relative z-10 flex overflow-hidden px-4">
            {WORD.map((ch, i) => (
              <motion.span
                key={i}
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.12 + i * 0.055,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`font-display text-[clamp(2rem,8vw,4.5rem)] font-extrabold leading-none tracking-tight ${
                  i < 5 ? "text-milk" : "text-blood"
                }`}
              >
                {ch}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative z-10 mt-4 font-mono text-[11px] tracking-[0.45em] text-bone uppercase"
          >
            nu-metal reincarnation
          </motion.p>

          {/* counter */}
          <div className="absolute right-5 bottom-5 z-10 font-mono text-5xl font-bold text-milk/90 tabular-nums md:text-7xl">
            {progress}
            <span className="text-blood">%</span>
          </div>
          <div className="absolute top-5 left-5 z-10 font-mono text-[11px] tracking-[0.35em] text-bone/70 uppercase">
            loading_[blood+milk]
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
