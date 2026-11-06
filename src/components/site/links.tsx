import {
  Send,
  Music2,
  Globe,
  Headphones,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./reveal";
import type { LucideIcon } from "lucide-react";

type LinkItem = {
  name: string;
  handle: string;
  url: string;
  icon: LucideIcon;
  tag: string;
};

const LINKS: LinkItem[] = [
  {
    name: "TELEGRAM",
    handle: "@blood_m1lk",
    url: "https://t.me/blood_m1lk",
    icon: Send,
    tag: "канал и связь",
  },
  {
    name: "TIKTOK",
    handle: "@blxxd_m1lk",
    url: "https://www.tiktok.com/@blxxd_m1lk",
    icon: Music2,
    tag: "видео и вайб",
  },
  {
    name: "VK МУЗЫКА",
    handle: "vk.com/artist/bloodmilk",
    url: "https://vk.com/artist/bloodmilk",
    icon: Globe,
    tag: "треки и релизы",
  },
  {
    name: "ЯНДЕКС МУЗЫКА",
    handle: "artist/21462579",
    url: "https://music.yandex.ru/artist/21462579",
    icon: Headphones,
    tag: "слушать всё",
  },
  {
    name: "INSTAGRAM",
    handle: "@blood_m1lk",
    url: "https://www.instagram.com/blood_m1lk",
    icon: Instagram,
    tag: "закулисье",
  },
];

export function Links() {
  return (
    <section id="links" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.4em] text-blood uppercase">
            {"//"} связь
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-milk md:text-5xl">
            НАЙДИ ЕГО <span className="text-blood">ВО ТЬМЕ</span>
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16">
          {LINKS.map((l, i) => {
            const Icon = l.icon;
            return (
              <Reveal key={l.name} delay={i * 0.06}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep group flex items-center gap-4 border-b border-border px-2 py-6 min-h-[76px] md:gap-8 md:px-6 md:py-8"
                >
                  <span className="font-mono text-xs text-blood">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    className="h-6 w-6 shrink-0 text-bone transition-colors duration-300 group-hover:text-black md:h-7 md:w-7"
                    aria-hidden
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-display text-lg font-extrabold text-milk transition-colors duration-300 group-hover:text-black md:text-2xl">
                      {l.name}
                    </h3>
                    <p className="mt-0.5 truncate font-mono text-[11px] text-bone transition-colors duration-300 group-hover:text-black/80 md:text-xs">
                      {l.handle} — {l.tag}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-bone/50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black md:h-7 md:w-7" />
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-8 text-center font-mono text-[11px] tracking-[0.25em] text-bone/50 uppercase">
            все ссылки открываются в новой вкладке — безопасно и без слежки
          </p>
        </Reveal>
      </div>
    </section>
  );
}
