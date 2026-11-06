import { Noise } from "@/components/site/noise";
import { Preloader } from "@/components/site/preloader";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Marquee, MarqueeSlow } from "@/components/site/marquee";
import { About } from "@/components/site/about";
import { Tracks } from "@/components/site/tracks";
import { Links } from "@/components/site/links";
import { Footer } from "@/components/site/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "BLOODMILK",
  genre: "Nu-metal",
  sameAs: [
    "https://t.me/blood_m1lk",
    "https://vk.com/artist/bloodmilk",
    "https://music.yandex.ru/artist/21462579",
    "https://www.tiktok.com/@blxxd_m1lk",
    "https://www.instagram.com/blood_m1lk",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Preloader />
      <Noise />
      <Nav />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Marquee />
        <About />
        <Tracks />
        <MarqueeSlow />
        <Links />
      </main>
      <Footer />
    </>
  );
}
