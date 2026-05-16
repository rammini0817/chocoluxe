import { motion } from "framer-motion";
import f1 from "@/assets/flavor-1.jpg";
import f2 from "@/assets/flavor-2.jpg";
import f3 from "@/assets/flavor-3.jpg";
import f4 from "@/assets/flavor-4.jpg";

const flavors = [
  { img: f1, name: "Noir Royale", note: "72% Single-Origin Cacao", price: "€48" },
  { img: f2, name: "Fleur de Sel Caramel", note: "Burnt sugar, Brittany salt", price: "€52" },
  { img: f3, name: "Pistache & Crème", note: "Sicilian pistachio, white ganache", price: "€56" },
  { img: f4, name: "Praliné d'Or", note: "Piedmont hazelnut, gold leaf", price: "€62" },
];

export function Flavors() {
  return (
    <section id="flavors" className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span data-reveal className="text-xs tracking-[0.4em] uppercase text-gold/80">01 — La Collection</span>
            <h2 data-reveal className="mt-4 font-display text-5xl md:text-7xl tracking-tight">
              Featured <span className="italic text-gradient-gold">Flavors</span>
            </h2>
          </div>
          <p data-reveal className="max-w-md text-foreground/70 font-light">
            Each piece is hand-finished in our atelier — small batches, slow tempering, single-origin beans.
          </p>
        </div>

        <div data-reveal-group className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flavors.map((f, i) => (
            <motion.article
              key={f.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl glass overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <motion.img
                  src={f.img}
                  alt={f.name}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-gold/90">
                  No. 0{i + 1}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl">{f.name}</h3>
                  <span className="text-gold text-sm">{f.price}</span>
                </div>
                <p className="mt-1 text-sm text-foreground/60 font-light">{f.note}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
