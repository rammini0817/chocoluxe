const items = [
  {
    quote: "The most beautiful chocolate I've ever received. The box alone is a memory.",
    name: "Élodie Marchand",
    role: "Vogue Paris",
  },
  {
    quote: "Each piece feels like an heirloom. We send them to every client, every season.",
    name: "Hugo Bertrand",
    role: "Maison Lacoste",
  },
  {
    quote: "Texture, shine, depth — flawless. A true house of patisserie-grade chocolate.",
    name: "Sofia Lindqvist",
    role: "Pastry Critic",
  },
];

export function Testimonials() {
  return (
    <section data-pin className="relative py-32 lg:py-44">
      <div data-pin-content className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-20">
          <span data-reveal className="text-xs tracking-[0.4em] uppercase text-gold/80">04 — Words</span>
          <h2 data-reveal className="mt-4 font-display text-5xl md:text-7xl tracking-tight">
            Whispered <span className="italic text-gradient-gold">praise</span>
          </h2>
        </div>

        <div data-reveal-group className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure
              key={t.name}
              data-reveal-item
              className="glass rounded-2xl p-8 flex flex-col gap-6 hover:border-gold/30 hover:-translate-y-1.5 transition-all duration-500"
            >
              <div className="font-display text-5xl text-gold/40 leading-none">"</div>
              <blockquote className="font-display text-2xl leading-snug text-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto pt-6 border-t border-border/60">
                <div className="text-sm">{t.name}</div>
                <div className="text-xs text-foreground/50 tracking-wider uppercase">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
