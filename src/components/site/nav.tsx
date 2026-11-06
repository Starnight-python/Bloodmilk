"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Send } from "lucide-react";

const LINKS = [
  { href: "#about", label: "О НЁМ", index: "01" },
  { href: "#music", label: "РЕЛИЗЫ", index: "02" },
  { href: "#links", label: "ССЫЛКИ", index: "03" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[80] transition-colors duration-500 ${
          scrolled
            ? "border-b border-border bg-[#060607]/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[72px]">
          <a
            href="#top"
            className="group flex items-center gap-2 font-display text-sm font-extrabold tracking-widest"
            aria-label="BLOODMILK — наверх"
          >
            <span className="text-blood transition-transform duration-300 group-hover:rotate-90 inline-block">
              ★
            </span>
            <span className="text-milk">
              BLOOD<span className="text-blood">MILK</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="drip-line font-mono text-[12px] tracking-[0.25em] text-bone transition-colors hover:text-milk"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://music.yandex.ru/artist/21462579"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blood/60 bg-blood/10 px-4 py-2 font-mono text-[12px] tracking-[0.2em] text-blood transition-all duration-300 hover:bg-blood hover:text-white hover:shadow-[0_0_24px_rgba(224,27,27,0.45)]"
            >
              СЛУШАТЬ ↗
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center text-milk md:hidden"
            aria-label="Открыть меню"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[150] flex flex-col bg-[#060607]"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="font-display text-sm font-extrabold tracking-widest text-milk">
                BLOOD<span className="text-blood">MILK</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center text-milk"
                aria-label="Закрыть меню"
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-2 px-8">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                  className="group flex items-baseline gap-4 border-b border-border py-5"
                >
                  <span className="font-mono text-xs text-blood">{l.index}</span>
                  <span className="font-display text-4xl font-extrabold text-milk transition-colors group-hover:text-blood">
                    {l.label}
                  </span>
                </motion.a>
              ))}
              <motion.a
                href="https://t.me/blood_m1lk"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.42, duration: 0.5 }}
                className="group flex items-baseline gap-4 border-b border-border py-5"
              >
                <span className="font-mono text-xs text-blood">TG</span>
                <span className="font-display text-4xl font-extrabold text-milk transition-colors group-hover:text-blood">
                  TELEGRAM ↗
                </span>
              </motion.a>
            </div>

            <div className="px-8 pb-10 font-mono text-[11px] tracking-[0.3em] text-bone/60 uppercase">
              nu-metal reincarnation — 2025/2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function NavTGIcon() {
  return <Send className="h-4 w-4" />;
}
