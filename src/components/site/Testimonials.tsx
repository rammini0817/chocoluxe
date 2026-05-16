import { motion } from "framer-motion";

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
    <section className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-gold/80">04 — Words</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl tracking-tight">
            Whispered <span className="italic text-gradient-gold">praise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="glass rounded-2xl p-8 flex flex-col gap-6 hover:border-gold/30 transition-all"
            >
              <div className="font-display text-5xl text-gold/40 leading-none">"</div>
              <blockquote className="font-display text-2xl leading-snug text-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto pt-6 border-t border-border/60">
                <div className="text-sm">{t.name}</div>
                <div className="text-xs text-foreground/50 tracking-wider uppercase">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
