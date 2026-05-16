import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import g1 from "@/assets/giftbox-1.jpg";
import g2 from "@/assets/giftbox-2.jpg";
import g3 from "@/assets/giftbox-3.jpg";

const boxes = [
  { img: g1, name: "L'Héritage", pieces: "24 pieces", price: "€180", desc: "Burgundy velvet box, ribboned in silk gold." },
  { img: g2, name: "Le Noir", pieces: "30 pieces", price: "€240", desc: "Onyx wood case, signature dark assortment." },
  { img: g3, name: "Pétit Atelier", pieces: "12 pieces", price: "€110", desc: "Matte black round, perfect for petite gifting." },
];

export function GiftBoxes() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="gifts" ref={ref} className="relative py-32 lg:py-44 overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute -top-20 right-0 font-display italic text-[18vw] leading-none text-gold/[0.04] pointer-events-none select-none"
      >
        Gifting
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-gold/80">02 — The Atelier</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl tracking-tight">
            Luxury <span className="italic text-gradient-gold">Gift Boxes</span>
          </h2>
          <p className="mt-6 text-foreground/70 font-light">
            Composed by hand, sealed with wax, delivered in velvet. A keepsake worth as much as what's inside.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {boxes.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 noise">
                <img
                  src={b.img}
                  alt={b.name}
                  width={1280}
                  height={1280}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                <div className="absolute bottom-4 right-4 rounded-full glass px-4 py-1.5 text-xs">{b.pieces}</div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl">{b.name}</h3>
                  <p className="mt-1 text-sm text-foreground/60 font-light max-w-xs">{b.desc}</p>
                </div>
                <span className="text-gold font-display text-2xl">{b.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
