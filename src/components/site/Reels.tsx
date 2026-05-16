import r1 from "@/assets/reel-1.jpg";
import r2 from "@/assets/reel-2.jpg";
import r3 from "@/assets/reel-3.jpg";
import r4 from "@/assets/reel-4.jpg";

const reels = [
  { img: r1, caption: "Pouring ganache, 32°C" },
  { img: r2, caption: "Hand-applied gold leaf" },
  { img: r3, caption: "Today's batch — spiral" },
  { img: r4, caption: "Wrapped for someone" },
];

export function Reels() {
  return (
    <section id="reels" className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span data-reveal className="text-xs tracking-[0.4em] uppercase text-gold/80">05 — From the Atelier</span>
            <h2 data-reveal className="mt-4 font-display text-5xl md:text-7xl tracking-tight">
              Follow the <span className="italic text-gradient-gold">craft</span>
            </h2>
          </div>
          <a data-reveal href="#" className="text-sm text-gold hover:underline underline-offset-4">@maisoncocoa →</a>
        </div>

        <div data-reveal-group className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reels.map((r, i) => (
            <a
              href="#"
              key={i}
              data-reveal-item
              data-float
              className="group relative block aspect-[3/4] rounded-2xl overflow-hidden noise hover:-translate-y-2 transition-transform duration-500"
            >
              <img
                src={r.img}
                alt={r.caption}
                width={1024}
                height={1280}
                loading="lazy"
                data-img-zoom
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <p className="text-xs tracking-wider text-foreground/90 font-light max-w-[70%]">{r.caption}</p>
                <span className="rounded-full glass h-9 w-9 grid place-items-center text-gold">▷</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
