import story from "@/assets/story.jpg";

export function Story() {
  return (
    <section id="story" className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden noise order-2 lg:order-1">
          <img
            src={story}
            alt="Chocolatier tempering chocolate on marble"
            width={1280}
            height={1536}
            loading="lazy"
            data-img-zoom
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
        </div>

        <div className="order-1 lg:order-2">
          <span data-reveal className="text-xs tracking-[0.4em] uppercase text-gold/80">03 — Our Story</span>
          <h2 data-reveal className="mt-4 font-display text-5xl md:text-7xl tracking-tight leading-[0.95]">
            A craft <br />
            <span className="italic text-gradient-gold">poured slowly.</span>
          </h2>
          <div data-reveal-group className="mt-8 space-y-5 text-foreground/75 font-light leading-relaxed">
            <p data-reveal-item>
              Born in a tiny kitchen in Lyon, Maison Cocoa began as a Sunday ritual — two hands,
              one marble slab, and the quiet patience of tempered chocolate finding its shine.
            </p>
            <p data-reveal-item>
              Today, every bonbon is still made by hand. We source single-origin cacao from
              Madagascar, Peru, and Venezuela, then let time — not machines — do the rest.
            </p>
          </div>

          <div data-reveal-group className="mt-12 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { k: "06", v: "Origins" },
              { k: "48h", v: "Tempering" },
              { k: "100%", v: "Handmade" },
            ].map((s) => (
              <div key={s.k} data-reveal-item>
                <div className="font-display text-4xl text-gold">{s.k}</div>
                <div className="mt-1 text-xs tracking-[0.2em] uppercase text-foreground/50">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
